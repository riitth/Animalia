/**
 * Test Suite for SS Mythical Beast: Leviathan (เลเวียธาน) - Water Striker
 */

import {
  getAllHeroes,
  createFighter,
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: เลเวียธาน (Leviathan) - วารี Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const leviathan = heroes.find(h => h.id === 'leviathan');
assert(Boolean(leviathan), 'พบฮีโร่ leviathan ใน heroes.json');

if (leviathan) {
  assert(leviathan.name === 'เลเวียธาน', `ชื่อภาษาไทยถูกต้อง: ${leviathan.name}`);
  assert(leviathan.rarity === 'SS', `ระดับ Rarity: ${leviathan.rarity}`);
  assert(leviathan.element === 'water', `ธาตุ: ${leviathan.element}`);
  assert(leviathan.role === 'Striker', `สายบทบาท: ${leviathan.role}`);
  assert(leviathan.str === 88, `STR: ${leviathan.str}`);
  assert(leviathan.agi === 42, `AGI: ${leviathan.agi}`);
  assert(leviathan.sta === 52, `STA: ${leviathan.sta}`);
  assert(leviathan.str + leviathan.agi + leviathan.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${leviathan.str + leviathan.agi + leviathan.sta})`);
  assert(leviathan.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${leviathan.customMultipliers?.hp}`);
  assert(leviathan.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${leviathan.customMultipliers?.atk}`);
  assert(leviathan.customSigMult === 4.3, `ตัวคูณท่าไม้ตาย Striker: ×${leviathan.customSigMult}`);
}

// 2. ตรวจสอบ Ability: oceanic_surge (จ้าวคลั่งสมุทร)
console.log('\n【 2. ตรวจสอบ Ability: oceanic_surge 】');
const fLeviathan = createFighter('leviathan', undefined, 1, 1);
assert(fLeviathan.abilityId === 'oceanic_surge', `Ability ID: ${fLeviathan.abilityId}`);
assert(fLeviathan.abilityName === 'จ้าวคลั่งสมุทร', `Ability Name: ${fLeviathan.abilityName}`);

// 3. ตรวจสอบ Signature Effect: dispel_and_sp_drain (สลายบัฟ 1 อย่าง & ตัด SP -25)
console.log('\n【 3. ตรวจสอบ Signature Effect: dispel_and_sp_drain 】');
const dummyTarget = createFighter('buffalo', undefined, 1, 1);
// บัฟเป้าหมายก่อน
applyEffectToTarget(dummyTarget, { type: 'buff_def', value: 0.20, duration: 2 }, true);
applyEffectToTarget(dummyTarget, { type: 'shield', value: 0.15, duration: 2 }, true);
dummyTarget.sp = 50;

assert(dummyTarget.effects.length >= 2, 'เป้าหมายมีบัฟอยู่ 2 ชนิด');
const initialBuffCount = dummyTarget.effects.length;
const initialSp = dummyTarget.sp;

const sigRes = applyEffectToTarget(dummyTarget, { type: 'dispel_and_sp_drain', count: 1, value: 25 }, true);
console.log(`  ℹ ผลลัพธ์ไม้ตาย: "${sigRes}"`);
assert(Boolean(sigRes && sigRes.includes('ตัด SP -25')), `ตัด SP -25 สำเร็จ: "${sigRes}"`);
assert(dummyTarget.sp === initialSp - 25, `SP ของเป้าหมายลดลง 25 (${initialSp} -> ${dummyTarget.sp})`);
assert(dummyTarget.effects.length === initialBuffCount - 1, `บัฟของเป้าหมายถูกสลายไป 1 บัฟ (${initialBuffCount} -> ${dummyTarget.effects.length})`);

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['leviathan'];
assert(Boolean(sigDesc && sigDesc.includes('×4.3') && sigDesc.includes('สลายบัฟ') && sigDesc.includes('-25 SP')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['leviathan'];
assert(Boolean(lore && lore.scientificName === 'Draco Leviathan Oceanus'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('อสูรบรรพกาลสมุทร')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1 (BattleSession)
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 】');
const session1v1 = new BattleSession(['leviathan'], ['rooster'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 30,
});
const winner1v1 = session1v1.runToEnd();
assert(session1v1.logs.length > 0, `จำลอง 1v1 สำเร็จ (จบใน ${winner1v1 === 'A' ? 'เลเวียธานชนะ' : winner1v1 === 'B' ? 'ไก่ชนะ' : 'เสมอ'}, ${session1v1.turn} เทิร์น)`);
const oceanicSurge1v1 = session1v1.logs.filter(e => e.appliedEffects?.some(a => a.includes('จ้าวคลั่งสมุทร') || a.includes('ฟื้นฟู +15 SP')));
console.log(`  ℹ ตรวจพบผลของจ้าวคลั่งสมุทรใน 1v1: ${oceanicSurge1v1.length} ครั้ง`);

// 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession)
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3 】');
const session2v2 = new TeamBattleSession(
  ['leviathan', 'behemoth'],
  ['rooster', 'buffalo'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  }
);
const winner2v2 = session2v2.runToEnd();
assert(session2v2.logs.length > 0, `จำลอง 2v2 สำเร็จ (ผล: ทีม ${winner2v2}, จำนวนรอบ: ${session2v2.round})`);
const oceanicSurge2v2 = session2v2.logs.filter(e => e.appliedEffects?.some(a => a.includes('จ้าวคลั่งสมุทร') || a.includes('ฟื้นฟู +15 SP')));
console.log(`  ℹ ตรวจพบผลของจ้าวคลั่งสมุทรใน 2v2: ${oceanicSurge2v2.length} ครั้ง`);

console.log('\n======================================================================');
console.log('  🎉 ทดสอบ เลเวียธาน (Leviathan - SS Water Striker) ผ่านฉลุย 100%!');
console.log('======================================================================\n');
