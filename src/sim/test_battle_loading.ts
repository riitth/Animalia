/**
 * Test Battle Loading View (Cozy Pixel Art Fantasy Transition)
 * ตรวจสอบความถูกต้องของหน้าจอโหลดข้อมูลการต่อสู้:
 * 1. ฟังก์ชันคำนวณข้อความสถานะตามช่วงเปอร์เซ็นต์ (getLoadingStatusText)
 * 2. คลังเกร็ดความรู้ผู้พิทักษ์ (COZY_BATTLE_TIPS & getRandomCozyTip)
 * 3. การเรนเดอร์โครงสร้าง HTML (renderBattleLoadingHtml)
 *    - Header / Stage Title & Subtitle
 *    - Player Team & Enemy Team Showcase
 *    - VS Center & Element Advantage Pill
 *    - Cozy Progress Bar Frame, Track, Fill & Mascot Runner
 *    - Tip Box & Skip Button
 */

import {
  getLoadingStatusText,
  getRandomCozyTip,
  renderBattleLoadingHtml,
  COZY_BATTLE_TIPS,
  type BattleLoadingData,
} from '../ui/battle_loading_view';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${msg}`);
    process.exit(1);
  }
  console.log(`  ✓ ${msg}`);
}

console.log('======================================================================');
console.log('  ทดสอบหน้าจอโหลดข้อมูลการต่อสู้ (Cozy Pixel Art Fantasy Loading)    ');
console.log('======================================================================\n');

// ==========================================
// 1. ตรวจสอบข้อความสถานะตามช่วงเปอร์เซ็นต์
// ==========================================
console.log('【 1. ตรวจสอบข้อความสถานะตามระดับความคืบหน้า (Progressive Status Messages) 】');
assert(getLoadingStatusText(0).includes('ระดมพล'), '0% แสดงข้อความระดมพลสหายสัตว์ป่า');
assert(getLoadingStatusText(15).includes('ระดมพล'), '15% แสดงข้อความระดมพลสหายสัตว์ป่า');
assert(getLoadingStatusText(25).includes('ประสานพลังวิญญาณธาตุ'), '25% แสดงข้อความประสานพลังธาตุ');
assert(getLoadingStatusText(45).includes('ประสานพลังวิญญาณธาตุ'), '45% แสดงข้อความประสานพลังธาตุ');
assert(getLoadingStatusText(55).includes('ตรวจสอบคัมภีร์สกิล'), '55% แสดงข้อความตรวจสอบคัมภีร์สกิล');
assert(getLoadingStatusText(70).includes('ตรวจสอบคัมภีร์สกิล'), '70% แสดงข้อความตรวจสอบคัมภีร์สกิล');
assert(getLoadingStatusText(75).includes('จัดเรียงยุทธวิธี'), '75% แสดงข้อความจัดเรียงยุทธวิธี');
assert(getLoadingStatusText(90).includes('จัดเรียงยุทธวิธี'), '90% แสดงข้อความจัดเรียงยุทธวิธี');
assert(getLoadingStatusText(95).includes('สังเวียนเปิดออกแล้ว'), '95% แสดงข้อความสังเวียนเปิดออกแล้วพร้อมลุย');
assert(getLoadingStatusText(100).includes('สังเวียนเปิดออกแล้ว'), '100% แสดงข้อความสังเวียนเปิดออกแล้วพร้อมลุย');

// ==========================================
// 2. ตรวจสอบคลังเกร็ดความรู้ผู้พิทักษ์ (Tips Pool)
// ==========================================
console.log('\n【 2. ตรวจสอบคลังเกร็ดความรู้ (Cozy Fantasy Tips) 】');
assert(COZY_BATTLE_TIPS.length >= 8, `มีเกร็ดความรู้อย่างน้อย 8 ข้อ (พบ ${COZY_BATTLE_TIPS.length} ข้อ)`);
const randomTip = getRandomCozyTip();
assert(typeof randomTip === 'string' && randomTip.length > 10, 'สุ่มเกร็ดความรู้ได้สำเร็จ');
assert(COZY_BATTLE_TIPS.includes(randomTip), 'เกร็ดความรู้ที่สุ่มได้อยู่ในคลังที่กำหนด');

// ==========================================
// 3. ตรวจสอบการเรนเดอร์โครงสร้าง HTML
// ==========================================
console.log('\n【 3. ตรวจสอบการเรนเดอร์ HTML โครงสร้างหน้าจอโหลด 】');

const mockData: BattleLoadingData = {
  stageTitle: 'ศึกด่าน 1-1: ทางเข้าป่าหมอกทมิฬ',
  stageSubtitle: 'บทที่ 1 • หมอกหนาทึบและไอพิษคละคลุ้ง',
  stageBadge: '🗺️ CAMPAIGN 1-1',
  matchupText: '🟢 ธาตุไฟ ได้เปรียบธาตุพืช (+30% DMG)',
  matchupType: 'advantage',
  playerTeam: [
    {
      name: 'ไก่',
      avatar: '🐓',
      element: 'fire',
      elementName: 'ไฟ',
      elementIcon: '🔥',
      level: 4,
      role: 'Striker',
      isMain: true,
    },
    {
      name: 'แมว',
      avatar: '🐱',
      element: 'wind',
      elementName: 'ลม',
      elementIcon: '🌪️',
      level: 4,
      role: 'Assassin',
      isMain: false,
    },
  ],
  enemyTeam: [
    {
      name: 'สปอร์เห็ดพิษคลั่ง',
      avatar: '🍄',
      element: 'poison',
      elementName: 'พิษ',
      elementIcon: '☠️',
      level: 3,
      role: 'Controller',
      isBoss: false,
    },
  ],
  customTip: 'เกร็ดความรู้เฉพาะกิจสำหรับทดสอบ',
};

const html = renderBattleLoadingHtml(mockData, 45);

// ตรวจสอบ Container หลักและฉากหลังอนุภาค
assert(html.includes('battle-loading-container'), 'มีกล่องหลัก battle-loading-container');
assert(html.includes('loading-backdrop-fx'), 'มีฉากหลังอนุภาคเวทมนตร์ loading-backdrop-fx');
assert(html.includes('loading-firefly'), 'มีอนุภาคหิ่งห้อยเวทมนตร์ loading-firefly');

// ตรวจสอบ Header
assert(html.includes('🗺️ CAMPAIGN 1-1'), 'แสดงป้ายด่านถูกต้อง');
assert(html.includes('ศึกด่าน 1-1: ทางเข้าป่าหมอกทมิฬ'), 'แสดงชื่อด่านถูกต้อง');
assert(html.includes('บทที่ 1 • หมอกหนาทึบและไอพิษคละคลุ้ง'), 'แสดงคำบรรยายด่านถูกต้อง');

// ตรวจสอบ Showcase ทีมเราและทีมศัตรู
assert(html.includes('🐾 สหายผู้พิทักษ์'), 'มีหัวข้อทีมเรา');
assert(html.includes('ไก่'), 'แสดงชื่อไก่ (ตัวหลัก)');
assert(html.includes('🐓'), 'แสดง Avatar ไก่');
assert(html.includes('🔥'), 'แสดงไอคอนธาตุไฟ');
assert(html.includes('⚔️ ตัวหลัก'), 'แสดงป้ายระบุตัวหลัก');
assert(html.includes('แมว'), 'แสดงชื่อแมว (ตัวสำรอง)');
assert(html.includes('🛡️ สำรอง'), 'แสดงป้ายระบุตัวสำรอง');

assert(html.includes('👾 ศัตรูประจำถิ่น'), 'มีหัวข้อศัตรู');
assert(html.includes('สปอร์เห็ดพิษคลั่ง'), 'แสดงชื่อศัตรู');
assert(html.includes('🍄'), 'แสดง Avatar ศัตรู');

// ตรวจสอบ VS Emblem และ Matchup Pill
assert(html.includes('vs-text'), 'มีโลโก้ VS ตรงกลาง');
assert(html.includes('matchup-adv'), 'มีคลาสแสดงความได้เปรียบธาตุ');
assert(html.includes('ได้เปรียบธาตุพืช (+30% DMG)'), 'แสดงข้อความความได้เปรียบธาตุชัดเจน');

// ตรวจสอบ Mascot Runner
assert(html.includes('loading-mascot-runner'), 'มีสัตว์ป่าตัวนำโชควิ่งบนเลน');
assert(html.includes('left: 45%'), 'ตำแหน่งตัววิ่งอยู่ที่ 45% ตามค่า progress');

// ตรวจสอบ Progress Bar
assert(html.includes('loading-progress-frame'), 'มีกรอบ Progress Bar สไตล์ Fantasy');
assert(html.includes('loading-progress-track'), 'มีร่องหลอด Progress Track');
assert(html.includes('loading-progress-fill'), 'มีแถบโหลด Progress Fill');
assert(html.includes('width: 45%'), 'ความกว้างของแถบโหลดคือ 45%');
assert(html.includes('[ 45% ]'), 'แสดงตัวเลขเปอร์เซ็นต์ [ 45% ] ชัดเจน');
assert(html.includes('ประสานพลังวิญญาณธาตุ'), 'แสดงข้อความสถานะที่สอดคล้องกับ 45%');

// ตรวจสอบ Tip Box & Skip Button
assert(html.includes('loading-tip-box'), 'มีกล่องเกร็ดความรู้ผู้พิทักษ์');
assert(html.includes('เกร็ดความรู้เฉพาะกิจสำหรับทดสอบ'), 'แสดงข้อความเกร็ดความรู้ถูกต้อง');
assert(html.includes('btn-skip-loading'), 'มีปุ่มแตะเพื่อข้าม (Skip)');

console.log('\n======================================================================');
console.log('  🎉 การทดสอบระบบ Battle Loading Transition ผ่านฉลุย 100%!           ');
console.log('======================================================================');

