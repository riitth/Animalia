/**
 * CodexManager: ระบบบริหารจัดการสมุดสะสมสัตว์เลี้ยง (Bestiary & Animal Codex System)
 * พัฒนาสำหรับ Phase 1: Data & Engine
 * - ติดตามการค้นพบสัตว์ (3 สถานะ: เงาดำปริศนา / พบเจอในสนามรบ / ครอบครองแล้ว)
 * - ระบบการวิจัยสัตว์ 3 ระดับ (1 ดาว / 3 ดาว / 5 ดาว) พร้อมแจกทรัพยากร
 * - ชุดสายสัมพันธ์สัตว์เลี้ยง 20 ชุด (Ecological Bonds & Synergy Sets)
 * - เลเวลความเชี่ยวชาญสมุดสะสม (Codex Mastery Level 1 - 20) พร้อมสิทธิพิเศษประจำไอดี
 * - โบนัสสเตตัสติดไอดีแบบควบคุมเพดาน (Stat Cap Safeguards) ป้องกันสเตตัสเฟ้อ
 */

import heroesData from '../data/heroes.json';
import { saveManager, PlayerSaveData, Rarity } from './save_manager';

export type CodexDiscoveryState = 'unknown' | 'seen' | 'captured';

export interface BondSetDefinition {
  id: string;
  name: string;
  category: 'ecosystem' | 'predator' | 'mythic' | 'elemental';
  description: string;
  memberHeroIds: string[];
  reward: {
    crystals: number;
    gold: number;
    statBuffDesc: string;
  };
  statBuff: {
    hpPct?: number;       // เช่น 0.01 (+1%)
    atkPct?: number;      // เช่น 0.01 (+1%)
    defPct?: number;      // เช่น 0.01 (+1%)
    criBonus?: number;    // เช่น 0.5 (+0.5%)
    blockBonus?: number;  // เช่น 1.0 (+1.0%)
    maxSpBonus?: number;  // เช่น 2 (+2 SP)
  };
}

export interface CodexLevelReward {
  level: number;
  expRequired: number;
  perkDescription: string;
  goldBonusPct?: number;     // เพิ่มเหรียญทองจากด่าน %
  foodBonusPct?: number;     // เพิ่มเสบียงจากด่าน %
  hatchTimeReductionPct?: number; // ลดเวลาฟักไข่ %
  pityReduction?: number;    // ลดเพดานการันตี SS จากไข่ทอง (เช่น -2)
  instantReward?: {
    gold?: number;
    crystals?: number;
    warmth?: number;
    goldEggs?: number;
    mythicEggs?: number;
  };
}

export interface CodexBuffTotals {
  hpPct: number;
  atkPct: number;
  defPct: number;
  criBonus: number;
  blockBonus: number;
  maxSpBonus: number;
}

/** เพดานสูงสุดของโบนัสสเตตัสจากสมุดสะสม เพื่อความสมดุลสูงสุด */
export const CODEX_STAT_CAPS: CodexBuffTotals = {
  hpPct: 0.06,      // สูงสุด +6%
  atkPct: 0.05,     // สูงสุด +5%
  defPct: 0.05,     // สูงสุด +5%
  criBonus: 2.0,    // สูงสุด +2% CRI Rate
  blockBonus: 2.5,  // สูงสุด +2.5% Block Rate
  maxSpBonus: 5,    // สูงสุด +5 Max SP
};

/**
 * กำหนดชุดสายสัมพันธ์และระบบนิเวศ 20 ชุด ครอบคลุมสัตว์ทุกระดับ
 */
