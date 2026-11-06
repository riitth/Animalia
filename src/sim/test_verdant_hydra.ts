/**
 * Test Suite for SS Mythical Beast: Verdant Hydra (ไฮดราพฤกษา) - Plant Striker
 */

import {
  getAllHeroes,
  createFighter,
  applyEffectToTarget,
  getEffectiveStats,
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: ไฮดราพฤกษา (Verdant Hydra) - พฤกษา Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const hydra = heroes.find(h => h.id === 'verdant_hydra');
assert(Boolean(hydra), 'พบฮีโร่ verdant_hydra ใน heroes.json');

if (hydra) {
  assert(hydra.name === 'ไฮดราพฤกษา', `ชื่อภาษาไทยถูกต้อง: ${hydra.name}`);
  assert(hydra.rarity === 'SS', `ระดับ Rarity: ${hydra.rarity}`);
  assert(hydra.element === 'plant', `ธาตุ: ${hydra.element}`);
  assert(hydra.role === 'Striker', `สายบทบาท: ${hydra.role}`);
  assert(hydra.str === 87, `STR: ${hydra.str}`);
  assert(hydra.agi === 39, `AGI: ${hydra.agi}`);
  assert(hydra.sta === 56, `STA: ${hydra.sta}`);
  assert(hydra.str + hydra.agi + hydra.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${hydra.str + hydra.agi + hydra.sta})`);
  assert(hydra.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${hydra.customMultipliers?.hp}`);
  assert(hydra.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${hydra.customMultipliers?.atk}`);
  assert(hydra.customSigMult === 4.2, `ตัวคูณท่าไม้ตาย Striker: ×${hydra.customSigMult}`);
}

// 2. ตรวจสอบ Ability: thorn_regrowth (หนามงอกเงยคืนชีพ)
console.log('\n【 2. ตรวจสอบ Ability: thorn_regrowth 】');
const fHydra = createFighter('verdant_hydra', undefined, 1, 1);
assert(fHydra.abilityId === 'thorn_regrowth', `Ability ID: ${fHydra.abilityId}`);
assert(fHydra.abilityName === 'หนามงอกเงยคืนชีพ', `Ability Name: ${fHydra.abilityName}`);

// 3. ตรวจสอบ Signature Effect: root (ตรึงร่าง 2 เทิร์น & FLEE กลายเป็น 0)
console.log('\n【 3. ตรวจสอบ Signature Effect: root 】');
const dummyTarget = createFighter('rabbit', undefined, 1, 1);
const statsBefore = getEffectiveStats(dummyTarget, true);
assert(statsBefore.flee > 0, `ค่า FLEE ปกติของเป้าหมาย: ${statsBefore.flee}`);

const rootRes = applyEffectToTarget(dummyTarget, { type: 'root', duration: 2 }, true);
console.log(`  ℹ ผลลัพธ์การติดสถานะ root: "${rootRes}"`);
assert(dummyTarget.effects.some(e => e.type === 'root'), 'เป้าหมายติดสถานะตรึงร่าง (root)');
const statsAfter = getEffectiveStats(dummyTarget, true);
assert(statsAfter.flee === 0, `ค่า FLEE หลังติดตรึงร่างกลายเป็น 0 (${statsAfter.flee})`);

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['verdant_hydra'];
assert(Boolean(sigDesc && sigDesc.includes('×4.2') && sigDesc.includes('สูบเลือด 25%') && sigDesc.includes('ตรึงร่าง')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['verdant_hydra'];
assert(Boolean(lore && lore.scientificName === 'Hydra Botanica Gigantea'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('อสูรพฤกษาบรรพกาลเก้าเศียร')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1: กลไกฮีลต้นเทิร์น 4% + เกราะหนาม 15% จากดาเมจ + ไม้ตายสูบเลือด 25%
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 (ฮีลต้นเทิร์น, เกราะหนาม, สูบเลือดไม้ตาย) 】');

// 5.1 ทดสอบเกราะหนามงอกเงย 15% จากการโจมตี
const hydraAttackSession = new BattleSession(['verdant_hydra'], ['buffalo'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 5,
});
hydraAttackSession.stepTurn();
const shieldLog = hydraAttackSession.logs.find(l =>
  l.actorName === 'ไฮดราพฤกษา' && l.appliedEffects?.some(a => a.includes('เกราะหนามพฤกษา'))
);
assert(Boolean(shieldLog), 'ตรวจพบการสร้างเกราะหนามพฤกษา 15% จากดาเมจใน 1v1');
console.log(`  ℹ Log เกราะหนาม: "${shieldLog?.message}"`);

// 5.2 ทดสอบการฮีลต้นเทิร์น 4% Max HP
let turnStartHealCount = 0;
let hydraDrainCount = 0;

for (let i = 0; i < 20; i++) {
  const session1v1 = new BattleSession(['verdant_hydra'], ['polar_bear'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.actorName === 'ไฮดราพฤกษา' && log.actionName?.includes('ฟื้นฟูชีวาหนามงอกเงย')) {
      turnStartHealCount++;
    }
    if (log.actorName === 'ไฮดราพฤกษา' && log.appliedEffects?.some(a => a.includes('เก้าเศียรกลืนชีพ: สูบเลือด'))) {
      hydraDrainCount++;
    }
  }
}

console.log(`  ℹ ตรวจพบการฮีลต้นเทิร์น (4% Max HP) ใน 1v1: ${turnStartHealCount} ครั้ง`);
console.log(`  ℹ ตรวจพบการสูบเลือดไม้ตาย (25%) ใน 1v1: ${hydraDrainCount} ครั้ง`);
assert(turnStartHealCount > 0, 'เกิดการฟื้นฟูเลือดต้นเทิร์นจากหนามงอกเงยอย่างน้อย 1 ครั้ง');
assert(hydraDrainCount > 0, 'เกิดการสูบเลือดไม้ตายจากเก้าเศียรพฤกษากลืนปฐพีอย่างน้อย 1 ครั้ง');

// 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3 】');
const session2v2 = new TeamBattleSession(
  ['verdant_hydra', 'fenrir'],
  ['buffalo', 'rooster'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  }
);
const winner2v2 = session2v2.runToEnd();
assert(session2v2.logs.length > 0, `จำลอง 2v2 สำเร็จ (ผล: ทีม ${winner2v2}, จำนวนรอบ: ${session2v2.round})`);

const teamShieldLogs = session2v2.logs.filter(e => e.actorName === 'ไฮดราพฤกษา' && e.appliedEffects?.some(a => a.includes('เกราะหนามพฤกษา')));
console.log(`  ℹ ตรวจพบการสร้างเกราะหนามพฤกษาใน 2v2: ${teamShieldLogs.length} ครั้ง`);
assert(teamShieldLogs.length > 0, 'เกิดการสร้างเกราะหนามพฤกษาใน 2v2 สำเร็จ');

console.log('\n======================================================================');
console.log('  🎉 ทดสอบ ไฮดราพฤกษา (Verdant Hydra - SS Plant Striker) ผ่านฉลุย 100%!');
console.log('======================================================================\n');

