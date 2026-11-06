/**
 * SkillBoardManager: ระบบบริหารจัดการกระดานสกิล (Skill Board & Presets Engine)
 * พัฒนาสำหรับ Phase 2 - งาน 2.3 ตามข้อกำหนด GDD:
 * - 07_skill_slot_system.md (ระบบ Skill Board ปลดล็อก 2 ชั้น: แถวธาตุ -> สกิล -> อัปเลเวล 1-5)
 * - กฎการสวมใส่ 4 ช่อง (ห้ามซ้ำ, จำกัดธาตุ/สายละไม่เกิน 2 ท่า, ต้องปลดล็อกแล้ว)
 * - ระบบ Skill Presets (สร้าง, บันทึก, ลบ, นำไปสวมใส่ให้สัตว์เลี้ยง)
 */

import skillsData from '../data/skills.json' with { type: 'json' };
import elementsData from '../data/elements.json' with { type: 'json' };
import { saveManager, SkillPreset } from './save_manager';
import { getSkillBranch, MAX_SKILLS_PER_BRANCH } from './combat';

export type SkillTier = 'S' | 'M' | 'L' | 'AOE';

export interface SkillBoardItem {
  id: string;
  name: string;
  element: string;
  branch: string;
  tier: SkillTier;
  spCost: number;
  baseChance: number;
  damageMult: number;
  description: string;
  isUnlocked: boolean;
  level: number; // 0 if locked, 1-5 if unlocked
  unlockCost: {
    gold: number;
    books: number;
    crystals: number;
  };
  levelUpCost: {
    books: number;
    gold: number;
  } | null;
  prerequisiteSkillId?: string;
}

export interface SkillRow {
  elementId: string;
  name: string;
  icon: string;
  category: 'element' | 'neutral';
  isUnlocked: boolean;
  unlockCostStones: number;
  skills: SkillBoardItem[];
}

export interface NeutralBranchDef {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  description: string;
}

export const NEUTRAL_BRANCHES: NeutralBranchDef[] = [
  { id: 'martial', name: 'สายกระบวนท่า', fullName: '🥋 สายกระบวนท่า (Martial Arts)', icon: '🥋', description: 'ตีไร้ธาตุ & สถานะผิดปกติ' },
  { id: 'medical', name: 'สายพยาบาล', fullName: '💚 สายพยาบาล (Medical Arts)', icon: '💚', description: 'ฟื้นฟู HP & ล้างดีบัฟ & เติม SP' },
  { id: 'trick', name: 'สายเล่ห์กล', fullName: '🎭 สายเล่ห์กล (Trick Arts)', icon: '🎭', description: 'ตีเบา & ลดสถานะศัตรู & ตัด SP' },
  { id: 'catalyst', name: 'สายเร่งปฏิกิริยา', fullName: '⚡ สายเร่งปฏิกิริยา (Catalyst Arts)', icon: '⚡', description: 'เร่งบัฟ & เร่งเกจไม้ตาย' },
  { id: 'secret', name: 'สายวิชาลับ', fullName: '📜 สายวิชาลับ (Secret Arts)', icon: '📜', description: 'กลไกพิเศษ โต้กลับ & เงามายา' },
  { id: 'defense', name: 'สายวิชาป้องกัน', fullName: '🛡️ สายวิชาป้องกัน (Defense Arts)', icon: '🛡️', description: 'เคล็ดลับวิชาป้องกันความเสียหาย & ลดทอนดาเมจ' },
];

// ค่าใช้จ่ายในการปลดล็อกแถวธาตุ (ใช้หินธาตุ 3 ชิ้นสำหรับธาตุที่ไม่ได้ปลดฟรีเริ่มต้น)
export const ROW_UNLOCK_STONE_COST = 3;
export const FREE_STARTER_ROWS = [
  'fire',
  'wind',
  'earth',
  'neutral',
  'martial',
  'medical',
  'trick',
  'catalyst',
  'secret',
  'defense',
];

