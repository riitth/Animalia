/**
 * Incubator & Hatching View (Phase 2 - Task 2.1 & 2.4)
 * หน้าจอตู้ฟักไข่ 2 ช่อง, การนับเวลาถอยหลังแบบเรียลไทม์, เร่งเวลาด้วยพลังอบอุ่น, และการกะเทาะสุ่มฮีโร่
 */

import { saveManager, EggType, EGG_CONFIG } from '../engine/save_manager';
import { getAllHeroes, getAllElements, computeHeroStats } from '../engine/combat';
import { showToast } from './toast';

const HERO_MAP = new Map(getAllHeroes().map(h => [h.id, h]));
const ELEMENT_MAP = new Map(getAllElements().map(e => [e.id, e]));

export function renderIncubatorViewHtml(): string {
  const save = saveManager.getData();
  const inv = save.inventory;
  const slots = save.incubatorSlots;
  const now = Date.now();

  return `
    <div class="incubator-view-container">
      <div class="incubator-hero-banner">
        <div class="banner-title">
          <span>🥚 ตู้ฟักไข่วิญญาณแห่งพงไพร (The Soul Incubator)</span>
          <span style="font-size:0.8rem; color:var(--text-muted); font-weight:normal;">
            ฟักไข่เพื่อปลุกสัตว์เลี้ยงตัวใหม่หรือสะสมเศษวิญญาณ • 2 สล็อตพร้อมระบบเร่งเวลา
          </span>
        </div>
        <div class="pity-counter-box">
          <span class="pity-icon">👑</span>
          <div class="pity-info">
            <div class="pity-text">นับถอยหลังการันตี SS จากไข่ทองคำ: <strong>อีก ${30 - save.pityCounterSS} ฟอง</strong> (ฟักสะสมไปแล้ว ${save.totalEggsHatched} ฟอง)</div>
            <div class="pity-bar-wrap">
              <div class="pity-bar-fill" style="width: ${(save.pityCounterSS / 30) * 100}%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2 Incubator Slots Row -->
      <div class="incubator-slots-grid">
        ${[0, 1].map(slotIdx => {
          const slot = slots[slotIdx];
          if (!slot) {
            return `
              <div class="incubator-chamber empty" data-slot-idx="${slotIdx}">
                <div class="chamber-header">
                  <span class="chamber-tag">ช่องฟักที่ ${slotIdx + 1}</span>
                  <span class="status-pill empty">⚪ ว่างเปล่า</span>
                </div>
                <div class="chamber-center-graphic">
                  <div class="empty-egg-nest">🪹</div>
                  <div class="chamber-hint">ไม่มีไข่ในช่องนี้ วางไข่เพื่อเริ่มฟัก</div>
                </div>
                <div class="chamber-actions-group">
                  <button class="btn btn-sm btn-outline-white btn-place-egg" data-slot-idx="${slotIdx}" data-egg-type="normal" ${inv.normalEggs <= 0 ? 'disabled' : ''}>
                    🥚 วางไข่ธรรมดา (มี ${inv.normalEggs})
                  </button>
                  <button class="btn btn-sm btn-gold btn-place-egg" data-slot-idx="${slotIdx}" data-egg-type="gold" ${inv.goldEggs <= 0 ? 'disabled' : ''}>
                    🟡 วางไข่ทองคำ (มี ${inv.goldEggs})
                  </button>
                  <button class="btn btn-sm btn-outline btn-place-egg" data-slot-idx="${slotIdx}" data-egg-type="mythic" ${inv.mythicEggs <= 0 ? 'disabled' : ''}>
                    🟣 วางไข่มายา (มี ${inv.mythicEggs})
                  </button>
                </div>
              </div>
            `;
          }

          // Occupied Slot
          const elapsed = now - slot.startTime;
          const remainingMs = Math.max(0, slot.durationMs - elapsed);
          const isReady = remainingMs === 0;
          const progressPct = Math.min(100, (elapsed / slot.durationMs) * 100);

          const eggEmoji = slot.eggType === 'gold' ? '🟡' : slot.eggType === 'mythic' ? '🟣' : '🥚';
          const eggTypeName = slot.eggType === 'gold' ? 'ไข่ทองคำ' : slot.eggType === 'mythic' ? 'ไข่มายา' : 'ไข่ธรรมดา';

          return `
            <div class="incubator-chamber occupied ${slot.eggType} ${isReady ? 'ready-to-hatch' : ''}" data-slot-idx="${slotIdx}">
              <div class="chamber-header">
                <span class="chamber-tag">ช่องฟักที่ ${slotIdx + 1} • ${eggTypeName}</span>
                <span class="status-pill ${isReady ? 'ready' : 'incubating'}">
                  ${isReady ? '🐣 พร้อมกะเทาะ!' : '⏳ กำลังอบอุ่น'}
                </span>
              </div>

              <div class="chamber-center-graphic">
                <div class="incubating-egg-visual ${isReady ? 'pulse-ready' : 'float-warm'}">${eggEmoji}</div>
                <div class="egg-timer-display" id="slot-timer-${slotIdx}">
                  ${isReady ? 'พร้อมกะเทาะฟักแล้ว!' : formatRemainingTime(remainingMs)}
                </div>
                <div class="chamber-progress-bar-wrap">
                  <div class="chamber-progress-bar-fill" style="width: ${progressPct}%;"></div>
                </div>
              </div>

              <div class="chamber-actions-group">
                ${isReady ? `
                  <button class="btn btn-lg btn-success btn-hatch-egg pulse-btn" data-slot-idx="${slotIdx}">
                    🐣 กะเทาะเปลือกไข่! (Hatch Now)
                  </button>
                ` : `
                  <div class="speedup-row">
                    <button class="btn btn-xs btn-outline-warmth btn-warm-slot" data-slot-idx="${slotIdx}" ${inv.warmth <= 0 ? 'disabled' : ''}>
                      🔥 พลังอบอุ่น -10 นาที (มี ${inv.warmth})
                    </button>
                    <button class="btn btn-xs btn-outline-crystals btn-instant-slot" data-slot-idx="${slotIdx}">
                      💎 ฟักทันที (50 💎)
                    </button>
                  </div>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Inventory & Gacha Rate Guide -->
      <div class="incubator-info-grid">
        <div class="info-card">
          <h4>📦 คลังไข่ในกระเป๋าของคุณ</h4>
          <div class="eggs-inventory-chips">
            <div class="inv-egg-item">
              <span class="e-icon">🥚</span>
              <div>
                <div class="e-name">ไข่ธรรมดา</div>
                <div class="e-count">${inv.normalEggs} ฟอง (ใช้เวลา 30 นาที)</div>
              </div>
            </div>
            <div class="inv-egg-item">
              <span class="e-icon">🟡</span>
              <div>
                <div class="e-name">ไข่ทองคำ</div>
                <div class="e-count">${inv.goldEggs} ฟอง (ใช้เวลา 2 ชม.)</div>
              </div>
            </div>
            <div class="inv-egg-item">
              <span class="e-icon">🟣</span>
              <div>
                <div class="e-name">ไข่มายา</div>
                <div class="e-count">${inv.mythicEggs} ฟอง (ใช้เวลา 6 ชม.)</div>
              </div>
            </div>
          </div>

          <div style="margin-top:12px;">
            <button class="btn btn-xs btn-outline" id="btn-claim-free-test-eggs">
              🎁 รับไข่และพลังอบอุ่นทดสอบฟรี (+1 ธรรมดา, +1 ทอง, +5 อบอุ่น)
            </button>
          </div>
        </div>

        <div class="info-card">
          <h4>📊 อัตราการฟักฮีโร่ (Gacha Rates)</h4>
          <div class="rate-table-mini">
            <div class="rate-row">
              <span class="r-name">🥚 ไข่ธรรมดา:</span>
              <span class="r-val">Rank B: 85% • Rank A: 14.5% • Rank S: 0.5%</span>
            </div>
            <div class="rate-row">
              <span class="r-name">🟡 ไข่ทองคำ:</span>
              <span class="r-val">Rank A: 70% • Rank S: 27% • Rank SS: 3% (การันตี SS ทุก 30 ฟอง)</span>
            </div>
            <div class="rate-row">
              <span class="r-name">🟣 ไข่มายา:</span>
              <span class="r-val">Rank S: 88% • Rank SS: 12%</span>
            </div>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:8px;">
            * หากฟักได้สัตว์เลี้ยงที่มีอยู่ในคลังแล้ว จะแปลงเป็นเศษวิญญาณอัตโนมัติ (B: 10, A: 20, S: 30, SS: 50 ชิ้น)
          </div>
        </div>
      </div>

      <!-- Hatch Modal Root -->
      <div id="hatch-result-modal-root"></div>
    </div>
  `;
}

function formatRemainingTime(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} นาที`;
}

export function bindIncubatorEvents(container: HTMLElement, onIncubatorChanged: () => void) {
  // Place Egg
  container.querySelectorAll('.btn-place-egg').forEach(btn => {
    btn.addEventListener('click', () => {
      const slotIdx = Number((btn as HTMLElement).dataset.slotIdx);
      const eggType = (btn as HTMLElement).dataset.eggType as EggType;
      if (isNaN(slotIdx) || !eggType) return;

      const res = saveManager.placeEgg(slotIdx, eggType);
      if (res.success) {
        showToast(`🥚 วางไข่ ${eggType === 'gold' ? 'ทองคำ' : 'ธรรมดา'} ในช่องที่ ${slotIdx + 1} สำเร็จ! กำลังเริ่มฟัก...`, 'info');
        onIncubatorChanged();
      } else {
        showToast(`❌ วางไข่ไม่สำเร็จ: ${res.error}`, 'error');
      }
    });
  });

  // Warm up slot (-10 mins)
  container.querySelectorAll('.btn-warm-slot').forEach(btn => {
    btn.addEventListener('click', () => {
      const slotIdx = Number((btn as HTMLElement).dataset.slotIdx);
      const res = saveManager.applyWarmth(slotIdx, 1);
      if (res.success) {
        showToast(`🔥 ใช้พลังอบอุ่น 1 แต้ม! ลดเวลาฟักลง ${res.minutesReduced || 10} นาที`, 'gold');
        onIncubatorChanged();
      } else {
        showToast(`❌ ${res.error}`, 'error');
      }
    });
  });

  // Instant hatch (Graybox Fast Hatch)
  container.querySelectorAll('.btn-instant-slot').forEach(btn => {
    btn.addEventListener('click', () => {
      const slotIdx = Number((btn as HTMLElement).dataset.slotIdx);
      const ok = saveManager.instantHatchSlot(slotIdx);
      if (ok) {
        showToast('⚡ เร่งฟักทันทีสำเร็จ! ไข่พร้อมกะเทาะแล้ว', 'success');
        onIncubatorChanged();
      } else {
        showToast('❌ ไม่สามารถเร่งฟักได้ (ไม่มีไข่ในช่องนี้)', 'error');
      }
    });
  });

  // Hatch Egg Now
  container.querySelectorAll('.btn-hatch-egg').forEach(btn => {
    btn.addEventListener('click', () => {
      const slotIdx = Number((btn as HTMLElement).dataset.slotIdx);
      const res = saveManager.hatchEgg(slotIdx);
      if (res.success && res.hero) {
        showHatchResultModal(container, res, onIncubatorChanged);
      } else {
        showToast(`❌ ไม่สามารถกะเทาะไข่ได้: ${res.error}`, 'error');
      }
    });
  });

  // Claim free test eggs
  container.querySelector('#btn-claim-free-test-eggs')?.addEventListener('click', () => {
    saveManager.addEggs('normal', 1);
    saveManager.addEggs('gold', 1);
    saveManager.addWarmth(5);
    showToast('🎁 ได้รับไข่ธรรมดา 1 ฟอง, ไข่ทอง 1 ฟอง และพลังอบอุ่น +5 แต้มเรียบร้อยแล้ว!', 'gold');
    onIncubatorChanged();
  });
}

function showHatchResultModal(
  container: HTMLElement,
  hatchResult: ReturnType<typeof saveManager.hatchEgg>,
  onClose: () => void
) {
  const root = container.querySelector('#hatch-result-modal-root') || document.body;
  const heroId = hatchResult.hero!.heroId;
  const heroMeta = HERO_MAP.get(heroId);
  const el = heroMeta ? ELEMENT_MAP.get(heroMeta.element) : null;
  const stats = computeHeroStats(heroId, 1, 1);

  const modalEl = document.createElement('div');
  modalEl.className = 'modal-backdrop';
  modalEl.innerHTML = `
    <div class="hatch-result-modal">
      <div class="hatch-glow-effect">✨</div>
      <div class="hatch-header-tag">
        ${hatchResult.isNew ? '🎉 ยินดีด้วย! ได้รับสัตว์เลี้ยงตัวใหม่!' : '✨ ได้รับสัตว์เลี้ยงซ้ำ แปลงเป็นเศษวิญญาณ'}
      </div>

      <div class="hatched-avatar-circle" style="border-color:${el?.color || '#ffd54f'};">
        ${el?.icon || '🐾'}
      </div>

      <h2 class="hatched-name">${heroMeta?.name || heroId}</h2>
      <div class="hatched-meta">
        <span class="roster-rarity-pill rarity-${heroMeta?.rarity}">${heroMeta?.rarity}</span>
        <span class="hatched-elem">ธาตุ${el?.name}</span> • <span>สาย${heroMeta?.role} (${heroMeta?.archetype})</span>
      </div>

      ${!hatchResult.isNew ? `
        <div class="hatched-shards-box">
          🧩 ได้รับเศษวิญญาณ <strong>+${hatchResult.shardsGained} ชิ้น</strong> เข้าคลัง (ใช้สำหรับปลุกพลังอัปดาว!)
        </div>
      ` : `
        <div class="hatched-stats-box">
          <div class="stat-pill">HP: ${Math.round(stats.maxHp)}</div>
          <div class="stat-pill">ATK: ${Math.round(stats.atk)}</div>
          <div class="stat-pill">DEF: ${Math.round(stats.def)}</div>
          <div class="stat-pill">SPD: ${Math.round(stats.spd)}</div>
        </div>
        <div class="hatched-ability-note">
          <strong>Ability:</strong> ${heroMeta?.ability.name} — ${heroMeta?.ability.description}
        </div>
        <div style="font-size:0.75rem; color:#ffd54f; background:rgba(255,213,79,0.1); border:1px dashed #ffd54f; border-radius:6px; padding:6px 10px; margin-bottom:16px;">
          💡 สัตว์เลี้ยงใหม่นี้ยังไม่มีสกิลติดตั้ง (ว่าง 4 ช่อง) — สามารถไปเลือกติดตั้งได้ที่หน้า <strong>"กระดานสกิล"</strong>
        </div>
      `}

      <div class="hatch-actions">
        <button class="btn btn-primary btn-lg" id="btn-close-hatch-modal">
          ตกลง (รับเข้าคลัง)
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalEl);

  modalEl.querySelector('#btn-close-hatch-modal')?.addEventListener('click', () => {
    modalEl.remove();
    onClose();
  });
}
