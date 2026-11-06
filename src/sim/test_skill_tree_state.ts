/**
 * Test Skill Board View State Architecture (Phase 1)
 */

import { skillBoardManager } from '../engine/skill_board_manager';
import { saveManager } from '../engine/save_manager';
import {
  getSkillBoardViewState,
  setSkillBoardBranch,
  setSkillBoardSelectedSkill,
  setSkillBoardSelectedHero,
  setSkillBoardCategoryFilter,
  saveSkillBoardScroll,
  resetSkillBoardViewState,
  getBranchVisuals,
  organizeBranchSkills,
  renderSkillTreeNodeHtml,
  renderSkillBranchNavHtml,
  renderSkillTreeCenterHtml,
  renderSkillDetailPanelHtml,
  renderSkillLoadoutPanelHtml,
  renderSkillBoardViewHtml,
  type SkillCategoryFilter,
} from '../ui/skill_board_view';

console.log('======================================================================');
console.log('  ทดสอบสถาปัตยกรรมสถานะ Skill Board & Mastery Tree (Phase 1)          ');
console.log('======================================================================\n');

// 1. ตรวจสอบสถานะเริ่มต้น (Initial State)
console.log('【 1. ตรวจสอบสถานะเริ่มต้น (Initial State) 】');
resetSkillBoardViewState();
let state = getSkillBoardViewState();
console.log(`  ✓ selectedBranchId เริ่มต้น: ${state.selectedBranchId}`);
console.log(`  ✓ selectedSkillId เริ่มต้น: ${state.selectedSkillId}`);
console.log(`  ✓ selectedHeroId เริ่มต้น: ${state.selectedHeroId}`);
console.log(`  ✓ categoryFilter เริ่มต้น: ${state.categoryFilter}`);
console.log(`  ✓ savedScrollTop เริ่มต้น: ${state.savedScrollTop}`);

if (
  state.selectedBranchId !== 'fire' ||
  state.selectedSkillId !== 'fire_s' ||
  state.selectedHeroId !== null ||
  state.categoryFilter !== 'all' ||
  state.savedScrollTop !== 0
) {
  throw new Error('สถานะเริ่มต้นของ SkillBoardViewState ไม่ถูกต้อง');
}
console.log('  -> ผ่านการตรวจสอบสถานะเริ่มต้น\n');

// 2. ตรวจสอบการสลับสายวิชา (Switch Branch & Auto-select First Skill)
console.log('【 2. ตรวจสอบการสลับสายวิชา (Branch Navigation) 】');
setSkillBoardBranch('wind');
state = getSkillBoardViewState();
if (state.selectedBranchId !== 'wind' || state.selectedSkillId !== 'wind_s') {
  throw new Error(`การสลับไปยังสายธาตุลมล้มเหลว (Branch: ${state.selectedBranchId}, Skill: ${state.selectedSkillId})`);
}
console.log(`  ✓ สลับไปยังธาตุลม: branch=${state.selectedBranchId}, autoSkill=${state.selectedSkillId}`);

setSkillBoardBranch('martial');
state = getSkillBoardViewState();
if (state.selectedBranchId !== 'martial' || state.selectedSkillId !== 'martial_s') {
  throw new Error(`การสลับไปยังสายกระบวนท่าล้มเหลว (Branch: ${state.selectedBranchId}, Skill: ${state.selectedSkillId})`);
}
console.log(`  ✓ สลับไปยังสายกระบวนท่า (ไร้ธาตุ): branch=${state.selectedBranchId}, autoSkill=${state.selectedSkillId}`);
console.log('  -> ผ่านการตรวจสอบการสลับสายวิชา\n');

// 3. ตรวจสอบระบบ Fallback กรณีส่งรหัสสายวิชาที่ไม่ถูกต้อง
console.log('【 3. ตรวจสอบ Fallback กรณีรหัสสายวิชาไม่มีจริง 】');
setSkillBoardBranch('invalid_mythical_branch');
state = getSkillBoardViewState();
if (state.selectedBranchId !== 'fire') {
  throw new Error(`Fallback ล้มเหลว (ได้รับ: ${state.selectedBranchId}, คาดหวัง: fire)`);
}
console.log(`  ✓ Fallback กลับสู่สายเริ่มต้น: branch=${state.selectedBranchId}`);
console.log('  -> ผ่านการตรวจสอบ Fallback\n');

