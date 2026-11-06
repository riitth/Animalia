/**
 * Battle UI & MMORPG Interface System (Phase 1: State Architecture Setup & Test Suite)
 * โมดูลควบคุมสถานะและการเรนเดอร์หน้าจอต่อสู้แบบ Classic MMORPG Battle HUD ผสมผสาน Cozy Pixel Art Fantasy
 * 
 * รองรับ 5 พื้นที่หลัก:
 * 1. Area 1: Top HUD (ข้อมูลด่าน, ตัวนับศัตรู/รอบ, ปุ่มควบคุม Speed, Pause, Retreat)
 * 2. Area 2: Party Status Panel (สมาชิกทีม 1-4 ตัว, HP/SP/Gauge, Buffs/Debuffs, Active Turn, Collapse)
 * 3. Area 3: Battle Arena (สนามต่อสู้กลาง, Tactical Formation Front/Mid/Back, Sprites, Targets, Floating Numbers)
 * 4. Area 4: Target Information Panel (ข้อมูลเป้าหมายที่เลือก, HP %, ธาตุ, บัฟ/ดีบัฟ)
 * 5. Area 5: Bottom Skill Hotbar & Battle Controls (Hotbar สกิล 6-8 ช่อง, Auto-Cast, Auto-Battle, ปุ่มไม้ตาย)
 * พร้อมระบบสนับสนุน:
 * - Turn Order Timeline (แถบลำดับคิวความเร็ว)
 * - Tabbed Combat Log (แท็บ Battle / System / Loot)
 */

import { getElementMultiplier, type ElementId, type Rarity, type ActiveEffect, type TurnEvent, type FighterSnapshot, type TeamSnapshot, type BattleSession } from '../engine/combat';
import type { TeamBattleSession, TeamFighterState, TeamSquadState, GridRow, GridCoord } from '../engine/team_combat';
import heroesData from '../data/heroes.json';
import enemiesData from '../data/enemies.json';
import elementsData from '../data/elements.json';
import skillsData from '../data/skills.json';

export type CombatSide = 'A' | 'B';
export type LogTabType = 'battle' | 'system' | 'loot';

export interface BattleFighterViewData {
  id: string;
  name: string;
  rarity: string;
  element: string;
  role: string;
  archetype: string;
  level: number;
  stars: number;
  hp: number;
  maxHp: number;
  sp: number;
  maxSp: number;
  shield: number;
  gauge: number;
  maxGauge: number;
  skillSlots: string[];
  signatureName: string;
  abilityName: string;
  abilityDescription: string;
  effects: ActiveEffect[];
  isKo: boolean;
  isActive: boolean; // Currently active in turn or deployed on field
  isBackup?: boolean; // Is backup fighter (for 1v1 tag relay)
  side: CombatSide;
  pos?: GridCoord;
  roleAffinityActive?: boolean;
  roleAffinityDesc?: string;
  effectiveSpd: number;
}

export interface BattleTimelineItem {
  id: string;
  name: string;
  rarity: string;
  element: string;
  role: string;
  side: CombatSide;
  effectiveSpd: number;
  isActiveTurn: boolean;
  isKo: boolean;
  hpPct: number;
}

export interface BattleLogEntry {
  id: string;
  turnOrRound: number;
  actorSide: CombatSide;
  actorName: string;
  category: LogTabType;
  message: string;
  actionType: string;
  isCrit?: boolean;
  isMiss?: boolean;
  damage?: number;
  timestamp?: number;
}

export interface BattleViewState {
  selectedTargetId: string | null;
  selectedPartyMemberId: string | null;
  activeLogTab: LogTabType;
  isPartyPanelCollapsed: boolean;
  isTargetPanelCollapsed: boolean;
  isLogPanelCollapsed: boolean;
  autoBattle: boolean;
  autoCastSig: boolean;
  pauseOnSigReady: boolean;
  speed: 1 | 2 | 3;
  isPlaying: boolean;
  battleSource: 'sandbox' | 'campaign';
  activeStageId: string | null;
}

const HERO_AND_ENEMY_MAP = new Map(
  [...heroesData.heroes, ...enemiesData.enemies].map(h => [h.id, h])
);
const ELEMENT_MAP = new Map(elementsData.elements.map(e => [e.id, e]));
const SKILL_MAP = new Map(skillsData.skills.map(s => [s.id, s]));
const HERO_NAMES = new Set(heroesData.heroes.map(h => h.name));
const ENEMY_NAMES = new Set(enemiesData.enemies.map(e => e.name));

/**
 * สร้างสถานะเริ่มต้นของ Battle View (Initial State)
 */
export function createDefaultBattleViewState(): BattleViewState {
  return {
    selectedTargetId: null,
    selectedPartyMemberId: null,
    activeLogTab: 'battle',
    isPartyPanelCollapsed: false,
    isTargetPanelCollapsed: false,
    isLogPanelCollapsed: false,
    autoBattle: true,
    autoCastSig: true,
    pauseOnSigReady: false,
    speed: 1,
    isPlaying: true,
    battleSource: 'sandbox',
    activeStageId: null,
  };
}

// Global View State instance
export const battleViewState: BattleViewState = createDefaultBattleViewState();

// ==========================================
// State Mutation Functions
// ==========================================

export function setBattleTarget(targetId: string | null): void {
  battleViewState.selectedTargetId = targetId;
}

export function setBattlePartyMember(memberId: string | null): void {
  battleViewState.selectedPartyMemberId = memberId;
}

export function setBattleLogTab(tab: LogTabType): void {
  battleViewState.activeLogTab = tab;
}

export function togglePartyPanelCollapse(collapsed?: boolean): boolean {
  battleViewState.isPartyPanelCollapsed = collapsed !== undefined ? collapsed : !battleViewState.isPartyPanelCollapsed;
  return battleViewState.isPartyPanelCollapsed;
}

export function toggleTargetPanelCollapse(collapsed?: boolean): boolean {
  battleViewState.isTargetPanelCollapsed = collapsed !== undefined ? collapsed : !battleViewState.isTargetPanelCollapsed;
  return battleViewState.isTargetPanelCollapsed;
}

export function toggleLogPanelCollapse(collapsed?: boolean): boolean {
  battleViewState.isLogPanelCollapsed = collapsed !== undefined ? collapsed : !battleViewState.isLogPanelCollapsed;
  return battleViewState.isLogPanelCollapsed;
}

export function setBattleSpeed(speed: 1 | 2 | 3): void {
  battleViewState.speed = speed;
}

export function toggleAutoBattle(enabled?: boolean): boolean {
  battleViewState.autoBattle = enabled !== undefined ? enabled : !battleViewState.autoBattle;
  return battleViewState.autoBattle;
}

export function toggleAutoCastSig(enabled?: boolean): boolean {
  battleViewState.autoCastSig = enabled !== undefined ? enabled : !battleViewState.autoCastSig;
  return battleViewState.autoCastSig;
}

export function togglePauseOnSigReady(enabled?: boolean): boolean {
  battleViewState.pauseOnSigReady = enabled !== undefined ? enabled : !battleViewState.pauseOnSigReady;
  return battleViewState.pauseOnSigReady;
}

export function resetBattleViewState(): void {
  const fresh = createDefaultBattleViewState();
  Object.assign(battleViewState, fresh);
}

// ==========================================
// Data Adapters (1v1 & 2v2/Grid Unified Schema)
// ==========================================

/**
 * แปลงข้อมูลการต่อสู้ 1v1 (Main + Backup) เข้าสู่โครงสร้าง BattleFighterViewData
 */
export function adapt1v1BattleData(
  session: BattleSession,
  snapshotOrActiveSnap?: { teamA: TeamSnapshot; teamB: TeamSnapshot; winner?: any } | FighterSnapshot | null
): {
  party: BattleFighterViewData[];
  enemies: BattleFighterViewData[];
} {
  const teamA = session.teamA;
  const teamB = session.teamB;

  const isFullSnap = Boolean(
    snapshotOrActiveSnap &&
    typeof snapshotOrActiveSnap === 'object' &&
    'teamA' in snapshotOrActiveSnap &&
    'teamB' in snapshotOrActiveSnap
  );
  const snapA = isFullSnap ? (snapshotOrActiveSnap as { teamA: TeamSnapshot; teamB: TeamSnapshot }).teamA : null;
  const snapB = isFullSnap ? (snapshotOrActiveSnap as { teamA: TeamSnapshot; teamB: TeamSnapshot }).teamB : null;

  const activeIndexA = snapA ? snapA.activeIndex : teamA.activeIndex;
  const activeIndexB = snapB ? snapB.activeIndex : teamB.activeIndex;

  const mapFighter = (
    f: any,
    isActive: boolean,
    isBackup: boolean,
    side: CombatSide,
    snapF?: FighterSnapshot
  ): BattleFighterViewData => {
    const meta = HERO_AND_ENEMY_MAP.get(f.id);
    const effSpd = f.baseStats ? Math.round(f.baseStats.spd || 50) : 50;
    const hp = snapF !== undefined ? snapF.hp : f.hp;
    const maxHp = snapF !== undefined ? snapF.maxHp : (f.maxHp || f.baseStats?.maxHp || 100);
    const sp = snapF !== undefined ? snapF.sp : f.sp;
    const maxSp = snapF !== undefined ? snapF.maxSp : (f.maxSp || f.baseStats?.maxSp || 100);
    const shield = snapF !== undefined ? snapF.shield : (f.shield || 0);
    const gauge = snapF !== undefined ? snapF.gauge : (f.gauge || 0);
    const effects = snapF !== undefined ? snapF.effects : (f.effects || []);
    return {
      id: f.id,
      name: f.name,
      rarity: f.rarity || meta?.rarity || 'B',
      element: f.element || meta?.element || 'fire',
      role: f.role || meta?.role || 'Striker',
      archetype: meta?.archetype || 'Balanced',
      level: f.level || 1,
      stars: f.stars || 1,
      hp,
      maxHp,
      sp,
      maxSp,
      shield,
      gauge,
      maxGauge: 100,
      skillSlots: Array.isArray(f.skillSlots) ? f.skillSlots : (meta?.defaultSkills || []),
      signatureName: f.signatureName || meta?.signatureName || 'ท่าไม้ตาย',
      abilityName: f.abilityName || meta?.ability?.name || '',
      abilityDescription: f.abilityDescription || meta?.ability?.description || '',
      effects,
      isKo: hp <= 0,
      isActive,
      isBackup,
      side,
      effectiveSpd: effSpd,
      pos: side === 'A' ? (isBackup ? { row: 'back', col: 1 } : { row: 'front', col: 1 }) : (isBackup ? { row: 'back', col: 1 } : { row: 'front', col: 1 }),
    };
  };

  const party: BattleFighterViewData[] = teamA.fighters.map((f, idx) => {
    const isActive = idx === activeIndexA;
    return mapFighter(f, isActive, !isActive, 'A', snapA?.fighters[idx]);
  });

  const enemies: BattleFighterViewData[] = teamB.fighters.map((f, idx) => {
    const isActive = idx === activeIndexB;
    return mapFighter(f, isActive, !isActive, 'B', snapB?.fighters[idx]);
  });

  return { party, enemies };
}

/**
 * แปลงข้อมูลการต่อสู้ 2v2 Tactical Grid เข้าสู่โครงสร้าง BattleFighterViewData
 */
export function adapt2v2BattleData(
  ts: TeamBattleSession,
  snap?: { teamA: TeamSnapshot; teamB: TeamSnapshot; winner?: any } | null
): {
  party: BattleFighterViewData[];
  enemies: BattleFighterViewData[];
} {
  const mapTeamFighter = (tf: TeamFighterState, side: CombatSide, snapF?: FighterSnapshot): BattleFighterViewData => {
    const meta = HERO_AND_ENEMY_MAP.get(tf.id);
    const effSpd = tf.baseStats ? Math.round(tf.baseStats.spd || 50) : 50;
    const hp = snapF !== undefined ? snapF.hp : tf.hp;
    const maxHp = snapF !== undefined ? snapF.maxHp : (tf.baseStats?.maxHp || 100);
    const sp = snapF !== undefined ? snapF.sp : tf.sp;
    const maxSp = snapF !== undefined ? snapF.maxSp : (tf.baseStats?.maxSp || 100);
    const shield = snapF !== undefined ? snapF.shield : (tf.shield || 0);
    const gauge = snapF !== undefined ? snapF.gauge : (tf.gauge || 0);
    const effects = snapF !== undefined ? snapF.effects : (tf.effects || []);
    return {
      id: tf.id,
      name: tf.name,
      rarity: tf.rarity || meta?.rarity || 'B',
      element: tf.element || meta?.element || 'fire',
      role: tf.role || meta?.role || 'Striker',
      archetype: meta?.archetype || 'Balanced',
      level: (tf as any).level || 1,
      stars: (tf as any).stars || 1,
      hp,
      maxHp,
      sp,
      maxSp,
      shield,
      gauge,
      maxGauge: 100,
      skillSlots: Array.isArray(tf.skillSlots) ? tf.skillSlots : (meta?.defaultSkills || []),
      signatureName: tf.signatureName || meta?.signatureName || 'ท่าไม้ตาย',
      abilityName: tf.abilityName || meta?.ability?.name || '',
      abilityDescription: tf.abilityDescription || meta?.ability?.description || '',
      effects,
      isKo: hp <= 0,
      isActive: hp > 0,
      isBackup: false,
      side,
      pos: tf.pos,
      roleAffinityActive: tf.roleAffinityActive,
      roleAffinityDesc: tf.roleAffinityDesc,
      effectiveSpd: effSpd,
    };
  };

  const party = ts.squadA.fighters.map((f, idx) => mapTeamFighter(f, 'A', snap?.teamA.fighters[idx]));
  const enemies = ts.squadB.fighters.map((f, idx) => mapTeamFighter(f, 'B', snap?.teamB.fighters[idx]));

  return { party, enemies };
}

// ==========================================
// Fighter Avatars & Visual Helpers
// ==========================================

const HERO_EMOJI_MAP: Record<string, string> = {
  rooster: '🐓',
  cat: '🐱',
  dog: '🐶',
  buffalo: '🐃',
  boar: '🐗',
  monkey: '🐒',
  crocodile: '🐊',
  tiger: '🐅',
  elephant: '🐘',
  bear: '🐻',
  owl: '🦉',
  snake: '🐍',
  dragon: '🐉',
  phoenix: '🦚',
  naga: '🐍',
  qilin: '🦄',
  behemoth: '🦣',
  leviathan: '🐋',
  garuda: '🦅',
  thunderbird: '🌩️',
  fenrir: '🐺',
  verdant_hydra: '🐲',
  king_basilisk: '🐍',
  cerberus: '🐕',
  solar_griffin: '🦅',
  nine_tailed_fox: '🦊',
  basilisk: '🦎',
  xuanwu: '🐢',
  ziz: '🦅',
  khalkotauroi: '🐂',
  erawan: '🐘',
  yeti: '🦍',
  tarasque: '🐲',
  karkinos: '🦀',
  ammut: '🐊',
  nemean_lion: '🦁',
  baku: '🦏',
  tsuchigumo: '🕷️',
  kraken: '🦑',
  kamaitachi: '🌪️',
  skoll: '🐺',
  raiju: '⚡',
  wendigo: '🦌',
  weretiger_saming: '🐅',
  manticore: '🦂',
  camazotz: '🦇',
  nue: '🐒',
};

/**
 * ดึงไอคอนหรืออีโมจิประจำตัวของนักสู้ (ฮีโร่หรือศัตรู)
 */
