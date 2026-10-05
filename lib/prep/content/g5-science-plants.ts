import type { ChapterDef, PrepQuestion } from "../types";

/** Plants: Seeds & Dispersal - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-plants-a-q01",
    prompt: "The picture shows a soaked bean seed that has been opened. Which letter points to the seed coat?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "b",
    explanation: "Q points to the tough outer skin, which is the seed coat. It protects the baby plant from injury, insects, and drying out. P is a cotyledon, R is the radicle, and S is the plumule.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A soaked bean seed opened up, with four parts marked P, Q, R and S\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Opened soaked bean seed</text>\n  <ellipse class=\"coat\" cx=\"165\" cy=\"118\" rx=\"100\" ry=\"66\"/>\n  <ellipse class=\"part\" cx=\"168\" cy=\"118\" rx=\"84\" ry=\"52\"/>\n  <path class=\"part\" d=\"M98,108 Q80,120 84,140 Q94,132 104,116 Z\"/>\n  <ellipse class=\"green\" cx=\"102\" cy=\"98\" rx=\"9\" ry=\"5\" transform=\"rotate(-30 102 98)\"/>\n  <ellipse class=\"green\" cx=\"114\" cy=\"96\" rx=\"9\" ry=\"5\" transform=\"rotate(20 114 96)\"/>\n  <circle class=\"badge\" cx=\"238\" cy=\"48\" r=\"10\"/><text class=\"label\" x=\"238\" y=\"53\" text-anchor=\"middle\">P</text>\n  <line class=\"arrow\" x1=\"230\" y1=\"57\" x2=\"205\" y2=\"100\"/>\n  <circle class=\"badge\" cx=\"296\" cy=\"170\" r=\"10\"/><text class=\"label\" x=\"296\" y=\"175\" text-anchor=\"middle\">Q</text>\n  <line class=\"arrow\" x1=\"288\" y1=\"163\" x2=\"258\" y2=\"140\"/>\n  <circle class=\"badge\" cx=\"36\" cy=\"176\" r=\"10\"/><text class=\"label\" x=\"36\" y=\"181\" text-anchor=\"middle\">R</text>\n  <line class=\"arrow\" x1=\"44\" y1=\"169\" x2=\"84\" y2=\"138\"/>\n  <circle class=\"badge\" cx=\"40\" cy=\"64\" r=\"10\"/><text class=\"label\" x=\"40\" y=\"69\" text-anchor=\"middle\">S</text>\n  <line class=\"arrow\" x1=\"49\" y1=\"69\" x2=\"100\" y2=\"94\"/>\n</svg>", "alt": "A soaked bean seed opened up, with four parts marked P, Q, R and S"}
  },
  {
    id: "g5-sci-plants-a-q02",
    prompt: "Which part of the embryo grows into the root of a new plant?",
    options: [
      { id: "a", text: "Plumule" },
      { id: "b", text: "Seed coat" },
      { id: "c", text: "Radicle" },
      { id: "d", text: "Cotyledon" }
    ],
    answerId: "c",
    explanation: "The radicle is the baby root. It is the first part to come out of the seed, and it grows downward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q03",
    prompt: "The plumule of a seed develops into the plant's \u2014",
    options: [
      { id: "a", text: "shoot" },
      { id: "b", text: "root" },
      { id: "c", text: "seed coat" },
      { id: "d", text: "fruit" }
    ],
    answerId: "a",
    explanation: "The plumule is the baby shoot. It grows upward and later gives rise to the stem and leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q04",
    prompt: "In a bean seed, most of the stored food is found in the \u2014",
    options: [
      { id: "a", text: "seed coat" },
      { id: "b", text: "radicle" },
      { id: "c", text: "plumule" },
      { id: "d", text: "cotyledons" }
    ],
    answerId: "d",
    explanation: "The two thick cotyledons store food. The young plant uses this food until it can make its own food in its leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q05",
    prompt: "Which set of conditions do most seeds need to germinate?",
    options: [
      { id: "a", text: "Water, light, and soil" },
      { id: "b", text: "Soil, fertiliser, and sunlight" },
      { id: "c", text: "Water, air, and warmth" },
      { id: "d", text: "Air, light, and manure" }
    ],
    answerId: "c",
    explanation: "Water, air, and a suitable temperature wake a seed up. Soil, light, and fertiliser become important later, when the plant grows bigger.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q06",
    prompt: "Seeds stored in a dry, closed jar stay the same for months and do not sprout. Which condition are they mainly missing?",
    options: [
      { id: "a", text: "Sunlight" },
      { id: "b", text: "Water" },
      { id: "c", text: "Soil" },
      { id: "d", text: "Fertiliser" }
    ],
    answerId: "b",
    explanation: "Without water, a seed cannot swell or start using its stored food, so it stays dormant (resting).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q07",
    prompt: "Riya kept a soaked gram seed on wet cotton. On Day 2, she saw part X poke out of the seed and start growing downward. Which part is X?",
    options: [
      { id: "a", text: "Green leaves" },
      { id: "b", text: "Plumule" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Radicle" }
    ],
    answerId: "d",
    explanation: "The radicle (baby root) is the first part to come out of a germinating seed. It grows down, holds the seedling in place, and takes in water. The plumule comes out later and grows up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A swollen gram seed on wet cotton on Day 2, with a small part marked X coming out of it\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Gram seed on wet cotton \u2014 Day 2</text>\n  <rect class=\"cotton\" x=\"40\" y=\"150\" width=\"240\" height=\"30\" rx=\"8\"/>\n  <rect class=\"water\" x=\"40\" y=\"172\" width=\"240\" height=\"8\" rx=\"3\"/>\n  <ellipse class=\"coat\" cx=\"160\" cy=\"112\" rx=\"50\" ry=\"36\"/>\n  <path class=\"arrow\" d=\"M128,86 Q140,100 132,118\"/>\n  <path class=\"white\" d=\"M126,132 Q118,150 124,166 Q132,150 138,136 Z\"/>\n  <circle class=\"badge\" cx=\"76\" cy=\"150\" r=\"10\"/><text class=\"label\" x=\"76\" y=\"155\" text-anchor=\"middle\">X</text>\n  <line class=\"arrow\" x1=\"86\" y1=\"152\" x2=\"120\" y2=\"156\"/>\n  <text class=\"small\" x=\"160\" y=\"205\" text-anchor=\"middle\">(Seed coat has split and something is poking out.)</text>\n</svg>", "alt": "A swollen gram seed on wet cotton on Day 2, with a small part marked X coming out of it"}
  },
  {
    id: "g5-sci-plants-a-q08",
    prompt: "A coconut fruit is mainly dispersed by \u2014",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "explosion" },
      { id: "c", text: "wind" },
      { id: "d", text: "sticking to animals" }
    ],
    answerId: "a",
    explanation: "A coconut has a light, fibrous husk that traps air, so it floats. Sea currents can carry it to faraway shores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q09",
    prompt: "Tommy the dog ran through a patch of Xanthium plants. When he came home, these spiky fruits were stuck in his fur (see the close-up). How are these seeds being dispersed?",
    options: [
      { id: "a", text: "By wind" },
      { id: "b", text: "By animals" },
      { id: "c", text: "By water" },
      { id: "d", text: "By explosion" }
    ],
    answerId: "b",
    explanation: "The tiny hooks on the fruit catch in fur and clothes. The fruits fall off later, far from the parent plant, so the dog has helped disperse them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A dog with several small spiky fruits stuck in its fur, and a close-up of one spiky fruit\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"220\"/>\n  <ellipse class=\"brown\" cx=\"120\" cy=\"120\" rx=\"70\" ry=\"34\"/>\n  <circle class=\"brown\" cx=\"200\" cy=\"90\" r=\"24\"/>\n  <ellipse class=\"dark\" cx=\"214\" cy=\"72\" rx=\"7\" ry=\"13\"/>\n  <circle cx=\"208\" cy=\"88\" r=\"3\" fill=\"#111\"/>\n  <rect class=\"brown\" x=\"70\" y=\"140\" width=\"12\" height=\"40\"/>\n  <rect class=\"brown\" x=\"95\" y=\"145\" width=\"12\" height=\"35\"/>\n  <rect class=\"brown\" x=\"140\" y=\"145\" width=\"12\" height=\"35\"/>\n  <rect class=\"brown\" x=\"165\" y=\"140\" width=\"12\" height=\"40\"/>\n  <path class=\"root\" d=\"M52,112 Q30,90 40,70\"/>\n  <text class=\"label\" x=\"150\" y=\"30\" text-anchor=\"middle\">Tommy after a walk in the field</text>\n  <circle class=\"green\" cx=\"90\" cy=\"108\" r=\"6\"/>\n  <path class=\"arrow\" d=\"M96.0,108.0 L100.0,108.0 M95.2,111.0 L98.7,113.0 M93.0,113.2 L95.0,116.7 M90.0,114.0 L90.0,118.0 M87.0,113.2 L85.0,116.7 M84.8,111.0 L81.3,113.0 M84.0,108.0 L80.0,108.0 M84.8,105.0 L81.3,103.0 M87.0,102.8 L85.0,99.3 M90.0,102.0 L90.0,98.0 M93.0,102.8 L95.0,99.3 M95.2,105.0 L98.7,103.0\"/>\n  <circle class=\"green\" cx=\"120\" cy=\"100\" r=\"6\"/>\n  <path class=\"arrow\" d=\"M126.0,100.0 L130.0,100.0 M125.2,103.0 L128.7,105.0 M123.0,105.2 L125.0,108.7 M120.0,106.0 L120.0,110.0 M117.0,105.2 L115.0,108.7 M114.8,103.0 L111.3,105.0 M114.0,100.0 L110.0,100.0 M114.8,97.0 L111.3,95.0 M117.0,94.8 L115.0,91.3 M120.0,94.0 L120.0,90.0 M123.0,94.8 L125.0,91.3 M125.2,97.0 L128.7,95.0\"/>\n  <circle class=\"green\" cx=\"150\" cy=\"112\" r=\"6\"/>\n  <path class=\"arrow\" d=\"M156.0,112.0 L160.0,112.0 M155.2,115.0 L158.7,117.0 M153.0,117.2 L155.0,120.7 M150.0,118.0 L150.0,122.0 M147.0,117.2 L145.0,120.7 M144.8,115.0 L141.3,117.0 M144.0,112.0 L140.0,112.0 M144.8,109.0 L141.3,107.0 M147.0,106.8 L145.0,103.3 M150.0,106.0 L150.0,102.0 M153.0,106.8 L155.0,103.3 M155.2,109.0 L158.7,107.0\"/>\n  <circle class=\"green\" cx=\"110\" cy=\"130\" r=\"6\"/>\n  <path class=\"arrow\" d=\"M116.0,130.0 L120.0,130.0 M115.2,133.0 L118.7,135.0 M113.0,135.2 L115.0,138.7 M110.0,136.0 L110.0,140.0 M107.0,135.2 L105.0,138.7 M104.8,133.0 L101.3,135.0 M104.0,130.0 L100.0,130.0 M104.8,127.0 L101.3,125.0 M107.0,124.8 L105.0,121.3 M110.0,124.0 L110.0,120.0 M113.0,124.8 L115.0,121.3 M115.2,127.0 L118.7,125.0\"/>\n  <circle class=\"green\" cx=\"165\" cy=\"98\" r=\"6\"/>\n  <path class=\"arrow\" d=\"M171.0,98.0 L175.0,98.0 M170.2,101.0 L173.7,103.0 M168.0,103.2 L170.0,106.7 M165.0,104.0 L165.0,108.0 M162.0,103.2 L160.0,106.7 M159.8,101.0 L156.3,103.0 M159.0,98.0 L155.0,98.0 M159.8,95.0 L156.3,93.0 M162.0,92.8 L160.0,89.3 M165.0,92.0 L165.0,88.0 M168.0,92.8 L170.0,89.3 M170.2,95.0 L173.7,93.0\"/>\n  <circle class=\"dash\" cx=\"270\" cy=\"160\" r=\"32\"/>\n  <circle class=\"green\" cx=\"270\" cy=\"160\" r=\"14\"/>\n  <path class=\"arrow\" d=\"M284.0,160.0 L292.0,160.0 M282.9,165.4 L290.3,168.4 M279.9,169.9 L285.6,175.6 M275.4,172.9 L278.4,180.3 M270.0,174.0 L270.0,182.0 M264.6,172.9 L261.6,180.3 M260.1,169.9 L254.4,175.6 M257.1,165.4 L249.7,168.4 M256.0,160.0 L248.0,160.0 M257.1,154.6 L249.7,151.6 M260.1,150.1 L254.4,144.4 M264.6,147.1 L261.6,139.7 M270.0,146.0 L270.0,138.0 M275.4,147.1 L278.4,139.7 M279.9,150.1 L285.6,144.4 M282.9,154.6 L290.3,151.6\"/>\n  <line class=\"arrow\" x1=\"171\" y1=\"104\" x2=\"240\" y2=\"150\"/>\n  <text class=\"small\" x=\"270\" y=\"210\" text-anchor=\"middle\">close-up</text>\n</svg>", "alt": "A dog with several small spiky fruits stuck in its fur, and a close-up of one spiky fruit"}
  },
  {
    id: "g5-sci-plants-a-q10",
    prompt: "Look at seeds P, Q, R and S. Which two are carried mainly by the wind?",
    options: [
      { id: "a", text: "P and R" },
      { id: "b", text: "R and S" },
      { id: "c", text: "P and Q" },
      { id: "d", text: "Q and S" }
    ],
    answerId: "c",
    explanation: "Seeds with papery wings (P, like drumstick) and seeds with silky hairs (Q, like madar) are light and catch the wind. R (coconut) floats on water, and S (hooked fruit) sticks to animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four picture cards P, Q, R and S showing a winged seed, a seed with silky hairs, a coconut and a hooked fruit\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"24\" text-anchor=\"middle\">Four seeds and fruits</text>\n  <rect class=\"card\" x=\"4\" y=\"40\" width=\"72\" height=\"140\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"40\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"40\" y=\"63\" text-anchor=\"middle\">P</text>\n  <rect class=\"card\" x=\"84\" y=\"40\" width=\"72\" height=\"140\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"120\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"120\" y=\"63\" text-anchor=\"middle\">Q</text>\n  <rect class=\"card\" x=\"164\" y=\"40\" width=\"72\" height=\"140\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"200\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"200\" y=\"63\" text-anchor=\"middle\">R</text>\n  <rect class=\"card\" x=\"244\" y=\"40\" width=\"72\" height=\"140\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"280\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"280\" y=\"63\" text-anchor=\"middle\">S</text>\n  <ellipse class=\"part\" cx=\"26\" cy=\"107\" rx=\"16\" ry=\"8\" transform=\"rotate(-25 26 107)\"/>\n  <ellipse class=\"part\" cx=\"54\" cy=\"107\" rx=\"16\" ry=\"8\" transform=\"rotate(25 54 107)\"/>\n  <ellipse class=\"part\" cx=\"40\" cy=\"128\" rx=\"8\" ry=\"16\"/>\n  <circle class=\"dark\" cx=\"40\" cy=\"115\" r=\"6\"/>\n  <path class=\"hair\" d=\"M120,114 L90.6,97.0 M120,114 L96.0,90.0 M120,114 L103.0,84.6 M120,114 L111.2,81.2 M120,114 L120.0,80.0 M120,114 L128.8,81.2 M120,114 L137.0,84.6 M120,114 L144.0,90.0 M120,114 L149.4,97.0\"/>\n  <ellipse class=\"brown\" cx=\"120\" cy=\"124\" rx=\"5\" ry=\"10\"/>\n  <ellipse class=\"green\" cx=\"200\" cy=\"115\" rx=\"22\" ry=\"27\"/>\n  <path class=\"arrow\" d=\"M190,93 Q200,115 190,137 M210,93 Q200,115 210,137\"/>\n  <circle class=\"green\" cx=\"280\" cy=\"115\" r=\"14\"/>\n  <path class=\"arrow\" d=\"M294.0,115.0 L301.0,115.0 M292.9,120.4 L299.4,123.0 M289.9,124.9 L294.8,129.8 M285.4,127.9 L288.0,134.4 M280.0,129.0 L280.0,136.0 M274.6,127.9 L272.0,134.4 M270.1,124.9 L265.2,129.8 M267.1,120.4 L260.6,123.0 M266.0,115.0 L259.0,115.0 M267.1,109.6 L260.6,107.0 M270.1,105.1 L265.2,100.2 M274.6,102.1 L272.0,95.6 M280.0,101.0 L280.0,94.0 M285.4,102.1 L288.0,95.6 M289.9,105.1 L294.8,100.2 M292.9,109.6 L299.4,107.0\"/>\n  <text class=\"small\" x=\"40\" y=\"170\" text-anchor=\"middle\">papery wings</text>\n  <text class=\"small\" x=\"120\" y=\"170\" text-anchor=\"middle\">silky hairs</text>\n  <text class=\"small\" x=\"200\" y=\"170\" text-anchor=\"middle\">thick husk</text>\n  <text class=\"small\" x=\"280\" y=\"170\" text-anchor=\"middle\">tiny hooks</text>\n</svg>", "alt": "Four picture cards P, Q, R and S showing a winged seed, a seed with silky hairs, a coconut and a hooked fruit"}
  },
  {
    id: "g5-sci-plants-a-q11",
    prompt: "When ripe balsam (touch-me-not) pods are touched, they burst open and throw out their seeds. This method of dispersal is called \u2014",
    options: [
      { id: "a", text: "explosion" },
      { id: "b", text: "water dispersal" },
      { id: "c", text: "wind dispersal" },
      { id: "d", text: "dispersal by birds" }
    ],
    answerId: "a",
    explanation: "The ripe pod bursts suddenly and flings its seeds away from the plant. This is dispersal by explosion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q12",
    prompt: "The carrying of seeds away from the parent plant to new places is called \u2014",
    options: [
      { id: "a", text: "germination" },
      { id: "b", text: "pollination" },
      { id: "c", text: "photosynthesis" },
      { id: "d", text: "seed dispersal" }
    ],
    answerId: "d",
    explanation: "Seed dispersal means spreading seeds to new places. Germination is sprouting, and photosynthesis is how leaves make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q13",
    prompt: "Why is seed dispersal useful for plants?",
    options: [
      { id: "a", text: "It makes seeds heavier." },
      { id: "b", text: "It makes the parent plant grow taller." },
      { id: "c", text: "It keeps all the seeds inside the fruit." },
      { id: "d", text: "It reduces crowding and competition for light, water, and space." }
    ],
    answerId: "d",
    explanation: "Seeds that land in new places do not have to compete with the parent or with each other. This gives them a better chance to grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q14",
    prompt: "Riya soaked some gram (chana) seeds overnight. The next morning, they were bigger and their skin was wrinkled and loose. Why do we soak seeds before sprouting them?",
    options: [
      { id: "a", text: "To wash away their stored food" },
      { id: "b", text: "The seeds absorb water, which softens the seed coat and starts germination" },
      { id: "c", text: "To kill the germs and the embryo" },
      { id: "d", text: "To make the seeds heavy so they sink in soil" }
    ],
    answerId: "b",
    explanation: "Soaking lets the seed take in water and swell. The softer seed coat then splits more easily so the embryo can grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q15",
    prompt: "The picture shows a coconut cut in half. Which labelled layer is light, full of fibres and trapped air, and helps the coconut float on the sea?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "c",
    explanation: "R is the thick, fibrous husk. Its fibres trap air, so the coconut floats and sea currents can carry it far away. S is the hard shell, P is the white kernel (stored food), and Q is the coconut water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A coconut cut in half showing four layers marked P, Q, R and S\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">A coconut cut in half</text>\n  <ellipse class=\"green\" cx=\"150\" cy=\"120\" rx=\"95\" ry=\"78\"/>\n  <path class=\"hair\" d=\"M70,90 Q80,120 70,150 M85,75 Q95,120 85,165 M215,90 Q205,120 215,150 M200,72 Q190,120 200,168 M120,52 Q150,60 180,52 M120,188 Q150,180 180,188\"/>\n  <ellipse class=\"dark\" cx=\"150\" cy=\"120\" rx=\"52\" ry=\"44\"/>\n  <ellipse class=\"white\" cx=\"150\" cy=\"120\" rx=\"42\" ry=\"34\"/>\n  <ellipse class=\"water\" cx=\"150\" cy=\"120\" rx=\"28\" ry=\"20\"/>\n  <circle class=\"badge\" cx=\"290\" cy=\"40\" r=\"10\"/><text class=\"label\" x=\"290\" y=\"45\" text-anchor=\"middle\">P</text>\n  <line class=\"arrow\" x1=\"281\" y1=\"46\" x2=\"186\" y2=\"112\"/>\n  <circle class=\"badge\" cx=\"290\" cy=\"110\" r=\"10\"/><text class=\"label\" x=\"290\" y=\"115\" text-anchor=\"middle\">Q</text>\n  <line class=\"arrow\" x1=\"280\" y1=\"112\" x2=\"168\" y2=\"118\"/>\n  <circle class=\"badge\" cx=\"290\" cy=\"180\" r=\"10\"/><text class=\"label\" x=\"290\" y=\"185\" text-anchor=\"middle\">R</text>\n  <line class=\"arrow\" x1=\"281\" y1=\"176\" x2=\"228\" y2=\"150\"/>\n  <circle class=\"badge\" cx=\"30\" cy=\"40\" r=\"10\"/><text class=\"label\" x=\"30\" y=\"45\" text-anchor=\"middle\">S</text>\n  <line class=\"arrow\" x1=\"39\" y1=\"46\" x2=\"110\" y2=\"98\"/>\n</svg>", "alt": "A coconut cut in half showing four layers marked P, Q, R and S"}
  },
  {
    id: "g5-sci-plants-a-q16",
    prompt: "Look at the two soaked seeds. Seed Y (bean) splits into two halves, but Seed X (maize) stays in one piece. How many cotyledons does Seed X have?",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "Two" },
      { id: "c", text: "Three" },
      { id: "d", text: "None" }
    ],
    answerId: "a",
    explanation: "A seed that splits into two halves, like bean or gram, has two cotyledons. Maize, wheat, and rice have only one cotyledon, so they do not split into halves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two soaked seeds: a maize grain that stays in one piece and a bean that splits into two halves\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Two soaked seeds</text>\n  <path class=\"part\" d=\"M60,60 Q95,50 110,80 L100,170 Q80,185 60,170 L50,80 Q50,65 60,60 Z\"/>\n  <ellipse class=\"white\" cx=\"80\" cy=\"150\" rx=\"12\" ry=\"16\"/>\n  <text class=\"small\" x=\"80\" y=\"198\" text-anchor=\"middle\">Seed X: maize grain</text>\n  <text class=\"small\" x=\"80\" y=\"212\" text-anchor=\"middle\">stays in one piece</text>\n  <path class=\"part\" d=\"M190,70 Q215,60 225,90 Q235,130 220,160 Q200,180 190,160 Z\"/>\n  <path class=\"part\" d=\"M240,70 Q265,60 275,90 Q285,130 270,160 Q250,180 240,160 Z\" transform=\"translate(5,0)\"/>\n  <text class=\"small\" x=\"235\" y=\"198\" text-anchor=\"middle\">Seed Y: bean</text>\n  <text class=\"small\" x=\"235\" y=\"212\" text-anchor=\"middle\">splits into 2 halves</text>\n</svg>", "alt": "Two soaked seeds: a maize grain that stays in one piece and a bean that splits into two halves"}
  },
  {
    id: "g5-sci-plants-a-q17",
    prompt: "Birds eat ripe guavas. Later, guava plants start growing in places far from the tree, where the birds left their droppings. Which kind of dispersal is this?",
    options: [
      { id: "a", text: "Wind" },
      { id: "b", text: "Water" },
      { id: "c", text: "Animals" },
      { id: "d", text: "Explosion" }
    ],
    answerId: "c",
    explanation: "The hard seeds pass unharmed through the bird's body and are dropped far away. This is dispersal by animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q18",
    prompt: "Arjun set up these three cups of moong seeds in a warm room. After three days, in which cup(s) will the seeds sprout?",
    options: [
      { id: "a", text: "Cup 1 only" },
      { id: "b", text: "Cup 3 only" },
      { id: "c", text: "All three cups" },
      { id: "d", text: "Cup 2 only" }
    ],
    answerId: "d",
    explanation: "Only Cup 2 has water, air, and warmth together. Cup 1 has no water. In Cup 3, boiling removed most of the air from the water, and the seeds are cut off from the air above.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three cups of moong seeds: cup 1 on dry cotton, cup 2 on wet cotton, cup 3 fully under boiled and cooled water\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Arjun\u2019s cups in a warm room</text>\n  <path class=\"glass\" d=\"M30,60 L36,130 L74,130 L80,60\"/>\n  <path class=\"glass\" d=\"M135,60 L141,130 L179,130 L185,60\"/>\n  <path class=\"glass\" d=\"M240,60 L246,130 L284,130 L290,60\"/>\n  <rect class=\"cotton\" x=\"38\" y=\"112\" width=\"34\" height=\"16\"/>\n  <rect class=\"cotton\" x=\"143\" y=\"112\" width=\"34\" height=\"16\"/>\n  <rect class=\"water\" x=\"143\" y=\"122\" width=\"34\" height=\"6\"/>\n  <path class=\"water\" d=\"M242,66 L247,128 L283,128 L288,66 Z\"/>\n  <ellipse class=\"green\" cx=\"46\" cy=\"109\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"55\" cy=\"109\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"64\" cy=\"109\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"151\" cy=\"109\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"160\" cy=\"109\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"169\" cy=\"109\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"254\" cy=\"124\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"265\" cy=\"124\" rx=\"4\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"276\" cy=\"124\" rx=\"4\" ry=\"3\"/>\n  <circle class=\"badge\" cx=\"55\" cy=\"150\" r=\"10\"/><text class=\"label\" x=\"55\" y=\"155\" text-anchor=\"middle\">1</text>\n  <circle class=\"badge\" cx=\"160\" cy=\"150\" r=\"10\"/><text class=\"label\" x=\"160\" y=\"155\" text-anchor=\"middle\">2</text>\n  <circle class=\"badge\" cx=\"265\" cy=\"150\" r=\"10\"/><text class=\"label\" x=\"265\" y=\"155\" text-anchor=\"middle\">3</text>\n  <text class=\"small\" x=\"55\" y=\"180\" text-anchor=\"middle\">dry cotton</text>\n  <text class=\"small\" x=\"160\" y=\"180\" text-anchor=\"middle\">wet cotton</text>\n  <text class=\"small\" x=\"265\" y=\"180\" text-anchor=\"middle\">under boiled,</text>\n  <text class=\"small\" x=\"265\" y=\"194\" text-anchor=\"middle\">cooled water</text>\n</svg>", "alt": "Three cups of moong seeds: cup 1 on dry cotton, cup 2 on wet cotton, cup 3 fully under boiled and cooled water"}
  },
  {
    id: "g5-sci-plants-a-q19",
    prompt: "Seeds placed on wet cotton inside a refrigerator did not sprout, but the same seeds on wet cotton on a kitchen shelf did. Which condition was missing in the refrigerator?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Warmth (a suitable temperature)" },
      { id: "c", text: "Air" },
      { id: "d", text: "Soil" }
    ],
    answerId: "b",
    explanation: "Both sets of seeds had water and air. The refrigerator was too cold, and seeds need a suitable warm temperature to germinate.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q20",
    prompt: "Which of these is NOT needed for most seeds to start germinating?",
    options: [
      { id: "a", text: "Sunlight" },
      { id: "b", text: "Water" },
      { id: "c", text: "Air" },
      { id: "d", text: "A suitable temperature" }
    ],
    answerId: "a",
    explanation: "Most seeds can sprout even in the dark because they use their stored food. Sunlight becomes necessary once the leaves need to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q21",
    prompt: "These four cards show a bean seed germinating, but they are mixed up. Which order is correct?",
    options: [
      { id: "a", text: "X \u2192 Z \u2192 W \u2192 Y" },
      { id: "b", text: "Y \u2192 X \u2192 W \u2192 Z" },
      { id: "c", text: "Z \u2192 Y \u2192 X \u2192 W" },
      { id: "d", text: "W \u2192 X \u2192 Y \u2192 Z" }
    ],
    answerId: "a",
    explanation: "First the seed soaks up water and swells (X). Then the seed coat splits (Z), the root comes out and grows down (W), and finally the shoot grows up (Y).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four mixed-up cards W, X, Y and Z showing stages of a bean seed germinating\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"24\" text-anchor=\"middle\">Mixed-up germination cards</text>\n  <rect class=\"card\" x=\"10\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"45\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"45\" y=\"63\" text-anchor=\"middle\">W</text>\n  <rect class=\"soil\" x=\"10\" y=\"140\" width=\"70\" height=\"30\"/>\n  <rect class=\"card\" x=\"88\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"123\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"123\" y=\"63\" text-anchor=\"middle\">X</text>\n  <rect class=\"soil\" x=\"88\" y=\"140\" width=\"70\" height=\"30\"/>\n  <rect class=\"card\" x=\"166\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"201\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"201\" y=\"63\" text-anchor=\"middle\">Y</text>\n  <rect class=\"soil\" x=\"166\" y=\"140\" width=\"70\" height=\"30\"/>\n  <rect class=\"card\" x=\"244\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"279\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"279\" y=\"63\" text-anchor=\"middle\">Z</text>\n  <rect class=\"soil\" x=\"244\" y=\"140\" width=\"70\" height=\"30\"/>\n  <ellipse class=\"coat\" cx=\"45\" cy=\"115\" rx=\"18\" ry=\"13\"/>\n  <path class=\"root\" d=\"M38,126 Q34,145 38,162\"/>\n  <ellipse class=\"coat\" cx=\"123\" cy=\"115\" rx=\"20\" ry=\"15\"/>\n  <path class=\"water\" d=\"M105,88 q4,-8 8,0 a4,4 0 1,1 -8,0 Z M133,82 q4,-8 8,0 a4,4 0 1,1 -8,0 Z\"/>\n  <ellipse class=\"coat\" cx=\"201\" cy=\"120\" rx=\"16\" ry=\"11\"/>\n  <path class=\"root\" d=\"M196,130 Q192,148 198,165\"/>\n  <path class=\"shoot\" d=\"M204,110 Q206,90 201,72\"/>\n  <ellipse class=\"green\" cx=\"193\" cy=\"74\" rx=\"8\" ry=\"4\"/>\n  <ellipse class=\"green\" cx=\"209\" cy=\"74\" rx=\"8\" ry=\"4\"/>\n  <ellipse class=\"coat\" cx=\"279\" cy=\"115\" rx=\"20\" ry=\"15\"/>\n  <path class=\"arrow\" d=\"M272,101 L280,110 L274,118 L282,128\" stroke-width=\"2.5\"/>\n  <text class=\"small\" x=\"45\" y=\"188\" text-anchor=\"middle\">root out</text>\n  <text class=\"small\" x=\"123\" y=\"188\" text-anchor=\"middle\">soaks water</text>\n  <text class=\"small\" x=\"201\" y=\"188\" text-anchor=\"middle\">shoot up</text>\n  <text class=\"small\" x=\"279\" y=\"188\" text-anchor=\"middle\">coat splits</text>\n</svg>", "alt": "Four mixed-up cards W, X, Y and Z showing stages of a bean seed germinating"}
  },
  {
    id: "g5-sci-plants-a-q22",
    prompt: "When the pea pod at the top dries, it bursts open and flings its seeds. Which fruit below scatters its seeds in the SAME way?",
    options: [
      { id: "a", text: "P \u2013 coconut" },
      { id: "b", text: "Q \u2013 cotton" },
      { id: "c", text: "R \u2013 castor" },
      { id: "d", text: "S \u2013 mango" }
    ],
    answerId: "c",
    explanation: "A dry castor fruit splits open suddenly and throws out its seeds, just like a pea pod. Coconut travels by water, cotton by wind, and mango by animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A pea pod bursting open at the top, and four fruit cards P, Q, R and S below: coconut, cotton, castor and mango\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"18\" text-anchor=\"middle\">This pea pod bursts open:</text>\n  <path class=\"green\" d=\"M110,45 Q160,30 210,45 Q160,52 110,45 Z\"/>\n  <path class=\"green\" d=\"M110,45 Q160,62 210,55 Q160,72 110,45 Z\"/>\n  <circle class=\"green\" cx=\"95\" cy=\"35\" r=\"4\"/>\n  <circle class=\"green\" cx=\"225\" cy=\"32\" r=\"4\"/>\n  <circle class=\"green\" cx=\"232\" cy=\"62\" r=\"4\"/>\n  <path class=\"arrow\" d=\"M105,42 L98,37 M215,44 L222,36 M215,55 L228,60\"/>\n  <rect class=\"card\" x=\"10\" y=\"82\" width=\"66\" height=\"128\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"43\" cy=\"98\" r=\"10\"/><text class=\"label\" x=\"43\" y=\"103\" text-anchor=\"middle\">P</text>\n  <rect class=\"card\" x=\"88\" y=\"82\" width=\"66\" height=\"128\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"121\" cy=\"98\" r=\"10\"/><text class=\"label\" x=\"121\" y=\"103\" text-anchor=\"middle\">Q</text>\n  <rect class=\"card\" x=\"166\" y=\"82\" width=\"66\" height=\"128\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"199\" cy=\"98\" r=\"10\"/><text class=\"label\" x=\"199\" y=\"103\" text-anchor=\"middle\">R</text>\n  <rect class=\"card\" x=\"244\" y=\"82\" width=\"66\" height=\"128\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"277\" cy=\"98\" r=\"10\"/><text class=\"label\" x=\"277\" y=\"103\" text-anchor=\"middle\">S</text>\n  <ellipse class=\"green\" cx=\"43\" cy=\"150\" rx=\"22\" ry=\"27\"/>\n  <path class=\"arrow\" d=\"M33,128 Q43,150 33,172 M53,128 Q43,150 53,172\"/>\n  <path class=\"hair\" d=\"M121,144 L91.6,127.0 M121,144 L97.0,120.0 M121,144 L104.0,114.6 M121,144 L112.2,111.2 M121,144 L121.0,110.0 M121,144 L129.8,111.2 M121,144 L138.0,114.6 M121,144 L145.0,120.0 M121,144 L150.4,127.0\"/>\n  <ellipse class=\"brown\" cx=\"121\" cy=\"154\" rx=\"5\" ry=\"10\"/>\n  <circle class=\"green\" cx=\"199\" cy=\"148\" r=\"16\"/>\n  <path class=\"arrow\" d=\"M215.0,148.0 L220.0,148.0 M213.4,154.9 L217.9,157.1 M209.0,160.5 L212.1,164.4 M202.6,163.6 L203.7,168.5 M195.4,163.6 L194.3,168.5 M189.0,160.5 L185.9,164.4 M184.6,154.9 L180.1,157.1 M183.0,148.0 L178.0,148.0 M184.6,141.1 L180.1,138.9 M189.0,135.5 L185.9,131.6 M195.4,132.4 L194.3,127.5 M202.6,132.4 L203.7,127.5 M209.0,135.5 L212.1,131.6 M213.4,141.1 L217.9,138.9\"/>\n  <path class=\"arrow\" d=\"M199,132 L199,148 L185,158 M199,148 L213,158\" stroke-width=\"2\"/>\n  <path class=\"part\" d=\"M262,140 Q277,118 295,135 Q300,165 277,172 Q258,165 262,140 Z\" style=\"fill:#facc15\"/>\n  <text class=\"small\" x=\"43\" y=\"200\" text-anchor=\"middle\">coconut</text>\n  <text class=\"small\" x=\"121\" y=\"200\" text-anchor=\"middle\">cotton</text>\n  <text class=\"small\" x=\"199\" y=\"200\" text-anchor=\"middle\">castor</text>\n  <text class=\"small\" x=\"277\" y=\"200\" text-anchor=\"middle\">mango</text>\n</svg>", "alt": "A pea pod bursting open at the top, and four fruit cards P, Q, R and S below: coconut, cotton, castor and mango"}
  },
  {
    id: "g5-sci-plants-a-q23",
    prompt: "Which statement about germination is correct?",
    options: [
      { id: "a", text: "Seeds cannot germinate without soil." },
      { id: "b", text: "Seeds need fertiliser to germinate." },
      { id: "c", text: "Seeds always germinate faster in the dark." },
      { id: "d", text: "A seed can germinate on wet cotton without soil because it uses its own stored food." }
    ],
    answerId: "d",
    explanation: "The cotyledons feed the young seedling at first. Wet cotton supplies water, the air supplies oxygen, and the room supplies warmth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-a-q24",
    prompt: "Compare a dandelion seed with a coconut. Which statement is TRUE?",
    options: [
      { id: "a", text: "Both are dispersed by wind." },
      { id: "b", text: "The dandelion seed is tiny with parachute-like hairs for wind; the coconut is large and floats on water." },
      { id: "c", text: "Both are dispersed by sticking to animals." },
      { id: "d", text: "Both are dispersed by bursting pods." }
    ],
    answerId: "b",
    explanation: "A seed's features match how it travels. A light seed with hairs rides the wind, and a large fruit with an air-filled husk floats.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-plants-b-q01",
    prompt: "Shalu opened a soaked bean seed. The tiny part inside the dashed circle X has a baby root and a baby shoot. What is X called?",
    options: [
      { id: "a", text: "Fruit" },
      { id: "b", text: "Flower" },
      { id: "c", text: "Embryo" },
      { id: "d", text: "Pod" }
    ],
    answerId: "c",
    explanation: "The embryo is the baby plant inside the seed. Its radicle becomes the root and its plumule becomes the shoot. The rest of the seed half (the cotyledon) is its stored food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"One half of an opened bean seed with a tiny part inside a dashed circle marked X\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Half of an opened bean seed</text>\n  <path class=\"part\" d=\"M70,120 Q70,55 160,55 Q260,55 260,120 Q260,185 160,185 Q70,185 70,120 Z\"/>\n  <path class=\"part\" d=\"M86,112 Q76,126 82,146 Q92,136 98,120 Z\"/>\n  <ellipse class=\"green\" cx=\"96\" cy=\"104\" rx=\"9\" ry=\"5\" transform=\"rotate(-30 96 104)\"/>\n  <ellipse class=\"green\" cx=\"108\" cy=\"102\" rx=\"9\" ry=\"5\" transform=\"rotate(20 108 102)\"/>\n  <circle class=\"dash\" cx=\"95\" cy=\"122\" r=\"30\"/>\n  <circle class=\"badge\" cx=\"40\" cy=\"60\" r=\"10\"/><text class=\"label\" x=\"40\" y=\"65\" text-anchor=\"middle\">X</text>\n  <line class=\"arrow\" x1=\"48\" y1=\"67\" x2=\"74\" y2=\"100\"/>\n  <text class=\"small\" x=\"185\" y=\"125\" text-anchor=\"middle\">stored food</text>\n</svg>", "alt": "One half of an opened bean seed with a tiny part inside a dashed circle marked X"}
  },
  {
    id: "g5-sci-plants-b-q02",
    prompt: "What is the main job of the seed coat?",
    options: [
      { id: "a", text: "To protect the inner parts of the seed from injury and drying out" },
      { id: "b", text: "To make food using sunlight" },
      { id: "c", text: "To absorb minerals from the soil" },
      { id: "d", text: "To attract insects to the flower" }
    ],
    answerId: "a",
    explanation: "The seed coat is a protective cover. Making food is the job of leaves, and absorbing minerals is the job of roots.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q03",
    prompt: "A soaked bean seed splits easily into two halves. These two halves are the \u2014",
    options: [
      { id: "a", text: "seed coats" },
      { id: "b", text: "radicles" },
      { id: "c", text: "plumules" },
      { id: "d", text: "cotyledons" }
    ],
    answerId: "d",
    explanation: "A bean has two cotyledons, which are seed leaves full of stored food. The tiny embryo lies tucked between them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q04",
    prompt: "The process in which a seed sprouts and begins to grow into a young plant is called \u2014",
    options: [
      { id: "a", text: "dispersal" },
      { id: "b", text: "germination" },
      { id: "c", text: "pollination" },
      { id: "d", text: "respiration" }
    ],
    answerId: "b",
    explanation: "Germination is the start of growth from a seed. Dispersal is about seeds moving to new places.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q05",
    prompt: "Why does a germinating seed need air?",
    options: [
      { id: "a", text: "It uses oxygen from the air to breathe and get energy from its stored food." },
      { id: "b", text: "It needs carbon dioxide to make soil." },
      { id: "c", text: "Air dries the seed so it can grow." },
      { id: "d", text: "Air pushes the seed coat off." }
    ],
    answerId: "a",
    explanation: "Like all living things, a seed breathes. It uses oxygen to release energy from its stored food for growth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q06",
    prompt: "Ravi planted a bean seed upside-down in a glass jar of soil. The picture shows it after 7 days. What does it show?",
    options: [
      { id: "a", text: "The root kept growing up, out of the soil." },
      { id: "b", text: "Both the root and the shoot grew downward." },
      { id: "c", text: "The shoot (part 1) turned and grew up toward light, while the root (part 2) turned and grew down." },
      { id: "d", text: "The seed coat turned into the first leaves." }
    ],
    answerId: "c",
    explanation: "However a seed lies in the soil, the plumule bends to grow up toward light and air, and the radicle bends to grow down into the soil for water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A glass jar of soil with a bean seed planted upside-down; after 7 days the root has curved downward and the shoot has curved upward out of the soil\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Seed planted upside-down \u2014 Day 7</text>\n  <rect class=\"soil\" x=\"80\" y=\"80\" width=\"160\" height=\"120\"/>\n  <rect class=\"glass\" x=\"80\" y=\"40\" width=\"160\" height=\"160\" rx=\"6\"/>\n  <ellipse class=\"coat\" cx=\"160\" cy=\"135\" rx=\"18\" ry=\"12\"/>\n  <path class=\"shoot\" d=\"M160,147 Q150,165 132,150 Q118,130 130,100 Q138,82 140,60\"/>\n  <ellipse class=\"green\" cx=\"132\" cy=\"58\" rx=\"10\" ry=\"5\"/>\n  <ellipse class=\"green\" cx=\"150\" cy=\"58\" rx=\"10\" ry=\"5\"/>\n  <path class=\"root\" d=\"M162,123 Q175,100 192,118 Q205,140 200,190\"/>\n  <circle class=\"badge\" cx=\"40\" cy=\"70\" r=\"10\"/><text class=\"label\" x=\"40\" y=\"75\" text-anchor=\"middle\">1</text>\n  <line class=\"arrow\" x1=\"50\" y1=\"70\" x2=\"132\" y2=\"72\"/>\n  <circle class=\"badge\" cx=\"280\" cy=\"170\" r=\"10\"/><text class=\"label\" x=\"280\" y=\"175\" text-anchor=\"middle\">2</text>\n  <line class=\"arrow\" x1=\"270\" y1=\"172\" x2=\"203\" y2=\"180\"/>\n  <text class=\"small\" x=\"40\" y=\"95\" text-anchor=\"middle\">part 1</text>\n  <text class=\"small\" x=\"280\" y=\"195\" text-anchor=\"middle\">part 2</text>\n</svg>", "alt": "A glass jar of soil with a bean seed planted upside-down; after 7 days the root has curved downward and the shoot has curved upward out of the soil"}
  },
  {
    id: "g5-sci-plants-b-q07",
    prompt: "Lotus grows in ponds. Its fruit is light and spongy and can float. How are lotus seeds mainly dispersed?",
    options: [
      { id: "a", text: "By explosion" },
      { id: "b", text: "By water" },
      { id: "c", text: "By hooks catching on animals" },
      { id: "d", text: "By wind" }
    ],
    answerId: "b",
    explanation: "The spongy, floating fruit drifts on the water and carries its seeds to new spots in the pond or stream.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q08",
    prompt: "Seeds of the silk cotton (semal) tree are wrapped in white, fluffy fibres. These seeds are dispersed by \u2014",
    options: [
      { id: "a", text: "explosion" },
      { id: "b", text: "water" },
      { id: "c", text: "animals" },
      { id: "d", text: "wind" }
    ],
    answerId: "d",
    explanation: "The fluffy fibres make the seeds very light, so even a gentle breeze can carry them far away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q09",
    prompt: "A squirrel buries nuts to eat later but forgets some of them. Months later, new trees grow there. This is seed dispersal by \u2014",
    options: [
      { id: "a", text: "wind" },
      { id: "b", text: "water" },
      { id: "c", text: "animals" },
      { id: "d", text: "explosion" }
    ],
    answerId: "c",
    explanation: "The squirrel carried the nuts and buried them in new places. That makes it an animal helper in dispersal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q10",
    prompt: "When Ruellia (pataka) pods get wet, they snap open with a crackling sound and throw their seeds far away. This is dispersal by \u2014",
    options: [
      { id: "a", text: "explosion" },
      { id: "b", text: "wind" },
      { id: "c", text: "water" },
      { id: "d", text: "animals" }
    ],
    answerId: "a",
    explanation: "The pod bursts and flings out its seeds. Water only triggers the burst; the seeds are not carried by water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q11",
    prompt: "Which feature helps a seed or fruit \"hitch a ride\" on an animal?",
    options: [
      { id: "a", text: "Thin wings" },
      { id: "b", text: "Parachute-like hairs" },
      { id: "c", text: "A floating, air-filled husk" },
      { id: "d", text: "Hooks or spines" }
    ],
    answerId: "d",
    explanation: "Hooks and spines cling to fur, feathers, and clothes. Wings and hairs suit wind, and a floating husk suits water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q12",
    prompt: "Seeds carried by the wind are usually small and very light. Why does this help them?",
    options: [
      { id: "a", text: "Light seeds sink quickly into the soil." },
      { id: "b", text: "The moving air can easily lift and carry light seeds far away." },
      { id: "c", text: "Animals like to eat light seeds." },
      { id: "d", text: "Light seeds float better on ponds." }
    ],
    answerId: "b",
    explanation: "A heavy seed would drop straight down. A small, light seed, often with hairs or wings, is easily lifted and carried by the wind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q13",
    prompt: "Aman placed moong seeds on wet cotton in two cups in the same warm room. He kept one cup in a dark cupboard and one near a window. Seeds in both cups sprouted. What can he conclude?",
    options: [
      { id: "a", text: "Light is needed for seeds to germinate." },
      { id: "b", text: "Light is not needed for these seeds to germinate." },
      { id: "c", text: "The cupboard seeds must be dead." },
      { id: "d", text: "Water is not needed for germination." }
    ],
    answerId: "b",
    explanation: "The only difference between the cups was light, and both sets sprouted. So light was not needed to start germination.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q14",
    prompt: "Rain leaked into a farmer's store-room and soaked a sack of wheat seeds two months before sowing time. What is most likely to happen to these seeds?",
    options: [
      { id: "a", text: "They will stay dormant and safe until sowing." },
      { id: "b", text: "They will turn into cotyledons." },
      { id: "c", text: "They will become lighter and blow away." },
      { id: "d", text: "They may start sprouting or rotting inside the sack and get spoiled." }
    ],
    answerId: "d",
    explanation: "Water wakes seeds up. Wet seeds in a warm sack may sprout or rot, so farmers keep seeds dry until sowing time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q15",
    prompt: "Look at part X of the same bean seedling on Day 3, Day 8 and Day 14. Why does part X get smaller and smaller?",
    options: [
      { id: "a", text: "The young plant uses up the food stored in it." },
      { id: "b", text: "It absorbs too much water." },
      { id: "c", text: "Sunlight burns it." },
      { id: "d", text: "Birds peck at it." }
    ],
    answerId: "a",
    explanation: "Part X is a cotyledon, the seedling's food store. As the seedling uses this food, the cotyledons shrink. By then the green leaves are big enough to make food for the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"The same bean seedling on Day 3, Day 8 and Day 14; part X near the base gets smaller as green leaves grow bigger\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">The same bean seedling</text>\n  <rect class=\"soil\" x=\"7\" y=\"150\" width=\"96\" height=\"30\"/>\n  <path class=\"shoot\" d=\"M55,150 L55,110\"/>\n  <ellipse class=\"part\" cx=\"37.0\" cy=\"125\" rx=\"14.0\" ry=\"9.0\"/>\n  <ellipse class=\"part\" cx=\"73.0\" cy=\"125\" rx=\"14.0\" ry=\"9.0\"/>\n  <text class=\"label\" x=\"55\" y=\"200\" text-anchor=\"middle\">Day 3</text>\n  <rect class=\"soil\" x=\"112\" y=\"150\" width=\"96\" height=\"30\"/>\n  <path class=\"shoot\" d=\"M160,150 L160,95\"/>\n  <ellipse class=\"part\" cx=\"146.2\" cy=\"125\" rx=\"9.8\" ry=\"6.3\"/>\n  <ellipse class=\"part\" cx=\"173.8\" cy=\"125\" rx=\"9.8\" ry=\"6.3\"/>\n  <text class=\"label\" x=\"160\" y=\"200\" text-anchor=\"middle\">Day 8</text>\n  <ellipse class=\"green\" cx=\"145\" cy=\"95\" rx=\"12\" ry=\"6\"/>\n  <ellipse class=\"green\" cx=\"175\" cy=\"95\" rx=\"12\" ry=\"6\"/>\n  <rect class=\"soil\" x=\"217\" y=\"150\" width=\"96\" height=\"30\"/>\n  <path class=\"shoot\" d=\"M265,150 L265,80\"/>\n  <ellipse class=\"part\" cx=\"255.39999999999998\" cy=\"125\" rx=\"5.6\" ry=\"3.6\"/>\n  <ellipse class=\"part\" cx=\"274.6\" cy=\"125\" rx=\"5.6\" ry=\"3.6\"/>\n  <text class=\"label\" x=\"265\" y=\"200\" text-anchor=\"middle\">Day 14</text>\n  <ellipse class=\"green\" cx=\"247\" cy=\"80\" rx=\"16\" ry=\"8\"/>\n  <ellipse class=\"green\" cx=\"283\" cy=\"80\" rx=\"16\" ry=\"8\"/>\n  <circle class=\"badge\" cx=\"20\" cy=\"90\" r=\"10\"/><text class=\"label\" x=\"20\" y=\"95\" text-anchor=\"middle\">X</text>\n  <line class=\"arrow\" x1=\"28\" y1=\"96\" x2=\"40\" y2=\"118\"/>\n</svg>", "alt": "The same bean seedling on Day 3, Day 8 and Day 14; part X near the base gets smaller as green leaves grow bigger"}
  },
  {
    id: "g5-sci-plants-b-q16",
    prompt: "Which is the odd one out, based on the number of cotyledons in the seed?",
    options: [
      { id: "a", text: "Maize" },
      { id: "b", text: "Wheat" },
      { id: "c", text: "Gram (chana)" },
      { id: "d", text: "Rice" }
    ],
    answerId: "c",
    explanation: "Gram has two cotyledons, like bean and pea. Maize, wheat, and rice each have only one cotyledon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q17",
    prompt: "Cards 1, 2 and 3 show a seed germinating, in the correct order. What will card 4 most likely show?",
    options: [
      { id: "a", text: "The seed shrinks back to its dry size." },
      { id: "b", text: "The seed coat closes up again." },
      { id: "c", text: "The root goes back inside the seed." },
      { id: "d", text: "The plumule (shoot) grows up while the root grows longer." }
    ],
    answerId: "d",
    explanation: "After the radicle comes out, the plumule grows up toward light and becomes the shoot. Germination only moves forward; a seed does not shrink back or close up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three germination cards 1, 2 and 3 in order, and an empty card 4 with a question mark\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"24\" text-anchor=\"middle\">What comes next?</text>\n  <rect class=\"card\" x=\"10\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"45\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"45\" y=\"63\" text-anchor=\"middle\">1</text>\n  <rect class=\"soil\" x=\"10\" y=\"140\" width=\"70\" height=\"30\"/>\n  <rect class=\"card\" x=\"88\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"123\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"123\" y=\"63\" text-anchor=\"middle\">2</text>\n  <rect class=\"soil\" x=\"88\" y=\"140\" width=\"70\" height=\"30\"/>\n  <rect class=\"card\" x=\"166\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <circle class=\"badge\" cx=\"201\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"201\" y=\"63\" text-anchor=\"middle\">3</text>\n  <rect class=\"soil\" x=\"166\" y=\"140\" width=\"70\" height=\"30\"/>\n  <rect class=\"dash\" x=\"244\" y=\"40\" width=\"70\" height=\"130\" rx=\"8\"/>\n  <text class=\"label\" x=\"279\" y=\"118\" text-anchor=\"middle\">?</text>\n  <circle class=\"badge\" cx=\"279\" cy=\"58\" r=\"10\"/><text class=\"label\" x=\"279\" y=\"63\" text-anchor=\"middle\">4</text>\n  <ellipse class=\"coat\" cx=\"45\" cy=\"115\" rx=\"20\" ry=\"15\"/>\n  <path class=\"water\" d=\"M27,88 q4,-8 8,0 a4,4 0 1,1 -8,0 Z M55,82 q4,-8 8,0 a4,4 0 1,1 -8,0 Z\"/>\n  <ellipse class=\"coat\" cx=\"123\" cy=\"115\" rx=\"20\" ry=\"15\"/>\n  <path class=\"arrow\" d=\"M116,101 L124,110 L118,118 L126,128\" stroke-width=\"2.5\"/>\n  <ellipse class=\"coat\" cx=\"201\" cy=\"115\" rx=\"18\" ry=\"13\"/>\n  <path class=\"root\" d=\"M194,126 Q190,145 194,162\"/>\n  <text class=\"small\" x=\"45\" y=\"188\" text-anchor=\"middle\">seed swells</text>\n  <text class=\"small\" x=\"123\" y=\"188\" text-anchor=\"middle\">coat splits</text>\n  <text class=\"small\" x=\"201\" y=\"188\" text-anchor=\"middle\">root comes out</text>\n  <text class=\"small\" x=\"279\" y=\"188\" text-anchor=\"middle\">card 4</text>\n</svg>", "alt": "Three germination cards 1, 2 and 3 in order, and an empty card 4 with a question mark"}
  },
  {
    id: "g5-sci-plants-b-q18",
    prompt: "Coconut palms often grow on small islands far from other land. How did they most likely get there?",
    options: [
      { id: "a", text: "Coconuts floated across the sea and washed ashore." },
      { id: "b", text: "Strong winds blew the heavy coconuts there." },
      { id: "c", text: "Coconut fruits exploded and flew across the sea." },
      { id: "d", text: "Squirrels carried them across the sea." }
    ],
    answerId: "a",
    explanation: "Coconuts float on sea water for a long time. Their hard shell protects the seed until it lands on a beach and sprouts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q19",
    prompt: "This plant makes many very light seeds with feathery hairs. The wind blows in the direction of the arrows. Where are most of its new plants likely to grow?",
    options: [
      { id: "a", text: "Only at spot P, right under the parent plant" },
      { id: "b", text: "Only inside pond Q" },
      { id: "c", text: "Spread over area R, in the direction the wind blows" },
      { id: "d", text: "Only at spot S, where the bird is sitting" }
    ],
    answerId: "c",
    explanation: "Light, hairy seeds are carried by the wind, so they land spread out downwind (area R). Very few would stay under the parent, and the bird is not what carries them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A parent plant with many fluffy seeds, wind arrows blowing to the right, spot P under the plant, a pond Q, a wide area R downwind, and a bird on a post at S behind the plant\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"160\"/>\n  <rect class=\"soil\" x=\"0\" y=\"160\" width=\"320\" height=\"60\"/>\n  <path class=\"shoot\" d=\"M70,160 L70,95\"/>\n  <circle class=\"white\" cx=\"62\" cy=\"88\" r=\"10\"/>\n  <circle class=\"white\" cx=\"80\" cy=\"84\" r=\"10\"/>\n  <circle class=\"white\" cx=\"70\" cy=\"74\" r=\"10\"/>\n  <path class=\"arrow\" d=\"M100,40 L190,40 M182,34 L190,40 L182,46 M100,60 L170,60 M162,54 L170,60 L162,66\" stroke-width=\"2.5\"/>\n  <text class=\"label\" x=\"145\" y=\"28\" text-anchor=\"middle\">WIND</text>\n  <path class=\"hair\" d=\"M120,90 l6,-6 M150,75 l6,-6 M190,95 l6,-6 M230,80 l6,-6\"/>\n  <rect class=\"dash\" x=\"195\" y=\"150\" width=\"115\" height=\"40\" rx=\"6\"/>\n  <ellipse class=\"water\" cx=\"140\" cy=\"195\" rx=\"32\" ry=\"10\"/>\n  <path class=\"arrow\" d=\"M12,150 L12,120 M8,128 L40,128\"/>\n  <ellipse class=\"dark\" cx=\"24\" cy=\"120\" rx=\"7\" ry=\"5\"/>\n  <circle class=\"badge\" cx=\"70\" cy=\"205\" r=\"10\"/><text class=\"label\" x=\"70\" y=\"210\" text-anchor=\"middle\">P</text>\n  <circle class=\"badge\" cx=\"140\" cy=\"175\" r=\"10\"/><text class=\"label\" x=\"140\" y=\"180\" text-anchor=\"middle\">Q</text>\n  <circle class=\"badge\" cx=\"252\" cy=\"205\" r=\"10\"/><text class=\"label\" x=\"252\" y=\"210\" text-anchor=\"middle\">R</text>\n  <circle class=\"badge\" cx=\"24\" cy=\"100\" r=\"10\"/><text class=\"label\" x=\"24\" y=\"105\" text-anchor=\"middle\">S</text>\n  <text class=\"small\" x=\"70\" y=\"150\" text-anchor=\"middle\">parent</text>\n</svg>", "alt": "A parent plant with many fluffy seeds, wind arrows blowing to the right, spot P under the plant, a pond Q, a wide area R downwind, and a bird on a post at S behind the plant"}
  },
  {
    id: "g5-sci-plants-b-q20",
    prompt: "Neha sorted four seeds into boxes by how they travel. Which seed is in the CORRECT box?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "b",
    explanation: "Drumstick seeds (Q) have papery wings that catch the wind, so Q is correct. Coconut (P) belongs in Water, the balsam pod (R) in Explosion, and fluffy cotton (S) in Wind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A sorting chart with four boxes: Explosion holds coconut P, Wind holds winged drumstick seed Q, Water holds balsam pod R, Animals holds cotton seed S\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"18\" text-anchor=\"middle\">Neha\u2019s sorting chart</text>\n  <rect class=\"card\" x=\"10\" y=\"28\" width=\"145\" height=\"88\" rx=\"6\"/>\n  <text class=\"label\" x=\"82\" y=\"44\" text-anchor=\"middle\">EXPLOSION</text>\n  <rect class=\"card\" x=\"165\" y=\"28\" width=\"145\" height=\"88\" rx=\"6\"/>\n  <text class=\"label\" x=\"237\" y=\"44\" text-anchor=\"middle\">WIND</text>\n  <rect class=\"card\" x=\"10\" y=\"124\" width=\"145\" height=\"88\" rx=\"6\"/>\n  <text class=\"label\" x=\"82\" y=\"140\" text-anchor=\"middle\">WATER</text>\n  <rect class=\"card\" x=\"165\" y=\"124\" width=\"145\" height=\"88\" rx=\"6\"/>\n  <text class=\"label\" x=\"237\" y=\"140\" text-anchor=\"middle\">ANIMALS</text>\n  <ellipse class=\"green\" cx=\"70\" cy=\"78\" rx=\"22\" ry=\"27\"/>\n  <path class=\"arrow\" d=\"M60,56 Q70,78 60,100 M80,56 Q70,78 80,100\"/>\n  <circle class=\"badge\" cx=\"28\" cy=\"50\" r=\"10\"/><text class=\"label\" x=\"28\" y=\"55\" text-anchor=\"middle\">P</text>\n  <ellipse class=\"part\" cx=\"208\" cy=\"66\" rx=\"16\" ry=\"8\" transform=\"rotate(-25 208 66)\"/>\n  <ellipse class=\"part\" cx=\"236\" cy=\"66\" rx=\"16\" ry=\"8\" transform=\"rotate(25 236 66)\"/>\n  <ellipse class=\"part\" cx=\"222\" cy=\"87\" rx=\"8\" ry=\"16\"/>\n  <circle class=\"dark\" cx=\"222\" cy=\"74\" r=\"6\"/>\n  <circle class=\"badge\" cx=\"183\" cy=\"50\" r=\"10\"/><text class=\"label\" x=\"183\" y=\"55\" text-anchor=\"middle\">Q</text>\n  <path class=\"green\" d=\"M48,170 Q60,150 74,170 L74,190 Q60,196 48,190 Z\"/>\n  <path class=\"arrow\" d=\"M61,160 L61,192\"/>\n  <circle class=\"badge\" cx=\"28\" cy=\"146\" r=\"10\"/><text class=\"label\" x=\"28\" y=\"151\" text-anchor=\"middle\">R</text>\n  <path class=\"hair\" d=\"M220,174 L190.6,157.0 M220,174 L196.0,150.0 M220,174 L203.0,144.6 M220,174 L211.2,141.2 M220,174 L220.0,140.0 M220,174 L228.8,141.2 M220,174 L237.0,144.6 M220,174 L244.0,150.0 M220,174 L249.4,157.0\"/>\n  <ellipse class=\"brown\" cx=\"220\" cy=\"184\" rx=\"5\" ry=\"10\"/>\n  <circle class=\"badge\" cx=\"183\" cy=\"146\" r=\"10\"/><text class=\"label\" x=\"183\" y=\"151\" text-anchor=\"middle\">S</text>\n  <text class=\"small\" x=\"122\" y=\"82\" text-anchor=\"middle\">coconut</text>\n  <text class=\"small\" x=\"278\" y=\"82\" text-anchor=\"middle\">drumstick</text>\n  <text class=\"small\" x=\"118\" y=\"178\" text-anchor=\"middle\">balsam</text>\n  <text class=\"small\" x=\"118\" y=\"191\" text-anchor=\"middle\">pod</text>\n  <text class=\"small\" x=\"282\" y=\"178\" text-anchor=\"middle\">cotton</text>\n</svg>", "alt": "A sorting chart with four boxes: Explosion holds coconut P, Wind holds winged drumstick seed Q, Water holds balsam pod R, Animals holds cotton seed S"}
  },
  {
    id: "g5-sci-plants-b-q21",
    prompt: "Plant 1 drops all its seeds right under itself. Plant 2's seeds are spread far away. What is most likely to happen to Plant 1's seedlings?",
    options: [
      { id: "a", text: "They will be crowded, compete for light, water, and space, and many will die." },
      { id: "b", text: "They will grow faster than Plant 2's seedlings." },
      { id: "c", text: "They will make Plant 1 grow more fruits." },
      { id: "d", text: "They will never germinate at all." }
    ],
    answerId: "a",
    explanation: "The seeds under Plant 1 can still sprout, but the seedlings share too little light, water, and space, and the parent shades them. Spread-out seedlings each get enough, which is why dispersal matters.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two scenes: Plant 1 with many tiny seedlings crowded in its shade, and Plant 2 with a few seedlings spread far apart in the sun\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"170\"/>\n  <rect class=\"soil\" x=\"0\" y=\"170\" width=\"320\" height=\"50\"/>\n  <line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"220\" class=\"arrow\" stroke-dasharray=\"5 4\"/>\n  <rect class=\"brown\" x=\"70\" y=\"80\" width=\"18\" height=\"90\"/>\n  <circle class=\"green\" cx=\"79\" cy=\"70\" r=\"55\"/>\n  <text class=\"label\" x=\"80\" y=\"212\" text-anchor=\"middle\">Plant 1</text>\n  <text class=\"label\" x=\"240\" y=\"212\" text-anchor=\"middle\">Plant 2</text>\n  <rect class=\"brown\" x=\"231\" y=\"110\" width=\"12\" height=\"60\"/>\n  <circle class=\"green\" cx=\"237\" cy=\"98\" r=\"30\"/>\n  <circle cx=\"300\" cy=\"22\" r=\"14\" fill=\"#facc15\" stroke=\"#333\"/>\n  <path class=\"shoot\" d=\"M40,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M49,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M58,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M67,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M76,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M85,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M94,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M103,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M112,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M121,170 l0,-10\" stroke-width=\"2\"/>\n  <path class=\"shoot\" d=\"M175,170 l0,-18\"/>\n  <ellipse class=\"green\" cx=\"170\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"180\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n  <path class=\"shoot\" d=\"M200,170 l0,-18\"/>\n  <ellipse class=\"green\" cx=\"195\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"205\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n  <path class=\"shoot\" d=\"M280,170 l0,-18\"/>\n  <ellipse class=\"green\" cx=\"275\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"285\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n  <path class=\"shoot\" d=\"M305,170 l0,-18\"/>\n  <ellipse class=\"green\" cx=\"300\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n  <ellipse class=\"green\" cx=\"310\" cy=\"151\" rx=\"6\" ry=\"3\"/>\n</svg>", "alt": "Two scenes: Plant 1 with many tiny seedlings crowded in its shade, and Plant 2 with a few seedlings spread far apart in the sun"}
  },
  {
    id: "g5-sci-plants-b-q22",
    prompt: "Meera wants to test whether seeds need water to germinate. Which setup is a fair test?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "d",
    explanation: "A fair test changes only one thing. In S, both cups have the same moong seeds on the same shelf; only water is different. P also changes temperature, Q changes the kind of seed, and R has nothing to compare with.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four setups P, Q, R and S of cups with seeds on cotton, differing in water, place, kind of seed and number of cups\">\n  <style>\n    .part { fill:#fde68a; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .arrow { stroke:#333; stroke-width:1.5; fill:none; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .coat { fill:#c2783c; stroke:#333; stroke-width:2; }\n    .green { fill:#86efac; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#a16207; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#5b3a1a; stroke:#333; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .water { fill:#bfdbfe; stroke:#333; stroke-width:1; }\n    .glass { fill:none; stroke:#333; stroke-width:2; }\n    .cotton { fill:#f1f5f9; stroke:#777; stroke-width:1; }\n    .soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n    .root { stroke:#92400e; stroke-width:3; fill:none; stroke-linecap:round; }\n    .shoot { stroke:#15803d; stroke-width:3; fill:none; stroke-linecap:round; }\n    .hair { stroke:#666; stroke-width:1; fill:none; }\n    .card { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .dash { fill:none; stroke:#333; stroke-width:1.5; stroke-dasharray:5 4; }\n    .sky { fill:#e0f2fe; stroke:none; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"card\" x=\"5\" y=\"5\" width=\"150\" height=\"103\" rx=\"6\"/>\n  <circle class=\"badge\" cx=\"19\" cy=\"20\" r=\"10\"/><text class=\"label\" x=\"19\" y=\"25\" text-anchor=\"middle\">P</text>\n  <rect class=\"card\" x=\"165\" y=\"5\" width=\"150\" height=\"103\" rx=\"6\"/>\n  <circle class=\"badge\" cx=\"179\" cy=\"20\" r=\"10\"/><text class=\"label\" x=\"179\" y=\"25\" text-anchor=\"middle\">Q</text>\n  <rect class=\"card\" x=\"5\" y=\"112\" width=\"150\" height=\"103\" rx=\"6\"/>\n  <circle class=\"badge\" cx=\"19\" cy=\"127\" r=\"10\"/><text class=\"label\" x=\"19\" y=\"132\" text-anchor=\"middle\">R</text>\n  <rect class=\"card\" x=\"165\" y=\"112\" width=\"150\" height=\"103\" rx=\"6\"/>\n  <circle class=\"badge\" cx=\"179\" cy=\"127\" r=\"10\"/><text class=\"label\" x=\"179\" y=\"132\" text-anchor=\"middle\">S</text>\n  <path class=\"glass\" d=\"M30,30 L36,70 L58,70 L64,30\"/>\n  <rect class=\"cotton\" x=\"35\" y=\"58\" width=\"24\" height=\"10\"/>\n  <rect class=\"water\" x=\"35\" y=\"64\" width=\"24\" height=\"4\"/>\n  <circle class=\"green\" cx=\"40\" cy=\"55\" r=\"3\"/>\n  <circle class=\"green\" cx=\"47\" cy=\"55\" r=\"3\"/>\n  <circle class=\"green\" cx=\"54\" cy=\"55\" r=\"3\"/>\n  <path class=\"glass\" d=\"M95,30 L101,70 L123,70 L129,30\"/>\n  <rect class=\"cotton\" x=\"100\" y=\"58\" width=\"24\" height=\"10\"/>\n  <circle class=\"green\" cx=\"105\" cy=\"55\" r=\"3\"/>\n  <circle class=\"green\" cx=\"112\" cy=\"55\" r=\"3\"/>\n  <circle class=\"green\" cx=\"119\" cy=\"55\" r=\"3\"/>\n  <text class=\"small\" x=\"47\" y=\"84\" text-anchor=\"middle\">wet</text>\n  <text class=\"small\" x=\"47\" y=\"97\" text-anchor=\"middle\">sunny sill</text>\n  <text class=\"small\" x=\"112\" y=\"84\" text-anchor=\"middle\">dry</text>\n  <text class=\"small\" x=\"112\" y=\"97\" text-anchor=\"middle\">in fridge</text>\n  <path class=\"glass\" d=\"M190,30 L196,70 L218,70 L224,30\"/>\n  <rect class=\"cotton\" x=\"195\" y=\"58\" width=\"24\" height=\"10\"/>\n  <rect class=\"water\" x=\"195\" y=\"64\" width=\"24\" height=\"4\"/>\n  <circle class=\"green\" cx=\"200\" cy=\"55\" r=\"5\"/>\n  <circle class=\"green\" cx=\"207\" cy=\"55\" r=\"5\"/>\n  <circle class=\"green\" cx=\"214\" cy=\"55\" r=\"5\"/>\n  <path class=\"glass\" d=\"M255,30 L261,70 L283,70 L289,30\"/>\n  <rect class=\"cotton\" x=\"260\" y=\"58\" width=\"24\" height=\"10\"/>\n  <circle class=\"green\" cx=\"265\" cy=\"55\" r=\"3\"/>\n  <circle class=\"green\" cx=\"272\" cy=\"55\" r=\"3\"/>\n  <circle class=\"green\" cx=\"279\" cy=\"55\" r=\"3\"/>\n  <text class=\"small\" x=\"207\" y=\"84\" text-anchor=\"middle\">wet</text>\n  <text class=\"small\" x=\"207\" y=\"97\" text-anchor=\"middle\">bean</text>\n  <text class=\"small\" x=\"272\" y=\"84\" text-anchor=\"middle\">dry</text>\n  <text class=\"small\" x=\"272\" y=\"97\" text-anchor=\"middle\">moong</text>\n  <path class=\"glass\" d=\"M63,137 L69,177 L91,177 L97,137\"/>\n  <rect class=\"cotton\" x=\"68\" y=\"165\" width=\"24\" height=\"10\"/>\n  <rect class=\"water\" x=\"68\" y=\"171\" width=\"24\" height=\"4\"/>\n  <circle class=\"green\" cx=\"73\" cy=\"162\" r=\"3\"/>\n  <circle class=\"green\" cx=\"80\" cy=\"162\" r=\"3\"/>\n  <circle class=\"green\" cx=\"87\" cy=\"162\" r=\"3\"/>\n  <text class=\"small\" x=\"80\" y=\"191\" text-anchor=\"middle\">wet, moong</text>\n  <text class=\"small\" x=\"80\" y=\"204\" text-anchor=\"middle\">(one cup only)</text>\n  <path class=\"glass\" d=\"M190,137 L196,177 L218,177 L224,137\"/>\n  <rect class=\"cotton\" x=\"195\" y=\"165\" width=\"24\" height=\"10\"/>\n  <rect class=\"water\" x=\"195\" y=\"171\" width=\"24\" height=\"4\"/>\n  <circle class=\"green\" cx=\"200\" cy=\"162\" r=\"3\"/>\n  <circle class=\"green\" cx=\"207\" cy=\"162\" r=\"3\"/>\n  <circle class=\"green\" cx=\"214\" cy=\"162\" r=\"3\"/>\n  <path class=\"glass\" d=\"M255,137 L261,177 L283,177 L289,137\"/>\n  <rect class=\"cotton\" x=\"260\" y=\"165\" width=\"24\" height=\"10\"/>\n  <circle class=\"green\" cx=\"265\" cy=\"162\" r=\"3\"/>\n  <circle class=\"green\" cx=\"272\" cy=\"162\" r=\"3\"/>\n  <circle class=\"green\" cx=\"279\" cy=\"162\" r=\"3\"/>\n  <text class=\"small\" x=\"207\" y=\"191\" text-anchor=\"middle\">wet, moong</text>\n  <text class=\"small\" x=\"272\" y=\"191\" text-anchor=\"middle\">dry, moong</text>\n  <text class=\"small\" x=\"240\" y=\"206\" text-anchor=\"middle\">both on same shelf</text>\n</svg>", "alt": "Four setups P, Q, R and S of cups with seeds on cotton, differing in water, place, kind of seed and number of cups"}
  },
  {
    id: "g5-sci-plants-b-q23",
    prompt: "Which of these is NOT a way seeds are dispersed?",
    options: [
      { id: "a", text: "Wind" },
      { id: "b", text: "Water" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Animals" }
    ],
    answerId: "c",
    explanation: "Photosynthesis is how green leaves make food using sunlight. The four ways seeds travel are wind, water, animals, and explosion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-plants-b-q24",
    prompt: "Xanthium plants are often found growing along paths where cattle and goats walk every day. What is the best explanation?",
    options: [
      { id: "a", text: "Cattle plant the seeds on purpose." },
      { id: "b", text: "The hooked burrs stick to the animals' fur and drop off along the paths they use." },
      { id: "c", text: "The wind blows only along paths." },
      { id: "d", text: "Paths always have more water than fields." }
    ],
    answerId: "b",
    explanation: "Xanthium burrs hitch a ride on passing animals. They fall off along the animals' routes, so new plants grow beside the paths.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🌱",
    title: "A seed's secret lunch box",
    body: [
      "Every seed holds a baby plant and its food.",
      "We'll peek inside, wake a seed up, and see how seeds travel.",
      "Skip anytime — practice sets are unlocked.",
    ],
    cta: "Open a seed!",
    visual: "plant",
    speak: "Every seed is like a tiny lunch box with a baby plant inside.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "What's inside a seed?",
    lead: "Tap each part of a bean seed.",
    visual: "plant",
    speak: "Tap each part. The seed coat protects. Cotyledons store food. The embryo is the baby plant.",
    cards: [
      { label: "Seed coat", reveal: "Outer skin — protects from injury and drying", emoji: "🧥" },
      { label: "Cotyledons", reveal: "Fat halves that store food for the baby plant", emoji: "🥜" },
      { label: "Radicle", reveal: "Baby root — grows downward first", emoji: "🪴" },
      { label: "Plumule", reveal: "Baby shoot — grows up toward light", emoji: "🌿" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Wake-up conditions",
    visual: "plant",
    speak: "Most seeds need water, air, and warmth to germinate. They do not need soil or sunlight to start.",
    steps: [
      "Germination = a seed starting to grow",
      "Needs: water + air + warmth",
      "Dry jar → no water → stays asleep",
      "Under boiled water → little air → no sprout",
      "Fridge → too cold → no sprout",
      "Surprise: soil and sunlight come later",
    ],
    punchline: "Water, air, and warmth wake most seeds.",
  },
  {
    id: "t1",
    type: "try",
    title: "Which jar sprouts?",
    prompt: "Moong on wet cotton in a warm room — will it sprout?",
    options: [
      { id: "a", text: "Yes — it has water, air, and warmth" },
      { id: "b", text: "No — it needs soil first" },
      { id: "c", text: "No — it needs bright sunlight" },
      { id: "d", text: "No — moong seeds never germinate" },
    ],
    answerId: "a",
    why: "Wet cotton gives water; room air and warmth do the rest. Stored food feeds the seedling.",
    visual: "plant",
    speak: "Will moong seeds on wet cotton in a warm room sprout?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Stages of germination",
    visual: "plant",
    speak: "First the seed soaks water and swells. The coat bursts. The radicle grows down. Then the plumule grows up and leaves open.",
    steps: [
      "Seed soaks water and swells",
      "Seed coat softens and splits",
      "Radicle comes out first → root",
      "Plumule grows up → shoot",
      "First leaves open; cotyledons shrink",
    ],
    punchline: "Root first, then shoot, then leaves.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "How seeds travel",
    lead: "Tap each dispersal helper.",
    visual: "plant",
    speak: "Wind, water, animals, and exploding pods help seeds travel away from the parent plant.",
    cards: [
      { label: "Wind", reveal: "Light seeds with hairs or wings (madar, cotton, drumstick)", emoji: "🌬️" },
      { label: "Water", reveal: "Floaters like coconut and lotus", emoji: "🥥" },
      { label: "Animals", reveal: "Hooks on fur, or seeds in fruits birds eat", emoji: "🐕" },
      { label: "Explosion", reveal: "Pods burst — balsam, pea, castor", emoji: "💥" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "plant",
    speak: "Why is seed dispersal useful for plants?",
    question: {
      id: "sci-check",
      prompt: "Why is seed dispersal useful?",
      options: [
        { id: "a", text: "It makes seeds heavier" },
        { id: "b", text: "It reduces crowding for light, water, and space" },
        { id: "c", text: "It keeps all seeds under the parent" },
        { id: "d", text: "It makes the parent taller" },
      ],
      answerId: "b",
      explanation: "Spreading out gives seedlings room to grow without fighting the parent.",
      hints: ["Think about crowded seedlings under one tree.", "What do plants compete for?"],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Seed scientist!",
    bullets: [
      "Parts: coat, cotyledons, radicle, plumule",
      "Germinate with water, air, warmth",
      "Dispersal: wind, water, animals, explosion",
      "Practice Set A or B whenever you're ready",
    ],
    cta: "Back to chapter",
    speak: "You learned seed parts, germination needs, and four ways seeds travel.",
  },
];

export const g5SciencePlants: ChapterDef = {
  id: "plants-seeds",
  title: "Plants: Seeds & Dispersal",
  emoji: "\ud83c\udf31",
  blurb: "Germination, seed parts & travel",
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
  paperTopics: ["living-things", "earth-space"],
};

export const g5SciencePlantsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