// สูตรค่าใช้จ่ายการปลดล็อกสกิลตาม Tier
export const SKILL_UNLOCK_COSTS: Record<SkillTier, { gold: number; books: number; crystals: number }> = {
  S: { gold: 200, books: 0, crystals: 0 },
  M: { gold: 400, books: 1, crystals: 0 },
  L: { gold: 800, books: 2, crystals: 10 },
  AOE: { gold: 600, books: 1, crystals: 0 },
};

// สูตรค่าใช้จ่ายการอัปเลเวลสกิล (Lv.1 -> Lv.5)
export const SKILL_LEVEL_UP_COSTS: Record<number, { books: number; gold: number }> = {
  2: { books: 1, gold: 150 },
  3: { books: 2, gold: 300 },
  4: { books: 3, gold: 500 },
  5: { books: 5, gold: 1000 },
};

export class SkillBoardManager {
  /**
   * ดึงแถวสกิลทั้งหมด (11 แถวธาตุ + 5 แถวสายวิชาไร้ธาตุ = 16 แถว)
   */
  public getAllRows(): SkillRow[] {
    const save = saveManager.getData();
    const rows: SkillRow[] = [];

    // 1. แถววิชาประจำธาตุ 11 ธาตุหลัก
    for (const el of elementsData.elements) {
      const isUnlocked = save.unlockedElementRows.includes(el.id);
      const rowSkills = this.getSkillsForElement(el.id);
      rows.push({
        elementId: el.id,
        name: `ธาตุ${el.name}`,
        icon: el.icon,
        category: 'element',
        isUnlocked,
        unlockCostStones: FREE_STARTER_ROWS.includes(el.id) ? 0 : ROW_UNLOCK_STONE_COST,
        skills: rowSkills,
      });
    }

    // 2. แถวสายวิชาไร้ธาตุ 5 สาย (แยกแถวเดี่ยว ไม่เอามารวมกัน)
    for (const nb of NEUTRAL_BRANCHES) {
      const isUnlocked = save.unlockedElementRows.includes(nb.id) || save.unlockedElementRows.includes('neutral');
      const rowSkills = this.getSkillsForBranch(nb.id);
      rows.push({
        elementId: nb.id,
        name: nb.name,
        icon: nb.icon,
        category: 'neutral',
        isUnlocked,
        unlockCostStones: 0, // 5 สายไร้ธาตุเปิดฟรีทั้งหมดตามหลักการ GDD
        skills: rowSkills,
      });
    }

    return rows;
  }

  /**
   * ดึงข้อมูลแถวธาตุเฉพาะ
   */
  public getRow(elementId: string): SkillRow | undefined {
    return this.getAllRows().find(r => r.elementId === elementId);
  }

  /**
   * ตรวจสอบว่าสามารถปลดล็อกแถวธาตุได้หรือไม่
   */
  public canUnlockRow(elementId: string): { canUnlock: boolean; reason?: string } {
    const save = saveManager.getData();
    if (save.unlockedElementRows.includes(elementId)) {
      return { canUnlock: false, reason: 'แถวธาตุนี้ปลดล็อกแล้ว' };
    }

    if (FREE_STARTER_ROWS.includes(elementId)) {
      return { canUnlock: true };
    }

    const currentStones = save.inventory.elementStones[elementId] || 0;
    if (currentStones < ROW_UNLOCK_STONE_COST) {
      return {
        canUnlock: false,
        reason: `ต้องการหินธาตุ [${elementId}] ${ROW_UNLOCK_STONE_COST} ชิ้น (มีอยู่ ${currentStones} ชิ้น)`,
      };
    }

    return { canUnlock: true };
  }

  /**
   * ปลดล็อกแถวธาตุ
   */
  public unlockRow(elementId: string): { success: boolean; error?: string } {
    const check = this.canUnlockRow(elementId);
    if (!check.canUnlock) {
      return { success: false, error: check.reason };
    }

    const stoneCost = FREE_STARTER_ROWS.includes(elementId) ? 0 : ROW_UNLOCK_STONE_COST;
    return saveManager.unlockElementRow(elementId, stoneCost);
  }

