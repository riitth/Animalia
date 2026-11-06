import {
  BattleSession,
  MAX_SKILLS_PER_BRANCH,
  computeHeroStats,
  getAllElements,
  getAllEnemies,
  getAllHeroes,
  getAllSkills,
  getElementMultiplier,
  getEffectiveStats,
  getSignatureConfig,
  getSkillBranch,
  getSkillSpCost,
  sanitizeSkillLoadout,
  type ActiveEffect,
  type FighterSnapshot,
  type Rarity,
  type TeamSnapshot,
  type TurnEvent,
} from './engine/combat';
import {
  TeamBattleSession,
  type GridCoord,
  type GridRow,
  type TeamFighterState,
  type TeamSquadState,
  ROW_PRIORITY,
  applyRoleAffinityBonus,
} from './engine/team_combat';
import { saveManager } from './engine/save_manager';
import { campaignManager } from './engine/campaign_manager';
import { codexManager } from './engine/codex_manager';
import { renderHeaderHtml, bindHeaderEvents, type NavTab } from './ui/header';
import { renderCampaignViewHtml, bindCampaignEvents, showStageResultModal } from './ui/campaign_view';
import { renderHeroesViewHtml, bindHeroesEvents } from './ui/heroes_view';
import { renderSkillBoardViewHtml, bindSkillBoardEvents } from './ui/skill_board_view';
import { renderIncubatorViewHtml, bindIncubatorEvents } from './ui/incubator_view';
import { renderElementsViewHtml, bindElementsViewEvents } from './ui/elements_view';
import { renderCodexViewHtml, bindCodexEvents } from './ui/codex_view';
import {
  renderBattleViewHtml,
  adapt1v1BattleData,
  adapt2v2BattleData,
  battleViewState,
  bindBattleViewEvents,
  computeTurnOrderTimeline,
  renderTurnOrderTimelineHtml,
  renderPartyMemberCardHtml,
  renderOverheadEffectsHtml,
  formatStatusEffectBadge,
  render1v1ArenaHtml,
  render2v2GridArenaHtml,
  renderTargetInfoPanelHtml,
  renderCombatLogPanelHtml,
  renderBattleBottomHudHtml,
  getFighterAvatarEmoji,
  triggerCastWindup,
  triggerBuffWave,
  triggerDebuffWave,
  triggerHealGlow,
  triggerShieldShatter,
  triggerHeavyCritShake,
  triggerStatusCCOverlay,
  type BattleLayoutConfig,
  type BattleFighterViewData,
  type CombatSide,
} from './ui/battle_view';
import {
  showBattleLoading,
  type BattleLoadingData,
  type LoadingHeroInfo,
} from './ui/battle_loading_view';

const HEROES = getAllHeroes();
const SKILLS = getAllSkills();
const ELEMENTS = getAllElements();
const ENEMIES = getAllEnemies();

const ELEMENT_MAP = new Map(ELEMENTS.map(e => [e.id, e]));
const HERO_MAP = new Map(HEROES.map(h => [h.id, h]));
const ENEMY_MAP = new Map(ENEMIES.map(e => [e.id, e]));

interface BranchInfo {
  id: string;
  shortName: string;
  label: string;
  isNeutral: boolean;
}

const SKILL_BRANCHES: BranchInfo[] = [
  ...ELEMENTS.map(e => ({
    id: e.id,
    shortName: `${e.icon}ธาตุ${e.name}`,
    label: `${e.icon} ธาตุ${e.name} (${e.id.toUpperCase()})`,
    isNeutral: false,
  })),
  { id: 'martial', shortName: '🥋กระบวนท่า', label: '🥋 สายกระบวนท่า (ไร้ธาตุ - สถานะผิดปกติ)', isNeutral: true },
  { id: 'medical', shortName: '💚พยาบาล', label: '💚 สายพยาบาล (ไร้ธาตุ - ฟื้นพลัง & ล้างดีบัฟ)', isNeutral: true },
  { id: 'trick', shortName: '🎭เล่ห์กล', label: '🎭 สายเล่ห์กล (ไร้ธาตุ - ลดสถานะศัตรู)', isNeutral: true },
  { id: 'catalyst', shortName: '⚡เร่งปฏิกิริยา', label: '⚡ สายเร่งปฏิกิริยา (ไร้ธาตุ - เสริมพลัง & เร่งเกจ)', isNeutral: true },
  { id: 'secret', shortName: '📜วิชาลับ', label: '📜 สายวิชาลับ (ไร้ธาตุ - เทคนิคพิเศษ & สวนกลับ)', isNeutral: true },
];
const BRANCH_MAP = new Map(SKILL_BRANCHES.map(b => [b.id, b]));

interface AppState {
  screen: 'core_loop' | 'battle';
  currentTab: NavTab;
  battleSource: 'campaign' | 'sandbox';
  activeStageId: string | null;
  selectedSkillBoardHeroId?: string;
  selectedElementId?: string;
  mode: '1v1_tag' | '2v2_grid';
  teamAHeroes: [string, string];
  teamBHeroes: [string, string];
  teamASkills: [string[], string[]];
  teamBSkills: [string[], string[]];
  teamAPositions: [GridCoord, GridCoord];
  teamBPositions: [GridCoord, GridCoord];
  autoCastSig: boolean;
  pauseOnSigReady: boolean;
  speed: 1 | 2 | 3;
  isPlaying: boolean;
  waitingForManualSig: boolean;
}

const defaultHeroA0 = HERO_MAP.get('rooster') ?? HEROES[0];
const defaultHeroA1 = HERO_MAP.get('cat') ?? HEROES[1];
const defaultHeroB0 = HERO_MAP.get('wolf') ?? HEROES[2];
const defaultHeroB1 = HERO_MAP.get('buffalo') ?? HEROES[3];

const state: AppState = {
  screen: 'core_loop',
  currentTab: 'campaign',
  battleSource: 'campaign',
  activeStageId: null,
  selectedSkillBoardHeroId: undefined,
  selectedElementId: 'fire',
  mode: '1v1_tag',
  teamAHeroes: [defaultHeroA0.id, defaultHeroA1.id],
  teamBHeroes: [defaultHeroB0.id, defaultHeroB1.id],
  teamASkills: [[...defaultHeroA0.defaultSkills], [...defaultHeroA1.defaultSkills]],
  teamBSkills: [[...defaultHeroB0.defaultSkills], [...defaultHeroB1.defaultSkills]],
  teamAPositions: [
    { row: (defaultHeroA0.preferredRow as GridRow) || 'front', col: 1 },
    { row: (defaultHeroA1.preferredRow as GridRow) || 'front', col: 2 },
  ],
  teamBPositions: [
    { row: (defaultHeroB0.preferredRow as GridRow) || 'mid', col: 1 },
    { row: (defaultHeroB1.preferredRow as GridRow) || 'front', col: 1 },
  ],
  autoCastSig: false,
  pauseOnSigReady: true,
  speed: 1,
  isPlaying: true,
  waitingForManualSig: false,
};

let session: BattleSession | null = null;
let teamSession: TeamBattleSession | null = null;
let currentSnap: { teamA: TeamSnapshot; teamB: TeamSnapshot; winner: 'A' | 'B' | 'draw' | null } | null = null;
let displayedLogs: TurnEvent[] = [];
let isAnimatingTurn = false;
let autoPlayTimer: number | null = null;

function getBranchIdForSkill(skillId: string, element: string): string {
  if (element !== 'neutral') return element;
  if (skillId.startsWith('martial_')) return 'martial';
  if (skillId.startsWith('medical_')) return 'medical';
  if (skillId.startsWith('trick_')) return 'trick';
  if (skillId.startsWith('catalyst_')) return 'catalyst';
  if (skillId.startsWith('secret_')) return 'secret';
  return 'martial';
}

function formatStatusPill(ef: ActiveEffect): { text: string; isBuff: boolean } {
  const dur = ef.duration > 0 ? ` (${ef.duration})` : '';
  switch (ef.type) {
    case 'burn':
      return { text: `🔥 เผาไหม้${dur}`, isBuff: false };
    case 'poison':
      return { text: `☠️ พิษ x${ef.stacks ?? 1}${dur}`, isBuff: false };
    case 'freeze':
      return { text: `❄️ แช่แข็ง${dur}`, isBuff: false };
    case 'stun':
      return { text: `💫 สตัน${dur}`, isBuff: false };
    case 'root':
      return { text: `🌿 ตรึง${dur}`, isBuff: false };
    case 'slow':
      return { text: `🐢 สโลว์${dur}`, isBuff: false };
    case 'blind':
      return { text: `🌑 ตาบอด${dur}`, isBuff: false };
    case 'confusion':
      return { text: `🌀 สับสน${dur}`, isBuff: false };
    case 'bleed':
      return { text: `🩸 เลือดไหล${dur}`, isBuff: false };
    case 'taunt':
      return { text: `💢 ยั่วยุ${dur}`, isBuff: false };
    case 'sleep':
      return { text: `💤 หลับใหล${dur}`, isBuff: false };
    case 'silence':
      return { text: `🔕 ใบ้${dur}`, isBuff: false };
    case 'vulnerable':
      return { text: `💔 เปราะบาง${dur}`, isBuff: false };
    case 'wine_mist':
      return { text: `🍶 ชโลมสุรา${dur}`, isBuff: false };
    case 'raging_thunder':
      return { text: `⚡ อัสนีคลั่ง${dur}`, isBuff: false };
    case 'counter_stance':
      return { text: `🗡️ สวนกลับ${dur}`, isBuff: true };
    case 'yata_mirror':
      return { text: `🪞 กระจกยาตะ${dur}`, isBuff: true };
    case 'shadow_clone':
      return { text: `👥 เงามายา${dur}`, isBuff: true };
    case 'regen':
      return { text: `💚 ฟื้นฟู${dur}`, isBuff: true };
    case 'shield':
      return { text: `🛡️ เกราะ${dur}`, isBuff: true };
    case 'buff_atk':
      return { text: `⚔️ ATK+${Math.round((ef.value ?? 0) * 100)}%${dur}`, isBuff: true };
    case 'debuff_atk':
      return { text: `🔻 ATK-${Math.round((ef.value ?? 0) * 100)}%${dur}`, isBuff: false };
    case 'buff_def':
      return { text: `🛡️ DEF+${Math.round((ef.value ?? 0) * 100)}%${dur}`, isBuff: true };
    case 'debuff_def':
      return { text: `💔 DEF-${Math.round((ef.value ?? 0) * 100)}%${dur}`, isBuff: false };
    case 'buff_spd':
      return { text: `⚡ SPD+${Math.round((ef.value ?? 0) * 100)}%${dur}`, isBuff: true };
    case 'debuff_spd':
      return { text: `🐌 SPD-${Math.round((ef.value ?? 0) * 100)}%${dur}`, isBuff: false };
    case 'buff_cri':
      return { text: `🎯 CRI+${ef.value ?? 0}%${dur}`, isBuff: true };
    case 'debuff_cri':
      return { text: `🔻 CRI-${ef.value ?? 0}%${dur}`, isBuff: false };
    case 'buff_flee':
      return { text: `💨 FLEE+${ef.value ?? 0}${dur}`, isBuff: true };
    case 'buff_hit':
      return { text: `👁️ HIT+${ef.value ?? 0}${dur}`, isBuff: true };
    case 'debuff_hit':
      return { text: `🌫️ HIT-${ef.value ?? 0}${dur}`, isBuff: false };
    case 'buff_ab':
      return { text: `🔨 เจาะเกราะ+${ef.value ?? 0}%${dur}`, isBuff: true };
    case 'buff_block':
      return { text: `🧱 บล็อก+${ef.value ?? 0}%${dur}`, isBuff: true };
    default:
      return { text: `${ef.type}${dur}`, isBuff: ef.type.startsWith('buff_') };
  }
}

function getMatchupBadgeHtml(attElem: string, defElem: string): string {
  const mult = getElementMultiplier(attElem, defElem, 'A', 'actual');
  const defEl = ELEMENT_MAP.get(defElem);
  const defName = defEl ? `${defEl.icon}${defEl.name}` : defElem;
  if (mult > 1) {
    return `<span class="matchup-pill matchup-adv">🟢 ชนะธาตุ${defName} ×${mult}</span>`;
  }
  if (mult < 1) {
    return `<span class="matchup-pill matchup-dis">🔴 แพ้ธาตุ${defName} ×${mult}</span>`;
  }
  return `<span class="matchup-pill matchup-neu">⚪ สมดุลธาตุ${defName} ×1.0</span>`;
}

