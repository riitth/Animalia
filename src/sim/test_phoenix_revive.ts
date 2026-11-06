/**
 * Test Suite for Phoenix (ฟีนิกซ์) Ability Update: Rebirth from Ashes
 * ปรับปรุง Ability: เมื่อได้รับดาเมจถึงตายครั้งแรกในไฟต์ ฟื้นคืนชีพ 100% (โอกาส 80% HP เต็ม, มิฉะนั้น 60% HP)
 */

import { getAllHeroes, BattleSession, createFighter } from '../engine/combat';
import { TeamBattleSession } from '../engine/team_combat';

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`  ✓ ${message}`);
}

console.log('======================================================================');
console.log('  🧪 ทดสอบการปรับปรุง Ability ของฟีนิกซ์ (Phoenix Rebirth from Ashes)');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลใน heroes.json
console.log('【 1. ตรวจสอบ Ability Description ใน heroes.json 】');
const heroes = getAllHeroes();
const phoenix = heroes.find(h => h.id === 'phoenix');
assert(Boolean(phoenix), 'พบฮีโร่ phoenix ใน heroes.json');
assert(Boolean(phoenix?.ability), 'phoenix มีข้อมูล ability');
assert(phoenix?.ability?.id === 'rebirth_ashes', `Ability ID: ${phoenix?.ability?.id}`);
assert(Boolean(phoenix?.ability?.description.includes('ฟื้นคืนชีพ 100%')), 'คำอธิบายระบุฟื้นคืนชีพ 100%');
assert(Boolean(phoenix?.ability?.description.includes('80% ฟื้นคืนชีพด้วย HP เต็มหลอด')), 'คำอธิบายระบุโอกาส 80% ฟื้น HP เต็มหลอด');
assert(Boolean(phoenix?.ability?.description.includes('60% ของ Max HP')), 'คำอธิบายระบุหากไม่สำเร็จฟื้น 60%');

// 2. ทดสอบในระบบต่อสู้ 1v1 (BattleSession)
console.log('\n【 2. ทดสอบการฟื้นคืนชีพ 100% และปริมาณ HP ในโหมด 1v1 】');
let fullHpCount1v1 = 0;
let partialHpCount1v1 = 0;
const trials1v1 = 100;

for (let i = 0; i < trials1v1; i++) {
  const session = new BattleSession(['phoenix'], ['rooster'], {
    enableAbilities: true,
    enableSkillEffects: true,
  });

  const pFighter = session.teamA.fighters[0];
  // แปะดีบัฟเพื่อทดสอบการล้างดีบัฟเมื่อฟื้นคืนชีพ
  pFighter.effects.push({ type: 'debuff_atk', value: 0.20, duration: 2 });
  pFighter.effects.push({ type: 'poison', duration: 3, stacks: 1 });

  // สร้างสถานการณ์รับดาเมจถึงตาย (Lethal Damage)
  pFighter.hp = 0;
  // เรียก checkKoAndBackup ผ่าน private access
  (session as unknown as { checkKoAndBackup: (team: unknown, ev: unknown[]) => void }).checkKoAndBackup(session.teamA, session.logs);

  // ตรวจสอบว่าฟื้นคืนชีพแน่นอน 100% (hp ต้อง > 0 และ reviveUsed เป็น true)
  if (pFighter.hp <= 0 || !pFighter.reviveUsed) {
    assert(false, `รอบที่ ${i + 1}: ฟีนิกซ์ไม่ฟื้นคืนชีพ! (HP: ${pFighter.hp}, reviveUsed: ${pFighter.reviveUsed})`);
  }

  // ตรวจสอบว่าดีบัฟ debuff_atk และ poison ถูกล้างออก
  const hasDebuff = pFighter.effects.some(e => e.type === 'debuff_atk' || e.type === 'poison');
  assert(!hasDebuff, 'ดีบัฟถูกลบล้างทั้งหมดหลังฟื้นคืนชีพ');
  assert(pFighter.effects.some(e => e.type === 'fire_skin'), 'ยังคงมีสถานะผิวกายเพลิง fire_skin');

  // ตรวจสอบจำนวน HP ที่ฟื้นขึ้นมา: 100% หรือ 60%
  const maxHp = pFighter.baseStats.maxHp;
  const isFull = Math.abs(pFighter.hp - maxHp) <= 1;
  const isSixty = Math.abs(pFighter.hp - Math.round(maxHp * 0.60)) <= 1;

  if (isFull) {
    fullHpCount1v1++;
  } else if (isSixty) {
    partialHpCount1v1++;
  } else {
    assert(false, `HP ที่ฟื้นคืนชีพไม่ถูกต้อง: ${pFighter.hp} (Max: ${maxHp})`);
  }

  // ทดสอบดาเมจถึงตายครั้งที่สอง (ต้องไม่ฟื้นคืนชีพอีก)
  pFighter.hp = 0;
  (session as unknown as { checkKoAndBackup: (team: unknown, ev: unknown[]) => void }).checkKoAndBackup(session.teamA, session.logs);
  assert(pFighter.hp === 0, 'เมื่อตายครั้งที่สอง จะไม่ฟื้นคืนชีพซ้ำ (HP ยังคงเป็น 0)');
}

