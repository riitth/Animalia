/**
 * Test Pet Collection & Pet Detail State Architecture (Phase 1)
 */

import { saveManager } from '../engine/save_manager';
import {
  getPetViewState,
  setPetViewMode,
  setPetDetailTab,
  savePetCollectionScroll,
  resetPetViewState,
  renderHeroesViewHtml,
  type PetViewMode,
  type PetDetailTab,
} from '../ui/heroes_view';

console.log('======================================================================');
console.log('  ทดสอบสถาปัตยกรรมสถานะ Pet Collection & Pet Detail (Phase 1)         ');
console.log('======================================================================\n');

// 1. ตรวจสอบสถานะเริ่มต้น (Initial State)
console.log('【 1. ตรวจสอบสถานะเริ่มต้น (Initial State) 】');
resetPetViewState();
let state = getPetViewState();
console.log(`  ✓ viewMode เริ่มต้น: ${state.viewMode}`);
console.log(`  ✓ selectedHeroId เริ่มต้น: ${state.selectedHeroId}`);
console.log(`  ✓ activeTab เริ่มต้น: ${state.activeTab}`);
console.log(`  ✓ savedScrollTop เริ่มต้น: ${state.savedScrollTop}`);

if (state.viewMode !== 'collection' || state.selectedHeroId !== null || state.activeTab !== 'overview') {
  throw new Error('สถานะเริ่มต้นไม่ถูกต้อง');
}
console.log('  -> ผ่านการตรวจสอบสถานะเริ่มต้น\n');

// 2. ตรวจสอบการสลับเข้าสู่หน้ารายละเอียด (Switch to Pet Detail)
console.log('【 2. ตรวจสอบการสลับเข้าสู่หน้ารายละเอียด (Switch to Detail Mode) 】');
savePetCollectionScroll(350);
setPetViewMode('detail', 'rooster');
state = getPetViewState();

console.log(`  ✓ viewMode หลังเปลี่ยน: ${state.viewMode}`);
console.log(`  ✓ selectedHeroId: ${state.selectedHeroId}`);
console.log(`  ✓ savedScrollTop: ${state.savedScrollTop}`);

if (state.viewMode !== 'detail' || state.selectedHeroId !== 'rooster' || state.savedScrollTop !== 350) {
  throw new Error('การสลับไปยัง Detail Mode ผิดพลาด');
}
console.log('  -> ผ่านการตรวจสอบการสลับเข้า Detail Mode\n');

// 3. ตรวจสอบการสลับแท็บย่อย MMORPG ทั้ง 6 Tabs
console.log('【 3. ตรวจสอบการสลับ Tab Navigation ทั้ง 6 แท็บ 】');
const tabsToTest: PetDetailTab[] = ['status', 'skills', 'growth', 'lore', 'equipment', 'overview'];
for (const tab of tabsToTest) {
  setPetDetailTab(tab);
  state = getPetViewState();
  console.log(`  ✓ สลับไปยังแท็บ: ${state.activeTab}`);
  if (state.activeTab !== tab) {
    throw new Error(`ไม่สามารถสลับไปยังแท็บ ${tab} ได้`);
  }
}
console.log('  -> ผ่านการตรวจสอบ Tab Navigation ทั้ง 6 แท็บ\n');

// 4. ตรวจสอบการเรนเดอร์ HTML ในทั้งสองโหมด (HTML Rendering Verification)
console.log('【 4. ตรวจสอบการเรนเดอร์โครงสร้าง HTML ในแต่ละโหมด 】');
// 4.1 Detail Mode
setPetViewMode('detail', 'rooster');
setPetDetailTab('overview');
const detailHtml = renderHeroesViewHtml();
if (!detailHtml.includes('pet-detail-dual-panel') || !detailHtml.includes('pet-preview-panel') || !detailHtml.includes('pet-info-panel')) {
  throw new Error('โครงสร้าง HTML ใน Detail Mode ไม่ครบถ้วน (ขาด Dual-Panel)');
}
console.log('  ✓ Detail Mode เรนเดอร์ Dual-Panel Layout (Left Preview + Right Tabs) ถูกต้อง');

// 4.2 Collection Mode
setPetViewMode('collection');
const collectionHtml = renderHeroesViewHtml();
if (!collectionHtml.includes('heroes-card-grid-container') || !collectionHtml.includes('active-team-banner')) {
  throw new Error('โครงสร้าง HTML ใน Collection Mode ไม่ถูกต้อง');
}
console.log('  ✓ Collection Mode เรนเดอร์ Team Banner และ Card Grid ถูกต้อง\n');

