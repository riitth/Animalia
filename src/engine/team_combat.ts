import heroesData from '../data/heroes.json' with { type: 'json' };
import skillsData from '../data/skills.json' with { type: 'json' };
import elementsData from '../data/elements.json' with { type: 'json' };
import enemiesData from '../data/enemies.json' with { type: 'json' };
import {
  type ElementId,
  type Rarity,
  type DerivedStats,
  type ActiveEffect,
  type FighterState,
  type TeamSnapshot,
  type TurnEvent,
  type CombatOptions,
  createFighter,
  getElementMultiplier,
  getEffectiveElement,
  getEffectiveStats,
  getSkillSpCost,
  getSignatureConfig,
  hasActiveExclusiveShield,
} from './combat.ts';

export type GridRow = 'front' | 'mid' | 'back';

export interface GridCoord {
  row: GridRow;
  col: number; // 0, 1, 2
}

export interface TeamFighterState extends FighterState {
  side: 'A' | 'B';
  slotIndex: number;
  pos: GridCoord;
  roleAffinityActive: boolean;
  roleAffinityDesc: string;
}

export interface TeamSquadState {
  side: 'A' | 'B';
  fighters: TeamFighterState[];
  autoCastSignature: boolean;
}

export interface TeamCombatOptions extends CombatOptions {
  teamAPositions?: GridCoord[];
  teamBPositions?: GridCoord[];
}

const HERO_MAP = new Map([...heroesData.heroes, ...enemiesData.enemies].map(h => [h.id, h]));
const SKILL_MAP = new Map(skillsData.skills.map(s => [s.id, s]));

export const ROW_PRIORITY: GridRow[] = ['front', 'mid', 'back'];

/**
 * คำนวณและมอบโบนัส Role Affinity เมื่อวางถูกแถวบนกระดาน 3x3:
 * - Tank อยู่ front: DEF +5%, Block +5%
 * - Striker อยู่ front: ATK +4%, AB +4%
 * - Assassin อยู่ mid: CRI +4%, SPD +3
 * - Controller อยู่ mid/back: HIT +6, โอกาสติดสถานะ +5%
 * - Supporter อยู่ back: ประสิทธิภาพฮีล/เกราะ +8%, Max SP +5
 */
export function applyRoleAffinityBonus(f: TeamFighterState): void {
  const h = HERO_MAP.get(f.id);
  if (!h) return;
  const role = h.role;
  const row = f.pos.row;

  f.roleAffinityActive = false;
  f.roleAffinityDesc = '';

  if (role === 'Tank' && row === 'front') {
    f.roleAffinityActive = true;
    f.baseStats.def = Math.round(f.baseStats.def * 1.05);
    f.roleAffinityDesc = 'Tank แนวหน้า (DEF +5%, Block +5%)';
  } else if (role === 'Striker' && row === 'front') {
    f.roleAffinityActive = true;
    f.baseStats.atk = Math.round(f.baseStats.atk * 1.04);
    f.roleAffinityDesc = 'Striker แนวหน้า (ATK +4%, AB +4%)';
  } else if (role === 'Assassin' && row === 'mid') {
    f.roleAffinityActive = true;
    f.baseStats.spd += 3;
    f.roleAffinityDesc = 'Assassin แถวกลาง (CRI +4%, SPD +3)';
  } else if (role === 'Controller' && (row === 'mid' || row === 'back')) {
    f.roleAffinityActive = true;
    f.baseStats.hit += 6;
    f.roleAffinityDesc = `Controller แถว${row === 'mid' ? 'กลาง' : 'หลัง'} (HIT +6, โอกาสสถานะ +5%)`;
  } else if (role === 'Supporter' && row === 'back') {
    f.roleAffinityActive = true;
    f.baseStats.maxSp += 5;
    f.sp = f.baseStats.maxSp;
    f.roleAffinityDesc = 'Supporter แถวหลัง (ฮีล/เกราะ +8%, Max SP +5)';
  }
}

/**
 * สร้างตัวละครสำหรับระบบทีม 2v2 พร้อมพิกัดบนกระดาน 3x3
 */
export function createTeamFighter(
  heroId: string,
  side: 'A' | 'B',
  slotIndex: number,
  customPos?: GridCoord,
  customSkills?: string[],
  level = 1,
  stars = 1
): TeamFighterState {
  const baseF = createFighter(heroId, customSkills, level, stars);
  const heroMeta = HERO_MAP.get(heroId);

  // กำหนดตำแหน่งเริ่มต้น หากผู้เล่นไม่ได้ระบุ ให้เลือกตาม preferredRow
  const defaultRow: GridRow = (heroMeta?.preferredRow as GridRow) || 'mid';
  const pos: GridCoord = customPos || {
    row: defaultRow,
    col: slotIndex % 3,
  };

  const tf: TeamFighterState = {
    ...baseF,
    side,
    slotIndex,
    pos,
    roleAffinityActive: false,
    roleAffinityDesc: '',
  };

  applyRoleAffinityBonus(tf);
  return tf;
}

function hasStatus(f: FighterState, type: string): boolean {
  return f.effects.some(e => e.type === type);
}

function applyEffectToTarget(
  target: FighterState,
  effect: {
    type: string;
    chance?: number;
    value?: number;
    duration?: number;
    stacks?: number;
    count?: number;
    sourceId?: string;
  },
  enableAbilities = true
): string | null {
  if (enableAbilities && target.abilityId === 'omniscient_gaze' && !effect.type.startsWith('buff_') && effect.type !== 'shield' && effect.type !== 'cleanse' && effect.type !== 'heal_pct') {
    return `ภูมิคุ้มกันสถานะลบสมบูรณ์แบบ (${target.abilityName})`;
  }
  if (enableAbilities && effect.type === 'blind' && (target.abilityId === 'hawk_eye' || target.abilityId === 'solar_piercing_crest')) {
    return `ภูมิคุ้มกันตาบอด (${target.abilityName})`;
  }
  if (enableAbilities && effect.type === 'stun' && (target.abilityId === 'colossal_tremor' || target.abilityId === 'lightning_conductor_trunk')) {
    return `ภูมิคุ้มกันสตัน (${target.abilityName})`;
  }
  if (enableAbilities && (effect.type === 'confusion' || effect.type === 'sleep') && target.abilityId === 'nightmare_eater_barrier') {
    return `ภูมิคุ้มกันสับสน/หลับ (${target.abilityName})`;
  }
  if (enableAbilities && (effect.type === 'freeze' || effect.type === 'slow') && target.abilityId === 'abominable_resilience') {
    return `ภูมิคุ้มกันแช่แข็ง/สโลว์ (${target.abilityName})`;
  }
  if ((effect.type === 'stun' || effect.type === 'paralysis') && hasStatus(target, 'iron_body')) {
    return `กายาเหล็ก: ป้องกันสถานะ [${effect.type === 'stun' ? 'สตัน' : 'อัมพาต'}] 100%!`;
  }
  if (enableAbilities && (effect.type === 'root' || effect.type === 'slow') && target.abilityId === 'sky_rending_talons') {
    return `ภูมิคุ้มกันตรึงร่าง/สโลว์ (${target.abilityName})`;
  }
  if (enableAbilities && target.abilityId === 'zen_mind' && !effect.type.startsWith('buff_') && effect.type !== 'shield' && effect.type !== 'cleanse' && effect.type !== 'heal_pct' && effect.type !== 'energy_coat' && effect.type !== 'golden_bell_shield' && effect.type !== 'elemental_ward' && effect.type !== 'iron_body' && effect.type !== 'iron_fortress') {
    if (Math.random() < 0.25) {
      return `จิตสงบนิ่ง ต้านทานสถานะลบ (${target.abilityName})`;
    }
  }
  if (effect.type === 'cleanse') {
    const count = effect.count ?? 1;
    const removed: string[] = [];
    const debuffTypes = ['burn', 'poison', 'slow', 'blind', 'stun', 'freeze', 'root', 'confusion', 'bleed', 'taunt', 'sleep', 'silence', 'vulnerable', 'curse', 'paralysis', 'debuff_atk', 'debuff_def', 'debuff_spd', 'debuff_cri', 'debuff_hit'];
    for (let i = 0; i < count; i++) {
      const idx = target.effects.findIndex(e => debuffTypes.includes(e.type));
      if (idx !== -1) {
        removed.push(target.effects[idx].type);
        target.effects.splice(idx, 1);
      }
    }
    return removed.length ? `ล้างสถานะ [${removed.join(', ')}]` : null;
  }

  if (effect.type === 'dispel') {
    const isBuff = (type: string) =>
      type.startsWith('buff_') ||
      type === 'shield' ||
      type === 'regen' ||
      type === 'fire_skin' ||
      type === 'ice_skin' ||
      type === 'berserk' ||
      type === 'counter_stance' ||
      type === 'yata_mirror' ||
      type === 'shadow_clone' ||
      type === 'energy_coat' ||
      type === 'golden_bell_shield' ||
      type === 'elemental_ward' ||
      type === 'iron_body' ||
      type === 'iron_fortress';

    const buffIndices: number[] = [];
    target.effects.forEach((e, idx) => {
      if (isBuff(e.type)) buffIndices.push(idx);
    });

    if (buffIndices.length === 0) return null;

    const count = effect.count ?? 1;
    const removedNames: string[] = [];
    const buffNames: Record<string, string> = {
      buff_atk: 'พลังโจมตี+',
      buff_def: 'พลังป้องกัน+',
      buff_spd: 'ความเร็ว+',
      buff_cri: 'คริติคอล+',
      buff_flee: 'หลบหลีก+',
      buff_hit: 'แม่นยำ+',
      buff_ab: 'เจาะเกราะ+',
      buff_block: 'บล็อก+',
      shield: 'เกราะป้องกัน',
      regen: 'ฟื้นฟูต่อเนื่อง',
      fire_skin: 'ผิวกายเพลิง',
      ice_skin: 'ผิวกายเหมันต์',
      berserk: 'คลั่งศึก',
      counter_stance: 'สวนกลับ',
      yata_mirror: 'กระจกยาตะ',
      shadow_clone: 'เงามายา',
      energy_coat: 'เกราะพลังงาน',
      golden_bell_shield: 'เกราะระฆังทอง',
      elemental_ward: 'เกราะสลายธาตุ',
      iron_body: 'กายาเหล็ก',
      iron_fortress: 'ค่ายกลปราการเหล็ก',
    };

    for (let c = 0; c < count; c++) {
      if (buffIndices.length === 0) break;
      const randArrIdx = Math.floor(Math.random() * buffIndices.length);
      const targetEffectIdx = buffIndices.splice(randArrIdx, 1)[0];
      const removed = target.effects.splice(targetEffectIdx, 1)[0];
      if (removed) {
        if (removed.type === 'shield' || removed.type === 'golden_bell_shield') {
          target.shield = 0;
        }
        removedNames.push(buffNames[removed.type] || removed.type);
        for (let j = 0; j < buffIndices.length; j++) {
          if (buffIndices[j] > targetEffectIdx) {
            buffIndices[j]--;
          }
        }
      }
    }

    return removedNames.length ? `สลายบัฟ [${removedNames.join(', ')}] ของเป้าหมาย!` : null;
  }

  const hardCcTypes = ['stun', 'freeze', 'root', 'sleep'];
  if (hardCcTypes.includes(effect.type)) {
    const resistChance = Math.min(0.9, target.ccResistStacks * skillsData.statusRules.ccResistancePerStack);
    if (Math.random() < resistChance) {
      return `ต้านทานสถานะ [${effect.type}] สำเร็จ (ความต้านทานสะสม ${Math.round(resistChance * 100)}%)`;
    }
    target.ccResistStacks = Math.min(2, target.ccResistStacks + 1);
    target.ccResistTurns = skillsData.statusRules.ccResistanceDuration;
  }

  if (effect.type === 'shield') {
    if (hasStatus(target, 'vulnerable')) {
      return `เปราะบาง: ป้องกันการสร้างเกราะ!`;
    }
    if (target.effects.some(e => ['golden_bell_shield', 'elemental_ward', 'iron_body'].includes(e.type))) {
      return `ไม่สามารถทับซ้อนกับเกราะวิชาป้องกันได้!`;
    }
    const val = effect.value ?? 0.15;
    const shieldAmt = Math.round(target.baseStats.maxHp * val);
    target.shield = (target.shield || 0) + shieldAmt;
    target.effects = target.effects.filter(e => e.type !== 'shield');
    target.effects.push({
      type: 'shield',
      value: val,
      duration: effect.duration ?? 2,
    });
    return `กางเกราะ +${shieldAmt} (${Math.round(val * 100)}% Max HP, ${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'heal_pct') {
    const val = effect.value ?? 0.10;
    const healAmt = Math.round(target.baseStats.maxHp * val);
    target.hp = Math.min(target.baseStats.maxHp, target.hp + healAmt);
    return `ฟื้นฟู HP +${healAmt}`;
  }

  if (effect.type === 'sp_change') {
    const val = effect.value ?? 10;
    target.sp = Math.min(target.baseStats.maxSp, Math.max(0, target.sp + val));
    return `ฟื้นฟู SP +${val}`;
  }

  if (effect.type === 'gauge_change') {
    const val = effect.value ?? 10;
    target.gauge = Math.min(100, Math.max(0, target.gauge + val));
    return `เร่งเกจไม้ตาย +${val}`;
  }

  if (effect.type === 'poison') {
    const addStacks = effect.stacks ?? 1;
    const ex = target.effects.find(e => e.type === 'poison');
    if (ex) {
      ex.stacks = Math.min(skillsData.statusRules.poison.maxStacks, (ex.stacks ?? 1) + addStacks);
      ex.duration = Math.max(ex.duration, effect.duration ?? 3);
      return `ติดพิษสะสม (${ex.stacks} ชั้น, ${ex.duration} เทิร์น)`;
    }
    target.effects.push({
      type: 'poison',
      duration: effect.duration ?? 3,
      stacks: addStacks,
    });
    return `ติดพิษ (${addStacks} ชั้น, ${effect.duration ?? 3} เทิร์น)`;
  }

  if (effect.type === 'confusion') {
    const ex = target.effects.find(e => e.type === 'confusion');
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: 'confusion', duration: effect.duration ?? 2 });
    }
    return `ติดสับสน (${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'bleed') {
    const ex = target.effects.find(e => e.type === 'bleed');
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: 'bleed', duration: effect.duration ?? 2 });
    }
    return `ติดเลือดไหล (${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'taunt') {
    const ex = target.effects.find(e => e.type === 'taunt');
    const srcId = effect.sourceId;
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
      if (srcId) ex.sourceId = srcId;
    } else {
      target.effects.push({ type: 'taunt', duration: effect.duration ?? 2, sourceId: srcId });
    }
    return `ติดยั่วยุ (${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'sleep') {
    const ex = target.effects.find(e => e.type === 'sleep');
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: 'sleep', duration: effect.duration ?? 2 });
    }
    return `ติดหลับใหล (${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'silence') {
    const ex = target.effects.find(e => e.type === 'silence');
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: 'silence', duration: effect.duration ?? 2 });
    }
    return `ติดใบ้ (${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'vulnerable') {
    const ex = target.effects.find(e => e.type === 'vulnerable');
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: 'vulnerable', duration: effect.duration ?? 2 });
    }
    return `ติดเปราะบาง (${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'root') {
    const ex = target.effects.find(e => e.type === 'root');
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: 'root', duration: effect.duration ?? 2 });
    }
    return `ติดตรึงร่าง (${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'armor_break_and_stun') {
    const defRed = (effect as { defRedPct?: number }).defRedPct ?? effect.value ?? 0.30;
    applyEffectToTarget(target, { type: 'debuff_def', value: defRed, duration: 2 }, enableAbilities);
    const stunRes = applyEffectToTarget(target, { type: 'stun', duration: effect.duration ?? 1 }, enableAbilities);
    const stunTag = stunRes?.includes('ติดสถานะ [stun]') || stunRes === 'stun' ? 'ติดสตัน (1 เทิร์น)' : stunRes;
    return `ทุบเกราะแตก (ลด DEF ${Math.round(defRed * 100)}% 2 เทิร์น) และ${stunTag}`;
  }

  if (effect.type === 'max_poison_and_armor_break') {
    applyEffectToTarget(target, { type: 'poison', stacks: 2, duration: 3 }, enableAbilities);
    const defRed = (effect as { defRedPct?: number }).defRedPct ?? effect.value ?? 0.30;
    applyEffectToTarget(target, { type: 'debuff_def', value: defRed, duration: 2 }, enableAbilities);
    return `เนตรมรณะพิษอเวจี: ติดพิษสูงสุด 2 ชั้น (3 เทิร์น) & ลด DEF 30% (2 เทิร์น)`;
  }

  if (effect.type === 'dispel_and_sp_drain') {
    const cl = applyEffectToTarget(target, { type: 'dispel', count: effect.count ?? 1 }, enableAbilities);
    const spDelta = effect.value ?? 25;
    target.sp = Math.max(0, target.sp - spDelta);
    const dispTag = cl ? `${cl} & ` : '';
    return `${dispTag}ตัด SP -${spDelta}`;
  }

  if (effect.type === 'sp_drain') {
    const delta = effect.value ?? 0;
    target.sp = Math.max(0, target.sp - delta);
    return `ตัด SP -${delta}`;
  }

  if (effect.type === 'stun_and_gauge_drain') {
    const stunRes = applyEffectToTarget(target, { type: 'stun', duration: effect.duration ?? 1 }, enableAbilities);
    const drainVal = effect.value ?? 25;
    target.gauge = Math.max(0, target.gauge - drainVal);
    const stunTag = stunRes?.includes('ภูมิคุ้มกันสตัน') ? stunRes : 'ติดสตัน 1 เทิร์น';
    return `${stunTag} & ตัดเกจ -${drainVal}`;
  }

  if (effect.type === 'curse') {
    const ex = target.effects.find(e => e.type === 'curse');
    if (ex) {
      return `คำสาปมรณะยังคงมีผล`;
    } else {
      target.effects.push({ type: 'curse', duration: 999 }); // Permanent until cleansed
      return `ติดคำสาปมรณะ 🔮 (ลด HP 3%/เทิร์น)`;
    }
  }

  if (effect.type === 'dispel_all_and_blind') {
    const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield', 'regen', 'fire_skin', 'ice_skin', 'berserk', 'counter_stance', 'yata_mirror', 'shadow_clone', 'energy_coat', 'golden_bell_shield', 'elemental_ward', 'iron_body', 'iron_fortress'];
    target.effects = target.effects.filter(e => !buffTypes.includes(e.type));
    target.shield = 0;
    const blindRes = applyEffectToTarget(target, { type: 'blind', duration: effect.duration ?? 2 }, enableAbilities);
    const blindTag = blindRes?.includes('ภูมิคุ้มกันตาบอด') ? blindRes : 'ติดตาบอด (2 เทิร์น)';
    return `สลายบัฟทั้งหมด และ${blindTag}`;
  }

  if (effect.type === 'paralysis') {
    const ex = target.effects.find(e => e.type === 'paralysis');
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: 'paralysis', duration: effect.duration ?? 2 });
    }
    return `ติดอัมพาต ⚡ (SPD -25%, ชะงัก 60% ${effect.duration ?? 2} เทิร์น)`;
  }

  if (effect.type === 'energy_coat') {
    if (target.effects.some(e => ['golden_bell_shield', 'elemental_ward', 'iron_body'].includes(e.type))) {
      return `ไม่สามารถทับซ้อนกับเกราะวิชาป้องกันได้!`;
    }
    const ex = target.effects.find(e => e.type === 'energy_coat');
    const ratio = effect.value ?? (skillsData.statusRules as any).energy_coat?.damageToSpPct ?? 0.40;
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 3);
      ex.value = ratio;
    } else {
      target.effects.push({ type: 'energy_coat', duration: effect.duration ?? 3, value: ratio });
    }
    return `กางเกราะพลังงาน 🛡️⚡ (Energy Coat: ซับดาเมจ ${Math.round(ratio * 100)}% เข้า SP ${effect.duration ?? 3} เทิร์น)`;
  }

  if (effect.type === 'golden_bell_shield') {
    if (hasStatus(target, 'vulnerable')) {
      return `เปราะบาง: ป้องกันการสร้างเกราะระฆังทอง!`;
    }
    if (hasActiveExclusiveShield(target)) {
      return `ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้!`;
    }
    const ratio = effect.value ?? (skillsData.statusRules as any).golden_bell_shield?.shieldHpPct ?? 0.50;
    const sh = Math.round(target.baseStats.maxHp * ratio);
    const dur = Math.min(2, effect.duration ?? 2);
    target.shield = sh;
    target.effects.push({ type: 'golden_bell_shield', value: ratio, duration: dur });
    return `กางเกราะระฆังทอง 🔔 (+${sh} HP เกราะ, SPD -30% นาน ${dur} เทิร์น)`;
  }

  if (effect.type === 'elemental_ward') {
    if (hasActiveExclusiveShield(target)) {
      return `ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้!`;
    }
    const ratio = effect.value ?? (skillsData.statusRules as any).elemental_ward?.elemDmgRedPct ?? 0.10;
    const dur = Math.min(2, effect.duration ?? 2);
    target.effects.push({ type: 'elemental_ward', value: ratio, duration: dur });
    return `กางเกราะสลายธาตุ 💠 (ลดดาเมจธาตุ -${Math.round(ratio * 100)}% นาน ${dur} เทิร์น)`;
  }

  if (effect.type === 'iron_body') {
    if (hasActiveExclusiveShield(target)) {
      return `ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้!`;
    }
    const dur = effect.duration ?? 5;
    target.effects = target.effects.filter(e => e.type !== 'stun' && e.type !== 'paralysis');
    target.effects.push({ type: 'iron_body', duration: dur });
    return `เข้าสู่สภาวะกายาเหล็ก 🦾 (DEF+50%, ลดดาเมจสุดท้าย 30%, CRI+40, SPD-50%, กันสตัน/อัมพาต 100% นาน ${dur} เทิร์น)`;
  }

  if (effect.type === 'iron_fortress') {
    const ratio = effect.value ?? (skillsData.statusRules as any).iron_fortress?.dmgRedPct ?? 0.15;
    const dur = effect.duration ?? 2;
    const ex = target.effects.find(e => e.type === 'iron_fortress');
    if (ex) {
      ex.duration = Math.max(ex.duration, dur);
      ex.value = ratio;
    } else {
      target.effects.push({ type: 'iron_fortress', value: ratio, duration: dur });
    }
    return `ค่ายกลปราการเหล็ก 🏰 (ลดดาเมจที่ได้รับ -${Math.round(ratio * 100)}% นาน ${dur} เทิร์น)`;
  }

  target.effects.push({
    type: effect.type,
    duration: effect.duration ?? 2,
    value: effect.value,
  });
  return `ติดสถานะ [${effect.type}] (${effect.duration ?? 2} เทิร์น)`;
}

