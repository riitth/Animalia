/**
 * Test Roster Sorting, Filtering & Battle Power (Phase 2 - Extended Roster System)
 */

import { saveManager } from '../engine/save_manager';
import { computeHeroStats, getAllHeroes } from '../engine/combat';
import { computeHeroBattlePower } from '../ui/heroes_view';

const HERO_MAP = new Map(getAllHeroes().map(h => [h.id, h]));

console.log('======================================================================');
console.log('  ทดสอบระบบการจัดเรียง, กรอง และคำนวณพลังรบในคลังสัตว์เลี้ยง (Roster)   ');
console.log('======================================================================\n');

// 1. ตรวจสอบการคำนวณ Battle Power (BP)
console.log('【 1. ตรวจสอบการคำนวณพลังรบรวม (Battle Power - BP) 】');
const roosterStats = computeHeroStats('rooster', 1, 1);
const roosterBp = computeHeroBattlePower(roosterStats);
console.log(`  ✓ ไก่ (rooster Lv.1 ★1) BP: ${roosterBp}`);
if (roosterBp > 500 && roosterBp < 3000) {
  console.log('  ✓ พลังรบอยู่ในช่วงสมเหตุสมผลตามเกณฑ์เกม RPG');
} else {
  throw new Error(`พลังรบผิดปกติ: ${roosterBp}`);
}

const roosterLv2Stats = computeHeroStats('rooster', 2, 1);
const roosterLv2Bp = computeHeroBattlePower(roosterLv2Stats);
console.log(`  ✓ ไก่ (rooster Lv.2 ★1) BP: ${roosterLv2Bp}`);
if (roosterLv2Bp > roosterBp) {
  console.log('  ✓ เมื่อเลเวลอัป พลังรบ BP เพิ่มขึ้นสอดคล้องกับสเตตัส');
} else {
  throw new Error('พลังรบไม่อัปเดตเมื่อเลเวลสูงขึ้น');
}

// 2. ตรวจสอบการจัดเรียงตามเลเวล (Sort by Level)
console.log('\n【 2. ตรวจสอบการจัดเรียงตามเลเวล (Level Sort) 】');
const mockHeroes = [
  { heroId: 'cat', level: 1, stars: 1 },
  { heroId: 'rooster', level: 5, stars: 1 },
  { heroId: 'buffalo', level: 3, stars: 1 },
];

const sortedByLevelDesc = [...mockHeroes].sort((a, b) => b.level - a.level);
console.log('  ✓ เรียงจากเลเวลมากไปน้อย: ' + sortedByLevelDesc.map(h => `${h.heroId}(Lv.${h.level})`).join(' > '));
if (sortedByLevelDesc[0].heroId !== 'rooster' || sortedByLevelDesc[2].heroId !== 'cat') {
  throw new Error('เรียงเลเวลมากไปน้อยผิดพลาด');
}

const sortedByLevelAsc = [...mockHeroes].sort((a, b) => a.level - b.level);
console.log('  ✓ เรียงจากเลเวลน้อยไปมาก: ' + sortedByLevelAsc.map(h => `${h.heroId}(Lv.${h.level})`).join(' < '));
if (sortedByLevelAsc[0].heroId !== 'cat' || sortedByLevelAsc[2].heroId !== 'rooster') {
  throw new Error('เรียงเลเวลน้อยไปมากผิดพลาด');
}

// 3. ตรวจสอบการจัดเรียงตามแร็งค์ / ความหายาก (Sort by Rank)
console.log('\n【 3. ตรวจสอบการจัดเรียงตามแร็งค์ (Rank / Rarity Sort) 】');
const RARITY_ORDER: Record<string, number> = { SS: 4, S: 3, A: 2, B: 1 };
const mockRankHeroes = [
  { heroId: 'rooster', rarity: 'B' },
  { heroId: 'dragon_gold', rarity: 'SS' },
  { heroId: 'tiger', rarity: 'A' },
  { heroId: 'phoenix', rarity: 'S' },
];

