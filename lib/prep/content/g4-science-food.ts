import type { ChapterDef, PrepQuestion } from "../types";

/** Food and Nutrition - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-food-a-q01",
    prompt: "Which nutrient mainly gives our body energy?",
    options: [
      { id: "a", text: "Proteins" },
      { id: "b", text: "Carbohydrates" },
      { id: "c", text: "Vitamins" },
      { id: "d", text: "Minerals" }
    ],
    answerId: "b",
    explanation: "Carbohydrates are energy-giving foods. Rice, roti and potato are full of them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q02",
    prompt: "Look at the four food cards. Which card shows a **body-building** food?",
    options: [
      { id: "a", text: "Card A \u2014 Sugar" },
      { id: "b", text: "Card B \u2014 Rice" },
      { id: "c", text: "Card C \u2014 Butter" },
      { id: "d", text: "Card D \u2014 Dal" }
    ],
    answerId: "d",
    explanation: "Dal is rich in protein, the body-building nutrient. Sugar and rice mostly give energy, and butter is a fat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four food cards labelled A to D: A sugar, B rice, C butter, D dal\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Food cards</text>\n  <rect class=\"card\" x=\"8\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/><g transform=\"translate(43 105) scale(1.0)\"><rect class=\"white\" x=\"-15\" y=\"-12\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"-4\" y=\"-15\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"7\" y=\"-11\" width=\"10\" height=\"10\"/><path class=\"part\" d=\"M -25.0 0 Q 0 34.0 25.0 0 Z\"/></g><circle class=\"badge\" cx=\"43\" cy=\"34\" r=\"11\"/><text class=\"label\" x=\"43\" y=\"39\" text-anchor=\"middle\">A</text><text class=\"small\" x=\"43\" y=\"175\" text-anchor=\"middle\">Sugar</text>\n  <rect class=\"card\" x=\"86\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/><g transform=\"translate(121 105) scale(1.0)\"><ellipse class=\"white\" cx=\"0\" cy=\"-3\" rx=\"22\" ry=\"11\"/><circle cx=\"-8\" cy=\"-6\" r=\"1.5\" fill=\"#999\"/><circle cx=\"5\" cy=\"-9\" r=\"1.5\" fill=\"#999\"/><circle cx=\"10\" cy=\"-3\" r=\"1.5\" fill=\"#999\"/><path class=\"part\" d=\"M -25.0 0 Q 0 34.0 25.0 0 Z\"/></g><circle class=\"badge\" cx=\"121\" cy=\"34\" r=\"11\"/><text class=\"label\" x=\"121\" y=\"39\" text-anchor=\"middle\">B</text><text class=\"small\" x=\"121\" y=\"175\" text-anchor=\"middle\">Rice</text>\n  <rect class=\"card\" x=\"164\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/><g transform=\"translate(199 105) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"12\" rx=\"28\" ry=\"8\"/><rect class=\"yellow\" x=\"-16\" y=\"-8\" width=\"32\" height=\"18\" rx=\"2\"/></g><circle class=\"badge\" cx=\"199\" cy=\"34\" r=\"11\"/><text class=\"label\" x=\"199\" y=\"39\" text-anchor=\"middle\">C</text><text class=\"small\" x=\"199\" y=\"175\" text-anchor=\"middle\">Butter</text>\n  <rect class=\"card\" x=\"242\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/><g transform=\"translate(277 105) scale(1.0)\"><path class=\"part\" d=\"M -25.0 0 Q 0 34.0 25.0 0 Z\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"0\" rx=\"25\" ry=\"5\"/></g><circle class=\"badge\" cx=\"277\" cy=\"34\" r=\"11\"/><text class=\"label\" x=\"277\" y=\"39\" text-anchor=\"middle\">D</text><text class=\"small\" x=\"277\" y=\"175\" text-anchor=\"middle\">Dal</text>\n</svg>", "alt": "Four food cards labelled A to D: A sugar, B rice, C butter, D dal"}
  },
  {
    id: "g4-sci-food-a-q03",
    prompt: "Oranges, amla and lemons are rich in which vitamin?",
    options: [
      { id: "a", text: "Vitamin C" },
      { id: "b", text: "Vitamin D" },
      { id: "c", text: "Vitamin A" },
      { id: "d", text: "Vitamin K" }
    ],
    answerId: "a",
    explanation: "Citrus fruits and amla are great sources of vitamin C. It keeps our gums healthy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q04",
    prompt: "Which part of food helps it move smoothly through our stomach and intestines?",
    options: [
      { id: "a", text: "Fat" },
      { id: "b", text: "Protein" },
      { id: "c", text: "Fibre" },
      { id: "d", text: "Sugar" }
    ],
    answerId: "c",
    explanation: "Fibre, also called roughage, helps food move along and keeps our tummy happy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q05",
    prompt: "In the picture, gentle sunlight falls on Tara's skin. Which vitamin does her skin make (the **?** in the box)?",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Vitamin D" },
      { id: "d", text: "Vitamin B" }
    ],
    answerId: "c",
    explanation: "With gentle sunlight, our skin makes vitamin D. Vitamin D helps keep our bones strong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Sun shining on a girl; an arrow from her skin points to a box saying skin makes vitamin question mark\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <g transform=\"translate(55 55) scale(1.0)\"><line class=\"arrow\" x1=\"27.0\" y1=\"0.0\" x2=\"37.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"21.8\" y1=\"15.9\" x2=\"29.9\" y2=\"21.7\"/><line class=\"arrow\" x1=\"8.3\" y1=\"25.7\" x2=\"11.4\" y2=\"35.2\"/><line class=\"arrow\" x1=\"-8.3\" y1=\"25.7\" x2=\"-11.4\" y2=\"35.2\"/><line class=\"arrow\" x1=\"-21.8\" y1=\"15.9\" x2=\"-29.9\" y2=\"21.7\"/><line class=\"arrow\" x1=\"-27.0\" y1=\"0.0\" x2=\"-37.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"-21.8\" y1=\"-15.9\" x2=\"-29.9\" y2=\"-21.7\"/><line class=\"arrow\" x1=\"-8.3\" y1=\"-25.7\" x2=\"-11.4\" y2=\"-35.2\"/><line class=\"arrow\" x1=\"8.3\" y1=\"-25.7\" x2=\"11.4\" y2=\"-35.2\"/><line class=\"arrow\" x1=\"21.8\" y1=\"-15.9\" x2=\"29.9\" y2=\"-21.7\"/><circle class=\"yellow\" cx=\"0\" cy=\"0\" r=\"24\"/></g>\n  <circle class=\"part\" cx=\"200\" cy=\"60\" r=\"18\"/>\n  <circle cx=\"194\" cy=\"57\" r=\"2\" fill=\"#333\"/><circle cx=\"206\" cy=\"57\" r=\"2\" fill=\"#333\"/>\n  <path class=\"arrow\" d=\"M 193 66 Q 200 72 207 66\"/>\n  <path class=\"orange\" d=\"M 200 78 L 174 140 L 226 140 Z\"/>\n  <line class=\"stick\" x1=\"190\" y1=\"95\" x2=\"168\" y2=\"115\"/><line class=\"stick\" x1=\"210\" y1=\"95\" x2=\"232\" y2=\"115\"/>\n  <line class=\"stick\" x1=\"192\" y1=\"140\" x2=\"190\" y2=\"175\"/><line class=\"stick\" x1=\"208\" y1=\"140\" x2=\"210\" y2=\"175\"/>\n  <line class=\"arrow\" x1=\"85\" y1=\"72\" x2=\"162\" y2=\"110\"/><polyline class=\"arrow\" points=\"153.9,110.7 162,110 157.6,103.1\"/><text class=\"small\" x=\"118\" y=\"82\" text-anchor=\"middle\">sunlight</text>\n  <rect class=\"card\" x=\"224\" y=\"160\" width=\"90\" height=\"46\" rx=\"8\"/>\n  <line class=\"arrow\" x1=\"234\" y1=\"118\" x2=\"262\" y2=\"160\"/>\n  <text class=\"small\" x=\"269\" y=\"178\" text-anchor=\"middle\">Skin makes</text><text class=\"label\" x=\"269\" y=\"197\" text-anchor=\"middle\">vitamin ?</text><text class=\"small\" x=\"200\" y=\"210\" text-anchor=\"middle\">Tara</text>\n</svg>", "alt": "Sun shining on a girl; an arrow from her skin points to a box saying skin makes vitamin question mark"}
  },
  {
    id: "g4-sci-food-a-q06",
    prompt: "Which mineral helps make our bones and teeth strong?",
    options: [
      { id: "a", text: "Calcium" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Iron" },
      { id: "d", text: "Vitamin C" }
    ],
    answerId: "a",
    explanation: "Calcium builds strong bones and teeth. Milk, curd and paneer have lots of it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q07",
    prompt: "Tara's basket has an orange, a tomato, spinach and a carrot. Which column of the sorting board should the whole basket go into?",
    options: [
      { id: "a", text: "Column A \u2014 Energy-giving" },
      { id: "b", text: "Column B \u2014 Body-building" },
      { id: "c", text: "Column C \u2014 Fats" },
      { id: "d", text: "Column D \u2014 Protective foods" }
    ],
    answerId: "d",
    explanation: "Fruits and vegetables give vitamins and minerals that protect us from illness, so they are protective foods.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A basket with an orange, a tomato, spinach and a carrot above a sorting board with columns A energy-giving, B body-building, C fats, D protective\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <text class=\"label\" x=\"60\" y=\"40\" text-anchor=\"middle\">Tara's basket</text>\n  <circle class=\"orange\" cx=\"138\" cy=\"44\" r=\"11\"/>\n  <circle class=\"red\" cx=\"158\" cy=\"40\" r=\"11\"/>\n  <ellipse class=\"green\" cx=\"176\" cy=\"40\" rx=\"7\" ry=\"14\" transform=\"rotate(20 176 40)\"/>\n  <path class=\"orange\" d=\"M 186 34 L 200 30 L 194 56 Z\"/>\n  <path class=\"brown\" d=\"M 118 50 L 202 50 L 190 92 L 130 92 Z\"/>\n  <line class=\"arrow\" x1=\"124\" y1=\"64\" x2=\"196\" y2=\"64\"/><line class=\"arrow\" x1=\"128\" y1=\"78\" x2=\"192\" y2=\"78\"/>\n  <line class=\"arrow\" x1=\"160\" y1=\"96\" x2=\"160\" y2=\"116\"/><polyline class=\"arrow\" points=\"155.8,109.0 160,116 164.2,109.0\"/><text class=\"label\" x=\"178\" y=\"112\" text-anchor=\"middle\">?</text>\n  <rect class=\"card\" x=\"4\" y=\"118\" width=\"312\" height=\"98\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"43\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"43\" y=\"139\" text-anchor=\"middle\">A</text>\n  <text class=\"small\" x=\"43\" y=\"160\" text-anchor=\"middle\">Energy-</text>\n  <text class=\"small\" x=\"43\" y=\"173\" text-anchor=\"middle\">giving</text>\n  <rect class=\"dash\" x=\"15\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n  <line class=\"arrow\" x1=\"82\" y1=\"118\" x2=\"82\" y2=\"216\"/>\n  <circle class=\"badge\" cx=\"121\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"121\" y=\"139\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"121\" y=\"160\" text-anchor=\"middle\">Body-</text>\n  <text class=\"small\" x=\"121\" y=\"173\" text-anchor=\"middle\">building</text>\n  <rect class=\"dash\" x=\"93\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n  <line class=\"arrow\" x1=\"160\" y1=\"118\" x2=\"160\" y2=\"216\"/>\n  <circle class=\"badge\" cx=\"199\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"199\" y=\"139\" text-anchor=\"middle\">C</text>\n  <text class=\"small\" x=\"199\" y=\"160\" text-anchor=\"middle\">Fats</text>\n  <text class=\"small\" x=\"199\" y=\"173\" text-anchor=\"middle\">(a little)</text>\n  <rect class=\"dash\" x=\"171\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n  <line class=\"arrow\" x1=\"238\" y1=\"118\" x2=\"238\" y2=\"216\"/>\n  <circle class=\"badge\" cx=\"277\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"277\" y=\"139\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"277\" y=\"160\" text-anchor=\"middle\">Protective</text>\n  <text class=\"small\" x=\"277\" y=\"173\" text-anchor=\"middle\">foods</text>\n  <rect class=\"dash\" x=\"249\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n</svg>", "alt": "A basket with an orange, a tomato, spinach and a carrot above a sorting board with columns A energy-giving, B body-building, C fats, D protective"}
  },
  {
    id: "g4-sci-food-a-q08",
    prompt: "Which of these foods is rich in fat?",
    options: [
      { id: "a", text: "Cucumber" },
      { id: "b", text: "Ghee" },
      { id: "c", text: "Spinach" },
      { id: "d", text: "Watermelon" }
    ],
    answerId: "b",
    explanation: "Ghee is a fat. Fats give energy, but we need only small amounts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q09",
    prompt: "Which food is mostly carbohydrate?",
    options: [
      { id: "a", text: "Potato" },
      { id: "b", text: "Egg" },
      { id: "c", text: "Fish" },
      { id: "d", text: "Paneer" }
    ],
    answerId: "a",
    explanation: "Potato is full of starch, a carbohydrate. Egg, fish and paneer are rich in protein.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q10",
    prompt: "The blue part shows how much of Tara's body is water. The meter and the glass are split into 3 equal parts. About how much of her body is water?",
    options: [
      { id: "a", text: "About one-tenth" },
      { id: "b", text: "About one-quarter" },
      { id: "c", text: "About two-thirds" },
      { id: "d", text: "All of it" }
    ],
    answerId: "c",
    explanation: "The blue fills 2 of the 3 equal parts, so about two-thirds of our body is water. That is why we drink water every day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Body outline shaded blue up to two of three equal parts, a water meter with three equal parts, and a glass filled to the same level\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <g class=\"part\"><circle cx=\"80\" cy=\"45\" r=\"22\"/><rect x=\"52\" y=\"67\" width=\"56\" height=\"80\" rx=\"12\"/>\n  <rect x=\"28\" y=\"72\" width=\"22\" height=\"62\" rx=\"10\"/><rect x=\"110\" y=\"72\" width=\"22\" height=\"62\" rx=\"10\"/>\n  <rect x=\"56\" y=\"145\" width=\"20\" height=\"58\" rx=\"8\"/><rect x=\"84\" y=\"145\" width=\"20\" height=\"58\" rx=\"8\"/></g>\n  <path class=\"water\" style=\"stroke:none\" d=\"M 52 83 H 108 V 135 Q 108 147 96 147 H 64 Q 52 147 52 135 Z\"/>\n  <path class=\"water\" style=\"stroke:none\" d=\"M 28 83 H 50 V 124 Q 50 134 39 134 Q 28 134 28 124 Z\"/>\n  <path class=\"water\" style=\"stroke:none\" d=\"M 110 83 H 132 V 124 Q 132 134 121 134 Q 110 134 110 124 Z\"/>\n  <rect class=\"water\" style=\"stroke:none\" x=\"56\" y=\"145\" width=\"20\" height=\"58\" rx=\"8\"/><rect class=\"water\" style=\"stroke:none\" x=\"84\" y=\"145\" width=\"20\" height=\"58\" rx=\"8\"/>\n  <g class=\"outline\"><circle cx=\"80\" cy=\"45\" r=\"22\"/><rect x=\"52\" y=\"67\" width=\"56\" height=\"80\" rx=\"12\"/>\n  <rect x=\"28\" y=\"72\" width=\"22\" height=\"62\" rx=\"10\"/><rect x=\"110\" y=\"72\" width=\"22\" height=\"62\" rx=\"10\"/>\n  <rect x=\"56\" y=\"145\" width=\"20\" height=\"58\" rx=\"8\"/><rect x=\"84\" y=\"145\" width=\"20\" height=\"58\" rx=\"8\"/></g>\n  <line class=\"dash\" x1=\"20\" y1=\"83\" x2=\"185\" y2=\"83\"/>\n  <rect class=\"white\" x=\"170\" y=\"23\" width=\"22\" height=\"180\"/>\n  <rect class=\"water\" x=\"170\" y=\"83\" width=\"22\" height=\"120\"/>\n  <line class=\"arrow\" x1=\"164\" y1=\"83\" x2=\"198\" y2=\"83\"/><line class=\"arrow\" x1=\"164\" y1=\"143\" x2=\"198\" y2=\"143\"/>\n  <text class=\"small\" x=\"181\" y=\"15\" text-anchor=\"middle\">Meter</text>\n  <path class=\"water\" d=\"M 235.3 120 L 288.7 120 L 282 200 L 242 200 Z\"/>\n  <path class=\"outline\" d=\"M 232 80 L 292 80 L 282 200 L 242 200 Z\"/>\n  <line class=\"arrow\" x1=\"226\" y1=\"120\" x2=\"236\" y2=\"120\"/><line class=\"arrow\" x1=\"228\" y1=\"160\" x2=\"239\" y2=\"160\"/>\n  <text class=\"small\" x=\"262\" y=\"70\" text-anchor=\"middle\">Glass</text><text class=\"small\" x=\"80\" y=\"216\" text-anchor=\"middle\">Tara</text>\n</svg>", "alt": "Body outline shaded blue up to two of three equal parts, a water meter with three equal parts, and a glass filled to the same level"}
  },
  {
    id: "g4-sci-food-a-q11",
    prompt: "Riya feels tired in the middle of a football match. Which snack will give her energy quickly?",
    options: [
      { id: "a", text: "A cucumber slice" },
      { id: "b", text: "A banana" },
      { id: "c", text: "A pinch of salt" },
      { id: "d", text: "A glass of plain water" }
    ],
    answerId: "b",
    explanation: "A banana has natural sugars, which are carbohydrates. They give quick energy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q12",
    prompt: "Kabir's picture clue shows his gums bleed a little when he brushes. Which labelled food should he eat more of?",
    options: [
      { id: "a", text: "A \u2014 Butter" },
      { id: "b", text: "B \u2014 White rice" },
      { id: "c", text: "C \u2014 Sugar" },
      { id: "d", text: "D \u2014 Guava and lemon" }
    ],
    answerId: "d",
    explanation: "Bleeding gums can mean too little vitamin C. Guava and lemon are rich in vitamin C, which keeps gums healthy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Picture clue of a smile with bleeding gums and a toothbrush, beside four foods: A butter, B white rice, C sugar, D guava and lemon\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <rect class=\"card\" x=\"5\" y=\"5\" width=\"113\" height=\"210\" rx=\"8\"/><text class=\"label\" x=\"61\" y=\"24\" text-anchor=\"middle\">Picture clue</text>\n  <path class=\"pink\" d=\"M 18 82 Q 61 150 104 82 Z\"/>\n  <rect class=\"white\" x=\"28\" y=\"82\" width=\"10\" height=\"11\" rx=\"2\"/><rect class=\"white\" x=\"40\" y=\"82\" width=\"10\" height=\"13\" rx=\"2\"/>\n  <rect class=\"white\" x=\"52\" y=\"82\" width=\"10\" height=\"13\" rx=\"2\"/><rect class=\"white\" x=\"64\" y=\"82\" width=\"10\" height=\"13\" rx=\"2\"/>\n  <rect class=\"white\" x=\"76\" y=\"82\" width=\"10\" height=\"13\" rx=\"2\"/><rect class=\"white\" x=\"88\" y=\"82\" width=\"8\" height=\"10\" rx=\"2\"/>\n  <path class=\"red\" d=\"M 70 99 Q 66 106 70 109 Q 74 106 70 99 Z\"/>\n  <rect class=\"water\" x=\"22\" y=\"150\" width=\"58\" height=\"7\" rx=\"3\"/><rect class=\"white\" x=\"80\" y=\"144\" width=\"16\" height=\"8\" rx=\"1\"/>\n  <text class=\"small\" x=\"61\" y=\"186\" text-anchor=\"middle\">Gums bleed</text><text class=\"small\" x=\"61\" y=\"201\" text-anchor=\"middle\">when brushing</text>\n  <rect class=\"card\" x=\"125\" y=\"5\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(171 55) scale(0.9)\"><ellipse class=\"plate\" cx=\"0\" cy=\"12\" rx=\"28\" ry=\"8\"/><rect class=\"yellow\" x=\"-16\" y=\"-8\" width=\"32\" height=\"18\" rx=\"2\"/></g>\n  <circle class=\"badge\" cx=\"139\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"139\" y=\"25\" text-anchor=\"middle\">A</text>\n  <text class=\"small\" x=\"171\" y=\"99\" text-anchor=\"middle\">Butter</text>\n  <rect class=\"card\" x=\"222\" y=\"5\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(268 55) scale(0.9)\"><ellipse class=\"white\" cx=\"0\" cy=\"-3\" rx=\"22\" ry=\"11\"/><circle cx=\"-8\" cy=\"-6\" r=\"1.5\" fill=\"#999\"/><circle cx=\"5\" cy=\"-9\" r=\"1.5\" fill=\"#999\"/><circle cx=\"10\" cy=\"-3\" r=\"1.5\" fill=\"#999\"/><path class=\"part\" d=\"M -25.0 0 Q 0 34.0 25.0 0 Z\"/></g>\n  <circle class=\"badge\" cx=\"236\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"236\" y=\"25\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"268\" y=\"99\" text-anchor=\"middle\">White rice</text>\n  <rect class=\"card\" x=\"125\" y=\"112\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(171 162) scale(0.9)\"><rect class=\"white\" x=\"-15\" y=\"-12\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"-4\" y=\"-15\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"7\" y=\"-11\" width=\"10\" height=\"10\"/><path class=\"part\" d=\"M -25.0 0 Q 0 34.0 25.0 0 Z\"/></g>\n  <circle class=\"badge\" cx=\"139\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"139\" y=\"132\" text-anchor=\"middle\">C</text>\n  <text class=\"small\" x=\"171\" y=\"206\" text-anchor=\"middle\">Sugar</text>\n  <rect class=\"card\" x=\"222\" y=\"112\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(268 162) scale(0.9)\"><circle class=\"green\" cx=\"-10\" cy=\"0\" r=\"15\"/><line class=\"arrow\" x1=\"-10\" y1=\"-15\" x2=\"-8\" y2=\"-21\"/><ellipse class=\"yellow\" cx=\"13\" cy=\"5\" rx=\"12\" ry=\"10\"/></g>\n  <circle class=\"badge\" cx=\"236\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"236\" y=\"132\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"268\" y=\"206\" text-anchor=\"middle\">Guava, lemon</text>\n</svg>", "alt": "Picture clue of a smile with bleeding gums and a toothbrush, beside four foods: A butter, B white rice, C sugar, D guava and lemon"}
  },
  {
    id: "g4-sci-food-a-q13",
    prompt: "Arjun's mother adds moong sprouts to his breakfast to help him grow. Sprouts mainly give him:",
    options: [
      { id: "a", text: "Fats" },
      { id: "b", text: "Sugar" },
      { id: "c", text: "Iodine" },
      { id: "d", text: "Proteins" }
    ],
    answerId: "d",
    explanation: "Sprouts are rich in protein, the body-building nutrient. They help children grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q14",
    prompt: "Look at the four lunch plates. Which plate is **balanced**?",
    options: [
      { id: "a", text: "Plate A" },
      { id: "b", text: "Plate B" },
      { id: "c", text: "Plate C" },
      { id: "d", text: "Plate D" }
    ],
    answerId: "b",
    explanation: "Plate B has energy food (roti), body-building food (dal, curd) and protective food (sabzi, salad). The others miss whole food groups.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four lunch plates labelled A to D. A rice, potato, roti. B roti, dal, sabzi, curd, salad. C puri, jalebi, chips. D apples only\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <circle class=\"plate\" cx=\"90\" cy=\"56\" r=\"46\"/><circle class=\"white\" cx=\"90\" cy=\"56\" r=\"37\"/><text class=\"small\" x=\"90\" y=\"46\" text-anchor=\"middle\">Rice</text><text class=\"small\" x=\"90\" y=\"60\" text-anchor=\"middle\">Potato</text><text class=\"small\" x=\"90\" y=\"74\" text-anchor=\"middle\">Roti</text><circle class=\"badge\" cx=\"40\" cy=\"18\" r=\"11\"/><text class=\"label\" x=\"40\" y=\"23\" text-anchor=\"middle\">A</text>\n  <circle class=\"plate\" cx=\"240\" cy=\"56\" r=\"46\"/><circle class=\"white\" cx=\"240\" cy=\"56\" r=\"37\"/><text class=\"small\" x=\"240\" y=\"46\" text-anchor=\"middle\">Roti, Dal</text><text class=\"small\" x=\"240\" y=\"60\" text-anchor=\"middle\">Sabzi, Curd</text><text class=\"small\" x=\"240\" y=\"74\" text-anchor=\"middle\">Salad</text><circle class=\"badge\" cx=\"190\" cy=\"18\" r=\"11\"/><text class=\"label\" x=\"190\" y=\"23\" text-anchor=\"middle\">B</text>\n  <circle class=\"plate\" cx=\"90\" cy=\"164\" r=\"46\"/><circle class=\"white\" cx=\"90\" cy=\"164\" r=\"37\"/><text class=\"small\" x=\"90\" y=\"154\" text-anchor=\"middle\">Puri</text><text class=\"small\" x=\"90\" y=\"168\" text-anchor=\"middle\">Jalebi</text><text class=\"small\" x=\"90\" y=\"182\" text-anchor=\"middle\">Chips</text><circle class=\"badge\" cx=\"40\" cy=\"126\" r=\"11\"/><text class=\"label\" x=\"40\" y=\"131\" text-anchor=\"middle\">C</text>\n  <circle class=\"plate\" cx=\"240\" cy=\"164\" r=\"46\"/><circle class=\"white\" cx=\"240\" cy=\"164\" r=\"37\"/><text class=\"small\" x=\"240\" y=\"161\" text-anchor=\"middle\">Apples</text><text class=\"small\" x=\"240\" y=\"175\" text-anchor=\"middle\">only</text><circle class=\"badge\" cx=\"190\" cy=\"126\" r=\"11\"/><text class=\"label\" x=\"190\" y=\"131\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "Four lunch plates labelled A to D. A rice, potato, roti. B roti, dal, sabzi, curd, salad. C puri, jalebi, chips. D apples only"}
  },
  {
    id: "g4-sci-food-a-q15",
    prompt: "Rohan often finds it hard to pass stool. What should he add to his meals?",
    options: [
      { id: "a", text: "More biscuits" },
      { id: "b", text: "More fried chips" },
      { id: "c", text: "Whole fruits, leafy vegetables and water" },
      { id: "d", text: "More sweets" }
    ],
    answerId: "c",
    explanation: "Fibre and water help food move smoothly. Fruits and leafy vegetables are full of fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q16",
    prompt: "Meena's picture clue shows she finds it hard to see in dim light at night. Which labelled food can help her eyes?",
    options: [
      { id: "a", text: "A \u2014 Carrot" },
      { id: "b", text: "B \u2014 White bread" },
      { id: "c", text: "C \u2014 Toffee" },
      { id: "d", text: "D \u2014 Cola" }
    ],
    answerId: "a",
    explanation: "Trouble seeing in dim light can mean too little vitamin A. Carrots are rich in vitamin A.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Picture clue of an eye under a night sky with a moon, beside four foods: A carrot, B white bread, C toffee, D cola\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <rect class=\"card\" x=\"5\" y=\"5\" width=\"113\" height=\"210\" rx=\"8\"/><text class=\"label\" x=\"61\" y=\"24\" text-anchor=\"middle\">Picture clue</text>\n  <rect class=\"sky\" x=\"15\" y=\"34\" width=\"92\" height=\"44\" rx=\"6\"/>\n  <circle class=\"yellow\" cx=\"40\" cy=\"56\" r=\"13\"/><circle cx=\"46\" cy=\"51\" r=\"11\" fill=\"#2f3f73\"/>\n  <circle class=\"yellow\" cx=\"72\" cy=\"48\" r=\"2.5\"/><circle class=\"yellow\" cx=\"92\" cy=\"62\" r=\"2.5\"/><circle class=\"yellow\" cx=\"84\" cy=\"44\" r=\"2\"/>\n  <path class=\"white\" d=\"M 20 120 Q 61 85 102 120 Q 61 155 20 120 Z\"/>\n  <circle class=\"brown\" cx=\"61\" cy=\"120\" r=\"13\"/><circle class=\"dark\" cx=\"61\" cy=\"120\" r=\"6\"/>\n  <text class=\"small\" x=\"61\" y=\"186\" text-anchor=\"middle\">Hard to see</text><text class=\"small\" x=\"61\" y=\"201\" text-anchor=\"middle\">in dim light</text>\n  <rect class=\"card\" x=\"125\" y=\"5\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(171 55) scale(0.9)\"><ellipse class=\"green\" cx=\"-4\" cy=\"-24\" rx=\"3\" ry=\"8\" transform=\"rotate(-20 -4 -24)\"/><ellipse class=\"green\" cx=\"4\" cy=\"-24\" rx=\"3\" ry=\"8\" transform=\"rotate(20 4 -24)\"/><path class=\"orange\" d=\"M -9 -18 L 9 -18 L 0 24 Z\"/><line class=\"arrow\" x1=\"-4\" y1=\"-6\" x2=\"1\" y2=\"-6\"/><line class=\"arrow\" x1=\"-1\" y1=\"6\" x2=\"3\" y2=\"6\"/></g>\n  <circle class=\"badge\" cx=\"139\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"139\" y=\"25\" text-anchor=\"middle\">A</text>\n  <text class=\"small\" x=\"171\" y=\"99\" text-anchor=\"middle\">Carrot</text>\n  <rect class=\"card\" x=\"222\" y=\"5\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(268 55) scale(0.9)\"><path class=\"crust\" d=\"M -20 20 L -20 -8 Q -26 -24 -8 -22 Q 0 -30 8 -22 Q 26 -24 20 -8 L 20 20 Z\"/></g>\n  <circle class=\"badge\" cx=\"236\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"236\" y=\"25\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"268\" y=\"99\" text-anchor=\"middle\">White bread</text>\n  <rect class=\"card\" x=\"125\" y=\"112\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(171 162) scale(0.9)\"><path class=\"red\" d=\"M -13 0 L -26 -10 L -26 10 Z\"/><path class=\"red\" d=\"M 13 0 L 26 -10 L 26 10 Z\"/><ellipse class=\"red\" cx=\"0\" cy=\"0\" rx=\"15\" ry=\"11\"/></g>\n  <circle class=\"badge\" cx=\"139\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"139\" y=\"132\" text-anchor=\"middle\">C</text>\n  <text class=\"small\" x=\"171\" y=\"206\" text-anchor=\"middle\">Toffee</text>\n  <rect class=\"card\" x=\"222\" y=\"112\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(268 162) scale(0.9)\"><line class=\"arrow\" x1=\"4\" y1=\"-22\" x2=\"12\" y2=\"-34\"/><path class=\"dark\" d=\"M -14 -22 L 14 -22 L 11 22 L -11 22 Z\"/><circle cx=\"-4\" cy=\"-10\" r=\"2\" fill=\"#fff\"/><circle cx=\"4\" cy=\"2\" r=\"2\" fill=\"#fff\"/><circle cx=\"-2\" cy=\"12\" r=\"2\" fill=\"#fff\"/></g>\n  <circle class=\"badge\" cx=\"236\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"236\" y=\"132\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"268\" y=\"206\" text-anchor=\"middle\">Cola</text>\n</svg>", "alt": "Picture clue of an eye under a night sky with a moon, beside four foods: A carrot, B white bread, C toffee, D cola"}
  },
  {
    id: "g4-sci-food-a-q17",
    prompt: "Which kind of salt helps prevent swelling in the neck called goitre?",
    options: [
      { id: "a", text: "Sugar" },
      { id: "b", text: "Iodised salt" },
      { id: "c", text: "Baking soda" },
      { id: "d", text: "Chilli powder" }
    ],
    answerId: "b",
    explanation: "Iodised salt has iodine. Our body needs a little iodine to stay healthy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q18",
    prompt: "After playing in the hot sun, Dev is very thirsty. What is the best drink for him?",
    options: [
      { id: "a", text: "Cola" },
      { id: "b", text: "Packed sweet juice" },
      { id: "c", text: "Tea" },
      { id: "d", text: "Water or coconut water" }
    ],
    answerId: "d",
    explanation: "Our body loses water as sweat. Water or coconut water puts it back in a healthy way.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q19",
    prompt: "Asha puts a drop of iodine on a raw potato slice. Which colour swatch shows what the **?** spot will turn into?",
    options: [
      { id: "a", text: "A \u2014 Blue-black" },
      { id: "b", text: "B \u2014 Red" },
      { id: "c", text: "C \u2014 Green" },
      { id: "d", text: "D \u2014 Stays yellow" }
    ],
    answerId: "a",
    explanation: "Iodine turns blue-black when starch is present. Potato is full of starch, a carbohydrate.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A dropper puts a drop of iodine on a raw potato slice with a question-mark spot; four colour swatches A blue-black, B red, C green, D stays yellow\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <ellipse class=\"dark\" cx=\"90\" cy=\"26\" rx=\"11\" ry=\"14\"/>\n  <rect class=\"white\" x=\"85\" y=\"38\" width=\"10\" height=\"44\" rx=\"3\"/>\n  <path class=\"brown\" d=\"M 90 90 Q 84 100 90 104 Q 96 100 90 90 Z\"/>\n  <ellipse cx=\"90\" cy=\"150\" rx=\"66\" ry=\"38\" fill=\"#f3dc8a\" stroke=\"#8a6d2b\" stroke-width=\"3\"/>\n  <circle class=\"dash\" cx=\"90\" cy=\"150\" r=\"14\"/>\n  <text class=\"label\" x=\"90\" y=\"155\" text-anchor=\"middle\">?</text><text class=\"small\" x=\"90\" y=\"210\" text-anchor=\"middle\">Raw potato slice</text><text class=\"small\" x=\"130\" y=\"70\" text-anchor=\"middle\">iodine</text>\n  <circle class=\"badge\" cx=\"185\" cy=\"32\" r=\"11\"/><text class=\"label\" x=\"185\" y=\"37\" text-anchor=\"middle\">A</text><rect x=\"200\" y=\"14\" width=\"36\" height=\"36\" rx=\"4\" fill=\"#1f2340\" stroke=\"#333\" stroke-width=\"1.5\"/><text class=\"small\" x=\"244\" y=\"37\" text-anchor=\"start\">Blue-black</text>\n  <circle class=\"badge\" cx=\"185\" cy=\"84\" r=\"11\"/><text class=\"label\" x=\"185\" y=\"89\" text-anchor=\"middle\">B</text><rect x=\"200\" y=\"66\" width=\"36\" height=\"36\" rx=\"4\" fill=\"#e8564a\" stroke=\"#333\" stroke-width=\"1.5\"/><text class=\"small\" x=\"244\" y=\"89\" text-anchor=\"start\">Red</text>\n  <circle class=\"badge\" cx=\"185\" cy=\"136\" r=\"11\"/><text class=\"label\" x=\"185\" y=\"141\" text-anchor=\"middle\">C</text><rect x=\"200\" y=\"118\" width=\"36\" height=\"36\" rx=\"4\" fill=\"#5cb85c\" stroke=\"#333\" stroke-width=\"1.5\"/><text class=\"small\" x=\"244\" y=\"141\" text-anchor=\"start\">Green</text>\n  <circle class=\"badge\" cx=\"185\" cy=\"188\" r=\"11\"/><text class=\"label\" x=\"185\" y=\"193\" text-anchor=\"middle\">D</text><rect x=\"200\" y=\"170\" width=\"36\" height=\"36\" rx=\"4\" fill=\"#f3dc8a\" stroke=\"#333\" stroke-width=\"1.5\"/><text class=\"small\" x=\"244\" y=\"193\" text-anchor=\"start\">Stays yellow</text>\n</svg>", "alt": "A dropper puts a drop of iodine on a raw potato slice with a question-mark spot; four colour swatches A blue-black, B red, C green, D stays yellow"}
  },
  {
    id: "g4-sci-food-a-q20",
    prompt: "Fats give us lots of energy. So why should we eat only small amounts of them?",
    options: [
      { id: "a", text: "Fats have no use at all" },
      { id: "b", text: "Fats are only for grown-ups" },
      { id: "c", text: "Extra fat gets stored in the body and can harm the heart" },
      { id: "d", text: "Fats make our bones weak" }
    ],
    answerId: "c",
    explanation: "A little fat is useful. Too much gets stored in the body and is not good for the heart.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q21",
    prompt: "Raju eats only rice and potatoes every day. What problem might he face?",
    options: [
      { id: "a", text: "He will get too little energy" },
      { id: "b", text: "He will get too much protein" },
      { id: "c", text: "He may not get enough proteins, vitamins and minerals" },
      { id: "d", text: "He will get too much fibre" }
    ],
    answerId: "c",
    explanation: "Rice and potato give energy, but not enough of the other nutrients. Raju needs a balanced diet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q22",
    prompt: "Way 1 washes the vegetable whole and then cuts it. Way 2 cuts it first and then washes the pieces (yellow dots float away). Why is Way 1 better?",
    options: [
      { id: "a", text: "Some vitamins and minerals wash away from cut pieces" },
      { id: "b", text: "Washing first makes vegetables sweeter" },
      { id: "c", text: "Washing first makes vegetables grow bigger" },
      { id: "d", text: "Washing first changes their colour" }
    ],
    answerId: "a",
    explanation: "Some vitamins and minerals dissolve in water. Cut pieces have more open surface, so they lose them faster when washed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two ways to wash a vegetable. Way 1: wash the whole brinjal under a tap, then cut. Way 2: cut first, then wash the pieces in a bowl, with nutrient dots floating away\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <rect class=\"card\" x=\"5\" y=\"5\" width=\"150\" height=\"210\" rx=\"8\"/><rect class=\"card\" x=\"165\" y=\"5\" width=\"150\" height=\"210\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"22\" cy=\"22\" r=\"11\"/><text class=\"label\" x=\"22\" y=\"27\" text-anchor=\"middle\">1</text><text class=\"label\" x=\"88\" y=\"27\" text-anchor=\"middle\">Way 1</text><circle class=\"badge\" cx=\"182\" cy=\"22\" r=\"11\"/><text class=\"label\" x=\"182\" y=\"27\" text-anchor=\"middle\">2</text><text class=\"label\" x=\"248\" y=\"27\" text-anchor=\"middle\">Way 2</text>\n  <rect class=\"grey\" x=\"50\" y=\"40\" width=\"40\" height=\"10\" rx=\"3\"/><rect class=\"grey\" x=\"80\" y=\"40\" width=\"10\" height=\"22\"/>\n  <circle class=\"water\" cx=\"85\" cy=\"70\" r=\"3\"/><circle class=\"water\" cx=\"85\" cy=\"80\" r=\"3\"/>\n  <ellipse class=\"purple\" cx=\"80\" cy=\"96\" rx=\"30\" ry=\"12\"/><rect class=\"green\" x=\"106\" y=\"90\" width=\"10\" height=\"12\" rx=\"3\"/>\n  <line class=\"arrow\" x1=\"80\" y1=\"114\" x2=\"80\" y2=\"136\"/><polyline class=\"arrow\" points=\"75.8,129.0 80,136 84.2,129.0\"/>\n  <rect class=\"brown\" x=\"30\" y=\"146\" width=\"100\" height=\"26\" rx=\"4\"/>\n  <circle class=\"purple\" cx=\"50\" cy=\"155\" r=\"8\"/><circle class=\"purple\" cx=\"72\" cy=\"155\" r=\"8\"/><circle class=\"purple\" cx=\"94\" cy=\"155\" r=\"8\"/><circle class=\"purple\" cx=\"114\" cy=\"155\" r=\"8\"/>\n  <text class=\"small\" x=\"80\" y=\"192\" text-anchor=\"middle\">Wash whole,</text><text class=\"small\" x=\"80\" y=\"206\" text-anchor=\"middle\">then cut</text>\n  <circle class=\"purple\" cx=\"200\" cy=\"58\" r=\"8\"/><circle class=\"purple\" cx=\"222\" cy=\"58\" r=\"8\"/><circle class=\"purple\" cx=\"244\" cy=\"58\" r=\"8\"/>\n  <line class=\"arrow\" x1=\"232\" y1=\"72\" x2=\"232\" y2=\"96\"/><polyline class=\"arrow\" points=\"227.8,89.0 232,96 236.2,89.0\"/>\n  <path class=\"white\" d=\"M 190 112 Q 232 178 274 112 Z\"/><ellipse class=\"water\" cx=\"232\" cy=\"116\" rx=\"40\" ry=\"7\"/>\n  <circle class=\"purple\" cx=\"214\" cy=\"120\" r=\"7\"/><circle class=\"purple\" cx=\"236\" cy=\"124\" r=\"7\"/><circle class=\"purple\" cx=\"254\" cy=\"119\" r=\"7\"/>\n  <circle class=\"yellow\" cx=\"282\" cy=\"100\" r=\"6\"/><circle class=\"yellow\" cx=\"294\" cy=\"84\" r=\"5\"/><circle class=\"yellow\" cx=\"286\" cy=\"70\" r=\"4\"/>\n  <line class=\"arrow\" x1=\"266\" y1=\"110\" x2=\"280\" y2=\"94\"/><polyline class=\"arrow\" points=\"278.6,102.0 280,94 272.2,96.5\"/><text class=\"small\" x=\"248\" y=\"192\" text-anchor=\"middle\">Cut first,</text><text class=\"small\" x=\"248\" y=\"206\" text-anchor=\"middle\">then wash</text>\n</svg>", "alt": "Two ways to wash a vegetable. Way 1: wash the whole brinjal under a tap, then cut. Way 2: cut first, then wash the pieces in a bowl, with nutrient dots floating away"}
  },
  {
    id: "g4-sci-food-a-q23",
    prompt: "Which pair has one energy-giving food and one protective food?",
    options: [
      { id: "a", text: "Dal and egg" },
      { id: "b", text: "Rice and roti" },
      { id: "c", text: "Milk and paneer" },
      { id: "d", text: "Roti and spinach" }
    ],
    answerId: "d",
    explanation: "Roti gives energy. Spinach is a protective leafy vegetable. The other pairs are from the same group.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q24",
    prompt: "Meera loves chips. What is the wisest advice for her?",
    options: [
      { id: "a", text: "Eat chips at every meal" },
      { id: "b", text: "Enjoy chips once in a while and eat home food most days" },
      { id: "c", text: "Drink cola instead of water" },
      { id: "d", text: "Skip breakfast to eat more chips later" }
    ],
    answerId: "b",
    explanation: "Chips have lots of salt and oil but few nutrients. A small treat sometimes is fine.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-food-b-q01",
    prompt: "Which of these protein foods comes from an animal?",
    options: [
      { id: "a", text: "Rice" },
      { id: "b", text: "Wheat" },
      { id: "c", text: "Fish" },
      { id: "d", text: "Carrot" }
    ],
    answerId: "c",
    explanation: "Fish comes from an animal and is rich in protein. Rice, wheat and carrot come from plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q02",
    prompt: "Which nutrient helps build muscles and repair our body?",
    options: [
      { id: "a", text: "Proteins" },
      { id: "b", text: "Fats" },
      { id: "c", text: "Fibre" },
      { id: "d", text: "Water" }
    ],
    answerId: "a",
    explanation: "Proteins are body-building nutrients. They help us grow and heal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q03",
    prompt: "The red drop shows our blood. Blood needs iron to stay healthy. Which labelled card gives the most iron?",
    options: [
      { id: "a", text: "A \u2014 Sugar and toffee" },
      { id: "b", text: "B \u2014 Butter and cream" },
      { id: "c", text: "C \u2014 Salt and pepper" },
      { id: "d", text: "D \u2014 Spinach and jaggery" }
    ],
    answerId: "d",
    explanation: "Leafy greens like spinach, and jaggery, give iron. Iron helps our blood carry oxygen around the body.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Picture clue of a smiling red blood drop that needs iron, beside four plates: A sugar and toffee, B butter and cream, C salt and pepper, D spinach and jaggery\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <rect class=\"card\" x=\"5\" y=\"5\" width=\"113\" height=\"210\" rx=\"8\"/><text class=\"label\" x=\"61\" y=\"24\" text-anchor=\"middle\">Picture clue</text>\n  <path class=\"red\" d=\"M 61 44 C 50 70 26 98 26 122 A 35 35 0 0 0 96 122 C 96 98 72 70 61 44 Z\"/>\n  <circle cx=\"50\" cy=\"118\" r=\"4\" fill=\"#fff\"/><circle cx=\"72\" cy=\"118\" r=\"4\" fill=\"#fff\"/>\n  <path d=\"M 48 134 Q 61 144 74 134\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.5\"/>\n  <text class=\"small\" x=\"61\" y=\"186\" text-anchor=\"middle\">Iron keeps</text><text class=\"small\" x=\"61\" y=\"201\" text-anchor=\"middle\">blood healthy</text>\n  <rect class=\"card\" x=\"125\" y=\"5\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(151 55) scale(0.75)\"><rect class=\"white\" x=\"-15\" y=\"-12\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"-4\" y=\"-15\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"7\" y=\"-11\" width=\"10\" height=\"10\"/><path class=\"part\" d=\"M -25.0 0 Q 0 34.0 25.0 0 Z\"/></g>\n  <g transform=\"translate(192 55) scale(0.75)\"><path class=\"red\" d=\"M -13 0 L -26 -10 L -26 10 Z\"/><path class=\"red\" d=\"M 13 0 L 26 -10 L 26 10 Z\"/><ellipse class=\"red\" cx=\"0\" cy=\"0\" rx=\"15\" ry=\"11\"/></g>\n  <circle class=\"badge\" cx=\"139\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"139\" y=\"25\" text-anchor=\"middle\">A</text>\n  <text class=\"small\" x=\"171\" y=\"99\" text-anchor=\"middle\">Sugar, toffee</text>\n  <rect class=\"card\" x=\"222\" y=\"5\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(248 55) scale(0.75)\"><ellipse class=\"plate\" cx=\"0\" cy=\"12\" rx=\"28\" ry=\"8\"/><rect class=\"yellow\" x=\"-16\" y=\"-8\" width=\"32\" height=\"18\" rx=\"2\"/></g>\n  <g transform=\"translate(289 55) scale(0.75)\"><ellipse class=\"white\" cx=\"0\" cy=\"10\" rx=\"20\" ry=\"8\"/><ellipse class=\"white\" cx=\"0\" cy=\"0\" rx=\"14\" ry=\"7\"/><ellipse class=\"white\" cx=\"0\" cy=\"-9\" rx=\"8\" ry=\"5\"/></g>\n  <circle class=\"badge\" cx=\"236\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"236\" y=\"25\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"268\" y=\"99\" text-anchor=\"middle\">Butter, cream</text>\n  <rect class=\"card\" x=\"125\" y=\"112\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(151 162) scale(0.75)\"><rect class=\"white\" x=\"-10\" y=\"-14\" width=\"20\" height=\"30\" rx=\"4\"/><rect class=\"grey\" x=\"-10\" y=\"-20\" width=\"20\" height=\"8\" rx=\"3\"/></g>\n  <g transform=\"translate(192 162) scale(0.75)\"><rect class=\"dark\" x=\"-10\" y=\"-14\" width=\"20\" height=\"30\" rx=\"4\"/><rect class=\"grey\" x=\"-10\" y=\"-20\" width=\"20\" height=\"8\" rx=\"3\"/></g>\n  <circle class=\"badge\" cx=\"139\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"139\" y=\"132\" text-anchor=\"middle\">C</text>\n  <text class=\"small\" x=\"171\" y=\"206\" text-anchor=\"middle\">Salt, pepper</text>\n  <rect class=\"card\" x=\"222\" y=\"112\" width=\"93\" height=\"103\" rx=\"8\"/>\n  <g transform=\"translate(248 162) scale(0.75)\"><ellipse class=\"green\" cx=\"-10\" cy=\"0\" rx=\"8\" ry=\"18\" transform=\"rotate(-25 -10 0)\"/><ellipse class=\"green\" cx=\"10\" cy=\"0\" rx=\"8\" ry=\"18\" transform=\"rotate(25 10 0)\"/><ellipse class=\"green\" cx=\"0\" cy=\"-4\" rx=\"8\" ry=\"20\"/><line class=\"arrow\" x1=\"0\" y1=\"-18\" x2=\"0\" y2=\"18\"/></g>\n  <g transform=\"translate(289 162) scale(0.75)\"><rect class=\"brown\" x=\"-16\" y=\"-6\" width=\"16\" height=\"16\" rx=\"2\"/><rect class=\"brown\" x=\"2\" y=\"-10\" width=\"16\" height=\"16\" rx=\"2\"/></g>\n  <circle class=\"badge\" cx=\"236\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"236\" y=\"132\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"268\" y=\"206\" text-anchor=\"middle\">Spinach, jaggery</text>\n</svg>", "alt": "Picture clue of a smiling red blood drop that needs iron, beside four plates: A sugar and toffee, B butter and cream, C salt and pepper, D spinach and jaggery"}
  },
  {
    id: "g4-sci-food-b-q04",
    prompt: "What is another name for fibre?",
    options: [
      { id: "a", text: "Starch" },
      { id: "b", text: "Roughage" },
      { id: "c", text: "Protein" },
      { id: "d", text: "Vitamin" }
    ],
    answerId: "b",
    explanation: "Fibre is also called roughage. It helps our tummy work well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q05",
    prompt: "Honey and sugar need to be sorted. Which column of the sorting board do they belong in?",
    options: [
      { id: "a", text: "Column A \u2014 Carbohydrates" },
      { id: "b", text: "Column B \u2014 Proteins" },
      { id: "c", text: "Column C \u2014 Fats" },
      { id: "d", text: "Column D \u2014 Fibre" }
    ],
    answerId: "a",
    explanation: "Sugars are a kind of carbohydrate. They give quick energy, but we should eat only a little.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A honey jar and a sugar bowl above a sorting board with columns A carbohydrates, B proteins, C fats, D fibre\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <g transform=\"translate(140 62) scale(1.0)\"><rect class=\"yellow\" x=\"-19\" y=\"-14\" width=\"38\" height=\"32\" rx=\"5\"/><rect class=\"brown\" x=\"-21\" y=\"-21\" width=\"42\" height=\"8\" rx=\"2\"/><text class=\"small\" x=\"0\" y=\"7\" text-anchor=\"middle\">honey</text></g><g transform=\"translate(200 70) scale(1.0)\"><rect class=\"white\" x=\"-15\" y=\"-12\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"-4\" y=\"-15\" width=\"10\" height=\"10\"/><rect class=\"white\" x=\"7\" y=\"-11\" width=\"10\" height=\"10\"/><path class=\"part\" d=\"M -25.0 0 Q 0 34.0 25.0 0 Z\"/></g><text class=\"label\" x=\"60\" y=\"40\" text-anchor=\"middle\">Sweet foods</text><line class=\"arrow\" x1=\"160\" y1=\"96\" x2=\"160\" y2=\"116\"/><polyline class=\"arrow\" points=\"155.8,109.0 160,116 164.2,109.0\"/><text class=\"label\" x=\"178\" y=\"112\" text-anchor=\"middle\">?</text>\n  <rect class=\"card\" x=\"4\" y=\"118\" width=\"312\" height=\"98\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"43\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"43\" y=\"139\" text-anchor=\"middle\">A</text>\n  <text class=\"small\" x=\"43\" y=\"160\" text-anchor=\"middle\">Carbo-</text>\n  <text class=\"small\" x=\"43\" y=\"173\" text-anchor=\"middle\">hydrates</text>\n  <rect class=\"dash\" x=\"15\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n  <line class=\"arrow\" x1=\"82\" y1=\"118\" x2=\"82\" y2=\"216\"/>\n  <circle class=\"badge\" cx=\"121\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"121\" y=\"139\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"121\" y=\"160\" text-anchor=\"middle\">Proteins</text>\n  <text class=\"small\" x=\"121\" y=\"173\" text-anchor=\"middle\"></text>\n  <rect class=\"dash\" x=\"93\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n  <line class=\"arrow\" x1=\"160\" y1=\"118\" x2=\"160\" y2=\"216\"/>\n  <circle class=\"badge\" cx=\"199\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"199\" y=\"139\" text-anchor=\"middle\">C</text>\n  <text class=\"small\" x=\"199\" y=\"160\" text-anchor=\"middle\">Fats</text>\n  <text class=\"small\" x=\"199\" y=\"173\" text-anchor=\"middle\"></text>\n  <rect class=\"dash\" x=\"171\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n  <line class=\"arrow\" x1=\"238\" y1=\"118\" x2=\"238\" y2=\"216\"/>\n  <circle class=\"badge\" cx=\"277\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"277\" y=\"139\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"277\" y=\"160\" text-anchor=\"middle\">Fibre</text>\n  <text class=\"small\" x=\"277\" y=\"173\" text-anchor=\"middle\"></text>\n  <rect class=\"dash\" x=\"249\" y=\"182\" width=\"56\" height=\"26\" rx=\"4\"/>\n</svg>", "alt": "A honey jar and a sugar bowl above a sorting board with columns A carbohydrates, B proteins, C fats, D fibre"}
  },
  {
    id: "g4-sci-food-b-q06",
    prompt: "Which of these is a pulse?",
    options: [
      { id: "a", text: "Mango" },
      { id: "b", text: "Cabbage" },
      { id: "c", text: "Rice" },
      { id: "d", text: "Moong" }
    ],
    answerId: "d",
    explanation: "Moong is a pulse. Pulses like moong, chana and masoor are rich in protein.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q07",
    prompt: "A diet that has all nutrients in the right amounts is called a:",
    options: [
      { id: "a", text: "Junk diet" },
      { id: "b", text: "Fast diet" },
      { id: "c", text: "Balanced diet" },
      { id: "d", text: "Sweet diet" }
    ],
    answerId: "c",
    explanation: "A balanced diet gives our body everything it needs in the right amounts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q08",
    prompt: "A carrot gives vitamin A. Which labelled body part does vitamin A help the most?",
    options: [
      { id: "a", text: "A \u2014 Hair" },
      { id: "b", text: "B \u2014 Eye" },
      { id: "c", text: "C \u2014 Ear" },
      { id: "d", text: "D \u2014 Fingernail" }
    ],
    answerId: "b",
    explanation: "Vitamin A keeps our eyes healthy and helps us see in dim light. Carrots, papaya and mangoes have it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A child's face and hand with labels: A points to hair, B to an eye, C to an ear, D to a fingernail. A carrot is marked vitamin A\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <ellipse class=\"part\" cx=\"48\" cy=\"118\" rx=\"9\" ry=\"15\"/><ellipse class=\"part\" cx=\"172\" cy=\"118\" rx=\"9\" ry=\"15\"/>\n  <circle class=\"part\" cx=\"110\" cy=\"115\" r=\"60\"/>\n  <path class=\"brown\" d=\"M 50 108 Q 52 48 110 50 Q 168 48 170 108 Q 150 74 110 76 Q 70 74 50 108 Z\"/>\n  <ellipse class=\"white\" cx=\"88\" cy=\"113\" rx=\"10\" ry=\"7\"/><circle class=\"dark\" cx=\"88\" cy=\"113\" r=\"4\"/>\n  <ellipse class=\"white\" cx=\"132\" cy=\"113\" rx=\"10\" ry=\"7\"/><circle class=\"dark\" cx=\"132\" cy=\"113\" r=\"4\"/>\n  <path class=\"arrow\" d=\"M 92 143 Q 110 156 128 143\"/>\n  <rect class=\"part\" x=\"232\" y=\"128\" width=\"9\" height=\"30\" rx=\"4\"/><rect class=\"part\" x=\"243\" y=\"124\" width=\"9\" height=\"34\" rx=\"4\"/>\n  <rect class=\"part\" x=\"254\" y=\"126\" width=\"9\" height=\"32\" rx=\"4\"/><rect class=\"part\" x=\"265\" y=\"132\" width=\"9\" height=\"26\" rx=\"4\"/>\n  <rect class=\"part\" x=\"230\" y=\"150\" width=\"46\" height=\"46\" rx=\"12\"/>\n  <ellipse class=\"part\" cx=\"228\" cy=\"170\" rx=\"6\" ry=\"13\" transform=\"rotate(-25 228 170)\"/>\n  <rect class=\"pink\" x=\"245\" y=\"125\" width=\"5\" height=\"6\" rx=\"2\"/><rect class=\"pink\" x=\"256\" y=\"127\" width=\"5\" height=\"6\" rx=\"2\"/>\n  <rect class=\"pink\" x=\"234\" y=\"129\" width=\"5\" height=\"6\" rx=\"2\"/><rect class=\"pink\" x=\"267\" y=\"133\" width=\"5\" height=\"6\" rx=\"2\"/>\n  <line class=\"arrow\" x1=\"38\" y1=\"36\" x2=\"72\" y2=\"64\"/><line class=\"arrow\" x1=\"204\" y1=\"84\" x2=\"140\" y2=\"110\"/>\n  <line class=\"arrow\" x1=\"22\" y1=\"168\" x2=\"42\" y2=\"130\"/><line class=\"arrow\" x1=\"298\" y1=\"112\" x2=\"252\" y2=\"127\"/>\n  <circle class=\"badge\" cx=\"30\" cy=\"30\" r=\"11\"/><text class=\"label\" x=\"30\" y=\"35\" text-anchor=\"middle\">A</text><circle class=\"badge\" cx=\"212\" cy=\"80\" r=\"11\"/><text class=\"label\" x=\"212\" y=\"85\" text-anchor=\"middle\">B</text><circle class=\"badge\" cx=\"20\" cy=\"180\" r=\"11\"/><text class=\"label\" x=\"20\" y=\"185\" text-anchor=\"middle\">C</text><circle class=\"badge\" cx=\"306\" cy=\"108\" r=\"11\"/><text class=\"label\" x=\"306\" y=\"113\" text-anchor=\"middle\">D</text><g transform=\"translate(280 40) scale(0.8)\"><ellipse class=\"green\" cx=\"-4\" cy=\"-24\" rx=\"3\" ry=\"8\" transform=\"rotate(-20 -4 -24)\"/><ellipse class=\"green\" cx=\"4\" cy=\"-24\" rx=\"3\" ry=\"8\" transform=\"rotate(20 4 -24)\"/><path class=\"orange\" d=\"M -9 -18 L 9 -18 L 0 24 Z\"/><line class=\"arrow\" x1=\"-4\" y1=\"-6\" x2=\"1\" y2=\"-6\"/><line class=\"arrow\" x1=\"-1\" y1=\"6\" x2=\"3\" y2=\"6\"/></g><text class=\"small\" x=\"280\" y=\"80\" text-anchor=\"middle\">Vitamin A</text>\n</svg>", "alt": "A child's face and hand with labels: A points to hair, B to an eye, C to an ear, D to a fingernail. A carrot is marked vitamin A"}
  },
  {
    id: "g4-sci-food-b-q09",
    prompt: "The picture clue on the right shows a child's leg bone becoming soft and bent. Sunlight and milk can help. What is this problem called?",
    options: [
      { id: "a", text: "Goitre" },
      { id: "b", text: "Scurvy" },
      { id: "c", text: "Anaemia" },
      { id: "d", text: "Rickets" }
    ],
    answerId: "d",
    explanation: "Rickets happens when bones do not get enough vitamin D and calcium. Gentle sunlight and milk help bones stay strong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two leg-bone pictures: a strong straight bone and a soft bent bone; on the side, a sun and a glass of milk marked as helpers\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <line class=\"boneout\" x1=\"80\" y1=\"48\" x2=\"80\" y2=\"168\"/>\n  <circle class=\"white\" cx=\"74\" cy=\"44\" r=\"8\"/><circle class=\"white\" cx=\"86\" cy=\"44\" r=\"8\"/><circle class=\"white\" cx=\"74\" cy=\"172\" r=\"8\"/><circle class=\"white\" cx=\"86\" cy=\"172\" r=\"8\"/>\n  <line class=\"bonein\" x1=\"80\" y1=\"48\" x2=\"80\" y2=\"168\"/>\n  <path class=\"boneout\" d=\"M 190 48 Q 228 108 190 168\"/>\n  <circle class=\"white\" cx=\"184\" cy=\"44\" r=\"8\"/><circle class=\"white\" cx=\"196\" cy=\"44\" r=\"8\"/><circle class=\"white\" cx=\"184\" cy=\"172\" r=\"8\"/><circle class=\"white\" cx=\"196\" cy=\"172\" r=\"8\"/>\n  <path class=\"bonein\" d=\"M 190 48 Q 228 108 190 168\"/>\n  <line class=\"dash\" x1=\"250\" y1=\"10\" x2=\"250\" y2=\"210\"/>\n  <text class=\"small\" x=\"80\" y=\"198\" text-anchor=\"middle\">Strong, straight</text><text class=\"small\" x=\"196\" y=\"198\" text-anchor=\"middle\">Soft, bent</text><text class=\"label\" x=\"80\" y=\"20\" text-anchor=\"middle\">Healthy bone</text><text class=\"label\" x=\"196\" y=\"20\" text-anchor=\"middle\">Clue</text><g transform=\"translate(285 55) scale(1.0)\"><line class=\"arrow\" x1=\"16.0\" y1=\"0.0\" x2=\"22.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"11.3\" y1=\"11.3\" x2=\"15.6\" y2=\"15.6\"/><line class=\"arrow\" x1=\"0.0\" y1=\"16.0\" x2=\"0.0\" y2=\"22.0\"/><line class=\"arrow\" x1=\"-11.3\" y1=\"11.3\" x2=\"-15.6\" y2=\"15.6\"/><line class=\"arrow\" x1=\"-16.0\" y1=\"0.0\" x2=\"-22.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"-11.3\" y1=\"-11.3\" x2=\"-15.6\" y2=\"-15.6\"/><line class=\"arrow\" x1=\"-0.0\" y1=\"-16.0\" x2=\"-0.0\" y2=\"-22.0\"/><line class=\"arrow\" x1=\"11.3\" y1=\"-11.3\" x2=\"15.6\" y2=\"-15.6\"/><circle class=\"yellow\" cx=\"0\" cy=\"0\" r=\"13\"/></g><g transform=\"translate(285 130) scale(1.0)\"><path class=\"white\" d=\"M -12 -20 L 12 -20 L 9 20 L -9 20 Z\"/><line class=\"arrow\" x1=\"-11\" y1=\"-10\" x2=\"11\" y2=\"-10\"/></g><text class=\"small\" x=\"285\" y=\"175\" text-anchor=\"middle\">Helpers:</text><text class=\"small\" x=\"285\" y=\"189\" text-anchor=\"middle\">sun + milk</text>\n</svg>", "alt": "Two leg-bone pictures: a strong straight bone and a soft bent bone; on the side, a sun and a glass of milk marked as helpers"}
  },
  {
    id: "g4-sci-food-b-q10",
    prompt: "Which of these is rich in oil, a kind of fat?",
    options: [
      { id: "a", text: "Groundnuts" },
      { id: "b", text: "Tomato" },
      { id: "c", text: "Lemon" },
      { id: "d", text: "Lettuce" }
    ],
    answerId: "a",
    explanation: "Groundnuts are full of oil. That is why groundnut oil is made from them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q11",
    prompt: "Sonu's thali has roti and rice in section 1. Sections 2 and 3 are empty. Which choice fills sections 2 and 3 to make his thali balanced?",
    options: [
      { id: "a", text: "More rice in 2 and 3" },
      { id: "b", text: "A jalebi in 2 and 3" },
      { id: "c", text: "Dal or curd in 2; sabzi and salad in 3" },
      { id: "d", text: "Chips in 2 and 3" }
    ],
    answerId: "c",
    explanation: "Dal and curd add protein (body-building). Sabzi and salad add vitamins, minerals and fibre (protective).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Sonu's thali: section 1 has roti and rice; katori sections 2 and 3 are empty with question marks. A key says 1 energy, 2 body-building, 3 protective\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <g transform=\"translate(-6 0)\">\n  <circle class=\"plate\" cx=\"110\" cy=\"112\" r=\"100\"/><circle class=\"outline\" cx=\"110\" cy=\"112\" r=\"90\" style=\"stroke:#999\"/>\n  <circle class=\"white\" cx=\"75\" cy=\"72\" r=\"30\"/><circle class=\"white\" cx=\"145\" cy=\"72\" r=\"30\"/>\n  <text class=\"label\" x=\"75\" y=\"79\" text-anchor=\"middle\">?</text><text class=\"label\" x=\"145\" y=\"79\" text-anchor=\"middle\">?</text>\n  <circle class=\"brown\" cx=\"72\" cy=\"160\" r=\"20\"/><circle class=\"brown\" cx=\"88\" cy=\"152\" r=\"20\"/>\n  <ellipse class=\"white\" cx=\"148\" cy=\"158\" rx=\"28\" ry=\"16\"/>\n  <circle class=\"badge\" cx=\"48\" cy=\"46\" r=\"11\"/><text class=\"label\" x=\"48\" y=\"51\" text-anchor=\"middle\">2</text><circle class=\"badge\" cx=\"172\" cy=\"46\" r=\"11\"/><text class=\"label\" x=\"172\" y=\"51\" text-anchor=\"middle\">3</text><circle class=\"badge\" cx=\"116\" cy=\"188\" r=\"11\"/><text class=\"label\" x=\"116\" y=\"193\" text-anchor=\"middle\">1</text>\n  </g>\n  <rect class=\"card\" x=\"210\" y=\"40\" width=\"106\" height=\"140\" rx=\"8\"/>\n  <text class=\"label\" x=\"263\" y=\"60\" text-anchor=\"middle\">Key</text><circle class=\"badge\" cx=\"224\" cy=\"85\" r=\"11\"/><text class=\"label\" x=\"224\" y=\"90\" text-anchor=\"middle\">1</text><text class=\"small\" x=\"239\" y=\"89\" text-anchor=\"start\">Energy</text><circle class=\"badge\" cx=\"224\" cy=\"120\" r=\"11\"/><text class=\"label\" x=\"224\" y=\"125\" text-anchor=\"middle\">2</text><text class=\"small\" x=\"239\" y=\"124\" text-anchor=\"start\">Body-building</text><circle class=\"badge\" cx=\"224\" cy=\"155\" r=\"11\"/><text class=\"label\" x=\"224\" y=\"160\" text-anchor=\"middle\">3</text><text class=\"small\" x=\"239\" y=\"159\" text-anchor=\"start\">Protective</text>\n</svg>", "alt": "Sonu's thali: section 1 has roti and rice; katori sections 2 and 3 are empty with question marks. A key says 1 energy, 2 body-building, 3 protective"}
  },
  {
    id: "g4-sci-food-b-q12",
    prompt: "Which labelled katori in Tara's thali holds **protective** foods?",
    options: [
      { id: "a", text: "A \u2014 Roti" },
      { id: "b", text: "B \u2014 Fruits (mango, guava, papaya)" },
      { id: "c", text: "C \u2014 Dal" },
      { id: "d", text: "D \u2014 Ghee" }
    ],
    answerId: "b",
    explanation: "Fruits like mango, guava and papaya give vitamins and minerals, so they are protective foods. Roti gives energy, dal builds the body and ghee is a fat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A thali with four katoris labelled A roti, B fruits mango guava papaya, C dal, D ghee\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <circle class=\"plate\" cx=\"160\" cy=\"112\" r=\"102\"/>\n  <circle class=\"white\" cx=\"118\" cy=\"72\" r=\"38\"/><circle class=\"white\" cx=\"202\" cy=\"72\" r=\"38\"/>\n  <circle class=\"white\" cx=\"118\" cy=\"152\" r=\"38\"/><circle class=\"white\" cx=\"202\" cy=\"152\" r=\"38\"/>\n  <circle class=\"brown\" cx=\"110\" cy=\"64\" r=\"14\"/><circle class=\"brown\" cx=\"124\" cy=\"60\" r=\"14\"/>\n  <ellipse class=\"orange\" cx=\"188\" cy=\"62\" rx=\"10\" ry=\"13\"/><circle class=\"green\" cx=\"206\" cy=\"58\" r=\"10\"/><ellipse class=\"red\" cx=\"222\" cy=\"66\" rx=\"8\" ry=\"11\" style=\"fill:#f28c4a\"/>\n  <circle class=\"yellow\" cx=\"118\" cy=\"146\" r=\"24\"/>\n  <ellipse class=\"yellow\" cx=\"202\" cy=\"148\" rx=\"14\" ry=\"8\" style=\"fill:#fff2a8\"/><line class=\"stick\" x1=\"214\" y1=\"144\" x2=\"230\" y2=\"130\"/>\n  <text class=\"small\" x=\"118\" y=\"96\" text-anchor=\"middle\">Roti</text><text class=\"small\" x=\"202\" y=\"96\" text-anchor=\"middle\">Fruits</text><text class=\"small\" x=\"118\" y=\"182\" text-anchor=\"middle\">Dal</text><text class=\"small\" x=\"202\" y=\"176\" text-anchor=\"middle\">Ghee</text>\n  <line class=\"arrow\" x1=\"44\" y1=\"38\" x2=\"88\" y2=\"52\"/><line class=\"arrow\" x1=\"276\" y1=\"38\" x2=\"232\" y2=\"52\"/>\n  <line class=\"arrow\" x1=\"44\" y1=\"190\" x2=\"88\" y2=\"172\"/><line class=\"arrow\" x1=\"276\" y1=\"190\" x2=\"232\" y2=\"172\"/>\n  <circle class=\"badge\" cx=\"34\" cy=\"34\" r=\"11\"/><text class=\"label\" x=\"34\" y=\"39\" text-anchor=\"middle\">A</text><circle class=\"badge\" cx=\"286\" cy=\"34\" r=\"11\"/><text class=\"label\" x=\"286\" y=\"39\" text-anchor=\"middle\">B</text><circle class=\"badge\" cx=\"34\" cy=\"194\" r=\"11\"/><text class=\"label\" x=\"34\" y=\"199\" text-anchor=\"middle\">C</text><circle class=\"badge\" cx=\"286\" cy=\"194\" r=\"11\"/><text class=\"label\" x=\"286\" y=\"199\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "A thali with four katoris labelled A roti, B fruits mango guava papaya, C dal, D ghee"}
  },
  {
    id: "g4-sci-food-b-q13",
    prompt: "Lata often feels tired and looks pale. The doctor says she needs more iron. What should she eat?",
    options: [
      { id: "a", text: "Cola" },
      { id: "b", text: "Leafy greens, jaggery and dates" },
      { id: "c", text: "Chips" },
      { id: "d", text: "Toffees" }
    ],
    answerId: "b",
    explanation: "Leafy greens, jaggery and dates give iron. Iron helps her blood and energy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q14",
    prompt: "Priya does not eat eggs. Which food can give her protein instead?",
    options: [
      { id: "a", text: "Cucumber" },
      { id: "b", text: "Apple" },
      { id: "c", text: "Paneer" },
      { id: "d", text: "Rice" }
    ],
    answerId: "c",
    explanation: "Paneer is made from milk and is rich in protein. It is a great choice for vegetarians.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q15",
    prompt: "Dal was cooked at noon. Which labelled picture shows the dal that is most likely to spoil by night?",
    options: [
      { id: "a", text: "A \u2014 Open, on a warm shelf" },
      { id: "b", text: "B \u2014 Covered, in the fridge" },
      { id: "c", text: "C \u2014 In the freezer" },
      { id: "d", text: "D \u2014 Eaten hot at lunch" }
    ],
    answerId: "a",
    explanation: "Germs grow fast in warm places. Dal left open on a warm shelf spoils quickly; cold and covered food stays safe longer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four pictures of dal: A open bowl on a warm shelf in the sun, B covered bowl in a fridge, C box in a freezer, D hot dal with steam being eaten at lunch\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <rect class=\"card\" x=\"5\" y=\"5\" width=\"152\" height=\"103\" rx=\"8\"/><path class=\"part\" d=\"M 63 58 Q 81 82 99 58 Z\"/><ellipse class=\"yellow\" cx=\"81\" cy=\"58\" rx=\"18\" ry=\"4\"/><rect class=\"brown\" x=\"30\" y=\"70\" width=\"104\" height=\"6\"/><g transform=\"translate(132 30) scale(1.0)\"><line class=\"arrow\" x1=\"12.0\" y1=\"0.0\" x2=\"17.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"8.5\" y1=\"8.5\" x2=\"12.0\" y2=\"12.0\"/><line class=\"arrow\" x1=\"0.0\" y1=\"12.0\" x2=\"0.0\" y2=\"17.0\"/><line class=\"arrow\" x1=\"-8.5\" y1=\"8.5\" x2=\"-12.0\" y2=\"12.0\"/><line class=\"arrow\" x1=\"-12.0\" y1=\"0.0\" x2=\"-17.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"-8.5\" y1=\"-8.5\" x2=\"-12.0\" y2=\"-12.0\"/><line class=\"arrow\" x1=\"-0.0\" y1=\"-12.0\" x2=\"-0.0\" y2=\"-17.0\"/><line class=\"arrow\" x1=\"8.5\" y1=\"-8.5\" x2=\"12.0\" y2=\"-12.0\"/><circle class=\"yellow\" cx=\"0\" cy=\"0\" r=\"9\"/></g><path class=\"arrow\" d=\"M 72 46 Q 68 40 72 34 Q 76 28 72 22\"/><path class=\"arrow\" d=\"M 90 46 Q 86 40 90 34 Q 94 28 90 22\"/><circle class=\"badge\" cx=\"19\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"19\" y=\"25\" text-anchor=\"middle\">A</text><text class=\"small\" x=\"81\" y=\"101\" text-anchor=\"middle\">Open, warm shelf</text><rect class=\"card\" x=\"163\" y=\"5\" width=\"152\" height=\"103\" rx=\"8\"/><rect class=\"white\" x=\"209\" y=\"10\" width=\"62\" height=\"72\" rx=\"5\"/><line class=\"arrow\" x1=\"209\" y1=\"62\" x2=\"271\" y2=\"62\"/><path class=\"part\" d=\"M 222 50 Q 240 74 258 50 Z\"/><ellipse class=\"yellow\" cx=\"240\" cy=\"50\" rx=\"18\" ry=\"4\"/><path class=\"grey\" d=\"M 220 49 Q 240 34 260 49 Z\"/><line class=\"stick\" x1=\"263\" y1=\"24\" x2=\"263\" y2=\"36\"/><circle class=\"badge\" cx=\"177\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"177\" y=\"25\" text-anchor=\"middle\">B</text><text class=\"small\" x=\"239\" y=\"101\" text-anchor=\"middle\">Covered, in fridge</text><rect class=\"card\" x=\"5\" y=\"112\" width=\"152\" height=\"103\" rx=\"8\"/><rect class=\"water\" x=\"51\" y=\"117\" width=\"62\" height=\"72\" rx=\"5\" style=\"fill:#dff1fb\"/><rect class=\"grey\" x=\"64\" y=\"155\" width=\"36\" height=\"22\" rx=\"3\"/><line class=\"arrow\" x1=\"82\" y1=\"124\" x2=\"82\" y2=\"148\"/><line class=\"arrow\" x1=\"71\" y1=\"130\" x2=\"93\" y2=\"142\"/><line class=\"arrow\" x1=\"71\" y1=\"142\" x2=\"93\" y2=\"130\"/><circle class=\"badge\" cx=\"19\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"19\" y=\"132\" text-anchor=\"middle\">C</text><text class=\"small\" x=\"81\" y=\"208\" text-anchor=\"middle\">In the freezer</text><rect class=\"card\" x=\"163\" y=\"112\" width=\"152\" height=\"103\" rx=\"8\"/><path class=\"part\" d=\"M 222 168 Q 240 192 258 168 Z\"/><ellipse class=\"yellow\" cx=\"240\" cy=\"168\" rx=\"18\" ry=\"4\"/><path class=\"arrow\" d=\"M 232 156 Q 228 148 232 140 Q 236 132 232 124\"/><path class=\"arrow\" d=\"M 248 156 Q 244 148 248 140 Q 252 132 248 124\"/><line class=\"stick\" x1=\"256\" y1=\"164\" x2=\"276\" y2=\"140\"/><ellipse class=\"grey\" cx=\"278\" cy=\"137\" rx=\"5\" ry=\"7\" transform=\"rotate(40 278 137)\"/><circle class=\"badge\" cx=\"177\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"177\" y=\"132\" text-anchor=\"middle\">D</text><text class=\"small\" x=\"239\" y=\"208\" text-anchor=\"middle\">Eaten hot at lunch</text>\n</svg>", "alt": "Four pictures of dal: A open bowl on a warm shelf in the sun, B covered bowl in a fridge, C box in a freezer, D hot dal with steam being eaten at lunch"}
  },
  {
    id: "g4-sci-food-b-q16",
    prompt: "Mango pickle stays good for many months. What helps keep it from spoiling?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Ice" },
      { id: "c", text: "Rain" },
      { id: "d", text: "Salt and oil" }
    ],
    answerId: "d",
    explanation: "Salt and oil stop germs from growing in pickles. This keeps them good for long.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q17",
    prompt: "Which tiffin box is the healthiest for school?",
    options: [
      { id: "a", text: "Vegetable paratha, curd and a guava" },
      { id: "b", text: "Noodles and cola" },
      { id: "c", text: "Chips and biscuits" },
      { id: "d", text: "A slice of cream cake" }
    ],
    answerId: "a",
    explanation: "This tiffin has energy food, protein and a fruit. It keeps you strong all day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q18",
    prompt: "Which labelled picture shows what you should do **just before eating**?",
    options: [
      { id: "a", text: "A \u2014 Playing in mud" },
      { id: "b", text: "B \u2014 Eating with unwashed hands" },
      { id: "c", text: "C \u2014 Washing hands with soap" },
      { id: "d", text: "D \u2014 Coughing over food" }
    ],
    answerId: "c",
    explanation: "Washing hands with soap and water removes germs. Clean hands keep our food safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four pictures: A muddy hands after playing in mud, B unwashed hand with germ dots reaching for food, C hands washed with soap under a tap, D child coughing over a plate\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <rect class=\"card\" x=\"5\" y=\"5\" width=\"152\" height=\"103\" rx=\"8\"/><ellipse class=\"part\" cx=\"45\" cy=\"54\" rx=\"6\" ry=\"11\" transform=\"rotate(-25 45 54)\"/><rect class=\"part\" x=\"47\" y=\"28\" width=\"26\" height=\"42\" rx=\"12\"/><ellipse class=\"part\" cx=\"115\" cy=\"54\" rx=\"6\" ry=\"11\" transform=\"rotate(25 115 54)\"/><rect class=\"part\" x=\"87\" y=\"28\" width=\"26\" height=\"42\" rx=\"12\"/><circle class=\"brown\" cx=\"56\" cy=\"40\" r=\"5\"/><circle class=\"brown\" cx=\"64\" cy=\"58\" r=\"4\"/><circle class=\"brown\" cx=\"98\" cy=\"44\" r=\"5\"/><circle class=\"brown\" cx=\"104\" cy=\"60\" r=\"4\"/><ellipse class=\"brown\" cx=\"80\" cy=\"80\" rx=\"40\" ry=\"5\"/><circle class=\"badge\" cx=\"19\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"19\" y=\"25\" text-anchor=\"middle\">A</text><text class=\"small\" x=\"81\" y=\"101\" text-anchor=\"middle\">Playing in mud</text><rect class=\"card\" x=\"163\" y=\"5\" width=\"152\" height=\"103\" rx=\"8\"/><ellipse class=\"part\" cx=\"195\" cy=\"50\" rx=\"6\" ry=\"11\" transform=\"rotate(-25 195 50)\"/><rect class=\"part\" x=\"197\" y=\"24\" width=\"26\" height=\"42\" rx=\"12\"/><circle class=\"green\" cx=\"206\" cy=\"38\" r=\"3\"/><circle class=\"green\" cx=\"214\" cy=\"50\" r=\"3\"/><circle class=\"green\" cx=\"204\" cy=\"58\" r=\"3\"/><ellipse class=\"plate\" cx=\"262\" cy=\"66\" rx=\"30\" ry=\"9\"/><ellipse class=\"yellow\" cx=\"262\" cy=\"62\" rx=\"14\" ry=\"5\"/><line class=\"arrow\" x1=\"226\" y1=\"50\" x2=\"246\" y2=\"58\"/><polyline class=\"arrow\" points=\"237.9,59.3 246,58 241.1,51.5\"/><circle class=\"badge\" cx=\"177\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"177\" y=\"25\" text-anchor=\"middle\">B</text><text class=\"small\" x=\"239\" y=\"101\" text-anchor=\"middle\">Unwashed hands, eating</text><rect class=\"card\" x=\"5\" y=\"112\" width=\"152\" height=\"103\" rx=\"8\"/><rect class=\"grey\" x=\"56\" y=\"120\" width=\"40\" height=\"9\" rx=\"3\"/><rect class=\"grey\" x=\"86\" y=\"120\" width=\"9\" height=\"18\"/><circle class=\"water\" cx=\"90\" cy=\"144\" r=\"3\"/><ellipse class=\"part\" cx=\"53\" cy=\"172\" rx=\"6\" ry=\"11\" transform=\"rotate(-25 53 172)\"/><rect class=\"part\" x=\"55\" y=\"146\" width=\"26\" height=\"42\" rx=\"12\"/><ellipse class=\"part\" cx=\"119\" cy=\"172\" rx=\"6\" ry=\"11\" transform=\"rotate(25 119 172)\"/><rect class=\"part\" x=\"91\" y=\"146\" width=\"26\" height=\"42\" rx=\"12\"/><circle class=\"white\" cx=\"86\" cy=\"156\" r=\"5\" style=\"stroke:#2b7bb9\"/><circle class=\"white\" cx=\"80\" cy=\"176\" r=\"4\" style=\"stroke:#2b7bb9\"/><circle class=\"white\" cx=\"92\" cy=\"182\" r=\"3\" style=\"stroke:#2b7bb9\"/><circle class=\"badge\" cx=\"19\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"19\" y=\"132\" text-anchor=\"middle\">C</text><text class=\"small\" x=\"81\" y=\"208\" text-anchor=\"middle\">Washing hands with soap</text><rect class=\"card\" x=\"163\" y=\"112\" width=\"152\" height=\"103\" rx=\"8\"/><circle class=\"part\" cx=\"212\" cy=\"148\" r=\"18\"/><circle cx=\"216\" cy=\"143\" r=\"2\" fill=\"#333\"/><ellipse cx=\"226\" cy=\"154\" rx=\"3\" ry=\"4\" fill=\"#333\"/><path class=\"arrow\" d=\"M 234 150 L 250 146\"/><path class=\"arrow\" d=\"M 234 156 L 252 158\"/><circle class=\"green\" cx=\"258\" cy=\"152\" r=\"2.5\"/><circle class=\"green\" cx=\"262\" cy=\"164\" r=\"2.5\"/><ellipse class=\"plate\" cx=\"270\" cy=\"182\" rx=\"26\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"270\" cy=\"179\" rx=\"12\" ry=\"4\"/><circle class=\"badge\" cx=\"177\" cy=\"127\" r=\"11\"/><text class=\"label\" x=\"177\" y=\"132\" text-anchor=\"middle\">D</text><text class=\"small\" x=\"239\" y=\"208\" text-anchor=\"middle\">Coughing over food</text>\n</svg>", "alt": "Four pictures: A muddy hands after playing in mud, B unwashed hand with germ dots reaching for food, C hands washed with soap under a tap, D child coughing over a plate"}
  },
  {
    id: "g4-sci-food-b-q19",
    prompt: "Why should we not overcook vegetables?",
    options: [
      { id: "a", text: "They become too green" },
      { id: "b", text: "They grow bigger" },
      { id: "c", text: "They become heavier" },
      { id: "d", text: "Some vitamins are lost with too much heat" }
    ],
    answerId: "d",
    explanation: "Long cooking destroys some vitamins. Cook vegetables just enough, with a lid on.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q20",
    prompt: "Which labelled person needs the **most** energy-giving food today?",
    options: [
      { id: "a", text: "A \u2014 Sleeping" },
      { id: "b", text: "B \u2014 Ploughing a field all day" },
      { id: "c", text: "C \u2014 Watching TV" },
      { id: "d", text: "D \u2014 Sitting at a desk" }
    ],
    answerId: "b",
    explanation: "Hard physical work like ploughing uses a lot of energy, so the farmer needs the most energy-giving food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four people: A sleeping in bed, B farmer ploughing a field in the sun, C child sitting watching TV, D person sitting at a desk\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .outline { fill:none; stroke:#333; stroke-width:2; }\n    .stick { fill:none; stroke:#333; stroke-width:2.5; stroke-linecap:round; }\n    .water { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .purple { fill:#8e5ba8; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#2a2a4a; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#2f3f73; stroke:#333; stroke-width:1.5; }\n    .crust { fill:#fff7e6; stroke:#b07a4a; stroke-width:4; }\n    .boneout { fill:none; stroke:#333; stroke-width:14; stroke-linecap:round; }\n    .bonein { fill:none; stroke:#fffaf0; stroke-width:10; stroke-linecap:round; }\n  </style>\n  <rect class=\"card\" x=\"4\" y=\"22\" width=\"74\" height=\"166\" rx=\"8\"/><circle class=\"badge\" cx=\"41\" cy=\"22\" r=\"11\"/><text class=\"label\" x=\"41\" y=\"27\" text-anchor=\"middle\">A</text><text class=\"small\" x=\"41\" y=\"202\" text-anchor=\"middle\">Sleeping</text><text class=\"small\" x=\"41\" y=\"215\" text-anchor=\"middle\"></text>\n  <rect class=\"card\" x=\"83\" y=\"22\" width=\"74\" height=\"166\" rx=\"8\"/><circle class=\"badge\" cx=\"120\" cy=\"22\" r=\"11\"/><text class=\"label\" x=\"120\" y=\"27\" text-anchor=\"middle\">B</text><text class=\"small\" x=\"120\" y=\"202\" text-anchor=\"middle\">Ploughing</text><text class=\"small\" x=\"120\" y=\"215\" text-anchor=\"middle\">all day</text>\n  <rect class=\"card\" x=\"162\" y=\"22\" width=\"74\" height=\"166\" rx=\"8\"/><circle class=\"badge\" cx=\"199\" cy=\"22\" r=\"11\"/><text class=\"label\" x=\"199\" y=\"27\" text-anchor=\"middle\">C</text><text class=\"small\" x=\"199\" y=\"202\" text-anchor=\"middle\">Watching</text><text class=\"small\" x=\"199\" y=\"215\" text-anchor=\"middle\">TV</text>\n  <rect class=\"card\" x=\"241\" y=\"22\" width=\"74\" height=\"166\" rx=\"8\"/><circle class=\"badge\" cx=\"278\" cy=\"22\" r=\"11\"/><text class=\"label\" x=\"278\" y=\"27\" text-anchor=\"middle\">D</text><text class=\"small\" x=\"278\" y=\"202\" text-anchor=\"middle\">Sitting at</text><text class=\"small\" x=\"278\" y=\"215\" text-anchor=\"middle\">a desk</text>\n  <rect class=\"brown\" x=\"12\" y=\"130\" width=\"58\" height=\"12\" rx=\"2\"/><rect class=\"brown\" x=\"12\" y=\"112\" width=\"8\" height=\"40\"/>\n  <rect class=\"white\" x=\"20\" y=\"114\" width=\"14\" height=\"10\" rx=\"3\"/><circle class=\"part\" cx=\"28\" cy=\"110\" r=\"7\"/>\n  <rect class=\"water\" x=\"34\" y=\"118\" width=\"36\" height=\"12\" rx=\"4\"/>\n  <text class=\"label\" x=\"52\" y=\"92\" text-anchor=\"middle\">Z z z</text><g transform=\"translate(132 50) scale(1.0)\"><line class=\"arrow\" x1=\"11.0\" y1=\"0.0\" x2=\"15.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"7.8\" y1=\"7.8\" x2=\"10.6\" y2=\"10.6\"/><line class=\"arrow\" x1=\"0.0\" y1=\"11.0\" x2=\"0.0\" y2=\"15.0\"/><line class=\"arrow\" x1=\"-7.8\" y1=\"7.8\" x2=\"-10.6\" y2=\"10.6\"/><line class=\"arrow\" x1=\"-11.0\" y1=\"0.0\" x2=\"-15.0\" y2=\"0.0\"/><line class=\"arrow\" x1=\"-7.8\" y1=\"-7.8\" x2=\"-10.6\" y2=\"-10.6\"/><line class=\"arrow\" x1=\"-0.0\" y1=\"-11.0\" x2=\"-0.0\" y2=\"-15.0\"/><line class=\"arrow\" x1=\"7.8\" y1=\"-7.8\" x2=\"10.6\" y2=\"-10.6\"/><circle class=\"yellow\" cx=\"0\" cy=\"0\" r=\"8\"/></g>\n  <circle class=\"part\" cx=\"104\" cy=\"96\" r=\"7\"/><line class=\"stick\" x1=\"106\" y1=\"103\" x2=\"114\" y2=\"130\"/>\n  <line class=\"stick\" x1=\"114\" y1=\"130\" x2=\"104\" y2=\"160\"/><line class=\"stick\" x1=\"114\" y1=\"130\" x2=\"122\" y2=\"160\"/>\n  <line class=\"stick\" x1=\"108\" y1=\"112\" x2=\"128\" y2=\"122\"/><line class=\"stick\" x1=\"126\" y1=\"118\" x2=\"146\" y2=\"150\"/>\n  <path class=\"grey\" d=\"M 138 150 L 152 150 L 146 162 Z\"/><line class=\"arrow\" x1=\"88\" y1=\"164\" x2=\"152\" y2=\"164\"/>\n  <rect class=\"dark\" x=\"168\" y=\"80\" width=\"40\" height=\"28\" rx=\"3\"/><rect class=\"water\" x=\"172\" y=\"84\" width=\"32\" height=\"20\"/>\n  <rect class=\"orange\" x=\"166\" y=\"140\" width=\"56\" height=\"14\" rx=\"4\"/><rect class=\"orange\" x=\"212\" y=\"118\" width=\"10\" height=\"36\" rx=\"3\"/>\n  <circle class=\"part\" cx=\"196\" cy=\"116\" r=\"7\"/><line class=\"stick\" x1=\"196\" y1=\"123\" x2=\"196\" y2=\"140\"/><line class=\"stick\" x1=\"196\" y1=\"140\" x2=\"184\" y2=\"140\"/><line class=\"stick\" x1=\"184\" y1=\"140\" x2=\"184\" y2=\"160\"/>\n  <rect class=\"brown\" x=\"244\" y=\"128\" width=\"40\" height=\"6\"/><line class=\"stick\" x1=\"250\" y1=\"134\" x2=\"250\" y2=\"166\"/><line class=\"stick\" x1=\"280\" y1=\"134\" x2=\"280\" y2=\"166\"/>\n  <rect class=\"grey\" x=\"252\" y=\"112\" width=\"22\" height=\"16\" rx=\"2\"/>\n  <circle class=\"part\" cx=\"296\" cy=\"112\" r=\"7\"/><line class=\"stick\" x1=\"296\" y1=\"119\" x2=\"296\" y2=\"146\"/><line class=\"stick\" x1=\"296\" y1=\"128\" x2=\"276\" y2=\"126\"/>\n  <line class=\"stick\" x1=\"296\" y1=\"146\" x2=\"284\" y2=\"146\"/><line class=\"stick\" x1=\"284\" y1=\"146\" x2=\"284\" y2=\"166\"/>\n</svg>", "alt": "Four people: A sleeping in bed, B farmer ploughing a field in the sun, C child sitting watching TV, D person sitting at a desk"}
  },
  {
    id: "g4-sci-food-b-q21",
    prompt: "A mango milkshake is made with milk and mango. What does it give us?",
    options: [
      { id: "a", text: "Only fibre" },
      { id: "b", text: "Only fat" },
      { id: "c", text: "Only water" },
      { id: "d", text: "Protein and calcium from milk, vitamins from mango" }
    ],
    answerId: "d",
    explanation: "Mixing foods mixes their nutrients. Milk gives protein and calcium. Mango gives vitamins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q22",
    prompt: "Why should we drink more water on a hot day?",
    options: [
      { id: "a", text: "Our body loses water as sweat and needs it back" },
      { id: "b", text: "Water makes us taller" },
      { id: "c", text: "Water is full of protein" },
      { id: "d", text: "Water can take the place of food" }
    ],
    answerId: "a",
    explanation: "On hot days we sweat more. Drinking water replaces what our body loses.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q23",
    prompt: "Which of these has the most fibre?",
    options: [
      { id: "a", text: "White bread" },
      { id: "b", text: "Whole wheat roti" },
      { id: "c", text: "Sugar" },
      { id: "d", text: "Butter" }
    ],
    answerId: "b",
    explanation: "Whole wheat keeps the outer bran layer, which is full of fibre. White bread loses most of it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q24",
    prompt: "Anu says, \"Fruits give us no energy at all.\" What is correct?",
    options: [
      { id: "a", text: "Anu is right" },
      { id: "b", text: "Fruits give only fat" },
      { id: "c", text: "Fruits give some energy from natural sugars, plus vitamins and fibre" },
      { id: "d", text: "Fruits give only protein" }
    ],
    answerId: "c",
    explanation: "Fruits have natural sugars for energy. They also give vitamins, minerals and fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf71",
    title: "Why do we eat?",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Food gives us energy to play, helps us grow, and keeps us healthy. A balanced thali has a bit of every kind.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Go foods", reveal: "Energy: rice, roti, potato", emoji: "\ud83c\udf5a" },
      { label: "Grow foods", reveal: "Body-building: dal, milk, eggs", emoji: "\ud83e\udd5b" },
      { label: "Protective foods", reveal: "Vitamins & minerals: fruits, vegetables", emoji: "\ud83e\udd55" },
      { label: "Fibre & water", reveal: "Help digestion; keep the body cool", emoji: "\ud83d\udca7" },
      { label: "Fats", reveal: "A little bit for energy \u2014 not too much", emoji: "\ud83e\uddc8" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which food mainly helps us grow?",
    options: [
        { id: "a", text: "Dal" },
        { id: "b", text: "Sugar" },
        { id: "c", text: "Chips" },
        { id: "d", text: "Cold drink" }
    ],
    answerId: "a",
    why: "Dal is rich in protein, a grow (body-building) food.",
    visual: "plant",
    speak: "Which food mainly helps us grow?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Go, grow & protective foods", "Fibre and water help digestion", "Eat a balanced thali", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceFood: ChapterDef = {
  id: "food-nutrition",
  title: "Food and Nutrition",
  emoji: "\ud83c\udf71",
  blurb: "Go, grow & protective foods",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "human-body",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "human-body",
      questions: SET_B,
    },
  ],
  paperTopics: ["human-body", "living-things"],
};

export const g4ScienceFoodQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
