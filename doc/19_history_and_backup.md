# 19 ประวัติการปรับแก้และการสำรองข้อมูล (Backup & Changelog)

เอกสารนี้ใช้สำหรับบันทึกข้อมูลก่อนและหลังการปรับแก้ไขระบบทุกครั้งตามคำสั่งของ Game Director ใน [PolicyGuide.md](PolicyGuide.md) เพื่อเป็นจุดสำรองข้อมูล (Backup) กรณีต้องการ Rollback หรือเรียกคืนค่าเดิมได้ทันที

---


## [Backup #001] — วันที่ 2026-10-30 เวลา 20:38:00
- **คำสั่งจาก Game Director:** ปรับท่าไม้ตายของนกฮูก เป็น โจมตีแล้วติดสถานะตาบอด 100% ยาวนาน 3 turn และตัด cri และ โบนัสดาเมจออก (ทางเลือกที่ 1)
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `doc/06_heroes_and_rarity.md`

### 1. ข้อมูลเดิมก่อนแก้ไข (Original Backup)

#### ก. ใน `src/data/heroes.json` (ฮีโร่ นกฮูก `owl`)
```json
    {
      "id": "owl",
      "name": "นกฮูก",
      "rarity": "A",
      "element": "wind",
      "archetype": "SPD",
      "role": "Assassin",
      "str": 51,
      "agi": 60,
      "sta": 49,
      "signatureName": "กรงเล็บเวหาไร้เสียง",
      "signatureEffect": { "type": "debuff_def", "value": 0.25, "duration": 2 },
      "ability": {
        "id": "silent_night_owl",
        "name": "ปีกไร้เสียงรัตติกาล",
        "description": "เพิ่มความแม่นยำ HIT +12 · เมื่อโจมตีมีโอกาส 60% โฉบจุดตายได้ CRI% +10%, โบนัสดาเมจ +12% และลด DEF ศัตรู 15% (2 เทิร์น)"
      },
      "defaultSkills": ["wind_l", "wind_m1", "martial_l", "martial_m1"]
    }
```

#### ข. ใน `src/engine/combat.ts` (กลไก Ability ของนกฮูก)
```typescript
    if (this.options.enableAbilities && att.abilityId === 'silent_night_owl' && Math.random() < 0.60) {
      bonusCri += 10;
      mult *= 1.12;
      applyEffectToTarget(def, { type: 'debuff_def', value: 0.15, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) CRI+10%/ดาเมจ+12% & ลด DEF ศัตรู 15%`);
    }
```

#### ค. ใน `doc/06_heroes_and_rarity.md` (ตารางฮีโร่และ Ability)
```markdown
| **A** | **นกฮูก** 🌪️ | **ปีกไร้เสียงรัตติกาล** | เพิ่มความแม่นยำ HIT +12 · เมื่อโจมตีมีโอกาส **60%** โฉบจุดตายได้ CRI% +10%, โบนัสดาเมจ +12% และลด DEF ศัตรู 15% (2 เทิร์น) | กรงเล็บเวหาไร้เสียง | โอกาส 45% ลด DEF ศัตรู 25% (2 เทิร์น) |
```

---


### 2. ข้อมูลใหม่หลังแก้ไข (Updated Config)

#### ก. ใน `src/data/heroes.json` (ฮีโร่ นกฮูก `owl`)
- เอฟเฟกต์ท่าไม้ตายเปลี่ยนเป็น `{ "type": "blind", "duration": 3, "chance": 1.0 }`
- คำอธิบาย Ability ปีกไร้เสียงรัตติกาล: `"เพิ่มความแม่นยำ HIT +12 · เมื่อโจมตีมีโอกาส 60% ลด DEF ศัตรู 15% (2 เทิร์น)"`

#### ข. ใน `src/engine/combat.ts`
- ใน `executeAction()`: รองรับ `chance` จาก `signatureEffect` โดยตรง: `sigEffectChance: (att.signatureEffect as { chance?: number })?.chance ?? sigCfg.effectChance`
- ใน Ability `silent_night_owl`: ตัด `bonusCri += 10;` และ `mult *= 1.12;` ออก เหลือเฉพาะลด DEF ศัตรู 15% (2 เทิร์น)

#### ค. ใน `doc/06_heroes_and_rarity.md`
- อัปเดตตารางสรุป: ท่าไม้ตายติดตาบอด 100% (3 เทิร์น) และ Ability ไม่บวก CRI / โบนัสดาเมจ


---


## [Backup #002] — วันที่ 2026-10-30 เวลา 21:15:00
- **คำสั่งจาก Game Director:**
  1. เพิ่มระบบค่า SP (ทางเลือกที่ 3): `Max SP = 70 + STA × 0.8`, ฟื้นฟูต้นเทิร์น `12% ของ Max SP`, โบนัสพักหายใจเมื่อโจมตีธรรมดา `+10 SP`, ตัวสำรองพักข้างสนามฟื้นฟู `SP +15% ของ Max SP` ต่อเทิร์น
  2. กำหนดค่าใช้จ่าย SP ของสกิล: เล็ก (`S`) = `20 SP`, กลาง (`M`) = `35 SP`, ใหญ่ (`L`) = `55 SP`, โจมตีธรรมดา = `0 SP`, ท่าไม้ตาย = `0 SP` (หากทอยติดช่องที่ SP ไม่พอ ให้ข้ามไปเช็กช่องถัดไปที่ SP พอจ่าย)
  3. ปรับสกิลสายพยาบาล (`medical_m1`, `medical_l`) ให้ฟื้นฟู SP ด้วย
  4. ปรับสกิลธาตุน้ำ (`water_m2`, `water_l`) ให้เพิ่ม SP เล็กน้อย
  5. ปรับสกิลสายเล่ห์กล (`trick_m2`, `trick_l`) ให้ตัด SP คู่แข่งเล็กน้อย
  6. ปรับสกิลธาตุมืดที่มีสถานะตาบอด (`dark_s`, `dark_m1`, `dark_l`) ให้ลดระยะเวลาตาบอดลงเหลือ `1 เทิร์น`
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/data/skills.json`
  - `src/engine/combat.ts`
  - `src/main.ts` & `src/style.css`
  - `doc/07_skill_slot_system.md` & `doc/17_stat_system_v2.md`

### 1. ข้อมูลเดิมก่อนแก้ไข (Original Backup)

#### ก. ใน `src/data/heroes.json` (`statFormula`)
```json
  "statFormula": {
    "atkPerSTR": 2.805,
    "hpBase": 200,
    "hpPerSTA": 14.179,
    "defBase": 10,
    "defPerSTA": 0.721,
    "spdBase": 70,
    "spdPerAGI": 0.788,
    "hitBase": 100,
    "hitPerAGI": 0.2,
    "fleePerAGI": 0.441,
    "criBase": 5,
    "criPerAGI": 0.159,
    "criCap": 40,
    "criDmgBase": 1.4,
    "criDmgPerSTR": 0.004,
    "abPerSTR": 0.31,
    "blockPerSTA": 0.38,
    "abCap": 50,
    "defConstantK": 100
  }
```

#### ข. ใน `src/data/skills.json` (สกิลที่ถูกปรับปรุง: `water_m2`, `water_l`, `dark_s`, `dark_m1`, `dark_l`, `medical_m1`, `medical_l`, `trick_m2`, `trick_l`)
```json
    {
      "id": "water_m2",
      "name": "ม่านน้ำชำระล้าง",
      "element": "water",
      "tier": "M",
      "baseChance": 0.15,
      "damageMult": 0,
      "effects": [
        { "type": "cleanse", "target": "self", "count": 1 },
        { "type": "heal_pct", "target": "self", "value": 0.18 }
      ],
      "description": "ล้างดีบัฟตัวเอง 1 อย่าง + ฟื้น HP 18% ของ Max HP"
    },
    {
      "id": "water_l",
      "name": "สึนามิ",
      "element": "water",
      "tier": "L",
      "baseChance": 0.10,
      "damageMult": 2.2,
      "effects": [
        { "type": "debuff_spd", "target": "enemy", "value": 0.25, "duration": 2 },
        { "type": "heal_pct", "target": "self", "value": 0.10 }
      ],
      "description": "ดาเมจ ×2.2 · ลด SPD ศัตรู 25% (2 เทิร์น) + ฟื้น HP ตัวเอง 10%"
    },
    {
      "id": "dark_s",
      "name": "เล็บเงา",
      "element": "dark",
      "tier": "S",
      "baseChance": 0.20,
      "damageMult": 1.6,
      "effects": [{ "type": "blind", "chance": 0.45, "duration": 2 }],
      "description": "ดาเมจ ×1.6 · โอกาส 45% ติดตาบอด (HIT −20, 2 เทิร์น)"
    },
    {
      "id": "dark_m1",
      "name": "ม่านมืดบอด",
      "element": "dark",
      "tier": "M",
      "baseChance": 0.15,
      "damageMult": 1.6,
      "effects": [{ "type": "blind", "chance": 1.0, "duration": 2 }],
      "description": "ดาเมจ ×1.6 · ติดตาบอดแน่นอน (HIT −20, CRI% −10%, 2 เทิร์น)"
    },
    {
      "id": "dark_l",
      "name": "กลืนกินความมืด",
      "element": "dark",
      "tier": "L",
      "baseChance": 0.10,
      "damageMult": 2.2,
      "effects": [
        { "type": "blind", "chance": 1.0, "duration": 2 },
        { "type": "debuff_def", "target": "enemy", "value": 0.25, "duration": 2 }
      ],
      "description": "ดาเมจ ×2.2 · ติดตาบอด 2 เทิร์น + ลด DEF ศัตรู 25% (2 เทิร์น)"
    },
    {
      "id": "medical_m1",
      "name": "เข็มทิพย์ถอนพิษ",
      "element": "neutral",
      "branch": "medical",
      "unlockedByDefault": true,
      "tier": "M",
      "baseChance": 0.15,
      "damageMult": 0.90,
      "effects": [
        { "type": "heal_pct", "target": "self", "chance": 1.0, "value": 0.15 },
        { "type": "cleanse", "target": "self", "chance": 0.75, "count": 1 }
      ],
      "description": "ตีไร้ธาตุ ×0.90 · ฟื้น HP 15% Max HP + โอกาส 75% ล้างดีบัฟตัวเอง 1 อย่าง"
    },
    {
      "id": "medical_l",
      "name": "ปาฏิหาริย์แห่งชีวิต",
      "element": "neutral",
      "branch": "medical",
      "unlockedByDefault": true,
      "tier": "L",
      "baseChance": 0.10,
      "damageMult": 0,
      "effects": [
        { "type": "heal_pct", "target": "self", "chance": 1.0, "value": 0.28 },
        { "type": "cleanse", "target": "self", "chance": 0.80, "count": 99 },
        { "type": "shield", "target": "self", "chance": 0.80, "value": 0.15, "duration": 2 }
      ],
      "description": "ฟื้นฟู HP ตัวเอง 28% Max HP + โอกาส 80% ล้างดีบัฟทั้งหมดและได้เกราะ 15% Max HP (2 เทิร์น)"
    },
    {
      "id": "trick_m2",
      "name": "กลลวงตัดกำลัง",
      "element": "neutral",
      "branch": "trick",
      "unlockedByDefault": true,
      "tier": "M",
      "baseChance": 0.15,
      "damageMult": 1.20,
      "effects": [
        { "type": "debuff_cri", "target": "enemy", "chance": 0.75, "value": 20, "duration": 2 },
        { "type": "debuff_atk", "target": "enemy", "chance": 0.75, "value": 0.20, "duration": 2 },
        { "type": "gauge_change", "target": "enemy", "chance": 0.75, "value": -15 }
      ],
      "description": "ตีไร้ธาตุ ×1.20 · โอกาส 75% ลด CRI% ศัตรู 20%, ลด ATK 20% (2 เทิร์น) และลดเกจไม้ตายศัตรู 15 แต้ม"
    },
    {
      "id": "trick_l",
      "name": "ค่ายกลลวงสังหาร",
      "element": "neutral",
      "branch": "trick",
      "unlockedByDefault": true,
      "tier": "L",
      "baseChance": 0.10,
      "damageMult": 1.35,
      "effects": [
        { "type": "debuff_atk", "target": "enemy", "chance": 0.85, "value": 0.25, "duration": 2 },
        { "type": "debuff_def", "target": "enemy", "chance": 0.85, "value": 0.25, "duration": 2 },
        { "type": "debuff_spd", "target": "enemy", "chance": 0.85, "value": 0.20, "duration": 2 },
        { "type": "blind", "target": "enemy", "chance": 0.85, "duration": 2 }
      ],
      "description": "ตีไร้ธาตุ ×1.35 · โอกาส 85% ลด ATK 25%, DEF 25%, SPD 20% และติดตาบอด (2 เทิร์น)"
    }
```

#### ค. ใน `src/engine/combat.ts` (`executeAction` เดิมก่อนมี SP)
```typescript
    for (const slotId of att.skillSlots) {
      const sk = SKILL_MAP.get(slotId);
      if (!sk) continue;
      const isSameElem = this.options.enableSameElementBonus && sk.element === att.element;
      const procChance = sk.baseChance * (isSameElem ? elementsData.multipliers.sameElementChanceBonus : 1);
      if (Math.random() < procChance) {
        this.performHit(attTeam, defTeam, 'skill', sk.name, sk.damageMult, sk.element, { skill: sk }, events);
        return;
      }
    }

    this.performHit(attTeam, defTeam, 'normal', 'โจมตีธรรมดา', 1.0, att.element, {}, events);
```

---


## [Backup #003] — วันที่ 2026-10-30 เวลา 21:30:30
- **คำสั่งจาก Game Director:** เพิ่มสัตว์ใหม่ 2 ตัว ธาตุพิษ:
  1. หนู (`rat`) — Rank B · ธาตุพิษ · สาย SPD · Ability: "ฟันแทะแพร่เชื้อ" · ท่าไม้ตาย: "เขี้ยวทมิฬกาฬโรค"
  2. ฮอร์เนส (`hornet` / ตัวต่อ) — Rank S · ธาตุพิษ · สาย ATK · Ability: "เหล็กในพิษอัมพาต" · ท่าไม้ตาย: "เหล็กในมรณะสังหารรัง"
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `doc/06_heroes_and_rarity.md`
  - `doc/17_stat_system_v2.md`
- **สถานะก่อนเพิ่ม:** มีฮีโร่ทั้งหมด 21 ตัว (B: 6, A: 6, S: 6, SS: 3) ธาตุพิษมีเพียงตัวเดียวคืองู (A)

---


## [Backup #004] — วันที่ 2026-10-30 เวลา 21:40:00
- **คำสั่งจาก Game Director:** เพิ่มสัตว์ใหม่ 3 ตัว ธาตุแสง (Light ✨) ในระดับ Rank B, A และ S:
  1. กระรอก (`squirrel`) — Rank B · ธาตุแสง · สาย SPD · บทบาท Supporter
     - STR: 48, AGI: 57, STA: 46 (สเตตัส Rank B สาย SPD)
     - Ability: "ประกายแสงกักตุน" (Solar Stash) — เมื่อหลบสำเร็จ หรือเมื่อโจมตีโดน มีโอกาส 55% ฟื้นฟู +12 SP และ +3% Max HP
     - ท่าไม้ตาย: "ประกายพวงหางสุริยัน" — ดาเมจ ×2.0, โอกาส 25% บัฟ HIT +15 (2 เทิร์น) และฟื้นฟูตนเอง +15 SP
     - ชุดสกิลเริ่มต้น: `["light_s", "light_m2", "medical_m1", "catalyst_s"]`
  2. หิ่งห้อย (`firefly`) — Rank A · ธาตุแสง · สาย SPD · บทบาท Controller
     - STR: 51, AGI: 60, STA: 49 (สเตตัส Rank A สาย SPD)
     - Ability: "แสงกระพริบลวงตา" (Bioluminescent Flash) — เมื่อถูกโจมตี มีโอกาส 50% ทำให้ผู้โจมตีติดสถานะตาบอด (1 เทิร์น)
     - ท่าไม้ตาย: "ลำแสงหิ่งห้อยนำทาง" — ดาเมจ ×2.8, โอกาส 45% สร้างเกราะ 18% Max HP (2 เทิร์น) และล้างดีบัฟตนเอง 1 สถานะ
     - ชุดสกิลเริ่มต้น: `["light_m1", "light_m2", "trick_s", "martial_s"]`
  3. นกยูง (`peacock`) — Rank S · ธาตุแสง · สาย BAL · บทบาท Controller
     - STR: 62, AGI: 55, STA: 55 (สเตตัส Rank S สาย BAL)
     - Ability: "รำแพนหางสะกดภพ" (Dazzling Plume) — เมื่อโจมตี มีโอกาส 60% ลด ATK ศัตรู 12% (2 เทิร์น) และหากเป้าหมายติดตาบอดอยู่แล้ว จะทำดาเมจแรงขึ้น +18%
     - ท่าไม้ตาย: "รำแพนแสงเจิดจรัสสวรรค์" — ดาเมจ ×3.6, โอกาส 70% ลด ATK ศัตรู 20% (2 เทิร์น), ลด CRI ศัตรู 20% (2 เทิร์น) และตนเองได้รับเกราะ 15% Max HP (2 เทิร์น)
     - ชุดสกิลเริ่มต้น: `["light_l", "light_m1", "catalyst_m1", "trick_m1"]`
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `doc/06_heroes_and_rarity.md`
- **สถานะก่อนเพิ่ม:** มีฮีโร่ทั้งหมด 23 ตัว (B: 7, A: 6, S: 7, SS: 3) ธาตุแสงมีเพียง SS มังกรฟ้า ตัวเดียว
- **สถานะหลังเพิ่ม:** มีฮีโร่ทั้งหมด 26 ตัว (B: 8, A: 7, S: 8, SS: 3) ธาตุแสงกระจายครบทุกระดับ B, A, S, SS

---


## [Backup #005] — วันที่ 2026-10-30 เวลา 21:48:00
- **คำสั่งจาก Game Director:** เพิ่มสัตว์ใหม่ 3 ตัว:
  1. หอยทาก (`snail`) — Rank B · ธาตุน้ำแข็ง · สาย DEF · บทบาท Tank
     - STR: 36, AGI: 40, STA: 74 (สเตตัส Rank B สาย DEF)
     - Ability: "เมือกน้ำแข็งกระดองหิน" (Glacial Mucus) — ลดดาเมจจากการโจมตีลง 8% · เมื่อถูกโจมตี มีโอกาส 50% ทำให้ผู้โจมตีติดสถานะสโลว์ (2 เทิร์น) และฟื้นฟู HP ตนเอง 2% ของ Max HP
     - ท่าไม้ตาย: "กระดองเหมันต์สะท้อนคลื่น" — ดาเมจ ×2.0, โอกาส 25% สร้างเกราะ 15% Max HP (2 เทิร์น) และลด SPD ศัตรู 15% (2 เทิร์น)
     - ชุดสกิลเริ่มต้น: `["ice_s", "ice_m2", "medical_s", "martial_s"]`
  2. สิงโตทะเล (`sea_lion`) — Rank S · ธาตุน้ำแข็ง · สาย BAL · บทบาท Bruiser & Controller
     - STR: 62, AGI: 55, STA: 55 (สเตตัส Rank S สาย BAL)
     - Ability: "คลื่นคำรามเหมันต์ขั้วโลก" (Polar Roar & Blubber) — ลดดาเมจที่ได้รับ 8% · เมื่อโจมตีเป้าหมายที่ติดสโลว์หรือแช่แข็ง มีโอกาส 65% ทำดาเมจแรงขึ้น +18% และมีโอกาส 50% ทำให้เป้าหมายติดสถานะแช่แข็ง (1 เทิร์น)
     - ท่าไม้ตาย: "สึนามิน้ำแข็งคำรามกึกก้อง" — ดาเมจ ×3.6, โอกาส 70% ทำให้ศัตรูติดแช่แข็ง (1 เทิร์น) และตนเองได้รับเกราะ 15% Max HP (2 เทิร์น)
     - ชุดสกิลเริ่มต้น: `["ice_l", "ice_m1", "martial_m2", "catalyst_m1"]`
  3. กระต่าย (`rabbit`) — Rank B · ธาตุแสง · สาย SPD · บทบาท Assassin & Evader
     - STR: 48, AGI: 57, STA: 46 (สเตตัส Rank B สาย SPD)
     - Ability: "ก้าวกระโดดแสงตะวัน" (Solar Leap) — เพิ่มอัตราหลบหลีก FLEE +6 · เมื่อหลบการโจมตีสำเร็จ มีโอกาส 60% ได้รับบัฟ CRI% +15% และได้เกจท่าไม้ตาย +10 แต้ม
     - ท่าไม้ตาย: "ลูกเตะทะยานแสงสุริยัน" — ดาเมจ ×2.0, โอกาส 25% ทำให้ศัตรูติดตาบอด (1 เทิร์น) และเพิ่ม SPD ตนเอง +15% (2 เทิร์น)
     - ชุดสกิลเริ่มต้น: `["light_s", "light_m1", "trick_s", "martial_s"]`
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `doc/06_heroes_and_rarity.md`
- **สถานะก่อนเพิ่ม:** มีฮีโร่ทั้งหมด 26 ตัว (B: 8, A: 7, S: 8, SS: 3)
- **สถานะหลังเพิ่ม:** มีฮีโร่ทั้งหมด 29 ตัว (B: 10, A: 7, S: 9, SS: 3)

---


## [Backup #006] — วันที่ 2026-10-30 เวลา 21:55:00
- **คำสั่งจาก Game Director:** เพิ่มสัตว์ใหม่ 9 ตัว เพื่อเติมเต็มทุกธาตุ ทุกระดับ (B, A, S) และทุกบทบาท (Tank, Striker, Assassin, Controller, Supporter) ให้ครบสมบูรณ์:
  1. ค้างคาว (`bat`) — Rank B · ธาตุมืด · สาย SPD · บทบาท Supporter (STR 48 / AGI 57 / STA 46)
     - Ability: "คลื่นโซนาร์ดูดโลหิต" (`vampiric_sonar`) — เมื่อโจมตีโดน มีโอกาส 55% ดูดเลือดฟื้นฟู HP 5% ของ Max HP, ตัด SP ศัตรู −8 SP และฟื้นฟู SP ตนเอง +8 SP
     - ท่าไม้ตาย: "รัตติกาลฝูงค้างคาวดูดเลือด" — ดาเมจ ×2.0, โอกาส 25% ติดตาบอด (1 เทิร์น) และฟื้นฟู HP ตนเอง 12% Max HP
  2. เม่น (`porcupine`) — Rank B · ธาตุสายฟ้า · สาย DEF · บทบาท Tank (STR 36 / AGI 40 / STA 74)
     - Ability: "ขนหนามสถิตสายฟ้า" (`static_quills`) — ลดดาเมจที่ได้รับ 6% · เมื่อถูกโจมตี มีโอกาส 50% สะท้อนดาเมจ 12% และลด DEF ผู้โจมตี 10% (2 เทิร์น)
     - ท่าไม้ตาย: "สลัดขนหนามอัสนีรอบทิศ" — ดาเมจ ×2.0, โอกาส 25% ติดสตัน (1 เทิร์น) และบัฟ DEF ตนเอง +15% (2 เทิร์น)
  3. กบ (`frog`) — Rank B · ธาตุน้ำ · สาย BAL · บทบาท Controller (STR 54 / AGI 48 / STA 48)
     - Ability: "ลิ้นตวัดวารีเหนียวหนืด" (`sticky_tongue_splash`) — เมื่อโจมตีโดน มีโอกาส 55% ทำให้ศัตรูติดสโลว์ (2 เทิร์น) และฟื้นฟู SP ตนเอง +10 SP
     - ท่าไม้ตาย: "กระโดดทุ่มคลื่นน้ำวน" — ดาเมจ ×2.0, โอกาส 25% ติดสโลว์ (2 เทิร์น) และลด ATK ศัตรู 15% (2 เทิร์น)
  4. เสือดาว (`cheetah`) — Rank A · ธาตุสายฟ้า · สาย ATK · บทบาท Striker (STR 74 / AGI 48 / STA 37)
     - Ability: "สปรินต์สายฟ้าแลบ" (`thunder_sprint`) — เพิ่ม SPD พื้นฐาน +8 · เมื่อโจมตีมีโอกาส 60% ได้บัฟ CRI% +12% (2 เทิร์น), โบนัสดาเมจ +12% และเร่งเกจไม้ตาย +8 แต้ม
     - ท่าไม้ตาย: "กรงเล็บอัสนีพิฆาตความเร็วเสียง" — ดาเมจ ×2.8, โอกาส 45% ติดสตัน (1 เทิร์น)
  5. ตัวนิ่ม (`pangolin`) — Rank A · ธาตุดิน · สาย DEF · บทบาท Tank (STR 39 / AGI 43 / STA 79)
     - Ability: "ม้วนตัวเกราะเกล็ดปฐพี" (`iron_scale_curl`) — เพิ่มอัตราบล็อก Block +8% · เมื่อถูกโจมตีมีโอกาส 55% ลดดาเมจลง 18% และสะท้อนดาเมจกลับไป 10%
     - ท่าไม้ตาย: "ลูกเหล็กกลิ้งถล่มพสุธา" — ดาเมจ ×2.8, โอกาส 45% สร้างเกราะ 20% Max HP และบัฟ DEF +15% (2 เทิร์น)
  6. กวาง (`deer`) — Rank A · ธาตุพืช · สาย BAL · บทบาท Supporter (STR 58 / AGI 51 / STA 51)
     - Ability: "พรแห่งเขาพฤกษาสวรรค์" (`antler_blessing`) — ต้นเทิร์นมีโอกาส 55% ฟื้นฟู HP 3.5% ของ Max HP, ฟื้นฟู +10 SP และล้างดีบัฟตนเอง 1 สถานะ
     - ท่าไม้ตาย: "เขากวางศักดิ์สิทธิ์ผลิบาน" — ดาเมจ ×2.8, โอกาส 45% สร้างเกราะ 18% Max HP, ฟื้นฟู HP 12% Max HP และฟื้นฟู +20 SP
  7. เสือดำ (`black_panther`) — Rank S · ธาตุมืด · สาย ATK · บทบาท Assassin (STR 79 / AGI 52 / STA 40)
     - Ability: "นักล่าไร้เงาแห่งรัตติกาล" (`shadow_predator`) — เพิ่ม CRI% +10% และเจาะเกราะ AB +10% · เมื่อโจมตีมีโอกาส 60% ทำดาเมจแรงขึ้น +16% และดูดเลือด 12% ของดาเมจที่ทำได้
     - ท่าไม้ตาย: "เขี้ยวทมิฬขย้ำวิญญาณ" — ดาเมจ ×3.6, โอกาส 70% ติดตาบอด (1 เทิร์น) และลด DEF ศัตรู 25% (2 เทิร์น)
  8. ฉลาม (`shark`) — Rank S · ธาตุน้ำ · สาย ATK · บทบาท Striker (STR 79 / AGI 52 / STA 40)
     - Ability: "คลั่งกลิ่นคาวเลือดมหาสมุทร" (`blood_frenzy`) — เมื่อโจมตีมีโอกาส 60% เพิ่มเจาะเกราะ AB +15% และบัฟ ATK +12% (2 เทิร์น) · หากศัตรูมี HP ต่ำกว่า 65% จะทำดาเมจแรงขึ้น +18%
     - ท่าไม้ตาย: "ขากรรไกรฉลามขาวขย้ำสมุทร" — ดาเมจ ×3.6, โอกาส 70% ลด DEF ศัตรู 30% (2 เทิร์น) และติดสโลว์ (2 เทิร์น)
  9. เหยี่ยวเพเรกริน (`falcon`) — Rank S · ธาตุลม · สาย SPD · บทบาท Striker (STR 54 / AGI 65 / STA 52)
     - Ability: "ดิ่งเวหาเหนือความเร็วเสียง" (`supersonic_dive`) — เพิ่ม SPD พื้นฐาน +6 และ HIT +8 · เมื่อโจมตีเป้าหมายที่มี SPD ต่ำกว่าตน มีโอกาส 60% ทำดาเมจแรงขึ้น +18% และเจาะเกราะ AB +12%
     - ท่าไม้ตาย: "พายุโฉบเพเรกรินผ่าเวหา" — ดาเมจ ×3.6, โอกาส 70% บัฟ SPD +20% และบัฟ CRI +15% (2 เทิร์น)
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `doc/06_heroes_and_rarity.md`
- **สถานะก่อนเพิ่ม:** มีฮีโร่ทั้งหมด 29 ตัว (B: 10, A: 7, S: 9, SS: 3)
- **สถานะหลังเพิ่ม:** มีฮีโร่ทั้งหมด 38 ตัว (B: 13, A: 10, S: 12, SS: 3) ครบทั้ง 10 ธาตุในทุกระดับ B, A, S

---


## [Backup #007] — วันที่ 2026-10-30 เวลา 22:15:00
- **คำสั่งจาก Game Director:** ดำเนินการทางเลือกที่ 3 ปรับลดอัตราฟื้นฟู SP ให้ช้าลงเพื่อเพิ่มความเข้มข้นและความตึงเครียดในการบริหารสกิล:
  1. การฟื้นฟู SP ต้นเทิร์น (Turn SP Regen): ปรับเป็น **คงที่ +6 SP / เทิร์น** (เดิม 12% ของ Max SP ซึ่งเคยได้ ~12-15 SP/เทิร์น)
  2. โบนัสพักหายใจเมื่อโจมตีธรรมดา (Normal Attack Breath Bonus): ปรับเป็น **+6 SP** (เดิม +10 SP)
  3. การฟื้นฟู SP ของตัวสำรองข้างสนาม (Bench Fighter SP Regen): ปรับเป็น **คงที่ +10 SP / เทิร์น** (เดิม 15% ของ Max SP ซึ่งเคยได้ ~15-20 SP/เทิร์น)
  4. SP เริ่มต้นการต่อสู้ (Start SP): คงเดิมที่ **100% Max SP**
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `doc/17_stat_system_v2.md`
  - `doc/07_skill_slot_system.md`
- **ข้อมูลเดิมก่อนแก้ไข (Original Backup):**
  - ใน `src/data/heroes.json`:
    ```json
    "spBase": 70,
    "spPerSTA": 0.8,
    "spRegenPctPerTurn": 0.12,
    "spNormalAttackBonus": 10,
    "spBackupRegenPctPerTurn": 0.15
    ```
  - ใน `src/engine/combat.ts`:
    ```typescript
    const spRegen = Math.round(maxSp * (C.spRegenPctPerTurn ?? 0.12));
    ...
    const spBackupPct = (heroesData.statFormula as { spBackupRegenPctPerTurn?: number }).spBackupRegenPctPerTurn ?? 0.15;
    backup.sp = Math.min(backup.baseStats.maxSp, backup.sp + Math.round(backup.baseStats.maxSp * spBackupPct));
    ...
    const breathBonus = (heroesData.statFormula as { spNormalAttackBonus?: number }).spNormalAttackBonus ?? 10;
    ```
- **ข้อมูลใหม่หลังแก้ไข (New Configuration - Option 3):**
  - ใน `src/data/heroes.json`:
    ```json
    "spBase": 70,
    "spPerSTA": 0.8,
    "spRegenFlat": 6,
    "spNormalAttackBonus": 6,
    "spBackupRegenFlat": 10
    ```
  - ใน `src/engine/combat.ts`:
    ```typescript
    const spRegen = (C as { spRegenFlat?: number }).spRegenFlat ?? 6;
    ...
    const spBackupGain = (heroesData.statFormula as { spBackupRegenFlat?: number }).spBackupRegenFlat ?? 10;
    backup.sp = Math.min(backup.baseStats.maxSp, backup.sp + spBackupGain);
    ...
    const breathBonus = (heroesData.statFormula as { spNormalAttackBonus?: number }).spNormalAttackBonus ?? 6;
    ```

---


## [Backup #008] — วันที่ 2026-10-30 เวลา 22:40:00
- **คำสั่งจาก Game Director:** ปรับโครงสร้างเกมเพื่อเตรียมพร้อมระบบการต่อสู้ 2v2 (และขยายสู่ 4v4 ในอนาคต):
  1. เพิ่มสกิลใหม่ 14 สกิล (รูปแบบที่ 1) ครอบคลุม 10 ธาตุ + 4 สายวิชาไร้ธาตุ เพื่อรองรับการโจมตีหมู่, ฮีลหมู่, บัพหมู่ และดีบัพหมู่
  2. ปรับปรุงท่าไม้ตาย (Signature Skill) ของสัตว์เลี้ยง 13 ตัว ให้สอดคล้องกับพฤติกรรมสัตว์และระบบทีม (เช่น สิงโตคำรามบัฟทีม, กวางฮีล/เกราะ/SP หมู่, เต่ากางกระดองคุ้มทัพ, นกยูงรำแพนดีบัฟทั้งสนาม, สิงโตทะเลคลื่นยักษ์แช่แข็งหมู่, สัตว์เทพ SS ทั้ง 3 ตัว)
  3. เพิ่มข้อมูลตำแหน่งจัดทัพ `preferredRow` (`front`, `mid`, `back`) และโอกาสเจาะจงตีแถวหลัง `backlineChance` ให้กับฮีโร่ทั้ง 38 ตัว
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/skills.json`
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `doc/07_skill_slot_system.md`
  - `doc/06_heroes_and_rarity.md`
- **ข้อมูลเดิมก่อนแก้ไข (Original Backup):**
  - จำนวนสกิลเดิม: 56 สกิล (ไม่มีสกิล AOE หมู่เฉพาะของแต่ละธาตุ)
  - ท่าไม้ตายเดิมของสัตว์เลี้ยงทั้ง 13 ตัวเป็นดาเมจเดี่ยวและบัฟเฉพาะตนเอง
  - ฮีโร่ยังไม่มีฟิลด์ `preferredRow` และ `backlineChance`

---


## [Backup #009] — วันที่ 2026-10-30 เวลา 22:45:00
- **คำสั่งจาก Game Director:** พัฒนาระบบต่อสู้พร้อมกัน 2v2 (Simultaneous 2v2 Combat Engine) บนกระดานจัดทัพ 3x3:
  1. สร้างโมดูล `src/engine/team_combat.ts` รองรับการต่อสู้ 2v2 โดยมีตัวละครอยู่ในสนามพร้อมกันทั้ง 4 ตัว
  2. ระบบจัดทัพกระดาน 3x3 พร้อมคำนวณโบนัสตำแหน่ง (Role Affinity Bonus):
     - Tank แถวหน้า: DEF +5%, Block +5%
     - Striker แถวหน้า: ATK +4%, AB +4%
     - Assassin แถวกลาง: CRI +4%, SPD +3
     - Controller แถวกลาง/หลัง: HIT +6, โอกาสติดสถานะ +5%
     - Supporter แถวหลัง: ประสิทธิภาพฮีล/เกราะ +8%, Max SP +5
     - วางผิดแถว: แค่อดได้โบนัสตำแหน่ง (ไม่มีบทลงโทษ)
  3. ระบบเรียงลำดับแอ็กชันตามค่า SPD รายตัว (Individual Speed Queue)
  4. ระบบเล็งเป้าหมายและการเจาะแนวหลัง (Backline Infiltration):
     - Assassin มีโอกาส 60% ข้ามแนวหน้าไปตีแนวหลัง
     - Controller มีโอกาส 40% ข้ามแนวหน้าไปตีแนวหลัง
     - Supporter มีโอกาส 25% ข้ามแนวหน้าไปตีแนวหลัง
     - Tank / Striker เล็งแนวหน้าก่อนเสมอ 100%
  5. รองรับสกิลขอบเขตหมู่ (`all_enemies`, `all_allies`, `front_enemies`)
  6. สร้างสคริปต์รันทดสอบ 2v2 ใน `src/sim/run_sim_2v2.ts` พร้อมคำสั่ง `npm run sim:2v2`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/team_combat.ts` (สร้างใหม่)
  - `src/sim/run_sim_2v2.ts` (สร้างใหม่)
  - `package.json` (เพิ่มสคริปต์ `sim:2v2`)
- **ผลการทดสอบ:**
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: สำเร็จสมบูรณ์
  - `npm run sim:2v2`: รัน 500 ไฟต์สุ่มทีม อัตราเฉลี่ย 6.0 รอบ/ไฟต์ สมดุลชนะ A 47.8% vs B 52.2% ปราศจาก runtime error







---

## [Backup #010] — วันที่ 2026-10-30 เวลา 22:58:00
- **คำสั่งจาก Game Director:** ผสานระบบการต่อสู้ 2v2 เข้ากับ Web UI (Web Interface & Duel Arena):
  1. เพิ่มตัวเลือกสลับโหมดการเล่น (Mode Toggle) ที่หน้าจัดทีม:
     - `1v1 Tag Relay`: โหมดดั้งเดิม 1v1 แท็กทีมสลับตัวสำรอง
     - `2v2 Tactical Grid`: โหมดแท็กติก 2v2 บนกระดานจัดทัพ 3x3
  2. ในโหมด 2v2 จัดทำกระดาน 3x3 Grid Selector ให้ผู้เล่นและศัตรูสามารถคลิกเลือกวางยูนิตลงในช่อง แถวหน้า (Front), แถวกลาง (Mid) หรือ แถวหลัง (Back) ช่อง 1-3 ได้อย่างอิสระ พร้อมระบบแสดงป้ายโบนัสตำแหน่ง (Role Affinity Badge) แบบเรียลไทม์
  3. ออกแบบสนามประลอง 2v2 Battle Arena บนหน้าจอสนามรบ:
     - แสดงแถบคิวแอ็กชันตามความเร็ว (Speed Action Queue Bar)
     - แสดงกระดานจัดวางตัวละคร 3x3 ทั้งสองฝั่งในสนามรบ พร้อมการ์ดยูนิตที่มีแถบเลือด HP, แถบพลัง SP, สัญลักษณ์ธาตุ และสถานะบัฟ/ดีบัฟ
     - รองรับการควบคุมความเร็ว (x1, x2, x3), เล่นต่อ (Play/Pause), เดินทีละแอ็กชัน (Step Action), ระบบเปิด-ปิด Auto-Cast ท่าไม้ตาย
     - ระบบบันทึกการต่อสู้ Combat Log แสดงรายละเอียดความเสียหาย, เป้าหมายการโจมตีข้ามแถว (Backline Infiltration) และผลเอฟเฟกต์หมู่อย่างครบถ้วน
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/main.ts`
  - `src/style.css`
- **ผลการตรวจสอบ:**
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: สำเร็จสมบูรณ์ (Vite production build ผ่าน 100%)
  - `npm run sim`: การจำลอง 1v1 ผ่าน 100%
  - `npm run sim:2v2`: การจำลอง 2v2 500 ไฟต์ ผ่าน 100% (เฉลี่ย 6.4 รอบ/ไฟต์ สมดุลชนะ A 50.8% vs B 49.2%)

---

## [Backup #011] — วันที่ 2026-10-30 เวลา 23:09:00
- **คำสั่งจาก Game Director:** แก้ไขเป้าหมายการทำดาเมจของท่าไม้ตายและสกิลในระบบ 2v2 Engine (`src/engine/team_combat.ts`):
  1. แก้ไขกรณีสกิลไม้ตายของสัตว์เลี้ยงที่มีเอฟเฟกต์บัฟ/ฮีลเพื่อนร่วมทีม (`target: "all_allies"` เช่น กระรอก [ลำแสงพวงหางสุริยันนำทัพ]) ไม่ให้นำขอบเขตของบัฟมาคำนวณเป็นเป้าหมายรับดาเมจ โดยกำหนดให้เป้าหมายรับความเสียหายต้องเป็นฝั่งศัตรูเสมอ (`single_enemy`, `front_enemies` หรือ `all_enemies`)
  2. แก้ไขสกิล 4 ช่องทั่วไป (`performSkill`) ในกรณีที่เป็นสกิลไม่ทำดาเมจ หรือเอฟเฟกต์ที่มี `target: "self"` (เช่น สกิลสายพยาบาล `medical_m1`, `medical_m2`, `medical_l`) ให้ฟื้นฟูหรือมอบบัฟให้แก่ตัวผู้ใช้เอง (`att`) อย่างถูกต้อง ไม่หลุดไปมอบให้แก่ศัตรู
  3. รองรับการส่งต่อเอฟเฟกต์สถานะดีบัฟตามข้อมูล `signatureEffect` ให้แก่ศัตรูที่ถูกโจมตีสำหรับฮีโร่ทุกตัว
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/engine/team_combat.ts`
- **ข้อมูลเดิมก่อนแก้ไข (Original Backup):**
  - ใน `performSignature`: ตัวแปร `scope` ดึงค่าจาก `heroMeta.signatureEffect.target` โดยตรง ทำให้สกิลกระรอกที่มี `target: "all_allies"` กลายเป็นเลือกพันธมิตรมาเป็นเป้าหมายรับดาเมจ 1.8x ATK ของตนเอง
  - ใน `performSkill`: เอฟเฟกต์ `heal_pct` หรือ `buff` ที่มี `target: "self"` ถูกนำไปผูกกับอาร์เรย์ `targets` ที่เป็นศัตรู
- **ข้อมูลใหม่หลังแก้ไข (Updated):**
  - ใน `performSignature`: ขอบเขตเป้าหมายดาเมจถูกบังคับให้เลือกฝั่งศัตรูเท่านั้น (`all_enemies`, `front_enemies` หรือ `single_enemy`) ส่วนเอฟเฟกต์บัฟจะแจกจ่ายให้ `friendlyLiving`
  - ใน `performSkill`: ตรวจสอบ `ef.target === "self"` จะส่งผลต่อตัวผู้ใช้ (`att`) เสมอ
- **ผลการทดสอบ:**
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: ผ่าน 100%
  - `npm run sim:2v2`: ผ่าน 100% ไร้ข้อผิดพลาด

---

## [Backup #012] — วันที่ 2026-10-30 เวลา 23:16:00
- **คำสั่งจาก Game Director:** ปรับปรุงเลย์เอาต์กระดาน 3x3 ทั้งในหน้าจัดทีมและหน้าสนามรบ ให้ "แนวหน้าหันหน้าชนกัน" (Facing Frontlines at Center):
  1. ในหน้าสนามประลอง 2v2 (Arena Stage):
     - ปรับทิศทางคอลัมน์ของกระดานทีม A (ผู้เล่น ฝั่งซ้าย): เรียงจาก `[แถวหลัง (Back)]` ➔ `[แถวกลาง (Mid)]` ➔ `[แนวหน้า (Front) ➔]` หันเข้าหาเส้นกึ่งกลาง (VS)
     - ปรับทิศทางคอลัมน์ของกระดานทีม B (ศัตรู ฝั่งขวา): เรียงจาก `[⬅ แนวหน้า (Front)]` ➔ `[แถวกลาง (Mid)]` ➔ `[แถวหลัง (Back)]` หันเข้าหาเส้นกึ่งกลาง (VS)
     - ช่องเลน 3 ระดับ (บน, กลาง, ล่าง) ตรงกันทั้งสองฝั่ง ทำให้เห็นการปะทะกันแบบ Face-to-Face ของแนวหน้าได้อย่างชัดเจน เข้าใจง่าย
  2. ในหน้าจัดทีม 3x3 Grid Placement Selector:
     - ปรับคอลัมน์ของกล่องเลือกตำแหน่งทั้งทีม A และทีม B ให้ตรงกับทิศทางการหันหน้าในสนามรบจริง
     - เพิ่มหัวคอลัมน์แสดงทิศทางแนวหน้า พร้อมป้ายบอกแถว-เลน เช่น `หน้า-บน`, `หน้า-กลาง`, `หน้า-ล่าง`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/main.ts`
  - `src/style.css`
- **ผลการทดสอบ:**
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: สำเร็จ 100%
  - `npm run sim:2v2`: ผ่าน 100% (500 ไฟต์สุ่มทีม ไร้ข้อผิดพลาด)

---

## [Backup #013] — วันที่ 2026-11-01 เวลา 20:10:00
- **คำสั่งจาก Game Director:** พัฒนาระบบ Phase 1.1:
  1. เพิ่มธาตุใหม่ "พลังจิต (Psychic / 🔮)":
     - ชนะทาง: พิษ (Poison), ดิน (Earth), ลม (Wind)
     - แพ้ทาง: มืด (Dark), สายฟ้า (Lightning), น้ำแข็ง (Ice)
  2. เพิ่มสถานะผิดปกติด้านลบใหม่ "สับสน (Confusion / 🌀)":
     - เมื่อถึงคิวแอ็กชัน มีโอกาส 60% สับสนหันมาโจมตีตัวเอง เสียเลือด 12% Max HP ทันที (ทางเลือก B) และข้ามการใช้สกิล/ท่าไม้ตายในเทิร์นนั้น
     - มีโอกาส 40% ตั้งสติได้และออกแอ็กชันตามปกติ
  3. เพิ่มสกิลบอร์ดธาตุพลังจิต 5 ท่า (S, M1, M2, L, AOE) ที่มีพลังโจมตีสูงและกิน SP สูง พร้อมโอกาสติดสถานะสับสน (ปรับลดโอกาสลง 15% ตามคำสั่ง Game Director):
     - `psychic_s` (คลื่นจิตแทรกซึม): ดาเมจ ×1.35, 28 SP, สับสน 25% (1 เทิร์น)
     - `psychic_m1` (ลำแสงจิตสังหาร): ดาเมจ ×1.65, 45 SP, สับสน 35% (1 เทิร์น), ลด HIT 15 (2 เทิร์น)
     - `psychic_m2` (คลื่นกระแทกจิตสำนึก): ดาเมจ ×1.75, 48 SP, สับสน 45% (2 เทิร์น)
     - `psychic_l` (มหาคลื่นจิตทลายภพ): ดาเมจ ×2.25, 70 SP, สับสน 60% (2 เทิร์น), ตัด SP ศัตรู -12 SP
     - `psychic_aoe` (พายุจิตวิญญาณปั่นป่วน): ดาเมจหมู่ ×1.30, 70 SP, สับสน 35% (2 เทิร์น)
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/elements.json`
  - `src/data/skills.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/main.ts`
  - `doc/07_skill_slot_system.md`

---

## [Backup #014] — วันที่ 2026-11-01 เวลา 20:25:00
- **คำสั่งจาก Game Director:** 
  1. เพิ่มสัตว์โลกธาตุพลังจิต (Psychic / 🔮) ให้ครบถ้วนทั้ง 5 สาย (Tank, Striker, Assassin, Controller, Supporter) และครบทุกแร็งค์ (B, A, S, SS) รวม 16 ตัว
  2. ย้าย **นกฮูก (Owl)** จากธาตุลม A มาเป็น Controller ธาตุพลังจิต A
  3. ย้าย **นกยูง (Peacock)** จากธาตุแสง S มาเป็น Controller ธาตุพลังจิต S
  4. เพิ่มสัตว์ใหม่ธาตุพลังจิต 14 ตัว:
     - Rank B: ตุ่นปากเป็ด (Platypus - Tank), ลีเมอร์ (Lemur - Striker), แมวสฟิงซ์ (Sphynx Cat - Assassin), กิ้งก่าบาซิลิสก์ (Basilisk - Controller), แฮมสเตอร์ (Hamster - Supporter)
     - Rank A: เต่าอัลดาบรา (Giant Tortoise - Tank), เลียงผา (Serow - Striker), ลิงลม (Slow Loris - Assassin), นกกระเรียน (Crane - Supporter)
     - Rank S: แมมมอธ (Mammoth - Tank), อินทรีฮาร์ปี (Harpy Eagle - Striker), งูอนาคอนดา (Anaconda - Assassin), วาฬสีน้ำเงิน (Blue Whale - Supporter)
     - Rank SS: กิเลน (Qilin - Mythical Controller) สัตว์เทพแห่งปัญญาและญาณทิพย์ พร้อมภูมิคุ้มกันสถานะลบสมบูรณ์แบบ
  5. สำหรับสัตว์ใหม่ธาตุแสง: ยังไม่ต้องดำเนินการใดๆ ตามคำสั่ง Game Director
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `doc/06_heroes_and_rarity.md`
- **ผลการทดสอบ:**
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: สำเร็จ 100%
  - `npm run sim`: ผ่าน 100% (จำลอง 168 ฮีโร่ ครบทุกคู่ ไร้ข้อผิดพลาด)
  - `npm run sim:2v2`: ผ่าน 100% (500 ไฟต์สุ่มทีม 2v2 ชนะเสมอดุลย์ ไร้ข้อผิดพลาด)

---

## [Backup #015] — วันที่ 2026-11-01 เวลา 20:53:00
- **คำสั่งจาก Game Director:** เพิ่มสัตว์เข้ามาทดแทนตำแหน่ง Controller ที่ว่างลงในธาตุลมและธาตุแสง:
  1. **ธาตุลม (Wind) ระดับ Rank A สาย Controller:** เพิ่ม **แมลงปอยักษ์ (Giant Dragonfly)**
     - สเตตัส: STR 54, AGI 56, STA 50 (Archetype BAL, Budget 160)
     - ท่าไม้ตาย: `[วาตภัยปีกกระพือสะท้าน]` ดาเมจ 1.6x, สโลว์ 2 เทิร์น และโอกาส 65% สตัน (1 เทิร์น)
     - Ability: `การบินผาดแผลง 360 องศา` FLEE +15 และเมื่อหลบการโจมตีได้ มีโอกาส 70% สะบัดกระแสลมตัดเกจศัตรู -10 แต้ม และลด HIT -15 (2 เทิร์น)
     - สกิลเริ่มต้น: `wind_m1`, `wind_m2`, `trick_m1`, `secret_m2`
  2. **ธาตุแสง (Light) ระดับ Rank S สาย Controller:** เพิ่ม **สิงโตขาว (White Lion)**
     - สเตตัส: STR 62, AGI 55, STA 54 (Archetype BAL, Budget 171)
     - ท่าไม้ตาย: `[คำรามสุริยะพิพากษา]` ดาเมจหมู่ 1.8x, ทำให้ศัตรูทุกคนตาบอด 2 เทิร์น, ลด ATK -20% (2 เทิร์น) และตัดเกจศัตรู -10 แต้ม
     - Ability: `รัศมีราชันย์สุริยะ` เมื่อเริ่มเทิร์น มีโอกาส 60% ส่องแสงสะกดขวัญ ลดเกจไม้ตายศัตรู -8 แต้ม และทำให้ศัตรูติดตาบอด 1 เทิร์น
     - สกิลเริ่มต้น: `light_l`, `light_m1`, `catalyst_m1`, `trick_m1`
  3. ยอดรวมฮีโร่ในระบบปัจจุบันกลายเป็น **170 ตัว (ครบ 11 ธาตุ สมบูรณ์ครบทุกสาย Tank, Striker, Assassin, Controller, Supporter ในทุกระดับ B/A/S/SS)**
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `doc/06_heroes_and_rarity.md`
- **ผลการทดสอบ:**
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: สำเร็จ 100%
  - `npm run sim:2v2`: ผ่าน 100% (500 ไฟต์ 2v2 ชนะเสมอดุลย์ ไร้ข้อผิดพลาด)

---

## [Backup #016] — วันที่ 2026-11-01 เวลา 21:12:00
- **คำสั่งจาก Game Director:** เพิ่ม 5 สถานะผิดปกติด้านลบใหม่ พร้อมผสานเข้ากับสกิลบอร์ดและท่าไม้ตายของสัตว์เลี้ยงให้สมดุลที่สุด:
  1. **สถานะผิดปกติ 5 ชนิดใหม่:**
     - **เลือดไหล (Bleed 🩸):** ดาเมจแอ็กชัน 6% Max HP + โดนตีเสียเลือดซ้ำ 4% Max HP (2 เทิร์น)
     - **ยั่วยุ (Taunt 💢):** บังคับให้ศัตรูต้องเล็งโจมตีผู้ยั่วยุก่อนเสมอ (ทั้ง 1v1 และ 2v2 บนกระดาน 3x3) พร้อมลดดาเมจศัตรูลง 10% (2 เทิร์น)
     - **หลับใหล (Sleep 💤):** Hard CC ข้ามเทิร์น (2 เทิร์น) แต่ตื่นทันทีเมื่อถูกโจมตี โดยการโจมตีปลุก (Wake-up Strike) จะติดคริติคอล 100% แน่นอน + ดาเมจแรงขึ้น +30%
     - **ใบ้ (Silence 🔕):** ปิดการใช้สกิล 4 ช่องและท่าไม้ตาย (โจมตีธรรมดาได้อย่างเดียว) ไม่ได้เกจท่าไม้ตายและไม่ได้โบนัสพักหายใจฟื้นฟู SP (2 เทิร์น)
     - **เปราะบาง (Vulnerable 💔):** เพิ่มดาเมจที่ได้รับทุกประเภท +25% และบล็อกการสร้างเกราะ (Shield) ทุกชนิด (2 เทิร์น)
  2. **ผสานเข้ากับ Skill Board (`src/data/skills.json`):**
     - `poison_m2` (เขี้ยวอสรพิษ): เพิ่มโอกาสติดเลือดไหล (Bleed) 60% (2 เทิร์น)
     - `dark_m1` (ม่านมืดบอด): เพิ่มโอกาสติดใบ้ (Silence) 45% (2 เทิร์น)
     - `earth_m2` (กำแพงดิน): เพิ่มโอกาสติดยั่วยุ (Taunt) 70% (2 เทิร์น)
     - `secret_s` (ฝนสุรา): เพิ่มโอกาสติดหลับใหล (Sleep) 40% (2 เทิร์น)
     - `trick_m1` (กับดักทลายเกราะ): เพิ่มโอกาสติดเปราะบาง (Vulnerable) 50% (2 เทิร์น)
  3. **ผสานเข้ากับท่าไม้ตายของสัตว์เลี้ยง (`src/data/heroes.json`, `combat.ts`, `team_combat.ts`):**
     - ฉลาม (`shark`): ท่าไม้ตาย [มหากัดขย้ำ] ติดเลือดไหล 2 เทิร์น & ลด DEF 30%
     - นกคาสโซแวรี (`cassowary`): ท่าไม้ตาย [กรงเล็บสังหาร] ติดเลือดไหล 2 เทิร์น & ลด DEF 30%
     - ควาย (`buffalo`): ท่าไม้ตาย [เหล็กชนแหลก] ติดยั่วยุ 2 เทิร์น & สโลว์ 2 เทิร์น
     - แมมมอธ (`mammoth`): ท่าไม้ตาย [มหาคลื่นงาช้างจิตสะท้าน] ติดยั่วยุ 2 เทิร์น & บัฟ DEF +15%
     - สมเสร็จ (`tapir`): ท่าไม้ตาย [ท่องนิทรากลืนฝัน] ติดหลับใหล 2 เทิร์น
     - หมึกแวมไพร์ (`vampire_squid`): ท่าไม้ตาย [ม่านหมึกดูดเลือด] ติดใบ้ 2 เทิร์น & ลบล้างบัฟทั้งหมด
     - กุ้งดีดขัน (`pistol_shrimp`): ท่าไม้ตาย [กระสุนฟองอากาศ] ติดเปราะบาง 2 เทิร์น & ลด DEF 20%
     - จระเข้ (`crocodile`): ท่าไม้ตาย [มหากัดสะบัดหาง] ติดเปราะบาง 2 เทิร์น & สโลว์ 2 เทิร์น
  4. **ระบบ UI (`src/main.ts`):** เพิ่มแบดจ์ไอคอนแสดงสถานะผิดปกติ 🩸 💢 💤 🔕 💔 ครบถ้วน
- **ไฟล์ที่เกี่ยวข้อง:**
  - `src/data/skills.json`
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/main.ts`
  - `doc/07_skill_slot_system.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบ:**
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: สำเร็จ 100%
  - `npm run sim`: ผ่าน 100% (170 ตัวละคร ทดสอบเสร็จสิ้นสมบูรณ์)
  - `npm run sim:2v2`: ผ่าน 100% (500 ไฟต์สุ่มทีม 2v2 ชนะเสมอดุลย์ A 48.6% vs B 51.4%, ไร้ runtime errors)

---

## [Backup #017] — วันที่ 2026-11-02 เวลา 00:18:00
- **คำสั่งจาก Game Director:** เริ่มต้นพัฒนา Phase 2 (Graybox Core Loop) — งาน 2.1: ระบบข้อมูลผู้เล่น, คลังทรัพยากร และ Save System:
  1. **สร้างระบบจัดการเซฟ `src/engine/save_manager.ts`:**
     - ออกแบบโครงสร้างข้อมูลบัญชีผู้เล่น `PlayerSaveData` รองรับการเซฟลง `localStorage` อัตโนมัติ พร้อมระบบตรวจสอบความเสียหายและสร้างชุดข้อมูลเริ่มต้น (Starter Kit)
     - **Starter Kit ผู้เล่นใหม่:**
       - ฮีโร่เริ่มต้น 3 ตัว ครอบคลุม 3 บทบาท/ธาตุ: ไก่ (`rooster` - Fire Striker), แมว (`cat` - Wind Assassin), ควาย (`buffalo` - Earth Tank)
       - ทรัพยากรเริ่มต้น: 1,500 Gold, 150 Crystals, 800 Food, 30 Warmth
       - ไข่เริ่มต้น: ไข่ธรรมดา 2 ฟอง, ไข่ทอง 1 ฟอง
       - ด่านเริ่มต้น: `stage_1_1`
       - แถวธาตุและสกิลเริ่มต้นที่ปลดล็อก: ธาตุไฟ, ลม, ดิน, ไร้ธาตุ (11 สกิล)
     - **ระบบคลังทรัพยากร (Inventory Management):** ฟังก์ชันเพิ่ม/หักลบ Gold, Crystals, Food, Warmth, Eggs, Shards, Element Stones, Skill Books พร้อมระบบป้องกันการหักลบเกินจำนวนที่มี
     - **ระบบพัฒนาสัตว์เลี้ยง (Progression Engine):**
       - การอัปเลเวลฮีโร่ (Level 1-50): ใช้ Food + Gold โดยแต่ละเลเวลเพิ่มสเตตัส +2%
       - การอัปดาวฮีโร่ (Stars ★1-★5): ใช้เศษวิญญาณเฉพาะตัว (Shards) โดยเพิ่มสเตตัส ★2 (+5%), ★3 (+12%), ★4 (+20%), ★5 (+30%)
       - การสุ่มได้ตัวซ้ำ: แปลงเป็นเศษวิญญาณอัตโนมัติตามระดับความหายาก (B=10, A=20, S=50, SS=100)
     - **ระบบตู้ฟักไข่ (Incubator):** ตู้ฟัก 2 ช่อง รองรับไข่ธรรมดา (10 นาที), ไข่ทอง (4 ชม.), ไข่มายา (12 ชม.) พร้อมระบบเร่งเวลาด้วยพลังอบอุ่น (Warmth), ปุ่มเร่งทันทีสำหรับทดสอบ, และระบบ Pity 30 ฟองการันตี SS
     - **ระบบบันทึกผลด่านผจญภัย (Campaign Clear):** บันทึกการเคลียร์ด่าน 1-3 ดาว, มอบของรางวัล และปลดล็อกด่านถัดไป
     - **ระบบ Skill Board:** ปลดล็อกแถวธาตุด้วยหินธาตุ และปลดล็อกสกิลด้วยเหรียญ + คัมภีร์
  2. **เชื่อมต่อเข้ากับ Combat Engine (`combat.ts` & `team_combat.ts`):**
     - ปรับปรุง `computeHeroStats`, `createFighter`, และ `createTeamFighter` ให้รองรับพารามิเตอร์ `level` และ `stars` โดยค่าเริ่มต้น level=1, stars=1 ยังคงให้สเตตัสเดิม 100% เพื่อความสมบูรณ์แบบของระบบเดิม
     - รองรับตัวเลือก `teamALevels`, `teamAStars`, `teamBLevels`, `teamBStars` ในการจำลองทั้ง 1v1 และ 2v2
  3. **สร้างสคริปต์ทดสอบ `src/sim/test_save_manager.ts` (`npm run test:save`):**
     - ครอบคลุมการทดสอบครบทุกระบบ: Starter Kit, Inventory, Leveling, Star Awakening, Incubator, Hatching, Combat Integration, และ Campaign Clear
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/save_manager.ts` (สร้างใหม่)
  - `src/sim/test_save_manager.ts` (สร้างใหม่)
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

- **ผลการทดสอบ:**
  - `npm run test:save`: ผ่านครบ 100% ทุกชุดการทดสอบ
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: ผ่าน 100% สำเร็จสมบูรณ์
  - `npm run sim:2v2`: ผ่าน 100% (500 ไฟต์ 2v2 ชนะเสมอดุลย์ ไร้ข้อผิดพลาด)

---

## [Backup #018] — วันที่ 2026-11-02 เวลา 01:05:00
- **คำสั่งจาก Game Director:** ดำเนินการ Phase 2 (Graybox Core Loop) — งาน 2.2: ระบบด่านบทที่ 1 "ป่าต้นกำเนิดวิญญาณ" (Campaign Chapter 1 & Campaign Engine):
  1. **สร้างไฟล์โครงสร้างข้อมูลด่าน `src/data/stages.json`:**
     - ออกแบบครบถ้วนทั้ง 10 ด่านประจำบทที่ 1 (stage_1_1 ถึง stage_1_10)
     - ไต่ระดับรูปแบบการเล่น: ด่าน 1-1 ถึง 1-2 ใช้ระบบ 1v1 เพื่อเรียนรู้การแก้ทางธาตุ, ตั้งแต่ด่าน 1-3 เป็นต้นไปใช้ระบบทีม 2v2 บนกระดานจัดทัพ 3x3
     - กำหนดข้อมูลศัตรูในแต่ละด่าน: รหัสฮีโร่, เลเวล (Lv.1 - Lv.5), ระดับดาว, พิกัดแถว-คอลัมน์บนกระดาน 3x3, และชุดสกิลเฉพาะตัว
     - กำหนดบทบรรยายคัตซีนเนื้อเรื่องก่อนสู้ (intro) และหลังชนะ (victory)
     - กำหนดรางวัลผ่านด่านครั้งแรก (First Clear) และรางวัลสำหรับการฟาร์มด่านซ้ำ (Repeat Clear Drops)
     - ด่าน 1-5 (มินิบอส สมเสร็จ): แจกรางวัลไข่ทองคำ (Golden Egg)
     - ด่าน 1-10 (บอสใหญ่ พญาลิงอุรังอุตัง 2 ดาว): แจกรางวัล 150 คริสตัล + ไข่ทองคำ + เศษวิญญาณอุรังอุตัง 30 ชิ้น
  2. **สร้างเอนจินควบคุมโหมดเนื้อเรื่อง `src/engine/campaign_manager.ts`:**
     - สร้างคลาส `CampaignManager` เชื่อมโยงกับ `SaveManager`, `BattleSession` (1v1) และ `TeamBattleSession` (2v2)
     - เมธอด `createCampaignBattle`: แปลงข้อมูลด่านเป็นคู่ต่อสู้ และดึงทีมจัดทัพของผู้เล่น (activeTeam1v1 / activeTeam2v2) มาร่วมรบ
     - เมธอด `resolveStageBattle`: ระบบตัดสินประเมิน 3 ดาว:
       - ⭐ 1 ดาว: ชนะการต่อสู้
       - ⭐ 2 ดาว: ชนะโดยยูนิตในทีมไม่มีตัวใดตาย (รอด 100%)
       - ⭐ 3 ดาว: ชนะอย่างรวดเร็ว (1v1 <= 15 เทิร์น, 2v2 <= 10 รอบ)
     - แจกจ่ายทรัพยากร First Clear หรือ Repeat Drop เข้ากระเป๋าผู้เล่น และบันทึกปลดล็อกด่านถัดไปอัตโนมัติ
  3. **ปรับปรุงความสมดุลสูตรความเสียหายในระบบ 2v2 (`src/engine/team_combat.ts`):**
     - ปรับสูตรคำนวณความเสียหายจากเดิมที่ลบ DEF แบบหยาบ ให้สอดคล้องกับ Official GDD K-Formula (`K / (K + effDef)` โดยที่ K = 100) ป้องกันไม่ให้สายแทงก์โดนสกิลแรงแล้วละลาย
     - เพิ่มโบนัสความเสียหายชนะธาตุ 1.3x และลดทอนแพ้ธาตุ 0.85x ให้ทำงานอย่างสมบูรณ์แบบ
     - อิมพลีเมนต์ Ability ป้องกันตัวของสายแทงก์ เช่น หนังเหนียวสู้โคลนของควาย (ลดดาเมจ 25% โอกาส 50%, ต้าน DoT 40%) และผิวพิษคางคก
  4. **สร้างชุดทดสอบระบบด่านครบวงจร `src/sim/test_campaign.ts` (`npm run test:campaign`):**
     - ตรวจสอบความถูกต้องของด่านทั้ง 10 ด่าน
     - ทดสอบลูปการต่อสู้ 1-1 (1v1) ➔ อัปเลเวลฮีโร่ ➔ จัดทัพ 2v2 บนกระดาน 3x3 ➔ ตะลุยด่าน 1-3 ถึง 1-9 ➔ ฟักไข่ทองคำที่ได้จากมินิบอส 1-5 ➔ พิชิตบอสใหญ่ 1-10 ➔ ทดสอบฟาร์มด่านซ้ำ ➔ ตรวจสอบยอดดาวสะสม (26/30 ดาว)
  5. **อัปเดตเอกสารประกอบ:**
     - อัปเดต `doc/10_game_modes.md` เพิ่มรายละเอียดตารางด่านทั้ง 10 ด่านของบทที่ 1 และเกณฑ์การประเมิน 3 ดาว
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/stages.json` (สร้างใหม่)
  - `src/engine/campaign_manager.ts` (สร้างใหม่)
  - `src/sim/test_campaign.ts` (สร้างใหม่)
  - `src/engine/save_manager.ts`
  - `src/engine/team_combat.ts`
  - `doc/10_game_modes.md`
  - `package.json`
  - `doc/19_history_and_backup.md`

- **ผลการทดสอบ:**
  - `npm run test:campaign`: ผ่านครบ 100% (พิชิต 10 ด่าน สะสม 26 ดาว บันทึกเซฟสมบูรณ์)
  - `npm run test:save`: ผ่าน 100%
  - `npm run typecheck`: ผ่าน 0 errors (`tsc --noEmit`)
  - `npm run build`: สำเร็จสมบูรณ์ (`vite build`)
  - `npm run sim:2v2`: ผ่าน 100% (ความยาว 8.4 รอบ สมดุล A 51.0% vs B 49.0% ไร้ข้อผิดพลาด)

---

## [Backup #019] — วันที่ 2026-11-02 เวลา 01:30:00
- **คำสั่งจาก Game Director:** ปรับปรุงโครงสร้างระบบด่านและเตรียมพร้อมการทำงานข้ามเครื่อง:
  1. ปิดระบบต่อสู้ 2v2 ในโหมดด่านแคมเปญไว้ก่อน โดยเปลี่ยนกลับมาใช้ระบบต่อสู้ 1v1 Tag Relay (ตัวหลัก 1 ตัว + ตัวสำรอง 1 ตัว สามารถกดสลับตัวได้ตลอดเวลา และตัวสำรองฟื้นฟู SP +10 แต้ม/เทิร์น)
  2. ปรับปรุงรายละเอียด 10 ด่านในบทที่ 1 ให้เป็นการต่อสู้แบบ 1v1 Tag Relay พร้อมระบบบทเรียนสอนเล่น (Comprehensive Guided Tutorial) ที่ครอบคลุมทุกระบบหลักของเกม:
     - ด่าน 1-1: พื้นฐานการออกแอ็กชัน, หลอด HP และ SP (ตีธรรมดาฟื้น +6 SP)
     - ด่าน 1-2: วงล้อแห่งธาตุ (Elemental Advantage 1.3x / 0.85x)
     - ด่าน 1-3: เกจท่าไม้ตาย (Ultimate Gauge) & ท่าไม้ตายปลดปล่อยพลังทะลวงเกราะ
     - ด่าน 1-4: การสลับตัวสำรอง (Tag Relay Switch & Backup SP Regen +10/เทิร์น)
     - ด่าน 1-5 (มินิบอส): การต่อสู้กับคู่หู Tag Relay & สถานะผิดปกติเผาไหม้ (Burn)
     - ด่าน 1-6: ระบบบัฟและดีบัฟ (Buffs & Debuffs: ATK/DEF/SPD)
     - ด่าน 1-7: การรับมือ Hard CC (สตัน / สับสน / หลับใหล)
     - ด่าน 1-8: ความอันตรายของ DoT & สถานะเปราะบาง (Vulnerable)
     - ด่าน 1-9 (ด่านหน้าบอส): การจัดทีม Synergy สลับตัวแก้ทางธาตุขั้นสูงสุด
     - ด่าน 1-10 (บอสใหญ่): ศึกตัดสินบอสใหญ่ (Break & Burst, ชำระล้างจิตใจบอสพญาลิงอุรังอุตัง)
  3. ออกแบบศัตรูใหม่ 10 ตัว (เฉพาะศัตรูระดับธรรมดา ไม่ใช่ mini-boss และ boss) ที่ไม่ใช่สัตว์โลก (สิ่งมีชีวิตมลทิน Void & Nature Anomalies: พืชปีศาจ, สปอร์เห็ด, สไลม์, ก้อนพลังงาน):
     - `void_thornvine` (เถาวัลย์ทมิฬกลืนชีพ - พืช Striker)
     - `toxic_sporeling` (สปอร์เห็ดพิษคลั่ง - พิษ Controller)
     - `putrid_slime` (สไลม์โคลนเน่าเปื่อย - ดิน Tank)
     - `mist_droplet_blob` (บล็อบหยดน้ำหมอกมายา - น้ำ Supporter)
     - `cursed_wisp` (วิสป์เพลิงวิญญาณแค้น - ไฟ Assassin)
     - `anomalous_rockling` (ผลึกหินคอร์แปรปรวน - ดิน Tank)
     - `phantom_mandrake` (แมนเดรกพรายหวีดหวิว - พืช Controller)
     - `shadow_parasite` (ปรสิตดูดเงา - มืด Assassin)
     - `caustic_acid_jelly` (เจลลี่กรดกัดกร่อน - พิษ Striker)
     - `gale_swarm_orb` (ลูกแก้ววายุฉวัดเฉวียน - ลม Assassin)
  4. บันทึกแผนการทั้งหมดลงในเอกสารโครงการ:
     - `doc/10_game_modes.md`
     - `doc/18_dev_phases.md`
     - `doc/19_history_and_backup.md`

---

## [Backup #020] — วันที่ 2026-11-02 เวลา 21:05:00
- **คำสั่งจาก Game Director:** ดำเนินการตามแผน [Backup #019] ปรับเปลี่ยนระบบด่านบทที่ 1 เป็น 1v1 Tag Relay และสร้างศัตรูมลทินแห่ง Void 10 ตัว:
  1. **สร้างไฟล์ข้อมูลศัตรูใหม่ `src/data/enemies.json`:**
     - สร้างศัตรูระดับธรรมดา 10 ตัว (Void & Nature Anomalies) ที่ไม่ใช่สัตว์โลก ครบทุกธาตุและทุกสาย พร้อมระบบสเตตัสตามสูตร Rank B, Signature Skill, และ Ability:
       1. `void_thornvine` (เถาวัลย์ทมิฬกลืนชีพ - พืช Striker)
       2. `toxic_sporeling` (สปอร์เห็ดพิษคลั่ง - พิษ Controller)
       3. `putrid_slime` (สไลม์โคลนเน่าเปื่อย - ดิน Tank)
       4. `mist_droplet_blob` (บล็อบหยดน้ำหมอกมายา - น้ำ Supporter)
       5. `cursed_wisp` (วิสป์เพลิงวิญญาณแค้น - ไฟ Assassin)
       6. `anomalous_rockling` (ผลึกหินคอร์แปรปรวน - ดิน Tank)
       7. `phantom_mandrake` (แมนเดรกพรายหวีดหวิว - พืช Controller)
       8. `shadow_parasite` (ปรสิตดูดเงา - มืด Assassin)
       9. `caustic_acid_jelly` (เจลลี่กรดกัดกร่อน - พิษ Striker)
       10. `gale_swarm_orb` (ลูกแก้ววายุฉวัดเฉวียน - ลม Assassin)
  2. **เชื่อมต่อศัตรูเข้ากับ Combat Engine (`combat.ts` & `team_combat.ts`):**
     - รวม `enemiesData.enemies` เข้าสู่ `HERO_MAP` ภายในเครื่องคำนวณการต่อสู้ ทำให้สามารถเรียกใช้ `createFighter` สำหรับศัตรูได้อย่างไร้รอยต่อ โดยไม่กระทบต่อพูลสุ่มฟักไข่ใน `SaveManager` หรือพูลแสดงผลฮีโร่ในหน้า UI
     - เพิ่มฟังก์ชัน `getAllEnemies()` ใน `combat.ts`
  3. **ปรับปรุงโครงสร้างด่าน 10 ด่านใน `src/data/stages.json`:**
     - ปรับโหมดการต่อสู้เป็น `"battleMode": "1v1"` ครบทั้ง 10 ด่าน (ด่าน 1-1 ถึง 1-4 เป็นศัตรูเดี่ยว, ด่าน 1-5 ถึง 1-10 เป็นศัตรูคู่ Tag Relay ตัวหลัก + ตัวสำรอง)
     - เพิ่มฟิลด์ `tutorialTopic` และ `tutorialGuide` กำกับบทเรียนสอนเล่นที่ครอบคลุมทุกระบบหลักของเกมในแต่ละด่าน
     - ผสานศัตรูมลทิน Void ทั้ง 10 ตัวเข้าสู่ด่าน พร้อมมินิบอส (แมวออสลอต 1-5) และบอสใหญ่ (พญาลิงอุรังอุตัง 1-10)
     - ปรับความยาก (Level Curve) ให้ไต่ระดับอย่างเป็นธรรมชาติ (Lv.1 ถึง Lv.5)
  4. **ปรับปรุง `CampaignManager` ใน `src/engine/campaign_manager.ts`:**
     - อัปเดตอินเทอร์เฟซ `StageDefinition` ให้รองรับ `tutorialTopic` และ `tutorialGuide`
     - ปรับเงื่อนไข 3 ดาว สำหรับการต่อสู้ 1v1: จบภายใน 15 เทิร์น และสมาชิกในทีมรอดชีวิตครบ 100%
  5. **อัปเดตและรันชุดทดสอบ `src/sim/test_campaign.ts` (`npm run test:campaign`):**
     - ทดสอบครบถ้วนทั้ง 10 ศัตรูใหม่, โครงสร้าง 10 ด่าน, Tutorial Metadata, การสลับตัวแก้ทางธาตุ (ดิน ชนะ ไฟ, ไฟ ชนะ พืช, ลม ชนะ พิษ), การอัปเลเวลฮีโร่, การฟักไข่ทองคำ, และการพิชิตบอสใหญ่
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/enemies.json` (สร้างใหม่)
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/data/stages.json`
  - `src/engine/campaign_manager.ts`
  - `src/sim/test_campaign.ts`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบ:**
  - `npm run test:campaign`: ผ่านครบ 100% ทุกชุดการทดสอบ
  - `npm run test:save`: ผ่านครบ 100% ทุกชุดการทดสอบ
  - `npm run typecheck`: ผ่าน 0 errors (`tsc --noEmit`)
  - `npm run build`: ผ่าน 100% สำเร็จสมบูรณ์ (`vite build`)
  - `npm run sim:2v2`: ผ่าน 100% (500 ไฟต์ สมดุล 49.6% vs 50.4% ไร้ข้อผิดพลาด)

---

## [Backup #021] — วันที่ 2026-11-02 เวลา 21:30:00
- **คำสั่งจาก Game Director:** ดำเนินการในส่วนงาน 2.3: ระบบกระดานสกิล (Skill Board & Skill Presets Engine) ตามเอกสาร GDD (07_skill_slot_system.md, 18_dev_phases.md)
- **รายละเอียดการดำเนินงาน:**
  1. **ขยายโครงสร้างเซฟ `SaveManager` (`src/engine/save_manager.ts`):**
     - เพิ่มฟิลด์ `skillLevels: Record<string, number>` จัดเก็บระดับเลเวลของแต่ละสกิล (Lv.1 - Lv.5)
     - เพิ่มฟิลด์ `skillPresets: Record<string, SkillPreset>` จัดเก็บชุดพรีเซตสกิล 4 ช่อง
     - เพิ่มพรีเซตสกิลเริ่มต้น 3 ชุดใน `getStarterData()`:
       1. `preset_balanced` (สมดุลพื้นฐาน: martial_s, trick_s, catalyst_m1, medical_s)
       2. `preset_fire_burst` (เพลิงผลาญระเบิดพลัง: fire_s, fire_m1, martial_s, trick_s)
       3. `preset_earth_tank` (ปราการพสุธาทรหด: earth_s, earth_m2, martial_s, medical_s)
     - เพิ่มเมธอดตัวช่วย: `getSkillLevel`, `setSkillLevel`, `getSkillPresets`, `saveSkillPreset`, `deleteSkillPreset`, `addElementStone`, `addSkillBook`
     - เพิ่ม Backward Compatibility ในเมธอด `load()` หากเปิดเซฟเก่าที่ยังไม่มีฟิลด์ดังกล่าว
  2. **สร้างเอนจินกระดานสกิล `SkillBoardManager` (`src/engine/skill_board_manager.ts`):**
     - โครงสร้าง 12 แถวบนกระดาน (11 ธาตุหลัก + 1 สายวิชาไร้ธาตุ)
     - ระบบปลดล็อก 2 ชั้น (Two-tier Unlock):
       - ชั้นที่ 1: แถวธาตุ (4 แถวเริ่มต้นฟรี: `fire`, `wind`, `earth`, `neutral`; อีก 8 แถวต้องใช้หินธาตุ 3 ก้อน `ROW_UNLOCK_STONE_COST = 3`)
       - ชั้นที่ 2: ปลดล็อกสกิลตาม Tier (Tier S ใช้ Gold 200; Tier M ใช้ Gold 400 + คัมภีร์ 1 เล่ม + ต้องมีสกิล S สายเดียวกัน; Tier L ใช้ Gold 800 + คัมภีร์ 2 เล่ม + คริสตัล 10 ชิ้น + ต้องมีสกิล M สายเดียวกัน; Tier AOE ใช้ Gold 600 + คัมภีร์ 1 เล่ม)
     - ระบบอัปเลเวลสกิล Lv.1 -> Lv.5:
       - ใช้คัมภีร์สกิลซ้ำ + เหรียญทองคำตามระดับ
       - เพิ่มตัวคูณดาเมจ +5% ต่อเลเวลที่เกิน 1 (Lv.2 = ×1.05, Lv.3 = ×1.10, Lv.4 = ×1.15, Lv.5 = ×1.25)
     - ระบบตรวจสอบความถูกต้องชุดสกิล 4 ช่อง (Loadout Validation Engine):
       - ต้องครบ 4 ช่อง
       - ห้ามมีสกิลซ้ำ
       - สายวิชา/ธาตุเดียวกันใส่ได้ไม่เกิน 2 ท่า (`MAX_SKILLS_PER_BRANCH = 2`)
       - สกิลทั้งหมดต้องปลดล็อกแล้วในบัญชี
     - ระบบติดตั้งและ Skill Presets Engine:
       - `equipSkillsToHero(heroId, skillIds)`: ติดตั้งให้ฮีโร่พร้อมบันทึกลงเซฟ
       - `createPreset`, `getPresets`, `getPreset`, `applyPresetToHero`, `deletePreset`: ระบบ CRUD พรีเซตสกิลครบวงจร
  3. **เชื่อมต่อตัวคูณเลเวลสกิลเข้าสู่ระบบต่อสู้ (`combat.ts`, `team_combat.ts`, `campaign_manager.ts`):**
     - เพิ่มออปชัน `skillLevelsA` และ `skillLevelsB` ใน `CombatOptions` และ `TeamCombatOptions`
     - ใน `combat.ts`: การคำนวณดาเมจสกิลใน `performHit` จะคูณโบนัสระดับเลเวลสกิลของยูนิต (+5% ต่อเลเวล สูงสุด +25% ที่ Lv.5)
     - ใน `campaign_manager.ts`: ส่ง `skillLevelsA: save.skillLevels` เข้าสู่ `BattleSession` ในการเล่นด่านผจญภัย
     - ปรับจูนความสมดุลศัตรูบทที่ 1 (ด่าน 1-9 และ 1-10) ให้ผ่านได้อย่างเป็นธรรมชาติด้วยการวางแผนจัดทีมแก้ทางธาตุ
  4. **สร้างชุดทดสอบ `src/sim/test_skill_board.ts` และเพิ่มสคริปต์ใน `package.json`:**
     - เพิ่มคำสั่ง `"test:skills"` ใน `package.json`
     - ครอบคลุมการทดสอบ 7 หัวข้อใหญ่:
       1. โครงสร้าง 12 แถวและการปลดล็อกแถวด้วยหินธาตุ
       2. การปลดล็อกสกิลตาม Tier และเงื่อนไข Prerequisite
       3. การอัปเลเวลสกิล Lv.1-5 และการคำนวณตัวคูณพลัง
       4. การตรวจสอบกฎ Loadout Validation 4 ช่อง (ไม่ครบ, ซ้ำ, เกินสายละ 2 ท่า, ยังไม่ปลดล็อก, ผ่านฉลุย)
       5. การสวมใส่ชุดสกิลให้สัตว์เลี้ยง
       6. ระบบพรีเซตสกิล CRUD และการนำไปสวมใส่ 1 คลิก
       7. การจำลองไฟต์ต่อสู้จริงด้วยชุดสกิลและเลเวลสกิล
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/skill_board_manager.ts` (สร้างใหม่)
  - `src/sim/test_skill_board.ts` (สร้างใหม่)
  - `src/engine/save_manager.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/engine/campaign_manager.ts`
  - `src/data/stages.json`
  - `package.json`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบ:**
  - `npm run test:skills`: ผ่านครบ 100% ทุกการทดสอบ
  - `npm run test:save`: ผ่านครบ 100% ทุกการทดสอบ
  - `npm run test:campaign`: ผ่านครบ 10 ด่าน 100%
  - `npm run typecheck`: ผ่าน 0 errors (`tsc --noEmit`)
  - `npm run build`: ผ่าน 100% สำเร็จสมบูรณ์ (`vite build`)


## [Backup #022] — วันที่ 2026-11-02 เวลา 21:50:00
- **คำสั่งจาก Game Director:**
  1. ดำเนินการในส่วนงาน 2.4: Graybox Web UI สำหรับ Core Loop (หน้าฟักไข่, ด่านผจญภัยบทที่ 1, กระดานสกิล/จัดชุดสกิล, คลังสัตว์เลี้ยง)
  2. ตรวจสอบการพัฒนาที่ผ่านมา (2.1, 2.2, 2.3) ว่ามีความสมดุล ลงตัว หรือมีจุดขาดตกบกพร่องหรือไม่
  3. บันทึกความคืบหน้าของการพัฒนาทุกครั้งลงในเอกสารโครงการ
- **งานที่พัฒนาในงาน 2.4 (Graybox Web UI Core Loop):**
  1. **สร้างระบบ Toast Notification (`src/ui/toast.ts`):**
     - แสดงข้อความเตือน/ความสำเร็จบนหน้าจอ (success, error, gold, info) สไตล์เกมมือถือ
  2. **สร้าง Header แถบข้อมูลผู้เล่น & ทรัพยากร (`src/ui/header.ts`):**
     - แสดงเลเวลผู้เล่น, ค่าประสบการณ์ EXP Bar
     - แสดงทรัพยากรครบครัน: เหรียญทอง (Gold), คริสตัล (Crystals), เสบียงอาหาร (Food), พลังอบอุ่น (Warmth), จำนวนไข่ (Eggs), และดาวสะสมรวม (Total Stars)
     - แถบแท็บเมนูหลัก 5 แท็บ: 🗺️ แผนที่ด่าน (Campaign), 🐾 สัตว์เลี้ยง (Heroes), 📜 กระดานสกิล (Skill Board), 🥚 ตู้ฟักไข่ (Incubator), ⚔️ สนามประลอง (Sandbox)
     - ปุ่มล้างเซฟ/รีเซ็ตข้อมูล สำหรับทดสอบลูปผู้เล่นใหม่ตั้งแต่ต้น
  3. **สร้างหน้าจอด่านผจญภัยบทที่ 1 (`src/ui/campaign_view.ts`):**
     - การ์ดด่าน 1-1 ถึง 1-10 พร้อมป้ายบอก Boss/Mini-Boss, ดาว 1-3 ดาว, ระดับเลเวลที่แนะนำ (Recommended Level), และสถานะปลดล็อก
     - **Pre-battle Briefing Modal:** หน้าต่างเตรียมความพร้อมรบ แสดงศัตรู, ธาตุ, บทบาท, บทเรียน/คำแนะนำ (Tutorial Guide), และตัวเลือกจัดทัพ 1v1 ตัวหลักและตัวสำรอง
     - **Post-battle Result Modal:** หน้าต่างสรุปผลการรบ แสดงสถานะชัยชนะ/พ่ายแพ้, จำนวนดาว 1-3 ดาว, บทพูดเนื้อเรื่อง (Story Dialogue), ทรัพยากรและไอเทมที่ได้รับ, เคล็ดลับแก้เกมเมื่อพ่ายแพ้, พร้อมปุ่ม "ด่านถัดไป", "สู้ใหม่อีกครั้ง", หรือ "กลับหน้าด่าน"
  4. **สร้างหน้าคลังสัตว์เลี้ยงและการพัฒนา (`src/ui/heroes_view.ts`):**
     - แสดงรายชื่อสัตว์เลี้ยงทั้งหมด แบ่งเป็นตัวที่มีแล้ว (Owned) และตัวที่ยังไม่มี (Locked)
     - การ์ดสัตว์เลี้ยงแสดงธาตุ, ดาว, คลาส, เลเวล, ค่าสเตตัส 7 ค่า (HP, ATK, DEF, SPD, CRI, BLOCK, AB), และ Ability ประจำตัว
     - ปุ่ม **Level Up:** ใช้ Food + Gold ในการอัปเลเวล พร้อมคำนวณสเตตัสเพิ่มขึ้นแบบเรียลไทม์
     - ปุ่ม **Star Awakening:** ใช้วิญญาณสัตว์เลี้ยง (Shards) อัปเกรดระดับดาว ★1 -> ★5 มอบโบนัสสเตตัสพิเศษ
     - ปุ่ม **จัดทีม 1v1:** คลิกเดียวเพื่อตั้งสัตว์เลี้ยงเป็น "ตัวหลัก (Main)" หรือ "ตัวสำรอง (Backup)"
  5. **สร้างหน้ากระดานสกิล & จัดชุดสกิล (`src/ui/skill_board_view.ts`):**
     - แสดงกระดาน 12 แถวธาตุ (11 ธาตุ + 1 สายวิชาไร้ธาตุ)
     - ปลดล็อกแถวธาตุด้วยหินธาตุ 3 ชิ้น
     - ปลดล็อกสกิลตามลำดับ Tier (S -> M1/M2 -> L/AOE) ตามเงื่อนไขและทรัพยากร
     - อัปเลเวลสกิล Lv.1 ถึง Lv.5 แสดงผลตัวคูณโบนัสดาเมจ (+5% ถึง +25%)
     - แผงจัดชุดสกิล 4 ช่อง สำหรับฮีโร่ที่เลือก พร้อมระบบ Loadout Validation แบบเรียลไทม์
     - ระบบพรีเซตสกิล (Skill Presets): เลือกใช้พรีเซตสำเร็จรูป, สร้างและบันทึกพรีเซตใหม่, ลบพรีเซต
  6. **สร้างหน้าจอตู้ฟักไข่ (`src/ui/incubator_view.ts`):**
     - แสดงตู้ฟักไข่ 2 สล็อต พร้อมช่องวางไข่ (Normal, Gold, Mythic)
     - แถบเวลาและการนับถอยหลังแบบเรียลไทม์ (Countdown Timer)
     - ปุ่มใช้พลังอบอุ่น (Warmth) เร่งเวลาลดลงครั้งละ 10 นาที
     - ปุ่มเร่งเวลาฟักทันที (Fast Hatch) สำหรับการทดสอบ Graybox
     - ปุ่มกะเทาะเปลือกไข่ (Hatch Egg) สุ่มรับสัตว์เลี้ยงตามเรต Gacha และ Pity Counter
     - Modal สรุปผลการฟักไข่ พร้อมแอนิเมชันเปิดไข่และแสดงสัตว์เลี้ยง/เศษวิญญาณที่ได้รับ
  7. **ปรับแต่งสไตล์ CSS และเชื่อมต่อระบบทั้งหมด (`src/style.css`, `src/main.ts`):**
     - เสริมสไตล์ UI กว่า 1,700 บรรทัด ครอบคลุม Header, Tabs, Modals, Cards, Grid Layout, และ Floating Tags
     - เชื่อมโยง SaveManager, CampaignManager, SkillBoardManager เข้าสู่หน้า Battle Arena และผลลัพธ์การรบได้อย่างราบรื่น 100%
- **รายงานผลการตรวจสอบความสมดุล (Balance & Coherence Audit of 2.1, 2.2, 2.3):**
  1. **ระบบเศรษฐกิจและการเติบโต (Progression & Economy - งาน 2.1):**
     - **เหรียญทอง (Gold):** ได้รับรวมจากการเล่นจบ 10 ด่านครั้งแรก ~4,300g (มีเงินตั้งต้น 1,500g รวมเป็น ~5,800g); การอัปเลเวลตัวหลัก 2 ตัวสู่ Lv.4-5 ใช้ ~1,200g, ปลดล็อกสกิลพื้นฐาน 3-4 ท่าใช้ ~800g, อัปเลเวลสกิลใช้ ~300g รวมค่าใช้จ่ายจำเป็น ~2,300g เหลือเงินสำรองประมาณ 3,500g อยู่ในเกณฑ์ **"พอดีอย่างยิ่ง (Healthy Progression)"** ไม่ฝืดจนติดขัด และไม่เฟ้อจนไร้ค่า
     - **เสบียงอาหาร (Food):** ได้รับจาก 10 ด่านรวม ~2,600 Food (มีเริ่มต้น 800 Food); การอัปเลเวลฮีโร่ตัวหลัก 2 ตัวสู่ Lv.5 ใช้ 2,300 Food พอดี ทำให้ผู้เล่นมีอาหารพอปั้น 2 ตัวหลักจนจบบท และมีเหลือเล็กน้อยสำหรับเริ่มปั้นตัวที่สาม
     - **คริสตัล & ตู้ฟักไข่:** ได้รับ ~350-400 Crystals และไข่ทองคำการันตี 2 ฟอง (มินิบอส 1-5 และบอสใหญ่ 1-10) ทำให้ผู้เล่นสาย F2P ได้สัตว์เลี้ยงเกรด A/S แน่นอนเพื่อสร้างความหลากหลายในการจัดทัพ
  2. **ระบบการต่อสู้ 1v1 Tag Relay & ด่านผจญภัย (Campaign - งาน 2.2):**
     - การเปลี่ยนเป็น 1v1 Tag Relay ชัดเจน เข้าใจง่าย และมีความลึกเชิงกลยุทธ์สูง: ตัวสำรองฟื้นฟู SP +10 ต่อเทิร์น เมื่อสลับตัวลงมาจะสามารถปล่อย Signature Burst แก้ทางธาตุได้ทันที
     - **การปรับจูนความยาก (Difficulty Curve Tuning):** ปรับแก้สมเสร็จ (Tapir) ในด่าน 1-9 ให้มีเลเวล Lv.3 (จากเดิม Lv.4) เพื่อให้สอดคล้องกับบอสใหญ่ Orangutan (Lv.3 Stars 1) ในด่าน 1-10 ทำให้กราฟความยากของบทที่ 1 ไต่ระดับอย่างเป็นธรรมชาติ ไม่เกิดอาการ "ด่านรองบอสยากกว่าบอสใหญ่"
     - ศัตรูมลทิน Void ทั้ง 10 ตัวทำหน้าที่เป็นบทเรียนสอนกลไกเกม (Tutorial) ได้อย่างครบถ้วน (ธาตุ, เกจไม้ตาย, สลับตัว, บัฟ/ดีบัฟ, Hard CC, DoT, Synergy)
  3. **ระบบกระดานสกิล & พรีเซต (Skill Board - งาน 2.3):**
     - โครงสร้าง 2 ชั้น (4 แถวฟรี + 8 แถวใช้หินธาตุ) สอดคล้องกับฮีโร่เริ่มต้น 3 ตัว (ไก่-ไฟ, แมว-ลม, ควาย-ดิน) ผู้เล่นจึงผสมผสานสกิลได้ทันทีตั้งแต่ด่านแรกๆ
     - กฎสายละไม่เกิน 2 ท่า (`MAX_SKILLS_PER_BRANCH = 2`) บังคับให้เกิด Hybrid Build ผสมผสานข้ามธาตุอย่างมีประสิทธิภาพ
     - การเพิ่มตัวคูณดาเมจสกิลเลเวล Lv.1-5 (+5% ต่อเลเวล สูงสุด +25%) ให้ความรู้สึกคุ้มค่าโดยไม่ทำลายสมดุลเกม
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/header.ts` (สร้างใหม่)
  - `src/ui/campaign_view.ts` (สร้างใหม่)
  - `src/ui/heroes_view.ts` (สร้างใหม่)
  - `src/ui/skill_board_view.ts` (สร้างใหม่)
  - `src/ui/incubator_view.ts` (สร้างใหม่)
  - `src/ui/toast.ts` (สร้างใหม่)
  - `src/style.css` (เสริมสไตล์ Graybox UI)
  - `src/main.ts` (เชื่อมต่อ Web UI เข้ากับ Engine)
  - `src/engine/save_manager.ts` (ปรับปรุง Helper Methods)
  - `src/data/stages.json` (ปรับจูนความสมดุลศัตรูด่าน 1-9)
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 errors
  - `npm run test:save`: ผ่าน 100% ทุกชุด
  - `npm run test:campaign`: ผ่านครบ 10 ด่าน 100%
  - `npm run test:skills`: ผ่าน 100% ทุกชุด
  - `npm run build`: สร้าง Production Build สำเร็จ 100% (`dist/` พร้อมรัน)
  - **สถานะ:** เฟส 2 ครบทั้ง 4 งาน (2.1, 2.2, 2.3, 2.4) พร้อมเข้าสู่การทดสอบ **ประตู 2 (Gate 2 Testing)**


## [Backup #023] — วันที่ 2026-11-02 เวลา 22:42:00
- **คำสั่งจาก Game Director:**
  > *"ขอปรับในส่วนของกระดานสกิล ให้ทำเป็นไอคอนเล็กๆ แทนครับ และใช้การคลิกหรือเอาเม้าส์วางเพื่อเปิดหน้ารายละเอียดแทนครับ เพื่อประหยัดหน้าจอครับ และจะได้รองรับหน้าจอของ สมาร์ทโฟนและแท็ปเล็ตด้วย"*
- **การดำเนินการที่พัฒนา:**
  1. **ปรับเปลี่ยนการแสดงผลสกิลบนกระดาน 12 แถวธาตุเป็นแบบ Compact Icon Badges (`src/ui/skill_board_view.ts`):**
     - เปลี่ยนจากการ์ดขนาดใหญ่ที่กินพื้นที่ยาวหลายพันพิกเซล เป็นไอคอนขนาดกะทัดรัด (64px × 74px บน Desktop, 60px × 70px บน Tablet, 54px × 64px บน Smartphone)
     - บนตัวไอคอนแสดง:
       - **Tier Badge มุมซ้ายบน:** `S`, `M1`, `M2`, `L`, `AOE` พร้อมสีตามระดับ
       - **Notice Dot มุมขวาบน (`✨`):** จุดกระพริบแสงสีทองเมื่อมีทรัพยากรพร้อมปลดล็อกหรือพร้อมอัปเลเวล
       - **Icon ตรงกลาง:** สัญลักษณ์/อิโมจิธาตุขนาดใหญ่ หรือสัญลักษณ์แม่กุญแจ 🔒 เมื่อยังล็อกอยู่
       - **ชื่อสกิลย่อ:** แสดงชื่อสกิล 1 บรรทัดพร้อมตัดคำสวยงาม
       - **ป้ายสถานะด้านล่าง:** แสดง `Lv.1` ถึง `Lv.4`, `MAX` (สีทองเมื่อ Lv.5), หรือป้าย `ช่อง X` (เมื่อฮีโร่ตัวที่เลือกกำลังติดตั้งสกิลนี้อยู่)
  2. **ระบบ Hover Tooltip บน Desktop:**
     - เมื่อเอาเมาส์วางบนไอคอนสกิล จะแสดง Tooltip ลอยสรุปชื่อสกิล, SP Cost, ดาเมจรวมโบนัสเลเวล และคำอธิบายย่อทันที
  3. **ระบบหน้าต่างรายละเอียดแบบเจาะลึก (Skill Detail Modal):**
     - เมื่อคลิกหรือแตะ (Click / Tap) บนไอคอนสกิล จะเปิด Modal หน้ารายละเอียดขึ้นมา:
       - แสดงไอคอนใหญ่, ชื่อเต็ม, ธาตุ, สายวิชา, และ Tier
       - แสดง 4 สถิติหลัก: 💧 ค่าร่าย SP, ⚔️ ตัวคูณดาเมจจริง (Base × Level Bonus), 🎯 โอกาสออกท่า %, 🌟 ระดับเลเวลปัจจุบัน (Lv.X / 5)
       - แสดงคำอธิบายคุณสมบัติและเอฟเฟกต์เต็มรูปแบบ
       - แสดงเงื่อนไข Prerequisite (ต้องปลดล็อกสกิลก่อนหน้าใด) พร้อมสถานะว่าปลดแล้วหรือยัง
       - **แผงจัดการในที่เดียว (All-in-one Management):**
         - ถ้ายังไม่ปลด: แสดงค่าใช้จ่าย (ทอง, คัมภีร์, คริสตัล) และปุ่ม `🔓 ปลดล็อกสกิลนี้`
         - ถ้าปลดแล้ว: แสดงราคาอัปเลเวลและปุ่ม `⬆️ อัปเลเวลเป็น Lv.X` (+5% ดาเมจต่อเลเวล) หรือป้าย `⭐ เลเวลสูงสุดแล้ว (MAX Lv.5)`
         - **Quick Equip Section:** สวมใส่ให้ฮีโร่ที่เลือกอยู่ได้ทันที มีปุ่ม 4 ช่อง (`ช่องที่ 1`, `ช่องที่ 2`, `ช่องที่ 3`, `ช่องที่ 4`) พร้อมตรวจสอบ Loadout Validation และบันทึกลงเซฟทันที
  4. **ปรับแต่งสไตล์ CSS & Responsive Design (`src/style.css`):**
     - ปรับ `.row-skills-compact-grid` ใช้ flex-wrap จัดเรียงไอคอนอย่างเป็นระเบียบ
     - เพิ่มเอฟเฟกต์ Hover ยกตัวนูนและเงาเรืองแสงรอบขอบ
     - เพิ่ม Media Queries สำหรับ Tablet (<= 768px) และ Smartphone (<= 480px) ทำให้ไอคอนและ Modal ปรับขนาดพอดีหน้าจอสัมผัส ไม่ล้นจอ และแตะใช้งานง่าย
- **ไฟล์ที่แก้ไข:**
  - `src/ui/skill_board_view.ts`
  - `src/style.css`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบ:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:skills`: ผ่าน 100% ครบ 7 หมวดหมู่
  - `npm run test:save`: ผ่าน 100% ครบ 6 หมวดหมู่
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run build`: Production Build สำเร็จ 100%


## [Backup #024] — วันที่ 2026-11-02 เวลา 22:52:00
- **คำสั่งจาก Game Director:**
  > *"ต่อไป ปรับตรงส่วน สายวิชาไร้ธาตุ ก็ให้แบ่งตามสายวิชาด้วยครับ ไม่เอามารวมกันครับ"*
- **การดำเนินการที่พัฒนา:**
  1. **แยกแถวสายวิชาไร้ธาตุออกเป็น 5 แถวตามสายวิชาจริงบนกระดานสกิล (`src/engine/skill_board_manager.ts`):**
     - เดิมรวมสกิล 25 สกิลไว้ในแถวเดียว `neutral`
     - ปรับแยกเป็น 5 แถวเดี่ยวตามหลักการ GDD 07_skill_slot_system:
       1. 🥋 **สายกระบวนท่า (Martial Arts):** สกิล `martial_s`, `martial_m1`, `martial_m2`, `martial_l`, `martial_aoe` (ตีไร้ธาตุ & สถานะผิดปกติ)
       2. 💚 **สายพยาบาล (Medical Arts):** สกิล `medical_s`, `medical_m1`, `medical_m2`, `medical_l`, `medical_aoe` (ฟื้นฟู HP & ล้างดีบัฟ & เติม SP)
       3. 🎭 **สายเล่ห์กล (Trick Arts):** สกิล `trick_s`, `trick_m1`, `trick_m2`, `trick_l`, `trick_aoe` (ตีเบา & ลดสเตตัสศัตรู & ตัด SP)
       4. ⚡ **สายเร่งปฏิกิริยา (Catalyst Arts):** สกิล `catalyst_s`, `catalyst_m1`, `catalyst_m2`, `catalyst_l`, `catalyst_aoe` (เร่งบัฟ & เร่งเกจไม้ตาย)
       5. 📜 **สายวิชาลับ (Secret Arts):** สกิล `secret_s`, `secret_m1`, `secret_m2`, `secret_m3`, `secret_l` (กลไกพิเศษ โต้กลับ & เงามายา)
     - รวมทั้งกระดานมีทั้งหมด **16 แถว (11 แถวประจำธาตุ + 5 แถวสายวิชาไร้ธาตุ)**
     - สกิลแต่ละแถวมี 4–5 สกิล เรียงแบบไอคอนกะทัดรัด (Compact Icons) ได้ 1 แถวพอดีบนจอมือถือและแท็บเล็ต ไม่มีการ์ดยาวล้นจอ
  2. **ปรับระบบการปลดล็อกแถวและ SaveManager (`src/engine/save_manager.ts`):**
     - กำหนดให้ทั้ง 5 สายวิชาไร้ธาตุ (`martial`, `medical`, `trick`, `catalyst`, `secret`) เปิดใช้งานฟรีตั้งแต่ต้นตาม GDD พร้อมรองรับ backward-compatibility กับค่า `neutral` เดิม
     - อัปเดตเงื่อนไข `canUnlockSkill` และ `unlockSkill` ให้ตรวจสอบการปลดล็อกแถวตามสายวิชา (`branch`) ของสกิลไร้ธาตุ
  3. **ปรับการแสดงผลใน Web UI จัดหมวดหมู่ 2 กลุ่มชัดเจน (`src/ui/skill_board_view.ts`, `src/style.css`):**
     - เพิ่มแถบหัวข้อ Modern RPG Divider แบ่งเป็น:
       - 🌟 **แถววิชาประจำธาตุ (11 Elemental Branches)**
       - 🥋 **แถวสายวิชาไร้ธาตุ (5 Neutral Art Branches)**
     - ป้ายสถานะของสายไร้ธาตุแสดง `⚪ สายวิชาไร้ธาตุ (เปิดฟรี)`
     - แถบสรุปภาพรวมด้านบนแสดงยอดแถวเปิดใช้งานจริงตามโครงสร้างใหม่
  4. **ปรับปรุงและตรวจสอบชุดทดสอบ (`src/sim/test_skill_board.ts`, `src/sim/test_campaign.ts`):**
     - อัปเดตการตรวจสอบโครงสร้าง 16 แถว (11 ธาตุ + 5 สายไร้ธาตุ) และ 8 แถวเริ่มต้นฟรี
     - ปรับจูนการทดสอบด่าน 1-7 ให้มีความเสถียรและราบรื่นยิ่งขึ้น
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/skill_board_manager.ts`
  - `src/engine/save_manager.ts`
  - `src/ui/skill_board_view.ts`
  - `src/style.css`
  - `src/sim/test_skill_board.ts`
  - `src/sim/test_campaign.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:skills`: ผ่าน 100% ครบ 7 หมวดหมู่ (16 แถว)
  - `npm run test:save`: ผ่าน 100% ครบ 6 หมวดหมู่
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run build`: Production Build สำเร็จ 100%


## [Backup #025] — วันที่ 2026-11-02 เวลา 22:58:00
- **คำสั่งจาก Game Director:**
  > *"ขอปรับตรงส่วน สัตว์เลี้ยงที่ฟักออกจากไข่ เมื่อฟักออกมาแล้ว ไม่ต้องติดตั้งสกิลให้ครับ ให้ว่างทั้ง 4 ช่องเลย"*
- **การดำเนินการที่พัฒนา:**
  1. **ปรับปรุงกระบวนการรับสัตว์เลี้ยงใหม่จากตู้ฟักไข่ (`src/engine/save_manager.ts`):**
     - ในเมธอด `acquireHero`: เมื่อได้รับสัตว์เลี้ยงตัวใหม่เข้ามาในบัญชี กำหนดให้ `customSkills: []` ว่างเปล่า 0 ช่อง (จากเดิมที่ติดตั้ง `defaultSkills` ให้อัตโนมัติ)
     - สัตว์เลี้ยงที่ฟักออกมาใหม่จะมีช่องสกิลว่างทั้ง 4 ช่อง เพื่อให้ผู้เล่นได้เข้าไปศึกษาและเลือกปรับแต่งสกิลด้วยตนเองจากกระดานสกิล (Skill Board)
  2. **ปรับปรุงการแสดงผลในหน้าคลังสัตว์เลี้ยง (`src/ui/heroes_view.ts`):**
     - เมื่อสัตว์เลี้ยงยังไม่มีสกิลติดตั้ง แสดงข้อความระบุชัดเจน: `ยังไม่ได้ติดตั้งสกิล (ว่าง 4 ช่อง)` แทนการแสดงกล่องว่างเปล่า
  3. **ปรับปรุงหน้าต่างสรุปผลการฟักไข่ (`src/ui/incubator_view.ts`):**
     - ใน `showHatchResultModal`: เมื่อผู้เล่นสุ่มได้สัตว์เลี้ยงตัวใหม่ เพิ่มกล่องข้อความคำแนะนำสีทอง:
       `💡 สัตว์เลี้ยงใหม่นี้ยังไม่มีสกิลติดตั้ง (ว่าง 4 ช่อง) — สามารถไปเลือกติดตั้งได้ที่หน้า "กระดานสกิล"`
  4. **อัปเดตและยืนยันชุดทดสอบ (`src/sim/test_save_manager.ts`):**
     - เพิ่มเงื่อนไขตรวจสอบยืนยัน `assert(hatchRes.hero.customSkills.length === 0)` ในการทดสอบระบบฟักไข่ ให้มั่นใจว่าสัตว์เลี้ยงที่ฟักออกมาใหม่มีช่องสกิลว่างทั้ง 4 ช่อง 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/save_manager.ts`
  - `src/ui/heroes_view.ts`
  - `src/ui/incubator_view.ts`
  - `src/sim/test_save_manager.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:save`: ผ่าน 100% (ตรวจพบสัตว์เลี้ยงใหม่มีช่องสกิลว่าง `customSkills: []` ถูกต้อง)
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run test:skills`: ผ่าน 100% ครบ 7 หมวดหมู่
  - `npm run build`: Production Build สำเร็จ 100%


## [Backup #026] — วันที่ 2026-11-02 เวลา 23:10:00
- **คำสั่งจาก Game Director:**
  > *"ขอปรับตรงส่วนเลือกฮีโร่ที่จะติดตั้ง ให้ทำเป็น list ไอค่อนสัตว์เลี้ยงและแสดงชื่อข้อมูลดีกว่า select option ธรรมดาครับ ดูไม่ค่อยมืออาชีพ"*
- **การดำเนินการที่พัฒนา:**
  1. **ยกเลิก `<select>` dropdown ธรรมดา แล้วแทนที่ด้วย Modern RPG Hero Selector Card List (`src/ui/skill_board_view.ts`):**
     - สร้างคอมโพเนนต์เลือกสัตว์เลี้ยงระดับโปร `.hero-select-chip` สำหรับสัตว์เลี้ยงแต่ละตัวในคลัง
     - บนตัวการ์ดฮีโร่แต่ละใบแสดง:
       - **Avatar วงกลม:** ไอคอนอิโมจิธาตุประจำตัวสัตว์เลี้ยง พร้อมขอบสีตามธาตุ
       - **Rarity Badge:** ป้ายระดับความหายาก `B`, `A`, `S`, `SS` ที่มุมของ Avatar
       - **ชื่อสัตว์เลี้ยง:** แสดงชื่อชัดเจน เช่น `ไก่`, `แมว`, `ควาย`
       - **ระดับเลเวล & ดาว:** แสดง `Lv.X` และดาว `★`
       - **ธาตุประจำตัว:** แสดงชื่อธาตุและสีธาตุชัดเจน
       - **สถานะการจัดทีม:** มีป้ายแท็กไฮไลต์ `[ตัวหลัก]` สีทอง หรือ `[ตัวสำรอง]` สีฟ้า
       - **Active State (ตัวที่กำลังเลือกอยู่):** กรอบเรืองแสงสีทอง พร้อมเครื่องหมาย `✓`
  2. **ระบบการโต้ตอบแบบ 1-คลิก (Instant Hero Switch):**
     - คลิกหรือแตะที่การ์ดสัตว์เลี้ยงตัวใด ตัวนั้นจะถูกเลือกและสลับชุดสกิล 4 ช่องด้านล่างมาเป็นของสัตว์เลี้ยงตัวนั้นทันทีอย่างลื่นไหล
  3. **การออกแบบสไตล์ CSS & รองรับ Responsive (`src/style.css`):**
     - Desktop: แสดงเป็น Vertical Scrollable List สวยงามในแถบ Sidebar ด้านขวา
     - Mobile / Tablet: ปรับเป็น Horizontal Scrollable Chips ผู้เล่นสามารถใช้นิ้วปัดเลื่อนซ้าย-ขวาได้อย่างคล่องตัว สไตล์เกมมือถือชั้นนำ
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`
  - `src/style.css`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run test:skills`: ผ่าน 100% ครบ 7 หมวดหมู่
  - `npm run build`: Production Build สำเร็จ 100%


## [Backup #027] — วันที่ 2026-11-02 เวลา 23:15:00
- **คำสั่งจาก Game Director:**
  > *"ตรงส่วนหน้านี้ ให้แสดงไอค่อนสกิลบ่งบอกด้วย และปุ่มเลือกใส่ช่องนี้ ให้ทำเป็นปุ่มไอค่อนใดๆ ที่แสดงถึงการติดตั้งสกิล ซึ่งจะดูดีกว่าการทำตัวหนังสือในปุ่มโตๆ ครับ"*
- **การดำเนินการที่พัฒนา:**
  1. **เพิ่มไอคอนสกิลบ่งบอกความเป็นตัวตนและธาตุ (Skill Avatar & Tier Badge) ในหน้า Modal เลือกสกิล (`src/ui/skill_board_view.ts`):**
     - ในแต่ละรายการสกิล เพิ่มคอมโพเนนต์ `.picker-skill-avatar` ขนาด 44x44px
     - แสดงสัญลักษณ์อิโมจิประจำสกิล/ธาตุ (`getSkillEmoji(sk)`) เช่น 🔥 เพลิง, 🌪️ วายุ, 🪨 พสุธา, 🥋 สายหมัด, 💚 รักษา
     - แสดงป้ายระดับขั้นสกิล `.p-sk-tier-badge` (`S`, `M`, `L`, `Signature`)
     - กรอบของไอคอนเปลี่ยนสีตามธาตุของสกิล พร้อมพื้นหลังแบบ Radial Gradient โทน Dark RPG
  2. **ปรับปรุงส่วนแสดงรายละเอียดสกิล (`.p-sk-info`):**
     - แสดงชื่อสกิลตัวหนาชัดเจน
     - เพิ่มป้ายแท็กธาตุสีสันตามธาตุ (`.p-sk-elem-tag`), แท็กสายวิชา (`.p-sk-branch-tag`) และระดับเลเวลสกิล (`.p-sk-level-tag`)
     - คำอธิบายผลลัพธ์ของสกิลชัดเจน ไม่บีบอัด
  3. **เปลี่ยนปุ่ม "เลือกใส่ช่องนี้" ตัวหนังสือโตๆ เป็นปุ่มไอคอนติดตั้งระดับมืออาชีพ (`.btn-equip-action`):**
     - ออกแบบเป็นปุ่ม Action ขนาดกะทัดรัด สไตล์ปุ่มเกม RPG พร้อมไอคอน `📥` (Equip/Insert) และข้อความสั้น `ติดตั้ง`
     - ไม่มีการตัดบรรทัดหรือข้อความตกหล่น (ป้องกันการเกิดข้อความ `เลือกใส่ช่อง \n นี้` แบบเดิม)
     - มีสถานะชัดเจน 3 รูปแบบ:
       - **ยังไม่ติดตั้ง:** ปุ่มสีส้มทองเรืองแสง `[ 📥 ติดตั้ง ]` สำหรับกดสวมใส่ลงในช่องเป้าหมาย
       - **ติดตั้งในช่องนี้อยู่แล้ว:** แถบสถานะสีเขียว `[ ✓ ติดตั้งอยู่ ]`
       - **ติดตั้งในช่องอื่นแล้ว:** แถบสถานะสีเทาล็อก `[ 🔒 ใส่ช่องอื่น ]` (ป้องกันการใส่สกิลซ้ำ)
  4. **รองรับ Responsive เต็มรูปแบบ (`src/style.css`):**
     - ปรับขนาดไอคอนและปุ่มบนหน้าจอมือถือ (Smartphone <= 480px) ให้กระชับ ไม่ล้นกรอบ และกดง่ายด้วยนิ้วสัมผัส
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run test:skills`: ผ่าน 100% ครบ 16 แถว
  - `npm run build`: Production Build สำเร็จ 100%


## [Backup #028] — วันที่ 2026-11-02 เวลา 23:20:00
- **คำสั่งจาก Game Director:**
  > *"ตรงส่วนนี้ขอแสดงไอค่อนสกิลเพื่อให้ทราบว่าเป็นสกิลอะไรสายอะไร"*
- **การดำเนินการที่พัฒนา:**
  1. **เพิ่มไอคอนสกิลและป้ายบ่งบอกสายวิชาในแถบช่องสกิล 4 ช่อง (Equip Loadout Slots) (`src/ui/skill_board_view.ts`):**
     - ในแต่ละช่องสกิล `.skill-slot-chip` เพิ่มคอมโพเนนต์ **Slot Skill Avatar (`.slot-sk-avatar`)**:
       - แสดงสัญลักษณ์อิโมจิประจำสกิล (`getSkillEmoji`) เช่น 🔥, 🥋, 🔋, 🪨
       - มีป้ายกำกับ Tier Badge (`S`, `M`, `L`, `Signature`)
       - ล้อมขอบด้วยสีประจำธาตุ/สายวิชา
     - เพิ่มฟังก์ชัน `getSkillBranchInfo(sk)` สำหรับแยกแยะสายวิชาอย่างแม่นยำ:
       - **สายวิชาไร้ธาตุ (Neutral Arts):** แสดงไอคอนและชื่อสายเฉพาะเจาะจง เช่น `🥋 กระบวนท่า`, `💚 พยาบาล`, `🎭 เล่ห์กล`, `🔋 เร่งประจุ`, `📜 วิชาลับ` (แทนข้อความ `(neutral)` แบบเดิมที่ผู้เล่นไม่ทราบว่าเป็นสายใด)
       - **สายวิชาประจำธาตุ (Elemental):** แสดงไอคอนและชื่อธาตุ เช่น `🔥 ธาตุไฟ`, `🌪️ ธาตุลม`, `🪨 ธาตุดิน` พร้อมโค้ดสีธาตุ
     - เพิ่มไอคอนคำแนะนำการเปลี่ยนสกิล `🔄` (`.slot-action-hint`) ทางขวา เมื่อนำเมาส์ไปชี้จะหมุนและเรืองแสง เชิญชวนให้คลิกปรับเปลี่ยนสกิล
  2. **ปรับปรุงการจัดรูปแบบและสไตล์ CSS (`src/style.css`):**
     - ออกแบบการ์ดช่องสกิล `.skill-slot-chip` ให้ดูมีมิติ สไตล์ Inventory Slots ของเกม RPG ชั้นนำ
     - รองรับทั้งสถานะมีสกิลติดตั้ง (`.has-skill`) และช่องว่าง (`.is-empty`) ที่มีเส้นประชัดเจน
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run test:skills`: ผ่าน 100% ครบ 16 แถว
  - `npm run build`: Production Build สำเร็จ 100%


## [Backup #029] — วันที่ 2026-11-02 เวลา 23:25:00
- **คำสั่งจาก Game Director:**
  > *"ต่อไป ผมอยากให้ปรับตรงส่วน scrollbar ให้ดูกลมกลืนกับ ui/ix ครับ อาจจะทำให้ดูเป็นเส้นเล็กๆ ดูสบายตาและกลมกลืนครับ และปรับทุกส่วนที่มี scrollbar ด้วยครับ"*
- **การดำเนินการที่พัฒนา:**
  1. **ออกแบบระบบ Custom Scrollbar สไตล์โมเดิร์นแฟนตาซี RPG ครอบคลุมทั่วทั้งเกม (`src/style.css`):**
     - กำหนดให้ใช้ร่วมกันทุกเบราว์เซอร์ ทั้งมาตรฐาน CSS (`scrollbar-width: thin; scrollbar-color: ...`) และ WebKit Engine (`::-webkit-scrollbar`)
     - **ความกว้างกะทัดรัด (Ultra-Slim 6px):** ปรับความกว้างจากเดิม ~17px หนาเทอะทะ เหลือเพียง **6px** (ทั้งแนวตั้งและแนวนอน) ทำให้ดูสบายตาและไม่เกะกะ UI
     - **ซ่อนปุ่มลูกศรหัว-ท้าย (Remove Chunky Buttons):** ซ่อน `::-webkit-scrollbar-button` ออก 100% เพื่อความคลีน เรียบหรู
     - **แถบรางเลื่อนโปร่งแสง (Transparent Dark Track):** ใช้สีดำกึ่งโปร่งแสง `rgba(20, 16, 13, 0.45)` กลมกลืนกับพื้นหลังของ Container ต่างๆ
     - **ตัวเลื่อนสีทองมนกลม (Smooth Gold Glow Thumb):**
       - ทำขอบมนกลมเต็มรูปแบบ `border-radius: 999px`
       - ปกติ: สีทองหม่นกึ่งโปร่งแสง `rgba(245, 176, 65, 0.32)`
       - เมื่อชี้เมาส์ (Hover): สว่างขึ้นเป็นสีทองสดใส `rgba(245, 176, 65, 0.65)` พร้อมประกายเงาเรืองแสง `box-shadow`
       - ขณะลากเลื่อน (Active): สีทองเข้ม `rgba(245, 176, 65, 0.9)`
  2. **ปรับปรุง Padding ขอบขวาของส่วนที่มี Scrollbar ให้มีระยะหายใจที่ลงตัว:**
     - ปรับระยะ `padding-right` ของ `.hero-selector-chips-list` และ `.picker-skills-list` ให้เว้นห่างจากขอบการ์ดอย่างสวยงาม ไม่ทับเส้นขอบตัวการ์ด
  3. **ครอบคลุมทุกส่วนของเกมที่มี Scrollbar:**
     - รายการเลือกฮีโร่ในหน้ากระดานสกิล (`.hero-selector-chips-list`)
     - หน้าต่างเลือกสกิล (`.picker-skills-list`)
     - บันทึกการต่อสู้ (`.battle-log-scrollable` / `.combat-log-area`)
     - หน้าต่างบรีฟฟิ่งด่านผจญภัย (`.modal-body-scrollable`)
     - หน้าต่างรายละเอียดสกิล และหน้าจออื่นๆ ทั้งหมดในเกม
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/style.css`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run test:skills`: ผ่าน 100% ครบ 16 แถว
  - `npm run build`: Production Build สำเร็จ 100%


## [Backup #030] — วันที่ 2026-11-02 เวลา 23:33:00
- **คำสั่งจาก Game Director:**
  > *"ขอปรับตรงส่วนของการเพิ่มสกิลให้กับสัตว์ใหม่ที่ยังไม่มีสกิลในช่องสกิลครับ ไม่สามารถสวมใส่สกิลได้เมื่อทำการคลิกปุ่มติดตั้ง แสดงข้อความ 'ผิดกฎการติดตั้ง: ต้องติดตั้งสกิลให้ครบ 4 ช่อง (ปัจจุบันมี 1 ช่อง)'"*
- **สาเหตุของปัญหา (Root Cause):**
  - ในฟังก์ชัน `equipSkillsToHero`: เดิมมีการเรียกใช้ `validateLoadout(skillIds)` ซึ่งกำหนดเงื่อนไขว่าชุดสกิลต้องมีครบ 4 ช่องเท่านั้น (`skillIds.length === 4`)
  - เมื่อสัตว์เลี้ยงใหม่ฟักออกมาจากไข่จะมีช่องสกิลว่างทั้ง 4 ช่อง (`customSkills: []`) เมื่อผู้เล่นคลิกติดตั้งสกิลลงในช่องที่ 1 ทำให้ชุดสกิลมี 1 ท่า ซึ่งติดเงื่อนไขปฏิเสธทันที และส่งผลให้ไม่สามารถเริ่มใส่สกิลแรกได้
- **การดำเนินการแก้ไขและพัฒนา:**
  1. **เพิ่มระบบตรวจสอบและติดตั้งสกิลทีละช่อง (Slot-by-Slot Equip Engine) (`src/engine/skill_board_manager.ts`):**
     - สร้างเมธอด `validateSlotEquip(heroId, slotIdx, skillId)` เพื่อตรวจสอบการติดตั้งเฉพาะช่อง:
       - ตรวจสอบว่าสกิลปลดล็อกแล้วในกระดาน
       - ป้องกันการใส่สกิลซ้ำกับช่องอื่น (`ห้ามสวมใส่สกิลซ้ำ`)
       - ตรวจสอบโควตาสายวิชาละไม่เกิน 2 ท่า (`MAX_SKILLS_PER_BRANCH = 2`)
       - **อนุญาตให้ช่องอื่นยังว่างได้** เพื่อให้ผู้เล่นทยอยติดตั้งสกิลได้ตั้งแต่ช่องที่ 1 จนถึงช่องที่ 4 อย่างราบรื่น
     - สร้างเมธอด `equipSkillToSlot(heroId, slotIdx, skillId)` บันทึกสกิลลงในช่องเป้าหมายของฮีโร่ทันที
     - อัปเดต `equipSkillsToHero(heroId, skillIds, allowPartial)` ให้รองรับทั้งแบบชุดเต็ม 4 ท่า และแบบ Partial Loadout
     - อัปเดต `validateLoadout` ให้กรองเฉพาะสกิลที่ติดตั้งจริง (`activeSkills = skillIds.filter(Boolean)`) เพื่อป้องกันการแจ้งเตือนสกิลว่างเป็นสกิลที่ไม่มีในระบบ
  2. **เชื่อมต่อการติดตั้งในหน้า UI (`src/ui/skill_board_view.ts`):**
     - ปรับ `openSkillPickerModal` และ `openSkillDetailModal` ให้เรียกใช้ `equipSkillToSlot(heroId, targetSlot, skillId)` แทนการยัด Array ไม่ครบ 4 ช่อง
     - เพิ่มปุ่ม **`[ 🗑️ ถอดสกิล ]`** บนหัว Modal เลือกสกิล เพื่อให้ผู้เล่นสามารถกดถอดสกิลออกจากช่องนั้นกลับเป็นช่องว่างได้ตลอดเวลา
  3. **ปรับปรุงการแสดงผลในหน้าคลังสัตว์เลี้ยง (`src/ui/heroes_view.ts`):**
     - กรองการแสดงผลเฉพาะช่องที่มีสกิล พร้อมระบุจำนวนช่องว่างที่เหลือ เช่น `(ว่าง 3 ช่อง)`
  4. **เพิ่มชุดทดสอบยืนยันระบบ (`src/sim/test_skill_board.ts`):**
     - จำลองสัตว์เลี้ยงใหม่ที่มี `customSkills: []` แล้วสั่ง `equipSkillToSlot` ลงช่องที่ 1 และ 2 ยืนยันว่าสำเร็จ 100%
     - ยืนยันการป้องกันสกิลซ้ำข้ามช่อง และการสั่งถอดสกิลออกจากช่อง
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/skill_board_manager.ts`
  - `src/ui/skill_board_view.ts`
  - `src/ui/heroes_view.ts`
  - `src/sim/test_skill_board.ts`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100% ครบ 10 ด่าน
  - `npm run test:skills`: ผ่าน 100% ครบ 16 แถว (รวมการทดสอบใส่ทีละช่อง)
  - `npm run build`: Production Build สำเร็จ 100%










## [Backup #031] — วันที่ 2026-11-02 เวลา 23:55:00
- **คำสั่งจาก Game Director:** *"ต่อไป ให้คุณสร้างหน้าข้อมูลตารางธาตุ เพื่อให้ผู้เล่นได้ศึกษาการแพ้ชนะธาตุของเกมส์นี้ครับ"*
- **เป้าหมายงาน:** สร้างหน้าคู่มือและตารางแพ้ชนะธาตุ (Elemental Advantage Guide & 11x11 Matrix) ให้ผู้เล่นสามารถศึกษาความสัมพันธ์ ตัวคูณดาเมจ และกลยุทธ์การแก้ทางธาตุทั้ง 11 ธาตุหลัก และ 5 แขนงวิชาไร้ธาตุ
- **การดำเนินการและพัฒนา:**
  1. **สร้าง UI หน้าตารางธาตุครบวงจร (`src/ui/elements_view.ts`):**
     - **แถบสรุปกฎธาตุ (Overview Rules Banner):** สรุปหัวใจระบบธาตุของเกม ชนะธาตุ (Advantage ×1.30 / +30%), แพ้ธาตุ (Disadvantage ×0.85 / -15%), ธาตุตรงกัน (Same Element Affinity +20% DMG & +20% Proc Chance) และวิชาไร้ธาตุ (Neutral Arts ×1.00 เสมอไม่สนธาตุ)
     - **เครื่องคำนวณและจำลอง 1v1 Matchup Simulator:** เลือกธาตุฮีโร่เรา vs ธาตุศัตรู เพื่อแสดงผลการคำนวณตัวคูณดาเมจขาเข้า/ขาออก พร้อมคำแนะนำเชิงยุทธวิธี (Tactical Tip) และคำแนะนำตัวสลับสำรอง (Tag Relay Advice)
     - **ตารางเมทริกซ์ 11x11 ธาตุ (Full 11x11 Interactive Elemental Matrix):** แสดงการปะทะกันของทั้ง 11 ธาตุ (earth, water, wind, fire, lightning, ice, plant, poison, dark, light, psychic) แยกสีชัดเจน (🟢 เขียว = ชนะ ×1.3, 🔴 แดง = แพ้ ×0.85, ⚪ เทา = ปกติ ×1.0) พร้อมระบบ Hover/Click เพื่อวิเคราะห์หรือส่งเข้าโปรแกรมจำลอง
     - **ระบบเจาะลึก 11 ธาตุรายตัว (Element Deep Dive Inspector):** แสดงข้อมูลเชิงลึกของแต่ละธาตุ: ธาตุที่ได้เปรียบ (Strong Against), ธาตุที่เสียเปรียบ (Weak Against), ธาตุปกติ (Neutral), กลยุทธ์การเล่น (Strategy Tip) และรายชื่อฮีโร่ตัวแทน 6 ตัวของธาตุนั้น
     - **คู่มือ 5 แขนงวิชาไร้ธาตุ (Neutral Arts Guide):** แสดงรายละเอียดของสาย `martial` (กายภาพ/จุดตาย), `medical` (เวชศาสตร์/ฮีล), `trick` (เล่ห์เหลี่ยม/ความเร็ว/ลบดีบัฟ), `catalyst` (เวทมนตร์/เร่งจังหวะ) และ `secret` (วิชาลับ/คุมสนาม)
  2. **เชื่อมต่อระบบเนวิเกชัน (`src/ui/header.ts` & `src/main.ts`):**
     - เพิ่มแท็บ `'elements'` ใน NavTab พร้อมปุ่ม `[ ☯️ ตารางธาตุ ]` และ Badge `11 ธาตุ` บน Header
     - จัดการสลับแท็บและเก็บสถานะ `selectedElementId` ใน `AppState`
  3. **เชื่อมโยงทางลัดในหน้าด่านผจญภัย (`src/ui/campaign_view.ts`):**
     - เพิ่มปุ่ม `[ ☯️ ตารางธาตุ ]` ในหน้าต่างเตรียมพร้อมก่อนเข้าด่าน (Stage Briefing Modal) เพื่อให้ผู้เล่นสามารถกดเข้ามาเช็กการแก้ทางธาตุของศัตรูประจำด่านได้ทันทีเพียงคลิกเดียว
  4. **ตกแต่งสไตล์และรองรับมือถือ/แท็บเล็ต (`src/style.css`):**
     - ออกแบบ Responsive Layout รองรับทั้งหน้าจอเดสก์ท็อป แท็บเล็ต และสมาร์ทโฟน
     - ตารางเมทริกซ์มี Scrollbar แนวนอนแบบบางพิเศษ (`.custom-scrollbar`) เลื่อนดูได้ลื่นไหล ไม่บดบังสายตา
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/elements_view.ts` (สร้างใหม่)
  - `src/ui/header.ts`
  - `src/main.ts`
  - `src/ui/campaign_view.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npx tsc --noEmit`: ผ่าน 0 error
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100%
  - `npm run test:skills`: ผ่าน 100%
  - `npm run build`: Production Build สำเร็จ 100% (21 modules)

## [Backup #032] — วันที่ 2026-11-03 เวลา 00:25:00
- **คำสั่งจาก Game Director:** *"ต่อไปครับ ตรงส่วนหน้าแสดงคลังสัตว์เลี้ยง ให้มีการจัดเรียงตามธาตุ ตามเลเวล ตามแร็งค์ และอื่นๆ ที่ควรมีในระบบเกมส์ด้วยครับ"*
- **เป้าหมายงาน:** พัฒนาระบบคัดกรอง (Filtering), การจัดเรียง (Sorting), การคำนวณพลังรบ (Battle Power - BP) และระบบค้นหาแบบ Real-time บนหน้าคลังสัตว์เลี้ยง (Heroes View) ให้ครบถ้วนตามมาตรฐานเกม RPG สะสมฮีโร่ระดับสากล
- **การดำเนินการและพัฒนา:**
  1. **ระบบจัดเรียงขั้นสูง (Multi-criteria Sorting Engine) (`src/ui/heroes_view.ts`):**
     - รองรับการจัดเรียงตาม:
       - **เลเวล (Level):** มากไปน้อย / น้อยไปมาก
       - **แร็งค์ / ความหายาก (Rank / Rarity):** SS > S > A > B
       - **ระดับดาว (Stars ★):** ★5 > ★1
       - **พลังรบรวม (Battle Power - BP):** คำนวณจากสเตตัสรอบด้าน (HP, ATK, DEF, SPD, CRI, BLOCK)
       - **ธาตุ (Element Order):** เรียงตามลำดับธาตุมาตรฐานสากล
       - **พลังโจมตี (ATK), พลังชีวิต (HP), ความเร็ว (SPD):** เจาะจงสเตตัสแต่ละด้าน
       - **ชื่อสัตว์เลี้ยง (Name):** เรียงตามลำดับพยัญชนะ ก-ฮ / A-Z
     - ปุ่มสลับทิศทาง **`⬇️ มากไปน้อย` / `⬆️ น้อยไปมาก`** สลับได้ทันทีใน 1 คลิก
     - สวิตช์ **`📌 นำทีมขึ้นก่อน (Pin Active Team)`** ตรึงตัวหลักและตัวสำรองไว้บนสุดเสมอ
  2. **ระบบตัวกรองแบบครบวงจร (Comprehensive Filter Toolbar):**
     - **แถบชิปธาตุ (Element Chips Bar):** ชิปสีประจำธาตุทั้ง 11 ธาตุ + ปุ่ม "ทั้งหมด" พร้อมแสดงตัวเลขจำนวนสัตว์เลี้ยงที่มีในคลังจริง เช่น `🔥 ไฟ (1)`
     - **ตัวกรองแร็งค์ (Rank Filter):** ทั้งหมด, SS, S, A, B
     - **ตัวกรองสายบทบาท (Role Filter):** Striker, Assassin, Tank, Supporter, Controller
     - **ตัวกรองสถานะด่วน (Quick Status Filter):** อยู่ในทีม, พร้อมอัปเลเวล (🍖 Food & Gold พอ), พร้อมอัปดาว (⭐ Shards พอ), สกิลยังไม่ครบ 4 ช่อง (🧩)
  3. **ระบบค้นหา Real-time Search Input:**
     - ช่องค้นหา `🔍 ค้นหาชื่อสัตว์เลี้ยง, ธาตุ, สายวิชา...` ค้นหาได้ทั้งภาษาไทยและอังกฤษ พร้อมปุ่ม `✕` เคลียร์ข้อความ
     - การพิมพ์ค้นหาจะอัปเดตเฉพาะ Card Grid โดยไม่สูญเสีย Focus การพิมพ์
  4. **ปรับปรุงการ์ดสัตว์เลี้ยงในคลัง (Roster Card Polish):**
     - แสดงป้าย **`⚡ BP x,xxx` (Battle Power)** สีทองสะท้อนความแกร่ง
     - แสดงแท็กตำแหน่งในทีมเด่นชัด: `⚔️ ตัวหลักประจำทีม 1v1` และ `🛡️ ตัวสำรองประจำทีม 1v1`
     - มีหน้าต่างแจ้งเตือนเมื่อไม่พบฮีโร่ตามเงื่อนไข (Empty State) พร้อมปุ่ม `[ 🔄 ล้างตัวกรองทั้งหมด ]`
  5. **การจดจำสถานะตัวกรอง (State Persistence & Smooth UX):**
     - เมื่อผู้เล่นอัปเลเวล อัปดาว หรือสลับตัวหลัก/สำรอง ระบบจะรักษาการจัดเรียงและตัวกรองเดิมไว้ ไม่เด้งกลับสู่ค่าเริ่มต้น
  6. **การทดสอบระบบ (Automated Test Suite):**
     - สร้าง `src/sim/test_roster_sorting.ts` ทดสอบการคำนวณ BP, การจัดเรียงเลเวล/แร็งค์/ธาตุ, การกรองธาตุ/ทีม และการค้นหาแบบ Real-time
     - เพิ่มสคริปต์ `npm run test:roster` ใน `package.json` ผ่าน 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/heroes_view.ts` (ปรับปรุงระบบคัดกรอง จัดเรียง และ BP)
  - `src/style.css` (เพิ่มสไตล์ Toolbar, Chips, Dropdowns, BP Badge และ Responsive)
  - `src/sim/test_roster_sorting.ts` (สร้างใหม่)
  - `package.json` (เพิ่มคำสั่ง `test:roster`)
  - `doc/19_history_and_backup.md`
  - `doc/18_dev_phases.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:roster`: ผ่าน 100%
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100%
  - `npm run test:skills`: ผ่าน 100%
  - `npx tsc --noEmit`: 0 error
  - `npm run build`: Production Build สำเร็จ 100%

## [Backup #033] — วันที่ 2026-11-03 เวลา 00:35:00
- **คำสั่งจาก Game Director:** *"ตรงส่วนนี้ให้แสดงเป็นไอค่อนสกิลเล็กๆ และแสดงชื่อสกิลกำกับและให้เรียงเป็นแถวลงมาแทนครับ"*
- **เป้าหมายงาน:** ปรับเปลี่ยนการแสดงผลส่วน "สกิล 4 ช่องที่สวมใส่" บนการ์ดสัตว์เลี้ยงในคลัง จากเดิมที่เป็นป้ายข้อความ ID สกิลเรียงแนวนอน (`fire_s`, `secret_s`) ให้กลายเป็นรายการแถวแนวตั้ง (Vertical Rows) 4 ช่อง แสดงไอคอนสกิลขนาดเล็กพร้อมระดับ Tier, ชื่อสกิลภาษาไทยชัดเจน, สายวิชา/ธาตุ, ค่าร่าย SP และเลเวล
- **การดำเนินการและพัฒนา:**
  1. **ปรับปรุงส่วนแสดงผลสกิลในคลัง (`src/ui/heroes_view.ts`):**
     - สร้างฟังก์ชัน `renderHeroEquippedSkillsVerticalHtml(customSkills, heroId)`:
       - แสดงผลแถวสกิลทั้ง 4 ช่องเรียงเป็นแถวลงมาในแนวตั้งอย่างเป็นระเบียบ
       - **ช่องที่มีสกิล:** แสดงเลขลำดับช่อง (1-4), กล่องไอคอนสกิลขนาดเล็ก (Avatar 32x32px) พร้อมอิโมจิประจำสาย/ธาตุ และป้าย Tier (S/M/L) ที่มุมล่าง, ชื่อสกิลภาษาไทยตัวหนาสีขาว (เช่น `ลูกไฟ`, `เขี้ยวเพลิง`, `หมัดกระแทกจุดตาย`, `เร่งประจุวิญญาณ`), ป้ายกำกับสายวิชาพร้อมสีประจำธาตุ, และค่าร่าย `💧 SP 20 • Lv.1`
       - **ช่องที่ยังว่าง:** แสดงเลขช่อง, ไอคอน `➕`, และข้อความ `ช่องว่าง (ยังไม่ได้ติดตั้งสกิล)` ด้วยกรอบเส้นประนุ่มนวล
       - **ปุ่มทางลัด `[ ⚙️ ปรับแต่งสกิล ]`:** เพิ่มบนหัวแถบ เพื่อให้ผู้เล่นคลิกแล้วข้ามไปยังแท็บกระดานสกิลของสัตว์เลี้ยงตัวนั้นได้ทันที
  2. **เชื่อมโยงการกดเปลี่ยนสกิลแบบโต้ตอบ (UX & Navigation):**
     - ใน `src/main.ts` และ `src/ui/heroes_view.ts`: เมื่อผู้เล่นคลิกที่ปุ่ม `[ ⚙️ ปรับแต่งสกิล ]` หรือคลิกที่แถวสกิลใดๆ ระบบจะสลับไปยังแท็บกระดานสกิล พร้อมเลือกฮีโร่ตัวนั้นให้ทันทีโดยอัตโนมัติ
  3. **แชร์ฟังก์ชัน Visuals จาก Skill Board View (`src/ui/skill_board_view.ts`):**
     - ส่งออกฟังก์ชัน `getSkillEmoji` และ `getSkillBranchInfo` ให้ใช้งานร่วมกันเพื่อความเป็นเอกภาพของไอคอนและสีสันประจำธาตุ
  4. **ปรับแต่งสไตล์ CSS (`src/style.css`):**
     - ออกแบบคลาส `.roster-skills-preview`, `.r-skills-vertical-list`, `.r-skill-row-item`, `.r-sk-icon-avatar`, `.r-sk-name`, `.btn-goto-skill-board` ให้มีขนาดพอเหมาะและสวยงาม สบายตา
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/heroes_view.ts`
  - `src/ui/skill_board_view.ts`
  - `src/main.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:roster`: ผ่าน 100%
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100%
  - `npm run test:skills`: ผ่าน 100%
  - `npx tsc --noEmit`: 0 error
  - `npm run build`: Production Build สำเร็จ 100%

## [Backup #034] — วันที่ 2026-11-03 เวลา 00:43:00
- **คำสั่งจาก Game Director:** *"ขอปรับตรงส่วนของภาพที่ 1 ถ้าคลิกสกิลที่ช่อง ก็ให้แสดงหน้าต่างเลือกสกิลได้เลยในภาพที่ 2 ครับ ตัดปัญหาไม่ต้องไปสลับหน้าจอไปมาครับ"*
- **เป้าหมายงาน:** เชื่อมต่อหน้าต่าง Modal เลือกสกิล (Skill Picker Modal จากกระดานสกิล) ให้เปิดขึ้นมาได้ทันทีเมื่อคลิกที่แถวช่องสกิล (1-4) หรือคลิกปุ่ม `[ ⚙️ ปรับแต่งสกิล ]` บนการ์ดสัตว์เลี้ยงในหน้าคลังสัตว์เลี้ยง (Heroes View) โดยไม่ต้องสลับแท็บไปมา
- **การดำเนินการและพัฒนา:**
  1. **ส่งออกเมธอดเปิด Modal จาก Skill Board View (`src/ui/skill_board_view.ts`):**
     - เปลี่ยน `function openSkillPickerModal` ให้เป็น `export function openSkillPickerModal(...)`
  2. **ติดตั้ง Modal Container และการคลิกโดยตรงบนการ์ดฮีโร่ (`src/ui/heroes_view.ts`):**
     - เพิ่มแท็ก `<div id="skill-picker-modal-root"></div>` ลงใน DOM ของหน้าคลังสัตว์เลี้ยง
     - ปรับฟังก์ชัน `bindCardEvents`:
       - เมื่อผู้เล่นคลิกที่แถวสกิลช่องใดๆ (`.r-skill-row-item` ช่อง 1, 2, 3 หรือ 4) ระบบจะดึงค่า `heroId` และ `slotIdx` มาเรียกใช้ `openSkillPickerModal` เพื่อเปิด Modal เลือกสกิลประจำช่องนั้นขึ้นมาตรงกลางหน้าจอทันที
       - เมื่อผู้เล่นคลิกปุ่ม `[ ⚙️ ปรับแต่งสกิล ]` ระบบจะค้นหาช่องแรกที่ยังว่าง (หรือช่องที่ 1 หากเต็มแล้ว) แล้วเปิด Modal เลือกสกิลให้ทันทีเช่นกัน
       - เมื่อติดตั้งสกิลใหม่ หรือกดถอดสกิลออกจากช่อง ระบบจะบันทึกเซฟ แสดง Toast แจ้งเตือน และรีเฟรชการ์ดสัตว์เลี้ยงบนหน้าจอให้ทันที
  3. **เพิ่มสไตล์ Visual Feedback บนช่องสกิล (`src/style.css`):**
     - เพิ่มคลาส `.r-sk-edit-hint` แสดงไอคอนดินสอ `✏️` หรือบวก `➕` นุ่มนวลเมื่อนำเมาส์ไปชี้เหนือช่องสกิล
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`
  - `src/ui/heroes_view.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:roster`: ผ่าน 100%
  - `npm run test:save`: ผ่าน 100%
  - `npm run test:campaign`: ผ่าน 100%
  - `npm run test:skills`: ผ่าน 100%
  - `npx tsc --noEmit`: 0 error
  - `npm run build`: Production Build สำเร็จ 100%

## [Backup #035] — วันที่ 2026-11-03 เวลา 11:06:00
- **คำสั่งจาก Game Director:** *"ต่อไป นี่คือแผนในการปรับปรุงในหน้าสัตว์เลี้ยงครับ Task: Refactor Pet Collection & Pet Detail UI/UX to MMORPG Style ... ขอเสริมเปลี่ยนให้ปรับเป็นมิติแบบ cozy pixel art fantasy ครับ"*
- **เป้าหมายงาน:** ปรับปรุงหน้าจอระบบคลังสัตว์เลี้ยง (Pet Collection) และหน้ารายละเอียดสัตว์เลี้ยง (Pet Detail) สู่รูปแบบ MMORPG เต็มรูปแบบ พร้อมเสริมมิติ Cozy Pixel Art Fantasy:
  1. แยกหน้าจอเป็น Pet Collection (คลังสัตว์) และ Pet Detail (รายละเอียดสัตว์แบบ Dual-Panel)
  2. จัดทำแท็บข้อมูล 5 แท็บ: Overview, Status, Skills, Growth, Equipment
  3. ระบบ Growth Confirmation Modal ป้องกันการกดพลาดและแสดง Stat Increase Preview
  4. ระบบ Carousel Navigation (ปุ่ม ◀ / ▶ และคีย์บอร์ด ArrowLeft/Right/Escape) คงแท็บเดิมไว้
  5. ตกแต่ง Cozy Pixel Art Fantasy (3D Bevel, Idle Bobbing, Glowing Badges, Tactile Press)
- **การดำเนินการแบ่งตาม Phase:**
  - **Phase 1: State Architecture Setup (`src/ui/heroes_view_state.ts`, `src/ui/heroes_view.ts`):**
    - สร้าง `PetViewState` จัดการ `viewMode: 'collection' | 'detail'`, `selectedHeroId`, `activeTab`, และ `savedScrollTop`
    - เพิ่มชุดทดสอบ `src/sim/test_heroes_view_state.ts`
  - **Phase 2: Pet Collection Grid View (`src/ui/heroes_view.ts`):**
    - ปรับการ์ดไอคอนสัตว์เลี้ยง (`.pet-icon-card`) ให้แสดงเฉพาะข้อมูลระบุตัวตน (Avatar, Rank, Element, Level, Stars, Active Team Tag, Notification Badge)
    - ตัดตารางสเตตัส 6 ช่อง, คำอธิบาย Ability เต็ม, และปุ่มอัปเกรดออกจากหน้าคลัง
    - เชื่อมโยงคลิกเปิดหน้ารายละเอียด และมี Selected State ชัดเจน
  - **Phase 3: Pet Detail Dual Panel & 5 Tabs (`src/ui/heroes_view.ts`):**
    - Left Panel: อวาตาร์สัตว์เลี้ยงขนาดใหญ่, ข้อมูลประจำตัว, พลังรบ BP รวม, และปุ่มจัดทีม/กลับคลัง
    - Right Panel: แท็บบันทึก 5 แท็บ (Overview, Status, Skills, Growth, Equipment)
  - **Phase 4: Growth Confirmation & Navigation (`src/ui/heroes_view.ts`):**
    - เพิ่ม `openGrowthConfirmModal` ป้องกันการกดพลาด แสดงผลลัพธ์สเตตัสที่เพิ่มขึ้นและทรัพยากรคงเหลือ
    - เพิ่มปุ่ม ◀ / ▶ สำหรับสลับสัตว์เลี้ยงตัวก่อนหน้า/ถัดไป พร้อมรองรับคีย์ลัดคีย์บอร์ด
    - คงค่าแท็บเดิมไว้ (Tab Preservation)
  - **Phase 5: MMORPG UI Styling & Responsive (Cozy Pixel Art Fantasy) (`src/style.css`):**
    - มิติสีไม้และแผ่นหนังแฟนตาซี (`#281d15` สู่ `#140e0b`) ขอบนูน 3D Pixel Bevel
    - แอนิเมชันลอยตัวหายใจ `cozy-pet-bob` และประกายดาว `cozy-badge-bounce`
    - ปุ่มกด Tactile 3D Press effect (`translateY(2px)`)
    - รองรับ Responsive หน้าจอแท็บเล็ต (`< 900px`) และมือถือ (`< 600px`)
  - **Phase 6: Final Verification & Error Checking (`Animalia/doc/*`):**
    - รันการทดสอบครบทุกชุด ผ่าน 100% ไม่มีข้อผิดพลาด
    - บันทึกลงเอกสาร `18_dev_phases.md`, `12_art_audio_ux.md`, และ `19_history_and_backup.md`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/heroes_view_state.ts` (สร้างใหม่)
  - `src/sim/test_heroes_view_state.ts` (สร้างใหม่)
  - `src/ui/heroes_view.ts` (แก้ไขโครงสร้าง UI/UX และระบบ State & Modal)
  - `src/style.css` (เพิ่มและปรับแต่งสไตล์ MMORPG & Cozy Pixel Art Fantasy)
  - `package.json` (เพิ่มสคริปต์ `test:pet-state`)
  - `doc/18_dev_phases.md` (บันทึกสถานะงาน)
  - `doc/12_art_audio_ux.md` (บันทึกข้อกำหนด UI/UX Cozy Pixel Art Fantasy)
  - `doc/19_history_and_backup.md` (บันทึกประวัติ Backup #035)
- **ผลการทดสอบการทำงาน:**
  - `npm run typecheck`: ผ่าน 0 Error
  - `npm run test:pet-state`: ผ่าน 8/8 การทดสอบ (100%)
  - `npm run test:roster`: ผ่าน 6/6 การทดสอบ (100%)
  - `npm run test:save`: ผ่าน 6/6 การทดสอบ (100%)
  - `npm run test:campaign`: ผ่าน 10/10 ด่าน (100%)
  - `npm run test:skills`: ผ่าน 7/7 หมวด (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.32s)

## [Backup #036] — วันที่ 2026-11-03 เวลา 11:29:00
- **คำสั่งจาก Game Director:** *"จากภาพที่ส่งไป ช่วยปรับปรุงตรงส่วนที่แสดงเป็น object object ครับ ให้แสดงเป็นรายละเอียดของสกิลให้ถูกต้องครับ"*
- **เป้าหมายงาน:** แก้ไขข้อผิดพลาดการแสดงผล `[object Object]` ใต้ชื่อท่าไม้ตายปลดปล่อยพลัง (Signature Ultimate) ในหน้ารายละเอียดสัตว์เลี้ยง (Pet Detail) ให้แสดงคำอธิบายรายละเอียดสกิลและเอฟเฟกต์การต่อสู้ภาษาไทยที่ถูกต้องและสมบูรณ์
- **สาเหตุของปัญหา:**
  - ตัวแปร `heroMeta.signatureEffect` ใน `src/data/heroes.json` ถูกเก็บอยู่ในรูปของ Object (เช่น `{ type: 'burn', duration: 2 }`)
  - โค้ดเดิมในแท็บ Overview ทำการแทรกตัวแปรลงใน Template String โดยตรง (`${heroMeta.signatureEffect || ...}`) ส่งผลให้ JavaScript แปลง Object เป็นสตริงข้อความกลายเป็น `"[object Object]"`
- **การดำเนินการและพัฒนา:**
  1. **สร้างไฟล์แมปปิ้งคำอธิบายท่าไม้ตาย (`src/data/signature_descriptions.json`):**
     - สกัดข้อมูลคำอธิบายท่าไม้ตายอย่างเป็นทางการจากเอกสาร Game Design (`doc/06_heroes_and_rarity.md`) ครบทั้ง 170 ตัวละครสัตว์เลี้ยง
  2. **สร้างฟังก์ชัน `formatHeroSignatureDescription` ใน `src/ui/heroes_view.ts`:**
     - ดึงข้อมูลคำอธิบายที่ถูกต้องแม่นยำ พร้อมระบุตัวคูณความเสียหาย (เช่น `โจมตีสร้างความเสียหาย 2 เท่า · โอกาส 25% ติดเผาไหม้ (2 เทิร์น)`)
     - รองรับ Fallback อัจฉริยะวิเคราะห์ฟิลด์ `type`, `duration`, `chance`, `value` จาก `signatureEffect` ทุกประเภท
  3. **เพิ่มการทดสอบป้องกันการเกิดซ้ำใน `src/sim/test_heroes_view_state.ts`:**
     - ตรวจสอบ `!currentHtml.includes('[object Object]')` ในการทดสอบสถาปัตยกรรมสถานะ
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/signature_descriptions.json` (สร้างใหม่ 170 ตัวละคร)
  - `src/ui/heroes_view.ts` (เพิ่มฟังก์ชัน `formatHeroSignatureDescription` และแก้ไขจุดเรนเดอร์)
  - `src/sim/test_heroes_view_state.ts` (เพิ่ม Assert ตรวจสอบไร้ข้อผิดพลาด `[object Object]`)
  - `doc/19_history_and_backup.md` (บันทึกประวัติ Backup #036)
- **ผลการทดสอบการทำงาน:**
  - `npm run typecheck`: ผ่าน 0 Error
  - `npm run test:pet-state`: ผ่าน 8/8 การทดสอบ (100%)
  - `npm run test:roster`: ผ่าน 6/6 การทดสอบ (100%)
  - `npm run test:save`: ผ่าน 6/6 การทดสอบ (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.22s)

## [Backup #037] — วันที่ 2026-11-03 เวลา 11:47:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการใน Phase 2: Skill Branch Navigation (Left Panel) ได้เลยครับ"* (งาน MMORPG Skillboard UI/UX Refactor — Skill Mastery System)
- **เป้าหมายงาน:** 
  1. สร้างระบบเลือกสายวิชา Skill Branch Navigation (Left Panel) รองรับ 16 สายวิชา (11 ธาตุ + 5 ไร้ธาตุ)
  2. จัดโครงสร้างหลักของหน้าจอกระดานสกิลให้เป็น 3-Panel Layout แบบ MMORPG Skill Mastery System (`.skill-board-main-layout.mastery-3panel`)
  3. รองรับการกรองหมวดหมู่ `ทั้งหมด (16)`, `ธาตุ (11)`, `ไร้ธาตุ (5)`
  4. แสดงผลข้อมูลแต่ละสายวิชา: ไอคอนธาตุ, ชื่อสายภาษาไทย, ความก้าวหน้า (`เรียนแล้ว X / 5`), หลอดแถบพลัง, สถานะปลดล็อก (หรือปุ่มปลดล็อกด่วน `btn-unlock-branch-quick` หากมีหินธาตุพอ)
  5. เชื่อมต่อ Center Panel แสดงแบนเนอร์สายวิชาที่เลือกพร้อมไกด์บาร์ Tier S/M/L
  6. รองรับการจดจำตำแหน่ง Scroll และสถานะสายวิชาล่าสุด
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`:
    - เพิ่ม `savedNavScrollTop` ใน `SkillBoardViewState`
    - สร้าง `getBranchVisuals(row: SkillRow)`
    - สร้าง `renderSkillBranchNavHtml(rows, activeBranchId, categoryFilter, save)`
    - สร้าง `renderSkillTreeCenterHtml(selectedRow, activeHeroSkills)`
    - อัปเดต `renderSkillBoardViewHtml()` ให้เรนเดอร์ 3-Panel Mastery Layout
    - อัปเดต `bindSkillBoardEvents()` รองรับการคลิกเลือกสายวิชา, สลับฟิลเตอร์, ปลดล็อกด่วน และกู้คืน Scroll position
  - `src/style.css`:
    - เพิ่มคลาส `.skill-board-main-layout.mastery-3panel` (280px 1fr 340px)
    - สไตล์ MMORPG Dark Fantasy สำหรับ Left Branch Navigation (`.skill-branch-nav-panel`, `.branch-filter-tabs`, `.skill-branch-nav-item`, `.branch-icon-box`)
    - สไตล์ Center Banner (`.tree-branch-header`, `.tree-branch-avatar`, `.tree-tier-guide-bar`)
    - รองรับ Responsive Media Queries สำหรับแท็บเล็ตและสมาร์ตโฟน
  - `src/sim/test_skill_tree_state.ts`:
    - เพิ่มการทดสอบหมวดที่ 8 (Branch Visuals), หมวดที่ 9 (Nav Render & Filter), และหมวดที่ 10 (Center Panel & 3-Panel Layout)
- **ผลการทดสอบการทำงาน:**
  - `npm run test:skill-state`: ผ่านครบ 10 หมวดการทดสอบ (100%)
  - `npm run test:skills`: ผ่านครบ 7/7 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.63s)

## [Backup #038] — วันที่ 2026-11-03 เวลา 11:52:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการ Phase 3: MMORPG Skill Tree View & Visual Connections (Center Panel) ได้เลยครับ"* (งาน MMORPG Skillboard UI/UX Refactor — Skill Mastery System)
- **เป้าหมายงาน:** 
  1. แปลงการจัดเรียงรายการสกิล 5 สกิลใน Center Panel จาก Accordion/Grid ธรรมดา ให้เป็น **MMORPG 3-Tier Skill Tree** ผังต้นไม้จริง
  2. จัดเรียงตามโครงสร้าง Prerequisite 1 -> 2 -> 2 (Tier 1: S -> Tier 2: M1 & M2 -> Tier 3: L & AOE) ครบทั้ง 16 สายวิชา (80 สกิล)
  3. สร้างเลเยอร์เส้นเชื่อมโยง SVG Dynamic Connectors 4 เส้น (`S->M1`, `S->M2`, `M1->L`, `M2->AOE`) เรืองแสงตามสีประจำธาตุเมื่อปลดล็อก และเป็นเส้นประเมื่อล็อก
  4. สร้าง Skill Node แบบ MMORPG Master Node แสดงป้าย Tier, Avatar ไอคอน, ชื่อภาษาไทย, ค่า SP, ป้ายบอกช่องติดตั้ง (Equipped Slot), และสถานะ (ล็อก / พร้อมเรียน / Lv.1-5 / MAX)
  5. เชื่อมต่อ Event การคลิก Node ในต้นไม้เพื่อเลือกสกิลและเปิดหน้ารายละเอียด/อัปเกรด/ติดตั้ง
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`:
    - สร้าง `organizeBranchSkills(skills: SkillBoardItem[])`
    - สร้าง `renderSkillTreeNodeHtml(sk, isRowUnlocked, currentHeroEquippedSkills, selectedSkillId, visuals)`
    - ปรับปรุง `renderSkillTreeCenterHtml()` ให้เรนเดอร์โครงสร้างต้นไม้ 3 คอลัมน์พร้อม SVG Connectors
    - อัปเดต `bindSkillBoardEvents()` ให้ผูกเหตุการณ์คลิก `.skill-tree-node`
  - `src/style.css`:
    - เพิ่มสไตล์ `.skill-tree-stage`, `.skill-tree-connections`, `.tree-connector-line`, `.skill-tree-grid`, `.tree-col`
    - เพิ่มสไตล์ `.skill-tree-node` พร้อมสถานะ `.is-selected`, `.is-locked`, `.is-unlocked`, `.can-unlock`, `.can-level-up`, `.is-equipped`, `.is-max-level`
    - แอนิเมชัน `linePulse`, `pulseAvailable`, `sparkleTwinkle`
    - รองรับ Responsive จอเล็กด้วยการเลื่อนแนวนอนอิสระ (Horizontal scroll min-width 440px)
  - `src/sim/test_skill_tree_state.ts`:
    - เพิ่มการทดสอบหมวดที่ 11 (โครงสร้าง 3 Tiers ทั้ง 16 สายวิชา) และหมวดที่ 12 (Render Skill Tree Stage, Nodes, SVG Connectors & Node States)
- **ผลการทดสอบการทำงาน:**
  - `npm run test:skill-state`: ผ่านครบ 12 หมวดการทดสอบ (100%)
  - `npm run test:skills`: ผ่านครบ 7/7 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.74s)

## [Backup #039] — วันที่ 2026-11-03 เวลา 11:57:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการได้เลยใน Phase 4: Skill Detail Panel & Dynamic Actions (Right Panel - Top)"* (งาน MMORPG Skillboard UI/UX Refactor — Skill Mastery System)
- **เป้าหมายงาน:** 
  1. สร้างแผงแสดงรายละเอียดสกิลที่เลือก (Skill Detail Panel) วางไว้ด้านบนของ Right Panel (`.loadout-preset-sidebar`)
  2. แสดงข้อมูลละเอียดครบถ้วน: ไอคอนสกิล, ชื่อไทย, ธาตุ/สายวิชา, Tier, Level/Max, ค่า SP, ตัวคูณดาเมจจริงรวมโบนัสเลเวล, อัตราโอกาสออกท่า %, คำอธิบายความสามารถและสถานะ
  3. แสดงเงื่อนไข Prerequisite สกิลขั้นต้นและสถานะผ่าน/ไม่ผ่าน
  4. สร้างระบบ Dynamic Action Button ตามสถานะสกิล:
     - ปลดล็อกสายวิชา (หากสายยังล็อก)
     - เรียน/ปลดล็อกสกิล (แสดงราคา Gold, Books, Crystals พร้อมปุ่มที่คำนวณความพร้อมใช้งานอัตโนมัติ)
     - อัปเลเวลสกิล (แสดงราคาอัปเกรดและตัวคูณดาเมจที่จะเพิ่มขึ้น)
     - ติดตั้งสกิล 4 ช่องแบบ 1-Click (ปุ่มช่อง 1-4)
     - ถอดสกิลออกจากช่องที่ติดตั้ง
     - ป้าย MAX Level เมื่อเลเวล 5
  5. ซิงค์การคลิก Node บนต้นไม้สกิล ให้แสดงรายละเอียดบน Right Panel ทันที
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`:
    - สร้าง `renderSkillDetailPanelHtml(selectedSkillId, activeHeroId, save)`
    - ปรับปรุง `renderSkillBoardViewHtml()` ให้แทรก Detail Panel ไว้ที่ส่วนบนของ `.loadout-preset-sidebar`
    - เพิ่ม Event Handlers สำหรับ `.btn-panel-unlock-skill`, `.btn-panel-levelup-skill`, `.btn-panel-equip-slot`, `.btn-panel-unequip-skill` ใน `bindSkillBoardEvents()`
    - ปรับปรุงการคลิก `.skill-tree-node` ให้เลือกและซิงค์แสดงผลใน Right Panel
  - `src/style.css`:
    - เพิ่มสไตล์ `.skill-detail-panel-card`, `.detail-card-header`, `.detail-card-stats-grid`, `.stat-pill-box`, `.detail-card-desc-box`, `.detail-prereq-alert`, `.detail-card-actions-box`, `.detail-cost-summary`, `.detail-levelup-box`, `.equip-quick-slots-row`
  - `src/sim/test_skill_tree_state.ts`:
    - เพิ่มการทดสอบหมวดที่ 13 (Render Skill Detail Panel, สเตตัส, สถานะปลดล็อก, สถานะล็อกแถว และ Dynamic Action Buttons)
- **ผลการทดสอบการทำงาน:**
  - `npm run test:skill-state`: ผ่านครบ 13 หมวดการทดสอบ (100%)
  - `npm run test:skills`: ผ่านครบ 7/7 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.93s)

## [Backup #040] — วันที่ 2026-11-03 เวลา 12:06:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการต่อไปใน Phase 5: Skill Loadout & Presets Integration (Right Panel - Bottom) ได้เลยครับ"* (งาน MMORPG Skillboard UI/UX Refactor — Skill Mastery System)
- **เป้าหมายงาน:**
  1. สร้างแผงจัดการสกิลที่ติดตั้ง (Skill Loadout) และระบบพรีเซ็ต (Presets Integration) วางไว้ด้านล่างของ Right Panel (`.loadout-preset-sidebar`) ใต้ Skill Detail Panel
  2. สร้าง Hero Selector Chips สลับสัตว์เลี้ยงเป้าหมายได้รวดเร็ว พร้อมแสดงจำนวนสกิลที่ติดตั้ง (เช่น 4/4)
  3. แสดงช่องติดตั้งสกิล 4 ช่อง (Equip Loadout 4 Slots) ชัดเจน พร้อมข้อมูล Tier, ค่า SP และปุ่มปลดด่วน `✕` (Quick Unequip)
  4. เพิ่ม Live Validation Feedback Box แสดงสถานะเตือนแบบเรียลไทม์ เช่น ช่องติดตั้งยังว่าง
  5. รวมแผงพรีเซ็ตชุดสกิล 3 ชุด (3 Presets Manager) ที่รองรับการกดใช้งานในคลิกเดียว (1-Click Apply) พร้อมปุ่มบันทึกทับและล้างพรีเซ็ต
  6. ปรับแต่ง CSS และ UI จัดวางพื้นที่ไม่ให้เบียดหรือแย่งพื้นที่กับ Center Panel
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/skill_board_view.ts`:
    - สร้าง `renderSkillLoadoutPanelHtml(activeHeroId, save)` แสดงที่ส่วนล่างของ `.loadout-preset-sidebar`
    - เพิ่ม Event Handler สำหรับปุ่ม `.btn-slot-quick-unequip` ใน `bindSkillBoardEvents()` เพื่อถอดสกิลออกจากช่องที่ระบุได้ทันที
  - `src/style.css`:
    - เพิ่มสไตล์ `.btn-slot-quick-unequip`, `.loadout-header-row`, `.loadout-hero-count`
    - ปรับแต่ง `.slot-action-hint` และความสูง/ระยะห่างให้สมดุล
  - `src/sim/test_skill_tree_state.ts`:
    - เพิ่มการทดสอบหมวดที่ 14 (Render Loadout Panel, Hero Chips, 4 ช่องสกิล, Live Validation และปุ่ม Quick Unequip)
- **ผลการทดสอบการทำงาน:**
  - `npm run test:skill-state`: ผ่านครบ 14 หมวดการทดสอบ (100%)
  - `npm run test:skills`: ผ่านครบ 7/7 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.28s)

## [Backup #041] — วันที่ 2026-11-03 เวลา 12:14:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการได้เลยใน Phase 6 — MMORPG Cozy Pixel Art Fantasy UI Styling & Responsive (Desktop / Mobile)"* (งาน MMORPG Skillboard UI/UX Refactor — Skill Mastery System)
- **เป้าหมายงาน:**
  1. ยกระดับ Visual Styling สู่มิติ **Cozy Pixel Art Fantasy** สอดคล้องกับเอกลักษณ์ของ Animalia:
     - ใช้กรอบไม้โบราณและผิวศิลาอุ่น (`border: 2px solid #5a4332;`) ผสานมิติแสงเงาแบบพิกเซลอาร์ต (`box-shadow: inset -2px -2px 0px rgba(0,0,0,0.65), inset 2px 2px 0px rgba(255,235,180,0.12)`)
     - Panel A (Left Navigation): ป้ายหิน/ไม้จารึก (Plaque Slate Items), หลอดความก้าวหน้าเรืองแสง (Cozy Progress Bar) และตัวกรองหมวดหมู่สไตล์ศิลาเวท
     - Panel B (Center Tree Stage): แคนวาสคัมภีร์เวทโบราณ (Ancient Grimoire Canvas), เสริมมุมทองเหลืองอบอุ่น (Cozy Brass Corner Brackets), เส้นทางพลังเวทมนตร์เรืองแสง (Glowing Energy Conduits), และ Node ศิลาจารึก (Cozy Pixel Tablets) พร้อมแอนิเมชัน Twinkle & Pulse
     - Panel C (Right Detail & Loadout): ป้ายสเตตัสแกะสลักหิน (Carved Stone Pills), กล่องคำอธิบายม้วนคัมภีร์ (Cozy Scroll Inset), ช่องสวมใส่สกิลแบบซ็อกเก็ตอัญมณี (Cozy Gem Sockets) และปุ่มกดสามมิติ (Tactile 3D Pixel Action Buttons)
  2. วางระบบ Responsive Layout ครอบคลุมทุกขนาดหน้าจอ:
     - Desktop (> 1200px): หน้าต่าง 3 ช่องแบบเต็มพิกัด (`280px 1fr 340px`)
     - Laptop (993px - 1200px): ปรับขนาดกะทัดรัด (`240px 1fr 310px`)
     - Tablet (769px - 992px): Left Nav ปรับเป็นแถบเลื่อนแนวนอนด้านบน (Swipeable Ribbon at Top with Scroll Snap) เปิดพื้นที่ให้ต้นไม้สกิลแสดงผลเต็มตา
     - Mobile (<= 768px & <= 480px): ต้นไม้สกิลเลื่อนแนวนอนแบบ Touch-scroll ได้อย่างอิสระโดยไม่เบียด Node, ปุ่มกดขนาดใหญ่ไม่ต่ำกว่า 44px, ตารางสเตตัสปรับเป็น 2 คอลัมน์บนจอแคบ ไม่มีปัญหา Overflow
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/style.css`:
    - ปรับปรุงและเพิ่มสไตล์ Cozy Pixel Art Fantasy สำหรับ `.skill-branch-nav-panel`, `.skill-branch-nav-item`, `.skill-tree-center-panel`, `.skill-tree-stage`, `.skill-tree-node`, `.skill-detail-panel-card`, `.loadout-editor-card`, `.hero-select-chip`, `.skill-slot-chip`, `.btn-slot-quick-unequip`, `.presets-section-box`
    - เพิ่ม Media Queries สำหรับ Tablet (max-width: 992px), Mobile (max-width: 768px), และ Mobile Narrow (max-width: 480px)
  - `doc/18_dev_phases.md`: อัปเดตสถานะ Phase 6 เสร็จสมบูรณ์
- **ผลการทดสอบการทำงาน:**
  - `npm run test:skill-state`: ผ่านครบ 14 หมวดการทดสอบ (100%)
  - `npm run test:skills`: ผ่านครบ 7/7 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.50s)

## [Backup #042] — วันที่ 2026-11-03 เวลา 13:12:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการต่อใน Phase 7 — Final Verification & Documentation ได้เลยครับ"* (งาน MMORPG Skillboard UI/UX Refactor — Skill Mastery System)
- **เป้าหมายงาน:**
  1. ดำเนินการทดสอบ Full Regression Suite ครอบคลุมทั้งระบบ 100%:
     - `npm run test:pet-state`: ตรวจสอบสถาปัตยกรรมสถานะ Pet Collection & Pet Detail ทั้ง 5 แท็บ
     - `npm run test:roster`: ตรวจสอบการจัดเรียง, กรอง, ค้นหา และคำนวณพลังรบ (BP)
     - `npm run test:save`: ตรวจสอบ Starter kit, คลังทรัพยากร, การฟักไข่ และการอัปเกรด
     - `npm run test:campaign`: ตรวจสอบ 10 ด่านประจำบทที่ 1, ศัตรูมลทิน Void, และระบบ Tag Relay
     - `npm run test:skills`: ตรวจสอบ 16 สายวิชา, 80 สกิล, กฎการสวมใส่ 4 ช่อง, และระบบต่อสู้จริง
     - `npm run test:skill-state`: ตรวจสอบสถานะการทำงานของ 3-Panel MMORPG Skill Mastery Layout ครบทั้ง 14 หมวด
     - `npm run typecheck`: ตรวจสอบ TypeScript ทั้งหมด ปราศจากข้อผิดพลาด Type Error
     - `npm run build`: ทดสอบ Production Build สำเร็จสมบูรณ์ 100%
  2. อัปเดตและบันทึกเอกสารโครงการอย่างสมบูรณ์:
     - `doc/07_skill_slot_system.md`: เพิ่มหัวข้อสถาปัตยกรรม MMORPG Skill Mastery System (3-Panel Layout, โครงสร้าง 3 Tiers, Dynamic Actions, Live Validation, Presets, Cozy Pixel Art Fantasy)
     - `doc/12_art_audio_ux.md`: เพิ่มหัวข้อข้อกำหนดการออกแบบ MMORPG Cozy Pixel Art Fantasy Skillboard & Responsive UX
     - `doc/18_dev_phases.md`: บันทึกการส่งมอบงานครบทั้ง 7 เฟสของงาน MMORPG Skillboard UI/UX Refactor
     - `doc/19_history_and_backup.md`: บันทึกประวัติและสำรองข้อมูล [Backup #042] สิ้นสุดโปรเจกต์ Refactor
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `doc/07_skill_slot_system.md`
  - `doc/12_art_audio_ux.md`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:pet-state`: ผ่านครบ 8/8 หมวด (100%)
  - `npm run test:roster`: ผ่านครบ 6/6 หมวด (100%)
  - `npm run test:save`: ผ่านครบ 6/6 หมวด (100%)
  - `npm run test:campaign`: ผ่านครบ 10/10 ด่าน (100%)
  - `npm run test:skills`: ผ่านครบ 7/7 หมวด (100%)
  - `npm run test:skill-state`: ผ่านครบ 14/14 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.95s)

## [Backup #043] — วันที่ 2026-11-03 เวลา 13:30:00
- **คำสั่งจาก Game Director:** *"อนุมัติแผนดำเนินงานนี้ครับ เริ่มดำเนินการใน Phase 1: State Architecture Setup & Test Suite"* (งาน BATTLE UI REDESIGN – MMORPG INTERFACE SYSTEM)
- **เป้าหมายงาน:**
  1. ออกแบบและสร้างสถาปัตยกรรมจัดการสถานะของ MMORPG Battle HUD ใน `src/ui/battle_view.ts`:
     - สร้าง State Interface `BattleViewState` ครอบคลุม: `selectedTargetId`, `selectedPartyMemberId`, `activeLogTab` ('battle' | 'system' | 'loot'), การพับ/ขยาย 3 แผง (`isPartyPanelCollapsed`, `isTargetPanelCollapsed`, `isLogPanelCollapsed`), การตั้งค่าความเร็ว (`speed: 1 | 2 | 3`), ระบบเล่นอัตโนมัติ (`isAutoBattle`, `isAutoCastSig`, `isPauseOnSigReady`)
     - ฟังก์ชัน Mutation จัดการ State อย่างมีระเบียบ (`setBattleTarget`, `setBattlePartyMember`, `setBattleLogTab`, `togglePartyPanelCollapse`, `toggleTargetPanelCollapse`, `toggleLogPanelCollapse`, `setBattleSpeed`, `toggleAutoBattle`, `toggleAutoCastSig`, `togglePauseOnSigReady`, `resetBattleViewState`)
     - ระบบ Data Adapters แปลงข้อมูลจริงจากการต่อสู้: `adapt1v1BattleData(session, snap)` และ `adapt2v2BattleData(teamSession)` สู่รูปแบบมาตรฐาน `BattleFighterViewData` โดยไม่แตะต้องหรือแก้ไข Logic/Variables ภายในเอนจินการรบเดิม
     - ระบบจัดคิวความเร็วเทิร์นตามค่า SPD จริง `computeTurnOrderTimeline(fighters, activeId)`
     - ระบบจำแนกหมวดหมู่เหตุการณ์ `classifyTurnEvent(ev)` และตัวกรองประวัติการรบ `filterCombatLogs(logs, tab)`
     - โครงสร้างเรนเดอร์ Base Layout สำหรับ 5 พื้นที่หลัก (`renderBattleViewHtml`)
  2. สร้างชุดทดสอบอัตโนมัติ `src/sim/test_battle_ui_state.ts` ครอบคลุมทั้ง 11 หมวดการทำงาน
  3. เพิ่มสคริปต์ `test:battle-ui` ใน `package.json`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts` (สร้างใหม่)
  - `src/sim/test_battle_ui_state.ts` (สร้างใหม่)
  - `package.json` (เพิ่มสคริปต์ `test:battle-ui`)
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 11/11 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.23s)

## [Backup #044] — วันที่ 2026-11-03 เวลา 13:32:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการใน Phase 2: Top HUD & Turn Order Timeline ได้เลยครับ"* (งาน BATTLE UI REDESIGN – MMORPG INTERFACE SYSTEM)
- **เป้าหมายงาน:**
  1. พัฒนา Area 1: Top HUD ใน `src/ui/battle_view.ts`:
     - สร้าง Interface `BattleTopHudConfig` รองรับ: `stageTitle`, `stageSubtitle`, `stageTypeBadge`, `roundOrTurn`, `maxRoundsOrTurns`, `wave`, `maxWaves`, `livingEnemies`, `totalEnemies`, `livingParty`, `totalParty`, `battleSource`, `mode`
     - สร้างฟังก์ชัน `renderBattleTopHudHtml` แสดงข้อมูลด่าน, กล่องตัวนับสถิติ (รอบ/เทิร์น, เวฟ, ศัตรูคงเหลือ, สมาชิกปาร์ตี้), และแผงควบคุม (สปีด 1x/2x/3x, ปุ่มพักรบ/เล่นต่อ, ปุ่มก้าวเทิร์น, ปุ่มตั้งค่า, และปุ่มถอยทัพ/ยอมแพ้)
  2. พัฒนาระบบ Turn Order Timeline (MMORPG Speed Queue Ribbon):
     - ปรับปรุงฟังก์ชัน `computeTurnOrderTimeline` ให้คัดเลือกเฉพาะนักสู้ที่อยู่บนกระดานจริงและยังมีชีวิตอยู่ เรียงลำดับตามค่า SPD จากมากไปน้อย
     - สร้างฟังก์ชัน `renderTurnOrderTimelineHtml` เรนเดอร์ริบบอนแสดงคิวเทิร์นแนวนอน
     - ออกแบบการแสดงผล Badge นักสู้: ไอคอนประจำตัว (`getFighterAvatarEmoji`), สัญลักษณ์ธาตุ, ชื่อ, ป้ายฝั่งเรา (🟦 เรา) vs ฝั่งศัตรู (🟥 ศัตรู), ป้ายความเร็ว `⚡ SPD`, มินิบาร์ HP พร้อม % เรียลไทม์
     - ระบบไฮไลต์นักสู้เทิร์นปัจจุบัน: กรอบเรืองแสงสีทองพิกเซล (`.active-turn`), ป้าย `เทิร์นนี้`, และแอนิเมชัน Pulse
     - รองรับสถานะไม่มีนักสู้ในคิว (`.timeline-empty-notice`)
  3. สร้างฟังก์ชันเชื่อมต่อและผูกเหตุการณ์ `bindBattleTopHudEvents`:
     - รองรับคลิกปุ่มสปีด 1x, 2x, 3x (สลับคลาส `.active` และเรียก `onSpeedChange`)
     - รองรับปุ่ม Play/Pause (สลับสถานะ `isPlaying`, เปลี่ยนป้ายข้อความ และเรียก `onPlayPauseToggle`)
     - รองรับปุ่มก้าวเทิร์น Step (`onStepTurn`)
     - รองรับปุ่มถอยทัพ Retreat (`onRetreat`)
     - รองรับปุ่มตั้งค่า Settings (`onOpenSettings`)
     - รองรับการคลิกที่ Badge ในไทม์ไลน์เพื่อโฟกัสเป้าหมายศัตรู (`selectedTargetId`) หรือเลือกดูสมาชิกทีม (`selectedPartyMemberId`) อัตโนมัติ พร้อมส่ง callback `onTimelineFighterClick`
  4. เพิ่มการจัดสไตล์และแอนิเมชันธีม Cozy Pixel Art Fantasy และ Responsive Layout ใน `src/style.css`:
     - สไตล์ Top HUD กรอบไม้ผสมศิลาหินอบอุ่นและปุ่มกดนูนสามมิติ (Tactile 3D Buttons)
     - สไตล์ Timeline Ribbon แถบเลื่อนแนวนอนพร้อม Custom Scrollbar พิกเซล
     - ปรับแต่งการแสดงผลบน Tablet (max-width: 992px) และ Mobile (max-width: 768px)
  5. เพิ่มชุดทดสอบครอบคลุมหมวด 12, 13, 14 ใน `src/sim/test_battle_ui_state.ts`:
     - หมวด 12: ตรวจสอบการเรนเดอร์ Area 1: Top HUD (15 ข้อทดสอบ)
     - หมวด 13: ตรวจสอบการเรนเดอร์ Turn Order Timeline Ribbon (12 ข้อทดสอบ)
     - หมวด 14: ตรวจสอบการผูกเหตุการณ์ Top HUD & Timeline Event Binding (10 ข้อทดสอบ)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 14/14 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 5.47s)

## [Backup #045] — วันที่ 2026-11-03 เวลา 13:38:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการใน Phase 3: Party Status Panel (Left) & Status Effect UI ได้เลยครับ"* (งาน BATTLE UI REDESIGN – MMORPG INTERFACE SYSTEM)
- **เป้าหมายงาน:**
  1. พัฒนา Area 2: Party Status Panel และ Status Effect UI ใน `src/ui/battle_view.ts`:
     - ฟังก์ชัน `getRoleIcon(role)` แปลงคลาส/บทบาทเป็นไอคอน (Striker ⚔️, Tank 🛡️, Assassin ⚡, Balanced ⚖️, Support 💚, Sniper 🎯, Mage 🔮, Boss 👑)
     - ฟังก์ชัน `formatStatusEffectBadge(ef)` จัดรูปแบบสถานะผิดปกติและบัฟ/ดีบัฟครบทุกประเภท (burn, poison, freeze, stun, root, slow, blind, confusion, bleed, taunt, sleep, silence, vulnerable, wine_mist, raging_thunder, counter_stance, yata_mirror, shadow_clone, regen, shield, buff/debuff atk/def/spd/cri/hit/flee/ab/block)
     - ฟังก์ชัน `renderStatusEffectsListHtml(effects)` เรนเดอร์แท็กไอคอนสถานะผิดปกติพร้อมจำนวนเทิร์นคงเหลือและชั้น Stack
     - ฟังก์ชัน `renderPartyMemberCardHtml(f, isSelected)` เรนเดอร์การ์ดสมาชิกปาร์ตี้แสดง: อวตารสัตว์เลี้ยง, ป้ายธาตุ, ระดับเลเวล, ดาว, ป้ายบทบาท, ป้ายสถานะตัวละคร (🟢 ในสนาม, 🔄 สำรอง, 💀 สลบ), หลอดเลือด HP พร้อมตัวเลขและเกราะซ้อน (+🛡️), หลอด SP, หลอด Signature Gauge พร้อมไฮไลต์เรืองแสงเมื่อเกจเต็ม 100% (`⭐ พร้อมปล่อยท่า!`), และป้ายโบนัสตำแหน่งยืน Role Affinity
     - ฟังก์ชัน `renderPartyStatusPanelHtml(party, state)` เรนเดอร์แผงปาร์ตี้ฝั่งซ้ายพร้อมจำนวนสมาชิกที่รอดชีวิต และปุ่มสลับพับ/ขยายแผง (`#btn-toggle-party-panel`)
     - ฟังก์ชัน `bindPartyStatusPanelEvents(container, handlers)` ผูกเหตุการณ์คลิกเลือกการ์ดสมาชิกปาร์ตี้ (`selectedPartyMemberId`) และปุ่มพับ/ขยายแผง
  2. เชื่อมโยง `renderPartyStatusPanelHtml` เข้าสู่โครงสร้างหลัก `renderBattleViewHtml`
  3. เพิ่มสไตล์และการจัดวาง Cozy Pixel Art Fantasy ใน `src/style.css`:
     - ปรับโครงสร้าง CSS Grid 3 คอลัมน์ (`.battle-main-stage-layout: 290px 1fr 340px`) รองรับสถานะการพับแผงทั้งสองฝั่ง
     - สไตล์การ์ดสมาชิกปาร์ตี้ กรอบศิลาอุ่น, แถบสถานะเรืองแสง, หลอดไม้ตายกะพริบเตือนเมื่อพร้อมใช้
     - สไตล์แท็กสถานะผิดปกติ (เขียวสำหรับ Buff, แดง/ม่วงสำหรับ Debuff)
     - การปรับ Responsive สำหรับหน้าจอแท็บเล็ตและมือถือ
  4. เพิ่มชุดทดสอบครอบคลุมหมวด 15, 16, 17 ใน `src/sim/test_battle_ui_state.ts`:
     - หมวด 15: ตรวจสอบการจัดรูปแบบสถานะผิดปกติและบัฟ/ดีบัฟ (18 ข้อทดสอบ)
     - หมวด 16: ตรวจสอบการเรนเดอร์ Area 2: Party Status Panel & Member Cards (16 ข้อทดสอบ)
     - หมวด 17: ตรวจสอบการผูกเหตุการณ์ Party Status Panel Event Binding (4 ข้อทดสอบ)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 17/17 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.18s)

## [Backup #046] — วันที่ 2026-11-03 เวลา 13:43:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการใน Phase 4: Battle Arena (Center) & Tactical Formation Stage ได้เลยครับ"* (งาน BATTLE UI REDESIGN – MMORPG INTERFACE SYSTEM)
- **เป้าหมายงาน:**
  1. พัฒนา Area 3: Battle Arena สนามต่อสู้หลักตรงกลาง ใน `src/ui/battle_view.ts`:
     - สร้าง Interface `BattleArenaConfig` รองรับโหมด `1v1_tag` และ `2v2_grid`, สมาชิกปาร์ตี้, ศัตรู, ผู้ชนะ, ตัวละครแอคชันปัจจุบัน, และข้อความประกาศ
     - ฟังก์ชัน `renderArenaUnitHtml(f, opts)` เรนเดอร์กล่องนักสู้ (Fighter Unit Box) แสดง: หลอด HP ลอยเหนือศีรษะ (Overhead HP Bar), เกราะ Shield ซ้อน (+🛡️), สไปรต์อวตารสัตว์เลี้ยง, ป้ายธาตุ, ป้ายบทบาท, ป้ายยืนถูกตำแหน่ง Role Affinity, ป้ายเทิร์นปัจจุบัน (`⚡ เทิร์นนี้`), ตราหัวกะโหลกเมื่อสลบ (`💀`), และเป้าเล็งสีแดง (`🎯 เล็งเป้า`) เมื่อเป็นเป้าหมาย
     - ฟังก์ชัน `render1v1ArenaHtml(party, enemies, activeId, state)` เรนเดอร์สนามประลองโหมด 1v1 ปะทะตัวต่อตัว พร้อมจุดรอสลับตัวสำรองที่ซ้อนอยู่ด้านหลัง และตรา VS กึ่งกลางสนาม
     - ฟังก์ชัน `render2v2GridArenaHtml(party, enemies, activeId, state)` เรนเดอร์สนามประลองแบบกระดานจัดทัพ 3x3 สองฝั่ง (Player A vs Enemy B) แสดง 3 คอลัมน์ (แนวหน้า Front, แถวกลาง Mid, แถวหลัง Back) ช่องว่างมีคำแนะนำตำแหน่ง (`cell-vacancy-hint`) และช่องที่มีนักสู้ประจำการ (`occupied-cell`)
     - ฟังก์ชัน `renderBattleArenaHtml(config, state)` เรนเดอร์ Center Stage เชื่อมต่อกับ Backdrop Scenery, เลเยอร์ตัวเลขลอย (`arena-floating-layer`), และแบนเนอร์ผลการรบ (`arena-announcement-banner`)
     - ฟังก์ชัน `createFloatingTextHtml(text, type, side)` สร้างโค้ดตัวเลขและข้อความต่อสู้ลอยสำหรับดาเมจ, คริติคอล (CRIT 💥), ฮีล (HEAL 💚), หลบหลีก (MISS 💨), บล็อก (BLOCK 🧱)
     - ฟังก์ชัน `bindBattleArenaEvents(container, handlers)` ผูกเหตุการณ์คลิกศัตรูในสนามเพื่อเล็งเป้า (`selectedTargetId`) และคลิกฝ่ายเราเพื่อเลือกดูข้อมูล (`selectedPartyMemberId`)
  2. เชื่อมโยง `renderBattleArenaHtml` เข้าสู่โครงสร้างหลัก `renderBattleViewHtml` อย่างสมบูรณ์
  3. เพิ่มสไตล์และการจัดวาง Cozy Pixel Art Fantasy ใน `src/style.css`:
     - จัดสไตล์ Backdrop Scenery, แบนเนอร์ผู้ชนะ (Victory/Defeat/Draw)
     - สไตล์สนามประลอง 1v1 และกระดานจัดทัพ 3x3
     - สไตล์กล่องนักสู้ (Fighter Unit Box) พร้อม Overhead Mini-Bar และเป้าเล็ง Crosshair กะพริบ
     - แอนิเมชัน Floating Combat Numbers แบบลอยขึ้นและจางหาย (`@keyframes floatCombatNumber`)
  4. เพิ่มชุดทดสอบครอบคลุมหมวด 18, 19, 20, 21 ใน `src/sim/test_battle_ui_state.ts`:
     - หมวด 18: ตรวจสอบการเรนเดอร์นักสู้ในสนามประลอง Arena Unit Box (11 ข้อทดสอบ)
     - หมวด 19: ตรวจสอบการเรนเดอร์ Area 3: Battle Arena 1v1 Tag Relay (9 ข้อทดสอบ)
     - หมวด 20: ตรวจสอบการเรนเดอร์ Area 3: Battle Arena 2v2 Tactical Grid (10 ข้อทดสอบ)
     - หมวด 21: ตรวจสอบ Floating Combat Text & Arena Event Binding (8 ข้อทดสอบ)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 21/21 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.92s)

## [Backup #047] — วันที่ 2026-11-03 เวลา 13:52:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการใน Phase 5: Target Information Panel & Tabbed Combat Log (Right) ได้เลยครับ"* (งาน BATTLE UI REDESIGN – MMORPG INTERFACE SYSTEM)
- **เป้าหมายงาน:**
  1. พัฒนา Area 4: Target Information Panel และ Area 5A: Tabbed Combat Log ใน `src/ui/battle_view.ts`:
     - ฟังก์ชัน `getMatchupBadgeHtml(attElem, defElem)`: คำนวณและสร้างป้ายเปรียบเทียบธาตุแบบเรียลไทม์ระหว่างตัวละครหลักเรากับเป้าหมายที่เลือก (+30% ได้เปรียบธาตุ 🟢, -15% เสียเปรียบธาตุ 🔴, 1.0x สมดุล ⚪)
     - ฟังก์ชัน `renderTargetInfoPanelHtml(target, attacker, state)`: เรนเดอร์ข้อมูลเป้าหมายที่เลือก รองรับทั้งการไม่ได้เลือก (Empty Prompt สวยงามพร้อมคำแนะนำ), หรือเมื่อเลือกศัตรู/เพื่อนร่วมทีม แสดงอวตารสัตว์เลี้ยง, ป้ายธาตุ, ระดับ Rarity, บทบาท Role, เลเวล, ดาว, ป้ายสถานะ (ในสนาม/สำรอง/สลบ), หลอดเลือด HP และเกราะ (+🛡️), หลอด SP, ท่าไม้ตาย Signature Preview, พรสวรรค์ Ability, รายการสถานะผิดปกติ Active Effects, และปุ่มปลดเป้าหมาย (`#btn-clear-target`)
     - ฟังก์ชัน `renderCombatLogPanelHtml(logs, state)`: เรนเดอร์ประวัติการต่อสู้ 3 แท็บ (⚔️ ต่อสู้, ⚙️ ระบบ, 🎁 รางวัล) พร้อมตัวนับจำนวนข้อความรายแท็บ, ไฮไลต์ข้อความพิเศษ (คริติคอล `.log-crit`, หลบหลีก `.log-miss`, ท่าไม้ตาย `.log-sig`), ปุ่มล้างประวัติ (`#btn-clear-log`), และปุ่มพับ/ขยายแผงบันทึก (`#btn-toggle-log-panel`)
     - ฟังก์ชัน `bindTargetAndLogEvents(container, handlers)`: ผูกเหตุการณ์พับขยาย Target Panel, ปลดเป้าหมาย, สลับแท็บ Log, ล้างข้อความ Log, และพับขยาย Log Panel
     - อัปเดต `classifyTurnEvent` ให้รองรับการจำแนกหมวดหมู่อย่างแม่นยำและครอบคลุม
  2. เชื่อมโยง Area 4 และ Area 5A เข้าสู่โครงสร้างหลัก `renderBattleViewHtml` อย่างสมบูรณ์
  3. เพิ่มสไตล์และการจัดวาง Cozy Pixel Art Fantasy ใน `src/style.css`:
     - แผงด้านขวา `.battle-side-panel` จัดวางคู่ทั้ง Target Info และ Combat Log
     - สไตล์กรอบศิลาอุ่นของ Target Info Box, ป้ายได้เปรียบ/เสียเปรียบธาตุเรืองแสง
     - สไตล์ Combat Log Box พร้อมแท็บสลับ 3 สี, แถวข้อความแยกตามหมวดหมู่, ไฮไลต์แถบสีสำหรับคริติคอล/หลบ/ไม้ตาย และ Custom Pixel Scrollbar
  4. เพิ่มชุดทดสอบครอบคลุมหมวด 22, 23, 24, 25 ใน `src/sim/test_battle_ui_state.ts`:
     - หมวด 22: ตรวจสอบการคำนวณและแสดงผลการเปรียบเทียบธาตุ Elemental Matchup Badge (7 ข้อทดสอบ)
     - หมวด 23: ตรวจสอบการเรนเดอร์ Area 4: Target Information Panel (12 ข้อทดสอบ)
     - หมวด 24: ตรวจสอบการเรนเดอร์ Area 5A: Tabbed Combat Log (9 ข้อทดสอบ)
     - หมวด 25: ตรวจสอบการผูกเหตุการณ์ Target Info Panel & Combat Log Event Binding (7 ข้อทดสอบ)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 25/25 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 3.51s)

## [Backup #048] — วันที่ 2026-11-03 เวลา 13:57:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการต่อใน Phase 6: Bottom Skill Hotbar & Auto-Battle Controls (Area 5B) ได้เลยครับ"* (งาน BATTLE UI REDESIGN – MMORPG INTERFACE SYSTEM)
- **เป้าหมายงาน:**
  1. พัฒนา Area 5B: Bottom Skill Hotbar & Battle Controls ใน `src/ui/battle_view.ts`:
     - ฟังก์ชัน `getSkillInfo(skillId)`: ค้นหาข้อมูลสกิลและดึงค่าร่าย SP จากฐานข้อมูลกลางอย่างถูกต้อง
     - ฟังก์ชัน `renderSkillSlotHtml(skillId, slotIndex, activeHero)`: เรนเดอร์ช่องสกิลเดี่ยวใน Hotbar พร้อมเลขคีย์ลัด `[1]`-`[4]`, สัญลักษณ์และสีธาตุ, ชื่อสกิล, Tier (`S`, `M`, `L`), ค่าร่าย SP พร้อมระบบตรวจเช็คความพร้อม หาก SP ไม่พอจะแสดงสถานะ `insufficient-sp` ป้ายเตือน และป้องกันการกด
     - ฟังก์ชัน `renderSkillHotbarHtml(activeHero)`: รวมช่องสกิลทั้ง 4 ช่องของฮีโร่ตัวหลักที่กำลัง Active อย่างเป็นระเบียบ
     - ฟังก์ชัน `renderSignatureCastButtonHtml(activeHero)`: เรนเดอร์ปุ่มปลดปล่อยท่าไม้ตายขนาดใหญ่ แสดงชื่อท่าไม้ตาย, หลอดเกจสะสมพลังงาน (0-100%), คีย์ลัด `[Space]` พร้อมเอฟเฟกต์แสงเรืองสีทองและแอนิเมชัน Pulse กะพริบเตือนเมื่อเกจเต็ม 100% พร้อมใช้งาน
     - ฟังก์ชัน `renderSwapHeroButtonHtml(backupHero, mode, swapCooldown, winner)`: เรนเดอร์ปุ่มสลับตัวสำรองสำหรับโหมด 1v1 Tag Relay แสดงชื่อตัวสำรอง พร้อมตัวนับคูลดาวน์สลับตัว (`2T`) และซ่อนอัตโนมัติเมื่ออยู่ในโหมด 2v2 Grid
     - ฟังก์ชัน `renderBattleBottomHudHtml(config, state)`: เรนเดอร์โครงสร้าง Area 5B ทั้งหมด รวม Hotbar 4 ช่อง, ปุ่มไม้ตาย, ปุ่มสลับตัว และแถบควบคุมระบบอัตโนมัติ 3 สวิตช์:
       - ⚔️ ต่อสู้อัตโนมัติ (Auto Battle)
       - 🔥 ปล่อยไม้ตายอัตโนมัติ (Auto-Cast Sig)
       - ⏸️ หยุดถามเมื่อท่าพร้อม (Pause on Sig Ready)
     - ฟังก์ชัน `bindBattleBottomHudEvents(container, handlers)`: ผูก Event Listeners ครบถ้วนสำหรับการคลิกช่องสกิล, ปุ่มปลดปล่อยไม้ตาย, ปุ่มสลับตัวสำรอง และการสลับเปิด-ปิดเช็กบ็อกซ์ควบคุมระบบอัตโนมัติ
  2. ปรับปรุง `renderBattleViewHtml` และ `BattleLayoutConfig` เพื่อเชื่อมต่อ Bottom HUD เข้ากับ Main Layout
  3. เพิ่มสไตล์และการจัดวาง Cozy Pixel Art Fantasy ใน `src/style.css`:
     - สไตล์แถบด้านล่าง `.battle-bottom-hud` และโครงสร้าง Grid ของ Hotbar
     - สไตล์ปุ่มไม้ตายเรืองแสงกะพริบตามจังหวะ (`@keyframes sigReadyPulse`)
     - สไตล์ปุ่มสลับตัวสำรอง และเช็กบ็อกซ์ควบคุมระบบอัตโนมัติ
     - Responsive Breakpoints สำหรับหน้าจอขนาดกว้าง/แท็บเล็ต/มือถือ (ปรับสล็อตเป็น 2 คอลัมน์ หรือ 1 คอลัมน์)
  4. เพิ่มชุดทดสอบครอบคลุมหมวด 26, 27, 28, 29, 30 ใน `src/sim/test_battle_ui_state.ts`:
     - หมวด 26: ตรวจสอบข้อมูลสกิลและการเรนเดอร์ช่องสกิล Skill Slot & SP Cost Validation (11 ข้อทดสอบ)
     - หมวด 27: ตรวจสอบการเรนเดอร์ Skill Hotbar รวม 4 ช่อง (6 ข้อทดสอบ)
     - หมวด 28: ตรวจสอบการเรนเดอร์ปุ่มท่าไม้ตาย Signature Cast Button (10 ข้อทดสอบ)
     - หมวด 29: ตรวจสอบการเรนเดอร์ Area 5B: Bottom Skill Hotbar & Controls และปุ่มสลับตัว 1v1 (9 ข้อทดสอบ)
     - หมวด 30: ตรวจสอบการผูกเหตุการณ์ Area 5B Event Binding (10 ข้อทดสอบ)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.19s)

## [Backup #049] — วันที่ 2026-11-03 เวลา 14:00:00
- **คำสั่งจาก Game Director:** *"อนุมัติผ่านครับ ดำเนินการใน Phase 7: Cozy Pixel Art Theme, Responsive & Final Verification ได้เลยครับ"* (งาน BATTLE UI REDESIGN – MMORPG INTERFACE SYSTEM)
- **เป้าหมายงาน:**
  1. ตรวจสอบความถูกต้องและบูรณาการสุนทรียภาพ Cozy Pixel Art Fantasy MMORPG Battle Interface System ครบทั้ง 5 พื้นที่หลัก:
     - Area 1: Top HUD (ข้อมูลด่าน, รอบ/เทิร์น, เวฟ, ตัวนับศัตรู/ปาร์ตี้, สวิตช์สปีด 1x/2x/3x, พักรบ, ก้าวเทิร์น, ตั้งค่า, ยอมแพ้) และ Turn Order Timeline Ribbon (คิว SPD, ไฮไลต์ active-turn, ป้ายเทิร์นนี้, มินิบาร์ HP)
     - Area 2: Party Status Panel ด้านซ้าย (สมาชิก 1-4 ตัว, หลอด HP/SP/ไม้ตาย, แท็กสถานะบัฟ/ดีบัฟ, ปุ่มพับขยาย)
     - Area 3: Battle Arena สนามต่อสู้หลักตรงกลาง (โหมด 1v1 Tag Relay, โหมด 2v2 Tactical Grid, กล่องนักสู้พร้อม Overhead HP/Shield, เป้าเล็ง Crosshair, ตัวเลขลอย Floating Combat Numbers ดาเมจ/คริ/ฮีล/หลบ/บล็อก)
     - Area 4: Target Information Panel ด้านขวา (ระบบคำนวณและแสดงผลการเปรียบเทียบธาตุ Elemental Matchup +30% / -15% / 1.0x, หลอดเลือดเป้าหมาย, ท่าไม้ตาย Signature Preview, พรสวรรค์, รายการสถานะที่ติดอยู่, ปุ่มปลดเป้าหมาย)
     - Area 5A: Tabbed Combat Log (ประวัติการต่อสู้ 3 แท็บ: ⚔️ ต่อสู้, ⚙️ ระบบ, 🎁 รางวัล พร้อมไฮไลต์คริติคอล, หลบหลีก, ไม้ตาย, และ Custom Pixel Scrollbar)
     - Area 5B: Bottom Skill Hotbar & Controls (Hotbar สกิล 4 ช่อง, ป้ายคีย์ลัด [1]-[4], ตรวจสอบค่าร่าย SP พร้อมป้ายเตือน, ปุ่มไม้ตายใหญ่พร้อมเกจและเอฟเฟกต์กะพริบ Pulse เมื่อเต็ม 100%, ปุ่มสลับตัว 1v1 พร้อมคูลดาวน์, และสวิตช์ควบคุมระบบอัตโนมัติ 3 ตัว)
  2. ตรวจสอบ Responsive Design ครอบคลุมหน้าจอทุกระดับ (Desktop > 1200px, Laptop 993-1200px, Tablet 769-992px, Mobile <= 768px & <= 480px)
  3. รันการทดสอบ Full Regression Suite ทั้งโปรเจกต์ผ่าน 100% ปราศจากข้อผิดพลาด:
     - `npm run test:battle-ui`: ผ่านครบ 30/30 หมวด (100%)
     - `npm run test:save`: ผ่านครบ 6/6 หมวด (100%)
     - `npm run test:campaign`: ผ่านครบ 10/10 ด่าน (100%)
     - `npm run test:skills`: ผ่านครบ 7/7 หมวด (100%)
     - `npm run test:roster`: ผ่านครบ 6/6 หมวด (100%)
     - `npm run test:pet-state`: ผ่านครบ 8/8 หมวด (100%)
     - `npm run test:skill-state`: ผ่านครบ 14/14 หมวด (100%)
     - `npm run typecheck`: ผ่าน 0 Error (100%)
     - `npm run build`: Production Build สำเร็จ 100% (Built in 4.83s)
  4. อัปเดตและบันทึกเอกสารโครงการ:
     - `doc/12_art_audio_ux.md`: เพิ่มข้อกำหนดการออกแบบ MMORPG Battle HUD Interface System
     - `doc/18_dev_phases.md`: ปิดรอบการพัฒนา BATTLE UI REDESIGN ครบทั้ง 7 เฟสอย่างเป็นทางการ
     - `doc/19_history_and_backup.md`: บันทึกประวัติและสำรองข้อมูล [Backup #049]
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/12_art_audio_ux.md`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`
- **ผลการทดสอบการทำงาน:**
  - Full Regression Test: ผ่าน 100% ครบทุกโมดูล
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.83s)

## [Backup #050] — วันที่ 2026-11-03 เวลา 16:38:00
- **คำสั่งจาก Game Director:** *"ในส่วนของ ปุ่มปลดปล่อยท่าไม้ตายขนาดใหญ่ อยากให้ปรับเป็นปุ่มขนาดใหญ่มีเอฟเฟคเปลวไฟเร่าร้อน มีข้อความในเป็นชื่อสกิลนั้นๆ แบบสวยงาม สะดุดตา มืออาชีพ"*
- **เป้าหมายงาน:**
  1. ยกระดับโครงสร้างและภาพลักษณ์ปุ่มท่าไม้ตายขนาดใหญ่ (Grand Raging Inferno Ultimate Button) ใน `src/ui/battle_view.ts`:
     - เพิ่มเลเยอร์แอนิเมชันเปลวไฟเร่าร้อนหลายชั้น: แบ็กดรอปธารลาวาเพลิงเดือด (`.sig-fire-backdrop`), เปลวเพลิงลุกโชน (`.sig-flame-tongues`), สะเก็ดไฟประกายลอยขึ้น (`.sig-sparks-layer`)
     - เพิ่มดวงไฟเวทมนตร์กึ่งกลาง (`.sig-fire-crest`) พร้อมวงแหวนเวทหมุนวนรอบดวงไฟ (`.sig-fire-ring`)
     - จัดกลุ่ม Typography แสดงหัวข้อแถบพลัง (`.sig-header-lead`), ข้อความกระตุ้นการใช้งาน (`.sig-action-hint`), หลอดเกจสะสมพลังงานแมกมา (`.sig-gauge-track` & `.sig-gauge-fill`)
     - ป้ายคีย์ลัด `[Space]` สไตล์ปุ่มกดนูน 3 มิติสีทอง
  2. ออกแบบและเพิ่มสไตล์ Cozy Pixel Art Fantasy & Raging Inferno VFX ใน `src/style.css`:
     - ขยายขนาดปุ่มเป็น `350px x 72px` โดดเด่นเคียงข้างฮ็อตบาร์สกิล 4 ช่อง
     - เอฟเฟกต์ชื่อท่าไม้ตาย (`.sig-name`): ตัวหนังสือใหญ่ `1.05rem` หนาพิเศษ (font-weight: 900) ไล่เฉดสีโลหะทองคำเปลวไฟ (`linear-gradient`) พร้อมเงาสองชั้น (`filter: drop-shadow`) สวยงามสะดุดตา
     - แอนิเมชันสถานะพร้อมใช้งาน (`is-ready`):
       - `@keyframes sigInfernoPulse`: ออร่าระเบิดพลังเพลิงสว่างจ้าเป็นจังหวะ
       - `@keyframes ragingLavaPulse`: ลาวาหลอมเหลวด้านหลังสว่างวาบ
       - `@keyframes flameWaveDance`: เปลวไฟสะบัดพลิ้วไหวอย่างต่อเนื่อง
       - `@keyframes fireCrestVibrate` & `fireIconBounce`: ตราดวงไฟสั่นไหวและเด้งตอบรับ
       - `@keyframes hintFlash`: ข้อความแนะนำกด `[Space]` กะพริบเรืองแสง
  3. รันการทดสอบและบิลด์:
     - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
     - `npm run typecheck`: ผ่าน 0 Error (100%)
     - `npm run build`: Production Build สำเร็จ 100% (Built in 4.07s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

## [Backup #051] — วันที่ 2026-11-03 เวลา 17:05:00
- **คำสั่งจาก Game Director:** *"จากการทดสอบระบบแล้ว ปุ่มปล่อยท่าไม้ตาย ยังไม่แสดงตามที่คุณปรับเลยครับ (พร้อมแนบภาพบันทึกหน้าจอการเล่นบนเบราว์เซอร์)"*
- **สาเหตุที่ตรวจพบ (Root Cause Analysis):**
  - ในการเล่นจริงบนเบราว์เซอร์ผ่าน `http://localhost:5174/` ระบบรันผ่าน `src/main.ts` ซึ่งเป็นเวทีต่อสู้แบบ 1v1 ปัจจุบัน
  - ในโค้ดเดิม `src/main.ts` ใช้ปุ่มป้ายกำกับ `#btn-cast-sig` และ `#btn-prompt-use-sig` ที่ใช้คลาส `.btn-sig` พร้อมทั้งมีการกำหนดค่าด้วย `sigBtn.textContent = ...` ซึ่งส่งผลให้ข้อความทับแท็ก HTML ด้านในทั้งหมดกลายเป็นข้อความธรรมดา และสไตล์ของ `.btn-sig` ยังเป็นปุ่มสีส้ม-แดงขนาดปกติ
- **การแก้ไขและยกระดับ (Implementation):**
  1. อัปเกรดคลาส `.btn-sig` และสถานะ `.btn-sig.ready` ใน `src/style.css`:
     - ออกแบบให้เป็นปุ่มสไตล์ Raging Inferno เต็มรูปแบบ: ขนาดความสูง `min-height: 64px`, ขอบทองแดงแมกมา, แบ็กดรอปธารเพลิงเดือดสลับคลื่นความร้อน
     - เลเยอร์เปลวเพลิง `::before` (Lava pulse) และ `::after` (Flame wave dance) พลิ้วไหวต่อเนื่อง
     - เพิ่มคลาสย่อย `.sig-btn-inner`, `.sig-fire-flare`, `.sig-btn-texts`, `.sig-btn-lead`, `.sig-btn-name`, `.sig-btn-mult`
     - สไตล์ชื่อท่าไม้ตาย `.sig-btn-name` ตัวอักษรขนาดใหญ่พิเศษ หนา 900 ไล่เฉดสีโลหะทองคำเปลวไฟสะท้อนแสง (`linear-gradient(180deg, #ffffff, #fff9c4, #ffd54f, #ff9100, #ff3d00)`) พร้อมเอฟเฟกต์ Drop Shadow สองชั้นเรืองแสงสว่างจ้า
  2. อัปเกรดการเรนเดอร์ใน `src/main.ts`:
     - ปรับฟังก์ชัน `updateArenaUI` ให้เปลี่ยนจากการใช้ `.textContent` มาเป็น `.innerHTML` ที่บรรจุโครงสร้าง Raging Inferno ครบถ้วน
     - รองรับทั้ง 3 สภาวะ:
       - สถานะพร้อมใช้งาน (`ready`): แสดงหัวข้อ `✦ กดใช้ท่าไม้ตายขั้นสุดยอด! ✦`, ชื่อท่าไม้ตายเรืองแสงสีทอง, ตัวคูณดาเมจ `×2`, และไอคอนไฟเต้นกระโดด
       - สถานะเข้าคิว (`queued`): แสดงหัวข้อ `⚡ เตรียมปล่อยในเทิร์นนี้ (กดเพื่อยกเลิก)`
       - สถานะกำลังสะสมเกจ: แสดงหัวข้อสะสมเกจ `(เกจ X/100)`, ชื่อท่าไม้ตายโทนสีเงิน, และอัตราเพิ่มเกจต่อเทิร์น
     - ปรับปุ่มแจ้งเตือนจังหวะเทิร์นด้านบน (`#btn-prompt-use-sig`) ในกล่องข้อความสีทอง ให้ใช้คลาส `.btn-sig.ready.btn-prompt-sig` พร้อมโครงสร้างเปลวไฟเร่าร้อนและชื่อท่าไม้ตายทองคำเปลวอย่างสวยงามและเด่นชัด
- **ผลการทดสอบการทำงาน:**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/style.css`
  - `src/main.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`












---

## [Backup #052] — วันที่ 2026-11-03 เวลา 23:58:00
- **คำสั่งจาก Game Director:** ดำเนินการเชื่อมต่อระบบอินเทอร์เฟซการรบระดับ MMORPG (Battle UI Redesign) ทั้ง 6 พื้นที่ (Area 1, Area 2, Area 3, Area 4, Area 5A, Area 5B) เข้าสู่ Runtime หลัก `src/main.ts` โดยตรง
- **สาเหตุที่ตรวจพบ (Root Cause Analysis):**
  - จากการตรวจสอบพบว่า `src/ui/battle_view.ts` ได้ถูกพัฒนาและผ่านการทดสอบครบทั้ง 30 การทดสอบใน `src/sim/test_battle_ui_state.ts` เรียบร้อยแล้ว แต่ในไฟล์รันไทม์หลัก `src/main.ts` ยังคงเรียกใช้ฟังก์ชันหน้าจอสนามรบเดิมที่เป็น Graybox (`renderBattleScreen1v1` และ `renderBattleScreen2v2`) ทำให้เมื่อเปิดเล่นบนเบราว์เซอร์ ผู้เล่นยังไม่เห็นอินเทอร์เฟซ MMORPG ตัวจริง
- **การแก้ไขและเชื่อมต่อระบบ (Implementation Details):**
  1. ใน `src/ui/battle_view.ts`:
     - ปรับ `renderArenaUnitHtml`: ติดตั้ง `id="box-unit-${f.side}"` และ `<div class="floating-layer float-layer" id="float-layer-${f.side}"></div>` เพื่อให้เอฟเฟกต์การพุ่งโจมตี (`lunge-right`/`lunge-left`), การกะพริบรับดาเมจ (`hit-flash`), และตัวเลขลอย Floating Combat Text เชื่อมโยงเข้ากับนักสู้อารีน่า MMORPG อย่างสมบูรณ์
     - ปรับ `renderBattleArenaHtml`: กำหนด `id="arena-stage"` และ `id="banner-area"` เพื่อรองรับเอฟเฟกต์หน้าจอสั่น (`screen-shake`) และแบนเนอร์แจ้งผลชัยชนะ/พ่ายแพ้/ถามไม้ตาย
     - เพิ่มปุ่มเริ่มไฟต์ใหม่ `#btn-battle-restart` ใน Area 1: Top HUD
     - สร้างและ Export `BattleViewHandlers` และ `bindBattleViewEvents`: ระบบ Master Event Binder ที่ใช้ Event Delegation ผูกการทำงานทั้งหมดของ Top HUD, Party Panel, Center Arena, Target Info, Tabbed Combat Log, Bottom Skill Hotbar และปุ่มสลับตัว 1v1 พร้อมทั้งติดตั้ง Hotkey [Space] สำหรับท่าไม้ตาย และ [1]-[4] สำหรับสลับ/เลือกช่องสกิล
  2. ใน `src/main.ts`:
     - นำเข้าฟังก์ชันจาก `./ui/battle_view` ได้แก่ `renderBattleViewHtml`, `adapt1v1BattleData`, `adapt2v2BattleData`, `battleViewState`, `bindBattleViewEvents`, `computeTurnOrderTimeline`, `renderTurnOrderTimelineHtml`, `renderPartyMemberCardHtml`, `render1v1ArenaHtml`, `render2v2GridArenaHtml`, `renderTargetInfoPanelHtml`, `renderCombatLogPanelHtml`, `renderBattleBottomHudHtml`
     - ยกเลิกฟังก์ชัน Graybox เดิม และปรับ `renderBattleScreen` ให้แปลงข้อมูลผ่าน Data Adapter และเรนเดอร์โครงสร้าง MMORPG ทั้ง 5 พื้นที่ลงบนหน้าจอ
     - ผูกฟังก์ชัน `updateArenaUI` และ `updateArena2v2UI` ให้รีเฟรชข้อมูลสถานะ Real-time: แถบ HP/SP/เกจ, ตัวเลขศัตรู/ปาร์ตี้คงเหลือ, ไทม์ไลน์ Ribbon ความเร็ว, การ์ดปาร์ตี้, ข้อมูลเป้าหมายพร้อมแถบคำนวณแพ้ชนะธาตุแบบสด, บันทึกการต่อสู้ 3 แท็บ (ต่อสู้, ระบบ, รางวัล), และแถบสกิล Hotbar ด้านล่าง
     - เชื่อมต่อการทำความสะอาด Event (`cleanupBattleEvents`) เมื่อออกจากหน้าจอต่อสู้ เพื่อป้องกันปัญหา Memory Leak
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run typecheck`: 0 Errors (100% ผ่าน)
  - `npm run test:battle-ui`: 30/30 หมวดการทดสอบผ่านฉลุย (100%)
  - `npm run test:save`: ผ่าน 6/6 (100%)
  - `npm run test:campaign`: ผ่านครบ 10 ด่าน (100%)
  - `npm run test:skills`: ผ่าน 7/7 (100%)
  - `npm run test:roster`: ผ่าน 6/6 (100%)
  - `npm run test:pet-state`: ผ่าน 8/8 (100%)
  - `npm run test:skill-state`: ผ่าน 14/14 (100%)
  - `npm run build`: Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/main.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #056] — วันที่ 2026-11-04 เวลา 09:40:00
- **คำสั่งจาก Game Director:** "ในหน้าจอต่อสู้ ตรงส่วนที่ผมส่งไป ภาพที่ 1 ให้ตัดระบบเล็งศัตรูออก ทั้ง 1v1 และ 2v2 (ระบบ 1v1 ไม่จำเป็นต้องเล็งอยู่แล้ว ส่วน 2v2 มีระบบคำนวณระยะการโจมตีอยู่แล้ว)"
- **การวิเคราะห์และความต้องการ (Requirement Analysis):**
  - ในเกม RPG Auto Turn-Based ระบบ 1v1 มีคู่ปะทะฝั่งละ 1 ตัวในสนามโดยตรง ส่วนระบบ 2v2 กระดาน Tactical Grid มี Combat Engine คำนวณระยะโจมตีและลำดับเป้าหมาย (Front-line / Closest / Taunt) แบบอัตโนมัติอยู่แล้ว
  - การมีระบบแมนนวลให้คลิกเล็งเป้า พร้อมป้าย `🎯 เล็งเป้า`, กรอบเรืองแสงสีแดงกระพริบ, และแผง `🎯 ข้อมูลเป้าหมาย` ที่มีปุ่ม `✕ ปลดเป้าหมาย` จึงขัดแย้งกับหลักการต่อสู้อัตโนมัติและไม่จำเป็นต่อการเล่น
  - Game Director เลือกแนวทาง: ตัดแผงข้อมูลเป้าหมาย (Area 4) ออกทั้งหมด เพื่อให้พื้นที่ด้านขวาแสดงเฉพาะ Combat Log แบบเต็มความสูง และตัดป้าย 🎯 เล็งเป้า / กรอบแดงในสนามออกทั้งหมด
- **การปรับปรุงและแก้ไข (Implementation Details):**
  1. **นำการแสดงผลเป้าเล็งและกรอบแดงออกจากสนามต่อสู้ (Area 3):**
     - ใน `src/ui/battle_view.ts` ฟังก์ชัน `renderArenaUnitHtml`: ปลดป้าย `<div class="target-reticle-crosshair">🎯 เล็งเป้า</div>` และตัดคลาส `targeted-enemy` ออกจากโหนดนักสู้ในสนามรบ
     - ใน `render1v1ArenaHtml` และ `render2v2GridArenaHtml`: ยกเลิกการส่งค่า `isTargeted` เข้าสู่การเรนเดอร์นักสู้
     - ใน `bindBattleArenaEvents`: หากคลิกกล่องศัตรูฝั่ง B จะไม่มีการเรียก `setBattleTarget` และไม่มีการใส่คลาส `targeted-enemy`
     - ใน `bindTopHudEvents`: การคลิก Badge ศัตรูในไทม์ไลน์ Ribbon จะไม่ตั้งค่า `setBattleTarget`
     - ใน `src/style.css`: ปิดการแสดงผล `.target-reticle-crosshair` ด้วย `display: none !important;` และปลดแอนิเมชันกรอบสีแดงของ `.arena-unit-box.targeted-enemy`
  2. **ตัดแผงข้อมูลเป้าหมาย (Area 4) ออกจาก Layout หลัก และขยาย Combat Log (Area 5A):**
     - ใน `src/ui/battle_view.ts` ฟังก์ชัน `renderBattleViewHtml`: ตัด `${targetInfoHtml}` ออกจากแผงขวา `<aside class="battle-side-panel">` โดยให้คงไว้เฉพาะ `${combatLogHtml}` (Tabbed Combat Log)
     - ใน `src/style.css`: ขยาย `.combat-log-panel-box` ให้ใช้พื้นที่เต็มความสูงของแถบขวา (`min-height: 480px`, `height: 100%`) และขยาย `.log-scroll-view` ให้มีพื้นที่เลื่อนอ่านบันทึกกว้างขวาง (`min-height: 420px`, `max-height: calc(100vh - 280px)`)
     - รองรับการพับ/ขยายแถบขวาด้วย `.log-collapsed` อย่างกลมกลืน
  3. **ปรับปรุง Runtime หลักใน `src/main.ts`:**
     - ยกเลิกตรรกะ Auto-target ใน `renderBattleScreen`, `updateArenaUI`, และ `updateArena2v2UI`
     - ตัดการอ้างอิงและการเรนเดอร์ `#target-info-panel-box` ออกจากการอัปเดตสด
  4. **ปรับปรุงชุดทดสอบใน `src/sim/test_battle_ui_state.ts`:**
     - อัปเดตการตรวจเช็คในหมวด 11, หมวด 14, หมวด 18 และหมวด 21 ให้ยืนยันว่าไม่มีป้าย `🎯 เล็งเป้า` ในสนาม และไม่มีแผง Area 4 ในเลย์เอาต์หลักตามคำสั่ง Game Director
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.75s)
  - Vite Dev Server: กำลังทำงานและ Hot Reload เรียบร้อยบน `http://localhost:5174/`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/main.ts`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #057] — วันที่ 2026-11-04 เวลา 10:15:00
- **คำสั่งจาก Game Director:**
  1. ปิดแท็บ รางวัล ออก (น่าจะไม่ได้ใช้)
  2. นำข้อความที่แสดงในระบบ ย้ายไปที่ช่องต่อสู้ และ ปิดแท็บ ระบบออก
  3. แยกสีของข้อความ log ต่อสู้ โดยให้สีฟ้าเป็นแอคชั่นฝ่ายเรา สีส้มเป็นแอคชั่นฝ่ายศัตรู การออกท่าไม้ตายให้สีทองเป็นแอคชั่นฝ่ายเรา สีม่วงอ่อน ให้เป็นแอคชั่นของฝ่ายศัตรู
- **การวิเคราะห์และแก้ไข (Implementation Details):**
  1. **รวมข้อความและปิดแท็บรางวัลและระบบ:**
     - ใน `src/ui/battle_view.ts` ฟังก์ชัน `renderCombatLogPanelHtml`: ปลดแท็บ `⚙️ ระบบ` และ `🎁 รางวัล` ออกจาก Header โดยแสดงแท็บเดี่ยวที่รวมข้อความทั้งหมด `⚔️ ต่อสู้ (${displayLogs.length})`
     - นำข้อความจากระบบทั้งหมด (ทั้งการเริ่มเทิร์น, การทำงานของ Ability, การสลับตัว, สถานะ ฯลฯ) มารวมแสดงในช่องต่อสู้โดยตรงอย่างต่อเนื่องตามลำดับเวลา
  2. **ระบบวิเคราะห์และแยกสีข้อความ Combat Log 4 รูปแบบหลัก:**
     - พัฒนาฟังก์ชัน `classifyCombatLogRow(log)` ใน `src/ui/battle_view.ts`: ตรวจสอบฝ่ายผู้กระทำ (`actorSide: 'A' | 'B'`) และประเภทแอ็กชัน (`actionType: 'signature'`) อย่างแม่นยำ พร้อม Fallback ตรวจจับชื่อฮีโร่และศัตรูจากฐานข้อมูล
     - ออกแบบสไตล์ CSS ใน `src/style.css`:
       - **แอคชั่นฝ่ายเรา (สีฟ้า):** `.log-side-player` ตัวหนังสือสีฟ้า `#81d4fa`, แถบซ้าย `#29b6f6`, แบ็กดรอปฟ้าจาง
       - **แอคชั่นฝ่ายศัตรู (สีส้ม):** `.log-side-enemy` ตัวหนังสือสีส้ม `#ffcc80`, แถบซ้าย `#ff9800`, แบ็กดรอปส้มจาง
       - **ท่าไม้ตายฝ่ายเรา (สีทอง):** `.log-side-player-sig` ตัวหนังสือสีทองเรืองแสง `#fff9c4`, แถบซ้ายทอง `#ffd54f`, แบ็กดรอปไล่เฉดทองอร่าม พร้อมประกายเงา `text-shadow`
       - **ท่าไม้ตายฝ่ายศัตรู (สีม่วงอ่อน):** `.log-side-enemy-sig` ตัวหนังสือสีม่วงอ่อนเรืองแสง `#f3e5f5`, แถบซ้ายม่วง `#ba68c8`, แบ็กดรอปไล่เฉดม่วง พร้อมประกายเงา `text-shadow`
       - **ข้อความแจ้งเตือนระบบทั่วไป (สีเงิน):** `.log-side-neutral` ตัวหนังสือสีเงิน `#cfd8dc`, แถบซ้ายเทา `#78909c`
  3. **การทดสอบและการตรวจสอบ:**
     - อัปเดต `src/sim/test_battle_ui_state.ts` หมวด 11 และ 24 ให้ตรวจสอบการปิดแท็บและการใส่คลาสสีทั้ง 4 รูปแบบ
     - รันชุดทดสอบ `test:battle-ui`, `typecheck`, และ `build` ผ่าน 100% 0 errors
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.42s)
  - Vite Dev Server: กำลังทำงานและ Hot Reload เรียบร้อยบน `http://localhost:5174/`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`


---

## [Backup #053] — วันที่ 2026-11-04 เวลา 00:12:00
- **คำสั่งจาก Game Director:** ปรับแต่งสนามประลอง 1v1: "ไม่ต้องแสดงสัตว์ ตัวสำรองในสนามต่อสู้ครับ (1v1)"
- **สาเหตุและการวิเคราะห์ (Root Cause & UX Analysis):**
  - ในระบบเดิมของโหมด 1v1 Tag Relay กล่องตัวสำรองของฝ่ายผู้เล่นและฝ่ายศัตรู (`.backup-fighter-anchor`) ถูกเรนเดอร์อยู่ด้านล่างของตัวละครหลักในสนามรบ (Area 3) ทำให้เวทีต่อสู้มีความซ้ำซ้อน เนื่องจากข้อมูลสัตว์ตัวสำรองและสถานะ HP/SP/เกจ ถูกจัดแสดงอย่างเป็นระเบียบอยู่แล้วใน Party Status Panel (Area 2 ด้านซ้าย) และสามารถกดสลับตัวผ่านปุ่ม Swap Hero (Area 5B ด้านล่าง)
  - การถอดตัวสำรองออกจากเวทีกลาง (Area 3) ช่วยให้โฟกัสการปะทะแบบ 1v1 ระหว่างตัวหลัก 2 ตัวมีความเด่นชัด สง่างาม สบายตา และเป็นไปตามวิสัยทัศน์ของ Game Director
- **การแก้ไขและปรับปรุง (Implementation Details):**
  1. ใน `src/ui/battle_view.ts`:
     - ปรับฟังก์ชัน `render1v1ArenaHtml` ให้เพิ่มพารามิเตอร์ `showBackup = false` เป็นค่าเริ่มต้น โดยค่าตั้งต้นจะไม่เรนเดอร์บล็อก `.backup-fighter-anchor` ของทั้งฝั่งผู้เล่นและฝั่งศัตรู
     - ปรับ `BattleArenaConfig` ให้รองรับออปชัน `showBackup?: boolean` เพื่อความยืดหยุ่นในการเรียกใช้งาน
  2. ใน `src/sim/test_battle_ui_state.ts`:
     - อัปเดตการทดสอบหมวด 19 ให้ตรวจสอบว่าสนาม 1v1 มาตรฐานต้องไม่ปรากฏบล็อกตัวสำรอง (`assert(!arena1v1Html.includes('backup-fighter-anchor'))`)
     - เพิ่มการทดสอบยืนยันว่าเมื่อเปิดตัวเลือก `showBackup = true` จึงจะแสดงบล็อกตัวสำรอง
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run typecheck`: ผ่าน 0 Errors (100%)
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run test:save`: ผ่าน 6/6 (100%)
  - `npm run test:campaign`: ผ่านครบ 10/10 ด่าน (100%)
  - `npm run test:skills`: ผ่าน 7/7 (100%)
  - `npm run test:roster`: ผ่าน 6/6 (100%)
  - `npm run test:pet-state`: ผ่าน 8/8 (100%)
  - `npm run test:skill-state`: ผ่าน 14/14 (100%)
  - `npm run build`: Production Build สำเร็จ 100% (760ms)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`


---

## [Backup #054] — วันที่ 2026-11-04 เวลา 00:25:00
- **คำสั่งจาก Game Director:** "แก้ไขเกจสะสมท่าไม้ตาย ที่ยังสะสมไม่เต็ม แต่สามารถใช้งานได้แล้ว" (พร้อมภาพถ่ายหน้าจอปุ่มเกจแสดง 68/100 (68%) แต่มีป้าย [Space] และกดปล่อยไม้ตายได้)
- **สาเหตุที่ตรวจพบ (Root Cause Analysis):**
  1. ใน `src/main.ts` ฟังก์ชัน `isPlayerSigReadyNextTurn()` เดิมมีการคำนวณล่วงหน้าโดยนำ `activeA.gauge + sigCfg.gainPerTurn >= 100` มาประเมิน ทำให้เมื่อเกจอยู่ที่ 68% ระบบประเมินว่าเทิร์นหน้าจะได้อีก 34 รวมเป็น 102 (เกิน 100) จึงสั่งหยุดรบชั่วคราว (`waitingForManualSig = true`) และแสดงแบนเนอร์แจ้งเตือนให้กดใช้ไม้ตายทันที ทั้งๆ ที่เกจบนหน้าจอยังแสดงแค่ 68%
  2. ใน `src/ui/battle_view.ts` ฟังก์ชัน `renderSignatureCastButtonHtml` มีการเรนเดอร์ป้ายคีย์ลัด `<span class="sig-key-badge">[Space]</span>` ค้างไว้ตลอดเวลา ไม่ได้ตรวจสอบว่า `isReady` (เกจเต็ม 100%) หรือไม่ ทำให้ผู้เล่นเห็นปุ่ม [Space] ปรากฏอยู่บนปุ่มที่ยังสะสมไม่เต็ม
  3. ใน Event Listeners ทั้งของคลิกปุ่ม `#btn-manual-sig-cast` และคีย์ลัดแป้นพิมพ์ `[Space]` ใน `bindBattleViewEvents` ไม่ได้ตรวจเช็กเงื่อนไขว่าเกจต้อง `>= 100` และปุ่มต้องไม่ติด `disabled` หรือคลาส `charging` ทำให้การกด [Space] หรือการทริกเกอร์อีเวนต์ทะลุผ่านไปคิวท่าไม้ตายได้แม้เกจจะมีแค่ 68%
  4. ใน `src/main.ts` ฟังก์ชัน `onCastSignature` ไม่มีการเช็กเงื่อนไข `activeA.gauge >= 100` ก่อนรับคำสั่ง
  5. ใน `src/engine/combat.ts` การเพิ่มเกจต่อเทิร์น `att.gauge += sigCfg.gainPerTurn` ไม่มีการจำกัดเพดาน `Math.min(100, ...)`
- **การแก้ไขและปรับปรุง (Implementation Details):**
  1. ใน `src/ui/battle_view.ts`:
     - ปรับ `renderSignatureCastButtonHtml`: ให้แสดงป้ายคีย์ลัด `${isReady ? '<span class="sig-key-badge">[Space]</span>' : ''}` เฉพาะเมื่อ `isReady` (เกจครบ 100% และตัวละครไม่สลบ) เท่านั้น หากเกจยังไม่เต็มจะไม่ปรากฏป้าย [Space] โดยเด็ดขาด
     - ปรับข้อความ Tooltip เมื่อเกจยังไม่เต็มให้ระบุชัดเจนว่า "— ยังไม่พร้อมใช้งาน"
     - ปรับ `bindBattleViewEvents`: ทั้งการกดคลิกปุ่มและคีย์ลัด `[Space]` จะต้องตรวจสอบว่าปุ่มมีคลาส `.is-ready` และไม่ติด `disabled` เท่านั้น หากเกจยังไม่เต็มจะเพิกเฉยต่อการกด [Space] ทันที
     - ปรับ `bindBattleBottomHudEvents`: ตรวจสอบสถานะ `sigBtn.disabled` ก่อนส่งต่อ Event
  2. ใน `src/main.ts`:
     - เปลี่ยนฟังก์ชัน `isPlayerSigReadyNextTurn()` เป็น `isPlayerSigReady()` โดยตรวจเช็กอย่างเคร่งครัด: `activeA.gauge >= 100` เท่านั้น (ตัดการบวก gainPerTurn ล่วงหน้าออกทั้งหมด)
     - ปรับ `scheduleNextTick`: หยุดถามโหมด Manual เฉพาะเมื่อ `isPlayerSigReady()` (เกจเต็ม 100% จริง) เท่านั้น
     - ปรับ `onCastSignature`: ตรวจสอบ `if (activeA.gauge < 100) return;` ป้องกันการลัดคิวท่าไม้ตายเมื่อเกจยังไม่เต็ม
     - ปรับแบนเนอร์แจ้งเตือนกลางสนาม (`bannerArea`): แสดงข้อความพร้อมปุ่มปลดปล่อยเฉพาะเมื่อ `activeHero.gauge >= 100` เท่านั้น
  3. ใน `src/engine/combat.ts`:
     - ปรับ `executeAction`: เพิ่ม `att.gauge = Math.min(100, att.gauge + sigCfg.gainPerTurn);` ป้องกันค่าเกจสะสมล้นเกิน 100
  4. ใน `src/sim/test_battle_ui_state.ts`:
     - เพิ่ม Unit Test ตรวจสอบว่าปุ่มสถานะกำลังสะสม (`charging`) จะต้องไม่ปรากฏป้าย `[Space]` โดยเด็ดขาด
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run typecheck`: ผ่าน 0 Errors (100%)
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run test:save`: ผ่าน 6/6 (100%)
  - `npm run test:campaign`: ผ่านครบ 10/10 ด่าน (100%)
  - `npm run test:skills`: ผ่าน 7/7 (100%)
  - `npm run test:roster`: ผ่าน 6/6 (100%)
  - `npm run test:pet-state`: ผ่าน 8/8 (100%)
  - `npm run test:skill-state`: ผ่าน 14/14 (100%)
  - `npm run build`: Production Build สำเร็จ 100% (799ms)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/main.ts`
  - `src/engine/combat.ts`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`


---

## [Backup #055] — วันที่ 2026-11-04 เวลา 00:45:00
- **คำสั่งจาก Game Director:** "3. ปรับในส่วนของผลการลดของหลอด hp,sp ที่ระบบทำการลดก่อน ที่จะมีเอฟเฟคการโจมตีครับ ซึ่งทำให้ไม่สอดคล้องและดูไม่สมจริงครับ"
- **สาเหตุที่ตรวจพบ (Root Cause Analysis):**
  1. ใน `src/main.ts` ฟังก์ชัน `animateTurnEvent` เดิม มีการกำหนด `currentSnap = ev.snapshot;` และเรียก `updateArenaUI();` ทันทีตั้งแต่ช่วงเริ่มต้นของฟังก์ชัน (หลังพุ่งตัวเพียง 140ms ก่อนที่เอฟเฟกต์การโจมตีจะเกิด)
  2. การเรียก `updateArenaUI()` ล่วงหน้า ส่งผลให้ `arena-field-grid.innerHTML` ถูกเขียนทับใหม่ทั้งหมดก่อนเกิดเอฟเฟกต์ หลอด HP ของเป้าหมายและ SP ของผู้ร่ายจึงถูกเปลี่ยนค่าและลดลงในทันทีตั้งแต่การโจมตียังไม่กระทบเป้าหมาย
  3. นอกจากนี้ การแทนที่ `innerHTML` ยังทำให้ DOM Node เดิมของตัวละครถูกทำลาย ส่งผลให้ CSS Transition (`transition: width 0.25s ease`) ไม่สามารถแสดงผลได้อย่างต่อเนื่อง (หลอดตัดวูบลงทันที) และคลาสแอนิเมชันพุ่งตัว (`lunge-right`/`lunge-left`) หลุดหายไปก่อนเวลาอันควร
  4. ใน `src/ui/battle_view.ts` ฟังก์ชัน `adapt1v1BattleData` เดิมอ่านค่า HP/SP จาก `session.teamA.fighters` และ `session.teamB.fighters` ที่ถูก Engine คำนวณไปจนจบเทิร์นแล้ว ทำให้ไม่สามารถสะท้อนค่าสเตตัสใน Snapshot ระหว่างเทิร์นได้อย่างถูกต้อง
- **การแก้ไขและปรับปรุง (Implementation Details):**
  1. **ปรับปรุงโครงสร้าง `adapt1v1BattleData` ใน `src/ui/battle_view.ts`:**
     - อัปเกรดให้อ่านค่า HP, SP, Shield, Gauge, Effects จาก Snapshot (`currentSnap`) ในระหว่างแอนิเมชันเทิร์น เพื่อให้สถานะของตัวละครทุกตัวตรงกับจังหวะเวลาจริงของอีเวนต์นั้นๆ
     - รักษาความเข้ากันได้ย้อนหลัง 100% สำหรับการทดสอบที่มีอยู่เดิม
     - ปรับโครงสร้าง HTML ของหลอด Shield ใน `renderArenaUnitHtml`, `renderPartyMemberCardHtml`, และ `renderTargetInfoPanelHtml` ให้มีโหนดอยู่ใน DOM สม่ำเสมอและควบคุมการแสดงผลด้วย `display: none` เพื่อรองรับการอัปเดตแบบเรียลไทม์
  2. **พัฒนาระบบ In-Place DOM Bar Update ใน `src/main.ts`:**
     - เพิ่มฟังก์ชัน `updateUnitOverheadDom`, `updatePartyCardBarsDom`, `updateTargetCardBarsDom`, และ `updateBottomHudBarsDom` เพื่ออัปเดตค่าเปอร์เซ็นต์ความกว้าง `width`, สีหลอด, และตัวเลขลงบน DOM Node เดิมโดยตรง
     - การอัปเดตผ่าน Node เดิมทำให้ CSS `transition: width 0.25s ease` ทำงานได้อย่างสมบูรณ์แบบ หลอด HP และ SP จะค่อยๆ เลื่อนลดลงอย่างนุ่มนวลและสวยงาม
     - รวมศูนย์การอัปเดตไว้ในฟังก์ชัน `applySnapshotBarsToDOM(snap)`
  3. **จัดลำดับแอนิเมชันการต่อสู้ 3 จังหวะ (Combat Choreography) ใน `src/main.ts`:**
     - **จังหวะที่ 1 (Telegraph & Windup):** ผู้โจมตีพุ่งตัวเข้าหาเป้าหมาย (`lunge-right`/`lunge-left`) พร้อมแสดงป้ายชื่อสกิลเหนือหัวผู้ร่าย โดยที่หลอด HP/SP ยังคงค่าเดิมก่อนถูกโจมตี (หน่วงเวลา `200 / speedDiv`)
     - **จังหวะที่ 2 (Hit Impact & Bar Deduction):** เมื่อผู้โจมตีถึงตัวเป้าหมาย เกิดเอฟเฟกต์การโจมตี (Hit Flash บนตัวเป้าหมาย, สั่นหน้าจอ Screen Shake, ตัวเลขดาเมจลอยขึ้น Floating Combat Text) และ **ณ วินาทีนี้เอง** ระบบจะอัปเดต `currentSnap = ev.snapshot`, เรียก `applySnapshotBarsToDOM(currentSnap)` ให้หลอด HP ของเป้าหมายและ SP ของผู้ร่ายลดลงอย่างนุ่มนวลพร้อมกับเอฟเฟกต์การโจมตีพอดีเป๊ะ
     - **จังหวะที่ 3 (Impact Recovery & Recoil):** คงท่าปะทะให้ผู้เล่นรับรู้ผลลัพธ์ของดาเมจ (`280 / speedDiv`) จากนั้นดึงตัวละครผู้โจมตีกลับตำแหน่งเดิม (`120 / speedDiv`) และปลด Hit Flash ก่อนเรียก `updateArenaUI()` เพื่อสรุปผลเทิร์น
  4. **ปรับปรุงอีเวนต์ประเภทอื่น (Status DoT, Skip, Swap, Ability):**
     - อีเวนต์ความเสียหายจากสถานะ DoT / สับสน จะกระพริบตัวละครและแสดงตัวเลขดาเมจก่อนหลอดลดลงพร้อมกัน
     - อีเวนต์การสลับตัว (Swap) และข้ามเทิร์น (Skip) ดำเนินการอย่างราบรื่น
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run typecheck`: ผ่าน 0 Errors (100%)
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run test:save`: ผ่านครบ 6/6 (100%)
  - `npm run test:campaign`: ผ่านครบ 10/10 ด่าน (100%)
  - `npm run test:skills`: ผ่านครบ 7/7 (100%)
  - `npm run test:roster`: ผ่านครบ 6/6 (100%)
  - `npm run test:pet-state`: ผ่านครบ 8/8 (100%)
  - `npm run test:skill-state`: ผ่านครบ 14/14 (100%)
  - `npm run build`: Production Build สำเร็จ 100% (850ms)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/main.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #056] — วันที่ 2026-11-04 เวลา 09:40:00
- **คำสั่งจาก Game Director:** "ในหน้าจอต่อสู้ ตรงส่วนที่ผมส่งไป ภาพที่ 1 ให้ตัดระบบเล็งศัตรูออก ทั้ง 1v1 และ 2v2 (ระบบ 1v1 ไม่จำเป็นต้องเล็งอยู่แล้ว ส่วน 2v2 มีระบบคำนวณระยะการโจมตีอยู่แล้ว)"
- **การวิเคราะห์และความต้องการ (Requirement Analysis):**
  - ในเกม RPG Auto Turn-Based ระบบ 1v1 มีคู่ปะทะฝั่งละ 1 ตัวในสนามโดยตรง ส่วนระบบ 2v2 กระดาน Tactical Grid มี Combat Engine คำนวณระยะโจมตีและลำดับเป้าหมาย (Front-line / Closest / Taunt) แบบอัตโนมัติอยู่แล้ว
  - การมีระบบแมนนวลให้คลิกเล็งเป้า พร้อมป้าย `🎯 เล็งเป้า`, กรอบเรืองแสงสีแดงกระพริบ, และแผง `🎯 ข้อมูลเป้าหมาย` ที่มีปุ่ม `✕ ปลดเป้าหมาย` จึงขัดแย้งกับหลักการต่อสู้อัตโนมัติและไม่จำเป็นต่อการเล่น
  - Game Director เลือกแนวทาง: ตัดแผงข้อมูลเป้าหมาย (Area 4) ออกทั้งหมด เพื่อให้พื้นที่ด้านขวาแสดงเฉพาะ Combat Log แบบเต็มความสูง และตัดป้าย 🎯 เล็งเป้า / กรอบแดงในสนามออกทั้งหมด
- **การปรับปรุงและแก้ไข (Implementation Details):**
  1. **นำการแสดงผลเป้าเล็งและกรอบแดงออกจากสนามต่อสู้ (Area 3):**
     - ใน `src/ui/battle_view.ts` ฟังก์ชัน `renderArenaUnitHtml`: ปลดป้าย `<div class="target-reticle-crosshair">🎯 เล็งเป้า</div>` และตัดคลาส `targeted-enemy` ออกจากโหนดนักสู้ในสนามรบ
     - ใน `render1v1ArenaHtml` และ `render2v2GridArenaHtml`: ยกเลิกการส่งค่า `isTargeted` เข้าสู่การเรนเดอร์นักสู้
     - ใน `bindBattleArenaEvents`: หากคลิกกล่องศัตรูฝั่ง B จะไม่มีการเรียก `setBattleTarget` และไม่มีการใส่คลาส `targeted-enemy`
     - ใน `bindTopHudEvents`: การคลิก Badge ศัตรูในไทม์ไลน์ Ribbon จะไม่ตั้งค่า `setBattleTarget`
     - ใน `src/style.css`: ปิดการแสดงผล `.target-reticle-crosshair` ด้วย `display: none !important;` และปลดแอนิเมชันกรอบสีแดงของ `.arena-unit-box.targeted-enemy`
  2. **ตัดแผงข้อมูลเป้าหมาย (Area 4) ออกจาก Layout หลัก และขยาย Combat Log (Area 5A):**
     - ใน `src/ui/battle_view.ts` ฟังก์ชัน `renderBattleViewHtml`: ตัด `${targetInfoHtml}` ออกจากแผงขวา `<aside class="battle-side-panel">` โดยให้คงไว้เฉพาะ `${combatLogHtml}` (Tabbed Combat Log)
     - ใน `src/style.css`: ขยาย `.combat-log-panel-box` ให้ใช้พื้นที่เต็มความสูงของแถบขวา (`min-height: 480px`, `height: 100%`) และขยาย `.log-scroll-view` ให้มีพื้นที่เลื่อนอ่านบันทึกกว้างขวาง (`min-height: 420px`, `max-height: calc(100vh - 280px)`)
     - รองรับการพับ/ขยายแถบขวาด้วย `.log-collapsed` อย่างกลมกลืน
  3. **ปรับปรุง Runtime หลักใน `src/main.ts`:**
     - ยกเลิกตรรกะ Auto-target ใน `renderBattleScreen`, `updateArenaUI`, และ `updateArena2v2UI`
     - ตัดการอ้างอิงและการเรนเดอร์ `#target-info-panel-box` ออกจากการอัปเดตสด
  4. **ปรับปรุงชุดทดสอบใน `src/sim/test_battle_ui_state.ts`:**
     - อัปเดตการตรวจเช็คในหมวด 11, หมวด 14, หมวด 18 และหมวด 21 ให้ยืนยันว่าไม่มีป้าย `🎯 เล็งเป้า` ในสนาม และไม่มีแผง Area 4 ในเลย์เอาต์หลักตามคำสั่ง Game Director
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.75s)
  - Vite Dev Server: กำลังทำงานและ Hot Reload เรียบร้อยบน `http://localhost:5174/`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/main.ts`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #057] — วันที่ 2026-11-04 เวลา 10:15:00
- **คำสั่งจาก Game Director:**
  1. ปิดแท็บ รางวัล ออก (น่าจะไม่ได้ใช้)
  2. นำข้อความที่แสดงในระบบ ย้ายไปที่ช่องต่อสู้ และ ปิดแท็บ ระบบออก
  3. แยกสีของข้อความ log ต่อสู้ โดยให้สีฟ้าเป็นแอคชั่นฝ่ายเรา สีส้มเป็นแอคชั่นฝ่ายศัตรู การออกท่าไม้ตายให้สีทองเป็นแอคชั่นฝ่ายเรา สีม่วงอ่อน ให้เป็นแอคชั่นของฝ่ายศัตรู
- **การวิเคราะห์และแก้ไข (Implementation Details):**
  1. **รวมข้อความและปิดแท็บรางวัลและระบบ:**
     - ใน `src/ui/battle_view.ts` ฟังก์ชัน `renderCombatLogPanelHtml`: ปลดแท็บ `⚙️ ระบบ` และ `🎁 รางวัล` ออกจาก Header โดยแสดงแท็บเดี่ยวที่รวมข้อความทั้งหมด `⚔️ ต่อสู้ (${displayLogs.length})`
     - นำข้อความจากระบบทั้งหมด (ทั้งการเริ่มเทิร์น, การทำงานของ Ability, การสลับตัว, สถานะ ฯลฯ) มารวมแสดงในช่องต่อสู้โดยตรงอย่างต่อเนื่องตามลำดับเวลา
  2. **ระบบวิเคราะห์และแยกสีข้อความ Combat Log 4 รูปแบบหลัก:**
     - พัฒนาฟังก์ชัน `classifyCombatLogRow(log)` ใน `src/ui/battle_view.ts`: ตรวจสอบฝ่ายผู้กระทำ (`actorSide: 'A' | 'B'`) และประเภทแอ็กชัน (`actionType: 'signature'`) อย่างแม่นยำ พร้อม Fallback ตรวจจับชื่อฮีโร่และศัตรูจากฐานข้อมูล
     - ออกแบบสไตล์ CSS ใน `src/style.css`:
       - **แอคชั่นฝ่ายเรา (สีฟ้า):** `.log-side-player` ตัวหนังสือสีฟ้า `#81d4fa`, แถบซ้าย `#29b6f6`, แบ็กดรอปฟ้าจาง
       - **แอคชั่นฝ่ายศัตรู (สีส้ม):** `.log-side-enemy` ตัวหนังสือสีส้ม `#ffcc80`, แถบซ้าย `#ff9800`, แบ็กดรอปส้มจาง
       - **ท่าไม้ตายฝ่ายเรา (สีทอง):** `.log-side-player-sig` ตัวหนังสือสีทองเรืองแสง `#fff9c4`, แถบซ้ายทอง `#ffd54f`, แบ็กดรอปไล่เฉดทองอร่าม พร้อมประกายเงา `text-shadow`
       - **ท่าไม้ตายฝ่ายศัตรู (สีม่วงอ่อน):** `.log-side-enemy-sig` ตัวหนังสือสีม่วงอ่อนเรืองแสง `#f3e5f5`, แถบซ้ายม่วง `#ba68c8`, แบ็กดรอปไล่เฉดม่วง พร้อมประกายเงา `text-shadow`
       - **ข้อความแจ้งเตือนระบบทั่วไป (สีเงิน):** `.log-side-neutral` ตัวหนังสือสีเงิน `#cfd8dc`, แถบซ้ายเทา `#78909c`
  3. **การทดสอบและการตรวจสอบ:**
     - อัปเดต `src/sim/test_battle_ui_state.ts` หมวด 11 และ 24 ให้ตรวจสอบการปิดแท็บและการใส่คลาสสีทั้ง 4 รูปแบบ
     - รันชุดทดสอบ `test:battle-ui`, `typecheck`, และ `build` ผ่าน 100% 0 errors
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100% (Built in 4.42s)
  - Vite Dev Server: กำลังทำงานและ Hot Reload เรียบร้อยบน `http://localhost:5174/`
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`


---

## [Backup #058] — วันที่ 2026-11-04 เวลา 10:48:00
- **คำสั่งจาก Game Director:** "ขอปรับความเป็นระเบียบของตัวเลขดาเมจ ตัวเลขสถานะที่แสดงในหน้าจอต่อสู้ครับ ให้ใช้ font ที่ดูเหมาะสมกับระบบเกมส์ จัดข้อความตำแหน่งให้ดูง่าย สบายตา ให้แสดงอยู่ด้านบนของตัวละคร แสดงไอค่อนและสถานะอย่างชัดเจน ตัดข้อความ 'ปาร์ตี้ฝ่ายเรา' และ 'ทีมศัตรูออก' และตัดข้อความแสดงสายของตัวละครและศัตรูที่อยู่ด้านล่างของตัวละครออกด้วยครับ"
- **การวิเคราะห์และแก้ไข (Implementation Details):**
  1. **อัปเกรดฟอนต์ระบบเกม (Game Typography System):**
     - เพิ่ม Google Fonts `'Chakra Petch'` (500, 600, 700) และ `'Kanit'` (500, 600, 700, 800, 900) ใน `index.html`
     - กำหนดตัวแปร `--font-game-ui` และ `--font-game-num` พร้อม `font-variant-numeric: tabular-nums` ใน `src/style.css` เพื่อให้ตัวเลขทุกจุดเรียงหลักตรงกัน อ่านง่าย คมชัด และมีเอกลักษณ์เกม RPG
  2. **จัดระเบียบตัวเลขดาเมจและสถานะให้แสดงด้านบนของตัวละครอย่างชัดเจน:**
     - ย้าย `.floating-layer` จากเดิมที่ทับอยู่บนตัวละคร ไปแสดงที่ด้านบนเหนือกรอบตัวละคร (`bottom: calc(100% + 8px)`, `left: 50%`, `transform: translateX(-50%)`, `flex-direction: column-reverse`)
     - ปรับดีไซน์ `.float-item` (`.float-dmg`, `.float-crit`, `.float-heal`, `.float-shield`, `.float-miss`, `.float-ability`, `.float-status-buff`, `.float-status-debuff`) ให้เป็นทรงแคปซูลขอบมน พื้นหลังเข้มตัดขอบชัด ตัวอักษรมีเงา ขอบดำ 4 ทิศทาง และแสดงไอคอนกำกับชัดเจน (`⚔️`, `💥 CRIT!`, `💚`, `🛡️`, `💧`, `🔨`, `🧱`)
     - สร้างฟังก์ชัน `renderOverheadEffectsHtml` ใน `src/ui/battle_view.ts` และเชื่อมต่อกับ `.unit-overhead-effects` ด้านบนหลอด HP ของตัวละคร เพื่อแสดงไอคอนและชื่อสถานะบัฟ/ดีบัฟที่ติดอยู่พร้อมจำนวนเทิร์น (`🔥 เผาไหม้ 2T`, `⚔️ พลังโจมตี+ 3T`) อย่างชัดเจน และอัปเดตสดทันทีผ่าน `updateUnitOverheadDom` ใน `src/main.ts`
     - ปรับการแสดงผลตัวเลข HP เหนือหัวตัวละคร (`.unit-overhead-hp-text`) ให้มีไอคอน `❤️` นำหน้า ตัวเลขสีขาวคมชัด และป้ายโล่ `+🛡️` สีฟ้าสดใส
  3. **ตัดข้อความหัวข้อทีมและสายของตัวละครออกตามคำสั่ง:**
     - ตัด `<div class="squad-role-title">🛡️ ปาร์ตี้ฝ่ายเรา</div>` และ `<div class="squad-role-title">👾 ทีมศัตรู</div>` ออกจาก `render1v1ArenaHtml` (รวมถึง `.grid-squad-title` ใน `render2v2GridArenaHtml`)
     - ตัด `<div class="unit-role-label">` ที่แสดงไอคอนและชื่อสายอาชีพ (`⚔️ Striker`, `🛡️ Tank` ฯลฯ) ด้านล่างชื่อตัวละครและศัตรูใน `renderArenaUnitHtml` ออกทั้งหมด เหลือเพียงชื่อตัวละครที่สะอาดตา
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `index.html`
  - `src/ui/battle_view.ts`
  - `src/main.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`


---

## [Backup #059] — วันที่ 2026-11-04 เวลา 11:03:00
- **คำสั่งจาก Game Director:** "ต่อไป ปรับในส่วนของช่องแสดงข้อความ log ต่อสู้ ปรับไม่ให้ช่องแสดงผลยาวเกินบล็อคช่องต่อสู้ครับ"
- **การวิเคราะห์และแก้ไข (Implementation Details):**
  1. **สาเหตุของปัญหา:**
     - ใน `src/style.css` เดิมใช้ `.battle-main-stage-layout { align-items: start; }` ซึ่งทำให้บล็อคขวา (`.combat-log-panel-box`) ขยายความสูงอย่างอิสระตามขนาดเนื้อหา
     - ใน `.log-scroll-view` เดิมกำหนด `min-height: 420px; max-height: calc(100vh - 280px);` ซึ่งบนหน้าจอความละเอียดสูง จะขยายความสูงได้ถึง 650-800px เมื่อมีประวัติ log เพิ่มขึ้น ทำให้บล็อคขวายื่นยาวเกินขอบล่างของบล็อคช่องต่อสู้ตรงกลาง (`.battle-arena-stage` สูง ~460px)
  2. **การปรับปรุงและแก้ปัญหา:**
     - ใน `.battle-main-stage-layout`: เปลี่ยนเป็น `align-items: stretch;` เพื่อให้คอลัมน์ทั้งหมด (ปาร์ตี้, สนามต่อสู้, บันทึกการต่อสู้) อยู่ในระนาบเดียวกันและมีความสูงสิ้นสุดเสมอกัน
     - ใน `.battle-arena-stage`: กำหนดความสูงมาตรฐาน `height: 460px; max-height: 460px; min-height: 460px;` ให้เป็นแกนอ้างอิงความสูง (Height Anchor) ของสนามรบ
     - ใน `.party-status-panel` และ `.battle-side-panel`: กำหนด `height: 100%; max-height: 460px;`
     - ใน `.combat-log-panel-box`: ปรับเป็น `height: 100%; max-height: 460px; min-height: 0;`
     - ใน `.log-scroll-view`: ปรับเป็น `flex: 1 1 0; min-height: 0; max-height: 100%; overflow-y: auto;` เพื่อให้ข้อความทั้งหมดบรรจุและเลื่อนอ่านอยู่ภายในกล่อง ไม่ขยายดันกล่องให้ยาวเกินบล็อคช่องต่อสู้อีกต่อไป
     - เพิ่มการรองรับ Responsive บนจอหน้าจอแท็บเล็ต/มือถือ (`@media (max-width: 992px)`) ให้ปรับสัดส่วนได้อย่างยืดหยุ่นไม่ชนกัน
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด (100%)
  - `npm run typecheck`: ผ่าน 0 Error (100%)
  - `npm run build`: Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/style.css`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`


---

## [Backup #060] — วันที่ 2026-11-04 เวลา 11:37:00
- **คำสั่งจาก Game Director:** "ผ่านประตู 1 100% ครบถ้วน จากการยืนยันของผมเองครับ ก้าวเข้าสู่ เฟส 2 (Graybox Core Loop) ได้เลยครับ"
- **การวิเคราะห์และข้อสรุป (Phase 1 Gate Passed & Phase 2 Kickoff):**
  1. **การอนุมัติผ่าน ประตู 1 (Gate 1 Approved 100%):**
     - ผ่านการประเมินคำถามหลักทั้ง 5 ข้อของ Gate 1 อย่างสมบูรณ์:
       1. จังหวะไฟต์ 1v1 กระชับ อยู่ในกรอบ 30–90 วินาที
       2. ท่าไม้ตาย Signature มีผลพลิกเกมชัดเจน มีเอฟเฟกต์สะเทือนหน้าจอและภาพลักษณ์ระดับโปร
       3. การสลับตัวสำรองแก้ทางธาตุสร้างความได้เปรียบสูง (+30% ดาเมจ และฟื้นฟู SP ตัวสำรอง)
       4. การจัดชุดสกิล 4 ช่องสร้างความหลากหลายในสไตล์การเล่นจริง
       5. ภาพรวมการรบมีความลื่นไหล น่าตื่นเต้น และชวนให้กดเล่นไฟต์ถัดไป
  2. **ก้าวเข้าสู่ เฟส 2 — ลูปการเล่นครบ (Graybox Core Loop):**
     - เปิดใช้งานลูปเกมหลักอย่างเป็นทางการ:
       - **ด่านผจญภัย (Campaign):** 10 ด่าน 1v1 Tag Relay + ศัตรูมลทิน The Void + รางวัลผ่านด่าน
       - **ตู้ฟักไข่ (Incubator):** ฟักไข่ธรรมดา/ทองคำ ลุ้นรับสัตว์ใหม่สกิลว่าง 4 ช่อง หรือเศษวิญญาณ
       - **กระดานวิชาสกิล (Skill Board):** ปลดล็อกสกิล 16 สายวิชา ติดตั้งสกิล และพรีเซต
       - **พัฒนาสัตว์เลี้ยง (Progression):** อัปเลเวลด้วย Food และเลื่อนขั้นดาวด้วยเศษวิญญาณ
       - **เศรษฐกิจและระบบเซฟ (Economy & Save):** บันทึกสถานะอัตโนมัติลง localStorage
  3. **ผลการทดสอบเชิงลึกทุกระบบ (Full Regression Suite):**
     - `npm run test:save`: ผ่าน 6/6 หมวด (100%)
     - `npm run test:campaign`: ผ่าน 10/10 ด่าน (100%)
     - `npm run test:skills`: ผ่าน 7/7 หมวด (100%)
     - `npm run test:roster`: ผ่าน 6/6 หมวด (100%)
     - `npm run test:battle-ui`: ผ่าน 30/30 หมวด (100%)
     - `npm run typecheck`: ผ่าน 0 Error (100%)
     - `npm run build`: Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #061] — วันที่ 2026-11-04 เวลา 11:50:00
- **คำสั่งจาก Game Director:**
  1. ค่อยๆ ทดสอบทีละ 1 ด่านไปเรื่อยๆ (เริ่มที่ด่าน 1-1)
  2. ปรับอัตราดรอป รางวัลด่าน เพิ่มขึ้นเล็กน้อย พอไม่ง่ายไม่ยากเกินไป และปรับดรอป stat ของศัตรูลงเล็กน้อย (เฉพาะมอนสเตอร์ป่าทั่วไป) ให้พอรู้สึกว่าสู้ได้ แต่ก็จะเพิ่มความยากขึ้นเมื่อเข้าสู่ด่านต่อไปเรื่อยๆ
- **สิ่งที่ได้ดำเนินการปรับปรุง (Rebalance & Progressive Stage Testing):**
  1. **ปรับลด Base Stats มอนสเตอร์ป่า Void 10 ตัว (`src/data/enemies.json`):**
     - ปรับลด HP, ATK, DEF ของมอนสเตอร์ป่า 10 ตัว (`void_thornvine`, `toxic_sporeling`, `putrid_slime`, `mist_droplet_blob`, `cursed_wisp`, `anomalous_rockling`, `phantom_mandrake`, `shadow_parasite`, `caustic_acid_jelly`, `gale_swarm_orb`) ลงเฉลี่ย ~10–12%
     - คงค่าสเตตัสของมินิบอสและบอสใหญ่ที่เป็นสัตว์ป่า (`ocelot`, `tapir`, `orangutan`) ไว้ตามเดิม เพื่อคงความท้าทายระดับบอส
  2. **ปรับเพิ่มอัตราดรอปและรางวัลด่าน 1-1 ถึง 1-10 (`src/data/stages.json`):**
     - **ด่าน 1-1:** First Clear: Gold 260 (+30%), Food 200 (+33%), Crystals 25 (+25%), Warmth 15 (+50%) | Repeat Clear: Gold 75, Food 50, หินธาตุพืช Chance 55% (จากเดิม 40%)
     - **ด่าน 1-2 ถึง 1-9:** ปรับสเกล Gold, Food, Crystals, Warmth เพิ่มขึ้นในสัดส่วน ~20–30% ทุกด่าน
     - **ด่าน 1-10 (บอสใหญ่):** First Clear: Gold 1,800 (+20%), Food 1,200 (+20%), Crystals 200 (+33%), Warmth 30 (+50%) | Repeat Clear: Gold 320, Food 200, หินธาตุพืช Chance 70%
  3. **อัปเดตชุดทดสอบจำลองด่าน `src/sim/test_campaign.ts`:**
     - อัปเดต Assertions ให้ตรงกับตัวเลขรางวัล First Clear & Repeat Clear ใหม่
  4. **พร้อมทดสอบ ด่าน 1-1 (ชายป่ารกชัฏ):**
     - ผู้เล่นใช้ ไก่ (Rooster - ธาตุไฟ Striker) ปะทะ เถาวัลย์ทมิฬกลืนชีพ (Void Thornvine - ธาตุพืช Striker) ชนะธาตุ x1.3
     - ศัตรูเลือดลดลงเหลือ 614 HP (จากเดิม 698) ทำให้สู้สนุก มีจังหวะเร้าใจ และไม่ตึงมือจนเกินไป
- **ผลการทดสอบและการตรวจสอบ (Verification Results):**
  - `npm run test:campaign`: ผ่านครบทั้ง 10 ด่าน 100%
  - `npm run test:save`: ผ่าน 6/6 หมวด 100%
  - `npm run test:battle-ui`: ผ่านครบทั้ง 30/30 หมวด 100%
  - `npm run typecheck`: ผ่าน 0 Error 100%
  - `npm run build`: Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/enemies.json`
  - `src/data/stages.json`
  - `src/sim/test_campaign.ts`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #062] — วันที่ 2026-11-04 เวลา 12:05:00
- **คำสั่งจาก Game Director:**
  "ผมขอแทรกในส่วนของหน้าข้อมูลตัวละครครับ ผมอยากให้มีแท็บเพิ่มอีก 1 แท็ปคือ ข้อมูลสัตว์โลกครับ ซึ่งจะเป็นแท็ปข้อมูลความรู้เกี่ยวกับสัตว์ตัวนั้น (เหมือนเป็นสมุดความรู้ไปในตัวด้วย) และเสริมด้วยความแฟนตาซีคือ ทำสัตว์ตัวนี้ถึงเป็นธาตุนี้ ให้บรรยายสรรพคุณสั้นๆ เช่น ไก่เป็นสัตว์ปีกที่รูปร่างสวยงาม ชอบขันตอนเช้า รับแสงแดด เลยทำให้มีพลังแห่งไฟไหลเวียนอยู่ในตัว ประมาณนี้ครับ"
- **สิ่งที่ได้ดำเนินการพัฒนา (Animal Lore & Wildlife Encyclopedia System):**
  1. **สร้างระบบฐานข้อมูลสารานุกรมสัตว์โลก (`src/data/animal_lore.json` & `src/data/animal_lore.ts`):**
     - บันทึกข้อมูลสัตว์โลกตามธรรมชาติและเรื่องเล่าแฟนตาซีเชื่อมโยงธาตุ
     - มีระบบ `getAnimalLore(heroId, heroMeta)` รองรับครอบคลุมสัตว์ทั้ง 170 ตัว 11 ธาตุ 100% พร้อมข้อมูลเฉพาะเจาะจงระดับมาสเตอร์ของสัตว์หลักและสัตว์ป่า
  2. **เพิ่มแท็บ `📖 ข้อมูลสัตว์โลก` ในหน้าข้อมูลตัวละคร (`src/ui/heroes_view.ts`):**
     - เพิ่ม `lore` ใน `PetDetailTab` กลายเป็น 6 แท็บสมบูรณ์ (📋 ภาพรวม | 📊 ค่าสเตตัส | ⚡ สกิล 4 ช่อง | 🍖 พัฒนา | 📖 ข้อมูลสัตว์โลก | 🛡️ อุปกรณ์)
     - โครงสร้างภายในแท็บจัดเต็ม 4 ส่วน:
       - **ตราสัญลักษณ์และหัวข้อ:** ชื่อสัตว์, ชื่อวิทยาศาสตร์, หมวดหมู่ชีววิทยา, ธาตุ และบทบาท
       - **🔮 กำเนิดพลังธาตุแฟนตาซี:** อธิบายว่า "ทำไมสัตว์ตัวนี้ถึงเป็นธาตุนี้" เช่น ไก่ขันรับอรุณยามเช้าเพื่อต้อนรับแสงอาทิตย์ จึงซึมซับพลังแห่งดวงสุริยันเกิดเป็นพลังธาตุไฟที่ไหลเวียนอยู่ทั่วร่าง
       - **🌿 สารานุกรมชีววิทยาตามธรรมชาติ:** ถิ่นที่อยู่อาศัย (Habitat), ประเภทอาหาร (Diet), สรีระเด่น และพฤติกรรมในชีวิตประจำวัน
       - **💡 เกร็ดความรู้น่าทึ่ง (Did You Know?):** ความจริงอันน่าอัศจรรย์ในธรรมชาติ
       - **⚔️ จากธรรมชาติสู่สังเวียนการรบ:** บรรยายความเชื่อมโยงจากพฤติกรรมจริงสู่ Ability และ Signature Skill ในเกม
  3. **การจัดสไตล์และความสวยงาม (`src/style.css`):**
     - ดีไซน์สวยงามระดับ MMORPG ให้ความรู้สึกเหมือนกำลังเปิดอ่านสมุดบันทึกนักสำรวจธรรมชาติ
     - กรอบไฮไลต์ปรับสีเส้นขอบและแสงเรืองรองตามธาตุของสัตว์ตัวนั้นๆ โดยอัตโนมัติ
     - รองรับ Responsive บนจอมือถือและแท็บเล็ต
  4. **การทดสอบความถูกต้อง:**
     - อัปเดตชุดทดสอบ `src/sim/test_heroes_view_state.ts` ให้ทดสอบครอบคลุมทั้ง 6 แท็บ
     - `npm run test:pet-state`: ผ่าน 100%
     - `npm run test:roster`: ผ่าน 100%
     - `npm run typecheck`: ผ่าน 0 Error
     - `npm run build`: ผ่าน 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/animal_lore.json` (สร้างใหม่)
  - `src/data/animal_lore.ts` (สร้างใหม่)
  - `src/ui/heroes_view.ts`
  - `src/style.css`
  - `src/sim/test_heroes_view_state.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #063] — วันที่ 2026-11-04 เวลา 13:30:00
- **คำสั่งจาก Game Director:**
  "จากการทดสอบทั้ง 10 ด่านแล้ว ผมพอใจมากครับ ศัตรูเริ่มยากขึ้นเมื่อผ่านด่าน มีความตึงมือพอสมควร แต่ขอปรับตรงส่วนที่หน้าเมนูก่อนเริ่มสู้ (ภาพที่ส่งไป) อยากให้สามารถจัดทัพ เปลี่ยนฮีโร่ ได้ในหน้านี้เลย โดยไม่ต้องไปยังหน้า สัตว์เลี้ยง เพราะไม่อยากให้ผู้เล่นเสียเวลาในการคลิกดำเนินการหลายครั้ง"
- **สิ่งที่ได้ดำเนินการพัฒนา (In-Briefing Quick Team & Hero Selector):**
  1. **เพิ่มปุ่มเปลี่ยนตัวด่วนบนการ์ดตัวหลักและตัวสำรอง (`src/ui/campaign_view.ts`):**
     - เพิ่มปุ่ม `[ 🔄 เปลี่ยนตัว ]` บนหัวการ์ดตัวหลัก (Main) และตัวสำรอง (Backup)
     - ตัวการ์ดสามารถคลิกได้โดยตรง (`.clickable-hero-brief`) เพื่อเปิดหน้าต่างเลือกฮีโร่
     - เพิ่มปุ่ม `[ 👥 เลือกจัดทัพด่วน ]` ในแถบควบคุมด้านล่างร่วมกับปุ่ม `[ 🔄 สลับตัวหลัก ⇋ ตัวสำรอง ]`
  2. **สร้างหน้าต่างเลือกฮีโร่จัดทัพด่วน (`openQuickHeroSelectorModal`):**
     - แสดงรายการสัตว์เลี้ยงทั้งหมดที่ผู้เล่นครอบครอง (`ownedHeroes`) พร้อม Avatar, Rarity, Level, Stars, Role, และ Element
     - **คำนวณและแสดงโบนัสธาตุเทียบกับศัตรูประจำด่านโดยตรง:**
       - 🟢 ได้เปรียบธาตุ (+30% ดาเมจ)
       - 🔴 เสียเปรียบธาตุ (-15% ดาเมจ)
       - ⚪ สมดุล (1.0x)
     - **จัดเรียงอัจฉริยะ (Smart Sorting):** ดึงฮีโร่ที่ได้เปรียบธาตุของด่านนั้นขึ้นมาอยู่บนสุด เพื่อให้ผู้เล่นเลือกตัวแก้ทางได้ในพริบตา
     - มีปุ่มเลือกตำแหน่งชัดเจน:
       - กด `[ ⚔️ เลือกเป็นตัวหลัก ]` หรือ `[ 🛡️ เลือกเป็นตัวสำรอง ]`
       - มีระบบสลับตำแหน่งอัตโนมัติหากเลือกฮีโร่ที่อยู่ในทีมอีกช่องหนึ่งอยู่แล้ว
  3. **การทำงานแบบ In-Place Real-time Update:**
     - บันทึกการเปลี่ยนทีมลง `saveManager.setActiveTeam1v1(...)` ทันที
     - แจ้งเตือน Toast ยืนยันการจัดทัพสำเร็จ
     - อัปเดตข้อมูลบนหน้าจอ Stage Briefing ทันที (ทั้งการ์ดฮีโร่และป้าย Matchup ธาตุ) โดยไม่ต้องปิดหน้าจอหรือสลับไปยังแท็บสัตว์เลี้ยง
     - ผู้เล่นสามารถกด `⚔️ เริ่มการต่อสู้! (Start Battle)` ได้ทันทีในคลิกถัดไป
  4. **การจัดสไตล์และความสวยงาม (`src/style.css`):**
     - เพิ่ม CSS สำหรับ `.brief-card-header`, `.btn-quick-change-hero`, `.quick-hero-selector-overlay`, `.quick-hero-selector-modal`, `.quick-hero-card.has-advantage`
  5. **ผลการทดสอบและการตรวจสอบ (Verification Results):**
     - `npm run test:campaign`: ผ่านครบทั้ง 10 ด่าน 100%
     - `npm run test:save`: ผ่าน 100%
     - `npm run test:battle-ui`: ผ่าน 100%
     - `npm run test:pet-state`: ผ่าน 100%
     - `npm run test:roster`: ผ่าน 100%
     - `npm run typecheck`: ผ่าน 0 Error 100%
     - `npm run build`: ผ่าน 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/campaign_view.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`

---

## [Backup #064] — วันที่ 2026-11-04 เวลา 14:35:00
- **คำสั่งจาก Game Director:**
  "ขอปรับในส่วนของ สกิลบอร์ดครับ ให้เมื่อตอนเริ่มต้นเกมส์ ให้สกิลแรก ปลดล็อคทุกสกิลครับ ทั้งสายธาตุและ สายไร้ธาตุ และเมื่อเริ่มเกมส์ใหม่ ให้ตัวละครเริ่มต้นทุกตัว ให้มีสกิลประจำธาตุ 1 ธาตุ ระดับ S และ ตัวละครที่มาจากการฟักไข่ ก็ให้มีสกิลเริ่มต้นประจำธาตุ 1 ธาตุระดับ S ด้วยเช่นกัน"
- **สิ่งที่ได้ดำเนินการพัฒนา (Unlocked Tier S Skills & Elemental Starter Loadouts):**
  1. **ปลดล็อกสกิลแรก (Tier S) ของทุกสายวิชาตั้งแต่เริ่มเกม (`src/engine/save_manager.ts`):**
     - ประกาศ `INITIAL_UNLOCKED_SKILLS` ครบทั้ง 16 สายวิชา:
       - 11 สายวิชาประจำธาตุ: `fire_s`, `water_s`, `wind_s`, `earth_s`, `lightning_s`, `ice_s`, `plant_s`, `poison_s`, `dark_s`, `light_s`, `psychic_s`
       - 5 สายวิชาไร้ธาตุ: `martial_s` (กระบวนท่า), `medical_s` (พยาบาล), `trick_s` (เล่ห์กล), `catalyst_s` (เร่งปฏิกิริยา), `secret_s` (วิชาลับ)
     - ประกาศ `INITIAL_UNLOCKED_ELEMENT_ROWS` ปลดล็อกแถวทั้ง 16 แถวบนกระดานสกิลตั้งแต่เริ่มต้น
     - ใน `createInitialSaveData()`: กำหนด `unlockedSkills: [...INITIAL_UNLOCKED_SKILLS]`, `unlockedElementRows: [...INITIAL_UNLOCKED_ELEMENT_ROWS]` และ `skillLevels` Lv.1 สำหรับ 16 สกิลแรก
     - ปรับ Skill Presets เริ่มต้น (`preset_balanced`, `preset_fire_burst`, `preset_earth_tank`) ให้ติดตั้งเฉพาะสกิล Tier S ที่ปลดล็อกแล้ว ทำให้พร้อมใช้งานและสวมใส่ได้ทันที 1 คลิก
     - รองรับ Auto-Migration ในฟังก์ชัน `load()` เพื่ออัปเกรดเซฟเดิมให้ได้รับ 16 สกิล Tier S และ 16 แถวครบถ้วนอัตโนมัติ
  2. **กำหนดสกิลประจำธาตุ 1 สกิลระดับ S ให้ฮีโร่เริ่มต้นทุกตัว:**
     - เพิ่มฟังก์ชันตัวช่วย `getDefaultElementalSkillS(element: string): string` แมปธาตุของสัตว์เลี้ยงเป็นสกิลระดับ S ประจำธาตุ
     - ฮีโร่เริ่มต้น 3 ตัว (`initialHeroes`):
       - ไก่ (rooster - ธาตุไฟ): `customSkills: ['fire_s']` (เขี้ยวเพลิง)
       - แมว (cat - ธาตุลม): `customSkills: ['wind_s']` (กรงเล็บวายุ)
       - ควาย (buffalo - ธาตุดิน): `customSkills: ['earth_s']` (หมัดศิลา)
  3. **กำหนดสกิลเริ่มต้นประจำธาตุระดับ S ให้สัตว์เลี้ยงที่ได้ใหม่จากการฟักไข่ (`acquireHero`):**
     - เมื่อผู้เล่นกะเทาะไข่ได้ฮีโร่ตัวใหม่ที่ยังไม่เคยมีในคลัง (`isNew = true`):
       - ดึงธาตุของสัตว์เลี้ยงจากฐานข้อมูลฮีโร่
       - สวมใส่สกิลระดับ S ประจำธาตุให้ 1 สกิลทันที: `customSkills: [getDefaultElementalSkillS(heroMeta?.element || 'fire')]`
  4. **ผลการทดสอบและการตรวจสอบ (Verification Results):**
     - `src/sim/test_save_manager.ts`: ตรวจสอบ 16 สกิลเริ่มต้น, ฮีโร่เริ่มต้นมี 1 สกิล Tier S และสัตว์จากการฟักไข่มี 1 สกิล Tier S
     - `src/sim/test_skill_board.ts`: ตรวจสอบ 16 แถว, 16 สกิล Tier S, กฎการสวมใส่ 4 ช่อง, การสวมใส่ทีละช่อง, พรีเซต และต่อสู้จริง
     - ผลการรันเทสต์ทุกชุด:
       - `npm run test:skills`: ผ่าน 100%
       - `npm run test:save`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 100%
       - `npm run test:battle-ui`: ผ่าน 100%
       - `npm run test:pet-state`: ผ่าน 100%
       - `npm run test:roster`: ผ่าน 100%
       - `npm run typecheck`: ผ่าน 0 Error 100%
       - `npm run build`: สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/save_manager.ts`
  - `src/sim/test_save_manager.ts`
  - `src/sim/test_skill_board.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #065] — วันที่ 2026-11-04 เวลา 14:50:00
- **คำสั่งจาก Game Director:**
  "ขอปรับในส่วนของ เมื่อเข้าสู่หน้าต่อสู้ ให้มีการ loading ก่อนเข้าสู่ระบบเล็กน้อย (ให้มีการหน่วงเวลาก่อนเข้าหน้าจอต่อสู้ประมาณ 2-3 วินาที หรือ พอสมน้ำสมเนื้อ ) เสมือนว่ากำลังโหลดข้อมูลการต่อสู้ ให้ดูเป็นมืออาชีพครับ ให้มีแท็ป process bar สวยๆ ดูกลมกลืนกับธีม cozy pixed art fantasy"
- **สิ่งที่ได้ดำเนินการพัฒนา (Cozy Pixel Art Fantasy Battle Loading Screen):**
  1. **สร้างโมดูลหน้าจอโหลดข้อมูลการต่อสู้ (`src/ui/battle_loading_view.ts`):**
     - **ระบบหน่วงเวลาเสมือนจริง (Organic Easing Duration):** กำหนดระยะเวลาโหลดเริ่มต้น ~2.3 วินาที พร้อม Organic Easing Curve ที่เริ่มนุ่มนวลและเร่งสม่ำเสมอจนถึง 100%
     - **Progress Bar สไตล์ Cozy Pixel Art Fantasy:**
       - กรอบไม้แฟนตาซีและแถบทองเหลืองประดับมุมสไตล์ Pixel Art
       - หลอดพลังงานไล่เฉดสีทอง-มรกต-อำพัน พร้อมประกายแสงดาวนำร่องที่หัวแถบโหลด
       - แอนิเมชันลายริ้วเฉียงแสงประกาย (Animated Diagonal Sheen Stripes) เคลื่อนไหวลื่นไหล
       - ตัวเลขเปอร์เซ็นต์ดิจิทัล `[ 0% ]` ถึง `[ 100% ]` ด้วยฟอนต์ตัวเลขประจำเกม
       - ข้อความรายงานสถานะโหลดที่เปลี่ยนแบบ Dynamic ตามเปอร์เซ็นต์:
         - 0% - 22%: `🐾 กำลังระดมพลสหายสัตว์ป่าเข้าสู่สมรภูมิ...`
         - 23% - 48%: `🔮 ประสานพลังวิญญาณธาตุแห่งพงไพร...`
         - 49% - 72%: `📖 ตรวจสอบคัมภีร์สกิลและจัดระเบียบกระดานวิชา...`
         - 73% - 92%: `⚔️ จัดเรียงยุทธวิธีและเตรียมพร้อมประจัญบาน...`
         - 93% - 100%: `✨ สังเวียนเปิดออกแล้ว! สหายสัตว์ป่าพร้อมลุย...`
     - **ตัวนำโชควิ่งนำเลน (Mascot Runner Lane):** มีตัวการ์ตูนสหายสัตว์ป่ากระโดดดุ๊กดิ๊กไปตามหลอด Progress Bar แบบ Real-time
     - **VS Matchup Showcase:** แสดงการ์ดสหายผู้พิทักษ์ (ตัวหลัก & ตัวสำรอง พร้อมไอคอนธาตุและเลเวล) ปะทะ ศัตรูประจำถิ่น (มอนสเตอร์/บอส) คั่นด้วยตราสัญลักษณ์ดาบไขว้ `VS` เรืองแสง และป้ายคำนวณความได้เปรียบธาตุ
     - **คลังเกร็ดความรู้ผู้พิทักษ์ (Adventurer's Tips Pool):** สุ่มแสดงเกร็ดความรู้การเล่นจริง 10 รายการ เช่น การสลับตัวสำรอง, โบนัสธาตุชนะทาง +30%, การอัปเลเวลสกิล Lv.5, การใช้ท่าไม้ตาย ฯลฯ
     - **ระบบข้ามการโหลด (Skip On Demand):** ผู้เล่นสามารถคลิกที่ปุ่ม `[ ⚡ แตะเพื่อเข้าสู่สังเวียนทันที (Skip) ]` หรือคลิกบนหน้าจอเพื่อข้ามไปยังหน้าต่อสู้ได้ทันที
     - **เอฟเฟกต์ปิดท้าย (Golden Flash & Smooth Fade-Out):** เมื่อโหลดเต็ม 100% หน้าจอจะเปล่งประกายสีทองอ่อนๆ และ Fade-out ออกอย่างนุ่มนวล (320ms) ก่อนเริ่มสังเวียนต่อสู้
  2. **เชื่อมต่อกับระบบเริ่มการต่อสู้ (`src/main.ts`):**
     - เชื่อมโยงเข้ากับฟังก์ชัน `startCampaignBattle(stageId)` ของโหมด Campaign และ `startBattle` ของโหมด Sandbox
     - แสดงรูป Avatar และข้อมูลธาตุของฮีโร่และมอนสเตอร์ด้วย `getFighterAvatarEmoji`
  3. **การจัดสไตล์และความสวยงาม (`src/style.css`):**
     - เพิ่ม CSS สไตล์ Cozy Pixel Art Fantasy รองรับทั้งหน้าจอเดสก์ท็อปและสมาร์ตโฟน
     - เพิ่มเอฟเฟกต์อนุภาคหิ่งห้อยลอยฟุ้ง (`.loading-firefly`) และการเรืองแสงนีออนแฟนตาซี
  4. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบใหม่ `src/sim/test_battle_loading.ts`
     - ผลการทดสอบทุกชุด:
       - `npm run test:loading`: ผ่าน 100%
       - `npm run test:save`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 100%
       - `npm run test:skills`: ผ่าน 100%
       - `npm run test:battle-ui`: ผ่าน 100%
       - `npm run test:pet-state`: ผ่าน 100%
       - `npm run test:roster`: ผ่าน 100%
       - `npm run typecheck`: 0 Error ผ่านสมบูรณ์
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (2.53s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_loading_view.ts` (สร้างใหม่)
  - `src/sim/test_battle_loading.ts` (สร้างใหม่)
  - `src/main.ts`
  - `src/style.css`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #066] — วันที่ 2026-11-04 เวลา 20:25:00
- **คำสั่งจาก Game Director:**
  "ต่อไป ครับ ในหน้าฉากต่อสู้ ตรงส่วนด้านล่างที่แสดงสกิลของสัตว์ ให้ปรับให้ตรงตามที่สัตว์นั้นมี (ระบบแสดงสกิลเดิมที่มี 4 สกิล)"
- **การวินิจฉัยปัญหา (Root Cause Analysis):**
  1. ใน `src/engine/combat.ts`: ฟังก์ชัน `createFighter` ส่งชุดสกิลเข้า `sanitizeSkillLoadout(rawSkills, h.defaultSkills)` ซึ่งมีลูป `while (result.length < 4)` คอยดึงเอาสกิลจาก `defaultSkills` เดิมใน Phase 1 (เช่น ควายมี `earth_l`, `earth_m1`, `medical_m1`, `medical_s`) มายัดใส่ให้ครบ 4 ช่องเสมอ แม้สัตว์เลี้ยงในเซฟจะมีเพียง 1 สกิล (`earth_s`) ก็ตาม
  2. ใน `src/ui/battle_view.ts`: ตัวแปลงข้อมูล `adapt1v1BattleData` และ `adapt2v2BattleData` มีการตรวจสอบ `f.skillSlots || meta?.defaultSkills || []`
  3. ใน `src/engine/save_manager.ts`: เซฟเดิมใน LocalStorage อาจยังมีชุดสกิล 4 ช่องเดิมค้างอยู่
- **สิ่งที่ได้ดำเนินการพัฒนาและแก้ไข (Hotbar Actual Equipped Skills):**
  1. **ปรับปรุง `sanitizeSkillLoadout` & `createFighter` ใน `src/engine/combat.ts`:**
     - เพิ่มพารามิเตอร์ `fillEmptyWithDefaults` ให้กับ `sanitizeSkillLoadout` โดยกำหนดค่าเริ่มต้นเป็น `false`
     - หากมีการส่ง `customSkills` มา (เช่น จากข้อมูลเซฟของผู้เล่น หรือด่าน Campaign) ระบบจะคัดกรองเฉพาะสกิลที่สัตว์เลี้ยงติดตั้งไว้จริงเท่านั้น ไม่มีการยัดเยียด `defaultSkills` ให้ครบ 4 ช่องอีกต่อไป
     - ช่องสกิลที่ไม่ได้ติดตั้งจะถูกแสดงเป็น `[ ⚪ ช่องว่าง ]` บน Hotbar อย่างถูกต้องตามดีไซน์
  2. **ปรับปรุง Data Adapter ใน `src/ui/battle_view.ts`:**
     - ปรับให้ตรวจสอบ `Array.isArray(f.skillSlots) ? f.skillSlots : ...` เพื่อให้มั่นใจว่าจะนำ `f.skillSlots` ที่มี 1 สกิล (หรือตามจำนวนที่ติดตั้งจริง) ไปเรนเดอร์ลง Hotbar โดยตรง
  3. **ปรับปรุงระบบ Migration เซฟใน `src/engine/save_manager.ts`:**
     - ตรวจจับชุดสกิลที่ติดมาจาก `defaultSkills` เดิมใน Phase 1 และรีเซ็ตกลับเป็นสกิลประจำธาตุระดับ S (1 สกิล) อัตโนมัติ
     - กรองเอาเฉพาะสกิลที่ปลดล็อกแล้วใน `unlockedSkills` เท่านั้น ป้องกันสกิลขั้นสูงค้าง
  4. **การทดสอบและการตรวจสอบ (Verification Results):**
     - เพิ่มการทดสอบหัวข้อที่ 31 ใน `src/sim/test_battle_ui_state.ts`: ตรวจสอบการสร้างควายที่มี `['earth_s']`, จำลองต่อสู้ `BattleSession`, แปลงข้อมูล และเรนเดอร์ Hotbar พบ 1 สกิลจริง และ 3 ช่องว่าง 100% ไร้สกิล `earth_l`, `medical_m1`, `medical_s` ค้าง
     - รันชุดทดสอบทั้งหมดผ่าน 100%:
       - `npm run test:battle-ui`: ผ่าน 100%
       - `npm run test:save`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 100%
       - `npm run test:skills`: ผ่าน 100%
       - `npm run test:loading`: ผ่าน 100%
       - `npm run test:pet-state`: ผ่าน 100%
       - `npm run test:roster`: ผ่าน 100%
       - `npm run typecheck`: 0 Error 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (3.32s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/combat.ts`
  - `src/ui/battle_view.ts`
  - `src/engine/save_manager.ts`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/19_history_and_backup.md`


---

## [Backup #067] — วันที่ 2026-11-04 เวลา 21:00:00
- **คำสั่งจาก Game Director:**
  "จากภาพที่ส่งไป ให้ข้อความชื่อไอดีสกิลเปลี่ยนเป็นไอค่อนสกิลแทนครับ"
- **การวินิจฉัยปัญหา (Root Cause Analysis):**
  1. ในหน้าต่างสรุปข้อมูลด่านและจัดทัพก่อนสู้ (Stage Briefing Modal ใน `src/ui/campaign_view.ts`):
     - ส่วนการ์ดศัตรู (`briefing-enemy-card`): แสดงแท็กข้อความรหัสดิบโดยตรง เช่น `<span class="sk-micro-chip">plant_s</span>`, `martial_s`, `trick_s`, `catalyst_s`
     - ส่วนการ์ดทีมผู้เล่น 1v1 (`player-hero-brief`): แสดงแท็กข้อความรหัสดิบ เช่น `<span class="sk-pill">earth_s</span>`, `earth_m2`, `martial_m1`, `medical_s`
  2. การแสดงผลรหัสดิบของโปรแกรมเมอร์ (Raw Skill IDs) ขัดแย้งกับสไตล์ MMORPG Cozy Pixel Art Fantasy และทำให้ผู้เล่นไม่ทราบชื่อสกิล เอฟเฟกต์ หรือค่าร่าย SP
- **สิ่งที่ได้ดำเนินการพัฒนาและแก้ไข (Stage Briefing Skill Badges):**
  1. **สร้างฟังก์ชัน Visuals & Badge Render ใน `src/ui/campaign_view.ts`:**
     - `getSkillBriefVisuals(skId: string)`: แมปข้อมูลสกิลจาก `SKILL_MAP`, `ELEMENT_MAP` และสายวิชาทั้ง 16 สาย (11 ธาตุ + 5 ไร้ธาตุ) ดึงไอคอนอิโมจิประจำสายวิชา (เช่น 🌿 พืช, 🪨 ดิน, 🌪️ ลม, 🔥 ไฟ, 🥋 กระบวนท่า, 💚 พยาบาล, 🎭 เล่ห์กล, 🔋 เร่งประจุ, 📜 วิชาลับ) สีประจำสายวิชา ค่าร่าย SP และคำอธิบาย
     - `renderSkillBriefBadge(skId: string): string`: เรนเดอร์ชิปไอคอนสกิล `.sk-brief-chip` ประกอบด้วย:
       - กล่องไอคอนรูปสี่เหลี่ยมมนเรืองแสง `.sk-brief-icon-box` พร้อมอิโมจิประจำสายวิชา
       - ชื่อสกิลภาษาไทยทางการ `.sk-brief-name` (เช่น "เถาวัลย์ดูดเลือด", "หมัดกระแทกจุดตาย", "ทรายพรางตา", "ก้อนหินถล่ม")
       - ป้ายกำกับระดับชั้น Tier `.sk-brief-tier` (S เขียว, M ฟ้า, L ส้มทอง)
       - แอตทริบิวต์ `title` แสดงคำอธิบายความสามารถ ค่าร่าย SP และสายวิชาเมื่อผู้เล่นชี้เมาส์ (Hover Tooltip)
  2. **ปรับปรุงการเรนเดอร์ใน `Stage Briefing Modal` (`src/ui/campaign_view.ts`):**
     - อัปเดตส่วนศัตรู (`.e-skills-tags`): เปลี่ยนจากรหัส ID ดิบเป็นชิปไอคอนสกิล `renderSkillBriefBadge` ครบทุกตัว
     - อัปเดตส่วนทีมผู้เล่น 1v1 (`.h-skills-chips`): แสดงชิปไอคอนสกิลของฮีโร่ตัวหลักและตัวสำรองอย่างสวยงาม พร้อมแสดงข้อความ "ยังไม่มีสกิลติดตั้ง" เมื่อยังไม่ได้ติดตั้ง
     - สกัดฟังก์ชัน `renderStageBriefingModalHtml` ให้เป็นโมดูลาร์ สะดวกต่อการนำไปใช้งานและทดสอบ
  3. **การตกแต่งสไตล์ MMORPG ใน `src/style.css`:**
     - เพิ่มคลาส `.sk-brief-chip`, `.sk-brief-icon-box`, `.sk-brief-icon`, `.sk-brief-name`, `.sk-brief-tier` (รองรับ `.tier-s`, `.tier-m`, `.tier-l`)
     - รองรับ Hover Micro-interaction (ขยายไอคอนและยกตัวชิปขึ้นเล็กน้อย เพิ่มมิติ)
     - ตัดทอนข้อความเกินด้วย Text-Overflow ป้องกันการล้นจอในอุปกรณ์ขนาดเล็ก
  4. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_campaign_skill_badges.ts` ทดสอบครบทุกสายวิชา ไร้ข้อความ ID ดิบ 100%
     - เพิ่มคำสั่ง `"test:brief-badges"` ใน `package.json`
     - รันชุดทดสอบทั้งหมดผ่านฉลุย 100%:
       - `npm run test:brief-badges`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 10/10 ด่าน (100%)
       - `npm run test:battle-ui`: ผ่าน 100%
       - `npm run test:loading`: ผ่าน 100%
       - `npm run test:skills`: ผ่าน 100%
       - `npm run test:save`: ผ่าน 100%
       - `npm run test:roster`: ผ่าน 100%
       - `npm run test:pet-state`: ผ่าน 100%
       - `npm run test:skill-state`: ผ่าน 100%
       - `npm run typecheck`: 0 Error 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (3.48s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/campaign_view.ts` (เพิ่มระบบ `getSkillBriefVisuals`, `renderSkillBriefBadge`, และ `renderStageBriefingModalHtml`)
  - `src/style.css` (เพิ่ม CSS สำหรับ `.sk-brief-chip`, `.sk-brief-icon-box`, `.sk-brief-name`, `.sk-brief-tier`)
  - `src/sim/test_campaign_skill_badges.ts` (สร้างใหม่สำหรับทดสอบไอคอนสกิลในหน้าจัดทัพ)
  - `src/sim/test_campaign.ts` (อัปเดตการจัดสกิลและการลุยศึกบอส 1-10)
  - `src/sim/test_skill_tree_state.ts` (อัปเดตม็อกเซฟแถวล็อกให้สอดคล้องกับ Tier S Initial Unlock)
  - `package.json` (เพิ่มสคริปต์ `test:brief-badges`)
  - `doc/19_history_and_backup.md`

---

## [Backup #066] – วันที่ 2026-11-04 – 23:45:00
- **คำสั่งจาก Game Director:**
  "ขอเพิ่มสถานะเพิ่มเติม 5 สถานะ:
  1. fire skin - เพิ่มดาเมจสายธาตุไฟแรงขึ้น 20% และ เมื่อศัตรูโจมตี มีโอกาส 40% ที่ศัตรูจะติดสถานะ burn (เลือกทางเลือก A: รีเฟรชระยะเวลาเป็น 2 เทิร์น + ระเบิด Ignite Burst ทันที 3% Max HP) นำเข้าเป็น ability ของ ฟีนิกซ์ เพิ่มเติมจากเดิม และสกิลบอร์ด fire_m2
  2. berserk - เพิ่มโจมตีขึ้น 30% เพิ่ม SPD ขึ้น 20% ลดป้องกัน 20% และลดความแม่นยำลง 10% ให้แก่ตัวเอง นำไปปรับใช้กับ หมีกริสลี่ (grizzly) และสกิลบอร์ด catalyst_l
  3. ice skin - ลด SPD ลง 30% แต่เพิ่มป้องกัน 20% เมื่อศัตรูโจมตี มีโอกาส 40% ศัตรูติดแช่แข็ง (ปรับให้เมื่ออยู่ในสถานะ แช่แข็ง จะทำให้กลายเป็นธาตุน้ำแข็ง) นำไปปรับใช้กับ วอลรัส (walrus) และสกิลบอร์ด ice_m2
  4. stone curse - ทำให้ศัตรูกลายเป็นหิน กลายเป็นธาตุดินชั่วขณะหนึ่ง (1 เทิร์น) ไม่สามารถโจมตีหรือฟื้นฟูได้ นำไปปรับใช้กับ แรด (rhino) และสกิลบอร์ด earth_l
  5. curse - ทำให้ HP ลดลง 3% ตลอดเทิร์นจนกว่าจะตาย (แก้ทางได้โดยการล้างดีบัพเท่านั้น) นำไปปรับใช้กับ หมึกแวมไพร์ (vampire_squid) และสกิลบอร์ด dark_l"
- **สิ่งที่ได้ดำเนินการพัฒนาและแก้ไข (5 New Status Effects & Combat Dynamics):**
  1. **อัปเดตฐานข้อมูลเกมส์ (`src/data/skills.json`, `src/data/heroes.json`, `src/data/signature_descriptions.json`):**
     - กำหนดค่าสถานะใหม่ทั้ง 5 ใน `skillsData.statusRules`
     - แมปสกิลบอร์ดระดับ S และ SS: `fire_m2` (เกราะเปลวอัคคี), `ice_m2` (เกราะเหมันต์), `catalyst_l` (ขีดจำกัดสายเลือด), `earth_l` (แผ่นดินไหว), `dark_l` (กลืนกินความมืด)
     - แมปฮีโร่สาย S และ SS: ฟีนิกซ์ (`phoenix` - SS), หมีกริสลี่ (`grizzly` - S), วอลรัส (`walrus` - S), แรด (`rhino` - S), หมึกแวมไพร์ (`vampire_squid` - S)
  2. **พัฒนากลไกในเอนจินการต่อสู้ (`src/engine/combat.ts` & `src/engine/team_combat.ts`):**
     - สร้างฟังก์ชัน `getEffectiveElement(f: FighterState)` สำหรับสลับธาตุอัตโนมัติ (Freeze -> `ice`, Stone Curse -> `earth`) รองรับการชนะ/แพ้ธาตุตามจริงทันที
     - อัปเดต `getEffectiveStats`: คำนวณบัฟ/ดีบัฟ `berserk` (ATK+30%, SPD+20%, DEF-20%, HIT-10) และ `ice_skin` (DEF+20%, SPD-30%)
     - ปรับ `applyEffectToTarget`: บรรจุ `stone_curse` เข้ากลุ่ม Hard CC, รองรับ `cleanse` ล้าง `stone_curse` และ `curse`, ทำงานตาม Choice A สำหรับ Burn Stacking (Ignite Burst 3% Max HP)
     - ปรับ `processStartOfTurnStatuses`: หักเลือดจากคำสาปมรณะ Curse 3% Max HP ทุกเทิร์น, และระงับการฟื้นฟู/ฮีล/ดูดเลือดทั้งหมดเมื่อติด `stone_curse`
     - ปรับ `executeAction` & `performHit`: เพิ่มโบนัสดาเมจไฟ +20% เมื่อผู้โจมตีมี `fire_skin`, เพิ่มปฏิกิริยาสะท้อนหนามโจมตี (Thorns reaction) สำหรับ `fire_skin` (40% burn) และ `ice_skin` (40% freeze), เปิดใช้สกิลสัญชาตญาณสัตว์เลี้ยง `grizzly_berserk` และ `blubber_ice_fortress`
     - ปรับ `tickEndOfTurnStatuses`: คำสาป `curse` ไม่ถูกลดระยะเวลา (ถาวรจนกว่าจะ Cleanse), `stone_curse` หมดผลใน 1 เทิร์น
  3. **การแสดงผลบน UI การต่อสู้ (`src/ui/battle_view.ts`):**
     - เพิ่มตัวจัดการ `formatStatusEffectBadge` สำหรับสถานะใหม่ทั้ง 5 พร้อมไอคอน สัญลักษณ์ และคำอธิบาย Tooltip
     - ปรับระยะเวลาของ `curse` และ `fire_skin` ถาวร ให้แสดงเป็นสัญลักษณ์ `∞` สวยงาม
     - เพิ่มการแสดงป้ายชื่อธาตุชั่วคราวบนการ์ดตัวละครเมื่อถูกสาปเป็นหินหรือแช่แข็ง
  4. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_new_status_effects.ts` ทดสอบครบทั้ง 5 สถานะ กลไกการคำนวณสเตตัส การระเบิด Ignite Burst การซ้อนทับ และการลบล้าง 100%
     - เพิ่มคำสั่ง `"test:new-statuses"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run test:brief-badges`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 10/10 ด่าน (100%)
       - `npm run test:battle-ui`: ผ่าน 100%
       - `npm run test:skills`: ผ่าน 100%
       - `npm run test:save`: ผ่าน 100%
       - `npm run typecheck`: 0 Error 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/skills.json`
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/ui/battle_view.ts`
  - `src/sim/test_new_status_effects.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #067] – วันที่ 2026-11-05 – 00:10:00
- **คำสั่งจาก Game Director:**
  "ต่อไป ขอปรับสกิล ดูดกลืนเงา ของธาตุมืด ให้เพิ่มความสามารถ มีโอกาส 30% สุ่มล้างบัพด้านดีของศัตรู 1 อย่าง(ถ้ามี)"
- **สิ่งที่ได้ดำเนินการพัฒนาและแก้ไข (Dark M2 Skill Dispel Buff Enhancement):**
  1. **อัปเดตข้อมูลสกิล (`src/data/skills.json`):**
     - สกิล `dark_m2` ("ดูดกลืนเงา" - Tier M ธาตุมืด):
       - เพิ่ม Effect ชนิด `dispel` กำหนดเป้าหมายเป็น `enemy`, โอกาส `chance: 0.3` (30%), และ `count: 1`
       - อัปเดตคำอธิบายสกิล `description` เป็น: `"ดาเมจ ×1.5 · ขโมย ATK ศัตรู 15% มาเป็นของตัวเอง (2 เทิร์น) + โอกาส 30% สุ่มลบล้างบัฟด้านดีของศัตรู 1 อย่าง"`
  2. **พัฒนากลไก Dispel ในระบบต่อสู้ (`src/engine/combat.ts` & `src/engine/team_combat.ts`):**
     - ในฟังก์ชัน `applyEffectToTarget`: เพิ่มตัวจัดการสำหรับ `ef.type === 'dispel'`
     - ค้นหาบัฟด้านดีทั้งหมดของเป้าหมาย ได้แก่: บัฟที่ขึ้นต้นด้วย `buff_` (`buff_atk`, `buff_def`, `buff_spd`, `buff_cri`, `buff_flee`, `buff_hit`, `buff_ab`, `buff_block`) รวมถึง `shield`, `regen`, `fire_skin`, `ice_skin`, `berserk`, `counter_stance`, `yata_mirror`, `shadow_clone`
     - หากมีบัฟด้านดี จะทำการสุ่มลบล้างออก 1 อย่าง (ถ้าเป็นเกราะ shield จะเซ็ตค่า shield เป็น 0 ทันที) พร้อมรายงานข้อความภาษาไทยในคอมแบทล็อก เช่น `"สลายบัฟ [พลังโจมตี+] ของเป้าหมาย!"` หรือ `"สลายบัฟ [เกราะป้องกัน] ของเป้าหมาย!"`
     - หากเป้าหมายไม่มีบัฟด้านดีใดๆ (`buffIndices.length === 0`) ฟังก์ชันจะคืนค่า `null` เพื่อไม่ให้เกิดแอคชันหรือข้อความรบกวนตามเงื่อนไข "(ถ้ามี)"
  3. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - เพิ่มกรณีทดสอบใน `src/sim/test_new_status_effects.ts`:
       - ตรวจสอบโครงสร้างสกิล `dark_m2` ใน `skills.json`
       - ทดสอบการสุ่มล้างบัฟด้านดี 1 อย่างสำเร็จ
       - ทดสอบกรณีศัตรูไม่มีบัฟ ระบบทำงานปลอดภัย ไม่เกิด error และไม่แสดงผลกระทบ
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run test:skills`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 10/10 ด่าน (100%)
       - `npm run typecheck`: 0 Error 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (3.51s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/skills.json` (เพิ่ม effect `dispel` 30% และอัปเดตคำอธิบายของ `dark_m2`)
  - `src/engine/combat.ts` (เพิ่มกลไก `dispel` ใน `applyEffectToTarget`)
  - `src/engine/team_combat.ts` (เพิ่มกลไก `dispel` ใน `applyEffectToTarget`)
  - `src/sim/test_new_status_effects.ts` (เพิ่มชุดทดสอบการสุ่มลบล้างบัฟของ `dark_m2`)
  - `doc/19_history_and_backup.md`

---

## [Backup #068] – วันที่ 2026-11-05 – 09:20:00
- **คำสั่งจาก Game Director:**
  "โอเคครับ ผมจะสั่งให้ปรับทีละตัวละครับ เริ่มจาก เบฮีมอธ (Behemoth) เลยครับ"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Mythical Beast SS Tier - Behemoth Earth Striker):**
  1. **เพิ่มข้อมูลฮีโร่และ Archetype สเตตัสบาลานซ์ (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares.BEHEMOTH`: `[0.505, 0.198, 0.297]` โดยยึด SS Class Budget = 182 พอยต์
     - สเตตัสพื้นฐานระดับ 1 ดาว 1: `STR: 92`, `AGI: 36`, `STA: 54` (รวม 182 พอยต์ พอดีเป๊ะ ไม่ทำลายบาลานซ์เกม)
     - ตัวคูณเฉพาะตัว: `customMultipliers: { hp: 1.05, atk: 1.05 }`
     - กำหนดตัวคูณท่าไม้ตาย Striker: `customSigMult: 4.5`
     - สกิลเริ่มต้นประจำตัว: `["earth_l", "earth_m2", "martial_l", "catalyst_l"]`
     - ท่าไม้ตาย Signature: `"พสุธากัมปนาทถล่มโลกันตร์"` พร้อมเอฟเฟกต์ `armor_break_and_stun` (ลด DEF 30% 2 เทิร์น และติดสตัน 1 เทิร์น โอกาส 85%)
     - Ability ติดตัว: `colossal_tremor` ("พสุธาสะเทือนเลื่อนลั่น") เพิ่มเจาะเกราะ (AB) +15% และต้านทานสตันถาวร · เมื่อโจมตีคริติคอล จะสร้างคลื่นกระแทกแผ่นดินไหวทำดาเมจ 25% ATK ใส่ศัตรูทั้งหมด
  2. **คำอธิบายท่าไม้ตายและสารานุกรมสัตว์ในตำนาน (`signature_descriptions.json` & `animal_lore.json`):**
     - เพิ่มคำอธิบายท่าไม้ตายใน `signature_descriptions.json`: `"behemoth": "ดาเมจเดี่ยว ×4.5 · โอกาส 85% ทุบเกราะแตก (ลด DEF 30% 2 เทิร์น) และติดสตัน (1 เทิร์น)"`
     - เพิ่มสารานุกรมชีววิทยาและตำนานใน `animal_lore.json`: ชื่อทางวิชาการ `Gigantus Terra Behemoth`, หมวดหมู่อสูรบรรพกาลพสุธาในตำนาน (Primordial Earth Titan), ถิ่นที่อยู่, แหล่งกำเนิดธาตุ และความเชื่อมโยงกับระบบต่อสู้
  3. **เชื่อมโยงระบบต่อสู้ 1v1 และ 2v2 Team Combat (`src/engine/combat.ts` & `src/engine/team_combat.ts`):**
     - `getEffectiveStats`: เพิ่มโบนัสเจาะเกราะ `s.ab += 15` เมื่อมี Ability `colossal_tremor`
     - `applyEffectToTarget`:
       - เพิ่มภูมิคุ้มกันสตันถาวร `ภูมิคุ้มกันสตัน (พสุธาสะเทือนเลื่อนลั่น)` ป้องกันการติดสตันและไม่เสียแต้มสะสม CC Resist
       - เพิ่มตัวจัดการคอมโบ `armor_break_and_stun` ทุบเกราะแตก (ลด DEF 30% 2 เทิร์น) พร้อมแปะสตัน (1 เทิร์น)
     - `performHit` (1v1) และ `performNormalAttack` / `performSkill` / `performSignature` (Team Combat):
       - เมื่อโจมตีติดคริติคอล (`isCrit`) หากผู้โจมตีมี Ability `colossal_tremor` จะปลดปล่อยคลื่นกระแทกแผ่นดินไหวทำดาเมจ 25% ATK ใส่ศัตรูทั้งหมดทันที พร้อมแสดงใน Battle Event Log
  4. **อัปเดตไอคอนใน UI การต่อสู้ (`src/ui/battle_view.ts`):**
     - เพิ่มอีโมจิประจำตัว `behemoth: '🦣'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_behemoth.ts` และเพิ่มคำสั่ง `"test:behemoth"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:behemoth`: ผ่าน 100% (ตรวจสอบทั้ง Stats, AB +15, Stun Immunity, Armor Break & Stun, AoE Shockwave 25% ATK)
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 10/10 ด่าน (100%)
       - `npm run test:skills`: ผ่าน 100%
       - `npm run typecheck`: 0 Error 100%
       - `npm run build`: Production Build สำเร็จ 100% (2.83s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_behemoth.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #069] – วันที่ 2026-11-05 – 09:25:00
- **คำสั่งจาก Game Director:**
  "ขอปรับ ability ของ ฟีนิกซ์ ให้ปรับเป็น เมื่อได้รับดาเมจถึงตายครั้งแรกในไฟต์ จะฟื้นคืนชีพ 100% และมีโอกาส 80% ที่จะฟื้นคืนชีพด้วย HP เต็ม (ถ้าไม่สำเร็จ จะฟื้นคืนชีพ 60% ของ HP )"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Phoenix Ability Rebirth from Ashes Enhancement):**
  1. **อัปเดตคำอธิบาย Ability ใน `src/data/heroes.json`:**
     - ปรับข้อความ `ability.description` ของ `phoenix` (`rebirth_ashes`) เป็น:
       `"มีสถานะผิวกายเพลิงถาวร (เพิ่มดาเมจไฟ 20% & ถูกโจมตีมีโอกาส 40% ศัตรูติดเผาไหม้/ระเบิด) · เมื่อได้รับดาเมจถึงตายครั้งแรกในไฟต์ จะฟื้นคืนชีพ 100% (มีโอกาส 80% ฟื้นคืนชีพด้วย HP เต็มหลอด, หากไม่สำเร็จฟื้น 60% ของ Max HP) และล้างดีบัฟทั้งหมด"`
  2. **พัฒนากลไกฟื้นคืนชีพในระบบต่อสู้ 1v1 (`src/engine/combat.ts`):**
     - ในฟังก์ชัน `checkKoAndBackup`:
       - เมื่อ `active.hp <= 0` และ `active.abilityId === 'rebirth_ashes'` และ `!active.reviveUsed`:
         - ตั้งค่า `active.reviveUsed = true`
         - ฟื้นคืนชีพแน่นอน **100%** ทันที (ไม่ตกหล่นหรือตายก่อนวัย)
         - สุ่มโอกาส 80% (`Math.random() < 0.80`):
           - หากสำเร็จ: ฟื้น HP **เต็มหลอด 100%** (`active.baseStats.maxHp`)
           - หากไม่สำเร็จ: ฟื้น HP **60%** ของ Max HP (`Math.round(active.baseStats.maxHp * 0.60)`)
         - ลบล้างดีบัฟสถานะผิดปกติทั้งหมดออก คงเหลือเฉพาะบัฟดี, เกราะ, และสถานะผิวกายเพลิง `fire_skin`
         - เติม SP อย่างน้อย 50%
         - บันทึก TurnEvent แสดงข้อความการฟื้นคืนชีพพร้อมระบุปริมาณ HP ชัดเจน
  3. **พัฒนากลไกฟื้นคืนชีพในระบบทีม 2v2 (`src/engine/team_combat.ts`):**
     - ในฟังก์ชัน `applyDamageToTarget`:
       - ดักจับเมื่อ `target.hp <= 0` สำหรับ `rebirth_ashes` เมื่อ `!target.reviveUsed`
       - ทำการฟื้นคืนชีพ 100% ด้วยกฎเดียวกัน (โอกาส 80% เต็มหลอด, หากไม่สำเร็จฟื้น 60% ของ Max HP พร้อมล้างดีบัฟและคงผิวกายเพลิง)
  4. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_phoenix_revive.ts` และเพิ่มคำสั่ง `"test:phoenix"` ใน `package.json`
     - ทดสอบ 100 ครั้งในโหมด 1v1: ฟื้นคืนชีพ 100/100 ครั้ง (ได้ HP เต็มหลอด ~80%, HP 60% ~20%)
     - ทดสอบ 100 ครั้งในโหมด 2v2: ฟื้นคืนชีพ 100/100 ครั้ง ป้องกันการตายในดาเมจถึงตายครั้งแรก 100%
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:phoenix`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run test:campaign`: ผ่าน 10/10 ด่าน (100%)
       - `npm run test:skills`: ผ่าน 100%
       - `npm run typecheck`: 0 Error 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (2.50s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_phoenix_revive.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

## [Backup #070] – วันที่ 2026-11-05 – 09:40:00
- **คำสั่งจาก Game Director:**
  "ตัวต่อไป ธาตุน้ำ 💧: เลเวียธาน (Leviathan)"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Mythical Beast SS Tier - Leviathan Water Striker):**
  1. **เพิ่มข้อมูลฮีโร่และ Archetype สเตตัสบาลานซ์ (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares.LEVIATHAN`: `[0.4835, 0.2308, 0.2857]` โดยยึด SS Class Budget = 182 พอยต์
     - กำหนด Base Stats: `STR: 88, AGI: 42, STA: 52` (รวม = 182 พอดี)
     - Multipliers พิเศษสำหรับ SS Tier: `hp: 1.05, atk: 1.05`
     - กำหนด `customSigMult: 4.3` (ดาเมจเดี่ยวรุนแรงตามบทบาท Striker)
     - กำหนดท่าไม้ตาย: `"มหาสึนามิกลืนสมุทร"` พร้อม Signature Effect รูปแบบใหม่ `dispel_and_sp_drain`:
       - `target: "enemy", count: 1, value: 25, chance: 0.85`
     - กำหนด Ability: `"จ้าวคลั่งสมุทร"` (`oceanic_surge`):
       - เมื่อ SP ของตนเองมากกว่าหรือเท่ากับ 50% Max SP สกิลธาตุน้ำจะแรงขึ้น +20%
       - เมื่อโจมตีศัตรูสำเร็จ มีโอกาส 40% ที่จะฟื้นฟู SP +15 ให้แก่ตนเอง
     - สกิลเริ่มต้น (Default Skills): `["water_l", "water_m1", "martial_l", "catalyst_l"]`
     - ตำแหน่งยืนที่เหมาะสม: แถวหน้า (`preferredRow: "front"`), `backlineChance: 0`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"leviathan": "ดาเมจเดี่ยว ×4.3 · โอกาส 85% สลายบัฟของศัตรู 1 อย่าง และตัด SP ศัตรู -25 SP"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Draco Leviathan Oceanus*
       - หมวดหมู่: อสูรบรรพกาลสมุทรในตำนาน (Primordial Abyssal Leviathan)
       - เชื่อมโยงหนึ่งใน 3 อสูรบรรพกาลผู้พิทักษ์โลก (ดิน-เบฮีมอธ, น้ำ-เลเวียธาน, ฟ้า-ซิซ)
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🐋'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - รองรับสถานะคอมโพสิต `dispel_and_sp_drain` ใน `applyEffectToTarget`:
       - สุ่มลบล้างบัฟด้านดีของศัตรู 1 บัฟ
       - ตัด SP ศัตรู -25 SP (ไม่ต่ำกว่า 0)
     - พัฒนากลไก Ability `oceanic_surge`:
       - เพิ่มตัวคูณดาเมจสกิลและท่าไม้ตายธาตุน้ำ +20% เมื่อ SP ของตนเอง >= 50% Max SP
       - เพิ่มโอกาส 40% ในการฟื้นฟู SP +15 ให้ตนเองหลังการโจมตีโดนเป้าหมาย (Normal Attack, Skill, Signature)
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_leviathan.ts` และเพิ่มคำสั่ง `"test:leviathan"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:leviathan`: ผ่านฉลุย 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run test:phoenix`: ผ่าน 100%
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_leviathan.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

## [Backup #071] – วันที่ 2026-11-05 – 09:48:00
- **คำสั่งจาก Game Director:**
  "ตัวต่อไป ธาตุลม 🌪️: พญาครุฑ (Garuda)"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Mythical Beast SS Tier - Garuda Wind Striker):**
  1. **เพิ่มข้อมูลฮีโร่และ Archetype สเตตัสบาลานซ์ (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares.GARUDA`: `[0.489, 0.2582, 0.2528]` โดยยึด SS Class Budget = 182 พอยต์
     - กำหนด Base Stats: `STR: 89, AGI: 47, STA: 46` (รวม = 182 พอดี)
     - Multipliers พิเศษสำหรับ SS Tier: `hp: 1.05, atk: 1.05`
     - กำหนด `customSigMult: 4.4` (ดาเมจเดี่ยวรุนแรง พร้อมการันตีคริติคอล 100%)
     - กำหนดท่าไม้ตาย: `"วายุสลาตันฉีกนภา"` พร้อม Signature Effect ติดสถานะเลือดไหล:
       - `type: "bleed", duration: 2, chance: 0.9`
     - กำหนด Ability: `"กรงเล็บเวหาสังหาร"` (`sky_rending_talons`):
       - อัตราคริติคอล CRI +12% และความเสียหายคริติคอล CriDmg +25%
       - มีภูมิคุ้มกันสถานะตรึงร่าง (Root) และสโลว์ (Slow) 100%
     - สกิลเริ่มต้น (Default Skills): `["wind_l", "wind_m1", "martial_l", "catalyst_l"]`
     - ตำแหน่งยืนที่เหมาะสม: แถวหน้า (`preferredRow: "front"`), `backlineChance: 0`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"garuda": "ดาเมจเดี่ยว ×4.4 (การันตีคริติคอล 100%) · โอกาส 90% ทำให้ศัตรูติดเลือดไหล 2 เทิร์น"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Aquila Garuda Divinus*
       - หมวดหมู่: พญาราชปักษาวายุสวรรค์ในตำนาน (Celestial Sovereign Raptor)
       - เชื่อมโยงเจ้าแห่งเวหาผู้พิทักษ์ความยุติธรรมและคู่ปรับตลอดกาลของพญานาค
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🦅'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `getEffectiveStats`: บวกโบนัสสเตตัสถาวรของ Ability `sky_rending_talons`:
       - `s.cri += 12; s.criDmg += 0.25;`
     - ใน `applyEffectToTarget`: ดักจับภูมิคุ้มกันตรึงร่าง (Root) และสโลว์ (Slow) 100% สำหรับ `sky_rending_talons`
     - ใน `performHit` (1v1) และ `performSignature` (2v2): กำหนดให้ท่าไม้ตายวายุสลาตันฉีกนภาของการันตีคริติคอล (`isCrit = true`) 100% เมื่อโจมตีโดนเป้าหมาย
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_garuda.ts` และเพิ่มคำสั่ง `"test:garuda"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:garuda`: ผ่านฉลุย 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run test:phoenix`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (3.84s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_garuda.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

## [Backup #072] – วันที่ 2026-11-05 – 09:55:00
- **คำสั่งจาก Game Director:**
  "ตัวต่อไป ธาตุสายฟ้า ⚡: ธันเดอร์เบิร์ด (Thunderbird)"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Mythical Beast SS Tier - Thunderbird Electric Striker):**
  1. **เพิ่มข้อมูลฮีโร่และ Archetype สเตตัสบาลานซ์ (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares.THUNDERBIRD`: `[0.4945, 0.2527, 0.2528]` โดยยึด SS Class Budget = 182 พอยต์
     - กำหนด Base Stats: `STR: 90, AGI: 46, STA: 46` (รวม = 182 พอดี)
     - Multipliers พิเศษสำหรับ SS Tier: `hp: 1.05, atk: 1.05`
     - กำหนด `customSigMult: 4.5` (ดาเมจเดี่ยวรุนแรงตามบทบาท Striker)
     - กำหนดท่าไม้ตาย: `"มหาอัสนีบาตผ่าพิภพ"` พร้อม Signature Effect รูปแบบคอมโพสิต `stun_and_gauge_drain`:
       - `duration: 1, value: 25, chance: 0.85`
     - กำหนด Ability: `"ประกายประจุอัสนีคลั่ง"` (`static_discharge`):
       - ทุกการโจมตีสำเร็จ มีโอกาส 45% เกิดสายฟ้าแฉลบผ่าซ้ำทำดาเมจสายฟ้า 30% ATK
       - เมื่อโค่นศัตรูลงได้ ได้รับเกจไม้ตายทันที +25 เกจ
     - สกิลเริ่มต้น (Default Skills): `["electric_l", "electric_m1", "martial_l", "catalyst_l"]`
     - ตำแหน่งยืนที่เหมาะสม: แถวหน้า (`preferredRow: "front"`), `backlineChance: 0`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"thunderbird": "ดาเมจเดี่ยว ×4.5 · โอกาส 85% ทำให้เป้าหมายติดสตัน 1 เทิร์น และตัดเกจไม้ตายศัตรู -25"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Aquila Fulgur Giganteus*
       - หมวดหมู่: วิหคอัสนีบาตบรรพกาลในตำนาน (Primordial Thunder Raptor)
       - เชื่อมโยงราชาแห่งวิหคอัสนีในตำนานอินเดียนแดงโบราณที่กระพือปีกเป็นฟ้าแลบฟ้าร้อง
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🌩️'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `applyEffectToTarget`: รองรับคอมโพสิตเอฟเฟกต์ `stun_and_gauge_drain`:
       - สั่งสตัน 1 เทิร์น (พร้อมเช็กภูมิคุ้มกันสตัน)
       - สั่งตัดเกจศัตรู -25 แต้ม
     - ใน `performHit` (1v1) และ `performNormalAttack`, `performSkill`, `performSignature` (2v2):
       - ทุกครั้งที่โจมตีโดนศัตรู มีโอกาส 45% ปล่อยสายฟ้าแฉลบผ่าซ้ำทำดาเมจ 30% ATK
       - เมื่อสังหารศัตรูสำเร็จ (`def.hp <= 0`) ได้รับเกจไม้ตายทันที +25
     - ปรับปรุงการบันทึก `isCrit` ของท่าไม้ตายใน 2v2 (`team_combat.ts`) ให้ผูกกับผลการติดคริจริงของเป้าหมาย
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_thunderbird.ts` และเพิ่มคำสั่ง `"test:thunderbird"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:thunderbird`: ผ่านฉลุย 100%
       - `npm run test:garuda`: ผ่าน 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run test:phoenix`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (2.74s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_thunderbird.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

## [Backup #073] – วันที่ 2026-11-05 – 10:05:00
- **คำสั่งจาก Game Director:**
  "ตัวต่อไป ธาตุน้ำแข็ง ❄️: เฟนริร์ (Fenrir)"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Mythical Beast SS Tier - Fenrir Ice Striker):**
  1. **เพิ่มข้อมูลฮีโร่และ Archetype สเตตัสบาลานซ์ (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares.FENRIR`: `[0.5, 0.2253, 0.2747]` โดยยึด SS Class Budget = 182 พอยต์
     - กำหนด Base Stats: `STR: 91, AGI: 41, STA: 50` (รวม = 182 พอดี)
     - Multipliers พิเศษสำหรับ SS Tier: `hp: 1.05, atk: 1.05`
     - กำหนด `customSigMult: 4.6` (ดาเมจเดี่ยวรุนแรงตามบทบาท Striker)
     - กำหนดท่าไม้ตาย: `"เขี้ยวรัตติกาลกลืนเหมันต์"` พร้อม Signature Effect แช่แข็ง `freeze`:
       - `duration: 1, chance: 0.85` (แช่แข็งศัตรู 1 เทิร์น พร้อมกลไกบังคับเปลี่ยนธาตุเป้าหมายเป็นธาตุน้ำแข็ง)
     - กำหนด Ability: `"เขี้ยวเหมันต์ฉีกวิญญาณ"` (`glacial_fang_hunt`):
       - หากศัตรูมีสถานะแช่แข็ง (Freeze) หรือผิวกายเหมันต์ (Ice Skin) โจมตีแรงขึ้น +30%
       - การโจมตีทั้งหมดได้รับพลังดูดเลือด +12% ของดาเมจที่สร้างได้
     - สกิลเริ่มต้น (Default Skills): `["ice_l", "ice_m1", "martial_l", "catalyst_l"]`
     - ตำแหน่งยืนที่เหมาะสม: แถวหน้า (`preferredRow: "front"`), `backlineChance: 0`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"fenrir": "ดาเมจเดี่ยว ×4.6 · โอกาส 85% แช่แข็งศัตรู 1 เทิร์น (บังคับเปลี่ยนเป็นธาตุน้ำแข็ง)"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Canis Fenrir Glacialis*
       - หมวดหมู่: พญาหมาป่าอสูรกลืนเหมันต์ในตำนาน (Primordial Frost Direwolf)
       - เชื่อมโยงราชาหมาป่ายักษ์ในตำนานนอร์สผู้กลืนกินดวงอาทิตย์ในวันรักนาร็อค
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🐺'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `combat.ts` (1v1):
       - ใน `performHit`: เพิ่มเงื่อนไขโบนัสดาเมจ +30% หากศัตรูติด `freeze` หรือ `ice_skin`
       - ใน `abilityLs`: เพิ่มการดูดเลือด 12% ให้ `glacial_fang_hunt` ในทุกการโจมตี (ยกเว้นเมื่อติดสถานะ `stone_curse`)
     - ใน `team_combat.ts` (2v2):
       - ใน `performNormalAttack`, `performSkill`, `performSignature`:
         - เพิ่มโบนัสดาเมจ +30% หากเป้าหมายมี `freeze` หรือ `ice_skin`
         - เพิ่มการฟื้นฟู HP จากการดูดเลือด +12% ดาเมจสุทธิ (พร้อมเช็ก `!hasStatus(att, 'stone_curse')`)
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_fenrir.ts` และเพิ่มคำสั่ง `"test:fenrir"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:fenrir`: ผ่านฉลุย 100%
       - `npm run test:thunderbird`: ผ่าน 100%
       - `npm run test:garuda`: ผ่าน 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100% (2.43s)
       - `npm run typecheck`: ผ่าน 0 errors
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_fenrir.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

## [Backup #074] – วันที่ 2026-11-05 – 10:15:00
- **คำสั่งจาก Game Director:**
  "ตัวต่อไป ธาตุพืช 🌿: ไฮดราพฤกษา"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Mythical Beast SS Tier - Verdant Hydra Plant Striker):**
  1. **เพิ่มข้อมูลฮีโร่และ Archetype สเตตัสบาลานซ์ (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares.VERDANT_HYDRA`: `[0.478, 0.2143, 0.3077]` โดยยึด SS Class Budget = 182 พอยต์
     - กำหนด Base Stats: `STR: 87, AGI: 39, STA: 56` (รวม = 182 พอดี)
     - Multipliers พิเศษสำหรับ SS Tier: `hp: 1.05, atk: 1.05`
     - กำหนด `customSigMult: 4.2` (ดาเมจเดี่ยวรุนแรงตามบทบาท Striker กึ่งดูดกลืนพลัง)
     - กำหนดท่าไม้ตาย: `"เก้าเศียรพฤกษากลืนปฐพี"` พร้อม Signature Effect ตรึงร่าง `root`:
       - `duration: 2, chance: 0.8` (ตรึงร่างศัตรู 2 เทิร์น FLEE กลายเป็น 0)
       - สูบเลือดกลับมาฟื้นฟูตนเอง 25% ของดาเมจที่ทำได้
     - กำหนด Ability: `"หนามงอกเงยคืนชีพ"` (`thorn_regrowth`):
       - ทุกต้นเทิร์น ฟื้นฟูเลือดตนเอง 4% Max HP
       - ทุกครั้งที่ทำดาเมจใส่ศัตรู จะสร้างเกราะป้องกัน (Shield) เท่ากับ 15% ของดาเมจที่ทำได้ (สูงสุด 50% Max HP)
     - สกิลเริ่มต้น (Default Skills): `["plant_l", "plant_m1", "martial_l", "catalyst_l"]`
     - ตำแหน่งยืนที่เหมาะสม: แถวหน้า (`preferredRow: "front"`), `backlineChance: 0`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"verdant_hydra": "ดาเมจเดี่ยว ×4.2 · สูบเลือด 25% ของดาเมจที่ทำได้กลับมาฟื้นฟู HP ตนเอง และโอกาส 80% ตรึงร่างศัตรู 2 เทิร์น"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Hydra Botanica Gigantea*
       - หมวดหมู่: อสูรพฤกษาบรรพกาลเก้าเศียรในตำนาน (Primordial Verdant Nine-Headed Hydra)
       - ตำนานอสูรพฤกษาโบราณเก้าเศียร ลำต้นเถาวัลย์หนามเหล็ก ตัดไม่ตายงอกใหม่ทวีคูณ
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🐲'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `applyEffectToTarget`: เพิ่มการระบุข้อความสถานะ `root` ให้ชัดเจน `"ติดตรึงร่าง (2 เทิร์น)"`
     - ใน `combat.ts` (1v1):
       - ใน `processStartOfTurnStatuses`: เพิ่มการฟื้นฟูเลือด 4% Max HP ทุกต้นเทิร์นเมื่อมี `thorn_regrowth` (ยกเว้นเมื่อติด `stone_curse`)
       - ใน `performHit`: เพิ่มการสูบเลือดไม้ตาย 25% ของดาเมจ และสร้างเกราะหนาม 15% ของดาเมจ
     - ใน `team_combat.ts` (2v2):
       - ใน `processStartOfTurn`: เพิ่มการฟื้นฟูเลือด 4% Max HP ทุกต้นเทิร์นเมื่อมี `thorn_regrowth`
       - ใน `performNormalAttack`, `performSkill`, `performSignature`: เพิ่มการสร้างเกราะหนาม 15% ของดาเมจ และสูบเลือดไม้ตาย 25% สำหรับ `verdant_hydra`
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_verdant_hydra.ts` และเพิ่มคำสั่ง `"test:verdant_hydra"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:verdant_hydra`: ผ่านฉลุย 100%
       - `npm run test:fenrir`: ผ่าน 100%
       - `npm run test:thunderbird`: ผ่าน 100%
       - `npm run test:garuda`: ผ่าน 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100%
       - `npm run typecheck`: ผ่าน 0 errors
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_verdant_hydra.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

## [Backup #075] – วันที่ 2026-11-05 – 10:25:00
- **คำสั่งจาก Game Director:**
  "ตัวต่อไป ธาตุพิษ ☠️: บาซิลิสก์ (Basilisk)"
- **สิ่งที่ได้ดำเนินการพัฒนาและติดตั้ง (Mythical Beast SS Tier - King Basilisk Poison Striker):**
  1. **เพิ่มข้อมูลฮีโร่และ Archetype สเตตัสบาลานซ์ (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares.KING_BASILISK`: `[0.489, 0.2363, 0.2747]` โดยยึด SS Class Budget = 182 พอยต์
     - กำหนด Base Stats: `STR: 89, AGI: 43, STA: 50` (รวม = 182 พอดี)
     - Multipliers พิเศษสำหรับ SS Tier: `hp: 1.05, atk: 1.05`
     - กำหนด `customSigMult: 4.5` (ดาเมจเดี่ยวรุนแรงตามบทบาท Striker)
     - กำหนดท่าไม้ตาย: `"เนตรมรณะพิษอเวจี"` พร้อม Signature Effect รูปแบบคอมโพสิต `max_poison_and_armor_break`:
       - `duration: 3, value: 0.30, chance: 0.90` (การันตีติดพิษเต็ม Max Stack 2 ชั้น นาน 3 เทิร์น และลด DEF 30% 2 เทิร์น)
     - กำหนด Ability: `"ไอกรดพิษละลายกระดูก"` (`caustic_venom_aura`):
       - ทุกการโจมตีใส่ศัตรูที่ติดสถานะ **พิษ (Poison)** จะสร้างดาเมจรุนแรงขึ้นทันที **+25%**
       - เมื่อถูกศัตรูโจมตี มีโอกาส **40%** ที่จะแพร่พิษสวนกลับใส่ผู้โจมตี 1 ชั้น (นาน 3 เทิร์น)
     - สกิลเริ่มต้น (Default Skills): `["poison_l", "poison_m1", "martial_l", "catalyst_l"]`
     - ตำแหน่งยืนที่เหมาะสม: แถวหน้า (`preferredRow: "front"`), `backlineChance: 0`
     - กำหนด ID: `king_basilisk` เพื่อแยกจากฮีโร่ Rank B `basilisk` (กิ้งก่าบาซิลิสก์) ชัดเจนไร้การชนของข้อมูล
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"king_basilisk": "ดาเมจเดี่ยว ×4.5 · โอกาส 90% ทำให้ศัตรูติดพิษสะสมสูงสุด 2 ชั้นทันที (3 เทิร์น) และลด DEF 30% (2 เทิร์น)"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Basiliscus Regalis Venenosus*
       - หมวดหมู่: ราชันย์อสรพิษเนตรมรณะในตำนาน (Primordial Deathgaze Basilisk King)
       - ตำนานพญางูยักษ์ราชาแห่งอสรพิษ ลมหายใจไอกรดพิษ และดวงตาแห่งความตาย
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🐍'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji` (แยกต่างหากจาก `basilisk` กิ้งก่าที่เป็น `'🦎'`)
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `applyEffectToTarget`: รองรับคอมโพสิตเอฟเฟกต์ `max_poison_and_armor_break` (ติดพิษ 2 ชั้นทันที & ลด DEF 30%)
     - ใน `combat.ts` (1v1):
       - ใน `performHit`: โบนัสดาเมจ +25% เมื่อโจมตีเป้าหมายติดพิษ และโอกาส 40% แพร่พิษสวนกลับเมื่อถูกโจมตี
     - ใน `team_combat.ts` (2v2):
       - ใน `performNormalAttack`, `performSkill`, `performSignature`: โบนัสดาเมจ +25% เมื่อโจมตีเป้าหมายติดพิษ และโอกาส 40% แพร่พิษสวนกลับเมื่อถูกโจมตี
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_king_basilisk.ts` และเพิ่มคำสั่ง `"test:king_basilisk"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:king_basilisk`: ผ่านฉลุย 100%
       - `npm run test:verdant_hydra`: ผ่าน 100%
       - `npm run test:fenrir`: ผ่าน 100%
       - `npm run test:thunderbird`: ผ่าน 100%
       - `npm run test:garuda`: ผ่าน 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run test:new-statuses`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100%
       - `npm run typecheck`: ผ่าน 0 errors
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_king_basilisk.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #076] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** เพิ่มสัตว์มายา/สัตว์ในตำนานระดับ SS สาย Striker ธาตุมืด 🌑: **เซอร์เบอรัส (Cerberus)**
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **โครงสร้างและค่าสเตตัสฮีโร่ (`src/data/heroes.json`):**
     - Hero ID: `cerberus`
     - ชื่อภาษาไทย: `เซอร์เบอรัส`
     - Rarity: `SS`
     - Role: `Striker`
     - ธาตุ: `dark` (ธาตุมืด)
     - Archetype: `CERBERUS` สัดส่วน `[0.5055, 0.2198, 0.2747]` (STR 92, AGI 40, STA 50 รวม 182 พอดีตาม SS Budget)
     - Custom Multipliers: `hp: 1.05, atk: 1.05`
     - Preferred Row: `front` (backlineChance: 0)
     - Custom Signature Multiplier: `customSigMult: 4.7` (เบิสต์เดี่ยวรุนแรงที่สุดในหมู่ SS Striker)
     - ท่าไม้ตาย: `เพลิงทมิฬทาร์ทารัส` (โอกาส 80% ติดคำสาปมรณะ Curse ถาวร ลด HP 3%/เทิร์นจนกว่าจะล้างสถานะ)
     - Ability: `tartarus_three_fangs` ("สามเศียรฉีกกระชากบัฟ") — ทุกครั้งที่โจมตี มีโอกาส 35% กัดซ้ำทำดาเมจ 35% ATK · และมีโอกาส 30% สลายบัฟของศัตรู 1 อย่าง
     - Default Skills: `["dark_l", "dark_m1", "martial_l", "catalyst_l"]`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"cerberus": "ดาเมจเดี่ยว ×4.7 · โอกาส 80% ติดคำสาปมรณะ Curse (ลด HP 3%/เทิร์นถาวรจนกว่าจะล้างสถานะ)"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Canis Tartarus Cerberus*
       - หมวดหมู่: อสูรสามเศียรผู้เฝ้าประตูนรกทาร์ทารัสในตำนาน (Primordial Tartarus Three-Headed Hound)
       - ตำนานสุนัขเฝ้าประตูนรกทาร์ทารัส เปลวเพลิงทมิฬไม่อาจดับ และการกัดซ้ำสลายบัฟ
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🐕'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `combat.ts` (1v1):
       - ใน `performHit`: เพิ่มการทำงานของ Ability `tartarus_three_fangs` เมื่อโจมตีโดน มีโอกาส 35% กัดซ้ำทำดาเมจ 35% ATK และโอกาส 30% สลายบัฟของศัตรู 1 อย่าง
     - ใน `team_combat.ts` (2v2):
       - ใน `applyEffectToTarget`: รองรับสถานะ `curse` (คำสาปถาวร duration 999) และเพิ่ม `curse` เข้าในกลุ่มที่ `cleanse` สามารถล้างออกได้
       - ใน `processStartOfTurn`: คำนวณ DOT ดาเมจ 3% Max HP จากสถานะ `curse`
       - ใน `tickStatuses`: ยกเว้นสถานะ `curse` ไม่ให้ถูกลดระยะเวลาเทิร์น (คงอยู่ถาวร)
       - ใน `performNormalAttack`, `performSkill`, `performSignature`: เพิ่มกลไก Ability `tartarus_three_fangs` กัดซ้ำ 35% และสลายบัฟ 30%
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_cerberus.ts` และเพิ่มคำสั่ง `"test:cerberus"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:cerberus`: ผ่าน 100%
       - `npm run test:king_basilisk`: ผ่าน 100%
       - `npm run test:verdant_hydra`: ผ่าน 100%
       - `npm run test:fenrir`: ผ่าน 100%
       - `npm run test:thunderbird`: ผ่าน 100%
       - `npm run test:garuda`: ผ่าน 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:phoenix`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100%
       - `npm run typecheck`: ผ่าน 0 errors
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_cerberus.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #077] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** เพิ่มสัตว์มายา/สัตว์ในตำนานระดับ SS สาย Striker ธาตุแสง ✨: **พญากริฟฟอนสุริยัน (Solar Griffin)**
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **โครงสร้างและค่าสเตตัสฮีโร่ (`src/data/heroes.json`):**
     - Hero ID: `solar_griffin`
     - ชื่อภาษาไทย: `พญากริฟฟอนสุริยัน`
     - Rarity: `SS`
     - Role: `Striker`
     - ธาตุ: `light` (ธาตุแสง)
     - Archetype: `SOLAR_GRIFFIN` สัดส่วน `[0.4945, 0.2418, 0.2637]` (STR 90, AGI 44, STA 48 รวม 182 พอดีตาม SS Budget)
     - Custom Multipliers: `hp: 1.05, atk: 1.05`
     - Preferred Row: `front` (backlineChance: 0)
     - Custom Signature Multiplier: `customSigMult: 4.4` (ดาเมจเดี่ยวรุนแรง)
     - ท่าไม้ตาย: `แสงสุริยะพิพากษา` (โอกาส 85% สลายบัฟของศัตรูทั้งหมด และทำให้ศัตรูติดตาบอด 2 เทิร์น)
     - Ability: `solar_piercing_crest` ("รัศมีสุริยะเจาะเกราะ") — เพิ่มความแม่นยำ HIT +15 และเจาะเกราะ AB +15 ถาวร · มีภูมิคุ้มกันสถานะตาบอด (Blind) 100%
     - Default Skills: `["light_l", "light_m1", "martial_l", "catalyst_l"]`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"solar_griffin": "ดาเมจเดี่ยว ×4.4 · โอกาส 85% สลายบัฟของศัตรูทั้งหมด และทำให้ศัตรูติดตาบอด (2 เทิร์น)"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Gryphus Regalis Solaris*
       - หมวดหมู่: ราชันย์กริฟฟอนสุริยันในตำนาน (Primordial Solar Golden Griffin King)
       - ตำนานราชันย์อินทรีสิงโตทองคำ ขนสีทองอร่ามสะท้อนแสงอาทิตย์ และกรงเล็บสุริยะ
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🦅'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `getEffectiveStats`: ติดตั้งโบนัสถาวร HIT +15 และ AB +15 สำหรับผู้ถือ Ability `solar_piercing_crest`
     - ใน `applyEffectToTarget` (1v1 & 2v2):
       - ติดตั้งภูมิคุ้มกันสถานะตาบอด (Blind Immunity 100%) เมื่อมี Ability `solar_piercing_crest`
       - รองรับเอฟเฟกต์คอมโพสิต `dispel_all_and_blind`: สลายบัฟทั้งหมดของเป้าหมาย (รวมเกราะ shield เป็น 0) และทำให้ติดตาบอด 2 เทิร์น
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_solar_griffin.ts` และเพิ่มคำสั่ง `"test:solar_griffin"` ใน `package.json`
     - ผ่านการทดสอบทั้งหมด 100%:
       - `npm run test:solar_griffin`: ผ่าน 100%
       - `npm run test:cerberus`: ผ่าน 100%
       - `npm run test:king_basilisk`: ผ่าน 100%
       - `npm run test:verdant_hydra`: ผ่าน 100%
       - `npm run test:fenrir`: ผ่าน 100%
       - `npm run test:thunderbird`: ผ่าน 100%
       - `npm run test:garuda`: ผ่าน 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:phoenix`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100%
       - `npm run typecheck`: ผ่าน 0 errors
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_solar_griffin.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #078] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** เพิ่มสัตว์มายา/สัตว์ในตำนานระดับ SS สาย Striker ตัวสุดท้าย ธาตุพลังจิต 🔮: **พญาจิ้งจอกเก้าหาง (Nine-Tailed Fox)**
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **โครงสร้างและค่าสเตตัสฮีโร่ (`src/data/heroes.json`):**
     - Hero ID: `nine_tailed_fox`
     - ชื่อภาษาไทย: `พญาจิ้งจอกเก้าหาง`
     - Rarity: `SS`
     - Role: `Striker`
     - ธาตุ: `psychic` (ธาตุพลังจิต)
     - Archetype: `NINE_TAILED_FOX` สัดส่วน `[0.4835, 0.2527, 0.2638]` (STR 88, AGI 46, STA 48 รวม 182 พอดีตาม SS Budget)
     - Custom Multipliers: `hp: 1.05, atk: 1.05`
     - Preferred Row: `front` (backlineChance: 0)
     - Custom Signature Multiplier: `customSigMult: 4.3` (ดาเมจเดี่ยวเจาะเกราะ)
     - ท่าไม้ตาย: `เก้าหางสะกดวิญญาณ` (ดาเมจเดี่ยว ×4.3, ทะลวงเกราะ 25% [Ignore DEF 25%], และตัด SP ศัตรู -30 SP ทันที)
     - Ability: `psionic_spirit_orbs` ("ลูกแก้วพลังจิตทวีคูณ") —
       - เมื่อใช้สกิลหรือท่าไม้ตาย จะสะสมลูกแก้วจิตวิญญาณ 1 ลูก (สูงสุด 4 ลูก, ถาวรตลอดการต่อสู้) แต่ละลูกเพิ่ม ATK +5% (สูงสุด +20% ATK)
       - เมื่อถูกโจมตี มีโอกาส 35% สะท้อนจิตทำให้ผู้โจมตีติดสถานะสับสน (Confusion) 2 เทิร์น
     - Default Skills: `["psychic_l", "psychic_m1", "martial_l", "catalyst_l"]`
  2. **คำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์ในตำนาน:**
     - เพิ่มคำอธิบายใน `src/data/signature_descriptions.json`:
       - `"nine_tailed_fox": "ดาเมจเดี่ยว ×4.3 (เจาะเกราะ 25%) · ตัด SP ศัตรู -30 SP ทันที"`
     - เพิ่ม Lore บันทึกทางชีววิทยาและตำนานปรัมปราใน `src/data/animal_lore.json`:
       - ชื่อวิทยาศาสตร์: *Vulpes Spiritus Novem*
       - หมวดหมู่: พญาจิ้งจอกเก้าหางมายาในตำนาน (Primordial Nine-Tailed Celestial Fox)
       - ตำนานจิ้งจอกเก้าหางสวรรค์ผู้บำเพ็ญตบะนับพันปี ควบคุมลูกแก้วพลังจิตมายาและมนต์สะกดวิญญาณ
  3. **ไอคอนและอวตารการต่อสู้ (`src/ui/battle_view.ts`):**
     - กำหนดอีโมจิประจำตัว: `'🦊'` ใน `HERO_EMOJI_MAP` และ `getFighterAvatarEmoji`
  4. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`) & 2v2 (`src/engine/team_combat.ts`):**
     - ใน `getEffectiveStats`: เพิ่มการคำนวณโบนัส ATK +5% ต่อสแตกของลูกแก้วจิตวิญญาณ (`spirit_orb`) สูงสุด +20%
     - ใน `tickEndOfTurnStatuses` และ `tickStatuses`: กำหนดให้ `spirit_orb` เป็นสถานะถาวร (Permanent Effect เช่นเดียวกับคำสาป Curse) ไม่หมดอายุตามรอบ
     - ใน `performHit` (1v1) และ `performNormalAttack` / `performSkill` / `performSignature` (2v2):
       - สะสม `spirit_orb` (+1 สแตก สูงสุด 4 สแตก) เมื่อร่ายสกิลหรือท่าไม้ตาย
       - โอกาส 35% สวนกลับด้วยสถานะสับสน (Confusion 2 เทิร์น) เมื่อถูกโจมตี
       - ท่าไม้ตายของ `nine_tailed_fox` ทะลวงเกราะป้องกันของศัตรู 25% (`effDef *= 0.75`)
       - รองรับเอฟเฟกต์ `sp_drain` ใน `applyEffectToTarget` สำหรับโหมดทีม 2v2
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_nine_tailed_fox.ts` และเพิ่มคำสั่ง `"test:nine_tailed_fox"` ใน `package.json`
     - ผ่านการทดสอบครบ 100%:
       - `npm run test:nine_tailed_fox`: ผ่าน 100%
       - `npm run test:solar_griffin`: ผ่าน 100%
       - `npm run test:cerberus`: ผ่าน 100%
       - `npm run test:king_basilisk`: ผ่าน 100%
       - `npm run test:verdant_hydra`: ผ่าน 100%
       - `npm run test:fenrir`: ผ่าน 100%
       - `npm run test:thunderbird`: ผ่าน 100%
       - `npm run test:garuda`: ผ่าน 100%
       - `npm run test:leviathan`: ผ่าน 100%
       - `npm run test:phoenix`: ผ่าน 100%
       - `npm run test:behemoth`: ผ่าน 100%
       - `npm run build`: สร้าง Production Build สำเร็จ 100%
       - `npm run typecheck`: ผ่าน 0 errors
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_nine_tailed_fox.ts`
  - `src/sim/test_king_basilisk.ts`
  - `src/sim/test_fenrir.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #079] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ปรับปรุงเพิ่มเติม Ability `psionic_spirit_orbs` (ลูกแก้วพลังจิตทวีคูณ) ของพญาจิ้งจอกเก้าหาง: เมื่อสะสมลูกแก้วครบ 4 ลูกแล้ว มีโอกาส 20% ที่จะระเบิดพลังลูกแก้วออกไป สร้างการโจมตีที่หนักหน่วงในเทิร์นนั้น (แนวทางที่ 2: ระเบิดมหาประลัย สลายลูกแก้วทั้ง 4 ลูก แล้วเริ่มสะสมใหม่)
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **โครงสร้างและคำอธิบาย Ability (`src/data/heroes.json`):**
     - อัปเดต `description` ของ `psionic_spirit_orbs`:
       `"ทุกครั้งที่ร่ายสกิลสำเร็จ จะสะสมลูกแก้วจิตวิญญาณ 1 ลูก (เพิ่ม ATK +5% สูงสุด 4 ลูก รวม +20%) · เมื่อสะสมครบ 4 ลูก มีโอกาส 20% ที่จะระเบิดพลังลูกแก้วสร้างความเสียหายมหาประลัยและตัด SP -15 ศัตรูทุกคน (สลายลูกแก้วเริ่มสะสมใหม่) · เมื่อถูกโจมตี มีโอกาส 35% ทำให้ผู้โจมตีติดสับสน (Confusion 2 เทิร์น)"`
  2. **พัฒนากลไกระบบต่อสู้ 1v1 (`src/engine/combat.ts`):**
     - ใน `performHit`: เมื่อจิ้งจอกเก้าหางทำการโจมตี (ทั้งโจมตีธรรมดา สกิล หรือท่าไม้ตาย) และมี `spirit_orb` ครบ 4 สแตก มีโอกาส 20% ที่จะสั่งการระเบิดพลังลูกแก้ว:
       - ลบล้างสแตก `spirit_orb` ออกจากตัว (Reset กลับเป็น 0 สแตก เพื่อเริ่มสะสมรอบใหม่ในสกิลถัดไป)
       - สร้างความเสียหายระเบิดเดี่ยวอย่างหนักหน่วง **90% ของ ATK** (`Math.max(1, Math.round(attStats.atk * 0.90))`)
       - ตัด SP ของเป้าหมายลงทันที **-15 SP** (`def.sp = Math.max(0, def.sp - 15)`)
  3. **พัฒนากลไกระบบต่อสู้ 2v2 (`src/engine/team_combat.ts`):**
     - ใน `performNormalAttack`, `performSkill`, และ `performSignature`: เมื่อจิ้งจอกเก้าหางโจมตีและมีลูกแก้วครบ 4 สแตก มีโอกาส 20% ที่จะจุดระเบิดพลังลูกแก้ว:
       - ลบล้างสแตก `spirit_orb` ออกจากตัว (Reset กลับเป็น 0 สแตก)
       - สร้างความเสียหายระเบิดหมู่ AoE ใส่ **ศัตรูที่มีชีวิตทั้งหมดในสนาม** แรง **65% ของ ATK** ต่อตัว
       - ตัด SP ของศัตรูทุกคนในสนามลงคนละ **-15 SP**
  4. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - อัปเดตชุดทดสอบ `src/sim/test_nine_tailed_fox.ts`:
       - ทดสอบการจุดระเบิด 20% เมื่อมี 4 ลูกแก้ว และตรวจสอบการสลายลูกแก้ว (Reset to 0) สำเร็จ
       - ทดสอบ Endurance Battle ต่อสู้ 50 เทิร์น พิสูจน์การสะสมครบ 4 ลูก -> ระเบิดสลาย -> เริ่มสะสมใหม่วนซ้ำได้อย่างสมบูรณ์ (ตรวจพบระเบิดตามธรรมชาติในเทิร์น 16 และ 44)
     - รัน `npm run test:nine_tailed_fox`: ผ่าน 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: สร้าง Production Build สำเร็จ 100% (Built in 2.99s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_nine_tailed_fox.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #080] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ปรับตรงส่วนของข้อความแสดงสถานะปกติในหน้าจอต่อสู้ (Overhead Status Effects) ให้แสดงแค่ไอคอนสถานะ เพื่อไม่ให้บล็อคตัวละครขยายออกด้านข้างตามความยาวของชื่อสถานะ
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **ปรับปรุงฟังก์ชันแสดงผลสถานะเหนือศีรษะตัวละคร (`src/ui/battle_view.ts`):**
     - ในฟังก์ชัน `renderOverheadEffectsHtml`:
       - ตัด `<span class="ov-eff-name">${item.name}</span>` และ `<span class="ov-eff-dur">${item.duration}T</span>` ออกจากตัว Badge เหนือศีรษะตัวละครในสนามต่อสู้
       - เรนเดอร์เฉพาะไอคอนสถานะ `<span class="ov-eff-icon">${item.icon}</span>` (และสแตกรวมถ้ามีมากกว่า 1 ชั้น)
       - เก็บชื่อสถานะ, รายละเอียดผลกระทบ และจำนวนเทิร์นที่เหลือทั้งหมดไว้ใน `title` tooltip อย่างครบถ้วน (`title="${item.name}: ${item.description} (เหลือ ${durLabel})"`) รองรับการ Hover หรือ Tap ดูข้อมูลได้สมบูรณ์
  2. **ปรับแต่งสไตล์ CSS ให้เป็นทรงไอคอนกะทัดรัด (`src/style.css`):**
     - ปรับแต่งคลาส `.overhead-effect-pill`:
       - กำหนดขนาดแบบไอคอน `min-width: 20px; height: 20px; justify-content: center; padding: 1px 4px;`
       - เพิ่ม Interaction `cursor: help; transition: transform 0.15s ease;` ขยายป้ายเล็กน้อยเมื่อชี้ (`scale(1.18)`)
       - บล็อคตัวละคร `.arena-unit-box` จะไม่ถูกดันให้ขยายกว้างตามชื่อสถานะอีกต่อไป กล่องจะคงขนาดกะทัดรัด พอดีกับกรอบอวตารและชื่อตัวละคร
  3. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - รัน `npm run test:battle-ui`: ผ่านการทดสอบ UI ครบทุก Phase (100%)
     - รัน `npm run test:nine_tailed_fox`: ผ่าน 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: สร้าง Production Build สำเร็จ 100% (Built in 2.79s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`

---

## [Backup #081] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ปิด/ลบคำว่า "เทิร์นนี้" (`⚡ เทิร์นนี้`) ออกจากหน้าต่อสู้ตรงที่แสดงทับกับตัวละคร (ในกรอบ Avatar Frame)
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **ปรับปรุงส่วนแสดงอวตารของตัวละครในสนาม (`src/ui/battle_view.ts`):**
     - ในฟังก์ชัน `renderArenaUnitBoxHtml`:
       - ตัดแท็ก `<span class="active-turn-beacon">⚡ เทิร์นนี้</span>` ออกจากภายในกรอบอวตาร `.unit-sprite-frame`
       - ตัวละครที่ถึงเทิร์นยังคงแสดงการแจ้งเตือนอย่างชัดเจนผ่านไฟขอบทองเรืองแสงรอบกล่องตัวละคร (`.arena-unit-box.active-turn` พร้อม Golden Aura Glow) และผ่านแถบ Turn Timeline ด้านบนสนาม
  2. **ปรับแต่งสไตล์ CSS ซ่อนบีคอนถาวร (`src/style.css`):**
     - กำหนดให้ `.active-turn-beacon { display: none !important; }` ป้องกันไม่ให้แบนเนอร์สีเหลืองลอยมาบดบังส่วนหัวหรือตัวของสัตว์เลี้ยง
  3. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - อัปเดตการทดสอบใน `src/sim/test_battle_ui_state.ts` ตรวจสอบว่าไม่มี `active-turn-beacon` บดบังตัวละคร
     - รัน `npm run test:battle-ui`: ผ่านการทดสอบ UI ครบ 100%
     - รัน `npm run test:nine_tailed_fox`: ผ่าน 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: สร้าง Production Build สำเร็จ 100% (Built in 3.11s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/style.css`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #082] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ดำเนินการ **Step 1: เพิ่มคลาส CSS Animation** สำหรับระบบ Combat Visual FX & Action Animation
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **เพิ่มคลาส CSS Animation และ Keyframes ใน `src/style.css` (ใช้ Hardware-Accelerated 60 FPS):**
     - **1. Cast Wind-up Aura (`.cast-windup-aura`, `castWindupPulse`):** แอนิเมชันร่ายสกิล/รวมพลังก่อนเข้าโจมตี พร้อมรองรับ 12 โทนสีธาตุ:
       - `.cast-aura-fire` (เปลวเพลิงสีส้มแดง)
       - `.cast-aura-water` (วารีสีฟ้าคราม)
       - `.cast-aura-wind` (วายุสีเขียวมรกต)
       - `.cast-aura-electric` (อัสนีสีทองสว่าง)
       - `.cast-aura-ice` (เหมันต์สีฟ้าใสคริสตัล)
       - `.cast-aura-earth` (ปฐพีสีอำพันศิลา)
       - `.cast-aura-plant` (พฤกษาสีเขียวใบไม้สด)
       - `.cast-aura-poison` (พิษกัมมันตรังสีสีม่วงนีออน)
       - `.cast-aura-dark` (ความมืดสีม่วงเข้มมิติอเวจี)
       - `.cast-aura-light` (แสงศักดิ์สิทธิ์สีขาวทองเจิดจ้า)
       - `.cast-aura-psychic` (พลังจิตสีมาเจนต้า/ชมพูสะกดจิต)
       - `.cast-aura-neutral` (กายภาพสีทองอบอุ่น)
     - **2. Buff Rising Wave (`.fx-buff-rise`, `buffWaveRise`):** คลื่นแสงสีเขียวมรกตพุ่งขึ้นด้านบนพร้อมแสงประกายเจิดจ้าเมื่อได้รับบัพ
     - **3. Debuff Falling Wave (`.fx-debuff-fall`, `debuffWaveFall`):** คลื่นพลังสีแดงส้มกดทับลงด้านล่างเมื่อติดดีบัพหรือถูกตัดสเตตัส
     - **4. CC Status Action Overlays (12 สถานะ CC เต็มรูปแบบ):**
       - `.fx-burn-flame` (`burnFlameFlicker` - เปลวไฟลุกโชน)
       - `.fx-freeze-ice` (`freezeIceCrystallize` - ผลึกน้ำแข็งเกาะตัว)
       - `.fx-stun-stars` (`stunOrbitStars` - ดาวมึนงงหมุนวนรอบศีรษะ)
       - `.fx-sleep-bubble` (`sleepFloatZzz` - ฟองอากาศนิทราและสัญลักษณ์ zZz)
       - `.fx-poison-drip` (`poisonBubblePulse` - ฟองพิษเดือดปุดและควันพิษ)
       - `.fx-bleed-slash` (`bleedSlashSplatter` - รอยฟันสีเลือดสาดกระจาย)
       - `.fx-confusion-ring` (`confusionPsycheSpin` - วงแหวนพลังจิตปั่นป่วน)
       - `.fx-petrify-stone` (`petrifyStoneCrackle` - รอยแตกร้าวของศิลา)
       - `.fx-shield-barrier` (`shieldHexPulse` - โดมม่านบาเรียรังผึ้งสีฟ้า)
       - `.fx-silence-chain` (`silenceChainLock` - โซ่เวทมนตร์ล็อกสะกด)
       - `.fx-taunt-rage` (`tauntRagePulse` - เส้นเลือดเดือดและคลื่นยั่วยุ)
       - `.fx-blind-smoke` (`blindDarkSmoke` - ควันดำมืดบดบังวิสัยทัศน์)
     - **5. Impact & Screen Polish Effects:**
       - `.heavy-crit-shake` (`shakeHeavyStage` - สั่นหน้าจอรุนแรงสำหรับคริติคอลและท่าไม้ตาย)
       - `.shield-shatter` (`shieldShatterFx` - ม่านเกราะแตกกระจาย)
       - `.fx-heal-glow` (`healGlowPulse` - แสงฟื้นฟูพลังชีวิตสีเขียวทอง)
  2. **ผลการทดสอบการทำงานและการตรวจสอบ (Verification Results):**
     - รัน `npm run test:battle-ui`: ผ่านการทดสอบ UI ครบ 100%
     - รัน `npm run test:nine_tailed_fox`: ผ่านการทดสอบ 100%
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.45s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/style.css`
  - `doc/19_history_and_backup.md`

---

## [Backup #083] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ดำเนินการ **Step 2: พัฒนาฟังก์ชันสร้าง FX Helper** ใน `src/ui/battle_view.ts`
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **สร้างชุดฟังก์ชัน Combat Visual FX Helper ใน `src/ui/battle_view.ts`:**
     - `resolveTargetElement(targetOrId)`: รองรับการส่งทั้ง HTMLElement และ String ID อย่างปลอดภัยต่อทุกสภาพแวดล้อม
     - `getCastAuraClassForElement(element)`: แปลงรหัสธาตุเป็นคลาสแสงออร่าครบ 12 ธาตุ พร้อมค่า Default เป็น neutral
     - `getCombatFxClassForStatus(statusType)`: แมปสถานะ CC 12 ประเภท (burn, freeze, stun, sleep, poison, bleed, confuse, petrify, shield, silence, taunt, blind) เป็นคลาสเอฟเฟกต์ CSS
     - `triggerCastWindup(targetOrId, element, durationMs)`: สั่งกระตุ้นแสงออร่าร่ายสกิลรอบตัวละครและล้างคลาสเดิมอัตโนมัติ
     - `triggerBuffWave(targetOrId, durationMs)`: สั่งกระตุ้นคลื่นแสงสีเขียวมรกตพุ่งขึ้นด้านบน (`.fx-buff-rise`)
     - `triggerDebuffWave(targetOrId, durationMs)`: สั่งกระตุ้นคลื่นพลังสีแดงส้มกดทับลงด้านล่าง (`.fx-debuff-fall`)
     - `triggerHealGlow(targetOrId, durationMs)`: สั่งกระตุ้นแสงฟื้นฟูสีเขียวทอง (`.fx-heal-glow`)
     - `triggerShieldShatter(targetOrId, durationMs)`: สั่งกระตุ้นเอฟเฟกต์เกราะแตก (`.shield-shatter`)
     - `triggerHeavyCritShake(stageOrId, durationMs)`: สั่งสั่นสะเทือนเวทีต่อสู้ 3 แกน (`.heavy-crit-shake`)
     - `triggerStatusCCOverlay(targetOrId, statusType, durationMs)`: แทรกเลเยอร์ `.unit-fx-overlay` ลงในกรอบ Sprite Frame ของนักสู้
  2. **เพิ่มชุดทดสอบหมวดที่ 32 ใน `src/sim/test_battle_ui_state.ts`:**
     - ตรวจสอบ `getCastAuraClassForElement` ครบ 12 ธาตุ + ค่า fallback
     - ตรวจสอบ `getCombatFxClassForStatus` ครบ 12 สถานะ CC + ค่า fallback null
     - ตรวจสอบการทำงานของ Trigger Helpers (Windup, Buff, Debuff, Heal, Shield Shatter, Heavy Crit Shake) ผ่าน Mock Element
  3. **ผลการทดสอบการทำงานและการตรวจสอบ (Verification Results):**
     - รัน `npm run test:battle-ui`: ผ่านการทดสอบทั้งหมด 32 หมวด (100%)
     - รัน `npm run test:nine_tailed_fox`: ผ่าน 100%
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.71s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/battle_view.ts`
  - `src/sim/test_battle_ui_state.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #084] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ดำเนินการ **Step 3: เชื่อมโยงใน animateTurnEvent (src/main.ts)** ให้เรียกใช้ FX ตามสถานการณ์การต่อสู้จริง (ทั้ง 1v1 และ 2v2)
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **เพิ่มฟังก์ชันตรวจจับตำแหน่ง Unit Box และธาตุใน `src/main.ts`:**
     - `getArenaFighterBox(side, nameOrId, snapshot)`: ระบุและค้นหาตัวละครทั้งในโหมด 1v1 และ 2v2 Grid ผ่าน data-fighter-id, snapshot matching หรือป้ายชื่อได้อย่างแม่นยำ
     - `getFighterElement(side, nameOrId, snapshot)`: ดึงธาตุของนักสู้เพื่อระบุสีแสงออร่าร่ายสกิล (Elemental Cast Aura)
     - ปรับปรุง `spawnFloatingText(side, text, cssClass, targetBox)`: รองรับการลอยข้อความดาเมจ/สถานะตรงเหนือศีรษะของนักสู้ตัวนั้นๆ ใน 2v2 Grid
  2. **เชื่อมโยงแอนิเมชันและเอฟเฟกต์ใน `animateTurnEvent(ev: TurnEvent)`:**
     - **จังหวะที่ 1 (Cast Wind-up Telegraph):**
       - ตัวละครผู้โจมตีเปล่งแสงออร่ารอบตัวตามธาตุ (`triggerCastWindup`) ขณะเริ่มตั้งท่าโจมตีหรือร่ายสกิล
     - **จังหวะที่ 2 (Hit Impact & Reactions):**
       - ท่าไม้ตาย Signature หรือคริติคอล: สั่นสะเทือนเวทีอย่างหนักหน่วง 3 แกน (`triggerHeavyCritShake`)
       - เจาะเกราะ (Armor Break): แสดงเอฟเฟกต์เกราะแตกกระจาย (`triggerShieldShatter`) และคลื่นดีบัพกดทับ (`triggerDebuffWave`)
       - ฟื้นฟู HP/โล่/SP: แสดงแสงสีเขียวทอง (`triggerHealGlow`), คลื่นแสงมรกตพุ่งขึ้น (`triggerBuffWave`) และโดมบาเรีย (`triggerStatusCCOverlay: shield`)
       - บัฟเชิงบวก (`buff_*`, regen, counter, yata_mirror, shadow_clone, fire_skin, ice_skin, berserk): คลื่นแสงสีเขียวมรกตพุ่งขึ้นด้านบน (`triggerBuffWave`)
       - ดีบัพเชิงลบ (`debuff_*`, vulnerable, ตัด SP): คลื่นพลังสีแดงส้มกดทับลงด้านล่าง (`triggerDebuffWave`)
       - สถานะ CC (burn, poison, bleed, stun, freeze, sleep, confuse, silence, blind, petrify, taunt): ปรากฏโอเวอร์เลย์แอนิเมชัน CC บน Sprite ของเป้าหมายทันที (`triggerStatusCCOverlay`)
     - **เทิร์นสถานะ (Status Damage / Tick):**
       - ดาเมจจากเผาไหม้/พิษ/เลือด/สับสน: ปรากฏเอฟเฟกต์ CC บนตัวละคร พร้อมคลื่นพลังดีบัพ
     - **เทิร์นข้ามการกระทำ (Skip Turn):**
       - ติดแช่แข็ง, มึนงง, หลับใหล, หรือกลายเป็นหิน: แสดงเอฟเฟกต์ CC ประจำสถานะที่ทำให้ข้ามเทิร์น
     - **เทิร์นความสามารถพิเศษ (Ability Trigger):**
       - ระเบิดลูกแก้ว 4 ลูกมหาประลัย: กระตุ้นการสั่นหน้าจอหนักหน่วง + แสงออร่าพลังจิต + คลื่นกระแทกใส่ศัตรู
  3. **ผลการทดสอบการทำงานและการตรวจสอบ (Verification Results):**
     - รัน `npm run test:battle-ui`: ผ่านการทดสอบทั้งหมด 32 หมวด (100%)
     - รัน `npm run test:nine_tailed_fox`: ผ่าน 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.70s ไร้ข้อผิดพลาด)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/main.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #085] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ดำเนินการ **Step 4: ตรวจสอบความถูกต้องด้วย npm run test:battle-ui, npm run typecheck, และ npm run build** พร้อมตรวจสอบการทำงานร่วมกับระบบฮีโร่ในตำนานทั้งหมด
- **การดำเนินการและรายละเอียดการตรวจสอบ (Full System Verification):**
  1. **การทดสอบสถาปัตยกรรม UI & FX Helpers (`npm run test:battle-ui`):**
     - ผ่านการทดสอบครบถ้วนทั้ง 32 หมวด (100%)
     - ครอบคลุมสถานะเริ่มต้น, การเลือกเป้าหมาย, Combat Logs, Turn Timeline, การแมป Cast Aura 12 ธาตุ, การแมป CC FX 12 สถานะ, และ Animation Triggers
  2. **การตรวจสอบความปลอดภัยของ TypeScript Types (`npm run typecheck`):**
     - ผลการตรวจ `tsc --noEmit`: ผ่านฉลุย 0 errors 100%
  3. **การทดสอบสร้างไฟล์ Production Build (`npm run build`):**
     - การประมวลผล Vite v6.4.5: เสร็จสิ้นใน 4.51s สร้าง Bundle สำเร็จสมบูรณ์ ไร้ข้อผิดพลาด
  4. **การทดสอบชุดจำลองการต่อสู้ของฮีโร่ในตำนาน SS ระดับสูง:**
     - `test:fenrir`: ผ่าน 100% (แช่แข็ง, โบนัสดาเมจขยี้, ดูดเลือด)
     - `test:king_basilisk`: ผ่าน 100% (ไอกรดพิษ 2 ชั้น, เจาะเกราะ DEF -30%, แพร่พิษสวนกลับ)
     - `test:cerberus`: ผ่าน 100% (คำสาปมรณะ Curse, Dispel สลายบัฟ, สามเศียรกัดซ้ำ)
     - `test:solar_griffin`: ผ่าน 100% (แสงสุริยะพิพากษา, Dispel All, ตาบอด Blind, ภูมิคุ้มกัน)
     - `test:nine_tailed_fox`: ผ่าน 100% (ลูกแก้วพลังจิต 4 ลูก, ระเบิดมหาประลัย 20% Detonation & Reset, ตัด SP)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `doc/19_history_and_backup.md`

---

## [Backup #086] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ตรวจสอบความผิดปกติของสกิล [รัศมีบริสุทธิ์] หรือค่าสเตตัสของ เหยี่ยวขาวไจร์ฟอลคอน (Gyrfalcon) ที่สร้างดาเมจสูงผิดปกติทะลุ 7,137 ในเทิร์นแรก
- **สาเหตุของปัญหาที่ตรวจพบ (Root Cause Analysis):**
  - ในสูตรคำนวณสเตตัสของเกม `DerivedStats.criDmg` ถูกออกแบบเป็นค่าทศนิยมตัวคูณ (เช่น 1.4 = คริติคอลแรง 140%, 1.6 = 160%)
  - ในฟังก์ชัน `getEffectiveStats()` ของ `src/engine/combat.ts` (บรรทัด 411) Ability `solar_apex_dive` (ดิ่งเวหาผ่าตะวัน) ของเหยี่ยวขาวไจร์ฟอลคอนระบุ:
    - เดิม: `s.criDmg += 25;` (ทำให้ตัวคูณคริติคอลพุ่งขึ้นไปถึง 26.6x หรือ 2,660% ทันทีที่ติดคริติคอล!)
    - ประกอบกับ Ability นี้การันตีคริติคอล 100% ในเทิร์นแรก ทำให้เมื่อใช้สกิล Tier L `light_l` (รัศมีบริสุทธิ์ คูณดาเมจ 2.1) ดาเมจจึงถูกระเบิดคูณด้วย 26.6x กลายเป็น 7,137 ดาเมจทันที
- **การแก้ไขและปรับปรุง (Fix & Balancing):**
  - แก้ไขใน `src/engine/combat.ts` บรรทัดที่ 411 ปรับจาก `s.criDmg += 25;` ให้เป็น `s.criDmg += 0.25;` (+25% CRI DMG ถูกต้องตามคำอธิบาย Ability)
  - ทดสอบจำลองการต่อสู้ซ้ำ:
    - การโจมตีปกติแบบการันตีคริติคอล: ดาเมจเฉลี่ยอยู่ที่ ~205 - 219 ดาเมจ
    - การใช้สกิล [รัศมีบริสุทธิ์] Tier L แบบการันตีคริติคอล: ดาเมจเฉลี่ยอยู่ที่ ~502 - 550 ดาเมจ (ลดลงจากเดิม 7,137 ลงมาอยู่ในเกณฑ์สมดุลตามค่าพลังระดับ S)
- **ผลการทดสอบการทำงานและการตรวจสอบ (Verification Results):**
  - รัน `npm run test:battle-ui`: ผ่านครบทั้ง 32 หมวด (100%)
  - รัน `npm run typecheck`: ผ่าน 0 errors
  - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.90s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/combat.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #087] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** ปรับปรุงจังหวะการออกแอคชั่นในหน้าต่อสู้ (Combat Pacing & Action Delays) โดยเพิ่มดีเลย์อย่างน้อย ~1 วินาทีในการผลัดเทิร์นกันโจมตี และเพิ่มดีเลย์ 1 วินาทีก่อน-หลังการเกิดบัพ/ดีบัพ/สถานะผิดปกติ เพื่อให้สังเกตเห็นตัวเลขดาเมจและการเปลี่ยนแปลงของสถานะได้อย่างชัดเจน ไม่ทับซ้อนหรือเร่งรีบจนเกินไป
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **จัดลำดับเฟสแอนิเมชันใน `animateTurnEvent` (`src/main.ts`):**
     - **Phase 1 (Wind-up / Telegraph):** แสดง Cast Aura ธาตุและป้ายชื่อสกิล 350ms (โจมตีปกติ) ถึง 600ms (สกิล/ท่าไม้ตาย)
     - **Phase 2 (Hit Impact & Bar Deduction):** หน่วงเวลา 450ms ให้เห็นเอฟเฟกต์การโจมตี, หน้าจอสั่นสะเทือน, Hit Flash, และการปรับลดหลอด HP/SP/โล่ใน DOM แบบ Synchronized
     - **Phase 2.5 (Buff / Debuff Wave & CC Overlays):** หากมีการแจกบัพ, ติดดีบัพ, หรือมี CC เกิดขึ้น จะแสดงคลื่นแสง/ไอคอนลอย/โอเวอร์เลย์สถานะ พร้อมเพิ่มดีเลย์หน่วงเต็มเวลา **1,000ms** (`1000 / speedDiv`) เพื่อให้ผู้เล่นสังเกตเห็นชัดเจนก่อนเริ่มเฟสถัดไป
     - **Phase 3 (Impact Recovery & Turn Beat):** ดึงตัวละครกลับตำแหน่งเดิม และเพิ่มดีเลย์ผลัดเทิร์น **1,000ms** (`1000 / speedDiv`) ก่อนที่อีกฝั่งหนึ่งจะเริ่มออกท่าโจมตี
     - ปรับเพิ่มดีเลย์ 1,000ms สำหรับแอคชั่นประเภท `status` (ดาเมจจากไฟ/พิษ/เลือด/สับสน), `skip` (ข้ามเทิร์นจากแช่แข็ง/สตั้น/หลับ/หิน), `swap`, และ `ability`
  2. **ปรับแต่งระยะเวลาการแสดงตัวเลขลอย Floating Combat Text (`src/style.css` & `src/main.ts`):**
     - ปรับระยะเวลาของ `.float-item` จาก `0.9s` เป็น `1.35s` พร้อมปรับคีย์เฟรม `@keyframes floatUp` ให้คงความชัดเจน (Opacity 1) ถึง 75% ของการเคลื่อนที่
     - ปรับไทม์เอาต์การลบ DOM ใน `spawnFloatingText` จาก `850ms` เป็น `1350ms` ให้สอดรับกับดีเลย์ 1 วินาทีใหม่
     - ปรับความสมูทของคลื่นแสงบัพ (`.fx-buff-rise`) และดีบัพ (`.fx-debuff-fall`) เป็น `0.9s`
  3. **ผลการทดสอบการทำงานและการตรวจสอบ (Verification Results):**
     - รัน `npm run test:battle-ui`: ผ่านการทดสอบ UI & Animation Helpers ทั้ง 32 หมวด (100%)
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.48s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/main.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`

---

## [Backup #088] — วันที่ 2026-11-05
- **คำสั่งจาก Game Director:** บันทึกผลการวิเคราะห์และออกแบบสัตว์มายา สัตว์ในตำนาน สัตว์ในนวนิยายปรัมปรา ระดับ SS ของสาย TANK ครบทุกธาตุ ลงในไฟล์เอกสาร `.md` เพื่อเตรียมพร้อมสำหรับการสลับไปใช้งานต่อบนอีกเครื่องหนึ่ง
- **การดำเนินการและรายละเอียดการบันทึก:**
  1. **จัดทำเอกสารข้อกำหนดและการออกแบบเฉพาะทาง (`doc/20_ss_tank_mythical_beasts_design.md`):**
     - บันทึกการวิเคราะห์สเตตัสบาลานซ์ SS Class Budget (182 พอยต์: STR/AGI/STA)
     - ระบุจุดเด่น กลยุทธ์การเล่น ท่าไม้ตาย Signature, Passive Ability, สกิลแนะนำ และ Lore ตำนานปรัมปราครบทั้ง 11 ธาตุ:
       1. ดิน (Earth 🪨): **เสวียนอู่ (Xuanwu - พญาเต่าดำทมิฬเทวะ)**
       2. น้ำ (Water 💧): **พญานาคราช (Naga)**
       3. ลม (Wind 🌪️): **ซิซ (Ziz - พญาวิหคบรรพกาลค้ำนภา)** *(ครบไตรภาค Behemoth/Leviathan/Ziz)*
       4. ไฟ (Fire 🔥): **คัลโคเทารอย (Khalkotauroi - พญาโคบรอนซ์หลอมอัคนี)**
       5. สายฟ้า (Lightning ⚡): **พญาช้างเอราวัณ (Erawan - พญาคชสารอัยราพต)**
       6. น้ำแข็ง (Ice ❄️): **โยทูนอูร์ซ่า (Jotun Ursa - พญาหมีเหมันต์แห่งโยทูนไฮม์)**
       7. พืช (Plant 🌿): **ทาแร็สก์ (Tarasque - พญาอสูรกระดองหนามพฤกษา)**
       8. พิษ (Poison ☠️): **คาร์คิโนส (Karkinos - พญาปูยักษ์เกราะพิษดึกดำบรรพ์)**
       9. ความมืด (Dark 🌑): **อัมมิต (Ammut - พญาอสูรทมิฬกลืนวิญญาณ)**
       10. แสง (Light ✨): **สิงโตเนเมีย (Nemean Lion - พญาราชสีห์เกราะทองคำอมตะ)**
       11. พลังจิต (Psychic 🔮): **บาคุ (Baku - พญาอสูรกลืนฝันสะท้อนจิต)**
     - จัดทำ Checklist ลำดับไฟล์ที่ต้องแก้ไขและแนวทางการพัฒนาต่อเมื่อสลับเครื่อง
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `doc/20_ss_tank_mythical_beasts_design.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #089] — วันที่ 2026-11-06
- **คำสั่งจาก Game Director:**
  1. เพิ่มสถานะผิดปกติใหม่ 2 สถานะ:
     - **`paralysis` (อัมพาต - สถานะลบ):** ลด SPD ลง 25% และมีโอกาส 60% ที่จะเกิดอาการชะงักข้ามการโจมตีในแต่ละเทิร์น
     - **`energy_coat` (เกราะพลังงาน - สถานะบวก):** เปลี่ยนความเสียหายที่ได้รับ 40% ไปหักลบกับค่า SP แทน HP (หาก SP ไม่เพียงพอก็จะซับดาเมจเท่าที่มีจน SP เหลือ 0 แล้วดาเมจส่วนที่เหลือจึงหักจาก HP)
  2. นำสถานะ `paralysis` ไปเสริมให้กับสกิลสายฟ้า (Lightning Skills) และปรับสมดุล:
     - `lightning_s`: ดาเมจ x1.6 + เจาะเกราะ +15% + โอกาส 30% ติดอัมพาต 2 เทิร์น
     - `lightning_m1`: ดาเมจ x1.65 + โอกาส 55% ติดอัมพาต 2 เทิร์น
     - `lightning_l`: ดาเมจ x2.2 + โอกาส 45% สตัน 1 เทิร์น + โอกาส 65% ติดอัมพาต 2 เทิร์น
     - `lightning_aoe`: โจมตีหมู่ ดาเมจ x1.25 + โอกาส 20% สตัน 1 เทิร์น + โอกาส 40% ติดอัมพาต 2 เทิร์น
  3. นำ 2 สถานะไปติดตั้งหรือปรับเสริมให้กับ Ability ประจำตัวสัตว์ 6 ตัวตามบทบาท:
     - `hornet` (ต่อหัวเสือ - Striker): Ability `neurotoxic_stinger` เมื่อโจมตีเป้าหมายติดพิษ มีโอกาส 50% ฉีดพิษประสาททำให้ศัตรูติดอัมพาต 2 เทิร์น
     - `jellyfish` (แมงกะพรุนไฟ - Controller): Ability `nematocyst_paralysis` เมื่อโจมตีหรือถูกโจมตี มีโอกาส 50% ติดอัมพาต 2 เทิร์น และตัดเกจศัตรู -8
     - `electric_eel` (ปลาไหลไฟฟ้า - Controller): Ability `high_voltage_organ` ต้นเทิร์นมีโอกาส 50% ปล่อยไฟฟ้า 860V ทำให้ศัตรูติดอัมพาต 2 เทิร์น และตัดเกจ -10
     - `platypus` (ตุ่นปากเป็ด - Tank): Ability `electro_sense` เมื่อถูกโจมตี มีโอกาส 45% กางเกราะพลังงาน (Energy Coat 2 เทิร์น) และลด HIT ศัตรู 10 แต้ม
     - `mammoth` (แมมมอธ - Tank): Ability `ancient_bulwark` ลดดาเมจที่ได้รับ 12% และเมื่อ HP < 65% กางเกราะพลังงาน (Energy Coat 3 เทิร์น)
     - `crane` (นกกระเรียน - Supporter): Ability `zen_mind` ต้านทานสถานะลบ 25% และต้นเทิร์นมีโอกาส 40% มอบเกราะพลังงาน (Energy Coat 2 เทิร์น) ให้สมาชิกทีม HP ต่ำสุด
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **`src/data/skills.json`:**
     - เพิ่มกฎ `paralysis` (`spdRedPct: 0.25`, `flinchChance: 0.60`, `duration: 2`) และ `energy_coat` (`damageToSpPct: 0.40`, `duration: 3`, `isBuff: true`) ใน `statusRules`
     - ปรับโครงสร้างสกิลสายฟ้าทั้ง 4 ท่า (`lightning_s`, `lightning_m1`, `lightning_l`, `lightning_aoe`) พร้อมอัปเดตคำอธิบายสกิล
  2. **`src/data/heroes.json`:**
     - อัปเดตคำอธิบาย Ability ของสัตว์ทั้ง 6 ตัว (`hornet`, `jellyfish`, `electric_eel`, `platypus`, `mammoth`, `crane`)
  3. **`src/engine/combat.ts` (ระบบต่อสู้ 1v1):**
     - ใน `getEffectiveStats`: ลดค่า SPD ลง 25% เมื่อมีสถานะ `paralysis`
     - ใน `applyEffectToTarget`: บรรจุ `paralysis` เข้า Cleanse debuff list, บรรจุ `energy_coat` เข้า Dispel buff list, รองรับการต้านสถานะลบ 25% ของ `zen_mind`, และรองรับการบันทึกสถานะทั้งสอง
     - ใน `stepTurn`: ตรวจสอบโอกาส 60% Flinch จาก `paralysis` เพื่อข้ามเทิร์นการโจมตี
     - ใน `processStartOfTurnStatuses`: จัดการ Trigger ต้นเทิร์นของ `high_voltage_organ` (ปล่อยอัมพาต) และ `zen_mind` (กาง Energy Coat)
     - ใน `executeAction`: จัดการ Trigger การโจมตี/ถูกโจมตีของ Ability ทั้ง 6 ตัว และจัดการลดความเสียหายผ่าน Energy Coat โดยหักลบ SP ก่อนหักลบ HP
  4. **`src/engine/team_combat.ts` (ระบบต่อสู้ 2v2 กระดาน 3x3):**
     - อัปเดต `applyEffectToTarget`, `executeFighterTurn` (Paralysis Flinch Check), `processStartOfTurn` (Turn-start abilities), `performNormalAttack`, `executeSkillAttack`, `executeSignatureAttack`, และ `applyDamageToTarget` (Energy Coat SP absorption)
  5. **`src/ui/battle_view.ts` & `src/main.ts` & `src/style.css`:**
     - เพิ่ม Badge ป้ายสถานะ `paralysis` (⚡ อัมพาต) และ `energy_coat` (🛡️⚡ เกราะพลังงาน)
     - เพิ่มคลาสแอนิเมชัน `.fx-paralysis-spark` (ประกายไฟฟ้าช็อต) และ `.fx-energy-coat` (ออร่าเกราะพลังงานสีฟ้าคราม)
     - รองรับ Floating Combat Text และการกระพริบโอเวอร์เลย์สถานะ CC เมื่อชะงักจากอัมพาต
  6. **`src/sim/test_new_status_effects.ts`:**
     - เพิ่มการทดสอบหมวดที่ 8 ถึง 11 ครอบคลุมการคำนวณ SPD, Flinch, SP damage redirection, Dispel/Cleanse, Lightning skills, และ Pet abilities ทั้ง 6 ตัว
- **ผลการทดสอบการทำงานและการตรวจสอบ (Verification Results):**
  - รัน `npm run test:new-statuses`: ผ่านการทดสอบครบทั้ง 11 หมวด (100%)
  - รัน `npm run test:battle-ui`: ผ่านการทดสอบ UI & Animation Helpers ทั้ง 32 หมวด (100%)
  - รัน `npm run test:save`, `npm run test:campaign`, `npm run test:skills`, `npm run test:roster`, `npm run test:pet-state`, `npm run test:skill-state`: ผ่านฉลุย 100%
  - รัน `npm run typecheck`: ผ่าน 0 errors
  - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 590ms)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/data/skills.json`
  - `src/data/heroes.json`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/ui/battle_view.ts`
  - `src/main.ts`
  - `src/style.css`
  - `src/sim/test_new_status_effects.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #090] — วันที่ 2026-11-06: เพิ่มสายวิชาไร้ธาตุสายที่ 6 "สายวิชาป้องกัน" (Defense Arts) พร้อม 5 สกิลใหม่ และระบบป้องกันการทับซ้อนของเกราะ (Exclusive Shield Non-Stacking)
- **คำสั่งจาก Game Director:**
  1. เพิ่มสายวิชาไร้ธาตุบนกระดานสกิลเพิ่มอีก 1 สาย ชื่อว่า **"สายวิชาป้องกัน" (`branch: "defense"`)** (รวมเป็น 17 สายวิชา: 11 ธาตุ + 6 สายวิชาไร้ธาตุ, รวม 85 สกิล)
  2. รายละเอียดสกิลทั้ง 5 ท่าในสายวิชาป้องกัน:
     - **`defense_s` (เกราะระฆังทอง - Tier S):** ไม่โจมตี (`damageMult: 0`, `20 SP`, โอกาส 20%) สร้างเกราะป้องกันที่มี HP 50% ของ Max HP ผู้ใช้งาน แต่ลด SPD ลง 30% ระยะเวลาสูงสุด 2 เทิร์น **⚠️ เงื่อนไข: ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้**
     - **`defense_m1` (เกราะสลายธาตุ - Tier M1):** ไม่โจมตี (`damageMult: 0`, `35 SP`, โอกาส 15%) สร้างเกราะลดทอนดาเมจเฉพาะการโจมตีด้วยธาตุต่างๆ (ที่ไม่ใช่ไร้ธาตุ) ลง 10% ระยะเวลาสูงสุด 2 เทิร์น **⚠️ เงื่อนไข: ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้**
     - **`defense_m2` (เกราะกระแทก - Tier M2):** โจมตีไร้ธาตุ (`damageMult: 1.35`, `35 SP`, โอกาส 15%, `useDefForAtk: true`) เปลี่ยนค่าพลังป้องกัน `DEF` ของผู้ใช้งานเป็นพลังโจมตีแทน `ATK` พุ่งเข้าใส่ศัตรู พร้อมโอกาส 40% ติดสตัน (1 เทิร์น) และโอกาส 60% ติดอัมพาต (2 เทิร์น)
     - **`defense_l` (กายาเหล็ก - Tier L):** ไม่โจมตี (`damageMult: 0`, `55 SP`, โอกาส 10%) จิตแห่งกายเหล็กกล้า เพิ่ม DEF +50%, ลดดาเมจสุดท้ายลง 30%, เพิ่ม CRI +40%, ลด SPD 50%, และป้องกันผลของสตัน (Stun) และอัมพาต (Paralysis) 100% (พร้อมชำระล้างสตัน/อัมพาตที่มีอยู่ทันที) ยาวนาน 5 เทิร์น **⚠️ เงื่อนไข: ไม่สามารถทับซ้อนกับสกิลเกราะตนเองและเกราะอื่นๆ ได้**
     - **`defense_aoe` (ค่ายกลปราการเหล็ก - Tier L / AOE ทางเลือกที่ 1):** ไม่โจมตี (`damageMult: 0`, `55 SP`, โอกาส 10%, `targetScope: "all_allies"`) กางอาณาเขตคุ้มกันให้สมาชิกทีมทุกคน เพิ่ม DEF +25%, Block +20% (ป้องกันการเจาะเกราะ) และลดความเสียหายที่ได้รับลง 15% (`iron_fortress`) นาน 2 เทิร์น (ทำงานร่วมกับเกราะเดี่ยวได้โดยไม่ขัดแย้งกัน)
- **การดำเนินการและรายละเอียดการปรับแต่ง:**
  1. **`src/data/skills.json`:**
     - เพิ่มกฎ `golden_bell_shield`, `elemental_ward`, `iron_body`, และ `iron_fortress` ใน `statusRules`
     - เพิ่มสกิลใหม่ทั้ง 5 ท่า (`defense_s`, `defense_m1`, `defense_m2`, `defense_l`, `defense_aoe`)
  2. **`src/engine/save_manager.ts` & `src/engine/skill_board_manager.ts`:**
     - เพิ่ม `'defense_s'` ใน `INITIAL_UNLOCKED_SKILLS` และ `'defense'` ใน `INITIAL_UNLOCKED_ELEMENT_ROWS` / `FREE_STARTER_ROWS`
     - เพิ่ม `{ id: 'defense', name: 'สายวิชาป้องกัน', fullName: '🛡️ สายวิชาป้องกัน (Defense Arts)', icon: '🛡️', description: 'เคล็ดลับวิชาป้องกันความเสียหาย & ลดทอนดาเมจ' }` ใน `NEUTRAL_BRANCHES`
  3. **`src/engine/combat.ts` & `src/engine/team_combat.ts`:**
     - สร้าง `EXCLUSIVE_SHIELD_TYPES = ['shield', 'energy_coat', 'golden_bell_shield', 'elemental_ward', 'iron_body']` และฟังก์ชัน `hasActiveExclusiveShield(f)` เพื่อตรวจสอบและล็อกไม่ให้ทอยหรือทับซ้อนเกราะเดี่ยวซ้ำกัน
     - ใน `getEffectiveStats`: คำนวณ `golden_bell_shield` (`spdMult -= 0.30`) และ `iron_body` (`defMult += 0.50`, `spdMult -= 0.50`, `s.cri += 40`)
     - ใน `applyEffectToTarget`: รองรับภูมิคุ้มกันสตัน/อัมพาต 100% เมื่อมี `iron_body`, รองรับการสลายบัฟ (Dispel) ทั้ง 4 สถานะใหม่, และตรวจสอบกฎไม่ทับซ้อนของเกราะ
     - ใน `performHit` / `performSkill` / `performNormalAttack` / `performSignature`: รองรับ `useDefForAtk` (ใช้ `attStats.def` แทน `attStats.atk` สำหรับ `defense_m2`), ลดดาเมจธาตุ 10% เมื่อมี `elemental_ward`, ลดดาเมจ 15% เมื่อมี `iron_fortress`, และลดดาเมจสุดท้าย 30% เมื่อมี `iron_body`
  4. **`src/ui/battle_view.ts`, `src/main.ts`, `src/ui/skill_board_view.ts`, `src/ui/campaign_view.ts`, `src/ui/elements_view.ts`:**
     - เพิ่มป้ายสถานะ (Badges), ไอคอน (`🔔`, `💠`, `🦾`, `🏰`), แอนิเมชันโอเวอร์เลย์, สีประจำสายวิชาป้องกัน (`🛡️ #90caf9`), และการ์ดอธิบายสายวิชาป้องกันในหน้าตารางธาตุ
  5. **`src/sim/test_new_status_effects.ts`, `src/sim/test_skill_board.ts`, `src/sim/test_skill_tree_state.ts`:**
     - อัปเดตการตรวจสอบจำนวนสายวิชาเป็น 17 สาย (11 ธาตุ + 6 ไร้ธาตุ, รวม 85 สกิล) และเพิ่มชุดทดสอบหมวดที่ 12 สำหรับสกิลสายวิชาป้องกันทั้ง 5 ท่าและกฎเกราะไม่ทับซ้อน
- **ผลการทดสอบการทำงานและการตรวจสอบ (Verification Results):**
  - รัน `npm run typecheck`: ผ่าน 0 errors
  - รัน `npm run test:new-statuses`: ผ่านครบทั้ง 12 หมวด (100%)
  - รัน `npm run test:skills`, `npm run test:skill-state`, `npm run test:battle-ui`, `npm run test:save`, `npm run test:campaign`, `npm run test:brief-badges`: ผ่านฉลุย 100%
  - รัน `npm run build`: Production Build สำเร็จ 100%
- **ไฟล์ที่แก้ไข:**
  - `src/data/skills.json`
  - `src/engine/save_manager.ts`
  - `src/engine/skill_board_manager.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/ui/battle_view.ts`
  - `src/main.ts`
  - `src/ui/skill_board_view.ts`
  - `src/ui/campaign_view.ts`
  - `src/ui/elements_view.ts`
  - `src/sim/test_new_status_effects.ts`
  - `src/sim/test_skill_board.ts`
  - `src/sim/test_skill_tree_state.ts`
  - `doc/04_combat_system.md`
  - `doc/07_skill_slot_system.md`
  - `doc/18_dev_phases.md`
  - `doc/19_history_and_backup.md`

---

## [Backup #090] — วันที่ 2026-11-06
- **คำสั่งจาก Game Director:** เริ่มดำเนินการพัฒนา **ระบบสมุดสะสมสัตว์เลี้ยง (Animalia Codex & Bestiary System)** ในส่วน **Phase 1 (Data & Engine)** ตามแผนงานที่ได้รับความเห็นชอบ
- **การดำเนินการและรายละเอียดการพัฒนา:**
  1. **สร้างเอนจินหลักระบบสมุดสะสม (`src/engine/codex_manager.ts`):**
     - พัฒนาระบบสถานะการค้นพบสัตว์ 3 รูปแบบ (Unknown / Seen / Captured)
     - พัฒนาระบบการวิจัยสัตว์รายตัว 3 ขั้น (ขั้น 1: แรกพบ แจกคริสตัล+ทอง, ขั้น 2: 3 ดาว แจกเสบียง+พลังอบอุ่น, ขั้น 3: 5 ดาว แจกคริสตัล)
     - กำหนดชุดสายสัมพันธ์และระบบนิเวศ 18 ชุด (`BOND_SETS`) ครอบคลุมสัตว์ทุกระดับและทุกสายวิชา
     - พัฒนาระบบเลเวลความเชี่ยวชาญสมุดสะสม (`Codex Mastery Level 1 - 20`) พร้อมสิทธิพิเศษประจำไอดี
     - กำหนดเกณฑ์ควบคุมเพดานโบนัสสเตตัสติดไอดี (`CODEX_STAT_CAPS`) ไม่เกิน HP +6%, ATK +5%, DEF +5%, CRI +2%, Block +2.5%, Max SP +5 ป้องกันสเตตัสเฟ้อ
  2. **ขยายโครงสร้างเซฟเกม (`src/engine/save_manager.ts`):**
     - เพิ่มฟิลด์ `seenHeroes`, `claimedHeroResearch`, และ `claimedBondRewards` ใน `PlayerSaveData`
     - เชื่อมต่อส่วนลดเวลาฟักไข่ใน `placeEgg` ตามระดับเลเวลสมุดสะสม
     - เชื่อมต่อการลดเพดานการันตี SS ของไข่ทอง (เหลือ 28 ฟองเมื่อถึง Codex Lv.15)
     - บันทึกการค้นพบสัตว์อัตโนมัติเมื่อฟักไข่หรือได้รับตัวละครใหม่
  3. **เชื่อมต่อกับระบบด่านผจญภัย (`src/engine/campaign_manager.ts`):**
     - บันทึกการพบเห็นศัตรูในด่านลงในสมุดสะสมอัตโนมัติ (`codexManager.registerSeenHero`)
     - คำนวณโบนัสเหรียญทองและเสบียงจากการผ่านด่านผจญภัยตามสิทธิพิเศษของเลเวลสมุดสะสม
  4. **เชื่อมต่อกับระบบต่อสู้ (`src/engine/combat.ts`):**
     - ผสานโบนัสสเตตัสจากสมุดสะสมเข้าสู่สูตรคำนวณ `computeHeroStats` เพื่อให้สัตว์เลี้ยงของฝ่ายผู้เล่นได้รับผลของสายสัมพันธ์อย่างสมดุล
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบเฉพาะทาง `src/sim/test_codex.ts` และเพิ่มคำสั่ง `"test:codex"` ใน `package.json`
     - รัน `npm run test:codex`: ผ่านการทดสอบครบทุกหัวข้อ 100%
     - รัน `npm run test:battle-ui`: ผ่านการทดสอบ UI ครบ 32 หมวด 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.74s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/engine/codex_manager.ts`
  - `src/engine/save_manager.ts`
  - `src/engine/campaign_manager.ts`
  - `src/engine/combat.ts`
  - `src/sim/test_codex.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #091] — วันที่ 2026-11-06
- **คำสั่งจาก Game Director:** ดำเนินการพัฒนา **ระบบสมุดสะสมสัตว์เลี้ยง (Animalia Codex & Bestiary System) ในส่วน Phase 2 (Combat & Hatch Hook)**
- **การดำเนินการและรายละเอียดการพัฒนา:**
  1. **เชื่อมโยงระบบต่อสู้จำลอง Sandbox และโหมด 1v1 / 2v2 (`src/main.ts`):**
     - ผสานคำสั่งบันทึกการค้นพบสัตว์ฝั่งศัตรู/ฝ่ายตรงข้าม (`codexManager.registerSeenHero`) ในฟังก์ชันเริ่มต่อสู้ `startBattleWithLoading`
     - นำเข้า `codexManager` เพื่อรองรับการทำงานร่วมกับระบบแสดงผลและคลังสัตว์เลี้ยง
  2. **เชื่อมโยงระบบสเตตัสตัวละครในสมรภูมิ (`src/engine/combat.ts` & `src/engine/team_combat.ts`):**
     - ฟังก์ชัน `createFighter` และ `createTeamFighter` ใช้สเตตัสที่ผ่านการคำนวณโบนัสสเตตัสจากสมุดสะสม (HP, ATK, DEF, CRI, Block, Max SP) ภายใต้เกณฑ์ควบคุมเพดานสเตตัสสูงสุดอย่างสมบูรณ์
  3. **เชื่อมโยงวงจรการฟักไข่และการพัฒนาสัตว์เลี้ยง (`src/engine/save_manager.ts`):**
     - ตรวจจับการได้รับสัตว์ใหม่ผ่าน `acquireHero` และบันทึกลงสมุดสะสมสถานะ `captured` ในทันที
     - นำส่วนลดเวลาฟักไข่จากเลเวลสมุดสะสม (`codexManager.getHatchTimeReductionPct`) ไปประยุกต์ใช้กับระยะเวลาฟักไข่จริงของตู้ฟัก
     - ผสานเงื่อนไขลดเพดานการันตี SS จากไข่ทอง (เหลือ 28 ฟองเมื่อถึง Codex Lv.15)
  4. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - รัน `npm run test:codex`: ผ่านฉลุย 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 3.33s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/main.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/engine/save_manager.ts`
  - `doc/19_history_and_backup.md`

---

## [Backup #092] — วันที่ 2026-11-06
- **คำสั่งจาก Game Director:** ดำเนินการพัฒนา **ระบบสมุดสะสมสัตว์เลี้ยง (Animalia Codex & Bestiary System) ในส่วน Phase 3 (Codex UI & Trivia Quiz View)**
- **การดำเนินการและรายละเอียดการพัฒนา:**
  1. **เพิ่มแถบเมนูนำทางและแจ้งเตือนของรางวัล (`src/ui/header.ts`):**
     - เพิ่มแท็บ `📖 สมุดสะสม` (`codex`) ในแถบเมนูด้านบนของเกม
     - เพิ่มตัวนับแจ้งเตือนเมื่อมีของรางวัลที่ยังไม่ได้กดรับ (`🎁 X`) เพื่อกระตุ้นให้ผู้เล่นเข้ามากดรับรางวัล
  2. **สร้างหน้าต่างและ UI สมุดสะสมฉบับสมบูรณ์ (`src/ui/codex_view.ts`):**
     - **Codex Header Banner:** แสดงระดับเลเวลสมุดสะสม, หลอดพลังวิจัย EXP ปัจจุบัน, โบนัสและสิทธิพิเศษปัจจุบัน (ส่วนลดเวลาฟัก, โบนัสดรอปทอง/อาหาร), และชิปแสดงสเตตัสสะสมของทั้งไอดีแบบ Real-time
     - **Sub-Tab 1 (สมุดสัตว์ Bestiary):** แสดงสัตว์ทั้ง 180 ชนิด พร้อม 3 สถานะการค้นพบ:
       - *ยังไม่เคยพบ (Unknown):* การ์ดมืดซิลูเอท พร้อมเครื่องหมาย `???`
       - *เคยพบเห็น (Seen):* การ์ดสีจาง สามารถดูข้อมูลเบื้องต้นและชีววิทยาได้
       - *ครอบครองแล้ว (Captured):* การ์ดสีสันคมชัด แสดงดาววิจัย 1★/3★/5★ และจุดสะสมรางวัลวิจัย
       - ช่องค้นหาชื่อ/ฉายา และตัวกรองตามธาตุ (Element), ระดับความหายาก (Rarity), และสถานะการค้นพบ
     - **Sub-Tab 2 (สายสัมพันธ์นิเวศน์ Bonds View):** แสดง 18 พันธมิตรตามถิ่นที่อยู่และตำนาน พร้อมรายชื่อสมาชิกในชุด (แสดงสัตว์ที่มีและยังไม่มี), เกจความคืบหน้า และปุ่มกดรับรางวัลเซ็ต
     - **Sub-Tab 3 (เกมทายปัญหาชีววิทยาสัตว์โลก Daily Trivia Quiz):** สุ่มคำถามชีววิทยา/นิเวศน์วิทยาจริงจาก `animal_lore.json` โดยอิงจากสัตว์ที่ผู้เล่นเคยพบเห็นแล้ว ทำถูกต้องได้รับค่าความอบอุ่นและอาหารสัตว์
     - **Modal รายละเอียดสัตว์และงานวิจัย:** คลิกดูรายละเอียดเชิงลึกของสัตว์แต่ละตัว ประวัติชีววิทยา พร้อมระบบกดรับรางวัลงานวิจัย 3 ขั้น (ดาว 1★, 3★, 5★)
  3. **เชื่อมโยงการสลับแท็บและ Interaction ในเกมหลัก (`src/main.ts`):**
     - จัดการการเปลี่ยนแท็บหลักมายัง `'codex'` และเปิดใช้งาน event listeners ของสมุดสะสม
     - เชื่อมโยงระบบบันทึกความคืบหน้าและการแจ้งเตือนเมื่อผู้เล่นกดรับรางวัลงานวิจัยหรือพันธมิตร
  4. **สร้างและจัดโครงสร้างความสวยงามด้วย CSS (`src/style.css`):**
     - เพิ่มสไตล์สำหรับ Codex Container, Bestiary Cards, Rarity Border, Discovery Overlay, Bond Sets, และ Daily Quiz Widget รองรับทั้ง Desktop และ Mobile
  5. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - รัน `npm run test:codex`: ผ่าน 100%
     - รัน `npm run test:battle-ui`: ผ่านครบ 32 หมวด 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.83s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `src/ui/codex_view.ts` (สร้างใหม่)
  - `src/ui/header.ts`
  - `src/main.ts`
  - `src/style.css`
  - `doc/19_history_and_backup.md`

---

## [Backup #093] — วันที่ 2026-11-06
- **คำสั่งจาก Game Director:** ดำเนินการพัฒนาและติดตั้ง **สัตว์มายาในตำนานระดับ SS สาย TANK ครบทั้ง 11 ธาตุ** โดยปรับธาตุน้ำแข็งเป็น **เยติ (Yeti)** ในแนวทางที่ 2 (Abominable Juggernaut & Glacial Block Counter)
- **การดำเนินการและรายละเอียดการพัฒนา:**
  1. **ปรับปรุงเอกสารการออกแบบและวิเคราะห์ (`doc/20_ss_tank_mythical_beasts_design.md`):**
     - บันทึกการเปลี่ยนตัวละครธาตุน้ำแข็งจาก โยทูนอูร์ซ่า เป็น เยติ (Yeti) พญาอสูรหิมะแห่งหิมาลัย
     - ติดตั้ง Ability `abominable_resilience` (กายาอสูรหิมะดึกดำบรรพ์) บล็อก +20%, ลดความเสียหายคริติคอลเหลือ 65%, บล็อกสำเร็จมีโอกาส 50% แช่แข็งศัตรูสวนกลับ 1 เทิร์น
     - ติดตั้ง Signature `กำแพงธารน้ำแข็งเยติพิทักษ์` มอบเกราะน้ำแข็ง 25% Max HP และลด ATK ศัตรู 15%
  2. **ติดตั้งข้อมูลฮีโร่และคลาสบัเจ็ต (`src/data/heroes.json`):**
     - เพิ่ม `archetypeShares` สำหรับฮีโร่ใหม่ 10 ตัว (XUANWU, ZIZ, KHALKOTAUROI, ERAWAN, YETI, TARASQUE, KARKINOS, AMMUT, NEMEAN_LION, BAKU)
     - เพิ่มวัตถุข้อมูลฮีโร่ระดับ SS สาย Tank ครบ 10 ตัวใหม่ (รวมพญานาคเดิม = 11 ตัว) โดยคุมกรอบ Class Budget ผลรวมสเตตัส = 182 พอยต์พอดี ยืนแถวหน้า 100% (`preferredRow: "front"`, `backlineChance: 0`)
     - ยอดรวมฮีโร่ทั้งหมดเพิ่มขึ้นจาก 180 เป็น 190 ตัว
  3. **ติดตั้งคำอธิบายท่าไม้ตายและข้อมูล Lore สัตว์โลก (`signature_descriptions.json`, `animal_lore.json`):**
     - เพิ่มคำอธิบายท่าไม้ตาย Signature ครบทั้ง 10 ตัวใหม่ใน `src/data/signature_descriptions.json`
     - เพิ่มข้อมูลวิทยาศาสตร์ ถิ่นที่อยู่ พฤติกรรมธรรมชาติ และประวัติ Lore ทางตำนานครบ 10 ตัวใน `src/data/animal_lore.json`
  4. **แมป Emoji ประจำตัวในสมรภูมิ (`src/ui/battle_view.ts`):**
     - เสวียนอู่ (🐢), ซิซ (🦅), คัลโคเทารอย (🐂), เอราวัณ (🐘), เยติ (🦍), ทาแร็สก์ (🐲), คาร์คิโนส (🦀), อัมมิต (🐊), สิงโตเนเมีย (🦁), บาคุ (🦏)
  5. **ติดตั้งระบบคำนวณการต่อสู้ 1v1 และ 2v2 (`src/engine/combat.ts`, `src/engine/team_combat.ts`):**
     - ติดตั้งโบนัสสเตตัสพื้นฐานใน `getEffectiveStats` (บล็อก, หลบหลีก)
     - ติดตั้งภูมิคุ้มกันสถานะลบเฉพาะตัว: เอราวัณต้านทานสตั้น 100%, บาคุต้านทานสับสน/หลับ 100%, เยติต้านทานแช่แข็ง/สโลว์ 100%
     - ติดตั้งผลเริ่มเทิร์น: ทาแร็สก์รากไม้งอกฟื้นฟู 4% HP, อัมมิตลดดาเมจสถานะ DoT ลง 35% พร้อมดูดเลือดพื้นฐาน 12%
     - ติดตั้งผลการถูกโจมตี/บล็อก: คัลโคเทารอยทนไฟ 50% และสะท้อนหนามเพลิง 25% ATK, สิงโตเนเมียลดดาเมจกายภาพ 15%, บาคุสูบ SP ผู้โจมตีเมื่อใช้สกิล, เอราวัณแปลงดาเมจ 30% เป็นเกราะ, เสวียนอู่บล็อกสำเร็จมีโอกาส 60% สาปหิน, เยติบล็อกสำเร็จมีโอกาส 50% แช่แข็ง, คาร์คิโนสต้านเจาะเกราะ 40% และปล่อยพิษเมื่อบล็อก
     - ติดตั้งเอฟเฟกต์ท่าไม้ตายเฉพาะตัวครบทั้ง 10 ตัวในทั้งโหมดเดี่ยว 1v1 และแท็กทีม 2v2
  6. **การทดสอบความถูกต้องและการตรวจสอบ (Verification Results):**
     - สร้างชุดทดสอบจำลองการต่อสู้ `src/sim/test_ss_tanks.ts` และเพิ่มคำสั่ง `"test:ss-tanks"` ใน `package.json`
     - รัน `npm run test:ss-tanks`: ผ่าน 100% ครบทุกการทดสอบ (สเตตัส 182 พอยต์, คำอธิบายสกิล, บันทึก Lore, Emoji, การต่อสู้ 1v1 และ 2v2)
     - รัน `npm run test:codex`: ผ่าน 100%
     - รัน `npm run test:battle-ui`: ผ่านครบ 32 หมวด 100%
     - รัน `npm run typecheck`: ผ่าน 0 errors
     - รัน `npm run build`: Production Build สำเร็จ 100% (Built in 2.88s)
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `doc/20_ss_tank_mythical_beasts_design.md`
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/ui/codex_view.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_ss_tanks.ts` (สร้างใหม่)
  - `package.json`
  - `doc/19_history_and_backup.md`


























## [Backup #094] — วันที่ 2026-11-06 เวลา 11:59:00
- **คำสั่งจาก Game Director:**
  1. คงมังกรฟ้า (`azure_dragon`) เป็น SS Assassin ธาตุแสงเหมือนเดิม
  2. เปลี่ยนสัตว์มายาระดับ SS สาย Assassin ธาตุดินเป็น พญาแมงมุมอสูรปฐพี "ซึจิกุโมะ" (`tsuchigumo`) ตามแนวทางที่ 1 (Trapdoor Web Executioner)
  3. เพิ่มสัตว์มายาระดับ SS สาย ASSASSIN ครบทุกธาตุเข้าสู่ระบบเกม ทั้งสเตตัส, ability, ท่าไม้ตาย signature, และ lore
  4. ปรับสมุดสะสมสัตว์เลี้ยง Animalia Codex และเพิ่มชุดสายสัมพันธ์ (Bond Sets) ให้รองรับสัตว์กลุ่มนี้
- **รายละเอียดการเปลี่ยนแปลง:**
  1. **เพิ่ม 10 Archetype Shares ใหม่และ 10 ฮีโร่ SS Assassin ใน `src/data/heroes.json`:**
     - `tsuchigumo` (ดิน 🕷️, STR 69, AGI 69, STA 44, ค่ายกลใยศิลาเขี้ยวอสูรสูบธรณี, หลุมพรางพสุธาสั่นสะเทือน)
     - `kraken` (น้ำ 🦑, STR 68, AGI 68, STA 46, หมึกทมิฬหนวดอสูรฉุดลงเหวลึก, พรางกายเงาสมุทรลึก)
     - `kamaitachi` (ลม 🌪️, STR 64, AGI 76, STA 42, สามคมเคียววายุสะบั้นวิญญาณ, คมเคียวสายลมไร้เสียง)
     - `skoll` (ไฟ 🐺, STR 71, AGI 69, STA 42, เขี้ยวอุกกาบาตกลืนสุริยัน, นักล่าสุริยะคราสคลั่ง)
     - `raiju` (สายฟ้า ⚡, STR 66, AGI 74, STA 42, อสุนีบาตเขี้ยวแสงผ่าจุดตาย, ร่างจำแลงสายฟ้าแลบ)
     - `wendigo` (น้ำแข็ง 🦌, STR 72, AGI 68, STA 42, กรงเล็บเหมันต์ปลิดวิญญาณ, กระหายเลือดกลางพายุหิมะ)
     - `weretiger_saming` (พืช 🐅, STR 70, AGI 68, STA 44, อาคมสมิงพรางดงกระโจนขย้ำคอ, มนตราพรางไพรสะกดวิญญาณ)
     - `manticore` (พิษ 🦂, STR 69, AGI 69, STA 44, ห่าเข็มพิษหางแมงป่องสังหาร, เหล็กในราชสีห์พิษอัมพาต)
     - `camazotz` (ความมืด 🦇, STR 68, AGI 72, STA 42, ปีกรัตติกาลบั่นเศียรสูบวิญญาณ, คลื่นโซนาร์รัตติกาลดูดเลือด)
     - `nue` (พลังจิต 🐒, STR 66, AGI 70, STA 46, คลื่นจิตอสูรเมฆาทมิฬสะกดชีพ, ร่างจำแลงเมฆาฝันร้าย)
     - รวมกับ `azure_dragon` (แสง 🐉) เดิม ครบ 11 ธาตุ ฮีโร่รวมทั้งระบบเพิ่มเป็น 200 ตัว (SS รวมเป็น 34 ตัว)
  2. **คำอธิบาย Signature และ Lore (`src/data/signature_descriptions.json`, `src/data/animal_lore.json`):**
     - เพิ่มคำอธิบายท่าไม้ตาย 10 รายการครบถ้วน (รวมเป็น 200 รายการ)
     - เพิ่มข้อมูลทางชีววิทยา, พฤติกรรมธรรมชาติ, และตำนานใน `animal_lore.json` ครบทั้ง 10 ตัว (รวมเป็น 50 รายการ)
  3. **เพิ่ม Emoji อวาตาร์ใน `src/ui/battle_view.ts`:**
     - `tsuchigumo`: 🕷️, `kraken`: 🦑, `kamaitachi`: 🌪️, `skoll`: 🐺, `raiju`: ⚡, `wendigo`: 🦌, `weretiger_saming`: 🐅, `manticore`: 🦂, `camazotz`: 🦇, `nue`: 🐒
  4. **ชุดสายสัมพันธ์สัตว์เลี้ยงใน Codex (`src/engine/codex_manager.ts`, `src/ui/codex_view.ts`):**
     - เพิ่มชุดสายสัมพันธ์ระดับ Mythic ใหม่ 2 ชุด:
       - `mythic_predators` (สมาพันธ์นักล่าลี้ลับ): tsuchigumo, kraken, kamaitachi, skoll, raiju (บัฟไอดี: ATK +1.5%, CRI +1.0%)
       - `mythic_stalkers` (เพชฌฆาตเงาจันทรา): wendigo, weretiger_saming, manticore, camazotz, nue (บัฟไอดี: HP +1.5%, ATK +1.5%)
       - รวมชุดสายสัมพันธ์ทั้งหมดเพิ่มขึ้นเป็น 20 ชุด
  5. **ติดตั้งตรรกะระบบต่อสู้ 1v1 และ 2v2 (`src/engine/combat.ts`, `src/engine/team_combat.ts`):**
     - ติดตั้งโบนัสสเตตัส Ability พื้นฐาน (Flee, AB, CRI, SPD)
     - ติดตั้งภูมิคุ้มกัน CC เฉพาะตัว (ไรจูกันสตั้น/สโลว์ 100%, คามาซอตซ์กันตาบอด 100%, นูเอะกันสับสน/ใบ้ 100%)
     - ติดตั้งเงื่อนไขตีแรง/คริแรง/ดูดเลือดตามสถานะเหยื่อ
     - ติดตั้งเอฟเฟกต์ท่าไม้ตาย Signature ของนักฆ่าทั้ง 10 ตัว ทั้งในระบบ 1v1 และ 2v2 Tactical Grid
  6. **การตรวจสอบความถูกต้อง (Verification):**
     - `npm run test:ss-assassins`: ผ่าน 100% ครบทั้ง 11 ธาตุ (182 Class Budget, 1v1, 2v2)
     - `npm run test:codex`: ผ่าน 100% (รองรับ 20 ชุดสายสัมพันธ์)
     - `npm run test:ss-tanks`: ผ่าน 100%
     - `npm run test:battle-ui`: ผ่าน 100%
     - `npm run typecheck`: ผ่าน 0 errors
     - `npm run build`: Production Build ผ่านสมบูรณ์ 100%
- **ไฟล์ที่สร้าง/แก้ไข:**
  - `doc/21_ss_assassin_mythical_beasts_design.md`
  - `src/data/heroes.json`
  - `src/data/signature_descriptions.json`
  - `src/data/animal_lore.json`
  - `src/ui/battle_view.ts`
  - `src/ui/codex_view.ts`
  - `src/engine/codex_manager.ts`
  - `src/engine/combat.ts`
  - `src/engine/team_combat.ts`
  - `src/sim/test_ss_assassins.ts` (สร้างใหม่)
  - `src/sim/test_codex.ts`
  - `package.json`
  - `doc/19_history_and_backup.md`

---

## [Backup #095] — วันที่ 2026-11-06
- **คำสั่งจาก Game Director:**
  "ต่อไป อยากให้ปรับตรงส่วนของ ข้อความแสดง log เมื่อต่อสู้ อยากให้ log การต่อสู้แสดงพร้อมไปกับจังหวะการออกสกิล ออกการโจมตี จากที่ผมทดสอบแล้ว ข้อความ log การต่อสู้จะออกก่อนเสมอ ซึ่งไม่สมควรและดูไม่มืออาชีพครับ ช่วยดำเนินการปรับให้ทีครับ"
- **สาเหตุของปัญหา (Root Causes):**
  1. ใน `executeAndAnimateSingleTurn()` (`src/main.ts`) เมื่อเรียก `session.stepTurn()` ระบบจะคำนวณเหตุการณ์ทั้งเทิร์น (เช่น ต้นเทิร์น + ฝ่ายเราโจมตี + ศัตรูโจมตีสวน) และบันทึกทุกเหตุการณ์ลง `session.logs` ล่วงหน้าทันที เมื่อ `updateArenaUI()` ถูกเรียกระหว่างอนิเมชัน (เช่น จบเหตุการณ์ต้นเทิร์น หรือจบจังหวะโจมตีแรกก่อนผลัดเทิร์น 1 วินาที) `renderCombatLogPanelHtml(session.logs, battleViewState)` จึงนำ Log ของเหตุการณ์ในอนาคตที่ยังไม่ได้เล่นอนิเมชันมาแสดงผลออกมาก่อนทั้งหมด
  2. ฟังก์ชัน `appendCombatLog(ev)` เดิมอ้างอิง DOM ID เก่า (`#combat-log-list`) ซึ่งไม่มีอยู่ใน MMORPG Battle UI ปัจจุบัน (`#combat-log-panel-box` / `#log-scroll-view`) ทำให้การเพิ่ม Log ทีละจังหวะไม่ทำงาน
  3. ในโหมด `2v2_grid` เดิมเรียก `teamSession.stepRound(); updateArenaUI();` รวดเดียวโดยไม่ผ่านคิวอนิเมชัน `animateTurnEvent(ev)` ทำให้ Log ของทั้ง 4 ตัวละครในรอบนั้นเด้งขึ้นพร้อมกันทันที
- **การดำเนินการแก้ไข:**
  1. **แยกคิว `displayedLogs: TurnEvent[]` สำหรับแสดงผลตามจังหวะอนิเมชันจริง (`src/main.ts`):**
     - เพิ่มตัวแปร `displayedLogs` ที่เก็บเฉพาะเหตุการณ์ที่อนิเมชันเดินทางมาถึงจังหวะปะทะ (Hit Impact) หรือจังหวะแสดงผลแล้วเท่านั้น
     - รีเซ็ต `displayedLogs = []` เมื่อเริ่มการต่อสู้ใหม่ (`initBattleSession`, `startCampaignBattle`) และเมื่อกดปุ่มล้างประวัติ (`onClearLogs`)
     - ปรับ `renderBattleScreen()`, `updateArenaUI()`, และ `updateArena2v2UI()` ให้ส่ง `displayedLogs` เข้าสู่ `renderCombatLogPanelHtml(displayedLogs, battleViewState)` แทน `session.logs` / `teamSession.logs` เพื่อป้องกันไม่ให้ Log ในอนาคตหลุดออกมาก่อนตัวละครออกท่า
  2. **ปรับปรุง `appendCombatLog(ev)` ให้ซิงค์กับ MMORPG Combat Log Panel (`src/main.ts`):**
     - เมื่อถึงจังหวะที่ตัวละครพุ่งเข้าปะทะและเกิดดาเมจ/สกิล (`Hit Impact` ใน `animateTurnEvent`) จึงจะสั่ง `displayedLogs.push(ev)` พร้อมอัปเดต `#combat-log-panel-box` และเลื่อน `#log-scroll-view` ลงล่างสุดอัตโนมัติในเสี้ยววินาทีเดียวกับที่หลอด HP/SP ลดลงและตัวเลขดาเมจลอยขึ้น
  3. **รองรับ Per-Action Snapshot และคิวอนิเมชันทีละจังหวะในโหมด 2v2 Grid (`src/engine/team_combat.ts`, `src/ui/battle_view.ts`, `src/main.ts`):**
     - เพิ่ม `captureSnapshot()` ใน `TeamBattleSession` (`src/engine/team_combat.ts`) และบันทึก `ev.snapshot = this.captureSnapshot()` ในทุก `recordEvent(ev)`
     - ปรับ `adapt2v2BattleData(ts, snap)` (`src/ui/battle_view.ts`) ให้อ่านค่า HP/SP/Shield/Gauge/Effects จาก `currentSnap` ระหว่างกำลังเล่นอนิเมชัน
     - สร้าง `executeAndAnimate2v2Round()` ใน `src/main.ts` เพื่อดึงเฉพาะเหตุการณ์ใหม่ของรอบนั้นมาเล่น `await animateTurnEvent(ev)` ทีละแอ็กชัน ทำให้โหมด 2v2 แสดงอนิเมชันและขึ้นข้อความ Log ตรงตามจังหวะการออกสกิลของแต่ละตัวละครอย่างมืออาชีพเช่นเดียวกับ 1v1
- **การตรวจสอบความถูกต้อง (Verification):**
  - `npm run test:battle-ui`: ผ่าน 100%
  - `npm run typecheck`: ผ่าน 0 errors
  - `npm run build`: Production Build ผ่านสมบูรณ์ 100%
- **ไฟล์ที่แก้ไข:**
  - `src/main.ts`
  - `src/engine/team_combat.ts`
  - `src/ui/battle_view.ts`
  - `doc/19_history_and_backup.md`
