/**
 * SaveManager: ระบบจัดการโปรไฟล์ผู้เล่น คลังทรัพยากร และการบันทึกสถานะลงใน LocalStorage
 * พัฒนาขึ้นสำหรับ Phase 2: Graybox Core Loop ตามเอกสาร GDD:
 * - 08_hatching_system.md
 * - 09_progression.md
 * - 11_economy_monetization.md
 * - 18_dev_phases.md
 */

import heroesData from '../data/heroes.json';
import skillsData from '../data/skills.json';
import { codexManager } from './codex_manager';

export type Rarity = 'B' | 'A' | 'S' | 'SS';
export type EggType = 'normal' | 'gold' | 'mythic';
export type GridRow = 'front' | 'mid' | 'back';

export interface OwnedHeroData {
  heroId: string;
  level: number; // 1 ถึง 50
  stars: number; // 1 ถึง 5
  exp: number; // EXP สะสมในเลเวลปัจจุบัน
  customSkills: string[]; // สกิล 4 ช่องที่สวมใส่
  preferredRow: GridRow;
}

/**
 * ดึงรหัสสกิลประจำธาตุเริ่มต้นระดับ Tier S (เช่น fire_s, water_s, wind_s)
 */
export function getDefaultElementalSkillS(element: string): string {
  const map: Record<string, string> = {
    fire: 'fire_s',
    water: 'water_s',
    wind: 'wind_s',
    earth: 'earth_s',
    lightning: 'lightning_s',
    ice: 'ice_s',
    plant: 'plant_s',
    poison: 'poison_s',
    dark: 'dark_s',
    light: 'light_s',
    psychic: 'psychic_s',
  };
  return map[element] || 'fire_s';
}

/** สกิลเริ่มต้น 17 สกิลแรกระดับ Tier S ทั้งสายธาตุและสายไร้ธาตุ */
export const INITIAL_UNLOCKED_SKILLS: string[] = [
  'fire_s', 'water_s', 'wind_s', 'earth_s', 'lightning_s', 'ice_s', 'plant_s', 'poison_s', 'dark_s', 'light_s', 'psychic_s',
  'martial_s', 'medical_s', 'trick_s', 'catalyst_s', 'secret_s', 'defense_s'
];

/** แถววิชาเริ่มต้น 17 แถว (11 ธาตุ + 6 ไร้ธาตุ) */
export const INITIAL_UNLOCKED_ELEMENT_ROWS: string[] = [
  'fire', 'water', 'wind', 'earth', 'lightning', 'ice', 'plant', 'poison', 'dark', 'light', 'psychic',
  'martial', 'medical', 'trick', 'catalyst', 'secret', 'defense', 'neutral'
];

export interface IncubatorSlot {
  slotIndex: number; // 0 หรือ 1
  eggType: EggType;
  startTime: number; // Timestamp (ms)
  durationMs: number; // ระยะเวลาในการฟักทั้งหมด (ms)
}

export interface StageClearRecord {
  stageId: string; // เช่น "stage_1_1"
  stars: number; // 1-3 ดาว
  clearedAt: number; // Timestamp (ms)
  firstClearClaimed: boolean;
}

export interface PlayerInventory {
  gold: number; // เหรียญทอง
  crystals: number; // คริสตัลสมดุล (พรีเมียม)
  food: number; // เสบียงสัตว์ (ใช้เพิ่มเลเวลฮีโร่)
  warmth: number; // พลังอบอุ่น (ใช้เร่งฟักไข่)
  normalEggs: number; // ไข่ธรรมดาที่ยังไม่ได้นำเข้าตู้ฟัก
  goldEggs: number; // ไข่ทองที่ยังไม่ได้นำเข้าตู้ฟัก
  mythicEggs: number; // ไข่มายาที่ยังไม่ได้นำเข้าตู้ฟัก
  shards: Record<string, number>; // เศษวิญญาณฮีโร่ { [heroId]: count }
  elementStones: Record<string, number>; // หินธาตุ { fire: 5, water: 2, ... }
  skillBooks: Record<string, number>; // คัมภีร์สกิล { poison_m2: 1, ... }
}

export interface SkillPreset {
  id: string;
  name: string;
  description?: string;
  skills: [string, string, string, string];
  createdAt: number;
}