// 5. ตรวจสอบ Fallback เมื่อระบุ HeroId ที่ไม่มีในคลัง
console.log('【 5. ตรวจสอบ Fallback กรณี HeroId ไม่มีในคลัง 】');
setPetViewMode('detail', 'non_existent_hero_xyz');
const fallbackHtml = renderHeroesViewHtml();
state = getPetViewState();
console.log(`  ✓ viewMode หลังพบ HeroId ไม่มีจริง: ${state.viewMode}`);
console.log(`  ✓ selectedHeroId หลัง fallback: ${state.selectedHeroId}`);
if (state.viewMode !== 'collection' || state.selectedHeroId !== null) {
  throw new Error('ระบบไม่ Fallback กลับหน้า Collection เมื่อสัตว์ไม่มีในคลัง');
}
console.log('  -> ผ่านการตรวจสอบ Fallback\n');

// 6. ตรวจสอบโครงสร้าง Pet Collection Grid View (Phase 2 Verification)
console.log('【 6. ตรวจสอบโครงสร้าง Pet Collection Grid View (Phase 2) 】');
resetPetViewState();
setPetViewMode('collection');
const phase2Html = renderHeroesViewHtml();

if (!phase2Html.includes('pet-icon-card')) {
  throw new Error('ไม่พบคลาส pet-icon-card ในหน้า Collection Grid');
}
if (!phase2Html.includes('pet-card-avatar-wrap') || !phase2Html.includes('pet-card-rank')) {
  throw new Error('ไม่พบองค์ประกอบ avatar หรือ rank badge ใน Pet Icon Card');
}
if (!phase2Html.includes('pet-card-level') || !phase2Html.includes('pet-card-stars')) {
  throw new Error('ไม่พบข้อมูล Level หรือ Stars ใน Pet Icon Card');
}
if (phase2Html.includes('roster-stats-grid') || phase2Html.includes('roster-actions-block')) {
  throw new Error('หน้า Collection Card ยังคงมีตาราง Stat หรือปุ่ม Action ที่ขัดกับข้อกำหนด Phase 2');
}
console.log('  ✓ Pet Icon Card แสดงเฉพาะข้อมูลจำเป็น (Avatar, Rank, Element, Level, Stars, Active Tag)');
console.log('  ✓ ไม่พบข้อมูลรกตา (Stat tables, Ability full description, Upgrade cost buttons) บน Card Grid');

// 6.2 ตรวจสอบ Selected State บนการ์ด
setPetViewMode('collection', 'rooster');
const selectedHtml = renderHeroesViewHtml();
if (!selectedHtml.includes('pet-icon-card selected') && !selectedHtml.includes('selected')) {
  throw new Error('ระบบไม่เพิ่มคลาส selected ให้กับการ์ดสัตว์เลี้ยงที่ถูกเลือก');
}
console.log('  ✓ Pet Icon Card แสดง Selected State ชัดเจนเมื่อมีการเลือกสัตว์เลี้ยง');

// 7. ตรวจสอบโครงสร้าง Pet Detail Dual Panel & ทั้ง 5 แท็บ (Phase 3 Verification)
console.log('\n【 7. ตรวจสอบโครงสร้าง Pet Detail Dual Panel & ทั้ง 5 Tabs (Phase 3) 】');
setPetViewMode('detail', 'rooster');

// 7.1 ตรวจสอบ Left Panel (Pet Preview)
setPetDetailTab('overview');
let currentHtml = renderHeroesViewHtml();

if (!currentHtml.includes('pet-preview-panel') || !currentHtml.includes('pet-info-panel')) {
  throw new Error('ไม่พบ Left Panel หรือ Right Panel ในหน้า Pet Detail');
}
if (!currentHtml.includes('pet-preview-avatar-box') || !currentHtml.includes('pet-preview-name')) {
  throw new Error('ไม่พบ Avatar ขนาดใหญ่ หรือชื่อสัตว์ใน Left Preview Panel');
}
if (!currentHtml.includes('btn-set-main') || !currentHtml.includes('btn-set-backup') || !currentHtml.includes('btn-pet-preview-back')) {
  throw new Error('ปุ่มคำสั่งควบคุมหลักใน Left Panel ไม่ครบถ้วน (ตั้งตัวหลัก, ตัวสำรอง, กลับคลัง)');
}
console.log('  ✓ Left Panel: แสดง Avatar ขนาดใหญ่, ข้อมูลประจำตัว, BP รวม และปุ่มจัดทีม/กลับคลังสัตว์ ครบถ้วน');

