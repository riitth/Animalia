// Wild Heroes balance simulator v2: STR/AGI/STA + HIT/FLEE/CRI/CRI DMG/Armor Break/Block.
// Usage: node balance_sim_v2.js [fights=3000]. Does not modify docs.
const FIGHTS = +process.argv[2] || 3000;
const MAX_TURNS = 60;

// ---------- Old model (for comparison) ----------
const OLD = [
  ['ไก่', 'B', 950, 120, 45, 100], ['แมว', 'B', 800, 105, 40, 130], ['ควาย', 'B', 1250, 85, 70, 80],
  ['หมาป่า', 'A', 950, 115, 50, 135], ['เต่า', 'A', 1250, 90, 80, 75], ['เสือ', 'A', 1050, 135, 55, 110],
  ['อินทรี', 'S', 1000, 130, 55, 145], ['แรด', 'S', 1400, 110, 90, 85], ['สิงโต', 'S', 1150, 145, 65, 115],
  ['มังกรฟ้า', 'SS', 1250, 155, 75, 145], ['พญานาค', 'SS', 1550, 130, 95, 105], ['ฟีนิกซ์', 'SS', 1200, 165, 70, 125],
].map(([name, cls, hp, atk, def, spd]) => ({ name, cls, hp, atk, def, spd, hit: 100, flee: 0, cri: 10, criDmg: 1.5, ab: 0, block: 0 }));

// ---------- New model ----------
// Total STR+AGI+STA points per class (step ~12-13%)
const BUDGET = { B: 150, A: 170, S: 190, SS: 215 };
// Archetype share [STR, AGI, STA]
const ARCH = {
  ATK: [0.46, 0.28, 0.26], SPD: [0.27, 0.46, 0.27], DEF: [0.26, 0.24, 0.50], BAL: [0.36, 0.32, 0.32],
  DRAGON: [0.38, 0.40, 0.22], NAGA: [0.24, 0.20, 0.56], PHOENIX: [0.50, 0.25, 0.25],
};
const ROSTER = [
  ['ไก่', 'B', 'ATK'], ['แมว', 'B', 'SPD'], ['ควาย', 'B', 'DEF'],
  ['หมาป่า', 'A', 'SPD'], ['เต่า', 'A', 'DEF'], ['เสือ', 'A', 'ATK'],
  ['อินทรี', 'S', 'SPD'], ['แรด', 'S', 'DEF'], ['สิงโต', 'S', 'BAL'],
  ['มังกรฟ้า', 'SS', 'DRAGON'], ['พญานาค', 'SS', 'NAGA'], ['ฟีนิกซ์', 'SS', 'PHOENIX'],
];
// Derived-stat coefficients (tunable)
const C = {
  atkPerSTR: 1.8, hpBase: 200, hpPerSTA: 16, defBase: 10, defPerSTA: 0.9, spdBase: 70, spdPerAGI: 0.8,
  hitBase: 100, hitPerAGI: 0.2, fleePerAGI: 0.3, criBase: 5, criPerAGI: 0.15, criCap: 40,
  criDmgBase: 1.4, criDmgPerSTR: 0.004, abPerSTR: 0.35, blockPerSTA: 0.35, abCap: 50,
};
function buildNew(co = C) {
  return ROSTER.map(([name, cls, arch]) => {
    const [a, g, s] = ARCH[arch].map(x => x * BUDGET[cls]);
    return {
      name, cls, str: a, agi: g, sta: s,
      hp: co.hpBase + s * co.hpPerSTA, atk: a * co.atkPerSTR, def: co.defBase + s * co.defPerSTA,
      spd: co.spdBase + g * co.spdPerAGI, hit: co.hitBase + g * co.hitPerAGI, flee: g * co.fleePerAGI,
      cri: Math.min(co.criCap, co.criBase + g * co.criPerAGI), criDmg: co.criDmgBase + a * co.criDmgPerSTR,
      ab: Math.min(co.abCap, a * co.abPerSTR), block: s * co.blockPerSTA,
    };
  });
}

const SIG = { B: { gain: 34, mult: 2.0 }, A: { gain: 25, mult: 2.8 }, S: { gain: 20, mult: 3.6 }, SS: { gain: 17, mult: 4.5 } };
const SK = { S: { p: 0.20, m: 1.6 }, M: { p: 0.15, m: 1.8 }, L: { p: 0.10, m: 2.2 } };
const SLOTS = ['L', 'M', 'S', 'S'];

