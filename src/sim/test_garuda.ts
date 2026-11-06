/**
 * Test Suite for SS Mythical Beast: Garuda (พญาครุฑ) - Wind Striker
 */

import {
  getAllHeroes,
  createFighter,
  getEffectiveStats,
  applyEffectToTarget,
  BattleSession,
} from '../engine/combat';
import { TeamBattleSession } from '../engine/team_combat';
import rawSignatureDesc from '../data/signature_descriptions.json';
import rawLore from '../data/animal_lore.json';

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`  ✓ ${message}`);
}

console.log('======================================================================');
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: พญาครุฑ (Garuda) - วายุ Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const garuda = heroes.find(h => h.id === 'garuda');
assert(Boolean(garuda), 'พบฮีโร่ garuda ใน heroes.json');

if (garuda) {
  assert(garuda.name === 'พญาครุฑ', `ชื่อภาษาไทยถูกต้อง: ${garuda.name}`);
  assert(garuda.rarity === 'SS', `ระดับ Rarity: ${garuda.rarity}`);
  assert(garuda.element === 'wind', `ธาตุ: ${garuda.element}`);
  assert(garuda.role === 'Striker', `สายบทบาท: ${garuda.role}`);
  assert(garuda.str === 89, `STR: ${garuda.str}`);
  assert(garuda.agi === 47, `AGI: ${garuda.agi}`);
  assert(garuda.sta === 46, `STA: ${garuda.sta}`);
  assert(garuda.str + garuda.agi + garuda.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${garuda.str + garuda.agi + garuda.sta})`);
  assert(garuda.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${garuda.customMultipliers?.hp}`);
  assert(garuda.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${garuda.customMultipliers?.atk}`);
  assert(garuda.customSigMult === 4.4, `ตัวคูณท่าไม้ตาย Striker: ×${garuda.customSigMult}`);
}

// 2. ตรวจสอบ Ability: sky_rending_talons (กรงเล็บเวหาสังหาร)
console.log('\n【 2. ตรวจสอบ Ability: sky_rending_talons 】');
const fGaruda = createFighter('garuda', undefined, 1, 1);
assert(fGaruda.abilityId === 'sky_rending_talons', `Ability ID: ${fGaruda.abilityId}`);
assert(fGaruda.abilityName === 'กรงเล็บเวหาสังหาร', `Ability Name: ${fGaruda.abilityName}`);

// 2.1 ตรวจสอบโบนัส CRI +12% และ CriDmg +0.25 (25%)
const statsNoAbility = getEffectiveStats(fGaruda, false);
const statsWithAbility = getEffectiveStats(fGaruda, true);
assert(statsWithAbility.cri === statsNoAbility.cri + 12, `โบนัส CRI +12% ทำงานถูกต้อง (${statsNoAbility.cri} -> ${statsWithAbility.cri})`);
assert(Math.abs(statsWithAbility.criDmg - (statsNoAbility.criDmg + 0.25)) < 0.001, `โบนัส CriDmg +25% ทำงานถูกต้อง (${statsNoAbility.criDmg} -> ${statsWithAbility.criDmg})`);

// 2.2 ตรวจสอบภูมิคุ้มกันสถานะตรึงร่าง (Root) และสโลว์ (Slow) 100%
const rootRes = applyEffectToTarget(fGaruda, { type: 'root', duration: 2 }, true);
assert(Boolean(rootRes && rootRes.includes('ภูมิคุ้มกันตรึงร่าง/สโลว์')), `ต้านทาน Root สำเร็จ: "${rootRes}"`);
assert(!fGaruda.effects.some(e => e.type === 'root'), 'ครุฑไม่มีสถานะ root ใน effects');

const slowRes = applyEffectToTarget(fGaruda, { type: 'slow', duration: 2 }, true);
assert(Boolean(slowRes && slowRes.includes('ภูมิคุ้มกันตรึงร่าง/สโลว์')), `ต้านทาน Slow สำเร็จ: "${slowRes}"`);
assert(!fGaruda.effects.some(e => e.type === 'slow'), 'ครุฑไม่มีสถานะ slow ใน effects');

// 3. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 3. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['garuda'];
assert(Boolean(sigDesc && sigDesc.includes('×4.4') && sigDesc.includes('การันตีคริติคอล 100%') && sigDesc.includes('เลือดไหล 2 เทิร์น')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['garuda'];
assert(Boolean(lore && lore.scientificName === 'Aquila Garuda Divinus'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('พญาราชปักษาวายุสวรรค์')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 4. ทดสอบการจำลองต่อสู้ 1v1 และการันตีคริติคอลของท่าไม้ตาย
console.log('\n【 4. ทดสอบการจำลองต่อสู้ 1v1 และการันตีคริติคอลของท่าไม้ตาย 】');
let garudaSigCritCount = 0;
let garudaSigHitCount = 0;

for (let i = 0; i < 20; i++) {
  const session1v1 = new BattleSession(['garuda'], ['buffalo'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.actorName === 'พญาครุฑ' && log.actionType === 'signature' && !log.isMiss) {
      garudaSigHitCount++;
      if (log.isCrit) garudaSigCritCount++;
    }
  }
}

assert(garudaSigHitCount > 0, `พญาครุฑได้ออกท่าไม้ตายโดนเป้าหมายใน 1v1 ทั้งหมด ${garudaSigHitCount} ครั้ง`);
assert(garudaSigCritCount === garudaSigHitCount, `ท่าไม้ตายวายุสลาตันฉีกนภา การันตีคริติคอล 100% เมื่อโจมตีโดน (${garudaSigCritCount}/${garudaSigHitCount} ครั้ง)`);

// 5. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession)
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3 】');
const session2v2 = new TeamBattleSession(
  ['garuda', 'leviathan'],
  ['buffalo', 'rooster'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  }
);
const winner2v2 = session2v2.runToEnd();
assert(session2v2.logs.length > 0, `จำลอง 2v2 สำเร็จ (ผล: ทีม ${winner2v2}, จำนวนรอบ: ${session2v2.round})`);

const garudaSigInTeam = session2v2.logs.filter(e => e.actorName === 'พญาครุฑ' && e.actionType === 'signature');
if (garudaSigInTeam.length > 0) {
  assert(garudaSigInTeam.every(e => e.isCrit), 'ท่าไม้ตายของพญาครุฑใน 2v2 ติดคริติคอล 100%');
}

console.log('\n======================================================================');
console.log('  🎉 ทดสอบ พญาครุฑ (Garuda - SS Wind Striker) ผ่านฉลุย 100%!');
console.log('======================================================================\n');