export const BOND_SETS: BondSetDefinition[] = [
  {
    id: 'farm_friends',
    name: 'เพื่อนรักชนบท',
    category: 'ecosystem',
    description: 'เหล่าสัตว์เลี้ยงผู้ใกล้ชิดมนุษย์และเป็นจุดเริ่มต้นของการเดินทาง',
    memberHeroIds: ['rooster', 'dog', 'pig', 'horse', 'cat'],
    reward: { crystals: 40, gold: 1000, statBuffDesc: 'Max HP +1%' },
    statBuff: { hpPct: 0.01 },
  },
  {
    id: 'apex_felids',
    name: 'ราชันย์เขี้ยวเล็บ',
    category: 'predator',
    description: 'สุดยอดสัตว์นักล่าตระกูลแมวใหญ่แห่งผืนพงไพรและทุ่งหญ้าสะวันนา',
    memberHeroIds: ['tiger', 'lion', 'leopard', 'black_panther', 'jaguar'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'ATK +1%, CRI Rate +0.5%' },
    statBuff: { atkPct: 0.01, criBonus: 0.5 },
  },
  {
    id: 'sky_rulers',
    name: 'เจ้าเวหาท้าสายลม',
    category: 'predator',
    description: 'เจ้านกนักล่าผู้ครอบครองน่านฟ้า สายตาเฉียบคมและการดิ่งจู่โจมฉับไว',
    memberHeroIds: ['eagle', 'falcon', 'condor', 'harpy_eagle', 'black_vulture'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'ATK +1%, Max SP +2' },
    statBuff: { atkPct: 0.01, maxSpBonus: 2 },
  },
  {
    id: 'deep_ocean',
    name: 'ยักษ์ใหญ่แห่งใต้ทะเล',
    category: 'ecosystem',
    description: 'ผู้ครอบครองมหาสมุทรสีคราม กายาขนาดมหึมาและเสียงเพรียกแห่งความลึก',
    memberHeroIds: ['blue_whale', 'sperm_whale', 'orca', 'shark', 'beluga'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'Max HP +1%, DEF +1%' },
    statBuff: { hpPct: 0.01, defPct: 0.01 },
  },
  {
    id: 'ancient_beasts',
    name: 'ไตรภาคอสูรบรรพกาล',
    category: 'mythic',
    description: 'สิ่งมีชีวิตระดับตำนาน SS ผู้ค้ำจุนผืนดินและมหาสมุทรตั้งแต่ยุคกำเนิดโลก',
    memberHeroIds: ['behemoth', 'leviathan'],
    reward: { crystals: 150, gold: 5000, statBuffDesc: 'HP +1.5%, ATK +1.5%' },
    statBuff: { hpPct: 0.015, atkPct: 0.015 },
  },
  {
    id: 'thai_myth',
    name: 'ตำนานสุวรรณภูมิ',
    category: 'mythic',
    description: 'คู่ปรับแห่งตำนานลุ่มน้ำและเวหา เจ้าแห่งสายน้ำและพญาเจ้าเวหา',
    memberHeroIds: ['naga', 'garuda'],
    reward: { crystals: 150, gold: 5000, statBuffDesc: 'DEF +1.5%, Block +1%' },
    statBuff: { defPct: 0.015, blockBonus: 1.0 },
  },
  {
    id: 'four_guardians',
    name: 'เทพอสูรจตุรทิศ',
    category: 'mythic',
    description: 'เทพอสูรประจำทิศแห่งความสมดุล มังกรฟ้าบูรพาและวิหคเพลิงทักษิณ',
    memberHeroIds: ['azure_dragon', 'phoenix'],
    reward: { crystals: 150, gold: 5000, statBuffDesc: 'ATK +1.5%, Max SP +2' },
    statBuff: { atkPct: 0.015, maxSpBonus: 2 },
  },
  {
    id: 'canine_pack',
    name: 'ฝูงนักล่าเขี้ยวพงไพร',
    category: 'predator',
    description: 'สัญชาตญาณฝูงหมาป่าผู้ประสานการโจมตีอย่างไร้ความปรานี',
    memberHeroIds: ['wolf', 'fox', 'hyena', 'tasmanian_devil', 'fenrir'],
    reward: { crystals: 100, gold: 3000, statBuffDesc: 'ATK +1%, CRI Rate +0.5%' },
    statBuff: { atkPct: 0.01, criBonus: 0.5 },
  },
  {
    id: 'horned_titans',
    name: 'มหาคชสารและสัตว์เขาแกร่ง',
    category: 'ecosystem',
    description: 'ยักษ์ใหญ่ผู้ทรงพลังแห่งผืนแผ่นดิน ทนทานต่อแรงปะทะดั่งกำแพงศิลา',
    memberHeroIds: ['elephant', 'rhino', 'mammoth', 'white_bison', 'african_buffalo'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'Max HP +1.5%, DEF +1%' },
    statBuff: { hpPct: 0.015, defPct: 0.01 },
  },
  {
    id: 'swamp_shadows',
    name: 'เงามรณะแห่งบึงชื้น',
    category: 'predator',
    description: 'ผู้ล่าที่ซ่อนตัวอยู่ใต้สายน้ำนิ่งและดงเลน พร้อมจู่โจมด้วยกรามอันทรงพลัง',
    memberHeroIds: ['crocodile', 'komodo', 'anaconda', 'toad', 'king_basilisk'],
    reward: { crystals: 100, gold: 3000, statBuffDesc: 'DEF +1%, Block +1%' },
    statBuff: { defPct: 0.01, blockBonus: 1.0 },
  },
  {
    id: 'iron_carapace',
    name: 'ปราการเกราะไคติน',
    category: 'ecosystem',
    description: 'ผู้ถือครองเกราะและกระดองธรรมชาติที่แข็งแกร่งที่สุดในอาณาจักรสัตว์',
    memberHeroIds: ['turtle', 'pangolin', 'armadillo', 'giant_tortoise', 'horseshoe_crab'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'DEF +1.5%, Block +1.5%' },
    statBuff: { defPct: 0.015, blockBonus: 1.5 },
  },
  {
    id: 'polar_survivors',
    name: 'ผู้ทรหดแห่งแดนเยือกแข็ง',
    category: 'ecosystem',
    description: 'ผู้ปรับตัวเอาชีวิตรอดใต้ผืนน้ำแข็งและพายุหิมะอันเหน็บหนาว',
    memberHeroIds: ['polar_bear', 'walrus', 'penguin', 'leopard_seal', 'narwhal'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'Max HP +1%, DEF +1%' },
    statBuff: { hpPct: 0.01, defPct: 0.01 },
  },
  {
    id: 'mystic_yokai',
    name: 'อสูรเร้นลับแดนบูรพา',
    category: 'mythic',
    description: 'สัตว์วิเศษผู้ครอบครองมนตราโบราณและพลังจิตแห่งดินแดนตะวันออก',
    memberHeroIds: ['nine_tailed_fox', 'qilin'],
    reward: { crystals: 150, gold: 5000, statBuffDesc: 'Max SP +3, ATK +1%' },
    statBuff: { maxSpBonus: 3, atkPct: 0.01 },
  },
  {
    id: 'venom_cabal',
    name: 'สมาพันธ์พิษสังหาร',
    category: 'predator',
    description: 'ผู้ครอบครองเขี้ยวพิษและเหล็กในมรณะที่สามารถล้มศัตรูได้ในชั่วพริบตา',
    memberHeroIds: ['black_mamba', 'deathstalker', 'black_widow', 'stonefish', 'gila_monster'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'ATK +1%, CRI Rate +0.5%' },
    statBuff: { atkPct: 0.01, criBonus: 0.5 },
  },
  {
    id: 'savanna_runners',
    name: 'จ้าวลมกรดทุ่งสะวันนา',
    category: 'ecosystem',
    description: 'ผู้รวดเร็วที่สุดบนผืนแผ่นดิน ท่วงท่าการวิ่งที่คล่องแคล่วว่องไว',
    memberHeroIds: ['cheetah', 'ostrich', 'giraffe', 'zebra', 'caracal'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'ATK +1%, CRI Rate +0.5%' },
    statBuff: { atkPct: 0.01, criBonus: 0.5 },
  },
  {
    id: 'rainforest_canopy',
    name: 'กายากลืนพงไพร',
    category: 'ecosystem',
    description: 'ผู้เชี่ยวชาญการพรางตัวและการใช้ชีวิตบนยอดไม้สูงในป่าดิบชื้น',
    memberHeroIds: ['chameleon', 'leaf_insect', 'orangutan', 'gibbon', 'sloth'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'Max HP +1%, Block +0.5%' },
    statBuff: { hpPct: 0.01, blockBonus: 0.5 },
  },
  {
    id: 'micro_dynasty',
    name: 'จอมพลังแมลงจิ๋ว',
    category: 'predator',
    description: 'สิ่งมีชีวิตขนาดเล็กที่มีพละกำลังมหาศาลเกินตัวหลายเท่า',
    memberHeroIds: ['bullet_ant', 'hornet', 'mantis', 'tiger_beetle', 'beetle'],
    reward: { crystals: 80, gold: 2500, statBuffDesc: 'ATK +1%, DEF +1%' },
    statBuff: { atkPct: 0.01, defPct: 0.01 },
  },
  {
    id: 'underworld_judges',
    name: 'ผู้คุมประตูนรกอเวจี',
    category: 'mythic',
    description: 'ผู้ปกป้องความมืดมิดและรัตติกาล สัตว์แห่งเงาผู้คุมวิญญาณ',
    memberHeroIds: ['cerberus', 'vampire_squid', 'bat'],
    reward: { crystals: 120, gold: 4000, statBuffDesc: 'ATK +1%, Max HP +1%' },
    statBuff: { atkPct: 0.01, hpPct: 0.01 },
  },
  {
    id: 'mythic_predators',
    name: 'สมาพันธ์นักล่าลี้ลับ',
    category: 'mythic',
    description: 'สุดยอดเพชฌฆาตและอสูรนักล่าระดับ SS ผู้ซุ่มสังหารเหยื่อจากเงามืด',
    memberHeroIds: ['tsuchigumo', 'kraken', 'kamaitachi', 'skoll', 'raiju'],
    reward: { crystals: 160, gold: 6000, statBuffDesc: 'ATK +1.5%, CRI Rate +1.0%' },
    statBuff: { atkPct: 0.015, criBonus: 1.0 },
  },
  {
    id: 'mythic_stalkers',
    name: 'เพชฌฆาตเงาจันทรา',
    category: 'mythic',
    description: 'อสูรนักลอบสังหารระดับ SS ผู้ล่าเหยื่อด้วยความเร็วสูงและมนตราลึกลับ',
    memberHeroIds: ['wendigo', 'weretiger_saming', 'manticore', 'camazotz', 'nue'],
    reward: { crystals: 160, gold: 6000, statBuffDesc: 'Max HP +1.5%, ATK +1.5%' },
    statBuff: { hpPct: 0.015, atkPct: 0.015 },
  },
];