export interface PlayerSaveData {
  version: number;
  playerName: string;
  playerLevel: number;
  playerExp: number;
  inventory: PlayerInventory;
  ownedHeroes: Record<string, OwnedHeroData>;
  // การจัดทีม
  activeTeam1v1: {
    mainHeroId: string;
    backupHeroId: string;
  };
  activeTeam2v2: {
    slot0: { heroId: string; row: GridRow; col: number };
    slot1: { heroId: string; row: GridRow; col: number };
  };
  // ระบบฟักไข่
  incubatorSlots: (IncubatorSlot | null)[];
  pityCounterSS: number; // นับถอยหลังการันตี SS จากไข่ทอง (รีเซ็ตที่ 30)
  totalEggsHatched: number;
  // ระบบด่าน
  clearedStages: Record<string, StageClearRecord>;
  currentChapter: number;
  unlockedStages: string[];
  // ระบบ Skill Board
  unlockedElementRows: string[]; // ธาตุที่ปลดล็อกแถวบนกระดานแล้ว
  unlockedSkills: string[]; // สกิลที่ผู้เล่นปลดล็อกและใช้งานได้
  skillLevels: Record<string, number>; // ระดับเลเวลสกิล (Lv.1 - Lv.5)
  skillPresets: Record<string, SkillPreset>; // พรีเซตสกิลที่บันทึกไว้
  // ระบบสมุดสะสมสัตว์เลี้ยง (Codex & Bestiary)
  seenHeroes: Record<string, number>; // สัตว์ที่เคยพบเจอในสนามรบ { [heroId]: timestamp }
  claimedHeroResearch: Record<string, number[]>; // รางวัลวิจัยที่รับแล้ว { [heroId]: [1, 2, 3] }
  claimedBondRewards: string[]; // รหัสชุดสายสัมพันธ์ที่กดรับรางวัลแล้ว
  // ตั้งค่า
  battleSpeed: 1 | 2 | 3;
  autoCastSignature: boolean;
  lastSavedAt: number;
}

export const SAVE_KEY = 'animalia_wild_heroes_save_v1';
export const MAX_HERO_LEVEL = 50;
export const MAX_HERO_STARS = 5;

// อัตราดรอปและระยะเวลาฟักไข่ (อิงตาม 08_hatching_system.md)
export const EGG_CONFIG: Record<EggType, { durationMs: number; rates: Record<Rarity, number>; costCrystals: number }> = {
  normal: {
    durationMs: 10 * 60 * 1000, // 10 นาที (600,000 ms)
    rates: { B: 0.80, A: 0.18, S: 0.02, SS: 0.00 },
    costCrystals: 0,
  },
  gold: {
    durationMs: 4 * 60 * 60 * 1000, // 4 ชั่วโมง (14,400,000 ms)
    rates: { B: 0.00, A: 0.55, S: 0.35, SS: 0.10 },
    costCrystals: 100,
  },
  mythic: {
    durationMs: 12 * 60 * 60 * 1000, // 12 ชั่วโมง (43,200,000 ms)
    rates: { B: 0.00, A: 0.00, S: 0.70, SS: 0.30 },
    costCrystals: 300,
  },
};

// เศษวิญญาณที่ได้รับเมื่อสุ่มได้สัตว์เลี้ยงซ้ำ (Duplicate Shards)
export const SHARDS_PER_DUPLICATE: Record<Rarity, number> = {
  B: 10,
  A: 20,
  S: 50,
  SS: 100,
};

// ค่าใช้จ่ายเศษวิญญาณในการอัปดาว (Star Awakening)
export const STAR_UPGRADE_COSTS: Record<number, number> = {
  2: 20,
  3: 50,
  4: 100,
  5: 200,
};

// ตัวคูณสเตตัสตามจำนวนดาว
export const STAR_STAT_MULTIPLIERS: Record<number, number> = {
  1: 1.00,
  2: 1.05, // +5%
  3: 1.12, // +12%
  4: 1.20, // +20%
  5: 1.30, // +30%
};

// สูตรคำนวณค่าใช้จ่ายในการอัปเลเวล (เสบียง + เหรียญทอง)
export function getLevelUpCost(currentLevel: number): { food: number; gold: number } {
  return {
    food: currentLevel * 80,
    gold: currentLevel * 40,
  };
}

// ตัวคูณสเตตัสตามเลเวล (+2% ต่อเลเวลที่เกิน 1)
export function getLevelStatMultiplier(level: number): number {
  return 1 + (Math.max(1, level) - 1) * 0.02;
}

export class SaveManager {
  private data: PlayerSaveData;

  constructor() {
    this.data = this.load();
  }

