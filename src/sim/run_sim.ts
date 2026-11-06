import { BattleSession, computeHeroStats, getAllHeroes, getAllSkills, type CombatOptions } from '../engine/combat.ts';

const argFights = process.argv.find(a => a.startsWith('--fights='))?.split('=')[1];
const FIGHTS = Number(argFights || process.env.FIGHTS || 10);
const heroes = getAllHeroes();
const pct = (x: number) => (x * 100).toFixed(1).padStart(5) + '%';

function simPair(idA: string, idB: string, opts: CombatOptions, fights = FIGHTS) {
  let wins = 0;
  let turns = 0;
  let sigUsed = 0;
  for (let i = 0; i < fights; i++) {
    const s = new BattleSession([idA], [idB], opts);
    const w = s.runToEnd();
    wins += w === 'A' ? 1 : w === 'B' ? 0 : 0.5;
    turns += s.turn;
    if (s.teamA.fighters[0].sigUsedCount > 0) sigUsed++;
  }
  return { wr: wins / fights, avgTurns: turns / fights, sigRate: sigUsed / fights };
}

function runSuite(title: string, opts: CombatOptions) {
  console.log(`\n======================================================================`);
  console.log(`  ${title} (${FIGHTS} ไฟต์/คู่)`);
  console.log(`======================================================================`);

  const matrix: Record<string, number> = {};
  let totalTurns = 0;
  let pairs = 0;

  for (const a of heroes) {
    for (const b of heroes) {
      if (a.id === b.id) continue;
      const r = simPair(a.id, b.id, { ...opts, forcedElementAdvantage: 'neutral' });
      matrix[`${a.id}|${b.id}`] = r.wr;
      totalTurns += r.avgTurns;
      pairs++;
    }
  }

  console.log(`ความยาวไฟต์เฉลี่ย: ${(totalTurns / pairs).toFixed(1)} เทิร์น`);
  const byRarity = (c: string) => heroes.filter(h => h.rarity === c);
  const avgWr = (id: string) =>
    heroes.filter(h => h.id !== id).reduce((s, h) => s + matrix[`${id}|${h.id}`], 0) / (heroes.length - 1);

  for (const c of ['B', 'A', 'S', 'SS']) {
    const list = byRarity(c);
    const vals = list.map(h => avgWr(h.id));
    const spread = ((Math.max(...vals) - Math.min(...vals)) * 100).toFixed(1);
    console.log(
      `  คลาส ${c.padEnd(2)}: ` +
        list.map(h => `${h.name} ${pct(avgWr(h.id)).trim()}`).join(' | ') +
        `   (spread = ${spread}pt)`
    );
  }

  const classGap = (c1: string, c2: string) => {
    let sum = 0;
    let count = 0;
    for (const a of byRarity(c1)) {
      for (const b of byRarity(c2)) {
        sum += matrix[`${a.id}|${b.id}`];
        count++;
      }
    }
    return sum / count;
  };

  console.log(
    `ช่องว่างคลาส (ธาตุเสมอ): B>A ${pct(classGap('B', 'A'))} | A>S ${pct(classGap('A', 'S'))} | S>SS ${pct(
      classGap('S', 'SS')
    )} | B>SS ${pct(classGap('B', 'SS'))}`
  );

  const keyPairs: [string, string, string][] = [
    ['cat', 'wolf', 'แมว(B ลม) > หมาป่า(A มืด)'],
    ['buffalo', 'turtle', 'ควาย(B ดิน) > เต่า(A น้ำ)'],
    ['tiger', 'lion', 'เสือ(A ไฟ) > สิงโต(S พืช)'],
    ['wolf', 'eagle', 'หมาป่า(A มืด) > อินทรี(S สายฟ้า)'],
    ['eagle', 'naga', 'อินทรี(S สายฟ้า) > พญานาค(SS น้ำ)'],
    ['buffalo', 'naga', 'ควาย(B ดิน) > พญานาค(SS น้ำ)'],
  ];
  console.log(`ผลข้ามคลาสเมื่อใช้ตารางธาตุจริง (×1.3 / ×0.85):`);
  for (const [idA, idB, label] of keyPairs) {
    const r = simPair(idA, idB, { ...opts, forcedElementAdvantage: 'actual' });
    console.log(`  ${label.padEnd(34)}: ${pct(r.wr)}`);
  }
}