/**
 * โครงสร้างตารางเลเวลสมุดสะสม (Codex Mastery Level 1 - 20)
 */
export const CODEX_LEVEL_CONFIG: CodexLevelReward[] = [
  { level: 1, expRequired: 0, perkDescription: 'เริ่มต้นการเป็นนักสำรวจธรรมชาติ' },
  { level: 2, expRequired: 50, perkDescription: 'เหรียญทองจากด่านผจญภัย +2%', goldBonusPct: 2 },
  { level: 3, expRequired: 120, perkDescription: 'เหรียญทองจากด่านผจญภัย +5%', goldBonusPct: 5, instantReward: { crystals: 30, gold: 1000 } },
  { level: 4, expRequired: 220, perkDescription: 'เสบียงสัตว์จากด่าน +5%', foodBonusPct: 5 },
  { level: 5, expRequired: 350, perkDescription: 'ลดเวลาฟักไข่ในตู้ฟักทุกชนิดลง -5%', hatchTimeReductionPct: 5, instantReward: { warmth: 30, crystals: 50 } },
  { level: 6, expRequired: 500, perkDescription: 'เหรียญทองจากด่านผจญภัย +8%', goldBonusPct: 8 },
  { level: 7, expRequired: 680, perkDescription: 'เสบียงสัตว์จากด่าน +10%', foodBonusPct: 10 },
  { level: 8, expRequired: 900, perkDescription: 'ลดเวลาฟักไข่ในตู้ฟักลง -8%', hatchTimeReductionPct: 8, instantReward: { crystals: 80, gold: 3000 } },
  { level: 9, expRequired: 1150, perkDescription: 'เหรียญทองจากด่านผจญภัย +10%', goldBonusPct: 10 },
  { level: 10, expRequired: 1450, perkDescription: 'มอบไข่ทองคำ 2 ฟอง & ลดเวลาฟักไข่ -10%', hatchTimeReductionPct: 10, instantReward: { goldEggs: 2, crystals: 100 } },
  { level: 11, expRequired: 1800, perkDescription: 'เสบียงสัตว์จากด่าน +15%', foodBonusPct: 15 },
  { level: 12, expRequired: 2200, perkDescription: 'เหรียญทองจากด่านผจญภัย +12%', goldBonusPct: 12, instantReward: { warmth: 50, crystals: 120 } },
  { level: 13, expRequired: 2650, perkDescription: 'ลดเวลาฟักไข่ในตู้ฟักลง -12%', hatchTimeReductionPct: 12 },
  { level: 14, expRequired: 3150, perkDescription: 'เสบียงสัตว์จากด่าน +20%', foodBonusPct: 20 },
  { level: 15, expRequired: 3700, perkDescription: 'ลดเพดานการันตี SS ไข่ทองเหลือ 28 ฟอง', pityReduction: 2, instantReward: { goldEggs: 2, crystals: 150 } },
  { level: 16, expRequired: 4300, perkDescription: 'เหรียญทองจากด่านผจญภัย +15%', goldBonusPct: 15 },
  { level: 17, expRequired: 4950, perkDescription: 'ลดเวลาฟักไข่ในตู้ฟักลง -15%', hatchTimeReductionPct: 15 },
  { level: 18, expRequired: 5650, perkDescription: 'เสบียงสัตว์จากด่าน +25%', foodBonusPct: 25, instantReward: { warmth: 80, crystals: 200 } },
  { level: 19, expRequired: 6400, perkDescription: 'เหรียญทองจากด่านผจญภัย +18%', goldBonusPct: 18 },
  { level: 20, expRequired: 7200, perkDescription: 'ปราชญ์แห่งสัตว์โลกสูงสุด: รับไข่มายา 1 ฟอง', instantReward: { mythicEggs: 1, crystals: 300 } },
];