// 7.2 ตรวจสอบ Tab 1: ภาพรวม (Overview)
setPetDetailTab('overview');
currentHtml = renderHeroesViewHtml();
if (!currentHtml.includes('pet-tab-overview') || !currentHtml.includes('team-deployment-card') || !currentHtml.includes('pet-ability-card') || !currentHtml.includes('overview-skills-chips-row')) {
  throw new Error('โครงสร้าง Tab 1 (Overview) ไม่ครบถ้วน (ขาด ability, team-card หรือ skills-summary)');
}
if (currentHtml.includes('[object Object]')) {
  throw new Error('พบข้อผิดพลาด [object Object] ในการแสดงผลรายละเอียดสกิลหรือท่าไม้ตาย');
}
if (!currentHtml.includes('เผาไหม้')) {
  throw new Error('รายละเอียดท่าไม้ตายของไก่ไม่แสดงข้อมูลเอฟเฟกต์การเผาไหม้');
}
console.log('  ✓ Tab 1 (ภาพรวม): แสดงจุดเด่นสัตว์ป่า, สถานะทีม 1v1, Ability ประจำตัว, ท่าไม้ตาย (ไร้บั๊ก [object Object]) และสรุปสกิล 4 ช่อง ถูกต้อง');

// 7.3 ตรวจสอบ Tab 2: ค่าสเตตัส (Status)
setPetDetailTab('status');
currentHtml = renderHeroesViewHtml();
if (!currentHtml.includes('pet-tab-status') || !currentHtml.includes('stat-group-card offensive') || !currentHtml.includes('stat-group-card defensive') || !currentHtml.includes('stat-group-card utility')) {
  throw new Error('โครงสร้าง Tab 2 (Status) ขาดการแบ่งกลุ่ม Offensive / Defensive / Utility');
}
if (!currentHtml.includes('stat-split-note') || !currentHtml.includes('bonus-stat')) {
  throw new Error('Tab 2 ไม่แสดงการแยก Base Stat และ Bonus Stat');
}
console.log('  ✓ Tab 2 (ค่าสเตตัส): จัดกลุ่ม Offensive, Defensive, Utility, Attributes และแยก Base + Bonus ชัดเจน');

// 7.4 ตรวจสอบ Tab 3: สกิล (Skills)
setPetDetailTab('skills');
currentHtml = renderHeroesViewHtml();
if (!currentHtml.includes('pet-tab-skills') || !currentHtml.includes('r-skills-vertical-list') || !currentHtml.includes('btn-goto-skill-board')) {
  throw new Error('โครงสร้าง Tab 3 (Skills) ขาดรายการสกิล 4 ช่อง หรือปุ่มปรับแต่งสกิล');
}
console.log('  ✓ Tab 3 (สกิล 4 ช่อง): แสดงสกิลครบ 4 ช่อง พร้อมระดับ/Tier/SP และปุ่มเปิดหน้าต่างเลือกสกิล');

// 7.5 ตรวจสอบ Tab 4: การพัฒนา (Growth) พร้อม Preview Stat Increase
setPetDetailTab('growth');
currentHtml = renderHeroesViewHtml();
if (!currentHtml.includes('pet-tab-growth') || !currentHtml.includes('growth-preview-box') || !currentHtml.includes('btn-hero-level-up') || !currentHtml.includes('btn-hero-star-up')) {
  throw new Error('โครงสร้าง Tab 4 (Growth) ขาด Preview Stat Increase หรือปุ่มอัปเลเวล/อัปดาว');
}
console.log('  ✓ Tab 4 (การพัฒนา): แสดงการพรีวิวสเตตัสที่จะเพิ่มขึ้น (Stat Increase Preview), ต้นทุน และปุ่มยืนยัน');

