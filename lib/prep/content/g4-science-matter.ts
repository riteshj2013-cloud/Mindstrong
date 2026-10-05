import type { ChapterDef, PrepQuestion } from "../types";

/** Solids, Liquids and Gases - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-matter-a-q01",
    prompt: "Look at the three jars. Which jar shows a SOLID?",
    options: [
      { id: "a", text: "Jar 2" },
      { id: "b", text: "Jar 1" },
      { id: "c", text: "Jar 3" },
      { id: "d", text: "None of the jars" }
    ],
    answerId: "b",
    explanation: "Jar 1 has an ice cube. It keeps its own fixed shape and does not spread out, so it is a solid. Jar 2 has water (a liquid with a flat, level top), and Jar 3 has a gas spread all through the jar.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three jars: jar 1 holds an ice cube, jar 2 holds water with a flat level top, jar 3 has a closed lid and dots spread all through it\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"160\" y=\"30\" text-anchor=\"middle\">Look at the three jars</text>\n  <rect class=\"glass\" x=\"20\" y=\"60\" width=\"80\" height=\"100\"/>\n  <rect class=\"ice\" x=\"40\" y=\"118\" width=\"40\" height=\"40\"/>\n  <line x1=\"46\" y1=\"126\" x2=\"58\" y2=\"126\" stroke=\"#fff\" stroke-width=\"3\"/>\n  <rect class=\"glass\" x=\"120\" y=\"60\" width=\"80\" height=\"100\"/>\n  <rect class=\"water\" x=\"122\" y=\"112\" width=\"76\" height=\"46\"/>\n  <line x1=\"122\" y1=\"112\" x2=\"198\" y2=\"112\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n  <rect class=\"part\" x=\"214\" y=\"48\" width=\"92\" height=\"12\"/>\n  <rect class=\"glass\" x=\"220\" y=\"60\" width=\"80\" height=\"100\"/>\n  <circle class=\"gas\" cx=\"232\" cy=\"74\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"260\" cy=\"70\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"288\" cy=\"78\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"242\" cy=\"96\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"272\" cy=\"92\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"292\" cy=\"108\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"230\" cy=\"120\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"256\" cy=\"116\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"282\" cy=\"130\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"238\" cy=\"146\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"266\" cy=\"140\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"290\" cy=\"152\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"250\" cy=\"154\" r=\"3\"/>\n  <text class=\"label\" x=\"60\" y=\"185\" text-anchor=\"middle\">Jar 1</text>\n  <text class=\"label\" x=\"160\" y=\"185\" text-anchor=\"middle\">Jar 2</text>\n  <text class=\"label\" x=\"260\" y=\"185\" text-anchor=\"middle\">Jar 3</text>\n  <text class=\"small\" x=\"260\" y=\"205\" text-anchor=\"middle\">(closed lid)</text>\n</svg>", "alt": "Three jars: jar 1 holds an ice cube, jar 2 holds water with a flat level top, jar 3 has a closed lid and dots spread all through it"}
  },
  {
    id: "g4-sci-matter-a-q02",
    prompt: "Which of these is a liquid?",
    options: [
      { id: "a", text: "Pencil" },
      { id: "b", text: "Steam" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Brick" }
    ],
    answerId: "c",
    explanation: "Oil flows and takes the shape of the bottle it is kept in, so it is a liquid. A pencil and a brick are solids, and steam is a gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q03",
    prompt: "Which of these is a gas?",
    options: [
      { id: "a", text: "Air inside a balloon" },
      { id: "b", text: "An ice cube" },
      { id: "c", text: "Honey" },
      { id: "d", text: "A wooden spoon" }
    ],
    answerId: "a",
    explanation: "Air is a gas. It spreads out to fill the whole balloon. Honey is a liquid, and an ice cube and a spoon are solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q04",
    prompt: "Anything that takes up space and has weight is called ______.",
    options: [
      { id: "a", text: "Energy" },
      { id: "b", text: "Light" },
      { id: "c", text: "Sound" },
      { id: "d", text: "Matter" }
    ],
    answerId: "d",
    explanation: "Matter is anything that takes up space and has weight. Solids, liquids and gases are all matter. Light and sound are not matter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q05",
    prompt: "An ice cube is left on a plate on a warm day. What does it turn into?",
    options: [
      { id: "a", text: "Steam" },
      { id: "b", text: "Salt" },
      { id: "c", text: "Water" },
      { id: "d", text: "Air" }
    ],
    answerId: "c",
    explanation: "Warmth melts the ice, and it becomes liquid water. This change from solid to liquid is called melting.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q06",
    prompt: "A book lying on a table keeps its shape. This is because a book is a ______.",
    options: [
      { id: "a", text: "Solid" },
      { id: "b", text: "Liquid" },
      { id: "c", text: "Gas" },
      { id: "d", text: "Shadow" }
    ],
    answerId: "a",
    explanation: "Solids have a fixed shape. A book does not spread out or flow, so it is a solid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q07",
    prompt: "Meera pours milk from the jug into the round bowl. What shape will the milk take?",
    options: [
      { id: "a", text: "It keeps the shape of the jug" },
      { id: "b", text: "It becomes a square" },
      { id: "c", text: "It rolls into a ball" },
      { id: "d", text: "It takes the shape of the bowl" }
    ],
    answerId: "d",
    explanation: "Milk is a liquid. Liquids do not have their own shape, so the milk takes the round shape of the bowl it is poured into.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Milk is poured from a tilted jug into a round bowl\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <g transform=\"rotate(30 80 110)\">\n  <rect class=\"part\" x=\"50\" y=\"70\" width=\"60\" height=\"80\" rx=\"6\"/>\n  <polygon points=\"110,70 124,62 110,84\" class=\"part\"/>\n  <path d=\"M50,85 q-18,10 0,40\" class=\"glass\"/>\n  </g>\n  <path d=\"M128,92 Q178,94 226,138\" stroke=\"#e7e5e4\" stroke-width=\"7\" fill=\"none\"/>\n  <path d=\"M128,92 Q178,94 226,138\" stroke=\"#a8a29e\" stroke-width=\"1\" fill=\"none\"/>\n  <path class=\"part\" d=\"M170,130 A70,55 0 0 0 310,130 Z\"/>\n  <path d=\"M180,140 A60,40 0 0 0 300,140 Z\" fill=\"#fefce8\" stroke=\"#a8a29e\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"70\" y=\"190\" text-anchor=\"middle\">Jug of milk</text>\n  <text class=\"label\" x=\"240\" y=\"208\" text-anchor=\"middle\">Round bowl</text>\n</svg>", "alt": "Milk is poured from a tilted jug into a round bowl"}
  },
  {
    id: "g4-sci-matter-a-q08",
    prompt: "What goes into a balloon when you blow into it?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Air" },
      { id: "c", text: "Sand" },
      { id: "d", text: "Milk" }
    ],
    answerId: "b",
    explanation: "When we blow, air from our body goes into the balloon. The air spreads out and makes the balloon bigger.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q09",
    prompt: "A tray of water is kept in the freezer for a few hours. What does the water become?",
    options: [
      { id: "a", text: "Ice" },
      { id: "b", text: "Steam" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Air" }
    ],
    answerId: "a",
    explanation: "Strong cold turns liquid water into solid ice. This change is called freezing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q10",
    prompt: "Which group has ONLY solids?",
    options: [
      { id: "a", text: "Chair, milk, stone" },
      { id: "b", text: "Air, coin, water" },
      { id: "c", text: "Coin, chair, stone" },
      { id: "d", text: "Water, juice, oil" }
    ],
    answerId: "c",
    explanation: "A coin, a chair and a stone all have a fixed shape and size, so they are all solids. The other groups mix in liquids or gases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q11",
    prompt: "The change of a liquid into a solid by cooling is called ______.",
    options: [
      { id: "a", text: "Melting" },
      { id: "b", text: "Boiling" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Freezing" }
    ],
    answerId: "d",
    explanation: "Freezing means a liquid becomes a solid when it is cooled, like water turning into ice. Melting is the opposite change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q12",
    prompt: "Look at the picture. The wet shirt on the line becomes dry by evening. Where did the water go?",
    options: [
      { id: "a", text: "It went only into the ground" },
      { id: "b", text: "It went into the air as water vapour" },
      { id: "c", text: "It turned into cloth" },
      { id: "d", text: "It turned into ice" }
    ],
    answerId: "b",
    explanation: "The sun's heat slowly changes the water in the shirt into water vapour, a gas, which mixes with the air (the wavy lines in the picture). This is called evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Clothes on a line under the sun. In the morning the shirt is wet and dripping with wavy lines rising; in the evening the shirt is dry\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <line class=\"ray\" x1=\"60\" y1=\"36\" x2=\"67\" y2=\"36\"/>\n  <line class=\"ray\" x1=\"54\" y1=\"50\" x2=\"59\" y2=\"55\"/>\n  <line class=\"ray\" x1=\"40\" y1=\"56\" x2=\"40\" y2=\"63\"/>\n  <line class=\"ray\" x1=\"26\" y1=\"50\" x2=\"21\" y2=\"55\"/>\n  <line class=\"ray\" x1=\"20\" y1=\"36\" x2=\"13\" y2=\"36\"/>\n  <line class=\"ray\" x1=\"26\" y1=\"22\" x2=\"21\" y2=\"17\"/>\n  <line class=\"ray\" x1=\"40\" y1=\"16\" x2=\"40\" y2=\"9\"/>\n  <line class=\"ray\" x1=\"54\" y1=\"22\" x2=\"59\" y2=\"17\"/>\n  <circle class=\"sun\" cx=\"40\" cy=\"36\" r=\"16\"/>\n  <line x1=\"20\" y1=\"80\" x2=\"20\" y2=\"205\" stroke=\"#333\" stroke-width=\"3\"/>\n  <line x1=\"300\" y1=\"80\" x2=\"300\" y2=\"205\" stroke=\"#333\" stroke-width=\"3\"/>\n  <line x1=\"20\" y1=\"85\" x2=\"300\" y2=\"85\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon points=\"80,85 60,95 67,110 77,105 77,145 113,145 113,105 123,110 130,95 110,85\" fill=\"#60a5fa\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon points=\"210,85 190,95 197,110 207,105 207,145 243,145 243,105 253,110 260,95 240,85\" fill=\"#dbeafe\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"84\" y=\"80\" width=\"5\" height=\"10\" fill=\"#b45309\"/>\n  <rect x=\"101\" y=\"80\" width=\"5\" height=\"10\" fill=\"#b45309\"/>\n  <rect x=\"214\" y=\"80\" width=\"5\" height=\"10\" fill=\"#b45309\"/>\n  <rect x=\"231\" y=\"80\" width=\"5\" height=\"10\" fill=\"#b45309\"/>\n  <ellipse class=\"drop\" cx=\"85\" cy=\"158\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"100\" cy=\"166\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"110\" cy=\"156\" rx=\"3\" ry=\"4.5\"/>\n  <path class=\"arrow\" d=\"M80,78 q-6,-8 0,-17 q6,-8 0,-17\"/>\n  <path class=\"arrow\" d=\"M110,78 q-6,-8 0,-17 q6,-8 0,-17\"/>\n  <text class=\"label\" x=\"125\" y=\"52\">?</text>\n  <text class=\"label\" x=\"95\" y=\"195\" text-anchor=\"middle\">Morning: wet</text>\n  <text class=\"label\" x=\"225\" y=\"195\" text-anchor=\"middle\">Evening: dry</text>\n</svg>", "alt": "Clothes on a line under the sun. In the morning the shirt is wet and dripping with wavy lines rising; in the evening the shirt is dry"}
  },
  {
    id: "g4-sci-matter-a-q13",
    prompt: "Which of these has a fixed volume (amount) but NO fixed shape?",
    options: [
      { id: "a", text: "Brick" },
      { id: "b", text: "Water" },
      { id: "c", text: "Air" },
      { id: "d", text: "Eraser" }
    ],
    answerId: "b",
    explanation: "Water is a liquid. Its amount stays the same, but its shape changes with the container. A brick and an eraser have a fixed shape, and air has neither a fixed shape nor a fixed volume.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q14",
    prompt: "Look at the glass. Tiny water drops appear on the OUTSIDE of this glass of ice-cold water. What is this change called?",
    options: [
      { id: "a", text: "Melting" },
      { id: "b", text: "Freezing" },
      { id: "c", text: "Boiling" },
      { id: "d", text: "Condensation" }
    ],
    answerId: "d",
    explanation: "Water vapour in the air touches the cold glass, cools down and turns into tiny water drops. A gas turning into a liquid is called condensation. The drops did not leak through the glass.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A glass of ice-cold water with ice cubes inside and tiny water drops on the outside of the glass\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"160\" y=\"34\" text-anchor=\"middle\">Glass of ice-cold water</text>\n  <path class=\"water\" d=\"M112,80 L208,80 L200,178 L120,178 Z\"/>\n  <rect class=\"ice\" x=\"130\" y=\"88\" width=\"26\" height=\"26\" transform=\"rotate(15 143 101)\"/>\n  <rect class=\"ice\" x=\"166\" y=\"96\" width=\"26\" height=\"26\" transform=\"rotate(-10 179 109)\"/>\n  <path class=\"glass\" d=\"M110,55 L120,180 L200,180 L210,55\"/>\n  <ellipse class=\"drop\" cx=\"104\" cy=\"95\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"106\" cy=\"125\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"109\" cy=\"155\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"216\" cy=\"90\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"214\" cy=\"120\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"211\" cy=\"152\" rx=\"3\" ry=\"4.5\"/>\n  <line class=\"arrow\" x1=\"262\" y1=\"188\" x2=\"218\" y2=\"158\"/>\n  <text class=\"label\" x=\"310\" y=\"206\" text-anchor=\"end\">Tiny drops outside</text>\n</svg>", "alt": "A glass of ice-cold water with ice cubes inside and tiny water drops on the outside of the glass"}
  },
  {
    id: "g4-sci-matter-a-q15",
    prompt: "An incense stick is lit in one corner of the room. Soon, even the child in the far corner can smell it. Why?",
    options: [
      { id: "a", text: "The smoke and smell are gases that spread to fill the room" },
      { id: "b", text: "The incense stick is a liquid that flows" },
      { id: "c", text: "Solids move very fast across a room" },
      { id: "d", text: "The walls make the smell" }
    ],
    answerId: "a",
    explanation: "The dots in the picture show the smell spreading. Gases have no fixed shape or size. They spread out in every direction until they fill all the space they can reach.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A room with a lit incense stick in the bottom-left corner. Dots of smell spread from it to every part of the room, and a child far away smells it\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <rect class=\"part\" x=\"20\" y=\"25\" width=\"280\" height=\"170\" fill-opacity=\"0.4\"/>\n  <rect x=\"40\" y=\"178\" width=\"26\" height=\"10\" fill=\"#92400e\"/>\n  <line x1=\"53\" y1=\"178\" x2=\"60\" y2=\"140\" stroke=\"#7c2d12\" stroke-width=\"3\"/>\n  <circle cx=\"60\" cy=\"139\" r=\"3\" fill=\"#f97316\"/>\n  <path class=\"steam\" d=\"M60,135 q-6,-8 0,-15 q6,-8 0,-15\"/>\n  <circle class=\"gas\" cx=\"70\" cy=\"170\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"80\" cy=\"160\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"66\" cy=\"150\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"90\" cy=\"172\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"95\" cy=\"150\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"78\" cy=\"138\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"110\" cy=\"160\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"120\" cy=\"140\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"105\" cy=\"120\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"140\" cy=\"165\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"150\" cy=\"125\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"135\" cy=\"100\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"170\" cy=\"150\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"185\" cy=\"110\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"165\" cy=\"80\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"200\" cy=\"140\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"215\" cy=\"90\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"195\" cy=\"65\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"235\" cy=\"120\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"250\" cy=\"70\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"225\" cy=\"170\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"260\" cy=\"150\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"280\" cy=\"100\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"275\" cy=\"55\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"245\" cy=\"40\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"150\" cy=\"55\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"100\" cy=\"70\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"60\" cy=\"95\" r=\"2.5\"/>\n  <circle cx=\"268\" cy=\"168\" r=\"12\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"264\" cy=\"166\" r=\"1.5\" fill=\"#333\"/>\n  <circle cx=\"272\" cy=\"166\" r=\"1.5\" fill=\"#333\"/>\n  <path d=\"M263,173 q5,4 10,0\" class=\"glass\"/>\n  <text class=\"small\" x=\"40\" y=\"210\">Incense stick</text>\n  <text class=\"small\" x=\"300\" y=\"210\" text-anchor=\"end\">\"It smells nice!\"</text>\n</svg>", "alt": "A room with a lit incense stick in the bottom-left corner. Dots of smell spread from it to every part of the room, and a child far away smells it"}
  },
  {
    id: "g4-sci-matter-a-q16",
    prompt: "Which of these is NOT a liquid?",
    options: [
      { id: "a", text: "Honey" },
      { id: "b", text: "Coconut oil" },
      { id: "c", text: "Salt" },
      { id: "d", text: "Vinegar" }
    ],
    answerId: "c",
    explanation: "Salt is made of tiny solid crystals that keep their own shape. Honey, coconut oil and vinegar are liquids that flow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q17",
    prompt: "Water in a kettle is heated until it bubbles quickly and turns into steam. What is this called?",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Boiling" }
    ],
    answerId: "d",
    explanation: "When water is heated strongly, it bubbles and quickly turns into steam. This is called boiling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q18",
    prompt: "One cup of water is poured into tall, thin Glass P. Then the same water is poured into wide Glass Q. What happens to the amount of water?",
    options: [
      { id: "a", text: "It stays the same" },
      { id: "b", text: "It becomes more in Glass Q" },
      { id: "c", text: "It becomes less in Glass P" },
      { id: "d", text: "It disappears" }
    ],
    answerId: "a",
    explanation: "A liquid has a fixed volume. The water looks higher in the thin glass and lower in the wide glass, but only its shape changed. The amount stays one cup.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"One cup of water poured into Glass P, which is tall and thin, and Glass Q, which is wide and short\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"160\" y=\"24\" text-anchor=\"middle\">The same 1 cup of water</text>\n  <rect class=\"water\" x=\"52\" y=\"80\" width=\"46\" height=\"98\"/>\n  <line x1=\"52\" y1=\"80\" x2=\"98\" y2=\"80\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n  <path class=\"glass\" d=\"M50,40 L50,180 L100,180 L100,40\"/>\n  <rect class=\"water\" x=\"172\" y=\"139\" width=\"116\" height=\"39\"/>\n  <line x1=\"172\" y1=\"139\" x2=\"288\" y2=\"139\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n  <path class=\"glass\" d=\"M170,110 L170,180 L290,180 L290,110\"/>\n  <text class=\"label\" x=\"75\" y=\"202\" text-anchor=\"middle\">Glass P</text>\n  <text class=\"label\" x=\"230\" y=\"202\" text-anchor=\"middle\">Glass Q</text>\n</svg>", "alt": "One cup of water poured into Glass P, which is tall and thin, and Glass Q, which is wide and short"}
  },
  {
    id: "g4-sci-matter-a-q19",
    prompt: "An ice cream is left outside on a hot afternoon. What happens to it?",
    options: [
      { id: "a", text: "It becomes harder" },
      { id: "b", text: "It turns into a gas at once" },
      { id: "c", text: "It melts and becomes runny" },
      { id: "d", text: "It turns into stone" }
    ],
    answerId: "c",
    explanation: "Heat melts the solid ice cream into a liquid. That is why it drips and becomes runny.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q20",
    prompt: "We cannot see air. How can we tell that air is around us?",
    options: [
      { id: "a", text: "Air has a bright colour" },
      { id: "b", text: "We feel the wind and see leaves move" },
      { id: "c", text: "Air always smells sweet" },
      { id: "d", text: "Air is hard to touch" }
    ],
    answerId: "b",
    explanation: "Moving air is called wind. We feel it on our face and see it moving leaves, flags and kites, so we know air is there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q21",
    prompt: "Sugar can be poured from a jar like water. Why is sugar still called a solid?",
    options: [
      { id: "a", text: "Each tiny grain of sugar has its own fixed shape" },
      { id: "b", text: "Sugar tastes sweet" },
      { id: "c", text: "Sugar is white in colour" },
      { id: "d", text: "Sugar is kept in a jar" }
    ],
    answerId: "a",
    explanation: "Sugar pours because it is made of many tiny grains. Each grain keeps its own shape and size, so sugar is a solid. Taste and colour do not decide the state.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q22",
    prompt: "Riya closes the tips of two syringes and pushes each plunger, as shown. What does this show?",
    options: [
      { id: "a", text: "Water is a gas" },
      { id: "b", text: "Air cannot be pushed at all" },
      { id: "c", text: "Water takes up no space" },
      { id: "d", text: "Air can be squeezed into less space, but water cannot easily" }
    ],
    answerId: "d",
    explanation: "Gases like air can be pressed into a smaller space, so the plunger moves in. Liquids like water have a fixed volume, so they are very hard to squeeze.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two syringes with closed tips. Syringe 1 holds air and its plunger has moved in a little. Syringe 2 holds water and its plunger has hardly moved\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"60\" y=\"22\">1. Air inside: moves in a little</text>\n  <rect class=\"part\" x=\"60\" y=\"32\" width=\"180\" height=\"36\" fill-opacity=\"0.35\"/>\n  <rect class=\"part\" x=\"240\" y=\"44\" width=\"18\" height=\"12\"/>\n  <rect x=\"258\" y=\"40\" width=\"8\" height=\"20\" fill=\"#333\"/>\n  <circle class=\"gas\" cx=\"126\" cy=\"42\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"147\" cy=\"46\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"168\" cy=\"42\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"189\" cy=\"46\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"210\" cy=\"42\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"231\" cy=\"46\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"126\" cy=\"58\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"147\" cy=\"62\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"168\" cy=\"58\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"189\" cy=\"62\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"210\" cy=\"58\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"231\" cy=\"62\" r=\"2.5\"/>\n  <rect x=\"110\" y=\"34\" width=\"8\" height=\"32\" fill=\"#475569\"/>\n  <line x1=\"34\" y1=\"50\" x2=\"110\" y2=\"50\" stroke=\"#475569\" stroke-width=\"4\"/>\n  <rect x=\"28\" y=\"28\" width=\"8\" height=\"44\" fill=\"#475569\"/>\n  <line class=\"arrow\" x1=\"4\" y1=\"50\" x2=\"25\" y2=\"50\"/>\n  <text class=\"label\" x=\"60\" y=\"122\">2. Water inside: hardly moves</text>\n  <rect class=\"part\" x=\"60\" y=\"132\" width=\"180\" height=\"36\" fill-opacity=\"0.35\"/>\n  <rect class=\"part\" x=\"240\" y=\"144\" width=\"18\" height=\"12\"/>\n  <rect x=\"258\" y=\"140\" width=\"8\" height=\"20\" fill=\"#333\"/>\n  <rect class=\"water\" x=\"74\" y=\"134\" width=\"164\" height=\"32\"/>\n  <rect x=\"66\" y=\"134\" width=\"8\" height=\"32\" fill=\"#475569\"/>\n  <line x1=\"34\" y1=\"150\" x2=\"66\" y2=\"150\" stroke=\"#475569\" stroke-width=\"4\"/>\n  <rect x=\"28\" y=\"128\" width=\"8\" height=\"44\" fill=\"#475569\"/>\n  <line class=\"arrow\" x1=\"4\" y1=\"150\" x2=\"25\" y2=\"150\"/>\n  <text class=\"small\" x=\"4\" y=\"100\">Push</text>\n  <text class=\"small\" x=\"4\" y=\"200\">Push</text>\n  <text class=\"small\" x=\"300\" y=\"210\" text-anchor=\"end\">Both tips are closed</text>\n</svg>", "alt": "Two syringes with closed tips. Syringe 1 holds air and its plunger has moved in a little. Syringe 2 holds water and its plunger has hardly moved"}
  },
  {
    id: "g4-sci-matter-a-q23",
    prompt: "Look at the flowchart. Which two changes happen at arrow 1 and arrow 2, in order?",
    options: [
      { id: "a", text: "Freezing, then condensation" },
      { id: "b", text: "Melting, then evaporation" },
      { id: "c", text: "Boiling, then melting" },
      { id: "d", text: "Condensation, then freezing" }
    ],
    answerId: "b",
    explanation: "Arrow 1: solid ice to liquid water is melting. Arrow 2: liquid water to water vapour is evaporation (or boiling when heated strongly).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Flowchart: ice, then arrow 1, then water, then arrow 2, then water vapour, while heat is given\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"160\" y=\"30\" text-anchor=\"middle\">Heat is given at each step</text>\n  <rect class=\"part\" x=\"10\" y=\"60\" width=\"80\" height=\"90\" rx=\"8\" fill-opacity=\"0.4\"/>\n  <rect class=\"ice\" x=\"30\" y=\"85\" width=\"40\" height=\"40\"/>\n  <line x1=\"36\" y1=\"93\" x2=\"48\" y2=\"93\" stroke=\"#fff\" stroke-width=\"3\"/>\n  <rect class=\"part\" x=\"120\" y=\"60\" width=\"80\" height=\"90\" rx=\"8\" fill-opacity=\"0.4\"/>\n  <rect class=\"water\" x=\"137\" y=\"102\" width=\"46\" height=\"36\"/>\n  <path class=\"glass\" d=\"M135,80 L135,140 L185,140 L185,80\"/>\n  <rect class=\"part\" x=\"230\" y=\"60\" width=\"80\" height=\"90\" rx=\"8\" fill-opacity=\"0.4\"/>\n  <path class=\"steam\" d=\"M252,135 q-6,-12 0,-25 q6,-12 0,-25\"/>\n  <path class=\"steam\" d=\"M270,135 q-6,-12 0,-25 q6,-12 0,-25\"/>\n  <path class=\"steam\" d=\"M288,135 q-6,-12 0,-25 q6,-12 0,-25\"/>\n  <circle class=\"gas\" cx=\"258\" cy=\"95\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"280\" cy=\"82\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"266\" cy=\"112\" r=\"2.5\"/>\n  <circle class=\"gas\" cx=\"292\" cy=\"104\" r=\"2.5\"/>\n  <line class=\"arrow\" x1=\"92\" y1=\"105\" x2=\"117\" y2=\"105\"/>\n  <line class=\"arrow\" x1=\"202\" y1=\"105\" x2=\"227\" y2=\"105\"/>\n  <text class=\"label\" x=\"104\" y=\"96\" text-anchor=\"middle\">1</text>\n  <text class=\"label\" x=\"214\" y=\"96\" text-anchor=\"middle\">2</text>\n  <text class=\"label\" x=\"50\" y=\"172\" text-anchor=\"middle\">Ice</text>\n  <text class=\"label\" x=\"160\" y=\"172\" text-anchor=\"middle\">Water</text>\n  <text class=\"label\" x=\"270\" y=\"172\" text-anchor=\"middle\">Water vapour</text>\n</svg>", "alt": "Flowchart: ice, then arrow 1, then water, then arrow 2, then water vapour, while heat is given"}
  },
  {
    id: "g4-sci-matter-a-q24",
    prompt: "Look at the four pictures of the same puddle. In which picture will the puddle dry up the fastest?",
    options: [
      { id: "a", text: "Picture A: a cold, cloudy, still day" },
      { id: "b", text: "Picture B: a rainy day" },
      { id: "c", text: "Picture C: a hot, sunny, windy day" },
      { id: "d", text: "Picture D: a cold night" }
    ],
    answerId: "c",
    explanation: "Heat from the sun and moving air (wind) both help water evaporate faster. So the puddle in Picture C dries quickest. Rain adds more water, and cold, still air makes drying slow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four pictures of the same puddle: A cold cloudy still day, B rainy day, C hot sunny windy day, D cold night\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <rect class=\"part\" x=\"5\" y=\"5\" width=\"150\" height=\"100\" rx=\"6\" fill-opacity=\"0.3\"/>\n  <g fill=\"#cbd5e1\" stroke=\"#333\" stroke-width=\"1.5\"><circle cx=\"66\" cy=\"36\" r=\"11\"/><circle cx=\"94\" cy=\"36\" r=\"11\"/><circle cx=\"80\" cy=\"28\" r=\"14\"/></g>\n  <ellipse class=\"water\" cx=\"80\" cy=\"73\" rx=\"40\" ry=\"9\"/>\n  <text class=\"small\" x=\"80\" y=\"98\" text-anchor=\"middle\">A: cold, cloudy, still</text>\n  <rect class=\"part\" x=\"165\" y=\"5\" width=\"150\" height=\"100\" rx=\"6\" fill-opacity=\"0.3\"/>\n  <g fill=\"#94a3b8\" stroke=\"#333\" stroke-width=\"1.5\"><circle cx=\"229\" cy=\"26\" r=\"11\"/><circle cx=\"257\" cy=\"26\" r=\"11\"/><circle cx=\"243\" cy=\"18\" r=\"14\"/></g>\n  <line x1=\"225\" y1=\"40\" x2=\"221\" y2=\"52\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <line x1=\"237\" y1=\"40\" x2=\"233\" y2=\"52\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <line x1=\"249\" y1=\"40\" x2=\"245\" y2=\"52\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <line x1=\"261\" y1=\"40\" x2=\"257\" y2=\"52\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n  <ellipse class=\"water\" cx=\"240\" cy=\"73\" rx=\"40\" ry=\"9\"/>\n  <text class=\"small\" x=\"240\" y=\"98\" text-anchor=\"middle\">B: rainy</text>\n  <rect class=\"part\" x=\"5\" y=\"115\" width=\"150\" height=\"100\" rx=\"6\" fill-opacity=\"0.3\"/>\n  <line class=\"ray\" x1=\"116\" y1=\"145\" x2=\"123\" y2=\"145\"/>\n  <line class=\"ray\" x1=\"111\" y1=\"156\" x2=\"116\" y2=\"161\"/>\n  <line class=\"ray\" x1=\"100\" y1=\"161\" x2=\"100\" y2=\"168\"/>\n  <line class=\"ray\" x1=\"89\" y1=\"156\" x2=\"84\" y2=\"161\"/>\n  <line class=\"ray\" x1=\"84\" y1=\"145\" x2=\"77\" y2=\"145\"/>\n  <line class=\"ray\" x1=\"89\" y1=\"134\" x2=\"84\" y2=\"129\"/>\n  <line class=\"ray\" x1=\"100\" y1=\"129\" x2=\"100\" y2=\"122\"/>\n  <line class=\"ray\" x1=\"111\" y1=\"134\" x2=\"116\" y2=\"129\"/>\n  <circle class=\"sun\" cx=\"100\" cy=\"145\" r=\"12\"/>\n  <path d=\"M20,138 q10,-5 20,0 t20,0\" class=\"steam\"/>\n  <path d=\"M20,150 q10,-5 20,0 t20,0\" class=\"steam\"/>\n  <path d=\"M20,162 q10,-5 20,0 t20,0\" class=\"steam\"/>\n  <ellipse class=\"water\" cx=\"80\" cy=\"183\" rx=\"40\" ry=\"9\"/>\n  <text class=\"small\" x=\"80\" y=\"208\" text-anchor=\"middle\">C: hot, sunny, windy</text>\n  <rect class=\"part\" x=\"165\" y=\"115\" width=\"150\" height=\"100\" rx=\"6\" fill-opacity=\"0.3\"/>\n  <path d=\"M248,128 a15,15 0 1 0 12,24 a12,12 0 1 1 -12,-24 z\" fill=\"#fef9c3\" stroke=\"#333\" stroke-width=\"1.5\"/><circle cx=\"210\" cy=\"132\" r=\"2\" fill=\"#333\"/><circle cx=\"290\" cy=\"138\" r=\"2\" fill=\"#333\"/><circle cx=\"280\" cy=\"126\" r=\"1.5\" fill=\"#333\"/>\n  <ellipse class=\"water\" cx=\"240\" cy=\"183\" rx=\"40\" ry=\"9\"/>\n  <text class=\"small\" x=\"240\" y=\"208\" text-anchor=\"middle\">D: cold night</text>\n</svg>", "alt": "Four pictures of the same puddle: A cold cloudy still day, B rainy day, C hot sunny windy day, D cold night"}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-matter-b-q01",
    prompt: "Which of these is a liquid?",
    options: [
      { id: "a", text: "Rock" },
      { id: "b", text: "Smoke" },
      { id: "c", text: "Milk" },
      { id: "d", text: "Spoon" }
    ],
    answerId: "c",
    explanation: "Milk flows and takes the shape of its glass, so it is a liquid. A rock and a spoon are solids, and smoke is mostly gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q02",
    prompt: "Look at the three jars. Which jar has something that keeps its OWN shape in any container?",
    options: [
      { id: "a", text: "Jar X" },
      { id: "b", text: "Jar Y" },
      { id: "c", text: "Jar Z" },
      { id: "d", text: "Jars Y and Z" }
    ],
    answerId: "a",
    explanation: "Jar X holds a marble. A marble is a solid, so it stays round wherever you put it. The juice in Jar Y takes the shape of the jar, and the gas in Jar Z spreads to fill the whole jar.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three jars: jar X holds a glass marble, jar Y holds juice with a flat level top, jar Z has a closed lid and dots spread all through it\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"160\" y=\"30\" text-anchor=\"middle\">Look at the three jars</text>\n  <rect class=\"glass\" x=\"20\" y=\"60\" width=\"80\" height=\"100\"/>\n  <circle cx=\"60\" cy=\"140\" r=\"18\" fill=\"#a7f3d0\" stroke=\"#065f46\" stroke-width=\"2\"/>\n  <circle cx=\"54\" cy=\"134\" r=\"4\" fill=\"#fff\"/>\n  <rect class=\"glass\" x=\"120\" y=\"60\" width=\"80\" height=\"100\"/>\n  <rect x=\"122\" y=\"112\" width=\"76\" height=\"46\" fill=\"#fb923c\" fill-opacity=\"0.8\"/>\n  <line x1=\"122\" y1=\"112\" x2=\"198\" y2=\"112\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n  <rect class=\"part\" x=\"214\" y=\"48\" width=\"92\" height=\"12\"/>\n  <rect class=\"glass\" x=\"220\" y=\"60\" width=\"80\" height=\"100\"/>\n  <circle class=\"gas\" cx=\"232\" cy=\"74\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"260\" cy=\"70\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"288\" cy=\"78\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"242\" cy=\"96\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"272\" cy=\"92\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"292\" cy=\"108\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"230\" cy=\"120\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"256\" cy=\"116\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"282\" cy=\"130\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"238\" cy=\"146\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"266\" cy=\"140\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"290\" cy=\"152\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"250\" cy=\"154\" r=\"3\"/>\n  <text class=\"label\" x=\"60\" y=\"185\" text-anchor=\"middle\">Jar X</text>\n  <text class=\"label\" x=\"160\" y=\"185\" text-anchor=\"middle\">Jar Y</text>\n  <text class=\"label\" x=\"260\" y=\"185\" text-anchor=\"middle\">Jar Z</text>\n  <text class=\"small\" x=\"260\" y=\"205\" text-anchor=\"middle\">(closed lid)</text>\n</svg>", "alt": "Three jars: jar X holds a glass marble, jar Y holds juice with a flat level top, jar Z has a closed lid and dots spread all through it"}
  },
  {
    id: "g4-sci-matter-b-q03",
    prompt: "A football is pumped up until it is firm. What is inside it?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Sand" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Air" }
    ],
    answerId: "d",
    explanation: "A football is filled with air. The air spreads out and fills the whole inside of the ball.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q04",
    prompt: "What are the three states of matter?",
    options: [
      { id: "a", text: "Hot, cold and warm" },
      { id: "b", text: "Solid, liquid and gas" },
      { id: "c", text: "Red, blue and green" },
      { id: "d", text: "Big, small and tiny" }
    ],
    answerId: "b",
    explanation: "Matter is found in three states: solid, liquid and gas. For example, ice, water and water vapour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q05",
    prompt: "Water vapour rising from a pot of hot water is a ______.",
    options: [
      { id: "a", text: "Gas" },
      { id: "b", text: "Solid" },
      { id: "c", text: "Liquid" },
      { id: "d", text: "Metal" }
    ],
    answerId: "a",
    explanation: "When water is heated, it changes into water vapour, which is a gas. It rises and spreads into the air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q06",
    prompt: "Which of these is a solid?",
    options: [
      { id: "a", text: "Coconut water" },
      { id: "b", text: "Air" },
      { id: "c", text: "Rain water" },
      { id: "d", text: "An ice cube" }
    ],
    answerId: "d",
    explanation: "An ice cube has a fixed shape and size, so it is a solid. It is frozen water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q07",
    prompt: "A glass of water spills on the floor. What does the water do?",
    options: [
      { id: "a", text: "It stands up tall like a tower" },
      { id: "b", text: "It stays in the shape of a cube" },
      { id: "c", text: "It spreads out and flows" },
      { id: "d", text: "It floats up in the air" }
    ],
    answerId: "c",
    explanation: "Water is a liquid, and liquids flow. Without a container, it spreads out over the floor.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q08",
    prompt: "Which of these can flow?",
    options: [
      { id: "a", text: "Brick" },
      { id: "b", text: "Honey" },
      { id: "c", text: "Pencil" },
      { id: "d", text: "Plate" }
    ],
    answerId: "b",
    explanation: "Honey is a liquid, so it can flow, even if it flows slowly. A brick, a pencil and a plate are solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q09",
    prompt: "The ice cube is warmed and turns into water. What is the change at the arrow marked \"?\" called?",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Condensation" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Melting" }
    ],
    answerId: "d",
    explanation: "Melting happens when a solid is warmed and becomes a liquid, like ice turning into water. Freezing is the opposite change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An ice cube on a plate is warmed by the sun. An arrow marked with a question mark leads to a puddle of water on the plate\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <line class=\"ray\" x1=\"178\" y1=\"40\" x2=\"185\" y2=\"40\"/>\n  <line class=\"ray\" x1=\"173\" y1=\"53\" x2=\"178\" y2=\"58\"/>\n  <line class=\"ray\" x1=\"160\" y1=\"58\" x2=\"160\" y2=\"65\"/>\n  <line class=\"ray\" x1=\"147\" y1=\"53\" x2=\"142\" y2=\"58\"/>\n  <line class=\"ray\" x1=\"142\" y1=\"40\" x2=\"135\" y2=\"40\"/>\n  <line class=\"ray\" x1=\"147\" y1=\"27\" x2=\"142\" y2=\"22\"/>\n  <line class=\"ray\" x1=\"160\" y1=\"22\" x2=\"160\" y2=\"15\"/>\n  <line class=\"ray\" x1=\"173\" y1=\"27\" x2=\"178\" y2=\"22\"/>\n  <circle class=\"sun\" cx=\"160\" cy=\"40\" r=\"14\"/>\n  <ellipse class=\"part\" cx=\"60\" cy=\"160\" rx=\"48\" ry=\"10\"/>\n  <rect class=\"ice\" x=\"38\" y=\"112\" width=\"44\" height=\"44\"/>\n  <line x1=\"44\" y1=\"120\" x2=\"58\" y2=\"120\" stroke=\"#fff\" stroke-width=\"3\"/>\n  <line class=\"arrow\" x1=\"118\" y1=\"135\" x2=\"198\" y2=\"135\"/>\n  <text class=\"label\" x=\"158\" y=\"126\" text-anchor=\"middle\">?</text>\n  <ellipse class=\"part\" cx=\"260\" cy=\"160\" rx=\"48\" ry=\"10\"/>\n  <ellipse class=\"water\" cx=\"260\" cy=\"157\" rx=\"36\" ry=\"6\"/>\n  <text class=\"label\" x=\"60\" y=\"198\" text-anchor=\"middle\">Solid ice</text>\n  <text class=\"label\" x=\"260\" y=\"198\" text-anchor=\"middle\">Liquid water</text>\n</svg>", "alt": "An ice cube on a plate is warmed by the sun. An arrow marked with a question mark leads to a puddle of water on the plate"}
  },
  {
    id: "g4-sci-matter-b-q10",
    prompt: "Which of these must be kept in a tightly closed container so it does not escape into the air?",
    options: [
      { id: "a", text: "Cooking gas in a cylinder" },
      { id: "b", text: "A stone" },
      { id: "c", text: "A book" },
      { id: "d", text: "A toy car" }
    ],
    answerId: "a",
    explanation: "Gases spread out in all directions, so they must be kept in closed containers. Solids like a stone, book or toy car stay where they are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q11",
    prompt: "Which pair has a FIXED volume (amount of space taken up)?",
    options: [
      { id: "a", text: "Air and steam" },
      { id: "b", text: "Stone and water" },
      { id: "c", text: "Smoke and air" },
      { id: "d", text: "Steam and smoke" }
    ],
    answerId: "b",
    explanation: "Solids like a stone and liquids like water both have a fixed volume. Gases like air and steam spread to fill any space, so their volume is not fixed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q12",
    prompt: "After a hot bath, the bathroom mirror becomes foggy, as shown. Why?",
    options: [
      { id: "a", text: "The mirror melts" },
      { id: "b", text: "Ice forms on the mirror" },
      { id: "c", text: "Water vapour cools on the mirror and turns into tiny drops" },
      { id: "d", text: "Soap jumps onto the mirror" }
    ],
    answerId: "c",
    explanation: "Warm water vapour from the bath rises and touches the cooler mirror. It changes into tiny water drops, which make the mirror look foggy. This is condensation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A bucket of hot bath water with steam rising toward a bathroom mirror. The mirror is covered with tiny drops and looks foggy\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <path class=\"part\" d=\"M30,150 L40,200 L120,200 L130,150 Z\"/>\n  <rect class=\"water\" x=\"34\" y=\"152\" width=\"92\" height=\"10\"/>\n  <path class=\"steam\" d=\"M55,145 q-6,-10 0,-20 q6,-10 0,-20\"/>\n  <path class=\"steam\" d=\"M80,145 q-6,-10 0,-20 q6,-10 0,-20\"/>\n  <path class=\"steam\" d=\"M105,145 q-6,-10 0,-20 q6,-10 0,-20\"/>\n  <line class=\"arrow\" x1=\"130\" y1=\"100\" x2=\"180\" y2=\"100\"/>\n  <rect x=\"180\" y=\"30\" width=\"110\" height=\"140\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#333\" stroke-width=\"3\"/>\n  <circle class=\"drop\" cx=\"196\" cy=\"50\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"214\" cy=\"62\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"232\" cy=\"48\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"250\" cy=\"60\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"268\" cy=\"52\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"204\" cy=\"80\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"224\" cy=\"92\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"244\" cy=\"78\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"262\" cy=\"94\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"198\" cy=\"110\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"216\" cy=\"124\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"236\" cy=\"112\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"256\" cy=\"126\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"272\" cy=\"108\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"206\" cy=\"146\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"228\" cy=\"152\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"250\" cy=\"142\" r=\"2\"/>\n  <circle class=\"drop\" cx=\"268\" cy=\"150\" r=\"2\"/>\n  <text class=\"small\" x=\"80\" y=\"214\" text-anchor=\"middle\">Hot bath water</text>\n  <text class=\"small\" x=\"235\" y=\"190\" text-anchor=\"middle\">Foggy mirror</text>\n</svg>", "alt": "A bucket of hot bath water with steam rising toward a bathroom mirror. The mirror is covered with tiny drops and looks foggy"}
  },
  {
    id: "g4-sci-matter-b-q13",
    prompt: "Melted wax drips down a candle and becomes hard again as it cools. What is this hardening called?",
    options: [
      { id: "a", text: "Freezing (becoming solid)" },
      { id: "b", text: "Boiling" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Melting" }
    ],
    answerId: "a",
    explanation: "When a liquid cools and becomes a solid, it is called freezing or solidifying. Liquid wax turns back into solid wax.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q14",
    prompt: "Air is blown into a round balloon and a long balloon. In each one, the air takes the shape of the balloon. Why?",
    options: [
      { id: "a", text: "Air is a solid" },
      { id: "b", text: "Air has its own fixed shape" },
      { id: "c", text: "Air spreads out to fill all the space inside the balloon" },
      { id: "d", text: "Air is a heavy liquid" }
    ],
    answerId: "c",
    explanation: "Air is a gas. Gases have no fixed shape, so the air spreads out to fill whatever container it is in, round or long.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A round balloon and a long balloon, both filled with air shown as dots spread evenly inside\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <ellipse class=\"part\" cx=\"85\" cy=\"90\" rx=\"55\" ry=\"60\" fill-opacity=\"0.5\"/>\n  <polygon points=\"80,150 90,150 85,158\" fill=\"#333\"/>\n  <path d=\"M85,158 q-8,8 0,16 q8,8 0,14\" class=\"glass\"/>\n  <circle class=\"gas\" cx=\"60\" cy=\"60\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"85\" cy=\"48\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"110\" cy=\"62\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"50\" cy=\"90\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"75\" cy=\"80\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"100\" cy=\"88\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"122\" cy=\"96\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"62\" cy=\"118\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"88\" cy=\"112\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"112\" cy=\"124\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"80\" cy=\"138\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"70\" cy=\"100\" r=\"3\"/>\n  <rect class=\"part\" x=\"170\" y=\"70\" width=\"135\" height=\"44\" rx=\"22\" fill-opacity=\"0.5\"/>\n  <polygon points=\"170,88 170,96 162,92\" fill=\"#333\"/>\n  <path d=\"M162,92 q-10,15 0,30 q10,15 0,30\" class=\"glass\"/>\n  <circle class=\"gas\" cx=\"190\" cy=\"82\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"210\" cy=\"100\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"230\" cy=\"82\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"250\" cy=\"100\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"270\" cy=\"84\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"290\" cy=\"98\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"200\" cy=\"98\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"240\" cy=\"92\" r=\"3\"/>\n  <circle class=\"gas\" cx=\"282\" cy=\"82\" r=\"3\"/>\n  <text class=\"label\" x=\"85\" y=\"208\" text-anchor=\"middle\">Round balloon</text>\n  <text class=\"label\" x=\"237\" y=\"208\" text-anchor=\"middle\">Long balloon</text>\n</svg>", "alt": "A round balloon and a long balloon, both filled with air shown as dots spread evenly inside"}
  },
  {
    id: "g4-sci-matter-b-q15",
    prompt: "Which of these will melt quickly if you hold it in your warm hand?",
    options: [
      { id: "a", text: "Iron nail" },
      { id: "b", text: "Stone" },
      { id: "c", text: "Glass marble" },
      { id: "d", text: "A piece of chocolate" }
    ],
    answerId: "d",
    explanation: "Chocolate melts at a low temperature, so even the warmth of your hand can melt it. A nail, stone and marble need much more heat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q16",
    prompt: "Ravi pours a full cup of juice onto a plate, as shown. What changes?",
    options: [
      { id: "a", text: "The amount of juice" },
      { id: "b", text: "Only the shape of the juice" },
      { id: "c", text: "The colour of the juice" },
      { id: "d", text: "The taste of the juice" }
    ],
    answerId: "b",
    explanation: "A liquid takes the shape of its container. On the plate the juice spreads flat, but its amount, colour and taste stay the same. Only the shape changes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Before: a cup full of juice. Arrow. After: the same juice spread flat on a plate\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"70\" y=\"40\" text-anchor=\"middle\">Before</text>\n  <text class=\"label\" x=\"240\" y=\"40\" text-anchor=\"middle\">After</text>\n  <rect x=\"42\" y=\"78\" width=\"56\" height=\"70\" fill=\"#fb923c\" fill-opacity=\"0.85\"/>\n  <path class=\"glass\" d=\"M40,70 L40,150 L100,150 L100,70\"/>\n  <path d=\"M100,90 q22,10 0,40\" class=\"glass\"/>\n  <line class=\"arrow\" x1=\"125\" y1=\"115\" x2=\"170\" y2=\"115\"/>\n  <text class=\"small\" x=\"147\" y=\"105\" text-anchor=\"middle\">pour</text>\n  <ellipse class=\"part\" cx=\"240\" cy=\"140\" rx=\"70\" ry=\"16\"/>\n  <ellipse cx=\"240\" cy=\"138\" rx=\"55\" ry=\"10\" fill=\"#fb923c\" fill-opacity=\"0.85\"/>\n  <text class=\"label\" x=\"70\" y=\"185\" text-anchor=\"middle\">Cup of juice</text>\n  <text class=\"label\" x=\"240\" y=\"185\" text-anchor=\"middle\">Juice on a plate</text>\n</svg>", "alt": "Before: a cup full of juice. Arrow. After: the same juice spread flat on a plate"}
  },
  {
    id: "g4-sci-matter-b-q17",
    prompt: "A dish of water is kept near a sunny window. By Day 4, the water is gone. What is this change called?",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Evaporation" }
    ],
    answerId: "d",
    explanation: "The sun's warmth slowly changes the water into water vapour, which goes into the air. This change from liquid to gas is called evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A dish full of water near a sunny window on Day 1, and the same dish empty on Day 4\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <rect class=\"part\" x=\"125\" y=\"15\" width=\"70\" height=\"60\" fill-opacity=\"0.4\"/>\n  <line x1=\"160\" y1=\"15\" x2=\"160\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"125\" y1=\"45\" x2=\"195\" y2=\"45\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"ray\" x1=\"174\" y1=\"45\" x2=\"181\" y2=\"45\"/>\n  <line class=\"ray\" x1=\"170\" y1=\"55\" x2=\"175\" y2=\"60\"/>\n  <line class=\"ray\" x1=\"160\" y1=\"59\" x2=\"160\" y2=\"66\"/>\n  <line class=\"ray\" x1=\"150\" y1=\"55\" x2=\"145\" y2=\"60\"/>\n  <line class=\"ray\" x1=\"146\" y1=\"45\" x2=\"139\" y2=\"45\"/>\n  <line class=\"ray\" x1=\"150\" y1=\"35\" x2=\"145\" y2=\"30\"/>\n  <line class=\"ray\" x1=\"160\" y1=\"31\" x2=\"160\" y2=\"24\"/>\n  <line class=\"ray\" x1=\"170\" y1=\"35\" x2=\"175\" y2=\"30\"/>\n  <circle class=\"sun\" cx=\"160\" cy=\"45\" r=\"10\"/>\n  <text class=\"label\" x=\"75\" y=\"105\" text-anchor=\"middle\">Day 1</text>\n  <text class=\"label\" x=\"245\" y=\"105\" text-anchor=\"middle\">Day 4</text>\n  <path class=\"water\" d=\"M27,136 L123,136 L116,158 L34,158 Z\"/>\n  <path class=\"glass\" d=\"M25,130 L35,160 L115,160 L125,130\"/>\n  <path class=\"part\" d=\"M195,130 L205,160 L285,160 L295,130 Z\"/>\n  <line class=\"arrow\" x1=\"138\" y1=\"145\" x2=\"182\" y2=\"145\"/>\n  <text class=\"label\" x=\"75\" y=\"190\" text-anchor=\"middle\">Full of water</text>\n  <text class=\"label\" x=\"245\" y=\"190\" text-anchor=\"middle\">Empty</text>\n</svg>", "alt": "A dish full of water near a sunny window on Day 1, and the same dish empty on Day 4"}
  },
  {
    id: "g4-sci-matter-b-q18",
    prompt: "Find the odd one out.",
    options: [
      { id: "a", text: "Wooden block" },
      { id: "b", text: "Milk" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Vinegar" }
    ],
    answerId: "a",
    explanation: "A wooden block is a solid. Milk, oil and vinegar are all liquids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q19",
    prompt: "Water vapour rises high into the sky and cools down. What does it form?",
    options: [
      { id: "a", text: "Sand" },
      { id: "b", text: "Stones" },
      { id: "c", text: "Clouds made of tiny water drops" },
      { id: "d", text: "Ice cream" }
    ],
    answerId: "c",
    explanation: "High up, the air is cold. Water vapour cools and condenses into tiny water drops that together make clouds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q20",
    prompt: "Why does a bicycle tyre become firm when we pump more air into it?",
    options: [
      { id: "a", text: "The air turns into a solid" },
      { id: "b", text: "More air is squeezed into the same space" },
      { id: "c", text: "The air turns into water" },
      { id: "d", text: "The tyre melts and grows" }
    ],
    answerId: "b",
    explanation: "Air is a gas and can be pressed into a smaller space. Pumping pushes more and more air into the tyre, which makes it firm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q21",
    prompt: "Which statement is TRUE?",
    options: [
      { id: "a", text: "Liquids have a fixed shape" },
      { id: "b", text: "Gases have a fixed volume" },
      { id: "c", text: "Solids take the shape of their container" },
      { id: "d", text: "Liquids have a fixed volume but take the shape of their container" }
    ],
    answerId: "d",
    explanation: "Liquids keep the same amount but change shape to fit their container. Solids keep their own shape, and gases have neither a fixed shape nor a fixed volume.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q22",
    prompt: "Look at the two pictures of the same glass. Which two changes happened?",
    options: [
      { id: "a", text: "Melting of the ice and condensation on the glass" },
      { id: "b", text: "Boiling and freezing" },
      { id: "c", text: "Evaporation and freezing" },
      { id: "d", text: "Melting and boiling" }
    ],
    answerId: "a",
    explanation: "The ice melted into water inside the glass. Water vapour in the air cooled on the cold glass and condensed into drops outside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Start: a dry glass with ice cubes. After 20 minutes: the ice is gone, the glass holds water and has drops on the outside\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <text class=\"label\" x=\"80\" y=\"30\" text-anchor=\"middle\">Start</text>\n  <text class=\"label\" x=\"240\" y=\"30\" text-anchor=\"middle\">After 20 minutes</text>\n  <rect class=\"ice\" x=\"55\" y=\"120\" width=\"26\" height=\"26\" transform=\"rotate(12 68 133)\"/>\n  <rect class=\"ice\" x=\"82\" y=\"128\" width=\"24\" height=\"24\" transform=\"rotate(-8 94 140)\"/>\n  <rect class=\"ice\" x=\"66\" y=\"96\" width=\"24\" height=\"24\" transform=\"rotate(20 78 108)\"/>\n  <path class=\"glass\" d=\"M40,60 L50,170 L110,170 L120,60\"/>\n  <line class=\"arrow\" x1=\"135\" y1=\"115\" x2=\"180\" y2=\"115\"/>\n  <path class=\"water\" d=\"M204,120 L276,120 L271,168 L209,168 Z\"/>\n  <path class=\"glass\" d=\"M200,60 L210,170 L270,170 L280,60\"/>\n  <ellipse class=\"drop\" cx=\"195\" cy=\"90\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"198\" cy=\"125\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"202\" cy=\"155\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"286\" cy=\"95\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"282\" cy=\"130\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"279\" cy=\"160\" rx=\"3\" ry=\"4.5\"/>\n  <text class=\"small\" x=\"80\" y=\"195\" text-anchor=\"middle\">Glass is dry outside</text>\n  <text class=\"small\" x=\"240\" y=\"195\" text-anchor=\"middle\">Drops outside the glass</text>\n</svg>", "alt": "Start: a dry glass with ice cubes. After 20 minutes: the ice is gone, the glass holds water and has drops on the outside"}
  },
  {
    id: "g4-sci-matter-b-q23",
    prompt: "Meena covers a pot of boiling water with a lid. When she lifts the lid, she sees water drops under it, as shown. What is the correct order of changes?",
    options: [
      { id: "a", text: "Water \u2192 ice \u2192 water" },
      { id: "b", text: "Water \u2192 steam \u2192 ice" },
      { id: "c", text: "Water \u2192 water vapour \u2192 water drops" },
      { id: "d", text: "Steam \u2192 ice \u2192 water" }
    ],
    answerId: "c",
    explanation: "Boiling turns water into water vapour (steam). The vapour rises, touches the cooler lid and condenses back into water drops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A pot of boiling water on a flame with a lid on top. Steam rises from the water and water drops hang under the lid\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <rect class=\"part\" x=\"80\" y=\"52\" width=\"160\" height=\"10\" rx=\"4\"/>\n  <rect x=\"150\" y=\"42\" width=\"20\" height=\"10\" fill=\"#333\"/>\n  <ellipse class=\"drop\" cx=\"100\" cy=\"68\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"125\" cy=\"68\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"150\" cy=\"68\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"175\" cy=\"68\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"200\" cy=\"68\" rx=\"3\" ry=\"4.5\"/>\n  <ellipse class=\"drop\" cx=\"225\" cy=\"68\" rx=\"3\" ry=\"4.5\"/>\n  <path class=\"steam\" d=\"M120,120 q-6,-10 0,-20 q6,-10 0,-20\"/>\n  <path class=\"steam\" d=\"M160,120 q-6,-10 0,-20 q6,-10 0,-20\"/>\n  <path class=\"steam\" d=\"M200,120 q-6,-10 0,-20 q6,-10 0,-20\"/>\n  <rect class=\"water\" x=\"92\" y=\"122\" width=\"136\" height=\"48\"/>\n  <circle cx=\"120\" cy=\"150\" r=\"4\" fill=\"#fff\"/>\n  <circle cx=\"170\" cy=\"140\" r=\"5\" fill=\"#fff\"/>\n  <circle cx=\"205\" cy=\"155\" r=\"4\" fill=\"#fff\"/>\n  <path class=\"glass\" d=\"M90,64 L90,172 L230,172 L230,64\"/>\n  <path d=\"M140,200 q-8,-14 4,-26 q-2,12 8,14 q0,-10 8,-16 q10,14 0,28 z\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"270\" y1=\"40\" x2=\"232\" y2=\"62\"/>\n  <text class=\"small\" x=\"315\" y=\"34\" text-anchor=\"end\">Drops under lid</text>\n  <text class=\"small\" x=\"240\" y=\"150\">Boiling</text>\n  <text class=\"small\" x=\"240\" y=\"164\">water</text>\n</svg>", "alt": "A pot of boiling water on a flame with a lid on top. Steam rises from the water and water drops hang under the lid"}
  },
  {
    id: "g4-sci-matter-b-q24",
    prompt: "This closed bottle is half full of juice. What is in the top half marked \"?\"?",
    options: [
      { id: "a", text: "Nothing at all, it is truly empty" },
      { id: "b", text: "Air, which is a gas" },
      { id: "c", text: "More juice that we cannot see" },
      { id: "d", text: "A hidden solid" }
    ],
    answerId: "b",
    explanation: "The \"empty\" part of the bottle is filled with air. Air is a gas, and it fills any space that is not taken up by the juice.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A closed bottle. The bottom half holds juice. The top half looks empty and is marked with a question mark\">\n  <style>\n    .part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; marker-end:url(#arrowhead); }\n    .small { font-family: system-ui, sans-serif; font-size:12px; fill:#111; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n    .ice { fill:#e0f2fe; stroke:#0369a1; stroke-width:2; }\n    .gas { fill:#475569; }\n    .sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#b45309; stroke-width:2; }\n    .steam { stroke:#64748b; stroke-width:2; fill:none; }\n    .drop { fill:#3b82f6; }\n  </style>\n  <defs><marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#333\"/></marker></defs>\n  <rect class=\"part\" x=\"140\" y=\"20\" width=\"40\" height=\"16\" rx=\"3\"/>\n  <path class=\"glass\" d=\"M146,36 L146,60 Q110,70 110,95 L110,190 L210,190 L210,95 Q210,70 174,60 L174,36\"/>\n  <rect x=\"112\" y=\"130\" width=\"96\" height=\"58\" fill=\"#fb923c\" fill-opacity=\"0.85\"/>\n  <line x1=\"112\" y1=\"130\" x2=\"208\" y2=\"130\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"160\" y=\"108\" text-anchor=\"middle\">?</text>\n  <line class=\"arrow\" x1=\"245\" y1=\"82\" x2=\"188\" y2=\"100\"/>\n  <text class=\"small\" x=\"228\" y=\"76\">\"Empty\" part</text>\n  <line class=\"arrow\" x1=\"58\" y1=\"178\" x2=\"118\" y2=\"162\"/>\n  <text class=\"small\" x=\"20\" y=\"186\">Juice</text>\n  <text class=\"small\" x=\"20\" y=\"210\">Cap is tightly closed</text>\n</svg>", "alt": "A closed bottle. The bottom half holds juice. The top half looks empty and is marked with a question mark"}
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddca",
    title: "Everything is matter",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "A stone, milk and air all take up space. We call all of them matter. Matter can be solid, liquid or gas.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Solids", reveal: "Keep their own shape and size", emoji: "\ud83e\udea8" },
      { label: "Liquids", reveal: "Flow; take the shape of the container", emoji: "\ud83e\udd5b" },
      { label: "Gases", reveal: "No fixed shape; fill all the space", emoji: "\ud83c\udf88" },
      { label: "Changing states", reveal: "Heat: ice \u2192 water \u2192 steam; cooling reverses", emoji: "\u2668\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Water poured from a glass into a bowl\u2026",
    options: [
        { id: "a", text: "Keeps the glass shape" },
        { id: "b", text: "Takes the bowl's shape" },
        { id: "c", text: "Turns into a gas" },
        { id: "d", text: "Becomes a solid" }
    ],
    answerId: "b",
    why: "Liquids take the shape of their container; the amount stays the same.",
    visual: "water-cycle",
    speak: "Water poured from a glass into a bowl\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Matter takes up space", "Solid, liquid, gas", "Heat and cooling change states", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceMatter: ChapterDef = {
  id: "solids-liquids-gases",
  title: "Solids, Liquids and Gases",
  emoji: "\ud83e\uddca",
  blurb: "Matter and its three states",
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
  paperTopics: ["materials", "forces-energy"],
};

export const g4ScienceMatterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