  /**
   * ดึงชุดข้อมูลเริ่มต้นสำหรับผู้เล่นใหม่ (Starter Kit)
   */
  public getStarterData(): PlayerSaveData {
    // ผู้เล่นเริ่มต้นด้วยฮีโร่ 3 ตัว (ไฟ / ลม / ดิน ครบ 3 สาย: Striker, Assassin, Tank)
    // แต่ละตัวมีสกิลประจำธาตุ 1 สกิลระดับ S ติดตั้งไว้ตั้งแต่เริ่มต้น
    const initialHeroes: Record<string, OwnedHeroData> = {
      rooster: {
        heroId: 'rooster',
        level: 1,
        stars: 1,
        exp: 0,
        customSkills: ['fire_s'],
        preferredRow: 'front',
      },
      cat: {
        heroId: 'cat',
        level: 1,
        stars: 1,
        exp: 0,
        customSkills: ['wind_s'],
        preferredRow: 'mid',
      },
      buffalo: {
        heroId: 'buffalo',
        level: 1,
        stars: 1,
        exp: 0,
        customSkills: ['earth_s'],
        preferredRow: 'front',
      },
    };

    return {
      version: 1,
      playerName: 'ผู้พิทักษ์สัตว์ป่า',
      playerLevel: 1,
      playerExp: 0,
      inventory: {
        gold: 1500,
        crystals: 150,
        food: 800,
        warmth: 30,
        normalEggs: 2, // แจกไข่ธรรมดาเริ่มต้น 2 ฟอง
        goldEggs: 1,   // แจกไข่ทองเริ่มต้น 1 ฟองเพื่อลุ้นตัวแรร์
        mythicEggs: 0,
        shards: {},
        elementStones: {
          fire: 3,
          wind: 3,
          earth: 3,
          water: 1,
          plant: 1,
        },
        skillBooks: {},
      },
      ownedHeroes: initialHeroes,
      activeTeam1v1: {
        mainHeroId: 'rooster',
        backupHeroId: 'cat',
      },
      activeTeam2v2: {
        slot0: { heroId: 'buffalo', row: 'front', col: 1 },
        slot1: { heroId: 'cat', row: 'mid', col: 1 },
      },
      incubatorSlots: [null, null], // 2 สล็อตสำหรับตู้ฟักไข่
      pityCounterSS: 0,
      totalEggsHatched: 0,
      clearedStages: {},
      currentChapter: 1,
      unlockedStages: ['stage_1_1'], // ปลดล็อกด่านแรกของบทที่ 1
      unlockedElementRows: [...INITIAL_UNLOCKED_ELEMENT_ROWS], // ปลดล็อกแถวเริ่มต้นครบ 16 แถว (11 ธาตุ + 5 สายไร้ธาตุ)
      unlockedSkills: [...INITIAL_UNLOCKED_SKILLS], // ปลดล็อกสกิลแรก (Tier S) ของทุกสายวิชาตั้งแต่เริ่มเกม
      skillLevels: {
        fire_s: 1, water_s: 1, wind_s: 1, earth_s: 1, lightning_s: 1, ice_s: 1, plant_s: 1, poison_s: 1, dark_s: 1, light_s: 1, psychic_s: 1,
        martial_s: 1, medical_s: 1, trick_s: 1, catalyst_s: 1, secret_s: 1
      },
      skillPresets: {
        preset_balanced: {
          id: 'preset_balanced',
          name: 'สมดุลรุกรับ',
          description: 'ผสมผสานโจมตีกายภาพ ธาตุไฟ ลม และดิน',
          skills: ['fire_s', 'wind_s', 'earth_s', 'martial_s'],
          createdAt: Date.now(),
        },
        preset_fire_burst: {
          id: 'preset_fire_burst',
          name: 'เพลิงเผาผลาญ',
          description: 'เน้นความเสียหายรุนแรงและสถานะเผาไหม้',
          skills: ['fire_s', 'lightning_s', 'martial_s', 'catalyst_s'],
          createdAt: Date.now(),
        },
        preset_earth_tank: {
          id: 'preset_earth_tank',
          name: 'ปราการพสุธา',
          description: 'เน้นการป้องกัน บล็อก เกราะ และฟื้นฟู',
          skills: ['earth_s', 'water_s', 'medical_s', 'trick_s'],
          createdAt: Date.now(),
        },
      },
      seenHeroes: {
        rooster: Date.now(),
        cat: Date.now(),
        buffalo: Date.now(),
      },
      claimedHeroResearch: {},
      claimedBondRewards: [],
      battleSpeed: 1,
      autoCastSignature: true,
      lastSavedAt: Date.now(),
    };
  }

  /**
   * โหลดข้อมูลจาก LocalStorage
   */
  public load(): PlayerSaveData {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return this.getStarterData();
      }
      const raw = window.localStorage.getItem(SAVE_KEY);
      if (!raw) {
        const fresh = this.getStarterData();
        this.save(fresh);
        return fresh;
      }
      const parsed = JSON.parse(raw) as PlayerSaveData;
      // ตรวจสอบความถูกต้องเบื้องต้น
      if (!parsed.version || !parsed.inventory || !parsed.ownedHeroes) {
        console.warn('[SaveManager] ข้อมูลเซฟเดิมเสียหาย กำลังสร้างข้อมูลเซฟเริ่มต้นใหม่...');
        const fresh = this.getStarterData();
        this.save(fresh);
        return fresh;
      }
      if (!parsed.skillLevels) {
        parsed.skillLevels = {};
        for (const s of (parsed.unlockedSkills || [])) {
          parsed.skillLevels[s] = 1;
        }
      }
      if (!parsed.skillPresets) {
        parsed.skillPresets = this.getStarterData().skillPresets;
      }