/**
 * TeamBattleSession: ระบบจำลองการต่อสู้ 2v2 บนกระดาน 3x3
 */
export class TeamBattleSession {
  public round = 0;
  public totalActions = 0;
  public squadA: TeamSquadState;
  public squadB: TeamSquadState;
  public logs: TurnEvent[] = [];
  public winner: 'A' | 'B' | 'DRAW' | null = null;
  public options: Required<Omit<TeamCombatOptions, 'customSkillsA' | 'customSkillsB' | 'teamAPositions' | 'teamBPositions' | 'teamALevels' | 'teamAStars' | 'teamBLevels' | 'teamBStars' | 'skillLevelsA' | 'skillLevelsB'>> &
    Pick<TeamCombatOptions, 'customSkillsA' | 'customSkillsB' | 'teamAPositions' | 'teamBPositions' | 'teamALevels' | 'teamAStars' | 'teamBLevels' | 'teamBStars' | 'skillLevelsA' | 'skillLevelsB'>;

  constructor(
    teamAHeroIds: string[],
    teamBHeroIds: string[],
    options: TeamCombatOptions = {}
  ) {
    const enableSkillEffects = options.enableSkillEffects ?? true;
    this.options = {
      maxTurns: options.maxTurns ?? 50,
      enableSkillEffects,
      enableSameElementBonus: options.enableSameElementBonus ?? enableSkillEffects,
      enableAbilities: options.enableAbilities ?? enableSkillEffects,
      forcedElementAdvantage: options.forcedElementAdvantage ?? 'actual',
      teamAPositions: options.teamAPositions,
      teamBPositions: options.teamBPositions,
      customSkillsA: options.customSkillsA,
      customSkillsB: options.customSkillsB,
      teamALevels: options.teamALevels,
      teamAStars: options.teamAStars,
      teamBLevels: options.teamBLevels,
      teamBStars: options.teamBStars,
      skillLevelsA: options.skillLevelsA,
      skillLevelsB: options.skillLevelsB,
    };

    this.squadA = {
      side: 'A',
      autoCastSignature: true,
      fighters: teamAHeroIds.map((id, idx) =>
        createTeamFighter(
          id,
          'A',
          idx,
          this.options.teamAPositions?.[idx],
          this.options.customSkillsA?.[idx],
          this.options.teamALevels?.[idx] ?? 1,
          this.options.teamAStars?.[idx] ?? 1
        )
      ),
    };

    this.squadB = {
      side: 'B',
      autoCastSignature: true,
      fighters: teamBHeroIds.map((id, idx) =>
        createTeamFighter(
          id,
          'B',
          idx,
          this.options.teamBPositions?.[idx],
          this.options.customSkillsB?.[idx],
          this.options.teamBLevels?.[idx] ?? 1,
          this.options.teamBStars?.[idx] ?? 1
        )
      ),
    };
  }

  public getLivingFighters(squad: TeamSquadState): TeamFighterState[] {
    return squad.fighters.filter(f => f.hp > 0);
  }

  public isSquadWiped(squad: TeamSquadState): boolean {
    return this.getLivingFighters(squad).length === 0;
  }

  public getLivingSquad(side: 'A' | 'B'): TeamSquadState {
    return side === 'A' ? this.squadA : this.squadB;
  }

  public getOpposingSquad(side: 'A' | 'B'): TeamSquadState {
    return side === 'A' ? this.squadB : this.squadA;
  }

  /**
   * ค้นหาศัตรูในแถวหน้าสุดที่ยังมีชีวิตอยู่ (front -> mid -> back)
   */
  public getFrontmostLivingRow(squad: TeamSquadState): GridRow | null {
    const living = this.getLivingFighters(squad);
    if (!living.length) return null;
    for (const r of ROW_PRIORITY) {
      if (living.some(f => f.pos.row === r)) return r;
    }
    return null;
  }

  /**
   * ระบบเลือกเป้าหมายตามกฎ:
   * 1. Single Target ปกติ: เล็งแถวหน้าสุดที่ยังมีชีวิต
   * 2. Backline Infiltration: Assassin (60%), Controller (40%), Supporter (25%) มีโอกาสข้ามไปตีแถวหลัง
   * 3. Row Cleave: เล็งศัตรูทั้งหมดในแถวหน้าสุด
   * 4. Full AOE: เล็งศัตรูทุกคนในสนาม
   * 5. Team Support: เล็งพันธมิตรทุกคน
   */
  public selectTargets(
    attacker: TeamFighterState,
    targetScope: string = 'single_enemy'
  ): TeamFighterState[] {
    const opposingSquad = this.getOpposingSquad(attacker.side);
    const friendlySquad = this.getLivingSquad(attacker.side);
    const livingEnemies = this.getLivingFighters(opposingSquad);
    const livingAllies = this.getLivingFighters(friendlySquad);

    if (!livingEnemies.length) return [];

    if (targetScope === 'all_allies') {
      return livingAllies;
    }

    if (targetScope === 'all_enemies') {
      return livingEnemies;
    }

    if (targetScope === 'front_enemies') {
      const frontRow = this.getFrontmostLivingRow(opposingSquad);
      if (!frontRow) return livingEnemies;
      return livingEnemies.filter(f => f.pos.row === frontRow);
    }

    // Single Target: ตรวจสอบสถานะยั่วยุ (Taunt) ก่อน
    const tauntEff = attacker.effects.find(e => e.type === 'taunt');
    if (tauntEff) {
      if (tauntEff.sourceId) {
        const taunter = livingEnemies.find(f => f.id === tauntEff.sourceId || `${f.side}_${f.slotIndex}` === tauntEff.sourceId);
        if (taunter) return [taunter];
      }
      if (livingEnemies.length > 0) return [livingEnemies[0]];
    }

    // Single Target: ตรวจสอบโอกาสเจาะแนวหลัง (Backline Infiltration)
    const heroMeta = HERO_MAP.get(attacker.id);
    const backlineChance = heroMeta?.backlineChance ?? 0;
    const canInfiltrate = backlineChance > 0 && Math.random() < backlineChance;

    if (canInfiltrate) {
      // เล็งศัตรูแถวหลังสุดที่มีชีวิต (back -> mid -> front)
      const reversedRows: GridRow[] = ['back', 'mid', 'front'];
      for (const r of reversedRows) {
        const rowEnemies = livingEnemies.filter(f => f.pos.row === r);
        if (rowEnemies.length > 0) {
          // เล็งตัว HP ต่ำสุดในแถวนั้น
          rowEnemies.sort((a, b) => a.hp - b.hp);
          return [rowEnemies[0]];
        }
      }
    }

    // เป้าหมายปกติ: เล็งแถวหน้าสุดที่ยังมีชีวิต
    const frontRow = this.getFrontmostLivingRow(opposingSquad);
    const rowEnemies = livingEnemies.filter(f => f.pos.row === frontRow);
    if (rowEnemies.length > 0) {
      // เล็งตัวเลนตรงกันก่อน หรือตัว HP ต่ำสุด
      const sameCol = rowEnemies.find(f => f.pos.col === attacker.pos.col);
      if (sameCol) return [sameCol];
      rowEnemies.sort((a, b) => a.hp - b.hp);
      return [rowEnemies[0]];
    }

    return [livingEnemies[0]];
  }

  /**
   * ดำเนินการ 1 รอบ (Round):
   * 1. นำนักสู้ทุกคนที่ยังมีชีวิตมาจัดคิวตาม SPD (Individual Speed Queue)
   * 2. แต่ละตัวออกแอ็กชันตามลำดับคิว
   */
  public stepRound(): boolean {
    if (this.winner) return true;
    this.round++;

    // เก็บรายชื่อนักสู้ที่มีชีวิตจากทั้งสองฝั่ง
    const allLiving = [
      ...this.getLivingFighters(this.squadA),
      ...this.getLivingFighters(this.squadB),
    ];

    if (!allLiving.length) {
      this.winner = 'DRAW';
      return true;
    }

    // จัดเรียงคิวแอ็กชันตาม effective SPD (มากไปน้อย)
    allLiving.sort((a, b) => {
      const spdA = getEffectiveStats(a, this.options.enableAbilities).spd;
      const spdB = getEffectiveStats(b, this.options.enableAbilities).spd;
      return spdB - spdA;
    });

    for (const actor of allLiving) {
      if (actor.hp <= 0) continue; // ตายระหว่างรอบ ข้ามคิว
      if (this.isSquadWiped(this.squadA)) {
        this.winner = 'B';
        if (this.logs.length > 0) this.logs[this.logs.length - 1].snapshot = this.captureSnapshot();
        return true;
      }
      if (this.isSquadWiped(this.squadB)) {
        this.winner = 'A';
        if (this.logs.length > 0) this.logs[this.logs.length - 1].snapshot = this.captureSnapshot();
        return true;
      }

      this.executeFighterTurn(actor);
    }

    if (this.isSquadWiped(this.squadA)) {
      this.winner = 'B';
      if (this.logs.length > 0) this.logs[this.logs.length - 1].snapshot = this.captureSnapshot();
      return true;
    }
    if (this.isSquadWiped(this.squadB)) {
      this.winner = 'A';
      if (this.logs.length > 0) this.logs[this.logs.length - 1].snapshot = this.captureSnapshot();
      return true;
    }

    if (this.round >= 30) {
      // ครบ 30 รอบ ตัดสินด้วย % HP รวมที่เหลือ
      const hpPctA = this.squadA.fighters.reduce((s, f) => s + f.hp, 0) /
        this.squadA.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      const hpPctB = this.squadB.fighters.reduce((s, f) => s + f.hp, 0) /
        this.squadB.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      this.winner = hpPctA > hpPctB ? 'A' : hpPctB > hpPctA ? 'B' : 'DRAW';
      if (this.logs.length > 0) this.logs[this.logs.length - 1].snapshot = this.captureSnapshot();
      return true;
    }

    return false;
  }

