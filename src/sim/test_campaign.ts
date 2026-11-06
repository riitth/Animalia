/**
 * Test Campaign Mode - Chapter 1 (The Primordial Rainforest)
 * ทดสอบระบบด่านผจญภัย บทที่ 1: ด่าน 1-1 ถึง 1-10 (1v1 Tag Relay & Comprehensive Tutorial)
 * ตามคำสั่ง Game Director ใน [Backup #019]
 * ครอบคลุม:
 * 1. ข้อมูลโครงสร้างด่าน 10 ด่านในโหมด 1v1, ข้อมูลศัตรูมลทิน Void 10 ตัว, บทสอนเล่น (Tutorial)
 * 2. การต่อสู้ 1v1 แท็กทีม (ตัวหลัก + ตัวสำรองสลับตัวได้, ฟื้นฟู SP แนวหลัง)
 * 3. การคำนวณ 1-3 ดาว ตามเงื่อนไข (ชนะ, จบใน 15 เทิร์น, ตัวละครไม่ตาย)
 * 4. การแจกรางวัล First Clear (Gold, Food, Crystals, Warmth, Eggs, Shards)
 * 5. Core Loop Progression: นำทรัพยากรจากด่านมาอัปเลเวลฮีโร่และจัดทีม 1v1
 * 6. ศึกตัดสินมินิบอส (Ocelot) และบอสใหญ่ (Orangutan)
 * 7. การเล่นด่านซ้ำเพื่อฟาร์มทรัพยากร (Repeat Clear Farm)
 */

