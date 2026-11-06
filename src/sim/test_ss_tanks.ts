/**
 * test_ss_tanks.ts
 * การทดสอบความถูกต้องของสัตว์มายาสาย TANK ระดับ SS ครบ 11 ธาตุ (โดยเฉพาะเยติ Yeti และอีก 9 ตัวใหม่)
 */

import heroesData from '../data/heroes.json' with { type: 'json' };
import sigDescriptions from '../data/signature_descriptions.json' with { type: 'json' };
import animalLore from '../data/animal_lore.json' with { type: 'json' };
import { BattleSession, createFighter } from '../engine/combat.ts';
import { TeamBattleSession, createTeamFighter } from '../engine/team_combat.ts';
import { getFighterAvatarEmoji } from '../ui/battle_view.ts';

const HERO_MAP = new Map(heroesData.heroes.map(h => [h.id, h]));

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`  ❌ ล้มเหลว: ${msg}`);
    process.exit(1);
  }
  console.log(`  ✓ ${msg}`);
}

console.log('======================================================================');
console.log('  ทดสอบสัตว์มายาในตำนานระดับ SS สาย TANK ครบ 11 ธาตุ (SS Tank Suite)  ');
console.log('======================================================================\n');

const SS_TANK_IDS = [
  'xuanwu',       // ดิน
  'naga',         // น้ำ (ดั้งเดิม)
  'ziz',          // ลม
  'khalkotauroi', // ไฟ
  'erawan',       // สายฟ้า
  'yeti',         // น้ำแข็ง (ใหม่)
  'tarasque',     // พืช
  'karkinos',     // พิษ
  'ammut',        // ความมืด
  'nemean_lion',  // แสง
  'baku',         // พลังจิต
];

console.log('【 1. ตรวจสอบข้อมูลฮีโร่และ Class Budget (182 Points) 】');
for (const id of SS_TANK_IDS) {
  const hero = HERO_MAP.get(id);
  assert(!!hero, `พบข้อมูลฮีโร่ ${id} ในระบบ`);
  assert(hero!.rarity === 'SS', `${id} มีระดับความหายาก SS`);
  assert(hero!.role === 'Tank', `${id} มีบทบาท Role: Tank`);
  const statSum = hero!.str + hero!.agi + hero!.sta;
  assert(statSum === 182, `${id} มีสเตตัสรวม (STR ${hero!.str} + AGI ${hero!.agi} + STA ${hero!.sta}) = ${statSum} (ตรงกรอบ 182 พอยต์)`);
  assert(hero!.preferredRow === 'front', `${id} ยืนแถวหน้า preferredRow = 'front'`);
  assert(hero!.backlineChance === 0, `${id} backlineChance = 0`);
}

console.log('\n【 2. ตรวจสอบคำอธิบาย Signature และ Lore ทางชีววิทยา/ตำนาน 】');
for (const id of SS_TANK_IDS) {
  const sigDesc = (sigDescriptions as Record<string, string>)[id];
  assert(!!sigDesc && sigDesc.length > 5, `${id} มีคำอธิบายท่าไม้ตายใน signature_descriptions.json (${sigDesc})`);

  const lore = (animalLore as Record<string, any>)[id];
  assert(!!lore, `${id} มีบันทึก Lore ใน animal_lore.json`);
  assert(!!lore.scientificName, `${id} มีชื่อวิทยาศาสตร์: ${lore?.scientificName}`);
  assert(!!lore.category, `${id} มีหมวดหมู่: ${lore?.category}`);
  assert(!!lore.didYouKnow, `${id} มีเกร็ดความรู้ Did You Know`);
}

console.log('\n【 3. ตรวจสอบ Emoji ประจำตัวใน battle_view 】');
for (const id of SS_TANK_IDS) {
  const emoji = getFighterAvatarEmoji(id);
  assert(!!emoji && emoji !== '❓', `${id} มี Emoji ประจำตัว: ${emoji}`);
}

console.log('\n【 4. ตรวจสอบการทำงานของ "เยติ" (Yeti) ในการต่อสู้ 1v1 】');
const yetiFighter = createFighter('yeti');
assert(yetiFighter.id === 'yeti', 'สร้าง Fighter เยติ สำเร็จ');
assert(yetiFighter.element === 'ice', 'เยติเป็นธาตุน้ำแข็ง');
assert(yetiFighter.abilityId === 'abominable_resilience', 'เยติมี Ability: กายาอสูรหิมะดึกดำบรรพ์');
assert(yetiFighter.baseStats.maxHp > 1500, `เยติมี Max HP สูงสมฐานะ Tank (${yetiFighter.baseStats.maxHp})`);
assert(yetiFighter.baseStats.block >= 38, `เยติมีอัตราการบล็อกพื้นฐานสูง (${yetiFighter.baseStats.block}%)`);

// จำลองการต่อสู้ 1v1 ระหว่าง เยติ vs เบฮีมอธ
const session1v1 = new BattleSession(['yeti'], ['behemoth'], {
  enableAbilities: true,
  enableSkillEffects: true,
});
session1v1.teamA.autoCastSignature = true;
session1v1.teamB.autoCastSignature = true;
const winner1v1 = session1v1.runToEnd();
assert(winner1v1 === 'A' || winner1v1 === 'B', `การต่อสู้ 1v1 ระหว่างเยติกับเบฮีมอธจบลงด้วยผลลัพธ์: ทีม ${winner1v1} ชนะ (${session1v1.turn} เทิร์น)`);
assert(session1v1.logs.length > 5, `มีบันทึกเหตุการณ์การต่อสู้ ${session1v1.logs.length} เหตุการณ์`);

console.log('\n【 5. ตรวจสอบการต่อสู้แบบทีม 2v2 Tactical Arena (เสวียนอู่ + เยติ vs สิงโตเนเมีย + บาคุ) 】');
const session2v2 = new TeamBattleSession(
  ['xuanwu', 'yeti'],
  ['nemean_lion', 'baku'],
  {
    enableAbilities: true,
    enableSkillEffects: true,
    maxTurns: 40,
  }
);
const result2v2 = session2v2.runToEnd();
assert(result2v2 === 'A' || result2v2 === 'B' || result2v2 === 'DRAW', `การต่อสู้ 2v2 จบลงด้วยผลลัพธ์: ทีม ${result2v2} (${session2v2.round} รอบ)`);
assert(session2v2.logs.length > 5, `มีบันทึกการต่อสู้ 2v2 จำนวน ${session2v2.logs.length} เหตุการณ์`);

console.log('\n======================================================================');
console.log('  🎉 การทดสอบสัตว์มายา SS สาย TANK ครบ 11 ธาตุ ผ่านฉลุย 100%!        ');
console.log('======================================================================');
