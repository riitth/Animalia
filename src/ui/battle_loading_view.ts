/**
 * Battle Loading View (Cozy Pixel Art Fantasy Transition)
 * หน้าจอโหลดข้อมูลการต่อสู้เสมือนจริงพร้อม Progress Bar ธีม Cozy Pixel Art Fantasy
 * มีการหน่วงเวลา ~2.3 วินาที แสดงข้อมูลด่าน, คู่ต่อสู้, ทริคการเล่น และแถบโหลดเคลื่อนไหว
 */

export interface LoadingHeroInfo {
  name: string;
  avatar: string;
  element: string;
  elementName?: string;
  elementIcon?: string;
  level: number;
  role?: string;
  isMain?: boolean;
  isBoss?: boolean;
}

export interface BattleLoadingData {
  stageTitle: string;
  stageSubtitle?: string;
  stageBadge?: string;
  matchupText?: string;
  matchupType?: 'advantage' | 'disadvantage' | 'neutral';
  playerTeam: LoadingHeroInfo[];
  enemyTeam: LoadingHeroInfo[];
  customTip?: string;
  durationMs?: number; // ระยะเวลาโหลดรวม (มิลลิวินาที, ค่าเริ่มต้น 2300ms)
}

// คลังเกร็ดความรู้สไตล์ Cozy Pixel Fantasy
export const COZY_BATTLE_TIPS: string[] = [
  'การใช้สกิลธาตุที่ชนะทางจะเพิ่มความเสียหายขึ้น +30% และลดความเสียหายที่ได้รับลง -15%',
  'สลับตัวสำรอง (Tag Swap) ลงสนามเพื่อเพิ่มเกราะป้องกัน ล้างสถานะผิดปกติ และฟื้นฟู SP ให้ตัวหลัก',
  'อัปเลเวลสกิลในกระดานสกิลถึงระดับสูงสุด Lv.5 เพื่อรับโบนัสพลังทำลายล้างแรงขึ้นถึง +25%',
  'เร่งฟักไข่ในรังอบอุ่นด้วยพลังไออุ่น (Warmth) จะช่วยลดระยะเวลาฟักไข่ลงได้อย่างมาก',
  'สายวิชาไร้ธาตุทั้ง 5 สาย (กระบวนท่า, พยาบาล, เล่ห์กล, เร่งปฏิกิริยา, วิชาลับ) สวมใส่ได้กับทุกตัวละคร',
  'ฮีโร่สายแทงก์ (Defender) เช่น ควาย มีความทนทานสูงและช่วยดูดซับความเสียหายให้ทีมได้ดีเยี่ยม',
  'เมื่อเกจไม้ตายเต็ม 100% สามารถปล่อยท่าไม้ตาย Signature ทันทีเพื่อพลิกสถานการณ์การรบ!',
  'ก่อนเริ่มสู้ สามารถกด "เปลี่ยนตัว" บนการ์ดฮีโร่เพื่อสลับสัตว์เลี้ยงแก้ทางธาตุศัตรูได้ทันที',
  'ฮีโร่สายความเร็ว (Assassin) มักจะได้สิทธิ์ออกแอ็กชันก่อนเสมอ เหมาะสำหรับเปิดเกมทำดาเมจ',
  'สกิลสายพยาบาล (Medical) สามารถฟื้นฟู HP และชำระล้างพิษหรือสถานะผิดปกติของเพื่อนร่วมทีมได้',
];

/**
 * ดึงข้อความสถานะตามช่วงเปอร์เซ็นต์ของ Progress Bar
 */
export function getLoadingStatusText(percent: number): string {
  if (percent < 22) {
    return '🐾 กำลังระดมพลสหายสัตว์ป่าเข้าสู่สมรภูมิ...';
  } else if (percent < 48) {
    return '🔮 ประสานพลังวิญญาณธาตุแห่งพงไพร...';
  } else if (percent < 72) {
    return '📖 ตรวจสอบคัมภีร์สกิลและจัดระเบียบกระดานวิชา...';
  } else if (percent < 92) {
    return '⚔️ จัดเรียงยุทธวิธีและเตรียมพร้อมประจัญบาน...';
  } else {
    return '✨ สังเวียนเปิดออกแล้ว! สหายสัตว์ป่าพร้อมลุย...';
  }
}

/**
 * สุ่มเกร็ดความรู้สำหรับหน้าจอโหลด
 */
export function getRandomCozyTip(): string {
  const idx = Math.floor(Math.random() * COZY_BATTLE_TIPS.length);
  return COZY_BATTLE_TIPS[idx] || COZY_BATTLE_TIPS[0];
}

/**
 * เรนเดอร์ HTML โครงสร้างของหน้าจอโหลดข้อมูลการต่อสู้ (Battle Loading Screen)
 */