      // ตรวจสอบและอัปเดตสกิลเริ่มต้น 16 สกิลแรก (Tier S) และแถววิชาให้ปลดล็อกครบถ้วน
      if (!parsed.unlockedElementRows) parsed.unlockedElementRows = [];
      for (const row of INITIAL_UNLOCKED_ELEMENT_ROWS) {
        if (!parsed.unlockedElementRows.includes(row)) {
          parsed.unlockedElementRows.push(row);
        }
      }

      if (!parsed.unlockedSkills) parsed.unlockedSkills = [];
      for (const skId of INITIAL_UNLOCKED_SKILLS) {
        if (!parsed.unlockedSkills.includes(skId)) {
          parsed.unlockedSkills.push(skId);
        }
        if (!parsed.skillLevels[skId]) {
          parsed.skillLevels[skId] = 1;
        }
      }

      // ตรวจสอบฮีโร่: ปรับให้สกิลตรงตามที่สัตว์นั้นมีจริง (กรองเอาเฉพาะสกิลที่ปลดล็อกแล้วในเซฟ)
      if (parsed.ownedHeroes) {
        for (const hId in parsed.ownedHeroes) {
          const hero = parsed.ownedHeroes[hId];
          const heroMeta = (heroesData.heroes as Array<{ id: string; element?: string; defaultSkills?: string[] }>).find(h => h.id === hId);
          const defaultS = getDefaultElementalSkillS(heroMeta?.element || 'fire');

          if (!hero.customSkills || hero.customSkills.length === 0) {
            hero.customSkills = [defaultS];
          } else {
            // หากยังมีสกิล 4 สกิลที่ตรงกับ defaultSkills เดิมใน Phase 1 ให้ปรับเป็นสกิลเริ่มต้นประจำธาตุ 1 สกิลระดับ S
            const defSkills = heroMeta?.defaultSkills;
            const isOldDefault4 = Boolean(defSkills &&
              hero.customSkills.length === 4 &&
              hero.customSkills.every((s, i) => s === defSkills[i]));

            if (isOldDefault4) {
              hero.customSkills = [defaultS];
            } else {
              // กรองเฉพาะสกิลที่ปลดล็อกแล้วเท่านั้นในเซฟ
              const filtered = hero.customSkills.filter(sk => Boolean(sk) && parsed.unlockedSkills.includes(sk));
              hero.customSkills = filtered.length > 0 ? filtered : [defaultS];
            }
          }
        }
      }

      // ตรวจสอบและเริ่มต้นโครงสร้างระบบสมุดสะสมสัตว์เลี้ยง (Codex) หากยังไม่มี
      if (!parsed.seenHeroes) {
        parsed.seenHeroes = {};
        for (const hId in (parsed.ownedHeroes || {})) {
          parsed.seenHeroes[hId] = Date.now();
        }
      }
      if (!parsed.claimedHeroResearch) {
        parsed.claimedHeroResearch = {};
      }
      if (!parsed.claimedBondRewards) {
        parsed.claimedBondRewards = [];
      }