export class CodexManager {
  private heroMap: Map<string, any>;

  constructor() {
    this.heroMap = new Map((heroesData.heroes as any[]).map(h => [h.id, h]));
  }

  /**
   * ดึงข้อมูลภาพรวมการค้นพบของฮีโร่ตัวหนึ่ง
   */
  public getHeroDiscoveryState(heroId: string, save?: PlayerSaveData): CodexDiscoveryState {
    const s = save || saveManager.getData();
    if (s.ownedHeroes && s.ownedHeroes[heroId]) {
      return 'captured';
    }
    if (s.seenHeroes && s.seenHeroes[heroId]) {
      return 'seen';
    }
    return 'unknown';
  }

  /**
   * บันทึกการพบเจอสัตว์ในสนามต่อสู้ (เช่น เป็นศัตรูในด่าน)
   */
  public registerSeenHero(heroId: string): boolean {
    const s = saveManager.getData();
    if (!this.heroMap.has(heroId)) return false;
    if (s.ownedHeroes && s.ownedHeroes[heroId]) return false; // ถ้ามีในครอบครองแล้วไม่ต้องทำอะไร

    if (!s.seenHeroes) s.seenHeroes = {};
    if (!s.seenHeroes[heroId]) {
      s.seenHeroes[heroId] = Date.now();
      saveManager.save();
      return true;
    }
    return false;
  }