function hit(att, def, mult, elem, K) {
  const chance = Math.max(0.5, Math.min(1, (att.hit - def.flee) / 100));
  if (Math.random() > chance) return 0; // miss
  const pierce = Math.max(0, att.ab - def.block) / 100; // share of DEF ignored
  const effDef = def.def * (1 - pierce);
  let d = att.atk * mult * (K / (K + effDef)) * elem * (0.95 + Math.random() * 0.1);
  if (Math.random() * 100 < att.cri) d *= att.criDmg;
  return d;
}
function act(a, b, elem, K) {
  const s = SIG[a.cls]; a.gauge += s.gain;
  if (a.gauge >= 100) { a.gauge -= 100; a.sig++; b.hp -= hit(a, b, s.mult, elem, K); return; }
  for (const sl of SLOTS) if (Math.random() < SK[sl].p) { b.hp -= hit(a, b, SK[sl].m, elem, K); return; }
  b.hp -= hit(a, b, 1, elem, K);
}
function fight(ha, hb, elemA, K) {
  const a = { ...ha, gauge: 0, sig: 0 }, b = { ...hb, gauge: 0, sig: 0 };
  const eB = elemA === 1.3 ? 0.85 : elemA === 0.85 ? 1.3 : 1;
  const af = a.spd === b.spd ? Math.random() < 0.5 : a.spd > b.spd;
  const order = af ? [[a, b, elemA], [b, a, eB]] : [[b, a, eB], [a, b, elemA]];
  let t = 0;
  for (; t < MAX_TURNS && a.hp > 0 && b.hp > 0; t++) for (const [x, y, e] of order) if (x.hp > 0 && y.hp > 0) act(x, y, e, K);
  return { w: b.hp <= 0 && a.hp > 0 ? 1 : (a.hp <= 0 && b.hp > 0 ? 0 : 0.5), t, sig: a.sig > 0 ? 1 : 0 };
}
function wr(ha, hb, elemA, K) { let w = 0, t = 0, s = 0; for (let i = 0; i < FIGHTS; i++) { const r = fight(ha, hb, elemA, K); w += r.w; t += r.t; s += r.sig; } return { wr: w / FIGHTS, t: t / FIGHTS, sig: s / FIGHTS }; }
const pct = x => (x * 100).toFixed(1).padStart(5) + '%';

function report(label, heroes, K) {
  console.log(`\n==================== ${label} ====================`);
  const M = {}; let tt = 0, n = 0;
  for (const a of heroes) for (const b of heroes) if (a !== b) { const r = wr(a, b, 1, K); M[a.name + '|' + b.name] = r.wr; tt += r.t; n++; }
  console.log('Avg fight length:', (tt / n).toFixed(1), 'turns');
  const avg = h => heroes.filter(x => x !== h).reduce((s, x) => s + M[h.name + '|' + x.name], 0) / 11;
  const cls = c => heroes.filter(h => h.cls === c);
  const clsWr = (c1, c2) => { let s = 0, k = 0; for (const a of cls(c1)) for (const b of cls(c2)) { s += M[a.name + '|' + b.name]; k++; } return s / k; };
  for (const c of ['B', 'A', 'S', 'SS']) {
    const v = cls(c).map(avg);
    console.log(`  ${c.padEnd(2)} ` + cls(c).map(h => `${h.name} ${pct(avg(h)).trim()}`).join(' | ') + `   spread(max-min)=${((Math.max(...v) - Math.min(...v)) * 100).toFixed(1)}pt`);
  }
  console.log(`Class gap (lower class wins, same element): B>A ${pct(clsWr('B', 'A'))}  A>S ${pct(clsWr('A', 'S'))}  S>SS ${pct(clsWr('S', 'SS'))}  B>SS ${pct(clsWr('B', 'SS'))}`);
  // intra-class matchups
  for (const c of ['B', 'A', 'S', 'SS']) {
    const l = cls(c), out = [];
    for (let i = 0; i < l.length; i++) for (let j = i + 1; j < l.length; j++) out.push(`${l[i].name}/${l[j].name} ${pct(M[l[i].name + '|' + l[j].name]).trim()}`);
    console.log(`  intra-${c}: ${out.join(' ; ')}`);
  }
  const sd = Math.sqrt(heroes.reduce((s, h) => s + (avg(h) - cls(h.cls).map(avg).reduce((p, q) => p + q, 0) / 3) ** 2, 0) / heroes.length);
  console.log(`Within-class stdev of hero win-rate: ${(sd * 100).toFixed(1)}pt  (lower = more even)`);
  const H = n => heroes.find(h => h.name === n);
  console.log('Cross-class with element advantage x1.3/x0.85 (lower class):');
  console.log('  ' + [['แมว', 'หมาป่า'], ['ควาย', 'เต่า'], ['เสือ', 'สิงโต'], ['หมาป่า', 'อินทรี'], ['อินทรี', 'พญานาค'], ['อินทรี', 'ฟีนิกซ์'], ['ควาย', 'พญานาค']].map(([a, b]) => `${a}>${b} ${pct(wr(H(a), H(b), 1.3, K).wr).trim()}`).join(' ; '));
  const sigs = ['มังกรฟ้า', 'พญานาค', 'ฟีนิกซ์'].map(n => wr(H(n), H('สิงโต'), 1, K).sig);
  console.log('SS signature used >=1x vs S:', sigs.map(pct).join(' / '));
}