      return parsed;
    } catch (err) {
      console.error('[SaveManager] โหลดเซฟล้มเหลว:', err);
      return this.getStarterData();
    }
  }

  /**
   * บันทึกข้อมูลลงใน LocalStorage
   */
  public save(customData?: PlayerSaveData): void {
    try {
      if (customData) this.data = customData;
      this.data.lastSavedAt = Date.now();
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(SAVE_KEY, JSON.stringify(this.data));
      }
    } catch (err) {
      console.error('[SaveManager] บันทึกเซฟล้มเหลว:', err);
    }
  }

  /**
   * ล้างข้อมูลเซฟและรีเซ็ตกลับเป็นค่าเริ่มต้น
   */
  public reset(): PlayerSaveData {
    this.data = this.getStarterData();
    this.save();
    return this.data;
  }

  public getData(): PlayerSaveData {
    return this.data;
  }

  // ==========================================
  // การจัดการทรัพยากร (Inventory Management)
  // ==========================================

  public addGold(amt: number): void {
    this.data.inventory.gold = Math.max(0, this.data.inventory.gold + amt);
    this.save();
  }

  public addCrystals(amt: number): void {
    this.data.inventory.crystals = Math.max(0, this.data.inventory.crystals + amt);
    this.save();
  }

  public addFood(amt: number): void {
    this.data.inventory.food = Math.max(0, this.data.inventory.food + amt);
    this.save();
  }

  public addWarmth(amt: number): void {
    this.data.inventory.warmth = Math.max(0, this.data.inventory.warmth + amt);
    this.save();
  }

  public addEggs(type: EggType, count = 1): void {
    if (type === 'normal') this.data.inventory.normalEggs += count;
    else if (type === 'gold') this.data.inventory.goldEggs += count;
    else if (type === 'mythic') this.data.inventory.mythicEggs += count;
    this.save();
  }

  public addShards(heroId: string, count: number): void {
    this.data.inventory.shards[heroId] = (this.data.inventory.shards[heroId] || 0) + count;
    this.save();
  }

  public addElementStone(element: string, count = 1): void {
    if (count <= 0) return;
    this.data.inventory.elementStones[element] = (this.data.inventory.elementStones[element] || 0) + count;
    this.save();
  }

  public addSkillBook(skillId: string, count = 1): void {
    if (count <= 0) return;
    this.data.inventory.skillBooks[skillId] = (this.data.inventory.skillBooks[skillId] || 0) + count;
    this.save();
  }

  public consumeResources(costs: {
    gold?: number;
    crystals?: number;
    food?: number;
    warmth?: number;
    normalEggs?: number;
    goldEggs?: number;
    mythicEggs?: number;
  }): boolean {
    const inv = this.data.inventory;
    if ((costs.gold ?? 0) > inv.gold) return false;
    if ((costs.crystals ?? 0) > inv.crystals) return false;
    if ((costs.food ?? 0) > inv.food) return false;
    if ((costs.warmth ?? 0) > inv.warmth) return false;
    if ((costs.normalEggs ?? 0) > inv.normalEggs) return false;
    if ((costs.goldEggs ?? 0) > inv.goldEggs) return false;
    if ((costs.mythicEggs ?? 0) > inv.mythicEggs) return false;

    if (costs.gold) inv.gold -= costs.gold;
    if (costs.crystals) inv.crystals -= costs.crystals;
    if (costs.food) inv.food -= costs.food;
    if (costs.warmth) inv.warmth -= costs.warmth;
    if (costs.normalEggs) inv.normalEggs -= costs.normalEggs;
    if (costs.goldEggs) inv.goldEggs -= costs.goldEggs;
    if (costs.mythicEggs) inv.mythicEggs -= costs.mythicEggs;

    this.save();
    return true;
  }

  // ==========================================
  // การพัฒนาสัตว์เลี้ยง (Progression: Level & Stars)
  // ==========================================

  /**
   * เพิ่มสัตว์เลี้ยงเข้าคลัง หากมีอยู่แล้วจะแปลงเป็นเศษวิญญาณ
   */
  public acquireHero(heroId: string): { isNew: boolean; hero: OwnedHeroData; shardsGained?: number } {
    const heroMeta = (heroesData.heroes as Array<{ id: string; rarity: string; element?: string; defaultSkills: string[]; preferredRow?: string }>).find(h => h.id === heroId);
    if (!heroMeta) throw new Error(`ไม่พบฮีโร่ ${heroId}`);

    if (this.data.ownedHeroes[heroId]) {
      const rarity = heroMeta.rarity as Rarity;
      const shards = SHARDS_PER_DUPLICATE[rarity] || 10;
      this.addShards(heroId, shards);
      return { isNew: false, hero: this.data.ownedHeroes[heroId], shardsGained: shards };
    }

    const defaultSkill = getDefaultElementalSkillS(heroMeta.element || 'fire');

    const newHero: OwnedHeroData = {
      heroId,
      level: 1,
      stars: 1,
      exp: 0,
      customSkills: [defaultSkill], // สัตว์เลี้ยงที่ได้ใหม่จากไข่จะมีสกิลเริ่มต้นประจำธาตุ 1 สกิลระดับ S
      preferredRow: (heroMeta.preferredRow as GridRow) || 'mid',
    };

    this.data.ownedHeroes[heroId] = newHero;
    if (!this.data.seenHeroes) this.data.seenHeroes = {};
    this.data.seenHeroes[heroId] = Date.now(); // บันทึกลงสมุดสะสมอัตโนมัติเมื่อได้รับตัวใหม่
    this.save();
    return { isNew: true, hero: newHero };
  }

  /**
   * อัปเลเวลสัตว์เลี้ยง
   */
  public levelUpHero(heroId: string): { success: boolean; newLevel?: number; error?: string } {
    const hero = this.data.ownedHeroes[heroId];
    if (!hero) return { success: false, error: 'ไม่พบฮีโร่ตัวนี้ในคลัง' };
    if (hero.level >= MAX_HERO_LEVEL) return { success: false, error: 'ฮีโร่ถึงเลเวลสูงสุดแล้ว' };

    const cost = getLevelUpCost(hero.level);
    if (!this.consumeResources({ food: cost.food, gold: cost.gold })) {
      return { success: false, error: `ทรัพยากรไม่พอ (ต้องการเสบียง ${cost.food} และเหรียญ ${cost.gold})` };
    }

    hero.level += 1;
    this.save();
    return { success: true, newLevel: hero.level };
  }

  /**
   * อัปดาวสัตว์เลี้ยง (Star Awakening ★1 -> ★5)
   */
  public starUpHero(heroId: string): { success: boolean; newStars?: number; error?: string } {
    const hero = this.data.ownedHeroes[heroId];
    if (!hero) return { success: false, error: 'ไม่พบฮีโร่ตัวนี้ในคลัง' };
    if (hero.stars >= MAX_HERO_STARS) return { success: false, error: 'ฮีโร่ถึงระดับ 5 ดาวสูงสุดแล้ว' };

    const nextStar = hero.stars + 1;
    const requiredShards = STAR_UPGRADE_COSTS[nextStar] || 50;
    const currentShards = this.data.inventory.shards[heroId] || 0;

    if (currentShards < requiredShards) {
      return { success: false, error: `เศษวิญญาณไม่พอ (ต้องการ ${requiredShards} ชิ้น, มีอยู่ ${currentShards} ชิ้น)` };
    }

    this.data.inventory.shards[heroId] -= requiredShards;
    hero.stars = nextStar;
    this.save();
    return { success: true, newStars: hero.stars };
  }

  /**
   * บันทึกสกิล 4 ช่องที่สวมใส่
   */
  public setHeroSkills(heroId: string, skills: string[]): { success: boolean; error?: string } {
    const hero = this.data.ownedHeroes[heroId];
    if (!hero) return { success: false, error: 'ไม่พบฮีโร่ตัวนี้ในคลัง' };
    hero.customSkills = [...skills.slice(0, 4)];
    this.save();
    return { success: true };
  }

  /**
   * จัดทีมต่อสู้ 1v1 (ตัวหลัก + ตัวสำรอง)
   */
  public setActiveTeam1v1(mainHeroId: string, backupHeroId: string): { success: boolean; error?: string } {
    if (!this.data.ownedHeroes[mainHeroId]) return { success: false, error: `ไม่พบฮีโร่ ${mainHeroId} ในครอบครอง` };
    if (!this.data.ownedHeroes[backupHeroId]) return { success: false, error: `ไม่พบฮีโร่ ${backupHeroId} ในครอบครอง` };
    if (mainHeroId === backupHeroId) return { success: false, error: 'ฮีโร่ตัวหลักและตัวสำรองต้องไม่ซ้ำกัน' };
    this.data.activeTeam1v1 = { mainHeroId, backupHeroId };
    this.save();
    return { success: true };
  }

  /**
   * จัดทีมต่อสู้ 2v2 บนกระดาน 3x3 (Slot 0 + Slot 1)
   */
  public setActiveTeam2v2(
    slot0: { heroId: string; row: GridRow; col: number },
    slot1: { heroId: string; row: GridRow; col: number }
  ): { success: boolean; error?: string } {
    if (!this.data.ownedHeroes[slot0.heroId]) return { success: false, error: `ไม่พบฮีโร่ ${slot0.heroId} ในครอบครอง` };
    if (!this.data.ownedHeroes[slot1.heroId]) return { success: false, error: `ไม่พบฮีโร่ ${slot1.heroId} ในครอบครอง` };
    if (slot0.heroId === slot1.heroId) return { success: false, error: 'ห้ามใช้ฮีโร่ตัวเดียวกันใน 2 ช่อง' };
    if (slot0.row === slot1.row && slot0.col === slot1.col) return { success: false, error: 'ห้ามวางฮีโร่ซ้อนกันบนพิกัดเดียวกัน' };
    if (slot0.col < 0 || slot0.col > 2 || slot1.col < 0 || slot1.col > 2) return { success: false, error: 'พิกัด Col ต้องอยู่ระหว่าง 0-2' };
    this.data.activeTeam2v2 = { slot0, slot1 };
    this.save();
    return { success: true };
  }

  // ==========================================
  // ตู้ฟักไข่ (Incubator System)
  // ==========================================

  /**
   * วางไข่ลงในช่องฟัก
   */
  public placeEgg(slotIndex: number, eggType: EggType): { success: boolean; error?: string } {
    if (slotIndex < 0 || slotIndex >= 2) return { success: false, error: 'สล็อตไม่ถูกต้อง' };
    if (this.data.incubatorSlots[slotIndex]) return { success: false, error: 'ช่องฟักนี้มีไข่อยู่แล้ว' };

    // หักไข่ออกจากคลัง
    const req: Partial<PlayerInventory> = {};
    if (eggType === 'normal') req.normalEggs = 1;
    else if (eggType === 'gold') req.goldEggs = 1;
    else if (eggType === 'mythic') req.mythicEggs = 1;

    if (!this.consumeResources(req)) {
      return { success: false, error: `ไม่มีไข่ประเภท ${eggType} ในกระเป๋า` };
    }

    const cfg = EGG_CONFIG[eggType];
    const hatchReductionPct = codexManager.getHatchTimeReductionPct(this.data);
    const effectiveDurationMs = Math.round(cfg.durationMs * (1 - hatchReductionPct / 100));

    this.data.incubatorSlots[slotIndex] = {
      slotIndex,
      eggType,
      startTime: Date.now(),
      durationMs: effectiveDurationMs,
    };

    this.save();
    return { success: true };
  }

  /**
   * ตรวจสอบว่าไข่พร้อมฟักหรือยัง
   */
  public isEggReady(slotIndex: number): boolean {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return false;
    return Date.now() - slot.startTime >= slot.durationMs;
  }

  /**
   * ดึงเวลาคงเหลือในการฟัก (ms)
   */
  public getRemainingTimeMs(slotIndex: number): number {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return 0;
    const elapsed = Date.now() - slot.startTime;
    return Math.max(0, slot.durationMs - elapsed);
  }

  /**
   * ใช้พลังอบอุ่น (Warmth) เร่งเวลาฟัก
   */
  public applyWarmth(slotIndex: number, warmthToUse: number): { success: boolean; minutesReduced?: number; error?: string } {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return { success: false, error: 'ไม่มีไข่ในช่องนี้' };
    if (this.data.inventory.warmth < warmthToUse) return { success: false, error: 'พลังอบอุ่นไม่พอ' };

    // 1 พลังอบอุ่น = ลดเวลา 10 นาที (600,000 ms)
    const reduceMs = warmthToUse * 10 * 60 * 1000;
    slot.startTime -= reduceMs;
    this.data.inventory.warmth -= warmthToUse;
    this.save();
    return { success: true, minutesReduced: warmthToUse * 10 };
  }

  /**
   * เร่งฟักทันที (โหมดทดสอบ Graybox / Fast Hatch)
   */
  public instantHatchSlot(slotIndex: number): boolean {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return false;
    slot.startTime = Date.now() - slot.durationMs;
    this.save();
    return true;
  }

  /**
   * กะเทาะเปลือกไข่ (Hatch Egg) และรับสัตว์เลี้ยง
   */
  public hatchEgg(slotIndex: number): {
    success: boolean;
    hero?: OwnedHeroData;
    isNew?: boolean;
    shardsGained?: number;
    error?: string;
  } {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return { success: false, error: 'ไม่มีไข่ในช่องนี้' };
    if (!this.isEggReady(slotIndex)) {
      return { success: false, error: 'ไข่ยังไม่พร้อมฟัก (เวลายังไม่ครบ)' };
    }

    const cfg = EGG_CONFIG[slot.eggType];
    let selectedRarity: Rarity = 'B';

    // เช็ก Pity ไข่ทอง: ครบ 30 ฟอง (หรือ 28 ฟองหากมีบัฟ Codex Mastery Lv.15) การันตี SS แน่นอน
    if (slot.eggType === 'gold') {
      this.data.pityCounterSS += 1;
      const codexLvlInfo = codexManager.getCodexLevelInfo(this.data);
      const targetPity = codexLvlInfo.currentLevel >= 15 ? 28 : 30;

      if (this.data.pityCounterSS >= targetPity) {
        selectedRarity = 'SS';
        this.data.pityCounterSS = 0;
      }
    }

    if (selectedRarity !== 'SS') {
      const roll = Math.random();
      let cumulative = 0;
      for (const r of ['B', 'A', 'S', 'SS'] as Rarity[]) {
        cumulative += cfg.rates[r];
        if (roll <= cumulative) {
          selectedRarity = r;
          break;
        }
      }
    }

    if (selectedRarity === 'SS') {
      this.data.pityCounterSS = 0; // รีเซ็ต Pity เมื่อได้ SS
    }

    // สุ่มตัวละครตาม Rarity ที่ได้
    const candidateHeroes = (heroesData.heroes as Array<{ id: string; rarity: string }>).filter(h => h.rarity === selectedRarity);
    const chosen = candidateHeroes[Math.floor(Math.random() * candidateHeroes.length)];

    const res = this.acquireHero(chosen.id);

    // เคลียร์สล็อตฟักไข่
    this.data.incubatorSlots[slotIndex] = null;
    this.data.totalEggsHatched += 1;
    this.save();

    return {
      success: true,
      hero: res.hero,
      isNew: res.isNew,
      shardsGained: res.shardsGained,
    };
  }

  // ==========================================
  // ด่านผจญภัย (Campaign Stages)
  // ==========================================

  public recordStageClear(
    stageId: string,
    stars: number,
    rewards: {
      gold?: number;
      food?: number;
      crystals?: number;
      warmth?: number;
      egg?: EggType;
      unlockedNextStageId?: string;
    }
  ): void {
    const existing = this.data.clearedStages[stageId];
    const firstClear = !existing;

    this.data.clearedStages[stageId] = {
      stageId,
      stars: Math.max(existing?.stars || 0, stars),
      clearedAt: Date.now(),
      firstClearClaimed: true,
    };

    if (rewards.gold) this.addGold(rewards.gold);
    if (rewards.food) this.addFood(rewards.food);
    if (rewards.crystals) this.addCrystals(rewards.crystals);
    if (rewards.warmth) this.addWarmth(rewards.warmth);
    if (rewards.egg) this.addEggs(rewards.egg, 1);

    if (rewards.unlockedNextStageId && !this.data.unlockedStages.includes(rewards.unlockedNextStageId)) {
      this.data.unlockedStages.push(rewards.unlockedNextStageId);
    }

    this.save();
  }

  public getStageClear(stageId: string): StageClearRecord | undefined {
    return this.data.clearedStages[stageId];
  }

  public isStageCleared(stageId: string): boolean {
    return !!this.data.clearedStages[stageId];
  }

  public getTotalStars(): number {
    return Object.values(this.data.clearedStages).reduce((acc, cur) => acc + (cur.stars || 0), 0);
  }

  public getStageStars(stageId: string): number {
    return this.data.clearedStages[stageId]?.stars || 0;
  }

  // ==========================================
  // ระบบ Skill Board
  // ==========================================

  public unlockElementRow(element: string, stoneCost = 3): { success: boolean; error?: string } {
    if (this.data.unlockedElementRows.includes(element)) {
      return { success: false, error: 'แถวธาตุนี้ปลดล็อกแล้ว' };
    }
    const stones = this.data.inventory.elementStones[element] || 0;
    if (stones < stoneCost) {
      return { success: false, error: `หินธาตุ ${element} ไม่พอ (ต้องการ ${stoneCost} ชิ้น, มี ${stones} ชิ้น)` };
    }

    this.data.inventory.elementStones[element] -= stoneCost;
    this.data.unlockedElementRows.push(element);
    this.save();
    return { success: true };
  }

  public unlockSkill(skillId: string, goldCost: number, bookCost = 0): { success: boolean; error?: string } {
    if (this.data.unlockedSkills.includes(skillId)) {
      return { success: false, error: 'สกิลนี้ปลดล็อกแล้ว' };
    }
    const sk = (skillsData.skills as Array<{ id: string; element: string }>).find(s => s.id === skillId);
    if (!sk) return { success: false, error: 'ไม่พบสกิลในระบบ' };

    // เช็กว่าแถวธาตุหรือสายวิชาเปิดหรือยัง
    let branch = sk.element;
    if (sk.element === 'neutral') {
      if (skillId.startsWith('martial_')) branch = 'martial';
      else if (skillId.startsWith('medical_')) branch = 'medical';
      else if (skillId.startsWith('trick_')) branch = 'trick';
      else if (skillId.startsWith('catalyst_')) branch = 'catalyst';
      else if (skillId.startsWith('secret_')) branch = 'secret';
      else if (skillId.startsWith('defense_')) branch = 'defense';
    }

    const isRowUnlocked = this.data.unlockedElementRows.includes(sk.element) ||
      this.data.unlockedElementRows.includes(branch) ||
      (sk.element === 'neutral' && this.data.unlockedElementRows.includes('neutral'));

    if (!isRowUnlocked) {
      return { success: false, error: `ต้องปลดล็อกแถว [${branch}] ก่อน` };
    }

    if (this.data.inventory.gold < goldCost) {
      return { success: false, error: `เหรียญทองไม่พอ (ต้องการ ${goldCost} เหรียญ)` };
    }

    if (bookCost > 0) {
      const books = this.data.inventory.skillBooks[skillId] || 0;
      if (books < bookCost) {
        return { success: false, error: `ต้องการคัมภีร์สกิล ${bookCost} เล่ม (มี ${books} เล่ม)` };
      }
      this.data.inventory.skillBooks[skillId] -= bookCost;
    }

    this.data.inventory.gold -= goldCost;
    this.data.unlockedSkills.push(skillId);
    if (!this.data.skillLevels[skillId]) {
      this.data.skillLevels[skillId] = 1;
    }
    this.save();
    return { success: true };
  }

  public getSkillLevel(skillId: string): number {
    return this.data.skillLevels[skillId] || (this.data.unlockedSkills.includes(skillId) ? 1 : 0);
  }

  public setSkillLevel(skillId: string, level: number): void {
    this.data.skillLevels[skillId] = Math.max(1, Math.min(5, level));
    this.save();
  }

  public getSkillPresets(): Record<string, SkillPreset> {
    return this.data.skillPresets;
  }

  public saveSkillPreset(preset: SkillPreset): void {
    this.data.skillPresets[preset.id] = { ...preset };
    this.save();
  }

  public deleteSkillPreset(presetId: string): boolean {
    if (!this.data.skillPresets[presetId]) return false;
    delete this.data.skillPresets[presetId];
    this.save();
    return true;
  }
}

// Instance หลักแบบ Singleton
export const saveManager = new SaveManager();