  /**
   * คำนวณแต้ม EXP รวมของสมุดสะสมในปัจจุบัน
   */
  public calculateTotalCodexExp(save?: PlayerSaveData): number {
    const s = save || saveManager.getData();
    let totalExp = 0;

    // 1. แต้มจากการครอบครองสัตว์และดาว
    const owned = s.ownedHeroes || {};
    for (const hero of Object.values(owned)) {
      totalExp += 10; // ได้รับตัวละคร (ขั้น 1)
      if (hero.stars >= 3) totalExp += 20; // ศึกษาลึกซึ้ง (ขั้น 2)
      if (hero.stars >= 5) totalExp += 40; // ปรมาจารย์ (ขั้น 3)
    }

    // 2. แต้มจากการปลดล็อกชุดสายสัมพันธ์ (ชุดละ 30 EXP)
    const claimedBonds = s.claimedBondRewards || [];
    totalExp += claimedBonds.length * 30;

    return totalExp;
  }

  /**
   * ดึงระดับเลเวล Codex ปัจจุบันพร้อมความคืบหน้า EXP
   */
  public getCodexLevelInfo(save?: PlayerSaveData): {
    currentLevel: number;
    currentExp: number;
    expForNextLevel: number;
    progressPct: number;
    currentPerk: string;
    isMaxLevel: boolean;
  } {
    const totalExp = this.calculateTotalCodexExp(save);
    let level = 1;

    for (let i = CODEX_LEVEL_CONFIG.length - 1; i >= 0; i--) {
      if (totalExp >= CODEX_LEVEL_CONFIG[i].expRequired) {
        level = CODEX_LEVEL_CONFIG[i].level;
        break;
      }
    }

    const currentCfg = CODEX_LEVEL_CONFIG.find(c => c.level === level) || CODEX_LEVEL_CONFIG[0];
    const nextCfg = CODEX_LEVEL_CONFIG.find(c => c.level === level + 1);

    if (!nextCfg) {
      return {
        currentLevel: level,
        currentExp: totalExp,
        expForNextLevel: currentCfg.expRequired,
        progressPct: 100,
        currentPerk: currentCfg.perkDescription,
        isMaxLevel: true,
      };
    }

    const expInLevel = totalExp - currentCfg.expRequired;
    const expNeeded = nextCfg.expRequired - currentCfg.expRequired;
    const progressPct = Math.min(100, Math.max(0, Math.round((expInLevel / expNeeded) * 100)));

    return {
      currentLevel: level,
      currentExp: totalExp,
      expForNextLevel: nextCfg.expRequired,
      progressPct,
      currentPerk: currentCfg.perkDescription,
      isMaxLevel: false,
    };
  }

