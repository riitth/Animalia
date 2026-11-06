/**
 * test_codex.ts: ชุดทดสอบระบบสมุดสะสมสัตว์เลี้ยง (Bestiary & Animal Codex System)
 * ทดสอบ Phase 1: Data & Engine
 */

import { saveManager } from '../engine/save_manager';
import { codexManager, BOND_SETS, CODEX_LEVEL_CONFIG, CODEX_STAT_CAPS } from '../engine/codex_manager';
import { computeHeroStats } from '../engine/combat';
import { campaignManager } from '../engine/campaign_manager';

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`[FAIL] ${message}`);
  }
  console.log(`  ✓ ${message}`);
}

console.log('======================================================================');
console.log('  ทดสอบระบบสมุดสะสมสัตว์เลี้ยง Animalia Codex & Bestiary (Phase 1)    ');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูลเริ่มต้น
console.log('【 1. ตรวจสอบการเริ่มต้นข้อมูลสมุดสะสม 】');
const starterData = saveManager.getStarterData();
assert(starterData.seenHeroes !== undefined, 'โครงสร้าง seenHeroes ถูกสร้างขึ้น');
assert(Object.keys(starterData.seenHeroes).length >= 3, 'สัตว์เริ่มต้นถูกบันทึกลงสมุดสะสมอย่างน้อย 3 ตัว');
assert(starterData.claimedHeroResearch !== undefined, 'โครงสร้าง claimedHeroResearch ถูกสร้างขึ้น');
assert(Array.isArray(starterData.claimedBondRewards), 'claimedBondRewards เป็นอาเรย์');
assert(BOND_SETS.length === 20, `มีชุดสายสัมพันธ์ทั้งหมด 20 ชุด (พบ ${BOND_SETS.length} ชุด)`);
assert(CODEX_LEVEL_CONFIG.length === 20, 'มีตารางเลเวล Codex ครบ 20 เลเวล');

// 2. ตรวจสอบสถานะการค้นพบสัตว์ (Unknown / Seen / Captured)
console.log('\n【 2. ตรวจสอบสถานะการค้นพบ 3 ระดับ (Discovery States) 】');
const stateRooster = codexManager.getHeroDiscoveryState('rooster', starterData);
assert(stateRooster === 'captured', 'rooster ต้องอยู่ในสถานะ captured (ครอบครองแล้ว)');

const stateFenrir = codexManager.getHeroDiscoveryState('fenrir', starterData);
assert(stateFenrir === 'unknown', 'fenrir ต้องอยู่ในสถานะ unknown (ยังไม่เคยพบ)');

// จำลองการพบเจอศัตรูในสนามรบ
codexManager.registerSeenHero('fenrir');
const stateFenrirAfter = codexManager.getHeroDiscoveryState('fenrir');
assert(stateFenrirAfter === 'seen', 'fenrir ต้องเปลี่ยนเป็นสถานะ seen หลังพบเจอในสนามรบ');

// 3. ตรวจสอบการวิจัยสัตว์รายตัว (Hero Research Tiers 1 / 2 / 3)
console.log('\n【 3. ตรวจสอบระบบวิจัยสัตว์รายตัว 3 ระดับ 】');
const researchStatusRooster = codexManager.checkHeroResearchStatus('rooster');
assert(researchStatusRooster.tier1Available, 'rooster เลเวล 1 ต้องพร้อมรับรางวัลขั้นที่ 1 (แรกพบ)');
assert(!researchStatusRooster.tier2Available, 'rooster 1 ดาว ต้องยังไม่พร้อมรับรางวัลขั้นที่ 2 (3 ดาว)');

// รับรางวัลขั้นที่ 1
const claimTier1 = codexManager.claimHeroResearchReward('rooster', 1);
assert(claimTier1.success, 'กดรับรางวัลวิจัยขั้นที่ 1 ของ rooster สำเร็จ');
assert(claimTier1.rewards?.crystals === 15, 'ได้รับ 15 คริสตัล');
assert(claimTier1.rewards?.gold === 300, 'ได้รับ 300 เหรียญทอง');

// กดรับซ้ำไม่ได้
const claimTier1Again = codexManager.claimHeroResearchReward('rooster', 1);
assert(!claimTier1Again.success, 'กดรับรางวัลวิจัยขั้นที่ 1 ซ้ำต้องไม่สำเร็จ');

// จำลอง rooster เป็น 3 ดาว
const currentSave = saveManager.getData();
currentSave.ownedHeroes['rooster'].stars = 3;
saveManager.save();

const researchStatusRoosterStar3 = codexManager.checkHeroResearchStatus('rooster');
assert(researchStatusRoosterStar3.tier2Available, 'rooster 3 ดาว ต้องพร้อมรับรางวัลขั้นที่ 2');

