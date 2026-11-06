/**
 * Test Suite: MMORPG Battle UI State Architecture & Adapters (Phase 1)
 * ตรวจสอบสถาปัตยกรรมสถานะและการเชื่อมโยงข้อมูลของ MMORPG Battle Interface System
 */

import {
  battleViewState,
  createDefaultBattleViewState,
  setBattleTarget,
  setBattlePartyMember,
  setBattleLogTab,
  togglePartyPanelCollapse,
  toggleTargetPanelCollapse,
  toggleLogPanelCollapse,
  setBattleSpeed,
  toggleAutoBattle,
  toggleAutoCastSig,
  togglePauseOnSigReady,
  resetBattleViewState,
  adapt1v1BattleData,
  adapt2v2BattleData,
  computeTurnOrderTimeline,
  classifyTurnEvent,
  filterCombatLogs,
  renderBattleViewHtml,
  renderBattleTopHudHtml,
  renderTurnOrderTimelineHtml,
  getFighterAvatarEmoji,
  bindBattleTopHudEvents,
  renderPartyStatusPanelHtml,
  renderPartyMemberCardHtml,
  formatStatusEffectBadge,
  renderStatusEffectsListHtml,
  bindPartyStatusPanelEvents,
  getRoleIcon,
  renderBattleArenaHtml,
  renderArenaUnitHtml,
  render1v1ArenaHtml,
  render2v2GridArenaHtml,
  createFloatingTextHtml,
  bindBattleArenaEvents,
  getMatchupBadgeHtml,
  renderTargetInfoPanelHtml,
  renderCombatLogPanelHtml,
  bindTargetAndLogEvents,
  getSkillInfo,
  renderSkillSlotHtml,
  renderSkillHotbarHtml,
  renderSignatureCastButtonHtml,
  renderSwapHeroButtonHtml,
  renderBattleBottomHudHtml,
  bindBattleBottomHudEvents,
  resolveTargetElement,
  getCastAuraClassForElement,
  getCombatFxClassForStatus,
  triggerCastWindup,
  triggerBuffWave,
  triggerDebuffWave,
  triggerHealGlow,
  triggerShieldShatter,
  triggerHeavyCritShake,
  triggerStatusCCOverlay,
  type BattleFighterViewData,
  type BattleTopHudConfig,
  type FormattedStatusEffect,
  type BattleArenaConfig,
} from '../ui/battle_view';
import { BattleSession, createFighter } from '../engine/combat';
import { TeamBattleSession } from '../engine/team_combat';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`  ❌ LACK ASSERT: ${msg}`);
    throw new Error(`Assert failed: ${msg}`);
  }
  console.log(`  ✓ ${msg}`);
}