  /**
   * ดึงข้อมูลสกิลแบบละเอียด
   */
  public getSkill(skillId: string): SkillBoardItem | undefined {
    const rawSkill = (skillsData.skills as Array<{
      id: string;
      name: string;
      element: string;
      tier: string;
      baseChance: number;
      damageMult: number;
      description: string;
      spCost?: number;
    }>).find(s => s.id === skillId);

    if (!rawSkill) return undefined;

    const save = saveManager.getData();
    const isUnlocked = save.unlockedSkills.includes(skillId);
    const level = isUnlocked ? (save.skillLevels[skillId] || 1) : 0;
    const branch = getSkillBranch(skillId);

    // กำหนดประเภท Tier ให้เป็นมาตรฐาน S, M, L, AOE
    let tier: SkillTier = 'S';
    if (skillId.endsWith('_aoe')) {
      tier = 'AOE';
    } else if (rawSkill.tier === 'L') {
      tier = 'L';
    } else if (rawSkill.tier === 'M') {
      tier = 'M';
    }

    const unlockCost = SKILL_UNLOCK_COSTS[tier];
    const nextLevel = level < 5 ? level + 1 : 0;
    const levelUpCost = isUnlocked && nextLevel > 1 ? SKILL_LEVEL_UP_COSTS[nextLevel] : null;

    // คำนวณสกิลที่เป็นเงื่อนไขเบื้องต้น (Prerequisite)
    let prerequisiteSkillId: string | undefined;
    if (tier === 'M') {
      // ต้องการสกิล S ในสายเดียวกัน
      prerequisiteSkillId = this.findPrerequisiteSkill(skillId, 'S');
    } else if (tier === 'L') {
      // ต้องการสกิล M ในสายเดียวกัน
      prerequisiteSkillId = this.findPrerequisiteSkill(skillId, 'M');
    }

    const spCost = rawSkill.spCost ?? (tier === 'S' ? 20 : tier === 'M' ? 35 : 55);

    return {
      id: rawSkill.id,
      name: rawSkill.name,
      element: rawSkill.element,
      branch,
      tier,
      spCost,
      baseChance: rawSkill.baseChance,
      damageMult: rawSkill.damageMult,
      description: rawSkill.description,
      isUnlocked,
      level,
      unlockCost,
      levelUpCost,
      prerequisiteSkillId,
    };
  }

  /**
   * ตรวจสอบว่าสามารถปลดล็อกสกิลได้หรือไม่
   */
  public canUnlockSkill(skillId: string): { canUnlock: boolean; reason?: string } {
    const skill = this.getSkill(skillId);
    if (!skill) return { canUnlock: false, reason: 'ไม่พบสกิลในระบบ' };
    if (skill.isUnlocked) return { canUnlock: false, reason: 'สกิลนี้ปลดล็อกแล้ว' };

    const save = saveManager.getData();

    // 1. ตรวจสอบว่าแถวธาตุหรือแถวสายวิชาปลดล็อกหรือยัง
    const rowId = skill.element === 'neutral' ? skill.branch : skill.element;
    const isRowUnlocked = save.unlockedElementRows.includes(rowId) ||
      save.unlockedElementRows.includes(skill.element) ||
      (skill.element === 'neutral' && save.unlockedElementRows.includes('neutral'));

    if (!isRowUnlocked) {
      return { canUnlock: false, reason: `ต้องปลดล็อกแถวธาตุ [${rowId}] ก่อน` };
    }

    // 2. ตรวจสอบสกิลขั้นก่อนหน้า (Prerequisite)
    if (skill.prerequisiteSkillId && !save.unlockedSkills.includes(skill.prerequisiteSkillId)) {
      const preSkill = this.getSkill(skill.prerequisiteSkillId);
      return {
        canUnlock: false,
        reason: `ต้องปลดล็อกสกิล [${preSkill?.name || skill.prerequisiteSkillId}] ก่อน`,
      };
    }

    // 3. ตรวจสอบทรัพยากร
    if (save.inventory.gold < skill.unlockCost.gold) {
      return {
        canUnlock: false,
        reason: `เหรียญทองไม่พอ (ต้องการ ${skill.unlockCost.gold} Gold, มี ${save.inventory.gold} Gold)`,
      };
    }

    if (skill.unlockCost.books > 0) {
      const currentBooks = save.inventory.skillBooks[skillId] || 0;
      if (currentBooks < skill.unlockCost.books) {
        return {
          canUnlock: false,
          reason: `ต้องการคัมภีร์สกิล ${skill.unlockCost.books} เล่ม (มี ${currentBooks} เล่ม)`,
        };
      }
    }

    if (skill.unlockCost.crystals > 0) {
      if (save.inventory.crystals < skill.unlockCost.crystals) {
        return {
          canUnlock: false,
          reason: `ต้องการคริสตัล ${skill.unlockCost.crystals} ชิ้น (มี ${save.inventory.crystals} ชิ้น)`,
        };
      }
    }

    return { canUnlock: true };
  }

