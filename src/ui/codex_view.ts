/**
 * Codex & Bestiary View (Phase 3: Animalia Codex & Wildlife Trivia)
 * หน้าจอสมุดสะสมสัตว์เลี้ยง:
 * 1. แผงสรุปความก้าวหน้าและเลเวลสมุดสะสม (Codex Mastery Banner & Perks)
 * 2. แท็บสลับ 3 โหมด:
 *    - 'bestiary': สารานุกรมสัตว์ 180+ ชนิด พร้อมระบบ 3 สถานะ (Unknown / Seen / Captured)
 *    - 'bonds': กระดานชุดสายสัมพันธ์ 18 ชุด พร้อมกดรับรางวัลและเปิดใช้โบนัสสเตตัส
 *    - 'trivia': มินิเกมควิซปราชญ์สัตว์โลกประจำวัน สุ่มคำถามจากชีววิทยาสัตว์จริงใน animal_lore
 * 3. ตัวกรองตามธาตุ (11 ธาตุ), แร็งค์ (SS/S/A/B), สถานะการค้นพบ
 * 4. หน้าต่างรายละเอียดการวิจัยสัตว์รายตัว (Hero Research Modal)
 */

import { saveManager } from '../engine/save_manager';
import { codexManager, BOND_SETS, CODEX_LEVEL_CONFIG, CODEX_STAT_CAPS } from '../engine/codex_manager';
import { getAllHeroes, getAllElements } from '../engine/combat';
import { getAnimalLore } from '../data/animal_lore';
import { showToast } from './toast';

const HEROES = getAllHeroes();
const ELEMENTS = getAllElements();
const HERO_MAP = new Map(HEROES.map(h => [h.id, h]));
const ELEMENT_MAP = new Map(ELEMENTS.map(e => [e.id, e]));

export type CodexSubTab = 'bestiary' | 'bonds' | 'trivia';

export interface CodexFilterState {
  search: string;
  element: string; // 'all' หรือ elementId
  rarity: string;  // 'all' | 'SS' | 'S' | 'A' | 'B'
  discoveryState: 'all' | 'unknown' | 'seen' | 'captured' | 'can_claim';
  subTab: CodexSubTab;
  selectedHeroId: string | null;
}

const codexFilterState: CodexFilterState = {
  search: '',
  element: 'all',
  rarity: 'all',
  discoveryState: 'all',
  subTab: 'bestiary',
  selectedHeroId: null,
};

export function getCodexFilterState(): CodexFilterState {
  return codexFilterState;
}

export function setCodexSubTab(tab: CodexSubTab) {
  codexFilterState.subTab = tab;
}

export function setCodexSelectedHero(heroId: string | null) {
  codexFilterState.selectedHeroId = heroId;
}

/**
 * โครงสร้างคำถามควิซสัตว์โลก
 */
export interface TriviaQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceHeroId: string;
}

let currentQuizQuestions: TriviaQuestion[] = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizFinished = false;

export function generateDailyTriviaQuestions(): TriviaQuestion[] {
  const save = saveManager.getData();
  const seenAndCaptured = Object.keys({ ...save.seenHeroes, ...save.ownedHeroes });
  const pool = seenAndCaptured.length >= 4
    ? seenAndCaptured
    : ['rooster', 'cat', 'buffalo', 'dog', 'turtle', 'elephant', 'tiger', 'wolf'];

  const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
  const questions: TriviaQuestion[] = [];

  for (const heroId of shuffled) {
    const hero = HERO_MAP.get(heroId);
    if (!hero) continue;
    const lore = getAnimalLore(heroId, hero);

    // คำถามจาก Did You Know หรือ Nature Behavior หรือ Diet
    let qText = '';
    let explanation = '';
    const otherCandidates = HEROES.filter(h => h.id !== heroId).sort(() => 0.5 - Math.random()).slice(0, 3);

    if (lore.didYouKnow && lore.didYouKnow.length > 20) {
      qText = `รู้หรือไม่: สัตว์ชนิดใดที่มีลักษณะเฉพาะคือ "${lore.didYouKnow.replace(new RegExp(hero.name, 'g'), '_____')}" ?`;
      explanation = `${hero.name}: ${lore.didYouKnow}`;
    } else if (lore.physicalFeatures) {
      qText = `สัตว์ชนิดใดที่มีลักษณะทางกายภาพเด่นคือ "${lore.physicalFeatures.replace(new RegExp(hero.name, 'g'), '_____')}" ?`;
      explanation = `${hero.name}: ${lore.physicalFeatures}`;
    } else {
      qText = `สัตว์ชนิดใดที่จัดอยู่ในกลุ่มชีววิทยา "${lore.category}" และถิ่นอาศัย "${lore.naturalHabitat}" ?`;
      explanation = `${hero.name}: ${lore.category}`;
    }

    const options = [hero.name, ...otherCandidates.map(c => c.name)].sort(() => 0.5 - Math.random());
    const correctIndex = options.indexOf(hero.name);

    questions.push({
      question: qText,
      options,
      correctIndex,
      explanation,
      sourceHeroId: hero.id,
    });
  }

  return questions;
}

