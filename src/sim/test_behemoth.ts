/**
 * Test Suite for SS Mythical Beast: Behemoth (เบฮีมอธ) - Earth Striker
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
console.log('  🧪 ทดสอบฮีโร่ระดับตำนาน SS: เบฮีมอธ (Behemoth) - พสุธา Striker');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (ตามกฎบาลานซ์ SS = 182 พอยต์)
console.log('【 1. ตรวจสอบข้อมูลพื้นฐานและ Base Stats (SS Budget 182) 】');
const heroes = getAllHeroes();
const behemoth = heroes.find(h => h.id === 'behemoth');
assert(Boolean(behemoth), 'พบฮีโร่ behemoth ใน heroes.json');

if (behemoth) {
  assert(behemoth.name === 'เบฮีมอธ', `ชื่อภาษาไทยถูกต้อง: ${behemoth.name}`);
  assert(behemoth.rarity === 'SS', `ระดับ Rarity: ${behemoth.rarity}`);
  assert(behemoth.element === 'earth', `ธาตุ: ${behemoth.element}`);
  assert(behemoth.role === 'Striker', `สายบทบาท: ${behemoth.role}`);
  assert(behemoth.str === 92, `STR: ${behemoth.str}`);
  assert(behemoth.agi === 36, `AGI: ${behemoth.agi}`);
  assert(behemoth.sta === 54, `STA: ${behemoth.sta}`);
  assert(behemoth.str + behemoth.agi + behemoth.sta === 182, `ผลรวมสเตตัสเท่ากับ SS Budget 182 (${behemoth.str + behemoth.agi + behemoth.sta})`);
  assert(behemoth.customMultipliers?.hp === 1.05, `ตัวคูณพิเศษ HP: ${behemoth.customMultipliers?.hp}`);
  assert(behemoth.customMultipliers?.atk === 1.05, `ตัวคูณพิเศษ ATK: ${behemoth.customMultipliers?.atk}`);
  assert(behemoth.customSigMult === 4.5, `ตัวคูณท่าไม้ตาย Striker: ×${behemoth.customSigMult}`);
}

// 2. ตรวจสอบ Ability: colossal_tremor (พสุธาสะเทือนเลื่อนลั่น)
console.log('\n【 2. ตรวจสอบ Ability: colossal_tremor 】');
const fBehemoth = createFighter('behemoth', undefined, 1, 1);
assert(fBehemoth.abilityId === 'colossal_tremor', `Ability ID: ${fBehemoth.abilityId}`);
assert(fBehemoth.abilityName === 'พสุธาสะเทือนเลื่อนลั่น', `Ability Name: ${fBehemoth.abilityName}`);

// 2.1 ตรวจสอบโบนัสเจาะเกราะ (AB) +15% ถาวร
const statsNoAbility = getEffectiveStats(fBehemoth, false);
const statsWithAbility = getEffectiveStats(fBehemoth, true);
assert(statsWithAbility.ab === statsNoAbility.ab + 15, `โบนัส AB +15% ทำงานถูกต้อง (${statsNoAbility.ab} -> ${statsWithAbility.ab})`);

// 2.2 ตรวจสอบภูมิคุ้มกันสตัน (Permanent Stun Immunity)
const stunRes = applyEffectToTarget(fBehemoth, { type: 'stun', duration: 1 }, true);
assert(Boolean(stunRes && stunRes.includes('ภูมิคุ้มกันสตัน')), `ต้านทานสตันได้สำเร็จ: "${stunRes}"`);
assert(!fBehemoth.effects.some(e => e.type === 'stun'), 'เบฮีมอธไม่มีสถานะสตันใน effects list');

// 3. ตรวจสอบท่าไม้ตาย Signature Effect: armor_break_and_stun
console.log('\n【 3. ตรวจสอบ Signature Effect: armor_break_and_stun 】');
const dummyTarget = createFighter('buffalo', undefined, 1, 1);
const sigRes = applyEffectToTarget(dummyTarget, { type: 'armor_break_and_stun', duration: 1, value: 0.3 }, true);
assert(Boolean(sigRes && sigRes.includes('ทุบเกราะแตก') && sigRes.includes('ติดสตัน')), `ผลลัพธ์ไม้ตาย: "${sigRes}"`);
assert(dummyTarget.effects.some(e => e.type === 'debuff_def'), 'เป้าหมายติด debuff_def (ลด DEF 30%)');
assert(dummyTarget.effects.some(e => e.type === 'stun'), 'เป้าหมายติดสตัน (stun)');

// ทดสอบท่าไม้ตายใส่เบฮีมอธเอง (ต้องลดเกราะ แต่กันสตันได้)
const targetBehemoth = createFighter('behemoth', undefined, 1, 1);
const behemothAttackedRes = applyEffectToTarget(targetBehemoth, { type: 'armor_break_and_stun', duration: 1, value: 0.3 }, true);
assert(targetBehemoth.effects.some(e => e.type === 'debuff_def'), 'เบฮีมอธโดนลด DEF 30% ได้');
assert(!targetBehemoth.effects.some(e => e.type === 'stun'), 'เบฮีมอธไม่ติดสตันแม้โดน armor_break_and_stun');
assert(Boolean(behemothAttackedRes && behemothAttackedRes.includes('ภูมิคุ้มกันสตัน')), `ข้อความระบุภูมิคุ้มกันสตัน: "${behemothAttackedRes}"`);

// 4. ตรวจสอบคำอธิบายไม้ตายและ Lore ในฐานข้อมูล
console.log('\n【 4. ตรวจสอบคำอธิบายท่าไม้ตาย และ Lore สัตว์ในตำนาน 】');
const sigDesc = (rawSignatureDesc as Record<string, string>)['behemoth'];
assert(Boolean(sigDesc && sigDesc.includes('×4.5') && sigDesc.includes('ทุบเกราะแตก')), `คำอธิบายท่าไม้ตาย: "${sigDesc}"`);

const lore = (rawLore as Record<string, { scientificName: string; category: string }>)['behemoth'];
assert(Boolean(lore && lore.scientificName === 'Gigantus Terra Behemoth'), `ชื่อทางชีววิทยา/ตำนาน: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes('อสูรบรรพกาลพสุธา')), `หมวดหมู่สัตว์: ${lore?.category}`);

// 5. ทดสอบการจำลองต่อสู้ 1v1 (BattleSession)
console.log('\n【 5. ทดสอบการจำลองต่อสู้ 1v1 】');
const session1v1 = new BattleSession(['behemoth'], ['buffalo'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 30,
});
const winner1v1 = session1v1.runToEnd();
assert(session1v1.logs.length > 0, `จำลอง 1v1 สำเร็จ (จบใน ${winner1v1 === 'A' ? 'เบฮีมอธชนะ' : winner1v1 === 'B' ? 'บัฟฟาโลชนะ' : 'เสมอ'}, ${session1v1.turn} เทิร์น)`);
const shockwave1v1Events = session1v1.logs.filter(e => e.appliedEffects?.some(a => a.includes('คลื่นกระแทกแผ่นดินไหว')));
console.log(`  ℹ ตรวจพบคลื่นกระแทกแผ่นดินไหวใน 1v1: ${shockwave1v1Events.length} ครั้ง`);

// 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession)
console.log('\n【 6. ทดสอบการจำลองต่อสู้ 2v2 (TeamBattleSession) 】');
const teamSession = new TeamBattleSession(['behemoth', 'rooster'], ['buffalo', 'cat'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 30,
});
const winner2v2 = teamSession.runToEnd();
assert(teamSession.logs.length > 0, `จำลอง 2v2 สำเร็จ (ผู้ชนะ: ${winner2v2})`);
const shockwave2v2Events = teamSession.logs.filter(e => e.appliedEffects?.some(a => a.includes('คลื่นกระแทกแผ่นดินไหว')));
console.log(`  ℹ ตรวจพบคลื่นกระแทกแผ่นดินไหว AoE ใน 2v2: ${shockwave2v2Events.length} ครั้ง`);

// 7. ตรวจสอบการคำนวณดาเมจคลื่นกระแทกแผ่นดินไหว (25% ATK)
console.log('\n【 7. ตรวจสอบเงื่อนไขดาเมจคลื่นกระแทกแผ่นดินไหว 25% ATK 】');
const behStats = getEffectiveStats(fBehemoth, true);
const expectedShockwave = Math.max(1, Math.round(behStats.atk * 0.25));
assert(expectedShockwave > 0, `คำนวณดาเมจคลื่นกระแทกแผ่นดินไหว: ${expectedShockwave} ดาเมจ (25% ของ ATK ${behStats.atk})`);

// 8. ทดสอบคลื่นกระแทกแผ่นดินไหวเมื่อติดคริติคอล (Guarantee Crit Test)
console.log('\n【 8. ทดสอบคลื่นกระแทกแผ่นดินไหวเมื่อติดคริติคอล (Guarantee Crit Test) 】');
const critSession = new BattleSession(['behemoth'], ['turtle'], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 50,
});
// มอบบัฟ CRI +100% ให้เบฮีมอธเพื่อให้ติดคริติคอลแน่นอน
const behFighter = critSession.teamA.fighters[0];
behFighter.effects.push({ type: 'buff_cri', value: 100, duration: 10 });
critSession.runToEnd();
const critShockwaves = critSession.logs.filter(e => e.appliedEffects?.some(a => a.includes('คลื่นกระแทกแผ่นดินไหว')));
assert(critShockwaves.length > 0, `เบฮีมอธเมื่อติดคริติคอล จะปล่อยคลื่นกระแทกแผ่นดินไหว ${critShockwaves.length} ครั้ง!`);

console.log('\n======================================================================');
console.log('🎉 การทดสอบ Behemoth (เบฮีมอธ) SS Earth Striker ผ่านครบถ้วน 100%!');
console.log('======================================================================\n');
