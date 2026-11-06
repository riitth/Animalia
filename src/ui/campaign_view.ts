/**
 * Campaign View (Phase 2 - Task 2.2 & 2.4)
 * หน้าจอด่านผจญภัย บทที่ 1: ป่าฝนต้นกำเนิดวิญญาณ (1v1 Tag Relay & Comprehensive Tutorial)
 */

import { campaignManager, StageDefinition, CampaignBattleResult } from '../engine/campaign_manager';
import { saveManager } from '../engine/save_manager';
import { getAllHeroes, getAllEnemies, getAllElements, getElementMultiplier, getAllSkills, getSkillBranch, getSkillSpCost } from '../engine/combat';
import { showToast } from './toast';

const HERO_MAP = new Map(getAllHeroes().map(h => [h.id, h]));
const ENEMY_MAP = new Map(getAllEnemies().map(e => [e.id, e]));
const ELEMENT_MAP = new Map(getAllElements().map(e => [e.id, e]));
const SKILL_MAP = new Map(getAllSkills().map(s => [s.id, s]));

/**
 * ดึงข้อมูลการแสดงผลไอคอน รายละเอียด และสีประจำสกิลสำหรับ Stage Briefing
 */
export function getSkillBriefVisuals(skId: string) {
  const sk = SKILL_MAP.get(skId);
  if (!sk) {
    return {
      name: skId,
      tier: '',
      icon: '❓',
      color: '#9e9e9e',
      branchName: 'ไม่ทราบ',
      spCost: 0,
      description: '',
    };
  }

  const branch = getSkillBranch(sk.id);
  let icon = '✨';
  let color = '#ffd54f';
  let branchName = sk.element;

  if (sk.element === 'neutral' || branch === 'martial' || branch === 'medical' || branch === 'trick' || branch === 'catalyst' || branch === 'secret' || branch === 'defense') {
    switch (branch) {
      case 'martial':
        icon = '🥋';
        color = '#ffcc80';
        branchName = 'กระบวนท่า (ไร้ธาตุ)';
        break;
      case 'medical':
        icon = '💚';
        color = '#a5d6a7';
        branchName = 'พยาบาล (ไร้ธาตุ)';
        break;
      case 'trick':
        icon = '🎭';
        color = '#ce93d8';
        branchName = 'เล่ห์กล (ไร้ธาตุ)';
        break;
      case 'catalyst':
        icon = '🔋';
        color = '#81d4fa';
        branchName = 'เร่งประจุ (ไร้ธาตุ)';
        break;
      case 'secret':
        icon = '📜';
        color = '#ffe082';
        branchName = 'วิชาลับ (ไร้ธาตุ)';
        break;
      case 'defense':
        icon = '🛡️';
        color = '#90caf9';
        branchName = 'วิชาป้องกัน (ไร้ธาตุ)';
        break;
      default:
        icon = '⚪';
        color = '#e0e0e0';
        branchName = 'ไร้ธาตุ';
        break;
    }
  } else {
    const el = ELEMENT_MAP.get(sk.element);
    icon = el?.icon || '✨';
    color = el?.color || '#ffd54f';
    branchName = `ธาตุ${el?.name || sk.element}`;
  }

  const spCost = getSkillSpCost(sk.tier, sk.id);

  return {
    name: sk.name || sk.id,
    tier: sk.tier || 'S',
    icon,
    color,
    branchName,
    spCost,
    description: sk.description || '',
  };
}

/**
 * เรนเดอร์ชิปไอคอนสกิล (Skill Icon Chip Badge) ที่สวยงาม แทนที่ข้อความ ID ดิบ
 */
export function renderSkillBriefBadge(skId: string): string {
  if (!skId) return '';
  const v = getSkillBriefVisuals(skId);
  const tierClass = v.tier ? `tier-${v.tier.toLowerCase()}` : '';
  const tooltip = `${v.name} [Tier ${v.tier}] (${v.branchName})\n💧 ค่าร่าย: ${v.spCost} SP\n${v.description}`;

  return `
    <span class="sk-brief-chip ${tierClass}" title="${tooltip}" style="border-color: ${v.color}55;">
      <span class="sk-brief-icon-box" style="background: ${v.color}22; border-color: ${v.color}88;">
        <span class="sk-brief-icon">${v.icon}</span>
      </span>
      <span class="sk-brief-name">${v.name}</span>
      ${v.tier ? `<span class="sk-brief-tier ${tierClass}">${v.tier}</span>` : ''}
    </span>
  `;
}