/**
 * เรนเดอร์ HTML หลักของหน้าสมุดสะสม
 */
export function renderCodexViewHtml(): string {
  const save = saveManager.getData();
  const lvlInfo = codexManager.getCodexLevelInfo(save);
  const activeBuffs = codexManager.getActiveCodexBuffs(save);
  const unclaimedCount = codexManager.countUnclaimedRewards(save);

  const totalHeroes = HEROES.length;
  const capturedCount = Object.keys(save.ownedHeroes || {}).length;
  const seenCount = Object.keys(save.seenHeroes || {}).length;

  return `
    <div class="codex-page-container">
      <!-- 1. Codex Header Banner -->
      <section class="codex-header-banner">
        <div class="codex-banner-left">
          <div class="codex-book-emblem">📖</div>
          <div class="codex-title-wrap">
            <div class="codex-badge-row">
              <span class="codex-level-tag">🏆 ระดับสมุดสะสม: Lv.${lvlInfo.currentLevel}</span>
              ${unclaimedCount > 0 ? `<span class="codex-unclaimed-tag">🎁 มี ${unclaimedCount} รางวัลรอรับ!</span>` : ''}
            </div>
            <h2 class="codex-main-title">สารานุกรมสัตว์ป่าและสมุดสะสม (Animalia Codex)</h2>
            <p class="codex-subtitle">สำรวจโลกชีววิทยา บันทึกสายสัมพันธ์ และปลดล็อกพรคุ้มครองแห่งสิบเอ็ดธาตุ</p>
          </div>
        </div>

        <div class="codex-banner-right">
          <div class="codex-exp-block">
            <div class="codex-exp-labels">
              <span>แต้มวิจัยสะสม: <b>${lvlInfo.currentExp.toLocaleString()}</b> EXP</span>
              <span>${lvlInfo.isMaxLevel ? 'ระดับสูงสุด' : `ต่อไป: ${lvlInfo.expForNextLevel.toLocaleString()}`}</span>
            </div>
            <div class="codex-exp-track">
              <div class="codex-exp-fill" style="width: ${lvlInfo.progressPct}%;"></div>
            </div>
            <div class="codex-perk-hint">⭐ สิทธิพิเศษปัจจุบัน: <b>${lvlInfo.currentPerk}</b></div>
          </div>

          <div class="codex-stats-summary-card" title="โบนัสสเตตัสติดไอดีที่สัตว์เลี้ยงฝ่ายเราทุกคนได้รับ">
            <span class="codex-stats-title">🛡️ โบนัสติดไอดี (Codex Buffs):</span>
            <div class="codex-stat-chips">
              <span class="c-chip">HP +${(activeBuffs.hpPct * 100).toFixed(1)}%</span>
              <span class="c-chip">ATK +${(activeBuffs.atkPct * 100).toFixed(1)}%</span>
              <span class="c-chip">DEF +${(activeBuffs.defPct * 100).toFixed(1)}%</span>
              ${activeBuffs.criBonus > 0 ? `<span class="c-chip">CRI +${activeBuffs.criBonus}%</span>` : ''}
              ${activeBuffs.blockBonus > 0 ? `<span class="c-chip">Block +${activeBuffs.blockBonus}%</span>` : ''}
              ${activeBuffs.maxSpBonus > 0 ? `<span class="c-chip">SP +${activeBuffs.maxSpBonus}</span>` : ''}
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Navigation Sub-Tabs -->
      <nav class="codex-nav-subtabs">
        <button class="codex-subtab-btn ${codexFilterState.subTab === 'bestiary' ? 'active' : ''}" data-subtab="bestiary">
          <span class="btn-icon">🦁</span>
          <span class="btn-text">สารานุกรมสัตว์ (${capturedCount}/${totalHeroes})</span>
        </button>
        <button class="codex-subtab-btn ${codexFilterState.subTab === 'bonds' ? 'active' : ''}" data-subtab="bonds">
          <span class="btn-icon">🌿</span>
          <span class="btn-text">ชุดสายสัมพันธ์ (${BOND_SETS.length} ชุด)</span>
        </button>
        <button class="codex-subtab-btn ${codexFilterState.subTab === 'trivia' ? 'active' : ''}" data-subtab="trivia">
          <span class="btn-icon">❓</span>
          <span class="btn-text">ควิซปราชญ์สัตว์โลกประจำวัน</span>
        </button>
      </nav>

      <!-- 3. Subtab Content Area -->
      <main class="codex-subtab-content">
        ${renderSubtabContent()}
      </main>

      <!-- 4. Hero Detail & Research Modal -->
      ${renderHeroDetailModalHtml()}
    </div>
  `;
}