export function renderBattleLoadingHtml(
  data: BattleLoadingData,
  progress: number = 0,
  statusText?: string,
  tipText?: string
): string {
  const currentStatus = statusText || getLoadingStatusText(progress);
  const currentTip = tipText || data.customTip || getRandomCozyTip();
  const clampedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  // เรนเดอร์การ์ดฝั่งเรา
  const playerHeroesHtml = data.playerTeam.map(h => `
    <div class="loading-hero-card ${h.isMain ? 'is-main' : 'is-backup'}">
      <div class="hero-avatar-wrap">
        <span class="hero-avatar">${h.avatar}</span>
        ${h.elementIcon ? `<span class="elem-badge" title="${h.elementName || h.element}">${h.elementIcon}</span>` : ''}
      </div>
      <div class="hero-info">
        <span class="hero-name">${h.name}</span>
        <span class="hero-meta">Lv.${h.level} • ${h.isMain ? '⚔️ ตัวหลัก' : '🛡️ สำรอง'}</span>
      </div>
    </div>
  `).join('');

  // เรนเดอร์การ์ดฝั่งศัตรู
  const enemyHeroesHtml = data.enemyTeam.map(e => `
    <div class="loading-enemy-card ${e.isBoss ? 'is-boss' : ''}">
      <div class="hero-avatar-wrap">
        <span class="hero-avatar">${e.avatar}</span>
        ${e.elementIcon ? `<span class="elem-badge" title="${e.elementName || e.element}">${e.elementIcon}</span>` : ''}
      </div>
      <div class="hero-info">
        <span class="hero-name">${e.name}</span>
        <span class="hero-meta">Lv.${e.level} • ${e.isBoss ? '👑 บอสใหญ่' : '👾 ศัตรู'}</span>
      </div>
    </div>
  `).join('');

  // ป้าย Matchup ธาตุ
  let matchupBadgeHtml = '';
  if (data.matchupText) {
    const typeClass = data.matchupType === 'advantage'
      ? 'matchup-adv'
      : data.matchupType === 'disadvantage'
      ? 'matchup-dis'
      : 'matchup-neu';
    matchupBadgeHtml = `<div class="loading-matchup-pill ${typeClass}">${data.matchupText}</div>`;
  }

  return `
    <div class="battle-loading-container" id="battle-loading-container">
      <!-- ฉากหลังอนุภาคเวทมนตร์และแสงเรืองรอง -->
      <div class="loading-backdrop-fx">
        <div class="loading-firefly f1"></div>
        <div class="loading-firefly f2"></div>
        <div class="loading-firefly f3"></div>
        <div class="loading-firefly f4"></div>
        <div class="loading-firefly f5"></div>
      </div>

      <!-- หัวข้อด่าน / สนามประลอง -->
      <header class="loading-header">
        ${data.stageBadge ? `<span class="loading-stage-badge">${data.stageBadge}</span>` : ''}
        <h2 class="loading-stage-title">${data.stageTitle}</h2>
        ${data.stageSubtitle ? `<p class="loading-stage-subtitle">${data.stageSubtitle}</p>` : ''}
      </header>

      <!-- โซนคู่ต่อสู้ VS Showcase -->
      <div class="loading-vs-showcase">
        <!-- ฝ่ายเรา -->
        <div class="loading-side-box player-side">
          <div class="side-label">🐾 สหายผู้พิทักษ์</div>
          <div class="side-heroes-list">${playerHeroesHtml}</div>
        </div>

        <!-- ตรงกลาง: VS Emblem & ธาตุแก้ทาง -->
        <div class="loading-vs-center">
          <div class="vs-emblem-glow">
            <span class="vs-swords-icon">⚔️</span>
            <span class="vs-text">VS</span>
          </div>
          ${matchupBadgeHtml}
        </div>

        <!-- ฝ่ายศัตรู -->
        <div class="loading-side-box enemy-side">
          <div class="side-label">👾 ศัตรูประจำถิ่น</div>
          <div class="side-heroes-list">${enemyHeroesHtml}</div>
        </div>
      </div>

      <!-- โซนกลาง: สัตว์ป่าตัวนำโชควิ่งนำแถบ Progress Bar -->
      <div class="loading-mascot-lane">
        <div class="loading-mascot-runner" id="loading-mascot-runner" style="left: ${clampedProgress}%">
          <span class="mascot-sprite">🏃💨</span>
          <span class="mascot-shadow"></span>
        </div>
      </div>

      <!-- โซน Progress Bar สไตล์ Cozy Pixel Fantasy -->
      <div class="loading-progress-box">
        <div class="progress-info-row">
          <span class="progress-status-text" id="loading-status-text">${currentStatus}</span>
          <span class="progress-percent-text" id="loading-percent-text">[ ${clampedProgress}% ]</span>
        </div>

        <div class="loading-progress-frame">
          <div class="loading-progress-track">
            <div class="loading-progress-fill" id="loading-progress-fill" style="width: ${clampedProgress}%">
              <span class="fill-sparkle-head"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- กล่องเกร็ดความรู้ Cozy Fantasy Tips -->
      <div class="loading-tip-box">
        <div class="tip-header">
          <span class="tip-icon">💡</span>
          <span class="tip-title">เกร็ดความรู้ผู้พิทักษ์ (Adventurer's Tip)</span>
        </div>
        <p class="tip-desc" id="loading-tip-desc">${currentTip}</p>
      </div>

      <!-- ปุ่ม/คำแนะนำสำหรับแตะเพื่อข้าม (Skip) -->
      <div class="loading-skip-hint" id="loading-skip-hint">
        <button type="button" class="btn-skip-loading" id="btn-skip-loading">
          ⚡ แตะเพื่อเข้าสู่สังเวียนทันที (Skip)
        </button>
      </div>
    </div>
  `;
}