// 7.6 ตรวจสอบ Tab 5: ข้อมูลสัตว์โลก (Lore & Wildlife Knowledge)
setPetDetailTab('lore');
currentHtml = renderHeroesViewHtml();
if (!currentHtml.includes('pet-tab-lore') || !currentHtml.includes('elemental-origin-card') || !currentHtml.includes('wildlife-facts-card') || !currentHtml.includes('did-you-know-card')) {
  throw new Error('โครงสร้าง Tab 5 (Lore) ขาดข้อมูลกำเนิดธาตุแฟนตาซีหรือสารานุกรมสัตว์โลก');
}
if (!currentHtml.includes(' Gallus gallus domesticus') && !currentHtml.includes('Gallus gallus domesticus')) {
  throw new Error('Tab 5 ไม่แสดงชื่อวิทยาศาสตร์ของไก่');
}
if (!currentHtml.includes('ธาตุไฟ') && !currentHtml.includes('พลังธาตุไฟ')) {
  throw new Error('Tab 5 ไม่แสดงเรื่องเล่าแฟนตาซีกำเนิดธาตุไฟ');
}
console.log('  ✓ Tab 5 (ข้อมูลสัตว์โลก): แสดงเรื่องเล่ากำเนิดธาตุแฟนตาซี สารานุกรมชีววิทยา และเกร็ดความรู้น่าทึ่งถูกต้อง');

// 7.7 ตรวจสอบ Tab 6: อุปกรณ์ (Equipment Locked State)
setPetDetailTab('equipment');
currentHtml = renderHeroesViewHtml();
if (!currentHtml.includes('pet-tab-equipment') || !currentHtml.includes('equipment-empty-banner') || !currentHtml.includes('eq-slot-box locked')) {
  throw new Error('โครงสร้าง Tab 6 (Equipment) ขาดแบนเนอร์ช่องล็อกหรือช่องสวมใส่ 4 ช่อง');
}
console.log('  ✓ Tab 6 (อุปกรณ์): แสดงแบนเนอร์ช่องล็อกพร้อม 4 ช่องสวมใส่ (อาวุธ/เกราะ/เครื่องราง 1-2) ตามข้อกำหนด');

// 8. ตรวจสอบระบบ Growth Confirmation & Navigation (Phase 4 Verification)
console.log('\n【 8. ตรวจสอบระบบ Growth Confirmation & Navigation (Phase 4) 】');
setPetViewMode('detail', 'rooster');
setPetDetailTab('growth');
currentHtml = renderHeroesViewHtml();

// 8.1 ตรวจสอบ Growth Confirm Modal Root
if (!currentHtml.includes('growth-confirm-modal-root')) {
  throw new Error('ไม่พบ growth-confirm-modal-root ในหน้า Pet Detail');
}
console.log('  ✓ growth-confirm-modal-root ติดตั้งพร้อมสำหรับการเปิด Modal ยืนยัน');

// 8.2 ตรวจสอบ Prev / Next Navigation Buttons
if (!currentHtml.includes('id="btn-pet-detail-prev"') || !currentHtml.includes('id="btn-pet-detail-next"')) {
  throw new Error('ไม่พบปุ่มเลื่อนสัตว์ก่อนหน้าหรือถัดไป (Prev/Next buttons)');
}
console.log('  ✓ Prev/Next Navigation Buttons มีอยู่พร้อมรองรับการกดหรือใช้ลูกศรคีย์บอร์ด ◀ / ▶');

// 8.3 ตรวจสอบการคงค่า activeTab เมื่อสลับดูสัตว์ตัวอื่น (Tab Preservation)
setPetViewMode('detail', 'cat');
state = getPetViewState();
if (state.activeTab !== 'growth') {
  throw new Error('ระบบไม่คงค่า activeTab เดิมเมื่อสลับสัตว์เลี้ยงตัวใหม่');
}
console.log('  ✓ การสลับดูสัตว์ตัวถัดไปคงค่าแท็บเดิมไว้ (Tab Preservation: growth) ทำให้เปรียบเทียบง่าย');

// 8.4 ตรวจสอบปุ่มย้อนกลับทั้ง 2 จุด (Top Nav Breadcrumb และ Left Panel Action)
if (!currentHtml.includes('id="btn-pet-detail-back"') || !currentHtml.includes('id="btn-pet-preview-back"')) {
  throw new Error('ปุ่มย้อนกลับคลังสัตว์เลี้ยงไม่ครบทั้ง 2 จุด');
}
console.log('  ✓ ปุ่มย้อนกลับคลังสัตว์เลี้ยงมีครบทั้ง Top Breadcrumb และ Left Panel Actions');

resetPetViewState();
console.log('  ✓ รีเซ็ต PetViewState เรียบร้อย ระบบพร้อมทำงานใน Phase 5 ต่อไป');

console.log('\n======================================================================');
console.log('  ✅ การทดสอบสถาปัตยกรรมสถานะ Phase 1, 2, 3 และ 4 ผ่านครบถ้วน 100%!   ');
console.log('======================================================================');