function renderSubtabContent(): string {
  if (codexFilterState.subTab === 'bonds') {
    return renderBondsSubtabHtml();
  }
  if (codexFilterState.subTab === 'trivia') {
    return renderTriviaSubtabHtml();
  }
  return renderBestiarySubtabHtml();
}

/**
 * 1. แท็บสารานุกรมสัตว์ (Bestiary Grid)
 */
function renderBestiarySubtabHtml(): string {
  const save = saveManager.getData();

  // ตัวกรอง
  let list = HEROES.filter(h => {
    if (codexFilterState.element !== 'all' && h.element !== codexFilterState.element) return false;
    if (codexFilterState.rarity !== 'all' && h.rarity !== codexFilterState.rarity) return false;
    if (codexFilterState.search) {
      const q = codexFilterState.search.toLowerCase();
      const matchName = h.name.toLowerCase().includes(q);
      const matchRole = h.role.toLowerCase().includes(q);
      if (!matchName && !matchRole) return false;
    }

    const state = codexManager.getHeroDiscoveryState(h.id, save);
    if (codexFilterState.discoveryState === 'unknown' && state !== 'unknown') return false;
    if (codexFilterState.discoveryState === 'seen' && state !== 'seen') return false;
    if (codexFilterState.discoveryState === 'captured' && state !== 'captured') return false;
    if (codexFilterState.discoveryState === 'can_claim') {
      const res = codexManager.checkHeroResearchStatus(h.id, save);
      if (!res.tier1Available && !res.tier2Available && !res.tier3Available) return false;
    }
    return true;
  });

  return `
    <div class="bestiary-view-wrap">
      <!-- Filter Bar -->
      <div class="bestiary-filter-bar">
        <div class="search-input-wrap">
          <input 
            type="text" 
            class="input-codex-search" 
            id="input-codex-search" 
            placeholder="🔍 ค้นหาชื่อสัตว์ หรือสายบทบาท..." 
            value="${codexFilterState.search}"
          />
        </div>

        <div class="filter-dropdowns-cluster">
          <select class="select-codex-filter" id="select-codex-elem">
            <option value="all" ${codexFilterState.element === 'all' ? 'selected' : ''}>☯️ ทุกธาตุ (11 ธาตุ)</option>
            ${ELEMENTS.map(e => `<option value="${e.id}" ${codexFilterState.element === e.id ? 'selected' : ''}>${e.icon} ธาตุ${e.name}</option>`).join('')}
          </select>

          <select class="select-codex-filter" id="select-codex-rarity">
            <option value="all" ${codexFilterState.rarity === 'all' ? 'selected' : ''}>⭐ ทุกแร็งค์</option>
            <option value="SS" ${codexFilterState.rarity === 'SS' ? 'selected' : ''}>แร็งค์ SS (สัตว์มายา)</option>
            <option value="S" ${codexFilterState.rarity === 'S' ? 'selected' : ''}>แร็งค์ S (สัตว์หายาก)</option>
            <option value="A" ${codexFilterState.rarity === 'A' ? 'selected' : ''}>แร็งค์ A (สัตว์ชั้นยอด)</option>
            <option value="B" ${codexFilterState.rarity === 'B' ? 'selected' : ''}>แร็งค์ B (สัตว์พื้นฐาน)</option>
          </select>

          <select class="select-codex-filter" id="select-codex-state">
            <option value="all" ${codexFilterState.discoveryState === 'all' ? 'selected' : ''}>📋 สถานะค้นพบทั้งหมด</option>
            <option value="captured" ${codexFilterState.discoveryState === 'captured' ? 'selected' : ''}>✅ ครอบครองแล้ว</option>
            <option value="seen" ${codexFilterState.discoveryState === 'seen' ? 'selected' : ''}>👁️ เคยพบในสนามรบ</option>
            <option value="unknown" ${codexFilterState.discoveryState === 'unknown' ? 'selected' : ''}>🔒 ยังไม่เคยพบ</option>
            <option value="can_claim" ${codexFilterState.discoveryState === 'can_claim' ? 'selected' : ''}>🎁 มีรางวัลรอรับ</option>
          </select>
        </div>
      </div>

      <!-- Bestiary Cards Grid -->
      <div class="bestiary-grid">
        ${list.map(h => renderBestiaryCardHtml(h)).join('')}
      </div>
    </div>
  `;
}