export function renderCampaignViewHtml(): string {
  const save = saveManager.getData();
  const stages = campaignManager.getAllStages();
  const totalStars = saveManager.getTotalStars();
  const clearedCount = Object.keys(save.clearedStages).length;

  const getStageStatus = (stage: StageDefinition) => {
    const isCleared = saveManager.isStageCleared(stage.id);
    const isUnlocked = campaignManager.isStageUnlocked(stage.id);
    const stars = saveManager.getStageStars(stage.id);
    return { isCleared, isUnlocked, stars };
  };

  return `
    <div class="campaign-view-container">
      <div class="campaign-chapter-hero">
        <div class="chapter-badge">บทที่ 1 • โหมด 1v1 Tag Relay</div>
        <h2 class="chapter-title">ป่าฝนต้นกำเนิดวิญญาณ</h2>
        <div class="chapter-subtitle">The Primordial Rainforest • เดินทางปราบมลทิน Void และปลดปล่อยผู้พิทักษ์แห่งพงไพร</div>
        <div class="chapter-progress-row">
          <div class="chapter-progress-bar-wrap">
            <div class="chapter-progress-bar-fill" style="width: ${(clearedCount / 10) * 100}%;"></div>
          </div>
          <span class="chapter-progress-text">ผ่านแล้ว ${clearedCount}/10 ด่าน (${totalStars}/30 ดาว ⭐)</span>
        </div>
      </div>

      <div class="stages-grid">
        ${stages.map(st => {
          const { isCleared, isUnlocked, stars } = getStageStatus(st);
          const isBoss = st.isBossStage;
          const isMiniBoss = st.stageNumber === 5;
          const cardClass = !isUnlocked
            ? 'stage-card locked'
            : isCleared
            ? 'stage-card cleared'
            : 'stage-card ready';

          const starsHtml = [1, 2, 3].map(starNum => {
            return `<span class="star-icon ${starNum <= stars ? 'active' : ''}">⭐</span>`;
          }).join('');

          const enemyPreviews = st.enemies.map(en => {
            const h = HERO_MAP.get(en.heroId) || ENEMY_MAP.get(en.heroId);
            const el = h ? ELEMENT_MAP.get(h.element) : null;
            return `
              <div class="enemy-micro-chip" title="${h?.name || en.heroId} (ธาตุ${el?.name})">
                <span class="chip-elem">${el?.icon || '❓'}</span>
                <span class="chip-name">${h?.name || en.heroId}</span>
                <span class="chip-lvl">Lv.${en.level}</span>
              </div>
            `;
          }).join('');

          const tagBadge = isBoss
            ? '<span class="stage-tag boss">👑 บอสใหญ่</span>'
            : isMiniBoss
            ? '<span class="stage-tag mini-boss">⚔️ มินิบอส</span>'
            : '<span class="stage-tag normal">1v1 แท็กทีม</span>';

          return `
            <div class="${cardClass}" data-stage-id="${st.id}">
              <div class="stage-card-header">
                <div class="stage-num-badge">1-${st.stageNumber}</div>
                ${tagBadge}
                <div class="stage-stars-row">${starsHtml}</div>
              </div>

              <div class="stage-card-body">
                <h3 class="stage-card-name">${st.name}</h3>
                <div class="stage-card-name-en">${st.nameEn}</div>
                <div class="stage-card-rec-lvl">แนะนำ: Lv.${st.recommendedLevel}</div>

                <div class="stage-enemies-preview">
                  <div class="preview-label">ศัตรูในด่าน:</div>
                  <div class="preview-chips-list">${enemyPreviews}</div>
                </div>

                <div class="stage-tutorial-peek" title="${st.tutorialTopic}">
                  🎓 <strong>บทเรียน:</strong> ${st.tutorialTopic}
                </div>
              </div>

              <div class="stage-card-footer">
                ${!isUnlocked
                  ? '<button class="btn btn-sm btn-disabled" disabled>🔒 ยังไม่ปลดล็อก</button>'
                  : isCleared
                  ? `<button class="btn btn-sm btn-cleared btn-open-stage" data-stage-id="${st.id}">⭐ ฟาร์มด่าน (เล่นซ้ำ)</button>`
                  : `<button class="btn btn-sm btn-primary btn-open-stage" data-stage-id="${st.id}">⚔️ ท้าทายด่าน</button>`
                }
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Stage Detail Modal Container -->
      <div id="stage-detail-modal-root"></div>

      <!-- Stage Result Modal Container -->
      <div id="stage-result-modal-root"></div>
    </div>
  `;
}

export function bindCampaignEvents(
  container: HTMLElement,
  onStartBattle: (stageId: string) => void,
  onNavigateToHeroes: () => void,
  onNavigateToElements?: () => void
) {
  // Bind click on stage cards
  container.querySelectorAll('.btn-open-stage').forEach(btn => {
    btn.addEventListener('click', () => {
      const stageId = (btn as HTMLElement).dataset.stageId;
      if (stageId) {
        openStageDetailModal(container, stageId, onStartBattle, onNavigateToHeroes, onNavigateToElements);
      }
    });
  });
}

/**
 * เรนเดอร์ HTML ของหน้าต่างโมดอลสรุปข้อมูลด่านและจัดทัพก่อนสู้ (Stage Briefing Modal)
 */
export function renderStageBriefingModalHtml(
  stage: StageDefinition,
  saveData?: any,
  showElementsButton: boolean = true
): string {
  const save = saveData || saveManager.getData();
  const isCleared = saveManager.isStageCleared(stage.id);
  const currentStars = saveManager.getStageStars(stage.id);

  // ข้อมูลทีมผู้เล่น 1v1 ปัจจุบัน
  const mainHeroId = save.activeTeam1v1.mainHeroId;
  const backupHeroId = save.activeTeam1v1.backupHeroId;
  const mainHero = save.ownedHeroes[mainHeroId];
  const backupHero = save.ownedHeroes[backupHeroId];
  const mainMeta = HERO_MAP.get(mainHeroId);
  const backupMeta = HERO_MAP.get(backupHeroId);
  const mainElem = mainMeta ? ELEMENT_MAP.get(mainMeta.element) : null;
  const backupElem = backupMeta ? ELEMENT_MAP.get(backupMeta.element) : null;

  // เปรียบเทียบธาตุตัวหลักเรา vs ศัตรูตัวหลักตัวแรก
  const firstEnemy = stage.enemies[0];
  const firstEnemyMeta = HERO_MAP.get(firstEnemy.heroId) || ENEMY_MAP.get(firstEnemy.heroId);
  const enemyElem = firstEnemyMeta ? ELEMENT_MAP.get(firstEnemyMeta.element) : null;
  const matchupMult = mainMeta && firstEnemyMeta ? getElementMultiplier(mainMeta.element, firstEnemyMeta.element, 'A', 'actual') : 1.0;
  let matchupBadge = '<span class="matchup-pill matchup-neu">⚪ สมดุลธาตุ ×1.0</span>';
  if (matchupMult > 1) {
    matchupBadge = `<span class="matchup-pill matchup-adv">🟢 ชนะธาตุ ${enemyElem?.name || ''} ×${matchupMult}</span>`;
  } else if (matchupMult < 1) {
    matchupBadge = `<span class="matchup-pill matchup-dis">🔴 แพ้ธาตุ ${enemyElem?.name || ''} ×${matchupMult}</span>`;
  }

  return `
    <div class="modal-backdrop" id="stage-modal-backdrop">
      <div class="stage-briefing-modal">
        <div class="modal-header">
          <div>
            <div class="modal-chapter-tag">ด่าน 1-${stage.stageNumber} • ${stage.nameEn}</div>
            <h2 class="modal-stage-title">${stage.name}</h2>
          </div>
          <button class="modal-close-btn" id="btn-close-stage-modal">✕</button>
        </div>

        <div class="modal-body-scrollable">
          <!-- Story intro -->
          <div class="story-dialogue-box">
            <span class="story-icon">📜</span>
            <div class="story-text">"${stage.storyDialogue.intro}"</div>
          </div>

          <!-- Tutorial Guide -->
          <div class="tutorial-guide-card">
            <div class="tut-header">
              <span class="tut-icon">🎓</span>
              <span class="tut-topic">บทเรียน: ${stage.tutorialTopic}</span>
            </div>
            <ul class="tut-points">
              ${(stage.tutorialGuide || []).map(point => `<li>${point}</li>`).join('')}
            </ul>
          </div>

          <!-- Enemies Section -->
          <div class="briefing-section">
            <h4 class="section-title">👾 ศัตรูที่ต้องเผชิญหน้า (Enemies)</h4>
            <div class="enemy-cards-row">
              ${stage.enemies.map((en, idx) => {
                const eMeta = HERO_MAP.get(en.heroId) || ENEMY_MAP.get(en.heroId);
                const eEl = eMeta ? ELEMENT_MAP.get(eMeta.element) : null;
                const roleTag = idx === 0 ? 'ตัวหลัก (Main)' : 'ตัวสำรอง (Backup)';
                return `
                  <div class="briefing-enemy-card">
                    <div class="role-badge ${idx === 0 ? 'main' : 'backup'}">${roleTag}</div>
                    <div class="e-header">
                      <span class="e-icon">${eEl?.icon || '👾'}</span>
                      <div>
                        <div class="e-name">${eMeta?.name || en.heroId}</div>
                        <div class="e-details">ธาตุ${eEl?.name} • สาย${eMeta?.role || 'Fighter'} • Lv.${en.level} (★${en.stars})</div>
                      </div>
                    </div>
                    <div class="e-skills-tags">
                      ${(en.customSkills || []).filter(Boolean).map(skId => renderSkillBriefBadge(skId)).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Player 1v1 Team Section -->
          <div class="briefing-section">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h4 class="section-title" style="margin-bottom:0;">🐾 ทีมของคุณ (Active 1v1 Team)</h4>
              <div>${matchupBadge}</div>
            </div>

            <div class="player-team-brief-grid">
              <div class="player-hero-brief main clickable-hero-brief" data-slot="main" title="คลิกเพื่อเปลี่ยนฮีโร่ตัวหลัก">
                <div class="brief-card-header">
                  <div class="slot-tag">ตัวหลัก (Main)</div>
                  <button class="btn-quick-change-hero" data-slot="main" title="เปลี่ยนฮีโร่ตัวหลัก">🔄 เปลี่ยนตัว</button>
                </div>
                <div class="h-name-row">
                  <span class="h-elem">${mainElem?.icon}</span>
                  <span class="h-name">${mainMeta?.name}</span>
                  <span class="h-lvl">Lv.${mainHero?.level} (★${mainHero?.stars})</span>
                </div>
                <div class="h-skills-chips">
                  ${(mainHero?.customSkills || []).filter(Boolean).length > 0
                    ? (mainHero?.customSkills || []).filter(Boolean).map((skId: string) => renderSkillBriefBadge(skId)).join('')
                    : '<span class="sk-brief-empty">ยังไม่มีสกิลติดตั้ง</span>'}
                </div>
              </div>

              <div class="player-hero-brief backup clickable-hero-brief" data-slot="backup" title="คลิกเพื่อเปลี่ยนฮีโร่ตัวสำรอง">
                <div class="brief-card-header">
                  <div class="slot-tag">ตัวสำรอง (Backup)</div>
                  <button class="btn-quick-change-hero" data-slot="backup" title="เปลี่ยนฮีโร่ตัวสำรอง">🔄 เปลี่ยนตัว</button>
                </div>
                <div class="h-name-row">
                  <span class="h-elem">${backupElem?.icon}</span>
                  <span class="h-name">${backupMeta?.name}</span>
                  <span class="h-lvl">Lv.${backupHero?.level} (★${backupHero?.stars})</span>
                </div>
                <div class="h-skills-chips">
                  ${(backupHero?.customSkills || []).filter(Boolean).length > 0
                    ? (backupHero?.customSkills || []).filter(Boolean).map((skId: string) => renderSkillBriefBadge(skId)).join('')
                    : '<span class="sk-brief-empty">ยังไม่มีสกิลติดตั้ง</span>'}
                </div>
              </div>
            </div>

            <div class="team-adjust-actions">
              <button class="btn btn-xs btn-outline" id="btn-swap-main-backup" title="สลับตำแหน่งระหว่างตัวหลักและตัวสำรอง">🔄 สลับตัวหลัก ⇋ ตัวสำรอง</button>
              <button class="btn btn-xs btn-gold" id="btn-open-quick-selector" title="เปิดหน้าต่างเลือกฮีโร่จัดทัพสำหรับด่านนี้">👥 เลือกจัดทัพด่วน</button>
              <button class="btn btn-xs btn-outline" id="btn-goto-heroes" title="ไปหน้าคลังสัตว์เลี้ยงเพื่ออัปเกรดหรือดูข้อมูลสัตว์โลก">🐾 คลังสัตว์เลี้ยง</button>
            </div>
          </div>

          <!-- Quick Hero Selector Root (เปิดหน้าต่างเลือกฮีโร่ในหน้านี้ทันที) -->
          <div id="quick-team-selector-root"></div>

          <!-- Rewards Preview -->
          <div class="briefing-section">
            <h4 class="section-title">🎁 รางวัลจากการต่อสู้ (Rewards)</h4>
            <div class="rewards-preview-box">
              ${!isCleared
                ? `
                  <div class="reward-col first-clear">
                    <div class="rw-title">🏆 รางวัลผ่านด่านครั้งแรก (First Clear):</div>
                    <div class="rw-items">
                      <span class="rw-chip">🪙 ${stage.rewards.firstClear.gold} Gold</span>
                      <span class="rw-chip">🍖 ${stage.rewards.firstClear.food} Food</span>
                      <span class="rw-chip">💎 ${stage.rewards.firstClear.crystals} Crystals</span>
                      ${stage.rewards.firstClear.warmth ? `<span class="rw-chip">🔥 ${stage.rewards.firstClear.warmth} Warmth</span>` : ''}
                      ${stage.rewards.firstClear.egg ? `<span class="rw-chip gold-egg">🥚 ไข่${stage.rewards.firstClear.egg === 'gold' ? 'ทองคำ' : 'ธรรมดา'}</span>` : ''}
                      ${stage.rewards.firstClear.shards ? Object.entries(stage.rewards.firstClear.shards).map(([hId, amt]) => `<span class="rw-chip shard">🧩 เศษวิญญาณ [${hId}] ×${amt}</span>`).join('') : ''}
                    </div>
                  </div>
                `
                : `
                  <div class="reward-col repeat-clear">
                    <div class="rw-title">🌾 รางวัลฟาร์มด่านซ้ำ (Repeat Clear):</div>
                    <div class="rw-items">
                      <span class="rw-chip">🪙 ${stage.rewards.repeatClear.gold} Gold</span>
                      <span class="rw-chip">🍖 ${stage.rewards.repeatClear.food} Food</span>
                      ${stage.rewards.repeatClear.elementStone ? `<span class="rw-chip stone">💎 หินธาตุ [${stage.rewards.repeatClear.elementStone}] (${Math.round((stage.rewards.repeatClear.elementStoneChance || 0) * 100)}%)</span>` : ''}
                    </div>
                  </div>
                `
              }
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-outline" id="btn-cancel-briefing">ยกเลิก</button>
          ${showElementsButton ? `
            <button class="btn btn-outline" id="btn-briefing-elements" title="ดูข้อมูลตารางธาตุและการแพ้ชนะ">
              ☯️ ตารางธาตุ
            </button>
          ` : ''}
          <button class="btn btn-primary btn-lg" id="btn-start-battle-confirmed">
            ⚔️ เริ่มการต่อสู้! (Start Battle)
          </button>
        </div>
      </div>
    </div>
  `;
}

function openStageDetailModal(
  container: HTMLElement,
  stageId: string,
  onStartBattle: (stageId: string) => void,
  onNavigateToHeroes: () => void,
  onNavigateToElements?: () => void
) {
  const root = container.querySelector('#stage-detail-modal-root');
  if (!root) return;

  const stage = campaignManager.getStage(stageId);
  if (!stage) return;

  const save = saveManager.getData();
  const mainHeroId = save.activeTeam1v1.mainHeroId;
  const backupHeroId = save.activeTeam1v1.backupHeroId;
  const mainMeta = HERO_MAP.get(mainHeroId);
  const backupMeta = HERO_MAP.get(backupHeroId);

  root.innerHTML = renderStageBriefingModalHtml(stage, save, Boolean(onNavigateToElements));

  // Bind modal actions
  const closeModal = () => {
    root.innerHTML = '';
  };

  root.querySelector('#btn-close-stage-modal')?.addEventListener('click', closeModal);
  root.querySelector('#btn-cancel-briefing')?.addEventListener('click', closeModal);
  root.querySelector('#stage-modal-backdrop')?.addEventListener('click', e => {
    if ((e.target as HTMLElement).id === 'stage-modal-backdrop') closeModal();
  });

  // 1. สลับตัวหลัก ⇋ ตัวสำรองทันที
  root.querySelector('#btn-swap-main-backup')?.addEventListener('click', () => {
    saveManager.setActiveTeam1v1(backupHeroId, mainHeroId);
    showToast(`🔄 สลับตำแหน่งสำเร็จ: [${backupMeta?.name}] ขึ้นเป็นตัวหลัก!`, 'info');
    openStageDetailModal(container, stageId, onStartBattle, onNavigateToHeroes, onNavigateToElements);
  });

  // 2. เปิดหน้าต่างเลือกฮีโร่ด่วน (Quick Selector)
  root.querySelector('#btn-open-quick-selector')?.addEventListener('click', () => {
    openQuickHeroSelectorModal(container, stageId, 'any', onStartBattle, onNavigateToHeroes, onNavigateToElements);
  });

  // 3. คลิกปุ่มเปลี่ยนตัวหลัก หรือเปลี่ยนตัวสำรอง
  root.querySelectorAll('.btn-quick-change-hero').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slot = (btn as HTMLElement).dataset.slot as 'main' | 'backup';
      openQuickHeroSelectorModal(container, stageId, slot || 'main', onStartBattle, onNavigateToHeroes, onNavigateToElements);
    });
  });

  // 4. คลิกที่ตัวการ์ดเพื่อเปลี่ยนตัว
  root.querySelectorAll('.clickable-hero-brief').forEach(card => {
    card.addEventListener('click', (e) => {
      // หากคลิกที่ปุ่มอยู่แล้วไม่ต้องเปิดซ้ำ
      if ((e.target as HTMLElement).closest('.btn-quick-change-hero')) return;
      const slot = (card as HTMLElement).dataset.slot as 'main' | 'backup';
      openQuickHeroSelectorModal(container, stageId, slot || 'main', onStartBattle, onNavigateToHeroes, onNavigateToElements);
    });
  });

  // 5. ปุ่มไปหน้าคลังสัตว์เลี้ยง
  root.querySelector('#btn-goto-heroes')?.addEventListener('click', () => {
    closeModal();
    onNavigateToHeroes();
  });

  // 6. ปุ่มตารางธาตุ
  root.querySelector('#btn-briefing-elements')?.addEventListener('click', () => {
    closeModal();
    if (onNavigateToElements) onNavigateToElements();
  });

  // 7. ปุ่มเริ่มต่อสู้
  root.querySelector('#btn-start-battle-confirmed')?.addEventListener('click', () => {
    closeModal();
    onStartBattle(stageId);
  });
}

