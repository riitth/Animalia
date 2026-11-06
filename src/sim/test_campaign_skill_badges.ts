/**
 * Test Campaign Stage Briefing Skill Icon Badges
 * ตรวจสอบความถูกต้องของการแปลงรหัสสกิล (Skill ID) เป็นไอคอนสกิลและชื่อสกิล RPG ในหน้าต่างจัดทัพก่อนสู้
 */

import { getSkillBriefVisuals, renderSkillBriefBadge, renderStageBriefingModalHtml } from '../ui/campaign_view';
import { campaignManager } from '../engine/campaign_manager';
import { saveManager } from '../engine/save_manager';

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`  ✓ ${message}`);
}

console.log('======================================================================');
console.log('  ทดสอบการแสดงผลไอคอนสกิลในหน้าจัดทัพก่อนสู้ (Stage Briefing Skill Badges)');
console.log('======================================================================\n');

// 1. ตรวจสอบข้อมูล Visuals ของสกิลสายธาตุและสายไร้ธาตุ
console.log('【 1. ตรวจสอบ getSkillBriefVisuals สำหรับสายธาตุและสายไร้ธาตุ 】');
const plantSkill = getSkillBriefVisuals('plant_s');
assert(plantSkill.icon === '🌿', 'plant_s มีไอคอนเป็น 🌿 (พืช)');
assert(plantSkill.name.length > 0, `plant_s มีชื่อสกิลภาษาไทย: ${plantSkill.name}`);
assert(plantSkill.tier === 'S', 'plant_s มี Tier S');
assert(plantSkill.spCost > 0, `plant_s มีค่าร่าย SP: ${plantSkill.spCost}`);

const martialSkill = getSkillBriefVisuals('martial_s');
assert(martialSkill.icon === '🥋', 'martial_s มีไอคอนเป็น 🥋 (กระบวนท่า)');
assert(martialSkill.branchName.includes('กระบวนท่า'), 'martial_s ระบุชื่อสายวิชากระบวนท่า');

const trickSkill = getSkillBriefVisuals('trick_s');
assert(trickSkill.icon === '🎭', 'trick_s มีไอคอนเป็น 🎭 (เล่ห์กล)');

const catalystSkill = getSkillBriefVisuals('catalyst_s');
assert(catalystSkill.icon === '🔋', 'catalyst_s มีไอคอนเป็น 🔋 (เร่งประจุ)');

const earthSkill = getSkillBriefVisuals('earth_m2');
assert(earthSkill.icon === '🪨', 'earth_m2 มีไอคอนเป็น 🪨 (ดิน)');
assert(earthSkill.tier === 'M', 'earth_m2 มี Tier M');

// 2. ตรวจสอบการเรนเดอร์ HTML ชิปไอคอนสกิล (renderSkillBriefBadge)
console.log('\n【 2. ตรวจสอบ renderSkillBriefBadge 】');
const plantBadgeHtml = renderSkillBriefBadge('plant_s');
assert(plantBadgeHtml.includes('class="sk-brief-chip tier-s"'), 'มีคลาส sk-brief-chip และ tier-s');
assert(plantBadgeHtml.includes('class="sk-brief-icon">🌿</span>'), 'มีไอคอน 🌿 บรรจุอยู่ใน sk-brief-icon');
assert(plantBadgeHtml.includes(plantSkill.name), `แสดงชื่อสกิล ${plantSkill.name} ในชิป`);
assert(plantBadgeHtml.includes('class="sk-brief-tier tier-s">S</span>'), 'แสดงป้าย Tier S');
assert(plantBadgeHtml.includes('title='), 'มีแอตทริบิวต์ title แสดงคำอธิบายและค่าร่าย SP');
assert(!plantBadgeHtml.includes('plant_s</span>'), 'ไม่แสดงข้อความรหัส plant_s เพียวๆ เป็นข้อความชื่อ');

// สกิลว่าง หรือ id ที่ไม่มีอยู่
assert(renderSkillBriefBadge('') === '', 'ส่งค่าว่างกลับมาเมื่อ skillId เป็นสตริงว่าง');
const unknownBadge = renderSkillBriefBadge('non_existent_skill_xyz');
assert(unknownBadge.includes('❓'), 'แสดงไอคอน ❓ เมื่อเป็นสกิลที่ไม่รู้จัก');

// 3. ตรวจสอบการเรนเดอร์ในโมดอล Stage Briefing
console.log('\n【 3. ตรวจสอบการเรนเดอร์ในโมดอลสรุปข้อมูลด่าน (renderStageBriefingModalHtml) 】');
saveManager.reset();
const stage1 = campaignManager.getStage('stage_1_1')!;
const modalHtml = renderStageBriefingModalHtml(stage1);

assert(modalHtml.includes('sk-brief-chip'), 'หน้าต่าง Stage Briefing มีชิป sk-brief-chip');
assert(modalHtml.includes('sk-brief-icon'), 'หน้าต่าง Stage Briefing มีไอคอนสกิล sk-brief-icon');
// ตรวจสอบว่าไม่มีรหัส ID ดิบ เช่น <span class="sk-micro-chip">plant_s</span> อีกต่อไป
assert(!modalHtml.includes('<span class="sk-micro-chip">plant_s</span>'), 'ไม่มีแท็กเดิม sk-micro-chip ที่แสดงข้อความ plant_s ดิบ');
assert(!modalHtml.includes('<span class="sk-pill">'), 'ไม่มีแท็กเดิม sk-pill ที่แสดงข้อความ ID สกิลดิบ');

console.log('\n======================================================================');
console.log('🎉 การทดสอบไอคอนสกิลในหน้าจัดทัพก่อนสู้ ผ่านฉลุย 100%!');
console.log('======================================================================\n');
