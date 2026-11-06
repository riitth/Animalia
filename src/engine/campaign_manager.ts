/**
 * CampaignManager: ระบบบริหารจัดการด่านเนื้อเรื่องบทที่ 1 (The Primordial Rainforest)
 * พัฒนาสำหรับ Phase 2 - งาน 2.2 ตามข้อกำหนด GDD:
 * - 02_story_and_world.md (บทที่ 1: ป่าฝน / พืช, พิษ / บอส: ลิงอุรังอุตัง)
 * - 10_game_modes.md
 * - 18_dev_phases.md (ด่านบท 1: 10 ด่าน, บอสท้ายบท)
 */

import stagesData from '../data/stages.json';
import { saveManager, EggType, GridRow } from './save_manager';
import { codexManager } from './codex_manager';
import { BattleSession, CombatOptions } from './combat';
import { TeamBattleSession, TeamCombatOptions, GridCoord } from './team_combat';

export interface StageEnemyConfig {
  heroId: string;
  level: number;
  stars: number;
  row: GridRow;
  col: number;
  customSkills: string[];
}

export interface StageRewards {
  firstClear: {
    gold?: number;
    food?: number;
    crystals?: number;
    warmth?: number;
    egg?: EggType;
    skillBook?: string;
    shards?: Record<string, number>;
  };
  repeatClear: {
    gold?: number;
    food?: number;
    elementStone?: string;
    elementStoneChance?: number;
  };
}

export interface StageDefinition {
  id: string;
  chapter: number;
  stageNumber: number;
  name: string;
  nameEn: string;
  description: string;
  battleMode: '1v1' | '2v2';
  recommendedLevel: number;
  isBossStage?: boolean;
  tutorialTopic?: string;
  tutorialGuide?: string[];
  storyDialogue: {
    intro: string;
    victory: string;
  };
  enemies: StageEnemyConfig[];
  rewards: StageRewards;
  nextStageId: string | null;
}

export interface CampaignBattleResult {
  stageId: string;
  isVictory: boolean;
  stars: number; // 0-3 ดาว
  starConditions: {
    win: boolean; // ชนะการต่อสู้
    underTurns: boolean; // จบใน 10 เทิร์น/รอบ
    noKnockout: boolean; // ไม่มีตัวละครในทีมล้มลง
  };
  rounds: number;
  rewardsGained: {
    gold: number;
    food: number;
    crystals: number;
    warmth: number;
    egg?: EggType;
    shards?: Record<string, number>;
    elementStone?: string;
    skillBook?: string;
  };
  isFirstClear: boolean;
  stage: StageDefinition;
}

export class CampaignManager {
  private stages: StageDefinition[];

  constructor() {
    this.stages = stagesData.stages as unknown as StageDefinition[];
  }

  public getAllStages(): StageDefinition[] {
    return this.stages;
  }

  public getStage(stageId: string): StageDefinition | undefined {
    return this.stages.find(s => s.id === stageId);
  }

  public isStageUnlocked(stageId: string): boolean {
    const data = saveManager.getData();
    return data.unlockedStages.includes(stageId);
  }

