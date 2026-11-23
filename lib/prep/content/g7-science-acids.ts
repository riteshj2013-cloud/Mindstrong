import type { ChapterDef, PrepQuestion } from "../types";

/** Acids, Bases and Salts - original olympiad-style content (not affiliated with SOF). */

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
    prompt: "Look at the pH scale. Acids have pH…",
    options: [
      { id: "a", text: "Exactly 7" },
      { id: "b", text: "Greater than 7 only" },
      { id: "c", text: "Less than 7" },
      { id: "d", text: "Exactly 14" }
    ],
    answerId: "c",
    explanation: "Acidic solutions have pH below 7. Exactly 14 is tempting because it is a marked end of the scale, but 14 is strongly basic, not acidic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A horizontal pH scale marked from 0 to 14, with 7 labelled in the middle.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A pH scale</text>\n  <line x1=\"30\" y1=\"110\" x2=\"290\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"30.0\" y1=\"96\" x2=\"30.0\" y2=\"124\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"30.0\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">0</text>\n  <line x1=\"48.57142857142857\" y1=\"102\" x2=\"48.57142857142857\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"67.14285714285714\" y1=\"102\" x2=\"67.14285714285714\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"85.71428571428572\" y1=\"102\" x2=\"85.71428571428572\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"104.28571428571429\" y1=\"102\" x2=\"104.28571428571429\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"122.85714285714286\" y1=\"102\" x2=\"122.85714285714286\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"141.42857142857144\" y1=\"102\" x2=\"141.42857142857144\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"160.0\" y1=\"96\" x2=\"160.0\" y2=\"124\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"160.0\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">7</text>\n  <line x1=\"178.57142857142858\" y1=\"102\" x2=\"178.57142857142858\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"197.14285714285714\" y1=\"102\" x2=\"197.14285714285714\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"215.71428571428572\" y1=\"102\" x2=\"215.71428571428572\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"234.28571428571428\" y1=\"102\" x2=\"234.28571428571428\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"252.85714285714286\" y1=\"102\" x2=\"252.85714285714286\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"271.42857142857144\" y1=\"102\" x2=\"271.42857142857144\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"290.0\" y1=\"96\" x2=\"290.0\" y2=\"124\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"290.0\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">14</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Numbers run from 0 to 14</text>\n</svg>", "alt": "A horizontal pH scale marked from 0 to 14, with 7 labelled in the middle."}
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
    prompt: "Look at the two solutions being mixed. The reaction of acid + base produces…",
    options: [
      { id: "a", text: "Only oxygen" },
      { id: "b", text: "Salt and water" },
      { id: "c", text: "Only hydrogen always without salt" },
      { id: "d", text: "Only nitrogen" }
    ],
    answerId: "b",
    explanation: "Acid plus base is a neutralisation and gives a salt plus water. “Only hydrogen always without salt” is tempting because acids give off hydrogen with many metals, but a base is not a metal, so no hydrogen is made and a salt does form.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two beakers of different solutions are poured into a third beaker holding a colourless liquid.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Two solutions mixed</text>\n  <rect x=\"30\" y=\"70\" width=\"50\" height=\"70\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"55\" y=\"155\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">1</text>\n  <rect x=\"110\" y=\"70\" width=\"50\" height=\"70\" fill=\"#ddd6fe\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"135\" y=\"155\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">2</text>\n  <line x1=\"185\" y1=\"105\" x2=\"215\" y2=\"105\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"209.0,108.0 215,105 209.0,102.0\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <rect x=\"225\" y=\"60\" width=\"70\" height=\"90\" fill=\"#e0f2fe\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"260\" y=\"168\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">3</text>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Solutions 1 and 2 are poured into beaker 3</text>\n</svg>", "alt": "Two beakers of different solutions are poured into a third beaker holding a colourless liquid."}
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
    prompt: "Look at the metal in the solution. Acids react with many metals to liberate…",
    options: [
      { id: "a", text: "Nitrogen gas" },
      { id: "b", text: "Neon" },
      { id: "c", text: "Ozone" },
      { id: "d", text: "Hydrogen gas" }
    ],
    answerId: "d",
    explanation: "Active metals plus acid often give hydrogen, which can be tested with a pop. Nitrogen is tempting because it is a common gas in air, but it is not liberated in this reaction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A test tube holds a metal piece in a liquid. Bubbles of a gas rise from the metal.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A metal in a solution</text>\n  <rect x=\"120\" y=\"50\" width=\"50\" height=\"120\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\" rx=\"6\"/>\n  <rect x=\"122\" y=\"100\" width=\"46\" height=\"68\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect x=\"132\" y=\"145\" width=\"26\" height=\"14\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <circle cx=\"135\" cy=\"90\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <circle cx=\"150\" cy=\"80\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <circle cx=\"145\" cy=\"68\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <circle cx=\"158\" cy=\"92\" r=\"2.5\" fill=\"#e5e7eb\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <line x1=\"180\" y1=\"70\" x2=\"230\" y2=\"50\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"225.5,55.0 230,50 223.3,49.4\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"250\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">gas</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Bubbles rise from the metal</text>\n</svg>", "alt": "A test tube holds a metal piece in a liquid. Bubbles of a gas rise from the metal."}
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
    prompt: "Look at the flask. Which gas is released when an acid reacts with a metal carbonate?",
    options: [
      { id: "a", text: "Hydrogen" },
      { id: "b", text: "Carbon dioxide" },
      { id: "c", text: "Nitrogen" },
      { id: "d", text: "Neon" }
    ],
    answerId: "b",
    explanation: "Acid plus a carbonate gives a salt, water and carbon dioxide. Hydrogen is tempting because acids also give hydrogen with many metals, but carbonates give carbon dioxide.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Acid is poured onto solid chips in a flask. A delivery tube carries the gas that is given off into a second tube of liquid.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Acid added to a carbonate</text>\n  <path d=\"M 110 60 L 110 50 L 150 50 L 150 60 L 175 150 L 85 150 Z\" fill=\"#e0f2fe\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"118\" y=\"40\" width=\"24\" height=\"14\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <ellipse cx=\"120\" cy=\"138\" rx=\"10\" ry=\"6\" fill=\"#e7e5e4\" stroke=\"#57534e\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"140\" cy=\"140\" rx=\"8\" ry=\"5\" fill=\"#d6d3d1\" stroke=\"#57534e\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"128\" cy=\"130\" rx=\"7\" ry=\"4\" fill=\"#e7e5e4\" stroke=\"#57534e\" stroke-width=\"1.5\"/>\n  <circle cx=\"125\" cy=\"90\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <circle cx=\"140\" cy=\"80\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <circle cx=\"132\" cy=\"70\" r=\"2.5\" fill=\"#e5e7eb\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n  <line x1=\"150\" y1=\"50\" x2=\"210\" y2=\"50\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"210\" y1=\"50\" x2=\"210\" y2=\"80\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"190\" y=\"80\" width=\"40\" height=\"80\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\" rx=\"4\"/>\n  <rect x=\"192\" y=\"120\" width=\"36\" height=\"38\" fill=\"#f8fafc\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text x=\"130\" y=\"175\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">chips + acid</text>\n  <text x=\"180\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">gas</text>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A gas leaves the flask</text>\n</svg>", "alt": "Acid is poured onto solid chips in a flask. A delivery tube carries the gas that is given off into a second tube of liquid."}
  },
  {
    id: "g7-sci-acids-b-q11",
    prompt: "Look at the pH scale. Distilled water is…",
    options: [
      { id: "a", text: "Strongly acidic" },
      { id: "b", text: "Strongly basic" },
      { id: "c", text: "Neutral" },
      { id: "d", text: "A salt crystal" }
    ],
    answerId: "c",
    explanation: "Distilled water is neutral, with a pH of 7. “Strongly acidic” is tempting if distilled water is mixed up with an acid, but it is not an acid and does not sit far below 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A beaker of distilled water beside a pH scale marked from 0 to 14. The pH of the water is shown as a question mark.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Distilled water and a pH scale</text>\n  <path d=\"M 120 40 L 120 104 Q 120 110 126 110 L 174 110 Q 180 110 180 104 L 180 40\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"122\" y=\"62\" width=\"56\" height=\"46\" fill=\"#f0f9ff\" stroke=\"none\" stroke-width=\"0\"/>\n  <text x=\"150\" y=\"126\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">distilled water</text>\n  <text x=\"230\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">pH = ?</text>\n  <line x1=\"30\" y1=\"160\" x2=\"290\" y2=\"160\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"30.0\" y1=\"150\" x2=\"30.0\" y2=\"170\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"30.0\" y=\"186\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">0</text>\n  <line x1=\"48.57\" y1=\"154\" x2=\"48.57\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"67.14\" y1=\"154\" x2=\"67.14\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"85.71\" y1=\"154\" x2=\"85.71\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"104.29\" y1=\"154\" x2=\"104.29\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"122.86\" y1=\"154\" x2=\"122.86\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"141.43\" y1=\"154\" x2=\"141.43\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"160.0\" y1=\"150\" x2=\"160.0\" y2=\"170\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"160.0\" y=\"186\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">7</text>\n  <line x1=\"178.57\" y1=\"154\" x2=\"178.57\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"197.14\" y1=\"154\" x2=\"197.14\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"215.71\" y1=\"154\" x2=\"215.71\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"234.29\" y1=\"154\" x2=\"234.29\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"252.86\" y1=\"154\" x2=\"252.86\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"271.43\" y1=\"154\" x2=\"271.43\" y2=\"166\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"290.0\" y1=\"150\" x2=\"290.0\" y2=\"170\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"290.0\" y=\"186\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">14</text>\n</svg>", "alt": "A beaker of distilled water beside a pH scale marked from 0 to 14. The pH of the water is shown as a question mark."}
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
    prompt: "Look at the pH scale. A pH of 13 indicates a…",
    options: [
      { id: "a", text: "Strongly basic solution" },
      { id: "b", text: "Neutral solution" },
      { id: "c", text: "Strongly acidic solution" },
      { id: "d", text: "Pure sugar" }
    ],
    answerId: "a",
    explanation: "A pH of 13 is far above 7, so the solution is strongly basic. Strongly acidic is tempting if the sides of the scale are reversed, but 13 sits near the top end.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A pH scale from 0 to 14 with a pointer at 13 and the number 7 marked in the middle.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A pH scale with one reading marked</text>\n  <line x1=\"30\" y1=\"110\" x2=\"290\" y2=\"110\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"30.0\" y1=\"96\" x2=\"30.0\" y2=\"124\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"30.0\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">0</text>\n  <line x1=\"48.57142857142857\" y1=\"102\" x2=\"48.57142857142857\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"67.14285714285714\" y1=\"102\" x2=\"67.14285714285714\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"85.71428571428572\" y1=\"102\" x2=\"85.71428571428572\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"104.28571428571429\" y1=\"102\" x2=\"104.28571428571429\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"122.85714285714286\" y1=\"102\" x2=\"122.85714285714286\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"141.42857142857144\" y1=\"102\" x2=\"141.42857142857144\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"160.0\" y1=\"96\" x2=\"160.0\" y2=\"124\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"160.0\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">7</text>\n  <line x1=\"178.57142857142858\" y1=\"102\" x2=\"178.57142857142858\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"197.14285714285714\" y1=\"102\" x2=\"197.14285714285714\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"215.71428571428572\" y1=\"102\" x2=\"215.71428571428572\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"234.28571428571428\" y1=\"102\" x2=\"234.28571428571428\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"252.85714285714286\" y1=\"102\" x2=\"252.85714285714286\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"271.42857142857144\" y1=\"102\" x2=\"271.42857142857144\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"290.0\" y1=\"96\" x2=\"290.0\" y2=\"124\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"290.0\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#222\">14</text>\n  <polygon points=\"271.42857142857144,82 264.42857142857144,94 278.42857142857144,94\" fill=\"#b91c1c\" stroke=\"#7f1d1d\" stroke-width=\"1\"/>\n  <text x=\"271.42857142857144\" y=\"74\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"400\" fill=\"#7f1d1d\">13</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">The pointer shows a reading of 13</text>\n</svg>", "alt": "A pH scale from 0 to 14 with a pointer at 13 and the number 7 marked in the middle."}
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
      { id: "a", text: "Only whether a solution is acidic or basic, like litmus" },
      { id: "b", text: "The same colour for every acid" },
      { id: "c", text: "Different colours across the pH range" },
      { id: "d", text: "Blue in acids and red in bases" }
    ],
    answerId: "c",
    explanation: "Universal indicator is a mixture of indicators, so it shows a range of colours across the pH scale and tells how strongly acidic or basic a solution is. \u201cOnly acidic or basic, like litmus\u201d is tempting, but that is all litmus can tell; universal indicator also shows strength. Strong and weak acids give different colours, and acids turn it red or orange while bases turn it blue or purple, not the other way round.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-acids-b-q20",
    prompt: "Look at the four methods. Diluting a strong acid should be done by method…",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "d",
    explanation: "The safe method is to add acid slowly to water, which is method S. Method P pours water into concentrated acid, which is the usual dangerous mistake because a lot of heat is released.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four mixing methods labelled P, Q, R and S: pouring water into acid, tasting, heating a closed bottle, and pouring acid slowly into water.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Four ways of mixing</text>\n  <rect x=\"16\" y=\"28\" width=\"140\" height=\"82\" fill=\"#fffdf7\" stroke=\"#999\" stroke-width=\"1.5\"/>\n  <rect x=\"66\" y=\"56\" width=\"36\" height=\"40\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"84\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"400\" fill=\"#222\">acid</text>\n  <path d=\"M 84 40 L 84 56\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/>\n  <text x=\"106\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"400\" fill=\"#222\">water</text>\n  <text x=\"32\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">P</text>\n  <rect x=\"164\" y=\"28\" width=\"140\" height=\"82\" fill=\"#fffdf7\" stroke=\"#999\" stroke-width=\"1.5\"/>\n  <circle cx=\"234\" cy=\"72\" r=\"14\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"229\" cy=\"67\" r=\"1.8\" fill=\"#333\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle cx=\"239\" cy=\"67\" r=\"1.8\" fill=\"#333\" stroke=\"#333\" stroke-width=\"1\"/>\n  <ellipse cx=\"234\" cy=\"78\" rx=\"4\" ry=\"3\" fill=\"#7f1d1d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <line x1=\"240\" y1=\"80\" x2=\"272\" y2=\"96\" stroke=\"#78716c\" stroke-width=\"2.5\" fill=\"none\"/>\n  <ellipse cx=\"243\" cy=\"81\" rx=\"5\" ry=\"3\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text x=\"282\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"400\" fill=\"#222\">acid</text>\n  <text x=\"180\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <rect x=\"16\" y=\"118\" width=\"140\" height=\"82\" fill=\"#fffdf7\" stroke=\"#999\" stroke-width=\"1.5\"/>\n  <rect x=\"66\" y=\"140\" width=\"36\" height=\"36\" fill=\"#e2e8f0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect x=\"72\" y=\"134\" width=\"24\" height=\"8\" fill=\"#78716c\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle cx=\"84\" cy=\"186\" r=\"8\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"2\"/>\n  <text x=\"32\" y=\"134\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">R</text>\n  <rect x=\"164\" y=\"118\" width=\"140\" height=\"82\" fill=\"#fffdf7\" stroke=\"#999\" stroke-width=\"1.5\"/>\n  <rect x=\"214\" y=\"146\" width=\"36\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"232\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"400\" fill=\"#222\">water</text>\n  <path d=\"M 232 130 L 232 146\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n  <text x=\"256\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"400\" fill=\"#222\">acid</text>\n  <text x=\"180\" y=\"134\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">S</text>\n</svg>", "alt": "Four mixing methods labelled P, Q, R and S: pouring water into acid, tasting, heating a closed bottle, and pouring acid slowly into water."}
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
