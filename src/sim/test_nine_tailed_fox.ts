/**
 * Test Suite for SS Mythical Beast: Nine-Tailed Fox (พญาจิ้งจอกเก้าหาง) - Psychic Striker
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: พญาจิ้งจอกเก้าหาง (Nine-Tailed Fox) - ธาตุพลังจิต Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const fox = heroes.find(h => h.id === 'nine_tailed_fox');
assert(Boolean(fox), 'พบฮีโร่ nine_tailed_fox ใน heroes.json');

if (fox) {
  assert(fox.name === 'พญาจิ้งจอกเก้าหาง', `ชื่อภาษาไทยถูกต้อง: ${fox.name}`);
  assert(fox.rarity === 'SS', `ระดับ Rarity: ${fox.rarity}`);
  assert(fox.element === 'psychic', `ธาตุ: ${fox.element}`);
  assert(fox.role === 'Striker', `สายบทบาท: ${fox.role}`);
  assert(fox.str === 88, `STR: ${fox.str}`);
  assert(fox.agi === 46, `AGI: ${fox.agi}`);
  assert(fox.sta === 48, `STA: ${fox.sta}`);
  assert(fox.str + fox.agi + fox.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${fox.str + fox.agi + fox.sta})`);
  assert(fox.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${fox.customMultipliers?.hp}`);
  assert(fox.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${fox.customMultipliers?.atk}`);
  assert(fox.customSigMult === 4.3, `ตัวคูณท่าไม้ตาย Striker: ×${fox.customSigMult}`);
  assert(fox.signatureName === 'เก้าหางสะกดวิญญาณ', `ชื่อท่าไม้ตาย: ${fox.signatureName}`);
}

// 2. ตรวจสอบ Ability: psionic_spirit_orbs (ลูกแก้วพลังจิตทวีคูณ)
console.log('\n【 2. ตรวจสอบ Ability: psionic_spirit_orbs 】');
const fFox = createFighter('nine_tailed_fox', undefined, 1, 1);
assert(fFox.abilityId === 'psionic_spirit_orbs', `Ability ID: ${fFox.abilityId}`);
assert(fFox.abilityName === 'ลูกแก้วพลังจิตทวีคูณ', `Ability Name: ${fFox.abilityName}`);

// 2.1 ตรวจสอบการสะสมลูกแก้วจิตวิญญาณ (Spirit Orbs) และการเพิ่ม ATK +5% ต่อสแตก (สูงสุด 4 สแตก = +20%)
const baseAtk = getEffectiveStats(fFox, true).atk;
console.log(`  ℹ ATK พื้นฐาน (0 สแตก): ${baseAtk}`);

// เพิ่ม 1 สแตก
fFox.effects.push({ type: 'spirit_orb', stacks: 1, duration: 999 });
const atk1Stack = getEffectiveStats(fFox, true).atk;
const expectedAtk1 = Math.round(baseAtk * 1.05);
console.log(`  ℹ ATK ที่ 1 สแตก (+5%): ${atk1Stack} (คาดหวัง ~${expectedAtk1})`);
assert(atk1Stack >= expectedAtk1 - 1 && atk1Stack <= expectedAtk1 + 1, 'ลูกแก้ว 1 สแตกเพิ่ม ATK +5% ถูกต้อง');

// เพิ่มเป็น 4 สแตก
const orb = fFox.effects.find(e => e.type === 'spirit_orb')!;
orb.stacks = 4;
const atk4Stacks = getEffectiveStats(fFox, true).atk;
const expectedAtk4 = Math.round(baseAtk * 1.20);
console.log(`  ℹ ATK ที่ 4 สแตก (+20%): ${atk4Stacks} (คาดหวัง ~${expectedAtk4})`);
assert(atk4Stacks >= expectedAtk4 - 1 && atk4Stacks <= expectedAtk4 + 1, 'ลูกแก้ว 4 สแตกเพิ่ม ATK +20% ถูกต้อง');

// 2.2 ทดสอบกลไกระเบิดลูกแก้ว 4 ลูกมหาประลัย (20% Detonation & Reset to 0)
console.log('\n【 2.2 ทดสอบกลไกระเบิดลูกแก้ว 4 ลูกมหาประลัย (Option 2: 20% Detonation & Reset) 】');
let detonationFound = 0;
for (let trial = 0; trial < 50; trial++) {
  const detSession = new BattleSession(['nine_tailed_fox'], ['white_lion'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 5,
  });
  // มอบลูกแก้ว 4 สแตกให้จิ้งจอกเก้าหางทันที
  detSession.teamA.fighters[0].effects.push({ type: 'spirit_orb', stacks: 4, duration: 999 });
  while (detSession.winner === null && !detSession.logs.some(l => l.actorName === 'พญาจิ้งจอกเก้าหาง')) {
    detSession.stepTurn();
  }

  const detLog = detSession.logs.find(l =>
    l.actorName === 'พญาจิ้งจอกเก้าหาง' &&
    l.appliedEffects?.some(e => e.includes('ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย'))
  );
  if (detLog) {
    detonationFound++;
    console.log(`  ℹ ตรวจพบระเบิดลูกแก้วใน Trial ${trial + 1}: "${detLog.appliedEffects?.find(e => e.includes('ระเบิดพลังลูกแก้ว'))}"`);
    // ตรวจสอบว่าลูกแก้วถูกสลายไปแล้วจริง (Reset to 0)
    const remainingOrbs = detSession.teamA.fighters[0].effects.find(e => e.type === 'spirit_orb');
    assert(!remainingOrbs, 'หลังระเบิดพลังลูกแก้ว 4 ลูกแล้ว ลูกแก้วสลายไปจากตัว (Reset to 0 เพื่อเริ่มเก็บใหม่)');
    break;
  }
}
// 2.3 ทดสอบการสะสมลูกแก้วจนครบ 4 ลูกตามธรรมชาติแล้วจุดระเบิด (Endurance Test)
console.log('\n【 2.3 ทดสอบการสะสมลูกแก้วจนครบ 4 ลูกตามธรรมชาติแล้วจุดระเบิด (Endurance Battle) 】');
const enduranceSession = new BattleSession(['nine_tailed_fox'], ['behemoth'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 60,
});
// เพิ่ม HP ให้ทั้งคู่สูงมากเพื่อให้สู้กันยาวนาน 30-40 เทิร์น
enduranceSession.teamA.fighters[0].hp = 50000;
enduranceSession.teamA.fighters[0].baseStats.maxHp = 50000;
enduranceSession.teamB.fighters[0].hp = 50000;
enduranceSession.teamB.fighters[0].baseStats.maxHp = 50000;

let naturalDetonationCount = 0;
while (enduranceSession.winner === null && enduranceSession.turn < 50) {
  enduranceSession.stepTurn();
}

for (const log of enduranceSession.logs) {
  if (log.actorName === 'พญาจิ้งจอกเก้าหาง' && log.appliedEffects?.some(e => e.includes('ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย'))) {
    naturalDetonationCount++;
    console.log(`  ℹ [เทิร์น ${log.turn}] ระเบิดลูกแก้วตามธรรมชาติสำเร็จ: "${log.appliedEffects.find(e => e.includes('ระเบิดพลังลูกแก้ว'))}"`);
  }
}
console.log(`  ℹ จำนวนครั้งที่สะสมครบ 4 ลูกแล้วจุดระเบิดตามธรรมชาติในไฟต์ยาว (50 เทิร์น): ${naturalDetonationCount} ครั้ง`);
assert(naturalDetonationCount > 0, 'พญาจิ้งจอกเก้าหางสามารถสะสมลูกแก้วจนครบ 4 ลูกแล้วจุดระเบิดตามธรรมชาติได้สำเร็จ');

// 3. ตรวจสอบ Signature Effect: sp_drain (ตัด SP ศัตรู -30)
console.log('\n【 3. ตรวจสอบ Signature Effect: sp_drain -30 SP 】');
const dummyTarget = createFighter('lion', undefined, 1, 1);
dummyTarget.sp = 50;

const spDrainRes = applyEffectToTarget(dummyTarget, { type: 'sp_drain', value: 30 }, true);
console.log(`  ℹ ผลลัพธ์ sp_drain: "${spDrainRes}" | SP เหลือ: ${dummyTarget.sp}/50`);
assert(Boolean(spDrainRes && spDrainRes.includes('ตัด SP -30')), 'ข้อความระบุตัด SP -30 ถูกต้อง');
assert(dummyTarget.sp === 20, `SP ของเป้าหมายถูกตัด 30 แต้ม (${50} -> ${dummyTarget.sp})`);

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['nine_tailed_fox'];
assert(Boolean(sigDesc && sigDesc.includes('×4.3') && sigDesc.includes('เจาะเกราะ 25%') && sigDesc.includes('ตัด SP ศัตรู -30 SP')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['nine_tailed_fox'];
assert(Boolean(lore && lore.scientificName === 'Vulpes Spiritus Novem'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('พญาจิ้งจอกเก้าหาง')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 (BattleSession) 】');
let sigCastCount = 0;
let orbGainCount = 0;
let confusionRetaliateCount = 0;
let spDrainCount = 0;
let ignoreDefCount = 0;
let orbDetonationCount1v1 = 0;

for (let i = 0; i < 35; i++) {
  // ใช้ศัตรูที่มี HP สูง (behemoth) เพื่อให้ไฟต์ยาวนานพอที่จะสะสมลูกแก้วครบ 4 ลูกตามธรรมชาติ
  const session1v1 = new BattleSession(['nine_tailed_fox'], ['behemoth'], {
    enableSkillEffects: true,
    enableAbilities: true,
    maxTurns: 35,
  });
  session1v1.runToEnd();

  for (const log of session1v1.logs) {
    if (log.actorName === 'พญาจิ้งจอกเก้าหาง') {
      if (log.actionType === 'signature') {
        sigCastCount++;
      }
      if (log.appliedEffects?.some(e => e.includes('สะสมลูกแก้วจิตวิญญาณ'))) {
        orbGainCount++;
      }
      if (log.appliedEffects?.some(e => e.includes('เจาะเกราะ 25%') || e.includes('Ignore DEF 25%'))) {
        ignoreDefCount++;
      }
      if (log.appliedEffects?.some(e => e.includes('ตัด SP -30') || e.includes('ตัด SP'))) {
        spDrainCount++;
      }
      if (log.appliedEffects?.some(e => e.includes('ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย'))) {
        orbDetonationCount1v1++;
      }
    }
    // สับสนสะท้อนกลับเมื่อถูกโจมตี
    if (log.appliedEffects?.some(e => e.includes('ลูกแก้วสะกดจิตสะท้อนใส่'))) {
      confusionRetaliateCount++;
    }
  }
}

console.log(`  ℹ ผลลัพธ์ 35 ไฟต์ vs Behemoth (1v1):`);
console.log(`    - ออกท่าไม้ตาย [เก้าหางสะกดวิญญาณ]: ${sigCastCount} ครั้ง`);
console.log(`    - เจาะเกราะ 25% ทำงาน: ${ignoreDefCount} ครั้ง`);
console.log(`    - เอฟเฟกต์ตัด SP ทำงาน: ${spDrainCount} ครั้ง`);
console.log(`    - สะสมลูกแก้วจิตวิญญาณ (Ability): ${orbGainCount} ครั้ง`);
console.log(`    - สับสนสะท้อนกลับ (35% Retaliation Confusion): ${confusionRetaliateCount} ครั้ง`);
console.log(`    - ระเบิดลูกแก้ว 4 ลูกมหาประลัย (20% Detonation): ${orbDetonationCount1v1} ครั้ง`);

assert(sigCastCount > 0, `พญาจิ้งจอกเก้าหางออกท่าไม้ตายสำเร็จ (${sigCastCount} ครั้ง)`);
assert(ignoreDefCount > 0, `ท่าไม้ตายเจาะเกราะ 25% ทำงานสำเร็จ (${ignoreDefCount} ครั้ง)`);
assert(spDrainCount > 0, `ท่าไม้ตายตัด SP -30 ทำงานสำเร็จ (${spDrainCount} ครั้ง)`);
assert(orbGainCount > 0, `Ability สะสมลูกแก้วจิตวิญญาณทำงานสำเร็จ (${orbGainCount} ครั้ง)`);
assert(confusionRetaliateCount > 0, `Ability สับสนสะท้อนกลับ 35% ทำงานสำเร็จ (${confusionRetaliateCount} ครั้ง)`);

// 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession)
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession) 】');
let teamOrbGainCount = 0;
let teamRetaliateCount = 0;
let teamSigCount = 0;
let teamDetonationCount = 0;

for (let i = 0; i < 20; i++) {
  const session2v2 = new TeamBattleSession(
    ['nine_tailed_fox', 'solar_griffin'],
    ['cerberus', 'leviathan'],
    {
      enableSkillEffects: true,
      enableAbilities: true,
      maxTurns: 40,
    }
  );
  session2v2.runToEnd();

  for (const log of session2v2.logs) {
    if (log.actorName === 'พญาจิ้งจอกเก้าหาง') {
      if (log.actionType === 'signature') teamSigCount++;
      if (log.appliedEffects?.some(e => e.includes('สะสมลูกแก้วจิตวิญญาณ'))) teamOrbGainCount++;
      if (log.appliedEffects?.some(e => e.includes('ระเบิดพลังลูกแก้วจิตวิญญาณ 4 ลูกมหาประลัย'))) teamDetonationCount++;
    }
    if (log.appliedEffects?.some(e => e.includes('ลูกแก้วสะกดจิตสะท้อนใส่'))) {
      teamRetaliateCount++;
    }
  }
}

console.log(`  ℹ ผลลัพธ์ 20 ไฟต์ (2v2):`);
console.log(`    - ท่าไม้ตาย [เก้าหางสะกดวิญญาณ] ในโหมดทีม: ${teamSigCount} ครั้ง`);
console.log(`    - สะสมลูกแก้วจิตวิญญาณในโหมดทีม: ${teamOrbGainCount} ครั้ง`);
console.log(`    - สับสนสะท้อนกลับในโหมดทีม: ${teamRetaliateCount} ครั้ง`);
console.log(`    - ระเบิดลูกแก้ว 4 ลูกมหาประลัยในโหมดทีม: ${teamDetonationCount} ครั้ง`);

assert(teamSigCount > 0, `พญาจิ้งจอกเก้าหางออกท่าไม้ตายใน 2v2 สำเร็จ (${teamSigCount} ครั้ง)`);
assert(teamOrbGainCount > 0, `สะสมลูกแก้วจิตวิญญาณใน 2v2 สำเร็จ (${teamOrbGainCount} ครั้ง)`);
assert(teamRetaliateCount > 0, `สับสนสะท้อนกลับใน 2v2 สำเร็จ (${teamRetaliateCount} ครั้ง)`);

console.log('\n======================================================================');
console.log('  🎉 การทดสอบฮีโร่ พญาจิ้งจอกเก้าหาง (Nine-Tailed Fox) สำเร็จครบถ้วน 100%!');
console.log('======================================================================\n');
