import type { ChapterDef, PrepQuestion } from "../types";

/** Plant Parts - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-sci-plants-a-q01",
    prompt: "Look at the plant. Which labelled part grows **under the soil**?",
    options: [
      { id: "a", text: "Part A" },
      { id: "b", text: "Part B" },
      { id: "c", text: "Part C" },
      { id: "d", text: "Part D" }
    ],
    answerId: "b",
    explanation: "Part B is the root. Roots grow down into the soil. They drink water and hold the plant in place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A flowering plant in soil with four labels: A on the flower, B on the roots under the soil, C on a leaf, D on the stem\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"150\"/><rect class=\"soil\" x=\"0\" y=\"150\" width=\"320\" height=\"70\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">A plant</text>\n  <path class=\"root\" d=\"M130 150 L130 172 M130 160 Q112 172 104 194 M130 162 Q150 175 158 198 M130 172 Q124 188 120 204 M130 170 Q140 186 142 206\"/>\n  <line class=\"stemline\" x1=\"130\" y1=\"150\" x2=\"130\" y2=\"58\"/>\n  <ellipse class=\"part\" cx=\"108\" cy=\"112\" rx=\"22\" ry=\"9\" transform=\"rotate(-25 108 112)\"/><line class=\"vein\" x1=\"88.1\" y1=\"121.3\" x2=\"127.9\" y2=\"102.7\"/>\n  <ellipse class=\"part\" cx=\"153\" cy=\"96\" rx=\"22\" ry=\"9\" transform=\"rotate(25 153 96)\"/><line class=\"vein\" x1=\"133.1\" y1=\"86.7\" x2=\"172.9\" y2=\"105.3\"/>\n  <circle class=\"petal\" cx=\"141.7\" cy=\"48.0\" r=\"9\"/><circle class=\"petal\" cx=\"135.8\" cy=\"58.1\" r=\"9\"/><circle class=\"petal\" cx=\"124.2\" cy=\"58.1\" r=\"9\"/><circle class=\"petal\" cx=\"118.3\" cy=\"48.0\" r=\"9\"/><circle class=\"petal\" cx=\"124.1\" cy=\"37.9\" r=\"9\"/><circle class=\"petal\" cx=\"135.8\" cy=\"37.9\" r=\"9\"/><circle class=\"yellow\" cx=\"130\" cy=\"48\" r=\"8.1\"/>\n  <line class=\"leader\" x1=\"147\" y1=\"48\" x2=\"226\" y2=\"40\"/><circle class=\"badge\" cx=\"238\" cy=\"40\" r=\"11\"/><text class=\"label\" x=\"238\" y=\"45\" text-anchor=\"middle\">A</text>\n  <line class=\"leader\" x1=\"146\" y1=\"186\" x2=\"226\" y2=\"186\"/><circle class=\"badge\" cx=\"238\" cy=\"186\" r=\"11\"/><text class=\"label\" x=\"238\" y=\"191\" text-anchor=\"middle\">B</text>\n  <line class=\"leader\" x1=\"88\" y1=\"118\" x2=\"52\" y2=\"118\"/><circle class=\"badge\" cx=\"40\" cy=\"118\" r=\"11\"/><text class=\"label\" x=\"40\" y=\"123\" text-anchor=\"middle\">C</text>\n  <line class=\"leader\" x1=\"133\" y1=\"134\" x2=\"226\" y2=\"134\"/><circle class=\"badge\" cx=\"238\" cy=\"134\" r=\"11\"/><text class=\"label\" x=\"238\" y=\"139\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "A flowering plant in soil with four labels: A on the flower, B on the roots under the soil, C on a leaf, D on the stem"}
  },
  {
    id: "g3-sci-plants-a-q02",
    prompt: "Which part of a plant makes food for the plant?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Leaf" }
    ],
    answerId: "d",
    explanation: "Leaves are the plant's kitchen. They make food using sunlight, air and water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q03",
    prompt: "What do roots take from the soil?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Sunlight" },
      { id: "c", text: "Fruits" },
      { id: "d", text: "Flowers" }
    ],
    answerId: "a",
    explanation: "Roots drink water from the soil, like you drink juice through a straw.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q04",
    prompt: "Which part holds the plant up and carries water to the leaves?",
    options: [
      { id: "a", text: "Flower" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "c",
    explanation: "The stem stands tall and works like a pipe. Water goes up the stem to the leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q05",
    prompt: "A flower slowly turns into something new. What goes in the **?** card?",
    options: [
      { id: "a", text: "A root" },
      { id: "b", text: "A leaf" },
      { id: "c", text: "A fruit" },
      { id: "d", text: "A stem" }
    ],
    answerId: "c",
    explanation: "After the bee visits, the flower slowly grows into a fruit. That is how we get mangoes and apples!",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Card 1 shows a pink flower with a bee. An arrow points to card 2, which is empty with a big question mark\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">What comes next?</text>\n  <rect class=\"card\" x=\"20\" y=\"40\" width=\"110\" height=\"150\" rx=\"10\"/>\n  <line class=\"stemline\" x1=\"75\" y1=\"180\" x2=\"75\" y2=\"110\"/>\n  <ellipse class=\"part\" cx=\"62\" cy=\"150\" rx=\"14\" ry=\"6\" transform=\"rotate(-30 62 150)\"/><line class=\"vein\" x1=\"49.9\" y1=\"157.0\" x2=\"74.1\" y2=\"143.0\"/>\n  <circle class=\"petal\" cx=\"89.3\" cy=\"98.0\" r=\"11\"/><circle class=\"petal\" cx=\"82.2\" cy=\"110.4\" r=\"11\"/><circle class=\"petal\" cx=\"67.9\" cy=\"110.4\" r=\"11\"/><circle class=\"petal\" cx=\"60.7\" cy=\"98.0\" r=\"11\"/><circle class=\"petal\" cx=\"67.8\" cy=\"85.6\" r=\"11\"/><circle class=\"petal\" cx=\"82.2\" cy=\"85.6\" r=\"11\"/><circle class=\"yellow\" cx=\"75\" cy=\"98\" r=\"9.9\"/>\n  <ellipse class=\"yellow\" cx=\"108\" cy=\"66\" rx=\"9\" ry=\"6\"/><line class=\"arrow\" x1=\"105\" y1=\"61\" x2=\"105\" y2=\"71\" style=\"stroke:#111\"/><line class=\"arrow\" x1=\"110\" y1=\"61\" x2=\"110\" y2=\"71\" style=\"stroke:#111\"/><ellipse class=\"white\" cx=\"106\" cy=\"58\" rx=\"5\" ry=\"4\"/>\n  <text class=\"small\" x=\"75\" y=\"56\" text-anchor=\"middle\">Flower</text>\n  <line class=\"arrow\" x1=\"142\" y1=\"115\" x2=\"178\" y2=\"115\" style=\"stroke-width:3\"/><polyline class=\"arrow\" points=\"173,110 180,115 173,120\"/>\n  <rect class=\"dash\" x=\"190\" y=\"40\" width=\"110\" height=\"150\" rx=\"10\"/>\n  <text class=\"big\" x=\"245\" y=\"130\" text-anchor=\"middle\">?</text>\n</svg>", "alt": "Card 1 shows a pink flower with a bee. An arrow points to card 2, which is empty with a big question mark"}
  },
  {
    id: "g3-sci-plants-a-q06",
    prompt: "What do we find inside most fruits?",
    options: [
      { id: "a", text: "Seeds" },
      { id: "b", text: "Roots" },
      { id: "c", text: "Leaves" },
      { id: "d", text: "Stems" }
    ],
    answerId: "a",
    explanation: "Fruits keep seeds safe inside. Cut an apple and you will see small seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q07",
    prompt: "Most leaves are which colour?",
    options: [
      { id: "a", text: "Blue" },
      { id: "b", text: "Black" },
      { id: "c", text: "Pink" },
      { id: "d", text: "Green" }
    ],
    answerId: "d",
    explanation: "Most leaves are green. The green colour helps them use sunlight to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q08",
    prompt: "The leaf is the plant's kitchen. Which three things in the picture does it use to make food?",
    options: [
      { id: "a", text: "Sand, salt and sugar" },
      { id: "b", text: "Sunlight, air and water" },
      { id: "c", text: "Soil, stones and heat" },
      { id: "d", text: "Moonlight and darkness" }
    ],
    answerId: "b",
    explanation: "Leaves mix sunlight, air and water to make food. This is called photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A sun, a puffy air cloud and a water drop each have an arrow pointing into a big green leaf that says food\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">The leaf's kitchen</text>\n  <line class=\"arrow\" x1=\"73.0\" y1=\"58.0\" x2=\"79.0\" y2=\"58.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"67.7\" y1=\"70.7\" x2=\"72.0\" y2=\"75.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"55.0\" y1=\"76.0\" x2=\"55.0\" y2=\"82.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"42.3\" y1=\"70.7\" x2=\"38.0\" y2=\"75.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"37.0\" y1=\"58.0\" x2=\"31.0\" y2=\"58.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"42.3\" y1=\"45.3\" x2=\"38.0\" y2=\"41.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"55.0\" y1=\"40.0\" x2=\"55.0\" y2=\"34.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"67.7\" y1=\"45.3\" x2=\"72.0\" y2=\"41.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><circle class=\"yellow\" cx=\"55\" cy=\"58\" r=\"14\"/>\n  <g><circle class=\"white\" cx=\"148\" cy=\"58\" r=\"13\"/><circle class=\"white\" cx=\"164\" cy=\"50\" r=\"15\"/><circle class=\"white\" cx=\"180\" cy=\"60\" r=\"12\"/><rect x=\"140\" y=\"58\" width=\"44\" height=\"12\" fill=\"#ffffff\"/><line x1=\"138\" y1=\"70\" x2=\"190\" y2=\"70\" stroke=\"#374151\" stroke-width=\"1.5\"/></g>\n  <path class=\"water\" d=\"M265 36 Q250 60 254 70 A12 12 0 0 0 276 70 Q280 60 265 36 Z\"/>\n  <line class=\"arrow\" x1=\"70\" y1=\"90\" x2=\"128\" y2=\"138\"/><polyline class=\"arrow\" points=\"125,133 130,140 135,133\"/>\n  <line class=\"arrow\" x1=\"162\" y1=\"80\" x2=\"162\" y2=\"128\"/><polyline class=\"arrow\" points=\"157,123 162,130 167,123\"/>\n  <line class=\"arrow\" x1=\"256\" y1=\"90\" x2=\"196\" y2=\"138\"/><polyline class=\"arrow\" points=\"189,133 194,140 199,133\"/>\n  <ellipse class=\"part\" cx=\"162\" cy=\"172\" rx=\"64\" ry=\"28\"/>\n  <line class=\"vein\" x1=\"98\" y1=\"172\" x2=\"226\" y2=\"172\"/>\n  <line class=\"vein\" x1=\"130\" y1=\"172\" x2=\"118\" y2=\"158\"/><line class=\"vein\" x1=\"190\" y1=\"172\" x2=\"204\" y2=\"158\"/>\n  <text class=\"label\" x=\"162\" y=\"168\" text-anchor=\"middle\">Food!</text>\n</svg>", "alt": "A sun, a puffy air cloud and a water drop each have an arrow pointing into a big green leaf that says food"}
  },
  {
    id: "g3-sci-plants-a-q09",
    prompt: "A seed can grow into a ______.",
    options: [
      { id: "a", text: "new plant" },
      { id: "b", text: "stone" },
      { id: "c", text: "insect" },
      { id: "d", text: "flower pot" }
    ],
    answerId: "a",
    explanation: "A seed has a baby plant sleeping inside. With water and warmth, it grows into a new plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q10",
    prompt: "Which part of a plant often has bright colours and a sweet smell?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Seed" }
    ],
    answerId: "c",
    explanation: "Flowers are often bright and sweet-smelling. This brings bees and butterflies to them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q11",
    prompt: "Look at the carrot plant. The orange part we eat grows down into the soil. Which plant part is it?",
    options: [
      { id: "a", text: "Stem" },
      { id: "b", text: "Root" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Flower" }
    ],
    answerId: "b",
    explanation: "A carrot is a root. It grows down into the soil and stores food for the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A carrot plant with feathery green leaves above the soil and a long orange part under the soil. An arrow says we eat this part\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"90\"/><rect class=\"soil\" x=\"0\" y=\"90\" width=\"320\" height=\"130\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">Carrot plant</text>\n  <path class=\"stemline\" d=\"M160 92 Q150 60 128 34 M160 92 Q160 58 160 28 M160 92 Q170 60 192 34\" style=\"stroke-width:3\"/>\n  <ellipse class=\"part\" cx=\"130\" cy=\"38\" rx=\"10\" ry=\"5\" transform=\"rotate(-40 130 38)\"/><line class=\"vein\" x1=\"122.3\" y1=\"44.4\" x2=\"137.7\" y2=\"31.6\"/><ellipse class=\"part\" cx=\"160\" cy=\"28\" rx=\"10\" ry=\"5\" transform=\"rotate(90 160 28)\"/><line class=\"vein\" x1=\"160.0\" y1=\"18.0\" x2=\"160.0\" y2=\"38.0\"/><ellipse class=\"part\" cx=\"190\" cy=\"38\" rx=\"10\" ry=\"5\" transform=\"rotate(40 190 38)\"/><line class=\"vein\" x1=\"182.3\" y1=\"31.6\" x2=\"197.7\" y2=\"44.4\"/><ellipse class=\"part\" cx=\"144\" cy=\"58\" rx=\"9\" ry=\"4\" transform=\"rotate(-50 144 58)\"/><line class=\"vein\" x1=\"138.2\" y1=\"64.9\" x2=\"149.8\" y2=\"51.1\"/><ellipse class=\"part\" cx=\"176\" cy=\"58\" rx=\"9\" ry=\"4\" transform=\"rotate(50 176 58)\"/><line class=\"vein\" x1=\"170.2\" y1=\"51.1\" x2=\"181.8\" y2=\"64.9\"/><ellipse class=\"part\" cx=\"152\" cy=\"76\" rx=\"8\" ry=\"4\" transform=\"rotate(-60 152 76)\"/><line class=\"vein\" x1=\"148.0\" y1=\"82.9\" x2=\"156.0\" y2=\"69.1\"/><ellipse class=\"part\" cx=\"168\" cy=\"76\" rx=\"8\" ry=\"4\" transform=\"rotate(60 168 76)\"/><line class=\"vein\" x1=\"164.0\" y1=\"69.1\" x2=\"172.0\" y2=\"82.9\"/>\n  <path class=\"orange\" d=\"M142 92 L178 92 Q176 140 160 200 Q144 140 142 92 Z\"/>\n  <path class=\"arrow\" d=\"M150 115 L156 115 M164 140 L170 140 M151 160 L157 160\" style=\"stroke:#9a3412\"/>\n  <path class=\"root\" d=\"M152 150 L138 156 M168 128 L182 122 M160 200 L160 210\" style=\"stroke-width:1.5\"/>\n  <line class=\"arrow\" x1=\"260\" y1=\"150\" x2=\"184\" y2=\"140\"/><polyline class=\"arrow\" points=\"191.3,146.0 184,140 192.6,136.1\"/><text class=\"small\" x=\"262\" y=\"168\" text-anchor=\"middle\">We eat this part</text>\n</svg>", "alt": "A carrot plant with feathery green leaves above the soil and a long orange part under the soil. An arrow says we eat this part"}
  },
  {
    id: "g3-sci-plants-a-q12",
    prompt: "When we eat spinach (palak), which part of the plant are we eating?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Fruit" },
      { id: "c", text: "Seed" },
      { id: "d", text: "Leaf" }
    ],
    answerId: "d",
    explanation: "Spinach is made of soft green leaves. We cook these leaves to eat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q13",
    prompt: "This potato grew under the soil. See the little **eyes**? New shoots grow from them. Which part of the plant is a potato?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Leaf" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Stem" }
    ],
    answerId: "d",
    explanation: "A potato is a stem that grows under the soil. Its little \"eyes\" can grow new shoots. Roots do not have eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A potato under the soil with small eyes. Little shoots are growing out of the eyes. A label points to an eye\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"70\"/><rect class=\"soil\" x=\"0\" y=\"70\" width=\"320\" height=\"150\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">Potato under the soil</text>\n  <ellipse class=\"potato\" cx=\"160\" cy=\"140\" rx=\"70\" ry=\"44\"/>\n  <ellipse cx=\"128\" cy=\"124\" rx=\"4\" ry=\"2.5\" fill=\"#7c4a1e\"/>\n  <ellipse cx=\"186\" cy=\"118\" rx=\"4\" ry=\"2.5\" fill=\"#7c4a1e\"/>\n  <ellipse cx=\"170\" cy=\"160\" rx=\"4\" ry=\"2.5\" fill=\"#7c4a1e\"/>\n  <ellipse cx=\"134\" cy=\"160\" rx=\"4\" ry=\"2.5\" fill=\"#7c4a1e\"/>\n  <path class=\"stemline\" d=\"M128 121 Q118 100 124 66 M186 115 Q196 92 192 64\" style=\"stroke-width:3\"/>\n  <ellipse class=\"part\" cx=\"116\" cy=\"58\" rx=\"10\" ry=\"5\" transform=\"rotate(-40 116 58)\"/><line class=\"vein\" x1=\"108.3\" y1=\"64.4\" x2=\"123.7\" y2=\"51.6\"/><ellipse class=\"part\" cx=\"200\" cy=\"56\" rx=\"10\" ry=\"5\" transform=\"rotate(40 200 56)\"/><line class=\"vein\" x1=\"192.3\" y1=\"49.6\" x2=\"207.7\" y2=\"62.4\"/>\n  <line class=\"arrow\" x1=\"260\" y1=\"184\" x2=\"176\" y2=\"162\"/><polyline class=\"arrow\" points=\"182.5,168.9 176,162 185.0,159.2\"/><text class=\"small\" x=\"268\" y=\"196\" text-anchor=\"middle\">eye</text>\n</svg>", "alt": "A potato under the soil with small eyes. Little shoots are growing out of the eyes. A label points to an eye"}
  },
  {
    id: "g3-sci-plants-a-q14",
    prompt: "Which of these is a fruit?",
    options: [
      { id: "a", text: "Radish" },
      { id: "b", text: "Apple" },
      { id: "c", text: "Cabbage" },
      { id: "d", text: "Ginger" }
    ],
    answerId: "b",
    explanation: "An apple grows from a flower and has seeds inside, so it is a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q15",
    prompt: "Riya tries to pull a weed out of the garden. It is very hard to pull. Why?",
    options: [
      { id: "a", text: "Its flowers are too big" },
      { id: "b", text: "Its leaves are too green" },
      { id: "c", text: "Its roots hold the soil tightly" },
      { id: "d", text: "Its fruits are too heavy" }
    ],
    answerId: "c",
    explanation: "Roots spread into the soil and hold on tight. That is why a plant is hard to pull out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q16",
    prompt: "Sweet sugarcane juice comes from which part of the plant?",
    options: [
      { id: "a", text: "Stem" },
      { id: "b", text: "Root" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Flower" }
    ],
    answerId: "a",
    explanation: "The tall, thick sugarcane stick is a stem. It stores sweet juice inside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q17",
    prompt: "Look at the cauliflower. The white part is made of many tiny buds packed together. Which plant part are we eating?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "c",
    explanation: "The white part of a cauliflower is made of many tiny flower buds. So we are eating flowers!",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cauliflower with a big white bumpy head made of tiny buds, wrapped by green leaves. An arrow points to the white part\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">Cauliflower</text>\n  <ellipse class=\"part\" cx=\"108\" cy=\"150\" rx=\"46\" ry=\"18\" transform=\"rotate(-30 108 150)\"/><line class=\"vein\" x1=\"68.2\" y1=\"173.0\" x2=\"147.8\" y2=\"127.0\"/><ellipse class=\"part\" cx=\"212\" cy=\"150\" rx=\"46\" ry=\"18\" transform=\"rotate(30 212 150)\"/><line class=\"vein\" x1=\"172.2\" y1=\"127.0\" x2=\"251.8\" y2=\"173.0\"/><ellipse class=\"part\" cx=\"160\" cy=\"172\" rx=\"50\" ry=\"16\" transform=\"rotate(0 160 172)\"/><line class=\"vein\" x1=\"110.0\" y1=\"172.0\" x2=\"210.0\" y2=\"172.0\"/>\n  <circle class=\"white\" cx=\"130\" cy=\"118\" r=\"16\"/><circle class=\"white\" cx=\"160\" cy=\"108\" r=\"16\"/><circle class=\"white\" cx=\"190\" cy=\"118\" r=\"16\"/><circle class=\"white\" cx=\"122\" cy=\"140\" r=\"16\"/><circle class=\"white\" cx=\"150\" cy=\"134\" r=\"16\"/><circle class=\"white\" cx=\"176\" cy=\"134\" r=\"16\"/><circle class=\"white\" cx=\"200\" cy=\"142\" r=\"16\"/><circle class=\"white\" cx=\"160\" cy=\"150\" r=\"16\"/><circle class=\"white\" cx=\"140\" cy=\"92\" r=\"16\"/><circle class=\"white\" cx=\"178\" cy=\"92\" r=\"16\"/>\n  <line class=\"arrow\" x1=\"268\" y1=\"70\" x2=\"196\" y2=\"98\"/><polyline class=\"arrow\" points=\"205.3,99.8 196,98 201.6,90.4\"/><text class=\"small\" x=\"236\" y=\"56\" text-anchor=\"middle\">We eat this white part</text>\n</svg>", "alt": "A cauliflower with a big white bumpy head made of tiny buds, wrapped by green leaves. An arrow points to the white part"}
  },
  {
    id: "g3-sci-plants-a-q18",
    prompt: "Look inside the pea pod. Each green pea we eat is the plant's ______.",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "stem" },
      { id: "c", text: "leaf" },
      { id: "d", text: "seed" }
    ],
    answerId: "d",
    explanation: "Peas grow inside a pod. Each pea is a seed. If you plant it, a new pea plant can grow!",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An open green pea pod with five round green peas inside. An arrow points to one pea\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">An open pea pod</text>\n  <path class=\"part\" d=\"M40 120 Q160 40 284 110 Q160 170 40 120 Z\" style=\"fill:#4ade80\"/>\n  <path class=\"part\" d=\"M58 118 Q160 70 266 110 Q160 144 58 118 Z\" style=\"fill:#dcfce7\"/>\n  <circle class=\"part\" cx=\"92\" cy=\"114\" r=\"13\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"126\" cy=\"108\" r=\"13\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"160\" cy=\"106\" r=\"13\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"194\" cy=\"107\" r=\"13\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"228\" cy=\"110\" r=\"13\" style=\"fill:#22c55e\"/>\n  <path class=\"stemline\" d=\"M284 110 Q298 100 300 86\" style=\"stroke-width:3\"/>\n  <line class=\"arrow\" x1=\"160\" y1=\"190\" x2=\"160\" y2=\"124\"/><polyline class=\"arrow\" points=\"155.0,132.0 160,124 165.0,132.0\"/><text class=\"small\" x=\"160\" y=\"206\" text-anchor=\"middle\">One green pea</text>\n</svg>", "alt": "An open green pea pod with five round green peas inside. An arrow points to one pea"}
  },
  {
    id: "g3-sci-plants-a-q19",
    prompt: "Aman forgets to water his plant for many days. What will most likely happen?",
    options: [
      { id: "a", text: "Its leaves droop and dry up" },
      { id: "b", text: "It grows many more flowers" },
      { id: "c", text: "Its roots turn into fruits" },
      { id: "d", text: "Its leaves turn blue" }
    ],
    answerId: "a",
    explanation: "Without water, the roots have nothing to drink. The leaves droop and dry up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q20",
    prompt: "Which group has ONLY roots?",
    options: [
      { id: "a", text: "Potato and carrot" },
      { id: "b", text: "Radish and carrot" },
      { id: "c", text: "Spinach and radish" },
      { id: "d", text: "Apple and beetroot" }
    ],
    answerId: "b",
    explanation: "Radish and carrot are both roots. Potato is a stem, spinach is a leaf and apple is a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q21",
    prompt: "Tara puts a celery stick in red water. The next day she sees red lines going up into its leaves. What does this show?",
    options: [
      { id: "a", text: "Leaves drink from the air" },
      { id: "b", text: "The stem carries water up to the leaves" },
      { id: "c", text: "Roots make food for the plant" },
      { id: "d", text: "Flowers carry water to the leaves" }
    ],
    answerId: "b",
    explanation: "The red water moved up the celery stem into the leaves. This shows the stem works like a water pipe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two glasses of red water with a celery stick. On day 1 the celery is green. The next day red lines go up the stem into the leaves\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"small\" x=\"80\" y=\"18\" text-anchor=\"middle\">Day 1</text>\n  <text class=\"small\" x=\"240\" y=\"18\" text-anchor=\"middle\">Next day</text>\n  <line x1=\"160\" y1=\"10\" x2=\"160\" y2=\"210\" stroke=\"#d1d5db\" stroke-width=\"1\"/>\n  \n  <path class=\"redwater\" d=\"M54 150 L106 150 L102 205 L58 205 Z\"/>\n  <path class=\"glass\" d=\"M50 110 L58 205 L102 205 L110 110\"/>\n  <rect class=\"part\" x=\"74\" y=\"58\" width=\"12\" height=\"138\" rx=\"5\"/>\n  <ellipse class=\"part\" cx=\"62\" cy=\"46\" rx=\"16\" ry=\"7\" transform=\"rotate(-35 62 46)\"/><line class=\"vein\" x1=\"48.9\" y1=\"55.2\" x2=\"75.1\" y2=\"36.8\"/><ellipse class=\"part\" cx=\"98\" cy=\"46\" rx=\"16\" ry=\"7\" transform=\"rotate(35 98 46)\"/><line class=\"vein\" x1=\"84.9\" y1=\"36.8\" x2=\"111.1\" y2=\"55.2\"/><ellipse class=\"part\" cx=\"80\" cy=\"34\" rx=\"14\" ry=\"6\" transform=\"rotate(90 80 34)\"/><line class=\"vein\" x1=\"80.0\" y1=\"20.0\" x2=\"80.0\" y2=\"48.0\"/>\n  \n  <path class=\"redwater\" d=\"M214 150 L266 150 L262 205 L218 205 Z\"/>\n  <path class=\"glass\" d=\"M210 110 L218 205 L262 205 L270 110\"/>\n  <rect class=\"part\" x=\"234\" y=\"58\" width=\"12\" height=\"138\" rx=\"5\"/>\n  <ellipse class=\"part\" cx=\"222\" cy=\"46\" rx=\"16\" ry=\"7\" transform=\"rotate(-35 222 46)\"/><line class=\"vein\" x1=\"208.9\" y1=\"55.2\" x2=\"235.1\" y2=\"36.8\"/><ellipse class=\"part\" cx=\"258\" cy=\"46\" rx=\"16\" ry=\"7\" transform=\"rotate(35 258 46)\"/><line class=\"vein\" x1=\"244.9\" y1=\"36.8\" x2=\"271.1\" y2=\"55.2\"/><ellipse class=\"part\" cx=\"240\" cy=\"34\" rx=\"14\" ry=\"6\" transform=\"rotate(90 240 34)\"/><line class=\"vein\" x1=\"240.0\" y1=\"20.0\" x2=\"240.0\" y2=\"48.0\"/>\n  \n  <line class=\"redline\" x1=\"238\" y1=\"196\" x2=\"238\" y2=\"60\"/><line class=\"redline\" x1=\"243\" y1=\"196\" x2=\"243\" y2=\"60\"/>\n  <line class=\"redline\" x1=\"238\" y1=\"60\" x2=\"226\" y2=\"48\"/><line class=\"redline\" x1=\"243\" y1=\"60\" x2=\"256\" y2=\"48\"/><line class=\"redline\" x1=\"240\" y1=\"60\" x2=\"240\" y2=\"30\"/>\n  <text class=\"small\" x=\"28\" y=\"178\" text-anchor=\"middle\">red</text><text class=\"small\" x=\"28\" y=\"191\" text-anchor=\"middle\">water</text>\n</svg>", "alt": "Two glasses of red water with a celery stick. On day 1 the celery is green. The next day red lines go up the stem into the leaves"}
  },
  {
    id: "g3-sci-plants-a-q22",
    prompt: "A plant is kept inside a dark cupboard for many days. It becomes weak and pale. Why?",
    options: [
      { id: "a", text: "Its leaves cannot make food without sunlight" },
      { id: "b", text: "Its roots got too much sunlight" },
      { id: "c", text: "Its stem turned into a root" },
      { id: "d", text: "Its seeds fell out" }
    ],
    answerId: "a",
    explanation: "Leaves need sunlight to make food. In the dark, the plant gets no food, so it grows weak.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q23",
    prompt: "Someone plucks off all the flowers from a mango tree. What will the tree NOT give this year?",
    options: [
      { id: "a", text: "Roots" },
      { id: "b", text: "Leaves" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Mangoes" }
    ],
    answerId: "d",
    explanation: "Mangoes grow from mango flowers. With no flowers, there can be no mangoes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q24",
    prompt: "Look at the four cards. Which order shows how a plant grows?",
    options: [
      { id: "a", text: "3 \u2192 2 \u2192 1 \u2192 4" },
      { id: "b", text: "1 \u2192 4 \u2192 2 \u2192 3" },
      { id: "c", text: "2 \u2192 4 \u2192 1 \u2192 3" },
      { id: "d", text: "4 \u2192 3 \u2192 2 \u2192 1" }
    ],
    answerId: "c",
    explanation: "A seed (2) grows into a young plant (4). The plant gets a flower (1). The flower turns into a fruit (3), and the fruit holds new seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four mixed-up picture cards: 1 a flower, 2 a seed, 3 a fruit, 4 a young plant in soil\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Put the cards in order</text>\n  <rect class=\"card\" x=\"8\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/><line class=\"stemline\" x1=\"43\" y1=\"148\" x2=\"43\" y2=\"104\" style=\"stroke-width:3\"/><ellipse class=\"part\" cx=\"34\" cy=\"128\" rx=\"10\" ry=\"4\" transform=\"rotate(-30 34 128)\"/><line class=\"vein\" x1=\"25.3\" y1=\"133.0\" x2=\"42.7\" y2=\"123.0\"/><circle class=\"petal\" cx=\"53.4\" cy=\"94.0\" r=\"8\"/><circle class=\"petal\" cx=\"48.2\" cy=\"103.0\" r=\"8\"/><circle class=\"petal\" cx=\"37.8\" cy=\"103.0\" r=\"8\"/><circle class=\"petal\" cx=\"32.6\" cy=\"94.0\" r=\"8\"/><circle class=\"petal\" cx=\"37.8\" cy=\"85.0\" r=\"8\"/><circle class=\"petal\" cx=\"48.2\" cy=\"85.0\" r=\"8\"/><circle class=\"yellow\" cx=\"43\" cy=\"94\" r=\"7.2\"/><circle class=\"badge\" cx=\"43\" cy=\"40\" r=\"11\"/><text class=\"label\" x=\"43\" y=\"45\" text-anchor=\"middle\">1</text><text class=\"small\" x=\"43\" y=\"162\" text-anchor=\"middle\">Flower</text>\n  <rect class=\"card\" x=\"86\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/><ellipse class=\"trunk\" cx=\"121\" cy=\"110\" rx=\"16\" ry=\"11\"/><path class=\"vein\" d=\"M110 108 Q121 100 132 108\" style=\"stroke:#fde68a\"/><circle class=\"badge\" cx=\"121\" cy=\"40\" r=\"11\"/><text class=\"label\" x=\"121\" y=\"45\" text-anchor=\"middle\">2</text><text class=\"small\" x=\"121\" y=\"162\" text-anchor=\"middle\">Seed</text>\n  <rect class=\"card\" x=\"164\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/><circle class=\"red\" cx=\"199\" cy=\"112\" r=\"22\"/><line class=\"stemline\" x1=\"199\" y1=\"90\" x2=\"201\" y2=\"80\" style=\"stroke:#5b3a10;stroke-width:3\"/><ellipse class=\"part\" cx=\"210\" cy=\"82\" rx=\"8\" ry=\"4\" transform=\"rotate(-20 210 82)\"/><line class=\"vein\" x1=\"202.5\" y1=\"84.7\" x2=\"217.5\" y2=\"79.3\"/><circle class=\"badge\" cx=\"199\" cy=\"40\" r=\"11\"/><text class=\"label\" x=\"199\" y=\"45\" text-anchor=\"middle\">3</text><text class=\"small\" x=\"199\" y=\"162\" text-anchor=\"middle\">Fruit</text>\n  <rect class=\"card\" x=\"242\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/><rect class=\"soil\" x=\"250\" y=\"128\" width=\"54\" height=\"22\"/><line class=\"stemline\" x1=\"277\" y1=\"128\" x2=\"277\" y2=\"98\" style=\"stroke-width:3\"/><ellipse class=\"part\" cx=\"267\" cy=\"96\" rx=\"10\" ry=\"5\" transform=\"rotate(-30 267 96)\"/><line class=\"vein\" x1=\"258.3\" y1=\"101.0\" x2=\"275.7\" y2=\"91.0\"/><ellipse class=\"part\" cx=\"287\" cy=\"96\" rx=\"10\" ry=\"5\" transform=\"rotate(30 287 96)\"/><line class=\"vein\" x1=\"278.3\" y1=\"91.0\" x2=\"295.7\" y2=\"101.0\"/><circle class=\"badge\" cx=\"277\" cy=\"40\" r=\"11\"/><text class=\"label\" x=\"277\" y=\"45\" text-anchor=\"middle\">4</text><text class=\"small\" x=\"277\" y=\"162\" text-anchor=\"middle\">Young plant</text>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Which order shows how a plant grows?</text>\n</svg>", "alt": "Four mixed-up picture cards: 1 a flower, 2 a seed, 3 a fruit, 4 a young plant in soil"}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-sci-plants-b-q01",
    prompt: "Look at the tree. A tree trunk is a big, strong stem. Which labelled part is the **stem**?",
    options: [
      { id: "a", text: "Part A" },
      { id: "b", text: "Part B" },
      { id: "c", text: "Part C" },
      { id: "d", text: "Part D" }
    ],
    answerId: "c",
    explanation: "Part C is the thick brown trunk. A trunk is a big, strong stem. It holds the tree up tall.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A tree with four labels: A on the green leaves, B on a red fruit, C on the thick brown trunk, D on the roots under the soil\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"160\"/><rect class=\"soil\" x=\"0\" y=\"160\" width=\"320\" height=\"60\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">A fruit tree</text>\n  <path class=\"root\" d=\"M150 160 Q130 180 108 196 M160 160 L160 206 M170 160 Q192 180 214 194\" style=\"stroke-width:4\"/>\n  <rect class=\"trunk\" x=\"148\" y=\"88\" width=\"24\" height=\"74\" rx=\"4\"/>\n  <circle class=\"part\" cx=\"130\" cy=\"72\" r=\"30\"/><circle class=\"part\" cx=\"190\" cy=\"72\" r=\"30\"/><circle class=\"part\" cx=\"160\" cy=\"50\" r=\"34\"/>\n  <circle class=\"red\" cx=\"128\" cy=\"82\" r=\"7\"/><circle class=\"red\" cx=\"186\" cy=\"58\" r=\"7\"/><circle class=\"red\" cx=\"200\" cy=\"86\" r=\"7\"/>\n  <line class=\"leader\" x1=\"150\" y1=\"40\" x2=\"62\" y2=\"40\"/><circle class=\"badge\" cx=\"50\" cy=\"40\" r=\"11\"/><text class=\"label\" x=\"50\" y=\"45\" text-anchor=\"middle\">A</text>\n  <line class=\"leader\" x1=\"207\" y1=\"86\" x2=\"258\" y2=\"86\"/><circle class=\"badge\" cx=\"270\" cy=\"86\" r=\"11\"/><text class=\"label\" x=\"270\" y=\"91\" text-anchor=\"middle\">B</text>\n  <line class=\"leader\" x1=\"148\" y1=\"130\" x2=\"62\" y2=\"130\"/><circle class=\"badge\" cx=\"50\" cy=\"130\" r=\"11\"/><text class=\"label\" x=\"50\" y=\"135\" text-anchor=\"middle\">C</text>\n  <line class=\"leader\" x1=\"212\" y1=\"192\" x2=\"258\" y2=\"192\"/><circle class=\"badge\" cx=\"270\" cy=\"192\" r=\"11\"/><text class=\"label\" x=\"270\" y=\"197\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "A tree with four labels: A on the green leaves, B on a red fruit, C on the thick brown trunk, D on the roots under the soil"}
  },
  {
    id: "g3-sci-plants-b-q02",
    prompt: "How do roots help a plant?",
    options: [
      { id: "a", text: "They hold it firmly in the soil" },
      { id: "b", text: "They make the flowers smell" },
      { id: "c", text: "They catch insects" },
      { id: "d", text: "They make sunlight" }
    ],
    answerId: "a",
    explanation: "Roots hold the plant firmly in the soil. They also drink water for the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q03",
    prompt: "Which part of the plant keeps the seeds safe?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "d",
    explanation: "The fruit wraps around the seeds and keeps them safe until they are ready.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q04",
    prompt: "Food made in the leaves goes to other parts of the plant through the ______.",
    options: [
      { id: "a", text: "flower" },
      { id: "b", text: "stem" },
      { id: "c", text: "seed" },
      { id: "d", text: "soil" }
    ],
    answerId: "b",
    explanation: "The stem is like a two-way pipe. Water goes up, and food from the leaves goes to other parts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q05",
    prompt: "What does the word \"photosynthesis\" mean?",
    options: [
      { id: "a", text: "Plants making food with sunlight" },
      { id: "b", text: "Plants drinking milk" },
      { id: "c", text: "Plants sleeping at night" },
      { id: "d", text: "Seeds falling from trees" }
    ],
    answerId: "a",
    explanation: "Photosynthesis is a big word for a simple idea. It means leaves making food with sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q06",
    prompt: "Bees and butterflies love to visit which part of a plant?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Seed" },
      { id: "d", text: "Flower" }
    ],
    answerId: "d",
    explanation: "Bees and butterflies visit flowers for sweet juice. This visit helps flowers turn into fruits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q07",
    prompt: "Which part of a plant is usually flat, thin and green?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "c",
    explanation: "Most leaves are flat, thin and green. Being flat helps them catch lots of sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q08",
    prompt: "What does a seed need to start growing?",
    options: [
      { id: "a", text: "Only darkness" },
      { id: "b", text: "Water, air and warmth" },
      { id: "c", text: "Lots of salt" },
      { id: "d", text: "Ice" }
    ],
    answerId: "b",
    explanation: "A seed wakes up and sprouts when it gets water, air and warmth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q09",
    prompt: "The blue arrows show water going up the stem to the leaves. Which part hidden under the **?** sends the water up?",
    options: [
      { id: "a", text: "The flowers" },
      { id: "b", text: "The roots" },
      { id: "c", text: "The fruits" },
      { id: "d", text: "The seeds" }
    ],
    answerId: "b",
    explanation: "Roots drink water from the soil. The stem then carries this water up to the leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A plant in soil. The part under the soil is hidden by a question mark box. Blue arrows go from the box up the stem to the leaves\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"130\"/><rect class=\"soil\" x=\"0\" y=\"130\" width=\"320\" height=\"90\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">Where does water start?</text>\n  <line class=\"stemline\" x1=\"160\" y1=\"130\" x2=\"160\" y2=\"52\"/>\n  <ellipse class=\"part\" cx=\"138\" cy=\"70\" rx=\"24\" ry=\"9\" transform=\"rotate(-25 138 70)\"/><line class=\"vein\" x1=\"116.2\" y1=\"80.1\" x2=\"159.8\" y2=\"59.9\"/><ellipse class=\"part\" cx=\"182\" cy=\"62\" rx=\"24\" ry=\"9\" transform=\"rotate(25 182 62)\"/><line class=\"vein\" x1=\"160.2\" y1=\"51.9\" x2=\"203.8\" y2=\"72.1\"/><ellipse class=\"part\" cx=\"140\" cy=\"104\" rx=\"20\" ry=\"8\" transform=\"rotate(-20 140 104)\"/><line class=\"vein\" x1=\"121.2\" y1=\"110.8\" x2=\"158.8\" y2=\"97.2\"/>\n  <line class=\"flow\" x1=\"172\" y1=\"150\" x2=\"172\" y2=\"96\"/><polyline class=\"flow\" points=\"167,101 172,94 177,101\"/>\n  <line class=\"flow\" x1=\"148\" y1=\"150\" x2=\"148\" y2=\"116\"/><polyline class=\"flow\" points=\"143,121 148,114 153,121\"/>\n  <rect class=\"dash\" x=\"120\" y=\"150\" width=\"80\" height=\"58\" rx=\"8\"/>\n  <text class=\"big\" x=\"160\" y=\"194\" text-anchor=\"middle\">?</text>\n  <text class=\"small\" x=\"230\" y=\"104\">water goes up</text>\n</svg>", "alt": "A plant in soil. The part under the soil is hidden by a question mark box. Blue arrows go from the box up the stem to the leaves"}
  },
  {
    id: "g3-sci-plants-b-q10",
    prompt: "Which part do we call the \"kitchen\" of the plant?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Seed" }
    ],
    answerId: "c",
    explanation: "Leaves cook food for the plant, so we call them the plant's kitchen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q11",
    prompt: "Look at the radish plant. The long white part we eat grows down into the soil. Which plant part is it?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "a",
    explanation: "A radish is a root. It grows deep into the soil and stores food for the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A radish plant with big green leaves above the soil and a long white part under the soil. An arrow says we eat this part\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"90\"/><rect class=\"soil\" x=\"0\" y=\"90\" width=\"320\" height=\"130\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">Radish (mooli) plant</text>\n  <ellipse class=\"part\" cx=\"132\" cy=\"58\" rx=\"30\" ry=\"11\" transform=\"rotate(-55 132 58)\"/><line class=\"vein\" x1=\"114.8\" y1=\"82.6\" x2=\"149.2\" y2=\"33.4\"/><ellipse class=\"part\" cx=\"188\" cy=\"58\" rx=\"30\" ry=\"11\" transform=\"rotate(55 188 58)\"/><line class=\"vein\" x1=\"170.8\" y1=\"33.4\" x2=\"205.2\" y2=\"82.6\"/><ellipse class=\"part\" cx=\"160\" cy=\"48\" rx=\"32\" ry=\"11\" transform=\"rotate(90 160 48)\"/><line class=\"vein\" x1=\"160.0\" y1=\"16.0\" x2=\"160.0\" y2=\"80.0\"/>\n  <path class=\"white\" d=\"M144 92 L176 92 Q178 150 160 200 Q142 150 144 92 Z\"/>\n  <path class=\"root\" d=\"M160 200 L160 212 M150 150 L138 158 M170 130 L182 124\" style=\"stroke-width:1.5\"/>\n  <line class=\"arrow\" x1=\"262\" y1=\"150\" x2=\"182\" y2=\"140\"/><polyline class=\"arrow\" points=\"189.3,146.0 182,140 190.6,136.0\"/><text class=\"small\" x=\"262\" y=\"168\" text-anchor=\"middle\">We eat this part</text>\n</svg>", "alt": "A radish plant with big green leaves above the soil and a long white part under the soil. An arrow says we eat this part"}
  },
  {
    id: "g3-sci-plants-b-q12",
    prompt: "A cabbage is cut in half. We can see many layers wrapped tightly into a ball. When we eat cabbage, which plant part are we eating?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Seed" },
      { id: "d", text: "Leaf" }
    ],
    answerId: "d",
    explanation: "A cabbage is made of many leaves wrapped tightly together. Each layer is a leaf.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A whole green cabbage and a cabbage cut in half showing many leaves wrapped in layers\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"small\" x=\"85\" y=\"30\" text-anchor=\"middle\">Whole cabbage</text>\n  <text class=\"small\" x=\"235\" y=\"30\" text-anchor=\"middle\">Cut in half</text>\n  <circle class=\"part\" cx=\"85\" cy=\"120\" r=\"58\"/>\n  <path class=\"vein\" d=\"M85 62 Q60 120 85 178 M85 62 Q110 120 85 178 M40 90 Q85 110 130 90\"/>\n  <circle class=\"part\" cx=\"235\" cy=\"120\" r=\"58\"/>\n  <circle class=\"vein\" cx=\"235\" cy=\"121.8\" r=\"46\" style=\"stroke-width:1.5\"/><circle class=\"vein\" cx=\"235\" cy=\"123.3\" r=\"36\" style=\"stroke-width:1.5\"/><circle class=\"vein\" cx=\"235\" cy=\"124.8\" r=\"26\" style=\"stroke-width:1.5\"/><circle class=\"vein\" cx=\"235\" cy=\"126.3\" r=\"16\" style=\"stroke-width:1.5\"/><circle class=\"vein\" cx=\"235\" cy=\"127.7\" r=\"7\" style=\"stroke-width:1.5\"/>\n  <text class=\"small\" x=\"160\" y=\"204\" text-anchor=\"middle\">See the layers?</text>\n</svg>", "alt": "A whole green cabbage and a cabbage cut in half showing many leaves wrapped in layers"}
  },
  {
    id: "g3-sci-plants-b-q13",
    prompt: "Ginger (adrak) grows under the soil, just like potato. Which part of the plant is it?",
    options: [
      { id: "a", text: "Stem" },
      { id: "b", text: "Leaf" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "a",
    explanation: "Ginger is a stem that grows under the soil. Like potato, new shoots can grow from it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q14",
    prompt: "Mango, banana and guava are all ______.",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "fruits" },
      { id: "c", text: "stems" },
      { id: "d", text: "leaves" }
    ],
    answerId: "b",
    explanation: "Mango, banana and guava all grow from flowers. So they are all fruits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q15",
    prompt: "Rajma and moong grow inside pods, like in the picture. Which part of the plant are they?",
    options: [
      { id: "a", text: "Roots" },
      { id: "b", text: "Leaves" },
      { id: "c", text: "Flowers" },
      { id: "d", text: "Seeds" }
    ],
    answerId: "d",
    explanation: "Rajma and moong are seeds. They grow inside pods on the plant. We cook and eat these seeds as dal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An open pod with beans inside, a bowl of red rajma beans, and a bowl of small green moong\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Pod, rajma and moong</text>\n  <path class=\"part\" d=\"M20 80 Q160 20 300 70 Q160 120 20 80 Z\" style=\"fill:#4ade80\"/>\n  <ellipse class=\"red\" cx=\"70\" cy=\"72\" rx=\"13\" ry=\"8\"/><ellipse class=\"red\" cx=\"110\" cy=\"66\" rx=\"13\" ry=\"8\"/><ellipse class=\"red\" cx=\"150\" cy=\"63\" rx=\"13\" ry=\"8\"/><ellipse class=\"red\" cx=\"190\" cy=\"63\" rx=\"13\" ry=\"8\"/><ellipse class=\"red\" cx=\"230\" cy=\"66\" rx=\"13\" ry=\"8\"/>\n  <path class=\"cream\" d=\"M40 150 Q90 200 140 150 Z\"/>\n  <ellipse class=\"red\" cx=\"66\" cy=\"146\" rx=\"8\" ry=\"5\"/><ellipse class=\"red\" cx=\"84\" cy=\"142\" rx=\"8\" ry=\"5\"/><ellipse class=\"red\" cx=\"102\" cy=\"146\" rx=\"8\" ry=\"5\"/><ellipse class=\"red\" cx=\"120\" cy=\"143\" rx=\"8\" ry=\"5\"/><ellipse class=\"red\" cx=\"76\" cy=\"154\" rx=\"8\" ry=\"5\"/><ellipse class=\"red\" cx=\"96\" cy=\"154\" rx=\"8\" ry=\"5\"/><ellipse class=\"red\" cx=\"114\" cy=\"153\" rx=\"8\" ry=\"5\"/>\n  <path class=\"cream\" d=\"M180 150 Q230 200 280 150 Z\"/>\n  <circle class=\"part\" cx=\"198\" cy=\"146\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"208\" cy=\"143\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"218\" cy=\"147\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"228\" cy=\"143\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"238\" cy=\"146\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"248\" cy=\"144\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"258\" cy=\"147\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"204\" cy=\"154\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"214\" cy=\"155\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"224\" cy=\"153\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"234\" cy=\"155\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"244\" cy=\"154\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"254\" cy=\"153\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"220\" cy=\"162\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"232\" cy=\"162\" r=\"4\" style=\"fill:#22c55e\"/><circle class=\"part\" cx=\"242\" cy=\"161\" r=\"4\" style=\"fill:#22c55e\"/>\n  <text class=\"small\" x=\"90\" y=\"196\" text-anchor=\"middle\">Rajma</text>\n  <text class=\"small\" x=\"230\" y=\"196\" text-anchor=\"middle\">Moong</text>\n</svg>", "alt": "An open pod with beans inside, a bowl of red rajma beans, and a bowl of small green moong"}
  },
  {
    id: "g3-sci-plants-b-q16",
    prompt: "Look at the tomato cut in half. It grew from a flower and has many seeds inside. So a tomato is a ______.",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "leaf" },
      { id: "c", text: "fruit" },
      { id: "d", text: "stem" }
    ],
    answerId: "c",
    explanation: "A part that grows from a flower and holds seeds is a fruit. So a tomato is a fruit!",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A whole red tomato and a tomato cut in half showing many small seeds inside\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"small\" x=\"85\" y=\"30\" text-anchor=\"middle\">Whole tomato</text>\n  <text class=\"small\" x=\"235\" y=\"30\" text-anchor=\"middle\">Cut in half</text>\n  <circle class=\"red\" cx=\"85\" cy=\"118\" r=\"54\"/>\n  <path class=\"part\" d=\"M70 66 L85 72 L100 66 L92 78 L85 74 L78 78 Z\" style=\"fill:#22c55e\"/>\n  <circle class=\"red\" cx=\"235\" cy=\"118\" r=\"54\"/>\n  <circle cx=\"235\" cy=\"118\" r=\"44\" fill=\"#fca5a5\"/>\n  <line class=\"redline\" x1=\"235\" y1=\"74\" x2=\"235\" y2=\"162\"/><line class=\"redline\" x1=\"191\" y1=\"118\" x2=\"279\" y2=\"118\"/>\n  <ellipse class=\"cream\" cx=\"214\" cy=\"98\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"222\" cy=\"104\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"254\" cy=\"98\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"248\" cy=\"106\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"214\" cy=\"138\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"224\" cy=\"132\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"254\" cy=\"136\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"246\" cy=\"130\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"208\" cy=\"110\" rx=\"4\" ry=\"2.5\"/><ellipse class=\"cream\" cx=\"262\" cy=\"128\" rx=\"4\" ry=\"2.5\"/>\n  <line class=\"arrow\" x1=\"296\" y1=\"190\" x2=\"252\" y2=\"138\"/><polyline class=\"arrow\" points=\"253.4,147.3 252,138 261.0,140.9\"/><text class=\"small\" x=\"296\" y=\"206\" text-anchor=\"middle\">seeds</text>\n</svg>", "alt": "A whole red tomato and a tomato cut in half showing many small seeds inside"}
  },
  {
    id: "g3-sci-plants-b-q17",
    prompt: "Neha keeps a plant near a window. After some days, it bends towards the window. Why?",
    options: [
      { id: "a", text: "It wants to see the rain" },
      { id: "b", text: "Its roots are looking for sand" },
      { id: "c", text: "It is running away from the wind" },
      { id: "d", text: "Its leaves need sunlight to make food" }
    ],
    answerId: "d",
    explanation: "Plants grow towards light. Their leaves need sunlight to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A potted plant on a table next to a sunny window. The stem bends towards the window\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"wall\" x=\"0\" y=\"0\" width=\"320\" height=\"220\"/>\n  <rect class=\"sky\" x=\"222\" y=\"30\" width=\"86\" height=\"110\" style=\"stroke:#6b7280;stroke-width:3\"/>\n  <line x1=\"265\" y1=\"30\" x2=\"265\" y2=\"140\" stroke=\"#6b7280\" stroke-width=\"3\"/>\n  <line class=\"arrow\" x1=\"281.0\" y1=\"72.0\" x2=\"287.0\" y2=\"72.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"276.3\" y1=\"83.3\" x2=\"280.6\" y2=\"87.6\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"265.0\" y1=\"88.0\" x2=\"265.0\" y2=\"94.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"253.7\" y1=\"83.3\" x2=\"249.4\" y2=\"87.6\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"249.0\" y1=\"72.0\" x2=\"243.0\" y2=\"72.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"253.7\" y1=\"60.7\" x2=\"249.4\" y2=\"56.4\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"265.0\" y1=\"56.0\" x2=\"265.0\" y2=\"50.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"276.3\" y1=\"60.7\" x2=\"280.6\" y2=\"56.4\" style=\"stroke:#ca8a04;stroke-width:2\"/><circle class=\"yellow\" cx=\"265\" cy=\"72\" r=\"12\"/>\n  <rect class=\"trunk\" x=\"20\" y=\"176\" width=\"200\" height=\"10\"/>\n  <path class=\"orange\" d=\"M70 176 L110 176 L104 146 L76 146 Z\"/>\n  <path class=\"stemline\" d=\"M90 146 Q92 100 150 70\"/>\n  <ellipse class=\"part\" cx=\"104\" cy=\"112\" rx=\"14\" ry=\"6\" transform=\"rotate(-50 104 112)\"/><line class=\"vein\" x1=\"95.0\" y1=\"122.7\" x2=\"113.0\" y2=\"101.3\"/><ellipse class=\"part\" cx=\"126\" cy=\"94\" rx=\"14\" ry=\"6\" transform=\"rotate(10 126 94)\"/><line class=\"vein\" x1=\"112.2\" y1=\"91.6\" x2=\"139.8\" y2=\"96.4\"/><ellipse class=\"part\" cx=\"156\" cy=\"64\" rx=\"16\" ry=\"7\" transform=\"rotate(-25 156 64)\"/><line class=\"vein\" x1=\"141.5\" y1=\"70.8\" x2=\"170.5\" y2=\"57.2\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">After some days</text>\n</svg>", "alt": "A potted plant on a table next to a sunny window. The stem bends towards the window"}
  },
  {
    id: "g3-sci-plants-b-q18",
    prompt: "A strong storm blows, but the big tree does not fall. Which part helps the most?",
    options: [
      { id: "a", text: "Its deep, strong roots" },
      { id: "b", text: "Its colourful flowers" },
      { id: "c", text: "Its sweet fruits" },
      { id: "d", text: "Its small seeds" }
    ],
    answerId: "a",
    explanation: "Deep roots hold the tree tightly in the ground, so the wind cannot knock it over.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q19",
    prompt: "Which plant part is matched with the right job?",
    options: [
      { id: "a", text: "Leaf \u2014 holds the plant in the soil" },
      { id: "b", text: "Root \u2014 makes food with sunlight" },
      { id: "c", text: "Stem \u2014 carries water to the leaves" },
      { id: "d", text: "Flower \u2014 drinks water from the soil" }
    ],
    answerId: "c",
    explanation: "The stem carries water up to the leaves. Roots hold the plant, and leaves make the food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q20",
    prompt: "This basket has carrot, beetroot and sweet potato. Which label fits the **?** tag best?",
    options: [
      { id: "a", text: "Leaves" },
      { id: "b", text: "Roots" },
      { id: "c", text: "Fruits" },
      { id: "d", text: "Flowers" }
    ],
    answerId: "b",
    explanation: "Carrot, beetroot and sweet potato are all roots. They store food under the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A basket with a carrot, a round purple beetroot and a sweet potato, and a blank tag with a question mark\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">What is this basket?</text>\n  <path class=\"orange\" d=\"M62 104 L82 92 Q112 116 128 136 Q100 126 62 104 Z\"/>\n  <path class=\"stemline\" d=\"M70 98 L58 74 M74 96 L76 70\" style=\"stroke-width:3\"/>\n  <circle class=\"purple\" cx=\"160\" cy=\"124\" r=\"22\"/><path class=\"root\" d=\"M160 146 L160 162\" style=\"stroke:#4a044e\"/><path class=\"part\" d=\"M156 102 L148 76 M164 102 L172 76\" style=\"fill:none;stroke-width:3\"/>\n  <ellipse class=\"pinkred\" cx=\"234\" cy=\"130\" rx=\"34\" ry=\"17\" transform=\"rotate(-15 234 130)\" style=\"fill:#c2410c;stroke:#7c2d12\"/>\n  <path class=\"trunk\" d=\"M40 140 L280 140 L262 206 L58 206 Z\"/>\n  <path class=\"vein\" d=\"M50 160 L272 160 M56 182 L266 182\" style=\"stroke:#5b3a10\"/>\n  <rect class=\"dash\" x=\"236\" y=\"32\" width=\"70\" height=\"34\" rx=\"6\"/><text class=\"label\" x=\"271\" y=\"55\" text-anchor=\"middle\">?</text>\n  <line class=\"leader\" x1=\"252\" y1=\"66\" x2=\"232\" y2=\"112\"/>\n</svg>", "alt": "A basket with a carrot, a round purple beetroot and a sweet potato, and a blank tag with a question mark"}
  },
  {
    id: "g3-sci-plants-b-q21",
    prompt: "An old potato is left in the kitchen. Small shoots grow from its \"eyes\". What does this tell us?",
    options: [
      { id: "a", text: "Potato is a root because it grows under the soil" },
      { id: "b", text: "Potato is a fruit because it is round" },
      { id: "c", text: "Potato is a stem because new shoots grow from its eyes" },
      { id: "d", text: "Potato is a leaf because it stores food" }
    ],
    answerId: "c",
    explanation: "The eyes on a potato are buds. Buds grow on stems, so a potato is a stem.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q22",
    prompt: "Rohan cuts off all the leaves of a small plant. What will happen to the plant?",
    options: [
      { id: "a", text: "It will grow faster" },
      { id: "b", text: "It will make more food" },
      { id: "c", text: "Its roots will make the food instead" },
      { id: "d", text: "It cannot make food and will grow weak" }
    ],
    answerId: "d",
    explanation: "Leaves make the plant's food. Without leaves, the plant gets no food and grows weak.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q23",
    prompt: "A cactus lives in the hot, dry desert. It has spines, not wide leaves. Look inside its thick green stem. How does the thick stem help it?",
    options: [
      { id: "a", text: "It makes the cactus taste sweet" },
      { id: "b", text: "It stores water for dry days" },
      { id: "c", text: "It pulls sand into the plant" },
      { id: "d", text: "It helps the cactus grow under the sea" }
    ],
    answerId: "b",
    explanation: "The desert has very little rain. The cactus keeps water in its thick stem to use later.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cactus in a hot desert under a bright sun. Its thick green stem is shown cut open with blue water drops stored inside. It has spines, not wide leaves\">\n  <style>\n    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }\n    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }\n    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }\n    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }\n    .sky { fill:#e0f2fe; stroke:none; }\n    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }\n    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }\n    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }\n    .vein { fill:none; stroke:#14532d; stroke-width:1; }\n    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }\n    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }\n    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }\n    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }\n    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }\n    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }\n    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }\n    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }\n    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }\n    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }\n    .glass { fill:none; stroke:#475569; stroke-width:2; }\n    .flow { stroke:#0369a1; stroke-width:2; fill:none; }\n    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }\n    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }\n    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"170\"/><rect class=\"sand\" x=\"0\" y=\"170\" width=\"320\" height=\"50\"/>\n  <line class=\"arrow\" x1=\"288.0\" y1=\"44.0\" x2=\"294.0\" y2=\"44.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"282.7\" y1=\"56.7\" x2=\"287.0\" y2=\"61.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"270.0\" y1=\"62.0\" x2=\"270.0\" y2=\"68.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"257.3\" y1=\"56.7\" x2=\"253.0\" y2=\"61.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"252.0\" y1=\"44.0\" x2=\"246.0\" y2=\"44.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"257.3\" y1=\"31.3\" x2=\"253.0\" y2=\"27.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"270.0\" y1=\"26.0\" x2=\"270.0\" y2=\"20.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><line class=\"arrow\" x1=\"282.7\" y1=\"31.3\" x2=\"287.0\" y2=\"27.0\" style=\"stroke:#ca8a04;stroke-width:2\"/><circle class=\"yellow\" cx=\"270\" cy=\"44\" r=\"14\"/>\n  <text class=\"label\" x=\"12\" y=\"22\">Cactus in the desert</text>\n  <path class=\"part\" d=\"M134 126 L104 126 Q92 126 92 114 L92 90 Q92 83 99 83 Q106 83 106 90 L106 112 L134 112 Z\"/>\n  <path class=\"part\" d=\"M170 112 L200 112 Q212 112 212 100 L212 78 Q212 71 205 71 Q198 71 198 78 L198 98 L170 98 Z\"/>\n  <rect class=\"part\" x=\"130\" y=\"56\" width=\"44\" height=\"120\" rx=\"22\"/>\n  <ellipse cx=\"152\" cy=\"118\" rx=\"14\" ry=\"40\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"1\"/>\n  <path class=\"water\" d=\"M148 88 Q143 96 148 99 Q153 96 148 88 Z\"/><path class=\"water\" d=\"M156 104 Q151 112 156 115 Q161 112 156 104 Z\"/><path class=\"water\" d=\"M147 120 Q142 128 147 131 Q152 128 147 120 Z\"/><path class=\"water\" d=\"M157 134 Q152 142 157 145 Q162 142 157 134 Z\"/><path class=\"water\" d=\"M150 146 Q145 154 150 157 Q155 154 150 146 Z\"/><line class=\"arrow\" x1=\"130\" y1=\"70\" x2=\"124\" y2=\"67\"/><line class=\"arrow\" x1=\"130\" y1=\"96\" x2=\"124\" y2=\"93\"/><line class=\"arrow\" x1=\"130\" y1=\"150\" x2=\"124\" y2=\"147\"/><line class=\"arrow\" x1=\"174\" y1=\"72\" x2=\"180\" y2=\"69\"/><line class=\"arrow\" x1=\"174\" y1=\"130\" x2=\"180\" y2=\"127\"/><line class=\"arrow\" x1=\"174\" y1=\"156\" x2=\"180\" y2=\"153\"/>\n  <line class=\"arrow\" x1=\"250\" y1=\"140\" x2=\"170\" y2=\"120\"/><polyline class=\"arrow\" points=\"176.5,126.8 170,120 179.0,117.1\"/><text class=\"small\" x=\"256\" y=\"158\" text-anchor=\"middle\">stored water</text>\n</svg>", "alt": "A cactus in a hot desert under a bright sun. Its thick green stem is shown cut open with blue water drops stored inside. It has spines, not wide leaves"}
  },
  {
    id: "g3-sci-plants-b-q24",
    prompt: "Meena says, \"Every plant part that grows under the soil is a root.\" Which food shows that Meena is wrong?",
    options: [
      { id: "a", text: "Potato" },
      { id: "b", text: "Carrot" },
      { id: "c", text: "Radish" },
      { id: "d", text: "Beetroot" }
    ],
    answerId: "a",
    explanation: "A potato grows under the soil, but it is a stem, not a root. Carrot, radish and beetroot really are roots.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf31",
    title: "Plant parts",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Plants have roots, stem, leaves, flowers and fruits. Each part has a job.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Roots", reveal: "Take up water and hold the plant", emoji: "\ud83e\udeb4" },
      { label: "Stem", reveal: "Carries water up", emoji: "\ud83c\udf8b" },
      { label: "Leaves", reveal: "Make food with sunlight", emoji: "\ud83c\udf43" },
      { label: "Flower & fruit", reveal: "Help make new plants", emoji: "\ud83c\udf38" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which part makes food using sunlight?",
    options: [
        { id: "a", text: "Roots" },
        { id: "b", text: "Leaves" },
        { id: "c", text: "Flower only" },
        { id: "d", text: "Bark" }
    ],
    answerId: "b",
    why: "Leaves catch sunlight to make food.",
    visual: "plant",
    speak: "Which part makes food using sunlight?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know each plant part", "Leaves make food", "Roots drink water", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g3SciencePlants: ChapterDef = {
  id: "plants-parts",
  title: "Plant Parts",
  emoji: "\ud83c\udf31",
  blurb: "Roots, stem, leaves & more",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "living-things",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "living-things",
      questions: SET_B,
    },
  ],
  paperTopics: ["living-things", "human-body"],
};

export const g3SciencePlantsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