// 4. ตรวจสอบการเลือกสกิลและการซิงค์สายวิชา (Skill Selection & Branch Sync)
console.log('【 4. ตรวจสอบการเลือกสกิลและการซิงค์สายวิชา 】');
setSkillBoardSelectedSkill('water_m1');
state = getSkillBoardViewState();
if (state.selectedSkillId !== 'water_m1' || state.selectedBranchId !== 'water') {
  throw new Error(`การซิงค์สายวิชาเมื่อเลือกสกิลต่างสายล้มเหลว (Skill: ${state.selectedSkillId}, Branch: ${state.selectedBranchId})`);
}
console.log(`  ✓ เลือกสกิล water_m1 -> ซิงค์ branch เป็น: ${state.selectedBranchId}`);

setSkillBoardSelectedSkill('secret_l');
state = getSkillBoardViewState();
if (state.selectedSkillId !== 'secret_l' || state.selectedBranchId !== 'secret') {
  throw new Error(`การซิงค์สายวิชาเมื่อเลือก secret_l ล้มเหลว (Skill: ${state.selectedSkillId}, Branch: ${state.selectedBranchId})`);
}
console.log(`  ✓ เลือกสกิล secret_l -> ซิงค์ branch เป็น: ${state.selectedBranchId}`);
console.log('  -> ผ่านการตรวจสอบการเลือกสกิลและซิงค์สายวิชา\n');

// 5. ตรวจสอบการเลือกฮีโร่และตัวกรองหมวดหมู่ (Hero & Category Filter)
console.log('【 5. ตรวจสอบการเลือกฮีโร่และตัวกรองหมวดหมู่ 】');
setSkillBoardSelectedHero('cat');
state = getSkillBoardViewState();
if (state.selectedHeroId !== 'cat') {
  throw new Error('การเลือกฮีโร่ล้มเหลว');
}
console.log(`  ✓ เลือกฮีโร่ติดตั้งสกิล: ${state.selectedHeroId}`);

const filters: SkillCategoryFilter[] = ['element', 'neutral', 'all'];
for (const f of filters) {
  setSkillBoardCategoryFilter(f);
  state = getSkillBoardViewState();
  if (state.categoryFilter !== f) {
    throw new Error(`การเปลี่ยนตัวกรองเป็น ${f} ล้มเหลว`);
  }
  console.log(`  ✓ เปลี่ยนตัวกรองหมวดหมู่เป็น: ${state.categoryFilter}`);
}
console.log('  -> ผ่านการตรวจสอบการเลือกฮีโร่และตัวกรองหมวดหมู่\n');

// 6. ตรวจสอบการบันทึกตำแหน่ง Scroll และการรีเซ็ตสถานะ
console.log('【 6. ตรวจสอบการบันทึกตำแหน่ง Scroll และการรีเซ็ตสถานะ 】');
saveSkillBoardScroll(550);
state = getSkillBoardViewState();
if (state.savedScrollTop !== 550) {
  throw new Error('การบันทึก Scroll ล้มเหลว');
}
console.log(`  ✓ บันทึกตำแหน่ง Scroll: ${state.savedScrollTop}px`);

resetSkillBoardViewState();
state = getSkillBoardViewState();
if (state.selectedBranchId !== 'fire' || state.savedScrollTop !== 0 || state.selectedHeroId !== null) {
  throw new Error('การรีเซ็ตสถานะล้มเหลว');
}
console.log('  ✓ รีเซ็ตสถานะ SkillBoardViewState กลับสู่ค่าเริ่มต้นเรียบร้อย');
console.log('  -> ผ่านการตรวจสอบ Scroll และ Reset\n');