  /**
   * สร้าง Session การต่อสู้สำหรับด่านที่เลือก โดยดึงทีมผู้เล่นจาก saveManager อัตโนมัติ
   */
  public createCampaignBattle(
    stageId: string,
    customOptions?: {
      playerHeroIds?: string[];
      playerPositions?: GridCoord[];
      customSkills?: string[][];
    }
  ): {
    session: BattleSession | TeamBattleSession;
    stage: StageDefinition;
    is2v2: boolean;
  } {
    const stage = this.getStage(stageId);
    if (!stage) throw new Error(`ไม่พบด่าน ${stageId}`);

    const save = saveManager.getData();
    const is2v2 = stage.battleMode === '2v2';

    if (is2v2) {
      // โหมด 2v2 บนกระดาน 3x3
      const teamAHeroIds = customOptions?.playerHeroIds || [
        save.activeTeam2v2.slot0.heroId,
        save.activeTeam2v2.slot1.heroId,
      ];
      const teamAPositions = customOptions?.playerPositions || [
        { row: save.activeTeam2v2.slot0.row, col: save.activeTeam2v2.slot0.col },
        { row: save.activeTeam2v2.slot1.row, col: save.activeTeam2v2.slot1.col },
      ];

      const teamALevels = teamAHeroIds.map(id => save.ownedHeroes[id]?.level || 1);
      const teamAStars = teamAHeroIds.map(id => save.ownedHeroes[id]?.stars || 1);
      const customSkillsA = customOptions?.customSkills || teamAHeroIds.map(id => save.ownedHeroes[id]?.customSkills || []);

      const teamBHeroIds = stage.enemies.map(e => e.heroId);
      const teamBPositions = stage.enemies.map(e => ({ row: e.row, col: e.col }));
      const teamBLevels = stage.enemies.map(e => e.level);
      const teamBStars = stage.enemies.map(e => e.stars);
      const customSkillsB = stage.enemies.map(e => e.customSkills);

      // บันทึกการพบเจอศัตรูในด่านลงในสมุดสะสมสัตว์เลี้ยง (Codex Seen State)
      for (const eId of teamBHeroIds) {
        codexManager.registerSeenHero(eId);
      }

      const session = new TeamBattleSession(teamAHeroIds, teamBHeroIds, {
        teamAPositions,
        teamBPositions,
        customSkillsA,
        customSkillsB,
        teamALevels,
        teamAStars,
        teamBLevels,
        teamBStars,
        enableSkillEffects: true,
        enableAbilities: true,
        enableSameElementBonus: true,
      });

      return { session, stage, is2v2: true };
    } else {
      // โหมด 1v1 แท็กทีม
      const teamAHeroIds = customOptions?.playerHeroIds || [
        save.activeTeam1v1.mainHeroId,
        save.activeTeam1v1.backupHeroId,
      ];

      const teamALevels = teamAHeroIds.map(id => save.ownedHeroes[id]?.level || 1);
      const teamAStars = teamAHeroIds.map(id => save.ownedHeroes[id]?.stars || 1);
      const customSkillsA = customOptions?.customSkills || teamAHeroIds.map(id => save.ownedHeroes[id]?.customSkills || []);

      // ฝั่งศัตรู: ตามจำนวนศัตรูที่กำหนดในด่าน
      const teamBHeroIds = stage.enemies.map(e => e.heroId);
      const teamBLevels = stage.enemies.map(e => e.level);
      const teamBStars = stage.enemies.map(e => e.stars);
      const customSkillsB = stage.enemies.map(e => e.customSkills);

      // บันทึกการพบเจอศัตรูในด่านลงในสมุดสะสมสัตว์เลี้ยง (Codex Seen State)
      for (const eId of teamBHeroIds) {
        codexManager.registerSeenHero(eId);
      }

      const session = new BattleSession(teamAHeroIds, teamBHeroIds, {
        customSkillsA,
        customSkillsB,
        teamALevels,
        teamAStars,
        teamBLevels,
        teamBStars,
        skillLevelsA: save.skillLevels,
        enableSkillEffects: true,
        enableAbilities: true,
        enableSameElementBonus: true,
      });

      return { session, stage, is2v2: false };
    }
  }

