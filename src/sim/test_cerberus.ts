/**
 * Test Suite for SS Mythical Beast: Cerberus (เซอร์เบอรัส) - Dark Striker
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: เซอร์เบอรัส (Cerberus) - อสูรสามเศียร Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const cerberus = heroes.find(h => h.id === 'cerberus');
assert(Boolean(cerberus), 'พบฮีโร่ cerberus ใน heroes.json');

if (cerberus) {
  assert(cerberus.name === 'เซอร์เบอรัส', `ชื่อภาษาไทยถูกต้อง: ${cerberus.name}`);
  assert(cerberus.rarity === 'SS', `ระดับ Rarity: ${cerberus.rarity}`);
  assert(cerberus.element === 'dark', `ธาตุ: ${cerberus.element}`);
  assert(cerberus.role === 'Striker', `สายบทบาท: ${cerberus.role}`);
  assert(cerberus.str === 92, `STR: ${cerberus.str}`);
  assert(cerberus.agi === 40, `AGI: ${cerberus.agi}`);
  assert(cerberus.sta === 50, `STA: ${cerberus.sta}`);
  assert(cerberus.str + cerberus.agi + cerberus.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${cerberus.str + cerberus.agi + cerberus.sta})`);
  assert(cerberus.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${cerberus.customMultipliers?.hp}`);
  assert(cerberus.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${cerberus.customMultipliers?.atk}`);
  assert(cerberus.customSigMult === 4.7, `ตัวคูณท่าไม้ตาย Striker สูงสุด: ×${cerberus.customSigMult}`);
  assert(cerberus.signatureName === 'เพลิงทมิฬทาร์ทารัส', `ชื่อท่าไม้ตาย: ${cerberus.signatureName}`);
}

// 2. ตรวจสอบ Ability: tartarus_three_fangs (สามเศียรฉีกกระชากบัฟ)
console.log('\n【 2. ตรวจสอบ Ability: tartarus_three_fangs 】');
const fCerberus = createFighter('cerberus', undefined, 1, 1);
assert(fCerberus.abilityId === 'tartarus_three_fangs', `Ability ID: ${fCerberus.abilityId}`);
assert(fCerberus.abilityName === 'สามเศียรฉีกกระชากบัฟ', `Ability Name: ${fCerberus.abilityName}`);

// 3. ตรวจสอบ Signature Effect: curse (คำสาปมรณะ) & dispel
console.log('\n【 3. ตรวจสอบ Signature Effect: curse & dispel 】');
const dummyTarget = createFighter('buffalo', undefined, 1, 1);
dummyTarget.effects.push({ type: 'buff_atk', value: 0.20, duration: 2 });
dummyTarget.effects.push({ type: 'shield', value: 0.15, duration: 2 });

// ทดสอบ Dispel บัฟ
const dispelRes = applyEffectToTarget(dummyTarget, { type: 'dispel', count: 1 }, true);
console.log(`  ℹ ผลลัพธ์ Dispel: "${dispelRes}"`);
assert(Boolean(dispelRes && dispelRes.includes('สลายบัฟ')), 'Dispel สลายบัฟของเป้าหมายสำเร็จ');

// ทดสอบแปะ Curse
const curseRes = applyEffectToTarget(dummyTarget, { type: 'curse', duration: 999 }, true);
console.log(`  ℹ ผลลัพธ์ Curse: "${curseRes}"`);
assert(Boolean(curseRes && curseRes.includes('ติดคำสาปมรณะ')), 'แปะสถานะคำสาปมรณะ Curse สำเร็จ');

const curseEffect = dummyTarget.effects.find(e => e.type === 'curse');
assert(Boolean(curseEffect && curseEffect.duration === 999), `คำสาปเป็นแบบถาวร (duration=${curseEffect?.duration}) จนกว่าจะถูก Cleanse`);

// ทดสอบ Cleanse ล้าง Curse
const cleanseRes = applyEffectToTarget(dummyTarget, { type: 'cleanse', count: 1 }, true);
console.log(`  ℹ ผลลัพธ์ Cleanse: "${cleanseRes}"`);
assert(Boolean(cleanseRes && cleanseRes.includes('curse')), 'Cleanse สามารถล้างสถานะ Curse ได้อย่างสมบูรณ์');

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['cerberus'];
assert(Boolean(sigDesc && sigDesc.includes('×4.7') && sigDesc.includes('Curse')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['cerberus'];
assert(Boolean(lore && lore.scientificName === 'Canis Tartarus Cerberus'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('อสูรสามเศียรผู้เฝ้าประตูนรกทาร์ทารัส')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1: Ability กัดซ้ำ/สลายบัฟ & ไม้ตาย Curse
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 】');

let biteProcCount = 0;
let dispelProcCount = 0;
let curseInflictedCount = 0;

for (let i = 0; i < 30; i++) {
  const session1v1 = new BattleSession(['cerberus'], ['rhino'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 35,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.actorName === 'เซอร์เบอรัส' && log.appliedEffects) {
      if (log.appliedEffects.some(e => e.includes('เศียรที่สองฉลามกัดซ้ำ'))) biteProcCount++;
      if (log.appliedEffects.some(e => e.includes('สลายบัฟ'))) dispelProcCount++;
      if (log.appliedEffects.some(e => e.includes('ติดคำสาปมรณะ'))) curseInflictedCount++;
    }
  }
}

console.log(`  ℹ ผลลัพธ์การสุ่ม 30 ไฟต์ (1v1):`);
console.log(`    - กัดซ้ำ (35% chance): ${biteProcCount} ครั้ง`);
console.log(`    - สลายบัฟ (30% chance เมื่อศัตรูมีบัฟ): ${dispelProcCount} ครั้ง`);
console.log(`    - ติดคำสาปมรณะจากไม้ตาย (80% chance): ${curseInflictedCount} ครั้ง`);

assert(biteProcCount > 0, `Ability เศียรที่สองกัดซ้ำทำงานสำเร็จ (${biteProcCount} ครั้ง)`);
assert(curseInflictedCount > 0, `ท่าไม้ตายสาปคำสาปมรณะสำเร็จ (${curseInflictedCount} ครั้ง)`);

// 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession)
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession) 】');
const session2v2 = new TeamBattleSession(
  ['cerberus', 'garuda'],
  ['behemoth', 'leviathan'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 40,
  }
);
const winner = session2v2.runToEnd();
console.log(`  ℹ ผลลัพธ์ 2v2: ชนะเลิศฝั่ง [${winner}] (จำนวนแอ็กชัน: ${session2v2.totalActions}, รอบ: ${session2v2.round})`);

const cerberusLogs = session2v2.logs.filter(l => l.actorName === 'เซอร์เบอรัส');
assert(cerberusLogs.length > 0, `เซอร์เบอรัสออกแอ็กชันในการต่อสู้ 2v2 (${cerberusLogs.length} แอ็กชัน)`);

console.log('\n======================================================================');
console.log('  🎉 การทดสอบฮีโร่ เซอร์เบอรัส (Cerberus) สำเร็จครบถ้วน 100%!');
console.log('======================================================================\n');