function renderBestiaryCardHtml(h: any): string {
  const save = saveManager.getData();
  const discovery = codexManager.getHeroDiscoveryState(h.id, save);
  const el = ELEMENT_MAP.get(h.element);
  const elemColor = el?.color || '#ffd54f';
  const research = codexManager.checkHeroResearchStatus(h.id, save);
  const hasReward = research.tier1Available || research.tier2Available || research.tier3Available;

  const owned = save.ownedHeroes ? save.ownedHeroes[h.id] : undefined;

  if (discovery === 'unknown') {
    return `
      <div class="codex-card card-unknown" data-hero-id="${h.id}" title="ยังไม่เคยพบสิ่งมีชีวิตชนิดนี้ • สังเกตและออกผจญภัยเพื่อค้นหา!">
        <div class="card-silhouette-wrap">
          <span class="card-silhouette-icon">❓</span>
        </div>
        <div class="card-meta-row">
          <span class="card-unknown-id">No. ${h.id}</span>
          <span class="card-unknown-tag">🔒 ลึกลับ</span>
        </div>
        <div class="card-name-placeholder">???</div>
      </div>
    `;
  }

  if (discovery === 'seen') {
    return `
      <div class="codex-card card-seen" data-hero-id="${h.id}" style="border-color: ${elemColor};" title="เคยพบเจอในสนามรบ! ฟักไข่หรือสะสมเศษวิญญาณเพื่อครอบครอง">
        <div class="card-avatar-wrap faded">
          <span class="card-avatar-emoji">🐾</span>
          <span class="card-elem-badge" style="background-color: ${elemColor};">${el?.icon || '✨'}</span>
        </div>
        <div class="card-meta-row">
          <span class="card-rarity-badge rarity-${h.rarity.toLowerCase()}">[${h.rarity}]</span>
          <span class="card-role-tag">${h.role}</span>
        </div>
        <div class="card-name-text">${h.name}</div>
        <div class="card-status-seen-tag">👁️ เคยพบเจอ</div>
      </div>
    `;
  }

  // discovery === 'captured'
  return `
    <div class="codex-card card-captured ${hasReward ? 'has-reward-glow' : ''}" data-hero-id="${h.id}" style="border-color: ${elemColor};" role="button" tabindex="0">
      ${hasReward ? '<span class="card-claim-badge">🎁 รับรางวัล</span>' : ''}
      <div class="card-avatar-wrap">
        <span class="card-avatar-emoji">🐾</span>
        <span class="card-elem-badge" style="background-color: ${elemColor};">${el?.icon || '✨'}</span>
      </div>
      <div class="card-meta-row">
        <span class="card-rarity-badge rarity-${h.rarity.toLowerCase()}">[${h.rarity}]</span>
        <span class="card-stars-display">${'⭐'.repeat(owned?.stars || 1)}</span>
      </div>
      <div class="card-name-text"><strong>${h.name}</strong></div>
      <div class="card-research-pills">
        <span class="pill-dot ${research.tier1Claimed ? 'done' : research.tier1Available ? 'active' : ''}" title="ขั้น 1: แรกพบ">1⭐</span>
        <span class="pill-dot ${research.tier2Claimed ? 'done' : research.tier2Available ? 'active' : ''}" title="ขั้น 2: 3 ดาว">3⭐</span>
        <span class="pill-dot ${research.tier3Claimed ? 'done' : research.tier3Available ? 'active' : ''}" title="ขั้น 3: 5 ดาว">5⭐</span>
      </div>
    </div>
  `;
}