console.log(`  ✓ ฟื้นคืนชีพ 100% ทั้งหมด ${trials1v1}/${trials1v1} ครั้ง (ไร้การตายในการโดนดาเมจถึงตายครั้งแรก)`);
console.log(`  ✓ ฟื้นคืนชีพด้วย HP 100% เต็มหลอด: ${fullHpCount1v1}/${trials1v1} ครั้ง (~${fullHpCount1v1}%)`);
console.log(`  ✓ ฟื้นคืนชีพด้วย HP 60%: ${partialHpCount1v1}/${trials1v1} ครั้ง (~${partialHpCount1v1}%)`);
assert(fullHpCount1v1 > 60 && fullHpCount1v1 < 95, `อัตราการได้ HP เต็มหลอดอยู่ในช่วงประมาณ 80% (ได้ ${fullHpCount1v1}%)`);
assert(partialHpCount1v1 > 5 && partialHpCount1v1 < 40, `อัตราการได้ HP 60% อยู่ในช่วงประมาณ 20% (ได้ ${partialHpCount1v1}%)`);

// 3. ทดสอบในระบบต่อสู้ 2v2 (TeamBattleSession)
console.log('\n【 3. ทดสอบการฟื้นคืนชีพในระบบทีม 2v2 (TeamBattleSession) 】');
let fullHpCount2v2 = 0;
let partialHpCount2v2 = 0;
const trials2v2 = 100;

for (let i = 0; i < trials2v2; i++) {
  const teamSession = new TeamBattleSession(['phoenix', 'rooster'], ['buffalo', 'cat'], {
    enableAbilities: true,
    enableSkillEffects: true,
  });

  const pFighter = teamSession.squadA.fighters[0]; // phoenix
  pFighter.effects.push({ type: 'slow', duration: 2 });

  // โจมตีดาวน์ดาเมจมหาศาลผ่าน applyDamageToTarget
  (teamSession as unknown as { applyDamageToTarget: (target: unknown, dmg: number) => void }).applyDamageToTarget(pFighter, 99999);

  // ต้องฟื้นคืนชีพแน่นอน 100%
  assert(pFighter.hp > 0, `รอบที่ ${i + 1} ใน 2v2: ฟีนิกซ์ฟื้นคืนชีพสำเร็จ HP > 0 (${pFighter.hp})`);
  assert(pFighter.reviveUsed === true, 'ฟีนิกซ์บันทึก reviveUsed = true');
  assert(!pFighter.effects.some(e => e.type === 'slow'), 'ล้างดีบัฟสโลว์ออกสำเร็จ');
  assert(pFighter.effects.some(e => e.type === 'fire_skin'), 'คงสถานะ fire_skin');

  const maxHp = pFighter.baseStats.maxHp;
  const isFull = Math.abs(pFighter.hp - maxHp) <= 1;
  const isSixty = Math.abs(pFighter.hp - Math.round(maxHp * 0.60)) <= 1;

  if (isFull) {
    fullHpCount2v2++;
  } else if (isSixty) {
    partialHpCount2v2++;
  } else {
    assert(false, `2v2 HP ที่ฟื้นคืนชีพไม่ถูกต้อง: ${pFighter.hp} (Max: ${maxHp})`);
  }

  // ตายครั้งที่ 2
  (teamSession as unknown as { applyDamageToTarget: (target: unknown, dmg: number) => void }).applyDamageToTarget(pFighter, 99999);
  assert(pFighter.hp === 0, '2v2: ตายครั้งที่ 2 ไม่ฟื้นคืนชีพอีก');
}

console.log(`  ✓ ฟื้นคืนชีพ 100% ใน 2v2 ทั้งหมด ${trials2v2}/${trials2v2} ครั้ง`);
console.log(`  ✓ ใน 2v2 ฟื้น HP เต็มหลอด: ${fullHpCount2v2}/${trials2v2} ครั้ง (~${fullHpCount2v2}%)`);
console.log(`  ✓ ใน 2v2 ฟื้น HP 60%: ${partialHpCount2v2}/${trials2v2} ครั้ง (~${partialHpCount2v2}%)`);

// 4. ทดสอบการจำลองการต่อสู้จริงจนจบ (Full Combat Run)
console.log('\n【 4. ทดสอบจำลองการต่อสู้จริงจนจบด้วย Phoenix 】');
const sim1v1 = new BattleSession(['phoenix'], ['behemoth'], {
  enableAbilities: true,
  enableSkillEffects: true,
  maxTurns: 30,
});
const winner1v1 = sim1v1.runToEnd();
assert(sim1v1.logs.length > 0, `จำลอง 1v1 Phoenix vs Behemoth สำเร็จ (ผู้ชนะ: ${winner1v1})`);
const reviveEvent = sim1v1.logs.find(e => e.actionName === 'วิหคเพลิงคืนชีพ & ผิวกายเพลิง');
console.log(`  ℹ ตรวจพบคอมแบทล็อกการคืนชีพ: ${reviveEvent ? `"${reviveEvent.message}"` : 'ไม่พบ (อาจชนะก่อนตาย)'}`);

console.log('\n======================================================================');
console.log('🎉 การทดสอบการปรับปรุง Ability ของฟีนิกซ์ ผ่านฉลุยครบถ้วน 100%!');
console.log('======================================================================\n');
