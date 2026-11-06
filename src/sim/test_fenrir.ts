/**
 * Test Suite for SS Mythical Beast: Fenrir (เฟนริร์) - Ice Striker
 */

import {
  getAllHeroes,
  createFighter,
  applyEffectToTarget,
  getEffectiveElement,
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: เฟนริร์ (Fenrir) - เหมันต์ Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const fenrir = heroes.find(h => h.id === 'fenrir');
assert(Boolean(fenrir), 'พบฮีโร่ fenrir ใน heroes.json');

if (fenrir) {
  assert(fenrir.name === 'เฟนริร์', `ชื่อภาษาไทยถูกต้อง: ${fenrir.name}`);
  assert(fenrir.rarity === 'SS', `ระดับ Rarity: ${fenrir.rarity}`);
  assert(fenrir.element === 'ice', `ธาตุ: ${fenrir.element}`);
  assert(fenrir.role === 'Striker', `สายบทบาท: ${fenrir.role}`);
  assert(fenrir.str === 91, `STR: ${fenrir.str}`);
  assert(fenrir.agi === 41, `AGI: ${fenrir.agi}`);
  assert(fenrir.sta === 50, `STA: ${fenrir.sta}`);
  assert(fenrir.str + fenrir.agi + fenrir.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${fenrir.str + fenrir.agi + fenrir.sta})`);
  assert(fenrir.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${fenrir.customMultipliers?.hp}`);
  assert(fenrir.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${fenrir.customMultipliers?.atk}`);
  assert(fenrir.customSigMult === 4.6, `ตัวคูณท่าไม้ตาย Striker: ×${fenrir.customSigMult}`);
}

// 2. ตรวจสอบ Ability: glacial_fang_hunt (เขี้ยวเหมันต์ฉีกวิญญาณ)
console.log('\n【 2. ตรวจสอบ Ability: glacial_fang_hunt 】');
const fFenrir = createFighter('fenrir', undefined, 1, 1);
assert(fFenrir.abilityId === 'glacial_fang_hunt', `Ability ID: ${fFenrir.abilityId}`);
assert(fFenrir.abilityName === 'เขี้ยวเหมันต์ฉีกวิญญาณ', `Ability Name: ${fFenrir.abilityName}`);

// 3. ตรวจสอบ Signature Effect: freeze (แช่แข็ง 1 เทิร์น & เปลี่ยนธาตุเป็นน้ำแข็ง)
console.log('\n【 3. ตรวจสอบ Signature Effect: freeze 】');
const dummyFireTarget = createFighter('phoenix', undefined, 1, 1);
assert(dummyFireTarget.element === 'fire', `เป้าหมายเริ่มต้นเป็นธาตุ: ${dummyFireTarget.element}`);

const freezeRes = applyEffectToTarget(dummyFireTarget, { type: 'freeze', duration: 1 }, true);
console.log(`  ℹ ผลลัพธ์ไม้ตายใส่เป้าหมาย: "${freezeRes}"`);
assert(dummyFireTarget.effects.some(e => e.type === 'freeze'), 'เป้าหมายติดสถานะแช่แข็ง');
assert(getEffectiveElement(dummyFireTarget) === 'ice', 'เป้าหมายที่ติดแช่แข็งถูกบังคับเปลี่ยนเป็นธาตุน้ำแข็งชั่วคราว');

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['fenrir'];
assert(Boolean(sigDesc && sigDesc.includes('×4.6') && sigDesc.includes('แช่แข็ง')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['fenrir'];
assert(Boolean(lore && lore.scientificName === 'Canis Fenrir Glacialis'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('พญาหมาป่าอสูรกลืนเหมันต์')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1: ดาเมจโบนัส +30% ใส่เป้าหมายแช่แข็ง/Ice Skin & ดูดเลือด +12%
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 (โบนัสขยี้ศัตรูแช่แข็ง & ดูดเลือด) 】');

// 5.1 ทดสอบดาเมจขยี้ศัตรูที่มี Ice Skin / Freeze
const targetWithIceSkinSession = new BattleSession(['fenrir'], ['buffalo'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 5,
});
// มอบสถานะ ice_skin ให้เป้าหมายก่อนเริ่มเทิร์น
targetWithIceSkinSession.teamB.fighters[0].effects.push({ type: 'ice_skin', duration: 2 });
while (targetWithIceSkinSession.winner === null && !targetWithIceSkinSession.logs.some(l => l.actorName === 'เฟนริร์')) {
  targetWithIceSkinSession.stepTurn();
}

const iceSkinHitLog = targetWithIceSkinSession.logs.find(l =>
  l.actorName === 'เฟนริร์' && l.appliedEffects?.some(a => a.includes('ขยี้ศัตรูแช่แข็ง/Ice Skin ดาเมจ +30%'))
);
assert(Boolean(iceSkinHitLog), 'ตรวจพบดาเมจ +30% ขยี้ศัตรูที่มี Ice Skin ใน 1v1');
console.log(`  ℹ Log ขยี้ Ice Skin: "${iceSkinHitLog?.message}"`);

// 5.2 ทดสอบการดูดเลือด 12% ในการต่อสู้ 1v1
let lifestealCount = 0;
for (let i = 0; i < 20; i++) {
  const session1v1 = new BattleSession(['fenrir'], ['polar_bear'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.actorName === 'เฟนริร์' && (log.healed > 0 || log.appliedEffects?.some(a => a.includes('ดูดเลือด')))) {
      lifestealCount++;
    }
  }
}

console.log(`  ℹ ตรวจพบการดูดเลือด (+12%) ใน 1v1: ${lifestealCount} ครั้ง`);
assert(lifestealCount > 0, 'เกิดการดูดเลือดอย่างน้อย 1 ครั้งจากเขี้ยวเหมันต์ฉีกวิญญาณ');

// 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 บนกระดาน 3x3 】');
const session2v2 = new TeamBattleSession(
  ['fenrir', 'thunderbird'],
  ['buffalo', 'rooster'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 30,
  }
);
const winner2v2 = session2v2.runToEnd();
assert(session2v2.logs.length > 0, `จำลอง 2v2 สำเร็จ (ผล: ทีม ${winner2v2}, จำนวนรอบ: ${session2v2.round})`);

const teamLifesteal = session2v2.logs.filter(e => e.actorName === 'เฟนริร์' && e.appliedEffects?.some(a => a.includes('ดูดเลือด')));
console.log(`  ℹ ตรวจพบการดูดเลือดของเฟนริร์ใน 2v2: ${teamLifesteal.length} ครั้ง`);
assert(teamLifesteal.length > 0, 'เกิดการดูดเลือดของเฟนริร์ใน 2v2 สำเร็จ');

console.log('\n======================================================================');
console.log('  🎉 ทดสอบ เฟนริร์ (Fenrir - SS Ice Striker) ผ่านฉลุย 100%!');
console.log('======================================================================\n');