console.log(`=== ตรวจสอบตารางสเตตัสฮีโร่ทั้ง ${heroes.length} ตัวจาก Engine ===`);
for (const h of heroes) {
  const s = computeHeroStats(h.id);
  console.log(
    `  [${h.rarity.padEnd(2)}] ${h.name.padEnd(8)} STR ${s.str} AGI ${s.agi} STA ${s.sta} -> HP ${Math.round(
      s.maxHp
    )} SP ${s.maxSp}(+${s.spRegen}) ATK ${Math.round(s.atk)} DEF ${Math.round(s.def)} SPD ${Math.round(s.spd)} HIT ${Math.round(
      s.hit
    )} FLEE ${Math.round(s.flee)} CRI ${s.cri.toFixed(1)}% AB ${Math.round(s.ab)}% BLK ${Math.round(s.block)}%`
  );
}

// 1) ตรวจความตรงกับเอกสาร 17 (ไม่เปิดเอฟเฟกต์สถานะ/โบนัสธาตุตรงกัน)
runSuite('โหมดที่ 1: ตรวจสอบสูตรพื้นฐานเทียบเอกสาร 17 (ปิดสถานะผิดปกติ)', {
  enableSkillEffects: false,
  enableSameElementBonus: false,
});

// 2) เปิดครบทุกสถานะผิดปกติ + Skill Board + โบนัสธาตุตรงกัน
runSuite('โหมดที่ 2: เปิดครบ Skill Board + สถานะผิดปกติ + โบนัสธาตุตรงกัน', {
  enableSkillEffects: true,
  enableSameElementBonus: true,
});

// 2.5) ทดสอบสกิลบอร์ด 4 สายใหม่ไร้ธาตุ (กระบวนท่า / พยาบาล / เล่ห์กล / เร่งปฏิกิริยา = 16 สกิล)
console.log(`\n======================================================================`);
console.log(`  โหมดที่ 3: ทดสอบสกิลบอร์ด 4 สายใหม่ (รวมทั้งหมด ${getAllSkills().length} สกิล — ปลดล็อกครบ)`);
console.log(`======================================================================`);

const mixTests: {
  branchName: string;
  desc: string;
  heroA: string;
  heroB: string;
  mixedLoadoutA: string[];
}[] = [
  {
    branchName: '🥋 สายกระบวนท่า (Mix สตัน/สโลว์ ขัดจังหวะ)',
    desc: 'ไก่ (B ไฟ - เดิมไม่มี CC) ผสม [เพลงยุทธ์สยบมาร + ฝ่ามือสะท้านทรวง] สู้ แมว (B ลม)',
    heroA: 'rooster',
    heroB: 'cat',
    mixedLoadoutA: ['martial_l', 'fire_l', 'martial_m2', 'fire_s'],
  },
  {
    branchName: '💚 สายพยาบาล (Mix ฮีล + ถอนพิษ/ดับไฟ แก้ทางสาย DoT)',
    desc: 'ควาย (B ดิน) ผสม [ปาฏิหาริย์แห่งชีวิต + เข็มทิพย์ถอนพิษ] แก้ทางเผาไหม้ของ เสือ (A ไฟ)',
    heroA: 'buffalo',
    heroB: 'tiger',
    mixedLoadoutA: ['medical_l', 'earth_l', 'medical_m1', 'earth_s'],
  },
  {
    branchName: '🎭 สายเล่ห์กล (Mix ทลายเกราะ + ตัดเกจไม้ตาย -15)',
    desc: 'เต่า (A น้ำ) ผสม [กลลวงตัดกำลัง + กับดักทลายเกราะ] ตัดเกจและเจาะเกราะ ควาย (B ดิน)',
    heroA: 'turtle',
    heroB: 'buffalo',
    mixedLoadoutA: ['trick_m2', 'water_l', 'trick_m1', 'water_s'],
  },
  {
    branchName: '⚡ สายเร่งปฏิกิริยา (Mix เร่งเกจไม้ตาย +25 & คอมโบระเบิดแผลไฟ)',
    desc: 'ฟีนิกซ์ (SS ไฟ) ผสม [ขีดจำกัดสายเลือด + ระเบิดปฏิกิริยาธาตุ] เร่งไม้ตายสู้ พญานาค (SS น้ำ)',
    heroA: 'phoenix',
    heroB: 'naga',
    mixedLoadoutA: ['catalyst_l', 'fire_l', 'catalyst_m2', 'fire_m1'],
  },
  {
    branchName: '📜 สายวิชาลับ (Mix ฝนสุราชโลมไฟ + วิชาลับเงามายา)',
    desc: 'จิ้งจอก (S ไฟ) ผสม [ฝนสุรา (secret_s) + วิชาลับเงามายา (secret_l)] ชโลมสุราแพ้ไฟ + เงาฟันซ้ำ สู้ แมนติส (S สายฟ้า)',
    heroA: 'fox',
    heroB: 'mantis',
    mixedLoadoutA: ['fire_l', 'secret_s', 'fire_s', 'secret_l'],
  },
];

