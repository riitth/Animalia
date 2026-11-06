/**
 * Heroes & Progression View (Phase 2 - Task 2.1 & 2.4 - Extended Roster System)
 * หน้าคลังสัตว์เลี้ยงและการพัฒนา:
 * - ตัวกรองตามธาตุ (11 ธาตุ), แร็งค์ (SS/S/A/B), สายบทบาท (5 Roles), สถานะด่วน (ในทีม/พร้อมอัปเวล/พร้อมอัปดาว/สกิลว่าง)
 * - การจัดเรียง (ตามเลเวล, แร็งค์, ดาว, พลังรบ BP, ธาตุ, ATK, HP, SPD, ชื่อ) ทั้งแบบมากไปน้อยและน้อยไปมาก
 * - ระบบตรึงตัวหลัก/ตัวสำรองไว้บนสุด (Pin Active Team)
 * - ช่องค้นหาแบบ Real-time ค้นหาตามชื่อ, สายวิชา, ธาตุ
 * - อัปเลเวล (Food + Gold), อัปดาว (Shards), และจัดทีม 1v1
 */

import {
  saveManager,
  getLevelUpCost,
  STAR_UPGRADE_COSTS,
  MAX_HERO_LEVEL,
  MAX_HERO_STARS,
  type PlayerSaveData,
  type OwnedHeroData,
} from '../engine/save_manager';
import { computeHeroStats, getAllHeroes, getAllElements } from '../engine/combat';
import { skillBoardManager } from '../engine/skill_board_manager';
import { getSkillEmoji, getSkillBranchInfo, openSkillPickerModal } from './skill_board_view';
import { showToast } from './toast';
import heroesData from '../data/heroes.json';
import signatureDescriptions from '../data/signature_descriptions.json';
import { getAnimalLore } from '../data/animal_lore';

const HERO_MAP = new Map(getAllHeroes().map(h => [h.id, h]));
const ELEMENT_MAP = new Map(getAllElements().map(e => [e.id, e]));
const SIG_DESC_MAP: Record<string, string> = signatureDescriptions as Record<string, string>;

/**
 * แปลงรายละเอียดท่าไม้ตาย Signature Ultimate ให้เป็นคำอธิบายภาษาไทยที่ถูกต้อง สมบูรณ์ และเข้าใจง่าย
 */