/**
 * เรียกใช้งานหน้าจอโหลดข้อมูลการต่อสู้แบบสมบูรณ์
 * มีการรัน Progress Bar นุ่มนวล ~2.3 วินาที (ปรับแต่งได้)
 * ส่งคืนฟังก์ชัน cancel/cleanup สำหรับหยุดการทำงานหากจำเป็น
 */
export function showBattleLoading(
  data: BattleLoadingData,
  onComplete: () => void
): () => void {
  const durationMs = data.durationMs ?? 2300;
  const tipText = data.customTip || getRandomCozyTip();

  // สร้างหรือค้นหา overlay container
  let overlay = document.getElementById('battle-loading-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'battle-loading-overlay';
    overlay.className = 'battle-loading-overlay';
    document.body.appendChild(overlay);
  }

  overlay.classList.remove('fade-out');
  overlay.style.display = 'flex';
  overlay.innerHTML = renderBattleLoadingHtml(data, 0, getLoadingStatusText(0), tipText);

  const fillEl = overlay.querySelector('#loading-progress-fill') as HTMLElement | null;
  const percentEl = overlay.querySelector('#loading-percent-text') as HTMLElement | null;
  const statusEl = overlay.querySelector('#loading-status-text') as HTMLElement | null;
  const mascotEl = overlay.querySelector('#loading-mascot-runner') as HTMLElement | null;
  const skipBtn = overlay.querySelector('#btn-skip-loading') as HTMLButtonElement | null;

  let startTime = Date.now();
  let animationFrameId: number | null = null;
  let isDone = false;

  const finishLoading = () => {
    if (isDone) return;
    isDone = true;

    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    // อัปเดตเต็ม 100%
    if (fillEl) fillEl.style.width = '100%';
    if (percentEl) percentEl.textContent = '[ 100% ]';
    if (statusEl) statusEl.textContent = '✨ สังเวียนพร้อมแล้ว! เข้าสู่การต่อสู้...';
    if (mascotEl) mascotEl.style.left = '100%';

    // เพิ่มเอฟเฟกต์แฟลชเรืองรองสีทอง
    overlay?.classList.add('loading-complete-flash');

    // หน่วงเวลาสั้นๆ 180ms เพื่อให้เห็น 100% ชัดเจน แล้ว Fade Out ออกอย่างนุ่มนวล
    window.setTimeout(() => {
      overlay?.classList.add('fade-out');
      window.setTimeout(() => {
        if (overlay && overlay.parentNode) {
          overlay.style.display = 'none';
          overlay.classList.remove('fade-out', 'loading-complete-flash');
          overlay.innerHTML = '';
        }
        onComplete();
      }, 320); // 320ms สำหรับ CSS transition fade-out
    }, 180);
  };

  // แตะปุ่ม Skip เพื่อเข้าสู่การต่อสู้ทันที
  skipBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    finishLoading();
  });

  // สามารถคลิกที่ Overlay ได้เช่นกัน
  overlay.addEventListener('click', () => {
    finishLoading();
  }, { once: true });

  // ฟังก์ชันคำนวณ Progress แบบ Organic Curve (เริ่มต้นนุ่มนวล เร่งสม่ำเสมอ แล้วจบอย่างสวยงาม)
  const tick = () => {
    if (isDone) return;

    const elapsed = Date.now() - startTime;
    const rawProgress = Math.min(1, elapsed / durationMs);

    // Easing curve: ease-out cubic เล็กน้อย ให้ความรู้สึกลื่นไหล
    const curvedProgress = 1 - Math.pow(1 - rawProgress, 2.2);
    const percent = Math.min(99, Math.round(curvedProgress * 100));

    if (fillEl) fillEl.style.width = `${percent}%`;
    if (percentEl) percentEl.textContent = `[ ${percent}% ]`;
    if (mascotEl) mascotEl.style.left = `${percent}%`;

    const statusMsg = getLoadingStatusText(percent);
    if (statusEl && statusEl.textContent !== statusMsg) {
      statusEl.textContent = statusMsg;
    }

    if (rawProgress >= 1) {
      finishLoading();
    } else {
      animationFrameId = requestAnimationFrame(tick);
    }
  };

  animationFrameId = requestAnimationFrame(tick);

  // ส่งคืน Cleanup
  return () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    if (overlay && overlay.parentNode) {
      overlay.style.display = 'none';
      overlay.classList.remove('fade-out', 'loading-complete-flash');
      overlay.innerHTML = '';
    }
    isDone = true;
  };
}

