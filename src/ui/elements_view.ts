/**
 * Elements Chart & Advantage Guide View (Phase 2 - Element Synergy & Interactions)
 * หน้าจอแสดงข้อมูลตารางธาตุ ความได้เปรียบเสียเปรียบ กฎตัวคูณดาเมจ และระบบธาตุครบทั้ง 11 ธาตุ
 */

import { getAllElements, getAllHeroes } from '../engine/combat';

export type ElementItem = ReturnType<typeof getAllElements>[number];
export type HeroItem = ReturnType<typeof getAllHeroes>[number];

const ALL_ELEMENTS = getAllElements();
const ALL_HEROES = getAllHeroes();
const ELEMENT_MAP = new Map(ALL_ELEMENTS.map(e => [e.id, e]));

export interface ElementMatchupResult {
  attMultiplier: number;
  defMultiplier: number;
  relation: 'advantage' | 'disadvantage' | 'neutral' | 'same';
  summary: string;
  tip: string;
}

/**
 * คำนวณความสัมพันธ์ทางธาตุระหว่าง 2 ธาตุ
 */
export function getElementMatchup(attElemId: string, defElemId: string): ElementMatchupResult {
  if (attElemId === 'neutral' || defElemId === 'neutral') {
    return {
      attMultiplier: 1.0,
      defMultiplier: 1.0,
      relation: 'neutral',
      summary: 'สมดุลไร้ธาตุ (ไม่ได้รับผลแพ้ชนะทางธาตุ)',
      tip: 'สายวิชาไร้ธาตุสร้างความเสียหายคงที่ 1.0x เหมาะสำหรับรับมือศัตรูทุกรูปแบบ'
    };
  }

  if (attElemId === defElemId) {
    return {
      attMultiplier: 1.0,
      defMultiplier: 1.0,
      relation: 'same',
      summary: 'ธาตุเดียวกัน (ความเสียหายปกติ 1.0x ทั้งสองฝ่าย)',
      tip: 'การต่อสู้ด้วยธาตุเดียวกัน วัดกันที่ค่าสเตตัส สกิล และจังหวะออกท่าไม้ตาย'
    };
  }

  const attElem = ELEMENT_MAP.get(attElemId);
  const defElem = ELEMENT_MAP.get(defElemId);

  if (!attElem || !defElem) {
    return {
      attMultiplier: 1.0,
      defMultiplier: 1.0,
      relation: 'neutral',
      summary: 'ไม่พบข้อมูลธาตุ',
      tip: ''
    };
  }

  const attIsStrong = attElem.strongAgainst.includes(defElemId);
  const defIsStrong = defElem.strongAgainst.includes(attElemId);

  if (attIsStrong) {
    return {
      attMultiplier: 1.30,
      defMultiplier: 0.85,
      relation: 'advantage',
      summary: `🟢 ฝ่ายเราได้เปรียบธาตุ [${attElem.icon} ${attElem.name} ชนะ ${defElem.icon} ${defElem.name}]`,
      tip: 'สร้างความเสียหาย ×1.30 (+30%) และรับความเสียหายเพียง ×0.85 (-15%) เหมาะเป็นตัวหลัก!'
    };
  }

  if (defIsStrong) {
    return {
      attMultiplier: 0.85,
      defMultiplier: 1.30,
      relation: 'disadvantage',
      summary: `🔴 ฝ่ายเราเสียเปรียบธาตุ [${attElem.icon} ${attElem.name} แพ้ ${defElem.icon} ${defElem.name}]`,
      tip: 'สร้างความเสียหายลดลงเหลือ ×0.85 (-15%) และรับดาเมจแรงขึ้น ×1.30 แนะนำสลับตัวสำรอง (Tag Relay) ทันที!'
    };
  }

  return {
    attMultiplier: 1.0,
    defMultiplier: 1.0,
    relation: 'neutral',
    summary: `⚪ ธาตุสมดุล [${attElem.icon} ${attElem.name} สมดุลกับ ${defElem.icon} ${defElem.name}]`,
    tip: 'ไม่มีความได้เปรียบเสียเปรียบ ความเสียหาย ×1.00 ทั้งสองฝ่าย'
  };
}

/**
 * ดึงคำแนะนำกลยุทธ์ประจำธาตุ
 */
