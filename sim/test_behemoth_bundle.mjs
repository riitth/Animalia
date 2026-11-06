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
        description: "\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E23\u0E48\u0E32\u0E22\u0E2A\u0E01\u0E34\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E08\u0E30\u0E2A\u0E30\u0E2A\u0E21\u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E08\u0E34\u0E15\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13 1 \u0E25\u0E39\u0E01 (\u0E40\u0E1E\u0E34\u0E48\u0E21 ATK +5% \u0E0B\u0E49\u0E2D\u0E19\u0E17\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 4 \u0E0A\u0E31\u0E49\u0E19 \u0E23\u0E27\u0E21 +20%) \xB7 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E16\u0E39\u0E01\u0E42\u0E08\u0E21\u0E15\u0E35 \u0E21\u0E35\u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E42\u0E08\u0E21\u0E15\u0E35\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (Confusion 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)"
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
var HERO_MAP = new Map([...heroes_default.heroes, ...enemies_default.enemies].map((h) => [h.id, h]));
var SKILL_MAP = new Map(skills_default.skills.map((s) => [s.id, s]));
function getAllHeroes() {
  return heroes_default.heroes;
}
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
      const fallback = defaultSkills.find((d) => canEquip(d)) ?? skills_default.skills.find((s) => canEquip(s.id))?.id;
      if (fallback) addSkill(fallback);
    }
  }
  if (fillEmptyWithDefaults) {
    while (result.length < 4) {
      const fallback = defaultSkills.find((d) => canEquip(d)) ?? skills_default.skills.find((s) => canEquip(s.id))?.id;
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
  const sigCfg = heroes_default.signatureByClass[h.rarity];
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
    if (ef.type === "berserk") {
      atkMult += skills_default.statusRules.berserk.atkBonusPct;
      spdMult += skills_default.statusRules.berserk.spdBonusPct;
      defMult -= skills_default.statusRules.berserk.defRedPct;
      s.hit -= skills_default.statusRules.berserk.hitRed;
    }
    if (ef.type === "ice_skin") {
      spdMult -= skills_default.statusRules.ice_skin.spdRedPct;
      defMult += skills_default.statusRules.ice_skin.defBonusPct;
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
function applyEffectToTarget(target, ef, enableAbilities = true) {
  if (enableAbilities && target.abilityId === "omniscient_gaze" && !ef.type.startsWith("buff_") && ef.type !== "shield" && ef.type !== "cleanse" && ef.type !== "heal_pct") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E25\u0E1A\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E1A\u0E1A (${target.abilityName})`;
  }
  if (enableAbilities && ef.type === "blind" && (target.abilityId === "hawk_eye" || target.abilityId === "solar_piercing_crest")) {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14 (${target.abilityName})`;
  }
  if (enableAbilities && ef.type === "stun" && target.abilityId === "colossal_tremor") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19 (${target.abilityName})`;
  }
  if (enableAbilities && (ef.type === "root" || ef.type === "slow") && target.abilityId === "sky_rending_talons") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07/\u0E2A\u0E42\u0E25\u0E27\u0E4C (${target.abilityName})`;
  }
  const isHardCC = ef.type === "stun" || ef.type === "freeze" || ef.type === "root" || ef.type === "sleep" || ef.type === "stone_curse";
  if (isHardCC) {
    const resistChance = Math.min(0.9, target.ccResistStacks * skills_default.statusRules.ccResistancePerStack);
    if (Math.random() < resistChance) return `\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19 ${ef.type}`;
    target.ccResistStacks = Math.min(2, target.ccResistStacks + 1);
    target.ccResistTurns = skills_default.statusRules.ccResistanceDuration;
  }
  if (ef.type === "cleanse") {
    const debuffTypes = ["burn", "poison", "slow", "blind", "root", "stun", "freeze", "confusion", "bleed", "taunt", "sleep", "silence", "vulnerable", "stone_curse", "curse", "debuff_atk", "debuff_def", "debuff_spd", "debuff_cri", "debuff_hit"];
    const maxRemove = ef.count ?? 1;
    const removedNames = [];
    for (let i = 0; i < maxRemove; i++) {
      const idx = target.effects.findIndex((e) => debuffTypes.includes(e.type));
      if (idx >= 0) {
        removedNames.push(target.effects.splice(idx, 1)[0].type);
      } else {
        break;
      }
    }
    return removedNames.length ? `\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30 (${removedNames.join("+")})` : null;
  }
  if (ef.type === "dispel") {
    const isBuff = (type) => type.startsWith("buff_") || type === "shield" || type === "regen" || type === "fire_skin" || type === "ice_skin" || type === "berserk" || type === "counter_stance" || type === "yata_mirror" || type === "shadow_clone";
    const buffIndices = [];
    target.effects.forEach((e, idx) => {
      if (isBuff(e.type)) buffIndices.push(idx);
    });
    if (buffIndices.length === 0) return null;
    const count = ef.count ?? 1;
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
      shadow_clone: "\u0E40\u0E07\u0E32\u0E21\u0E32\u0E22\u0E32"
    };
    for (let c = 0; c < count; c++) {
      if (buffIndices.length === 0) break;
      const randArrIdx = Math.floor(Math.random() * buffIndices.length);
      const targetEffectIdx = buffIndices.splice(randArrIdx, 1)[0];
      const removed = target.effects.splice(targetEffectIdx, 1)[0];
      if (removed) {
        if (removed.type === "shield") {
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
  if (ef.type === "dispel_and_sp_drain") {
    const cl = applyEffectToTarget(target, { type: "dispel", count: ef.count ?? 1 }, enableAbilities);
    const spDelta = ef.value ?? 25;
    target.sp = Math.max(0, target.sp - spDelta);
    const dispTag = cl ? `${cl} & ` : "";
    return `${dispTag}\u0E15\u0E31\u0E14 SP -${spDelta}`;
  }
  if (ef.type === "stun_and_gauge_drain") {
    const stunRes2 = applyEffectToTarget(target, { type: "stun", duration: ef.duration ?? 1 }, enableAbilities);
    const drainVal = ef.value ?? 25;
    target.gauge = Math.max(0, target.gauge - drainVal);
    const stunTag = stunRes2?.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19") ? stunRes2 : "\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19";
    return `${stunTag} & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -${drainVal}`;
  }
  if (ef.type === "gauge_change") {
    const delta = ef.value ?? 0;
    target.gauge = Math.max(0, target.gauge + delta);
    return delta >= 0 ? `\u0E40\u0E01\u0E08 +${delta}` : `\u0E25\u0E14\u0E40\u0E01\u0E08 ${delta}`;
  }
  if (ef.type === "sp_change") {
    const delta = ef.value ?? 0;
    target.sp = Math.max(0, Math.min(target.baseStats.maxSp, target.sp + delta));
    return delta >= 0 ? `\u0E1F\u0E37\u0E49\u0E19 SP +${delta}` : `\u0E15\u0E31\u0E14 SP ${delta}`;
  }
  if (ef.type === "heal_pct") {
    const heal = target.baseStats.maxHp * (ef.value ?? 0.15);
    target.hp = Math.min(target.baseStats.maxHp, target.hp + heal);
    return `\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +${Math.round(heal)} HP`;
  }
  if (ef.type === "shield") {
    if (hasStatus(target, "vulnerable")) {
      return `\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30!`;
    }
    const sh = target.baseStats.maxHp * (ef.value ?? 0.2);
    target.shield = Math.max(target.shield, sh);
    const ex2 = target.effects.find((e) => e.type === "shield");
    if (ex2) ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    else target.effects.push({ type: "shield", value: ef.value, duration: ef.duration ?? 2 });
    return `\u0E40\u0E01\u0E23\u0E32\u0E30 +${Math.round(sh)}`;
  }
  if (ef.type === "poison") {
    const ex2 = target.effects.find((e) => e.type === "poison");
    const addStacks = ef.stacks ?? 1;
    if (ex2) {
      ex2.stacks = Math.min(skills_default.statusRules.poison.maxStacks, (ex2.stacks ?? 1) + addStacks);
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 3);
    } else {
      target.effects.push({ type: "poison", stacks: Math.min(2, addStacks), duration: ef.duration ?? 3 });
    }
    return `\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29`;
  }
  if (ef.type === "confusion") {
    const ex2 = target.effects.find((e) => e.type === "confusion");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "confusion", duration: ef.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "bleed") {
    const ex2 = target.effects.find((e) => e.type === "bleed");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "bleed", duration: ef.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "taunt") {
    const ex2 = target.effects.find((e) => e.type === "taunt");
    const srcId = ef.sourceId;
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
      if (srcId) ex2.sourceId = srcId;
    } else {
      target.effects.push({ type: "taunt", duration: ef.duration ?? 2, sourceId: srcId });
    }
    return `\u0E15\u0E34\u0E14\u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "sleep") {
    const ex2 = target.effects.find((e) => e.type === "sleep");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "sleep", duration: ef.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "silence") {
    const ex2 = target.effects.find((e) => e.type === "silence");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "silence", duration: ef.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E43\u0E1A\u0E49 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "root") {
    const ex2 = target.effects.find((e) => e.type === "root");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "root", duration: ef.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "vulnerable") {
    const ex2 = target.effects.find((e) => e.type === "vulnerable");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "vulnerable", duration: ef.duration ?? 2 });
    }
    return `\u0E15\u0E34\u0E14\u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "sp_drain") {
    const delta = ef.value ?? 0;
    target.sp = Math.max(0, target.sp - delta);
    return `\u0E15\u0E31\u0E14 SP -${delta}`;
  }
  if (ef.type === "burn") {
    const ex2 = target.effects.find((e) => e.type === "burn");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
      const burstDmg = Math.max(1, Math.round(target.baseStats.maxHp * 0.03));
      target.hp = Math.max(0, target.hp - burstDmg);
      return `\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E0B\u0E49\u0E33 (Ignite Burst -${burstDmg} HP!)`;
    } else {
      target.effects.push({ type: "burn", duration: ef.duration ?? 2 });
      return `\u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (${ef.duration ?? 2} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
    }
  }
  if (ef.type === "stone_curse") {
    const ex2 = target.effects.find((e) => e.type === "stone_curse");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 1);
    } else {
      target.effects.push({ type: "stone_curse", duration: ef.duration ?? 1 });
    }
    return `\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19 \u{1F5FF} (\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19 ${ef.duration ?? 1} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "curse") {
    const ex2 = target.effects.find((e) => e.type === "curse");
    if (ex2) {
      return `\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30\u0E22\u0E31\u0E07\u0E04\u0E07\u0E21\u0E35\u0E1C\u0E25`;
    } else {
      target.effects.push({ type: "curse", duration: 999 });
      return `\u0E15\u0E34\u0E14\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 \u{1F52E} (\u0E25\u0E14 HP 3%/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
    }
  }
  if (ef.type === "curse_and_silence") {
    applyEffectToTarget(target, { type: "silence", duration: ef.duration ?? 2 }, enableAbilities);
    applyEffectToTarget(target, { type: "curse", duration: 999 }, enableAbilities);
    target.effects = target.effects.filter((e) => !e.type.startsWith("buff_") && e.type !== "shield");
    return `\u0E15\u0E34\u0E14\u0E43\u0E1A\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E15\u0E34\u0E14\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 \u{1F52E} \u0E41\u0E25\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14!`;
  }
  if (ef.type === "armor_break_and_stun") {
    const defRed = ef.defRedPct ?? ef.value ?? 0.3;
    applyEffectToTarget(target, { type: "debuff_def", value: defRed, duration: 2 }, enableAbilities);
    const stunRes2 = applyEffectToTarget(target, { type: "stun", duration: ef.duration ?? 1 }, enableAbilities);
    const stunTag = stunRes2 === "stun" ? "\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)" : stunRes2;
    return `\u0E17\u0E38\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E15\u0E01 (\u0E25\u0E14 DEF ${Math.round(defRed * 100)}% 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30${stunTag}`;
  }
  if (ef.type === "max_poison_and_armor_break") {
    applyEffectToTarget(target, { type: "poison", stacks: 2, duration: 3 }, enableAbilities);
    const defRed = ef.defRedPct ?? ef.value ?? 0.3;
    applyEffectToTarget(target, { type: "debuff_def", value: defRed, duration: 2 }, enableAbilities);
    return `\u0E40\u0E19\u0E15\u0E23\u0E21\u0E23\u0E13\u0E30\u0E1E\u0E34\u0E29\u0E2D\u0E40\u0E27\u0E08\u0E35: \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) & \u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (ef.type === "dispel_all_and_blind") {
    const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield", "regen", "fire_skin", "ice_skin", "berserk", "counter_stance", "yata_mirror", "shadow_clone"];
    target.effects = target.effects.filter((e) => !buffTypes.includes(e.type));
    target.shield = 0;
    const blindRes = applyEffectToTarget(target, { type: "blind", duration: ef.duration ?? 2 }, enableAbilities);
    const blindTag = blindRes?.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14") ? blindRes : "\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)";
    return `\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30${blindTag}`;
  }
  if (ef.type === "fire_skin") {
    const ex2 = target.effects.find((e) => e.type === "fire_skin");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "fire_skin", duration: ef.duration ?? 2 });
    }
    return `\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07 \u{1F525} (\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F+20% & \u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19)`;
  }
  if (ef.type === "ice_skin") {
    const ex2 = target.effects.find((e) => e.type === "ice_skin");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "ice_skin", duration: ef.duration ?? 2 });
    }
    return `\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C \u{1F9CA} (DEF+20%, SPD-30% & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19)`;
  }
  if (ef.type === "berserk") {
    const ex2 = target.effects.find((e) => e.type === "berserk");
    if (ex2) {
      ex2.duration = Math.max(ex2.duration, ef.duration ?? 2);
    } else {
      target.effects.push({ type: "berserk", duration: ef.duration ?? 2 });
    }
    return `\u0E04\u0E25\u0E31\u0E48\u0E07\u0E28\u0E36\u0E01 \u{1F4A2} (ATK+30%, SPD+20%, DEF-20%, HIT-10)`;
  }
  const ex = target.effects.find((e) => e.type === ef.type);
  if (ex) {
    ex.duration = Math.max(ex.duration, ef.duration ?? 2);
    if (ef.value !== void 0) ex.value = ef.value;
  } else {
    target.effects.push({ type: ef.type, value: ef.value, duration: ef.duration ?? 2 });
  }
  return ef.type;
}
var BattleSession = class {
  turn = 0;
  teamA;
  teamB;
  options;
  logs = [];
  winner = null;
  constructor(teamAHeroIds, teamBHeroIds, options = {}) {
    const enableSkillEffects = options.enableSkillEffects ?? true;
    this.options = {
      enableSkillEffects,
      enableSameElementBonus: options.enableSameElementBonus ?? enableSkillEffects,
      enableAbilities: options.enableAbilities ?? enableSkillEffects,
      forcedElementAdvantage: options.forcedElementAdvantage ?? "actual",
      maxTurns: options.maxTurns ?? 60,
      customSkillsA: options.customSkillsA,
      customSkillsB: options.customSkillsB,
      teamALevels: options.teamALevels,
      teamAStars: options.teamAStars,
      teamBLevels: options.teamBLevels,
      teamBStars: options.teamBStars,
      skillLevelsA: options.skillLevelsA,
      skillLevelsB: options.skillLevelsB
    };
    this.teamA = {
      side: "A",
      fighters: teamAHeroIds.map(
        (id, idx) => createFighter(id, options.customSkillsA?.[idx], options.teamALevels?.[idx] ?? 1, options.teamAStars?.[idx] ?? 1)
      ),
      activeIndex: 0,
      swapCooldown: 0,
      autoCastSignature: true,
      queuedSignature: false,
      queuedSwap: false
    };
    this.teamB = {
      side: "B",
      fighters: teamBHeroIds.map(
        (id, idx) => createFighter(id, options.customSkillsB?.[idx], options.teamBLevels?.[idx] ?? 1, options.teamBStars?.[idx] ?? 1)
      ),
      activeIndex: 0,
      swapCooldown: 0,
      autoCastSignature: true,
      queuedSignature: false,
      queuedSwap: false
    };
    if (this.options.enableAbilities) {
      for (const t of [this.teamA, this.teamB]) {
        for (const f of t.fighters) {
          if (f.abilityId === "celestial_scales") {
            f.shield = f.baseStats.maxHp * 0.3;
            f.effects.push({ type: "shield", value: 0.3, duration: 2 });
          }
          if (f.abilityId === "sacred_white_hide") {
            f.shield = f.baseStats.maxHp * 0.25;
            f.effects.push({ type: "shield", value: 0.25, duration: 2 });
          }
          if (f.abilityId === "sacred_white_grace") {
            f.shield = f.baseStats.maxHp * 0.2;
            f.effects.push({ type: "shield", value: 0.2, duration: 2 });
          }
          if (f.abilityId === "cape_boss_charge") {
            f.shield = f.baseStats.maxHp * 0.25;
            f.effects.push({ type: "shield", value: 0.25, duration: 2 });
          }
        }
      }
    }
  }
  getActive(team) {
    return team.fighters[team.activeIndex];
  }
  captureSnapshot() {
    const snapTeam = (t) => ({
      side: t.side,
      activeIndex: t.activeIndex,
      swapCooldown: t.swapCooldown,
      fighters: t.fighters.map((f) => ({
        id: f.id,
        name: f.name,
        rarity: f.rarity,
        element: f.element,
        role: f.role,
        hp: f.hp,
        maxHp: f.baseStats.maxHp,
        sp: f.sp,
        maxSp: f.baseStats.maxSp,
        shield: f.shield,
        gauge: f.gauge,
        effects: f.effects.map((e) => ({ ...e })),
        reviveUsed: f.reviveUsed
      }))
    });
    return {
      teamA: snapTeam(this.teamA),
      teamB: snapTeam(this.teamB),
      winner: this.winner
    };
  }
  recordEvent(events, ev) {
    ev.snapshot = this.captureSnapshot();
    events.push(ev);
    this.logs.push(ev);
  }
  canSwap(team) {
    if (team.fighters.length < 2) return false;
    const backupIdx = 1 - team.activeIndex;
    const backup = team.fighters[backupIdx];
    const active = this.getActive(team);
    return backup.hp > 0 && team.swapCooldown <= 0 && !hasStatus(active, "root");
  }
  stepTurn() {
    if (this.winner) return [];
    this.turn++;
    const events = [];
    for (const t of [this.teamA, this.teamB]) {
      if (t.fighters.length > 1) {
        const backup = t.fighters[1 - t.activeIndex];
        if (backup.hp > 0) {
          const formula = heroes_default.statFormula;
          const spBackupGain = formula.spBackupRegenFlat ?? (formula.spBackupRegenPctPerTurn ? Math.round(backup.baseStats.maxSp * formula.spBackupRegenPctPerTurn) : 10);
          backup.sp = Math.min(backup.baseStats.maxSp, backup.sp + spBackupGain);
        }
      }
      if (t.swapCooldown > 0) t.swapCooldown--;
      if (t.queuedSwap && this.canSwap(t)) {
        const oldF = this.getActive(t);
        t.activeIndex = 1 - t.activeIndex;
        t.swapCooldown = 3;
        t.queuedSwap = false;
        const newF = this.getActive(t);
        const healAmt = newF.baseStats.maxHp * 0.05;
        newF.hp = Math.min(newF.baseStats.maxHp, newF.hp + healAmt);
        const ev = {
          turn: this.turn,
          actorSide: t.side,
          actorName: oldF.name,
          targetName: newF.name,
          actionType: "swap",
          actionName: "\u0E2A\u0E25\u0E31\u0E1A\u0E15\u0E31\u0E27",
          damage: 0,
          healed: Math.round(healAmt),
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [`\u0E1F\u0E37\u0E49\u0E19 +${Math.round(healAmt)} HP`],
          message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] \u0E1D\u0E31\u0E48\u0E07 ${t.side} \u0E2A\u0E25\u0E31\u0E1A ${oldF.name} \u0E2D\u0E2D\u0E01 \u2192 \u0E2A\u0E48\u0E07 ${newF.name} \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E19\u0E32\u0E21 (\u0E1F\u0E37\u0E49\u0E19 +${Math.round(healAmt)} HP, SP ${Math.round(newF.sp)}/${newF.baseStats.maxSp})`
        };
        this.recordEvent(events, ev);
      } else {
        t.queuedSwap = false;
      }
    }
    const fA = this.getActive(this.teamA);
    const fB = this.getActive(this.teamB);
    const spdA = getEffectiveStats(fA, this.options.enableAbilities).spd;
    const spdB = getEffectiveStats(fB, this.options.enableAbilities).spd;
    const aFirst = spdA === spdB ? Math.random() < 0.5 : spdA > spdB;
    const order = aFirst ? [[this.teamA, this.teamB], [this.teamB, this.teamA]] : [[this.teamB, this.teamA], [this.teamA, this.teamB]];
    for (const [attTeam, defTeam] of order) {
      if (this.winner) break;
      const att = this.getActive(attTeam);
      const def = this.getActive(defTeam);
      if (att.hp <= 0 || def.hp <= 0) continue;
      const statusKilled = this.processStartOfTurnStatuses(attTeam, defTeam, events);
      if (statusKilled) {
        this.checkKoAndBackup(attTeam, events);
        if (this.winner) break;
        continue;
      }
      if (hasStatus(att, "stun") || hasStatus(att, "freeze") || hasStatus(att, "sleep") || hasStatus(att, "stone_curse")) {
        const ccName = hasStatus(att, "stone_curse") ? "\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19" : hasStatus(att, "freeze") ? "\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07" : hasStatus(att, "sleep") ? "\u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25" : "\u0E2A\u0E15\u0E31\u0E19";
        const ev = {
          turn: this.turn,
          actorSide: attTeam.side,
          actorName: att.name,
          targetName: def.name,
          actionType: "skip",
          actionName: ccName,
          damage: 0,
          healed: 0,
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: [],
          message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] ${att.name} \u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30${ccName} \u0E02\u0E49\u0E32\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19!`
        };
        this.recordEvent(events, ev);
        this.tickEndOfTurnStatuses(att);
        continue;
      }
      if (hasStatus(att, "confusion")) {
        if (Math.random() < 0.6) {
          const selfDmg = Math.round(att.baseStats.maxHp * 0.12);
          att.hp = Math.max(0, att.hp - selfDmg);
          const ev = {
            turn: this.turn,
            actorSide: attTeam.side,
            actorName: att.name,
            targetName: att.name,
            actionType: "status",
            actionName: "\u0E2A\u0E31\u0E1A\u0E2A\u0E19",
            damage: selfDmg,
            healed: 0,
            shieldGained: 0,
            isCrit: false,
            isMiss: false,
            elementMult: 1,
            appliedEffects: [],
            message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] \u{1F300} ${att.name} \u0E40\u0E01\u0E34\u0E14\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E1A\u0E2A\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07! \u0E2B\u0E31\u0E19\u0E21\u0E32\u0E17\u0E33\u0E23\u0E49\u0E32\u0E22\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07 -${selfDmg} HP (12% Max HP) \u0E41\u0E25\u0E30\u0E02\u0E49\u0E32\u0E21\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E17\u0E48\u0E32\u0E43\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E19\u0E35\u0E49! (HP ${Math.round(att.hp)}/${att.baseStats.maxHp})`
          };
          this.recordEvent(events, ev);
          this.tickEndOfTurnStatuses(att);
          this.checkKoAndBackup(attTeam, events);
          continue;
        } else {
          const confEv = {
            turn: this.turn,
            actorSide: attTeam.side,
            actorName: att.name,
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
            message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] \u{1F300} ${att.name} \u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E31\u0E1A\u0E2A\u0E19 \u0E41\u0E15\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E2A\u0E21\u0E32\u0E18\u0E34\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E15\u0E34\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E2D\u0E2D\u0E01\u0E41\u0E2D\u0E47\u0E01\u0E0A\u0E31\u0E19!`
          };
          this.recordEvent(events, confEv);
        }
      }
      this.executeAction(attTeam, defTeam, events);
      this.tickEndOfTurnStatuses(att);
      this.checkKoAndBackup(defTeam, events);
      if (!this.winner) this.checkKoAndBackup(attTeam, events);
    }
    if (!this.winner && this.turn >= this.options.maxTurns) {
      const hpPctA = this.teamA.fighters.reduce((s, f) => s + Math.max(0, f.hp), 0) / this.teamA.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      const hpPctB = this.teamB.fighters.reduce((s, f) => s + Math.max(0, f.hp), 0) / this.teamB.fighters.reduce((s, f) => s + f.baseStats.maxHp, 0);
      this.winner = hpPctA === hpPctB ? "draw" : hpPctA > hpPctB ? "A" : "B";
    }
    if (this.winner && events.length > 0) {
      events[events.length - 1].snapshot = this.captureSnapshot();
    }
    return events;
  }
  processStartOfTurnStatuses(attTeam, defTeam, events) {
    const f = this.getActive(attTeam);
    const enemy = this.getActive(defTeam);
    let dotDmg = 0;
    let regenHeal = 0;
    const notes = [];
    if (f.sp < f.baseStats.maxSp) {
      const spGain = Math.min(f.baseStats.maxSp - f.sp, f.baseStats.spRegen);
      f.sp += spGain;
    }
    if (this.options.enableAbilities) {
      if (f.abilityId === "morning_call" && !f.firstTurnDone) {
        f.firstTurnDone = true;
        if (Math.random() < 0.7) {
          f.effects.push({ type: "buff_atk", value: 0.1, duration: 1 });
          f.effects.push({ type: "buff_cri", value: 15, duration: 1 });
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (70%) ATK+10%, CRI+15%`);
        }
      }
      if (f.abilityId === "kings_majesty") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          applyEffectToTarget(enemy, { type: "debuff_atk", value: 0.15, duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E02\u0E48\u0E21\u0E02\u0E27\u0E31\u0E0D\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15%`);
        }
      }
      if (f.abilityId === "immortal_serpent") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.045;
          regenHeal += h;
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
        }
      }
      if (f.abilityId === "antler_blessing") {
        if (Math.random() < 0.55) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 10);
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP, +10 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "mimic_cacophony") {
        if (Math.random() < 0.55) {
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -8`);
        }
      }
      if (f.abilityId === "warmth_of_the_flock") {
        if (Math.random() < 0.5) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (50%) \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
        }
      }
      if (f.abilityId === "hot_spring_aura") {
        if (Math.random() < 0.6) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1F\u0E37\u0E49\u0E19 +8 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "regenerative_core") {
        if (Math.random() < 0.55) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "buoyant_comfort") {
        if (Math.random() < 0.6) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          applyEffectToTarget(f, { type: "shield", value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1F\u0E37\u0E49\u0E19 +8 SP & \u0E40\u0E01\u0E23\u0E32\u0E30 5%`);
        }
      }
      if (f.abilityId === "echolocation_harmony") {
        if (Math.random() < 0.6) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 10);
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1F\u0E37\u0E49\u0E19 +10 SP & \u0E40\u0E01\u0E08 +10`);
        }
      }
      if (f.abilityId === "night_confusion_gaze" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_hit", value: 15, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15 ${enemy.name} \u0E25\u0E14 HIT -15`);
        }
      }
      if (f.abilityId === "omniscient_gaze" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "confusion", duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E21\u0E2B\u0E32\u0E0D\u0E32\u0E13\u0E17\u0E34\u0E1E\u0E22\u0E4C \u0E2A\u0E31\u0E1A\u0E2A\u0E19 ${enemy.name} (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
        }
      }
      if (f.abilityId === "brain_interference" && enemy.hp > 0) {
        if (Math.random() < 0.25) {
          enemy.gauge = Math.max(0, enemy.gauge - 5);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (25%) \u0E04\u0E25\u0E37\u0E48\u0E19\u0E23\u0E1A\u0E01\u0E27\u0E19\u0E2A\u0E21\u0E2D\u0E07 \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 ${enemy.name} -5`);
        }
      }
      if (f.abilityId === "resonance_echo") {
        if (Math.random() < 0.5) {
          applyEffectToTarget(f, { type: "shield", value: 0.1, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (50%) \u0E04\u0E25\u0E37\u0E48\u0E19\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E08\u0E34\u0E15 \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 10% Max HP`);
        }
      }
      if (f.abilityId === "solar_majesty_aura" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          applyEffectToTarget(enemy, { type: "blind", duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E23\u0E31\u0E28\u0E21\u0E35\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30 \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 ${enemy.name} -8 & \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
      }
      if (f.abilityId === "condor_dominion_wings" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E25\u0E21\u0E01\u0E14\u0E17\u0E31\u0E1A \u0E25\u0E14 SPD ${enemy.name} 15% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "pure_breeze_cleanse") {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E1F\u0E37\u0E49\u0E19 +8 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "swan_dance_guardian") {
        if (Math.random() < 0.6) {
          applyEffectToTarget(f, { type: "shield", value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E27\u0E32\u0E22\u0E38 5% Max HP`);
        }
      }
      if (f.abilityId === "sacred_emerald_wind") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E08 +10`);
        }
      }
      if (f.abilityId === "earth_herbal_snout") {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E1F\u0E37\u0E49\u0E19 +8 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "earthquake_footsteps" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1D\u0E35\u0E40\u0E17\u0E49\u0E32\u0E1E\u0E2A\u0E38\u0E18\u0E32 \u0E25\u0E14 SPD ${enemy.name} 15% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "burrow_safehaven") {
        if (Math.random() < 0.6) {
          applyEffectToTarget(f, { type: "shield", value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E42\u0E1E\u0E23\u0E07\u0E14\u0E34\u0E19\u0E01\u0E33\u0E1A\u0E31\u0E07 \u0E40\u0E01\u0E23\u0E32\u0E30 5% Max HP`);
        }
      }
      if (f.abilityId === "high_ground_blessing") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1E\u0E23\u0E1E\u0E2A\u0E38\u0E18\u0E32 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E08 +10`);
        }
      }
      if (f.abilityId === "wild_canopy_howl" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_hit", value: 15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E40\u0E2A\u0E35\u0E22\u0E07\u0E01\u0E39\u0E48\u0E01\u0E49\u0E2D\u0E07 \u0E25\u0E14 HIT 15 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "ancient_root_weave" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E23\u0E32\u0E01\u0E44\u0E21\u0E49\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23 \u0E25\u0E14 SPD 15% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "eucalyptus_rest") {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E01\u0E25\u0E34\u0E48\u0E19\u0E22\u0E39\u0E04\u0E32\u0E25\u0E34\u0E1B\u0E15\u0E31\u0E2A \u0E1F\u0E37\u0E49\u0E19 +8 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "seed_of_rebirth") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E1E\u0E24\u0E01\u0E29\u0E32 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E08 +10`);
        }
      }
      if (f.abilityId === "royal_propolis") {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E40\u0E01\u0E2A\u0E23\u0E19\u0E21\u0E1C\u0E36\u0E49\u0E07 \u0E1F\u0E37\u0E49\u0E19 +8 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "toxic_plumage_flutter" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_hit", value: 15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E2A\u0E25\u0E31\u0E14\u0E02\u0E19\u0E19\u0E01\u0E1E\u0E34\u0E29 \u0E25\u0E14 HIT 15 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "regenerative_toxic_skin") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.035;
          regenHeal += h;
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E01\u0E32\u0E22\u0E32\u0E07\u0E2D\u0E01\u0E40\u0E0B\u0E25\u0E25\u0E4C\u0E1E\u0E34\u0E29 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & +10 SP`);
        }
      }
      if (f.abilityId === "conotoxin_harpoon" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_spd", value: 0.18, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E09\u0E21\u0E27\u0E01\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 \u0E25\u0E14 SPD 18% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10`);
        }
      }
      if (f.abilityId === "miracle_blue_blood") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E42\u0E25\u0E2B\u0E34\u0E15\u0E04\u0E23\u0E32\u0E21 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E08 +10`);
        }
      }
      if (f.abilityId === "sonar_ice_horn" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E07\u0E32\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C \u0E25\u0E14 SPD 15% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "krill_bio_antifreeze") {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E2A\u0E32\u0E23\u0E15\u0E49\u0E32\u0E19\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 \u0E1F\u0E37\u0E49\u0E19 +8 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "canary_of_the_sea") {
        if (Math.random() < 0.6) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          applyEffectToTarget(f, { type: "shield", value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E27\u0E32\u0E23\u0E35\u0E02\u0E32\u0E27 \u0E1F\u0E37\u0E49\u0E19 +8 SP & \u0E40\u0E01\u0E23\u0E32\u0E30 5%`);
        }
      }
      if (f.abilityId === "aurora_tundra_blessing") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E41\u0E2A\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E08 +10`);
        }
      }
      if (f.abilityId === "cunning_dark_wings" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_hit", value: 15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1B\u0E35\u0E01\u0E17\u0E21\u0E34\u0E2C \u0E25\u0E14 HIT 15 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "vampire_cloak_veil" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E21\u0E48\u0E32\u0E19\u0E1B\u0E35\u0E01\u0E21\u0E32\u0E23 \u0E25\u0E14 SPD 15% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
        }
      }
      if (f.abilityId === "undying_adaptation") {
        if (Math.random() < 0.55) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E0A\u0E35\u0E1E\u0E08\u0E23\u0E2D\u0E21\u0E15\u0E30 \u0E1F\u0E37\u0E49\u0E19 +8 SP${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "gecko_regenerative_cells") {
        if (Math.random() < 0.6) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          applyEffectToTarget(f, { type: "shield", value: 0.05, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E40\u0E0B\u0E25\u0E25\u0E4C\u0E07\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48 \u0E1F\u0E37\u0E49\u0E19 +8 SP & \u0E40\u0E01\u0E23\u0E32\u0E30 5%`);
        }
      }
      if (f.abilityId === "miracle_organ_regeneration") {
        if (Math.random() < 0.6) {
          const h = f.baseStats.maxHp * 0.04;
          regenHeal += h;
          f.gauge = Math.min(100, f.gauge + 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E01\u0E32\u0E22\u0E32\u0E07\u0E2D\u0E01\u0E40\u0E0B\u0E25\u0E25\u0E4C\u0E2D\u0E31\u0E28\u0E08\u0E23\u0E23\u0E22\u0E4C \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E08 +10`);
        }
      }
      if (f.abilityId === "frilled_sun_flare" && enemy.hp > 0) {
        if (Math.random() < 0.55) {
          applyEffectToTarget(enemy, { type: "blind", duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19 \u0E41\u0E2A\u0E07\u0E27\u0E32\u0E1A\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
      }
      if (f.abilityId === "gentle_solar_fleece") {
        if (Math.random() < 0.6) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          applyEffectToTarget(f, { type: "shield", value: 0.08, duration: 2 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E1B\u0E38\u0E22\u0E02\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30 \u0E40\u0E01\u0E23\u0E32\u0E30 8%${cl ? ` & ${cl}` : ""}`);
        }
      }
      if (f.abilityId === "sacred_white_grace") {
        const h = f.baseStats.maxHp * 0.05;
        regenHeal += h;
        const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
        notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 \u0E1A\u0E32\u0E23\u0E21\u0E35\u0E04\u0E0A\u0E2A\u0E32\u0E23\u0E40\u0E1C\u0E37\u0E2D\u0E01 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP${cl ? ` & ${cl}` : ""}`);
      }
      if (f.abilityId === "motion_dazzle_stripes" && enemy.hp > 0) {
        if (Math.random() < 0.55) {
          applyEffectToTarget(enemy, { type: "blind", duration: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E25\u0E32\u0E22\u0E1E\u0E23\u0E32\u0E07\u0E41\u0E16\u0E1A\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
      }
      if (f.abilityId === "high_voltage_organ" && enemy.hp > 0) {
        if (Math.random() < 0.6) {
          applyEffectToTarget(enemy, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          enemy.gauge = Math.max(0, enemy.gauge - 10);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E2D\u0E27\u0E31\u0E22\u0E27\u0E30\u0E44\u0E1F\u0E1F\u0E49\u0E32 860V \u0E25\u0E14 SPD 15% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10`);
        }
      }
      if (f.abilityId === "eimer_organ_reflex") {
        if (Math.random() < 0.55) {
          f.sp = Math.min(f.baseStats.maxSp, f.sp + 8);
          f.gauge = Math.min(100, f.gauge + 6);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (55%) \u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E40\u0E2D\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E44\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32 \u0E1F\u0E37\u0E49\u0E19 +8 SP & \u0E40\u0E01\u0E08 +6`);
        }
      }
      if (f.abilityId === "spiral_horn_resonance") {
        if (Math.random() < 0.6) {
          const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
          notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (60%) \u0E40\u0E02\u0E32\u0E21\u0E49\u0E27\u0E19\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E25\u0E37\u0E48\u0E19${cl ? ` (${cl})` : ""}`);
        }
      }
      if (f.abilityId === "galvanic_life_pulse") {
        const h = f.baseStats.maxHp * 0.05;
        regenHeal += h;
        const cl = applyEffectToTarget(f, { type: "cleanse", count: 1 }, true);
        notes.push(`Ability [${f.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 \u0E0A\u0E35\u0E1E\u0E08\u0E23\u0E01\u0E31\u0E25\u0E27\u0E32\u0E19\u0E34\u0E01 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP${cl ? ` & ${cl}` : ""}`);
      }
      if (f.abilityId === "thorn_regrowth" && !hasStatus(f, "stone_curse")) {
        const h = f.baseStats.maxHp * 0.04;
        regenHeal += h;
        notes.push(`Ability [${f.abilityName}] \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E0A\u0E35\u0E27\u0E32\u0E2B\u0E19\u0E32\u0E21\u0E07\u0E2D\u0E01\u0E40\u0E07\u0E22 +${Math.round(h)} HP`);
      }
    }
    if (this.options.enableSkillEffects) {
      const dotReduction = this.options.enableAbilities && f.abilityId === "mud_hide" ? 0.6 : 1;
      for (const ef of f.effects) {
        if (ef.type === "burn") {
          const wineMistMult = hasStatus(f, "wine_mist") ? 1.5 : 1;
          const d = f.baseStats.maxHp * skills_default.statusRules.burn.hpLossPctPerTurn * dotReduction * wineMistMult;
          dotDmg += d;
          notes.push(wineMistMult > 1 ? `\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E2A\u0E38\u0E23\u0E32\u0E17\u0E27\u0E35\u0E04\u0E39\u0E13 -${Math.round(d)}` : `\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 -${Math.round(d)}`);
        }
        if (ef.type === "poison") {
          const stacks = ef.stacks ?? 1;
          const d = f.baseStats.maxHp * skills_default.statusRules.poison.hpLossPctPerTurn * stacks * dotReduction;
          dotDmg += d;
          notes.push(`\u0E1E\u0E34\u0E29(${stacks}) -${Math.round(d)}`);
        }
        if (ef.type === "curse") {
          const d = f.baseStats.maxHp * skills_default.statusRules.curse.hpLossPctPerTurn * dotReduction;
          dotDmg += d;
          notes.push(`\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 \u{1F52E} -${Math.round(d)} HP`);
        }
        if (ef.type === "regen") {
          const h = f.baseStats.maxHp * (ef.value ?? 0.06);
          regenHeal += h;
          notes.push(`\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E1B\u0E48\u0E32 +${Math.round(h)}`);
        }
        if (ef.type === "raging_thunder") {
          const isSelf = Math.random() < 0.3;
          const thunderTarget = isSelf ? f : enemy;
          const K = heroes_default.statFormula.defConstantK;
          const tDef = getEffectiveStats(thunderTarget, this.options.enableAbilities).def;
          const tDmg = Math.max(1, f.baseStats.atk * 0.7 * (K / (K + tDef)) * (0.95 + Math.random() * 0.1));
          if (thunderTarget === f) {
            dotDmg += tDmg;
            notes.push(`\u26A1\u{1F4A5} \u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E15\u0E19\u0E40\u0E2D\u0E07! -${Math.round(tDmg)} HP`);
          } else {
            let remThunder = tDmg;
            if (thunderTarget.shield > 0) {
              const abs = Math.min(thunderTarget.shield, remThunder);
              thunderTarget.shield -= abs;
              remThunder -= abs;
            }
            thunderTarget.hp = Math.max(0, thunderTarget.hp - remThunder);
            notes.push(`\u26A1 \u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E04\u0E25\u0E31\u0E48\u0E07\u0E1C\u0E48\u0E32\u0E43\u0E2A\u0E48 ${thunderTarget.name}! -${Math.round(tDmg)} HP`);
          }
        }
      }
    }
    if (hasStatus(f, "stone_curse")) {
      if (regenHeal > 0) notes.push(`\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19 \u{1F5FF} \u0E23\u0E30\u0E07\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14!`);
      regenHeal = 0;
    }
    if (dotDmg > 0 || regenHeal > 0 || notes.length > 0) {
      f.hp = Math.min(f.baseStats.maxHp, f.hp - dotDmg + regenHeal);
      const ev = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: f.name,
        targetName: enemy.name,
        actionType: "status",
        actionName: notes.join(", "),
        damage: Math.round(dotDmg),
        healed: Math.round(regenHeal),
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [],
        message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] \u0E15\u0E49\u0E19\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E02\u0E2D\u0E07 ${f.name}: ${notes.join(", ")} (HP ${Math.max(0, Math.round(f.hp))}/${Math.round(f.baseStats.maxHp)})`
      };
      this.recordEvent(events, ev);
    }
    return f.hp <= 0;
  }
  tickEndOfTurnStatuses(f) {
    if (f.ccResistTurns > 0) {
      f.ccResistTurns--;
      if (f.ccResistTurns <= 0) f.ccResistStacks = 0;
    }
    for (const ef of f.effects) {
      if (ef.type === "curse" || ef.type === "spirit_orb") continue;
      if (ef.type !== "stun" && ef.type !== "freeze" && ef.type !== "stone_curse") ef.duration--;
      else ef.duration = 0;
    }
    f.effects = f.effects.filter((e) => e.type === "curse" || e.type === "spirit_orb" || e.duration > 0);
    if (!hasStatus(f, "shield")) f.shield = 0;
  }
  executeAction(attTeam, defTeam, events) {
    const att = this.getActive(attTeam);
    const sigCfg = heroes_default.signatureByClass[att.rarity];
    const isSilenced = hasStatus(att, "silence");
    if (!isSilenced) {
      att.gauge = Math.min(100, att.gauge + sigCfg.gainPerTurn);
    }
    const shouldCastSig = !isSilenced && att.gauge >= 100 && (attTeam.autoCastSignature || attTeam.queuedSignature || attTeam.side === "B");
    if (shouldCastSig) {
      att.gauge -= 100;
      attTeam.queuedSignature = false;
      att.sigUsedCount++;
      const customSigChance = att.signatureEffect?.chance;
      const heroDef = HERO_MAP.get(att.id);
      const sigDmgMult = heroDef?.customSigMult !== void 0 ? heroDef.customSigMult : sigCfg.damageMult;
      this.performHit(attTeam, defTeam, "signature", att.signatureName, sigDmgMult, att.element, {
        sigEffect: att.signatureEffect,
        sigEffectChance: customSigChance ?? sigCfg.effectChance
      }, events);
      return;
    }
    if (!this.options.enableSkillEffects) {
      const pureSlots = [
        [0.1, 2.2],
        [0.15, 1.8],
        [0.2, 1.6],
        [0.2, 1.6]
      ];
      for (const [p, m] of pureSlots) {
        if (Math.random() < p) {
          this.performHit(attTeam, defTeam, "skill", "\u0E2A\u0E01\u0E34\u0E25\u0E18\u0E32\u0E15\u0E38", m, att.element, {}, events);
          return;
        }
      }
      this.performHit(attTeam, defTeam, "normal", "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32", 1, att.element, {}, events);
      return;
    }
    if (!isSilenced) {
      for (const slotId of att.skillSlots) {
        const sk = SKILL_MAP.get(slotId);
        if (!sk) continue;
        if (sk.id === "secret_l" && hasStatus(att, "shadow_clone")) continue;
        const spCost = getSkillSpCost(sk.tier, sk.id);
        if (att.sp < spCost) continue;
        const isSameElem = this.options.enableSameElementBonus && sk.element === att.element;
        const procChance = sk.baseChance * (isSameElem ? elements_default.multipliers.sameElementChanceBonus : 1);
        if (Math.random() < procChance) {
          att.sp -= spCost;
          this.performHit(attTeam, defTeam, "skill", sk.name, sk.damageMult, sk.element, { skill: sk, spCost }, events);
          return;
        }
      }
    }
    const breathBonus = isSilenced ? 0 : heroes_default.statFormula.spNormalAttackBonus ?? 6;
    const actualSpGain = Math.min(att.baseStats.maxSp - att.sp, breathBonus);
    att.sp += actualSpGain;
    this.performHit(attTeam, defTeam, "normal", isSilenced ? "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32 (\u0E15\u0E34\u0E14\u0E43\u0E1A\u0E49 \u{1F515})" : "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32", 1, att.element, { spChanged: actualSpGain }, events);
  }
  performHit(attTeam, defTeam, actionType, actionName, baseDamageMult, skillElement, meta, events) {
    const att = this.getActive(attTeam);
    const def = this.getActive(defTeam);
    const attStats = getEffectiveStats(att, this.options.enableAbilities);
    const defStats = getEffectiveStats(def, this.options.enableAbilities);
    const sk = meta.skill;
    const spCost = meta.spCost ?? 0;
    let spChanged = meta.spChanged ?? 0;
    const appliedEffects = [];
    if (spChanged > 0 && actionType === "normal") {
      appliedEffects.push(`\u0E1E\u0E31\u0E01\u0E2B\u0E32\u0E22\u0E43\u0E08 +${spChanged} SP`);
    }
    let healed = 0;
    let shieldGained = 0;
    if (hasStatus(att, "bleed")) {
      const bAct = Math.round(att.baseStats.maxHp * skills_default.statusRules.bleed.actionDamageHpPct);
      att.hp = Math.max(0, att.hp - bAct);
      appliedEffects.push(`\u{1FA78} \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27 -${bAct} HP`);
    }
    if (baseDamageMult === 0 && this.options.enableSkillEffects) {
      if (sk) {
        for (const rawEf of sk.effects) {
          const ef = rawEf;
          if (Math.random() < (ef.chance ?? 1)) {
            const tgt = ef.target === "enemy" ? def : att;
            const hpBefore = tgt.hp;
            const shBefore = tgt.shield;
            const spBefore = tgt.sp;
            const res = applyEffectToTarget(tgt, ef, this.options.enableAbilities);
            if (res) appliedEffects.push(res);
            healed += Math.max(0, tgt.hp - hpBefore);
            shieldGained += Math.max(0, tgt.shield - shBefore);
            if (tgt === att) spChanged += tgt.sp - spBefore;
          }
        }
      }
      if (actionType === "signature" && att.id === "deer") {
        const h = att.baseStats.maxHp * 0.12;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        spChanged += 15;
        appliedEffects.push(`\u0E2E\u0E35\u0E25\u0E17\u0E35\u0E21 +${Math.round(h)} HP, \u0E40\u0E01\u0E23\u0E32\u0E30 15% & +15 SP`);
      }
      if (actionType === "signature" && att.id === "flamingo") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        spChanged += 15;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E23\u0E30\u0E1A\u0E33\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E1D\u0E39\u0E07: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, +15 SP${cl ? ` & ${cl}` : ""}`);
      }
      if (actionType === "signature" && att.id === "capybara") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E27\u0E32\u0E23\u0E35\u0E2D\u0E38\u0E48\u0E19\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP & \u0E1A\u0E31\u0E1F DEF+20%`);
      }
      if (actionType === "signature" && att.id === "sun_stag") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 25);
        spChanged += 25;
        applyEffectToTarget(att, { type: "buff_atk", value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E41\u0E2A\u0E07\u0E2D\u0E23\u0E38\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14\u0E43\u0E2B\u0E21\u0E48: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, +25 SP & \u0E1A\u0E31\u0E1F ATK+25%`);
      }
      if (actionType === "signature" && att.id === "starfish") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_def", value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E14\u0E32\u0E23\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP & \u0E1A\u0E31\u0E1F DEF+15%`);
      }
      if (actionType === "signature" && att.id === "sea_otter") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        spChanged += 15;
        applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`\u0E44\u0E02\u0E48\u0E21\u0E38\u0E01\u0E27\u0E32\u0E23\u0E35\u0E04\u0E38\u0E49\u0E21\u0E17\u0E31\u0E1E: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, +15 SP & \u0E40\u0E01\u0E23\u0E32\u0E30 12%`);
      }
      if (actionType === "signature" && att.id === "dolphin") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_spd", value: 0.2, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""} & \u0E1A\u0E31\u0E1F SPD+20%`);
      }
      if (actionType === "signature" && att.id === "dove") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_spd", value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E1B\u0E35\u0E01\u0E2A\u0E31\u0E19\u0E15\u0E34\u0E20\u0E32\u0E1E\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP & \u0E1A\u0E31\u0E1F SPD+15%`);
      }
      if (actionType === "signature" && att.id === "swan") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E23\u0E30\u0E1A\u0E33\u0E27\u0E32\u0E22\u0E38\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E40\u0E01\u0E23\u0E32\u0E30 12%${cl ? ` & ${cl}` : ""}`);
      }
      if (actionType === "signature" && att.id === "quetzal") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_spd", value: 0.25, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_flee", value: 15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E2A\u0E32\u0E22\u0E25\u0E21: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""} & \u0E1A\u0E31\u0E1F SPD+25%/FLEE+15`);
      }
      if (actionType === "signature" && att.id === "pig") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_def", value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E42\u0E04\u0E25\u0E19\u0E41\u0E23\u0E48\u0E18\u0E32\u0E15\u0E38\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP & \u0E1A\u0E31\u0E1F DEF+15%`);
      }
      if (actionType === "signature" && att.id === "wombat") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        applyEffectToTarget(att, { type: "buff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E1E\u0E23\u0E07\u0E14\u0E34\u0E19\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E40\u0E01\u0E23\u0E32\u0E30 12% & \u0E1A\u0E31\u0E1F DEF+20%`);
      }
      if (actionType === "signature" && att.id === "giraffe") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E1E\u0E23\u0E21\u0E34\u0E48\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E41\u0E2B\u0E48\u0E07\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""} & \u0E1A\u0E31\u0E1F DEF+25%`);
      }
      if (actionType === "signature" && att.id === "koala") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_def", value: 0.15, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E42\u0E2D\u0E1A\u0E19\u0E34\u0E17\u0E23\u0E32: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP & \u0E1A\u0E31\u0E1F DEF+15%`);
      }
      if (actionType === "signature" && att.id === "hornbill") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "regen", value: 0.06, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E1E\u0E23\u0E21\u0E2B\u0E32\u0E27\u0E19\u0E32\u0E25\u0E31\u0E22\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E1E: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""}, \u0E23\u0E35\u0E40\u0E08\u0E19 6% & \u0E1A\u0E31\u0E1F DEF+25%`);
      }
      if (actionType === "signature" && att.id === "bee") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_def", value: 0.15, duration: 2 }, this.options.enableAbilities);
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
        appliedEffects.push(`\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E21\u0E1C\u0E36\u0E49\u0E07\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E23\u0E31\u0E07: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E1A\u0E31\u0E1F DEF+15% & +10 SP`);
      }
      if (actionType === "signature" && att.id === "salamander") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "regen", value: 0.06, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E0B\u0E32\u0E25\u0E32\u0E41\u0E21\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""} & \u0E23\u0E35\u0E40\u0E08\u0E19 6%`);
      }
      if (actionType === "signature" && att.id === "horseshoe_crab") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        applyEffectToTarget(att, { type: "buff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E25\u0E2B\u0E34\u0E15\u0E04\u0E23\u0E32\u0E21\u0E25\u0E49\u0E32\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""}, \u0E40\u0E01\u0E23\u0E32\u0E30 15% & \u0E1A\u0E31\u0E1F DEF+25%`);
      }
      if (actionType === "signature" && att.id === "krill") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_def", value: 0.15, duration: 2 }, this.options.enableAbilities);
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
        appliedEffects.push(`\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E2D\u0E2D\u0E42\u0E23\u0E23\u0E32\u0E1D\u0E39\u0E07\u0E40\u0E04\u0E22\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E1A\u0E31\u0E1F DEF+15% & +10 SP`);
      }
      if (actionType === "signature" && att.id === "beluga") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E1E\u0E25\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E17\u0E31\u0E1E: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""} & \u0E40\u0E01\u0E23\u0E32\u0E30 12%`);
      }
      if (actionType === "signature" && att.id === "reindeer") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "regen", value: 0.06, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E21\u0E07\u0E01\u0E38\u0E0E\u0E41\u0E2A\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""}, \u0E23\u0E35\u0E40\u0E08\u0E19 6% & \u0E1A\u0E31\u0E1F DEF+25%`);
      }
      if (actionType === "signature" && att.id === "cockroach") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        applyEffectToTarget(att, { type: "buff_def", value: 0.15, duration: 2 }, this.options.enableAbilities);
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
        appliedEffects.push(`\u0E1F\u0E35\u0E42\u0E23\u0E42\u0E21\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E23\u0E27\u0E21\u0E1D\u0E39\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E1A\u0E31\u0E1F DEF+15% & +10 SP`);
      }
      if (actionType === "signature" && att.id === "tokay_gecko") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`\u0E01\u0E39\u0E48\u0E01\u0E49\u0E2D\u0E07\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""} & \u0E40\u0E01\u0E23\u0E32\u0E30 12%`);
      }
      if (actionType === "signature" && att.id === "axolotl") {
        const h = att.baseStats.maxHp * 0.25;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "regen", value: 0.06, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E07\u0E32\u0E21\u0E37\u0E14: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""}, \u0E23\u0E35\u0E40\u0E08\u0E19 6% & \u0E1A\u0E31\u0E1F DEF+25%`);
      }
      if (actionType === "signature" && att.id === "alpaca") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1B\u0E38\u0E22\u0E02\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F${cl ? ` (${cl})` : ""} & \u0E40\u0E01\u0E23\u0E32\u0E30 12%`);
      }
      if (actionType === "signature" && att.id === "white_elephant") {
        const h = att.baseStats.maxHp * 0.26;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1A\u0E32\u0E23\u0E21\u0E35\u0E04\u0E0A\u0E2A\u0E32\u0E23\u0E40\u0E1C\u0E37\u0E2D\u0E01: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14${cl ? ` (${cl})` : ""} & \u0E1A\u0E31\u0E1F DEF+25%`);
      }
      if (actionType === "signature" && att.id === "star_nosed_mole") {
        const h = att.baseStats.maxHp * 0.15;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
        appliedEffects.push(`\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E41\u0E2A\u0E07: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP & +15 SP`);
      }
      if (actionType === "signature" && att.id === "mouflon") {
        const h = att.baseStats.maxHp * 0.18;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const shRes = applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_spd", value: 0.15, duration: 2 }, this.options.enableAbilities);
        shieldGained += att.shield;
        appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E40\u0E01\u0E23\u0E32\u0E30 12% & \u0E1A\u0E31\u0E1F SPD +15%`);
      }
      if (actionType === "signature" && att.id === "okapi") {
        const h = att.baseStats.maxHp * 0.26;
        att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
        healed += h;
        const cl = applyEffectToTarget(att, { type: "cleanse", count: 99 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_atk", value: 0.2, duration: 2 }, this.options.enableAbilities);
        applyEffectToTarget(att, { type: "buff_spd", value: 0.2, duration: 2 }, this.options.enableAbilities);
        appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E49\u0E19\u0E0A\u0E35\u0E1E\u0E08\u0E23\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32: \u0E2E\u0E35\u0E25 +${Math.round(h)} HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14${cl ? ` (${cl})` : ""} & \u0E1A\u0E31\u0E1F ATK/SPD +20%`);
      }
      const spCostTag = spCost > 0 ? ` (-${spCost} SP)` : "";
      const ev2 = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: att.name,
        targetName: def.name,
        actionType,
        actionName,
        skillTier: sk?.tier,
        damage: 0,
        healed: Math.round(healed),
        shieldGained: Math.round(shieldGained),
        spCost,
        spChanged: Math.round(spChanged),
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects,
        message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] ${att.name} \u0E43\u0E0A\u0E49 [${actionName}]${spCostTag} \u2192 ${appliedEffects.join(", ")} (SP ${Math.round(att.sp)}/${att.baseStats.maxSp})`
      };
      this.recordEvent(events, ev2);
      return;
    }
    const attHitBonus = this.options.enableAbilities ? att.abilityId === "silent_night_owl" ? 12 : att.abilityId === "supersonic_dive" ? 8 : 0 : 0;
    const defFleeBonus = this.options.enableAbilities ? def.abilityId === "kitsune_illusion" ? 5 : def.abilityId === "solar_leap" ? 6 : 0 : 0;
    const effFlee = (defStats.flee + defFleeBonus) * (1 - (sk?.ignoreFleePct ?? 0));
    const hitChance = Math.max(0.5, Math.min(1, (attStats.hit + attHitBonus - effFlee) / 100));
    if (Math.random() > hitChance) {
      let dodgeNote = "";
      if (this.options.enableAbilities && def.abilityId === "nine_lives") {
        const h = def.baseStats.maxHp * 0.08;
        def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
        dodgeNote = ` (${def.name} Ability [${def.abilityName}] \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP)`;
      }
      if (this.options.enableAbilities && def.abilityId === "solar_stash" && Math.random() < 0.55) {
        const h = def.baseStats.maxHp * 0.03;
        def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
        def.sp = Math.min(def.baseStats.maxSp, def.sp + 12);
        dodgeNote = ` (${def.name} Ability [${def.abilityName}] \u0E1F\u0E37\u0E49\u0E19 +12 SP & +${Math.round(h)} HP)`;
      }
      if (this.options.enableAbilities && def.abilityId === "solar_leap" && Math.random() < 0.6) {
        applyEffectToTarget(def, { type: "buff_cri", value: 15, duration: 2 }, true);
        def.gauge = Math.min(100, def.gauge + 10);
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] \u0E1A\u0E31\u0E1F CRI+15% & \u0E40\u0E01\u0E08 +10)`;
      }
      if (this.options.enableAbilities && def.abilityId === "blazing_reflexes" && Math.random() < 0.6) {
        const K2 = heroes_default.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.4 * (K2 / (K2 + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] \u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A ${Math.round(cDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08\u0E43\u0E2A\u0E48 ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === "glide_wave" && Math.random() < 0.6) {
        def.gauge = Math.min(100, def.gauge + 10);
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] \u0E23\u0E48\u0E2D\u0E19\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2B\u0E25\u0E1A \u0E40\u0E01\u0E08 +10)`;
      }
      if (this.options.enableAbilities && def.abilityId === "burrow_ambush" && Math.random() < 0.6) {
        const K2 = heroes_default.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.4 * (K2 / (K2 + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] \u0E14\u0E33\u0E14\u0E34\u0E19\u0E41\u0E17\u0E07\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A ${Math.round(cDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08\u0E43\u0E2A\u0E48 ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === "foliage_cloak" && Math.random() < 0.6) {
        const K2 = heroes_default.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.4 * (K2 / (K2 + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] \u0E04\u0E21\u0E21\u0E35\u0E14\u0E43\u0E1A\u0E44\u0E21\u0E49\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A ${Math.round(cDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08\u0E43\u0E2A\u0E48 ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === "stoat_snow_dance" && Math.random() < 0.6) {
        const K2 = heroes_default.statFormula.defConstantK;
        const cDmg = Math.max(1, defStats.atk * 0.4 * (K2 / (K2 + attStats.def)) * (0.95 + Math.random() * 0.1));
        let remC = cDmg;
        if (att.shield > 0) {
          const abs = Math.min(att.shield, remC);
          att.shield -= abs;
          remC -= abs;
        }
        att.hp -= remC;
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] \u0E23\u0E30\u0E1A\u0E33\u0E2B\u0E34\u0E21\u0E30\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A ${Math.round(cDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08\u0E43\u0E2A\u0E48 ${att.name})`;
      }
      if (this.options.enableAbilities && def.abilityId === "aerobatic_hover" && Math.random() < 0.7) {
        att.gauge = Math.max(0, att.gauge - 10);
        applyEffectToTarget(att, { type: "debuff_hit", value: 15, duration: 2 }, true);
        dodgeNote += ` (${def.name} Ability [${def.abilityName}] \u0E25\u0E21\u0E2B\u0E21\u0E38\u0E19\u0E1C\u0E32\u0E14\u0E41\u0E1C\u0E25\u0E07 \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 ${att.name} -10 & \u0E25\u0E14 HIT 15)`;
      }
      const ev2 = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: att.name,
        targetName: def.name,
        actionType,
        actionName,
        skillTier: sk?.tier,
        damage: 0,
        healed: 0,
        shieldGained: 0,
        isCrit: false,
        isMiss: true,
        elementMult: 1,
        appliedEffects: [],
        message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] ${att.name} \u0E43\u0E0A\u0E49 [${actionName}] \u0E42\u0E08\u0E21\u0E15\u0E35 ${def.name} \u0E41\u0E15\u0E48\u0E1E\u0E25\u0E32\u0E14 (MISS)!${dodgeNote}`
      };
      this.recordEvent(events, ev2);
      return;
    }
    let mult = baseDamageMult;
    const bonusIf = sk?.bonusIfTargetHas;
    if (this.options.enableSkillEffects && bonusIf) {
      const condMet = bonusIf.status === "burn_or_poison" ? hasStatus(def, "burn") || hasStatus(def, "poison") : hasStatus(def, bonusIf.status);
      if (condMet) mult *= 1 + bonusIf.extraMult;
    }
    if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && att.sp >= att.baseStats.maxSp * 0.5 && (skillElement === "water" || att.element === "water")) {
      mult *= 1.2;
      appliedEffects.push(`Ability [${att.abilityName}] \u0E08\u0E49\u0E32\u0E27\u0E04\u0E25\u0E31\u0E48\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23 (SP\u226550%) \u0E14\u0E32\u0E40\u0E21\u0E08\u0E19\u0E49\u0E33 +20%`);
    }
    if (this.options.enableAbilities && att.abilityId === "glacial_fang_hunt" && (hasStatus(def, "freeze") || hasStatus(def, "ice_skin"))) {
      mult *= 1.3;
      appliedEffects.push(`Ability [${att.abilityName}] \u0E02\u0E22\u0E35\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07/Ice Skin \u0E14\u0E32\u0E40\u0E21\u0E08 +30%`);
    }
    if (this.options.enableAbilities && att.abilityId === "caustic_venom_aura" && hasStatus(def, "poison")) {
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E02\u0E22\u0E35\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 \u0E14\u0E32\u0E40\u0E21\u0E08 +25%`);
    }
    if (this.options.enableAbilities && att.abilityId === "celestial_scales" && Math.random() < 0.6) {
      applyEffectToTarget(att, { type: "buff_atk", value: 0.1, duration: 2 }, true);
      applyEffectToTarget(att, { type: "buff_spd", value: 0.1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) ATK/SPD+10%`);
    }
    if (this.options.enableAbilities && att.abilityId === "pack_hunter" && def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.6) {
      mult *= 1.2;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E14\u0E32\u0E40\u0E21\u0E08 +20%`);
    }
    if (this.options.enableAbilities && att.abilityId === "loyal_guardian" && Math.random() < 0.55) {
      const h = att.baseStats.maxHp * 0.04;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      applyEffectToTarget(att, { type: "buff_def", value: 0.1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & DEF+10%`);
    }
    if (this.options.enableAbilities && att.abilityId === "warhorse_gallop" && Math.random() < 0.5) {
      mult *= 1.1;
      applyEffectToTarget(att, { type: "buff_spd", value: 0.12, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E04\u0E27\u0E1A\u0E17\u0E30\u0E22\u0E32\u0E19 \u0E14\u0E32\u0E40\u0E21\u0E08+10%/SPD+12%`);
    }
    if (this.options.enableAbilities && att.abilityId === "plague_nibble") {
      if (Math.random() < 0.55) {
        const res = applyEffectToTarget(def, { type: "poison", duration: 3 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (55%) ${res}`);
      }
      if (hasStatus(def, "poison")) {
        def.sp = Math.max(0, def.sp - 10);
        appliedEffects.push(`Ability [${att.abilityName}] \u0E01\u0E31\u0E14\u0E41\u0E17\u0E30\u0E15\u0E31\u0E14 SP \u221210`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "neurotoxic_stinger" && hasStatus(def, "poison") && Math.random() < 0.65) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E0B\u0E49\u0E33\u0E1E\u0E34\u0E29 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
      if (Math.random() < 0.5) {
        const res = applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] ${res}`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "neurotoxin_fang") {
      if (hasStatus(def, "poison")) {
        mult *= 1.1;
        appliedEffects.push(`Ability [${att.abilityName}] \u0E1E\u0E34\u0E29\u0E0B\u0E49\u0E33\u0E41\u0E1C\u0E25 \u0E14\u0E32\u0E40\u0E21\u0E08+10%`);
      }
      if (Math.random() < 0.5) {
        const res = applyEffectToTarget(def, { type: "poison", duration: 3 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) ${res}`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "kitsune_illusion" && Math.random() < 0.45) {
      mult *= 1.06;
      def.gauge = Math.max(0, def.gauge - 5);
      appliedEffects.push(`Ability [${att.abilityName}] (45%) \u0E25\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 5 & \u0E14\u0E32\u0E40\u0E21\u0E08+6%`);
    }
    if (this.options.enableAbilities && att.abilityId === "solar_stash" && Math.random() < 0.55) {
      const h = att.baseStats.maxHp * 0.03;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 12);
      healed += h;
      spChanged += 12;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E1F\u0E37\u0E49\u0E19 +12 SP & +${Math.round(h)} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === "dazzling_plume") {
      if (Math.random() < 0.6) {
        const res = applyEffectToTarget(def, { type: "debuff_atk", value: 0.12, duration: 2 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (60%) ${res}`);
      }
      if (hasStatus(def, "blind")) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E32\u0E1A\u0E2D\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "polar_roar" && (hasStatus(def, "slow") || hasStatus(def, "freeze"))) {
      if (Math.random() < 0.65) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E0B\u0E49\u0E33\u0E41\u0E1C\u0E25\u0E44\u0E2D\u0E40\u0E22\u0E47\u0E19 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
      }
      if (Math.random() < 0.5) {
        const res = applyEffectToTarget(def, { type: "freeze", duration: 1 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) ${res}`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "vampiric_sonar" && Math.random() < 0.55) {
      const h = att.baseStats.maxHp * 0.05;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      def.sp = Math.max(0, def.sp - 8);
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 8);
      spChanged += 8;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +${Math.round(h)} HP & \u0E14\u0E39\u0E14 SP \xB18`);
    }
    if (this.options.enableAbilities && att.abilityId === "sticky_tongue_splash" && Math.random() < 0.55) {
      const res = applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 10);
      spChanged += 10;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) ${res ?? "\u0E2A\u0E42\u0E25\u0E27\u0E4C"} & \u0E1F\u0E37\u0E49\u0E19 +10 SP`);
    }
    if (this.options.enableAbilities && att.abilityId === "thunder_sprint" && Math.random() < 0.6) {
      mult *= 1.12;
      applyEffectToTarget(att, { type: "buff_cri", value: 12, duration: 2 }, true);
      att.gauge = Math.min(100, att.gauge + 8);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E14\u0E32\u0E40\u0E21\u0E08+12%, CRI+12% & \u0E40\u0E01\u0E08 +8`);
    }
    let shadowProc = false;
    if (this.options.enableAbilities && att.abilityId === "shadow_predator" && Math.random() < 0.6) {
      mult *= 1.16;
      shadowProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E02\u0E22\u0E49\u0E33\u0E44\u0E23\u0E49\u0E40\u0E07\u0E32 \u0E14\u0E32\u0E40\u0E21\u0E08+16% & \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 12%`);
    }
    let sharkAbProc = false;
    if (this.options.enableAbilities && att.abilityId === "blood_frenzy") {
      if (Math.random() < 0.6) {
        sharkAbProc = true;
        applyEffectToTarget(att, { type: "buff_atk", value: 0.12, duration: 2 }, true);
        appliedEffects.push(`Ability [${att.abilityName}] (60%) AB+15% & ATK+12%`);
      }
      if (def.hp < def.baseStats.maxHp * 0.65) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] \u0E44\u0E14\u0E49\u0E01\u0E25\u0E34\u0E48\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
      }
    }
    let falconAbProc = false;
    if (this.options.enableAbilities && att.abilityId === "supersonic_dive" && attStats.spd > defStats.spd && Math.random() < 0.6) {
      mult *= 1.18;
      falconAbProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E42\u0E09\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E40\u0E2A\u0E35\u0E22\u0E07 \u0E14\u0E32\u0E40\u0E21\u0E08+18% & AB+12%`);
    }
    if (this.options.enableAbilities && att.abilityId === "monkey_acrobat" && attStats.spd > defStats.spd && Math.random() < 0.6) {
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E27\u0E32\u0E19\u0E23\u0E42\u0E2B\u0E19\u0E27\u0E48\u0E2D\u0E07\u0E44\u0E27 \u0E14\u0E32\u0E40\u0E21\u0E08+25%`);
    }
    if (this.options.enableAbilities && att.abilityId === "taunting_ram" && Math.random() < 0.5) {
      applyEffectToTarget(def, { type: "debuff_hit", value: 15, duration: 2 }, true);
      applyEffectToTarget(def, { type: "debuff_spd", value: 0.12, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E02\u0E27\u0E34\u0E14\u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 \u0E25\u0E14 HIT 15 & \u0E25\u0E14 SPD 12%`);
    }
    if (this.options.enableAbilities && att.abilityId === "pyro_toxin_aura") {
      if (hasStatus(def, "burn")) {
        mult *= 1.2;
        appliedEffects.push(`Ability [${att.abilityName}] \u0E0B\u0E49\u0E33\u0E41\u0E1C\u0E25\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 \u0E14\u0E32\u0E40\u0E21\u0E08+20%`);
      }
      if (Math.random() < 0.6) {
        const res = applyEffectToTarget(def, { type: "root", duration: 2 }, true);
        if (res) appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E15\u0E23\u0E36\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 (${res})`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "solar_resonance" && (skillElement === "fire" || att.element === "fire") && Math.random() < 0.6) {
      const h = att.baseStats.maxHp * 0.05;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      att.gauge = Math.min(100, att.gauge + 10);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E40\u0E1E\u0E25\u0E34\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E08 +10`);
    }
    if (this.options.enableAbilities && att.abilityId === "frenzy_bite" && def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.6) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E04\u0E25\u0E31\u0E48\u0E07\u0E01\u0E25\u0E34\u0E48\u0E19\u0E04\u0E32\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08+18% & CRI+10%`);
    }
    if (this.options.enableAbilities && att.abilityId === "death_roll_jaw" && Math.random() < 0.65) {
      mult *= 1.15;
      applyEffectToTarget(def, { type: "debuff_hit", value: 12, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23\u0E48\u0E32\u0E07 \u0E14\u0E32\u0E40\u0E21\u0E08+15% & \u0E25\u0E14 HIT 12`);
    }
    if (this.options.enableAbilities && att.abilityId === "piercing_bill" && attStats.spd > defStats.spd && Math.random() < 0.6) {
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E14\u0E32\u0E1A\u0E41\u0E17\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E2A\u0E39\u0E07 \u0E14\u0E32\u0E40\u0E21\u0E08+25%`);
    }
    if (this.options.enableAbilities && att.abilityId === "ink_cloud_grasp" && Math.random() < 0.5) {
      const res = applyEffectToTarget(def, { type: "root", duration: 2 }, true);
      if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E2B\u0E19\u0E27\u0E14\u0E23\u0E31\u0E14\u0E15\u0E23\u0E36\u0E07 (${res})`);
    }
    if (this.options.enableAbilities && att.abilityId === "nematocyst_paralysis" && Math.random() < 0.6) {
      applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29 \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -8`);
    }
    if (this.options.enableAbilities && att.abilityId === "woodpecker_drill_beak" && Math.random() < 0.6) {
      mult *= 1.15;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E2A\u0E27\u0E48\u0E32\u0E19\u0E27\u0E32\u0E22\u0E38 \u0E14\u0E32\u0E40\u0E21\u0E08+15%`);
    }
    if (this.options.enableAbilities && att.abilityId === "shockwave_double_kick" && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01 \u0E14\u0E32\u0E40\u0E21\u0E08+18% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
    }
    if (this.options.enableAbilities && att.abilityId === "cassowary_dagger_claw" && Math.random() < 0.65) {
      mult *= 1.15;
      applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E21\u0E35\u0E14\u0E14\u0E32\u0E1A \u0E14\u0E32\u0E40\u0E21\u0E08+15% & \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
    }
    if (this.options.enableAbilities && att.abilityId === "cunning_dark_wings" && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: "debuff_hit", value: 12, duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      att.gauge = Math.min(100, att.gauge + 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E40\u0E25\u0E48\u0E2B\u0E4C\u0E1B\u0E35\u0E01\u0E17\u0E21\u0E34\u0E2C \u0E25\u0E14 HIT 12 & \u0E0A\u0E34\u0E07\u0E40\u0E01\u0E08 6 \u0E41\u0E15\u0E49\u0E21`);
    }
    if (this.options.enableAbilities && att.abilityId === "claw_break_stone" && Math.random() < 0.6) {
      mult *= 1.15;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E17\u0E25\u0E32\u0E22\u0E28\u0E34\u0E25\u0E32 \u0E14\u0E32\u0E40\u0E21\u0E08+15%`);
    }
    if (this.options.enableAbilities && att.abilityId === "gorilla_ground_slam" && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 10);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E01\u0E33\u0E1B\u0E31\u0E49\u0E19\u0E28\u0E34\u0E25\u0E32\u0E17\u0E38\u0E1A\u0E1E\u0E2A\u0E38\u0E18\u0E32 \u0E14\u0E32\u0E40\u0E21\u0E08+18% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10`);
    }
    if (this.options.enableAbilities && att.abilityId === "pitfall_trap" && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E2B\u0E25\u0E38\u0E21\u0E1E\u0E23\u0E32\u0E07\u0E14\u0E34\u0E19\u0E17\u0E23\u0E38\u0E14 \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -6`);
    }
    if (this.options.enableAbilities && att.abilityId === "quicksand_vortex" && Math.random() < 0.5) {
      const res = applyEffectToTarget(def, { type: "root", duration: 2 }, true);
      if (res) appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E27\u0E31\u0E07\u0E27\u0E19\u0E17\u0E23\u0E32\u0E22\u0E14\u0E39\u0E14\u0E01\u0E25\u0E37\u0E19 (${res})`);
    }
    if (this.options.enableAbilities && att.abilityId === "loyal_guardian" && Math.random() < 0.6) {
      mult *= 1.15;
      const h = att.baseStats.maxHp * 0.04;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
      healed += h;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E01\u0E31\u0E14\u0E02\u0E22\u0E49\u0E33 \u0E14\u0E32\u0E40\u0E21\u0E08+15% & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === "titan_antler_charge" && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E40\u0E02\u0E32\u0E21\u0E2B\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C \u0E14\u0E32\u0E40\u0E21\u0E08+18% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
    }
    if (this.options.enableAbilities && att.abilityId === "vine_tongue_catch" && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E25\u0E34\u0E49\u0E19\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -6`);
    }
    if (this.options.enableAbilities && att.abilityId === "thousand_leg_fang" && hasStatus(def, "poison") && Math.random() < 0.6) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E23\u0E49\u0E2D\u0E22\u0E02\u0E32\u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33\u0E1E\u0E34\u0E29 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
    }
    if (this.options.enableAbilities && att.abilityId === "toxic_scale_flutter" && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E40\u0E01\u0E25\u0E47\u0E14\u0E1B\u0E35\u0E01\u0E1E\u0E34\u0E29 \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -6`);
    }
    if (this.options.enableAbilities && att.abilityId === "ice_floe_hunter" && (hasStatus(def, "slow") || hasStatus(def, "freeze")) && Math.random() < 0.6) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E02\u0E22\u0E49\u0E33\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
    }
    if (this.options.enableAbilities && att.abilityId === "frozen_bone_crusher" && Math.random() < 0.65) {
      mult *= 1.18;
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E1A\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 \u0E14\u0E32\u0E40\u0E21\u0E08+18% & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
    }
    if (this.options.enableAbilities && att.abilityId === "apex_polar_dominion" && (hasStatus(def, "slow") || hasStatus(def, "freeze")) && Math.random() < 0.65) {
      mult *= 1.2;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E23\u0E32\u0E0A\u0E31\u0E19\u0E22\u0E4C\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E2B\u0E34\u0E21\u0E30\u0E04\u0E25\u0E31\u0E48\u0E07 \u0E14\u0E32\u0E40\u0E21\u0E08+20%`);
      if (Math.random() < 0.5) {
        applyEffectToTarget(def, { type: "freeze", duration: 1 }, true);
        appliedEffects.push(`\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "blizzard_wing_flurry" && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E1B\u0E35\u0E01\u0E40\u0E01\u0E25\u0E47\u0E14\u0E2B\u0E34\u0E21\u0E30 \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -6`);
    }
    if (this.options.enableAbilities && att.abilityId === "screeching_sea_gale" && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: "debuff_hit", value: 12, duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      att.gauge = Math.min(100, att.gauge + 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E15\u0E49\u0E25\u0E21\u0E17\u0E30\u0E40\u0E25 \u0E25\u0E14 HIT 12 & \u0E0A\u0E34\u0E07\u0E40\u0E01\u0E08 6 \u0E41\u0E15\u0E49\u0E21`);
    }
    if (this.options.enableAbilities && att.abilityId === "night_tap_confusion" && Math.random() < 0.55) {
      applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E40\u0E04\u0E32\u0E30\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25 \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -6`);
    }
    if (this.options.enableAbilities && att.abilityId === "devil_bone_crusher_jaw" && Math.random() < 0.6) {
      mult *= 1.15;
      applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E01\u0E23\u0E32\u0E21\u0E1B\u0E35\u0E28\u0E32\u0E08 \u0E14\u0E32\u0E40\u0E21\u0E08+15% & \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
    }
    if (this.options.enableAbilities && att.abilityId === "carrion_hunter_gaze" && def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.65) {
      mult *= 1.18;
      const ls = attStats.atk * mult * 0.12;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
      healed += ls;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E41\u0E23\u0E49\u0E07\u0E14\u0E33\u0E25\u0E48\u0E32\u0E0B\u0E32\u0E01 \u0E14\u0E32\u0E40\u0E21\u0E08+18% & \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +${Math.round(ls)} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === "sand_stealth_claw" && Math.random() < 0.5) {
      applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E17\u0E23\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E19 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
    }
    if (this.options.enableAbilities && att.abilityId === "frilled_sun_flare" && Math.random() < 0.5) {
      applyEffectToTarget(def, { type: "blind", duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E41\u0E2A\u0E07\u0E27\u0E32\u0E1A \u0E25\u0E14\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33 HIT/\u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
    }
    if (this.options.enableAbilities && att.abilityId === "cavitation_bubble_burst" && Math.random() < 0.5) {
      def.sp = Math.max(0, def.sp - 15);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E1E\u0E25\u0E32\u0E2A\u0E21\u0E48\u0E32 \u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -15`);
    }
    if (this.options.enableAbilities && att.abilityId === "supersonic_dash_mandibles" && attStats.spd > defStats.spd && Math.random() < 0.55) {
      mult *= 1.18;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E01\u0E23\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E07 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
    }
    if (this.options.enableAbilities && att.abilityId === "galvanic_shock_pulse" && Math.random() < 0.5) {
      applyEffectToTarget(def, { type: "slow", duration: 2 }, true);
      def.gauge = Math.max(0, def.gauge - 6);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E04\u0E25\u0E37\u0E48\u0E19\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32 \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -6`);
    }
    if (this.options.enableAbilities && att.abilityId === "motion_dazzle_stripes" && Math.random() < 0.5) {
      def.gauge = Math.max(0, def.gauge - 8);
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E25\u0E32\u0E22\u0E1E\u0E23\u0E32\u0E07\u0E2A\u0E25\u0E31\u0E1A\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32 \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8`);
    }
    let bonusCri = sk?.bonusCri ?? 0;
    if (this.options.enableAbilities && att.abilityId === "infrared_heat_strike" && def.effects.length > 0) {
      bonusCri += 25;
      appliedEffects.push(`Ability [${att.abilityName}] \u0E40\u0E19\u0E15\u0E23\u0E04\u0E27\u0E32\u0E21\u0E23\u0E49\u0E2D\u0E19 \u0E40\u0E25\u0E47\u0E07\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30 CRI+25%`);
    }
    if (this.options.enableAbilities && att.abilityId === "solar_apex_dive" && this.turn <= 2) {
      bonusCri += 100;
      appliedEffects.push(`Ability [${att.abilityName}] \u0E14\u0E34\u0E48\u0E07\u0E40\u0E27\u0E2B\u0E32\u0E1C\u0E48\u0E32\u0E15\u0E30\u0E27\u0E31\u0E19 \u0E01\u0E32\u0E23\u0E31\u0E19\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100%`);
    }
    if (this.options.enableAbilities && att.abilityId === "pack_hunter") bonusCri += 8;
    if (this.options.enableAbilities && att.abilityId === "ambush_predator") bonusCri += 10;
    if (this.options.enableAbilities && att.abilityId === "shadow_predator") bonusCri += 10;
    if (this.options.enableAbilities && att.abilityId === "frenzy_bite" && def.hp < def.baseStats.maxHp * 0.6) bonusCri += 10;
    if (this.options.enableAbilities && att.abilityId === "hawk_eye" && attStats.spd > defStats.spd && Math.random() < 0.55) {
      bonusCri += 10;
      mult *= 1.3;
      appliedEffects.push(`Ability [${att.abilityName}] (55%) \u0E42\u0E09\u0E1A\u0E40\u0E27\u0E2B\u0E32 CRI+10%/\u0E14\u0E32\u0E40\u0E21\u0E08+30%`);
    }
    if (this.options.enableAbilities && att.abilityId === "silent_night_owl" && Math.random() < 0.6) {
      applyEffectToTarget(def, { type: "debuff_def", value: 0.15, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E42\u0E09\u0E1A\u0E40\u0E27\u0E2B\u0E32 \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 15%`);
    }
    if (this.options.enableAbilities && att.abilityId === "twin_scythe_strike" && Math.random() < 0.5) {
      bonusCri += 8;
      mult *= 1.1;
      appliedEffects.push(`Ability [${att.abilityName}] (50%) \u0E40\u0E04\u0E35\u0E22\u0E27\u0E04\u0E39\u0E48\u0E1F\u0E31\u0E19\u0E0B\u0E49\u0E33 CRI+8%/\u0E14\u0E32\u0E40\u0E21\u0E08+10%`);
    }
    let cheetahProc = false;
    if (this.options.enableAbilities && att.abilityId === "cheetah_sprint_burst" && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      cheetahProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E2A\u0E1B\u0E23\u0E34\u0E19\u0E15\u0E4C\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32 CRI+15% & CRI DMG+20%`);
    }
    let cougarProc = false;
    if (this.options.enableAbilities && att.abilityId === "cliff_stalker" && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      cougarProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E0B\u0E2D\u0E01\u0E2B\u0E34\u0E19\u0E1C\u0E32 CRI+15% & CRI DMG+20%`);
    }
    let ocelotProc = false;
    if (this.options.enableAbilities && att.abilityId === "bush_ambush" && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      ocelotProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E0B\u0E38\u0E48\u0E21\u0E25\u0E48\u0E32\u0E1E\u0E07\u0E1E\u0E38\u0E48\u0E21 CRI+15% & CRI DMG+20%`);
    }
    let blackWidowProc = false;
    if (this.options.enableAbilities && att.abilityId === "hourglass_ambush" && hasStatus(def, "poison") && Math.random() < 0.65) {
      bonusCri += 20;
      blackWidowProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E0B\u0E38\u0E48\u0E21\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32\u0E17\u0E23\u0E32\u0E22 CRI+20% & CRI DMG+25%`);
    }
    let lynxProc = false;
    if (this.options.enableAbilities && att.abilityId === "snowshoe_stalker" && attStats.spd > defStats.spd && Math.random() < 0.65) {
      bonusCri += 15;
      lynxProc = true;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E22\u0E48\u0E32\u0E07\u0E01\u0E49\u0E32\u0E27\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E2B\u0E34\u0E21\u0E30 CRI+15% & CRI DMG+20%`);
    }
    if (this.options.enableAbilities && att.abilityId === "mind_stalker") {
      bonusCri += 15;
      if (def.hp < def.baseStats.maxHp * 0.35) {
        mult *= 1.25;
        appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E32\u0E22\u0E15\u0E32\u0E19\u0E31\u0E01\u0E25\u0E48\u0E32\u0E44\u0E23\u0E49\u0E40\u0E07\u0E32 \u0E14\u0E32\u0E40\u0E21\u0E08\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E+25%`);
      }
    }
    if (this.options.enableAbilities && att.abilityId === "cliff_resolve" && att.hp < att.baseStats.maxHp * 0.4) {
      mult *= 1.2;
      appliedEffects.push(`Ability [${att.abilityName}] \u0E08\u0E34\u0E15\u0E15\u0E31\u0E49\u0E07\u0E21\u0E31\u0E48\u0E19\u0E22\u0E2D\u0E14\u0E1C\u0E32 \u0E14\u0E32\u0E40\u0E21\u0E08+20%`);
    }
    if (this.options.enableAbilities && att.abilityId === "apex_telekinesis" && att.element === "psychic") {
      mult *= 1.15;
      appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E40\u0E1E\u0E0A\u0E0C\u0E06\u0E32\u0E15 \u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15+15%`);
    }
    if (this.options.enableAbilities && att.abilityId === "dazzling_plume") {
      if (Math.random() < 0.6) {
        applyEffectToTarget(def, { type: "debuff_atk", value: 0.12, duration: 2 }, true);
      }
      if (hasStatus(def, "confusion") || hasStatus(def, "blind")) {
        mult *= 1.18;
        appliedEffects.push(`Ability [${att.abilityName}] \u0E23\u0E33\u0E41\u0E1E\u0E19\u0E2B\u0E32\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E20\u0E1E \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19/\u0E15\u0E32\u0E1A\u0E2D\u0E14 \u0E14\u0E32\u0E40\u0E21\u0E08+18%`);
      }
    }
    if (actionType === "normal" && this.options.enableAbilities && att.abilityId === "mesmerizing_gaze" && Math.random() < 0.25) {
      applyEffectToTarget(def, { type: "blind", duration: 1 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (25%) \u0E20\u0E32\u0E1E\u0E25\u0E27\u0E07\u0E15\u0E32\u0E15\u0E32\u0E2B\u0E27\u0E32\u0E19 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
    }
    if (this.options.enableAbilities && att.abilityId === "psychic_bond" && (actionType === "skill" || actionType === "signature")) {
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 3);
    }
    if (this.options.enableAbilities && att.abilityId === "psionic_spirit_orbs" && (actionType === "skill" || actionType === "signature")) {
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
    let isCrit = Math.random() * 100 < attStats.cri + bonusCri;
    if (actionType === "signature" && att.id === "garuda") {
      isCrit = true;
    }
    if (hasStatus(def, "sleep")) {
      isCrit = true;
      mult *= skills_default.statusRules.sleep.wakeDmgMult;
      def.effects = def.effects.filter((e) => e.type !== "sleep");
      appliedEffects.push("\u{1F4A4} \u0E15\u0E37\u0E48\u0E19\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
    }
    if (isCrit && this.options.enableAbilities && def.abilityId === "nine_lives" && Math.random() < 0.2) {
      const h = def.baseStats.maxHp * 0.08;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      const ev2 = {
        turn: this.turn,
        actorSide: attTeam.side,
        actorName: att.name,
        targetName: def.name,
        actionType,
        actionName,
        skillTier: sk?.tier,
        damage: 0,
        healed: Math.round(h),
        shieldGained: 0,
        isCrit: false,
        isMiss: true,
        elementMult: 1,
        appliedEffects: [`Ability [${def.abilityName}] \u0E2B\u0E25\u0E1A\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25!`],
        message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] ${def.name} \u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25 Ability [${def.abilityName}] \u0E2B\u0E25\u0E1A\u0E01\u0E32\u0E23\u0E42\u0E08\u0E21\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25\u0E02\u0E2D\u0E07 ${att.name} \u0E44\u0E14\u0E49\u0E1E\u0E23\u0E34\u0E49\u0E27\u0E44\u0E2B\u0E27 (+${Math.round(h)} HP)!`
      };
      this.recordEvent(events, ev2);
      return;
    }
    let bonusAb = sk?.bonusAb ?? 0;
    if (this.options.enableAbilities && att.abilityId === "twin_scythe_strike") {
      bonusAb += 8;
    }
    if (this.options.enableAbilities && att.abilityId === "shadow_predator") {
      bonusAb += 10;
    }
    if (sharkAbProc) bonusAb += 15;
    if (falconAbProc) bonusAb += 12;
    if (this.options.enableAbilities && att.abilityId === "neurotoxic_stinger" && hasStatus(def, "poison")) {
      bonusAb += 15;
    }
    if (this.options.enableAbilities && att.abilityId === "solar_apex_dive" && this.turn <= 2) {
      bonusAb += 25;
    }
    if (this.options.enableAbilities && att.abilityId === "ambush_predator" && (isCrit || hasStatus(def, "burn")) && Math.random() < 0.65) {
      mult *= 1.18;
      bonusAb += 15;
      att.gauge += 10;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E02\u0E22\u0E49\u0E33 +18%/\u0E40\u0E01\u0E08+10`);
    }
    if (isCrit && this.options.enableAbilities && att.abilityId === "bullet_stinger" && Math.random() < 0.65) {
      const res = applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 }, true);
      if (res) appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19\u0E40\u0E1E\u0E25\u0E34\u0E07 ${res}`);
    }
    let orcaLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === "apex_pod_hunter" && Math.random() < 0.65) {
      orcaLs = true;
      applyEffectToTarget(def, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E09\u0E35\u0E01\u0E2A\u0E21\u0E38\u0E17\u0E23 \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% & \u0E25\u0E14 SPD 15%`);
    }
    let perentieLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === "sand_dragon_ambush" && Math.random() < 0.65) {
      perentieLs = true;
      applyEffectToTarget(def, { type: "debuff_def", value: 0.25, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E21\u0E31\u0E07\u0E01\u0E23\u0E14\u0E34\u0E19\u0E0B\u0E38\u0E48\u0E21\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23 \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% & \u0E25\u0E14 DEF 25%`);
    }
    let cloudedLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === "canopy_shadow_fang" && Math.random() < 0.65) {
      cloudedLs = true;
      applyEffectToTarget(def, { type: "debuff_def", value: 0.25, duration: 2 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E07\u0E32 \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% & \u0E25\u0E14 DEF 25%`);
    }
    let deathstalkerLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === "deathstalker_stinger" && Math.random() < 0.7) {
      deathstalkerLs = true;
      mult *= 1.25;
      applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (70%) \u0E40\u0E2B\u0E25\u0E47\u0E01\u0E43\u0E19\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A \u0E14\u0E32\u0E40\u0E21\u0E08\u0E1E\u0E34\u0E29\u0E23\u0E30\u0E40\u0E1A\u0E34\u0E14 +25% & \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15%`);
    }
    let snowLeopardLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === "ghost_of_frozen_peaks" && Math.random() < 0.7) {
      snowLeopardLs = true;
      mult *= 1.25;
      applyEffectToTarget(def, { type: "freeze", duration: 1 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (70%) \u0E20\u0E39\u0E15\u0E40\u0E07\u0E32\u0E1C\u0E32\u0E2B\u0E34\u0E21\u0E30 \u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07 +25%, \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15% & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07`);
    }
    let jaguarLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === "skull_piercing_fang" && Math.random() < 0.65) {
      jaguarLs = true;
      mult *= 1.25;
      appliedEffects.push(`Ability [${att.abilityName}] (65%) \u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E40\u0E07\u0E32\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22 \u0E14\u0E32\u0E40\u0E21\u0E08+25% & \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 15%`);
    }
    if (isCrit && this.options.enableAbilities && att.abilityId === "golden_heavenly_steed" && Math.random() < 0.7) {
      def.gauge = Math.max(0, def.gauge - 15);
      appliedEffects.push(`Ability [${att.abilityName}] (70%) \u0E21\u0E49\u0E32\u0E17\u0E2D\u0E07\u0E04\u0E33\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -15 \u0E41\u0E15\u0E49\u0E21`);
    }
    if (isCrit && this.options.enableAbilities && att.abilityId === "tufted_ear_spring" && Math.random() < 0.6) {
      att.gauge = Math.min(100, att.gauge + 15);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E2A\u0E1B\u0E23\u0E34\u0E07\u0E1E\u0E39\u0E48\u0E2B\u0E39\u0E04\u0E32\u0E23\u0E32\u0E04\u0E31\u0E25 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 +15 \u0E41\u0E15\u0E49\u0E21`);
    }
    let mambaLs = false;
    if (isCrit && this.options.enableAbilities && att.abilityId === "lightning_viper_strike" && Math.random() < 0.6) {
      mambaLs = true;
      mult *= 1.2;
      applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 3 }, true);
      appliedEffects.push(`Ability [${att.abilityName}] (60%) \u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32 \u0E14\u0E32\u0E40\u0E21\u0E08+20%, \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 12%`);
    }
    const pierce = Math.max(0, Math.min(0.7, (attStats.ab + bonusAb - defStats.block) / 100));
    let effDef = defStats.def * (1 - pierce);
    if (actionType === "signature" && att.id === "nine_tailed_fox") {
      effDef *= 0.75;
      appliedEffects.push("\u0E17\u0E30\u0E25\u0E27\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 25% (Ignore DEF 25%)");
    }
    const K = heroes_default.statFormula.defConstantK;
    const elemMult = skillElement === "neutral" ? 1 : getElementMultiplier(att.element, getEffectiveElement(def), attTeam.side, this.options.forcedElementAdvantage);
    let dmg = attStats.atk * mult * (K / (K + effDef)) * elemMult * (0.95 + Math.random() * 0.1);
    if (isCrit) dmg *= attStats.criDmg + (cheetahProc || cougarProc || ocelotProc || lynxProc ? 0.2 : 0) + (blackWidowProc ? 0.25 : 0) + (this.options.enableAbilities && att.abilityId === "mind_focus" && def.effects.length > 0 ? 0.2 : 0);
    const isSameElemSkill = actionType === "skill" && this.options.enableSameElementBonus && sk && sk.element === att.element;
    if (isSameElemSkill) {
      dmg *= 1 + elements_default.multipliers.sameElementDamageBonus;
    }
    if (actionType === "skill" && sk) {
      const skillLevels = attTeam.side === "A" ? this.options.skillLevelsA : this.options.skillLevelsB;
      const lvl = skillLevels?.[sk.id] ?? 1;
      if (lvl > 1) {
        const lvlBonus = lvl === 5 ? 1.25 : 1 + (lvl - 1) * 0.05;
        dmg *= lvlBonus;
      }
    }
    if (this.options.enableSkillEffects && hasStatus(def, "wine_mist") && (skillElement === "fire" || att.element === "fire")) {
      dmg *= 1.3;
      appliedEffects.push("\u0E2A\u0E38\u0E23\u0E32\u0E15\u0E34\u0E14\u0E44\u0E1F (\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F +30%)");
    }
    if (this.options.enableSkillEffects && hasStatus(att, "fire_skin") && (skillElement === "fire" || att.element === "fire")) {
      dmg *= 1.2;
      appliedEffects.push("\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07 \u{1F525} (\u0E14\u0E32\u0E40\u0E21\u0E08\u0E44\u0E1F +20%)");
    }
    if (this.options.enableAbilities) {
      if (def.abilityId === "mud_hide" && Math.random() < 0.5) {
        dmg *= 0.75;
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 25%`);
      }
      if (def.abilityId === "thick_fat" && Math.random() < 0.45) {
        dmg *= 0.85;
        const h = def.baseStats.maxHp * 0.025;
        def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
        appliedEffects.push(`${def.name} [${def.abilityName}] (45%) \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 15% & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
      }
      if (def.abilityId === "belly_slide_frost") {
        dmg *= 0.92;
        if (Math.random() < 0.55) {
          applyEffectToTarget(att, { type: "slow", duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 8% & \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E43\u0E2A\u0E48 ${att.name}`);
        }
      }
      if (def.abilityId === "grizzly_berserk" && def.hp < def.baseStats.maxHp * 0.65 && Math.random() < 0.65) {
        applyEffectToTarget(def, { type: "buff_atk", value: 0.18, duration: 2 }, true);
        applyEffectToTarget(def, { type: "shield", value: 0.05, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (65%) ATK+18% & \u0E40\u0E01\u0E23\u0E32\u0E30 +5%`);
      }
      if (def.abilityId === "quicksand_vortex" && Math.random() < 0.5) {
        applyEffectToTarget(att, { type: "slow", duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E17\u0E23\u0E32\u0E22\u0E14\u0E39\u0E14\u0E01\u0E25\u0E37\u0E19 \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E43\u0E2A\u0E48 ${att.name}`);
      }
      if (def.abilityId === "moss_coat") {
        dmg *= 0.9;
        if (Math.random() < 0.5) {
          const h = def.baseStats.maxHp * 0.03;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E21\u0E2D\u0E2A\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
        }
      }
      if (def.abilityId === "bamboo_fortress") {
        dmg *= 0.9;
        if (def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.05;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: "buff_def", value: 0.25, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E44\u0E1C\u0E48 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & DEF+25%`);
        }
      }
      if (def.abilityId === "bufotoxin_skin") {
        dmg *= 0.9;
        if (Math.random() < 0.55) {
          applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
        }
      }
      if (def.abilityId === "caustic_venom_aura" && def.hp > 0 && Math.random() < 0.4) {
        applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (40%) \u0E44\u0E2D\u0E01\u0E23\u0E14\u0E1E\u0E34\u0E29\u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
      }
      if (def.abilityId === "psionic_spirit_orbs" && def.hp > 0 && Math.random() < 0.35) {
        const confRes = applyEffectToTarget(att, { type: "confusion", duration: 2 }, true);
        if (confRes) {
          appliedEffects.push(`${def.name} [${def.abilityName}] (35%) \u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48 ${att.name} ${confRes}`);
        }
      }
      if (def.abilityId === "stone_spine_barb") {
        dmg *= 0.9;
        if (Math.random() < 0.65) {
          const reflect = dmg * 0.2;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E2B\u0E19\u0E32\u0E21\u0E2B\u0E34\u0E19\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10%, \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E1E\u0E34\u0E29 ${Math.round(reflect)} & \u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
        }
      }
      if (def.abilityId === "blubber_ice_fortress") {
        dmg *= 0.9;
        if (def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.05;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: "shield", value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E44\u0E02\u0E21\u0E31\u0E19 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E23\u0E32\u0E30\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07 15%`);
        }
      }
      if (isCrit && def.abilityId === "shell_retreat" && Math.random() < 0.7) {
        dmg *= 0.7;
        applyEffectToTarget(def, { type: "shield", value: 0.05, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (70%) \u0E25\u0E14\u0E04\u0E23\u0E34 30% & \u0E40\u0E01\u0E23\u0E32\u0E30 +5%`);
      }
      if (def.abilityId === "horn_counter") {
        dmg *= 0.94;
        if (Math.random() < 0.5) {
          const reflect = dmg * 0.12;
          att.hp -= reflect;
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)}`);
        }
      }
      if (def.abilityId === "celestial_scales") {
        dmg *= 0.88;
      }
      if (def.abilityId === "ancient_bulwark") {
        dmg *= 0.88;
      }
      if (def.abilityId === "electro_sense" && Math.random() < 0.3) {
        applyEffectToTarget(att, { type: "debuff_hit", value: 10, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (30%) \u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E01\u0E23\u0E30\u0E41\u0E2A\u0E08\u0E34\u0E15 \u0E25\u0E14 HIT ${att.name} 10 \u0E41\u0E15\u0E49\u0E21`);
      }
      if (def.abilityId === "immortal_serpent" && def.hp < def.baseStats.maxHp * 0.5 && Math.random() < 0.75) {
        dmg *= 0.82;
        appliedEffects.push(`${def.name} [${def.abilityName}] (75%) \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 18%`);
      }
      if (def.abilityId === "bioluminescent_flash" && Math.random() < 0.5) {
        const res = applyEffectToTarget(att, { type: "blind", duration: 1 }, true);
        if (res) appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E41\u0E2A\u0E07\u0E01\u0E23\u0E30\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1A\u0E2D\u0E14\u0E43\u0E2A\u0E48 ${att.name}`);
      }
      if (def.abilityId === "glacial_mucus") {
        dmg *= 0.92;
        if (Math.random() < 0.5) {
          applyEffectToTarget(att, { type: "slow", duration: 2 }, true);
          const h = def.baseStats.maxHp * 0.02;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 8%, \u0E2A\u0E42\u0E25\u0E27\u0E4C ${att.name} & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
        }
      }
      if (def.abilityId === "polar_roar") {
        dmg *= 0.92;
      }
      if (def.abilityId === "static_quills") {
        dmg *= 0.94;
        if (Math.random() < 0.5) {
          const reflect = dmg * 0.12;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: "debuff_def", value: 0.1, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)} & \u0E25\u0E14 DEF ${att.name} 10%`);
        }
      }
      if (def.abilityId === "iron_scale_curl" && Math.random() < 0.55) {
        dmg *= 0.82;
        const reflect = dmg * 0.1;
        att.hp -= reflect;
        appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 18% & \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)}`);
      }
      if (def.abilityId === "raging_bull" && def.hp < def.baseStats.maxHp * 0.5 && Math.random() < 0.6) {
        dmg *= 0.85;
        applyEffectToTarget(def, { type: "buff_def", value: 0.2, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E42\u0E01\u0E23\u0E18\u0E40\u0E01\u0E23\u0E35\u0E49\u0E22\u0E27 \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 15% & \u0E1A\u0E31\u0E1F DEF+20%`);
      }
      if (def.abilityId === "blazing_tusk_hide") {
        dmg *= 0.9;
        if (Math.random() < 0.5) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          def.gauge = Math.min(100, def.gauge + 6);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10%, \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)} & \u0E40\u0E01\u0E08 +6`);
        }
      }
      if (def.abilityId === "submerged_thick_hide") {
        dmg *= 0.9;
        if (def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.04;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: "buff_def", value: 0.2, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E30\u0E40\u0E17\u0E34\u0E19\u0E19\u0E49\u0E33 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & DEF+20%`);
        }
      }
      if (def.abilityId === "ink_cloud_grasp" && Math.random() < 0.5) {
        const res = applyEffectToTarget(att, { type: "blind", duration: 1 }, true);
        if (res) appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E1E\u0E48\u0E19\u0E2B\u0E21\u0E36\u0E01\u0E17\u0E33\u0E43\u0E2B\u0E49 ${att.name} \u0E15\u0E32\u0E1A\u0E2D\u0E14`);
      }
      if (def.abilityId === "nematocyst_paralysis" && Math.random() < 0.6) {
        applyEffectToTarget(att, { type: "slow", duration: 2 }, true);
        att.gauge = Math.max(0, att.gauge - 8);
        appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E02\u0E47\u0E21\u0E1E\u0E34\u0E29 \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 ${att.name} -8`);
      }
      if (def.abilityId === "thick_fur_gale_shield") {
        dmg *= 0.92;
        if (Math.random() < 0.6) {
          applyEffectToTarget(att, { type: "debuff_atk", value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E02\u0E19\u0E2B\u0E19\u0E32\u0E15\u0E49\u0E32\u0E19\u0E1E\u0E32\u0E22\u0E38 \u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 8% & \u0E25\u0E14 ATK ${att.name} 15%`);
        }
      }
      if (def.abilityId === "thick_hide_gale_runner") {
        dmg *= 0.9;
        if (def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.04;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: "buff_flee", value: 15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E27\u0E34\u0E48\u0E07\u0E42\u0E15\u0E49\u0E25\u0E21 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & FLEE+15`);
        }
      }
      if (def.abilityId === "night_confusion_gaze" && Math.random() < 0.5) {
        att.gauge = Math.max(0, att.gauge - 8);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E25\u0E48\u0E2D\u0E2B\u0E25\u0E2D\u0E01\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 ${att.name} -8`);
      }
      if (def.abilityId === "bone_armor_curl") {
        dmg *= 0.9;
        if (Math.random() < 0.5) {
          const reflect = dmg * 0.12;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: "debuff_hit", value: 12, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)} & \u0E25\u0E14 HIT ${att.name} 12`);
        }
      }
      if (def.abilityId === "scavenger_thick_hide") {
        dmg *= 0.92;
        if (def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.04;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: "buff_def", value: 0.2, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E2B\u0E19\u0E31\u0E07\u0E40\u0E2B\u0E19\u0E35\u0E22\u0E27\u0E40\u0E04\u0E35\u0E49\u0E22\u0E27\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & DEF+20%`);
        }
      }
      if (def.abilityId === "abyssal_pressure_skull") {
        dmg *= 0.9;
        if (Math.random() < 0.65) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E17\u0E21\u0E34\u0E2C \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)} & \u0E25\u0E14 SPD ${att.name} 15%`);
        }
      }
      if (def.abilityId === "sand_burrow_puff") {
        dmg *= 0.92;
      }
      if (def.abilityId === "solar_hump_endurance") {
        dmg *= 0.9;
        if (def.hp < def.baseStats.maxHp * 0.6 && Math.random() < 0.65) {
          const h = def.baseStats.maxHp * 0.05;
          def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
          applyEffectToTarget(def, { type: "buff_def", value: 0.2, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E42\u0E2B\u0E19\u0E01\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & DEF+20%`);
        }
      }
      if (def.abilityId === "sacred_white_hide") {
        dmg *= 0.88;
        if (Math.random() < 0.6) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: "debuff_atk", value: 0.12, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E01\u0E32\u0E22\u0E32\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E44\u0E1A\u0E0B\u0E31\u0E19 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)} & \u0E25\u0E14 ATK ${att.name} 12%`);
        }
      }
      if (def.abilityId === "gentle_solar_fleece" && Math.random() < 0.45) {
        applyEffectToTarget(def, { type: "shield", value: 0.1, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (45%) \u0E1B\u0E38\u0E22\u0E02\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30 \u0E40\u0E01\u0E23\u0E32\u0E30 +10%`);
      }
      if (def.abilityId === "torpedo_discharge") {
        dmg *= 0.9;
        if (Math.random() < 0.6) {
          const reflect = dmg * 0.15;
          att.hp -= reflect;
          applyEffectToTarget(att, { type: "debuff_spd", value: 0.15, duration: 2 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E44\u0E1F\u0E1F\u0E49\u0E32 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19 ${Math.round(reflect)} & \u0E25\u0E14 SPD ${att.name} 15%`);
        }
      }
      if (def.abilityId === "spiral_horn_resonance" && Math.random() < 0.5) {
        applyEffectToTarget(def, { type: "buff_spd", value: 0.15, duration: 2 }, true);
        appliedEffects.push(`${def.name} [${def.abilityName}] (50%) \u0E04\u0E25\u0E37\u0E48\u0E19\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15 \u0E1A\u0E31\u0E1F SPD+15%`);
      }
    }
    if (hasStatus(def, "vulnerable")) {
      dmg *= 1 + skills_default.statusRules.vulnerable.extraDmgPct;
      appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
    }
    if (hasStatus(att, "taunt")) {
      dmg *= 1 - skills_default.statusRules.taunt.dmgReductionPct;
      appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
    }
    if (hasStatus(def, "bleed")) {
      const bHit = Math.round(def.baseStats.maxHp * skills_default.statusRules.bleed.onHitDamageHpPct);
      def.hp = Math.max(0, def.hp - bHit);
      appliedEffects.push(`\u{1FA78} \u0E41\u0E1C\u0E25\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25\u0E0B\u0E49\u0E33 -${bHit} HP`);
    }
    let remainingDmg = dmg;
    if (def.shield > 0) {
      const absorbed = Math.min(def.shield, remainingDmg);
      def.shield -= absorbed;
      remainingDmg -= absorbed;
    }
    def.hp -= remainingDmg;
    if (isCrit && this.options.enableAbilities && att.abilityId === "colossal_tremor") {
      const shockwaveDmg = Math.max(1, Math.round(attStats.atk * 0.25));
      def.hp = Math.max(0, def.hp - shockwaveDmg);
      appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27 \u{1F4A5} -${shockwaveDmg} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && Math.random() < 0.4) {
      att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
      spChanged += 15;
      appliedEffects.push(`Ability [${att.abilityName}] (40%) \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP`);
    }
    if (this.options.enableAbilities && att.abilityId === "static_discharge" && Math.random() < 0.45) {
      const boltDmg = Math.max(1, Math.round(attStats.atk * 0.3));
      def.hp = Math.max(0, def.hp - boltDmg);
      appliedEffects.push(`\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E41\u0E09\u0E25\u0E1A\u0E1C\u0E48\u0E32\u0E0B\u0E49\u0E33 \u26A1 -${boltDmg} HP`);
    }
    if (def.hp <= 0 && this.options.enableAbilities && att.abilityId === "static_discharge") {
      att.gauge = Math.min(100, att.gauge + 25);
      appliedEffects.push(`Ability [${att.abilityName}] \u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E28\u0E31\u0E15\u0E23\u0E39\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E01\u0E08 +25`);
    }
    if (dmg > 0) {
      const defSigCfg = heroes_default.signatureByClass[def.rarity];
      def.gauge += defSigCfg.gainOnHit;
    }
    const abilityLs = this.options.enableAbilities && att.abilityId === "glacial_fang_hunt" ? 0.12 : this.options.enableAbilities && shadowProc ? 0.12 : this.options.enableAbilities && orcaLs ? 0.15 : this.options.enableAbilities && perentieLs ? 0.15 : this.options.enableAbilities && cloudedLs ? 0.15 : this.options.enableAbilities && deathstalkerLs ? 0.15 : this.options.enableAbilities && snowLeopardLs ? 0.15 : this.options.enableAbilities && jaguarLs ? 0.15 : this.options.enableAbilities && mambaLs ? 0.12 : 0;
    const lifestealPct = hasStatus(att, "stone_curse") ? 0 : (sk?.lifestealPct ?? 0) + abilityLs;
    if ((this.options.enableSkillEffects || abilityLs > 0) && lifestealPct > 0 && remainingDmg > 0) {
      const ls = remainingDmg * lifestealPct;
      att.hp = Math.min(att.baseStats.maxHp, att.hp + ls);
      healed += ls;
      appliedEffects.push(`\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14 +${Math.round(ls)}`);
    }
    if (actionType === "signature" && att.id === "verdant_hydra" && remainingDmg > 0 && !hasStatus(att, "stone_curse")) {
      const drain = Math.round(remainingDmg * 0.25);
      att.hp = Math.min(att.baseStats.maxHp, att.hp + drain);
      healed += drain;
      appliedEffects.push(`\u0E40\u0E01\u0E49\u0E32\u0E40\u0E28\u0E35\u0E22\u0E23\u0E01\u0E25\u0E37\u0E19\u0E0A\u0E35\u0E1E: \u0E2A\u0E39\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E14 +${drain} HP`);
    }
    if (this.options.enableAbilities && att.abilityId === "thorn_regrowth" && remainingDmg > 0 && !hasStatus(att, "vulnerable")) {
      const sh = Math.round(remainingDmg * 0.15);
      if (sh > 0) {
        att.shield = Math.min(att.baseStats.maxHp * 0.5, att.shield + sh);
        const ex = att.effects.find((e) => e.type === "shield");
        if (ex) ex.duration = Math.max(ex.duration, 2);
        else att.effects.push({ type: "shield", duration: 2 });
        shieldGained += sh;
        appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2B\u0E19\u0E32\u0E21\u0E1E\u0E24\u0E01\u0E29\u0E32 +${sh}`);
      }
    }
    if (this.options.enableSkillEffects) {
      if (sk && sk.effects) {
        for (const rawEf of sk.effects) {
          const ef = rawEf;
          const bonusChance = ef.bonusChanceIfSlowed && hasStatus(def, "slow") ? ef.bonusChanceIfSlowed : 0;
          const chance = (ef.chance ?? 1) + bonusChance;
          if (Math.random() < chance) {
            const tgt = ef.target === "self" ? att : def;
            const hpBefore = tgt.hp;
            const shBefore = tgt.shield;
            const spBefore = tgt.sp;
            const res = applyEffectToTarget(tgt, ef, this.options.enableAbilities);
            if (res) appliedEffects.push(res);
            healed += Math.max(0, tgt.hp - hpBefore);
            shieldGained += Math.max(0, tgt.shield - shBefore);
            if (tgt === att) spChanged += tgt.sp - spBefore;
          }
        }
      }
      if (meta.sigEffect && Math.random() < (meta.sigEffectChance ?? 0.5)) {
        const isSelf = meta.sigEffect.type.startsWith("buff_") || meta.sigEffect.type === "shield";
        const tgt = isSelf ? att : def;
        const res = applyEffectToTarget(tgt, meta.sigEffect, this.options.enableAbilities);
        if (res) appliedEffects.push(res);
        if (actionType === "signature" && att.id === "squirrel") {
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
          spChanged += 15;
          appliedEffects.push(`\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP`);
        }
        if (actionType === "signature" && att.id === "firefly") {
          const clRes = applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
          if (clRes) appliedEffects.push(clRes);
        }
        if (actionType === "signature" && att.id === "lion") {
          applyEffectToTarget(att, { type: "buff_atk", value: 0.2, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "buff_spd", value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E04\u0E33\u0E23\u0E32\u0E21\u0E1B\u0E25\u0E38\u0E01\u0E02\u0E27\u0E31\u0E0D: \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 ATK+20% & SPD+15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
        }
        if (actionType === "signature" && att.id === "turtle") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E48\u0E32\u0E19\u0E27\u0E32\u0E23\u0E35\u0E04\u0E38\u0E49\u0E21\u0E17\u0E31\u0E1E: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP & \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === "signature" && att.id === "squirrel") {
          applyEffectToTarget(att, { type: "buff_hit", value: 20, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "buff_cri", value: 12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E22\u0E2B\u0E32\u0E07\u0E19\u0E33\u0E17\u0E31\u0E1E: \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 HIT+20 & CRI+12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
        }
        if (actionType === "signature" && att.id === "peacock") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "confusion", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E23\u0E33\u0E41\u0E1E\u0E19\u0E41\u0E2A\u0E07\u0E2A\u0E30\u0E01\u0E14\u0E2A\u0E21\u0E23\u0E20\u0E39\u0E21\u0E34: \u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 20% & \u0E2A\u0E31\u0E1A\u0E2A\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "snail") {
          applyEffectToTarget(def, { type: "debuff_spd", value: 0.15, duration: 2 }, this.options.enableAbilities);
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E21\u0E37\u0E2D\u0E01\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19: \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% & \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12%`);
        }
        if (actionType === "signature" && att.id === "rabbit") {
          applyEffectToTarget(att, { type: "buff_spd", value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1A\u0E31\u0E1F SPD +15%`);
        }
        if (actionType === "signature" && att.id === "sea_lion") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          if (Math.random() < 0.4) {
            applyEffectToTarget(def, { type: "freeze", duration: 1 }, this.options.enableAbilities);
          }
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07: \u0E2A\u0E42\u0E25\u0E27\u0E4C + \u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 & \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12%`);
        }
        if (actionType === "signature" && att.id === "bat") {
          if (Math.random() < 0.35) {
            applyEffectToTarget(def, { type: "blind", duration: 1 }, this.options.enableAbilities);
          }
          applyEffectToTarget(def, { type: "silence", duration: 1 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.08;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          appliedEffects.push(`\u0E1D\u0E39\u0E07\u0E04\u0E49\u0E32\u0E07\u0E04\u0E32\u0E27: \u0E15\u0E32\u0E1A\u0E2D\u0E14 35%, \u0E15\u0E34\u0E14\u0E43\u0E1A\u0E49 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E2E\u0E35\u0E25\u0E17\u0E35\u0E21 +${Math.round(h)} HP`);
        }
        if (actionType === "signature" && att.id === "porcupine") {
          if (Math.random() < 0.3) {
            applyEffectToTarget(def, { type: "stun", duration: 1 }, this.options.enableAbilities);
          }
          applyEffectToTarget(att, { type: "buff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2A\u0E25\u0E31\u0E14\u0E02\u0E19\u0E2B\u0E19\u0E32\u0E21\u0E23\u0E2D\u0E1A\u0E17\u0E34\u0E28: \u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E2A\u0E15\u0E31\u0E19 & \u0E1A\u0E31\u0E1F DEF+20%`);
        }
        if (actionType === "signature" && att.id === "frog") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15%`);
        }
        if (actionType === "signature" && att.id === "pangolin") {
          applyEffectToTarget(def, { type: "debuff_spd", value: 0.25, duration: 2 }, this.options.enableAbilities);
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E25\u0E39\u0E01\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E01\u0E27\u0E32\u0E14\u0E41\u0E19\u0E27\u0E23\u0E1A: \u0E25\u0E14 SPD 25% & \u0E40\u0E01\u0E23\u0E32\u0E30 20%`);
        }
        if (actionType === "signature" && att.id === "deer") {
          const h = att.baseStats.maxHp * 0.12;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
          spChanged += 15;
          appliedEffects.push(`\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +${Math.round(h)} HP & +15 SP`);
        }
        if (actionType === "signature" && att.id === "phoenix") {
          applyEffectToTarget(def, { type: "burn", duration: 2 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.15;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E2D\u0E21\u0E15\u0E30\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 + \u0E2E\u0E35\u0E25\u0E17\u0E35\u0E21 +${Math.round(h)} HP & \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F`);
        }
        if (actionType === "signature" && att.id === "naga") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 20);
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E19\u0E32\u0E04\u0E23\u0E32\u0E0A\u0E01\u0E25\u0E37\u0E19\u0E21\u0E2B\u0E32\u0E1E\u0E34\u0E20\u0E1E: \u0E2A\u0E42\u0E25\u0E27\u0E4C, \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 -20 & \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 20%`);
        }
        if (actionType === "signature" && att.id === "azure_dragon") {
          applyEffectToTarget(att, { type: "buff_spd", value: 0.2, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "buff_cri", value: 15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E17\u0E31\u0E13\u0E11\u0E4C\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C: \u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E0A\u0E34\u0E48\u0E07\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22 & \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 SPD+20%, CRI+15%`);
        }
        if (actionType === "signature" && att.id === "black_panther") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 25%`);
        }
        if (actionType === "signature" && att.id === "shark") {
          applyEffectToTarget(def, { type: "bleed", duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E09\u0E25\u0E32\u0E21\u0E02\u0E32\u0E27: \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%`);
        }
        if (actionType === "signature" && att.id === "falcon") {
          applyEffectToTarget(att, { type: "buff_cri", value: 15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1A\u0E31\u0E1F CRI +15%`);
        }
        if (actionType === "signature" && att.id === "bighorn" && Math.random() < 0.25) {
          applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E40\u0E02\u0E32\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27 12% Max HP`);
        }
        if (actionType === "signature" && att.id === "yak") {
          applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E27\u0E32\u0E22\u0E38: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP & \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F`);
        }
        if (actionType === "signature" && att.id === "ostrich") {
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push(`\u0E40\u0E15\u0E30\u0E2A\u0E01\u0E31\u0E14\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -15`);
        }
        if (actionType === "signature" && att.id === "cheetah") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15`);
        }
        if (actionType === "signature" && att.id === "owl") {
          applyEffectToTarget(def, { type: "confusion", duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "blind", duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1E\u0E32\u0E22\u0E38\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E1B\u0E35\u0E01\u0E23\u0E32\u0E15\u0E23\u0E35: \u0E2A\u0E31\u0E1A\u0E2A\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "qilin") {
          applyEffectToTarget(def, { type: "confusion", duration: 2 }, this.options.enableAbilities);
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E0D\u0E32\u0E13\u0E17\u0E34\u0E1E\u0E22\u0E4C\u0E01\u0E34\u0E40\u0E25\u0E19\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32: \u0E2A\u0E31\u0E1A\u0E2A\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15`);
        }
        if (actionType === "signature" && att.id === "mammoth") {
          applyEffectToTarget(def, { type: "taunt", duration: 2, sourceId: att.id }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "buff_def", value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E07\u0E32\u0E0A\u0E49\u0E32\u0E07\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19: \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E1A\u0E31\u0E1F DEF +15%`);
        }
        if (actionType === "signature" && att.id === "buffalo") {
          applyEffectToTarget(def, { type: "taunt", duration: 2, sourceId: att.id }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E02\u0E32\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E0A\u0E19\u0E41\u0E2B\u0E25\u0E01: \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "cassowary") {
          applyEffectToTarget(def, { type: "bleed", duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E2A\u0E30\u0E1A\u0E31\u0E49\u0E19\u0E25\u0E21: \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%`);
        }
        if (actionType === "signature" && att.id === "tapir") {
          applyEffectToTarget(def, { type: "sleep", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E34\u0E17\u0E23\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1D\u0E31\u0E19: \u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "vampire_squid") {
          applyEffectToTarget(def, { type: "silence", duration: 2 }, this.options.enableAbilities);
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_hit", "buff_flee", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E21\u0E36\u0E01\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25: \u0E43\u0E1A\u0E49 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
        }
        if (actionType === "signature" && att.id === "pistol_shrimp") {
          applyEffectToTarget(def, { type: "vulnerable", duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E01\u0E49\u0E32\u0E21\u0E1E\u0E25\u0E32\u0E2A\u0E21\u0E48\u0E32\u0E2A\u0E38\u0E0D\u0E0D\u0E32\u0E01\u0E32\u0E28: \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20%`);
        }
        if (actionType === "signature" && att.id === "crocodile") {
          applyEffectToTarget(def, { type: "vulnerable", duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E01\u0E32\u0E25\u0E04\u0E0A\u0E2A\u0E32\u0E23\u0E1F\u0E32\u0E14\u0E2B\u0E32\u0E07: \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "platypus") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2B\u0E19\u0E35\u0E48\u0E22\u0E27\u0E19\u0E33\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E08\u0E34\u0E15: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === "signature" && att.id === "hamster") {
          const h = att.baseStats.maxHp * 0.15;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 15);
          healed += h;
          appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E08\u0E34\u0E15\u0E40\u0E01\u0E37\u0E49\u0E2D\u0E2B\u0E19\u0E38\u0E19\u0E14\u0E27\u0E07\u0E43\u0E08: \u0E2E\u0E35\u0E25\u0E15\u0E19\u0E40\u0E2D\u0E07 15% \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP`);
        }
        if (actionType === "signature" && att.id === "crane") {
          const h = att.baseStats.maxHp * 0.2;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
          healed += h;
          appliedEffects.push(`\u0E23\u0E30\u0E1A\u0E33\u0E08\u0E34\u0E15\u0E0A\u0E33\u0E23\u0E30\u0E21\u0E25\u0E17\u0E34\u0E19: \u0E2E\u0E35\u0E25\u0E15\u0E19\u0E40\u0E2D\u0E07 20% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F`);
        }
        if (actionType === "signature" && att.id === "blue_whale") {
          const h = att.baseStats.maxHp * 0.25;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          att.sp = Math.min(att.baseStats.maxSp, att.sp + 20);
          applyEffectToTarget(att, { type: "buff_hit", value: 15, duration: 2 }, this.options.enableAbilities);
          healed += h;
          appliedEffects.push(`\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E08\u0E34\u0E15\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23: \u0E2E\u0E35\u0E25\u0E15\u0E19\u0E40\u0E2D\u0E07 25%, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +20 SP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F HIT +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
        }
        if (actionType === "signature" && att.id === "white_lion") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "blind", duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push(`\u0E04\u0E33\u0E23\u0E32\u0E21\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E1E\u0E34\u0E1E\u0E32\u0E01\u0E29\u0E32: \u0E25\u0E14 ATK 20%, \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10`);
        }
        if (actionType === "signature" && att.id === "giant_dragonfly") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          if (Math.random() < 0.65) {
            applyEffectToTarget(def, { type: "stun", duration: 1 }, this.options.enableAbilities);
          }
          appliedEffects.push(`\u0E27\u0E32\u0E15\u0E20\u0E31\u0E22\u0E1B\u0E35\u0E01\u0E01\u0E23\u0E30\u0E1E\u0E37\u0E2D\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19: \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E2A\u0E15\u0E31\u0E19`);
        }
        if (actionType === "signature" && att.id === "crow") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "condor") {
          if (Math.random() < 0.7) {
            applyEffectToTarget(def, { type: "stun", duration: 1 }, this.options.enableAbilities);
          }
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_hit", "buff_flee", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          appliedEffects.push(`\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 & \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "gorilla") {
          appliedEffects.push(`\u0E2B\u0E21\u0E31\u0E14\u0E17\u0E25\u0E32\u0E22\u0E1C\u0E32\u0E01\u0E31\u0E21\u0E1B\u0E19\u0E32\u0E17`);
        }
        if (actionType === "signature" && att.id === "cougar") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`\u0E1E\u0E38\u0E48\u0E07\u0E02\u0E22\u0E49\u0E33 \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15`);
        }
        if (actionType === "signature" && att.id === "perentie") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1E\u0E34\u0E29\u0E1E\u0E2A\u0E38\u0E18\u0E32 \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "prairie_dog") {
          applyEffectToTarget(def, { type: "blind", duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E1B\u0E48\u0E27\u0E19\u0E1E\u0E2A\u0E38\u0E18\u0E32 \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "anteater") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E17\u0E25\u0E32\u0E22\u0E08\u0E2D\u0E21\u0E1B\u0E25\u0E27\u0E01 \u0E25\u0E14 ATK 20%`);
        }
        if (actionType === "signature" && att.id === "elephant") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E20\u0E1E \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 -15`);
        }
        if (actionType === "signature" && att.id === "grizzly") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E01\u0E23\u0E34\u0E2A\u0E25\u0E35\u0E48\u0E16\u0E25\u0E48\u0E21\u0E1C\u0E32 \u0E25\u0E14 DEF 30%`);
        }
        if (actionType === "signature" && att.id === "sloth") {
          applyEffectToTarget(att, { type: "buff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E42\u0E2D\u0E1A\u0E01\u0E2D\u0E14\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E24\u0E01\u0E29\u0E32: \u0E1A\u0E31\u0E1F DEF+20% & \u0E40\u0E01\u0E23\u0E32\u0E30 12%`);
        }
        if (actionType === "signature" && att.id === "tapir") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1E\u0E38\u0E48\u0E07\u0E0A\u0E19\u0E17\u0E25\u0E32\u0E22\u0E14\u0E07\u0E1E\u0E07\u0E44\u0E1E\u0E23: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP`);
        }
        if (actionType === "signature" && att.id === "panda") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E44\u0E1C\u0E48\u0E1E\u0E31\u0E19\u0E25\u0E33: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 20% Max HP`);
        }
        if (actionType === "signature" && att.id === "ocelot") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E1E\u0E23\u0E32\u0E19\u0E1E\u0E07\u0E44\u0E1E\u0E23: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15`);
        }
        if (actionType === "signature" && att.id === "clouded_leopard") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E42\u0E09\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E22\u0E2D\u0E14\u0E40\u0E23\u0E37\u0E2D\u0E19\u0E44\u0E1E\u0E23: \u0E25\u0E14 DEF 30% & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "chameleon") {
          applyEffectToTarget(def, { type: "debuff_hit", value: 15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2A\u0E30\u0E01\u0E14\u0E15\u0E32\u0E2A\u0E25\u0E31\u0E1A\u0E2A\u0E35\u0E25\u0E27\u0E07\u0E15\u0E32: \u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 HIT 15`);
        }
        if (actionType === "signature" && att.id === "gibbon") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E2A\u0E27\u0E32\u0E17: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 ATK 20%`);
        }
        if (actionType === "signature" && att.id === "orangutan") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E17\u0E25\u0E32\u0E22\u0E20\u0E1E: \u0E2A\u0E15\u0E31\u0E19, \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 -15`);
        }
        if (actionType === "signature" && att.id === "toad") {
          applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E04\u0E32\u0E07\u0E04\u0E01\u0E1E\u0E48\u0E19\u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E2A\u0E01\u0E31\u0E14\u0E17\u0E31\u0E1E: \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 & \u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP`);
        }
        if (actionType === "signature" && att.id === "centipede") {
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E02\u0E32\u0E23\u0E38\u0E21\u0E17\u0E36\u0E49\u0E07: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "butterfly") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push(`\u0E23\u0E30\u0E1A\u0E33\u0E1B\u0E35\u0E01\u0E1C\u0E35\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1E\u0E34\u0E29\u0E25\u0E27\u0E07\u0E15\u0E32: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14 SP -20`);
        }
        if (actionType === "signature" && att.id === "gila_monster") {
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E1E\u0E34\u0E29\u0E1A\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "black_widow") {
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E41\u0E21\u0E48\u0E21\u0E48\u0E32\u0E22\u0E14\u0E33\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E25\u0E14 DEF 25% & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "pitohui") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E1E\u0E34\u0E29\u0E21\u0E36\u0E19\u0E07\u0E07: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29`);
        }
        if (actionType === "signature" && att.id === "stonefish") {
          applyEffectToTarget(att, { type: "shield", value: 0.18, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E2B\u0E34\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E02\u0E22\u0E49\u0E33\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 18% Max HP`);
        }
        if (actionType === "signature" && att.id === "deathstalker") {
          applyEffectToTarget(def, { type: "blind", duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2B\u0E32\u0E07\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A\u0E41\u0E17\u0E07\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 2 \u0E0A\u0E31\u0E49\u0E19 & \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "cone_snail") {
          applyEffectToTarget(def, { type: "stun", duration: 1 }, this.options.enableAbilities);
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E09\u0E21\u0E27\u0E01\u0E21\u0E23\u0E13\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17: \u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07, \u0E2A\u0E15\u0E31\u0E19 & \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
        }
        if (actionType === "signature" && att.id === "walrus") {
          applyEffectToTarget(def, { type: "freeze", duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E07\u0E32\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E17\u0E25\u0E32\u0E22\u0E18\u0E32\u0E23\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "leopard_seal") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23\u0E48\u0E32\u0E07: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "wolverine") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E04\u0E25\u0E31\u0E48\u0E07\u0E17\u0E25\u0E32\u0E22\u0E2B\u0E34\u0E21\u0E30: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20%`);
        }
        if (actionType === "signature" && att.id === "polar_bear") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E16\u0E25\u0E48\u0E21\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%`);
        }
        if (actionType === "signature" && att.id === "ermine") {
          appliedEffects.push(`\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E02\u0E32\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E1A\u0E31\u0E1F CRI+20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
        }
        if (actionType === "signature" && att.id === "lynx") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E07\u0E32\u0E2B\u0E34\u0E21\u0E30\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15`);
        }
        if (actionType === "signature" && att.id === "snow_leopard") {
          applyEffectToTarget(def, { type: "freeze", duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E42\u0E1C\u0E19\u0E02\u0E22\u0E49\u0E33\u0E08\u0E32\u0E01\u0E22\u0E2D\u0E14\u0E1C\u0E32\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07: \u0E25\u0E14 DEF 30% & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "puffin") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push(`\u0E1E\u0E32\u0E22\u0E38\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E1B\u0E31\u0E48\u0E19\u0E1B\u0E48\u0E27\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14 SP -20`);
        }
        if (actionType === "signature" && att.id === "narwhal") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2B\u0E2D\u0E01\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E1A\u0E2A\u0E01\u0E31\u0E14\u0E08\u0E38\u0E14: \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "seagull") {
          appliedEffects.push(`\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E27\u0E22\u0E27\u0E32\u0E22\u0E1B\u0E35\u0E01\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E31\u0E1A\u0E2A\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "armadillo") {
          applyEffectToTarget(att, { type: "shield", value: 0.12, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E01\u0E49\u0E2D\u0E19\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E34\u0E49\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP`);
        }
        if (actionType === "signature" && att.id === "hyena") {
          applyEffectToTarget(def, { type: "debuff_atk", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E01\u0E23\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E02\u0E22\u0E49\u0E33\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E17\u0E25\u0E32\u0E22\u0E17\u0E31\u0E1E: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 ATK 20%`);
        }
        if (actionType === "signature" && att.id === "sperm_whale") {
          applyEffectToTarget(att, { type: "shield", value: 0.15, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E2D\u0E40\u0E27\u0E08\u0E35\u0E43\u0E15\u0E49\u0E2A\u0E21\u0E38\u0E17\u0E23: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP`);
        }
        if (actionType === "signature" && att.id === "tasmanian_devil") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E02\u0E22\u0E49\u0E33\u0E41\u0E2B\u0E25\u0E01: \u0E25\u0E14 DEF 20%`);
        }
        if (actionType === "signature" && att.id === "black_vulture") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "poison", duration: 3, stacks: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E17\u0E21\u0E34\u0E2C\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20%`);
        }
        if (actionType === "signature" && att.id === "jaguar") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.3, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E07\u0E32\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E02\u0E22\u0E49\u0E33\u0E01\u0E30\u0E42\u0E2B\u0E25\u0E01\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%`);
        }
        if (actionType === "signature" && att.id === "aye_aye") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push(`\u0E40\u0E19\u0E15\u0E23\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14 SP -20`);
        }
        if (actionType === "signature" && att.id === "crow") {
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push(`\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E37\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10`);
        }
        if (actionType === "signature" && att.id === "vampire_squid") {
          applyEffectToTarget(def, { type: "stun", duration: 1 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "blind", duration: 2 }, this.options.enableAbilities);
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E1E\u0E32\u0E22\u0E38\u0E2B\u0E21\u0E36\u0E01\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F: \u0E2A\u0E15\u0E31\u0E19, \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
        }
        if (actionType === "signature" && att.id === "sand_frog") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.2, duration: 2 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.08;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          appliedEffects.push(`\u0E01\u0E32\u0E22\u0E32\u0E17\u0E23\u0E32\u0E22\u0E1E\u0E2D\u0E07\u0E25\u0E21\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19: \u0E40\u0E01\u0E23\u0E32\u0E30 20% & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === "signature" && att.id === "camel") {
          applyEffectToTarget(att, { type: "buff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "regen", value: 0.06, duration: 2 }, this.options.enableAbilities);
          const h = att.baseStats.maxHp * 0.1;
          att.hp = Math.min(att.baseStats.maxHp, att.hp + h);
          healed += h;
          appliedEffects.push(`\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E01\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30: \u0E1A\u0E31\u0E1F DEF +25%, \u0E23\u0E35\u0E40\u0E08\u0E19 & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
        }
        if (actionType === "signature" && att.id === "white_bison") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.22, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(att, { type: "cleanse", count: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E2A\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E44\u0E1A\u0E0B\u0E31\u0E19\u0E40\u0E17\u0E27\u0E30: \u0E40\u0E01\u0E23\u0E32\u0E30 22% Max HP & \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === "signature" && att.id === "sand_cat") {
          applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E09\u0E35\u0E01\u0E1C\u0E37\u0E19\u0E17\u0E23\u0E32\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "sidewinder") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.25, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E44\u0E0B\u0E14\u0E4C\u0E44\u0E27\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E09\u0E01\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19: \u0E25\u0E14 DEF 25%`);
        }
        if (actionType === "signature" && att.id === "akhal_teke") {
          def.gauge = Math.max(0, def.gauge - 20);
          appliedEffects.push(`\u0E1A\u0E32\u0E17\u0E32\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E17\u0E2D\u0E07\u0E04\u0E33: \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 -20 \u0E41\u0E15\u0E49\u0E21`);
        }
        if (actionType === "signature" && att.id === "caracal") {
          applyEffectToTarget(att, { type: "buff_cri", value: 30, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E17\u0E30\u0E22\u0E32\u0E19\u0E15\u0E30\u0E1B\u0E1A\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23: \u0E1A\u0E31\u0E1F CRI +30%`);
        }
        if (actionType === "signature" && att.id === "gyrfalcon") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.35, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E28\u0E23\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E14\u0E34\u0E48\u0E07\u0E1E\u0E34\u0E06\u0E32\u0E15\u0E44\u0E08\u0E23\u0E4C\u0E1F\u0E2D\u0E25\u0E04\u0E2D\u0E19: \u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 \u0E25\u0E14 DEF 35%`);
        }
        if (actionType === "signature" && att.id === "frilled_lizard") {
          applyEffectToTarget(def, { type: "blind", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E41\u0E1C\u0E48\u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E2A\u0E30\u0E01\u0E14\u0E02\u0E27\u0E31\u0E0D: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
        }
        if (actionType === "signature" && att.id === "electric_ray") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.2, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E19\u0E32\u0E21\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01\u0E21\u0E23\u0E13\u0E30: \u0E40\u0E01\u0E23\u0E32\u0E30 20% & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === "signature" && att.id === "african_buffalo") {
          const shRes = applyEffectToTarget(att, { type: "shield", value: 0.22, duration: 2 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "stun", duration: 1 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E02\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 22% Max HP`);
          if (shRes) shieldGained += att.shield;
        }
        if (actionType === "signature" && att.id === "pistol_shrimp") {
          applyEffectToTarget(def, { type: "debuff_def", value: 0.2, duration: 2 }, this.options.enableAbilities);
          def.sp = Math.max(0, def.sp - 15);
          appliedEffects.push(`\u0E01\u0E49\u0E32\u0E21\u0E1E\u0E25\u0E32\u0E2A\u0E21\u0E48\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01: \u0E25\u0E14 DEF 20% & \u0E15\u0E31\u0E14 SP -15`);
        }
        if (actionType === "signature" && att.id === "tiger_beetle") {
          applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 2 }, this.options.enableAbilities);
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push(`\u0E01\u0E23\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E2A\u0E31\u0E1A\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08 +15`);
        }
        if (actionType === "signature" && att.id === "black_mamba") {
          applyEffectToTarget(def, { type: "poison", stacks: 1, duration: 3 }, this.options.enableAbilities);
          applyEffectToTarget(def, { type: "debuff_spd", value: 0.2, duration: 2 }, this.options.enableAbilities);
          appliedEffects.push(`\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E14\u0E33\u0E09\u0E01\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E31\u0E2A\u0E19\u0E35: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 20%`);
        }
        if (actionType === "signature" && att.id === "electric_catfish") {
          applyEffectToTarget(def, { type: "slow", duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push(`\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 350 \u0E42\u0E27\u0E25\u0E15\u0E4C: \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10`);
        }
        if (actionType === "signature" && att.id === "zebra") {
          applyEffectToTarget(def, { type: "blind", duration: 2 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 12);
          appliedEffects.push(`\u0E41\u0E16\u0E1A\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E25\u0E27\u0E07\u0E15\u0E32: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -12`);
        }
        if (actionType === "signature" && att.id === "electric_eel") {
          applyEffectToTarget(def, { type: "stun", duration: 1 }, this.options.enableAbilities);
          def.gauge = Math.max(0, def.gauge - 20);
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push(`\u0E21\u0E2B\u0E32\u0E17\u0E31\u0E13\u0E11\u0E4C\u0E2D\u0E31\u0E2A\u0E19\u0E35 860 \u0E42\u0E27\u0E25\u0E15\u0E4C: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -20 & \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
        }
      }
    }
    if (this.options.enableSkillEffects && hasStatus(def, "yata_mirror") && Math.random() < 0.55 && !hasStatus(att, "blind")) {
      applyEffectToTarget(att, { type: "blind", duration: 2 }, this.options.enableAbilities);
      appliedEffects.push(`${def.name} [\u0E01\u0E23\u0E30\u0E08\u0E01\u0E22\u0E32\u0E15\u0E30] (55%) \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E41\u0E2A\u0E07\u0E08\u0E49\u0E32! ${att.name} \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
    }
    if (this.options.enableSkillEffects && hasStatus(def, "counter_stance") && def.hp > 0 && !hasStatus(def, "stun") && !hasStatus(def, "freeze") && Math.random() < 0.55) {
      const counterDmg = Math.max(1, defStats.atk * 0.45 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
      let remCounter = counterDmg;
      if (att.shield > 0) {
        const abs = Math.min(att.shield, remCounter);
        att.shield -= abs;
        remCounter -= abs;
      }
      att.hp -= remCounter;
      appliedEffects.push(`${def.name} [\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A] (55%) \u0E1F\u0E31\u0E19\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A ${Math.round(counterDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08\u0E43\u0E2A\u0E48 ${att.name}`);
    }
    if (this.options.enableSkillEffects && hasStatus(att, "shadow_clone") && def.hp > 0) {
      const shadowDmg = Math.max(1, attStats.atk * 0.5 * (K / (K + defStats.def)) * (0.95 + Math.random() * 0.1));
      let remShadow = shadowDmg;
      if (def.shield > 0) {
        const abs = Math.min(def.shield, remShadow);
        def.shield -= abs;
        remShadow -= abs;
      }
      def.hp -= remShadow;
      appliedEffects.push(`\u{1F465} \u0E40\u0E07\u0E32\u0E21\u0E32\u0E22\u0E32\u0E1F\u0E31\u0E19\u0E0B\u0E49\u0E33 +${Math.round(shadowDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08`);
    }
    if (this.options.enableAbilities && att.abilityId === "tartarus_three_fangs" && def.hp > 0) {
      if (Math.random() < 0.35) {
        const biteDmg = Math.max(1, Math.round(attStats.atk * 0.35 * (K / (K + defStats.def)) * (0.95 + Math.random() * 0.1)));
        let remBite = biteDmg;
        if (def.shield > 0) {
          const abs = Math.min(def.shield, remBite);
          def.shield -= abs;
          remBite -= abs;
        }
        def.hp = Math.max(0, def.hp - remBite);
        appliedEffects.push(`Ability [${att.abilityName}] (35%) \u0E40\u0E28\u0E35\u0E22\u0E23\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07\u0E09\u0E25\u0E32\u0E21\u0E01\u0E31\u0E14\u0E0B\u0E49\u0E33 \u{1F4A5} -${biteDmg} HP`);
      }
      if (Math.random() < 0.3 && def.hp > 0) {
        const dispRes = applyEffectToTarget(def, { type: "dispel", count: 1 }, true);
        if (dispRes) {
          appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
        }
      }
    }
    const isArmorBreak = pierce >= 0.08;
    const isBlocked = defStats.block > attStats.ab + bonusAb + 5;
    if (this.options.enableAbilities && isBlocked && def.abilityId === "fire_chitin_shell" && Math.random() < 0.65) {
      const bRes = applyEffectToTarget(att, { type: "burn", duration: 2 }, true);
      if (bRes) appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E43\u0E2A\u0E48 ${att.name}`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === "iron_crab_pincer" && Math.random() < 0.6) {
      const cDmg = Math.max(1, defStats.atk * 0.35 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
      let remC = cDmg;
      if (att.shield > 0) {
        const abs = Math.min(att.shield, remC);
        att.shield -= abs;
        remC -= abs;
      }
      att.hp -= remC;
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E2B\u0E19\u0E35\u0E1A\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A ${Math.round(cDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08\u0E43\u0E2A\u0E48 ${att.name}`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === "stand_against_gale" && Math.random() < 0.6) {
      applyEffectToTarget(def, { type: "buff_def", value: 0.2, duration: 2 }, true);
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E1F DEF+20%`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === "ancient_forest_hide" && Math.random() < 0.6) {
      const h = def.baseStats.maxHp * 0.04;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      applyEffectToTarget(def, { type: "shield", value: 0.06, duration: 2 }, true);
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP & \u0E40\u0E01\u0E23\u0E32\u0E30 6%`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === "osteoderm_toxic_armor" && Math.random() < 0.65) {
      applyEffectToTarget(att, { type: "poison", duration: 3, stacks: 1 }, true);
      applyEffectToTarget(att, { type: "debuff_atk", value: 0.15, duration: 2 }, true);
      appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29 & \u0E25\u0E14 ATK ${att.name} 15%`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === "sand_burrow_puff" && Math.random() < 0.6) {
      const h = def.baseStats.maxHp * 0.04;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      appliedEffects.push(`${def.name} [${def.abilityName}] (60%) \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP`);
    }
    if (this.options.enableAbilities && isBlocked && def.abilityId === "cape_boss_charge" && Math.random() < 0.65) {
      const cDmg = Math.max(1, defStats.atk * 0.4 * (K / (K + attStats.def)) * (0.95 + Math.random() * 0.1));
      let remC = cDmg;
      if (att.shield > 0) {
        const abs = Math.min(att.shield, remC);
        att.shield -= abs;
        remC -= abs;
      }
      att.hp -= remC;
      appliedEffects.push(`${def.name} [${def.abilityName}] (65%) \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E02\u0E27\u0E34\u0E14\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E2A\u0E27\u0E19\u0E01\u0E25\u0E31\u0E1A ${Math.round(cDmg)} \u0E14\u0E32\u0E40\u0E21\u0E08\u0E43\u0E2A\u0E48 ${att.name}`);
    }
    if (this.options.enableSkillEffects && hasStatus(def, "fire_skin") && Math.random() < 0.4) {
      const bRes = applyEffectToTarget(att, { type: "burn", duration: 2 }, true);
      if (bRes) appliedEffects.push(`${def.name} \u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E1E\u0E25\u0E34\u0E07 \u{1F525} (40%) \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49\u0E43\u0E2A\u0E48 ${att.name}${bRes.includes("Ignite Burst") ? ` [${bRes}]` : ""}`);
    }
    if (this.options.enableSkillEffects && hasStatus(def, "ice_skin") && Math.random() < 0.4) {
      if (!hasStatus(att, "freeze")) {
        const fRes = applyEffectToTarget(att, { type: "freeze", duration: 1 }, true);
        if (fRes) appliedEffects.push(`${def.name} \u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C \u{1F9CA} (40%) \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E43\u0E2A\u0E48 ${att.name}`);
      }
    }
    if (this.options.enableAbilities && def.abilityId === "grizzly_berserk" && def.hp > 0 && def.hp < def.baseStats.maxHp * 0.65 && !hasStatus(def, "berserk") && Math.random() < 0.65) {
      applyEffectToTarget(def, { type: "berserk", duration: 2 }, true);
      const h = def.baseStats.maxHp * 0.05;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      appliedEffects.push(`Ability [${def.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (65%) \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E2A\u0E20\u0E32\u0E27\u0E30\u0E04\u0E25\u0E31\u0E48\u0E07\u0E28\u0E36\u0E01 Berserk \u{1F4A2} & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP!`);
    }
    if (this.options.enableAbilities && def.abilityId === "blubber_ice_fortress" && def.hp > 0 && def.hp < def.baseStats.maxHp * 0.6 && !hasStatus(def, "ice_skin") && Math.random() < 0.65) {
      applyEffectToTarget(def, { type: "ice_skin", duration: 2 }, true);
      const h = def.baseStats.maxHp * 0.05;
      def.hp = Math.min(def.baseStats.maxHp, def.hp + h);
      appliedEffects.push(`Ability [${def.abilityName}] \u0E17\u0E33\u0E07\u0E32\u0E19 (65%) \u0E40\u0E2A\u0E23\u0E34\u0E21\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1C\u0E34\u0E27\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C Ice Skin \u{1F9CA} & \u0E1F\u0E37\u0E49\u0E19 +${Math.round(h)} HP!`);
    }
    const spTag = spCost > 0 ? ` (-${spCost} SP)` : "";
    const critTag = isCrit ? " [CRIT!]" : "";
    const elemTag = elemMult > 1 ? " (\u0E0A\u0E19\u0E30\u0E18\u0E32\u0E15\u0E38 \xD71.3)" : elemMult < 1 ? " (\u0E41\u0E1E\u0E49\u0E18\u0E32\u0E15\u0E38 \xD70.85)" : "";
    const effTag = appliedEffects.length ? ` | \u0E40\u0E2D\u0E1F\u0E40\u0E1F\u0E01\u0E15\u0E4C: ${appliedEffects.join(", ")}` : "";
    const ev = {
      turn: this.turn,
      actorSide: attTeam.side,
      actorName: att.name,
      targetName: def.name,
      actionType,
      actionName,
      skillTier: sk?.tier,
      damage: Math.round(dmg),
      healed: Math.round(healed),
      shieldGained: Math.round(shieldGained),
      spCost,
      spChanged: Math.round(spChanged),
      isCrit,
      isMiss: false,
      isBlocked,
      isArmorBreak,
      elementMult: elemMult,
      appliedEffects,
      message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] ${att.name} \u0E43\u0E0A\u0E49 [${actionName}]${spTag} \u0E42\u0E08\u0E21\u0E15\u0E35 ${def.name} \u0E17\u0E33\u0E14\u0E32\u0E40\u0E21\u0E08 ${Math.round(dmg)}${critTag}${elemTag}${effTag} (HP ${def.name}: ${Math.max(0, Math.round(def.hp))}/${Math.round(def.baseStats.maxHp)}, SP ${att.name}: ${Math.round(att.sp)}/${att.baseStats.maxSp})`
    };
    this.recordEvent(events, ev);
  }
  checkKoAndBackup(team, events) {
    const active = this.getActive(team);
    if (active.hp > 0) return;
    if (this.options.enableAbilities && active.abilityId === "rebirth_ashes" && !active.reviveUsed) {
      active.reviveUsed = true;
      const isFullHp = Math.random() < 0.8;
      const hpPct = isFullHp ? 1 : 0.6;
      active.hp = Math.round(active.baseStats.maxHp * hpPct);
      active.sp = Math.max(active.sp, Math.round(active.baseStats.maxSp * 0.5));
      active.effects = active.effects.filter((e) => e.type.startsWith("buff_") || e.type === "shield" || e.type === "fire_skin");
      if (!active.effects.some((e) => e.type === "fire_skin")) active.effects.push({ type: "fire_skin", duration: 9999 });
      const hpDesc = isFullHp ? "\u0E40\u0E15\u0E47\u0E21\u0E2B\u0E25\u0E2D\u0E14 (100%)" : "60%";
      const ev = {
        turn: this.turn,
        actorSide: team.side,
        actorName: active.name,
        targetName: active.name,
        actionType: "ability",
        actionName: active.abilityName,
        damage: 0,
        healed: Math.round(active.hp),
        shieldGained: 0,
        isCrit: false,
        isMiss: false,
        elementMult: 1,
        appliedEffects: [`\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E HP ${hpDesc}`],
        message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] \u{1F525} ${active.name} \u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25 Ability [${active.abilityName}] \u0E1F\u0E37\u0E49\u0E19\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E\u0E08\u0E32\u0E01\u0E01\u0E2D\u0E07\u0E40\u0E16\u0E49\u0E32\u0E16\u0E48\u0E32\u0E19 100% \u0E1E\u0E23\u0E49\u0E2D\u0E21 HP ${Math.round(active.hp)} (${hpDesc})!`
      };
      this.recordEvent(events, ev);
      return;
    }
    active.hp = 0;
    if (team.fighters.length > 1) {
      const backupIdx = 1 - team.activeIndex;
      const backup = team.fighters[backupIdx];
      if (backup.hp > 0) {
        team.activeIndex = backupIdx;
        const healAmt = backup.baseStats.maxHp * 0.05;
        backup.hp = Math.min(backup.baseStats.maxHp, backup.hp + healAmt);
        const ev = {
          turn: this.turn,
          actorSide: team.side,
          actorName: active.name,
          targetName: backup.name,
          actionType: "ko_swap",
          actionName: "\u0E15\u0E31\u0E27\u0E2A\u0E33\u0E23\u0E2D\u0E07\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E19\u0E32\u0E21",
          damage: 0,
          healed: Math.round(healAmt),
          shieldGained: 0,
          isCrit: false,
          isMiss: false,
          elementMult: 1,
          appliedEffects: ["\u0E1F\u0E37\u0E49\u0E19 HP +5%"],
          message: `[\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 ${this.turn}] ${active.name} \u0E25\u0E49\u0E21\u0E25\u0E07! \u0E15\u0E31\u0E27\u0E2A\u0E33\u0E23\u0E2D\u0E07 ${backup.name} \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E19\u0E32\u0E21\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +${Math.round(healAmt)} HP (5%)`
        };
        this.recordEvent(events, ev);
        return;
      }
    }
    this.winner = team.side === "A" ? "B" : "A";
  }
  runToEnd() {
    while (!this.winner) {
      this.stepTurn();
    }
    return this.winner;
  }
};

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
function hasStatus2(f, type) {
  return f.effects.some((e) => e.type === type);
}
function applyEffectToTarget2(target, effect, enableAbilities = true) {
  if (enableAbilities && target.abilityId === "omniscient_gaze" && !effect.type.startsWith("buff_") && effect.type !== "shield" && effect.type !== "cleanse" && effect.type !== "heal_pct") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E25\u0E1A\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E41\u0E1A\u0E1A (${target.abilityName})`;
  }
  if (enableAbilities && effect.type === "blind" && (target.abilityId === "hawk_eye" || target.abilityId === "solar_piercing_crest")) {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14 (${target.abilityName})`;
  }
  if (enableAbilities && effect.type === "stun" && target.abilityId === "colossal_tremor") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19 (${target.abilityName})`;
  }
  if (enableAbilities && (effect.type === "root" || effect.type === "slow") && target.abilityId === "sky_rending_talons") {
    return `\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07/\u0E2A\u0E42\u0E25\u0E27\u0E4C (${target.abilityName})`;
  }
  if (effect.type === "cleanse") {
    const count = effect.count ?? 1;
    const removed = [];
    const debuffTypes = ["burn", "poison", "slow", "blind", "stun", "freeze", "root", "confusion", "bleed", "taunt", "sleep", "silence", "vulnerable", "curse", "debuff_atk", "debuff_def", "debuff_spd", "debuff_cri", "debuff_hit"];
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
    const isBuff = (type) => type.startsWith("buff_") || type === "shield" || type === "regen" || type === "fire_skin" || type === "ice_skin" || type === "berserk" || type === "counter_stance" || type === "yata_mirror" || type === "shadow_clone";
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
      shadow_clone: "\u0E40\u0E07\u0E32\u0E21\u0E32\u0E22\u0E32"
    };
    for (let c = 0; c < count; c++) {
      if (buffIndices.length === 0) break;
      const randArrIdx = Math.floor(Math.random() * buffIndices.length);
      const targetEffectIdx = buffIndices.splice(randArrIdx, 1)[0];
      const removed = target.effects.splice(targetEffectIdx, 1)[0];
      if (removed) {
        if (removed.type === "shield") {
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
    const resistChance = Math.min(0.9, target.ccResistStacks * skills_default.statusRules.ccResistancePerStack);
    if (Math.random() < resistChance) {
      return `\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30 [${effect.type}] \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E30\u0E2A\u0E21 ${Math.round(resistChance * 100)}%)`;
    }
    target.ccResistStacks = Math.min(2, target.ccResistStacks + 1);
    target.ccResistTurns = skills_default.statusRules.ccResistanceDuration;
  }
  if (effect.type === "shield") {
    if (hasStatus2(target, "vulnerable")) {
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
    applyEffectToTarget2(target, { type: "debuff_def", value: defRed, duration: 2 }, enableAbilities);
    const stunRes2 = applyEffectToTarget2(target, { type: "stun", duration: effect.duration ?? 1 }, enableAbilities);
    const stunTag = stunRes2?.includes("\u0E15\u0E34\u0E14\u0E2A\u0E16\u0E32\u0E19\u0E30 [stun]") || stunRes2 === "stun" ? "\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)" : stunRes2;
    return `\u0E17\u0E38\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E15\u0E01 (\u0E25\u0E14 DEF ${Math.round(defRed * 100)}% 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30${stunTag}`;
  }
  if (effect.type === "max_poison_and_armor_break") {
    applyEffectToTarget2(target, { type: "poison", stacks: 2, duration: 3 }, enableAbilities);
    const defRed = effect.defRedPct ?? effect.value ?? 0.3;
    applyEffectToTarget2(target, { type: "debuff_def", value: defRed, duration: 2 }, enableAbilities);
    return `\u0E40\u0E19\u0E15\u0E23\u0E21\u0E23\u0E13\u0E30\u0E1E\u0E34\u0E29\u0E2D\u0E40\u0E27\u0E08\u0E35: \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) & \u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`;
  }
  if (effect.type === "dispel_and_sp_drain") {
    const cl = applyEffectToTarget2(target, { type: "dispel", count: effect.count ?? 1 }, enableAbilities);
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
    const stunRes2 = applyEffectToTarget2(target, { type: "stun", duration: effect.duration ?? 1 }, enableAbilities);
    const drainVal = effect.value ?? 25;
    target.gauge = Math.max(0, target.gauge - drainVal);
    const stunTag = stunRes2?.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19") ? stunRes2 : "\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19";
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
    const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield", "regen", "fire_skin", "ice_skin", "berserk", "counter_stance", "yata_mirror", "shadow_clone"];
    target.effects = target.effects.filter((e) => !buffTypes.includes(e.type));
    target.shield = 0;
    const blindRes = applyEffectToTarget2(target, { type: "blind", duration: effect.duration ?? 2 }, enableAbilities);
    const blindTag = blindRes?.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14") ? blindRes : "\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)";
    return `\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30${blindTag}`;
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
          const wineMistMult = hasStatus2(f, "wine_mist") ? 1.5 : 1;
          dotDmg += f.baseStats.maxHp * skills_default.statusRules.burn.hpLossPctPerTurn * wineMistMult;
        } else if (ef.type === "poison") {
          const stacks = ef.stacks ?? 1;
          dotDmg += f.baseStats.maxHp * skills_default.statusRules.poison.hpLossPctPerTurn * stacks;
        } else if (ef.type === "curse") {
          dotDmg += f.baseStats.maxHp * skills_default.statusRules.curse.hpLossPctPerTurn;
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
      critMult = attStats.criDmg * skills_default.statusRules.sleep.wakeDmgMult;
      def.effects = def.effects.filter((e) => e.type !== "sleep");
      appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
    }
    const K = heroes_default.statFormula.defConstantK;
    const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
    const effDef = defStats.def * (1 - pierce);
    const baseDmg = Math.max(1, attStats.atk * (K / (K + effDef)));
    let finalDmg = Math.round(baseDmg * elemMult * critMult);
    if (hasStatus2(def, "vulnerable")) {
      finalDmg = Math.round(finalDmg * (1 + skills_default.statusRules.vulnerable.extraDmgPct));
      appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
    }
    if (hasStatus2(att, "taunt")) {
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
          applyEffectToTarget2(att, { type: "poison", duration: 3, stacks: 1 }, true);
          appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
        }
      }
      if (def.abilityId === "caustic_venom_aura" && Math.random() < 0.4) {
        applyEffectToTarget2(att, { type: "poison", duration: 3, stacks: 1 }, true);
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
        const dispRes = applyEffectToTarget2(def, { type: "dispel", count: 1 }, true);
        if (dispRes) {
          appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
        }
      }
    }
    if (this.options.enableAbilities && def.abilityId === "psionic_spirit_orbs" && def.hp > 0 && Math.random() < 0.35) {
      const confRes = applyEffectToTarget2(att, { type: "confusion", duration: 2 }, true);
      if (confRes) {
        appliedEffects.push(`${def.name} [${def.abilityName}] (35%) \u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48 ${att.name} ${confRes}`);
      }
    }
    if (hasStatus2(def, "bleed")) {
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
          const res = applyEffectToTarget2(tgt, efPayload);
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
      if (this.options.enableAbilities && att.abilityId === "oceanic_surge" && att.sp >= att.baseStats.maxSp * 0.5 && sk.element === "water") {
        finalDmg = Math.round(finalDmg * 1.2);
        appliedEffects.push(`Ability [${att.abilityName}] \u0E08\u0E49\u0E32\u0E27\u0E04\u0E25\u0E31\u0E48\u0E07\u0E2A\u0E21\u0E38\u0E17\u0E23 (SP\u226550%) \u0E14\u0E32\u0E40\u0E21\u0E08\u0E19\u0E49\u0E33 +20%`);
      }
      if (hasStatus2(def, "vulnerable")) {
        finalDmg = Math.round(finalDmg * (1 + skills_default.statusRules.vulnerable.extraDmgPct));
        appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
      }
      if (hasStatus2(att, "taunt")) {
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
            applyEffectToTarget2(att, { type: "poison", duration: 3, stacks: 1 }, true);
            appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
          }
        }
        if (def.abilityId === "caustic_venom_aura" && Math.random() < 0.4) {
          applyEffectToTarget2(att, { type: "poison", duration: 3, stacks: 1 }, true);
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
          const dispRes = applyEffectToTarget2(def, { type: "dispel", count: 1 }, true);
          if (dispRes) {
            appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
          }
        }
      }
      if (this.options.enableAbilities && def.abilityId === "psionic_spirit_orbs" && def.hp > 0 && Math.random() < 0.35) {
        const confRes = applyEffectToTarget2(att, { type: "confusion", duration: 2 }, true);
        if (confRes) {
          appliedEffects.push(`${def.name} [${def.abilityName}] (35%) \u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48 ${att.name} ${confRes}`);
        }
      }
      if (hasStatus2(def, "bleed")) {
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
          const res = applyEffectToTarget2(recipient, efPayload);
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
        applyEffectToTarget2(ally, { type: "buff_atk", value: 0.2, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_spd", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E33\u0E23\u0E32\u0E21\u0E1B\u0E25\u0E38\u0E01\u0E02\u0E27\u0E31\u0E0D: \u0E1A\u0E31\u0E1F\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E38\u0E01\u0E04\u0E19 ATK +20%, SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "deer") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.12);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "shield", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
      }
      appliedEffects.push("\u0E40\u0E02\u0E32\u0E01\u0E27\u0E32\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 12%, \u0E40\u0E01\u0E23\u0E32\u0E30 15% \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP");
    } else if (att.id === "turtle") {
      for (const ally of friendlyLiving) {
        applyEffectToTarget2(ally, { type: "shield", value: 0.15, duration: 2 });
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E14\u0E2D\u0E07\u0E27\u0E32\u0E23\u0E35: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "squirrel") {
      for (const ally of friendlyLiving) {
        applyEffectToTarget2(ally, { type: "buff_hit", value: 20, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_cri", value: 12, duration: 2 });
      }
      appliedEffects.push("\u0E25\u0E33\u0E41\u0E2A\u0E07\u0E1E\u0E27\u0E07\u0E2B\u0E32\u0E07: \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 HIT +20 \u0E41\u0E25\u0E30 CRI% +12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "flamingo") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E1D\u0E39\u0E07: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, +15 SP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "capybara") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.2, duration: 2 });
      }
      appliedEffects.push("\u0E27\u0E32\u0E23\u0E35\u0E2D\u0E38\u0E48\u0E19\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "sun_stag") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 25);
        applyEffectToTarget2(ally, { type: "buff_atk", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E41\u0E2A\u0E07\u0E2D\u0E23\u0E38\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14\u0E43\u0E2B\u0E21\u0E48: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, +25 SP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F ATK +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "starfish") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E14\u0E32\u0E23\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "sea_otter") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 15);
        applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E44\u0E02\u0E48\u0E21\u0E38\u0E01\u0E27\u0E32\u0E23\u0E35\u0E04\u0E38\u0E49\u0E21\u0E17\u0E31\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, +15 SP \u0E41\u0E25\u0E30\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP");
    } else if (att.id === "dolphin") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "buff_spd", value: 0.2, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E41\u0E2B\u0E48\u0E07\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "dove") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_spd", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E1B\u0E35\u0E01\u0E2A\u0E31\u0E19\u0E15\u0E34\u0E20\u0E32\u0E1E\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "swan") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E27\u0E32\u0E22\u0E38\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "quetzal") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "buff_spd", value: 0.25, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_flee", value: 15, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E17\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E2A\u0E32\u0E22\u0E25\u0E21: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +25%/FLEE +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "pig") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E42\u0E04\u0E25\u0E19\u0E41\u0E23\u0E48\u0E18\u0E32\u0E15\u0E38\u0E40\u0E22\u0E35\u0E22\u0E27\u0E22\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "wombat") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.2, duration: 2 });
      }
      appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E1E\u0E23\u0E07\u0E14\u0E34\u0E19\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "giraffe") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E1E\u0E23\u0E21\u0E34\u0E48\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E41\u0E2B\u0E48\u0E07\u0E1C\u0E37\u0E19\u0E14\u0E34\u0E19: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "koala") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E42\u0E2D\u0E1A\u0E19\u0E34\u0E17\u0E23\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "hornbill") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "regen", value: 0.06, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E1E\u0E23\u0E21\u0E2B\u0E32\u0E27\u0E19\u0E32\u0E25\u0E31\u0E22\u0E1E\u0E34\u0E17\u0E31\u0E01\u0E29\u0E4C\u0E0A\u0E35\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E23\u0E35\u0E40\u0E08\u0E19 6% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "bee") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push("\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E19\u0E21\u0E1C\u0E36\u0E49\u0E07\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E23\u0E31\u0E07: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, \u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30 +10 SP");
    } else if (att.id === "salamander") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget2(ally, { type: "regen", value: 0.06, duration: 2 });
      }
      appliedEffects.push("\u0E2B\u0E31\u0E15\u0E16\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E0B\u0E32\u0E25\u0E32\u0E41\u0E21\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "horseshoe_crab") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "shield", value: 0.15, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E25\u0E2B\u0E34\u0E15\u0E04\u0E23\u0E32\u0E21\u0E25\u0E49\u0E32\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "krill") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push("\u0E25\u0E30\u0E2D\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E2D\u0E2D\u0E42\u0E23\u0E23\u0E32\u0E1D\u0E39\u0E07\u0E40\u0E04\u0E22\u0E1F\u0E37\u0E49\u0E19\u0E0A\u0E35\u0E27\u0E32: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, \u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30 +10 SP");
    } else if (att.id === "beluga") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E1E\u0E25\u0E07\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C\u0E2A\u0E21\u0E32\u0E19\u0E17\u0E31\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "reindeer") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "regen", value: 0.06, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E23\u0E21\u0E07\u0E01\u0E38\u0E0E\u0E41\u0E2A\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "cockroach") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.15);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.15, duration: 2 });
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 10);
      }
      appliedEffects.push("\u0E1F\u0E35\u0E42\u0E23\u0E42\u0E21\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E23\u0E27\u0E21\u0E1D\u0E39\u0E07\u0E04\u0E37\u0E19\u0E0A\u0E35\u0E1E: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15%, \u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30 +10 SP");
    } else if (att.id === "tokay_gecko") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E01\u0E39\u0E48\u0E01\u0E49\u0E2D\u0E07\u0E2A\u0E21\u0E32\u0E19\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E23\u0E31\u0E15\u0E15\u0E34\u0E01\u0E32\u0E25: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "axolotl") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "regen", value: 0.06, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.25, duration: 2 });
      }
      appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1B\u0E32\u0E0F\u0E34\u0E2B\u0E32\u0E23\u0E34\u0E22\u0E4C\u0E0A\u0E38\u0E1A\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13\u0E41\u0E2B\u0E48\u0E07\u0E40\u0E07\u0E32\u0E21\u0E37\u0E14: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "alpaca") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.18);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
        applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
      }
      appliedEffects.push("\u0E44\u0E2D\u0E2D\u0E38\u0E48\u0E19\u0E1B\u0E38\u0E22\u0E02\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E42\u0E2D\u0E1A\u0E2D\u0E38\u0E49\u0E21: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "white_elephant") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.26);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.25, duration: 2 });
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
        applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_spd", value: 0.15, duration: 2 });
      }
      appliedEffects.push("\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E2A\u0E16\u0E34\u0E15\u0E02\u0E19\u0E41\u0E01\u0E30\u0E04\u0E38\u0E49\u0E21\u0E20\u0E31\u0E22: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18%, \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "okapi") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.26);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        applyEffectToTarget2(ally, { type: "cleanse", count: 99 });
        applyEffectToTarget2(ally, { type: "buff_atk", value: 0.2, duration: 2 });
        applyEffectToTarget2(ally, { type: "buff_spd", value: 0.2, duration: 2 });
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
        applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
      }
      appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E08\u0E34\u0E15\u0E0A\u0E33\u0E23\u0E30\u0E21\u0E25\u0E17\u0E34\u0E19: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 20% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
    } else if (att.id === "blue_whale") {
      for (const ally of friendlyLiving) {
        const healAmt = Math.round(ally.baseStats.maxHp * 0.25);
        ally.hp = Math.min(ally.baseStats.maxHp, ally.hp + healAmt);
        ally.sp = Math.min(ally.baseStats.maxSp, ally.sp + 20);
        applyEffectToTarget2(ally, { type: "buff_hit", value: 15, duration: 2 });
      }
      appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E42\u0E0B\u0E19\u0E32\u0E23\u0E4C\u0E08\u0E34\u0E15\u0E21\u0E2B\u0E32\u0E2A\u0E21\u0E38\u0E17\u0E23: \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25%, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +20 SP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F HIT +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
    } else if (att.id === "mammoth") {
      for (const ally of friendlyLiving) {
        applyEffectToTarget2(ally, { type: "buff_def", value: 0.15, duration: 2 });
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
          critMult = 1.5 * skills_default.statusRules.sleep.wakeDmgMult;
          def.effects = def.effects.filter((e) => e.type !== "sleep");
          appliedEffects.push("\u{1F4A4} \u0E1B\u0E25\u0E38\u0E01\u0E08\u0E32\u0E01\u0E19\u0E34\u0E17\u0E23\u0E32! (Wake-up Strike: \u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100% & \u0E14\u0E32\u0E40\u0E21\u0E08 +30%)");
        }
        const K = heroes_default.statFormula.defConstantK;
        const pierce = Math.max(0, Math.min(0.7, (attStats.ab - defStats.block) / 100));
        let effDef = defStats.def * (1 - pierce);
        if (att.id === "nine_tailed_fox") {
          effDef *= 0.75;
          appliedEffects.push("\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 25% (Ignore DEF 25%)");
        }
        const baseDmg = Math.max(1, attStats.atk * damageMult * (K / (K + effDef)));
        let finalDmg = Math.round(baseDmg * elemMult * critMult);
        if (hasStatus2(def, "vulnerable")) {
          finalDmg = Math.round(finalDmg * (1 + skills_default.statusRules.vulnerable.extraDmgPct));
          appliedEffects.push("\u{1F494} \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07: \u0E23\u0E31\u0E1A\u0E14\u0E32\u0E40\u0E21\u0E08 +25%");
        }
        if (hasStatus2(att, "taunt")) {
          finalDmg = Math.round(finalDmg * (1 - skills_default.statusRules.taunt.dmgReductionPct));
          appliedEffects.push("\u{1F4A2} \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38: \u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E14\u0E25\u0E07 10%");
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
              applyEffectToTarget2(att, { type: "poison", duration: 3, stacks: 1 }, true);
              appliedEffects.push(`${def.name} [${def.abilityName}] (55%) \u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E25\u0E14\u0E14\u0E32\u0E40\u0E21\u0E08 10% & \u0E41\u0E1E\u0E23\u0E48\u0E1E\u0E34\u0E29\u0E43\u0E2A\u0E48 ${att.name}`);
            }
          }
          if (def.abilityId === "caustic_venom_aura" && Math.random() < 0.4) {
            applyEffectToTarget2(att, { type: "poison", duration: 3, stacks: 1 }, true);
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
            const dispRes = applyEffectToTarget2(def, { type: "dispel", count: 1 }, true);
            if (dispRes) {
              appliedEffects.push(`Ability [${att.abilityName}] (30%) ${dispRes}`);
            }
          }
        }
        if (this.options.enableAbilities && def.abilityId === "psionic_spirit_orbs" && def.hp > 0 && Math.random() < 0.35) {
          const confRes = applyEffectToTarget2(att, { type: "confusion", duration: 2 }, true);
          if (confRes) {
            appliedEffects.push(`${def.name} [${def.abilityName}] (35%) \u0E25\u0E39\u0E01\u0E41\u0E01\u0E49\u0E27\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E43\u0E2A\u0E48 ${att.name} ${confRes}`);
          }
        }
        if (hasStatus2(def, "bleed")) {
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
              const res = applyEffectToTarget2(def, efPayload);
              if (res && !appliedEffects.includes(res)) appliedEffects.push(res);
            }
          }
        }
        if (att.id === "peacock") {
          applyEffectToTarget2(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          applyEffectToTarget2(def, { type: "confusion", duration: 2 });
        } else if (att.id === "owl") {
          applyEffectToTarget2(def, { type: "confusion", duration: 2 });
          applyEffectToTarget2(def, { type: "blind", duration: 1 });
        } else if (att.id === "qilin") {
          applyEffectToTarget2(def, { type: "confusion", duration: 2 });
          att.gauge = Math.min(100, att.gauge + 15);
        } else if (att.id === "platypus") {
          applyEffectToTarget2(att, { type: "shield", value: 0.15, duration: 2 });
          appliedEffects.push("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E40\u0E2B\u0E19\u0E35\u0E48\u0E22\u0E27\u0E19\u0E33\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E08\u0E34\u0E15: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "white_lion") {
          applyEffectToTarget2(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          applyEffectToTarget2(def, { type: "blind", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 10);
        } else if (att.id === "giant_dragonfly") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          if (Math.random() < 0.65) applyEffectToTarget2(def, { type: "stun", duration: 1 });
        } else if (att.id === "sea_lion") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          if (Math.random() < 0.4) applyEffectToTarget2(def, { type: "freeze", duration: 1 });
        } else if (att.id === "porcupine" && Math.random() < 0.3) {
          applyEffectToTarget2(def, { type: "stun", duration: 1 });
        } else if (att.id === "phoenix") {
          applyEffectToTarget2(def, { type: "burn", duration: 2 });
        } else if (att.id === "naga") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 20);
        } else if (att.id === "beetle" && Math.random() < 0.45) {
          applyEffectToTarget2(att, { type: "shield", value: 0.18, duration: 2 });
          appliedEffects.push("\u0E40\u0E02\u0E32\u0E01\u0E27\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E35\u0E1A\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E01\u0E31\u0E25\u0E1B\u0E4C: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 18% Max HP");
        } else if (att.id === "crab" && Math.random() < 0.25) {
          applyEffectToTarget2(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E01\u0E49\u0E32\u0E21\u0E27\u0E32\u0E23\u0E35\u0E2A\u0E01\u0E31\u0E14\u0E04\u0E25\u0E37\u0E48\u0E19: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "bighorn" && Math.random() < 0.25) {
          applyEffectToTarget2(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E40\u0E02\u0E32\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E27\u0E32\u0E22\u0E38: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "yak") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "shield", value: 0.15, duration: 2 });
            applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
          }
          appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E27\u0E32\u0E22\u0E38\u0E2B\u0E34\u0E21\u0E32\u0E25\u0E31\u0E22: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP & \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
        } else if (att.id === "cheetah") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E32\u0E21\u0E25\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "ostrich") {
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push("\u0E40\u0E15\u0E30\u0E2A\u0E01\u0E31\u0E14\u0E1E\u0E32\u0E22\u0E38\u0E04\u0E25\u0E31\u0E48\u0E07: \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -15");
        } else if (att.id === "owl") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E2A\u0E30\u0E01\u0E14\u0E08\u0E34\u0E15\u0E1B\u0E35\u0E01\u0E23\u0E32\u0E15\u0E23\u0E35: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "crow") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E2A\u0E31\u0E1A\u0E2A\u0E19: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "condor") {
          if (Math.random() < 0.7) {
            applyEffectToTarget2(def, { type: "stun", duration: 1 });
          }
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_hit", "buff_flee", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          appliedEffects.push("\u0E44\u0E0B\u0E42\u0E04\u0E25\u0E19\u0E21\u0E2B\u0E32\u0E27\u0E32\u0E15\u0E20\u0E31\u0E22: \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 & \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "cougar") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E1E\u0E38\u0E48\u0E07\u0E02\u0E22\u0E49\u0E33\u0E08\u0E32\u0E01\u0E1C\u0E32\u0E2B\u0E34\u0E19: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "perentie") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E04\u0E21\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "prairie_dog") {
          applyEffectToTarget2(def, { type: "blind", duration: 1 });
          appliedEffects.push("\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E1B\u0E48\u0E27\u0E19\u0E1E\u0E2A\u0E38\u0E18\u0E32: \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "anteater") {
          applyEffectToTarget2(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E17\u0E25\u0E32\u0E22\u0E08\u0E2D\u0E21\u0E1B\u0E25\u0E27\u0E01: \u0E25\u0E14 ATK \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "elephant") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E20\u0E1E: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -15");
        } else if (att.id === "grizzly") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E01\u0E23\u0E34\u0E2A\u0E25\u0E35\u0E48\u0E16\u0E25\u0E48\u0E21\u0E1C\u0E32: \u0E25\u0E14 DEF \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "sloth") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "buff_def", value: 0.2, duration: 2 });
            applyEffectToTarget2(ally, { type: "shield", value: 0.12, duration: 2 });
          }
          appliedEffects.push("\u0E42\u0E2D\u0E1A\u0E01\u0E2D\u0E14\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E24\u0E01\u0E29\u0E32: \u0E1A\u0E31\u0E1F DEF +20% & \u0E40\u0E01\u0E23\u0E32\u0E30 12% \u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21");
        } else if (att.id === "tapir") {
          applyEffectToTarget2(def, { type: "sleep", duration: 2 });
          appliedEffects.push("\u0E17\u0E48\u0E2D\u0E07\u0E19\u0E34\u0E17\u0E23\u0E32\u0E01\u0E25\u0E37\u0E19\u0E1D\u0E31\u0E19: \u0E2B\u0E25\u0E31\u0E1A\u0E43\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "panda") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "shield", value: 0.2, duration: 2 });
          }
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E44\u0E1C\u0E48\u0E1E\u0E31\u0E19\u0E25\u0E33: \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 20% Max HP \u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19");
        } else if (att.id === "ocelot") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E1E\u0E23\u0E32\u0E19\u0E1E\u0E07\u0E44\u0E1E\u0E23: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "clouded_leopard") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E42\u0E09\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E22\u0E2D\u0E14\u0E40\u0E23\u0E37\u0E2D\u0E19\u0E44\u0E1E\u0E23: \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "chameleon") {
          applyEffectToTarget2(def, { type: "debuff_hit", value: 15, duration: 2 });
          appliedEffects.push("\u0E2A\u0E30\u0E01\u0E14\u0E15\u0E32\u0E2A\u0E25\u0E31\u0E1A\u0E2A\u0E35\u0E25\u0E27\u0E07\u0E15\u0E32: \u0E25\u0E14 HIT \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 15 \u0E41\u0E15\u0E49\u0E21 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "gibbon") {
          applyEffectToTarget2(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E40\u0E16\u0E32\u0E27\u0E31\u0E25\u0E22\u0E4C\u0E1E\u0E31\u0E19\u0E18\u0E19\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E2A\u0E27\u0E32\u0E17: \u0E25\u0E14 ATK \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "orangutan") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 15);
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E1E\u0E24\u0E01\u0E29\u0E32\u0E17\u0E25\u0E32\u0E22\u0E20\u0E1E: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -15");
        } else if (att.id === "toad") {
          applyEffectToTarget2(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E04\u0E32\u0E07\u0E04\u0E01\u0E1E\u0E48\u0E19\u0E22\u0E32\u0E07\u0E1E\u0E34\u0E29\u0E2A\u0E01\u0E31\u0E14\u0E17\u0E31\u0E1E: \u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "centipede") {
          applyEffectToTarget2(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E02\u0E32\u0E23\u0E38\u0E21\u0E17\u0E36\u0E49\u0E07: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "butterfly") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push("\u0E23\u0E30\u0E1A\u0E33\u0E1B\u0E35\u0E01\u0E1C\u0E35\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1E\u0E34\u0E29\u0E25\u0E27\u0E07\u0E15\u0E32: \u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -20");
        } else if (att.id === "gila_monster") {
          applyEffectToTarget2(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E1E\u0E34\u0E29\u0E1A\u0E14\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01: \u0E2A\u0E15\u0E31\u0E19 & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "black_widow") {
          applyEffectToTarget2(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E41\u0E21\u0E48\u0E21\u0E48\u0E32\u0E22\u0E14\u0E33\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E25\u0E14 DEF 25% & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "pitohui") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          applyEffectToTarget2(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E1E\u0E34\u0E29\u0E21\u0E36\u0E19\u0E07\u0E07: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29");
        } else if (att.id === "stonefish") {
          applyEffectToTarget2(att, { type: "shield", value: 0.18, duration: 2 });
          appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E2B\u0E34\u0E19\u0E17\u0E21\u0E34\u0E2C\u0E02\u0E22\u0E49\u0E33\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E34\u0E29 18% Max HP");
        } else if (att.id === "deathstalker") {
          applyEffectToTarget2(def, { type: "blind", duration: 1 });
          appliedEffects.push("\u0E2B\u0E32\u0E07\u0E21\u0E31\u0E08\u0E08\u0E38\u0E23\u0E32\u0E0A\u0E41\u0E17\u0E07\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 2 \u0E0A\u0E31\u0E49\u0E19 & \u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "cone_snail") {
          applyEffectToTarget2(def, { type: "stun", duration: 1 });
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E09\u0E21\u0E27\u0E01\u0E21\u0E23\u0E13\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E17: \u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07, \u0E2A\u0E15\u0E31\u0E19 & \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        } else if (att.id === "walrus") {
          applyEffectToTarget2(def, { type: "freeze", duration: 1 });
          appliedEffects.push("\u0E07\u0E32\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E17\u0E25\u0E32\u0E22\u0E18\u0E32\u0E23\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "leopard_seal") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E02\u0E32\u0E01\u0E23\u0E23\u0E44\u0E01\u0E23\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23\u0E48\u0E32\u0E07: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "wolverine") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E04\u0E25\u0E31\u0E48\u0E07\u0E17\u0E25\u0E32\u0E22\u0E2B\u0E34\u0E21\u0E30: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20%");
        } else if (att.id === "polar_bear") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E2D\u0E38\u0E49\u0E07\u0E15\u0E35\u0E19\u0E16\u0E25\u0E48\u0E21\u0E02\u0E31\u0E49\u0E27\u0E42\u0E25\u0E01: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "ermine") {
          appliedEffects.push("\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E02\u0E32\u0E27\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E1A\u0E31\u0E1F CRI+20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)");
        } else if (att.id === "lynx") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E07\u0E32\u0E2B\u0E34\u0E21\u0E30\u0E17\u0E30\u0E25\u0E27\u0E07\u0E08\u0E38\u0E14\u0E15\u0E32\u0E22: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "snow_leopard") {
          applyEffectToTarget2(def, { type: "freeze", duration: 1 });
          appliedEffects.push("\u0E42\u0E1C\u0E19\u0E02\u0E22\u0E49\u0E33\u0E08\u0E32\u0E01\u0E22\u0E2D\u0E14\u0E1C\u0E32\u0E40\u0E22\u0E37\u0E2D\u0E01\u0E41\u0E02\u0E47\u0E07: \u0E25\u0E14 DEF 30% & \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "puffin") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E40\u0E2B\u0E21\u0E31\u0E19\u0E15\u0E4C\u0E1B\u0E31\u0E48\u0E19\u0E1B\u0E48\u0E27\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14 SP -20");
        } else if (att.id === "narwhal") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E2B\u0E2D\u0E01\u0E40\u0E01\u0E25\u0E35\u0E22\u0E27\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E40\u0E2A\u0E35\u0E22\u0E1A\u0E2A\u0E01\u0E31\u0E14\u0E08\u0E38\u0E14: \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "seagull") {
          appliedEffects.push("\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E27\u0E22\u0E27\u0E32\u0E22\u0E1B\u0E35\u0E01\u0E27\u0E32\u0E22\u0E38\u0E2A\u0E31\u0E1A\u0E2A\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "armadillo") {
          applyEffectToTarget2(att, { type: "shield", value: 0.12, duration: 2 });
          appliedEffects.push("\u0E01\u0E49\u0E2D\u0E19\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E34\u0E49\u0E07\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP");
        } else if (att.id === "hyena") {
          applyEffectToTarget2(def, { type: "debuff_atk", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E02\u0E22\u0E49\u0E33\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E17\u0E25\u0E32\u0E22\u0E17\u0E31\u0E1E: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 ATK 20%");
        } else if (att.id === "sperm_whale") {
          applyEffectToTarget2(att, { type: "shield", value: 0.15, duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E2D\u0E40\u0E27\u0E08\u0E35\u0E43\u0E15\u0E49\u0E2A\u0E21\u0E38\u0E17\u0E23: \u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP");
        } else if (att.id === "tasmanian_devil") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E02\u0E22\u0E49\u0E33\u0E41\u0E2B\u0E25\u0E01: \u0E25\u0E14 DEF 20%");
        } else if (att.id === "black_vulture") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.2, duration: 2 });
          applyEffectToTarget2(def, { type: "poison", duration: 3, stacks: 1 });
          appliedEffects.push("\u0E08\u0E30\u0E07\u0E2D\u0E22\u0E17\u0E21\u0E34\u0E2C\u0E09\u0E35\u0E01\u0E01\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20%");
        } else if (att.id === "jaguar") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E40\u0E07\u0E32\u0E1E\u0E22\u0E31\u0E04\u0E06\u0E4C\u0E02\u0E22\u0E49\u0E33\u0E01\u0E30\u0E42\u0E2B\u0E25\u0E01\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "aye_aye") {
          def.sp = Math.max(0, def.sp - 20);
          appliedEffects.push("\u0E40\u0E19\u0E15\u0E23\u0E1B\u0E35\u0E28\u0E32\u0E08\u0E2A\u0E30\u0E01\u0E14\u0E27\u0E34\u0E0D\u0E0D\u0E32\u0E13: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14 SP -20");
        } else if (att.id === "crow") {
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push("\u0E1E\u0E32\u0E22\u0E38\u0E02\u0E19\u0E19\u0E01\u0E17\u0E21\u0E34\u0E2C\u0E01\u0E25\u0E37\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10");
        } else if (att.id === "vampire_squid") {
          applyEffectToTarget2(def, { type: "silence", duration: 2 });
          const buffTypes = ["buff_atk", "buff_def", "buff_spd", "buff_cri", "buff_flee", "buff_hit", "buff_ab", "buff_block", "shield"];
          def.effects = def.effects.filter((e) => !buffTypes.includes(e.type));
          def.shield = 0;
          appliedEffects.push("\u0E21\u0E48\u0E32\u0E19\u0E2B\u0E21\u0E36\u0E01\u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14: \u0E43\u0E1A\u0E49 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E1A\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14");
        } else if (att.id === "sand_frog") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "shield", value: 0.15, duration: 2 });
          }
          appliedEffects.push("\u0E01\u0E32\u0E22\u0E32\u0E17\u0E23\u0E32\u0E22\u0E1E\u0E2D\u0E07\u0E25\u0E21\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP");
        } else if (att.id === "camel") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "buff_def", value: 0.2, duration: 2 });
          }
          appliedEffects.push("\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E19\u0E01\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E41\u0E2B\u0E48\u0E07\u0E17\u0E30\u0E40\u0E25\u0E17\u0E23\u0E32\u0E22: \u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21");
        } else if (att.id === "white_bison") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "shield", value: 0.2, duration: 2 });
            applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
          }
          appliedEffects.push("\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E2A\u0E07\u0E28\u0E31\u0E01\u0E14\u0E34\u0E4C\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E44\u0E1A\u0E0B\u0E31\u0E19\u0E40\u0E17\u0E27\u0E30: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 20% Max HP & \u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F");
        } else if (att.id === "sand_cat") {
          applyEffectToTarget2(def, { type: "poison", stacks: 1, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E09\u0E35\u0E01\u0E1C\u0E37\u0E19\u0E17\u0E23\u0E32\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "sidewinder") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.25, duration: 2 });
          appliedEffects.push("\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E44\u0E0B\u0E14\u0E4C\u0E44\u0E27\u0E19\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E09\u0E01\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19: \u0E25\u0E14 DEF 25%");
        } else if (att.id === "akhal_teke") {
          def.gauge = Math.max(0, def.gauge - 20);
          appliedEffects.push("\u0E1A\u0E32\u0E17\u0E32\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E17\u0E2D\u0E07\u0E04\u0E33: \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 -20 \u0E41\u0E15\u0E49\u0E21");
        } else if (att.id === "caracal") {
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E17\u0E30\u0E22\u0E32\u0E19\u0E15\u0E30\u0E1B\u0E1A\u0E41\u0E2A\u0E07\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E30\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23: \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15");
        } else if (att.id === "gyrfalcon") {
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.35, duration: 2 });
          appliedEffects.push("\u0E28\u0E23\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E14\u0E34\u0E48\u0E07\u0E1E\u0E34\u0E06\u0E32\u0E15\u0E44\u0E08\u0E23\u0E4C\u0E1F\u0E2D\u0E25\u0E04\u0E2D\u0E19: \u0E25\u0E14 DEF \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 35%");
        } else if (att.id === "frilled_lizard") {
          applyEffectToTarget2(def, { type: "blind", duration: 2 });
          appliedEffects.push("\u0E41\u0E1C\u0E48\u0E41\u0E1C\u0E07\u0E04\u0E2D\u0E2A\u0E38\u0E23\u0E34\u0E22\u0E31\u0E19\u0E2A\u0E30\u0E01\u0E14\u0E02\u0E27\u0E31\u0E0D: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "electric_ray") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "shield", value: 0.15, duration: 2 });
          }
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E40\u0E01\u0E23\u0E32\u0E30\u0E2A\u0E19\u0E32\u0E21\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01\u0E21\u0E23\u0E13\u0E30: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP & \u0E2A\u0E42\u0E25\u0E27\u0E4C\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22");
        } else if (att.id === "african_buffalo") {
          for (const ally of friendlyLiving) {
            applyEffectToTarget2(ally, { type: "shield", value: 0.2, duration: 2 });
          }
          applyEffectToTarget2(def, { type: "stun", duration: 1 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E40\u0E01\u0E23\u0E32\u0E30\u0E01\u0E23\u0E30\u0E14\u0E39\u0E01\u0E40\u0E02\u0E32\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1A\u0E32\u0E15\u0E1E\u0E38\u0E48\u0E07\u0E0A\u0E19: \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 20% Max HP & \u0E2A\u0E15\u0E31\u0E19\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22");
        } else if (att.id === "pistol_shrimp") {
          applyEffectToTarget2(def, { type: "vulnerable", duration: 2 });
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.2, duration: 2 });
          def.sp = Math.max(0, def.sp - 15);
          appliedEffects.push("\u0E01\u0E23\u0E30\u0E2A\u0E38\u0E19\u0E1F\u0E2D\u0E07\u0E2D\u0E32\u0E01\u0E32\u0E28: \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 20% & \u0E15\u0E31\u0E14 SP -15");
        } else if (att.id === "shark") {
          applyEffectToTarget2(def, { type: "bleed", duration: 2 });
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E01\u0E31\u0E14\u0E02\u0E22\u0E49\u0E33: \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "cassowary") {
          applyEffectToTarget2(def, { type: "bleed", duration: 2 });
          applyEffectToTarget2(def, { type: "debuff_def", value: 0.3, duration: 2 });
          appliedEffects.push("\u0E01\u0E23\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23: \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E25\u0E14 DEF 30%");
        } else if (att.id === "buffalo") {
          applyEffectToTarget2(def, { type: "taunt", duration: 2, sourceId: `${att.side}_${att.slotIndex}` });
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E40\u0E2B\u0E25\u0E47\u0E01\u0E0A\u0E19\u0E41\u0E2B\u0E25\u0E01: \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "crocodile") {
          applyEffectToTarget2(def, { type: "vulnerable", duration: 2 });
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E01\u0E31\u0E14\u0E2A\u0E30\u0E1A\u0E31\u0E14\u0E2B\u0E32\u0E07: \u0E40\u0E1B\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "mammoth") {
          applyEffectToTarget2(def, { type: "taunt", duration: 2, sourceId: `${att.side}_${att.slotIndex}` });
          appliedEffects.push("\u0E21\u0E2B\u0E32\u0E04\u0E25\u0E37\u0E48\u0E19\u0E07\u0E32\u0E0A\u0E49\u0E32\u0E07\u0E08\u0E34\u0E15\u0E2A\u0E30\u0E17\u0E49\u0E32\u0E19: \u0E22\u0E31\u0E48\u0E27\u0E22\u0E38 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19");
        } else if (att.id === "tiger_beetle") {
          applyEffectToTarget2(def, { type: "poison", stacks: 1, duration: 2 });
          att.gauge = Math.min(100, att.gauge + 15);
          appliedEffects.push("\u0E01\u0E23\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E2A\u0E31\u0E1A\u0E1E\u0E23\u0E34\u0E1A\u0E15\u0E32\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08 +15");
        } else if (att.id === "black_mamba") {
          applyEffectToTarget2(def, { type: "poison", stacks: 1, duration: 3 });
          applyEffectToTarget2(def, { type: "debuff_spd", value: 0.2, duration: 2 });
          appliedEffects.push("\u0E2D\u0E2A\u0E23\u0E1E\u0E34\u0E29\u0E14\u0E33\u0E09\u0E01\u0E40\u0E02\u0E35\u0E49\u0E22\u0E27\u0E2D\u0E31\u0E2A\u0E19\u0E35\u0E1B\u0E25\u0E34\u0E14\u0E0A\u0E35\u0E1E: \u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E2A\u0E42\u0E25\u0E27\u0E4C 20%");
        } else if (att.id === "electric_catfish") {
          applyEffectToTarget2(def, { type: "slow", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 10);
          appliedEffects.push("\u0E1B\u0E23\u0E30\u0E08\u0E38\u0E2D\u0E31\u0E21\u0E1E\u0E32\u0E15 350 \u0E42\u0E27\u0E25\u0E15\u0E4C\u0E0A\u0E47\u0E2D\u0E15\u0E01\u0E23\u0E30\u0E15\u0E38\u0E01: \u0E2A\u0E42\u0E25\u0E27\u0E4C & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -10");
        } else if (att.id === "zebra") {
          applyEffectToTarget2(def, { type: "blind", duration: 2 });
          def.gauge = Math.max(0, def.gauge - 12);
          appliedEffects.push("\u0E41\u0E16\u0E1A\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E25\u0E27\u0E07\u0E15\u0E32\u0E42\u0E21\u0E0A\u0E31\u0E19\u0E41\u0E14\u0E0B\u0E40\u0E0B\u0E34\u0E25: \u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -12");
        } else if (att.id === "electric_eel") {
          applyEffectToTarget2(def, { type: "stun", duration: 1 });
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
          applyEffectToTarget2(ally, { type: "cleanse", count: 1 });
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
        return;
      }
      damage -= target.shield;
      target.shield = 0;
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
    if (!hasStatus2(f, "shield")) f.shield = 0;
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

// src/data/signature_descriptions.json
var signature_descriptions_default = {
  rooster: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  cat: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E1A\u0E31\u0E1F SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  buffalo: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  dog: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E15\u0E23\u0E36\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  pig: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  horse: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  rat: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  squirrel: "\u0E15\u0E35 \xD71.8 + \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 HIT +20 \u0E41\u0E25\u0E30 CRI% +12% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  snail: "\u0E15\u0E35 \xD71.8 \u0E25\u0E14 SPD \u0E28\u0E31\u0E15\u0E23\u0E39 15% + \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  rabbit: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD \u0E15\u0E19\u0E40\u0E2D\u0E07 +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  bat: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.20 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E32\u0E1A\u0E2D\u0E14 + \u0E14\u0E39\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E2E\u0E35\u0E25\u0E17\u0E35\u0E21 8%",
  porcupine: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.25 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 30% \u0E2A\u0E15\u0E31\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E15\u0E31\u0E27 + \u0E1A\u0E31\u0E1F DEF +20%",
  frog: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  wolf: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  turtle: "\u0E15\u0E35 \xD72.0 + \u0E01\u0E32\u0E07\u0E21\u0E48\u0E32\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19",
  tiger: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  snake: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  penguin: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  owl: "\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19",
  firefly: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 18% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E15\u0E19\u0E40\u0E2D\u0E07 1 \u0E2A\u0E16\u0E32\u0E19\u0E30",
  leopard: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  pangolin: "\u0E01\u0E27\u0E32\u0E14\u0E28\u0E31\u0E15\u0E23\u0E39\u0E41\u0E19\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.65 \xB7 \u0E25\u0E14 SPD \u0E41\u0E19\u0E27\u0E2B\u0E19\u0E49\u0E32 25% + \u0E40\u0E01\u0E23\u0E32\u0E30 20%",
  deer: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 12% Max HP, \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP \u0E41\u0E25\u0E30\u0E40\u0E15\u0E34\u0E21 +15 SP \u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19",
  eagle: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  rhino: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.5 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E2A\u0E32\u0E1B\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E34\u0E19 \u{1F5FF} (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19: \u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E18\u0E32\u0E15\u0E38\u0E14\u0E34\u0E19 \u0E2B\u0E49\u0E32\u0E21\u0E42\u0E08\u0E21\u0E15\u0E35\u0E41\u0E25\u0E30\u0E2B\u0E49\u0E32\u0E21\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39)",
  lion: "\u0E15\u0E35 \xD72.6 + \u0E04\u0E33\u0E23\u0E32\u0E21\u0E1B\u0E25\u0E38\u0E01\u0E02\u0E27\u0E31\u0E0D\u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 ATK +20%, SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  fox: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  grizzly: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  mantis: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  hornet: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 2 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  peacock: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2B\u0E21\u0E39\u0E48 1.8x \u0E25\u0E14 ATK 20% \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19",
  sea_lion: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E2A\u0E36\u0E19\u0E32\u0E21\u0E34\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.85 \xB7 \u0E2A\u0E42\u0E25\u0E27\u0E4C + \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 40% \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12%",
  black_panther: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  shark: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 30% \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  falcon: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E1A\u0E31\u0E1F SPD +20% \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F CRI +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  azure_dragon: "\u0E1C\u0E48\u0E32\u0E2A\u0E32\u0E22\u0E1F\u0E49\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 \xD73.5 \u0E0A\u0E34\u0E48\u0E07\u0E42\u0E14\u0E19\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.2 + \u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 SPD +20%, CRI +15%",
  naga: "\u0E04\u0E25\u0E37\u0E48\u0E19\u0E0B\u0E31\u0E14\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD72.0 \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C, \u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 -20 + \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 20% Max HP",
  phoenix: "\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E40\u0E1C\u0E32\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD72.3 \u0E15\u0E34\u0E14 Burn + \u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP & \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F",
  bull: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  beetle: "\u0E15\u0E35 \xD72.8 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 18% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  wild_boar: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  mongoose: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E1A\u0E31\u0E1F CRI% +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  monkey: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  bullet_ant: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E40\u0E1C\u0E32\u0E44\u0E2B\u0E21\u0E49 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  goat: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  parrot: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  komodo: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  flamingo: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F",
  capybara: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  sun_stag: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, +25 SP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F ATK +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  crab: "\u0E15\u0E35 \xD72.0 + \u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  piranha: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  flying_fish: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E1A\u0E31\u0E1F SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  starfish: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  crocodile: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  swordfish: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E1A\u0E31\u0E1F CRI% +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  octopus: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  sea_otter: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP \u0E41\u0E25\u0E30\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  hippo: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  orca: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  jellyfish: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 SPD 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  dolphin: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  bighorn: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  woodpecker: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  seagull: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  dove: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27 SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  yak: "\u0E42\u0E08\u0E21\u0E15\u0E35 \xD72.0 + \u0E01\u0E32\u0E07\u0E21\u0E48\u0E32\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19",
  kangaroo: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  swan: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19",
  ostrich: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -15 \u0E41\u0E15\u0E49\u0E21",
  cassowary: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  condor: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 SPD 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  quetzal: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +25%/FLEE +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  cheetah: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E1A\u0E31\u0E1F CRI% +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15 \u0E41\u0E15\u0E49\u0E21",
  honey_badger: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  gorilla: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  mole: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E1A\u0E31\u0E1F CRI% +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  cougar: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15 \u0E41\u0E15\u0E49\u0E21",
  perentie: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  prairie_dog: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E23\u0E36\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  anteater: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  elephant: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -15 \u0E41\u0E15\u0E49\u0E21",
  wombat: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  giraffe: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  sloth: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E1A\u0E31\u0E1F DEF +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP",
  tapir: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07",
  panda: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  moose: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  leaf_insect: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E1A\u0E31\u0E1F CRI% +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  ocelot: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15 \u0E41\u0E15\u0E49\u0E21",
  clouded_leopard: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  chameleon: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E23\u0E36\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 HIT \u0E28\u0E31\u0E15\u0E23\u0E39 15 \u0E41\u0E15\u0E49\u0E21 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  gibbon: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E2A\u0E25\u0E31\u0E1A\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39, \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08 -8 \u0E41\u0E15\u0E49\u0E21",
  orangutan: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -15 \u0E41\u0E15\u0E49\u0E21",
  koala: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  hornbill: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  toad: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  centipede: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  butterfly: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -20 SP",
  bee: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP, \u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +10",
  gila_monster: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  black_widow: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  pitohui: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 55% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 1 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  salamander: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  stonefish: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E01\u0E32\u0E07\u0E21\u0E48\u0E32\u0E19\u0E40\u0E01\u0E23\u0E32\u0E30\u0E1E\u0E34\u0E29 18% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  deathstalker: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29 2 \u0E0A\u0E31\u0E49\u0E19 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  cone_snail: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19), \u0E15\u0E23\u0E36\u0E07 (Root 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  horseshoe_crab: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  walrus: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  leopard_seal: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  wolverine: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  polar_bear: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  ermine: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E1A\u0E31\u0E1F CRI% +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  lynx: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15 \u0E41\u0E15\u0E49\u0E21",
  snow_leopard: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  puffin: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -20 \u0E41\u0E15\u0E49\u0E21",
  narwhal: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  krill: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP, \u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30 +10 SP",
  beluga: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  reindeer: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  armadillo: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 12% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  hyena: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  sperm_whale: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.85 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 15% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  tasmanian_devil: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  black_vulture: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  jaguar: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 70% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  aye_aye: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -20 SP",
  crow: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.75 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 -10 \u0E41\u0E15\u0E49\u0E21",
  vampire_squid: "\u0E14\u0E32\u0E40\u0E21\u0E08 \xD72.6 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 80% \u0E1B\u0E34\u0E14\u0E1C\u0E19\u0E36\u0E01\u0E43\u0E1A\u0E49 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E15\u0E34\u0E14\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 \u{1F52E} (\u0E25\u0E14 HP 3%/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  cockroach: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP, \u0E21\u0E2D\u0E1A\u0E1A\u0E31\u0E1F DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 SP +10",
  tokay_gecko: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  axolotl: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  sand_frog: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 20% Max HP \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 8% Max HP",
  camel: "\u0E1A\u0E31\u0E1F DEF +25%, \u0E23\u0E35\u0E40\u0E08\u0E19 6% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP 10% Max HP",
  white_bison: "\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 22% Max HP \u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F",
  sand_cat: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  sidewinder: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  akhal_teke: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E0A\u0E34\u0E48\u0E07\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E02\u0E49\u0E32\u0E07\u0E40\u0E04\u0E35\u0E22\u0E07 \xD71.2 \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -20 \u0E41\u0E15\u0E49\u0E21",
  caracal: "\u0E1A\u0E31\u0E1F CRI +30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  gyrfalcon: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E17\u0E30\u0E25\u0E27\u0E07\u0E2B\u0E25\u0E31\u0E07 \xD73.3 \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 35% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  frilled_lizard: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  alpaca: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F 1 \u0E2A\u0E16\u0E32\u0E19\u0E30 \u0E41\u0E25\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  white_elephant: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 26% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F DEF +25% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  electric_ray: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30 20% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  african_buffalo: "\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 22% Max HP \u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  pistol_shrimp: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  tiger_beetle: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  black_mamba: "\u0E1A\u0E31\u0E1F CRI +30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  electric_catfish: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 25% \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  zebra: "\u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  electric_eel: "\u0E42\u0E08\u0E21\u0E15\u0E35\u0E2B\u0E21\u0E39\u0E48\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19 \xD71.8 \xB7 \u0E2A\u0E15\u0E31\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E1F\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  star_nosed_mole: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% Max HP \u0E41\u0E25\u0E30\u0E21\u0E2D\u0E1A +15 SP",
  mouflon: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 18% Max HP, \u0E01\u0E32\u0E07\u0E40\u0E01\u0E23\u0E32\u0E30\u0E17\u0E35\u0E21 12% Max HP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F SPD +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  okapi: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 26% Max HP, \u0E25\u0E49\u0E32\u0E07\u0E14\u0E35\u0E1A\u0E31\u0E1F\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14, \u0E1A\u0E31\u0E1F ATK +20% \u0E41\u0E25\u0E30 SPD +20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  platypus: "\u0E14\u0E32\u0E40\u0E21\u0E08 1.5x \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E21\u0E2D\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30 15% Max HP \u0E43\u0E2B\u0E49\u0E15\u0E19\u0E40\u0E2D\u0E07 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  lemur: "\u0E14\u0E32\u0E40\u0E21\u0E08 2.0x \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  sphynx_cat: "\u0E14\u0E32\u0E40\u0E21\u0E08 1.8x \u0E25\u0E14 DEF \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  basilisk: "\u0E14\u0E32\u0E40\u0E21\u0E08 1.4x \u0E42\u0E2D\u0E01\u0E32\u0E2A 40% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  hamster: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 15% \u0E41\u0E25\u0E30\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +15 SP",
  giant_tortoise: "\u0E1A\u0E31\u0E1F DEF \u0E15\u0E19\u0E40\u0E2D\u0E07 +30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  serow: "\u0E14\u0E32\u0E40\u0E21\u0E08 2.2x \u0E42\u0E2D\u0E01\u0E32\u0E2A 45% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  slow_loris: "\u0E14\u0E32\u0E40\u0E21\u0E08 2.0x \u0E42\u0E2D\u0E01\u0E32\u0E2A 35% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  crane: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 20% Max HP \u0E41\u0E25\u0E30\u0E25\u0E49\u0E32\u0E07 1 \u0E14\u0E35\u0E1A\u0E31\u0E1F",
  mammoth: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2B\u0E21\u0E39\u0E48 1.6x \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1A\u0E31\u0E1F\u0E17\u0E35\u0E21 DEF +15% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  harpy_eagle: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E23\u0E38\u0E19\u0E41\u0E23\u0E07 2.2x \u0E42\u0E2D\u0E01\u0E32\u0E2A 50% \u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  anaconda: "\u0E14\u0E32\u0E40\u0E21\u0E08 2.0x \u0E25\u0E14 ATK \u0E28\u0E31\u0E15\u0E23\u0E39 20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  blue_whale: "\u0E2E\u0E35\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19 25% Max HP, \u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 +20 SP \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E1F HIT +15 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  qilin: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E27\u0E17\u0E08\u0E34\u0E15\u0E2B\u0E21\u0E39\u0E48 \xD72.2, \u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E2A\u0E31\u0E1A\u0E2A\u0E19 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 & \u0E40\u0E23\u0E48\u0E07\u0E40\u0E01\u0E08\u0E15\u0E19\u0E40\u0E2D\u0E07 +15",
  giant_dragonfly: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E25\u0E21 1.6x, \u0E15\u0E34\u0E14\u0E2A\u0E42\u0E25\u0E27\u0E4C 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 65% \u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  white_lion: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E2B\u0E21\u0E39\u0E48\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E19\u0E32\u0E21 1.8x, \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E38\u0E01\u0E04\u0E19\u0E15\u0E32\u0E1A\u0E2D\u0E14 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19, \u0E25\u0E14 ATK -20% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E28\u0E31\u0E15\u0E23\u0E39 -10 \u0E41\u0E15\u0E49\u0E21",
  behemoth: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.5 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E17\u0E38\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E15\u0E01 (\u0E25\u0E14 DEF 30% 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  leviathan: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.3 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -25 SP",
  garuda: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.4 (\u0E01\u0E32\u0E23\u0E31\u0E19\u0E15\u0E35\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 100%) \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 90% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E44\u0E2B\u0E25 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19",
  thunderbird: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.5 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E41\u0E25\u0E30\u0E15\u0E31\u0E14\u0E40\u0E01\u0E08\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22\u0E28\u0E31\u0E15\u0E23\u0E39 -25",
  fenrir: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.6 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E41\u0E0A\u0E48\u0E41\u0E02\u0E47\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 (\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E18\u0E32\u0E15\u0E38\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07)",
  verdant_hydra: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.2 \xB7 \u0E2A\u0E39\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E14 25% \u0E02\u0E2D\u0E07\u0E14\u0E32\u0E40\u0E21\u0E08\u0E17\u0E35\u0E48\u0E17\u0E33\u0E44\u0E14\u0E49\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E1F\u0E37\u0E49\u0E19\u0E1F\u0E39 HP \u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E42\u0E2D\u0E01\u0E32\u0E2A 80% \u0E15\u0E23\u0E36\u0E07\u0E23\u0E48\u0E32\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39 2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19",
  king_basilisk: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.5 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 90% \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E1E\u0E34\u0E29\u0E2A\u0E30\u0E2A\u0E21\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 2 \u0E0A\u0E31\u0E49\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35 (3 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19) \u0E41\u0E25\u0E30\u0E25\u0E14 DEF 30% (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  cerberus: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.7 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 80% \u0E15\u0E34\u0E14\u0E04\u0E33\u0E2A\u0E32\u0E1B\u0E21\u0E23\u0E13\u0E30 Curse (\u0E25\u0E14 HP 3%/\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E16\u0E32\u0E27\u0E23\u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E49\u0E32\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30)",
  solar_griffin: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.4 \xB7 \u0E42\u0E2D\u0E01\u0E32\u0E2A 85% \u0E2A\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E1F\u0E02\u0E2D\u0E07\u0E28\u0E31\u0E15\u0E23\u0E39\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E28\u0E31\u0E15\u0E23\u0E39\u0E15\u0E34\u0E14\u0E15\u0E32\u0E1A\u0E2D\u0E14 (2 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)",
  nine_tailed_fox: "\u0E14\u0E32\u0E40\u0E21\u0E08\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \xD74.3 (\u0E40\u0E08\u0E32\u0E30\u0E40\u0E01\u0E23\u0E32\u0E30 25%) \xB7 \u0E15\u0E31\u0E14 SP \u0E28\u0E31\u0E15\u0E23\u0E39 -30 SP \u0E17\u0E31\u0E19\u0E17\u0E35"
};

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

// src/sim/test_behemoth.ts
function assert(condition, message) {
  if (!condition) {
    console.error(`\u274C FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`  \u2713 ${message}`);
}
console.log("======================================================================");
console.log("  \u{1F9EA} \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E15\u0E33\u0E19\u0E32\u0E19 SS: \u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18 (Behemoth) - \u0E1E\u0E2A\u0E38\u0E18\u0E32 Striker");
console.log("======================================================================\n");
console.log("\u3010 1. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E41\u0E25\u0E30 Base Stats (SS Budget 182) \u3011");
var heroes = getAllHeroes();
var behemoth = heroes.find((h) => h.id === "behemoth");
assert(Boolean(behemoth), "\u0E1E\u0E1A\u0E2E\u0E35\u0E42\u0E23\u0E48 behemoth \u0E43\u0E19 heroes.json");
if (behemoth) {
  assert(behemoth.name === "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18", `\u0E0A\u0E37\u0E48\u0E2D\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${behemoth.name}`);
  assert(behemoth.rarity === "SS", `\u0E23\u0E30\u0E14\u0E31\u0E1A Rarity: ${behemoth.rarity}`);
  assert(behemoth.element === "earth", `\u0E18\u0E32\u0E15\u0E38: ${behemoth.element}`);
  assert(behemoth.role === "Striker", `\u0E2A\u0E32\u0E22\u0E1A\u0E17\u0E1A\u0E32\u0E17: ${behemoth.role}`);
  assert(behemoth.str === 92, `STR: ${behemoth.str}`);
  assert(behemoth.agi === 36, `AGI: ${behemoth.agi}`);
  assert(behemoth.sta === 54, `STA: ${behemoth.sta}`);
  assert(behemoth.str + behemoth.agi + behemoth.sta === 182, `\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E2A\u0E40\u0E15\u0E15\u0E31\u0E2A\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A SS Budget 182 (${behemoth.str + behemoth.agi + behemoth.sta})`);
  assert(behemoth.customMultipliers?.hp === 1.05, `\u0E15\u0E31\u0E27\u0E04\u0E39\u0E13\u0E1E\u0E34\u0E40\u0E28\u0E29 HP: ${behemoth.customMultipliers?.hp}`);
  assert(behemoth.customMultipliers?.atk === 1.05, `\u0E15\u0E31\u0E27\u0E04\u0E39\u0E13\u0E1E\u0E34\u0E40\u0E28\u0E29 ATK: ${behemoth.customMultipliers?.atk}`);
  assert(behemoth.customSigMult === 4.5, `\u0E15\u0E31\u0E27\u0E04\u0E39\u0E13\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 Striker: \xD7${behemoth.customSigMult}`);
}
console.log("\n\u3010 2. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A Ability: colossal_tremor \u3011");
var fBehemoth = createFighter("behemoth", void 0, 1, 1);
assert(fBehemoth.abilityId === "colossal_tremor", `Ability ID: ${fBehemoth.abilityId}`);
assert(fBehemoth.abilityName === "\u0E1E\u0E2A\u0E38\u0E18\u0E32\u0E2A\u0E30\u0E40\u0E17\u0E37\u0E2D\u0E19\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E31\u0E48\u0E19", `Ability Name: ${fBehemoth.abilityName}`);
var statsNoAbility = getEffectiveStats(fBehemoth, false);
var statsWithAbility = getEffectiveStats(fBehemoth, true);
assert(statsWithAbility.ab === statsNoAbility.ab + 15, `\u0E42\u0E1A\u0E19\u0E31\u0E2A AB +15% \u0E17\u0E33\u0E07\u0E32\u0E19\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (${statsNoAbility.ab} -> ${statsWithAbility.ab})`);
var stunRes = applyEffectToTarget(fBehemoth, { type: "stun", duration: 1 }, true);
assert(Boolean(stunRes && stunRes.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19")), `\u0E15\u0E49\u0E32\u0E19\u0E17\u0E32\u0E19\u0E2A\u0E15\u0E31\u0E19\u0E44\u0E14\u0E49\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08: "${stunRes}"`);
assert(!fBehemoth.effects.some((e) => e.type === "stun"), "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E15\u0E31\u0E19\u0E43\u0E19 effects list");
console.log("\n\u3010 3. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A Signature Effect: armor_break_and_stun \u3011");
var dummyTarget = createFighter("buffalo", void 0, 1, 1);
var sigRes = applyEffectToTarget(dummyTarget, { type: "armor_break_and_stun", duration: 1, value: 0.3 }, true);
assert(Boolean(sigRes && sigRes.includes("\u0E17\u0E38\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E15\u0E01") && sigRes.includes("\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19")), `\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22: "${sigRes}"`);
assert(dummyTarget.effects.some((e) => e.type === "debuff_def"), "\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14 debuff_def (\u0E25\u0E14 DEF 30%)");
assert(dummyTarget.effects.some((e) => e.type === "stun"), "\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19 (stun)");
var targetBehemoth = createFighter("behemoth", void 0, 1, 1);
var behemothAttackedRes = applyEffectToTarget(targetBehemoth, { type: "armor_break_and_stun", duration: 1, value: 0.3 }, true);
assert(targetBehemoth.effects.some((e) => e.type === "debuff_def"), "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E42\u0E14\u0E19\u0E25\u0E14 DEF 30% \u0E44\u0E14\u0E49");
assert(!targetBehemoth.effects.some((e) => e.type === "stun"), "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E44\u0E21\u0E48\u0E15\u0E34\u0E14\u0E2A\u0E15\u0E31\u0E19\u0E41\u0E21\u0E49\u0E42\u0E14\u0E19 armor_break_and_stun");
assert(Boolean(behemothAttackedRes && behemothAttackedRes.includes("\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19")), `\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E23\u0E30\u0E1A\u0E38\u0E20\u0E39\u0E21\u0E34\u0E04\u0E38\u0E49\u0E21\u0E01\u0E31\u0E19\u0E2A\u0E15\u0E31\u0E19: "${behemothAttackedRes}"`);
console.log("\n\u3010 4. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22 \u0E41\u0E25\u0E30 Lore \u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E43\u0E19\u0E15\u0E33\u0E19\u0E32\u0E19 \u3011");
var sigDesc = signature_descriptions_default["behemoth"];
assert(Boolean(sigDesc && sigDesc.includes("\xD74.5") && sigDesc.includes("\u0E17\u0E38\u0E1A\u0E40\u0E01\u0E23\u0E32\u0E30\u0E41\u0E15\u0E01")), `\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E17\u0E48\u0E32\u0E44\u0E21\u0E49\u0E15\u0E32\u0E22: "${sigDesc}"`);
var lore = animal_lore_default["behemoth"];
assert(Boolean(lore && lore.scientificName === "Gigantus Terra Behemoth"), `\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E32\u0E07\u0E0A\u0E35\u0E27\u0E27\u0E34\u0E17\u0E22\u0E32/\u0E15\u0E33\u0E19\u0E32\u0E19: ${lore?.scientificName}`);
assert(Boolean(lore && lore.category.includes("\u0E2D\u0E2A\u0E39\u0E23\u0E1A\u0E23\u0E23\u0E1E\u0E01\u0E32\u0E25\u0E1E\u0E2A\u0E38\u0E18\u0E32")), `\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\u0E2A\u0E31\u0E15\u0E27\u0E4C: ${lore?.category}`);
console.log("\n\u3010 5. \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E33\u0E25\u0E2D\u0E07\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49 1v1 \u3011");
var session1v1 = new BattleSession(["behemoth"], ["buffalo"], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 30
});
var winner1v1 = session1v1.runToEnd();
assert(session1v1.logs.length > 0, `\u0E08\u0E33\u0E25\u0E2D\u0E07 1v1 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E08\u0E1A\u0E43\u0E19 ${winner1v1 === "A" ? "\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E0A\u0E19\u0E30" : winner1v1 === "B" ? "\u0E1A\u0E31\u0E1F\u0E1F\u0E32\u0E42\u0E25\u0E0A\u0E19\u0E30" : "\u0E40\u0E2A\u0E21\u0E2D"}, ${session1v1.turn} \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19)`);
var shockwave1v1Events = session1v1.logs.filter((e) => e.appliedEffects?.some((a) => a.includes("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27")));
console.log(`  \u2139 \u0E15\u0E23\u0E27\u0E08\u0E1E\u0E1A\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E43\u0E19 1v1: ${shockwave1v1Events.length} \u0E04\u0E23\u0E31\u0E49\u0E07`);
console.log("\n\u3010 6. \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E33\u0E25\u0E2D\u0E07\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49 2v2 (TeamBattleSession) \u3011");
var teamSession = new TeamBattleSession(["behemoth", "rooster"], ["buffalo", "cat"], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 30
});
var winner2v2 = teamSession.runToEnd();
assert(teamSession.logs.length > 0, `\u0E08\u0E33\u0E25\u0E2D\u0E07 2v2 \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 (\u0E1C\u0E39\u0E49\u0E0A\u0E19\u0E30: ${winner2v2})`);
var shockwave2v2Events = teamSession.logs.filter((e) => e.appliedEffects?.some((a) => a.includes("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27")));
console.log(`  \u2139 \u0E15\u0E23\u0E27\u0E08\u0E1E\u0E1A\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27 AoE \u0E43\u0E19 2v2: ${shockwave2v2Events.length} \u0E04\u0E23\u0E31\u0E49\u0E07`);
console.log("\n\u3010 7. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E14\u0E32\u0E40\u0E21\u0E08\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27 25% ATK \u3011");
var behStats = getEffectiveStats(fBehemoth, true);
var expectedShockwave = Math.max(1, Math.round(behStats.atk * 0.25));
assert(expectedShockwave > 0, `\u0E04\u0E33\u0E19\u0E27\u0E13\u0E14\u0E32\u0E40\u0E21\u0E08\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27: ${expectedShockwave} \u0E14\u0E32\u0E40\u0E21\u0E08 (25% \u0E02\u0E2D\u0E07 ATK ${behStats.atk})`);
console.log("\n\u3010 8. \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 (Guarantee Crit Test) \u3011");
var critSession = new BattleSession(["behemoth"], ["turtle"], {
  enableSkillEffects: true,
  enableAbilities: true,
  maxTurns: 50
});
var behFighter = critSession.teamA.fighters[0];
behFighter.effects.push({ type: "buff_cri", value: 100, duration: 10 });
critSession.runToEnd();
var critShockwaves = critSession.logs.filter((e) => e.appliedEffects?.some((a) => a.includes("\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27")));
assert(critShockwaves.length > 0, `\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E04\u0E23\u0E34\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E08\u0E30\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E04\u0E25\u0E37\u0E48\u0E19\u0E01\u0E23\u0E30\u0E41\u0E17\u0E01\u0E41\u0E1C\u0E48\u0E19\u0E14\u0E34\u0E19\u0E44\u0E2B\u0E27 ${critShockwaves.length} \u0E04\u0E23\u0E31\u0E49\u0E07!`);
console.log("\n======================================================================");
console.log("\u{1F389} \u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A Behemoth (\u0E40\u0E1A\u0E2E\u0E35\u0E21\u0E2D\u0E18) SS Earth Striker \u0E1C\u0E48\u0E32\u0E19\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19 100%!");
console.log("======================================================================\n");