let incubatorTimer: number | null = null;

function startIncubatorTimer() {
  stopIncubatorTimer();
  incubatorTimer = window.setInterval(() => {
    if (state.screen !== 'core_loop' || state.currentTab !== 'incubator') {
      stopIncubatorTimer();
      return;
    }
    const save = saveManager.getData();
    const now = Date.now();
    let anyReady = false;
    [0, 1].forEach(slotIdx => {
      const slot = save.incubatorSlots[slotIdx];
      const timerEl = document.getElementById(`slot-timer-${slotIdx}`);
      if (slot && timerEl) {
        const elapsed = now - slot.startTime;
        const rem = Math.max(0, slot.durationMs - elapsed);
        if (rem === 0) {
          anyReady = true;
          timerEl.textContent = 'พร้อมกะเทาะฟักแล้ว!';
        } else {
          const totalSec = Math.ceil(rem / 1000);
          const min = Math.floor(totalSec / 60);
          const sec = totalSec % 60;
          timerEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} นาที`;
        }
      }
    });
    if (anyReady) {
      const content = document.getElementById('core-tab-content');
      if (content) {
        content.innerHTML = renderIncubatorViewHtml();
        bindIncubatorEvents(content, () => renderApp());
      }
    }
  }, 1000);
}

function stopIncubatorTimer() {
  if (incubatorTimer !== null) {
    window.clearInterval(incubatorTimer);
    incubatorTimer = null;
  }
}

function startCampaignBattle(stageId: string) {
  const stage = campaignManager.getStage(stageId);
  const save = saveManager.getData();

  const mainHeroId = save.activeTeam1v1.mainHeroId;
  const backupHeroId = save.activeTeam1v1.backupHeroId;
  const mainMeta = HERO_MAP.get(mainHeroId);
  const backupMeta = HERO_MAP.get(backupHeroId);
  const mainElem = mainMeta ? ELEMENT_MAP.get(mainMeta.element) : null;
  const backupElem = backupMeta ? ELEMENT_MAP.get(backupMeta.element) : null;

  const playerTeam: LoadingHeroInfo[] = [];
  if (mainMeta) {
    playerTeam.push({
      name: mainMeta.name,
      avatar: getFighterAvatarEmoji(mainHeroId, mainMeta.element),
      element: mainMeta.element,
      elementName: mainElem?.name,
      elementIcon: mainElem?.icon,
      level: save.ownedHeroes[mainHeroId]?.level || 1,
      role: mainMeta.role,
      isMain: true,
    });
  }
  if (backupMeta) {
    playerTeam.push({
      name: backupMeta.name,
      avatar: getFighterAvatarEmoji(backupHeroId, backupMeta.element),
      element: backupMeta.element,
      elementName: backupElem?.name,
      elementIcon: backupElem?.icon,
      level: save.ownedHeroes[backupHeroId]?.level || 1,
      role: backupMeta.role,
      isMain: false,
    });
  }

  const enemyTeam: LoadingHeroInfo[] = [];
  if (stage) {
    for (const en of stage.enemies) {
      const eMeta = HERO_MAP.get(en.heroId) || ENEMY_MAP.get(en.heroId);
      const eElem = eMeta ? ELEMENT_MAP.get(eMeta.element) : null;
      enemyTeam.push({
        name: eMeta?.name || en.heroId,
        avatar: getFighterAvatarEmoji(en.heroId, eMeta?.element),
        element: eMeta?.element || 'fire',
        elementName: eElem?.name,
        elementIcon: eElem?.icon,
        level: en.level,
        role: eMeta?.role,
        isBoss: Boolean(stage.isBossStage),
      });
    }
  }

  // คำนวณความได้เปรียบธาตุเทียบกับตัวหลัก
  let matchupText: string | undefined;
  let matchupType: 'advantage' | 'disadvantage' | 'neutral' = 'neutral';
  const firstEnemy = stage?.enemies[0];
  const firstEnemyMeta = firstEnemy ? (HERO_MAP.get(firstEnemy.heroId) || ENEMY_MAP.get(firstEnemy.heroId)) : null;
  if (mainMeta && firstEnemyMeta) {
    const mult = getElementMultiplier(mainMeta.element, firstEnemyMeta.element, 'A', 'actual');
    const firstEnemyElem = ELEMENT_MAP.get(firstEnemyMeta.element);
    if (mult > 1.0) {
      matchupType = 'advantage';
      matchupText = `🟢 ธาตุ${mainElem?.name || ''} ได้เปรียบธาตุ${firstEnemyElem?.name || ''} (+30% DMG)`;
    } else if (mult < 1.0) {
      matchupType = 'disadvantage';
      matchupText = `🔴 ธาตุ${mainElem?.name || ''} เสียเปรียบธาตุ${firstEnemyElem?.name || ''} (-15% DMG)`;
    } else {
      matchupType = 'neutral';
      matchupText = `⚖️ สภาวะธาตุสมดุล (×1.00)`;
    }
  }

  const loadingData: BattleLoadingData = {
    stageTitle: stage ? `ศึกด่าน 1-${stage.stageNumber}: ${stage.name}` : `ด่าน ${stageId}`,
    stageSubtitle: stage ? `บทที่ ${stage.chapter} • 🎓 ${stage.tutorialTopic || stage.description}` : undefined,
    stageBadge: stage ? `🗺️ CAMPAIGN 1-${stage.stageNumber}` : '🗺️ CAMPAIGN',
    matchupText,
    matchupType,
    playerTeam,
    enemyTeam,
    durationMs: 2300, // หน่วงเวลาสมน้ำสมเนื้อ 2.3 วินาที เสมือนโหลดข้อมูลสังเวียน
  };

  showBattleLoading(loadingData, () => {
    state.activeStageId = stageId;
    state.battleSource = 'campaign';
    state.mode = '1v1_tag';
    state.screen = 'battle';

    const battle = campaignManager.createCampaignBattle(stageId);
    session = battle.session as BattleSession;
    session.teamA.autoCastSignature = state.autoCastSig;
    currentSnap = session.captureSnapshot();
    displayedLogs = [];
    teamSession = null;
    state.isPlaying = true;
    state.waitingForManualSig = false;

    renderApp();
    scheduleNextTick();
  });
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  stopAutoPlay();
  stopIncubatorTimer();
  cleanupBattleEvents?.();

  if (state.screen === 'core_loop') {
    app.innerHTML = `
      ${renderHeaderHtml(state.currentTab)}
      <main id="core-tab-content"></main>
    `;

    bindHeaderEvents(
      app,
      (newTab) => {
        state.currentTab = newTab;
        renderApp();
      },
      () => {
        renderApp();
      }
    );

    const content = app.querySelector('#core-tab-content') as HTMLElement;
    if (!content) return;

    if (state.currentTab === 'campaign') {
      content.innerHTML = renderCampaignViewHtml();
      bindCampaignEvents(
        content,
        (stageId) => startCampaignBattle(stageId),
        () => {
          state.currentTab = 'heroes';
          renderApp();
        },
        () => {
          state.currentTab = 'elements';
          renderApp();
        }
      );
    } else if (state.currentTab === 'heroes') {
      content.innerHTML = renderHeroesViewHtml();
      bindHeroesEvents(
        content,
        () => renderApp(),
        (heroId) => {
          state.selectedSkillBoardHeroId = heroId;
          state.currentTab = 'skill_board';
          renderApp();
        }
      );
    } else if (state.currentTab === 'codex') {
      content.innerHTML = renderCodexViewHtml();
      bindCodexEvents(content, () => renderApp());
    } else if (state.currentTab === 'skill_board') {
      content.innerHTML = renderSkillBoardViewHtml(state.selectedSkillBoardHeroId);
      bindSkillBoardEvents(content, state.selectedSkillBoardHeroId || saveManager.getData().activeTeam1v1.mainHeroId, (newHeroId) => {
        state.selectedSkillBoardHeroId = newHeroId;
        renderApp();
      });
    } else if (state.currentTab === 'elements') {
      content.innerHTML = renderElementsViewHtml(state.selectedElementId);
      bindElementsViewEvents(content, (elemId) => {
        state.selectedElementId = elemId;
      });
    } else if (state.currentTab === 'incubator') {
      content.innerHTML = renderIncubatorViewHtml();
      bindIncubatorEvents(content, () => renderApp());
      startIncubatorTimer();
    } else if (state.currentTab === 'sandbox') {
      renderSetupScreen(content);
    }
  } else {
    renderBattleScreen(app);
  }
}

/* ============================================================================
 * STEP 1.2: TEAM & SKILL SETUP SCREEN
 * ============================================================================ */

function renderSetupScreen(container: HTMLElement) {
  const renderSlotCard = (side: 'A' | 'B', slotIdx: 0 | 1) => {
    const heroId = side === 'A' ? state.teamAHeroes[slotIdx] : state.teamBHeroes[slotIdx];
    const hero = HERO_MAP.get(heroId)!;
    const rawSkillIds = side === 'A' ? state.teamASkills[slotIdx] : state.teamBSkills[slotIdx];
    const skillIds = sanitizeSkillLoadout(rawSkillIds, hero.defaultSkills);
    if (side === 'A') state.teamASkills[slotIdx] = skillIds;
    else state.teamBSkills[slotIdx] = skillIds;

    const el = ELEMENT_MAP.get(hero.element)!;
    const stats = computeHeroStats(heroId);
    const sigCfg = getSignatureConfig(hero.rarity as Rarity);

    const oppFrontHeroId = side === 'A' ? state.teamBHeroes[0] : state.teamAHeroes[0];
    const oppBackHeroId = side === 'A' ? state.teamBHeroes[1] : state.teamAHeroes[1];
    const oppFrontHero = HERO_MAP.get(oppFrontHeroId)!;
    const oppBackHero = HERO_MAP.get(oppBackHeroId)!;

    const posLabel = state.mode === '2v2_grid'
      ? (slotIdx === 0 ? '⚔️ นักสู้คนที่ 1' : '⚔️ นักสู้คนที่ 2')
      : (slotIdx === 0 ? '⚔️ ตัวหลัก (Front)' : '🛡️ ตัวสำรอง (Backup)');

    const heroOptionsHtml = HEROES.map(h => {
      const hEl = ELEMENT_MAP.get(h.element);
      const selected = h.id === heroId ? 'selected' : '';
      return `<option value="${h.id}" ${selected}>[${h.rarity}] ${h.name} — ${hEl?.icon ?? ''}ธาตุ${hEl?.name ?? h.element} (${h.role})</option>`;
    }).join('');

    // Total branch counts across all 4 slots for summary badge
    const totalBranchCounts = new Map<string, number>();
    for (const sid of skillIds) {
      const b = getSkillBranch(sid);
      totalBranchCounts.set(b, (totalBranchCounts.get(b) ?? 0) + 1);
    }
    const quotaBadgesHtml = Array.from(totalBranchCounts.entries())
      .map(([bId, cnt]) => {
        const bInfo = BRANCH_MAP.get(bId);
        const name = bInfo?.shortName ?? bId;
        const isFull = cnt >= MAX_SKILLS_PER_BRANCH;
        return `<span style="background:${isFull ? 'rgba(245, 176, 65, 0.2)' : 'rgba(255,255,255,0.08)'}; border:1px solid ${isFull ? 'var(--accent-gold)' : 'var(--border-warm)'}; color:${isFull ? '#ffe082' : 'var(--text-main)'}; padding:1px 7px; border-radius:999px; font-size:0.74rem; font-weight:700;">${name} ${cnt}/${MAX_SKILLS_PER_BRANCH}</span>`;
      })
      .join(' ');

    const skillSelectsHtml = [0, 1, 2, 3]
      .map(sIdx => {
        const currentSkillId = skillIds[sIdx] ?? hero.defaultSkills[sIdx];

        // Count branches in the OTHER 3 slots to enforce max 2 per branch/element
        const otherBranchCounts = new Map<string, number>();
        skillIds.forEach((sid, idx) => {
          if (idx !== sIdx) {
            const b = getSkillBranch(sid);
            otherBranchCounts.set(b, (otherBranchCounts.get(b) ?? 0) + 1);
          }
        });

        const optgroupsHtml = SKILL_BRANCHES.map(branch => {
          const branchSkills = SKILLS.filter(
            sk => getBranchIdForSkill(sk.id, sk.element) === branch.id
          );
          const branchCountInOthers = otherBranchCounts.get(branch.id) ?? 0;
          const isBranchFullInOthers = branchCountInOthers >= MAX_SKILLS_PER_BRANCH;

          const options = branchSkills
            .map(sk => {
              const isSameElem = sk.element === hero.element;
              const effChance = Math.round(sk.baseChance * (isSameElem ? 1.2 : 1) * 100);
              const bonusTag = isSameElem ? ' ★ตรงธาตุ' : '';
              const sel = sk.id === currentSkillId ? 'selected' : '';

              // Check Rule 2: Duplicate skill in another slot
              const duplicateSlotIdx = skillIds.findIndex((sid, idx) => idx !== sIdx && sid === sk.id);
              const isDuplicate = duplicateSlotIdx !== -1;

              // Check Rule 1: Max 2 skills per element/branch
              const isOverBranchLimit = !isDuplicate && sk.id !== currentSkillId && isBranchFullInOthers;

              const isDisabled = isDuplicate || isOverBranchLimit;
              const disabledAttr = isDisabled ? 'disabled' : '';
              let statusSuffix = '';
              if (isDuplicate) {
                statusSuffix = ` ⛔ [ใส่ในช่องที่ ${duplicateSlotIdx + 1} แล้ว]`;
              } else if (isOverBranchLimit) {
                statusSuffix = ` 🔒 [ครบโควตา ${branch.shortName} ${MAX_SKILLS_PER_BRANCH}/${MAX_SKILLS_PER_BRANCH} ท่าแล้ว]`;
              }

              const spCost = getSkillSpCost(sk.tier);
              return `<option value="${sk.id}" ${sel} ${disabledAttr}>[${sk.tier}] ${sk.name} (ใช้ ${spCost} SP | โอกาส ${effChance}%${bonusTag} | ×${sk.damageMult}) — ${sk.description}${statusSuffix}</option>`;
            })
            .join('');
          return `<optgroup label="${branch.label}">${options}</optgroup>`;
        }).join('');

        return `
          <div class="skill-slot-row">
            <span class="skill-slot-label">ช่องที่ ${sIdx + 1}</span>
            <select class="skill-select" data-side="${side}" data-slot="${slotIdx}" data-skill-idx="${sIdx}">
              ${optgroupsHtml}
            </select>
          </div>
        `;
      })
      .join('');

    let gridPlacementHtml = '';
    if (state.mode === '2v2_grid') {
      const pos = side === 'A' ? state.teamAPositions[slotIdx] : state.teamBPositions[slotIdx];
      const otherPos = side === 'A' ? state.teamAPositions[1 - slotIdx] : state.teamBPositions[1 - slotIdx];

      const isTankOk = hero.role === 'Tank' && pos.row === 'front';
      const isStrikerOk = hero.role === 'Striker' && pos.row === 'front';
      const isAssOk = hero.role === 'Assassin' && pos.row === 'mid';
      const isCtrlOk = hero.role === 'Controller' && (pos.row === 'mid' || pos.row === 'back');
      const isSupOk = hero.role === 'Supporter' && pos.row === 'back';
      const isAffinityActive = isTankOk || isStrikerOk || isAssOk || isCtrlOk || isSupOk;

      const affinityDesc = isTankOk
        ? 'Tank แนวหน้า: ได้รับ DEF +5%, Block +5%'
        : isStrikerOk
        ? 'Striker แนวหน้า: ได้รับ ATK +4%, AB +4%'
        : isAssOk
        ? 'Assassin แถวกลาง: ได้รับ CRI +4%, SPD +3'
        : isCtrlOk
        ? `Controller แถว${pos.row === 'mid' ? 'กลาง' : 'หลัง'}: ได้รับ HIT +6, โอกาสติดสถานะ +5%`
        : isSupOk
        ? 'Supporter แถวหลัง: ได้รับ ประสิทธิภาพฮีล/เกราะ +8%, Max SP +5'
        : 'วางไม่ตรงสาย: แค่อดได้รับโบนัสตำแหน่ง (ไม่มีบทลงโทษ)';

      const backlineInfo = (hero.backlineChance ?? 0) > 0
        ? `🎯 โอกาสข้ามแนวหน้าไปตีแถวหลัง: ${Math.round((hero.backlineChance ?? 0) * 100)}%`
        : '🛡️ โจมตีแนวหน้าศัตรูก่อน 100%';

      // กำหนดคอลัมน์กระดาน 3x3 ให้แนวหน้าหันหน้าเข้าหาจุดกึ่งกลาง (VS)
      // ทีม A (ฝั่งซ้าย): หลัง -> กลาง -> หน้า ➔
      // ทีม B (ฝั่งขวา): ⬅ หน้า -> กลาง -> หลัง
      const gridColumns: GridRow[] = side === 'A' ? ['back', 'mid', 'front'] : ['front', 'mid', 'back'];
      const colHeaderLabels: Record<GridRow, string> = {
        front: side === 'A' ? 'แนวหน้า ➔' : '⬅ แนวหน้า',
        mid: 'แถวกลาง',
        back: 'แถวหลัง',
      };
      const laneLabels = ['บน', 'กลาง', 'ล่าง'];

      gridPlacementHtml = `
        <div class="grid-placement-container">
          <div class="grid-placement-header">
            <span>📍 ตำแหน่งจัดทัพบนกระดาน 3x3 (คลิกเพื่อเลือกช่อง):</span>
            <span style="color:var(--accent-gold);">แนะนำ: แถว<b>${hero.preferredRow?.toUpperCase() || 'MID'}</b></span>
          </div>
          <div class="grid-column-header-row">
            ${gridColumns.map(r => `
              <div class="grid-col-header ${r === 'front' ? 'frontline' : ''}">${colHeaderLabels[r]}</div>
            `).join('')}
          </div>
          <div class="grid-3x3-selector">
            ${[0, 1, 2].map(laneIdx => `
              ${gridColumns.map(r => {
                const isSelected = pos.row === r && pos.col === laneIdx;
                const isOther = otherPos.row === r && otherPos.col === laneIdx;
                const shortRow = r === 'front' ? 'หน้า' : r === 'mid' ? 'กลาง' : 'หลัง';
                return `
                  <div class="grid-select-cell ${isSelected ? 'selected' : ''} ${isOther ? 'occupied-other' : ''}"
                       data-side="${side}" data-slot="${slotIdx}" data-row="${r}" data-col="${laneIdx}"
                       title="${isSelected ? 'ตำแหน่งปัจจุบันของตัวนี้' : isOther ? 'เพื่อนร่วมทีมยืนอยู่ช่องนี้' : 'คลิกเพื่อวางตำแหน่งนี้'}">
                    ${shortRow}-${laneLabels[laneIdx]} ${isSelected ? '📍' : isOther ? '👥' : ''}
                  </div>
                `;
              }).join('')}
            `).join('')}
          </div>
          <div class="role-affinity-box ${isAffinityActive ? 'active' : 'inactive'}">
            <div>${isAffinityActive ? '✨' : '⚪'} <b>${isAffinityActive ? 'โบนัสตำแหน่งทำงาน' : 'สถานะตำแหน่ง'}:</b> ${affinityDesc}</div>
            <div style="font-size:0.73rem; opacity:0.85; margin-top:2px;">${backlineInfo}</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="slot-card">
        <div class="slot-header">
          <div>
            <span style="font-size:0.8rem; color:var(--accent-gold); font-weight:700;">${posLabel}</span>
            <div style="margin-top:4px;">
              <select class="hero-select" data-side="${side}" data-slot="${slotIdx}">
                ${heroOptionsHtml}
              </select>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
            <span class="elem-badge" style="background:${el.color}; color:${el.textColor}; border:2px solid ${el.borderColor};">
              ${el.icon} ธาตุ${el.name} • คลาส ${hero.rarity} • ${hero.role}
            </span>
            <div style="display:flex; gap:4px; flex-wrap:wrap; justify-content:flex-end;">
              ${getMatchupBadgeHtml(hero.element, oppFrontHero.element)}
              ${getMatchupBadgeHtml(hero.element, oppBackHero.element)}
            </div>
          </div>
        </div>

        <div class="stats-mini-bar">
          <span>HP: <b>${Math.round(stats.maxHp)}</b></span>
          <span>SP: <b>${stats.maxSp}</b> <small>(+${stats.spRegen}/เทิร์น)</small></span>
          <span>ATK: <b>${Math.round(stats.atk)}</b></span>
          <span>DEF: <b>${Math.round(stats.def)}</b></span>
          <span>SPD: <b>${Math.round(stats.spd)}</b></span>
          <span>CRI: <b>${stats.cri.toFixed(1)}%</b> (×${stats.criDmg.toFixed(2)})</span>
          <span>HIT/FLEE: <b>${Math.round(stats.hit)}/${Math.round(stats.flee)}</b></span>
          <span>AB/BLK: <b>${stats.ab.toFixed(1)}%/${stats.block.toFixed(1)}%</b></span>
        </div>

        <div class="ability-box">
          <div>✨ <b>Ability [${hero.ability.name}]:</b> ${hero.ability.description}</div>
          <div style="margin-top:3px; color:#ffd54f;">
            🔥 <b>ท่าไม้ตาย [${hero.signatureName}]:</b> ดาเมจ ×${sigCfg.damageMult} (เริ่มเกจ ${sigCfg.startGauge}, +${sigCfg.gainPerTurn}/เทิร์น, โอกาสเอฟเฟกต์ ${Math.round(sigCfg.effectChance * 100)}%)
          </div>
        </div>

        ${gridPlacementHtml}

        <div class="preset-row">
          <span style="font-size:0.75rem; color:var(--text-muted); align-self:center;">จัดสกิลด่วน (2 ธาตุหลัก + 2 สายเสริม):</span>
          <button class="btn btn-xs preset-btn" data-side="${side}" data-slot="${slotIdx}" data-preset="default">🔄 ค่าเริ่มต้นแนะนำ</button>
          <button class="btn btn-xs preset-btn" data-side="${side}" data-slot="${slotIdx}" data-preset="martial">🥋 ผสมกระบวนท่า</button>
          <button class="btn btn-xs preset-btn" data-side="${side}" data-slot="${slotIdx}" data-preset="medical">💚 ผสมพยาบาล</button>
          <button class="btn btn-xs preset-btn" data-side="${side}" data-slot="${slotIdx}" data-preset="trick">🎭 ผสมเล่ห์กล</button>
          <button class="btn btn-xs preset-btn" data-side="${side}" data-slot="${slotIdx}" data-preset="catalyst">⚡ ผสมเร่งปฏิกิริยา</button>
          <button class="btn btn-xs preset-btn" data-side="${side}" data-slot="${slotIdx}" data-preset="secret">📜 ผสมวิชาลับ</button>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:7px; padding:5px 8px; background:rgba(0,0,0,0.22); border-radius:6px; font-size:0.76rem;">
          <span style="color:var(--text-muted);">📌 <b>เงื่อนไขสกิล:</b> สูงสุดธาตุ/สายละ ${MAX_SKILLS_PER_BRANCH} ท่า • ห้ามใส่สกิลซ้ำ</span>
          <div style="display:flex; align-items:center; gap:5px; flex-wrap:wrap;">
            <span style="color:var(--text-muted);">สวมใส่:</span>
            ${quotaBadgesHtml}
          </div>
        </div>

        <div class="skill-slots-list">
          ${skillSelectsHtml}
        </div>
      </div>
    `;
  };

  container.innerHTML = `
    <header class="top-header">
      <div>
        <h1>🐾 Wild Heroes: Balance of Beasts — Battle Arena</h1>
        <div class="subtitle">ระบบจัดทีม & ปรับแต่ง Skill Board 4 ช่อง (10 สายธาตุ + 5 สายไร้ธาตุ = 75 สกิล)</div>
      </div>
      <div style="display:flex; gap:8px; align-items:center;">
        <div class="mode-toggle-group">
          <button class="mode-btn ${state.mode === '1v1_tag' ? 'active' : ''}" id="btn-mode-1v1-setup">🥊 1v1 แท็กทีม</button>
          <button class="mode-btn ${state.mode === '2v2_grid' ? 'active' : ''}" id="btn-mode-2v2-setup">⚔️ 2v2 กระดาน 3x3</button>
        </div>
        <button class="btn" id="btn-random-both">🎲 สุ่มทั้งสองทีม</button>
        <button class="btn btn-primary" id="btn-start-battle-top">⚔️ เริ่มการต่อสู้ (Start Battle)</button>
      </div>
    </header>

    <div class="setup-grid">
      <section class="team-panel">
        <div class="team-panel-header">
          <h2 style="font-size:1.1rem; color:#81c784;">🟢 ทีมผู้เล่น (Player Team A)</h2>
          <button class="btn btn-xs" id="btn-random-a">🎲 สุ่มทีมผู้เล่น</button>
        </div>
        ${renderSlotCard('A', 0)}
        ${renderSlotCard('A', 1)}
      </section>

      <section class="team-panel">
        <div class="team-panel-header">
          <h2 style="font-size:1.1rem; color:#e57373;">🔴 ทีมศัตรู (Enemy Team B)</h2>
          <button class="btn btn-xs" id="btn-random-b">🎲 สุ่มทีมศัตรู</button>
        </div>
        ${renderSlotCard('B', 0)}
        ${renderSlotCard('B', 1)}
      </section>
    </div>

    <div class="start-bar">
      <label style="display:flex; align-items:center; gap:6px; cursor:pointer; font-size:0.9rem;">
        <input type="checkbox" id="chk-setup-autocast" ${state.autoCastSig ? 'checked' : ''} />
        เปิด Auto-Cast ท่าไม้ตายอัตโนมัติ
      </label>
      <label style="display:flex; align-items:center; gap:6px; cursor:pointer; font-size:0.9rem;">
        <input type="checkbox" id="chk-setup-pause-sig" ${state.pauseOnSigReady ? 'checked' : ''} />
        หยุดรอให้กดเองเมื่อเกจท่าไม้ตายเต็ม (โหมด Manual)
      </label>
      <button class="btn btn-primary" id="btn-start-battle">⚔️ เข้าสู่สนามรบ (Start Graybox Battle)</button>
    </div>
  `;

  // Bind events
  container.querySelectorAll<HTMLSelectElement>('.hero-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const side = sel.dataset.side as 'A' | 'B';
      const slot = Number(sel.dataset.slot) as 0 | 1;
      const newHeroId = sel.value;
      const h = HERO_MAP.get(newHeroId)!;
      if (side === 'A') {
        state.teamAHeroes[slot] = newHeroId;
        state.teamASkills[slot] = [...h.defaultSkills];
      } else {
        state.teamBHeroes[slot] = newHeroId;
        state.teamBSkills[slot] = [...h.defaultSkills];
      }
      renderSetupScreen(container);
    });
  });

  container.querySelectorAll<HTMLSelectElement>('.skill-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const side = sel.dataset.side as 'A' | 'B';
      const slot = Number(sel.dataset.slot) as 0 | 1;
      const sIdx = Number(sel.dataset.skillIdx);
      const newSkillId = sel.value;
      const currentList = side === 'A' ? state.teamASkills[slot] : state.teamBSkills[slot];

      // Validate Rule 2 (no duplicate skill) and Rule 1 (max 2 per element/branch)
      const isDuplicate = currentList.some((id, idx) => idx !== sIdx && id === newSkillId);
      const newBranch = getSkillBranch(newSkillId);
      const branchCountInOthers = currentList.filter(
        (id, idx) => idx !== sIdx && getSkillBranch(id) === newBranch
      ).length;

      if (isDuplicate || branchCountInOthers >= MAX_SKILLS_PER_BRANCH) {
        renderSetupScreen(container);
        return;
      }

      if (side === 'A') {
        state.teamASkills[slot][sIdx] = newSkillId;
      } else {
        state.teamBSkills[slot][sIdx] = newSkillId;
      }
      renderSetupScreen(container);
    });
  });

  container.querySelectorAll<HTMLButtonElement>('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const side = btn.dataset.side as 'A' | 'B';
      const slot = Number(btn.dataset.slot) as 0 | 1;
      const preset = btn.dataset.preset!;
      const heroId = side === 'A' ? state.teamAHeroes[slot] : state.teamBHeroes[slot];
      const h = HERO_MAP.get(heroId)!;
      const elemL = `${h.element}_l`;
      const elemM1 = `${h.element}_m1`;
      let newSkills = [...h.defaultSkills];
      if (preset === 'martial') {
        newSkills = [elemL, elemM1, 'martial_l', 'martial_m2'];
      } else if (preset === 'medical') {
        newSkills = [elemL, elemM1, 'medical_l', 'medical_m1'];
      } else if (preset === 'trick') {
        newSkills = [elemL, elemM1, 'trick_l', 'trick_m1'];
      } else if (preset === 'catalyst') {
        newSkills = [elemL, elemM1, 'catalyst_l', 'catalyst_m1'];
      } else if (preset === 'secret') {
        newSkills = [elemL, elemM1, 'secret_l', 'secret_m2'];
      }
      if (side === 'A') state.teamASkills[slot] = newSkills;
      else state.teamBSkills[slot] = newSkills;
      renderSetupScreen(container);
    });
  });

  const randomizeTeam = (side: 'A' | 'B') => {
    const shuffled = [...HEROES].sort(() => Math.random() - 0.5);
    const h0 = shuffled[0];
    const h1 = shuffled[1];
    if (side === 'A') {
      state.teamAHeroes = [h0.id, h1.id];
      state.teamASkills = [[...h0.defaultSkills], [...h1.defaultSkills]];
    } else {
      state.teamBHeroes = [h0.id, h1.id];
      state.teamBSkills = [[...h0.defaultSkills], [...h1.defaultSkills]];
    }
  };

  container.querySelector('#btn-random-a')?.addEventListener('click', () => {
    randomizeTeam('A');
    renderSetupScreen(container);
  });
  container.querySelector('#btn-random-b')?.addEventListener('click', () => {
    randomizeTeam('B');
    renderSetupScreen(container);
  });
  container.querySelector('#btn-random-both')?.addEventListener('click', () => {
    randomizeTeam('A');
    randomizeTeam('B');
    renderSetupScreen(container);
  });

  container.querySelectorAll<HTMLElement>('.grid-select-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const side = cell.dataset.side as 'A' | 'B';
      const slot = Number(cell.dataset.slot) as 0 | 1;
      const row = cell.dataset.row as GridRow;
      const col = Number(cell.dataset.col);
      if (side === 'A') {
        state.teamAPositions[slot] = { row, col };
      } else {
        state.teamBPositions[slot] = { row, col };
      }
      renderSetupScreen(container);
    });
  });

  container.querySelector('#btn-mode-1v1-setup')?.addEventListener('click', () => {
    state.mode = '1v1_tag';
    renderSetupScreen(container);
  });

  container.querySelector('#btn-mode-2v2-setup')?.addEventListener('click', () => {
    state.mode = '2v2_grid';
    renderSetupScreen(container);
  });

  container.querySelector<HTMLInputElement>('#chk-setup-autocast')?.addEventListener('change', e => {
    state.autoCastSig = (e.target as HTMLInputElement).checked;
  });
  container.querySelector<HTMLInputElement>('#chk-setup-pause-sig')?.addEventListener('change', e => {
    state.pauseOnSigReady = (e.target as HTMLInputElement).checked;
  });

  const startBattle = () => {
    state.battleSource = 'sandbox';

    const mainA = HERO_MAP.get(state.teamAHeroes[0]);
    const backA = HERO_MAP.get(state.teamAHeroes[1]);
    const mainB = HERO_MAP.get(state.teamBHeroes[0]);
    const backB = HERO_MAP.get(state.teamBHeroes[1]);

    const playerTeam: LoadingHeroInfo[] = [];
    if (mainA) {
      const el = ELEMENT_MAP.get(mainA.element);
      playerTeam.push({
        name: mainA.name,
        avatar: getFighterAvatarEmoji(mainA.id, mainA.element),
        element: mainA.element,
        elementName: el?.name,
        elementIcon: el?.icon,
        level: 1,
        isMain: true,
      });
    }
    if (backA) {
      const el = ELEMENT_MAP.get(backA.element);
      playerTeam.push({
        name: backA.name,
        avatar: getFighterAvatarEmoji(backA.id, backA.element),
        element: backA.element,
        elementName: el?.name,
        elementIcon: el?.icon,
        level: 1,
        isMain: false,
      });
    }

    const enemyTeam: LoadingHeroInfo[] = [];
    if (mainB) {
      const el = ELEMENT_MAP.get(mainB.element);
      enemyTeam.push({
        name: mainB.name,
        avatar: getFighterAvatarEmoji(mainB.id, mainB.element),
        element: mainB.element,
        elementName: el?.name,
        elementIcon: el?.icon,
        level: 1,
        isMain: true,
      });
    }
    if (backB) {
      const el = ELEMENT_MAP.get(backB.element);
      enemyTeam.push({
        name: backB.name,
        avatar: getFighterAvatarEmoji(backB.id, backB.element),
        element: backB.element,
        elementName: el?.name,
        elementIcon: el?.icon,
        level: 1,
        isMain: false,
      });
    }

    const loadingData: BattleLoadingData = {
      stageTitle: state.mode === '2v2_grid' ? 'สนามรบ 2v2 กระดานยุทธวิธี 3x3' : 'สนามประลอง 1v1 Tag Relay',
      stageSubtitle: 'ปาร์ตี้ฝ่ายเรา vs ศัตรู • ทดสอบระบบธาตุและสกิล',
      stageBadge: state.mode === '2v2_grid' ? '⚔️ 2v2 GRID' : '🥊 1v1 TAG',
      playerTeam,
      enemyTeam,
      durationMs: 2000,
    };

    // บันทึกการค้นพบสัตว์ฝั่งตรงข้ามในสมุดสะสมสัตว์เลี้ยง (Codex Seen State)
    for (const opp of state.teamBHeroes) {
      codexManager.registerSeenHero(opp);
    }

    showBattleLoading(loadingData, () => {
      initBattleSession();
      state.screen = 'battle';
      renderApp();
    });
  };

  container.querySelector('#btn-start-battle')?.addEventListener('click', startBattle);
  container.querySelector('#btn-start-battle-top')?.addEventListener('click', startBattle);
}

/* ============================================================================
 * STEP 1.3 - 1.5: GRAYBOX BATTLE ARENA, VISUAL FEEDBACK & CONTROLS
 * ============================================================================ */

function initBattleSession() {
  stopAutoPlay();
  if (state.mode === '2v2_grid') {
    teamSession = new TeamBattleSession(state.teamAHeroes, state.teamBHeroes, {
      enableSkillEffects: true,
      enableSameElementBonus: true,
      enableAbilities: true,
      forcedElementAdvantage: 'actual',
      teamAPositions: state.teamAPositions,
      teamBPositions: state.teamBPositions,
      customSkillsA: state.teamASkills,
      customSkillsB: state.teamBSkills,
    });
    session = null;
    currentSnap = teamSession.captureSnapshot();
  } else {
    session = new BattleSession(state.teamAHeroes, state.teamBHeroes, {
      enableSkillEffects: true,
      enableSameElementBonus: true,
      enableAbilities: true,
      forcedElementAdvantage: 'actual',
      customSkillsA: state.teamASkills,
      customSkillsB: state.teamBSkills,
    });
    session.teamA.autoCastSignature = state.autoCastSig;
    currentSnap = session.captureSnapshot();
    teamSession = null;
  }
  displayedLogs = [];
  isAnimatingTurn = false;
  state.waitingForManualSig = false;
  state.isPlaying = true;
}

function isPlayerSigReady(): boolean {
  if (!session || !currentSnap || currentSnap.winner) return false;
  const activeA = currentSnap.teamA.fighters[currentSnap.teamA.activeIndex];
  if (activeA.hp <= 0) return false;
  const isStunned = activeA.effects.some(e => e.type === 'stun' || e.type === 'freeze');
  if (isStunned) return false;
  return activeA.gauge >= 100;
}

let cleanupBattleEvents: (() => void) | null = null;

function renderBattleScreen(container: HTMLElement) {
  cleanupBattleEvents?.();

  if (state.mode === '2v2_grid') {
    if (!teamSession) initBattleSession();
  } else {
    if (!session || !currentSnap) initBattleSession();
  }

  const stageInfo =
    state.battleSource === 'campaign' && state.activeStageId
      ? campaignManager.getStage(state.activeStageId)
      : null;

  const stageTitle = stageInfo
    ? `ศึกด่าน 1-${stageInfo.stageNumber}: ${stageInfo.name}`
    : state.mode === '2v2_grid'
    ? 'สนามรบ 2v2 กระดานยุทธวิธี 3x3 (Tactical Grid Arena)'
    : 'สนามประลอง 1v1 Tag Relay (Wild Heroes Arena)';

  const stageSubtitle = stageInfo
    ? `โหมด ${state.mode === '2v2_grid' ? '2v2 Grid' : '1v1 Tag'} • 🎓 ${stageInfo.tutorialTopic}`
    : 'ปาร์ตี้ฝ่ายเรา vs ศัตรู • ทดสอบระบบธาตุ สกิล 4 ช่อง และไม้ตาย';

  const stageTypeBadge = stageInfo
    ? '🗺️ CAMPAIGN'
    : state.mode === '2v2_grid'
    ? '⚔️ 2v2 GRID'
    : '🥊 1v1 TAG';

  let party: BattleFighterViewData[] = [];
  let enemies: BattleFighterViewData[] = [];
  let logs: any[] = [];
  let winner: CombatSide | 'draw' | null = null;
  let roundOrTurn = 0;
  let swapCooldown = 0;

  if (state.mode === '2v2_grid' && teamSession) {
    const data = adapt2v2BattleData(teamSession, currentSnap);
    party = data.party;
    enemies = data.enemies;
    logs = displayedLogs;
    winner = currentSnap ? currentSnap.winner : (teamSession.winner === 'DRAW' ? 'draw' : teamSession.winner);
    roundOrTurn = teamSession.round;
  } else if (session && currentSnap) {
    const data = adapt1v1BattleData(session, currentSnap);
    party = data.party;
    enemies = data.enemies;
    logs = displayedLogs;
    winner = currentSnap.winner;
    roundOrTurn = session.turn;
    swapCooldown = currentSnap.teamA.swapCooldown;
  }

  const activeHero =
    party.find(p => p.isActive && !p.isKo) ||
    party.find(p => !p.isKo) ||
    party[0] ||
    null;

  // Auto-select active hero in party panel if not selected
  if (!battleViewState.selectedPartyMemberId && activeHero) {
    battleViewState.selectedPartyMemberId = activeHero.id;
  }

  // Synchronize state options into battleViewState
  battleViewState.speed = state.speed;
  battleViewState.autoCastSig = state.autoCastSig;
  battleViewState.pauseOnSigReady = state.pauseOnSigReady;
  battleViewState.battleSource = state.battleSource;

  const config: BattleLayoutConfig = {
    stageTitle,
    stageSubtitle,
    stageTypeBadge,
    roundOrTurn,
    maxRoundsOrTurns: 100,
    party,
    enemies,
    logs,
    winner,
    activeFighterId: activeHero?.id,
    mode: state.mode,
    swapCooldown,
  };

  container.innerHTML = renderBattleViewHtml(config, battleViewState);

  cleanupBattleEvents = bindBattleViewEvents(container, {
    onSpeedChange: (spd) => {
      state.speed = spd;
      battleViewState.speed = spd;
    },
    onPlayPauseToggle: () => {
      state.isPlaying = battleViewState.isPlaying;
      state.waitingForManualSig = false;
      updateArenaUI();
      if (state.isPlaying) {
        if (state.mode === '2v2_grid') scheduleNextTick2v2();
        else scheduleNextTick();
      } else {
        stopAutoPlay();
      }
    },
    onStepTurn: () => {
      state.isPlaying = false;
      battleViewState.isPlaying = false;
      state.waitingForManualSig = false;
      stopAutoPlay();
      if (state.mode === '2v2_grid') {
        if (!isAnimatingTurn) {
          void executeAndAnimate2v2Round();
        }
      } else {
        if (!isAnimatingTurn) {
          void executeAndAnimateSingleTurn();
        }
      }
    },
    onRestartBattle: () => {
      if (state.battleSource === 'campaign' && state.activeStageId) {
        startCampaignBattle(state.activeStageId);
      } else {
        initBattleSession();
        renderBattleScreen(container);
      }
    },
    onRetreat: () => {
      stopAutoPlay();
      if (state.battleSource === 'campaign') {
        state.screen = 'core_loop';
        state.currentTab = 'campaign';
        state.activeStageId = null;
      } else {
        state.screen = 'core_loop';
        state.currentTab = 'sandbox';
      }
      renderApp();
    },
    onModeToggle: (mode) => {
      state.mode = mode;
      renderApp();
    },
    onSelectMember: () => {
      updateArenaUI();
    },
    onSelectPartyFighter: () => {
      updateArenaUI();
    },
    onTargetEnemy: () => {
      updateArenaUI();
    },
    onClearTarget: () => {
      updateArenaUI();
    },
    onSwitchLogTab: () => {
      updateArenaUI();
    },
    onClearLogs: () => {
      displayedLogs = [];
      if (state.mode === '2v2_grid' && teamSession) {
        teamSession.logs = [];
      } else if (session) {
        session.logs = [];
      }
      updateArenaUI();
    },
    onCastSignature: () => {
      if (state.mode === '1v1_tag') {
        if (!session || !currentSnap || currentSnap.winner) return;
        const activeA = currentSnap.teamA.fighters[currentSnap.teamA.activeIndex];
        if (activeA.gauge < 100) return;
        session.teamA.queuedSignature = !session.teamA.queuedSignature;
        if (state.waitingForManualSig && session.teamA.queuedSignature) {
          state.waitingForManualSig = false;
          state.isPlaying = true;
          updateArenaUI();
          if (!isAnimatingTurn) {
            void executeAndAnimateSingleTurn();
          }
          return;
        }
        updateArenaUI();
      }
    },
    onSwapHero: () => {
      if (state.mode === '1v1_tag') {
        if (!session || !currentSnap || currentSnap.winner) return;
        if (!session.canSwap(session.teamA)) return;
        session.teamA.queuedSwap = !session.teamA.queuedSwap;
        updateArenaUI();
      }
    },
    onToggleAutoBattle: (en) => {
      battleViewState.autoBattle = en;
      if (en && !state.isPlaying) {
        state.isPlaying = true;
        battleViewState.isPlaying = true;
        if (state.mode === '2v2_grid') scheduleNextTick2v2();
        else scheduleNextTick();
      }
      updateArenaUI();
    },
    onToggleAutoCastSig: (en) => {
      state.autoCastSig = en;
      battleViewState.autoCastSig = en;
      if (session) session.teamA.autoCastSignature = en;
      if (en && state.waitingForManualSig) {
        state.waitingForManualSig = false;
        state.isPlaying = true;
        scheduleNextTick();
      }
      updateArenaUI();
    },
    onTogglePauseOnSigReady: (en) => {
      state.pauseOnSigReady = en;
      battleViewState.pauseOnSigReady = en;
      updateArenaUI();
    },
  });

  updateArenaUI();

  if (state.isPlaying) {
    if (state.mode === '2v2_grid') scheduleNextTick2v2();
    else scheduleNextTick();
  }
}

function scheduleNextTick2v2() {
  stopAutoPlay();
  if (!teamSession || teamSession.winner || !state.isPlaying || isAnimatingTurn) return;

  const intervalMs = state.speed === 3 ? 120 : state.speed === 2 ? 250 : 400;
  autoPlayTimer = window.setTimeout(() => {
    void executeAndAnimate2v2Round();
  }, intervalMs);
}

function updateArenaUI() {
  if (state.mode === '2v2_grid') {
    updateArena2v2UI();
    return;
  }

  if (!session || !currentSnap) return;

  const { party, enemies } = adapt1v1BattleData(session, currentSnap);
  const activeHero =
    party.find(p => p.isActive && !p.isKo) ||
    party.find(p => !p.isKo) ||
    party[0] ||
    null;
  const backupHero = party.find(p => p.isBackup) || null;
  const activeEnemy =
    enemies.find(e => e.isActive && !e.isKo) ||
    enemies.find(e => !e.isKo) ||
    enemies[0] ||
    null;

  // 1. Area 1: Top HUD counters
  const roundEl = document.getElementById('hud-round-val');
  if (roundEl) {
    roundEl.textContent = currentSnap.winner
      ? `จบการต่อสู้ (เทิร์นที่ ${session.turn})`
      : `${session.turn}`;
  }
  const enemyValEl = document.getElementById('hud-enemy-val');
  if (enemyValEl) {
    const living = enemies.filter(e => !e.isKo).length;
    enemyValEl.textContent = `${living}/${enemies.length}`;
    enemyValEl.classList.toggle('cleared', living === 0);
  }
  const partyValEl = document.getElementById('hud-party-val');
  if (partyValEl) {
    const living = party.filter(p => !p.isKo).length;
    partyValEl.textContent = `${living}/${party.length}`;
  }
  const playPauseBtn = document.getElementById('btn-battle-play-pause') as HTMLButtonElement | null;
  if (playPauseBtn) {
    playPauseBtn.textContent = state.isPlaying ? '⏸️ หยุด' : '▶️ เล่นต่อ';
    playPauseBtn.classList.toggle('is-playing', state.isPlaying);
    playPauseBtn.classList.toggle('is-paused', !state.isPlaying);
    playPauseBtn.disabled = Boolean(currentSnap.winner);
  }
  const stepBtn = document.getElementById('btn-battle-step') as HTMLButtonElement | null;
  if (stepBtn) {
    stepBtn.disabled = Boolean(currentSnap.winner) || isAnimatingTurn;
  }

  // Timeline ribbon
  const timelineRibbon = document.getElementById('turn-order-timeline-ribbon');
  if (timelineRibbon) {
    const timelineItems = computeTurnOrderTimeline([...party, ...enemies], activeHero?.id);
    timelineRibbon.outerHTML = renderTurnOrderTimelineHtml(timelineItems, activeHero?.id);
  }

  // 2. Area 2: Party Status Panel
  const partyList = document.getElementById('party-members-list');
  if (partyList) {
    partyList.innerHTML = party
      .map(p => renderPartyMemberCardHtml(p, p.id === battleViewState.selectedPartyMemberId))
      .join('');
  }

  // 3. Area 3: Center Arena & Banner
  const arenaField = document.getElementById('arena-field-grid');
  if (arenaField) {
    arenaField.innerHTML = render1v1ArenaHtml(party, enemies, activeHero?.id, battleViewState);
  }

  const bannerArea = document.getElementById('banner-area');
  if (bannerArea) {
    if (currentSnap.winner) {
      const isWin = currentSnap.winner === 'A';
      const isDraw = currentSnap.winner === 'draw';
      const winClass = isWin ? 'winner-player' : isDraw ? 'winner-draw' : 'winner-enemy';
      const winText = isWin
        ? '🏆 ชัยชนะเป็นของผู้เล่น! (VICTORY)'
        : isDraw
        ? '🤝 การต่อสู้เสมอกัน! (DRAW)'
        : '💀 ปาร์ตี้พ่ายแพ้! (DEFEAT)';
      bannerArea.innerHTML = `
        <div class="arena-winner-banner ${winClass}">
          <div class="banner-title-text">${winText}</div>
          <div class="banner-sub-text">จบการต่อสู้ในเทิร์นที่ ${session.turn}</div>
        </div>
      `;
    } else if (state.waitingForManualSig && activeHero && activeHero.gauge >= 100) {
      bannerArea.innerHTML = `
        <div class="arena-winner-banner" style="background: rgba(229, 57, 53, 0.25); border: 1px solid #ff7043; cursor:pointer;" id="banner-manual-sig-prompt">
          <div class="banner-title-text">⚡ ท่าไม้ตายของ ${activeHero.name} เต็ม 100% พร้อมปลดปล่อยแล้ว!</div>
          <div class="banner-sub-text">กด [Space] หรือคลิกเพื่อปลดปล่อยพลังทันที!</div>
        </div>
      `;
      bannerArea.querySelector('#banner-manual-sig-prompt')?.addEventListener('click', () => {
        if (!session || activeHero.gauge < 100) return;
        session.teamA.queuedSignature = true;
        state.waitingForManualSig = false;
        state.isPlaying = true;
        updateArenaUI();
        if (!isAnimatingTurn) void executeAndAnimateSingleTurn();
      });
    } else {
      bannerArea.innerHTML = '';
    }
  }

  // 5. Area 5A: Tabbed Combat Log
  const combatLogBox = document.getElementById('combat-log-panel-box');
  if (combatLogBox) {
    combatLogBox.outerHTML = renderCombatLogPanelHtml(displayedLogs, battleViewState);
    const logScroll = document.getElementById('log-scroll-view');
    if (logScroll) logScroll.scrollTop = logScroll.scrollHeight;
  }

  // 6. Area 5B: Bottom Skill Hotbar & Battle Controls
  const bottomHud = document.getElementById('battle-bottom-hud');
  if (bottomHud) {
    bottomHud.outerHTML = renderBattleBottomHudHtml(
      {
        activeHero,
        backupHero,
        mode: '1v1_tag',
        swapCooldown: currentSnap.teamA.swapCooldown,
        winner: currentSnap.winner,
      },
      battleViewState
    );
  }
}

function updateArena2v2UI() {
  if (!teamSession) return;

  const { party, enemies } = adapt2v2BattleData(teamSession, currentSnap);
  const activeHero = party.find(p => !p.isKo) || party[0] || null;
  const snapWinner = currentSnap ? currentSnap.winner : (teamSession.winner === 'DRAW' ? 'draw' : teamSession.winner);

  // 1. Top HUD
  const roundEl = document.getElementById('hud-round-val');
  if (roundEl) {
    roundEl.textContent = snapWinner
      ? `จบการต่อสู้ (รอบที่ ${teamSession.round})`
      : `${teamSession.round}`;
  }
  const enemyValEl = document.getElementById('hud-enemy-val');
  if (enemyValEl) {
    const living = enemies.filter(e => !e.isKo).length;
    enemyValEl.textContent = `${living}/${enemies.length}`;
    enemyValEl.classList.toggle('cleared', living === 0);
  }
  const partyValEl = document.getElementById('hud-party-val');
  if (partyValEl) {
    const living = party.filter(p => !p.isKo).length;
    partyValEl.textContent = `${living}/${party.length}`;
  }
  const playPauseBtn = document.getElementById('btn-battle-play-pause') as HTMLButtonElement | null;
  if (playPauseBtn) {
    playPauseBtn.textContent = state.isPlaying ? '⏸️ หยุด' : '▶️ เล่นต่อ';
    playPauseBtn.classList.toggle('is-playing', state.isPlaying);
    playPauseBtn.classList.toggle('is-paused', !state.isPlaying);
    playPauseBtn.disabled = Boolean(snapWinner);
  }
  const stepBtn = document.getElementById('btn-battle-step') as HTMLButtonElement | null;
  if (stepBtn) {
    stepBtn.disabled = Boolean(snapWinner) || isAnimatingTurn;
  }

  // Timeline ribbon
  const timelineRibbon = document.getElementById('turn-order-timeline-ribbon');
  if (timelineRibbon) {
    const timelineItems = computeTurnOrderTimeline([...party, ...enemies]);
    timelineRibbon.outerHTML = renderTurnOrderTimelineHtml(timelineItems);
  }

  // 2. Party panel
  const partyList = document.getElementById('party-members-list');
  if (partyList) {
    partyList.innerHTML = party
      .map(p => renderPartyMemberCardHtml(p, p.id === battleViewState.selectedPartyMemberId))
      .join('');
  }

  // 3. Center Arena
  const arenaField = document.getElementById('arena-field-grid');
  if (arenaField) {
    arenaField.innerHTML = render2v2GridArenaHtml(party, enemies, undefined, battleViewState);
  }

  const bannerArea = document.getElementById('banner-area');
  if (bannerArea) {
    if (snapWinner) {
      const isWin = snapWinner === 'A';
      const isDraw = snapWinner === 'draw';
      const winClass = isWin ? 'winner-player' : isDraw ? 'winner-draw' : 'winner-enemy';
      const winText = isWin
        ? '🏆 ชัยชนะเป็นของทีมผู้เล่น! (VICTORY)'
        : isDraw
        ? '🤝 การต่อสู้เสมอกัน! (DRAW)'
        : '💀 ปาร์ตี้พ่ายแพ้! (DEFEAT)';
      bannerArea.innerHTML = `
        <div class="arena-winner-banner ${winClass}">
          <div class="banner-title-text">${winText}</div>
          <div class="banner-sub-text">จบการต่อสู้ในรอบที่ ${teamSession.round} (แอ็กชันรวม ${teamSession.totalActions} ครั้ง)</div>
        </div>
      `;
    } else {
      bannerArea.innerHTML = '';
    }
  }

  // 5. Combat Log Panel
  const combatLogBox = document.getElementById('combat-log-panel-box');
  if (combatLogBox) {
    combatLogBox.outerHTML = renderCombatLogPanelHtml(displayedLogs, battleViewState);
    const logScroll = document.getElementById('log-scroll-view');
    if (logScroll) logScroll.scrollHeight && (logScroll.scrollTop = logScroll.scrollHeight);
  }

  // 6. Bottom HUD
  const bottomHud = document.getElementById('battle-bottom-hud');
  if (bottomHud) {
    bottomHud.outerHTML = renderBattleBottomHudHtml(
      {
        activeHero,
        backupHero: null,
        mode: '2v2_grid',
        winner: snapWinner,
      },
      battleViewState
    );
  }
}

function appendCombatLog(ev: TurnEvent) {
  displayedLogs.push(ev);
  const combatLogBox = document.getElementById('combat-log-panel-box');
  if (combatLogBox) {
    combatLogBox.outerHTML = renderCombatLogPanelHtml(displayedLogs, battleViewState);
    const logScroll = document.getElementById('log-scroll-view');
    if (logScroll) logScroll.scrollTop = logScroll.scrollHeight;
  }
}

function spawnFloatingText(side: 'A' | 'B', text: string, cssClass: string, targetBox?: HTMLElement | null) {
  const layer = targetBox?.querySelector<HTMLElement>('.floating-layer') || document.getElementById(`float-layer-${side}`);
  if (!layer) return;
  const item = document.createElement('div');
  item.className = `float-item ${cssClass}`;
  item.textContent = text;
  layer.appendChild(item);
  window.setTimeout(() => {
    item.remove();
  }, 1350);
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => window.setTimeout(resolve, ms));
}

/**
 * ฟังก์ชันช่วยค้นหา Unit Box ของนักสู้ในสนาม รองรับทั้ง 1v1 และ 2v2 Grid อย่างแม่นยำ
 */
function getArenaFighterBox(side: 'A' | 'B', nameOrId?: string, snapshot?: { teamA: TeamSnapshot; teamB: TeamSnapshot }): HTMLElement | null {
  const candidates = nameOrId
    ? [nameOrId.trim(), ...nameOrId.split(',').map(s => s.trim()).filter(Boolean)]
    : [];

  for (const cand of candidates) {
    // 1. ลองค้นหาด้วย data-fighter-id ตรงตัวในฝั่งที่ระบุก่อน
    const sideClass = side === 'A' ? 'side-player' : 'side-enemy';
    const directSideBox = document.querySelector<HTMLElement>(`.arena-unit-box.${sideClass}[data-fighter-id="${cand}"]`);
    if (directSideBox) return directSideBox;

    const directBox = document.querySelector<HTMLElement>(`.arena-unit-box[data-fighter-id="${cand}"]`);
    if (directBox) return directBox;

    // 2. ลองค้นหาจาก snapshot เทียบชื่อเพื่อหา id
    if (snapshot) {
      const primaryTeam = side === 'A' ? snapshot.teamA : snapshot.teamB;
      const secondaryTeam = side === 'A' ? snapshot.teamB : snapshot.teamA;
      const f =
        primaryTeam?.fighters?.find(x => x.id === cand || x.name === cand) ||
        secondaryTeam?.fighters?.find(x => x.id === cand || x.name === cand);
      if (f) {
        const snapSideBox = document.querySelector<HTMLElement>(`.arena-unit-box.${sideClass}[data-fighter-id="${f.id}"]`);
        if (snapSideBox) return snapSideBox;
        const snapBox = document.querySelector<HTMLElement>(`.arena-unit-box[data-fighter-id="${f.id}"]`);
        if (snapBox) return snapBox;
      }
    }

    // 3. ลองค้นหาจากข้อความชื่อใน .unit-name-label
    const nameLabels = document.querySelectorAll<HTMLElement>(`.arena-unit-box.${sideClass} .unit-name-label`);
    for (let i = 0; i < nameLabels.length; i++) {
      if (nameLabels[i].textContent?.trim() === cand) {
        const parentBox = nameLabels[i].closest<HTMLElement>('.arena-unit-box');
        if (parentBox) return parentBox;
      }
    }
  }
  // 4. Fallback สำหรับโหมด 1v1 หรือตัวแรกของฝั่งในโหมด 2v2
  return (
    document.getElementById(`box-unit-${side}`) ||
    document.querySelector<HTMLElement>(`.arena-unit-box.side-${side === 'A' ? 'player' : 'enemy'}`)
  );
}

/**
 * ดึงธาตุของนักสู้สำหรับแสดงแสงออร่าร่ายสกิล (Cast Wind-up Aura)
 */
function getFighterElement(side: 'A' | 'B', nameOrId?: string, snapshot?: { teamA: TeamSnapshot; teamB: TeamSnapshot }): string {
  if (snapshot) {
    const team = side === 'A' ? snapshot.teamA : snapshot.teamB;
    const f = team?.fighters?.find(x => x.id === nameOrId || x.name === nameOrId) || team?.fighters?.[team.activeIndex];
    if (f?.element) return f.element;
  }
  return 'neutral';
}

function updateUnitOverheadDom(side: 'A' | 'B', fighter: FighterSnapshot) {
  const box = getArenaFighterBox(side, fighter.id, currentSnap || undefined) || document.getElementById(`box-unit-${side}`);
  if (!box) return;

  const hpPct = Math.max(0, Math.min(100, Math.round((fighter.hp / Math.max(1, fighter.maxHp)) * 100)));
  const shieldPct = Math.max(0, Math.min(100, Math.round((fighter.shield / Math.max(1, fighter.maxHp)) * 100)));
  const hpColor = hpPct > 50 ? '#4caf50' : hpPct > 20 ? '#ffa726' : '#ef5350';

  const hpFill = box.querySelector<HTMLElement>('.overhead-hp-fill');
  if (hpFill) {
    hpFill.style.width = `${hpPct}%`;
    hpFill.style.backgroundColor = hpColor;
  }
  const shieldFill = box.querySelector<HTMLElement>('.overhead-shield-fill');
  if (shieldFill) {
    shieldFill.style.width = `${shieldPct}%`;
    shieldFill.style.display = fighter.shield > 0 ? '' : 'none';
  }
  const hpVal = box.querySelector<HTMLElement>('.hp-val');
  if (hpVal) {
    hpVal.textContent = `${Math.round(fighter.hp)}`;
  }
  const shieldBadge = box.querySelector<HTMLElement>('.shield-badge');
  if (shieldBadge) {
    shieldBadge.textContent = fighter.shield > 0 ? `+🛡️${Math.round(fighter.shield)}` : '';
    shieldBadge.style.display = fighter.shield > 0 ? '' : 'none';
  }
  const overheadEffects = box.querySelector<HTMLElement>('.unit-overhead-effects');
  if (overheadEffects) {
    overheadEffects.innerHTML = renderOverheadEffectsHtml(fighter.effects);
  }
}

function updatePartyCardBarsDom(fighter: FighterSnapshot) {
  const card = document.querySelector<HTMLElement>(`.party-member-card[data-fighter-id="${fighter.id}"]`);
  if (!card) return;

  const hpPct = Math.max(0, Math.min(100, Math.round((fighter.hp / Math.max(1, fighter.maxHp)) * 100)));
  const spPct = Math.max(0, Math.min(100, Math.round((fighter.sp / Math.max(1, fighter.maxSp)) * 100)));
  const shieldPct = Math.max(0, Math.min(100, Math.round((fighter.shield / Math.max(1, fighter.maxHp)) * 100)));
  const gaugePct = Math.max(0, Math.min(100, Math.round(fighter.gauge)));
  const hpColor = hpPct > 50 ? '#66bb6a' : hpPct > 20 ? '#ffa726' : '#ef5350';
  const isSigReady = fighter.gauge >= 100;

  const hpFill = card.querySelector<HTMLElement>('.hp-group .hp-fill');
  if (hpFill) {
    hpFill.style.width = `${hpPct}%`;
    hpFill.style.backgroundColor = hpColor;
  }
  const shieldFill = card.querySelector<HTMLElement>('.hp-group .shield-fill');
  if (shieldFill) {
    shieldFill.style.width = `${shieldPct}%`;
    shieldFill.style.display = fighter.shield > 0 ? '' : 'none';
  }
  const hpNums = card.querySelector<HTMLElement>('.hp-group .bar-nums');
  if (hpNums) {
    hpNums.innerHTML = `<strong>${Math.round(fighter.hp)}</strong> / ${Math.round(fighter.maxHp)} ${
      fighter.shield > 0 ? `<span class="shield-num">+🛡️${Math.round(fighter.shield)}</span>` : ''
    } <span class="pct-num">(${hpPct}%)</span>`;
  }

  const spFill = card.querySelector<HTMLElement>('.sp-group .sp-fill');
  if (spFill) {
    spFill.style.width = `${spPct}%`;
  }
  const spNums = card.querySelector<HTMLElement>('.sp-group .bar-nums');
  if (spNums) {
    spNums.innerHTML = `<strong>${Math.round(fighter.sp)}</strong> / ${Math.round(fighter.maxSp)}`;
  }

  const sigGroup = card.querySelector<HTMLElement>('.sig-group');
  if (sigGroup) {
    sigGroup.classList.toggle('sig-ready', isSigReady);
  }
  const sigFill = card.querySelector<HTMLElement>('.sig-group .sig-fill');
  if (sigFill) {
    sigFill.style.width = `${gaugePct}%`;
    sigFill.classList.toggle('ready', isSigReady);
  }
  const sigNums = card.querySelector<HTMLElement>('.sig-group .bar-nums');
  if (sigNums) {
    sigNums.className = `bar-nums ${isSigReady ? 'ready-text' : ''}`;
    sigNums.textContent = isSigReady ? '⭐ พร้อมปล่อยท่า!' : `${gaugePct}%`;
  }
}

function updateTargetCardBarsDom(fighter: FighterSnapshot) {
  const panel = document.getElementById('target-info-panel-box');
  if (!panel) return;

  const hpPct = Math.max(0, Math.min(100, Math.round((fighter.hp / Math.max(1, fighter.maxHp)) * 100)));
  const spPct = Math.max(0, Math.min(100, Math.round((fighter.sp / Math.max(1, fighter.maxSp)) * 100)));
  const shieldPct = Math.max(0, Math.min(100, Math.round((fighter.shield / Math.max(1, fighter.maxHp)) * 100)));
  const hpColor = hpPct > 50 ? '#66bb6a' : hpPct > 20 ? '#ffa726' : '#ef5350';

  const hpFill = panel.querySelector<HTMLElement>('.hp-group .hp-fill');
  if (hpFill) {
    hpFill.style.width = `${hpPct}%`;
    hpFill.style.backgroundColor = hpColor;
  }
  const shieldFill = panel.querySelector<HTMLElement>('.hp-group .shield-fill');
  if (shieldFill) {
    shieldFill.style.width = `${shieldPct}%`;
    shieldFill.style.display = fighter.shield > 0 ? '' : 'none';
  }
  const hpNums = panel.querySelector<HTMLElement>('.hp-group .bar-nums');
  if (hpNums) {
    hpNums.innerHTML = `<strong>${Math.round(fighter.hp)}</strong> / ${Math.round(fighter.maxHp)} ${
      fighter.shield > 0 ? `<span class="shield-num">+🛡️${Math.round(fighter.shield)}</span>` : ''
    } <span class="pct-num">(${hpPct}%)</span>`;
  }

  const spFill = panel.querySelector<HTMLElement>('.sp-group .sp-fill');
  if (spFill) {
    spFill.style.width = `${spPct}%`;
  }
  const spNums = panel.querySelector<HTMLElement>('.sp-group .bar-nums');
  if (spNums) {
    spNums.innerHTML = `<strong>${Math.round(fighter.sp)}</strong> / ${Math.round(fighter.maxSp)}`;
  }
}

function updateBottomHudBarsDom(hero: FighterSnapshot) {
  const hud = document.getElementById('battle-bottom-hud');
  if (!hud) return;

  const isSigReady = hero.gauge >= 100;
  const gaugeFill = hud.querySelector<HTMLElement>('.sig-gauge-fill');
  if (gaugeFill) {
    gaugeFill.style.width = `${Math.min(100, Math.round(hero.gauge))}%`;
  }
  const gaugePctText = hud.querySelector<HTMLElement>('.sig-gauge-pct-text');
  if (gaugePctText) {
    gaugePctText.textContent = isSigReady ? '⭐ พร้อมใช้งาน!' : `${Math.min(100, Math.round(hero.gauge))}%`;
  }
  const sigBtn = hud.querySelector<HTMLElement>('.signature-cast-button');
  if (sigBtn) {
    sigBtn.classList.toggle('ready', isSigReady);
    sigBtn.classList.toggle('charging', !isSigReady);
    sigBtn.setAttribute('aria-disabled', isSigReady ? 'false' : 'true');
    const badge = sigBtn.querySelector<HTMLElement>('.sig-hotkey-badge');
    if (badge) {
      badge.style.display = isSigReady ? '' : 'none';
    }
  }
}

function applySnapshotBarsToDOM(snap: { teamA: TeamSnapshot; teamB: TeamSnapshot }) {
  // 1. อัปเดตแถบค่าพลังเหนือหัวในสนามประลอง (Area 3)
  if (state.mode === '2v2_grid') {
    for (const f of snap.teamA.fighters) updateUnitOverheadDom('A', f);
    for (const f of snap.teamB.fighters) updateUnitOverheadDom('B', f);
  } else {
    const fA = snap.teamA.fighters[snap.teamA.activeIndex];
    const fB = snap.teamB.fighters[snap.teamB.activeIndex];
    if (fA) updateUnitOverheadDom('A', fA);
    if (fB) updateUnitOverheadDom('B', fB);
  }

  // 2. อัปเดตแถบค่าพลังในแผงปาร์ตี้ (Area 2)
  for (const f of snap.teamA.fighters) {
    updatePartyCardBarsDom(f);
  }

  // 3. อัปเดตแถบค่าพลังของเป้าหมายที่กำลังถูกเลือกดู (Target Info Card)
  if (battleViewState.selectedTargetId) {
    const targetSnap = [...snap.teamB.fighters, ...snap.teamA.fighters].find(
      f => f.id === battleViewState.selectedTargetId
    );
    if (targetSnap) updateTargetCardBarsDom(targetSnap);
  }

  // 4. อัปเดตเกจท่าไม้ตายและคีย์ลัดในแถบควบคุมด้านล่าง (Area 5B)
  const fA = snap.teamA.fighters[snap.teamA.activeIndex];
  if (fA) {
    updateBottomHudBarsDom(fA);
  }
}

async function animateTurnEvent(ev: TurnEvent) {
  const speedDiv = state.speed === 3 ? 2.5 : state.speed === 2 ? 1.6 : 1;
  const attSide = ev.actorSide;
  const defSide = attSide === 'A' ? 'B' : 'A';

  const attBox = getArenaFighterBox(attSide, ev.actorName, ev.snapshot);
  const defBox = getArenaFighterBox(defSide, ev.targetName, ev.snapshot);
  const stage = document.getElementById('arena-stage');

  if (ev.actionType === 'normal' || ev.actionType === 'skill' || ev.actionType === 'signature') {
    const isSpecialAction = ev.actionType === 'skill' || ev.actionType === 'signature';
    const hasBuffOrDebuff = (ev.appliedEffects && ev.appliedEffects.length > 0) || ev.healed > 0 || ev.shieldGained > 0;

    // ------------------------------------------------------------------------
    // จังหวะที่ 1: Action Windup / Telegraph (พุ่งตัวเข้าหาเป้าหมาย + แสงออร่าร่าย + ปรากฏชื่อสกิล)
    // ------------------------------------------------------------------------
    if (attBox) {
      attBox.classList.add(attSide === 'A' ? 'lunge-right' : 'lunge-left');
      const actorElem = getFighterElement(attSide, ev.actorName, ev.snapshot);
      triggerCastWindup(attBox, actorElem, 750 / speedDiv);
    }

    if (ev.actionType === 'signature') {
      spawnFloatingText(attSide, `🔥 ${ev.actionName}!`, 'float-ability', attBox);
    } else if (ev.actionType === 'skill') {
      const spNote = ev.spCost ? ` (-${ev.spCost} SP)` : '';
      spawnFloatingText(attSide, `⚡ ${ev.actionName}${spNote}`, 'float-ability', attBox);
    }

    // ดีเลย์จังหวะรวบรวมพลัง / ตั้งท่า: ท่าไม้ตายหรือสกิลรอนานขึ้นให้เห็นชื่อสกิลชัดเจน
    await delay((isSpecialAction ? 600 : 350) / speedDiv);

    // ------------------------------------------------------------------------
    // จังหวะที่ 2: Hit Impact & Bar Deduction (เกิดเอฟเฟกต์การโจมตี + หลอดลดพร้อมกัน)
    // ------------------------------------------------------------------------
    if (ev.isMiss) {
      spawnFloatingText(defSide, 'MISS! 💨', 'float-miss', defBox);
    } else {
      // สั่นหน้าจอหากเป็นท่าไม้ตาย Signature หรือติดคริติคอล หรือสกิลขั้นสูงสุด Tier L
      if (ev.isCrit || ev.actionType === 'signature') {
        triggerHeavyCritShake(stage, 520 / speedDiv);
      } else if (ev.skillTier === 'L') {
        stage?.classList.remove('screen-shake');
        void stage?.offsetWidth;
        stage?.classList.add('screen-shake');
      }

      // แสดงเอฟเฟกต์กระพริบ Hit Flash บนตัวผู้ถูกโจมตี
      if (defBox && ev.damage > 0) {
        defBox.classList.remove('hit-flash');
        void defBox.offsetWidth;
        defBox.classList.add('hit-flash');
      }

      // ปล่อยตัวเลขดาเมจลอยขึ้นมา (Floating Combat Text) ด้านบนของตัวละคร
      if (ev.damage > 0) {
        if (ev.isCrit) {
          spawnFloatingText(defSide, `💥 CRIT! -${ev.damage}`, 'float-crit', defBox);
        } else {
          spawnFloatingText(defSide, `⚔️ -${ev.damage}`, 'float-dmg', defBox);
        }
      }
      if (ev.isArmorBreak) {
        spawnFloatingText(defSide, '🔨 เจาะเกราะ!', 'float-status-debuff', defBox);
        if (defBox) {
          triggerShieldShatter(defBox, 450 / speedDiv);
          triggerDebuffWave(defBox, 650 / speedDiv);
        }
      } else if (ev.isBlocked) {
        spawnFloatingText(defSide, '🧱 บล็อกสำเร็จ!', 'float-miss', defBox);
      }
    }

    // ★ ปรับลดหลอด HP / SP / Shield / Gauge ใน DOM ณ จังหวะเกิดเอฟเฟกต์การโจมตีพอดีเป๊ะ ★
    if (ev.snapshot) {
      currentSnap = ev.snapshot;
      applySnapshotBarsToDOM(currentSnap);
    }
    appendCombatLog(ev);

    // หน่วงเวลาให้อ่านตัวเลขดาเมจและเห็นผลกระทบ
    await delay(450 / speedDiv);

    // ------------------------------------------------------------------------
    // จังหวะที่ 2.5: Buff / Debuff Action (แยกจังหวะให้เห็นบัพ/ดีบัพชัดเจน 1 วินาทีตามคำสั่ง Game Director)
    // ------------------------------------------------------------------------
    if (hasBuffOrDebuff) {
      // เอฟเฟกต์การฮีล / โล่ / SP ฝั่งผู้ใช้
      if (ev.healed > 0) {
        spawnFloatingText(attSide, `💚 +${ev.healed} HP`, 'float-heal', attBox);
        if (attBox) {
          triggerHealGlow(attBox, 750 / speedDiv);
          triggerBuffWave(attBox, 750 / speedDiv);
        }
      }
      if (ev.shieldGained > 0) {
        spawnFloatingText(attSide, `🛡️ +${ev.shieldGained} โล่`, 'float-shield', attBox);
        if (attBox) {
          triggerBuffWave(attBox, 750 / speedDiv);
          triggerStatusCCOverlay(attBox, 'shield', 900 / speedDiv);
        }
      }
      if (ev.spChanged && ev.spChanged > 0) {
        spawnFloatingText(attSide, `💧 +${ev.spChanged} SP`, 'float-shield', attBox);
        if (attBox) {
          triggerBuffWave(attBox, 750 / speedDiv);
        }
      }

      // แสดงบัพเชิงบวกและดีบัพเชิงลบ
      for (const effText of ev.appliedEffects) {
        if (effText.includes('Ability')) {
          spawnFloatingText(attSide, `✨ ${effText}`, 'float-ability', attBox);
          if (attBox) triggerBuffWave(attBox, 750 / speedDiv);
        } else if (effText.includes('Energy Coat:')) {
          spawnFloatingText(defSide, `🛡️⚡ ${effText}`, 'float-shield', defBox);
          if (defBox) triggerBuffWave(defBox, 750 / speedDiv);
        } else if (effText.includes('ตัด SP')) {
          spawnFloatingText(defSide, `💧 ${effText}`, 'float-status-debuff', defBox);
          if (defBox) triggerDebuffWave(defBox, 750 / speedDiv);
        } else if (
          effText.startsWith('buff_') ||
          effText === 'shield' ||
          effText === 'regen' ||
          ['counter_stance', 'yata_mirror', 'shadow_clone', 'fire_skin', 'ice_skin', 'berserk', 'energy_coat', 'golden_bell_shield', 'elemental_ward', 'iron_body', 'iron_fortress'].includes(effText)
        ) {
          const b = formatStatusEffectBadge({ type: effText as ActiveEffect['type'], duration: 1 });
          spawnFloatingText(attSide, `${b.icon} ${b.name}`, 'float-status-buff', attBox);
          if (attBox) triggerBuffWave(attBox, 750 / speedDiv);
        } else if (
          effText.startsWith('debuff_') ||
          effText === 'vulnerable' ||
          ['burn', 'poison', 'bleed', 'stun', 'freeze', 'sleep', 'confuse', 'confusion', 'silence', 'blind', 'petrify', 'stone_curse', 'taunt', 'paralysis'].includes(effText)
        ) {
          const d = formatStatusEffectBadge({ type: effText as ActiveEffect['type'], duration: 1 });
          spawnFloatingText(defSide, `${d.icon} ติด${d.name}!`, 'float-status-debuff', defBox);
          if (defBox) {
            triggerDebuffWave(defBox, 750 / speedDiv);
            triggerStatusCCOverlay(defBox, effText, 900 / speedDiv);
          }
        }
      }

      // ดีเลย์ 1,000ms เพื่อให้ผู้เล่นได้สังเกตเห็นบัพและดีบัพอย่างชัดเจน ไม่ทับซ้อนกัน!
      await delay(1000 / speedDiv);
    }

    // ------------------------------------------------------------------------
    // จังหวะที่ 3: Impact Recovery & Recoil (ดึงตัวละครกลับ + ดีเลย์ 1 วินาทีเพื่อผลัดเทิร์น)
    // ------------------------------------------------------------------------
    attBox?.classList.remove('lunge-right', 'lunge-left');
    defBox?.classList.remove('hit-flash');
    updateArenaUI();

    // ดีเลย์ผลัดเทิร์น 1 วินาที (1,000ms) ก่อนที่อีกฝั่งจะเริ่มโจมตี
    await delay(1000 / speedDiv);

  } else if (ev.actionType === 'status') {
    if (ev.actionName === 'สับสน' || ev.actionName.includes('สับสน')) {
      attBox?.classList.remove('hit-flash');
      void attBox?.offsetWidth;
      attBox?.classList.add('hit-flash');
      spawnFloatingText(attSide, `🌀 สับสน! -${ev.damage}`, 'float-crit', attBox);
      if (attBox) {
        triggerStatusCCOverlay(attBox, 'confuse', 900 / speedDiv);
        triggerDebuffWave(attBox, 750 / speedDiv);
      }
    } else if (ev.damage > 0) {
      attBox?.classList.remove('hit-flash');
      void attBox?.offsetWidth;
      attBox?.classList.add('hit-flash');
      spawnFloatingText(attSide, `🔥 -${ev.damage} (${ev.actionName})`, 'float-status-debuff', attBox);
      if (attBox) {
        if (ev.actionName.includes('เผาไหม้') || ev.actionName.includes('เพลิง')) {
          triggerStatusCCOverlay(attBox, 'burn', 900 / speedDiv);
        } else if (ev.actionName.includes('พิษ')) {
          triggerStatusCCOverlay(attBox, 'poison', 900 / speedDiv);
        } else if (ev.actionName.includes('เลือด')) {
          triggerStatusCCOverlay(attBox, 'bleed', 900 / speedDiv);
        }
        triggerDebuffWave(attBox, 750 / speedDiv);
      }
    }
    if (ev.snapshot) {
      currentSnap = ev.snapshot;
      applySnapshotBarsToDOM(currentSnap);
    }
    appendCombatLog(ev);

    // ดีเลย์ 1,000ms เพื่อให้เห็นดาเมจสถานะอย่างชัดเจน
    await delay(1000 / speedDiv);
    attBox?.classList.remove('hit-flash');
    updateArenaUI();
    await delay(250 / speedDiv);

  } else if (ev.actionType === 'skip') {
    spawnFloatingText(attSide, `💫 ข้ามเทิร์น (${ev.actionName})`, 'float-miss', attBox);
    if (attBox) {
      if (ev.actionName.includes('แช่แข็ง')) {
        triggerStatusCCOverlay(attBox, 'freeze', 900 / speedDiv);
      } else if (ev.actionName.includes('มึนงง') || ev.actionName.includes('สตั้น')) {
        triggerStatusCCOverlay(attBox, 'stun', 900 / speedDiv);
      } else if (ev.actionName.includes('หลับ')) {
        triggerStatusCCOverlay(attBox, 'sleep', 900 / speedDiv);
      } else if (ev.actionName.includes('กลายเป็นหิน') || ev.actionName.includes('หิน')) {
        triggerStatusCCOverlay(attBox, 'petrify', 900 / speedDiv);
      } else if (ev.actionName.includes('อัมพาต')) {
        triggerStatusCCOverlay(attBox, 'paralysis', 900 / speedDiv);
      }
      triggerDebuffWave(attBox, 750 / speedDiv);
    }
    if (ev.snapshot) {
      currentSnap = ev.snapshot;
    }
    appendCombatLog(ev);
    updateArenaUI();

    // ดีเลย์ 1,000ms ให้เห็นชัดว่าถูกข้ามเทิร์นจากสถานะใด
    await delay(1000 / speedDiv);

  } else if (ev.actionType === 'swap' || ev.actionType === 'ko_swap') {
    spawnFloatingText(attSide, `🔄 ${ev.targetName} เข้าสนาม!`, 'float-ability', attBox);
    if (attBox) {
      triggerBuffWave(attBox, 750 / speedDiv);
    }
    if (ev.snapshot) {
      currentSnap = ev.snapshot;
    }
    appendCombatLog(ev);
    updateArenaUI();
    await delay(1000 / speedDiv);

  } else if (ev.actionType === 'ability') {
    spawnFloatingText(attSide, `✨ ${ev.actionName}!`, 'float-ability', attBox);
    if (ev.actionName.includes('ระเบิด') || ev.actionName.includes('มหาประลัย')) {
      triggerHeavyCritShake(stage, 520 / speedDiv);
      if (attBox) triggerCastWindup(attBox, 'psychic', 600 / speedDiv);
      if (defBox) {
        defBox.classList.remove('hit-flash');
        void defBox.offsetWidth;
        defBox.classList.add('hit-flash');
        triggerDebuffWave(defBox, 750 / speedDiv);
      }
    } else {
      if (attBox) triggerBuffWave(attBox, 750 / speedDiv);
    }
    if (ev.healed > 0) {
      spawnFloatingText(attSide, `+${ev.healed} HP 💚`, 'float-heal', attBox);
      if (attBox) triggerHealGlow(attBox, 750 / speedDiv);
    }
    if (ev.shieldGained > 0) {
      spawnFloatingText(attSide, `+${ev.shieldGained} SHIELD 🛡️`, 'float-shield', attBox);
      if (attBox) triggerStatusCCOverlay(attBox, 'shield', 900 / speedDiv);
    }
    if (ev.snapshot) {
      currentSnap = ev.snapshot;
      applySnapshotBarsToDOM(currentSnap);
    }
    appendCombatLog(ev);
    updateArenaUI();
    await delay(1000 / speedDiv);
  }
}

async function executeAndAnimate2v2Round() {
  if (!teamSession || isAnimatingTurn || teamSession.winner) return;
  isAnimatingTurn = true;
  stopAutoPlay();

  const prevLogCount = teamSession.logs.length;
  teamSession.stepRound();
  const newEvents = teamSession.logs.slice(prevLogCount);

  for (const ev of newEvents) {
    await animateTurnEvent(ev);
  }

  currentSnap = teamSession.captureSnapshot();
  isAnimatingTurn = false;
  updateArenaUI();

  if (!teamSession.winner && state.isPlaying) {
    scheduleNextTick2v2();
  }
}

async function executeAndAnimateSingleTurn() {
  if (!session || isAnimatingTurn || session.winner) return;
  isAnimatingTurn = true;
  stopAutoPlay();

  const events = session.stepTurn();
  for (const ev of events) {
    await animateTurnEvent(ev);
  }

  currentSnap = session.captureSnapshot();
  isAnimatingTurn = false;
  updateArenaUI();

  if (!session.winner && state.isPlaying) {
    scheduleNextTick();
  } else if (session.winner && state.battleSource === 'campaign' && state.activeStageId) {
    const stageId = state.activeStageId;
    const result = campaignManager.resolveStageBattle(stageId, session);
    window.setTimeout(() => {
      const app = document.getElementById('app') || document.body;
      showStageResultModal(
        app,
        stageId,
        result,
        (nextStageId) => {
          startCampaignBattle(nextStageId);
        },
        () => {
          state.screen = 'core_loop';
          state.currentTab = 'campaign';
          state.activeStageId = null;
          renderApp();
        },
        (retryStageId) => {
          startCampaignBattle(retryStageId);
        }
      );
    }, 600);
  }
}

function stopAutoPlay() {
  if (autoPlayTimer !== null) {
    window.clearTimeout(autoPlayTimer);
    autoPlayTimer = null;
  }
}

function scheduleNextTick() {
  stopAutoPlay();
  if (state.mode === '2v2_grid') {
    scheduleNextTick2v2();
    return;
  }
  if (!session || session.winner || !state.isPlaying || isAnimatingTurn) return;

  // Check if we should pause to let player manually trigger Signature Skill
  if (
    !state.autoCastSig &&
    state.pauseOnSigReady &&
    !session.teamA.queuedSignature &&
    isPlayerSigReady()
  ) {
    state.isPlaying = false;
    state.waitingForManualSig = true;
    updateArenaUI();
    return;
  }

  const intervalMs = state.speed === 3 ? 120 : state.speed === 2 ? 250 : 400;
  autoPlayTimer = window.setTimeout(() => {
    void executeAndAnimateSingleTurn();
  }, intervalMs);
}

// Start application
renderApp();