function getElementStrategyTip(elementId: string): string {
  switch (elementId) {
    case 'fire':
      return '🔥 ธาตุไฟ: เน้นระเบิดดาเมจกายภาพ/เวทหนัก (Burst Damage) และติดสถานะเผาไหม้ (Burn DoT) รีดเลือดศัตรูต่อเนื่อง';
    case 'water':
      return '💧 ธาตุน้ำ: เชี่ยวชาญการฟื้นฟู HP (Regen), สกิลสนับสนุน, บัฟหลบหลีก (FLEE) และสร้างเกราะคุ้มกัน';
    case 'wind':
      return '🌪️ ธาตุลม: เน้นความเร็ว SPD สูงสุด ออกแอ็กชันก่อนคู่ต่อสู้ มีอัตราคริติคอลสูง และสกิลทะลวงการหลบหลีก';
    case 'earth':
      return '🪨 ธาตุดิน: ปราการเหล็กทนทานสูง DEF และ Block แน่นหนา มีสกิลยั่วยุ (Taunt) และสร้างความเสียหายสะท้อนกลับ';
    case 'lightning':
      return '⚡ ธาตุสายฟ้า: ความเร็วและพลังเจาะเกราะสูง มีโอกาสทำให้คู่ต่อสู้ติดสถานะอัมพาต/สตัน (Stun) ขัดจังหวะเทิร์น';
    case 'ice':
      return '❄️ ธาตุน้ำแข็ง: สายควบคุมและแช่แข็ง (Freeze/Slow) ชะลอความเร็วคู่ต่อสู้ และสร้างเกราะน้ำแข็งปกป้องตัวเอง';
    case 'plant':
      return '🌿 ธาตุพืช: กักขัง ตรึงการเคลื่อนไหว (Root) ดูดซับ HP ศัตรูมาฟื้นฟูตนเอง และปั่นป่วนด้วยสปอร์';
    case 'poison':
      return '☠️ ธาตุพิษ: กัดกร่อน HP ศัตรูด้วยสถานะพิษร้ายแรง (Poison DoT), ลดเกราะ DEF และลดค่าความแม่นยำ';
    case 'dark':
      return '🌑 ธาตุมืด: สังหารฉับพลันในเงามืด ดูดกลืนเกจ SP/Ultimate ของคู่ต่อสู้ และสร้างม่านเงาหลบการโจมตี';
    case 'light':
      return '✨ ธาตุแสง: ชำระล้างสถานะผิดปกติ (Purify), เพิ่มพลังโจมตีศักดิ์สิทธิ์ และตาบอด (Blind) ขัดขวางศัตรู';
    case 'psychic':
      return '🔮 ธาตุพลังจิต: ควบคุมจิตใจ ทำให้ศัตรูสับสน (Confusion) โจมตีกันเอง และสร้างคลื่นพลังจิตไร้รูป';
    default:
      return '⚪ สายวิชาไร้ธาตุ: สร้างความเสียหายสมดุล ไม่สนการแพ้ทางธาตุ เหมาะสำหรับสร้างคอมโบเสริมจุดอ่อน';
  }
}

/**
 * เรนเดอร์ HTML หน้าจอข้อมูลตารางธาตุ
 */