export function getFighterAvatarEmoji(id: string, defaultElement?: string): string {
  const lower = id.toLowerCase();
  if (HERO_EMOJI_MAP[lower]) return HERO_EMOJI_MAP[lower];
  if (lower.includes('behemoth')) return '🦣';
  if (lower.includes('leviathan')) return '🐋';
  if (lower.includes('garuda')) return '🦅';
  if (lower.includes('thunderbird')) return '🌩️';
  if (lower.includes('fenrir')) return '🐺';
  if (lower.includes('hydra')) return '🐲';
  if (lower.includes('king_basilisk')) return '🐍';
  if (lower.includes('cerberus')) return '🐕';
  if (lower.includes('griffin')) return '🦅';
  if (lower.includes('nine_tailed_fox')) return '🦊';
  if (lower.includes('basilisk')) return '🦎';
  if (lower.includes('rooster') || lower.includes('chicken')) return '🐓';
  if (lower.includes('cat')) return '🐱';
  if (lower.includes('dog') || lower.includes('wolf')) return '🐺';
  if (lower.includes('buffalo') || lower.includes('bull')) return '🐃';
  if (lower.includes('boar') || lower.includes('pig')) return '🐗';
  if (lower.includes('monkey') || lower.includes('ape')) return '🐒';
  if (lower.includes('crocodile') || lower.includes('alligator')) return '🐊';
  if (lower.includes('tiger')) return '🐅';
  if (lower.includes('elephant')) return '🐘';
  if (lower.includes('bear')) return '🐻';
  if (lower.includes('owl')) return '🦉';
  if (lower.includes('snake')) return '🐍';
  if (lower.includes('dragon')) return '🐉';
  if (lower.includes('phoenix')) return '🦚';
  if (lower.includes('thorn') || lower.includes('plant') || lower.includes('vine')) return '🥀';
  if (lower.includes('golem') || lower.includes('rock') || lower.includes('stone')) return '🗿';
  if (lower.includes('bat')) return '🦇';
  if (lower.includes('spider')) return '🕷️';
  if (lower.includes('skeleton')) return '💀';
  if (lower.includes('slime') || lower.includes('blob')) return '💧';
  if (lower.includes('void') || lower.includes('shadow') || lower.includes('stalker')) return '👾';
  if (lower.includes('goblin') || lower.includes('orc')) return '👺';

  if (defaultElement && ELEMENT_MAP.has(defaultElement)) {
    return ELEMENT_MAP.get(defaultElement)!.icon;
  }
  return '🐾';
}

// ==========================================
// Timeline & Queue Selectors
// ==========================================

/**
 * คำนวณคิว Turn Order Timeline จากนักสู้ทุกคนที่ยังมีชีวิตอยู่ เรียงตามค่าความเร็ว SPD จากมากไปน้อย
 */
export function computeTurnOrderTimeline(
  allFighters: BattleFighterViewData[],
  activeFighterId?: string
): BattleTimelineItem[] {
  // กรองเฉพาะนักสู้ที่ยังมีชีวิตอยู่และพร้อมแอคชัน (ไม่รวมตัวสำรองที่ยังไม่ได้ลงสนาม)
  const onField = allFighters.filter(f => !f.isKo && !f.isBackup);
  const fightersToQueue = onField.length > 0 ? onField : allFighters.filter(f => !f.isKo);
  fightersToQueue.sort((a, b) => b.effectiveSpd - a.effectiveSpd);

  return fightersToQueue.map((f, idx) => {
    const hpPct = Math.max(0, Math.min(100, Math.round((f.hp / Math.max(1, f.maxHp)) * 100)));
    const isActiveTurn = activeFighterId ? f.id === activeFighterId : idx === 0;
    return {
      id: f.id,
      name: f.name,
      rarity: f.rarity,
      element: f.element,
      role: f.role,
      side: f.side,
      effectiveSpd: f.effectiveSpd,
      isActiveTurn,
      isKo: f.isKo,
      hpPct,
    };
  });
}

// ==========================================
// Combat Log Categorizer & Filter
// ==========================================

/**
 * จำแนกหมวดหมู่ของเหตุการณ์ใน Combat Log ออกเป็น 'battle' | 'system' | 'loot'
 */
export function classifyTurnEvent(ev: any): LogTabType {
  if (!ev) return 'battle';
  
  const msg = typeof ev === 'string' ? ev : ev.message || '';
  const actionType = ev.actionType || ev.type || '';

  // Loot category
  if (
    actionType === 'loot' ||
    msg.includes('ได้รับ') ||
    msg.includes('Gold') ||
    msg.includes('EXP') ||
    msg.includes('ดรอป') ||
    msg.includes('รางวัล') ||
    msg.includes('ไข่')
  ) {
    return 'loot';
  }

  // System category
  if (
    actionType === 'system' ||
    actionType === 'swap' ||
    actionType === 'ko_swap' ||
    actionType === 'skip' ||
    msg.includes('เทิร์น') ||
    msg.includes('รอบที่') ||
    msg.includes('สลับตัว') ||
    msg.includes('หมดสภาพ') ||
    msg.includes('เริ่มการต่อสู้') ||
    msg.includes('ชัยชนะ') ||
    msg.includes('พ่ายแพ้') ||
    msg.includes('ระบบ')
  ) {
    return 'system';
  }

  // Default to battle
  return 'battle';
}

/**
 * กรอง Combat Logs ตามแท็บที่ผู้เล่นเลือก
 */
export function filterCombatLogs(logs: any[], activeTab: LogTabType): any[] {
  if (!logs || !logs.length) return [];
  return logs.filter(log => {
    const cat = classifyTurnEvent(log);
    return cat === activeTab;
  });
}

// ==========================================
// Area 1: Top HUD Component & Turn Order Timeline
// ==========================================

export interface BattleTopHudConfig {
  stageTitle: string;
  stageSubtitle?: string;
  stageTypeBadge?: string;
  roundOrTurn: number;
  maxRoundsOrTurns?: number;
  wave?: number;
  maxWaves?: number;
  livingEnemies: number;
  totalEnemies: number;
  livingParty?: number;
  totalParty?: number;
  battleSource?: 'sandbox' | 'campaign';
  mode?: '1v1_tag' | '2v2_grid';
}

/**
 * เรนเดอร์ Area 1: Top HUD (ข้อมูลด่าน, ตัวนับเทิร์น/เวฟ/ศัตรู, และปุ่มควบคุมความเร็ว/พักรบ)
 */
export function renderBattleTopHudHtml(config: BattleTopHudConfig, state: BattleViewState): string {
  const badgeText =
    config.stageTypeBadge ||
    (config.battleSource === 'campaign'
      ? '🗺️ CAMPAIGN'
      : config.mode === '2v2_grid'
      ? '⚔️ 2v2 GRID'
      : '🥊 1v1 TAG');

  return `
    <header class="battle-top-hud" id="battle-top-hud">
      <!-- Left: Stage & Dungeon Info -->
      <div class="hud-stage-info">
        <span class="hud-stage-badge">${badgeText}</span>
        <div class="hud-title-col">
          <h1 class="hud-stage-title">${config.stageTitle}</h1>
          ${config.stageSubtitle ? `<span class="hud-stage-sub">${config.stageSubtitle}</span>` : ''}
        </div>
      </div>

      <!-- Center: Battle Counters (Round, Wave, Living Enemies) -->
      <div class="hud-center-counters">
        <div class="hud-counter-pill round-pill" title="รอบหรือเทิร์นการต่อสู้">
          <span class="pill-lbl">รอบ/เทิร์น:</span>
          <strong class="pill-val" id="hud-round-val">${config.roundOrTurn}${config.maxRoundsOrTurns ? `/${config.maxRoundsOrTurns}` : ''}</strong>
        </div>
        ${
          config.wave !== undefined
            ? `
        <div class="hud-counter-pill wave-pill" title="เวฟศัตรู">
          <span class="pill-lbl">เวฟ:</span>
          <strong class="pill-val" id="hud-wave-val">${config.wave}${config.maxWaves ? `/${config.maxWaves}` : ''}</strong>
        </div>`
            : ''
        }
        <div class="hud-counter-pill enemy-pill ${config.livingEnemies === 0 ? 'cleared' : ''}" title="ศัตรูที่ยังมีชีวิต">
          <span class="pill-lbl">ศัตรูคงเหลือ:</span>
          <strong class="pill-val ${config.livingEnemies === 0 ? 'cleared' : ''}" id="hud-enemy-val">${config.livingEnemies}${config.totalEnemies ? `/${config.totalEnemies}` : ''}</strong>
        </div>
        ${
          config.livingParty !== undefined && config.totalParty !== undefined
            ? `
        <div class="hud-counter-pill party-pill" title="สมาชิกปาร์ตี้ที่พร้อมรบ">
          <span class="pill-lbl">ปาร์ตี้:</span>
          <strong class="pill-val" id="hud-party-val">${config.livingParty}/${config.totalParty}</strong>
        </div>`
            : ''
        }
      </div>

      <!-- Right: Battle Speed & Action Controls -->
      <div class="hud-controls-group">
        <div class="speed-toggle-box" title="ความเร็วการรบ">
          <span class="speed-label">ความเร็ว:</span>
          <button type="button" class="btn-hud-speed ${state.speed === 1 ? 'active' : ''}" data-speed="1">1x</button>
          <button type="button" class="btn-hud-speed ${state.speed === 2 ? 'active' : ''}" data-speed="2">2x</button>
          <button type="button" class="btn-hud-speed ${state.speed === 3 ? 'active' : ''}" data-speed="3">3x</button>
        </div>
        <button type="button" class="btn-hud-action btn-play-pause ${state.isPlaying ? 'is-playing' : 'is-paused'}" id="btn-battle-play-pause" title="${state.isPlaying ? 'หยุดชั่วคราว' : 'เล่นต่อ'}">
          ${state.isPlaying ? '⏸️ หยุด' : '▶️ เล่นต่อ'}
        </button>
        <button type="button" class="btn-hud-action btn-step" id="btn-battle-step" title="ขยับทีละ 1 เทิร์น">
          ⏭️ ทีละเทิร์น
        </button>
        <button type="button" class="btn-hud-action btn-restart" id="btn-battle-restart" title="เริ่มการต่อสู้ใหม่">
          🔄 เริ่มใหม่
        </button>
        <button type="button" class="btn-hud-action btn-settings" id="btn-battle-settings" title="ตั้งค่าระบบต่อสู้">
          ⚙️ ตั้งค่า
        </button>
        <button type="button" class="btn-hud-action btn-retreat" id="btn-battle-retreat" title="ยอมแพ้หรือออกจากการต่อสู้">
          🏳️ ออก/ยอมแพ้
        </button>
      </div>
    </header>
  `;
}

/**
 * เรนเดอร์ Turn Order Timeline Ribbon แสดงคิวความเร็วตามค่า SPD ของนักสู้ทุกคน
 */
export function renderTurnOrderTimelineHtml(
  timelineItems: BattleTimelineItem[],
  activeFighterId?: string
): string {
  const itemsHtml = timelineItems
    .map((item, idx) => {
      const isPlayer = item.side === 'A';
      const sideClass = isPlayer ? 'side-player' : 'side-enemy';
      const el = ELEMENT_MAP.get(item.element);
      const elemIcon = el?.icon || '✨';
      const elemName = el?.name || item.element;
      const elemColor = el?.color || '#ffd54f';
      const avatar = getFighterAvatarEmoji(item.id, item.element);
      const isActive = activeFighterId ? item.id === activeFighterId : item.isActiveTurn;
      const hpColor = item.hpPct > 50 ? '#66bb6a' : item.hpPct > 20 ? '#ffa726' : '#ef5350';

      return `
        <div 
          class="timeline-fighter-badge ${sideClass} ${isActive ? 'active-turn' : ''} ${item.isKo ? 'is-ko' : ''}"
          data-fighter-id="${item.id}"
          data-side="${item.side}"
          role="button"
          tabindex="0"
          title="${item.name} (${isPlayer ? 'ฝ่ายเรา' : 'ศัตรู'}) • SPD ${item.effectiveSpd} • HP ${item.hpPct}%"
        >
          <div class="t-badge-order-num">#${idx + 1}</div>
          <div class="t-badge-avatar-wrap">
            <span class="t-badge-avatar">${avatar}</span>
            <span class="t-badge-elem" style="color: ${elemColor};" title="ธาตุ${elemName}">${elemIcon}</span>
            ${isActive ? '<span class="t-badge-active-pill">เทิร์นนี้</span>' : ''}
          </div>
          <div class="t-badge-info">
            <div class="t-badge-name-row">
              <span class="t-badge-name">${item.name}</span>
              <span class="t-badge-side-tag ${sideClass}">${isPlayer ? 'เรา' : 'ศัตรู'}</span>
            </div>
            <div class="t-badge-stats-row">
              <span class="t-badge-spd" title="ความเร็ว SPD">⚡${item.effectiveSpd}</span>
              <div class="t-badge-hp-mini-bar" title="HP: ${item.hpPct}%">
                <div class="t-badge-hp-fill" style="width: ${item.hpPct}%; background-color: ${hpColor};"></div>
              </div>
              <span class="t-badge-hp-txt">${item.hpPct}%</span>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="turn-order-timeline-bar" id="turn-order-timeline-bar">
      <div class="timeline-lead-box">
        <span class="timeline-lead-icon">⏱️</span>
        <div class="timeline-lead-texts">
          <span class="timeline-lead-label">คิวเทิร์น:</span>
          <span class="timeline-lead-sub">เรียงตาม SPD</span>
        </div>
      </div>
      <div class="timeline-ribbon-track" id="timeline-ribbon-track">
        ${itemsHtml || '<div class="timeline-empty-notice">ไม่มีนักสู้ในคิวเทิร์น</div>'}
      </div>
    </div>
  `;
}

export interface BattleTopHudHandlers {
  onSpeedChange?: (speed: 1 | 2 | 3) => void;
  onPlayPauseToggle?: () => void;
  onStepTurn?: () => void;
  onRestartBattle?: () => void;
  onRetreat?: () => void;
  onOpenSettings?: () => void;
  onTimelineFighterClick?: (fighterId: string, side: CombatSide) => void;
}

/**
 * ผูก Event Listeners สำหรับ Area 1: Top HUD และ Turn Order Timeline
 */
export function bindBattleTopHudEvents(
  container: HTMLElement,
  handlers: BattleTopHudHandlers = {}
): void {
  // Speed buttons 1x, 2x, 3x
  container.querySelectorAll<HTMLButtonElement>('.btn-hud-speed').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const spd = Number(btn.dataset.speed) as 1 | 2 | 3;
      if (spd === 1 || spd === 2 || spd === 3) {
        setBattleSpeed(spd);
        container.querySelectorAll('.btn-hud-speed').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        handlers.onSpeedChange?.(spd);
      }
    });
  });

  // Play / Pause button
  const playPauseBtn = container.querySelector('#btn-battle-play-pause');
  playPauseBtn?.addEventListener('click', e => {
    e.stopPropagation();
    battleViewState.isPlaying = !battleViewState.isPlaying;
    if (playPauseBtn) {
      playPauseBtn.textContent = battleViewState.isPlaying ? '⏸️ หยุด' : '▶️ เล่นต่อ';
      playPauseBtn.classList.toggle('is-playing', battleViewState.isPlaying);
      playPauseBtn.classList.toggle('is-paused', !battleViewState.isPlaying);
    }
    handlers.onPlayPauseToggle?.();
  });

  // Step turn button
  container.querySelector('#btn-battle-step')?.addEventListener('click', e => {
    e.stopPropagation();
    handlers.onStepTurn?.();
  });

  // Restart battle button
  container.querySelector('#btn-battle-restart')?.addEventListener('click', e => {
    e.stopPropagation();
    handlers.onRestartBattle?.();
  });

  // Retreat button
  container.querySelector('#btn-battle-retreat')?.addEventListener('click', e => {
    e.stopPropagation();
    handlers.onRetreat?.();
  });

  // Settings button
  container.querySelector('#btn-battle-settings')?.addEventListener('click', e => {
    e.stopPropagation();
    handlers.onOpenSettings?.();
  });

  // Timeline fighter badges click (e.g. to target enemy or inspect party member)
  container.querySelectorAll<HTMLElement>('.timeline-fighter-badge').forEach(badge => {
    badge.addEventListener('click', () => {
      const fid = badge.dataset.fighterId;
      const side = badge.dataset.side as CombatSide;
      if (fid && side) {
        if (side === 'B') {
          // ตัดระบบเล็งเป้าศัตรูออกตามคำสั่ง Game Director
        } else {
          setBattlePartyMember(fid);
        }
        handlers.onTimelineFighterClick?.(fid, side);
      }
    });
  });
}

// ==========================================
// Area 2: Party Status Panel & Status Effect UI
// ==========================================

export interface FormattedStatusEffect {
  type: string;
  name: string;
  icon: string;
  text: string;
  description: string;
  isBuff: boolean;
  duration: number;
  stacks?: number;
}