  /**
   * ประเมินผลหลังจบการต่อสู้ด่าน คำนวณดาว 1-3 ดาว และแจกรางวัลเข้าคลัง
   */
  public resolveStageBattle(
    stageId: string,
    session: BattleSession | TeamBattleSession
  ): CampaignBattleResult {
    const stage = this.getStage(stageId);
    if (!stage) throw new Error(`ไม่พบด่าน ${stageId}`);

    const is2v2 = session instanceof TeamBattleSession;
    const isVictory = is2v2 ? session.winner === 'A' : session.winner === 'A';
    const rounds = is2v2 ? session.round : session.turn;

    // คำนวณเงื่อนไข 3 ดาว
    let noKnockout = false;
    if (is2v2) {
      const teamSession = session as TeamBattleSession;
      noKnockout = isVictory && teamSession.squadA.fighters.every(f => f.hp > 0);
    } else {
      const soloSession = session as BattleSession;
      noKnockout = isVictory && soloSession.teamA.fighters.every(f => f.hp > 0);
    }

    const underTurns = isVictory && rounds <= (is2v2 ? 10 : 15);
    const win = isVictory;

    let stars = 0;
    if (win) stars += 1;
    if (underTurns) stars += 1;
    if (noKnockout) stars += 1;

    const existingRecord = saveManager.getData().clearedStages[stageId];
    const isFirstClear = !existingRecord;

    const rewardsGained = {
      gold: 0,
      food: 0,
      crystals: 0,
      warmth: 0,
      egg: undefined as EggType | undefined,
      shards: undefined as Record<string, number> | undefined,
      elementStone: undefined as string | undefined,
      skillBook: undefined as string | undefined,
    };

    if (isVictory) {
      // โบนัสเปอร์เซ็นต์เหรียญทองและเสบียงจากเลเวลสมุดสะสมสัตว์เลี้ยง (Codex Perks)
      const codexDropBonus = codexManager.getCampaignBonusDropPct();

      if (isFirstClear) {
        // รางวัล First Clear
        const fc = stage.rewards.firstClear;
        const rawGold = fc.gold || 0;
        const rawFood = fc.food || 0;
        rewardsGained.gold = Math.round(rawGold * (1 + codexDropBonus.goldPct / 100));
        rewardsGained.food = Math.round(rawFood * (1 + codexDropBonus.foodPct / 100));
        rewardsGained.crystals = fc.crystals || 0;
        rewardsGained.warmth = fc.warmth || 0;
        rewardsGained.egg = fc.egg;
        rewardsGained.skillBook = fc.skillBook;
        rewardsGained.shards = fc.shards;

        // บันทึกผ่านด่าน พร้อมปลดล็อกด่านถัดไป
        saveManager.recordStageClear(stageId, stars, {
          gold: rewardsGained.gold,
          food: rewardsGained.food,
          crystals: rewardsGained.crystals,
          warmth: rewardsGained.warmth,
          egg: rewardsGained.egg,
          unlockedNextStageId: stage.nextStageId || undefined,
        });

        if (rewardsGained.skillBook) {
          saveManager.addSkillBook(rewardsGained.skillBook);
        }
        if (rewardsGained.shards) {
          for (const [hId, count] of Object.entries(rewardsGained.shards)) {
            saveManager.addShards(hId, count);
          }
        }
      } else {
        // รางวัลดรอปซ้ำ (Repeat Clear)
        const rc = stage.rewards.repeatClear;
        const rawGold = rc.gold || 0;
        const rawFood = rc.food || 0;
        rewardsGained.gold = Math.round(rawGold * (1 + codexDropBonus.goldPct / 100));
        rewardsGained.food = Math.round(rawFood * (1 + codexDropBonus.foodPct / 100));

        if (rc.elementStone && rc.elementStoneChance && Math.random() < rc.elementStoneChance) {
          rewardsGained.elementStone = rc.elementStone;
          saveManager.addElementStone(rc.elementStone, 1);
        }

        saveManager.recordStageClear(stageId, stars, {
          gold: rewardsGained.gold,
          food: rewardsGained.food,
        });
      }
    }

    return {
      stageId,
      isVictory,
      stars,
      starConditions: {
        win,
        underTurns,
        noKnockout,
      },
      rounds,
      rewardsGained,
      isFirstClear,
      stage,
    };
  }
}

export const campaignManager = new CampaignManager();
