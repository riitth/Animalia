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
    golden_bell_shield: {
      shieldHpPct: 0.5,
      spdRedPct: 0.3,
      duration: 2,
      isBuff: true,
      exclusiveShield: true
    },
    elemental_ward: {
      elemDmgRedPct: 0.1,
      duration: 2,
      isBuff: true,
      exclusiveShield: true
    },
    iron_body: {
      defBonusPct: 0.5,
      finalDmgRedPct: 0.3,
      criBonus: 40,
      spdRedPct: 0.5,
      immuneStun: true,
      immuneParalysis: true,
      duration: 5,
      isBuff: true,
      exclusiveShield: true
    },
    iron_fortress: {
      dmgRedPct: 0.15,
      duration: 2,
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
      id: "defense_s",
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E30\u0E06\u0E31\u0E07\u0E17\u0E2D\u0E07",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: true,
      tier: "S",
      baseChance: 0.2,
      damageMult: 0,
      effects: [
        {
          type: "golden_bell_shield",
          target: "self",
          chance: 1,
          value: 0.5,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E30\u0E06\u0E31\u0E07\u0E17\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1E\u0E25\u0E31\u0E07\u0E0A\u0E35\u0E27\u0E34\u0E15 50% \u0E02\u0E2D\u0E07 Max HP \u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E41\u0E15\u0E48\u0E25\u0E14 SPD \u0E25\u0E07 30% (\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49)"
    },
    {
      id: "defense_m1",
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E18\u0E32\u0E15\u0E38",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: false,
      tier: "M",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "elemental_ward",
          target: "self",
          chance: 1,
          value: 0.1,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E25\u0E14\u0E17\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E14\u0E49\u0E27\u0E22\u0E18\u0E32\u0E15\u0E38\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E25\u0E07 10% (\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49)"
    },
    {
      id: "defense_m2",
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: false,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.35,
      useDefForAtk: true,
      effects: [
        {
          type: "stun",
          chance: 0.4,
          duration: 1
        },
        {
          type: "paralysis",
          chance: 0.6,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 (\u0E43\u0E0A\u0E49\u0E04\u0E48\u0E32 DEF \u0E41\u0E17\u0E19\u0E04\u0E48\u0E32 ATK \xD71.35) \xB7 \u0E1E\u0E38\u0E48\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E28\u0E31\u0E15\u0E23\u0E39\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E41\u0E23\u0E07 \u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "defense_l",
      name: "\u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: false,
      tier: "L",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "iron_body",
          target: "self",
          chance: 1,
          duration: 5
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E08\u0E34\u0E15\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E01\u0E25\u0E49\u0E32 \u0E40\u0E1E\u0E34\u0E48\u0E21 DEF +50%, \u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E14\u0E25\u0E07 30%, \u0E40\u0E1E\u0E34\u0E48\u0E21 CRI +40%, \u0E25\u0E14 SPD 50% \u0E41\u0E25\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19/\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 100% (5 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49)"
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
      id: "defense_aoe",
      name: "\u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E25\u0E47\u0E01",
      element: "neutral",
      branch: "defense",
      tier: "L",
      targetScope: "all_allies",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "buff_def",
          target: "all_allies",
          value: 0.25,
          duration: 2
        },
        {
          type: "buff_block",
          target: "all_allies",
          value: 20,
          duration: 2
        },
        {
          type: "iron_fortress",
          target: "all_allies",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E01\u0E32\u0E07\u0E2D\u0E32\u0E13\u0E32\u0E40\u0E02\u0E15\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E43\u0E2B\u0E49\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E17\u0E38\u0E01\u0E04\u0E19 \u0E40\u0E1E\u0E34\u0E48\u0E21 DEF +25%, Block +20% (\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30) \u0E41\u0E25\u0E30\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
  "secret_s",
  "defense_s"
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
  "defense",
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
      else if (skillId.startsWith("defense_")) branch = "defense";
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
    golden_bell_shield: {
      shieldHpPct: 0.5,
      spdRedPct: 0.3,
      duration: 2,
      isBuff: true,
      exclusiveShield: true
    },
    elemental_ward: {
      elemDmgRedPct: 0.1,
      duration: 2,
      isBuff: true,
      exclusiveShield: true
    },
    iron_body: {
      defBonusPct: 0.5,
      finalDmgRedPct: 0.3,
      criBonus: 40,
      spdRedPct: 0.5,
      immuneStun: true,
      immuneParalysis: true,
      duration: 5,
      isBuff: true,
      exclusiveShield: true
    },
    iron_fortress: {
      dmgRedPct: 0.15,
      duration: 2,
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
      id: "defense_s",
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E30\u0E06\u0E31\u0E07\u0E17\u0E2D\u0E07",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: true,
      tier: "S",
      baseChance: 0.2,
      damageMult: 0,
      effects: [
        {
          type: "golden_bell_shield",
          target: "self",
          chance: 1,
          value: 0.5,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E30\u0E06\u0E31\u0E07\u0E17\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1E\u0E25\u0E31\u0E07\u0E0A\u0E35\u0E27\u0E34\u0E15 50% \u0E02\u0E2D\u0E07 Max HP \u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E41\u0E15\u0E48\u0E25\u0E14 SPD \u0E25\u0E07 30% (\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49)"
    },
    {
      id: "defense_m1",
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E18\u0E32\u0E15\u0E38",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: false,
      tier: "M",
      baseChance: 0.15,
      damageMult: 0,
      effects: [
        {
          type: "elemental_ward",
          target: "self",
          chance: 1,
          value: 0.1,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E25\u0E14\u0E17\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E14\u0E49\u0E27\u0E22\u0E18\u0E32\u0E15\u0E38\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E25\u0E07 10% (\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49)"
    },
    {
      id: "defense_m2",
      name: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: false,
      tier: "M",
      baseChance: 0.15,
      damageMult: 1.35,
      useDefForAtk: true,
      effects: [
        {
          type: "stun",
          chance: 0.4,
          duration: 1
        },
        {
          type: "paralysis",
          chance: 0.6,
          duration: 2
        }
      ],
      description: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E44\u0E23\u0E49\u0E18\u0E32\u0E15\u0E38 (\u0E43\u0E0A\u0E49\u0E04\u0E48\u0E32 DEF \u0E41\u0E17\u0E19\u0E04\u0E48\u0E32 ATK \xD71.35) \xB7 \u0E1E\u0E38\u0E48\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E28\u0E31\u0E15\u0E23\u0E39\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E41\u0E23\u0E07 \u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 60% \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
    },
    {
      id: "defense_l",
      name: "\u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01",
      element: "neutral",
      branch: "defense",
      unlockedByDefault: false,
      tier: "L",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "iron_body",
          target: "self",
          chance: 1,
          duration: 5
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E08\u0E34\u0E15\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E01\u0E25\u0E49\u0E32 \u0E40\u0E1E\u0E34\u0E48\u0E21 DEF +50%, \u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E14\u0E25\u0E07 30%, \u0E40\u0E1E\u0E34\u0E48\u0E21 CRI +40%, \u0E25\u0E14 SPD 50% \u0E41\u0E25\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19/\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 100% (5 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49)"
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
      id: "defense_aoe",
      name: "\u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E25\u0E47\u0E01",
      element: "neutral",
      branch: "defense",
      tier: "L",
      targetScope: "all_allies",
      baseChance: 0.1,
      damageMult: 0,
      effects: [
        {
          type: "buff_def",
          target: "all_allies",
          value: 0.25,
          duration: 2
        },
        {
          type: "buff_block",
          target: "all_allies",
          value: 20,
          duration: 2
        },
        {
          type: "iron_fortress",
          target: "all_allies",
          value: 0.15,
          duration: 2
        }
      ],
      description: "\u0E44\u0E21\u0E48\u0E42\u0E08\u0E21\u0E15\u0E35 \xB7 \u0E01\u0E32\u0E07\u0E2D\u0E32\u0E13\u0E32\u0E40\u0E02\u0E15\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E43\u0E2B\u0E49\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E17\u0E38\u0E01\u0E04\u0E19 \u0E40\u0E1E\u0E34\u0E48\u0E21 DEF +25%, Block +20% (\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30) \u0E41\u0E25\u0E30\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
function getSignatureConfig(rarity) {
  return heroes_default2.signatureByClass[rarity];
}
function getSkillSpCost(tier, skillId) {
  if (skillId && SKILL_MAP.has(skillId)) {
    const sk = SKILL_MAP.get(skillId);
    if (sk?.spCost !== void 0) return sk.spCost;
  }
  const costs = skills_default2.statusRules.spCosts ?? { S: 20, M: 35, L: 55 };
  if (!tier) return 0;
  return costs[tier] ?? 20;
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
  if (skillId.startsWith("defense_")) return "defense";
  return sk.element;
}
function sanitizeSkillLoadout(skillIds, defaultSkills = [], fillEmptyWithDefaults = false) {
  const result = [];
  const usedIds = /* @__PURE__ */ new Set();
  const branchCounts = /* @__PURE__ */ new Map();
  const canEquip = (id) => {
    if (!id || !SKILL_MAP.has(id) || usedIds.has(id)) return false;
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
    } else if (fillEmptyWithDefaults) {
      const fallback = defaultSkills.find((d) => canEquip(d)) ?? skills_default2.skills.find((s) => canEquip(s.id))?.id;
      if (fallback) addSkill(fallback);
    }
  }
  if (fillEmptyWithDefaults) {
    while (result.length < 4) {
      const fallback = defaultSkills.find((d) => canEquip(d)) ?? skills_default2.skills.find((s) => canEquip(s.id))?.id;
      if (!fallback) break;
      addSkill(fallback);
    }
  }
  return result;
}
function createFighter(heroId, customSkills, level = 1, stars = 1) {
  const h = HERO_MAP.get(heroId);
  if (!h) throw new Error(`Unknown hero: ${heroId}`);
  const baseStats = computeHeroStats(heroId, level, stars);
  const sigCfg = heroes_default2.signatureByClass[h.rarity];
  const hasCustom = customSkills !== void 0;
  const rawSkills = hasCustom ? customSkills : h.defaultSkills;
  const validSkills = sanitizeSkillLoadout(rawSkills, hasCustom ? [] : h.defaultSkills, !hasCustom);
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
    effects: h.ability?.id === "rebirth_ashes" || h.id === "phoenix" ? [{ type: "fire_skin", duration: 9999 }] : [],
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
function getEffectiveElement(f) {
  if (hasStatus(f, "freeze")) return "ice";
  if (hasStatus(f, "stone_curse")) return "earth";
  return f.element;
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
      s.criDmg += 0.25;
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
    if (f.abilityId === "colossal_tremor") s.ab += 15;
    if (f.abilityId === "sky_rending_talons") {
      s.cri += 12;
      s.criDmg += 0.25;
    }
    if (f.abilityId === "solar_piercing_crest") {
      s.hit += 15;
      s.ab += 15;
    }
  }
  let atkMult = 1, defMult = 1, spdMult = 1;
  for (const ef of f.effects) {
    const v = ef.value ?? 0;
    if (ef.type === "buff_atk") atkMult += v;
    if (ef.type === "spirit_orb") {
      const stacks = Math.min(4, ef.stacks ?? 1);
      atkMult += stacks * 0.05;
    }
    if (ef.type === "debuff_atk") atkMult -= v;
    if (ef.type === "buff_def") defMult += v;
    if (ef.type === "debuff_def") defMult -= v;
    if (ef.type === "buff_spd") spdMult += v;
    if (ef.type === "debuff_spd") spdMult -= v;
    if (ef.type === "slow") {
      spdMult -= skills_default2.statusRules.slow.spdRedPct;
      s.flee -= skills_default2.statusRules.slow.fleeRed;
    }
    if (ef.type === "paralysis") {
      spdMult -= skills_default2.statusRules.paralysis?.spdRedPct ?? 0.25;
    }
    if (ef.type === "blind") {
      s.hit -= skills_default2.statusRules.blind.hitRed;
      s.cri -= skills_default2.statusRules.blind.criRed;
    }
    if (ef.type === "buff_cri") s.cri += v;
    if (ef.type === "debuff_cri") s.cri -= v;
    if (ef.type === "buff_flee") s.flee += v;
    if (ef.type === "buff_hit") s.hit += v;
    if (ef.type === "debuff_hit") s.hit -= v;
    if (ef.type === "buff_ab") s.ab += v;
    if (ef.type === "buff_block") s.block += v;
    if (ef.type === "berserk") {
      atkMult += skills_default2.statusRules.berserk.atkBonusPct;
      spdMult += skills_default2.statusRules.berserk.spdBonusPct;
      defMult -= skills_default2.statusRules.berserk.defRedPct;
      s.hit -= skills_default2.statusRules.berserk.hitRed;
    }
    if (ef.type === "ice_skin") {
      spdMult -= skills_default2.statusRules.ice_skin.spdRedPct;
      defMult += skills_default2.statusRules.ice_skin.defBonusPct;
    }
    if (ef.type === "golden_bell_shield") {
      spdMult -= skills_default2.statusRules.golden_bell_shield?.spdRedPct ?? 0.3;
    }
    if (ef.type === "iron_body") {
      const ib = skills_default2.statusRules.iron_body;
      defMult += ib?.defBonusPct ?? 0.5;
      spdMult -= ib?.spdRedPct ?? 0.5;
      s.cri += ib?.criBonus ?? 40;
    }
  }
  s.atk = Math.max(1, s.atk * Math.max(0.3, atkMult));
  s.def = Math.max(0, s.def * Math.max(0.2, defMult));
  s.spd = Math.max(10, s.spd * Math.max(0.3, spdMult));
  if (f.effects.some((e) => e.type === "root")) s.flee = 0;
  s.cri = Math.max(0, Math.min(80, s.cri));
  s.ab = Math.max(0, Math.min(70, s.ab));
  return s;
}
function hasStatus(f, type) {
  return f.effects.some((e) => e.type === type);
}
var EXCLUSIVE_SHIELD_TYPES = ["shield", "energy_coat", "golden_bell_shield", "elemental_ward", "iron_body"];
function hasActiveExclusiveShield(f) {
  return f.effects.some((e) => EXCLUSIVE_SHIELD_TYPES.includes(e.type));
}

// src/engine/team_combat.ts
var HERO_MAP2 = new Map([...heroes_default2.heroes, ...enemies_default.enemies].map((h) => [h.id, h]));
var SKILL_MAP2 = new Map(skills_default2.skills.map((s) => [s.id, s]));
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
function hasStatus2(f, type) {
  return f.effects.some((e) => e.type === type);
}
function applyEffectToTarget(target, effect, enableAbilities = true) {
  if (enableAbilities && target.abilityId === "omniscient_gaze" && !effect.type.startsWith("buff_") && effect.type !== "shield" && effect.type !== "cleanse" && effect.type !== "heal_pct") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E25\u0E1A\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E1A\u0E1A (${target.abilityName})`;
  }
  if (enableAbilities && effect.type === "blind" && (target.abilityId === "hawk_eye" || target.abilityId === "solar_piercing_crest")) {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14 (${target.abilityName})`;
  }
  if (enableAbilities && effect.type === "stun" && target.abilityId === "colossal_tremor") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19 (${target.abilityName})`;
  }
  if ((effect.type === "stun" || effect.type === "paralysis") && hasStatus2(target, "iron_body")) {
    return `\u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01: \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30 [${effect.type === "stun" ? "\u0E2A\u0E15\u0E31\u0E19" : "\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15"}] 100%!`;
  }
  if (enableAbilities && (effect.type === "root" || effect.type === "slow") && target.abilityId === "sky_rending_talons") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07/\u0E2A\u0E42\u0E25\u0E27\u0E4C (${target.abilityName})`;
  }
  if (enableAbilities && target.abilityId === "zen_mind" && !effect.type.startsWith("buff_") && effect.type !== "shield" && effect.type !== "cleanse" && effect.type !== "heal_pct" && effect.type !== "energy_coat" && effect.type !== "golden_bell_shield" && effect.type !== "elemental_ward" && effect.type !== "iron_body" && effect.type !== "iron_fortress") {
    if (Math.random() < 0.25) {
      return `\u0E08\u0E34\u0E15\u0E2A\u0E07\u0E1A\u0E19\u0E34\u0E48\u0E07 \u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E25\u0E1A (${target.abilityName})`;
    }
  }
  if (effect.type === "cleanse") {
    const count = effect.count ?? 1;
    const removed = [];
    const debuffTypes = ["burn", "poison", "slow", "blind", "stun", "freeze", "root", "confusion", "bleed", "taunt", "sleep", "silence", "vulnerable", "curse", "paralysis", "debuff_atk", "debuff_def", "debuff_spd", "debuff_cri", "debuff_hit"];
    for (let i = 0; i < count; i++) {
      const idx = target.effects.findIndex((e) => debuffTypes.includes(e.type));
      if (idx !== -1) {
        removed.push(target.effects[idx].type);
        target.effects.splice(idx, 1);
      }
    }
    return removed.length ? `\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30 [${removed.join(", ")}]` : null;
  }
  if (effect.type === "dispel") {
    const isBuff = (type) => type.startsWith("buff_") || type === "shield" || type === "regen" || type === "fire_skin" || type === "ice_skin" || type === "berserk" || type === "counter_stance" || type === "yata_mirror" || type === "shadow_clone" || type === "energy_coat" || type === "golden_bell_shield" || type === "elemental_ward" || type === "iron_body" || type === "iron_fortress";
    const buffIndices = [];
    target.effects.forEach((e, idx) => {
      if (isBuff(e.type)) buffIndices.push(idx);
    });
    if (buffIndices.length === 0) return null;
    const count = effect.count ?? 1;
    const removedNames = [];
    const buffNames = {
      buff_atk: "\u0E1E\u0E25\u0E31\u0E07\u0E42\u0E08\u0E21\u0E15\u0E35+",
      buff_def: "\u0E1E\u0E25\u0E31\u0E07\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19+",
      buff_spd: "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27+",
      buff_cri: "\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25+",
      buff_flee: "\u0E2B\u0E25\u0E1A\u0E2B\u0E25\u0E35\u0E01+",
      buff_hit: "\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33+",
      buff_ab: "\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30+",
      buff_block: "\u0E1A\u0E25\u0E47\u0E2D\u0E01+",
      shield: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",
      regen: "\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07",
      fire_skin: "\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07",
      ice_skin: "\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C",
      berserk: "\u0E04\u0E25\u0E31\u0E48\u0E07\u0E28\u0E36\u0E01",
      counter_stance: "\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A",
      yata_mirror: "\u0E01\u0E23\u0E30\u0E08\u0E01\u0E22\u0E32\u0E15\u0E30",
      shadow_clone: "\u0E40\u0E07\u0E32\u0E21\u0E32\u0E22\u0E32",
      energy_coat: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19",
      golden_bell_shield: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E30\u0E06\u0E31\u0E07\u0E17\u0E2D\u0E07",
      elemental_ward: "\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E18\u0E32\u0E15\u0E38",
      iron_body: "\u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01",
      iron_fortress: "\u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E25\u0E47\u0E01"
    };
    for (let c = 0; c < count; c++) {
      if (buffIndices.length === 0) break;
      const randArrIdx = Math.floor(Math.random() * buffIndices.length);
      const targetEffectIdx = buffIndices.splice(randArrIdx, 1)[0];
      const removed = target.effects.splice(targetEffectIdx, 1)[0];
      if (removed) {
        if (removed.type === "shield" || removed.type === "golden_bell_shield") {
          target.shield = 0;
        }
        removedNames.push(buffNames[removed.type] || removed.type);
        for (let j = 0; j < buffIndices.length; j++) {
          if (buffIndices[j] > targetEffectIdx) {
            buffIndices[j]--;
          }
        }
      }
    }
    return removedNames.length ? `\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F [${removedNames.join(", ")}] \u0E02\u0E2D\u0E07\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22!` : null;
  }
  const hardCcTypes = ["stun", "freeze", "root", "sleep"];
  if (hardCcTypes.includes(effect.type)) {
    const resistChance = Math.min(0.9, target.ccResistStacks * skills_default2.statusRules.ccResistancePerStack);
    if (Math.random() < resistChance) {
      return `\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30 [${effect.type}] \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E30\u0E2A\u0E21 ${Math.round(resistChance * 100)}%)`;
    }
    target.ccResistStacks = Math.min(2, target.ccResistStacks + 1);
    target.ccResistTurns = skills_default2.statusRules.ccResistanceDuration;
  }
  if (effect.type === "shield") {
    if (hasStatus2(target, "vulnerable")) {
      return `\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30!`;
    }
    if (target.effects.some((e) => ["golden_bell_shield", "elemental_ward", "iron_body"].includes(e.type))) {
      return `\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E27\u0E34\u0E0A\u0E32\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49!`;
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
      ex.stacks = Math.min(skills_default2.statusRules.poison.maxStacks, (ex.stacks ?? 1) + addStacks);
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
  if (effect.type === "root") {
    const ex = target.effects.find((e) => e.type === "root");
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: "root", duration: effect.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07 (${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "armor_break_and_stun") {
    const defRed = effect.defRedPct ?? effect.value ?? 0.3;
    applyEffectToTarget(target, { type: "debuff_def", value: defRed, duration: 2 }, enableAbilities);
    const stunRes = applyEffectToTarget(target, { type: "stun", duration: effect.duration ?? 1 }, enableAbilities);
    const stunTag = stunRes?.includes("\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30 [stun]") || stunRes === "stun" ? "\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)" : stunRes;
    return `\u0E17\u0E38\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E15\u0E01 (\u0E25\u0E14 DEF ${Math.round(defRed * 100)}% 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30${stunTag}`;
  }
  if (effect.type === "max_poison_and_armor_break") {
    applyEffectToTarget(target, { type: "poison", stacks: 2, duration: 3 }, enableAbilities);
    const defRed = effect.defRedPct ?? effect.value ?? 0.3;
    applyEffectToTarget(target, { type: "debuff_def", value: defRed, duration: 2 }, enableAbilities);
    return `\u0E40\u0E19\u0E15\u0E23\u0E21\u0E23\u0E13\u0E30\u0E1E\u0E34\u0E29\u0E2D\u0E40\u0E27\u0E08\u0E35: \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) & \u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "dispel_and_sp_drain") {
    const cl = applyEffectToTarget(target, { type: "dispel", count: effect.count ?? 1 }, enableAbilities);
    const spDelta = effect.value ?? 25;
    target.sp = Math.max(0, target.sp - spDelta);
    const dispTag = cl ? `${cl} & ` : "";
    return `${dispTag}\u0E15\u0E31\u0E14 SP -${spDelta}`;
  }
  if (effect.type === "sp_drain") {
    const delta = effect.value ?? 0;
    target.sp = Math.max(0, target.sp - delta);
    return `\u0E15\u0E31\u0E14 SP -${delta}`;
  }
  if (effect.type === "stun_and_gauge_drain") {
    const stunRes = applyEffectToTarget(target, { type: "stun", duration: effect.duration ?? 1 }, enableAbilities);
    const drainVal = effect.value ?? 25;
    target.gauge = Math.max(0, target.gauge - drainVal);
    const stunTag = stunRes?.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19") ? stunRes : "\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19";
    return `${stunTag} & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -${drainVal}`;
  }
  if (effect.type === "curse") {
    const ex = target.effects.find((e) => e.type === "curse");
    if (ex) {
      return `\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30\u0E22\u0E31\u0E07\u0E04\u0E07\u0E21\u0E35\u0E1C\u0E25`;
    } else {
      target.effects.push({ type: "curse", duration: 999 });
      return `\u0E15\u0E34\u0E14\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 \u{1F52E} (\u0E25\u0E14 HP 3%/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
    }
  }
  if (effect.type === "dispel_all_and_blind") {
    const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield", "regen", "fire_skin", "ice_skin", "berserk", "counter_stance", "yata_mirror", "shadow_clone", "energy_coat", "golden_bell_shield", "elemental_ward", "iron_body", "iron_fortress"];
    target.effects = target.effects.filter((e) => !buffTypes.includes(e.type));
    target.shield = 0;
    const blindRes = applyEffectToTarget(target, { type: "blind", duration: effect.duration ?? 2 }, enableAbilities);
    const blindTag = blindRes?.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14") ? blindRes : "\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)";
    return `\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30${blindTag}`;
  }
  if (effect.type === "paralysis") {
    const ex = target.effects.find((e) => e.type === "paralysis");
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 2);
    } else {
      target.effects.push({ type: "paralysis", duration: effect.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 \u26A1 (SPD -25%, \u0E0A\u0E30\u0E07\u0E31\u0E01 60% ${effect.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "energy_coat") {
    if (target.effects.some((e) => ["golden_bell_shield", "elemental_ward", "iron_body"].includes(e.type))) {
      return `\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E27\u0E34\u0E0A\u0E32\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49!`;
    }
    const ex = target.effects.find((e) => e.type === "energy_coat");
    const ratio = effect.value ?? skills_default2.statusRules.energy_coat?.damageToSpPct ?? 0.4;
    if (ex) {
      ex.duration = Math.max(ex.duration, effect.duration ?? 3);
      ex.value = ratio;
    } else {
      target.effects.push({ type: "energy_coat", duration: effect.duration ?? 3, value: ratio });
    }
    return `\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 \u{1F6E1}\uFE0F\u26A1 (Energy Coat: \u0E0B\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 ${Math.round(ratio * 100)}% \u0E40\u0E02\u0E49\u0E32 SP ${effect.duration ?? 3} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "golden_bell_shield") {
    if (hasStatus2(target, "vulnerable")) {
      return `\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E30\u0E06\u0E31\u0E07\u0E17\u0E2D\u0E07!`;
    }
    if (hasActiveExclusiveShield(target)) {
      return `\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49!`;
    }
    const ratio = effect.value ?? skills_default2.statusRules.golden_bell_shield?.shieldHpPct ?? 0.5;
    const sh = Math.round(target.baseStats.maxHp * ratio);
    const dur = Math.min(2, effect.duration ?? 2);
    target.shield = sh;
    target.effects.push({ type: "golden_bell_shield", value: ratio, duration: dur });
    return `\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E23\u0E30\u0E06\u0E31\u0E07\u0E17\u0E2D\u0E07 \u{1F514} (+${sh} HP \u0E40\u0E01\u0E23\u0E32\u0E30, SPD -30% \u0E19\u0E32\u0E19 ${dur} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "elemental_ward") {
    if (hasActiveExclusiveShield(target)) {
      return `\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49!`;
    }
    const ratio = effect.value ?? skills_default2.statusRules.elemental_ward?.elemDmgRedPct ?? 0.1;
    const dur = Math.min(2, effect.duration ?? 2);
    target.effects.push({ type: "elemental_ward", value: ratio, duration: dur });
    return `\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E18\u0E32\u0E15\u0E38 \u{1F4A0} (\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E18\u0E32\u0E15\u0E38 -${Math.round(ratio * 100)}% \u0E19\u0E32\u0E19 ${dur} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "iron_body") {
    if (hasActiveExclusiveShield(target)) {
      return `\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E01\u0E31\u0E1A\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E01\u0E23\u0E32\u0E30\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49!`;
    }
    const dur = effect.duration ?? 5;
    target.effects = target.effects.filter((e) => e.type !== "stun" && e.type !== "paralysis");
    target.effects.push({ type: "iron_body", duration: dur });
    return `\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E2A\u0E20\u0E32\u0E27\u0E30\u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01 \u{1F9BE} (DEF+50%, \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22 30%, CRI+40, SPD-50%, \u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19/\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 100% \u0E19\u0E32\u0E19 ${dur} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "iron_fortress") {
    const ratio = effect.value ?? skills_default2.statusRules.iron_fortress?.dmgRedPct ?? 0.15;
    const dur = effect.duration ?? 2;
    const ex = target.effects.find((e) => e.type === "iron_fortress");
    if (ex) {
      ex.duration = Math.max(ex.duration, dur);
      ex.value = ratio;
    } else {
      target.effects.push({ type: "iron_fortress", value: ratio, duration: dur });
    }
    return `\u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E25\u0E47\u0E01 \u{1F3F0} (\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A -${Math.round(ratio * 100)}% \u0E19\u0E32\u0E19 ${dur} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
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
      teamBStars: options.teamBStars,
      skillLevelsA: options.skillLevelsA,
      skillLevelsB: options.skillLevelsB
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
    if (hasStatus2(f, "stun") || hasStatus2(f, "freeze") || hasStatus2(f, "sleep") || hasStatus2(f, "stone_curse")) {
      const isSleep = hasStatus2(f, "sleep");
      const isStone = hasStatus2(f, "stone_curse");
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: "-",
        actionType: "skip",
        actionName: isStone ? "\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19" : isSleep ? "\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25" : "\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27",
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
    if (hasStatus2(f, "paralysis")) {
      const flinchChance = skills_default2.statusRules.paralysis?.flinchChance ?? 0.6;
      if (Math.random() < flinchChance) {
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: "-",
          actionType: "skip",
          actionName: "\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15",
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[\u0E23\u0E2D\u0E1A ${this.round}] \u26A1 ${f.name} (\u0E1D\u0E31\u0E48\u0E07 ${f.side}) \u0E40\u0E01\u0E34\u0E14\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E0A\u0E30\u0E07\u0E31\u0E01\u0E08\u0E32\u0E01\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (Paralysis ${Math.round(flinchChance * 100)}%) \u0E02\u0E49\u0E32\u0E21\u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19\u0E43\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E19\u0E35\u0E49!`
        });
        this.tickStatuses(f);
        return;
      }
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
    if (hasStatus2(f, "confusion")) {
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
    if (hasStatus2(f, "bleed")) {
      const bAct = Math.round(f.baseStats.maxHp * skills_default2.statusRules.bleed.actionDamageHpPct);
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
    const isSilenced = hasStatus2(f, "silence");
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
        if (sk.id === "secret_l" && hasStatus2(f, "shadow_clone")) continue;
        if ((sk.id === "defense_s" || sk.id === "defense_m1" || sk.id === "defense_l") && hasActiveExclusiveShield(f)) continue;
        if (sk.damageMult === 0 && sk.effects.every((e) => e.type === "shield") && hasActiveExclusiveShield(f)) continue;
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
    const breathBonus = isSilenced ? 0 : heroes_default2.statFormula.spNormalAttackBonus ?? 6;
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
          const wineMistMult = hasStatus2(f, "wine_mist") ? 1.5 : 1;
          dotDmg += f.baseStats.maxHp * skills_default2.statusRules.burn.hpLossPctPerTurn * wineMistMult;
        } else if (ef.type === "poison") {
          const stacks = ef.stacks ?? 1;
          dotDmg += f.baseStats.maxHp * skills_default2.statusRules.poison.hpLossPctPerTurn * stacks;
        } else if (ef.type === "curse") {
          dotDmg += f.baseStats.maxHp * skills_default2.statusRules.curse.hpLossPctPerTurn;
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
    if (this.options.enableAbilities && f.abilityId === "thorn_regrowth" && f.hp > 0 && !hasStatus2(f, "stone_curse")) {
      const h = Math.round(f.baseStats.maxHp * 0.04);
      f.hp = Math.min(f.baseStats.maxHp, f.hp + h);
      this.recordEvent({
        turn: this.round,
        actorSide: f.side,
        actorName: f.name,
        targetName: "-",
        actionType: "status",
        actionName: "\u0E2B\u0E19\u0E32\u0E21\u0E07\u0E2D\u0E01\u0E40\u0E07\u0E22\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E",
        damage: 0,
        healed: h,
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [`\u0E1F\u0E37\u0E49\u0E19 +${h} HP`],
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] Ability [${f.abilityName}] \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E0A\u0E35\u0E27\u0E32\u0E2B\u0E19\u0E32\u0E21\u0E07\u0E2D\u0E01\u0E40\u0E07\u0E22 +${h} HP (HP ${Math.round(f.hp)}/${f.baseStats.maxHp})`
      });
    }
    if (this.options.enableAbilities && f.abilityId === "high_voltage_organ" && f.hp > 0 && Math.random() < 0.5) {
      const enemies = this.getLivingFighters(this.getOpposingSquad(f.side));
      if (enemies.length > 0) {
        const randTarget = enemies[Math.floor(Math.random() * enemies.length)];
        applyEffectToTarget(randTarget, { type: "paralysis", duration: 2 }, true);
        randTarget.gauge = Math.max(0, randTarget.gauge - 10);
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: randTarget.name,
          actionType: "ability",
          actionName: "\u0E2D\u0E27\u0E31\u0E22\u0E27\u0E30\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E2A\u0E39\u0E07 860V",
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[\u0E23\u0E2D\u0E1A ${this.round}] Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (50%) \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E23\u0E07\u0E2A\u0E39\u0E07 860V \u0E43\u0E2A\u0E48 ${randTarget.name} \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10!`
        });
      }
    }
    if (this.options.enableAbilities && f.abilityId === "zen_mind" && f.hp > 0 && Math.random() < 0.4) {
      const allies = this.getLivingFighters(this.getLivingSquad(f.side));
      if (allies.length > 0) {
        allies.sort((a, b) => a.hp / a.baseStats.maxHp - b.hp / b.baseStats.maxHp);
        const targetAlly = allies[0];
        applyEffectToTarget(targetAlly, { type: "energy_coat", duration: 2 }, true);
        this.recordEvent({
          turn: this.round,
          actorSide: f.side,
          actorName: f.name,
          targetName: targetAlly.name,
          actionType: "ability",
          actionName: "\u0E08\u0E34\u0E15\u0E2A\u0E07\u0E1A\u0E19\u0E34\u0E48\u0E07",
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[\u0E23\u0E2D\u0E1A ${this.round}] Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (40%) \u0E08\u0E34\u0E15\u0E2A\u0E07\u0E1A\u0E19\u0E34\u0E48\u0E07 \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E43\u0E2B\u0E49 ${targetAlly.name}!`
        });
      }
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
    const elemMult = getElementMultiplier(att.element, getEffectiveElement(def), att.side, this.options.forcedElementAdvantage);
    let isCrit = Math.random() < attStats.cri / 100;
    let critMult = isCrit ? attStats.criDmg : 1;
    const appliedEffects = [`\u0E1E\u0E31\u0E01\u0E2B\u0E32\u0E22\u0E43\u0E08 +${breathBonus} SP`];
    if (hasStatus2(def, "sleep")) {
      isCrit = true;
      critMult = attStats.criDmg * skills_default2.statusRules.sleep.wakeDmgMult;
      def.effects = def.effects.filter((e) => e.type !== "sleep");
      appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
    }
    const K = heroes_default2.statFormula.defConstantK;
    const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
    const effDef = defStats.def * (1 - pierce);
    const baseDmg = Math.max(1, attStats.atk * (K / (K + effDef)));
    let finalDmg = Math.round(baseDmg * elemMult * critMult);
    if (hasStatus2(def, "vulnerable")) {
      finalDmg = Math.round(finalDmg * (1 + skills_default2.statusRules.vulnerable.extraDmgPct));
      appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
    }
    if (hasStatus2(att, "taunt")) {
      finalDmg = Math.round(finalDmg * (1 - skills_default2.statusRules.taunt.dmgReductionPct));
      appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
    }
    if (hasStatus2(def, "elemental_ward") && att.element !== "neutral") {
      const wardEf = def.effects.find((e) => e.type === "elemental_ward");
      const redPct = wardEf?.value ?? skills_default2.statusRules.elemental_ward?.elemDmgRedPct ?? 0.1;
      finalDmg = Math.round(finalDmg * (1 - redPct));
      appliedEffects.push(`\u{1F4A0} \u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E18\u0E32\u0E15\u0E38: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E18\u0E32\u0E15\u0E38\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
    }
    if (hasStatus2(def, "iron_fortress")) {
      const fortEf = def.effects.find((e) => e.type === "iron_fortress");
      const redPct = fortEf?.value ?? skills_default2.statusRules.iron_fortress?.dmgRedPct ?? 0.15;
      finalDmg = Math.round(finalDmg * (1 - redPct));
      appliedEffects.push(`\u{1F3F0} \u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E25\u0E47\u0E01: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
    }
    if (hasStatus2(def, "iron_body")) {
      const redPct = skills_default2.statusRules.iron_body?.finalDmgRedPct ?? 0.3;
      finalDmg = Math.round(finalDmg * (1 - redPct));
      appliedEffects.push(`\u{1F9BE} \u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
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
      if (def.abilityId === "caustic_venom_aura" && Math.random() < 0.4) {
        applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (40%) \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
      }
      if (att.abilityId === "glacial_fang_hunt" && (hasStatus2(def, "freeze") || hasStatus2(def, "ice_skin"))) {
        finalDmg = Math.round(finalDmg * 1.3);
        appliedEffects.push(`Ability [${att.abilityName}] \u0E02\u0E22\u0E35\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07/Ice Skin \u0E14\u0E32\u0E40\u0E21\u0E08 +30%`);
      }
      if (att.abilityId === "caustic_venom_aura" && hasStatus2(def, "poison")) {
        finalDmg = Math.round(finalDmg * 1.25);
        appliedEffects.push(`Ability [${att.abilityName}] \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E02\u0E22\u0E35\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 \u0E14\u0E32\u0E40\u0E21\u0E08 +25%`);
      }
      if (def.abilityId === "ancient_bulwark") {
        finalDmg = Math.round(finalDmg * 0.88);
        if (def.hp < def.baseStats.maxHp * 0.65 && !hasStatus2(def, "energy_coat")) {
          applyEffectToTarget(def, { type: "energy_coat", duration: 3 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] \u0E01\u0E32\u0E22\u0E32\u0E08\u0E34\u0E15\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
        }
      }
      if (def.abilityId === "electro_sense" && Math.random() < 0.45) {
        applyEffectToTarget(def, { type: "energy_coat", duration: 2 }, true);
        applyEffectToTarget(att, { type: "debuff_hit", value: 10, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (45%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22 \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) & \u0E25\u0E14 HIT ${att.name} 10 \u0E41\u0E15\u0E49\u0E21`);
      }
      if (def.abilityId === "nematocyst_paralysis" && Math.random() < 0.5) {
        applyEffectToTarget(att, { type: "paralysis", duration: 2 }, true);
        att.gauge = Math.max(0, att.gauge - 8);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E25\u0E1B\u0E31\u0E07\u0E2B\u0E32\u0E1E\u0E34\u0E29\u0E0A\u0E32 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29\u0E40\u0E19\u0E21\u0E32\u0E42\u0E17\u0E0B\u0E34\u0E2A\u0E15\u0E4C \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
      }
      if (att.abilityId === "neurotoxic_stinger" && hasStatus2(def, "poison") && Math.random() < 0.65) {
        finalDmg = Math.round(finalDmg * 1.18);
        appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E1E\u0E34\u0E29\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
        if (Math.random() < 0.5) {
          applyEffectToTarget(def, { type: "paralysis", duration: 2 }, true);
          appliedEffects.push(`Ability [${att.abilityName}] \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
      }
      if (att.abilityId === "nematocyst_paralysis" && Math.random() < 0.5) {
        applyEffectToTarget(def, { type: "paralysis", duration: 2 }, true);
        def.gauge = Math.max(0, def.gauge - 8);
        appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E25\u0E1B\u0E31\u0E07\u0E2B\u0E32\u0E1E\u0E34\u0E29\u0E0A\u0E32 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
      }
    }
    this.applyDamageToTarget(def, finalDmg);
    if (this.options.enableAbilities && att.abilityId === "glacial_fang_hunt" && finalDmg > 0 && !hasStatus2(att, "stone_curse")) {
      const ls = Math.round(finalDmg * 0.12);
      att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
      appliedEffects.push(`\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +${ls} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === "thorn_regrowth" && finalDmg > 0 && !hasStatus2(att, "vulnerable")) {
      const sh = Math.round(finalDmg * 0.15);
      if (sh > 0) {
        att.shield = Math.min(att.baseStats.maxHp * 0.5, att.shield + sh);
        const ex = att.effects.find((e) => e.type === "shield");
        if (ex) ex.duration = Math.max(ex.duration, 2);
        else att.effects.push({ type: "shield", duration: 2 });
        appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2B\u0E19\u0E32\u0E21\u0E1E\u0E24\u0E01\u0E29\u0E32 +${sh}`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && Math.random() < 0.4) {
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
      appliedEffects.push(`Ability [${att.abilityName}] (40%) \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP`);
    }
    if (this.options.enableAbilities && att.abilityId === "static_discharge" && Math.random() < 0.45) {
      const boltDmg = Math.max(1, Math.round(attStats.atk * 0.3));
      this.applyDamageToTarget(def, boltDmg);
      appliedEffects.push(`\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E0B\u0E49\u0E33 \u26A1 -${boltDmg} HP`);
    }
    if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === "static_discharge") {
      att.gauge = Math.min(100, att.gauge + 25);
      appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08 +25`);
    }
    if (isCrit && this.options.enableAbilities && att.abilityId === "colossal_tremor") {
      const enemySquad = att.side === "A" ? this.squadB : this.squadA;
      const livingEnemies = this.getLivingFighters(enemySquad);
      const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
      for (const en of livingEnemies) {
        this.applyDamageToTarget(en, shockwaveDmg);
      }
      appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27 \u{1F4A5} -${shockwaveDmg} HP \u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
    }
    if (this.options.enableAbilities && att.abilityId === "tartarus_three_fangs" && def.hp > 0) {
      if (Math.random() < 0.35) {
        const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35));
        this.applyDamageToTarget(def, biteDmg);
        appliedEffects.push(`Ability [${att.abilityName}] (35%) \u0E40\u0E28\u0E35\u0E22\u0E23\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07\u0E09\u0E25\u0E32\u0E21\u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33 \u{1F4A5} -${biteDmg} HP`);
      }
      if (Math.random() < 0.3 && def.hp > 0) {
        const dispRes = applyEffectToTarget(def, { type: "dispel", count: 1 }, true);
        if (dispRes) {
          appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
        }
      }
    }
    if (this.options.enableAbilities && att.abilityId === "psionic_spirit_orbs") {
      const orb = att.effects.find((e) => e.type === "spirit_orb");
      if (orb && (orb.stacks ?? 1) >= 4 && Math.random() < 0.2) {
        att.effects = att.effects.filter((e) => e.type !== "spirit_orb");
        const enemySquad = att.side === "A" ? this.squadB : this.squadA;
        const livingEnemies = this.getLivingFighters(enemySquad);
        const burstDmg = Math.max(1, Math.round(attStats.atk * 0.65));
        for (const en of livingEnemies) {
          this.applyDamageToTarget(en, burstDmg);
          en.sp = Math.max(0, en.sp - 15);
        }
        appliedEffects.push(`Ability [${att.abilityName}] (20%) \u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1E\u0E25\u0E31\u0E07\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 4 \u0E25\u0E39\u0E01\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E30\u0E25\u0E31\u0E22 \u{1F4A5} -${burstDmg} HP & \u0E15\u0E31\u0E14 SP -15 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 (\u0E2A\u0E25\u0E32\u0E22\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E30\u0E2A\u0E21\u0E43\u0E2B\u0E21\u0E48)`);
      }
    }
    if (this.options.enableAbilities && def.abilityId === "psionic_spirit_orbs" && def.hp > 0 && Math.random() < 0.35) {
      const confRes = applyEffectToTarget(att, { type: "confusion", duration: 2 }, true);
      if (confRes) {
        appliedEffects.push(`${def.name} [${def.abilityName}] (35%) \u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48 ${att.name} ${confRes}`);
      }
    }
    if (hasStatus2(def, "bleed")) {
      const bHit = Math.round(def.baseStats.maxHp * skills_default2.statusRules.bleed.onHitDamageHpPct);
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
    if (this.options.enableAbilities && att.abilityId === "psionic_spirit_orbs") {
      const orb = att.effects.find((e) => e.type === "spirit_orb");
      if (orb) {
        if ((orb.stacks ?? 1) < 4) {
          orb.stacks = (orb.stacks ?? 1) + 1;
          appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 (${orb.stacks}/4 \u0E25\u0E39\u0E01, ATK +${orb.stacks * 5}%)`);
        }
      } else {
        att.effects.push({ type: "spirit_orb", stacks: 1, duration: 999 });
        appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 (1/4 \u0E25\u0E39\u0E01, ATK +5%)`);
      }
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
      const elemMult = getElementMultiplier(sk.element, getEffectiveElement(def), att.side, this.options.forcedElementAdvantage);
      let isCrit = Math.random() < attStats.cri / 100;
      let critMult = isCrit ? attStats.criDmg : 1;
      if (hasStatus2(def, "sleep")) {
        isCrit = true;
        critMult = attStats.criDmg * skills_default2.statusRules.sleep.wakeDmgMult;
        def.effects = def.effects.filter((e) => e.type !== "sleep");
        appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
      }
      const K = heroes_default2.statFormula.defConstantK;
      const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
      const effDef = defStats.def * (1 - pierce);
      const baseAtkStat = sk.useDefForAtk ? attStats.def : attStats.atk;
      if (sk.useDefForAtk) {
        appliedEffects.push(`\u{1F6E1}\uFE0F \u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01: \u0E43\u0E0A\u0E49\u0E04\u0E48\u0E32 DEF (${attStats.def}) \u0E04\u0E33\u0E19\u0E27\u0E13\u0E1E\u0E25\u0E31\u0E07\u0E42\u0E08\u0E21\u0E15\u0E35\u0E41\u0E17\u0E19 ATK`);
      }
      const baseDmg = Math.max(1, baseAtkStat * sk.damageMult * (K / (K + effDef)));
      let finalDmg = Math.round(baseDmg * elemMult * critMult);
      if (this.options.enableSameElementBonus && sk.element === att.element) {
        finalDmg = Math.round(finalDmg * (1 + elements_default.multipliers.sameElementDamageBonus));
      }
      if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && att.sp >= att.baseStats.maxSp * 0.5 && sk.element === "water") {
        finalDmg = Math.round(finalDmg * 1.2);
        appliedEffects.push(`Ability [${att.abilityName}] \u0E08\u0E49\u0E32\u0E27\u0E04\u0E25\u0E31\u0E48\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23 (SP\u226550%) \u0E14\u0E32\u0E40\u0E21\u0E08\u0E19\u0E49\u0E33 +20%`);
      }
      if (hasStatus2(def, "vulnerable")) {
        finalDmg = Math.round(finalDmg * (1 + skills_default2.statusRules.vulnerable.extraDmgPct));
        appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
      }
      if (hasStatus2(att, "taunt")) {
        finalDmg = Math.round(finalDmg * (1 - skills_default2.statusRules.taunt.dmgReductionPct));
        appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
      }
      if (hasStatus2(def, "elemental_ward") && sk.element !== "neutral") {
        const wardEf = def.effects.find((e) => e.type === "elemental_ward");
        const redPct = wardEf?.value ?? skills_default2.statusRules.elemental_ward?.elemDmgRedPct ?? 0.1;
        finalDmg = Math.round(finalDmg * (1 - redPct));
        appliedEffects.push(`\u{1F4A0} \u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E18\u0E32\u0E15\u0E38: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E18\u0E32\u0E15\u0E38\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
      }
      if (hasStatus2(def, "iron_fortress")) {
        const fortEf = def.effects.find((e) => e.type === "iron_fortress");
        const redPct = fortEf?.value ?? skills_default2.statusRules.iron_fortress?.dmgRedPct ?? 0.15;
        finalDmg = Math.round(finalDmg * (1 - redPct));
        appliedEffects.push(`\u{1F3F0} \u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E25\u0E47\u0E01: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
      }
      if (hasStatus2(def, "iron_body")) {
        const redPct = skills_default2.statusRules.iron_body?.finalDmgRedPct ?? 0.3;
        finalDmg = Math.round(finalDmg * (1 - redPct));
        appliedEffects.push(`\u{1F9BE} \u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
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
        if (def.abilityId === "caustic_venom_aura" && Math.random() < 0.4) {
          applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (40%) \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
        }
        if (att.abilityId === "glacial_fang_hunt" && (hasStatus2(def, "freeze") || hasStatus2(def, "ice_skin"))) {
          finalDmg = Math.round(finalDmg * 1.3);
          appliedEffects.push(`Ability [${att.abilityName}] \u0E02\u0E22\u0E35\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07/Ice Skin \u0E14\u0E32\u0E40\u0E21\u0E08 +30%`);
        }
        if (att.abilityId === "caustic_venom_aura" && hasStatus2(def, "poison")) {
          finalDmg = Math.round(finalDmg * 1.25);
          appliedEffects.push(`Ability [${att.abilityName}] \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E02\u0E22\u0E35\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 \u0E14\u0E32\u0E40\u0E21\u0E08 +25%`);
        }
        if (def.abilityId === "ancient_bulwark") {
          finalDmg = Math.round(finalDmg * 0.88);
          if (def.hp < def.baseStats.maxHp * 0.65 && !hasStatus2(def, "energy_coat")) {
            applyEffectToTarget(def, { type: "energy_coat", duration: 3 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] \u0E01\u0E32\u0E22\u0E32\u0E08\u0E34\u0E15\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
          }
        }
        if (def.abilityId === "electro_sense" && Math.random() < 0.45) {
          applyEffectToTarget(def, { type: "energy_coat", duration: 2 }, true);
          applyEffectToTarget(att, { type: "debuff_hit", value: 10, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (45%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22 \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) & \u0E25\u0E14 HIT ${att.name} 10 \u0E41\u0E15\u0E49\u0E21`);
        }
        if (def.abilityId === "nematocyst_paralysis" && Math.random() < 0.5) {
          applyEffectToTarget(att, { type: "paralysis", duration: 2 }, true);
          att.gauge = Math.max(0, att.gauge - 8);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E25\u0E1B\u0E31\u0E07\u0E2B\u0E32\u0E1E\u0E34\u0E29\u0E0A\u0E32 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29\u0E40\u0E19\u0E21\u0E32\u0E42\u0E17\u0E0B\u0E34\u0E2A\u0E15\u0E4C \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
        if (att.abilityId === "neurotoxic_stinger" && hasStatus2(def, "poison") && Math.random() < 0.65) {
          finalDmg = Math.round(finalDmg * 1.18);
          appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E1E\u0E34\u0E29\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
          if (Math.random() < 0.5) {
            applyEffectToTarget(def, { type: "paralysis", duration: 2 }, true);
            appliedEffects.push(`Ability [${att.abilityName}] \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
          }
        }
        if (att.abilityId === "nematocyst_paralysis" && Math.random() < 0.5) {
          applyEffectToTarget(def, { type: "paralysis", duration: 2 }, true);
          def.gauge = Math.max(0, def.gauge - 8);
          appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E25\u0E1B\u0E31\u0E07\u0E2B\u0E32\u0E1E\u0E34\u0E29\u0E0A\u0E32 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      this.applyDamageToTarget(def, finalDmg);
      if (this.options.enableAbilities && att.abilityId === "glacial_fang_hunt" && finalDmg > 0 && !hasStatus2(att, "stone_curse")) {
        const ls = Math.round(finalDmg * 0.12);
        att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
        appliedEffects.push(`\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +${ls} HP`);
      }
      if (this.options.enableAbilities && att.abilityId === "thorn_regrowth" && finalDmg > 0 && !hasStatus2(att, "vulnerable")) {
        const sh = Math.round(finalDmg * 0.15);
        if (sh > 0) {
          att.shield = Math.min(att.baseStats.maxHp * 0.5, att.shield + sh);
          const ex = att.effects.find((e) => e.type === "shield");
          if (ex) ex.duration = Math.max(ex.duration, 2);
          else att.effects.push({ type: "shield", duration: 2 });
          appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2B\u0E19\u0E32\u0E21\u0E1E\u0E24\u0E01\u0E29\u0E32 +${sh}`);
        }
      }
      if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && Math.random() < 0.4) {
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        appliedEffects.push(`Ability [${att.abilityName}] (40%) \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP`);
      }
      if (this.options.enableAbilities && att.abilityId === "static_discharge" && Math.random() < 0.45) {
        const boltDmg = Math.max(1, Math.round(attStats.atk * 0.3));
        this.applyDamageToTarget(def, boltDmg);
        appliedEffects.push(`\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E0B\u0E49\u0E33 \u26A1 -${boltDmg} HP`);
      }
      if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === "static_discharge") {
        att.gauge = Math.min(100, att.gauge + 25);
        appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08 +25`);
      }
      if (isCrit && this.options.enableAbilities && att.abilityId === "colossal_tremor") {
        const enemySquad = att.side === "A" ? this.squadB : this.squadA;
        const livingEnemies = this.getLivingFighters(enemySquad);
        const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
        for (const en of livingEnemies) {
          this.applyDamageToTarget(en, shockwaveDmg);
        }
        appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27 \u{1F4A5} -${shockwaveDmg} HP \u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
      }
      if (this.options.enableAbilities && att.abilityId === "tartarus_three_fangs" && def.hp > 0) {
        if (Math.random() < 0.35) {
          const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35));
          this.applyDamageToTarget(def, biteDmg);
          appliedEffects.push(`Ability [${att.abilityName}] (35%) \u0E40\u0E28\u0E35\u0E22\u0E23\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07\u0E09\u0E25\u0E32\u0E21\u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33 \u{1F4A5} -${biteDmg} HP`);
        }
        if (Math.random() < 0.3 && def.hp > 0) {
          const dispRes = applyEffectToTarget(def, { type: "dispel", count: 1 }, true);
          if (dispRes) {
            appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
          }
        }
      }
      if (this.options.enableAbilities && att.abilityId === "psionic_spirit_orbs") {
        const orb = att.effects.find((e) => e.type === "spirit_orb");
        if (orb && (orb.stacks ?? 1) >= 4 && Math.random() < 0.2) {
          att.effects = att.effects.filter((e) => e.type !== "spirit_orb");
          const enemySquad = att.side === "A" ? this.squadB : this.squadA;
          const livingEnemies = this.getLivingFighters(enemySquad);
          const burstDmg = Math.max(1, Math.round(attStats.atk * 0.65));
          for (const en of livingEnemies) {
            this.applyDamageToTarget(en, burstDmg);
            en.sp = Math.max(0, en.sp - 15);
          }
          appliedEffects.push(`Ability [${att.abilityName}] (20%) \u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1E\u0E25\u0E31\u0E07\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 4 \u0E25\u0E39\u0E01\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E30\u0E25\u0E31\u0E22 \u{1F4A5} -${burstDmg} HP & \u0E15\u0E31\u0E14 SP -15 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 (\u0E2A\u0E25\u0E32\u0E22\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E30\u0E2A\u0E21\u0E43\u0E2B\u0E21\u0E48)`);
        }
      }
      if (this.options.enableAbilities && def.abilityId === "psionic_spirit_orbs" && def.hp > 0 && Math.random() < 0.35) {
        const confRes = applyEffectToTarget(att, { type: "confusion", duration: 2 }, true);
        if (confRes) {
          appliedEffects.push(`${def.name} [${def.abilityName}] (35%) \u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48 ${att.name} ${confRes}`);
        }
      }
      if (hasStatus2(def, "bleed")) {
        const bHit = Math.round(def.baseStats.maxHp * skills_default2.statusRules.bleed.onHitDamageHpPct);
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
      if (this.options.enableAbilities && att.abilityId === "psionic_spirit_orbs") {
        const orb = att.effects.find((e) => e.type === "spirit_orb");
        if (orb) {
          if ((orb.stacks ?? 1) < 4) {
            orb.stacks = (orb.stacks ?? 1) + 1;
            appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 (${orb.stacks}/4 \u0E25\u0E39\u0E01, ATK +${orb.stacks * 5}%)`);
          }
        } else {
          att.effects.push({ type: "spirit_orb", stacks: 1, duration: 999 });
          appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 (1/4 \u0E25\u0E39\u0E01, ATK +5%)`);
        }
      }
      const effectTarget = heroMeta?.signatureEffect?.target;
      const scope = effectTarget === "all_enemies" ? "all_enemies" : effectTarget === "front_enemies" ? "front_enemies" : "single_enemy";
      const targets = scope === "all_enemies" ? enemyLiving : this.selectTargets(att, scope);
      const hitReports = [];
      for (const def of targets) {
        const elemMult = getElementMultiplier(att.element, getEffectiveElement(def), att.side, this.options.forcedElementAdvantage);
        const attStats = getEffectiveStats(att, this.options.enableAbilities);
        const defStats = getEffectiveStats(def, this.options.enableAbilities);
        let isCrit = false;
        let critMult = 1;
        if (att.id === "garuda") {
          isCrit = true;
          critMult = attStats.criDmg;
        }
        if (hasStatus2(def, "sleep")) {
          isCrit = true;
          critMult = 1.5 * skills_default2.statusRules.sleep.wakeDmgMult;
          def.effects = def.effects.filter((e) => e.type !== "sleep");
          appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
        }
        const K = heroes_default2.statFormula.defConstantK;
        const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
        let effDef = defStats.def * (1 - pierce);
        if (att.id === "nine_tailed_fox") {
          effDef *= 0.75;
          appliedEffects.push("\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 25% (Ignore DEF 25%)");
        }
        const baseDmg = Math.max(1, attStats.atk * damageMult * (K / (K + effDef)));
        let finalDmg = Math.round(baseDmg * elemMult * critMult);
        if (hasStatus2(def, "vulnerable")) {
          finalDmg = Math.round(finalDmg * (1 + skills_default2.statusRules.vulnerable.extraDmgPct));
          appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
        }
        if (hasStatus2(att, "taunt")) {
          finalDmg = Math.round(finalDmg * (1 - skills_default2.statusRules.taunt.dmgReductionPct));
          appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
        }
        if (hasStatus2(def, "elemental_ward") && att.element !== "neutral") {
          const wardEf = def.effects.find((e) => e.type === "elemental_ward");
          const redPct = wardEf?.value ?? skills_default2.statusRules.elemental_ward?.elemDmgRedPct ?? 0.1;
          finalDmg = Math.round(finalDmg * (1 - redPct));
          appliedEffects.push(`\u{1F4A0} \u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E18\u0E32\u0E15\u0E38: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E18\u0E32\u0E15\u0E38\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
        }
        if (hasStatus2(def, "iron_fortress")) {
          const fortEf = def.effects.find((e) => e.type === "iron_fortress");
          const redPct = fortEf?.value ?? skills_default2.statusRules.iron_fortress?.dmgRedPct ?? 0.15;
          finalDmg = Math.round(finalDmg * (1 - redPct));
          appliedEffects.push(`\u{1F3F0} \u0E04\u0E48\u0E32\u0E22\u0E01\u0E25\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E40\u0E2B\u0E25\u0E47\u0E01: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
        }
        if (hasStatus2(def, "iron_body")) {
          const redPct = skills_default2.statusRules.iron_body?.finalDmgRedPct ?? 0.3;
          finalDmg = Math.round(finalDmg * (1 - redPct));
          appliedEffects.push(`\u{1F9BE} \u0E01\u0E32\u0E22\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01: \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2A\u0E38\u0E14\u0E17\u0E49\u0E32\u0E22\u0E25\u0E07 ${Math.round(redPct * 100)}%`);
        }
        if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && att.sp >= att.baseStats.maxSp * 0.5 && att.element === "water") {
          finalDmg = Math.round(finalDmg * 1.2);
          appliedEffects.push(`Ability [${att.abilityName}] \u0E08\u0E49\u0E32\u0E27\u0E04\u0E25\u0E31\u0E48\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23 (SP\u226550%) \u0E14\u0E32\u0E40\u0E21\u0E08\u0E19\u0E49\u0E33 +20%`);
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
          if (def.abilityId === "caustic_venom_aura" && Math.random() < 0.4) {
            applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] (40%) \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
          }
          if (att.abilityId === "glacial_fang_hunt" && (hasStatus2(def, "freeze") || hasStatus2(def, "ice_skin"))) {
            finalDmg = Math.round(finalDmg * 1.3);
            appliedEffects.push(`Ability [${att.abilityName}] \u0E02\u0E22\u0E35\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07/Ice Skin \u0E14\u0E32\u0E40\u0E21\u0E08 +30%`);
          }
          if (att.abilityId === "caustic_venom_aura" && hasStatus2(def, "poison")) {
            finalDmg = Math.round(finalDmg * 1.25);
            appliedEffects.push(`Ability [${att.abilityName}] \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E02\u0E22\u0E35\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 \u0E14\u0E32\u0E40\u0E21\u0E08 +25%`);
          }
          if (def.abilityId === "ancient_bulwark") {
            finalDmg = Math.round(finalDmg * 0.88);
            if (def.hp < def.baseStats.maxHp * 0.65 && !hasStatus2(def, "energy_coat")) {
              applyEffectToTarget(def, { type: "energy_coat", duration: 3 }, true);
              appliedEffects.push(`${def.name} [${def.abilityName}] \u0E01\u0E32\u0E22\u0E32\u0E08\u0E34\u0E15\u0E19\u0E34\u0E23\u0E31\u0E19\u0E14\u0E23\u0E4C \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
            }
          }
          if (def.abilityId === "electro_sense" && Math.random() < 0.45) {
            applyEffectToTarget(def, { type: "energy_coat", duration: 2 }, true);
            applyEffectToTarget(att, { type: "debuff_hit", value: 10, duration: 2 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] (45%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22 \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E25\u0E31\u0E07\u0E07\u0E32\u0E19 (Energy Coat 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) & \u0E25\u0E14 HIT ${att.name} 10 \u0E41\u0E15\u0E49\u0E21`);
          }
          if (def.abilityId === "nematocyst_paralysis" && Math.random() < 0.5) {
            applyEffectToTarget(att, { type: "paralysis", duration: 2 }, true);
            att.gauge = Math.max(0, att.gauge - 8);
            appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E25\u0E1B\u0E31\u0E07\u0E2B\u0E32\u0E1E\u0E34\u0E29\u0E0A\u0E32 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29\u0E40\u0E19\u0E21\u0E32\u0E42\u0E17\u0E0B\u0E34\u0E2A\u0E15\u0E4C \u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
          }
          if (att.abilityId === "neurotoxic_stinger" && hasStatus2(def, "poison") && Math.random() < 0.65) {
            finalDmg = Math.round(finalDmg * 1.18);
            appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E1E\u0E34\u0E29\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
            if (Math.random() < 0.5) {
              applyEffectToTarget(def, { type: "paralysis", duration: 2 }, true);
              appliedEffects.push(`Ability [${att.abilityName}] \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
            }
          }
          if (att.abilityId === "nematocyst_paralysis" && Math.random() < 0.5) {
            applyEffectToTarget(def, { type: "paralysis", duration: 2 }, true);
            def.gauge = Math.max(0, def.gauge - 8);
            appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E31\u0E25\u0E1B\u0E31\u0E07\u0E2B\u0E32\u0E1E\u0E34\u0E29\u0E0A\u0E32 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
          }
        }
        this.applyDamageToTarget(def, finalDmg);
        if (this.options.enableAbilities && att.abilityId === "glacial_fang_hunt" && finalDmg > 0 && !hasStatus2(att, "stone_curse")) {
          const ls = Math.round(finalDmg * 0.12);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
          appliedEffects.push(`\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +${ls} HP`);
        }
        if (att.id === "verdant_hydra" && finalDmg > 0 && !hasStatus2(att, "stone_curse")) {
          const drain = Math.round(finalDmg * 0.25);
          att.hp = Math.min(att.baseStats.maxHp, att.hp + drain);
          appliedEffects.push(`\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23\u0E01\u0E25\u0E37\u0E19\u0E0A\u0E35\u0E1E: \u0E2A\u0E39\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E14 +${drain} HP`);
        }
        if (this.options.enableAbilities && att.abilityId === "thorn_regrowth" && finalDmg > 0 && !hasStatus2(att, "vulnerable")) {
          const sh = Math.round(finalDmg * 0.15);
          if (sh > 0) {
            att.shield = Math.min(att.baseStats.maxHp * 0.5, att.shield + sh);
            const ex = att.effects.find((e) => e.type === "shield");
            if (ex) ex.duration = Math.max(ex.duration, 2);
            else att.effects.push({ type: "shield", duration: 2 });
            appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2B\u0E19\u0E32\u0E21\u0E1E\u0E24\u0E01\u0E29\u0E32 +${sh}`);
          }
        }
        if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && Math.random() < 0.4) {
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
          appliedEffects.push(`Ability [${att.abilityName}] (40%) \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP`);
        }
        if (this.options.enableAbilities && att.abilityId === "static_discharge" && Math.random() < 0.45) {
          const boltDmg = Math.max(1, Math.round(attStats.atk * 0.3));
          this.applyDamageToTarget(def, boltDmg);
          appliedEffects.push(`\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E0B\u0E49\u0E33 \u26A1 -${boltDmg} HP`);
        }
        if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === "static_discharge") {
          att.gauge = Math.min(100, att.gauge + 25);
          appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08 +25`);
        }
        if (isCrit && this.options.enableAbilities && att.abilityId === "colossal_tremor") {
          const enemySquad = att.side === "A" ? this.squadB : this.squadA;
          const livingEnemies = this.getLivingFighters(enemySquad);
          const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
          for (const en of livingEnemies) {
            this.applyDamageToTarget(en, shockwaveDmg);
          }
          appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27 \u{1F4A5} -${shockwaveDmg} HP \u0E43\u0E2A\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
        }
        if (this.options.enableAbilities && att.abilityId === "tartarus_three_fangs" && def.hp > 0) {
          if (Math.random() < 0.35) {
            const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35));
            this.applyDamageToTarget(def, biteDmg);
            appliedEffects.push(`Ability [${att.abilityName}] (35%) \u0E40\u0E28\u0E35\u0E22\u0E23\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07\u0E09\u0E25\u0E32\u0E21\u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33 \u{1F4A5} -${biteDmg} HP`);
          }
          if (Math.random() < 0.3 && def.hp > 0) {
            const dispRes = applyEffectToTarget(def, { type: "dispel", count: 1 }, true);
            if (dispRes) {
              appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
            }
          }
        }
        if (this.options.enableAbilities && att.abilityId === "psionic_spirit_orbs") {
          const orb = att.effects.find((e) => e.type === "spirit_orb");
          if (orb && (orb.stacks ?? 1) >= 4 && Math.random() < 0.2) {
            att.effects = att.effects.filter((e) => e.type !== "spirit_orb");
            const enemySquad = att.side === "A" ? this.squadB : this.squadA;
            const livingEnemies = this.getLivingFighters(enemySquad);
            const burstDmg = Math.max(1, Math.round(attStats.atk * 0.65));
            for (const en of livingEnemies) {
              this.applyDamageToTarget(en, burstDmg);
              en.sp = Math.max(0, en.sp - 15);
            }
            appliedEffects.push(`Ability [${att.abilityName}] (20%) \u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14\u0E1E\u0E25\u0E31\u0E07\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 4 \u0E25\u0E39\u0E01\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E30\u0E25\u0E31\u0E22 \u{1F4A5} -${burstDmg} HP & \u0E15\u0E31\u0E14 SP -15 \u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 (\u0E2A\u0E25\u0E32\u0E22\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E30\u0E2A\u0E21\u0E43\u0E2B\u0E21\u0E48)`);
          }
        }
        if (this.options.enableAbilities && def.abilityId === "psionic_spirit_orbs" && def.hp > 0 && Math.random() < 0.35) {
          const confRes = applyEffectToTarget(att, { type: "confusion", duration: 2 }, true);
          if (confRes) {
            appliedEffects.push(`${def.name} [${def.abilityName}] (35%) \u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48 ${att.name} ${confRes}`);
          }
        }
        if (hasStatus2(def, "bleed")) {
          const bHit = Math.round(def.baseStats.maxHp * skills_default2.statusRules.bleed.onHitDamageHpPct);
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
        isCrit: hitReports.some((r) => r.includes("[CRIT!]")),
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
        if (target.shield <= 0) {
          target.shield = 0;
          target.effects = target.effects.filter((e) => e.type !== "shield" && e.type !== "golden_bell_shield");
        }
        return;
      }
      damage -= target.shield;
      target.shield = 0;
      target.effects = target.effects.filter((e) => e.type !== "shield" && e.type !== "golden_bell_shield");
    }
    if (hasStatus2(target, "energy_coat") && damage > 0 && target.sp > 0) {
      const coatEf = target.effects.find((e) => e.type === "energy_coat");
      const coatRatio = coatEf?.value ?? skills_default2.statusRules.energy_coat?.damageToSpPct ?? 0.4;
      const spDmgMax = Math.round(damage * coatRatio);
      const spAbsorbed = Math.min(target.sp, spDmgMax);
      target.sp = Math.max(0, target.sp - spAbsorbed);
      damage -= spAbsorbed;
    }
    target.hp = Math.max(0, target.hp - damage);
    if (target.hp <= 0 && this.options.enableAbilities && target.abilityId === "rebirth_ashes" && !target.reviveUsed) {
      target.reviveUsed = true;
      const isFullHp = Math.random() < 0.8;
      const hpPct = isFullHp ? 1 : 0.6;
      target.hp = Math.round(target.baseStats.maxHp * hpPct);
      target.sp = Math.max(target.sp, Math.round(target.baseStats.maxSp * 0.5));
      target.effects = target.effects.filter((e) => e.type.startsWith("buff_") || e.type === "shield" || e.type === "fire_skin");
      if (!target.effects.some((e) => e.type === "fire_skin")) target.effects.push({ type: "fire_skin", duration: 9999 });
      const hpDesc = isFullHp ? "\u0E40\u0E15\u0E47\u0E21\u0E2B\u0E25\u0E2D\u0E14 (100%)" : "60%";
      this.recordEvent({
        turn: this.round,
        actorSide: target.side,
        actorName: target.name,
        targetName: target.name,
        actionType: "ability",
        actionName: target.abilityName,
        damage: 0,
        healed: Math.round(target.hp),
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [`\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E HP ${hpDesc}`],
        message: `[\u0E23\u0E2D\u0E1A ${this.round}] \u{1F525} ${target.name} \u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25 Ability [${target.abilityName}] \u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E\u0E08\u0E32\u0E01\u0E01\u0E2D\u0E07\u0E40\u0E16\u0E49\u0E32\u0E16\u0E48\u0E32\u0E19 100% \u0E1E\u0E23\u0E49\u0E2D\u0E21 HP ${Math.round(target.hp)} (${hpDesc})!`
      });
    }
  }
  tickStatuses(f) {
    for (const ef of f.effects) {
      if (ef.type === "curse" || ef.type === "spirit_orb") continue;
      if (ef.duration > 0) ef.duration--;
    }
    f.effects = f.effects.filter((ef) => ef.type === "curse" || ef.type === "spirit_orb" || ef.duration > 0);
    if (!hasStatus2(f, "shield") && !hasStatus2(f, "golden_bell_shield")) f.shield = 0;
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

// src/sim/test_save_manager.ts
function assert(condition, msg) {
  if (!condition) {
    console.error(`\u274C FAILED: ${msg}`);
    process.exit(1);
  }
  console.log(`  \u2713 ${msg}`);
}
console.log("======================================================================");
console.log("  \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E23\u0E30\u0E1A\u0E1A SaveManager, \u0E04\u0E25\u0E31\u0E07\u0E44\u0E2D\u0E40\u0E17\u0E21 \u0E41\u0E25\u0E30 Progression (Phase 2 - Task 2.1)  ");
console.log("======================================================================\n");
console.log("\u3010 1. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A Starter Kit \u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E43\u0E2B\u0E21\u0E48 \u3011");
var starter = saveManager.reset();
assert(starter.playerLevel === 1, "\u0E40\u0E25\u0E40\u0E27\u0E25\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E04\u0E37\u0E2D 1");
assert(starter.inventory.gold === 1500, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 1,500 Gold");
assert(starter.inventory.crystals === 150, "\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E31\u0E25\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 150 Crystals");
assert(starter.inventory.food === 800, "\u0E40\u0E2A\u0E1A\u0E35\u0E22\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 800 Food");
assert(starter.inventory.normalEggs === 2, "\u0E21\u0E35\u0E44\u0E02\u0E48\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 2 \u0E1F\u0E2D\u0E07");
assert(starter.inventory.goldEggs === 1, "\u0E21\u0E35\u0E44\u0E02\u0E48\u0E17\u0E2D\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 1 \u0E1F\u0E2D\u0E07");
assert(Object.keys(starter.ownedHeroes).length === 3, "\u0E21\u0E35\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 3 \u0E15\u0E31\u0E27 (\u0E44\u0E01\u0E48, \u0E41\u0E21\u0E27, \u0E04\u0E27\u0E32\u0E22)");
assert(Boolean(starter.ownedHeroes["rooster"]), "\u0E21\u0E35 \u0E44\u0E01\u0E48 (rooster - Fire Striker)");
assert(Boolean(starter.ownedHeroes["cat"]), "\u0E21\u0E35 \u0E41\u0E21\u0E27 (cat - Wind Assassin)");
assert(Boolean(starter.ownedHeroes["buffalo"]), "\u0E21\u0E35 \u0E04\u0E27\u0E32\u0E22 (buffalo - Earth Tank)");
assert(starter.ownedHeroes["rooster"].customSkills[0] === "fire_s", "\u0E44\u0E01\u0E48\u0E21\u0E35\u0E2A\u0E01\u0E34\u0E25\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E18\u0E32\u0E15\u0E38 fire_s \u0E23\u0E30\u0E14\u0E31\u0E1A S \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
assert(starter.ownedHeroes["cat"].customSkills[0] === "wind_s", "\u0E41\u0E21\u0E27\u0E21\u0E35\u0E2A\u0E01\u0E34\u0E25\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E18\u0E32\u0E15\u0E38 wind_s \u0E23\u0E30\u0E14\u0E31\u0E1A S \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
assert(starter.ownedHeroes["buffalo"].customSkills[0] === "earth_s", "\u0E04\u0E27\u0E32\u0E22\u0E21\u0E35\u0E2A\u0E01\u0E34\u0E25\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E18\u0E32\u0E15\u0E38 earth_s \u0E23\u0E30\u0E14\u0E31\u0E1A S \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
assert(starter.unlockedSkills.length >= 16, "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E01\u0E34\u0E25\u0E41\u0E23\u0E01 (Tier S) \u0E02\u0E2D\u0E07\u0E17\u0E31\u0E49\u0E07 16 \u0E2A\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19");
assert(starter.unlockedStages.includes("stage_1_1"), "\u0E14\u0E48\u0E32\u0E19\u0E41\u0E23\u0E01 stage_1_1 \u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27");
console.log("\n\u3010 2. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E25\u0E30\u0E2B\u0E31\u0E01\u0E25\u0E1A\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23 \u3011");
saveManager.addGold(500);
assert(saveManager.getData().inventory.gold === 2e3, "\u0E40\u0E1E\u0E34\u0E48\u0E21 Gold +500 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E23\u0E27\u0E21 2,000)");
saveManager.addFood(200);
assert(saveManager.getData().inventory.food === 1e3, "\u0E40\u0E1E\u0E34\u0E48\u0E21 Food +200 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E23\u0E27\u0E21 1,000)");
var canConsume = saveManager.consumeResources({ gold: 300, food: 200 });
assert(canConsume === true, "\u0E2B\u0E31\u0E01\u0E25\u0E1A Gold 300 \u0E41\u0E25\u0E30 Food 200 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
assert(saveManager.getData().inventory.gold === 1700, "Gold \u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D 1,700");
assert(saveManager.getData().inventory.food === 800, "Food \u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D 800");
var failConsume = saveManager.consumeResources({ crystals: 99999 });
assert(failConsume === false, "\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2B\u0E31\u0E01\u0E25\u0E1A\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E40\u0E01\u0E34\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48");
assert(saveManager.getData().inventory.crystals === 150, "\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E31\u0E25\u0E04\u0E07\u0E40\u0E14\u0E34\u0E21 \u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E2B\u0E31\u0E01\u0E25\u0E1A\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E1E\u0E2D");
console.log("\n\u3010 3. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E40\u0E25\u0E40\u0E27\u0E25\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E1B\u0E14\u0E32\u0E27 (Level & Star Awakening) \u3011");
var catBefore = saveManager.getData().ownedHeroes["cat"];
assert(catBefore.level === 1, "\u0E41\u0E21\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48 Level 1");
var lvlCost = getLevelUpCost(1);
assert(lvlCost.food === 80 && lvlCost.gold === 40, "\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22\u0E2D\u0E31\u0E1B\u0E08\u0E32\u0E01 Lv.1 -> Lv.2 \u0E04\u0E37\u0E2D 80 Food, 40 Gold");
var lvlRes = saveManager.levelUpHero("cat");
assert(lvlRes.success === true && lvlRes.newLevel === 2, "\u0E2D\u0E31\u0E1B\u0E40\u0E25\u0E40\u0E27\u0E25\u0E41\u0E21\u0E27\u0E40\u0E1B\u0E47\u0E19 Level 2 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
assert(saveManager.getData().ownedHeroes["cat"].level === 2, "\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E43\u0E19\u0E40\u0E0B\u0E1F\u0E02\u0E2D\u0E07\u0E41\u0E21\u0E27\u0E40\u0E1B\u0E47\u0E19 Level 2");
var statsLv1 = computeHeroStats("cat", 1, 1);
var statsLv2 = computeHeroStats("cat", 2, 1);
assert(statsLv2.maxHp > statsLv1.maxHp, `HP \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E15\u0E32\u0E21\u0E40\u0E25\u0E40\u0E27\u0E25: Lv.1 (${Math.round(statsLv1.maxHp)}) -> Lv.2 (${Math.round(statsLv2.maxHp)})`);
assert(statsLv2.atk > statsLv1.atk, `ATK \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E15\u0E32\u0E21\u0E40\u0E25\u0E40\u0E27\u0E25: Lv.1 (${Math.round(statsLv1.atk)}) -> Lv.2 (${Math.round(statsLv2.atk)})`);
saveManager.addShards("cat", 25);
assert((saveManager.getData().inventory.shards["cat"] || 0) === 25, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E28\u0E29\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E41\u0E21\u0E27 +25 \u0E0A\u0E34\u0E49\u0E19");
var starRes = saveManager.starUpHero("cat");
assert(starRes.success === true && starRes.newStars === 2, "\u0E2D\u0E31\u0E1B\u0E14\u0E32\u0E27\u0E41\u0E21\u0E27\u0E40\u0E1B\u0E47\u0E19 2 \u0E14\u0E32\u0E27 (\u26052) \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E43\u0E0A\u0E49 20 \u0E40\u0E28\u0E29\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13)");
assert(saveManager.getData().inventory.shards["cat"] === 5, "\u0E40\u0E28\u0E29\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D 5 \u0E0A\u0E34\u0E49\u0E19");
var statsStar2 = computeHeroStats("cat", 2, 2);
assert(statsStar2.maxHp > statsLv2.maxHp, `HP \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E08\u0E32\u0E01\u0E42\u0E1A\u0E19\u0E31\u0E2A\u0E14\u0E32\u0E27 \u26052: ${Math.round(statsLv2.maxHp)} -> ${Math.round(statsStar2.maxHp)} (+5%)`);
console.log("\n\u3010 4. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E15\u0E39\u0E49\u0E1F\u0E31\u0E01\u0E44\u0E02\u0E48\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E38\u0E48\u0E21\u0E2E\u0E35\u0E42\u0E23\u0E48 \u3011");
var placeRes = saveManager.placeEgg(0, "normal");
assert(placeRes.success === true, "\u0E19\u0E33\u0E44\u0E02\u0E48\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32\u0E40\u0E02\u0E49\u0E32\u0E0A\u0E48\u0E2D\u0E07\u0E1F\u0E31\u0E01 0 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
assert(saveManager.getData().inventory.normalEggs === 1, "\u0E44\u0E02\u0E48\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32\u0E43\u0E19\u0E01\u0E23\u0E30\u0E40\u0E1B\u0E4B\u0E32\u0E25\u0E14\u0E25\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D 1 \u0E1F\u0E2D\u0E07");
assert(saveManager.isEggReady(0) === false, "\u0E44\u0E02\u0E48\u0E40\u0E1E\u0E34\u0E48\u0E07\u0E27\u0E32\u0E07\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1F\u0E31\u0E01\u0E17\u0E31\u0E19\u0E17\u0E35");
saveManager.applyWarmth(0, 2);
assert(saveManager.getData().inventory.warmth === 28, "\u0E43\u0E0A\u0E49\u0E1E\u0E25\u0E31\u0E07\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19 2 \u0E41\u0E15\u0E49\u0E21 (\u0E25\u0E14\u0E40\u0E27\u0E25\u0E32 20 \u0E19\u0E32\u0E17\u0E35)");
saveManager.instantHatchSlot(0);
assert(saveManager.isEggReady(0) === true, "\u0E44\u0E02\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1F\u0E31\u0E01\u0E41\u0E25\u0E49\u0E27\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E23\u0E48\u0E07\u0E40\u0E27\u0E25\u0E32");
var hatchRes = saveManager.hatchEgg(0);
assert(hatchRes.success === true && Boolean(hatchRes.hero), `\u0E01\u0E30\u0E40\u0E17\u0E32\u0E30\u0E44\u0E02\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48: [${hatchRes.hero?.heroId}] (\u0E15\u0E31\u0E27\u0E43\u0E2B\u0E21\u0E48: ${hatchRes.isNew})`);
assert(Boolean(hatchRes.hero && hatchRes.hero.customSkills.length === 1 && hatchRes.hero.customSkills[0].endsWith("_s")), `\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E17\u0E35\u0E48\u0E1F\u0E31\u0E01\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E43\u0E2B\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E01\u0E34\u0E25\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E18\u0E32\u0E15\u0E38 1 \u0E2A\u0E01\u0E34\u0E25\u0E23\u0E30\u0E14\u0E31\u0E1A S (${hatchRes.hero?.customSkills[0]})`);
assert(saveManager.getData().incubatorSlots[0] === null, "\u0E0A\u0E48\u0E2D\u0E07\u0E1F\u0E31\u0E01 0 \u0E27\u0E48\u0E32\u0E07\u0E25\u0E07\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E44\u0E02\u0E48\u0E43\u0E1A\u0E16\u0E31\u0E14\u0E44\u0E1B");
console.log("\n\u3010 5. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E1A Combat 1v1 \u0E41\u0E25\u0E30 2v2 \u3011");
var fighterLv2 = createFighter("cat", void 0, 2, 2);
assert(fighterLv2.baseStats.maxHp === statsStar2.maxHp, "createFighter \u0E04\u0E33\u0E19\u0E27\u0E13\u0E2A\u0E40\u0E15\u0E15\u0E31\u0E2A\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A Progression");
var teamFighter = createTeamFighter("cat", "A", 0, { row: "mid", col: 1 }, void 0, 2, 2);
assert(teamFighter.pos.row === "mid", "createTeamFighter \u0E27\u0E32\u0E07\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07");
assert(teamFighter.roleAffinityActive === true, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E42\u0E1A\u0E19\u0E31\u0E2A Role Affinity \u0E43\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19 3x3");
var session = new TeamBattleSession(["cat", "rooster"], ["buffalo", "snail"], {
  teamALevels: [2, 1],
  teamAStars: [2, 1],
  teamBLevels: [1, 1],
  teamBStars: [1, 1]
});
var turns = 0;
while (!session.winner && turns < 20) {
  session.stepRound();
  turns++;
}
assert(Boolean(session.winner), `\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49 2v2 \u0E14\u0E49\u0E27\u0E22\u0E22\u0E39\u0E19\u0E34\u0E15\u0E17\u0E35\u0E48\u0E21\u0E35 Progression \u0E08\u0E1A\u0E25\u0E07\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E1C\u0E39\u0E49\u0E0A\u0E19\u0E30: ${session.winner}, \u0E43\u0E19\u0E23\u0E2D\u0E1A\u0E17\u0E35\u0E48: ${session.round})`);
console.log("\n\u3010 6. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1C\u0E25\u0E14\u0E48\u0E32\u0E19\u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22 (Campaign Clear) \u3011");
saveManager.recordStageClear("stage_1_1", 3, {
  gold: 200,
  food: 150,
  crystals: 20,
  egg: "normal",
  unlockedNextStageId: "stage_1_2"
});
var stageRecord = saveManager.getData().clearedStages["stage_1_1"];
assert(stageRecord && stageRecord.stars === 3, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1C\u0E48\u0E32\u0E19\u0E14\u0E48\u0E32\u0E19 stage_1_1 \u0E44\u0E14\u0E49 3 \u0E14\u0E32\u0E27");
assert(saveManager.getData().unlockedStages.includes("stage_1_2"), "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E14\u0E48\u0E32\u0E19 stage_1_2 \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27");
assert(saveManager.getData().inventory.normalEggs === 2, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E44\u0E02\u0E48\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21 +1 \u0E1F\u0E2D\u0E07\u0E40\u0E02\u0E49\u0E32\u0E01\u0E23\u0E30\u0E40\u0E1B\u0E4B\u0E32");
console.log("\n======================================================================");
console.log("\u{1F389} \u0E17\u0E38\u0E01\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E1A SaveManager (Phase 2 - Task 2.1) \u0E1C\u0E48\u0E32\u0E19\u0E09\u0E25\u0E38\u0E22 100%!");
console.log("======================================================================\n");
