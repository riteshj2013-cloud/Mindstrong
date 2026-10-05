import type { ChapterDef, PrepQuestion } from "../types";

/** Water: Sources, Uses & Cycle - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-water-a-q01",
    prompt: "Which of these do all living things need to stay alive?",
    options: [
      { id: "a", text: "Gold" },
      { id: "b", text: "Water" },
      { id: "c", text: "Toys" },
      { id: "d", text: "Plastic" }
    ],
    answerId: "b",
    explanation: "Plants, animals and people all need water to live. Gold, toys and plastic are not needed for life.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q02",
    prompt: "Look at the village map. Which labelled source is a natural source of water that flows on the land?",
    options: [
      { id: "a", text: "A \u2014 rain cloud" },
      { id: "b", text: "B \u2014 handpump" },
      { id: "c", text: "C \u2014 tap" },
      { id: "d", text: "D \u2014 river" }
    ],
    answerId: "d",
    explanation: "A river (D) is made by nature and flows over the land. Rain (A) falls from the sky, while a handpump (B) and a tap (C) are made by people to bring water to us from sources.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Village map with four labelled water sources A to D: a rain cloud, a handpump, a house tap and a river\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"140\" class=\"sky\"/>\n  <rect x=\"0\" y=\"140\" width=\"320\" height=\"80\" class=\"soil\"/>\n  <rect x=\"0\" y=\"192\" width=\"320\" height=\"28\" fill=\"#93c5fd\" opacity=\"0.8\"/>\n  <text x=\"228\" y=\"211\" class=\"small\">groundwater</text>\n  <path class=\"water\" d=\"M0 146 C40 142 70 156 120 150 L120 166 C70 172 40 160 0 164 Z\"/>\n  <path class=\"cloud\" d=\"M25 60 a15.4 15.4 0 0 1 6.6 -28.6 a19.8 19.8 0 0 1 37.4 -8.8 a16.5 16.5 0 0 1 28.6 15.4 a13.2 13.2 0 0 1 2.2 22.0 z\"/>\n  <line x1=\"38\" y1=\"66\" x2=\"33\" y2=\"84\" class=\"rain\"/>\n  <line x1=\"54\" y1=\"66\" x2=\"49\" y2=\"84\" class=\"rain\"/>\n  <line x1=\"70\" y1=\"66\" x2=\"65\" y2=\"84\" class=\"rain\"/>\n  <line x1=\"86\" y1=\"66\" x2=\"81\" y2=\"84\" class=\"rain\"/>\n  <line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"200\" stroke=\"#334155\" stroke-width=\"4\" stroke-dasharray=\"6 4\"/>\n  <line x1=\"160\" y1=\"94\" x2=\"128\" y2=\"78\" stroke=\"#334155\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <rect x=\"162\" y=\"96\" width=\"16\" height=\"44\" rx=\"3\" class=\"metal\"/>\n  <rect x=\"158\" y=\"88\" width=\"24\" height=\"10\" class=\"metal\"/>\n  <rect x=\"178\" y=\"104\" width=\"20\" height=\"7\" class=\"metal\"/>\n  <polygon points=\"226,88 261,62 296,88\" fill=\"#f87171\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <rect x=\"232\" y=\"88\" width=\"58\" height=\"52\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n  <rect x=\"252\" y=\"112\" width=\"16\" height=\"28\" fill=\"#a16207\"/>\n  <rect x=\"290\" y=\"108\" width=\"14\" height=\"6\" class=\"metal\"/>\n  <rect x=\"299\" y=\"114\" width=\"5\" height=\"8\" class=\"metal\"/>\n  <circle cx=\"301.5\" cy=\"128\" r=\"3\" class=\"water\"/>\n  <circle cx=\"110\" cy=\"40\" r=\"10\" class=\"tag\"/><text x=\"110\" y=\"44.5\" text-anchor=\"middle\" class=\"label\">A</text>\n  <circle cx=\"205\" cy=\"90\" r=\"10\" class=\"tag\"/><text x=\"205\" y=\"94.5\" text-anchor=\"middle\" class=\"label\">B</text>\n  <circle cx=\"306\" cy=\"95\" r=\"10\" class=\"tag\"/><text x=\"306\" y=\"99.5\" text-anchor=\"middle\" class=\"label\">C</text>\n  <circle cx=\"135\" cy=\"158\" r=\"10\" class=\"tag\"/><text x=\"135\" y=\"162.5\" text-anchor=\"middle\" class=\"label\">D</text>\n</svg>", "alt": "Village map with four labelled water sources A to D: a rain cloud, a handpump, a house tap and a river"}
  },
  {
    id: "g4-sci-water-a-q03",
    prompt: "Water that falls from the clouds as drops is called \u2014",
    options: [
      { id: "a", text: "Rain" },
      { id: "b", text: "Fog" },
      { id: "c", text: "Steam" },
      { id: "d", text: "Ice cube" }
    ],
    answerId: "a",
    explanation: "Rain is water falling from clouds as drops. Fog floats near the ground, and steam comes from boiling water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q04",
    prompt: "Which of these helps us pull up water from under the ground?",
    options: [
      { id: "a", text: "Kite" },
      { id: "b", text: "Umbrella" },
      { id: "c", text: "Handpump" },
      { id: "d", text: "Fan" }
    ],
    answerId: "c",
    explanation: "A handpump brings up groundwater when we push its handle up and down.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q05",
    prompt: "How does water from the sea taste?",
    options: [
      { id: "a", text: "Sweet" },
      { id: "b", text: "Sour" },
      { id: "c", text: "Salty" },
      { id: "d", text: "Bitter like medicine" }
    ],
    answerId: "c",
    explanation: "Sea water has a lot of salt mixed in it, so it tastes salty and is not safe to drink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q06",
    prompt: "Look at the four pictures. Which picture shows water being used for cleaning?",
    options: [
      { id: "a", text: "Picture Q" },
      { id: "b", text: "Picture P" },
      { id: "c", text: "Picture S" },
      { id: "d", text: "Picture R" }
    ],
    answerId: "a",
    explanation: "Picture Q shows clothes being washed in a bucket with soap bubbles \u2014 that is cleaning. P shows drinking, R shows watering a farm and S shows cooking.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four pictures labelled P, Q, R and S showing different uses of water\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <g transform=\"translate(5,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <path d=\"M55 20 L95 20 L90 88 L60 88 Z\" fill=\"#f8fafc\" stroke=\"#1e3a5f\" stroke-width=\"2\"/>\n  <path d=\"M57 42 L93 42 L90 88 L60 88 Z\" class=\"water\"/>\n  <line x1=\"86\" y1=\"8\" x2=\"78\" y2=\"60\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  </g>\n  <g transform=\"translate(165,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <path d=\"M55 45 Q65 18 80 30 Q90 16 98 45\" fill=\"#f472b6\" stroke=\"#9d174d\" stroke-width=\"2\"/>\n  <path d=\"M40 45 L110 45 L102 92 L48 92 Z\" class=\"part\"/>\n  <ellipse cx=\"75\" cy=\"45\" rx=\"35\" ry=\"6\" class=\"water\"/>\n  <circle cx=\"52\" cy=\"32\" r=\"5\" fill=\"#ffffff\" stroke=\"#60a5fa\" stroke-width=\"1.5\"/>\n  <circle cx=\"104\" cy=\"28\" r=\"6\" fill=\"#ffffff\" stroke=\"#60a5fa\" stroke-width=\"1.5\"/>\n  <circle cx=\"114\" cy=\"40\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#60a5fa\" stroke-width=\"1.5\"/>\n  <rect x=\"112\" y=\"78\" width=\"24\" height=\"12\" rx=\"3\" fill=\"#fef08a\" stroke=\"#a16207\" stroke-width=\"1.5\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n  </g>\n  <g transform=\"translate(5,115)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"50\" width=\"120\" height=\"44\" class=\"soil\"/>\n  <rect x=\"10\" y=\"68\" width=\"120\" height=\"8\" class=\"water\"/>\n  <path d=\"M25 66 L25 50 M25 56 q-6 -6 -10 -4 M25 56 q6 -6 10 -4 M25 92 L25 80 M25 85 q-5 -5 -9 -3 M25 85 q5 -5 9 -3\" stroke=\"#15803d\" stroke-width=\"2.5\" fill=\"none\"/>\n  <path d=\"M50 66 L50 50 M50 56 q-6 -6 -10 -4 M50 56 q6 -6 10 -4 M50 92 L50 80 M50 85 q-5 -5 -9 -3 M50 85 q5 -5 9 -3\" stroke=\"#15803d\" stroke-width=\"2.5\" fill=\"none\"/>\n  <path d=\"M75 66 L75 50 M75 56 q-6 -6 -10 -4 M75 56 q6 -6 10 -4 M75 92 L75 80 M75 85 q-5 -5 -9 -3 M75 85 q5 -5 9 -3\" stroke=\"#15803d\" stroke-width=\"2.5\" fill=\"none\"/>\n  <path d=\"M100 66 L100 50 M100 56 q-6 -6 -10 -4 M100 56 q6 -6 10 -4 M100 92 L100 80 M100 85 q-5 -5 -9 -3 M100 85 q5 -5 9 -3\" stroke=\"#15803d\" stroke-width=\"2.5\" fill=\"none\"/>\n  <path d=\"M122 66 L122 50 M122 56 q-6 -6 -10 -4 M122 56 q6 -6 10 -4 M122 92 L122 80 M122 85 q-5 -5 -9 -3 M122 85 q5 -5 9 -3\" stroke=\"#15803d\" stroke-width=\"2.5\" fill=\"none\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">R</text>\n  </g>\n  <g transform=\"translate(165,115)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"30\" y=\"82\" width=\"90\" height=\"10\" fill=\"#475569\"/>\n  <polygon points=\"50,82 56,70 62,82\" fill=\"#f97316\"/>\n  <polygon points=\"70,82 76,68 82,82\" fill=\"#f97316\"/>\n  <polygon points=\"90,82 96,70 102,82\" fill=\"#f97316\"/>\n  <path d=\"M40 48 L110 48 L105 70 L45 70 Z\" class=\"metal\"/>\n  <rect x=\"30\" y=\"50\" width=\"10\" height=\"5\" class=\"metal\"/>\n  <rect x=\"110\" y=\"50\" width=\"10\" height=\"5\" class=\"metal\"/>\n  <path d=\"M60 40 q-5 -8 0 -16 q5 -8 0 -16 M78 40 q-5 -8 0 -16 q5 -8 0 -16 M96 40 q-5 -8 0 -16 q5 -8 0 -16\" class=\"arrow\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">S</text>\n  </g>\n</svg>", "alt": "Four pictures labelled P, Q, R and S showing different uses of water"}
  },
  {
    id: "g4-sci-water-a-q07",
    prompt: "Farmers use a lot of water mainly to \u2014",
    options: [
      { id: "a", text: "Paint their houses" },
      { id: "b", text: "Fly kites" },
      { id: "c", text: "Make roads shine" },
      { id: "d", text: "Grow crops" }
    ],
    answerId: "d",
    explanation: "Crops need water to grow. Farmers water their fields using rain, canals, wells and pumps.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q08",
    prompt: "What makes water in a pond slowly dry up on a hot day?",
    options: [
      { id: "a", text: "The Moon" },
      { id: "b", text: "The heat of the Sun" },
      { id: "c", text: "The stars" },
      { id: "d", text: "Shadows of trees" }
    ],
    answerId: "b",
    explanation: "The Sun's heat turns pond water into water vapour, which rises into the air. This is evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q09",
    prompt: "What are clouds made of?",
    options: [
      { id: "a", text: "Tiny drops of water" },
      { id: "b", text: "Cotton" },
      { id: "c", text: "Smoke from fires" },
      { id: "d", text: "Sand" }
    ],
    answerId: "a",
    explanation: "Clouds are made of many tiny water drops (or ice bits) floating high in the sky.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q10",
    prompt: "Each picture shows a child's toothbrush and a tap. Which picture shows the BEST habit while brushing teeth?",
    options: [
      { id: "a", text: "Picture P" },
      { id: "b", text: "Picture Q" },
      { id: "c", text: "Picture R" },
      { id: "d", text: "Picture S" }
    ],
    answerId: "c",
    explanation: "In picture R the tap is closed and water is kept in a mug for rinsing. P has the tap running, Q uses a hose pipe and S lets the sink overflow \u2014 all waste water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four bathroom pictures P, Q, R and S showing a toothbrush and how the tap is used\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <g transform=\"translate(5,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"12\" width=\"8\" height=\"30\" fill=\"#e5e7eb\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"18\" y=\"20\" width=\"45\" height=\"9\" class=\"metal\"/>\n  <rect x=\"36\" y=\"10\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"55\" y=\"29\" width=\"9\" height=\"10\" class=\"metal\"/>\n  <rect x=\"56\" y=\"39\" width=\"7\" height=\"33\" class=\"water\"/>\n  <path d=\"M15 70 L115 70 L105 92 L25 92 Z\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <rect x=\"100\" y=\"28\" width=\"40\" height=\"5\" rx=\"2\" fill=\"#f472b6\" stroke=\"#9d174d\" stroke-width=\"1.5\"/>\n  <rect x=\"128\" y=\"21\" width=\"12\" height=\"7\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  </g>\n  <g transform=\"translate(165,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"12\" width=\"8\" height=\"30\" fill=\"#e5e7eb\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"18\" y=\"20\" width=\"45\" height=\"9\" class=\"metal\"/>\n  <rect x=\"36\" y=\"10\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"55\" y=\"29\" width=\"9\" height=\"10\" class=\"metal\"/>\n  <path d=\"M59 39 C60 70 95 82 118 62\" stroke=\"#16a34a\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/>\n  <line x1=\"120\" y1=\"60\" x2=\"140\" y2=\"45\" class=\"rain\"/>\n  <line x1=\"120\" y1=\"60\" x2=\"144\" y2=\"58\" class=\"rain\"/>\n  <line x1=\"120\" y1=\"60\" x2=\"140\" y2=\"72\" class=\"rain\"/>\n  <rect x=\"100\" y=\"28\" width=\"40\" height=\"5\" rx=\"2\" fill=\"#f472b6\" stroke=\"#9d174d\" stroke-width=\"1.5\"/>\n  <rect x=\"128\" y=\"21\" width=\"12\" height=\"7\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n  </g>\n  <g transform=\"translate(5,115)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"12\" width=\"8\" height=\"30\" fill=\"#e5e7eb\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"18\" y=\"20\" width=\"45\" height=\"9\" class=\"metal\"/>\n  <rect x=\"36\" y=\"10\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"55\" y=\"29\" width=\"9\" height=\"10\" class=\"metal\"/>\n  <path d=\"M15 70 L115 70 L105 92 L25 92 Z\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <rect x=\"45\" y=\"48\" width=\"22\" height=\"22\" class=\"water\"/>\n  <path d=\"M67 53 q10 0 10 8 q0 8 -10 8\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"100\" y=\"28\" width=\"40\" height=\"5\" rx=\"2\" fill=\"#f472b6\" stroke=\"#9d174d\" stroke-width=\"1.5\"/>\n  <rect x=\"128\" y=\"21\" width=\"12\" height=\"7\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">R</text>\n  </g>\n  <g transform=\"translate(165,115)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"12\" width=\"8\" height=\"30\" fill=\"#e5e7eb\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"18\" y=\"20\" width=\"45\" height=\"9\" class=\"metal\"/>\n  <rect x=\"36\" y=\"10\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"55\" y=\"29\" width=\"9\" height=\"10\" class=\"metal\"/>\n  <rect x=\"56\" y=\"39\" width=\"7\" height=\"33\" class=\"water\"/>\n  <path d=\"M15 70 L115 70 L105 92 L25 92 Z\" class=\"water\"/>\n  <rect x=\"15\" y=\"66\" width=\"100\" height=\"5\" class=\"water\"/>\n  <line x1=\"14\" y1=\"72\" x2=\"10\" y2=\"96\" class=\"rain\"/>\n  <line x1=\"116\" y1=\"72\" x2=\"120\" y2=\"96\" class=\"rain\"/>\n  <line x1=\"20\" y1=\"76\" x2=\"17\" y2=\"96\" class=\"rain\"/>\n  <rect x=\"100\" y=\"28\" width=\"40\" height=\"5\" rx=\"2\" fill=\"#f472b6\" stroke=\"#9d174d\" stroke-width=\"1.5\"/>\n  <rect x=\"128\" y=\"21\" width=\"12\" height=\"7\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">S</text>\n  </g>\n</svg>", "alt": "Four bathroom pictures P, Q, R and S showing a toothbrush and how the tap is used"}
  },
  {
    id: "g4-sci-water-a-q11",
    prompt: "When water changes into water vapour, it is called \u2014",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Evaporation" },
      { id: "c", text: "Melting" },
      { id: "d", text: "Condensation" }
    ],
    answerId: "b",
    explanation: "Evaporation is when liquid water becomes water vapour, usually when it is heated.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q12",
    prompt: "Look at the water cycle. What is the stage marked 2 called?",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Boiling" },
      { id: "d", text: "Condensation" }
    ],
    answerId: "d",
    explanation: "At stage 2, water vapour high in the sky cools and changes into tiny drops that make a cloud. This is condensation. Stage 1 is evaporation, 3 is rain (precipitation) and 4 is water flowing back to the lake.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Water cycle diagram with Sun, lake, mountain and four numbered stages 1 to 4\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahA12\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" class=\"sky\"/>\n  <line x1=\"62.0\" y1=\"40.0\" x2=\"69.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"55.6\" x2=\"60.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"62.0\" x2=\"40.0\" y2=\"69.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"55.6\" x2=\"19.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"18.0\" y1=\"40.0\" x2=\"11.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"24.4\" x2=\"19.5\" y2=\"19.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"18.0\" x2=\"40.0\" y2=\"11.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"24.4\" x2=\"60.5\" y2=\"19.5\" class=\"ray\"/>\n  <circle cx=\"40\" cy=\"40\" r=\"18\" class=\"sun\"/>\n  <text x=\"66\" y=\"22\" class=\"small\">Sun</text>\n  <line x1=\"54\" y1=\"60\" x2=\"82\" y2=\"168\" class=\"ray\" stroke-dasharray=\"5 4\"/>\n  <polygon points=\"190,176 255,110 320,176\" fill=\"#d6d3d1\" stroke=\"#57534e\" stroke-width=\"2\"/>\n  <rect x=\"0\" y=\"175\" width=\"320\" height=\"45\" class=\"land\"/>\n  <ellipse cx=\"90\" cy=\"192\" rx=\"80\" ry=\"16\" class=\"water\"/>\n  <text x=\"102\" y=\"197\" class=\"small\">Lake</text>\n  <path d=\"M100 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahA12)\"/>\n  <path d=\"M120 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahA12)\"/>\n  <path d=\"M140 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahA12)\"/>\n  <path d=\"M125 88 Q160 40 200 54\" class=\"arrow\" marker-end=\"url(#ahA12)\"/>\n  <path class=\"cloud\" d=\"M205 72 a18.2 18.2 0 0 1 7.8 -33.8 a23.4 23.4 0 0 1 44.2 -10.4 a19.5 19.5 0 0 1 33.8 18.2 a15.6 15.6 0 0 1 2.6 26.0 z\"/>\n  <line x1=\"222\" y1=\"78\" x2=\"216\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"240\" y1=\"78\" x2=\"234\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"258\" y1=\"78\" x2=\"252\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"276\" y1=\"78\" x2=\"270\" y2=\"100\" class=\"rain\"/>\n  <path d=\"M240 130 C226 158 200 170 168 184\" stroke=\"#3b82f6\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/>\n  <path d=\"M232 146 C222 162 205 170 186 178\" class=\"arrow\" marker-end=\"url(#ahA12)\"/>\n  <circle cx=\"160\" cy=\"128\" r=\"10\" class=\"tag\"/><text x=\"160\" y=\"132.5\" text-anchor=\"middle\" class=\"label\">1</text>\n  <circle cx=\"304\" cy=\"26\" r=\"10\" class=\"tag\"/><text x=\"304\" y=\"30.5\" text-anchor=\"middle\" class=\"label\">2</text>\n  <circle cx=\"200\" cy=\"92\" r=\"10\" class=\"tag\"/><text x=\"200\" y=\"96.5\" text-anchor=\"middle\" class=\"label\">3</text>\n  <circle cx=\"228\" cy=\"198\" r=\"10\" class=\"tag\"/><text x=\"228\" y=\"202.5\" text-anchor=\"middle\" class=\"label\">4</text>\n</svg>", "alt": "Water cycle diagram with Sun, lake, mountain and four numbered stages 1 to 4"}
  },
  {
    id: "g4-sci-water-a-q13",
    prompt: "Water stored in the soil and rocks under the ground is called \u2014",
    options: [
      { id: "a", text: "Rainwater" },
      { id: "b", text: "Seawater" },
      { id: "c", text: "Tap water" },
      { id: "d", text: "Groundwater" }
    ],
    answerId: "d",
    explanation: "Rainwater soaks into the soil and collects under the ground. This is groundwater, which wells and handpumps use.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q14",
    prompt: "Meera keeps a glass of ice-cold water on the table, as shown. Soon drops appear on the OUTSIDE of the glass. Where do these drops come from?",
    options: [
      { id: "a", text: "The glass is leaking" },
      { id: "b", text: "Water vapour in the air cools on the cold glass" },
      { id: "c", text: "The ice melts through the glass" },
      { id: "d", text: "From Meera's hands" }
    ],
    answerId: "b",
    explanation: "Air has invisible water vapour. When it touches the cold glass, it cools and condenses into drops. The glass is not leaking \u2014 the drops are only on the outside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A glass of ice-cold water on a table with drops on the outside of the glass\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect x=\"0\" y=\"175\" width=\"320\" height=\"45\" fill=\"#d6a36a\" stroke=\"#78350f\" stroke-width=\"2\"/>\n  <ellipse cx=\"160\" cy=\"178\" rx=\"45\" ry=\"4\" class=\"water\" opacity=\"0.5\"/>\n  <path d=\"M120 60 L200 60 L192 175 L128 175 Z\" fill=\"#e0f2fe\" stroke=\"#1e3a5f\" stroke-width=\"2.5\"/>\n  <path d=\"M123 80 L197 80 L192 175 L128 175 Z\" class=\"water\" opacity=\"0.6\"/>\n  <rect x=\"140\" y=\"85\" width=\"18\" height=\"18\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\" transform=\"rotate(12 149 94)\"/>\n  <rect x=\"164\" y=\"104\" width=\"18\" height=\"18\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"1.5\" transform=\"rotate(-10 173 113)\"/>\n  <ellipse cx=\"117\" cy=\"92\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"119\" cy=\"122\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"121\" cy=\"152\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"203\" cy=\"92\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"201\" cy=\"122\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"199\" cy=\"152\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <text x=\"222\" y=\"108\" class=\"small\">drops on the</text>\n  <text x=\"222\" y=\"121\" class=\"small\">OUTSIDE</text>\n  <line x1=\"220\" y1=\"114\" x2=\"207\" y2=\"120\" class=\"arrow\"/>\n  <text x=\"16\" y=\"40\" class=\"small\">ice-cold water</text>\n  <line x1=\"70\" y1=\"45\" x2=\"138\" y2=\"92\" class=\"arrow\"/>\n</svg>", "alt": "A glass of ice-cold water on a table with drops on the outside of the glass"}
  },
  {
    id: "g4-sci-water-a-q15",
    prompt: "What is a safe way to kill germs in drinking water at home?",
    options: [
      { id: "a", text: "Add salt" },
      { id: "b", text: "Stir it fast" },
      { id: "c", text: "Boil it and let it cool" },
      { id: "d", text: "Add food colour" }
    ],
    answerId: "c",
    explanation: "Boiling water kills most germs. After it cools, it is safer to drink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q16",
    prompt: "Which illness can spread by drinking dirty water?",
    options: [
      { id: "a", text: "Cholera" },
      { id: "b", text: "A broken bone" },
      { id: "c", text: "Sunburn" },
      { id: "d", text: "Short eyesight" }
    ],
    answerId: "a",
    explanation: "Cholera is caused by germs in dirty water. Drinking clean, boiled or filtered water helps prevent it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q17",
    prompt: "Water left after washing vegetables can be reused to \u2014",
    options: [
      { id: "a", text: "Drink" },
      { id: "b", text: "Cook dal" },
      { id: "c", text: "Water plants" },
      { id: "d", text: "Brush teeth" }
    ],
    answerId: "c",
    explanation: "Rinse water is not clean enough to drink or cook with, but it is perfect for watering plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q18",
    prompt: "Collecting and storing rainwater so we can use it later is called \u2014",
    options: [
      { id: "a", text: "Rainwater harvesting" },
      { id: "b", text: "Evaporation" },
      { id: "c", text: "Flooding" },
      { id: "d", text: "Melting" }
    ],
    answerId: "a",
    explanation: "Rainwater harvesting means catching rainwater from rooftops or the ground and saving it in tanks, pits or ponds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q19",
    prompt: "A tap drips into an empty bucket all day. Look at the bucket at 8 a.m. and at 8 p.m. What does this show?",
    options: [
      { id: "a", text: "A dripping tap wastes no water at all" },
      { id: "b", text: "A dripping tap wastes a lot of water over time" },
      { id: "c", text: "A dripping tap wastes only hot water" },
      { id: "d", text: "A dripping tap wastes water only at night" }
    ],
    answerId: "b",
    explanation: "Each drop is tiny, but in 12 hours the drops filled almost a whole bucket. Leaky taps should be fixed quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two pictures of the same dripping tap and bucket at 8 a.m. and at 8 p.m.\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <g transform=\"translate(5,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"210\" rx=\"8\" class=\"frame\"/>\n  <text x=\"118\" y=\"24\" text-anchor=\"middle\" class=\"label\">8 a.m.</text>\n  <rect x=\"20\" y=\"30\" width=\"60\" height=\"10\" class=\"metal\"/>\n  <rect x=\"40\" y=\"20\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"72\" y=\"40\" width=\"10\" height=\"12\" class=\"metal\"/>\n  <circle cx=\"77\" cy=\"64\" r=\"3.5\" class=\"water\"/>\n  <circle cx=\"77\" cy=\"84\" r=\"3.5\" class=\"water\"/>\n  <path d=\"M40 120 L115 120 L105 190 L50 190 Z\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n  <path d=\"M48.3 178 L106.7 178 L105 190 L50 190 Z\" class=\"water\"/>\n  </g>\n  <g transform=\"translate(165,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"210\" rx=\"8\" class=\"frame\"/>\n  <text x=\"118\" y=\"24\" text-anchor=\"middle\" class=\"label\">8 p.m.</text>\n  <rect x=\"20\" y=\"30\" width=\"60\" height=\"10\" class=\"metal\"/>\n  <rect x=\"40\" y=\"20\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"72\" y=\"40\" width=\"10\" height=\"12\" class=\"metal\"/>\n  <circle cx=\"77\" cy=\"64\" r=\"3.5\" class=\"water\"/>\n  <circle cx=\"77\" cy=\"84\" r=\"3.5\" class=\"water\"/>\n  <path d=\"M40 120 L115 120 L105 190 L50 190 Z\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n  <path d=\"M41.1 128 L113.9 128 L105 190 L50 190 Z\" class=\"water\"/>\n  </g>\n</svg>", "alt": "Two pictures of the same dripping tap and bucket at 8 a.m. and at 8 p.m."}
  },
  {
    id: "g4-sci-water-a-q20",
    prompt: "The stages of this water cycle are numbered out of order. Which is the correct order, starting with the Sun heating the water?",
    options: [
      { id: "a", text: "1 \u2192 2 \u2192 3 \u2192 4" },
      { id: "b", text: "4 \u2192 3 \u2192 2 \u2192 1" },
      { id: "c", text: "3 \u2192 1 \u2192 4 \u2192 2" },
      { id: "d", text: "2 \u2192 4 \u2192 3 \u2192 1" }
    ],
    answerId: "d",
    explanation: "First the Sun heats lake water (2). The water evaporates as vapour (4). The vapour cools and condenses into a cloud (3). Then it falls as rain (1).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Water cycle diagram with Sun, lake, cloud, rain and four numbered stages 1 to 4 placed out of order\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahA20\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" class=\"sky\"/>\n  <line x1=\"62.0\" y1=\"40.0\" x2=\"69.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"55.6\" x2=\"60.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"62.0\" x2=\"40.0\" y2=\"69.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"55.6\" x2=\"19.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"18.0\" y1=\"40.0\" x2=\"11.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"24.4\" x2=\"19.5\" y2=\"19.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"18.0\" x2=\"40.0\" y2=\"11.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"24.4\" x2=\"60.5\" y2=\"19.5\" class=\"ray\"/>\n  <circle cx=\"40\" cy=\"40\" r=\"18\" class=\"sun\"/>\n  <text x=\"66\" y=\"22\" class=\"small\">Sun</text>\n  <line x1=\"54\" y1=\"60\" x2=\"82\" y2=\"168\" class=\"ray\" stroke-dasharray=\"5 4\"/>\n  <polygon points=\"190,176 255,110 320,176\" fill=\"#d6d3d1\" stroke=\"#57534e\" stroke-width=\"2\"/>\n  <rect x=\"0\" y=\"175\" width=\"320\" height=\"45\" class=\"land\"/>\n  <ellipse cx=\"90\" cy=\"192\" rx=\"80\" ry=\"16\" class=\"water\"/>\n  <text x=\"102\" y=\"197\" class=\"small\">Lake</text>\n  <path d=\"M100 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahA20)\"/>\n  <path d=\"M120 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahA20)\"/>\n  <path d=\"M140 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahA20)\"/>\n  <path d=\"M125 88 Q160 40 200 54\" class=\"arrow\" marker-end=\"url(#ahA20)\"/>\n  <path class=\"cloud\" d=\"M205 72 a18.2 18.2 0 0 1 7.8 -33.8 a23.4 23.4 0 0 1 44.2 -10.4 a19.5 19.5 0 0 1 33.8 18.2 a15.6 15.6 0 0 1 2.6 26.0 z\"/>\n  <line x1=\"222\" y1=\"78\" x2=\"216\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"240\" y1=\"78\" x2=\"234\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"258\" y1=\"78\" x2=\"252\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"276\" y1=\"78\" x2=\"270\" y2=\"100\" class=\"rain\"/>\n  <path d=\"M240 130 C226 158 200 170 168 184\" stroke=\"#3b82f6\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/>\n  <path d=\"M232 146 C222 162 205 170 186 178\" class=\"arrow\" marker-end=\"url(#ahA20)\"/>\n  <circle cx=\"200\" cy=\"92\" r=\"10\" class=\"tag\"/><text x=\"200\" y=\"96.5\" text-anchor=\"middle\" class=\"label\">1</text>\n  <circle cx=\"30\" cy=\"190\" r=\"10\" class=\"tag\"/><text x=\"30\" y=\"194.5\" text-anchor=\"middle\" class=\"label\">2</text>\n  <circle cx=\"304\" cy=\"26\" r=\"10\" class=\"tag\"/><text x=\"304\" y=\"30.5\" text-anchor=\"middle\" class=\"label\">3</text>\n  <circle cx=\"160\" cy=\"128\" r=\"10\" class=\"tag\"/><text x=\"160\" y=\"132.5\" text-anchor=\"middle\" class=\"label\">4</text>\n</svg>", "alt": "Water cycle diagram with Sun, lake, cloud, rain and four numbered stages 1 to 4 placed out of order"}
  },
  {
    id: "g4-sci-water-a-q21",
    prompt: "Where is most of the water on Earth found?",
    options: [
      { id: "a", text: "Oceans and seas" },
      { id: "b", text: "Rivers" },
      { id: "c", text: "Wells" },
      { id: "d", text: "Ponds" }
    ],
    answerId: "a",
    explanation: "Oceans and seas hold almost all of Earth's water. Rivers, wells and ponds hold only a tiny part.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q22",
    prompt: "On which day will wet clothes dry the fastest?",
    options: [
      { id: "a", text: "A cool day, kept inside a cupboard" },
      { id: "b", text: "A rainy day, hung outside" },
      { id: "c", text: "Any day, kept folded in a bag" },
      { id: "d", text: "A sunny, windy day, spread out on a line" }
    ],
    answerId: "d",
    explanation: "Sunlight, wind and spreading clothes out all help water evaporate faster.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q23",
    prompt: "Riya covers a pan of boiling water with a lid. Which changes happen at X and at Y in the picture?",
    options: [
      { id: "a", text: "X: melting, Y: freezing" },
      { id: "b", text: "X: freezing, Y: evaporation" },
      { id: "c", text: "X: evaporation, Y: condensation" },
      { id: "d", text: "X: melting, Y: condensation" }
    ],
    answerId: "c",
    explanation: "At X, hot water evaporates and rises as vapour. At Y, the vapour touches the cooler lid and condenses into drops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A covered pan of boiling water on a stove with X pointing to rising steam and Y pointing to drops under the lid\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahA23\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect x=\"80\" y=\"196\" width=\"160\" height=\"8\" fill=\"#475569\"/>\n  <polygon points=\"110,196 117,184 124,196\" fill=\"#f97316\"/>\n  <polygon points=\"150,196 157,183 164,196\" fill=\"#f97316\"/>\n  <polygon points=\"190,196 197,184 204,196\" fill=\"#f97316\"/>\n  <path d=\"M90 120 L230 120 L222 182 L98 182 Z\" class=\"metal\"/>\n  <rect x=\"230\" y=\"128\" width=\"50\" height=\"8\" rx=\"3\" fill=\"#1f2937\"/>\n  <path d=\"M93 145 L227 145 L222 182 L98 182 Z\" class=\"water\"/>\n  <path d=\"M85 120 Q160 80 235 120 Z\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <rect x=\"152\" y=\"90\" width=\"16\" height=\"9\" rx=\"2\" fill=\"#334155\"/>\n  <path d=\"M125 142 q-4 -5 0 -10 q4 -5 0 -8 l0 -4\" class=\"arrow\" marker-end=\"url(#ahA23)\"/>\n  <path d=\"M160 142 q-4 -5 0 -10 q4 -5 0 -8 l0 -4\" class=\"arrow\" marker-end=\"url(#ahA23)\"/>\n  <path d=\"M195 142 q-4 -5 0 -10 q4 -5 0 -8 l0 -4\" class=\"arrow\" marker-end=\"url(#ahA23)\"/>\n  <ellipse cx=\"122\" cy=\"110\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"142\" cy=\"106\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"178\" cy=\"106\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"198\" cy=\"110\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <line x1=\"60\" y1=\"145\" x2=\"121\" y2=\"132\" class=\"arrow\"/>\n  <line x1=\"60\" y1=\"85\" x2=\"118\" y2=\"108\" class=\"arrow\"/>\n  <circle cx=\"50\" cy=\"148\" r=\"10\" class=\"tag\"/><text x=\"50\" y=\"152.5\" text-anchor=\"middle\" class=\"label\">X</text>\n  <circle cx=\"50\" cy=\"82\" r=\"10\" class=\"tag\"/><text x=\"50\" y=\"86.5\" text-anchor=\"middle\" class=\"label\">Y</text>\n  <text x=\"20\" y=\"216\" class=\"small\">X = steam rising  \u00b7  Y = drops under the lid</text>\n</svg>", "alt": "A covered pan of boiling water on a stove with X pointing to rising steam and Y pointing to drops under the lid"}
  },
  {
    id: "g4-sci-water-a-q24",
    prompt: "In the picture, rainwater from the roof flows down a pipe into a pit in the ground. How does this help the well nearby?",
    options: [
      { id: "a", text: "It makes more rain fall" },
      { id: "b", text: "It helps refill the groundwater" },
      { id: "c", text: "It makes the well water salty" },
      { id: "d", text: "It stops evaporation forever" }
    ],
    answerId: "b",
    explanation: "The rainwater soaks down from the pit and refills the groundwater. The well takes its water from groundwater, so it does not dry up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Rain on a house roof flows down a pipe into a pit in the ground; a well stands nearby; groundwater lies below\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahA24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"160\" class=\"sky\"/>\n  <rect x=\"0\" y=\"160\" width=\"320\" height=\"60\" class=\"soil\"/>\n  <rect x=\"0\" y=\"200\" width=\"320\" height=\"20\" fill=\"#93c5fd\" opacity=\"0.85\"/>\n  <text x=\"8\" y=\"214\" class=\"small\">groundwater</text>\n  <line x1=\"30\" y1=\"12\" x2=\"24\" y2=\"36\" class=\"rain\"/>\n  <line x1=\"55\" y1=\"12\" x2=\"49\" y2=\"36\" class=\"rain\"/>\n  <line x1=\"80\" y1=\"12\" x2=\"74\" y2=\"36\" class=\"rain\"/>\n  <line x1=\"105\" y1=\"12\" x2=\"99\" y2=\"36\" class=\"rain\"/>\n  <rect x=\"20\" y=\"90\" width=\"90\" height=\"70\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n  <polygon points=\"10,90 65,50 125,90\" fill=\"#f87171\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <text x=\"48\" y=\"80\" class=\"small\">roof</text>\n  <path d=\"M122 90 L136 90 L136 158\" stroke=\"#64748b\" stroke-width=\"6\" fill=\"none\"/>\n  <text x=\"142\" y=\"120\" class=\"small\">pipe</text>\n  <rect x=\"128\" y=\"160\" width=\"40\" height=\"32\" fill=\"#a8a29e\" stroke=\"#44403c\" stroke-width=\"1.5\"/>\n  <circle cx=\"138\" cy=\"170\" r=\"4\" fill=\"#78716c\"/><circle cx=\"152\" cy=\"178\" r=\"4\" fill=\"#78716c\"/><circle cx=\"160\" cy=\"168\" r=\"3\" fill=\"#78716c\"/><circle cx=\"142\" cy=\"185\" r=\"3\" fill=\"#78716c\"/>\n  <text x=\"172\" y=\"182\" class=\"small\">pit</text>\n  <path d=\"M140 193 L140 206\" class=\"arrow\" marker-end=\"url(#ahA24)\"/>\n  <path d=\"M156 193 L156 206\" class=\"arrow\" marker-end=\"url(#ahA24)\"/>\n  <rect x=\"250\" y=\"160\" width=\"30\" height=\"60\" fill=\"#1e3a5f\" opacity=\"0.2\"/>\n  <rect x=\"250\" y=\"200\" width=\"30\" height=\"20\" class=\"water\"/>\n  <rect x=\"240\" y=\"140\" width=\"50\" height=\"20\" fill=\"#f87171\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <line x1=\"244\" y1=\"140\" x2=\"244\" y2=\"108\" stroke=\"#78350f\" stroke-width=\"3\"/>\n  <line x1=\"286\" y1=\"140\" x2=\"286\" y2=\"108\" stroke=\"#78350f\" stroke-width=\"3\"/>\n  <line x1=\"240\" y1=\"108\" x2=\"290\" y2=\"108\" stroke=\"#78350f\" stroke-width=\"4\"/>\n  <line x1=\"265\" y1=\"108\" x2=\"265\" y2=\"186\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"259\" y=\"186\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <text x=\"296\" y=\"152\" class=\"small\">well</text>\n</svg>", "alt": "Rain on a house roof flows down a pipe into a pit in the ground; a well stands nearby; groundwater lies below"}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-water-b-q01",
    prompt: "Water from the tank travels through the pipe into the house. What is the part marked X?",
    options: [
      { id: "a", text: "Chimney" },
      { id: "b", text: "Window" },
      { id: "c", text: "Tap" },
      { id: "d", text: "Light switch" }
    ],
    answerId: "c",
    explanation: "X is the tap at the end of the pipe. When we open it, water from the tank flows out into the sink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A house with a water tank, a pipe, a chimney, a window, a light switch and a part marked X over a sink\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"210\" class=\"sky\"/>\n  <rect x=\"0\" y=\"210\" width=\"320\" height=\"10\" class=\"land\"/>\n  <rect x=\"190\" y=\"26\" width=\"20\" height=\"34\" fill=\"#a8a29e\" stroke=\"#44403c\" stroke-width=\"2\"/>\n  <polygon points=\"30,70 140,20 250,70\" fill=\"#fca5a5\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <rect x=\"40\" y=\"70\" width=\"200\" height=\"140\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/>\n  <rect x=\"60\" y=\"92\" width=\"50\" height=\"40\" fill=\"#bae6fd\" stroke=\"#1e3a5f\" stroke-width=\"2\"/>\n  <line x1=\"85\" y1=\"92\" x2=\"85\" y2=\"132\" stroke=\"#1e3a5f\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"112\" x2=\"110\" y2=\"112\" stroke=\"#1e3a5f\" stroke-width=\"2\"/>\n  <rect x=\"210\" y=\"100\" width=\"12\" height=\"18\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"214\" y=\"104\" width=\"4\" height=\"6\" fill=\"#334155\"/>\n  <line x1=\"270\" y1=\"76\" x2=\"270\" y2=\"210\" stroke=\"#57534e\" stroke-width=\"3\"/>\n  <line x1=\"304\" y1=\"76\" x2=\"304\" y2=\"210\" stroke=\"#57534e\" stroke-width=\"3\"/>\n  <rect x=\"262\" y=\"40\" width=\"50\" height=\"36\" rx=\"6\" fill=\"#334155\"/>\n  <text x=\"287\" y=\"62\" text-anchor=\"middle\" class=\"small\" fill=\"#ffffff\" style=\"fill:#ffffff\">tank</text>\n  <path d=\"M287 76 L287 150 L155 150\" stroke=\"#64748b\" stroke-width=\"5\" fill=\"none\"/>\n  <rect x=\"146\" y=\"150\" width=\"9\" height=\"12\" class=\"metal\"/>\n  <rect x=\"140\" y=\"142\" width=\"12\" height=\"6\" class=\"metal\"/>\n  <circle cx=\"150.5\" cy=\"168\" r=\"2.5\" class=\"water\"/>\n  <rect x=\"115\" y=\"174\" width=\"75\" height=\"12\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"118\" y1=\"150\" x2=\"143\" y2=\"155\" class=\"arrow\"/>\n  <circle cx=\"106\" cy=\"148\" r=\"10\" class=\"tag\"/><text x=\"106\" y=\"152.5\" text-anchor=\"middle\" class=\"label\">X</text>\n</svg>", "alt": "A house with a water tank, a pipe, a chimney, a window, a light switch and a part marked X over a sink"}
  },
  {
    id: "g4-sci-water-b-q02",
    prompt: "Look at the map. Water body P has land on all sides and its water stays still. What is P called?",
    options: [
      { id: "a", text: "Lake" },
      { id: "b", text: "River" },
      { id: "c", text: "Waterfall" },
      { id: "d", text: "Stream" }
    ],
    answerId: "a",
    explanation: "P is a lake \u2014 land is all around it and its water stays mostly still. Q, with flow arrows, is a river that keeps moving.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Map with green land, a still water body P surrounded by land, and a flowing water body Q\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" class=\"land\"/>\n  <path class=\"water\" d=\"M40 90 C40 50 120 40 140 80 C160 120 110 160 70 150 C40 145 40 120 40 90 Z\"/>\n  <path d=\"M262 0 C222 60 300 110 250 160 C222 190 240 210 250 220\" stroke=\"#60a5fa\" stroke-width=\"20\" fill=\"none\"/>\n  <path d=\"M262 0 C222 60 300 110 250 160 C222 190 240 210 250 220\" stroke=\"#1d4ed8\" stroke-width=\"1\" fill=\"none\" stroke-dasharray=\"2 0\"/>\n  <path d=\"M249 30 L244 50\" class=\"arrow\" marker-end=\"url(#ahB2)\"/>\n  <path d=\"M266 110 L258 132\" class=\"arrow\" marker-end=\"url(#ahB2)\"/>\n  <path d=\"M240 184 L244 204\" class=\"arrow\" marker-end=\"url(#ahB2)\"/>\n  <circle cx=\"30\" cy=\"40\" r=\"9\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <circle cx=\"160\" cy=\"45\" r=\"9\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <circle cx=\"170\" cy=\"150\" r=\"9\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <circle cx=\"25\" cy=\"175\" r=\"9\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <circle cx=\"110\" cy=\"185\" r=\"9\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <circle cx=\"190\" cy=\"95\" r=\"9\" fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <circle cx=\"90\" cy=\"100\" r=\"10\" class=\"tag\"/><text x=\"90\" y=\"104.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  <circle cx=\"296\" cy=\"80\" r=\"10\" class=\"tag\"/><text x=\"296\" y=\"84.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n</svg>", "alt": "Map with green land, a still water body P surrounded by land, and a flowing water body Q"}
  },
  {
    id: "g4-sci-water-b-q03",
    prompt: "Which of these foods needs water to be cooked?",
    options: [
      { id: "a", text: "A fresh apple" },
      { id: "b", text: "A raw carrot" },
      { id: "c", text: "A banana" },
      { id: "d", text: "Boiled rice" }
    ],
    answerId: "d",
    explanation: "Rice is cooked by boiling it in water. Apples, raw carrots and bananas can be eaten without cooking.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q04",
    prompt: "The picture shows a deep hole dug into the ground until it reaches water. What is it called?",
    options: [
      { id: "a", text: "Tunnel" },
      { id: "b", text: "Well" },
      { id: "c", text: "Garbage pit" },
      { id: "d", text: "Burrow" }
    ],
    answerId: "b",
    explanation: "A well is dug deep until it reaches groundwater. Water is pulled up with a rope and bucket over a pulley, or with a pump.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Cut-away of the ground showing a deep hole with a brick ring, pulley, rope and bucket reaching water below\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"90\" class=\"sky\"/>\n  <rect x=\"0\" y=\"90\" width=\"320\" height=\"60\" class=\"soil\"/>\n  <rect x=\"0\" y=\"150\" width=\"320\" height=\"40\" fill=\"#c4a27a\" stroke=\"#7c5a33\" stroke-width=\"1.5\"/>\n  <rect x=\"0\" y=\"190\" width=\"320\" height=\"30\" fill=\"#93c5fd\" opacity=\"0.85\"/>\n  <text x=\"10\" y=\"110\" class=\"small\">soil</text>\n  <text x=\"10\" y=\"172\" class=\"small\">rock</text>\n  <text x=\"10\" y=\"210\" class=\"small\">groundwater</text>\n  <rect x=\"140\" y=\"90\" width=\"40\" height=\"130\" fill=\"#f1f5f9\" stroke=\"#78350f\" stroke-width=\"1.5\"/>\n  <rect x=\"140\" y=\"190\" width=\"40\" height=\"30\" class=\"water\"/>\n  <rect x=\"130\" y=\"70\" width=\"60\" height=\"20\" fill=\"#f87171\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <line x1=\"135\" y1=\"70\" x2=\"135\" y2=\"30\" stroke=\"#78350f\" stroke-width=\"3\"/>\n  <line x1=\"185\" y1=\"70\" x2=\"185\" y2=\"30\" stroke=\"#78350f\" stroke-width=\"3\"/>\n  <line x1=\"130\" y1=\"30\" x2=\"190\" y2=\"30\" stroke=\"#78350f\" stroke-width=\"4\"/>\n  <circle cx=\"160\" cy=\"34\" r=\"7\" class=\"metal\"/>\n  <line x1=\"160\" y1=\"41\" x2=\"160\" y2=\"182\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <path d=\"M152 182 L168 182 L166 196 L154 196 Z\" class=\"metal\"/>\n</svg>", "alt": "Cut-away of the ground showing a deep hole with a brick ring, pulley, rope and bucket reaching water below"}
  },
  {
    id: "g4-sci-water-b-q05",
    prompt: "Which living thing has its home in water?",
    options: [
      { id: "a", text: "Fish" },
      { id: "b", text: "Camel" },
      { id: "c", text: "Sparrow" },
      { id: "d", text: "Cow" }
    ],
    answerId: "a",
    explanation: "Fish live in water and breathe using gills. Water is home for many plants and animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q06",
    prompt: "Water changes into ice when it is \u2014",
    options: [
      { id: "a", text: "Heated" },
      { id: "b", text: "Stirred" },
      { id: "c", text: "Poured" },
      { id: "d", text: "Made very cold" }
    ],
    answerId: "d",
    explanation: "When water becomes very cold, it freezes and turns into solid ice, like in a freezer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q07",
    prompt: "When ice changes into water, it is called \u2014",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Raining" }
    ],
    answerId: "b",
    explanation: "Ice melts into water when it gets warm. Freezing is the opposite change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q08",
    prompt: "Tina has two jars of water, as shown. Which jar is the better choice to boil and drink, and why?",
    options: [
      { id: "a", text: "Jar 1 \u2014 the brown colour makes it healthy" },
      { id: "b", text: "Jar 1 \u2014 the bits in it give strength" },
      { id: "c", text: "Jar 2 \u2014 it is clear and clean, so it is safer" },
      { id: "d", text: "Both jars are equally safe to drink" }
    ],
    answerId: "c",
    explanation: "Muddy water can carry germs that make us sick. Clear water (Jar 2) is the better choice \u2014 and boiling or filtering it first makes it even safer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two jars of water: Jar 1 is cloudy brown with bits and mud at the bottom, Jar 2 is clear\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect x=\"55\" y=\"46\" width=\"70\" height=\"14\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"52\" y=\"80\" width=\"76\" height=\"108\" rx=\"8\" fill=\"#a16207\" opacity=\"0.55\"/>\n  <rect x=\"52\" y=\"172\" width=\"76\" height=\"16\" rx=\"6\" fill=\"#78350f\" opacity=\"0.8\"/>\n  <circle cx=\"70\" cy=\"100\" r=\"2.5\" fill=\"#78350f\"/>\n  <circle cx=\"95\" cy=\"115\" r=\"2.5\" fill=\"#78350f\"/>\n  <circle cx=\"110\" cy=\"95\" r=\"2.5\" fill=\"#78350f\"/>\n  <circle cx=\"80\" cy=\"140\" r=\"2.5\" fill=\"#78350f\"/>\n  <circle cx=\"105\" cy=\"150\" r=\"2.5\" fill=\"#78350f\"/>\n  <circle cx=\"65\" cy=\"160\" r=\"2.5\" fill=\"#78350f\"/>\n  <circle cx=\"118\" cy=\"130\" r=\"2.5\" fill=\"#78350f\"/>\n  <rect x=\"50\" y=\"60\" width=\"80\" height=\"130\" rx=\"10\" fill=\"none\" stroke=\"#1e3a5f\" stroke-width=\"2.5\"/>\n  <rect x=\"195\" y=\"46\" width=\"70\" height=\"14\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"192\" y=\"80\" width=\"76\" height=\"108\" rx=\"8\" fill=\"#bfdbfe\" opacity=\"0.9\"/>\n  <rect x=\"190\" y=\"60\" width=\"80\" height=\"130\" rx=\"10\" fill=\"none\" stroke=\"#1e3a5f\" stroke-width=\"2.5\"/>\n  <text x=\"90\" y=\"210\" text-anchor=\"middle\" class=\"label\">Jar 1</text>\n  <text x=\"230\" y=\"210\" text-anchor=\"middle\" class=\"label\">Jar 2</text>\n</svg>", "alt": "Two jars of water: Jar 1 is cloudy brown with bits and mud at the bottom, Jar 2 is clear"}
  },
  {
    id: "g4-sci-water-b-q09",
    prompt: "Look at the plant. Which numbered part takes in water from the soil?",
    options: [
      { id: "a", text: "1 \u2014 flower" },
      { id: "b", text: "2 \u2014 leaf" },
      { id: "c", text: "3 \u2014 stem" },
      { id: "d", text: "4 \u2014 roots" }
    ],
    answerId: "d",
    explanation: "The roots (4) grow into the soil and soak up water. The stem then carries the water up to the leaves and flower.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A plant with four numbered parts 1 to 4 and water drops in the soil\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB9\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"140\" class=\"sky\"/>\n  <rect x=\"0\" y=\"140\" width=\"320\" height=\"80\" class=\"soil\"/>\n  <line x1=\"160\" y1=\"140\" x2=\"160\" y2=\"55\" stroke=\"#15803d\" stroke-width=\"5\"/>\n  <ellipse cx=\"135\" cy=\"100\" rx=\"24\" ry=\"9\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\" transform=\"rotate(-20 135 100)\"/>\n  <ellipse cx=\"185\" cy=\"88\" rx=\"24\" ry=\"9\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\" transform=\"rotate(20 185 88)\"/>\n  <circle cx=\"160\" cy=\"33\" r=\"8\" fill=\"#f9a8d4\" stroke=\"#be185d\" stroke-width=\"1.5\"/>\n  <circle cx=\"172\" cy=\"45\" r=\"8\" fill=\"#f9a8d4\" stroke=\"#be185d\" stroke-width=\"1.5\"/>\n  <circle cx=\"160\" cy=\"57\" r=\"8\" fill=\"#f9a8d4\" stroke=\"#be185d\" stroke-width=\"1.5\"/>\n  <circle cx=\"148\" cy=\"45\" r=\"8\" fill=\"#f9a8d4\" stroke=\"#be185d\" stroke-width=\"1.5\"/>\n  <circle cx=\"160\" cy=\"45\" r=\"7\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"1.5\"/>\n  <path d=\"M160 140 L160 185 M160 155 Q140 170 125 190 M160 155 Q180 170 195 192 M160 170 Q150 185 140 205 M160 170 Q172 185 182 207\" stroke=\"#92400e\" stroke-width=\"2.5\" fill=\"none\"/>\n  <ellipse cx=\"105\" cy=\"195\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"220\" cy=\"185\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"112\" cy=\"165\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <ellipse cx=\"214\" cy=\"207\" rx=\"3\" ry=\"4.5\" class=\"water\"/>\n  <path d=\"M110 192 L122 190\" class=\"arrow\" marker-end=\"url(#ahB9)\"/>\n  <path d=\"M215 186 L200 190\" class=\"arrow\" marker-end=\"url(#ahB9)\"/>\n  <line x1=\"195\" y1=\"38\" x2=\"170\" y2=\"44\" class=\"arrow\"/>\n  <line x1=\"95\" y1=\"100\" x2=\"113\" y2=\"104\" class=\"arrow\"/>\n  <line x1=\"200\" y1=\"125\" x2=\"164\" y2=\"125\" class=\"arrow\"/>\n  <line x1=\"240\" y1=\"170\" x2=\"190\" y2=\"185\" class=\"arrow\"/>\n  <circle cx=\"205\" cy=\"36\" r=\"10\" class=\"tag\"/><text x=\"205\" y=\"40.5\" text-anchor=\"middle\" class=\"label\">1</text>\n  <circle cx=\"85\" cy=\"100\" r=\"10\" class=\"tag\"/><text x=\"85\" y=\"104.5\" text-anchor=\"middle\" class=\"label\">2</text>\n  <circle cx=\"210\" cy=\"125\" r=\"10\" class=\"tag\"/><text x=\"210\" y=\"129.5\" text-anchor=\"middle\" class=\"label\">3</text>\n  <circle cx=\"250\" cy=\"168\" r=\"10\" class=\"tag\"/><text x=\"250\" y=\"172.5\" text-anchor=\"middle\" class=\"label\">4</text>\n</svg>", "alt": "A plant with four numbered parts 1 to 4 and water drops in the soil"}
  },
  {
    id: "g4-sci-water-b-q10",
    prompt: "Which is a good habit to save water?",
    options: [
      { id: "a", text: "Washing a car with a bucket and cloth" },
      { id: "b", text: "Leaving the tap open while talking" },
      { id: "c", text: "Playing with a running hose pipe" },
      { id: "d", text: "Throwing leftover drinking water down the drain" }
    ],
    answerId: "a",
    explanation: "A bucket uses much less water than a running hose. Leftover drinking water can be given to plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q11",
    prompt: "Look at the water cycle. What is the stage marked 3 called?",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Condensation" },
      { id: "c", text: "Precipitation" },
      { id: "d", text: "Germination" }
    ],
    answerId: "c",
    explanation: "Stage 3 shows water falling from the cloud as rain. Water falling from clouds as rain, snow or hail is called precipitation. Stage 2 is evaporation and stage 1 is condensation (cloud).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Water cycle diagram with Sun, lake, cloud and mountain, and four numbered stages 1 to 4\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB11\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" class=\"sky\"/>\n  <line x1=\"62.0\" y1=\"40.0\" x2=\"69.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"55.6\" x2=\"60.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"62.0\" x2=\"40.0\" y2=\"69.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"55.6\" x2=\"19.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"18.0\" y1=\"40.0\" x2=\"11.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"24.4\" x2=\"19.5\" y2=\"19.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"18.0\" x2=\"40.0\" y2=\"11.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"24.4\" x2=\"60.5\" y2=\"19.5\" class=\"ray\"/>\n  <circle cx=\"40\" cy=\"40\" r=\"18\" class=\"sun\"/>\n  <text x=\"66\" y=\"22\" class=\"small\">Sun</text>\n  <line x1=\"54\" y1=\"60\" x2=\"82\" y2=\"168\" class=\"ray\" stroke-dasharray=\"5 4\"/>\n  <polygon points=\"190,176 255,110 320,176\" fill=\"#d6d3d1\" stroke=\"#57534e\" stroke-width=\"2\"/>\n  <rect x=\"0\" y=\"175\" width=\"320\" height=\"45\" class=\"land\"/>\n  <ellipse cx=\"90\" cy=\"192\" rx=\"80\" ry=\"16\" class=\"water\"/>\n  <text x=\"102\" y=\"197\" class=\"small\">Lake</text>\n  <path d=\"M100 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahB11)\"/>\n  <path d=\"M120 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahB11)\"/>\n  <path d=\"M140 172 q-6 -10 0 -20 q6 -10 0 -20 q-6 -10 0 -20 q6 -8 0 -14 l0 -4\" class=\"arrow\" stroke-dasharray=\"4 3\" marker-end=\"url(#ahB11)\"/>\n  <path d=\"M125 88 Q160 40 200 54\" class=\"arrow\" marker-end=\"url(#ahB11)\"/>\n  <path class=\"cloud\" d=\"M205 72 a18.2 18.2 0 0 1 7.8 -33.8 a23.4 23.4 0 0 1 44.2 -10.4 a19.5 19.5 0 0 1 33.8 18.2 a15.6 15.6 0 0 1 2.6 26.0 z\"/>\n  <line x1=\"222\" y1=\"78\" x2=\"216\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"240\" y1=\"78\" x2=\"234\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"258\" y1=\"78\" x2=\"252\" y2=\"100\" class=\"rain\"/>\n  <line x1=\"276\" y1=\"78\" x2=\"270\" y2=\"100\" class=\"rain\"/>\n  <path d=\"M240 130 C226 158 200 170 168 184\" stroke=\"#3b82f6\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/>\n  <path d=\"M232 146 C222 162 205 170 186 178\" class=\"arrow\" marker-end=\"url(#ahB11)\"/>\n  <circle cx=\"304\" cy=\"26\" r=\"10\" class=\"tag\"/><text x=\"304\" y=\"30.5\" text-anchor=\"middle\" class=\"label\">1</text>\n  <circle cx=\"160\" cy=\"128\" r=\"10\" class=\"tag\"/><text x=\"160\" y=\"132.5\" text-anchor=\"middle\" class=\"label\">2</text>\n  <circle cx=\"200\" cy=\"92\" r=\"10\" class=\"tag\"/><text x=\"200\" y=\"96.5\" text-anchor=\"middle\" class=\"label\">3</text>\n  <circle cx=\"228\" cy=\"198\" r=\"10\" class=\"tag\"/><text x=\"228\" y=\"202.5\" text-anchor=\"middle\" class=\"label\">4</text>\n</svg>", "alt": "Water cycle diagram with Sun, lake, cloud and mountain, and four numbered stages 1 to 4"}
  },
  {
    id: "g4-sci-water-b-q12",
    prompt: "Which of these gets its water from groundwater?",
    options: [
      { id: "a", text: "Rain gauge" },
      { id: "b", text: "Handpump" },
      { id: "c", text: "Cloud" },
      { id: "d", text: "Ocean" }
    ],
    answerId: "b",
    explanation: "A handpump has a pipe going deep into the ground to bring up groundwater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q13",
    prompt: "A puddle is on the road at 10 a.m. By 3 p.m. on a sunny day, only a faint mark is left. What happened to the water?",
    options: [
      { id: "a", text: "It turned into sand" },
      { id: "b", text: "It evaporated into the air" },
      { id: "c", text: "It became salt" },
      { id: "d", text: "It turned into ice" }
    ],
    answerId: "b",
    explanation: "The Sun's heat turned the puddle water into water vapour, which went into the air. This is evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two pictures of the same road: a puddle at 10 a.m. and only a faint outline at 3 p.m. on a sunny day\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <g transform=\"translate(5,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"210\" rx=\"8\" class=\"sky\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"48.0\" y1=\"50.0\" x2=\"55.0\" y2=\"50.0\" class=\"ray\"/>\n  <line x1=\"42.7\" y1=\"62.7\" x2=\"47.7\" y2=\"67.7\" class=\"ray\"/>\n  <line x1=\"30.0\" y1=\"68.0\" x2=\"30.0\" y2=\"75.0\" class=\"ray\"/>\n  <line x1=\"17.3\" y1=\"62.7\" x2=\"12.3\" y2=\"67.7\" class=\"ray\"/>\n  <line x1=\"12.0\" y1=\"50.0\" x2=\"5.0\" y2=\"50.0\" class=\"ray\"/>\n  <line x1=\"17.3\" y1=\"37.3\" x2=\"12.3\" y2=\"32.3\" class=\"ray\"/>\n  <line x1=\"30.0\" y1=\"32.0\" x2=\"30.0\" y2=\"25.0\" class=\"ray\"/>\n  <line x1=\"42.7\" y1=\"37.3\" x2=\"47.7\" y2=\"32.3\" class=\"ray\"/>\n  <circle cx=\"30\" cy=\"50\" r=\"14\" class=\"sun\"/>\n  <text x=\"100\" y=\"40\" text-anchor=\"middle\" class=\"label\">10 a.m.</text>\n  <rect x=\"0\" y=\"140\" width=\"150\" height=\"70\" fill=\"#9ca3af\"/>\n  <ellipse cx=\"75\" cy=\"175\" rx=\"45\" ry=\"12\" class=\"water\"/>\n  </g>\n  <g transform=\"translate(165,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"210\" rx=\"8\" class=\"sky\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"95.0\" y1=\"40.0\" x2=\"102.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"89.1\" y1=\"54.1\" x2=\"94.1\" y2=\"59.1\" class=\"ray\"/>\n  <line x1=\"75.0\" y1=\"60.0\" x2=\"75.0\" y2=\"67.0\" class=\"ray\"/>\n  <line x1=\"60.9\" y1=\"54.1\" x2=\"55.9\" y2=\"59.1\" class=\"ray\"/>\n  <line x1=\"55.0\" y1=\"40.0\" x2=\"48.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"60.9\" y1=\"25.9\" x2=\"55.9\" y2=\"20.9\" class=\"ray\"/>\n  <line x1=\"75.0\" y1=\"20.0\" x2=\"75.0\" y2=\"13.0\" class=\"ray\"/>\n  <line x1=\"89.1\" y1=\"25.9\" x2=\"94.1\" y2=\"20.9\" class=\"ray\"/>\n  <circle cx=\"75\" cy=\"40\" r=\"16\" class=\"sun\"/>\n  <text x=\"75\" y=\"100\" text-anchor=\"middle\" class=\"label\">3 p.m.</text>\n  <rect x=\"0\" y=\"140\" width=\"150\" height=\"70\" fill=\"#9ca3af\"/>\n  <ellipse cx=\"75\" cy=\"175\" rx=\"45\" ry=\"12\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  </g>\n</svg>", "alt": "Two pictures of the same road: a puddle at 10 a.m. and only a faint outline at 3 p.m. on a sunny day"}
  },
  {
    id: "g4-sci-water-b-q14",
    prompt: "Factories mainly use water for \u2014",
    options: [
      { id: "a", text: "Watching TV" },
      { id: "b", text: "Flying planes" },
      { id: "c", text: "Reading books" },
      { id: "d", text: "Cooling machines and making things" }
    ],
    answerId: "d",
    explanation: "Factories use water to cool hot machines and to make things like paper, cloth and food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q15",
    prompt: "Look at the four pictures. Which picture shows water being WASTED?",
    options: [
      { id: "a", text: "Picture P \u2014 tap left open while soaping hands" },
      { id: "b", text: "Picture Q \u2014 closing the tap tightly" },
      { id: "c", text: "Picture R \u2014 fixing a leaking pipe" },
      { id: "d", text: "Picture S \u2014 bathing with a bucket and mug" }
    ],
    answerId: "a",
    explanation: "In P, water keeps flowing away while the hands are being soaped. We should close the tap and open it only to rinse. Q, R and S all save water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four pictures P, Q, R and S showing different ways people use a tap and water\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB15\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"9\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#1e3a5f\"/></marker></defs>\n  <g transform=\"translate(5,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"12\" width=\"8\" height=\"30\" fill=\"#e5e7eb\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"18\" y=\"20\" width=\"45\" height=\"9\" class=\"metal\"/>\n  <rect x=\"36\" y=\"10\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"55\" y=\"29\" width=\"9\" height=\"10\" class=\"metal\"/>\n  <rect x=\"56\" y=\"39\" width=\"7\" height=\"33\" class=\"water\"/>\n  <path d=\"M15 70 L115 70 L105 92 L25 92 Z\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <ellipse cx=\"98\" cy=\"50\" rx=\"12\" ry=\"8\" fill=\"#f5c69a\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"114\" cy=\"56\" rx=\"12\" ry=\"8\" fill=\"#f5c69a\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n  <circle cx=\"92\" cy=\"40\" r=\"4\" fill=\"#ffffff\" stroke=\"#60a5fa\" stroke-width=\"1.5\"/>\n  <circle cx=\"120\" cy=\"44\" r=\"5\" fill=\"#ffffff\" stroke=\"#60a5fa\" stroke-width=\"1.5\"/>\n  <circle cx=\"106\" cy=\"66\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#60a5fa\" stroke-width=\"1.5\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  </g>\n  <g transform=\"translate(165,5)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"12\" width=\"8\" height=\"30\" fill=\"#e5e7eb\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"18\" y=\"20\" width=\"45\" height=\"9\" class=\"metal\"/>\n  <rect x=\"36\" y=\"10\" width=\"12\" height=\"10\" class=\"metal\"/>\n  <rect x=\"55\" y=\"29\" width=\"9\" height=\"10\" class=\"metal\"/>\n  <path d=\"M15 70 L115 70 L105 92 L25 92 Z\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <ellipse cx=\"42\" cy=\"8\" rx=\"10\" ry=\"6\" fill=\"#f5c69a\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n  <path d=\"M28 18 A16 16 0 0 1 58 10\" class=\"arrow\" marker-end=\"url(#ahB15)\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n  </g>\n  <g transform=\"translate(5,115)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <rect x=\"10\" y=\"40\" width=\"120\" height=\"10\" class=\"metal\"/>\n  <circle cx=\"70\" cy=\"58\" r=\"3\" class=\"water\"/>\n  <circle cx=\"70\" cy=\"70\" r=\"3\" class=\"water\"/>\n  <rect x=\"64\" y=\"34\" width=\"12\" height=\"22\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"74\" y=\"42\" width=\"50\" height=\"8\" rx=\"3\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\" transform=\"rotate(-25 74 46)\"/>\n  <rect x=\"26\" y=\"78\" width=\"40\" height=\"14\" rx=\"2\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">R</text>\n  </g>\n  <g transform=\"translate(165,115)\">\n  <rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" rx=\"8\" class=\"frame\"/>\n  <path d=\"M30 40 L100 40 L92 92 L38 92 Z\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n  <ellipse cx=\"65\" cy=\"42\" rx=\"35\" ry=\"6\" class=\"water\"/>\n  <rect x=\"104\" y=\"66\" width=\"22\" height=\"20\" class=\"metal\"/>\n  <path d=\"M104 70 q-8 0 -8 6 q0 6 8 6\" stroke=\"#334155\" stroke-width=\"2\" fill=\"none\"/>\n  <circle cx=\"140\" cy=\"12\" r=\"10\" class=\"tag\"/><text x=\"140\" y=\"16.5\" text-anchor=\"middle\" class=\"label\">S</text>\n  </g>\n</svg>", "alt": "Four pictures P, Q, R and S showing different ways people use a tap and water"}
  },
  {
    id: "g4-sci-water-b-q16",
    prompt: "Muddy water is collected in a pot. What should be done first to clean it before boiling?",
    options: [
      { id: "a", text: "Add more mud" },
      { id: "b", text: "Shake it hard" },
      { id: "c", text: "Let the mud settle, then pour it through a clean cloth" },
      { id: "d", text: "Add cooking oil" }
    ],
    answerId: "c",
    explanation: "Letting mud settle and filtering through a clean cloth removes dirt. Boiling afterwards kills germs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q17",
    prompt: "Water vapour high in the sky cools down and forms \u2014",
    options: [
      { id: "a", text: "Clouds" },
      { id: "b", text: "Sand" },
      { id: "c", text: "Smoke" },
      { id: "d", text: "Stones" }
    ],
    answerId: "a",
    explanation: "When water vapour cools high up, it condenses into tiny drops that join together to make clouds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q18",
    prompt: "Arjun sees tiny water drops on the grass early in the morning, though it did not rain. Why?",
    options: [
      { id: "a", text: "The grass sweats like we do" },
      { id: "b", text: "Someone always waters it at night" },
      { id: "c", text: "Water vapour in the air cools on the cool grass and forms drops" },
      { id: "d", text: "The drops fall from the Moon" }
    ],
    answerId: "c",
    explanation: "These drops are called dew. Water vapour in the air condenses on the cool grass during the night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q19",
    prompt: "Which of these does NOT help save water?",
    options: [
      { id: "a", text: "Fixing leaking taps" },
      { id: "b", text: "Reusing rinse water for plants" },
      { id: "c", text: "Collecting rainwater in tanks" },
      { id: "d", text: "Washing the courtyard daily with a running hose" }
    ],
    answerId: "d",
    explanation: "A running hose wastes a lot of water. Sweeping first and using a bucket is a better choice.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q20",
    prompt: "Which of these is fresh water, not salty water?",
    options: [
      { id: "a", text: "Sea water" },
      { id: "b", text: "River water" },
      { id: "c", text: "Ocean water" },
      { id: "d", text: "Water from a salt pan" }
    ],
    answerId: "b",
    explanation: "River water is fresh water. Sea water, ocean water and salt pan water have lots of salt in them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q21",
    prompt: "About how much of the Earth's surface is covered with water?",
    options: [
      { id: "a", text: "One-tenth" },
      { id: "b", text: "Half" },
      { id: "c", text: "About three-fourths" },
      { id: "d", text: "One-fourth" }
    ],
    answerId: "c",
    explanation: "About three out of every four parts of Earth's surface is water, mostly salty oceans and seas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q22",
    prompt: "Two same plates have the same amount of water. Plate 1 is in the sun and Plate 2 is in the shade, as shown. What will happen?",
    options: [
      { id: "a", text: "Plate 1 (in the sun) will dry first" },
      { id: "b", text: "Plate 2 (in the shade) will dry first" },
      { id: "c", text: "Both will dry at exactly the same time" },
      { id: "d", text: "Neither plate will ever dry" }
    ],
    answerId: "a",
    explanation: "Heat from the Sun makes water evaporate faster, so Plate 1 in the sun dries first. Plate 2 also dries, but more slowly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two same plates with the same amount of water: Plate 1 in the sun and Plate 2 in the shade of a tree\">\n  <style>\n    .part { fill:#93c5fd; stroke:#1e3a5f; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e3a5f; stroke-width:1.5; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sky { fill:#e0f2fe; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .cloud { fill:#f8fafc; stroke:#475569; stroke-width:2; }\n    .land { fill:#bbf7d0; stroke:#166534; stroke-width:2; }\n    .soil { fill:#e7c9a0; stroke:#7c5a33; stroke-width:1.5; }\n    .metal { fill:#cbd5e1; stroke:#334155; stroke-width:2; }\n    .water { fill:#60a5fa; stroke:#1d4ed8; stroke-width:1.5; }\n    .rain { stroke:#2563eb; stroke-width:2; stroke-linecap:round; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"170\" class=\"sky\"/>\n  <rect x=\"0\" y=\"170\" width=\"320\" height=\"50\" class=\"land\"/>\n  <line x1=\"62.0\" y1=\"40.0\" x2=\"69.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"55.6\" x2=\"60.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"62.0\" x2=\"40.0\" y2=\"69.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"55.6\" x2=\"19.5\" y2=\"60.5\" class=\"ray\"/>\n  <line x1=\"18.0\" y1=\"40.0\" x2=\"11.0\" y2=\"40.0\" class=\"ray\"/>\n  <line x1=\"24.4\" y1=\"24.4\" x2=\"19.5\" y2=\"19.5\" class=\"ray\"/>\n  <line x1=\"40.0\" y1=\"18.0\" x2=\"40.0\" y2=\"11.0\" class=\"ray\"/>\n  <line x1=\"55.6\" y1=\"24.4\" x2=\"60.5\" y2=\"19.5\" class=\"ray\"/>\n  <circle cx=\"40\" cy=\"40\" r=\"18\" class=\"sun\"/>\n  <text x=\"70\" y=\"45\" class=\"small\">sun</text>\n  <ellipse cx=\"235\" cy=\"178\" rx=\"70\" ry=\"10\" fill=\"#334155\" opacity=\"0.25\"/>\n  <rect x=\"245\" y=\"90\" width=\"14\" height=\"85\" fill=\"#92400e\"/>\n  <circle cx=\"252\" cy=\"78\" r=\"40\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"2\"/>\n  <text x=\"168\" y=\"160\" class=\"small\">shade</text>\n  <ellipse cx=\"80\" cy=\"176\" rx=\"40\" ry=\"9\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <ellipse cx=\"80\" cy=\"176\" rx=\"28\" ry=\"5\" class=\"water\"/>\n  <ellipse cx=\"225\" cy=\"176\" rx=\"40\" ry=\"9\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <ellipse cx=\"225\" cy=\"176\" rx=\"28\" ry=\"5\" class=\"water\"/>\n  <text x=\"80\" y=\"205\" text-anchor=\"middle\" class=\"label\">Plate 1</text>\n  <text x=\"225\" y=\"205\" text-anchor=\"middle\" class=\"label\">Plate 2</text>\n</svg>", "alt": "Two same plates with the same amount of water: Plate 1 in the sun and Plate 2 in the shade of a tree"}
  },
  {
    id: "g4-sci-water-b-q23",
    prompt: "Clouds keep collecting water drops and become dark and heavy. Which step of the water cycle comes next?",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Precipitation" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Melting" }
    ],
    answerId: "b",
    explanation: "When drops in a cloud become too heavy, they fall as rain. This step is called precipitation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q24",
    prompt: "In some dry places, people built stepwells and ponds long ago. How did these help them?",
    options: [
      { id: "a", text: "They brought the sea closer" },
      { id: "b", text: "They turned salty water sweet" },
      { id: "c", text: "They stopped all rain from falling" },
      { id: "d", text: "They stored rainwater for the dry months" }
    ],
    answerId: "d",
    explanation: "Stepwells and ponds collected rainwater in the rainy season, so people had water when it did not rain.\n\n## Pictorial notes\n- **Coverage:** 18 original pictorial MCQs (9 per set, 37.5%). All diagrams are hand-built inline SVG for Mindstrong; none are copied or traced from SOF past papers.\n- **Set A visuals:** Q2 village sources map (rain cloud, handpump, tap, river; labels A\u2013D) \u00b7 Q6 uses icons (drink, wash, farm, cook; P\u2013S) \u00b7 Q10 brushing habits with taps (P\u2013S) \u00b7 Q12 full water cycle, stages 1\u20134 (name stage 2) \u00b7 Q14 cold glass with outside drops \u00b7 Q19 dripping tap, bucket at 8 a.m. vs 8 p.m. \u00b7 Q20 full water cycle with stages out of order (sequencing) \u00b7 Q23 covered pan, X steam / Y lid drops \u00b7 Q24 rainwater from roof \u2192 pipe \u2192 recharge pit \u2192 groundwater \u2192 well.\n- **Set B visuals:** Q1 house water supply (tank \u2192 pipe \u2192 tap X) \u00b7 Q2 map with lake P and river Q \u00b7 Q4 well cut-away (soil, rock, groundwater) \u00b7 Q8 muddy vs clear water jars (gentle, no germs/sickness imagery) \u00b7 Q9 plant parts 1\u20134 with soil water drops \u00b7 Q11 full water cycle (name stage 3) \u00b7 Q13 puddle at 10 a.m. vs 3 p.m. \u00b7 Q15 tap habits P\u2013S (wasting vs saving) \u00b7 Q22 plates in sun vs shade.\n- **Water cycle diagram:** Same base scene (Sun, heat arrow, lake, evaporation arrows, cloud, rain, mountain, river back to lake) is reused in A-Q12, A-Q20 and B-Q11 with a DIFFERENT numbering each time, so learners must read the picture, not memorise a number.\n- **Answer balance:** Each set stays at 6 A / 6 B / 6 C / 6 D overall; pictorial items keep the answer letter of the item they replaced.\n- **Accessibility / TTS:** Every SVG has `role=\"img\"` and a neutral `aria-label` that describes the scene without giving the answer. Stems never depend on colour alone \u2014 parts are marked with letters/numbers or text labels.\n- **Rendering:** Each SVG carries its own `<style>` (CDATA) and, where arrows are used, its own uniquely named marker (`ahA12`, `ahA20`, `ahA23`, `ahA24`, `ahB2`, `ahB9`, `ahB11`, `ahB15`) so diagrams do not clash when shown on one page.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udca7",
    title: "Water means life",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "Plants, animals and people all need water. The Sun heats water, it rises as vapour, cools into clouds, then falls back as rain.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Sources", reveal: "Rain, rivers, lakes, wells, groundwater", emoji: "\ud83c\udfde\ufe0f" },
      { label: "Uses", reveal: "Drinking, cooking, cleaning, farms, factories", emoji: "\ud83d\udeb0" },
      { label: "Water cycle", reveal: "Evaporation \u2192 condensation \u2192 precipitation", emoji: "\ud83d\udd04" },
      { label: "Safe & saved", reveal: "Boil dirty water; never waste a drop", emoji: "\ud83e\uddb8" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Water vapour cooling to form clouds is called\u2026",
    options: [
        { id: "a", text: "Evaporation" },
        { id: "b", text: "Condensation" },
        { id: "c", text: "Precipitation" },
        { id: "d", text: "Melting" }
    ],
    answerId: "b",
    why: "Cooling vapour turns into tiny droplets that form clouds: condensation.",
    visual: "water-cycle",
    speak: "Water vapour cooling to form clouds is called\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Water means life", "Evaporation, condensation, precipitation", "Boil to stay safe; save every drop", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceWater: ChapterDef = {
  id: "water-cycle",
  title: "Water: Sources, Uses & Cycle",
  emoji: "\ud83d\udca7",
  blurb: "Where water comes from and where it goes",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "earth-space",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "earth-space",
      questions: SET_B,
    },
  ],
  paperTopics: ["earth-space", "materials"],
};

export const g4ScienceWaterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
