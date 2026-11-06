// v3: uses TUNED stat table from v2. Tests element multiplier (1.3/0.85 vs 1.2/0.9) and SS gauge (start 50 + gain on hit).
// Usage: node balance_sim_v3.js [fights=4000]. Does not modify docs.
const FIGHTS = +process.argv[2] || 4000;
const MAX_TURNS = 60, K = 100;
const C = { atkPerSTR: 2.805, hpBase: 200, hpPerSTA: 14.179, defBase: 10, defPerSTA: 0.721, spdBase: 70, spdPerAGI: 0.788, hitBase: 100, hitPerAGI: 0.2, fleePerAGI: 0.441, criBase: 5, criPerAGI: 0.159, criCap: 40, criDmgBase: 1.4, criDmgPerSTR: 0.004, abPerSTR: 0.31, blockPerSTA: 0.38, abCap: 50 };
const ARCH = { ATK: [0.464, 0.302, 0.234], SPD: [0.318, 0.378, 0.304], DEF: [0.242, 0.267, 0.491], BAL: [0.36, 0.32, 0.32], DRAGON: [0.378, 0.354, 0.268], NAGA: [0.234, 0.213, 0.553], PHOENIX: [0.498, 0.209, 0.293] };
const BUDGET = { B: 150, A: 160, S: 171, SS: 182 };
const ROSTER = [['ไก่', 'B', 'ATK'], ['แมว', 'B', 'SPD'], ['ควาย', 'B', 'DEF'], ['หมาป่า', 'A', 'SPD'], ['เต่า', 'A', 'DEF'], ['เสือ', 'A', 'ATK'], ['อินทรี', 'S', 'SPD'], ['แรด', 'S', 'DEF'], ['สิงโต', 'S', 'BAL'], ['มังกรฟ้า', 'SS', 'DRAGON'], ['พญานาค', 'SS', 'NAGA'], ['ฟีนิกซ์', 'SS', 'PHOENIX']];
const HEROES = ROSTER.map(([name, cls, arch]) => {
  const [a, g, s] = ARCH[arch].map(x => x * BUDGET[cls]);
  return { name, cls, hp: C.hpBase + s * C.hpPerSTA, atk: a * C.atkPerSTR, def: C.defBase + s * C.defPerSTA, spd: C.spdBase + g * C.spdPerAGI, hit: C.hitBase + g * C.hitPerAGI, flee: g * C.fleePerAGI, cri: Math.min(C.criCap, C.criBase + g * C.criPerAGI), criDmg: C.criDmgBase + a * C.criDmgPerSTR, ab: Math.min(C.abCap, a * C.abPerSTR), block: s * C.blockPerSTA };
});
const SIG = { B: { gain: 34, mult: 2.0 }, A: { gain: 25, mult: 2.8 }, S: { gain: 20, mult: 3.6 }, SS: { gain: 17, mult: 4.5 } };
const SK = { S: { p: 0.20, m: 1.6 }, M: { p: 0.15, m: 1.8 }, L: { p: 0.10, m: 2.2 } };
const SLOTS = ['L', 'M', 'S', 'S'];

function hit(att, def, mult, elem, K) {
  if (Math.random() > Math.max(0.5, Math.min(1, (att.hit - def.flee) / 100))) return 0;
  const effDef = def.def * (1 - Math.max(0, att.ab - def.block) / 100);
  let d = att.atk * mult * (K / (K + effDef)) * elem * (0.95 + Math.random() * 0.1);
  if (Math.random() * 100 < att.cri) d *= att.criDmg;
  return d;
}
function act(a, b, elem, cfg) {
  a.gauge += SIG[a.cls].gain;
  if (a.gauge >= 100) { a.gauge -= 100; a.sig++; dmg(a, b, SIG[a.cls].mult, elem, cfg); return; }
  for (const sl of SLOTS) if (Math.random() < SK[sl].p) { dmg(a, b, SK[sl].m, elem, cfg); return; }
  dmg(a, b, 1, elem, cfg);
}
function dmg(a, b, m, e, cfg) { const d = hit(a, b, m, e, K); b.hp -= d; if (d > 0 && b.cls === 'SS') b.gauge += cfg.ssOnHit; }
function fight(ha, hb, mode, cfg) { // mode: 1 = A has element advantage, 0 = neutral
  const a = { ...ha, gauge: ha.cls === 'SS' ? cfg.ssStart : 0, sig: 0 }, b = { ...hb, gauge: hb.cls === 'SS' ? cfg.ssStart : 0, sig: 0 };
  const eA = mode ? cfg.adv : 1, eB = mode ? cfg.dis : 1;
  const af = a.spd === b.spd ? Math.random() < 0.5 : a.spd > b.spd;
  const order = af ? [[a, b, eA], [b, a, eB]] : [[b, a, eB], [a, b, eA]];
  let t = 0;
  for (; t < MAX_TURNS && a.hp > 0 && b.hp > 0; t++) for (const [x, y, e] of order) if (x.hp > 0 && y.hp > 0) act(x, y, e, cfg);
  return { w: b.hp <= 0 && a.hp > 0 ? 1 : (a.hp <= 0 && b.hp > 0 ? 0 : 0.5), t, sa: a.sig > 0 ? 1 : 0 };
}
function wr(ha, hb, mode, cfg) { let w = 0, t = 0, s = 0; for (let i = 0; i < FIGHTS; i++) { const r = fight(ha, hb, mode, cfg); w += r.w; t += r.t; s += r.sa; } return { wr: w / FIGHTS, t: t / FIGHTS, sig: s / FIGHTS }; }
const pct = x => (x * 100).toFixed(1).padStart(5) + '%';
const H = n => HEROES.find(h => h.name === n);
const cls = c => HEROES.filter(h => h.cls === c);