  /**
   * ตรวจสอบว่ามีรางวัลวิจัยรายตัวที่ยังไม่ได้กดรับหรือไม่
   */
  public checkHeroResearchStatus(heroId: string, save?: PlayerSaveData): {
    tier1Available: boolean; // แรกพบ (มีตัวละคร 1⭐)
    tier1Claimed: boolean;
    tier2Available: boolean; // 3⭐
    tier2Claimed: boolean;
    tier3Available: boolean; // 5⭐
    tier3Claimed: boolean;
  } {
    const s = save || saveManager.getData();
    const hero = s.ownedHeroes ? s.ownedHeroes[heroId] : undefined;
    const claimedTiers = (s.claimedHeroResearch && s.claimedHeroResearch[heroId]) || [];

    const tier1Claimed = claimedTiers.includes(1);
    const tier2Claimed = claimedTiers.includes(2);
    const tier3Claimed = claimedTiers.includes(3);

    const tier1Available = !!hero && !tier1Claimed;
    const tier2Available = !!hero && hero.stars >= 3 && !tier2Claimed;
    const tier3Available = !!hero && hero.stars >= 5 && !tier3Claimed;

    return {
      tier1Available,
      tier1Claimed,
      tier2Available,
      tier2Claimed,
      tier3Available,
      tier3Claimed,
    };
  }

  /**
   * กดรับรางวัลการวิจัยสัตว์เลี้ยง
   */
  public claimHeroResearchReward(heroId: string, tier: 1 | 2 | 3): {
    success: boolean;
    rewards?: { crystals?: number; gold?: number; food?: number; warmth?: number };
    error?: string;
  } {
    const s = saveManager.getData();
    const status = this.checkHeroResearchStatus(heroId, s);

    if (tier === 1) {
      if (status.tier1Claimed) return { success: false, error: 'รับรางวัลขั้นที่ 1 ไปแล้ว' };
      if (!status.tier1Available) return { success: false, error: 'ยังไม่ครอบครองสัตว์ตัวนี้' };

      if (!s.claimedHeroResearch) s.claimedHeroResearch = {};
      if (!s.claimedHeroResearch[heroId]) s.claimedHeroResearch[heroId] = [];
      s.claimedHeroResearch[heroId].push(1);

      // รางวัลขั้น 1: 15 คริสตัล, 300 ทอง
      s.inventory.crystals += 15;
      s.inventory.gold += 300;
      saveManager.save();
      return { success: true, rewards: { crystals: 15, gold: 300 } };
    }

    if (tier === 2) {
      if (status.tier2Claimed) return { success: false, error: 'รับรางวัลขั้นที่ 2 ไปแล้ว' };
      if (!status.tier2Available) return { success: false, error: 'สัตว์ตัวนี้ยังไม่ถึงระดับ 3 ดาว' };

      if (!s.claimedHeroResearch) s.claimedHeroResearch = {};
      if (!s.claimedHeroResearch[heroId]) s.claimedHeroResearch[heroId] = [];
      s.claimedHeroResearch[heroId].push(2);

      // รางวัลขั้น 2: 80 เสบียง, 15 พลังอบอุ่น
      s.inventory.food += 80;
      s.inventory.warmth += 15;
      saveManager.save();
      return { success: true, rewards: { food: 80, warmth: 15 } };
    }

    if (tier === 3) {
      if (status.tier3Claimed) return { success: false, error: 'รับรางวัลขั้นที่ 3 ไปแล้ว' };
      if (!status.tier3Available) return { success: false, error: 'สัตว์ตัวนี้ยังไม่ถึงระดับ 5 ดาว' };

      if (!s.claimedHeroResearch) s.claimedHeroResearch = {};
      if (!s.claimedHeroResearch[heroId]) s.claimedHeroResearch[heroId] = [];
      s.claimedHeroResearch[heroId].push(3);

      // รางวัลขั้น 3: 30 คริสตัล
      s.inventory.crystals += 30;
      saveManager.save();
      return { success: true, rewards: { crystals: 30 } };
    }

    return { success: false, error: 'ระดับขั้นไม่ถูกต้อง' };
  }

