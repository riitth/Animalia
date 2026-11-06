// src/data/heroes.json
var heroes_default = {
  statFormula: {
    atkPerSTR: 2.805,
    hpBase: 200,
    hpPerSTA: 14.179,
    defBase: 10,
    defPerSTA: 0.721,
    spdBase: 70,
    spdPerAGI: 0.788,
    hitBase: 100,
    hitPerAGI: 0.2,
    fleePerAGI: 0.441,
    criBase: 5,
    criPerAGI: 0.159,
    criCap: 40,
    criDmgBase: 1.4,
    criDmgPerSTR: 4e-3,
    abPerSTR: 0.31,
    blockPerSTA: 0.38,
    abCap: 50,
    defConstantK: 100,
    spBase: 70,
    spPerSTA: 0.8,
    spRegenFlat: 6,
    spNormalAttackBonus: 6,
    spBackupRegenFlat: 10
  },
  classBudgets: {
    B: 150,
    A: 160,
    S: 171,
    SS: 182
  },
  archetypeShares: {
    ATK: [
      0.464,
      0.302,
      0.234
    ],
    SPD: [
      0.318,
      0.378,
      0.304
    ],
    DEF: [
      0.242,
      0.267,
      0.491
    ],
    BAL: [
      0.36,
      0.32,
      0.32
    ],
    DRAGON: [
      0.378,
      0.354,
      0.268
    ],
    NAGA: [
      0.234,
      0.213,
      0.553
    ],
    PHOENIX: [
      0.498,
      0.209,
      0.293
    ],
    QILIN: [
      0.374,
      0.33,
      0.296
    ]
  },
  signatureByClass: {
    B: {
      startGauge: 0,
      gainPerTurn: 34,
      gainOnHit: 0,
      damageMult: 2,
      effectChance: 0.25
    },
    A: {
      startGauge: 0,
      gainPerTurn: 25,
      gainOnHit: 0,
      damageMult: 2.8,
      effectChance: 0.45
    },
    S: {
      startGauge: 0,
      gainPerTurn: 20,
      gainOnHit: 0,
      damageMult: 3.6,
      effectChance: 0.7
    },
    SS: {
      startGauge: 30,
      gainPerTurn: 17,
      gainOnHit: 3,
      damageMult: 4.5,
      effectChance: 0.9
    }
  },
  heroes: [
    {
      id: "rooster",
      name: "\u0E44\u0E01\u0E48",
      rarity: "B",
      element: "fire",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E08\u0E39\u0E48\u0E42\u0E08\u0E21",
      signatureEffect: {
        type: "burn",
        duration: 2
      },
      ability: {
        id: "morning_call",
        name: "\u0E02\u0E31\u0E19\u0E1B\u0E25\u0E38\u0E01\u0E2D\u0E23\u0E38\u0E13",
        description: "\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E44\u0E1F\u0E15\u0E4C \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A CRI% +15% \u0E41\u0E25\u0E30 ATK +10% (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "fire_l",
        "fire_m1",
        "martial_m2",
        "martial_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "cat",
      name: "\u0E41\u0E21\u0E27",
      rarity: "B",
      element: "wind",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E01\u0E49\u0E32\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E27\u0E32\u0E22\u0E38",
      signatureEffect: {
        type: "buff_spd",
        value: 0.15,
        duration: 2
      },
      ability: {
        id: "nine_lives",
        name: "\u0E40\u0E01\u0E49\u0E32\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E1E\u0E23\u0E34\u0E49\u0E27\u0E44\u0E2B\u0E27",
        description: "\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 20% \u0E17\u0E35\u0E48\u0E08\u0E30\u0E2B\u0E25\u0E1A\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E08\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 8% \u0E02\u0E2D\u0E07 Max HP"
      },
      defaultSkills: [
        "wind_l",
        "wind_m1",
        "martial_l",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "buffalo",
      name: "\u0E04\u0E27\u0E32\u0E22",
      rarity: "B",
      element: "earth",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E40\u0E02\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E0A\u0E19\u0E41\u0E2B\u0E25\u0E01",
      signatureEffect: {
        type: "taunt",
        duration: 2
      },
      ability: {
        id: "mud_hide",
        name: "\u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E2A\u0E39\u0E49\u0E42\u0E04\u0E25\u0E19",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 (\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E1E\u0E34\u0E29) \u0E25\u0E07 40% \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 25%"
      },
      defaultSkills: [
        "earth_l",
        "earth_m1",
        "medical_m1",
        "medical_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "dog",
      name: "\u0E2B\u0E21\u0E32",
      rarity: "B",
      element: "plant",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E02\u0E22\u0E49\u0E33\u0E44\u0E21\u0E48\u0E1B\u0E25\u0E48\u0E2D\u0E22",
      signatureEffect: {
        type: "root",
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "loyal_guardian",
        name: "\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E0D\u0E32\u0E13\u0E1C\u0E39\u0E49\u0E20\u0E31\u0E01\u0E14\u0E35",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +15% \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% \u0E02\u0E2D\u0E07 Max HP",
        procChance: 0.6
      },
      defaultSkills: [
        "plant_s",
        "plant_m1",
        "martial_s",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "pig",
      name: "\u0E2B\u0E21\u0E39",
      rarity: "B",
      element: "earth",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E42\u0E04\u0E25\u0E19\u0E41\u0E23\u0E48\u0E18\u0E32\u0E15\u0E38\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32",
      signatureEffect: {
        type: "buff_def",
        value: 0.15,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "earth_herbal_snout",
        name: "\u0E2A\u0E21\u0E38\u0E19\u0E44\u0E1E\u0E23\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8",
        procChance: 0.55
      },
      defaultSkills: [
        "earth_s",
        "earth_m2",
        "medical_s",
        "medical_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.8,
      customSigMult: 0
    },
    {
      id: "horse",
      name: "\u0E21\u0E49\u0E32",
      rarity: "B",
      element: "fire",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E01\u0E35\u0E1A\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E04\u0E27\u0E1A\u0E1C\u0E48\u0E32\u0E2A\u0E21\u0E23\u0E20\u0E39\u0E21\u0E34",
      signatureEffect: {
        type: "burn",
        duration: 2
      },
      ability: {
        id: "warhorse_gallop",
        name: "\u0E2D\u0E32\u0E0A\u0E32\u0E04\u0E27\u0E1A\u0E17\u0E30\u0E22\u0E32\u0E19\u0E28\u0E36\u0E01",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F SPD +12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E04\u0E27\u0E1A\u0E1B\u0E30\u0E17\u0E30 +10%"
      },
      defaultSkills: [
        "fire_l",
        "fire_m2",
        "martial_m1",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "rat",
      name: "\u0E2B\u0E19\u0E39",
      rarity: "B",
      element: "poison",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E32\u0E2C\u0E42\u0E23\u0E04",
      signatureEffect: {
        type: "poison",
        duration: 3
      },
      ability: {
        id: "plague_nibble",
        name: "\u0E1F\u0E31\u0E19\u0E41\u0E17\u0E30\u0E41\u0E1E\u0E23\u0E48\u0E40\u0E0A\u0E37\u0E49\u0E2D",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E41\u0E1E\u0E23\u0E48\u0E40\u0E0A\u0E37\u0E49\u0E2D\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E2B\u0E32\u0E01\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E08\u0E30\u0E01\u0E31\u0E14\u0E01\u0E34\u0E19\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39\u0E25\u0E07 \u221210 SP"
      },
      defaultSkills: [
        "poison_s",
        "poison_m1",
        "trick_s",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "squirrel",
      name: "\u0E01\u0E23\u0E30\u0E23\u0E2D\u0E01",
      rarity: "B",
      element: "light",
      archetype: "SPD",
      role: "Supporter",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E25\u0E33\u0E41\u0E2A\u0E07\u0E1E\u0E27\u0E07\u0E2B\u0E32\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E19\u0E33\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "team_buff_hit_cri",
        target: "all_allies",
        hit: 20,
        cri: 12,
        duration: 2
      },
      ability: {
        id: "solar_stash",
        name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E41\u0E2A\u0E07\u0E01\u0E31\u0E01\u0E15\u0E38\u0E19",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +12 SP \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +3% Max HP"
      },
      defaultSkills: [
        "light_s",
        "light_m2",
        "medical_m1",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.25,
      customSigMult: 1.8
    },
    {
      id: "snail",
      name: "\u0E2B\u0E2D\u0E22\u0E17\u0E32\u0E01",
      rarity: "B",
      element: "ice",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E40\u0E21\u0E37\u0E2D\u0E01\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E41\u0E14\u0E19\u0E14\u0E34\u0E19",
      signatureEffect: {
        type: "team_shield_slow",
        target: "all_allies",
        shield: 0.12,
        slowEnemy: 0.15,
        duration: 2
      },
      ability: {
        id: "glacial_mucus",
        name: "\u0E40\u0E21\u0E37\u0E2D\u0E01\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E2B\u0E34\u0E19",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP \u0E15\u0E19\u0E40\u0E2D\u0E07 2% \u0E02\u0E2D\u0E07 Max HP"
      },
      defaultSkills: [
        "ice_s",
        "ice_m2",
        "medical_s",
        "martial_s"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 1.8
    },
    {
      id: "rabbit",
      name: "\u0E01\u0E23\u0E30\u0E15\u0E48\u0E32\u0E22",
      rarity: "B",
      element: "light",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E25\u0E39\u0E01\u0E40\u0E15\u0E30\u0E17\u0E30\u0E22\u0E32\u0E19\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19",
      signatureEffect: {
        type: "blind",
        duration: 1
      },
      ability: {
        id: "solar_leap",
        name: "\u0E01\u0E49\u0E32\u0E27\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E41\u0E2A\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01 FLEE +6 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F CRI% +15% \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E01\u0E08\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +10 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "light_s",
        "light_m1",
        "trick_s",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "bat",
      name: "\u0E04\u0E49\u0E32\u0E07\u0E04\u0E32\u0E27",
      rarity: "B",
      element: "dark",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E1D\u0E39\u0E07\u0E04\u0E49\u0E32\u0E07\u0E04\u0E32\u0E27\u0E40\u0E07\u0E32\u0E23\u0E32\u0E15\u0E23\u0E35\u0E01\u0E25\u0E37\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E14",
      signatureEffect: {
        type: "team_blind_drain",
        target: "all_enemies",
        blindChance: 0.35,
        teamHeal: 0.08,
        duration: 1
      },
      ability: {
        id: "vampiric_sonar",
        name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E14\u0E39\u0E14\u0E42\u0E25\u0E2B\u0E34\u0E15",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% \u0E02\u0E2D\u0E07 Max HP, \u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39\u0E25\u0E07 \u22128 SP \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP \u0E15\u0E19\u0E40\u0E2D\u0E07 +8 SP"
      },
      defaultSkills: [
        "dark_s",
        "dark_m2",
        "trick_m2",
        "medical_s"
      ],
      preferredRow: "back",
      backlineChance: 0.25,
      customSigMult: 1.2
    },
    {
      id: "porcupine",
      name: "\u0E40\u0E21\u0E48\u0E19",
      rarity: "B",
      element: "lightning",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E2A\u0E25\u0E31\u0E14\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E23\u0E2D\u0E1A\u0E17\u0E34\u0E28",
      signatureEffect: {
        type: "team_stun_def",
        target: "all_enemies",
        stunChance: 0.3,
        def: 0.2,
        duration: 2
      },
      ability: {
        id: "static_quills",
        name: "\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E2A\u0E16\u0E34\u0E15\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 6% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B 12% \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35 10% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "lightning_s",
        "lightning_m2",
        "martial_s",
        "medical_s"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 1.25
    },
    {
      id: "frog",
      name: "\u0E01\u0E1A",
      rarity: "B",
      element: "water",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E17\u0E38\u0E48\u0E21\u0E04\u0E25\u0E37\u0E48\u0E19\u0E19\u0E49\u0E33\u0E27\u0E19",
      signatureEffect: {
        type: "slow",
        duration: 2
      },
      ability: {
        id: "sticky_tongue_splash",
        name: "\u0E25\u0E34\u0E49\u0E19\u0E15\u0E27\u0E31\u0E14\u0E27\u0E32\u0E23\u0E35\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E2B\u0E19\u0E37\u0E14",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E15\u0E27\u0E31\u0E14\u0E25\u0E34\u0E49\u0E19\u0E14\u0E36\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP \u0E15\u0E19\u0E40\u0E2D\u0E07 +10 SP"
      },
      defaultSkills: [
        "water_s",
        "water_m2",
        "trick_s",
        "medical_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.4
    },
    {
      id: "wolf",
      name: "\u0E2B\u0E21\u0E32\u0E1B\u0E48\u0E32",
      rarity: "A",
      element: "dark",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E07\u0E32\u0E08\u0E31\u0E19\u0E17\u0E23\u0E32",
      signatureEffect: {
        type: "blind",
        duration: 2
      },
      ability: {
        id: "pack_hunter",
        name: "\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E0D\u0E32\u0E13\u0E08\u0E48\u0E32\u0E1D\u0E39\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 +8% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E35\u0E48\u0E21\u0E35 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +20%"
      },
      defaultSkills: [
        "dark_l",
        "dark_m1",
        "martial_l",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "turtle",
      name: "\u0E40\u0E15\u0E48\u0E32",
      rarity: "A",
      element: "water",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E27\u0E32\u0E23\u0E35\u0E04\u0E38\u0E49\u0E21\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "team_shield_cleanse",
        target: "all_allies",
        shield: 0.15,
        cleanse: 1,
        duration: 2
      },
      ability: {
        id: "shell_retreat",
        name: "\u0E2B\u0E14\u0E2B\u0E31\u0E27\u0E40\u0E02\u0E49\u0E32\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E07 30% \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 5% \u0E02\u0E2D\u0E07 Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "water_l",
        "water_m1",
        "medical_l",
        "medical_m2"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 2
    },
    {
      id: "tiger",
      name: "\u0E40\u0E2A\u0E37\u0E2D",
      rarity: "A",
      element: "fire",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E02\u0E22\u0E49\u0E33",
      signatureEffect: {
        type: "burn",
        duration: 2
      },
      ability: {
        id: "ambush_predator",
        name: "\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E0B\u0E38\u0E48\u0E21\u0E02\u0E22\u0E49\u0E33",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 CRI% +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18%, \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 +15% \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E01\u0E08\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +10"
      },
      defaultSkills: [
        "fire_l",
        "fire_m1",
        "martial_l",
        "martial_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "snake",
      name: "\u0E07\u0E39",
      rarity: "A",
      element: "poison",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E09\u0E01\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "poison",
        duration: 3
      },
      ability: {
        id: "neurotoxin_fang",
        name: "\u0E1E\u0E34\u0E29\u0E23\u0E49\u0E32\u0E22\u0E0B\u0E36\u0E21\u0E25\u0E36\u0E01",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +10%"
      },
      defaultSkills: [
        "poison_l",
        "poison_m2",
        "trick_m1",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "penguin",
      name: "\u0E40\u0E1E\u0E19\u0E01\u0E27\u0E34\u0E19",
      rarity: "A",
      element: "ice",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E20\u0E39\u0E40\u0E02\u0E32\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07",
      signatureEffect: {
        type: "freeze",
        duration: 1
      },
      ability: {
        id: "belly_slide_frost",
        name: "\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E1E\u0E38\u0E07\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 8% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E42\u0E25\u0E27\u0E4C (\u0E25\u0E14 SPD 20% \u0E19\u0E32\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "ice_l",
        "ice_m2",
        "medical_l",
        "medical_m1"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "owl",
      name: "\u0E19\u0E01\u0E2E\u0E39\u0E01",
      rarity: "A",
      element: "psychic",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E1E\u0E32\u0E22\u0E38\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E1B\u0E35\u0E01\u0E23\u0E32\u0E15\u0E23\u0E35",
      signatureEffect: {
        type: "confusion",
        duration: 2,
        chance: 0.5
      },
      ability: {
        id: "night_confusion_gaze",
        name: "\u0E40\u0E19\u0E15\u0E23\u0E23\u0E32\u0E15\u0E23\u0E35\u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E40\u0E27\u0E2B\u0E32",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39 \u0E25\u0E14 HIT -15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "psychic_m1",
        "psychic_m2",
        "trick_m1",
        "secret_m2"
      ],
      preferredRow: "back",
      backlineChance: 0.8
    },
    {
      id: "firefly",
      name: "\u0E2B\u0E34\u0E48\u0E07\u0E2B\u0E49\u0E2D\u0E22",
      rarity: "A",
      element: "light",
      archetype: "SPD",
      role: "Controller",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E25\u0E33\u0E41\u0E2A\u0E07\u0E2B\u0E34\u0E48\u0E07\u0E2B\u0E49\u0E2D\u0E22\u0E19\u0E33\u0E17\u0E32\u0E07",
      signatureEffect: {
        type: "shield",
        value: 0.18,
        duration: 2
      },
      ability: {
        id: "bioluminescent_flash",
        name: "\u0E41\u0E2A\u0E07\u0E01\u0E23\u0E30\u0E1E\u0E23\u0E34\u0E1A\u0E25\u0E27\u0E07\u0E15\u0E32",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "light_m1",
        "light_m2",
        "trick_s",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.4
    },
    {
      id: "leopard",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E14\u0E32\u0E27",
      rarity: "A",
      element: "lightning",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1E\u0E34\u0E06\u0E32\u0E15\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E40\u0E2A\u0E35\u0E22\u0E07",
      signatureEffect: {
        type: "stun",
        duration: 1
      },
      ability: {
        id: "thunder_sprint",
        name: "\u0E2A\u0E1B\u0E23\u0E34\u0E19\u0E15\u0E4C\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E1A",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD \u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19 +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F CRI% +12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E14\u0E32\u0E40\u0E21\u0E08 +12% \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +8 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "lightning_l",
        "lightning_m1",
        "martial_m1",
        "catalyst_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "pangolin",
      name: "\u0E15\u0E31\u0E27\u0E19\u0E34\u0E48\u0E21",
      rarity: "A",
      element: "earth",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E25\u0E39\u0E01\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E01\u0E27\u0E32\u0E14\u0E41\u0E19\u0E27\u0E23\u0E1A",
      signatureEffect: {
        type: "cleave_slow_shield",
        target: "front_enemies",
        spd: 0.25,
        shield: 0.2,
        duration: 2
      },
      ability: {
        id: "iron_scale_curl",
        name: "\u0E21\u0E49\u0E27\u0E19\u0E15\u0E31\u0E27\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E01\u0E25\u0E47\u0E14\u0E1B\u0E10\u0E1E\u0E35",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E1A\u0E25\u0E47\u0E2D\u0E01 Block +8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E07 18% \u0E41\u0E25\u0E30\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B 10%"
      },
      defaultSkills: [
        "earth_l",
        "earth_m1",
        "martial_m2",
        "medical_s"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 1.65
    },
    {
      id: "deer",
      name: "\u0E01\u0E27\u0E32\u0E07",
      rarity: "A",
      element: "plant",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E40\u0E02\u0E32\u0E01\u0E27\u0E32\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E44\u0E1E\u0E23",
      signatureEffect: {
        type: "team_heal_shield_sp",
        target: "all_allies",
        heal: 0.12,
        shield: 0.15,
        sp: 15,
        duration: 2
      },
      ability: {
        id: "antler_blessing",
        name: "\u0E1E\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E02\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 3.5% \u0E02\u0E2D\u0E07 Max HP, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +10 SP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E15\u0E19\u0E40\u0E2D\u0E07 1 \u0E2A\u0E16\u0E32\u0E19\u0E30"
      },
      defaultSkills: [
        "plant_m1",
        "plant_m2",
        "medical_m1",
        "medical_l"
      ],
      preferredRow: "back",
      backlineChance: 0.25,
      customSigMult: 0
    },
    {
      id: "eagle",
      name: "\u0E2D\u0E34\u0E19\u0E17\u0E23\u0E35",
      rarity: "S",
      element: "lightning",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E42\u0E09\u0E1A\u0E40\u0E27\u0E2B\u0E32",
      signatureEffect: {
        type: "stun",
        duration: 1
      },
      ability: {
        id: "hawk_eye",
        name: "\u0E2A\u0E32\u0E22\u0E15\u0E32\u0E40\u0E2B\u0E22\u0E35\u0E48\u0E22\u0E27\u0E40\u0E27\u0E2B\u0E32",
        description: "\u0E44\u0E21\u0E48\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 (Blind) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E44\u0E14\u0E49 CRI% +10% \u0E41\u0E25\u0E30\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E14\u0E32\u0E40\u0E21\u0E08 +30%"
      },
      defaultSkills: [
        "lightning_l",
        "lightning_m1",
        "martial_l",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "rhino",
      name: "\u0E41\u0E23\u0E14",
      rarity: "S",
      element: "earth",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E2B\u0E34\u0E19\u0E16\u0E25\u0E48\u0E21\u0E17\u0E25\u0E32\u0E22",
      signatureEffect: {
        type: "stun",
        duration: 1
      },
      ability: {
        id: "horn_counter",
        name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E41\u0E23\u0E07\u0E1B\u0E30\u0E17\u0E30",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 6% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E32\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35 12% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49"
      },
      defaultSkills: [
        "earth_l",
        "earth_m2",
        "martial_l",
        "martial_m1"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "lion",
      name: "\u0E2A\u0E34\u0E07\u0E42\u0E15",
      rarity: "S",
      element: "plant",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E04\u0E33\u0E23\u0E32\u0E21\u0E23\u0E32\u0E0A\u0E31\u0E19\u0E22\u0E4C\u0E1B\u0E25\u0E38\u0E01\u0E02\u0E27\u0E31\u0E0D",
      signatureEffect: {
        type: "team_buff_atk_spd",
        target: "all_allies",
        atk: 0.2,
        spd: 0.15,
        duration: 2
      },
      ability: {
        id: "kings_majesty",
        name: "\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E28\u0E23\u0E35\u0E40\u0E08\u0E49\u0E32\u0E1B\u0E48\u0E32",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 3.5% \u0E02\u0E2D\u0E07 Max HP \u0E41\u0E25\u0E30\u0E02\u0E48\u0E21\u0E02\u0E27\u0E31\u0E0D\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: [
        "plant_l",
        "plant_aoe",
        "martial_l",
        "martial_aoe"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 2.6
    },
    {
      id: "fox",
      name: "\u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01",
      rarity: "S",
      element: "fire",
      archetype: "BAL",
      role: "Striker",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E23\u0E30\u0E1A\u0E33\u0E25\u0E39\u0E01\u0E44\u0E1F\u0E40\u0E01\u0E49\u0E32\u0E21\u0E32\u0E22\u0E32",
      signatureEffect: {
        type: "burn",
        duration: 2
      },
      ability: {
        id: "kitsune_illusion",
        name: "\u0E21\u0E32\u0E22\u0E32\u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01\u0E40\u0E1E\u0E25\u0E34\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01 FLEE +5 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E25\u0E48\u0E2D\u0E2B\u0E25\u0E2D\u0E01\u0E25\u0E14\u0E40\u0E01\u0E08\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 5 \u0E41\u0E15\u0E49\u0E21 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E14\u0E32\u0E40\u0E21\u0E08 +6%"
      },
      defaultSkills: [
        "fire_l",
        "fire_s",
        "trick_m1",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "grizzly",
      name: "\u0E2B\u0E21\u0E35\u0E01\u0E23\u0E34\u0E2A\u0E25\u0E35\u0E48",
      rarity: "S",
      element: "earth",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E01\u0E23\u0E34\u0E2A\u0E25\u0E35\u0E48\u0E16\u0E25\u0E48\u0E21\u0E1C\u0E32",
      signatureEffect: {
        type: "slow",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "grizzly_berserk",
        name: "\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E2B\u0E21\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07\u0E1E\u0E2A\u0E38\u0E18\u0E32",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E02\u0E13\u0E30 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 65% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E04\u0E25\u0E38\u0E49\u0E21\u0E04\u0E25\u0E31\u0E48\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F ATK +18% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 5% Max HP",
        procChance: 0.65
      },
      defaultSkills: [
        "earth_m1",
        "earth_l",
        "martial_m2",
        "martial_l"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "mantis",
      name: "\u0E41\u0E21\u0E19\u0E15\u0E34\u0E2A",
      rarity: "S",
      element: "lightning",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E40\u0E1E\u0E25\u0E07\u0E40\u0E04\u0E35\u0E22\u0E27\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
      signatureEffect: {
        type: "debuff_def",
        value: 0.3,
        duration: 2
      },
      ability: {
        id: "twin_scythe_strike",
        name: "\u0E40\u0E04\u0E35\u0E22\u0E27\u0E04\u0E39\u0E48\u0E1C\u0E48\u0E32\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1F\u0E31\u0E19\u0E0B\u0E49\u0E33\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22 \u0E44\u0E14\u0E49 CRI% +8% \u0E41\u0E25\u0E30\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E14\u0E32\u0E40\u0E21\u0E08 +10%"
      },
      defaultSkills: [
        "lightning_l",
        "lightning_m1",
        "martial_l",
        "martial_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "hornet",
      name: "\u0E2E\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E2A",
      rarity: "S",
      element: "poison",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E21\u0E23\u0E13\u0E30\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E23\u0E31\u0E07",
      signatureEffect: {
        type: "poison",
        stacks: 2,
        duration: 3
      },
      ability: {
        id: "neurotoxic_stinger",
        name: "\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E1E\u0E34\u0E29\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E32\u0E40\u0E21\u0E08 +18%, \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15% \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "poison_l",
        "poison_m2",
        "catalyst_m1",
        "martial_m2"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "peacock",
      name: "\u0E19\u0E01\u0E22\u0E39\u0E07",
      rarity: "S",
      element: "psychic",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E23\u0E33\u0E41\u0E1E\u0E19\u0E41\u0E2A\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E2A\u0E21\u0E23\u0E20\u0E39\u0E21\u0E34",
      signatureEffect: {
        type: "team_debuff_atk_confusion",
        target: "all_enemies",
        atk: 0.2,
        confusion: 1,
        duration: 2
      },
      ability: {
        id: "dazzling_plume",
        name: "\u0E23\u0E33\u0E41\u0E1E\u0E19\u0E2B\u0E32\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E20\u0E1E",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E2B\u0E32\u0E01\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E32\u0E1A\u0E2D\u0E14 \u0E08\u0E30\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18%"
      },
      defaultSkills: [
        "psychic_l",
        "psychic_m1",
        "catalyst_m1",
        "trick_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.4,
      customSigMult: 1.8
    },
    {
      id: "sea_lion",
      name: "\u0E2A\u0E34\u0E07\u0E42\u0E15\u0E17\u0E30\u0E40\u0E25",
      rarity: "S",
      element: "ice",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E16\u0E25\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E20\u0E39\u0E21\u0E34",
      signatureEffect: {
        type: "team_slow_freeze",
        target: "all_enemies",
        freezeChance: 0.4,
        shield: 0.12,
        duration: 2
      },
      ability: {
        id: "polar_roar",
        name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E04\u0E33\u0E23\u0E32\u0E21\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "ice_l",
        "ice_m1",
        "martial_m2",
        "catalyst_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.4,
      customSigMult: 1.85
    },
    {
      id: "black_panther",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E14\u0E33",
      rarity: "S",
      element: "dark",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E17\u0E21\u0E34\u0E2C\u0E02\u0E22\u0E49\u0E33\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "blind",
        duration: 1
      },
      ability: {
        id: "shadow_predator",
        name: "\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E44\u0E23\u0E49\u0E40\u0E07\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 CRI% +10% \u0E41\u0E25\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +16% \u0E41\u0E25\u0E30\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 12% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49"
      },
      defaultSkills: [
        "dark_l",
        "dark_m1",
        "martial_l",
        "martial_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "shark",
      name: "\u0E09\u0E25\u0E32\u0E21",
      rarity: "S",
      element: "water",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E09\u0E25\u0E32\u0E21\u0E02\u0E32\u0E27\u0E02\u0E22\u0E49\u0E33\u0E2A\u0E21\u0E38\u0E17\u0E23",
      signatureEffect: {
        type: "bleed",
        duration: 2
      },
      ability: {
        id: "blood_frenzy",
        name: "\u0E04\u0E25\u0E31\u0E48\u0E07\u0E01\u0E25\u0E34\u0E48\u0E19\u0E04\u0E32\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F ATK +12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \xB7 \u0E2B\u0E32\u0E01\u0E28\u0E31\u0E15\u0E23\u0E39\u0E21\u0E35 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 65% \u0E08\u0E30\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18%"
      },
      defaultSkills: [
        "water_l",
        "water_m1",
        "martial_l",
        "catalyst_m1"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "falcon",
      name: "\u0E40\u0E2B\u0E22\u0E35\u0E48\u0E22\u0E27\u0E40\u0E1E\u0E40\u0E23\u0E01\u0E23\u0E34\u0E19",
      rarity: "S",
      element: "wind",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E1E\u0E32\u0E22\u0E38\u0E42\u0E09\u0E1A\u0E40\u0E1E\u0E40\u0E23\u0E01\u0E23\u0E34\u0E19\u0E1C\u0E48\u0E32\u0E40\u0E27\u0E2B\u0E32",
      signatureEffect: {
        type: "buff_spd",
        value: 0.2,
        duration: 2
      },
      ability: {
        id: "supersonic_dive",
        name: "\u0E14\u0E34\u0E48\u0E07\u0E40\u0E27\u0E2B\u0E32\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E40\u0E2A\u0E35\u0E22\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD \u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19 +6 \u0E41\u0E25\u0E30 HIT +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E21\u0E35 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +12%"
      },
      defaultSkills: [
        "wind_l",
        "wind_m1",
        "martial_l",
        "catalyst_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.3
    },
    {
      id: "azure_dragon",
      name: "\u0E21\u0E31\u0E07\u0E01\u0E23\u0E1F\u0E49\u0E32",
      rarity: "SS",
      element: "light",
      archetype: "DRAGON",
      role: "Assassin",
      str: 69,
      agi: 64,
      sta: 49,
      signatureName: "\u0E21\u0E2B\u0E32\u0E17\u0E31\u0E13\u0E11\u0E4C\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E21\u0E31\u0E07\u0E01\u0E23\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C",
      signatureEffect: {
        type: "chain_buff_spd_cri",
        target: "all_allies",
        chainDmg: 1.2,
        spd: 0.2,
        cri: 15,
        duration: 2
      },
      ability: {
        id: "celestial_scales",
        name: "\u0E40\u0E01\u0E25\u0E47\u0E14\u0E21\u0E31\u0E07\u0E01\u0E23\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C",
        description: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E15\u0E4C\u0E14\u0E49\u0E27\u0E22\u0E40\u0E01\u0E23\u0E32\u0E30 30% \u0E02\u0E2D\u0E07 Max HP \xB7 \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 12% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E1A\u0E31\u0E1F ATK/SPD +10% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "light_l",
        "light_m1",
        "catalyst_l",
        "catalyst_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.6,
      customSigMult: 3.5
    },
    {
      id: "naga",
      name: "\u0E1E\u0E0D\u0E32\u0E19\u0E32\u0E04",
      rarity: "SS",
      element: "water",
      archetype: "NAGA",
      role: "Tank",
      str: 43,
      agi: 39,
      sta: 101,
      customMultipliers: {
        hp: 1.2,
        def: 0.5
      },
      signatureName: "\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E19\u0E32\u0E04\u0E23\u0E32\u0E0A\u0E01\u0E25\u0E37\u0E19\u0E21\u0E2B\u0E32\u0E1E\u0E34\u0E20\u0E1E",
      signatureEffect: {
        type: "team_flood_shield",
        target: "all_enemies",
        gaugeDrain: 20,
        teamShield: 0.2,
        duration: 2
      },
      ability: {
        id: "immortal_serpent",
        name: "\u0E40\u0E01\u0E25\u0E47\u0E14\u0E19\u0E32\u0E04\u0E23\u0E32\u0E0A\u0E2D\u0E21\u0E15\u0E30",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4.5% \u0E02\u0E2D\u0E07 Max HP \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 50% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 75% \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 18%"
      },
      defaultSkills: [
        "water_l",
        "water_m2",
        "medical_l",
        "medical_m1"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 2
    },
    {
      id: "phoenix",
      name: "\u0E1F\u0E35\u0E19\u0E34\u0E01\u0E0B\u0E4C",
      rarity: "SS",
      element: "fire",
      archetype: "PHOENIX",
      role: "Striker",
      str: 91,
      agi: 38,
      sta: 53,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E2D\u0E21\u0E15\u0E30\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E25\u0E49\u0E32\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C",
      signatureEffect: {
        type: "team_burn_heal",
        target: "all_enemies",
        teamHeal: 0.15,
        cleanse: 1,
        duration: 2
      },
      ability: {
        id: "rebirth_ashes",
        name: "\u0E27\u0E34\u0E2B\u0E04\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08\u0E16\u0E36\u0E07\u0E15\u0E32\u0E22\u0E04\u0E23\u0E31\u0E49\u0E07\u0E41\u0E23\u0E01\u0E43\u0E19\u0E44\u0E1F\u0E15\u0E4C \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 80% \u0E17\u0E35\u0E48\u0E08\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E\u0E1E\u0E23\u0E49\u0E2D\u0E21 HP 50% \u0E02\u0E2D\u0E07 Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
      },
      defaultSkills: [
        "fire_l",
        "fire_m1",
        "catalyst_l",
        "catalyst_m2"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 2.3
    },
    {
      id: "bull",
      name: "\u0E27\u0E31\u0E27",
      rarity: "B",
      element: "fire",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E01\u0E23\u0E30\u0E17\u0E34\u0E07\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E02\u0E27\u0E34\u0E14\u0E1E\u0E2A\u0E38\u0E18\u0E32",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.25
      },
      ability: {
        id: "raging_bull",
        name: "\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E40\u0E14\u0E37\u0E2D\u0E14\u0E27\u0E31\u0E27\u0E01\u0E23\u0E30\u0E17\u0E34\u0E07",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 50% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF +20% \u0E41\u0E25\u0E30\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "fire_s",
        "fire_m1",
        "medical_m1",
        "medical_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "beetle",
      name: "\u0E14\u0E49\u0E27\u0E07",
      rarity: "A",
      element: "fire",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E40\u0E02\u0E32\u0E01\u0E27\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E35\u0E1A\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C",
      signatureEffect: {
        type: "shield",
        value: 0.18,
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "fire_chitin_shell",
        name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E44\u0E04\u0E15\u0E34\u0E19\u0E17\u0E19\u0E44\u0E1F",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Block Rate +12% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E1B\u0E25\u0E14\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E04\u0E25\u0E37\u0E48\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35 (\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "fire_m1",
        "fire_l",
        "medical_m2",
        "martial_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "wild_boar",
      name: "\u0E2B\u0E21\u0E39\u0E1B\u0E48\u0E32",
      rarity: "S",
      element: "fire",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E2B\u0E21\u0E39\u0E1B\u0E48\u0E32\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E30\u0E25\u0E27\u0E07\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "blazing_tusk_hide",
        name: "\u0E2B\u0E19\u0E31\u0E07\u0E2B\u0E19\u0E32\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E17\u0E21\u0E34\u0E2C",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E25\u0E37\u0E48\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E49\u0E2D\u0E19 15% \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +6"
      },
      defaultSkills: [
        "fire_l",
        "fire_m1",
        "martial_m2",
        "martial_l"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "mongoose",
      name: "\u0E1E\u0E31\u0E07\u0E1E\u0E2D\u0E19",
      rarity: "B",
      element: "fire",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32",
      signatureEffect: {
        type: "buff_cri",
        value: 20,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "blazing_reflexes",
        name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E44\u0E27\u0E17\u0E49\u0E32\u0E44\u0E1F",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 FLEE +8 \u0E41\u0E25\u0E30 CRI% +5% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E01\u0E31\u0E14\u0E44\u0E1F (\u0E14\u0E32\u0E40\u0E21\u0E08 40% ATK)"
      },
      defaultSkills: [
        "fire_s",
        "fire_m2",
        "trick_m1",
        "trick_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.35
    },
    {
      id: "monkey",
      name: "\u0E25\u0E34\u0E07",
      rarity: "A",
      element: "fire",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E2B\u0E21\u0E31\u0E14\u0E27\u0E32\u0E19\u0E23\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E30\u0E25\u0E27\u0E07",
      signatureEffect: {
        type: "burn",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "monkey_acrobat",
        name: "\u0E27\u0E32\u0E19\u0E23\u0E40\u0E2B\u0E34\u0E19\u0E40\u0E27\u0E2B\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E21\u0E35 SPD \u0E0A\u0E49\u0E32\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +25%"
      },
      defaultSkills: [
        "fire_m1",
        "fire_l",
        "trick_l",
        "trick_m2"
      ],
      preferredRow: "mid",
      backlineChance: 0.4
    },
    {
      id: "bullet_ant",
      name: "\u0E21\u0E14\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19",
      rarity: "S",
      element: "fire",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E1E\u0E34\u0E29\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "burn",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "bullet_stinger",
        name: "\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15% \xB7 \u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "fire_l",
        "fire_m1",
        "martial_l",
        "martial_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.45
    },
    {
      id: "goat",
      name: "\u0E41\u0E1E\u0E30",
      rarity: "B",
      element: "fire",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E40\u0E02\u0E32\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E08\u0E38\u0E14",
      signatureEffect: {
        type: "slow",
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "taunting_ram",
        name: "\u0E40\u0E02\u0E32\u0E41\u0E01\u0E30\u0E01\u0E27\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E40\u0E2A\u0E35\u0E22\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30 (\u0E25\u0E14 HIT 15 \u0E41\u0E25\u0E30\u0E25\u0E14 SPD 12% 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "fire_s",
        "fire_m1",
        "trick_m1",
        "trick_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.15
    },
    {
      id: "parrot",
      name: "\u0E19\u0E01\u0E41\u0E01\u0E49\u0E27",
      rarity: "A",
      element: "fire",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E23\u0E1A\u0E01\u0E27\u0E19",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "mimic_cacophony",
        name: "\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E39\u0E48\u0E25\u0E48\u0E2D\u0E2B\u0E25\u0E2D\u0E01",
        description: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "fire_m1",
        "fire_m2",
        "trick_m2",
        "trick_l"
      ],
      preferredRow: "mid",
      backlineChance: 0.2
    },
    {
      id: "komodo",
      name: "\u0E21\u0E31\u0E07\u0E01\u0E23\u0E42\u0E04\u0E42\u0E21\u0E42\u0E14",
      rarity: "S",
      element: "fire",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E25\u0E32\u0E27\u0E32\u0E01\u0E25\u0E37\u0E19\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "pyro_toxin_aura",
        name: "\u0E2B\u0E21\u0E2D\u0E01\u0E04\u0E27\u0E31\u0E19\u0E1E\u0E34\u0E29\u0E01\u0E31\u0E01\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +20% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E31\u0E48\u0E07\u0E15\u0E23\u0E36\u0E07 (Root 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "fire_l",
        "fire_m1",
        "trick_l",
        "secret_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.25
    },
    {
      id: "flamingo",
      name: "\u0E19\u0E01\u0E1F\u0E25\u0E32\u0E21\u0E34\u0E07\u0E42\u0E01",
      rarity: "B",
      element: "fire",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E23\u0E30\u0E1A\u0E33\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E1D\u0E39\u0E07",
      signatureEffect: {
        type: "cleanse",
        count: 1,
        chance: 1,
        duration: 0
      },
      customSigMult: 0,
      ability: {
        id: "warmth_of_the_flock",
        name: "\u0E1B\u0E35\u0E01\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19\u0E23\u0E48\u0E27\u0E21\u0E23\u0E31\u0E07",
        description: "\u0E17\u0E38\u0E01\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 3.5% \u0E02\u0E2D\u0E07 Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21"
      },
      defaultSkills: [
        "fire_m2",
        "fire_s",
        "medical_m1",
        "medical_s"
      ],
      preferredRow: "back",
      backlineChance: 0
    },
    {
      id: "capybara",
      name: "\u0E04\u0E32\u0E1B\u0E34\u0E1A\u0E32\u0E23\u0E32",
      rarity: "A",
      element: "fire",
      archetype: "BAL",
      role: "Supporter",
      str: 48,
      agi: 44,
      sta: 68,
      signatureName: "\u0E27\u0E32\u0E23\u0E35\u0E2D\u0E38\u0E48\u0E19\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "heal_pct",
        value: 0.18,
        duration: 2,
        chance: 1,
        target: "all_allies"
      },
      customSigMult: 0,
      ability: {
        id: "hot_spring_aura",
        name: "\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E19\u0E49\u0E33\u0E1E\u0E38\u0E23\u0E49\u0E2D\u0E19",
        description: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8"
      },
      defaultSkills: [
        "fire_m2",
        "fire_m1",
        "medical_l",
        "medical_m2"
      ],
      preferredRow: "back",
      backlineChance: 0
    },
    {
      id: "sun_stag",
      name: "\u0E01\u0E27\u0E32\u0E07\u0E14\u0E32\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07",
      rarity: "S",
      element: "fire",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E41\u0E2A\u0E07\u0E2D\u0E23\u0E38\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14\u0E43\u0E2B\u0E21\u0E48",
      signatureEffect: {
        type: "heal_pct",
        value: 0.25,
        duration: 2,
        chance: 1,
        target: "all_allies"
      },
      customSigMult: 0,
      ability: {
        id: "solar_resonance",
        name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E",
        description: "\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +10"
      },
      defaultSkills: [
        "fire_m2",
        "fire_l",
        "medical_l",
        "catalyst_l"
      ],
      preferredRow: "back",
      backlineChance: 0
    },
    {
      id: "crab",
      name: "\u0E1B\u0E39",
      rarity: "B",
      element: "water",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E01\u0E49\u0E32\u0E21\u0E27\u0E32\u0E23\u0E35\u0E2A\u0E01\u0E31\u0E14\u0E04\u0E25\u0E37\u0E48\u0E19",
      signatureEffect: {
        type: "shield",
        value: 0.12,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "iron_crab_pincer",
        name: "\u0E01\u0E49\u0E32\u0E21\u0E1B\u0E39\u0E15\u0E31\u0E49\u0E07\u0E23\u0E31\u0E1A",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Block Rate +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E2B\u0E19\u0E35\u0E1A (35% ATK)"
      },
      defaultSkills: [
        "water_s",
        "water_m1",
        "martial_s",
        "martial_m1"
      ],
      preferredRow: "front",
      backlineChance: 100
    },
    {
      id: "piranha",
      name: "\u0E1B\u0E25\u0E32\u0E1B\u0E34\u0E23\u0E31\u0E19\u0E22\u0E32",
      rarity: "B",
      element: "water",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E04\u0E21\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2A\u0E32\u0E22\u0E19\u0E49\u0E33\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27",
      signatureEffect: {
        type: "debuff_def",
        value: 0.15,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "frenzy_bite",
        name: "\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E0D\u0E32\u0E13\u0E01\u0E31\u0E14\u0E02\u0E22\u0E49\u0E33",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E35\u0E48 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49 CRI% +10%"
      },
      defaultSkills: [
        "water_s",
        "water_m2",
        "martial_s",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 100
    },
    {
      id: "flying_fish",
      name: "\u0E1B\u0E25\u0E32\u0E1A\u0E34\u0E19",
      rarity: "B",
      element: "water",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E04\u0E23\u0E35\u0E1A\u0E27\u0E32\u0E22\u0E38\u0E42\u0E09\u0E1A\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E04\u0E25\u0E37\u0E48\u0E19",
      signatureEffect: {
        type: "buff_spd",
        value: 0.15,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "glide_wave",
        name: "\u0E23\u0E48\u0E2D\u0E19\u0E40\u0E27\u0E2B\u0E32\u0E27\u0E32\u0E23\u0E35",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 FLEE +8 \u0E41\u0E25\u0E30 SPD +6 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +10 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "water_s",
        "water_m2",
        "trick_s",
        "catalyst_s"
      ],
      preferredRow: "front",
      backlineChance: 90
    },
    {
      id: "starfish",
      name: "\u0E1B\u0E25\u0E32\u0E14\u0E32\u0E27",
      rarity: "B",
      element: "water",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E14\u0E32\u0E23\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32",
      signatureEffect: {
        type: "heal_pct",
        value: 0.15,
        duration: 2,
        chance: 1,
        target: "all_allies"
      },
      customSigMult: 0,
      ability: {
        id: "regenerative_core",
        name: "\u0E01\u0E32\u0E22\u0E32\u0E07\u0E2D\u0E01\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34 1 \u0E2A\u0E16\u0E32\u0E19\u0E30\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07"
      },
      defaultSkills: [
        "water_s",
        "water_m1",
        "medical_s",
        "medical_m1"
      ],
      preferredRow: "back",
      backlineChance: 0
    },
    {
      id: "crocodile",
      name: "\u0E08\u0E23\u0E30\u0E40\u0E02\u0E49",
      rarity: "A",
      element: "water",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E21\u0E2B\u0E32\u0E01\u0E32\u0E25\u0E04\u0E0A\u0E2A\u0E32\u0E23\u0E1F\u0E32\u0E14\u0E2B\u0E32\u0E07",
      signatureEffect: {
        type: "vulnerable",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "death_roll_jaw",
        name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23\u0E48\u0E32\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 Armor Break +12% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E32\u0E40\u0E21\u0E08 +15% \u0E41\u0E25\u0E30\u0E25\u0E14 HIT \u0E28\u0E31\u0E15\u0E23\u0E39 12 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "water_m1",
        "water_m2",
        "martial_m1",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 100
    },
    {
      id: "swordfish",
      name: "\u0E1B\u0E25\u0E32\u0E01\u0E23\u0E30\u0E42\u0E17\u0E07\u0E14\u0E32\u0E1A",
      rarity: "A",
      element: "water",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E14\u0E32\u0E1A\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22",
      signatureEffect: {
        type: "buff_cri",
        value: 20,
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "piercing_bill",
        name: "\u0E1B\u0E25\u0E32\u0E22\u0E14\u0E32\u0E1A\u0E27\u0E32\u0E23\u0E35\u0E1E\u0E34\u0E06\u0E32\u0E15",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% CRI DMG +25%"
      },
      defaultSkills: [
        "water_m1",
        "water_m2",
        "trick_m2",
        "secret_m1"
      ],
      preferredRow: "front",
      backlineChance: 90
    },
    {
      id: "octopus",
      name: "\u0E1B\u0E25\u0E32\u0E2B\u0E21\u0E36\u0E01\u0E2A\u0E32\u0E22",
      rarity: "A",
      element: "water",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E27\u0E31\u0E07\u0E27\u0E19\u0E2B\u0E19\u0E27\u0E14\u0E2A\u0E21\u0E38\u0E17\u0E23",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "ink_cloud_grasp",
        name: "\u0E21\u0E48\u0E32\u0E19\u0E2B\u0E21\u0E36\u0E01\u0E41\u0E1B\u0E14\u0E2B\u0E19\u0E27\u0E14",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1E\u0E48\u0E19\u0E2B\u0E21\u0E36\u0E01\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E23\u0E36\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "water_m1",
        "water_m2",
        "trick_m1",
        "trick_m2"
      ],
      preferredRow: "back",
      backlineChance: 30
    },
    {
      id: "sea_otter",
      name: "\u0E19\u0E32\u0E01\u0E17\u0E30\u0E40\u0E25",
      rarity: "A",
      element: "water",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E44\u0E02\u0E48\u0E21\u0E38\u0E01\u0E27\u0E32\u0E23\u0E35\u0E04\u0E38\u0E49\u0E21\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "heal_pct",
        value: 0.18,
        duration: 2,
        chance: 1,
        target: "all_allies"
      },
      customSigMult: 0,
      ability: {
        id: "buoyant_comfort",
        name: "\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E19\u0E49\u0E33\u0E0A\u0E37\u0E48\u0E19\u0E43\u0E08",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8 \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19 5% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "water_m1",
        "water_l",
        "medical_m2",
        "catalyst_m2"
      ],
      preferredRow: "back",
      backlineChance: 0
    },
    {
      id: "hippo",
      name: "\u0E2E\u0E34\u0E1B\u0E42\u0E1B",
      rarity: "S",
      element: "water",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E2E\u0E34\u0E1B\u0E42\u0E1B\u0E04\u0E25\u0E37\u0E48\u0E19\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E17\u0E30\u0E25\u0E27\u0E07",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "submerged_thick_hide",
        name: "\u0E2B\u0E19\u0E31\u0E07\u0E2B\u0E19\u0E32\u0E2A\u0E30\u0E40\u0E17\u0E34\u0E19\u0E19\u0E49\u0E33",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "water_m1",
        "water_l",
        "martial_m2",
        "martial_l"
      ],
      preferredRow: "front",
      backlineChance: 100
    },
    {
      id: "orca",
      name: "\u0E27\u0E32\u0E2C\u0E40\u0E1E\u0E0A\u0E0C\u0E06\u0E32\u0E15",
      rarity: "S",
      element: "water",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E2D\u0E23\u0E4C\u0E01\u0E32\u0E09\u0E35\u0E01\u0E2A\u0E21\u0E38\u0E17\u0E23",
      signatureEffect: {
        type: "debuff_def",
        value: 0.3,
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "apex_pod_hunter",
        name: "\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 CRI% +10% \u0E41\u0E25\u0E30 SPD +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% \u0E41\u0E25\u0E30\u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "water_m2",
        "water_l",
        "martial_l",
        "trick_l"
      ],
      preferredRow: "front",
      backlineChance: 85
    },
    {
      id: "jellyfish",
      name: "\u0E41\u0E21\u0E07\u0E01\u0E30\u0E1E\u0E23\u0E38\u0E19",
      rarity: "S",
      element: "water",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E23\u0E2A\u0E38\u0E21\u0E2A\u0E32\u0E22\u0E43\u0E22\u0E21\u0E23\u0E13\u0E30",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "nematocyst_paralysis",
        name: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E25\u0E1B\u0E31\u0E07\u0E2B\u0E32\u0E1E\u0E34\u0E29\u0E0A\u0E32",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E23\u0E37\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "water_m2",
        "water_l",
        "trick_m2",
        "secret_l"
      ],
      preferredRow: "back",
      backlineChance: 20
    },
    {
      id: "dolphin",
      name: "\u0E42\u0E25\u0E21\u0E32",
      rarity: "S",
      element: "water",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C",
      signatureEffect: {
        type: "heal_pct",
        value: 0.25,
        duration: 2,
        chance: 1,
        target: "all_allies"
      },
      customSigMult: 0,
      ability: {
        id: "echolocation_harmony",
        name: "\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E15\u0E34\u0E1B\u0E31\u0E0D\u0E0D\u0E32",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +10 \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19 +10 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "water_m1",
        "water_l",
        "medical_l",
        "catalyst_l"
      ],
      preferredRow: "back",
      backlineChance: 0
    },
    {
      id: "bighorn",
      name: "\u0E41\u0E01\u0E30\u0E20\u0E39\u0E40\u0E02\u0E32",
      rarity: "B",
      element: "wind",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E40\u0E02\u0E32\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E27\u0E32\u0E22\u0E38",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.25
      },
      ability: {
        id: "stand_against_gale",
        name: "\u0E22\u0E37\u0E19\u0E2B\u0E22\u0E31\u0E14\u0E15\u0E49\u0E32\u0E19\u0E25\u0E21\u0E01\u0E23\u0E14",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E1A\u0E25\u0E47\u0E2D\u0E01 Block Rate +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: [
        "wind_s",
        "wind_m2",
        "martial_s",
        "martial_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "woodpecker",
      name: "\u0E19\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E27\u0E32\u0E19",
      rarity: "B",
      element: "wind",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E40\u0E08\u0E32\u0E30\u0E01\u0E30\u0E42\u0E2B\u0E25\u0E01\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E40\u0E2A\u0E35\u0E22\u0E07",
      signatureEffect: {
        type: "debuff_def",
        value: 0.2,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "woodpecker_drill_beak",
        name: "\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E1B\u0E32\u0E01\u0E2A\u0E27\u0E48\u0E32\u0E19\u0E27\u0E32\u0E22\u0E38",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +15%",
        procChance: 0.6
      },
      defaultSkills: [
        "wind_s",
        "wind_m1",
        "martial_s",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "seagull",
      name: "\u0E19\u0E01\u0E19\u0E32\u0E07\u0E19\u0E27\u0E25",
      rarity: "B",
      element: "wind",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E27\u0E22\u0E27\u0E32\u0E22\u0E1B\u0E35\u0E01\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E31\u0E1A\u0E2A\u0E19",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "screeching_sea_gale",
        name: "\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E27\u0E35\u0E14\u0E23\u0E49\u0E2D\u0E07\u0E42\u0E15\u0E49\u0E25\u0E21\u0E17\u0E30\u0E40\u0E25",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E28\u0E31\u0E15\u0E23\u0E39 HIT -12 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E02\u0E42\u0E21\u0E22\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 6 \u0E41\u0E15\u0E49\u0E21\u0E21\u0E32\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07",
        procChance: 0.55
      },
      defaultSkills: [
        "wind_s",
        "wind_m1",
        "trick_s",
        "martial_s"
      ],
      preferredRow: "back",
      backlineChance: 0.7
    },
    {
      id: "dove",
      name: "\u0E19\u0E01\u0E1E\u0E34\u0E23\u0E32\u0E1A",
      rarity: "B",
      element: "wind",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E1B\u0E35\u0E01\u0E2A\u0E31\u0E19\u0E15\u0E34\u0E20\u0E32\u0E1E\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32",
      customSigMult: 0,
      signatureEffect: {
        type: "buff_spd",
        value: 0.15,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "pure_breeze_cleanse",
        name: "\u0E2A\u0E32\u0E22\u0E25\u0E21\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E1B\u0E31\u0E14\u0E40\u0E1B\u0E48\u0E32",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8",
        procChance: 0.55
      },
      defaultSkills: [
        "wind_s",
        "wind_m2",
        "medical_s",
        "medical_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.85
    },
    {
      id: "yak",
      name: "\u0E08\u0E32\u0E21\u0E23\u0E35",
      rarity: "A",
      element: "wind",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E27\u0E32\u0E22\u0E38\u0E2B\u0E34\u0E21\u0E32\u0E25\u0E31\u0E22",
      signatureEffect: {
        type: "shield",
        value: 0.15,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "thick_fur_gale_shield",
        name: "\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E15\u0E49\u0E32\u0E19\u0E1E\u0E32\u0E22\u0E38",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E04\u0E25\u0E37\u0E48\u0E19\u0E25\u0E21\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: [
        "wind_m1",
        "wind_m2",
        "martial_m1",
        "martial_m2"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "kangaroo",
      name: "\u0E08\u0E34\u0E07\u0E42\u0E08\u0E49",
      rarity: "A",
      element: "wind",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E1A\u0E32\u0E17\u0E32\u0E27\u0E32\u0E22\u0E38\u0E17\u0E30\u0E25\u0E27\u0E07\u0E2D\u0E01",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "shockwave_double_kick",
        name: "\u0E25\u0E39\u0E01\u0E16\u0E35\u0E1A\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.65
      },
      defaultSkills: [
        "wind_m1",
        "wind_l",
        "martial_m1",
        "martial_m2"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "swan",
      name: "\u0E2B\u0E07\u0E2A\u0E4C",
      rarity: "A",
      element: "wind",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E23\u0E30\u0E1A\u0E33\u0E27\u0E32\u0E22\u0E38\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E27\u0E32",
      customSigMult: 0,
      signatureEffect: {
        type: "shield",
        value: 0.12,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "swan_dance_guardian",
        name: "\u0E23\u0E30\u0E1A\u0E33\u0E2B\u0E07\u0E2A\u0E4C\u0E04\u0E38\u0E49\u0E21\u0E17\u0E31\u0E1E",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E27\u0E32\u0E22\u0E38 5% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "wind_m1",
        "wind_m2",
        "medical_m1",
        "catalyst_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.85
    },
    {
      id: "ostrich",
      name: "\u0E19\u0E01\u0E01\u0E23\u0E30\u0E08\u0E2D\u0E01\u0E40\u0E17\u0E28",
      rarity: "S",
      element: "wind",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E40\u0E15\u0E30\u0E2A\u0E01\u0E31\u0E14\u0E1E\u0E32\u0E22\u0E38\u0E04\u0E25\u0E31\u0E48\u0E07",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "thick_hide_gale_runner",
        name: "\u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E27\u0E34\u0E48\u0E07\u0E42\u0E15\u0E49\u0E25\u0E21",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E02\u0E13\u0E30 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A FLEE +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP",
        procChance: 0.65
      },
      defaultSkills: [
        "wind_m2",
        "wind_l",
        "martial_m2",
        "martial_l"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "cassowary",
      name: "\u0E19\u0E01\u0E04\u0E32\u0E2A\u0E42\u0E0B\u0E27\u0E32\u0E23\u0E35",
      rarity: "S",
      element: "wind",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E2A\u0E30\u0E1A\u0E31\u0E49\u0E19\u0E25\u0E21",
      signatureEffect: {
        type: "bleed",
        duration: 2,
        chance: 0.8
      },
      ability: {
        id: "cassowary_dagger_claw",
        name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E21\u0E35\u0E14\u0E14\u0E32\u0E1A\u0E27\u0E32\u0E22\u0E38",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +15% \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25\u0E1E\u0E34\u0E29 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "wind_m1",
        "wind_l",
        "martial_m2",
        "martial_l"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "condor",
      name: "\u0E41\u0E23\u0E49\u0E07\u0E04\u0E2D\u0E19\u0E14\u0E2D\u0E23\u0E4C",
      rarity: "S",
      element: "wind",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E44\u0E0B\u0E42\u0E04\u0E25\u0E19\u0E21\u0E2B\u0E32\u0E27\u0E32\u0E15\u0E20\u0E31\u0E22",
      signatureEffect: {
        type: "debuff_spd",
        value: 0.25,
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "condor_dominion_wings",
        name: "\u0E1E\u0E0D\u0E32\u0E01\u0E32\u0E07\u0E1B\u0E35\u0E01\u0E04\u0E38\u0E21\u0E19\u0E48\u0E32\u0E19\u0E1F\u0E49\u0E32",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E25\u0E21\u0E01\u0E14\u0E17\u0E31\u0E1A \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "wind_m2",
        "wind_l",
        "trick_m2",
        "secret_l"
      ],
      preferredRow: "back",
      backlineChance: 0.8
    },
    {
      id: "quetzal",
      name: "\u0E19\u0E01\u0E40\u0E04\u0E27\u0E15\u0E0B\u0E31\u0E25",
      rarity: "S",
      element: "wind",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E2A\u0E32\u0E22\u0E25\u0E21",
      customSigMult: 0,
      signatureEffect: {
        type: "buff_spd",
        value: 0.25,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "sacred_emerald_wind",
        name: "\u0E1E\u0E23\u0E2D\u0E31\u0E0D\u0E21\u0E13\u0E35\u0E2A\u0E32\u0E22\u0E25\u0E21\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07 +10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "wind_m2",
        "wind_l",
        "medical_l",
        "catalyst_l"
      ],
      preferredRow: "back",
      backlineChance: 0.85
    },
    {
      id: "cheetah",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E0A\u0E35\u0E15\u0E32\u0E2B\u0E4C",
      rarity: "A",
      element: "wind",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E01\u0E23\u0E32\u0E21\u0E25\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27 120km",
      signatureEffect: {
        type: "buff_cri",
        value: 0.2,
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "cheetah_sprint_burst",
        name: "\u0E2A\u0E1B\u0E23\u0E34\u0E19\u0E15\u0E4C\u0E2A\u0E32\u0E22\u0E25\u0E21\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +10, FLEE +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A CRI% +15% \u0E41\u0E25\u0E30 CRI DMG +20%",
        procChance: 0.65
      },
      defaultSkills: [
        "wind_m1",
        "wind_m2",
        "martial_m1",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.3
    },
    {
      id: "honey_badger",
      name: "\u0E2E\u0E31\u0E19\u0E19\u0E35\u0E48\u0E41\u0E1A\u0E14\u0E40\u0E08\u0E2D\u0E23\u0E4C",
      rarity: "B",
      element: "earth",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E15\u0E30\u0E1B\u0E1A\u0E09\u0E35\u0E01\u0E2B\u0E34\u0E19\u0E1C\u0E32",
      signatureEffect: {
        type: "debuff_def",
        value: 0.2,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "claw_break_stone",
        name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E17\u0E25\u0E32\u0E22\u0E28\u0E34\u0E25\u0E32",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +15%",
        procChance: 0.6
      },
      defaultSkills: [
        "earth_s",
        "earth_m1",
        "martial_s",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "gorilla",
      name: "\u0E01\u0E2D\u0E23\u0E34\u0E25\u0E25\u0E32",
      rarity: "A",
      element: "earth",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E21\u0E2B\u0E32\u0E2B\u0E21\u0E31\u0E14\u0E01\u0E2D\u0E23\u0E34\u0E25\u0E25\u0E32\u0E17\u0E25\u0E32\u0E22\u0E1C\u0E32",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "gorilla_ground_slam",
        name: "\u0E01\u0E33\u0E1B\u0E31\u0E49\u0E19\u0E28\u0E34\u0E25\u0E32\u0E17\u0E38\u0E1A\u0E1E\u0E2A\u0E38\u0E18\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.65
      },
      defaultSkills: [
        "earth_m1",
        "earth_l",
        "martial_m1",
        "martial_m2"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "mole",
      name: "\u0E15\u0E31\u0E27\u0E15\u0E38\u0E48\u0E19",
      rarity: "B",
      element: "earth",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22\u0E43\u0E15\u0E49\u0E1E\u0E34\u0E20\u0E1E",
      signatureEffect: {
        type: "buff_cri",
        value: 0.2,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "burrow_ambush",
        name: "\u0E14\u0E33\u0E14\u0E34\u0E19\u0E25\u0E2D\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 FLEE +8 \u0E41\u0E25\u0E30 SPD +6 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E02\u0E48\u0E27\u0E19\u0E41\u0E17\u0E07 (40% ATK)",
        procChance: 0.6
      },
      defaultSkills: [
        "earth_s",
        "earth_m1",
        "martial_s",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0.3
    },
    {
      id: "cougar",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E1E\u0E39\u0E21\u0E48\u0E32",
      rarity: "A",
      element: "earth",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E1E\u0E38\u0E48\u0E07\u0E02\u0E22\u0E49\u0E33\u0E08\u0E32\u0E01\u0E1C\u0E32\u0E2B\u0E34\u0E19",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "cliff_stalker",
        name: "\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E0B\u0E2D\u0E01\u0E2B\u0E34\u0E19\u0E1C\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +10, FLEE +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A CRI% +15% \u0E41\u0E25\u0E30 CRI DMG +20%",
        procChance: 0.65
      },
      defaultSkills: [
        "earth_m1",
        "earth_m2",
        "martial_m1",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.3
    },
    {
      id: "perentie",
      name: "\u0E15\u0E30\u0E01\u0E27\u0E14\u0E17\u0E23\u0E32\u0E22\u0E22\u0E31\u0E01\u0E29\u0E4C",
      rarity: "S",
      element: "earth",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E04\u0E21\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "debuff_def",
        value: 0.3,
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "sand_dragon_ambush",
        name: "\u0E21\u0E31\u0E07\u0E01\u0E23\u0E14\u0E34\u0E19\u0E0B\u0E38\u0E48\u0E21\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 CRI% +10% \u0E41\u0E25\u0E30 SPD +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "earth_m2",
        "earth_l",
        "martial_l",
        "trick_l"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "prairie_dog",
      name: "\u0E41\u0E1E\u0E23\u0E35\u0E48\u0E14\u0E47\u0E2D\u0E01",
      rarity: "B",
      element: "earth",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E1B\u0E48\u0E27\u0E19\u0E1E\u0E2A\u0E38\u0E18\u0E32",
      signatureEffect: {
        type: "root",
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "pitfall_trap",
        name: "\u0E2B\u0E25\u0E38\u0E21\u0E1E\u0E23\u0E32\u0E07\u0E14\u0E34\u0E19\u0E17\u0E23\u0E38\u0E14",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -6 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.55
      },
      defaultSkills: [
        "earth_s",
        "earth_m1",
        "trick_s",
        "secret_s"
      ],
      preferredRow: "back",
      backlineChance: 0.75
    },
    {
      id: "anteater",
      name: "\u0E15\u0E31\u0E27\u0E01\u0E34\u0E19\u0E21\u0E14\u0E22\u0E31\u0E01\u0E29\u0E4C",
      rarity: "A",
      element: "earth",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E17\u0E25\u0E32\u0E22\u0E08\u0E2D\u0E21\u0E1B\u0E25\u0E27\u0E01",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "quicksand_vortex",
        name: "\u0E27\u0E31\u0E07\u0E27\u0E19\u0E17\u0E23\u0E32\u0E22\u0E14\u0E39\u0E14\u0E01\u0E25\u0E37\u0E19",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E23\u0E36\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 Root (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.5
      },
      defaultSkills: [
        "earth_m1",
        "earth_m2",
        "trick_m1",
        "secret_m2"
      ],
      preferredRow: "back",
      backlineChance: 0.75
    },
    {
      id: "elephant",
      name: "\u0E0A\u0E49\u0E32\u0E07\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32",
      rarity: "S",
      element: "earth",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E20\u0E1E",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "earthquake_footsteps",
        name: "\u0E1D\u0E35\u0E40\u0E17\u0E49\u0E32\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E01\u0E31\u0E21\u0E1B\u0E19\u0E32\u0E17",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19\u0E14\u0E34\u0E19 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "earth_m2",
        "earth_l",
        "trick_m2",
        "secret_l"
      ],
      preferredRow: "back",
      backlineChance: 0.8
    },
    {
      id: "wombat",
      name: "\u0E15\u0E31\u0E27\u0E27\u0E2D\u0E21\u0E41\u0E1A\u0E15",
      rarity: "A",
      element: "earth",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E1E\u0E23\u0E07\u0E14\u0E34\u0E19\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C",
      customSigMult: 0,
      signatureEffect: {
        type: "buff_def",
        value: 0.2,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "burrow_safehaven",
        name: "\u0E42\u0E1E\u0E23\u0E07\u0E14\u0E34\u0E19\u0E01\u0E33\u0E1A\u0E31\u0E07\u0E20\u0E31\u0E22",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E14\u0E34\u0E19 5% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "earth_m1",
        "earth_m2",
        "medical_m1",
        "catalyst_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.85
    },
    {
      id: "giraffe",
      name: "\u0E22\u0E35\u0E23\u0E32\u0E1F",
      rarity: "S",
      element: "earth",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E1E\u0E23\u0E21\u0E34\u0E48\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E41\u0E2B\u0E48\u0E07\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19",
      customSigMult: 0,
      signatureEffect: {
        type: "buff_def",
        value: 0.25,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "high_ground_blessing",
        name: "\u0E1E\u0E23\u0E40\u0E19\u0E15\u0E23\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E2A\u0E39\u0E07\u0E0A\u0E31\u0E19",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07 +10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "earth_m2",
        "earth_l",
        "medical_l",
        "catalyst_l"
      ],
      preferredRow: "back",
      backlineChance: 0.85
    },
    {
      id: "sloth",
      name: "\u0E15\u0E31\u0E27\u0E2A\u0E25\u0E47\u0E2D\u0E18",
      rarity: "B",
      element: "plant",
      archetype: "DEF",
      role: "Tank",
      str: 38,
      agi: 22,
      sta: 90,
      signatureName: "\u0E42\u0E2D\u0E1A\u0E01\u0E2D\u0E14\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E24\u0E01\u0E29\u0E32",
      signatureEffect: {
        type: "buff_def",
        value: 0.2,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "moss_coat",
        name: "\u0E21\u0E2D\u0E2A\u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E2B\u0E48\u0E2D\u0E2B\u0E38\u0E49\u0E21",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 3% \u0E02\u0E2D\u0E07 Max HP",
        procChance: 0.5
      },
      defaultSkills: [
        "plant_m1",
        "plant_m2",
        "medical_s",
        "medical_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "tapir",
      name: "\u0E2A\u0E21\u0E40\u0E2A\u0E23\u0E47\u0E08",
      rarity: "A",
      element: "plant",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E34\u0E17\u0E23\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1D\u0E31\u0E19",
      signatureEffect: {
        type: "sleep",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "ancient_forest_hide",
        name: "\u0E2B\u0E19\u0E31\u0E07\u0E2B\u0E19\u0E32\u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E21\u0E2B\u0E32\u0E01\u0E32\u0E2C",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E1A\u0E25\u0E47\u0E2D\u0E01 Block +12% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 6% Max HP",
        procChance: 0.6
      },
      defaultSkills: [
        "plant_m1",
        "plant_l",
        "medical_m1",
        "martial_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "panda",
      name: "\u0E2B\u0E21\u0E35\u0E41\u0E1E\u0E19\u0E14\u0E49\u0E32",
      rarity: "S",
      element: "plant",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E44\u0E1C\u0E48\u0E1E\u0E31\u0E19\u0E25\u0E33",
      signatureEffect: {
        type: "shield",
        value: 0.2,
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "bamboo_fortress",
        name: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E1B\u0E48\u0E32\u0E44\u0E1C\u0E48\u0E2A\u0E30\u0E1A\u0E31\u0E14",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "plant_m2",
        "plant_l",
        "martial_m2",
        "medical_m2"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "moose",
      name: "\u0E01\u0E27\u0E32\u0E07\u0E21\u0E39\u0E2A",
      rarity: "A",
      element: "plant",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E02\u0E27\u0E34\u0E14\u0E17\u0E30\u0E25\u0E27\u0E07\u0E44\u0E1E\u0E23\u0E2A\u0E19",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "titan_antler_charge",
        name: "\u0E40\u0E02\u0E32\u0E21\u0E2B\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E1E\u0E31\u0E07\u0E1E\u0E34\u0E19\u0E32\u0E28",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.65
      },
      defaultSkills: [
        "plant_m1",
        "plant_l",
        "martial_m1",
        "martial_m2"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "leaf_insect",
      name: "\u0E15\u0E31\u0E4A\u0E01\u0E41\u0E15\u0E19\u0E43\u0E1A\u0E44\u0E21\u0E49",
      rarity: "B",
      element: "plant",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E04\u0E21\u0E40\u0E04\u0E35\u0E49\u0E22\u0E27\u0E43\u0E1A\u0E44\u0E21\u0E49\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "buff_cri",
        value: 0.2,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "foliage_cloak",
        name: "\u0E1E\u0E23\u0E32\u0E07\u0E43\u0E1A\u0E44\u0E21\u0E49\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 FLEE +8 \u0E41\u0E25\u0E30 SPD +6 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E04\u0E21\u0E21\u0E35\u0E14\u0E43\u0E1A\u0E44\u0E21\u0E49 (40% ATK)",
        procChance: 0.6
      },
      defaultSkills: [
        "plant_s",
        "plant_m1",
        "martial_s",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "ocelot",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E14\u0E32\u0E27\u0E42\u0E2D\u0E0B\u0E35\u0E25\u0E47\u0E2D\u0E15",
      rarity: "A",
      element: "plant",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E1E\u0E23\u0E32\u0E19\u0E1E\u0E07\u0E44\u0E1E\u0E23",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "bush_ambush",
        name: "\u0E0B\u0E38\u0E48\u0E21\u0E25\u0E48\u0E32\u0E1E\u0E07\u0E1E\u0E38\u0E48\u0E21",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +10, FLEE +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A CRI% +15% \u0E41\u0E25\u0E30 CRI DMG +20%",
        procChance: 0.65
      },
      defaultSkills: [
        "plant_m1",
        "plant_l",
        "martial_m1",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "clouded_leopard",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E25\u0E32\u0E22\u0E40\u0E21\u0E06",
      rarity: "S",
      element: "plant",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E42\u0E09\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E22\u0E2D\u0E14\u0E40\u0E23\u0E37\u0E2D\u0E19\u0E44\u0E1E\u0E23",
      signatureEffect: {
        type: "debuff_def",
        value: 0.3,
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "canopy_shadow_fang",
        name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E07\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 CRI% +10% \u0E41\u0E25\u0E30 SPD +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "plant_l",
        "plant_m1",
        "martial_m2",
        "trick_l"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "chameleon",
      name: "\u0E01\u0E34\u0E49\u0E07\u0E01\u0E48\u0E32\u0E04\u0E32\u0E40\u0E21\u0E40\u0E25\u0E35\u0E22\u0E19",
      rarity: "B",
      element: "plant",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E2A\u0E30\u0E01\u0E14\u0E15\u0E32\u0E2A\u0E25\u0E31\u0E1A\u0E2A\u0E35\u0E25\u0E27\u0E07\u0E15\u0E32",
      signatureEffect: {
        type: "root",
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "vine_tongue_catch",
        name: "\u0E25\u0E34\u0E49\u0E19\u0E15\u0E27\u0E31\u0E14\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E24\u0E01\u0E29\u0E32",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -6 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.55
      },
      defaultSkills: [
        "plant_s",
        "plant_m1",
        "trick_s",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.3
    },
    {
      id: "gibbon",
      name: "\u0E0A\u0E30\u0E19\u0E35",
      rarity: "A",
      element: "plant",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E2A\u0E27\u0E32\u0E17",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "wild_canopy_howl",
        name: "\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E39\u0E48\u0E01\u0E49\u0E2D\u0E07\u0E1E\u0E07\u0E44\u0E1E\u0E23",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E28\u0E31\u0E15\u0E23\u0E39 HIT -15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "plant_m1",
        "plant_m2",
        "trick_m1",
        "trick_m2"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "orangutan",
      name: "\u0E2D\u0E38\u0E23\u0E31\u0E07\u0E2D\u0E38\u0E15\u0E31\u0E07",
      rarity: "S",
      element: "plant",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E17\u0E25\u0E32\u0E22\u0E20\u0E1E",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "ancient_root_weave",
        name: "\u0E23\u0E32\u0E01\u0E44\u0E21\u0E49\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1A\u0E31\u0E0D\u0E0A\u0E32\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E23\u0E31\u0E14 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "plant_m2",
        "plant_l",
        "trick_m2",
        "trick_l"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "koala",
      name: "\u0E42\u0E04\u0E2D\u0E32\u0E25\u0E32",
      rarity: "B",
      element: "plant",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E42\u0E2D\u0E1A\u0E19\u0E34\u0E17\u0E23\u0E32",
      signatureEffect: {
        type: "buff_def",
        value: 0.15,
        duration: 2,
        chance: 1
      },
      customSigMult: 0,
      ability: {
        id: "eucalyptus_rest",
        name: "\u0E01\u0E25\u0E34\u0E48\u0E19\u0E22\u0E39\u0E04\u0E32\u0E25\u0E34\u0E1B\u0E15\u0E31\u0E2A\u0E1C\u0E48\u0E2D\u0E19\u0E04\u0E25\u0E32\u0E22",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8",
        procChance: 0.55
      },
      defaultSkills: [
        "plant_s",
        "plant_m2",
        "medical_s",
        "medical_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.35
    },
    {
      id: "hornbill",
      name: "\u0E19\u0E01\u0E40\u0E07\u0E37\u0E2D\u0E01",
      rarity: "S",
      element: "plant",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E1E\u0E23\u0E21\u0E2B\u0E32\u0E27\u0E19\u0E32\u0E25\u0E31\u0E22\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "buff_def",
        value: 0.25,
        duration: 2,
        chance: 1
      },
      customSigMult: 0,
      ability: {
        id: "seed_of_rebirth",
        name: "\u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E1E",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07 +10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "plant_l",
        "plant_aoe",
        "medical_m2",
        "medical_l"
      ],
      preferredRow: "back",
      backlineChance: 0.3
    },
    {
      id: "toad",
      name: "\u0E04\u0E32\u0E07\u0E04\u0E01",
      rarity: "B",
      element: "poison",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E04\u0E32\u0E07\u0E04\u0E01\u0E1E\u0E48\u0E19\u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E2A\u0E01\u0E31\u0E14\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "poison",
        duration: 3,
        chance: 0.45
      },
      ability: {
        id: "bufotoxin_skin",
        name: "\u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E04\u0E32\u0E07\u0E04\u0E01\u0E04\u0E38\u0E49\u0E21\u0E01\u0E32\u0E22",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.55
      },
      defaultSkills: [
        "poison_s",
        "poison_m1",
        "martial_s",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "centipede",
      name: "\u0E15\u0E30\u0E02\u0E32\u0E1A",
      rarity: "B",
      element: "poison",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E02\u0E32\u0E23\u0E38\u0E21\u0E17\u0E36\u0E49\u0E07",
      signatureEffect: {
        type: "bleed",
        duration: 3,
        chance: 0.45
      },
      ability: {
        id: "thousand_leg_fang",
        name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E02\u0E22\u0E49\u0E33\u0E23\u0E49\u0E2D\u0E22\u0E02\u0E32",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18%",
        procChance: 0.6
      },
      defaultSkills: [
        "poison_s",
        "poison_m2",
        "martial_s",
        "martial_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "butterfly",
      name: "\u0E1C\u0E35\u0E40\u0E2A\u0E37\u0E49\u0E2D",
      rarity: "B",
      element: "poison",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E23\u0E30\u0E1A\u0E33\u0E1B\u0E35\u0E01\u0E1C\u0E35\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1E\u0E34\u0E29\u0E25\u0E27\u0E07\u0E15\u0E32",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "toxic_scale_flutter",
        name: "\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E1B\u0E35\u0E01\u0E1E\u0E34\u0E29\u0E2A\u0E31\u0E1A\u0E2A\u0E19",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E2A\u0E25\u0E31\u0E14\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E1B\u0E35\u0E01\u0E1E\u0E34\u0E29\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -6 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.55
      },
      defaultSkills: [
        "poison_s",
        "poison_m1",
        "trick_s",
        "catalyst_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.5
    },
    {
      id: "bee",
      name: "\u0E1C\u0E36\u0E49\u0E07",
      rarity: "B",
      element: "poison",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E21\u0E1C\u0E36\u0E49\u0E07\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E23\u0E31\u0E07",
      signatureEffect: {
        type: "buff_def",
        value: 0.15,
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "royal_propolis",
        name: "\u0E40\u0E01\u0E2A\u0E23\u0E19\u0E21\u0E1C\u0E36\u0E49\u0E07\u0E2A\u0E21\u0E32\u0E19\u0E41\u0E1C\u0E25",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8",
        procChance: 0.55
      },
      defaultSkills: [
        "poison_s",
        "poison_m1",
        "medical_s",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.8,
      customSigMult: 0
    },
    {
      id: "gila_monster",
      name: "\u0E01\u0E34\u0E25\u0E32\u0E21\u0E2D\u0E19\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C",
      rarity: "A",
      element: "poison",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E1E\u0E34\u0E29\u0E1A\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.55
      },
      ability: {
        id: "osteoderm_toxic_armor",
        name: "\u0E40\u0E01\u0E25\u0E47\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E1E\u0E34\u0E29\u0E17\u0E19\u0E17\u0E32\u0E19",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Block Rate +12% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39 \u0E41\u0E25\u0E30\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "poison_m1",
        "poison_m2",
        "martial_m1",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "black_widow",
      name: "\u0E41\u0E21\u0E07\u0E21\u0E38\u0E21\u0E41\u0E21\u0E48\u0E21\u0E48\u0E32\u0E22\u0E14\u0E33",
      rarity: "A",
      element: "poison",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E41\u0E21\u0E48\u0E21\u0E48\u0E32\u0E22\u0E14\u0E33\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "debuff_def",
        value: 0.25,
        duration: 2,
        chance: 0.55
      },
      ability: {
        id: "hourglass_ambush",
        name: "\u0E0B\u0E38\u0E48\u0E21\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32\u0E17\u0E23\u0E32\u0E22",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +10, FLEE +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A CRI% +20% \u0E41\u0E25\u0E30 CRI DMG +25%",
        procChance: 0.65
      },
      defaultSkills: [
        "poison_m1",
        "poison_m2",
        "trick_m1",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "pitohui",
      name: "\u0E19\u0E01\u0E1E\u0E34\u0E42\u0E17\u0E2E\u0E38\u0E22",
      rarity: "A",
      element: "poison",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E1E\u0E34\u0E29\u0E21\u0E36\u0E19\u0E07\u0E07",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.55
      },
      ability: {
        id: "toxic_plumage_flutter",
        name: "\u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E02\u0E19\u0E27\u0E34\u0E2B\u0E04\u0E1E\u0E34\u0E29\u0E04\u0E25\u0E31\u0E48\u0E07",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E1E\u0E34\u0E29 \u0E25\u0E14 HIT \u0E28\u0E31\u0E15\u0E23\u0E39 -15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "poison_m1",
        "poison_aoe",
        "trick_m1",
        "catalyst_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.5
    },
    {
      id: "salamander",
      name: "\u0E0B\u0E32\u0E25\u0E32\u0E41\u0E21\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C",
      rarity: "A",
      element: "poison",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E0B\u0E32\u0E25\u0E32\u0E41\u0E21\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C",
      signatureEffect: {
        type: "cleanse",
        chance: 1
      },
      ability: {
        id: "regenerative_toxic_skin",
        name: "\u0E01\u0E32\u0E22\u0E32\u0E07\u0E2D\u0E01\u0E40\u0E0B\u0E25\u0E25\u0E4C\u0E1E\u0E34\u0E29\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E1E",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 3.5% Max HP \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: [
        "poison_m1",
        "poison_aoe",
        "medical_m1",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.8,
      customSigMult: 0
    },
    {
      id: "stonefish",
      name: "\u0E1B\u0E25\u0E32\u0E2B\u0E34\u0E19",
      rarity: "S",
      element: "poison",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E2B\u0E34\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E02\u0E22\u0E49\u0E33\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "shield",
        value: 0.18,
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "stone_spine_barb",
        name: "\u0E2B\u0E19\u0E32\u0E21\u0E2B\u0E34\u0E19\u0E1E\u0E34\u0E29\u0E21\u0E23\u0E13\u0E30",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E34\u0E29\u0E01\u0E25\u0E31\u0E1A 20% \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E23\u0E49\u0E32\u0E22\u0E41\u0E23\u0E07 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "poison_m2",
        "poison_l",
        "martial_m2",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "deathstalker",
      name: "\u0E41\u0E21\u0E07\u0E1B\u0E48\u0E2D\u0E07\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A",
      rarity: "S",
      element: "poison",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E2B\u0E32\u0E07\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A\u0E41\u0E17\u0E07\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "poison",
        duration: 3,
        chance: 0.7
      },
      ability: {
        id: "deathstalker_stinger",
        name: "\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A\u0E17\u0E30\u0E40\u0E25\u0E17\u0E23\u0E32\u0E22",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Armor Break +15% \u0E41\u0E25\u0E30 CRI% +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1E\u0E34\u0E29 (\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E34\u0E29\u0E42\u0E1A\u0E19\u0E31\u0E2A 25% \u0E41\u0E25\u0E30\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15%)",
        procChance: 0.7
      },
      defaultSkills: [
        "poison_m2",
        "poison_l",
        "trick_m2",
        "martial_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "cone_snail",
      name: "\u0E2B\u0E2D\u0E22\u0E40\u0E15\u0E49\u0E32\u0E1B\u0E39\u0E19",
      rarity: "S",
      element: "poison",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E09\u0E21\u0E27\u0E01\u0E21\u0E23\u0E13\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17",
      signatureEffect: {
        type: "root",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "conotoxin_harpoon",
        name: "\u0E09\u0E21\u0E27\u0E01\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15\u0E42\u0E04\u0E42\u0E19\u0E17\u0E47\u0E2D\u0E01\u0E0B\u0E34\u0E19",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E1E\u0E34\u0E29\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 18% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "poison_m1",
        "poison_l",
        "trick_m2",
        "catalyst_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.5
    },
    {
      id: "horseshoe_crab",
      name: "\u0E41\u0E21\u0E07\u0E14\u0E32\u0E17\u0E30\u0E40\u0E25",
      rarity: "S",
      element: "poison",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E25\u0E2B\u0E34\u0E15\u0E04\u0E23\u0E32\u0E21\u0E25\u0E49\u0E32\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C",
      signatureEffect: {
        type: "shield",
        value: 0.15,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "miracle_blue_blood",
        name: "\u0E2A\u0E32\u0E22\u0E18\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19\u0E21\u0E2B\u0E31\u0E28\u0E08\u0E23\u0E23\u0E22\u0E4C",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07 +10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "poison_aoe",
        "poison_l",
        "medical_m2",
        "catalyst_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.8,
      customSigMult: 0
    },
    {
      id: "walrus",
      name: "\u0E27\u0E2D\u0E25\u0E23\u0E31\u0E2A",
      rarity: "S",
      element: "ice",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E07\u0E32\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E17\u0E25\u0E32\u0E22\u0E18\u0E32\u0E23\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "blubber_ice_fortress",
        name: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E44\u0E02\u0E21\u0E31\u0E19\u0E07\u0E32\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "ice_m2",
        "ice_l",
        "martial_m2",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "leopard_seal",
      name: "\u0E41\u0E21\u0E27\u0E19\u0E49\u0E33\u0E40\u0E2A\u0E37\u0E2D\u0E14\u0E32\u0E27",
      rarity: "B",
      element: "ice",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23\u0E48\u0E32\u0E07",
      signatureEffect: {
        type: "bleed",
        duration: 3,
        chance: 0.45
      },
      ability: {
        id: "ice_floe_hunter",
        name: "\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E02\u0E2D\u0E1A\u0E18\u0E32\u0E23\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18%",
        procChance: 0.6
      },
      defaultSkills: [
        "ice_s",
        "ice_m1",
        "martial_s",
        "martial_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "wolverine",
      name: "\u0E27\u0E39\u0E25\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E35\u0E19",
      rarity: "A",
      element: "ice",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E04\u0E25\u0E31\u0E48\u0E07\u0E17\u0E25\u0E32\u0E22\u0E2B\u0E34\u0E21\u0E30",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "frozen_bone_crusher",
        name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E1A\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.65
      },
      defaultSkills: [
        "ice_m1",
        "ice_l",
        "martial_m1",
        "trick_s"
      ],
      preferredRow: "front",
      backlineChance: 0.25
    },
    {
      id: "polar_bear",
      name: "\u0E2B\u0E21\u0E35\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01",
      rarity: "S",
      element: "ice",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E21\u0E2B\u0E32\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E16\u0E25\u0E48\u0E21\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "apex_polar_dominion",
        name: "\u0E23\u0E32\u0E0A\u0E31\u0E19\u0E22\u0E4C\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E2B\u0E34\u0E21\u0E30\u0E04\u0E25\u0E31\u0E48\u0E07",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +20% \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "ice_m1",
        "ice_l",
        "martial_m2",
        "martial_l"
      ],
      preferredRow: "front",
      backlineChance: 0.2
    },
    {
      id: "ermine",
      name: "\u0E40\u0E2D\u0E2D\u0E23\u0E4C\u0E21\u0E34\u0E19",
      rarity: "B",
      element: "ice",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E02\u0E32\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "buff_cri",
        value: 20,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "stoat_snow_dance",
        name: "\u0E23\u0E30\u0E1A\u0E33\u0E1E\u0E23\u0E34\u0E49\u0E27\u0E44\u0E2B\u0E27\u0E1E\u0E23\u0E32\u0E07\u0E2B\u0E34\u0E21\u0E30",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 FLEE +8 \u0E41\u0E25\u0E30 SPD +6 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E01\u0E31\u0E14\u0E02\u0E22\u0E49\u0E33\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22 (40% ATK)",
        procChance: 0.6
      },
      defaultSkills: [
        "ice_s",
        "ice_m1",
        "trick_s",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "lynx",
      name: "\u0E41\u0E21\u0E27\u0E1B\u0E48\u0E32\u0E25\u0E34\u0E07\u0E0B\u0E4C",
      rarity: "A",
      element: "ice",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E07\u0E32\u0E2B\u0E34\u0E21\u0E30\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22",
      signatureEffect: {
        type: "slow",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "snowshoe_stalker",
        name: "\u0E22\u0E48\u0E32\u0E07\u0E01\u0E49\u0E32\u0E27\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E2B\u0E34\u0E21\u0E30\u0E40\u0E07\u0E35\u0E22\u0E1A",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +10, FLEE +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A CRI% +15% \u0E41\u0E25\u0E30 CRI DMG +20%",
        procChance: 0.65
      },
      defaultSkills: [
        "ice_m1",
        "ice_l",
        "trick_m1",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "snow_leopard",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E14\u0E32\u0E27\u0E2B\u0E34\u0E21\u0E30",
      rarity: "S",
      element: "ice",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E42\u0E1C\u0E19\u0E02\u0E22\u0E49\u0E33\u0E08\u0E32\u0E01\u0E22\u0E2D\u0E14\u0E1C\u0E32\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07",
      signatureEffect: {
        type: "debuff_def",
        value: 0.3,
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "ghost_of_frozen_peaks",
        name: "\u0E20\u0E39\u0E15\u0E40\u0E07\u0E32\u0E1C\u0E32\u0E2B\u0E34\u0E21\u0E30\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Armor Break +15% \u0E41\u0E25\u0E30 CRI% +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07\u0E42\u0E1A\u0E19\u0E31\u0E2A +25% \u0E41\u0E25\u0E30\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15%",
        procChance: 0.7
      },
      defaultSkills: [
        "ice_m1",
        "ice_l",
        "trick_m2",
        "martial_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "puffin",
      name: "\u0E19\u0E01\u0E1E\u0E31\u0E1F\u0E1F\u0E34\u0E19",
      rarity: "B",
      element: "ice",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E1E\u0E32\u0E22\u0E38\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E1B\u0E31\u0E48\u0E19\u0E1B\u0E48\u0E27\u0E19",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "blizzard_wing_flurry",
        name: "\u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E1B\u0E35\u0E01\u0E1E\u0E32\u0E22\u0E38\u0E40\u0E01\u0E25\u0E47\u0E14\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -6 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.55
      },
      defaultSkills: [
        "ice_s",
        "ice_m1",
        "trick_s",
        "catalyst_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.5
    },
    {
      id: "narwhal",
      name: "\u0E19\u0E32\u0E23\u0E4C\u0E27\u0E32\u0E25",
      rarity: "A",
      element: "ice",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E2B\u0E2D\u0E01\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E1A\u0E2A\u0E01\u0E31\u0E14\u0E08\u0E38\u0E14",
      signatureEffect: {
        type: "freeze",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "sonar_ice_horn",
        name: "\u0E07\u0E32\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "ice_m1",
        "ice_aoe",
        "trick_m1",
        "catalyst_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.5
    },
    {
      id: "krill",
      name: "\u0E01\u0E38\u0E49\u0E07\u0E40\u0E04\u0E22",
      rarity: "B",
      element: "ice",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      customSigMult: 0,
      signatureName: "\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E2D\u0E2D\u0E42\u0E23\u0E23\u0E32\u0E1D\u0E39\u0E07\u0E40\u0E04\u0E22\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32",
      signatureEffect: {
        type: "buff_def",
        value: 0.15,
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "krill_bio_antifreeze",
        name: "\u0E2A\u0E32\u0E23\u0E15\u0E49\u0E32\u0E19\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E1D\u0E39\u0E07\u0E40\u0E04\u0E22",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8",
        procChance: 0.55
      },
      defaultSkills: [
        "ice_s",
        "ice_m1",
        "medical_s",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.8
    },
    {
      id: "beluga",
      name: "\u0E27\u0E32\u0E2C\u0E40\u0E1A\u0E25\u0E39\u0E01\u0E32",
      rarity: "A",
      element: "ice",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      customSigMult: 0,
      signatureName: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E1E\u0E25\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "cleanse",
        chance: 1
      },
      ability: {
        id: "canary_of_the_sea",
        name: "\u0E1A\u0E17\u0E40\u0E1E\u0E25\u0E07\u0E27\u0E32\u0E23\u0E35\u0E02\u0E32\u0E27\u0E01\u0E25\u0E48\u0E2D\u0E21\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07 5% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: [
        "ice_m1",
        "ice_aoe",
        "medical_m1",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.8
    },
    {
      id: "reindeer",
      name: "\u0E01\u0E27\u0E32\u0E07\u0E40\u0E23\u0E19\u0E40\u0E14\u0E35\u0E22\u0E23\u0E4C",
      rarity: "S",
      element: "ice",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      customSigMult: 0,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E21\u0E07\u0E01\u0E38\u0E0E\u0E41\u0E2A\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "shield",
        value: 0.15,
        duration: 2,
        chance: 1
      },
      ability: {
        id: "aurora_tundra_blessing",
        name: "\u0E1E\u0E23\u0E41\u0E2A\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E04\u0E38\u0E49\u0E21\u0E17\u0E38\u0E48\u0E07\u0E17\u0E38\u0E19\u0E14\u0E23\u0E32",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07 +10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "ice_aoe",
        "ice_l",
        "medical_m2",
        "catalyst_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.8
    },
    {
      id: "armadillo",
      name: "\u0E15\u0E31\u0E27\u0E2D\u0E32\u0E23\u0E4C\u0E21\u0E32\u0E14\u0E34\u0E25\u0E42\u0E25",
      rarity: "B",
      element: "dark",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E01\u0E49\u0E2D\u0E19\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E34\u0E49\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.25
      },
      ability: {
        id: "bone_armor_curl",
        name: "\u0E21\u0E49\u0E27\u0E19\u0E15\u0E31\u0E27\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E17\u0E21\u0E34\u0E2C",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E01\u0E25\u0E31\u0E1A 12% \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14 debuff_hit -12 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.5
      },
      defaultSkills: [
        "dark_s",
        "dark_m2",
        "martial_s",
        "medical_s"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "hyena",
      name: "\u0E44\u0E2E\u0E22\u0E35\u0E19\u0E48\u0E32",
      rarity: "A",
      element: "dark",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E01\u0E23\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E02\u0E22\u0E49\u0E33\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E17\u0E25\u0E32\u0E22\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.45
      },
      ability: {
        id: "scavenger_thick_hide",
        name: "\u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E17\u0E21\u0E34\u0E2C\u0E40\u0E04\u0E35\u0E49\u0E22\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 8% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "dark_m1",
        "dark_m2",
        "martial_m1",
        "medical_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "sperm_whale",
      name: "\u0E27\u0E32\u0E2C\u0E2A\u0E40\u0E1B\u0E34\u0E23\u0E4C\u0E21",
      rarity: "S",
      element: "dark",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E2D\u0E40\u0E27\u0E08\u0E35\u0E43\u0E15\u0E49\u0E2A\u0E21\u0E38\u0E17\u0E23",
      signatureEffect: {
        type: "stun",
        target: "all_enemies",
        duration: 1,
        chance: 0.7
      },
      ability: {
        id: "abyssal_pressure_skull",
        name: "\u0E01\u0E30\u0E42\u0E2B\u0E25\u0E01\u0E17\u0E19\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E2D\u0E40\u0E27\u0E08\u0E35",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E17\u0E21\u0E34\u0E2C\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08 15% \u0E41\u0E25\u0E30\u0E25\u0E14 SPD \u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: [
        "dark_l",
        "dark_aoe",
        "martial_l",
        "medical_l"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "tasmanian_devil",
      name: "\u0E41\u0E17\u0E2A\u0E40\u0E21\u0E40\u0E19\u0E35\u0E22\u0E19\u0E40\u0E14\u0E27\u0E34\u0E25",
      rarity: "B",
      element: "dark",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E02\u0E22\u0E49\u0E33\u0E41\u0E2B\u0E25\u0E01",
      signatureEffect: {
        type: "debuff_def",
        value: 0.2,
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "devil_bone_crusher_jaw",
        name: "\u0E01\u0E23\u0E32\u0E21\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E1A\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +15% \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E32\u0E14\u0E41\u0E1C\u0E25\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: [
        "dark_s",
        "dark_m1",
        "martial_s",
        "catalyst_s"
      ],
      preferredRow: "front",
      backlineChance: 0.3
    },
    {
      id: "black_vulture",
      name: "\u0E41\u0E23\u0E49\u0E07\u0E14\u0E33",
      rarity: "A",
      element: "dark",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E17\u0E21\u0E34\u0E2C\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "poison",
        stacks: 1,
        duration: 3,
        chance: 0.45
      },
      ability: {
        id: "carrion_hunter_gaze",
        name: "\u0E2A\u0E32\u0E22\u0E15\u0E32\u0E41\u0E23\u0E49\u0E07\u0E14\u0E33\u0E25\u0E48\u0E32\u0E0B\u0E32\u0E01",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Armor Break +15% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E21\u0E35 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18% \u0E41\u0E25\u0E30\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 12% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08",
        procChance: 0.65
      },
      defaultSkills: [
        "dark_m1",
        "dark_l",
        "martial_m1",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.4
    },
    {
      id: "jaguar",
      name: "\u0E40\u0E2A\u0E37\u0E2D\u0E08\u0E32\u0E01\u0E31\u0E27\u0E23\u0E4C",
      rarity: "S",
      element: "dark",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E40\u0E07\u0E32\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E02\u0E22\u0E49\u0E33\u0E01\u0E30\u0E42\u0E2B\u0E25\u0E01\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "skull_piercing_fang",
        name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E07\u0E32\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Armor Break +15% \u0E41\u0E25\u0E30 CRI% +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E42\u0E1A\u0E19\u0E31\u0E2A +25% \u0E41\u0E25\u0E30\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08",
        procChance: 0.65
      },
      defaultSkills: [
        "dark_l",
        "dark_m2",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "aye_aye",
      name: "\u0E2D\u0E32\u0E22-\u0E2D\u0E32\u0E22",
      rarity: "B",
      element: "dark",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E40\u0E19\u0E15\u0E23\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.25
      },
      ability: {
        id: "night_tap_confusion",
        name: "\u0E40\u0E04\u0E32\u0E30\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25\u0E1B\u0E48\u0E27\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -6 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.55
      },
      defaultSkills: [
        "dark_s",
        "dark_m1",
        "trick_s",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.7
    },
    {
      id: "crow",
      name: "\u0E2D\u0E35\u0E01\u0E32",
      rarity: "A",
      element: "dark",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E37\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19",
      signatureEffect: {
        type: "blind",
        target: "all_enemies",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "cunning_dark_wings",
        name: "\u0E40\u0E25\u0E48\u0E2B\u0E4C\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E1B\u0E35\u0E01\u0E17\u0E21\u0E34\u0E2C",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E1B\u0E35\u0E01\u0E17\u0E21\u0E34\u0E2C \u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 HIT \u0E28\u0E31\u0E15\u0E23\u0E39 -15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "dark_m1",
        "dark_l",
        "trick_m1",
        "secret_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.7
    },
    {
      id: "vampire_squid",
      name: "\u0E2B\u0E21\u0E36\u0E01\u0E41\u0E27\u0E21\u0E44\u0E1E\u0E23\u0E4C",
      rarity: "S",
      element: "dark",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E21\u0E36\u0E01\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F",
      signatureEffect: {
        type: "silence",
        duration: 2,
        chance: 0.8
      },
      ability: {
        id: "vampire_cloak_veil",
        name: "\u0E21\u0E48\u0E32\u0E19\u0E1B\u0E35\u0E01\u0E21\u0E32\u0E23\u0E1A\u0E14\u0E1A\u0E31\u0E07\u0E17\u0E31\u0E28\u0E19\u0E27\u0E34\u0E2A\u0E31\u0E22",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "dark_l",
        "dark_aoe",
        "trick_l",
        "secret_l"
      ],
      preferredRow: "mid",
      backlineChance: 0.5
    },
    {
      id: "cockroach",
      name: "\u0E41\u0E21\u0E25\u0E07\u0E2A\u0E32\u0E1A",
      rarity: "B",
      element: "dark",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E1F\u0E35\u0E42\u0E23\u0E42\u0E21\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E23\u0E27\u0E21\u0E1D\u0E39\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "team_heal_buff",
        target: "all_allies"
      },
      ability: {
        id: "undying_adaptation",
        name: "\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E0D\u0E32\u0E13\u0E1B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E44\u0E23\u0E49\u0E1E\u0E48\u0E32\u0E22",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8",
        procChance: 0.55
      },
      defaultSkills: [
        "dark_s",
        "dark_m2",
        "medical_s",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.8,
      customSigMult: 0
    },
    {
      id: "tokay_gecko",
      name: "\u0E15\u0E38\u0E4A\u0E01\u0E41\u0E01",
      rarity: "A",
      element: "dark",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E01\u0E39\u0E48\u0E01\u0E49\u0E2D\u0E07\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25",
      signatureEffect: {
        type: "team_cleanse_shield",
        target: "all_allies"
      },
      ability: {
        id: "gecko_regenerative_cells",
        name: "\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E21\u0E32\u0E19\u0E41\u0E1C\u0E25\u0E40\u0E0B\u0E25\u0E25\u0E4C\u0E07\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E07\u0E32\u0E21\u0E37\u0E14 5% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: [
        "dark_m2",
        "dark_l",
        "medical_m1",
        "trick_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.8,
      customSigMult: 0
    },
    {
      id: "axolotl",
      name: "\u0E41\u0E2D\u0E01\u0E42\u0E0B\u0E25\u0E2D\u0E40\u0E15\u0E34\u0E25\u0E17\u0E21\u0E34\u0E2C",
      rarity: "S",
      element: "dark",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E07\u0E32\u0E21\u0E37\u0E14",
      signatureEffect: {
        type: "team_full_regen_cleanse",
        target: "all_allies"
      },
      ability: {
        id: "miracle_organ_regeneration",
        name: "\u0E01\u0E32\u0E22\u0E32\u0E07\u0E2D\u0E01\u0E40\u0E0B\u0E25\u0E25\u0E4C\u0E2D\u0E31\u0E28\u0E08\u0E23\u0E23\u0E22\u0E4C",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07 +10 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: [
        "dark_l",
        "dark_aoe",
        "medical_l",
        "secret_l"
      ],
      preferredRow: "back",
      backlineChance: 0.85,
      customSigMult: 0
    },
    {
      id: "sand_frog",
      name: "\u0E01\u0E1A\u0E17\u0E23\u0E32\u0E22",
      rarity: "B",
      element: "light",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E01\u0E32\u0E22\u0E32\u0E17\u0E23\u0E32\u0E22\u0E1E\u0E2D\u0E07\u0E25\u0E21\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19",
      signatureEffect: {
        type: "shield",
        value: 0.2,
        duration: 2
      },
      ability: {
        id: "sand_burrow_puff",
        name: "\u0E01\u0E32\u0E22\u0E32\u0E1E\u0E2D\u0E07\u0E25\u0E21\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E41\u0E14\u0E14",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 8% \xB7 \u0E40\u0E1E\u0E34\u0E48\u0E21 Block Rate +12% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +4% Max HP"
      },
      defaultSkills: [
        "light_s",
        "light_m2",
        "martial_s",
        "medical_s"
      ],
      preferredRow: "front",
      backlineChance: 0.1,
      customSigMult: 2.2
    },
    {
      id: "camel",
      name: "\u0E2D\u0E39\u0E10",
      rarity: "A",
      element: "light",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E01\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E41\u0E2B\u0E48\u0E07\u0E17\u0E30\u0E40\u0E25\u0E17\u0E23\u0E32\u0E22",
      signatureEffect: {
        type: "buff_def_regen",
        target: "self",
        def: 0.25,
        regen: 0.06,
        duration: 2
      },
      ability: {
        id: "solar_hump_endurance",
        name: "\u0E42\u0E2B\u0E19\u0E01\u0E2A\u0E30\u0E2A\u0E21\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E17\u0E32\u0E19\u0E17\u0E19",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +5% Max HP"
      },
      defaultSkills: [
        "light_m1",
        "light_m2",
        "martial_m1",
        "medical_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.1,
      customSigMult: 2.4
    },
    {
      id: "white_bison",
      name: "\u0E01\u0E23\u0E30\u0E17\u0E34\u0E07\u0E44\u0E1A\u0E0B\u0E31\u0E19\u0E02\u0E32\u0E27",
      rarity: "S",
      element: "light",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E2A\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E44\u0E1A\u0E0B\u0E31\u0E19\u0E40\u0E17\u0E27\u0E30",
      signatureEffect: {
        type: "team_shield_cleanse",
        target: "all_allies",
        shield: 0.22,
        cleanse: 1,
        duration: 2
      },
      ability: {
        id: "sacred_white_hide",
        name: "\u0E01\u0E32\u0E22\u0E32\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E44\u0E1A\u0E0B\u0E31\u0E19\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C",
        description: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E15\u0E4C\u0E14\u0E49\u0E27\u0E22\u0E40\u0E01\u0E23\u0E32\u0E30 25% Max HP \xB7 \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 12% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E2A\u0E07 15% \u0E41\u0E25\u0E30\u0E25\u0E14 ATK \u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35 12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "light_l",
        "light_aoe",
        "martial_l",
        "medical_l"
      ],
      preferredRow: "front",
      backlineChance: 0.1,
      customSigMult: 2.6
    },
    {
      id: "sand_cat",
      name: "\u0E41\u0E21\u0E27\u0E17\u0E23\u0E32\u0E22",
      rarity: "B",
      element: "light",
      archetype: "ATK",
      role: "Striker",
      str: 69,
      agi: 45,
      sta: 36,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E09\u0E35\u0E01\u0E1C\u0E37\u0E19\u0E17\u0E23\u0E32\u0E22",
      signatureEffect: {
        type: "bleed",
        duration: 2
      },
      ability: {
        id: "sand_stealth_claw",
        name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E25\u0E48\u0E32\u0E0B\u0E38\u0E48\u0E21\u0E17\u0E23\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E19",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 Armor Break +15 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "light_s",
        "light_m1",
        "martial_s",
        "catalyst_s"
      ],
      preferredRow: "front",
      backlineChance: 0.2,
      customSigMult: 2.8
    },
    {
      id: "sidewinder",
      name: "\u0E07\u0E39\u0E2B\u0E32\u0E07\u0E01\u0E23\u0E30\u0E14\u0E34\u0E48\u0E07\u0E44\u0E0B\u0E14\u0E4C\u0E44\u0E27\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C",
      rarity: "A",
      element: "light",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 37,
      signatureName: "\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E44\u0E0B\u0E14\u0E4C\u0E44\u0E27\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E09\u0E01\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19",
      signatureEffect: {
        type: "debuff_def",
        target: "target",
        def: 0.25,
        duration: 2
      },
      ability: {
        id: "infrared_heat_strike",
        name: "\u0E40\u0E19\u0E15\u0E23\u0E04\u0E27\u0E32\u0E21\u0E23\u0E49\u0E2D\u0E19\u0E2D\u0E34\u0E19\u0E1F\u0E23\u0E32\u0E40\u0E23\u0E14",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 HIT +15 \u0E41\u0E25\u0E30 Armor Break +15 \xB7 \u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34 \u0E08\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19 +25%"
      },
      defaultSkills: [
        "light_m1",
        "light_l",
        "martial_m1",
        "trick_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.4,
      customSigMult: 3
    },
    {
      id: "akhal_teke",
      name: "\u0E21\u0E49\u0E32\u0E17\u0E2D\u0E07\u0E04\u0E33\u0E2D\u0E32\u0E04\u0E31\u0E25\u0E40\u0E17\u0E04\u0E35",
      rarity: "S",
      element: "light",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E1A\u0E32\u0E17\u0E32\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E17\u0E2D\u0E07\u0E04\u0E33",
      signatureEffect: {
        type: "chain_damage",
        target: "adjacent",
        chainDmg: 1.2
      },
      ability: {
        id: "golden_heavenly_steed",
        name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E21\u0E49\u0E32\u0E17\u0E2D\u0E07\u0E04\u0E33\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +10% \u0E41\u0E25\u0E30 Armor Break +20 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 15 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "light_l",
        "light_aoe",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0.25,
      customSigMult: 3.2
    },
    {
      id: "caracal",
      name: "\u0E41\u0E21\u0E27\u0E1B\u0E48\u0E32\u0E04\u0E32\u0E23\u0E32\u0E04\u0E31\u0E25",
      rarity: "A",
      element: "light",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E17\u0E30\u0E22\u0E32\u0E19\u0E15\u0E30\u0E1B\u0E1A\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
      signatureEffect: {
        type: "crit_burst",
        target: "target",
        criBonus: 30
      },
      ability: {
        id: "tufted_ear_spring",
        name: "\u0E2A\u0E1B\u0E23\u0E34\u0E07\u0E1E\u0E39\u0E48\u0E2B\u0E39\u0E17\u0E30\u0E22\u0E32\u0E19\u0E40\u0E27\u0E2B\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 CRI% +12% \u0E41\u0E25\u0E30 FLEE +8 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +15 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "light_m1",
        "light_m2",
        "trick_m1",
        "martial_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.6,
      customSigMult: 3
    },
    {
      id: "gyrfalcon",
      name: "\u0E40\u0E2B\u0E22\u0E35\u0E48\u0E22\u0E27\u0E02\u0E32\u0E27\u0E44\u0E08\u0E23\u0E4C\u0E1F\u0E2D\u0E25\u0E04\u0E2D\u0E19",
      rarity: "S",
      element: "light",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E28\u0E23\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E14\u0E34\u0E48\u0E07\u0E1E\u0E34\u0E06\u0E32\u0E15\u0E44\u0E08\u0E23\u0E4C\u0E1F\u0E2D\u0E25\u0E04\u0E2D\u0E19",
      signatureEffect: {
        type: "backline_pierce",
        target: "target",
        defPen: 0.35
      },
      ability: {
        id: "solar_apex_dive",
        name: "\u0E14\u0E34\u0E48\u0E07\u0E40\u0E27\u0E2B\u0E32\u0E1C\u0E48\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +12% \u0E41\u0E25\u0E30 CRI DMG +25% \xB7 \u0E43\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E41\u0E23\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% \u0E41\u0E25\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 25%"
      },
      defaultSkills: [
        "light_l",
        "light_aoe",
        "trick_l",
        "martial_l"
      ],
      preferredRow: "mid",
      backlineChance: 0.65,
      customSigMult: 3.3
    },
    {
      id: "frilled_lizard",
      name: "\u0E01\u0E34\u0E49\u0E07\u0E01\u0E48\u0E32\u0E41\u0E1C\u0E07\u0E04\u0E2D",
      rarity: "B",
      element: "light",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E41\u0E1C\u0E48\u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E2A\u0E30\u0E01\u0E14\u0E02\u0E27\u0E31\u0E0D",
      signatureEffect: {
        type: "blind",
        duration: 2
      },
      ability: {
        id: "frilled_sun_flare",
        name: "\u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E41\u0E2A\u0E07\u0E27\u0E32\u0E1A\u0E15\u0E37\u0E48\u0E19\u0E15\u0E23\u0E30\u0E2B\u0E19\u0E01",
        description: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E15\u0E4C\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E25\u0E14 HIT \u0E28\u0E31\u0E15\u0E23\u0E39 15 \u0E41\u0E15\u0E49\u0E21 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "light_s",
        "light_m1",
        "trick_s",
        "catalyst_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.35,
      customSigMult: 2.2
    },
    {
      id: "alpaca",
      name: "\u0E2D\u0E31\u0E25\u0E1B\u0E32\u0E01\u0E32",
      rarity: "A",
      element: "light",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1B\u0E38\u0E22\u0E02\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E42\u0E2D\u0E1A\u0E2D\u0E38\u0E49\u0E21",
      signatureEffect: {
        type: "team_heal_shield_cleanse",
        target: "all_allies",
        healPercent: 0.18,
        shield: 0.12,
        cleanse: 1,
        duration: 2
      },
      ability: {
        id: "gentle_solar_fleece",
        name: "\u0E1B\u0E38\u0E22\u0E02\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E0A\u0E19\u0E34\u0E14\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 10% Max HP"
      },
      defaultSkills: [
        "light_m2",
        "light_l",
        "medical_m1",
        "trick_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.2,
      customSigMult: 0
    },
    {
      id: "white_elephant",
      name: "\u0E0A\u0E49\u0E32\u0E07\u0E40\u0E1C\u0E37\u0E2D\u0E01",
      rarity: "S",
      element: "light",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E1A\u0E32\u0E23\u0E21\u0E35\u0E04\u0E0A\u0E2A\u0E32\u0E23\u0E40\u0E1C\u0E37\u0E2D\u0E01\u0E41\u0E2A\u0E07\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E04\u0E38\u0E49\u0E21\u0E40\u0E01\u0E25\u0E49\u0E32",
      signatureEffect: {
        type: "team_heal_cleanse_all_buff",
        target: "all_allies",
        healPercent: 0.26,
        cleanseAll: true,
        buffDef: 0.25,
        duration: 2
      },
      ability: {
        id: "sacred_white_grace",
        name: "\u0E1A\u0E32\u0E23\u0E21\u0E35\u0E04\u0E0A\u0E2A\u0E32\u0E23\u0E40\u0E1C\u0E37\u0E2D\u0E01\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +5% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E0A\u0E19\u0E34\u0E14 \xB7 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E15\u0E4C\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 20% Max HP"
      },
      defaultSkills: [
        "light_l",
        "light_aoe",
        "medical_l",
        "secret_l"
      ],
      preferredRow: "back",
      backlineChance: 0.2,
      customSigMult: 0
    },
    {
      id: "electric_ray",
      name: "\u0E1B\u0E25\u0E32\u0E01\u0E23\u0E30\u0E40\u0E1A\u0E19\u0E44\u0E1F\u0E1F\u0E49\u0E32",
      rarity: "A",
      element: "lightning",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 43,
      sta: 79,
      signatureName: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E19\u0E32\u0E21\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01\u0E21\u0E23\u0E13\u0E30",
      signatureEffect: {
        type: "shield",
        value: 0.2,
        duration: 2
      },
      ability: {
        id: "torpedo_discharge",
        name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E19\u0E32\u0E21\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08 15% \u0E41\u0E25\u0E30\u0E25\u0E14 SPD \u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "lightning_m1",
        "lightning_m2",
        "martial_m1",
        "medical_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.1,
      customSigMult: 2.4
    },
    {
      id: "african_buffalo",
      name: "\u0E04\u0E27\u0E32\u0E22\u0E1B\u0E48\u0E32\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32",
      rarity: "S",
      element: "lightning",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 46,
      sta: 84,
      signatureName: "\u0E21\u0E2B\u0E32\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E02\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1E\u0E38\u0E48\u0E07\u0E0A\u0E19",
      signatureEffect: {
        type: "team_shield",
        target: "all_allies",
        shield: 0.22,
        duration: 2
      },
      ability: {
        id: "cape_boss_charge",
        name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E02\u0E32\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E1F\u0E32\u0E14",
        description: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E44\u0E1F\u0E15\u0E4C\u0E14\u0E49\u0E27\u0E22\u0E40\u0E01\u0E23\u0E32\u0E30 25% Max HP \xB7 \u0E40\u0E1E\u0E34\u0E48\u0E21 Block Rate +15% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E02\u0E27\u0E34\u0E14\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32 40% ATK"
      },
      defaultSkills: [
        "lightning_l",
        "lightning_aoe",
        "martial_l",
        "medical_l"
      ],
      preferredRow: "front",
      backlineChance: 0.1,
      customSigMult: 2.6
    },
    {
      id: "pistol_shrimp",
      name: "\u0E01\u0E38\u0E49\u0E07\u0E14\u0E35\u0E14\u0E02\u0E31\u0E19",
      rarity: "B",
      element: "lightning",
      archetype: "ATK",
      role: "Striker",
      str: 69,
      agi: 45,
      sta: 36,
      signatureName: "\u0E01\u0E49\u0E32\u0E21\u0E1E\u0E25\u0E32\u0E2A\u0E21\u0E48\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E2A\u0E38\u0E0D\u0E0D\u0E32\u0E01\u0E32\u0E28",
      signatureEffect: {
        type: "vulnerable",
        duration: 2
      },
      ability: {
        id: "cavitation_bubble_burst",
        name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E1E\u0E25\u0E32\u0E2A\u0E21\u0E48\u0E32\u0E2A\u0E38\u0E0D\u0E0D\u0E32\u0E01\u0E32\u0E28",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 Armor Break +18 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 SP \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 15 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "lightning_s",
        "lightning_m1",
        "martial_s",
        "catalyst_s"
      ],
      preferredRow: "front",
      backlineChance: 0.2,
      customSigMult: 2.8
    },
    {
      id: "tiger_beetle",
      name: "\u0E14\u0E49\u0E27\u0E07\u0E40\u0E2A\u0E37\u0E2D",
      rarity: "B",
      element: "lightning",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E01\u0E23\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E2A\u0E31\u0E1A\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "bleed",
        duration: 2
      },
      ability: {
        id: "supersonic_dash_mandibles",
        name: "\u0E22\u0E48\u0E32\u0E07\u0E01\u0E49\u0E32\u0E27\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E1A\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E07",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 SPD +8 \u0E41\u0E25\u0E30 FLEE +6 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E21\u0E35 SPD \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E15\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +18%"
      },
      defaultSkills: [
        "lightning_s",
        "lightning_m1",
        "trick_s",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.6,
      customSigMult: 2.8
    },
    {
      id: "black_mamba",
      name: "\u0E07\u0E39\u0E41\u0E1A\u0E25\u0E47\u0E04\u0E41\u0E21\u0E21\u0E1A\u0E32",
      rarity: "A",
      element: "lightning",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E14\u0E33\u0E09\u0E01\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E",
      signatureEffect: {
        type: "crit_burst",
        target: "target",
        criBonus: 30
      },
      ability: {
        id: "lightning_viper_strike",
        name: "\u0E09\u0E01\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 HIT +15 \u0E41\u0E25\u0E30 CRI% +10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 12%"
      },
      defaultSkills: [
        "lightning_m1",
        "lightning_m2",
        "trick_m1",
        "martial_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.6,
      customSigMult: 3
    },
    {
      id: "electric_catfish",
      name: "\u0E1B\u0E25\u0E32\u0E14\u0E38\u0E01\u0E44\u0E1F\u0E1F\u0E49\u0E32",
      rarity: "B",
      element: "lightning",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 350 \u0E42\u0E27\u0E25\u0E15\u0E4C\u0E0A\u0E47\u0E2D\u0E15\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01",
      signatureEffect: {
        type: "slow",
        duration: 2
      },
      ability: {
        id: "galvanic_shock_pulse",
        name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -6 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "lightning_s",
        "lightning_m1",
        "trick_s",
        "catalyst_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.35,
      customSigMult: 2.2
    },
    {
      id: "zebra",
      name: "\u0E21\u0E49\u0E32\u0E25\u0E32\u0E22",
      rarity: "A",
      element: "lightning",
      archetype: "BAL",
      role: "Controller",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E41\u0E16\u0E1A\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E25\u0E27\u0E07\u0E15\u0E32\u0E42\u0E21\u0E0A\u0E31\u0E19\u0E41\u0E14\u0E0B\u0E40\u0E0B\u0E34\u0E25",
      signatureEffect: {
        type: "blind",
        duration: 2
      },
      ability: {
        id: "motion_dazzle_stripes",
        name: "\u0E25\u0E32\u0E22\u0E1E\u0E23\u0E32\u0E07\u0E41\u0E16\u0E1A\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E25\u0E27\u0E07\u0E15\u0E32",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "lightning_m1",
        "lightning_l",
        "trick_m1",
        "secret_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.35,
      customSigMult: 2.4
    },
    {
      id: "electric_eel",
      name: "\u0E1B\u0E25\u0E32\u0E44\u0E2B\u0E25\u0E44\u0E1F\u0E1F\u0E49\u0E32",
      rarity: "S",
      element: "lightning",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E17\u0E31\u0E13\u0E11\u0E4C\u0E2D\u0E31\u0E2A\u0E19\u0E35 860 \u0E42\u0E27\u0E25\u0E15\u0E4C\u0E16\u0E25\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E20\u0E39\u0E21\u0E34",
      signatureEffect: {
        type: "team_stun_cleanse_buffs",
        target: "all_enemies",
        stun: 1,
        duration: 1
      },
      ability: {
        id: "high_voltage_organ",
        name: "\u0E2D\u0E27\u0E31\u0E22\u0E27\u0E30\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E2A\u0E39\u0E07 860V",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E0A\u0E47\u0E2D\u0E15 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -10 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "lightning_l",
        "lightning_aoe",
        "trick_l",
        "secret_l"
      ],
      preferredRow: "mid",
      backlineChance: 0.4,
      customSigMult: 2.6
    },
    {
      id: "star_nosed_mole",
      name: "\u0E15\u0E38\u0E48\u0E19\u0E08\u0E21\u0E39\u0E01\u0E14\u0E32\u0E27",
      rarity: "B",
      element: "lightning",
      archetype: "BAL",
      role: "Supporter",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E41\u0E2A\u0E07\u0E19\u0E33\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "team_heal_sp",
        target: "all_allies",
        healPercent: 0.15,
        sp: 15
      },
      ability: {
        id: "eimer_organ_reflex",
        name: "\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E40\u0E2D\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E44\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +8 \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07 +6 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "lightning_s",
        "lightning_m2",
        "medical_s",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.25,
      customSigMult: 0
    },
    {
      id: "mouflon",
      name: "\u0E41\u0E01\u0E30\u0E40\u0E02\u0E32\u0E21\u0E49\u0E27\u0E19",
      rarity: "A",
      element: "lightning",
      archetype: "BAL",
      role: "Supporter",
      str: 58,
      agi: 51,
      sta: 51,
      signatureName: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15\u0E02\u0E19\u0E41\u0E01\u0E30\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22",
      signatureEffect: {
        type: "team_heal_shield_spd",
        target: "all_allies",
        healPercent: 0.18,
        shield: 0.12,
        spd: 0.15,
        duration: 2
      },
      ability: {
        id: "spiral_horn_resonance",
        name: "\u0E40\u0E02\u0E32\u0E21\u0E49\u0E27\u0E19\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E25\u0E37\u0E48\u0E19\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E0A\u0E19\u0E34\u0E14\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F SPD +15% \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "lightning_m2",
        "lightning_l",
        "medical_m1",
        "trick_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.25,
      customSigMult: 0
    },
    {
      id: "okapi",
      name: "\u0E15\u0E31\u0E27\u0E42\u0E2D\u0E04\u0E32\u0E1B\u0E34",
      rarity: "S",
      element: "lightning",
      archetype: "BAL",
      role: "Supporter",
      str: 62,
      agi: 55,
      sta: 55,
      signatureName: "\u0E21\u0E2B\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E49\u0E19\u0E0A\u0E35\u0E1E\u0E08\u0E23\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E25\u0E36\u0E01\u0E25\u0E31\u0E1A",
      signatureEffect: {
        type: "team_heal_cleanse_buff_atk_spd",
        target: "all_allies",
        healPercent: 0.26,
        cleanseAll: true,
        buffAtk: 0.2,
        buffSpd: 0.2,
        duration: 2
      },
      ability: {
        id: "galvanic_life_pulse",
        name: "\u0E0A\u0E35\u0E1E\u0E08\u0E23\u0E01\u0E31\u0E25\u0E27\u0E32\u0E19\u0E34\u0E01\u0E01\u0E23\u0E30\u0E15\u0E38\u0E49\u0E19\u0E2B\u0E31\u0E27\u0E43\u0E08",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E0A\u0E19\u0E34\u0E14\u0E43\u0E2B\u0E49\u0E17\u0E31\u0E49\u0E07\u0E17\u0E35\u0E21 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +20% \u0E41\u0E25\u0E30 SPD +20% \u0E41\u0E01\u0E48\u0E17\u0E38\u0E01\u0E04\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "lightning_l",
        "lightning_aoe",
        "medical_l",
        "secret_l"
      ],
      preferredRow: "back",
      backlineChance: 0.2,
      customSigMult: 0
    },
    {
      id: "platypus",
      name: "\u0E15\u0E38\u0E48\u0E19\u0E1B\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E14",
      rarity: "B",
      element: "psychic",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2B\u0E19\u0E35\u0E48\u0E22\u0E27\u0E19\u0E33\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E08\u0E34\u0E15",
      signatureEffect: {
        type: "shield",
        value: 0.15,
        duration: 2
      },
      ability: {
        id: "electro_sense",
        name: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 (HIT) \u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 10 \u0E41\u0E15\u0E49\u0E21 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "psychic_s",
        "psychic_m2",
        "medical_m1",
        "medical_s"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "lemur",
      name: "\u0E25\u0E35\u0E40\u0E21\u0E2D\u0E23\u0E4C",
      rarity: "B",
      element: "psychic",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E01\u0E30\u0E42\u0E2B\u0E25\u0E01",
      signatureEffect: {
        type: "confusion",
        duration: 2,
        chance: 0.35
      },
      ability: {
        id: "mind_focus",
        name: "\u0E40\u0E1E\u0E48\u0E07\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1E\u0E25\u0E31\u0E07\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 (CRI DMG) +20% \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34"
      },
      defaultSkills: [
        "psychic_m1",
        "psychic_m2",
        "martial_m2",
        "martial_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.3
    },
    {
      id: "sphynx_cat",
      name: "\u0E41\u0E21\u0E27\u0E2A\u0E1F\u0E34\u0E07\u0E0B\u0E4C",
      rarity: "B",
      element: "psychic",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 46,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E08\u0E34\u0E15\u0E25\u0E27\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17",
      signatureEffect: {
        type: "debuff_def",
        value: 0.2,
        duration: 2
      },
      ability: {
        id: "psychic_shift",
        name: "\u0E0D\u0E32\u0E13\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 50% \u0E08\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 EVA (\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01) +15%"
      },
      defaultSkills: [
        "psychic_s",
        "psychic_m1",
        "martial_m1",
        "trick_s"
      ],
      preferredRow: "mid",
      backlineChance: 0.5
    },
    {
      id: "basilisk",
      name: "\u0E01\u0E34\u0E49\u0E07\u0E01\u0E48\u0E32\u0E1A\u0E32\u0E0B\u0E34\u0E25\u0E34\u0E2A\u0E01\u0E4C",
      rarity: "B",
      element: "psychic",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E40\u0E19\u0E15\u0E23\u0E2A\u0E30\u0E01\u0E14\u0E1A\u0E32\u0E0B\u0E34\u0E25\u0E34\u0E2A\u0E01\u0E4C",
      signatureEffect: {
        type: "confusion",
        duration: 2,
        chance: 0.4
      },
      ability: {
        id: "brain_interference",
        name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E23\u0E1A\u0E01\u0E27\u0E19\u0E2A\u0E21\u0E2D\u0E07",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E2A\u0E38\u0E48\u0E21\u0E25\u0E14\u0E40\u0E01\u0E08\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E15\u0E31\u0E27\u0E25\u0E07 -5 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "psychic_s",
        "psychic_m1",
        "trick_m1",
        "secret_s"
      ],
      preferredRow: "back",
      backlineChance: 0.7
    },
    {
      id: "hamster",
      name: "\u0E41\u0E2E\u0E21\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C",
      rarity: "B",
      element: "psychic",
      archetype: "BAL",
      role: "Supporter",
      str: 40,
      agi: 52,
      sta: 58,
      signatureName: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E08\u0E34\u0E15\u0E40\u0E01\u0E37\u0E49\u0E2D\u0E2B\u0E19\u0E38\u0E19\u0E14\u0E27\u0E07\u0E43\u0E08",
      signatureEffect: {
        type: "team_heal_sp",
        target: "all_allies",
        heal: 0.15,
        sp: 15,
        duration: 2
      },
      ability: {
        id: "psychic_bond",
        name: "\u0E2A\u0E32\u0E22\u0E43\u0E22\u0E08\u0E34\u0E15\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19",
        description: "\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E2A\u0E01\u0E34\u0E25 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21\u0E17\u0E38\u0E01\u0E04\u0E19\u0E08\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A SP \u0E04\u0E37\u0E19 3 \u0E41\u0E15\u0E49\u0E21"
      },
      defaultSkills: [
        "psychic_s",
        "psychic_m2",
        "medical_m1",
        "catalyst_s"
      ],
      preferredRow: "back",
      backlineChance: 0.85,
      customSigMult: 0
    },
    {
      id: "giant_tortoise",
      name: "\u0E40\u0E15\u0E48\u0E32\u0E2D\u0E31\u0E25\u0E14\u0E32\u0E1A\u0E23\u0E32",
      rarity: "A",
      element: "psychic",
      archetype: "DEF",
      role: "Tank",
      str: 39,
      agi: 42,
      sta: 79,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19",
      signatureEffect: {
        type: "buff_def",
        value: 0.3,
        duration: 2
      },
      ability: {
        id: "psionic_barrier",
        name: "\u0E1A\u0E32\u0E40\u0E23\u0E35\u0E22\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2A\u0E21\u0E2D\u0E07",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49 \u0E21\u0E2D\u0E1A\u0E21\u0E48\u0E32\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34 1 \u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E41\u0E19\u0E27\u0E2B\u0E19\u0E49\u0E32"
      },
      defaultSkills: [
        "psychic_m2",
        "psychic_s",
        "medical_m1",
        "medical_l"
      ],
      preferredRow: "front",
      backlineChance: 0
    },
    {
      id: "serow",
      name: "\u0E40\u0E25\u0E35\u0E22\u0E07\u0E1C\u0E32",
      rarity: "A",
      element: "psychic",
      archetype: "ATK",
      role: "Striker",
      str: 74,
      agi: 48,
      sta: 38,
      signatureName: "\u0E40\u0E02\u0E32\u0E08\u0E34\u0E15\u0E2D\u0E31\u0E14\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01",
      signatureEffect: {
        type: "confusion",
        duration: 2,
        chance: 0.45
      },
      ability: {
        id: "cliff_resolve",
        name: "\u0E08\u0E34\u0E15\u0E15\u0E31\u0E49\u0E07\u0E21\u0E31\u0E48\u0E19\u0E22\u0E2D\u0E14\u0E1C\u0E32",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 40% \u0E1E\u0E25\u0E31\u0E07\u0E42\u0E08\u0E21\u0E15\u0E35 (ATK) \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19 +20%"
      },
      defaultSkills: [
        "psychic_m2",
        "psychic_m1",
        "martial_l",
        "martial_m2"
      ],
      preferredRow: "front",
      backlineChance: 0.1
    },
    {
      id: "slow_loris",
      name: "\u0E25\u0E34\u0E07\u0E25\u0E21",
      rarity: "A",
      element: "psychic",
      archetype: "SPD",
      role: "Assassin",
      str: 51,
      agi: 60,
      sta: 49,
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1E\u0E34\u0E29\u0E2A\u0E30\u0E01\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17",
      signatureEffect: {
        type: "confusion",
        duration: 2,
        chance: 0.35
      },
      ability: {
        id: "mesmerizing_gaze",
        name: "\u0E20\u0E32\u0E1E\u0E25\u0E27\u0E07\u0E15\u0E32\u0E15\u0E32\u0E2B\u0E27\u0E32\u0E19",
        description: "\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (Blind) 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"
      },
      defaultSkills: [
        "psychic_m1",
        "psychic_s",
        "trick_m1",
        "secret_l"
      ],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "crane",
      name: "\u0E19\u0E01\u0E01\u0E23\u0E30\u0E40\u0E23\u0E35\u0E22\u0E19",
      rarity: "A",
      element: "psychic",
      archetype: "BAL",
      role: "Supporter",
      str: 42,
      agi: 56,
      sta: 62,
      signatureName: "\u0E23\u0E30\u0E1A\u0E33\u0E08\u0E34\u0E15\u0E0A\u0E33\u0E23\u0E30\u0E21\u0E25\u0E17\u0E34\u0E19",
      signatureEffect: {
        type: "team_heal_cleanse",
        target: "all_allies",
        teamHeal: 0.2,
        cleanse: 1,
        duration: 2
      },
      ability: {
        id: "zen_mind",
        name: "\u0E08\u0E34\u0E15\u0E2A\u0E07\u0E1A\u0E19\u0E34\u0E48\u0E07",
        description: "\u0E25\u0E14\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E41\u0E16\u0E27\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E08\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34\u0E25\u0E07 25%"
      },
      defaultSkills: [
        "psychic_m1",
        "psychic_m2",
        "medical_l",
        "catalyst_m1"
      ],
      preferredRow: "back",
      backlineChance: 0.8,
      customSigMult: 0
    },
    {
      id: "mammoth",
      name: "\u0E41\u0E21\u0E21\u0E21\u0E2D\u0E18",
      rarity: "S",
      element: "psychic",
      archetype: "DEF",
      role: "Tank",
      str: 41,
      agi: 44,
      sta: 86,
      signatureName: "\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E07\u0E32\u0E0A\u0E49\u0E32\u0E07\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19",
      signatureEffect: {
        type: "team_buff_def",
        target: "all_allies",
        def: 0.15,
        duration: 2
      },
      ability: {
        id: "ancient_bulwark",
        name: "\u0E01\u0E32\u0E22\u0E32\u0E08\u0E34\u0E15\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C",
        description: "\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14\u0E25\u0E07 12%"
      },
      defaultSkills: [
        "psychic_l",
        "psychic_m2",
        "medical_l",
        "martial_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 1.6
    },
    {
      id: "harpy_eagle",
      name: "\u0E2D\u0E34\u0E19\u0E17\u0E23\u0E35\u0E2E\u0E32\u0E23\u0E4C\u0E1B\u0E35",
      rarity: "S",
      element: "psychic",
      archetype: "ATK",
      role: "Striker",
      str: 79,
      agi: 52,
      sta: 40,
      signatureName: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E08\u0E34\u0E15\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17",
      signatureEffect: {
        type: "confusion",
        duration: 2,
        chance: 0.5
      },
      ability: {
        id: "apex_telekinesis",
        name: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E40\u0E1E\u0E0A\u0E0C\u0E06\u0E32\u0E15",
        description: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E01\u0E34\u0E25\u0E18\u0E32\u0E15\u0E38\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +15%"
      },
      defaultSkills: [
        "psychic_l",
        "psychic_m1",
        "martial_l",
        "trick_m1"
      ],
      preferredRow: "front",
      backlineChance: 0.1,
      customSigMult: 2.2
    },
    {
      id: "anaconda",
      name: "\u0E07\u0E39\u0E2D\u0E19\u0E32\u0E04\u0E2D\u0E19\u0E14\u0E32",
      rarity: "S",
      element: "psychic",
      archetype: "SPD",
      role: "Assassin",
      str: 54,
      agi: 65,
      sta: 52,
      signatureName: "\u0E23\u0E31\u0E14\u0E23\u0E36\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E08\u0E34\u0E15\u0E01\u0E25\u0E37\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "debuff_atk",
        value: 0.2,
        duration: 2
      },
      ability: {
        id: "mind_stalker",
        name: "\u0E2A\u0E32\u0E22\u0E15\u0E32\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E44\u0E23\u0E49\u0E40\u0E07\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 CRI% +15% \u0E41\u0E25\u0E30\u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 35% \u0E08\u0E30\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +25%"
      },
      defaultSkills: [
        "psychic_l",
        "psychic_m2",
        "secret_l",
        "martial_l"
      ],
      preferredRow: "mid",
      backlineChance: 0.4,
      customSigMult: 2
    },
    {
      id: "blue_whale",
      name: "\u0E27\u0E32\u0E2C\u0E2A\u0E35\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19",
      rarity: "S",
      element: "psychic",
      archetype: "BAL",
      role: "Supporter",
      str: 44,
      agi: 50,
      sta: 77,
      signatureName: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E08\u0E34\u0E15\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23",
      signatureEffect: {
        type: "team_heal_sp",
        target: "all_allies",
        heal: 0.25,
        sp: 20,
        duration: 2
      },
      ability: {
        id: "resonance_echo",
        name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E08\u0E34\u0E15\u0E01\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E07\u0E27\u0E32\u0E19",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 10% Max HP \u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E21\u0E35 HP \u0E15\u0E48\u0E33\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"
      },
      defaultSkills: [
        "psychic_aoe",
        "psychic_l",
        "medical_l",
        "catalyst_l"
      ],
      preferredRow: "back",
      backlineChance: 0.9,
      customSigMult: 0
    },
    {
      id: "qilin",
      name: "\u0E01\u0E34\u0E40\u0E25\u0E19",
      rarity: "SS",
      element: "psychic",
      archetype: "QILIN",
      role: "Controller",
      str: 68,
      agi: 60,
      sta: 54,
      signatureName: "\u0E21\u0E2B\u0E32\u0E0D\u0E32\u0E13\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E01\u0E34\u0E40\u0E25\u0E19\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32",
      signatureEffect: {
        type: "team_confusion_cleanse",
        target: "all_enemies",
        confusion: 1,
        duration: 2
      },
      ability: {
        id: "omniscient_gaze",
        name: "\u0E40\u0E19\u0E15\u0E23\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E2B\u0E22\u0E31\u0E48\u0E07\u0E23\u0E39\u0E49\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34 100% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E15\u0E31\u0E27 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "psychic_aoe",
        "psychic_l",
        "psychic_m2",
        "trick_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.5,
      customSigMult: 2.2
    },
    {
      id: "giant_dragonfly",
      name: "\u0E41\u0E21\u0E25\u0E07\u0E1B\u0E2D\u0E22\u0E31\u0E01\u0E29\u0E4C",
      rarity: "A",
      element: "wind",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 56,
      sta: 50,
      signatureName: "\u0E27\u0E32\u0E15\u0E20\u0E31\u0E22\u0E1B\u0E35\u0E01\u0E01\u0E23\u0E30\u0E1E\u0E37\u0E2D\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19",
      signatureEffect: {
        type: "stun",
        duration: 1,
        chance: 0.65
      },
      ability: {
        id: "aerobatic_hover",
        name: "\u0E01\u0E32\u0E23\u0E1A\u0E34\u0E19\u0E1C\u0E32\u0E14\u0E41\u0E1C\u0E25\u0E07 360 \u0E2D\u0E07\u0E28\u0E32",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21 FLEE +15 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E25\u0E21\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -10 \u0E41\u0E15\u0E49\u0E21 \u0E41\u0E25\u0E30\u0E25\u0E14 HIT \u0E28\u0E31\u0E15\u0E23\u0E39 -15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "wind_m1",
        "wind_m2",
        "trick_m1",
        "secret_m2"
      ],
      preferredRow: "mid",
      backlineChance: 0.7
    },
    {
      id: "white_lion",
      name: "\u0E2A\u0E34\u0E07\u0E42\u0E15\u0E02\u0E32\u0E27",
      rarity: "S",
      element: "light",
      archetype: "BAL",
      role: "Controller",
      str: 62,
      agi: 55,
      sta: 54,
      signatureName: "\u0E04\u0E33\u0E23\u0E32\u0E21\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32",
      signatureEffect: {
        type: "team_debuff_atk_blind",
        target: "all_enemies",
        atk: 0.2,
        blind: 2,
        duration: 2
      },
      ability: {
        id: "solar_majesty_aura",
        name: "\u0E23\u0E31\u0E28\u0E21\u0E35\u0E23\u0E32\u0E0A\u0E31\u0E19\u0E22\u0E4C\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E23\u0E31\u0E07\u0E2A\u0E35\u0E41\u0E2A\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E02\u0E27\u0E31\u0E0D \u0E25\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (Blind) 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"
      },
      defaultSkills: [
        "light_l",
        "light_m1",
        "catalyst_m1",
        "trick_m1"
      ],
      preferredRow: "mid",
      backlineChance: 0.3,
      customSigMult: 1.8
    }
  ]
};

// src/data/skills.json
var skills_default = {
  statusRules: {
    burn: {
      hpLossPctPerTurn: 0.06,
      duration: 2
    },
    poison: {
      hpLossPctPerTurn: 0.05,
      duration: 3,
      maxStacks: 2
    },
    slow: {
      spdRedPct: 0.2,
      fleeRed: 10,
      duration: 2
    },
    blind: {
      hitRed: 20,
      criRed: 10,
      duration: 2
    },
    stun: {
      skipTurn: true,
      duration: 1,
      isHardCC: true
    },
    freeze: {
      skipTurn: true,
      duration: 1,
      isHardCC: true
    },
    root: {
      zeroFlee: true,
      disableSwap: true,
      duration: 2,
      isHardCC: true
    },
    confusion: {
      selfHitChance: 0.6,
      selfDamageHpPct: 0.12,
      duration: 2
    },
    bleed: {
      actionDamageHpPct: 0.06,
      onHitDamageHpPct: 0.04,
      duration: 2
    },
    taunt: {
      dmgReductionPct: 0.1,
      duration: 2
    },
    sleep: {
      skipTurn: true,
      duration: 2,
      wakeOnHit: true,
      wakeCritBonus: 1,
      wakeDmgMult: 1.3,
      isHardCC: true
    },
    silence: {
      disableSkills: true,
      disableSpRegen: true,
      duration: 2
    },
    vulnerable: {
      extraDmgPct: 0.25,
      disableShield: true,
      duration: 2
    },
    ccResistancePerStack: 0.4,
    ccResistanceDuration: 3,
    spCosts: {
      S: 20,
      M: 35,
      L: 55
    }
  },
  skills: [
    {
      id: "fire_s",
      name: "\u0E25\u0E39\u0E01\u0E44\u0E1F",
      element: "fire",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      effects: [
        {
          type: "burn",
          chance: 0.35,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "fire_m1",
      name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07",
      element: "fire",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "burn",
          chance: 1,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "fire_m2",
      name: "\u0E40\u0E1B\u0E25\u0E27\u0E1B\u0E25\u0E38\u0E01\u0E43\u0E08",
      element: "fire",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.1,
      effects: [
        {
          type: "buff_atk",
          target: "self",
          value: 0.25,
          duration: 2
        },
        {
          type: "buff_cri",
          target: "self",
          value: 10,
          duration: 2
        }
      ],
      description: "\u0E1A\u0E31\u0E1F\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 ATK +25% \u0E41\u0E25\u0E30 CRI% +10% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E15\u0E35 \xD71.1"
    },
    {
      id: "fire_l",
      name: "\u0E20\u0E39\u0E40\u0E02\u0E32\u0E44\u0E1F\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14",
      element: "fire",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      bonusIfTargetHas: {
        status: "burn",
        extraMult: 0.2
      },
      effects: [
        {
          type: "burn",
          chance: 1,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 (\u0E16\u0E49\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E44\u0E1F\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E14\u0E32\u0E40\u0E21\u0E08\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +20%)"
    },
    {
      id: "water_s",
      name: "\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19\u0E19\u0E49\u0E33",
      element: "water",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      effects: [
        {
          type: "debuff_atk",
          target: "enemy",
          value: 0.1,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 10% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "water_m1",
      name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E0B\u0E31\u0E14\u0E2A\u0E32\u0E14",
      element: "water",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "debuff_spd",
          target: "enemy",
          value: 0.15,
          duration: 2
        },
        {
          type: "debuff_atk",
          target: "enemy",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E25\u0E14 SPD 15% \u0E41\u0E25\u0E30\u0E25\u0E14 ATK 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "water_m2",
      name: "\u0E21\u0E48\u0E32\u0E19\u0E19\u0E49\u0E33\u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07",
      element: "water",
      tier: "M",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "cleanse",
          target: "self",
          count: 1
        },
        {
          type: "heal_pct",
          target: "self",
          value: 0.18
        },
        {
          type: "sp_change",
          target: "self",
          value: 15
        }
      ],
      description: "\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 1 \u0E2D\u0E22\u0E48\u0E32\u0E07 + \u0E1F\u0E37\u0E49\u0E19 HP 18% \u0E02\u0E2D\u0E07 Max HP \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 SP +15"
    },
    {
      id: "water_l",
      name: "\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34",
      element: "water",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      effects: [
        {
          type: "debuff_spd",
          target: "enemy",
          value: 0.25,
          duration: 2
        },
        {
          type: "heal_pct",
          target: "self",
          value: 0.1
        },
        {
          type: "sp_change",
          target: "self",
          value: 15
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E1F\u0E37\u0E49\u0E19 HP \u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 10% \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 SP +15"
    },
    {
      id: "wind_s",
      name: "\u0E43\u0E1A\u0E21\u0E35\u0E14\u0E25\u0E21",
      element: "wind",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      bonusCri: 15,
      effects: [],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E04\u0E23\u0E34\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E35\u0E49 +15%"
    },
    {
      id: "wind_m1",
      name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E32\u0E22\u0E25\u0E21",
      element: "wind",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      ignoreFleePct: 0.5,
      effects: [
        {
          type: "debuff_def",
          target: "enemy",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E44\u0E21\u0E48\u0E04\u0E34\u0E14 FLEE \u0E28\u0E31\u0E15\u0E23\u0E39 50% + \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "wind_m2",
      name: "\u0E25\u0E21\u0E2B\u0E19\u0E38\u0E19\u0E2B\u0E25\u0E31\u0E07",
      element: "wind",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.1,
      effects: [
        {
          type: "buff_spd",
          target: "self",
          value: 0.25,
          duration: 2
        },
        {
          type: "buff_flee",
          target: "self",
          value: 15,
          duration: 2
        }
      ],
      description: "\u0E1A\u0E31\u0E1F\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 SPD +25% \u0E41\u0E25\u0E30 FLEE +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E15\u0E35 \xD71.1"
    },
    {
      id: "wind_l",
      name: "\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E21\u0E38\u0E19\u0E22\u0E31\u0E01\u0E29\u0E4C",
      element: "wind",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      effects: [
        {
          type: "buff_spd",
          target: "self",
          value: 0.2,
          duration: 2
        },
        {
          type: "buff_cri",
          target: "self",
          value: 15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E1A\u0E31\u0E1F\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 SPD +20% \u0E41\u0E25\u0E30 CRI% +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "earth_s",
      name: "\u0E01\u0E49\u0E2D\u0E19\u0E2B\u0E34\u0E19\u0E16\u0E25\u0E48\u0E21",
      element: "earth",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      effects: [
        {
          type: "slow",
          chance: 0.5,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (SPD \u221220%, 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "earth_m1",
      name: "\u0E18\u0E23\u0E13\u0E35\u0E2A\u0E39\u0E1A",
      element: "earth",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "slow",
          chance: 1,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19 (SPD \u221220%, FLEE \u221210, 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "earth_m2",
      name: "\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E14\u0E34\u0E19",
      element: "earth",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.1,
      effects: [
        {
          type: "buff_def",
          target: "self",
          value: 0.3,
          duration: 2
        },
        {
          type: "buff_block",
          target: "self",
          value: 15,
          duration: 2
        },
        {
          type: "taunt",
          target: "enemy",
          chance: 0.7,
          duration: 2
        }
      ],
      description: "\u0E1A\u0E31\u0E1F DEF +30%, Block +15% \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 \u{1F4A2} (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E15\u0E35 \xD71.1"
    },
    {
      id: "earth_l",
      name: "\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27",
      element: "earth",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      effects: [
        {
          type: "slow",
          chance: 1,
          duration: 2
        },
        {
          type: "stun",
          chance: 0.35,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"
    },
    {
      id: "lightning_s",
      name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E44\u0E1F\u0E1F\u0E49\u0E32",
      element: "lightning",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      bonusAb: 15,
      effects: [],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 +15% \u0E43\u0E19\u0E17\u0E48\u0E32\u0E19\u0E35\u0E49"
    },
    {
      id: "lightning_m1",
      name: "\u0E42\u0E0B\u0E48\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32",
      element: "lightning",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "stun",
          chance: 0.35,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"
    },
    {
      id: "lightning_m2",
      name: "\u0E2A\u0E19\u0E32\u0E21\u0E0A\u0E32\u0E23\u0E4C\u0E08\u0E1E\u0E25\u0E31\u0E07",
      element: "lightning",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.1,
      effects: [
        {
          type: "buff_atk",
          target: "self",
          value: 0.2,
          duration: 2
        },
        {
          type: "buff_ab",
          target: "self",
          value: 20,
          duration: 2
        }
      ],
      description: "\u0E1A\u0E31\u0E1F ATK +20% \u0E41\u0E25\u0E30 Armor Break +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E15\u0E35 \xD71.1"
    },
    {
      id: "lightning_l",
      name: "\u0E1F\u0E49\u0E32\u0E1C\u0E48\u0E32\u0E1E\u0E34\u0E42\u0E23\u0E18",
      element: "lightning",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      effects: [
        {
          type: "stun",
          chance: 0.6,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"
    },
    {
      id: "ice_s",
      name: "\u0E40\u0E01\u0E25\u0E47\u0E14\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07",
      element: "ice",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      effects: [
        {
          type: "debuff_spd",
          target: "enemy",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "ice_m1",
      name: "\u0E2B\u0E2D\u0E01\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07",
      element: "ice",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "freeze",
          chance: 0.3,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E15\u0E34\u0E14\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"
    },
    {
      id: "ice_m2",
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C",
      element: "ice",
      tier: "M",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "shield",
          target: "self",
          value: 0.2,
          duration: 2
        },
        {
          type: "debuff_spd",
          target: "enemy",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 20% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15%"
    },
    {
      id: "ice_l",
      name: "\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E34\u0E21\u0E30",
      element: "ice",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      effects: [
        {
          type: "freeze",
          chance: 0.55,
          bonusChanceIfSlowed: 0.2,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E15\u0E34\u0E14\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 (\u0E16\u0E49\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E2D\u0E22\u0E39\u0E48 \u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E40\u0E1B\u0E47\u0E19 75%)"
    },
    {
      id: "plant_s",
      name: "\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14",
      element: "plant",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.5,
      lifestealPct: 0.3,
      effects: [],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.5 \xB7 \u0E14\u0E39\u0E14 HP 30% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49"
    },
    {
      id: "plant_m1",
      name: "\u0E2B\u0E19\u0E32\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23",
      element: "plant",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "root",
          chance: 1,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E23\u0E36\u0E07 (FLEE=0, \u0E2B\u0E49\u0E32\u0E21\u0E2A\u0E25\u0E31\u0E1A\u0E15\u0E31\u0E27 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "plant_m2",
      name: "\u0E1E\u0E25\u0E31\u0E07\u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E1B\u0E48\u0E32",
      element: "plant",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.3,
      lifestealPct: 0.5,
      effects: [
        {
          type: "regen",
          target: "self",
          value: 0.06,
          duration: 2
        }
      ],
      description: "\u0E14\u0E39\u0E14 HP \xD71.3 \u0E14\u0E32\u0E40\u0E21\u0E08 (\u0E14\u0E39\u0E14 50%) + \u0E1F\u0E37\u0E49\u0E19 HP \u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 6%/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "plant_l",
      name: "\u0E1B\u0E48\u0E32\u0E01\u0E25\u0E37\u0E19\u0E01\u0E34\u0E19",
      element: "plant",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.1,
      lifestealPct: 0.4,
      effects: [
        {
          type: "root",
          chance: 1,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.1 \xB7 \u0E14\u0E39\u0E14 HP 40% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49 + \u0E15\u0E34\u0E14\u0E15\u0E23\u0E36\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"
    },
    {
      id: "poison_s",
      name: "\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29",
      element: "poison",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.55,
      effects: [
        {
          type: "poison",
          chance: 0.6,
          duration: 3
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.55 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "poison_m1",
      name: "\u0E2B\u0E21\u0E2D\u0E01\u0E1E\u0E34\u0E29\u0E2D\u0E48\u0E2D\u0E19\u0E41\u0E23\u0E07",
      element: "poison",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.6,
      effects: [
        {
          type: "poison",
          chance: 1,
          duration: 3
        },
        {
          type: "debuff_atk",
          target: "enemy",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "poison_m2",
      name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29",
      element: "poison",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.75,
      bonusIfTargetHas: {
        status: "poison",
        extraMult: 0.2
      },
      effects: [
        {
          type: "bleed",
          chance: 0.6,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.75 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) (\u0E16\u0E49\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1B\u0E47\u0E19 \xD72.1)"
    },
    {
      id: "poison_l",
      name: "\u0E1E\u0E34\u0E29\u0E01\u0E31\u0E14\u0E01\u0E23\u0E48\u0E2D\u0E19",
      element: "poison",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.1,
      effects: [
        {
          type: "poison",
          chance: 1,
          stacks: 2,
          duration: 3
        },
        {
          type: "debuff_def",
          target: "enemy",
          value: 0.2,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.1 \xB7 \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 2 \u0E0A\u0E31\u0E49\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "dark_s",
      name: "\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E07\u0E32",
      element: "dark",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      effects: [
        {
          type: "blind",
          chance: 0.45,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (HIT \u221220, 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "dark_m1",
      name: "\u0E21\u0E48\u0E32\u0E19\u0E21\u0E37\u0E14\u0E1A\u0E2D\u0E14",
      element: "dark",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.6,
      effects: [
        {
          type: "blind",
          chance: 1,
          duration: 1
        },
        {
          type: "silence",
          chance: 0.45,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E43\u0E1A\u0E49 \u{1F515} (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "dark_m2",
      name: "\u0E14\u0E39\u0E14\u0E01\u0E25\u0E37\u0E19\u0E40\u0E07\u0E32",
      element: "dark",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.5,
      effects: [
        {
          type: "debuff_atk",
          target: "enemy",
          value: 0.15,
          duration: 2
        },
        {
          type: "buff_atk",
          target: "self",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.5 \xB7 \u0E02\u0E42\u0E21\u0E22 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% \u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "dark_l",
      name: "\u0E01\u0E25\u0E37\u0E19\u0E01\u0E34\u0E19\u0E04\u0E27\u0E32\u0E21\u0E21\u0E37\u0E14",
      element: "dark",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      effects: [
        {
          type: "blind",
          chance: 1,
          duration: 1
        },
        {
          type: "debuff_def",
          target: "enemy",
          value: 0.25,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 + \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "light_s",
      name: "\u0E25\u0E33\u0E41\u0E2A\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C",
      element: "light",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      effects: [
        {
          type: "buff_hit",
          target: "self",
          value: 15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E1A\u0E31\u0E1F HIT \u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "light_m1",
      name: "\u0E41\u0E2A\u0E07\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32",
      element: "light",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "debuff_atk",
          target: "enemy",
          value: 0.15,
          duration: 2
        },
        {
          type: "debuff_cri",
          target: "enemy",
          value: 15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E25\u0E14 ATK \u0E41\u0E25\u0E30 CRI% \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "light_m2",
      name: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E41\u0E2A\u0E07",
      element: "light",
      tier: "M",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "shield",
          target: "self",
          value: 0.25,
          duration: 2
        },
        {
          type: "cleanse",
          target: "self",
          count: 1
        }
      ],
      description: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 25% \u0E02\u0E2D\u0E07 Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2D\u0E22\u0E48\u0E32\u0E07"
    },
    {
      id: "light_l",
      name: "\u0E23\u0E31\u0E28\u0E21\u0E35\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C",
      element: "light",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.1,
      effects: [
        {
          type: "shield",
          target: "self",
          value: 0.2,
          duration: 2
        },
        {
          type: "debuff_atk",
          target: "enemy",
          value: 0.2,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.1 \xB7 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E43\u0E2B\u0E49\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 20% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 20%"
    },
    {
      id: "martial_s",
      name: "\u0E2B\u0E21\u0E31\u0E14\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22",
      element: "neutral",
      branch: "martial",
      unlockedByDefault: true,
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      effects: [
        {
          type: "blind",
          chance: 0.45,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.60 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (HIT \u221220, CRI \u221210%, 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "martial_m1",
      name: "\u0E40\u0E15\u0E30\u0E15\u0E31\u0E14\u0E02\u0E32\u0E1E\u0E2A\u0E38\u0E18\u0E32",
      element: "neutral",
      branch: "martial",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "slow",
          chance: 0.65,
          duration: 2
        },
        {
          type: "root",
          chance: 0.35,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.65 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E15\u0E23\u0E36\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "martial_m2",
      name: "\u0E1D\u0E48\u0E32\u0E21\u0E37\u0E2D\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E17\u0E23\u0E27\u0E07",
      element: "neutral",
      branch: "martial",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      effects: [
        {
          type: "burn",
          chance: 0.6,
          duration: 2
        },
        {
          type: "stun",
          chance: 0.3,
          duration: 1
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.65 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E1A\u0E32\u0E14\u0E40\u0E08\u0E47\u0E1A\u0E20\u0E32\u0E22\u0E43\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "martial_l",
      name: "\u0E40\u0E1E\u0E25\u0E07\u0E22\u0E38\u0E17\u0E18\u0E4C\u0E2A\u0E22\u0E1A\u0E21\u0E32\u0E23",
      element: "neutral",
      branch: "martial",
      unlockedByDefault: true,
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.2,
      effects: [
        {
          type: "stun",
          chance: 0.65,
          duration: 1
        },
        {
          type: "slow",
          chance: 0.65,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD72.20 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "medical_s",
      name: "\u0E2A\u0E21\u0E38\u0E19\u0E44\u0E1E\u0E23\u0E1E\u0E31\u0E19\u0E41\u0E1C\u0E25",
      element: "neutral",
      branch: "medical",
      unlockedByDefault: true,
      tier: "S",
      baseChance: 0.2,
      damageMult: 0.8,
      effects: [
        {
          type: "heal_pct",
          target: "self",
          chance: 1,
          value: 0.12
        },
        {
          type: "regen",
          target: "self",
          chance: 0.5,
          value: 0.06,
          duration: 2
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD70.80 \xB7 \u0E1F\u0E37\u0E49\u0E19 HP 12% Max HP + \u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E44\u0E14\u0E49 Regen 6%/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "medical_m1",
      name: "\u0E40\u0E02\u0E47\u0E21\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E16\u0E2D\u0E19\u0E1E\u0E34\u0E29",
      element: "neutral",
      branch: "medical",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 0.9,
      effects: [
        {
          type: "heal_pct",
          target: "self",
          chance: 1,
          value: 0.15
        },
        {
          type: "cleanse",
          target: "self",
          chance: 0.75,
          count: 1
        },
        {
          type: "sp_change",
          target: "self",
          chance: 1,
          value: 20
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD70.90 \xB7 \u0E1F\u0E37\u0E49\u0E19 HP 15% Max HP, \u0E1F\u0E37\u0E49\u0E19 SP +20 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 75% \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 1 \u0E2D\u0E22\u0E48\u0E32\u0E07"
    },
    {
      id: "medical_m2",
      name: "\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E40\u0E17\u0E27\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E1E",
      element: "neutral",
      branch: "medical",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "heal_pct",
          target: "self",
          chance: 1,
          value: 0.22
        },
        {
          type: "buff_def",
          target: "self",
          chance: 0.6,
          value: 0.25,
          duration: 2
        }
      ],
      description: "\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP \u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 22% Max HP + \u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "medical_l",
      name: "\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E0A\u0E35\u0E27\u0E34\u0E15",
      element: "neutral",
      branch: "medical",
      unlockedByDefault: true,
      tier: "L",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "heal_pct",
          target: "self",
          chance: 1,
          value: 0.28
        },
        {
          type: "sp_change",
          target: "self",
          chance: 1,
          value: 35
        },
        {
          type: "cleanse",
          target: "self",
          chance: 0.8,
          count: 99
        },
        {
          type: "shield",
          target: "self",
          chance: 0.8,
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP \u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 28% Max HP, \u0E1F\u0E37\u0E49\u0E19 SP +35 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 80% \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "trick_s",
      name: "\u0E17\u0E23\u0E32\u0E22\u0E1E\u0E23\u0E32\u0E07\u0E15\u0E32",
      element: "neutral",
      branch: "trick",
      unlockedByDefault: true,
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.15,
      effects: [
        {
          type: "debuff_atk",
          target: "enemy",
          chance: 0.65,
          value: 0.15,
          duration: 2
        },
        {
          type: "debuff_hit",
          target: "enemy",
          chance: 0.65,
          value: 15,
          duration: 2
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.15 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% \u0E41\u0E25\u0E30\u0E25\u0E14 HIT 15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "trick_m1",
      name: "\u0E01\u0E31\u0E1A\u0E14\u0E31\u0E01\u0E17\u0E25\u0E32\u0E22\u0E40\u0E01\u0E23\u0E32\u0E30",
      element: "neutral",
      branch: "trick",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.2,
      effects: [
        {
          type: "debuff_def",
          target: "enemy",
          chance: 0.75,
          value: 0.25,
          duration: 2
        },
        {
          type: "debuff_spd",
          target: "enemy",
          chance: 0.75,
          value: 0.15,
          duration: 2
        },
        {
          type: "vulnerable",
          target: "enemy",
          chance: 0.5,
          duration: 2
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.20 \xB7 \u0E25\u0E14 DEF 25%, SPD 15% \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E34\u0E14\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 \u{1F494} (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "trick_m2",
      name: "\u0E01\u0E25\u0E25\u0E27\u0E07\u0E15\u0E31\u0E14\u0E01\u0E33\u0E25\u0E31\u0E07",
      element: "neutral",
      branch: "trick",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.2,
      effects: [
        {
          type: "debuff_cri",
          target: "enemy",
          chance: 0.75,
          value: 20,
          duration: 2
        },
        {
          type: "debuff_atk",
          target: "enemy",
          chance: 0.75,
          value: 0.2,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "enemy",
          chance: 0.75,
          value: -15
        },
        {
          type: "sp_change",
          target: "enemy",
          chance: 0.75,
          value: -15
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.20 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 75% \u0E25\u0E14 CRI% \u0E28\u0E31\u0E15\u0E23\u0E39 20%, \u0E25\u0E14 ATK 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E25\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 15 \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 \u221215"
    },
    {
      id: "trick_l",
      name: "\u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E25\u0E27\u0E07\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
      element: "neutral",
      branch: "trick",
      unlockedByDefault: true,
      tier: "L",
      baseChance: 0.1,
      damageMult: 1.35,
      effects: [
        {
          type: "debuff_atk",
          target: "enemy",
          chance: 0.85,
          value: 0.25,
          duration: 2
        },
        {
          type: "debuff_def",
          target: "enemy",
          chance: 0.85,
          value: 0.25,
          duration: 2
        },
        {
          type: "debuff_spd",
          target: "enemy",
          chance: 0.85,
          value: 0.2,
          duration: 2
        },
        {
          type: "blind",
          target: "enemy",
          chance: 0.85,
          duration: 2
        },
        {
          type: "sp_change",
          target: "enemy",
          chance: 0.85,
          value: -20
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.35 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E25\u0E14 ATK 25%, DEF 25%, SPD 20%, \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 \u221220"
    },
    {
      id: "catalyst_s",
      name: "\u0E01\u0E23\u0E30\u0E15\u0E38\u0E49\u0E19\u0E0A\u0E35\u0E1E\u0E08\u0E23",
      element: "neutral",
      branch: "catalyst",
      unlockedByDefault: true,
      tier: "S",
      baseChance: 0.2,
      damageMult: 0.8,
      effects: [
        {
          type: "buff_spd",
          target: "self",
          chance: 0.7,
          value: 0.2,
          duration: 2
        },
        {
          type: "buff_atk",
          target: "self",
          chance: 0.7,
          value: 0.15,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "self",
          chance: 0.7,
          value: 10
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD70.80 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E1A\u0E31\u0E1F SPD +20%, ATK +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +10"
    },
    {
      id: "catalyst_m1",
      name: "\u0E40\u0E23\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      element: "neutral",
      branch: "catalyst",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 0.85,
      effects: [
        {
          type: "buff_cri",
          target: "self",
          chance: 0.75,
          value: 20,
          duration: 2
        },
        {
          type: "buff_ab",
          target: "self",
          chance: 0.75,
          value: 20,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "self",
          chance: 0.75,
          value: 15
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD70.85 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 75% \u0E1A\u0E31\u0E1F CRI% +20%, \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +15"
    },
    {
      id: "catalyst_m2",
      name: "\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1B\u0E0F\u0E34\u0E01\u0E34\u0E23\u0E34\u0E22\u0E32\u0E18\u0E32\u0E15\u0E38",
      element: "neutral",
      branch: "catalyst",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1,
      bonusIfTargetHas: {
        status: "burn_or_poison",
        extraMult: 0.5
      },
      effects: [
        {
          type: "buff_atk",
          target: "self",
          chance: 0.75,
          value: 0.25,
          duration: 2
        },
        {
          type: "buff_hit",
          target: "self",
          chance: 0.75,
          value: 20,
          duration: 2
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.00 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 75% \u0E1A\u0E31\u0E1F ATK +25%, HIT +20 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) (\u0E16\u0E49\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E1E\u0E34\u0E29 \u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +50%)"
    },
    {
      id: "catalyst_l",
      name: "\u0E02\u0E35\u0E14\u0E08\u0E33\u0E01\u0E31\u0E14\u0E2A\u0E32\u0E22\u0E40\u0E25\u0E37\u0E2D\u0E14",
      element: "neutral",
      branch: "catalyst",
      unlockedByDefault: true,
      tier: "L",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "buff_atk",
          target: "self",
          chance: 0.85,
          value: 0.35,
          duration: 2
        },
        {
          type: "buff_spd",
          target: "self",
          chance: 0.85,
          value: 0.25,
          duration: 2
        },
        {
          type: "buff_cri",
          target: "self",
          chance: 0.85,
          value: 20,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "self",
          chance: 0.85,
          value: 25
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E1A\u0E31\u0E1F\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 ATK +35%, SPD +25%, CRI% +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +25"
    },
    {
      id: "secret_s",
      name: "\u0E1D\u0E19\u0E2A\u0E38\u0E23\u0E32",
      element: "neutral",
      branch: "secret",
      unlockedByDefault: true,
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.1,
      effects: [
        {
          type: "wine_mist",
          target: "enemy",
          chance: 0.8,
          duration: 3
        },
        {
          type: "sleep",
          target: "enemy",
          chance: 0.4,
          duration: 2
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.10 \xB7 \u0E0A\u0E42\u0E25\u0E21\u0E1D\u0E19\u0E2A\u0E38\u0E23\u0E32 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E15\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25 \u{1F4A4} (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "secret_m1",
      name: "\u0E01\u0E23\u0E30\u0E08\u0E01\u0E22\u0E32\u0E15\u0E30",
      element: "neutral",
      branch: "secret",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.35,
      effects: [
        {
          type: "yata_mirror",
          target: "self",
          chance: 1,
          duration: 2
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.35 \xB7 \u0E01\u0E32\u0E07\u0E21\u0E48\u0E32\u0E19\u0E01\u0E23\u0E30\u0E08\u0E01\u0E22\u0E32\u0E15\u0E30 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E41\u0E2A\u0E07\u0E08\u0E49\u0E32\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "secret_m2",
      name: "\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E17\u0E48\u0E32\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A",
      element: "neutral",
      branch: "secret",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.45,
      effects: [
        {
          type: "counter_stance",
          target: "self",
          chance: 1,
          duration: 2
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.45 \xB7 \u0E40\u0E02\u0E49\u0E32\u0E17\u0E48\u0E32\u0E15\u0E31\u0E49\u0E07\u0E23\u0E31\u0E1A\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E1F\u0E31\u0E19\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E17\u0E31\u0E19\u0E17\u0E35\u0E14\u0E49\u0E27\u0E22\u0E14\u0E32\u0E40\u0E21\u0E08 45% \u0E02\u0E2D\u0E07 ATK"
    },
    {
      id: "secret_m3",
      name: "\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07",
      element: "neutral",
      branch: "secret",
      unlockedByDefault: true,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.4,
      effects: [
        {
          type: "raging_thunder",
          target: "self",
          chance: 1,
          duration: 3
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.40 \xB7 \u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E21\u0E06\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E2A\u0E38\u0E48\u0E21\u0E1C\u0E48\u0E32\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E17\u0E38\u0E01\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 (\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E1C\u0E48\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39, 30% \u0E1C\u0E48\u0E32\u0E1E\u0E27\u0E01\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19)"
    },
    {
      id: "secret_l",
      name: "\u0E27\u0E34\u0E0A\u0E32\u0E25\u0E31\u0E1A\u0E40\u0E07\u0E32\u0E21\u0E32\u0E22\u0E32",
      element: "neutral",
      branch: "secret",
      unlockedByDefault: true,
      tier: "L",
      baseChance: 0.1,
      damageMult: 1.2,
      effects: [
        {
          type: "shadow_clone",
          target: "self",
          chance: 1,
          duration: 3
        }
      ],
      description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 \xD71.20 \xB7 \u0E40\u0E2A\u0E01\u0E40\u0E07\u0E32\u0E21\u0E32\u0E22\u0E32 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E44\u0E21\u0E48\u0E17\u0E2D\u0E22\u0E0B\u0E49\u0E33\u0E02\u0E13\u0E30\u0E21\u0E35\u0E40\u0E07\u0E32) \u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E40\u0E07\u0E32\u0E08\u0E30\u0E1F\u0E31\u0E19\u0E0B\u0E49\u0E33\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E14\u0E49\u0E27\u0E22\u0E14\u0E32\u0E40\u0E21\u0E08 50% \u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32"
    },
    {
      id: "fire_aoe",
      name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1C\u0E25\u0E32\u0E0D\u0E17\u0E31\u0E1E",
      element: "fire",
      tier: "L",
      targetScope: "all_enemies",
      baseChance: 0.1,
      damageMult: 1.15,
      effects: [
        {
          type: "burn",
          chance: 0.4,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.15 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "water_aoe",
      name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07",
      element: "water",
      tier: "L",
      targetScope: "all_allies",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "heal_pct",
          target: "all_allies",
          value: 0.12
        },
        {
          type: "cleanse",
          target: "all_allies",
          count: 1
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 12% Max HP + \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19"
    },
    {
      id: "wind_aoe",
      name: "\u0E27\u0E32\u0E15\u0E20\u0E31\u0E22\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E21\u0E38\u0E19",
      element: "wind",
      tier: "M",
      targetScope: "all_enemies",
      baseChance: 0.15,
      damageMult: 1.1,
      effects: [
        {
          type: "debuff_spd",
          target: "enemy",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.10 \xB7 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "earth_aoe",
      name: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E28\u0E34\u0E25\u0E32\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22",
      element: "earth",
      tier: "M",
      targetScope: "all_allies",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "shield",
          target: "all_allies",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E43\u0E2B\u0E49\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "lightning_aoe",
      name: "\u0E1E\u0E32\u0E22\u0E38\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1F\u0E32\u0E14\u0E2A\u0E32\u0E22",
      element: "lightning",
      tier: "L",
      targetScope: "all_enemies",
      baseChance: 0.1,
      damageMult: 1.25,
      effects: [
        {
          type: "stun",
          chance: 0.25,
          duration: 1
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.25 \xB7 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E2A\u0E15\u0E31\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E15\u0E48\u0E25\u0E30\u0E15\u0E31\u0E27 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "ice_aoe",
      name: "\u0E2D\u0E32\u0E13\u0E32\u0E40\u0E02\u0E15\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E34\u0E21\u0E30",
      element: "ice",
      tier: "L",
      targetScope: "all_enemies",
      baseChance: 0.1,
      damageMult: 1.05,
      effects: [
        {
          type: "debuff_spd",
          target: "enemy",
          value: 0.2,
          duration: 2
        },
        {
          type: "freeze",
          chance: 0.35,
          duration: 1
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.05 \xB7 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "plant_aoe",
      name: "\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E40\u0E01\u0E2A\u0E23\u0E1F\u0E37\u0E49\u0E19\u0E44\u0E1E\u0E23",
      element: "plant",
      tier: "L",
      targetScope: "all_allies",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "heal_pct",
          target: "all_allies",
          value: 0.1
        },
        {
          type: "regen_pct",
          target: "all_allies",
          value: 0.05,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 10% Max HP + \u0E1A\u0E31\u0E1F\u0E23\u0E35\u0E40\u0E08\u0E19 5% Max HP/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "poison_aoe",
      name: "\u0E44\u0E2D\u0E2B\u0E21\u0E2D\u0E01\u0E1E\u0E34\u0E29\u0E01\u0E31\u0E14\u0E01\u0E23\u0E48\u0E2D\u0E19",
      element: "poison",
      tier: "M",
      targetScope: "all_enemies",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "poison",
          chance: 1,
          duration: 3
        },
        {
          type: "debuff_def",
          target: "enemy",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "dark_aoe",
      name: "\u0E40\u0E07\u0E32\u0E23\u0E32\u0E15\u0E23\u0E35\u0E01\u0E25\u0E37\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      element: "dark",
      tier: "L",
      targetScope: "all_enemies",
      baseChance: 0.1,
      damageMult: 1.1,
      effects: [
        {
          type: "blind",
          chance: 0.5,
          duration: 2
        },
        {
          type: "sp_drain",
          target: "enemy",
          value: 6
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.10 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E14\u0E39\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39\u0E25\u0E30 6 SP"
    },
    {
      id: "light_aoe",
      name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C",
      element: "light",
      tier: "M",
      targetScope: "all_allies",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "buff_cri",
          target: "all_allies",
          value: 10,
          duration: 2
        },
        {
          type: "buff_flee",
          target: "all_allies",
          value: 10,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21\u0E40\u0E23\u0E32\u0E17\u0E38\u0E01\u0E04\u0E19 CRI% +10% \u0E41\u0E25\u0E30 FLEE +10 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "martial_aoe",
      name: "\u0E2B\u0E21\u0E31\u0E14\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E1C\u0E48\u0E32\u0E41\u0E19\u0E27\u0E23\u0E1A",
      element: "neutral",
      branch: "martial",
      tier: "M",
      targetScope: "front_enemies",
      baseChance: 0.15,
      damageMult: 1.45,
      effects: [
        {
          type: "armor_break",
          target: "enemy",
          value: 15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E01\u0E32\u0E22\u0E20\u0E32\u0E1E\u0E01\u0E27\u0E32\u0E14\u0E41\u0E19\u0E27\u0E2B\u0E19\u0E49\u0E32 \xD71.45 \xB7 \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15%"
    },
    {
      id: "medical_aoe",
      name: "\u0E42\u0E2D\u0E2A\u0E16\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E0A\u0E35\u0E27\u0E34\u0E15",
      element: "neutral",
      branch: "medical",
      tier: "L",
      targetScope: "all_allies",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "heal_pct",
          target: "all_allies",
          value: 0.14
        },
        {
          type: "sp_change",
          target: "all_allies",
          value: 8
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP \u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 14% Max HP + \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP \u0E43\u0E2B\u0E49\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 +8 SP"
    },
    {
      id: "trick_aoe",
      name: "\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E04\u0E27\u0E31\u0E19\u0E2A\u0E31\u0E1A\u0E2A\u0E19",
      element: "neutral",
      branch: "trick",
      tier: "M",
      targetScope: "all_enemies",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "debuff_hit",
          target: "enemy",
          value: 20,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "enemy",
          value: -15
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E25\u0E14 HIT \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 20 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E25\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19\u0E25\u0E07 15 \u0E41\u0E15\u0E49\u0E21"
    },
    {
      id: "catalyst_aoe",
      name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E1B\u0E25\u0E38\u0E01\u0E40\u0E23\u0E49\u0E32\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      element: "neutral",
      branch: "catalyst",
      tier: "L",
      targetScope: "all_allies",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "buff_atk",
          target: "all_allies",
          value: 0.15,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "all_allies",
          value: 12
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E1A\u0E31\u0E1F ATK +15% \u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 +12 \u0E41\u0E15\u0E49\u0E21"
    },
    {
      id: "psychic_s",
      name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E08\u0E34\u0E15\u0E41\u0E17\u0E23\u0E01\u0E0B\u0E36\u0E21",
      element: "psychic",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.35,
      spCost: 28,
      effects: [
        {
          type: "confusion",
          chance: 0.25,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15 \xD71.35 (-28 SP) \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "psychic_m1",
      name: "\u0E25\u0E33\u0E41\u0E2A\u0E07\u0E08\u0E34\u0E15\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
      element: "psychic",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.65,
      spCost: 45,
      effects: [
        {
          type: "confusion",
          chance: 0.35,
          duration: 1
        },
        {
          type: "debuff_hit",
          target: "enemy",
          chance: 0.65,
          value: 15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15 \xD71.65 (-45 SP) \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E25\u0E14 HIT 15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "psychic_m2",
      name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E08\u0E34\u0E15\u0E2A\u0E33\u0E19\u0E36\u0E01",
      element: "psychic",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.75,
      spCost: 48,
      effects: [
        {
          type: "confusion",
          chance: 0.45,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15 \xD71.75 (-48 SP) \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "psychic_l",
      name: "\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E08\u0E34\u0E15\u0E17\u0E25\u0E32\u0E22\u0E20\u0E1E",
      element: "psychic",
      tier: "L",
      baseChance: 0.1,
      damageMult: 2.25,
      spCost: 70,
      effects: [
        {
          type: "confusion",
          chance: 0.6,
          duration: 2
        },
        {
          type: "sp_drain",
          target: "enemy",
          chance: 1,
          value: 12
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15 \xD72.25 (-70 SP) \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -12 SP"
    },
    {
      id: "psychic_aoe",
      name: "\u0E1E\u0E32\u0E22\u0E38\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E1B\u0E31\u0E48\u0E19\u0E1B\u0E48\u0E27\u0E19",
      element: "psychic",
      tier: "L",
      targetScope: "all_enemies",
      baseChance: 0.1,
      damageMult: 1.3,
      spCost: 70,
      effects: [
        {
          type: "confusion",
          chance: 0.35,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \xD71.30 (-70 SP) \xB7 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E15\u0E48\u0E25\u0E30\u0E15\u0E31\u0E27\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    }
  ]
};

// src/data/elements.json
var elements_default = {
  multipliers: {
    advantage: 1.3,
    disadvantage: 0.85,
    neutral: 1,
    sameElementChanceBonus: 1.2,
    sameElementDamageBonus: 0.2
  },
  elements: [
    {
      id: "earth",
      name: "\u0E14\u0E34\u0E19",
      icon: "\u{1FAA8}",
      color: "#8D6E63",
      borderColor: "#D7CCC8",
      textColor: "#FFFFFF",
      strongAgainst: ["lightning", "water", "fire"],
      weakAgainst: ["dark", "light", "poison", "psychic"]
    },
    {
      id: "water",
      name: "\u0E19\u0E49\u0E33",
      icon: "\u{1F4A7}",
      color: "#1E88E5",
      borderColor: "#BBDEFB",
      textColor: "#FFFFFF",
      strongAgainst: ["fire", "plant", "ice"],
      weakAgainst: ["lightning", "earth", "dark"]
    },
    {
      id: "wind",
      name: "\u0E25\u0E21",
      icon: "\u{1F32A}\uFE0F",
      color: "#26A69A",
      borderColor: "#B2DFDB",
      textColor: "#FFFFFF",
      strongAgainst: ["poison", "light", "dark"],
      weakAgainst: ["ice", "plant", "fire", "psychic"]
    },
    {
      id: "fire",
      name: "\u0E44\u0E1F",
      icon: "\u{1F525}",
      color: "#E53935",
      borderColor: "#FFCDD2",
      textColor: "#FFFFFF",
      strongAgainst: ["plant", "ice", "wind"],
      weakAgainst: ["water", "lightning", "earth"]
    },
    {
      id: "lightning",
      name: "\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32",
      icon: "\u26A1",
      color: "#FDD835",
      borderColor: "#FFF9C4",
      textColor: "#212121",
      strongAgainst: ["water", "fire", "plant", "psychic"],
      weakAgainst: ["earth", "dark", "light"]
    },
    {
      id: "ice",
      name: "\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07",
      icon: "\u2744\uFE0F",
      color: "#4DD0E1",
      borderColor: "#E0F7FA",
      textColor: "#212121",
      strongAgainst: ["wind", "poison", "light", "psychic"],
      weakAgainst: ["plant", "fire", "water"]
    },
    {
      id: "plant",
      name: "\u0E1E\u0E37\u0E0A",
      icon: "\u{1F33F}",
      color: "#43A047",
      borderColor: "#C8E6C9",
      textColor: "#FFFFFF",
      strongAgainst: ["ice", "wind", "poison"],
      weakAgainst: ["fire", "water", "lightning"]
    },
    {
      id: "poison",
      name: "\u0E1E\u0E34\u0E29",
      icon: "\u2620\uFE0F",
      color: "#8E24AA",
      borderColor: "#E1BEE7",
      textColor: "#FFFFFF",
      strongAgainst: ["light", "dark", "earth"],
      weakAgainst: ["wind", "ice", "plant", "psychic"]
    },
    {
      id: "dark",
      name: "\u0E21\u0E37\u0E14",
      icon: "\u{1F311}",
      color: "#37474F",
      borderColor: "#CFD8DC",
      textColor: "#FFFFFF",
      strongAgainst: ["earth", "lightning", "water", "psychic"],
      weakAgainst: ["light", "poison", "wind"]
    },
    {
      id: "light",
      name: "\u0E41\u0E2A\u0E07",
      icon: "\u2728",
      color: "#FFF176",
      borderColor: "#FFFFFF",
      textColor: "#212121",
      strongAgainst: ["dark", "earth", "lightning"],
      weakAgainst: ["poison", "wind", "ice"]
    },
    {
      id: "psychic",
      name: "\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15",
      icon: "\u{1F52E}",
      color: "#BA68C8",
      borderColor: "#F3E5F5",
      textColor: "#FFFFFF",
      strongAgainst: ["poison", "earth", "wind"],
      weakAgainst: ["dark", "lightning", "ice"]
    }
  ]
};

// src/data/enemies.json
var enemies_default = {
  enemies: [
    {
      id: "void_thornvine",
      name: "\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E37\u0E19\u0E0A\u0E35\u0E1E",
      rarity: "B",
      element: "plant",
      archetype: "ATK",
      role: "Striker",
      str: 70,
      agi: 45,
      sta: 35,
      signatureName: "\u0E41\u0E2A\u0E49\u0E17\u0E21\u0E34\u0E2C\u0E2A\u0E39\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "lifesteal_pct",
        value: 0.2
      },
      ability: {
        id: "matter_absorbing_vine",
        name: "\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E14\u0E39\u0E14\u0E01\u0E25\u0E37\u0E19\u0E21\u0E27\u0E25\u0E2A\u0E32\u0E23",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 4% Max HP \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -4 \u0E41\u0E15\u0E49\u0E21",
        procChance: 0.6
      },
      defaultSkills: ["plant_s", "plant_m1", "martial_s", "trick_s"],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "toxic_sporeling",
      name: "\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E2B\u0E47\u0E14\u0E1E\u0E34\u0E29\u0E04\u0E25\u0E31\u0E48\u0E07",
      rarity: "B",
      element: "poison",
      archetype: "BAL",
      role: "Controller",
      str: 54,
      agi: 48,
      sta: 48,
      signatureName: "\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E17\u0E21\u0E34\u0E2C",
      signatureEffect: {
        type: "poison",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "spore_dispersion",
        name: "\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E41\u0E1E\u0E23\u0E48\u0E40\u0E0A\u0E37\u0E49\u0E2D",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E1E\u0E34\u0E29\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: ["poison_s", "poison_m1", "trick_s", "earth_s"],
      preferredRow: "mid",
      backlineChance: 0.4
    },
    {
      id: "putrid_slime",
      name: "\u0E2A\u0E44\u0E25\u0E21\u0E4C\u0E42\u0E04\u0E25\u0E19\u0E40\u0E19\u0E48\u0E32\u0E40\u0E1B\u0E37\u0E48\u0E2D\u0E22",
      rarity: "B",
      element: "earth",
      archetype: "DEF",
      role: "Tank",
      str: 36,
      agi: 40,
      sta: 74,
      signatureName: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E04\u0E25\u0E19\u0E14\u0E39\u0E14\u0E17\u0E25\u0E32\u0E22\u0E17\u0E31\u0E1E",
      signatureEffect: {
        type: "slow",
        duration: 2,
        chance: 0.65
      },
      ability: {
        id: "viscous_elastic_body",
        name: "\u0E01\u0E32\u0E22\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E22\u0E38\u0E48\u0E19\u0E15\u0E31\u0E27\u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E41\u0E23\u0E07",
        description: "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Block Rate +10% \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 20%",
        procChance: 0.6
      },
      defaultSkills: ["earth_s", "earth_m2", "martial_s", "trick_s"],
      preferredRow: "front",
      backlineChance: 0.05
    },
    {
      id: "mist_droplet_blob",
      name: "\u0E1A\u0E25\u0E47\u0E2D\u0E1A\u0E2B\u0E22\u0E14\u0E19\u0E49\u0E33\u0E2B\u0E21\u0E2D\u0E01\u0E21\u0E32\u0E22\u0E32",
      rarity: "B",
      element: "water",
      archetype: "BAL",
      role: "Supporter",
      str: 50,
      agi: 50,
      sta: 50,
      signatureName: "\u0E21\u0E48\u0E32\u0E19\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E49\u0E33\u0E25\u0E27\u0E07\u0E15\u0E32",
      signatureEffect: {
        type: "regen_pct",
        value: 0.08,
        duration: 2
      },
      ability: {
        id: "cleansing_water_mist",
        name: "\u0E44\u0E2D\u0E19\u0E49\u0E33\u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07\u0E08\u0E34\u0E15",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 5% Max HP \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 FLEE +15 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: ["water_s", "water_m1", "medical_s", "trick_s"],
      preferredRow: "back",
      backlineChance: 0.25
    },
    {
      id: "cursed_wisp",
      name: "\u0E27\u0E34\u0E2A\u0E1B\u0E4C\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E41\u0E04\u0E49\u0E19",
      rarity: "B",
      element: "fire",
      archetype: "SPD",
      role: "Assassin",
      str: 48,
      agi: 57,
      sta: 45,
      signatureName: "\u0E40\u0E1B\u0E25\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E19\u0E23\u0E01\u0E32\u0E17\u0E25\u0E32\u0E22\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "burn",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "floating_spark",
        name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E44\u0E1F\u0E25\u0E48\u0E2D\u0E07\u0E25\u0E2D\u0E22",
        description: "CRI Rate +10% \u0E04\u0E07\u0E17\u0E35\u0E48 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.7
      },
      defaultSkills: ["fire_s", "fire_m1", "trick_s", "martial_s"],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "anomalous_rockling",
      name: "\u0E1C\u0E25\u0E36\u0E01\u0E2B\u0E34\u0E19\u0E04\u0E2D\u0E23\u0E4C\u0E41\u0E1B\u0E23\u0E1B\u0E23\u0E27\u0E19",
      rarity: "B",
      element: "earth",
      archetype: "DEF",
      role: "Tank",
      str: 40,
      agi: 35,
      sta: 75,
      signatureName: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E28\u0E34\u0E25\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1E\u0E25\u0E31\u0E07",
      signatureEffect: {
        type: "shield",
        value: 0.25,
        duration: 2
      },
      ability: {
        id: "resonance_rock_armor",
        name: "\u0E40\u0E01\u0E25\u0E47\u0E14\u0E2B\u0E34\u0E19\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E25\u0E37\u0E48\u0E19",
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 5% \u0E04\u0E07\u0E17\u0E35\u0E48 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E01\u0E25\u0E31\u0E1A 15%",
        procChance: 0.6
      },
      defaultSkills: ["earth_s", "earth_m2", "martial_s", "catalyst_s"],
      preferredRow: "front",
      backlineChance: 0.05
    },
    {
      id: "phantom_mandrake",
      name: "\u0E41\u0E21\u0E19\u0E40\u0E14\u0E23\u0E01\u0E1E\u0E23\u0E32\u0E22\u0E2B\u0E27\u0E35\u0E14\u0E2B\u0E27\u0E34\u0E27",
      rarity: "B",
      element: "plant",
      archetype: "BAL",
      role: "Controller",
      str: 50,
      agi: 52,
      sta: 48,
      signatureName: "\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E23\u0E35\u0E14\u0E23\u0E49\u0E2D\u0E07\u0E17\u0E25\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17",
      signatureEffect: {
        type: "confusion",
        duration: 2,
        chance: 0.6
      },
      ability: {
        id: "haunting_resonator",
        name: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E2B\u0E25\u0E2D\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.55
      },
      defaultSkills: ["plant_s", "plant_m1", "secret_s", "trick_s"],
      preferredRow: "mid",
      backlineChance: 0.45
    },
    {
      id: "shadow_parasite",
      name: "\u0E1B\u0E23\u0E2A\u0E34\u0E15\u0E14\u0E39\u0E14\u0E40\u0E07\u0E32",
      rarity: "B",
      element: "dark",
      archetype: "SPD",
      role: "Assassin",
      str: 52,
      agi: 55,
      sta: 43,
      signatureName: "\u0E2B\u0E19\u0E32\u0E21\u0E17\u0E21\u0E34\u0E2C\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22",
      signatureEffect: {
        type: "blind",
        duration: 2,
        chance: 0.65
      },
      ability: {
        id: "shadow_infiltration",
        name: "\u0E41\u0E17\u0E23\u0E01\u0E0B\u0E36\u0E21\u0E43\u0E15\u0E49\u0E40\u0E07\u0E32",
        description: "\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15% \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: ["dark_s", "dark_m1", "trick_s", "martial_s"],
      preferredRow: "mid",
      backlineChance: 0.6
    },
    {
      id: "caustic_acid_jelly",
      name: "\u0E40\u0E08\u0E25\u0E25\u0E35\u0E48\u0E01\u0E23\u0E14\u0E01\u0E31\u0E14\u0E01\u0E23\u0E48\u0E2D\u0E19",
      rarity: "B",
      element: "poison",
      archetype: "ATK",
      role: "Striker",
      str: 68,
      agi: 44,
      sta: 38,
      signatureName: "\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E14\u0E25\u0E30\u0E25\u0E32\u0E22\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "vulnerable",
        duration: 2,
        chance: 0.7
      },
      ability: {
        id: "armor_melting_bile",
        name: "\u0E19\u0E49\u0E33\u0E22\u0E48\u0E2D\u0E22\u0E25\u0E30\u0E25\u0E32\u0E22\u0E40\u0E01\u0E23\u0E32\u0E30",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E42\u0E14\u0E19 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39\u0E25\u0E07 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.65
      },
      defaultSkills: ["poison_s", "poison_m1", "trick_m1", "martial_s"],
      preferredRow: "front",
      backlineChance: 0.15
    },
    {
      id: "gale_swarm_orb",
      name: "\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E27\u0E32\u0E22\u0E38\u0E09\u0E27\u0E31\u0E14\u0E40\u0E09\u0E27\u0E35\u0E22\u0E19",
      rarity: "B",
      element: "wind",
      archetype: "SPD",
      role: "Assassin",
      str: 46,
      agi: 62,
      sta: 42,
      signatureName: "\u0E1E\u0E32\u0E22\u0E38\u0E21\u0E35\u0E14\u0E2A\u0E32\u0E22\u0E25\u0E21\u0E23\u0E49\u0E2D\u0E22\u0E17\u0E34\u0E28",
      signatureEffect: {
        type: "bleed",
        duration: 2,
        chance: 0.65
      },
      ability: {
        id: "razor_wind_core",
        name: "\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E25\u0E21\u0E2B\u0E21\u0E38\u0E19\u0E40\u0E09\u0E37\u0E2D\u0E19\u0E40\u0E19\u0E37\u0E49\u0E2D",
        description: "SPD +8 \u0E2B\u0E19\u0E48\u0E27\u0E22\u0E04\u0E07\u0E17\u0E35\u0E48 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E01\u0E23\u0E35\u0E14\u0E41\u0E1C\u0E25\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (Bleed 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
        procChance: 0.6
      },
      defaultSkills: ["wind_s", "wind_m1", "martial_s", "trick_s"],
      preferredRow: "mid",
      backlineChance: 0.6
    }
  ]
};

// src/engine/combat.ts
var ELEMENT_MAP = new Map(elements_default.elements.map((e) => [e.id, e]));
var HERO_MAP = new Map([...heroes_default.heroes, ...enemies_default.enemies].map((h) => [h.id, h]));
var SKILL_MAP = new Map(skills_default.skills.map((s) => [s.id, s]));
function getSignatureConfig(rarity) {
  return heroes_default.signatureByClass[rarity];
}
function getSkillSpCost(tier, skillId) {
  if (skillId && SKILL_MAP.has(skillId)) {
    const sk = SKILL_MAP.get(skillId);
    if (sk?.spCost !== void 0) return sk.spCost;
  }
  const costs = skills_default.statusRules.spCosts ?? { S: 20, M: 35, L: 55 };
  if (!tier) return 0;
  return costs[tier] ?? 20;
}
function computeHeroStats(heroId, level = 1, stars = 1) {
  const h = HERO_MAP.get(heroId);
  if (!h) throw new Error(`Unknown hero: ${heroId}`);
  const C = heroes_default.statFormula;
  const budget = heroes_default.classBudgets[h.rarity];
  const shares = heroes_default.archetypeShares[h.archetype];
  const [str, agi, sta] = shares ? shares.map((s) => s * budget) : [h.str, h.agi, h.sta];
  const mults = h.customMultipliers || {};
  const maxSp = Math.round((C.spBase ?? 70) + sta * (C.spPerSTA ?? 0.8));
  const spRegen = C.spRegenFlat ?? (C.spRegenPctPerTurn ? Math.round(maxSp * C.spRegenPctPerTurn) : 6);
  const lvlMult = 1 + (Math.max(1, level) - 1) * 0.02;
  const starMult = stars === 2 ? 1.05 : stars === 3 ? 1.12 : stars === 4 ? 1.2 : stars === 5 ? 1.3 : 1;
  const progMult = lvlMult * starMult;
  return {
    str: Math.round(str * progMult),
    agi: Math.round(agi * (1 + (progMult - 1) * 0.5)),
    sta: Math.round(sta * progMult),
    maxHp: (C.hpBase + sta * C.hpPerSTA) * (mults.hp ?? 1) * progMult,
    maxSp,
    spRegen,
    atk: str * C.atkPerSTR * (mults.atk ?? 1) * progMult,
    def: (10 + sta * C.defPerSTA) * (mults.def ?? 1) * progMult,
    spd: C.spdBase + agi * C.spdPerAGI * (1 + (progMult - 1) * 0.2),
    hit: C.hitBase + agi * C.hitPerAGI,
    flee: agi * C.fleePerAGI,
    cri: Math.min(C.criCap, C.criBase + agi * C.criPerAGI),
    criDmg: C.criDmgBase + str * C.criDmgPerSTR,
    ab: Math.min(C.abCap, str * C.abPerSTR),
    block: sta * C.blockPerSTA
  };
}
var MAX_SKILLS_PER_BRANCH = 2;
function getSkillBranch(skillId) {
  const sk = SKILL_MAP.get(skillId);
  if (!sk) return "unknown";
  if (sk.branch) return sk.branch;
  if (sk.element !== "neutral") return sk.element;
  if (skillId.startsWith("martial_")) return "martial";
  if (skillId.startsWith("medical_")) return "medical";
  if (skillId.startsWith("trick_")) return "trick";
  if (skillId.startsWith("catalyst_")) return "catalyst";
  if (skillId.startsWith("secret_")) return "secret";
  return sk.element;
}
function sanitizeSkillLoadout(skillIds, defaultSkills) {
  const result = [];
  const usedIds = /* @__PURE__ */ new Set();
  const branchCounts = /* @__PURE__ */ new Map();
  const canEquip = (id) => {
    if (!SKILL_MAP.has(id) || usedIds.has(id)) return false;
    const b = getSkillBranch(id);
    return (branchCounts.get(b) ?? 0) < MAX_SKILLS_PER_BRANCH;
  };
  const addSkill = (id) => {
    result.push(id);
    usedIds.add(id);
    const b = getSkillBranch(id);
    branchCounts.set(b, (branchCounts.get(b) ?? 0) + 1);
  };
  for (const id of skillIds.slice(0, 4)) {
    if (canEquip(id)) {
      addSkill(id);
    } else {
      const fallback = defaultSkills.find((d) => canEquip(d)) ?? skills_default.skills.find((s) => canEquip(s.id))?.id;
      if (fallback) addSkill(fallback);
    }
  }
  while (result.length < 4) {
    const fallback = defaultSkills.find((d) => canEquip(d)) ?? skills_default.skills.find((s) => canEquip(s.id))?.id;
    if (!fallback) break;
    addSkill(fallback);
  }
  return result;
}
function createFighter(heroId, customSkills, level = 1, stars = 1) {
  const h = HERO_MAP.get(heroId);
  if (!h) throw new Error(`Unknown hero: ${heroId}`);
  const baseStats = computeHeroStats(heroId, level, stars);
  const sigCfg = heroes_default.signatureByClass[h.rarity];
  const rawSkills = customSkills ? [...customSkills] : [...h.defaultSkills];
  const validSkills = sanitizeSkillLoadout(rawSkills, h.defaultSkills);
  return {
    id: h.id,
    name: h.name,
    rarity: h.rarity,
    element: h.element,
    role: h.role,
    baseStats,
    hp: baseStats.maxHp,
    sp: baseStats.maxSp,
    shield: 0,
    gauge: sigCfg.startGauge,
    skillSlots: validSkills,
    signatureName: h.signatureName,
    signatureEffect: h.signatureEffect,
    abilityId: h.ability?.id ?? "",
    abilityName: h.ability?.name ?? "",
    abilityDescription: h.ability?.description ?? "",
    reviveUsed: false,
    firstTurnDone: false,
    effects: [],
    ccResistStacks: 0,
    ccResistTurns: 0,
    sigUsedCount: 0
  };
}
function getElementMultiplier(attElem, defElem, attSide, mode = "actual") {
  const M = elements_default.multipliers;
  if (mode === "neutral") return M.neutral;
  if (mode === "A_adv") return attSide === "A" ? M.advantage : M.disadvantage;
  if (mode === "B_adv") return attSide === "B" ? M.advantage : M.disadvantage;
  const el = ELEMENT_MAP.get(attElem);
  if (!el) return M.neutral;
  if (el.strongAgainst.includes(defElem)) return M.advantage;
  if (el.weakAgainst.includes(defElem)) return M.disadvantage;
  return M.neutral;
}
function getEffectiveStats(f, enableAbilities = true) {
  const s = { ...f.baseStats };
  if (enableAbilities) {
    if (f.abilityId === "thunder_sprint") s.spd += 8;
    if (f.abilityId === "supersonic_dive") s.spd += 6;
    if (f.abilityId === "iron_scale_curl") s.block += 8;
    if (f.abilityId === "fire_chitin_shell") s.block += 12;
    if (f.abilityId === "aerobatic_hover") s.flee += 15;
    if (f.abilityId === "blazing_reflexes") {
      s.flee += 8;
      s.cri += 5;
    }
    if (f.abilityId === "monkey_acrobat") s.spd += 8;
    if (f.abilityId === "bullet_stinger") s.ab += 15;
    if (f.abilityId === "iron_crab_pincer") s.block += 10;
    if (f.abilityId === "glide_wave") {
      s.flee += 8;
      s.spd += 6;
    }
    if (f.abilityId === "death_roll_jaw") s.ab += 12;
    if (f.abilityId === "piercing_bill") s.ab += 15;
    if (f.abilityId === "apex_pod_hunter") {
      s.cri += 10;
      s.spd += 8;
    }
    if (f.abilityId === "stand_against_gale") s.block += 10;
    if (f.abilityId === "woodpecker_drill_beak") s.ab += 15;
    if (f.abilityId === "shockwave_double_kick") s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === "cassowary_dagger_claw") s.ab += 15;
    if (f.abilityId === "cheetah_sprint_burst") {
      s.spd += 10;
      s.flee += 8;
    }
    if (f.abilityId === "claw_break_stone") s.ab += 15;
    if (f.abilityId === "gorilla_ground_slam") s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === "burrow_ambush") {
      s.flee += 8;
      s.spd += 6;
    }
    if (f.abilityId === "cliff_stalker") {
      s.spd += 10;
      s.flee += 8;
    }
    if (f.abilityId === "sand_dragon_ambush") {
      s.cri += 10;
      s.spd += 8;
    }
    if (f.abilityId === "ancient_forest_hide") s.block += 12;
    if (f.abilityId === "titan_antler_charge") s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === "foliage_cloak") {
      s.flee += 8;
      s.spd += 6;
    }
    if (f.abilityId === "bush_ambush") {
      s.spd += 10;
      s.flee += 8;
    }
    if (f.abilityId === "canopy_shadow_fang") {
      s.cri += 10;
      s.spd += 8;
    }
    if (f.abilityId === "thousand_leg_fang") s.ab += 15;
    if (f.abilityId === "osteoderm_toxic_armor") s.block += 12;
    if (f.abilityId === "hourglass_ambush") {
      s.spd += 10;
      s.flee += 8;
    }
    if (f.abilityId === "deathstalker_stinger") {
      s.ab += 15;
      s.cri += 10;
    }
    if (f.abilityId === "ice_floe_hunter") s.ab += 15;
    if (f.abilityId === "frozen_bone_crusher") s.atk = Math.round(s.atk * 1.08);
    if (f.abilityId === "apex_polar_dominion") s.ab += 15;
    if (f.abilityId === "stoat_snow_dance") {
      s.flee += 8;
      s.spd += 6;
    }
    if (f.abilityId === "snowshoe_stalker") {
      s.spd += 10;
      s.flee += 8;
    }
    if (f.abilityId === "ghost_of_frozen_peaks") {
      s.ab += 15;
      s.cri += 10;
    }
    if (f.abilityId === "devil_bone_crusher_jaw") s.ab += 15;
    if (f.abilityId === "carrion_hunter_gaze") s.ab += 15;
    if (f.abilityId === "skull_piercing_fang") {
      s.ab += 15;
      s.cri += 10;
    }
    if (f.abilityId === "sand_burrow_puff") s.block += 12;
    if (f.abilityId === "sand_stealth_claw") s.ab += 15;
    if (f.abilityId === "infrared_heat_strike") {
      s.hit += 15;
      s.ab += 15;
    }
    if (f.abilityId === "golden_heavenly_steed") {
      s.atk = Math.round(s.atk * 1.1);
      s.ab += 20;
    }
    if (f.abilityId === "tufted_ear_spring") {
      s.cri += 12;
      s.flee += 8;
    }
    if (f.abilityId === "solar_apex_dive") {
      s.spd = Math.round(s.spd * 1.12);
      s.criDmg += 25;
    }
    if (f.abilityId === "cape_boss_charge") s.block += 15;
    if (f.abilityId === "cavitation_bubble_burst") s.ab += 18;
    if (f.abilityId === "supersonic_dash_mandibles") {
      s.spd += 8;
      s.flee += 6;
    }
    if (f.abilityId === "lightning_viper_strike") {
      s.hit += 15;
      s.cri += 10;
    }
  }
  let atkMult = 1, defMult = 1, spdMult = 1;
  for (const ef of f.effects) {
    const v = ef.value ?? 0;
    if (ef.type === "buff_atk") atkMult += v;
    if (ef.type === "debuff_atk") atkMult -= v;
    if (ef.type === "buff_def") defMult += v;
    if (ef.type === "debuff_def") defMult -= v;
    if (ef.type === "buff_spd") spdMult += v;
    if (ef.type === "debuff_spd") spdMult -= v;
    if (ef.type === "slow") {
      spdMult -= skills_default.statusRules.slow.spdRedPct;
      s.flee -= skills_default.statusRules.slow.fleeRed;
    }
    if (ef.type === "blind") {
      s.hit -= skills_default.statusRules.blind.hitRed;
      s.cri -= skills_default.statusRules.blind.criRed;
    }
    if (ef.type === "buff_cri") s.cri += v;
    if (ef.type === "debuff_cri") s.cri -= v;
    if (ef.type === "buff_flee") s.flee += v;
    if (ef.type === "buff_hit") s.hit += v;
    if (ef.type === "debuff_hit") s.hit -= v;
    if (ef.type === "buff_ab") s.ab += v;
    if (ef.type === "buff_block") s.block += v;
  }
  s.atk = Math.max(1, s.atk * Math.max(0.3, atkMult));
  s.def = Math.max(0, s.def * Math.max(0.2, defMult));
  s.spd = Math.max(10, s.spd * Math.max(0.3, spdMult));
  if (f.effects.some((e) => e.type === "root")) s.flee = 0;
  s.cri = Math.max(0, Math.min(80, s.cri));
  s.ab = Math.max(0, Math.min(70, s.ab));
  return s;
}

// src/engine/team_combat.ts
var HERO_MAP2 = new Map([...heroes_default.heroes, ...enemies_default.enemies].map((h) => [h.id, h]));
var SKILL_MAP2 = new Map(skills_default.skills.map((s) => [s.id, s]));
var ROW_PRIORITY = ["front", "mid", "back"];
function applyRoleAffinityBonus(f) {
  const h = HERO_MAP2.get(f.id);
  if (!h) return;
  const role = h.role;
  const row = f.pos.row;
  f.roleAffinityActive = false;
  f.roleAffinityDesc = "";
  if (role === "Tank" && row === "front") {
    f.roleAffinityActive = true;
    f.baseStats.def = Math.round(f.baseStats.def * 1.05);
    f.roleAffinityDesc = "Tank \u0E41\u0E19\u0E27\u0E2B\u0E19\u0E49\u0E32 (DEF +5%, Block +5%)";
  } else if (role === "Striker" && row === "front") {
    f.roleAffinityActive = true;
    f.baseStats.atk = Math.round(f.baseStats.atk * 1.04);
    f.roleAffinityDesc = "Striker \u0E41\u0E19\u0E27\u0E2B\u0E19\u0E49\u0E32 (ATK +4%, AB +4%)";
  } else if (role === "Assassin" && row === "mid") {
    f.roleAffinityActive = true;
    f.baseStats.spd += 3;
    f.roleAffinityDesc = "Assassin \u0E41\u0E16\u0E27\u0E01\u0E25\u0E32\u0E07 (CRI +4%, SPD +3)";
  } else if (role === "Controller" && (row === "mid" || row === "back")) {
    f.roleAffinityActive = true;
    f.baseStats.hit += 6;
    f.roleAffinityDesc = `Controller \u0E41\u0E16\u0E27${row === "mid" ? "\u0E01\u0E25\u0E32\u0E07" : "\u0E2B\u0E25\u0E31\u0E07"} (HIT +6, \u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E2A\u0E16\u0E32\u0E19\u0E30 +5%)`;
  } else if (role === "Supporter" && row === "back") {
    f.roleAffinityActive = true;
    f.baseStats.maxSp += 5;
    f.sp = f.baseStats.maxSp;
    f.roleAffinityDesc = "Supporter \u0E41\u0E16\u0E27\u0E2B\u0E25\u0E31\u0E07 (\u0E2E\u0E35\u0E25/\u0E40\u0E01\u0E23\u0E32\u0E30 +8%, Max SP +5)";
  }
}
function createTeamFighter(heroId, side, slotIndex, customPos, customSkills, level = 1, stars = 1) {
  const baseF = createFighter(heroId, customSkills, level, stars);
  const heroMeta = HERO_MAP2.get(heroId);
  const defaultRow = heroMeta?.preferredRow || "mid";
  const pos = customPos || {
    row: defaultRow,
    col: slotIndex % 3
  };
  const tf = {
    ...baseF,
    side,
    slotIndex,
    pos,
    roleAffinityActive: false,
    roleAffinityDesc: ""
  };
  applyRoleAffinityBonus(tf);
  return tf;
}
function hasStatus(f, type) {
  return f.effects.some((e) => e.type === type);
}
function applyEffectToTarget(target, effect, enableAbilities = true) {
  if (enableAbilities && target.abilityId === "omniscient_gaze" && !effect.type.startsWith("buff_") && effect.type !== "shield" && effect.type !== "cleanse" && effect.type !== "heal_pct") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E25\u0E1A\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E1A\u0E1A (${target.abilityName})`;
  }
  if (enableAbilities && effect.type === "blind" && target.abilityId === "hawk_eye") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14 (${target.abilityName})`;
  }
  if (effect.type === "cleanse") {
    const count = effect.count ?? 1;
    const removed = [];
    const debuffTypes = ["burn", "poison", "slow", "blind", "stun", "freeze", "root", "confusion", "bleed", "taunt", "sleep", "silence", "vulnerable", "debuff_atk", "debuff_def", "debuff_spd", "debuff_cri", "debuff_hit"];
    for (let i = 0; i < count; i++) {
      const idx = target.effects.findIndex((e) => debuffTypes.includes(e.type));
      if (idx !== -1) {
        removed.push(target.effects[idx].type);
        target.effects.splice(idx, 1);
      }
    }
    return removed.length ? `\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30 [${removed.join(", ")}]` : null;
  }
  const hardCcTypes = ["stun", "freeze", "root", "sleep"];
  if (hardCcTypes.includes(effect.type)) {
    const resistChance = Math.min(0.9, target.ccResistStacks * skills_default.statusRules.ccResistancePerStack);
    if (Math.random() < resistChance) {
      return `\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30 [${effect.type}] \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E30\u0E2A\u0E21 ${Math.round(resistChance * 100)}%)`;
    }
    target.ccResistStacks = Math.min(2, target.ccResistStacks + 1);
    target.ccResistTurns = skills_default.statusRules.ccResistanceDuration;
  }
  if (effect.type === "shield") {
    if (hasStatus(target, "vulnerable")) {
      return `\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30!`;
    }
    const val = effect.value ?? 0.15;
    const shieldAmt = Math.round(target.baseStats.maxHp * val);
    target.shield = (target.shield || 0) + shieldAmt;
    target.effects = target.effects.filter((e) => e.type !== "shield");
    target.effects.push({
      type: "shield",
      value: val,
      duration: effect.duration ?? 2
    });
    return `\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 +${shieldAmt} (${Math.round(val * 100)}% Max HP, ${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "heal_pct") {
    const val = effect.value ?? 0.1;
    const healAmt = Math.round(target.baseStats.maxHp * val);
    target.hp = Math.min(target.baseStats.maxHp, target.hp + healAmt);
    return `\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP +${healAmt}`;
  }
  if (effect.type === "sp_change") {
    const val = effect.value ?? 10;
    target.sp = Math.min(target.baseStats.maxSp, Math.max(0, target.sp + val));
    return `\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +${val}`;
  }
  if (effect.type === "gauge_change") {
    const val = effect.value ?? 10;
    target.gauge = Math.min(100, Math.max(0, target.gauge + val));
    return `\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +${val}`;
  }
  if (effect.type === "poison") {
    const addStacks = effect.stacks ?? 1;
    const ex = target.effects.find((e) => e.type === "poison");
    if (ex) {
      ex.stacks = Math.min(skills_default.statusRules.poison.maxStacks, (ex.stacks ?? 1) + addStacks);
      ex.duration = Math.max(ex.duration, effect.duration ?? 3);
      return `\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2A\u0E30\u0E2A\u0E21 (${ex.stacks} \u0E0A\u0E31\u0E49\u0E19, ${ex.duration} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
    }
    target.effects.push({
      type: "poison",
      duration: effect.duration ?? 3,
      stacks: addStacks
    });
    return `\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 (${addStacks} \u0E0A\u0E31\u0E49\u0E19, ${effect.duration ?? 3} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "confusion") {
    const ex = target.effects.find((e) => e.type === "confusion");
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: "confusion", duration: effect.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "bleed") {
    const ex = target.effects.find((e) => e.type === "bleed");
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: "bleed", duration: effect.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "taunt") {
    const ex = target.effects.find((e) => e.type === "taunt");
    const srcId = effect.sourceId;
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
      if (srcId) ex.sourceId = srcId;
    } else {
      target.effects.push({ type: "taunt", duration: effect.duration ?? 2, sourceId: srcId });
    }
    return `\u0E15\u0E34\u0E14\u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "sleep") {
    const ex = target.effects.find((e) => e.type === "sleep");
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: "sleep", duration: effect.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25 (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "silence") {
    const ex = target.effects.find((e) => e.type === "silence");
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: "silence", duration: effect.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E43\u0E1A\u0E49 (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "vulnerable") {
    const ex = target.effects.find((e) => e.type === "vulnerable");
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: "vulnerable", duration: effect.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  target.effects.push({
    type: effect.type,
    duration: effect.duration ?? 2,
    value: effect.value
  });
  return `\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30 [${effect.type}] (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
}
var TeamBattleSession = class {
  round = 0;
  totalActions = 0;
  squadA;
  squadB;
  logs = [];
  winner = null;
  options;
  constructor(teamAHeroIds, teamBHeroIds, options = {}) {
    const enableSkillEffects = options.enableSkillEffects ?? true;
    this.options = {
      maxTurns: options.maxTurns ?? 50,
      enableSkillEffects,
      enableSameElementBonus: options.enableSameElementBonus ?? enableSkillEffects,
      enableAbilities: options.enableAbilities ?? enableSkillEffects,
      forcedElementAdvantage: options.forcedElementAdvantage ?? "actual",
      teamAPositions: options.teamAPositions,
      teamBPositions: options.teamBPositions,
      customSkillsA: options.customSkillsA,
      customSkillsB: options.customSkillsB,
      teamALevels: options.teamALevels,
      teamAStars: options.teamAStars,
      teamBLevels: options.teamBLevels,
      teamBStars: options.teamBStars
    };
    this.squadA = {
      side: "A",
      autoCastSignature: true,
      fighters: teamAHeroIds.map(
        (id, idx) => createTeamFighter(
          id,
          "A",
          idx,
          this.options.teamAPositions?.[idx],
          this.options.customSkillsA?.[idx],
          this.options.teamALevels?.[idx] ?? 1,
          this.options.teamAStars?.[idx] ?? 1
        )
      )
    };
    this.squadB = {
      side: "B",
      autoCastSignature: true,
      fighters: teamBHeroIds.map(
        (id, idx) => createTeamFighter(
          id,
          "B",
          idx,
          this.options.teamBPositions?.[idx],
          this.options.customSkillsB?.[idx],
          this.options.teamBLevels?.[idx] ?? 1,
          this.options.teamBStars?.[idx] ?? 1
        )
      )
    };
  }
  getLivingFighters(squad) {
    return squad.fighters.filter((f) => f.hp > 0);
  }
  isSquadWiped(squad) {
    return this.getLivingFighters(squad).length === 0;
  }
  getLivingSquad(side) {
    return side === "A" ? this.squadA : this.squadB;
  }
  getOpposingSquad(side) {
    return side === "A" ? this.squadB : this.squadA;
  }
  /**
   * ค้นหาศัตรูในแถวหน้าสุดที่ยังมีชีวิตอยู่ (front -> mid -> back)
   */
  getFrontmostLivingRow(squad) {
    const living = this.getLivingFighters(squad);
    if (!living.length) return null;
    for (const r of ROW_PRIORITY) {
      if (living.some((f) => f.pos.row === r)) return r;
    }
    return null;
  }
  /**
   * ระบบเลือกเป้าหมายตามกฎ:
   * 1. Single Target ปกติ: เล็งแถวหน้าสุดที่ยังมีชีวิต
   * 2. Backline Infiltration: Assassin (60%), Controller (40%), Supporter (25%) มีโอกาสข้ามไปตีแถวหลัง
   * 3. Row Cleave: เล็งศัตรูทั้งหมดในแถวหน้าสุด
   * 4. Full AOE: เล็งศัตรูทุกคนในสนาม
   * 5. Team Support: เล็งพันธมิตรทุกคน
   */
  selectTargets(attacker, targetScope = "single_enemy") {
    const opposingSquad = this.getOpposingSquad(attacker.side);
    const friendlySquad = this.getLivingSquad(attacker.side);
    const livingEnemies = this.getLivingFighters(opposingSquad);
    const livingAllies = this.getLivingFighters(friendlySquad);
    if (!livingEnemies.length) return [];
    if (targetScope === "all_allies") {
      return livingAllies;
    }
    if (targetScope === "all_enemies") {
      return livingEnemies;
    }
    if (targetScope === "front_enemies") {
      const frontRow2 = this.getFrontmostLivingRow(opposingSquad);
      if (!frontRow2) return livingEnemies;
      return livingEnemies.filter((f) => f.pos.row === frontRow2);
    }
    const tauntEff = attacker.effects.find((e) => e.type === "taunt");
    if (tauntEff) {
      if (tauntEff.sourceId) {
        const taunter = livingEnemies.find((f) => f.id === tauntEff.sourceId || `${f.side}_${f.slotIndex}` === tauntEff.sourceId);
        if (taunter) return [taunter];
      }
      if (livingEnemies.length > 0) return [livingEnemies[0]];
    }
    const heroMeta = HERO_MAP2.get(attacker.id);
    const backlineChance = heroMeta?.backlineChance ?? 0;
    const canInfiltrate = backlineChance > 0 && Math.random() < backlineChance;
    if (canInfiltrate) {
      const reversedRows = ["back", "mid", "front"];
      for (const r of reversedRows) {
        const rowEnemies2 = livingEnemies.filter((f) => f.pos.row === r);
        if (rowEnemies2.length > 0) {
          rowEnemies2.sort((a, b) => a.hp - b.hp);
          return [rowEnemies2[0]];
        }
      }
    }
    const frontRow = this.getFrontmostLivingRow(opposingSquad);
    const rowEnemies = livingEnemies.filter((f) => f.pos.row === frontRow);
    if (rowEnemies.length > 0) {
      const sameCol = rowEnemies.find((f) => f.pos.col === attacker.pos.col);
      if (sameCol) return [sameCol];
      rowEnemies.sort((a, b) => a.hp - b.hp);
      return [rowEnemies[0]];
    }
    return [livingEnemies[0]];
  }
  /**
   * ดำเนินการ 1 รอบ (Round):
   * 1. นำนักสู้ทุกคนที่ยังมีชีวิตมาจัดคิวตาม SPD (Individual Speed Queue)
   * 2. แต่ละตัวออกแอ็กชันตามลำดับคิว
   */
  stepRound() {
    if (this.winner) return true;
    this.round++;
    const allLiving = [
      ...this.getLivingFighters(this.squadA),
      ...this.getLivingFighters(this.squadB)
    ];
    if (!allLiving.length) {
      this.winner = "DRAW";
      return true;
    }
    allLiving.sort((a, b) => {
      const spdA = getEffectiveStats(a, this.options.enableAbilities).spd;
      const spdB = getEffectiveStats(b, this.options.enableAbilities).spd;
      return spdB - spdA;
    });
    for (const actor of allLiving) {
      if (actor.hp <= 0) continue;
      if (this.isSquadWiped(this.squadA)) {
        this.winner = "B";
        return true;
      }
      if (this.isSquadWiped(this.squadB)) {
        this.winner = "A";
        return true;
      }
      this.executeFighterTurn(actor);
    }
    if (this.isSquadWiped(this.squadA)) {
      this.winner = "B";
      return true;
    }
    if (this.isSquadWiped(this.squadB)) {
      this.winner = "A";
      return true;
    }
    if (this.round >= 30) {
      const hpPctA = this.squadA.fighters.reduce((s, f) => s + f.hp, 0) / this.squadA.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      const hpPctB = this.squadB.fighters.reduce((s, f) => s + f.hp, 0) / this.squadB.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      this.winner = hpPctA > hpPctB ? "A" : hpPctB > hpPctA ? "B" : "DRAW";
      return true;
    }
    return false;
  }
  executeFighterTurn(f) {
    this.totalActions++;
    if (hasStatus(f, "stun") || hasStatus(f, "freeze") || hasStatus(f, "sleep")) {
      const isSleep = hasStatus(f, "sleep");
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: "-",
        actionType: "skip",
        actionName: isSleep ? "\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25" : "\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27",
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: isSleep ? `[\u0E23\u0E2D\u0E1A ${this.round}] \u{1F4A4} ${f.name} (\u0E1D\u0E31\u0E48\u0E07 ${f.side}) \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E2B\u0E49\u0E27\u0E07\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25\u0E25\u0E36\u0E01 \u0E02\u0E49\u0E32\u0E21\u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19!` : `[\u0E23\u0E2D\u0E1A ${this.round}] ${f.name} (\u0E1D\u0E31\u0E48\u0E07 ${f.side}) \u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E15\u0E31\u0E19/\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 \u0E02\u0E49\u0E32\u0E21\u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19!`
      });
      this.tickStatuses(f);
      return;
    }
    this.processStartOfTurn(f);
    if (f.hp <= 0) {
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: "-",
        actionType: "status",
        actionName: "\u0E25\u0E49\u0E21\u0E25\u0E07\u0E08\u0E32\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34",
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] ${f.name} (\u0E1D\u0E31\u0E48\u0E07 ${f.side}) \u0E25\u0E49\u0E21\u0E25\u0E07\u0E43\u0E19\u0E2A\u0E19\u0E32\u0E21!`
      });
      return;
    }
    if (hasStatus(f, "confusion")) {
      if (Math.random() < 0.6) {
        const selfDmg = Math.round(f.baseStats.maxHp * 0.12);
        this.applyDamageToTarget(f, selfDmg);
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: f.name,
          actionType: "status",
          actionName: "\u0E2A\u0E31\u0E1A\u0E2A\u0E19",
          damage: selfDmg,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[\u0E23\u0E2D\u0E1A ${this.round}] \u{1F300} ${f.name} (\u0E1D\u0E31\u0E48\u0E07 ${f.side}) \u0E40\u0E01\u0E34\u0E14\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07! \u0E2B\u0E31\u0E19\u0E21\u0E32\u0E17\u0E33\u0E23\u0E49\u0E32\u0E22\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 -${selfDmg} HP (12% Max HP) \u0E41\u0E25\u0E30\u0E02\u0E49\u0E32\u0E21\u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19\u0E43\u0E19\u0E23\u0E2D\u0E1A\u0E19\u0E35\u0E49! (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`
        });
        this.tickStatuses(f);
        return;
      } else {
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: "-",
          actionType: "status",
          actionName: "\u0E2A\u0E31\u0E1A\u0E2A\u0E19",
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[\u0E23\u0E2D\u0E1A ${this.round}] \u{1F300} ${f.name} (\u0E1D\u0E31\u0E48\u0E07 ${f.side}) \u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E31\u0E1A\u0E2A\u0E19 \u0E41\u0E15\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E2A\u0E21\u0E32\u0E18\u0E34\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E15\u0E34\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E2D\u0E2D\u0E01\u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19!`
        });
      }
    }
    if (hasStatus(f, "bleed")) {
      const bAct = Math.round(f.baseStats.maxHp * skills_default.statusRules.bleed.actionDamageHpPct);
      this.applyDamageToTarget(f, bAct);
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: f.name,
        actionType: "status",
        actionName: "\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25",
        damage: bAct,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] \u{1FA78} ${f.name} (\u0E1D\u0E31\u0E48\u0E07 ${f.side}) \u0E40\u0E2A\u0E35\u0E22\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27 -${bAct} HP! (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`
      });
      if (f.hp <= 0) {
        this.tickStatuses(f);
        return;
      }
    }
    const isSilenced = hasStatus(f, "silence");
    const sigCfg = getSignatureConfig(f.rarity);
    if (!isSilenced) {
      f.gauge = Math.min(100, f.gauge + sigCfg.gainPerTurn);
    }
    if (!isSilenced && f.gauge >= 100) {
      f.gauge = 0;
      f.sigUsedCount++;
      this.performSignature(f);
      this.tickStatuses(f);
      return;
    }
    if (!isSilenced) {
      for (const slotId of f.skillSlots) {
        const sk = SKILL_MAP2.get(slotId);
        if (!sk) continue;
        if (sk.id === "secret_l" && hasStatus(f, "shadow_clone")) continue;
        const spCost = getSkillSpCost(sk.tier, sk.id);
        if (f.sp < spCost) continue;
        const isSameElem = this.options.enableSameElementBonus && sk.element === f.element;
        const procChance = sk.baseChance * (isSameElem ? elements_default.multipliers.sameElementChanceBonus : 1);
        if (Math.random() < procChance) {
          f.sp -= spCost;
          this.performSkill(f, sk, spCost);
          this.tickStatuses(f);
          return;
        }
      }
    }
    const breathBonus = isSilenced ? 0 : heroes_default.statFormula.spNormalAttackBonus ?? 6;
    if (breathBonus > 0) {
      f.sp = Math.min(f.baseStats.maxSp, f.sp + breathBonus);
    }
    this.performNormalAttack(f, breathBonus);
    this.tickStatuses(f);
  }
  processStartOfTurn(f) {
    let dotDmg = 0;
    if (this.options.enableSkillEffects) {
      for (const ef of f.effects) {
        if (ef.type === "burn") {
          const wineMistMult = hasStatus(f, "wine_mist") ? 1.5 : 1;
          dotDmg += f.baseStats.maxHp * skills_default.statusRules.burn.hpLossPctPerTurn * wineMistMult;
        } else if (ef.type === "poison") {
          const stacks = ef.stacks ?? 1;
          dotDmg += f.baseStats.maxHp * skills_default.statusRules.poison.hpLossPctPerTurn * stacks;
        } else if (ef.type === "raging_thunder") {
          const enemySquad = f.side === "A" ? this.squadB : this.squadA;
          const friendlySquad = f.side === "A" ? this.squadA : this.squadB;
          const livingEnemies = this.getLivingFighters(enemySquad);
          const livingAllies = this.getLivingFighters(friendlySquad);
          const isFriendly = Math.random() < 0.3;
          const pool = isFriendly ? livingAllies.length ? livingAllies : livingEnemies : livingEnemies.length ? livingEnemies : livingAllies;
          if (pool.length) {
            const tgt = pool[Math.floor(Math.random() * pool.length)];
            const tDef = getEffectiveStats(tgt, this.options.enableAbilities).def;
            const tDmg = Math.max(1, Math.round(f.baseStats.atk * 0.7 - tDef * 0.5));
            this.applyDamageToTarget(tgt, tDmg);
            const tag = isFriendly ? "\u26A1\u{1F4A5} \u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E1E\u0E27\u0E01\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E40\u0E2D\u0E07!" : "\u26A1 \u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07\u0E1C\u0E48\u0E32\u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39!";
            this.recordEvent({
              turn: this.round,
              actorSide: f.side,
              actorName: f.name,
              targetName: tgt.name,
              actionType: "status",
              actionName: "\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07",
              damage: tDmg,
              healed: 0,
              shieldGained: 0,
              isCrit: false,
              isMiss: false,
              elementMult: 1,
              appliedEffects: [],
              message: `[\u0E23\u0E2D\u0E1A ${this.round}] ${tag} ${tgt.name} \u0E40\u0E2A\u0E35\u0E22 HP -${tDmg}`
            });
          }
        }
      }
    }
    if (dotDmg > 0) {
      const dotReduction = this.options.enableAbilities && f.abilityId === "mud_hide" ? 0.6 : 1;
      dotDmg = Math.round(dotDmg * dotReduction);
      f.hp = Math.max(0, f.hp - dotDmg);
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: "-",
        actionType: "status",
        actionName: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E08\u0E32\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E30",
        damage: Math.round(dotDmg),
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] ${f.name} \u0E40\u0E2A\u0E35\u0E22 HP \u0E08\u0E32\u0E01\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E1E\u0E34\u0E29 -${Math.round(dotDmg)} (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`
      });
    }
    if (f.sp < f.baseStats.maxSp) {
      const spGain = Math.min(f.baseStats.maxSp - f.sp, f.baseStats.spRegen);
      f.sp += spGain;
    }
  }
  performNormalAttack(att, breathBonus) {
    const targets = this.selectTargets(att, "single_enemy");
    if (!targets.length) return;
    const def = targets[0];
    const attStats = getEffectiveStats(att, this.options.enableAbilities);
    const defStats = getEffectiveStats(def, this.options.enableAbilities);
    const hitChance = Math.max(0.5, Math.min(1, (attStats.hit - defStats.flee) / 100));
    if (Math.random() > hitChance) {
      this.recordEvent({
        turn: this.round,
        actorSide: att.side,
        actorName: att.name,
        targetName: def.name,
        actionType: "normal",
        actionName: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32",
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: true,
        elementMult: 1,
        appliedEffects: [`\u0E1E\u0E31\u0E01\u0E2B\u0E32\u0E22\u0E43\u0E08 +${breathBonus} SP`],
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] ${att.name} \u0E43\u0E0A\u0E49 [\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32] \u0E43\u0E2A\u0E48 ${def.name} \u0E41\u0E15\u0E48\u0E1E\u0E25\u0E32\u0E14 (MISS)! (\u0E1E\u0E31\u0E01\u0E2B\u0E32\u0E22\u0E43\u0E08 +${breathBonus} SP)`
      });
      return;
    }
    const elemMult = getElementMultiplier(att.element, def.element, att.side, this.options.forcedElementAdvantage);
    let isCrit = Math.random() < attStats.cri / 100;
    let critMult = isCrit ? attStats.criDmg : 1;
    const appliedEffects = [`\u0E1E\u0E31\u0E01\u0E2B\u0E32\u0E22\u0E43\u0E08 +${breathBonus} SP`];
    if (hasStatus(def, "sleep")) {
      isCrit = true;
      critMult = attStats.criDmg * skills_default.statusRules.sleep.wakeDmgMult;
      def.effects = def.effects.filter((e) => e.type !== "sleep");
      appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
    }
    const K = heroes_default.statFormula.defConstantK;
    const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
    const effDef = defStats.def * (1 - pierce);
    const baseDmg = Math.max(1, attStats.atk * (K / (K + effDef)));
    let finalDmg = Math.round(baseDmg * elemMult * critMult);
    if (hasStatus(def, "vulnerable")) {
      finalDmg = Math.round(finalDmg * (1 + skills_default.statusRules.vulnerable.extraDmgPct));
      appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
    }
    if (hasStatus(att, "taunt")) {
      finalDmg = Math.round(finalDmg * (1 - skills_default.statusRules.taunt.dmgReductionPct));
      appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
    }
    if (this.options.enableAbilities) {
      if (def.abilityId === "mud_hide" && Math.random() < 0.5) {
        finalDmg = Math.round(finalDmg * 0.75);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27 \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 25%`);
      }
      if (def.abilityId === "bufotoxin_skin") {
        finalDmg = Math.round(finalDmg * 0.9);
        if (Math.random() < 0.55) {
          applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
        }
      }
    }
    this.applyDamageToTarget(def, finalDmg);
    if (hasStatus(def, "bleed")) {
      const bHit = Math.round(def.baseStats.maxHp * skills_default.statusRules.bleed.onHitDamageHpPct);
      this.applyDamageToTarget(def, bHit);
      appliedEffects.push(`\u{1FA78} \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25\u0E0B\u0E49\u0E33 -${bHit} HP`);
    }
    const critTag = isCrit ? " [CRIT!]" : "";
    const elemTag = elemMult > 1 ? " (\u0E0A\u0E19\u0E30\u0E18\u0E32\u0E15\u0E38 \xD71.3)" : elemMult < 1 ? " (\u0E41\u0E1E\u0E49\u0E18\u0E32\u0E15\u0E38 \xD70.85)" : "";
    this.recordEvent({
      turn: this.round,
      actorSide: att.side,
      actorName: att.name,
      targetName: def.name,
      actionType: "normal",
      actionName: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32",
      damage: finalDmg,
      healed: 0,
      shieldGained: 0,
      isCrit,
      isMiss: false,
      elementMult: elemMult,
      appliedEffects,
      message: `[\u0E23\u0E2D\u0E1A ${this.round}] ${att.name} \u0E43\u0E0A\u0E49 [\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32] \u0E42\u0E08\u0E21\u0E15\u0E35 ${def.name} \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 ${finalDmg}${critTag}${elemTag} | \u0E1E\u0E31\u0E01\u0E2B\u0E32\u0E22\u0E43\u0E08 +${breathBonus} SP (HP ${def.name}: ${Math.round(def.hp)}/${def.baseStats.maxHp})`
    });
  }
  performSkill(att, sk, spCost) {
    const scope = sk.targetScope || "single_enemy";
    const targets = this.selectTargets(att, scope);
    const appliedEffects = [];
    if (sk.damageMult === 0) {
      let totalHeal = 0;
      let totalShield = 0;
      const targetReports = [];
      for (const ef of sk.effects) {
        const efTarget = ef.target;
        const chance = ef.chance ?? 1;
        if (Math.random() > chance) continue;
        let recipients = [];
        if (efTarget === "self") {
          recipients = [att];
        } else if (efTarget === "all_allies" || scope === "all_allies") {
          recipients = this.getLivingFighters(this.getLivingSquad(att.side));
        } else if (efTarget === "all_enemies" || scope === "all_enemies") {
          recipients = this.getLivingFighters(this.getOpposingSquad(att.side));
        } else {
          recipients = targets;
        }
        for (const tgt of recipients) {
          const efPayload = { ...ef, sourceId: `${att.side}_${att.slotIndex}` };
          const res = applyEffectToTarget(tgt, efPayload);
          if (res) targetReports.push(`${tgt.name}: ${res}`);
        }
      }
      this.recordEvent({
        turn: this.round,
        actorSide: att.side,
        actorName: att.name,
        targetName: targetReports.length ? targetReports.map((r) => r.split(":")[0]).join(", ") : att.name,
        actionType: "skill",
        actionName: sk.name,
        skillTier: sk.tier,
        damage: 0,
        healed: totalHeal,
        shieldGained: totalShield,
        spCost,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: targetReports,
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] ${att.name} \u0E43\u0E0A\u0E49 [${sk.name}] (-${spCost} SP) \u2192 ${targetReports.join(", ")}`
      });
      return;
    }
    const attStats = getEffectiveStats(att, this.options.enableAbilities);
    const hitReports = [];
    for (const def of targets) {
      const defStats = getEffectiveStats(def, this.options.enableAbilities);
      const hitChance = Math.max(0.5, Math.min(1, (attStats.hit - defStats.flee) / 100));
      if (Math.random() > hitChance) {
        hitReports.push(`${def.name} \u0E2B\u0E25\u0E1A\u0E44\u0E14\u0E49 (MISS)`);
        continue;
      }
      const elemMult = getElementMultiplier(sk.element, def.element, att.side, this.options.forcedElementAdvantage);
      let isCrit = Math.random() < attStats.cri / 100;
      let critMult = isCrit ? attStats.criDmg : 1;
      if (hasStatus(def, "sleep")) {
        isCrit = true;
        critMult = attStats.criDmg * skills_default.statusRules.sleep.wakeDmgMult;
        def.effects = def.effects.filter((e) => e.type !== "sleep");
        appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
      }
      const K = heroes_default.statFormula.defConstantK;
      const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
      const effDef = defStats.def * (1 - pierce);
      const baseDmg = Math.max(1, attStats.atk * sk.damageMult * (K / (K + effDef)));
      let finalDmg = Math.round(baseDmg * elemMult * critMult);
      if (this.options.enableSameElementBonus && sk.element === att.element) {
        finalDmg = Math.round(finalDmg * (1 + elements_default.multipliers.sameElementDamageBonus));
      }
      if (hasStatus(def, "vulnerable")) {
        finalDmg = Math.round(finalDmg * (1 + skills_default.statusRules.vulnerable.extraDmgPct));
        appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
      }
      if (hasStatus(att, "taunt")) {
        finalDmg = Math.round(finalDmg * (1 - skills_default.statusRules.taunt.dmgReductionPct));
        appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
      }
      if (this.options.enableAbilities) {
        if (def.abilityId === "mud_hide" && Math.random() < 0.5) {
          finalDmg = Math.round(finalDmg * 0.75);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27 \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 25%`);
        }
        if (def.abilityId === "bufotoxin_skin") {
          finalDmg = Math.round(finalDmg * 0.9);
          if (Math.random() < 0.55) {
            applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
          }
        }
      }
      this.applyDamageToTarget(def, finalDmg);
      if (hasStatus(def, "bleed")) {
        const bHit = Math.round(def.baseStats.maxHp * skills_default.statusRules.bleed.onHitDamageHpPct);
        this.applyDamageToTarget(def, bHit);
        appliedEffects.push(`\u{1FA78} \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25\u0E0B\u0E49\u0E33 -${bHit} HP`);
      }
      for (const ef of sk.effects) {
        const chance = ef.chance ?? 1;
        if (Math.random() < chance) {
          const efTarget = ef.target;
          const recipient = efTarget === "self" ? att : def;
          const efPayload = { ...ef, sourceId: `${att.side}_${att.slotIndex}` };
          const res = applyEffectToTarget(recipient, efPayload);
          if (res) appliedEffects.push(res);
        }
      }
      hitReports.push(`${def.name} \u0E42\u0E14\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08 ${finalDmg}${isCrit ? " [CRIT!]" : ""}`);
    }
    this.recordEvent({
      turn: this.round,
      actorSide: att.side,
      actorName: att.name,
      targetName: targets.map((t) => t.name).join(", "),
      actionType: "skill",
      actionName: sk.name,
      skillTier: sk.tier,
      damage: 0,
      healed: 0,
      shieldGained: 0,
      spCost,
      isCrit: false,
      isMiss: false,
      elementMult: 1,
      appliedEffects,
      message: `[\u0E23\u0E2D\u0E1A ${this.round}] ${att.name} \u0E43\u0E0A\u0E49 [${sk.name}] (-${spCost} SP) \u0E42\u0E08\u0E21\u0E15\u0E35 [${hitReports.join(" | ")}]`
    });
  }
  performSignature(att) {
    const heroMeta = HERO_MAP2.get(att.id);
    const sigCfg = getSignatureConfig(att.rarity);
    const damageMult = heroMeta?.customSigMult !== void 0 ? heroMeta.customSigMult : sigCfg.damageMult;
    const appliedEffects = [];
    const friendlyLiving = this.getLivingFighters(this.getLivingSquad(att.side));
    const enemyLiving = this.getLivingFighters(this.getOpposingSquad(att.side));
    if (att.id === "lion") {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: "buff_atk", value: 0.2, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_spd", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E33\u0E23\u0E32\u0E21\u0E1B\u0E25\u0E38\u0E01\u0E02\u0E27\u0E31\u0E0D: \u0E1A\u0E31\u0E1F\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 ATK +20%, SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "deer") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.12);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "shield", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
      }
      appliedEffects.push("\u0E40\u0E02\u0E32\u0E01\u0E27\u0E32\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 12%, \u0E40\u0E01\u0E23\u0E32\u0E30 15% \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP");
    } else if (att.id === "turtle") {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: "shield", value: 0.15, duration: 2 });
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E27\u0E32\u0E23\u0E35: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "squirrel") {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: "buff_hit", value: 20, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_cri", value: 12, duration: 2 });
      }
      appliedEffects.push("\u0E25\u0E33\u0E41\u0E2A\u0E07\u0E1E\u0E27\u0E07\u0E2B\u0E32\u0E07: \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 HIT +20 \u0E41\u0E25\u0E30 CRI% +12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "flamingo") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E1D\u0E39\u0E07: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, +15 SP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "capybara") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_def", value: 0.2, duration: 2 });
      }
      appliedEffects.push("\u0E27\u0E32\u0E23\u0E35\u0E2D\u0E38\u0E48\u0E19\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "sun_stag") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 25);
        applyEffectToTarget(ally, { type: "buff_atk", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E41\u0E2A\u0E07\u0E2D\u0E23\u0E38\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14\u0E43\u0E2B\u0E21\u0E48: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, +25 SP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F ATK +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "starfish") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_def", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E14\u0E32\u0E23\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "sea_otter") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
        applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E44\u0E02\u0E48\u0E21\u0E38\u0E01\u0E27\u0E32\u0E23\u0E35\u0E04\u0E38\u0E49\u0E21\u0E17\u0E31\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, +15 SP \u0E41\u0E25\u0E30\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP");
    } else if (att.id === "dolphin") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "buff_spd", value: 0.2, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "dove") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_spd", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E1B\u0E35\u0E01\u0E2A\u0E31\u0E19\u0E15\u0E34\u0E20\u0E32\u0E1E\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "swan") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E27\u0E32\u0E22\u0E38\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "quetzal") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "buff_spd", value: 0.25, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_flee", value: 15, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E2A\u0E32\u0E22\u0E25\u0E21: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +25%/FLEE +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "pig") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_def", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E42\u0E04\u0E25\u0E19\u0E41\u0E23\u0E48\u0E18\u0E32\u0E15\u0E38\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "wombat") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_def", value: 0.2, duration: 2 });
      }
      appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E1E\u0E23\u0E07\u0E14\u0E34\u0E19\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "giraffe") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E1E\u0E23\u0E21\u0E34\u0E48\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E41\u0E2B\u0E48\u0E07\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "koala") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_def", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E42\u0E2D\u0E1A\u0E19\u0E34\u0E17\u0E23\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "hornbill") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "regen", value: 0.06, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E1E\u0E23\u0E21\u0E2B\u0E32\u0E27\u0E19\u0E32\u0E25\u0E31\u0E22\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E23\u0E35\u0E40\u0E08\u0E19 6% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "bee") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_def", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push("\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E21\u0E1C\u0E36\u0E49\u0E07\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E23\u0E31\u0E07: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, \u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30 +10 SP");
    } else if (att.id === "salamander") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget(ally, { type: "regen", value: 0.06, duration: 2 });
      }
      appliedEffects.push("\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E0B\u0E32\u0E25\u0E32\u0E41\u0E21\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "horseshoe_crab") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "shield", value: 0.15, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E25\u0E2B\u0E34\u0E15\u0E04\u0E23\u0E32\u0E21\u0E25\u0E49\u0E32\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "krill") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_def", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push("\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E2D\u0E2D\u0E42\u0E23\u0E23\u0E32\u0E1D\u0E39\u0E07\u0E40\u0E04\u0E22\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, \u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30 +10 SP");
    } else if (att.id === "beluga") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E1E\u0E25\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E17\u0E31\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "reindeer") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "regen", value: 0.06, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E21\u0E07\u0E01\u0E38\u0E0E\u0E41\u0E2A\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "cockroach") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "buff_def", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push("\u0E1F\u0E35\u0E42\u0E23\u0E42\u0E21\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E23\u0E27\u0E21\u0E1D\u0E39\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, \u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30 +10 SP");
    } else if (att.id === "tokay_gecko") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E01\u0E39\u0E48\u0E01\u0E49\u0E2D\u0E07\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "axolotl") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "regen", value: 0.06, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E07\u0E32\u0E21\u0E37\u0E14: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "alpaca") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1B\u0E38\u0E22\u0E02\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E42\u0E2D\u0E1A\u0E2D\u0E38\u0E49\u0E21: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "white_elephant") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.26);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1A\u0E32\u0E23\u0E21\u0E35\u0E04\u0E0A\u0E2A\u0E32\u0E23\u0E40\u0E1C\u0E37\u0E2D\u0E01\u0E41\u0E2A\u0E07\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E04\u0E38\u0E49\u0E21\u0E40\u0E01\u0E25\u0E49\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 26%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "star_nosed_mole") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
      }
      appliedEffects.push("\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E41\u0E2A\u0E07\u0E19\u0E33\u0E17\u0E31\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E40\u0E15\u0E34\u0E21 +15 SP");
    } else if (att.id === "mouflon") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_spd", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15\u0E02\u0E19\u0E41\u0E01\u0E30\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "okapi") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.26);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget(ally, { type: "buff_atk", value: 0.2, duration: 2 });
        applyEffectToTarget(ally, { type: "buff_spd", value: 0.2, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E49\u0E19\u0E0A\u0E35\u0E1E\u0E08\u0E23\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E25\u0E36\u0E01\u0E25\u0E31\u0E1A: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 26%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E1A\u0E31\u0E1F ATK +20% & SPD +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "hamster") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
      }
      appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E08\u0E34\u0E15\u0E40\u0E01\u0E37\u0E49\u0E2D\u0E2B\u0E19\u0E38\u0E19\u0E14\u0E27\u0E07\u0E43\u0E08: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP");
    } else if (att.id === "crane") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.2);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E08\u0E34\u0E15\u0E0A\u0E33\u0E23\u0E30\u0E21\u0E25\u0E17\u0E34\u0E19: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 20% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "blue_whale") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 20);
        applyEffectToTarget(ally, { type: "buff_hit", value: 15, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E08\u0E34\u0E15\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +20 SP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F HIT +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "mammoth") {
      for (const ally of friendlyLiving) {
        applyEffectToTarget(ally, { type: "buff_def", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E07\u0E32\u0E0A\u0E49\u0E32\u0E07\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19: \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    }
    if (damageMult > 0) {
      const effectTarget = heroMeta?.signatureEffect?.target;
      const scope = effectTarget === "all_enemies" ? "all_enemies" : effectTarget === "front_enemies" ? "front_enemies" : "single_enemy";
      const targets = scope === "all_enemies" ? enemyLiving : this.selectTargets(att, scope);
      const hitReports = [];
      for (const def of targets) {
        const elemMult = getElementMultiplier(att.element, def.element, att.side, this.options.forcedElementAdvantage);
        const attStats = getEffectiveStats(att, this.options.enableAbilities);
        const defStats = getEffectiveStats(def, this.options.enableAbilities);
        let isCrit = false;
        let critMult = 1;
        if (hasStatus(def, "sleep")) {
          isCrit = true;
          critMult = 1.5 * skills_default.statusRules.sleep.wakeDmgMult;
          def.effects = def.effects.filter((e) => e.type !== "sleep");
          appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
        }
        const K = heroes_default.statFormula.defConstantK;
        const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
        const effDef = defStats.def * (1 - pierce);
        const baseDmg = Math.max(1, attStats.atk * damageMult * (K / (K + effDef)));
        let finalDmg = Math.round(baseDmg * elemMult * critMult);
        if (hasStatus(def, "vulnerable")) {
          finalDmg = Math.round(finalDmg * (1 + skills_default.statusRules.vulnerable.extraDmgPct));
          appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
        }
        if (hasStatus(att, "taunt")) {
          finalDmg = Math.round(finalDmg * (1 - skills_default.statusRules.taunt.dmgReductionPct));
          appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
        }
        if (this.options.enableAbilities) {
          if (def.abilityId === "mud_hide" && Math.random() < 0.5) {
            finalDmg = Math.round(finalDmg * 0.75);
            appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27 \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 25%`);
          }
          if (def.abilityId === "bufotoxin_skin") {
            finalDmg = Math.round(finalDmg * 0.9);
            if (Math.random() < 0.55) {
              applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
              appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
            }
          }
        }
        this.applyDamageToTarget(def, finalDmg);
        if (hasStatus(def, "bleed")) {
          const bHit = Math.round(def.baseStats.maxHp * skills_default.statusRules.bleed.onHitDamageHpPct);
          this.applyDamageToTarget(def, bHit);
          appliedEffects.push(`\u{1FA78} \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25\u0E0B\u0E49\u0E33 -${bHit} HP`);
        }
        hitReports.push(`${def.name} -${finalDmg} HP${isCrit ? " [CRIT!]" : ""}`);
        if (heroMeta?.signatureEffect) {
          const ef = heroMeta.signatureEffect;
          const isDebuff = !ef.type.startsWith("buff_") && ef.type !== "shield" && !ef.type.startsWith("team_") && ef.type !== "cleanse";
          if (isDebuff) {
            const chance = ef.chance ?? sigCfg.effectChance;
            if (Math.random() < chance) {
              const efPayload = { ...ef, sourceId: `${att.side}_${att.slotIndex}` };
              const res = applyEffectToTarget(def, efPayload);
              if (res && !appliedEffects.includes(res)) appliedEffects.push(res);
            }
          }
        }
        if (att.id === "peacock") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          applyEffectToTarget(def, { type: "confusion", duration: 2 });
        } else if (att.id === "owl") {
          applyEffectToTarget(def, { type: "confusion", duration: 2 });
          applyEffectToTarget(def, { type: "blind", duration: 1 });
        } else if (att.id === "qilin") {
          applyEffectToTarget(def, { type: "confusion", duration: 2 });
          att.gauge = Math.min(100, att.gauge + 15);
        } else if (att.id === "platypus") {
          applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 });
          appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2B\u0E19\u0E35\u0E48\u0E22\u0E27\u0E19\u0E33\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E08\u0E34\u0E15: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "white_lion") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          applyEffectToTarget(def, { type: "blind", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 10);
        } else if (att.id === "giant_dragonfly") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          if (Math.random() < 0.65) applyEffectToTarget(def, { type: "stun", duration: 1 });
        } else if (att.id === "sea_lion") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          if (Math.random() < 0.4) applyEffectToTarget(def, { type: "freeze", duration: 1 });
        } else if (att.id === "porcupine" && Math.random() < 0.3) {
          applyEffectToTarget(def, { type: "stun", duration: 1 });
        } else if (att.id === "phoenix") {
          applyEffectToTarget(def, { type: "burn", duration: 2 });
        } else if (att.id === "naga") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 20);
        } else if (att.id === "beetle" && Math.random() < 0.45) {
          applyEffectToTarget(att, { type: "shield", value: 0.18, duration: 2 });
          appliedEffects.push("\u0E40\u0E02\u0E32\u0E01\u0E27\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E35\u0E1A\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 18% Max HP");
        } else if (att.id === "crab" && Math.random() < 0.25) {
          applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E01\u0E49\u0E32\u0E21\u0E27\u0E32\u0E23\u0E35\u0E2A\u0E01\u0E31\u0E14\u0E04\u0E25\u0E37\u0E48\u0E19: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "bighorn" && Math.random() < 0.25) {
          applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E40\u0E02\u0E32\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E27\u0E32\u0E22\u0E38: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "yak") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "shield", value: 0.15, duration: 2 });
            applyEffectToTarget(ally, { type: "cleanse", count: 1 });
          }
          appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E27\u0E32\u0E22\u0E38\u0E2B\u0E34\u0E21\u0E32\u0E25\u0E31\u0E22: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP & \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
        } else if (att.id === "cheetah") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E32\u0E21\u0E25\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "ostrich") {
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push("\u0E40\u0E15\u0E30\u0E2A\u0E01\u0E31\u0E14\u0E1E\u0E32\u0E22\u0E38\u0E04\u0E25\u0E31\u0E48\u0E07: \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -15");
        } else if (att.id === "owl") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E1B\u0E35\u0E01\u0E23\u0E32\u0E15\u0E23\u0E35: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "crow") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E2A\u0E31\u0E1A\u0E2A\u0E19: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "condor") {
          if (Math.random() < 0.7) {
            applyEffectToTarget(def, { type: "stun", duration: 1 });
          }
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_hit", "buff_flee", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          appliedEffects.push("\u0E44\u0E0B\u0E42\u0E04\u0E25\u0E19\u0E21\u0E2B\u0E32\u0E27\u0E32\u0E15\u0E20\u0E31\u0E22: \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 & \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "cougar") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E1E\u0E38\u0E48\u0E07\u0E02\u0E22\u0E49\u0E33\u0E08\u0E32\u0E01\u0E1C\u0E32\u0E2B\u0E34\u0E19: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "perentie") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E04\u0E21\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "prairie_dog") {
          applyEffectToTarget(def, { type: "blind", duration: 1 });
          appliedEffects.push("\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E1B\u0E48\u0E27\u0E19\u0E1E\u0E2A\u0E38\u0E18\u0E32: \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "anteater") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E17\u0E25\u0E32\u0E22\u0E08\u0E2D\u0E21\u0E1B\u0E25\u0E27\u0E01: \u0E25\u0E14 ATK \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "elephant") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E20\u0E1E: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -15");
        } else if (att.id === "grizzly") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E01\u0E23\u0E34\u0E2A\u0E25\u0E35\u0E48\u0E16\u0E25\u0E48\u0E21\u0E1C\u0E32: \u0E25\u0E14 DEF \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "sloth") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "buff_def", value: 0.2, duration: 2 });
            applyEffectToTarget(ally, { type: "shield", value: 0.12, duration: 2 });
          }
          appliedEffects.push("\u0E42\u0E2D\u0E1A\u0E01\u0E2D\u0E14\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E24\u0E01\u0E29\u0E32: \u0E1A\u0E31\u0E1F DEF +20% & \u0E40\u0E01\u0E23\u0E32\u0E30 12% \u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21");
        } else if (att.id === "tapir") {
          applyEffectToTarget(def, { type: "sleep", duration: 2 });
          appliedEffects.push("\u0E17\u0E48\u0E2D\u0E07\u0E19\u0E34\u0E17\u0E23\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1D\u0E31\u0E19: \u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "panda") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "shield", value: 0.2, duration: 2 });
          }
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E44\u0E1C\u0E48\u0E1E\u0E31\u0E19\u0E25\u0E33: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 20% Max HP \u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19");
        } else if (att.id === "ocelot") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E1E\u0E23\u0E32\u0E19\u0E1E\u0E07\u0E44\u0E1E\u0E23: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "clouded_leopard") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E42\u0E09\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E22\u0E2D\u0E14\u0E40\u0E23\u0E37\u0E2D\u0E19\u0E44\u0E1E\u0E23: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "chameleon") {
          applyEffectToTarget(def, { type: "debuff_hit", value: 15, duration: 2 });
          appliedEffects.push("\u0E2A\u0E30\u0E01\u0E14\u0E15\u0E32\u0E2A\u0E25\u0E31\u0E1A\u0E2A\u0E35\u0E25\u0E27\u0E07\u0E15\u0E32: \u0E25\u0E14 HIT \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 15 \u0E41\u0E15\u0E49\u0E21 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "gibbon") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E2A\u0E27\u0E32\u0E17: \u0E25\u0E14 ATK \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "orangutan") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E17\u0E25\u0E32\u0E22\u0E20\u0E1E: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -15");
        } else if (att.id === "toad") {
          applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E04\u0E32\u0E07\u0E04\u0E01\u0E1E\u0E48\u0E19\u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E2A\u0E01\u0E31\u0E14\u0E17\u0E31\u0E1E: \u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "centipede") {
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E02\u0E32\u0E23\u0E38\u0E21\u0E17\u0E36\u0E49\u0E07: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "butterfly") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E1B\u0E35\u0E01\u0E1C\u0E35\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1E\u0E34\u0E29\u0E25\u0E27\u0E07\u0E15\u0E32: \u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -20");
        } else if (att.id === "gila_monster") {
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E1E\u0E34\u0E29\u0E1A\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01: \u0E2A\u0E15\u0E31\u0E19 & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "black_widow") {
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E41\u0E21\u0E48\u0E21\u0E48\u0E32\u0E22\u0E14\u0E33\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E25\u0E14 DEF 25% & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "pitohui") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E1E\u0E34\u0E29\u0E21\u0E36\u0E19\u0E07\u0E07: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29");
        } else if (att.id === "stonefish") {
          applyEffectToTarget(att, { type: "shield", value: 0.18, duration: 2 });
          appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E2B\u0E34\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E02\u0E22\u0E49\u0E33\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E34\u0E29 18% Max HP");
        } else if (att.id === "deathstalker") {
          applyEffectToTarget(def, { type: "blind", duration: 1 });
          appliedEffects.push("\u0E2B\u0E32\u0E07\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A\u0E41\u0E17\u0E07\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 2 \u0E0A\u0E31\u0E49\u0E19 & \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "cone_snail") {
          applyEffectToTarget(def, { type: "stun", duration: 1 });
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E09\u0E21\u0E27\u0E01\u0E21\u0E23\u0E13\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17: \u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07, \u0E2A\u0E15\u0E31\u0E19 & \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        } else if (att.id === "walrus") {
          applyEffectToTarget(def, { type: "freeze", duration: 1 });
          appliedEffects.push("\u0E07\u0E32\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E17\u0E25\u0E32\u0E22\u0E18\u0E32\u0E23\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "leopard_seal") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23\u0E48\u0E32\u0E07: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "wolverine") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E04\u0E25\u0E31\u0E48\u0E07\u0E17\u0E25\u0E32\u0E22\u0E2B\u0E34\u0E21\u0E30: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20%");
        } else if (att.id === "polar_bear") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E16\u0E25\u0E48\u0E21\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "ermine") {
          appliedEffects.push("\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E02\u0E32\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E1A\u0E31\u0E1F CRI+20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "lynx") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E07\u0E32\u0E2B\u0E34\u0E21\u0E30\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "snow_leopard") {
          applyEffectToTarget(def, { type: "freeze", duration: 1 });
          appliedEffects.push("\u0E42\u0E1C\u0E19\u0E02\u0E22\u0E49\u0E33\u0E08\u0E32\u0E01\u0E22\u0E2D\u0E14\u0E1C\u0E32\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07: \u0E25\u0E14 DEF 30% & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "puffin") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E1B\u0E31\u0E48\u0E19\u0E1B\u0E48\u0E27\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14 SP -20");
        } else if (att.id === "narwhal") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E2B\u0E2D\u0E01\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E1A\u0E2A\u0E01\u0E31\u0E14\u0E08\u0E38\u0E14: \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "seagull") {
          appliedEffects.push("\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E27\u0E22\u0E27\u0E32\u0E22\u0E1B\u0E35\u0E01\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E31\u0E1A\u0E2A\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "armadillo") {
          applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E01\u0E49\u0E2D\u0E19\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E34\u0E49\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "hyena") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E02\u0E22\u0E49\u0E33\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E17\u0E25\u0E32\u0E22\u0E17\u0E31\u0E1E: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 ATK 20%");
        } else if (att.id === "sperm_whale") {
          applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E2D\u0E40\u0E27\u0E08\u0E35\u0E43\u0E15\u0E49\u0E2A\u0E21\u0E38\u0E17\u0E23: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP");
        } else if (att.id === "tasmanian_devil") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E02\u0E22\u0E49\u0E33\u0E41\u0E2B\u0E25\u0E01: \u0E25\u0E14 DEF 20%");
        } else if (att.id === "black_vulture") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 });
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E17\u0E21\u0E34\u0E2C\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20%");
        } else if (att.id === "jaguar") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E40\u0E07\u0E32\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E02\u0E22\u0E49\u0E33\u0E01\u0E30\u0E42\u0E2B\u0E25\u0E01\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "aye_aye") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push("\u0E40\u0E19\u0E15\u0E23\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14 SP -20");
        } else if (att.id === "crow") {
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E37\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10");
        } else if (att.id === "vampire_squid") {
          applyEffectToTarget(def, { type: "silence", duration: 2 });
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push("\u0E21\u0E48\u0E32\u0E19\u0E2B\u0E21\u0E36\u0E01\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14: \u0E43\u0E1A\u0E49 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E1A\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        } else if (att.id === "sand_frog") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "shield", value: 0.15, duration: 2 });
          }
          appliedEffects.push("\u0E01\u0E32\u0E22\u0E32\u0E17\u0E23\u0E32\u0E22\u0E1E\u0E2D\u0E07\u0E25\u0E21\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP");
        } else if (att.id === "camel") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "buff_def", value: 0.2, duration: 2 });
          }
          appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E01\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E41\u0E2B\u0E48\u0E07\u0E17\u0E30\u0E40\u0E25\u0E17\u0E23\u0E32\u0E22: \u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21");
        } else if (att.id === "white_bison") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "shield", value: 0.2, duration: 2 });
            applyEffectToTarget(ally, { type: "cleanse", count: 1 });
          }
          appliedEffects.push("\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E2A\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E44\u0E1A\u0E0B\u0E31\u0E19\u0E40\u0E17\u0E27\u0E30: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 20% Max HP & \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
        } else if (att.id === "sand_cat") {
          applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E09\u0E35\u0E01\u0E1C\u0E37\u0E19\u0E17\u0E23\u0E32\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "sidewinder") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.25, duration: 2 });
          appliedEffects.push("\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E44\u0E0B\u0E14\u0E4C\u0E44\u0E27\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E09\u0E01\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19: \u0E25\u0E14 DEF 25%");
        } else if (att.id === "akhal_teke") {
          def.gauge = Math.max(0, def.gauge - 20);
          appliedEffects.push("\u0E1A\u0E32\u0E17\u0E32\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E17\u0E2D\u0E07\u0E04\u0E33: \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -20 \u0E41\u0E15\u0E49\u0E21");
        } else if (att.id === "caracal") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E17\u0E30\u0E22\u0E32\u0E19\u0E15\u0E30\u0E1B\u0E1A\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "gyrfalcon") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.35, duration: 2 });
          appliedEffects.push("\u0E28\u0E23\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E14\u0E34\u0E48\u0E07\u0E1E\u0E34\u0E06\u0E32\u0E15\u0E44\u0E08\u0E23\u0E4C\u0E1F\u0E2D\u0E25\u0E04\u0E2D\u0E19: \u0E25\u0E14 DEF \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 35%");
        } else if (att.id === "frilled_lizard") {
          applyEffectToTarget(def, { type: "blind", duration: 2 });
          appliedEffects.push("\u0E41\u0E1C\u0E48\u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E2A\u0E30\u0E01\u0E14\u0E02\u0E27\u0E31\u0E0D: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "electric_ray") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "shield", value: 0.15, duration: 2 });
          }
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E19\u0E32\u0E21\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01\u0E21\u0E23\u0E13\u0E30: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP & \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22");
        } else if (att.id === "african_buffalo") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget(ally, { type: "shield", value: 0.2, duration: 2 });
          }
          applyEffectToTarget(def, { type: "stun", duration: 1 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E02\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1E\u0E38\u0E48\u0E07\u0E0A\u0E19: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 20% Max HP & \u0E2A\u0E15\u0E31\u0E19\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22");
        } else if (att.id === "pistol_shrimp") {
          applyEffectToTarget(def, { type: "vulnerable", duration: 2 });
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 });
          def.sp = Math.max(0, def.sp - 15);
          appliedEffects.push("\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19\u0E1F\u0E2D\u0E07\u0E2D\u0E32\u0E01\u0E32\u0E28: \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20% & \u0E15\u0E31\u0E14 SP -15");
        } else if (att.id === "shark") {
          applyEffectToTarget(def, { type: "bleed", duration: 2 });
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E01\u0E31\u0E14\u0E02\u0E22\u0E49\u0E33: \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "cassowary") {
          applyEffectToTarget(def, { type: "bleed", duration: 2 });
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23: \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "buffalo") {
          applyEffectToTarget(def, { type: "taunt", duration: 2, sourceId: `${att.side}_${att.slotIndex}` });
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E0A\u0E19\u0E41\u0E2B\u0E25\u0E01: \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "crocodile") {
          applyEffectToTarget(def, { type: "vulnerable", duration: 2 });
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E01\u0E31\u0E14\u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E2B\u0E32\u0E07: \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "mammoth") {
          applyEffectToTarget(def, { type: "taunt", duration: 2, sourceId: `${att.side}_${att.slotIndex}` });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E07\u0E32\u0E0A\u0E49\u0E32\u0E07\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19: \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "tiger_beetle") {
          applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 2 });
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E2A\u0E31\u0E1A\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08 +15");
        } else if (att.id === "black_mamba") {
          applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 3 });
          applyEffectToTarget(def, { type: "debuff_spd", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E14\u0E33\u0E09\u0E01\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 20%");
        } else if (att.id === "electric_catfish") {
          applyEffectToTarget(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push("\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 350 \u0E42\u0E27\u0E25\u0E15\u0E4C\u0E0A\u0E47\u0E2D\u0E15\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10");
        } else if (att.id === "zebra") {
          applyEffectToTarget(def, { type: "blind", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 12);
          appliedEffects.push("\u0E41\u0E16\u0E1A\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E25\u0E27\u0E07\u0E15\u0E32\u0E42\u0E21\u0E0A\u0E31\u0E19\u0E41\u0E14\u0E0B\u0E40\u0E0B\u0E34\u0E25: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -12");
        } else if (att.id === "electric_eel") {
          applyEffectToTarget(def, { type: "stun", duration: 1 });
          def.gauge = Math.max(0, def.gauge - 20);
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E17\u0E31\u0E13\u0E11\u0E4C\u0E2D\u0E31\u0E2A\u0E19\u0E35 860 \u0E42\u0E27\u0E25\u0E15\u0E4C\u0E16\u0E25\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E20\u0E39\u0E21\u0E34: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -20 & \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        }
      }
      if (att.id === "phoenix") {
        for (const ally of friendlyLiving) {
          const heal = Math.round(ally.baseStats.maxHp * 0.15);
          ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + heal);
          applyEffectToTarget(ally, { type: "cleanse", count: 1 });
        }
        appliedEffects.push("\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E2D\u0E21\u0E15\u0E30: \u0E2E\u0E35\u0E25\u0E17\u0E35\u0E21 +15% HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F");
      }
      this.recordEvent({
        turn: this.round,
        actorSide: att.side,
        actorName: att.name,
        targetName: targets.map((t) => t.name).join(", "),
        actionType: "signature",
        actionName: att.signatureName,
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects,
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] \u2605 ${att.name} \u0E1B\u0E25\u0E14\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [${att.signatureName}]! (${hitReports.join(", ")}) ${appliedEffects.join(" \xB7 ")}`
      });
      return;
    }
    this.recordEvent({
      turn: this.round,
      actorSide: att.side,
      actorName: att.name,
      targetName: friendlyLiving.map((t) => t.name).join(", "),
      actionType: "signature",
      actionName: att.signatureName,
      damage: 0,
      healed: 0,
      shieldGained: 0,
      isCrit: false,
      isMiss: false,
      elementMult: 1,
      appliedEffects,
      message: `[\u0E23\u0E2D\u0E1A ${this.round}] \u2605 ${att.name} \u0E1B\u0E25\u0E14\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [${att.signatureName}]! ${appliedEffects.join(" \xB7 ")}`
    });
  }
  applyDamageToTarget(target, damage) {
    if (target.shield > 0) {
      if (target.shield >= damage) {
        target.shield -= damage;
        return;
      }
      damage -= target.shield;
      target.shield = 0;
    }
    target.hp = Math.max(0, target.hp - damage);
  }
  tickStatuses(f) {
    for (const ef of f.effects) {
      if (ef.duration > 0) ef.duration--;
    }
    f.effects = f.effects.filter((ef) => ef.duration > 0);
    if (!hasStatus(f, "shield")) f.shield = 0;
  }
  recordEvent(ev) {
    this.logs.push(ev);
  }
  runToEnd() {
    while (!this.winner) {
      this.stepRound();
    }
    return this.winner;
  }
};

// src/sim/run_sim_2v2.ts
var HERO_MAP3 = new Map(heroes_default.heroes.map((h) => [h.id, h]));
console.log("======================================================================");
console.log("  \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E08\u0E33\u0E25\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49\u0E17\u0E35\u0E21 2v2 \u0E1A\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E08\u0E31\u0E14\u0E17\u0E31\u0E1E 3x3 (Simultaneous 2v2)  ");
console.log("======================================================================");
var sampleBattles = [
  {
    title: "\u0E28\u0E36\u0E01\u0E17\u0E35\u0E48 1: \u0E41\u0E17\u0E07\u0E01\u0E4C+\u0E0B\u0E31\u0E1E\u0E1E\u0E2D\u0E23\u0E4C\u0E15 \u0E1B\u0E30\u0E17\u0E30 \u0E41\u0E2D\u0E2A\u0E0B\u0E32\u0E0B\u0E34\u0E19+\u0E2A\u0E44\u0E15\u0E23\u0E40\u0E01\u0E2D\u0E23\u0E4C",
    teamA: ["turtle", "deer"],
    // เต่า (Tank หน้า) + กวาง (Supporter หลัง)
    posA: [{ row: "front", col: 1 }, { row: "back", col: 1 }],
    teamB: ["mantis", "lion"],
    // แมนติส (Assassin กลาง) + สิงโต (Striker หน้า)
    posB: [{ row: "mid", col: 1 }, { row: "front", col: 1 }]
  },
  {
    title: "\u0E28\u0E36\u0E01\u0E17\u0E35\u0E48 2: \u0E04\u0E2D\u0E21\u0E42\u0E1A AOE & CC \u0E2B\u0E19\u0E32\u0E41\u0E19\u0E48\u0E19 (\u0E2A\u0E34\u0E07\u0E42\u0E15\u0E17\u0E30\u0E40\u0E25 + \u0E19\u0E01\u0E22\u0E39\u0E07 \u0E1B\u0E30\u0E17\u0E30 \u0E40\u0E21\u0E48\u0E19 + \u0E04\u0E49\u0E32\u0E07\u0E04\u0E32\u0E27)",
    teamA: ["sea_lion", "peacock"],
    // สิงโตทะเล (Controller กลาง) + นกยูง (Controller หลัง)
    posA: [{ row: "mid", col: 0 }, { row: "back", col: 2 }],
    teamB: ["porcupine", "bat"],
    // เม่น (Tank หน้า) + ค้างคาว (Supporter หลัง)
    posB: [{ row: "front", col: 1 }, { row: "back", col: 1 }]
  },
  {
    title: "\u0E28\u0E36\u0E01\u0E17\u0E35\u0E48 3: \u0E28\u0E36\u0E01\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E17\u0E1E SS \u0E21\u0E2B\u0E32\u0E01\u0E32\u0E2C (\u0E21\u0E31\u0E07\u0E01\u0E23\u0E1F\u0E49\u0E32 + \u0E1E\u0E0D\u0E32\u0E19\u0E32\u0E04 \u0E1B\u0E30\u0E17\u0E30 \u0E1F\u0E35\u0E19\u0E34\u0E01\u0E0B\u0E4C + \u0E2A\u0E34\u0E07\u0E42\u0E15)",
    teamA: ["azure_dragon", "naga"],
    posA: [{ row: "mid", col: 1 }, { row: "front", col: 1 }],
    teamB: ["phoenix", "lion"],
    posB: [{ row: "front", col: 0 }, { row: "front", col: 2 }]
  }
];
for (const b of sampleBattles) {
  console.log(`
----------------------------------------------------------------------`);
  console.log(`\u2694\uFE0F  ${b.title}`);
  console.log(`----------------------------------------------------------------------`);
  const session = new TeamBattleSession(b.teamA, b.teamB, {
    enableSkillEffects: true,
    enableSameElementBonus: true,
    teamAPositions: b.posA,
    teamBPositions: b.posB
  });
  console.log("\u3010 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07\u0E17\u0E31\u0E1E & \u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 \u3011");
  console.log("  \u0E1D\u0E31\u0E48\u0E07 A:");
  for (const f of session.squadA.fighters) {
    const bonus = f.roleAffinityActive ? `\u2728 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E42\u0E1A\u0E19\u0E31\u0E2A [${f.roleAffinityDesc}]` : "\u274C \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07";
    console.log(`    - [${f.name}] \u0E22\u0E37\u0E19\u0E41\u0E16\u0E27 [${f.pos.row.toUpperCase()}] \u0E0A\u0E48\u0E2D\u0E07 ${f.pos.col} -> ${bonus}`);
  }
  console.log("  \u0E1D\u0E31\u0E48\u0E07 B:");
  for (const f of session.squadB.fighters) {
    const bonus = f.roleAffinityActive ? `\u2728 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E42\u0E1A\u0E19\u0E31\u0E2A [${f.roleAffinityDesc}]` : "\u274C \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07";
    console.log(`    - [${f.name}] \u0E22\u0E37\u0E19\u0E41\u0E16\u0E27 [${f.pos.row.toUpperCase()}] \u0E0A\u0E48\u0E2D\u0E07 ${f.pos.col} -> ${bonus}`);
  }
  console.log("\n\u3010 \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49 (Combat Logs) \u3011");
  while (!session.winner) {
    session.stepRound();
  }
  for (const ev of session.logs) {
    console.log("  " + ev.message);
  }
  console.log(`
\u{1F3C6} \u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C: \u0E1D\u0E31\u0E48\u0E07 ${session.winner} \u0E0A\u0E19\u0E30! (\u0E08\u0E1A\u0E43\u0E19\u0E23\u0E2D\u0E1A\u0E17\u0E35\u0E48 ${session.round}, \u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19\u0E23\u0E27\u0E21 ${session.totalActions} \u0E04\u0E23\u0E31\u0E49\u0E07)`);
  console.log(`  HP \u0E1D\u0E31\u0E48\u0E07 A \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D: ${session.squadA.fighters.map((f) => `${f.name} (${Math.round(f.hp)}/${f.baseStats.maxHp})`).join(" | ")}`);
  console.log(`  HP \u0E1D\u0E31\u0E48\u0E07 B \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D: ${session.squadB.fighters.map((f) => `${f.name} (${Math.round(f.hp)}/${f.baseStats.maxHp})`).join(" | ")}`);
}
console.log(`
======================================================================`);
console.log(`  \u0E23\u0E31\u0E19 Simulation \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E16\u0E35\u0E22\u0E23 500 \u0E44\u0E1F\u0E15\u0E4C\u0E2A\u0E38\u0E48\u0E21\u0E17\u0E35\u0E21 2v2                  `);
console.log(`======================================================================`);
var heroesList = heroes_default.heroes.map((h) => h.id);
var winsA = 0;
var winsB = 0;
var draws = 0;
var totalRounds = 0;
var SIM_COUNT = 500;
for (let i = 0; i < SIM_COUNT; i++) {
  const randA1 = heroesList[Math.floor(Math.random() * heroesList.length)];
  let randA2 = heroesList[Math.floor(Math.random() * heroesList.length)];
  while (randA2 === randA1) randA2 = heroesList[Math.floor(Math.random() * heroesList.length)];
  const randB1 = heroesList[Math.floor(Math.random() * heroesList.length)];
  let randB2 = heroesList[Math.floor(Math.random() * heroesList.length)];
  while (randB2 === randB1) randB2 = heroesList[Math.floor(Math.random() * heroesList.length)];
  const s = new TeamBattleSession([randA1, randA2], [randB1, randB2], {
    enableSkillEffects: true,
    enableSameElementBonus: true
  });
  const res = s.runToEnd();
  if (res === "A") winsA++;
  else if (res === "B") winsB++;
  else draws++;
  totalRounds += s.round;
}
console.log(`\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49 2v2 \u0E40\u0E09\u0E25\u0E35\u0E48\u0E22: ${(totalRounds / SIM_COUNT).toFixed(1)} \u0E23\u0E2D\u0E1A`);
console.log(`\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E0A\u0E31\u0E22\u0E0A\u0E19\u0E30: \u0E1D\u0E31\u0E48\u0E07 A ${(winsA * 100 / SIM_COUNT).toFixed(1)}% | \u0E1D\u0E31\u0E48\u0E07 B ${(winsB * 100 / SIM_COUNT).toFixed(1)}% | \u0E40\u0E2A\u0E21\u0E2D ${(draws * 100 / SIM_COUNT).toFixed(1)}%`);
console.log(`\u2705 \u0E01\u0E32\u0E23\u0E08\u0E33\u0E25\u0E2D\u0E07 2v2 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C \u0E44\u0E23\u0E49\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14 (Zero runtime errors)`);