  /**
   * ปลดล็อกสกิล
   */
  public unlockSkill(skillId: string): { success: boolean; error?: string } {
    const check = this.canUnlockSkill(skillId);
    if (!check.canUnlock) {
      return { success: false, error: check.reason };
    }

    const skill = this.getSkill(skillId)!;
    const save = saveManager.getData();

    // หักคริสตัลถ้ามี
    if (skill.unlockCost.crystals > 0) {
      if (!saveManager.consumeResources({ crystals: skill.unlockCost.crystals })) {
        return { success: false, error: 'คริสตัลไม่พอ' };
      }
    }

    return saveManager.unlockSkill(skillId, skill.unlockCost.gold, skill.unlockCost.books);
  }

  /**
   * ตรวจสอบว่าสามารถอัปเลเวลสกิลได้หรือไม่
   */
  public canLevelUpSkill(skillId: string): {
    canLevelUp: boolean;
    reason?: string;
    cost?: { books: number; gold: number };
  } {
    const skill = this.getSkill(skillId);
    if (!skill) return { canLevelUp: false, reason: 'ไม่พบสกิลในระบบ' };
    if (!skill.isUnlocked) return { canLevelUp: false, reason: 'ต้องปลดล็อกสกิลก่อนอัปเลเวล' };
    if (skill.level >= 5) return { canLevelUp: false, reason: 'สกิลถึงระดับเลเวลสูงสุด (Lv.5) แล้ว' };

    const nextLevel = skill.level + 1;
    const cost = SKILL_LEVEL_UP_COSTS[nextLevel];
    if (!cost) return { canLevelUp: false, reason: 'ไม่พบข้อมูลค่าใช้จ่าย' };

    const save = saveManager.getData();
    if (save.inventory.gold < cost.gold) {
      return {
        canLevelUp: false,
        reason: `เหรียญทองไม่พอ (ต้องการ ${cost.gold} Gold, มี ${save.inventory.gold} Gold)`,
        cost,
      };
    }

    const currentBooks = save.inventory.skillBooks[skillId] || 0;
    if (currentBooks < cost.books) {
      return {
        canLevelUp: false,
        reason: `ต้องการคัมภีร์สกิล ${cost.books} เล่ม (มี ${currentBooks} เล่ม)`,
        cost,
      };
    }

    return { canLevelUp: true, cost };
  }

  /**
   * อัปเลเวลสกิล (Lv.1 - Lv.5)
   */
  public levelUpSkill(skillId: string): { success: boolean; newLevel?: number; error?: string } {
    const check = this.canLevelUpSkill(skillId);
    if (!check.canLevelUp || !check.cost) {
      return { success: false, error: check.reason };
    }

    const save = saveManager.getData();
    save.inventory.gold -= check.cost.gold;
    save.inventory.skillBooks[skillId] -= check.cost.books;

    const currentLevel = save.skillLevels[skillId] || 1;
    const newLevel = currentLevel + 1;
    save.skillLevels[skillId] = newLevel;
    saveManager.save();

    return { success: true, newLevel };
  }

