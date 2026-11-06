// Wild Heroes balance simulator (1v1, no backup swap). Usage: node balance_sim.js [fights=5000]
// Does NOT modify docs. Assumptions are marked ASSUMED; effects (burn/stun etc.) are ignored.
const FIGHTS = +process.argv[2] || 5000;
const MAX_TURNS = 60;

const HEROES = [
  ['ไก่', 'B', 950, 120, 45, 100], ['แมว', 'B', 800, 105, 40, 130], ['ควาย', 'B', 1250, 85, 70, 80],
  ['หมาป่า', 'A', 950, 115, 50, 135], ['เต่า', 'A', 1250, 90, 80, 75], ['เสือ', 'A', 1050, 135, 55, 110],
  ['อินทรี', 'S', 1000, 130, 55, 145], ['แรด', 'S', 1400, 110, 90, 85], ['สิงโต', 'S', 1150, 145, 65, 115],
  ['มังกรฟ้า', 'SS', 1250, 155, 75, 145], ['พญานาค', 'SS', 1550, 130, 95, 105], ['ฟีนิกซ์', 'SS', 1200, 165, 70, 125],
].map(([name, cls, hp, atk, def, spd]) => ({ name, cls, hp, atk, def, spd }));

// Signature gauge per class (doc 16): gain per turn, multiplier
const SIG = { B: { gain: 34, mult: 2.0 }, A: { gain: 25, mult: 2.8 }, S: { gain: 20, mult: 3.6 }, SS: { gain: 17, mult: 4.5 } };
// Skill slots (doc 16): chance, mult. Layout LMSS ASSUMED (slot1 first)
const SK = { S: { p: 0.20, m: 1.6 }, M: { p: 0.15, m: 1.8 }, L: { p: 0.10, m: 2.2 } };
const SLOTS = ['L', 'M', 'S', 'S'];
const CRIT = 0.10, CRIT_MULT = 1.5; // ASSUMED (not in docs)

const VARIANTS = {
  baseline: {},
  'K150 (DEF softer)': { defK: 150 },
  'SS gauge start 50': { ssStart: 50 },
  'compress 40%': { compress: 0.4 },
  'compress40+K150+SSstart50': { compress: 0.4, defK: 150, ssStart: 50 },
};

function mean(k) { return HEROES.reduce((s, h) => s + h[k], 0) / HEROES.length; }
const MEAN = { hp: mean('hp'), atk: mean('atk'), def: mean('def') };

function prep(h, v) {
  const c = v.compress || 0;
  const mix = (x, m) => x * (1 - c) + m * c; // pull HP/ATK/DEF toward global mean
  return {
    ...h, hp: mix(h.hp, MEAN.hp), atk: mix(h.atk, MEAN.atk), def: mix(h.def, MEAN.def),
    gauge: h.cls === 'SS' ? (v.ssStart || 0) : 0,
  };
}

function hit(att, def, skillMult, elemMult, v) {
  const K = v.defK || 100;
  let d = att.atk * skillMult * (K / (K + def.def)) * elemMult * (0.95 + Math.random() * 0.1);
  if (Math.random() < CRIT) d *= CRIT_MULT;
  return d;
}

function act(a, b, elemMult, v) {
  const s = SIG[a.cls];
  a.gauge += s.gain;
  if (a.gauge >= 100) { a.gauge -= 100; a.sigUsed++; a.sigDmg += 0; const d = hit(a, b, s.mult, elemMult, v); a.sigDmg += d; b.hp -= d; return; }
  for (const slot of SLOTS) {
    if (Math.random() < SK[slot].p) { b.hp -= hit(a, b, SK[slot].m, elemMult, v); return; }
  }
  b.hp -= hit(a, b, 1, elemMult, v);
}

