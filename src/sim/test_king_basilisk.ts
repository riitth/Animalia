/**
 * Test Suite for SS Mythical Beast: King Basilisk (บาซิลิสก์) - Poison Striker
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: บาซิลิสก์ (King Basilisk) - อสรพิษ Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const basilisk = heroes.find(h => h.id === 'king_basilisk');
assert(Boolean(basilisk), 'พบฮีโร่ king_basilisk ใน heroes.json');

if (basilisk) {
  assert(basilisk.name === 'บาซิลิสก์', `ชื่อภาษาไทยถูกต้อง: ${basilisk.name}`);
  assert(basilisk.rarity === 'SS', `ระดับ Rarity: ${basilisk.rarity}`);
  assert(basilisk.element === 'poison', `ธาตุ: ${basilisk.element}`);
  assert(basilisk.role === 'Striker', `สายบทบาท: ${basilisk.role}`);
  assert(basilisk.str === 89, `STR: ${basilisk.str}`);
  assert(basilisk.agi === 43, `AGI: ${basilisk.agi}`);
  assert(basilisk.sta === 50, `STA: ${basilisk.sta}`);
  assert(basilisk.str + basilisk.agi + basilisk.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${basilisk.str + basilisk.agi + basilisk.sta})`);
  assert(basilisk.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${basilisk.customMultipliers?.hp}`);
  assert(basilisk.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${basilisk.customMultipliers?.atk}`);
  assert(basilisk.customSigMult === 4.5, `ตัวคูณท่าไม้ตาย Striker: ×${basilisk.customSigMult}`);
}

// 2. ตรวจสอบ Ability: caustic_venom_aura (ไอกรดพิษละลายกระดูก)
console.log('\n【 2. ตรวจสอบ Ability: caustic_venom_aura 】');
const fBasilisk = createFighter('king_basilisk', undefined, 1, 1);
assert(fBasilisk.abilityId === 'caustic_venom_aura', `Ability ID: ${fBasilisk.abilityId}`);
assert(fBasilisk.abilityName === 'ไอกรดพิษละลายกระดูก', `Ability Name: ${fBasilisk.abilityName}`);

// 3. ตรวจสอบ Signature Effect: max_poison_and_armor_break (พิษ 2 ชั้น & ลด DEF 30%)
console.log('\n【 3. ตรวจสอบ Signature Effect: max_poison_and_armor_break 】');
const dummyTarget = createFighter('buffalo', undefined, 1, 1);
const sigRes = applyEffectToTarget(dummyTarget, { type: 'max_poison_and_armor_break', duration: 3, value: 0.30 }, true);
console.log(`  ℹ ผลลัพธ์ไม้ตาย: "${sigRes}"`);

const poisonEffect = dummyTarget.effects.find(e => e.type === 'poison');
const defDebuff = dummyTarget.effects.find(e => e.type === 'debuff_def');

assert(Boolean(poisonEffect && poisonEffect.stacks === 2), `เป้าหมายติดพิษเต็ม Max Stack 2 ชั้น (${poisonEffect?.stacks} ชั้น)`);
assert(Boolean(defDebuff && defDebuff.value === 0.30), `เป้าหมายถูกลด DEF 30% (${(defDebuff?.value ?? 0) * 100}%)`);

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['king_basilisk'];
assert(Boolean(sigDesc && sigDesc.includes('×4.5') && sigDesc.includes('พิษสะสมสูงสุด 2 ชั้น') && sigDesc.includes('ลด DEF 30%')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['king_basilisk'];
assert(Boolean(lore && lore.scientificName === 'Basiliscus Regalis Venenosus'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('ราชันย์อสรพิษเนตรมรณะ')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1: ดาเมจ +25% ใส่เป้าหมายติดพิษ & แพร่พิษสวนกลับ 40%
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 (โบนัสดาเมจใส่เป้าหมายติดพิษ & พิษสวนกลับ) 】');

// 5.1 ทดสอบดาเมจ +25% ใส่เป้าหมายที่มีพิษ
const poisonTargetSession = new BattleSession(['king_basilisk'], ['buffalo'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 5,
});
poisonTargetSession.teamB.fighters[0].effects.push({ type: 'poison', stacks: 1, duration: 3 });
while (poisonTargetSession.winner === null && !poisonTargetSession.logs.some(l => l.actorName === 'บาซิลิสก์')) {
  poisonTargetSession.stepTurn();
}

const poisonBonusLog = poisonTargetSession.logs.find(l =>
  l.actorName === 'บาซิลิสก์' && l.appliedEffects?.some(a => a.includes('ไอกรดพิษขยี้เป้าหมายติดพิษ ดาเมจ +25%'))
);
assert(Boolean(poisonBonusLog), 'ตรวจพบดาเมจ +25% ขยี้เป้าหมายที่ติดพิษใน 1v1');
console.log(`  ℹ Log ขยี้เป้าหมายติดพิษ: "${poisonBonusLog?.message}"`);

// 5.2 ทดสอบการแพร่พิษสวนกลับ 40% เมื่อถูกโจมตี
let poisonRetaliateCount = 0;
for (let i = 0; i < 20; i++) {
  const session1v1 = new BattleSession(['king_basilisk'], ['polar_bear'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.appliedEffects?.some(a => a.includes('ไอกรดพิษแพร่พิษใส่'))) {
      poisonRetaliateCount++;
    }
  }
}

console.log(`  ℹ ตรวจพบการแพร่พิษสวนกลับ (40%) ใน 1v1: ${poisonRetaliateCount} ครั้ง`);
assert(poisonRetaliateCount > 0, 'เกิดการแพร่พิษสวนกลับอย่างน้อย 1 ครั้งจากไอกรดพิษละลายกระดูก');

// 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3 】');
const session2v2 = new TeamBattleSession(
  ['king_basilisk', 'verdant_hydra'],
  ['buffalo', 'rooster'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  }
);
const winner2v2 = session2v2.runToEnd();
assert(session2v2.logs.length > 0, `จำลอง 2v2 สำเร็จ (ผล: ทีม ${winner2v2}, จำนวนรอบ: ${session2v2.round})`);

const poisonBonus2v2 = session2v2.logs.filter(e => e.actorName === 'บาซิลิสก์' && e.appliedEffects?.some(a => a.includes('ไอกรดพิษขยี้เป้าหมายติดพิษ')));
console.log(`  ℹ ตรวจพบโบนัสดาเมจขยี้พิษใน 2v2: ${poisonBonus2v2.length} ครั้ง`);

console.log('\n======================================================================');
console.log('  🎉 ทดสอบ บาซิลิสก์ (King Basilisk - SS Poison Striker) ผ่านฉลุย 100%!');
console.log('======================================================================\n');

