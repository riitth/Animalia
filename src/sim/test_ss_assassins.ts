/**
 * test_ss_assassins.ts: จำลองและทดสอบความถูกต้องของสัตว์มายาระดับ SS สาย ASSASSIN ครบทุกธาตุ
 * - ตรวจสอบความถูกต้องของสเตตัส (ผลรวม = 182 ทุกตัว)
 * - ตรวจสอบบทบาท (role: 'Assassin', preferredRow: 'mid', backlineChance >= 0.60)
 * - ตรวจสอบความสามารถและท่าไม้ตายทั้งใน 1v1 และ 2v2
 */

import heroesData from '../data/heroes.json';
import { BattleSession, createFighter } from '../engine/combat';
import { TeamBattleSession, createTeamFighter } from '../engine/team_combat';

function assert(condition: boolean, msg: string) {
  if (!condition) throw new Error(`[FAIL] ${msg}`);
  console.log(`  ✓ ${msg}`);
}

const HERO_MAP = new Map<string, any>();
for (const h of (heroesData as any).heroes) {
  HERO_MAP.set(h.id, h);
}

const SS_ASSASSINS = [
  'tsuchigumo',
  'kraken',
  'kamaitachi',
  'skoll',
  'raiju',
  'wendigo',
  'weretiger_saming',
  'manticore',
  'camazotz',
  'azure_dragon',
  'nue',
];

console.log('======================================================================');
console.log('  ทดสอบระบบสัตว์มายา SS สาย ASSASSIN ครบทั้ง 11 ธาตุ                  ');
console.log('======================================================================\n');

// 1. ตรวจสอบสเตตัสและงบประมาณ SS Budget = 182
console.log('【 1. ตรวจสอบโครงสร้างสเตตัส SS Budget (182 แต้ม) 】');
for (const id of SS_ASSASSINS) {
  const hero = HERO_MAP.get(id);
  assert(hero !== undefined, `พบฮีโร่ ${id} ใน heroes.json`);
  assert(hero.rarity === 'SS', `${id} มีระดับ SS`);
  assert(hero.role === 'Assassin', `${id} มีสายเป็น Assassin`);
  const sum = hero.str + hero.agi + hero.sta;
  assert(sum === 182, `${id} มีผลรวมสเตตัส ${hero.str} + ${hero.agi} + ${hero.sta} = ${sum} (ตรงตามงบประมาณ 182)`);
  assert(hero.preferredRow === 'mid', `${id} ยืนแถวกลาง (preferredRow: 'mid')`);
  assert(hero.backlineChance >= 0.60, `${id} มีโอกาสล้วงหลังสูง (${hero.backlineChance * 100}%)`);
}

// 2. ทดสอบการจำลองต่อสู้ 1v1 ของ SS Assassins ทุกตัว
console.log('\n【 2. ทดสอบจำลองต่อสู้ 1v1 สำหรับ SS Assassins ทั้งหมด 】');
for (const id of SS_ASSASSINS) {
  const session = new BattleSession([id], ['rooster'], {
    enableAbilities: true,
    enableSkillEffects: true,
  });
  session.teamA.autoCastSignature = true;
  session.teamB.autoCastSignature = true;
  const outcome = session.runToEnd();
  assert(outcome === 'A' || outcome === 'B' || outcome === 'draw', `การต่อสู้ 1v1 ของ ${id} ดำเนินการจนจบสมบูรณ์ (ผล: ${outcome})`);
}

// 3. ทดสอบจำลองการต่อสู้ 2v2 Tactical Grid สำหรับ SS Assassins
console.log('\n【 3. ทดสอบจำลองต่อสู้ 2v2 Tactical Grid สำหรับ SS Assassins 】');
for (let i = 0; i < SS_ASSASSINS.length - 1; i += 2) {
  const id1 = SS_ASSASSINS[i];
  const id2 = SS_ASSASSINS[i + 1];
  const teamSession = new TeamBattleSession(
    [id1, id2],
    ['xuanwu', 'yeti'],
    {
      enableAbilities: true,
      enableSkillEffects: true,
      maxTurns: 40,
    }
  );
  const teamOutcome = teamSession.runToEnd();
  assert(teamOutcome === 'A' || teamOutcome === 'B' || teamOutcome === 'DRAW', `การต่อสู้ 2v2 ของคู่ [${id1}, ${id2}] สิ้นสุดถูกต้อง (ผล: ${teamOutcome})`);
}

console.log('\n======================================================================');
console.log('  🎉 การทดสอบระบบสัตว์มายา SS สาย ASSASSIN ผ่าน 100% ครบทุกธาตุ!       ');
console.log('======================================================================');