/**
 * Modal เลือกฮีโร่จัดทัพด่วนในหน้าเมนูก่อนเริ่มสู้ (Quick Team / Hero Selector)
 * ช่วยให้ผู้เล่นเปลี่ยนตัวหลัก/ตัวสำรองได้ในคลิกเดียว พร้อมแสดงข้อมูลการแพ้ชนะธาตุของด่านนั้น
 */
function openQuickHeroSelectorModal(
  container: HTMLElement,
  stageId: string,
  targetSlot: 'main' | 'backup' | 'any',
  onStartBattle: (stageId: string) => void,
  onNavigateToHeroes: () => void,
  onNavigateToElements?: () => void
) {
  const root = container.querySelector('#quick-team-selector-root') || document.body;
  const save = saveManager.getData();
  const stage = campaignManager.getStage(stageId);
  if (!stage) return;

  const currentMainId = save.activeTeam1v1.mainHeroId;
  const currentBackupId = save.activeTeam1v1.backupHeroId;

  // ศัตรูตัวหลัก (index 0) และ ศัตรูตัวสำรอง (index 1 ถ้ามี)
  const firstEnemy = stage.enemies[0];
  const firstEnemyMeta = firstEnemy ? (HERO_MAP.get(firstEnemy.heroId) || ENEMY_MAP.get(firstEnemy.heroId)) : null;
  const enemyElem = firstEnemyMeta ? ELEMENT_MAP.get(firstEnemyMeta.element) : null;
  const enemyName = firstEnemyMeta?.name || firstEnemy?.heroId;

  const secondEnemy = stage.enemies.length > 1 ? stage.enemies[1] : null;
  const secondEnemyMeta = secondEnemy ? (HERO_MAP.get(secondEnemy.heroId) || ENEMY_MAP.get(secondEnemy.heroId)) : null;
  const secondEnemyElem = secondEnemyMeta ? ELEMENT_MAP.get(secondEnemyMeta.element) : null;
  const secondEnemyName = secondEnemyMeta?.name || secondEnemy?.heroId;
  const hasTwoEnemies = Boolean(secondEnemy && secondEnemyMeta);

  // รวบรวมฮีโร่ทั้งหมดที่ผู้เล่นเป็นเจ้าของ
  const ownedHeroIds = Object.keys(save.ownedHeroes);

  interface HeroOption {
    heroId: string;
    name: string;
    rarity: string;
    element: string;
    elemMeta: ReturnType<typeof ELEMENT_MAP.get> | null | undefined;
    role: string;
    level: number;
    stars: number;
    mult: number;
    matchupClass: 'adv' | 'dis' | 'neu';
    matchupText: string;
    backupMult: number;
    backupMatchupClass: 'adv' | 'dis' | 'neu';
    backupMatchupText: string;
    cardStateClass: string;
    isMain: boolean;
    isBackup: boolean;
  }

  const heroOptions: HeroOption[] = ownedHeroIds.map(hId => {
    const meta = HERO_MAP.get(hId);
    const data = save.ownedHeroes[hId];
    const el = meta ? ELEMENT_MAP.get(meta.element) : null;

    // เปรียบเทียบกับศัตรูตัวหลัก (Enemy Main)
    const mult = meta && firstEnemyMeta ? getElementMultiplier(meta.element, firstEnemyMeta.element, 'A', 'actual') : 1.0;
    let matchupClass: 'adv' | 'dis' | 'neu' = 'neu';
    let matchupText = '⚪ สมดุล (1.0x)';
    if (mult > 1) {
      matchupClass = 'adv';
      matchupText = hasTwoEnemies ? `🟢 ชนะ (+${Math.round((mult - 1) * 100)}%)` : `🟢 ชนะธาตุ (+${Math.round((mult - 1) * 100)}% ดาเมจ)`;
    } else if (mult < 1) {
      matchupClass = 'dis';
      matchupText = hasTwoEnemies ? `🔴 แพ้ (-${Math.round((1 - mult) * 100)}%)` : `🔴 แพ้ธาตุ (-${Math.round((1 - mult) * 100)}% ดาเมจ)`;
    } else {
      matchupText = hasTwoEnemies ? '⚪ สมดุล' : '⚪ สมดุล (1.0x)';
    }

    // เปรียบเทียบกับศัตรูตัวสำรอง (Enemy Backup - ถ้ามี)
    const backupMult = meta && secondEnemyMeta ? getElementMultiplier(meta.element, secondEnemyMeta.element, 'A', 'actual') : 1.0;
    let backupMatchupClass: 'adv' | 'dis' | 'neu' = 'neu';
    let backupMatchupText = '⚪ สมดุล';
    if (backupMult > 1) {
      backupMatchupClass = 'adv';
      backupMatchupText = `🟢 ชนะ (+${Math.round((backupMult - 1) * 100)}%)`;
    } else if (backupMult < 1) {
      backupMatchupClass = 'dis';
      backupMatchupText = `🔴 แพ้ (-${Math.round((1 - backupMult) * 100)}%)`;
    }

    // กำหนดสถานะสีขอบการ์ดตามสล็อตเป้าหมาย
    let cardStateClass = '';
    if (hasTwoEnemies) {
      if (targetSlot === 'backup') {
        cardStateClass = backupMatchupClass === 'adv' ? 'has-advantage' : backupMatchupClass === 'dis' ? 'has-disadvantage' : '';
      } else if (targetSlot === 'main') {
        cardStateClass = matchupClass === 'adv' ? 'has-advantage' : matchupClass === 'dis' ? 'has-disadvantage' : '';
      } else {
        if (matchupClass === 'adv' || backupMatchupClass === 'adv') {
          cardStateClass = 'has-advantage';
        } else if (matchupClass === 'dis' && backupMatchupClass === 'dis') {
          cardStateClass = 'has-disadvantage';
        }
      }
    } else {
      cardStateClass = matchupClass === 'adv' ? 'has-advantage' : matchupClass === 'dis' ? 'has-disadvantage' : '';
    }

    return {
      heroId: hId,
      name: meta?.name || hId,
      rarity: meta?.rarity || 'B',
      element: meta?.element || 'fire',
      elemMeta: el,
      role: meta?.role || 'Fighter',
      level: data?.level || 1,
      stars: data?.stars || 1,
      mult,
      matchupClass,
      matchupText,
      backupMult,
      backupMatchupClass,
      backupMatchupText,
      cardStateClass,
      isMain: hId === currentMainId,
      isBackup: hId === currentBackupId,
    };
  });

  // เรียงลำดับ: ฮีโร่ที่ชนะธาตุขึ้นก่อน (จัดตามสล็อตเป้าหมายหรือคะแนนรวม) ตามด้วยฮีโร่ในทีมปัจจุบัน แล้วตามด้วยเลเวล
  heroOptions.sort((a, b) => {
    if (hasTwoEnemies) {
      if (targetSlot === 'backup') {
        if (a.backupMult !== b.backupMult) return b.backupMult - a.backupMult;
        if (a.mult !== b.mult) return b.mult - a.mult;
      } else if (targetSlot === 'main') {
        if (a.mult !== b.mult) return b.mult - a.mult;
        if (a.backupMult !== b.backupMult) return b.backupMult - a.backupMult;
      } else {
        const scoreA = a.mult * 2 + a.backupMult;
        const scoreB = b.mult * 2 + b.backupMult;
        if (scoreA !== scoreB) return scoreB - scoreA;
      }
    } else {
      if (a.mult !== b.mult) return b.mult - a.mult;
    }
    const aInTeam = a.isMain || a.isBackup ? 1 : 0;
    const bInTeam = b.isMain || b.isBackup ? 1 : 0;
    if (aInTeam !== bInTeam) return bInTeam - aInTeam;
    return b.level - a.level;
  });

  const slotTitle = targetSlot === 'main' ? 'เลือกตัวหลัก (Main)' : targetSlot === 'backup' ? 'เลือกตัวสำรอง (Backup)' : 'จัดทัพฮีโร่';

  const modalEl = document.createElement('div');
  modalEl.className = 'quick-hero-selector-overlay';
  modalEl.id = 'quick-hero-selector-backdrop';
  modalEl.innerHTML = `
    <div class="quick-hero-selector-modal">
      <div class="quick-selector-header">
        <div>
          <h3 class="quick-selector-title">👥 จัดทัพด่วน: ${slotTitle}</h3>
          <div class="quick-selector-subtitle">
            ${hasTwoEnemies ? `
              <div style="display:flex; flex-wrap:wrap; align-items:center; gap:6px; margin-top:2px;">
                <span style="color:#d5c5b5;">เผชิญหน้า:</span>
                <span class="quick-enemy-tag main" title="ศัตรูตัวหลัก">
                  ⚔️ ตัวหลัก: <strong style="color:${enemyElem?.color || '#ffd54f'};">${enemyName}</strong> (${enemyElem?.icon || ''} ธาตุ${enemyElem?.name || ''})
                </span>
                <span class="quick-enemy-tag backup" title="ศัตรูตัวสำรอง">
                  🛡️ ตัวสำรอง: <strong style="color:${secondEnemyElem?.color || '#ffd54f'};">${secondEnemyName}</strong> (${secondEnemyElem?.icon || ''} ธาตุ${secondEnemyElem?.name || ''})
                </span>
              </div>
            ` : `
              เผชิญหน้า: <strong style="color:${enemyElem?.color || '#fff'}">${enemyName} (ธาตุ${enemyElem?.name || ''} ${enemyElem?.icon || ''})</strong> — เลือกฮีโร่ชนะธาตุเพื่อรับโบนัสดาเมจ +30%!
            `}
          </div>
        </div>
        <button class="modal-close-btn" id="btn-close-quick-selector">✕</button>
      </div>

      <div class="quick-hero-list-scroll">
        ${heroOptions.map(opt => `
          <div class="quick-hero-card ${opt.cardStateClass}">
            <div class="quick-hero-card-left">
              <div class="quick-hero-avatar-wrap" style="border-color:${opt.elemMeta?.color || '#5a4332'};">
                <span class="quick-hero-rarity rarity-${opt.rarity}">${opt.rarity}</span>
                <span>${opt.elemMeta?.icon || '🐾'}</span>
              </div>
              <div class="quick-hero-info">
                <div class="quick-hero-name-row">
                  <span class="quick-hero-name">${opt.name}</span>
                  <span class="quick-hero-lvl">Lv.${opt.level}</span>
                  <span class="quick-hero-stars">${'★'.repeat(opt.stars)}</span>
                  ${opt.isMain ? '<span class="quick-hero-active-tag is-main">⚔️ ตัวหลัก</span>' : ''}
                  ${opt.isBackup ? '<span class="quick-hero-active-tag is-backup">🛡️ ตัวสำรอง</span>' : ''}
                </div>
                <div class="quick-hero-meta-row">
                  <span style="color:${opt.elemMeta?.color || '#ffd54f'};">ธาตุ${opt.elemMeta?.name}</span>
                  <span>•</span>
                  <span>สาย ${opt.role}</span>
                  <span>•</span>
                  ${hasTwoEnemies ? `
                    <span class="hero-matchup-pill ${opt.matchupClass}" title="เปรียบเทียบกับศัตรูตัวหลัก: ${enemyName}">
                      <span class="matchup-slot-label">⚔️ตัวหลัก:</span> ${opt.matchupText}
                    </span>
                    <span class="hero-matchup-pill ${opt.backupMatchupClass}" title="เปรียบเทียบกับศัตรูตัวสำรอง: ${secondEnemyName}">
                      <span class="matchup-slot-label">🛡️ตัวสำรอง:</span> ${opt.backupMatchupText}
                    </span>
                  ` : `
                    <span class="hero-matchup-pill ${opt.matchupClass}">${opt.matchupText}</span>
                  `}
                </div>
              </div>
            </div>

            <div class="quick-hero-card-right">
              ${targetSlot === 'main' ? `
                <button class="btn btn-xs ${opt.isMain ? 'btn-outline-disabled' : 'btn-success'} btn-apply-hero" data-hero-id="${opt.heroId}" data-target-slot="main" ${opt.isMain ? 'disabled' : ''}>
                  ${opt.isMain ? '✓ ตัวหลักอยู่แล้ว' : '⚔️ เลือกเป็นตัวหลัก'}
                </button>
              ` : targetSlot === 'backup' ? `
                <button class="btn btn-xs ${opt.isBackup ? 'btn-outline-disabled' : 'btn-primary'} btn-apply-hero" data-hero-id="${opt.heroId}" data-target-slot="backup" ${opt.isBackup ? 'disabled' : ''}>
                  ${opt.isBackup ? '✓ ตัวสำรองอยู่แล้ว' : '🛡️ เลือกเป็นตัวสำรอง'}
                </button>
              ` : `
                <button class="btn btn-xs ${opt.isMain ? 'btn-outline-disabled' : 'btn-success'} btn-apply-hero" data-hero-id="${opt.heroId}" data-target-slot="main" ${opt.isMain ? 'disabled' : ''} title="ตั้งเป็นตัวหลัก">
                  ${opt.isMain ? '✓ ตัวหลัก' : '⚔️ ตัวหลัก'}
                </button>
                <button class="btn btn-xs ${opt.isBackup ? 'btn-outline-disabled' : 'btn-primary'} btn-apply-hero" data-hero-id="${opt.heroId}" data-target-slot="backup" ${opt.isBackup ? 'disabled' : ''} title="ตั้งเป็นตัวสำรอง">
                  ${opt.isBackup ? '✓ ตัวสำรอง' : '🛡️ ตัวสำรอง'}
                </button>
              `}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="quick-selector-footer">
        <button class="btn btn-sm btn-outline" id="btn-cancel-quick-selector">ปิดหน้าต่าง</button>
      </div>
    </div>
  `;

  root.appendChild(modalEl);

  const closeQuickSelector = () => {
    modalEl.remove();
  };

  modalEl.querySelector('#btn-close-quick-selector')?.addEventListener('click', closeQuickSelector);
  modalEl.querySelector('#btn-cancel-quick-selector')?.addEventListener('click', closeQuickSelector);
  modalEl.addEventListener('click', e => {
    if ((e.target as HTMLElement).id === 'quick-hero-selector-backdrop') closeQuickSelector();
  });

  modalEl.querySelectorAll('.btn-apply-hero').forEach(btn => {
    btn.addEventListener('click', () => {
      const heroId = (btn as HTMLElement).dataset.heroId;
      const slot = (btn as HTMLElement).dataset.targetSlot as 'main' | 'backup';
      if (!heroId) return;

      let newMain = currentMainId;
      let newBackup = currentBackupId;

      if (slot === 'main') {
        if (heroId === currentBackupId) {
          // สลับตัวสำรองขึ้นเป็นตัวหลัก ตัวหลักเดิมลงเป็นตัวสำรอง
          newMain = heroId;
          newBackup = currentMainId;
        } else {
          newMain = heroId;
        }
      } else {
        if (heroId === currentMainId) {
          // สลับตัวหลักลงเป็นตัวสำรอง ตัวสำรองเดิมขึ้นเป็นตัวหลัก
          newBackup = heroId;
          newMain = currentBackupId;
        } else {
          newBackup = heroId;
        }
      }

      const res = saveManager.setActiveTeam1v1(newMain, newBackup);
      if (res.success) {
        const mName = HERO_MAP.get(newMain)?.name || newMain;
        const bName = HERO_MAP.get(newBackup)?.name || newBackup;
        showToast(`⚔️ จัดทัพสำเร็จ! ตัวหลัก: [${mName}], ตัวสำรอง: [${bName}]`, 'success');
        closeQuickSelector();
        openStageDetailModal(container, stageId, onStartBattle, onNavigateToHeroes, onNavigateToElements);
      } else {
        showToast(res.error || 'ไม่สามารถจัดทัพได้', 'error');
      }
    });
  });
}

/**
 * แสดง Modal สรุปผลการต่อสู้หลังจบด่าน (Victory / Defeat)
 */
export function showStageResultModal(
  container: HTMLElement,
  stageId: string,
  result: CampaignBattleResult,
  onNextStage: ((nextStageId: string) => void) | null,
  onReturnToStages: () => void,
  onRetryStage: (stageId: string) => void
) {
  const root = container.querySelector('#stage-result-modal-root') || document.body;
  const stage = campaignManager.getStage(stageId);
  if (!stage) return;

  const isWin = result.isVictory;
  const stars = result.stars;

  const starsHtml = [1, 2, 3].map(num => `
    <span class="res-star ${num <= stars ? 'active' : ''}">⭐</span>
  `).join('');

  const modalEl = document.createElement('div');
  modalEl.className = 'modal-backdrop';
  modalEl.innerHTML = `
    <div class="stage-result-modal ${isWin ? 'victory' : 'defeat'}">
      <div class="result-header">
        <div class="res-trophy">${isWin ? '🏆' : '💀'}</div>
        <h2 class="res-title">${isWin ? 'ชัยชนะเหนือมลทิน!' : 'พ่ายแพ้ในการรบ'}</h2>
        <div class="res-stage-name">ด่าน 1-${stage.stageNumber}: ${stage.name} (${result.rounds} เทิร์น)</div>
      </div>

      ${isWin ? `
        <div class="res-stars-row">
          ${starsHtml}
        </div>
        <div class="res-stars-checklist">
          <div class="check-item checked">✓ ชนะการต่อสู้ (+1 ⭐)</div>
          <div class="check-item ${result.rounds <= 15 ? 'checked' : 'failed'}">
            ${result.rounds <= 15 ? '✓' : '✕'} เอาชนะได้ภายใน 15 เทิร์น (+1 ⭐)
          </div>
          <div class="check-item ${stars === 3 ? 'checked' : 'failed'}">
            ${stars === 3 ? '✓' : '✕'} สมาชิกในทีมรอดชีวิตครบ 100% (+1 ⭐)
          </div>
        </div>

        <div class="res-rewards-box">
          <h4 style="color:var(--accent-gold); margin-bottom:8px;">🎁 รางวัลที่ได้รับเข้าคลัง:</h4>
          <div class="res-chips-list">
            ${result.rewardsGained.gold ? `<span class="rw-chip">🪙 +${result.rewardsGained.gold} Gold</span>` : ''}
            ${result.rewardsGained.food ? `<span class="rw-chip">🍖 +${result.rewardsGained.food} Food</span>` : ''}
            ${result.rewardsGained.crystals ? `<span class="rw-chip">💎 +${result.rewardsGained.crystals} Crystals</span>` : ''}
            ${result.rewardsGained.warmth ? `<span class="rw-chip">🔥 +${result.rewardsGained.warmth} Warmth</span>` : ''}
            ${result.rewardsGained.egg ? `<span class="rw-chip gold-egg">🥚 ได้รับไข่${result.rewardsGained.egg === 'gold' ? 'ทองคำ' : 'ธรรมดา'}!</span>` : ''}
            ${result.rewardsGained.elementStone ? `<span class="rw-chip stone">💎 หินธาตุ [${result.rewardsGained.elementStone}]</span>` : ''}
            ${result.rewardsGained.shards ? Object.entries(result.rewardsGained.shards).map(([hId, amt]) => `<span class="rw-chip shard">🧩 เศษวิญญาณ [${hId}] ×${amt}</span>`).join('') : ''}
          </div>
        </div>

        ${result.isFirstClear ? `
          <div class="res-dialogue-victory">
            "${stage.storyDialogue.victory}"
          </div>
        ` : ''}
      ` : `
        <div class="res-defeat-hint">
          <strong>💡 เคล็ดลับการวางแผน:</strong><br/>
          ${stage.tutorialGuide?.[0] || 'ศึกษาธาตุที่แพ้ทางและจัดชุดสกิลให้เหมาะสม'}<br/>
          ลองอัปเลเวลฮีโร่ในหน้าสัตว์เลี้ยง หรือปรับเปลี่ยนสกิลข้ามสายเพื่อแก้ทางธาตุศัตรู!
        </div>
      `}

      <div class="result-actions">
        <button class="btn btn-outline" id="btn-res-return">🗺️ กลับหน้าด่าน</button>
        <button class="btn btn-outline" id="btn-res-retry">🔄 สู้ใหม่อีกครั้ง</button>
        ${isWin && stage.nextStageId ? `
          <button class="btn btn-primary" id="btn-res-next">⏩ ด่านถัดไป (1-${stage.stageNumber + 1})</button>
        ` : ''}
      </div>
    </div>
  `;

  document.body.appendChild(modalEl);

  const cleanModal = () => {
    modalEl.remove();
  };

  modalEl.querySelector('#btn-res-return')?.addEventListener('click', () => {
    cleanModal();
    onReturnToStages();
  });

  modalEl.querySelector('#btn-res-retry')?.addEventListener('click', () => {
    cleanModal();
    onRetryStage(stageId);
  });

  modalEl.querySelector('#btn-res-next')?.addEventListener('click', () => {
    cleanModal();
    if (stage.nextStageId && onNextStage) {
      onNextStage(stage.nextStageId);
    } else {
      onReturnToStages();
    }
  });
}