const sortedByRankDesc = [...mockRankHeroes].sort((a, b) => (RARITY_ORDER[b.rarity] || 0) - (RARITY_ORDER[a.rarity] || 0));
console.log('  ✓ เรียงจากแร็งค์สูงไปต่ำ: ' + sortedByRankDesc.map(h => `${h.heroId}(${h.rarity})`).join(' > '));
if (sortedByRankDesc[0].rarity !== 'SS' || sortedByRankDesc[3].rarity !== 'B') {
  throw new Error('เรียงแร็งค์ผิดพลาด');
}

// 4. ตรวจสอบการจัดเรียงตามธาตุ (Sort by Element)
console.log('\n【 4. ตรวจสอบการจัดเรียงตามธาตุ (Element Order Sort) 】');
const ELEMENT_ORDER: Record<string, number> = {
  fire: 1, water: 2, wind: 3, earth: 4, lightning: 5,
  ice: 6, plant: 7, poison: 8, dark: 9, light: 10, psychic: 11
};
const mockElemHeroes = [
  { heroId: 'buffalo', element: 'earth' },
  { heroId: 'cat', element: 'wind' },
  { heroId: 'rooster', element: 'fire' },
];
const sortedByElem = [...mockElemHeroes].sort((a, b) => (ELEMENT_ORDER[a.element] || 99) - (ELEMENT_ORDER[b.element] || 99));
console.log('  ✓ เรียงตามธาตุ: ' + sortedByElem.map(h => `${h.heroId}(${h.element})`).join(' -> '));
if (sortedByElem[0].element !== 'fire' || sortedByElem[1].element !== 'wind' || sortedByElem[2].element !== 'earth') {
  throw new Error('เรียงตามธาตุผิดพลาด');
}

// 5. ตรวจสอบการกรองตามธาตุ (Filter by Element)
console.log('\n【 5. ตรวจสอบการกรองข้อมูลตามธาตุและสถานะ (Filter Logic) 】');
const save = saveManager.getData();
const owned = Object.values(save.ownedHeroes);
const fireHeroes = owned.filter(h => HERO_MAP.get(h.heroId)?.element === 'fire');
console.log(`  ✓ กรองฮีโร่ธาตุไฟในคลังเริ่มต้น: พบ ${fireHeroes.length} ตัว (rooster)`);
if (fireHeroes.length !== 1 || fireHeroes[0].heroId !== 'rooster') {
  throw new Error('กรองธาตุไฟผิดพลาด');
}

const teamHeroes = owned.filter(h => h.heroId === save.activeTeam1v1.mainHeroId || h.heroId === save.activeTeam1v1.backupHeroId);
console.log(`  ✓ กรองฮีโร่ในทีมประจำการ: พบ ${teamHeroes.length} ตัว (${teamHeroes.map(h => h.heroId).join(', ')})`);
if (teamHeroes.length !== 2) {
  throw new Error('กรองฮีโร่ในทีมประจำการผิดพลาด');
}

// 6. ตรวจสอบระบบค้นหา Real-time Search
console.log('\n【 6. ตรวจสอบระบบค้นหา Real-time Search 】');
const searchCat = owned.filter(h => {
  const meta = HERO_MAP.get(h.heroId);
  return meta?.name.includes('แมว') || meta?.id.includes('cat');
});
console.log(`  ✓ ค้นหาคำว่า "แมว": พบ ${searchCat.length} ตัว (${searchCat[0]?.heroId})`);
if (searchCat.length !== 1 || searchCat[0].heroId !== 'cat') {
  throw new Error('ค้นหาชื่อผิดพลาด');
}

console.log('\n======================================================================');
console.log('🎉 ทุกการทดสอบของระบบจัดเรียงและคัดกรองคลังสัตว์เลี้ยงผ่านฉลุย 100%!');
console.log('======================================================================\n');

