/**
 * Test Skill Board Manager (Phase 2 - Task 2.3)
 * รันด้วย esbuild และ node เพื่อตรวจสอบความถูกต้องของระบบ Skill Board และ Skill Presets:
 * 1. โครงสร้างแถวธาตุ 12 แถว (ฟรี 4 แถว, ล็อก 8 แถว) และการปลดล็อกแถวด้วยหินธาตุ 3 ก้อน
 * 2. การปลดล็อกสกิลตาม Tier (S, M, L, AOE) และเงื่อนไข Prerequisite ขั้นก่อนหน้า
 * 3. ระบบอัปเลเวลสกิล Lv.1 -> Lv.5 และการคำนวณตัวคูณโบนัสพลัง (1.00 -> 1.25)
 * 4. กฎการสวมใส่ 4 ช่อง (ไม่ซ้ำ, ไม่เกินสายละ 2 ท่า, ต้องปลดล็อกแล้ว)
 * 5. ระบบ Skill Presets (สร้าง, อ่าน, นำไปสวมใส่ 1 คลิก, ลบ)
 * 6. การผสานระบบเข้ากับ BattleSession 1v1 ในสนามจริง
 */

import { saveManager } from '../engine/save_manager';
import { skillBoardManager, ROW_UNLOCK_STONE_COST, SKILL_UNLOCK_COSTS, SKILL_LEVEL_UP_COSTS } from '../engine/skill_board_manager';
import { BattleSession } from '../engine/combat';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${msg}`);
    process.exit(1);
  }
  console.log(`  ✓ ${msg}`);
}

console.log('======================================================================');
console.log('  ทดสอบระบบกระดานสกิล & พรีเซตสกิล (Phase 2 - งาน 2.3)  ');
console.log('======================================================================\n');

// 0. รีเซ็ตเซฟข้อมูลใหม่เพื่อทดสอบจากศูนย์
saveManager.reset();

// ==========================================
// 1. ตรวจสอบแถวบนกระดานสกิล (Skill Board Rows)
// ==========================================
console.log('【 1. ตรวจสอบโครงสร้างแถวบนกระดานสกิล 17 แถว (11 ธาตุ + 6 สายวิชาไร้ธาตุ) 】');
const allRows = skillBoardManager.getAllRows();
assert(allRows.length === 17, `มีแถวสกิลครบถ้วน 17 แถว (พบ ${allRows.length} แถว: 11 ธาตุ + 6 สายวิชาไร้ธาตุ)`);

const starterRows = allRows.filter(r => r.isUnlocked);
assert(starterRows.length === 17, `แถวเริ่มต้นปลดล็อกครบทั้ง 17 แถว (พบ ${starterRows.length} แถว: 11 ธาตุ + 6 สายไร้ธาตุ)`);
assert(starterRows.some(r => r.elementId === 'fire'), 'แถวธาตุไฟ (fire) ปลดล็อกเริ่มต้น');
assert(starterRows.some(r => r.elementId === 'wind'), 'แถวธาตุลม (wind) ปลดล็อกเริ่มต้น');
assert(starterRows.some(r => r.elementId === 'earth'), 'แถวธาตุดิน (earth) ปลดล็อกเริ่มต้น');
assert(starterRows.some(r => r.elementId === 'water'), 'แถวธาตุน้ำ (water) ปลดล็อกเริ่มต้น');
assert(starterRows.some(r => r.elementId === 'plant'), 'แถวธาตุพืช (plant) ปลดล็อกเริ่มต้น');

// ตรวจสอบแถว 6 สายวิชาไร้ธาตุที่แยกออกจากกัน
const neutralRows = allRows.filter(r => r.category === 'neutral');
assert(neutralRows.length === 6, `มีแถวสายวิชาไร้ธาตุแยกเป็น 6 สายชัดเจน (พบ ${neutralRows.length} สาย)`);
assert(neutralRows.some(r => r.elementId === 'martial'), 'พบแถว 🥋 สายกระบวนท่า (martial)');
assert(neutralRows.some(r => r.elementId === 'medical'), 'พบแถว 💚 สายพยาบาล (medical)');
assert(neutralRows.some(r => r.elementId === 'trick'), 'พบแถว 🎭 สายเล่ห์กล (trick)');
assert(neutralRows.some(r => r.elementId === 'catalyst'), 'พบแถว ⚡ สายเร่งปฏิกิริยา (catalyst)');
assert(neutralRows.some(r => r.elementId === 'secret'), 'พบแถว 📜 สายวิชาลับ (secret)');
assert(neutralRows.some(r => r.elementId === 'defense'), 'พบแถว 🛡️ สายวิชาป้องกัน (defense)');

// ทดสอบกลไกการปลดล็อกแถวกรณีแถวถูกล็อก (Row Unlock Engine Validation)
const curData = saveManager.getData();
curData.unlockedElementRows = curData.unlockedElementRows.filter(r => r !== 'ice');
assert(skillBoardManager.getRow('ice')?.isUnlocked === false, 'จำลองทดสอบแถวที่ถูกล็อก');

// ตรวจสอบ canUnlockRow เมื่อหินธาตุไม่พอ
const iceCheckFail = skillBoardManager.canUnlockRow('ice');
assert(iceCheckFail.canUnlock === false, 'ไม่สามารถปลดล็อกแถวน้ำแข็งได้ถ้าหินธาตุไม่พอ');
assert(Boolean(iceCheckFail.reason?.includes('ต้องการหินธาตุ')), 'แจ้งเหตุผลชัดเจนว่าหินธาตุไม่พอ');

// เติมทรัพยากรหินธาตุน้ำแข็ง 3 ชิ้น และทดสอบการปลดล็อกแถว
saveManager.addElementStone('ice', 3);
const iceCheckSuccess = skillBoardManager.canUnlockRow('ice');
assert(iceCheckSuccess.canUnlock === true, 'เมื่อมีหินธาตุครบ 3 ชิ้น ระบบอนุมัติให้ปลดล็อกแถวได้');

const unlockIceRes = skillBoardManager.unlockRow('ice');
assert(unlockIceRes.success === true, 'ปลดล็อกแถวธาตุน้ำแข็งสำเร็จ!');
assert(skillBoardManager.getRow('ice')?.isUnlocked === true, 'สถานะแถวธาตุน้ำแข็งในกระดานเปลี่ยนเป็นปลดล็อกแล้ว');
assert(saveManager.getData().unlockedElementRows.includes('ice'), 'บันทึกลงใน PlayerSaveData เรียบร้อย');

// ป้องกันการปลดล็อกซ้ำ
const iceReUnlock = skillBoardManager.canUnlockRow('ice');
assert(iceReUnlock.canUnlock === false, 'ป้องกันการปลดล็อกแถวซ้ำ');

// ==========================================
// 2. ตรวจสอบการปลดล็อกสกิล (Skill Unlock Engine & Prerequisites)
// ==========================================
console.log('\n【 2. ตรวจสอบการปลดล็อกสกิลตามลำดับ Tier & Prerequisite 】');

// สกิลแรก (Tier S) ของทั้ง 16 สายวิชาปลดล็อกตั้งแต่เริ่มต้น
assert(saveManager.getData().unlockedSkills.includes('water_s'), 'water_s ปลดล็อกตั้งแต่เริ่มต้น');
assert(saveManager.getData().unlockedSkills.includes('plant_s'), 'plant_s ปลดล็อกตั้งแต่เริ่มต้น');
assert(saveManager.getData().unlockedSkills.length >= 16, 'ปลดล็อกสกิลแรกของทั้ง 16 สายวิชาครบถ้วน');

// สกิล Tier L ในแถวพืชที่ยังไม่มี Tier M (plant_l ต้องการ plant_m1 ก่อน)
const plantLCheck = skillBoardManager.canUnlockSkill('plant_l');
assert(plantLCheck.canUnlock === false, 'ไม่สามารถปลดล็อกสกิล Tier L ได้หากยังไม่ปลด Tier M ในสายเดียวกัน');
assert(Boolean(plantLCheck.reason?.includes('ต้องปลดล็อกสกิล')), 'แจ้งเตือน Prerequisite สกิลขั้นก่อนหน้า');

// ทดสอบปลดล็อก plant_m1: ต้องใช้คัมภีร์สกิล
const plantM1NoBook = skillBoardManager.canUnlockSkill('plant_m1');
assert(plantM1NoBook.canUnlock === false, 'ยังปลดล็อก plant_m1 ไม่ได้ถ้ายังไม่มีคัมภีร์สกิล');
assert(Boolean(plantM1NoBook.reason?.includes('คัมภีร์สกิล')), 'แจ้งเตือนว่าต้องการคัมภีร์สกิล');

// เมื่อได้รับคัมภีร์สกิล plant_m1 และทอง
saveManager.addSkillBook('plant_m1', 1);
saveManager.addGold(1000);
const canUnlockPlantM1 = skillBoardManager.canUnlockSkill('plant_m1');
assert(canUnlockPlantM1.canUnlock === true, 'เมื่อมี plant_s และมีคัมภีร์พร้อมทอง สามารถปลดล็อก plant_m1 ได้');
const unlockPlantM1Res = skillBoardManager.unlockSkill('plant_m1');
assert(unlockPlantM1Res.success === true, 'ปลดล็อก plant_m1 สำเร็จ!');
assert(saveManager.getData().unlockedSkills.includes('plant_m1'), 'plant_m1 ปลดล็อกเรียบร้อย');

// ==========================================
// 3. ตรวจสอบระบบอัปเลเวลสกิล (Skill Leveling Lv.1 -> Lv.5)
// ==========================================
console.log('\n【 3. ตรวจสอบระบบอัปเลเวลสกิล Lv.1 ถึง Lv.5 และการสเกลตัวคูณพลัง 】');

// สกิลเริ่มต้น fire_s อยู่ที่ Lv.1
assert(saveManager.getSkillLevel('fire_s') === 1, 'fire_s อยู่ที่ระดับ Level 1');
assert(skillBoardManager.getSkillLevelDamageMultiplier('fire_s') === 1.0, 'ตัวคูณดาเมจที่ Lv.1 คือ ×1.00');

// อัปจาก Lv.1 -> Lv.2 (ต้องการ คัมภีร์ 1 เล่ม, ทอง 150)
saveManager.addSkillBook('fire_s', 1);
saveManager.addGold(500);
const lvlUp1To2 = skillBoardManager.levelUpSkill('fire_s');
assert(lvlUp1To2.success === true, 'อัปเลเวล fire_s จาก Lv.1 เป็น Lv.2 สำเร็จ!');
assert(saveManager.getSkillLevel('fire_s') === 2, 'ระดับเลเวลในเซฟคือ Lv.2');
assert(skillBoardManager.getSkillLevelDamageMultiplier('fire_s') === 1.05, 'ตัวคูณดาเมจที่ Lv.2 คือ ×1.05 (+5%)');

// อัปต่อไปจนถึง Lv.5
saveManager.addSkillBook('fire_s', 10);
saveManager.addGold(5000);
skillBoardManager.levelUpSkill('fire_s'); // Lv.3
assert(skillBoardManager.getSkillLevelDamageMultiplier('fire_s') === 1.10, 'ตัวคูณดาเมจที่ Lv.3 คือ ×1.10');

skillBoardManager.levelUpSkill('fire_s'); // Lv.4
assert(skillBoardManager.getSkillLevelDamageMultiplier('fire_s') === 1.15, 'ตัวคูณดาเมจที่ Lv.4 คือ ×1.15');

const lvlUpTo5 = skillBoardManager.levelUpSkill('fire_s'); // Lv.5
assert(lvlUpTo5.success === true && lvlUpTo5.newLevel === 5, 'อัปเลเวล fire_s ถึงระดับสูงสุด Lv.5 สำเร็จ!');
assert(skillBoardManager.getSkillLevelDamageMultiplier('fire_s') === 1.25, 'ตัวคูณดาเมจที่ Lv.5 คือ ×1.25 (+25% Max Bonus)');

// ตรวจสอบการป้องกันเมื่ออัปเกิน Lv.5
const overMaxCheck = skillBoardManager.canLevelUpSkill('fire_s');
assert(overMaxCheck.canLevelUp === false, 'ป้องกันการอัปเลเวลเกิน Lv.5');
assert(Boolean(overMaxCheck.reason?.includes('สูงสุด')), 'ระบุเหตุผลว่าถึงระดับสูงสุดแล้ว');

// ==========================================
// 4. ตรวจสอบกฎการสวมใส่สกิล 4 ช่อง (Loadout Validation Engine)
// ==========================================
console.log('\n【 4. ตรวจสอบกฎการสวมใส่สกิล 4 ช่อง (Validation Rules) 】');

// 4.1 ตรวจสอบกรณีไม่ครบ 4 ช่อง
const testNot4 = skillBoardManager.validateLoadout(['fire_s', 'fire_m1', 'wind_s']);
assert(testNot4.valid === false, 'ปฏิเสธชุดสกิลที่มีไม่ครบ 4 ช่อง (3 ช่อง)');
assert(Boolean(testNot4.errors[0].includes('ต้องติดตั้งสกิลให้ครบ 4 ช่อง')), 'แจ้งเตือนจำนวนช่องไม่ถูกต้อง');

// 4.2 ตรวจสอบกรณีสกิลซ้ำ
const testDupes = skillBoardManager.validateLoadout(['fire_s', 'fire_s', 'wind_s', 'earth_s']);
assert(testDupes.valid === false, 'ปฏิเสธชุดสกิลที่มีสกิลซ้ำกัน');
assert(testDupes.errors.some(e => e.includes('ถูกสวมใส่ซ้ำ')), 'แจ้งเตือนว่ามีสกิลซ้ำ');

// 4.3 ตรวจสอบกรณีเกินโควตาสาย/ธาตุละ 2 ท่า (MAX_SKILLS_PER_BRANCH = 2)
// สาย neutral/martial มี martial_s -> จำลองปลดล็อก martial_m1, martial_m2 หากใส่ 3 ท่าจะเกิน 2
saveManager.unlockSkill('martial_m1', 0, 0);
saveManager.unlockSkill('martial_m2', 0, 0);
const testBranchOver = skillBoardManager.validateLoadout(['martial_s', 'martial_m1', 'martial_m2', 'fire_s']);
assert(testBranchOver.valid === false, 'ปฏิเสธชุดสกิลที่ใส่สายเดียวกันเกิน 2 ท่า');
assert(testBranchOver.errors.some(e => e.includes('เกินโควตา 2 ท่า')), 'แจ้งเตือนกฎสายละไม่เกิน 2 ท่า');

// 4.4 ตรวจสอบกรณีสกิลยังไม่ได้ปลดล็อก
const testLockedSkill = skillBoardManager.validateLoadout(['fire_s', 'wind_s', 'earth_s', 'lightning_l']);
assert(testLockedSkill.valid === false, 'ปฏิเสธชุดสกิลที่มีสกิลที่ยังไม่ปลดล็อก');
assert(testLockedSkill.errors.some(e => e.includes('ยังไม่ได้ปลดล็อก')), 'แจ้งเตือนสกิลยังไม่ปลดล็อก');

// 4.5 ชุดสกิลที่ถูกต้องสมบูรณ์แบบ
const testValid = skillBoardManager.validateLoadout(['fire_s', 'wind_s', 'earth_s', 'martial_s']);
assert(testValid.valid === true, 'ยอมรับชุดสกิล 4 ช่องที่ถูกต้องและสอดคล้องกับกฎทุกข้อ');
assert(testValid.errors.length === 0, 'ไม่มีข้อผิดพลาด');

// ==========================================
// 5. ทดสอบการสวมใส่ชุดสกิลให้ฮีโร่ (Equip to Hero)
// ==========================================
console.log('\n【 5. ทดสอบการติดตั้งชุดสกิลให้สัตว์เลี้ยง (Equip to Hero) 】');
const equipRes = skillBoardManager.equipSkillsToHero('rooster', ['fire_s', 'wind_s', 'plant_s', 'martial_s']);
assert(equipRes.success === true, 'ติดตั้งชุดสกิล 4 ช่องให้ ไก่ (rooster) สำเร็จ!');
const roosterSaved = saveManager.getData().ownedHeroes['rooster'];
assert(roosterSaved.customSkills.length === 4, 'ไก่มีสกิลติดตั้ง 4 ช่อง');
assert(roosterSaved.customSkills.includes('plant_s'), 'มีสกิลข้ามธาตุ plant_s ติดตั้งอยู่จริง');

// 5.2 ทดสอบการติดตั้งสกิลทีละช่องสำหรับสัตว์เลี้ยงใหม่ (Empty Slots Equip)
saveManager.setHeroSkills('cat', []); // จำลองสัตว์เลี้ยงใหม่ที่มี customSkills: []
const slot0Res = skillBoardManager.equipSkillToSlot('cat', 0, 'wind_s');
assert(slot0Res.success === true, 'ติดตั้งสกิลลงช่องที่ 1 ให้สัตว์ใหม่สำเร็จ (ไม่ติดบั๊กต้องมีครบ 4 ช่อง)');
const catSaved = saveManager.getData().ownedHeroes['cat'];
assert(catSaved.customSkills[0] === 'wind_s', 'ช่องที่ 1 บันทึก wind_s ถูกต้อง');

saveManager.unlockSkill('wind_m1', 0, 0); // จำลองปลดล็อก wind_m1
const slot1Res = skillBoardManager.equipSkillToSlot('cat', 1, 'wind_m1');
assert(slot1Res.success === true, 'ติดตั้งสกิลลงช่องที่ 2 ให้สัตว์ใหม่สำเร็จ');

// ป้องกันสกิลซ้ำข้ามช่อง
const dupeSlotRes = skillBoardManager.equipSkillToSlot('cat', 2, 'wind_s');
assert(dupeSlotRes.success === false, 'ป้องกันการติดตั้งสกิลซ้ำในช่องที่ 3');
assert(Boolean(dupeSlotRes.error?.includes('ซ้ำ')), 'แจ้งเตือนว่าสกิลถูกสวมใส่ซ้ำ');

// ทดสอบถอดสกิลออกจากช่อง
const unequipRes = skillBoardManager.equipSkillToSlot('cat', 1, '');
assert(unequipRes.success === true, 'ถอดสกิลออกจากช่องที่ 2 สำเร็จ');
assert(saveManager.getData().ownedHeroes['cat'].customSkills[1] === '', 'ช่องที่ 2 กลายเป็นช่องว่าง');

// ==========================================
// 6. ทดสอบระบบพรีเซตสกิล (Skill Presets CRUD & 1-Click Equip)
// ==========================================
console.log('\n【 6. ทดสอบระบบพรีเซตสกิล (Skill Presets Engine) 】');

// ตรวจสอบ starter presets ที่สร้างมาพร้อมระบบเซฟ
const starterPresets = skillBoardManager.getPresets();
assert(starterPresets.length >= 3, `พบพรีเซตเริ่มต้นอย่างน้อย 3 พรีเซต (พบ ${starterPresets.length})`);
assert(Boolean(skillBoardManager.getPreset('preset_balanced')), 'พบ preset_balanced (สมดุลพื้นฐาน)');
assert(Boolean(skillBoardManager.getPreset('preset_fire_burst')), 'พบ preset_fire_burst (เพลิงผลาญระเบิดพลัง)');
assert(Boolean(skillBoardManager.getPreset('preset_earth_tank')), 'พบ preset_earth_tank (ปราการพสุธาทรหด)');

// ทดสอบสร้างพรีเซตใหม่ของผู้เล่น
saveManager.unlockSkill('fire_m1', 0, 0);
const createPresetRes = skillBoardManager.createPreset(
  'preset_custom_strike',
  'พรีเซตจู่โจมผสานพืชเพลิง',
  ['fire_s', 'fire_m1', 'plant_s', 'plant_m1'],
  'ชุดสกิลคอมโบไฟเผาและหนามพฤกษารัด'
);
assert(createPresetRes.success === true, 'สร้างพรีเซตใหม่สำเร็จ!');
assert(Boolean(skillBoardManager.getPreset('preset_custom_strike')), 'พรีเซตใหม่ถูกบันทึกลงในระบบเซฟ');

// ทดสอบนำพรีเซตไปสวมใส่ให้ฮีโร่ใน 1 คลิก
const applyRes = skillBoardManager.applyPresetToHero('rooster', 'preset_custom_strike');
assert(applyRes.success === true, 'นำพรีเซตสวมใส่ให้ ไก่ (rooster) ใน 1 คลิกสำเร็จ!');
const roosterAfterPreset = saveManager.getData().ownedHeroes['rooster'];
assert(
  JSON.stringify(roosterAfterPreset.customSkills) === JSON.stringify(['fire_s', 'fire_m1', 'plant_s', 'plant_m1']),
  'สกิลของไก่ตรงกับพรีเซตที่สวมใส่ทุกช่อง'
);

// ทดสอบการลบพรีเซต
const delRes = skillBoardManager.deletePreset('preset_custom_strike');
assert(delRes.success === true, 'ลบพรีเซตสำเร็จ');
assert(skillBoardManager.getPreset('preset_custom_strike') === undefined, 'พรีเซตถูกลบออกจากระบบอย่างสมบูรณ์');

// ==========================================
// 7. ทดสอบการเชื่อมต่อกับระบบต่อสู้จริง (BattleSession Integration)
// ==========================================
console.log('\n【 7. ทดสอบการจำลองต่อสู้จริงด้วยชุดสกิลและเลเวลสกิล (Combat Integration) 】');

// สวมใส่ชุดสกิลเพลิงสุดแกร่งให้ไก่ (fire_s Lv.5 ซึ่งมีโบนัส ×1.25)
skillBoardManager.equipSkillsToHero('rooster', ['fire_s', 'fire_m1', 'wind_s', 'martial_s']);
const battle = new BattleSession(['rooster'], ['cat'], {
  customSkillsA: [saveManager.getData().ownedHeroes['rooster'].customSkills],
  skillLevelsA: saveManager.getData().skillLevels,
  enableSkillEffects: true,
  enableSameElementBonus: true,
});

let turnsCount = 0;
while (!battle.winner && battle.turn < 30) {
  battle.stepTurn();
  turnsCount++;
}

assert(Boolean(battle.winner), `การต่อสู้เสร็จสิ้นสมบูรณ์ในเทิร์นที่ ${turnsCount} (ผู้ชนะ: ${battle.winner})`);
assert(battle.logs.length > 0, `มีบันทึก Log การต่อสู้ ${battle.logs.length} รายการ`);

console.log('\n======================================================================');
console.log('🎉 ทุกการทดสอบของระบบ Skill Board & Presets (Phase 2 - งาน 2.3) ผ่านฉลุย 100%!');
console.log('======================================================================\n');

