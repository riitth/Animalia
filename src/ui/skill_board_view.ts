/**
 * Skill Board & Presets View (Phase 2 - Task 2.3 & 2.4 - Responsive Compact Icons)
 * หน้าจอกระดานสกิล 12 แถวธาตุ แบบไอคอนเล็กกะทัดรัด ประหยัดพื้นที่หน้าจอ
 * รองรับ Desktop, Smartphone และ Tablet พร้อม Tooltip และ Detail Modal
 */

import { skillBoardManager, SkillRow, SkillBoardItem, NEUTRAL_BRANCHES } from '../engine/skill_board_manager';
import { saveManager } from '../engine/save_manager';
import { getAllHeroes, getAllElements } from '../engine/combat';
import { showToast } from './toast';

const HERO_MAP = new Map(getAllHeroes().map(h => [h.id, h]));
const ELEMENT_MAP = new Map(getAllElements().map(e => [e.id, e]));

// ============================================================================
// MMORPG Skill Board View State Architecture (Phase 1)
// ============================================================================
export type SkillCategoryFilter = 'all' | 'element' | 'neutral';

export interface SkillBoardViewState {
  selectedBranchId: string;
  selectedSkillId: string | null;
  selectedHeroId: string | null;
  categoryFilter: SkillCategoryFilter;
  savedScrollTop: number;
  savedNavScrollTop: number;
}

const skillBoardViewState: SkillBoardViewState = {
  selectedBranchId: 'fire',
  selectedSkillId: 'fire_s',
  selectedHeroId: null,
  categoryFilter: 'all',
  savedScrollTop: 0,
  savedNavScrollTop: 0,
};

export function getSkillBoardViewState(): Readonly<SkillBoardViewState> {
  return skillBoardViewState;
}

export function setSkillBoardBranch(branchId: string): void {
  const rows = skillBoardManager.getAllRows();
  const exists = rows.some(r => r.elementId === branchId);
  skillBoardViewState.selectedBranchId = exists ? branchId : 'fire';

  // Auto-select first skill of the newly selected branch for immediate detail panel preview
  const branchRow = rows.find(r => r.elementId === skillBoardViewState.selectedBranchId);
  if (branchRow && branchRow.skills.length > 0) {
    skillBoardViewState.selectedSkillId = branchRow.skills[0].id;
  }
}

export function setSkillBoardSelectedSkill(skillId: string | null): void {
  skillBoardViewState.selectedSkillId = skillId;
  if (skillId) {
    const sk = skillBoardManager.getSkill(skillId);
    if (sk && sk.branch && sk.branch !== skillBoardViewState.selectedBranchId) {
      skillBoardViewState.selectedBranchId = sk.branch;
    }
  }
}

export function setSkillBoardSelectedHero(heroId: string | null): void {
  skillBoardViewState.selectedHeroId = heroId;
}

export function setSkillBoardCategoryFilter(filter: SkillCategoryFilter): void {
  skillBoardViewState.categoryFilter = filter;
}

export function saveSkillBoardScroll(scrollTop: number): void {
  skillBoardViewState.savedScrollTop = scrollTop;
}

export function resetSkillBoardViewState(): void {
  skillBoardViewState.selectedBranchId = 'fire';
  skillBoardViewState.selectedSkillId = 'fire_s';
  skillBoardViewState.selectedHeroId = null;
  skillBoardViewState.categoryFilter = 'all';
  skillBoardViewState.savedScrollTop = 0;
  skillBoardViewState.savedNavScrollTop = 0;
}

/**
 * ดึงข้อมูลชื่อสายวิชา ไอคอน สี และหมวดหมู่สำหรับแสดงผล Branch Navigation & Tree
 */
export function getBranchVisuals(row: SkillRow): { name: string; icon: string; color: string; categoryName: string } {
  if (row.category === 'neutral') {
    switch (row.elementId) {
      case 'martial': return { name: 'กระบวนท่า', icon: '🥋', color: '#ffcc80', categoryName: 'ไร้ธาตุ' };
      case 'medical': return { name: 'พยาบาล', icon: '💚', color: '#a5d6a7', categoryName: 'ไร้ธาตุ' };
      case 'trick': return { name: 'เล่ห์กล', icon: '🎭', color: '#ce93d8', categoryName: 'ไร้ธาตุ' };
      case 'catalyst': return { name: 'เร่งประจุ', icon: '⚡', color: '#81d4fa', categoryName: 'ไร้ธาตุ' };
      case 'secret': return { name: 'วิชาลับ', icon: '📜', color: '#ffe082', categoryName: 'ไร้ธาตุ' };
      case 'defense': return { name: 'ป้องกัน', icon: '🛡️', color: '#90caf9', categoryName: 'ไร้ธาตุ' };
      default: return { name: row.name, icon: row.icon, color: '#e0e0e0', categoryName: 'ไร้ธาตุ' };
    }
  }
  const el = ELEMENT_MAP.get(row.elementId);
  return {
    name: `ธาตุ${el?.name || row.elementId}`,
    icon: el?.icon || row.icon || '✨',
    color: el?.color || '#ffd54f',
    categoryName: 'ธาตุ',
  };
}

/**
 * Render MMORPG Skill Branch Navigation (Left Panel)
 */