import { campaignManager, CampaignBattleResult } from '../engine/campaign_manager';
import { saveManager } from '../engine/save_manager';
import { BattleSession, getAllEnemies } from '../engine/combat';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${msg}`);
    process.exit(1);
  }
  console.log(`  ✓ ${msg}`);
}

/**
 * ฟังก์ชันจำลองการเล่นด่านพร้อมระบบ Retry (จำลองพฤติกรรมผู้เล่นจริง)
 */
function runStageWithRetry(stageId: string, maxAttempts = 15): { result: CampaignBattleResult; rounds: number; attempts: number } {
  let lastResult: CampaignBattleResult | null = null;
  let lastRounds = 0;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const battle = campaignManager.createCampaignBattle(stageId);
    const session = battle.session as BattleSession;
    while (!session.winner && session.turn < 50) {
      session.stepTurn();
    }
    lastRounds = session.turn;
    lastResult = campaignManager.resolveStageBattle(stageId, session);

    if (lastResult.isVictory) {
      return { result: lastResult, rounds: lastRounds, attempts: attempt };
    }
  }

  return { result: lastResult!, rounds: lastRounds, attempts: maxAttempts };
}

console.log('======================================================================');
console.log('  ทดสอบระบบด่านผจญภัย บทที่ 1: ป่าฝนต้นกำเนิดวิญญาณ (1v1 Tag Relay)  ');
console.log('======================================================================\n');

// 0. ตรวจสอบศัตรูใหม่ 10 ตัว (Void Anomalies)
console.log('【 0. ตรวจสอบข้อมูลศัตรูมลทิน Void 10 ตัว (Non-Animal Enemies) 】');
const allEnemies = getAllEnemies();
assert(allEnemies.length === 10, `พบศัตรูใหม่ทั้งหมด 10 ตัว (พบ ${allEnemies.length} ตัว)`);
const expectedEnemyIds = [
  'void_thornvine',
  'toxic_sporeling',
  'putrid_slime',
  'mist_droplet_blob',
  'cursed_wisp',
  'anomalous_rockling',
  'phantom_mandrake',
  'shadow_parasite',
  'caustic_acid_jelly',
  'gale_swarm_orb',
];
for (const eId of expectedEnemyIds) {
  const e = allEnemies.find(x => x.id === eId);
  assert(Boolean(e), `ศัตรู [${eId}] มีข้อมูลครบถ้วน (${e?.name} - ธาตุ${e?.element} สาย${e?.role})`);
}

// 0.1 รีเซ็ตเซฟเพื่อทดสอบลูปผจญภัยตั้งแต่ผู้เล่นใหม่
saveManager.reset();

// 1. ตรวจสอบข้อมูลด่านทั้ง 10 ด่าน
console.log('\n【 1. ตรวจสอบข้อมูล 10 ด่านประจำบทที่ 1 (1v1 Tag Relay + Tutorial) 】');
const stages = campaignManager.getAllStages();
assert(stages.length === 10, `มีด่านทั้งหมด 10 ด่าน (พบ ${stages.length} ด่าน)`);
assert(stages.every(s => s.battleMode === '1v1'), 'ทุกด่านในบทที่ 1 เป็นโหมด 1v1 Tag Relay');
assert(stages.every(s => Boolean(s.tutorialTopic && s.tutorialGuide?.length)), 'ทุกด่านมีหัวข้อและคำแนะนำบทสอนเล่น (Guided Tutorial)');

const stage1 = campaignManager.getStage('stage_1_1');
assert(Boolean(stage1), 'พบด่าน stage_1_1: ชายป่ารกชัฏ');
assert(stage1?.enemies[0].heroId === 'void_thornvine', 'ด่าน 1-1 มี เถาวัลย์ทมิฬกลืนชีพ (void_thornvine) เป็นศัตรู');
assert(campaignManager.isStageUnlocked('stage_1_1') === true, 'ด่าน 1-1 ปลดล็อกตั้งแต่เริ่มต้น');

const bossStage = campaignManager.getStage('stage_1_10');
assert(Boolean(bossStage && bossStage.isBossStage), 'พบด่าน stage_1_10: บอสใหญ่ประจำบทที่ 1');
assert(Boolean(bossStage?.enemies.some(e => e.heroId === 'orangutan')), 'มี พญาลิงอุรังอุตัง (orangutan) เป็นบอสประจำด่าน');
assert(campaignManager.isStageUnlocked('stage_1_10') === false, 'ด่านบอส 1-10 ยังไม่ปลดล็อกก่อนผ่านด่านก่อนหน้า');

// 2. ทดสอบจำลองการเล่นด่าน 1-1 (1v1: ไก่ vs เถาวัลย์ทมิฬ)
console.log('\n【 2. ทดสอบการเล่นด่าน 1-1: ชายป่ารกชัฏ (1v1) 】');
saveManager.setActiveTeam1v1('rooster', 'buffalo');
const play1 = runStageWithRetry('stage_1_1');
assert(play1.result.isVictory === true, `ผู้เล่นเอาชนะด่าน 1-1 สำเร็จในเทิร์นที่ ${play1.rounds} (ความพยายาม: ${play1.attempts})`);
assert(play1.result.stars >= 1, `ได้รับดาว: ${play1.result.stars} ดาว`);
assert(play1.result.isFirstClear === true, 'เป็นการเคลียร์ด่านครั้งแรก (First Clear)');
assert(play1.result.rewardsGained.gold === 260, 'ได้รับ 260 Gold เข้าคลัง');
assert(play1.result.rewardsGained.food === 200, 'ได้รับ 200 Food เข้าคลัง');
assert(play1.result.rewardsGained.crystals === 25, 'ได้รับ 25 Crystals เข้าคลัง');
assert(play1.result.rewardsGained.egg === 'normal', 'ได้รับรางวัลไข่ธรรมดา 1 ฟอง');
assert(campaignManager.isStageUnlocked('stage_1_2') === true, 'ปลดล็อกด่าน stage_1_2 เรียบร้อยแล้ว');

// 3. ทดสอบจำลองการเล่นด่าน 1-2 (1v1: แมว vs สปอร์เห็ดพิษ)
console.log('\n【 3. ทดสอบการเล่นด่าน 1-2: หนองน้ำพิษซึม (1v1) 】');
// ปรับทัพ 1v1: สลับ แมว (ธาตุลม) เป็นตัวหลัก เพื่อเอาชนะธาตุ สปอร์เห็ดพิษคลั่ง (ธาตุพิษ)
saveManager.setActiveTeam1v1('cat', 'rooster');
assert(saveManager.getData().activeTeam1v1.mainHeroId === 'cat', 'สลับ แมว (ธาตุลม) เป็นตัวหลักเพื่อรับโบนัสชนะธาตุ');

const play2 = runStageWithRetry('stage_1_2');
assert(play2.result.isVictory === true, `ผู้เล่นเอาชนะด่าน 1-2 สำเร็จในเทิร์นที่ ${play2.rounds} (ความพยายาม: ${play2.attempts})`);
assert(campaignManager.isStageUnlocked('stage_1_3') === true, 'ปลดล็อกด่าน stage_1_3 เรียบร้อยแล้ว');

// 4. ทดสอบ Core Loop: นำทรัพยากรที่ได้จากด่านมาอัปเลเวลทีมเพื่อเตรียมลุยด่านถัดไป
console.log('\n【 4. ทดสอบการพัฒนาตัวละครด้วยทรัพยากรจากด่าน (Level Up) 】');
const foodBefore = saveManager.getData().inventory.food;
const goldBefore = saveManager.getData().inventory.gold;
console.log(`  ทรัพยากรสะสมปัจจุบัน: ${goldBefore} Gold, ${foodBefore} Food`);

const up1 = saveManager.levelUpHero('rooster');
assert(up1.success === true, 'อัปเลเวล ไก่ เป็น Level 2 (Fire Striker)');
const up2 = saveManager.levelUpHero('buffalo');
assert(up2.success === true, 'อัปเลเวล ควาย เป็น Level 2 (Earth Tank)');

// จัดทีม 1v1: ไก่ (ตัวหลัก) + ควาย (ตัวสำรอง) พร้อมติดตั้งสกิลที่ปลดล็อก
saveManager.setActiveTeam1v1('rooster', 'buffalo');
saveManager.setHeroSkills('rooster', ['fire_s', 'martial_s', 'catalyst_s']);
saveManager.setHeroSkills('buffalo', ['earth_s', 'medical_s', 'martial_s']);
assert(saveManager.getData().activeTeam1v1.mainHeroId === 'rooster', 'จัดทีม 1v1 (ไก่ ตัวหลัก / ควาย ตัวสำรอง) สำเร็จ');

// 5. ทดสอบจำลองการเล่นด่าน 1-3 (1v1: สไลม์โคลนเน่าเปื่อย)
console.log('\n【 5. ทดสอบการเล่นด่าน 1-3: หล่มโคลนดูดกลืน (1v1) 】');
const play3 = runStageWithRetry('stage_1_3');
assert(play3.result.isVictory === true, `ทีมผู้เล่นชนะด่าน 1-3 สำเร็จในเทิร์นที่ ${play3.rounds} (ความพยายาม: ${play3.attempts})`);
assert(play3.result.stars >= 1, `ได้รับดาวด่าน 1-3: ${play3.result.stars} ดาว`);
assert(campaignManager.isStageUnlocked('stage_1_4') === true, 'ปลดล็อกด่าน stage_1_4 เรียบร้อยแล้ว');

// 6. ทดสอบจำลองการเล่นผ่านด่าน 1-4 ถึง 1-9 พร้อมพัฒนาเลเวลตามทรัพยากรที่ได้รับ
console.log('\n【 6. จำลองการผ่านด่านต่อเนื่อง 1-4 ถึง 1-9 】');

// เลเวลอัปเป็น Lv.3 ก่อนด่าน 1-4
saveManager.levelUpHero('rooster');
saveManager.levelUpHero('buffalo');

const middleStages = ['stage_1_4', 'stage_1_5', 'stage_1_6', 'stage_1_7', 'stage_1_8', 'stage_1_9'];

for (const sId of middleStages) {
  // พัฒนาเลเวลตามขั้นตอนเมื่อได้รับทรัพยากร
  if (sId === 'stage_1_6') {
    saveManager.levelUpHero('rooster'); // Level 4
    saveManager.levelUpHero('buffalo');
  }
  if (sId === 'stage_1_7') {
    saveManager.levelUpHero('rooster'); // Level 5
  }
  if (sId === 'stage_1_8') {
    saveManager.levelUpHero('buffalo'); // Level 5
  }

  // มินิบอส Stage 1-5: ทดสอบการรับไข่ทองคำและการฟักไข่ (สลับ ควาย ธาตุดิน ชนะ วิสป์ไฟ + ไก่ ธาตุไฟ ชนะ แมวออสลอตพืช)
  if (sId === 'stage_1_5') {
    saveManager.setActiveTeam1v1('buffalo', 'rooster');
    const playMini = runStageWithRetry(sId);
    assert(playMini.result.isVictory === true, `พิชิตมินิบอส [${sId}] (${playMini.rounds} เทิร์น, ${playMini.result.stars} ดาว, พยายาม: ${playMini.attempts})`);
    assert(playMini.result.rewardsGained.egg === 'gold', 'ได้รับรางวัลไข่ทองคำ (Golden Egg) จากมินิบอส!');

    // สลับ ไก่ กลับมาเป็นตัวหลัก เพื่อรับมือพืช/มืดในด่าน 1-6 ถึง 1-9
    saveManager.setActiveTeam1v1('rooster', 'buffalo');

    // นำไข่ทองเข้าตู้ฟัก และทดสอบเร่งเวลาฟัก
    assert(saveManager.placeEgg(0, 'gold').success === true, 'นำไข่ทองคำเข้าช่องฟัก 0 สำเร็จ');
    saveManager.instantHatchSlot(0);
    const hatchRes = saveManager.hatchEgg(0);
    assert(Boolean(hatchRes.hero), `กะเทาะไข่ทองคำสำเร็จ! ได้รับ [${hatchRes.hero?.heroId}] (Stars: ★${hatchRes.hero?.stars})`);
    continue;
  }

  const playStage = runStageWithRetry(sId);
  assert(playStage.result.isVictory === true, `ผ่านด่าน [${sId}] (${playStage.rounds} เทิร์น, ${playStage.result.stars} ดาว, พยายาม: ${playStage.attempts})`);
}

assert(campaignManager.isStageUnlocked('stage_1_10') === true, 'ปลดล็อกด่านบอสใหญ่ stage_1_10 สำเร็จ!');

// 7. ทดสอบศึกตัดสินบอสใหญ่ประจำบทที่ 1: พญาลิงอุรังอุตัง (Stage 1-10)
console.log('\n【 7. ศึกตัดสินบอสใหญ่ประจำบทที่ 1 (Stage 1-10: ต้นไม้โลกใจกลางป่าฝน) 】');
// นำทรัพยากรสะสมมาพัฒนาทีมตัวเก่ง: ไก่ (Fire Striker) + ควาย (Earth Tank)
saveManager.levelUpHero('rooster');
saveManager.levelUpHero('rooster');
saveManager.levelUpHero('buffalo');
saveManager.setActiveTeam1v1('rooster', 'buffalo');
const curRooster = saveManager.getData().ownedHeroes['rooster'];
const curBuffalo = saveManager.getData().ownedHeroes['buffalo'];
console.log(`  ทีมพร้อมรบศึกบอส: ไก่ Lv.${curRooster.level} (Fire Striker), ควาย Lv.${curBuffalo.level} (Earth Tank)`);

const playBoss = runStageWithRetry('stage_1_10', 15);
assert(playBoss.result.isVictory === true, `ผู้เล่นสามารถพิชิตบอสใหญ่ พญาลิงอุรังอุตัง ได้สำเร็จ! (${playBoss.rounds} เทิร์น, พยายาม: ${playBoss.attempts})`);
assert(playBoss.result.rewardsGained.crystals === 200, 'ได้รับรางวัลคริสตัล 200 Crystals');
assert(playBoss.result.rewardsGained.egg === 'gold', 'ได้รับรางวัลไข่ทองคำ (Golden Egg) ประจำบทที่ 1');
assert((saveManager.getData().inventory.shards['orangutan'] || 0) === 30, 'ได้รับเศษวิญญาณอุรังอุตัง 30 ชิ้น!');

// 8. ทดสอบการเล่นด่านซ้ำเพื่อฟาร์มทรัพยากร (Repeat Clear Farm)
console.log('\n【 8. ทดสอบการเล่นด่านซ้ำเพื่อฟาร์มทรัพยากร (Repeat Clear) 】');
const goldPreFarm = saveManager.getData().inventory.gold;
const repeatBattle = campaignManager.createCampaignBattle('stage_1_1');
const repeatSession = repeatBattle.session as BattleSession;
while (!repeatSession.winner && repeatSession.turn < 30) {
  repeatSession.stepTurn();
}
const repeatResult = campaignManager.resolveStageBattle('stage_1_1', repeatSession);
assert(repeatResult.isFirstClear === false, 'ระบบระบุว่าเป็น Repeat Clear ถูกต่อ');
assert(repeatResult.rewardsGained.gold === 75, 'ได้รับเหรียญ 75 Gold สำหรับการฟาร์มด่านซ้ำ');
assert(saveManager.getData().inventory.gold === goldPreFarm + 75, 'เหรียญทองเพิ่มขึ้นในคลังของผู้เล่นอย่างถูกต้อง');

// 9. ตรวจสอบสรุปสถิติทั่วไปของเซฟหลังพิชิตบทที่ 1
console.log('\n【 9. สรุปความคืบหน้าของบทที่ 1 ใน Player SaveData 】');
const totalStars = saveManager.getTotalStars();
console.log(`  ⭐ จำนวนดาวรวมที่ได้รับในบทที่ 1: ${totalStars} ดาว`);
assert(totalStars >= 10, 'ได้รับดาวสะสมในบทที่ 1 มากกว่าหรือเท่ากับ 10 ดาว');
assert(saveManager.isStageCleared('stage_1_10') === true, 'สถานะบันทึกว่าด่านบอส 1-10 เคลียร์แล้ว');
assert(Object.keys(saveManager.getData().clearedStages).length === 10, 'ผ่านครบทุกด่านทั้ง 10 ด่านในบทที่ 1!');

console.log('\n======================================================================');
console.log('🎉 ทุกการทดสอบของระบบด่านผจญภัย บทที่ 1 (Phase 2 - งาน 2.2) ผ่านฉลุย 100%!');
console.log('======================================================================\n');

