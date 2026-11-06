/**
 * Test script for SaveManager (Phase 2 - Task 2.1)
 * รันด้วย esbuild และ node เพื่อตรวจสอบความถูกต้องของระบบเซฟ, คลังไอเทม, และ Progression
 */

import { saveManager, EGG_CONFIG, getLevelUpCost, STAR_UPGRADE_COSTS } from '../engine/save_manager';
import { computeHeroStats, createFighter } from '../engine/combat';
import { createTeamFighter, TeamBattleSession } from '../engine/team_combat';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${msg}`);
    process.exit(1);
  }
  console.log(`  ✓ ${msg}`);
}

console.log('======================================================================');
console.log('  ทดสอบระบบ SaveManager, คลังไอเทม และ Progression (Phase 2 - Task 2.1)  ');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลเริ่มต้น (Starter Data)
console.log('【 1. ตรวจสอบ Starter Kit ผู้เล่นใหม่ 】');
const starter = saveManager.reset();
assert(starter.playerLevel === 1, 'เลเวลเริ่มต้นของผู้เล่นคือ 1');
assert(starter.inventory.gold === 1500, 'เหรียญเริ่มต้น 1,500 Gold');
assert(starter.inventory.crystals === 150, 'คริสตัลเริ่มต้น 150 Crystals');
assert(starter.inventory.food === 800, 'เสบียงเริ่มต้น 800 Food');
assert(starter.inventory.normalEggs === 2, 'มีไข่ธรรมดาเริ่มต้น 2 ฟอง');
assert(starter.inventory.goldEggs === 1, 'มีไข่ทองเริ่มต้น 1 ฟอง');
assert(Object.keys(starter.ownedHeroes).length === 3, 'มีฮีโร่เริ่มต้น 3 ตัว (ไก่, แมว, ควาย)');
assert(Boolean(starter.ownedHeroes['rooster']), 'มี ไก่ (rooster - Fire Striker)');
assert(Boolean(starter.ownedHeroes['cat']), 'มี แมว (cat - Wind Assassin)');
assert(Boolean(starter.ownedHeroes['buffalo']), 'มี ควาย (buffalo - Earth Tank)');
assert(starter.ownedHeroes['rooster'].customSkills[0] === 'fire_s', 'ไก่มีสกิลประจำธาตุ fire_s ระดับ S ติดตั้งเริ่มต้น');
assert(starter.ownedHeroes['cat'].customSkills[0] === 'wind_s', 'แมวมีสกิลประจำธาตุ wind_s ระดับ S ติดตั้งเริ่มต้น');
assert(starter.ownedHeroes['buffalo'].customSkills[0] === 'earth_s', 'ควายมีสกิลประจำธาตุ earth_s ระดับ S ติดตั้งเริ่มต้น');
assert(starter.unlockedSkills.length >= 16, 'ปลดล็อกสกิลแรก (Tier S) ของทั้ง 16 สายวิชาเริ่มต้นครบถ้วน');
assert(starter.unlockedStages.includes('stage_1_1'), 'ด่านแรก stage_1_1 ปลดล็อกแล้ว');

// 2. ตรวจสอบการจัดการทรัพยากร (Resource Management)
console.log('\n【 2. ตรวจสอบการเพิ่มและหักลบทรัพยากร 】');
saveManager.addGold(500);
assert(saveManager.getData().inventory.gold === 2000, 'เพิ่ม Gold +500 สำเร็จ (รวม 2,000)');

saveManager.addFood(200);
assert(saveManager.getData().inventory.food === 1000, 'เพิ่ม Food +200 สำเร็จ (รวม 1,000)');

const canConsume = saveManager.consumeResources({ gold: 300, food: 200 });
assert(canConsume === true, 'หักลบ Gold 300 และ Food 200 สำเร็จ');
assert(saveManager.getData().inventory.gold === 1700, 'Gold คงเหลือ 1,700');
assert(saveManager.getData().inventory.food === 800, 'Food คงเหลือ 800');

const failConsume = saveManager.consumeResources({ crystals: 99999 });
assert(failConsume === false, 'ป้องกันการหักลบทรัพยากรเกินจำนวนที่มีอยู่');
assert(saveManager.getData().inventory.crystals === 150, 'คริสตัลคงเดิม ไม่ถูกหักลบเมื่อไม่พอ');

// 3. ตรวจสอบการอัปเลเวลและอัปดาว (Hero Progression)
console.log('\n【 3. ตรวจสอบการอัปเลเวลและอัปดาว (Level & Star Awakening) 】');
const catBefore = saveManager.getData().ownedHeroes['cat'];
assert(catBefore.level === 1, 'แมวเริ่มต้นที่ Level 1');

const lvlCost = getLevelUpCost(1);
assert(lvlCost.food === 80 && lvlCost.gold === 40, 'ค่าใช้จ่ายอัปจาก Lv.1 -> Lv.2 คือ 80 Food, 40 Gold');

const lvlRes = saveManager.levelUpHero('cat');
assert(lvlRes.success === true && lvlRes.newLevel === 2, 'อัปเลเวลแมวเป็น Level 2 สำเร็จ');
assert(saveManager.getData().ownedHeroes['cat'].level === 2, 'สถานะในเซฟของแมวเป็น Level 2');

// ตรวจสอบสเตตัสที่เพิ่มขึ้นจากเลเวล
const statsLv1 = computeHeroStats('cat', 1, 1);
const statsLv2 = computeHeroStats('cat', 2, 1);
assert(statsLv2.maxHp > statsLv1.maxHp, `HP เพิ่มขึ้นตามเลเวล: Lv.1 (${Math.round(statsLv1.maxHp)}) -> Lv.2 (${Math.round(statsLv2.maxHp)})`);
assert(statsLv2.atk > statsLv1.atk, `ATK เพิ่มขึ้นตามเลเวล: Lv.1 (${Math.round(statsLv1.atk)}) -> Lv.2 (${Math.round(statsLv2.atk)})`);

// ทดสอบการอัปดาว
saveManager.addShards('cat', 25);
assert((saveManager.getData().inventory.shards['cat'] || 0) === 25, 'เพิ่มเศษวิญญาณแมว +25 ชิ้น');
const starRes = saveManager.starUpHero('cat');
assert(starRes.success === true && starRes.newStars === 2, 'อัปดาวแมวเป็น 2 ดาว (★2) สำเร็จ (ใช้ 20 เศษวิญญาณ)');
assert(saveManager.getData().inventory.shards['cat'] === 5, 'เศษวิญญาณคงเหลือ 5 ชิ้น');

const statsStar2 = computeHeroStats('cat', 2, 2);
assert(statsStar2.maxHp > statsLv2.maxHp, `HP เพิ่มขึ้นจากโบนัสดาว ★2: ${Math.round(statsLv2.maxHp)} -> ${Math.round(statsStar2.maxHp)} (+5%)`);

// 4. ตรวจสอบตู้ฟักไข่ (Incubator & Hatching System)
console.log('\n【 4. ตรวจสอบตู้ฟักไข่และการสุ่มฮีโร่ 】');
const placeRes = saveManager.placeEgg(0, 'normal');
assert(placeRes.success === true, 'นำไข่ธรรมดาเข้าช่องฟัก 0 สำเร็จ');
assert(saveManager.getData().inventory.normalEggs === 1, 'ไข่ธรรมดาในกระเป๋าลดลงเหลือ 1 ฟอง');
assert(saveManager.isEggReady(0) === false, 'ไข่เพิ่งวางยังไม่พร้อมฟักทันที');

// ใช้พลังอบอุ่นเร่งเวลา
saveManager.applyWarmth(0, 2);
assert(saveManager.getData().inventory.warmth === 28, 'ใช้พลังอบอุ่น 2 แต้ม (ลดเวลา 20 นาที)');

// ฟักทันที (โหมดทดสอบ)
saveManager.instantHatchSlot(0);
assert(saveManager.isEggReady(0) === true, 'ไข่พร้อมฟักแล้วหลังเร่งเวลา');

const hatchRes = saveManager.hatchEgg(0);
assert(hatchRes.success === true && Boolean(hatchRes.hero), `กะเทาะไข่สำเร็จ! ได้รับฮีโร่: [${hatchRes.hero?.heroId}] (ตัวใหม่: ${hatchRes.isNew})`);
assert(Boolean(hatchRes.hero && hatchRes.hero.customSkills.length === 1 && hatchRes.hero.customSkills[0].endsWith('_s')), `สัตว์เลี้ยงที่ฟักออกมาใหม่มีสกิลเริ่มต้นประจำธาตุ 1 สกิลระดับ S (${hatchRes.hero?.customSkills[0]})`);
assert(saveManager.getData().incubatorSlots[0] === null, 'ช่องฟัก 0 ว่างลงพร้อมรับไข่ใบถัดไป');

// 5. ตรวจสอบความเข้ากันได้กับการต่อสู้ (Combat Compatibility)
console.log('\n【 5. ตรวจสอบความเข้ากันได้กับระบบ Combat 1v1 และ 2v2 】');
const fighterLv2 = createFighter('cat', undefined, 2, 2);
assert(fighterLv2.baseStats.maxHp === statsStar2.maxHp, 'createFighter คำนวณสเตตัสตรงกับ Progression');

const teamFighter = createTeamFighter('cat', 'A', 0, { row: 'mid', col: 1 }, undefined, 2, 2);
assert(teamFighter.pos.row === 'mid', 'createTeamFighter วางตำแหน่งถูกต้อง');
assert(teamFighter.roleAffinityActive === true, 'ได้รับโบนัส Role Affinity ในกระดาน 3x3');

// ทดสอบการจำลองต่อสู้ทีม 2v2 โดยส่ง Progression levels & stars
const session = new TeamBattleSession(['cat', 'rooster'], ['buffalo', 'snail'], {
  teamALevels: [2, 1],
  teamAStars: [2, 1],
  teamBLevels: [1, 1],
  teamBStars: [1, 1],
});
let turns = 0;
while (!session.winner && turns < 20) {
  session.stepRound();
  turns++;
}
assert(Boolean(session.winner), `การต่อสู้ 2v2 ด้วยยูนิตที่มี Progression จบลงสำเร็จ (ผู้ชนะ: ${session.winner}, ในรอบที่: ${session.round})`);

// 6. ตรวจสอบระบบด่านผจญภัย
console.log('\n【 6. ตรวจสอบการบันทึกผลด่านผจญภัย (Campaign Clear) 】');
saveManager.recordStageClear('stage_1_1', 3, {
  gold: 200,
  food: 150,
  crystals: 20,
  egg: 'normal',
  unlockedNextStageId: 'stage_1_2',
});

const stageRecord = saveManager.getData().clearedStages['stage_1_1'];
assert(stageRecord && stageRecord.stars === 3, 'บันทึกผ่านด่าน stage_1_1 ได้ 3 ดาว');
assert(saveManager.getData().unlockedStages.includes('stage_1_2'), 'ปลดล็อกด่าน stage_1_2 เรียบร้อยแล้ว');
assert(saveManager.getData().inventory.normalEggs === 2, 'ได้รับรางวัลไข่ธรรมดาเพิ่ม +1 ฟองเข้ากระเป๋า');

console.log('\n======================================================================');
console.log('🎉 ทุกการทดสอบของระบบ SaveManager (Phase 2 - Task 2.1) ผ่านฉลุย 100%!');
console.log('======================================================================\n');