export function formatHeroSignatureDescription(hero: any): string {
  if (!hero) return 'ปลดปล่อยพลังสัตว์ป่าขั้นสูงสุด โจมตีสร้างความเสียหายอย่างรุนแรงและแสดงพลังประจำธาตุ';
  
  const descFromMap = SIG_DESC_MAP[hero.id] || SIG_DESC_MAP[hero.name];
  const sigCfg = (heroesData as any).signatureByClass?.[hero.rarity];
  const sigDmgMult = hero.customSigMult ?? sigCfg?.damageMult ?? (hero.rarity === 'SS' ? 4.5 : hero.rarity === 'S' ? 3.6 : hero.rarity === 'A' ? 2.8 : 2.0);

  if (descFromMap) {
    if (descFromMap.includes('ตี') || descFromMap.includes('ดาเมจ') || descFromMap.includes('×') || descFromMap.includes('เท่า') || descFromMap.includes('เพลิงเผาศัตรู')) {
      return descFromMap;
    }
    return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · ${descFromMap}`;
  }

  const ef = hero.signatureEffect;
  if (typeof ef === 'string') return ef;
  if (!ef || typeof ef !== 'object') {
    return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า ปลดปล่อยพลังประจำธาตุ`;
  }

  const dur = ef.duration || 2;
  const chance = ef.chance ? Math.round(ef.chance * 100) : (sigCfg ? Math.round(sigCfg.effectChance * 100) : 25);
  
  switch (ef.type) {
    case 'burn': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดเผาไหม้ (${dur} เทิร์น)`;
    case 'poison': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดพิษ (${dur} เทิร์น)`;
    case 'bleed': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดเลือดไหล (${dur} เทิร์น)`;
    case 'stun': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดสตัน (${dur} เทิร์น)`;
    case 'freeze': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% แช่แข็ง (${dur} เทิร์น)`;
    case 'root': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดตรึง (${dur} เทิร์น)`;
    case 'blind': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดตาบอด (${dur} เทิร์น)`;
    case 'confusion': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดสับสน (${dur} เทิร์น)`;
    case 'slow': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% ติดสโลว์ (${dur} เทิร์น)`;
    case 'buff_spd': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · โอกาส ${chance}% บัฟ SPD +${Math.round((ef.value || 0.15) * 100)}% (${dur} เทิร์น)`;
    case 'buff_def': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · บัฟ DEF +${Math.round((ef.value || 0.2) * 100)}% (${dur} เทิร์น)`;
    case 'buff_atk': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · บัฟ ATK +${Math.round((ef.value || 0.2) * 100)}% (${dur} เทิร์น)`;
    case 'shield': return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า · มอบเกราะ ${Math.round((ef.value || ef.shield || 0.15) * 100)}% Max HP (${dur} เทิร์น)`;
    default: return `โจมตีสร้างความเสียหาย ${sigDmgMult} เท่า ปลดปล่อยพลังประจำธาตุ`;
  }
}

export type SortCriteria = 'level' | 'rank' | 'stars' | 'bp' | 'element' | 'atk' | 'hp' | 'spd' | 'name';
export type SortDirection = 'desc' | 'asc';
export type StatusFilter = 'all' | 'in_team' | 'can_level' | 'can_star' | 'empty_skills';

export interface RosterFilterState {
  search: string;
  sortBy: SortCriteria;
  sortOrder: SortDirection;
  element: string; // 'all' หรือ id ของธาตุ (earth, fire, water, etc.)
  rarity: string;  // 'all' | 'SS' | 'S' | 'A' | 'B'
  role: string;    // 'all' | 'Striker' | 'Tank' | 'Assassin' | 'Supporter' | 'Controller'
  status: StatusFilter;
  pinActiveTeam: boolean;
}

// ============================================================================
// MMORPG Pet View State Architecture (Phase 1)
// ============================================================================
export type PetViewMode = 'collection' | 'detail';
export type PetDetailTab = 'overview' | 'status' | 'skills' | 'growth' | 'lore' | 'equipment';

export interface PetViewState {
  viewMode: PetViewMode;
  selectedHeroId: string | null;
  activeTab: PetDetailTab;
  savedScrollTop: number;
}

const petViewState: PetViewState = {
  viewMode: 'collection',
  selectedHeroId: null,
  activeTab: 'overview',
  savedScrollTop: 0,
};

export function getPetViewState(): Readonly<PetViewState> {
  return petViewState;
}

export function setPetViewMode(mode: PetViewMode, heroId?: string | null) {
  petViewState.viewMode = mode;
  if (heroId !== undefined) {
    petViewState.selectedHeroId = heroId;
  }
}

export function setPetDetailTab(tab: PetDetailTab) {
  petViewState.activeTab = tab;
}

export function savePetCollectionScroll(scrollTop: number) {
  petViewState.savedScrollTop = scrollTop;
}

export function resetPetViewState() {
  petViewState.viewMode = 'collection';
  petViewState.selectedHeroId = null;
  petViewState.activeTab = 'overview';
  petViewState.savedScrollTop = 0;
}

let activeDetailKeyHandler: ((e: KeyboardEvent) => void) | null = null;

// จดจำสถานะตัวกรองและการจัดเรียงตลอดทั้งเซสชัน เพื่อไม่ให้ตัวเลือกเด้งรีเซ็ตเวลาอัปเวลหรือเปลี่ยนทีม
const filterState: RosterFilterState = {
  search: '',
  sortBy: 'level',
  sortOrder: 'desc',
  element: 'all',
  rarity: 'all',
  role: 'all',
  status: 'all',
  pinActiveTeam: true,
};

const RARITY_ORDER: Record<string, number> = {
  SS: 4,
  S: 3,
  A: 2,
  B: 1,
};

const ELEMENT_ORDER: Record<string, number> = {
  fire: 1,
  water: 2,
  wind: 3,
  earth: 4,
  lightning: 5,
  ice: 6,
  plant: 7,
  poison: 8,
  dark: 9,
  light: 10,
  psychic: 11,
};

/** คำนวณพลังรบรวม (Battle Power - BP) */
export function computeHeroBattlePower(stats: ReturnType<typeof computeHeroStats>): number {
  return Math.round(
    (stats.maxHp * 0.25) +
    (stats.atk * 2.0) +
    (stats.def * 1.5) +
    (stats.spd * 1.2) +
    (stats.cri * 2.5) +
    (stats.block * 2.5)
  );
}

/** คัดกรองและจัดเรียงรายชื่อฮีโร่ตามเงื่อนไข */
function getFilteredAndSortedHeroes(
  ownedHeroes: OwnedHeroData[],
  save: PlayerSaveData,
  mainId: string,
  backupId: string
): OwnedHeroData[] {
  const query = filterState.search.trim().toLowerCase();

  // 1. กรอง (Filter)
  const filtered = ownedHeroes.filter(hData => {
    const meta = HERO_MAP.get(hData.heroId);
    if (!meta) return false;
    const el = ELEMENT_MAP.get(meta.element);

    // ค้นหาตามข้อความ
    if (query) {
      const matchName = meta.name.toLowerCase().includes(query);
      const matchId = meta.id.toLowerCase().includes(query);
      const matchRole = meta.role.toLowerCase().includes(query);
      const matchArchetype = meta.archetype.toLowerCase().includes(query);
      const matchElem = el ? el.name.toLowerCase().includes(query) : false;
      const matchSig = meta.signatureName.toLowerCase().includes(query);
      if (!matchName && !matchId && !matchRole && !matchArchetype && !matchElem && !matchSig) {
        return false;
      }
    }

    // กรองตามธาตุ
    if (filterState.element !== 'all' && meta.element !== filterState.element) {
      return false;
    }

    // กรองตามแร็งค์
    if (filterState.rarity !== 'all' && meta.rarity !== filterState.rarity) {
      return false;
    }

    // กรองตามสายบทบาท
    if (filterState.role !== 'all' && meta.role !== filterState.role) {
      return false;
    }

    // กรองตามสถานะความพร้อม
    if (filterState.status === 'in_team') {
      if (hData.heroId !== mainId && hData.heroId !== backupId) return false;
    } else if (filterState.status === 'can_level') {
      if (hData.level >= MAX_HERO_LEVEL) return false;
      const cost = getLevelUpCost(hData.level);
      if (save.inventory.food < cost.food || save.inventory.gold < cost.gold) return false;
    } else if (filterState.status === 'can_star') {
      if (hData.stars >= MAX_HERO_STARS) return false;
      const nextStar = hData.stars + 1;
      const cost = STAR_UPGRADE_COSTS[nextStar] || 50;
      const currentShards = save.inventory.shards[hData.heroId] || 0;
      if (currentShards < cost) return false;
    } else if (filterState.status === 'empty_skills') {
      if (hData.customSkills.filter(Boolean).length >= 4) return false;
    }

    return true;
  });

  // 2. จัดเรียง (Sort)
  const isAsc = filterState.sortOrder === 'asc';

  return filtered.sort((a, b) => {
    // หากเปิดตัวเลือกตรึงทีม ให้ตัวหลักและตัวสำรองขึ้นก่อนเสมอ
    if (filterState.pinActiveTeam) {
      const aTeamScore = a.heroId === mainId ? -2 : a.heroId === backupId ? -1 : 0;
      const bTeamScore = b.heroId === mainId ? -2 : b.heroId === backupId ? -1 : 0;
      if (aTeamScore !== bTeamScore) {
        return aTeamScore - bTeamScore;
      }
    }

    const aMeta = HERO_MAP.get(a.heroId)!;
    const bMeta = HERO_MAP.get(b.heroId)!;
    const aStats = computeHeroStats(a.heroId, a.level, a.stars);
    const bStats = computeHeroStats(b.heroId, b.level, b.stars);

    let cmp = 0;
    switch (filterState.sortBy) {
      case 'level':
        cmp = a.level - b.level;
        break;
      case 'rank': {
        const aRank = RARITY_ORDER[aMeta.rarity] || 0;
        const bRank = RARITY_ORDER[bMeta.rarity] || 0;
        cmp = aRank - bRank;
        break;
      }
      case 'stars':
        cmp = a.stars - b.stars;
        break;
      case 'bp': {
        const aBp = computeHeroBattlePower(aStats);
        const bBp = computeHeroBattlePower(bStats);
        cmp = aBp - bBp;
        break;
      }
      case 'element': {
        const aElemOrder = ELEMENT_ORDER[aMeta.element] || 99;
        const bElemOrder = ELEMENT_ORDER[bMeta.element] || 99;
        cmp = aElemOrder - bElemOrder;
        break;
      }
      case 'atk':
        cmp = aStats.atk - bStats.atk;
        break;
      case 'hp':
        cmp = aStats.maxHp - bStats.maxHp;
        break;
      case 'spd':
        cmp = aStats.spd - bStats.spd;
        break;
      case 'name':
        cmp = aMeta.name.localeCompare(bMeta.name, 'th');
        break;
    }

    // กลับทิศทางตาม Asc / Desc (ยกเว้นกรณีเสมอ)
    if (cmp !== 0) {
      return isAsc ? cmp : -cmp;
    }

    // กรณีค่าเท่ากัน ใช้ BP มากกว่า -> ชื่อตัวอักษร เป็นตัวตัดสิน
    const aBp = computeHeroBattlePower(aStats);
    const bBp = computeHeroBattlePower(bStats);
    if (bBp !== aBp) return bBp - aBp;
    return aMeta.name.localeCompare(bMeta.name, 'th');
  });
}

export function renderHeroesViewHtml(): string {
  const save = saveManager.getData();
  const ownedHeroesList = Object.values(save.ownedHeroes);
  const mainId = save.activeTeam1v1.mainHeroId;
  const backupId = save.activeTeam1v1.backupHeroId;

  // ตรวจสอบความถูกต้องของ selectedHeroId หากไม่มีในคลัง ให้ fallback กลับมา Collection
  if (petViewState.viewMode === 'detail') {
    if (!petViewState.selectedHeroId || !save.ownedHeroes[petViewState.selectedHeroId]) {
      petViewState.viewMode = 'collection';
      petViewState.selectedHeroId = null;
    }
  }

  if (petViewState.viewMode === 'detail' && petViewState.selectedHeroId) {
    return renderPetDetailViewHtml(petViewState.selectedHeroId, save, mainId, backupId);
  }

  return renderPetCollectionViewHtml(ownedHeroesList, save, mainId, backupId);
}

/** เรนเดอร์หน้าคลังสัตว์เลี้ยง (Page A: Pet Collection - Grid View) */
function renderPetCollectionViewHtml(
  ownedHeroesList: OwnedHeroData[],
  save: PlayerSaveData,
  mainId: string,
  backupId: string
): string {
  const allElements = getAllElements();

  // นับจำนวนสัตว์เลี้ยงในแต่ละธาตุของผู้เล่น
  const elementCounts: Record<string, number> = {};
  for (const h of ownedHeroesList) {
    const meta = HERO_MAP.get(h.heroId);
    if (meta) {
      elementCounts[meta.element] = (elementCounts[meta.element] || 0) + 1;
    }
  }

  const filteredList = getFilteredAndSortedHeroes(ownedHeroesList, save, mainId, backupId);

  return `
    <div class="heroes-view-container pet-collection-mode">
      <!-- 1v1 Team Bar -->
      <div class="active-team-banner">
        <div class="banner-title">
          <span>⚔️ ทีมประจำการต่อสู้ 1v1 (Active 1v1 Team)</span>
          <span style="font-size:0.8rem; color:var(--text-muted); font-weight:normal;">
            ใช้ในการผจญภัยด่านบทที่ 1 (ตัวหลักเริ่มสู้ก่อน / สลับตัวสำรองได้ตลอดเวลา)
          </span>
        </div>
        <div class="team-cards-pair">
          ${renderTeamHeroMini(mainId, 'ตัวหลัก (Main)')}
          <div class="team-swap-center-btn" id="btn-team-swap-pair" title="สลับตำแหน่งตัวหลักและตัวสำรอง">⇋</div>
          ${renderTeamHeroMini(backupId, 'ตัวสำรอง (Backup)')}
        </div>
      </div>

      <!-- Hero Collection Header & Roster Controls -->
      <div class="roster-toolbar-box">
        <div class="roster-header-row">
          <div>
            <h3>🐾 คลังสัตว์เลี้ยง (${ownedHeroesList.length} / ${HERO_MAP.size} ตัว)</h3>
            <div class="roster-subdesc">
              เลือกสัตว์เลี้ยงเพื่อดูสเตตัส สกิล อัปเกรดเลเวล ปลุกพลังดาว และจัดทีมรบ MMORPG
            </div>
          </div>
          <div class="roster-quick-actions">
            <button class="btn btn-xs btn-outline" id="btn-roster-reset-all" title="ล้างการค้นหาและคืนค่าตัวกรองเริ่มต้น">
              🔄 รีเซ็ตตัวกรอง
            </button>
          </div>
        </div>

        <!-- Filter & Sort Panel -->
        <div class="roster-controls-panel">
          <!-- Row 1: Search, Sort By, Sort Order, Pin Active Team -->
          <div class="roster-controls-top-row">
            <div class="roster-search-wrapper">
              <span class="search-icon">🔍</span>
              <input
                type="text"
                id="roster-search-input"
                class="roster-search-input"
                placeholder="ค้นหาชื่อสัตว์เลี้ยง, ธาตุ, สายวิชา..."
                value="${filterState.search}"
                autocomplete="off"
              />
              ${filterState.search ? `<button class="search-clear-btn" id="btn-search-clear" title="ล้างข้อความค้นหา">✕</button>` : ''}
            </div>

            <div class="roster-sort-group">
              <span class="sort-lbl">จัดเรียง:</span>
              <select id="roster-sort-by" class="roster-select" title="เลือกเกณฑ์การจัดเรียง">
                <option value="level" ${filterState.sortBy === 'level' ? 'selected' : ''}>เลเวล (Level)</option>
                <option value="rank" ${filterState.sortBy === 'rank' ? 'selected' : ''}>แร็งค์ / ความหายาก (Rank)</option>
                <option value="stars" ${filterState.sortBy === 'stars' ? 'selected' : ''}>ระดับดาว (Stars ★)</option>
                <option value="bp" ${filterState.sortBy === 'bp' ? 'selected' : ''}>พลังรบรวม (Battle Power - BP)</option>
                <option value="element" ${filterState.sortBy === 'element' ? 'selected' : ''}>ธาตุ (Element)</option>
                <option value="atk" ${filterState.sortBy === 'atk' ? 'selected' : ''}>พลังโจมตี (ATK)</option>
                <option value="hp" ${filterState.sortBy === 'hp' ? 'selected' : ''}>พลังชีวิต (HP)</option>
                <option value="spd" ${filterState.sortBy === 'spd' ? 'selected' : ''}>ความเร็ว (SPD)</option>
                <option value="name" ${filterState.sortBy === 'name' ? 'selected' : ''}>ชื่อสัตว์เลี้ยง (Name ก-ฮ)</option>
              </select>

              <button id="btn-sort-order-toggle" class="btn-sort-order" title="คลิกเพื่อสลับทิศทางการจัดเรียง">
                ${filterState.sortOrder === 'desc' ? '⬇️ มากไปน้อย' : '⬆️ น้อยไปมาก'}
              </button>

              <label class="pin-team-toggle-lbl" title="ตรึงฮีโร่ตัวหลักและตัวสำรองไว้บนสุดเสมอ เพื่อให้หาง่าย">
                <input type="checkbox" id="roster-pin-team-chk" ${filterState.pinActiveTeam ? 'checked' : ''} />
                <span>📌 นำทีมขึ้นก่อน</span>
              </label>
            </div>
          </div>

          <!-- Row 2: Element Filter Chips -->
          <div class="roster-elem-chips-container">
            <span class="chips-lbl">ธาตุ:</span>
            <div class="roster-elements-chips-bar custom-scrollbar">
              <button class="roster-elem-chip ${filterState.element === 'all' ? 'active' : ''}" data-elem="all">
                🌟 ทั้งหมด <span class="chip-count">(${ownedHeroesList.length})</span>
              </button>
              ${allElements.map(el => {
                const count = elementCounts[el.id] || 0;
                const isActive = filterState.element === el.id;
                return `
                  <button
                    class="roster-elem-chip ${isActive ? 'active' : ''} ${count === 0 ? 'zero-count' : ''}"
                    data-elem="${el.id}"
                    style="${isActive ? `background:${el.color}; border-color:${el.color}; color:#fff;` : ''}"
                    title="${el.name} (มีในคลัง ${count} ตัว)"
                  >
                    <span>${el.icon}</span> <span>${el.name}</span> <span class="chip-count">(${count})</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Row 3: Secondary Filters (Rarity, Role, Quick Status, Summary) -->
          <div class="roster-secondary-filters-row">
            <div class="filter-dropdown-item">
              <span class="f-lbl">แร็งค์:</span>
              <select id="roster-filter-rarity" class="roster-select-sm">
                <option value="all" ${filterState.rarity === 'all' ? 'selected' : ''}>ทั้งหมด</option>
                <option value="SS" ${filterState.rarity === 'SS' ? 'selected' : ''}>แร็งค์ SS</option>
                <option value="S" ${filterState.rarity === 'S' ? 'selected' : ''}>แร็งค์ S</option>
                <option value="A" ${filterState.rarity === 'A' ? 'selected' : ''}>แร็งค์ A</option>
                <option value="B" ${filterState.rarity === 'B' ? 'selected' : ''}>แร็งค์ B</option>
              </select>
            </div>

            <div class="filter-dropdown-item">
              <span class="f-lbl">สายบทบาท:</span>
              <select id="roster-filter-role" class="roster-select-sm">
                <option value="all" ${filterState.role === 'all' ? 'selected' : ''}>ทั้งหมด</option>
                <option value="Striker" ${filterState.role === 'Striker' ? 'selected' : ''}>⚔️ Striker (จู่โจม)</option>
                <option value="Assassin" ${filterState.role === 'Assassin' ? 'selected' : ''}>🗡️ Assassin (สังหาร)</option>
                <option value="Tank" ${filterState.role === 'Tank' ? 'selected' : ''}>🛡️ Tank (ป้องกัน)</option>
                <option value="Supporter" ${filterState.role === 'Supporter' ? 'selected' : ''}>💖 Supporter (สนับสนุน)</option>
                <option value="Controller" ${filterState.role === 'Controller' ? 'selected' : ''}>💫 Controller (ควบคุม)</option>
              </select>
            </div>

            <div class="filter-dropdown-item">
              <span class="f-lbl">สถานะด่วน:</span>
              <select id="roster-filter-status" class="roster-select-sm">
                <option value="all" ${filterState.status === 'all' ? 'selected' : ''}>ทั้งหมด</option>
                <option value="in_team" ${filterState.status === 'in_team' ? 'selected' : ''}>⚔️ อยู่ในทีม (หลัก/สำรอง)</option>
                <option value="can_level" ${filterState.status === 'can_level' ? 'selected' : ''}>🍖 พร้อมอัปเลเวล</option>
                <option value="can_star" ${filterState.status === 'can_star' ? 'selected' : ''}>⭐ พร้อมอัปดาว</option>
                <option value="empty_skills" ${filterState.status === 'empty_skills' ? 'selected' : ''}>🧩 สกิลยังไม่ครบ 4 ช่อง</option>
              </select>
            </div>

            <div class="roster-active-summary" id="roster-summary-text">
              แสดง <strong>${filteredList.length}</strong> / ${ownedHeroesList.length} ตัว
            </div>
          </div>
        </div>
      </div>

      <!-- Heroes Grid Container -->
      <div id="heroes-card-grid-container">
        ${renderHeroesGridHtml(filteredList, save, mainId, backupId)}
      </div>

      <!-- Skill Selection Modal Root (เปิดหน้าต่างเลือกสกิลได้ทันทีจากคลัง) -->
      <div id="skill-picker-modal-root"></div>
    </div>
  `;
}

/** เรนเดอร์หน้ารายละเอียดสัตว์เลี้ยงสไตล์ MMORPG (Page B: Pet Detail - Dual Panel) */
function renderPetDetailViewHtml(
  heroId: string,
  save: PlayerSaveData,
  mainId: string,
  backupId: string
): string {
  const heroMeta = HERO_MAP.get(heroId);
  const heroData = save.ownedHeroes[heroId];
  if (!heroMeta || !heroData) {
    return `
      <div class="heroes-view-container">
        <div class="roster-empty-state">
          <h4>ไม่พบข้อมูลสัตว์เลี้ยงตัวนี้ในคลัง</h4>
          <button class="btn btn-sm btn-gold" id="btn-pet-detail-back">🔙 กลับคลังสัตว์เลี้ยง</button>
        </div>
      </div>
    `;
  }

  const el = ELEMENT_MAP.get(heroMeta.element);
  const stats = computeHeroStats(heroId, heroData.level, heroData.stars);
  const bp = computeHeroBattlePower(stats);
  const isMain = heroId === mainId;
  const isBackup = heroId === backupId;

  const ownedHeroesList = Object.values(save.ownedHeroes);
  const filteredList = getFilteredAndSortedHeroes(ownedHeroesList, save, mainId, backupId);
  const currentIndex = filteredList.findIndex(h => h.heroId === heroId);
  const totalCount = filteredList.length;

  return `
    <div class="heroes-view-container pet-detail-mode">
      <!-- MMORPG Top Breadcrumb & Prev/Next Bar -->
      <div class="pet-detail-top-nav">
        <button class="btn btn-sm btn-outline" id="btn-pet-detail-back" title="ย้อนกลับไปยังคลังสัตว์เลี้ยง (รักษาตัวกรองเดิม)">
          🔙 กลับคลังสัตว์เลี้ยง
        </button>
        <div class="pet-detail-nav-counter">
          สัตว์เลี้ยงที่ <strong>${currentIndex >= 0 ? currentIndex + 1 : 1}</strong> จาก <strong>${totalCount}</strong> ตัว
        </div>
        <div class="pet-detail-prev-next-group">
          <button class="btn btn-sm btn-outline" id="btn-pet-detail-prev" ${totalCount <= 1 ? 'disabled' : ''} title="ดูสัตว์เลี้ยงตัวก่อนหน้า (หรือกดแป้น ◀ บนคีย์บอร์ด)">
            ◀ ตัวก่อนหน้า
          </button>
          <button class="btn btn-sm btn-outline" id="btn-pet-detail-next" ${totalCount <= 1 ? 'disabled' : ''} title="ดูสัตว์เลี้ยงตัวถัดไป (หรือกดแป้น ▶ บนคีย์บอร์ด)">
            ตัวถัดไป ▶
          </button>
        </div>
      </div>

      <!-- MMORPG Dual-Panel Layout -->
      <div class="pet-detail-dual-panel">
        <!-- LEFT PANEL: Pet Preview & Primary Controls -->
        <div class="pet-preview-panel">
          <div class="pet-preview-avatar-box" style="border-color:${el?.color || 'var(--accent-gold)'};">
            <span class="pet-preview-avatar-icon">${el?.icon || '🐾'}</span>
            <div class="pet-preview-rank-tag rarity-${heroMeta.rarity}">${heroMeta.rarity}</div>
          </div>

          <h2 class="pet-preview-name">${heroMeta.name}</h2>
          <div class="pet-preview-role-elem">
            <span class="roster-elem-pill" style="background:${el?.color || '#333'};">
              ${el?.icon} ${el?.name}
            </span>
            <span class="pet-preview-role-tag">สาย ${heroMeta.role} • ${heroMeta.archetype}</span>
          </div>

          <div class="pet-preview-level-stars">
            <div class="pet-preview-level">Level <strong>${heroData.level}</strong> / ${MAX_HERO_LEVEL}</div>
            <div class="roster-stars-badge">${'★'.repeat(heroData.stars)}${'☆'.repeat(MAX_HERO_STARS - heroData.stars)}</div>
          </div>

          <div class="pet-preview-bp-badge" title="พลังรบรวม (Battle Power)">
            ⚡ พลังรบ BP <strong>${bp.toLocaleString()}</strong>
          </div>

          <div class="pet-preview-team-status">
            ${isMain ? `<div class="team-pinned-tag main-tag">⚔️ ประจำการ: ตัวหลัก 1v1</div>` : ''}
            ${isBackup ? `<div class="team-pinned-tag backup-tag">🛡️ ประจำการ: ตัวสำรอง 1v1</div>` : ''}
            ${!isMain && !isBackup ? `<div class="team-standby-tag">💤 สถานะ: พักรบในคลัง</div>` : ''}
          </div>

          <div class="pet-preview-actions">
            <button class="btn btn-sm ${isMain ? 'btn-primary active' : 'btn-outline'} btn-set-main" data-hero-id="${heroId}">
              ${isMain ? '✓ กำลังเป็นตัวหลัก' : '⚔️ ตั้งเป็นตัวหลัก'}
            </button>
            <button class="btn btn-sm ${isBackup ? 'btn-secondary active' : 'btn-outline'} btn-set-backup" data-hero-id="${heroId}">
              ${isBackup ? '✓ กำลังเป็นตัวสำรอง' : '🛡️ ตั้งเป็นตัวสำรอง'}
            </button>
            <button class="btn btn-sm btn-outline" id="btn-pet-preview-back" title="กลับไปยังคลังสัตว์เลี้ยง">
              🔙 กลับคลังสัตว์
            </button>
          </div>
        </div>

        <!-- RIGHT PANEL: MMORPG Tab Navigation & Information -->
        <div class="pet-info-panel">
          <!-- MMORPG Tab Navigation Bar -->
          <div class="pet-detail-tabs-bar">
            <button class="pet-detail-tab-btn ${petViewState.activeTab === 'overview' ? 'active' : ''}" data-tab="overview">
              📋 ภาพรวม
            </button>
            <button class="pet-detail-tab-btn ${petViewState.activeTab === 'status' ? 'active' : ''}" data-tab="status">
              📊 ค่าสเตตัส
            </button>
            <button class="pet-detail-tab-btn ${petViewState.activeTab === 'skills' ? 'active' : ''}" data-tab="skills">
              ⚡ สกิล 4 ช่อง
            </button>
            <button class="pet-detail-tab-btn ${petViewState.activeTab === 'growth' ? 'active' : ''}" data-tab="growth">
              🍖 พัฒนา
            </button>
            <button class="pet-detail-tab-btn ${petViewState.activeTab === 'lore' ? 'active' : ''}" data-tab="lore">
              📖 ข้อมูลสัตว์โลก
            </button>
            <button class="pet-detail-tab-btn ${petViewState.activeTab === 'equipment' ? 'active' : ''}" data-tab="equipment">
              🛡️ อุปกรณ์
            </button>
          </div>

          <!-- Active Tab Content Frame -->
          <div class="pet-tab-content-frame">
            ${renderPetDetailActiveTabHtml(heroId, heroMeta, heroData, stats, el, save)}
          </div>
        </div>
      </div>

      <!-- Skill Selection Modal Root -->
      <div id="skill-picker-modal-root"></div>

      <!-- Growth Confirmation Modal Root (Phase 4: Level Up & Star Up Dialog) -->
      <div id="growth-confirm-modal-root"></div>
    </div>
  `;
}

/** เรนเดอร์เนื้อหาภายใน Tab ที่เลือกของ Pet Detail */
function renderPetDetailActiveTabHtml(
  heroId: string,
  heroMeta: NonNullable<ReturnType<typeof HERO_MAP.get>>,
  heroData: OwnedHeroData,
  stats: ReturnType<typeof computeHeroStats>,
  el: ReturnType<typeof ELEMENT_MAP.get>,
  save: PlayerSaveData
): string {
  switch (petViewState.activeTab) {
    case 'overview': {
      const isMain = heroId === save.activeTeam1v1.mainHeroId;
      const isBackup = heroId === save.activeTeam1v1.backupHeroId;
      const equippedSkills = heroData.customSkills || [];

      return `
        <div class="pet-tab-overview">
          <!-- Section 1: Lore & Highlights -->
          <div class="pet-overview-section">
            <h4 class="section-title">🐾 เอกลักษณ์และจุดเด่นสัตว์ป่า</h4>
            <p class="pet-lore-desc">${(heroMeta as { personality?: string }).personality || 'สัตว์ป่าผู้ทรงพลังแห่งพงไพร พร้อมยืนหยัดเคียงข้างผู้พิทักษ์'}</p>
            <div class="pet-tag-chips">
              <span class="pet-tag-chip">แร็งค์: <strong class="rarity-${heroMeta.rarity}">${heroMeta.rarity}</strong></span>
              <span class="pet-tag-chip">ธาตุ: <strong style="color:${el?.color || '#ffd54f'};">${el?.icon} ${el?.name}</strong></span>
              <span class="pet-tag-chip">บทบาท: <strong>${heroMeta.role}</strong></span>
              <span class="pet-tag-chip">สายการต่อสู้: <strong>${heroMeta.archetype}</strong></span>
              <span class="pet-tag-chip">ตำแหน่งที่แนะนำ: <strong>${heroMeta.preferredRow === 'front' ? 'แนวหน้า (Front)' : heroMeta.preferredRow === 'back' ? 'แนวหลัง (Back)' : 'ยืดหยุ่น (Any)'}</strong></span>
            </div>
          </div>

          <!-- Section 2: Team Deployment Status -->
          <div class="pet-overview-section">
            <h4 class="section-title">⚔️ สถานะประจำการในทีมรบ 1v1</h4>
            <div class="team-deployment-card ${isMain ? 'is-main' : isBackup ? 'is-backup' : 'is-standby'}">
              <div class="deploy-icon">${isMain ? '⚔️' : isBackup ? '🛡️' : '💤'}</div>
              <div class="deploy-info">
                <div class="deploy-title">${isMain ? 'ตัวหลักประจำทีม (Main Fighter)' : isBackup ? 'ตัวสำรองประจำทีม (Backup Fighter)' : 'พักรบในคลังสัตว์เลี้ยง (Standby)'}</div>
                <div class="deploy-desc">
                  ${isMain ? 'สัตว์เลี้ยงตัวนี้จะลงสู่สนามรบเป็นตัวแรกในโหมดการต่อสู้ 1v1' : isBackup ? 'สามารถกดแท็กสลับตัวเข้าสู่สนามรบเพื่อแก้ทางธาตุหรือพลิกสถานการณ์ได้' : 'สัตว์เลี้ยงพร้อมถูกเลือกตั้งเป็นตัวหลักหรือตัวสำรองได้ตลอดเวลา'}
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Innate Ability -->
          <div class="pet-overview-section">
            <h4 class="section-title">✨ Ability ประจำตัว (Passive ตามธรรมชาติสัตว์)</h4>
            <div class="pet-ability-card">
              <div class="ability-header">
                <span class="ability-name">${heroMeta.ability.name}</span>
                <span class="ability-trigger-tag">พาสซีฟติดตัว</span>
              </div>
              <p class="ability-full-desc">${heroMeta.ability.description}</p>
            </div>
          </div>

          <!-- Section 4: Signature Ultimate -->
          <div class="pet-overview-section">
            <h4 class="section-title">🔥 ท่าไม้ตายปลดปล่อยพลัง (Signature Ultimate)</h4>
            <div class="pet-sig-card">
              <div class="sig-header">
                <span class="sig-name">${heroMeta.signatureName}</span>
                <span class="sig-cost-tag">เกจ 100 แต้ม</span>
              </div>
              <p class="sig-desc">${formatHeroSignatureDescription(heroMeta)}</p>
            </div>
          </div>

          <!-- Section 5: Equipped Skills Summary -->
          <div class="pet-overview-section">
            <div class="overview-skills-header">
              <h4 class="section-title">⚡ สรุปสกิลที่ติดตั้ง (4 ช่อง)</h4>
              <button class="btn btn-xs btn-outline-gold btn-switch-to-skills-tab" title="สลับไปยังแท็บสกิลเพื่อปรับแต่ง">
                ⚙️ จัดการสกิล ➔
              </button>
            </div>
            <div class="overview-skills-chips-row">
              ${[0, 1, 2, 3].map(slotIdx => {
                const skId = equippedSkills[slotIdx];
                const sk = skId ? skillBoardManager.getSkill(skId) : null;
                if (sk) {
                  const branchInfo = getSkillBranchInfo(sk);
                  const emoji = getSkillEmoji(sk);
                  return `
                    <div class="overview-skill-chip has-skill" style="border-color:${branchInfo.color}55;">
                      <span class="sk-chip-slot">${slotIdx + 1}</span>
                      <span class="sk-chip-icon">${emoji}</span>
                      <div class="sk-chip-text">
                        <span class="sk-chip-name">${sk.name}</span>
                        <span class="sk-chip-tier tier-${sk.tier}">${sk.tier} • Lv.${sk.level}</span>
                      </div>
                    </div>
                  `;
                }
                return `
                  <div class="overview-skill-chip is-empty">
                    <span class="sk-chip-slot empty">${slotIdx + 1}</span>
                    <span class="sk-chip-empty-txt">ช่องว่าง</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }

    case 'status': {
      const baseStats = computeHeroStats(heroId, 1, 1);
      const bonusHp = Math.round(stats.maxHp - baseStats.maxHp);
      const bonusAtk = Math.round(stats.atk - baseStats.atk);
      const bonusDef = Math.round(stats.def - baseStats.def);
      const bonusSpd = Math.round(stats.spd - baseStats.spd);

      return `
        <div class="pet-tab-status">
          <!-- Group 1: Offensive Stats -->
          <div class="stat-group-card offensive">
            <h4 class="group-title">⚔️ สถิติการโจมตี (Offensive Stats)</h4>
            <div class="stat-grid-rows">
              <div class="stat-row">
                <span class="stat-name">พลังโจมตี (ATK)</span>
                <span class="stat-val highlight">
                  ${Math.round(stats.atk)}
                  <small class="stat-split-note">(พื้นฐาน ${Math.round(baseStats.atk)} <span class="bonus-stat">+${bonusAtk}</span>)</small>
                </span>
              </div>
              <div class="stat-row"><span class="stat-name">โอกาสคริติคอล (CRI%)</span><span class="stat-val">${stats.cri.toFixed(1)}%</span></div>
              <div class="stat-row"><span class="stat-name">ความแรงคริติคอล (CRI DMG)</span><span class="stat-val">${Math.round(stats.criDmg * 100)}%</span></div>
              <div class="stat-row"><span class="stat-name">ความแม่นยำ (HIT)</span><span class="stat-val">${Math.round(stats.hit)}</span></div>
              <div class="stat-row"><span class="stat-name">เจาะเกราะ (Armor Break - AB)</span><span class="stat-val">${Math.round(stats.ab)}%</span></div>
            </div>
          </div>

          <!-- Group 2: Defensive Stats -->
          <div class="stat-group-card defensive">
            <h4 class="group-title">🛡️ สถิติการป้องกัน (Defensive Stats)</h4>
            <div class="stat-grid-rows">
              <div class="stat-row">
                <span class="stat-name">พลังชีวิตสูงสุด (Max HP)</span>
                <span class="stat-val highlight">
                  ${Math.round(stats.maxHp)}
                  <small class="stat-split-note">(พื้นฐาน ${Math.round(baseStats.maxHp)} <span class="bonus-stat">+${bonusHp}</span>)</small>
                </span>
              </div>
              <div class="stat-row">
                <span class="stat-name">พลังป้องกัน (DEF)</span>
                <span class="stat-val">
                  ${Math.round(stats.def)}
                  <small class="stat-split-note">(พื้นฐาน ${Math.round(baseStats.def)} <span class="bonus-stat">+${bonusDef}</span>)</small>
                </span>
              </div>
              <div class="stat-row"><span class="stat-name">อัตราบล็อก (Block Rate)</span><span class="stat-val">${Math.round(stats.block)}%</span></div>
              <div class="stat-row">
                <span class="stat-name">ต้านทานสถานะ (RESIST)</span>
                <span class="stat-val">${Math.round(stats.sta * 0.5)}% <small class="stat-split-note">(คำนวณจาก STA)</small></span>
              </div>
            </div>
          </div>

          <!-- Group 3: Utility Stats -->
          <div class="stat-group-card utility">
            <h4 class="group-title">⚡ สถิติความเร็วและความคล่องตัว (Utility Stats)</h4>
            <div class="stat-grid-rows">
              <div class="stat-row">
                <span class="stat-name">ความเร็วออกแอ็กชัน (SPD)</span>
                <span class="stat-val highlight">
                  ${Math.round(stats.spd)}
                  <small class="stat-split-note">(พื้นฐาน ${Math.round(baseStats.spd)} <span class="bonus-stat">+${bonusSpd}</span>)</small>
                </span>
              </div>
              <div class="stat-row"><span class="stat-name">อัตราหลบหลีก (FLEE)</span><span class="stat-val">${Math.round(stats.flee)}</span></div>
              <div class="stat-row"><span class="stat-name">มานาสูงสุด (Max SP)</span><span class="stat-val">${Math.round(stats.maxSp)}</span></div>
              <div class="stat-row"><span class="stat-name">ฟื้นฟู SP ต่อเทิร์น</span><span class="stat-val">+${stats.spRegen} SP/เทิร์น</span></div>
            </div>
          </div>

          <!-- Group 4: Primary Attributes -->
          <div class="stat-group-card attributes">
            <h4 class="group-title">🌟 คุณสมบัติพื้นฐาน 3 สาย (Core Attributes)</h4>
            <div class="stat-grid-rows">
              <div class="stat-row"><span class="stat-name">พลังกาย (STR - Strength)</span><span class="stat-val str-color">${stats.str}</span></div>
              <div class="stat-row"><span class="stat-name">ความคล่องแคล่ว (AGI - Agility)</span><span class="stat-val agi-color">${stats.agi}</span></div>
              <div class="stat-row"><span class="stat-name">ความอึดทน (STA - Stamina)</span><span class="stat-val sta-color">${stats.sta}</span></div>
            </div>
          </div>
        </div>
      `;
    }

    case 'skills': {
      return `
        <div class="pet-tab-skills">
          <div class="tab-desc-note">
            ⚡ สกิลทั้ง 4 ช่องที่สัตว์เลี้ยงตัวนี้สวมใส่ สามารถคลิกที่ช่องใดก็ได้เพื่อเลือกติดตั้งหรือเปลี่ยนสกิลใหม่จากคลังวิชา หรือกดปุ่ม <strong>[ ⚙️ ปรับแต่งสกิล ]</strong>
          </div>
          ${renderHeroEquippedSkillsVerticalHtml(heroData.customSkills, heroId)}
        </div>
      `;
    }

    case 'growth': {
      const isMaxLevel = heroData.level >= MAX_HERO_LEVEL;
      const levelCost = !isMaxLevel ? getLevelUpCost(heroData.level) : null;
      const canLevelUp = levelCost
        ? save.inventory.food >= levelCost.food && save.inventory.gold >= levelCost.gold
        : false;

      const nextLevelStats = !isMaxLevel ? computeHeroStats(heroId, heroData.level + 1, heroData.stars) : null;
      const currentBp = computeHeroBattlePower(stats);
      const nextLevelBp = nextLevelStats ? computeHeroBattlePower(nextLevelStats) : null;

      const isMaxStars = heroData.stars >= MAX_HERO_STARS;
      const nextStar = heroData.stars + 1;
      const starCost = !isMaxStars ? (STAR_UPGRADE_COSTS[nextStar] || 50) : null;
      const currentShards = save.inventory.shards[heroId] || 0;
      const canStarUp = starCost ? currentShards >= starCost : false;

      const nextStarStats = !isMaxStars ? computeHeroStats(heroId, heroData.level, nextStar) : null;
      const nextStarBp = nextStarStats ? computeHeroBattlePower(nextStarStats) : null;
      const nextStarBonusPct = nextStar === 2 ? 5 : nextStar === 3 ? 7 : nextStar === 4 ? 8 : 10;

      return `
        <div class="pet-tab-growth">
          <!-- Level Upgrade Card -->
          <div class="growth-action-card">
            <div class="growth-card-header">
              <span class="growth-title">🍖 เพิ่มเลเวลสัตว์เลี้ยง (Level Upgrade)</span>
              <span class="growth-badge">Lv.${heroData.level} / ${MAX_HERO_LEVEL}</span>
            </div>
            <p class="growth-desc">ใช้เสบียง (Food) และเหรียญทอง (Gold) เพื่อเพิ่มเลเวล ค่าสเตตัส HP, ATK, DEF และ SPD จะเพิ่มขึ้นตามธรรมชาติ</p>

            ${isMaxLevel
              ? `<div class="growth-max-badge">✨ เลเวลสูงสุดแล้ว (Lv.50)</div>`
              : `
                <!-- Preview Stat Increase -->
                <div class="growth-preview-box">
                  <div class="preview-box-title">📈 สเตตัสที่จะได้รับเมื่ออัปเป็น Lv.${heroData.level + 1}:</div>
                  <div class="preview-stat-items">
                    <span class="prev-chip">HP: <strong>${Math.round(stats.maxHp)}</strong> ➔ <strong>${Math.round(nextLevelStats!.maxHp)}</strong> <span class="delta-val">(+${Math.round(nextLevelStats!.maxHp - stats.maxHp)})</span></span>
                    <span class="prev-chip">ATK: <strong>${Math.round(stats.atk)}</strong> ➔ <strong>${Math.round(nextLevelStats!.atk)}</strong> <span class="delta-val">(+${Math.round(nextLevelStats!.atk - stats.atk)})</span></span>
                    <span class="prev-chip">DEF: <strong>${Math.round(stats.def)}</strong> ➔ <strong>${Math.round(nextLevelStats!.def)}</strong> <span class="delta-val">(+${Math.round(nextLevelStats!.def - stats.def)})</span></span>
                    <span class="prev-chip">SPD: <strong>${Math.round(stats.spd)}</strong> ➔ <strong>${Math.round(nextLevelStats!.spd)}</strong> <span class="delta-val">(+${(nextLevelStats!.spd - stats.spd).toFixed(1)})</span></span>
                    <span class="prev-chip bp-chip">⚡ BP: <strong>${currentBp.toLocaleString()}</strong> ➔ <strong>${nextLevelBp!.toLocaleString()}</strong> <span class="delta-val bp">(+${nextLevelBp! - currentBp})</span></span>
                  </div>
                </div>

                <div class="growth-cost-row">
                  <span class="cost-item ${save.inventory.food >= (levelCost?.food || 0) ? 'cost-ok' : 'cost-short'}">
                    🍖 เสบียง: <strong>${levelCost?.food}</strong> (มี: ${save.inventory.food.toLocaleString()})
                  </span>
                  <span class="cost-item ${save.inventory.gold >= (levelCost?.gold || 0) ? 'cost-ok' : 'cost-short'}">
                    🪙 เหรียญทอง: <strong>${levelCost?.gold}</strong> (มี: ${save.inventory.gold.toLocaleString()})
                  </span>
                </div>

                <button class="btn btn-sm ${canLevelUp ? 'btn-success' : 'btn-outline-danger'} btn-hero-level-up" data-hero-id="${heroId}" ${!canLevelUp ? 'disabled' : ''}>
                  🍖 ยืนยันการอัปเลเวล (Lv.${heroData.level + 1})
                </button>
              `
            }
          </div>

          <!-- Star Awakening Card -->
          <div class="growth-action-card">
            <div class="growth-card-header">
              <span class="growth-title">⭐ ปลุกพลังดาว (Star Awakening)</span>
              <span class="growth-badge">${'★'.repeat(heroData.stars)}${'☆'.repeat(MAX_HERO_STARS - heroData.stars)}</span>
            </div>
            <p class="growth-desc">ใช้เศษวิญญาณเพื่อปลุกพลังดาว เพิ่มตัวคูณสเตตัสรวมและโบนัสพลังรบ (BP) อย่างมหาศาล</p>

            ${isMaxStars
              ? `<div class="growth-max-badge">🌟 ดาวระดับสูงสุดแล้ว (★5)</div>`
              : `
                <!-- Preview Star Increase -->
                <div class="growth-preview-box star-preview">
                  <div class="preview-box-title">⭐ ผลลัพธ์เมื่อปลุกพลังดาวเป็น ★${nextStar}:</div>
                  <div class="preview-stat-items">
                    <span class="prev-chip">ระดับดาว: <strong>★${heroData.stars}</strong> ➔ <strong>★${nextStar}</strong></span>
                    <span class="prev-chip">ตัวคูณโบนัสสเตตัส: <span class="delta-val gold">+${nextStarBonusPct}%</span></span>
                    <span class="prev-chip">HP: <strong>${Math.round(stats.maxHp)}</strong> ➔ <strong>${Math.round(nextStarStats!.maxHp)}</strong> <span class="delta-val gold">(+${Math.round(nextStarStats!.maxHp - stats.maxHp)})</span></span>
                    <span class="prev-chip">ATK: <strong>${Math.round(stats.atk)}</strong> ➔ <strong>${Math.round(nextStarStats!.atk)}</strong> <span class="delta-val gold">(+${Math.round(nextStarStats!.atk - stats.atk)})</span></span>
                    <span class="prev-chip bp-chip">⚡ BP: <strong>${currentBp.toLocaleString()}</strong> ➔ <strong>${nextStarBp!.toLocaleString()}</strong> <span class="delta-val gold">(+${nextStarBp! - currentBp})</span></span>
                  </div>
                </div>

                <div class="growth-cost-row">
                  <span class="cost-item ${currentShards >= (starCost || 0) ? 'cost-ok' : 'cost-short'}">
                    🧩 เศษวิญญาณ: <strong>${currentShards} / ${starCost}</strong> ชิ้น
                  </span>
                </div>

                <button class="btn btn-sm ${canStarUp ? 'btn-gold' : 'btn-outline-disabled'} btn-hero-star-up" data-hero-id="${heroId}" ${!canStarUp ? 'disabled' : ''}>
                  ⭐ ยืนยันการปลุกพลังดาว (★${nextStar})
                </button>
              `
            }
          </div>
        </div>
      `;
    }

    case 'lore': {
      const lore = getAnimalLore(heroId, heroMeta);
      const elColor = el?.color || '#ffd54f';
      const elIcon = el?.icon || '✨';
      const elName = el?.name || 'ทั่วไป';

      return `
        <div class="pet-tab-lore">
          <!-- Top Header: Lore Book Title Banner -->
          <div class="lore-header-banner" style="border-left: 4px solid ${elColor};">
            <div class="lore-header-left">
              <div class="lore-book-badge">📖 สารานุกรมสัตว์โลกแห่ง Animalia</div>
              <h3 class="lore-animal-name">
                ${heroMeta.name}
                <small class="lore-sci-name">(${lore.scientificName})</small>
              </h3>
              <div class="lore-category-tag">
                <span class="lore-pill">🐾 ${lore.category}</span>
                <span class="lore-pill" style="color: ${elColor};">ธาตุ${elName} ${elIcon}</span>
                <span class="lore-pill">บทบาท: ${heroMeta.role}</span>
              </div>
            </div>
            <div class="lore-header-right">
              <div class="lore-element-seal" style="border-color: ${elColor}55; background: radial-gradient(circle, ${elColor}22 0%, transparent 70%);">
                <span class="seal-icon">${elIcon}</span>
                <span class="seal-name" style="color: ${elColor};">${elName}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Fantasy Elemental Origin (ทำไมสัตว์ตัวนี้ถึงเป็นธาตุนี้) -->
          <div class="lore-section-card elemental-origin-card" style="border-color: ${elColor}44; background: linear-gradient(135deg, ${elColor}11 0%, #17110c 100%);">
            <div class="lore-section-header">
              <span class="lore-section-icon">🔮</span>
              <h4 class="lore-section-title" style="color: ${elColor};">กำเนิดพลังธาตุแฟนตาซี: ทำไม ${heroMeta.name} ถึงเป็นธาตุ${elName}?</h4>
            </div>
            <p class="lore-elemental-text">${lore.elementalOrigin}</p>
          </div>

          <!-- Section 2: Real-World Wildlife Facts (สารานุกรมชีววิทยาตามธรรมชาติ) -->
          <div class="lore-section-card wildlife-facts-card">
            <div class="lore-section-header">
              <span class="lore-section-icon">🌿</span>
              <h4 class="lore-section-title">ความรู้รอบตัวตามธรรมชาติ (Real-World Wildlife)</h4>
            </div>
            <div class="wildlife-facts-grid">
              <div class="wildlife-fact-item">
                <div class="fact-label">🌍 ถิ่นที่อยู่อาศัยตามธรรมชาติ</div>
                <div class="fact-value">${lore.naturalHabitat}</div>
              </div>
              <div class="wildlife-fact-item">
                <div class="fact-label">🥗 ประเภทอาหารและการกิน</div>
                <div class="fact-value">${lore.diet}</div>
              </div>
              <div class="wildlife-fact-item full-width">
                <div class="fact-label">🐾 ลักษณะทางกายภาพเด่น</div>
                <div class="fact-value">${lore.physicalFeatures}</div>
              </div>
              <div class="wildlife-fact-item full-width">
                <div class="fact-label">🕰️ พฤติกรรมในชีวิตประจำวัน</div>
                <div class="fact-value">${lore.natureBehavior}</div>
              </div>
            </div>
          </div>

          <!-- Section 3: Did You Know? (เกร็ดความรู้ชวนทึ่ง) -->
          <div class="lore-section-card did-you-know-card">
            <div class="lore-section-header">
              <span class="lore-section-icon">💡</span>
              <h4 class="lore-section-title">เกร็ดความรู้น่าทึ่ง (Did You Know?)</h4>
            </div>
            <p class="did-you-know-text">${lore.didYouKnow}</p>
          </div>

          <!-- Section 4: From Nature to Battle Skill (จากธรรมชาติสู่สังเวียนการรบ) -->
          <div class="lore-section-card combat-connection-card">
            <div class="lore-section-header">
              <span class="lore-section-icon">⚔️</span>
              <h4 class="lore-section-title">จากธรรมชาติสู่สังเวียนการรบ (From Nature to Skills)</h4>
            </div>
            <p class="combat-connection-text">${lore.combatConnection}</p>
          </div>
        </div>
      `;
    }

    case 'equipment': {
      return `
        <div class="pet-tab-equipment">
          <div class="equipment-empty-banner">
            <div class="empty-icon">🔒</div>
            <h4>ระบบอุปกรณ์สัตว์เลี้ยง (Equipment System)</h4>
            <p>ระบบสวมใส่อาวุธ ชุดเกราะ และเครื่องรางสัตว์เลี้ยงกำลังอยู่ในขั้นตอนการพัฒนาสำหรับเวอร์ชันถัดไป</p>
            <div class="equipment-slots-preview">
              <div class="eq-slot-box locked" title="ช่องอาวุธ (ล็อก)"><span class="eq-icon">⚔️</span><span class="eq-lbl">อาวุธ</span></div>
              <div class="eq-slot-box locked" title="ช่องเกราะ (ล็อก)"><span class="eq-icon">🛡️</span><span class="eq-lbl">ชุดเกราะ</span></div>
              <div class="eq-slot-box locked" title="ช่องเครื่องราง 1 (ล็อก)"><span class="eq-icon">💍</span><span class="eq-lbl">เครื่องราง 1</span></div>
              <div class="eq-slot-box locked" title="ช่องเครื่องราง 2 (ล็อก)"><span class="eq-icon">📿</span><span class="eq-lbl">เครื่องราง 2</span></div>
            </div>
            <div class="equipment-status-tag">สถานะ: ช่องสวมใส่ล็อก ยังไม่เปิดใช้งานในเวอร์ชันนี้</div>
          </div>
        </div>
      `;
    }
  }
}

/** เรนเดอร์รายการสกิล 4 ช่องที่สวมใส่ เรียงลงมาเป็นแถวแนวตั้ง พร้อมไอคอนและชื่อสกิล */
function renderHeroEquippedSkillsVerticalHtml(customSkills: string[], heroId: string): string {
  const skills = customSkills || [];
  const rows: string[] = [];

  for (let slotIdx = 0; slotIdx < 4; slotIdx++) {
    const skId = skills[slotIdx];
    const sk = skId ? skillBoardManager.getSkill(skId) : null;

    if (sk) {
      const branchInfo = getSkillBranchInfo(sk);
      const skillEmoji = getSkillEmoji(sk);

      rows.push(`
        <div class="r-skill-row-item has-skill" data-hero-id="${heroId}" data-slot-idx="${slotIdx}" title="คลิกเพื่อเลือกหรือเปลี่ยนสกิลในช่องที่ ${slotIdx + 1} (${sk.name})">
          <div class="r-sk-slot-idx">${slotIdx + 1}</div>
          <div class="r-sk-icon-avatar tier-${sk.tier}" style="border-color: ${branchInfo.color};">
            <span class="r-sk-emoji">${skillEmoji}</span>
            <span class="r-sk-tier-tag tier-${sk.tier}">${sk.tier}</span>
          </div>
          <div class="r-sk-meta">
            <div class="r-sk-title-line">
              <span class="r-sk-name">${sk.name}</span>
              <span class="r-sk-branch-badge" style="color:${branchInfo.color}; border-color:${branchInfo.color}55;">
                ${branchInfo.icon} ${branchInfo.name}
              </span>
            </div>
            <div class="r-sk-sub-line">
              <span class="r-sk-sp">💧 SP ${sk.spCost}</span>
              <span class="r-sk-lvl">Lv.${sk.level}</span>
            </div>
          </div>
          <span class="r-sk-edit-hint" title="คลิกเพื่อเปลี่ยนสกิล">✏️</span>
        </div>
      `);
    } else {
      rows.push(`
        <div class="r-skill-row-item is-empty" data-hero-id="${heroId}" data-slot-idx="${slotIdx}" title="คลิกเพื่อเลือกติดตั้งสกิลลงในช่องที่ ${slotIdx + 1}">
          <div class="r-sk-slot-idx empty">${slotIdx + 1}</div>
          <div class="r-sk-icon-avatar empty">
            <span class="r-sk-empty-plus">➕</span>
          </div>
          <div class="r-sk-meta empty">
            <span class="r-sk-empty-text">ช่องว่าง (คลิกเพื่อติดตั้งสกิล)</span>
          </div>
          <span class="r-sk-edit-hint add" title="คลิกเพื่อติดตั้งสกิล">➕</span>
        </div>
      `);
    }
  }

  return `
    <div class="roster-skills-preview">
      <div class="skills-preview-header">
        <span class="skills-lbl">⚡ สกิล 4 ช่องที่สวมใส่:</span>
        <button class="btn-goto-skill-board" data-hero-id="${heroId}" title="คลิกเพื่อเปิดหน้าต่างเลือกสกิลสำหรับสัตว์เลี้ยงตัวนี้">
          ⚙️ ปรับแต่งสกิล
        </button>
      </div>
      <div class="r-skills-vertical-list">
        ${rows.join('')}
      </div>
    </div>
  `;
}

/** เรนเดอร์การ์ดสัตว์เลี้ยงในคลัง (Page A: MMORPG Pet Icon Cards) */
function renderHeroesGridHtml(
  heroesList: OwnedHeroData[],
  save: PlayerSaveData,
  mainId: string,
  backupId: string
): string {
  if (heroesList.length === 0) {
    return `
      <div class="roster-empty-state">
        <div class="empty-icon">🐾</div>
        <h4>ไม่พบสัตว์เลี้ยงที่ตรงตามเงื่อนไขที่เลือก</h4>
        <p>ลองปรับเปลี่ยนคำค้นหา หรือรีเซ็ตตัวกรองเพื่อดูสัตว์เลี้ยงทั้งหมดในคลังของคุณ</p>
        <button class="btn btn-sm btn-gold" id="btn-empty-reset-filters">
          🔄 ล้างตัวกรองทั้งหมด
        </button>
      </div>
    `;
  }

  return `
    <div class="heroes-card-grid">
      ${heroesList.map(hData => {
        const heroMeta = HERO_MAP.get(hData.heroId);
        if (!heroMeta) return '';
        const el = ELEMENT_MAP.get(heroMeta.element);
        const stats = computeHeroStats(hData.heroId, hData.level, hData.stars);
        const bp = computeHeroBattlePower(stats);
        const isMain = hData.heroId === mainId;
        const isBackup = hData.heroId === backupId;
        const isSelected = petViewState.selectedHeroId === hData.heroId;

        const levelCost = hData.level < MAX_HERO_LEVEL ? getLevelUpCost(hData.level) : null;
        const canLevelUp = levelCost
          ? save.inventory.food >= levelCost.food && save.inventory.gold >= levelCost.gold
          : false;

        const nextStar = hData.stars + 1;
        const starCost = hData.stars < MAX_HERO_STARS ? (STAR_UPGRADE_COSTS[nextStar] || 50) : null;
        const currentShards = save.inventory.shards[hData.heroId] || 0;
        const canStarUp = starCost ? currentShards >= starCost : false;

        const notifyTitle = canLevelUp && canStarUp
          ? 'พร้อมอัปเลเวล & ปลุกพลังดาว'
          : canLevelUp
            ? 'พร้อมอัปเลเวล'
            : 'พร้อมปลุกพลังดาว';

        return `
          <div
            class="pet-icon-card ${isSelected ? 'selected' : ''} ${isMain ? 'active-main' : isBackup ? 'active-backup' : ''}"
            data-hero-id="${hData.heroId}"
            role="button"
            tabindex="0"
            aria-label="${heroMeta.name}"
            title="${heroMeta.name} [แร็งค์ ${heroMeta.rarity}]&#10;ธาตุ: ${el?.name || ''} | สาย: ${heroMeta.role}&#10;Lv.${hData.level} | ★${hData.stars} | ⚡ BP: ${bp.toLocaleString()}&#10;${canLevelUp ? '• พร้อมอัปเลเวล\n' : ''}${canStarUp ? '• พร้อมปลุกดาว\n' : ''}👉 คลิกเพื่อดูรายละเอียดสัตว์เลี้ยง"
          >
            <!-- Active / Reserve Status Tag -->
            ${isMain ? `<div class="pet-card-team-tag main-tag">⚔️ ตัวหลัก</div>` : ''}
            ${isBackup ? `<div class="pet-card-team-tag backup-tag">🛡️ ตัวสำรอง</div>` : ''}

            <!-- Notification Badge เมื่อสามารถอัปเกรดหรือพัฒนาได้ -->
            ${(canLevelUp || canStarUp) ? `
              <div class="pet-notify-badge" title="${notifyTitle}">
                <span class="notify-icon">${canStarUp ? '⭐' : '🍖'}</span>
              </div>
            ` : ''}

            <!-- Header: Rank Badge & Element Icon -->
            <div class="pet-card-header-row">
              <span class="pet-card-rank rarity-${heroMeta.rarity}">${heroMeta.rarity}</span>
              <span class="pet-card-element" style="color:${el?.color || '#ffd54f'};" title="ธาตุ${el?.name || ''}">
                ${el?.icon || '🐾'}
              </span>
            </div>

            <!-- Avatar Box -->
            <div class="pet-card-avatar-wrap" style="border-color:${el?.color || '#ffd54f'};">
              <div class="pet-card-avatar">${el?.icon || '🐾'}</div>
            </div>

            <!-- Info: Name, Level, Stars -->
            <div class="pet-card-body">
              <div class="pet-card-name" title="${heroMeta.name}">${heroMeta.name}</div>
              <div class="pet-card-meta">
                <span class="pet-card-level">Lv.${hData.level}</span>
                <span class="pet-card-stars" title="${hData.stars} ดาว">${'★'.repeat(hData.stars)}</span>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderTeamHeroMini(heroId: string, roleLabel: string): string {
  const save = saveManager.getData();
  const heroData = save.ownedHeroes[heroId];
  const heroMeta = HERO_MAP.get(heroId);
  const el = heroMeta ? ELEMENT_MAP.get(heroMeta.element) : null;
  const stats = heroData ? computeHeroStats(heroId, heroData.level, heroData.stars) : null;
  const bp = stats ? computeHeroBattlePower(stats) : 0;

  return `
    <div class="team-mini-card" data-hero-id="${heroId}" title="คลิกเพื่อดูรายละเอียด ${heroMeta?.name || heroId}">
      <div class="mini-role-tag">${roleLabel}</div>
      <div class="mini-main-info">
        <span class="mini-elem">${el?.icon || '🐾'}</span>
        <div>
          <div class="mini-name">${heroMeta?.name || heroId}</div>
          <div class="mini-level">Lv.${heroData?.level || 1} • ★${heroData?.stars || 1} • ⚡ BP ${bp.toLocaleString()}</div>
        </div>
      </div>
      <div class="mini-stats">
        <span>HP ${Math.round(stats?.maxHp || 0)}</span> | <span>ATK ${Math.round(stats?.atk || 0)}</span>
      </div>
    </div>
  `;
}

/** ผูกเหตุการณ์ภายใน Card Grid (คลิกการ์ดเพื่อเปิด Pet Detail สไตล์ MMORPG) */
function bindCardEvents(
  gridContainer: HTMLElement,
  container: HTMLElement,
  onRosterChanged: () => void,
  onNavigateToSkillBoard?: (heroId: string) => void
) {
  // คลิก Pet Card เพื่อเปิดหน้ารายละเอียดสัตว์เลี้ยงสไตล์ MMORPG
  gridContainer.querySelectorAll('.pet-icon-card').forEach(cardEl => {
    cardEl.addEventListener('click', () => {
      const heroId = (cardEl as HTMLElement).dataset.heroId;
      if (heroId) {
        petViewState.savedScrollTop = window.scrollY || document.documentElement.scrollTop;
        petViewState.viewMode = 'detail';
        petViewState.selectedHeroId = heroId;
        onRosterChanged();
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    });

    // รองรับการกดแป้นพิมพ์ Enter / Space สำหรับ Accessibility
    cardEl.addEventListener('keydown', (e) => {
      const ke = e as KeyboardEvent;
      if (ke.key === 'Enter' || ke.key === ' ') {
        ke.preventDefault();
        (cardEl as HTMLElement).click();
      }
    });
  });

  // Empty state reset button
  gridContainer.querySelector('#btn-empty-reset-filters')?.addEventListener('click', () => {
    resetFilters();
    onRosterChanged();
  });
}

function resetFilters() {
  filterState.search = '';
  filterState.sortBy = 'level';
  filterState.sortOrder = 'desc';
  filterState.element = 'all';
  filterState.rarity = 'all';
  filterState.role = 'all';
  filterState.status = 'all';
  filterState.pinActiveTeam = true;
}

export function bindHeroesEvents(
  container: HTMLElement,
  onRosterChanged: () => void,
  onNavigateToSkillBoard?: (heroId: string) => void
) {
  if (petViewState.viewMode === 'detail' && petViewState.selectedHeroId) {
    bindPetDetailEvents(container, onRosterChanged, onNavigateToSkillBoard);
    return;
  }

  // เคลียร์คีย์บอร์ด Navigation เมื่อกลับสู่หน้า Collection
  if (activeDetailKeyHandler) {
    window.removeEventListener('keydown', activeDetailKeyHandler);
    activeDetailKeyHandler = null;
  }

  // Restore scroll position if returning from detail
  if (petViewState.savedScrollTop > 0) {
    const scrollPos = petViewState.savedScrollTop;
    setTimeout(() => {
      window.scrollTo({ top: scrollPos, behavior: 'instant' as ScrollBehavior });
    }, 10);
  }

  bindPetCollectionEvents(container, onRosterChanged, onNavigateToSkillBoard);
}

interface GrowthConfirmConfig {
  type: 'level' | 'star';
  heroId: string;
  heroMeta: NonNullable<ReturnType<typeof HERO_MAP.get>>;
  heroData: OwnedHeroData;
  currentStats: ReturnType<typeof computeHeroStats>;
  nextStats: ReturnType<typeof computeHeroStats>;
  costs: { name: string; icon: string; amount: number; current: number }[];
  onConfirm: () => void;
}

/** เปิด Modal ยืนยันการพัฒนา (Level Up / Star Awakening) เพื่อป้องกันการกดพลาด */
function openGrowthConfirmModal(
  container: HTMLElement,
  config: GrowthConfirmConfig
) {
  const root = container.querySelector('#growth-confirm-modal-root') || document.body;
  const { type, heroMeta, heroData, currentStats, nextStats, costs, onConfirm } = config;
  const el = ELEMENT_MAP.get(heroMeta.element);
  const currentBp = computeHeroBattlePower(currentStats);
  const nextBp = computeHeroBattlePower(nextStats);

  const modalHtml = `
    <div class="modal-backdrop growth-confirm-backdrop" id="growth-confirm-backdrop">
      <div class="growth-confirm-modal ${type === 'star' ? 'star-theme' : 'level-theme'}">
        <div class="growth-modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">${type === 'star' ? '⭐' : '🍖'}</span>
            <h3>${type === 'star' ? 'ยืนยันการปลุกพลังดาวสัตว์เลี้ยง' : 'ยืนยันการอัปเลเวลสัตว์เลี้ยง'}</h3>
          </div>
          <button class="modal-close-btn" id="btn-close-growth-modal" title="ปิดหน้าต่าง">✕</button>
        </div>

        <div class="growth-modal-body">
          <!-- Pet Identity Banner in Modal -->
          <div class="growth-modal-pet-bar">
            <div class="modal-pet-avatar" style="border-color:${el?.color || '#ffd54f'};">
              <span>${el?.icon || '🐾'}</span>
            </div>
            <div class="modal-pet-info">
              <div class="modal-pet-name">
                <strong>${heroMeta.name}</strong> 
                <span class="pet-card-rank rarity-${heroMeta.rarity}">${heroMeta.rarity}</span>
                <span class="modal-pet-elem" style="color:${el?.color || '#ffd54f'};">${el?.icon} ${el?.name}</span>
              </div>
              <div class="modal-upgrade-step">
                ${type === 'star' 
                  ? `ระดับดาว: <span class="step-from">★${heroData.stars}</span> ➔ <span class="step-to gold">★${heroData.stars + 1}</span>`
                  : `ระดับเลเวล: <span class="step-from">Lv.${heroData.level}</span> ➔ <span class="step-to green">Lv.${heroData.level + 1}</span>`
                }
              </div>
            </div>
          </div>

          <!-- Stat Comparison Box -->
          <div class="growth-modal-stats-box ${type === 'star' ? 'gold-glow' : ''}">
            <h5 class="stats-box-heading">📊 สเตตัสและพลังรบที่จะได้รับเพิ่ม:</h5>
            <div class="growth-stats-grid">
              <div class="g-stat-item">
                <span class="g-stat-lbl">HP:</span>
                <span class="g-stat-val">${Math.round(currentStats.maxHp)} ➔ ${Math.round(nextStats.maxHp)}</span>
                <span class="g-stat-diff ${type === 'star' ? 'gold' : ''}">(+${Math.round(nextStats.maxHp - currentStats.maxHp)})</span>
              </div>
              <div class="g-stat-item">
                <span class="g-stat-lbl">ATK:</span>
                <span class="g-stat-val">${Math.round(currentStats.atk)} ➔ ${Math.round(nextStats.atk)}</span>
                <span class="g-stat-diff ${type === 'star' ? 'gold' : ''}">(+${Math.round(nextStats.atk - currentStats.atk)})</span>
              </div>
              <div class="g-stat-item">
                <span class="g-stat-lbl">DEF:</span>
                <span class="g-stat-val">${Math.round(currentStats.def)} ➔ ${Math.round(nextStats.def)}</span>
                <span class="g-stat-diff ${type === 'star' ? 'gold' : ''}">(+${Math.round(nextStats.def - currentStats.def)})</span>
              </div>
              <div class="g-stat-item">
                <span class="g-stat-lbl">SPD:</span>
                <span class="g-stat-val">${Math.round(currentStats.spd)} ➔ ${Math.round(nextStats.spd)}</span>
                <span class="g-stat-diff ${type === 'star' ? 'gold' : ''}">(+${(nextStats.spd - currentStats.spd).toFixed(1)})</span>
              </div>
              <div class="g-stat-item g-bp-item">
                <span class="g-stat-lbl">⚡ พลังรบ BP รวม:</span>
                <span class="g-stat-val">${currentBp.toLocaleString()} ➔ ${nextBp.toLocaleString()}</span>
                <span class="g-stat-diff bp">(+${nextBp - currentBp})</span>
              </div>
            </div>
          </div>

          <!-- Resource Cost Box -->
          <div class="growth-modal-costs-box">
            <h5 class="costs-box-heading">🎒 ทรัพยากรที่ต้องใช้ในการพัฒนา:</h5>
            <div class="growth-costs-list">
              ${costs.map(c => `
                <div class="g-cost-pill">
                  <span class="g-cost-name">${c.icon} ${c.name}:</span>
                  <span class="g-cost-amount"><strong>${c.amount.toLocaleString()}</strong></span>
                  <span class="g-cost-rem">(มี: ${c.current.toLocaleString()} ➔ เหลือ ${(c.current - c.amount).toLocaleString()})</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="growth-modal-actions">
          <button class="btn btn-outline" id="btn-cancel-growth">
            ยกเลิก
          </button>
          <button class="btn ${type === 'star' ? 'btn-gold' : 'btn-success'}" id="btn-confirm-growth">
            ${type === 'star' ? '⭐ ยืนยันการปลุกพลังดาว' : '🍖 ยืนยันการอัปเลเวล'}
          </button>
        </div>
      </div>
    </div>
  `;

  const existingBackdrop = root.querySelector('#growth-confirm-backdrop');
  if (existingBackdrop) existingBackdrop.remove();

  const temp = document.createElement('div');
  temp.innerHTML = modalHtml;
  const modalEl = temp.firstElementChild as HTMLElement;
  root.appendChild(modalEl);

  const closeModal = () => {
    modalEl.remove();
  };

  modalEl.querySelector('#btn-close-growth-modal')?.addEventListener('click', closeModal);
  modalEl.querySelector('#btn-cancel-growth')?.addEventListener('click', closeModal);

  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });

  modalEl.querySelector('#btn-confirm-growth')?.addEventListener('click', () => {
    closeModal();
    onConfirm();
  });
}

/** ผูกเหตุการณ์หน้ารายละเอียดสัตว์เลี้ยงสไตล์ MMORPG */
function bindPetDetailEvents(
  container: HTMLElement,
  onRosterChanged: () => void,
  onNavigateToSkillBoard?: (heroId: string) => void
) {
  // 1. ปุ่มย้อนกลับคลังสัตว์เลี้ยง (ทั้งแถบบน และปุ่มในพาเนลซ้าย)
  container.querySelectorAll('#btn-pet-detail-back, #btn-pet-preview-back').forEach(btn => {
    btn.addEventListener('click', () => {
      petViewState.viewMode = 'collection';
      onRosterChanged();
    });
  });

  // 1.1 ปุ่มนำทางด่วนจากแท็บภาพรวมไปยังแท็บสกิล
  container.querySelectorAll('.btn-switch-to-skills-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      petViewState.activeTab = 'skills';
      onRosterChanged();
    });
  });

  // 2. ปุ่มสัตว์ก่อนหน้า (Prev Hero)
  container.querySelector('#btn-pet-detail-prev')?.addEventListener('click', () => {
    const save = saveManager.getData();
    const ownedHeroesList = Object.values(save.ownedHeroes);
    const mainId = save.activeTeam1v1.mainHeroId;
    const backupId = save.activeTeam1v1.backupHeroId;
    const filteredList = getFilteredAndSortedHeroes(ownedHeroesList, save, mainId, backupId);
    if (filteredList.length === 0) return;
    const currentIndex = filteredList.findIndex(h => h.heroId === petViewState.selectedHeroId);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredList.length - 1;
    petViewState.selectedHeroId = filteredList[prevIndex].heroId;
    onRosterChanged();
  });

  // 3. ปุ่มสัตว์ถัดไป (Next Hero)
  container.querySelector('#btn-pet-detail-next')?.addEventListener('click', () => {
    const save = saveManager.getData();
    const ownedHeroesList = Object.values(save.ownedHeroes);
    const mainId = save.activeTeam1v1.mainHeroId;
    const backupId = save.activeTeam1v1.backupHeroId;
    const filteredList = getFilteredAndSortedHeroes(ownedHeroesList, save, mainId, backupId);
    if (filteredList.length === 0) return;
    const currentIndex = filteredList.findIndex(h => h.heroId === petViewState.selectedHeroId);
    const nextIndex = currentIndex < filteredList.length - 1 ? currentIndex + 1 : 0;
    petViewState.selectedHeroId = filteredList[nextIndex].heroId;
    onRosterChanged();
  });

  // 4. สลับ Tab ใน Pet Detail
  container.querySelectorAll('.pet-detail-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = (btn as HTMLElement).dataset.tab as PetDetailTab;
      if (tab) {
        petViewState.activeTab = tab;
        onRosterChanged();
      }
    });
  });

  // 5. ตั้งเป็นตัวหลัก
  container.querySelectorAll('.pet-preview-actions .btn-set-main').forEach(btn => {
    btn.addEventListener('click', () => {
      const heroId = (btn as HTMLElement).dataset.heroId;
      if (!heroId) return;
      const save = saveManager.getData();
      if (save.activeTeam1v1.mainHeroId === heroId) return;
      const backupId = save.activeTeam1v1.backupHeroId === heroId ? save.activeTeam1v1.mainHeroId : save.activeTeam1v1.backupHeroId;
      saveManager.setActiveTeam1v1(heroId, backupId);
      const meta = HERO_MAP.get(heroId);
      showToast(`⚔️ ตั้งค่า ${meta?.name || heroId} เป็นนักสู้ตัวหลักประจำทีม 1v1 แล้ว`, 'info');
      onRosterChanged();
    });
  });

  // 6. ตั้งเป็นตัวสำรอง
  container.querySelectorAll('.pet-preview-actions .btn-set-backup').forEach(btn => {
    btn.addEventListener('click', () => {
      const heroId = (btn as HTMLElement).dataset.heroId;
      if (!heroId) return;
      const save = saveManager.getData();
      if (save.activeTeam1v1.backupHeroId === heroId) return;
      const mainId = save.activeTeam1v1.mainHeroId === heroId ? save.activeTeam1v1.backupHeroId : save.activeTeam1v1.mainHeroId;
      saveManager.setActiveTeam1v1(mainId, heroId);
      const meta = HERO_MAP.get(heroId);
      showToast(`🛡️ ตั้งค่า ${meta?.name || heroId} เป็นนักสู้ตัวสำรองประจำทีม 1v1 แล้ว`, 'info');
      onRosterChanged();
    });
  });

  // 7. อัปเลเวลใน Tab Growth (เปิด Modal ยืนยันก่อนหักเสบียงและเหรียญทอง)
  container.querySelectorAll('.pet-tab-growth .btn-hero-level-up').forEach(btn => {
    btn.addEventListener('click', () => {
      const heroId = (btn as HTMLElement).dataset.heroId;
      if (!heroId) return;
      const save = saveManager.getData();
      const heroMeta = HERO_MAP.get(heroId);
      const heroData = save.ownedHeroes[heroId];
      if (!heroMeta || !heroData) return;

      if (heroData.level >= MAX_HERO_LEVEL) {
        showToast('✨ สัตว์เลี้ยงตัวนี้เลเวลสูงสุดแล้ว', 'info');
        return;
      }

      const cost = getLevelUpCost(heroData.level);
      if (save.inventory.food < cost.food || save.inventory.gold < cost.gold) {
        showToast('❌ เสบียงหรือเหรียญทองไม่เพียงพอสำหรับการอัปเลเวล', 'error');
        return;
      }

      const currentStats = computeHeroStats(heroId, heroData.level, heroData.stars);
      const nextStats = computeHeroStats(heroId, heroData.level + 1, heroData.stars);

      openGrowthConfirmModal(container, {
        type: 'level',
        heroId,
        heroMeta,
        heroData,
        currentStats,
        nextStats,
        costs: [
          { name: 'เสบียง (Food)', icon: '🍖', amount: cost.food, current: save.inventory.food },
          { name: 'เหรียญทอง (Gold)', icon: '🪙', amount: cost.gold, current: save.inventory.gold },
        ],
        onConfirm: () => {
          const res = saveManager.levelUpHero(heroId);
          if (res.success) {
            showToast(`🎉 ${heroMeta.name} เลเวลอัปเป็น Lv.${res.newLevel}! สเตตัสและ BP เพิ่มขึ้นแล้ว`, 'success');
            onRosterChanged();
          } else {
            showToast(`❌ ไม่สามารถอัปเลเวลได้: ${res.error}`, 'error');
          }
        },
      });
    });
  });

  // 8. อัปดาวใน Tab Growth (เปิด Modal ยืนยันก่อนหักเศษวิญญาณ)
  container.querySelectorAll('.pet-tab-growth .btn-hero-star-up').forEach(btn => {
    btn.addEventListener('click', () => {
      const heroId = (btn as HTMLElement).dataset.heroId;
      if (!heroId) return;
      const save = saveManager.getData();
      const heroMeta = HERO_MAP.get(heroId);
      const heroData = save.ownedHeroes[heroId];
      if (!heroMeta || !heroData) return;

      if (heroData.stars >= MAX_HERO_STARS) {
        showToast('🌟 สัตว์เลี้ยงตัวนี้ระดับดาวสูงสุดแล้ว', 'info');
        return;
      }

      const nextStar = heroData.stars + 1;
      const cost = STAR_UPGRADE_COSTS[nextStar] || 50;
      const currentShards = save.inventory.shards[heroId] || 0;
      if (currentShards < cost) {
        showToast('❌ เศษวิญญาณไม่เพียงพอสำหรับการปลุกพลังดาว', 'error');
        return;
      }

      const currentStats = computeHeroStats(heroId, heroData.level, heroData.stars);
      const nextStats = computeHeroStats(heroId, heroData.level, nextStar);

      openGrowthConfirmModal(container, {
        type: 'star',
        heroId,
        heroMeta,
        heroData,
        currentStats,
        nextStats,
        costs: [
          { name: 'เศษวิญญาณ (Shards)', icon: '🧩', amount: cost, current: currentShards },
        ],
        onConfirm: () => {
          const res = saveManager.starUpHero(heroId);
          if (res.success) {
            showToast(`⭐ ปลุกพลังดาว! ${heroMeta.name} เลื่อนขั้นเป็น ★${res.newStars}! พลังเพิ่มขึ้นอย่างมหาศาล`, 'gold');
            onRosterChanged();
          } else {
            showToast(`❌ ไม่สามารถปลุกพลังดาวได้: ${res.error}`, 'error');
          }
        },
      });
    });
  });

  // 9. เลือกสกิลใน Tab Skills
  container.querySelectorAll('.pet-tab-skills .r-skill-row-item').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const heroId = (el as HTMLElement).dataset.heroId;
      const slotIdx = Number((el as HTMLElement).dataset.slotIdx);
      if (heroId && !isNaN(slotIdx)) {
        const modalContainer = container.querySelector('#skill-picker-modal-root') ? container : document.body;
        openSkillPickerModal(modalContainer, heroId, slotIdx, () => {
          onRosterChanged();
        });
      }
    });
  });

  container.querySelectorAll('.pet-tab-skills .btn-goto-skill-board').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const heroId = (el as HTMLElement).dataset.heroId;
      if (!heroId) return;
      const save = saveManager.getData();
      const heroData = save.ownedHeroes[heroId];
      const emptyIdx = heroData ? heroData.customSkills.findIndex(s => !s) : -1;
      const targetSlot = emptyIdx !== -1 ? emptyIdx : 0;
      const modalContainer = container.querySelector('#skill-picker-modal-root') ? container : document.body;
      openSkillPickerModal(modalContainer, heroId, targetSlot, () => {
        onRosterChanged();
      });
    });
  });

  // 12. Keyboard Navigation (ArrowLeft / ArrowRight / Escape)
  if (activeDetailKeyHandler) {
    window.removeEventListener('keydown', activeDetailKeyHandler);
  }

  activeDetailKeyHandler = (e: KeyboardEvent) => {
    // หากมี modal เปิดอยู่ ให้ Esc ปิด modal ก่อน
    const confirmModal = container.querySelector('#growth-confirm-backdrop');
    if (confirmModal) {
      if (e.key === 'Escape') {
        confirmModal.remove();
        e.preventDefault();
      }
      return;
    }

    const pickerModal = container.querySelector('#picker-backdrop');
    if (pickerModal) {
      if (e.key === 'Escape') {
        pickerModal.remove();
        e.preventDefault();
      }
      return;
    }

    if (e.key === 'ArrowLeft') {
      const prevBtn = container.querySelector('#btn-pet-detail-prev') as HTMLButtonElement | null;
      if (prevBtn && !prevBtn.disabled) {
        prevBtn.click();
        e.preventDefault();
      }
    } else if (e.key === 'ArrowRight') {
      const nextBtn = container.querySelector('#btn-pet-detail-next') as HTMLButtonElement | null;
      if (nextBtn && !nextBtn.disabled) {
        nextBtn.click();
        e.preventDefault();
      }
    } else if (e.key === 'Escape') {
      petViewState.viewMode = 'collection';
      onRosterChanged();
      e.preventDefault();
    }
  };

  window.addEventListener('keydown', activeDetailKeyHandler);
}