  /**
   * ตรวจสอบสถานะความคืบหน้าของชุดสายสัมพันธ์
   */
  public getBondSetStatus(setId: string, save?: PlayerSaveData): {
    bond: BondSetDefinition;
    totalMembers: number;
    ownedMembers: number;
    isComplete: boolean;
    isClaimed: boolean;
    missingHeroIds: string[];
  } {
    const s = save || saveManager.getData();
    const bond = BOND_SETS.find(b => b.id === setId);
    if (!bond) throw new Error(`ไม่พบชุดสายสัมพันธ์ ${setId}`);

    const ownedMap = s.ownedHeroes || {};
    const missingHeroIds: string[] = [];
    let ownedCount = 0;

    for (const mId of bond.memberHeroIds) {
      if (ownedMap[mId]) {
        ownedCount++;
      } else {
        missingHeroIds.push(mId);
      }
    }

    const isComplete = ownedCount === bond.memberHeroIds.length;
    const isClaimed = (s.claimedBondRewards || []).includes(setId);

    return {
      bond,
      totalMembers: bond.memberHeroIds.length,
      ownedMembers: ownedCount,
      isComplete,
      isClaimed,
      missingHeroIds,
    };
  }

  /**
   * กดรับรางวัลการปลดล็อกชุดสายสัมพันธ์
   */
  public claimBondReward(setId: string): {
    success: boolean;
    reward?: { crystals: number; gold: number; statBuffDesc: string };
    error?: string;
  } {
    const s = saveManager.getData();
    const status = this.getBondSetStatus(setId, s);

    if (status.isClaimed) return { success: false, error: 'รับรางวัลชุดสายสัมพันธ์นี้ไปแล้ว' };
    if (!status.isComplete) return { success: false, error: 'ยังสะสมสัตว์ในชุดสายสัมพันธ์นี้ไม่ครบ' };

    if (!s.claimedBondRewards) s.claimedBondRewards = [];
    s.claimedBondRewards.push(setId);

    s.inventory.crystals += status.bond.reward.crystals;
    s.inventory.gold += status.bond.reward.gold;

    saveManager.save();
    return { success: true, reward: status.bond.reward };
  }