if (process.argv[3] === 'tune') {
  const names = ['atkPerSTR','hpPerSTA','defPerSTA','spdPerAGI','criPerAGI','abPerSTR','blockPerSTA','fleePerAGI'];
  const step = { r: 1.13 };
  const sameIdx = ROSTER.map(r => r[1]);
  const cl = (hs, c) => hs.filter(h => h.cls === c);
  function loss(F) {
    BUDGET.A = 150 * step.r; BUDGET.S = 150 * step.r ** 2; BUDGET.SS = 150 * step.r ** 3;
    const hs = buildNew(); let L = 0;
    const saveF = FIGHTS_LOCAL = F;
    for (const c of ['B','A','S','SS']) { const l = cl(hs,c); for (let i=0;i<3;i++) for (let j=i+1;j<3;j++) L += (wrF(l[i],l[j],1,100,F)-0.5)**2; }
    const gap = (c1,c2) => { let s=0; for (const a of cl(hs,c1)) for (const b of cl(hs,c2)) s += wrF(a,b,1,100,F); return s/9; };
    L += 2*((gap('B','A')-0.25)**2 + (gap('A','S')-0.25)**2 + (gap('S','SS')-0.25)**2);
    return L;
  }
  var FIGHTS_LOCAL = 0;
  function wrF(a,b,e,K,F){ let w=0; for(let i=0;i<F;i++) w+=fight(a,b,e,K).w; return w/F; }
  let best = loss(600), iters = +process.argv[4] || 300;
  for (let it=0; it<iters; it++) {
    const snap = JSON.stringify({C, ARCH, r: step.r});
    const k = Math.random();
    if (k < 0.5) { const n = names[Math.floor(Math.random()*names.length)]; C[n] *= 0.9 + Math.random()*0.2; }
    else if (k < 0.9) { const a = Object.keys(ARCH)[Math.floor(Math.random()*7)]; const v = ARCH[a].map(x => Math.max(0.12, x + (Math.random()-0.5)*0.06)); const t = v.reduce((p,q)=>p+q,0); ARCH[a] = v.map(x=>x/t); }
    else { step.r = Math.min(1.25, Math.max(1.05, step.r + (Math.random()-0.5)*0.03)); }
    const L = loss(600);
    if (L < best) { best = L; } else { const o = JSON.parse(snap); Object.assign(C, o.C); for (const a in o.ARCH) ARCH[a]=o.ARCH[a]; step.r = o.r; }
    if (it % 50 === 0) console.log('iter', it, 'loss', best.toFixed(4));
  }
  console.log('TUNED C =', JSON.stringify(C, (k,v)=>typeof v==='number'?+v.toFixed(3):v));
  console.log('TUNED ARCH =', JSON.stringify(ARCH, (k,v)=>typeof v==='number'?+v.toFixed(3):v));
  console.log('TUNED class step ratio r =', step.r.toFixed(3), 'budgets B/A/S/SS =', [150, 150*step.r, 150*step.r**2, 150*step.r**3].map(x=>x.toFixed(0)).join('/'));
  BUDGET.A = 150*step.r; BUDGET.S = 150*step.r**2; BUDGET.SS = 150*step.r**3;
  const T = buildNew();
  console.log('\nTUNED hero stats:');
  for (const h of T) console.log(`  ${h.cls.padEnd(2)} ${h.name.padEnd(8)} STR ${h.str.toFixed(0)} AGI ${h.agi.toFixed(0)} STA ${h.sta.toFixed(0)} | HP ${h.hp.toFixed(0)} ATK ${h.atk.toFixed(0)} DEF ${h.def.toFixed(0)} SPD ${h.spd.toFixed(0)} HIT ${h.hit.toFixed(0)} FLEE ${h.flee.toFixed(0)} CRI ${h.cri.toFixed(1)}% CRIDMG ${(h.criDmg*100).toFixed(0)}% AB ${h.ab.toFixed(0)}% BLK ${h.block.toFixed(0)}%`);
  report('TUNED STR/AGI/STA (K=100)', T, 100);
} else {
report('OLD stats (K=100)', OLD, 100);
const NEW = buildNew();
report('NEW STR/AGI/STA (K=100)', NEW, 100);
}
