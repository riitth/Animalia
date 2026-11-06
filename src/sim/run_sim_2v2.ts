import { TeamBattleSession, type GridCoord } from '../engine/team_combat.ts';
import heroesData from '../data/heroes.json' with { type: 'json' };

const HERO_MAP = new Map(heroesData.heroes.map(h => [h.id, h]));

console.log('======================================================================');
console.log('  ทดสอบจำลองระบบต่อสู้ทีม 2v2 บนกระดานจัดทัพ 3x3 (Simultaneous 2v2)  ');
console.log('======================================================================');

const sampleBattles = [
  {
    title: 'ศึกที่ 1: แทงก์+ซัพพอร์ต ปะทะ แอสซาซิน+สไตรเกอร์',
    teamA: ['turtle', 'deer'], // เต่า (Tank หน้า) + กวาง (Supporter หลัง)
    posA: [{ row: 'front', col: 1 }, { row: 'back', col: 1 }] as GridCoord[],
    teamB: ['mantis', 'lion'],  // แมนติส (Assassin กลาง) + สิงโต (Striker หน้า)
    posB: [{ row: 'mid', col: 1 }, { row: 'front', col: 1 }] as GridCoord[],
  },
  {
    title: 'ศึกที่ 2: คอมโบ AOE & CC หนาแน่น (สิงโตทะเล + นกยูง ปะทะ เม่น + ค้างคาว)',
    teamA: ['sea_lion', 'peacock'], // สิงโตทะเล (Controller กลาง) + นกยูง (Controller หลัง)
    posA: [{ row: 'mid', col: 0 }, { row: 'back', col: 2 }] as GridCoord[],
    teamB: ['porcupine', 'bat'],    // เม่น (Tank หน้า) + ค้างคาว (Supporter หลัง)
    posB: [{ row: 'front', col: 1 }, { row: 'back', col: 1 }] as GridCoord[],
  },
  {
    title: 'ศึกที่ 3: ศึกสัตว์เทพ SS มหากาฬ (มังกรฟ้า + พญานาค ปะทะ ฟีนิกซ์ + สิงโต)',
    teamA: ['azure_dragon', 'naga'],
    posA: [{ row: 'mid', col: 1 }, { row: 'front', col: 1 }] as GridCoord[],
    teamB: ['phoenix', 'lion'],
    posB: [{ row: 'front', col: 0 }, { row: 'front', col: 2 }] as GridCoord[],
  },
];

for (const b of sampleBattles) {
  console.log(`\n----------------------------------------------------------------------`);
  console.log(`⚔️  ${b.title}`);
  console.log(`----------------------------------------------------------------------`);

  const session = new TeamBattleSession(b.teamA, b.teamB, {
    enableSkillEffects: true,
    enableSameElementBonus: true,
    teamAPositions: b.posA,
    teamBPositions: b.posB,
  });

  console.log('【 การจัดวางทัพ & โบนัสตำแหน่ง 】');
  console.log('  ฝั่ง A:');
  for (const f of session.squadA.fighters) {
    const bonus = f.roleAffinityActive ? `✨ ได้รับโบนัส [${f.roleAffinityDesc}]` : '❌ ไม่ได้รับโบนัสตำแหน่ง';
    console.log(`    - [${f.name}] ยืนแถว [${f.pos.row.toUpperCase()}] ช่อง ${f.pos.col} -> ${bonus}`);
  }
  console.log('  ฝั่ง B:');
  for (const f of session.squadB.fighters) {
    const bonus = f.roleAffinityActive ? `✨ ได้รับโบนัส [${f.roleAffinityDesc}]` : '❌ ไม่ได้รับโบนัสตำแหน่ง';
    console.log(`    - [${f.name}] ยืนแถว [${f.pos.row.toUpperCase()}] ช่อง ${f.pos.col} -> ${bonus}`);
  }

  console.log('\n【 บันทึกการต่อสู้ (Combat Logs) 】');
  while (!session.winner) {
    session.stepRound();
  }

  for (const ev of session.logs) {
    console.log('  ' + ev.message);
  }

  console.log(`\n🏆 ผลลัพธ์: ฝั่ง ${session.winner} ชนะ! (จบในรอบที่ ${session.round}, แอ็กชันรวม ${session.totalActions} ครั้ง)`);
  console.log(`  HP ฝั่ง A ที่เหลือ: ${session.squadA.fighters.map(f => `${f.name} (${Math.round(f.hp)}/${f.baseStats.maxHp})`).join(' | ')}`);
  console.log(`  HP ฝั่ง B ที่เหลือ: ${session.squadB.fighters.map(f => `${f.name} (${Math.round(f.hp)}/${f.baseStats.maxHp})`).join(' | ')}`);
}

// รัน Simulation 500 ไฟต์ เพื่อเก็บสถิติความยาวรอบเฉลี่ยและ winrate
console.log(`\n======================================================================`);
console.log(`  รัน Simulation ทดสอบความเสถียร 500 ไฟต์สุ่มทีม 2v2                  `);
console.log(`======================================================================`);

const heroesList = heroesData.heroes.map(h => h.id);
let winsA = 0;
let winsB = 0;
let draws = 0;
let totalRounds = 0;
const SIM_COUNT = 500;

for (let i = 0; i < SIM_COUNT; i++) {
  const randA1 = heroesList[Math.floor(Math.random() * heroesList.length)];
  let randA2 = heroesList[Math.floor(Math.random() * heroesList.length)];
  while (randA2 === randA1) randA2 = heroesList[Math.floor(Math.random() * heroesList.length)];

  const randB1 = heroesList[Math.floor(Math.random() * heroesList.length)];
  let randB2 = heroesList[Math.floor(Math.random() * heroesList.length)];
  while (randB2 === randB1) randB2 = heroesList[Math.floor(Math.random() * heroesList.length)];

  const s = new TeamBattleSession([randA1, randA2], [randB1, randB2], {
    enableSkillEffects: true,
    enableSameElementBonus: true,
  });
  const res = s.runToEnd();
  if (res === 'A') winsA++;
  else if (res === 'B') winsB++;
  else draws++;
  totalRounds += s.round;
}

console.log(`ความยาวการต่อสู้ 2v2 เฉลี่ย: ${(totalRounds / SIM_COUNT).toFixed(1)} รอบ`);
console.log(`สัดส่วนชัยชนะ: ฝั่ง A ${(winsA * 100 / SIM_COUNT).toFixed(1)}% | ฝั่ง B ${(winsB * 100 / SIM_COUNT).toFixed(1)}% | เสมอ ${(draws * 100 / SIM_COUNT).toFixed(1)}%`);
console.log(`✅ การจำลอง 2v2 สำเร็จสมบูรณ์ ไร้ข้อผิดพลาด (Zero runtime errors)`);