export function renderElementsViewHtml(selectedElemId = 'fire'): string {
  const activeElem = ELEMENT_MAP.get(selectedElemId) || ALL_ELEMENTS[0];
  const strongAgainstList = activeElem.strongAgainst.map(id => ELEMENT_MAP.get(id)!).filter(Boolean);
  const weakAgainstList = activeElem.weakAgainst.map(id => ELEMENT_MAP.get(id)!).filter(Boolean);
  const neutralList = ALL_ELEMENTS.filter(e => e.id !== activeElem.id && !activeElem.strongAgainst.includes(e.id) && !activeElem.weakAgainst.includes(e.id));
  const sampleHeroes = ALL_HEROES.filter(h => h.element === activeElem.id).slice(0, 6);

  return `
    <div class="elements-view-container">
      <!-- Top Title & Overview Banner -->
      <div class="elem-top-banner">
        <div class="elem-title-group">
          <h2>☯️ ข้อมูลตารางธาตุ & กลยุทธ์การแพ้ชนะ (Elemental Guide)</h2>
          <p class="elem-subtitle">
            ศึกษาความสัมพันธ์ของทั้ง 11 ธาตุ ตัวคูณความเสียหาย และระบบสกิลเพื่อชิงความได้เปรียบในสมรภูมิ
          </p>
        </div>
        <div class="elem-badge-counter">
          <span>🌟 11 ธาตุธรรมชาติ</span> • <span>5 สายวิชาไร้ธาตุ</span>
        </div>
      </div>

      <!-- Core Multipliers Overview Cards -->
      <div class="elem-rules-overview">
        <div class="rule-card advantage">
          <div class="rule-icon-circle">🟢</div>
          <div class="rule-content">
            <div class="rule-val">×1.30 <small>(+30%)</small></div>
            <div class="rule-title">ชนะธาตุ (Advantage)</div>
            <p class="rule-desc">เมื่อโจมตีใส่ธาตุที่ตนเองได้เปรียบ สร้างดาเมจแรงขึ้น 30% และรับดาเมจลดลงเหลือ ×0.85</p>
          </div>
        </div>

        <div class="rule-card disadvantage">
          <div class="rule-icon-circle">🔴</div>
          <div class="rule-content">
            <div class="rule-val">×0.85 <small>(-15%)</small></div>
            <div class="rule-title">เสียเปรียบธาตุ (Disadvantage)</div>
            <p class="rule-desc">เมื่อโจมตีใส่ธาตุที่แพ้ทาง ดาเมจลดลง 15% และรับดาเมจแรงขึ้น ×1.30 (แนะนำสลับตัวสำรอง)</p>
          </div>
        </div>

        <div class="rule-card same-affinity">
          <div class="rule-icon-circle">🌟</div>
          <div class="rule-content">
            <div class="rule-val">+20% <small>DMG & Proc</small></div>
            <div class="rule-title">โบนัสสกิลตรงธาตุ (Affinity)</div>
            <p class="rule-desc">ติดตั้งสกิลที่มีธาตุตรงกับสัตว์เลี้ยง เพิ่มดาเมจสกิล +20% และเพิ่มโอกาสออกท่า ×1.20</p>
          </div>
        </div>

        <div class="rule-card neutral-art">
          <div class="rule-icon-circle">🥋</div>
          <div class="rule-content">
            <div class="rule-val">×1.00 <small>ทุกธาตุ</small></div>
            <div class="rule-title">สายวิชาไร้ธาตุ (Neutral Arts)</div>
            <p class="rule-desc">5 สายวิชาไม่ได้รับผลกระทบจากความเสียเปรียบธาตุ เหมาะสำหรับอุดจุดอ่อนตัวละคร</p>
          </div>
        </div>
      </div>

      <!-- Interactive 1v1 Matchup Calculator -->
      <section class="elem-calculator-card">
        <div class="section-title-row">
          <h4>🎯 เครื่องมือจำลองเปรียบเทียบธาตุ 1v1 (Interactive Matchup Simulator)</h4>
          <span class="section-hint">เลือกธาตุฝ่ายเราและธาตุคู่ต่อสู้เพื่อดูผลลัพธ์ทันที</span>
        </div>

        <div class="calc-interface-row">
          <!-- Attacker (Us) -->
          <div class="calc-side-box">
            <span class="side-tag attacker">🐾 ธาตุฝ่ายเรา (My Hero):</span>
            <select class="elem-calc-select" id="calc-select-att">
              ${ALL_ELEMENTS.map(e => `
                <option value="${e.id}" ${e.id === activeElem.id ? 'selected' : ''}>
                  ${e.icon} ธาตุ${e.name} (${e.id})
                </option>
              `).join('')}
              <option value="neutral">⚪ ไร้ธาตุ (Neutral Arts)</option>
            </select>
          </div>

          <div class="calc-vs-badge">VS</div>

          <!-- Defender (Opponent) -->
          <div class="calc-side-box">
            <span class="side-tag defender">👾 ธาตุคู่ต่อสู้ (Opponent):</span>
            <select class="elem-calc-select" id="calc-select-def">
              ${ALL_ELEMENTS.map(e => {
                const isSelected = activeElem.strongAgainst.includes(e.id);
                return `
                  <option value="${e.id}" ${isSelected ? 'selected' : ''}>
                    ${e.icon} ธาตุ${e.name} (${e.id})
                  </option>
                `;
              }).join('')}
              <option value="neutral">⚪ ไร้ธาตุ (Neutral Arts)</option>
            </select>
          </div>
        </div>

        <!-- Realtime Result Display -->
        <div class="calc-result-box" id="calc-matchup-result">
          <!-- Populated by JS -->
        </div>
      </section>

      <!-- 11x11 Elemental Matchup Matrix Table -->
      <section class="elem-matrix-card">
        <div class="section-title-row">
          <h4>📊 ตารางความสัมพันธ์ธาตุ 11×11 (Full Elemental Matrix)</h4>
          <span class="section-hint">แถวแนวนอน = ผู้โจมตี ⚔️ | คอลัมน์แนวตั้ง = ผู้ป้องกัน 🛡️</span>
        </div>

        <div class="matrix-table-wrap">
          <table class="matrix-table" id="matrix-interactive-table">
            <thead>
              <tr>
                <th class="matrix-corner-th">โจมตี ➔<br>ป้องกัน ⬇️</th>
                ${ALL_ELEMENTS.map(e => `
                  <th class="matrix-def-th" data-elem-id="${e.id}" title="ผู้ป้องกัน: ${e.name}">
                    <span class="m-th-icon">${e.icon}</span>
                    <span class="m-th-name">${e.name}</span>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              ${ALL_ELEMENTS.map(att => `
                <tr class="matrix-row ${att.id === activeElem.id ? 'active-row' : ''}" data-att-id="${att.id}">
                  <th class="matrix-att-th" data-elem-id="${att.id}" style="border-left: 3px solid ${att.color};" title="คลิกเพื่อเจาะลึกธาตุ [${att.name}]">
                    <span class="m-th-icon">${att.icon}</span>
                    <span class="m-th-name">${att.name}</span>
                  </th>
                  ${ALL_ELEMENTS.map(def => {
                    const matchup = getElementMatchup(att.id, def.id);
                    let cellClass = 'cell-neutral';
                    let cellText = '1.0';

                    if (matchup.relation === 'advantage') {
                      cellClass = 'cell-adv';
                      cellText = '🟢 ×1.3';
                    } else if (matchup.relation === 'disadvantage') {
                      cellClass = 'cell-disadv';
                      cellText = '🔴 ×0.85';
                    } else if (matchup.relation === 'same') {
                      cellClass = 'cell-same';
                      cellText = '⚪ 1.0';
                    }

                    return `
                      <td 
                        class="matrix-cell ${cellClass}" 
                        data-att="${att.id}" 
                        data-def="${def.id}"
                        title="[${att.icon} ${att.name}] โจมตี [${def.icon} ${def.name}]: ${matchup.summary}"
                      >
                        ${cellText}
                      </td>
                    `;
                  }).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div class="matrix-legend">
          <span><span class="legend-dot green"></span> 🟢 ชนะธาตุ (ดาเมจ ×1.30)</span>
          <span><span class="legend-dot red"></span> 🔴 แพ้ธาตุ (ดาเมจ ×0.85)</span>
          <span><span class="legend-dot gray"></span> ⚪ สมดุล/ธาตุเดียวกัน (ดาเมจ ×1.00)</span>
        </div>
      </section>

      <!-- 11 Elements Deep Dive Explorer -->
      <section class="elem-explorer-card">
        <div class="section-title-row">
          <h4>🔍 เจาะลึกธาตุประจำตัว (Element Inspector)</h4>
          <span class="section-hint">คลิกเลือกธาตุเพื่อดูรายละเอียดและสัตว์เลี้ยงในสังกัด</span>
        </div>

        <!-- Horizontal Element Filter Chips -->
        <div class="elem-chips-bar">
          ${ALL_ELEMENTS.map(e => `
            <button 
              class="elem-filter-chip ${e.id === activeElem.id ? 'active' : ''}" 
              data-elem-id="${e.id}"
              style="--chip-color: ${e.color};"
            >
              <span class="chip-elem-icon">${e.icon}</span>
              <span class="chip-elem-name">${e.name}</span>
            </button>
          `).join('')}
        </div>

        <!-- Selected Element Inspector Panel -->
        <div class="elem-inspector-panel" id="elem-inspector-details">
          ${renderElementDetailCardHtml(activeElem, strongAgainstList, weakAgainstList, neutralList, sampleHeroes)}
        </div>
      </section>

      <!-- 5 Neutral Arts Guide -->
      <section class="neutral-arts-card">
        <div class="section-title-row">
          <h4>🥋 สายวิชาไร้ธาตุทั้ง 5 (5 Neutral Arts - Non-Elemental Synergy)</h4>
          <span class="section-hint">วิชาที่เป็นกลาง ไม่ถูกลดทอนพลังจากธาตุใดๆ ในเกม</span>
        </div>

        <div class="neutral-branches-grid">
          <div class="neutral-branch-box martial">
            <div class="n-branch-header">
              <span class="n-icon">🥋</span>
              <strong>สายกระบวนท่า (Martial Arts)</strong>
            </div>
            <p class="n-desc">การโจมตีกายภาพไร้ธาตุอันหนักหน่วง สร้างดาเมจตรง พร้อมโอกาสทำให้ศัตรูติดสถานะผิดปกติ เช่น ตาบอด (Blind), เลือดไหล (Bleed)</p>
          </div>

          <div class="neutral-branch-box medical">
            <div class="n-branch-header">
              <span class="n-icon">💚</span>
              <strong>สายพยาบาล (Medical Arts)</strong>
            </div>
            <p class="n-desc">วิชาแพทย์ ฟื้นฟู HP ให้ตนเองและทีม ชำระล้างดีบัฟ/สถานะผิดปกติ และฟื้นฟูแต้ม SP อย่างต่อเนื่อง</p>
          </div>

          <div class="neutral-branch-box trick">
            <div class="n-branch-header">
              <span class="n-icon">🎭</span>
              <strong>สายเล่ห์กล (Trick Arts)</strong>
            </div>
            <p class="n-desc">กลยุทธ์ปั่นป่วน ตัดแต้ม SP ศัตรู ลดค่าความเร็ว SPD และหลอกล่อให้เป้าหมายสูญเสียสมาธิการออกท่า</p>
          </div>

          <div class="neutral-branch-box catalyst">
            <div class="n-branch-header">
              <span class="n-icon">⚡</span>
              <strong>สายเร่งปฏิกิริยา (Catalyst Arts)</strong>
            </div>
            <p class="n-desc">วิชาเร่งเร้าพลังชีวิต เร่งเกจท่าไม้ตาย (Ultimate Gauge) เติมบัฟพลังโจมตี ATK และคริติคอลให้พุ่งทะยาน</p>
          </div>

          <div class="neutral-branch-box secret">
            <div class="n-branch-header">
              <span class="n-icon">📜</span>
              <strong>สายวิชาลับ (Secret Arts)</strong>
            </div>
            <p class="n-desc">เคล็ดวิชาโบราณ กลไกสะท้อนดาเมจ โต้กลับ (Counter-Attack) และแยกร่างเงามายาหลบหลีกการโจมตี</p>
          </div>

          <div class="neutral-branch-box defense">
            <div class="n-branch-header">
              <span class="n-icon">🛡️</span>
              <strong>สายวิชาป้องกัน (Defense Arts)</strong>
            </div>
            <p class="n-desc">เคล็ดลับวิชาป้องกันความเสียหาย กางเกราะระฆังทอง สลายพลังธาตุ เปลี่ยน DEF เป็นพลังโจมตี และตั้งค่ายกลปราการเหล็กคุ้มกันทั้งทีม</p>
          </div>
        </div>
      </section>
    </div>
  `;
}

/**
 * เรนเดอร์การ์ดรายละเอียดของธาตุที่กำลังตรวจสอบ
 */
function renderElementDetailCardHtml(
  elem: ElementItem,
  strongList: ElementItem[],
  weakList: ElementItem[],
  neutralList: ElementItem[],
  heroes: HeroItem[]
): string {
  const strategyTip = getElementStrategyTip(elem.id);

  return `
    <div class="inspector-card-layout">
      <!-- Left: Element Identity & Matchups -->
      <div class="inspector-left">
        <div class="elem-badge-header" style="border-color:${elem.color};">
          <div class="elem-icon-circle" style="background:${elem.color}22; border-color:${elem.color};">
            ${elem.icon}
          </div>
          <div>
            <div class="elem-header-title">
              <h3 style="color:#fff;">ธาตุ${elem.name}</h3>
              <span class="elem-id-tag">(${elem.id.toUpperCase()})</span>
            </div>
            <div class="elem-stats-tags">
              <span>ชนะ ${strongList.length} ธาตุ</span> • <span>แพ้ ${weakList.length} ธาตุ</span>
            </div>
          </div>
        </div>

        <div class="matchup-breakdown-box">
          <!-- Strong Against -->
          <div class="breakdown-group strong">
            <div class="group-title">
              <span class="title-icon">⚔️</span>
              <strong>ได้เปรียบธาตุ (สร้างดาเมจ ×1.30 • รับดาเมจ ×0.85):</strong>
            </div>
            <div class="relation-chips-row">
              ${strongList.map(s => `
                <div class="rel-chip strong" style="border-color:${s.color};">
                  <span>${s.icon} ${s.name}</span>
                  <small>+30% DMG</small>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Weak Against -->
          <div class="breakdown-group weak">
            <div class="group-title">
              <span class="title-icon">🛡️</span>
              <strong>เสียเปรียบธาตุ (สร้างดาเมจ ×0.85 • รับดาเมจ ×1.30):</strong>
            </div>
            <div class="relation-chips-row">
              ${weakList.map(w => `
                <div class="rel-chip weak" style="border-color:${w.color};">
                  <span>${w.icon} ${w.name}</span>
                  <small>-15% DMG</small>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Neutral -->
          <div class="breakdown-group neutral">
            <div class="group-title">
              <span class="title-icon">⚖️</span>
              <strong>สมดุลธาตุ (ดาเมจปกติ ×1.00):</strong>
            </div>
            <div class="relation-chips-row">
              ${neutralList.map(n => `
                <div class="rel-chip neutral">
                  <span>${n.icon} ${n.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Strategy Tip -->
        <div class="elem-strategy-box">
          <div class="strat-header">💡 แนวทางการเล่น & กลยุทธ์การจัดทีม:</div>
          <p class="strat-text">${strategyTip}</p>
        </div>
      </div>

      <!-- Right: Sample Heroes Roster -->
      <div class="inspector-right">
        <div class="roster-header-row">
          <h5>🐾 ตัวอย่างสัตว์เลี้ยงสังกัดธาตุ${elem.name} (${heroes.length} ตัวเด่น):</h5>
        </div>

        <div class="sample-heroes-grid">
          ${heroes.map(h => `
            <div class="sample-hero-card" style="border-color:${elem.color}55;">
              <div class="s-hero-avatar-wrap" style="border-color:${elem.color};">
                <span class="s-hero-icon">${elem.icon}</span>
                <span class="s-hero-rarity rarity-${h.rarity}">${h.rarity}</span>
              </div>
              <div class="s-hero-info">
                <strong class="s-hero-name">${h.name}</strong>
                <div class="s-hero-meta">
                  <span class="s-hero-role">${h.role}</span>
                </div>
                <div class="s-hero-sig" title="ท่าไม้ตาย: ${h.signatureName}">
                  ⚡ ${h.signatureName}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * ผูก Event Listeners สำหรับหน้าตารางธาตุ
 */
export function bindElementsViewEvents(
  container: HTMLElement,
  onElementSelected?: (elemId: string) => void
) {
  const attSelect = container.querySelector('#calc-select-att') as HTMLSelectElement | null;
  const defSelect = container.querySelector('#calc-select-def') as HTMLSelectElement | null;
  const calcResultBox = container.querySelector('#calc-matchup-result') as HTMLElement | null;

  // ฟังก์ชันอัปเดตผลลัพธ์ Matchup Calculator
  const updateCalculator = () => {
    if (!attSelect || !defSelect || !calcResultBox) return;
    const attId = attSelect.value;
    const defId = defSelect.value;
    const res = getElementMatchup(attId, defId);

    const attElem = ELEMENT_MAP.get(attId);
    const defElem = ELEMENT_MAP.get(defId);
    const attIcon = attElem?.icon || (attId === 'neutral' ? '⚪' : '🐾');
    const attName = attElem?.name || (attId === 'neutral' ? 'ไร้ธาตุ' : attId);
    const defIcon = defElem?.icon || (defId === 'neutral' ? '⚪' : '👾');
    const defName = defElem?.name || (defId === 'neutral' ? 'ไร้ธาตุ' : defId);

    calcResultBox.className = `calc-result-box ${res.relation}`;
    calcResultBox.innerHTML = `
      <div class="res-summary-row">
        <div class="res-badge ${res.relation}">
          ${res.relation === 'advantage' ? '🟢 ได้เปรียบธาตุ (Advantage)' :
            res.relation === 'disadvantage' ? '🔴 เสียเปรียบธาตุ (Disadvantage)' :
            res.relation === 'same' ? '⚪ ธาตุเดียวกัน (Same Element)' : '⚖️ สมดุลธาตุ (Neutral)'}
        </div>
        <div class="res-mult-tags">
          <span class="tag-att">ดาเมจที่เราทำ: <strong>×${res.attMultiplier.toFixed(2)}</strong></span>
          <span class="tag-def">ดาเมจที่ศัตรูทำ: <strong>×${res.defMultiplier.toFixed(2)}</strong></span>
        </div>
      </div>
      <div class="res-desc-text">
        [${attIcon} ${attName}] vs [${defIcon} ${defName}] ➔ ${res.summary}
      </div>
      <div class="res-tip-text">
        💡 <strong>คำแนะนำยุทธวิธี:</strong> ${res.tip}
      </div>
    `;
  };

  // เรียกครั้งแรก
  updateCalculator();

  attSelect?.addEventListener('change', updateCalculator);
  defSelect?.addEventListener('change', updateCalculator);

  // คลิกชิปเลือกธาตุใน Inspector Bar
  container.querySelectorAll('.elem-filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const elemId = (chip as HTMLElement).dataset.elemId;
      if (!elemId) return;

      container.querySelectorAll('.elem-filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const targetElem = ELEMENT_MAP.get(elemId);
      if (!targetElem) return;

      const strongList = targetElem.strongAgainst.map(id => ELEMENT_MAP.get(id)!).filter(Boolean);
      const weakList = targetElem.weakAgainst.map(id => ELEMENT_MAP.get(id)!).filter(Boolean);
      const neutralList = ALL_ELEMENTS.filter(e => e.id !== targetElem.id && !targetElem.strongAgainst.includes(e.id) && !targetElem.weakAgainst.includes(e.id));
      const sampleHeroes = ALL_HEROES.filter(h => h.element === targetElem.id).slice(0, 6);

      const inspectorPanel = container.querySelector('#elem-inspector-details');
      if (inspectorPanel) {
        inspectorPanel.innerHTML = renderElementDetailCardHtml(targetElem, strongList, weakList, neutralList, sampleHeroes);
      }

      // ซิงค์ไปยัง Calculator ฝั่งซ้ายด้วย
      if (attSelect) {
        attSelect.value = elemId;
        updateCalculator();
      }

      // ไฮไลต์แถวใน Matrix Table
      container.querySelectorAll('.matrix-row').forEach(r => r.classList.remove('active-row'));
      const matrixRow = container.querySelector(`.matrix-row[data-att-id="${elemId}"]`);
      matrixRow?.classList.add('active-row');

      if (onElementSelected) onElementSelected(elemId);
    });
  });

  // คลิกหัวแถวใน Matrix Table เพื่อเลือกธาตุ
  container.querySelectorAll('.matrix-att-th').forEach(th => {
    th.addEventListener('click', () => {
      const elemId = (th as HTMLElement).dataset.elemId;
      if (!elemId) return;

      const chip = container.querySelector(`.elem-filter-chip[data-elem-id="${elemId}"]`) as HTMLElement | null;
      chip?.click();
    });
  });

  // คลิกเซลล์ใน Matrix Table เพื่อจำลองใน Calculator ทันที
  container.querySelectorAll('.matrix-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const att = (cell as HTMLElement).dataset.att;
      const def = (cell as HTMLElement).dataset.def;
      if (!att || !def) return;

      if (attSelect) attSelect.value = att;
      if (defSelect) defSelect.value = def;
      updateCalculator();

      const chip = container.querySelector(`.elem-filter-chip[data-elem-id="${att}"]`) as HTMLElement | null;
      chip?.click();

      // เลื่อนสายตาไปยัง Calculator
      const calcCard = container.querySelector('.elem-calculator-card');
      calcCard?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}
