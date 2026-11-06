import elementsData from '../data/elements.json' with { type: 'json' };
import heroesData from '../data/heroes.json' with { type: 'json' };
import skillsData from '../data/skills.json' with { type: 'json' };
import enemiesData from '../data/enemies.json' with { type: 'json' };
import { codexManager, CodexBuffTotals } from './codex_manager';

export type ElementId = string;
export type Rarity = 'B' | 'A' | 'S' | 'SS';

export interface DerivedStats {
  str: number;
  agi: number;
  sta: number;
  maxHp: number;
  maxSp: number;
  spRegen: number;
  atk: number;
  def: number;
  spd: number;
  hit: number;
  flee: number;
  cri: number;
  criDmg: number;
  ab: number;
  block: number;
}

export interface ActiveEffect {
  type: string;
  value?: number;
  stacks?: number;
  duration: number;
  sourceId?: string;
}

export interface FighterState {
  id: string;
  name: string;
  rarity: Rarity;
  element: ElementId;
  role: string;
  baseStats: DerivedStats;
  hp: number;
  sp: number;
  shield: number;
  gauge: number;
  skillSlots: string[];
  signatureName: string;
  signatureEffect: { type: string; value?: number; duration?: number; count?: number; chance?: number; target?: string };
  abilityId: string;
  abilityName: string;
  abilityDescription: string;
  reviveUsed: boolean;
  firstTurnDone: boolean;
  effects: ActiveEffect[];
  ccResistStacks: number;
  ccResistTurns: number;
  sigUsedCount: number;
}

export interface TeamState {
  side: 'A' | 'B';
  fighters: FighterState[];
  activeIndex: number;
  swapCooldown: number;
  autoCastSignature: boolean;
  queuedSignature: boolean;
  queuedSwap: boolean;
}

export interface CombatOptions {
  enableSkillEffects?: boolean;
  enableSameElementBonus?: boolean;
  enableAbilities?: boolean;
  forcedElementAdvantage?: 'neutral' | 'A_adv' | 'B_adv' | 'actual';
  maxTurns?: number;
  customSkillsA?: string[][];
  customSkillsB?: string[][];
  teamALevels?: number[];
  teamAStars?: number[];
  teamBLevels?: number[];
  teamBStars?: number[];
  skillLevelsA?: Record<string, number>;
  skillLevelsB?: Record<string, number>;
}

export interface FighterSnapshot {
  id: string;
  name: string;
  rarity: Rarity;
  element: ElementId;
  role: string;
  hp: number;
  maxHp: number;
  sp: number;
  maxSp: number;
  shield: number;
  gauge: number;
  effects: ActiveEffect[];
  reviveUsed: boolean;
}

export interface TeamSnapshot {
  side: 'A' | 'B';
  activeIndex: number;
  swapCooldown: number;
  fighters: FighterSnapshot[];
}

export interface TurnEvent {
  turn: number;
  actorSide: 'A' | 'B';
  actorName: string;
  targetName: string;
  actionType: 'normal' | 'skill' | 'signature' | 'swap' | 'status' | 'skip' | 'ko_swap' | 'ability';
  actionName: string;
  skillTier?: string;
  damage: number;
  healed: number;
  shieldGained: number;
  spCost?: number;
  spChanged?: number;
  isCrit: boolean;
  isMiss: boolean;
  isBlocked?: boolean;
  isArmorBreak?: boolean;
  elementMult: number;
  appliedEffects: string[];
  message: string;
  snapshot?: {
    teamA: TeamSnapshot;
    teamB: TeamSnapshot;
    winner: 'A' | 'B' | 'draw' | null;
  };
}

const ELEMENT_MAP = new Map(elementsData.elements.map(e => [e.id, e]));
const HERO_MAP = new Map([...heroesData.heroes, ...enemiesData.enemies].map(h => [h.id, h]));
const SKILL_MAP = new Map(skillsData.skills.map(s => [s.id, s]));

export function getAllHeroes() {
  return heroesData.heroes;
}

export function getAllEnemies() {
  return enemiesData.enemies;
}

export function getAllSkills() {
  return skillsData.skills;
}

export function getAllElements() {
  return elementsData.elements;
}

export function getSignatureConfig(rarity: Rarity) {
  return heroesData.signatureByClass[rarity];
}

export function getSkillSpCost(tier?: string, skillId?: string): number {
  if (skillId && SKILL_MAP.has(skillId)) {
    const sk = SKILL_MAP.get(skillId) as { spCost?: number };
    if (sk?.spCost !== undefined) return sk.spCost;
  }
  const costs = (skillsData.statusRules as { spCosts?: Record<string, number> }).spCosts ?? { S: 20, M: 35, L: 55 };
  if (!tier) return 0;
  return costs[tier] ?? 20;
}

export function computeHeroStats(
  heroId: string,
  level = 1,
  stars = 1,
  applyCodexBuffs = true
): DerivedStats {
  const h = HERO_MAP.get(heroId);
  if (!h) throw new Error(`Unknown hero: ${heroId}`);
  const C = heroesData.statFormula as typeof heroesData.statFormula & {
    spBase?: number;
    spPerSTA?: number;
    spRegenFlat?: number;
    spRegenPctPerTurn?: number;
  };
  const budget = heroesData.classBudgets[h.rarity as Rarity];
  const shares = heroesData.archetypeShares[h.archetype as keyof typeof heroesData.archetypeShares];
  const [str, agi, sta] = shares ? shares.map(s => s * budget) : [h.str, h.agi, h.sta];
  const mults = (h as { customMultipliers?: { hp?: number; atk?: number; def?: number } }).customMultipliers || {};
  const maxSp = Math.round((C.spBase ?? 70) + sta * (C.spPerSTA ?? 0.8));
  const spRegen = C.spRegenFlat ?? (C.spRegenPctPerTurn ? Math.round(maxSp * C.spRegenPctPerTurn) : 6);

  // การคูณสเตตัสจากการพัฒนา (Progression: Level + Stars)
  const lvlMult = 1 + (Math.max(1, level) - 1) * 0.02; // +2% ต่อเลเวลที่เกิน 1
  const starMult = stars === 2 ? 1.05 : stars === 3 ? 1.12 : stars === 4 ? 1.20 : stars === 5 ? 1.30 : 1.0;
  const progMult = lvlMult * starMult;

  // โบนัสสเตตัสจากสมุดสะสมสัตว์เลี้ยง (Codex Buffs - มีเพดานควบคุมไม่ให้เฟ้อ)
  const codex = applyCodexBuffs ? codexManager.getActiveCodexBuffs() : null;
  const codexHpPct = codex ? codex.hpPct : 0;
  const codexAtkPct = codex ? codex.atkPct : 0;
  const codexDefPct = codex ? codex.defPct : 0;
  const codexCriBonus = codex ? codex.criBonus : 0;
  const codexBlockBonus = codex ? codex.blockBonus : 0;
  const codexMaxSpBonus = codex ? codex.maxSpBonus : 0;

  return {
    str: Math.round(str * progMult),
    agi: Math.round(agi * (1 + (progMult - 1) * 0.5)),
    sta: Math.round(sta * progMult),
    maxHp: Math.round((C.hpBase + sta * C.hpPerSTA) * (mults.hp ?? 1) * progMult * (1 + codexHpPct)),
    maxSp: maxSp + codexMaxSpBonus,
    spRegen,
    atk: Math.round((str * C.atkPerSTR) * (mults.atk ?? 1) * progMult * (1 + codexAtkPct)),
    def: Math.round((10 + sta * C.defPerSTA) * (mults.def ?? 1) * progMult * (1 + codexDefPct)),
    spd: C.spdBase + agi * C.spdPerAGI * (1 + (progMult - 1) * 0.2),
    hit: C.hitBase + agi * C.hitPerAGI,
    flee: agi * C.fleePerAGI,
    cri: Math.min(C.criCap, C.criBase + agi * C.criPerAGI + codexCriBonus),
    criDmg: C.criDmgBase + str * C.criDmgPerSTR,
    ab: Math.min(C.abCap, str * C.abPerSTR),
    block: sta * C.blockPerSTA + codexBlockBonus,
  };
}

export const MAX_SKILLS_PER_BRANCH = 2;

export function getSkillBranch(skillId: string): string {
  const sk = SKILL_MAP.get(skillId) as { id: string; element: string; branch?: string } | undefined;
  if (!sk) return 'unknown';
  if (sk.branch) return sk.branch;
  if (sk.element !== 'neutral') return sk.element;
  if (skillId.startsWith('martial_')) return 'martial';
  if (skillId.startsWith('medical_')) return 'medical';
  if (skillId.startsWith('trick_')) return 'trick';
  if (skillId.startsWith('catalyst_')) return 'catalyst';
  if (skillId.startsWith('secret_')) return 'secret';
  if (skillId.startsWith('defense_')) return 'defense';
  return sk.element;
}

export function validateSkillLoadout(skillIds: string[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const seenSkills = new Set<string>();
  const branchCounts = new Map<string, number>();

  for (const id of skillIds) {
    if (!SKILL_MAP.has(id)) {
      errors.push(`ไม่พบสกิลรหัส ${id}`);
      continue;
    }
    if (seenSkills.has(id)) {
      errors.push(`ห้ามใส่สกิลซ้ำกัน (${id})`);
    }
    seenSkills.add(id);

    const branch = getSkillBranch(id);
    const count = (branchCounts.get(branch) ?? 0) + 1;
    branchCounts.set(branch, count);
    if (count > MAX_SKILLS_PER_BRANCH) {
      errors.push(`แต่ละธาตุ/สายสามารถสวมใส่ได้ไม่เกิน ${MAX_SKILLS_PER_BRANCH} ท่า (${branch})`);
    }
  }

  return { valid: errors.length === 0, errors };
}

export function sanitizeSkillLoadout(
  skillIds: string[],
  defaultSkills: string[] = [],
  fillEmptyWithDefaults = false
): string[] {
  const result: string[] = [];
  const usedIds = new Set<string>();
  const branchCounts = new Map<string, number>();

  const canEquip = (id: string): boolean => {
    if (!id || !SKILL_MAP.has(id) || usedIds.has(id)) return false;
    const b = getSkillBranch(id);
    return (branchCounts.get(b) ?? 0) < MAX_SKILLS_PER_BRANCH;
  };

  const addSkill = (id: string) => {
    result.push(id);
    usedIds.add(id);
    const b = getSkillBranch(id);
    branchCounts.set(b, (branchCounts.get(b) ?? 0) + 1);
  };

  for (const id of skillIds.slice(0, 4)) {
    if (canEquip(id)) {
      addSkill(id);
    } else if (fillEmptyWithDefaults) {
      const fallback =
        defaultSkills.find(d => canEquip(d)) ??
        skillsData.skills.find(s => canEquip(s.id))?.id;
      if (fallback) addSkill(fallback);
    }
  }

  if (fillEmptyWithDefaults) {
    while (result.length < 4) {
      const fallback =
        defaultSkills.find(d => canEquip(d)) ??
        skillsData.skills.find(s => canEquip(s.id))?.id;
      if (!fallback) break;
      addSkill(fallback);
    }
  }

  return result;
}

export function createFighter(
  heroId: string,
  customSkills?: string[],
  level = 1,
  stars = 1
): FighterState {
  const h = HERO_MAP.get(heroId);
  if (!h) throw new Error(`Unknown hero: ${heroId}`);
  const baseStats = computeHeroStats(heroId, level, stars);
  const sigCfg = heroesData.signatureByClass[h.rarity as Rarity];
  
  // หากมี customSkills ให้ใช้สกิลที่ผู้เล่นหรือด่านติดตั้งไว้ตามจริง (ไม่บังคับเติม defaultSkills จนครบ 4)
  // หากไม่มี customSkills (undefined) ให้ใช้ defaultSkills ของตัวละคร
  const hasCustom = customSkills !== undefined;
  const rawSkills = hasCustom ? customSkills : h.defaultSkills;
  const validSkills = sanitizeSkillLoadout(rawSkills, hasCustom ? [] : h.defaultSkills, !hasCustom);
  return {
    id: h.id,
    name: h.name,
    rarity: h.rarity as Rarity,
    element: h.element,
    role: h.role,
    baseStats,
    hp: baseStats.maxHp,
    sp: baseStats.maxSp,
    shield: 0,
    gauge: sigCfg.startGauge,
    skillSlots: validSkills,
    signatureName: h.signatureName,
    signatureEffect: h.signatureEffect,
    abilityId: h.ability?.id ?? '',
    abilityName: h.ability?.name ?? '',
    abilityDescription: h.ability?.description ?? '',
    reviveUsed: false,
    firstTurnDone: false,
    effects: (h.ability?.id === 'rebirth_ashes' || h.id === 'phoenix') ? [{ type: 'fire_skin', duration: 9999 }] : [],
    ccResistStacks: 0,
    ccResistTurns: 0,
    sigUsedCount: 0,
  };
}

export function getElementMultiplier(
  attElem: ElementId,
  defElem: ElementId,
  attSide: 'A' | 'B',
  mode: CombatOptions['forcedElementAdvantage'] = 'actual'
): number {
  const M = elementsData.multipliers;
  if (mode === 'neutral') return M.neutral;
  if (mode === 'A_adv') return attSide === 'A' ? M.advantage : M.disadvantage;
  if (mode === 'B_adv') return attSide === 'B' ? M.advantage : M.disadvantage;
  const el = ELEMENT_MAP.get(attElem);
  if (!el) return M.neutral;
  if (el.strongAgainst.includes(defElem)) return M.advantage;
  if (el.weakAgainst.includes(defElem)) return M.disadvantage;
  return M.neutral;
}

export function getEffectiveElement(f: FighterState): ElementId {
  if (hasStatus(f, 'freeze')) return 'ice';
  if (hasStatus(f, 'stone_curse')) return 'earth';
  return f.element;
}

export function getEffectiveStats(f: FighterState, enableAbilities = true): DerivedStats {
  const s = { ...f.baseStats };
  if (enableAbilities) {
    if (f.abilityId === 'thunder_sprint') s.spd += 8;
    if (f.abilityId === 'supersonic_dive') s.spd += 6;
    if (f.abilityId === 'iron_scale_curl') s.block += 8;
    if (f.abilityId === 'fire_chitin_shell') s.block += 12;
    if (f.abilityId === 'aerobatic_hover') s.flee += 15;
    if (f.abilityId === 'blazing_reflexes') { s.flee += 8; s.cri += 5; }
    if (f.abilityId === 'monkey_acrobat') s.spd += 8;
    if (f.abilityId === 'bullet_stinger') s.ab += 15;
    if (f.abilityId === 'iron_crab_pincer') s.block += 10;
    if (f.abilityId === 'glide_wave') { s.flee += 8; s.spd += 6; }
    if (f.abilityId === 'death_roll_jaw') s.ab += 12;
    if (f.abilityId === 'piercing_bill') s.ab += 15;
    if (f.abilityId === 'apex_pod_hunter') { s.cri += 10; s.spd += 8; }
    if (f.abilityId === 'stand_against_gale') s.block += 10;
    if (f.abilityId === 'woodpecker_drill_beak') s.ab += 15;
    if (f.abilityId === 'shockwave_double_kick') s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === 'cassowary_dagger_claw') s.ab += 15;
    if (f.abilityId === 'cheetah_sprint_burst') { s.spd += 10; s.flee += 8; }
    if (f.abilityId === 'claw_break_stone') s.ab += 15;
    if (f.abilityId === 'gorilla_ground_slam') s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === 'burrow_ambush') { s.flee += 8; s.spd += 6; }
    if (f.abilityId === 'cliff_stalker') { s.spd += 10; s.flee += 8; }
    if (f.abilityId === 'sand_dragon_ambush') { s.cri += 10; s.spd += 8; }
    if (f.abilityId === 'ancient_forest_hide') s.block += 12;
    if (f.abilityId === 'titan_antler_charge') s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === 'foliage_cloak') { s.flee += 8; s.spd += 6; }
    if (f.abilityId === 'bush_ambush') { s.spd += 10; s.flee += 8; }
    if (f.abilityId === 'canopy_shadow_fang') { s.cri += 10; s.spd += 8; }
    if (f.abilityId === 'thousand_leg_fang') s.ab += 15;
    if (f.abilityId === 'osteoderm_toxic_armor') s.block += 12;
    if (f.abilityId === 'hourglass_ambush') { s.spd += 10; s.flee += 8; }
    if (f.abilityId === 'deathstalker_stinger') { s.ab += 15; s.cri += 10; }
    if (f.abilityId === 'ice_floe_hunter') s.ab += 15;
    if (f.abilityId === 'frozen_bone_crusher') s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === 'apex_polar_dominion') s.ab += 15;
    if (f.abilityId === 'stoat_snow_dance') { s.flee += 8; s.spd += 6; }
    if (f.abilityId === 'snowshoe_stalker') { s.spd += 10; s.flee += 8; }
    if (f.abilityId === 'ghost_of_frozen_peaks') { s.ab += 15; s.cri += 10; }
    if (f.abilityId === 'devil_bone_crusher_jaw') s.ab += 15;
    if (f.abilityId === 'carrion_hunter_gaze') s.ab += 15;
    if (f.abilityId === 'skull_piercing_fang') { s.ab += 15; s.cri += 10; }
    if (f.abilityId === 'sand_burrow_puff') s.block += 12;
    if (f.abilityId === 'sand_stealth_claw') s.ab += 15;
    if (f.abilityId === 'infrared_heat_strike') { s.hit += 15; s.ab += 15; }
    if (f.abilityId === 'golden_heavenly_steed') { s.atk = Math.round(s.atk * 1.10); s.ab += 20; }
    if (f.abilityId === 'tufted_ear_spring') { s.cri += 12; s.flee += 8; }
    if (f.abilityId === 'solar_apex_dive') { s.spd = Math.round(s.spd * 1.12); s.criDmg += 0.25; }
    if (f.abilityId === 'cape_boss_charge') s.block += 15;
    if (f.abilityId === 'cavitation_bubble_burst') s.ab += 18;
    if (f.abilityId === 'supersonic_dash_mandibles') { s.spd += 8; s.flee += 6; }
    if (f.abilityId === 'lightning_viper_strike') { s.hit += 15; s.cri += 10; }
    if (f.abilityId === 'colossal_tremor') s.ab += 15;
    if (f.abilityId === 'sky_rending_talons') {
      s.cri += 12;
      s.criDmg += 0.25;
    }
    if (f.abilityId === 'solar_piercing_crest') {
      s.hit += 15;
      s.ab += 15;
    }
    if (f.abilityId === 'xuanwu_bastion') s.block += 18;
    if (f.abilityId === 'ziz_aegis_wings') { s.flee += 15; s.block += 15; }
    if (f.abilityId === 'abominable_resilience') s.block += 20;
    if (f.abilityId === 'invulnerable_golden_pelt') s.block += 15;
    // SS Assassins base ability stat boosts
    if (f.abilityId === 'seismic_trapdoor_ambush') { s.flee += 14; s.ab += 18; }
    if (f.abilityId === 'abyssal_ink_camouflage') { s.flee += 15; s.cri += 12; }
    if (f.abilityId === 'vacuum_sickle_trinity') { s.spd += 10; s.cri += 15; }
    if (f.abilityId === 'sun_chaser_predator') { s.criDmg += 0.30; s.ab += 15; }
    if (f.abilityId === 'jungle_mirage_pounce') { s.flee += 15; s.ab += 15; }
    if (f.abilityId === 'phantom_chimera_shroud') { s.flee += 15; }
  }
  let atkMult = 1, defMult = 1, spdMult = 1;
  for (const ef of f.effects) {
    const v = ef.value ?? 0;
    if (ef.type === 'buff_atk') atkMult += v;
    if (ef.type === 'spirit_orb') {
      const stacks = Math.min(4, ef.stacks ?? 1);
      atkMult += stacks * 0.05;
    }
    if (ef.type === 'debuff_atk') atkMult -= v;
    if (ef.type === 'buff_def') defMult += v;
    if (ef.type === 'debuff_def') defMult -= v;
    if (ef.type === 'buff_spd') spdMult += v;
    if (ef.type === 'debuff_spd') spdMult -= v;
    if (ef.type === 'slow') {
      spdMult -= skillsData.statusRules.slow.spdRedPct;
      s.flee -= skillsData.statusRules.slow.fleeRed;
    }
    if (ef.type === 'paralysis') {
      spdMult -= (skillsData.statusRules as any).paralysis?.spdRedPct ?? 0.25;
    }
    if (ef.type === 'blind') {
      s.hit -= skillsData.statusRules.blind.hitRed;
      s.cri -= skillsData.statusRules.blind.criRed;
    }
    if (ef.type === 'buff_cri') s.cri += v;
    if (ef.type === 'debuff_cri') s.cri -= v;
    if (ef.type === 'buff_flee') s.flee += v;
    if (ef.type === 'buff_hit') s.hit += v;
    if (ef.type === 'debuff_hit') s.hit -= v;
    if (ef.type === 'buff_ab') s.ab += v;
    if (ef.type === 'buff_block') s.block += v;
    if (ef.type === 'berserk') {
      atkMult += skillsData.statusRules.berserk.atkBonusPct;
      spdMult += skillsData.statusRules.berserk.spdBonusPct;
      defMult -= skillsData.statusRules.berserk.defRedPct;
      s.hit -= skillsData.statusRules.berserk.hitRed;
    }
    if (ef.type === 'ice_skin') {
      spdMult -= skillsData.statusRules.ice_skin.spdRedPct;
      defMult += skillsData.statusRules.ice_skin.defBonusPct;
    }
    if (ef.type === 'golden_bell_shield') {
      spdMult -= (skillsData.statusRules as any).golden_bell_shield?.spdRedPct ?? 0.30;
    }
    if (ef.type === 'iron_body') {
      const ib = (skillsData.statusRules as any).iron_body;
      defMult += ib?.defBonusPct ?? 0.50;
      spdMult -= ib?.spdRedPct ?? 0.50;
      s.cri += ib?.criBonus ?? 40;
    }
  }
  s.atk = Math.max(1, s.atk * Math.max(0.3, atkMult));
  s.def = Math.max(0, s.def * Math.max(0.2, defMult));
  s.spd = Math.max(10, s.spd * Math.max(0.3, spdMult));
  if (f.effects.some(e => e.type === 'root')) s.flee = 0;
  s.cri = Math.max(0, Math.min(80, s.cri));
  s.ab = Math.max(0, Math.min(70, s.ab));
  return s;
}

function hasStatus(f: FighterState, type: string): boolean {
  return f.effects.some(e => e.type === type);
}

export const EXCLUSIVE_SHIELD_TYPES = ['shield', 'energy_coat', 'golden_bell_shield', 'elemental_ward', 'iron_body'];

export function hasActiveExclusiveShield(f: FighterState): boolean {
  return f.effects.some(e => EXCLUSIVE_SHIELD_TYPES.includes(e.type));
}