async function runBattleUIStateTests() {
  console.log('======================================================================');
  console.log('  ทดสอบสถาปัตยกรรมสถานะ Battle UI & MMORPG Interface (Phase 1)       ');
  console.log('======================================================================\n');

  // 【 1. ตรวจสอบสถานะเริ่มต้น (Initial State) 】
  console.log('【 1. ตรวจสอบสถานะเริ่มต้น (Initial State) 】');
  resetBattleViewState();
  assert(battleViewState.selectedTargetId === null, 'selectedTargetId เริ่มต้นคือ null');
  assert(battleViewState.selectedPartyMemberId === null, 'selectedPartyMemberId เริ่มต้นคือ null');
  assert(battleViewState.activeLogTab === 'battle', 'activeLogTab เริ่มต้นคือ battle');
  assert(battleViewState.isPartyPanelCollapsed === false, 'Party Panel ไม่ถูกพับเริ่มต้น');
  assert(battleViewState.isTargetPanelCollapsed === false, 'Target Panel ไม่ถูกพับเริ่มต้น');
  assert(battleViewState.isLogPanelCollapsed === false, 'Log Panel ไม่ถูกพับเริ่มต้น');
  assert(battleViewState.speed === 1, 'ความเร็วเริ่มต้นคือ 1x');
  assert(battleViewState.autoBattle === true, 'Auto Battle เปิดใช้งานเริ่มต้น');
  assert(battleViewState.autoCastSig === true, 'Auto-Cast ท่าไม้ตายเปิดใช้งานเริ่มต้น');
  console.log('  -> ผ่านการตรวจสอบสถานะเริ่มต้น\n');

  // 【 2. ตรวจสอบการเลือกเป้าหมายและสมาชิกปาร์ตี้ (Target & Member Selection) 】
  console.log('【 2. ตรวจสอบการเลือกเป้าหมายและสมาชิกปาร์ตี้ 】');
  setBattleTarget('void_thornvine');
  assert(battleViewState.selectedTargetId === 'void_thornvine', 'เลือกศัตรูเป้าหมายเป็น void_thornvine สำเร็จ');

  setBattlePartyMember('rooster');
  assert(battleViewState.selectedPartyMemberId === 'rooster', 'เลือกสมาชิกปาร์ตี้ rooster สำเร็จ');

  setBattleTarget(null);
  assert(battleViewState.selectedTargetId === null, 'ล้างเป้าหมายที่เลือกกลับเป็น null ได้ถูกต้อง');
  console.log('  -> ผ่านการตรวจสอบการเลือกเป้าหมายและสมาชิกปาร์ตี้\n');

  // 【 3. ตรวจสอบการสลับแท็บ Combat Log 】
  console.log('【 3. ตรวจสอบการสลับแท็บ Combat Log 】');
  setBattleLogTab('system');
  assert(battleViewState.activeLogTab === 'system', 'สลับแท็บเป็น system สำเร็จ');

  setBattleLogTab('loot');
  assert(battleViewState.activeLogTab === 'loot', 'สลับแท็บเป็น loot สำเร็จ');

  setBattleLogTab('battle');
  assert(battleViewState.activeLogTab === 'battle', 'สลับแท็บกลับเป็น battle สำเร็จ');
  console.log('  -> ผ่านการตรวจสอบการสลับแท็บ Combat Log\n');

  // 【 4. ตรวจสอบการพับ/ขยายแผงควบคุม (Collapse / Expand Toggles) 】
  console.log('【 4. ตรวจสอบการพับ/ขยายแผงควบคุม 】');
  togglePartyPanelCollapse(true);
  assert(battleViewState.isPartyPanelCollapsed === true, 'พับเก็บ Party Panel สำเร็จ');
  togglePartyPanelCollapse(false);
  assert(battleViewState.isPartyPanelCollapsed === false, 'ขยาย Party Panel สำเร็จ');

  toggleTargetPanelCollapse();
  assert(battleViewState.isTargetPanelCollapsed === true, 'สลับ toggle Target Panel เป็นพับเก็บสำเร็จ');

  toggleLogPanelCollapse(true);
  assert(battleViewState.isLogPanelCollapsed === true, 'พับเก็บ Log Panel สำเร็จ');
  console.log('  -> ผ่านการตรวจสอบการพับ/ขยายแผงควบคุม\n');

  // 【 5. ตรวจสอบการควบคุมความเร็วและระบบอัตโนมัติ (Speed & Auto Controls) 】
  console.log('【 5. ตรวจสอบการควบคุมความเร็วและระบบอัตโนมัติ 】');
  setBattleSpeed(2);
  assert(battleViewState.speed === 2, 'ปรับความเร็วเป็น 2x สำเร็จ');
  setBattleSpeed(3);
  assert(battleViewState.speed === 3, 'ปรับความเร็วเป็น 3x สำเร็จ');

  toggleAutoBattle(false);
  assert(battleViewState.autoBattle === false, 'ปิด Auto Battle สำเร็จ');

  toggleAutoCastSig(false);
  assert(battleViewState.autoCastSig === false, 'ปิด Auto-Cast ท่าไม้ตายสำเร็จ');

  togglePauseOnSigReady(true);
  assert(battleViewState.pauseOnSigReady === true, 'เปิดตั้งค่าหยุดถามเมื่อท่าไม้ตายพร้อมสำเร็จ');
  console.log('  -> ผ่านการตรวจสอบการควบคุมความเร็วและระบบอัตโนมัติ\n');

  // 【 6. ตรวจสอบการรีเซ็ตสถานะ View State 】
  console.log('【 6. ตรวจสอบการรีเซ็ตสถานะ View State 】');
  resetBattleViewState();
  assert(battleViewState.speed === 1, 'ความเร็วถูกรีเซ็ตเป็น 1x');
  assert(battleViewState.isPartyPanelCollapsed === false, 'สถานะการพับแผงถูกรีเซ็ตเรียบร้อย');
  assert(battleViewState.autoBattle === true, 'Auto Battle ถูกรีเซ็ตกลับเป็น true');
  console.log('  -> ผ่านการตรวจสอบการรีเซ็ตสถานะ\n');

  // 【 7. ตรวจสอบ Data Adapter สำหรับการต่อสู้ 1v1 (1v1 Tag Relay Adapter) 】
  console.log('【 7. ตรวจสอบ Data Adapter สำหรับการต่อสู้ 1v1 】');
  const session1v1 = new BattleSession(['rooster', 'cat'], ['buffalo', 'dog']);
  const snap1v1 = session1v1.captureSnapshot();
  const adapted1v1 = adapt1v1BattleData(session1v1, snap1v1.teamA.fighters[0]);

  assert(adapted1v1.party.length === 2, 'Party 1v1 มีสมาชิก 2 ตัว (ตัวหลัก + สำรอง)');
  assert(adapted1v1.enemies.length === 2, 'Enemies 1v1 มีศัตรู 2 ตัว (ตัวหลัก + สำรอง)');
  assert(adapted1v1.party[0].id === 'rooster', 'ตัวหลักของทีม A คือ rooster');
  assert(adapted1v1.party[0].isActive === true, 'ตัวหลักของทีม A อยู่ในสถานะ Active');
  assert(adapted1v1.party[1].id === 'cat', 'ตัวสำรองของทีม A คือ cat');
  assert(adapted1v1.party[1].isBackup === true, 'cat อยู่ในสถานะ isBackup = true');
  assert(adapted1v1.party[0].hp > 0, 'HP ของตัวหลักถูกต้อง');
  assert(adapted1v1.party[0].sp > 0, 'SP ของตัวหลักถูกต้อง');
  assert(typeof adapted1v1.party[0].signatureName === 'string', 'มีชื่อท่าไม้ตาย Signature ถูกต้อง');
  console.log('  -> ผ่านการตรวจสอบ Data Adapter 1v1\n');

  // 【 8. ตรวจสอบ Data Adapter สำหรับการต่อสู้ 2v2 (Tactical Grid Adapter) 】
  console.log('【 8. ตรวจสอบ Data Adapter สำหรับการต่อสู้ 2v2 】');
  const session2v2 = new TeamBattleSession(
    ['rooster', 'cat'],
    ['buffalo', 'dog'],
    {
      teamAPositions: [{ row: 'front', col: 1 }, { row: 'mid', col: 1 }],
      teamBPositions: [{ row: 'front', col: 1 }, { row: 'mid', col: 1 }],
    }
  );
  const adapted2v2 = adapt2v2BattleData(session2v2);

  assert(adapted2v2.party.length === 2, 'Party 2v2 มีสมาชิกครบ 2 ตัว');
  assert(adapted2v2.enemies.length === 2, 'Enemies 2v2 มีศัตรูครบ 2 ตัว');
  assert(adapted2v2.party[0].pos?.row === 'front', 'ตำแหน่ง rooster อยู่แนวหน้า (front)');
  assert(adapted2v2.party[1].pos?.row === 'mid', 'ตำแหน่ง cat อยู่แถวกลาง (mid)');
  assert(adapted2v2.party[0].roleAffinityActive === true, 'rooster (Striker แนวหน้า) ได้รับโบนัสตำแหน่ง');
  console.log('  -> ผ่านการตรวจสอบ Data Adapter 2v2\n');

  // 【 9. ตรวจสอบการคำนวณคิว Turn Order Timeline 】
  console.log('【 9. ตรวจสอบการคำนวณคิว Turn Order Timeline 】');
  const allLiving: BattleFighterViewData[] = [
    { ...adapted2v2.party[0], effectiveSpd: 70 },
    { ...adapted2v2.party[1], effectiveSpd: 110 },
    { ...adapted2v2.enemies[0], effectiveSpd: 45 },
    { ...adapted2v2.enemies[1], effectiveSpd: 95 },
  ];

  const timeline = computeTurnOrderTimeline(allLiving);
  assert(timeline.length === 4, 'Timeline มีนักสู้ครบทั้ง 4 ตัว');
  assert(timeline[0].id === 'cat', 'ลำดับที่ 1 คือ cat (SPD 110 เร็วสุด)');
  assert(timeline[1].id === 'dog', 'ลำดับที่ 2 คือ dog (SPD 95)');
  assert(timeline[2].id === 'rooster', 'ลำดับที่ 3 คือ rooster (SPD 70)');
  assert(timeline[3].id === 'buffalo', 'ลำดับที่ 4 คือ buffalo (SPD 45)');
  assert(timeline[0].isActiveTurn === true, 'นักสู้ลำดับที่ 1 ถูกทำเครื่องหมาย Active Turn');
  console.log('  -> ผ่านการตรวจสอบ Turn Order Timeline\n');

  // 【 10. ตรวจสอบการจัดหมวดหมู่และกรอง Combat Log 】
  console.log('【 10. ตรวจสอบการจัดหมวดหมู่และกรอง Combat Log 】');
  const sampleEvents = [
    { actionType: 'normal', message: 'ไก่ โจมตีสร้างดาเมจ 45' },
    { actionType: 'skill', message: 'แมว ร่ายสกิล ใบมีดลม ดาเมจ 78' },
    { actionType: 'swap', message: 'สลับตัว แมว เข้าสู่สนามรบ!' },
    { actionType: 'skip', message: 'ควาย ข้ามเทิร์น (ติดสตัน)' },
    { actionType: 'system', message: 'เริ่มรอบที่ 2' },
    { actionType: 'loot', message: 'ได้รับ 150 Gold และรางวัลไข่ธรรมดา' },
  ];

  assert(classifyTurnEvent(sampleEvents[0]) === 'battle', 'การโจมตีปกติถูกจัดเป็นหมวด battle');
  assert(classifyTurnEvent(sampleEvents[1]) === 'battle', 'การใช้สกิลถูกจัดเป็นหมวด battle');
  assert(classifyTurnEvent(sampleEvents[2]) === 'system', 'การสลับตัวถูกจัดเป็นหมวด system');
  assert(classifyTurnEvent(sampleEvents[3]) === 'system', 'การข้ามเทิร์นถูกจัดเป็นหมวด system');
  assert(classifyTurnEvent(sampleEvents[4]) === 'system', 'การขึ้นรอบใหม่ถูกจัดเป็นหมวด system');
  assert(classifyTurnEvent(sampleEvents[5]) === 'loot', 'การรับเหรียญรางวัลถูกจัดเป็นหมวด loot');

  const battleLogs = filterCombatLogs(sampleEvents, 'battle');
  assert(battleLogs.length === 2, 'กรองแท็บ battle ได้ 2 รายการ');

  const systemLogs = filterCombatLogs(sampleEvents, 'system');
  assert(systemLogs.length === 3, 'กรองแท็บ system ได้ 3 รายการ');

  const lootLogs = filterCombatLogs(sampleEvents, 'loot');
  assert(lootLogs.length === 1, 'กรองแท็บ loot ได้ 1 รายการ');
  console.log('  -> ผ่านการตรวจสอบการจัดหมวดหมู่ Combat Log\n');

  // 【 11. ตรวจสอบการเรนเดอร์โครงสร้าง Layout หลักทั้ง 5 พื้นที่ 】
  console.log('【 11. ตรวจสอบการเรนเดอร์โครงสร้าง Layout หลักทั้ง 5 พื้นที่ 】');
  const layoutHtml = renderBattleViewHtml(
    {
      stageTitle: 'ป่าฝนต้นกำเนิดวิญญาณ ด่าน 1-1',
      stageSubtitle: 'โหมด 1v1 Tag Relay',
      roundOrTurn: 1,
      party: adapted1v1.party,
      enemies: adapted1v1.enemies,
      logs: sampleEvents,
    },
    battleViewState
  );

  assert(layoutHtml.includes('class="mmorpg-battle-container'), 'มี Container หลัก mmorpg-battle-container');
  assert(layoutHtml.includes('class="battle-top-hud"'), 'มี Area 1: Top HUD');
  assert(layoutHtml.includes('class="turn-order-timeline-bar"'), 'มี Turn Order Timeline Bar');
  assert(layoutHtml.includes('class="party-status-panel'), 'มี Area 2: Party Status Panel');
  assert(layoutHtml.includes('class="battle-arena-stage"'), 'มี Area 3: Center Battle Arena');
  assert(!layoutHtml.includes('class="target-info-panel-box'), 'ตัดระบบเล็งศัตรู Area 4 ออกตามคำสั่ง Game Director');
  assert(layoutHtml.includes('class="combat-log-panel-box'), 'มี Area 5A: Combat Log Panel พร้อมแท็บ');
  assert(layoutHtml.includes('class="battle-bottom-hud"'), 'มี Area 5B: Bottom Skill Hotbar & Controls');
  assert(layoutHtml.includes('data-tab="battle"'), 'มีปุ่มแท็บต่อสู้ (Battle Tab)');
  assert(!layoutHtml.includes('data-tab="system"'), 'ปิดแท็บระบบออกตามคำสั่ง Game Director');
  assert(!layoutHtml.includes('data-tab="loot"'), 'ปิดแท็บรางวัลออกตามคำสั่ง Game Director');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์โครงสร้าง Layout หลักทั้ง 5 พื้นที่\n');

  // 【 12. ตรวจสอบการเรนเดอร์ Area 1: Top HUD (Phase 2) 】
  console.log('【 12. ตรวจสอบการเรนเดอร์ Area 1: Top HUD (Phase 2) 】');
  const hudConfig: BattleTopHudConfig = {
    stageTitle: 'วิหารสุริยันศักดิ์สิทธิ์ ด่าน 1-5',
    stageSubtitle: 'ห้องบอสเทพสุริยัน • Wave 2/3',
    stageTypeBadge: '👑 BOSS DUNGEON',
    roundOrTurn: 3,
    maxRoundsOrTurns: 10,
    wave: 2,
    maxWaves: 3,
    livingEnemies: 2,
    totalEnemies: 4,
    livingParty: 2,
    totalParty: 2,
    mode: '2v2_grid',
  };

  const topHudHtml = renderBattleTopHudHtml(hudConfig, battleViewState);
  assert(topHudHtml.includes('วิหารสุริยันศักดิ์สิทธิ์ ด่าน 1-5'), 'แสดงชื่อด่านถูกต้อง');
  assert(topHudHtml.includes('ห้องบอสเทพสุริยัน • Wave 2/3'), 'แสดงคำบรรยายด่านถูกต้อง');
  assert(topHudHtml.includes('👑 BOSS DUNGEON'), 'แสดงป้ายประเภทด่านถูกต้อง');
  assert(topHudHtml.includes('3/10'), 'แสดงรอบ/เทิร์นถูกต้อง');
  assert(topHudHtml.includes('2/3'), 'แสดงเวฟถูกต้อง');
  assert(topHudHtml.includes('2/4'), 'แสดงจำนวนศัตรูคงเหลือถูกต้อง');
  assert(topHudHtml.includes('2/2'), 'แสดงจำนวนสมาชิกปาร์ตี้ถูกต้อง');
  assert(topHudHtml.includes('data-speed="1"'), 'มีปุ่มสปีด 1x');
  assert(topHudHtml.includes('data-speed="2"'), 'มีปุ่มสปีด 2x');
  assert(topHudHtml.includes('data-speed="3"'), 'มีปุ่มสปีด 3x');
  assert(topHudHtml.includes('btn-hud-speed active" data-speed="1"'), 'สปีด 1x มีคลาส active เริ่มต้น');
  assert(topHudHtml.includes('id="btn-battle-play-pause"'), 'มีปุ่ม Play/Pause');
  assert(topHudHtml.includes('id="btn-battle-step"'), 'มีปุ่มก้าวเทิร์น Step');
  assert(topHudHtml.includes('id="btn-battle-settings"'), 'มีปุ่มตั้งค่า Settings');
  assert(topHudHtml.includes('id="btn-battle-retreat"'), 'มีปุ่มยอมแพ้ Retreat');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Area 1: Top HUD\n');

  // 【 13. ตรวจสอบการเรนเดอร์ Turn Order Timeline Ribbon (Phase 2) 】
  console.log('【 13. ตรวจสอบการเรนเดอร์ Turn Order Timeline Ribbon (Phase 2) 】');
  const fightersForTimeline = computeTurnOrderTimeline(adapted2v2.party.concat(adapted2v2.enemies), 'cat');
  const timelineHtml = renderTurnOrderTimelineHtml(fightersForTimeline, 'cat');

  assert(timelineHtml.includes('class="turn-order-timeline-bar"'), 'มีแถบไทม์ไลน์หลัก');
  assert(timelineHtml.includes('class="timeline-lead-box"'), 'มีกล่องหัวข้อไทม์ไลน์');
  assert(timelineHtml.includes('class="timeline-ribbon-track"'), 'มีรางเลื่อนไทม์ไลน์ Ribbon Track');
  assert(timelineHtml.includes('class="timeline-fighter-badge side-player'), 'มี Badge นักสู้ฝั่งเรา');
  assert(timelineHtml.includes('class="timeline-fighter-badge side-enemy'), 'มี Badge นักสู้ฝั่งศัตรู');
  assert(timelineHtml.includes('active-turn'), 'นักสู้ที่เป็นเทิร์นปัจจุบันถูกไฮไลต์ active-turn');
  assert(timelineHtml.includes('เทิร์นนี้'), 'แสดงป้ายเทิร์นนี้บนตัวที่แอคชัน');
  assert(timelineHtml.includes('⚡'), 'แสดงไอคอนความเร็ว SPD');
  assert(timelineHtml.includes('class="t-badge-hp-mini-bar"'), 'มีมินิบาร์ HP');
  assert(getFighterAvatarEmoji('rooster') === '🐓', 'ไอคอนไก่ชนถูกต้อง');
  assert(getFighterAvatarEmoji('cat') === '🐱', 'ไอคอนแมวถูกต้อง');
  assert(getFighterAvatarEmoji('void_thornvine') === '🥀', 'ไอคอนศัตรูมลทินหนามถูกต้อง');

  // ตรวจสอบกรณีไม่มีนักสู้ในคิว
  const emptyTimelineHtml = renderTurnOrderTimelineHtml([]);
  assert(emptyTimelineHtml.includes('timeline-empty-notice'), 'แสดงข้อความแจ้งเตือนเมื่อไม่มีนักสู้ในคิว');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Turn Order Timeline Ribbon\n');

  // 【 14. ตรวจสอบการผูกเหตุการณ์ Top HUD & Timeline (Event Binding) 】
  console.log('【 14. ตรวจสอบการผูกเหตุการณ์ Top HUD & Timeline (Event Binding) 】');
  const eventListeners: Record<string, Function[]> = {};
  const mockContainer: any = {
    querySelectorAll: (selector: string) => {
      if (selector === '.btn-hud-speed') {
        return [
          {
            dataset: { speed: '2' },
            classList: { add: () => {}, remove: () => {} },
            addEventListener: (_type: string, cb: Function) => {
              eventListeners['speed2'] = [cb];
            },
          },
        ];
      }
      if (selector === '.timeline-fighter-badge') {
        return [
          {
            dataset: { fighterId: 'void_thornvine', side: 'B' },
            addEventListener: (_type: string, cb: Function) => {
              eventListeners['badge_enemy'] = [cb];
            },
          },
          {
            dataset: { fighterId: 'rooster', side: 'A' },
            addEventListener: (_type: string, cb: Function) => {
              eventListeners['badge_party'] = [cb];
            },
          },
        ];
      }
      return [];
    },
    querySelector: (selector: string) => {
      return {
        textContent: '',
        classList: { toggle: () => {} },
        addEventListener: (_type: string, cb: Function) => {
          eventListeners[selector] = [cb];
        },
      };
    },
  };

  let speedChangedVal: number = 0;
  let playPauseToggled: boolean = false;
  let stepTurnClicked: boolean = false;
  let retreatClicked: boolean = false;
  let settingsClicked: boolean = false;
  let clickedFighterId: string = '';

  bindBattleTopHudEvents(mockContainer, {
    onSpeedChange: spd => { speedChangedVal = spd; },
    onPlayPauseToggle: () => { playPauseToggled = true; },
    onStepTurn: () => { stepTurnClicked = true; },
    onRetreat: () => { retreatClicked = true; },
    onOpenSettings: () => { settingsClicked = true; },
    onTimelineFighterClick: (fid, side) => { clickedFighterId = `${side}:${fid}`; },
  });

  // จำลองการคลิกปุ่มสปีด 2x
  eventListeners['speed2']?.[0]?.({ stopPropagation: () => {} });
  assert(speedChangedVal === 2, 'Event onSpeedChange ตอบสนองต่อการคลิกสปีด 2x');

  // จำลองการคลิก Play/Pause
  eventListeners['#btn-battle-play-pause']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(playPauseToggled), 'Event onPlayPauseToggle ตอบสนองต่อการกดปุ่ม');

  // จำลองการคลิก Step
  eventListeners['#btn-battle-step']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(stepTurnClicked), 'Event onStepTurn ตอบสนองต่อการกดปุ่ม');

  // จำลองการคลิก Retreat
  eventListeners['#btn-battle-retreat']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(retreatClicked), 'Event onRetreat ตอบสนองต่อการกดยอมแพ้');

  // จำลองการคลิก Settings
  eventListeners['#btn-battle-settings']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(settingsClicked), 'Event onOpenSettings ตอบสนองต่อการกดตั้งค่า');

  // จำลองการคลิก Badge ศัตรูในไทม์ไลน์
  eventListeners['badge_enemy']?.[0]?.();
  assert(clickedFighterId === 'B:void_thornvine', 'Event onTimelineFighterClick ส่ง id ศัตรูถูกต้อง');
  assert(battleViewState.selectedTargetId === null, 'คลิก Badge ศัตรูไม่ตั้ง selectedTargetId เพราะตัดระบบเล็งเป้าแล้ว');

  // จำลองการคลิก Badge เพื่อนร่วมทีมในไทม์ไลน์
  eventListeners['badge_party']?.[0]?.();
  assert(clickedFighterId === 'A:rooster', 'Event onTimelineFighterClick ส่ง id ฝ่ายเราถูกต้อง');
  assert(battleViewState.selectedPartyMemberId === 'rooster', 'คลิก Badge ฝ่ายเราเปลี่ยน selectedPartyMemberId อัตโนมัติ');
  console.log('  -> ผ่านการตรวจสอบการผูกเหตุการณ์ Top HUD & Timeline\n');

  // 【 15. ตรวจสอบการจัดรูปแบบสถานะผิดปกติและบัฟ/ดีบัฟ (Status Effect UI) 】
  console.log('【 15. ตรวจสอบการจัดรูปแบบสถานะผิดปกติและบัฟ/ดีบัฟ (Status Effect UI) 】');
  const burnEffect = formatStatusEffectBadge({ type: 'burn', duration: 2 });
  assert(burnEffect.name === 'เผาไหม้', 'สถานะเผาไหม้ชื่อถูกต้อง');
  assert(burnEffect.icon === '🔥', 'ไอคอนไฟไหม้ถูกต้อง');
  assert(burnEffect.isBuff === false, 'สถานะเผาไหม้เป็นดีบัฟ');
  assert(burnEffect.duration === 2, 'จำนวนเทิร์นคงเหลือเผาไหม้ถูกต้อง');

  const poisonEffect = formatStatusEffectBadge({ type: 'poison', duration: 3, stacks: 4 });
  assert(poisonEffect.name === 'พิษ', 'สถานะพิษชื่อถูกต้อง');
  assert(poisonEffect.stacks === 4, 'จำนวน stack พิษถูกต้อง (4 ชั้น)');
  assert(poisonEffect.isBuff === false, 'พิษเป็นดีบัฟ');

  const stunEffect = formatStatusEffectBadge({ type: 'stun', duration: 1 });
  assert(stunEffect.icon === '💫', 'ไอคอนมึนงงถูกต้อง');
  assert(stunEffect.isBuff === false, 'มึนงงเป็นดีบัฟ');

  const buffAtkEffect = formatStatusEffectBadge({ type: 'buff_atk', value: 0.25, duration: 3 });
  assert(buffAtkEffect.name === 'พลังโจมตี+', 'ชื่อบัฟ ATK+ ถูกต้อง');
  assert(buffAtkEffect.isBuff === true, 'บัฟ ATK เป็นบัฟ');
  assert(buffAtkEffect.text.includes('25%'), 'แสดงค่าตัวเลขบัฟ 25% ถูกต้อง');

  const shieldEffect = formatStatusEffectBadge({ type: 'shield', duration: 2 });
  assert(shieldEffect.isBuff === true, 'โล่ป้องกันเป็นบัฟ');
  assert(shieldEffect.icon === '🛡️', 'ไอคอนโล่ถูกต้อง');

  // ทดสอบ renderStatusEffectsListHtml
  const renderedEffectsHtml = renderStatusEffectsListHtml([
    { type: 'burn', duration: 2 },
    { type: 'buff_atk', value: 0.15, duration: 3 },
  ]);
  assert(renderedEffectsHtml.includes('status-effect-badge debuff'), 'มี badge ดีบัฟ');
  assert(renderedEffectsHtml.includes('status-effect-badge buff'), 'มี badge บัฟ');
  assert(renderedEffectsHtml.includes('2T'), 'แสดงระยะเวลา 2T ใน badge');

  const emptyEffectsHtml = renderStatusEffectsListHtml([]);
  assert(emptyEffectsHtml.includes('no-effects-txt'), 'แสดงข้อความเมื่อไม่มีสถานะผิดปกติ');
  console.log('  -> ผ่านการตรวจสอบการจัดรูปแบบสถานะผิดปกติและบัฟ/ดีบัฟ\n');

  // 【 16. ตรวจสอบการเรนเดอร์ Area 2: Party Status Panel & Member Cards 】
  console.log('【 16. ตรวจสอบการเรนเดอร์ Area 2: Party Status Panel & Member Cards 】');
  const testParty: BattleFighterViewData[] = [
    {
      id: 'rooster',
      name: 'ไก่ชนพนมรุ้ง',
      rarity: 'B',
      element: 'fire',
      role: 'Striker',
      archetype: 'ATK',
      level: 15,
      stars: 3,
      hp: 450,
      maxHp: 600,
      sp: 70,
      maxSp: 100,
      shield: 50,
      gauge: 100, // Sig Ready!
      maxGauge: 100,
      skillSlots: ['fire_s', 'fire_m1', 'martial_s', 'martial_m1'],
      signatureName: 'หมัดไก่เพลิงอัคคี',
      abilityName: 'เดือยทองคำ',
      abilityDescription: 'เพิ่มพลังโจมตี',
      effects: [{ type: 'buff_atk', value: 0.2, duration: 2 }],
      isKo: false,
      isActive: true,
      side: 'A',
      effectiveSpd: 75,
      roleAffinityActive: true,
      roleAffinityDesc: 'โบนัสดาเมจแนวหน้า +10%',
    },
    {
      id: 'cat',
      name: 'วิเชียรมาศ',
      rarity: 'A',
      element: 'wind',
      role: 'Assassin',
      archetype: 'SPD',
      level: 12,
      stars: 2,
      hp: 300,
      maxHp: 380,
      sp: 40,
      maxSp: 90,
      shield: 0,
      gauge: 45,
      maxGauge: 100,
      skillSlots: ['wind_s', 'wind_m1', 'martial_s', 'martial_m1'],
      signatureName: 'กรงเล็บวายุสังหาร',
      abilityName: 'ฝีเท้าแมวเก้าชีวิต',
      abilityDescription: 'เพิ่มความเร็ว',
      effects: [],
      isKo: false,
      isActive: false,
      isBackup: true,
      side: 'A',
      effectiveSpd: 110,
    },
    {
      id: 'buffalo',
      name: 'ควายเผือกโบราณ',
      rarity: 'B',
      element: 'earth',
      role: 'Tank',
      archetype: 'STA',
      level: 10,
      stars: 1,
      hp: 0,
      maxHp: 800,
      sp: 0,
      maxSp: 70,
      shield: 0,
      gauge: 0,
      maxGauge: 100,
      skillSlots: ['earth_s', 'earth_m1'],
      signatureName: 'เขาควายทลายศิลา',
      abilityName: 'หนังเหนียว',
      abilityDescription: 'ลดดาเมจ',
      effects: [],
      isKo: true,
      isActive: false,
      side: 'A',
      effectiveSpd: 40,
    },
  ];

  const partyPanelHtml = renderPartyStatusPanelHtml(testParty, battleViewState);
  assert(partyPanelHtml.includes('class="party-status-panel'), 'มี Container แผงปาร์ตี้');
  assert(partyPanelHtml.includes('ปาร์ตี้ (2/3)'), 'แสดงจำนวนสมาชิกที่รอดชีวิต 2/3 ถูกต้อง');
  assert(partyPanelHtml.includes('ไก่ชนพนมรุ้ง'), 'แสดงชื่อไก่ชนพนมรุ้ง');
  assert(partyPanelHtml.includes('วิเชียรมาศ'), 'แสดงชื่อวิเชียรมาศ');
  assert(partyPanelHtml.includes('ควายเผือกโบราณ'), 'แสดงชื่อควายเผือกโบราณ');
  assert(partyPanelHtml.includes('pill-active'), 'มีป้ายสถานะในสนาม (pill-active)');
  assert(partyPanelHtml.includes('pill-backup'), 'มีป้ายสถานะสำรอง (pill-backup)');
  assert(partyPanelHtml.includes('pill-ko'), 'มีป้ายสถานะสลบ (pill-ko)');
  assert(partyPanelHtml.includes('450</strong> / 600'), 'แสดงตัวเลข HP 450/600 ถูกต้อง');
  assert(partyPanelHtml.includes('+🛡️50'), 'แสดงตัวเลข Shield +50 ถูกต้อง');
  assert(partyPanelHtml.includes('70</strong> / 100'), 'แสดงตัวเลข SP 70/100 ถูกต้อง');
  assert(partyPanelHtml.includes('⭐ พร้อมปล่อยท่า!'), 'แสดงข้อความพร้อมปล่อยท่าไม้ตายเมื่อเกจเต็ม 100%');
  assert(partyPanelHtml.includes('sig-fill ready'), 'หลอดเกจไม้ตายมีคลาส ready เมื่อเกจเต็ม');
  assert(partyPanelHtml.includes('ยืนถูกตำแหน่ง (Striker)'), 'แสดงป้ายยืนถูกตำแหน่ง Role Affinity');
  assert(getRoleIcon('Striker') === '⚔️', 'ไอคอนคลาส Striker ถูกต้อง');
  assert(getRoleIcon('Tank') === '🛡️', 'ไอคอนคลาส Tank ถูกต้อง');
  assert(getRoleIcon('Assassin') === '⚡', 'ไอคอนคลาส Assassin ถูกต้อง');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Area 2: Party Status Panel & Member Cards\n');

  // 【 17. ตรวจสอบการผูกเหตุการณ์ Party Status Panel (Event Binding) 】
  console.log('【 17. ตรวจสอบการผูกเหตุการณ์ Party Status Panel (Event Binding) 】');
  const partyEventListeners: Record<string, Function[]> = {};
  const mockPartyContainer: any = {
    querySelector: (selector: string) => {
      return {
        textContent: '',
        classList: { toggle: () => {} },
        addEventListener: (_type: string, cb: Function) => {
          partyEventListeners[selector] = [cb];
        },
      };
    },
    querySelectorAll: (selector: string) => {
      if (selector === '.party-member-card') {
        return [
          {
            dataset: { fighterId: 'cat' },
            classList: { add: () => {}, remove: () => {} },
            addEventListener: (_type: string, cb: Function) => {
              partyEventListeners['card_cat'] = [cb];
            },
          },
        ];
      }
      return [];
    },
  };

  let selectedMemberId = '';
  let panelCollapseToggled: boolean = false;

  bindPartyStatusPanelEvents(mockPartyContainer, {
    onSelectMember: mid => { selectedMemberId = mid; },
    onToggleCollapse: isCol => { panelCollapseToggled = isCol; },
  });

  // จำลองการคลิกการ์ดสมาชิกแมว
  partyEventListeners['card_cat']?.[0]?.();
  assert(selectedMemberId === 'cat', 'Event onSelectMember ส่ง memberId cat ถูกต้อง');
  assert(battleViewState.selectedPartyMemberId === 'cat', 'อัปเดต selectedPartyMemberId เป็น cat สำเร็จ');

  // จำลองการกดปุ่มพับ/ขยายแผง
  partyEventListeners['#btn-toggle-party-panel']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(panelCollapseToggled), 'Event onToggleCollapse ตอบสนองต่อการคลิก');
  assert(battleViewState.isPartyPanelCollapsed === true, 'สถานะ isPartyPanelCollapsed ถูกสลับเป็น true สำเร็จ');
  console.log('  -> ผ่านการตรวจสอบการผูกเหตุการณ์ Party Status Panel\n');

  // 【 18. ตรวจสอบการเรนเดอร์นักสู้ในสนามประลอง (Arena Unit Box) 】
  console.log('【 18. ตรวจสอบการเรนเดอร์นักสู้ในสนามประลอง (Arena Unit Box) 】');
  const sampleFighter: BattleFighterViewData = {
    id: 'rooster',
    name: 'ไก่ชน',
    rarity: 'B',
    element: 'fire',
    role: 'Striker',
    archetype: 'ATK',
    level: 10,
    stars: 2,
    hp: 400,
    maxHp: 500,
    sp: 50,
    maxSp: 100,
    shield: 60,
    gauge: 80,
    maxGauge: 100,
    skillSlots: [],
    signatureName: 'หมัดไก่เพลิง',
    abilityName: 'เดือยทองคำ',
    abilityDescription: '',
    effects: [
      { type: 'burn', duration: 2 },
      { type: 'buff_atk', value: 0.2, duration: 3 },
    ],
    isKo: false,
    isActive: true,
    side: 'A',
    effectiveSpd: 70,
    roleAffinityActive: true,
  };

  const unitBoxHtml = renderArenaUnitHtml(sampleFighter, {
    isActiveTurn: true,
    isTargeted: false,
  });

  assert(unitBoxHtml.includes('class="arena-unit-box side-player'), 'มี Container arena-unit-box ฝั่งผู้เล่น');
  assert(unitBoxHtml.includes('unit-overhead-effects'), 'มีพื้นที่แสดงไอคอนและสถานะด้านบนของตัวละคร');
  assert(unitBoxHtml.includes('overhead-effect-pill debuff'), 'แสดงป้ายสถานะดีบัฟด้านบนตัวละคร');
  assert(unitBoxHtml.includes('overhead-effect-pill buff'), 'แสดงป้ายสถานะบัฟด้านบนตัวละคร');
  assert(unitBoxHtml.includes('เผาไหม้'), 'แสดงชื่อสถานะเผาไหม้ด้านบนตัวละครชัดเจน');
  assert(unitBoxHtml.includes('unit-overhead-hp-bar'), 'มีหลอด overhead HP bar เหนือศีรษะ');
  assert(unitBoxHtml.includes('400</span>'), 'แสดงค่า HP 400 ลอยเหนือศีรษะ');
  assert(unitBoxHtml.includes('+🛡️60'), 'แสดงค่า Shield +60 ลอยเหนือศีรษะ');
  assert(unitBoxHtml.includes('active-turn'), 'มีคลาส active-turn เมื่อถึงเทิร์น');
  assert(!unitBoxHtml.includes('active-turn-beacon'), 'ตัดป้ายบีคอนเทิร์นนี้ที่ทับตัวละครออกตามคำสั่ง Game Director');
  assert(unitBoxHtml.includes('✨ ยืนถูกตำแหน่ง'), 'มีป้ายโบนัสยืนถูกตำแหน่ง');
  assert(!unitBoxHtml.includes('unit-role-label'), 'ตัดข้อความแสดงสายของตัวละครด้านล่างออกตามคำสั่ง Game Director');

  // ทดสอบกล่องเมื่อเป็นเป้าหมายศัตรู
  const enemyFighter: BattleFighterViewData = {
    ...sampleFighter,
    id: 'void_thornvine',
    name: 'มลทินหนาม',
    side: 'B',
  };
  const targetedEnemyHtml = renderArenaUnitHtml(enemyFighter, {
    isTargeted: true,
    isActiveTurn: false,
  });
  assert(!targetedEnemyHtml.includes('🎯 เล็งเป้า'), 'ไม่มีเป้าเล็ง target-reticle-crosshair ตามคำสั่งตัดระบบเล็งเป้า');
  assert(!targetedEnemyHtml.includes('unit-role-label'), 'ตัดข้อความแสดงสายของศัตรูด้านล่างออกตามคำสั่ง Game Director');

  // ทดสอบเมื่อสลบ (KO)
  const koFighter: BattleFighterViewData = { ...sampleFighter, hp: 0, isKo: true };
  const koUnitHtml = renderArenaUnitHtml(koFighter);
  assert(koUnitHtml.includes('is-ko'), 'มีคลาส is-ko เมื่อหมดสภาพ');
  assert(koUnitHtml.includes('💀'), 'มีตราสัญลักษณ์หัวกะโหลกเมื่อสลบ');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์นักสู้ในสนามประลอง (Arena Unit Box)\n');

  // 【 19. ตรวจสอบการเรนเดอร์ Area 3: Battle Arena ในโหมด 1v1 Tag Relay 】
  console.log('【 19. ตรวจสอบการเรนเดอร์ Area 3: Battle Arena ในโหมด 1v1 Tag Relay 】');
  const arena1v1Html = renderBattleArenaHtml(
    {
      mode: '1v1_tag',
      party: adapted1v1.party,
      enemies: adapted1v1.enemies,
      winner: null,
      activeFighterId: 'rooster',
    },
    battleViewState
  );

  assert(arena1v1Html.includes('class="battle-arena-stage"'), 'มี Container หลัก battle-arena-stage 1v1');
  assert(arena1v1Html.includes('data-mode="1v1_tag"'), 'มี Attribute data-mode 1v1');
  assert(arena1v1Html.includes('class="arena-1v1-stage-layout"'), 'มี Layout เฉพาะของ 1v1');
  assert(arena1v1Html.includes('class="arena-1v1-squad-zone side-player"'), 'มีโซนปาร์ตี้ฝั่งเรา 1v1');
  assert(arena1v1Html.includes('class="arena-1v1-squad-zone side-enemy"'), 'มีโซนศัตรู 1v1');
  assert(!arena1v1Html.includes('ปาร์ตี้ฝ่ายเรา'), 'ตัดข้อความ "ปาร์ตี้ฝ่ายเรา" ออกจากสนามตามคำสั่ง Game Director');
  assert(!arena1v1Html.includes('ทีมศัตรู'), 'ตัดข้อความ "ทีมศัตรู" ออกจากสนามตามคำสั่ง Game Director');
  assert(arena1v1Html.includes('clash-vs-emblem">VS</div>'), 'มีตราสัญลักษณ์ VS กึ่งกลางสนาม');
  assert(arena1v1Html.includes('1v1 TAG RELAY'), 'มีป้ายระบุโหมด 1v1 TAG RELAY');
  assert(!arena1v1Html.includes('backup-fighter-anchor'), 'ไม่แสดงสัตว์ตัวสำรองในสนามต่อสู้ 1v1 ตามคำสั่ง Game Director');

  // ทดสอบตัวเลือก showBackup หากต้องการเปิดใช้งาน
  const arena1v1WithBackupHtml = render1v1ArenaHtml(adapted1v1.party, adapted1v1.enemies, 'rooster', battleViewState, true);
  assert(arena1v1WithBackupHtml.includes('backup-fighter-anchor'), 'แสดงจุดจัดวางตัวสำรองเมื่อเปิดตัวเลือก showBackup');

  // ทดสอบเมื่อมีผู้ชนะ
  const arena1v1WinHtml = renderBattleArenaHtml(
    {
      mode: '1v1_tag',
      party: adapted1v1.party,
      enemies: adapted1v1.enemies,
      winner: 'A',
    },
    battleViewState
  );
  assert(arena1v1WinHtml.includes('winner-player'), 'มีแบนเนอร์แจ้งชัยชนะของผู้เล่น');
  assert(arena1v1WinHtml.includes('🏆 ชัยชนะเป็นของผู้เล่น!'), 'ข้อความชัยชนะถูกต้อง');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Area 3: Battle Arena 1v1\n');

  // 【 20. ตรวจสอบการเรนเดอร์ Area 3: Battle Arena ในโหมด 2v2 Tactical Grid 】
  console.log('【 20. ตรวจสอบการเรนเดอร์ Area 3: Battle Arena ในโหมด 2v2 Tactical Grid 】');
  const arena2v2Html = renderBattleArenaHtml(
    {
      mode: '2v2_grid',
      party: adapted2v2.party,
      enemies: adapted2v2.enemies,
      winner: null,
      activeFighterId: 'cat',
    },
    battleViewState
  );

  assert(arena2v2Html.includes('class="battle-arena-stage"'), 'มี Container หลัก battle-arena-stage 2v2');
  assert(arena2v2Html.includes('data-mode="2v2_grid"'), 'มี Attribute data-mode 2v2');
  assert(arena2v2Html.includes('class="arena-2v2-grid-layout"'), 'มี Layout กระดาน 2v2');
  assert(arena2v2Html.includes('tactical-grid-board side-player'), 'มีกระดานยุทธวิธี 3x3 ฝั่งเรา');
  assert(arena2v2Html.includes('tactical-grid-board side-enemy'), 'มีกระดานยุทธวิธี 3x3 ฝั่งศัตรู');
  assert(arena2v2Html.includes('แนวหน้า (Front) ➔'), 'แสดงหัวคอลัมน์แนวหน้าทีม A');
  assert(arena2v2Html.includes('⬅ แนวหน้า (Front)'), 'แสดงหัวคอลัมน์แนวหน้าทีม B');
  assert(arena2v2Html.includes('occupied-cell'), 'มีช่องที่มีตัวละครประจำการ');
  assert(arena2v2Html.includes('vacant-cell'), 'มีช่องว่างสำหรับจัดทัพ');
  assert(arena2v2Html.includes('2v2 GRID'), 'มีป้ายระบุโหมด 2v2 GRID');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Area 3: Battle Arena 2v2\n');

  // 【 21. ตรวจสอบ Floating Combat Text & การผูกเหตุการณ์ Arena Event Binding 】
  console.log('【 21. ตรวจสอบ Floating Combat Text & การผูกเหตุการณ์ Arena Event Binding 】');
  const dmgFloat = createFloatingTextHtml('-342', 'damage', 'B');
  assert(dmgFloat.includes('floating-combat-text float-damage side-B'), 'สร้าง Floating Text ดาเมจถูกต้อง');
  assert(dmgFloat.includes('-342'), 'แสดงตัวเลขดาเมจถูกต้อง');

  const critFloat = createFloatingTextHtml('CRIT! 💥 -750', 'crit', 'B');
  assert(critFloat.includes('float-crit'), 'สร้าง Floating Text คริติคอลถูกต้อง');

  const missFloat = createFloatingTextHtml('MISS! 💨', 'miss', 'A');
  assert(missFloat.includes('float-miss'), 'สร้าง Floating Text หลบหลีกถูกต้อง');

  // ทดสอบการผูกเหตุการณ์ bindBattleArenaEvents
  const arenaEventListeners: Record<string, Function[]> = {};
  const mockArenaContainer: any = {
    querySelectorAll: (selector: string) => {
      if (selector === '.arena-unit-box') {
        return [
          {
            dataset: { fighterId: 'void_thornvine', side: 'B' },
            classList: { add: () => {}, remove: () => {} },
            addEventListener: (_type: string, cb: Function) => {
              arenaEventListeners['box_enemy'] = [cb];
            },
          },
          {
            dataset: { fighterId: 'rooster', side: 'A' },
            classList: { add: () => {}, remove: () => {} },
            addEventListener: (_type: string, cb: Function) => {
              arenaEventListeners['box_player'] = [cb];
            },
          },
        ];
      }
      if (selector === '.arena-unit-box.side-enemy' || selector === '.arena-unit-box.side-player') {
        return [{ classList: { remove: () => {} } }];
      }
      return [];
    },
  };

  let targetedEnemyRes = '';
  let selectedPartyRes = '';

  bindBattleArenaEvents(mockArenaContainer, {
    onTargetEnemy: fid => { targetedEnemyRes = fid; },
    onSelectPartyFighter: fid => { selectedPartyRes = fid; },
  });

  // จำลองการคลิกกล่องศัตรูในสนาม
  arenaEventListeners['box_enemy']?.[0]?.();
  assert(targetedEnemyRes === 'void_thornvine', 'Event onTargetEnemy ตอบสนองถูกต้อง');
  assert(battleViewState.selectedTargetId === null, 'ไม่เซ็ต selectedTargetId เมื่อคลิกศัตรูในสนาม เพราะตัดระบบเล็งเป้าออกแล้ว');

  // จำลองการคลิกกล่องตัวละครฝ่ายเราในสนาม
  arenaEventListeners['box_player']?.[0]?.();
  assert(selectedPartyRes === 'rooster', 'Event onSelectPartyFighter ตอบสนองถูกต้อง');
  assert(battleViewState.selectedPartyMemberId === 'rooster', 'อัปเดต selectedPartyMemberId เมื่อคลิกฝ่ายเราในสนาม');
  console.log('  -> ผ่านการตรวจสอบ Floating Combat Text & การผูกเหตุการณ์ Arena\n');

  // 【 22. ตรวจสอบการคำนวณและแสดงผลการเปรียบเทียบธาตุ (Elemental Matchup Badge) 】
  console.log('【 22. ตรวจสอบการคำนวณและแสดงผลการเปรียบเทียบธาตุ (Elemental Matchup Badge) 】');
  const badgeAdv = getMatchupBadgeHtml('fire', 'plant');
  assert(badgeAdv.includes('matchup-advantage'), 'แสดงคลาส matchup-advantage เมื่อได้เปรียบธาตุ');
  assert(badgeAdv.includes('+30% ดาเมจ'), 'แสดงค่าโบนัสได้เปรียบธาตุ +30%');

  const badgeDis = getMatchupBadgeHtml('plant', 'fire');
  assert(badgeDis.includes('matchup-disadvantage'), 'แสดงคลาส matchup-disadvantage เมื่อเสียเปรียบธาตุ');
  assert(badgeDis.includes('-15% ดาเมจ'), 'แสดงค่าเสียเปรียบธาตุ -15%');

  const badgeNeu = getMatchupBadgeHtml('fire', 'fire');
  assert(badgeNeu.includes('matchup-neutral'), 'แสดงคลาส matchup-neutral เมื่อธาตุเสมอ');
  assert(badgeNeu.includes('สมดุล (1.0x)'), 'แสดงสถานะสมดุล');

  const badgeEmpty = getMatchupBadgeHtml(undefined, 'fire');
  assert(badgeEmpty === '', 'ส่งคืนสตริงว่างเมื่อไม่มีข้อมูลธาตุ');
  console.log('  -> ผ่านการตรวจสอบการคำนวณและแสดงผลการเปรียบเทียบธาตุ\n');

  // 【 23. ตรวจสอบการเรนเดอร์ Area 4: Target Information Panel 】
  console.log('【 23. ตรวจสอบการเรนเดอร์ Area 4: Target Information Panel 】');
  // กรณี 1: ไม่ได้เลือกเป้าหมาย (target = null)
  const emptyTargetHtml = renderTargetInfoPanelHtml(null, null, battleViewState);
  assert(emptyTargetHtml.includes('class="target-info-panel-box'), 'มีกรอบ Target Info Panel');
  assert(emptyTargetHtml.includes('class="target-empty-prompt"'), 'แสดงหน้าต่างว่างเมื่อไม่ได้เลือกเป้าหมาย');
  assert(emptyTargetHtml.includes('คลิกที่ศัตรูในสนามรบ'), 'มีข้อความแนะนำให้คลิกเป้าหมาย');

  // กรณี 2: เลือกเป้าหมายศัตรู
  const enemyTarget = adapted2v2.enemies[0];
  const attacker = adapted2v2.party[0];
  const filledTargetHtml = renderTargetInfoPanelHtml(enemyTarget, attacker, battleViewState);

  assert(filledTargetHtml.includes('class="target-card-body"'), 'มีเนื้อหาข้อมูลเป้าหมาย target-card-body');
  assert(filledTargetHtml.includes(enemyTarget.name), 'แสดงชื่อเป้าหมายถูกต้อง');
  assert(filledTargetHtml.includes('member-rarity-tag'), 'มีป้ายระดับ Rarity/Rank ของเป้าหมาย');
  assert(filledTargetHtml.includes('target-role-tag'), 'มีบทบาท Role ของเป้าหมาย');
  assert(filledTargetHtml.includes('target-matchup-row'), 'มีแถบเปรียบเทียบธาตุกับตัวเรา');
  assert(filledTargetHtml.includes('class="target-bars-col"'), 'มีแถบหลอดพลังชีวิตและ SP ของเป้าหมาย');
  assert(filledTargetHtml.includes('class="target-skills-preview"'), 'มีส่วนแสดงท่าไม้ตายของเป้าหมาย');
  assert(filledTargetHtml.includes(enemyTarget.signatureName), 'แสดงชื่อท่าไม้ตายของเป้าหมาย');
  assert(filledTargetHtml.includes('id="btn-clear-target"'), 'มีปุ่มปลดเป้าหมาย');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Area 4: Target Information Panel\n');

  // 【 24. ตรวจสอบการเรนเดอร์ Area 5A: Tabbed Combat Log 】
  console.log('【 24. ตรวจสอบการเรนเดอร์ Area 5A: Combat Log & สีข้อความตามคำสั่ง Game Director 】');
  const mockCombatLogs = [
    { type: 'skill', actorSide: 'A', actionType: 'normal', message: 'ไก่ โจมตีใส่ เถาวัลย์ทมิฬกลืนชีพ 120 ดาเมจ', turnOrRound: 1 },
    { type: 'skill', actorSide: 'A', actionType: 'signature', message: 'ไก่ ปลดปล่อยท่าไม้ตาย จะงอยเพลิงจู่โจม!', turnOrRound: 2, isCrit: true },
    { type: 'skill', actorSide: 'B', actionType: 'normal', message: 'เถาวัลย์ทมิฬกลืนชีพ โจมตีแต่ MISS! หลบหลีกได้', turnOrRound: 2, isMiss: true },
    { type: 'skill', actorSide: 'B', actionType: 'signature', message: 'เถาวัลย์ทมิฬกลืนชีพ ปลดปล่อยท่าไม้ตาย แส้ทมิฬสูบวิญญาณ!', turnOrRound: 3 },
    { type: 'system', message: 'เริ่มรอบการต่อสู้ที่ 1', turnOrRound: 1 },
    { type: 'loot', message: 'ได้รับผลึกหินธาตุไฟ x2', turnOrRound: 2 },
  ];

  // เรนเดอร์แท็บ battle (default)
  battleViewState.activeLogTab = 'battle';
  const battleLogHtml = renderCombatLogPanelHtml(mockCombatLogs, battleViewState);
  assert(battleLogHtml.includes('⚔️ ต่อสู้ (5)'), 'แสดงจำนวนข้อความรวมต่อสู้และระบบถูกต้อง (5 รายการ)');
  assert(!battleLogHtml.includes('⚙️ ระบบ'), 'ปิดแท็บระบบออกตามคำสั่ง Game Director');
  assert(!battleLogHtml.includes('🎁 รางวัล'), 'ปิดแท็บรางวัลออกตามคำสั่ง Game Director');
  assert(battleLogHtml.includes('log-side-player'), 'มีคลาส log-side-player สีฟ้าสำหรับแอคชั่นฝ่ายเรา');
  assert(battleLogHtml.includes('log-side-enemy'), 'มีคลาส log-side-enemy สีส้มสำหรับแอคชั่นฝ่ายศัตรู');
  assert(battleLogHtml.includes('log-side-player-sig'), 'มีคลาส log-side-player-sig สีทองสำหรับท่าไม้ตายฝ่ายเรา');
  assert(battleLogHtml.includes('log-side-enemy-sig'), 'มีคลาส log-side-enemy-sig สีม่วงอ่อนสำหรับท่าไม้ตายฝ่ายศัตรู');
  assert(battleLogHtml.includes('log-crit'), 'มีคลาส log-crit ไฮไลต์คริติคอล');
  assert(battleLogHtml.includes('log-miss'), 'มีคลาส log-miss ไฮไลต์หลบหลีก');
  assert(battleLogHtml.includes('id="btn-clear-log"'), 'มีปุ่มล้างบันทึก');
  assert(battleLogHtml.includes('id="btn-toggle-log-panel"'), 'มีปุ่มพับขยายแผงบันทึก');

  // ทดสอบเมื่อไม่มีประวัติในแท็บ
  const emptyTabLogHtml = renderCombatLogPanelHtml([], battleViewState);
  assert(emptyTabLogHtml.includes('log-empty-notice'), 'แสดงข้อความแจ้งเตือนเมื่อไม่มีประวัติ');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Area 5A: Combat Log\n');

  // 【 25. ตรวจสอบการผูกเหตุการณ์ Target Info Panel & Combat Log (Event Binding) 】
  console.log('【 25. ตรวจสอบการผูกเหตุการณ์ Target Info Panel & Combat Log (Event Binding) 】');
  const targetAndLogEvents: Record<string, Function[]> = {};
  const mockTargetLogContainer: any = {
    querySelector: (selector: string) => {
      return {
        classList: { toggle: () => {} },
        textContent: '',
        addEventListener: (_type: string, cb: Function) => {
          targetAndLogEvents[selector] = [cb];
        },
      };
    },
    querySelectorAll: (selector: string) => {
      if (selector === '.btn-log-tab') {
        return [
          {
            dataset: { tab: 'system' },
            classList: { add: () => {}, remove: () => {} },
            addEventListener: (_type: string, cb: Function) => {
              targetAndLogEvents['tab_system'] = [cb];
            },
          },
          {
            dataset: { tab: 'loot' },
            classList: { add: () => {}, remove: () => {} },
            addEventListener: (_type: string, cb: Function) => {
              targetAndLogEvents['tab_loot'] = [cb];
            },
          },
        ];
      }
      return [];
    },
  };

  let targetPanelToggled = false;
  let clearedTargetCalled = false;
  let switchedTabName = '';
  let clearedLogsCalled = false;
  let logPanelToggled = false;

  bindTargetAndLogEvents(mockTargetLogContainer, {
    onToggleTargetPanel: isCollapsed => { targetPanelToggled = isCollapsed; },
    onClearTarget: () => { clearedTargetCalled = true; },
    onSwitchLogTab: tab => { switchedTabName = tab; },
    onClearLogs: () => { clearedLogsCalled = true; },
    onToggleLogPanel: isCollapsed => { logPanelToggled = isCollapsed; },
  });

  // 1. จำลองการคลิกพับขยาย Target Panel
  targetAndLogEvents['#btn-toggle-target-panel']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(targetPanelToggled) === battleViewState.isTargetPanelCollapsed, 'ปุ่มพับขยาย Target Panel สลับสถานะถูกต้อง');

  // 2. จำลองการคลิกปลดเป้าหมาย
  battleViewState.selectedTargetId = 'void_thornvine';
  targetAndLogEvents['#btn-clear-target']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(clearedTargetCalled), 'ปุ่มปลดเป้าหมายเรียก onClearTarget callback');
  assert(battleViewState.selectedTargetId === null, 'ปลดเป้าหมายใน battleViewState เรียบร้อย');

  // 3. จำลองการสลับแท็บ Log
  targetAndLogEvents['tab_system']?.[0]?.({ stopPropagation: () => {} });
  assert(switchedTabName === 'system', 'สลับแท็บเป็น system ผ่าน onSwitchLogTab callback');
  assert((battleViewState.activeLogTab as string) === 'system', 'อัปเดต activeLogTab ใน battleViewState');

  // 4. จำลองการคลิกล้าง Log
  targetAndLogEvents['#btn-clear-log']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(clearedLogsCalled), 'ปุ่มล้าง Log เรียก onClearLogs callback');

  // 5. จำลองการคลิกพับขยาย Log Panel
  targetAndLogEvents['#btn-toggle-log-panel']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(logPanelToggled) === battleViewState.isLogPanelCollapsed, 'ปุ่มพับขยาย Log Panel สลับสถานะถูกต้อง');
  console.log('  -> ผ่านการตรวจสอบการผูกเหตุการณ์ Target Info Panel & Combat Log\n');

  // 【 26. ตรวจสอบข้อมูลสกิลและการเรนเดอร์ช่องสกิล (Skill Slot & SP Cost Validation) 】
  console.log('【 26. ตรวจสอบข้อมูลสกิลและการเรนเดอร์ช่องสกิล (Skill Slot & SP Cost Validation) 】');
  const fireSSkill = getSkillInfo('fire_s');
  assert(Boolean(fireSSkill), 'พบข้อมูลสกิล fire_s');
  assert(fireSSkill?.name === 'ลูกไฟ', 'ชื่อสกิลลูกไฟถูกต้อง');
  assert(fireSSkill?.tier === 'S', 'Tier S ถูกต้อง');
  assert(fireSSkill?.spCost === 20, 'ค่าร่าย Tier S คือ 20 SP');

  const unknownSkill = getSkillInfo('non_existent_skill');
  assert(unknownSkill === null, 'ส่งคืน null เมื่อไม่พบสกิล');

  const activeHeroWithSp: BattleFighterViewData = {
    ...adapted2v2.party[0],
    sp: 50,
    maxSp: 100,
    isKo: false,
  };

  const slotUsableHtml = renderSkillSlotHtml('fire_s', 0, activeHeroWithSp);
  assert(slotUsableHtml.includes('class="skill-hotbar-slot tier-s is-usable"'), 'ช่องสกิลที่มี SP พอมีคลาส is-usable');
  assert(slotUsableHtml.includes('[1]'), 'แสดงคีย์ลัด [1] ประจำช่อง');
  assert(slotUsableHtml.includes('💙 20 SP'), 'แสดงค่าร่าย 20 SP');
  assert(slotUsableHtml.includes('slot-ready-pill'), 'มีป้ายแสดงสถานะพร้อม');

  const activeHeroLowSp: BattleFighterViewData = {
    ...activeHeroWithSp,
    sp: 10, // SP น้อยกว่า 20
  };
  const slotLackingHtml = renderSkillSlotHtml('fire_s', 1, activeHeroLowSp);
  assert(slotLackingHtml.includes('insufficient-sp'), 'ช่องสกิลที่ SP ไม่พอมีคลาส insufficient-sp');
  assert(slotLackingHtml.includes('slot-lacking-pill'), 'มีป้ายแสดงสถานะ SP ไม่พอ');

  const emptySlotHtml = renderSkillSlotHtml('', 2, activeHeroWithSp);
  assert(emptySlotHtml.includes('is-empty'), 'ช่องสกิลที่ไม่ได้ติดตั้งมีคลาส is-empty');
  assert(emptySlotHtml.includes('ช่องว่าง'), 'มีข้อความระบุช่องว่าง');
  console.log('  -> ผ่านการตรวจสอบข้อมูลสกิลและการเรนเดอร์ช่องสกิล\n');

  // 【 27. ตรวจสอบการเรนเดอร์ Skill Hotbar รวม 4 ช่อง 】
  console.log('【 27. ตรวจสอบการเรนเดอร์ Skill Hotbar รวม 4 ช่อง 】');
  const hotbarHtml = renderSkillHotbarHtml(activeHeroWithSp);
  assert(hotbarHtml.includes('class="skill-hotbar-grid"'), 'มี Container ตาราง skill-hotbar-grid');
  assert(hotbarHtml.includes('data-slot-index="0"'), 'มีช่อง Slot 0');
  assert(hotbarHtml.includes('data-slot-index="1"'), 'มีช่อง Slot 1');
  assert(hotbarHtml.includes('data-slot-index="2"'), 'มีช่อง Slot 2');
  assert(hotbarHtml.includes('data-slot-index="3"'), 'มีช่อง Slot 3');

  const emptyHotbarHtml = renderSkillHotbarHtml(null);
  assert(emptyHotbarHtml.includes('ช่องว่าง'), 'แสดงช่องว่างเมื่อไม่มีฮีโร่ที่พร้อมรบ');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Skill Hotbar รวม 4 ช่อง\n');

  // 【 28. ตรวจสอบการเรนเดอร์ปุ่มท่าไม้ตาย (Signature Cast Button) 】
  console.log('【 28. ตรวจสอบการเรนเดอร์ปุ่มท่าไม้ตาย (Signature Cast Button) 】');
  const heroReadySig: BattleFighterViewData = {
    ...activeHeroWithSp,
    gauge: 100,
    maxGauge: 100,
    signatureName: 'หมัดไก่เพลิงอัคคี',
    isKo: false,
  };
  const sigReadyHtml = renderSignatureCastButtonHtml(heroReadySig);
  assert(sigReadyHtml.includes('is-ready'), 'มีคลาส is-ready เมื่อเกจไม้ตายเต็ม 100%');
  assert(sigReadyHtml.includes('หมัดไก่เพลิงอัคคี'), 'แสดงชื่อท่าไม้ตายถูกต้อง');
  assert(sigReadyHtml.includes('[Space]'), 'แสดงคีย์ลัด [Space] สำหรับท่าไม้ตาย');
  assert(sigReadyHtml.includes('100/100 (100%)'), 'แสดงตัวเลขเกจ 100%');
  assert(!sigReadyHtml.includes('disabled'), 'ปุ่มไม่ติดสถานะ disabled เมื่อเกจพร้อม');

  const heroChargingSig: BattleFighterViewData = {
    ...activeHeroWithSp,
    gauge: 45,
    maxGauge: 100,
    isKo: false,
  };
  const sigChargingHtml = renderSignatureCastButtonHtml(heroChargingSig);
  assert(sigChargingHtml.includes('charging'), 'มีคลาส charging เมื่อเกจยังไม่เต็ม');
  assert(sigChargingHtml.includes('disabled'), 'ปุ่มติดสถานะ disabled เมื่อเกจยังไม่เต็ม');
  assert(sigChargingHtml.includes('45/100 (45%)'), 'แสดงตัวเลขเกจ 45%');
  assert(!sigChargingHtml.includes('[Space]'), 'ไม่แสดงคีย์ลัด [Space] เมื่อเกจยังไม่เต็ม');

  const heroKoSig: BattleFighterViewData = {
    ...heroReadySig,
    isKo: true,
  };
  const sigKoHtml = renderSignatureCastButtonHtml(heroKoSig);
  assert(sigKoHtml.includes('is-ko'), 'มีคลาส is-ko เมื่อหมดสภาพ');
  assert(sigKoHtml.includes('disabled'), 'ปุ่ม disabled เมื่อตัวละครสลบ');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ปุ่มท่าไม้ตาย\n');

  // 【 29. ตรวจสอบการเรนเดอร์ Area 5B: Bottom Skill Hotbar & Controls และปุ่มสลับตัว 1v1 】
  console.log('【 29. ตรวจสอบการเรนเดอร์ Area 5B: Bottom Skill Hotbar & Controls และปุ่มสลับตัว 1v1 】');
  const backupHero: BattleFighterViewData = {
    ...adapted2v2.party[1],
    isKo: false,
  };

  // โหมด 1v1 พร้อมสลับตัว
  const swapReadyHtml = renderSwapHeroButtonHtml(backupHero, '1v1_tag', 0, null);
  assert(swapReadyHtml.includes('btn-manual-swap-hero is-ready'), 'ปุ่มสลับตัวมีคลาส is-ready เมื่อพร้อมสลับ');
  assert(swapReadyHtml.includes(backupHero.name), 'แสดงชื่อตัวสำรองที่จะสลับ');

  // โหมด 1v1 ติดคูลดาวน์สลับตัว
  const swapCdHtml = renderSwapHeroButtonHtml(backupHero, '1v1_tag', 2, null);
  assert(swapCdHtml.includes('disabled'), 'ปุ่มสลับตัวติด disabled เมื่อติดคูลดาวน์');
  assert(swapCdHtml.includes('(2T)'), 'แสดงจำนวนเทิร์นคูลดาวน์คงเหลือ (2T)');

  // โหมด 2v2 Grid (ไม่ใช้ปุ่มสลับตัวแบบ 1v1)
  const swap2v2Html = renderSwapHeroButtonHtml(backupHero, '2v2_grid');
  assert(swap2v2Html === '', 'โหมด 2v2 ส่งคืนสตริงว่างสำหรับปุ่มสลับตัว 1v1');

  // ตรวจสอบโครงสร้างเต็มของ Bottom HUD
  const bottomHudHtml = renderBattleBottomHudHtml(
    {
      activeHero: heroReadySig,
      backupHero,
      mode: '1v1_tag',
      swapCooldown: 0,
      winner: null,
    },
    battleViewState
  );
  assert(bottomHudHtml.includes('class="battle-bottom-hud"'), 'มีแท็กแม่ battle-bottom-hud');
  assert(bottomHudHtml.includes('class="bottom-hud-main-bar"'), 'มีแถบหลัก bottom-hud-main-bar');
  assert(bottomHudHtml.includes('class="signature-slot-container"'), 'มีกล่องใส่ปุ่มไม้ตาย');
  assert(bottomHudHtml.includes('id="chk-auto-battle"'), 'มีเช็กบ็อกซ์ Auto Battle');
  assert(bottomHudHtml.includes('id="chk-auto-cast-sig"'), 'มีเช็กบ็อกซ์ Auto-Cast ท่าไม้ตาย');
  assert(bottomHudHtml.includes('id="chk-pause-on-sig"'), 'มีเช็กบ็อกซ์ Pause on Sig Ready');
  console.log('  -> ผ่านการตรวจสอบการเรนเดอร์ Area 5B: Bottom Skill Hotbar & Controls\n');

  // 【 30. ตรวจสอบการผูกเหตุการณ์ Area 5B (Event Binding) 】
  console.log('【 30. ตรวจสอบการผูกเหตุการณ์ Area 5B (Event Binding) 】');
  const bottomHudEvents: Record<string, Function[]> = {};
  const mockBottomContainer: any = {
    querySelector: (selector: string) => {
      if (selector === '#chk-auto-battle') {
        return {
          checked: false,
          addEventListener: (_type: string, cb: Function) => {
            bottomHudEvents['chk_auto_battle'] = [cb];
          },
        };
      }
      if (selector === '#chk-auto-cast-sig') {
        return {
          checked: false,
          addEventListener: (_type: string, cb: Function) => {
            bottomHudEvents['chk_auto_cast_sig'] = [cb];
          },
        };
      }
      if (selector === '#chk-pause-on-sig') {
        return {
          checked: true,
          addEventListener: (_type: string, cb: Function) => {
            bottomHudEvents['chk_pause_on_sig'] = [cb];
          },
        };
      }
      return {
        addEventListener: (_type: string, cb: Function) => {
          bottomHudEvents[selector] = [cb];
        },
      };
    },
    querySelectorAll: (selector: string) => {
      if (selector === '.skill-hotbar-slot') {
        return [
          {
            dataset: { skillId: 'fire_s', slotIndex: '0' },
            addEventListener: (_type: string, cb: Function) => {
              bottomHudEvents['slot_0'] = [cb];
            },
          },
        ];
      }
      return [];
    },
  };

  let clickedSkillId = '';
  let clickedSlotIdx = -1;
  let castSigCalled = false;
  let swapHeroCalled = false;
  let toggledAutoVal: boolean | null = null;
  let toggledSigVal: boolean | null = null;
  let toggledPauseVal: boolean | null = null;

  bindBattleBottomHudEvents(mockBottomContainer, {
    onSkillSlotClick: (id, idx) => {
      clickedSkillId = id;
      clickedSlotIdx = idx;
    },
    onCastSignature: () => {
      castSigCalled = true;
    },
    onSwapHero: () => {
      swapHeroCalled = true;
    },
    onToggleAutoBattle: enabled => {
      toggledAutoVal = enabled;
    },
    onToggleAutoCastSig: enabled => {
      toggledSigVal = enabled;
    },
    onTogglePauseOnSigReady: enabled => {
      toggledPauseVal = enabled;
    },
  });

  // 1. จำลองการคลิกช่องสกิล
  bottomHudEvents['slot_0']?.[0]?.({ stopPropagation: () => {} });
  assert(clickedSkillId === 'fire_s', 'ส่งรหัสสกิล fire_s เมื่อคลิกช่อง');
  assert(clickedSlotIdx === 0, 'ส่งดัชนีช่อง 0 เมื่อคลิก');

  // 2. จำลองการคลิกปุ่มไม้ตาย
  bottomHudEvents['#btn-manual-sig-cast']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(castSigCalled), 'เรียก onCastSignature เมื่อคลิกปุ่มไม้ตาย');

  // 3. จำลองการคลิกปุ่มสลับตัว
  bottomHudEvents['#btn-manual-swap-hero']?.[0]?.({ stopPropagation: () => {} });
  assert(Boolean(swapHeroCalled), 'เรียก onSwapHero เมื่อคลิกปุ่มสลับตัว');

  // 4. จำลองการสลับเช็กบ็อกซ์ Auto Battle
  bottomHudEvents['chk_auto_battle']?.[0]?.({ stopPropagation: () => {} });
  assert(toggledAutoVal === false, 'สลับค่า Auto Battle ผ่าน onToggleAutoBattle');
  assert(battleViewState.autoBattle === false, 'อัปเดต autoBattle ใน battleViewState');

  // 5. จำลองการสลับเช็กบ็อกซ์ Auto Cast Sig
  bottomHudEvents['chk_auto_cast_sig']?.[0]?.({ stopPropagation: () => {} });
  assert(toggledSigVal === false, 'สลับค่า Auto Cast Sig ผ่าน onToggleAutoCastSig');
  assert(battleViewState.autoCastSig === false, 'อัปเดต autoCastSig ใน battleViewState');

  // 6. จำลองการสลับเช็กบ็อกซ์ Pause on Sig Ready
  bottomHudEvents['chk_pause_on_sig']?.[0]?.({ stopPropagation: () => {} });
  assert(toggledPauseVal === true, 'สลับค่า Pause on Sig Ready ผ่าน onTogglePauseOnSigReady');
  assert(battleViewState.pauseOnSigReady === true, 'อัปเดต pauseOnSigReady ใน battleViewState');
  console.log('  -> ผ่านการตรวจสอบการผูกเหตุการณ์ Area 5B\n');

  // ==========================================
  // 31. ตรวจสอบการแสดงสกิล Hotbar ตรงตามสกิลจริงที่สัตว์มี (ไม่ถูกแทนที่ด้วย defaultSkills 4 สกิล)
  // ==========================================
  console.log('【 31. ตรวจสอบการแสดงผล Skill Hotbar ตรงตามสกิลจริงที่สัตว์มี (Actual Equipped Skills) 】');

  // 31.1 จำลองสร้างควาย (buffalo) ที่มีเพียงสกิลเดียว ['earth_s']
  const buffaloCustom = createFighter('buffalo', ['earth_s'], 1, 1);
  assert(buffaloCustom.skillSlots.length === 1, `ควายมีสกิลติดตั้งเพียง 1 สกิลตามจริง (พบ ${buffaloCustom.skillSlots.length} สกิล)`);
  assert(buffaloCustom.skillSlots[0] === 'earth_s', 'สกิลช่องที่ 1 คือ earth_s (ก้อนหินถล่ม)');
  assert(!buffaloCustom.skillSlots.includes('earth_l'), 'ไม่พบ earth_l (แผ่นดินไหว) จาก defaultSkills เดิม');
  assert(!buffaloCustom.skillSlots.includes('medical_m1'), 'ไม่พบ medical_m1 (เข็มทิพย์ถอนพิษ) จาก defaultSkills เดิม');
  assert(!buffaloCustom.skillSlots.includes('medical_s'), 'ไม่พบ medical_s (สมุนไพรพันแผล) จาก defaultSkills เดิม');

  // 31.2 จำลองการต่อสู้ BattleSession และแปลงข้อมูลผ่าน adapt1v1BattleData
  const buffaloSession = new BattleSession(['buffalo'], ['cat'], {
    customSkillsA: [['earth_s']],
    customSkillsB: [['wind_s']],
  });
  const adaptedBuffalo = adapt1v1BattleData(buffaloSession, buffaloSession.captureSnapshot());
  const activeBuffaloView = adaptedBuffalo.party[0];
  assert(activeBuffaloView.skillSlots.length === 1, 'ข้อมูล View ของควายมี skillSlots เพียง 1 สกิล');

  // 31.3 เรนเดอร์ Skill Hotbar
  const hotbarBuffaloHtml = renderSkillHotbarHtml(activeBuffaloView);
  assert(hotbarBuffaloHtml.includes('data-skill-id="earth_s"'), 'ช่องที่ 1 เรนเดอร์ earth_s ถูกต้อง');
  assert(hotbarBuffaloHtml.includes('ก้อนหินถล่ม'), 'แสดงชื่อก้อนหินถล่ม');

  // ช่อง 2, 3, 4 ต้องแสดงเป็นช่องว่าง ไม่แสดงสกิลเก่า
  const emptyMatches = hotbarBuffaloHtml.match(/is-empty/g);
  assert(Boolean(emptyMatches && emptyMatches.length === 3), `ช่องที่ 2, 3, 4 เรนเดอร์เป็นช่องว่างครบทั้ง 3 ช่อง (พบ ${emptyMatches?.length} ช่องว่าง)`);
  assert(!hotbarBuffaloHtml.includes('แผ่นดินไหว'), 'ไม่แสดงแผ่นดินไหวบน Hotbar');
  assert(!hotbarBuffaloHtml.includes('เข็มทิพย์ถอนพิษ'), 'ไม่แสดงเข็มทิพย์ถอนพิษบน Hotbar');
  assert(!hotbarBuffaloHtml.includes('สมุนไพรพันแผล'), 'ไม่แสดงสมุนไพรพันแผลบน Hotbar');
  console.log('  -> ผ่านการตรวจสอบการแสดงผลสกิล Hotbar ตรงตามสกิลจริงที่สัตว์มี\n');

  // ==========================================
  // 32. ตรวจสอบระบบ Combat Visual FX & Action Animation Helpers (Step 2)
  // ==========================================
  console.log('【 32. ตรวจสอบระบบ Combat Visual FX & Action Animation Helpers (Step 2) 】');

  // 32.1 ทดสอบ getCastAuraClassForElement ครบทั้ง 12 ธาตุ
  const elemTests: [string, string][] = [
    ['fire', 'cast-aura-fire'],
    ['water', 'cast-aura-water'],
    ['wind', 'cast-aura-wind'],
    ['electric', 'cast-aura-electric'],
    ['ice', 'cast-aura-ice'],
    ['earth', 'cast-aura-earth'],
    ['plant', 'cast-aura-plant'],
    ['poison', 'cast-aura-poison'],
    ['dark', 'cast-aura-dark'],
    ['light', 'cast-aura-light'],
    ['psychic', 'cast-aura-psychic'],
    ['neutral', 'cast-aura-neutral'],
    ['unknown_elem', 'cast-aura-neutral'],
  ];

  for (const [elem, expected] of elemTests) {
    const cls = getCastAuraClassForElement(elem);
    assert(cls === expected, `ธาตุ ${elem} ได้รับคลาส Cast Aura ${expected}`);
  }
  console.log('  -> ผ่านการตรวจสอบ Cast Aura Class ครบทั้ง 12 ธาตุ');

  // 32.2 ทดสอบ getCombatFxClassForStatus ครบทั้ง 12 สถานะ CC
  const ccTests: [string, string][] = [
    ['burn', 'fx-burn-flame'],
    ['freeze', 'fx-freeze-ice'],
    ['stun', 'fx-stun-stars'],
    ['sleep', 'fx-sleep-bubble'],
    ['poison', 'fx-poison-drip'],
    ['bleed', 'fx-bleed-slash'],
    ['confuse', 'fx-confusion-ring'],
    ['confusion', 'fx-confusion-ring'],
    ['petrify', 'fx-petrify-stone'],
    ['stone_curse', 'fx-petrify-stone'],
    ['shield', 'fx-shield-barrier'],
    ['silence', 'fx-silence-chain'],
    ['taunt', 'fx-taunt-rage'],
    ['blind', 'fx-blind-smoke'],
  ];

  for (const [cc, expected] of ccTests) {
    const fx = getCombatFxClassForStatus(cc);
    assert(fx === expected, `สถานะ CC ${cc} ได้รับคลาส FX ${expected}`);
  }
  assert(getCombatFxClassForStatus('unknown_status') === null, 'สถานะที่ไม่รู้จักคืนค่า null ถูกต้อง');
  console.log('  -> ผ่านการตรวจสอบ CC FX Class ครบทั้ง 12 ประเภท');

  // 32.3 ทดสอบ Trigger Helpers ด้วย Mock Element
  const createMockUnitBox = (id: string) => {
    const classes = new Set<string>();
    return {
      id,
      offsetWidth: 120,
      classList: {
        add: (...c: string[]) => c.forEach(x => classes.add(x)),
        remove: (...c: string[]) => c.forEach(x => classes.delete(x)),
        contains: (c: string) => classes.has(c),
      },
      querySelector: (sel: string) => null,
    } as any;
  };

  const mockBox = createMockUnitBox('box-unit-A');

  // ทดสอบ triggerCastWindup
  triggerCastWindup(mockBox, 'fire');
  assert(mockBox.classList.contains('cast-windup-aura'), 'triggerCastWindup เพิ่มคลาส cast-windup-aura');
  assert(mockBox.classList.contains('cast-aura-fire'), 'triggerCastWindup เพิ่มคลาส cast-aura-fire');

  // ทดสอบ triggerBuffWave
  triggerBuffWave(mockBox);
  assert(mockBox.classList.contains('fx-buff-rise'), 'triggerBuffWave เพิ่มคลาส fx-buff-rise');

  // ทดสอบ triggerDebuffWave
  triggerDebuffWave(mockBox);
  assert(mockBox.classList.contains('fx-debuff-fall'), 'triggerDebuffWave เพิ่มคลาส fx-debuff-fall');

  // ทดสอบ triggerHealGlow
  triggerHealGlow(mockBox);
  assert(mockBox.classList.contains('fx-heal-glow'), 'triggerHealGlow เพิ่มคลาส fx-heal-glow');

  // ทดสอบ triggerShieldShatter
  triggerShieldShatter(mockBox);
  assert(mockBox.classList.contains('shield-shatter'), 'triggerShieldShatter เพิ่มคลาส shield-shatter');

  // ทดสอบ triggerHeavyCritShake
  const mockStage = createMockUnitBox('arena-stage');
  triggerHeavyCritShake(mockStage);
  assert(mockStage.classList.contains('heavy-crit-shake'), 'triggerHeavyCritShake เพิ่มคลาส heavy-crit-shake บน arena-stage');

  console.log('  -> ผ่านการตรวจสอบ Animation Trigger Helpers ทั้งหมด\n');

  console.log('======================================================================');
  console.log('  🎉 การทดสอบ MMORPG Battle UI (Phase 1 ถึง Phase 6) ผ่านฉลุย 100%!     ');
  console.log('======================================================================');
}

runBattleUIStateTests().catch(err => {
  console.error('Fatal error during Battle UI State test:', err);
  process.exit(1);
});