  /**
   * คำนวณตัวคูณโบนัสพลังของสกิลตามระดับเลเวล (Lv.1 = ×1.00, Lv.5 = ×1.25)
   */
  public getSkillLevelDamageMultiplier(skillId: string): number {
    const level = saveManager.getSkillLevel(skillId);
    if (level <= 1) return 1.0;
    // เพิ่มดาเมจ +5% ต่อเลเวลที่เกิน 1 (Lv.2 = 1.05, Lv.3 = 1.10, Lv.4 = 1.15, Lv.5 = 1.25)
    return level === 5 ? 1.25 : 1 + (level - 1) * 0.05;
  }

  // ==========================================
  // การติดตั้งสกิลและตรวจสอบความถูกต้อง (Skill Loadout)
  // ==========================================

  /**
   * ตรวจสอบความถูกต้องของชุดสกิล 4 ช่อง
   * ตามเงื่อนไข:
   * 1. สกิลต้องปลดล็อกแล้วในบัญชี
   * 2. ห้ามมีสกิลซ้ำกัน
   * 3. ธาตุหรือสายเดียวกันใส่ได้ไม่เกิน 2 ท่า
   */
  public validateLoadout(skillIds: string[]): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const save = saveManager.getData();
    const seen = new Set<string>();
    const branchCounts = new Map<string, number>();

    const activeSkills = skillIds.filter(Boolean);
    if (activeSkills.length !== 4) {
      errors.push(`ต้องติดตั้งสกิลให้ครบ 4 ช่อง (ปัจจุบันมี ${activeSkills.length} ช่อง)`);
    }