export function applyEffectToTarget(
  target: FighterState,
  ef: { type: string; value?: number; duration?: number; stacks?: number; count?: number; sourceId?: string },
  enableAbilities = true
): string | null {
  if ((ef.type === 'stun' || ef.type === 'paralysis') && hasStatus(target, 'iron_body')) {
    return `ภูมิคุ้มกันสตัน/อัมพาต 100% (กายาเหล็ก)`;
  }
  if (enableAbilities && target.abilityId === 'omniscient_gaze' && !ef.type.startsWith('buff_') && ef.type !== 'shield' && ef.type !== 'cleanse' && ef.type !== 'heal_pct') {
    return `ภูมิคุ้มกันสถานะลบสมบูรณ์แบบ (${target.abilityName})`;
  }
  if (enableAbilities && ef.type === 'blind' && (target.abilityId === 'hawk_eye' || target.abilityId === 'solar_piercing_crest')) {
    return `ภูมิคุ้มกันตาบอด (${target.abilityName})`;
  }
  if (enableAbilities && ef.type === 'stun' && (target.abilityId === 'colossal_tremor' || target.abilityId === 'lightning_conductor_trunk')) {
    return `ภูมิคุ้มกันสตัน (${target.abilityName})`;
  }
  if (enableAbilities && (ef.type === 'confusion' || ef.type === 'sleep') && target.abilityId === 'nightmare_eater_barrier') {
    return `ภูมิคุ้มกันสับสน/หลับ (${target.abilityName})`;
  }
  if (enableAbilities && (ef.type === 'freeze' || ef.type === 'slow') && target.abilityId === 'abominable_resilience') {
    return `ภูมิคุ้มกันแช่แข็ง/สโลว์ (${target.abilityName})`;
  }
  if (enableAbilities && (ef.type === 'root' || ef.type === 'slow') && target.abilityId === 'sky_rending_talons') {
    return `ภูมิคุ้มกันตรึงร่าง/สโลว์ (${target.abilityName})`;
  }
  if (enableAbilities && (ef.type === 'stun' || ef.type === 'slow') && target.abilityId === 'flash_lightning_fang') {
    return `ภูมิคุ้มกันสตัน/สโลว์ (${target.abilityName})`;
  }
  if (enableAbilities && ef.type === 'blind' && target.abilityId === 'xibalba_night_reaper') {
    return `ภูมิคุ้มกันตาบอด (${target.abilityName})`;
  }
  if (enableAbilities && (ef.type === 'confusion' || ef.type === 'silence') && target.abilityId === 'phantom_chimera_shroud') {
    return `ภูมิคุ้มกันสับสน/ใบ้ (${target.abilityName})`;
  }
  if (enableAbilities && target.abilityId === 'zen_mind' && !ef.type.startsWith('buff_') && ef.type !== 'shield' && ef.type !== 'cleanse' && ef.type !== 'heal_pct' && ef.type !== 'energy_coat' && ef.type !== 'golden_bell_shield' && ef.type !== 'elemental_ward' && ef.type !== 'iron_body' && ef.type !== 'iron_fortress') {
    if (Math.random() < 0.25) {
      return `จิตสงบนิ่ง ต้านทานสถานะลบ (${target.abilityName})`;
    }
  }
  const isHardCC = ef.type === 'stun' || ef.type === 'freeze' || ef.type === 'root' || ef.type === 'sleep' || ef.type === 'stone_curse';
  if (isHardCC) {
    const resistChance = Math.min(0.9, target.ccResistStacks * skillsData.statusRules.ccResistancePerStack);
    if (Math.random() < resistChance) return `ต้านทาน ${ef.type}`;
    target.ccResistStacks = Math.min(2, target.ccResistStacks + 1);
    target.ccResistTurns = skillsData.statusRules.ccResistanceDuration;
  }
  if (ef.type === 'cleanse') {
    const debuffTypes = ['burn', 'poison', 'slow', 'blind', 'root', 'stun', 'freeze', 'confusion', 'bleed', 'taunt', 'sleep', 'silence', 'vulnerable', 'stone_curse', 'curse', 'paralysis', 'debuff_atk', 'debuff_def', 'debuff_spd', 'debuff_cri', 'debuff_hit'];
    const maxRemove = ef.count ?? 1;
    const removedNames: string[] = [];
    for (let i = 0; i < maxRemove; i++) {
      const idx = target.effects.findIndex(e => debuffTypes.includes(e.type));
      if (idx >= 0) {
        removedNames.push(target.effects.splice(idx, 1)[0].type);
      } else {
        break;
      }
    }
    return removedNames.length ? `ล้างสถานะ (${removedNames.join('+')})` : null;
  }
  if (ef.type === 'dispel') {
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

    const count = ef.count ?? 1;
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
  if (ef.type === 'dispel_and_sp_drain') {
    const cl = applyEffectToTarget(target, { type: 'dispel', count: ef.count ?? 1 }, enableAbilities);
    const spDelta = ef.value ?? 25;
    target.sp = Math.max(0, target.sp - spDelta);
    const dispTag = cl ? `${cl} & ` : '';
    return `${dispTag}ตัด SP -${spDelta}`;
  }
  if (ef.type === 'stun_and_gauge_drain') {
    const stunRes = applyEffectToTarget(target, { type: 'stun', duration: ef.duration ?? 1 }, enableAbilities);
    const drainVal = ef.value ?? 25;
    target.gauge = Math.max(0, target.gauge - drainVal);
    const stunTag = stunRes?.includes('ภูมิคุ้มกันสตัน') ? stunRes : 'ติดสตัน 1 เทิร์น';
    return `${stunTag} & ตัดเกจ -${drainVal}`;
  }
  if (ef.type === 'gauge_change') {
    const delta = ef.value ?? 0;
    target.gauge = Math.max(0, target.gauge + delta);
    return delta >= 0 ? `เกจ +${delta}` : `ลดเกจ ${delta}`;
  }
  if (ef.type === 'sp_change') {
    const delta = ef.value ?? 0;
    target.sp = Math.max(0, Math.min(target.baseStats.maxSp, target.sp + delta));
    return delta >= 0 ? `ฟื้น SP +${delta}` : `ตัด SP ${delta}`;
  }
  if (ef.type === 'heal_pct') {
    const heal = target.baseStats.maxHp * (ef.value ?? 0.15);
    target.hp = Math.min(target.baseStats.maxHp, target.hp + heal);
    return `ฟื้นฟู +${Math.round(heal)} HP`;
  }
  if (ef.type === 'shield') {
    if (hasStatus(target, 'vulnerable')) {
      return `เปราะบาง: ป้องกันการสร้างเกราะ!`;
    }
    if (target.effects.some(e => ['golden_bell_shield', 'elemental_ward', 'iron_body'].includes(e.type))) {
      return `ไม่สามารถทับซ้อนกับเกราะวิชาป้องกันได้!`;
    }
    const sh = target.baseStats.maxHp * (ef.value ?? 0.2);
    target.shield = Math.max(target.shield, sh);
    const ex = target.effects.find(e => e.type === 'shield');
    if (ex) ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    else target.effects.push({ type: 'shield', value: ef.value, duration: ef.duration ?? 2 });
    return `เกราะ +${Math.round(sh)}`;
  }
  if (ef.type === 'poison') {
    const ex = target.effects.find(e => e.type === 'poison');
    const addStacks = ef.stacks ?? 1;
    if (ex) {
      ex.stacks = Math.min(skillsData.statusRules.poison.maxStacks, (ex.stacks ?? 1) + addStacks);
      ex.duration = Math.max(ex.duration, ef.duration ?? 3);
    } else {
      target.effects.push({ type: 'poison', stacks: Math.min(2, addStacks), duration: ef.duration ?? 3 });
    }
    return `ติดพิษ`;
  }
  if (ef.type === 'confusion') {
    const ex = target.effects.find(e => e.type === 'confusion');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'confusion', duration: ef.duration ?? 2 });
    }
    return `ติดสับสน (${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'bleed') {
    const ex = target.effects.find(e => e.type === 'bleed');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'bleed', duration: ef.duration ?? 2 });
    }
    return `ติดเลือดไหล (${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'taunt') {
    const ex = target.effects.find(e => e.type === 'taunt');
    const srcId = (ef as { sourceId?: string }).sourceId;
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
      if (srcId) ex.sourceId = srcId;
    } else {
      target.effects.push({ type: 'taunt', duration: ef.duration ?? 2, sourceId: srcId });
    }
    return `ติดยั่วยุ (${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'sleep') {
    const ex = target.effects.find(e => e.type === 'sleep');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'sleep', duration: ef.duration ?? 2 });
    }
    return `ติดหลับใหล (${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'silence') {
    const ex = target.effects.find(e => e.type === 'silence');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'silence', duration: ef.duration ?? 2 });
    }
    return `ติดใบ้ (${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'root') {
    const ex = target.effects.find(e => e.type === 'root');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'root', duration: ef.duration ?? 2 });
    }
    return `ติดตรึงร่าง (${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'vulnerable') {
    const ex = target.effects.find(e => e.type === 'vulnerable');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'vulnerable', duration: ef.duration ?? 2 });
    }
    return `ติดเปราะบาง (${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'sp_drain') {
    const delta = ef.value ?? 0;
    target.sp = Math.max(0, target.sp - delta);
    return `ตัด SP -${delta}`;
  }
  if (ef.type === 'burn') {
    const ex = target.effects.find(e => e.type === 'burn');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
      // Option A: Refresh duration + 3% Max HP Ignite Burst damage immediately!
      const burstDmg = Math.max(1, Math.round(target.baseStats.maxHp * 0.03));
      target.hp = Math.max(0, target.hp - burstDmg);
      return `ติดเผาไหม้ซ้ำ (Ignite Burst -${burstDmg} HP!)`;
    } else {
      target.effects.push({ type: 'burn', duration: ef.duration ?? 2 });
      return `ติดเผาไหม้ (${ef.duration ?? 2} เทิร์น)`;
    }
  }
  if (ef.type === 'stone_curse') {
    const ex = target.effects.find(e => e.type === 'stone_curse');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 1);
    } else {
      target.effects.push({ type: 'stone_curse', duration: ef.duration ?? 1 });
    }
    return `กลายเป็นหิน 🗿 (ธาตุดิน ${ef.duration ?? 1} เทิร์น)`;
  }
  if (ef.type === 'curse') {
    const ex = target.effects.find(e => e.type === 'curse');
    if (ex) {
      return `คำสาปมรณะยังคงมีผล`;
    } else {
      target.effects.push({ type: 'curse', duration: 999 }); // Permanent until cleansed
      return `ติดคำสาปมรณะ 🔮 (ลด HP 3%/เทิร์น)`;
    }
  }
  if (ef.type === 'curse_and_silence') {
    applyEffectToTarget(target, { type: 'silence', duration: ef.duration ?? 2 }, enableAbilities);
    applyEffectToTarget(target, { type: 'curse', duration: 999 }, enableAbilities);
    target.effects = target.effects.filter(e => !e.type.startsWith('buff_') && e.type !== 'shield');
    return `ติดใบ้ (2 เทิร์น), ติดคำสาปมรณะ 🔮 และสลายบัฟทั้งหมด!`;
  }
  if (ef.type === 'armor_break_and_stun') {
    const defRed = (ef as { defRedPct?: number }).defRedPct ?? ef.value ?? 0.30;
    applyEffectToTarget(target, { type: 'debuff_def', value: defRed, duration: 2 }, enableAbilities);
    const stunRes = applyEffectToTarget(target, { type: 'stun', duration: ef.duration ?? 1 }, enableAbilities);
    const stunTag = stunRes === 'stun' ? 'ติดสตัน (1 เทิร์น)' : stunRes;
    return `ทุบเกราะแตก (ลด DEF ${Math.round(defRed * 100)}% 2 เทิร์น) และ${stunTag}`;
  }
  if (ef.type === 'max_poison_and_armor_break') {
    applyEffectToTarget(target, { type: 'poison', stacks: 2, duration: 3 }, enableAbilities);
    const defRed = (ef as { defRedPct?: number }).defRedPct ?? ef.value ?? 0.30;
    applyEffectToTarget(target, { type: 'debuff_def', value: defRed, duration: 2 }, enableAbilities);
    return `เนตรมรณะพิษอเวจี: ติดพิษสูงสุด 2 ชั้น (3 เทิร์น) & ลด DEF 30% (2 เทิร์น)`;
  }
  if (ef.type === 'dispel_all_and_blind') {
    const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield', 'regen', 'fire_skin', 'ice_skin', 'berserk', 'counter_stance', 'yata_mirror', 'shadow_clone', 'energy_coat', 'golden_bell_shield', 'elemental_ward', 'iron_body', 'iron_fortress'];
    target.effects = target.effects.filter(e => !buffTypes.includes(e.type));
    target.shield = 0;
    const blindRes = applyEffectToTarget(target, { type: 'blind', duration: ef.duration ?? 2 }, enableAbilities);
    const blindTag = blindRes?.includes('ภูมิคุ้มกันตาบอด') ? blindRes : 'ติดตาบอด (2 เทิร์น)';
    return `สลายบัฟทั้งหมด และ${blindTag}`;
  }
  if (ef.type === 'fire_skin') {
    const ex = target.effects.find(e => e.type === 'fire_skin');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'fire_skin', duration: ef.duration ?? 2 });
    }
    return `ผิวกายเพลิง 🔥 (ดาเมจไฟ+20% & เผาไหม้สะท้อน)`;
  }
  if (ef.type === 'ice_skin') {
    const ex = target.effects.find(e => e.type === 'ice_skin');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'ice_skin', duration: ef.duration ?? 2 });
    }
    return `ผิวกายเหมันต์ 🧊 (DEF+20%, SPD-30% & แช่แข็งสะท้อน)`;
  }
  if (ef.type === 'berserk') {
    const ex = target.effects.find(e => e.type === 'berserk');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'berserk', duration: ef.duration ?? 2 });
    }
    return `คลั่งศึก 💢 (ATK+30%, SPD+20%, DEF-20%, HIT-10)`;
  }
  if (ef.type === 'paralysis') {
    const ex = target.effects.find(e => e.type === 'paralysis');
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: 'paralysis', duration: ef.duration ?? 2 });
    }
    return `ติดอัมพาต ⚡ (SPD -25%, ชะงัก 60% ${ef.duration ?? 2} เทิร์น)`;
  }
  if (ef.type === 'energy_coat') {
    if (target.effects.some(e => ['golden_bell_shield', 'elemental_ward', 'iron_body'].includes(e.type))) {
      return `ไม่สามารถทับซ้อนกับเกราะวิชาป้องกันได้!`;
    }
    const ex = target.effects.find(e => e.type === 'energy_coat');
    const ratio = ef.value ?? (skillsData.statusRules as any).energy_coat?.damageToSpPct ?? 0.40;
    if (ex) {
      ex.duration = Math.max(ex.duration, ef.duration ?? 3);
      ex.value = ratio;
    } else {
      target.effects.push({ type: 'energy_coat', duration: ef.duration ?? 3, value: ratio });
    }
    return `กางเกราะพลังงาน 🛡️⚡ (Energy Coat: ซับดาเมจ ${Math.round(ratio * 100)}% เข้า SP ${ef.duration ?? 3} เทิร์น)`;
  }
  if (ef.type === 'golden_bell_shield') {
    if (hasStatus(target, 'vulnerable')) {
      return `เปราะบาง: ป้องกันการสร้างเกราะระฆังทอง!`;
    }
    if (hasActiveExclusiveShield(target)) {
      return `ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้!`;
    }
    const ratio = ef.value ?? (skillsData.statusRules as any).golden_bell_shield?.shieldHpPct ?? 0.50;
    const sh = Math.round(target.baseStats.maxHp * ratio);
    const dur = Math.min(2, ef.duration ?? 2);
    target.shield = sh;
    target.effects.push({ type: 'golden_bell_shield', value: ratio, duration: dur });
    return `กางเกราะระฆังทอง 🔔 (+${sh} HP เกราะ, SPD -30% นาน ${dur} เทิร์น)`;
  }
  if (ef.type === 'elemental_ward') {
    if (hasActiveExclusiveShield(target)) {
      return `ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้!`;
    }
    const ratio = ef.value ?? (skillsData.statusRules as any).elemental_ward?.elemDmgRedPct ?? 0.10;
    const dur = Math.min(2, ef.duration ?? 2);
    target.effects.push({ type: 'elemental_ward', value: ratio, duration: dur });
    return `กางเกราะสลายธาตุ 💠 (ลดดาเมจธาตุ -${Math.round(ratio * 100)}% นาน ${dur} เทิร์น)`;
  }
  if (ef.type === 'iron_body') {
    if (hasActiveExclusiveShield(target)) {
      return `ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้!`;
    }
    const dur = ef.duration ?? 5;
    target.effects = target.effects.filter(e => e.type !== 'stun' && e.type !== 'paralysis');
    target.effects.push({ type: 'iron_body', duration: dur });
    return `เข้าสู่สภาวะกายาเหล็ก 🦾 (DEF+50%, ลดดาเมจสุดท้าย 30%, CRI+40, SPD-50%, กันสตัน/อัมพาต 100% นาน ${dur} เทิร์น)`;
  }
  if (ef.type === 'iron_fortress') {
    const ratio = ef.value ?? (skillsData.statusRules as any).iron_fortress?.dmgRedPct ?? 0.15;
    const dur = ef.duration ?? 2;
    const ex = target.effects.find(e => e.type === 'iron_fortress');
    if (ex) {
      ex.duration = Math.max(ex.duration, dur);
      ex.value = ratio;
    } else {
      target.effects.push({ type: 'iron_fortress', value: ratio, duration: dur });
    }
    return `ค่ายกลปราการเหล็ก 🏰 (ลดดาเมจที่ได้รับ -${Math.round(ratio * 100)}% นาน ${dur} เทิร์น)`;
  }
  const ex = target.effects.find(e => e.type === ef.type);
  if (ex) {
    ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    if (ef.value !== undefined) ex.value = ef.value;
  } else {
    target.effects.push({ type: ef.type, value: ef.value, duration: ef.duration ?? 2 });
  }
  return ef.type;
}

export class BattleSession {
  public turn = 0;
  public teamA: TeamState;
  public teamB: TeamState;
  public options: Required<Omit<CombatOptions, 'customSkillsA' | 'customSkillsB' | 'teamALevels' | 'teamAStars' | 'teamBLevels' | 'teamBStars' | 'skillLevelsA' | 'skillLevelsB'>> &
    Pick<CombatOptions, 'customSkillsA' | 'customSkillsB' | 'teamALevels' | 'teamAStars' | 'teamBLevels' | 'teamBStars' | 'skillLevelsA' | 'skillLevelsB'>;
  public logs: TurnEvent[] = [];
  public winner: 'A' | 'B' | 'draw' | null = null;

  constructor(teamAHeroIds: string[], teamBHeroIds: string[], options: CombatOptions = {}) {
    const enableSkillEffects = options.enableSkillEffects ?? true;
    this.options = {
      enableSkillEffects,
      enableSameElementBonus: options.enableSameElementBonus ?? enableSkillEffects,
      enableAbilities: options.enableAbilities ?? enableSkillEffects,
      forcedElementAdvantage: options.forcedElementAdvantage ?? 'actual',
      maxTurns: options.maxTurns ?? 60,
      customSkillsA: options.customSkillsA,
      customSkillsB: options.customSkillsB,
      teamALevels: options.teamALevels,
      teamAStars: options.teamAStars,
      teamBLevels: options.teamBLevels,
      teamBStars: options.teamBStars,
      skillLevelsA: options.skillLevelsA,
      skillLevelsB: options.skillLevelsB,
    };
    this.teamA = {
      side: 'A',
      fighters: teamAHeroIds.map((id, idx) =>
        createFighter(id, options.customSkillsA?.[idx], options.teamALevels?.[idx] ?? 1, options.teamAStars?.[idx] ?? 1)
      ),
      activeIndex: 0,
      swapCooldown: 0,
      autoCastSignature: true,
      queuedSignature: false,
      queuedSwap: false,
    };
    this.teamB = {
      side: 'B',
      fighters: teamBHeroIds.map((id, idx) =>
        createFighter(id, options.customSkillsB?.[idx], options.teamBLevels?.[idx] ?? 1, options.teamBStars?.[idx] ?? 1)
      ),
      activeIndex: 0,
      swapCooldown: 0,
      autoCastSignature: true,
      queuedSignature: false,
      queuedSwap: false,
    };

    if (this.options.enableAbilities) {
      for (const t of [this.teamA, this.teamB]) {
        for (const f of t.fighters) {
          if (f.abilityId === 'celestial_scales') {
            f.shield = f.baseStats.maxHp * 0.30;
            f.effects.push({ type: 'shield', value: 0.30, duration: 2 });
          }
          if (f.abilityId === 'sacred_white_hide') {
            f.shield = f.baseStats.maxHp * 0.25;
            f.effects.push({ type: 'shield', value: 0.25, duration: 2 });
          }
          if (f.abilityId === 'sacred_white_grace') {
            f.shield = f.baseStats.maxHp * 0.20;
            f.effects.push({ type: 'shield', value: 0.20, duration: 2 });
          }
          if (f.abilityId === 'cape_boss_charge') {
            f.shield = f.baseStats.maxHp * 0.25;
            f.effects.push({ type: 'shield', value: 0.25, duration: 2 });
          }
        }
      }
    }
  }

  public getActive(team: TeamState): FighterState {
    return team.fighters[team.activeIndex];
  }

  public captureSnapshot(): { teamA: TeamSnapshot; teamB: TeamSnapshot; winner: 'A' | 'B' | 'draw' | null } {
    const snapTeam = (t: TeamState): TeamSnapshot => ({
      side: t.side,
      activeIndex: t.activeIndex,
      swapCooldown: t.swapCooldown,
      fighters: t.fighters.map(f => ({
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
    });
    return {
      teamA: snapTeam(this.teamA),
      teamB: snapTeam(this.teamB),
      winner: this.winner,
    };
  }

  private recordEvent(events: TurnEvent[], ev: TurnEvent) {
    ev.snapshot = this.captureSnapshot();
    events.push(ev);
    this.logs.push(ev);
  }

  public canSwap(team: TeamState): boolean {
    if (team.fighters.length < 2) return false;
    const backupIdx = 1 - team.activeIndex;
    const backup = team.fighters[backupIdx];
    const active = this.getActive(team);
    return backup.hp > 0 && team.swapCooldown <= 0 && !hasStatus(active, 'root');
  }

  public stepTurn(): TurnEvent[] {
    if (this.winner) return [];
    this.turn++;
    const events: TurnEvent[] = [];

    for (const t of [this.teamA, this.teamB]) {
      if (t.fighters.length > 1) {
        const backup = t.fighters[1 - t.activeIndex];
        if (backup.hp > 0) {
          const formula = heroesData.statFormula as { spBackupRegenFlat?: number; spBackupRegenPctPerTurn?: number };
          const spBackupGain =
            formula.spBackupRegenFlat ??
            (formula.spBackupRegenPctPerTurn ? Math.round(backup.baseStats.maxSp * formula.spBackupRegenPctPerTurn) : 10);
          backup.sp = Math.min(backup.baseStats.maxSp, backup.sp + spBackupGain);
        }
      }
      if (t.swapCooldown > 0) t.swapCooldown--;
      if (t.queuedSwap && this.canSwap(t)) {
        const oldF = this.getActive(t);
        t.activeIndex = 1 - t.activeIndex;
        t.swapCooldown = 3;
        t.queuedSwap = false;
        const newF = this.getActive(t);
        const healAmt = newF.baseStats.maxHp * 0.05;
        newF.hp = Math.min(newF.baseStats.maxHp, newF.hp + healAmt);
        const ev: TurnEvent = {
          turn: this.turn,
          actorSide: t.side,
          actorName: oldF.name,
          targetName: newF.name,
          actionType: 'swap',
          actionName: 'สลับตัว',
          damage: 0,
          healed: Math.round(healAmt),
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [`ฟื้น +${Math.round(healAmt)} HP`],
          message: `[เทิร์น ${this.turn}] ฝั่ง ${t.side} สลับ ${oldF.name} ออก → ส่ง ${newF.name} เข้าสนาม (ฟื้น +${Math.round(healAmt)} HP, SP ${Math.round(newF.sp)}/${newF.baseStats.maxSp})`,
        };
        this.recordEvent(events, ev);
      } else {
        t.queuedSwap = false;
      }
    }

    const fA = this.getActive(this.teamA);
    const fB = this.getActive(this.teamB);
    const spdA = getEffectiveStats(fA, this.options.enableAbilities).spd;
    const spdB = getEffectiveStats(fB, this.options.enableAbilities).spd;
    const aFirst = spdA === spdB ? Math.random() < 0.5 : spdA > spdB;
    const order: [TeamState, TeamState][] = aFirst
      ? [[this.teamA, this.teamB], [this.teamB, this.teamA]]
      : [[this.teamB, this.teamA], [this.teamA, this.teamB]];

    for (const [attTeam, defTeam] of order) {
      if (this.winner) break;
      const att = this.getActive(attTeam);
      const def = this.getActive(defTeam);
      if (att.hp <= 0 || def.hp <= 0) continue;

      const statusKilled = this.processStartOfTurnStatuses(attTeam, defTeam, events);
      if (statusKilled) {
        this.checkKoAndBackup(attTeam, events);
        if (this.winner) break;
        continue;
      }

      if (hasStatus(att, 'stun') || hasStatus(att, 'freeze') || hasStatus(att, 'sleep') || hasStatus(att, 'stone_curse')) {
        const ccName = hasStatus(att, 'stone_curse') ? 'กลายเป็นหิน' : hasStatus(att, 'freeze') ? 'แช่แข็ง' : hasStatus(att, 'sleep') ? 'หลับใหล' : 'สตัน';
        const ev: TurnEvent = {
          turn: this.turn,
          actorSide: attTeam.side,
          actorName: att.name,
          targetName: def.name,
          actionType: 'skip',
          actionName: ccName,
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[เทิร์น ${this.turn}] ${att.name} ติดสถานะ${ccName} ข้ามเทิร์น!`,
        };
        this.recordEvent(events, ev);
        this.tickEndOfTurnStatuses(att);
        continue;
      }

      if (hasStatus(att, 'paralysis')) {
        const flinchChance = (skillsData.statusRules as any).paralysis?.flinchChance ?? 0.60;
        if (Math.random() < flinchChance) {
          const ev: TurnEvent = {
            turn: this.turn,
            actorSide: attTeam.side,
            actorName: att.name,
            targetName: def.name,
            actionType: 'skip',
            actionName: 'อัมพาต',
            damage: 0,
            healed: 0,
            shieldGained: 0,
            isCrit: false,
            isMiss: false,
            elementMult: 1,
            appliedEffects: [],
            message: `[เทิร์น ${this.turn}] ⚡ ${att.name} เกิดอาการชะงักจากอัมพาต (Paralysis ${Math.round(flinchChance * 100)}%) ข้ามการโจมตีในเทิร์นนี้!`,
          };
          this.recordEvent(events, ev);
          this.tickEndOfTurnStatuses(att);
          continue;
        }
      }

      if (hasStatus(att, 'confusion')) {
        if (Math.random() < 0.60) {
          const selfDmg = Math.round(att.baseStats.maxHp * 0.12);
          att.hp = Math.max(0, att.hp - selfDmg);
          const ev: TurnEvent = {
            turn: this.turn,
            actorSide: attTeam.side,
            actorName: att.name,
            targetName: att.name,
            actionType: 'status',
            actionName: 'สับสน',
            damage: selfDmg,
            healed: 0,
            shieldGained: 0,
            isCrit: false,
            isMiss: false,
            elementMult: 1,
            appliedEffects: [],
            message: `[เทิร์น ${this.turn}] 🌀 ${att.name} เกิดอาการสับสนอย่างรุนแรง! หันมาทำร้ายตัวเอง -${selfDmg} HP (12% Max HP) และข้ามการออกท่าในเทิร์นนี้! (HP ${Math.round(att.hp)}/${att.baseStats.maxHp})`,
          };
          this.recordEvent(events, ev);
          this.tickEndOfTurnStatuses(att);
          this.checkKoAndBackup(attTeam, events);
          continue;
        } else {
          const confEv: TurnEvent = {
            turn: this.turn,
            actorSide: attTeam.side,
            actorName: att.name,
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
            message: `[เทิร์น ${this.turn}] 🌀 ${att.name} ติดสถานะสับสน แต่สามารถรวบรวมสมาธิตั้งสติได้ และเตรียมออกแอ็กชัน!`,
          };
          this.recordEvent(events, confEv);
        }
      }

      this.executeAction(attTeam, defTeam, events);
      this.tickEndOfTurnStatuses(att);
      this.checkKoAndBackup(defTeam, events);
      if (!this.winner) this.checkKoAndBackup(attTeam, events);
    }

    if (!this.winner && this.turn >= this.options.maxTurns) {
      const hpPctA = this.teamA.fighters.reduce((s, f) => s + Math.max(0, f.hp), 0) /
        this.teamA.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      const hpPctB = this.teamB.fighters.reduce((s, f) => s + Math.max(0, f.hp), 0) /
        this.teamB.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      this.winner = hpPctA === hpPctB ? 'draw' : hpPctA > hpPctB ? 'A' : 'B';
    }
    if (this.winner && events.length > 0) {
      events[events.length - 1].snapshot = this.captureSnapshot();
    }

    return events;
  }

  private processStartOfTurnStatuses(attTeam: TeamState, defTeam: TeamState, events: TurnEvent[]): boolean {
    const f = this.getActive(attTeam);
    const enemy = this.getActive(defTeam);
    let dotDmg = 0;
    let regenHeal = 0;
    const notes: string[] = [];

    // ฟื้นฟู SP ต้นเทิร์น (spRegen ตาม statFormula ปกติ +6 SP)
    if (f.sp < f.baseStats.maxSp) {
      const spGain = Math.min(f.baseStats.maxSp - f.sp, f.baseStats.spRegen);
      f.sp += spGain;
    }

    if (this.options.enableAbilities) {
      if (f.abilityId === 'morning_call' && !f.firstTurnDone) {
        f.firstTurnDone = true;
        if (Math.random() < 0.70) {
          f.effects.push({ type: 'buff_atk', value: 0.10, duration: 1 });
          f.effects.push({ type: 'buff_cri', value: 15, duration: 1 });
          notes.push(`Ability [${f.abilityName}] ทำงาน (70%) ATK+10%, CRI+15%`);
        }
      }
      if (f.abilityId === 'kings_majesty') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          applyEffectToTarget(enemy, { type: 'debuff_atk', value: 0.15, duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฟื้น +${Math.round(h)} HP & ข่มขวัญลด ATK ศัตรู 15%`);
        }
      }
      if (f.abilityId === 'immortal_serpent') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.045;
          regenHeal += h;
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฟื้น +${Math.round(h)} HP`);
        }
      }
      if (f.abilityId === 'antler_blessing') {
        if (Math.random() < 0.55) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 10);
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ฟื้น +${Math.round(h)} HP, +10 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'mimic_cacophony') {
        if (Math.random() < 0.55) {
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ตัดเกจศัตรู -8`);
        }
      }
      if (f.abilityId === 'warmth_of_the_flock') {
        if (Math.random() < 0.50) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          notes.push(`Ability [${f.abilityName}] ทำงาน (50%) ฟื้น +${Math.round(h)} HP`);
        }
      }
      if (f.abilityId === 'hot_spring_aura') {
        if (Math.random() < 0.60) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฟื้น +8 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'regenerative_core') {
        if (Math.random() < 0.55) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ฟื้น +${Math.round(h)} HP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'buoyant_comfort') {
        if (Math.random() < 0.60) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          applyEffectToTarget(f, { type: 'shield', value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฟื้น +8 SP & เกราะ 5%`);
        }
      }
      if (f.abilityId === 'echolocation_harmony') {
        if (Math.random() < 0.60) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 10);
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฟื้น +10 SP & เกจ +10`);
        }
      }
      if (f.abilityId === 'night_confusion_gaze' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_hit', value: 15, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) สะกดจิต ${enemy.name} ลด HIT -15`);
        }
      }
      if (f.abilityId === 'omniscient_gaze' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'confusion', duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) มหาญาณทิพย์ สับสน ${enemy.name} (2 เทิร์น)`);
        }
      }
      if (f.abilityId === 'brain_interference' && enemy.hp > 0) {
        if (Math.random() < 0.25) {
          enemy.gauge = Math.max(0, enemy.gauge - 5);
          notes.push(`Ability [${f.abilityName}] ทำงาน (25%) คลื่นรบกวนสมอง ตัดเกจ ${enemy.name} -5`);
        }
      }
      if (f.abilityId === 'resonance_echo') {
        if (Math.random() < 0.50) {
          applyEffectToTarget(f, { type: 'shield', value: 0.10, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (50%) คลื่นประสานจิต มอบเกราะ 10% Max HP`);
        }
      }
      if (f.abilityId === 'solar_majesty_aura' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          applyEffectToTarget(enemy, { type: 'blind', duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) รัศมีสุริยะ ตัดเกจ ${enemy.name} -8 & ตาบอด 1 เทิร์น`);
        }
      }
      if (f.abilityId === 'condor_dominion_wings' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ลมกดทับ ลด SPD ${enemy.name} 15% & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'pure_breeze_cleanse') {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ฟื้น +8 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'swan_dance_guardian') {
        if (Math.random() < 0.60) {
          applyEffectToTarget(f, { type: 'shield', value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) กางเกราะวายุ 5% Max HP`);
        }
      }
      if (f.abilityId === 'sacred_emerald_wind') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฟื้น +${Math.round(h)} HP & เกจ +10`);
        }
      }
      if (f.abilityId === 'earth_herbal_snout') {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ฟื้น +8 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'earthquake_footsteps' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฝีเท้าพสุธา ลด SPD ${enemy.name} 15% & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'burrow_safehaven') {
        if (Math.random() < 0.60) {
          applyEffectToTarget(f, { type: 'shield', value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) โพรงดินกำบัง เกราะ 5% Max HP`);
        }
      }
      if (f.abilityId === 'high_ground_blessing') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) พรพสุธา ฟื้น +${Math.round(h)} HP & เกจ +10`);
        }
      }
      if (f.abilityId === 'wild_canopy_howl' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_hit', value: 15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) เสียงกู่ก้อง ลด HIT 15 & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'ancient_root_weave' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) รากไม้พันธนาการ ลด SPD 15% & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'eucalyptus_rest') {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) กลิ่นยูคาลิปตัส ฟื้น +8 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'seed_of_rebirth') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) เมล็ดพันธุ์พฤกษา ฟื้น +${Math.round(h)} HP & เกจ +10`);
        }
      }
      if (f.abilityId === 'royal_propolis') {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) เกสรนมผึ้ง ฟื้น +8 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'toxic_plumage_flutter' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_hit', value: 15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) สลัดขนนกพิษ ลด HIT 15 & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'regenerative_toxic_skin') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) กายางอกเซลล์พิษ ฟื้น +${Math.round(h)} HP & +10 SP`);
        }
      }
      if (f.abilityId === 'conotoxin_harpoon' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_spd', value: 0.18, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ฉมวกอัมพาต ลด SPD 18% & ตัดเกจ -10`);
        }
      }
      if (f.abilityId === 'miracle_blue_blood') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) โลหิตคราม ฟื้น +${Math.round(h)} HP & เกจ +10`);
        }
      }
      if (f.abilityId === 'sonar_ice_horn' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) โซนาร์งาเหมันต์ ลด SPD 15% & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'krill_bio_antifreeze') {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) สารต้านเยือกแข็ง ฟื้น +8 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'canary_of_the_sea') {
        if (Math.random() < 0.60) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          applyEffectToTarget(f, { type: 'shield', value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) วารีขาว ฟื้น +8 SP & เกราะ 5%`);
        }
      }
      if (f.abilityId === 'aurora_tundra_blessing') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) มหาพรแสงเหนือ ฟื้น +${Math.round(h)} HP & เกจ +10`);
        }
      }
      if (f.abilityId === 'cunning_dark_wings' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_hit', value: 15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ปีกทมิฬ ลด HIT 15 & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'vampire_cloak_veil' && enemy.hp > 0) {
        if (Math.random() < 0.60) {
          applyEffectToTarget(enemy, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ม่านปีกมาร ลด SPD 15% & ตัดเกจ -8`);
        }
      }
      if (f.abilityId === 'undying_adaptation') {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ชีพจรอมตะ ฟื้น +8 SP${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'gecko_regenerative_cells') {
        if (Math.random() < 0.60) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          applyEffectToTarget(f, { type: 'shield', value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) เซลล์งอกใหม่ ฟื้น +8 SP & เกราะ 5%`);
        }
      }
      if (f.abilityId === 'miracle_organ_regeneration') {
        if (Math.random() < 0.60) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) กายางอกเซลล์อัศจรรย์ ฟื้น +${Math.round(h)} HP & เกจ +10`);
        }
      }
      if (f.abilityId === 'frilled_sun_flare' && enemy.hp > 0) {
        if (Math.random() < 0.55) {
          applyEffectToTarget(enemy, { type: 'blind', duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) แผงคอสุริยัน แสงวาบทำให้ศัตรูตาบอด 1 เทิร์น`);
        }
      }
      if (f.abilityId === 'gentle_solar_fleece') {
        if (Math.random() < 0.60) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          applyEffectToTarget(f, { type: 'shield', value: 0.08, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) ปุยขนสุริยะ เกราะ 8%${cl ? ` & ${cl}` : ''}`);
        }
      }
      if (f.abilityId === 'sacred_white_grace') {
        const h = f.baseStats.maxHp * 0.05;
        regenHeal += h;
        const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
        notes.push(`Ability [${f.abilityName}] ทำงาน บารมีคชสารเผือก ฟื้น +${Math.round(h)} HP${cl ? ` & ${cl}` : ''}`);
      }
      if (f.abilityId === 'motion_dazzle_stripes' && enemy.hp > 0) {
        if (Math.random() < 0.55) {
          applyEffectToTarget(enemy, { type: 'blind', duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ลายพรางแถบสายฟ้า ทำให้ศัตรูตาบอด 1 เทิร์น`);
        }
      }
      if (f.abilityId === 'high_voltage_organ' && enemy.hp > 0) {
        if (Math.random() < 0.50) {
          applyEffectToTarget(enemy, { type: 'paralysis', duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 10);
          notes.push(`Ability [${f.abilityName}] ทำงาน (50%) อวัยวะไฟฟ้าแรงดันสูง 860V ปล่อยกระแสไฟฟ้าแรงสูงทำให้ศัตรูติดอัมพาต 2 เทิร์น & ตัดเกจ -10`);
        }
      }
      if (f.abilityId === 'zen_mind') {
        if (Math.random() < 0.40) {
          applyEffectToTarget(f, { type: 'energy_coat', duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (40%) จิตสงบนิ่ง กางเกราะพลังงาน (Energy Coat 2 เทิร์น ซับดาเมจ 40% เข้า SP)`);
        }
      }
      if (f.abilityId === 'eimer_organ_reflex') {
        if (Math.random() < 0.55) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          f.gauge = Math.min(100, f.gauge + 6);
          notes.push(`Ability [${f.abilityName}] ทำงาน (55%) ประสาทเอเมอร์ไวพริบตา ฟื้น +8 SP & เกจ +6`);
        }
      }
      if (f.abilityId === 'spiral_horn_resonance') {
        if (Math.random() < 0.60) {
          const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] ทำงาน (60%) เขาม้วนสะท้อนคลื่น${cl ? ` (${cl})` : ''}`);
        }
      }
      if (f.abilityId === 'galvanic_life_pulse') {
        const h = f.baseStats.maxHp * 0.05;
        regenHeal += h;
        const cl = applyEffectToTarget(f, { type: 'cleanse', count: 1 }, true);
        notes.push(`Ability [${f.abilityName}] ทำงาน ชีพจรกัลวานิก ฟื้น +${Math.round(h)} HP${cl ? ` & ${cl}` : ''}`);
      }
      if (f.abilityId === 'thorn_regrowth' && !hasStatus(f, 'stone_curse')) {
        const h = f.baseStats.maxHp * 0.04;
        regenHeal += h;
        notes.push(`Ability [${f.abilityName}] ฟื้นฟูชีวาหนามงอกเงย +${Math.round(h)} HP`);
      }
      if (f.abilityId === 'ironwood_regrowth' && !hasStatus(f, 'stone_curse')) {
        const h = f.baseStats.maxHp * 0.04;
        regenHeal += h;
        notes.push(`Ability [${f.abilityName}] ทำงาน รากไม้พฤกษาฟื้นชีพ +${Math.round(h)} HP`);
      }
    }

    if (this.options.enableSkillEffects) {
      const dotReduction = this.options.enableAbilities && f.abilityId === 'mud_hide' ? 0.60 : (this.options.enableAbilities && f.abilityId === 'duat_soul_eater' ? 0.65 : 1.0);
      for (const ef of f.effects) {
        if (ef.type === 'burn') {
          const wineMistMult = hasStatus(f, 'wine_mist') ? 1.5 : 1.0;
          const d = f.baseStats.maxHp * skillsData.statusRules.burn.hpLossPctPerTurn * dotReduction * wineMistMult;
          dotDmg += d;
          notes.push(wineMistMult > 1 ? `เผาไหม้สุราทวีคูณ -${Math.round(d)}` : `เผาไหม้ -${Math.round(d)}`);
        }
        if (ef.type === 'poison') {
          const stacks = ef.stacks ?? 1;
          const d = f.baseStats.maxHp * skillsData.statusRules.poison.hpLossPctPerTurn * stacks * dotReduction;
          dotDmg += d;
          notes.push(`พิษ(${stacks}) -${Math.round(d)}`);
        }
        if (ef.type === 'curse') {
          const d = f.baseStats.maxHp * skillsData.statusRules.curse.hpLossPctPerTurn * dotReduction;
          dotDmg += d;
          notes.push(`คำสาปมรณะ 🔮 -${Math.round(d)} HP`);
        }
        if (ef.type === 'regen') {
          const h = f.baseStats.maxHp * (ef.value ?? 0.06);
          regenHeal += h;
          notes.push(`ฟื้นฟูป่า +${Math.round(h)}`);
        }
        if (ef.type === 'raging_thunder') {
          const isSelf = Math.random() < 0.30;
          const thunderTarget = isSelf ? f : enemy;
          const K = heroesData.statFormula.defConstantK;
          const tDef = getEffectiveStats(thunderTarget, this.options.enableAbilities).def;
          const tDmg = Math.max(1, f.baseStats.atk * 0.70 * (K / (K + tDef)) * (0.95 + Math.random() * 0.1));
          if (thunderTarget === f) {
            dotDmg += tDmg;
            notes.push(`⚡💥 อัสนีคลั่งแฉลบผ่าตนเอง! -${Math.round(tDmg)} HP`);
          } else {
            let remThunder = tDmg;
            if (thunderTarget.shield > 0) {
              const abs = Math.min(thunderTarget.shield, remThunder);
              thunderTarget.shield -= abs;
              remThunder -= abs;
            }
            thunderTarget.hp = Math.max(0, thunderTarget.hp - remThunder);
            notes.push(`⚡ อัสนีคลั่งผ่าใส่ ${thunderTarget.name}! -${Math.round(tDmg)} HP`);
          }
        }
      }
    }

    if (hasStatus(f, 'stone_curse')) {
      if (regenHeal > 0) notes.push(`กลายเป็นหิน 🗿 ระงับการฟื้นฟูทั้งหมด!`);
      regenHeal = 0;
    }

    if (dotDmg > 0 || regenHeal > 0 || notes.length > 0) {
      f.hp = Math.min(f.baseStats.maxHp, f.hp - dotDmg + regenHeal);
      const ev: TurnEvent = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: f.name,
        targetName: enemy.name,
        actionType: 'status',
        actionName: notes.join(', '),
        damage: Math.round(dotDmg),
        healed: Math.round(regenHeal),
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[เทิร์น ${this.turn}] ต้นเทิร์นของ ${f.name}: ${notes.join(', ')} (HP ${Math.max(0, Math.round(f.hp))}/${Math.round(f.baseStats.maxHp)})`,
      };
      this.recordEvent(events, ev);
    }

    return f.hp <= 0;
  }

  private tickEndOfTurnStatuses(f: FighterState) {
    if (f.ccResistTurns > 0) {
      f.ccResistTurns--;
      if (f.ccResistTurns <= 0) f.ccResistStacks = 0;
    }
    for (const ef of f.effects) {
      if (ef.type === 'curse' || ef.type === 'spirit_orb') continue; // permanent
      if (ef.type !== 'stun' && ef.type !== 'freeze' && ef.type !== 'stone_curse') ef.duration--;
      else ef.duration = 0;
    }
    f.effects = f.effects.filter(e => e.type === 'curse' || e.type === 'spirit_orb' || e.duration > 0);
    if (!hasStatus(f, 'shield') && !hasStatus(f, 'golden_bell_shield')) f.shield = 0;
  }

  private executeAction(attTeam: TeamState, defTeam: TeamState, events: TurnEvent[]) {
    const att = this.getActive(attTeam);
    const sigCfg = heroesData.signatureByClass[att.rarity];
    const isSilenced = hasStatus(att, 'silence');
    if (!isSilenced) {
      att.gauge = Math.min(100, att.gauge + sigCfg.gainPerTurn);
    }

    const shouldCastSig = !isSilenced && att.gauge >= 100 && (attTeam.autoCastSignature || attTeam.queuedSignature || attTeam.side === 'B');
    if (shouldCastSig) {
      att.gauge -= 100;
      attTeam.queuedSignature = false;
      att.sigUsedCount++;
      const customSigChance = (att.signatureEffect as { chance?: number } | undefined)?.chance;
      const heroDef = HERO_MAP.get(att.id) as { customSigMult?: number } | undefined;
      const sigDmgMult = heroDef?.customSigMult !== undefined ? heroDef.customSigMult : sigCfg.damageMult;
      this.performHit(attTeam, defTeam, 'signature', att.signatureName, sigDmgMult, att.element, {
        sigEffect: att.signatureEffect,
        sigEffectChance: customSigChance ?? sigCfg.effectChance,
      }, events);
      return;
    }

    if (!this.options.enableSkillEffects) {
      const pureSlots: [number, number][] = [
        [0.10, 2.2],
        [0.15, 1.8],
        [0.20, 1.6],
        [0.20, 1.6],
      ];
      for (const [p, m] of pureSlots) {
        if (Math.random() < p) {
          this.performHit(attTeam, defTeam, 'skill', 'สกิลธาตุ', m, att.element, {}, events);
          return;
        }
      }
      this.performHit(attTeam, defTeam, 'normal', 'โจมตีธรรมดา', 1.0, att.element, {}, events);
      return;
    }

    if (!isSilenced) {
      for (const slotId of att.skillSlots) {
        const sk = SKILL_MAP.get(slotId);
        if (!sk) continue;
        // ป้องกันการร่ายวิชาลับเงามายาซ้ำซ้อน หากร่างเงายังมีชีวิตอยู่
        if (sk.id === 'secret_l' && hasStatus(att, 'shadow_clone')) continue;
        // ป้องกันการร่ายสกิลเกราะทับซ้อนกับเกราะตนเองและเกราะอื่นๆ
        if ((sk.id === 'defense_s' || sk.id === 'defense_m1' || sk.id === 'defense_l') && hasActiveExclusiveShield(att)) continue;
        if (sk.damageMult === 0 && sk.effects.every((e: any) => e.type === 'shield') && hasActiveExclusiveShield(att)) continue;
        const spCost = getSkillSpCost(sk.tier, sk.id);
        if (att.sp < spCost) continue;
        const isSameElem = this.options.enableSameElementBonus && sk.element === att.element;
        const procChance = sk.baseChance * (isSameElem ? elementsData.multipliers.sameElementChanceBonus : 1);
        if (Math.random() < procChance) {
          att.sp -= spCost;
          this.performHit(attTeam, defTeam, 'skill', sk.name, sk.damageMult, sk.element, { skill: sk, spCost }, events);
          return;
        }
      }
    }

    const breathBonus = isSilenced ? 0 : ((heroesData.statFormula as { spNormalAttackBonus?: number }).spNormalAttackBonus ?? 6);
    const actualSpGain = Math.min(att.baseStats.maxSp - att.sp, breathBonus);
    att.sp += actualSpGain;
    this.performHit(attTeam, defTeam, 'normal', isSilenced ? 'โจมตีธรรมดา (ติดใบ้ 🔕)' : 'โจมตีธรรมดา', 1.0, att.element, { spChanged: actualSpGain }, events);
  }

  private performHit(
    attTeam: TeamState,
    defTeam: TeamState,
    actionType: 'normal' | 'skill' | 'signature',
    actionName: string,
    baseDamageMult: number,
    skillElement: ElementId,
    meta: {
      skill?: (typeof skillsData.skills)[number];
      sigEffect?: { type: string; value?: number; duration?: number; count?: number; chance?: number; target?: string };
      sigEffectChance?: number;
      spCost?: number;
      spChanged?: number;
    },
    events: TurnEvent[]
  ) {
    const att = this.getActive(attTeam);
    const def = this.getActive(defTeam);
    const attStats = getEffectiveStats(att, this.options.enableAbilities);
    const defStats = getEffectiveStats(def, this.options.enableAbilities);
    const sk = meta.skill;
    const spCost = meta.spCost ?? 0;
    let spChanged = meta.spChanged ?? 0;

    const appliedEffects: string[] = [];
    if (spChanged > 0 && actionType === 'normal') {
      appliedEffects.push(`พักหายใจ +${spChanged} SP`);
    }
    let healed = 0;
    let shieldGained = 0;

    if (hasStatus(att, 'bleed')) {
      const bAct = Math.round(att.baseStats.maxHp * skillsData.statusRules.bleed.actionDamageHpPct);
      att.hp = Math.max(0, att.hp - bAct);
      appliedEffects.push(`🩸 เลือดไหลจากการเคลื่อนไหว -${bAct} HP`);
    }

    if (baseDamageMult === 0 && this.options.enableSkillEffects) {
      if (sk) {
        for (const rawEf of sk.effects) {
          const ef = rawEf as {
            type: string;
            target?: string;
            chance?: number;
            value?: number;
            duration?: number;
            stacks?: number;
            count?: number;
          };
          if (Math.random() < (ef.chance ?? 1.0)) {
            const tgt = ef.target === 'enemy' ? def : att;
            const hpBefore = tgt.hp;
            const shBefore = tgt.shield;
            const spBefore = tgt.sp;
            const res = applyEffectToTarget(tgt, ef, this.options.enableAbilities);
            if (res) appliedEffects.push(res);
            healed += Math.max(0, tgt.hp - hpBefore);
            shieldGained += Math.max(0, tgt.shield - shBefore);
            if (tgt === att) spChanged += tgt.sp - spBefore;
          }
        }
      }
      if (actionType === 'signature' && att.id === 'deer') {
        const h = att.baseStats.maxHp * 0.12;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        spChanged += 15;
        appliedEffects.push(`ฮีลทีม +${Math.round(h)} HP, เกราะ 15% & +15 SP`);
      }
      if (actionType === 'signature' && att.id === 'flamingo') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        spChanged += 15;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
        appliedEffects.push(`ระบำเพลิงพิทักษ์ฝูง: ฮีล +${Math.round(h)} HP, +15 SP${cl ? ` & ${cl}` : ''}`);
      }
      if (actionType === 'signature' && att.id === 'capybara') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`วารีอุ่นเยียวยาวิญญาณ: ฮีล +${Math.round(h)} HP & บัฟ DEF+20%`);
      }
      if (actionType === 'signature' && att.id === 'sun_stag') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 25);
        spChanged += 25;
        applyEffectToTarget(att, { type: 'buff_atk', value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`แสงอรุณแห่งการเกิดใหม่: ฮีล +${Math.round(h)} HP, +25 SP & บัฟ ATK+25%`);
      }
      if (actionType === 'signature' && att.id === 'starfish') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`หัตถ์ดาราสมุทรฟื้นชีวา: ฮีล +${Math.round(h)} HP & บัฟ DEF+15%`);
      }
      if (actionType === 'signature' && att.id === 'sea_otter') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        spChanged += 15;
        applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`ไข่มุกวารีคุ้มทัพ: ฮีล +${Math.round(h)} HP, +15 SP & เกราะ 12%`);
      }
      if (actionType === 'signature' && att.id === 'dolphin') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_spd', value: 0.20, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`คลื่นเสียงแห่งปาฏิหาริย์: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''} & บัฟ SPD+20%`);
      }
      if (actionType === 'signature' && att.id === 'dove') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_spd', value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`ปีกสันติภาพเยียวยา: ฮีล +${Math.round(h)} HP & บัฟ SPD+15%`);
      }
      if (actionType === 'signature' && att.id === 'swan') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
        appliedEffects.push(`ระบำวายุพิทักษ์ชีวา: ฮีล +${Math.round(h)} HP, เกราะ 12%${cl ? ` & ${cl}` : ''}`);
      }
      if (actionType === 'signature' && att.id === 'quetzal') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_spd', value: 0.25, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_flee', value: 15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`มหาพรแห่งเทพเจ้าสายลม: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''} & บัฟ SPD+25%/FLEE+15`);
      }
      if (actionType === 'signature' && att.id === 'pig') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`โคลนแร่ธาตุเยียวยา: ฮีล +${Math.round(h)} HP & บัฟ DEF+15%`);
      }
      if (actionType === 'signature' && att.id === 'wombat') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`ปราการโพรงดินพิทักษ์: ฮีล +${Math.round(h)} HP, เกราะ 12% & บัฟ DEF+20%`);
      }
      if (actionType === 'signature' && att.id === 'giraffe') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`พรมิ่งขวัญแห่งผืนดิน: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''} & บัฟ DEF+25%`);
      }
      if (actionType === 'signature' && att.id === 'koala') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`ไออุ่นพฤกษาโอบนิทรา: ฮีล +${Math.round(h)} HP & บัฟ DEF+15%`);
      }
      if (actionType === 'signature' && att.id === 'hornbill') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'regen', value: 0.06, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`พรมหาวนาลัยพิทักษ์ชีพ: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''}, รีเจน 6% & บัฟ DEF+25%`);
      }
      if (actionType === 'signature' && att.id === 'bee') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.15, duration: 2 }, this.options.enableAbilities);
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
        appliedEffects.push(`ละอองนมผึ้งฟื้นฟูรัง: ฮีล +${Math.round(h)} HP, บัฟ DEF+15% & +10 SP`);
      }
      if (actionType === 'signature' && att.id === 'salamander') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'regen', value: 0.06, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`หัตถ์สมานวิญญาณซาลาแมนเดอร์: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''} & รีเจน 6%`);
      }
      if (actionType === 'signature' && att.id === 'horseshoe_crab') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`มหาปราการโลหิตครามล้างกัลป์: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''}, เกราะ 15% & บัฟ DEF+25%`);
      }
      if (actionType === 'signature' && att.id === 'krill') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.15, duration: 2 }, this.options.enableAbilities);
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
        appliedEffects.push(`ละอองแสงออโรราฝูงเคยฟื้นชีวา: ฮีล +${Math.round(h)} HP, บัฟ DEF+15% & +10 SP`);
      }
      if (actionType === 'signature' && att.id === 'beluga') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`คลื่นเพลงบริสุทธิ์สมานทัพ: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''} & เกราะ 12%`);
      }
      if (actionType === 'signature' && att.id === 'reindeer') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'regen', value: 0.06, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`มหาพรมงกุฎแสงเหนือชุบวิญญาณ: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''}, รีเจน 6% & บัฟ DEF+25%`);
      }
      if (actionType === 'signature' && att.id === 'cockroach') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: 'buff_def', value: 0.15, duration: 2 }, this.options.enableAbilities);
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
        appliedEffects.push(`ฟีโรโมนทมิฬรวมฝูงคืนชีพ: ฮีล +${Math.round(h)} HP, บัฟ DEF+15% & +10 SP`);
      }
      if (actionType === 'signature' && att.id === 'tokay_gecko') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`กู่ก้องสมานวิญญาณรัตติกาล: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''} & เกราะ 12%`);
      }
      if (actionType === 'signature' && att.id === 'axolotl') {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'regen', value: 0.06, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`มหาปาฏิหาริย์ชุบวิญญาณแห่งเงามืด: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''}, รีเจน 6% & บัฟ DEF+25%`);
      }
      if (actionType === 'signature' && att.id === 'alpaca') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`ไออุ่นปุยขนสุริยะ: ฮีล +${Math.round(h)} HP, ล้างดีบัฟ${cl ? ` (${cl})` : ''} & เกราะ 12%`);
      }
      if (actionType === 'signature' && att.id === 'white_elephant') {
        const h = att.baseStats.maxHp * 0.26;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`มหาบารมีคชสารเผือก: ฮีล +${Math.round(h)} HP, ล้างดีบัฟทั้งหมด${cl ? ` (${cl})` : ''} & บัฟ DEF+25%`);
      }
      if (actionType === 'signature' && att.id === 'star_nosed_mole') {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        appliedEffects.push(`สัมผัสประสาทความเร็วแสง: ฮีล +${Math.round(h)} HP & +15 SP`);
      }
      if (actionType === 'signature' && att.id === 'mouflon') {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_spd', value: 0.15, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`เกราะประจุไฟฟ้าสถิต: ฮีล +${Math.round(h)} HP, เกราะ 12% & บัฟ SPD +15%`);
      }
      if (actionType === 'signature' && att.id === 'okapi') {
        const h = att.baseStats.maxHp * 0.26;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: 'buff_spd', value: 0.20, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`มหากระตุ้นชีพจรสายฟ้า: ฮีล +${Math.round(h)} HP, ล้างดีบัฟทั้งหมด${cl ? ` (${cl})` : ''} & บัฟ ATK/SPD +20%`);
      }
      const spCostTag = spCost > 0 ? ` (-${spCost} SP)` : '';
      const ev: TurnEvent = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: att.name,
        targetName: def.name,
        actionType,
        actionName,
        skillTier: sk?.tier,
        damage: 0,
        healed: Math.round(healed),
        shieldGained: Math.round(shieldGained),
        spCost,
        spChanged: Math.round(spChanged),
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects,
        message: `[เทิร์น ${this.turn}] ${att.name} ใช้ [${actionName}]${spCostTag} → ${appliedEffects.join(', ')} (SP ${Math.round(att.sp)}/${att.baseStats.maxSp})`,
      };
      this.recordEvent(events, ev);
      return;
    }

    const attHitBonus = this.options.enableAbilities
      ? (att.abilityId === 'silent_night_owl' ? 12 : att.abilityId === 'supersonic_dive' ? 8 : 0)
      : 0;
    const defFleeBonus = this.options.enableAbilities
      ? (def.abilityId === 'kitsune_illusion' ? 5 : def.abilityId === 'solar_leap' ? 6 : 0)
      : 0;
    const effFlee = (defStats.flee + defFleeBonus) * (1 - ((sk as { ignoreFleePct?: number } | undefined)?.ignoreFleePct ?? 0));
    const hitChance = Math.max(0.5, Math.min(1.0, (attStats.hit + attHitBonus - effFlee) / 100));
    const zizDeflect = this.options.enableAbilities && def.abilityId === 'ziz_aegis_wings' && Math.random() < 0.45;
    if (Math.random() > hitChance || zizDeflect) {
      let dodgeNote = '';
      if (this.options.enableAbilities && def.abilityId === 'ziz_aegis_wings') {
        applyEffectToTarget(att, { type: 'debuff_hit', value: 15, duration: 2 }, true);
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] ปีกค้ำฟ้าปัดป้องการโจมตีสำเร็จ! & ลด HIT ${att.name} 15 แต้ม)`;
      }
      if (this.options.enableAbilities && def.abilityId === 'nine_lives') {
        const h = def.baseStats.maxHp * 0.08;
        def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
        dodgeNote = ` (${def.name} Ability [${def.abilityName}] ฟื้น +${Math.round(h)} HP)`;
      }
      if (this.options.enableAbilities && def.abilityId === 'solar_stash' && Math.random() < 0.55) {
        const h = def.baseStats.maxHp * 0.03;
        def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
        def.sp = Math.min(def.baseStats.maxSp, def.sp + 12);
        dodgeNote = ` (${def.name} Ability [${def.abilityName}] ฟื้น +12 SP & +${Math.round(h)} HP)`;
      }
      if (this.options.enableAbilities && def.abilityId === 'solar_leap' && Math.random() < 0.60) {
        applyEffectToTarget(def, { type: 'buff_cri', value: 15, duration: 2 }, true);
        def.gauge = Math.min(100, def.gauge + 10);
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] บัฟ CRI+15% & เกจ +10)`;
      }
      if (this.options.enableAbilities && def.abilityId === 'blazing_reflexes' && Math.random() < 0.60) {
        const K = heroesData.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.40 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] สวนกลับ ${Math.round(cDmg)} ดาเมจใส่ ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === 'glide_wave' && Math.random() < 0.60) {
        def.gauge = Math.min(100, def.gauge + 10);
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] ร่อนคลื่นหลบ เกจ +10)`;
      }
      if (this.options.enableAbilities && def.abilityId === 'burrow_ambush' && Math.random() < 0.60) {
        const K = heroesData.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.40 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] ดำดินแทงสวนกลับ ${Math.round(cDmg)} ดาเมจใส่ ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === 'foliage_cloak' && Math.random() < 0.60) {
        const K = heroesData.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.40 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] คมมีดใบไม้สวนกลับ ${Math.round(cDmg)} ดาเมจใส่ ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === 'stoat_snow_dance' && Math.random() < 0.60) {
        const K = heroesData.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.40 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] ระบำหิมะสวนกลับ ${Math.round(cDmg)} ดาเมจใส่ ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === 'aerobatic_hover' && Math.random() < 0.70) {
        att.gauge = Math.max(0, att.gauge - 10);
        applyEffectToTarget(att, { type: 'debuff_hit', value: 15, duration: 2 }, true);
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] ลมหมุนผาดแผลง ตัดเกจ ${att.name} -10 & ลด HIT 15)`;
      }
      const ev: TurnEvent = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: att.name,
        targetName: def.name,
        actionType,
        actionName,
        skillTier: sk?.tier,
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: true,
        elementMult: 1,
        appliedEffects: [],
        message: `[เทิร์น ${this.turn}] ${att.name} ใช้ [${actionName}] โจมตี ${def.name} แต่พลาด (MISS)!${dodgeNote}`,
      };
      this.recordEvent(events, ev);
      return;
    }

    let mult = baseDamageMult;
    const bonusIf = (sk as { bonusIfTargetHas?: { status: string; extraMult: number } } | undefined)?.bonusIfTargetHas;
    if (this.options.enableSkillEffects && bonusIf) {
      const condMet =
        bonusIf.status === 'burn_or_poison'
          ? hasStatus(def, 'burn') || hasStatus(def, 'poison')
          : hasStatus(def, bonusIf.status);
      if (condMet) mult *= 1 + bonusIf.extraMult;
    }
    if (this.options.enableAbilities && att.abilityId === 'oceanic_surge' && att.sp >= att.baseStats.maxSp * 0.50 && (skillElement === 'water' || att.element === 'water')) {
      mult *= 1.20;
      appliedEffects.push(`Ability [${att.abilityName}] จ้าวคลั่งสมุทร (SP≥50%) ดาเมจน้ำ +20%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'glacial_fang_hunt' && (hasStatus(def, 'freeze') || hasStatus(def, 'ice_skin'))) {
      mult *= 1.30;
      appliedEffects.push(`Ability [${att.abilityName}] ขยี้ศัตรูแช่แข็ง/Ice Skin ดาเมจ +30%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'caustic_venom_aura' && hasStatus(def, 'poison')) {
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] ไอกรดพิษขยี้เป้าหมายติดพิษ ดาเมจ +25%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'celestial_scales' && Math.random() < 0.60) {
      applyEffectToTarget(att, { type: 'buff_atk', value: 0.10, duration: 2 }, true);
      applyEffectToTarget(att, { type: 'buff_spd', value: 0.10, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) ATK/SPD+10%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'pack_hunter' && def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.60) {
      mult *= 1.20;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) ดาเมจ +20%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'loyal_guardian' && Math.random() < 0.55) {
      const h = att.baseStats.maxHp * 0.04;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      applyEffectToTarget(att, { type: 'buff_def', value: 0.10, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) ฟื้น +${Math.round(h)} HP & DEF+10%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'warhorse_gallop' && Math.random() < 0.50) {
      mult *= 1.10;
      applyEffectToTarget(att, { type: 'buff_spd', value: 0.12, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) ควบทะยาน ดาเมจ+10%/SPD+12%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'plague_nibble') {
      if (Math.random() < 0.55) {
        const res = applyEffectToTarget(def, { type: 'poison', duration: 3 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (55%) ${res}`);
      }
      if (hasStatus(def, 'poison')) {
        def.sp = Math.max(0, def.sp - 10);
        appliedEffects.push(`Ability [${att.abilityName}] กัดแทะตัด SP −10`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'neurotoxic_stinger' && hasStatus(def, 'poison') && Math.random() < 0.65) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) เหล็กในพิษอัมพาต ดาเมจ+18%`);
      if (Math.random() < 0.50) {
        const res = applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] ${res}`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'neurotoxin_fang') {
      if (hasStatus(def, 'poison')) {
        mult *= 1.10;
        appliedEffects.push(`Ability [${att.abilityName}] พิษซ้ำแผล ดาเมจ+10%`);
      }
      if (Math.random() < 0.50) {
        const res = applyEffectToTarget(def, { type: 'poison', duration: 3 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) ${res}`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'kitsune_illusion' && Math.random() < 0.45) {
      mult *= 1.06;
      def.gauge = Math.max(0, def.gauge - 5);
      appliedEffects.push(`Ability [${att.abilityName}] (45%) ลดเกจศัตรู 5 & ดาเมจ+6%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'solar_stash' && Math.random() < 0.55) {
      const h = att.baseStats.maxHp * 0.03;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 12);
      healed += h;
      spChanged += 12;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) ฟื้น +12 SP & +${Math.round(h)} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === 'dazzling_plume') {
      if (Math.random() < 0.60) {
        const res = applyEffectToTarget(def, { type: 'debuff_atk', value: 0.12, duration: 2 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (60%) ${res}`);
      }
      if (hasStatus(def, 'blind')) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] เป้าหมายตาบอด ดาเมจ+18%`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'polar_roar' && (hasStatus(def, 'slow') || hasStatus(def, 'freeze'))) {
      if (Math.random() < 0.65) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] (65%) ซ้ำแผลไอเย็น ดาเมจ+18%`);
      }
      if (Math.random() < 0.50) {
        const res = applyEffectToTarget(def, { type: 'freeze', duration: 1 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) ${res}`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'vampiric_sonar' && Math.random() < 0.55) {
      const h = att.baseStats.maxHp * 0.05;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      def.sp = Math.max(0, def.sp - 8);
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 8);
      spChanged += 8;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) ดูดเลือด +${Math.round(h)} HP & ดูด SP ±8`);
    }
    if (this.options.enableAbilities && att.abilityId === 'sticky_tongue_splash' && Math.random() < 0.55) {
      const res = applyEffectToTarget(def, { type: 'slow', duration: 2 }, true);
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
      spChanged += 10;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) ${res ?? 'สโลว์'} & ฟื้น +10 SP`);
    }
    if (this.options.enableAbilities && att.abilityId === 'thunder_sprint' && Math.random() < 0.60) {
      mult *= 1.12;
      applyEffectToTarget(att, { type: 'buff_cri', value: 12, duration: 2 }, true);
      att.gauge = Math.min(100, att.gauge + 8);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) ดาเมจ+12%, CRI+12% & เกจ +8`);
    }
    let shadowProc = false;
    if (this.options.enableAbilities && att.abilityId === 'shadow_predator' && Math.random() < 0.60) {
      mult *= 1.16;
      shadowProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) ขย้ำไร้เงา ดาเมจ+16% & ดูดเลือด 12%`);
    }
    let sharkAbProc = false;
    if (this.options.enableAbilities && att.abilityId === 'blood_frenzy') {
      if (Math.random() < 0.60) {
        sharkAbProc = true;
        applyEffectToTarget(att, { type: 'buff_atk', value: 0.12, duration: 2 }, true);
        appliedEffects.push(`Ability [${att.abilityName}] (60%) AB+15% & ATK+12%`);
      }
      if (def.hp < def.baseStats.maxHp * 0.65) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] ได้กลิ่นเลือด ดาเมจ+18%`);
      }
    }
    let falconAbProc = false;
    if (this.options.enableAbilities && att.abilityId === 'supersonic_dive' && attStats.spd > defStats.spd && Math.random() < 0.60) {
      mult *= 1.18;
      falconAbProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) โฉบความเร็วเสียง ดาเมจ+18% & AB+12%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'monkey_acrobat' && attStats.spd > defStats.spd && Math.random() < 0.60) {
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) วานรโหนว่องไว ดาเมจ+25%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'taunting_ram' && Math.random() < 0.50) {
      applyEffectToTarget(def, { type: 'debuff_hit', value: 15, duration: 2 }, true);
      applyEffectToTarget(def, { type: 'debuff_spd', value: 0.12, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) ขวิดยั่วยุ ลด HIT 15 & ลด SPD 12%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'pyro_toxin_aura') {
      if (hasStatus(def, 'burn')) {
        mult *= 1.20;
        appliedEffects.push(`Ability [${att.abilityName}] ซ้ำแผลเผาไหม้ ดาเมจ+20%`);
      }
      if (Math.random() < 0.60) {
        const res = applyEffectToTarget(def, { type: 'root', duration: 2 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (60%) ตรึงศัตรู (${res})`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'solar_resonance' && (skillElement === 'fire' || att.element === 'fire') && Math.random() < 0.60) {
      const h = att.baseStats.maxHp * 0.05;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      att.gauge = Math.min(100, att.gauge + 10);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) เพลิงคืนชีพ ฟื้น +${Math.round(h)} HP & เกจ +10`);
    }
    if (this.options.enableAbilities && att.abilityId === 'frenzy_bite' && def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.60) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) คลั่งกลิ่นคาวเลือด ดาเมจ+18% & CRI+10%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'death_roll_jaw' && Math.random() < 0.65) {
      mult *= 1.15;
      applyEffectToTarget(def, { type: 'debuff_hit', value: 12, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) กระชากร่าง ดาเมจ+15% & ลด HIT 12`);
    }
    if (this.options.enableAbilities && att.abilityId === 'piercing_bill' && attStats.spd > defStats.spd && Math.random() < 0.60) {
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) ดาบแทงความเร็วสูง ดาเมจ+25%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'ink_cloud_grasp' && Math.random() < 0.50) {
      const res = applyEffectToTarget(def, { type: 'root', duration: 2 }, true);
      if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) หนวดรัดตรึง (${res})`);
    }
    if (this.options.enableAbilities && att.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
      applyEffectToTarget(def, { type: 'paralysis', duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) สัมผัสกัลปังหาพิษชา ปล่อยเข็มพิษเนมาโทซิสต์ ติดอัมพาต 2 เทิร์น & ตัดเกจ -8`);
    }
    if (this.options.enableAbilities && att.abilityId === 'woodpecker_drill_beak' && Math.random() < 0.60) {
      mult *= 1.15;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) สว่านวายุ ดาเมจ+15%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'shockwave_double_kick' && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) คลื่นกระแทก ดาเมจ+18% & ตัดเกจ -8`);
    }
    if (this.options.enableAbilities && att.abilityId === 'cassowary_dagger_claw' && Math.random() < 0.65) {
      mult *= 1.15;
      applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) กรงเล็บมีดดาบ ดาเมจ+15% & ติดเลือดไหล (2 เทิร์น)`);
    }
    if (this.options.enableAbilities && att.abilityId === 'cunning_dark_wings' && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'debuff_hit', value: 12, duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      att.gauge = Math.min(100, att.gauge + 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) เล่ห์ปีกทมิฬ ลด HIT 12 & ชิงเกจ 6 แต้ม`);
    }
    if (this.options.enableAbilities && att.abilityId === 'claw_break_stone' && Math.random() < 0.60) {
      mult *= 1.15;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) กรงเล็บทลายศิลา ดาเมจ+15%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'gorilla_ground_slam' && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 10);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) กำปั้นศิลาทุบพสุธา ดาเมจ+18% & ตัดเกจ -10`);
    }
    if (this.options.enableAbilities && att.abilityId === 'pitfall_trap' && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'slow', duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) หลุมพรางดินทรุด สโลว์ & ตัดเกจศัตรู -6`);
    }
    if (this.options.enableAbilities && att.abilityId === 'quicksand_vortex' && Math.random() < 0.50) {
      const res = applyEffectToTarget(def, { type: 'root', duration: 2 }, true);
      if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) วังวนทรายดูดกลืน (${res})`);
    }
    if (this.options.enableAbilities && att.abilityId === 'loyal_guardian' && Math.random() < 0.60) {
      mult *= 1.15;
      const h = att.baseStats.maxHp * 0.04;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) กัดขย้ำ ดาเมจ+15% & ฟื้น +${Math.round(h)} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === 'titan_antler_charge' && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) เขามหายักษ์ ดาเมจ+18% & ตัดเกจ -8`);
    }
    if (this.options.enableAbilities && att.abilityId === 'vine_tongue_catch' && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'slow', duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) ลิ้นเถาวัลย์ สโลว์ & ตัดเกจ -6`);
    }
    if (this.options.enableAbilities && att.abilityId === 'thousand_leg_fang' && hasStatus(def, 'poison') && Math.random() < 0.60) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) เขี้ยวร้อยขากัดซ้ำพิษ ดาเมจ+18%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'toxic_scale_flutter' && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'slow', duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) ละอองเกล็ดปีกพิษ สโลว์ & ตัดเกจ -6`);
    }
    if (this.options.enableAbilities && att.abilityId === 'ice_floe_hunter' && (hasStatus(def, 'slow') || hasStatus(def, 'freeze')) && Math.random() < 0.60) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) ขย้ำเป้าหมายเยือกแข็ง ดาเมจ+18%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'frozen_bone_crusher' && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) บดกระดูกเยือกแข็ง ดาเมจ+18% & ตัดเกจ -8`);
    }
    if (this.options.enableAbilities && att.abilityId === 'apex_polar_dominion' && (hasStatus(def, 'slow') || hasStatus(def, 'freeze')) && Math.random() < 0.65) {
      mult *= 1.20;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) ราชันย์อุ้งตีนหิมะคลั่ง ดาเมจ+20%`);
      if (Math.random() < 0.50) {
        applyEffectToTarget(def, { type: 'freeze', duration: 1 }, true);
        appliedEffects.push(`แช่แข็งศัตรู (1 เทิร์น)`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'blizzard_wing_flurry' && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'slow', duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) สะบัดปีกเกล็ดหิมะ สโลว์ & ตัดเกจ -6`);
    }
    if (this.options.enableAbilities && att.abilityId === 'screeching_sea_gale' && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'debuff_hit', value: 12, duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      att.gauge = Math.min(100, att.gauge + 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) เสียงโต้ลมทะเล ลด HIT 12 & ชิงเกจ 6 แต้ม`);
    }
    if (this.options.enableAbilities && att.abilityId === 'night_tap_confusion' && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'slow', duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) เคาะจังหวะรัตติกาล สโลว์ & ตัดเกจศัตรู -6`);
    }
    if (this.options.enableAbilities && att.abilityId === 'devil_bone_crusher_jaw' && Math.random() < 0.60) {
      mult *= 1.15;
      applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) กรามปีศาจ ดาเมจ+15% & ติดเลือดไหล (2 เทิร์น)`);
    }
    if (this.options.enableAbilities && att.abilityId === 'carrion_hunter_gaze' && def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.65) {
      mult *= 1.18;
      const ls = (attStats.atk * mult) * 0.12;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
      healed += ls;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) แร้งดำล่าซาก ดาเมจ+18% & ดูดเลือด +${Math.round(ls)} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === 'sand_stealth_claw' && Math.random() < 0.50) {
      applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) กรงเล็บทรายร้อน ทำให้เป้าหมายติดเลือดไหล (2 เทิร์น)`);
    }
    if (this.options.enableAbilities && att.abilityId === 'frilled_sun_flare' && Math.random() < 0.50) {
      applyEffectToTarget(def, { type: 'blind', duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) แผงคอแสงวาบ ลดแม่นยำ HIT/ตาบอด 2 เทิร์น`);
    }
    if (this.options.enableAbilities && att.abilityId === 'cavitation_bubble_burst' && Math.random() < 0.50) {
      def.sp = Math.max(0, def.sp - 15);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) คลื่นกระแทกพลาสม่า ตัด SP ศัตรู -15`);
    }
    if (this.options.enableAbilities && att.abilityId === 'supersonic_dash_mandibles' && attStats.spd > defStats.spd && Math.random() < 0.55) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) กรามสายฟ้าเหนือเสียง ดาเมจ+18%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'galvanic_shock_pulse' && Math.random() < 0.50) {
      applyEffectToTarget(def, { type: 'slow', duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) คลื่นประจุไฟฟ้า สโลว์ & ตัดเกจ -6`);
    }
    if (this.options.enableAbilities && att.abilityId === 'motion_dazzle_stripes' && Math.random() < 0.50) {
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) ลายพรางสลับสายฟ้า ตัดเกจ -8`);
    }

    let bonusCri = (sk as { bonusCri?: number } | undefined)?.bonusCri ?? 0;
    if (this.options.enableAbilities && att.abilityId === 'infrared_heat_strike' && def.effects.length > 0) {
      bonusCri += 25;
      appliedEffects.push(`Ability [${att.abilityName}] เนตรความร้อน เล็งเป้าหมายติดสถานะ CRI+25%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'solar_apex_dive' && this.turn <= 2) {
      bonusCri += 100;
      appliedEffects.push(`Ability [${att.abilityName}] ดิ่งเวหาผ่าตะวัน การันตีคริติคอล 100%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'pack_hunter') bonusCri += 8;
    if (this.options.enableAbilities && att.abilityId === 'ambush_predator') bonusCri += 10;
    if (this.options.enableAbilities && att.abilityId === 'shadow_predator') bonusCri += 10;
    if (this.options.enableAbilities && att.abilityId === 'frenzy_bite' && def.hp < def.baseStats.maxHp * 0.60) bonusCri += 10;
    if (this.options.enableAbilities && att.abilityId === 'hawk_eye' && attStats.spd > defStats.spd && Math.random() < 0.55) {
      bonusCri += 10;
      mult *= 1.30;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) โฉบเวหา CRI+10%/ดาเมจ+30%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'silent_night_owl' && Math.random() < 0.60) {
      applyEffectToTarget(def, { type: 'debuff_def', value: 0.15, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) โฉบเวหา ลด DEF ศัตรู 15%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'twin_scythe_strike' && Math.random() < 0.50) {
      bonusCri += 8;
      mult *= 1.10;
      appliedEffects.push(`Ability [${att.abilityName}] (50%) เคียวคู่ฟันซ้ำ CRI+8%/ดาเมจ+10%`);
    }
    let cheetahProc = false;
    if (this.options.enableAbilities && att.abilityId === 'cheetah_sprint_burst' && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      cheetahProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) สปรินต์พริบตา CRI+15% & CRI DMG+20%`);
    }
    let cougarProc = false;
    if (this.options.enableAbilities && att.abilityId === 'cliff_stalker' && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      cougarProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) นักล่าซอกหินผา CRI+15% & CRI DMG+20%`);
    }
    let ocelotProc = false;
    if (this.options.enableAbilities && att.abilityId === 'bush_ambush' && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      ocelotProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) ซุ่มล่าพงพุ่ม CRI+15% & CRI DMG+20%`);
    }
    let blackWidowProc = false;
    if (this.options.enableAbilities && att.abilityId === 'hourglass_ambush' && hasStatus(def, 'poison') && Math.random() < 0.65) {
      bonusCri += 20;
      blackWidowProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) ซุ่มสังหารนาฬิกาทราย CRI+20% & CRI DMG+25%`);
    }
    let lynxProc = false;
    if (this.options.enableAbilities && att.abilityId === 'snowshoe_stalker' && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      lynxProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) ย่างก้าวอุ้งตีนหิมะ CRI+15% & CRI DMG+20%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'mind_stalker') {
      bonusCri += 15;
      if (def.hp < def.baseStats.maxHp * 0.35) {
        mult *= 1.25;
        appliedEffects.push(`Ability [${att.abilityName}] สายตานักล่าไร้เงา ดาเมจปลิดชีพ+25%`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'cliff_resolve' && att.hp < att.baseStats.maxHp * 0.40) {
      mult *= 1.20;
      appliedEffects.push(`Ability [${att.abilityName}] จิตตั้งมั่นยอดผา ดาเมจ+20%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'apex_telekinesis' && att.element === 'psychic') {
      mult *= 1.15;
      appliedEffects.push(`Ability [${att.abilityName}] สัมผัสเพชฌฆาต ดาเมจพลังจิต+15%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'dazzling_plume') {
      if (Math.random() < 0.60) {
        applyEffectToTarget(def, { type: 'debuff_atk', value: 0.12, duration: 2 }, true);
      }
      if (hasStatus(def, 'confusion') || hasStatus(def, 'blind')) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] รำแพนหางสะกดภพ ศัตรูติดสับสน/ตาบอด ดาเมจ+18%`);
      }
    }
    if (actionType === 'normal' && this.options.enableAbilities && att.abilityId === 'mesmerizing_gaze' && Math.random() < 0.25) {
      applyEffectToTarget(def, { type: 'blind', duration: 1 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (25%) ภาพลวงตาตาหวาน ทำให้ศัตรูตาบอด 1 เทิร์น`);
    }
    if (this.options.enableAbilities && att.abilityId === 'psychic_bond' && (actionType === 'skill' || actionType === 'signature')) {
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 3);
    }
    if (this.options.enableAbilities && att.abilityId === 'psionic_spirit_orbs' && (actionType === 'skill' || actionType === 'signature')) {
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
    let isCrit = Math.random() * 100 < (attStats.cri + bonusCri);
    if (actionType === 'signature' && att.id === 'garuda') {
      isCrit = true;
    }
    if (hasStatus(def, 'sleep')) {
      isCrit = true;
      mult *= skillsData.statusRules.sleep.wakeDmgMult;
      def.effects = def.effects.filter(e => e.type !== 'sleep');
      appliedEffects.push('💤 ตื่นจากนิทรา! (Wake-up Strike: คริติคอล 100% & ดาเมจ +30%)');
    }

    // Cat ability: 20% chance to dodge critical hit completely
    if (isCrit && this.options.enableAbilities && def.abilityId === 'nine_lives' && Math.random() < 0.20) {
      const h = def.baseStats.maxHp * 0.08;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      const ev: TurnEvent = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: att.name,
        targetName: def.name,
        actionType,
        actionName,
        skillTier: sk?.tier,
        damage: 0,
        healed: Math.round(h),
        shieldGained: 0,
        isCrit: false,
        isMiss: true,
        elementMult: 1,
        appliedEffects: [`Ability [${def.abilityName}] หลบคริติคอล!`],
        message: `[เทิร์น ${this.turn}] ${def.name} แสดงผล Ability [${def.abilityName}] หลบการโจมตีคริติคอลของ ${att.name} ได้พริ้วไหว (+${Math.round(h)} HP)!`,
      };
      this.recordEvent(events, ev);
      return;
    }

    let bonusAb = (sk as { bonusAb?: number } | undefined)?.bonusAb ?? 0;
    if (this.options.enableAbilities && att.abilityId === 'twin_scythe_strike') {
      bonusAb += 8;
    }
    if (this.options.enableAbilities && att.abilityId === 'shadow_predator') {
      bonusAb += 10;
    }
    if (sharkAbProc) bonusAb += 15;
    if (falconAbProc) bonusAb += 12;
    if (this.options.enableAbilities && att.abilityId === 'neurotoxic_stinger' && hasStatus(def, 'poison')) {
      bonusAb += 15;
    }
    if (this.options.enableAbilities && att.abilityId === 'solar_apex_dive' && this.turn <= 2) {
      bonusAb += 25;
    }
    // SS Assassin offensive conditional abilities
    if (this.options.enableAbilities && att.abilityId === 'seismic_trapdoor_ambush' && (hasStatus(def, 'root') || hasStatus(def, 'slow') || hasStatus(def, 'stone_curse'))) {
      mult *= 1.30;
      bonusCri += 20;
      appliedEffects.push(`Ability [${att.abilityName}] ขย้ำเป้าหมายติดพันธนาการ (+30% ดาเมจ & +20% คริ)`);
    }
    let krakenLs = false;
    if (this.options.enableAbilities && att.abilityId === 'abyssal_ink_camouflage' && (hasStatus(def, 'blind') || hasStatus(def, 'root'))) {
      mult *= 1.30;
      krakenLs = true;
      appliedEffects.push(`Ability [${att.abilityName}] จู่โจมจากเงามืด (+30% ดาเมจ & ดูดเลือด 18%)`);
    }
    if (this.options.enableAbilities && att.abilityId === 'sun_chaser_predator' && (hasStatus(def, 'burn') || def.effects.some(e => e.type.startsWith('buff_')))) {
      bonusCri += 20;
      att.gauge = Math.min(100, att.gauge + 15);
      appliedEffects.push(`Ability [${att.abilityName}] นักล่าสุริยะคราสคลั่ง (+20% คริ & เกจ +15)`);
    }
    if (this.options.enableAbilities && att.abilityId === 'flash_lightning_fang' && attStats.spd > defStats.spd) {
      bonusCri += 15;
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] ความเร็วเหนือแสง (+15% คริ & +25% ดาเมจสายฟ้า)`);
    }
    let wendigoLs = false;
    if (this.options.enableAbilities && att.abilityId === 'blizzard_bloodlust_stalker') {
      if (def.hp < def.baseStats.maxHp * 0.50) {
        mult *= 1.28;
        appliedEffects.push(`Ability [${att.abilityName}] กระหายเลือดเป้าหมายเลือดน้อย (+28% ดาเมจ)`);
      }
      if (isCrit) {
        wendigoLs = true;
        applyEffectToTarget(att, { type: 'buff_atk', value: 0.15, duration: 2 }, true);
        applyEffectToTarget(att, { type: 'buff_spd', value: 0.15, duration: 2 }, true);
        appliedEffects.push(`Ability [${att.abilityName}] คลั่งหิมะ ดูดเลือด 20% & บัฟ ATK/SPD +15%`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'jungle_mirage_pounce' && isCrit && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: 'root', duration: 1 }, true);
      applyEffectToTarget(att, { type: 'buff_cri', value: 15, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] เถาวัลย์อาคมตรึงร่าง 1 เทิร์น & บัฟ CRI +15%`);
    }
    if (this.options.enableAbilities && att.abilityId === 'crimson_scorpion_barbs') {
      if (Math.random() < 0.65) {
        applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 }, true);
        appliedEffects.push(`Ability [${att.abilityName}] (65%) เหล็กในฝังพิษ 2 เทิร์น`);
      }
      if (hasStatus(def, 'poison')) {
        bonusCri += 18;
        bonusAb += 20;
        appliedEffects.push(`Ability [${att.abilityName}] ขย้ำเป้าหมายติดพิษ (+18% คริ & +20 AB)`);
      }
    }
    let camazotzLs = false;
    if (this.options.enableAbilities && att.abilityId === 'xibalba_night_reaper') {
      camazotzLs = true;
      if (isCrit && def.effects.some(e => !e.type.startsWith('buff_') && e.type !== 'shield')) {
        mult *= 1.25;
        appliedEffects.push(`Ability [${att.abilityName}] คลื่นโซนาร์บั่นเศียร (+25% คริเป้าหมายติดสถานะ)`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'phantom_chimera_shroud') {
      const isWeak = def.sp < def.baseStats.maxSp * 0.50 || def.effects.some(e => !e.type.startsWith('buff_') && e.type !== 'shield');
      if (isWeak) {
        mult *= 1.28;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
        appliedEffects.push(`Ability [${att.abilityName}] แทรกซึมม่านหมอก (+28% ดาเมจ & ดูด SP +10)`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === 'ambush_predator' && (isCrit || hasStatus(def, 'burn')) && Math.random() < 0.65) {
      mult *= 1.18;
      bonusAb += 15;
      att.gauge += 10;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) ขย้ำ +18%/เกจ+10`);
    }
    if (isCrit && this.options.enableAbilities && att.abilityId === 'bullet_stinger' && Math.random() < 0.65) {
      const res = applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, true);
      if (res) appliedEffects.push(`Ability [${att.abilityName}] (65%) เหล็กในกระสุนเพลิง ${res}`);
    }
    let orcaLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === 'apex_pod_hunter' && Math.random() < 0.65) {
      orcaLs = true;
      applyEffectToTarget(def, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) ฉีกสมุทร ดูดเลือด 15% & ลด SPD 15%`);
    }
    let perentieLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === 'sand_dragon_ambush' && Math.random() < 0.65) {
      perentieLs = true;
      applyEffectToTarget(def, { type: 'debuff_def', value: 0.25, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) มังกรดินซุ่มสังหาร ดูดเลือด 15% & ลด DEF 25%`);
    }
    let cloudedLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === 'canopy_shadow_fang' && Math.random() < 0.65) {
      cloudedLs = true;
      applyEffectToTarget(def, { type: 'debuff_def', value: 0.25, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) กรงเล็บเขี้ยวเงา ดูดเลือด 15% & ลด DEF 25%`);
    }
    let deathstalkerLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === 'deathstalker_stinger' && Math.random() < 0.70) {
      deathstalkerLs = true;
      mult *= 1.25;
      applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (70%) เหล็กในมัจจุราช ดาเมจพิษระเบิด +25% & ดูดเลือด 15%`);
    }
    let snowLeopardLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === 'ghost_of_frozen_peaks' && Math.random() < 0.70) {
      snowLeopardLs = true;
      mult *= 1.25;
      applyEffectToTarget(def, { type: 'freeze', duration: 1 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (70%) ภูตเงาผาหิมะ ดาเมจเยือกแข็ง +25%, ดูดเลือด 15% & แช่แข็ง`);
    }
    let jaguarLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === 'skull_piercing_fang' && Math.random() < 0.65) {
      jaguarLs = true;
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) เขี้ยวเงาทะลวงจุดตาย ดาเมจ+25% & ดูดเลือด 15%`);
    }
    if (isCrit && this.options.enableAbilities && att.abilityId === 'golden_heavenly_steed' && Math.random() < 0.70) {
      def.gauge = Math.max(0, def.gauge - 15);
      appliedEffects.push(`Ability [${att.abilityName}] (70%) ม้าทองคำสวรรค์ ตัดเกจไม้ตายศัตรู -15 แต้ม`);
    }
    if (isCrit && this.options.enableAbilities && att.abilityId === 'tufted_ear_spring' && Math.random() < 0.60) {
      att.gauge = Math.min(100, att.gauge + 15);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) สปริงพู่หูคาราคัล ได้รับเกจไม้ตาย +15 แต้ม`);
    }
    let mambaLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === 'lightning_viper_strike' && Math.random() < 0.60) {
      mambaLs = true;
      mult *= 1.20;
      applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 3 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) เขี้ยวอสรพิษสายฟ้า ดาเมจ+20%, เลือดไหล 3 เทิร์น & ดูดเลือด 12%`);
    }

    let pierce = Math.max(0, Math.min(0.7, (attStats.ab + bonusAb - defStats.block) / 100));
    if (this.options.enableAbilities && def.abilityId === 'toxic_carapace_spikes') {
      pierce *= 0.60;
    }
    let effDef = defStats.def * (1 - pierce);
    if (actionType === 'signature' && att.id === 'nine_tailed_fox') {
      effDef *= 0.75;
      appliedEffects.push('ทะลวงเกราะ 25% (Ignore DEF 25%)');
    }
    const K = heroesData.statFormula.defConstantK;
    const elemMult =
      skillElement === 'neutral'
        ? 1.0
        : getElementMultiplier(att.element, getEffectiveElement(def), attTeam.side, this.options.forcedElementAdvantage);

    const baseAtkStat = (sk && (sk as any).useDefForAtk) ? attStats.def : attStats.atk;
    if (sk && (sk as any).useDefForAtk) {
      appliedEffects.push(`🛡️ เกราะกระแทก: ใช้ค่า DEF (${attStats.def}) คำนวณพลังโจมตีแทน ATK`);
    }
    let dmg = baseAtkStat * mult * (K / (K + effDef)) * elemMult * (0.95 + Math.random() * 0.1);
    if (isCrit) {
      let critDmgMult = attStats.criDmg + (cheetahProc || cougarProc || ocelotProc || lynxProc ? 0.20 : 0) + (blackWidowProc ? 0.25 : 0) + (this.options.enableAbilities && att.abilityId === 'mind_focus' && def.effects.length > 0 ? 0.20 : 0);
      if (this.options.enableAbilities && def.abilityId === 'abominable_resilience') {
        critDmgMult *= 0.65;
        appliedEffects.push(`${def.name} [${def.abilityName}] กายาอสูรหิมะ ลดดาเมจคริติคอลเหลือ 65%`);
      }
      dmg *= critDmgMult;
    }

    const isSameElemSkill =
      actionType === 'skill' &&
      this.options.enableSameElementBonus &&
      sk &&
      sk.element === att.element;
    if (isSameElemSkill) {
      dmg *= 1 + elementsData.multipliers.sameElementDamageBonus;
    }

    if (actionType === 'skill' && sk) {
      const skillLevels = attTeam.side === 'A' ? this.options.skillLevelsA : this.options.skillLevelsB;
      const lvl = skillLevels?.[sk.id] ?? 1;
      if (lvl > 1) {
        const lvlBonus = lvl === 5 ? 1.25 : 1 + (lvl - 1) * 0.05;
        dmg *= lvlBonus;
      }
    }

    if (this.options.enableSkillEffects && hasStatus(def, 'wine_mist') && (skillElement === 'fire' || att.element === 'fire')) {
      dmg *= 1.30;
      appliedEffects.push('สุราติดไฟ (ดาเมจไฟ +30%)');
    }
    if (this.options.enableSkillEffects && hasStatus(att, 'fire_skin') && (skillElement === 'fire' || att.element === 'fire')) {
      dmg *= 1.20;
      appliedEffects.push('ผิวกายเพลิง 🔥 (ดาเมจไฟ +20%)');
    }

    // Defensive abilities
    if (this.options.enableAbilities) {
      if (def.abilityId === 'bronze_furnace_hide') {
        if (skillElement === 'fire' || att.element === 'fire') {
          dmg *= 0.50;
          appliedEffects.push(`${def.name} [${def.abilityName}] กายทองแดงดูดซับไฟ ลดดาเมจไฟ 50%`);
        }
        if (Math.random() < 0.50) {
          const reflect = defStats.atk * 0.25;
          att.hp = Math.max(0, att.hp - reflect);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สะท้อนเพลิงโลหะ ${Math.round(reflect)} ดาเมจใส่ ${att.name}`);
        }
      }
      if (def.abilityId === 'invulnerable_golden_pelt') {
        if (actionType === 'normal' || (sk && sk.element === 'neutral')) {
          dmg *= 0.85;
          appliedEffects.push(`${def.name} [${def.abilityName}] ขนทองคำลดดาเมจกายภาพ 15%`);
        }
      }
      if (def.abilityId === 'nightmare_eater_barrier' && actionType === 'skill') {
        const drainSp = Math.min(att.sp, 6);
        att.sp -= drainSp;
        def.sp = Math.min(def.baseStats.maxSp, def.sp + drainSp);
        appliedEffects.push(`${def.name} [${def.abilityName}] กลืนกินฝันร้าย ดูดซับ SP -${drainSp} จาก ${att.name} คืนตนเอง`);
      }
      if (def.abilityId === 'ironwood_regrowth' && Math.random() < 0.40) {
        const leech = def.baseStats.maxHp * 0.03;
        att.hp = Math.max(0, att.hp - leech);
        def.hp = Math.min(def.baseStats.maxHp, def.hp + leech);
        appliedEffects.push(`${def.name} [${def.abilityName}] (40%) เถาวัลย์พฤกษาดูดเลือด ${Math.round(leech)} HP จาก ${att.name}`);
      }
      if (def.abilityId === 'lightning_conductor_trunk' && dmg > 0) {
        def.sp = Math.min(def.baseStats.maxSp, def.sp + 10);
        const shieldGained = dmg * 0.30;
        applyEffectToTarget(def, { type: 'shield', value: shieldGained / def.baseStats.maxHp, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] เสาล่อฟ้า ฟื้น +10 SP & แปลงดาเมจ 30% (+${Math.round(shieldGained)}) เป็นเกราะ`);
      }
      if (def.abilityId === 'mud_hide' && Math.random() < 0.50) {
        dmg *= 0.75;
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) ลดดาเมจ 25%`);
      }
      if (def.abilityId === 'thick_fat' && Math.random() < 0.45) {
        dmg *= 0.85;
        const h = def.baseStats.maxHp * 0.025;
        def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
        appliedEffects.push(`${def.name} [${def.abilityName}] (45%) ลดดาเมจ 15% & ฟื้น +${Math.round(h)} HP`);
      }
      if (def.abilityId === 'belly_slide_frost') {
        dmg *= 0.92;
        if (Math.random() < 0.55) {
          applyEffectToTarget(att, { type: 'slow', duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (55%) ลดดาเมจ 8% & สะท้อนสโลว์ใส่ ${att.name}`);
        }
      }
      if (def.abilityId === 'grizzly_berserk' && def.hp < def.baseStats.maxHp * 0.65 && Math.random() < 0.65) {
        applyEffectToTarget(def, { type: 'buff_atk', value: 0.18, duration: 2 }, true);
        applyEffectToTarget(def, { type: 'shield', value: 0.05, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (65%) ATK+18% & เกราะ +5%`);
      }
      if (def.abilityId === 'quicksand_vortex' && Math.random() < 0.50) {
        applyEffectToTarget(att, { type: 'slow', duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) ทรายดูดกลืน สโลว์ใส่ ${att.name}`);
      }
      if (def.abilityId === 'moss_coat') {
        dmg *= 0.90;
        if (Math.random() < 0.50) {
          const h = def.baseStats.maxHp * 0.03;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) มอสลดดาเมจ 10% & ฟื้น +${Math.round(h)} HP`);
        }
      }
      if (def.abilityId === 'bamboo_fortress') {
        dmg *= 0.90;
        if (def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.05;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: 'buff_def', value: 0.25, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) ปราการไผ่ ฟื้น +${Math.round(h)} HP & DEF+25%`);
        }
      }
      if (def.abilityId === 'bufotoxin_skin') {
        dmg *= 0.90;
        if (Math.random() < 0.55) {
          applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (55%) ยางพิษลดดาเมจ 10% & แพร่พิษใส่ ${att.name}`);
        }
      }
      if (def.abilityId === 'caustic_venom_aura' && def.hp > 0 && Math.random() < 0.40) {
        applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (40%) ไอกรดพิษแพร่พิษใส่ ${att.name}`);
      }
      if (def.abilityId === 'psionic_spirit_orbs' && def.hp > 0 && Math.random() < 0.35) {
        const confRes = applyEffectToTarget(att, { type: 'confusion', duration: 2 }, true);
        if (confRes) {
          appliedEffects.push(`${def.name} [${def.abilityName}] (35%) ลูกแก้วสะกดจิตสะท้อนใส่ ${att.name} ${confRes}`);
        }
      }
      if (def.abilityId === 'stone_spine_barb') {
        dmg *= 0.90;
        if (Math.random() < 0.65) {
          const reflect = dmg * 0.20;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) หนามหินลดดาเมจ 10%, สะท้อนพิษ ${Math.round(reflect)} & พิษใส่ ${att.name}`);
        }
      }
      if (def.abilityId === 'blubber_ice_fortress') {
        dmg *= 0.90;
        if (def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.05;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: 'shield', value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) ปราการไขมัน ฟื้น +${Math.round(h)} HP & เกราะน้ำแข็ง 15%`);
        }
      }
      if (isCrit && def.abilityId === 'shell_retreat' && Math.random() < 0.70) {
        dmg *= 0.70;
        applyEffectToTarget(def, { type: 'shield', value: 0.05, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (70%) ลดคริ 30% & เกราะ +5%`);
      }
      if (def.abilityId === 'horn_counter') {
        dmg *= 0.94;
        if (Math.random() < 0.50) {
          const reflect = dmg * 0.12;
          att.hp -= reflect;
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สะท้อน ${Math.round(reflect)}`);
        }
      }
      if (def.abilityId === 'celestial_scales') {
        dmg *= 0.88;
      }
      if (def.abilityId === 'ancient_bulwark') {
        dmg *= 0.88;
        if (def.hp < def.baseStats.maxHp * 0.65 && !hasStatus(def, 'energy_coat')) {
          applyEffectToTarget(def, { type: 'energy_coat', duration: 3 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] กายาจิตนิรันดร์ HP < 65% ปลดปล่อยเกราะพลังงาน (Energy Coat 3 เทิร์น)`);
        }
      }
      if (def.abilityId === 'electro_sense' && Math.random() < 0.45) {
        applyEffectToTarget(def, { type: 'energy_coat', duration: 2 }, true);
        applyEffectToTarget(att, { type: 'debuff_hit', value: 10, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (45%) สัมผัสกระแสจิตคุ้มภัย กางเกราะพลังงาน (Energy Coat 2 เทิร์น) & ลด HIT ${att.name} 10 แต้ม`);
      }
      if (def.abilityId === 'immortal_serpent' && def.hp < def.baseStats.maxHp * 0.5 && Math.random() < 0.75) {
        dmg *= 0.82;
        appliedEffects.push(`${def.name} [${def.abilityName}] (75%) ลดดาเมจ 18%`);
      }
      if (def.abilityId === 'bioluminescent_flash' && Math.random() < 0.50) {
        const res = applyEffectToTarget(att, { type: 'blind', duration: 1 }, true);
        if (res) appliedEffects.push(`${def.name} [${def.abilityName}] (50%) แสงกระพริบตาบอดใส่ ${att.name}`);
      }
      if (def.abilityId === 'glacial_mucus') {
        dmg *= 0.92;
        if (Math.random() < 0.50) {
          applyEffectToTarget(att, { type: 'slow', duration: 2 }, true);
          const h = def.baseStats.maxHp * 0.02;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) ลดดาเมจ 8%, สโลว์ ${att.name} & ฟื้น +${Math.round(h)} HP`);
        }
      }
      if (def.abilityId === 'polar_roar') {
        dmg *= 0.92;
      }
      if (def.abilityId === 'static_quills') {
        dmg *= 0.94;
        if (Math.random() < 0.50) {
          const reflect = dmg * 0.12;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: 'debuff_def', value: 0.10, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สะท้อน ${Math.round(reflect)} & ลด DEF ${att.name} 10%`);
        }
      }
      if (def.abilityId === 'iron_scale_curl' && Math.random() < 0.55) {
        dmg *= 0.82;
        const reflect = dmg * 0.10;
        att.hp -= reflect;
        appliedEffects.push(`${def.name} [${def.abilityName}] (55%) ลดดาเมจ 18% & สะท้อน ${Math.round(reflect)}`);
      }
      if (def.abilityId === 'raging_bull' && def.hp < def.baseStats.maxHp * 0.50 && Math.random() < 0.60) {
        dmg *= 0.85;
        applyEffectToTarget(def, { type: 'buff_def', value: 0.20, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (60%) โกรธเกรี้ยว ลดดาเมจ 15% & บัฟ DEF+20%`);
      }
      if (def.abilityId === 'blazing_tusk_hide') {
        dmg *= 0.90;
        if (Math.random() < 0.50) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          def.gauge = Math.min(100, def.gauge + 6);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) ลดดาเมจ 10%, สะท้อน ${Math.round(reflect)} & เกจ +6`);
        }
      }
      if (def.abilityId === 'submerged_thick_hide') {
        dmg *= 0.90;
        if (def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.04;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: 'buff_def', value: 0.20, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) หนังสะเทินน้ำ ฟื้น +${Math.round(h)} HP & DEF+20%`);
        }
      }
      if (def.abilityId === 'ink_cloud_grasp' && Math.random() < 0.50) {
        const res = applyEffectToTarget(att, { type: 'blind', duration: 1 }, true);
        if (res) appliedEffects.push(`${def.name} [${def.abilityName}] (50%) พ่นหมึกทำให้ ${att.name} ตาบอด`);
      }
      if (def.abilityId === 'nematocyst_paralysis' && Math.random() < 0.50) {
        applyEffectToTarget(att, { type: 'paralysis', duration: 2 }, true);
        att.gauge = Math.max(0, att.gauge - 8);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สัมผัสกัลปังหาพิษชา สะท้อนเข็มพิษเนมาโทซิสต์ ติดอัมพาต 2 เทิร์น & ตัดเกจ ${att.name} -8`);
      }
      if (def.abilityId === 'thick_fur_gale_shield') {
        dmg *= 0.92;
        if (Math.random() < 0.60) {
          applyEffectToTarget(att, { type: 'debuff_atk', value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (60%) ขนหนาต้านพายุ ลดดาเมจ 8% & ลด ATK ${att.name} 15%`);
        }
      }
      if (def.abilityId === 'thick_hide_gale_runner') {
        dmg *= 0.90;
        if (def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.04;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: 'buff_flee', value: 15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) หนังเหนียววิ่งโต้ลม ฟื้น +${Math.round(h)} HP & FLEE+15`);
        }
      }
      if (def.abilityId === 'night_confusion_gaze' && Math.random() < 0.50) {
        att.gauge = Math.max(0, att.gauge - 8);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) ล่อหลอกตัดเกจ ${att.name} -8`);
      }
      if (def.abilityId === 'bone_armor_curl') {
        dmg *= 0.90;
        if (Math.random() < 0.50) {
          const reflect = dmg * 0.12;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: 'debuff_hit', value: 12, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) สะท้อน ${Math.round(reflect)} & ลด HIT ${att.name} 12`);
        }
      }
      if (def.abilityId === 'scavenger_thick_hide') {
        dmg *= 0.92;
        if (def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.04;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: 'buff_def', value: 0.20, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) หนังเหนียวเคี้ยวกระดูก ฟื้น +${Math.round(h)} HP & DEF+20%`);
        }
      }
      if (def.abilityId === 'abyssal_pressure_skull') {
        dmg *= 0.90;
        if (Math.random() < 0.65) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) โซนาร์ทมิฬ สะท้อน ${Math.round(reflect)} & ลด SPD ${att.name} 15%`);
        }
      }
      if (def.abilityId === 'sand_burrow_puff') {
        dmg *= 0.92;
      }
      if (def.abilityId === 'solar_hump_endurance') {
        dmg *= 0.90;
        if (def.hp < def.baseStats.maxHp * 0.60 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.05;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: 'buff_def', value: 0.20, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) โหนกสุริยะ ฟื้น +${Math.round(h)} HP & DEF+20%`);
        }
      }
      if (def.abilityId === 'sacred_white_hide') {
        dmg *= 0.88;
        if (Math.random() < 0.60) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: 'debuff_atk', value: 0.12, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (60%) กายาสุริยะไบซัน สะท้อน ${Math.round(reflect)} & ลด ATK ${att.name} 12%`);
        }
      }
      if (def.abilityId === 'gentle_solar_fleece' && Math.random() < 0.45) {
        applyEffectToTarget(def, { type: 'shield', value: 0.10, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (45%) ปุยขนสุริยะ เกราะ +10%`);
      }
      if (def.abilityId === 'torpedo_discharge') {
        dmg *= 0.90;
        if (Math.random() < 0.60) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: 'debuff_spd', value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (60%) ปล่อยไฟฟ้า สะท้อน ${Math.round(reflect)} & ลด SPD ${att.name} 15%`);
        }
      }
      if (def.abilityId === 'spiral_horn_resonance' && Math.random() < 0.50) {
        applyEffectToTarget(def, { type: 'buff_spd', value: 0.15, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) คลื่นไฟฟ้าสถิต บัฟ SPD+15%`);
      }
    }

    if (hasStatus(def, 'vulnerable')) {
      dmg *= (1 + skillsData.statusRules.vulnerable.extraDmgPct);
      appliedEffects.push('💔 เปราะบาง: รับดาเมจ +25%');
    }

    if (hasStatus(att, 'taunt')) {
      dmg *= (1 - skillsData.statusRules.taunt.dmgReductionPct);
      appliedEffects.push('💢 ยั่วยุ: ดาเมจลดลง 10%');
    }

    if (hasStatus(def, 'bleed')) {
      const bHit = Math.round(def.baseStats.maxHp * skillsData.statusRules.bleed.onHitDamageHpPct);
      def.hp = Math.max(0, def.hp - bHit);
      appliedEffects.push(`🩸 แผลเปิดเลือดไหลซ้ำ -${bHit} HP`);
    }

    if (hasStatus(def, 'elemental_ward') && skillElement !== 'neutral') {
      const wardEf = def.effects.find(e => e.type === 'elemental_ward');
      const redPct = wardEf?.value ?? (skillsData.statusRules as any).elemental_ward?.elemDmgRedPct ?? 0.10;
      dmg *= (1 - redPct);
      appliedEffects.push(`💠 เกราะสลายธาตุ: ลดดาเมจธาตุลง ${Math.round(redPct * 100)}%`);
    }
    if (hasStatus(def, 'iron_fortress')) {
      const fortEf = def.effects.find(e => e.type === 'iron_fortress');
      const redPct = fortEf?.value ?? (skillsData.statusRules as any).iron_fortress?.dmgRedPct ?? 0.15;
      dmg *= (1 - redPct);
      appliedEffects.push(`🏰 ค่ายกลปราการเหล็ก: ลดดาเมจที่ได้รับลง ${Math.round(redPct * 100)}%`);
    }
    if (hasStatus(def, 'iron_body')) {
      const redPct = (skillsData.statusRules as any).iron_body?.finalDmgRedPct ?? 0.30;
      dmg *= (1 - redPct);
      appliedEffects.push(`🦾 กายาเหล็ก: ลดดาเมจสุดท้ายลง ${Math.round(redPct * 100)}%`);
    }

    let remainingDmg = dmg;
    if (def.shield > 0) {
      const absorbed = Math.min(def.shield, remainingDmg);
      def.shield -= absorbed;
      remainingDmg -= absorbed;
      if (def.shield <= 0) {
        def.shield = 0;
        def.effects = def.effects.filter(e => e.type !== 'shield' && e.type !== 'golden_bell_shield');
      }
    }
    if (hasStatus(def, 'energy_coat') && remainingDmg > 0 && def.sp > 0) {
      const coatEf = def.effects.find(e => e.type === 'energy_coat');
      const coatRatio = coatEf?.value ?? (skillsData.statusRules as any).energy_coat?.damageToSpPct ?? 0.40;
      const spDmgMax = Math.round(remainingDmg * coatRatio);
      const spAbsorbed = Math.min(def.sp, spDmgMax);
      def.sp = Math.max(0, def.sp - spAbsorbed);
      remainingDmg -= spAbsorbed;
      appliedEffects.push(`🛡️ Energy Coat: ซับดาเมจ ${spAbsorbed} เข้า SP แทน (เหลือ SP ${Math.round(def.sp)}/${def.baseStats.maxSp})`);
    }
    def.hp -= remainingDmg;

    if (isCrit && this.options.enableAbilities && att.abilityId === 'colossal_tremor') {
      const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
      def.hp = Math.max(0, def.hp - shockwaveDmg);
      appliedEffects.push(`คลื่นกระแทกแผ่นดินไหว 💥 -${shockwaveDmg} HP`);
    }

    if (this.options.enableAbilities && att.abilityId === 'oceanic_surge' && Math.random() < 0.40) {
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
      spChanged += 15;
      appliedEffects.push(`Ability [${att.abilityName}] (40%) ฟื้นฟู +15 SP`);
    }

    if (this.options.enableAbilities && att.abilityId === 'static_discharge' && Math.random() < 0.45) {
      const boltDmg = Math.max(1, Math.round(attStats.atk * 0.30));
      def.hp = Math.max(0, def.hp - boltDmg);
      appliedEffects.push(`สายฟ้าแฉลบผ่าซ้ำ ⚡ -${boltDmg} HP`);
    }

    if (isCrit && this.options.enableAbilities && att.abilityId === 'vacuum_sickle_trinity' && Math.random() < 0.50) {
      const slashDmg = Math.max(1, Math.round(attStats.atk * 0.35));
      def.hp = Math.max(0, def.hp - slashDmg);
      appliedEffects.push(`Ability [${att.abilityName}] คมเคียวสุญญากาศฟันซ้ำ 🌪️ -${slashDmg} HP`);
    }

    if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === 'static_discharge') {
      att.gauge = Math.min(100, att.gauge + 25);
      appliedEffects.push(`Ability [${att.abilityName}] สังหารศัตรูสำเร็จ ได้รับเกจ +25`);
    }

    if (this.options.enableAbilities && att.abilityId === 'psionic_spirit_orbs' && def.hp > 0) {
      const orb = att.effects.find(e => e.type === 'spirit_orb');
      if (orb && (orb.stacks ?? 1) >= 4 && Math.random() < 0.20) {
        att.effects = att.effects.filter(e => e.type !== 'spirit_orb');
        const burstDmg = Math.max(1, Math.round(attStats.atk * 0.90));
        def.hp = Math.max(0, def.hp - burstDmg);
        def.sp = Math.max(0, def.sp - 15);
        appliedEffects.push(`Ability [${att.abilityName}] (20%) ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย 💥 -${burstDmg} HP & ตัด SP -15 (สลายลูกแก้วเริ่มสะสมใหม่)`);
      }
    }

    if (dmg > 0) {
      const defSigCfg = heroesData.signatureByClass[def.rarity];
      def.gauge += defSigCfg.gainOnHit;
    }

    const abilityLs =
      this.options.enableAbilities && att.abilityId === 'glacial_fang_hunt'
        ? 0.12
        : this.options.enableAbilities && att.abilityId === 'duat_soul_eater'
        ? 0.12
        : this.options.enableAbilities && shadowProc
        ? 0.12
        : this.options.enableAbilities && orcaLs
        ? 0.15
        : this.options.enableAbilities && perentieLs
        ? 0.15
        : this.options.enableAbilities && cloudedLs
        ? 0.15
        : this.options.enableAbilities && deathstalkerLs
        ? 0.15
        : this.options.enableAbilities && snowLeopardLs
        ? 0.15
        : this.options.enableAbilities && jaguarLs
        ? 0.15
        : this.options.enableAbilities && mambaLs
        ? 0.12
        : this.options.enableAbilities && krakenLs
        ? 0.18
        : this.options.enableAbilities && wendigoLs
        ? 0.20
        : this.options.enableAbilities && camazotzLs
        ? 0.15
        : 0;
    const lifestealPct = hasStatus(att, 'stone_curse') ? 0 : (((sk as { lifestealPct?: number } | undefined)?.lifestealPct ?? 0) + abilityLs);
    if ((this.options.enableSkillEffects || abilityLs > 0) && lifestealPct > 0 && remainingDmg > 0) {
      const ls = remainingDmg * lifestealPct;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
      healed += ls;
      appliedEffects.push(`ดูดเลือด +${Math.round(ls)}`);
    }

    if (actionType === 'signature' && att.id === 'verdant_hydra' && remainingDmg > 0 && !hasStatus(att, 'stone_curse')) {
      const drain = Math.round(remainingDmg * 0.25);
      att.hp = Math.min(att.baseStats.maxHp, att.hp + drain);
      healed += drain;
      appliedEffects.push(`เก้าเศียรกลืนชีพ: สูบเลือด +${drain} HP`);
    }

    if (this.options.enableAbilities && att.abilityId === 'thorn_regrowth' && remainingDmg > 0 && !hasStatus(att, 'vulnerable')) {
      const sh = Math.round(remainingDmg * 0.15);
      if (sh > 0) {
        att.shield = Math.min(att.baseStats.maxHp * 0.50, att.shield + sh);
        const ex = att.effects.find(e => e.type === 'shield');
        if (ex) ex.duration = Math.max(ex.duration, 2);
        else att.effects.push({ type: 'shield', duration: 2 });
        shieldGained += sh;
        appliedEffects.push(`เกราะหนามพฤกษา +${sh}`);
      }
    }

    if (this.options.enableSkillEffects) {
      if (sk && sk.effects) {
        for (const rawEf of sk.effects) {
          const ef = rawEf as {
            type: string;
            target?: string;
            chance?: number;
            value?: number;
            duration?: number;
            stacks?: number;
            bonusChanceIfSlowed?: number;
          };
          const bonusChance = ef.bonusChanceIfSlowed && hasStatus(def, 'slow') ? ef.bonusChanceIfSlowed : 0;
          const chance = (ef.chance ?? 1.0) + bonusChance;
          if (Math.random() < chance) {
            const tgt = ef.target === 'self' ? att : def;
            const hpBefore = tgt.hp;
            const shBefore = tgt.shield;
            const spBefore = tgt.sp;
            const res = applyEffectToTarget(tgt, ef, this.options.enableAbilities);
            if (res) appliedEffects.push(res);
            healed += Math.max(0, tgt.hp - hpBefore);
            shieldGained += Math.max(0, tgt.shield - shBefore);
            if (tgt === att) spChanged += tgt.sp - spBefore;
          }
        }
      }
      if (meta.sigEffect && Math.random() < (meta.sigEffectChance ?? 0.5)) {
        const isSelf = meta.sigEffect.type.startsWith('buff_') || meta.sigEffect.type === 'shield';
        const tgt = isSelf ? att : def;
        const res = applyEffectToTarget(tgt, meta.sigEffect, this.options.enableAbilities);
        if (res) appliedEffects.push(res);
        if (actionType === 'signature' && att.id === 'squirrel') {
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
          spChanged += 15;
          appliedEffects.push(`ฟื้นฟู +15 SP`);
        }
        if (actionType === 'signature' && att.id === 'firefly') {
          const clRes = applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
          if (clRes) appliedEffects.push(clRes);
        }
        if (actionType === 'signature' && att.id === 'lion') {
          applyEffectToTarget(att, { type: 'buff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'buff_spd', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`คำรามปลุกขวัญ: บัฟทีม ATK+20% & SPD+15% (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'turtle') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`ม่านวารีคุ้มทัพ: เกราะทีม 15% Max HP & ล้าง 1 ดีบัฟ`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === 'signature' && att.id === 'squirrel') {
          applyEffectToTarget(att, { type: 'buff_hit', value: 20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'buff_cri', value: 12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ประกายหางนำทัพ: บัฟทีม HIT+20 & CRI+12% (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'peacock') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'confusion', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`รำแพนแสงสะกดสมรภูมิ: ลด ATK ศัตรู 20% & สับสน 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'snail') {
          applyEffectToTarget(def, { type: 'debuff_spd', value: 0.15, duration: 2 }, this.options.enableAbilities);
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เมือกเหมันต์คุ้มกัน: ลด SPD ศัตรู 15% & เกราะทีม 12%`);
        }
        if (actionType === 'signature' && att.id === 'rabbit') {
          applyEffectToTarget(att, { type: 'buff_spd', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`บัฟ SPD +15%`);
        }
        if (actionType === 'signature' && att.id === 'sea_lion') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          if (Math.random() < 0.40) {
            applyEffectToTarget(def, { type: 'freeze', duration: 1 }, this.options.enableAbilities);
          }
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`สึนามิน้ำแข็ง: สโลว์ + โอกาส 40% แช่แข็ง & เกราะทีม 12%`);
        }
        if (actionType === 'signature' && att.id === 'bat') {
          if (Math.random() < 0.35) {
            applyEffectToTarget(def, { type: 'blind', duration: 1 }, this.options.enableAbilities);
          }
          applyEffectToTarget(def, { type: 'silence', duration: 1 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.08;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          appliedEffects.push(`ฝูงค้างคาว: ตาบอด 35%, ติดใบ้ 1 เทิร์น & ดูดเลือดฮีลทีม +${Math.round(h)} HP`);
        }
        if (actionType === 'signature' && att.id === 'porcupine') {
          if (Math.random() < 0.30) {
            applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          }
          applyEffectToTarget(att, { type: 'buff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`สลัดขนหนามรอบทิศ: โอกาส 30% สตัน & บัฟ DEF+20%`);
        }
        if (actionType === 'signature' && att.id === 'frog') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ลด ATK ศัตรู 15%`);
        }
        if (actionType === 'signature' && att.id === 'pangolin') {
          applyEffectToTarget(def, { type: 'debuff_spd', value: 0.25, duration: 2 }, this.options.enableAbilities);
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ลูกเหล็กกวาดแนวรบ: ลด SPD 25% & เกราะ 20%`);
        }
        if (actionType === 'signature' && att.id === 'deer') {
          const h = att.baseStats.maxHp * 0.12;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
          spChanged += 15;
          appliedEffects.push(`ฟื้นฟู +${Math.round(h)} HP & +15 SP`);
        }
        if (actionType === 'signature' && att.id === 'phoenix') {
          applyEffectToTarget(def, { type: 'burn', duration: 2 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.15;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`เพลิงอมตะชุบวิญญาณ: เผาไหม้ + ฮีลทีม +${Math.round(h)} HP & ล้างดีบัฟ`);
        }
        if (actionType === 'signature' && att.id === 'naga') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 20);
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`นาคราชกลืนมหาพิภพ: สโลว์, ตัดเกจไม้ตาย -20 & เกราะทีม 20%`);
        }
        if (actionType === 'signature' && att.id === 'azure_dragon') {
          applyEffectToTarget(att, { type: 'buff_spd', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'buff_cri', value: 15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`มหาทัณฑ์สวรรค์: สายฟ้าชิ่งกระจาย & บัฟทีม SPD+20%, CRI+15%`);
        }
        if (actionType === 'signature' && att.id === 'black_panther') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ลด DEF ศัตรู 25%`);
        }
        if (actionType === 'signature' && att.id === 'shark') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ขากรรไกรฉลามขาว: ติดเลือดไหล 2 เทิร์น & ลด DEF 30%`);
        }
        if (actionType === 'signature' && att.id === 'falcon') {
          applyEffectToTarget(att, { type: 'buff_cri', value: 15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`บัฟ CRI +15%`);
        }
        if (actionType === 'signature' && att.id === 'bighorn' && Math.random() < 0.25) {
          applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เกราะเขาเกลียว 12% Max HP`);
        }
        if (actionType === 'signature' && att.id === 'yak') {
          applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`ปราการวายุ: เกราะทีม 15% Max HP & ล้าง 1 ดีบัฟ`);
        }
        if (actionType === 'signature' && att.id === 'ostrich') {
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push(`เตะสกัดตัดเกจศัตรู -15`);
        }
        if (actionType === 'signature' && att.id === 'cheetah') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`เร่งเกจตนเอง +15`);
        }
        if (actionType === 'signature' && att.id === 'owl') {
          applyEffectToTarget(def, { type: 'confusion', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'blind', duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`พายุสะกดจิตปีกราตรี: สับสน 2 เทิร์น & ตาบอด 1 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'qilin') {
          applyEffectToTarget(def, { type: 'confusion', duration: 2 }, this.options.enableAbilities);
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`มหาญาณทิพย์กิเลนพิพากษา: สับสน 2 เทิร์น & เร่งเกจตนเอง +15`);
        }
        if (actionType === 'signature' && att.id === 'mammoth') {
          applyEffectToTarget(def, { type: 'taunt', duration: 2, sourceId: att.id }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'buff_def', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`มหาคลื่นงาช้างจิตสะท้าน: ยั่วยุ 2 เทิร์น & บัฟ DEF +15%`);
        }
        if (actionType === 'signature' && att.id === 'buffalo') {
          applyEffectToTarget(def, { type: 'taunt', duration: 2, sourceId: att.id }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เขาเหล็กชนแหลก: สโลว์ 2 เทิร์น & ยั่วยุ 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'cassowary') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`กรงเล็บสังหารสะบั้นลม: ติดเลือดไหล 2 เทิร์น & ลด DEF 30%`);
        }
        if (actionType === 'signature' && att.id === 'tapir') {
          applyEffectToTarget(def, { type: 'sleep', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ละอองนิทรากลืนฝัน: หลับใหล 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'vampire_squid') {
          applyEffectToTarget(def, { type: 'silence', duration: 2 }, this.options.enableAbilities);
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_hit', 'buff_flee', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          appliedEffects.push(`มหาพายุหมึกรัตติกาล: ใบ้ 2 เทิร์น & ล้างบัฟศัตรูทั้งหมด`);
        }
        if (actionType === 'signature' && att.id === 'pistol_shrimp') {
          applyEffectToTarget(def, { type: 'vulnerable', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ก้ามพลาสม่าสุญญากาศ: เปราะบาง 2 เทิร์น & ลด DEF 20%`);
        }
        if (actionType === 'signature' && att.id === 'crocodile') {
          applyEffectToTarget(def, { type: 'vulnerable', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`มหากาลคชสารฟาดหาง: เปราะบาง 2 เทิร์น & สโลว์ 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'platypus') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`คลื่นเหนี่ยวนำประจุจิต: มอบเกราะ 15% Max HP (2 เทิร์น)`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === 'signature' && att.id === 'hamster') {
          const h = att.baseStats.maxHp * 0.15;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
          healed += h;
          appliedEffects.push(`คลื่นจิตเกื้อหนุนดวงใจ: ฮีลตนเอง 15% และฟื้นฟู +15 SP`);
        }
        if (actionType === 'signature' && att.id === 'crane') {
          const h = att.baseStats.maxHp * 0.20;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
          healed += h;
          appliedEffects.push(`ระบำจิตชำระมลทิน: ฮีลตนเอง 20% Max HP และล้าง 1 ดีบัฟ`);
        }
        if (actionType === 'signature' && att.id === 'blue_whale') {
          const h = att.baseStats.maxHp * 0.25;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 20);
          applyEffectToTarget(att, { type: 'buff_hit', value: 15, duration: 2 }, this.options.enableAbilities);
          healed += h;
          appliedEffects.push(`คลื่นโซนาร์จิตมหาสมุทร: ฮีลตนเอง 25%, ฟื้นฟู +20 SP และบัฟ HIT +15 (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'white_lion') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'blind', duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push(`คำรามสุริยะพิพากษา: ลด ATK 20%, ตาบอด 2 เทิร์น & ตัดเกจ -10`);
        }
        if (actionType === 'signature' && att.id === 'giant_dragonfly') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          if (Math.random() < 0.65) {
            applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          }
          appliedEffects.push(`วาตภัยปีกกระพือสะท้าน: สโลว์ 2 เทิร์น & โอกาส 65% สตัน`);
        }
        if (actionType === 'signature' && att.id === 'crow') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ติดสโลว์ 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'condor') {
          if (Math.random() < 0.70) {
            applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          }
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_hit', 'buff_flee', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          appliedEffects.push(`สลายบัฟศัตรูทั้งหมด & สตัน 1 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'gorilla') {
          appliedEffects.push(`หมัดทลายผากัมปนาท`);
        }
        if (actionType === 'signature' && att.id === 'cougar') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`พุ่งขย้ำ เร่งเกจตนเอง +15`);
        }
        if (actionType === 'signature' && att.id === 'perentie') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`พิษพสุธา สโลว์ 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'prairie_dog') {
          applyEffectToTarget(def, { type: 'blind', duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`เสียงเตือนป่วนพสุธา ตาบอด 1 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'anteater') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ทลายจอมปลวก ลด ATK 20%`);
        }
        if (actionType === 'signature' && att.id === 'elephant') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push(`มหาแผ่นดินไหวสะท้านภพ สโลว์ & ตัดเกจไม้ตาย -15`);
        }
        if (actionType === 'signature' && att.id === 'grizzly') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`อุ้งตีนกริสลี่ถล่มผา ลด DEF 30%`);
        }
        if (actionType === 'signature' && att.id === 'sloth') {
          applyEffectToTarget(att, { type: 'buff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`โอบกอดเถาวัลย์พฤกษา: บัฟ DEF+20% & เกราะ 12%`);
        }
        if (actionType === 'signature' && att.id === 'tapir') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`พุ่งชนทลายดงพงไพร: มอบเกราะ 15% Max HP`);
        }
        if (actionType === 'signature' && att.id === 'panda') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`มหาพสุธาไผ่พันลำ: มอบเกราะ 20% Max HP`);
        }
        if (actionType === 'signature' && att.id === 'ocelot') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`กรงเล็บพรานพงไพร: ตาบอด 2 เทิร์น & เร่งเกจตนเอง +15`);
        }
        if (actionType === 'signature' && att.id === 'clouded_leopard') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`โฉบสังหารยอดเรือนไพร: ลด DEF 30% & สโลว์ 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'chameleon') {
          applyEffectToTarget(def, { type: 'debuff_hit', value: 15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`สะกดตาสลับสีลวงตา: ตรึงร่าง 2 เทิร์น & ลด HIT 15`);
        }
        if (actionType === 'signature' && att.id === 'gibbon') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เถาวัลย์พันธนาการโหนสวาท: สตัน 1 เทิร์น & ลด ATK 20%`);
        }
        if (actionType === 'signature' && att.id === 'orangutan') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push(`มหาพฤกษาทลายภพ: สตัน, สโลว์ & ตัดเกจไม้ตาย -15`);
        }
        if (actionType === 'signature' && att.id === 'toad') {
          applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`คางคกพ่นยางพิษสกัดทัพ: ติดพิษ & เกราะ 12% Max HP`);
        }
        if (actionType === 'signature' && att.id === 'centipede') {
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`กรงเล็บร้อยขารุมทึ้ง: เลือดไหล & ติดพิษ 3 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'butterfly') {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push(`ระบำปีกผีเสื้อพิษลวงตา: สตัน 1 เทิร์น & ตัด SP -20`);
        }
        if (actionType === 'signature' && att.id === 'gila_monster') {
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`ขากรรไกรพิษบดกระดูก: สตัน 1 เทิร์น & ติดพิษ 3 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'black_widow') {
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`เขี้ยวแม่ม่ายดำปลิดชีพ: ลด DEF 25% & ติดพิษ 3 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'pitohui') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`พายุขนนกพิษมึนงง: ตาบอด 2 เทิร์น, สโลว์ & ติดพิษ`);
        }
        if (actionType === 'signature' && att.id === 'stonefish') {
          applyEffectToTarget(att, { type: 'shield', value: 0.18, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ปราการหินทมิฬขย้ำวิญญาณ: สตัน 1 เทิร์น & เกราะ 18% Max HP`);
        }
        if (actionType === 'signature' && att.id === 'deathstalker') {
          applyEffectToTarget(def, { type: 'blind', duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`หางมัจจุราชแทงวิญญาณ: ติดพิษ 2 ชั้น & ตาบอด 1 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'cone_snail') {
          applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push(`มหาฉมวกมรณะดับประสาท: ตรึงร่าง, สตัน & สลายบัฟทั้งหมด`);
        }
        if (actionType === 'signature' && att.id === 'walrus') {
          applyEffectToTarget(def, { type: 'freeze', duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`งาเหมันต์ทลายธารน้ำแข็ง: สตัน 1 เทิร์น & แช่แข็ง 1 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'leopard_seal') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ขากรรไกรเหมันต์กระชากร่าง: เลือดไหล & สโลว์ 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'wolverine') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`กรงเล็บคลั่งทลายหิมะ: สตัน 1 เทิร์น & ลด DEF 20%`);
        }
        if (actionType === 'signature' && att.id === 'polar_bear') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`มหาอุ้งตีนถล่มขั้วโลก: สตัน 1 เทิร์น & ลด DEF 30%`);
        }
        if (actionType === 'signature' && att.id === 'ermine') {
          appliedEffects.push(`เขี้ยวขาวพริบตาปลิดชีพ: บัฟ CRI+20% (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'lynx') {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`กรงเล็บเงาหิมะทะลวงจุดตาย: สโลว์ & เร่งเกจตนเอง +15`);
        }
        if (actionType === 'signature' && att.id === 'snow_leopard') {
          applyEffectToTarget(def, { type: 'freeze', duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`โผนขย้ำจากยอดผาเยือกแข็ง: ลด DEF 30% & แช่แข็ง 1 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'puffin') {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push(`พายุจะงอยเหมันต์ปั่นป่วน: ตาบอด 2 เทิร์น & ตัด SP -20`);
        }
        if (actionType === 'signature' && att.id === 'narwhal') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`หอกเกลียวน้ำแข็งเสียบสกัดจุด: แช่แข็ง 1 เทิร์น & สโลว์ 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'seagull') {
          appliedEffects.push(`เสียงโวยวายปีกวายุสับสน: ตาบอด 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'armadillo') {
          applyEffectToTarget(att, { type: 'shield', value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ก้อนเหล็กทมิฬกลิ้งกระแทก: สตัน 1 เทิร์น & เกราะ 12% Max HP`);
        }
        if (actionType === 'signature' && att.id === 'hyena') {
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`กรามเหล็กขย้ำกระดูกทลายทัพ: สตัน 1 เทิร์น & ลด ATK 20%`);
        }
        if (actionType === 'signature' && att.id === 'sperm_whale') {
          applyEffectToTarget(att, { type: 'shield', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`มหาคลื่นกระแทกอเวจีใต้สมุทร: สตัน 1 เทิร์น & เกราะ 15% Max HP`);
        }
        if (actionType === 'signature' && att.id === 'tasmanian_devil') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เขี้ยวปีศาจขย้ำแหลก: ลด DEF 20%`);
        }
        if (actionType === 'signature' && att.id === 'black_vulture') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'poison', duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`จะงอยทมิฬฉีกกระชากวิญญาณ: เลือดไหล 3 เทิร์น & ลด DEF 20%`);
        }
        if (actionType === 'signature' && att.id === 'jaguar') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เงาพยัคฆ์ขย้ำกะโหลกปลิดชีพ: ตาบอด 2 เทิร์น & ลด DEF 30%`);
        }
        if (actionType === 'signature' && att.id === 'aye_aye') {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push(`เนตรปีศาจสะกดวิญญาณ: ตาบอด 2 เทิร์น & ตัด SP -20`);
        }
        if (actionType === 'signature' && att.id === 'crow') {
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push(`พายุขนนกทมิฬกลืนตะวัน: ตาบอด 2 เทิร์น & ตัดเกจ -10`);
        }
        if (actionType === 'signature' && att.id === 'vampire_squid') {
          applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'blind', duration: 2 }, this.options.enableAbilities);
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push(`มหาพายุหมึกรัตติกาลล้างบัฟ: สตัน, ตาบอด 2 เทิร์น & สลายบัฟทั้งหมด`);
        }
        if (actionType === 'signature' && att.id === 'sand_frog') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.08;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          appliedEffects.push(`กายาทรายพองลมสะท้อนสุริยัน: เกราะ 20% & ฟื้น +${Math.round(h)} HP`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === 'signature' && att.id === 'camel') {
          applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'regen', value: 0.06, duration: 2 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.10;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          appliedEffects.push(`ปราการโหนกสุริยะ: บัฟ DEF +25%, รีเจน & ฟื้น +${Math.round(h)} HP`);
        }
        if (actionType === 'signature' && att.id === 'white_bison') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.22, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'cleanse', count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`เกราะแสงศักดิ์สิทธิ์ไบซันเทวะ: เกราะ 22% Max HP & ล้าง 1 ดีบัฟ`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === 'signature' && att.id === 'sand_cat') {
          applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`กรงเล็บสุริยันฉีกผืนทราย: เลือดไหล 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'sidewinder') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`อสรพิษไซด์ไวนเดอร์ฉกแสงสุริยัน: ลด DEF 25%`);
        }
        if (actionType === 'signature' && att.id === 'akhal_teke') {
          def.gauge = Math.max(0, def.gauge - 20);
          appliedEffects.push(`บาทาสวรรค์สะท้านสุริยะทองคำ: ตัดเกจไม้ตาย -20 แต้ม`);
        }
        if (actionType === 'signature' && att.id === 'caracal') {
          applyEffectToTarget(att, { type: 'buff_cri', value: 30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ทะยานตะปบแสงสุริยะสังหาร: บัฟ CRI +30%`);
        }
        if (actionType === 'signature' && att.id === 'gyrfalcon') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.35, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ศรสุริยันดิ่งพิฆาตไจร์ฟอลคอน: เจาะเกราะ ลด DEF 35%`);
        }
        if (actionType === 'signature' && att.id === 'frilled_lizard') {
          applyEffectToTarget(def, { type: 'blind', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`แผ่แผงคอสุริยันสะกดขวัญ: ตาบอด 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'electric_ray') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เกราะสนามไฟฟ้ากระตุกมรณะ: เกราะ 20% & สโลว์ 2 เทิร์น`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === 'signature' && att.id === 'african_buffalo') {
          const shRes = applyEffectToTarget(att, { type: 'shield', value: 0.22, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`มหาเกราะกระดูกเขาอัสนีบาต: สตัน 1 เทิร์น & เกราะ 22% Max HP`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === 'signature' && att.id === 'pistol_shrimp') {
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          def.sp = Math.max(0, def.sp - 15);
          appliedEffects.push(`ก้ามพลาสม่าคลื่นกระแทก: ลด DEF 20% & ตัด SP -15`);
        }
        if (actionType === 'signature' && att.id === 'tiger_beetle') {
          applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 2 }, this.options.enableAbilities);
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`กรามสายฟ้าสับพริบตา: เลือดไหล 2 เทิร์น & เร่งเกจ +15`);
        }
        if (actionType === 'signature' && att.id === 'black_mamba') {
          applyEffectToTarget(def, { type: 'poison', stacks: 1, duration: 3 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_spd', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`อสรพิษดำฉกเขี้ยวอัสนี: เลือดไหล 3 เทิร์น & สโลว์ 20%`);
        }
        if (actionType === 'signature' && att.id === 'electric_catfish') {
          applyEffectToTarget(def, { type: 'slow', duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push(`ประจุอัมพาต 350 โวลต์: สโลว์ 2 เทิร์น & ตัดเกจ -10`);
        }
        if (actionType === 'signature' && att.id === 'zebra') {
          applyEffectToTarget(def, { type: 'blind', duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 12);
          appliedEffects.push(`แถบสายฟ้าลวงตา: ตาบอด 2 เทิร์น & ตัดเกจ -12`);
        }
        if (actionType === 'signature' && att.id === 'electric_eel') {
          applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 20);
          const buffTypes = ['buff_atk', 'buff_def', 'buff_spd', 'buff_cri', 'buff_flee', 'buff_hit', 'buff_ab', 'buff_block', 'shield'];
          def.effects = def.effects.filter(e => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push(`มหาทัณฑ์อัสนี 860 โวลต์: สตัน 1 เทิร์น, ตัดเกจ -20 & สลายบัฟทั้งหมด`);
        }
        if (actionType === 'signature' && att.id === 'xuanwu') {
          applyEffectToTarget(att, { type: 'shield', value: 0.25, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_cri', value: 20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`กำแพงปฐพีดึกดำบรรพ์: เกราะปฐพี 25% Max HP & ลด CRI ${def.name} 20% (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'ziz') {
          applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`กางปีกสกัดมหาวายุ: ม่านวายุคุ้มกาย เกราะ 20% Max HP (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'khalkotauroi') {
          applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'burn', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เพลิงอสูรโลหะหลอมเหลว: เกราะหลอมเหลว 20% Max HP & เผาไหม้ ${def.name} 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'erawan') {
          applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          if (Math.random() < 0.60) {
            applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
            appliedEffects.push(`อัสนีบาตคชสารสะท้านปฐพี: เกราะอัสนี 20% Max HP & สตัน ${def.name} 1 เทิร์น!`);
          } else {
            appliedEffects.push(`อัสนีบาตคชสารสะท้านปฐพี: เกราะอัสนี 20% Max HP`);
          }
        }
        if (actionType === 'signature' && att.id === 'yeti') {
          applyEffectToTarget(att, { type: 'shield', value: 0.25, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`กำแพงธารน้ำแข็งเยติพิทักษ์: เกราะธารน้ำแข็ง 25% Max HP & ลด ATK ${def.name} 15% (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'tarasque') {
          const h = att.baseStats.maxHp * 0.15;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          applyEffectToTarget(att, { type: 'counter_stance', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`พฤกษากระดองหนามสยบปฐพี: ฟื้น +${Math.round(h)} HP & สะท้อนหนามพฤกษา 2 เทิร์น`);
        }
        if (actionType === 'signature' && att.id === 'karkinos') {
          applyEffectToTarget(att, { type: 'shield', value: 0.22, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'poison', stacks: 2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ก้ามยักษ์ตัดพิภพปล่อยไอพิษ: กระดองไคติน 22% Max HP & พ่นไอพิษ 2 ชั้นใส่ ${def.name}`);
        }
        if (actionType === 'signature' && att.id === 'ammut') {
          const lifesteal = dmg * 0.35;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + lifesteal);
          applyEffectToTarget(def, { type: 'dispel', count: 1 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 15);
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`พิพากษากลืนวิญญาณใต้พิภพ: สูบเลือด +${Math.round(lifesteal)} HP, สลาย 1 บัฟ & ขโมยเกจ 15 แต้ม`);
        }
        if (actionType === 'signature' && att.id === 'nemean_lion') {
          applyEffectToTarget(att, { type: 'cleanse', count: 99 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'buff_def', value: 0.25, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`คำรามก้องแสงสุริยะศักดิ์สิทธิ์: ล้างดีบัฟทั้งหมด & บัฟ DEF +25% (2 เทิร์น)`);
        }
        if (actionType === 'signature' && att.id === 'baku') {
          applyEffectToTarget(att, { type: 'shield', value: 0.20, duration: 2 }, this.options.enableAbilities);
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 20);
          appliedEffects.push(`มิติมายากลืนฝันร้ายคืนชีพ: บาเรียพลังจิต 20% Max HP & ฟื้น +20 SP`);
        }
        // SS Assassins Signatures (1v1)
        if (actionType === 'signature' && att.id === 'tsuchigumo') {
          applyEffectToTarget(def, { type: 'root', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, this.options.enableAbilities);
          const ls = dmg * 0.20;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          healed += ls;
          appliedEffects.push(`ค่ายกลใยศิลาเขี้ยวอสูรสูบธรณี: ตรึงร่าง (Root 2 เทิร์น), ลด DEF 30% & สูบเลือด +${Math.round(ls)} HP`);
        }
        if (actionType === 'signature' && att.id === 'kraken') {
          applyEffectToTarget(def, { type: 'blind', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'root', duration: 2 }, this.options.enableAbilities);
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push(`หมึกทมิฬหนวดอสูรฉุดลงเหวลึก: ตาบอด & ตรึงร่าง 2 เทิร์น พร้อมดูด SP -20`);
        }
        if (actionType === 'signature' && att.id === 'kamaitachi') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: 'buff_spd', value: 0.25, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`สามคมเคียววายุสะบั้นวิญญาณ: ฟัน 3 จังหวะเลือดไหล 2 เทิร์น & บัฟ SPD +25%`);
        }
        if (actionType === 'signature' && att.id === 'skoll') {
          def.shield = 0;
          applyEffectToTarget(def, { type: 'burn', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_atk', value: 0.20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.20, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`เขี้ยวอุกกาบาตกลืนสุริยัน: ทำลายเกราะ Shield ทันที, เผาไหม้ 2 เทิร์น & ลด ATK/DEF 20%`);
        }
        if (actionType === 'signature' && att.id === 'raiju') {
          applyEffectToTarget(def, { type: 'stun', duration: 1 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 25);
          appliedEffects.push(`อสุนีบาตเขี้ยวแสงผ่าจุดตาย: ช็อตสตัน 1 เทิร์น & ตัดเกจไม้ตาย -25`);
        }
        if (actionType === 'signature' && att.id === 'wendigo') {
          applyEffectToTarget(def, { type: 'freeze', duration: 1 }, this.options.enableAbilities);
          const ls = dmg * 0.25;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          healed += ls;
          appliedEffects.push(`กรงเล็บเหมันต์ปลิดวิญญาณ: แช่แข็ง 1 เทิร์น & สูบเลือดเหมันต์ +${Math.round(ls)} HP`);
        }
        if (actionType === 'signature' && att.id === 'weretiger_saming') {
          applyEffectToTarget(def, { type: 'bleed', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'confusion', duration: 2 }, this.options.enableAbilities);
          const ls = dmg * 0.20;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          healed += ls;
          appliedEffects.push(`อาคมสมิงพรางดงกระโจนขย้ำคอ: เลือดไหล & สับสน 2 เทิร์น พร้อมฟื้นฟู +${Math.round(ls)} HP`);
        }
        if (actionType === 'signature' && att.id === 'manticore') {
          applyEffectToTarget(def, { type: 'poison', stacks: 2, duration: 3 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'debuff_def', value: 0.30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`ห่าเข็มพิษหางแมงป่องสังหาร: ฝังพิษ 2 ชั้น (3 เทิร์น) & ลด DEF 30%`);
        }
        if (actionType === 'signature' && att.id === 'camazotz') {
          applyEffectToTarget(def, { type: 'silence', duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 20);
          att.gauge = Math.min(100, att.gauge + 20);
          const ls = dmg * 0.30;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          healed += ls;
          appliedEffects.push(`ปีกรัตติกาลบั่นเศียรสูบวิญญาณ: ใบ้สกิล 2 เทิร์น, ขโมยเกจ 20 แต้ม & สูบเลือด +${Math.round(ls)} HP`);
        }
        if (actionType === 'signature' && att.id === 'nue') {
          def.sp = Math.max(0, def.sp - 25);
          applyEffectToTarget(def, { type: 'silence', duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: 'confusion', duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`คลื่นจิตอสูรเมฆาทมิฬสะกดชีพ: เผา SP -25, ติดใบ้สกิล & สับสน 2 เทิร์น`);
        }
      }
    }

    // วิชาลับ: กระจกยาตะ สะท้อนแสงจ้าทำให้ผู้โจมตีตาบอด
    if (this.options.enableSkillEffects && hasStatus(def, 'yata_mirror') && Math.random() < 0.55 && !hasStatus(att, 'blind')) {
      applyEffectToTarget(att, { type: 'blind', duration: 2 }, this.options.enableAbilities);
      appliedEffects.push(`${def.name} [กระจกยาตะ] (55%) สะท้อนแสงจ้า! ${att.name} ติดตาบอด (2 เทิร์น)`);
    }

    // วิชาลับ: กระบวนท่าสวนกลับ โต้กลับผู้โจมตีทันที 45% ATK
    if (
      this.options.enableSkillEffects &&
      hasStatus(def, 'counter_stance') &&
      def.hp > 0 &&
      !hasStatus(def, 'stun') &&
      !hasStatus(def, 'freeze') &&
      Math.random() < 0.55
    ) {
      const counterDmg = Math.max(1, defStats.atk * 0.45 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
      let remCounter = counterDmg;
      if (att.shield > 0) {
        const abs = Math.min(att.shield, remCounter);
        att.shield -= abs;
        remCounter -= abs;
      }
      att.hp -= remCounter;
      appliedEffects.push(`${def.name} [สวนกลับ] (55%) ฟันสวนกลับ ${Math.round(counterDmg)} ดาเมจใส่ ${att.name}`);
    }

    // วิชาลับ: เงามายา ช่วยโจมตีซ้ำ 50% ดาเมจปกติ
    if (this.options.enableSkillEffects && hasStatus(att, 'shadow_clone') && def.hp > 0) {
      const shadowDmg = Math.max(1, attStats.atk * 0.50 * (K / (K + defStats.def)) * (0.95 + Math.random() * 0.1));
      let remShadow = shadowDmg;
      if (def.shield > 0) {
        const abs = Math.min(def.shield, remShadow);
        def.shield -= abs;
        remShadow -= abs;
      }
      def.hp -= remShadow;
      appliedEffects.push(`👥 เงามายาฟันซ้ำ +${Math.round(shadowDmg)} ดาเมจ`);
    }

    // เซอร์เบอรัส Ability: สามเศียรฉีกกระชากบัฟ (tartarus_three_fangs)
    if (this.options.enableAbilities && att.abilityId === 'tartarus_three_fangs' && def.hp > 0) {
      if (Math.random() < 0.35) {
        const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35 * (K / (K + defStats.def)) * (0.95 + Math.random() * 0.1)));
        let remBite = biteDmg;
        if (def.shield > 0) {
          const abs = Math.min(def.shield, remBite);
          def.shield -= abs;
          remBite -= abs;
        }
        def.hp = Math.max(0, def.hp - remBite);
        appliedEffects.push(`Ability [${att.abilityName}] (35%) เศียรที่สองฉลามกัดซ้ำ 💥 -${biteDmg} HP`);
      }
      if (Math.random() < 0.30 && def.hp > 0) {
        const dispRes = applyEffectToTarget(def, { type: 'dispel', count: 1 }, true);
        if (dispRes) {
          appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
        }
      }
    }

    const isArmorBreak = pierce >= 0.08;
    const isBlocked = defStats.block > attStats.ab + bonusAb + 5;
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'xuanwu_bastion' && Math.random() < 0.60) {
      const pRes = applyEffectToTarget(att, { type: 'stone_curse', duration: 1 }, true);
      if (pRes) appliedEffects.push(`${def.name} [${def.abilityName}] (60%) บล็อกสำเร็จสาป ${att.name} กลายเป็นหิน 1 เทิร์น!`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'abominable_resilience' && Math.random() < 0.50) {
      const fRes = applyEffectToTarget(att, { type: 'freeze', duration: 1 }, true);
      if (fRes) appliedEffects.push(`${def.name} [${def.abilityName}] (50%) บล็อกสำเร็จปลดปล่อยไอเย็นแช่แข็ง ${att.name} 1 เทิร์น!`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'toxic_carapace_spikes') {
      const poiRes = applyEffectToTarget(att, { type: 'poison', stacks: 1, duration: 3 }, true);
      if (poiRes) appliedEffects.push(`${def.name} [${def.abilityName}] บล็อกสำเร็จละอองพิษเกาะกุม ${att.name}!`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'fire_chitin_shell' && Math.random() < 0.65) {
      const bRes = applyEffectToTarget(att, { type: 'burn', duration: 2 }, true);
      if (bRes) appliedEffects.push(`${def.name} [${def.abilityName}] (65%) บล็อกสำเร็จสะท้อนเผาไหม้ใส่ ${att.name}`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'iron_crab_pincer' && Math.random() < 0.60) {
      const cDmg = Math.max(1, defStats.atk * 0.35 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
      let remC = cDmg;
      if (att.shield > 0) {
        const abs = Math.min(att.shield, remC);
        att.shield -= abs;
        remC -= abs;
      }
      att.hp -= remC;
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) บล็อกสำเร็จหนีบสวนกลับ ${Math.round(cDmg)} ดาเมจใส่ ${att.name}`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'stand_against_gale' && Math.random() < 0.60) {
      applyEffectToTarget(def, { type: 'buff_def', value: 0.20, duration: 2 }, true);
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) บล็อกสำเร็จได้รับบัฟ DEF+20%`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'ancient_forest_hide' && Math.random() < 0.60) {
      const h = def.baseStats.maxHp * 0.04;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      applyEffectToTarget(def, { type: 'shield', value: 0.06, duration: 2 }, true);
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) บล็อกสำเร็จ ฟื้น +${Math.round(h)} HP & เกราะ 6%`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'osteoderm_toxic_armor' && Math.random() < 0.65) {
      applyEffectToTarget(att, { type: 'poison', duration: 3, stacks: 1 }, true);
      applyEffectToTarget(att, { type: 'debuff_atk', value: 0.15, duration: 2 }, true);
      appliedEffects.push(`${def.name} [${def.abilityName}] (65%) บล็อกสำเร็จแพร่พิษ & ลด ATK ${att.name} 15%`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'sand_burrow_puff' && Math.random() < 0.60) {
      const h = def.baseStats.maxHp * 0.04;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) บล็อกสำเร็จ ฟื้น +${Math.round(h)} HP`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === 'cape_boss_charge' && Math.random() < 0.65) {
      const cDmg = Math.max(1, defStats.atk * 0.40 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
      let remC = cDmg;
      if (att.shield > 0) {
        const abs = Math.min(att.shield, remC);
        att.shield -= abs;
        remC -= abs;
      }
      att.hp -= remC;
      appliedEffects.push(`${def.name} [${def.abilityName}] (65%) บล็อกสำเร็จขวิดสายฟ้าสวนกลับ ${Math.round(cDmg)} ดาเมจใส่ ${att.name}`);
    }

    if (this.options.enableSkillEffects && hasStatus(def, 'fire_skin') && Math.random() < 0.40) {
      const bRes = applyEffectToTarget(att, { type: 'burn', duration: 2 }, true);
      if (bRes) appliedEffects.push(`${def.name} ผิวกายเพลิง 🔥 (40%) สะท้อนเผาไหม้ใส่ ${att.name}${bRes.includes('Ignite Burst') ? ` [${bRes}]` : ''}`);
    }
    if (this.options.enableSkillEffects && hasStatus(def, 'ice_skin') && Math.random() < 0.40) {
      if (!hasStatus(att, 'freeze')) {
        const fRes = applyEffectToTarget(att, { type: 'freeze', duration: 1 }, true);
        if (fRes) appliedEffects.push(`${def.name} ผิวกายเหมันต์ 🧊 (40%) สะท้อนแช่แข็งใส่ ${att.name}`);
      }
    }
    if (this.options.enableAbilities && def.abilityId === 'grizzly_berserk' && def.hp > 0 && def.hp < def.baseStats.maxHp * 0.65 && !hasStatus(def, 'berserk') && Math.random() < 0.65) {
      applyEffectToTarget(def, { type: 'berserk', duration: 2 }, true);
      const h = def.baseStats.maxHp * 0.05;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      appliedEffects.push(`Ability [${def.abilityName}] ทำงาน (65%) เข้าสู่สภาวะคลั่งศึก Berserk 💢 & ฟื้น +${Math.round(h)} HP!`);
    }
    if (this.options.enableAbilities && def.abilityId === 'blubber_ice_fortress' && def.hp > 0 && def.hp < def.baseStats.maxHp * 0.60 && !hasStatus(def, 'ice_skin') && Math.random() < 0.65) {
      applyEffectToTarget(def, { type: 'ice_skin', duration: 2 }, true);
      const h = def.baseStats.maxHp * 0.05;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      appliedEffects.push(`Ability [${def.abilityName}] ทำงาน (65%) เสริมเกราะผิวกายเหมันต์ Ice Skin 🧊 & ฟื้น +${Math.round(h)} HP!`);
    }

    const spTag = spCost > 0 ? ` (-${spCost} SP)` : '';
    const critTag = isCrit ? ' [CRIT!]' : '';
    const elemTag = elemMult > 1 ? ' (ชนะธาตุ ×1.3)' : elemMult < 1 ? ' (แพ้ธาตุ ×0.85)' : '';
    const effTag = appliedEffects.length ? ` | เอฟเฟกต์: ${appliedEffects.join(', ')}` : '';
    const ev: TurnEvent = {
      turn: this.turn,
      actorSide: attTeam.side,
      actorName: att.name,
      targetName: def.name,
      actionType,
      actionName,
      skillTier: sk?.tier,
      damage: Math.round(dmg),
      healed: Math.round(healed),
      shieldGained: Math.round(shieldGained),
      spCost,
      spChanged: Math.round(spChanged),
      isCrit,
      isMiss: false,
      isBlocked,
      isArmorBreak,
      elementMult: elemMult,
      appliedEffects,
      message: `[เทิร์น ${this.turn}] ${att.name} ใช้ [${actionName}]${spTag} โจมตี ${def.name} ทำดาเมจ ${Math.round(dmg)}${critTag}${elemTag}${effTag} (HP ${def.name}: ${Math.max(0, Math.round(def.hp))}/${Math.round(def.baseStats.maxHp)}, SP ${att.name}: ${Math.round(att.sp)}/${att.baseStats.maxSp})`,
    };
    this.recordEvent(events, ev);
  }

  private checkKoAndBackup(team: TeamState, events: TurnEvent[]) {
    const active = this.getActive(team);
    if (active.hp > 0) return;

    // Phoenix ability: เมื่อได้รับดาเมจถึงตายครั้งแรกในไฟต์ จะฟื้นคืนชีพ 100% (มีโอกาส 80% ฟื้นคืนชีพด้วย HP เต็มหลอด, หากไม่สำเร็จฟื้น 60% HP)
    if (this.options.enableAbilities && active.abilityId === 'rebirth_ashes' && !active.reviveUsed) {
      active.reviveUsed = true;
      const isFullHp = Math.random() < 0.80;
      const hpPct = isFullHp ? 1.0 : 0.60;
      active.hp = Math.round(active.baseStats.maxHp * hpPct);
      active.sp = Math.max(active.sp, Math.round(active.baseStats.maxSp * 0.50));
      active.effects = active.effects.filter(e => e.type.startsWith('buff_') || e.type === 'shield' || e.type === 'fire_skin');
      if (!active.effects.some(e => e.type === 'fire_skin')) active.effects.push({ type: 'fire_skin', duration: 9999 });
      const hpDesc = isFullHp ? 'เต็มหลอด (100%)' : '60%';
      const ev: TurnEvent = {
        turn: this.turn,
        actorSide: team.side,
        actorName: active.name,
        targetName: active.name,
        actionType: 'ability',
        actionName: active.abilityName,
        damage: 0,
        healed: Math.round(active.hp),
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [`คืนชีพ HP ${hpDesc}`],
        message: `[เทิร์น ${this.turn}] 🔥 ${active.name} แสดงผล Ability [${active.abilityName}] ฟื้นคืนชีพจากกองเถ้าถ่าน 100% พร้อม HP ${Math.round(active.hp)} (${hpDesc})!`,
      };
      this.recordEvent(events, ev);
      return;
    }

    active.hp = 0;

    if (team.fighters.length > 1) {
      const backupIdx = 1 - team.activeIndex;
      const backup = team.fighters[backupIdx];
      if (backup.hp > 0) {
        team.activeIndex = backupIdx;
        const healAmt = backup.baseStats.maxHp * 0.05;
        backup.hp = Math.min(backup.baseStats.maxHp, backup.hp + healAmt);
        const ev: TurnEvent = {
          turn: this.turn,
          actorSide: team.side,
          actorName: active.name,
          targetName: backup.name,
          actionType: 'ko_swap',
          actionName: 'ตัวสำรองเข้าสนาม',
          damage: 0,
          healed: Math.round(healAmt),
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: ['ฟื้น HP +5%'],
          message: `[เทิร์น ${this.turn}] ${active.name} ล้มลง! ตัวสำรอง ${backup.name} เข้าสนามพร้อมฟื้นฟู +${Math.round(healAmt)} HP (5%)`,
        };
        this.recordEvent(events, ev);
        return;
      }
    }

    this.winner = team.side === 'A' ? 'B' : 'A';
  }

  public runToEnd(): 'A' | 'B' | 'draw' {
    while (!this.winner) {
      this.stepTurn();
    }
    return this.winner;
  }
}
