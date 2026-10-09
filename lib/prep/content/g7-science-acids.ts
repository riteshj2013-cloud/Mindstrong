import type { ChapterDef, PrepQuestion } from "../types";

/** Acids, Bases and Salts - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-sci-acids-a-q01",
    prompt: "Acids taste ____ (never taste unknown lab chemicals!).",
    options: [
      { id: "a", text: "Sour" },
      { id: "b", text: "Sweet" },
      { id: "c", text: "Salty always" },
      { id: "d", text: "Bitter always" }
    ],
    answerId: "a",
    explanation: "Edible acids like lemon taste sour; lab tasting is unsafe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q02",
    prompt: "Bases taste ____ and feel soapy (do not taste/touch unknowns!).",
    options: [
      { id: "a", text: "Sour" },
      { id: "b", text: "Bitter" },
      { id: "c", text: "Sweet always" },
      { id: "d", text: "Metallic always" }
    ],
    answerId: "b",
    explanation: "Bases are typically bitter and soapy to touch \u2014 but never test unknowns that way.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q03",
    prompt: "Litmus in acid turns\u2026",
    options: [
      { id: "a", text: "Blue" },
      { id: "b", text: "Green" },
      { id: "c", text: "Red" },
      { id: "d", text: "Black" }
    ],
    answerId: "c",
    explanation: "Blue litmus turns red in acid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q04",
    prompt: "Litmus in base turns\u2026",
    options: [
      { id: "a", text: "Red" },
      { id: "b", text: "Yellow" },
      { id: "c", text: "Orange" },
      { id: "d", text: "Blue" }
    ],
    answerId: "d",
    explanation: "Red litmus turns blue in base.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q05",
    prompt: "A neutral solution on litmus\u2026",
    options: [
      { id: "a", text: "Does not change litmus colour" },
      { id: "b", text: "Always turns purple permanently as acid" },
      { id: "c", text: "Always bleaches it" },
      { id: "d", text: "Turns it to metal" }
    ],
    answerId: "a",
    explanation: "Neutral solutions do not affect litmus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q06",
    prompt: "The pH of a neutral solution is\u2026",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "7" },
      { id: "c", text: "14" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "pH 7 is neutral at standard conditions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q07",
    prompt: "Acids have pH\u2026",
    options: [
      { id: "a", text: "Exactly 7" },
      { id: "b", text: "Greater than 7 only" },
      { id: "c", text: "Less than 7" },
      { id: "d", text: "Exactly 14" }
    ],
    answerId: "c",
    explanation: "Acidic solutions have pH < 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q08",
    prompt: "Bases have pH\u2026",
    options: [
      { id: "a", text: "Less than 7" },
      { id: "b", text: "Exactly 0" },
      { id: "c", text: "Exactly 7 only" },
      { id: "d", text: "Greater than 7" }
    ],
    answerId: "d",
    explanation: "Basic/alkaline solutions have pH > 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q09",
    prompt: "Which is a natural acid indicator?",
    options: [
      { id: "a", text: "Turmeric" },
      { id: "b", text: "Common salt" },
      { id: "c", text: "Sugar" },
      { id: "d", text: "Sand" }
    ],
    answerId: "a",
    explanation: "Turmeric is a natural indicator (yellow \u2192 reddish-brown in base).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q10",
    prompt: "China rose indicator turns ____ in acid.",
    options: [
      { id: "a", text: "Green" },
      { id: "b", text: "Dark pink / magenta" },
      { id: "c", text: "Blue always" },
      { id: "d", text: "Black" }
    ],
    answerId: "b",
    explanation: "China rose gives dark pink in acid and green in base.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q11",
    prompt: "Hydrochloric acid\u2019s formula is\u2026",
    options: [
      { id: "a", text: "H\u2082SO\u2084" },
      { id: "b", text: "HNO\u2083" },
      { id: "c", text: "HCl" },
      { id: "d", text: "NaOH" }
    ],
    answerId: "c",
    explanation: "HCl is hydrochloric acid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q12",
    prompt: "Sulphuric acid\u2019s formula is\u2026",
    options: [
      { id: "a", text: "HCl" },
      { id: "b", text: "NaCl" },
      { id: "c", text: "Ca(OH)\u2082" },
      { id: "d", text: "H\u2082SO\u2084" }
    ],
    answerId: "d",
    explanation: "H\u2082SO\u2084 is sulphuric acid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q13",
    prompt: "Sodium hydroxide is a\u2026",
    options: [
      { id: "a", text: "Base (alkali)" },
      { id: "b", text: "Acid" },
      { id: "c", text: "Salt only" },
      { id: "d", text: "Indicator" }
    ],
    answerId: "a",
    explanation: "NaOH is a strong base/alkali.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q14",
    prompt: "The reaction of acid + base produces\u2026",
    options: [
      { id: "a", text: "Only oxygen" },
      { id: "b", text: "Salt and water" },
      { id: "c", text: "Only hydrogen always without salt" },
      { id: "d", text: "Only nitrogen" }
    ],
    answerId: "b",
    explanation: "Neutralisation: acid + base \u2192 salt + water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q15",
    prompt: "Neutralisation is used in treating ant bites because ant venom is acidic and\u2026",
    options: [
      { id: "a", text: "A strong acid helps more" },
      { id: "b", text: "Salt removes oxygen" },
      { id: "c", text: "A mild base can neutralise it" },
      { id: "d", text: "Indicators cure bites" }
    ],
    answerId: "c",
    explanation: "Mild baking soda (base) can neutralise acidic ant venom.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q16",
    prompt: "Acids react with many metals to liberate\u2026",
    options: [
      { id: "a", text: "Nitrogen gas" },
      { id: "b", text: "Neon" },
      { id: "c", text: "Ozone" },
      { id: "d", text: "Hydrogen gas" }
    ],
    answerId: "d",
    explanation: "Active metals + acid often give H\u2082.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q17",
    prompt: "Carbon dioxide turns limewater\u2026",
    options: [
      { id: "a", text: "Milky" },
      { id: "b", text: "Blue" },
      { id: "c", text: "Green" },
      { id: "d", text: "Black" }
    ],
    answerId: "a",
    explanation: "CO\u2082 + limewater \u2192 milky calcium carbonate.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q18",
    prompt: "Baking soda\u2019s chemical name is\u2026",
    options: [
      { id: "a", text: "Sodium hydroxide" },
      { id: "b", text: "Sodium hydrogen carbonate" },
      { id: "c", text: "Calcium oxide" },
      { id: "d", text: "Potassium nitrate" }
    ],
    answerId: "b",
    explanation: "NaHCO\u2083 is sodium hydrogen carbonate (baking soda).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q19",
    prompt: "Slaked lime is\u2026",
    options: [
      { id: "a", text: "Sodium chloride" },
      { id: "b", text: "Hydrochloric acid" },
      { id: "c", text: "Calcium hydroxide" },
      { id: "d", text: "Sugar" }
    ],
    answerId: "c",
    explanation: "Ca(OH)\u2082 is slaked lime.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q20",
    prompt: "Which salt is used to make food tasty (common salt)?",
    options: [
      { id: "a", text: "Copper sulphate" },
      { id: "b", text: "Calcium carbonate only as table salt" },
      { id: "c", text: "Potassium permanganate" },
      { id: "d", text: "Sodium chloride" }
    ],
    answerId: "d",
    explanation: "NaCl is common salt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q21",
    prompt: "Acids are ____ in water (handle with care; dilution rule).",
    options: [
      { id: "a", text: "Corrosive / can be made into aqueous solutions" },
      { id: "b", text: "Insoluble always" },
      { id: "c", text: "Magnetic" },
      { id: "d", text: "Solid metals" }
    ],
    answerId: "a",
    explanation: "Many acids form aqueous solutions and can be corrosive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q22",
    prompt: "An alkali is\u2026",
    options: [
      { id: "a", text: "Any salt" },
      { id: "b", text: "A base that dissolves in water" },
      { id: "c", text: "Any acid" },
      { id: "d", text: "An indicator" }
    ],
    answerId: "b",
    explanation: "Alkalis are water-soluble bases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q23",
    prompt: "Phenolphthalein in acid is\u2026",
    options: [
      { id: "a", text: "Pink" },
      { id: "b", text: "Blue" },
      { id: "c", text: "Colourless" },
      { id: "d", text: "Green" }
    ],
    answerId: "c",
    explanation: "Phenolphthalein is colourless in acid and pink in base.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-a-q24",
    prompt: "Phenolphthalein in base is\u2026",
    options: [
      { id: "a", text: "Colourless" },
      { id: "b", text: "Red litmus only" },
      { id: "c", text: "Milky" },
      { id: "d", text: "Pink" }
    ],
    answerId: "d",
    explanation: "It turns pink in basic solutions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-sci-acids-b-q01",
    prompt: "Tooth decay is promoted by acids from bacteria; toothpaste is usually\u2026",
    options: [
      { id: "a", text: "Mildly basic to neutralise acids" },
      { id: "b", text: "Strongly acidic" },
      { id: "c", text: "Pure sulphuric acid" },
      { id: "d", text: "Only sugar" }
    ],
    answerId: "a",
    explanation: "Basic toothpaste helps neutralise mouth acids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q02",
    prompt: "Factory waste acids are often treated with\u2026",
    options: [
      { id: "a", text: "More acid" },
      { id: "b", text: "Bases (neutralisation) before release" },
      { id: "c", text: "Only sugar" },
      { id: "d", text: "Only oxygen gas" }
    ],
    answerId: "b",
    explanation: "Neutralisation reduces environmental harm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q03",
    prompt: "Ammonia solution is\u2026",
    options: [
      { id: "a", text: "Acidic" },
      { id: "b", text: "Neutral salt only" },
      { id: "c", text: "Basic" },
      { id: "d", text: "An indicator dye only" }
    ],
    answerId: "c",
    explanation: "Aqueous ammonia is a base.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q04",
    prompt: "Which is an olfactory indicator?",
    options: [
      { id: "a", text: "Blue litmus paper only" },
      { id: "b", text: "Thermometer" },
      { id: "c", text: "Magnet" },
      { id: "d", text: "Onion / vanilla (odour changes in acid/base)" }
    ],
    answerId: "d",
    explanation: "Olfactory indicators change smell in acid/base.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q05",
    prompt: "The salt formed from HCl + NaOH is\u2026",
    options: [
      { id: "a", text: "NaCl" },
      { id: "b", text: "Na\u2082SO\u2084" },
      { id: "c", text: "CaCO\u2083" },
      { id: "d", text: "KNO\u2083" }
    ],
    answerId: "a",
    explanation: "HCl + NaOH \u2192 NaCl + H\u2082O.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q06",
    prompt: "Acids turn methyl orange\u2026",
    options: [
      { id: "a", text: "Yellow" },
      { id: "b", text: "Red / pinkish" },
      { id: "c", text: "Green" },
      { id: "d", text: "Blue" }
    ],
    answerId: "b",
    explanation: "Methyl orange is red in acid and yellow in base.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q07",
    prompt: "Bases turn methyl orange\u2026",
    options: [
      { id: "a", text: "Red" },
      { id: "b", text: "Black" },
      { id: "c", text: "Yellow" },
      { id: "d", text: "Colourless always" }
    ],
    answerId: "c",
    explanation: "Methyl orange is yellow in basic medium.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q08",
    prompt: "Curd and citrus fruits contain\u2026",
    options: [
      { id: "a", text: "Only strong bases" },
      { id: "b", text: "Only pure metals" },
      { id: "c", text: "Only indicators" },
      { id: "d", text: "Acids (lactic / citric etc.)" }
    ],
    answerId: "d",
    explanation: "Food acids give sour taste.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q09",
    prompt: "Soap solution is generally\u2026",
    options: [
      { id: "a", text: "Basic" },
      { id: "b", text: "Strongly acidic like HCl" },
      { id: "c", text: "pH 7 exactly always" },
      { id: "d", text: "A salt without ions" }
    ],
    answerId: "a",
    explanation: "Soap solutions are usually alkaline.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q10",
    prompt: "Which gas is released when an acid reacts with a metal carbonate?",
    options: [
      { id: "a", text: "Hydrogen only always" },
      { id: "b", text: "Carbon dioxide" },
      { id: "c", text: "Nitrogen" },
      { id: "d", text: "Neon" }
    ],
    answerId: "b",
    explanation: "Acid + carbonate \u2192 salt + water + CO\u2082.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q11",
    prompt: "Distilled water is\u2026",
    options: [
      { id: "a", text: "Strongly acidic" },
      { id: "b", text: "Strongly basic" },
      { id: "c", text: "Neutral" },
      { id: "d", text: "A salt crystal" }
    ],
    answerId: "c",
    explanation: "Pure water is neutral (pH 7).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q12",
    prompt: "A pH of 2 indicates a\u2026",
    options: [
      { id: "a", text: "Neutral solution" },
      { id: "b", text: "Strongly basic solution" },
      { id: "c", text: "Salt with pH 7" },
      { id: "d", text: "Strongly acidic solution" }
    ],
    answerId: "d",
    explanation: "Far below 7 means strongly acidic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q13",
    prompt: "A pH of 13 indicates a\u2026",
    options: [
      { id: "a", text: "Strongly basic solution" },
      { id: "b", text: "Neutral solution" },
      { id: "c", text: "Strongly acidic solution" },
      { id: "d", text: "Pure sugar" }
    ],
    answerId: "a",
    explanation: "Far above 7 means strongly basic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q14",
    prompt: "Neutralisation can be represented as\u2026",
    options: [
      { id: "a", text: "Na + Cl \u2192 only heat" },
      { id: "b", text: "H\u207a + OH\u207b \u2192 H\u2082O" },
      { id: "c", text: "CO\u2082 \u2192 O\u2082" },
      { id: "d", text: "N\u2082 + O\u2082 \u2192 sugar" }
    ],
    answerId: "b",
    explanation: "Hydrogen ions and hydroxide ions form water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q15",
    prompt: "Plaster of Paris is related to\u2026",
    options: [
      { id: "a", text: "Sodium hydroxide acid" },
      { id: "b", text: "Only nitrogen gas" },
      { id: "c", text: "Calcium sulphate chemistry (salts)" },
      { id: "d", text: "Chlorophyll" }
    ],
    answerId: "c",
    explanation: "PoP comes from gypsum (a salt) chemistry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q16",
    prompt: "Bleaching powder is associated with\u2026",
    options: [
      { id: "a", text: "Only sugar refining as its only use named here" },
      { id: "b", text: "Making chilli milder" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Chlorine chemistry used for bleaching/disinfecting" }
    ],
    answerId: "d",
    explanation: "Bleaching powder releases chlorine for bleaching/disinfection.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q17",
    prompt: "Which is NOT a property of acids?",
    options: [
      { id: "a", text: "They turn red litmus blue" },
      { id: "b", text: "They taste sour (edible ones)" },
      { id: "c", text: "They can react with metals" },
      { id: "d", text: "They have pH < 7" }
    ],
    answerId: "a",
    explanation: "Acids turn blue litmus red, not red litmus blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q18",
    prompt: "Which is NOT a property of bases?",
    options: [
      { id: "a", text: "They feel soapy" },
      { id: "b", text: "They turn blue litmus red" },
      { id: "c", text: "They have pH > 7" },
      { id: "d", text: "They can neutralise acids" }
    ],
    answerId: "b",
    explanation: "Bases turn red litmus blue; they do not turn blue litmus red.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q19",
    prompt: "Universal indicator shows\u2026",
    options: [
      { id: "a", text: "Only one colour forever" },
      { id: "b", text: "Temperature only" },
      { id: "c", text: "Different colours across the pH range" },
      { id: "d", text: "Mass only" }
    ],
    answerId: "c",
    explanation: "Universal indicator maps pH to a colour chart.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q20",
    prompt: "Diluting a strong acid should be done by\u2026",
    options: [
      { id: "a", text: "Adding water to concentrated acid quickly" },
      { id: "b", text: "Tasting first" },
      { id: "c", text: "Heating in a closed bottle" },
      { id: "d", text: "Adding acid slowly to water (with care)" }
    ],
    answerId: "d",
    explanation: "Safety: acid into water, slowly, with stirring \u2014 never the reverse casually.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q21",
    prompt: "Soil that is too acidic for plants may be treated with\u2026",
    options: [
      { id: "a", text: "Mild bases like slaked lime" },
      { id: "b", text: "More strong acid" },
      { id: "c", text: "Only sugar" },
      { id: "d", text: "Only plastic" }
    ],
    answerId: "a",
    explanation: "Lime can neutralise excess soil acidity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q22",
    prompt: "Which ion do acids commonly release in water?",
    options: [
      { id: "a", text: "OH\u207b only" },
      { id: "b", text: "H\u207a (hydrogen ions)" },
      { id: "c", text: "Only Na\u207a" },
      { id: "d", text: "Only Cl\u2082 gas always" }
    ],
    answerId: "b",
    explanation: "Acids furnish H\u207a in aqueous solution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q23",
    prompt: "Which ion do alkalis commonly release in water?",
    options: [
      { id: "a", text: "H\u207a only" },
      { id: "b", text: "Only CO\u2083\u00b2\u207b always" },
      { id: "c", text: "OH\u207b (hydroxide ions)" },
      { id: "d", text: "Only neon" }
    ],
    answerId: "c",
    explanation: "Alkalis furnish OH\u207b in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q24",
    prompt: "Common salt, baking soda, and washing soda are all examples of\u2026",
    options: [
      { id: "a", text: "Strong acids only" },
      { id: "b", text: "Indicators only" },
      { id: "c", text: "Metals only" },
      { id: "d", text: "Salts (useful compounds)" }
    ],
    answerId: "d",
    explanation: "They are important salts used at home and industry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddea",
    title: "Acids, Bases and Salts",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "atom-lite",
    speak: "Acids and bases change indicators. Neutralisation makes salt and water.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "atom-lite",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Acids", reveal: "Sour; pH less than 7; turn blue litmus red", emoji: "\ud83c\udf4b" },
      { label: "Bases", reveal: "Bitter/soapy; pH greater than 7", emoji: "\ud83e\uddfc" },
      { label: "Indicators", reveal: "Litmus, turmeric, phenolphthalein", emoji: "\ud83c\udfa8" },
      { label: "Neutralisation", reveal: "Acid + base \u2192 salt + water", emoji: "\u2696\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Acid + base gives\u2026",
    options: [
        { id: "a", text: "Only oxygen" },
        { id: "b", text: "Only nitrogen" },
        { id: "c", text: "Salt and water" },
        { id: "d", text: "Only sugar" }
    ],
    answerId: "c",
    why: "Neutralisation produces salt and water.",
    visual: "atom-lite",
    speak: "Acid + base gives\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know acid/base properties", "Read indicators and pH", "Neutralisation uses", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7ScienceAcids: ChapterDef = {
  id: "acids-bases-salts",
  title: "Acids, Bases and Salts",
  emoji: "\ud83e\uddea",
  blurb: "Indicators, pH and neutralisation",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "materials",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "materials",
      questions: SET_B,
    },
  ],
  paperTopics: ["materials", "living-things"],
};

export const g7ScienceAcidsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
