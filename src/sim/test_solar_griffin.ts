/**
 * Test Suite for SS Mythical Beast: Solar Griffin (พญากริฟฟอนสุริยัน) - Light Striker
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: พญากริฟฟอนสุริยัน (Solar Griffin) - ธาตุแสง Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const griffin = heroes.find(h => h.id === 'solar_griffin');
assert(Boolean(griffin), 'พบฮีโร่ solar_griffin ใน heroes.json');

if (griffin) {
  assert(griffin.name === 'พญากริฟฟอนสุริยัน', `ชื่อภาษาไทยถูกต้อง: ${griffin.name}`);
  assert(griffin.rarity === 'SS', `ระดับ Rarity: ${griffin.rarity}`);
  assert(griffin.element === 'light', `ธาตุ: ${griffin.element}`);
  assert(griffin.role === 'Striker', `สายบทบาท: ${griffin.role}`);
  assert(griffin.str === 90, `STR: ${griffin.str}`);
  assert(griffin.agi === 44, `AGI: ${griffin.agi}`);
  assert(griffin.sta === 48, `STA: ${griffin.sta}`);
  assert(griffin.str + griffin.agi + griffin.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${griffin.str + griffin.agi + griffin.sta})`);
  assert(griffin.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${griffin.customMultipliers?.hp}`);
  assert(griffin.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${griffin.customMultipliers?.atk}`);
  assert(griffin.customSigMult === 4.4, `ตัวคูณท่าไม้ตาย Striker: ×${griffin.customSigMult}`);
  assert(griffin.signatureName === 'แสงสุริยะพิพากษา', `ชื่อท่าไม้ตาย: ${griffin.signatureName}`);
}

// 2. ตรวจสอบ Ability: solar_piercing_crest (รัศมีสุริยะเจาะเกราะ)
console.log('\n【 2. ตรวจสอบ Ability: solar_piercing_crest 】');
const fGriffin = createFighter('solar_griffin', undefined, 1, 1);
assert(fGriffin.abilityId === 'solar_piercing_crest', `Ability ID: ${fGriffin.abilityId}`);
assert(fGriffin.abilityName === 'รัศมีสุริยะเจาะเกราะ', `Ability Name: ${fGriffin.abilityName}`);

// 2.1 ตรวจสอบโบนัสสเตตัสถาวร HIT +15 และ AB +15
const baseStats = { ...fGriffin.baseStats };
const effStats = getEffectiveStats(fGriffin, true);
assert(effStats.hit === baseStats.hit + 15, `โบนัสความแม่นยำ HIT +15 ทำงานถูกต้อง (${baseStats.hit} -> ${effStats.hit})`);
assert(effStats.ab === baseStats.ab + 15, `โบนัสเจาะเกราะ AB +15 ทำงานถูกต้อง (${baseStats.ab} -> ${effStats.ab})`);

// 2.2 ตรวจสอบภูมิคุ้มกันสถานะตาบอด (Blind Immunity 100%)
const blindRes = applyEffectToTarget(fGriffin, { type: 'blind', duration: 2 }, true);
console.log(`  ℹ ผลลัพธ์เมื่อพยายามแปะ Blind: "${blindRes}"`);
assert(Boolean(blindRes && blindRes.includes('ภูมิคุ้มกันตาบอด')), 'พญากริฟฟอนสุริยันมีภูมิคุ้มกันตาบอด 100%');
const hasBlind = fGriffin.effects.some(e => e.type === 'blind');
assert(!hasBlind, 'ไม่มีสถานะ blind ใน effects ของกริฟฟอน');

// 3. ตรวจสอบ Signature Effect: dispel_all_and_blind (สลายบัฟทั้งหมด & ตาบอด 2 เทิร์น)
console.log('\n【 3. ตรวจสอบ Signature Effect: dispel_all_and_blind 】');
const dummyTarget = createFighter('lion', undefined, 1, 1);
dummyTarget.effects.push({ type: 'buff_atk', value: 0.20, duration: 2 });
dummyTarget.effects.push({ type: 'buff_def', value: 0.20, duration: 2 });
dummyTarget.effects.push({ type: 'shield', value: 0.15, duration: 2 });
dummyTarget.shield = 150;

const sigRes = applyEffectToTarget(dummyTarget, { type: 'dispel_all_and_blind', duration: 2 }, true);
console.log(`  ℹ ผลลัพธ์ไม้ตาย: "${sigRes}"`);

assert(Boolean(sigRes && sigRes.includes('สลายบัฟทั้งหมด') && sigRes.includes('ติดตาบอด')), 'ข้อความระบุสลายบัฟทั้งหมดและติดตาบอด');
assert(dummyTarget.shield === 0, 'เกราะป้องกันของเป้าหมายถูกลบล้างกลายเป็น 0');
const remainingBuffs = dummyTarget.effects.filter(e => e.type.startsWith('buff_') || e.type === 'shield');
assert(remainingBuffs.length === 0, `บัฟทั้งหมดถูกลบล้างเกลี้ยง (เหลือ ${remainingBuffs.length} บัฟ)`);
const targetBlind = dummyTarget.effects.find(e => e.type === 'blind');
assert(Boolean(targetBlind && targetBlind.duration === 2), `เป้าหมายติดสถานะตาบอด 2 เทิร์น`);

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['solar_griffin'];
assert(Boolean(sigDesc && sigDesc.includes('×4.4') && sigDesc.includes('สลายบัฟของศัตรูทั้งหมด') && sigDesc.includes('ตาบอด')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['solar_griffin'];
assert(Boolean(lore && lore.scientificName === 'Gryphus Regalis Solaris'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('ราชันย์กริฟฟอนสุริยันในตำนาน')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 】');
let sigCastCount = 0;
let dispelBlindProcCount = 0;

for (let i = 0; i < 25; i++) {
  const session1v1 = new BattleSession(['solar_griffin'], ['white_lion'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 35,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.actorName === 'พญากริฟฟอนสุริยัน' && log.actionType === 'signature') {
      sigCastCount++;
      if (log.appliedEffects?.some(e => e.includes('สลายบัฟทั้งหมด') || e.includes('ตาบอด'))) {
        dispelBlindProcCount++;
      }
    }
  }
}

console.log(`  ℹ ผลลัพธ์ 25 ไฟต์ (1v1):`);
console.log(`    - ออกท่าไม้ตาย [แสงสุริยะพิพากษา]: ${sigCastCount} ครั้ง`);
console.log(`    - เอฟเฟกต์สลายบัฟ & ตาบอดทำงาน (85% chance): ${dispelBlindProcCount} ครั้ง`);
assert(sigCastCount > 0, `พญากริฟฟอนสุริยันออกท่าไม้ตายสำเร็จ (${sigCastCount} ครั้ง)`);
assert(dispelBlindProcCount > 0, `เอฟเฟกต์สลายบัฟทั้งหมด & ตาบอดทำงานสำเร็จ (${dispelBlindProcCount} ครั้ง)`);

// 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession)
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession) 】');
const session2v2 = new TeamBattleSession(
  ['solar_griffin', 'behemoth'],
  ['cerberus', 'leviathan'],
  {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 40,
  }
);
const winner = session2v2.runToEnd();
console.log(`  ℹ ผลลัพธ์ 2v2: ชนะเลิศฝั่ง [${winner}] (จำนวนแอ็กชัน: ${session2v2.totalActions}, รอบ: ${session2v2.round})`);

const griffinLogs = session2v2.logs.filter(l => l.actorName === 'พญากริฟฟอนสุริยัน');
assert(griffinLogs.length > 0, `พญากริฟฟอนสุริยันออกแอ็กชันในการต่อสู้ 2v2 (${griffinLogs.length} แอ็กชัน)`);

console.log('\n======================================================================');
console.log('  🎉 การทดสอบฮีโร่ พญากริฟฟอนสุริยัน (Solar Griffin) สำเร็จครบถ้วน 100%!');
console.log('======================================================================\n');

