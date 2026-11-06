/**
 * Header & Navigation Component (Phase 2 Core Loop UI)
 */

import { saveManager } from '../engine/save_manager';
import { codexManager } from '../engine/codex_manager';
import { showToast } from './toast';

export type NavTab = 'campaign' | 'heroes' | 'codex' | 'skill_board' | 'elements' | 'incubator' | 'sandbox';

export function renderHeaderHtml(currentTab: NavTab): string {
  const save = saveManager.getData();
  const inv = save.inventory;
  const totalStars = saveManager.getTotalStars();
  const unclaimedCodex = codexManager.countUnclaimedRewards(save);
  const codexBadge = unclaimedCodex > 0
    ? `<span class="tab-badge ready-badge">🎁 ${unclaimedCodex}</span>`
    : `<span class="tab-badge">${Object.keys(save.ownedHeroes).length}/180</span>`;

  return `
    <header class="core-header">
      <div class="header-main-row">
        <div class="player-profile-block">
          <div class="player-avatar">🐾</div>
          <div class="player-info">
            <div class="player-name-row">
              <span class="player-name">${save.playerName}</span>
              <span class="player-level-badge">Lv.${save.playerLevel}</span>
            </div>
            <div class="player-exp-bar-wrap" title="EXP: ${save.playerExp}/100">
              <div class="player-exp-bar-fill" style="width: ${Math.min(100, save.playerExp)}%;"></div>
            </div>
          </div>
        </div>

        <div class="currencies-cluster">
          <div class="currency-pill gold" title="เหรียญทอง (ใช้พัฒนาฮีโร่และปลดล็อกสกิล)">
            <span class="curr-icon">🪙</span>
            <span class="curr-val" id="header-gold">${inv.gold.toLocaleString()}</span>
          </div>
          <div class="currency-pill crystals" title="คริสตัลสมดุล (พรีเมียม)">
            <span class="curr-icon">💎</span>
            <span class="curr-val" id="header-crystals">${inv.crystals.toLocaleString()}</span>
          </div>
          <div class="currency-pill food" title="เสบียงสัตว์ (ใช้อัปเลเวลฮีโร่)">
            <span class="curr-icon">🍖</span>
            <span class="curr-val" id="header-food">${inv.food.toLocaleString()}</span>
          </div>
          <div class="currency-pill warmth" title="พลังอบอุ่น (ใช้เร่งเวลาฟักไข่ -10 นาที/แต้ม)">
            <span class="curr-icon">🔥</span>
            <span class="curr-val" id="header-warmth">${inv.warmth.toLocaleString()}</span>
          </div>
          <div class="currency-pill eggs" title="ไข่ในคลัง: ธรรมดา / ทอง">
            <span class="curr-icon">🥚</span>
            <span class="curr-val">${inv.normalEggs}</span>
            <span class="curr-icon" style="margin-left:4px;">🟡</span>
            <span class="curr-val">${inv.goldEggs}</span>
          </div>
          <div class="currency-pill stars" title="ดาวสะสมจากด่านผจญภัย">
            <span class="curr-icon">⭐</span>
            <span class="curr-val" id="header-stars">${totalStars}/30</span>
          </div>
        </div>

        <div class="header-actions">
          <button class="btn btn-xs btn-outline-danger" id="btn-reset-save" title="รีเซ็ตความคืบหน้ากลับเป็นข้อมูลเริ่มต้น">
            ⚠️ รีเซ็ตเซฟ
          </button>
        </div>
      </div>

      <nav class="core-nav-tabs">
        <button class="nav-tab-btn ${currentTab === 'campaign' ? 'active' : ''}" data-tab="campaign">
          <span class="tab-icon">🗺️</span>
          <span class="tab-label">ด่านผจญภัย</span>
          <span class="tab-badge">${Object.keys(save.clearedStages).length}/10</span>
        </button>
        <button class="nav-tab-btn ${currentTab === 'heroes' ? 'active' : ''}" data-tab="heroes">
          <span class="tab-icon">🐾</span>
          <span class="tab-label">สัตว์เลี้ยง</span>
          <span class="tab-badge">${Object.keys(save.ownedHeroes).length}</span>
        </button>
        <button class="nav-tab-btn ${currentTab === 'codex' ? 'active' : ''}" data-tab="codex">
          <span class="tab-icon">📖</span>
          <span class="tab-label">สมุดสะสม</span>
          ${codexBadge}
        </button>
        <button class="nav-tab-btn ${currentTab === 'skill_board' ? 'active' : ''}" data-tab="skill_board">
          <span class="tab-icon">📜</span>
          <span class="tab-label">กระดานสกิล</span>
          <span class="tab-badge">${save.unlockedSkills.length}</span>
        </button>
        <button class="nav-tab-btn ${currentTab === 'elements' ? 'active' : ''}" data-tab="elements">
          <span class="tab-icon">☯️</span>
          <span class="tab-label">ตารางธาตุ</span>
          <span class="tab-badge">11 ธาตุ</span>
        </button>
        <button class="nav-tab-btn ${currentTab === 'incubator' ? 'active' : ''}" data-tab="incubator">
          <span class="tab-icon">🥚</span>
          <span class="tab-label">ตู้ฟักไข่</span>
          ${getIncubatorTabBadge(save.incubatorSlots)}
        </button>
        <button class="nav-tab-btn ${currentTab === 'sandbox' ? 'active' : ''}" data-tab="sandbox">
          <span class="tab-icon">🥊</span>
          <span class="tab-label">ประลอง Sandbox</span>
        </button>
      </nav>
    </header>
  `;
}

function getIncubatorTabBadge(slots: (typeof saveManager)['data']['incubatorSlots']): string {
  const activeCount = slots.filter(s => s !== null).length;
  if (activeCount === 0) return '';
  const now = Date.now();
  const readyCount = slots.filter(s => s && now >= s.startTime + s.durationMs).length;
  if (readyCount > 0) {
    return `<span class="tab-badge ready-badge">🐣 ${readyCount}</span>`;
  }
  return `<span class="tab-badge">${activeCount}/2</span>`;
}

export function bindHeaderEvents(
  container: HTMLElement,
  onTabChange: (tab: NavTab) => void,
  onSaveReset: () => void
) {
  container.querySelectorAll<HTMLButtonElement>('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab as NavTab;
      if (tab) onTabChange(tab);
    });
  });

  const resetBtn = container.querySelector('#btn-reset-save');
  resetBtn?.addEventListener('click', () => {
    if (confirm('คุณต้องการรีเซ็ตความคืบหน้าของเซฟทั้งหมดกลับสู่ข้อมูลเริ่มต้นหรือไม่? (ฮีโร่และไอเทมทั้งหมดจะกลับสู่ Starter Kit)')) {
      saveManager.reset();
      showToast('🔄 รีเซ็ตข้อมูลเซฟเริ่มต้นเรียบร้อยแล้ว!', 'info');
      onSaveReset();
    }
  });
}

