import type { ChapterDef, PrepQuestion } from "../types";

/** Animals: Food & Homes - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-sci-animals-a-q01",
    prompt: "Which animal eats only plants?",
    options: [
      { id: "a", text: "Lion" },
      { id: "b", text: "Cow" },
      { id: "c", text: "Eagle" },
      { id: "d", text: "Snake" }
    ],
    answerId: "b",
    explanation: "A cow eats grass and leaves. It does not eat other animals, so it is a herbivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q02",
    prompt: "What do we call animals that eat only plants?",
    options: [
      { id: "a", text: "Herbivores" },
      { id: "b", text: "Carnivores" },
      { id: "c", text: "Omnivores" },
      { id: "d", text: "Insects" }
    ],
    answerId: "a",
    explanation: "Herbivores are plant eaters. Cows, goats and deer are herbivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q03",
    prompt: "A lion is hungry. Look at the four plates. Which plate will the lion pick?",
    options: [
      { id: "a", text: "Plate A \u2014 Grass" },
      { id: "b", text: "Plate B \u2014 Fruits" },
      { id: "c", text: "Plate C \u2014 Meat" },
      { id: "d", text: "Plate D \u2014 Seeds" }
    ],
    answerId: "c",
    explanation: "A lion hunts other animals and eats their meat. It is a carnivore. It does not eat grass, fruits or seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four food plates labelled A to D: A grass, B fruits, C meat, D seeds\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">The lion is hungry. Which plate?</text>\n  <rect class=\"card\" x=\"8\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"86\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"164\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"242\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <g transform=\"translate(43 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><path class=\"green\" d=\"M -18 10 L -12 -16 L -8 8 L -2 -22 L 2 8 L 8 -18 L 11 8 L 18 -12 L 18 10 Z\"/></g>\n  <circle class=\"badge\" cx=\"43.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"43.0\" y=\"57\" text-anchor=\"middle\">A</text>\n  <text class=\"small\" x=\"43\" y=\"175\" text-anchor=\"middle\">Grass</text>\n  <g transform=\"translate(121 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><circle class=\"red\" cx=\"-10\" cy=\"0\" r=\"9\"/><circle class=\"orange\" cx=\"8\" cy=\"-2\" r=\"9\"/><path class=\"yellow\" d=\"M -4 8 Q 6 16 18 6 Q 8 10 -2 4 Z\"/></g>\n  <circle class=\"badge\" cx=\"121.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"121.0\" y=\"57\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"121\" y=\"175\" text-anchor=\"middle\">Fruits</text>\n  <g transform=\"translate(199 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><path class=\"red\" d=\"M -16 4 Q -20 -14 -2 -14 Q 14 -12 8 4 Q 2 12 -10 10 Z\"/><path class=\"line\" d=\"M 6 0 L 18 -10\"/><circle class=\"white\" cx=\"20\" cy=\"-13\" r=\"4\"/><circle class=\"white\" cx=\"16\" cy=\"-15\" r=\"3.5\"/></g>\n  <circle class=\"badge\" cx=\"199.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"199.0\" y=\"57\" text-anchor=\"middle\">C</text>\n  <text class=\"small\" x=\"199\" y=\"175\" text-anchor=\"middle\">Meat</text>\n  <g transform=\"translate(277 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><ellipse class=\"brown\" cx=\"-14\" cy=\"2\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"-6\" cy=\"-2\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"2\" cy=\"3\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"10\" cy=\"-1\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"16\" cy=\"4\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"-10\" cy=\"7\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"6\" cy=\"7\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"-2\" cy=\"-6\" rx=\"3.5\" ry=\"2.2\"/><ellipse class=\"brown\" cx=\"12\" cy=\"-7\" rx=\"3.5\" ry=\"2.2\"/></g>\n  <circle class=\"badge\" cx=\"277.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"277.0\" y=\"57\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"277\" y=\"175\" text-anchor=\"middle\">Seeds</text>\n</svg>", "alt": "Four food plates labelled A to D: A grass, B fruits, C meat, D seeds"}
  },
  {
    id: "g3-sci-animals-a-q04",
    prompt: "Look at the four homes. In which home does a bird lay its eggs?",
    options: [
      { id: "a", text: "Home A \u2014 Den" },
      { id: "b", text: "Home B \u2014 Kennel" },
      { id: "c", text: "Home C \u2014 Hive" },
      { id: "d", text: "Home D \u2014 Nest" }
    ],
    answerId: "d",
    explanation: "Home D is a nest. Birds build nests with twigs, grass and leaves. They lay eggs and keep babies there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four homes labelled A to D: A a rocky cave, B a small dog house, C a hanging beehive, D a twig nest with two eggs\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Four animal homes</text>\n  <rect class=\"card\" x=\"8\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"86\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"164\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"242\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <g transform=\"translate(43 108) scale(1.1)\"><path class=\"grey\" d=\"M -30 22 L -26 -10 Q -10 -30 10 -24 Q 28 -16 30 22 Z\"/><path class=\"dark\" d=\"M -14 22 Q -12 -6 2 -6 Q 14 -6 14 22 Z\"/></g>\n  <circle class=\"badge\" cx=\"43.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"43.0\" y=\"57\" text-anchor=\"middle\">A</text>\n  <g transform=\"translate(121 108) scale(1.1)\"><path class=\"red\" d=\"M -26 -6 L 0 -26 L 26 -6 Z\"/><rect class=\"orange\" x=\"-22\" y=\"-6\" width=\"44\" height=\"28\"/><path class=\"dark\" d=\"M -9 22 L -9 6 Q 0 -4 9 6 L 9 22 Z\"/></g>\n  <circle class=\"badge\" cx=\"121.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"121.0\" y=\"57\" text-anchor=\"middle\">B</text>\n  <g transform=\"translate(199 108) scale(1.1)\"><path class=\"line\" d=\"M 0 -30 L 0 -20\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"-14\" rx=\"12\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"-3\" rx=\"18\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"8\" rx=\"19\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"18\" rx=\"13\" ry=\"7\"/><circle class=\"dark\" cx=\"0\" cy=\"12\" r=\"3\"/></g>\n  <circle class=\"badge\" cx=\"199.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"199.0\" y=\"57\" text-anchor=\"middle\">C</text>\n  <g transform=\"translate(277 108) scale(1.1)\"><path class=\"brown\" d=\"M -24 0 Q 0 26 24 0 Z\"/><ellipse class=\"white\" cx=\"-8\" cy=\"-2\" rx=\"6\" ry=\"7\"/><ellipse class=\"white\" cx=\"5\" cy=\"-3\" rx=\"6\" ry=\"7\"/><path class=\"line\" d=\"M -20 4 L 20 4 M -14 10 L 14 10\"/></g>\n  <circle class=\"badge\" cx=\"277.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"277.0\" y=\"57\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "Four homes labelled A to D: A a rocky cave, B a small dog house, C a hanging beehive, D a twig nest with two eggs"}
  },
  {
    id: "g3-sci-animals-a-q05",
    prompt: "Where do honeybees live?",
    options: [
      { id: "a", text: "Hive" },
      { id: "b", text: "Stable" },
      { id: "c", text: "Sty" },
      { id: "d", text: "Burrow" }
    ],
    answerId: "a",
    explanation: "Bees live together in a hive. They make honey there too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q06",
    prompt: "Look at the crow's plate. It has grains and a worm. What kind of eater is a crow?",
    options: [
      { id: "a", text: "Herbivore" },
      { id: "b", text: "Carnivore" },
      { id: "c", text: "Omnivore" },
      { id: "d", text: "Insect" }
    ],
    answerId: "c",
    explanation: "Grains come from plants. A worm is an animal. The crow eats both plant food and animal food, so it is an omnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A crow next to a plate holding grains and a worm\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">What the crow ate today</text>\n  <g transform=\"translate(80 120) scale(1.3)\"><ellipse class=\"dark\" cx=\"0\" cy=\"0\" rx=\"26\" ry=\"16\"/><circle class=\"dark\" cx=\"22\" cy=\"-14\" r=\"11\"/><circle cx=\"25\" cy=\"-16\" r=\"2.5\" fill=\"#fff\"/><path class=\"grey\" d=\"M 32 -14 L 44 -11 L 32 -9 Z\"/><path class=\"dark\" d=\"M -24 -4 L -44 4 L -24 8 Z\"/><path class=\"line\" d=\"M -4 15 L -6 28 M 6 15 L 6 28\"/></g>\n  <text class=\"small\" x=\"80\" y=\"175\" text-anchor=\"middle\">Crow</text>\n  <ellipse class=\"plate\" cx=\"225\" cy=\"125\" rx=\"80\" ry=\"34\"/>\n  <g transform=\"translate(195 118) scale(1.6)\"><ellipse class=\"yellow\" cx=\"-18\" cy=\"4\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-12\" cy=\"0\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-6\" cy=\"5\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-14\" cy=\"8\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-8\" cy=\"-4\" rx=\"3\" ry=\"2\"/></g>\n  <text class=\"small\" x=\"190\" y=\"152\" text-anchor=\"middle\">Grains</text>\n  <g transform=\"translate(240 118) scale(1.6)\"><path d=\"M 0 4 q 5 -8 10 0 t 10 0\" fill=\"none\" stroke=\"#c0567a\" stroke-width=\"5\" stroke-linecap=\"round\"/></g>\n  <text class=\"small\" x=\"265\" y=\"152\" text-anchor=\"middle\">Worm</text>\n  <path class=\"arrow\" d=\"M 140 120 L 150 120\"/><polyline class=\"arrow\" points=\"145,115 150,120 145,125\"/>\n</svg>", "alt": "A crow next to a plate holding grains and a worm"}
  },
  {
    id: "g3-sci-animals-a-q07",
    prompt: "People make a small house for their pet dog. What is it called?",
    options: [
      { id: "a", text: "Nest" },
      { id: "b", text: "Kennel" },
      { id: "c", text: "Hive" },
      { id: "d", text: "Den" }
    ],
    answerId: "b",
    explanation: "A kennel is a dog's home. People build it to keep the dog safe and dry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q08",
    prompt: "Which of these animals is a carnivore?",
    options: [
      { id: "a", text: "Deer" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Rabbit" },
      { id: "d", text: "Tiger" }
    ],
    answerId: "d",
    explanation: "A tiger hunts and eats other animals. Deer, goats and rabbits eat plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q09",
    prompt: "Where does a horse live?",
    options: [
      { id: "a", text: "Stable" },
      { id: "b", text: "Sty" },
      { id: "c", text: "Hive" },
      { id: "d", text: "Nest" }
    ],
    answerId: "a",
    explanation: "A stable is a home people make for horses. It keeps them safe from rain and sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q10",
    prompt: "Look at the picture. A rabbit sleeps in a hole it dug under the ground. What is this home called?",
    options: [
      { id: "a", text: "Den" },
      { id: "b", text: "Nest" },
      { id: "c", text: "Burrow" },
      { id: "d", text: "Kennel" }
    ],
    answerId: "c",
    explanation: "A burrow is a hole dug in the ground. Rabbits hide and sleep in burrows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Cut-away view of the ground: a tunnel goes from the grass down to a small room where a rabbit sleeps, with a question mark pointing to it\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"70\"/>\n  <rect class=\"soil\" x=\"0\" y=\"70\" width=\"320\" height=\"150\"/>\n  <path class=\"green\" d=\"M 0 70 L 320 70 L 320 64 L 0 64 Z\"/>\n  <path transform=\"translate(40 58)\" class=\"green\" d=\"M -18 10 L -12 -16 L -8 8 L -2 -22 L 2 8 L 8 -18 L 11 8 L 18 -12 L 18 10 Z\"/>\n  <path transform=\"translate(280 58)\" class=\"green\" d=\"M -18 10 L -12 -16 L -8 8 L -2 -22 L 2 8 L 8 -18 L 11 8 L 18 -12 L 18 10 Z\"/>\n  <path fill=\"#5a3a20\" stroke=\"#333\" stroke-width=\"1.5\" d=\"M 92 70 Q 100 120 150 140 Q 190 152 230 150 Q 262 150 262 172 Q 250 196 210 196 Q 160 196 140 170 Q 110 150 80 70 Z\"/>\n  <g transform=\"translate(215 178) scale(1.0)\"><ellipse class=\"white\" cx=\"0\" cy=\"0\" rx=\"16\" ry=\"11\"/><circle class=\"white\" cx=\"14\" cy=\"-8\" r=\"8\"/><ellipse class=\"white\" cx=\"12\" cy=\"-24\" rx=\"3\" ry=\"10\"/><ellipse class=\"white\" cx=\"19\" cy=\"-23\" rx=\"3\" ry=\"10\"/><circle cx=\"17\" cy=\"-9\" r=\"1.5\" fill=\"#333\"/><circle class=\"white\" cx=\"-16\" cy=\"-2\" r=\"4\"/></g>\n  <text class=\"label\" x=\"300\" y=\"130\" text-anchor=\"end\">?</text>\n  <path class=\"arrow\" d=\"M 290 135 L 255 165\"/><polyline class=\"arrow\" points=\"262,165 255,165 256,158\"/>\n  <text class=\"small\" x=\"160\" y=\"30\" text-anchor=\"middle\">Ground (cut open to see inside)</text>\n</svg>", "alt": "Cut-away view of the ground: a tunnel goes from the grass down to a small room where a rabbit sleeps, with a question mark pointing to it"}
  },
  {
    id: "g3-sci-animals-a-q11",
    prompt: "Look at these teeth. They are long, sharp and pointed. Which animal has teeth like these?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Lion" },
      { id: "c", text: "Goat" },
      { id: "d", text: "Deer" }
    ],
    answerId: "b",
    explanation: "Sharp pointed teeth help to tear meat. A lion eats meat, so it has teeth like these. Cows, goats and deer have flat teeth for plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A close-up of a mouth with long, sharp, pointed teeth\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Mystery teeth</text>\n  <rect class=\"card\" x=\"40\" y=\"40\" width=\"240\" height=\"140\" rx=\"10\"/>\n  <g transform=\"translate(160 100) scale(1.8)\"><path class=\"pink\" d=\"M -50 -6 Q 0 -30 50 -6 L 50 6 Q 0 -16 -50 6 Z\"/><path class=\"white\" d=\"M -42 -7.3 L -36 10.7 L -30 -7.3 Z\"/><path class=\"white\" d=\"M -28 -8.9 L -22 9.1 L -16 -8.9 Z\"/><path class=\"white\" d=\"M -14 -10.4 L -8 23.6 L -2 -10.4 Z\"/><path class=\"white\" d=\"M 0 -12.0 L 6 22.0 L 12 -12.0 Z\"/><path class=\"white\" d=\"M 14 -10.4 L 20 23.6 L 26 -10.4 Z\"/><path class=\"white\" d=\"M 28 -8.9 L 34 9.1 L 40 -8.9 Z\"/></g>\n  <text class=\"small\" x=\"160\" y=\"168\" text-anchor=\"middle\">Long, sharp, pointed teeth</text>\n</svg>", "alt": "A close-up of a mouth with long, sharp, pointed teeth"}
  },
  {
    id: "g3-sci-animals-a-q12",
    prompt: "Flat teeth are good for grinding. What food do flat teeth help to chew?",
    options: [
      { id: "a", text: "Meat" },
      { id: "b", text: "Grass and leaves" },
      { id: "c", text: "Fish" },
      { id: "d", text: "Insects" }
    ],
    answerId: "b",
    explanation: "Plant eaters like cows have flat teeth. They grind grass and leaves into small bits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q13",
    prompt: "Where does a pig live on a farm?",
    options: [
      { id: "a", text: "Stable" },
      { id: "b", text: "Kennel" },
      { id: "c", text: "Sty" },
      { id: "d", text: "Hive" }
    ],
    answerId: "c",
    explanation: "A sty is a pig's home. Farmers build it for their pigs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q14",
    prompt: "Look at the eagle's beak. It is strong and hooked. How does this beak help the eagle?",
    options: [
      { id: "a", text: "To crack nuts" },
      { id: "b", text: "To sip nectar" },
      { id: "c", text: "To tear meat" },
      { id: "d", text: "To dig soil" }
    ],
    answerId: "c",
    explanation: "An eagle eats small animals. Its hooked beak works like a hook to tear meat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Close-up of an eagle head with a strong hooked beak that curves down at the tip\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Eagle's beak</text>\n  <rect class=\"card\" x=\"60\" y=\"38\" width=\"200\" height=\"150\" rx=\"10\"/>\n  <g transform=\"translate(140 112) scale(1.6)\"><circle class=\"brown\" cx=\"0\" cy=\"0\" r=\"26\"/><circle class=\"white\" cx=\"8\" cy=\"-6\" r=\"6\"/><circle cx=\"9\" cy=\"-6\" r=\"3\" fill=\"#333\"/><path class=\"yellow\" d=\"M 22 -10 Q 56 -14 54 18 Q 46 4 22 8 Z\"/></g>\n  <text class=\"small\" x=\"160\" y=\"180\" text-anchor=\"middle\">Strong, hooked beak</text>\n</svg>", "alt": "Close-up of an eagle head with a strong hooked beak that curves down at the tip"}
  },
  {
    id: "g3-sci-animals-a-q15",
    prompt: "Which group has only omnivores?",
    options: [
      { id: "a", text: "Crow, bear, human" },
      { id: "b", text: "Lion, tiger, eagle" },
      { id: "c", text: "Cow, goat, deer" },
      { id: "d", text: "Rabbit, horse, camel" }
    ],
    answerId: "a",
    explanation: "Crows, bears and humans eat both plants and animals. The other groups eat only one kind of food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q16",
    prompt: "A lion rests in a cave with its cubs. What is a lion's home called?",
    options: [
      { id: "a", text: "Den" },
      { id: "b", text: "Nest" },
      { id: "c", text: "Hive" },
      { id: "d", text: "Sty" }
    ],
    answerId: "a",
    explanation: "A den is a lion's home. It is often a cave or a hidden spot in rocks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q17",
    prompt: "Why does a bird build a nest?",
    options: [
      { id: "a", text: "To lay eggs and keep its babies safe" },
      { id: "b", text: "To store water for summer" },
      { id: "c", text: "To play games with friends" },
      { id: "d", text: "To hide its food from people" }
    ],
    answerId: "a",
    explanation: "A nest is a safe, soft place. Birds lay eggs there and care for their babies.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q18",
    prompt: "Find the odd one out: Cow, Goat, Tiger, Deer.",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Deer" }
    ],
    answerId: "c",
    explanation: "A tiger eats other animals. Cow, goat and deer eat only plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q19",
    prompt: "A bear eats fish, honey and berries. What kind of eater is a bear?",
    options: [
      { id: "a", text: "Herbivore" },
      { id: "b", text: "Omnivore" },
      { id: "c", text: "Carnivore" },
      { id: "d", text: "Insect" }
    ],
    answerId: "b",
    explanation: "Fish is animal food. Honey and berries come from plants and flowers. A bear eats both, so it is an omnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q20",
    prompt: "Look at the food chain. Grass \u2192 Rabbit \u2192 ? Which animal fits in the empty box?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Fox" },
      { id: "c", text: "Goat" },
      { id: "d", text: "Deer" }
    ],
    answerId: "b",
    explanation: "The rabbit eats grass. A fox eats rabbits. Cow, goat and deer eat plants, not rabbits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Food chain picture: grass, arrow, rabbit, arrow, then an empty box with a question mark\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Complete the food chain</text>\n  <rect class=\"card\" x=\"5\" y=\"50\" width=\"90\" height=\"120\" rx=\"8\"/>\n  <g transform=\"translate(50 104) scale(1.0)\"><g transform=\"translate(0 0) scale(1.6)\"><path class=\"green\" d=\"M -18 10 L -12 -16 L -8 8 L -2 -22 L 2 8 L 8 -18 L 11 8 L 18 -12 L 18 10 Z\"/></g></g>\n  <text class=\"small\" x=\"50\" y=\"160\" text-anchor=\"middle\">Grass</text>\n  <rect class=\"card\" x=\"115\" y=\"50\" width=\"90\" height=\"120\" rx=\"8\"/>\n  <g transform=\"translate(160 104) scale(1.0)\"><g transform=\"translate(0 8) scale(1.3)\"><ellipse class=\"white\" cx=\"0\" cy=\"0\" rx=\"16\" ry=\"11\"/><circle class=\"white\" cx=\"14\" cy=\"-8\" r=\"8\"/><ellipse class=\"white\" cx=\"12\" cy=\"-24\" rx=\"3\" ry=\"10\"/><ellipse class=\"white\" cx=\"19\" cy=\"-23\" rx=\"3\" ry=\"10\"/><circle cx=\"17\" cy=\"-9\" r=\"1.5\" fill=\"#333\"/><circle class=\"white\" cx=\"-16\" cy=\"-2\" r=\"4\"/></g></g>\n  <text class=\"small\" x=\"160\" y=\"160\" text-anchor=\"middle\">Rabbit</text>\n  <rect class=\"card\" x=\"225\" y=\"50\" width=\"90\" height=\"120\" rx=\"8\"/>\n  <rect class=\"dash\" x=\"238\" y=\"70\" width=\"64\" height=\"64\" rx=\"6\"/><text class=\"label\" x=\"270\" y=\"108\" text-anchor=\"middle\" style=\"font-size:28px\">?</text>\n  <text class=\"small\" x=\"270\" y=\"160\" text-anchor=\"middle\">?</text>\n  <path class=\"arrow\" d=\"M 97 110 L 113 110\"/><polyline class=\"arrow\" points=\"107,104 113,110 107,116\"/>\n  <path class=\"arrow\" d=\"M 207 110 L 223 110\"/><polyline class=\"arrow\" points=\"217,104 223,110 217,116\"/>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Arrow means \"is eaten by\"</text>\n</svg>", "alt": "Food chain picture: grass, arrow, rabbit, arrow, then an empty box with a question mark"}
  },
  {
    id: "g3-sci-animals-a-q21",
    prompt: "The tailorbird makes a special nest. How does it make it?",
    options: [
      { id: "a", text: "By digging a hole in the sand" },
      { id: "b", text: "By building it with wax" },
      { id: "c", text: "By living in a big cave" },
      { id: "d", text: "By stitching leaves together" }
    ],
    answerId: "d",
    explanation: "The tailorbird uses its sharp beak like a needle. It stitches big leaves together to make a cup-like nest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q22",
    prompt: "Look at the four arrows. Which animal is NOT matched with the correct home?",
    options: [
      { id: "a", text: "Row A \u2014 Bee \u2192 hive" },
      { id: "b", text: "Row B \u2014 Horse \u2192 stable" },
      { id: "c", text: "Row C \u2014 Dog \u2192 kennel" },
      { id: "d", text: "Row D \u2014 Pig \u2192 nest" }
    ],
    answerId: "d",
    explanation: "A pig lives in a sty, not a nest. Birds live in nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four rows of arrows from an animal to a home: A bee to hive, B horse to stable, C dog to kennel, D pig to nest\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Animal to home</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"50\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"55\" text-anchor=\"middle\">A</text>\n  <rect class=\"card\" x=\"36\" y=\"34\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"55\" text-anchor=\"middle\">Bee</text>\n  <path class=\"arrow\" d=\"M 130 50 L 196 50\"/><polyline class=\"arrow\" points=\"190,44 196,50 190,56\"/>\n  <rect class=\"card\" x=\"200\" y=\"30\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 52) scale(0.6)\"><path class=\"line\" d=\"M 0 -30 L 0 -20\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"-14\" rx=\"12\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"-3\" rx=\"18\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"8\" rx=\"19\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"18\" rx=\"13\" ry=\"7\"/><circle class=\"dark\" cx=\"0\" cy=\"12\" r=\"3\"/></g><text class=\"small\" x=\"286\" y=\"54\" text-anchor=\"middle\">Hive</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"94\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"99\" text-anchor=\"middle\">B</text>\n  <rect class=\"card\" x=\"36\" y=\"78\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"99\" text-anchor=\"middle\">Horse</text>\n  <path class=\"arrow\" d=\"M 130 94 L 196 94\"/><polyline class=\"arrow\" points=\"190,88 196,94 190,100\"/>\n  <rect class=\"card\" x=\"200\" y=\"74\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 96) scale(0.6)\"><path class=\"brown\" d=\"M -28 -4 L 0 -24 L 28 -4 Z\"/><rect class=\"part\" x=\"-24\" y=\"-4\" width=\"48\" height=\"26\"/><rect class=\"brown\" x=\"-10\" y=\"4\" width=\"20\" height=\"18\"/><path class=\"line\" d=\"M -10 4 L 10 22 M 10 4 L -10 22\"/></g><text class=\"small\" x=\"286\" y=\"98\" text-anchor=\"middle\">Stable</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"138\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"143\" text-anchor=\"middle\">C</text>\n  <rect class=\"card\" x=\"36\" y=\"122\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"143\" text-anchor=\"middle\">Dog</text>\n  <path class=\"arrow\" d=\"M 130 138 L 196 138\"/><polyline class=\"arrow\" points=\"190,132 196,138 190,144\"/>\n  <rect class=\"card\" x=\"200\" y=\"118\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 140) scale(0.6)\"><path class=\"red\" d=\"M -26 -6 L 0 -26 L 26 -6 Z\"/><rect class=\"orange\" x=\"-22\" y=\"-6\" width=\"44\" height=\"28\"/><path class=\"dark\" d=\"M -9 22 L -9 6 Q 0 -4 9 6 L 9 22 Z\"/></g><text class=\"small\" x=\"286\" y=\"142\" text-anchor=\"middle\">Kennel</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"182\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"187\" text-anchor=\"middle\">D</text>\n  <rect class=\"card\" x=\"36\" y=\"166\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"187\" text-anchor=\"middle\">Pig</text>\n  <path class=\"arrow\" d=\"M 130 182 L 196 182\"/><polyline class=\"arrow\" points=\"190,176 196,182 190,188\"/>\n  <rect class=\"card\" x=\"200\" y=\"162\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 184) scale(0.6)\"><path class=\"brown\" d=\"M -24 0 Q 0 26 24 0 Z\"/><ellipse class=\"white\" cx=\"-8\" cy=\"-2\" rx=\"6\" ry=\"7\"/><ellipse class=\"white\" cx=\"5\" cy=\"-3\" rx=\"6\" ry=\"7\"/><path class=\"line\" d=\"M -20 4 L 20 4 M -14 10 L 14 10\"/></g><text class=\"small\" x=\"286\" y=\"186\" text-anchor=\"middle\">Nest</text>\n</svg>", "alt": "Four rows of arrows from an animal to a home: A bee to hive, B horse to stable, C dog to kennel, D pig to nest"}
  },
  {
    id: "g3-sci-animals-a-q23",
    prompt: "Which animal eats only plants AND lives in a burrow?",
    options: [
      { id: "a", text: "Snake" },
      { id: "b", text: "Fox" },
      { id: "c", text: "Lion" },
      { id: "d", text: "Rabbit" }
    ],
    answerId: "d",
    explanation: "A rabbit eats grass and carrots, so it is a herbivore. It also lives in a burrow. Snake, fox and lion eat other animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q24",
    prompt: "Humans are omnivores. Look at the four plates. Which meal has both plant food and animal food?",
    options: [
      { id: "a", text: "Plate A \u2014 Salad" },
      { id: "b", text: "Plate B \u2014 Fruits" },
      { id: "c", text: "Plate C \u2014 Boiled peas" },
      { id: "d", text: "Plate D \u2014 Rice with egg curry" }
    ],
    answerId: "d",
    explanation: "Rice comes from a plant. Eggs come from hens. Plate D has both kinds of food. The other plates have only plant food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four meal plates labelled A to D: A green salad, B fruits, C boiled peas, D rice with egg curry\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Which meal has plant food AND animal food?</text>\n  <rect class=\"card\" x=\"8\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"86\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"164\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"242\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <g transform=\"translate(43 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><path class=\"dkgreen\" d=\"M -20 2 Q -10 -16 0 0 Q 10 -16 20 2 Z\"/><circle class=\"red\" cx=\"-6\" cy=\"0\" r=\"5\"/><circle class=\"orange\" cx=\"8\" cy=\"-2\" r=\"4\"/></g>\n  <circle class=\"badge\" cx=\"43.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"43.0\" y=\"57\" text-anchor=\"middle\">A</text>\n  <text class=\"small\" x=\"43\" y=\"175\" text-anchor=\"middle\">Salad</text>\n  <g transform=\"translate(121 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><circle class=\"red\" cx=\"-10\" cy=\"0\" r=\"9\"/><circle class=\"orange\" cx=\"8\" cy=\"-2\" r=\"9\"/><path class=\"yellow\" d=\"M -4 8 Q 6 16 18 6 Q 8 10 -2 4 Z\"/></g>\n  <circle class=\"badge\" cx=\"121.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"121.0\" y=\"57\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"121\" y=\"175\" text-anchor=\"middle\">Fruits</text>\n  <g transform=\"translate(199 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><circle class=\"green\" cx=\"-14\" cy=\"2\" r=\"4.5\"/><circle class=\"green\" cx=\"-5\" cy=\"-2\" r=\"4.5\"/><circle class=\"green\" cx=\"4\" cy=\"2\" r=\"4.5\"/><circle class=\"green\" cx=\"13\" cy=\"-1\" r=\"4.5\"/><circle class=\"green\" cx=\"-9\" cy=\"6\" r=\"4.5\"/><circle class=\"green\" cx=\"9\" cy=\"6\" r=\"4.5\"/><circle class=\"green\" cx=\"0\" cy=\"-7\" r=\"4.5\"/></g>\n  <circle class=\"badge\" cx=\"199.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"199.0\" y=\"57\" text-anchor=\"middle\">C</text>\n  <text class=\"small\" x=\"199\" y=\"175\" text-anchor=\"middle\">Boiled peas</text>\n  <g transform=\"translate(277 112) scale(1.0)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><ellipse class=\"white\" cx=\"-8\" cy=\"0\" rx=\"13\" ry=\"8\"/><circle class=\"orange\" cx=\"12\" cy=\"0\" r=\"11\"/><ellipse class=\"white\" cx=\"12\" cy=\"0\" rx=\"6\" ry=\"4\"/><circle class=\"yellow\" cx=\"12\" cy=\"0\" r=\"2.5\"/></g>\n  <circle class=\"badge\" cx=\"277.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"277.0\" y=\"57\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"277\" y=\"175\" text-anchor=\"middle\">Rice, egg curry</text>\n</svg>", "alt": "Four meal plates labelled A to D: A green salad, B fruits, C boiled peas, D rice with egg curry"}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-sci-animals-b-q01",
    prompt: "Which animal eats grass?",
    options: [
      { id: "a", text: "Goat" },
      { id: "b", text: "Eagle" },
      { id: "c", text: "Lion" },
      { id: "d", text: "Snake" }
    ],
    answerId: "a",
    explanation: "A goat eats grass and leaves. It is a herbivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q02",
    prompt: "What do we call animals that eat other animals?",
    options: [
      { id: "a", text: "Herbivores" },
      { id: "b", text: "Carnivores" },
      { id: "c", text: "Omnivores" },
      { id: "d", text: "Plants" }
    ],
    answerId: "b",
    explanation: "Carnivores are animal eaters. Lions, tigers and eagles are carnivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q03",
    prompt: "What does a snake eat?",
    options: [
      { id: "a", text: "Grass" },
      { id: "b", text: "Leaves" },
      { id: "c", text: "Frogs and rats" },
      { id: "d", text: "Fruits" }
    ],
    answerId: "c",
    explanation: "A snake eats small animals like frogs, rats and eggs. It is a carnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q04",
    prompt: "Look at the picture. A spider made this to live in and to catch food. What is it called?",
    options: [
      { id: "a", text: "Nest" },
      { id: "b", text: "Hive" },
      { id: "c", text: "Den" },
      { id: "d", text: "Web" }
    ],
    answerId: "d",
    explanation: "A spider spins a sticky web. Insects like the fly get stuck in it, and the spider eats them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A round, sticky silk web with a spider in the middle and a fly stuck near the edge\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">A home made of silk threads</text>\n  <path class=\"thin\" d=\"M 160 110 L 255 110\"/>\n  <path class=\"thin\" d=\"M 160 110 L 227 166\"/>\n  <path class=\"thin\" d=\"M 160 110 L 159 189\"/>\n  <path class=\"thin\" d=\"M 160 110 L 92 166\"/>\n  <path class=\"thin\" d=\"M 160 110 L 65 109\"/>\n  <path class=\"thin\" d=\"M 160 110 L 92 53\"/>\n  <path class=\"thin\" d=\"M 160 110 L 160 30\"/>\n  <path class=\"thin\" d=\"M 160 110 L 227 53\"/>\n  <polyline class=\"thin\" points=\"183,110 176,124 160,130 144,124 137,110 144,96 160,90 176,96 183,110\"/>\n  <polyline class=\"thin\" points=\"206,110 193,138 160,150 127,138 114,110 127,82 160,70 193,82 206,110\"/>\n  <polyline class=\"thin\" points=\"229,110 209,152 160,170 111,152 91,110 111,68 160,50 209,68 229,110\"/>\n  <polyline class=\"thin\" points=\"252,110 225,167 160,190 95,167 68,110 95,53 160,30 225,53 252,110\"/>\n  <g transform=\"translate(160 110) scale(1.0)\"><ellipse class=\"dark\" cx=\"0\" cy=\"0\" rx=\"7\" ry=\"9\"/><circle class=\"dark\" cx=\"0\" cy=\"-11\" r=\"5\"/><path class=\"line\" d=\"M 0 -4 L -16 -12\"/><path class=\"line\" d=\"M 0 -1 L -16 -3\"/><path class=\"line\" d=\"M 0 2 L -16 6\"/><path class=\"line\" d=\"M 0 5 L -16 15\"/><path class=\"line\" d=\"M 0 -4 L 16 -12\"/><path class=\"line\" d=\"M 0 -1 L 16 -3\"/><path class=\"line\" d=\"M 0 2 L 16 6\"/><path class=\"line\" d=\"M 0 5 L 16 15\"/></g>\n  <g transform=\"translate(214 80) scale(1.0)\"><ellipse class=\"dark\" cx=\"0\" cy=\"0\" rx=\"5\" ry=\"3\"/><ellipse fill=\"#dff1fb\" stroke=\"#333\" stroke-width=\"1\" cx=\"-3\" cy=\"-5\" rx=\"5\" ry=\"3\"/><ellipse fill=\"#dff1fb\" stroke=\"#333\" stroke-width=\"1\" cx=\"3\" cy=\"-5\" rx=\"5\" ry=\"3\"/></g>\n  <text class=\"small\" x=\"250\" y=\"66\">fly stuck</text>\n</svg>", "alt": "A round, sticky silk web with a spider in the middle and a fly stuck near the edge"}
  },
  {
    id: "g3-sci-animals-b-q05",
    prompt: "Look at the food chain. Grass \u2192 Deer \u2192 Tiger. Which animal in this chain is a herbivore?",
    options: [
      { id: "a", text: "Deer" },
      { id: "b", text: "Tiger" },
      { id: "c", text: "Both deer and tiger" },
      { id: "d", text: "Neither of them" }
    ],
    answerId: "a",
    explanation: "The deer eats grass, so it is a herbivore. The tiger eats the deer, so it is a carnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Food chain picture: grass, arrow, deer, arrow, tiger\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">A forest food chain</text>\n  <rect class=\"card\" x=\"5\" y=\"50\" width=\"90\" height=\"120\" rx=\"8\"/>\n  <g transform=\"translate(50 104) scale(1.0)\"><g transform=\"translate(0 0) scale(1.6)\"><path class=\"green\" d=\"M -18 10 L -12 -16 L -8 8 L -2 -22 L 2 8 L 8 -18 L 11 8 L 18 -12 L 18 10 Z\"/></g></g>\n  <text class=\"small\" x=\"50\" y=\"160\" text-anchor=\"middle\">Grass</text>\n  <rect class=\"card\" x=\"115\" y=\"50\" width=\"90\" height=\"120\" rx=\"8\"/>\n  <g transform=\"translate(160 104) scale(1.0)\"><ellipse class=\"brown\" cx=\"-4\" cy=\"6\" rx=\"24\" ry=\"12\"/><path class=\"line\" d=\"M -20 16 L -20 34 M -10 16 L -10 34 M 6 16 L 6 34 M 14 16 L 14 34\"/><circle class=\"brown\" cx=\"22\" cy=\"-10\" r=\"9\"/><path class=\"line\" d=\"M 18 -18 L 14 -32 M 14 -26 L 8 -30 M 26 -18 L 30 -32 M 30 -26 L 36 -30\"/><circle cx=\"25\" cy=\"-12\" r=\"1.5\" fill=\"#333\"/></g>\n  <text class=\"small\" x=\"160\" y=\"160\" text-anchor=\"middle\">Deer</text>\n  <rect class=\"card\" x=\"225\" y=\"50\" width=\"90\" height=\"120\" rx=\"8\"/>\n  <g transform=\"translate(270 104) scale(1.0)\"><ellipse class=\"orange\" cx=\"-4\" cy=\"6\" rx=\"26\" ry=\"12\"/><path class=\"line\" d=\"M -14 -4 L -10 16 M -2 -6 L 0 18 M 10 -4 L 8 16\"/><path class=\"line\" d=\"M -20 16 L -20 34 M -10 16 L -10 34 M 6 16 L 6 34 M 14 16 L 14 34\"/><circle class=\"orange\" cx=\"24\" cy=\"-8\" r=\"11\"/><circle class=\"orange\" cx=\"18\" cy=\"-18\" r=\"4\"/><circle class=\"orange\" cx=\"30\" cy=\"-18\" r=\"4\"/><circle cx=\"27\" cy=\"-10\" r=\"1.5\" fill=\"#333\"/><path class=\"line\" d=\"M -30 2 Q -40 -10 -34 -18\"/></g>\n  <text class=\"small\" x=\"270\" y=\"160\" text-anchor=\"middle\">Tiger</text>\n  <path class=\"arrow\" d=\"M 97 110 L 113 110\"/><polyline class=\"arrow\" points=\"107,104 113,110 107,116\"/>\n  <path class=\"arrow\" d=\"M 207 110 L 223 110\"/><polyline class=\"arrow\" points=\"217,104 223,110 217,116\"/>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Arrow means \"is eaten by\"</text>\n</svg>", "alt": "Food chain picture: grass, arrow, deer, arrow, tiger"}
  },
  {
    id: "g3-sci-animals-b-q06",
    prompt: "Farmers build a home for their cows. What is it called?",
    options: [
      { id: "a", text: "Shed" },
      { id: "b", text: "Hive" },
      { id: "c", text: "Web" },
      { id: "d", text: "Nest" }
    ],
    answerId: "a",
    explanation: "Cows live in a cowshed. It keeps them safe from rain and hot sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q07",
    prompt: "Which of these is an omnivore?",
    options: [
      { id: "a", text: "Deer" },
      { id: "b", text: "Human" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Rabbit" }
    ],
    answerId: "b",
    explanation: "Humans eat plant food like rice and fruits. We also eat eggs, fish or milk. So we are omnivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q08",
    prompt: "Look at this small hill of soil. It has many tunnels inside. Tiny insects live here together. What is it called?",
    options: [
      { id: "a", text: "Stable" },
      { id: "b", text: "Kennel" },
      { id: "c", text: "Anthill" },
      { id: "d", text: "Sty" }
    ],
    answerId: "c",
    explanation: "Ants live together in an anthill. It has many tiny tunnels and rooms.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A hill of soil cut open to show tunnels and small rooms inside, with ants walking around it\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"170\"/>\n  <rect class=\"soil\" x=\"0\" y=\"170\" width=\"320\" height=\"50\"/>\n  <path class=\"soil\" d=\"M 60 170 Q 110 40 160 40 Q 210 40 260 170 Z\"/>\n  <path fill=\"none\" stroke=\"#5a3a20\" stroke-width=\"7\" stroke-linecap=\"round\" d=\"M 160 46 L 158 80 Q 130 100 140 130 M 158 80 Q 190 100 182 150 M 140 130 L 120 160 M 182 150 L 210 168\"/>\n  <ellipse fill=\"#5a3a20\" cx=\"140\" cy=\"130\" rx=\"12\" ry=\"7\"/><ellipse fill=\"#5a3a20\" cx=\"182\" cy=\"150\" rx=\"12\" ry=\"7\"/>\n  <g transform=\"translate(110 182) scale(1.4)\"><ellipse class=\"dark\" cx=\"-4\" cy=\"0\" rx=\"3\" ry=\"2\"/><circle class=\"dark\" cx=\"1\" cy=\"0\" r=\"1.6\"/><circle class=\"dark\" cx=\"5\" cy=\"0\" r=\"2\"/></g>\n  <g transform=\"translate(140 190) scale(1.4)\"><ellipse class=\"dark\" cx=\"-4\" cy=\"0\" rx=\"3\" ry=\"2\"/><circle class=\"dark\" cx=\"1\" cy=\"0\" r=\"1.6\"/><circle class=\"dark\" cx=\"5\" cy=\"0\" r=\"2\"/></g>\n  <g transform=\"translate(230 186) scale(1.4)\"><ellipse class=\"dark\" cx=\"-4\" cy=\"0\" rx=\"3\" ry=\"2\"/><circle class=\"dark\" cx=\"1\" cy=\"0\" r=\"1.6\"/><circle class=\"dark\" cx=\"5\" cy=\"0\" r=\"2\"/></g>\n  <g transform=\"translate(160 36) scale(1.4)\"><ellipse class=\"dark\" cx=\"-4\" cy=\"0\" rx=\"3\" ry=\"2\"/><circle class=\"dark\" cx=\"1\" cy=\"0\" r=\"1.6\"/><circle class=\"dark\" cx=\"5\" cy=\"0\" r=\"2\"/></g>\n  <text class=\"small\" x=\"160\" y=\"210\" text-anchor=\"middle\">Inside: many tiny tunnels and rooms</text>\n</svg>", "alt": "A hill of soil cut open to show tunnels and small rooms inside, with ants walking around it"}
  },
  {
    id: "g3-sci-animals-b-q09",
    prompt: "Which animal lives in a nest?",
    options: [
      { id: "a", text: "Sparrow" },
      { id: "b", text: "Lion" },
      { id: "c", text: "Pig" },
      { id: "d", text: "Horse" }
    ],
    answerId: "a",
    explanation: "A sparrow is a bird. Birds build nests to live in and lay eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q10",
    prompt: "What does an elephant eat?",
    options: [
      { id: "a", text: "Meat" },
      { id: "b", text: "Fish" },
      { id: "c", text: "Insects" },
      { id: "d", text: "Leaves and branches" }
    ],
    answerId: "d",
    explanation: "An elephant is a big plant eater. It eats grass, leaves, branches and fruits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q11",
    prompt: "Why do animals need homes?",
    options: [
      { id: "a", text: "To stay safe from enemies, rain and heat" },
      { id: "b", text: "To grow taller" },
      { id: "c", text: "To change their colour" },
      { id: "d", text: "To learn to talk" }
    ],
    answerId: "a",
    explanation: "A home is a safe place. It protects animals from enemies and bad weather.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q12",
    prompt: "Which animal carries its home on its back?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Snail" },
      { id: "c", text: "Dog" },
      { id: "d", text: "Lion" }
    ],
    answerId: "b",
    explanation: "A snail has a hard shell on its back. It hides inside the shell when in danger.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q13",
    prompt: "Look at the parrot's beak. It is strong and curved. How does this beak help the parrot?",
    options: [
      { id: "a", text: "To tear meat" },
      { id: "b", text: "To catch fish" },
      { id: "c", text: "To crack nuts and eat fruits" },
      { id: "d", text: "To sip nectar" }
    ],
    answerId: "c",
    explanation: "A parrot eats nuts, seeds and fruits. Its strong curved beak cracks hard shells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Close-up of a green parrot head with a strong curved red beak, and a nut beside it\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Parrot's beak</text>\n  <rect class=\"card\" x=\"40\" y=\"38\" width=\"240\" height=\"150\" rx=\"10\"/>\n  <g transform=\"translate(130 112) scale(1.6)\"><circle class=\"green\" cx=\"0\" cy=\"0\" r=\"26\"/><circle class=\"white\" cx=\"8\" cy=\"-6\" r=\"6\"/><circle cx=\"9\" cy=\"-6\" r=\"3\" fill=\"#333\"/><path class=\"red\" d=\"M 22 -12 Q 52 -12 48 24 Q 40 12 24 10 Z\"/><path class=\"red\" d=\"M 24 8 Q 36 10 36 18 Q 28 18 22 12 Z\"/></g>\n  <g transform=\"translate(232 140) scale(1.4)\"><ellipse class=\"brown\" cx=\"0\" cy=\"0\" rx=\"10\" ry=\"8\"/><path class=\"line\" d=\"M -6 -2 Q 0 4 6 -2\"/></g>\n  <text class=\"small\" x=\"160\" y=\"180\" text-anchor=\"middle\">Strong, curved beak</text>\n</svg>", "alt": "Close-up of a green parrot head with a strong curved red beak, and a nut beside it"}
  },
  {
    id: "g3-sci-animals-b-q14",
    prompt: "Look at the sunbird's long, thin beak near the flower. What does this beak help the sunbird do?",
    options: [
      { id: "a", text: "Crack nuts" },
      { id: "b", text: "Sip nectar from flowers" },
      { id: "c", text: "Tear meat" },
      { id: "d", text: "Dig the soil" }
    ],
    answerId: "b",
    explanation: "A long thin beak fits deep inside a flower. The sunbird sips the sweet nectar.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A sunbird with a long thin curved beak reaching into a tube-shaped pink flower\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Sunbird at a flower</text>\n  <rect class=\"card\" x=\"20\" y=\"38\" width=\"280\" height=\"160\" rx=\"10\"/>\n  <g transform=\"translate(90 100) scale(1.2)\"><circle class=\"yellow\" cx=\"0\" cy=\"0\" r=\"26\"/><circle class=\"white\" cx=\"8\" cy=\"-6\" r=\"6\"/><circle cx=\"9\" cy=\"-6\" r=\"3\" fill=\"#333\"/><path class=\"dark\" d=\"M 22 -4 Q 60 4 84 26 Q 58 8 22 4 Z\"/></g>\n  <g transform=\"translate(220 140) scale(1.2)\"><path class=\"line\" d=\"M 0 0 L 0 60\"/><path class=\"green\" d=\"M 0 40 Q 18 30 22 44 Q 10 50 0 44 Z\"/><path class=\"pink\" d=\"M -6 0 L -14 -40 Q 0 -30 0 -44 Q 0 -30 14 -40 L 6 0 Z\"/></g>\n  <text class=\"small\" x=\"160\" y=\"190\" text-anchor=\"middle\">Long, thin beak</text>\n</svg>", "alt": "A sunbird with a long thin curved beak reaching into a tube-shaped pink flower"}
  },
  {
    id: "g3-sci-animals-b-q15",
    prompt: "Which animal has sharp pointed teeth and sharp claws to catch other animals?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Camel" }
    ],
    answerId: "c",
    explanation: "A tiger hunts other animals. Its sharp claws grab, and its pointed teeth tear meat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q16",
    prompt: "Find the odd one out: Lion, Tiger, Eagle, Rabbit.",
    options: [
      { id: "a", text: "Lion" },
      { id: "b", text: "Tiger" },
      { id: "c", text: "Eagle" },
      { id: "d", text: "Rabbit" }
    ],
    answerId: "d",
    explanation: "A rabbit eats plants. Lion, tiger and eagle eat other animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q17",
    prompt: "Look at the four arrows. Which animal is matched with the correct home?",
    options: [
      { id: "a", text: "Row A \u2014 Bee \u2192 den" },
      { id: "b", text: "Row B \u2014 Rabbit \u2192 burrow" },
      { id: "c", text: "Row C \u2014 Horse \u2192 hive" },
      { id: "d", text: "Row D \u2014 Bird \u2192 sty" }
    ],
    answerId: "b",
    explanation: "A rabbit lives in a burrow under the ground. Bees live in hives, horses in stables and birds in nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four rows of arrows from an animal to a home: A bee to den, B rabbit to burrow, C horse to hive, D bird to sty\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Animal to home</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"50\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"55\" text-anchor=\"middle\">A</text>\n  <rect class=\"card\" x=\"36\" y=\"34\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"55\" text-anchor=\"middle\">Bee</text>\n  <path class=\"arrow\" d=\"M 130 50 L 196 50\"/><polyline class=\"arrow\" points=\"190,44 196,50 190,56\"/>\n  <rect class=\"card\" x=\"200\" y=\"30\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 52) scale(0.6)\"><path class=\"grey\" d=\"M -30 22 L -26 -10 Q -10 -30 10 -24 Q 28 -16 30 22 Z\"/><path class=\"dark\" d=\"M -14 22 Q -12 -6 2 -6 Q 14 -6 14 22 Z\"/></g><text class=\"small\" x=\"286\" y=\"54\" text-anchor=\"middle\">Den</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"94\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"99\" text-anchor=\"middle\">B</text>\n  <rect class=\"card\" x=\"36\" y=\"78\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"99\" text-anchor=\"middle\">Rabbit</text>\n  <path class=\"arrow\" d=\"M 130 94 L 196 94\"/><polyline class=\"arrow\" points=\"190,88 196,94 190,100\"/>\n  <rect class=\"card\" x=\"200\" y=\"74\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 96) scale(0.6)\"><path class=\"soil\" d=\"M -26 -4 L 26 -4 L 26 20 L -26 20 Z\"/><path class=\"green\" d=\"M -26 -4 L 26 -4 L 26 -8 L -26 -8 Z\"/><ellipse fill=\"#5a3a20\" cx=\"0\" cy=\"6\" rx=\"12\" ry=\"9\"/></g><text class=\"small\" x=\"286\" y=\"98\" text-anchor=\"middle\">Burrow</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"138\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"143\" text-anchor=\"middle\">C</text>\n  <rect class=\"card\" x=\"36\" y=\"122\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"143\" text-anchor=\"middle\">Horse</text>\n  <path class=\"arrow\" d=\"M 130 138 L 196 138\"/><polyline class=\"arrow\" points=\"190,132 196,138 190,144\"/>\n  <rect class=\"card\" x=\"200\" y=\"118\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 140) scale(0.6)\"><path class=\"line\" d=\"M 0 -30 L 0 -20\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"-14\" rx=\"12\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"-3\" rx=\"18\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"8\" rx=\"19\" ry=\"7\"/><ellipse class=\"yellow\" cx=\"0\" cy=\"18\" rx=\"13\" ry=\"7\"/><circle class=\"dark\" cx=\"0\" cy=\"12\" r=\"3\"/></g><text class=\"small\" x=\"286\" y=\"142\" text-anchor=\"middle\">Hive</text>\n  <circle class=\"badge\" cx=\"18\" cy=\"182\" r=\"11\"/><text class=\"label\" x=\"18\" y=\"187\" text-anchor=\"middle\">D</text>\n  <rect class=\"card\" x=\"36\" y=\"166\" width=\"90\" height=\"32\" rx=\"6\"/><text class=\"label\" x=\"81\" y=\"187\" text-anchor=\"middle\">Bird</text>\n  <path class=\"arrow\" d=\"M 130 182 L 196 182\"/><polyline class=\"arrow\" points=\"190,176 196,182 190,188\"/>\n  <rect class=\"card\" x=\"200\" y=\"162\" width=\"112\" height=\"40\" rx=\"6\"/><g transform=\"translate(232 184) scale(0.6)\"><rect class=\"pink\" x=\"-26\" y=\"-2\" width=\"52\" height=\"22\"/><path class=\"brown\" d=\"M -30 -2 L 30 -2 L 24 -14 L -24 -14 Z\"/><path class=\"line\" d=\"M -18 -2 L -18 20 M 0 -2 L 0 20 M 18 -2 L 18 20\"/></g><text class=\"small\" x=\"286\" y=\"186\" text-anchor=\"middle\">Sty</text>\n</svg>", "alt": "Four rows of arrows from an animal to a home: A bee to den, B rabbit to burrow, C horse to hive, D bird to sty"}
  },
  {
    id: "g3-sci-animals-b-q18",
    prompt: "Baby birds stay in the nest for many days. Why?",
    options: [
      { id: "a", text: "They do not like the sky" },
      { id: "b", text: "They are too big to leave" },
      { id: "c", text: "The nest is very cold" },
      { id: "d", text: "They cannot fly yet and need their parents' care" }
    ],
    answerId: "d",
    explanation: "Baby birds are too small to fly. Their parents feed them and keep them safe in the nest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q19",
    prompt: "Bees store a sweet food inside their hive. What is it?",
    options: [
      { id: "a", text: "Milk" },
      { id: "b", text: "Honey" },
      { id: "c", text: "Grass" },
      { id: "d", text: "Water" }
    ],
    answerId: "b",
    explanation: "Bees make honey from flower nectar. They store it in the hive to eat later.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q20",
    prompt: "The koel does not build its own nest. Where does it lay its eggs?",
    options: [
      { id: "a", text: "In a hole in the ground" },
      { id: "b", text: "In an eagle's nest" },
      { id: "c", text: "In a crow's nest" },
      { id: "d", text: "In a beehive" }
    ],
    answerId: "c",
    explanation: "The koel lays its eggs in a crow's nest. The crow then looks after the koel's eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q21",
    prompt: "Rahul sees this rocky cave in a forest. There are bones and fur near the opening. Which animal most likely lives here?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Rabbit" },
      { id: "d", text: "Lion" }
    ],
    answerId: "d",
    explanation: "Bones and fur are leftovers from a meat meal. A lion eats meat and lives in a den, like a cave.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A rocky cave in a forest with a dark opening marked with a question mark, and bones and fur lying on the grass in front\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <rect class=\"sky\" x=\"0\" y=\"0\" width=\"320\" height=\"170\"/>\n  <rect class=\"green\" x=\"0\" y=\"170\" width=\"320\" height=\"50\"/>\n  <path class=\"grey\" d=\"M 40 172 L 60 70 Q 130 20 210 50 Q 270 80 280 172 Z\"/>\n  <path class=\"dark\" d=\"M 110 172 Q 112 100 160 100 Q 206 100 208 172 Z\"/>\n  <g transform=\"translate(100 190) scale(1.0)\"><path fill=\"none\" stroke=\"#333\" stroke-width=\"9\" stroke-linecap=\"round\" d=\"M -12 0 L 12 0\"/><path fill=\"none\" stroke=\"#fffaf0\" stroke-width=\"5\" stroke-linecap=\"round\" d=\"M -12 0 L 12 0\"/></g>\n  <g transform=\"translate(230 196) scale(1.0)\"><path fill=\"none\" stroke=\"#333\" stroke-width=\"9\" stroke-linecap=\"round\" d=\"M -10 -6 L 10 6\"/><path fill=\"none\" stroke=\"#fffaf0\" stroke-width=\"5\" stroke-linecap=\"round\" d=\"M -10 -6 L 10 6\"/></g>\n  <g transform=\"translate(180 186) scale(0.8)\"><path fill=\"none\" stroke=\"#333\" stroke-width=\"9\" stroke-linecap=\"round\" d=\"M -12 0 L 12 0\"/><path fill=\"none\" stroke=\"#fffaf0\" stroke-width=\"5\" stroke-linecap=\"round\" d=\"M -12 0 L 12 0\"/></g>\n  <path fill=\"#b07a4a\" stroke=\"none\" d=\"M 140 196 q 6 -8 12 0 q 6 -8 12 0 z\"/>\n  <text class=\"small\" x=\"312\" y=\"214\" text-anchor=\"end\">bones and fur</text>\n  <text class=\"label\" x=\"160\" y=\"140\" text-anchor=\"middle\" fill=\"#fff\" style=\"fill:#fff\">?</text>\n</svg>", "alt": "A rocky cave in a forest with a dark opening marked with a question mark, and bones and fur lying on the grass in front"}
  },
  {
    id: "g3-sci-animals-b-q22",
    prompt: "A cow chews grass again and again for a long time. Look at the mouth clues. Which card shows the cow's teeth?",
    options: [
      { id: "a", text: "Card A \u2014 Long pointed teeth" },
      { id: "b", text: "Card B \u2014 A hooked beak" },
      { id: "c", text: "Card C \u2014 Flat grinding teeth" },
      { id: "d", text: "Card D \u2014 No teeth" }
    ],
    answerId: "c",
    explanation: "A cow has flat teeth. They grind tough grass into soft bits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four mouth clue cards labelled A to D: A long pointed teeth, B a hooked beak, C flat grinding teeth, D gums with no teeth\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Mouth clues</text>\n  <rect class=\"card\" x=\"8\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"86\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"164\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"242\" y=\"34\" width=\"70\" height=\"156\" rx=\"8\"/>\n  <g transform=\"translate(43 112) scale(0.55)\"><path class=\"pink\" d=\"M -50 -6 Q 0 -30 50 -6 L 50 6 Q 0 -16 -50 6 Z\"/><path class=\"white\" d=\"M -42 -7.3 L -36 10.7 L -30 -7.3 Z\"/><path class=\"white\" d=\"M -28 -8.9 L -22 9.1 L -16 -8.9 Z\"/><path class=\"white\" d=\"M -14 -10.4 L -8 23.6 L -2 -10.4 Z\"/><path class=\"white\" d=\"M 0 -12.0 L 6 22.0 L 12 -12.0 Z\"/><path class=\"white\" d=\"M 14 -10.4 L 20 23.6 L 26 -10.4 Z\"/><path class=\"white\" d=\"M 28 -8.9 L 34 9.1 L 40 -8.9 Z\"/></g>\n  <circle class=\"badge\" cx=\"43.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"43.0\" y=\"57\" text-anchor=\"middle\">A</text>\n  <g transform=\"translate(115 112) scale(0.55)\"><circle class=\"brown\" cx=\"0\" cy=\"0\" r=\"26\"/><circle class=\"white\" cx=\"8\" cy=\"-6\" r=\"6\"/><circle cx=\"9\" cy=\"-6\" r=\"3\" fill=\"#333\"/><path class=\"yellow\" d=\"M 22 -10 Q 56 -14 54 18 Q 46 4 22 8 Z\"/></g>\n  <circle class=\"badge\" cx=\"121.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"121.0\" y=\"57\" text-anchor=\"middle\">B</text>\n  <g transform=\"translate(199 112) scale(0.55)\"><path class=\"pink\" d=\"M -50 -6 Q 0 -30 50 -6 L 50 6 Q 0 -16 -50 6 Z\"/><rect class=\"white\" x=\"-42\" y=\"-9.3\" width=\"12\" height=\"12\" rx=\"1\"/><rect class=\"white\" x=\"-28\" y=\"-10.9\" width=\"12\" height=\"12\" rx=\"1\"/><rect class=\"white\" x=\"-14\" y=\"-12.4\" width=\"12\" height=\"12\" rx=\"1\"/><rect class=\"white\" x=\"0\" y=\"-14.0\" width=\"12\" height=\"12\" rx=\"1\"/><rect class=\"white\" x=\"14\" y=\"-12.4\" width=\"12\" height=\"12\" rx=\"1\"/><rect class=\"white\" x=\"28\" y=\"-10.9\" width=\"12\" height=\"12\" rx=\"1\"/></g>\n  <circle class=\"badge\" cx=\"199.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"199.0\" y=\"57\" text-anchor=\"middle\">C</text>\n  <g transform=\"translate(277 112) scale(0.75)\"><path class=\"pink\" d=\"M -36 -4 Q 0 -24 36 -4 L 36 6 Q 0 -12 -36 6 Z\"/></g>\n  <circle class=\"badge\" cx=\"277.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"277.0\" y=\"57\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"43\" y=\"175\" text-anchor=\"middle\">Pointed teeth</text>\n  <text class=\"small\" x=\"121\" y=\"175\" text-anchor=\"middle\">Hooked beak</text>\n  <text class=\"small\" x=\"199\" y=\"175\" text-anchor=\"middle\">Flat teeth</text>\n  <text class=\"small\" x=\"277\" y=\"175\" text-anchor=\"middle\">No teeth</text>\n</svg>", "alt": "Four mouth clue cards labelled A to D: A long pointed teeth, B a hooked beak, C flat grinding teeth, D gums with no teeth"}
  },
  {
    id: "g3-sci-animals-b-q23",
    prompt: "A goat, a lion and a crow each pick the plate they like. Which order matches Plate 1, Plate 2 and Plate 3?",
    options: [
      { id: "a", text: "Goat, Lion, Crow" },
      { id: "b", text: "Lion, Goat, Crow" },
      { id: "c", text: "Crow, Goat, Lion" },
      { id: "d", text: "Goat, Crow, Lion" }
    ],
    answerId: "a",
    explanation: "Plate 1 has plants, so it is for the goat, a herbivore. Plate 2 has meat, so it is for the lion, a carnivore. Plate 3 has both, so it is for the crow, an omnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three plates numbered 1 to 3: plate 1 grass, plate 2 meat, plate 3 grains and a worm\">\n  <style>\n    .part { fill:#f4e4c1; stroke:#333; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .plate { fill:#e9eef2; stroke:#555; stroke-width:2; }\n    .line { fill:none; stroke:#333; stroke-width:2; stroke-linecap:round; }\n    .thin { fill:none; stroke:#555; stroke-width:1; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .dkgreen { fill:#4f8a2b; stroke:#333; stroke-width:1.5; }\n    .orange { fill:#f7a440; stroke:#333; stroke-width:1.5; }\n    .red { fill:#e8564a; stroke:#333; stroke-width:1.5; }\n    .pink { fill:#f6a5b5; stroke:#333; stroke-width:1.5; }\n    .brown { fill:#b07a4a; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#ffd95a; stroke:#333; stroke-width:1.5; }\n    .grey { fill:#c9cdd2; stroke:#333; stroke-width:1.5; }\n    .white { fill:#ffffff; stroke:#333; stroke-width:1.5; }\n    .dark { fill:#3a3a3a; stroke:#333; stroke-width:1.5; }\n    .soil { fill:#c89b6a; stroke:#7a5532; stroke-width:1.5; }\n    .sky { fill:#dff1fb; stroke:none; }\n  </style>\n\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Three hungry animals, three plates</text>\n  <rect class=\"card\" x=\"8\" y=\"34\" width=\"96\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"112\" y=\"34\" width=\"96\" height=\"156\" rx=\"8\"/>\n  <rect class=\"card\" x=\"216\" y=\"34\" width=\"96\" height=\"156\" rx=\"8\"/>\n  <g transform=\"translate(56 112) scale(1.3)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><path class=\"green\" d=\"M -18 10 L -12 -16 L -8 8 L -2 -22 L 2 8 L 8 -18 L 11 8 L 18 -12 L 18 10 Z\"/></g>\n  <circle class=\"badge\" cx=\"56.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"56.0\" y=\"57\" text-anchor=\"middle\">1</text>\n  <text class=\"small\" x=\"56\" y=\"175\" text-anchor=\"middle\">Leaves and grass</text>\n  <g transform=\"translate(160 112) scale(1.3)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><path class=\"red\" d=\"M -16 4 Q -20 -14 -2 -14 Q 14 -12 8 4 Q 2 12 -10 10 Z\"/><path class=\"line\" d=\"M 6 0 L 18 -10\"/><circle class=\"white\" cx=\"20\" cy=\"-13\" r=\"4\"/><circle class=\"white\" cx=\"16\" cy=\"-15\" r=\"3.5\"/></g>\n  <circle class=\"badge\" cx=\"160.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"160.0\" y=\"57\" text-anchor=\"middle\">2</text>\n  <text class=\"small\" x=\"160\" y=\"175\" text-anchor=\"middle\">Meat</text>\n  <g transform=\"translate(264 112) scale(1.3)\"><ellipse class=\"plate\" cx=\"0\" cy=\"8\" rx=\"30\" ry=\"12\"/><ellipse class=\"yellow\" cx=\"-18\" cy=\"4\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-12\" cy=\"0\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-6\" cy=\"5\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-14\" cy=\"8\" rx=\"3\" ry=\"2\"/><ellipse class=\"yellow\" cx=\"-8\" cy=\"-4\" rx=\"3\" ry=\"2\"/><path d=\"M 0 4 q 5 -8 10 0 t 10 0\" fill=\"none\" stroke=\"#c0567a\" stroke-width=\"5\" stroke-linecap=\"round\"/></g>\n  <circle class=\"badge\" cx=\"264.0\" cy=\"52\" r=\"11\"/><text class=\"label\" x=\"264.0\" y=\"57\" text-anchor=\"middle\">3</text>\n  <text class=\"small\" x=\"264\" y=\"175\" text-anchor=\"middle\">Grains + worm</text>\n</svg>", "alt": "Three plates numbered 1 to 3: plate 1 grass, plate 2 meat, plate 3 grains and a worm"}
  },
  {
    id: "g3-sci-animals-b-q24",
    prompt: "A weaver bird hangs its nest from the tip of a thin branch. How does this help?",
    options: [
      { id: "a", text: "The nest gets more rain" },
      { id: "b", text: "The bird can find food inside the nest" },
      { id: "c", text: "The nest is easy for snakes to reach" },
      { id: "d", text: "Snakes and other enemies find it hard to reach the eggs" }
    ],
    answerId: "d",
    explanation: "A thin branch cannot hold heavy enemies. So the eggs and babies stay safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udc3e",
    title: "Animals, food and homes",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Animals need food and a safe home. Some eat plants, some eat other animals, some eat both.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Herbivores", reveal: "Eat plants", emoji: "\ud83c\udf3f" },
      { label: "Carnivores", reveal: "Eat other animals", emoji: "\ud83e\udd81" },
      { label: "Omnivores", reveal: "Eat both", emoji: "\ud83d\udc3b" },
      { label: "Homes", reveal: "Nests, burrows, dens, hives", emoji: "\ud83c\udfe0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "An animal that eats only plants is a\u2026",
    options: [
        { id: "a", text: "Carnivore" },
        { id: "b", text: "Herbivore" },
        { id: "c", text: "Omnivore" },
        { id: "d", text: "Producer" }
    ],
    answerId: "b",
    why: "Herbivores eat plants.",
    visual: "plant",
    speak: "An animal that eats only plants is a\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Food groups", "Homes keep animals safe", "Match animal to diet", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g3ScienceAnimals: ChapterDef = {
  id: "animals-food-homes",
  title: "Animals: Food & Homes",
  emoji: "\ud83d\udc3e",
  blurb: "What animals eat and where they live",
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

export const g3ScienceAnimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