  private executeFighterTurn(f: TeamFighterState) {
    this.totalActions++;

    // 1. ตรวจสอบสถานะสตัน / แช่แข็ง / หลับใหล / กลายเป็นหิน
    if (hasStatus(f, 'stun') || hasStatus(f, 'freeze') || hasStatus(f, 'sleep') || hasStatus(f, 'stone_curse')) {
      const isSleep = hasStatus(f, 'sleep');
      const isStone = hasStatus(f, 'stone_curse');
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: '-',
        actionType: 'skip',
        actionName: isStone ? 'กลายเป็นหิน' : isSleep ? 'หลับใหล' : 'ติดสถานะหยุดการเคลื่อนไหว',
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: isSleep
          ? `[รอบ ${this.round}] 💤 ${f.name} (ฝั่ง ${f.side}) อยู่ในห้วงหลับใหลลึก ข้ามแอ็กชัน!`
          : `[รอบ ${this.round}] ${f.name} (ฝั่ง ${f.side}) ติดสถานะสตัน/แช่แข็ง ข้ามแอ็กชัน!`,
      });
      this.tickStatuses(f);
      return;
    }

    // 1.5 ตรวจสอบสถานะอัมพาต (Paralysis)
    if (hasStatus(f, 'paralysis')) {
      const flinchChance = (skillsData.statusRules as any).paralysis?.flinchChance ?? 0.60;
      if (Math.random() < flinchChance) {
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: '-',
          actionType: 'skip',
          actionName: 'อัมพาต',
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[รอบ ${this.round}] ⚡ ${f.name} (ฝั่ง ${f.side}) เกิดอาการชะงักจากอัมพาต (Paralysis ${Math.round(flinchChance * 100)}%) ข้ามแอ็กชันในเทิร์นนี้!`,
        });
        this.tickStatuses(f);
        return;
      }
    }

    // 2. จัดการ DoT และ SP Regen ต้นเทิร์น
    this.processStartOfTurn(f);
    if (f.hp <= 0) {
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: '-',
        actionType: 'status',
        actionName: 'ล้มลงจากสถานะผิดปกติ',
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[รอบ ${this.round}] ${f.name} (ฝั่ง ${f.side}) ล้มลงในสนาม!`,
      });
      return;
    }

    // 2.5 ตรวจสอบสถานะสับสน (Confusion)
    if (hasStatus(f, 'confusion')) {
      if (Math.random() < 0.60) {
        const selfDmg = Math.round(f.baseStats.maxHp * 0.12);
        this.applyDamageToTarget(f, selfDmg);
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: f.name,
          actionType: 'status',
          actionName: 'สับสน',
          damage: selfDmg,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[รอบ ${this.round}] 🌀 ${f.name} (ฝั่ง ${f.side}) เกิดอาการสับสนอย่างรุนแรง! หันมาทำร้ายตัวเอง -${selfDmg} HP (12% Max HP) และข้ามแอ็กชันในรอบนี้! (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`,
        });
        this.tickStatuses(f);
        return;
      } else {
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: '-',
          actionType: 'status',
          actionName: 'สับสน',
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[รอบ ${this.round}] 🌀 ${f.name} (ฝั่ง ${f.side}) ติดสถานะสับสน แต่สามารถรวบรวมสมาธิตั้งสติได้ และเตรียมออกแอ็กชัน!`,
        });
      }
    }

    // 2.7 เลือดไหลจากการเคลื่อนไหว (Bleed Action Damage)
    if (hasStatus(f, 'bleed')) {
      const bAct = Math.round(f.baseStats.maxHp * skillsData.statusRules.bleed.actionDamageHpPct);
      this.applyDamageToTarget(f, bAct);
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: f.name,
        actionType: 'status',
        actionName: 'เลือดไหล',
        damage: bAct,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[รอบ ${this.round}] 🩸 ${f.name} (ฝั่ง ${f.side}) เสียเลือดจากการเคลื่อนไหว -${bAct} HP! (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`,
      });
      if (f.hp <= 0) {
        this.tickStatuses(f);
        return;
      }
    }

    // 3. คิดเกจท่าไม้ตาย และตัดสินใจออกท่า (หากไม่ติดใบ้)
    const isSilenced = hasStatus(f, 'silence');
    const sigCfg = getSignatureConfig(f.rarity);
    if (!isSilenced) {
      f.gauge = Math.min(100, f.gauge + sigCfg.gainPerTurn);
    }

    if (!isSilenced && f.gauge >= 100) {
      f.gauge = 0;
      f.sigUsedCount++;
      this.performSignature(f);
      this.tickStatuses(f);
      return;
    }

    // 4. สกิล 4 ช่อง (ไม่สามารถร่ายได้หากติดใบ้)
    if (!isSilenced) {
      for (const slotId of f.skillSlots) {
        const sk = SKILL_MAP.get(slotId);
        if (!sk) continue;
        // ป้องกันการร่ายวิชาลับเงามายาซ้ำซ้อน หากร่างเงายังมีชีวิตอยู่
        if (sk.id === 'secret_l' && hasStatus(f, 'shadow_clone')) continue;
        // ป้องกันการร่ายสกิลเกราะทับซ้อนกับเกราะตนเองและเกราะอื่นๆ
        if ((sk.id === 'defense_s' || sk.id === 'defense_m1' || sk.id === 'defense_l') && hasActiveExclusiveShield(f)) continue;
        if (sk.damageMult === 0 && sk.effects.every((e: any) => e.type === 'shield') && hasActiveExclusiveShield(f)) continue;
        const spCost = getSkillSpCost(sk.tier, sk.id);
        if (f.sp < spCost) continue;

        const isSameElem = this.options.enableSameElementBonus && sk.element === f.element;
        const procChance = sk.baseChance * (isSameElem ? elementsData.multipliers.sameElementChanceBonus : 1);
        if (Math.random() < procChance) {
          f.sp -= spCost;
          this.performSkill(f, sk, spCost);
          this.tickStatuses(f);
          return;
        }
      }
    }

    // 5. โจมตีธรรมดา + โบนัสพักหายใจ (0 SP หากติดใบ้)
    const breathBonus = isSilenced ? 0 : ((heroesData.statFormula as { spNormalAttackBonus?: number }).spNormalAttackBonus ?? 6);
    if (breathBonus > 0) {
      f.sp = Math.min(f.baseStats.maxSp, f.sp + breathBonus);
    }
    this.performNormalAttack(f, breathBonus);
    this.tickStatuses(f);
  }

  private processStartOfTurn(f: TeamFighterState) {
    // ลด HP จาก Burn และ Poison
    let dotDmg = 0;
    if (this.options.enableSkillEffects) {
      for (const ef of f.effects) {
        if (ef.type === 'burn') {
          const wineMistMult = hasStatus(f, 'wine_mist') ? 1.5 : 1.0;
          dotDmg += f.baseStats.maxHp * skillsData.statusRules.burn.hpLossPctPerTurn * wineMistMult;
        } else if (ef.type === 'poison') {
          const stacks = ef.stacks ?? 1;
          dotDmg += f.baseStats.maxHp * skillsData.statusRules.poison.hpLossPctPerTurn * stacks;
        } else if (ef.type === 'curse') {
          dotDmg += f.baseStats.maxHp * skillsData.statusRules.curse.hpLossPctPerTurn;
        } else if (ef.type === 'raging_thunder') {
          const enemySquad = f.side === 'A' ? this.squadB : this.squadA;
          const friendlySquad = f.side === 'A' ? this.squadA : this.squadB;
          const livingEnemies = this.getLivingFighters(enemySquad);
          const livingAllies = this.getLivingFighters(friendlySquad);
          const isFriendly = Math.random() < 0.30;
          const pool = isFriendly ? (livingAllies.length ? livingAllies : livingEnemies) : (livingEnemies.length ? livingEnemies : livingAllies);
          if (pool.length) {
            const tgt = pool[Math.floor(Math.random() * pool.length)];
            const tDef = getEffectiveStats(tgt, this.options.enableAbilities).def;
            const tDmg = Math.max(1, Math.round(f.baseStats.atk * 0.70 - tDef * 0.5));
            this.applyDamageToTarget(tgt, tDmg);
            const tag = isFriendly ? '⚡💥 อัสนีคลั่งแฉลบผ่าพวกเดียวกันเอง!' : '⚡ อัสนีคลั่งผ่าใส่ศัตรู!';
            this.recordEvent({
              turn: this.round,
              actorSide: f.side,
              actorName: f.name,
              targetName: tgt.name,
              actionType: 'status',
              actionName: 'อัสนีคลั่ง',
              damage: tDmg,
              healed: 0,
              shieldGained: 0,
              isCrit: false,
              isMiss: false,
              elementMult: 1,
              appliedEffects: [],
              message: `[รอบ ${this.round}] ${tag} ${tgt.name} เสีย HP -${tDmg}`,
            });
          }
        }
      }
    }

    if (dotDmg > 0) {
      const dotReduction = this.options.enableAbilities && f.abilityId === 'mud_hide' ? 0.60 : (this.options.enableAbilities && f.abilityId === 'duat_soul_eater' ? 0.65 : 1.0);
      dotDmg = Math.round(dotDmg * dotReduction);
      f.hp = Math.max(0, f.hp - dotDmg);
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: '-',
        actionType: 'status',
        actionName: 'ดาเมจจากสถานะ',
        damage: Math.round(dotDmg),
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[รอบ ${this.round}] ${f.name} เสีย HP จากเผาไหม้/พิษ -${Math.round(dotDmg)} (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`,
      });
    }

    // ฟื้นฟู SP ต้นเทิร์น +6 SP
    if (f.sp < f.baseStats.maxSp) {
      const spGain = Math.min(f.baseStats.maxSp - f.sp, f.baseStats.spRegen);
      f.sp += spGain;
    }

    if (this.options.enableAbilities && (f.abilityId === 'thorn_regrowth' || f.abilityId === 'ironwood_regrowth') && f.hp > 0 && !hasStatus(f, 'stone_curse')) {
      const h = Math.round(f.baseStats.maxHp * 0.04);
      f.hp = Math.min(f.baseStats.maxHp, f.hp + h);
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: '-',
        actionType: 'status',
        actionName: 'หนามงอกเงยคืนชีพ',
        damage: 0,
        healed: h,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [`ฟื้น +${h} HP`],
        message: `[รอบ ${this.round}] Ability [${f.abilityName}] ฟื้นฟูชีวาหนามงอกเงย +${h} HP (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`,
      });
    }

    if (this.options.enableAbilities && f.abilityId === 'high_voltage_organ' && f.hp > 0 && Math.random() < 0.50) {
      const enemies = this.getLivingFighters(this.getOpposingSquad(f.side));
      if (enemies.length > 0) {
        const randTarget = enemies[Math.floor(Math.random() * enemies.length)];
        applyEffectToTarget(randTarget, { type: 'paralysis', duration: 2 }, true);
        randTarget.gauge = Math.max(0, randTarget.gauge - 10);
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: randTarget.name,
          actionType: 'ability',
          actionName: 'อวัยวะไฟฟ้าแรงดันสูง 860V',
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[รอบ ${this.round}] Ability [${f.abilityName}] ทำงาน (50%) ปล่อยกระแสไฟฟ้าแรงสูง 860V ใส่ ${randTarget.name} ติดอัมพาต (2 เทิร์น) & ตัดเกจ -10!`,
        });
      }
    }

    if (this.options.enableAbilities && f.abilityId === 'zen_mind' && f.hp > 0 && Math.random() < 0.40) {
      const allies = this.getLivingFighters(this.getLivingSquad(f.side));
      if (allies.length > 0) {
        allies.sort((a: TeamFighterState, b: TeamFighterState) => (a.hp / a.baseStats.maxHp) - (b.hp / b.baseStats.maxHp));
        const targetAlly = allies[0];
        applyEffectToTarget(targetAlly, { type: 'energy_coat', duration: 2 }, true);
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: targetAlly.name,
          actionType: 'ability',
          actionName: 'จิตสงบนิ่ง',
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[รอบ ${this.round}] Ability [${f.abilityName}] ทำงาน (40%) จิตสงบนิ่ง มอบเกราะพลังงาน (Energy Coat 2 เทิร์น) ให้ ${targetAlly.name}!`,
        });
      }
    }
  }

  private performNormalAttack(att: TeamFighterState, breathBonus: number) {
    const targets = this.selectTargets(att, 'single_enemy');
    if (!targets.length) return;
    const def = targets[0];

    const attStats = getEffectiveStats(att, this.options.enableAbilities);
    const defStats = getEffectiveStats(def, this.options.enableAbilities);

    const hitChance = Math.max(0.5, Math.min(1.0, (attStats.hit - defStats.flee) / 100));
    if (Math.random() > hitChance) {
      this.recordEvent({
        turn: this.round,
        actorSide: att.side,
        actorName: att.name,
        targetName: def.name,
        actionType: 'normal',
        actionName: 'โจมตีธรรมดา',
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: true,
        elementMult: 1,
        appliedEffects: [`พักหายใจ +${breathBonus} SP`],
        message: `[รอบ ${this.round}] ${att.name} ใช้ [โจมตีธรรมดา] ใส่ ${def.name} แต่พลาด (MISS)! (พักหายใจ +${breathBonus} SP)`,
      });
      return;
    }

    const elemMult = getElementMultiplier(att.element, getEffectiveElement(def), att.side, this.options.forcedElementAdvantage);
    let isCrit = Math.random() < attStats.cri / 100;
    let critMult = isCrit ? attStats.criDmg : 1.0;
    const appliedEffects: string[] = [`พักหายใจ +${breathBonus} SP`];

    if (hasStatus(def, 'sleep')) {
      isCrit = true;
      critMult = attStats.criDmg * skillsData.statusRules.sleep.wakeDmgMult;
      def.effects = def.effects.filter(e => e.type !== 'sleep');
      appliedEffects.push('💤 ปลุกจากนิทรา! (Wake-up Strike: คริติคอล 100% & ดาเมจ +30%)');
    }

    const K = heroesData.statFormula.defConstantK;
    let pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
    if (this.options.enableAbilities && def.abilityId === 'toxic_carapace_spikes') pierce *= 0.60;
    const effDef = defStats.def * (1 - pierce);
    const baseDmg = Math.max(1, attStats.atk * (K / (K + effDef)));
    if (isCrit && this.options.enableAbilities && def.abilityId === 'abominable_resilience') {
      critMult *= 0.65;
      appliedEffects.push(`${def.name} [${def.abilityName}] กายาอสูรหิมะ ลดดาเมจคริติคอลเหลือ 65%`);
    }
    let finalDmg = Math.round(baseDmg * elemMult * critMult);

    if (hasStatus(def, 'vulnerable')) {
      finalDmg = Math.round(finalDmg * (1 + skillsData.statusRules.vulnerable.extraDmgPct));
      appliedEffects.push('💔 เปราะบาง: รับดาเมจ +25%');
    }

    if (hasStatus(att, 'taunt')) {
      finalDmg = Math.round(finalDmg * (1 - skillsData.statusRules.taunt.dmgReductionPct));
      appliedEffects.push('💢 ยั่วยุ: ดาเมจลดลง 10%');
    }

    if (hasStatus(def, 'elemental_ward') && att.element !== 'neutral') {
      const wardEf = def.effects.find(e => e.type === 'elemental_ward');
      const redPct = wardEf?.value ?? (skillsData.statusRules as any).elemental_ward?.elemDmgRedPct ?? 0.10;
      finalDmg = Math.round(finalDmg * (1 - redPct));
      appliedEffects.push(`💠 เกราะสลายธาตุ: ลดดาเมจธาตุลง ${Math.round(redPct * 100)}%`);
    }
    if (hasStatus(def, 'iron_fortress')) {
      const fortEf = def.effects.find(e => e.type === 'iron_fortress');
      const redPct = fortEf?.value ?? (skillsData.statusRules as any).iron_fortress?.dmgRedPct ?? 0.15;
      finalDmg = Math.round(finalDmg * (1 - redPct));
      appliedEffects.push(`🏰 ค่ายกลปราการเหล็ก: ลดดาเมจที่ได้รับลง ${Math.round(redPct * 100)}%`);
    }
    if (hasStatus(def, 'iron_body')) {
      const redPct = (skillsData.statusRules as any).iron_body?.finalDmgRedPct ?? 0.30;
      finalDmg = Math.round(finalDmg * (1 - redPct));
      appliedEffects.push(`🦾 กายาเหล็ก: ลดดาเมจสุดท้ายลง ${Math.round(redPct * 100)}%`);
    }

    if (this.options.enableAbilities) {
      if (def.abilityId === 'mud_hide' && Math.random() < 0.50) {
        finalDmg = Math.round(finalDmg * 0.75);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) หนังเหนียว ลดดาเมจ 25%`);
      }
      if (def.abilityId === 'bufotoxin_skin') {
        finalDmg = Math.round(finalDmg * 0.90);
        if (Math.random() < 0.55) {
          applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (55%) ยางพิษลดดาเมจ 10% & แพร่พิษใส่ ${att.name}`);
        }
      }
      if (def.abilityId === 'caustic_venom_aura' && Math.random() < 0.40) {
        applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (40%) ไอกรดพิษแพร่พิษใส่ ${att.name}`);
      }
      if (att.abilityId === 'glacial_fang_hunt' && (hasStatus(def, 'freeze') || hasStatus(def, 'ice_skin'))) {
        finalDmg = Math.round(finalDmg * 1.30);
        appliedEffects.push(`Ability [${att.abilityName}] ขยี้ศัตรูแช่แข็ง/Ice Skin ดาเมจ +30%`);
      }
      if (att.abilityId === 'caustic_venom_aura' && hasStatus(def, 'poison')) {
        finalDmg = Math.round(finalDmg * 1.25);
        appliedEffects.push(`Ability [${att.abilityName}] ไอกรดพิษขยี้เป้าหมายติดพิษ ดาเมจ +25%`);
      }
      if (def.abilityId === 'ancient_bulwark') {
        finalDmg = Math.round(finalDmg * 0.88);
        if (def.hp < def.baseStats.maxHp * 0.65 && !hasStatus(def, 'energy_coat')) {
          applyEffectToTarget(def, { type: 'energy_coat', duration: 3 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] กายาจิตนิรันดร์ กางเกราะพลังงาน (Energy Coat 3 เทิร์น)`);
        }
      }
      if (def.abilityId === 'electro_sense' && Math.random() < 0.45) {
        applyEffectToTarget(def, { type: 'energy_coat', duration: 2 }, true);
        applyEffectToTarget(att, { type: 'debuff_hit', value: 10, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (45%) สัมผัสกระแสจิตคุ้มภัย กางเกราะพลังงาน (Energy Coat 2 เทิร์น) & ลด HIT ${att.name} 10 แต้ม`);
      }
      if (def.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
        applyEffectToTarget(att, { type: 'paralysis', duration: 2 }, true);
        att.gauge = Math.max(0, att.gauge - 8);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สัมผัสกัลปังหาพิษชา สะท้อนเข็มพิษเนมาโทซิสต์ ติดอัมพาต 2 เทิร์น & ตัดเกจ -8`);
      }
      if (att.abilityId === 'neurotoxic_stinger' && hasStatus(def, 'poison') && Math.random() < 0.65) {
        finalDmg = Math.round(finalDmg * 1.18);
        appliedEffects.push(`Ability [${att.abilityName}] (65%) เหล็กในพิษอัมพาต ดาเมจ+18%`);
        if (Math.random() < 0.50) {
          applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
          appliedEffects.push(`Ability [${att.abilityName}] ศัตรูติดอัมพาต 2 เทิร์น`);
        }
      }
      if (att.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
        applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
        def.gauge = Math.max(0, def.gauge - 8);
        appliedEffects.push(`Ability [${att.abilityName}] (50%) สัมผัสกัลปังหาพิษชา ศัตรูติดอัมพาต 2 เทิร์น & ตัดเกจ -8`);
      }
      if (def.abilityId === 'bronze_furnace_hide') {
        if (att.element === 'fire') {
          finalDmg = Math.round(finalDmg * 0.50);
          appliedEffects.push(`${def.name} [${def.abilityName}] กายทองแดงดูดซับไฟ ลดดาเมจไฟ 50%`);
        }
        if (Math.random() < 0.50) {
          const reflect = Math.round(defStats.atk * 0.25);
          this.applyDamageToTarget(att, reflect);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สะท้อนเพลิงโลหะ ${reflect} ดาเมจใส่ ${att.name}`);
        }
      }
      if (def.abilityId === 'invulnerable_golden_pelt') {
        finalDmg = Math.round(finalDmg * 0.85);
        appliedEffects.push(`${def.name} [${def.abilityName}] ขนทองคำลดดาเมจกายภาพ 15%`);
      }
      if (def.abilityId === 'ironwood_regrowth' && Math.random() < 0.40) {
        const leech = Math.round(def.baseStats.maxHp * 0.03);
        this.applyDamageToTarget(att, leech);
        def.hp = Math.min(def.baseStats.maxHp, def.hp + leech);
        appliedEffects.push(`${def.name} [${def.abilityName}] (40%) เถาวัลย์ดูดเลือด ${leech} HP จาก ${att.name}`);
      }
      if (def.abilityId === 'lightning_conductor_trunk' && finalDmg > 0) {
        def.sp = Math.min(def.baseStats.maxSp, def.sp + 10);
        const shieldGained = Math.round(finalDmg * 0.30);
        def.shield = Math.min(def.baseStats.maxHp * 0.50, def.shield + shieldGained);
        appliedEffects.push(`${def.name} [${def.abilityName}] เสาล่อฟ้า ฟื้น +10 SP & แปลงดาเมจ 30% (+${shieldGained}) เป็นเกราะ`);
      }
      if (def.abilityId === 'xuanwu_bastion' && defStats.block > attStats.ab && Math.random() < 0.60) {
        const pRes = applyEffectToTarget(att, { type: 'stone_curse', duration: 1 }, true);
        if (pRes) appliedEffects.push(`${def.name} [${def.abilityName}] (60%) บล็อกสำเร็จสาป ${att.name} กลายเป็นหิน 1 เทิร์น!`);
      }
      if (def.abilityId === 'abominable_resilience' && defStats.block > attStats.ab && Math.random() < 0.50) {
        const fRes = applyEffectToTarget(att, { type: 'freeze', duration: 1 }, true);
        if (fRes) appliedEffects.push(`${def.name} [${def.abilityName}] (50%) บล็อกสำเร็จแช่แข็ง ${att.name} 1 เทิร์น!`);
      }
      if (def.abilityId === 'toxic_carapace_spikes' && defStats.block > attStats.ab) {
        const poiRes = applyEffectToTarget(att, { type: 'poison', stacks: 1, duration: 3 }, true);
        if (poiRes) appliedEffects.push(`${def.name} [${def.abilityName}] บล็อกสำเร็จละอองพิษเกาะกุม ${att.name}!`);
      }
    }

    this.applyDamageToTarget(def, finalDmg);

    if (this.options.enableAbilities && (att.abilityId === 'glacial_fang_hunt' || att.abilityId === 'duat_soul_eater') && finalDmg > 0 && !hasStatus(att, 'stone_curse')) {
      const ls = Math.round(finalDmg * 0.12);
      att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
      appliedEffects.push(`ดูดเลือด +${ls} HP`);
    }

    if (this.options.enableAbilities && att.abilityId === 'thorn_regrowth' && finalDmg > 0 && !hasStatus(att, 'vulnerable')) {
      const sh = Math.round(finalDmg * 0.15);
      if (sh > 0) {
        att.shield = Math.min(att.baseStats.maxHp * 0.50, att.shield + sh);
        const ex = att.effects.find(e => e.type === 'shield');
        if (ex) ex.duration = Math.max(ex.duration, 2);
        else att.effects.push({ type: 'shield', duration: 2 });
        appliedEffects.push(`เกราะหนามพฤกษา +${sh}`);
      }
    }

    if (this.options.enableAbilities && att.abilityId === 'oceanic_surge' && Math.random() < 0.40) {
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
      appliedEffects.push(`Ability [${att.abilityName}] (40%) ฟื้นฟู +15 SP`);
    }

    if (this.options.enableAbilities && att.abilityId === 'static_discharge' && Math.random() < 0.45) {
      const boltDmg = Math.max(1, Math.round(attStats.atk * 0.30));
      this.applyDamageToTarget(def, boltDmg);
      appliedEffects.push(`สายฟ้าแฉลบผ่าซ้ำ ⚡ -${boltDmg} HP`);
    }

    if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === 'static_discharge') {
      att.gauge = Math.min(100, att.gauge + 25);
      appliedEffects.push(`Ability [${att.abilityName}] สังหารศัตรูสำเร็จ ได้รับเกจ +25`);
    }

    if (isCrit && this.options.enableAbilities && att.abilityId === 'colossal_tremor') {
      const enemySquad = att.side === 'A' ? this.squadB : this.squadA;
      const livingEnemies = this.getLivingFighters(enemySquad);
      const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
      for (const en of livingEnemies) {
        this.applyDamageToTarget(en, shockwaveDmg);
      }
      appliedEffects.push(`คลื่นกระแทกแผ่นดินไหว 💥 -${shockwaveDmg} HP ใส่ศัตรูทั้งหมด`);
    }

    if (this.options.enableAbilities && att.abilityId === 'tartarus_three_fangs' && def.hp > 0) {
      if (Math.random() < 0.35) {
        const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35));
        this.applyDamageToTarget(def, biteDmg);
        appliedEffects.push(`Ability [${att.abilityName}] (35%) เศียรที่สองฉลามกัดซ้ำ 💥 -${biteDmg} HP`);
      }
      if (Math.random() < 0.30 && def.hp > 0) {
        const dispRes = applyEffectToTarget(def, { type: 'dispel', count: 1 }, true);
        if (dispRes) {
          appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
        }
      }
    }

    if (this.options.enableAbilities && att.abilityId === 'psionic_spirit_orbs') {
      const orb = att.effects.find(e => e.type === 'spirit_orb');
      if (orb && (orb.stacks ?? 1) >= 4 && Math.random() < 0.20) {
        att.effects = att.effects.filter(e => e.type !== 'spirit_orb');
        const enemySquad = att.side === 'A' ? this.squadB : this.squadA;
        const livingEnemies = this.getLivingFighters(enemySquad);
        const burstDmg = Math.max(1, Math.round(attStats.atk * 0.65));
        for (const en of livingEnemies) {
          this.applyDamageToTarget(en, burstDmg);
          en.sp = Math.max(0, en.sp - 15);
        }
        appliedEffects.push(`Ability [${att.abilityName}] (20%) ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย 💥 -${burstDmg} HP & ตัด SP -15 ศัตรูทุกคน (สลายลูกแก้วเริ่มสะสมใหม่)`);
      }
    }

    if (this.options.enableAbilities && def.abilityId === 'psionic_spirit_orbs' && def.hp > 0 && Math.random() < 0.35) {
      const confRes = applyEffectToTarget(att, { type: 'confusion', duration: 2 }, true);
      if (confRes) {
        appliedEffects.push(`${def.name} [${def.abilityName}] (35%) ลูกแก้วสะกดจิตสะท้อนใส่ ${att.name} ${confRes}`);
      }
    }

    if (hasStatus(def, 'bleed')) {
      const bHit = Math.round(def.baseStats.maxHp * skillsData.statusRules.bleed.onHitDamageHpPct);
      this.applyDamageToTarget(def, bHit);
      appliedEffects.push(`🩸 ติดเลือดไหลซ้ำ -${bHit} HP`);
    }

    const critTag = isCrit ? ' [CRIT!]' : '';
    const elemTag = elemMult > 1 ? ' (ชนะธาตุ ×1.3)' : elemMult < 1 ? ' (แพ้ธาตุ ×0.85)' : '';

    this.recordEvent({
      turn: this.round,
      actorSide: att.side,
      actorName: att.name,
      targetName: def.name,
      actionType: 'normal',
      actionName: 'โจมตีธรรมดา',
      damage: finalDmg,
      healed: 0,
      shieldGained: 0,
      isCrit,
      isMiss: false,
      elementMult: elemMult,
      appliedEffects,
      message: `[รอบ ${this.round}] ${att.name} ใช้ [โจมตีธรรมดา] โจมตี ${def.name} ทำดาเมจ ${finalDmg}${critTag}${elemTag} | พักหายใจ +${breathBonus} SP (HP ${def.name}: ${Math.round(def.hp)}/${def.baseStats.maxHp})`,
    });
  }

  private performSkill(att: TeamFighterState, sk: (typeof skillsData.skills)[number], spCost: number) {
    const scope = (sk as { targetScope?: string }).targetScope || 'single_enemy';
    const targets = this.selectTargets(att, scope);
    const appliedEffects: string[] = [];

    // สกิลไม่ทำดาเมจ (ฮีล/บัฟ/เกราะ หรือ ดีบัฟสถานะ)
    if (sk.damageMult === 0) {
      let totalHeal = 0;
      let totalShield = 0;
      const targetReports: string[] = [];

      for (const ef of sk.effects) {
        const efTarget = (ef as { target?: string }).target;
        const chance = (ef as { chance?: number }).chance ?? 1.0;
        if (Math.random() > chance) continue;

        let recipients: TeamFighterState[] = [];
        if (efTarget === 'self') {
          recipients = [att];
        } else if (efTarget === 'all_allies' || scope === 'all_allies') {
          recipients = this.getLivingFighters(this.getLivingSquad(att.side));
        } else if (efTarget === 'all_enemies' || scope === 'all_enemies') {
          recipients = this.getLivingFighters(this.getOpposingSquad(att.side));
        } else {
          recipients = targets;
        }

        for (const tgt of recipients) {
          const efPayload = { ...ef, sourceId: `${att.side}_${att.slotIndex}` };
          const res = applyEffectToTarget(tgt, efPayload as { type: string; value?: number; duration?: number; sourceId?: string });
          if (res) targetReports.push(`${tgt.name}: ${res}`);
        }
      }

      this.recordEvent({
        turn: this.round,
        actorSide: att.side,
        actorName: att.name,
        targetName: targetReports.length ? targetReports.map(r => r.split(':')[0]).join(', ') : att.name,
        actionType: 'skill',
        actionName: sk.name,
        skillTier: sk.tier,
        damage: 0,
        healed: totalHeal,
        shieldGained: totalShield,
        spCost,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: targetReports,
        message: `[รอบ ${this.round}] ${att.name} ใช้ [${sk.name}] (-${spCost} SP) → ${targetReports.join(', ')}`,
      });
      return;
    }

    // สกิลทำดาเมจ (เป้าเดี่ยว, แถวหน้า หรือ ทั้งสนาม)
    if (this.options.enableAbilities && att.abilityId === 'psionic_spirit_orbs') {
      const orb = att.effects.find(e => e.type === 'spirit_orb');
      if (orb) {
        if ((orb.stacks ?? 1) < 4) {
          orb.stacks = (orb.stacks ?? 1) + 1;
          appliedEffects.push(`Ability [${att.abilityName}] สะสมลูกแก้วจิตวิญญาณ (${orb.stacks}/4 ลูก, ATK +${orb.stacks * 5}%)`);
        }
      } else {
        att.effects.push({ type: 'spirit_orb', stacks: 1, duration: 999 });
        appliedEffects.push(`Ability [${att.abilityName}] สะสมลูกแก้วจิตวิญญาณ (1/4 ลูก, ATK +5%)`);
      }
    }

    const attStats = getEffectiveStats(att, this.options.enableAbilities);
    const hitReports: string[] = [];

    for (const def of targets) {
      const defStats = getEffectiveStats(def, this.options.enableAbilities);
      const hitChance = Math.max(0.5, Math.min(1.0, (attStats.hit - defStats.flee) / 100));
      if (Math.random() > hitChance) {
        hitReports.push(`${def.name} หลบได้ (MISS)`);
        continue;
      }

      const elemMult = getElementMultiplier(sk.element, getEffectiveElement(def), att.side, this.options.forcedElementAdvantage);
      let isCrit = Math.random() < attStats.cri / 100;
      let critMult = isCrit ? attStats.criDmg : 1.0;

      if (hasStatus(def, 'sleep')) {
        isCrit = true;
        critMult = attStats.criDmg * skillsData.statusRules.sleep.wakeDmgMult;
        def.effects = def.effects.filter(e => e.type !== 'sleep');
        appliedEffects.push('💤 ปลุกจากนิทรา! (Wake-up Strike: คริติคอล 100% & ดาเมจ +30%)');
      }

      const K = heroesData.statFormula.defConstantK;
      let pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
      if (this.options.enableAbilities && def.abilityId === 'toxic_carapace_spikes') pierce *= 0.60;
      const effDef = defStats.def * (1 - pierce);
      const baseAtkStat = (sk as any).useDefForAtk ? attStats.def : attStats.atk;
      if ((sk as any).useDefForAtk) {
        appliedEffects.push(`🛡️ เกราะกระแทก: ใช้ค่า DEF (${attStats.def}) คำนวณพลังโจมตีแทน ATK`);
      }
      const baseDmg = Math.max(1, baseAtkStat * sk.damageMult * (K / (K + effDef)));
      if (isCrit && this.options.enableAbilities && def.abilityId === 'abominable_resilience') {
        critMult *= 0.65;
        appliedEffects.push(`${def.name} [${def.abilityName}] กายาอสูรหิมะ ลดดาเมจคริติคอลเหลือ 65%`);
      }
      let finalDmg = Math.round(baseDmg * elemMult * critMult);

      if (this.options.enableSameElementBonus && sk.element === att.element) {
        finalDmg = Math.round(finalDmg * (1 + elementsData.multipliers.sameElementDamageBonus));
      }

      if (this.options.enableAbilities && att.abilityId === 'oceanic_surge' && att.sp >= att.baseStats.maxSp * 0.50 && sk.element === 'water') {
        finalDmg = Math.round(finalDmg * 1.20);
        appliedEffects.push(`Ability [${att.abilityName}] จ้าวคลั่งสมุทร (SP≥50%) ดาเมจน้ำ +20%`);
      }

      if (hasStatus(def, 'vulnerable')) {
        finalDmg = Math.round(finalDmg * (1 + skillsData.statusRules.vulnerable.extraDmgPct));
        appliedEffects.push('💔 เปราะบาง: รับดาเมจ +25%');
      }

      if (hasStatus(att, 'taunt')) {
        finalDmg = Math.round(finalDmg * (1 - skillsData.statusRules.taunt.dmgReductionPct));
        appliedEffects.push('💢 ยั่วยุ: ดาเมจลดลง 10%');
      }

      if (hasStatus(def, 'elemental_ward') && sk.element !== 'neutral') {
        const wardEf = def.effects.find(e => e.type === 'elemental_ward');
        const redPct = wardEf?.value ?? (skillsData.statusRules as any).elemental_ward?.elemDmgRedPct ?? 0.10;
        finalDmg = Math.round(finalDmg * (1 - redPct));
        appliedEffects.push(`💠 เกราะสลายธาตุ: ลดดาเมจธาตุลง ${Math.round(redPct * 100)}%`);
      }
      if (hasStatus(def, 'iron_fortress')) {
        const fortEf = def.effects.find(e => e.type === 'iron_fortress');
        const redPct = fortEf?.value ?? (skillsData.statusRules as any).iron_fortress?.dmgRedPct ?? 0.15;
        finalDmg = Math.round(finalDmg * (1 - redPct));
        appliedEffects.push(`🏰 ค่ายกลปราการเหล็ก: ลดดาเมจที่ได้รับลง ${Math.round(redPct * 100)}%`);
      }
      if (hasStatus(def, 'iron_body')) {
        const redPct = (skillsData.statusRules as any).iron_body?.finalDmgRedPct ?? 0.30;
        finalDmg = Math.round(finalDmg * (1 - redPct));
        appliedEffects.push(`🦾 กายาเหล็ก: ลดดาเมจสุดท้ายลง ${Math.round(redPct * 100)}%`);
      }

      if (this.options.enableAbilities) {
        if (def.abilityId === 'mud_hide' && Math.random() < 0.50) {
          finalDmg = Math.round(finalDmg * 0.75);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) หนังเหนียว ลดดาเมจ 25%`);
        }
        if (def.abilityId === 'bufotoxin_skin') {
          finalDmg = Math.round(finalDmg * 0.90);
          if (Math.random() < 0.55) {
            applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] (55%) ยางพิษลดดาเมจ 10% & แพร่พิษใส่ ${att.name}`);
          }
        }
        if (def.abilityId === 'caustic_venom_aura' && Math.random() < 0.40) {
          applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (40%) ไอกรดพิษแพร่พิษใส่ ${att.name}`);
        }
        if (att.abilityId === 'glacial_fang_hunt' && (hasStatus(def, 'freeze') || hasStatus(def, 'ice_skin'))) {
          finalDmg = Math.round(finalDmg * 1.30);
          appliedEffects.push(`Ability [${att.abilityName}] ขยี้ศัตรูแช่แข็ง/Ice Skin ดาเมจ +30%`);
        }
        if (att.abilityId === 'caustic_venom_aura' && hasStatus(def, 'poison')) {
          finalDmg = Math.round(finalDmg * 1.25);
          appliedEffects.push(`Ability [${att.abilityName}] ไอกรดพิษขยี้เป้าหมายติดพิษ ดาเมจ +25%`);
        }
        if (def.abilityId === 'ancient_bulwark') {
          finalDmg = Math.round(finalDmg * 0.88);
          if (def.hp < def.baseStats.maxHp * 0.65 && !hasStatus(def, 'energy_coat')) {
            applyEffectToTarget(def, { type: 'energy_coat', duration: 3 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] กายาจิตนิรันดร์ กางเกราะพลังงาน (Energy Coat 3 เทิร์น)`);
          }
        }
        if (def.abilityId === 'electro_sense' && Math.random() < 0.45) {
          applyEffectToTarget(def, { type: 'energy_coat', duration: 2 }, true);
          applyEffectToTarget(att, { type: 'debuff_hit', value: 10, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (45%) สัมผัสกระแสจิตคุ้มภัย กางเกราะพลังงาน (Energy Coat 2 เทิร์น) & ลด HIT ${att.name} 10 แต้ม`);
        }
        if (def.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
          applyEffectToTarget(att, { type: 'paralysis', duration: 2 }, true);
          att.gauge = Math.max(0, att.gauge - 8);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สัมผัสกัลปังหาพิษชา สะท้อนเข็มพิษเนมาโทซิสต์ ติดอัมพาต 2 เทิร์น & ตัดเกจ -8`);
        }
        if (att.abilityId === 'neurotoxic_stinger' && hasStatus(def, 'poison') && Math.random() < 0.65) {
          finalDmg = Math.round(finalDmg * 1.18);
          appliedEffects.push(`Ability [${att.abilityName}] (65%) เหล็กในพิษอัมพาต ดาเมจ+18%`);
          if (Math.random() < 0.50) {
            applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
            appliedEffects.push(`Ability [${att.abilityName}] ศัตรูติดอัมพาต 2 เทิร์น`);
          }
        }
        if (att.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
          applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
          def.gauge = Math.max(0, def.gauge - 8);
          appliedEffects.push(`Ability [${att.abilityName}] (50%) สัมผัสกัลปังหาพิษชา ศัตรูติดอัมพาต 2 เทิร์น & ตัดเกจ -8`);
        }
        if (def.abilityId === 'nightmare_eater_barrier') {
          const drain = Math.min(att.sp, 6);
          att.sp -= drain;
          def.sp = Math.min(def.baseStats.maxSp, def.sp + drain);
          appliedEffects.push(`${def.name} [${def.abilityName}] กลืนกินฝันร้าย ดูดซับ SP -${drain} จาก ${att.name} คืนตนเอง`);
        }
        if (def.abilityId === 'bronze_furnace_hide') {
          if (sk.element === 'fire') {
            finalDmg = Math.round(finalDmg * 0.50);
            appliedEffects.push(`${def.name} [${def.abilityName}] กายทองแดงดูดซับไฟ ลดดาเมจไฟ 50%`);
          }
          if (Math.random() < 0.50) {
            const reflect = Math.round(defStats.atk * 0.25);
            this.applyDamageToTarget(att, reflect);
            appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สะท้อนเพลิงโลหะ ${reflect} ดาเมจใส่ ${att.name}`);
          }
        }
        if (def.abilityId === 'invulnerable_golden_pelt' && sk.element === 'neutral') {
          finalDmg = Math.round(finalDmg * 0.85);
          appliedEffects.push(`${def.name} [${def.abilityName}] ขนทองคำลดดาเมจกายภาพ 15%`);
        }
        if (def.abilityId === 'ironwood_regrowth' && Math.random() < 0.40) {
          const leech = Math.round(def.baseStats.maxHp * 0.03);
          this.applyDamageToTarget(att, leech);
          def.hp = Math.min(def.baseStats.maxHp, def.hp + leech);
          appliedEffects.push(`${def.name} [${def.abilityName}] (40%) เถาวัลย์ดูดเลือด ${leech} HP จาก ${att.name}`);
        }
        if (def.abilityId === 'lightning_conductor_trunk' && finalDmg > 0) {
          def.sp = Math.min(def.baseStats.maxSp, def.sp + 10);
          const shieldGained = Math.round(finalDmg * 0.30);
          def.shield = Math.min(def.baseStats.maxHp * 0.50, def.shield + shieldGained);
          appliedEffects.push(`${def.name} [${def.abilityName}] เสาล่อฟ้า ฟื้น +10 SP & แปลงดาเมจ 30% (+${shieldGained}) เป็นเกราะ`);
        }
        if (def.abilityId === 'xuanwu_bastion' && defStats.block > attStats.ab && Math.random() < 0.60) {
          const pRes = applyEffectToTarget(att, { type: 'stone_curse', duration: 1 }, true);
          if (pRes) appliedEffects.push(`${def.name} [${def.abilityName}] (60%) บล็อกสำเร็จสาป ${att.name} กลายเป็นหิน 1 เทิร์น!`);
        }
        if (def.abilityId === 'abominable_resilience' && defStats.block > attStats.ab && Math.random() < 0.50) {
          const fRes = applyEffectToTarget(att, { type: 'freeze', duration: 1 }, true);
          if (fRes) appliedEffects.push(`${def.name} [${def.abilityName}] (50%) บล็อกสำเร็จแช่แข็ง ${att.name} 1 เทิร์น!`);
        }
        if (def.abilityId === 'toxic_carapace_spikes' && defStats.block > attStats.ab) {
          const poiRes = applyEffectToTarget(att, { type: 'poison', stacks: 1, duration: 3 }, true);
          if (poiRes) appliedEffects.push(`${def.name} [${def.abilityName}] บล็อกสำเร็จละอองพิษเกาะกุม ${att.name}!`);
        }
      }

      this.applyDamageToTarget(def, finalDmg);

      if (this.options.enableAbilities && (att.abilityId === 'glacial_fang_hunt' || att.abilityId === 'duat_soul_eater') && finalDmg > 0 && !hasStatus(att, 'stone_curse')) {
        const ls = Math.round(finalDmg * 0.12);
        att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
        appliedEffects.push(`ดูดเลือด +${ls} HP`);
      }

      if (this.options.enableAbilities && att.abilityId === 'thorn_regrowth' && finalDmg > 0 && !hasStatus(att, 'vulnerable')) {
        const sh = Math.round(finalDmg * 0.15);
        if (sh > 0) {
          att.shield = Math.min(att.baseStats.maxHp * 0.50, att.shield + sh);
          const ex = att.effects.find(e => e.type === 'shield');
          if (ex) ex.duration = Math.max(ex.duration, 2);
          else att.effects.push({ type: 'shield', duration: 2 });
          appliedEffects.push(`เกราะหนามพฤกษา +${sh}`);
        }
      }

      if (this.options.enableAbilities && att.abilityId === 'oceanic_surge' && Math.random() < 0.40) {
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        appliedEffects.push(`Ability [${att.abilityName}] (40%) ฟื้นฟู +15 SP`);
      }

      if (this.options.enableAbilities && att.abilityId === 'static_discharge' && Math.random() < 0.45) {
        const boltDmg = Math.max(1, Math.round(attStats.atk * 0.30));
        this.applyDamageToTarget(def, boltDmg);
        appliedEffects.push(`สายฟ้าแฉลบผ่าซ้ำ ⚡ -${boltDmg} HP`);
      }

      if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === 'static_discharge') {
        att.gauge = Math.min(100, att.gauge + 25);
        appliedEffects.push(`Ability [${att.abilityName}] สังหารศัตรูสำเร็จ ได้รับเกจ +25`);
      }

      if (isCrit && this.options.enableAbilities && att.abilityId === 'colossal_tremor') {
        const enemySquad = att.side === 'A' ? this.squadB : this.squadA;
        const livingEnemies = this.getLivingFighters(enemySquad);
        const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
        for (const en of livingEnemies) {
          this.applyDamageToTarget(en, shockwaveDmg);
        }
        appliedEffects.push(`คลื่นกระแทกแผ่นดินไหว 💥 -${shockwaveDmg} HP ใส่ศัตรูทั้งหมด`);
      }

      if (this.options.enableAbilities && att.abilityId === 'tartarus_three_fangs' && def.hp > 0) {
        if (Math.random() < 0.35) {
          const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35));
          this.applyDamageToTarget(def, biteDmg);
          appliedEffects.push(`Ability [${att.abilityName}] (35%) เศียรที่สองฉลามกัดซ้ำ 💥 -${biteDmg} HP`);
        }
        if (Math.random() < 0.30 && def.hp > 0) {
          const dispRes = applyEffectToTarget(def, { type: 'dispel', count: 1 }, true);
          if (dispRes) {
            appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
          }
        }
      }

      if (this.options.enableAbilities && att.abilityId === 'psionic_spirit_orbs') {
        const orb = att.effects.find(e => e.type === 'spirit_orb');
        if (orb && (orb.stacks ?? 1) >= 4 && Math.random() < 0.20) {
          att.effects = att.effects.filter(e => e.type !== 'spirit_orb');
          const enemySquad = att.side === 'A' ? this.squadB : this.squadA;
          const livingEnemies = this.getLivingFighters(enemySquad);
          const burstDmg = Math.max(1, Math.round(attStats.atk * 0.65));
          for (const en of livingEnemies) {
            this.applyDamageToTarget(en, burstDmg);
            en.sp = Math.max(0, en.sp - 15);
          }
          appliedEffects.push(`Ability [${att.abilityName}] (20%) ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย 💥 -${burstDmg} HP & ตัด SP -15 ศัตรูทุกคน (สลายลูกแก้วเริ่มสะสมใหม่)`);
        }
      }

      if (this.options.enableAbilities && def.abilityId === 'psionic_spirit_orbs' && def.hp > 0 && Math.random() < 0.35) {
        const confRes = applyEffectToTarget(att, { type: 'confusion', duration: 2 }, true);
        if (confRes) {
          appliedEffects.push(`${def.name} [${def.abilityName}] (35%) ลูกแก้วสะกดจิตสะท้อนใส่ ${att.name} ${confRes}`);
        }
      }

      if (hasStatus(def, 'bleed')) {
        const bHit = Math.round(def.baseStats.maxHp * skillsData.statusRules.bleed.onHitDamageHpPct);
        this.applyDamageToTarget(def, bHit);
        appliedEffects.push(`🩸 ติดเลือดไหลซ้ำ -${bHit} HP`);
      }

      // แปะเอฟเฟกต์สถานะ (ถ้าเป็น self ส่งให้คนร่าย ถ้าเป็น enemy ส่งให้เป้าหมาย)
      for (const ef of sk.effects) {
        const chance = (ef as { chance?: number }).chance ?? 1.0;
        if (Math.random() < chance) {
          const efTarget = (ef as { target?: string }).target;
          const recipient = efTarget === 'self' ? att : def;
          const efPayload = { ...ef, sourceId: `${att.side}_${att.slotIndex}` };
          const res = applyEffectToTarget(recipient, efPayload as { type: string; value?: number; duration?: number; sourceId?: string });
          if (res) appliedEffects.push(res);
        }
      }

      hitReports.push(`${def.name} โดนดาเมจ ${finalDmg}${isCrit ? ' [CRIT!]' : ''}`);
    }

    this.recordEvent({
      turn: this.round,
      actorSide: att.side,
      actorName: att.name,
      targetName: targets.map(t => t.name).join(', '),
      actionType: 'skill',
      actionName: sk.name,
      skillTier: sk.tier,
      damage: 0,
      healed: 0,
      shieldGained: 0,
      spCost,
      isCrit: false,
      isMiss: false,
      elementMult: 1,
      appliedEffects,
      message: `[รอบ ${this.round}] ${att.name} ใช้ [${sk.name}] (-${spCost} SP) โจมตี [${hitReports.join(' | ')}]`,
    });
  }

  private performSignature(att: TeamFighterState) {
    const heroMeta = HERO_MAP.get(att.id);
    const sigCfg = getSignatureConfig(att.rarity);
    const damageMult = (heroMeta as { customSigMult?: number })?.customSigMult !== undefined ? (heroMeta as { customSigMult?: number }).customSigMult! : sigCfg.damageMult;
    const appliedEffects: string[] = [];

    // กำหนดกลุ่มเป้าหมายตามชนิดท่าไม้ตาย
    const friendlyLiving = this.getLivingFighters(this.getLivingSquad(att.side));
    const enemyLiving = this.getLivingFighters(this.getOpposingSquad(att.side));

    // 1. สกิลบัฟ/ฮีลหมู่ (เช่น สิงโต, กวาง, เต่า, กระรอก)
    if (att.id === 'lion') {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: 'buff_atk', value: 0.20, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_spd', value: 0.15, duration: 2 });
      }
      appliedEffects.push('คำรามปลุกขวัญ: บัฟสมาชิกทุกคน ATK +20%, SPD +15% (2 เทิร์น)');
    } else if (att.id === 'deer') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.12);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'shield', value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
      }
      appliedEffects.push('เขากวางศักดิ์สิทธิ์: ฮีลเพื่อนทุกคน 12%, เกราะ 15% และฟื้นฟู +15 SP');
    } else if (att.id === 'turtle') {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: 'shield', value: 0.15, duration: 2 });
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
      }
      appliedEffects.push('ปราการกระดองวารี: มอบเกราะทีม 15% Max HP และล้าง 1 ดีบัฟ');
    } else if (att.id === 'squirrel') {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: 'buff_hit', value: 20, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_cri', value: 12, duration: 2 });
      }
      appliedEffects.push('ลำแสงพวงหาง: บัฟทีม HIT +20 และ CRI% +12% (2 เทิร์น)');
    } else if (att.id === 'flamingo') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
      }
      appliedEffects.push('ระบำเพลิงพิทักษ์ฝูง: ฮีลเพื่อนทุกคน 15%, +15 SP และล้าง 1 ดีบัฟ');
    } else if (att.id === 'capybara') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.20, duration: 2 });
      }
      appliedEffects.push('วารีอุ่นเยียวยาวิญญาณ: ฮีลเพื่อนทุกคน 18% และบัฟ DEF +20% (2 เทิร์น)');
    } else if (att.id === 'sun_stag') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 25);
        applyEffectToTarget(ally, { type: 'buff_atk', value: 0.25, duration: 2 });
      }
      appliedEffects.push('แสงอรุณแห่งการเกิดใหม่: ฮีลเพื่อนทุกคน 25%, +25 SP และบัฟ ATK +25% (2 เทิร์น)');
    } else if (att.id === 'starfish') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.15, duration: 2 });
      }
      appliedEffects.push('หัตถ์ดาราสมุทรฟื้นชีวา: ฮีลเพื่อนทุกคน 15% และบัฟ DEF +15% (2 เทิร์น)');
    } else if (att.id === 'sea_otter') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
        applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
      }
      appliedEffects.push('ไข่มุกวารีคุ้มทัพ: ฮีลเพื่อนทุกคน 18%, +15 SP และกางเกราะทีม 12% Max HP');
    } else if (att.id === 'dolphin') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'buff_spd', value: 0.20, duration: 2 });
      }
      appliedEffects.push('คลื่นเสียงแห่งปาฏิหาริย์: ฮีลเพื่อนทุกคน 25%, ล้างดีบัฟทั้งหมด และบัฟ SPD +20% (2 เทิร์น)');
    } else if (att.id === 'dove') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_spd', value: 0.15, duration: 2 });
      }
      appliedEffects.push('ปีกสันติภาพเยียวยา: ฮีลเพื่อนทุกคน 15% และบัฟ SPD +15% (2 เทิร์น)');
    } else if (att.id === 'swan') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
      }
      appliedEffects.push('ระบำวายุพิทักษ์ชีวา: ฮีลเพื่อนทุกคน 18%, กางเกราะทีม 12% Max HP และล้าง 1 ดีบัฟ');
    } else if (att.id === 'quetzal') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'buff_spd', value: 0.25, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_flee', value: 15, duration: 2 });
      }
      appliedEffects.push('มหาพรแห่งเทพเจ้าสายลม: ฮีลเพื่อนทุกคน 25%, ล้างดีบัฟทั้งหมด และบัฟ SPD +25%/FLEE +15 (2 เทิร์น)');
    } else if (att.id === 'pig') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.15, duration: 2 });
      }
      appliedEffects.push('โคลนแร่ธาตุเยียวยา: ฮีลเพื่อนทุกคน 15% และบัฟ DEF +15% (2 เทิร์น)');
    } else if (att.id === 'wombat') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.20, duration: 2 });
      }
      appliedEffects.push('ปราการโพรงดินพิทักษ์: ฮีลเพื่อนทุกคน 18%, เกราะทีม 12% Max HP และบัฟ DEF +20% (2 เทิร์น)');
    } else if (att.id === 'giraffe') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.25, duration: 2 });
      }
      appliedEffects.push('พรมิ่งขวัญแห่งผืนดิน: ฮีลเพื่อนทุกคน 25%, ล้างดีบัฟทั้งหมด และบัฟ DEF +25% (2 เทิร์น)');
    } else if (att.id === 'koala') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.15, duration: 2 });
      }
      appliedEffects.push('ไออุ่นพฤกษาโอบนิทรา: ฮีลเพื่อนทุกคน 15% และบัฟ DEF +15% (2 เทิร์น)');
    } else if (att.id === 'hornbill') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'regen', value: 0.06, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.25, duration: 2 });
      }
      appliedEffects.push('พรมหาวนาลัยพิทักษ์ชีพ: ฮีลเพื่อนทุกคน 25%, ล้างดีบัฟทั้งหมด, รีเจน 6% และบัฟ DEF +25% (2 เทิร์น)');
    } else if (att.id === 'bee') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push('ละอองนมผึ้งฟื้นฟูรัง: ฮีลเพื่อนทุกคน 15%, บัฟ DEF +15% (2 เทิร์น) และ +10 SP');
    } else if (att.id === 'salamander') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
        applyEffectToTarget(ally, { type: 'regen', value: 0.06, duration: 2 });
      }
      appliedEffects.push('หัตถ์สมานวิญญาณซาลาแมนเดอร์: ฮีลเพื่อนทุกคน 18%, ล้างดีบัฟ 1 สถานะ และรีเจน 6% (2 เทิร์น)');
    } else if (att.id === 'horseshoe_crab') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'shield', value: 0.15, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.25, duration: 2 });
      }
      appliedEffects.push('มหาปราการโลหิตครามล้างกัลป์: ฮีลเพื่อนทุกคน 25%, ล้างดีบัฟทั้งหมด, เกราะทีม 15% Max HP และบัฟ DEF +25% (2 เทิร์น)');
    } else if (att.id === 'krill') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push('ละอองแสงออโรราฝูงเคยฟื้นชีวา: ฮีลเพื่อนทุกคน 15%, บัฟ DEF +15% (2 เทิร์น) และ +10 SP');
    } else if (att.id === 'beluga') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
        applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
      }
      appliedEffects.push('คลื่นเพลงบริสุทธิ์สมานทัพ: ฮีลเพื่อนทุกคน 18%, ล้างดีบัฟ 1 สถานะ และเกราะทีม 12% Max HP (2 เทิร์น)');
    } else if (att.id === 'reindeer') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'regen', value: 0.06, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.25, duration: 2 });
      }
      appliedEffects.push('มหาพรมงกุฎแสงเหนือชุบวิญญาณ: ฮีลเพื่อนทุกคน 25%, ล้างดีบัฟทั้งหมด, รีเจน 6% (2 เทิร์น) และบัฟ DEF +25% (2 เทิร์น)');
    } else if (att.id === 'cockroach') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push('ฟีโรโมนทมิฬรวมฝูงคืนชีพ: ฮีลเพื่อนทุกคน 15%, บัฟ DEF +15% (2 เทิร์น) และ +10 SP');
    } else if (att.id === 'tokay_gecko') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
        applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
      }
      appliedEffects.push('กู่ก้องสมานวิญญาณรัตติกาล: ฮีลเพื่อนทุกคน 18%, ล้างดีบัฟ 1 สถานะ และเกราะทีม 12% Max HP (2 เทิร์น)');
    } else if (att.id === 'axolotl') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'regen', value: 0.06, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.25, duration: 2 });
      }
      appliedEffects.push('มหาปาฏิหาริย์ชุบวิญญาณแห่งเงามืด: ฮีลเพื่อนทุกคน 25%, ล้างดีบัฟทั้งหมด, รีเจน 6% (2 เทิร์น) และบัฟ DEF +25% (2 เทิร์น)');
    } else if (att.id === 'alpaca') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
        applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
      }
      appliedEffects.push('ไออุ่นปุยขนสุริยะโอบอุ้ม: ฮีลเพื่อนทุกคน 18%, ล้างดีบัฟ 1 สถานะ และเกราะทีม 12% Max HP (2 เทิร์น)');
    } else if (att.id === 'white_elephant') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.26);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.25, duration: 2 });
      }
      appliedEffects.push('มหาบารมีคชสารเผือกแสงทิพย์คุ้มเกล้า: ฮีลเพื่อนทุกคน 26%, ล้างดีบัฟทั้งหมด และบัฟ DEF +25% (2 เทิร์น)');
    } else if (att.id === 'star_nosed_mole') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
      }
      appliedEffects.push('สัมผัสประสาทความเร็วแสงนำทัพ: ฮีลเพื่อนทุกคน 15% และเติม +15 SP');
    } else if (att.id === 'mouflon') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_spd', value: 0.15, duration: 2 });
      }
      appliedEffects.push('เกราะประจุไฟฟ้าสถิตขนแกะคุ้มภัย: ฮีลเพื่อนทุกคน 18%, เกราะทีม 12% Max HP และบัฟ SPD +15% (2 เทิร์น)');
    } else if (att.id === 'okapi') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.26);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
        applyEffectToTarget(ally, { type: 'buff_atk', value: 0.20, duration: 2 });
        applyEffectToTarget(ally, { type: 'buff_spd', value: 0.20, duration: 2 });
      }
      appliedEffects.push('มหากระตุ้นชีพจรสายฟ้าพงไพรลึกลับ: ฮีลเพื่อนทุกคน 26%, ล้างดีบัฟทั้งหมด, บัฟ ATK +20% & SPD +20% (2 เทิร์น)');
    } else if (att.id === 'hamster') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
      }
      appliedEffects.push('คลื่นจิตเกื้อหนุนดวงใจ: ฮีลเพื่อนทุกคน 15% และฟื้นฟู +15 SP');
    } else if (att.id === 'crane') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.20);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
      }
      appliedEffects.push('ระบำจิตชำระมลทิน: ฮีลเพื่อนทุกคน 20% Max HP และล้าง 1 ดีบัฟ');
    } else if (att.id === 'blue_whale') {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 20);
        applyEffectToTarget(ally, { type: 'buff_hit', value: 15, duration: 2 });
      }
      appliedEffects.push('คลื่นโซนาร์จิตมหาสมุทร: ฮีลเพื่อนทุกคน 25%, ฟื้นฟู +20 SP และบัฟ HIT +15 (2 เทิร์น)');
    } else if (att.id === 'mammoth') {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: 'buff_def', value: 0.15, duration: 2 });
      }
      appliedEffects.push('มหาคลื่นงาช้างจิตสะท้าน: บัฟทีม DEF +15% (2 เทิร์น)');
    }

    // 2. ดาเมจ (ถ้ามี)
    if (damageMult > 0) {
      if (this.options.enableAbilities && att.abilityId === 'psionic_spirit_orbs') {
        const orb = att.effects.find(e => e.type === 'spirit_orb');
        if (orb) {
          if ((orb.stacks ?? 1) < 4) {
            orb.stacks = (orb.stacks ?? 1) + 1;
            appliedEffects.push(`Ability [${att.abilityName}] สะสมลูกแก้วจิตวิญญาณ (${orb.stacks}/4 ลูก, ATK +${orb.stacks * 5}%)`);
          }
        } else {
          att.effects.push({ type: 'spirit_orb', stacks: 1, duration: 999 });
          appliedEffects.push(`Ability [${att.abilityName}] สะสมลูกแก้วจิตวิญญาณ (1/4 ลูก, ATK +5%)`);
        }
      }

      // ดาเมจต้องเล็งเฉพาะศัตรูเสมอ ห้ามนำ target: "all_allies" ของบัฟมาใช้เป็นเป้าหมายดาเมจ
      const effectTarget = (heroMeta?.signatureEffect as { target?: string })?.target;
      const scope =
        effectTarget === 'all_enemies' ? 'all_enemies' :
        effectTarget === 'front_enemies' ? 'front_enemies' : 'single_enemy';

      const targets = scope === 'all_enemies' ? enemyLiving : this.selectTargets(att, scope);
      const hitReports: string[] = [];

      for (const def of targets) {
        const elemMult = getElementMultiplier(att.element, getEffectiveElement(def), att.side, this.options.forcedElementAdvantage);
        const attStats = getEffectiveStats(att, this.options.enableAbilities);
        const defStats = getEffectiveStats(def, this.options.enableAbilities);

        let isCrit = false;
        let critMult = 1.0;
        if (att.id === 'garuda') {
          isCrit = true;
          critMult = attStats.criDmg;
        }
        if (hasStatus(def, 'sleep')) {
          isCrit = true;
          critMult = 1.5 * skillsData.statusRules.sleep.wakeDmgMult;
          def.effects = def.effects.filter(e => e.type !== 'sleep');
          appliedEffects.push('💤 ปลุกจากนิทรา! (Wake-up Strike: คริติคอล 100% & ดาเมจ +30%)');
        }

        const K = heroesData.statFormula.defConstantK;
        const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
        let effDef = defStats.def * (1 - pierce);
        if (att.id === 'nine_tailed_fox') {
          effDef *= 0.75;
          appliedEffects.push('เจาะเกราะ 25% (Ignore DEF 25%)');
        }
        const baseDmg = Math.max(1, attStats.atk * damageMult * (K / (K + effDef)));
        let finalDmg = Math.round(baseDmg * elemMult * critMult);

        if (hasStatus(def, 'vulnerable')) {
          finalDmg = Math.round(finalDmg * (1 + skillsData.statusRules.vulnerable.extraDmgPct));
          appliedEffects.push('💔 เปราะบาง: รับดาเมจ +25%');
        }

        if (hasStatus(att, 'taunt')) {
          finalDmg = Math.round(finalDmg * (1 - skillsData.statusRules.taunt.dmgReductionPct));
          appliedEffects.push('💢 ยั่วยุ: ดาเมจลดลง 10%');
        }

        if (hasStatus(def, 'elemental_ward') && att.element !== 'neutral') {
          const wardEf = def.effects.find(e => e.type === 'elemental_ward');
          const redPct = wardEf?.value ?? (skillsData.statusRules as any).elemental_ward?.elemDmgRedPct ?? 0.10;
          finalDmg = Math.round(finalDmg * (1 - redPct));
          appliedEffects.push(`💠 เกราะสลายธาตุ: ลดดาเมจธาตุลง ${Math.round(redPct * 100)}%`);
        }
        if (hasStatus(def, 'iron_fortress')) {
          const fortEf = def.effects.find(e => e.type === 'iron_fortress');
          const redPct = fortEf?.value ?? (skillsData.statusRules as any).iron_fortress?.dmgRedPct ?? 0.15;
          finalDmg = Math.round(finalDmg * (1 - redPct));
          appliedEffects.push(`🏰 ค่ายกลปราการเหล็ก: ลดดาเมจที่ได้รับลง ${Math.round(redPct * 100)}%`);
        }
        if (hasStatus(def, 'iron_body')) {
          const redPct = (skillsData.statusRules as any).iron_body?.finalDmgRedPct ?? 0.30;
          finalDmg = Math.round(finalDmg * (1 - redPct));
          appliedEffects.push(`🦾 กายาเหล็ก: ลดดาเมจสุดท้ายลง ${Math.round(redPct * 100)}%`);
        }

        if (this.options.enableAbilities && att.abilityId === 'oceanic_surge' && att.sp >= att.baseStats.maxSp * 0.50 && att.element === 'water') {
          finalDmg = Math.round(finalDmg * 1.20);
          appliedEffects.push(`Ability [${att.abilityName}] จ้าวคลั่งสมุทร (SP≥50%) ดาเมจน้ำ +20%`);
        }

        if (this.options.enableAbilities) {
          if (def.abilityId === 'mud_hide' && Math.random() < 0.50) {
            finalDmg = Math.round(finalDmg * 0.75);
            appliedEffects.push(`${def.name} [${def.abilityName}] (50%) หนังเหนียว ลดดาเมจ 25%`);
          }
          if (def.abilityId === 'bufotoxin_skin') {
            finalDmg = Math.round(finalDmg * 0.90);
            if (Math.random() < 0.55) {
              applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
              appliedEffects.push(`${def.name} [${def.abilityName}] (55%) ยางพิษลดดาเมจ 10% & แพร่พิษใส่ ${att.name}`);
            }
          }
          if (def.abilityId === 'caustic_venom_aura' && Math.random() < 0.40) {
            applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] (40%) ไอกรดพิษแพร่พิษใส่ ${att.name}`);
          }
          if (att.abilityId === 'glacial_fang_hunt' && (hasStatus(def, 'freeze') || hasStatus(def, 'ice_skin'))) {
            finalDmg = Math.round(finalDmg * 1.30);
            appliedEffects.push(`Ability [${att.abilityName}] ขยี้ศัตรูแช่แข็ง/Ice Skin ดาเมจ +30%`);
          }
          if (att.abilityId === 'caustic_venom_aura' && hasStatus(def, 'poison')) {
            finalDmg = Math.round(finalDmg * 1.25);
            appliedEffects.push(`Ability [${att.abilityName}] ไอกรดพิษขยี้เป้าหมายติดพิษ ดาเมจ +25%`);
          }
          if (def.abilityId === 'ancient_bulwark') {
            finalDmg = Math.round(finalDmg * 0.88);
            if (def.hp < def.baseStats.maxHp * 0.65 && !hasStatus(def, 'energy_coat')) {
              applyEffectToTarget(def, { type: 'energy_coat', duration: 3 }, true);
              appliedEffects.push(`${def.name} [${def.abilityName}] กายาจิตนิรันดร์ กางเกราะพลังงาน (Energy Coat 3 เทิร์น)`);
            }
          }
          if (def.abilityId === 'electro_sense' && Math.random() < 0.45) {
            applyEffectToTarget(def, { type: 'energy_coat', duration: 2 }, true);
            applyEffectToTarget(att, { type: 'debuff_hit', value: 10, duration: 2 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] (45%) สัมผัสกระแสจิตคุ้มภัย กางเกราะพลังงาน (Energy Coat 2 เทิร์น) & ลด HIT ${att.name} 10 แต้ม`);
          }
          if (def.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
            applyEffectToTarget(att, { type: 'paralysis', duration: 2 }, true);
            att.gauge = Math.max(0, att.gauge - 8);
            appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สัมผัสกัลปังหาพิษชา สะท้อนเข็มพิษเนมาโทซิสต์ ติดอัมพาต 2 เทิร์น & ตัดเกจ -8`);
          }
          if (att.abilityId === 'neurotoxic_stinger' && hasStatus(def, 'poison') && Math.random() < 0.65) {
            finalDmg = Math.round(finalDmg * 1.18);
            appliedEffects.push(`Ability [${att.abilityName}] (65%) เหล็กในพิษอัมพาต ดาเมจ+18%`);
            if (Math.random() < 0.50) {
              applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
              appliedEffects.push(`Ability [${att.abilityName}] ศัตรูติดอัมพาต 2 เทิร์น`);
            }
          }
          if (att.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
            applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
            def.gauge = Math.max(0, def.gauge - 8);
            appliedEffects.push(`Ability [${att.abilityName}] (50%) สัมผัสกัลปังหาพิษชา ศัตรูติดอัมพาต 2 เทิร์น & ตัดเกจ -8`);
          }
        }

        this.applyDamageToTarget(def, finalDmg);

        if (this.options.enableAbilities && att.abilityId === 'glacial_fang_hunt' && finalDmg > 0 && !hasStatus(att, 'stone_curse')) {
          const ls = Math.round(finalDmg * 0.12);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          appliedEffects.push(`ดูดเลือด +${ls} HP`);
        }

        if (att.id === 'verdant_hydra' && finalDmg > 0 && !hasStatus(att, 'stone_curse')) {
          const drain = Math.round(finalDmg * 0.25);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + drain);
          appliedEffects.push(`เก้าเศียรกลืนชีพ: สูบเลือด +${drain} HP`);
        }

        if (this.options.enableAbilities && att.abilityId === 'thorn_regrowth' && finalDmg > 0 && !hasStatus(att, 'vulnerable')) {
          const sh = Math.round(finalDmg * 0.15);
          if (sh > 0) {
            att.shield = Math.min(att.baseStats.maxHp * 0.50, att.shield + sh);
            const ex = att.effects.find(e => e.type === 'shield');
            if (ex) ex.duration = Math.max(ex.duration, 2);
            else att.effects.push({ type: 'shield', duration: 2 });
            appliedEffects.push(`เกราะหนามพฤกษา +${sh}`);
          }
        }

      if (this.options.enableAbilities && att.abilityId === 'oceanic_surge' && Math.random() < 0.40) {
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        appliedEffects.push(`Ability [${att.abilityName}] (40%) ฟื้นฟู +15 SP`);
      }

      if (this.options.enableAbilities && att.abilityId === 'static_discharge' && Math.random() < 0.45) {
        const boltDmg = Math.max(1, Math.round(attStats.atk * 0.30));
        this.applyDamageToTarget(def, boltDmg);
        appliedEffects.push(`สายฟ้าแฉลบผ่าซ้ำ ⚡ -${boltDmg} HP`);
      }

      if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === 'static_discharge') {
        att.gauge = Math.min(100, att.gauge + 25);
        appliedEffects.push(`Ability [${att.abilityName}] สังหารศัตรูสำเร็จ ได้รับเกจ +25`);
      }

      if (isCrit && this.options.enableAbilities && att.abilityId === 'colossal_tremor') {
        const enemySquad = att.side === 'A' ? this.squadB : this.squadA;
        const livingEnemies = this.getLivingFighters(enemySquad);
        const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
        for (const en of livingEnemies) {
          this.applyDamageToTarget(en, shockwaveDmg);
        }
        appliedEffects.push(`คลื่นกระแทกแผ่นดินไหว 💥 -${shockwaveDmg} HP ใส่ศัตรูทั้งหมด`);
      }

      if (this.options.enableAbilities && att.abilityId === 'tartarus_three_fangs' && def.hp > 0) {
        if (Math.random() < 0.35) {
          const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35));
          this.applyDamageToTarget(def, biteDmg);
          appliedEffects.push(`Ability [${att.abilityName}] (35%) เศียรที่สองฉลามกัดซ้ำ 💥 -${biteDmg} HP`);
        }
        if (Math.random() < 0.30 && def.hp > 0) {
          const dispRes = applyEffectToTarget(def, { type: 'dispel', count: 1 }, true);
          if (dispRes) {
            appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
          }
        }
      }

      if (this.options.enableAbilities && att.abilityId === 'psionic_spirit_orbs') {
        const orb = att.effects.find(e => e.type === 'spirit_orb');
        if (orb && (orb.stacks ?? 1) >= 4 && Math.random() < 0.20) {
          att.effects = att.effects.filter(e => e.type !== 'spirit_orb');
          const enemySquad = att.side === 'A' ? this.squadB : this.squadA;
          const livingEnemies = this.getLivingFighters(enemySquad);
          const burstDmg = Math.max(1, Math.round(attStats.atk * 0.65));
          for (const en of livingEnemies) {
            this.applyDamageToTarget(en, burstDmg);
            en.sp = Math.max(0, en.sp - 15);
          }
          appliedEffects.push(`Ability [${att.abilityName}] (20%) ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย 💥 -${burstDmg} HP & ตัด SP -15 ศัตรูทุกคน (สลายลูกแก้วเริ่มสะสมใหม่)`);
        }
      }

      if (this.options.enableAbilities && def.abilityId === 'psionic_spirit_orbs' && def.hp > 0 && Math.random() < 0.35) {
        const confRes = applyEffectToTarget(att, { type: 'confusion', duration: 2 }, true);
        if (confRes) {
          appliedEffects.push(`${def.name} [${def.abilityName}] (35%) ลูกแก้วสะกดจิตสะท้อนใส่ ${att.name} ${confRes}`);
        }
      }

        if (hasStatus(def, 'bleed')) {
          const bHit = Math.round(def.baseStats.maxHp * skillsData.statusRules.bleed.onHitDamageHpPct);
          this.applyDamageToTarget(def, bHit);
          appliedEffects.push(`🩸 ติดเลือดไหลซ้ำ -${bHit} HP`);
        }

        hitReports.push(`${def.name} -${finalDmg} HP${isCrit ? ' [CRIT!]' : ''}`);

        // เอฟเฟกต์ดีบัฟจากข้อมูล signatureEffect พื้นฐาน (เช่น owl ตาบอด 100%, rat ติดพิษ ฯลฯ)
        if (heroMeta?.signatureEffect) {
          const ef = heroMeta.signatureEffect as { type: string; value?: number; duration?: number; chance?: number; target?: string };
          const isDebuff = !ef.type.startsWith('buff_') && ef.type !== 'shield' && !ef.type.startsWith('team_') && ef.type !== 'cleanse';
          if (isDebuff) {
            const chance = ef.chance ?? sigCfg.effectChance;
            if (Math.random() < chance) {
              const efPayload = { ...ef, sourceId: `${att.side}_${att.slotIndex}` };
              const res = applyEffectToTarget(def, efPayload as { type: string; value?: number; duration?: number; sourceId?: string });
              if (res && !appliedEffects.includes(res)) appliedEffects.push(res);
            }
          }
        }

        // เอฟเฟกต์เฉพาะตัวเพิ่มเติม
        if (att.id === 'peacock') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 });
          applyEffectToTarget(def, { type: 'confusion', duration: 2 });
        } else if (att.id === 'owl') {
          applyEffectToTarget(def, { type: 'confusion', duration: 2 });
          applyEffectToTarget(def, { type: 'blind', duration: 1 });
        } else if (att.id === 'qilin') {
          applyEffectToTarget(def, { type: 'confusion', duration: 2 });
          att.gauge = Math.min(100, att.gauge + 15);
        } else if (att.id === 'platypus') {
          applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 });
          appliedEffects.push('คลื่นเหนี่ยวนำประจุจิต: มอบเกราะ 15% Max HP (2 เทิร์น)');
        } else if (att.id === 'white_lion') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 });
          applyEffectToTarget(def, { type: 'blind', duration: 2 });
          def.gauge = Math.max(0, def.gauge - 10);
        } else if (att.id === 'giant_dragonfly') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          if (Math.random() < 0.65) applyEffectToTarget(def, { type: 'stun', duration: 1 });
        } else if (att.id === 'sea_lion') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          if (Math.random() < 0.40) applyEffectToTarget(def, { type: 'freeze', duration: 1 });
        } else if (att.id === 'porcupine' && Math.random() < 0.30) {
          applyEffectToTarget(def, { type: 'stun', duration: 1 });
        } else if (att.id === 'phoenix') {
          applyEffectToTarget(def, { type: 'burn', duration: 2 });
        } else if (att.id === 'naga') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          def.gauge = Math.max(0, def.gauge - 20);
        } else if (att.id === 'beetle' && Math.random() < 0.45) {
          applyEffectToTarget(att, { type: 'shield', value: 0.18, duration: 2 });
          appliedEffects.push('เขากว่างหนีบเพลิงกัลป์: มอบเกราะ 18% Max HP');
        } else if (att.id === 'crab' && Math.random() < 0.25) {
          applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 });
          appliedEffects.push('ก้ามวารีสกัดคลื่น: มอบเกราะ 12% Max HP');
        } else if (att.id === 'bighorn' && Math.random() < 0.25) {
          applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 });
          appliedEffects.push('เขาเกลียวพสุธาวายุ: มอบเกราะ 12% Max HP');
        } else if (att.id === 'yak') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.15, duration: 2 });
            applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
          }
          appliedEffects.push('ปราการวายุหิมาลัย: เกราะทีม 15% Max HP & ล้าง 1 ดีบัฟ');
        } else if (att.id === 'cheetah') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push('กรามล่าความเร็ว: เร่งเกจตนเอง +15');
        } else if (att.id === 'ostrich') {
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push('เตะสกัดพายุคลั่ง: ตัดเกจเป้าหมาย -15');
        } else if (att.id === 'owl') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('พายุสะกดจิตปีกราตรี: สโลว์เป้าหมาย (2 เทิร์น)');
        } else if (att.id === 'crow') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('พายุขนนกสับสน: สโลว์เป้าหมาย (2 เทิร์น)');
        } else if (att.id === 'condor') {
          if (Math.random() < 0.70) {
            applyEffectToTarget(def, { type: 'stun', duration: 1 });
          }
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_hit', 'buff_flee', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          appliedEffects.push('ไซโคลนมหาวาตภัย: สลายบัฟเป้าหมายทั้งหมด & สตัน 1 เทิร์น');
        } else if (att.id === 'cougar') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push('พุ่งขย้ำจากผาหิน: เร่งเกจตนเอง +15');
        } else if (att.id === 'perentie') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('คมเขี้ยวพสุธาปลิดชีพ: สโลว์เป้าหมาย (2 เทิร์น)');
        } else if (att.id === 'prairie_dog') {
          applyEffectToTarget(def, { type: 'blind', duration: 1 });
          appliedEffects.push('เสียงเตือนป่วนพสุธา: ตาบอด 1 เทิร์น');
        } else if (att.id === 'anteater') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 });
          appliedEffects.push('กรงเล็บทลายจอมปลวก: ลด ATK เป้าหมาย 20% (2 เทิร์น)');
        } else if (att.id === 'elephant') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push('มหาแผ่นดินไหวสะท้านภพ: สโลว์ & ตัดเกจเป้าหมาย -15');
        } else if (att.id === 'grizzly') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 });
          appliedEffects.push('อุ้งตีนกริสลี่ถล่มผา: ลด DEF เป้าหมาย 30% (2 เทิร์น)');
        } else if (att.id === 'sloth') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'buff_def', value: 0.20, duration: 2 });
            applyEffectToTarget(ally, { type: 'shield', value: 0.12, duration: 2 });
          }
          appliedEffects.push('โอบกอดเถาวัลย์พฤกษา: บัฟ DEF +20% & เกราะ 12% ให้ทีม');
        } else if (att.id === 'tapir') {
          applyEffectToTarget(def, { type: 'sleep', duration: 2 });
          appliedEffects.push('ท่องนิทรากลืนฝัน: หลับใหล 2 เทิร์น');
        } else if (att.id === 'panda') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.20, duration: 2 });
          }
          appliedEffects.push('มหาพสุธาไผ่พันลำ: มอบเกราะ 20% Max HP ให้เพื่อนทุกคน');
        } else if (att.id === 'ocelot') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push('กรงเล็บพรานพงไพร: เร่งเกจตนเอง +15');
        } else if (att.id === 'clouded_leopard') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('โฉบสังหารยอดเรือนไพร: สโลว์เป้าหมาย (2 เทิร์น)');
        } else if (att.id === 'chameleon') {
          applyEffectToTarget(def, { type: 'debuff_hit', value: 15, duration: 2 });
          appliedEffects.push('สะกดตาสลับสีลวงตา: ลด HIT เป้าหมาย 15 แต้ม (2 เทิร์น)');
        } else if (att.id === 'gibbon') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 });
          appliedEffects.push('เถาวัลย์พันธนาการโหนสวาท: ลด ATK เป้าหมาย 20% (2 เทิร์น)');
        } else if (att.id === 'orangutan') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push('มหาพฤกษาทลายภพ: สโลว์ & ตัดเกจเป้าหมาย -15');
        } else if (att.id === 'toad') {
          applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 });
          appliedEffects.push('คางคกพ่นยางพิษสกัดทัพ: เกราะ 12% Max HP');
        } else if (att.id === 'centipede') {
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 });
          appliedEffects.push('กรงเล็บร้อยขารุมทึ้ง: เลือดไหล & ติดพิษ 3 เทิร์น');
        } else if (att.id === 'butterfly') {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push('ระบำปีกผีเสื้อพิษลวงตา: ตัด SP ศัตรู -20');
        } else if (att.id === 'gila_monster') {
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 });
          appliedEffects.push('ขากรรไกรพิษบดกระดูก: สตัน & ติดพิษ 3 เทิร์น');
        } else if (att.id === 'black_widow') {
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 });
          appliedEffects.push('เขี้ยวแม่ม่ายดำปลิดชีพ: ลด DEF 25% & ติดพิษ 3 เทิร์น');
        } else if (att.id === 'pitohui') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 });
          appliedEffects.push('พายุขนนกพิษมึนงง: สโลว์ & ติดพิษ');
        } else if (att.id === 'stonefish') {
          applyEffectToTarget(att, { type: 'shield', value: 0.18, duration: 2 });
          appliedEffects.push('ปราการหินทมิฬขย้ำวิญญาณ: เกราะพิษ 18% Max HP');
        } else if (att.id === 'deathstalker') {
          applyEffectToTarget(def, { type: 'blind', duration: 1 });
          appliedEffects.push('หางมัจจุราชแทงวิญญาณ: ติดพิษ 2 ชั้น & ตาบอด 1 เทิร์น');
        } else if (att.id === 'cone_snail') {
          applyEffectToTarget(def, { type: 'stun', duration: 1 });
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push('มหาฉมวกมรณะดับประสาท: ตรึงร่าง, สตัน & สลายบัฟทั้งหมด');
        } else if (att.id === 'walrus') {
          applyEffectToTarget(def, { type: 'freeze', duration: 1 });
          appliedEffects.push('งาเหมันต์ทลายธารน้ำแข็ง: สตัน 1 เทิร์น & แช่แข็ง 1 เทิร์น');
        } else if (att.id === 'leopard_seal') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('ขากรรไกรเหมันต์กระชากร่าง: เลือดไหล & สโลว์ 2 เทิร์น');
        } else if (att.id === 'wolverine') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 });
          appliedEffects.push('กรงเล็บคลั่งทลายหิมะ: สตัน 1 เทิร์น & ลด DEF 20%');
        } else if (att.id === 'polar_bear') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 });
          appliedEffects.push('มหาอุ้งตีนถล่มขั้วโลก: สตัน 1 เทิร์น & ลด DEF 30%');
        } else if (att.id === 'ermine') {
          appliedEffects.push('เขี้ยวขาวพริบตาปลิดชีพ: บัฟ CRI+20% (2 เทิร์น)');
        } else if (att.id === 'lynx') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push('กรงเล็บเงาหิมะทะลวงจุดตาย: สโลว์ & เร่งเกจตนเอง +15');
        } else if (att.id === 'snow_leopard') {
          applyEffectToTarget(def, { type: 'freeze', duration: 1 });
          appliedEffects.push('โผนขย้ำจากยอดผาเยือกแข็ง: ลด DEF 30% & แช่แข็ง 1 เทิร์น');
        } else if (att.id === 'puffin') {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push('พายุจะงอยเหมันต์ปั่นป่วน: ตาบอด 2 เทิร์น & ตัด SP -20');
        } else if (att.id === 'narwhal') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('หอกเกลียวน้ำแข็งเสียบสกัดจุด: แช่แข็ง 1 เทิร์น & สโลว์ 2 เทิร์น');
        } else if (att.id === 'seagull') {
          appliedEffects.push('เสียงโวยวายปีกวายุสับสน: ตาบอด 2 เทิร์น');
        } else if (att.id === 'armadillo') {
          applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 });
          appliedEffects.push('ก้อนเหล็กทมิฬกลิ้งกระแทก: สตัน 1 เทิร์น & เกราะ 12% Max HP');
        } else if (att.id === 'hyena') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 });
          appliedEffects.push('กรามเหล็กขย้ำกระดูกทลายทัพ: สตัน 1 เทิร์น & ลด ATK 20%');
        } else if (att.id === 'sperm_whale') {
          applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 });
          appliedEffects.push('มหาคลื่นกระแทกอเวจีใต้สมุทร: สตัน 1 เทิร์น & เกราะ 15% Max HP');
        } else if (att.id === 'tasmanian_devil') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 });
          appliedEffects.push('เขี้ยวปีศาจขย้ำแหลก: ลด DEF 20%');
        } else if (att.id === 'black_vulture') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 });
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 });
          appliedEffects.push('จะงอยทมิฬฉีกกระชากวิญญาณ: เลือดไหล 3 เทิร์น & ลด DEF 20%');
        } else if (att.id === 'jaguar') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 });
          appliedEffects.push('เงาพยัคฆ์ขย้ำกะโหลกปลิดชีพ: ตาบอด 2 เทิร์น & ลด DEF 30%');
        } else if (att.id === 'aye_aye') {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push('เนตรปีศาจสะกดวิญญาณ: ตาบอด 2 เทิร์น & ตัด SP -20');
        } else if (att.id === 'crow') {
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push('พายุขนนกทมิฬกลืนตะวัน: ตาบอด 2 เทิร์น & ตัดเกจ -10');
        } else if (att.id === 'vampire_squid') {
          applyEffectToTarget(def, { type: 'silence', duration: 2 });
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push('ม่านหมึกดูดเลือด: ใบ้ 2 เทิร์น & ลบล้างบัฟทั้งหมด');
        } else if (att.id === 'sand_frog') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.15, duration: 2 });
          }
          appliedEffects.push('กายาทรายพองลมสะท้อนสุริยัน: เกราะทีม 15% Max HP');
        } else if (att.id === 'camel') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'buff_def', value: 0.20, duration: 2 });
          }
          appliedEffects.push('ปราการโหนกสุริยะแห่งทะเลทราย: บัฟ DEF +20% (2 เทิร์น) ให้ทีม');
        } else if (att.id === 'white_bison') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.20, duration: 2 });
            applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
          }
          appliedEffects.push('เกราะแสงศักดิ์สิทธิ์ไบซันเทวะ: เกราะทีม 20% Max HP & ล้าง 1 ดีบัฟ');
        } else if (att.id === 'sand_cat') {
          applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 });
          appliedEffects.push('กรงเล็บสุริยันฉีกผืนทราย: เลือดไหล 2 เทิร์น');
        } else if (att.id === 'sidewinder') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.25, duration: 2 });
          appliedEffects.push('อสรพิษไซด์ไวนเดอร์ฉกแสงสุริยัน: ลด DEF 25%');
        } else if (att.id === 'akhal_teke') {
          def.gauge = Math.max(0, def.gauge - 20);
          appliedEffects.push('บาทาสวรรค์สะท้านสุริยะทองคำ: ตัดเกจเป้าหมาย -20 แต้ม');
        } else if (att.id === 'caracal') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push('ทะยานตะปบแสงสุริยะสังหาร: เร่งเกจตนเอง +15');
        } else if (att.id === 'gyrfalcon') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.35, duration: 2 });
          appliedEffects.push('ศรสุริยันดิ่งพิฆาตไจร์ฟอลคอน: ลด DEF เป้าหมาย 35%');
        } else if (att.id === 'frilled_lizard') {
          applyEffectToTarget(def, { type: 'blind', duration: 2 });
          appliedEffects.push('แผ่แผงคอสุริยันสะกดขวัญ: ตาบอด 2 เทิร์น');
        } else if (att.id === 'electric_ray') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.15, duration: 2 });
          }
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('เกราะสนามไฟฟ้ากระตุกมรณะ: เกราะทีม 15% Max HP & สโลว์เป้าหมาย');
        } else if (att.id === 'african_buffalo') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.20, duration: 2 });
          }
          applyEffectToTarget(def, { type: 'stun', duration: 1 });
          appliedEffects.push('มหาเกราะกระดูกเขาอัสนีบาตพุ่งชน: เกราะทีม 20% Max HP & สตันเป้าหมาย');
        } else if (att.id === 'pistol_shrimp') {
          applyEffectToTarget(def, { type: 'vulnerable', duration: 2 });
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 });
          def.sp = Math.max(0, def.sp - 15);
          appliedEffects.push('กระสุนฟองอากาศ: เปราะบาง 2 เทิร์น & ลด DEF 20% & ตัด SP -15');
        } else if (att.id === 'shark') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 });
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 });
          appliedEffects.push('มหากัดขย้ำ: ติดเลือดไหล 2 เทิร์น & ลด DEF 30%');
        } else if (att.id === 'cassowary') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 });
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 });
          appliedEffects.push('กรงเล็บสังหาร: ติดเลือดไหล 2 เทิร์น & ลด DEF 30%');
        } else if (att.id === 'buffalo') {
          applyEffectToTarget(def, { type: 'taunt', duration: 2, sourceId: `${att.side}_${att.slotIndex}` });
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('เหล็กชนแหลก: ยั่วยุ 2 เทิร์น & สโลว์ 2 เทิร์น');
        } else if (att.id === 'crocodile') {
          applyEffectToTarget(def, { type: 'vulnerable', duration: 2 });
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          appliedEffects.push('มหากัดสะบัดหาง: เปราะบาง 2 เทิร์น & สโลว์ 2 เทิร์น');
        } else if (att.id === 'mammoth') {
          applyEffectToTarget(def, { type: 'taunt', duration: 2, sourceId: `${att.side}_${att.slotIndex}` });
          appliedEffects.push('มหาคลื่นงาช้างจิตสะท้าน: ยั่วยุ 2 เทิร์น');
        } else if (att.id === 'tiger_beetle') {
          applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 });
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push('กรามสายฟ้าสับพริบตาปลิดชีพ: เลือดไหล 2 เทิร์น & เร่งเกจ +15');
        } else if (att.id === 'black_mamba') {
          applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 3 });
          applyEffectToTarget(def, { type: 'debuff_spd', value: 0.20, duration: 2 });
          appliedEffects.push('อสรพิษดำฉกเขี้ยวอัสนีปลิดชีพ: เลือดไหล 3 เทิร์น & สโลว์ 20%');
        } else if (att.id === 'electric_catfish') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 });
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push('ประจุอัมพาต 350 โวลต์ช็อตกระตุก: สโลว์ & ตัดเกจ -10');
        } else if (att.id === 'zebra') {
          applyEffectToTarget(def, { type: 'blind', duration: 2 });
          def.gauge = Math.max(0, def.gauge - 12);
          appliedEffects.push('แถบสายฟ้าลวงตาโมชันแดซเซิล: ตาบอด 2 เทิร์น & ตัดเกจ -12');
        } else if (att.id === 'electric_eel') {
          applyEffectToTarget(def, { type: 'stun', duration: 1 });
          def.gauge = Math.max(0, def.gauge - 20);
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push('มหาทัณฑ์อัสนี 860 โวลต์ถล่มสมรภูมิ: สตัน 1 เทิร์น, ตัดเกจ -20 & สลายบัฟทั้งหมด');
        } else if (att.id === 'xuanwu') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.25, duration: 2 });
          }
          applyEffectToTarget(def, { type: 'debuff_cri', value: 20, duration: 2 });
          appliedEffects.push('กำแพงปฐพีดึกดำบรรพ์: เกราะทีม 25% Max HP & ลด CRI ศัตรู 20% (2 เทิร์น)');
        } else if (att.id === 'ziz') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.20, duration: 2 });
          }
          appliedEffects.push('กางปีกสกัดมหาวายุ: ม่านวายุคุ้มกาย เกราะทีม 20% Max HP (2 เทิร์น)');
        } else if (att.id === 'khalkotauroi') {
          applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 });
          applyEffectToTarget(def, { type: 'burn', duration: 2 });
          appliedEffects.push('เพลิงอสูรโลหะหลอมเหลว: เกราะหลอมเหลว 20% Max HP & เผาไหม้ 2 เทิร์น');
        } else if (att.id === 'erawan') {
          applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 });
          if (Math.random() < 0.60) {
            applyEffectToTarget(def, { type: 'stun', duration: 1 });
            appliedEffects.push('อัสนีบาตคชสารสะท้านปฐพี: เกราะอัสนี 20% Max HP & สตัน 1 เทิร์น');
          } else {
            appliedEffects.push('อัสนีบาตคชสารสะท้านปฐพี: เกราะอัสนี 20% Max HP');
          }
        } else if (att.id === 'yeti') {
          applyEffectToTarget(att, { type: 'shield', value: 0.25, duration: 2 });
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.15, duration: 2 });
          appliedEffects.push('กำแพงธารน้ำแข็งเยติพิทักษ์: เกราะธารน้ำแข็ง 25% Max HP & ลด ATK เป้าหมาย 15% (2 เทิร์น)');
        } else if (att.id === 'tarasque') {
          const h = Math.round(att.baseStats.maxHp * 0.15);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          applyEffectToTarget(att, { type: 'counter_stance', duration: 2 });
          appliedEffects.push(`พฤกษากระดองหนามสยบปฐพี: ฟื้น +${h} HP & สะท้อนหนามพฤกษา 2 เทิร์น`);
        } else if (att.id === 'karkinos') {
          applyEffectToTarget(att, { type: 'shield', value: 0.22, duration: 2 });
          applyEffectToTarget(def, { type: 'poison', stacks: 2, duration: 2 });
          appliedEffects.push('ก้ามยักษ์ตัดพิภพปล่อยไอพิษ: กระดองไคติน 22% Max HP & พ่นไอพิษ 2 ชั้น');
        } else if (att.id === 'ammut') {
          const ls = Math.round(finalDmg * 0.35);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          applyEffectToTarget(def, { type: 'dispel', count: 1 });
          def.gauge = Math.max(0, def.gauge - 15);
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`พิพากษากลืนวิญญาณใต้พิภพ: ดูดเลือด +${ls} HP, ล้าง 1 บัฟ & ขโมยเกจ 15 แต้ม`);
        } else if (att.id === 'nemean_lion') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'cleanse', count: 99 });
            applyEffectToTarget(ally, { type: 'buff_def', value: 0.25, duration: 2 });
          }
          appliedEffects.push('คำรามก้องแสงสุริยะศักดิ์สิทธิ์: ล้างดีบัฟทีมทั้งหมด & บัฟ DEF +25% (2 เทิร์น)');
        } else if (att.id === 'baku') {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: 'shield', value: 0.20, duration: 2 });
            ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 20);
          }
          appliedEffects.push('มิติมายากลืนฝันร้ายคืนชีพ: บาเรียพลังจิต 20% & ฟื้น +20 SP ให้ทีม');
        } else if (att.id === 'tsuchigumo') {
          applyEffectToTarget(def, { type: 'root', duration: 2 });
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 });
          const ls = Math.round(finalDmg * 0.20);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          appliedEffects.push(`ค่ายกลใยศิลาเขี้ยวอสูรสูบธรณี: ตรึงร่าง 2 เทิร์น, ลด DEF 30% & สูบเลือด +${ls} HP`);
        } else if (att.id === 'kraken') {
          applyEffectToTarget(def, { type: 'blind', duration: 2 });
          applyEffectToTarget(def, { type: 'root', duration: 2 });
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push('หมึกทมิฬหนวดอสูรฉุดลงเหวลึก: ตาบอด & ตรึงร่าง 2 เทิร์น พร้อมดูด SP -20');
        } else if (att.id === 'kamaitachi') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 });
          applyEffectToTarget(att, { type: 'buff_spd', value: 0.25, duration: 2 });
          appliedEffects.push('สามคมเคียววายุสะบั้นวิญญาณ: ฟัน 3 จังหวะเลือดไหล 2 เทิร์น & บัฟ SPD +25%');
        } else if (att.id === 'skoll') {
          def.shield = 0;
          applyEffectToTarget(def, { type: 'burn', duration: 2 });
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 });
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 });
          appliedEffects.push('เขี้ยวอุกกาบาตกลืนสุริยัน: ทำลายเกราะ Shield ทันที, เผาไหม้ 2 เทิร์น & ลด ATK/DEF 20%');
        } else if (att.id === 'raiju') {
          applyEffectToTarget(def, { type: 'stun', duration: 1 });
          def.gauge = Math.max(0, def.gauge - 25);
          appliedEffects.push('อสุนีบาตเขี้ยวแสงผ่าจุดตาย: ช็อตสตัน 1 เทิร์น & ตัดเกจไม้ตาย -25');
        } else if (att.id === 'wendigo') {
          applyEffectToTarget(def, { type: 'freeze', duration: 1 });
          const ls = Math.round(finalDmg * 0.25);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          appliedEffects.push(`กรงเล็บเหมันต์ปลิดวิญญาณ: แช่แข็ง 1 เทิร์น & สูบเลือด +${ls} HP`);
        } else if (att.id === 'weretiger_saming') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 });
          applyEffectToTarget(def, { type: 'confusion', duration: 2 });
          const ls = Math.round(finalDmg * 0.20);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          appliedEffects.push(`อาคมสมิงพรางดงกระโจนขย้ำคอ: เลือดไหล & สับสน 2 เทิร์น พร้อมฟื้นฟู +${ls} HP`);
        } else if (att.id === 'manticore') {
          applyEffectToTarget(def, { type: 'poison', stacks: 2, duration: 3 });
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 });
          appliedEffects.push('ห่าเข็มพิษหางแมงป่องสังหาร: ฝังพิษ 2 ชั้น (3 เทิร์น) & ลด DEF 30%');
        } else if (att.id === 'camazotz') {
          applyEffectToTarget(def, { type: 'silence', duration: 2 });
          def.gauge = Math.max(0, def.gauge - 20);
          att.gauge = Math.min(100, att.gauge + 20);
          const ls = Math.round(finalDmg * 0.30);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          appliedEffects.push(`ปีกรัตติกาลบั่นเศียรสูบวิญญาณ: ใบ้สกิล 2 เทิร์น, ขโมยเกจ 20 แต้ม & สูบเลือด +${ls} HP`);
        } else if (att.id === 'nue') {
          def.sp = Math.max(0, def.sp - 25);
          applyEffectToTarget(def, { type: 'silence', duration: 2 });
          applyEffectToTarget(def, { type: 'confusion', duration: 2 });
          appliedEffects.push('คลื่นจิตอสูรเมฆาทมิฬสะกดชีพ: เผา SP -25, ติดใบ้สกิล & สับสน 2 เทิร์น');
        }
      }

      if (att.id === 'phoenix') {
        for (const ally of friendlyLiving) {
          const heal = Math.round(ally.baseStats.maxHp * 0.15);
          ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + heal);
          applyEffectToTarget(ally, { type: 'cleanse', count: 1 });
        }
        appliedEffects.push('เพลิงอมตะ: ฮีลทีม +15% HP และล้างดีบัฟ');
      }

      this.recordEvent({
        turn: this.round,
        actorSide: att.side,
        actorName: att.name,
        targetName: targets.map(t => t.name).join(', '),
        actionType: 'signature',
        actionName: att.signatureName,
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: hitReports.some(r => r.includes('[CRIT!]')),
        isMiss: false,
        elementMult: 1,
        appliedEffects,
        message: `[รอบ ${this.round}] ★ ${att.name} ปลดปล่อยท่าไม้ตาย [${att.signatureName}]! (${hitReports.join(', ')}) ${appliedEffects.join(' · ')}`,
      });
      return;
    }

    this.recordEvent({
      turn: this.round,
      actorSide: att.side,
      actorName: att.name,
      targetName: friendlyLiving.map(t => t.name).join(', '),
      actionType: 'signature',
      actionName: att.signatureName,
      damage: 0,
      healed: 0,
      shieldGained: 0,
      isCrit: false,
      isMiss: false,
      elementMult: 1,
      appliedEffects,
      message: `[รอบ ${this.round}] ★ ${att.name} ปลดปล่อยท่าไม้ตาย [${att.signatureName}]! ${appliedEffects.join(' · ')}`,
    });
  }

  private applyDamageToTarget(target: TeamFighterState, damage: number) {
    if (target.shield > 0) {
      if (target.shield >= damage) {
        target.shield -= damage;
        if (target.shield <= 0) {
          target.shield = 0;
          target.effects = target.effects.filter(e => e.type !== 'shield' && e.type !== 'golden_bell_shield');
        }
        return;
      }
      damage -= target.shield;
      target.shield = 0;
      target.effects = target.effects.filter(e => e.type !== 'shield' && e.type !== 'golden_bell_shield');
    }
    if (hasStatus(target, 'energy_coat') && damage > 0 && target.sp > 0) {
      const coatEf = target.effects.find(e => e.type === 'energy_coat');
      const coatRatio = coatEf?.value ?? (skillsData.statusRules as any).energy_coat?.damageToSpPct ?? 0.40;
      const spDmgMax = Math.round(damage * coatRatio);
      const spAbsorbed = Math.min(target.sp, spDmgMax);
      target.sp = Math.max(0, target.sp - spAbsorbed);
      damage -= spAbsorbed;
    }
    target.hp = Math.max(0, target.hp - damage);

    // Phoenix ability: เมื่อได้รับดาเมจถึงตายครั้งแรกในไฟต์ จะฟื้นคืนชีพ 100% (มีโอกาส 80% ฟื้นคืนชีพด้วย HP เต็มหลอด, หากไม่สำเร็จฟื้น 60% HP)
    if (target.hp <= 0 && this.options.enableAbilities && target.abilityId === 'rebirth_ashes' && !target.reviveUsed) {
      target.reviveUsed = true;
      const isFullHp = Math.random() < 0.80;
      const hpPct = isFullHp ? 1.0 : 0.60;
      target.hp = Math.round(target.baseStats.maxHp * hpPct);
      target.sp = Math.max(target.sp, Math.round(target.baseStats.maxSp * 0.50));
      target.effects = target.effects.filter(e => e.type.startsWith('buff_') || e.type === 'shield' || e.type === 'fire_skin');
      if (!target.effects.some(e => e.type === 'fire_skin')) target.effects.push({ type: 'fire_skin', duration: 9999 });
      const hpDesc = isFullHp ? 'เต็มหลอด (100%)' : '60%';
      this.recordEvent({
        turn: this.round,
        actorSide: target.side,
        actorName: target.name,
        targetName: target.name,
        actionType: 'ability',
        actionName: target.abilityName,
        damage: 0,
        healed: Math.round(target.hp),
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [`คืนชีพ HP ${hpDesc}`],
        message: `[รอบ ${this.round}] 🔥 ${target.name} แสดงผล Ability [${target.abilityName}] ฟื้นคืนชีพจากกองเถ้าถ่าน 100% พร้อม HP ${Math.round(target.hp)} (${hpDesc})!`,
      });
    }
  }

  private tickStatuses(f: TeamFighterState) {
    for (const ef of f.effects) {
      if (ef.type === 'curse' || ef.type === 'spirit_orb') continue; // permanent until cleansed
      if (ef.duration > 0) ef.duration--;
    }
    f.effects = f.effects.filter(ef => ef.type === 'curse' || ef.type === 'spirit_orb' || ef.duration > 0);
    if (!hasStatus(f, 'shield') && !hasStatus(f, 'golden_bell_shield')) f.shield = 0;
  }

  public captureSnapshot(): { teamA: TeamSnapshot; teamB: TeamSnapshot; winner: 'A' | 'B' | 'draw' | null } {
    const snapSquad = (s: TeamSquadState): TeamSnapshot => {
      const firstLivingIdx = s.fighters.findIndex(f => f.hp > 0);
      return {
        side: s.side,
        activeIndex: firstLivingIdx >= 0 ? firstLivingIdx : 0,
        swapCooldown: 0,
        fighters: s.fighters.map(f => ({
          id: f.id,
          name: f.name,
          rarity: f.rarity,
          element: f.element,
          role: f.role,
          hp: f.hp,
          maxHp: f.baseStats.maxHp,
          sp: f.sp,
          maxSp: f.baseStats.maxSp,
          shield: f.shield,
          gauge: f.gauge,
          effects: f.effects.map(e => ({ ...e })),
          reviveUsed: f.reviveUsed,
        })),
      };
    };
    return {
      teamA: snapSquad(this.squadA),
      teamB: snapSquad(this.squadB),
      winner: this.winner === 'DRAW' ? 'draw' : this.winner,
    };
  }

  private recordEvent(ev: TurnEvent) {
    ev.snapshot = this.captureSnapshot();
    this.logs.push(ev);
  }

  public runToEnd(): 'A' | 'B' | 'DRAW' {
    while (!this.winner) {
      this.stepRound();
    }
    return this.winner;
  }
}
