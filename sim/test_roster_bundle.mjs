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
    ],
    BEHEMOTH: [
      0.505,
      0.198,
      0.297
    ],
    LEVIATHAN: [
      0.4835,
      0.2308,
      0.2857
    ],
    GARUDA: [
      0.489,
      0.2582,
      0.2528
    ],
    THUNDERBIRD: [
      0.4945,
      0.2527,
      0.2528
    ],
    FENRIR: [
      0.5,
      0.2253,
      0.2747
    ],
    VERDANT_HYDRA: [
      0.478,
      0.2143,
      0.3077
    ],
    KING_BASILISK: [
      0.489,
      0.2363,
      0.2747
    ],
    CERBERUS: [
      0.5055,
      0.2198,
      0.2747
    ],
    SOLAR_GRIFFIN: [
      0.4945,
      0.2418,
      0.2637
    ],
    NINE_TAILED_FOX: [
      0.4835,
      0.2527,
      0.2638
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
        type: "stone_curse",
        duration: 1,
        chance: 0.65
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
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E02\u0E13\u0E30 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 65% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E2A\u0E20\u0E32\u0E27\u0E30\u0E04\u0E25\u0E31\u0E48\u0E07\u0E28\u0E36\u0E01 (Berserk: ATK+30%, SPD+20%, DEF-20%, HIT-10, 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP",
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
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E32\u0E40\u0E21\u0E08 +18%, \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15% \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E09\u0E35\u0E14\u0E1E\u0E34\u0E29\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
      id: "behemoth",
      name: "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18",
      rarity: "SS",
      element: "earth",
      archetype: "BEHEMOTH",
      role: "Striker",
      str: 92,
      agi: 36,
      sta: 54,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E01\u0E31\u0E21\u0E1B\u0E19\u0E32\u0E17\u0E16\u0E25\u0E48\u0E21\u0E42\u0E25\u0E01\u0E31\u0E19\u0E15\u0E23\u0E4C",
      signatureEffect: {
        type: "armor_break_and_stun",
        target: "enemy",
        duration: 1,
        defRedPct: 0.3,
        chance: 0.85
      },
      ability: {
        id: "colossal_tremor",
        name: "\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E31\u0E48\u0E19",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 (AB) +15% \u0E41\u0E25\u0E30\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E15\u0E31\u0E19\u0E16\u0E32\u0E27\u0E23 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E08\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 25% ATK \u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
      },
      defaultSkills: [
        "earth_l",
        "earth_m2",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.5
    },
    {
      id: "leviathan",
      name: "\u0E40\u0E25\u0E40\u0E27\u0E35\u0E22\u0E18\u0E32\u0E19",
      rarity: "SS",
      element: "water",
      archetype: "LEVIATHAN",
      role: "Striker",
      str: 88,
      agi: 42,
      sta: 52,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E21\u0E2B\u0E32\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34\u0E01\u0E25\u0E37\u0E19\u0E2A\u0E21\u0E38\u0E17\u0E23",
      signatureEffect: {
        type: "dispel_and_sp_drain",
        target: "enemy",
        count: 1,
        value: 25,
        chance: 0.85
      },
      ability: {
        id: "oceanic_surge",
        name: "\u0E08\u0E49\u0E32\u0E27\u0E04\u0E25\u0E31\u0E48\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D SP \u0E02\u0E2D\u0E07\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 50% \u0E2A\u0E01\u0E34\u0E25\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E08\u0E30\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +20% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E17\u0E35\u0E48\u0E08\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +15 \u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48\u0E15\u0E19\u0E40\u0E2D\u0E07"
      },
      defaultSkills: [
        "water_l",
        "water_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.3
    },
    {
      id: "garuda",
      name: "\u0E1E\u0E0D\u0E32\u0E04\u0E23\u0E38\u0E11",
      rarity: "SS",
      element: "wind",
      archetype: "GARUDA",
      role: "Striker",
      str: 89,
      agi: 47,
      sta: 46,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E25\u0E32\u0E15\u0E31\u0E19\u0E09\u0E35\u0E01\u0E19\u0E20\u0E32",
      signatureEffect: {
        type: "bleed",
        duration: 2,
        chance: 0.9
      },
      ability: {
        id: "sky_rending_talons",
        name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E27\u0E2B\u0E32\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
        description: "\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 CRI +12% \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 CriDmg +25% \xB7 \u0E21\u0E35\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07 (Root) \u0E41\u0E25\u0E30\u0E2A\u0E42\u0E25\u0E27\u0E4C (Slow) 100%"
      },
      defaultSkills: [
        "wind_l",
        "wind_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.4
    },
    {
      id: "thunderbird",
      name: "\u0E18\u0E31\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E14",
      rarity: "SS",
      element: "electric",
      archetype: "THUNDERBIRD",
      role: "Striker",
      str: 90,
      agi: 46,
      sta: 46,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E21\u0E2B\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1C\u0E48\u0E32\u0E1E\u0E34\u0E20\u0E1E",
      signatureEffect: {
        type: "stun_and_gauge_drain",
        duration: 1,
        value: 25,
        chance: 0.85
      },
      ability: {
        id: "static_discharge",
        name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07",
        description: "\u0E17\u0E38\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E40\u0E01\u0E34\u0E14\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E0B\u0E49\u0E33\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32 30% ATK \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E04\u0E48\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E25\u0E07\u0E44\u0E14\u0E49 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E31\u0E19\u0E17\u0E35 +25"
      },
      defaultSkills: [
        "electric_l",
        "electric_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.5
    },
    {
      id: "fenrir",
      name: "\u0E40\u0E1F\u0E19\u0E23\u0E34\u0E23\u0E4C",
      rarity: "SS",
      element: "ice",
      archetype: "FENRIR",
      role: "Striker",
      str: 91,
      agi: 41,
      sta: 50,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25\u0E01\u0E25\u0E37\u0E19\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C",
      signatureEffect: {
        type: "freeze",
        duration: 1,
        chance: 0.85
      },
      ability: {
        id: "glacial_fang_hunt",
        name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E09\u0E35\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
        description: "\u0E2B\u0E32\u0E01\u0E28\u0E31\u0E15\u0E23\u0E39\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (Freeze) \u0E2B\u0E23\u0E37\u0E2D\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C (Ice Skin) \u0E08\u0E30\u0E42\u0E08\u0E21\u0E15\u0E35\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +30% \xB7 \u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +12%"
      },
      defaultSkills: [
        "ice_l",
        "ice_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.6
    },
    {
      id: "verdant_hydra",
      name: "\u0E44\u0E2E\u0E14\u0E23\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32",
      rarity: "SS",
      element: "plant",
      archetype: "VERDANT_HYDRA",
      role: "Striker",
      str: 87,
      agi: 39,
      sta: 56,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1B\u0E10\u0E1E\u0E35",
      signatureEffect: {
        type: "root",
        duration: 2,
        chance: 0.8
      },
      ability: {
        id: "thorn_regrowth",
        name: "\u0E2B\u0E19\u0E32\u0E21\u0E07\u0E2D\u0E01\u0E40\u0E07\u0E22\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 \u0E08\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19 (Shield) \u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A 15% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49"
      },
      defaultSkills: [
        "plant_l",
        "plant_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.2
    },
    {
      id: "king_basilisk",
      name: "\u0E1A\u0E32\u0E0B\u0E34\u0E25\u0E34\u0E2A\u0E01\u0E4C",
      rarity: "SS",
      element: "poison",
      archetype: "KING_BASILISK",
      role: "Striker",
      str: 89,
      agi: 43,
      sta: 50,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E19\u0E15\u0E23\u0E21\u0E23\u0E13\u0E30\u0E1E\u0E34\u0E29\u0E2D\u0E40\u0E27\u0E08\u0E35",
      signatureEffect: {
        type: "max_poison_and_armor_break",
        duration: 3,
        value: 0.3,
        chance: 0.9
      },
      ability: {
        id: "caustic_venom_aura",
        name: "\u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E25\u0E30\u0E25\u0E32\u0E22\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01",
        description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +25% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E17\u0E35\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E08\u0E30\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "poison_l",
        "poison_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.5
    },
    {
      id: "cerberus",
      name: "\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E2D\u0E23\u0E31\u0E2A",
      rarity: "SS",
      element: "dark",
      archetype: "CERBERUS",
      role: "Striker",
      str: 92,
      agi: 40,
      sta: 50,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E21\u0E34\u0E2C\u0E17\u0E32\u0E23\u0E4C\u0E17\u0E32\u0E23\u0E31\u0E2A",
      signatureEffect: {
        type: "curse",
        duration: 999,
        chance: 0.8
      },
      ability: {
        id: "tartarus_three_fangs",
        name: "\u0E2A\u0E32\u0E21\u0E40\u0E28\u0E35\u0E22\u0E23\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E1A\u0E31\u0E1F",
        description: "\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 35% ATK \xB7 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E2D\u0E22\u0E48\u0E32\u0E07"
      },
      defaultSkills: [
        "dark_l",
        "dark_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.7
    },
    {
      id: "solar_griffin",
      name: "\u0E1E\u0E0D\u0E32\u0E01\u0E23\u0E34\u0E1F\u0E1F\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19",
      rarity: "SS",
      element: "light",
      archetype: "SOLAR_GRIFFIN",
      role: "Striker",
      str: 90,
      agi: 44,
      sta: 48,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32",
      signatureEffect: {
        type: "dispel_all_and_blind",
        duration: 2,
        chance: 0.85
      },
      ability: {
        id: "solar_piercing_crest",
        name: "\u0E23\u0E31\u0E28\u0E21\u0E35\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 HIT +15 \u0E41\u0E25\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15 \u0E16\u0E32\u0E27\u0E23 \xB7 \u0E21\u0E35\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 (Blind) 100%"
      },
      defaultSkills: [
        "light_l",
        "light_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.4
    },
    {
      id: "nine_tailed_fox",
      name: "\u0E1E\u0E0D\u0E32\u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07",
      rarity: "SS",
      element: "psychic",
      archetype: "NINE_TAILED_FOX",
      role: "Striker",
      str: 88,
      agi: 46,
      sta: 48,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "sp_drain",
        value: 30,
        chance: 1
      },
      ability: {
        id: "psionic_spirit_orbs",
        name: "\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E17\u0E27\u0E35\u0E04\u0E39\u0E13",
        description: "\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E23\u0E48\u0E32\u0E22\u0E2A\u0E01\u0E34\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E08\u0E30\u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 1 \u0E25\u0E39\u0E01 (\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +5% \u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 4 \u0E25\u0E39\u0E01 \u0E23\u0E27\u0E21 +20%) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E30\u0E2A\u0E21\u0E04\u0E23\u0E1A 4 \u0E25\u0E39\u0E01 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 20% \u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1E\u0E25\u0E31\u0E07\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E30\u0E25\u0E31\u0E22\u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP -15 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 (\u0E2A\u0E25\u0E32\u0E22\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E30\u0E2A\u0E21\u0E43\u0E2B\u0E21\u0E48) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (Confusion 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "psychic_l",
        "psychic_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.3
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
        name: "\u0E27\u0E34\u0E2B\u0E04\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E & \u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07",
        description: "\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E16\u0E32\u0E27\u0E23 (\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F 20% & \u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08\u0E16\u0E36\u0E07\u0E15\u0E32\u0E22\u0E04\u0E23\u0E31\u0E49\u0E07\u0E41\u0E23\u0E01\u0E43\u0E19\u0E44\u0E1F\u0E15\u0E4C \u0E08\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E 100% (\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 80% \u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E\u0E14\u0E49\u0E27\u0E22 HP \u0E40\u0E15\u0E47\u0E21\u0E2B\u0E25\u0E2D\u0E14, \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E1F\u0E37\u0E49\u0E19 60% \u0E02\u0E2D\u0E07 Max HP) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
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
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E23\u0E37\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29\u0E40\u0E19\u0E21\u0E32\u0E42\u0E17\u0E0B\u0E34\u0E2A\u0E15\u0E4C \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21"
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
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 (Ice Skin: DEF+20%, SPD-30%, \u0E16\u0E39\u0E01\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39) 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP",
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
        type: "curse_and_silence",
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
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E23\u0E07\u0E2A\u0E39\u0E07 860V \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -10 \u0E41\u0E15\u0E49\u0E21"
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
        name: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat: \u0E0B\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 40% \u0E40\u0E02\u0E49\u0E32 SP \u0E19\u0E32\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 (HIT) \u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 10 \u0E41\u0E15\u0E49\u0E21"
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
        description: "\u0E25\u0E14\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34\u0E25\u0E07 25% \xB7 \u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat: \u0E0B\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 40% \u0E40\u0E02\u0E49\u0E32 SP \u0E19\u0E32\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E43\u0E2B\u0E49\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E21\u0E35 HP \u0E15\u0E48\u0E33\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"
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
        description: "\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 12% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E25\u0E14\u0E25\u0E07\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 65% \u0E08\u0E30\u0E1B\u0E25\u0E14\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat: \u0E0B\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 40% \u0E40\u0E02\u0E49\u0E32 SP \u0E19\u0E32\u0E19 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
    fire_skin: {
      fireDmgBonusPct: 0.2,
      onHitBurnChance: 0.4,
      burnIgniteHpPct: 0.03,
      duration: 2
    },
    berserk: {
      atkBonusPct: 0.3,
      spdBonusPct: 0.2,
      defRedPct: 0.2,
      hitRed: 10,
      duration: 2
    },
    ice_skin: {
      spdRedPct: 0.3,
      defBonusPct: 0.2,
      onHitFreezeChance: 0.4,
      duration: 2
    },
    stone_curse: {
      duration: 1,
      isHardCC: true,
      blockHealing: true,
      transformElement: "earth"
    },
    curse: {
      hpLossPctPerTurn: 0.03,
      permanent: true
    },
    paralysis: {
      spdRedPct: 0.25,
      flinchChance: 0.6,
      duration: 2
    },
    energy_coat: {
      damageToSpPct: 0.4,
      duration: 3,
      isBuff: true
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
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E1B\u0E25\u0E27\u0E2D\u0E31\u0E04\u0E04\u0E35",
      element: "fire",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.1,
      effects: [
        {
          type: "fire_skin",
          target: "self",
          duration: 2
        },
        {
          type: "buff_atk",
          target: "self",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.1 \xB7 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07 \u{1F525} (\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F 20% & \u0E42\u0E14\u0E19\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F ATK +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
          type: "stone_curse",
          chance: 0.35,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E2A\u0E32\u0E1B\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19 \u{1F5FF} (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: \u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19 \u0E2B\u0E49\u0E32\u0E21\u0E42\u0E08\u0E21\u0E15\u0E35\u0E41\u0E25\u0E30\u0E2B\u0E49\u0E32\u0E21\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39)"
    },
    {
      id: "lightning_s",
      name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E44\u0E1F\u0E1F\u0E49\u0E32",
      element: "lightning",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      bonusAb: 15,
      effects: [
        {
          type: "paralysis",
          chance: 0.3,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 +15% \u0E43\u0E19\u0E17\u0E48\u0E32\u0E19\u0E35\u0E49 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: SPD -25%, \u0E0A\u0E30\u0E07\u0E31\u0E01 60%)"
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
          type: "paralysis",
          chance: 0.55,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E0A\u0E47\u0E2D\u0E15 \u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: SPD -25%, \u0E0A\u0E30\u0E07\u0E31\u0E01 60%)"
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
          chance: 0.45,
          duration: 1
        },
        {
          type: "paralysis",
          chance: 0.65,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E0A\u0E47\u0E2D\u0E15\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: SPD -25%, \u0E0A\u0E30\u0E07\u0E31\u0E01 60%)"
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
          type: "ice_skin",
          target: "self",
          duration: 2
        },
        {
          type: "shield",
          target: "self",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 \u2744\uFE0F (DEF +20%, SPD \u221230%, \u0E16\u0E39\u0E01\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E25\u0E30\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07) (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
        },
        {
          type: "dispel",
          target: "enemy",
          chance: 0.3,
          count: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.5 \xB7 \u0E02\u0E42\u0E21\u0E22 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% \u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E2A\u0E38\u0E48\u0E21\u0E25\u0E1A\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F\u0E14\u0E49\u0E32\u0E19\u0E14\u0E35\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E2D\u0E22\u0E48\u0E32\u0E07"
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
          type: "curse",
          chance: 0.45
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 \u{1F52E} (\u0E25\u0E14 HP 3% \u0E17\u0E38\u0E01\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E15\u0E32\u0E22 \u0E25\u0E49\u0E32\u0E07\u0E14\u0E49\u0E27\u0E22 Cleanse \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19)"
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
          type: "berserk",
          target: "self",
          chance: 0.85,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "self",
          chance: 0.85,
          value: 25
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E2A\u0E20\u0E32\u0E27\u0E30\u0E04\u0E25\u0E31\u0E48\u0E07\u0E28\u0E36\u0E01 \u{1F621} (ATK +30%, SPD +20%, DEF \u221220%, HIT \u221210, 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +25"
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
          chance: 0.2,
          duration: 1
        },
        {
          type: "paralysis",
          chance: 0.4,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.25 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 20% \u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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

// src/engine/save_manager.ts
function getDefaultElementalSkillS(element) {
  const map = {
    fire: "fire_s",
    water: "water_s",
    wind: "wind_s",
    earth: "earth_s",
    lightning: "lightning_s",
    ice: "ice_s",
    plant: "plant_s",
    poison: "poison_s",
    dark: "dark_s",
    light: "light_s",
    psychic: "psychic_s"
  };
  return map[element] || "fire_s";
}
var INITIAL_UNLOCKED_SKILLS = [
  "fire_s",
  "water_s",
  "wind_s",
  "earth_s",
  "lightning_s",
  "ice_s",
  "plant_s",
  "poison_s",
  "dark_s",
  "light_s",
  "psychic_s",
  "martial_s",
  "medical_s",
  "trick_s",
  "catalyst_s",
  "secret_s"
];
var INITIAL_UNLOCKED_ELEMENT_ROWS = [
  "fire",
  "water",
  "wind",
  "earth",
  "lightning",
  "ice",
  "plant",
  "poison",
  "dark",
  "light",
  "psychic",
  "martial",
  "medical",
  "trick",
  "catalyst",
  "secret",
  "neutral"
];
var SAVE_KEY = "animalia_wild_heroes_save_v1";
var MAX_HERO_LEVEL = 50;
var MAX_HERO_STARS = 5;
var EGG_CONFIG = {
  normal: {
    durationMs: 10 * 60 * 1e3,
    // 10 นาที (600,000 ms)
    rates: { B: 0.8, A: 0.18, S: 0.02, SS: 0 },
    costCrystals: 0
  },
  gold: {
    durationMs: 4 * 60 * 60 * 1e3,
    // 4 ชั่วโมง (14,400,000 ms)
    rates: { B: 0, A: 0.55, S: 0.35, SS: 0.1 },
    costCrystals: 100
  },
  mythic: {
    durationMs: 12 * 60 * 60 * 1e3,
    // 12 ชั่วโมง (43,200,000 ms)
    rates: { B: 0, A: 0, S: 0.7, SS: 0.3 },
    costCrystals: 300
  }
};
var SHARDS_PER_DUPLICATE = {
  B: 10,
  A: 20,
  S: 50,
  SS: 100
};
var STAR_UPGRADE_COSTS = {
  2: 20,
  3: 50,
  4: 100,
  5: 200
};
function getLevelUpCost(currentLevel) {
  return {
    food: currentLevel * 80,
    gold: currentLevel * 40
  };
}
var SaveManager = class {
  data;
  constructor() {
    this.data = this.load();
  }
  /**
   * ดึงชุดข้อมูลเริ่มต้นสำหรับผู้เล่นใหม่ (Starter Kit)
   */
  getStarterData() {
    const initialHeroes = {
      rooster: {
        heroId: "rooster",
        level: 1,
        stars: 1,
        exp: 0,
        customSkills: ["fire_s"],
        preferredRow: "front"
      },
      cat: {
        heroId: "cat",
        level: 1,
        stars: 1,
        exp: 0,
        customSkills: ["wind_s"],
        preferredRow: "mid"
      },
      buffalo: {
        heroId: "buffalo",
        level: 1,
        stars: 1,
        exp: 0,
        customSkills: ["earth_s"],
        preferredRow: "front"
      }
    };
    return {
      version: 1,
      playerName: "\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1B\u0E48\u0E32",
      playerLevel: 1,
      playerExp: 0,
      inventory: {
        gold: 1500,
        crystals: 150,
        food: 800,
        warmth: 30,
        normalEggs: 2,
        // แจกไข่ธรรมดาเริ่มต้น 2 ฟอง
        goldEggs: 1,
        // แจกไข่ทองเริ่มต้น 1 ฟองเพื่อลุ้นตัวแรร์
        mythicEggs: 0,
        shards: {},
        elementStones: {
          fire: 3,
          wind: 3,
          earth: 3,
          water: 1,
          plant: 1
        },
        skillBooks: {}
      },
      ownedHeroes: initialHeroes,
      activeTeam1v1: {
        mainHeroId: "rooster",
        backupHeroId: "cat"
      },
      activeTeam2v2: {
        slot0: { heroId: "buffalo", row: "front", col: 1 },
        slot1: { heroId: "cat", row: "mid", col: 1 }
      },
      incubatorSlots: [null, null],
      // 2 สล็อตสำหรับตู้ฟักไข่
      pityCounterSS: 0,
      totalEggsHatched: 0,
      clearedStages: {},
      currentChapter: 1,
      unlockedStages: ["stage_1_1"],
      // ปลดล็อกด่านแรกของบทที่ 1
      unlockedElementRows: [...INITIAL_UNLOCKED_ELEMENT_ROWS],
      // ปลดล็อกแถวเริ่มต้นครบ 16 แถว (11 ธาตุ + 5 สายไร้ธาตุ)
      unlockedSkills: [...INITIAL_UNLOCKED_SKILLS],
      // ปลดล็อกสกิลแรก (Tier S) ของทุกสายวิชาตั้งแต่เริ่มเกม
      skillLevels: {
        fire_s: 1,
        water_s: 1,
        wind_s: 1,
        earth_s: 1,
        lightning_s: 1,
        ice_s: 1,
        plant_s: 1,
        poison_s: 1,
        dark_s: 1,
        light_s: 1,
        psychic_s: 1,
        martial_s: 1,
        medical_s: 1,
        trick_s: 1,
        catalyst_s: 1,
        secret_s: 1
      },
      skillPresets: {
        preset_balanced: {
          id: "preset_balanced",
          name: "\u0E2A\u0E21\u0E14\u0E38\u0E25\u0E23\u0E38\u0E01\u0E23\u0E31\u0E1A",
          description: "\u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19\u0E42\u0E08\u0E21\u0E15\u0E35\u0E01\u0E32\u0E22\u0E20\u0E32\u0E1E \u0E18\u0E32\u0E15\u0E38\u0E44\u0E1F \u0E25\u0E21 \u0E41\u0E25\u0E30\u0E14\u0E34\u0E19",
          skills: ["fire_s", "wind_s", "earth_s", "martial_s"],
          createdAt: Date.now()
        },
        preset_fire_burst: {
          id: "preset_fire_burst",
          name: "\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E40\u0E1C\u0E32\u0E1C\u0E25\u0E32\u0E0D",
          description: "\u0E40\u0E19\u0E49\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49",
          skills: ["fire_s", "lightning_s", "martial_s", "catalyst_s"],
          createdAt: Date.now()
        },
        preset_earth_tank: {
          id: "preset_earth_tank",
          name: "\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E1E\u0E2A\u0E38\u0E18\u0E32",
          description: "\u0E40\u0E19\u0E49\u0E19\u0E01\u0E32\u0E23\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19 \u0E1A\u0E25\u0E47\u0E2D\u0E01 \u0E40\u0E01\u0E23\u0E32\u0E30 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39",
          skills: ["earth_s", "water_s", "medical_s", "trick_s"],
          createdAt: Date.now()
        }
      },
      battleSpeed: 1,
      autoCastSignature: true,
      lastSavedAt: Date.now()
    };
  }
  /**
   * โหลดข้อมูลจาก LocalStorage
   */
  load() {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return this.getStarterData();
      }
      const raw = window.localStorage.getItem(SAVE_KEY);
      if (!raw) {
        const fresh = this.getStarterData();
        this.save(fresh);
        return fresh;
      }
      const parsed = JSON.parse(raw);
      if (!parsed.version || !parsed.inventory || !parsed.ownedHeroes) {
        console.warn("[SaveManager] \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E0B\u0E1F\u0E40\u0E14\u0E34\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22 \u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E0B\u0E1F\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E43\u0E2B\u0E21\u0E48...");
        const fresh = this.getStarterData();
        this.save(fresh);
        return fresh;
      }
      if (!parsed.skillLevels) {
        parsed.skillLevels = {};
        for (const s of parsed.unlockedSkills || []) {
          parsed.skillLevels[s] = 1;
        }
      }
      if (!parsed.skillPresets) {
        parsed.skillPresets = this.getStarterData().skillPresets;
      }
      if (!parsed.unlockedElementRows) parsed.unlockedElementRows = [];
      for (const row of INITIAL_UNLOCKED_ELEMENT_ROWS) {
        if (!parsed.unlockedElementRows.includes(row)) {
          parsed.unlockedElementRows.push(row);
        }
      }
      if (!parsed.unlockedSkills) parsed.unlockedSkills = [];
      for (const skId of INITIAL_UNLOCKED_SKILLS) {
        if (!parsed.unlockedSkills.includes(skId)) {
          parsed.unlockedSkills.push(skId);
        }
        if (!parsed.skillLevels[skId]) {
          parsed.skillLevels[skId] = 1;
        }
      }
      if (parsed.ownedHeroes) {
        for (const hId in parsed.ownedHeroes) {
          const hero = parsed.ownedHeroes[hId];
          const heroMeta = heroes_default.heroes.find((h) => h.id === hId);
          const defaultS = getDefaultElementalSkillS(heroMeta?.element || "fire");
          if (!hero.customSkills || hero.customSkills.length === 0) {
            hero.customSkills = [defaultS];
          } else {
            const defSkills = heroMeta?.defaultSkills;
            const isOldDefault4 = Boolean(defSkills && hero.customSkills.length === 4 && hero.customSkills.every((s, i) => s === defSkills[i]));
            if (isOldDefault4) {
              hero.customSkills = [defaultS];
            } else {
              const filtered = hero.customSkills.filter((sk) => Boolean(sk) && parsed.unlockedSkills.includes(sk));
              hero.customSkills = filtered.length > 0 ? filtered : [defaultS];
            }
          }
        }
      }
      return parsed;
    } catch (err) {
      console.error("[SaveManager] \u0E42\u0E2B\u0E25\u0E14\u0E40\u0E0B\u0E1F\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27:", err);
      return this.getStarterData();
    }
  }
  /**
   * บันทึกข้อมูลลงใน LocalStorage
   */
  save(customData) {
    try {
      if (customData) this.data = customData;
      this.data.lastSavedAt = Date.now();
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(SAVE_KEY, JSON.stringify(this.data));
      }
    } catch (err) {
      console.error("[SaveManager] \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E0B\u0E1F\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27:", err);
    }
  }
  /**
   * ล้างข้อมูลเซฟและรีเซ็ตกลับเป็นค่าเริ่มต้น
   */
  reset() {
    this.data = this.getStarterData();
    this.save();
    return this.data;
  }
  getData() {
    return this.data;
  }
  // ==========================================
  // การจัดการทรัพยากร (Inventory Management)
  // ==========================================
  addGold(amt) {
    this.data.inventory.gold = Math.max(0, this.data.inventory.gold + amt);
    this.save();
  }
  addCrystals(amt) {
    this.data.inventory.crystals = Math.max(0, this.data.inventory.crystals + amt);
    this.save();
  }
  addFood(amt) {
    this.data.inventory.food = Math.max(0, this.data.inventory.food + amt);
    this.save();
  }
  addWarmth(amt) {
    this.data.inventory.warmth = Math.max(0, this.data.inventory.warmth + amt);
    this.save();
  }
  addEggs(type, count = 1) {
    if (type === "normal") this.data.inventory.normalEggs += count;
    else if (type === "gold") this.data.inventory.goldEggs += count;
    else if (type === "mythic") this.data.inventory.mythicEggs += count;
    this.save();
  }
  addShards(heroId, count) {
    this.data.inventory.shards[heroId] = (this.data.inventory.shards[heroId] || 0) + count;
    this.save();
  }
  addElementStone(element, count = 1) {
    if (count <= 0) return;
    this.data.inventory.elementStones[element] = (this.data.inventory.elementStones[element] || 0) + count;
    this.save();
  }
  addSkillBook(skillId, count = 1) {
    if (count <= 0) return;
    this.data.inventory.skillBooks[skillId] = (this.data.inventory.skillBooks[skillId] || 0) + count;
    this.save();
  }
  consumeResources(costs) {
    const inv = this.data.inventory;
    if ((costs.gold ?? 0) > inv.gold) return false;
    if ((costs.crystals ?? 0) > inv.crystals) return false;
    if ((costs.food ?? 0) > inv.food) return false;
    if ((costs.warmth ?? 0) > inv.warmth) return false;
    if ((costs.normalEggs ?? 0) > inv.normalEggs) return false;
    if ((costs.goldEggs ?? 0) > inv.goldEggs) return false;
    if ((costs.mythicEggs ?? 0) > inv.mythicEggs) return false;
    if (costs.gold) inv.gold -= costs.gold;
    if (costs.crystals) inv.crystals -= costs.crystals;
    if (costs.food) inv.food -= costs.food;
    if (costs.warmth) inv.warmth -= costs.warmth;
    if (costs.normalEggs) inv.normalEggs -= costs.normalEggs;
    if (costs.goldEggs) inv.goldEggs -= costs.goldEggs;
    if (costs.mythicEggs) inv.mythicEggs -= costs.mythicEggs;
    this.save();
    return true;
  }
  // ==========================================
  // การพัฒนาสัตว์เลี้ยง (Progression: Level & Stars)
  // ==========================================
  /**
   * เพิ่มสัตว์เลี้ยงเข้าคลัง หากมีอยู่แล้วจะแปลงเป็นเศษวิญญาณ
   */
  acquireHero(heroId) {
    const heroMeta = heroes_default.heroes.find((h) => h.id === heroId);
    if (!heroMeta) throw new Error(`\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48 ${heroId}`);
    if (this.data.ownedHeroes[heroId]) {
      const rarity = heroMeta.rarity;
      const shards = SHARDS_PER_DUPLICATE[rarity] || 10;
      this.addShards(heroId, shards);
      return { isNew: false, hero: this.data.ownedHeroes[heroId], shardsGained: shards };
    }
    const defaultSkill = getDefaultElementalSkillS(heroMeta.element || "fire");
    const newHero = {
      heroId,
      level: 1,
      stars: 1,
      exp: 0,
      customSkills: [defaultSkill],
      // สัตว์เลี้ยงที่ได้ใหม่จากไข่จะมีสกิลเริ่มต้นประจำธาตุ 1 สกิลระดับ S
      preferredRow: heroMeta.preferredRow || "mid"
    };
    this.data.ownedHeroes[heroId] = newHero;
    this.save();
    return { isNew: true, hero: newHero };
  }
  /**
   * อัปเลเวลสัตว์เลี้ยง
   */
  levelUpHero(heroId) {
    const hero = this.data.ownedHeroes[heroId];
    if (!hero) return { success: false, error: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E15\u0E31\u0E27\u0E19\u0E35\u0E49\u0E43\u0E19\u0E04\u0E25\u0E31\u0E07" };
    if (hero.level >= MAX_HERO_LEVEL) return { success: false, error: "\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E16\u0E36\u0E07\u0E40\u0E25\u0E40\u0E27\u0E25\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E41\u0E25\u0E49\u0E27" };
    const cost = getLevelUpCost(hero.level);
    if (!this.consumeResources({ food: cost.food, gold: cost.gold })) {
      return { success: false, error: `\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E44\u0E21\u0E48\u0E1E\u0E2D (\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E2A\u0E1A\u0E35\u0E22\u0E07 ${cost.food} \u0E41\u0E25\u0E30\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D ${cost.gold})` };
    }
    hero.level += 1;
    this.save();
    return { success: true, newLevel: hero.level };
  }
  /**
   * อัปดาวสัตว์เลี้ยง (Star Awakening ★1 -> ★5)
   */
  starUpHero(heroId) {
    const hero = this.data.ownedHeroes[heroId];
    if (!hero) return { success: false, error: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E15\u0E31\u0E27\u0E19\u0E35\u0E49\u0E43\u0E19\u0E04\u0E25\u0E31\u0E07" };
    if (hero.stars >= MAX_HERO_STARS) return { success: false, error: "\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E16\u0E36\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A 5 \u0E14\u0E32\u0E27\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E41\u0E25\u0E49\u0E27" };
    const nextStar = hero.stars + 1;
    const requiredShards = STAR_UPGRADE_COSTS[nextStar] || 50;
    const currentShards = this.data.inventory.shards[heroId] || 0;
    if (currentShards < requiredShards) {
      return { success: false, error: `\u0E40\u0E28\u0E29\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E44\u0E21\u0E48\u0E1E\u0E2D (\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 ${requiredShards} \u0E0A\u0E34\u0E49\u0E19, \u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48 ${currentShards} \u0E0A\u0E34\u0E49\u0E19)` };
    }
    this.data.inventory.shards[heroId] -= requiredShards;
    hero.stars = nextStar;
    this.save();
    return { success: true, newStars: hero.stars };
  }
  /**
   * บันทึกสกิล 4 ช่องที่สวมใส่
   */
  setHeroSkills(heroId, skills) {
    const hero = this.data.ownedHeroes[heroId];
    if (!hero) return { success: false, error: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E15\u0E31\u0E27\u0E19\u0E35\u0E49\u0E43\u0E19\u0E04\u0E25\u0E31\u0E07" };
    hero.customSkills = [...skills.slice(0, 4)];
    this.save();
    return { success: true };
  }
  /**
   * จัดทีมต่อสู้ 1v1 (ตัวหลัก + ตัวสำรอง)
   */
  setActiveTeam1v1(mainHeroId, backupHeroId) {
    if (!this.data.ownedHeroes[mainHeroId]) return { success: false, error: `\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48 ${mainHeroId} \u0E43\u0E19\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E2D\u0E07` };
    if (!this.data.ownedHeroes[backupHeroId]) return { success: false, error: `\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48 ${backupHeroId} \u0E43\u0E19\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E2D\u0E07` };
    if (mainHeroId === backupHeroId) return { success: false, error: "\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E15\u0E31\u0E27\u0E2B\u0E25\u0E31\u0E01\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E2A\u0E33\u0E23\u0E2D\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E0B\u0E49\u0E33\u0E01\u0E31\u0E19" };
    this.data.activeTeam1v1 = { mainHeroId, backupHeroId };
    this.save();
    return { success: true };
  }
  /**
   * จัดทีมต่อสู้ 2v2 บนกระดาน 3x3 (Slot 0 + Slot 1)
   */
  setActiveTeam2v2(slot0, slot1) {
    if (!this.data.ownedHeroes[slot0.heroId]) return { success: false, error: `\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48 ${slot0.heroId} \u0E43\u0E19\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E2D\u0E07` };
    if (!this.data.ownedHeroes[slot1.heroId]) return { success: false, error: `\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48 ${slot1.heroId} \u0E43\u0E19\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E2D\u0E07` };
    if (slot0.heroId === slot1.heroId) return { success: false, error: "\u0E2B\u0E49\u0E32\u0E21\u0E43\u0E0A\u0E49\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E15\u0E31\u0E27\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E43\u0E19 2 \u0E0A\u0E48\u0E2D\u0E07" };
    if (slot0.row === slot1.row && slot0.col === slot1.col) return { success: false, error: "\u0E2B\u0E49\u0E32\u0E21\u0E27\u0E32\u0E07\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E19\u0E1A\u0E19\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19" };
    if (slot0.col < 0 || slot0.col > 2 || slot1.col < 0 || slot1.col > 2) return { success: false, error: "\u0E1E\u0E34\u0E01\u0E31\u0E14 Col \u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07 0-2" };
    this.data.activeTeam2v2 = { slot0, slot1 };
    this.save();
    return { success: true };
  }
  // ==========================================
  // ตู้ฟักไข่ (Incubator System)
  // ==========================================
  /**
   * วางไข่ลงในช่องฟัก
   */
  placeEgg(slotIndex, eggType) {
    if (slotIndex < 0 || slotIndex >= 2) return { success: false, error: "\u0E2A\u0E25\u0E47\u0E2D\u0E15\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07" };
    if (this.data.incubatorSlots[slotIndex]) return { success: false, error: "\u0E0A\u0E48\u0E2D\u0E07\u0E1F\u0E31\u0E01\u0E19\u0E35\u0E49\u0E21\u0E35\u0E44\u0E02\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27" };
    const req = {};
    if (eggType === "normal") req.normalEggs = 1;
    else if (eggType === "gold") req.goldEggs = 1;
    else if (eggType === "mythic") req.mythicEggs = 1;
    if (!this.consumeResources(req)) {
      return { success: false, error: `\u0E44\u0E21\u0E48\u0E21\u0E35\u0E44\u0E02\u0E48\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 ${eggType} \u0E43\u0E19\u0E01\u0E23\u0E30\u0E40\u0E1B\u0E4B\u0E32` };
    }
    const cfg = EGG_CONFIG[eggType];
    this.data.incubatorSlots[slotIndex] = {
      slotIndex,
      eggType,
      startTime: Date.now(),
      durationMs: cfg.durationMs
    };
    this.save();
    return { success: true };
  }
  /**
   * ตรวจสอบว่าไข่พร้อมฟักหรือยัง
   */
  isEggReady(slotIndex) {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return false;
    return Date.now() - slot.startTime >= slot.durationMs;
  }
  /**
   * ดึงเวลาคงเหลือในการฟัก (ms)
   */
  getRemainingTimeMs(slotIndex) {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return 0;
    const elapsed = Date.now() - slot.startTime;
    return Math.max(0, slot.durationMs - elapsed);
  }
  /**
   * ใช้พลังอบอุ่น (Warmth) เร่งเวลาฟัก
   */
  applyWarmth(slotIndex, warmthToUse) {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return { success: false, error: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E44\u0E02\u0E48\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E19\u0E35\u0E49" };
    if (this.data.inventory.warmth < warmthToUse) return { success: false, error: "\u0E1E\u0E25\u0E31\u0E07\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19\u0E44\u0E21\u0E48\u0E1E\u0E2D" };
    const reduceMs = warmthToUse * 10 * 60 * 1e3;
    slot.startTime -= reduceMs;
    this.data.inventory.warmth -= warmthToUse;
    this.save();
    return { success: true, minutesReduced: warmthToUse * 10 };
  }
  /**
   * เร่งฟักทันที (โหมดทดสอบ Graybox / Fast Hatch)
   */
  instantHatchSlot(slotIndex) {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return false;
    slot.startTime = Date.now() - slot.durationMs;
    this.save();
    return true;
  }
  /**
   * กะเทาะเปลือกไข่ (Hatch Egg) และรับสัตว์เลี้ยง
   */
  hatchEgg(slotIndex) {
    const slot = this.data.incubatorSlots[slotIndex];
    if (!slot) return { success: false, error: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E44\u0E02\u0E48\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E19\u0E35\u0E49" };
    if (!this.isEggReady(slotIndex)) {
      return { success: false, error: "\u0E44\u0E02\u0E48\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1F\u0E31\u0E01 (\u0E40\u0E27\u0E25\u0E32\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A)" };
    }
    const cfg = EGG_CONFIG[slot.eggType];
    let selectedRarity = "B";
    if (slot.eggType === "gold") {
      this.data.pityCounterSS += 1;
      if (this.data.pityCounterSS >= 30) {
        selectedRarity = "SS";
        this.data.pityCounterSS = 0;
      }
    }
    if (selectedRarity !== "SS") {
      const roll = Math.random();
      let cumulative = 0;
      for (const r of ["B", "A", "S", "SS"]) {
        cumulative += cfg.rates[r];
        if (roll <= cumulative) {
          selectedRarity = r;
          break;
        }
      }
    }
    if (selectedRarity === "SS") {
      this.data.pityCounterSS = 0;
    }
    const candidateHeroes = heroes_default.heroes.filter((h) => h.rarity === selectedRarity);
    const chosen = candidateHeroes[Math.floor(Math.random() * candidateHeroes.length)];
    const res = this.acquireHero(chosen.id);
    this.data.incubatorSlots[slotIndex] = null;
    this.data.totalEggsHatched += 1;
    this.save();
    return {
      success: true,
      hero: res.hero,
      isNew: res.isNew,
      shardsGained: res.shardsGained
    };
  }
  // ==========================================
  // ด่านผจญภัย (Campaign Stages)
  // ==========================================
  recordStageClear(stageId, stars, rewards) {
    const existing = this.data.clearedStages[stageId];
    const firstClear = !existing;
    this.data.clearedStages[stageId] = {
      stageId,
      stars: Math.max(existing?.stars || 0, stars),
      clearedAt: Date.now(),
      firstClearClaimed: true
    };
    if (rewards.gold) this.addGold(rewards.gold);
    if (rewards.food) this.addFood(rewards.food);
    if (rewards.crystals) this.addCrystals(rewards.crystals);
    if (rewards.warmth) this.addWarmth(rewards.warmth);
    if (rewards.egg) this.addEggs(rewards.egg, 1);
    if (rewards.unlockedNextStageId && !this.data.unlockedStages.includes(rewards.unlockedNextStageId)) {
      this.data.unlockedStages.push(rewards.unlockedNextStageId);
    }
    this.save();
  }
  getStageClear(stageId) {
    return this.data.clearedStages[stageId];
  }
  isStageCleared(stageId) {
    return !!this.data.clearedStages[stageId];
  }
  getTotalStars() {
    return Object.values(this.data.clearedStages).reduce((acc, cur) => acc + (cur.stars || 0), 0);
  }
  getStageStars(stageId) {
    return this.data.clearedStages[stageId]?.stars || 0;
  }
  // ==========================================
  // ระบบ Skill Board
  // ==========================================
  unlockElementRow(element, stoneCost = 3) {
    if (this.data.unlockedElementRows.includes(element)) {
      return { success: false, error: "\u0E41\u0E16\u0E27\u0E18\u0E32\u0E15\u0E38\u0E19\u0E35\u0E49\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27" };
    }
    const stones = this.data.inventory.elementStones[element] || 0;
    if (stones < stoneCost) {
      return { success: false, error: `\u0E2B\u0E34\u0E19\u0E18\u0E32\u0E15\u0E38 ${element} \u0E44\u0E21\u0E48\u0E1E\u0E2D (\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 ${stoneCost} \u0E0A\u0E34\u0E49\u0E19, \u0E21\u0E35 ${stones} \u0E0A\u0E34\u0E49\u0E19)` };
    }
    this.data.inventory.elementStones[element] -= stoneCost;
    this.data.unlockedElementRows.push(element);
    this.save();
    return { success: true };
  }
  unlockSkill(skillId, goldCost, bookCost = 0) {
    if (this.data.unlockedSkills.includes(skillId)) {
      return { success: false, error: "\u0E2A\u0E01\u0E34\u0E25\u0E19\u0E35\u0E49\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27" };
    }
    const sk = skills_default.skills.find((s) => s.id === skillId);
    if (!sk) return { success: false, error: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A" };
    let branch = sk.element;
    if (sk.element === "neutral") {
      if (skillId.startsWith("martial_")) branch = "martial";
      else if (skillId.startsWith("medical_")) branch = "medical";
      else if (skillId.startsWith("trick_")) branch = "trick";
      else if (skillId.startsWith("catalyst_")) branch = "catalyst";
      else if (skillId.startsWith("secret_")) branch = "secret";
    }
    const isRowUnlocked = this.data.unlockedElementRows.includes(sk.element) || this.data.unlockedElementRows.includes(branch) || sk.element === "neutral" && this.data.unlockedElementRows.includes("neutral");
    if (!isRowUnlocked) {
      return { success: false, error: `\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E16\u0E27 [${branch}] \u0E01\u0E48\u0E2D\u0E19` };
    }
    if (this.data.inventory.gold < goldCost) {
      return { success: false, error: `\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E1E\u0E2D (\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 ${goldCost} \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D)` };
    }
    if (bookCost > 0) {
      const books = this.data.inventory.skillBooks[skillId] || 0;
      if (books < bookCost) {
        return { success: false, error: `\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E31\u0E21\u0E20\u0E35\u0E23\u0E4C\u0E2A\u0E01\u0E34\u0E25 ${bookCost} \u0E40\u0E25\u0E48\u0E21 (\u0E21\u0E35 ${books} \u0E40\u0E25\u0E48\u0E21)` };
      }
      this.data.inventory.skillBooks[skillId] -= bookCost;
    }
    this.data.inventory.gold -= goldCost;
    this.data.unlockedSkills.push(skillId);
    if (!this.data.skillLevels[skillId]) {
      this.data.skillLevels[skillId] = 1;
    }
    this.save();
    return { success: true };
  }
  getSkillLevel(skillId) {
    return this.data.skillLevels[skillId] || (this.data.unlockedSkills.includes(skillId) ? 1 : 0);
  }
  setSkillLevel(skillId, level) {
    this.data.skillLevels[skillId] = Math.max(1, Math.min(5, level));
    this.save();
  }
  getSkillPresets() {
    return this.data.skillPresets;
  }
  saveSkillPreset(preset) {
    this.data.skillPresets[preset.id] = { ...preset };
    this.save();
  }
  deleteSkillPreset(presetId) {
    if (!this.data.skillPresets[presetId]) return false;
    delete this.data.skillPresets[presetId];
    this.save();
    return true;
  }
};
var saveManager = new SaveManager();

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

// src/data/heroes.json with { type: 'json' }
var heroes_default2 = {
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
    ],
    BEHEMOTH: [
      0.505,
      0.198,
      0.297
    ],
    LEVIATHAN: [
      0.4835,
      0.2308,
      0.2857
    ],
    GARUDA: [
      0.489,
      0.2582,
      0.2528
    ],
    THUNDERBIRD: [
      0.4945,
      0.2527,
      0.2528
    ],
    FENRIR: [
      0.5,
      0.2253,
      0.2747
    ],
    VERDANT_HYDRA: [
      0.478,
      0.2143,
      0.3077
    ],
    KING_BASILISK: [
      0.489,
      0.2363,
      0.2747
    ],
    CERBERUS: [
      0.5055,
      0.2198,
      0.2747
    ],
    SOLAR_GRIFFIN: [
      0.4945,
      0.2418,
      0.2637
    ],
    NINE_TAILED_FOX: [
      0.4835,
      0.2527,
      0.2638
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
        type: "stone_curse",
        duration: 1,
        chance: 0.65
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
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E02\u0E13\u0E30 HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 65% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E2A\u0E20\u0E32\u0E27\u0E30\u0E04\u0E25\u0E31\u0E48\u0E07\u0E28\u0E36\u0E01 (Berserk: ATK+30%, SPD+20%, DEF-20%, HIT-10, 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP",
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
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E32\u0E40\u0E21\u0E08 +18%, \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15% \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E09\u0E35\u0E14\u0E1E\u0E34\u0E29\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
      id: "behemoth",
      name: "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18",
      rarity: "SS",
      element: "earth",
      archetype: "BEHEMOTH",
      role: "Striker",
      str: 92,
      agi: 36,
      sta: 54,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E01\u0E31\u0E21\u0E1B\u0E19\u0E32\u0E17\u0E16\u0E25\u0E48\u0E21\u0E42\u0E25\u0E01\u0E31\u0E19\u0E15\u0E23\u0E4C",
      signatureEffect: {
        type: "armor_break_and_stun",
        target: "enemy",
        duration: 1,
        defRedPct: 0.3,
        chance: 0.85
      },
      ability: {
        id: "colossal_tremor",
        name: "\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E31\u0E48\u0E19",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 (AB) +15% \u0E41\u0E25\u0E30\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E15\u0E31\u0E19\u0E16\u0E32\u0E27\u0E23 \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E08\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 25% ATK \u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
      },
      defaultSkills: [
        "earth_l",
        "earth_m2",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.5
    },
    {
      id: "leviathan",
      name: "\u0E40\u0E25\u0E40\u0E27\u0E35\u0E22\u0E18\u0E32\u0E19",
      rarity: "SS",
      element: "water",
      archetype: "LEVIATHAN",
      role: "Striker",
      str: 88,
      agi: 42,
      sta: 52,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E21\u0E2B\u0E32\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34\u0E01\u0E25\u0E37\u0E19\u0E2A\u0E21\u0E38\u0E17\u0E23",
      signatureEffect: {
        type: "dispel_and_sp_drain",
        target: "enemy",
        count: 1,
        value: 25,
        chance: 0.85
      },
      ability: {
        id: "oceanic_surge",
        name: "\u0E08\u0E49\u0E32\u0E27\u0E04\u0E25\u0E31\u0E48\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D SP \u0E02\u0E2D\u0E07\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 50% \u0E2A\u0E01\u0E34\u0E25\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E08\u0E30\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +20% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E17\u0E35\u0E48\u0E08\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +15 \u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48\u0E15\u0E19\u0E40\u0E2D\u0E07"
      },
      defaultSkills: [
        "water_l",
        "water_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.3
    },
    {
      id: "garuda",
      name: "\u0E1E\u0E0D\u0E32\u0E04\u0E23\u0E38\u0E11",
      rarity: "SS",
      element: "wind",
      archetype: "GARUDA",
      role: "Striker",
      str: 89,
      agi: 47,
      sta: 46,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E25\u0E32\u0E15\u0E31\u0E19\u0E09\u0E35\u0E01\u0E19\u0E20\u0E32",
      signatureEffect: {
        type: "bleed",
        duration: 2,
        chance: 0.9
      },
      ability: {
        id: "sky_rending_talons",
        name: "\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E27\u0E2B\u0E32\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
        description: "\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 CRI +12% \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 CriDmg +25% \xB7 \u0E21\u0E35\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07 (Root) \u0E41\u0E25\u0E30\u0E2A\u0E42\u0E25\u0E27\u0E4C (Slow) 100%"
      },
      defaultSkills: [
        "wind_l",
        "wind_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.4
    },
    {
      id: "thunderbird",
      name: "\u0E18\u0E31\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E14",
      rarity: "SS",
      element: "electric",
      archetype: "THUNDERBIRD",
      role: "Striker",
      str: 90,
      agi: 46,
      sta: 46,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E21\u0E2B\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1C\u0E48\u0E32\u0E1E\u0E34\u0E20\u0E1E",
      signatureEffect: {
        type: "stun_and_gauge_drain",
        duration: 1,
        value: 25,
        chance: 0.85
      },
      ability: {
        id: "static_discharge",
        name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07",
        description: "\u0E17\u0E38\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E40\u0E01\u0E34\u0E14\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E0B\u0E49\u0E33\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32 30% ATK \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E04\u0E48\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E25\u0E07\u0E44\u0E14\u0E49 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E31\u0E19\u0E17\u0E35 +25"
      },
      defaultSkills: [
        "electric_l",
        "electric_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.5
    },
    {
      id: "fenrir",
      name: "\u0E40\u0E1F\u0E19\u0E23\u0E34\u0E23\u0E4C",
      rarity: "SS",
      element: "ice",
      archetype: "FENRIR",
      role: "Striker",
      str: 91,
      agi: 41,
      sta: 50,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25\u0E01\u0E25\u0E37\u0E19\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C",
      signatureEffect: {
        type: "freeze",
        duration: 1,
        chance: 0.85
      },
      ability: {
        id: "glacial_fang_hunt",
        name: "\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E09\u0E35\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
        description: "\u0E2B\u0E32\u0E01\u0E28\u0E31\u0E15\u0E23\u0E39\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (Freeze) \u0E2B\u0E23\u0E37\u0E2D\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C (Ice Skin) \u0E08\u0E30\u0E42\u0E08\u0E21\u0E15\u0E35\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +30% \xB7 \u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +12%"
      },
      defaultSkills: [
        "ice_l",
        "ice_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.6
    },
    {
      id: "verdant_hydra",
      name: "\u0E44\u0E2E\u0E14\u0E23\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32",
      rarity: "SS",
      element: "plant",
      archetype: "VERDANT_HYDRA",
      role: "Striker",
      str: 87,
      agi: 39,
      sta: 56,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1B\u0E10\u0E1E\u0E35",
      signatureEffect: {
        type: "root",
        duration: 2,
        chance: 0.8
      },
      ability: {
        id: "thorn_regrowth",
        name: "\u0E2B\u0E19\u0E32\u0E21\u0E07\u0E2D\u0E01\u0E40\u0E07\u0E22\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E",
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 4% Max HP \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 \u0E08\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19 (Shield) \u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A 15% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49"
      },
      defaultSkills: [
        "plant_l",
        "plant_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.2
    },
    {
      id: "king_basilisk",
      name: "\u0E1A\u0E32\u0E0B\u0E34\u0E25\u0E34\u0E2A\u0E01\u0E4C",
      rarity: "SS",
      element: "poison",
      archetype: "KING_BASILISK",
      role: "Striker",
      str: 89,
      agi: 43,
      sta: 50,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E19\u0E15\u0E23\u0E21\u0E23\u0E13\u0E30\u0E1E\u0E34\u0E29\u0E2D\u0E40\u0E27\u0E08\u0E35",
      signatureEffect: {
        type: "max_poison_and_armor_break",
        duration: 3,
        value: 0.3,
        chance: 0.9
      },
      ability: {
        id: "caustic_venom_aura",
        name: "\u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E25\u0E30\u0E25\u0E32\u0E22\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01",
        description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +25% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E17\u0E35\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E08\u0E30\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "poison_l",
        "poison_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.5
    },
    {
      id: "cerberus",
      name: "\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E2D\u0E23\u0E31\u0E2A",
      rarity: "SS",
      element: "dark",
      archetype: "CERBERUS",
      role: "Striker",
      str: 92,
      agi: 40,
      sta: 50,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E21\u0E34\u0E2C\u0E17\u0E32\u0E23\u0E4C\u0E17\u0E32\u0E23\u0E31\u0E2A",
      signatureEffect: {
        type: "curse",
        duration: 999,
        chance: 0.8
      },
      ability: {
        id: "tartarus_three_fangs",
        name: "\u0E2A\u0E32\u0E21\u0E40\u0E28\u0E35\u0E22\u0E23\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E1A\u0E31\u0E1F",
        description: "\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 35% ATK \xB7 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E2D\u0E22\u0E48\u0E32\u0E07"
      },
      defaultSkills: [
        "dark_l",
        "dark_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.7
    },
    {
      id: "solar_griffin",
      name: "\u0E1E\u0E0D\u0E32\u0E01\u0E23\u0E34\u0E1F\u0E1F\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19",
      rarity: "SS",
      element: "light",
      archetype: "SOLAR_GRIFFIN",
      role: "Striker",
      str: 90,
      agi: 44,
      sta: 48,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32",
      signatureEffect: {
        type: "dispel_all_and_blind",
        duration: 2,
        chance: 0.85
      },
      ability: {
        id: "solar_piercing_crest",
        name: "\u0E23\u0E31\u0E28\u0E21\u0E35\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30",
        description: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 HIT +15 \u0E41\u0E25\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 AB +15 \u0E16\u0E32\u0E27\u0E23 \xB7 \u0E21\u0E35\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 (Blind) 100%"
      },
      defaultSkills: [
        "light_l",
        "light_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.4
    },
    {
      id: "nine_tailed_fox",
      name: "\u0E1E\u0E0D\u0E32\u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07",
      rarity: "SS",
      element: "psychic",
      archetype: "NINE_TAILED_FOX",
      role: "Striker",
      str: 88,
      agi: 46,
      sta: 48,
      customMultipliers: {
        hp: 1.05,
        atk: 1.05
      },
      signatureName: "\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
      signatureEffect: {
        type: "sp_drain",
        value: 30,
        chance: 1
      },
      ability: {
        id: "psionic_spirit_orbs",
        name: "\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E17\u0E27\u0E35\u0E04\u0E39\u0E13",
        description: "\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E23\u0E48\u0E32\u0E22\u0E2A\u0E01\u0E34\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E08\u0E30\u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 1 \u0E25\u0E39\u0E01 (\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +5% \u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 4 \u0E25\u0E39\u0E01 \u0E23\u0E27\u0E21 +20%) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E30\u0E2A\u0E21\u0E04\u0E23\u0E1A 4 \u0E25\u0E39\u0E01 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 20% \u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1E\u0E25\u0E31\u0E07\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E30\u0E25\u0E31\u0E22\u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP -15 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 (\u0E2A\u0E25\u0E32\u0E22\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E30\u0E2A\u0E21\u0E43\u0E2B\u0E21\u0E48) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (Confusion 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
      },
      defaultSkills: [
        "psychic_l",
        "psychic_m1",
        "martial_l",
        "catalyst_l"
      ],
      preferredRow: "front",
      backlineChance: 0,
      customSigMult: 4.3
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
        name: "\u0E27\u0E34\u0E2B\u0E04\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E & \u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07",
        description: "\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E16\u0E32\u0E27\u0E23 (\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F 20% & \u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08\u0E16\u0E36\u0E07\u0E15\u0E32\u0E22\u0E04\u0E23\u0E31\u0E49\u0E07\u0E41\u0E23\u0E01\u0E43\u0E19\u0E44\u0E1F\u0E15\u0E4C \u0E08\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E 100% (\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 80% \u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E\u0E14\u0E49\u0E27\u0E22 HP \u0E40\u0E15\u0E47\u0E21\u0E2B\u0E25\u0E2D\u0E14, \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E1F\u0E37\u0E49\u0E19 60% \u0E02\u0E2D\u0E07 Max HP) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
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
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E23\u0E37\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29\u0E40\u0E19\u0E21\u0E32\u0E42\u0E17\u0E0B\u0E34\u0E2A\u0E15\u0E4C \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -8 \u0E41\u0E15\u0E49\u0E21"
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
        description: "\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A 10% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 60% \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 (Ice Skin: DEF+20%, SPD-30%, \u0E16\u0E39\u0E01\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39) 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 5% Max HP",
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
        type: "curse_and_silence",
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
        description: "\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E23\u0E07\u0E2A\u0E39\u0E07 860V \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -10 \u0E41\u0E15\u0E49\u0E21"
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
        name: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22",
        description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat: \u0E0B\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 40% \u0E40\u0E02\u0E49\u0E32 SP \u0E19\u0E32\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 (HIT) \u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E25\u0E07 10 \u0E41\u0E15\u0E49\u0E21"
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
        description: "\u0E25\u0E14\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34\u0E25\u0E07 25% \xB7 \u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat: \u0E0B\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 40% \u0E40\u0E02\u0E49\u0E32 SP \u0E19\u0E32\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E43\u0E2B\u0E49\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E17\u0E35\u0E48\u0E21\u0E35 HP \u0E15\u0E48\u0E33\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"
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
        description: "\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 12% \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D HP \u0E25\u0E14\u0E25\u0E07\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 65% \u0E08\u0E30\u0E1B\u0E25\u0E14\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat: \u0E0B\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 40% \u0E40\u0E02\u0E49\u0E32 SP \u0E19\u0E32\u0E19 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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

// src/data/skills.json with { type: 'json' }
var skills_default2 = {
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
    fire_skin: {
      fireDmgBonusPct: 0.2,
      onHitBurnChance: 0.4,
      burnIgniteHpPct: 0.03,
      duration: 2
    },
    berserk: {
      atkBonusPct: 0.3,
      spdBonusPct: 0.2,
      defRedPct: 0.2,
      hitRed: 10,
      duration: 2
    },
    ice_skin: {
      spdRedPct: 0.3,
      defBonusPct: 0.2,
      onHitFreezeChance: 0.4,
      duration: 2
    },
    stone_curse: {
      duration: 1,
      isHardCC: true,
      blockHealing: true,
      transformElement: "earth"
    },
    curse: {
      hpLossPctPerTurn: 0.03,
      permanent: true
    },
    paralysis: {
      spdRedPct: 0.25,
      flinchChance: 0.6,
      duration: 2
    },
    energy_coat: {
      damageToSpPct: 0.4,
      duration: 3,
      isBuff: true
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
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E1B\u0E25\u0E27\u0E2D\u0E31\u0E04\u0E04\u0E35",
      element: "fire",
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.1,
      effects: [
        {
          type: "fire_skin",
          target: "self",
          duration: 2
        },
        {
          type: "buff_atk",
          target: "self",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.1 \xB7 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07 \u{1F525} (\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F 20% & \u0E42\u0E14\u0E19\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49/\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F ATK +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
          type: "stone_curse",
          chance: 0.35,
          duration: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E2A\u0E32\u0E1B\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19 \u{1F5FF} (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: \u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19 \u0E2B\u0E49\u0E32\u0E21\u0E42\u0E08\u0E21\u0E15\u0E35\u0E41\u0E25\u0E30\u0E2B\u0E49\u0E32\u0E21\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39)"
    },
    {
      id: "lightning_s",
      name: "\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E44\u0E1F\u0E1F\u0E49\u0E32",
      element: "lightning",
      tier: "S",
      baseChance: 0.2,
      damageMult: 1.6,
      bonusAb: 15,
      effects: [
        {
          type: "paralysis",
          chance: 0.3,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.6 \xB7 \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21 +15% \u0E43\u0E19\u0E17\u0E48\u0E32\u0E19\u0E35\u0E49 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: SPD -25%, \u0E0A\u0E30\u0E07\u0E31\u0E01 60%)"
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
          type: "paralysis",
          chance: 0.55,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.65 \xB7 \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E0A\u0E47\u0E2D\u0E15 \u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: SPD -25%, \u0E0A\u0E30\u0E07\u0E31\u0E01 60%)"
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
          chance: 0.45,
          duration: 1
        },
        {
          type: "paralysis",
          chance: 0.65,
          duration: 2
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E0A\u0E47\u0E2D\u0E15\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: SPD -25%, \u0E0A\u0E30\u0E07\u0E31\u0E01 60%)"
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
          type: "ice_skin",
          target: "self",
          duration: 2
        },
        {
          type: "shield",
          target: "self",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 \u2744\uFE0F (DEF +20%, SPD \u221230%, \u0E16\u0E39\u0E01\u0E15\u0E35\u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E25\u0E30\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07) (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
        },
        {
          type: "dispel",
          target: "enemy",
          chance: 0.3,
          count: 1
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.5 \xB7 \u0E02\u0E42\u0E21\u0E22 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% \u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) + \u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E2A\u0E38\u0E48\u0E21\u0E25\u0E1A\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F\u0E14\u0E49\u0E32\u0E19\u0E14\u0E35\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E2D\u0E22\u0E48\u0E32\u0E07"
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
          type: "curse",
          chance: 0.45
        }
      ],
      description: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.2 \xB7 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 \u{1F52E} (\u0E25\u0E14 HP 3% \u0E17\u0E38\u0E01\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E15\u0E32\u0E22 \u0E25\u0E49\u0E32\u0E07\u0E14\u0E49\u0E27\u0E22 Cleanse \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19)"
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
          type: "berserk",
          target: "self",
          chance: 0.85,
          duration: 2
        },
        {
          type: "gauge_change",
          target: "self",
          chance: 0.85,
          value: 25
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E2A\u0E20\u0E32\u0E27\u0E30\u0E04\u0E25\u0E31\u0E48\u0E07\u0E28\u0E36\u0E01 \u{1F621} (ATK +30%, SPD +20%, DEF \u221220%, HIT \u221210, 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +25"
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
          chance: 0.2,
          duration: 1
        },
        {
          type: "paralysis",
          chance: 0.4,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08 \xD71.25 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 20% \u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
      str: 61,
      agi: 40,
      sta: 31,
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
      str: 47,
      agi: 42,
      sta: 42,
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
      str: 32,
      agi: 35,
      sta: 65,
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
      str: 44,
      agi: 44,
      sta: 44,
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
      str: 42,
      agi: 50,
      sta: 39,
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
      str: 35,
      agi: 31,
      sta: 66,
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
      str: 44,
      agi: 46,
      sta: 42,
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
      str: 46,
      agi: 48,
      sta: 38,
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
      str: 60,
      agi: 39,
      sta: 33,
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
      str: 40,
      agi: 54,
      sta: 37,
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
var HERO_MAP = new Map([...heroes_default2.heroes, ...enemies_default.enemies].map((h) => [h.id, h]));
var SKILL_MAP = new Map(skills_default2.skills.map((s) => [s.id, s]));
function getAllHeroes() {
  return heroes_default2.heroes;
}
function getAllElements() {
  return elements_default.elements;
}
function computeHeroStats(heroId, level = 1, stars = 1) {
  const h = HERO_MAP.get(heroId);
  if (!h) throw new Error(`Unknown hero: ${heroId}`);
  const C = heroes_default2.statFormula;
  const budget = heroes_default2.classBudgets[h.rarity];
  const shares = heroes_default2.archetypeShares[h.archetype];
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

// src/engine/skill_board_manager.ts
var NEUTRAL_BRANCHES = [
  { id: "martial", name: "\u0E2A\u0E32\u0E22\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E17\u0E48\u0E32", fullName: "\u{1F94B} \u0E2A\u0E32\u0E22\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E17\u0E48\u0E32 (Martial Arts)", icon: "\u{1F94B}", description: "\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 & \u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34" },
  { id: "medical", name: "\u0E2A\u0E32\u0E22\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25", fullName: "\u{1F49A} \u0E2A\u0E32\u0E22\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25 (Medical Arts)", icon: "\u{1F49A}", description: "\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP & \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F & \u0E40\u0E15\u0E34\u0E21 SP" },
  { id: "trick", name: "\u0E2A\u0E32\u0E22\u0E40\u0E25\u0E48\u0E2B\u0E4C\u0E01\u0E25", fullName: "\u{1F3AD} \u0E2A\u0E32\u0E22\u0E40\u0E25\u0E48\u0E2B\u0E4C\u0E01\u0E25 (Trick Arts)", icon: "\u{1F3AD}", description: "\u0E15\u0E35\u0E40\u0E1A\u0E32 & \u0E25\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E28\u0E31\u0E15\u0E23\u0E39 & \u0E15\u0E31\u0E14 SP" },
  { id: "catalyst", name: "\u0E2A\u0E32\u0E22\u0E40\u0E23\u0E48\u0E07\u0E1B\u0E0F\u0E34\u0E01\u0E34\u0E23\u0E34\u0E22\u0E32", fullName: "\u26A1 \u0E2A\u0E32\u0E22\u0E40\u0E23\u0E48\u0E07\u0E1B\u0E0F\u0E34\u0E01\u0E34\u0E23\u0E34\u0E22\u0E32 (Catalyst Arts)", icon: "\u26A1", description: "\u0E40\u0E23\u0E48\u0E07\u0E1A\u0E31\u0E1F & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22" },
  { id: "secret", name: "\u0E2A\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E25\u0E31\u0E1A", fullName: "\u{1F4DC} \u0E2A\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E25\u0E31\u0E1A (Secret Arts)", icon: "\u{1F4DC}", description: "\u0E01\u0E25\u0E44\u0E01\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E42\u0E15\u0E49\u0E01\u0E25\u0E31\u0E1A & \u0E40\u0E07\u0E32\u0E21\u0E32\u0E22\u0E32" }
];
var ROW_UNLOCK_STONE_COST = 3;
var FREE_STARTER_ROWS = [
  "fire",
  "wind",
  "earth",
  "neutral",
  "martial",
  "medical",
  "trick",
  "catalyst",
  "secret"
];
var SKILL_UNLOCK_COSTS = {
  S: { gold: 200, books: 0, crystals: 0 },
  M: { gold: 400, books: 1, crystals: 0 },
  L: { gold: 800, books: 2, crystals: 10 },
  AOE: { gold: 600, books: 1, crystals: 0 }
};
var SKILL_LEVEL_UP_COSTS = {
  2: { books: 1, gold: 150 },
  3: { books: 2, gold: 300 },
  4: { books: 3, gold: 500 },
  5: { books: 5, gold: 1e3 }
};
var SkillBoardManager = class {
  /**
   * ดึงแถวสกิลทั้งหมด (11 แถวธาตุ + 5 แถวสายวิชาไร้ธาตุ = 16 แถว)
   */
  getAllRows() {
    const save2 = saveManager.getData();
    const rows = [];
    for (const el of elements_default.elements) {
      const isUnlocked = save2.unlockedElementRows.includes(el.id);
      const rowSkills = this.getSkillsForElement(el.id);
      rows.push({
        elementId: el.id,
        name: `\u0E18\u0E32\u0E15\u0E38${el.name}`,
        icon: el.icon,
        category: "element",
        isUnlocked,
        unlockCostStones: FREE_STARTER_ROWS.includes(el.id) ? 0 : ROW_UNLOCK_STONE_COST,
        skills: rowSkills
      });
    }
    for (const nb of NEUTRAL_BRANCHES) {
      const isUnlocked = save2.unlockedElementRows.includes(nb.id) || save2.unlockedElementRows.includes("neutral");
      const rowSkills = this.getSkillsForBranch(nb.id);
      rows.push({
        elementId: nb.id,
        name: nb.name,
        icon: nb.icon,
        category: "neutral",
        isUnlocked,
        unlockCostStones: 0,
        // 5 สายไร้ธาตุเปิดฟรีทั้งหมดตามหลักการ GDD
        skills: rowSkills
      });
    }
    return rows;
  }
  /**
   * ดึงข้อมูลแถวธาตุเฉพาะ
   */
  getRow(elementId) {
    return this.getAllRows().find((r) => r.elementId === elementId);
  }
  /**
   * ตรวจสอบว่าสามารถปลดล็อกแถวธาตุได้หรือไม่
   */
  canUnlockRow(elementId) {
    const save2 = saveManager.getData();
    if (save2.unlockedElementRows.includes(elementId)) {
      return { canUnlock: false, reason: "\u0E41\u0E16\u0E27\u0E18\u0E32\u0E15\u0E38\u0E19\u0E35\u0E49\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27" };
    }
    if (FREE_STARTER_ROWS.includes(elementId)) {
      return { canUnlock: true };
    }
    const currentStones = save2.inventory.elementStones[elementId] || 0;
    if (currentStones < ROW_UNLOCK_STONE_COST) {
      return {
        canUnlock: false,
        reason: `\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2B\u0E34\u0E19\u0E18\u0E32\u0E15\u0E38 [${elementId}] ${ROW_UNLOCK_STONE_COST} \u0E0A\u0E34\u0E49\u0E19 (\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48 ${currentStones} \u0E0A\u0E34\u0E49\u0E19)`
      };
    }
    return { canUnlock: true };
  }
  /**
   * ปลดล็อกแถวธาตุ
   */
  unlockRow(elementId) {
    const check = this.canUnlockRow(elementId);
    if (!check.canUnlock) {
      return { success: false, error: check.reason };
    }
    const stoneCost = FREE_STARTER_ROWS.includes(elementId) ? 0 : ROW_UNLOCK_STONE_COST;
    return saveManager.unlockElementRow(elementId, stoneCost);
  }
  /**
   * ดึงข้อมูลสกิลแบบละเอียด
   */
  getSkill(skillId) {
    const rawSkill = skills_default2.skills.find((s) => s.id === skillId);
    if (!rawSkill) return void 0;
    const save2 = saveManager.getData();
    const isUnlocked = save2.unlockedSkills.includes(skillId);
    const level = isUnlocked ? save2.skillLevels[skillId] || 1 : 0;
    const branch = getSkillBranch(skillId);
    let tier = "S";
    if (skillId.endsWith("_aoe")) {
      tier = "AOE";
    } else if (rawSkill.tier === "L") {
      tier = "L";
    } else if (rawSkill.tier === "M") {
      tier = "M";
    }
    const unlockCost = SKILL_UNLOCK_COSTS[tier];
    const nextLevel = level < 5 ? level + 1 : 0;
    const levelUpCost = isUnlocked && nextLevel > 1 ? SKILL_LEVEL_UP_COSTS[nextLevel] : null;
    let prerequisiteSkillId;
    if (tier === "M") {
      prerequisiteSkillId = this.findPrerequisiteSkill(skillId, "S");
    } else if (tier === "L") {
      prerequisiteSkillId = this.findPrerequisiteSkill(skillId, "M");
    }
    const spCost = rawSkill.spCost ?? (tier === "S" ? 20 : tier === "M" ? 35 : 55);
    return {
      id: rawSkill.id,
      name: rawSkill.name,
      element: rawSkill.element,
      branch,
      tier,
      spCost,
      baseChance: rawSkill.baseChance,
      damageMult: rawSkill.damageMult,
      description: rawSkill.description,
      isUnlocked,
      level,
      unlockCost,
      levelUpCost,
      prerequisiteSkillId
    };
  }
  /**
   * ตรวจสอบว่าสามารถปลดล็อกสกิลได้หรือไม่
   */
  canUnlockSkill(skillId) {
    const skill = this.getSkill(skillId);
    if (!skill) return { canUnlock: false, reason: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A" };
    if (skill.isUnlocked) return { canUnlock: false, reason: "\u0E2A\u0E01\u0E34\u0E25\u0E19\u0E35\u0E49\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27" };
    const save2 = saveManager.getData();
    const rowId = skill.element === "neutral" ? skill.branch : skill.element;
    const isRowUnlocked = save2.unlockedElementRows.includes(rowId) || save2.unlockedElementRows.includes(skill.element) || skill.element === "neutral" && save2.unlockedElementRows.includes("neutral");
    if (!isRowUnlocked) {
      return { canUnlock: false, reason: `\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E16\u0E27\u0E18\u0E32\u0E15\u0E38 [${rowId}] \u0E01\u0E48\u0E2D\u0E19` };
    }
    if (skill.prerequisiteSkillId && !save2.unlockedSkills.includes(skill.prerequisiteSkillId)) {
      const preSkill = this.getSkill(skill.prerequisiteSkillId);
      return {
        canUnlock: false,
        reason: `\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E01\u0E34\u0E25 [${preSkill?.name || skill.prerequisiteSkillId}] \u0E01\u0E48\u0E2D\u0E19`
      };
    }
    if (save2.inventory.gold < skill.unlockCost.gold) {
      return {
        canUnlock: false,
        reason: `\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E1E\u0E2D (\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 ${skill.unlockCost.gold} Gold, \u0E21\u0E35 ${save2.inventory.gold} Gold)`
      };
    }
    if (skill.unlockCost.books > 0) {
      const currentBooks = save2.inventory.skillBooks[skillId] || 0;
      if (currentBooks < skill.unlockCost.books) {
        return {
          canUnlock: false,
          reason: `\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E31\u0E21\u0E20\u0E35\u0E23\u0E4C\u0E2A\u0E01\u0E34\u0E25 ${skill.unlockCost.books} \u0E40\u0E25\u0E48\u0E21 (\u0E21\u0E35 ${currentBooks} \u0E40\u0E25\u0E48\u0E21)`
        };
      }
    }
    if (skill.unlockCost.crystals > 0) {
      if (save2.inventory.crystals < skill.unlockCost.crystals) {
        return {
          canUnlock: false,
          reason: `\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E31\u0E25 ${skill.unlockCost.crystals} \u0E0A\u0E34\u0E49\u0E19 (\u0E21\u0E35 ${save2.inventory.crystals} \u0E0A\u0E34\u0E49\u0E19)`
        };
      }
    }
    return { canUnlock: true };
  }
  /**
   * ปลดล็อกสกิล
   */
  unlockSkill(skillId) {
    const check = this.canUnlockSkill(skillId);
    if (!check.canUnlock) {
      return { success: false, error: check.reason };
    }
    const skill = this.getSkill(skillId);
    const save2 = saveManager.getData();
    if (skill.unlockCost.crystals > 0) {
      if (!saveManager.consumeResources({ crystals: skill.unlockCost.crystals })) {
        return { success: false, error: "\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E31\u0E25\u0E44\u0E21\u0E48\u0E1E\u0E2D" };
      }
    }
    return saveManager.unlockSkill(skillId, skill.unlockCost.gold, skill.unlockCost.books);
  }
  /**
   * ตรวจสอบว่าสามารถอัปเลเวลสกิลได้หรือไม่
   */
  canLevelUpSkill(skillId) {
    const skill = this.getSkill(skillId);
    if (!skill) return { canLevelUp: false, reason: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A" };
    if (!skill.isUnlocked) return { canLevelUp: false, reason: "\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E01\u0E34\u0E25\u0E01\u0E48\u0E2D\u0E19\u0E2D\u0E31\u0E1B\u0E40\u0E25\u0E40\u0E27\u0E25" };
    if (skill.level >= 5) return { canLevelUp: false, reason: "\u0E2A\u0E01\u0E34\u0E25\u0E16\u0E36\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E25\u0E40\u0E27\u0E25\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 (Lv.5) \u0E41\u0E25\u0E49\u0E27" };
    const nextLevel = skill.level + 1;
    const cost = SKILL_LEVEL_UP_COSTS[nextLevel];
    if (!cost) return { canLevelUp: false, reason: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22" };
    const save2 = saveManager.getData();
    if (save2.inventory.gold < cost.gold) {
      return {
        canLevelUp: false,
        reason: `\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E1E\u0E2D (\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 ${cost.gold} Gold, \u0E21\u0E35 ${save2.inventory.gold} Gold)`,
        cost
      };
    }
    const currentBooks = save2.inventory.skillBooks[skillId] || 0;
    if (currentBooks < cost.books) {
      return {
        canLevelUp: false,
        reason: `\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E31\u0E21\u0E20\u0E35\u0E23\u0E4C\u0E2A\u0E01\u0E34\u0E25 ${cost.books} \u0E40\u0E25\u0E48\u0E21 (\u0E21\u0E35 ${currentBooks} \u0E40\u0E25\u0E48\u0E21)`,
        cost
      };
    }
    return { canLevelUp: true, cost };
  }
  /**
   * อัปเลเวลสกิล (Lv.1 - Lv.5)
   */
  levelUpSkill(skillId) {
    const check = this.canLevelUpSkill(skillId);
    if (!check.canLevelUp || !check.cost) {
      return { success: false, error: check.reason };
    }
    const save2 = saveManager.getData();
    save2.inventory.gold -= check.cost.gold;
    save2.inventory.skillBooks[skillId] -= check.cost.books;
    const currentLevel = save2.skillLevels[skillId] || 1;
    const newLevel = currentLevel + 1;
    save2.skillLevels[skillId] = newLevel;
    saveManager.save();
    return { success: true, newLevel };
  }
  /**
   * คำนวณตัวคูณโบนัสพลังของสกิลตามระดับเลเวล (Lv.1 = ×1.00, Lv.5 = ×1.25)
   */
  getSkillLevelDamageMultiplier(skillId) {
    const level = saveManager.getSkillLevel(skillId);
    if (level <= 1) return 1;
    return level === 5 ? 1.25 : 1 + (level - 1) * 0.05;
  }
  // ==========================================
  // การติดตั้งสกิลและตรวจสอบความถูกต้อง (Skill Loadout)
  // ==========================================
  /**
   * ตรวจสอบความถูกต้องของชุดสกิล 4 ช่อง
   * ตามเงื่อนไข:
   * 1. สกิลต้องปลดล็อกแล้วในบัญชี
   * 2. ห้ามมีสกิลซ้ำกัน
   * 3. ธาตุหรือสายเดียวกันใส่ได้ไม่เกิน 2 ท่า
   */
  validateLoadout(skillIds) {
    const errors = [];
    const save2 = saveManager.getData();
    const seen = /* @__PURE__ */ new Set();
    const branchCounts = /* @__PURE__ */ new Map();
    const activeSkills = skillIds.filter(Boolean);
    if (activeSkills.length !== 4) {
      errors.push(`\u0E15\u0E49\u0E2D\u0E07\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E01\u0E34\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A 4 \u0E0A\u0E48\u0E2D\u0E07 (\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E21\u0E35 ${activeSkills.length} \u0E0A\u0E48\u0E2D\u0E07)`);
    }
    for (let i = 0; i < activeSkills.length; i++) {
      const id = activeSkills[i];
      const sk = this.getSkill(id);
      if (!sk) {
        errors.push(`\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48 ${i + 1}: \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E23\u0E2B\u0E31\u0E2A [${id}] \u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A`);
        continue;
      }
      if (!save2.unlockedSkills.includes(id)) {
        errors.push(`\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48 ${i + 1}: \u0E2A\u0E01\u0E34\u0E25 [${sk.name}] \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E43\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E2A\u0E01\u0E34\u0E25`);
      }
      if (seen.has(id)) {
        errors.push(`\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48 ${i + 1}: \u0E2A\u0E01\u0E34\u0E25 [${sk.name}] \u0E16\u0E39\u0E01\u0E2A\u0E27\u0E21\u0E43\u0E2A\u0E48\u0E0B\u0E49\u0E33`);
      }
      seen.add(id);
      const branch = sk.branch;
      const count = (branchCounts.get(branch) || 0) + 1;
      branchCounts.set(branch, count);
      if (count > MAX_SKILLS_PER_BRANCH) {
        errors.push(`\u0E2A\u0E32\u0E22 [${branch}] \u0E2A\u0E27\u0E21\u0E43\u0E2A\u0E48\u0E40\u0E01\u0E34\u0E19\u0E42\u0E04\u0E27\u0E15\u0E32 ${MAX_SKILLS_PER_BRANCH} \u0E17\u0E48\u0E32`);
      }
    }
    return { valid: errors.length === 0, errors };
  }
  /**
   * ตรวจสอบความถูกต้องของการติดตั้งสกิลลงในช่องเป้าหมาย (0-3) ของฮีโร่
   * รองรับการติดตั้งทีละช่องสำหรับสัตว์เลี้ยงใหม่ที่ยังไม่มีสกิลครบ 4 ช่อง
   * กฎที่ตรวจสอบ:
   * 1. สกิลต้องปลดล็อกแล้วในกระดานสกิล
   * 2. ห้ามสวมใส่สกิลซ้ำกับช่องอื่น
   * 3. สายวิชาเดียวกันใส่ได้ไม่เกิน 2 ท่า
   */
  validateSlotEquip(heroId, slotIdx, skillId) {
    const errors = [];
    const save2 = saveManager.getData();
    const hero = save2.ownedHeroes[heroId];
    if (!hero) {
      return { valid: false, errors: [`\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 [${heroId}] \u0E43\u0E19\u0E04\u0E25\u0E31\u0E07`] };
    }
    if (slotIdx < 0 || slotIdx > 3) {
      return { valid: false, errors: [`\u0E0A\u0E48\u0E2D\u0E07\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (${slotIdx + 1})`] };
    }
    if (!skillId) {
      return { valid: true, errors: [] };
    }
    const sk = this.getSkill(skillId);
    if (!sk) {
      return { valid: false, errors: [`\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E23\u0E2B\u0E31\u0E2A [${skillId}] \u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A`] };
    }
    if (!save2.unlockedSkills.includes(skillId)) {
      return { valid: false, errors: [`\u0E2A\u0E01\u0E34\u0E25 [${sk.name}] \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E43\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E2A\u0E01\u0E34\u0E25`] };
    }
    const currentSlots = [
      hero.customSkills[0] || "",
      hero.customSkills[1] || "",
      hero.customSkills[2] || "",
      hero.customSkills[3] || ""
    ];
    for (let i = 0; i < 4; i++) {
      if (i !== slotIdx && currentSlots[i] === skillId) {
        errors.push(`\u0E2A\u0E01\u0E34\u0E25 [${sk.name}] \u0E16\u0E39\u0E01\u0E2A\u0E27\u0E21\u0E43\u0E2A\u0E48\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48 ${i + 1} \u0E41\u0E25\u0E49\u0E27 (\u0E2B\u0E49\u0E32\u0E21\u0E2A\u0E27\u0E21\u0E43\u0E2A\u0E48\u0E2A\u0E01\u0E34\u0E25\u0E0B\u0E49\u0E33)`);
      }
    }
    currentSlots[slotIdx] = skillId;
    const branchCounts = /* @__PURE__ */ new Map();
    for (const sId of currentSlots) {
      if (!sId) continue;
      const sItem = this.getSkill(sId);
      if (!sItem) continue;
      const count = (branchCounts.get(sItem.branch) || 0) + 1;
      branchCounts.set(sItem.branch, count);
      if (count > MAX_SKILLS_PER_BRANCH) {
        errors.push(`\u0E2A\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 [${sItem.branch}] \u0E2A\u0E27\u0E21\u0E43\u0E2A\u0E48\u0E40\u0E01\u0E34\u0E19\u0E42\u0E04\u0E27\u0E15\u0E32 ${MAX_SKILLS_PER_BRANCH} \u0E17\u0E48\u0E32`);
        break;
      }
    }
    return { valid: errors.length === 0, errors };
  }
  /**
   * ติดตั้งสกิลลงในช่องเป้าหมาย (0-3) ของสัตว์เลี้ยง
   * รองรับการใส่สกิลทีละช่องสำหรับสัตว์เลี้ยงใหม่
   */
  equipSkillToSlot(heroId, slotIdx, skillId) {
    const check = this.validateSlotEquip(heroId, slotIdx, skillId);
    if (!check.valid) {
      return { success: false, error: check.errors.join(" | ") };
    }
    const save2 = saveManager.getData();
    const hero = save2.ownedHeroes[heroId];
    if (!hero) return { success: false, error: `\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 [${heroId}]` };
    const newSlots = [
      hero.customSkills[0] || "",
      hero.customSkills[1] || "",
      hero.customSkills[2] || "",
      hero.customSkills[3] || ""
    ];
    newSlots[slotIdx] = skillId;
    return saveManager.setHeroSkills(heroId, newSlots);
  }
  /**
   * ติดตั้งชุดสกิลให้กับฮีโร่
   */
  equipSkillsToHero(heroId, skillIds, allowPartial = false) {
    const activeSkills = skillIds.filter(Boolean);
    if (activeSkills.length === 4 || !allowPartial) {
      const check = this.validateLoadout(skillIds);
      if (!check.valid) {
        return { success: false, error: check.errors.join(" | ") };
      }
      return saveManager.setHeroSkills(heroId, skillIds);
    }
    const save2 = saveManager.getData();
    const seen = /* @__PURE__ */ new Set();
    const branchCounts = /* @__PURE__ */ new Map();
    for (let i = 0; i < skillIds.length; i++) {
      const id = skillIds[i];
      if (!id) continue;
      const sk = this.getSkill(id);
      if (!sk) return { success: false, error: `\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48 ${i + 1}: \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E23\u0E2B\u0E31\u0E2A [${id}]` };
      if (!save2.unlockedSkills.includes(id)) return { success: false, error: `\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E35\u0E48 ${i + 1}: \u0E2A\u0E01\u0E34\u0E25 [${sk.name}] \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01` };
      if (seen.has(id)) return { success: false, error: `\u0E2A\u0E01\u0E34\u0E25 [${sk.name}] \u0E16\u0E39\u0E01\u0E2A\u0E27\u0E21\u0E43\u0E2A\u0E48\u0E0B\u0E49\u0E33` };
      seen.add(id);
      const count = (branchCounts.get(sk.branch) || 0) + 1;
      branchCounts.set(sk.branch, count);
      if (count > MAX_SKILLS_PER_BRANCH) return { success: false, error: `\u0E2A\u0E32\u0E22 [${sk.branch}] \u0E2A\u0E27\u0E21\u0E43\u0E2A\u0E48\u0E40\u0E01\u0E34\u0E19\u0E42\u0E04\u0E27\u0E15\u0E32 ${MAX_SKILLS_PER_BRANCH} \u0E17\u0E48\u0E32` };
    }
    const newSlots = [
      skillIds[0] || "",
      skillIds[1] || "",
      skillIds[2] || "",
      skillIds[3] || ""
    ];
    return saveManager.setHeroSkills(heroId, newSlots);
  }
  // ==========================================
  // ระบบ Skill Presets (พรีเซตสกิล)
  // ==========================================
  getPresets() {
    const presetsObj = saveManager.getSkillPresets();
    return Object.values(presetsObj).sort((a, b) => a.createdAt - b.createdAt);
  }
  getPreset(presetId) {
    return saveManager.getSkillPresets()[presetId];
  }
  createPreset(id, name, skills, description) {
    const check = this.validateLoadout(skills);
    if (!check.valid) {
      return { success: false, error: check.errors.join(" | ") };
    }
    const preset = {
      id,
      name,
      description,
      skills,
      createdAt: Date.now()
    };
    saveManager.saveSkillPreset(preset);
    return { success: true, preset };
  }
  applyPresetToHero(heroId, presetId) {
    const preset = this.getPreset(presetId);
    if (!preset) return { success: false, error: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1E\u0E23\u0E35\u0E40\u0E0B\u0E15\u0E2A\u0E01\u0E34\u0E25\u0E19\u0E35\u0E49" };
    return this.equipSkillsToHero(heroId, preset.skills);
  }
  deletePreset(presetId) {
    const res = saveManager.deleteSkillPreset(presetId);
    if (!res) return { success: false, error: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1E\u0E23\u0E35\u0E40\u0E0B\u0E15\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A" };
    return { success: true };
  }
  // ==========================================
  // Helper Methods
  // ==========================================
  getSkillsForElement(elementId) {
    const all = skills_default2.skills.filter((s) => s.element === elementId);
    return all.map((s) => this.getSkill(s.id)).filter(Boolean);
  }
  getSkillsForBranch(branchId) {
    const all = skills_default2.skills.filter((s) => {
      if (s.element !== "neutral") return s.element === branchId;
      return getSkillBranch(s.id) === branchId;
    });
    return all.map((s) => this.getSkill(s.id)).filter(Boolean);
  }
  findPrerequisiteSkill(skillId, targetTier) {
    const currentBranch = getSkillBranch(skillId);
    const candidate = skills_default2.skills.filter((s) => getSkillBranch(s.id) === currentBranch && s.tier === targetTier).map((s) => s.id)[0];
    return candidate;
  }
};
var skillBoardManager = new SkillBoardManager();

// src/ui/skill_board_view.ts
var HERO_MAP2 = new Map(getAllHeroes().map((h) => [h.id, h]));
var ELEMENT_MAP2 = new Map(getAllElements().map((e) => [e.id, e]));

// src/data/animal_lore.json
var animal_lore_default = {
  rooster: {
    scientificName: "Gallus gallus domesticus",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1B\u0E35\u0E01\u0E08\u0E33\u0E1E\u0E27\u0E01\u0E19\u0E01 (Aves)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E25\u0E30\u0E40\u0E21\u0E32\u0E30 \u0E0A\u0E32\u0E22\u0E1B\u0E48\u0E32\u0E42\u0E1B\u0E23\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E0A\u0E19\u0E1A\u0E17",
    diet: "\u0E01\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07\u0E1E\u0E37\u0E0A\u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C (Omnivore) \u0E40\u0E0A\u0E48\u0E19 \u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E37\u0E0A \u0E41\u0E21\u0E25\u0E07 \u0E2B\u0E19\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E22\u0E2D\u0E14\u0E2B\u0E0D\u0E49\u0E32",
    physicalFeatures: "\u0E2B\u0E07\u0E2D\u0E19\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E42\u0E14\u0E14\u0E40\u0E14\u0E48\u0E19 \u0E08\u0E30\u0E07\u0E2D\u0E22\u0E1B\u0E32\u0E01\u0E41\u0E2B\u0E25\u0E21\u0E04\u0E21 \u0E02\u0E19\u0E41\u0E27\u0E27\u0E27\u0E32\u0E27 \u0E41\u0E25\u0E30\u0E40\u0E14\u0E37\u0E2D\u0E22\u0E41\u0E2B\u0E25\u0E21\u0E17\u0E35\u0E48\u0E02\u0E49\u0E2D\u0E40\u0E17\u0E49\u0E32\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49",
    natureBehavior: "\u0E15\u0E37\u0E48\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E23\u0E38\u0E48\u0E07\u0E2A\u0E32\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E02\u0E31\u0E19\u0E01\u0E49\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1A\u0E2D\u0E01\u0E2D\u0E32\u0E13\u0E32\u0E40\u0E02\u0E15 \u0E21\u0E35\u0E2A\u0E32\u0E22\u0E15\u0E32\u0E09\u0E31\u0E1A\u0E44\u0E27\u0E43\u0E19\u0E01\u0E32\u0E23\u0E21\u0E2D\u0E07\u0E2B\u0E32\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E14\u0E34\u0E19\u0E41\u0E25\u0E30\u0E15\u0E37\u0E48\u0E19\u0E15\u0E31\u0E27\u0E23\u0E30\u0E27\u0E31\u0E07\u0E20\u0E31\u0E22\u0E15\u0E25\u0E2D\u0E14\u0E40\u0E27\u0E25\u0E32",
    elementalOrigin: "\u0E44\u0E01\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1B\u0E35\u0E01\u0E17\u0E35\u0E48\u0E21\u0E35\u0E23\u0E39\u0E1B\u0E23\u0E48\u0E32\u0E07\u0E2A\u0E07\u0E48\u0E32\u0E07\u0E32\u0E21 \u0E02\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22 \u0E0A\u0E2D\u0E1A\u0E02\u0E31\u0E19\u0E23\u0E31\u0E1A\u0E2D\u0E23\u0E38\u0E13\u0E22\u0E32\u0E21\u0E40\u0E0A\u0E49\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E41\u0E2A\u0E07\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E2D\u0E31\u0E19\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19 \u0E08\u0E36\u0E07\u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E44\u0E2D\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E14\u0E27\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19 \u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E18\u0E32\u0E15\u0E38\u0E44\u0E1F\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E25\u0E40\u0E27\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E31\u0E48\u0E27\u0E23\u0E48\u0E32\u0E07\u0E41\u0E25\u0E30\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E1B\u0E32\u0E01\u0E2D\u0E31\u0E19\u0E23\u0E49\u0E2D\u0E19\u0E41\u0E23\u0E07",
    didYouKnow: "\u0E44\u0E01\u0E48\u0E21\u0E35\u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32\u0E0A\u0E35\u0E27\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E40\u0E0A\u0E37\u0E48\u0E2D \u0E41\u0E25\u0E30\u0E14\u0E27\u0E07\u0E15\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E41\u0E2A\u0E07 UV \u0E17\u0E35\u0E48\u0E21\u0E19\u0E38\u0E29\u0E22\u0E4C\u0E21\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E40\u0E2B\u0E47\u0E19\u0E44\u0E14\u0E49",
    combatConnection: "\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E02\u0E31\u0E19\u0E23\u0E31\u0E1A\u0E2D\u0E23\u0E38\u0E13\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19 Ability [\u0E02\u0E31\u0E19\u0E1B\u0E25\u0E38\u0E01\u0E2D\u0E23\u0E38\u0E13] \u0E17\u0E35\u0E48\u0E21\u0E2D\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E42\u0E08\u0E21\u0E15\u0E35\u0E41\u0E25\u0E30\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E43\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E41\u0E23\u0E01 \u0E2A\u0E48\u0E27\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E34\u0E01\u0E15\u0E35\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E08\u0E39\u0E48\u0E42\u0E08\u0E21]"
  },
  cat: {
    scientificName: "Felis catus",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E08\u0E33\u0E1E\u0E27\u0E01\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E01\u0E34\u0E19\u0E40\u0E19\u0E37\u0E49\u0E2D (Carnivora)",
    naturalHabitat: "\u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32 \u0E1B\u0E48\u0E32\u0E42\u0E1B\u0E23\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E21\u0E19\u0E38\u0E29\u0E22\u0E4C",
    diet: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E01\u0E34\u0E19\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E41\u0E17\u0E49 (Obligate Carnivore) \u0E25\u0E48\u0E32\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1F\u0E31\u0E19\u0E41\u0E17\u0E30 \u0E41\u0E21\u0E25\u0E07 \u0E41\u0E25\u0E30\u0E19\u0E01\u0E02\u0E19\u0E32\u0E14\u0E40\u0E25\u0E47\u0E01",
    physicalFeatures: "\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E22\u0E37\u0E14\u0E2B\u0E22\u0E38\u0E48\u0E19\u0E2A\u0E39\u0E07 \u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E1E\u0E31\u0E1A\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E14\u0E49 \u0E2D\u0E38\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32\u0E19\u0E38\u0E48\u0E21\u0E19\u0E27\u0E25\u0E44\u0E23\u0E49\u0E40\u0E2A\u0E35\u0E22\u0E07 \u0E41\u0E25\u0E30\u0E2B\u0E19\u0E27\u0E14\u0E23\u0E31\u0E1A\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E41\u0E23\u0E07\u0E2A\u0E31\u0E48\u0E19\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19\u0E43\u0E19\u0E2D\u0E32\u0E01\u0E32\u0E28",
    natureBehavior: "\u0E22\u0E48\u0E2D\u0E07\u0E40\u0E1A\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E32\u0E40\u0E2B\u0E22\u0E37\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E07\u0E35\u0E22\u0E1A\u0E2A\u0E07\u0E1A \u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E41\u0E25\u0E30\u0E01\u0E25\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E01\u0E25\u0E32\u0E07\u0E2D\u0E32\u0E01\u0E32\u0E28\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23\u0E49\u0E17\u0E35\u0E48\u0E15\u0E34 \u0E23\u0E31\u0E01\u0E2D\u0E34\u0E2A\u0E23\u0E30\u0E41\u0E25\u0E30\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E30\u0E21\u0E31\u0E14\u0E23\u0E30\u0E27\u0E31\u0E07\u0E15\u0E31\u0E27\u0E2A\u0E39\u0E07",
    elementalOrigin: "\u0E41\u0E21\u0E27\u0E40\u0E1B\u0E47\u0E19\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27\u0E41\u0E25\u0E30\u0E23\u0E31\u0E01\u0E2D\u0E34\u0E2A\u0E23\u0E30 \u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E44\u0E23\u0E49\u0E2A\u0E38\u0E49\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E27\u0E01\u0E31\u0E1A\u0E2A\u0E32\u0E22\u0E25\u0E21 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E25\u0E34\u0E01\u0E15\u0E31\u0E27\u0E01\u0E25\u0E32\u0E07\u0E2D\u0E32\u0E01\u0E32\u0E28\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23\u0E49\u0E17\u0E35\u0E48\u0E15\u0E34 \u0E08\u0E36\u0E07\u0E2B\u0E25\u0E2D\u0E21\u0E23\u0E27\u0E21\u0E40\u0E02\u0E49\u0E32\u0E01\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E25\u0E21 \u0E01\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E1E\u0E23\u0E34\u0E49\u0E27\u0E44\u0E2B\u0E27\u0E17\u0E35\u0E48\u0E22\u0E32\u0E01\u0E08\u0E30\u0E08\u0E31\u0E1A\u0E15\u0E31\u0E27",
    didYouKnow: "\u0E41\u0E21\u0E27\u0E21\u0E35\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E44\u0E2B\u0E1B\u0E25\u0E32\u0E23\u0E49\u0E32\u0E17\u0E35\u0E48\u0E25\u0E2D\u0E22\u0E2D\u0E34\u0E2A\u0E23\u0E30 \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E22\u0E36\u0E14\u0E15\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E0A\u0E34\u0E49\u0E19\u0E2D\u0E37\u0E48\u0E19 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E21\u0E38\u0E14\u0E1C\u0E48\u0E32\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E41\u0E04\u0E1A\u0E46 \u0E17\u0E35\u0E48\u0E02\u0E19\u0E32\u0E14\u0E1E\u0E2D\u0E14\u0E35\u0E01\u0E31\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49\u0E40\u0E2A\u0E21\u0E2D",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E04\u0E25\u0E48\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E15\u0E32\u0E21\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E41\u0E21\u0E27\u0E21\u0E35\u0E04\u0E48\u0E32\u0E2A\u0E40\u0E15\u0E15\u0E31\u0E2A SPD \u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E2A\u0E32\u0E22\u0E25\u0E21\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E23\u0E48\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E19\u0E40\u0E2D\u0E07"
  },
  buffalo: {
    scientificName: "Bubalus bubalis",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E40\u0E04\u0E35\u0E49\u0E22\u0E27\u0E40\u0E2D\u0E37\u0E49\u0E2D\u0E07 (Bovidae)",
    naturalHabitat: "\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E49\u0E33 \u0E17\u0E35\u0E48\u0E23\u0E32\u0E1A\u0E25\u0E38\u0E48\u0E21 \u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32\u0E0A\u0E38\u0E48\u0E21\u0E0A\u0E37\u0E49\u0E19 \u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E29\u0E15\u0E23\u0E01\u0E23\u0E23\u0E21",
    diet: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E01\u0E34\u0E19\u0E1E\u0E37\u0E0A (Herbivore) \u0E01\u0E34\u0E19\u0E2B\u0E0D\u0E49\u0E32 \u0E1E\u0E37\u0E0A\u0E19\u0E49\u0E33 \u0E41\u0E25\u0E30\u0E1F\u0E32\u0E07",
    physicalFeatures: "\u0E40\u0E02\u0E32\u0E22\u0E32\u0E27\u0E42\u0E04\u0E49\u0E07\u0E2B\u0E19\u0E32\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07 \u0E2B\u0E19\u0E31\u0E07\u0E2B\u0E19\u0E32\u0E17\u0E19\u0E17\u0E32\u0E19 \u0E01\u0E35\u0E1A\u0E40\u0E17\u0E49\u0E32\u0E01\u0E27\u0E49\u0E32\u0E07\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E40\u0E14\u0E34\u0E19\u0E1A\u0E19\u0E14\u0E34\u0E19\u0E40\u0E25\u0E19\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E08\u0E21",
    natureBehavior: "\u0E0A\u0E2D\u0E1A\u0E41\u0E0A\u0E48\u0E1B\u0E25\u0E31\u0E01\u0E42\u0E04\u0E25\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E19\u0E41\u0E25\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E41\u0E21\u0E25\u0E07 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E14\u0E17\u0E19\u0E2A\u0E39\u0E07 \u0E2A\u0E38\u0E02\u0E38\u0E21 \u0E23\u0E31\u0E01\u0E2A\u0E07\u0E1A \u0E41\u0E15\u0E48\u0E2B\u0E32\u0E01\u0E16\u0E39\u0E01\u0E04\u0E38\u0E01\u0E04\u0E32\u0E21\u0E08\u0E30\u0E23\u0E27\u0E21\u0E1E\u0E25\u0E31\u0E07\u0E01\u0E31\u0E19\u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E1D\u0E39\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E14\u0E38\u0E14\u0E31\u0E19",
    elementalOrigin: "\u0E04\u0E27\u0E32\u0E22\u0E21\u0E35\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E01\u0E33\u0E22\u0E33\u0E25\u0E48\u0E33\u0E2A\u0E31\u0E19 \u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E25\u0E30\u0E17\u0E23\u0E2B\u0E14\u0E2D\u0E14\u0E17\u0E19 \u0E0A\u0E2D\u0E1A\u0E19\u0E2D\u0E19\u0E41\u0E0A\u0E48\u0E1B\u0E25\u0E31\u0E01\u0E42\u0E04\u0E25\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E1C\u0E34\u0E27\u0E2B\u0E19\u0E31\u0E07 \u0E08\u0E36\u0E07\u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E44\u0E2D\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E2D\u0E31\u0E19\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E19\u0E48\u0E19 \u0E01\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E28\u0E34\u0E25\u0E32\u0E14\u0E34\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E17\u0E38\u0E01\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35",
    didYouKnow: "\u0E42\u0E04\u0E25\u0E19\u0E17\u0E35\u0E48\u0E04\u0E27\u0E32\u0E22\u0E0A\u0E2D\u0E1A\u0E25\u0E07\u0E44\u0E1B\u0E40\u0E01\u0E25\u0E37\u0E2D\u0E01\u0E01\u0E25\u0E34\u0E49\u0E07\u0E17\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E31\u0E19\u0E41\u0E14\u0E14\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34 \u0E41\u0E25\u0E30\u0E0A\u0E48\u0E27\u0E22\u0E2A\u0E21\u0E32\u0E19\u0E41\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E1B\u0E23\u0E2A\u0E34\u0E15\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E",
    combatConnection: "\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E19\u0E2D\u0E19\u0E1B\u0E25\u0E31\u0E01\u0E42\u0E04\u0E25\u0E19\u0E41\u0E1B\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19 Ability [\u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E2A\u0E39\u0E49\u0E42\u0E04\u0E25\u0E19] \u0E17\u0E35\u0E48\u0E25\u0E14\u0E17\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E41\u0E25\u0E30\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E22\u0E2D\u0E14\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21"
  },
  dog: {
    scientificName: "Canis lupus familiaris",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E08\u0E33\u0E1E\u0E27\u0E01\u0E2A\u0E38\u0E19\u0E31\u0E02 (Canidae)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E42\u0E1B\u0E23\u0E48\u0E07 \u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32 \u0E41\u0E25\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A\u0E21\u0E19\u0E38\u0E29\u0E22\u0E4C",
    diet: "\u0E01\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07\u0E1E\u0E37\u0E0A\u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C (Omnivore) \u0E21\u0E35\u0E1F\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E21\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E31\u0E14\u0E41\u0E17\u0E30\u0E41\u0E25\u0E30\u0E09\u0E35\u0E01\u0E40\u0E19\u0E37\u0E49\u0E2D",
    physicalFeatures: "\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E41\u0E02\u0E47\u0E07\u0E41\u0E23\u0E07 \u0E2B\u0E39\u0E44\u0E27 \u0E08\u0E21\u0E39\u0E01\u0E0A\u0E38\u0E48\u0E21\u0E0A\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E40\u0E0B\u0E25\u0E25\u0E4C\u0E23\u0E31\u0E1A\u0E01\u0E25\u0E34\u0E48\u0E19\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32\u0E21\u0E19\u0E38\u0E29\u0E22\u0E4C\u0E2B\u0E25\u0E32\u0E22\u0E2A\u0E34\u0E1A\u0E25\u0E49\u0E32\u0E19\u0E40\u0E0B\u0E25\u0E25\u0E4C",
    natureBehavior: "\u0E0B\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E15\u0E22\u0E4C \u0E2B\u0E27\u0E07\u0E41\u0E2B\u0E19\u0E2D\u0E32\u0E13\u0E32\u0E40\u0E02\u0E15\u0E41\u0E25\u0E30\u0E1D\u0E39\u0E07 \u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D\u0E01\u0E31\u0E19\u0E43\u0E19\u0E01\u0E32\u0E23\u0E44\u0E25\u0E48\u0E25\u0E48\u0E32 \u0E41\u0E25\u0E30\u0E15\u0E2D\u0E1A\u0E2A\u0E19\u0E2D\u0E07\u0E15\u0E48\u0E2D\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E0A\u0E32\u0E0D\u0E09\u0E25\u0E32\u0E14",
    elementalOrigin: "\u0E2A\u0E38\u0E19\u0E31\u0E02\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E1C\u0E39\u0E01\u0E1E\u0E31\u0E19\u0E25\u0E36\u0E01\u0E0B\u0E36\u0E49\u0E07\u0E01\u0E31\u0E1A\u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E41\u0E25\u0E30\u0E1E\u0E37\u0E0A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C \u0E01\u0E25\u0E34\u0E48\u0E19\u0E44\u0E2D\u0E02\u0E2D\u0E07\u0E14\u0E34\u0E19\u0E41\u0E25\u0E30\u0E1B\u0E48\u0E32\u0E0A\u0E48\u0E27\u0E22\u0E2B\u0E25\u0E48\u0E2D\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E08\u0E34\u0E15\u0E43\u0E08\u0E2D\u0E31\u0E19\u0E20\u0E31\u0E01\u0E14\u0E35 \u0E08\u0E36\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1E\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E1E\u0E24\u0E01\u0E29\u0E32 \u0E01\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E1E\u0E37\u0E0A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2B\u0E22\u0E31\u0E48\u0E07\u0E23\u0E32\u0E01\u0E15\u0E23\u0E36\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E1E\u0E25\u0E31\u0E07",
    didYouKnow: "\u0E23\u0E2D\u0E22\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E08\u0E21\u0E39\u0E01\u0E02\u0E2D\u0E07\u0E2A\u0E38\u0E19\u0E31\u0E02\u0E41\u0E15\u0E48\u0E25\u0E30\u0E15\u0E31\u0E27\u0E21\u0E35\u0E40\u0E2D\u0E01\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E15\u0E31\u0E27\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E25\u0E32\u0E22\u0E19\u0E34\u0E49\u0E27\u0E21\u0E37\u0E2D\u0E02\u0E2D\u0E07\u0E21\u0E19\u0E38\u0E29\u0E22\u0E4C \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E14\u0E21\u0E01\u0E25\u0E34\u0E48\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E22\u0E01\u0E41\u0E22\u0E30\u0E01\u0E25\u0E34\u0E48\u0E19\u0E44\u0E14\u0E49\u0E19\u0E31\u0E1A\u0E41\u0E2A\u0E19\u0E01\u0E25\u0E34\u0E48\u0E19",
    combatConnection: "\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E0D\u0E32\u0E13\u0E01\u0E32\u0E23\u0E01\u0E31\u0E14\u0E44\u0E21\u0E48\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E16\u0E39\u0E01\u0E19\u0E33\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E15\u0E23\u0E36\u0E07\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E17\u0E35\u0E48"
  },
  pig: {
    scientificName: "Sus domesticus",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E01\u0E35\u0E1A\u0E04\u0E39\u0E48 (Suidae)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E42\u0E1B\u0E23\u0E48\u0E07 \u0E0A\u0E32\u0E22\u0E1B\u0E48\u0E32 \u0E41\u0E25\u0E30\u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07",
    diet: "\u0E01\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07\u0E1E\u0E37\u0E0A\u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C (Omnivore) \u0E1C\u0E25\u0E44\u0E21\u0E49 \u0E2B\u0E31\u0E27\u0E21\u0E31\u0E19 \u0E23\u0E32\u0E01\u0E44\u0E21\u0E49 \u0E41\u0E25\u0E30\u0E41\u0E21\u0E25\u0E07",
    physicalFeatures: "\u0E08\u0E21\u0E39\u0E01\u0E01\u0E25\u0E21\u0E41\u0E02\u0E47\u0E07\u0E41\u0E23\u0E07\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E2D\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E19\u0E01\u0E32\u0E23\u0E02\u0E38\u0E14\u0E14\u0E34\u0E19 \u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E2D\u0E38\u0E14\u0E21\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E25\u0E30\u0E1C\u0E34\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2B\u0E19\u0E32",
    natureBehavior: "\u0E09\u0E25\u0E32\u0E14\u0E41\u0E25\u0E30\u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49\u0E2D\u0E22\u0E32\u0E01\u0E40\u0E2B\u0E47\u0E19 \u0E43\u0E0A\u0E49\u0E08\u0E21\u0E39\u0E01\u0E14\u0E21\u0E41\u0E25\u0E30\u0E02\u0E38\u0E14\u0E04\u0E38\u0E49\u0E22\u0E14\u0E34\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E19\u0E44\u0E1E\u0E23\u0E43\u0E15\u0E49\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19 \u0E0A\u0E2D\u0E1A\u0E19\u0E2D\u0E19\u0E40\u0E01\u0E25\u0E37\u0E2D\u0E01\u0E01\u0E25\u0E34\u0E49\u0E07\u0E43\u0E19\u0E42\u0E04\u0E25\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E01\u0E29\u0E32\u0E2D\u0E38\u0E13\u0E2B\u0E20\u0E39\u0E21\u0E34\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22",
    elementalOrigin: "\u0E2B\u0E21\u0E39\u0E43\u0E0A\u0E49\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E1C\u0E39\u0E01\u0E1E\u0E31\u0E19\u0E01\u0E31\u0E1A\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E01\u0E25\u0E49\u0E0A\u0E34\u0E14 \u0E01\u0E32\u0E23\u0E14\u0E21\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E23\u0E32\u0E01\u0E44\u0E21\u0E49\u0E41\u0E25\u0E30\u0E2A\u0E21\u0E38\u0E19\u0E44\u0E1E\u0E23\u0E43\u0E15\u0E49\u0E14\u0E34\u0E19\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E18\u0E32\u0E15\u0E38\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E2D\u0E31\u0E19\u0E2D\u0E38\u0E14\u0E21\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C \u0E08\u0E36\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19\u0E17\u0E35\u0E48\u0E21\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E38\u0E14\u0E21\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E25\u0E30\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1E\u0E49\u0E2D\u0E07",
    didYouKnow: "\u0E2B\u0E21\u0E39\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E17\u0E35\u0E48\u0E09\u0E25\u0E32\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E42\u0E25\u0E01 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E41\u0E25\u0E30\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32\u0E40\u0E02\u0E32\u0E27\u0E07\u0E01\u0E15\u0E44\u0E14\u0E49\u0E14\u0E35\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E48\u0E32\u0E2A\u0E38\u0E19\u0E31\u0E02\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E34\u0E07\u0E0A\u0E34\u0E21\u0E41\u0E1B\u0E19\u0E0B\u0E35",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E38\u0E14\u0E21\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E02\u0E2D\u0E07\u0E2A\u0E21\u0E38\u0E19\u0E44\u0E1E\u0E23\u0E43\u0E15\u0E49\u0E14\u0E34\u0E19\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E42\u0E04\u0E25\u0E19\u0E2A\u0E21\u0E38\u0E19\u0E44\u0E1E\u0E23\u0E1E\u0E2A\u0E38\u0E18\u0E32] \u0E17\u0E35\u0E48\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E17\u0E35\u0E21"
  },
  horse: {
    scientificName: "Equus caballus",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E01\u0E35\u0E1A\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 (Equidae)",
    naturalHabitat: "\u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32\u0E01\u0E27\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E0D\u0E48\u0E41\u0E25\u0E30\u0E17\u0E35\u0E48\u0E23\u0E32\u0E1A\u0E40\u0E1B\u0E34\u0E14\u0E42\u0E25\u0E48\u0E07",
    diet: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E01\u0E34\u0E19\u0E1E\u0E37\u0E0A (Herbivore) \u0E01\u0E34\u0E19\u0E2B\u0E0D\u0E49\u0E32 \u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E37\u0E0A \u0E41\u0E25\u0E30\u0E1E\u0E37\u0E0A\u0E43\u0E1A\u0E40\u0E02\u0E35\u0E22\u0E27",
    physicalFeatures: "\u0E02\u0E32\u0E22\u0E32\u0E27\u0E40\u0E1E\u0E23\u0E35\u0E22\u0E27 \u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2A\u0E30\u0E42\u0E1E\u0E01\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07 \u0E01\u0E35\u0E1A\u0E40\u0E17\u0E49\u0E32\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E2B\u0E19\u0E32\u0E41\u0E19\u0E48\u0E19 \u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E2A\u0E07\u0E48\u0E32\u0E07\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E1B\u0E2D\u0E14\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48",
    natureBehavior: "\u0E23\u0E31\u0E01\u0E01\u0E32\u0E23\u0E27\u0E34\u0E48\u0E07 \u0E27\u0E48\u0E2D\u0E07\u0E44\u0E27\u0E41\u0E25\u0E30\u0E15\u0E37\u0E48\u0E19\u0E15\u0E31\u0E27 \u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E23\u0E2D\u0E1A\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E27\u0E34\u0E48\u0E07\u0E2B\u0E19\u0E35\u0E20\u0E31\u0E22\u0E2D\u0E31\u0E19\u0E15\u0E23\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E2A\u0E39\u0E07",
    elementalOrigin: "\u0E21\u0E49\u0E32\u0E21\u0E35\u0E2B\u0E31\u0E27\u0E43\u0E08\u0E19\u0E31\u0E01\u0E2A\u0E39\u0E49\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2D\u0E31\u0E19\u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25 \u0E22\u0E32\u0E21\u0E04\u0E27\u0E1A\u0E17\u0E30\u0E22\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E2A\u0E39\u0E07 \u0E01\u0E35\u0E1A\u0E40\u0E17\u0E49\u0E32\u0E40\u0E2A\u0E35\u0E22\u0E14\u0E2A\u0E35\u0E01\u0E31\u0E1A\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19\u0E08\u0E19\u0E40\u0E01\u0E34\u0E14\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E44\u0E1F \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E43\u0E19\u0E01\u0E32\u0E22\u0E2A\u0E39\u0E1A\u0E09\u0E35\u0E14\u0E23\u0E49\u0E2D\u0E19\u0E41\u0E23\u0E07\u0E14\u0E31\u0E48\u0E07\u0E40\u0E1B\u0E25\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E22\u0E2D\u0E21\u0E41\u0E1E\u0E49\u0E15\u0E48\u0E2D\u0E2A\u0E34\u0E48\u0E07\u0E43\u0E14",
    didYouKnow: "\u0E21\u0E49\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E19\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E43\u0E19\u0E17\u0E48\u0E32\u0E22\u0E37\u0E19\u0E41\u0E25\u0E30\u0E17\u0E48\u0E32\u0E19\u0E2D\u0E19 \u0E14\u0E49\u0E27\u0E22\u0E01\u0E25\u0E44\u0E01\u0E25\u0E47\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E15\u0E48\u0E2D\u0E02\u0E32\u0E1E\u0E34\u0E40\u0E28\u0E29 (Stay Apparatus) \u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E1E\u0E22\u0E38\u0E07\u0E23\u0E48\u0E32\u0E07\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E01\u0E23\u0E47\u0E07\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E38\u0E48\u0E07\u0E0A\u0E19\u0E2D\u0E31\u0E19\u0E23\u0E49\u0E2D\u0E19\u0E41\u0E23\u0E07\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E35\u0E48\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08"
  },
  rat: {
    scientificName: "Rattus norvegicus",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E1F\u0E31\u0E19\u0E41\u0E17\u0E30 (Rodentia)",
    naturalHabitat: "\u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32 \u0E42\u0E1E\u0E23\u0E07\u0E43\u0E15\u0E49\u0E14\u0E34\u0E19 \u0E1B\u0E48\u0E32\u0E25\u0E30\u0E40\u0E21\u0E32\u0E30 \u0E41\u0E25\u0E30\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07",
    diet: "\u0E01\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07\u0E1E\u0E37\u0E0A\u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C (Omnivore) \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E01\u0E34\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E44\u0E14\u0E49\u0E41\u0E17\u0E1A\u0E17\u0E38\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17",
    physicalFeatures: "\u0E1F\u0E31\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E04\u0E39\u0E48\u0E04\u0E21\u0E01\u0E23\u0E34\u0E1A\u0E07\u0E2D\u0E01\u0E22\u0E32\u0E27\u0E15\u0E25\u0E2D\u0E14\u0E0A\u0E35\u0E27\u0E34\u0E15 \u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E22\u0E37\u0E14\u0E2B\u0E22\u0E38\u0E48\u0E19 \u0E2B\u0E32\u0E07\u0E22\u0E32\u0E27\u0E0A\u0E48\u0E27\u0E22\u0E17\u0E23\u0E07\u0E15\u0E31\u0E27\u0E41\u0E25\u0E30\u0E23\u0E30\u0E1A\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E49\u0E2D\u0E19",
    natureBehavior: "\u0E2B\u0E25\u0E1A\u0E0B\u0E48\u0E2D\u0E19\u0E43\u0E19\u0E21\u0E38\u0E21\u0E21\u0E37\u0E14 \u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27 \u0E27\u0E48\u0E2D\u0E07\u0E44\u0E27 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E23\u0E2D\u0E14\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E48\u0E17\u0E38\u0E23\u0E01\u0E31\u0E19\u0E14\u0E32\u0E23",
    elementalOrigin: "\u0E2B\u0E19\u0E39\u0E2D\u0E32\u0E28\u0E31\u0E22\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E21\u0E38\u0E21\u0E21\u0E37\u0E14\u0E41\u0E25\u0E30\u0E42\u0E1E\u0E23\u0E07\u0E2B\u0E21\u0E31\u0E01\u0E2B\u0E21\u0E21 \u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E1E\u0E34\u0E29\u0E41\u0E25\u0E30\u0E40\u0E0A\u0E37\u0E49\u0E2D\u0E42\u0E23\u0E04\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14 \u0E1F\u0E31\u0E19\u0E41\u0E17\u0E30\u0E2D\u0E31\u0E19\u0E04\u0E21\u0E01\u0E23\u0E34\u0E1A\u0E08\u0E36\u0E07\u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E44\u0E2D\u0E1E\u0E34\u0E29 \u0E01\u0E31\u0E14\u0E01\u0E23\u0E48\u0E2D\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E07\u0E35\u0E22\u0E1A\u0E40\u0E0A\u0E35\u0E22\u0E1A",
    didYouKnow: "\u0E1F\u0E31\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E39\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E01\u0E25\u0E49\u0E32 \u0E41\u0E25\u0E30\u0E2B\u0E19\u0E39\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E25\u0E34\u0E48\u0E19\u0E1E\u0E34\u0E29\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E08\u0E19\u0E41\u0E17\u0E1A\u0E44\u0E21\u0E48\u0E01\u0E34\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E14\u0E34\u0E21\u0E17\u0E35\u0E48\u0E40\u0E04\u0E22\u0E21\u0E35\u0E1E\u0E34\u0E29\u0E0B\u0E49\u0E33\u0E2A\u0E2D\u0E07",
    combatConnection: "\u0E1E\u0E34\u0E29\u0E01\u0E31\u0E14\u0E01\u0E23\u0E48\u0E2D\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E44\u0E27\u0E15\u0E32\u0E21\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E01\u0E34\u0E25\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E41\u0E1A\u0E1A\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 (Poison DoT) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E17\u0E2D\u0E19\u0E40\u0E01\u0E08 SP \u0E02\u0E2D\u0E07\u0E04\u0E39\u0E48\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49"
  },
  squirrel: {
    scientificName: "Sciurus carolinensis",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E1F\u0E31\u0E19\u0E41\u0E17\u0E30\u0E1A\u0E19\u0E15\u0E49\u0E19\u0E44\u0E21\u0E49 (Sciuridae)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E40\u0E1A\u0E0D\u0E08\u0E1E\u0E23\u0E23\u0E13 \u0E1B\u0E48\u0E32\u0E14\u0E34\u0E1A\u0E0A\u0E37\u0E49\u0E19 \u0E41\u0E25\u0E30\u0E2A\u0E27\u0E19\u0E1C\u0E25\u0E44\u0E21\u0E49",
    diet: "\u0E01\u0E34\u0E19\u0E1E\u0E37\u0E0A\u0E41\u0E25\u0E30\u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E37\u0E0A (Herbivore/Granivore) \u0E40\u0E21\u0E25\u0E47\u0E14\u0E2A\u0E19 \u0E16\u0E31\u0E48\u0E27 \u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E49 \u0E41\u0E25\u0E30\u0E41\u0E21\u0E25\u0E07\u0E02\u0E19\u0E32\u0E14\u0E40\u0E25\u0E47\u0E01",
    physicalFeatures: "\u0E2B\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E27\u0E07\u0E1F\u0E39\u0E43\u0E0A\u0E49\u0E17\u0E23\u0E07\u0E15\u0E31\u0E27\u0E41\u0E25\u0E30\u0E01\u0E31\u0E19\u0E2B\u0E19\u0E32\u0E27 \u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E42\u0E04\u0E49\u0E07\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1B\u0E35\u0E19\u0E1B\u0E48\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E14\u0E27\u0E07\u0E15\u0E32\u0E01\u0E25\u0E21\u0E42\u0E15",
    natureBehavior: "\u0E27\u0E48\u0E2D\u0E07\u0E44\u0E27 \u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27 \u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E02\u0E49\u0E32\u0E21\u0E01\u0E34\u0E48\u0E07\u0E44\u0E21\u0E49\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 \u0E0A\u0E2D\u0E1A\u0E40\u0E01\u0E47\u0E1A\u0E01\u0E31\u0E01\u0E15\u0E38\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E44\u0E27\u0E49\u0E15\u0E32\u0E21\u0E42\u0E1E\u0E23\u0E07\u0E44\u0E21\u0E49",
    elementalOrigin: "\u0E01\u0E23\u0E30\u0E23\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E22\u0E2D\u0E14\u0E44\u0E21\u0E49\u0E2A\u0E39\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E41\u0E2A\u0E07\u0E41\u0E14\u0E14\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19 \u0E02\u0E19\u0E2B\u0E32\u0E07\u0E17\u0E35\u0E48\u0E1F\u0E39\u0E1F\u0E48\u0E2D\u0E07\u0E17\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E01\u0E47\u0E1A\u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E21\u0E35\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E41\u0E2A\u0E07\u0E04\u0E2D\u0E22\u0E2A\u0E48\u0E2D\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E19\u0E33\u0E17\u0E32\u0E07\u0E41\u0E25\u0E30\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32\u0E08\u0E34\u0E15\u0E43\u0E08\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1E\u0E49\u0E2D\u0E07",
    didYouKnow: "\u0E01\u0E23\u0E30\u0E23\u0E2D\u0E01\u0E21\u0E31\u0E01\u0E08\u0E30\u0E08\u0E33\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E27\u0E48\u0E32\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E1D\u0E31\u0E07\u0E25\u0E39\u0E01\u0E44\u0E21\u0E49\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19\u0E1A\u0E49\u0E32\u0E07 \u0E01\u0E32\u0E23\u0E25\u0E37\u0E21\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E08\u0E36\u0E07\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E15\u0E49\u0E19\u0E44\u0E21\u0E49\u0E43\u0E2B\u0E21\u0E48\u0E46 \u0E07\u0E2D\u0E01\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E43\u0E19\u0E1B\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E21\u0E32\u0E01\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1B\u0E35",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E14\u0E43\u0E2A\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E01\u0E31\u0E01\u0E15\u0E38\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19\u0E41\u0E2A\u0E07\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19 Ability \u0E0A\u0E48\u0E27\u0E22\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP \u0E41\u0E25\u0E30\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E1F\u0E04\u0E27\u0E32\u0E21\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E41\u0E25\u0E30\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E43\u0E2B\u0E49\u0E17\u0E31\u0E49\u0E07\u0E17\u0E35\u0E21"
  },
  snail: {
    scientificName: "Helix aspersa",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E2A\u0E31\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E21\u0E2D\u0E25\u0E25\u0E31\u0E2A\u0E01\u0E32 (Gastropoda)",
    naturalHabitat: "\u0E43\u0E15\u0E49\u0E0B\u0E32\u0E01\u0E43\u0E1A\u0E44\u0E21\u0E49 \u0E14\u0E34\u0E19\u0E0A\u0E37\u0E49\u0E19 \u0E2A\u0E27\u0E19\u0E23\u0E48\u0E21\u0E23\u0E37\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E1B\u0E48\u0E32\u0E14\u0E34\u0E1A\u0E0A\u0E37\u0E49\u0E19",
    diet: "\u0E01\u0E34\u0E19\u0E1E\u0E37\u0E0A (Herbivore) \u0E43\u0E1A\u0E44\u0E21\u0E49\u0E2A\u0E14 \u0E43\u0E1A\u0E44\u0E21\u0E49\u0E1C\u0E38 \u0E41\u0E25\u0E30\u0E40\u0E28\u0E29\u0E0B\u0E32\u0E01\u0E1E\u0E37\u0E0A",
    physicalFeatures: "\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E04\u0E25\u0E40\u0E0B\u0E35\u0E22\u0E21\u0E17\u0E23\u0E07\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07 \u0E25\u0E33\u0E15\u0E31\u0E27\u0E19\u0E38\u0E48\u0E21\u0E19\u0E34\u0E48\u0E21 \u0E02\u0E31\u0E1A\u0E40\u0E21\u0E37\u0E2D\u0E01\u0E40\u0E04\u0E25\u0E37\u0E2D\u0E1A\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E2A\u0E35\u0E22\u0E14\u0E2A\u0E35",
    natureBehavior: "\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E07\u0E0A\u0E49\u0E32\u0E41\u0E25\u0E30\u0E2A\u0E38\u0E02\u0E38\u0E21 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E20\u0E31\u0E22\u0E08\u0E30\u0E2B\u0E14\u0E15\u0E31\u0E27\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E43\u0E19\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07\u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E1D\u0E32\u0E41\u0E19\u0E48\u0E19\u0E2B\u0E19\u0E32",
    elementalOrigin: "\u0E2B\u0E2D\u0E22\u0E17\u0E32\u0E01\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E40\u0E22\u0E47\u0E19\u0E41\u0E25\u0E30\u0E2D\u0E14\u0E17\u0E19 \u0E40\u0E21\u0E37\u0E2D\u0E01\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E17\u0E35\u0E48\u0E02\u0E31\u0E1A\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E40\u0E22\u0E47\u0E19\u0E22\u0E30\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E14\u0E31\u0E48\u0E07\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E14\u0E15\u0E31\u0E27\u0E43\u0E19\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E08\u0E30\u0E41\u0E1C\u0E48\u0E44\u0E2D\u0E40\u0E22\u0E47\u0E19\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 \u0E08\u0E36\u0E07\u0E1C\u0E2A\u0E32\u0E19\u0E40\u0E02\u0E49\u0E32\u0E01\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E17\u0E35\u0E48\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E41\u0E25\u0E30\u0E0A\u0E30\u0E25\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39",
    didYouKnow: "\u0E1F\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E2B\u0E2D\u0E22\u0E17\u0E32\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E27\u0E48\u0E32 '\u0E40\u0E23\u0E14\u0E39\u0E25\u0E32' (Radula) \u0E21\u0E35\u0E1F\u0E31\u0E19\u0E0B\u0E35\u0E48\u0E40\u0E25\u0E47\u0E01\u0E46 \u0E19\u0E31\u0E1A\u0E2B\u0E21\u0E37\u0E48\u0E19\u0E0B\u0E35\u0E48\u0E40\u0E23\u0E35\u0E22\u0E07\u0E01\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E16\u0E27\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E02\u0E39\u0E14\u0E01\u0E34\u0E19\u0E43\u0E1A\u0E44\u0E21\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E2D\u0E01\u0E02\u0E2D\u0E07\u0E2B\u0E2D\u0E22\u0E17\u0E32\u0E01\u0E21\u0E35\u0E2A\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E2A\u0E21\u0E32\u0E19\u0E41\u0E1C\u0E25\u0E41\u0E25\u0E30\u0E15\u0E49\u0E32\u0E19\u0E41\u0E1A\u0E04\u0E17\u0E35\u0E40\u0E23\u0E35\u0E22",
    combatConnection: "\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E01\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E2B\u0E19\u0E32\u0E41\u0E19\u0E48\u0E19\u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E2D\u0E01\u0E44\u0E2D\u0E40\u0E22\u0E47\u0E19\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32 DEF \u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25 \u0E41\u0E25\u0E30\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27 SPD \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21"
  },
  rabbit: {
    scientificName: "Oryctolagus cuniculus",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E1F\u0E31\u0E19\u0E41\u0E17\u0E30\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E01\u0E23\u0E30\u0E15\u0E48\u0E32\u0E22 (Lagomorpha)",
    naturalHabitat: "\u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32 \u0E1B\u0E48\u0E32\u0E42\u0E1B\u0E23\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E19\u0E34\u0E19\u0E40\u0E02\u0E32\u0E40\u0E15\u0E35\u0E49\u0E22",
    diet: "\u0E01\u0E34\u0E19\u0E1E\u0E37\u0E0A (Herbivore) \u0E2B\u0E0D\u0E49\u0E32 \u0E43\u0E1A\u0E44\u0E21\u0E49 \u0E1E\u0E37\u0E0A\u0E15\u0E23\u0E30\u0E01\u0E39\u0E25\u0E16\u0E31\u0E48\u0E27 \u0E41\u0E25\u0E30\u0E23\u0E32\u0E01\u0E44\u0E21\u0E49",
    physicalFeatures: "\u0E2B\u0E39\u0E22\u0E32\u0E27\u0E02\u0E22\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E2D\u0E34\u0E2A\u0E23\u0E30 \u0E02\u0E32\u0E2B\u0E25\u0E31\u0E07\u0E22\u0E32\u0E27\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07 \u0E02\u0E19\u0E2B\u0E19\u0E32\u0E19\u0E38\u0E48\u0E21 \u0E14\u0E27\u0E07\u0E15\u0E32\u0E01\u0E25\u0E21\u0E42\u0E15\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19\u0E44\u0E14\u0E49\u0E40\u0E01\u0E37\u0E2D\u0E1A 360 \u0E2D\u0E07\u0E28\u0E32",
    natureBehavior: "\u0E15\u0E37\u0E48\u0E19\u0E15\u0E31\u0E27\u0E15\u0E25\u0E2D\u0E14\u0E40\u0E27\u0E25\u0E32 \u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E01\u0E30\u0E17\u0E31\u0E19\u0E2B\u0E31\u0E19\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E22\u0E2D\u0E14\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21 \u0E02\u0E38\u0E14\u0E42\u0E1E\u0E23\u0E07\u0E0B\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E43\u0E15\u0E49\u0E14\u0E34\u0E19",
    elementalOrigin: "\u0E01\u0E23\u0E30\u0E15\u0E48\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C \u0E43\u0E1A\u0E2B\u0E39\u0E22\u0E32\u0E27\u0E2A\u0E14\u0E31\u0E1A\u0E1F\u0E31\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E02\u0E2D\u0E07\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34 \u0E14\u0E27\u0E07\u0E15\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E44\u0E2A\u0E27 \u0E08\u0E36\u0E07\u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E41\u0E2A\u0E07\u0E17\u0E35\u0E48\u0E21\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E27\u0E48\u0E2D\u0E07\u0E44\u0E27\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E40\u0E08\u0E34\u0E14\u0E08\u0E49\u0E32\u0E1A\u0E14\u0E1A\u0E31\u0E07\u0E2A\u0E32\u0E22\u0E15\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39",
    didYouKnow: "\u0E01\u0E23\u0E30\u0E15\u0E48\u0E32\u0E22\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E32\u0E40\u0E08\u0E35\u0E22\u0E19\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E44\u0E14\u0E49\u0E2A\u0E39\u0E07\u0E16\u0E36\u0E07 1 \u0E40\u0E21\u0E15\u0E23 \u0E41\u0E25\u0E30\u0E44\u0E01\u0E25\u0E01\u0E27\u0E48\u0E32 3 \u0E40\u0E21\u0E15\u0E23\u0E43\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2B\u0E19\u0E35\u0E1C\u0E39\u0E49\u0E25\u0E48\u0E32",
    combatConnection: "\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E1E\u0E23\u0E34\u0E49\u0E27\u0E44\u0E2B\u0E27\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E43\u0E19\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01 FLEE \u0E2A\u0E39\u0E07 \u0E41\u0E25\u0E30\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E32\u0E1A\u0E2D\u0E14\u0E0A\u0E31\u0E48\u0E27\u0E02\u0E13\u0E30"
  },
  bat: {
    scientificName: "Chiroptera",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E17\u0E35\u0E48\u0E1A\u0E34\u0E19\u0E44\u0E14\u0E49 (Mammalia)",
    naturalHabitat: "\u0E16\u0E49\u0E33\u0E21\u0E37\u0E14 \u0E42\u0E1E\u0E23\u0E07\u0E44\u0E21\u0E49\u0E25\u0E36\u0E01 \u0E41\u0E25\u0E30\u0E1B\u0E48\u0E32\u0E14\u0E07\u0E14\u0E34\u0E1A\u0E22\u0E32\u0E21\u0E23\u0E32\u0E15\u0E23\u0E35",
    diet: "\u0E01\u0E34\u0E19\u0E41\u0E21\u0E25\u0E07 \u0E1C\u0E25\u0E44\u0E21\u0E49 \u0E41\u0E25\u0E30\u0E1A\u0E32\u0E07\u0E2A\u0E32\u0E22\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E14\u0E37\u0E48\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E14 (Insectivore/Frugivore)",
    physicalFeatures: "\u0E1E\u0E31\u0E07\u0E1C\u0E37\u0E14\u0E1B\u0E35\u0E01\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E19\u0E34\u0E49\u0E27\u0E21\u0E37\u0E2D \u0E2B\u0E39\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48 \u0E41\u0E25\u0E30\u0E1F\u0E31\u0E19\u0E41\u0E2B\u0E25\u0E21\u0E04\u0E21",
    natureBehavior: "\u0E2D\u0E2D\u0E01\u0E2B\u0E32\u0E01\u0E34\u0E19\u0E40\u0E27\u0E25\u0E32\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19 \u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E04\u0E27\u0E32\u0E21\u0E16\u0E35\u0E48\u0E2A\u0E39\u0E07 (Echolocation) \u0E43\u0E19\u0E01\u0E32\u0E23\u0E19\u0E33\u0E17\u0E32\u0E07\u0E41\u0E25\u0E30\u0E08\u0E31\u0E1A\u0E40\u0E2B\u0E22\u0E37\u0E48\u0E2D\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E21\u0E37\u0E14\u0E2A\u0E19\u0E34\u0E17",
    elementalOrigin: "\u0E04\u0E49\u0E32\u0E07\u0E04\u0E32\u0E27\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25 \u0E43\u0E0A\u0E49\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E40\u0E07\u0E32\u0E21\u0E37\u0E14\u0E21\u0E34\u0E14\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E07\u0E2A\u0E48\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E16\u0E36\u0E07 \u0E14\u0E37\u0E48\u0E21\u0E14\u0E48\u0E33\u0E44\u0E2D\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E21\u0E37\u0E14\u0E21\u0E34\u0E14 \u0E08\u0E36\u0E07\u0E2B\u0E25\u0E2D\u0E21\u0E23\u0E27\u0E21\u0E40\u0E02\u0E49\u0E32\u0E01\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E21\u0E37\u0E14 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1A\u0E14\u0E1A\u0E31\u0E07\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E41\u0E25\u0E30\u0E14\u0E39\u0E14\u0E01\u0E25\u0E37\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E43\u0E19\u0E40\u0E07\u0E32\u0E21\u0E37\u0E14",
    didYouKnow: "\u0E04\u0E49\u0E32\u0E07\u0E04\u0E32\u0E27\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E0A\u0E19\u0E34\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27\u0E43\u0E19\u0E42\u0E25\u0E01\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1B\u0E35\u0E01\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1A\u0E34\u0E19\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E17\u0E49\u0E08\u0E23\u0E34\u0E07 (\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E41\u0E04\u0E48\u0E23\u0E48\u0E2D\u0E19)",
    combatConnection: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E21\u0E37\u0E14\u0E41\u0E1B\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E2B\u0E21\u0E39\u0E48\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E21\u0E32\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22"
  },
  porcupine: {
    scientificName: "Hystrix cristata",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E1F\u0E31\u0E19\u0E41\u0E17\u0E30\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21 (Rodentia)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E1C\u0E25\u0E31\u0E14\u0E43\u0E1A \u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32\u0E2A\u0E30\u0E27\u0E31\u0E19\u0E19\u0E32 \u0E41\u0E25\u0E30\u0E0B\u0E2D\u0E01\u0E2B\u0E34\u0E19\u0E1C\u0E32",
    diet: "\u0E01\u0E34\u0E19\u0E1E\u0E37\u0E0A (Herbivore) \u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E49 \u0E1C\u0E25\u0E44\u0E21\u0E49 \u0E23\u0E32\u0E01\u0E44\u0E21\u0E49 \u0E41\u0E25\u0E30\u0E22\u0E2D\u0E14\u0E2B\u0E0D\u0E49\u0E32",
    physicalFeatures: "\u0E02\u0E19\u0E25\u0E33\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E41\u0E2B\u0E25\u0E21\u0E04\u0E21\u0E01\u0E25\u0E27\u0E07\u0E41\u0E02\u0E47\u0E07\u0E41\u0E23\u0E07\u0E23\u0E2D\u0E1A\u0E15\u0E31\u0E27 \u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E41\u0E02\u0E47\u0E07\u0E41\u0E23\u0E07",
    natureBehavior: "\u0E2D\u0E2D\u0E01\u0E2B\u0E32\u0E01\u0E34\u0E19\u0E22\u0E32\u0E21\u0E04\u0E48\u0E33\u0E04\u0E37\u0E19 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1C\u0E0A\u0E34\u0E0D\u0E2B\u0E19\u0E49\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39\u0E08\u0E30\u0E2B\u0E31\u0E19\u0E2B\u0E25\u0E31\u0E07 \u0E2A\u0E31\u0E48\u0E19\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E1E\u0E38\u0E48\u0E07\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E0A\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39",
    elementalOrigin: "\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E41\u0E2B\u0E25\u0E21\u0E04\u0E21\u0E23\u0E2D\u0E1A\u0E15\u0E31\u0E27\u0E17\u0E33\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E14\u0E31\u0E48\u0E07\u0E2A\u0E32\u0E22\u0E25\u0E48\u0E2D\u0E1F\u0E49\u0E32 \u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15\u0E08\u0E32\u0E01\u0E2D\u0E32\u0E01\u0E32\u0E28\u0E41\u0E25\u0E30\u0E1E\u0E32\u0E22\u0E38\u0E1F\u0E49\u0E32\u0E04\u0E30\u0E19\u0E2D\u0E07 \u0E01\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E17\u0E35\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1F\u0E32\u0E14\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E2A\u0E16\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E43\u0E2A\u0E48\u0E17\u0E38\u0E01\u0E04\u0E19\u0E17\u0E35\u0E48\u0E01\u0E25\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E43\u0E01\u0E25\u0E49",
    didYouKnow: "\u0E40\u0E21\u0E48\u0E19\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 '\u0E22\u0E34\u0E07' \u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E15\u0E31\u0E27\u0E44\u0E14\u0E49\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D \u0E41\u0E15\u0E48\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E08\u0E30\u0E2B\u0E25\u0E38\u0E14\u0E15\u0E34\u0E14\u0E15\u0E31\u0E27\u0E28\u0E31\u0E15\u0E23\u0E39\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E21\u0E32\u0E01\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E16\u0E39\u0E01 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E07\u0E35\u0E48\u0E22\u0E07\u0E40\u0E25\u0E47\u0E01\u0E46 \u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E14\u0E36\u0E07\u0E2D\u0E2D\u0E01\u0E22\u0E32\u0E01",
    combatConnection: "\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19 Ability \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E0A\u0E47\u0E2D\u0E15\u0E2A\u0E15\u0E31\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19\u0E43\u0E19\u0E2A\u0E19\u0E32\u0E21"
  },
  frog: {
    scientificName: "Anura",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E2A\u0E30\u0E40\u0E17\u0E34\u0E19\u0E19\u0E49\u0E33\u0E2A\u0E30\u0E40\u0E17\u0E34\u0E19\u0E1A\u0E01 (Amphibia)",
    naturalHabitat: "\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E49\u0E33 \u0E25\u0E33\u0E18\u0E32\u0E23 \u0E1B\u0E48\u0E32\u0E1E\u0E23\u0E38 \u0E41\u0E25\u0E30\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E38\u0E48\u0E21\u0E19\u0E49\u0E33",
    diet: "\u0E01\u0E34\u0E19\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E02\u0E19\u0E32\u0E14\u0E40\u0E25\u0E47\u0E01 (Carnivore) \u0E41\u0E21\u0E25\u0E07 \u0E2B\u0E19\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E1B\u0E25\u0E32\u0E40\u0E25\u0E47\u0E01",
    physicalFeatures: "\u0E1C\u0E34\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E0A\u0E38\u0E48\u0E21\u0E0A\u0E37\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E19\u0E35\u0E22\u0E19 \u0E02\u0E32\u0E2B\u0E25\u0E31\u0E07\u0E22\u0E32\u0E27\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07 \u0E25\u0E34\u0E49\u0E19\u0E22\u0E32\u0E27\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E1E\u0E31\u0E1A\u0E40\u0E01\u0E47\u0E1A\u0E43\u0E19\u0E1B\u0E32\u0E01 \u0E41\u0E25\u0E30\u0E14\u0E27\u0E07\u0E15\u0E32\u0E19\u0E39\u0E19\u0E42\u0E1B\u0E19",
    natureBehavior: "\u0E27\u0E48\u0E32\u0E22\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E01\u0E23\u0E30\u0E42\u0E14\u0E14\u0E44\u0E14\u0E49\u0E04\u0E25\u0E48\u0E2D\u0E07\u0E41\u0E04\u0E25\u0E48\u0E27 \u0E15\u0E27\u0E31\u0E14\u0E25\u0E34\u0E49\u0E19\u0E08\u0E31\u0E1A\u0E41\u0E21\u0E25\u0E07\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E2A\u0E39\u0E07 \u0E41\u0E25\u0E30\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E23\u0E49\u0E2D\u0E07\u0E01\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E43\u0E19\u0E24\u0E14\u0E39\u0E1D\u0E19",
    elementalOrigin: "\u0E01\u0E1A\u0E1C\u0E39\u0E01\u0E1E\u0E31\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E32\u0E22\u0E19\u0E49\u0E33\u0E21\u0E32\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E33\u0E40\u0E19\u0E34\u0E14 \u0E1C\u0E34\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E0A\u0E38\u0E48\u0E21\u0E0A\u0E37\u0E49\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E2D\u0E2D\u0E01\u0E0B\u0E34\u0E40\u0E08\u0E19\u0E08\u0E32\u0E01\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E19\u0E49\u0E33 \u0E08\u0E36\u0E07\u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E2D\u0E31\u0E19\u0E0A\u0E38\u0E48\u0E21\u0E40\u0E22\u0E47\u0E19 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E04\u0E25\u0E37\u0E48\u0E19\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E15\u0E27\u0E31\u0E14\u0E25\u0E34\u0E49\u0E19\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E2B\u0E19\u0E37\u0E14\u0E40\u0E2B\u0E19\u0E35\u0E48\u0E22\u0E27\u0E23\u0E31\u0E49\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39",
    didYouKnow: "\u0E01\u0E1A\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E14\u0E37\u0E48\u0E21\u0E19\u0E49\u0E33\u0E17\u0E32\u0E07\u0E1B\u0E32\u0E01\u0E40\u0E25\u0E22\u0E41\u0E21\u0E49\u0E41\u0E15\u0E48\u0E2B\u0E22\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E14\u0E39\u0E14\u0E0B\u0E36\u0E21\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E37\u0E49\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07\u0E1C\u0E34\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07",
    combatConnection: "\u0E25\u0E34\u0E49\u0E19\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E2B\u0E19\u0E37\u0E14\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E38\u0E48\u0E21\u0E0A\u0E37\u0E49\u0E19\u0E15\u0E32\u0E21\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E01\u0E34\u0E25\u0E17\u0E35\u0E48\u0E25\u0E14\u0E17\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E42\u0E08\u0E21\u0E15\u0E35\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07"
  },
  turtle: {
    scientificName: "Testudines",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E37\u0E49\u0E2D\u0E22\u0E04\u0E25\u0E32\u0E19\u0E42\u0E1A\u0E23\u0E32\u0E13 (Reptilia)",
    naturalHabitat: "\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23 \u0E17\u0E30\u0E40\u0E25\u0E2A\u0E32\u0E1A \u0E41\u0E21\u0E48\u0E19\u0E49\u0E33 \u0E41\u0E25\u0E30\u0E0A\u0E32\u0E22\u0E1D\u0E31\u0E48\u0E07",
    diet: "\u0E01\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07\u0E1E\u0E37\u0E0A\u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C (Omnivore) \u0E41\u0E21\u0E07\u0E01\u0E30\u0E1E\u0E23\u0E38\u0E19 \u0E2B\u0E0D\u0E49\u0E32\u0E17\u0E30\u0E40\u0E25 \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E19\u0E49\u0E33\u0E02\u0E19\u0E32\u0E14\u0E40\u0E25\u0E47\u0E01",
    physicalFeatures: "\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E41\u0E02\u0E47\u0E07\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E1C\u0E2A\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19 \u0E41\u0E02\u0E19\u0E02\u0E32\u0E41\u0E1A\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E43\u0E1A\u0E1E\u0E32\u0E22 \u0E27\u0E48\u0E32\u0E22\u0E19\u0E49\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E38\u0E48\u0E21\u0E19\u0E27\u0E25",
    natureBehavior: "\u0E2D\u0E32\u0E22\u0E38\u0E22\u0E37\u0E19\u0E22\u0E32\u0E27 \u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E2A\u0E38\u0E02\u0E38\u0E21\u0E43\u0E19\u0E2A\u0E32\u0E22\u0E19\u0E49\u0E33 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E25\u0E31\u0E49\u0E19\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E14\u0E33\u0E19\u0E49\u0E33\u0E44\u0E14\u0E49\u0E19\u0E32\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
    elementalOrigin: "\u0E40\u0E15\u0E48\u0E32\u0E04\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E2A\u0E32\u0E22\u0E19\u0E49\u0E33\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E17\u0E35\u0E48\u0E21\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E40\u0E04\u0E35\u0E22\u0E07\u0E04\u0E39\u0E48\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E21\u0E32\u0E19\u0E31\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E49\u0E32\u0E19\u0E1B\u0E35 \u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E2B\u0E19\u0E32\u0E0B\u0E36\u0E21\u0E0B\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E19\u0E49\u0E33\u0E27\u0E19 \u0E01\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E32\u0E07\u0E21\u0E48\u0E32\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E27\u0E32\u0E23\u0E35\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1E\u0E49\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E21\u0E25\u0E17\u0E34\u0E19",
    didYouKnow: "\u0E40\u0E15\u0E48\u0E32\u0E17\u0E30\u0E40\u0E25\u0E43\u0E0A\u0E49\u0E2A\u0E19\u0E32\u0E21\u0E41\u0E21\u0E48\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E42\u0E25\u0E01\u0E43\u0E19\u0E01\u0E32\u0E23\u0E19\u0E33\u0E17\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E49\u0E32\u0E21\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E19\u0E31\u0E1A\u0E2B\u0E21\u0E37\u0E48\u0E19\u0E01\u0E34\u0E42\u0E25\u0E40\u0E21\u0E15\u0E23\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E27\u0E32\u0E07\u0E44\u0E02\u0E48 \u0E13 \u0E2B\u0E32\u0E14\u0E17\u0E23\u0E32\u0E22\u0E40\u0E14\u0E34\u0E21\u0E17\u0E35\u0E48\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E40\u0E04\u0E22\u0E40\u0E01\u0E34\u0E14",
    combatConnection: "\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E27\u0E32\u0E23\u0E35\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25\u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21"
  },
  tiger: {
    scientificName: "Panthera tigris",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E08\u0E33\u0E1E\u0E27\u0E01\u0E41\u0E21\u0E27\u0E43\u0E2B\u0E0D\u0E48 (Felidae)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E14\u0E07\u0E14\u0E34\u0E1A \u0E1B\u0E48\u0E32\u0E1C\u0E25\u0E31\u0E14\u0E43\u0E1A \u0E41\u0E25\u0E30\u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32\u0E04\u0E32",
    diet: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E01\u0E34\u0E19\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E41\u0E17\u0E49 (Apex Carnivore) \u0E25\u0E48\u0E32\u0E01\u0E27\u0E32\u0E07 \u0E2B\u0E21\u0E39\u0E1B\u0E48\u0E32 \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48",
    physicalFeatures: "\u0E25\u0E32\u0E22\u0E1E\u0E32\u0E14\u0E01\u0E25\u0E2D\u0E19\u0E1E\u0E23\u0E32\u0E07\u0E15\u0E31\u0E27 \u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E19\u0E49\u0E32\u0E2D\u0E01\u0E01\u0E33\u0E22\u0E33 \u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E04\u0E21\u0E22\u0E32\u0E27 \u0E41\u0E25\u0E30\u0E2D\u0E38\u0E49\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23",
    natureBehavior: "\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E01\u0E2A\u0E31\u0E19\u0E42\u0E14\u0E29 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E14\u0E38\u0E14\u0E31\u0E19 \u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07 \u0E0A\u0E2D\u0E1A\u0E25\u0E07\u0E41\u0E0A\u0E48\u0E19\u0E49\u0E33\u0E04\u0E25\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E08\u0E39\u0E48\u0E42\u0E08\u0E21\u0E40\u0E2B\u0E22\u0E37\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E07\u0E35\u0E22\u0E1A\u0E41\u0E25\u0E30\u0E40\u0E14\u0E47\u0E14\u0E02\u0E32\u0E14",
    elementalOrigin: "\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E25\u0E32\u0E22\u0E1E\u0E32\u0E14\u0E01\u0E25\u0E2D\u0E19\u0E1C\u0E39\u0E49\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E2D\u0E07\u0E41\u0E27\u0E27\u0E15\u0E32\u0E14\u0E38\u0E08\u0E40\u0E1B\u0E25\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07 \u0E2B\u0E31\u0E27\u0E43\u0E08\u0E17\u0E35\u0E48\u0E40\u0E14\u0E37\u0E2D\u0E14\u0E1E\u0E25\u0E48\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E0D\u0E32\u0E13\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E08\u0E38\u0E14\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E49\u0E2D\u0E19\u0E43\u0E19\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E40\u0E25\u0E37\u0E2D\u0E14 \u0E01\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E44\u0E1F\u0E17\u0E35\u0E48\u0E40\u0E1C\u0E32\u0E1C\u0E25\u0E32\u0E0D\u0E28\u0E31\u0E15\u0E23\u0E39\u0E14\u0E49\u0E27\u0E22\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E2D\u0E31\u0E19\u0E44\u0E23\u0E49\u0E40\u0E17\u0E35\u0E22\u0E21\u0E17\u0E32\u0E19",
    didYouKnow: "\u0E25\u0E32\u0E22\u0E1E\u0E32\u0E14\u0E01\u0E25\u0E2D\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E2A\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E04\u0E48\u0E1A\u0E19\u0E40\u0E2A\u0E49\u0E19\u0E02\u0E19\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E41\u0E15\u0E48\u0E1D\u0E31\u0E07\u0E25\u0E36\u0E01\u0E25\u0E07\u0E44\u0E1B\u0E1A\u0E19\u0E1C\u0E34\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22 \u0E2B\u0E32\u0E01\u0E42\u0E01\u0E19\u0E02\u0E19\u0E40\u0E2A\u0E37\u0E2D\u0E2D\u0E2D\u0E01 \u0E25\u0E32\u0E22\u0E40\u0E14\u0E34\u0E21\u0E01\u0E47\u0E22\u0E31\u0E07\u0E04\u0E07\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1C\u0E34\u0E27",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E14\u0E38\u0E14\u0E31\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E15\u0E1A\u0E2D\u0E31\u0E19\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32 ATK \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E38\u0E14\u0E22\u0E2D\u0E14\u0E41\u0E25\u0E30\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E32\u0E14\u0E41\u0E1C\u0E25\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07"
  },
  elephant: {
    scientificName: "Elephas maximus",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E25\u0E39\u0E01\u0E14\u0E49\u0E27\u0E22\u0E19\u0E21\u0E1A\u0E19\u0E1A\u0E01\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 (Elephantidae)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E40\u0E1A\u0E0D\u0E08\u0E1E\u0E23\u0E23\u0E13 \u0E1B\u0E48\u0E32\u0E14\u0E07\u0E14\u0E34\u0E1A \u0E41\u0E25\u0E30\u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32\u0E2A\u0E30\u0E27\u0E31\u0E19\u0E19\u0E32",
    diet: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E01\u0E34\u0E19\u0E1E\u0E37\u0E0A (Herbivore) \u0E2B\u0E0D\u0E49\u0E32 \u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E49 \u0E01\u0E25\u0E49\u0E27\u0E22 \u0E41\u0E25\u0E30\u0E22\u0E2D\u0E14\u0E44\u0E21\u0E49",
    physicalFeatures: "\u0E07\u0E27\u0E07\u0E2A\u0E32\u0E23\u0E1E\u0E31\u0E14\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E21\u0E35\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E19\u0E31\u0E1A\u0E41\u0E2A\u0E19\u0E21\u0E31\u0E14 \u0E07\u0E32\u0E22\u0E32\u0E27\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07 \u0E43\u0E1A\u0E2B\u0E39\u0E43\u0E2B\u0E0D\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E23\u0E30\u0E1A\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E49\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E40\u0E17\u0E49\u0E32\u0E2B\u0E19\u0E32\u0E43\u0E2B\u0E0D\u0E48",
    natureBehavior: "\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E02\u0E25\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E17\u0E23\u0E07\u0E08\u0E33\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28 \u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2B\u0E47\u0E19\u0E2D\u0E01\u0E40\u0E2B\u0E47\u0E19\u0E43\u0E08\u0E15\u0E48\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E1D\u0E39\u0E07 \u0E41\u0E25\u0E30\u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E25\u0E39\u0E01\u0E2B\u0E25\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22\u0E0A\u0E35\u0E27\u0E34\u0E15",
    elementalOrigin: "\u0E0A\u0E49\u0E32\u0E07\u0E04\u0E37\u0E2D\u0E23\u0E32\u0E0A\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E1E\u0E2A\u0E38\u0E18\u0E32 \u0E1C\u0E39\u0E49\u0E21\u0E35\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E15\u0E31\u0E27\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E1A\u0E22\u0E48\u0E33\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E37\u0E19\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19 \u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E42\u0E02\u0E25\u0E07\u0E0A\u0E49\u0E32\u0E07\u0E40\u0E1A\u0E34\u0E01\u0E17\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E1B\u0E48\u0E32\u0E44\u0E21\u0E49 \u0E08\u0E36\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19\u0E2D\u0E31\u0E19\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E19\u0E48\u0E19 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E43\u0E2B\u0E49\u0E2A\u0E31\u0E48\u0E19\u0E44\u0E2B\u0E27\u0E41\u0E25\u0E30\u0E2A\u0E22\u0E1A\u0E04\u0E39\u0E48\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49",
    didYouKnow: "\u0E0A\u0E49\u0E32\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E01\u0E31\u0E19\u0E02\u0E49\u0E32\u0E21\u0E23\u0E30\u0E22\u0E30\u0E17\u0E32\u0E07\u0E44\u0E01\u0E25\u0E2B\u0E25\u0E32\u0E22\u0E01\u0E34\u0E42\u0E25\u0E40\u0E21\u0E15\u0E23\u0E14\u0E49\u0E27\u0E22\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E04\u0E27\u0E32\u0E21\u0E16\u0E35\u0E48\u0E15\u0E48\u0E33 (Infrasound) \u0E17\u0E35\u0E48\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19 \u0E41\u0E25\u0E30\u0E23\u0E31\u0E1A\u0E23\u0E39\u0E49\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E48\u0E19\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E1D\u0E48\u0E32\u0E40\u0E17\u0E49\u0E32",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E17\u0E37\u0E1A\u0E2D\u0E31\u0E19\u0E2B\u0E19\u0E31\u0E01\u0E2B\u0E19\u0E48\u0E27\u0E07\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32 HP \u0E41\u0E25\u0E30 DEF \u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E2A\u0E15\u0E31\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E41\u0E19\u0E27\u0E2B\u0E19\u0E49\u0E32"
  },
  phoenix: {
    scientificName: "Avis Ignis Mythica",
    category: "\u0E27\u0E34\u0E2B\u0E04\u0E21\u0E32\u0E22\u0E32\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Mythical Beast)",
    naturalHabitat: "\u0E22\u0E2D\u0E14\u0E20\u0E39\u0E40\u0E02\u0E32\u0E44\u0E1F\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E14\u0E34\u0E19\u0E41\u0E14\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E01\u0E32\u0E25\u0E40\u0E27\u0E25\u0E32",
    diet: "\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E25\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E40\u0E01\u0E2A\u0E23\u0E1A\u0E38\u0E1B\u0E1C\u0E32\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C",
    physicalFeatures: "\u0E02\u0E19\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E41\u0E14\u0E07\u0E2A\u0E38\u0E01\u0E2A\u0E27\u0E48\u0E32\u0E07 \u0E1B\u0E35\u0E01\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E44\u0E23\u0E49\u0E04\u0E27\u0E31\u0E19 \u0E41\u0E25\u0E30\u0E14\u0E27\u0E07\u0E15\u0E32\u0E21\u0E23\u0E01\u0E15\u0E25\u0E38\u0E01\u0E42\u0E0A\u0E19",
    natureBehavior: "\u0E42\u0E1A\u0E22\u0E1A\u0E34\u0E19\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E40\u0E27\u0E2B\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2A\u0E07\u0E48\u0E32\u0E07\u0E32\u0E21 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E36\u0E07\u0E08\u0E38\u0E14\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E2D\u0E32\u0E22\u0E38\u0E02\u0E31\u0E22\u0E08\u0E30\u0E40\u0E1C\u0E32\u0E1C\u0E25\u0E32\u0E0D\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E43\u0E19\u0E01\u0E2D\u0E07\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E41\u0E25\u0E30\u0E01\u0E33\u0E40\u0E19\u0E34\u0E14\u0E43\u0E2B\u0E21\u0E48\u0E08\u0E32\u0E01\u0E40\u0E16\u0E49\u0E32\u0E16\u0E48\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E27\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E2A\u0E39\u0E0D",
    elementalOrigin: "\u0E1F\u0E35\u0E19\u0E34\u0E01\u0E0B\u0E4C\u0E04\u0E37\u0E2D\u0E15\u0E49\u0E19\u0E01\u0E33\u0E40\u0E19\u0E34\u0E14\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E44\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E21\u0E27\u0E25\u0E43\u0E19\u0E42\u0E25\u0E01\u0E35\u0E22\u0E4C \u0E40\u0E1B\u0E25\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E19\u0E21\u0E34\u0E43\u0E0A\u0E48\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07 \u0E41\u0E15\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1F\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E43\u0E2B\u0E21\u0E48 \u0E08\u0E36\u0E07\u0E40\u0E1B\u0E35\u0E48\u0E22\u0E21\u0E14\u0E49\u0E27\u0E22\u0E1E\u0E25\u0E31\u0E07\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1C\u0E25\u0E32\u0E0D\u0E28\u0E31\u0E15\u0E23\u0E39\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2E\u0E35\u0E25\u0E23\u0E31\u0E01\u0E29\u0E32\u0E1A\u0E32\u0E14\u0E41\u0E1C\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1E\u0E49\u0E2D\u0E07\u0E43\u0E2B\u0E49\u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E",
    didYouKnow: "\u0E19\u0E49\u0E33\u0E15\u0E32\u0E02\u0E2D\u0E07\u0E1F\u0E35\u0E19\u0E34\u0E01\u0E0B\u0E4C\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E21\u0E35\u0E1E\u0E25\u0E31\u0E07\u0E27\u0E34\u0E40\u0E28\u0E29\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E21\u0E32\u0E19\u0E41\u0E1C\u0E25\u0E09\u0E01\u0E23\u0E23\u0E08\u0E4C\u0E41\u0E25\u0E30\u0E16\u0E2D\u0E19\u0E1E\u0E34\u0E29\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14\u0E43\u0E19\u0E08\u0E31\u0E01\u0E23\u0E27\u0E32\u0E25",
    combatConnection: "\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14\u0E43\u0E2B\u0E21\u0E48\u0E08\u0E32\u0E01\u0E40\u0E16\u0E49\u0E32\u0E16\u0E48\u0E32\u0E19\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A SS [\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C] \u0E17\u0E35\u0E48\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E19\u0E32\u0E21\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2E\u0E35\u0E25\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21"
  },
  azure_dragon: {
    scientificName: "Draco Caelestis",
    category: "\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Divine Beast)",
    naturalHabitat: "\u0E27\u0E31\u0E07\u0E40\u0E21\u0E06\u0E32\u0E0A\u0E31\u0E49\u0E19\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E41\u0E25\u0E30\u0E17\u0E49\u0E2D\u0E07\u0E1F\u0E49\u0E32\u0E27\u0E32\u0E22\u0E38\u0E04\u0E25\u0E31\u0E48\u0E07",
    diet: "\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E44\u0E2D\u0E40\u0E21\u0E06\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E08\u0E32\u0E01\u0E2A\u0E23\u0E27\u0E07\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C",
    physicalFeatures: "\u0E40\u0E01\u0E25\u0E47\u0E14\u0E2A\u0E35\u0E04\u0E23\u0E32\u0E21\u0E40\u0E1B\u0E25\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E14\u0E31\u0E48\u0E07\u0E44\u0E1E\u0E25\u0E34\u0E19 \u0E2B\u0E19\u0E27\u0E14\u0E22\u0E32\u0E27\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E25\u0E21 \u0E41\u0E25\u0E30\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E21\u0E31\u0E07\u0E01\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E49\u0E32",
    natureBehavior: "\u0E40\u0E2B\u0E32\u0E30\u0E40\u0E2B\u0E34\u0E19\u0E43\u0E19\u0E21\u0E48\u0E32\u0E19\u0E40\u0E21\u0E06 \u0E1B\u0E01\u0E1B\u0E49\u0E2D\u0E07\u0E2A\u0E21\u0E14\u0E38\u0E25\u0E02\u0E2D\u0E07\u0E24\u0E14\u0E39\u0E01\u0E32\u0E25 \u0E1F\u0E49\u0E32\u0E1C\u0E48\u0E32 \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E22\u0E1D\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E38\u0E14\u0E21\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
    elementalOrigin: "\u0E21\u0E31\u0E07\u0E01\u0E23\u0E1F\u0E49\u0E32\u0E04\u0E37\u0E2D\u0E40\u0E17\u0E1E\u0E2D\u0E2A\u0E39\u0E23\u0E1C\u0E39\u0E49\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E33\u0E23\u0E32\u0E21\u0E25\u0E31\u0E48\u0E19\u0E08\u0E30\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E1E\u0E32\u0E22\u0E38\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E1F\u0E32\u0E14\u0E1C\u0E48\u0E32\u0E17\u0E30\u0E25\u0E27\u0E07\u0E0A\u0E31\u0E49\u0E19\u0E1F\u0E49\u0E32 \u0E01\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E2D\u0E31\u0E19\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E48\u0E07\u0E43\u0E14\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E44\u0E14\u0E49",
    didYouKnow: "\u0E21\u0E31\u0E07\u0E01\u0E23\u0E1F\u0E49\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19\u0E2A\u0E35\u0E48\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E17\u0E1E\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E34\u0E28\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01 \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E02\u0E2D\u0E07\u0E24\u0E14\u0E39\u0E43\u0E1A\u0E44\u0E21\u0E49\u0E1C\u0E25\u0E34\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E43\u0E2B\u0E21\u0E48\u0E02\u0E2D\u0E07\u0E2A\u0E23\u0E23\u0E1E\u0E2A\u0E34\u0E48\u0E07",
    combatConnection: "\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E1C\u0E48\u0E32\u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07\u0E1C\u0E2A\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E1F\u0E32\u0E14\u0E1F\u0E31\u0E19] \u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E0A\u0E34\u0E48\u0E07\u0E17\u0E30\u0E25\u0E27\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E23\u0E48\u0E07\u0E2A\u0E1B\u0E35\u0E14\u0E17\u0E31\u0E49\u0E07\u0E17\u0E35\u0E21"
  },
  naga: {
    scientificName: "Naga Aquatica Divina",
    category: "\u0E1E\u0E0D\u0E32\u0E19\u0E32\u0E04\u0E32\u0E2D\u0E2A\u0E39\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E2A\u0E32\u0E22\u0E19\u0E49\u0E33 (Mythical Serpent)",
    naturalHabitat: "\u0E27\u0E31\u0E07\u0E1A\u0E32\u0E14\u0E32\u0E25 \u0E41\u0E21\u0E48\u0E19\u0E49\u0E33\u0E42\u0E02\u0E07 \u0E41\u0E25\u0E30\u0E2B\u0E49\u0E27\u0E07\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E25\u0E36\u0E01",
    diet: "\u0E2B\u0E22\u0E32\u0E14\u0E19\u0E49\u0E33\u0E04\u0E49\u0E32\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E44\u0E2D\u0E1E\u0E25\u0E31\u0E07\u0E21\u0E13\u0E35\u0E41\u0E2B\u0E48\u0E07\u0E1A\u0E32\u0E14\u0E32\u0E25",
    physicalFeatures: "\u0E40\u0E01\u0E25\u0E47\u0E14\u0E21\u0E13\u0E35\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27\u0E21\u0E23\u0E01\u0E15\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E17\u0E2D\u0E07 \u0E2B\u0E07\u0E2D\u0E19\u0E1E\u0E0D\u0E32\u0E19\u0E32\u0E04\u0E40\u0E1B\u0E25\u0E48\u0E07\u0E41\u0E2A\u0E07 \u0E41\u0E25\u0E30\u0E25\u0E33\u0E15\u0E31\u0E27\u0E22\u0E32\u0E27\u0E2A\u0E07\u0E48\u0E32\u0E07\u0E32\u0E21",
    natureBehavior: "\u0E41\u0E2B\u0E27\u0E01\u0E27\u0E48\u0E32\u0E22\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2A\u0E07\u0E48\u0E32\u0E07\u0E32\u0E21\u0E43\u0E19\u0E2B\u0E49\u0E27\u0E07\u0E19\u0E49\u0E33\u0E25\u0E36\u0E01 \u0E1B\u0E01\u0E1B\u0E31\u0E01\u0E29\u0E4C\u0E23\u0E31\u0E01\u0E29\u0E32\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E43\u0E15\u0E49\u0E1C\u0E37\u0E19\u0E19\u0E49\u0E33 \u0E1A\u0E31\u0E19\u0E14\u0E32\u0E25\u0E1D\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E38\u0E48\u0E21\u0E0A\u0E37\u0E49\u0E19\u0E41\u0E01\u0E48\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19",
    elementalOrigin: "\u0E1E\u0E0D\u0E32\u0E19\u0E32\u0E04\u0E04\u0E37\u0E2D\u0E08\u0E49\u0E32\u0E27\u0E41\u0E2B\u0E48\u0E07\u0E2A\u0E32\u0E22\u0E19\u0E49\u0E33\u0E17\u0E31\u0E49\u0E07\u0E21\u0E27\u0E25 \u0E25\u0E21\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E2B\u0E21\u0E2D\u0E01\u0E1D\u0E19 \u0E2B\u0E32\u0E07\u0E17\u0E35\u0E48\u0E15\u0E27\u0E31\u0E14\u0E42\u0E1A\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34 \u0E08\u0E36\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E2D\u0E31\u0E19\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E0D\u0E48 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E22\u0E1A\u0E28\u0E31\u0E15\u0E23\u0E39\u0E14\u0E49\u0E27\u0E22\u0E1E\u0E25\u0E31\u0E07\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E04\u0E25\u0E37\u0E48\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E07\u0E21\u0E48\u0E32\u0E19\u0E19\u0E49\u0E33\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E1A\u0E31\u0E49\u0E07\u0E44\u0E1F\u0E1E\u0E0D\u0E32\u0E19\u0E32\u0E04\u0E04\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E16\u0E27\u0E32\u0E22\u0E25\u0E39\u0E01\u0E44\u0E1F\u0E1A\u0E39\u0E0A\u0E32\u0E41\u0E14\u0E48\u0E2D\u0E07\u0E04\u0E4C\u0E1E\u0E23\u0E30\u0E2A\u0E31\u0E21\u0E21\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E38\u0E17\u0E18\u0E40\u0E08\u0E49\u0E32\u0E43\u0E19\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E1E\u0E23\u0E23\u0E29\u0E32\u0E08\u0E32\u0E01\u0E27\u0E31\u0E07\u0E1A\u0E32\u0E14\u0E32\u0E25",
    combatConnection: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E1A\u0E32\u0E14\u0E32\u0E25\u0E16\u0E39\u0E01\u0E19\u0E33\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E19\u0E32\u0E04\u0E23\u0E32\u0E0A\u0E01\u0E27\u0E32\u0E14\u0E25\u0E49\u0E32\u0E07] \u0E17\u0E35\u0E48\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27 \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E27\u0E32\u0E23\u0E35\u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21"
  },
  qilin: {
    scientificName: "Kirin Aurum Sanctum",
    category: "\u0E01\u0E34\u0E40\u0E25\u0E19\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E21\u0E07\u0E04\u0E25\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Sacred Chimera)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E41\u0E25\u0E30\u0E22\u0E2D\u0E14\u0E1C\u0E32\u0E40\u0E21\u0E06\u0E32\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C",
    diet: "\u0E2A\u0E21\u0E38\u0E19\u0E44\u0E1E\u0E23\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E41\u0E25\u0E30\u0E2B\u0E22\u0E32\u0E14\u0E19\u0E49\u0E33\u0E04\u0E49\u0E32\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C \u0E44\u0E21\u0E48\u0E40\u0E2B\u0E22\u0E35\u0E22\u0E1A\u0E22\u0E48\u0E33\u0E41\u0E21\u0E49\u0E41\u0E15\u0E48\u0E22\u0E2D\u0E14\u0E2B\u0E0D\u0E49\u0E32",
    physicalFeatures: "\u0E2B\u0E31\u0E27\u0E21\u0E31\u0E07\u0E01\u0E23 \u0E40\u0E02\u0E32\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \u0E01\u0E32\u0E22\u0E01\u0E27\u0E32\u0E07 \u0E40\u0E01\u0E25\u0E47\u0E14\u0E17\u0E2D\u0E07\u0E04\u0E33 \u0E41\u0E25\u0E30\u0E2B\u0E32\u0E07\u0E27\u0E31\u0E27",
    natureBehavior: "\u0E40\u0E1B\u0E35\u0E48\u0E22\u0E21\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E21\u0E15\u0E15\u0E32\u0E41\u0E25\u0E30\u0E23\u0E31\u0E01\u0E2A\u0E07\u0E1A \u0E08\u0E30\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E15\u0E31\u0E27\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E43\u0E19\u0E22\u0E38\u0E04\u0E2A\u0E21\u0E31\u0E22\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E07\u0E1A\u0E2A\u0E38\u0E02\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E17\u0E23\u0E07\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21",
    elementalOrigin: "\u0E01\u0E34\u0E40\u0E25\u0E19\u0E1C\u0E2A\u0E32\u0E19\u0E41\u0E01\u0E48\u0E19\u0E41\u0E17\u0E49\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E49\u0E32 \u0E41\u0E15\u0E48\u0E42\u0E14\u0E14\u0E40\u0E14\u0E48\u0E19\u0E14\u0E49\u0E27\u0E22\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E41\u0E2A\u0E07\u0E41\u0E25\u0E30\u0E1E\u0E24\u0E01\u0E29\u0E32 \u0E01\u0E49\u0E32\u0E27\u0E22\u0E48\u0E32\u0E07\u0E1A\u0E19\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E17\u0E33\u0E25\u0E32\u0E22\u0E2A\u0E34\u0E48\u0E07\u0E21\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15 \u0E44\u0E2D\u0E1E\u0E25\u0E31\u0E07\u0E21\u0E07\u0E04\u0E25\u0E1B\u0E31\u0E14\u0E40\u0E1B\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E31\u0E48\u0E27\u0E23\u0E49\u0E32\u0E22\u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E01\u0E48\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E23\u0E48\u0E27\u0E21\u0E23\u0E1A",
    didYouKnow: "\u0E01\u0E34\u0E40\u0E25\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E21\u0E07\u0E04\u0E25\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E17\u0E35\u0E48\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E48\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E14\u0E34\u0E19\u0E1A\u0E19\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E22\u0E2D\u0E14\u0E2B\u0E0D\u0E49\u0E32\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E34\u0E27\u0E19\u0E49\u0E33\u0E44\u0E2B\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E22\u0E2D\u0E14\u0E2B\u0E0D\u0E49\u0E32\u0E2B\u0E31\u0E01\u0E41\u0E21\u0E49\u0E41\u0E15\u0E48\u0E40\u0E2A\u0E49\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E21\u0E15\u0E15\u0E32\u0E41\u0E25\u0E30\u0E21\u0E07\u0E04\u0E25\u0E2D\u0E31\u0E19\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E17\u0E35\u0E48\u0E0A\u0E33\u0E23\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F \u0E40\u0E15\u0E34\u0E21 SP \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1E\u0E49\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19"
  },
  behemoth: {
    scientificName: "Gigantus Terra Behemoth",
    category: "\u0E2D\u0E2A\u0E39\u0E23\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Earth Titan)",
    naturalHabitat: "\u0E2B\u0E38\u0E1A\u0E40\u0E2B\u0E27\u0E25\u0E36\u0E01\u0E43\u0E15\u0E49\u0E1E\u0E34\u0E20\u0E1E\u0E41\u0E25\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E01\u0E40\u0E02\u0E32\u0E2B\u0E34\u0E19\u0E1C\u0E32\u0E42\u0E1A\u0E23\u0E32\u0E13",
    diet: "\u0E41\u0E23\u0E48\u0E18\u0E32\u0E15\u0E38\u0E1B\u0E10\u0E1E\u0E35 \u0E2B\u0E34\u0E19\u0E2D\u0E31\u0E0D\u0E21\u0E13\u0E35\u0E40\u0E27\u0E17\u0E21\u0E19\u0E15\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E41\u0E01\u0E48\u0E19\u0E25\u0E32\u0E27\u0E32\u0E40\u0E22\u0E47\u0E19",
    physicalFeatures: "\u0E23\u0E48\u0E32\u0E07\u0E21\u0E2B\u0E36\u0E21\u0E32\u0E23\u0E32\u0E27\u0E20\u0E39\u0E40\u0E02\u0E32\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48 \u0E1C\u0E34\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E31\u0E49\u0E19\u0E2B\u0E34\u0E19\u0E28\u0E34\u0E25\u0E32\u0E41\u0E01\u0E23\u0E48\u0E07 \u0E40\u0E02\u0E32\u0E04\u0E39\u0E48\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07 \u0E41\u0E25\u0E30\u0E2D\u0E38\u0E49\u0E07\u0E40\u0E17\u0E49\u0E32\u0E2B\u0E19\u0E32\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E19\u0E48\u0E19",
    natureBehavior: "\u0E23\u0E31\u0E01\u0E2A\u0E07\u0E1A\u0E41\u0E15\u0E48\u0E19\u0E48\u0E32\u0E40\u0E01\u0E23\u0E07\u0E02\u0E32\u0E21 \u0E01\u0E49\u0E32\u0E27\u0E40\u0E14\u0E34\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E37\u0E19\u0E1E\u0E34\u0E20\u0E1E\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19 \u0E2B\u0E32\u0E01\u0E16\u0E39\u0E01\u0E23\u0E1A\u0E01\u0E27\u0E19\u0E08\u0E30\u0E1B\u0E25\u0E14\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07\u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25",
    elementalOrigin: "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E16\u0E37\u0E2D\u0E01\u0E33\u0E40\u0E19\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E48\u0E2D\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E40\u0E1B\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E25\u0E01\u0E43\u0E19\u0E22\u0E38\u0E04\u0E14\u0E36\u0E01\u0E14\u0E33\u0E1A\u0E23\u0E23\u0E1E\u0E4C \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19\u0E41\u0E25\u0E30\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E17\u0E35\u0E48\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E15\u0E31\u0E27\u0E41\u0E25\u0E30\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2D\u0E31\u0E19\u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E25\u0E32\u0E22\u0E20\u0E39\u0E40\u0E02\u0E32\u0E41\u0E25\u0E30\u0E1A\u0E14\u0E02\u0E22\u0E35\u0E49\u0E40\u0E01\u0E23\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E43\u0E2B\u0E49\u0E41\u0E2B\u0E25\u0E01\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E04\u0E31\u0E21\u0E20\u0E35\u0E23\u0E4C\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25 \u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E04\u0E37\u0E2D\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E23\u0E49\u0E32\u0E22\u0E02\u0E19\u0E32\u0E14\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19 \u0E04\u0E27\u0E1A\u0E04\u0E39\u0E48\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E40\u0E25\u0E40\u0E27\u0E35\u0E22\u0E18\u0E32\u0E19 (Leviathan) \u0E1C\u0E39\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23 \u0E41\u0E25\u0E30\u0E0B\u0E34\u0E0B (Ziz) \u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E27\u0E2B\u0E32",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07\u0E01\u0E25\u0E32\u0E22\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E01\u0E31\u0E21\u0E1B\u0E19\u0E32\u0E17\u0E16\u0E25\u0E48\u0E21\u0E42\u0E25\u0E01\u0E31\u0E19\u0E15\u0E23\u0E4C] \u0E17\u0E35\u0E48\u0E17\u0E38\u0E1A\u0E17\u0E33\u0E25\u0E32\u0E22\u0E40\u0E01\u0E23\u0E32\u0E30\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E15\u0E31\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E01\u0E34\u0E25\u0E15\u0E34\u0E14\u0E15\u0E31\u0E27\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25"
  },
  leviathan: {
    scientificName: "Draco Leviathan Oceanus",
    category: "\u0E2D\u0E2A\u0E39\u0E23\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Abyssal Leviathan)",
    naturalHabitat: "\u0E23\u0E48\u0E2D\u0E07\u0E25\u0E36\u0E01\u0E01\u0E49\u0E19\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E21\u0E32\u0E40\u0E23\u0E35\u0E22\u0E19\u0E32\u0E41\u0E25\u0E30\u0E27\u0E31\u0E07\u0E19\u0E49\u0E33\u0E27\u0E19\u0E44\u0E23\u0E49\u0E01\u0E49\u0E19\u0E1A\u0E36\u0E49\u0E07",
    diet: "\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E19\u0E49\u0E33\u0E27\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 \u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E17\u0E30\u0E40\u0E25\u0E22\u0E31\u0E01\u0E29\u0E4C \u0E41\u0E25\u0E30\u0E21\u0E13\u0E35\u0E18\u0E32\u0E23\u0E32\u0E42\u0E1A\u0E23\u0E32\u0E13",
    physicalFeatures: "\u0E25\u0E33\u0E15\u0E31\u0E27\u0E04\u0E25\u0E49\u0E32\u0E22\u0E1E\u0E0D\u0E32\u0E21\u0E31\u0E07\u0E01\u0E23\u0E40\u0E01\u0E25\u0E47\u0E14\u0E21\u0E23\u0E01\u0E15\u0E04\u0E23\u0E32\u0E21\u0E02\u0E19\u0E32\u0E14\u0E22\u0E31\u0E01\u0E29\u0E4C \u0E04\u0E23\u0E35\u0E1A\u0E43\u0E1A\u0E21\u0E35\u0E14\u0E04\u0E21\u0E01\u0E23\u0E34\u0E1A \u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E01\u0E27\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E0D\u0E48 \u0E41\u0E25\u0E30\u0E14\u0E27\u0E07\u0E15\u0E32\u0E2A\u0E35\u0E04\u0E23\u0E32\u0E21\u0E40\u0E23\u0E37\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E43\u0E15\u0E49\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E25\u0E36\u0E01",
    natureBehavior: "\u0E08\u0E33\u0E28\u0E35\u0E25\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E15\u0E49\u0E2B\u0E49\u0E27\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E25\u0E36\u0E01\u0E19\u0E31\u0E1A\u0E1E\u0E31\u0E19\u0E1B\u0E35 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E37\u0E48\u0E19\u0E02\u0E36\u0E49\u0E19\u0E08\u0E30\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E04\u0E25\u0E37\u0E48\u0E19\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E21\u0E23\u0E2A\u0E38\u0E21\u0E16\u0E25\u0E48\u0E21\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19 \u0E23\u0E31\u0E01\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E07\u0E1A\u0E41\u0E15\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E33\u0E25\u0E32\u0E22\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E23\u0E1A\u0E01\u0E27\u0E19\u0E2D\u0E32\u0E13\u0E32\u0E40\u0E02\u0E15",
    elementalOrigin: "\u0E40\u0E25\u0E40\u0E27\u0E35\u0E22\u0E18\u0E32\u0E19\u0E04\u0E37\u0E2D\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E17\u0E35\u0E48\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E04\u0E27\u0E1A\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19 \u0E25\u0E21\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E19\u0E04\u0E37\u0E2D\u0E01\u0E48\u0E2D\u0E01\u0E33\u0E40\u0E19\u0E34\u0E14\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E25\u0E37\u0E19\u0E01\u0E34\u0E19\u0E40\u0E01\u0E32\u0E30\u0E17\u0E31\u0E49\u0E07\u0E40\u0E01\u0E32\u0E30\u0E25\u0E07\u0E2A\u0E39\u0E48\u0E01\u0E49\u0E19\u0E17\u0E30\u0E40\u0E25",
    didYouKnow: "\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19\u0E1B\u0E23\u0E31\u0E21\u0E1B\u0E23\u0E32 \u0E40\u0E25\u0E40\u0E27\u0E35\u0E22\u0E18\u0E32\u0E19\u0E04\u0E37\u0E2D\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A\u0E41\u0E2B\u0E48\u0E07\u0E17\u0E49\u0E2D\u0E07\u0E17\u0E30\u0E40\u0E25\u0E17\u0E35\u0E48\u0E25\u0E39\u0E01\u0E40\u0E23\u0E37\u0E2D\u0E41\u0E25\u0E30\u0E19\u0E31\u0E01\u0E40\u0E14\u0E34\u0E19\u0E40\u0E23\u0E37\u0E2D\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E2B\u0E27\u0E32\u0E14\u0E01\u0E25\u0E31\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E16\u0E37\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19\u0E2A\u0E32\u0E21\u0E2D\u0E2A\u0E39\u0E23\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E42\u0E25\u0E01 (\u0E14\u0E34\u0E19-\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18, \u0E19\u0E49\u0E33-\u0E40\u0E25\u0E40\u0E27\u0E35\u0E22\u0E18\u0E32\u0E19, \u0E1F\u0E49\u0E32-\u0E0B\u0E34\u0E0B)",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E16\u0E39\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E21\u0E2B\u0E32\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34\u0E01\u0E25\u0E37\u0E19\u0E2A\u0E21\u0E38\u0E17\u0E23] \u0E17\u0E35\u0E48\u0E0B\u0E31\u0E14\u0E01\u0E23\u0E30\u0E2B\u0E19\u0E48\u0E33\u0E15\u0E31\u0E14 SP \u0E41\u0E25\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39 \u0E1E\u0E23\u0E49\u0E2D\u0E21 Ability [\u0E08\u0E49\u0E32\u0E27\u0E04\u0E25\u0E31\u0E48\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23] \u0E17\u0E35\u0E48\u0E40\u0E23\u0E48\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E19\u0E49\u0E33\u0E40\u0E21\u0E37\u0E48\u0E2D SP \u0E40\u0E01\u0E34\u0E19 50% \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP \u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07"
  },
  garuda: {
    scientificName: "Aquila Garuda Divinus",
    category: "\u0E1E\u0E0D\u0E32\u0E23\u0E32\u0E0A\u0E1B\u0E31\u0E01\u0E29\u0E32\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Celestial Sovereign Raptor)",
    naturalHabitat: "\u0E22\u0E2D\u0E14\u0E40\u0E02\u0E32\u0E2A\u0E38\u0E40\u0E21\u0E23\u0E38 \u0E27\u0E34\u0E21\u0E32\u0E19\u0E09\u0E34\u0E21\u0E1E\u0E25\u0E35 \u0E41\u0E25\u0E30\u0E2B\u0E49\u0E27\u0E07\u0E40\u0E27\u0E2B\u0E32\u0E44\u0E23\u0E49\u0E02\u0E2D\u0E1A\u0E40\u0E02\u0E15",
    diet: "\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25 \u0E1E\u0E25\u0E31\u0E07\u0E1B\u0E23\u0E32\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E27\u0E32\u0E22\u0E38 \u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19",
    physicalFeatures: "\u0E01\u0E32\u0E22\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E2D\u0E23\u0E48\u0E32\u0E21 \u0E1B\u0E35\u0E01\u0E01\u0E27\u0E49\u0E32\u0E07\u0E21\u0E2B\u0E36\u0E21\u0E32\u0E14\u0E31\u0E48\u0E07\u0E40\u0E21\u0E06\u0E1E\u0E32\u0E22\u0E38 \u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E1E\u0E0A\u0E23\u0E04\u0E21\u0E01\u0E25\u0E49\u0E32 \u0E41\u0E25\u0E30\u0E14\u0E27\u0E07\u0E40\u0E19\u0E15\u0E23\u0E14\u0E31\u0E48\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E2A\u0E48\u0E2D\u0E07\u0E17\u0E30\u0E25\u0E38\u0E17\u0E38\u0E01\u0E21\u0E34\u0E15\u0E34",
    natureBehavior: "\u0E04\u0E23\u0E2D\u0E07\u0E1A\u0E31\u0E25\u0E25\u0E31\u0E07\u0E01\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E27\u0E2B\u0E32 \u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E04\u0E27\u0E32\u0E21\u0E22\u0E38\u0E15\u0E34\u0E18\u0E23\u0E23\u0E21 \u0E1A\u0E34\u0E19\u0E42\u0E09\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E07 \u0E1E\u0E31\u0E14\u0E01\u0E23\u0E30\u0E1E\u0E37\u0E2D\u0E1B\u0E35\u0E01\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E04\u0E23\u0E31\u0E49\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E21\u0E38\u0E19\u0E2A\u0E25\u0E32\u0E15\u0E31\u0E19\u0E16\u0E25\u0E48\u0E21\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19",
    elementalOrigin: "\u0E1E\u0E0D\u0E32\u0E04\u0E23\u0E38\u0E11\u0E04\u0E37\u0E2D\u0E40\u0E17\u0E1E\u0E1B\u0E31\u0E01\u0E29\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E25\u0E21\u0E17\u0E35\u0E48\u0E17\u0E23\u0E07\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 \u0E40\u0E1B\u0E47\u0E19\u0E04\u0E39\u0E48\u0E1B\u0E23\u0E31\u0E1A\u0E15\u0E25\u0E2D\u0E14\u0E01\u0E32\u0E25\u0E02\u0E2D\u0E07\u0E1E\u0E0D\u0E32\u0E19\u0E32\u0E04\u0E41\u0E2B\u0E48\u0E07\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19\u0E41\u0E25\u0E30\u0E19\u0E49\u0E33 \u0E21\u0E35\u0E1B\u0E35\u0E01\u0E27\u0E32\u0E22\u0E38\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E21\u0E48\u0E32\u0E19\u0E40\u0E21\u0E06\u0E41\u0E25\u0E30\u0E1A\u0E34\u0E19\u0E17\u0E30\u0E22\u0E32\u0E19\u0E02\u0E49\u0E32\u0E21\u0E21\u0E34\u0E15\u0E34\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2D\u0E34\u0E2A\u0E23\u0E30",
    didYouKnow: "\u0E43\u0E19\u0E21\u0E2B\u0E32\u0E01\u0E32\u0E1E\u0E22\u0E4C\u0E27\u0E23\u0E23\u0E13\u0E04\u0E14\u0E35\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E1E\u0E0D\u0E32\u0E04\u0E23\u0E38\u0E11\u0E21\u0E35\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E14\u0E0A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E48\u0E32\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E0A\u0E31\u0E49\u0E19\u0E2A\u0E39\u0E07 \u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E23\u0E30\u0E1E\u0E37\u0E2D\u0E1B\u0E35\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E23\u0E38\u0E11\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E31\u0E1A\u0E44\u0E1F\u0E01\u0E31\u0E25\u0E1B\u0E4C\u0E41\u0E25\u0E30\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E19\u0E49\u0E33\u0E27\u0E19\u0E44\u0E14\u0E49 \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E01\u0E35\u0E22\u0E23\u0E15\u0E34\u0E22\u0E28\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E34\u0E2A\u0E23\u0E20\u0E32\u0E1E\u0E2D\u0E31\u0E19\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E0D\u0E48",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E27\u0E2B\u0E32\u0E16\u0E39\u0E01\u0E1C\u0E2A\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E25\u0E32\u0E15\u0E31\u0E19\u0E09\u0E35\u0E01\u0E19\u0E20\u0E32] \u0E01\u0E32\u0E23\u0E31\u0E19\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E09\u0E37\u0E2D\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 \u0E41\u0E25\u0E30 Ability [\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E27\u0E2B\u0E32\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23] \u0E40\u0E1E\u0E34\u0E48\u0E21 CRI+12%, CRI DMG+25% \u0E41\u0E25\u0E30\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07/\u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E42\u0E14\u0E22\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C"
  },
  thunderbird: {
    scientificName: "Aquila Fulgur Giganteus",
    category: "\u0E27\u0E34\u0E2B\u0E04\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Thunder Raptor)",
    naturalHabitat: "\u0E2B\u0E38\u0E1A\u0E40\u0E02\u0E32\u0E40\u0E21\u0E06\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32 \u0E21\u0E2B\u0E32\u0E1E\u0E32\u0E22\u0E38\u0E17\u0E2D\u0E23\u0E4C\u0E19\u0E32\u0E42\u0E14 \u0E41\u0E25\u0E30\u0E22\u0E2D\u0E14\u0E1C\u0E32\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E1F\u0E32\u0E14",
    diet: "\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15 \u0E41\u0E01\u0E19\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19\u0E2D\u0E31\u0E2A\u0E19\u0E35 \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E2D\u0E2A\u0E39\u0E23\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32",
    physicalFeatures: "\u0E23\u0E48\u0E32\u0E07\u0E1B\u0E31\u0E01\u0E29\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E2A\u0E35\u0E04\u0E23\u0E32\u0E21\u0E41\u0E01\u0E21\u0E17\u0E2D\u0E07 \u0E1B\u0E25\u0E32\u0E22\u0E1B\u0E35\u0E01\u0E41\u0E1C\u0E48\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15 \u0E14\u0E27\u0E07\u0E15\u0E32\u0E2A\u0E35\u0E1F\u0E49\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E40\u0E23\u0E37\u0E2D\u0E07\u0E41\u0E2A\u0E07 \u0E41\u0E25\u0E30\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E1B\u0E32\u0E01\u0E19\u0E33\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E23\u0E07\u0E2A\u0E39\u0E07",
    natureBehavior: "\u0E1A\u0E34\u0E19\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E01\u0E49\u0E2D\u0E19\u0E40\u0E21\u0E06\u0E1E\u0E32\u0E22\u0E38\u0E1F\u0E49\u0E32\u0E04\u0E30\u0E19\u0E2D\u0E07 \u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E1E\u0E37\u0E2D\u0E1B\u0E35\u0E01\u0E41\u0E15\u0E48\u0E25\u0E30\u0E04\u0E23\u0E31\u0E49\u0E07\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E1F\u0E49\u0E32\u0E23\u0E49\u0E2D\u0E07\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E31\u0E48\u0E19\u0E41\u0E25\u0E30\u0E01\u0E30\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E1F\u0E49\u0E32\u0E1C\u0E48\u0E32\u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07",
    elementalOrigin: "\u0E18\u0E31\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E14\u0E04\u0E37\u0E2D\u0E23\u0E32\u0E0A\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E27\u0E34\u0E2B\u0E04\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22\u0E19\u0E41\u0E14\u0E07\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E23\u0E27\u0E21\u0E41\u0E2B\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C \u0E25\u0E21\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E41\u0E25\u0E30\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E39\u0E48\u0E23\u0E49\u0E2D\u0E07\u0E04\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E36\u0E01\u0E01\u0E49\u0E2D\u0E07\u0E02\u0E2D\u0E07\u0E1F\u0E49\u0E32\u0E1C\u0E48\u0E32\u0E1F\u0E32\u0E14\u0E1F\u0E31\u0E19\u0E04\u0E27\u0E32\u0E21\u0E21\u0E37\u0E14\u0E21\u0E34\u0E14",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E15\u0E33\u0E19\u0E32\u0E19\u0E0A\u0E19\u0E40\u0E1C\u0E48\u0E32\u0E1E\u0E37\u0E49\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2D\u0E40\u0E21\u0E23\u0E34\u0E01\u0E32\u0E40\u0E2B\u0E19\u0E37\u0E2D \u0E18\u0E31\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E34\u0E23\u0E4C\u0E14\u0E04\u0E37\u0E2D\u0E2A\u0E34\u0E48\u0E07\u0E21\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E17\u0E35\u0E48\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14\u0E21\u0E2B\u0E36\u0E21\u0E32\u0E08\u0E19\u0E1B\u0E35\u0E01\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1A\u0E14\u0E1A\u0E31\u0E07\u0E14\u0E27\u0E07\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E19\u0E01\u0E23\u0E30\u0E1E\u0E37\u0E2D\u0E1B\u0E35\u0E01\u0E08\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1E\u0E32\u0E22\u0E38\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07\u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E16\u0E39\u0E01\u0E19\u0E33\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E21\u0E2B\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1C\u0E48\u0E32\u0E1E\u0E34\u0E20\u0E1E] \u0E2A\u0E15\u0E31\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -25 \u0E41\u0E25\u0E30 Ability [\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07] \u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E0B\u0E49\u0E33 30% ATK \u0E41\u0E25\u0E30\u0E40\u0E15\u0E34\u0E21\u0E40\u0E01\u0E08 +25 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E28\u0E31\u0E15\u0E23\u0E39"
  },
  fenrir: {
    scientificName: "Canis Fenrir Glacialis",
    category: "\u0E1E\u0E0D\u0E32\u0E2B\u0E21\u0E32\u0E1B\u0E48\u0E32\u0E2D\u0E2A\u0E39\u0E23\u0E01\u0E25\u0E37\u0E19\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Frost Direwolf)",
    naturalHabitat: "\u0E17\u0E38\u0E48\u0E07\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C\u0E1F\u0E34\u0E21\u0E1A\u0E31\u0E25\u0E27\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E18\u0E32\u0E23\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01\u0E42\u0E1A\u0E23\u0E32\u0E13",
    diet: "\u0E14\u0E27\u0E07\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C \u0E41\u0E01\u0E48\u0E19\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E1E\u0E31\u0E19\u0E1B\u0E35 \u0E41\u0E25\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E01\u0E25\u0E37\u0E19\u0E01\u0E34\u0E19",
    physicalFeatures: "\u0E2B\u0E21\u0E32\u0E1B\u0E48\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E19\u0E2A\u0E35\u0E40\u0E07\u0E34\u0E19\u0E04\u0E23\u0E32\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E1C\u0E25\u0E36\u0E01\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07 \u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E07\u0E34\u0E19\u0E04\u0E21\u0E01\u0E23\u0E34\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E2D\u0E1A\u0E44\u0E2D\u0E40\u0E22\u0E47\u0E19 \u0E14\u0E27\u0E07\u0E15\u0E32\u0E2A\u0E35\u0E1F\u0E49\u0E32\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 \u0E41\u0E25\u0E30\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E01\u0E23\u0E48\u0E2D\u0E19\u0E28\u0E34\u0E25\u0E32",
    natureBehavior: "\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E0D\u0E32\u0E13\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E44\u0E23\u0E49\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E23\u0E32\u0E19\u0E35 \u0E04\u0E33\u0E23\u0E32\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E25\u0E37\u0E48\u0E19\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E34\u0E21\u0E30 \u0E2B\u0E34\u0E27\u0E01\u0E23\u0E30\u0E2B\u0E32\u0E22\u0E41\u0E25\u0E30\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E0A\u0E34\u0E49\u0E19\u0E46",
    elementalOrigin: "\u0E40\u0E1F\u0E19\u0E23\u0E34\u0E23\u0E4C\u0E04\u0E37\u0E2D\u0E2D\u0E2A\u0E39\u0E23\u0E2B\u0E21\u0E32\u0E1B\u0E48\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E27\u0E31\u0E19\u0E2A\u0E34\u0E49\u0E19\u0E42\u0E25\u0E01\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19\u0E19\u0E2D\u0E23\u0E4C\u0E2A \u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E19\u0E32\u0E27\u0E40\u0E2B\u0E19\u0E47\u0E1A\u0E2D\u0E31\u0E19\u0E44\u0E23\u0E49\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E19\u0E2D\u0E49\u0E32\u0E1B\u0E32\u0E01 \u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E25\u0E48\u0E32\u0E07\u0E08\u0E30\u0E08\u0E23\u0E14\u0E1E\u0E37\u0E49\u0E19\u0E14\u0E34\u0E19 \u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E1A\u0E19\u0E08\u0E30\u0E08\u0E23\u0E14\u0E17\u0E49\u0E2D\u0E07\u0E1F\u0E49\u0E32 \u0E01\u0E25\u0E37\u0E19\u0E01\u0E34\u0E19\u0E41\u0E21\u0E49\u0E01\u0E23\u0E30\u0E17\u0E31\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E40\u0E17\u0E1E",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E15\u0E33\u0E19\u0E32\u0E19\u0E41\u0E23\u0E47\u0E01\u0E19\u0E32\u0E23\u0E47\u0E2D\u0E01 \u0E40\u0E1F\u0E19\u0E23\u0E34\u0E23\u0E4C\u0E16\u0E39\u0E01\u0E25\u0E48\u0E32\u0E21\u0E14\u0E49\u0E27\u0E22\u0E42\u0E0B\u0E48\u0E40\u0E27\u0E17\u0E21\u0E19\u0E15\u0E23\u0E4C\u0E01\u0E25\u0E35\u0E1E\u0E19\u0E35\u0E23\u0E4C\u0E19\u0E31\u0E1A\u0E1E\u0E31\u0E19\u0E1B\u0E35 \u0E08\u0E19\u0E01\u0E23\u0E30\u0E17\u0E31\u0E48\u0E07\u0E1B\u0E25\u0E14\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E34\u0E14\u0E24\u0E14\u0E39\u0E2B\u0E19\u0E32\u0E27\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C (Fimbulwinter) \u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07\u0E17\u0E38\u0E01\u0E2A\u0E23\u0E23\u0E1E\u0E2A\u0E34\u0E48\u0E07",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E19\u0E32\u0E27\u0E40\u0E2B\u0E19\u0E47\u0E1A\u0E16\u0E39\u0E01\u0E01\u0E25\u0E31\u0E48\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25\u0E01\u0E25\u0E37\u0E19\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C] \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30 Ability [\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E09\u0E35\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13] \u0E02\u0E22\u0E35\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E2B\u0E23\u0E37\u0E2D Ice Skin \u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +30% \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 12%"
  },
  verdant_hydra: {
    scientificName: "Hydra Botanica Gigantea",
    category: "\u0E2D\u0E2A\u0E39\u0E23\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Verdant Nine-Headed Hydra)",
    naturalHabitat: "\u0E1B\u0E48\u0E32\u0E14\u0E07\u0E14\u0E34\u0E1A\u0E14\u0E36\u0E01\u0E14\u0E33\u0E1A\u0E23\u0E23\u0E1E\u0E4C \u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E1E\u0E31\u0E19\u0E2B\u0E19\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E2B\u0E38\u0E1A\u0E40\u0E2B\u0E27\u0E23\u0E32\u0E01\u0E44\u0E21\u0E49\u0E2B\u0E21\u0E37\u0E48\u0E19\u0E1B\u0E35",
    diet: "\u0E18\u0E32\u0E15\u0E38\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E1C\u0E37\u0E19\u0E1E\u0E34\u0E20\u0E1E \u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19 \u0E41\u0E25\u0E30\u0E42\u0E25\u0E2B\u0E34\u0E15\u0E08\u0E32\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E21\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23",
    physicalFeatures: "\u0E25\u0E33\u0E15\u0E49\u0E19\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E16\u0E31\u0E01\u0E17\u0E2D\u0E08\u0E32\u0E01\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E2B\u0E19\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E41\u0E19\u0E48\u0E19 \u0E21\u0E35\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23\u0E21\u0E31\u0E07\u0E01\u0E23\u0E1E\u0E24\u0E01\u0E29\u0E32 \u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2B\u0E19\u0E32\u0E21\u0E2D\u0E32\u0E1A\u0E22\u0E32\u0E07\u0E44\u0E21\u0E49 \u0E41\u0E25\u0E30\u0E23\u0E32\u0E01\u0E1D\u0E2D\u0E22\u0E14\u0E39\u0E14\u0E0B\u0E36\u0E21\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19",
    natureBehavior: "\u0E2A\u0E07\u0E1A\u0E19\u0E34\u0E48\u0E07\u0E14\u0E31\u0E48\u0E07\u0E1E\u0E07\u0E44\u0E1E\u0E23\u0E41\u0E15\u0E48\u0E14\u0E38\u0E23\u0E49\u0E32\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E44\u0E14\u0E49\u0E16\u0E36\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 \u0E09\u0E01\u0E01\u0E31\u0E14\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23 \u0E2B\u0E32\u0E01\u0E40\u0E28\u0E35\u0E22\u0E23\u0E43\u0E14\u0E02\u0E32\u0E14\u0E2A\u0E30\u0E1A\u0E31\u0E49\u0E19\u0E08\u0E30\u0E41\u0E15\u0E01\u0E22\u0E2D\u0E14\u0E43\u0E2B\u0E21\u0E48\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E27\u0E31\u0E19\u0E15\u0E32\u0E22",
    elementalOrigin: "\u0E44\u0E2E\u0E14\u0E23\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E04\u0E37\u0E2D\u0E2D\u0E2A\u0E39\u0E23\u0E1C\u0E39\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E40\u0E08\u0E23\u0E34\u0E0D\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E2D\u0E31\u0E19\u0E44\u0E23\u0E49\u0E02\u0E2D\u0E1A\u0E40\u0E02\u0E15\u0E02\u0E2D\u0E07\u0E1E\u0E24\u0E01\u0E29\u0E0A\u0E32\u0E15\u0E34 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2B\u0E22\u0E31\u0E48\u0E07\u0E23\u0E32\u0E01\u0E25\u0E07\u0E25\u0E36\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E1A\u0E32\u0E14\u0E41\u0E1C\u0E25\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E41\u0E1B\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2B\u0E19\u0E32\u0E21\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2D\u0E31\u0E19\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07",
    didYouKnow: "\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E44\u0E2E\u0E14\u0E23\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E27\u0E48\u0E32 '\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E1E\u0E31\u0E19\u0E40\u0E28\u0E35\u0E22\u0E23\u0E01\u0E25\u0E37\u0E19\u0E0A\u0E35\u0E1E' \u0E0B\u0E36\u0E48\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2D\u0E32\u0E27\u0E38\u0E18\u0E43\u0E14\u0E15\u0E31\u0E14\u0E1F\u0E31\u0E19\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E22\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E17\u0E38\u0E01\u0E1A\u0E32\u0E14\u0E41\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E08\u0E30\u0E01\u0E23\u0E30\u0E15\u0E38\u0E49\u0E19\u0E01\u0E32\u0E23\u0E07\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E35\u0E48\u0E41\u0E02\u0E47\u0E07\u0E41\u0E01\u0E23\u0E48\u0E07\u0E41\u0E25\u0E30\u0E2B\u0E19\u0E32\u0E17\u0E36\u0E1A\u0E01\u0E27\u0E48\u0E32\u0E40\u0E14\u0E34\u0E21",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E07\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E16\u0E39\u0E01\u0E23\u0E31\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1B\u0E10\u0E1E\u0E35] \u0E14\u0E32\u0E40\u0E21\u0E08 \xD74.2 \u0E2A\u0E39\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E14 25% \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30 Ability [\u0E2B\u0E19\u0E32\u0E21\u0E07\u0E2D\u0E01\u0E40\u0E07\u0E22\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E] \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 4% Max HP \u0E17\u0E38\u0E01\u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 15% \u0E08\u0E32\u0E01\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49"
  },
  king_basilisk: {
    scientificName: "Basiliscus Regalis Venenosus",
    category: "\u0E23\u0E32\u0E0A\u0E31\u0E19\u0E22\u0E4C\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E40\u0E19\u0E15\u0E23\u0E21\u0E23\u0E13\u0E30\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Deathgaze Basilisk King)",
    naturalHabitat: "\u0E2A\u0E38\u0E2A\u0E32\u0E19\u0E0B\u0E32\u0E01\u0E2D\u0E32\u0E23\u0E22\u0E18\u0E23\u0E23\u0E21\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E16\u0E49\u0E33\u0E2B\u0E34\u0E19\u0E1B\u0E39\u0E19\u0E01\u0E31\u0E14\u0E01\u0E23\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E49\u0E33\u0E1E\u0E34\u0E29\u0E40\u0E02\u0E49\u0E21\u0E02\u0E49\u0E19",
    diet: "\u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29 \u0E0B\u0E32\u0E01\u0E1F\u0E2D\u0E2A\u0E0B\u0E34\u0E25 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E21\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E41\u0E1B\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E30\u0E25\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22\u0E1E\u0E34\u0E29",
    physicalFeatures: "\u0E1E\u0E0D\u0E32\u0E07\u0E39\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E40\u0E01\u0E25\u0E47\u0E14\u0E21\u0E23\u0E01\u0E15\u0E17\u0E21\u0E34\u0E2C\u0E21\u0E31\u0E19\u0E27\u0E32\u0E27 \u0E2B\u0E31\u0E27\u0E2A\u0E27\u0E21\u0E21\u0E07\u0E01\u0E38\u0E0E\u0E40\u0E01\u0E25\u0E47\u0E14\u0E2B\u0E19\u0E32\u0E21\u0E23\u0E32\u0E0A\u0E32 \u0E14\u0E27\u0E07\u0E15\u0E32\u0E2A\u0E35\u0E2D\u0E33\u0E1E\u0E31\u0E19\u0E40\u0E23\u0E37\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E42\u0E04\u0E49\u0E07\u0E2D\u0E32\u0E1A\u0E1E\u0E34\u0E29\u0E01\u0E31\u0E14\u0E01\u0E23\u0E48\u0E2D\u0E19",
    natureBehavior: "\u0E23\u0E32\u0E0A\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E1C\u0E39\u0E49\u0E40\u0E22\u0E48\u0E2D\u0E2B\u0E22\u0E34\u0E48\u0E07\u0E41\u0E25\u0E30\u0E40\u0E14\u0E47\u0E14\u0E02\u0E32\u0E14 \u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E40\u0E25\u0E37\u0E49\u0E2D\u0E22\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E47\u0E17\u0E33\u0E25\u0E32\u0E22\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E23\u0E2D\u0E1A\u0E15\u0E31\u0E27 \u0E25\u0E21\u0E2B\u0E32\u0E22\u0E43\u0E08\u0E1E\u0E48\u0E19\u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E25\u0E30\u0E25\u0E32\u0E22\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E41\u0E25\u0E30\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E43\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32",
    elementalOrigin: "\u0E1A\u0E32\u0E0B\u0E34\u0E25\u0E34\u0E2A\u0E01\u0E4C\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E18\u0E32\u0E15\u0E38\u0E1E\u0E34\u0E29\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E34\u0E48\u0E07\u0E21\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E17\u0E35\u0E48\u0E23\u0E27\u0E21\u0E40\u0E2D\u0E32\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E34\u0E29\u0E02\u0E31\u0E49\u0E19\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E44\u0E27\u0E49\u0E43\u0E19\u0E2A\u0E32\u0E22\u0E40\u0E25\u0E37\u0E2D\u0E14 \u0E17\u0E38\u0E01\u0E2B\u0E22\u0E14\u0E1E\u0E34\u0E29\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E30\u0E25\u0E32\u0E22\u0E44\u0E14\u0E49\u0E41\u0E21\u0E49\u0E01\u0E23\u0E30\u0E17\u0E31\u0E48\u0E07\u0E28\u0E34\u0E25\u0E32\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E01\u0E25\u0E49\u0E32",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E15\u0E33\u0E19\u0E32\u0E19\u0E22\u0E38\u0E42\u0E23\u0E1B\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E1A\u0E32\u0E0B\u0E34\u0E25\u0E34\u0E2A\u0E01\u0E4C\u0E40\u0E01\u0E34\u0E14\u0E08\u0E32\u0E01\u0E44\u0E02\u0E48\u0E04\u0E32\u0E07\u0E04\u0E01\u0E17\u0E35\u0E48\u0E01\u0E01\u0E42\u0E14\u0E22\u0E44\u0E01\u0E48\u0E41\u0E08\u0E49\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01\u0E43\u0E19\u0E19\u0E32\u0E21 '\u0E23\u0E32\u0E0A\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E07\u0E39\u0E17\u0E31\u0E49\u0E07\u0E1B\u0E27\u0E07' \u0E0B\u0E36\u0E48\u0E07\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E21\u0E35\u0E1E\u0E34\u0E29\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14\u0E08\u0E30\u0E2B\u0E25\u0E1A\u0E2B\u0E19\u0E35\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E14\u0E49\u0E22\u0E34\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E40\u0E25\u0E37\u0E49\u0E2D\u0E22\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E19",
    combatConnection: "\u0E1E\u0E34\u0E29\u0E23\u0E49\u0E32\u0E22\u0E41\u0E23\u0E07\u0E2D\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E2D\u0E01\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E16\u0E39\u0E01\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 [\u0E40\u0E19\u0E15\u0E23\u0E21\u0E23\u0E13\u0E30\u0E1E\u0E34\u0E29\u0E2D\u0E40\u0E27\u0E08\u0E35] \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2A\u0E30\u0E2A\u0E21 2 \u0E0A\u0E31\u0E49\u0E19\u0E41\u0E25\u0E30\u0E25\u0E14 DEF 30% \u0E17\u0E31\u0E19\u0E17\u0E35 \u0E1E\u0E23\u0E49\u0E2D\u0E21 Ability [\u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E25\u0E30\u0E25\u0E32\u0E22\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01] \u0E17\u0E35\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E23\u0E07\u0E02\u0E36\u0E49\u0E19 +25% \u0E41\u0E25\u0E30\u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A 40% \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35"
  },
  cerberus: {
    scientificName: "Canis Tartarus Cerberus",
    category: "\u0E2D\u0E2A\u0E39\u0E23\u0E2A\u0E32\u0E21\u0E40\u0E28\u0E35\u0E22\u0E23\u0E1C\u0E39\u0E49\u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E19\u0E23\u0E01\u0E17\u0E32\u0E23\u0E4C\u0E17\u0E32\u0E23\u0E31\u0E2A\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Tartarus Three-Headed Hound)",
    naturalHabitat: "\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E19\u0E23\u0E01\u0E17\u0E32\u0E23\u0E4C\u0E17\u0E32\u0E23\u0E31\u0E2A \u0E23\u0E34\u0E21\u0E1D\u0E31\u0E48\u0E07\u0E41\u0E21\u0E48\u0E19\u0E49\u0E33\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E15\u0E32\u0E22\u0E2A\u0E15\u0E34\u0E01\u0E0B\u0E4C \u0E41\u0E25\u0E30\u0E2B\u0E38\u0E1A\u0E40\u0E2B\u0E27\u0E44\u0E23\u0E49\u0E01\u0E49\u0E19\u0E1A\u0E36\u0E49\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E22\u0E21\u0E42\u0E25\u0E01",
    diet: "\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E04\u0E19\u0E1A\u0E32\u0E1B \u0E40\u0E1B\u0E25\u0E27\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E21\u0E34\u0E2C \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E21\u0E37\u0E14\u0E21\u0E34\u0E14\u0E0A\u0E31\u0E48\u0E27\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C",
    physicalFeatures: "\u0E2A\u0E38\u0E19\u0E31\u0E02\u0E25\u0E48\u0E32\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E2A\u0E32\u0E21\u0E40\u0E28\u0E35\u0E22\u0E23 \u0E14\u0E27\u0E07\u0E15\u0E32\u0E2A\u0E35\u0E41\u0E14\u0E07\u0E01\u0E48\u0E33\u0E25\u0E38\u0E01\u0E42\u0E0A\u0E19\u0E14\u0E49\u0E27\u0E22\u0E44\u0E1F\u0E19\u0E23\u0E01 \u0E25\u0E33\u0E15\u0E31\u0E27\u0E2B\u0E38\u0E49\u0E21\u0E14\u0E49\u0E27\u0E22\u0E01\u0E25\u0E49\u0E32\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E01\u0E33\u0E22\u0E33 \u0E02\u0E19\u0E2A\u0E35\u0E14\u0E33\u0E17\u0E21\u0E34\u0E2C \u0E2B\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E1E\u0E34\u0E29\u0E23\u0E49\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E04\u0E21\u0E01\u0E23\u0E34\u0E1A\u0E2A\u0E32\u0E21\u0E04\u0E39\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01",
    natureBehavior: "\u0E14\u0E38\u0E23\u0E49\u0E32\u0E22\u0E20\u0E31\u0E01\u0E14\u0E35\u0E15\u0E48\u0E2D\u0E08\u0E49\u0E32\u0E27\u0E41\u0E2B\u0E48\u0E07\u0E22\u0E21\u0E42\u0E25\u0E01 \u0E40\u0E1D\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E17\u0E32\u0E23\u0E4C\u0E17\u0E32\u0E23\u0E31\u0E2A\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E43\u0E14\u0E2B\u0E25\u0E1A\u0E2B\u0E19\u0E35\u0E2B\u0E23\u0E37\u0E2D\u0E1A\u0E38\u0E01\u0E23\u0E38\u0E01 \u0E2A\u0E25\u0E31\u0E1A\u0E01\u0E31\u0E19\u0E15\u0E37\u0E48\u0E19\u0E40\u0E1D\u0E49\u0E32\u0E23\u0E30\u0E27\u0E31\u0E07\u0E44\u0E21\u0E48\u0E40\u0E04\u0E22\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E32\u0E21\u0E2B\u0E31\u0E27",
    elementalOrigin: "\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E2D\u0E23\u0E31\u0E2A\u0E04\u0E37\u0E2D\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E21\u0E37\u0E14\u0E21\u0E34\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E32\u0E22\u0E19\u0E30\u0E08\u0E32\u0E01\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E36\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E22\u0E21\u0E42\u0E25\u0E01 \u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E35\u0E48\u0E1E\u0E48\u0E19\u0E08\u0E32\u0E01\u0E1B\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E21\u0E34\u0E2C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E27\u0E31\u0E19\u0E14\u0E31\u0E1A \u0E21\u0E2D\u0E14\u0E44\u0E2B\u0E21\u0E49\u0E1E\u0E25\u0E31\u0E07\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E08\u0E19\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E2D\u0E32\u0E08\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E40\u0E17\u0E27\u0E15\u0E33\u0E19\u0E32\u0E19\u0E01\u0E23\u0E35\u0E01\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E1A\u0E2D\u0E23\u0E31\u0E2A\u0E40\u0E1B\u0E47\u0E19\u0E1A\u0E38\u0E15\u0E23\u0E02\u0E2D\u0E07\u0E44\u0E17\u0E1F\u0E2D\u0E19\u0E41\u0E25\u0E30\u0E2D\u0E35\u0E04\u0E34\u0E14\u0E19\u0E32 \u0E41\u0E15\u0E48\u0E25\u0E30\u0E40\u0E28\u0E35\u0E22\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E02\u0E2D\u0E07\u0E2D\u0E14\u0E35\u0E15 \u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 \u0E41\u0E25\u0E30\u0E2D\u0E19\u0E32\u0E04\u0E15 \u0E01\u0E32\u0E23\u0E08\u0E30\u0E1C\u0E48\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E15\u0E39\u0E19\u0E23\u0E01\u0E44\u0E1B\u0E44\u0E14\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E2D\u0E32\u0E28\u0E31\u0E22\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E14\u0E19\u0E15\u0E23\u0E35\u0E01\u0E25\u0E48\u0E2D\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E04\u0E49\u0E01\u0E19\u0E49\u0E33\u0E1C\u0E36\u0E49\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E42\u0E2B\u0E14\u0E40\u0E2B\u0E35\u0E49\u0E22\u0E21\u0E02\u0E2D\u0E07\u0E2A\u0E32\u0E21\u0E40\u0E28\u0E35\u0E22\u0E23\u0E16\u0E39\u0E01\u0E16\u0E48\u0E32\u0E22\u0E17\u0E2D\u0E14\u0E40\u0E1B\u0E47\u0E19 Ability [\u0E2A\u0E32\u0E21\u0E40\u0E28\u0E35\u0E22\u0E23\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E1A\u0E31\u0E1F] \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33 35% (35% ATK) \u0E41\u0E25\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39 30% \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 [\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E17\u0E21\u0E34\u0E2C\u0E17\u0E32\u0E23\u0E4C\u0E17\u0E32\u0E23\u0E31\u0E2A] \xD74.7 \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E1B\u0E28\u0E31\u0E15\u0E23\u0E39\u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 Curse (\u0E25\u0E14 HP 3%/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E16\u0E32\u0E27\u0E23\u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30)"
  },
  solar_griffin: {
    scientificName: "Gryphus Regalis Solaris",
    category: "\u0E23\u0E32\u0E0A\u0E31\u0E19\u0E22\u0E4C\u0E01\u0E23\u0E34\u0E1F\u0E1F\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Solar Golden Griffin King)",
    naturalHabitat: "\u0E27\u0E34\u0E2B\u0E32\u0E23\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25 \u0E22\u0E2D\u0E14\u0E1C\u0E32\u0E40\u0E2A\u0E35\u0E22\u0E14\u0E1F\u0E49\u0E32\u0E19\u0E20\u0E32\u0E25\u0E31\u0E22 \u0E41\u0E25\u0E30\u0E17\u0E38\u0E48\u0E07\u0E2B\u0E0D\u0E49\u0E32\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E23\u0E38\u0E13\u0E23\u0E38\u0E48\u0E07",
    diet: "\u0E44\u0E2D\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19 \u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19\u0E41\u0E2A\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E2D\u0E2A\u0E39\u0E23\u0E02\u0E19\u0E32\u0E14\u0E22\u0E31\u0E01\u0E29\u0E4C",
    physicalFeatures: "\u0E25\u0E33\u0E15\u0E31\u0E27\u0E17\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E0D\u0E32\u0E2D\u0E34\u0E19\u0E17\u0E23\u0E35\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E2D\u0E23\u0E48\u0E32\u0E21 \u0E08\u0E07\u0E2D\u0E22\u0E1B\u0E32\u0E01\u0E41\u0E25\u0E30\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E41\u0E2B\u0E25\u0E21\u0E04\u0E21\u0E17\u0E19\u0E17\u0E32\u0E19\u0E14\u0E31\u0E48\u0E07\u0E40\u0E1E\u0E0A\u0E23 \u0E17\u0E48\u0E2D\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E2B\u0E4C\u0E01\u0E33\u0E22\u0E33 \u0E02\u0E19\u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E40\u0E1B\u0E25\u0E48\u0E07\u0E23\u0E31\u0E28\u0E21\u0E35\u0E41\u0E2A\u0E07\u0E08\u0E49\u0E32\u0E14\u0E31\u0E48\u0E07\u0E14\u0E27\u0E07\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C",
    natureBehavior: "\u0E2A\u0E07\u0E48\u0E32\u0E07\u0E32\u0E21 \u0E2D\u0E07\u0E2D\u0E32\u0E08 \u0E41\u0E25\u0E30\u0E16\u0E37\u0E2D\u0E15\u0E19\u0E43\u0E19\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E28\u0E23\u0E35 \u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E41\u0E2A\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07 \u0E1A\u0E34\u0E19\u0E17\u0E30\u0E22\u0E32\u0E19\u0E2A\u0E39\u0E48\u0E17\u0E49\u0E2D\u0E07\u0E1F\u0E49\u0E32\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E2A\u0E39\u0E07 \u0E42\u0E09\u0E1A\u0E08\u0E39\u0E48\u0E42\u0E08\u0E21\u0E28\u0E31\u0E15\u0E23\u0E39\u0E08\u0E32\u0E01\u0E21\u0E38\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E41\u0E2A\u0E07\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E32\u0E1E\u0E23\u0E48\u0E32\u0E21\u0E31\u0E27",
    elementalOrigin: "\u0E01\u0E23\u0E34\u0E1F\u0E1F\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E02\u0E2D\u0E07\u0E18\u0E32\u0E15\u0E38\u0E41\u0E2A\u0E07 \u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E39\u0E14\u0E0B\u0E31\u0E1A\u0E23\u0E31\u0E07\u0E2A\u0E35\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E30\u0E25\u0E27\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E2A\u0E07\u0E40\u0E08\u0E34\u0E14\u0E08\u0E23\u0E31\u0E2A\u0E17\u0E35\u0E48\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E23\u0E2D\u0E1A\u0E02\u0E49\u0E32\u0E07\u0E15\u0E32\u0E1A\u0E2D\u0E14\u0E2A\u0E19\u0E34\u0E17",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E40\u0E17\u0E27\u0E15\u0E33\u0E19\u0E32\u0E19\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E01\u0E23\u0E34\u0E1F\u0E1F\u0E2D\u0E19\u0E04\u0E37\u0E2D\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1E\u0E32\u0E2B\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E40\u0E17\u0E1E\u0E2D\u0E1E\u0E2D\u0E25\u0E42\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E17\u0E1E\u0E41\u0E2B\u0E48\u0E07\u0E14\u0E27\u0E07\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E0D\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E0A\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E1B\u0E27\u0E07\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E27\u0E21\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E27\u0E2B\u0E32 (\u0E2D\u0E34\u0E19\u0E17\u0E23\u0E35) \u0E41\u0E25\u0E30\u0E40\u0E08\u0E49\u0E32\u0E41\u0E2B\u0E48\u0E07\u0E1E\u0E2A\u0E38\u0E18\u0E32 (\u0E2A\u0E34\u0E07\u0E42\u0E15) \u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19",
    combatConnection: "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E07\u0E48\u0E32\u0E07\u0E32\u0E21\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E04\u0E21\u0E01\u0E25\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E16\u0E39\u0E01\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E1B\u0E47\u0E19 Ability [\u0E23\u0E31\u0E28\u0E21\u0E35\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30] \u0E40\u0E1E\u0E34\u0E48\u0E21 HIT +15, AB +15 \u0E41\u0E25\u0E30\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14 100% \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 [\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32] \xD74.4 \u0E17\u0E35\u0E48\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (Blind 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
  },
  nine_tailed_fox: {
    scientificName: "Vulpes Spiritus Novem",
    category: "\u0E1E\u0E0D\u0E32\u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07\u0E21\u0E32\u0E22\u0E32\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 (Primordial Nine-Tailed Celestial Fox)",
    naturalHabitat: "\u0E2B\u0E38\u0E1A\u0E40\u0E02\u0E32\u0E2B\u0E21\u0E2D\u0E01\u0E21\u0E32\u0E22\u0E32 \u0E28\u0E32\u0E25\u0E40\u0E08\u0E49\u0E32\u0E42\u0E1A\u0E23\u0E32\u0E13\u0E1E\u0E31\u0E19\u0E1B\u0E35 \u0E41\u0E25\u0E30\u0E21\u0E34\u0E15\u0E34\u0E01\u0E23\u0E30\u0E08\u0E01\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15",
    diet: "\u0E44\u0E2D\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C \u0E1E\u0E25\u0E31\u0E07\u0E1B\u0E23\u0E32\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E41\u0E25\u0E30\u0E1E\u0E34\u0E20\u0E1E \u0E41\u0E25\u0E30\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
    physicalFeatures: "\u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E02\u0E19\u0E2A\u0E35\u0E02\u0E32\u0E27\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E0B\u0E21\u0E41\u0E14\u0E07\u0E0A\u0E32\u0E14 \u0E21\u0E35\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07\u0E1F\u0E39\u0E1F\u0E48\u0E2D\u0E07\u0E40\u0E1B\u0E25\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E41\u0E2A\u0E07\u0E2D\u0E2D\u0E23\u0E48\u0E32\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15 \u0E14\u0E27\u0E07\u0E15\u0E32\u0E2A\u0E35\u0E2D\u0E33\u0E1E\u0E31\u0E19\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 \u0E41\u0E25\u0E30\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E25\u0E2D\u0E22\u0E27\u0E19\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E22",
    natureBehavior: "\u0E40\u0E09\u0E25\u0E35\u0E22\u0E27\u0E09\u0E25\u0E32\u0E14 \u0E40\u0E08\u0E49\u0E32\u0E40\u0E25\u0E48\u0E2B\u0E4C\u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E2A\u0E19\u0E48\u0E2B\u0E4C\u0E2A\u0E30\u0E01\u0E14\u0E43\u0E08 \u0E43\u0E0A\u0E49\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E1A\u0E34\u0E14\u0E40\u0E1A\u0E37\u0E2D\u0E19\u0E21\u0E34\u0E15\u0E34\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E20\u0E32\u0E1E\u0E25\u0E27\u0E07\u0E15\u0E32\u0E2B\u0E25\u0E2D\u0E01\u0E2B\u0E25\u0E2D\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E43\u0E2B\u0E49\u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E07\u0E38\u0E19\u0E07\u0E07\u0E01\u0E48\u0E2D\u0E19\u0E08\u0E30\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13",
    elementalOrigin: "\u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E21\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E2A\u0E32\u0E22\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E17\u0E38\u0E01\u0E2B\u0E32\u0E07\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E2A\u0E21\u0E37\u0E2D\u0E19\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E01\u0E31\u0E01\u0E40\u0E01\u0E47\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E21\u0E32\u0E18\u0E34\u0E41\u0E25\u0E30\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E2D\u0E31\u0E19\u0E44\u0E23\u0E49\u0E17\u0E35\u0E48\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E33\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E07\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E2B\u0E32\u0E28\u0E32\u0E25",
    didYouKnow: "\u0E15\u0E32\u0E21\u0E15\u0E33\u0E19\u0E32\u0E19\u0E40\u0E2D\u0E40\u0E0A\u0E35\u0E22\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E08\u0E34\u0E49\u0E07\u0E08\u0E2D\u0E01\u0E08\u0E30\u0E21\u0E35\u0E2B\u0E32\u0E07\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E2B\u0E32\u0E07\u0E17\u0E38\u0E01\u0E46 \u0E2B\u0E19\u0E36\u0E48\u0E07\u0E23\u0E49\u0E2D\u0E22\u0E1B\u0E35\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E33\u0E40\u0E1E\u0E47\u0E0D\u0E15\u0E1A\u0E30 \u0E08\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E04\u0E23\u0E1A\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07 \u0E02\u0E19\u0E08\u0E30\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E35\u0E02\u0E32\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1E\u0E25\u0E31\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E17\u0E31\u0E14\u0E40\u0E17\u0E35\u0E22\u0E21\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32",
    combatConnection: "\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E16\u0E39\u0E01\u0E16\u0E48\u0E32\u0E22\u0E17\u0E2D\u0E14\u0E40\u0E1B\u0E47\u0E19 Ability [\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15\u0E17\u0E27\u0E35\u0E04\u0E39\u0E13] \u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +5% \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E2A\u0E01\u0E34\u0E25 (\u0E0B\u0E49\u0E2D\u0E19\u0E17\u0E31\u0E1A\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 4 \u0E0A\u0E31\u0E49\u0E19 = +20%) \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E31\u0E1A\u0E2A\u0E19 35% \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E41\u0E25\u0E30\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 [\u0E40\u0E01\u0E49\u0E32\u0E2B\u0E32\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13] \xD74.3 \u0E17\u0E30\u0E25\u0E27\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 25% \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -30 SP \u0E17\u0E31\u0E19\u0E17\u0E35"
  }
};

// src/data/animal_lore.ts
var ANIMAL_LORE_MAP = new Map(
  Object.entries(animal_lore_default)
);

// src/ui/heroes_view.ts
var HERO_MAP3 = new Map(getAllHeroes().map((h) => [h.id, h]));
var ELEMENT_MAP3 = new Map(getAllElements().map((e) => [e.id, e]));
function computeHeroBattlePower(stats) {
  return Math.round(
    stats.maxHp * 0.25 + stats.atk * 2 + stats.def * 1.5 + stats.spd * 1.2 + stats.cri * 2.5 + stats.block * 2.5
  );
}

// src/sim/test_roster_sorting.ts
var HERO_MAP4 = new Map(getAllHeroes().map((h) => [h.id, h]));
console.log("======================================================================");
console.log("  \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07, \u0E01\u0E23\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E04\u0E33\u0E19\u0E27\u0E13\u0E1E\u0E25\u0E31\u0E07\u0E23\u0E1A\u0E43\u0E19\u0E04\u0E25\u0E31\u0E07\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07 (Roster)   ");
console.log("======================================================================\n");
console.log("\u3010 1. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E04\u0E33\u0E19\u0E27\u0E13\u0E1E\u0E25\u0E31\u0E07\u0E23\u0E1A\u0E23\u0E27\u0E21 (Battle Power - BP) \u3011");
var roosterStats = computeHeroStats("rooster", 1, 1);
var roosterBp = computeHeroBattlePower(roosterStats);
console.log(`  \u2713 \u0E44\u0E01\u0E48 (rooster Lv.1 \u26051) BP: ${roosterBp}`);
if (roosterBp > 500 && roosterBp < 3e3) {
  console.log("  \u2713 \u0E1E\u0E25\u0E31\u0E07\u0E23\u0E1A\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E2A\u0E21\u0E40\u0E2B\u0E15\u0E38\u0E2A\u0E21\u0E1C\u0E25\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E40\u0E01\u0E21 RPG");
} else {
  throw new Error(`\u0E1E\u0E25\u0E31\u0E07\u0E23\u0E1A\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34: ${roosterBp}`);
}
var roosterLv2Stats = computeHeroStats("rooster", 2, 1);
var roosterLv2Bp = computeHeroBattlePower(roosterLv2Stats);
console.log(`  \u2713 \u0E44\u0E01\u0E48 (rooster Lv.2 \u26051) BP: ${roosterLv2Bp}`);
if (roosterLv2Bp > roosterBp) {
  console.log("  \u2713 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E40\u0E27\u0E25\u0E2D\u0E31\u0E1B \u0E1E\u0E25\u0E31\u0E07\u0E23\u0E1A BP \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2A\u0E2D\u0E14\u0E04\u0E25\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E1A\u0E2A\u0E40\u0E15\u0E15\u0E31\u0E2A");
} else {
  throw new Error("\u0E1E\u0E25\u0E31\u0E07\u0E23\u0E1A\u0E44\u0E21\u0E48\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E40\u0E27\u0E25\u0E2A\u0E39\u0E07\u0E02\u0E36\u0E49\u0E19");
}
console.log("\n\u3010 2. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E40\u0E25\u0E40\u0E27\u0E25 (Level Sort) \u3011");
var mockHeroes = [
  { heroId: "cat", level: 1, stars: 1 },
  { heroId: "rooster", level: 5, stars: 1 },
  { heroId: "buffalo", level: 3, stars: 1 }
];
var sortedByLevelDesc = [...mockHeroes].sort((a, b) => b.level - a.level);
console.log("  \u2713 \u0E40\u0E23\u0E35\u0E22\u0E07\u0E08\u0E32\u0E01\u0E40\u0E25\u0E40\u0E27\u0E25\u0E21\u0E32\u0E01\u0E44\u0E1B\u0E19\u0E49\u0E2D\u0E22: " + sortedByLevelDesc.map((h) => `${h.heroId}(Lv.${h.level})`).join(" > "));
if (sortedByLevelDesc[0].heroId !== "rooster" || sortedByLevelDesc[2].heroId !== "cat") {
  throw new Error("\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E25\u0E40\u0E27\u0E25\u0E21\u0E32\u0E01\u0E44\u0E1B\u0E19\u0E49\u0E2D\u0E22\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14");
}
var sortedByLevelAsc = [...mockHeroes].sort((a, b) => a.level - b.level);
console.log("  \u2713 \u0E40\u0E23\u0E35\u0E22\u0E07\u0E08\u0E32\u0E01\u0E40\u0E25\u0E40\u0E27\u0E25\u0E19\u0E49\u0E2D\u0E22\u0E44\u0E1B\u0E21\u0E32\u0E01: " + sortedByLevelAsc.map((h) => `${h.heroId}(Lv.${h.level})`).join(" < "));
if (sortedByLevelAsc[0].heroId !== "cat" || sortedByLevelAsc[2].heroId !== "rooster") {
  throw new Error("\u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E25\u0E40\u0E27\u0E25\u0E19\u0E49\u0E2D\u0E22\u0E44\u0E1B\u0E21\u0E32\u0E01\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14");
}
console.log("\n\u3010 3. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E41\u0E23\u0E47\u0E07\u0E04\u0E4C (Rank / Rarity Sort) \u3011");
var RARITY_ORDER = { SS: 4, S: 3, A: 2, B: 1 };
var mockRankHeroes = [
  { heroId: "rooster", rarity: "B" },
  { heroId: "dragon_gold", rarity: "SS" },
  { heroId: "tiger", rarity: "A" },
  { heroId: "phoenix", rarity: "S" }
];
var sortedByRankDesc = [...mockRankHeroes].sort((a, b) => (RARITY_ORDER[b.rarity] || 0) - (RARITY_ORDER[a.rarity] || 0));
console.log("  \u2713 \u0E40\u0E23\u0E35\u0E22\u0E07\u0E08\u0E32\u0E01\u0E41\u0E23\u0E47\u0E07\u0E04\u0E4C\u0E2A\u0E39\u0E07\u0E44\u0E1B\u0E15\u0E48\u0E33: " + sortedByRankDesc.map((h) => `${h.heroId}(${h.rarity})`).join(" > "));
if (sortedByRankDesc[0].rarity !== "SS" || sortedByRankDesc[3].rarity !== "B") {
  throw new Error("\u0E40\u0E23\u0E35\u0E22\u0E07\u0E41\u0E23\u0E47\u0E07\u0E04\u0E4C\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14");
}
console.log("\n\u3010 4. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E18\u0E32\u0E15\u0E38 (Element Order Sort) \u3011");
var ELEMENT_ORDER = {
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
  psychic: 11
};
var mockElemHeroes = [
  { heroId: "buffalo", element: "earth" },
  { heroId: "cat", element: "wind" },
  { heroId: "rooster", element: "fire" }
];
var sortedByElem = [...mockElemHeroes].sort((a, b) => (ELEMENT_ORDER[a.element] || 99) - (ELEMENT_ORDER[b.element] || 99));
console.log("  \u2713 \u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E18\u0E32\u0E15\u0E38: " + sortedByElem.map((h) => `${h.heroId}(${h.element})`).join(" -> "));
if (sortedByElem[0].element !== "fire" || sortedByElem[1].element !== "wind" || sortedByElem[2].element !== "earth") {
  throw new Error("\u0E40\u0E23\u0E35\u0E22\u0E07\u0E15\u0E32\u0E21\u0E18\u0E32\u0E15\u0E38\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14");
}
console.log("\n\u3010 5. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E23\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E32\u0E21\u0E18\u0E32\u0E15\u0E38\u0E41\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E30 (Filter Logic) \u3011");
var save = saveManager.getData();
var owned = Object.values(save.ownedHeroes);
var fireHeroes = owned.filter((h) => HERO_MAP4.get(h.heroId)?.element === "fire");
console.log(`  \u2713 \u0E01\u0E23\u0E2D\u0E07\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E18\u0E32\u0E15\u0E38\u0E44\u0E1F\u0E43\u0E19\u0E04\u0E25\u0E31\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19: \u0E1E\u0E1A ${fireHeroes.length} \u0E15\u0E31\u0E27 (rooster)`);
if (fireHeroes.length !== 1 || fireHeroes[0].heroId !== "rooster") {
  throw new Error("\u0E01\u0E23\u0E2D\u0E07\u0E18\u0E32\u0E15\u0E38\u0E44\u0E1F\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14");
}
var teamHeroes = owned.filter((h) => h.heroId === save.activeTeam1v1.mainHeroId || h.heroId === save.activeTeam1v1.backupHeroId);
console.log(`  \u2713 \u0E01\u0E23\u0E2D\u0E07\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E01\u0E32\u0E23: \u0E1E\u0E1A ${teamHeroes.length} \u0E15\u0E31\u0E27 (${teamHeroes.map((h) => h.heroId).join(", ")})`);
if (teamHeroes.length !== 2) {
  throw new Error("\u0E01\u0E23\u0E2D\u0E07\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E43\u0E19\u0E17\u0E35\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E01\u0E32\u0E23\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14");
}
console.log("\n\u3010 6. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E23\u0E30\u0E1A\u0E1A\u0E04\u0E49\u0E19\u0E2B\u0E32 Real-time Search \u3011");
var searchCat = owned.filter((h) => {
  const meta = HERO_MAP4.get(h.heroId);
  return meta?.name.includes("\u0E41\u0E21\u0E27") || meta?.id.includes("cat");
});
console.log(`  \u2713 \u0E04\u0E49\u0E19\u0E2B\u0E32\u0E04\u0E33\u0E27\u0E48\u0E32 "\u0E41\u0E21\u0E27": \u0E1E\u0E1A ${searchCat.length} \u0E15\u0E31\u0E27 (${searchCat[0]?.heroId})`);
if (searchCat.length !== 1 || searchCat[0].heroId !== "cat") {
  throw new Error("\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14");
}
console.log("\n======================================================================");
console.log("\u{1F389} \u0E17\u0E38\u0E01\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E31\u0E14\u0E40\u0E23\u0E35\u0E22\u0E07\u0E41\u0E25\u0E30\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E04\u0E25\u0E31\u0E07\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E09\u0E25\u0E38\u0E22 100%!");
console.log("======================================================================\n");