// elemA: multiplier for A's attacks; B gets inverse (1.3 <-> 0.85, 1 neutral)
function fight(ha, hb, elemA, v) {
  const a = prep(ha, v), b = prep(hb, v);
  a.sigUsed = b.sigUsed = 0; a.sigDmg = b.sigDmg = 0; a.dealt = b.dealt = 0;
  const eB = elemA === 1.3 ? 0.85 : elemA === 0.85 ? 1.3 : 1;
  const first = a.spd === b.spd ? (Math.random() < 0.5 ? 0 : 1) : (a.spd > b.spd ? 0 : 1);
  const order = first === 0 ? [[a, b, elemA], [b, a, eB]] : [[b, a, eB], [a, b, elemA]];
  let turns = 0;
  for (; turns < MAX_TURNS && a.hp > 0 && b.hp > 0; turns++) {
    for (const [x, y, e] of order) { if (x.hp > 0 && y.hp > 0) act(x, y, e, v); }
  }
  return { aWin: b.hp <= 0 && a.hp > 0 ? 1 : (a.hp <= 0 && b.hp > 0 ? 0 : 0.5), turns, a, b };
}

function winrate(ha, hb, elemA, v) {
  let w = 0, t = 0, sig = 0;
  for (let i = 0; i < FIGHTS; i++) {
    const r = fight(ha, hb, elemA, v); w += r.aWin; t += r.turns;
    sig += r.a.sigUsed > 0 ? 1 : 0;
  }
  return { wr: w / FIGHTS, turns: t / FIGHTS, sigRate: sig / FIGHTS };
}
const pct = x => (x * 100).toFixed(1).padStart(5) + '%';
const H = n => HEROES.find(h => h.name === n);

for (const [vname, v] of Object.entries(VARIANTS)) {
  console.log(`\n==================== ${vname} ====================`);
  // Same-element round robin
  const wr = {}; let sumTurns = 0, nT = 0;
  for (const a of HEROES) for (const b of HEROES) {
    if (a === b) continue; const r = winrate(a, b, 1, v); wr[a.name + '|' + b.name] = r.wr; sumTurns += r.turns; nT++;
  }
  const avg = n => HEROES.filter(h => h.name !== n).reduce((s, h) => s + wr[n + '|' + h.name], 0) / (HEROES.length - 1);
  console.log('Avg fight length (turns):', (sumTurns / nT).toFixed(1));
  console.log('Avg win-rate per hero (same element):');
  for (const h of HEROES) console.log(`  ${h.cls.padEnd(2)} ${h.name.padEnd(8)} ${pct(avg(h.name))}`);

  const classOf = c => HEROES.filter(h => h.cls === c);
  const clsWr = (c1, c2) => { let s = 0, n = 0; for (const a of classOf(c1)) for (const b of classOf(c2)) { if (a !== b) { s += wr[a.name + '|' + b.name]; n++; } } return s / n; };
  console.log('Class gap (lower class win-rate, same element) [target B/A 20-30%, A/S 20-30%, B/SS <=5%]:');
  console.log(`  B vs A : ${pct(clsWr('B', 'A'))}   A vs S : ${pct(clsWr('A', 'S'))}   B vs SS: ${pct(clsWr('B', 'SS'))}   S vs SS: ${pct(clsWr('S', 'SS'))}`);
  console.log('Within-class (same element) SS vs SS [target 40-60%]:');
  const ss = classOf('SS');
  for (let i = 0; i < ss.length; i++) for (let j = i + 1; j < ss.length; j++) console.log(`  ${ss[i].name} vs ${ss[j].name}: ${pct(wr[ss[i].name + '|' + ss[j].name])}`);

  console.log('Key cross-class fights WITH element advantage x1.3 / x0.85 (lower class wins):');
  for (const [a, b] of [['แมว', 'หมาป่า'], ['ควาย', 'เต่า'], ['เสือ', 'สิงโต'], ['หมาป่า', 'อินทรี'], ['อินทรี', 'พญานาค'], ['อินทรี', 'ฟีนิกซ์'], ['ควาย', 'พญานาค']]) {
    console.log(`  ${a.padEnd(7)} vs ${b.padEnd(8)} ${pct(winrate(H(a), H(b), 1.3, v).wr)}`);
  }
  const s = winrate(H('มังกรฟ้า'), H('ฟีนิกซ์'), 1, v);
  const s2 = winrate(H('ไก่'), H('ไก่'), 1, v);
  console.log(`Signature used >=1x per fighter: SS-mirror ${pct(s.sigRate)}, B-mirror ${pct(s2.sigRate)}`);
  const ssSig = HEROES.filter(h => h.cls === 'SS').map(h => winrate(h, H('สิงโต'), 1, v).sigRate);
  console.log(`  SS signature-use rate vs สิงโต(S): ${ssSig.map(pct).join(' / ')}`);
}