for (const mt of mixTests) {
  const baseRes = simPair(mt.heroA, mt.heroB, {
    enableSkillEffects: true,
    enableSameElementBonus: true,
    forcedElementAdvantage: 'actual',
  });
  const mixRes = simPair(mt.heroA, mt.heroB, {
    enableSkillEffects: true,
    enableSameElementBonus: true,
    forcedElementAdvantage: 'actual',
    customSkillsA: [mt.mixedLoadoutA],
  });
  const diff = ((mixRes.wr - baseRes.wr) * 100).toFixed(1);
  const sign = Number(diff) >= 0 ? `+${diff}%` : `${diff}%`;
  console.log(`  ${mt.branchName}`);
  console.log(`    โจทย์: ${mt.desc}`);
  console.log(
    `    อัตราชนะ: สกิลธาตุล้วน ${pct(baseRes.wr)}  -->  ผสมสายใหม่ [${mt.mixedLoadoutA.join(', ')}] ${pct(
      mixRes.wr
    )} (${sign})`
  );
}

// 3) ตัวอย่าง Combat Log 4 ไฟต์ (รวมระบบทีม 2 ตัว + สกิล 4 สายใหม่)
console.log(`\n======================================================================`);
console.log(`  ตัวอย่าง Combat Log 4 ไฟต์ (ทีม 2v2 + สลับตัว + สกิล 4 สายใหม่)`);
console.log(`======================================================================`);

const sampleMatches: {
  title: string;
  teamA: string[];
  teamB: string[];
  swapOnTurn?: number;
  customSkillsA?: string[][];
  customSkillsB?: string[][];
}[] = [
  {
    title: 'ไฟต์ตัวอย่างที่ 1: ทีม B/A (แมว + เสือ) ปะทะ (หมาป่า + สิงโต) พร้อมกดสลับตัวเทิร์นที่ 2',
    teamA: ['cat', 'tiger'],
    teamB: ['wolf', 'lion'],
    swapOnTurn: 2,
  },
  {
    title: 'ไฟต์ตัวอย่างที่ 2: ทีม S (อินทรี + แรด) ปะทะ ทีม SS (พญานาค + ฟีนิกซ์)',
    teamA: ['eagle', 'rhino'],
    teamB: ['naga', 'phoenix'],
  },
  {
    title: 'ไฟต์ตัวอย่างที่ 3: ศึกสัตว์มายา SS (มังกรฟ้า + พญานาค) ปะทะ (ฟีนิกซ์ + สิงโต)',
    teamA: ['azure_dragon', 'naga'],
    teamB: ['phoenix', 'lion'],
  },
  {
    title: 'ไฟต์ตัวอย่างที่ 4 (ทดสอบ 4 สายใหม่): เสือ(กระบวนท่า+พยาบาล) & หมาป่า(มืด+เล่ห์กล) ปะทะ เต่า(น้ำ+พยาบาล) & แรด(ดิน+เร่งปฏิกิริยา)',
    teamA: ['tiger', 'wolf'],
    teamB: ['turtle', 'rhino'],
    customSkillsA: [
      ['martial_l', 'medical_m2', 'martial_m1', 'medical_s'],
      ['dark_l', 'dark_m1', 'trick_l', 'trick_m2'],
    ],
    customSkillsB: [
      ['water_l', 'medical_l', 'water_m1', 'medical_m1'],
      ['earth_l', 'earth_m2', 'catalyst_l', 'catalyst_m1'],
    ],
  },
  {
    title: 'ไฟต์ตัวอย่างที่ 5 (ศึกสัตว์ใหม่ 9 ตัว): จิ้งจอก(S ไฟ) & แมนติส(S สายฟ้า) ปะทะ หมีกริสลี่(S ดิน) & งู(A พิษ)',
    teamA: ['fox', 'mantis'],
    teamB: ['grizzly', 'snake'],
  },
];

for (const m of sampleMatches) {
  console.log(`\n--- ${m.title} ---`);
  const session = new BattleSession(m.teamA, m.teamB, {
    enableSkillEffects: true,
    enableSameElementBonus: true,
    forcedElementAdvantage: 'actual',
    customSkillsA: m.customSkillsA,
    customSkillsB: m.customSkillsB,
  });
  while (!session.winner) {
    if (m.swapOnTurn && session.turn + 1 === m.swapOnTurn && session.canSwap(session.teamA)) {
      session.teamA.queuedSwap = true;
    }
    session.stepTurn();
  }
  for (const log of session.logs) {
    console.log('  ' + log.message);
  }
  console.log(`  ==> ผู้ชนะ: ฝั่ง ${session.winner} (จบใน ${session.turn} เทิร์น)`);
}