export function renderSkillBranchNavHtml(
  rows: SkillRow[],
  activeBranchId: string,
  categoryFilter: SkillCategoryFilter,
  save: any
): string {
  const unlockedCount = rows.filter(r => r.isUnlocked).length;
  const elementCount = rows.filter(r => r.category === 'element').length;
  const neutralCount = rows.filter(r => r.category === 'neutral').length;

  const filteredRows = rows.filter(r => {
    if (categoryFilter === 'element') return r.category === 'element';
    if (categoryFilter === 'neutral') return r.category === 'neutral';
    return true;
  });

  return `
    <nav class="skill-branch-nav-panel" aria-label="Skill Branch Navigation">
      <div class="branch-nav-header">
        <div class="branch-nav-title-box">
          <span class="branch-nav-icon">🧭</span>
          <div>
            <h4 class="branch-nav-heading">16 สายวิชา (Skill Mastery)</h4>
            <div class="branch-nav-stats">ปลดล็อกแล้ว <span class="stats-highlight">${unlockedCount}</span> / ${rows.length} สาย</div>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="branch-filter-tabs" role="tablist">
          <button 
            type="button" 
            class="branch-filter-btn ${categoryFilter === 'all' ? 'active' : ''}" 
            data-filter="all"
            role="tab"
            aria-selected="${categoryFilter === 'all'}"
          >
            ทั้งหมด (${rows.length})
          </button>
          <button 
            type="button" 
            class="branch-filter-btn ${categoryFilter === 'element' ? 'active' : ''}" 
            data-filter="element"
            role="tab"
            aria-selected="${categoryFilter === 'element'}"
          >
            ธาตุ (${elementCount})
          </button>
          <button 
            type="button" 
            class="branch-filter-btn ${categoryFilter === 'neutral' ? 'active' : ''}" 
            data-filter="neutral"
            role="tab"
            aria-selected="${categoryFilter === 'neutral'}"
          >
            ไร้ธาตุ (${neutralCount})
          </button>
        </div>
      </div>

      <!-- Branch Items List -->
      <div class="skill-branch-nav-list" role="listbox">
        ${filteredRows.map(row => {
          const isSelected = row.elementId === activeBranchId;
          const visuals = getBranchVisuals(row);
          const learnedCount = row.skills.filter(s => s.isUnlocked).length;
          const totalSkills = row.skills.length;
          const isUnlocked = row.isUnlocked;
          const stonesOwned = save.inventory?.elementStones?.[row.elementId] || 0;
          const canUnlock = !isUnlocked && skillBoardManager.canUnlockRow(row.elementId).canUnlock;

          return `
            <div 
              class="skill-branch-nav-item ${isSelected ? 'is-selected' : ''} ${isUnlocked ? 'is-unlocked' : 'is-locked'}"
              data-branch-id="${row.elementId}"
              role="option"
              aria-selected="${isSelected}"
              tabindex="0"
              title="${visuals.name} (${visuals.categoryName}) - ${isUnlocked ? `เรียนแล้ว ${learnedCount}/${totalSkills}` : 'ยังไม่ปลดล็อก'}"
            >
              <div class="branch-icon-box" style="border-color: ${visuals.color}; box-shadow: 0 0 8px ${visuals.color}33;">
                <span class="branch-icon-symbol">${visuals.icon}</span>
                <span class="branch-type-pill" style="background: ${visuals.color}22; color: ${visuals.color};">${visuals.categoryName}</span>
              </div>

              <div class="branch-info-col">
                <div class="branch-name-row">
                  <span class="branch-name" style="color: ${isSelected ? visuals.color : '#fff'};">${visuals.name}</span>
                  ${isSelected ? '<span class="branch-active-indicator">◀</span>' : ''}
                </div>
                <div class="branch-progress-bar-wrap">
                  <div class="branch-progress-bar" style="width: ${(learnedCount / totalSkills) * 100}%; background-color: ${visuals.color};"></div>
                </div>
                <div class="branch-progress-meta">
                  <span class="learned-counter">${isUnlocked ? `เรียนแล้ว ${learnedCount}/${totalSkills}` : 'ล็อกอยู่'}</span>
                  ${isUnlocked && learnedCount === totalSkills ? '<span class="mastered-tag">⭐ ครบ</span>' : ''}
                </div>
              </div>

              <div class="branch-status-box">
                ${isUnlocked ? `
                  <span class="badge-branch-unlocked" title="สายวิชานี้เปิดใช้งานแล้ว">✓</span>
                ` : canUnlock ? `
                  <button 
                    type="button" 
                    class="btn-unlock-branch-quick" 
                    data-branch-id="${row.elementId}" 
                    title="คลิกเพื่อปลดล็อกสายวิชานี้ทันที (ใช้หิน 3 ก้อน)"
                  >
                    🔓 ปลด
                  </button>
                ` : `
                  <span class="badge-branch-locked" title="ต้องการหินธาตุ 3 ชิ้น (มี ${stonesOwned}/3)">
                    🔒 ${stonesOwned}/3
                  </span>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </nav>
  `;
}

export interface BranchTreeSkills {
  tier1: SkillBoardItem;
  tier2Upper: SkillBoardItem;
  tier2Lower: SkillBoardItem;
  tier3Upper: SkillBoardItem;
  tier3Lower: SkillBoardItem;
}

/**
 * จัดกลุ่ม 5 สกิลของสายวิชาให้ตรงตามตำแหน่ง 3 Tiers ของ MMORPG Skill Tree:
 * - Tier 1: Basic (S) - จุดเริ่มต้นรากฐาน
 * - Tier 2 บน: Advanced 1 (M1)
 * - Tier 2 ล่าง: Advanced 2 (M2)
 * - Tier 3 บน: Master Single Target (L)
 * - Tier 3 ล่าง: Master AOE / Team Utility (AOE หรือ M3)
 */
export function organizeBranchSkills(skills: SkillBoardItem[]): BranchTreeSkills {
  const s = skills.find(sk => sk.tier === 'S') || skills[0];
  const remaining = skills.filter(sk => sk.id !== s.id);
  const m1 = remaining.find(sk => sk.id.endsWith('_m1')) || remaining[0];
  const m2 = remaining.find(sk => sk.id.endsWith('_m2')) || remaining[1];
  const l = remaining.find(sk => sk.id.endsWith('_l')) || remaining[2];
  const aoe = remaining.find(sk => sk.id.endsWith('_aoe') || sk.id.endsWith('_m3')) || remaining[3];

  return {
    tier1: s,
    tier2Upper: m1,
    tier2Lower: m2,
    tier3Upper: l,
    tier3Lower: aoe,
  };
}

/**
 * Render MMORPG Skill Tree Node (Node แต่ละปมในต้นไม้สกิล)
 */
export function renderSkillTreeNodeHtml(
  sk: SkillBoardItem,
  isRowUnlocked: boolean,
  currentHeroEquippedSkills: string[],
  selectedSkillId: string | null,
  visuals: { name: string; icon: string; color: string; categoryName: string }
): string {
  const isUnlocked = sk.isUnlocked;
  const equippedSlotIdx = currentHeroEquippedSkills.indexOf(sk.id);
  const isEquipped = equippedSlotIdx !== -1;
  const isSelected = sk.id === selectedSkillId;

  // Prerequisite & resource checks
  const canUnlockCheck = isRowUnlocked && !isUnlocked && skillBoardManager.canUnlockSkill(sk.id);
  const canUnlock = canUnlockCheck ? canUnlockCheck.canUnlock : false;
  const canLevelUpCheck = isUnlocked && sk.level < 5 && skillBoardManager.canLevelUpSkill(sk.id);
  const canLevelUp = canLevelUpCheck ? canLevelUpCheck.canLevelUp : false;
  const hasNotice = canUnlock || canLevelUp;
  const isMaxLevel = isUnlocked && sk.level >= 5;

  const levelMult = skillBoardManager.getSkillLevelDamageMultiplier(sk.id);
  const tooltipText = `${sk.name} [Tier ${sk.tier}] | SP ${sk.spCost} | ดาเมจ ×${(sk.damageMult * levelMult).toFixed(2)}\n${sk.description}`;

  // Border & Glow styling
  let nodeBorderColor = '#3a2d22';
  if (isSelected) {
    nodeBorderColor = '#ffd54f';
  } else if (isEquipped) {
    nodeBorderColor = '#81c784';
  } else if (canUnlock) {
    nodeBorderColor = '#ffd54f';
  } else if (isUnlocked) {
    nodeBorderColor = visuals.color;
  }

  const nodeClasses = [
    'skill-tree-node',
    `tier-${sk.tier}`,
    isUnlocked ? 'is-unlocked' : 'is-locked',
    isEquipped ? 'is-equipped' : '',
    isSelected ? 'is-selected' : '',
    canUnlock ? 'can-unlock' : '',
    canLevelUp ? 'can-level-up' : '',
    isMaxLevel ? 'is-max-level' : '',
  ].filter(Boolean).join(' ');

  return `
    <div 
      class="${nodeClasses}"
      data-skill-id="${sk.id}"
      data-tier="${sk.tier}"
      data-branch-id="${sk.element === 'neutral' ? sk.branch : sk.element}"
      tabindex="0"
      role="button"
      aria-label="${sk.name}"
      title="${tooltipText}"
    >
      <!-- Top Bar: Tier & Notice / Slot -->
      <div class="tree-node-top-bar">
        <span class="node-tier-tag tier-${sk.tier}">${sk.tier}</span>
        ${hasNotice ? '<span class="node-notice-sparkle" title="พร้อมปลดล็อก/อัปเกรด!">✨</span>' : ''}
        ${isEquipped ? `<span class="node-slot-tag" title="ติดตั้งอยู่ในช่องที่ ${equippedSlotIdx + 1}">ช่อง ${equippedSlotIdx + 1}</span>` : ''}
      </div>

      <!-- Center Skill Icon Avatar -->
      <div class="tree-node-avatar" style="border-color: ${nodeBorderColor};">
        ${isUnlocked
          ? `<span class="node-avatar-emoji">${getSkillEmoji(sk)}</span>`
          : '<span class="node-avatar-lock">🔒</span>'
        }
      </div>

      <!-- Skill Name -->
      <div class="tree-node-name">${sk.name}</div>

      <!-- Bottom Bar: Status / Level & SP -->
      <div class="tree-node-bottom-bar">
        <span class="node-sp-badge">💧 ${sk.spCost}</span>
        ${isEquipped ? `
          <span class="node-status-tag equipped">ติดตั้งแล้ว</span>
        ` : isUnlocked ? (
          isMaxLevel
            ? '<span class="node-status-tag max">MAX</span>'
            : `<span class="node-status-tag level">Lv.${sk.level}</span>`
        ) : canUnlock ? (
          '<span class="node-status-tag available">พร้อมเรียน</span>'
        ) : (
          '<span class="node-status-tag locked">ล็อก</span>'
        )}
      </div>
    </div>
  `;
}

/**
 * Render MMORPG Skill Tree Center Panel (Center Column)
 */
export function renderSkillTreeCenterHtml(
  selectedRow: SkillRow,
  activeHeroSkills: string[],
  selectedSkillId: string | null = skillBoardViewState.selectedSkillId
): string {
  const visuals = getBranchVisuals(selectedRow);
  const learnedCount = selectedRow.skills.filter(s => s.isUnlocked).length;
  const totalCount = selectedRow.skills.length;
  const isUnlocked = selectedRow.isUnlocked;

  const treeSkills = organizeBranchSkills(selectedRow.skills);
  const s = treeSkills.tier1;
  const m1 = treeSkills.tier2Upper;
  const m2 = treeSkills.tier2Lower;
  const l = treeSkills.tier3Upper;
  const aoe = treeSkills.tier3Lower;

  const lineSM1Active = s.isUnlocked;
  const lineSM2Active = s.isUnlocked;
  const lineM1LActive = m1.isUnlocked;
  const lineM2AOEActive = m2.isUnlocked;

  return `
    <div class="skill-tree-center-panel" data-branch-id="${selectedRow.elementId}">
      <!-- Branch Hero Header Banner -->
      <div class="tree-branch-header" style="border-left-color: ${visuals.color};">
        <div class="tree-branch-header-left">
          <div class="tree-branch-avatar" style="border-color: ${visuals.color}; background: radial-gradient(circle, ${visuals.color}22 0%, #15110e 80%);">
            <span class="tree-branch-avatar-icon">${visuals.icon}</span>
          </div>
          <div class="tree-branch-header-text">
            <div class="tree-branch-title-row">
              <h3 class="tree-branch-title">${visuals.name}</h3>
              <span class="tree-branch-badge" style="color: ${visuals.color}; border-color: ${visuals.color}66;">
                ${visuals.categoryName === 'ธาตุ' ? 'Elemental Branch' : 'Neutral Art Branch'}
              </span>
              ${isUnlocked ? '<span class="tree-unlocked-pill">เปิดใช้งานแล้ว</span>' : '<span class="tree-locked-pill">🔒 ยังไม่ปลดล็อก</span>'}
            </div>
            <p class="tree-branch-desc">
              ${selectedRow.category === 'neutral' 
                ? (NEUTRAL_BRANCHES.find(n => n.id === selectedRow.elementId)?.description || 'วิชาสายไร้ธาตุความชำนาญสูง')
                : `สุดยอดศาสตร์วิชาประจำ${visuals.name} เพิ่มพลังโจมตีและคอมโบตามธาตุ`}
            </p>
          </div>
        </div>

        <div class="tree-branch-header-right">
          <div class="tree-progress-summary">
            <span class="tree-progress-label">ความเชี่ยวชาญสายวิชา</span>
            <span class="tree-progress-val" style="color: ${visuals.color};">${learnedCount} / ${totalCount} สกิล</span>
          </div>
          ${!isUnlocked ? `
            <button type="button" class="btn btn-gold btn-sm btn-unlock-row btn-unlock-branch-banner" data-element-id="${selectedRow.elementId}">
              🔓 ปลดล็อกสายนี้ (หิน 3 ชิ้น)
            </button>
          ` : ''}
        </div>
      </div>

      <!-- MMORPG Skill Tree View Area -->
      <div class="tree-nodes-container">
        <!-- Tier Guide Columns Header -->
        <div class="tree-tier-guide-bar">
          <div class="tier-col-label tier-s">Tier 1 • ท่าพื้นฐาน (Basic S)</div>
          <div class="tier-col-label tier-m">Tier 2 • ท่าขั้นกลาง (Advanced M1 / M2)</div>
          <div class="tier-col-label tier-l">Tier 3 • ท่าไม้ตาย / หมู่ (Master L / AOE)</div>
        </div>

        <!-- Tree Canvas Stage with SVG Connectors -->
        <div class="skill-tree-stage">
          <svg class="skill-tree-connections" viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <filter id="tree-glow-${selectedRow.elementId}" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Line: S -> M1 (Curve to upper) -->
            <path 
              d="M 150 180 C 200 180, 200 90, 250 90" 
              class="tree-connector-line ${lineSM1Active ? 'is-active' : 'is-muted'}"
              stroke="${lineSM1Active ? visuals.color : '#3a3028'}"
              stroke-width="${lineSM1Active ? '3.5' : '2'}"
              fill="none"
              ${lineSM1Active ? `filter="url(#tree-glow-${selectedRow.elementId})"` : 'stroke-dasharray="5 4" opacity="0.6"'}
            />

            <!-- Line: S -> M2 (Curve to lower) -->
            <path 
              d="M 150 180 C 200 180, 200 270, 250 270" 
              class="tree-connector-line ${lineSM2Active ? 'is-active' : 'is-muted'}"
              stroke="${lineSM2Active ? visuals.color : '#3a3028'}"
              stroke-width="${lineSM2Active ? '3.5' : '2'}"
              fill="none"
              ${lineSM2Active ? `filter="url(#tree-glow-${selectedRow.elementId})"` : 'stroke-dasharray="5 4" opacity="0.6"'}
            />

            <!-- Line: M1 -> L (Horizontal upper) -->
            <path 
              d="M 350 90 L 450 90" 
              class="tree-connector-line ${lineM1LActive ? 'is-active' : 'is-muted'}"
              stroke="${lineM1LActive ? visuals.color : '#3a3028'}"
              stroke-width="${lineM1LActive ? '3.5' : '2'}"
              fill="none"
              ${lineM1LActive ? `filter="url(#tree-glow-${selectedRow.elementId})"` : 'stroke-dasharray="5 4" opacity="0.6"'}
            />

            <!-- Line: M2 -> AOE (Horizontal lower) -->
            <path 
              d="M 350 270 L 450 270" 
              class="tree-connector-line ${lineM2AOEActive ? 'is-active' : 'is-muted'}"
              stroke="${lineM2AOEActive ? visuals.color : '#3a3028'}"
              stroke-width="${lineM2AOEActive ? '3.5' : '2'}"
              fill="none"
              ${lineM2AOEActive ? `filter="url(#tree-glow-${selectedRow.elementId})"` : 'stroke-dasharray="5 4" opacity="0.6"'}
            />
          </svg>

          <!-- Tree 3-Tier Grid Nodes -->
          <div class="skill-tree-grid">
            <!-- Tier 1: Basic (S) -->
            <div class="tree-col col-tier-1">
              ${renderSkillTreeNodeHtml(s, isUnlocked, activeHeroSkills, selectedSkillId, visuals)}
            </div>

            <!-- Tier 2: Advanced (M1, M2) -->
            <div class="tree-col col-tier-2">
              ${renderSkillTreeNodeHtml(m1, isUnlocked, activeHeroSkills, selectedSkillId, visuals)}
              ${renderSkillTreeNodeHtml(m2, isUnlocked, activeHeroSkills, selectedSkillId, visuals)}
            </div>

            <!-- Tier 3: Master (L, AOE) -->
            <div class="tree-col col-tier-3">
              ${renderSkillTreeNodeHtml(l, isUnlocked, activeHeroSkills, selectedSkillId, visuals)}
              ${renderSkillTreeNodeHtml(aoe, isUnlocked, activeHeroSkills, selectedSkillId, visuals)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render MMORPG Skill Detail Panel (Right Panel - Top, Phase 4)
 * แสดงข้อมูลสกิลที่เลือกอย่างละเอียดพร้อมปุ่ม Dynamic Action ตามสถานะ:
 * - ปลดล็อกสกิล
 * - อัปเลเวลสกิล
 * - ติดตั้ง/ถอดสกิลลงในช่องของฮีโร่ที่เลือก
 */
export function renderSkillDetailPanelHtml(
  selectedSkillId: string | null,
  activeHeroId: string,
  save: any
): string {
  const sk = (selectedSkillId ? skillBoardManager.getSkill(selectedSkillId) : null)
    || skillBoardManager.getSkill(skillBoardViewState.selectedSkillId || 'fire_s')
    || skillBoardManager.getSkill('fire_s')!;

  const branchInfo = getSkillBranchInfo(sk);
  const heroData = save.ownedHeroes[activeHeroId];
  const heroMeta = HERO_MAP.get(activeHeroId);
  const isUnlocked = sk.isUnlocked;
  const levelMult = skillBoardManager.getSkillLevelDamageMultiplier(sk.id);
  const currentDamageMult = sk.damageMult * (isUnlocked ? levelMult : 1.0);
  const equippedSlotIdx = heroData?.customSkills.indexOf(sk.id) ?? -1;
  const isEquipped = equippedSlotIdx !== -1;

  // Prerequisite Note
  let prereqNoteHtml = '';
  if (!isUnlocked && sk.prerequisiteSkillId) {
    const preSkill = skillBoardManager.getSkill(sk.prerequisiteSkillId);
    const hasPre = save.unlockedSkills.includes(sk.prerequisiteSkillId);
    prereqNoteHtml = `
      <div class="detail-prereq-alert ${hasPre ? 'cleared' : 'missing'}">
        <span>เงื่อนไขก่อนหน้า: ต้องการปลดล็อก [${preSkill?.name || sk.prerequisiteSkillId}]</span>
        <span>${hasPre ? '✅ ผ่าน' : '❌ ยังไม่ปลด'}</span>
      </div>
    `;
  }

  // Row status
  const rowId = sk.element === 'neutral' ? sk.branch : sk.element;
  const isRowUnlocked = save.unlockedElementRows.includes(rowId) ||
    save.unlockedElementRows.includes(sk.element) ||
    (sk.element === 'neutral' && save.unlockedElementRows.includes('neutral'));

  // Unlock and Level up statuses
  const unlockStatus = isRowUnlocked && !isUnlocked
    ? skillBoardManager.canUnlockSkill(sk.id)
    : { canUnlock: false, reason: !isRowUnlocked ? 'ต้องปลดล็อกแถวธาตุก่อน' : 'ปลดล็อกแล้ว' };

  const levelUpStatus = isUnlocked && sk.level < 5
    ? skillBoardManager.canLevelUpSkill(sk.id)
    : { canLevelUp: false, reason: sk.level >= 5 ? 'เลเวลสูงสุดแล้ว' : 'ยังไม่ปลดล็อก' };

  const gold = save.inventory.gold;
  const books = save.inventory.skillBooks[sk.id] || 0;
  const crystals = save.inventory.crystals;

  return `
    <div class="skill-detail-panel-card" data-skill-id="${sk.id}">
      <!-- Header -->
      <div class="detail-card-header">
        <div class="detail-card-avatar-box tier-${sk.tier}" style="border-color: ${branchInfo.color};">
          <span class="detail-card-avatar-icon">${getSkillEmoji(sk)}</span>
          <span class="detail-card-tier-pill tier-${sk.tier}">${sk.tier}</span>
        </div>
        <div class="detail-card-title-box">
          <div class="detail-card-title-row">
            <h4 class="detail-card-skill-name">${sk.name}</h4>
          </div>
          <div class="detail-card-meta-pills">
            <span class="detail-branch-tag" style="color: ${branchInfo.color}; border-color: ${branchInfo.color}55;">
              ${branchInfo.icon} ${branchInfo.name}
            </span>
            ${isUnlocked ? (
              sk.level >= 5
                ? '<span class="detail-level-tag max">MAX Lv.5</span>'
                : `<span class="detail-level-tag level">Lv.${sk.level} / 5</span>`
            ) : (
              '<span class="detail-level-tag locked">🔒 ยังไม่ปลดล็อก</span>'
            )}
            ${isEquipped ? `<span class="detail-equipped-tag">ติดตั้งอยู่ (ช่อง ${equippedSlotIdx + 1})</span>` : ''}
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="detail-card-stats-grid">
        <div class="stat-pill-box">
          <span class="stat-pill-lbl">💧 ใช้ SP</span>
          <strong class="stat-pill-val">${sk.spCost}</strong>
        </div>
        <div class="stat-pill-box">
          <span class="stat-pill-lbl">⚔️ ตัวคูณดาเมจ</span>
          <strong class="stat-pill-val">×${currentDamageMult.toFixed(2)}</strong>
        </div>
        <div class="stat-pill-box">
          <span class="stat-pill-lbl">🎯 โอกาสออก</span>
          <strong class="stat-pill-val">${Math.round(sk.baseChance * 100)}%</strong>
        </div>
        <div class="stat-pill-box">
          <span class="stat-pill-lbl">⭐ โบนัสเลเวล</span>
          <strong class="stat-pill-val" style="color: #81c784;">${isUnlocked && sk.level > 1 ? `+${(sk.level - 1) * 5}%` : isUnlocked && sk.level === 5 ? '+25%' : '+0%'}</strong>
        </div>
      </div>

      <!-- Description -->
      <div class="detail-card-desc-box">
        <div class="desc-heading">📖 ความสามารถและเอฟเฟกต์:</div>
        <p class="desc-text">${sk.description}</p>
      </div>

      <!-- Prerequisite Alert -->
      ${prereqNoteHtml}

      <!-- Dynamic Actions Box -->
      <div class="detail-card-actions-box">
        ${!isRowUnlocked ? `
          <div class="detail-cost-summary">
            <div class="cost-reason-error">⚠️ แถววิชา [${branchInfo.name}] ยังถูกล็อกอยู่ (ต้องใช้หินธาตุ 3 ชิ้น)</div>
          </div>
          <button type="button" class="btn btn-gold btn-block btn-unlock-row" data-element-id="${rowId}">
            🔓 ปลดล็อกสายวิชา (3 หินธาตุ)
          </button>
        ` : !isUnlocked ? `
          <div class="detail-cost-summary">
            <div class="cost-title">ค่าใช้จ่ายในการเรียนวิชา:</div>
            <div class="cost-items">
              <span class="cost-tag ${gold >= sk.unlockCost.gold ? 'enough' : 'not-enough'}">🪙 ${sk.unlockCost.gold} Gold</span>
              ${sk.unlockCost.books > 0 ? `<span class="cost-tag ${books >= sk.unlockCost.books ? 'enough' : 'not-enough'}">📖 ${sk.unlockCost.books} คัมภีร์</span>` : ''}
              ${sk.unlockCost.crystals > 0 ? `<span class="cost-tag ${crystals >= sk.unlockCost.crystals ? 'enough' : 'not-enough'}">💎 ${sk.unlockCost.crystals} คริสตัล</span>` : ''}
            </div>
            ${!unlockStatus.canUnlock && unlockStatus.reason ? `<div class="cost-reason-error">❌ ${unlockStatus.reason}</div>` : ''}
          </div>
          <button 
            type="button" 
            class="btn btn-primary btn-block btn-panel-unlock-skill" 
            data-skill-id="${sk.id}"
            ${!unlockStatus.canUnlock ? 'disabled' : ''}
          >
            🔓 เรียนและปลดล็อกสกิลนี้
          </button>
        ` : `
          <!-- Unlocked: Level Up Sub-panel -->
          ${sk.level < 5 ? `
            <div class="detail-levelup-box">
              <div class="cost-title">อัปเกรดเป็น Lv.${sk.level + 1}:</div>
              <div class="cost-items">
                <span class="cost-tag ${books >= (sk.levelUpCost?.books || 0) ? 'enough' : 'not-enough'}">📖 ${sk.levelUpCost?.books} คัมภีร์</span>
                <span class="cost-tag ${gold >= (sk.levelUpCost?.gold || 0) ? 'enough' : 'not-enough'}">🪙 ${sk.levelUpCost?.gold} Gold</span>
                <span style="font-size:0.68rem; color:#81c784;">(ดาเมจเป็น ×${(sk.damageMult * (1 + sk.level * 0.05)).toFixed(2)})</span>
              </div>
              ${!levelUpStatus.canLevelUp && levelUpStatus.reason ? `<div class="cost-reason-error">❌ ${levelUpStatus.reason}</div>` : ''}
              <button 
                type="button" 
                class="btn btn-gold btn-panel-levelup-skill" 
                data-skill-id="${sk.id}"
                ${!levelUpStatus.canLevelUp ? 'disabled' : ''}
              >
                ⬆️ อัปเลเวลเป็น Lv.${sk.level + 1}
              </button>
            </div>
          ` : `
            <div class="detail-max-banner">
              ⭐ สกิลถึงระดับสูงสุดแล้ว (Max Bonus +25% ดาเมจ)
            </div>
          `}

          <!-- Equip / Unequip Controls -->
          ${heroData ? `
            <div class="detail-equip-controls">
              ${isEquipped ? `
                <div class="equipped-indicator">✓ ติดตั้งอยู่ในช่องที่ ${equippedSlotIdx + 1} ของ [${heroMeta?.name || activeHeroId}]</div>
                <button 
                  type="button" 
                  class="btn btn-outline-danger btn-panel-unequip-skill" 
                  data-skill-id="${sk.id}" 
                  data-slot-idx="${equippedSlotIdx}"
                  data-hero-id="${activeHeroId}"
                >
                  ❌ ถอดออกจากช่องที่ ${equippedSlotIdx + 1}
                </button>
              ` : `
                <div class="equip-prompt-label">🎯 ติดตั้งลง [${heroMeta?.name || activeHeroId}]:</div>
                <div class="equip-quick-slots-row">
                  ${[0, 1, 2, 3].map(slotIdx => {
                    const currSkillId = heroData.customSkills[slotIdx];
                    const currSkill = currSkillId ? skillBoardManager.getSkill(currSkillId) : null;
                    return `
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline btn-panel-equip-slot" 
                        data-slot-idx="${slotIdx}"
                        data-skill-id="${sk.id}"
                        data-hero-id="${activeHeroId}"
                        title="ติดตั้งลงช่องที่ ${slotIdx + 1} ${currSkill ? `(แทนที่ ${currSkill.name})` : '(ช่องว่าง)'}"
                      >
                        ช่อง ${slotIdx + 1}
                      </button>
                    `;
                  }).join('')}
                </div>
              `}
            </div>
          ` : ''}
        `}
      </div>
    </div>
  `;
}

/**
 * Render MMORPG Skill Loadout & Presets Panel (Right Panel - Bottom, Phase 5)
 * สวมใส่สกิล 4 ช่อง, การ์ดเลือกฮีโร่, Live Validation กฎ 4 ช่อง, และการจัดการ Presets
 */
export function renderSkillLoadoutPanelHtml(
  activeHeroId: string,
  save: any
): string {
  const ownedHeroesList = Object.values(save.ownedHeroes) as Array<{
    heroId: string;
    level: number;
    stars: number;
    customSkills: [string, string, string, string];
  }>;
  const activeHeroData = save.ownedHeroes[activeHeroId];
  const presets = skillBoardManager.getPresets();

  // Validate current loadout
  const loadoutValidation = activeHeroData
    ? skillBoardManager.validateLoadout(activeHeroData.customSkills)
    : { valid: true, errors: [] };

  return `
    <div class="loadout-editor-card">
      <div class="loadout-header-row">
        <h4 class="sidebar-title">🎯 สวมใส่สกิล 4 ช่อง (Equip Loadout)</h4>
        <div class="loadout-hero-count">(${ownedHeroesList.length} ฮีโร่ในคลัง)</div>
      </div>
      
      <!-- Hero Selector Section -->
      <div class="hero-selector-section">
        <div class="hero-selector-header">
          <span class="sel-title">🐾 เลือกฮีโร่ที่จะติดตั้งสกิล:</span>
        </div>

        <div class="hero-selector-chips-list">
          ${ownedHeroesList.map(h => {
            const m = HERO_MAP.get(h.heroId);
            const el = m ? ELEMENT_MAP.get(m.element) : null;
            const isSelected = h.heroId === activeHeroId;
            const isMain = h.heroId === save.activeTeam1v1.mainHeroId;
            const isBackup = h.heroId === save.activeTeam1v1.backupHeroId;

            return `
              <div 
                class="hero-select-chip ${isSelected ? 'active' : ''} ${isMain ? 'is-main' : isBackup ? 'is-backup' : ''}" 
                data-hero-id="${h.heroId}"
                title="คลิกเพื่อเลือก [${m?.name || h.heroId}]"
              >
                <div class="chip-avatar-wrap" style="border-color:${el?.color || '#ffd54f'};">
                  <span class="chip-avatar-icon">${el?.icon || '🐾'}</span>
                  <span class="chip-rarity rarity-${m?.rarity}">${m?.rarity}</span>
                </div>

                <div class="chip-info">
                  <div class="chip-name-row">
                    <strong class="chip-name">${m?.name || h.heroId}</strong>
                    ${isMain ? '<span class="chip-role-badge main">ตัวหลัก</span>' : isBackup ? '<span class="chip-role-badge backup">ตัวสำรอง</span>' : ''}
                  </div>
                  <div class="chip-meta-row">
                    <span class="chip-level">Lv.${h.level}</span>
                    <span class="chip-stars">${'★'.repeat(h.stars)}</span>
                    <span class="chip-elem" style="color:${el?.color || '#81d4fa'};">${el?.name || m?.element}</span>
                  </div>
                </div>

                ${isSelected ? '<span class="chip-selected-check">✓</span>' : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 4 Slots Display -->
      <div class="loadout-slots-box">
        ${[0, 1, 2, 3].map(slotIdx => {
          const skId = activeHeroData?.customSkills[slotIdx];
          const skItem = skId ? skillBoardManager.getSkill(skId) : null;
          const branchInfo = skItem ? getSkillBranchInfo(skItem) : null;
          const skillEmoji = skItem ? getSkillEmoji(skItem) : '';

          return `
            <div class="skill-slot-chip ${skItem ? 'has-skill' : 'is-empty'}" data-slot-idx="${slotIdx}" title="คลิกเพื่อเลือกเปลี่ยนสกิลในช่องที่ ${slotIdx + 1}">
              <div class="slot-num">${slotIdx + 1}</div>

              ${skItem && branchInfo ? `
                <!-- Skill Icon Avatar with Tier badge & Element Color border -->
                <div class="slot-sk-avatar tier-${skItem.tier}" style="border-color:${branchInfo.color};" title="${skItem.name} (${skItem.tier})">
                  <span class="slot-avatar-emoji">${skillEmoji}</span>
                  <span class="slot-tier-tag tier-${skItem.tier}">${skItem.tier}</span>
                </div>

                <div class="slot-content">
                  <div class="slot-sk-name-row">
                    <strong class="slot-sk-name">${skItem.name}</strong>
                    <span class="slot-branch-badge" style="color:${branchInfo.color}; border-color:${branchInfo.color}44;">
                      ${branchInfo.icon} ${branchInfo.name}
                    </span>
                  </div>
                  <div class="slot-sk-meta">
                    <span class="slot-sp-cost">💧 SP ${skItem.spCost}</span>
                    <span class="slot-sep">•</span>
                    <span class="slot-level">Lv.${skItem.level}</span>
                  </div>
                </div>

                <div class="slot-action-hint">
                  <button type="button" class="btn-slot-quick-unequip" data-slot-idx="${slotIdx}" data-hero-id="${activeHeroId}" title="ถอดสกิลออกจากช่องที่ ${slotIdx + 1}">✕</button>
                  <span class="slot-edit-icon" title="คลิกเพื่อเปลี่ยนสกิล">🔄</span>
                </div>
              ` : `
                <div class="slot-empty-avatar">
                  <span>➕</span>
                </div>
                <div class="slot-content">
                  <div class="slot-empty-title">ช่องว่าง (แตะเพื่อเลือกสกิล)</div>
                  <div class="slot-sk-meta">เลือกติดตั้งสกิลสำหรับช่องที่ ${slotIdx + 1}</div>
                </div>
              `}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Validation Feedback -->
      <div class="validation-feedback-box ${loadoutValidation.valid ? 'valid' : 'invalid'}">
        <div class="val-header">
          ${loadoutValidation.valid
            ? '✅ ชุดสกิลถูกต้องตามกฎ (พร้อมรบ)'
            : '⚠️ ข้อผิดพลาดตามกฎการติดตั้ง:'
          }
        </div>
        ${!loadoutValidation.valid ? `
          <ul class="val-errors-list">
            ${loadoutValidation.errors.map(err => `<li>${err}</li>`).join('')}
          </ul>
        ` : `
          <div style="font-size:0.75rem; color:#81c784;">
            ครบ 4 ช่อง • ไม่ซ้ำ • ไม่เกิน 2 ท่าต่อสายวิชา
          </div>
        `}
      </div>

      <!-- Presets Section -->
      <div class="presets-section-box">
        <div class="presets-header">
          <h5>📁 พรีเซตสกิล (Skill Presets)</h5>
          <button class="btn btn-xs btn-outline" id="btn-create-new-preset">+ บันทึกใหม่</button>
        </div>

        <div class="presets-list">
          ${presets.map(p => `
            <div class="preset-card-item" data-preset-id="${p.id}">
              <div class="p-info">
                <div class="p-name">${p.name}</div>
                <div class="p-skills-row">
                  ${p.skills.map(s => {
                    const sItem = skillBoardManager.getSkill(s);
                    return `<span class="p-skill-pill">${sItem?.name || s}</span>`;
                  }).join('')}
                </div>
              </div>
              <div class="p-actions">
                <button class="btn btn-xs btn-primary btn-apply-preset" data-preset-id="${p.id}" data-hero-id="${activeHeroId}" title="สวมใส่ให้ฮีโร่ตัวนี้ใน 1 คลิก">
                  ⚡ สวมใส่
                </button>
                <button class="btn btn-xs btn-outline-danger btn-delete-preset" data-preset-id="${p.id}" title="ลบพรีเซตนี้">
                  ✕
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

export function renderSkillBoardViewHtml(selectedHeroId?: string): string {
  const save = saveManager.getData();
  const rows = skillBoardManager.getAllRows();
  const presets = skillBoardManager.getPresets();
  const ownedHeroesList = Object.values(save.ownedHeroes);

  const activeHeroId = selectedHeroId || save.activeTeam1v1.mainHeroId || ownedHeroesList[0]?.heroId || 'rooster';

  const unlockedRowCount = rows.filter(r => r.isUnlocked).length;

  // Selected branch row for Center Tree
  const activeBranchId = skillBoardViewState.selectedBranchId;
  const selectedRow = rows.find(r => r.elementId === activeBranchId) || rows[0];

  return `
    <div class="skill-board-view-container">
      <!-- Top Overview Bar -->
      <div class="board-top-summary">
        <div class="summary-item">
          <span class="sum-icon">📜</span>
          <div>
            <div class="sum-val">${save.unlockedSkills.length} สกิล</div>
            <div class="sum-lbl">สกิลที่ปลดล็อกแล้ว</div>
          </div>
        </div>
        <div class="summary-item">
          <span class="sum-icon">⚡</span>
          <div>
            <div class="sum-val">${unlockedRowCount} / ${rows.length} สาย</div>
            <div class="sum-lbl">สายวิชาที่เปิดใช้งาน (11 ธาตุ + 5 ไร้ธาตุ)</div>
          </div>
        </div>
        <div class="summary-item">
          <span class="sum-icon">📁</span>
          <div>
            <div class="sum-val">${presets.length} ชุด</div>
            <div class="sum-lbl">พรีเซตที่บันทึกไว้</div>
          </div>
        </div>
      </div>

      <!-- MMORPG 3-Panel Mastery Layout (Left: Navigation, Center: Skill Tree, Right: Loadout & Detail) -->
      <div class="skill-board-main-layout mastery-3panel">
        <!-- Panel A: Left Branch Navigation -->
        ${renderSkillBranchNavHtml(rows, activeBranchId, skillBoardViewState.categoryFilter, save)}

        <!-- Panel B: Center Skill Tree View -->
        ${renderSkillTreeCenterHtml(selectedRow, save.ownedHeroes[activeHeroId]?.customSkills || [])}

        <!-- Panel C: Right Loadout & Presets Sidebar -->
        <aside class="loadout-preset-sidebar">
          <!-- Top: Skill Detail Panel (Phase 4) -->
          ${renderSkillDetailPanelHtml(skillBoardViewState.selectedSkillId, activeHeroId, save)}

          <!-- Bottom: 4-Slot Loadout Editor & Presets (Phase 5) -->
          ${renderSkillLoadoutPanelHtml(activeHeroId, save)}
        </aside>
      </div>

      <!-- Skill Selection Modal Root (Picker / Details) -->
      <div id="skill-picker-modal-root"></div>
      <div id="skill-detail-modal-root"></div>
    </div>
  `;
}

/**
 * แสดงผลแถวสกิลแบบกะทัดรัด (Compact Row)
 */
function renderSkillRowCompactHtml(row: SkillRow, currentHeroEquippedSkills: string[]): string {
  const save = saveManager.getData();
  const currentStones = save.inventory.elementStones[row.elementId] || 0;
  const canUnlock = row.isUnlocked ? false : skillBoardManager.canUnlockRow(row.elementId).canUnlock;

  return `
    <div class="board-row-card compact ${row.isUnlocked ? 'unlocked' : 'locked'}">
      <div class="row-card-header compact">
        <div class="row-title-cluster">
          <span class="row-icon">${row.icon}</span>
          <span class="row-name">${row.name}</span>
          <span class="row-count">(${row.skills.length} สกิล)</span>
        </div>

        <div class="row-status-cluster">
          ${row.isUnlocked
            ? (row.category === 'neutral'
                ? '<span class="status-badge unlocked neutral">⚪ สายวิชาไร้ธาตุ (เปิดฟรี)</span>'
                : '<span class="status-badge unlocked">🟢 ปลดแล้ว</span>')
            : `
              <div class="stone-cost-indicator">
                <span>หินธาตุ [${row.elementId}]: ${currentStones}/${row.unlockCostStones}</span>
                <button class="btn btn-xs ${canUnlock ? 'btn-gold' : 'btn-outline-disabled'} btn-unlock-row" data-element-id="${row.elementId}" ${!canUnlock ? 'disabled' : ''}>
                  🔓 ปลดล็อกแถว (3 หิน)
                </button>
              </div>
            `
          }
        </div>
      </div>

      <!-- Skills in row: Compact Icon Badges -->
      <div class="row-skills-compact-grid">
        ${row.skills.map(sk => renderSkillCompactIconHtml(sk, row.isUnlocked, currentHeroEquippedSkills)).join('')}
      </div>
    </div>
  `;
}

/**
 * แสดงผลไอคอนสกิลขนาดเล็กกะทัดรัด (Compact Icon Badge)
 */
function renderSkillCompactIconHtml(
  sk: SkillBoardItem,
  isRowUnlocked: boolean,
  currentHeroEquippedSkills: string[]
): string {
  const isUnlocked = sk.isUnlocked;
  const equippedSlotIdx = currentHeroEquippedSkills.indexOf(sk.id);
  const isEquipped = equippedSlotIdx !== -1;

  // ตรวจสอบว่าสามารถปลดล็อกหรืออัปเลเวลได้หรือไม่ (สำหรับแจ้งเตือนไฟกระพริบ ✨)
  const canUnlock = isRowUnlocked && !isUnlocked && skillBoardManager.canUnlockSkill(sk.id).canUnlock;
  const canLevelUp = isUnlocked && sk.level < 5 && skillBoardManager.canLevelUpSkill(sk.id).canLevelUp;
  const hasNotice = canUnlock || canLevelUp;

  // Tooltip สั้นๆ เมื่อเอาเมาส์วาง (Desktop Hover)
  const levelMult = skillBoardManager.getSkillLevelDamageMultiplier(sk.id);
  const tooltipText = `${sk.name} [Tier ${sk.tier}] | SP ${sk.spCost} | ดาเมจ ×${(sk.damageMult * levelMult).toFixed(2)}\n${sk.description}`;

  return `
    <div 
      class="skill-compact-icon-chip ${isUnlocked ? 'unlocked' : 'locked'} tier-${sk.tier} ${isEquipped ? 'is-equipped' : ''}"
      data-skill-id="${sk.id}"
      data-row-unlocked="${isRowUnlocked}"
      title="${tooltipText}"
    >
      <!-- Tier Badge (Top Left) -->
      <span class="icon-tier-badge tier-${sk.tier}">${sk.tier}</span>

      <!-- Notice Dot (Top Right) if can unlock or level up -->
      ${hasNotice ? '<span class="icon-notice-dot" title="พร้อมปลดล็อก/อัปเกรด!">✨</span>' : ''}

      <!-- Center Skill Graphic / Icon -->
      <div class="icon-center-content">
        ${isUnlocked
          ? `<span class="icon-skill-symbol">${getSkillEmoji(sk)}</span>`
          : '<span class="icon-lock-symbol">🔒</span>'
        }
      </div>

      <!-- Skill Name (Shortened) -->
      <div class="icon-skill-name">${sk.name}</div>

      <!-- Bottom Level / Status Indicator -->
      <div class="icon-bottom-badge">
        ${isEquipped ? `
          <span class="badge-equipped-tag">ช่อง ${equippedSlotIdx + 1}</span>
        ` : isUnlocked ? (
          sk.level >= 5
            ? '<span class="badge-max-tag">MAX</span>'
            : `<span class="badge-level-tag">Lv.${sk.level}</span>`
        ) : (
          '<span class="badge-locked-tag">ล็อก</span>'
        )}
      </div>
    </div>
  `;
}

/**
 * ดึงอิโมจิประจำประเภทสกิล/ธาตุ
 */
export function getSkillEmoji(sk: SkillBoardItem): string {
  switch (sk.element) {
    case 'fire': return '🔥';
    case 'water': return '💧';
    case 'wind': return '🌪️';
    case 'earth': return '🪨';
    case 'thunder': return '⚡';
    case 'ice': return '❄️';
    case 'plant': return '🌿';
    case 'poison': return '☠️';
    case 'metal': return '⚔️';
    case 'light': return '✨';
    case 'dark': return '🌑';
    case 'neutral':
      if (sk.branch === 'martial') return '🥋';
      if (sk.branch === 'medical') return '💚';
      if (sk.branch === 'trick') return '🎭';
      if (sk.branch === 'catalyst') return '🔋';
      if (sk.branch === 'secret') return '📜';
      if (sk.branch === 'defense') return '🛡️';
      return '⚪';
    default:
      return '✨';
  }
}

/**
 * ดึงข้อมูลชื่อสายวิชา ไอคอน และสีประจำสายวิชา
 */
export function getSkillBranchInfo(sk: SkillBoardItem): { name: string; icon: string; color: string } {
  if (sk.element === 'neutral') {
    switch (sk.branch) {
      case 'martial': return { name: 'กระบวนท่า', icon: '🥋', color: '#ffcc80' };
      case 'medical': return { name: 'พยาบาล', icon: '💚', color: '#a5d6a7' };
      case 'trick': return { name: 'เล่ห์กล', icon: '🎭', color: '#ce93d8' };
      case 'catalyst': return { name: 'เร่งประจุ', icon: '🔋', color: '#81d4fa' };
      case 'secret': return { name: 'วิชาลับ', icon: '📜', color: '#ffe082' };
      case 'defense': return { name: 'ป้องกัน', icon: '🛡️', color: '#90caf9' };
      default: return { name: 'ไร้ธาตุ', icon: '⚪', color: '#e0e0e0' };
    }
  }
  const el = ELEMENT_MAP.get(sk.element);
  return {
    name: `ธาตุ${el?.name || sk.element}`,
    icon: el?.icon || '✨',
    color: el?.color || '#ffd54f'
  };
}

/**
 * จัดการ Events ต่างๆ บนหน้ากระดานสกิล
 */
export function bindSkillBoardEvents(
  container: HTMLElement,
  currentHeroId: string,
  onBoardChanged: (newHeroId?: string) => void
) {
  // Restore Left Navigation Scroll position
  const navList = container.querySelector('.skill-branch-nav-list');
  if (navList && skillBoardViewState.savedNavScrollTop > 0) {
    (navList as HTMLElement).scrollTop = skillBoardViewState.savedNavScrollTop;
  }
  navList?.addEventListener('scroll', () => {
    skillBoardViewState.savedNavScrollTop = (navList as HTMLElement).scrollTop;
  });

  // Category Filter Tabs (ทั้งหมด, ธาตุ, ไร้ธาตุ)
  container.querySelectorAll('.branch-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const filter = (btn as HTMLElement).dataset.filter as SkillCategoryFilter;
      if (filter && filter !== skillBoardViewState.categoryFilter) {
        setSkillBoardCategoryFilter(filter);
        onBoardChanged(currentHeroId);
      }
    });
  });

  // Skill Branch Navigation Selection
  container.querySelectorAll('.skill-branch-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // Don't trigger if click was on the quick unlock button
      if ((e.target as HTMLElement).closest('.btn-unlock-branch-quick')) return;
      const branchId = (item as HTMLElement).dataset.branchId;
      if (branchId && branchId !== skillBoardViewState.selectedBranchId) {
        setSkillBoardBranch(branchId);
        onBoardChanged(currentHeroId);
      }
    });
  });

  // Quick Unlock Branch from Left Navigation (ปุ่มปลดล็อกด่วนสายวิชา)
  container.querySelectorAll('.btn-unlock-branch-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const branchId = (btn as HTMLElement).dataset.branchId;
      if (!branchId) return;
      const res = skillBoardManager.unlockRow(branchId);
      if (res.success) {
        showToast(`🔓 ปลดล็อกสายวิชา [${branchId}] สำเร็จ! สามารถเข้าถึงวิชาในสายนี้ได้แล้ว`, 'gold');
        setSkillBoardBranch(branchId);
        onBoardChanged(currentHeroId);
      } else {
        showToast(`❌ ไม่สามารถปลดล็อกสายวิชาได้: ${res.error}`, 'error');
      }
    });
  });

  // Hero selection chips (แทนที่ select dropdown ธรรมดาด้วย list การ์ดไอคอนสัตว์เลี้ยงระดับโปร)
  container.querySelectorAll('.hero-select-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const heroId = (chip as HTMLElement).dataset.heroId;
      if (heroId && heroId !== currentHeroId) {
        onBoardChanged(heroId);
      }
    });
  });

  // Unlock Row (ปุ่มปลดล็อกแถวธาตุ)
  container.querySelectorAll('.btn-unlock-row').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const elemId = (btn as HTMLElement).dataset.elementId;
      if (!elemId) return;
      const res = skillBoardManager.unlockRow(elemId);
      if (res.success) {
        showToast(`🔓 ปลดล็อกแถวธาตุ [${elemId}] สำเร็จ! สามารถเข้าถึงวิชาในแถวนี้ได้แล้ว`, 'gold');
        onBoardChanged(currentHeroId);
      } else {
        showToast(`❌ ไม่สามารถปลดล็อกแถวได้: ${res.error}`, 'error');
      }
    });
  });

  // Click on Skill Tree Node -> เลือกสกิล & อัปเดต Detail Panel ใน Right Panel ทันที!
  container.querySelectorAll('.skill-tree-node').forEach(node => {
    node.addEventListener('click', () => {
      const skillId = (node as HTMLElement).dataset.skillId;
      if (!skillId) return;

      setSkillBoardSelectedSkill(skillId);
      onBoardChanged(currentHeroId);
    });
  });

  // Detail Panel: ปลดล็อกสกิล
  container.querySelectorAll('.btn-panel-unlock-skill').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = (btn as HTMLElement).dataset.skillId;
      if (!skillId) return;
      const res = skillBoardManager.unlockSkill(skillId);
      if (res.success) {
        const sk = skillBoardManager.getSkill(skillId);
        showToast(`✨ ปลดล็อกสกิล [${sk?.name || skillId}] สำเร็จ! พร้อมสวมใส่แล้ว`, 'success');
        onBoardChanged(currentHeroId);
      } else {
        showToast(`❌ ${res.error}`, 'error');
      }
    });
  });

  // Detail Panel: อัปเลเวลสกิล
  container.querySelectorAll('.btn-panel-levelup-skill').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = (btn as HTMLElement).dataset.skillId;
      if (!skillId) return;
      const res = skillBoardManager.levelUpSkill(skillId);
      if (res.success) {
        const sk = skillBoardManager.getSkill(skillId);
        showToast(`🎉 อัปเกรด [${sk?.name || skillId}] เป็น Lv.${res.newLevel}! พลังเพิ่มขึ้นแล้ว`, 'gold');
        onBoardChanged(currentHeroId);
      } else {
        showToast(`❌ ${res.error}`, 'error');
      }
    });
  });

  // Detail Panel: ติดตั้งลงช่องที่เลือก (Quick Equip)
  container.querySelectorAll('.btn-panel-equip-slot').forEach(btn => {
    btn.addEventListener('click', () => {
      const skillId = (btn as HTMLElement).dataset.skillId;
      const slotIdx = Number((btn as HTMLElement).dataset.slotIdx);
      const heroId = (btn as HTMLElement).dataset.heroId || currentHeroId;
      if (!skillId || isNaN(slotIdx)) return;

      const res = skillBoardManager.equipSkillToSlot(heroId, slotIdx, skillId);
      if (res.success) {
        const sk = skillBoardManager.getSkill(skillId);
        showToast(`🎯 ติดตั้ง [${sk?.name || skillId}] ลงช่องที่ ${slotIdx + 1} เรียบร้อย!`, 'success');
        onBoardChanged(heroId);
      } else {
        showToast(`❌ ${res.error}`, 'error');
      }
    });
  });

  // Detail Panel: ถอดสกิลออกจากช่อง
  container.querySelectorAll('.btn-panel-unequip-skill').forEach(btn => {
    btn.addEventListener('click', () => {
      const slotIdx = Number((btn as HTMLElement).dataset.slotIdx);
      const heroId = (btn as HTMLElement).dataset.heroId || currentHeroId;
      if (isNaN(slotIdx)) return;

      const res = skillBoardManager.equipSkillToSlot(heroId, slotIdx, '');
      if (res.success) {
        showToast(`🗑️ ถอดสกิลออกจากช่องที่ ${slotIdx + 1} เรียบร้อยแล้ว`, 'info');
        onBoardChanged(heroId);
      } else {
        showToast(`❌ ${res.error}`, 'error');
      }
    });
  });

  // Quick unequip from slot chip (ปุ่มถอดสกิลออกจากช่องโดยตรง)
  container.querySelectorAll('.btn-slot-quick-unequip').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slotIdx = Number((btn as HTMLElement).dataset.slotIdx);
      const heroId = (btn as HTMLElement).dataset.heroId || currentHeroId;
      if (isNaN(slotIdx)) return;

      const res = skillBoardManager.equipSkillToSlot(heroId, slotIdx, '');
      if (res.success) {
        showToast(`🗑️ ถอดสกิลออกจากช่องที่ ${slotIdx + 1} เรียบร้อยแล้ว`, 'info');
        onBoardChanged(heroId);
      } else {
        showToast(`❌ ${res.error}`, 'error');
      }
    });
  });

  // Click on Compact Skill Icon -> เปิด Modal หน้ารายละเอียดสกิลทันที!
  container.querySelectorAll('.skill-compact-icon-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const skillId = (chip as HTMLElement).dataset.skillId;
      const isRowUnlocked = (chip as HTMLElement).dataset.rowUnlocked === 'true';
      if (!skillId) return;
      openSkillDetailModal(container, skillId, isRowUnlocked, currentHeroId, onBoardChanged);
    });
  });

  // Apply Preset (1-Click)
  container.querySelectorAll('.btn-apply-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetId = (btn as HTMLElement).dataset.presetId;
      const heroId = (btn as HTMLElement).dataset.heroId || currentHeroId;
      if (!presetId || !heroId) return;

      const res = skillBoardManager.applyPresetToHero(heroId, presetId);
      if (res.success) {
        const preset = skillBoardManager.getPreset(presetId);
        const heroMeta = HERO_MAP.get(heroId);
        showToast(`⚡ สวมใส่พรีเซต [${preset?.name}] ให้กับ ${heroMeta?.name || heroId} ใน 1 คลิกสำเร็จ!`, 'success');
        onBoardChanged(heroId);
      } else {
        showToast(`❌ ไม่สามารถสวมใส่พรีเซตได้: ${res.error}`, 'error');
      }
    });
  });

  // Delete Preset
  container.querySelectorAll('.btn-delete-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetId = (btn as HTMLElement).dataset.presetId;
      if (!presetId) return;
      if (confirm('คุณต้องการลบพรีเซตสกิลนี้ใช่หรือไม่?')) {
        const res = skillBoardManager.deletePreset(presetId);
        if (res.success) {
          showToast('🗑️ ลบพรีเซตสกิลเรียบร้อยแล้ว', 'info');
          onBoardChanged(currentHeroId);
        }
      }
    });
  });

  // Create new preset
  container.querySelector('#btn-create-new-preset')?.addEventListener('click', () => {
    const save = saveManager.getData();
    const heroData = save.ownedHeroes[currentHeroId];
    if (!heroData) return;

    const presetName = prompt('ตั้งชื่อพรีเซตสกิลใหม่ (จะบันทึกชุดสกิล 4 ท่าปัจจุบันของฮีโร่นี้):');
    if (!presetName || !presetName.trim()) return;

    const newId = `preset_user_${Date.now()}`;
    const skills = [...heroData.customSkills] as [string, string, string, string];
    const res = skillBoardManager.createPreset(newId, presetName.trim(), skills);
    if (res.success) {
      showToast(`📁 บันทึกพรีเซต [${presetName.trim()}] สำเร็จแล้ว!`, 'success');
      onBoardChanged(currentHeroId);
    } else {
      showToast(`❌ ไม่สามารถบันทึกพรีเซตได้: ${res.error}`, 'error');
    }
  });

  // Click on slot chip to open skill picker modal
  container.querySelectorAll('.skill-slot-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const slotIdx = Number((chip as HTMLElement).dataset.slotIdx);
      openSkillPickerModal(container, currentHeroId, slotIdx, onBoardChanged);
    });
  });
}

/**
 * Modal หน้ารายละเอียดสกิลเต็มรูปแบบ (Skill Detail Modal)
 * รองรับการคลิก/แตะดูรายละเอียด ปลดล็อก อัปเลเวล และติดตั้งลงฮีโร่ในที่เดียว
 */
function openSkillDetailModal(
  container: HTMLElement,
  skillId: string,
  isRowUnlocked: boolean,
  heroId: string,
  onBoardChanged: (heroId?: string) => void
) {
  const root = container.querySelector('#skill-detail-modal-root');
  if (!root) return;

  const save = saveManager.getData();
  const sk = skillBoardManager.getSkill(skillId);
  if (!sk) return;

  const heroData = save.ownedHeroes[heroId];
  const heroMeta = HERO_MAP.get(heroId);
  const isUnlocked = sk.isUnlocked;
  const levelMult = skillBoardManager.getSkillLevelDamageMultiplier(sk.id);
  const currentDamageMult = sk.damageMult * (isUnlocked ? levelMult : 1.0);

  // Prerequisite Note
  let prereqNote = '';
  if (!isUnlocked && sk.prerequisiteSkillId) {
    const preSkill = skillBoardManager.getSkill(sk.prerequisiteSkillId);
    const hasPre = save.unlockedSkills.includes(sk.prerequisiteSkillId);
    prereqNote = `
      <div class="modal-detail-prereq ${hasPre ? 'cleared' : 'missing'}">
        <span>เงื่อนไขก่อนหน้า: ต้องการปลดล็อก [${preSkill?.name || sk.prerequisiteSkillId}] ก่อน</span>
        <span>${hasPre ? '✅ ปลดล็อกแล้ว' : '❌ ยังไม่ปลดล็อก'}</span>
      </div>
    `;
  }

  // Cost and Status Checks
  const unlockStatus = isRowUnlocked && !isUnlocked
    ? skillBoardManager.canUnlockSkill(sk.id)
    : { canUnlock: false, reason: !isRowUnlocked ? 'ต้องปลดล็อกแถวธาตุก่อน' : 'ปลดล็อกแล้ว' };

  const levelUpStatus = isUnlocked && sk.level < 5
    ? skillBoardManager.canLevelUpSkill(sk.id)
    : { canLevelUp: false, reason: sk.level >= 5 ? 'เลเวลสูงสุดแล้ว' : 'ยังไม่ปลดล็อก' };

  root.innerHTML = `
    <div class="modal-backdrop" id="detail-modal-backdrop">
      <div class="skill-detail-modal tier-${sk.tier}">
        <!-- Modal Top Banner -->
        <div class="detail-modal-header">
          <div class="detail-header-left">
            <span class="detail-skill-icon">${getSkillEmoji(sk)}</span>
            <div>
              <div class="detail-skill-title-row">
                <span class="sk-tier-tag tier-${sk.tier}">${sk.tier}</span>
                <h3 class="detail-skill-name">${sk.name}</h3>
              </div>
              <div class="detail-skill-meta">
                <span>ธาตุ: ${sk.element}</span> • <span>สายวิชา: ${sk.branch}</span>
                ${isUnlocked ? ` • <strong style="color:#a5d6a7;">Lv.${sk.level} / 5</strong>` : ' • <span style="color:#ef9a9a;">(ยังไม่ปลดล็อก)</span>'}
              </div>
            </div>
          </div>
          <button class="modal-close-btn" id="btn-close-detail">✕</button>
        </div>

        <!-- Modal Body: Stats & Description -->
        <div class="detail-modal-body">
          <div class="detail-stats-grid">
            <div class="d-stat-box">
              <span class="d-stat-label">💧 ใช้ SP</span>
              <span class="d-stat-val">${sk.spCost} แต้ม</span>
            </div>
            <div class="d-stat-box">
              <span class="d-stat-label">⚔️ ตัวคูณดาเมจ</span>
              <span class="d-stat-val">×${currentDamageMult.toFixed(2)} ${isUnlocked && sk.level > 1 ? `<small style="color:#81c784;">(+${(sk.level - 1) * 5}%)</small>` : ''}</span>
            </div>
            <div class="d-stat-box">
              <span class="d-stat-label">🎯 โอกาสออกท่า</span>
              <span class="d-stat-val">${Math.round(sk.baseChance * 100)}%</span>
            </div>
            <div class="d-stat-box">
              <span class="d-stat-label">🌟 ระดับสกิล</span>
              <span class="d-stat-val">${isUnlocked ? `Lv.${sk.level} ${sk.level >= 5 ? '(MAX)' : ''}` : 'ยังไม่ปลด'}</span>
            </div>
          </div>

          <div class="detail-description-box">
            <h5>📖 คุณสมบัติและเอฟเฟกต์:</h5>
            <p>${sk.description}</p>
          </div>

          ${prereqNote}

          <!-- Upgrade & Unlock Actions -->
          <div class="detail-management-box">
            ${!isRowUnlocked ? `
              <div class="alert-box-warn">
                ⚠️ แถวธาตุ [${sk.element}] ยังถูกล็อกอยู่ — กรุณาใช้หินธาตุ 3 ชิ้นปลดล็อกแถวก่อน
              </div>
            ` : !isUnlocked ? `
              <div class="detail-action-card unlock-card">
                <div class="action-info">
                  <strong>ค่าใช้จ่ายในการปลดล็อก:</strong>
                  <div class="cost-tags-row">
                    <span>🪙 ${sk.unlockCost.gold} Gold</span>
                    ${sk.unlockCost.books > 0 ? `<span>📖 ${sk.unlockCost.books} คัมภีร์</span>` : ''}
                    ${sk.unlockCost.crystals > 0 ? `<span>💎 ${sk.unlockCost.crystals} คริสตัล</span>` : ''}
                  </div>
                  ${!unlockStatus.canUnlock && unlockStatus.reason ? `
                    <div class="missing-text">${unlockStatus.reason}</div>
                  ` : ''}
                </div>
                <button class="btn btn-primary btn-do-unlock-skill" ${!unlockStatus.canUnlock ? 'disabled' : ''}>
                  🔓 ปลดล็อกสกิลนี้
                </button>
              </div>
            ` : `
              <div class="detail-action-card levelup-card">
                <div class="action-info">
                  <strong>ระดับปัจจุบัน: Lv.${sk.level} / 5</strong>
                  ${sk.level < 5 ? `
                    <div class="cost-tags-row">
                      <span>📖 ${sk.levelUpCost?.books} คัมภีร์</span>
                      <span>🪙 ${sk.levelUpCost?.gold} Gold</span>
                      <span style="color:#81c784;">(เพิ่มดาเมจเป็น ×${(sk.damageMult * (1 + sk.level * 0.05)).toFixed(2)})</span>
                    </div>
                    ${!levelUpStatus.canLevelUp && levelUpStatus.reason ? `
                      <div class="missing-text">${levelUpStatus.reason}</div>
                    ` : ''}
                  ` : `
                    <div style="color:#ffd54f; font-size:0.85rem; font-weight:bold;">⭐ เลเวลสูงสุดแล้ว (+25% ดาเมจ Max Bonus)</div>
                  `}
                </div>
                ${sk.level < 5 ? `
                  <button class="btn btn-success btn-do-levelup-skill" ${!levelUpStatus.canLevelUp ? 'disabled' : ''}>
                    ⬆️ อัปเลเวลเป็น Lv.${sk.level + 1}
                  </button>
                ` : ''}
              </div>
            `}
          </div>

          <!-- Quick Equip Section (ติดตั้งให้ฮีโร่ที่เลือกอยู่ทันที) -->
          ${isUnlocked && heroData ? `
            <div class="detail-equip-section">
              <h5>🎯 สวมใส่ให้ [${heroMeta?.name || heroId}]:</h5>
              <div class="equip-slots-buttons-row">
                ${[0, 1, 2, 3].map(slotIdx => {
                  const isCurrentInSlot = heroData.customSkills[slotIdx] === sk.id;
                  return `
                    <button class="btn btn-sm ${isCurrentInSlot ? 'btn-success is-equipped-slot' : 'btn-outline'} btn-equip-to-slot" data-slot-idx="${slotIdx}">
                      ${isCurrentInSlot ? `✓ ช่องที่ ${slotIdx + 1}` : `ใส่ช่องที่ ${slotIdx + 1}`}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  const closeDetail = () => {
    root.innerHTML = '';
  };

  root.querySelector('#btn-close-detail')?.addEventListener('click', closeDetail);
  root.querySelector('#detail-modal-backdrop')?.addEventListener('click', e => {
    if ((e.target as HTMLElement).id === 'detail-modal-backdrop') closeDetail();
  });

  // ปลดล็อกสกิลจากใน Modal
  root.querySelector('.btn-do-unlock-skill')?.addEventListener('click', () => {
    const res = skillBoardManager.unlockSkill(sk.id);
    if (res.success) {
      showToast(`✨ ปลดล็อกสกิล [${sk.name}] สำเร็จ! พร้อมสวมใส่แล้ว`, 'success');
      closeDetail();
      onBoardChanged(heroId);
    } else {
      showToast(`❌ ${res.error}`, 'error');
    }
  });

  // อัปเลเวลสกิลจากใน Modal
  root.querySelector('.btn-do-levelup-skill')?.addEventListener('click', () => {
    const res = skillBoardManager.levelUpSkill(sk.id);
    if (res.success) {
      showToast(`🎉 อัปเกรด [${sk.name}] เป็น Lv.${res.newLevel}! พลังเพิ่มขึ้นแล้ว`, 'gold');
      closeDetail();
      onBoardChanged(heroId);
    } else {
      showToast(`❌ ${res.error}`, 'error');
    }
  });

  // ติดตั้งลงช่อง 1-4 ทันทีจากใน Modal
  root.querySelectorAll('.btn-equip-to-slot').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSlot = Number((btn as HTMLElement).dataset.slotIdx);
      const equipRes = skillBoardManager.equipSkillToSlot(heroId, targetSlot, sk.id);
      if (equipRes.success) {
        showToast(`✓ ติดตั้ง [${sk.name}] ลงในช่องที่ ${targetSlot + 1} เรียบร้อย!`, 'success');
        closeDetail();
        onBoardChanged(heroId);
      } else {
        showToast(`⚠️ ผิดกฎการติดตั้ง: ${equipRes.error}`, 'error');
      }
    });
  });
}

/**
 * Modal สำหรับเลือกสกิลจากคลังใส่ช่อง (Slot Picker Modal)
 */
export function openSkillPickerModal(
  container: HTMLElement,
  heroId: string,
  targetSlotIdx: number,
  onBoardChanged: (heroId?: string) => void
) {
  const root = container.querySelector('#skill-picker-modal-root');
  if (!root) return;

  const save = saveManager.getData();
  const heroData = save.ownedHeroes[heroId];
  if (!heroData) return;

  // Unlocked skills in player account
  const unlockedSkills = save.unlockedSkills.map(id => skillBoardManager.getSkill(id)!).filter(Boolean);

  root.innerHTML = `
    <div class="modal-backdrop" id="picker-backdrop">
      <div class="skill-picker-modal">
        <div class="modal-header">
          <div>
            <h3>เลือกสกิลสำหรับช่องที่ ${targetSlotIdx + 1}</h3>
            <div style="font-size:0.8rem; color:var(--text-muted);">เลือกจากสกิลที่ปลดล็อกแล้วในกระดาน</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            ${heroData.customSkills[targetSlotIdx] ? `
              <button class="btn btn-xs btn-outline btn-unequip-slot" title="ถอดสกิลออกจากช่องที่ ${targetSlotIdx + 1}">
                🗑️ ถอดสกิล
              </button>
            ` : ''}
            <button class="modal-close-btn" id="btn-close-picker">✕</button>
          </div>
        </div>

        <div class="picker-skills-list">
          ${unlockedSkills.length === 0 ? `
            <div class="picker-empty-state">
              <span>📜</span>
              <p>ยังไม่มีสกิลที่ปลดล็อกในบัญชีของคุณ</p>
              <small>สามารถปลดล็อกสกิลได้จากแถววิชาในหน้ากระดานสกิล</small>
            </div>
          ` : unlockedSkills.map(sk => {
            const isCurrentSlot = heroData.customSkills[targetSlotIdx] === sk.id;
            const isEquippedInOtherSlot = heroData.customSkills.includes(sk.id) && !isCurrentSlot;
            const el = ELEMENT_MAP.get(sk.element);
            const elemColor = el?.color || '#ffd54f';
            const skillEmoji = getSkillEmoji(sk);

            return `
              <div class="picker-skill-row ${isEquippedInOtherSlot ? 'disabled' : ''} ${isCurrentSlot ? 'current-slot' : ''}" data-skill-id="${sk.id}">
                <!-- Left: Skill Icon Avatar with Tier badge -->
                <div class="picker-skill-avatar tier-${sk.tier}" style="border-color: ${elemColor};" title="${sk.name} (${sk.tier})">
                  <span class="p-sk-icon">${skillEmoji}</span>
                  <span class="p-sk-tier-badge tier-${sk.tier}">${sk.tier}</span>
                </div>

                <!-- Middle: Skill Information -->
                <div class="p-sk-info">
                  <div class="p-sk-title">
                    <strong class="p-sk-name">${sk.name}</strong>
                    <span class="p-sk-elem-tag" style="color:${elemColor}; border-color:${elemColor}55;">
                      ${el?.icon || '✨'} ${el?.name || sk.element}
                    </span>
                    <span class="p-sk-branch-tag">สาย${sk.branch}</span>
                    <span class="p-sk-level-tag">Lv.${sk.level}</span>
                  </div>
                  <div class="p-sk-desc">${sk.description}</div>
                </div>

                <!-- Right: Action / Status Button -->
                <div class="p-sk-action">
                  ${isCurrentSlot ? `
                    <div class="slot-status-badge equipped" title="ติดตั้งอยู่ในช่องที่ ${targetSlotIdx + 1} แล้ว">
                      <span class="status-icon">✓</span>
                      <span class="status-text">ติดตั้งอยู่</span>
                    </div>
                  ` : isEquippedInOtherSlot ? `
                    <div class="slot-status-badge in-other" title="สกิลนี้ถูกสวมใส่ในช่องอื่นแล้ว">
                      <span class="status-icon">🔒</span>
                      <span class="status-text">ใส่ช่องอื่น</span>
                    </div>
                  ` : `
                    <button class="btn-equip-action btn-choose-skill" data-skill-id="${sk.id}" title="คลิกเพื่อติดตั้ง [${sk.name}] ลงช่องที่ ${targetSlotIdx + 1}">
                      <span class="equip-icon">📥</span>
                      <span class="equip-text">ติดตั้ง</span>
                    </button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  const closePicker = () => {
    root.innerHTML = '';
  };

  root.querySelector('#btn-close-picker')?.addEventListener('click', closePicker);
  root.querySelector('#picker-backdrop')?.addEventListener('click', e => {
    if ((e.target as HTMLElement).id === 'picker-backdrop') closePicker();
  });

  // ถอดสกิลออกจากช่องนี้
  root.querySelector('.btn-unequip-slot')?.addEventListener('click', () => {
    const unequipRes = skillBoardManager.equipSkillToSlot(heroId, targetSlotIdx, '');
    if (unequipRes.success) {
      showToast(`🗑️ ถอดสกิลออกจากช่องที่ ${targetSlotIdx + 1} เรียบร้อยแล้ว`, 'info');
      closePicker();
      onBoardChanged(heroId);
    } else {
      showToast(`❌ ${unequipRes.error}`, 'error');
    }
  });

  root.querySelectorAll('.btn-choose-skill').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenSkillId = (btn as HTMLElement).dataset.skillId;
      if (!chosenSkillId) return;

      const equipRes = skillBoardManager.equipSkillToSlot(heroId, targetSlotIdx, chosenSkillId);
      if (equipRes.success) {
        const sk = skillBoardManager.getSkill(chosenSkillId);
        showToast(`✓ ติดตั้ง [${sk?.name || chosenSkillId}] ในช่องที่ ${targetSlotIdx + 1} แล้ว`, 'success');
        closePicker();
        onBoardChanged(heroId);
      } else {
        showToast(`⚠️ ผิดกฎการติดตั้ง: ${equipRes.error}`, 'error');
      }
    });
  });
}