function report(label, cfg) {
  console.log(`\n==================== ${label} ====================`);
  const M = {}; let tt = 0, n = 0;
  for (const a of HEROES) for (const b of HEROES) if (a !== b) { const r = wr(a, b, 0, cfg); M[a.name + '|' + b.name] = r.wr; tt += r.t; n++; }
  const avg = h => HEROES.filter(x => x !== h).reduce((s, x) => s + M[h.name + '|' + x.name], 0) / 11;
  console.log('Avg fight length:', (tt / n).toFixed(1), 'turns');
  for (const c of ['B', 'A', 'S', 'SS']) { const v = cls(c).map(avg); console.log(`  ${c.padEnd(2)} ` + cls(c).map(h => `${h.name} ${pct(avg(h)).trim()}`).join(' | ') + `   spread=${((Math.max(...v) - Math.min(...v)) * 100).toFixed(1)}pt`); }
  const g = (c1, c2) => { let s = 0; for (const a of cls(c1)) for (const b of cls(c2)) s += M[a.name + '|' + b.name]; return s / 9; };
  console.log(`Class gap (lower wins, neutral element): B>A ${pct(g('B', 'A'))} A>S ${pct(g('A', 'S'))} S>SS ${pct(g('S', 'SS'))} B>SS ${pct(g('B', 'SS'))}`);
  const ss = cls('SS'); console.log('  intra-SS: ' + [[0, 1], [0, 2], [1, 2]].map(([i, j]) => `${ss[i].name}/${ss[j].name} ${pct(M[ss[i].name + '|' + ss[j].name]).trim()}`).join(' ; '));
  console.log('Element advantage (lower class holds advantage):');
  console.log('  ' + [['แมว', 'หมาป่า'], ['ควาย', 'เต่า'], ['เสือ', 'สิงโต'], ['หมาป่า', 'อินทรี'], ['อินทรี', 'พญานาค'], ['อินทรี', 'ฟีนิกซ์'], ['ควาย', 'พญานาค']].map(([a, b]) => `${a}>${b} ${pct(wr(H(a), H(b), 1, cfg).wr).trim()}`).join(' ; '));
  // Element swing: same-class avg win rate for advantaged side
  let sw = 0, k = 0; for (const c of ['B', 'A', 'S', 'SS']) { const l = cls(c); for (const a of l) for (const b of l) if (a !== b) { sw += wr(a, b, 1, cfg).wr; k++; } }
  console.log(`Same-class win-rate with element advantage: ${pct(sw / k)}  (50% = element irrelevant, higher = element dominates)`);
  const sg = ss.map(h => wr(h, H('สิงโต'), 0, cfg).sig);
  console.log('SS signature used >=1x vs S:', sg.map(pct).join(' / '));
}
const BASE = { adv: 1.3, dis: 0.85, ssStart: 0, ssOnHit: 0 };
report('A) tuned table, element x1.3/0.85, SS gauge unchanged', BASE);
report('B) element x1.2/0.9, SS gauge unchanged', { ...BASE, adv: 1.2, dis: 0.9 });
report('C) element x1.3/0.85, SS gauge start50 + 6/hit taken', { ...BASE, ssStart: 50, ssOnHit: 6 });
report('D) element x1.2/0.9 + SS gauge start50 + 6/hit (combined)', { adv: 1.2, dis: 0.9, ssStart: 50, ssOnHit: 6 });