    for (let i = 0; i < activeSkills.length; i++) {
      const id = activeSkills[i];

      // ตรวจสอบว่ามีสกิลนี้อยู่จริงไหม
      const sk = this.getSkill(id);
      if (!sk) {
        errors.push(`ช่องที่ ${i + 1}: ไม่พบสกิลรหัส [${id}] ในระบบ`);
        continue;
      }

      // ตรวจสอบว่าปลดล็อกหรือยัง
      if (!save.unlockedSkills.includes(id)) {
        errors.push(`ช่องที่ ${i + 1}: สกิล [${sk.name}] ยังไม่ได้ปลดล็อกในกระดานสกิล`);
      }

      // ตรวจสอบสกิลซ้ำ
      if (seen.has(id)) {
        errors.push(`ช่องที่ ${i + 1}: สกิล [${sk.name}] ถูกสวมใส่ซ้ำ`);
      }
      seen.add(id);

      // ตรวจสอบโควตาสาย/ธาตุละไม่เกิน 2 ท่า
      const branch = sk.branch;
      const count = (branchCounts.get(branch) || 0) + 1;
      branchCounts.set(branch, count);
      if (count > MAX_SKILLS_PER_BRANCH) {
        errors.push(`สาย [${branch}] สวมใส่เกินโควตา ${MAX_SKILLS_PER_BRANCH} ท่า`);
      }
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * ตรวจสอบความถูกต้องของการติดตั้งสกิลลงในช่องเป้าหมาย (0-3) ของฮีโร่
   * รองรับการติดตั้งทีละช่องสำหรับสัตว์เลี้ยงใหม่ที่ยังไม่มีสกิลครบ 4 ช่อง
   * กฎที่ตรวจสอบ:
   * 1. สกิลต้องปลดล็อกแล้วในกระดานสกิล
   * 2. ห้ามสวมใส่สกิลซ้ำกับช่องอื่น
   * 3. สายวิชาเดียวกันใส่ได้ไม่เกิน 2 ท่า
   */
  public validateSlotEquip(
    heroId: string,
    slotIdx: number,
    skillId: string
  ): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const save = saveManager.getData();
    const hero = save.ownedHeroes[heroId];
    if (!hero) {
      return { valid: false, errors: [`ไม่พบสัตว์เลี้ยง [${heroId}] ในคลัง`] };
    }

    if (slotIdx < 0 || slotIdx > 3) {
      return { valid: false, errors: [`ช่องเป้าหมายไม่ถูกต้อง (${slotIdx + 1})`] };
    }

    // กรณีถอดสกิลออก (unequip) ให้ผ่านได้เสมอ
    if (!skillId) {
      return { valid: true, errors: [] };
    }

    const sk = this.getSkill(skillId);
    if (!sk) {
      return { valid: false, errors: [`ไม่พบสกิลรหัส [${skillId}] ในระบบ`] };
    }

    if (!save.unlockedSkills.includes(skillId)) {
      return { valid: false, errors: [`สกิล [${sk.name}] ยังไม่ได้ปลดล็อกในกระดานสกิล`] };
    }

    // ดึง 4 ช่องปัจจุบันของฮีโร่
    const currentSlots: string[] = [
      hero.customSkills[0] || '',
      hero.customSkills[1] || '',
      hero.customSkills[2] || '',
      hero.customSkills[3] || '',
    ];

    // ตรวจสอบว่าสกิลนี้ถูกสวมใส่ในช่องอื่นอยู่แล้วหรือไม่
    for (let i = 0; i < 4; i++) {
      if (i !== slotIdx && currentSlots[i] === skillId) {
        errors.push(`สกิล [${sk.name}] ถูกสวมใส่ในช่องที่ ${i + 1} แล้ว (ห้ามสวมใส่สกิลซ้ำ)`);
      }
    }

    // วางสกิลลงในช่องเป้าหมาย
    currentSlots[slotIdx] = skillId;

    // ตรวจสอบโควตาสาย/ธาตุละไม่เกิน 2 ท่า
    const branchCounts = new Map<string, number>();
    for (const sId of currentSlots) {
      if (!sId) continue;
      const sItem = this.getSkill(sId);
      if (!sItem) continue;
      const count = (branchCounts.get(sItem.branch) || 0) + 1;
      branchCounts.set(sItem.branch, count);
      if (count > MAX_SKILLS_PER_BRANCH) {
        errors.push(`สายวิชา [${sItem.branch}] สวมใส่เกินโควตา ${MAX_SKILLS_PER_BRANCH} ท่า`);
        break;
      }
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * ติดตั้งสกิลลงในช่องเป้าหมาย (0-3) ของสัตว์เลี้ยง
   * รองรับการใส่สกิลทีละช่องสำหรับสัตว์เลี้ยงใหม่
   */
  public equipSkillToSlot(
    heroId: string,
    slotIdx: number,
    skillId: string
  ): { success: boolean; error?: string } {
    const check = this.validateSlotEquip(heroId, slotIdx, skillId);
    if (!check.valid) {
      return { success: false, error: check.errors.join(' | ') };
    }

    const save = saveManager.getData();
    const hero = save.ownedHeroes[heroId];
    if (!hero) return { success: false, error: `ไม่พบสัตว์เลี้ยง [${heroId}]` };

    const newSlots: string[] = [
      hero.customSkills[0] || '',
      hero.customSkills[1] || '',
      hero.customSkills[2] || '',
      hero.customSkills[3] || '',
    ];
    newSlots[slotIdx] = skillId;

    return saveManager.setHeroSkills(heroId, newSlots);
  }

  /**
   * ติดตั้งชุดสกิลให้กับฮีโร่
   */
  public equipSkillsToHero(
    heroId: string,
    skillIds: string[],
    allowPartial = false
  ): { success: boolean; error?: string } {
    const activeSkills = skillIds.filter(Boolean);

    // หากส่งมาครบ 4 ช่อง หรือไม่อนุญาตให้เว้นว่าง
    if (activeSkills.length === 4 || !allowPartial) {
      const check = this.validateLoadout(skillIds);
      if (!check.valid) {
        return { success: false, error: check.errors.join(' | ') };
      }
      return saveManager.setHeroSkills(heroId, skillIds);
    }

    // กรณีอนุญาต partial loadout
    const save = saveManager.getData();
    const seen = new Set<string>();
    const branchCounts = new Map<string, number>();

    for (let i = 0; i < skillIds.length; i++) {
      const id = skillIds[i];
      if (!id) continue;
      const sk = this.getSkill(id);
      if (!sk) return { success: false, error: `ช่องที่ ${i + 1}: ไม่พบสกิลรหัส [${id}]` };
      if (!save.unlockedSkills.includes(id)) return { success: false, error: `ช่องที่ ${i + 1}: สกิล [${sk.name}] ยังไม่ได้ปลดล็อก` };
      if (seen.has(id)) return { success: false, error: `สกิล [${sk.name}] ถูกสวมใส่ซ้ำ` };
      seen.add(id);
      const count = (branchCounts.get(sk.branch) || 0) + 1;
      branchCounts.set(sk.branch, count);
      if (count > MAX_SKILLS_PER_BRANCH) return { success: false, error: `สาย [${sk.branch}] สวมใส่เกินโควตา ${MAX_SKILLS_PER_BRANCH} ท่า` };
    }

    const newSlots: string[] = [
      skillIds[0] || '',
      skillIds[1] || '',
      skillIds[2] || '',
      skillIds[3] || '',
    ];
    return saveManager.setHeroSkills(heroId, newSlots);
  }

  // ==========================================
  // ระบบ Skill Presets (พรีเซตสกิล)
  // ==========================================

  public getPresets(): SkillPreset[] {
    const presetsObj = saveManager.getSkillPresets();
    return Object.values(presetsObj).sort((a, b) => a.createdAt - b.createdAt);
  }

  public getPreset(presetId: string): SkillPreset | undefined {
    return saveManager.getSkillPresets()[presetId];
  }

  public createPreset(
    id: string,
    name: string,
    skills: [string, string, string, string],
    description?: string
  ): { success: boolean; preset?: SkillPreset; error?: string } {
    const check = this.validateLoadout(skills);
    if (!check.valid) {
      return { success: false, error: check.errors.join(' | ') };
    }

    const preset: SkillPreset = {
      id,
      name,
      description,
      skills,
      createdAt: Date.now(),
    };

    saveManager.saveSkillPreset(preset);
    return { success: true, preset };
  }

  public applyPresetToHero(heroId: string, presetId: string): { success: boolean; error?: string } {
    const preset = this.getPreset(presetId);
    if (!preset) return { success: false, error: 'ไม่พบพรีเซตสกิลนี้' };

    return this.equipSkillsToHero(heroId, preset.skills);
  }

  public deletePreset(presetId: string): { success: boolean; error?: string } {
    const res = saveManager.deleteSkillPreset(presetId);
    if (!res) return { success: false, error: 'ไม่พบพรีเซตที่ต้องการลบ' };
    return { success: true };
  }

  // ==========================================
  // Helper Methods
  // ==========================================

  private getSkillsForElement(elementId: string): SkillBoardItem[] {
    const all = (skillsData.skills as Array<{ id: string; element: string }>).filter(s => s.element === elementId);
    return all.map(s => this.getSkill(s.id)!).filter(Boolean);
  }

  public getSkillsForBranch(branchId: string): SkillBoardItem[] {
    const all = (skillsData.skills as Array<{ id: string; element: string }>).filter(s => {
      if (s.element !== 'neutral') return s.element === branchId;
      return getSkillBranch(s.id) === branchId;
    });
    return all.map(s => this.getSkill(s.id)!).filter(Boolean);
  }

  private findPrerequisiteSkill(skillId: string, targetTier: 'S' | 'M'): string | undefined {
    const currentBranch = getSkillBranch(skillId);
    const candidate = (skillsData.skills as Array<{ id: string; tier: string }>)
      .filter(s => getSkillBranch(s.id) === currentBranch && s.tier === targetTier)
      .map(s => s.id)[0];
    return candidate;
  }
}

// Instance หลักแบบ Singleton
export const skillBoardManager = new SkillBoardManager();