const claimTier2 = codexManager.claimHeroResearchReward('rooster', 2);
assert(claimTier2.success, 'กดรับรางวัลวิจัยขั้นที่ 2 สำเร็จ');
assert(claimTier2.rewards?.food === 80, 'ได้รับ 80 เสบียงสัตว์');
assert(claimTier2.rewards?.warmth === 15, 'ได้รับ 15 พลังอบอุ่น');

// 4. ตรวจสอบชุดสายสัมพันธ์และสถิติบัฟ (Bond Sets & Stat Buffs)
console.log('\n【 4. ตรวจสอบชุดสายสัมพันธ์และการรวมบัฟไอดี 】');
const farmFriendsStatus = codexManager.getBondSetStatus('farm_friends');
assert(farmFriendsStatus.totalMembers === 5, 'ชุดเพื่อนรักชนบทมีสมาชิก 5 ตัว');
assert(!farmFriendsStatus.isComplete, 'ยังไม่ครบสมาชิก 5 ตัว');

// เพิ่มสมาชิกให้ครบชุด farm_friends: rooster, dog, pig, horse, cat
saveManager.acquireHero('dog');
saveManager.acquireHero('pig');
saveManager.acquireHero('horse');

const farmFriendsStatusComplete = codexManager.getBondSetStatus('farm_friends');
assert(farmFriendsStatusComplete.isComplete, 'เมื่อมีครบ 5 ตัว ชุดเพื่อนรักชนบทต้องขึ้นสถานะ isComplete = true');

const claimBond = codexManager.claimBondReward('farm_friends');
assert(claimBond.success, 'กดรับรางวัลชุดเพื่อนรักชนบทสำเร็จ');
assert(claimBond.reward?.crystals === 40, 'ได้รับ 40 คริสตัลจากชุดเพื่อนรักชนบท');

const buffs = codexManager.getActiveCodexBuffs();
assert(buffs.hpPct >= 0.01, `ได้รับโบนัส HP Pct จากสายสัมพันธ์ (ได้ ${buffs.hpPct * 100}%)`);
assert(buffs.hpPct <= CODEX_STAT_CAPS.hpPct, 'โบนัส HP ต้องไม่เกินเพดาน Hard Cap (6%)');

// 5. ตรวจสอบการผสานบัฟเข้าสู่การต่อสู้ (Combat Stat Integration)
console.log('\n【 5. ตรวจสอบการคำนวณสเตตัสพร้อมบัฟ Codex 】');
const baseRoosterStats = computeHeroStats('rooster', 1, 1, false);
const buffedRoosterStats = computeHeroStats('rooster', 1, 1, true);
assert(buffedRoosterStats.maxHp > baseRoosterStats.maxHp, `HP ได้รับการเพิ่มขึ้นอย่างถูกต้อง (${baseRoosterStats.maxHp} -> ${buffedRoosterStats.maxHp})`);

// 6. ตรวจสอบเลเวลความเชี่ยวชาญสมุด (Codex Mastery Level)
console.log('\n【 6. ตรวจสอบเลเวลความเชี่ยวชาญสมุดสะสม 】');
const lvlInfo = codexManager.getCodexLevelInfo();
assert(lvlInfo.currentLevel >= 1, `เลเวล Codex ปัจจุบันคือ Lv.${lvlInfo.currentLevel}`);
assert(lvlInfo.currentExp > 0, `มีแต้ม EXP รวม ${lvlInfo.currentExp}`);

// 7. ตรวจสอบการเชื่อมต่อกับด่านผจญภัยและการฟักไข่ (Drop Bonus & Hatch Reduction)
console.log('\n【 7. ตรวจสอบสิทธิพิเศษด่านผจญภัยและการฟักไข่ 】');
const dropBonus = codexManager.getCampaignBonusDropPct();
assert(typeof dropBonus.goldPct === 'number' && typeof dropBonus.foodPct === 'number', 'โบนัสดรอปทองและเสบียงทำงานถูกต้อง');

const hatchRed = codexManager.getHatchTimeReductionPct();
assert(typeof hatchRed === 'number', 'ส่วนลดเวลาฟักไข่ทำงานถูกต้อง');

const unclaimedCount = codexManager.countUnclaimedRewards();
assert(typeof unclaimedCount === 'number', `นับจำนวนรางวัลที่ค้างรับได้ (${unclaimedCount} รายการ)`);

console.log('\n======================================================================');
console.log('  🎉 การทดสอบระบบสมุดสะสมสัตว์เลี้ยง (Phase 1 Data & Engine) ผ่าน 100%! ');
console.log('======================================================================');