/** ผูกเหตุการณ์หน้าคลังสัตว์เลี้ยง (Page A: Pet Collection) */
function bindPetCollectionEvents(
  container: HTMLElement,
  onRosterChanged: () => void,
  onNavigateToSkillBoard?: (heroId: string) => void
) {
  // ผูกการ์ดสัตว์เลี้ยงเริ่มต้น
  const gridContainer = container.querySelector('#heroes-card-grid-container') as HTMLElement | null;
  if (gridContainer) {
    bindCardEvents(gridContainer, container, onRosterChanged, onNavigateToSkillBoard);
  }

  // ฟังก์ชันรีเฟรชเฉพาะ Grid และ Summary โดยไม่ต้องกระพริบทั้งหน้า
  const refreshGridOnly = () => {
    const save = saveManager.getData();
    const ownedHeroesList = Object.values(save.ownedHeroes);
    const mainId = save.activeTeam1v1.mainHeroId;
    const backupId = save.activeTeam1v1.backupHeroId;
    const filteredList = getFilteredAndSortedHeroes(ownedHeroesList, save, mainId, backupId);

    if (gridContainer) {
      gridContainer.innerHTML = renderHeroesGridHtml(filteredList, save, mainId, backupId);
      bindCardEvents(gridContainer, container, onRosterChanged, onNavigateToSkillBoard);
    }

    const summaryText = container.querySelector('#roster-summary-text');
    if (summaryText) {
      summaryText.innerHTML = `แสดง <strong>${filteredList.length}</strong> / ${ownedHeroesList.length} ตัว`;
    }
  };

  // 1. Search Input (Real-time Typing)
  const searchInput = container.querySelector('#roster-search-input') as HTMLInputElement | null;
  searchInput?.addEventListener('input', () => {
    filterState.search = searchInput.value;
    refreshGridOnly();

    // จัดการปุ่ม Clear
    let clearBtn = container.querySelector('#btn-search-clear');
    if (filterState.search && !clearBtn) {
      const wrapper = container.querySelector('.roster-search-wrapper');
      if (wrapper) {
        const btn = document.createElement('button');
        btn.id = 'btn-search-clear';
        btn.className = 'search-clear-btn';
        btn.title = 'ล้างข้อความค้นหา';
        btn.textContent = '✕';
        btn.addEventListener('click', () => {
          filterState.search = '';
          searchInput.value = '';
          btn.remove();
          refreshGridOnly();
        });
        wrapper.appendChild(btn);
      }
    } else if (!filterState.search && clearBtn) {
      clearBtn.remove();
    }
  });

  // Search Clear Button
  container.querySelector('#btn-search-clear')?.addEventListener('click', () => {
    filterState.search = '';
    if (searchInput) searchInput.value = '';
    container.querySelector('#btn-search-clear')?.remove();
    refreshGridOnly();
  });

  // 2. Sort By Select
  const sortBySelect = container.querySelector('#roster-sort-by') as HTMLSelectElement | null;
  sortBySelect?.addEventListener('change', () => {
    filterState.sortBy = sortBySelect.value as SortCriteria;
    refreshGridOnly();
  });

  // 3. Sort Order Toggle
  const sortOrderBtn = container.querySelector('#btn-sort-order-toggle') as HTMLButtonElement | null;
  sortOrderBtn?.addEventListener('click', () => {
    filterState.sortOrder = filterState.sortOrder === 'desc' ? 'asc' : 'desc';
    sortOrderBtn.textContent = filterState.sortOrder === 'desc' ? '⬇️ มากไปน้อย' : '⬆️ น้อยไปมาก';
    refreshGridOnly();
  });

  // 4. Pin Active Team Toggle
  const pinTeamChk = container.querySelector('#roster-pin-team-chk') as HTMLInputElement | null;
  pinTeamChk?.addEventListener('change', () => {
    filterState.pinActiveTeam = pinTeamChk.checked;
    refreshGridOnly();
  });

  // 5. Element Filter Chips
  container.querySelectorAll('.roster-elem-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const targetElem = (chip as HTMLElement).dataset.elem || 'all';
      filterState.element = targetElem;

      // ปรับ class active ให้ตรงกัน
      container.querySelectorAll('.roster-elem-chip').forEach(c => {
        const elId = (c as HTMLElement).dataset.elem;
        if (elId === targetElem) {
          c.classList.add('active');
          if (elId !== 'all') {
            const el = ELEMENT_MAP.get(elId);
            if (el) (c as HTMLElement).style.background = el.color;
          }
        } else {
          c.classList.remove('active');
          if (elId !== 'all') {
            (c as HTMLElement).style.background = '';
            (c as HTMLElement).style.borderColor = '';
          }
        }
      });

      refreshGridOnly();
    });
  });

  // 6. Rarity Filter
  const raritySelect = container.querySelector('#roster-filter-rarity') as HTMLSelectElement | null;
  raritySelect?.addEventListener('change', () => {
    filterState.rarity = raritySelect.value;
    refreshGridOnly();
  });

  // 7. Role Filter
  const roleSelect = container.querySelector('#roster-filter-role') as HTMLSelectElement | null;
  roleSelect?.addEventListener('change', () => {
    filterState.role = roleSelect.value;
    refreshGridOnly();
  });

  // 8. Quick Status Filter
  const statusSelect = container.querySelector('#roster-filter-status') as HTMLSelectElement | null;
  statusSelect?.addEventListener('change', () => {
    filterState.status = statusSelect.value as StatusFilter;
    refreshGridOnly();
  });

  // 9. Reset All Filters Button
  container.querySelector('#btn-roster-reset-all')?.addEventListener('click', () => {
    resetFilters();
    onRosterChanged();
  });

  // 10. Swap Team Pair
  container.querySelector('#btn-team-swap-pair')?.addEventListener('click', () => {
    const save = saveManager.getData();
    saveManager.setActiveTeam1v1(save.activeTeam1v1.backupHeroId, save.activeTeam1v1.mainHeroId);
    showToast('🔄 สลับตำแหน่งตัวหลักและตัวสำรองเรียบร้อยแล้ว', 'info');
    onRosterChanged();
  });

  // 11. คลิกที่การ์ดมินิในแถบทีม 1v1 เพื่อเปิดดูรายละเอียดสัตว์เลี้ยง
  container.querySelectorAll('.team-mini-card[data-hero-id]').forEach(miniCard => {
    miniCard.addEventListener('click', () => {
      const heroId = (miniCard as HTMLElement).dataset.heroId;
      if (heroId) {
        petViewState.savedScrollTop = window.scrollY || document.documentElement.scrollTop;
        petViewState.viewMode = 'detail';
        petViewState.selectedHeroId = heroId;
        onRosterChanged();
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    });
  });
}
