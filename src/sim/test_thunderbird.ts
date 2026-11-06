/**
 * Test Suite for SS Mythical Beast: Thunderbird (ธันเดอร์เบิร์ด) - Electric Striker
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: ธันเดอร์เบิร์ด (Thunderbird) - อัสนี Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const thunderbird = heroes.find(h => h.id === 'thunderbird');
assert(Boolean(thunderbird), 'พบฮีโร่ thunderbird ใน heroes.json');

if (thunderbird) {
  assert(thunderbird.name === 'ธันเดอร์เบิร์ด', `ชื่อภาษาไทยถูกต้อง: ${thunderbird.name}`);
  assert(thunderbird.rarity === 'SS', `ระดับ Rarity: ${thunderbird.rarity}`);
  assert(thunderbird.element === 'electric', `ธาตุ: ${thunderbird.element}`);
  assert(thunderbird.role === 'Striker', `สายบทบาท: ${thunderbird.role}`);
  assert(thunderbird.str === 90, `STR: ${thunderbird.str}`);
  assert(thunderbird.agi === 46, `AGI: ${thunderbird.agi}`);
  assert(thunderbird.sta === 46, `STA: ${thunderbird.sta}`);
  assert(thunderbird.str + thunderbird.agi + thunderbird.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${thunderbird.str + thunderbird.agi + thunderbird.sta})`);
  assert(thunderbird.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${thunderbird.customMultipliers?.hp}`);
  assert(thunderbird.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${thunderbird.customMultipliers?.atk}`);
  assert(thunderbird.customSigMult === 4.5, `ตัวคูณท่าไม้ตาย Striker: ×${thunderbird.customSigMult}`);
}

// 2. ตรวจสอบ Ability: static_discharge (ประกายประจุอัสนีคลั่ง)
console.log('\n【 2. ตรวจสอบ Ability: static_discharge 】');
const fThunderbird = createFighter('thunderbird', undefined, 1, 1);
assert(fThunderbird.abilityId === 'static_discharge', `Ability ID: ${fThunderbird.abilityId}`);
assert(fThunderbird.abilityName === 'ประกายประจุอัสนีคลั่ง', `Ability Name: ${fThunderbird.abilityName}`);

// 3. ตรวจสอบ Signature Effect: stun_and_gauge_drain (สตัน 1 เทิร์น & ตัดเกจ -25)
console.log('\n【 3. ตรวจสอบ Signature Effect: stun_and_gauge_drain 】');
const dummyTarget = createFighter('buffalo', undefined, 1, 1);
dummyTarget.gauge = 60;

const sigRes = applyEffectToTarget(dummyTarget, { type: 'stun_and_gauge_drain', duration: 1, value: 25 }, true);
console.log(`  ℹ ผลลัพธ์ไม้ตายใส่เป้าหมายทั่วไป: "${sigRes}"`);
assert(Boolean(sigRes && sigRes.includes('ตัดเกจ -25')), `ตัดเกจ -25 สำเร็จ: "${sigRes}"`);
assert(dummyTarget.gauge === 35, `เกจของเป้าหมายลดลง 25 (60 -> ${dummyTarget.gauge})`);
assert(dummyTarget.effects.some(e => e.type === 'stun'), 'เป้าหมายติดสถานะสตัน');

// ทดสอบท่าไม้ตายใส่ตัวที่มีภูมิคุ้มกันสตัน (เช่น เบฮีมอธ)
const immuneTarget = createFighter('behemoth', undefined, 1, 1);
immuneTarget.gauge = 80;
const immuneRes = applyEffectToTarget(immuneTarget, { type: 'stun_and_gauge_drain', duration: 1, value: 25 }, true);
console.log(`  ℹ ผลลัพธ์ไม้ตายใส่เป้าหมายกันสตัน: "${immuneRes}"`);
assert(!immuneTarget.effects.some(e => e.type === 'stun'), 'เป้าหมายที่มีภูมิคุ้มกันไม่ติดสตัน');
assert(immuneTarget.gauge === 55, `เกจของเป้าหมายที่มีภูมิคุ้มกันยังคงถูกตัด -25 (80 -> ${immuneTarget.gauge})`);
assert(Boolean(immuneRes && immuneRes.includes('ภูมิคุ้มกันสตัน')), 'มีข้อความระบุภูมิคุ้มกันสตัน');

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['thunderbird'];
assert(Boolean(sigDesc && sigDesc.includes('×4.5') && sigDesc.includes('สตัน') && sigDesc.includes('ตัดเกจ')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['thunderbird'];
assert(Boolean(lore && lore.scientificName === 'Aquila Fulgur Giganteus'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('วิหคอัสนีบาตบรรพกาล')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1 และสายฟ้าผ่าซ้ำ / เกจเมื่อสังหาร
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 】');
let extraLightningCount = 0;
let killGaugeCount = 0;

for (let i = 0; i < 20; i++) {
  const session1v1 = new BattleSession(['thunderbird'], ['rooster'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.appliedEffects?.some(a => a.includes('สายฟ้าแฉลบผ่าซ้ำ'))) {
      extraLightningCount++;
    }
    if (log.appliedEffects?.some(a => a.includes('สังหารศัตรูสำเร็จ ได้รับเกจ +25'))) {
      killGaugeCount++;
    }
  }
}

console.log(`  ℹ ตรวจพบสายฟ้าแฉลบผ่าซ้ำใน 1v1: ${extraLightningCount} ครั้ง`);
console.log(`  ℹ ตรวจพบการสังหารศัตรูได้รับเกจ +25 ใน 1v1: ${killGaugeCount} ครั้ง`);
assert(extraLightningCount > 0, 'เกิดผลสายฟ้าแฉลบผ่าซ้ำอย่างน้อย 1 ครั้ง');

// 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3 】');
const session2v2 = new TeamBattleSession(
  ['thunderbird', 'garuda'],
  ['buffalo', 'rooster'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  }
);
const winner2v2 = session2v2.runToEnd();
assert(session2v2.logs.length > 0, `จำลอง 2v2 สำเร็จ (ผล: ทีม ${winner2v2}, จำนวนรอบ: ${session2v2.round})`);

const teamLightning = session2v2.logs.filter(e => e.appliedEffects?.some(a => a.includes('สายฟ้าแฉลบผ่าซ้ำ')));
console.log(`  ℹ ตรวจพบสายฟ้าแฉลบผ่าซ้ำใน 2v2: ${teamLightning.length} ครั้ง`);

console.log('\n======================================================================');
console.log('  🎉 ทดสอบ ธันเดอร์เบิร์ด (Thunderbird - SS Electric Striker) ผ่านฉลุย 100%!');
console.log('======================================================================\n');