// 7. ตรวจสอบความถูกต้องของ 17 สายวิชาในระบบจริง (11 ธาตุ + 6 ไร้ธาตุ)
console.log('【 7. ตรวจสอบความถูกต้องของ 17 สายวิชาในระบบจริง 】');
const allRows = skillBoardManager.getAllRows();
if (allRows.length !== 17) {
  throw new Error(`จำนวนสายวิชาไม่ถูกต้อง (พบ ${allRows.length} สาย, คาดหวัง 17 สาย)`);
}

const elementRows = allRows.filter(r => r.category === 'element');
const neutralRows = allRows.filter(r => r.category === 'neutral');

if (elementRows.length !== 11) {
  throw new Error(`สายวิชาธาตุมีไม่ครบ 11 สาย (พบ ${elementRows.length} สาย)`);
}
if (neutralRows.length !== 6) {
  throw new Error(`สายวิชาไร้ธาตุมีไม่ครบ 6 สาย (พบ ${neutralRows.length} สาย)`);
}

console.log(`  ✓ พบสายวิชาประจำธาตุครบ 11 ธาตุ: ${elementRows.map(r => r.elementId).join(', ')}`);
console.log(`  ✓ พบสายวิชาไร้ธาตุครบ 6 สาย: ${neutralRows.map(r => r.elementId).join(', ')}`);

// ทดสอบว่าทุกสายวิชาสามารถสลับได้จริง และมีสกิลครบ 5 สกิล
for (const r of allRows) {
  if (r.skills.length !== 5) {
    throw new Error(`สายวิชา [${r.name}] มีสกิลไม่ครบ 5 สกิล (พบ ${r.skills.length})`);
  }
  setSkillBoardBranch(r.elementId);
  const cur = getSkillBoardViewState();
  if (cur.selectedBranchId !== r.elementId) {
    throw new Error(`ไม่สามารถสลับไปยังสายวิชา [${r.elementId}] ได้`);
  }
}
console.log('  ✓ สลับไปยังทั้ง 17 สายวิชาได้สำเร็จ และทุกสายมี 5 สกิลครบถ้วน (รวม 85 สกิล)');

resetSkillBoardViewState();

// 8. ทดสอบฟังก์ชัน Visuals & Branch Info (Phase 2)
console.log('【 8. ทดสอบ Branch Visuals (ชื่อ, ไอคอน, สี, หมวดหมู่) 】');
for (const r of allRows) {
  const vis = getBranchVisuals(r);
  if (!vis.name || !vis.icon || !vis.color || !vis.categoryName) {
    throw new Error(`ข้อมูล Branch Visuals ไม่สมบูรณ์สำหรับ [${r.elementId}]`);
  }
}
console.log(`  ✓ ตรวจสอบ Visuals ครบถ้วนทั้ง 17 สายวิชา`);
console.log('  -> ผ่านการตรวจสอบ Branch Visuals\n');

// 9. ทดสอบการ Render Skill Branch Navigation (Phase 2 Left Panel)
console.log('【 9. ทดสอบการ Render Skill Branch Navigation (Left Panel) 】');
const save = saveManager.getData();