/**
 * 2. แท็บชุดสายสัมพันธ์ (Ecological Bonds & Synergy Sets)
 */
function renderBondsSubtabHtml(): string {
  const save = saveManager.getData();

  return `
    <div class="bonds-view-wrap">
      <div class="bonds-lead-banner">
        <h3>🌿 ชุดสายสัมพันธ์และระบบนิเวศ (${BOND_SETS.length} ชุด)</h3>
        <p>เมื่อสะสมสัตว์ในชุดสายสัมพันธ์ครบและกดรับรางวัล จะได้รับคริสตัล ทอง และโบนัสสเตตัสติดไอดีถาวร</p>
      </div>

      <div class="bonds-grid">
        ${BOND_SETS.map(bond => {
          const status = codexManager.getBondSetStatus(bond.id, save);
          const progressPct = Math.round((status.ownedMembers / status.totalMembers) * 100);

          return `
            <div class="bond-card ${status.isComplete ? 'complete' : ''} ${status.isClaimed ? 'claimed' : ''}">
              <div class="bond-header">
                <div class="bond-title-wrap">
                  <h4 class="bond-name">${bond.name}</h4>
                  <span class="bond-cat-tag ${bond.category}">${bond.category}</span>
                </div>
                <div class="bond-counter">${status.ownedMembers}/${status.totalMembers}</div>
              </div>

              <p class="bond-desc">${bond.description}</p>

              <!-- Member Avatars -->
              <div class="bond-members-row">
                ${bond.memberHeroIds.map(hId => {
                  const isOwned = Boolean(save.ownedHeroes && save.ownedHeroes[hId]);
                  const meta = HERO_MAP.get(hId);
                  const el = meta ? ELEMENT_MAP.get(meta.element) : null;
                  return `
                    <div class="bond-member-pill ${isOwned ? 'owned' : 'missing'}" title="${meta?.name || hId} (${isOwned ? 'ครอบครองแล้ว' : 'ยังไม่มี'})">
                      <span class="member-elem-icon">${el?.icon || '🐾'}</span>
                      <span class="member-name">${meta?.name || hId}</span>
                      ${isOwned ? '✓' : ''}
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Progress Bar -->
              <div class="bond-progress-track">
                <div class="bond-progress-fill" style="width: ${progressPct}%;"></div>
              </div>

              <!-- Reward & Action -->
              <div class="bond-footer">
                <div class="bond-reward-desc">
                  <span>🎁 รางวัล: <b>💎${bond.reward.crystals}</b> | <b>🪙${bond.reward.gold}</b></span>
                  <span class="buff-txt">🛡️ บัฟ: <b>${bond.reward.statBuffDesc}</b></span>
                </div>
                <div>
                  ${
                    status.isClaimed
                      ? '<span class="btn-claimed-tag">✓ เปิดใช้บัฟแล้ว</span>'
                      : status.isComplete
                      ? `<button class="btn btn-sm btn-success btn-claim-bond" data-bond-id="${bond.id}">🎁 รับรางวัล</button>`
                      : '<button class="btn btn-sm btn-secondary" disabled>ยังไม่ครบ</button>'
                  }
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * 3. แท็บควิซปราชญ์สัตว์โลกประจำวัน (Daily Wildlife Trivia Quiz)
 */
function renderTriviaSubtabHtml(): string {
  if (currentQuizQuestions.length === 0) {
    currentQuizQuestions = generateDailyTriviaQuestions();
    currentQuizIndex = 0;
    quizScore = 0;
    quizFinished = false;
  }

  if (quizFinished) {
    return `
      <div class="trivia-view-wrap finished-box">
        <div class="trivia-congrats-card">
          <div class="congrats-icon">🎉</div>
          <h3>จบการทดสอบความรู้สัตว์โลกประจำวัน!</h3>
          <p class="score-text">คุณตอบถูก <b>${quizScore}</b> จาก <b>${currentQuizQuestions.length}</b> ข้อ</p>
          <div class="reward-gain-block">
            <span>🎁 รางวัลที่ได้รับ:</span>
            <span class="r-badge">🔥 +${quizScore * 10} พลังอบอุ่น</span>
            <span class="r-badge">🍖 +${quizScore * 50} เสบียงสัตว์</span>
          </div>
          <button class="btn btn-primary" id="btn-restart-quiz">🔄 ทำแบบทดสอบชุดใหม่</button>
        </div>
      </div>
    `;
  }

  const q = currentQuizQuestions[currentQuizIndex];
  if (!q) {
    quizFinished = true;
    return renderTriviaSubtabHtml();
  }

  return `
    <div class="trivia-view-wrap">
      <div class="trivia-header-card">
        <div class="trivia-badge">❓ ควิซปราชญ์สัตว์โลก (ข้อ ${currentQuizIndex + 1}/${currentQuizQuestions.length})</div>
        <p class="trivia-lead-text">คำถามอิงจากพฤติกรรม สรีรวิทยา และธรรมชาติวิทยาจริงของสัตว์ที่คุณได้เคยพบเจอ!</p>
      </div>

      <div class="trivia-question-box">
        <h3 class="q-title">${q.question}</h3>
        <div class="q-options-list">
          ${q.options.map((opt, idx) => `
            <button class="btn-trivia-opt" data-opt-idx="${idx}">
              <span class="opt-label">${String.fromCharCode(65 + idx)}.</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * หน้าต่างแสดงรายละเอียดสัตว์และการกดรับรางวัลวิจัย (Hero Research Modal)
 */
function renderHeroDetailModalHtml(): string {
  const heroId = codexFilterState.selectedHeroId;
  if (!heroId) return '';

  const save = saveManager.getData();
  const hero = HERO_MAP.get(heroId);
  if (!hero) return '';

  const el = ELEMENT_MAP.get(hero.element);
  const lore = getAnimalLore(heroId, hero);
  const research = codexManager.checkHeroResearchStatus(heroId, save);
  const owned = save.ownedHeroes ? save.ownedHeroes[heroId] : undefined;

  return `
    <div class="codex-modal-backdrop" id="codex-detail-modal">
      <div class="codex-modal-card">
        <div class="modal-header">
          <div class="m-hero-title">
            <span class="m-elem-badge" style="background-color: ${el?.color || '#ffd54f'};">${el?.icon || '✨'}</span>
            <h3>${hero.name} <small class="text-muted">(${lore.scientificName || hero.id})</small></h3>
          </div>
          <button class="btn-close-modal" id="btn-close-codex-modal">✕</button>
        </div>

        <div class="modal-body-scroll">
          <!-- Research Rewards Section -->
          <div class="research-rewards-section">
            <h4>🔬 ระดับการวิจัยสายพันธุ์ (Research Milestones):</h4>
            <div class="research-tiers-cluster">
              <!-- Tier 1 -->
              <div class="research-tier-card ${research.tier1Claimed ? 'claimed' : research.tier1Available ? 'available' : ''}">
                <div class="t-badge">ขั้นที่ 1: แรกพบ (ครอบครอง 1⭐)</div>
                <div class="t-reward">💎 15 คริสตัล | 🪙 300 ทอง | +10 EXP</div>
                ${
                  research.tier1Claimed
                    ? '<span class="claimed-txt">✓ รับแล้ว</span>'
                    : research.tier1Available
                    ? `<button class="btn btn-xs btn-success btn-claim-research" data-tier="1" data-hero-id="${heroId}">🎁 รับรางวัล</button>`
                    : '<span class="lock-txt">🔒 ต้องครอบครองสัตว์ตัวนี้</span>'
                }
              </div>

              <!-- Tier 2 -->
              <div class="research-tier-card ${research.tier2Claimed ? 'claimed' : research.tier2Available ? 'available' : ''}">
                <div class="t-badge">ขั้นที่ 2: ศึกษาลึกซึ้ง (เลื่อนขั้นถึง 3⭐)</div>
                <div class="t-reward">🍖 80 เสบียง | 🔥 15 พลังอบอุ่น | +20 EXP</div>
                ${
                  research.tier2Claimed
                    ? '<span class="claimed-txt">✓ รับแล้ว</span>'
                    : research.tier2Available
                    ? `<button class="btn btn-xs btn-success btn-claim-research" data-tier="2" data-hero-id="${heroId}">🎁 รับรางวัล</button>`
                    : `<span class="lock-txt">🔒 ต้องมีระดับ 3 ดาว (ปัจจุบัน: ${owned?.stars || 0}⭐)</span>`
                }
              </div>

              <!-- Tier 3 -->
              <div class="research-tier-card ${research.tier3Claimed ? 'claimed' : research.tier3Available ? 'available' : ''}">
                <div class="t-badge">ขั้นที่ 3: ปรมาจารย์สายพันธุ์ (เลื่อนขั้นถึง 5⭐)</div>
                <div class="t-reward">💎 30 คริสตัล | +40 EXP</div>
                ${
                  research.tier3Claimed
                    ? '<span class="claimed-txt">✓ รับแล้ว</span>'
                    : research.tier3Available
                    ? `<button class="btn btn-xs btn-success btn-claim-research" data-tier="3" data-hero-id="${heroId}">🎁 รับรางวัล</button>`
                    : `<span class="lock-txt">🔒 ต้องมีระดับ 5 ดาว (ปัจจุบัน: ${owned?.stars || 0}⭐)</span>`
                }
              </div>
            </div>
          </div>

          <!-- Wildlife Knowledge Lore -->
          <div class="wildlife-lore-section">
            <h4>🌿 สารานุกรมความรู้สัตว์โลกตามธรรมชาติ:</h4>
            <div class="lore-grid-two-col">
              <div class="lore-item"><b>หมวดชีววิทยา:</b> ${lore.category}</div>
              <div class="lore-item"><b>อาหารการกิน:</b> ${lore.diet}</div>
              <div class="lore-item"><b>ถิ่นอาศัยธรรมชาติ:</b> ${lore.naturalHabitat}</div>
              <div class="lore-item"><b>กายวิภาคเด่น:</b> ${lore.physicalFeatures}</div>
            </div>

            <div class="lore-block-text">
              <b>พฤติกรรมในธรรมชาติ:</b>
              <p>${lore.natureBehavior}</p>
            </div>

            <div class="lore-block-text">
              <b>กำเนิดพลังธาตุแฟนตาซี:</b>
              <p>${lore.elementalOrigin}</p>
            </div>

            ${lore.didYouKnow ? `
              <div class="lore-did-you-know-box">
                <span class="box-icon">💡</span>
                <div class="box-content">
                  <b>รู้หรือไม่?</b>
                  <p>${lore.didYouKnow}</p>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * ผูก Event Handlers ในหน้าจอสมุดสะสม
 */
export function bindCodexEvents(container: HTMLElement, onRefresh: () => void) {
  // สลับแท็บย่อย (Subtab)
  container.querySelectorAll<HTMLButtonElement>('.codex-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.subtab as CodexSubTab;
      if (tab) {
        setCodexSubTab(tab);
        onRefresh();
      }
    });
  });

  // ตัวกรองค้นหา Real-time
  const searchInput = container.querySelector<HTMLInputElement>('#input-codex-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      codexFilterState.search = searchInput.value;
      const grid = container.querySelector('.bestiary-grid');
      if (grid) {
        const wrap = container.querySelector('.bestiary-view-wrap');
        if (wrap) wrap.outerHTML = renderBestiarySubtabHtml();
        bindCodexEvents(container, onRefresh);
      }
    });
  }

  // ตัวกรอง Dropdowns
  const selectElem = container.querySelector<HTMLSelectElement>('#select-codex-elem');
  if (selectElem) {
    selectElem.addEventListener('change', () => {
      codexFilterState.element = selectElem.value;
      onRefresh();
    });
  }

  const selectRarity = container.querySelector<HTMLSelectElement>('#select-codex-rarity');
  if (selectRarity) {
    selectRarity.addEventListener('change', () => {
      codexFilterState.rarity = selectRarity.value;
      onRefresh();
    });
  }

  const selectState = container.querySelector<HTMLSelectElement>('#select-codex-state');
  if (selectState) {
    selectState.addEventListener('change', () => {
      codexFilterState.discoveryState = selectState.value as any;
      onRefresh();
    });
  }

  // คลิกเปิดการ์ดสัตว์เพื่อดูรายละเอียดและการวิจัย
  container.querySelectorAll<HTMLElement>('.codex-card.card-captured, .codex-card.card-seen').forEach(card => {
    card.addEventListener('click', () => {
      const heroId = card.dataset.heroId;
      if (heroId) {
        setCodexSelectedHero(heroId);
        onRefresh();
      }
    });
  });

  // ปิด Modal
  const closeBtn = container.querySelector('#btn-close-codex-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      setCodexSelectedHero(null);
      onRefresh();
    });
  }

  const modalBackdrop = container.querySelector('#codex-detail-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        setCodexSelectedHero(null);
        onRefresh();
      }
    });
  }

  // กดรับรางวัลวิจัยสัตว์รายตัว
  container.querySelectorAll<HTMLButtonElement>('.btn-claim-research').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const heroId = btn.dataset.heroId;
      const tier = Number(btn.dataset.tier) as 1 | 2 | 3;
      if (heroId && tier) {
        const res = codexManager.claimHeroResearchReward(heroId, tier);
        if (res.success) {
          showToast(`🎉 รับรางวัลวิจัยขั้นที่ ${tier} สำเร็จ!`, 'success');
          onRefresh();
        } else {
          showToast(res.error || 'ไม่สามารถรับรางวัลได้', 'error');
        }
      }
    });
  });

  // กดรับรางวัลชุดสายสัมพันธ์
  container.querySelectorAll<HTMLButtonElement>('.btn-claim-bond').forEach(btn => {
    btn.addEventListener('click', () => {
      const bondId = btn.dataset.bondId;
      if (bondId) {
        const res = codexManager.claimBondReward(bondId);
        if (res.success) {
          showToast(`✨ ปลดล็อกสายสัมพันธ์ [${res.reward?.statBuffDesc}] สำเร็จ!`, 'success');
          onRefresh();
        } else {
          showToast(res.error || 'ไม่สามารถรับรางวัลได้', 'error');
        }
      }
    });
  });

  // ตอบคำถามควิซสัตว์โลก
  container.querySelectorAll<HTMLButtonElement>('.btn-trivia-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const optIdx = Number(btn.dataset.optIdx);
      const q = currentQuizQuestions[currentQuizIndex];
      if (!q) return;

      if (optIdx === q.correctIndex) {
        quizScore += 1;
        showToast('🎯 ถูกต้องยอดเยี่ยม! ได้รับคะแนนสะสม', 'success');
      } else {
        showToast(`❌ ยังไม่ถูกต้อง! คำตอบที่ถูกคือ: ${q.options[q.correctIndex]}`, 'error');
      }

      currentQuizIndex += 1;
      if (currentQuizIndex >= currentQuizQuestions.length) {
        quizFinished = true;
        // แจกรางวัลเมื่อจบแบบทดสอบ
        const save = saveManager.getData();
        save.inventory.warmth += quizScore * 10;
        save.inventory.food += quizScore * 50;
        saveManager.save();
      }
      onRefresh();
    });
  });

  // ปุ่มเริ่มควิซใหม่
  const restartQuizBtn = container.querySelector('#btn-restart-quiz');
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
      currentQuizQuestions = generateDailyTriviaQuestions();
      currentQuizIndex = 0;
      quizScore = 0;
      quizFinished = false;
      onRefresh();
    });
  }
}