  /**
   * คำนวณผลรวมโบนัสสเตตัสติดไอดีจากสมุดสะสม (พร้อมครอบตัดไม่ให้เกินเพดาน Hard Cap)
   */
  public getActiveCodexBuffs(save?: PlayerSaveData): CodexBuffTotals {
    const s = save || saveManager.getData();
    const claimedBonds = new Set(s.claimedBondRewards || []);

    let hpPct = 0;
    let atkPct = 0;
    let defPct = 0;
    let criBonus = 0;
    let blockBonus = 0;
    let maxSpBonus = 0;

    // 1. รวมบัฟจากชุดสายสัมพันธ์ที่ปลดล็อกแล้ว
    for (const b of BOND_SETS) {
      if (claimedBonds.has(b.id)) {
        if (b.statBuff.hpPct) hpPct += b.statBuff.hpPct;
        if (b.statBuff.atkPct) atkPct += b.statBuff.atkPct;
        if (b.statBuff.defPct) defPct += b.statBuff.defPct;
        if (b.statBuff.criBonus) criBonus += b.statBuff.criBonus;
        if (b.statBuff.blockBonus) blockBonus += b.statBuff.blockBonus;
        if (b.statBuff.maxSpBonus) maxSpBonus += b.statBuff.maxSpBonus;
      }
    }

    // 2. รวมบัฟจาก Elemental Mastery (สะสมสัตว์ครบธาตุละ 5, 10, 15 ตัว)
    // สัตว์ที่มีในคลัง
    const owned = Object.keys(s.ownedHeroes || {});
    const elemCounts: Record<string, number> = {};
    for (const hId of owned) {
      const meta = this.heroMap.get(hId);
      if (meta && meta.element) {
        elemCounts[meta.element] = (elemCounts[meta.element] || 0) + 1;
      }
    }

    // ทุกธาตุที่มีสัตว์ >= 5 ตัว ได้ HP +0.2%, ATK +0.2%
    // >= 10 ตัว ได้เพิ่ม DEF +0.2%
    for (const cnt of Object.values(elemCounts)) {
      if (cnt >= 5) {
        hpPct += 0.002;
        atkPct += 0.002;
      }
      if (cnt >= 10) {
        defPct += 0.002;
      }
    }

    // 3. ป้องกันสเตตัสเฟ้อด้วย Hard Cap Safeguard
    return {
      hpPct: Math.min(CODEX_STAT_CAPS.hpPct, Number(hpPct.toFixed(4))),
      atkPct: Math.min(CODEX_STAT_CAPS.atkPct, Number(atkPct.toFixed(4))),
      defPct: Math.min(CODEX_STAT_CAPS.defPct, Number(defPct.toFixed(4))),
      criBonus: Math.min(CODEX_STAT_CAPS.criBonus, Number(criBonus.toFixed(2))),
      blockBonus: Math.min(CODEX_STAT_CAPS.blockBonus, Number(blockBonus.toFixed(2))),
      maxSpBonus: Math.min(CODEX_STAT_CAPS.maxSpBonus, Math.round(maxSpBonus)),
    };
  }

  /**
   * ดึงส่วนลดเวลาฟักไข่รวมจากเลเวลสมุดสะสม (%)
   */
  public getHatchTimeReductionPct(save?: PlayerSaveData): number {
    const lvlInfo = this.getCodexLevelInfo(save);
    let totalReduction = 0;
    for (const cfg of CODEX_LEVEL_CONFIG) {
      if (cfg.level <= lvlInfo.currentLevel && cfg.hatchTimeReductionPct) {
        totalReduction = Math.max(totalReduction, cfg.hatchTimeReductionPct);
      }
    }
    return totalReduction;
  }

  /**
   * ดึงโบนัสเหรียญทองและเสบียงจากด่านผจญภัย (%)
   */
  public getCampaignBonusDropPct(save?: PlayerSaveData): { goldPct: number; foodPct: number } {
    const lvlInfo = this.getCodexLevelInfo(save);
    let goldPct = 0;
    let foodPct = 0;
    for (const cfg of CODEX_LEVEL_CONFIG) {
      if (cfg.level <= lvlInfo.currentLevel) {
        if (cfg.goldBonusPct) goldPct = Math.max(goldPct, cfg.goldBonusPct);
        if (cfg.foodBonusPct) foodPct = Math.max(foodPct, cfg.foodBonusPct);
      }
    }
    return { goldPct, foodPct };
  }

  /**
   * นับจำนวนรางวัลที่รอให้ผู้เล่นกดรับ (สำหรับแสดง Badge แจ้งเตือนสีแดง)
   */
  public countUnclaimedRewards(save?: PlayerSaveData): number {
    const s = save || saveManager.getData();
    let count = 0;

    // 1. ตรวจสอบรางวัลวิจัยรายตัว
    const owned = s.ownedHeroes || {};
    for (const hId of Object.keys(owned)) {
      const status = this.checkHeroResearchStatus(hId, s);
      if (status.tier1Available) count++;
      if (status.tier2Available) count++;
      if (status.tier3Available) count++;
    }

    // 2. ตรวจสอบรางวัลชุดสายสัมพันธ์
    for (const bond of BOND_SETS) {
      const status = this.getBondSetStatus(bond.id, s);
      if (status.isComplete && !status.isClaimed) {
        count++;
      }
    }

    return count;
  }
}

export const codexManager = new CodexManager();