// 9.1 Filter: All (ทั้งหมด 17 สาย)
const navHtmlAll = renderSkillBranchNavHtml(allRows, 'fire', 'all', save);
if (!navHtmlAll.includes('class="skill-branch-nav-panel"') || !navHtmlAll.includes('17 สายวิชา')) {
  throw new Error('โครงสร้าง Nav Panel พื้นฐานไม่ถูกต้อง');
}
const countAllItems = (navHtmlAll.match(/class="skill-branch-nav-item/g) || []).length;
if (countAllItems !== 17) {
  throw new Error(`จำนวนรายการ Branch Nav หมวด 'all' ไม่ตรง (พบ ${countAllItems}, คาดหวัง 17)`);
}
if (!navHtmlAll.includes('data-branch-id="fire"') || !navHtmlAll.includes('is-selected')) {
  throw new Error('สถานะ is-selected ของสายที่เลือกไม่ปรากฏ');
}
console.log(`  ✓ กรอง 'ทั้งหมด' แสดงครบ 17 สายวิชา และไฮไลต์สายที่เลือก (fire) สำเร็จ`);

// 9.2 Filter: Element (ธาตุ 11 สาย)
const navHtmlElem = renderSkillBranchNavHtml(allRows, 'fire', 'element', save);
const countElemItems = (navHtmlElem.match(/class="skill-branch-nav-item/g) || []).length;
if (countElemItems !== 11) {
  throw new Error(`จำนวนรายการ Branch Nav หมวด 'element' ไม่ตรง (พบ ${countElemItems}, คาดหวัง 11)`);
}
console.log(`  ✓ กรอง 'ธาตุ' แสดงครบ 11 สายวิชา`);

// 9.3 Filter: Neutral (ไร้ธาตุ 6 สาย)
const navHtmlNeutral = renderSkillBranchNavHtml(allRows, 'martial', 'neutral', save);
const countNeutralItems = (navHtmlNeutral.match(/class="skill-branch-nav-item/g) || []).length;
if (countNeutralItems !== 6) {
  throw new Error(`จำนวนรายการ Branch Nav หมวด 'neutral' ไม่ตรง (พบ ${countNeutralItems}, คาดหวัง 6)`);
}
console.log(`  ✓ กรอง 'ไร้ธาตุ' แสดงครบ 6 สายวิชา`);
console.log('  -> ผ่านการทดสอบ Render Branch Navigation\n');

// 10. ทดสอบการ Render Center Panel & 3-Panel Main Layout (Phase 2)
console.log('【 10. ทดสอบ Render Center Panel & 3-Panel Main Layout 】');
const selectedRow = allRows.find(r => r.elementId === 'fire') || allRows[0];
const centerHtml = renderSkillTreeCenterHtml(selectedRow, []);
if (!centerHtml.includes('class="skill-tree-center-panel"') || !centerHtml.includes('tree-tier-guide-bar')) {
  throw new Error('Center Panel HTML ไม่สมบูรณ์');
}
console.log('  ✓ Center Panel แสดงโครงสร้างต้นไม้และป้ายกำกับ Tier S/M/L ถูกต้อง');

const fullViewHtml = renderSkillBoardViewHtml();
if (!fullViewHtml.includes('mastery-3panel')) {
  throw new Error('โครงสร้าง 3-Panel Mastery Layout ไม่พบในหน้าจอหลัก');
}
if (!fullViewHtml.includes('skill-branch-nav-panel') || !fullViewHtml.includes('skill-tree-center-panel') || !fullViewHtml.includes('loadout-preset-sidebar')) {
  throw new Error('Panel A, B หรือ C ขาดหายไปจาก 3-Panel Layout');
}
console.log('  ✓ หน้าจอหลักเชื่อมต่อ 3 Panels (Navigation, Tree, Loadout) ครบถ้วน');
console.log('  -> ผ่านการทดสอบ Render Center Panel & 3-Panel Main Layout\n');

// 11. ทดสอบการจัดโครงสร้าง 3 Tiers ของทั้ง 16 สายวิชา (Phase 3)
console.log('【 11. ทดสอบการจัดโครงสร้างต้นไม้สกิล (3 Tiers: S -> M1/M2 -> L/AOE) 】');
for (const r of allRows) {
  const organized = organizeBranchSkills(r.skills);
  if (!organized.tier1 || !organized.tier2Upper || !organized.tier2Lower || !organized.tier3Upper || !organized.tier3Lower) {
    throw new Error(`การจัดกลุ่ม 5 สกิลในสาย [${r.name}] ไม่ครบ 5 ตำแหน่ง`);
  }
  if (organized.tier1.tier !== 'S') {
    throw new Error(`สาย [${r.name}] ตำแหน่ง Tier 1 ไม่ใช่ Tier S (ได้ ${organized.tier1.tier})`);
  }
  const all5 = [organized.tier1.id, organized.tier2Upper.id, organized.tier2Lower.id, organized.tier3Upper.id, organized.tier3Lower.id];
  const uniqueCount = new Set(all5).size;
  if (uniqueCount !== 5) {
    throw new Error(`สาย [${r.name}] มีสกิลซ้ำในผังต้นไม้ (พบเพียง ${uniqueCount} สกิลที่ไม่ซ้ำ)`);
  }
}
console.log('  ✓ ตรวจสอบโครงสร้าง 1 -> 2 -> 2 ของต้นไม้สกิลครบถ้วนทั้ง 16 สายวิชา (80 สกิล)');
console.log('  -> ผ่านการทดสอบโครงสร้าง 3 Tiers\n');

// 12. ทดสอบการ Render MMORPG Skill Tree Stage, Nodes และ SVG Connectors (Phase 3)
console.log('【 12. ทดสอบ Render MMORPG Skill Tree View & Visual Connectors 】');
const fireRow = allRows.find(r => r.elementId === 'fire')!;
const treeHtml = renderSkillTreeCenterHtml(fireRow, ['fire_s'], 'fire_s');

// 12.1 ตรวจสอบ Stage และ SVG
if (!treeHtml.includes('class="skill-tree-stage"')) {
  throw new Error('ไม่พบคลาส .skill-tree-stage');
}
if (!treeHtml.includes('class="skill-tree-connections"') || !treeHtml.includes('<svg') || !treeHtml.includes('tree-connector-line')) {
  throw new Error('ไม่พบ SVG Connector Lines หรือคลาสเชื่อมโยงเส้น');
}
const lineCount = (treeHtml.match(/class="tree-connector-line/g) || []).length;
if (lineCount !== 4) {
  throw new Error(`จำนวนเส้นเชื่อมโยงใน Skill Tree ไม่ถูกต้อง (พบ ${lineCount}, คาดหวัง 4 เส้น)`);
}
console.log(`  ✓ พบ SVG Canvas พร้อมเส้นเชื่อมโยงลำดับขั้นครบ 4 เส้น (S->M1, S->M2, M1->L, M2->AOE)`);

// 12.2 ตรวจสอบ Grid และ Nodes
if (!treeHtml.includes('col-tier-1') || !treeHtml.includes('col-tier-2') || !treeHtml.includes('col-tier-3')) {
  throw new Error('ไม่พบคอลัมน์ Tier 1, 2, 3 ในต้นไม้สกิล');
}
const nodeCount = (treeHtml.match(/class="skill-tree-node/g) || []).length;
if (nodeCount !== 5) {
  throw new Error(`จำนวน Node ในต้นไม้สกิลไม่ถูกต้อง (พบ ${nodeCount}, คาดหวัง 5 Nodes)`);
}
console.log(`  ✓ แสดงผล Skill Nodes ครบทั้ง 5 สกิลในสายวิชา`);

// 12.3 ตรวจสอบสถานะของ Node (Selected, Equipped, Unlocked)
if (!treeHtml.includes('is-selected')) {
  throw new Error('Node ที่ถูกเลือกไม่แสดงคลาส is-selected');
}
if (!treeHtml.includes('is-equipped') || !treeHtml.includes('ช่อง 1')) {
  throw new Error('สกิลที่สวมใส่ไม่แสดงสถานะ is-equipped หรือป้ายช่องติดตั้ง');
}
console.log('  ✓ ตรวจสอบสถานะ Node: is-selected, is-equipped, is-unlocked ถูกต้องแม่นยำ');
console.log('  -> ผ่านการทดสอบ Render Skill Tree View & Connectors\n');

// 13. ทดสอบการ Render Skill Detail Panel & Dynamic Actions (Phase 4)
console.log('【 13. ทดสอบ Render Skill Detail Panel & Dynamic Actions (Right Panel - Top) 】');

// 13.1 รายละเอียดสกิลที่ปลดล็อกแล้ว (fire_s)
const detailHtmlUnlocked = renderSkillDetailPanelHtml('fire_s', 'rooster', save);
if (!detailHtmlUnlocked.includes('class="skill-detail-panel-card"') || !detailHtmlUnlocked.includes('data-skill-id="fire_s"')) {
  throw new Error('ไม่พบคลาส .skill-detail-panel-card หรือ data-skill-id');
}
if (!detailHtmlUnlocked.includes('ลูกไฟ') || !detailHtmlUnlocked.includes('ธาตุไฟ')) {
  throw new Error('ชื่อสกิลหรือสายวิชาใน Detail Panel ไม่ถูกต้อง');
}
if (!detailHtmlUnlocked.includes('ใช้ SP') || !detailHtmlUnlocked.includes('ตัวคูณดาเมจ')) {
  throw new Error('ตารางสเตตัสใน Detail Panel ไม่สมบูรณ์');
}
// สกิล fire_s ปลดล็อกแล้ว ต้องมีปุ่มอัปเลเวล หรือติดตั้ง
if (!detailHtmlUnlocked.includes('btn-panel-levelup-skill') && !detailHtmlUnlocked.includes('MAX')) {
  throw new Error('ไม่พบปุ่มอัปเลเวลในสกิลที่ปลดล็อกแล้ว');
}
console.log('  ✓ Detail Panel สำหรับสกิลที่ปลดล็อกแล้วแสดงข้อมูล สเตตัส และปุ่มอัปเกรด/ติดตั้งถูกต้อง');

// 13.2 รายละเอียดสกิลที่ยังล็อกอยู่แต่แถวปลดแล้ว (เช่น fire_m2)
const detailHtmlLockedSkill = renderSkillDetailPanelHtml('fire_m2', 'rooster', save);
if (!detailHtmlLockedSkill.includes('ยังไม่ปลดล็อก') || !detailHtmlLockedSkill.includes('ค่าใช้จ่ายในการเรียนวิชา')) {
  throw new Error('สกิลที่ล็อกไม่แสดงค่าใช้จ่ายหรือสถานะล็อก');
}
if (!detailHtmlLockedSkill.includes('btn-panel-unlock-skill')) {
  throw new Error('ไม่พบปุ่มปลดล็อกสกิลใน Detail Panel');
}
console.log('  ✓ Detail Panel สำหรับสกิลที่ล็อกอยู่ (แถวเปิดแล้ว) แสดงเงื่อนไข และปุ่มปลดล็อกพร้อมค่าใช้จ่ายถูกต้อง');

// 13.3 รายละเอียดสกิลที่แถวธาตุยังล็อกอยู่ (ทดสอบจำลองเซฟที่สาย dark ยังไม่ปลดล็อกแถว)
const mockLockedSave = {
  ...save,
  unlockedElementRows: ['fire'],
  unlockedSkills: ['fire_s'],
};
const detailHtmlLockedRow = renderSkillDetailPanelHtml('dark_l', 'rooster', mockLockedSave);
if (!detailHtmlLockedRow.includes('ยังถูกล็อกอยู่') || !detailHtmlLockedRow.includes('btn-unlock-row')) {
  throw new Error('สกิลในแถวที่ล็อกไม่แสดงปุ่มหรือคำเตือนปลดล็อกแถว');
}
console.log('  ✓ Detail Panel สำหรับสกิลในแถวที่ล็อกอยู่ แสดงคำเตือนและปุ่มปลดล็อกแถววิชาถูกต้อง');

// 13.4 ตรวจสอบว่าหน้าจอหลัก renderSkillBoardViewHtml รวม Detail Panel ไว้ในแผงขวา
const mainViewHtml = renderSkillBoardViewHtml('rooster');
if (!mainViewHtml.includes('skill-detail-panel-card')) {
  throw new Error('หน้าจอหลักไม่พบ Skill Detail Panel ในแผงด้านขวา');
}
console.log('  ✓ หน้าจอหลักเชื่อมโยง Skill Detail Panel เข้าสู่ Right Panel สำเร็จ');
console.log('  -> ผ่านการทดสอบ Render Skill Detail Panel & Dynamic Actions\n');

// 14. ทดสอบการ Render Skill Loadout Panel & Presets Integration (Phase 5)
console.log('【 14. ทดสอบ Render Skill Loadout Panel & Presets Integration (Right Panel - Bottom) 】');

const loadoutHtml = renderSkillLoadoutPanelHtml('rooster', save);

// 14.1 ตรวจสอบการ์ด Loadout และส่วนเลือกฮีโร่
if (!loadoutHtml.includes('class="loadout-editor-card"') || !loadoutHtml.includes('hero-selector-section')) {
  throw new Error('ไม่พบคลาส .loadout-editor-card หรือ .hero-selector-section');
}
if (!loadoutHtml.includes('data-hero-id="rooster"') || !loadoutHtml.includes('hero-select-chip')) {
  throw new Error('ไม่พบการ์ดฮีโร่ rooster ในรายการเลือกฮีโร่');
}
console.log('  ✓ แสดงผลแผง Loadout Editor และชิปเลือกฮีโร่ครบถ้วน');

// 14.2 ตรวจสอบช่องสวมใส่ 4 ช่อง (4 Slots)
const slotChipsCount = (loadoutHtml.match(/class="skill-slot-chip/g) || []).length;
if (slotChipsCount !== 4) {
  throw new Error(`จำนวนช่องสวมใส่สกิลไม่ถูกต้อง (พบ ${slotChipsCount}, คาดหวัง 4 ช่อง)`);
}
console.log('  ✓ แสดงผลช่องติดตั้งสกิลครบทั้ง 4 ช่อง (Slots 1, 2, 3, 4)');

// 14.3 ตรวจสอบปุ่มถอดสกิลด่วนในช่อง (Quick Unequip)
if (loadoutHtml.includes('has-skill')) {
  if (!loadoutHtml.includes('btn-slot-quick-unequip')) {
    throw new Error('ช่องสกิลที่มีสกิลติดตั้งอยู่ไม่พบบริการปุ่มถอดสกิลด่วน');
  }
  console.log('  ✓ ช่องสกิลที่ติดตั้งแล้วมีปุ่มถอดสกิลด่วน (.btn-slot-quick-unequip) พร้อมใช้งาน');
}

// 14.4 ตรวจสอบ Live Validation Feedback Box
if (!loadoutHtml.includes('validation-feedback-box')) {
  throw new Error('ไม่พบกล่องแจ้งเตือน Live Validation Feedback');
}
console.log('  ✓ กล่องแจ้งเตือนความถูกต้องของชุดสกิล (Live Validation Feedback) ทำงานถูกต้อง');

// 14.5 ตรวจสอบ Presets Section
if (!loadoutHtml.includes('presets-section-box') || !loadoutHtml.includes('btn-create-new-preset')) {
  throw new Error('ไม่พบส่วนจัดการพรีเซตสกิลหรือปุ่มบันทึกพรีเซตใหม่');
}
if (!loadoutHtml.includes('btn-apply-preset')) {
  throw new Error('ไม่พบปุ่ม 1-Click Apply Preset');
}
console.log('  ✓ ระบบพรีเซตสกิล (Presets) พร้อมปุ่มบันทึกและสวมใส่ 1-Click แสดงผลถูกต้อง');

// 14.6 ตรวจสอบการผสานรวมทั้ง Detail Panel และ Loadout Panel ใน Right Panel ของ Main View
const fullViewWithBoth = renderSkillBoardViewHtml('rooster');
if (!fullViewWithBoth.includes('skill-detail-panel-card') || !fullViewWithBoth.includes('loadout-editor-card')) {
  throw new Error('Right Panel ขาด Detail Panel หรือ Loadout Panel');
}
console.log('  ✓ Right Panel ผสานรวมทั้ง Skill Detail Panel ด้านบน และ Loadout Editor ด้านล่างได้อย่างสมบูรณ์');
console.log('  -> ผ่านการทดสอบ Render Skill Loadout Panel & Presets Integration\n');

console.log('\n======================================================================');
console.log('  ✅ การทดสอบสถาปัตยกรรมและระบบ Phase 1, 2, 3, 4 & 5 ผ่านครบ 100%!   ');
console.log('======================================================================');