/**
 * แปลงข้อมูลบทบาท (Role) ของนักสู้เป็นไอคอนแสดงผล
 */
export function getRoleIcon(role: string): string {
  switch (role.toLowerCase()) {
    case 'striker':
      return '⚔️';
    case 'tank':
      return '🛡️';
    case 'assassin':
      return '⚡';
    case 'balanced':
      return '⚖️';
    case 'support':
      return '💚';
    case 'sniper':
      return '🎯';
    case 'mage':
      return '🔮';
    case 'bruiser':
      return '💥';
    case 'boss':
      return '👑';
    default:
      return '🐾';
  }
}

/**
 * จัดรูปแบบและคำอธิบายของสถานะบัฟ/ดีบัฟ (Status Effect)
 */
export function formatStatusEffectBadge(ef: ActiveEffect): FormattedStatusEffect {
  const dur = ef.duration ?? 0;
  const stacks = ef.stacks ?? 1;

  switch (ef.type) {
    case 'burn':
      return {
        type: 'burn',
        name: 'เผาไหม้',
        icon: '🔥',
        text: `🔥 เผาไหม้ ${dur}T`,
        description: 'ได้รับความเสียหายจากไฟเมื่อเริ่มเทิร์น',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'poison':
      return {
        type: 'poison',
        name: 'พิษ',
        icon: '☠️',
        text: `☠️ พิษ x${stacks} ${dur}T`,
        description: `ดาเมจพิษรุนแรงขึ้นตามจำนวน Stack (ปัจจุบัน ${stacks} ชั้น)`,
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'freeze':
      return {
        type: 'freeze',
        name: 'แช่แข็ง',
        icon: '❄️',
        text: `❄️ แช่แข็ง ${dur}T`,
        description: 'ร่างกายถูกแช่แข็ง ข้ามเทิร์นและไม่สามารถขยับได้',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'stun':
      return {
        type: 'stun',
        name: 'มึนงง',
        icon: '💫',
        text: `💫 มึนงง ${dur}T`,
        description: 'ติดสตัน มึนงง ข้ามเทิร์นการต่อสู้',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'root':
      return {
        type: 'root',
        name: 'ตรึงร่าง',
        icon: '🌿',
        text: `🌿 ตรึง ${dur}T`,
        description: 'ถูกรากไม้ตรึงร่าง ไม่สามารถหลบหลีกได้ (FLEE เป็น 0)',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'slow':
      return {
        type: 'slow',
        name: 'สโลว์',
        icon: '🐢',
        text: `🐢 สโลว์ ${dur}T`,
        description: 'ความเร็วลดลง ทำให้คิวแอคชันช้าลง',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'blind':
      return {
        type: 'blind',
        name: 'ตาบอด',
        icon: '🌑',
        text: `🌑 ตาบอด ${dur}T`,
        description: 'ความมืดบดบังสายตา ความแม่นยำ HIT ลดลงอย่างมาก',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'confusion':
      return {
        type: 'confusion',
        name: 'สับสน',
        icon: '🌀',
        text: `🌀 สับสน ${dur}T`,
        description: 'จิตใจปั่นป่วน มีโอกาสโจมตีพลาดหรือทำร้ายตัวเอง',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'bleed':
      return {
        type: 'bleed',
        name: 'เลือดไหล',
        icon: '🩸',
        text: `🩸 เลือดไหล ${dur}T`,
        description: 'เสียเลือดและ HP ต่อเนื่องทุกครั้งที่มีการขยับหรือโจมตี',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'taunt':
      return {
        type: 'taunt',
        name: 'ยั่วยุ',
        icon: '💢',
        text: `💢 ยั่วยุ ${dur}T`,
        description: 'ถูกยั่วยุ ต้องโจมตีใส่เป้าหมายที่กำหนดเท่านั้น',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'sleep':
      return {
        type: 'sleep',
        name: 'หลับใหล',
        icon: '💤',
        text: `💤 หลับใหล ${dur}T`,
        description: 'หลับลึก ไม่สามารถทำแอคชันได้จนกว่าจะโดนโจมตีปลุก',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'silence':
      return {
        type: 'silence',
        name: 'ใบ้',
        icon: '🔕',
        text: `🔕 ใบ้ ${dur}T`,
        description: 'ถูกผนึกพลังเวท ไม่สามารถร่ายสกิลหรือปลดปล่อยท่าไม้ตายได้',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'vulnerable':
      return {
        type: 'vulnerable',
        name: 'เปราะบาง',
        icon: '💔',
        text: `💔 เปราะบาง ${dur}T`,
        description: 'เกราะป้องกันแตกหัก รับความเสียหายแรงขึ้น 20%',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'wine_mist':
      return {
        type: 'wine_mist',
        name: 'ชโลมสุรา',
        icon: '🍶',
        text: `🍶 ชโลมสุรา ${dur}T`,
        description: 'กลิ่นสุราคลุ้ง หากโดนธาตุไฟจะระเบิดเป็นดาเมจ 2 เท่า',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'raging_thunder':
      return {
        type: 'raging_thunder',
        name: 'อัสนีคลั่ง',
        icon: '⚡',
        text: `⚡ อัสนีคลั่ง ${dur}T`,
        description: 'กระแสไฟฟ้าสถิตช็อต ชะลอความเร็วและลดพลังป้องกัน',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'counter_stance':
      return {
        type: 'counter_stance',
        name: 'สวนกลับ',
        icon: '🗡️',
        text: `🗡️ สวนกลับ ${dur}T`,
        description: 'ตั้งท่าสวนกลับ โต้ตอบการโจมตีทางกายภาพทันที',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'yata_mirror':
      return {
        type: 'yata_mirror',
        name: 'กระจกยาตะ',
        icon: '🪞',
        text: `🪞 กระจกยาตะ ${dur}T`,
        description: 'สะท้อนความเสียหายทางเวทมนตร์และดีบัฟกลับไปยังผู้ร่าย',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'shadow_clone':
      return {
        type: 'shadow_clone',
        name: 'เงามายา',
        icon: '👥',
        text: `👥 เงามายา ${dur}T`,
        description: 'แยกร่างเงา หลบหลีกการโจมตีครั้งถัดไป 100%',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'regen':
      return {
        type: 'regen',
        name: 'ฟื้นฟู',
        icon: '💚',
        text: `💚 ฟื้นฟู ${dur}T`,
        description: 'ฟื้นฟูพลังชีวิต HP ต่อเนื่องทุกเทิร์น',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'shield':
      return {
        type: 'shield',
        name: 'เกราะป้องกัน',
        icon: '🛡️',
        text: `🛡️ เกราะ ${dur}T`,
        description: 'ม่านพลังดูดซับความเสียหาย',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'fire_skin':
      return {
        type: 'fire_skin',
        name: 'ผิวกายเพลิง',
        icon: '🔥',
        text: `🔥 ผิวกายเพลิง ${dur > 99 ? '∞' : `${dur}T`}`,
        description: 'ดาเมจไฟแรงขึ้น 20% & เมื่อถูกโจมตี มีโอกาส 40% สะท้อนเผาไหม้ (หากติดอยู่แล้วจะระเบิด Ignite Burst 3% HP)',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'ice_skin':
      return {
        type: 'ice_skin',
        name: 'ผิวกายเหมันต์',
        icon: '🧊',
        text: `🧊 ผิวกายเหมันต์ ${dur}T`,
        description: 'เพิ่ม DEF+20% แต่ลด SPD-30% & เมื่อถูกโจมตี มีโอกาส 40% สะท้อนแช่แข็ง',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'berserk':
      return {
        type: 'berserk',
        name: 'คลั่งศึก',
        icon: '💢',
        text: `💢 คลั่งศึก ${dur}T`,
        description: 'เพิ่ม ATK+30%, SPD+20% แต่ลด DEF-20% และ HIT-10',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'stone_curse':
      return {
        type: 'stone_curse',
        name: 'กลายเป็นหิน',
        icon: '🗿',
        text: `🗿 กลายเป็นหิน ${dur}T`,
        description: 'กลายเป็นหิน (ธาตุดิน 1 เทิร์น) ข้ามเทิร์นและระงับการฟื้นฟูทั้งหมด',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'curse':
      return {
        type: 'curse',
        name: 'คำสาปมรณะ',
        icon: '🔮',
        text: `🔮 คำสาปมรณะ ∞`,
        description: 'สูญเสีย HP 3% ทุกเทิร์นจนกว่าจะตาย (แก้ทางได้ด้วยการล้างสถานะเท่านั้น)',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'paralysis':
      return {
        type: 'paralysis',
        name: 'อัมพาต',
        icon: '⚡',
        text: `⚡ อัมพาต ${dur}T`,
        description: 'ลด SPD ลง 25% และมีโอกาส 60% ที่จะชะงักข้ามการโจมตีในแต่ละเทิร์น',
        isBuff: false,
        duration: dur,
        stacks,
      };
    case 'energy_coat': {
      const coatPct = Math.round((ef.value ?? 0.40) * 100);
      return {
        type: 'energy_coat',
        name: 'เกราะพลังงาน',
        icon: '🛡️⚡',
        text: `🛡️⚡ Energy Coat ${dur}T`,
        description: `เปลี่ยนความเสียหายที่ได้รับ ${coatPct}% ไปหักจาก SP แทน HP จนกว่า SP จะหมด`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'golden_bell_shield': {
      const shPct = Math.round((ef.value ?? 0.50) * 100);
      return {
        type: 'golden_bell_shield',
        name: 'เกราะระฆังทอง',
        icon: '🔔',
        text: `🔔 เกราะระฆังทอง ${dur}T`,
        description: `สร้างเกราะป้องกัน ${shPct}% ของ Max HP แต่ลด SPD ลง 30% (สูงสุด 2 เทิร์น, ไม่ทับซ้อนเกราะอื่น)`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'elemental_ward': {
      const redPct = Math.round((ef.value ?? 0.10) * 100);
      return {
        type: 'elemental_ward',
        name: 'เกราะสลายธาตุ',
        icon: '💠',
        text: `💠 เกราะสลายธาตุ ${dur}T`,
        description: `ลดทอนความเสียหายจากการโจมตีด้วยธาตุต่างๆ ลง ${redPct}% (สูงสุด 2 เทิร์น, ไม่ทับซ้อนเกราะอื่น)`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'iron_body':
      return {
        type: 'iron_body',
        name: 'กายาเหล็ก',
        icon: '🦾',
        text: `🦾 กายาเหล็ก ${dur}T`,
        description: 'เพิ่ม DEF +50%, ลดดาเมจสุดท้าย 30%, CRI +40%, ลด SPD 50% และป้องกันสตัน/อัมพาต 100% (ไม่ทับซ้อนเกราะอื่น)',
        isBuff: true,
        duration: dur,
        stacks,
      };
    case 'iron_fortress': {
      const redPct = Math.round((ef.value ?? 0.15) * 100);
      return {
        type: 'iron_fortress',
        name: 'ค่ายกลปราการเหล็ก',
        icon: '🏰',
        text: `🏰 ปราการเหล็ก ${dur}T`,
        description: `อาณาเขตปราการเหล็ก ลดความเสียหายที่ได้รับลง ${redPct}%`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'buff_atk': {
      const val = Math.round((ef.value ?? 0) * 100);
      return {
        type: 'buff_atk',
        name: 'พลังโจมตี+',
        icon: '⚔️',
        text: `⚔️ ATK+${val}% ${dur}T`,
        description: `เพิ่มพลังโจมตีขึ้น ${val}%`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'debuff_atk': {
      const val = Math.round((ef.value ?? 0) * 100);
      return {
        type: 'debuff_atk',
        name: 'พลังโจมตี-',
        icon: '🔻',
        text: `🔻 ATK-${val}% ${dur}T`,
        description: `ลดพลังโจมตีลง ${val}%`,
        isBuff: false,
        duration: dur,
        stacks,
      };
    }
    case 'buff_def': {
      const val = Math.round((ef.value ?? 0) * 100);
      return {
        type: 'buff_def',
        name: 'พลังป้องกัน+',
        icon: '🛡️',
        text: `🛡️ DEF+${val}% ${dur}T`,
        description: `เพิ่มพลังป้องกันขึ้น ${val}%`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'debuff_def': {
      const val = Math.round((ef.value ?? 0) * 100);
      return {
        type: 'debuff_def',
        name: 'พลังป้องกัน-',
        icon: '💔',
        text: `💔 DEF-${val}% ${dur}T`,
        description: `ลดพลังป้องกันลง ${val}%`,
        isBuff: false,
        duration: dur,
        stacks,
      };
    }
    case 'buff_spd': {
      const val = Math.round((ef.value ?? 0) * 100);
      return {
        type: 'buff_spd',
        name: 'ความเร็ว+',
        icon: '⚡',
        text: `⚡ SPD+${val}% ${dur}T`,
        description: `เพิ่มความเร็วการออกเทิร์นขึ้น ${val}%`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'debuff_spd': {
      const val = Math.round((ef.value ?? 0) * 100);
      return {
        type: 'debuff_spd',
        name: 'ความเร็ว-',
        icon: '🐌',
        text: `🐌 SPD-${val}% ${dur}T`,
        description: `ลดความเร็วการออกเทิร์นลง ${val}%`,
        isBuff: false,
        duration: dur,
        stacks,
      };
    }
    case 'buff_cri': {
      const val = ef.value ?? 0;
      return {
        type: 'buff_cri',
        name: 'คริติคอล+',
        icon: '🎯',
        text: `🎯 CRI+${val}% ${dur}T`,
        description: `เพิ่มโอกาสติดคริติคอล ${val}%`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'debuff_cri': {
      const val = ef.value ?? 0;
      return {
        type: 'debuff_cri',
        name: 'คริติคอล-',
        icon: '🔻',
        text: `🔻 CRI-${val}% ${dur}T`,
        description: `ลดโอกาสติดคริติคอลลง ${val}%`,
        isBuff: false,
        duration: dur,
        stacks,
      };
    }
    case 'buff_hit': {
      const val = ef.value ?? 0;
      return {
        type: 'buff_hit',
        name: 'แม่นยำ+',
        icon: '👁️',
        text: `👁️ HIT+${val} ${dur}T`,
        description: `เพิ่มความแม่นยำในการโจมตี +${val}`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'debuff_hit': {
      const val = ef.value ?? 0;
      return {
        type: 'debuff_hit',
        name: 'แม่นยำ-',
        icon: '🌫️',
        text: `🌫️ HIT-${val} ${dur}T`,
        description: `ลดความแม่นยำในการโจมตีลง -${val}`,
        isBuff: false,
        duration: dur,
        stacks,
      };
    }
    case 'buff_flee': {
      const val = ef.value ?? 0;
      return {
        type: 'buff_flee',
        name: 'หลบหลีก+',
        icon: '💨',
        text: `💨 FLEE+${val} ${dur}T`,
        description: `เพิ่มความสามารถในการหลบหลีก +${val}`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'buff_ab': {
      const val = ef.value ?? 0;
      return {
        type: 'buff_ab',
        name: 'เจาะเกราะ+',
        icon: '🔨',
        text: `🔨 เจาะเกราะ+${val}% ${dur}T`,
        description: `เจาะเกราะป้องกันศัตรู +${val}%`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    case 'buff_block': {
      const val = ef.value ?? 0;
      return {
        type: 'buff_block',
        name: 'บล็อก+',
        icon: '🧱',
        text: `🧱 บล็อก+${val}% ${dur}T`,
        description: `เพิ่มโอกาสบล็อกลดดาเมจ 50% ขึ้น +${val}%`,
        isBuff: true,
        duration: dur,
        stacks,
      };
    }
    default: {
      const isBuff = ef.type.startsWith('buff_');
      return {
        type: ef.type,
        name: ef.type,
        icon: isBuff ? '✨' : '⚠️',
        text: `${ef.type} ${dur}T`,
        description: `สถานะพิเศษ ${ef.type}`,
        isBuff,
        duration: dur,
        stacks,
      };
    }
  }
}

/**
 * เรนเดอร์รายการสถานะบัฟ/ดีบัฟ (Status Effects List)
 */
export function renderStatusEffectsListHtml(effects: ActiveEffect[]): string {
  if (!effects || effects.length === 0) {
    return `<span class="no-effects-txt">ไม่มีสถานะผิดปกติ</span>`;
  }

  const badges = effects
    .map(ef => {
      const item = formatStatusEffectBadge(ef);
      const durBadge = item.type === 'curse' || item.duration > 99 ? '<span class="eff-dur">∞</span>' : item.duration > 0 ? `<span class="eff-dur">${item.duration}T</span>` : '';
      const stackBadge =
        item.stacks && item.stacks > 1 ? `<span class="eff-stack">x${item.stacks}</span>` : '';

      return `
        <span class="status-effect-badge ${item.isBuff ? 'buff' : 'debuff'}" title="${item.description} (เหลือ ${item.duration} เทิร์น)">
          <span class="eff-icon">${item.icon}</span>
          <span class="eff-name">${item.name}</span>
          ${stackBadge}
          ${durBadge}
        </span>
      `;
    })
    .join('');

  return `<div class="status-effects-list">${badges}</div>`;
}

/**
 * เรนเดอร์รายการสถานะบัฟ/ดีบัฟสำหรับแสดงเหนือศีรษะตัวละครในสนามต่อสู้ (Overhead Status Effects)
 * ปรับปรุงตามคำสั่ง Game Director: แสดงเฉพาะไอคอนสถานะ (Icon Only) เพื่อไม่ให้บล็อคตัวละครขยายตามความยาวชื่อ
 * โดยเก็บชื่อสถานะและรายละเอียดทั้งหมดไว้ใน title tooltip เมื่อนำเมาส์ไปชี้/แตะ
 */
export function renderOverheadEffectsHtml(effects: ActiveEffect[]): string {
  if (!effects || effects.length === 0) {
    return '';
  }

  return effects
    .map(ef => {
      const item = formatStatusEffectBadge(ef);
      const stackTxt = item.stacks && item.stacks > 1 ? `<span class="ov-eff-stack">x${item.stacks}</span>` : '';
      const durLabel = item.type === 'curse' || item.duration > 99 ? 'ถาวร' : item.duration > 0 ? `${item.duration} เทิร์น` : '';
      const durInfo = durLabel ? ` (เหลือ ${durLabel})` : '';
      const tooltip = `${item.name}${item.stacks && item.stacks > 1 ? ` (x${item.stacks})` : ''}: ${item.description}${durInfo}`;
      return `<span class="overhead-effect-pill ${item.isBuff ? 'buff' : 'debuff'}" title="${tooltip}"><span class="ov-eff-icon">${item.icon}</span>${stackTxt}</span>`;
    })
    .join('');
}

/**
 * เรนเดอร์การ์ดแสดงสถานะของสมาชิกในปาร์ตี้ 1 ตัวละคร
 */
export function renderPartyMemberCardHtml(
  f: BattleFighterViewData,
  isSelected: boolean
): string {
  const avatar = getFighterAvatarEmoji(f.id, f.element);
  const isFrozen = (f.effects || []).some(e => e.type === 'freeze');
  const isPetrified = (f.effects || []).some(e => e.type === 'stone_curse');
  const effectiveElem = isFrozen ? 'ice' : isPetrified ? 'earth' : f.element;
  const isElemOverridden = effectiveElem !== f.element;
  const el = ELEMENT_MAP.get(effectiveElem);
  const elemIcon = el?.icon || '✨';
  const elemName = isElemOverridden ? `${el?.name} (ชั่วคราว)` : (el?.name || f.element);
  const elemColor = el?.color || '#ffd54f';
  const roleIcon = getRoleIcon(f.role);

  const hpPct = Math.max(0, Math.min(100, Math.round((f.hp / Math.max(1, f.maxHp)) * 100)));
  const spPct = Math.max(0, Math.min(100, Math.round((f.sp / Math.max(1, f.maxSp)) * 100)));
  const shieldPct = Math.max(0, Math.min(100, Math.round((f.shield / Math.max(1, f.maxHp)) * 100)));
  const gaugePct = Math.max(0, Math.min(100, Math.round(f.gauge)));
  const isSigReady = f.gauge >= 100;
  const hpColor = hpPct > 50 ? '#66bb6a' : hpPct > 20 ? '#ffa726' : '#ef5350';

  // ป้ายสถานะตัวละคร
  let stateBadgeHtml = '';
  if (f.isKo) {
    stateBadgeHtml = '<span class="fighter-status-pill pill-ko">💀 สลบ</span>';
  } else if (f.isBackup) {
    stateBadgeHtml = '<span class="fighter-status-pill pill-backup">🔄 สำรอง</span>';
  } else if (f.isActive) {
    stateBadgeHtml = '<span class="fighter-status-pill pill-active">🟢 ในสนาม</span>';
  } else {
    stateBadgeHtml = '<span class="fighter-status-pill pill-ready">พร้อมรบ</span>';
  }

  const effectsHtml = renderStatusEffectsListHtml(f.effects);
  const starsDisplay = '⭐'.repeat(Math.max(1, Math.min(5, f.stars)));

  return `
    <div 
      class="party-member-card ${isSelected ? 'selected' : ''} ${f.isKo ? 'ko' : ''} ${f.isBackup ? 'is-backup' : ''} ${f.isActive ? 'is-active' : ''}" 
      data-fighter-id="${f.id}"
      role="button"
      tabindex="0"
      title="คลิกเพื่อเลือก ${f.name} (${f.role})"
    >
      <!-- Card Header Row: Avatar, Name, Role, Level, Star -->
      <div class="member-header-row">
        <div class="member-avatar-box" style="border-color: ${elemColor};">
          <span class="member-avatar-emoji">${avatar}</span>
          <span class="member-element-badge" style="background-color: ${elemColor};" title="ธาตุ${elemName}">
            ${elemIcon}
          </span>
          ${f.isKo ? '<span class="ko-skull-overlay">💀</span>' : ''}
        </div>
        
        <div class="member-meta-col">
          <div class="member-name-row">
            <span class="member-rarity-tag rarity-${f.rarity.toLowerCase()}">[${f.rarity}]</span>
            <strong class="member-name">${f.name}</strong>
            ${stateBadgeHtml}
          </div>
          <div class="member-role-row">
            <span class="member-role-tag">${roleIcon} ${f.role}</span>
            <span class="member-level-tag">Lv.${f.level}</span>
            <span class="member-stars-tag" title="${f.stars} ดาว">${starsDisplay}</span>
          </div>
        </div>
      </div>

      <!-- Bars Column: HP, SP, Signature Gauge -->
      <div class="member-bars-col">
        <!-- HP Bar with Shield Overlay -->
        <div class="bar-group hp-group">
          <div class="bar-label-row">
            <span class="bar-name">❤️ HP</span>
            <span class="bar-nums">
              <strong>${Math.round(f.hp)}</strong> / ${Math.round(f.maxHp)}
              <span class="shield-num" style="${f.shield > 0 ? '' : 'display: none;'}">+🛡️${Math.round(f.shield)}</span>
              <span class="pct-num">(${hpPct}%)</span>
            </span>
          </div>
          <div class="bar-track hp-track">
            <div class="bar-fill hp-fill" style="width: ${hpPct}%; background-color: ${hpColor};"></div>
            <div class="bar-fill shield-fill" style="width: ${shieldPct}%; ${f.shield > 0 ? '' : 'display: none;'}"></div>
          </div>
        </div>

        <!-- SP Bar -->
        <div class="bar-group sp-group">
          <div class="bar-label-row">
            <span class="bar-name">💙 SP</span>
            <span class="bar-nums"><strong>${Math.round(f.sp)}</strong> / ${Math.round(f.maxSp)}</span>
          </div>
          <div class="bar-track sp-track">
            <div class="bar-fill sp-fill" style="width: ${spPct}%;"></div>
          </div>
        </div>

        <!-- Signature Gauge Bar -->
        <div class="bar-group sig-group ${isSigReady ? 'sig-ready' : ''}">
          <div class="bar-label-row">
            <span class="bar-name">🔥 ${f.signatureName || 'ท่าไม้ตาย'}</span>
            <span class="bar-nums ${isSigReady ? 'ready-text' : ''}">
              ${isSigReady ? '⭐ พร้อมปล่อยท่า!' : `${gaugePct}%`}
            </span>
          </div>
          <div class="bar-track sig-track">
            <div class="bar-fill sig-fill ${isSigReady ? 'ready' : ''}" style="width: ${gaugePct}%;"></div>
          </div>
        </div>
      </div>

      <!-- Status Effects List -->
      <div class="member-effects-container">
        ${effectsHtml}
      </div>

      ${
        f.roleAffinityActive
          ? `<div class="member-affinity-note" title="${f.roleAffinityDesc || ''}">✨ ยืนถูกตำแหน่ง (${f.role})</div>`
          : ''
      }
    </div>
  `;
}

/**
 * เรนเดอร์ Area 2: Party Status Panel แผงแสดงข้อมูลสมาชิกปาร์ตี้ฝั่งซ้าย
 */
export function renderPartyStatusPanelHtml(
  party: BattleFighterViewData[],
  state: BattleViewState
): string {
  const livingParty = party.filter(p => !p.isKo).length;
  const cardsHtml = party
    .map(member => {
      const isSelected = state.selectedPartyMemberId === member.id;
      return renderPartyMemberCardHtml(member, isSelected);
    })
    .join('');

  return `
    <aside class="party-status-panel ${state.isPartyPanelCollapsed ? 'collapsed' : ''}" id="party-status-panel">
      <div class="panel-header-row">
        <div class="panel-title-wrap">
          <span class="panel-icon">🛡️</span>
          <h3 class="panel-title">ปาร์ตี้ (${livingParty}/${party.length})</h3>
        </div>
        <button type="button" class="btn-panel-toggle" id="btn-toggle-party-panel" title="พับ/ขยายแผงปาร์ตี้">
          ${state.isPartyPanelCollapsed ? '▶' : '◀'}
        </button>
      </div>
      <div class="party-members-list" id="party-members-list">
        ${cardsHtml || '<div class="party-empty-notice">ไม่มีสมาชิกในปาร์ตี้</div>'}
      </div>
    </aside>
  `;
}

export interface PartyPanelHandlers {
  onSelectMember?: (memberId: string) => void;
  onToggleCollapse?: (isCollapsed: boolean) => void;
}

/**
 * ผูก Event Listeners สำหรับ Area 2: Party Status Panel
 */
export function bindPartyStatusPanelEvents(
  container: HTMLElement,
  handlers: PartyPanelHandlers = {}
): void {
  // ปุ่มพับ/ขยายแผงปาร์ตี้
  const toggleBtn = container.querySelector('#btn-toggle-party-panel');
  toggleBtn?.addEventListener('click', e => {
    e.stopPropagation();
    togglePartyPanelCollapse();
    const panel = container.querySelector('#party-status-panel');
    if (panel) {
      panel.classList.toggle('collapsed', battleViewState.isPartyPanelCollapsed);
    }
    if (toggleBtn) {
      toggleBtn.textContent = battleViewState.isPartyPanelCollapsed ? '▶' : '◀';
    }
    handlers.onToggleCollapse?.(battleViewState.isPartyPanelCollapsed);
  });

  // คลิกการ์ดสมาชิกปาร์ตี้เพื่อเลือก/โฟกัส
  container.querySelectorAll<HTMLElement>('.party-member-card').forEach(card => {
    card.addEventListener('click', () => {
      const fid = card.dataset.fighterId;
      if (fid) {
        setBattlePartyMember(fid);
        container.querySelectorAll('.party-member-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        handlers.onSelectMember?.(fid);
      }
    });
  });
}

// ==========================================
// Area 3: Battle Arena & Tactical Formation Stage
// ==========================================

export interface BattleArenaConfig {
  mode: '1v1_tag' | '2v2_grid';
  party: BattleFighterViewData[];
  enemies: BattleFighterViewData[];
  winner?: CombatSide | 'draw' | null;
  activeFighterId?: string;
  announcementText?: string;
  roundOrTurn?: number;
  showBackup?: boolean;
}

/**
 * เรนเดอร์กล่องนักสู้แต่ละตัวในสนามประลอง (Fighter Unit Box)
 */
export function renderArenaUnitHtml(
  f: BattleFighterViewData,
  opts: {
    isBackup?: boolean;
    isTargeted?: boolean;
    isActiveTurn?: boolean;
    isCompact?: boolean;
  } = {}
): string {
  const avatar = getFighterAvatarEmoji(f.id, f.element);
  const el = ELEMENT_MAP.get(f.element);
  const elemIcon = el?.icon || '✨';
  const elemColor = el?.color || '#ffd54f';

  const hpPct = Math.max(0, Math.min(100, Math.round((f.hp / Math.max(1, f.maxHp)) * 100)));
  const shieldPct = Math.max(0, Math.min(100, Math.round((f.shield / Math.max(1, f.maxHp)) * 100)));
  const hpColor = hpPct > 50 ? '#4caf50' : hpPct > 20 ? '#ffa726' : '#ef5350';

  const isPlayer = f.side === 'A';
  const sideClass = isPlayer ? 'side-player' : 'side-enemy';
  const activeTurnClass = opts.isActiveTurn ? 'active-turn' : '';
  const backupClass = opts.isBackup || f.isBackup ? 'is-backup' : '';
  const koClass = f.isKo ? 'is-ko' : '';
  const compactClass = opts.isCompact ? 'compact' : '';
  const overheadEffectsHtml = renderOverheadEffectsHtml(f.effects);

  return `
    <div 
      class="arena-unit-box ${sideClass} ${activeTurnClass} ${backupClass} ${koClass} ${compactClass}"
      id="${opts.isBackup ? `box-unit-${f.side}-backup` : `box-unit-${f.side}`}"
      data-fighter-id="${f.id}"
      data-side="${f.side}"
      role="button"
      tabindex="0"
      title="${f.name} (${isPlayer ? 'ฝ่ายเรา' : 'ศัตรู'}) • HP: ${Math.round(f.hp)}/${Math.round(f.maxHp)}"
    >
      <div class="floating-layer float-layer" id="float-layer-${f.side}${opts.isBackup ? '-backup' : ''}"></div>
      
      <!-- Overhead Status & Floating HP Bar Above Character -->
      <div class="unit-overhead-bar-wrap">
        <div class="unit-overhead-effects" id="overhead-effects-${f.side}${opts.isBackup ? '-backup' : ''}">${overheadEffectsHtml}</div>
        <div class="unit-overhead-hp-bar">
          <div class="overhead-hp-fill" style="width: ${hpPct}%; background-color: ${hpColor};"></div>
          <div class="overhead-shield-fill" style="width: ${shieldPct}%; ${f.shield > 0 ? '' : 'display: none;'}"></div>
        </div>
        <div class="unit-overhead-hp-text">
          <span class="hp-icon">❤️</span><span class="hp-val">${Math.round(f.hp)}</span><span class="hp-slash">/</span><span class="hp-max">${Math.round(f.maxHp)}</span>
          <span class="shield-badge" style="${f.shield > 0 ? '' : 'display: none;'}">+🛡️${Math.round(f.shield)}</span>
        </div>
      </div>

      <!-- Avatar & Sprite Area -->
      <div class="unit-sprite-frame" style="border-color: ${elemColor};">
        <span class="unit-sprite-emoji">${avatar}</span>
        <span class="unit-elem-badge" style="background-color: ${elemColor};" title="ธาตุ${el?.name || f.element}">${elemIcon}</span>
        ${f.isKo ? '<span class="ko-skull-stamp">💀</span>' : ''}
      </div>

      <!-- Unit Footer Info Tag -->
      <div class="unit-footer-tag">
        <div class="unit-name-label">${f.name}</div>
      </div>

      ${f.roleAffinityActive ? '<div class="unit-affinity-pill">✨ ยืนถูกตำแหน่ง</div>' : ''}
      ${opts.isBackup || f.isBackup ? '<div class="unit-backup-pill">🔄 สำรอง</div>' : ''}
    </div>
  `;
}

/**
 * เรนเดอร์สนามประลองโหมด 1v1 Tag Relay (ไม่แสดงสัตว์ตัวสำรองในสนามต่อสู้ตามคำสั่ง Game Director)
 */
export function render1v1ArenaHtml(
  party: BattleFighterViewData[],
  enemies: BattleFighterViewData[],
  activeId?: string,
  state?: BattleViewState,
  showBackup = false
): string {
  // ตัวหลัก vs ตัวสำรองฝั่งเรา
  const playerActive = party.find(f => !f.isBackup && !f.isKo) || party[0];
  const playerBackup = party.find(f => f !== playerActive);

  // ตัวหลัก vs ตัวสำรองฝั่งศัตรู
  const enemyActive = enemies.find(f => !f.isBackup && !f.isKo) || enemies[0];
  const enemyBackup = enemies.find(f => f !== enemyActive);

  const isPlayerActiveTurn = activeId ? playerActive?.id === activeId : playerActive?.isActive;
  const isEnemyActiveTurn = activeId ? enemyActive?.id === activeId : enemyActive?.isActive;

  return `
    <div class="arena-1v1-stage-layout">
      <!-- Player Side 1v1 -->
      <div class="arena-1v1-squad-zone side-player">
        <div class="squad-fighters-wrap">
          ${
            playerActive
              ? renderArenaUnitHtml(playerActive, {
                  isActiveTurn: isPlayerActiveTurn,
                  isBackup: false,
                })
              : '<div class="vacant-unit-box">ไม่มีตัวละครหลัก</div>'
          }

          ${
            showBackup && playerBackup
              ? `
            <div class="backup-fighter-anchor">
              <span class="backup-label">🔄 ตัวสำรอง:</span>
              ${renderArenaUnitHtml(playerBackup, {
                isBackup: true,
                isCompact: true,
              })}
            </div>
          `
              : ''
          }
        </div>
      </div>

      <!-- Center VS Zone -->
      <div class="arena-clash-zone">
        <div class="clash-vs-emblem">VS</div>
        <span class="clash-mode-tag">1v1 TAG RELAY</span>
      </div>

      <!-- Enemy Side 1v1 -->
      <div class="arena-1v1-squad-zone side-enemy">
        <div class="squad-fighters-wrap">
          ${
            enemyActive
              ? renderArenaUnitHtml(enemyActive, {
                  isActiveTurn: isEnemyActiveTurn,
                  isBackup: false,
                })
              : '<div class="vacant-unit-box">ไม่มีศัตรูหลัก</div>'
          }

          ${
            showBackup && enemyBackup
              ? `
            <div class="backup-fighter-anchor">
              <span class="backup-label">🔄 ศัตรูสำรอง:</span>
              ${renderArenaUnitHtml(enemyBackup, {
                isBackup: true,
                isCompact: true,
              })}
            </div>
          `
              : ''
          }
        </div>
      </div>
    </div>
  `;
}

/**
 * เรนเดอร์สนามประลองโหมด 2v2 Tactical Grid (กระดานจัดทัพ 3x3)
 */
export function render2v2GridArenaHtml(
  party: BattleFighterViewData[],
  enemies: BattleFighterViewData[],
  activeId?: string,
  state?: BattleViewState
): string {
  const lanes = [0, 1, 2]; // 0=บน, 1=กลาง, 2=ล่าง
  const laneNames = ['เลนบน', 'เลนกลาง', 'เลนล่าง'];

  // Columns สำหรับ Player A: 'back' -> 'mid' -> 'front' (หันหน้าเข้าหา VS)
  const playerColumns: GridRow[] = ['back', 'mid', 'front'];
  const playerColLabels: Record<GridRow, string> = {
    back: 'แถวหลัง (Back)',
    mid: 'แถวกลาง (Mid)',
    front: 'แนวหน้า (Front) ➔',
  };

  // Columns สำหรับ Enemy B: 'front' -> 'mid' -> 'back' (หันหน้าเข้าหา VS)
  const enemyColumns: GridRow[] = ['front', 'mid', 'back'];
  const enemyColLabels: Record<GridRow, string> = {
    front: '⬅ แนวหน้า (Front)',
    mid: 'แถวกลาง (Mid)',
    back: 'แถวหลัง (Back)',
  };

  const renderBoardGrid = (
    fighters: BattleFighterViewData[],
    columns: GridRow[],
    colLabels: Record<GridRow, string>,
    side: CombatSide
  ) => {
    return `
      <div class="tactical-grid-board side-${side === 'A' ? 'player' : 'enemy'}">
        ${columns
          .map(
            row => `
          <div class="tactical-grid-col col-${row}">
            <div class="grid-col-header ${row === 'front' ? 'frontline-header' : ''}">
              ${colLabels[row]}
            </div>
            <div class="grid-cells-col">
              ${lanes
                .map(lane => {
                  const fighter =
                    fighters.find(f => {
                      if (f.pos) {
                        return f.pos.row === row && f.pos.col === lane;
                      }
                      return false;
                    }) ||
                    (row === 'front' && lane === 0 && fighters[0] && !fighters[0].pos
                      ? fighters[0]
                      : undefined);

                  if (fighter) {
                    const isActiveTurn = activeId ? fighter.id === activeId : false;
                    return `
                    <div class="tactical-grid-cell occupied-cell" data-row="${row}" data-lane="${lane}">
                      ${renderArenaUnitHtml(fighter, {
                        isActiveTurn,
                        isCompact: true,
                      })}
                    </div>
                  `;
                  }

                  return `
                  <div class="tactical-grid-cell vacant-cell" data-row="${row}" data-lane="${lane}">
                    <span class="cell-lane-tag">${laneNames[lane]}</span>
                    <span class="cell-vacancy-hint">${
                      row === 'front' ? '🛡️ แนวหน้า' : row === 'mid' ? '⚡ กลาง' : '💚 หลัง'
                    }</span>
                  </div>
                `;
                })
                .join('')}
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  };

  const playerBoardHtml = renderBoardGrid(party, playerColumns, playerColLabels, 'A');
  const enemyBoardHtml = renderBoardGrid(enemies, enemyColumns, enemyColLabels, 'B');

  return `
    <div class="arena-2v2-grid-layout">
      <!-- Player Board (Left) -->
      <div class="arena-grid-squad-box side-player">
        ${playerBoardHtml}
      </div>

      <!-- Center VS Emblem -->
      <div class="arena-clash-zone grid-clash">
        <div class="clash-vs-emblem">VS</div>
        <span class="clash-mode-tag">2v2 GRID</span>
      </div>

      <!-- Enemy Board (Right) -->
      <div class="arena-grid-squad-box side-enemy">
        ${enemyBoardHtml}
      </div>
    </div>
  `;
}

/**
 * เรนเดอร์ Area 3: Battle Arena สนามต่อสู้หลักตรงกลาง (Center Main Stage)
 */
export function renderBattleArenaHtml(
  config: BattleArenaConfig,
  state: BattleViewState
): string {
  const { mode, party, enemies, winner, activeFighterId, announcementText, showBackup } = config;

  let fieldContentHtml = '';
  if (mode === '2v2_grid') {
    fieldContentHtml = render2v2GridArenaHtml(party, enemies, activeFighterId, state);
  } else {
    fieldContentHtml = render1v1ArenaHtml(party, enemies, activeFighterId, state, showBackup ?? false);
  }

  const announcementHtml = winner
    ? `
      <div class="arena-winner-banner ${
        winner === 'A' ? 'winner-player' : winner === 'B' ? 'winner-enemy' : 'winner-draw'
      }">
        ${
          winner === 'A'
            ? '🏆 ชัยชนะเป็นของผู้เล่น! (VICTORY)'
            : winner === 'B'
            ? '💀 พ่ายแพ้ต่อศัตรู! (DEFEAT)'
            : '🤝 เสมอกัน! (DRAW)'
        }
      </div>
    `
    : announcementText
    ? `<div class="arena-announcement-pill">${announcementText}</div>`
    : '';

  return `
    <main class="battle-arena-stage" data-mode="${mode}" id="arena-stage">
      <div class="arena-background-scenery"></div>
      <div class="arena-floating-layer" id="arena-floating-layer"></div>

      <!-- Banner announcement area -->
      <div class="arena-announcement-banner" id="banner-area">
        ${announcementHtml}
      </div>

      <!-- Main Stage Field -->
      <div class="arena-field-grid" id="arena-field-grid">
        ${fieldContentHtml}
      </div>
    </main>
  `;
}

/**
 * สร้าง HTML สำหรับ Floating Combat Text (ดาเมจ, คริติคอล, ฮีล, หลบ, บล็อก)
 */
export function createFloatingTextHtml(
  text: string,
  type: 'damage' | 'crit' | 'heal' | 'miss' | 'block' | 'buff',
  side: CombatSide
): string {
  return `<div class="floating-combat-text float-${type} side-${side}">${text}</div>`;
}

export interface BattleArenaHandlers {
  onTargetEnemy?: (enemyId: string) => void;
  onSelectPartyFighter?: (fighterId: string) => void;
}

/**
 * ผูก Event Listeners สำหรับ Area 3: Battle Arena
 */
export function bindBattleArenaEvents(
  container: HTMLElement,
  handlers: BattleArenaHandlers = {}
): void {
  container.querySelectorAll<HTMLElement>('.arena-unit-box').forEach(box => {
    box.addEventListener('click', () => {
      const fid = box.dataset.fighterId;
      const side = box.dataset.side as CombatSide;
      if (!fid || !side) return;

      if (side === 'B') {
        // ตัดระบบเล็งเป้าศัตรูออกตามคำสั่ง Game Director (1v1 ชนกันโดยตรง / 2v2 คำนวณระยะอัตโนมัติ)
        handlers.onTargetEnemy?.(fid);
        return;
      } else {
        // เลือกดูตัวละครฝ่ายเรา
        setBattlePartyMember(fid);
        container
          .querySelectorAll('.arena-unit-box.side-player')
          .forEach(b => b.classList.remove('selected-party'));
        box.classList.add('selected-party');
        handlers.onSelectPartyFighter?.(fid);
      }
    });
  });
}

// ==========================================
// Area 4: Target Information Panel & Matchup
// ==========================================

/**
 * คำนวณและสร้างป้ายแสดงการได้เปรียบ/เสียเปรียบของธาตุ (Elemental Matchup Indicator)
 */
export function getMatchupBadgeHtml(attElem?: string, defElem?: string): string {
  if (!attElem || !defElem) return '';
  const mult = getElementMultiplier(attElem as ElementId, defElem as ElementId, 'A', 'actual');
  const defEl = ELEMENT_MAP.get(defElem);
  const defName = defEl ? `${defEl.icon} ${defEl.name}` : defElem;
  const attEl = ELEMENT_MAP.get(attElem);
  const attName = attEl ? `${attEl.icon} ${attEl.name}` : attElem;

  if (mult > 1) {
    return `<span class="matchup-pill matchup-advantage" title="${attName} ได้เปรียบธาตุ ${defName} โบนัสดาเมจ x${mult}">🟢 ได้เปรียบธาตุ (+30% ดาเมจ)</span>`;
  }
  if (mult < 1) {
    return `<span class="matchup-pill matchup-disadvantage" title="${attName} เสียเปรียบธาตุ ${defName} ดาเมจลดลง x${mult}">🔴 เสียเปรียบธาตุ (-15% ดาเมจ)</span>`;
  }
  return `<span class="matchup-pill matchup-neutral" title="${attName} กับ ${defName} สมดุลธาตุ ดาเมจปกติ x1.0">⚪ สมดุล (1.0x)</span>`;
}

/**
 * เรนเดอร์ Area 4: Target Information Panel แผงข้อมูลของเป้าหมายที่ถูกเลือก
 */
export function renderTargetInfoPanelHtml(
  target: BattleFighterViewData | null,
  attacker: BattleFighterViewData | null,
  state: BattleViewState
): string {
  let contentHtml = '';

  if (!target) {
    contentHtml = `
      <div class="target-empty-prompt">
        <span class="target-empty-icon">🎯</span>
        <span class="target-empty-lead">ยังไม่ได้เลือกเป้าหมาย</span>
        <span class="target-empty-hint">คลิกที่ศัตรูในสนามรบ หรือบนแถบคิวเทิร์น เพื่อโฟกัสและดูข้อมูล</span>
      </div>
    `;
  } else {
    const avatar = getFighterAvatarEmoji(target.id, target.element);
    const el = ELEMENT_MAP.get(target.element);
    const elemIcon = el?.icon || '✨';
    const elemName = el?.name || target.element;
    const elemColor = el?.color || '#ffd54f';
    const roleIcon = getRoleIcon(target.role);

    const hpPct = Math.max(
      0,
      Math.min(100, Math.round((target.hp / Math.max(1, target.maxHp)) * 100))
    );
    const shieldPct = Math.max(
      0,
      Math.min(100, Math.round((target.shield / Math.max(1, target.maxHp)) * 100))
    );
    const spPct = Math.max(
      0,
      Math.min(100, Math.round((target.sp / Math.max(1, target.maxSp)) * 100))
    );
    const hpColor = hpPct > 50 ? '#66bb6a' : hpPct > 20 ? '#ffa726' : '#ef5350';

    const matchupHtml = attacker ? getMatchupBadgeHtml(attacker.element, target.element) : '';
    const effectsHtml = renderStatusEffectsListHtml(target.effects);
    const starsDisplay = '⭐'.repeat(Math.max(1, Math.min(5, target.stars)));

    let statePill = '';
    if (target.isKo) {
      statePill = '<span class="fighter-status-pill pill-ko">💀 สลบ</span>';
    } else if (target.isBackup) {
      statePill = '<span class="fighter-status-pill pill-backup">🔄 สำรอง</span>';
    } else {
      statePill = '<span class="fighter-status-pill pill-active">🟢 ในสนาม</span>';
    }

    contentHtml = `
      <div class="target-card-body">
        <!-- Target Header: Avatar, Name, Rarity, Role -->
        <div class="target-header-row">
          <div class="target-avatar-frame" style="border-color: ${elemColor};">
            <span class="target-avatar-emoji">${avatar}</span>
            <span class="target-elem-badge" style="background-color: ${elemColor};" title="ธาตุ${elemName}">${elemIcon}</span>
            ${target.isKo ? '<span class="target-ko-overlay">💀</span>' : ''}
          </div>
          <div class="target-meta-col">
            <div class="target-name-line">
              <span class="member-rarity-tag rarity-${target.rarity.toLowerCase()}">[${target.rarity}]</span>
              <strong class="target-name">${target.name}</strong>
              ${statePill}
            </div>
            <div class="target-role-line">
              <span class="target-role-tag">${roleIcon} ${target.role}</span>
              <span class="target-lvl-tag">Lv.${target.level}</span>
              <span class="target-stars-tag">${starsDisplay}</span>
            </div>
          </div>
        </div>

        <!-- Matchup Indicator against active party attacker -->
        ${matchupHtml ? `<div class="target-matchup-row">${matchupHtml}</div>` : ''}

        <!-- Target Bars: HP, SP -->
        <div class="target-bars-col">
          <!-- HP Bar -->
          <div class="bar-group hp-group">
            <div class="bar-label-row">
              <span class="bar-name">❤️ HP</span>
              <span class="bar-nums">
                <strong>${Math.round(target.hp)}</strong> / ${Math.round(target.maxHp)}
                <span class="shield-num" style="${target.shield > 0 ? '' : 'display: none;'}">+🛡️${Math.round(target.shield)}</span>
                <span class="pct-num">(${hpPct}%)</span>
              </span>
            </div>
            <div class="bar-track hp-track">
              <div class="bar-fill hp-fill" style="width: ${hpPct}%; background-color: ${hpColor};"></div>
              <div class="bar-fill shield-fill" style="width: ${shieldPct}%; ${target.shield > 0 ? '' : 'display: none;'}"></div>
            </div>
          </div>

          <!-- SP Bar -->
          <div class="bar-group sp-group">
            <div class="bar-label-row">
              <span class="bar-name">💙 SP</span>
              <span class="bar-nums"><strong>${Math.round(target.sp)}</strong> / ${Math.round(target.maxSp)}</span>
            </div>
            <div class="bar-track sp-track">
              <div class="bar-fill sp-fill" style="width: ${spPct}%;"></div>
            </div>
          </div>
        </div>

        <!-- Target Signature & Ability Info -->
        <div class="target-skills-preview">
          ${
            target.signatureName
              ? `
            <div class="target-skill-row">
              <span class="skill-label">🔥 ไม้ตาย:</span>
              <strong class="skill-name">${target.signatureName}</strong>
            </div>
          `
              : ''
          }
          ${
            target.abilityName
              ? `
            <div class="target-skill-row">
              <span class="skill-label">✨ พรสวรรค์:</span>
              <span class="skill-desc">${target.abilityName}</span>
            </div>
          `
              : ''
          }
        </div>

        <!-- Target Status Effects -->
        <div class="target-effects-wrap">
          <span class="effects-title">สถานะที่ติดอยู่:</span>
          ${effectsHtml}
        </div>

        <!-- Action row -->
        <div class="target-actions-row">
          <button type="button" class="btn-clear-target" id="btn-clear-target">
            ✕ ปลดเป้าหมาย
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="target-info-panel-box${state.isTargetPanelCollapsed ? ' collapsed' : ''}" id="target-info-panel-box">
      <div class="panel-header-row">
        <div class="panel-title-wrap">
          <span class="panel-icon">🎯</span>
          <h3 class="panel-title">ข้อมูลเป้าหมาย</h3>
        </div>
        <button type="button" class="btn-panel-toggle" id="btn-toggle-target-panel" title="พับ/ขยายแผงเป้าหมาย">
          ${state.isTargetPanelCollapsed ? '◀' : '▶'}
        </button>
      </div>
      <div class="target-details-container" id="target-details-container">
        ${contentHtml}
      </div>
    </div>
  `;
}

// ==========================================
// Area 5 (Part A): Combat Log
// ==========================================

/**
 * จำแนกสีของข้อความ Combat Log ตามคำสั่ง Game Director:
 * - สีฟ้า (log-side-player): แอคชั่นฝ่ายเรา
 * - สีส้ม (log-side-enemy): แอคชั่นฝ่ายศัตรู
 * - สีทอง (log-side-player-sig): การออกท่าไม้ตายฝ่ายเรา
 * - สีม่วงอ่อน (log-side-enemy-sig): การออกท่าไม้ตายฝ่ายศัตรู
 * - สีเงิน (log-side-neutral): ข้อความทั่วไปของระบบ/เริ่มเทิร์น
 */
export function classifyCombatLogRow(log: any): {
  colorClass: string;
  actorSide: 'A' | 'B' | 'none';
  isSig: boolean;
} {
  const msg = typeof log === 'string' ? log : log.message || '';
  const actionType = typeof log === 'object' && log ? log.actionType : '';
  const rawSide = typeof log === 'object' && log ? log.actorSide : '';

  const isSig = actionType === 'signature' || msg.includes('ไม้ตาย') || msg.includes('Signature');

  let actorSide: 'A' | 'B' | 'none' = 'none';

  if (rawSide === 'A' || rawSide === 'B') {
    actorSide = rawSide;
  } else {
    // ตรวจสอบชื่อผู้กระทำจากข้อความ [เทิร์น 1] <ActorName> ...
    const match = msg.match(/(?:\[(?:เทิร์น|รอบที่)\s*\d+\]\s*)?([^:]+?)(?:\s+ใช้|\s+โจมตี|\s+ปลดปล่อย|:|$)/);
    const actorCandidate = match ? match[1].trim().replace(/^ต้นเทิร์นของ\s*/, '') : '';

    if (actorCandidate && HERO_NAMES.has(actorCandidate)) {
      actorSide = 'A';
    } else if (actorCandidate && ENEMY_NAMES.has(actorCandidate)) {
      actorSide = 'B';
    } else {
      let foundA = false;
      let foundB = false;
      for (const h of HERO_NAMES) {
        if (msg.includes(h)) {
          foundA = true;
          break;
        }
      }
      for (const e of ENEMY_NAMES) {
        if (msg.includes(e)) {
          foundB = true;
          break;
        }
      }
      if (foundA && !foundB) {
        actorSide = 'A';
      } else if (foundB && !foundA) {
        actorSide = 'B';
      } else if (msg.includes('ฝ่ายเรา') || msg.includes('ทีมผู้เล่น')) {
        actorSide = 'A';
      } else if (msg.includes('ฝ่ายศัตรู') || msg.includes('ทีมศัตรู')) {
        actorSide = 'B';
      }
    }
  }

  let colorClass = 'log-side-neutral';
  if (actorSide === 'A') {
    colorClass = isSig ? 'log-side-player-sig' : 'log-side-player';
  } else if (actorSide === 'B') {
    colorClass = isSig ? 'log-side-enemy-sig' : 'log-side-enemy';
  }

  return { colorClass, actorSide, isSig };
}

/**
 * เรนเดอร์ Area 5 (Part A): Combat Log บันทึกประวัติการต่อสู้
 * ปรับปรุงตามคำสั่ง Game Director:
 * 1. ปิดแท็บรางวัล (loot) ออก
 * 2. ย้ายข้อความจากแท็บระบบ (system) มารวมในช่องต่อสู้ และปิดแท็บระบบออก เหลือแท็บต่อสู้อย่างเดียว
 * 3. แยกสีข้อความ log:
 *    - สีฟ้า: แอคชั่นฝ่ายเรา (log-side-player)
 *    - สีส้ม: แอคชั่นฝ่ายศัตรู (log-side-enemy)
 *    - สีทอง: การออกท่าไม้ตายฝ่ายเรา (log-side-player-sig)
 *    - สีม่วงอ่อน: การออกท่าไม้ตายฝ่ายศัตรู (log-side-enemy-sig)
 */
export function renderCombatLogPanelHtml(
  logs: any[],
  state: BattleViewState
): string {
  // รวมข้อความระบบและการต่อสู้เข้าด้วยกันทั้งหมด (ไม่รวมรางวัลที่ปิดการใช้งาน)
  const displayLogs = (logs || []).filter(log => {
    const cat = classifyTurnEvent(log);
    return cat !== 'loot';
  });

  const logsRowsHtml = displayLogs
    .map((log, idx) => {
      const msg = typeof log === 'string' ? log : log.message || '';
      const turnNum = log.turnOrRound || log.turn || idx + 1;
      const { colorClass, isSig } = classifyCombatLogRow(log);
      const isCrit = log.isCrit || msg.includes('CRIT') || msg.includes('คริติคอล');
      const isMiss = log.isMiss || msg.includes('MISS') || msg.includes('หลบหลีก');

      let rowClass = `combat-log-row ${colorClass}`;
      if (isCrit) rowClass += ' log-crit';
      if (isMiss) rowClass += ' log-miss';
      if (isSig) rowClass += ' log-sig';

      return `
      <div class="${rowClass}">
        <span class="log-turn-badge">[T${turnNum}]</span>
        <span class="log-msg-text">${msg}</span>
      </div>
    `;
    })
    .join('');

  return `
    <div class="combat-log-panel-box${state.isLogPanelCollapsed ? ' collapsed' : ''}" id="combat-log-panel-box">
      <div class="log-panel-header">
        <div class="log-tabs-list">
          <button type="button" class="btn-log-tab active" data-tab="battle">⚔️ ต่อสู้ (${displayLogs.length})</button>
        </div>
        <div class="log-header-actions">
          <button type="button" class="btn-clear-log" id="btn-clear-log" title="ล้างข้อความ">🗑️</button>
          <button type="button" class="btn-panel-toggle" id="btn-toggle-log-panel" title="พับ/ขยายแผงบันทึก">
            ${state.isLogPanelCollapsed ? '▲' : '▼'}
          </button>
        </div>
      </div>
      <div class="log-scroll-view" id="log-scroll-view">
        ${logsRowsHtml || '<div class="log-empty-notice">ไม่มีประวัติการต่อสู้</div>'}
      </div>
    </div>
  `;
}

export interface TargetAndLogHandlers {
  onToggleTargetPanel?: (isCollapsed: boolean) => void;
  onToggleLogPanel?: (isCollapsed: boolean) => void;
  onClearTarget?: () => void;
  onSwitchLogTab?: (tab: LogTabType) => void;
  onClearLogs?: () => void;
}

/**
 * ผูก Event Listeners สำหรับ Area 4: Target Info Panel และ Area 5A: Combat Log
 */
export function bindTargetAndLogEvents(
  container: HTMLElement,
  handlers: TargetAndLogHandlers = {}
): void {
  // ปุ่มพับ/ขยายแผงเป้าหมาย
  const toggleTargetBtn = container.querySelector('#btn-toggle-target-panel');
  toggleTargetBtn?.addEventListener('click', e => {
    e.stopPropagation();
    toggleTargetPanelCollapse();
    const panel = container.querySelector('#target-info-panel-box');
    panel?.classList.toggle('collapsed', battleViewState.isTargetPanelCollapsed);
    const sidePanel = container.querySelector('#battle-side-panel');
    sidePanel?.classList.toggle('collapsed', battleViewState.isTargetPanelCollapsed);
    if (toggleTargetBtn) {
      toggleTargetBtn.textContent = battleViewState.isTargetPanelCollapsed ? '◀' : '▶';
    }
    handlers.onToggleTargetPanel?.(battleViewState.isTargetPanelCollapsed);
  });

  // ปุ่มปลดเป้าหมาย
  container.querySelector('#btn-clear-target')?.addEventListener('click', e => {
    e.stopPropagation();
    setBattleTarget(null);
    handlers.onClearTarget?.();
  });

  // สลับแท็บ Combat Log
  container.querySelectorAll<HTMLButtonElement>('.btn-log-tab').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const tab = btn.dataset.tab as LogTabType;
      if (tab === 'battle' || tab === 'system' || tab === 'loot') {
        setBattleLogTab(tab);
        container.querySelectorAll('.btn-log-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        handlers.onSwitchLogTab?.(tab);
      }
    });
  });

  // ปุ่มล้างข้อความ
  container.querySelector('#btn-clear-log')?.addEventListener('click', e => {
    e.stopPropagation();
    handlers.onClearLogs?.();
  });

  // ปุ่มพับ/ขยายแผง Log
  const toggleLogBtn = container.querySelector('#btn-toggle-log-panel');
  toggleLogBtn?.addEventListener('click', e => {
    e.stopPropagation();
    toggleLogPanelCollapse();
    const logBox = container.querySelector('#combat-log-panel-box');
    logBox?.classList.toggle('collapsed', battleViewState.isLogPanelCollapsed);
    if (toggleLogBtn) {
      toggleLogBtn.textContent = battleViewState.isLogPanelCollapsed ? '▲' : '▼';
    }
    handlers.onToggleLogPanel?.(battleViewState.isLogPanelCollapsed);
  });
}

// ==========================================
// Area 5 (Part B): Bottom Skill Hotbar & Battle Controls
// ==========================================

export interface SkillInfoDetail {
  id: string;
  name: string;
  element: string;
  tier: string;
  spCost: number;
  description: string;
  baseChance?: number;
  damageMult?: number;
}

/**
 * ดึงข้อมูลสกิลพร้อมคำนวณค่า SP Cost
 */
export function getSkillInfo(skillId: string): SkillInfoDetail | null {
  if (!skillId) return null;
  const sk = SKILL_MAP.get(skillId) as any;
  if (!sk) return null;

  const spCostsMap = skillsData.statusRules?.spCosts as Record<string, number> | undefined;
  const spCost = sk.spCost ?? spCostsMap?.[sk.tier] ?? 20;

  return {
    id: sk.id,
    name: sk.name,
    element: sk.element || 'neutral',
    tier: sk.tier || 'S',
    spCost,
    description: sk.description || '',
    baseChance: sk.baseChance,
    damageMult: sk.damageMult,
  };
}

/**
 * เรนเดอร์ช่องสกิลเดี่ยวใน Hotbar 4 ช่อง
 */
export function renderSkillSlotHtml(
  skillId: string,
  slotIndex: number,
  activeHero: BattleFighterViewData | null
): string {
  const hotkey = slotIndex + 1;
  const sk = getSkillInfo(skillId);

  if (!sk) {
    return `
      <div class="skill-hotbar-slot is-empty" data-slot-index="${slotIndex}">
        <span class="slot-key-badge">[${hotkey}]</span>
        <div class="slot-empty-content">
          <span class="slot-empty-icon">⚪</span>
          <span class="slot-empty-label">ช่องว่าง</span>
        </div>
      </div>
    `;
  }

  const el = ELEMENT_MAP.get(sk.element);
  const elemIcon = el?.icon || '✨';
  const elemName = el?.name || sk.element;
  const elemColor = el?.color || '#ffd54f';
  const currentSp = activeHero?.sp ?? 0;
  const isUsable = currentSp >= sk.spCost && !activeHero?.isKo;

  return `
    <div 
      class="skill-hotbar-slot tier-${sk.tier.toLowerCase()} ${isUsable ? 'is-usable' : 'insufficient-sp'}"
      data-skill-id="${sk.id}"
      data-slot-index="${slotIndex}"
      role="button"
      tabindex="0"
      title="${sk.name} [Tier ${sk.tier}] (ธาตุ${elemName})\nค่าร่าย: ${sk.spCost} SP (ปัจจุบันมี ${Math.round(currentSp)} SP)\n${sk.description}"
    >
      <span class="slot-key-badge">[${hotkey}]</span>
      <div class="slot-icon-box" style="border-color: ${elemColor};">
        <span class="slot-elem-icon">${elemIcon}</span>
      </div>
      <div class="slot-info-col">
        <div class="slot-name-row">
          <span class="slot-tier-tag tier-${sk.tier.toLowerCase()}">${sk.tier}</span>
          <strong class="slot-name">${sk.name}</strong>
        </div>
        <div class="slot-cost-row">
          <span class="slot-sp-cost ${isUsable ? '' : 'lacking'}">💙 ${sk.spCost} SP</span>
          ${isUsable ? '<span class="slot-ready-pill">พร้อม</span>' : '<span class="slot-lacking-pill">SP ไม่พอ</span>'}
        </div>
      </div>
    </div>
  `;
}

/**
 * เรนเดอร์ Skill Hotbar รวม 4 ช่องของฮีโร่ตัวหลัก
 */
export function renderSkillHotbarHtml(activeHero: BattleFighterViewData | null): string {
  const slots = activeHero?.skillSlots || [];
  const slotIndices = [0, 1, 2, 3];
  const slotsHtml = slotIndices
    .map(idx => renderSkillSlotHtml(slots[idx] || '', idx, activeHero))
    .join('');

  return `
    <div class="skill-hotbar-grid" id="skill-hotbar-grid">
      ${slotsHtml}
    </div>
  `;
}

/**
 * เรนเดอร์ปุ่มปลดปล่อยท่าไม้ตาย Signature Cast Button ขนาดใหญ่ พร้อมเอฟเฟกต์เปลวไฟเร่าร้อน
 */
export function renderSignatureCastButtonHtml(activeHero: BattleFighterViewData | null): string {
  const sigName = activeHero?.signatureName || 'ท่าไม้ตายประจำตัว';
  const gauge = activeHero?.gauge ?? 0;
  const maxGauge = activeHero?.maxGauge ?? 100;
  const gaugePct = Math.min(100, Math.round((gauge / Math.max(1, maxGauge)) * 100));
  const isReady = gauge >= 100 && !activeHero?.isKo;
  const isKo = activeHero?.isKo ?? false;

  return `
    <button 
      type="button" 
      class="btn-signature-cast-box ${isReady ? 'is-ready' : 'charging'} ${isKo ? 'is-ko' : ''}" 
      id="btn-manual-sig-cast"
      ${!isReady || isKo ? 'disabled' : ''}
      title="${isReady ? `กด [Space] หรือคลิกเพื่อปลดปล่อย ${sigName}!` : `เกจพลังงานท่าไม้ตาย: ${gauge}/${maxGauge} (${gaugePct}%) — ยังไม่พร้อมใช้งาน`}"
    >
      <!-- Raging Flame Animated Backdrop -->
      <div class="sig-fire-backdrop"></div>
      <div class="sig-flame-tongues"></div>
      <div class="sig-sparks-layer">
        <span class="spark s1">✦</span>
        <span class="spark s2">🔥</span>
        <span class="spark s3">✦</span>
      </div>

      <!-- Hotkey Indicator Badge (แสดงเฉพาะเมื่อเกจสะสมเต็ม 100% แล้วเท่านั้น) -->
      ${isReady ? '<span class="sig-key-badge">[Space]</span>' : ''}

      <!-- Molten Magma Gauge Track -->
      <div class="sig-gauge-track">
        <div class="sig-gauge-fill" style="width: ${gaugePct}%;"></div>
      </div>

      <!-- Main Action Content -->
      <div class="sig-content-row">
        <!-- Fiery Burning Crest -->
        <div class="sig-fire-crest ${isReady ? 'blazing' : ''}">
          <span class="sig-fire-icon">${isReady ? '🔥' : '⚡'}</span>
          <div class="sig-fire-ring"></div>
        </div>

        <!-- Typography & Skill Name Section -->
        <div class="sig-text-col">
          <div class="sig-header-banner">
            <span class="sig-header-lead">${isReady ? '✦ ปลดปล่อยพลังขั้นสุดยอด ✦' : 'สะสมพลังงานท่าไม้ตาย'}</span>
            <span class="sig-gauge-val">${gauge}/${maxGauge} (${gaugePct}%)</span>
          </div>
          <div class="sig-title-wrap">
            <strong class="sig-name" title="${sigName}">${sigName}</strong>
          </div>
          <div class="sig-prompt-line">
            <span class="sig-action-hint">${isReady ? '⚡ กด [SPACE] หรือคลิก ปลดปล่อยทันที! ⚡' : `เกจสะสมพลังงาน ${gaugePct}%`}</span>
          </div>
        </div>
      </div>
    </button>
  `;
}

/**
 * เรนเดอร์ปุ่มสลับตัวสำรอง (โหมด 1v1 Tag Relay)
 */
export function renderSwapHeroButtonHtml(
  backupHero?: BattleFighterViewData | null,
  mode: '1v1_tag' | '2v2_grid' = '1v1_tag',
  swapCooldown = 0,
  winner: CombatSide | 'draw' | null = null
): string {
  if (mode === '2v2_grid') {
    return ''; // 2v2 uses simultaneous grid, no 1v1 tag swap
  }

  const hasBackup = Boolean(backupHero && !backupHero.isKo);
  const cd = swapCooldown ?? 0;
  const canSwap = hasBackup && cd <= 0 && !winner;

  let btnText = '🔄 สลับตัวสำรอง';
  if (!backupHero || backupHero.isKo) {
    btnText = '💀 สำรองหมดสภาพ';
  } else if (cd > 0) {
    btnText = `⏳ สลับตัว (${cd}T)`;
  } else {
    btnText = `🔄 สลับส่ง ${backupHero.name}`;
  }

  return `
    <button 
      type="button" 
      class="btn-manual-swap-hero ${canSwap ? 'is-ready' : 'disabled'}" 
      id="btn-manual-swap-hero"
      ${!canSwap ? 'disabled' : ''}
      title="${canSwap ? `สลับตัวสำรอง ${backupHero?.name} เข้าสู่สนามรบ` : cd > 0 ? `ติดคูลดาวน์สลับตัวอีก ${cd} เทิร์น` : 'ไม่มีตัวสำรองที่พร้อมรบ'}"
    >
      ${btnText}
    </button>
  `;
}

export interface BattleBottomHudConfig {
  activeHero: BattleFighterViewData | null;
  backupHero?: BattleFighterViewData | null;
  mode?: '1v1_tag' | '2v2_grid';
  swapCooldown?: number;
  winner?: CombatSide | 'draw' | null;
}

/**
 * เรนเดอร์ Area 5 (Part B): Bottom Skill Hotbar & Battle Controls
 */
export function renderBattleBottomHudHtml(
  config: BattleBottomHudConfig,
  state: BattleViewState
): string {
  const { activeHero, backupHero, mode, swapCooldown, winner } = config;

  const hotbarHtml = renderSkillHotbarHtml(activeHero);
  const sigBtnHtml = renderSignatureCastButtonHtml(activeHero);
  const swapBtnHtml = renderSwapHeroButtonHtml(backupHero, mode || '1v1_tag', swapCooldown, winner);

  return `
    <footer class="battle-bottom-hud" id="battle-bottom-hud">
      <!-- Area 5B Top: Skill Hotbar 4 Slots + Signature Cast Button -->
      <div class="bottom-hud-main-bar">
        <!-- 4 Skill Slots -->
        <div class="skill-hotbar-container" id="skill-hotbar-container">
          ${hotbarHtml}
        </div>

        <!-- Big Signature Cast Button -->
        <div class="signature-slot-container">
          ${sigBtnHtml}
        </div>
      </div>

      <!-- Area 5B Bottom: Sub-controls Bar (Automation Toggles & Swap) -->
      <div class="battle-sub-controls-bar">
        <div class="auto-toggles-cluster">
          <label class="toggle-control-label" title="เปิด/ปิด การต่อสู้อัตโนมัติ">
            <input type="checkbox" id="chk-auto-battle" ${state.autoBattle ? 'checked' : ''} />
            <span class="toggle-text">⚔️ ต่อสู้อัตโนมัติ (Auto)</span>
          </label>
          <label class="toggle-control-label" title="ปล่อยท่าไม้ตายทันทีเมื่อเกจเต็ม 100%">
            <input type="checkbox" id="chk-auto-cast-sig" ${state.autoCastSig ? 'checked' : ''} />
            <span class="toggle-text">🔥 ปล่อยไม้ตายอัตโนมัติ (Auto-Cast)</span>
          </label>
          <label class="toggle-control-label" title="หยุดถามเมื่อท่าไม้ตายพร้อม">
            <input type="checkbox" id="chk-pause-on-sig" ${state.pauseOnSigReady ? 'checked' : ''} />
            <span class="toggle-text">⏸️ หยุดถามเมื่อท่าพร้อม</span>
          </label>
        </div>

        <div class="action-buttons-cluster">
          ${swapBtnHtml}
        </div>
      </div>
    </footer>
  `;
}

export interface BattleBottomHudHandlers {
  onSkillSlotClick?: (skillId: string, slotIndex: number) => void;
  onCastSignature?: () => void;
  onSwapHero?: () => void;
  onToggleAutoBattle?: (enabled: boolean) => void;
  onToggleAutoCastSig?: (enabled: boolean) => void;
  onTogglePauseOnSigReady?: (enabled: boolean) => void;
}

/**
 * ผูกเหตุการณ์ Area 5B: Bottom Skill Hotbar, Signature Cast, Swap และ Automation Controls
 */
export function bindBattleBottomHudEvents(
  container: HTMLElement,
  handlers: BattleBottomHudHandlers = {}
): void {
  // คลิกช่องสกิล 4 ช่อง
  container.querySelectorAll<HTMLElement>('.skill-hotbar-slot').forEach(slot => {
    slot.addEventListener('click', e => {
      e.stopPropagation();
      const skillId = slot.dataset.skillId;
      const slotIndex = Number(slot.dataset.slotIndex);
      if (skillId && !isNaN(slotIndex)) {
        handlers.onSkillSlotClick?.(skillId, slotIndex);
      }
    });
  });

  // คลิกปุ่มไม้ตาย Signature Cast
  container.querySelector('#btn-manual-sig-cast')?.addEventListener('click', e => {
    e.stopPropagation();
    handlers.onCastSignature?.();
  });

  // คลิกปุ่มสลับตัวสำรอง Swap Hero
  container.querySelector('#btn-manual-swap-hero')?.addEventListener('click', e => {
    e.stopPropagation();
    handlers.onSwapHero?.();
  });

  // สวิตช์ Auto Battle
  const autoBattleChk = container.querySelector<HTMLInputElement>('#chk-auto-battle');
  autoBattleChk?.addEventListener('change', e => {
    e.stopPropagation();
    toggleAutoBattle(autoBattleChk.checked);
    handlers.onToggleAutoBattle?.(battleViewState.autoBattle);
  });

  // สวิตช์ Auto Cast Signature
  const autoCastSigChk = container.querySelector<HTMLInputElement>('#chk-auto-cast-sig');
  autoCastSigChk?.addEventListener('change', e => {
    e.stopPropagation();
    toggleAutoCastSig(autoCastSigChk.checked);
    handlers.onToggleAutoCastSig?.(battleViewState.autoCastSig);
  });

  // สวิตช์ Pause on Signature Ready
  const pauseOnSigChk = container.querySelector<HTMLInputElement>('#chk-pause-on-sig');
  pauseOnSigChk?.addEventListener('change', e => {
    e.stopPropagation();
    togglePauseOnSigReady(pauseOnSigChk.checked);
    handlers.onTogglePauseOnSigReady?.(battleViewState.pauseOnSigReady);
  });
}

// ==========================================
// Base 5-Area MMORPG Battle Layout Renderer
// ==========================================

export interface BattleLayoutConfig {
  stageTitle: string;
  stageSubtitle?: string;
  stageTypeBadge?: string;
  roundOrTurn: number;
  maxRoundsOrTurns?: number;
  wave?: number;
  maxWaves?: number;
  party: BattleFighterViewData[];
  enemies: BattleFighterViewData[];
  logs: any[];
  winner?: CombatSide | 'draw' | null;
  activeFighterId?: string;
  mode?: '1v1_tag' | '2v2_grid';
  swapCooldown?: number;
}

/**
 * เรนเดอร์โครงสร้าง Layout หลักทั้ง 5 พื้นที่ของ MMORPG Battle Interface
 */
export function renderBattleViewHtml(config: BattleLayoutConfig, state: BattleViewState): string {
  const {
    stageTitle,
    stageSubtitle,
    stageTypeBadge,
    roundOrTurn,
    maxRoundsOrTurns,
    wave,
    maxWaves,
    party,
    enemies,
    winner,
    activeFighterId,
    mode,
    swapCooldown,
  } = config;

  const livingEnemies = enemies.filter(e => !e.isKo).length;
  const livingParty = party.filter(p => !p.isKo).length;

  const topHudConfig: BattleTopHudConfig = {
    stageTitle,
    stageSubtitle,
    stageTypeBadge,
    roundOrTurn,
    maxRoundsOrTurns,
    wave,
    maxWaves,
    livingEnemies,
    totalEnemies: enemies.length,
    livingParty,
    totalParty: party.length,
    battleSource: state.battleSource,
    mode,
  };

  const topHudHtml = renderBattleTopHudHtml(topHudConfig, state);
  const timelineItems = computeTurnOrderTimeline([...party, ...enemies], activeFighterId);
  const timelineHtml = renderTurnOrderTimelineHtml(timelineItems, activeFighterId);
  const partyPanelHtml = renderPartyStatusPanelHtml(party, state);
  const arenaHtml = renderBattleArenaHtml(
    {
      mode: mode || '1v1_tag',
      party,
      enemies,
      winner,
      activeFighterId,
    },
    state
  );

  const target =
    enemies.find(e => e.id === state.selectedTargetId) ||
    party.find(p => p.id === state.selectedTargetId) ||
    null;
  const attacker = party.find(p => p.isActive && !p.isKo) || party[0] || null;

  const targetInfoHtml = renderTargetInfoPanelHtml(target, attacker, state);
  const combatLogHtml = renderCombatLogPanelHtml(config.logs || [], state);

  // Active hero and backup for Bottom Skill Hotbar (Area 5B)
  const activeHero =
    party.find(p => (activeFighterId ? p.id === activeFighterId : p.isActive && !p.isKo)) ||
    party.find(p => !p.isKo) ||
    party[0] ||
    null;
  const backupHero = party.find(p => p.isBackup && !p.isKo) || null;

  const bottomHudHtml = renderBattleBottomHudHtml(
    {
      activeHero,
      backupHero,
      mode: mode || '1v1_tag',
      swapCooldown,
      winner,
    },
    state
  );

  return `
    <div class="mmorpg-battle-container ${state.isPartyPanelCollapsed ? 'party-collapsed' : ''} ${state.isLogPanelCollapsed ? 'log-collapsed' : ''}">
      <!-- AREA 1: TOP HUD -->
      ${topHudHtml}

      <!-- TURN ORDER TIMELINE RIBBON -->
      ${timelineHtml}

      <!-- MAIN 3-COLUMN ARENA STAGE (AREA 2, 3, 4 + 5A) -->
      <div class="battle-main-stage-layout">
        <!-- AREA 2: PARTY STATUS PANEL (LEFT) -->
        ${partyPanelHtml}

        <!-- AREA 3: BATTLE ARENA (CENTER MAIN STAGE) -->
        ${arenaHtml}

        <!-- AREA 5 (PART A): TABBED COMBAT LOG (RIGHT SIDE - FULL HEIGHT) -->
        <aside class="battle-side-panel ${state.isLogPanelCollapsed ? 'collapsed' : ''}" id="battle-side-panel">
          <!-- AREA 5 (PART A): TABBED COMBAT LOG -->
          ${combatLogHtml}
        </aside>
      </div>

      <!-- AREA 5 (PART B): BOTTOM SKILL HOTBAR & BATTLE CONTROLS -->
      ${bottomHudHtml}
    </div>
  `;
}

export interface BattleViewHandlers
  extends BattleTopHudHandlers,
    PartyPanelHandlers,
    BattleArenaHandlers,
    TargetAndLogHandlers,
    BattleBottomHudHandlers {
  onModeToggle?: (mode: '1v1_tag' | '2v2_grid') => void;
}

/**
 * ตัวเชื่อมผูกเหตุการณ์หลักของระบบ MMORPG Battle View ทั้งหมด
 * รองรับ Event Delegation เพื่อให้การอัปเดต UI แบบ Real-time ไม่ทำให้ Event หลุดหาย
 * พร้อมทั้งติดตั้ง Hotkey [Space] และ [1]-[4] สำหรับควบคุมการต่อสู้ผ่านแป้นพิมพ์
 */
export function bindBattleViewEvents(
  container: HTMLElement,
  handlers: BattleViewHandlers = {}
): () => void {
  // 1. Delegated Click Listener
  const clickHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // --- Area 1: Top HUD Actions ---
    const playPauseBtn = target.closest<HTMLButtonElement>('#btn-battle-play-pause');
    if (playPauseBtn) {
      e.stopPropagation();
      battleViewState.isPlaying = !battleViewState.isPlaying;
      playPauseBtn.textContent = battleViewState.isPlaying ? '⏸️ หยุด' : '▶️ เล่นต่อ';
      playPauseBtn.classList.toggle('is-playing', battleViewState.isPlaying);
      playPauseBtn.classList.toggle('is-paused', !battleViewState.isPlaying);
      handlers.onPlayPauseToggle?.();
      return;
    }

    const stepBtn = target.closest('#btn-battle-step');
    if (stepBtn) {
      e.stopPropagation();
      handlers.onStepTurn?.();
      return;
    }

    const restartBtn = target.closest('#btn-battle-restart');
    if (restartBtn) {
      e.stopPropagation();
      handlers.onRestartBattle?.();
      return;
    }

    const retreatBtn = target.closest('#btn-battle-retreat');
    if (retreatBtn) {
      e.stopPropagation();
      handlers.onRetreat?.();
      return;
    }

    const settingsBtn = target.closest('#btn-battle-settings');
    if (settingsBtn) {
      e.stopPropagation();
      handlers.onOpenSettings?.();
      return;
    }

    const speedBtn = target.closest<HTMLButtonElement>('.btn-hud-speed');
    if (speedBtn) {
      e.stopPropagation();
      const spd = Number(speedBtn.dataset.speed) as 1 | 2 | 3;
      if (spd === 1 || spd === 2 || spd === 3) {
        setBattleSpeed(spd);
        container.querySelectorAll('.btn-hud-speed').forEach(b => b.classList.remove('active'));
        speedBtn.classList.add('active');
        handlers.onSpeedChange?.(spd);
      }
      return;
    }

    // --- Timeline Fighter Badges ---
    const timelineBadge = target.closest<HTMLElement>('.timeline-fighter-badge');
    if (timelineBadge) {
      e.stopPropagation();
      const fid = timelineBadge.dataset.fighterId;
      const side = timelineBadge.dataset.side as CombatSide;
      if (fid && side) {
        if (side === 'B') {
          // ตัดระบบเล็งเป้าศัตรูออกตามคำสั่ง Game Director
        } else {
          setBattlePartyMember(fid);
        }
        handlers.onTimelineFighterClick?.(fid, side);
      }
      return;
    }

    // --- Area 2: Party Status Panel ---
    const togglePartyBtn = target.closest('#btn-toggle-party-panel');
    if (togglePartyBtn) {
      e.stopPropagation();
      togglePartyPanelCollapse();
      const panel = container.querySelector('#party-status-panel');
      const mmorpgContainer = container.querySelector('.mmorpg-battle-container');
      panel?.classList.toggle('collapsed', battleViewState.isPartyPanelCollapsed);
      mmorpgContainer?.classList.toggle('party-collapsed', battleViewState.isPartyPanelCollapsed);
      togglePartyBtn.textContent = battleViewState.isPartyPanelCollapsed ? '▶' : '◀';
      handlers.onToggleCollapse?.(battleViewState.isPartyPanelCollapsed);
      return;
    }

    const partyCard = target.closest<HTMLElement>('.party-member-card');
    if (partyCard) {
      e.stopPropagation();
      const fid = partyCard.dataset.fighterId;
      if (fid) {
        setBattlePartyMember(fid);
        container.querySelectorAll('.party-member-card').forEach(c => c.classList.remove('selected'));
        partyCard.classList.add('selected');
        handlers.onSelectMember?.(fid);
      }
      return;
    }

    // --- Area 3: Arena Units Click ---
    const arenaUnit = target.closest<HTMLElement>('.arena-unit-box');
    if (arenaUnit) {
      e.stopPropagation();
      const fid = arenaUnit.dataset.fighterId;
      const side = arenaUnit.dataset.side as CombatSide;
      if (fid && side) {
        if (side === 'B') {
          setBattleTarget(fid);
          container.querySelectorAll('.arena-unit-box.side-enemy').forEach(b => b.classList.remove('targeted-enemy'));
          arenaUnit.classList.add('targeted-enemy');
          handlers.onTargetEnemy?.(fid);
        } else {
          setBattlePartyMember(fid);
          container.querySelectorAll('.arena-unit-box.side-player').forEach(b => b.classList.remove('selected-party'));
          arenaUnit.classList.add('selected-party');
          handlers.onSelectPartyFighter?.(fid);
        }
      }
      return;
    }

    // --- Area 4 & Area 5A: Target & Combat Log ---
    const toggleTargetBtn = target.closest('#btn-toggle-target-panel');
    if (toggleTargetBtn) {
      e.stopPropagation();
      toggleTargetPanelCollapse();
      const sidePanel = container.querySelector('#battle-side-panel');
      const targetBox = container.querySelector('#target-info-panel-box');
      const mmorpgContainer = container.querySelector('.mmorpg-battle-container');
      sidePanel?.classList.toggle('collapsed', battleViewState.isTargetPanelCollapsed);
      targetBox?.classList.toggle('collapsed', battleViewState.isTargetPanelCollapsed);
      mmorpgContainer?.classList.toggle('target-collapsed', battleViewState.isTargetPanelCollapsed);
      toggleTargetBtn.textContent = battleViewState.isTargetPanelCollapsed ? '◀' : '▶';
      handlers.onToggleTargetPanel?.(battleViewState.isTargetPanelCollapsed);
      return;
    }

    const clearTargetBtn = target.closest('#btn-clear-target');
    if (clearTargetBtn) {
      e.stopPropagation();
      setBattleTarget(null);
      handlers.onClearTarget?.();
      return;
    }

    const logTabBtn = target.closest<HTMLButtonElement>('.btn-log-tab');
    if (logTabBtn) {
      e.stopPropagation();
      const tab = logTabBtn.dataset.tab as LogTabType;
      if (tab === 'battle' || tab === 'system' || tab === 'loot') {
        setBattleLogTab(tab);
        container.querySelectorAll('.btn-log-tab').forEach(b => b.classList.remove('active'));
        logTabBtn.classList.add('active');
        handlers.onSwitchLogTab?.(tab);
      }
      return;
    }

    const toggleLogBtn = target.closest('#btn-toggle-log-panel');
    if (toggleLogBtn) {
      e.stopPropagation();
      toggleLogPanelCollapse();
      const logBox = container.querySelector('#combat-log-panel-box');
      logBox?.classList.toggle('collapsed', battleViewState.isLogPanelCollapsed);
      toggleLogBtn.textContent = battleViewState.isLogPanelCollapsed ? '▲' : '▼';
      handlers.onToggleLogPanel?.(battleViewState.isLogPanelCollapsed);
      return;
    }

    const clearLogsBtn = target.closest('#btn-clear-log');
    if (clearLogsBtn) {
      e.stopPropagation();
      handlers.onClearLogs?.();
      return;
    }

    // --- Area 5B: Bottom Skill Hotbar, Signature Cast, Swap ---
    const skillSlot = target.closest<HTMLElement>('.skill-hotbar-slot');
    if (skillSlot) {
      e.stopPropagation();
      const skillId = skillSlot.dataset.skillId;
      const slotIndex = Number(skillSlot.dataset.slotIndex);
      if (skillId && !isNaN(slotIndex)) {
        handlers.onSkillSlotClick?.(skillId, slotIndex);
      }
      return;
    }

    const sigCastBtn = target.closest<HTMLButtonElement>('#btn-manual-sig-cast, .btn-signature-cast-box');
    if (sigCastBtn) {
      e.stopPropagation();
      if (sigCastBtn.disabled || sigCastBtn.classList.contains('charging')) {
        return;
      }
      handlers.onCastSignature?.();
      return;
    }

    const swapBtn = target.closest('#btn-manual-swap-hero');
    if (swapBtn) {
      e.stopPropagation();
      handlers.onSwapHero?.();
      return;
    }
  };

  // 2. Delegated Change Listener for Checkboxes
  const changeHandler = (e: Event) => {
    const target = e.target as HTMLInputElement | null;
    if (!target) return;

    if (target.id === 'chk-auto-battle') {
      toggleAutoBattle(target.checked);
      handlers.onToggleAutoBattle?.(battleViewState.autoBattle);
    } else if (target.id === 'chk-auto-cast-sig') {
      toggleAutoCastSig(target.checked);
      handlers.onToggleAutoCastSig?.(battleViewState.autoCastSig);
    } else if (target.id === 'chk-pause-on-sig') {
      togglePauseOnSigReady(target.checked);
      handlers.onTogglePauseOnSigReady?.(battleViewState.pauseOnSigReady);
    }
  };

  container.addEventListener('click', clickHandler);
  container.addEventListener('change', changeHandler);

  // 3. Hotkey Listener: [Space] for Signature Cast, [1]-[4] for Skill Slots
  const keyHandler = (e: KeyboardEvent) => {
    const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.code === 'Space') {
      const sigBtn = container.querySelector<HTMLButtonElement>('#btn-manual-sig-cast, .btn-signature-cast-box');
      if (sigBtn && !sigBtn.disabled && sigBtn.classList.contains('is-ready')) {
        e.preventDefault();
        handlers.onCastSignature?.();
      }
    } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
      const idx = e.code.endsWith('1') ? 0 : e.code.endsWith('2') ? 1 : e.code.endsWith('3') ? 2 : 3;
      const slotEl = container.querySelector<HTMLElement>(`.skill-hotbar-slot[data-slot-index="${idx}"]`);
      const skillId = slotEl?.dataset.skillId;
      if (skillId) {
        handlers.onSkillSlotClick?.(skillId, idx);
      }
    }
  };

  window.addEventListener('keydown', keyHandler);

  return () => {
    container.removeEventListener('click', clickHandler);
    container.removeEventListener('change', changeHandler);
    window.removeEventListener('keydown', keyHandler);
  };
}

// ==========================================
// Area 6: Combat Visual FX & Action Animation Helpers (Step 2)
// ==========================================

/**
 * ฟังก์ชันช่วยค้นหา HTMLElement จาก ID หรือ Object
 */
export function resolveTargetElement(targetOrId: HTMLElement | string | null | undefined): HTMLElement | null {
  if (!targetOrId) return null;
  if (typeof targetOrId !== 'string') return targetOrId;
  if (typeof document === 'undefined') return null;
  return document.getElementById(targetOrId);
}

/**
 * คืนค่า CSS Class สำหรับ Cast Wind-up Aura ตามธาตุของนักสู้
 */
export function getCastAuraClassForElement(element?: string): string {
  switch (element?.toLowerCase()) {
    case 'fire':
      return 'cast-aura-fire';
    case 'water':
      return 'cast-aura-water';
    case 'wind':
      return 'cast-aura-wind';
    case 'electric':
      return 'cast-aura-electric';
    case 'ice':
      return 'cast-aura-ice';
    case 'earth':
      return 'cast-aura-earth';
    case 'plant':
      return 'cast-aura-plant';
    case 'poison':
      return 'cast-aura-poison';
    case 'dark':
      return 'cast-aura-dark';
    case 'light':
      return 'cast-aura-light';
    case 'psychic':
      return 'cast-aura-psychic';
    case 'neutral':
    default:
      return 'cast-aura-neutral';
  }
}

/**
 * คืนค่า CSS Class สำหรับ CC Status Action Overlay ตามประเภทสถานะ
 */
export function getCombatFxClassForStatus(statusType: string): string | null {
  const s = statusType?.toLowerCase().trim();
  switch (s) {
    case 'burn':
      return 'fx-burn-flame';
    case 'freeze':
      return 'fx-freeze-ice';
    case 'stun':
      return 'fx-stun-stars';
    case 'sleep':
      return 'fx-sleep-bubble';
    case 'poison':
      return 'fx-poison-drip';
    case 'bleed':
      return 'fx-bleed-slash';
    case 'confuse':
    case 'confusion':
      return 'fx-confusion-ring';
    case 'petrify':
    case 'stone_curse':
      return 'fx-petrify-stone';
    case 'shield':
      return 'fx-shield-barrier';
    case 'silence':
      return 'fx-silence-chain';
    case 'taunt':
      return 'fx-taunt-rage';
    case 'blind':
      return 'fx-blind-smoke';
    case 'paralysis':
      return 'fx-paralysis-spark';
    case 'energy_coat':
      return 'fx-energy-coat';
    case 'golden_bell_shield':
    case 'elemental_ward':
    case 'iron_body':
    case 'iron_fortress':
      return 'fx-shield-barrier';
    default:
      return null;
  }
}

/**
 * แสดงเอฟเฟกต์แสงออร่ารวบรวมพลังรอบตัวละคร (Cast Wind-up Aura)
 */
export function triggerCastWindup(
  targetOrId: HTMLElement | string,
  element?: string,
  durationMs = 450
): HTMLElement | null {
  const el = resolveTargetElement(targetOrId);
  if (!el) return null;

  const auraClass = getCastAuraClassForElement(element);

  // ล้างคลาสออร่าเดิมทั้งหมดก่อน
  el.classList.remove(
    'cast-windup-aura',
    'cast-aura-fire',
    'cast-aura-water',
    'cast-aura-wind',
    'cast-aura-electric',
    'cast-aura-ice',
    'cast-aura-earth',
    'cast-aura-plant',
    'cast-aura-poison',
    'cast-aura-dark',
    'cast-aura-light',
    'cast-aura-psychic',
    'cast-aura-neutral'
  );

  // บังคับ Reflow เพื่อให้ Animation เริ่มเล่นใหม่ได้อย่างราบรื่น
  void el.offsetWidth;

  el.classList.add('cast-windup-aura', auraClass);

  const timer = typeof window !== 'undefined' ? window.setTimeout : setTimeout;
  timer(() => {
    el.classList.remove('cast-windup-aura', auraClass);
  }, durationMs);

  return el;
}

/**
 * แสดงเอฟเฟกต์คลื่นแสงสีเขียวมรกตพุ่งขึ้นด้านบน เมื่อได้รับบัพหรือฟื้นฟู (Buff Rising Wave)
 */
export function triggerBuffWave(
  targetOrId: HTMLElement | string,
  durationMs = 650
): HTMLElement | null {
  const el = resolveTargetElement(targetOrId);
  if (!el) return null;

  el.classList.remove('fx-buff-rise');
  void el.offsetWidth;
  el.classList.add('fx-buff-rise');

  const timer = typeof window !== 'undefined' ? window.setTimeout : setTimeout;
  timer(() => {
    el.classList.remove('fx-buff-rise');
  }, durationMs);

  return el;
}

/**
 * แสดงเอฟเฟกต์คลื่นพลังสีแดงส้มกดทับลงด้านล่าง เมื่อได้รับดีบัพหรือถูกตัดสเตตัส (Debuff Falling Wave)
 */
export function triggerDebuffWave(
  targetOrId: HTMLElement | string,
  durationMs = 650
): HTMLElement | null {
  const el = resolveTargetElement(targetOrId);
  if (!el) return null;

  el.classList.remove('fx-debuff-fall');
  void el.offsetWidth;
  el.classList.add('fx-debuff-fall');

  const timer = typeof window !== 'undefined' ? window.setTimeout : setTimeout;
  timer(() => {
    el.classList.remove('fx-debuff-fall');
  }, durationMs);

  return el;
}

/**
 * แสดงเอฟเฟกต์แสงเรืองรองสีเขียวทองเมื่อฟื้นฟู HP (Heal Radiant Glow)
 */
export function triggerHealGlow(
  targetOrId: HTMLElement | string,
  durationMs = 650
): HTMLElement | null {
  const el = resolveTargetElement(targetOrId);
  if (!el) return null;

  el.classList.remove('fx-heal-glow');
  void el.offsetWidth;
  el.classList.add('fx-heal-glow');

  const timer = typeof window !== 'undefined' ? window.setTimeout : setTimeout;
  timer(() => {
    el.classList.remove('fx-heal-glow');
  }, durationMs);

  return el;
}

/**
 * แสดงเอฟเฟกต์เกราะแตกกระจาย (Shield Shatter)
 */
export function triggerShieldShatter(
  targetOrId: HTMLElement | string,
  durationMs = 450
): HTMLElement | null {
  const el = resolveTargetElement(targetOrId);
  if (!el) return null;

  el.classList.remove('shield-shatter');
  void el.offsetWidth;
  el.classList.add('shield-shatter');

  const timer = typeof window !== 'undefined' ? window.setTimeout : setTimeout;
  timer(() => {
    el.classList.remove('shield-shatter');
  }, durationMs);

  return el;
}

/**
 * แสดงเอฟเฟกต์สั่นสะเทือนเวทีต่อสู้อย่างรุนแรงสำหรับคริติคอลและท่าไม้ตาย (Heavy Critical Shake)
 */
export function triggerHeavyCritShake(
  stageOrId?: HTMLElement | string | null,
  durationMs = 520
): HTMLElement | null {
  const stage = resolveTargetElement(stageOrId || 'arena-stage');
  if (!stage) return null;

  stage.classList.remove('heavy-crit-shake', 'screen-shake');
  void stage.offsetWidth;
  stage.classList.add('heavy-crit-shake');

  const timer = typeof window !== 'undefined' ? window.setTimeout : setTimeout;
  timer(() => {
    stage.classList.remove('heavy-crit-shake');
  }, durationMs);

  return stage;
}

/**
 * แสดงเอฟเฟกต์สถานะ CC ลงบนตัวละคร (CC Status Action Overlay)
 * รองรับ: burn, freeze, stun, sleep, poison, bleed, confuse, petrify, shield, silence, taunt, blind
 */
export function triggerStatusCCOverlay(
  targetOrId: HTMLElement | string,
  statusType: string,
  durationMs = 800
): HTMLElement | null {
  const el = resolveTargetElement(targetOrId);
  if (!el) return null;

  const fxClass = getCombatFxClassForStatus(statusType);
  if (!fxClass) return null;

  // ค้นหากรอบ Sprite Frame ภายใน หรือใช้ตัว element เองหากไม่มี
  const frame = el.querySelector<HTMLElement>('.unit-sprite-frame') || el;

  // ล้างโอเวอร์เลย์เดิมที่มีประเภทเดียวกัน
  const existing = frame.querySelector(`.unit-fx-overlay.${fxClass}`);
  if (existing) {
    existing.remove();
  }

  if (typeof document === 'undefined') return null;

  const overlay = document.createElement('div');
  overlay.className = `unit-fx-overlay ${fxClass}`;
  frame.appendChild(overlay);

  const timer = typeof window !== 'undefined' ? window.setTimeout : setTimeout;
  timer(() => {
    overlay.remove();
  }, durationMs);

  return overlay;
}
