import type { ChapterDef, PrepQuestion } from "../types";

/** Sun, Moon and Solar System - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-space-a-q01",
    prompt: "What is the Sun?",
    options: [
      { id: "a", text: "A planet" },
      { id: "b", text: "A star" },
      { id: "c", text: "A satellite" },
      { id: "d", text: "A comet" }
    ],
    answerId: "b",
    explanation: "The Sun is a star. It is a huge ball of very hot gases that makes its own light and heat. It is the nearest star to Earth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q02",
    prompt: "Which planet is closest to the Sun?",
    options: [
      { id: "a", text: "Venus" },
      { id: "b", text: "Earth" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Mars" }
    ],
    answerId: "c",
    explanation: "Mercury is the first planet from the Sun. The order is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q03",
    prompt: "What causes day and night on Earth?",
    options: [
      { id: "a", text: "Earth going around the Sun" },
      { id: "b", text: "The Moon spinning on its axis" },
      { id: "c", text: "The Sun moving around Earth" },
      { id: "d", text: "Earth spinning on its axis" }
    ],
    answerId: "d",
    explanation: "Earth rotates (spins) on its axis once in about 24 hours. The side facing the Sun has day, and the side facing away has night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q04",
    prompt: "About how long does Earth take to go once around the Sun?",
    options: [
      { id: "a", text: "About 365\u00bc days" },
      { id: "b", text: "About 24 hours" },
      { id: "c", text: "About 29\u00bd days" },
      { id: "d", text: "About 12 hours" }
    ],
    answerId: "a",
    explanation: "One revolution of Earth around the Sun takes about 365\u00bc days. This is one year. 24 hours is one rotation, and about 29\u00bd days is one cycle of Moon phases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q05",
    prompt: "Why does the Moon shine at night?",
    options: [
      { id: "a", text: "It has fires burning on its surface." },
      { id: "b", text: "It reflects light from the Sun." },
      { id: "c", text: "It reflects light from the lamps in our cities." },
      { id: "d", text: "Its rocks glow because they are very hot." }
    ],
    answerId: "b",
    explanation: "The Moon has no light of its own. Sunlight falls on it and bounces off towards Earth, so we see it shining.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q06",
    prompt: "The picture shows four planets drawn roughly to their real sizes (not their real distances). Which letter shows Jupiter, the largest planet in our solar system?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "d",
    explanation: "Jupiter is the biggest planet, so it is the largest ball, S, with stripes of clouds and a red spot. P, with bright rings, is Saturn, the second largest. Q is a blue ice giant like Neptune, and R is small rocky Earth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Four planets drawn roughly to size against a dark sky, marked P, Q, R and S; one has rings and one has stripes\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"28\" cy=\"110\" r=\"8\" fill=\"#60a5fa\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <circle cx=\"76\" cy=\"110\" r=\"18\" fill=\"#3b82f6\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"150\" cy=\"110\" rx=\"42\" ry=\"9\" fill=\"none\" stroke=\"#fcd34d\" stroke-width=\"4\"/>\n  <circle cx=\"150\" cy=\"110\" r=\"24\" fill=\"#fbbf77\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <path d=\"M108 110 A42 9 0 0 0 192 110\" fill=\"none\" stroke=\"#fcd34d\" stroke-width=\"4\"/>\n  <circle cx=\"254\" cy=\"110\" r=\"48\" fill=\"#d6a46b\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <path d=\"M208 96 H300 M206 112 H302 M210 128 H298\" stroke=\"#a16207\" stroke-width=\"5\" opacity=\"0.7\"/>\n  <ellipse cx=\"270\" cy=\"128\" rx=\"9\" ry=\"5\" fill=\"#b91c1c\" opacity=\"0.8\"/>\n  <circle cx=\"28\" cy=\"190\" r=\"10\" class=\"tag\"/><text x=\"28\" y=\"194.5\" text-anchor=\"middle\" class=\"label\">R</text>\n  <circle cx=\"76\" cy=\"190\" r=\"10\" class=\"tag\"/><text x=\"76\" y=\"194.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n  <circle cx=\"150\" cy=\"190\" r=\"10\" class=\"tag\"/><text x=\"150\" y=\"194.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  <circle cx=\"254\" cy=\"190\" r=\"10\" class=\"tag\"/><text x=\"254\" y=\"194.5\" text-anchor=\"middle\" class=\"label\">S</text>\n  <text x=\"160\" y=\"22\" text-anchor=\"middle\" class=\"label\" fill=\"#f8fafc\" style=\"fill:#f8fafc\">Four planets (sizes roughly to scale)</text>\n</svg>", "alt": "Four planets drawn roughly to size against a dark sky, marked P, Q, R and S; one has rings and one has stripes"}
  },
  {
    id: "g5-sci-space-a-q07",
    prompt: "Which planet is known as the \"Red Planet\"?",
    options: [
      { id: "a", text: "Mars" },
      { id: "b", text: "Venus" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Mercury" }
    ],
    answerId: "a",
    explanation: "Mars is covered with reddish, rusty dust and rocks, so it looks red in the sky.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q08",
    prompt: "Zoya drew four shapes of the Moon but mixed up the order. Which order shows the Moon going from New Moon to Full Moon?",
    options: [
      { id: "a", text: "1, 2, 3, 4" },
      { id: "b", text: "4, 3, 2, 1" },
      { id: "c", text: "2, 4, 3, 1" },
      { id: "d", text: "2, 3, 4, 1" }
    ],
    answerId: "c",
    explanation: "The cycle starts with New Moon (2, all dark). Then a thin crescent appears (4), then a half Moon (3), and finally the Full Moon (1). The lit part grows each night, which is called waxing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Four Moon shapes marked 1 to 4 in mixed order: a fully lit disc, a dark disc, a half-lit disc and a thin lit curve\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#1e293b\"/>\n  <circle cx=\"45\" cy=\"100\" r=\"30\" class=\"dark\"/>\n  <circle cx=\"45\" cy=\"100\" r=\"30\" class=\"lit\"/>\n  <circle cx=\"45\" cy=\"165\" r=\"10\" class=\"tag\"/><text x=\"45\" y=\"169.5\" text-anchor=\"middle\" class=\"label\">1</text>\n  <circle cx=\"122\" cy=\"100\" r=\"30\" class=\"dark\"/>\n  <circle cx=\"122\" cy=\"165\" r=\"10\" class=\"tag\"/><text x=\"122\" y=\"169.5\" text-anchor=\"middle\" class=\"label\">2</text>\n  <circle cx=\"198\" cy=\"100\" r=\"30\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M198,70 A30,30 0 0 1 198,130 Z\"/>\n  <circle cx=\"198\" cy=\"165\" r=\"10\" class=\"tag\"/><text x=\"198\" y=\"169.5\" text-anchor=\"middle\" class=\"label\">3</text>\n  <circle cx=\"275\" cy=\"100\" r=\"30\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M275,70 A30,30 0 0 1 275,130 A15.0,30 0 0 0 275,70 Z\"/>\n  <circle cx=\"275\" cy=\"165\" r=\"10\" class=\"tag\"/><text x=\"275\" y=\"169.5\" text-anchor=\"middle\" class=\"label\">4</text>\n  <text x=\"160\" y=\"28\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">Moon shapes (mixed up)</text>\n  <text x=\"160\" y=\"205\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">Shaded = dark part, pale yellow = lit part</text>\n</svg>", "alt": "Four Moon shapes marked 1 to 4 in mixed order: a fully lit disc, a dark disc, a half-lit disc and a thin lit curve"}
  },
  {
    id: "g5-sci-space-a-q09",
    prompt: "In the picture, the eight planets are numbered 1 to 8 in order going out from the Sun. Which number is Earth, the planet we live on?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "The order from the Sun is Mercury (1), Venus (2), Earth (3), Mars (4), Jupiter (5), Saturn (6), Uranus (7) and Neptune (8). So Earth is number 3.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"The Sun on the left with eight planets on their orbits, numbered 1 to 8 going outwards from the Sun\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"66\" class=\"sun\"/>\n  <text x=\"4\" y=\"114\" class=\"label\">Sun</text>\n  <circle cx=\"-40\" cy=\"110\" r=\"88\" class=\"orbit\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"110\" class=\"orbit\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"134\" class=\"orbit\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"157\" class=\"orbit\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"195\" class=\"orbit\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"241\" class=\"orbit\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"284\" class=\"orbit\"/>\n  <circle cx=\"-40\" cy=\"110\" r=\"325\" class=\"orbit\"/>\n  <circle cx=\"48\" cy=\"110\" r=\"4\" fill=\"#94a3b8\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"48\" y=\"96\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">1</text>\n  <circle cx=\"70\" cy=\"110\" r=\"6\" fill=\"#fde68a\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"70\" y=\"136\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">2</text>\n  <circle cx=\"94\" cy=\"110\" r=\"6\" fill=\"#60a5fa\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"94\" y=\"94\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">3</text>\n  <circle cx=\"117\" cy=\"110\" r=\"5\" fill=\"#ef4444\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"117\" y=\"135\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">4</text>\n  <circle cx=\"155\" cy=\"110\" r=\"15\" fill=\"#d6a46b\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"155\" y=\"85\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">5</text>\n  <ellipse cx=\"201\" cy=\"110\" rx=\"21\" ry=\"4\" fill=\"none\" stroke=\"#fcd34d\" stroke-width=\"2.5\"/>\n  <circle cx=\"201\" cy=\"110\" r=\"12\" fill=\"#fbbf77\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"201\" y=\"142\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">6</text>\n  <circle cx=\"244\" cy=\"110\" r=\"9\" fill=\"#67e8f9\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"244\" y=\"91\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">7</text>\n  <circle cx=\"285\" cy=\"110\" r=\"9\" fill=\"#3b82f6\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"285\" y=\"139\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">8</text>\n  <text x=\"160\" y=\"205\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">Not to scale</text>\n</svg>", "alt": "The Sun on the left with eight planets on their orbits, numbered 1 to 8 going outwards from the Sun"}
  },
  {
    id: "g5-sci-space-a-q10",
    prompt: "The Moon is Earth's:",
    options: [
      { id: "a", text: "Nearest planet" },
      { id: "b", text: "Nearest star" },
      { id: "c", text: "Natural satellite" },
      { id: "d", text: "Largest asteroid" }
    ],
    answerId: "c",
    explanation: "A satellite is a body that goes around a planet. The Moon goes around Earth naturally, so it is Earth's natural satellite.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q11",
    prompt: "Earth spins from west to east. Because of this, in which direction does the Sun appear to rise?",
    options: [
      { id: "a", text: "East" },
      { id: "b", text: "West" },
      { id: "c", text: "North" },
      { id: "d", text: "South" }
    ],
    answerId: "a",
    explanation: "As Earth turns from west to east, places on Earth turn towards the Sun from the eastern side. So the Sun seems to rise in the east and set in the west.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q12",
    prompt: "Arjun puts a stick in an open field at 7 a.m. The Sun has just risen, as shown. In which direction will the stick's shadow point?",
    options: [
      { id: "a", text: "East" },
      { id: "b", text: "North" },
      { id: "c", text: "West" },
      { id: "d", text: "South" }
    ],
    answerId: "c",
    explanation: "A shadow always forms on the side away from the light. In the morning the Sun is in the east, so the shadow falls towards the west.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A stick standing upright on open ground with the Sun low on the eastern side at 7 a.m. and a compass showing N, S, E and W; no shadow is drawn\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"150\" fill=\"#fde7c7\"/>\n  <rect x=\"0\" y=\"150\" width=\"320\" height=\"70\" fill=\"#bbf7d0\"/>\n  <circle cx=\"282\" cy=\"138\" r=\"20\" class=\"sun\"/>\n  <text x=\"240\" y=\"108\" class=\"small\">Sun at 7 a.m.</text>\n  <line x1=\"259.5\" y1=\"132.0\" x2=\"250.5\" y2=\"129.6\" class=\"ray\"/>\n  <line x1=\"264.0\" y1=\"120.0\" x2=\"256.8\" y2=\"112.8\" class=\"ray\"/>\n  <line x1=\"282.0\" y1=\"115.5\" x2=\"282.0\" y2=\"106.5\" class=\"ray\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"96\" stroke=\"#7c2d12\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <text x=\"168\" y=\"100\" class=\"small\">stick</text>\n  <circle cx=\"52\" cy=\"58\" r=\"30\" class=\"frame\"/>\n  <line x1=\"52\" y1=\"34\" x2=\"52\" y2=\"82\" class=\"arrow\"/><line x1=\"28\" y1=\"58\" x2=\"76\" y2=\"58\" class=\"arrow\"/>\n  <text x=\"52\" y=\"24\" text-anchor=\"middle\" class=\"label\">N</text>\n  <text x=\"52\" y=\"101\" text-anchor=\"middle\" class=\"label\">S</text>\n  <text x=\"86\" y=\"63\" text-anchor=\"middle\" class=\"label\">E</text>\n  <text x=\"17\" y=\"63\" text-anchor=\"middle\" class=\"label\">W</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" class=\"small\">East is on the right, West on the left</text>\n</svg>", "alt": "A stick standing upright on open ground with the Sun low on the eastern side at 7 a.m. and a compass showing N, S, E and W; no shadow is drawn"}
  },
  {
    id: "g5-sci-space-a-q13",
    prompt: "The picture shows the Sun at three places, P, Q and R, during one sunny day. When the Sun is at which place will the stick have its SHORTEST shadow?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "The shadow is the same length at all three" }
    ],
    answerId: "b",
    explanation: "At Q the Sun is high overhead (around noon), so light falls almost straight down and the shadow is shortest. At P (morning, low in the east) and R (evening, low in the west) the light comes from the side, so shadows are long.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"The Sun drawn at three places, P, Q and R, on its path across the sky above an upright stick; shadows are not drawn\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"170\" fill=\"#e0f2fe\"/>\n  <rect x=\"0\" y=\"170\" width=\"320\" height=\"50\" fill=\"#bbf7d0\"/>\n  <path d=\"M30 168 Q160 -10 290 168\" class=\"orbit\"/>\n  <circle cx=\"270\" cy=\"140\" r=\"15\" class=\"sun\"/>\n  <text x=\"270\" y=\"145\" text-anchor=\"middle\" class=\"label\">P</text>\n  <circle cx=\"160\" cy=\"40\" r=\"15\" class=\"sun\"/>\n  <text x=\"160\" y=\"45\" text-anchor=\"middle\" class=\"label\">Q</text>\n  <circle cx=\"50\" cy=\"140\" r=\"15\" class=\"sun\"/>\n  <text x=\"50\" y=\"145\" text-anchor=\"middle\" class=\"label\">R</text>\n  <line x1=\"160\" y1=\"170\" x2=\"160\" y2=\"128\" stroke=\"#7c2d12\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <text x=\"168\" y=\"140\" class=\"small\">stick</text>\n  <text x=\"300\" y=\"200\" text-anchor=\"end\" class=\"label\">East</text>\n  <text x=\"20\" y=\"200\" class=\"label\">West</text>\n  <text x=\"160\" y=\"212\" text-anchor=\"middle\" class=\"small\">Path of the Sun across the sky in one day</text>\n</svg>", "alt": "The Sun drawn at three places, P, Q and R, on its path across the sky above an upright stick; shadows are not drawn"}
  },
  {
    id: "g5-sci-space-a-q14",
    prompt: "Sunlight falls on Earth from the left, as shown. Which marked place is having NIGHT at this moment?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "a",
    explanation: "At any moment, only the half of Earth facing the Sun has day. P is on the half facing away from the Sun, so it has night. Q, R and S are on the lit half, so they have day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Sunlight shining from the left on Earth; the left half of Earth is lit and the right half is dark; four places P, Q, R and S are marked\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahA14\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#d97706\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"-15\" cy=\"110\" r=\"55\" class=\"sun\"/>\n  <text x=\"6\" y=\"114\" class=\"label\">Sun</text>\n  <line x1=\"52\" y1=\"60\" x2=\"112\" y2=\"60\" class=\"ray\" marker-end=\"url(#ahA14)\"/>\n  <line x1=\"52\" y1=\"85\" x2=\"112\" y2=\"85\" class=\"ray\" marker-end=\"url(#ahA14)\"/>\n  <line x1=\"52\" y1=\"110\" x2=\"112\" y2=\"110\" class=\"ray\" marker-end=\"url(#ahA14)\"/>\n  <line x1=\"52\" y1=\"135\" x2=\"112\" y2=\"135\" class=\"ray\" marker-end=\"url(#ahA14)\"/>\n  <line x1=\"52\" y1=\"160\" x2=\"112\" y2=\"160\" class=\"ray\" marker-end=\"url(#ahA14)\"/>\n  <circle cx=\"200\" cy=\"110\" r=\"72\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M200,38 A72,72 0 0 0 200,182 Z\"/>\n  <circle cx=\"246\" cy=\"100\" r=\"9\" class=\"tag\"/><text x=\"246\" y=\"104.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  <circle cx=\"160\" cy=\"110\" r=\"9\" class=\"tag\"/><text x=\"160\" y=\"114.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n  <circle cx=\"178\" cy=\"60\" r=\"9\" class=\"tag\"/><text x=\"178\" y=\"64.5\" text-anchor=\"middle\" class=\"label\">R</text>\n  <circle cx=\"172\" cy=\"160\" r=\"9\" class=\"tag\"/><text x=\"172\" y=\"164.5\" text-anchor=\"middle\" class=\"label\">S</text>\n  <text x=\"238\" y=\"208\" class=\"small\" style=\"fill:#cbd5e1\">dark half</text>\n  <text x=\"130\" y=\"208\" class=\"small\" style=\"fill:#cbd5e1\">lit half</text>\n</svg>", "alt": "Sunlight shining from the left on Earth; the left half of Earth is lit and the right half is dark; four places P, Q, R and S are marked"}
  },
  {
    id: "g5-sci-space-a-q15",
    prompt: "Two astronauts stand on the Moon without radios. One shouts, but the other cannot hear anything. Why?",
    options: [
      { id: "a", text: "The Moon is too cold for sound." },
      { id: "b", text: "The Moon is too dark for sound." },
      { id: "c", text: "The Moon's dust soaks up all sound." },
      { id: "d", text: "There is no air on the Moon to carry sound." }
    ],
    answerId: "d",
    explanation: "Sound needs air (or another material) to travel. The Moon has no air, so sound cannot travel from one astronaut to the other. Astronauts talk using radios.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q16",
    prompt: "Two nights after New Moon, Meena sees the Moon looking like this from her roof. What is this shape of the Moon called?",
    options: [
      { id: "a", text: "Full Moon" },
      { id: "b", text: "Gibbous Moon" },
      { id: "c", text: "Half Moon" },
      { id: "d", text: "Crescent Moon" }
    ],
    answerId: "d",
    explanation: "Just after New Moon, we see only a thin, curved sliver of the Moon's lit half. This shape is called a crescent. It grows a little bigger each night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Night sky over rooftops showing the Moon as a thin, curved, bright sliver\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"30\" cy=\"30\" r=\"1.6\" fill=\"#f8fafc\"/>\n  <circle cx=\"90\" cy=\"60\" r=\"1.6\" fill=\"#f8fafc\"/>\n  <circle cx=\"250\" cy=\"40\" r=\"1.6\" fill=\"#f8fafc\"/>\n  <circle cx=\"290\" cy=\"90\" r=\"1.6\" fill=\"#f8fafc\"/>\n  <circle cx=\"60\" cy=\"120\" r=\"1.6\" fill=\"#f8fafc\"/>\n  <circle cx=\"200\" cy=\"20\" r=\"1.6\" fill=\"#f8fafc\"/>\n  <circle cx=\"140\" cy=\"90\" r=\"1.6\" fill=\"#f8fafc\"/>\n  <path d=\"M186,40 A36,36 0 0 1 186,112 A18,36 0 0 0 186,40 Z\" fill=\"#fef9c3\" stroke=\"#fde68a\" stroke-width=\"1\"/>\n  <path d=\"M0 220 V170 H40 V150 H80 V172 H130 V140 L160 120 L190 140 V168 H240 V155 H290 V175 H320 V220 Z\" fill=\"#020617\"/>\n  <rect x=\"146\" y=\"148\" width=\"10\" height=\"10\" fill=\"#fde047\"/><rect x=\"250\" y=\"164\" width=\"10\" height=\"8\" fill=\"#fde047\"/>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">Evening sky, two nights after New Moon</text>\n</svg>", "alt": "Night sky over rooftops showing the Moon as a thin, curved, bright sliver"}
  },
  {
    id: "g5-sci-space-a-q17",
    prompt: "Kabir notices that the bright part of the Moon is getting bigger each night. Which phase will he see next when it stops growing?",
    options: [
      { id: "a", text: "Full Moon" },
      { id: "b", text: "New Moon" },
      { id: "c", text: "Thin crescent" },
      { id: "d", text: "No Moon at all" }
    ],
    answerId: "a",
    explanation: "When the lit part grows each night, the Moon is waxing. Waxing ends with the Full Moon, when we see the whole lit face as a round disc.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q18",
    prompt: "Riya keeps the torch still and slowly spins the ball on its stick, as shown. The sticker X moves into the light, then into the dark, and back again. What is Riya showing with this model?",
    options: [
      { id: "a", text: "How seasons change" },
      { id: "b", text: "Phases of the Moon" },
      { id: "c", text: "How day and night happen" },
      { id: "d", text: "A solar eclipse" }
    ],
    answerId: "c",
    explanation: "The torch is the Sun and the ball is Earth. Spinning the ball is like Earth rotating on its axis. Sticker X has day when it is in the light and night when it is in the dark.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A torch shining on a ball held on a stick; one half of the ball is lit; a curved arrow shows the ball spinning and a sticker X is on the ball\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahA18\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#f8fafc\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#1f2937\"/>\n  <polygon points=\"70,92 250,40 250,180 70,128\" fill=\"#fef08a\" opacity=\"0.18\"/>\n  <rect x=\"14\" y=\"92\" width=\"48\" height=\"36\" rx=\"6\" class=\"part\"/>\n  <rect x=\"60\" y=\"88\" width=\"12\" height=\"44\" rx=\"3\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <text x=\"38\" y=\"150\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">Torch</text>\n  <line x1=\"215\" y1=\"40\" x2=\"215\" y2=\"196\" stroke=\"#a8a29e\" stroke-width=\"4\"/>\n  <circle cx=\"215\" cy=\"110\" r=\"48\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M215,62 A48,48 0 0 0 215,158 Z\"/>\n  <rect x=\"196\" y=\"196\" width=\"38\" height=\"8\" fill=\"#a8a29e\"/>\n  <path d=\"M180 36 Q215 18 250 36\" class=\"arrow\" style=\"stroke:#f8fafc\" marker-end=\"url(#ahA18)\"/>\n  <text x=\"262\" y=\"34\" class=\"small\" style=\"fill:#f8fafc\">spin</text>\n  <circle cx=\"196\" cy=\"96\" r=\"9\" class=\"tag\"/><text x=\"196\" y=\"100.5\" text-anchor=\"middle\" class=\"label\">X</text>\n  <text x=\"276\" y=\"114\" class=\"small\" style=\"fill:#f8fafc\">Ball on</text><text x=\"276\" y=\"128\" class=\"small\" style=\"fill:#f8fafc\">a stick</text>\n</svg>", "alt": "A torch shining on a ball held on a stick; one half of the ball is lit; a curved arrow shows the ball spinning and a sticker X is on the ball"}
  },
  {
    id: "g5-sci-space-a-q19",
    prompt: "Every fourth year, February has 29 days. Why do we add this extra day?",
    options: [
      { id: "a", text: "Because the Moon goes around Earth faster that year." },
      { id: "b", text: "Because Earth spins slower that year." },
      { id: "c", text: "Because the Sun moves away from Earth that year." },
      { id: "d", text: "Because Earth takes about 365\u00bc days to go around the Sun, and four quarter days add up to one day." }
    ],
    answerId: "d",
    explanation: "Our normal calendar year has 365 days, but Earth's revolution takes about 365\u00bc days. After four years, the extra quarters add up to about one full day, so we add February 29. That year is called a leap year.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q20",
    prompt: "The footprints left by astronauts on the Moon are still there after many years. What is the best reason?",
    options: [
      { id: "a", text: "The Moon's soil is like wet cement." },
      { id: "b", text: "The Moon has no air or water, so no wind or rain wipes them away." },
      { id: "c", text: "The Moon is always dark." },
      { id: "d", text: "The Moon's gravity is stronger than Earth's." }
    ],
    answerId: "b",
    explanation: "On Earth, wind and rain slowly wipe away footprints. The Moon has no air and no liquid water, so there is no wind or rain to disturb the dust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q21",
    prompt: "In the diagram, Earth is at J in June. Its northern half, where India is, leans towards the Sun, so India has summer. What season is the southern half, where Australia is, having at the same time?",
    options: [
      { id: "a", text: "Summer" },
      { id: "b", text: "Spring" },
      { id: "c", text: "Winter" },
      { id: "d", text: "The same season as everywhere else on Earth" }
    ],
    answerId: "c",
    explanation: "At J the northern half leans towards the Sun and gets more direct sunlight, so it has summer. The southern half leans away and gets slanting, weaker sunlight, so Australia has winter. At D it is the other way round.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Earth shown at two places on its path around the Sun, J for June and D for December, with its tilted axis leaning the same way at both places\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <ellipse cx=\"160\" cy=\"110\" rx=\"118\" ry=\"44\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"24\" class=\"sun\"/>\n  <text x=\"160\" y=\"115\" text-anchor=\"middle\" class=\"small\">Sun</text>\n  <circle cx=\"42\" cy=\"110\" r=\"20\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M42,90 A20,20 0 0 1 42,130 Z\"/>\n  <line x1=\"23.6\" y1=\"102.2\" x2=\"60.4\" y2=\"117.8\" stroke=\"#16a34a\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <line x1=\"29.5\" y1=\"139.5\" x2=\"54.5\" y2=\"80.5\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n  <text x=\"58.5\" y=\"78.5\" class=\"small\" style=\"fill:#f8fafc\">N</text>\n  <circle cx=\"278\" cy=\"110\" r=\"20\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M278,90 A20,20 0 0 0 278,130 Z\"/>\n  <line x1=\"259.6\" y1=\"102.2\" x2=\"296.4\" y2=\"117.8\" stroke=\"#16a34a\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <line x1=\"265.5\" y1=\"139.5\" x2=\"290.5\" y2=\"80.5\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n  <text x=\"294.5\" y=\"78.5\" class=\"small\" style=\"fill:#f8fafc\">N</text>\n  <circle cx=\"42\" cy=\"160\" r=\"10\" class=\"tag\"/><text x=\"42\" y=\"164.5\" text-anchor=\"middle\" class=\"label\">J</text>\n  <circle cx=\"278\" cy=\"160\" r=\"10\" class=\"tag\"/><text x=\"278\" y=\"164.5\" text-anchor=\"middle\" class=\"label\">D</text>\n  <text x=\"160\" y=\"196\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">J = June, D = December. Red line = tilted axis</text>\n  <text x=\"160\" y=\"212\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">Same lean at J and D. Not to scale</text>\n</svg>", "alt": "Earth shown at two places on its path around the Sun, J for June and D for December, with its tilted axis leaning the same way at both places"}
  },
  {
    id: "g5-sci-space-a-q22",
    prompt: "Solve the riddle: \"I am not the closest planet to the Sun, but I am the hottest. My thick, cloudy air traps the Sun's heat like a blanket.\" Who am I?",
    options: [
      { id: "a", text: "Mercury" },
      { id: "b", text: "Venus" },
      { id: "c", text: "Mars" },
      { id: "d", text: "Jupiter" }
    ],
    answerId: "b",
    explanation: "Venus is the second planet from the Sun, yet it is hotter than Mercury. Its very thick layer of gases and clouds traps heat, so it stays extremely hot day and night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q23",
    prompt: "Imagine Earth stopped spinning on its axis but still kept going around the Sun. What would most likely happen?",
    options: [
      { id: "a", text: "Nothing would change." },
      { id: "b", text: "Every place would have night forever." },
      { id: "c", text: "Earth would stop having years." },
      { id: "d", text: "Each place would have very long days and very long nights, lasting months." }
    ],
    answerId: "d",
    explanation: "Day and night come from spinning. Without spinning, one side would face the Sun for a very long time as Earth slowly moved along its orbit. Each place would get months of daylight followed by months of darkness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q24",
    prompt: "In June, days in India are longer than nights. Which is the best reason?",
    options: [
      { id: "a", text: "The northern half of Earth leans towards the Sun, so places there spend more of each spin in sunlight." },
      { id: "b", text: "Earth spins more slowly in June." },
      { id: "c", text: "The Sun gives out more light in June." },
      { id: "d", text: "The Moon reflects extra light onto India in June." }
    ],
    answerId: "a",
    explanation: "Earth spins at the same speed all year. But in June the northern half, where India is, leans towards the Sun because of the tilted axis, so a bigger part of each 24-hour spin is spent in sunlight. That gives long days and short nights, and more heat: summer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-space-b-q01",
    prompt: "What does the Sun give to Earth?",
    options: [
      { id: "a", text: "Only light" },
      { id: "b", text: "Only heat" },
      { id: "c", text: "Both light and heat" },
      { id: "d", text: "Neither light nor heat" }
    ],
    answerId: "c",
    explanation: "The Sun gives Earth both light and heat. Plants use sunlight to make food, and the Sun's heat keeps Earth warm enough for living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q02",
    prompt: "How many planets are there in our solar system?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "There are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto is now called a dwarf planet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q03",
    prompt: "Which is the smallest of the eight planets?",
    options: [
      { id: "a", text: "Mars" },
      { id: "b", text: "Earth" },
      { id: "c", text: "Venus" },
      { id: "d", text: "Mercury" }
    ],
    answerId: "d",
    explanation: "Mercury is the smallest planet, only a little bigger than our Moon. Mars is the second smallest. Earth and Venus are nearly the same size as each other.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q04",
    prompt: "Which planet is most famous for its bright, beautiful rings?",
    options: [
      { id: "a", text: "Saturn" },
      { id: "b", text: "Mars" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Earth" }
    ],
    answerId: "a",
    explanation: "Saturn has wide, bright rings made of countless pieces of ice and rock. They are easy to see through a small telescope.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q05",
    prompt: "Earth spins around the slanted dashed line marked X, which passes through the North and South Poles. What is this imaginary line called?",
    options: [
      { id: "a", text: "Orbit" },
      { id: "b", text: "Equator" },
      { id: "c", text: "Axis" },
      { id: "d", text: "Horizon" }
    ],
    answerId: "c",
    explanation: "The imaginary line through the North and South Poles that Earth spins around is its axis. The band around Earth's middle is the equator, and the orbit is the path Earth follows around the Sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Earth with a slanted dashed line marked X passing through the North and South Poles, a band around the middle, and a curved arrow showing Earth spinning\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#f8fafc\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"160\" cy=\"112\" r=\"62\" fill=\"#3b82f6\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n  <path d=\"M128 80 q16 -10 30 0 q8 18 -10 26 q-18 -2 -20 -26 z M176 120 q20 -6 26 10 q-4 22 -24 18 q-8 -14 -2 -28 z\" fill=\"#22c55e\"/>\n  <line x1=\"102.9\" y1=\"87.8\" x2=\"217.1\" y2=\"136.2\" stroke=\"#fde68a\" stroke-width=\"2\"/>\n  <line x1=\"122.5\" y1=\"200.4\" x2=\"197.5\" y2=\"23.6\" stroke=\"#f87171\" stroke-width=\"3\" stroke-dasharray=\"7 4\"/>\n  <text x=\"196.3\" y=\"54.0\" class=\"small\" style=\"fill:#f8fafc\">N</text>\n  <text x=\"113.7\" y=\"180.0\" class=\"small\" style=\"fill:#f8fafc\">S</text>\n  <circle cx=\"210\" cy=\"28\" r=\"10\" class=\"tag\"/><text x=\"210\" y=\"32.5\" text-anchor=\"middle\" class=\"label\">X</text>\n  <path d=\"M90 34 Q124 18 156 30\" class=\"arrow\" style=\"stroke:#f8fafc\" marker-end=\"url(#ahB5)\"/>\n  <text x=\"18\" y=\"205\" class=\"small\" style=\"fill:#cbd5e1\">Curved arrow: direction Earth spins</text>\n</svg>", "alt": "Earth with a slanted dashed line marked X passing through the North and South Poles, a band around the middle, and a curved arrow showing Earth spinning"}
  },
  {
    id: "g5-sci-space-b-q06",
    prompt: "What is the path along which Earth moves around the Sun called?",
    options: [
      { id: "a", text: "Axis" },
      { id: "b", text: "Orbit" },
      { id: "c", text: "Shadow" },
      { id: "d", text: "Pole" }
    ],
    answerId: "b",
    explanation: "The path Earth follows as it goes around the Sun is its orbit. One trip along the orbit takes about one year.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q07",
    prompt: "The phases of the Moon repeat, from one Full Moon to the next, about every:",
    options: [
      { id: "a", text: "7 days" },
      { id: "b", text: "15 days" },
      { id: "c", text: "29\u00bd days" },
      { id: "d", text: "365 days" }
    ],
    answerId: "c",
    explanation: "The Moon goes from Full Moon to New Moon and back to Full Moon in about 29\u00bd days, which is close to one month.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q08",
    prompt: "Which is the only planet known to have life?",
    options: [
      { id: "a", text: "Mars" },
      { id: "b", text: "Venus" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Earth" }
    ],
    answerId: "d",
    explanation: "Earth is the only planet where we know life exists. It has air, liquid water, and a temperature that is just right for living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q09",
    prompt: "What is Pluto called today?",
    options: [
      { id: "a", text: "A dwarf planet" },
      { id: "b", text: "The ninth planet" },
      { id: "c", text: "A star" },
      { id: "d", text: "A moon of Earth" }
    ],
    answerId: "a",
    explanation: "Pluto was once counted as the ninth planet. Scientists now call it a dwarf planet because it is very small and shares its path with many other icy objects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q10",
    prompt: "The picture is a top view of the Sun and the first five planets, numbered 1 to 5 going outwards. Band X is made of many rocky pieces. Between which two planets does band X lie?",
    options: [
      { id: "a", text: "Earth and Mars" },
      { id: "b", text: "Mars and Jupiter" },
      { id: "c", text: "Jupiter and Saturn" },
      { id: "d", text: "Mercury and Venus" }
    ],
    answerId: "b",
    explanation: "Band X lies between planet 4 and planet 5. In order from the Sun, planet 4 is Mars and planet 5 is Jupiter. This band of rocks is the asteroid belt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Top view of the Sun with five planet orbits numbered 1 to 5 going outwards, and a ring of many small rocks marked X between orbit 4 and orbit 5\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"13\" class=\"sun\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"24\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"36\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"49\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"62\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"96\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"127.5\" cy=\"175.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"118.1\" cy=\"51.7\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"86.9\" cy=\"93.2\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"231.6\" cy=\"137.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"233.7\" cy=\"127.7\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"225.2\" cy=\"140.6\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"88.7\" cy=\"146.6\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"212.3\" cy=\"161.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"103.3\" cy=\"51.6\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"93.3\" cy=\"74.9\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"230.7\" cy=\"99.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"206.7\" cy=\"52.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"204.6\" cy=\"166.9\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"131.3\" cy=\"184.6\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"192.6\" cy=\"180.2\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"111.7\" cy=\"52.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"91.5\" cy=\"88.8\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"228.2\" cy=\"136.8\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"127.9\" cy=\"41.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"129.6\" cy=\"181.2\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"88.9\" cy=\"131.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"181.7\" cy=\"34.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"162.9\" cy=\"187.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"80.4\" cy=\"97.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"150.4\" cy=\"36.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"231.7\" cy=\"101.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"90.9\" cy=\"149.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"204.1\" cy=\"172.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"236.0\" cy=\"129.1\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"167.1\" cy=\"33.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"212.8\" cy=\"57.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"133.9\" cy=\"37.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"93.4\" cy=\"73.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"203.6\" cy=\"41.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"82.7\" cy=\"122.7\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"233.1\" cy=\"139.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"110.7\" cy=\"44.6\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"192.4\" cy=\"43.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"101.0\" cy=\"161.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"235.3\" cy=\"120.7\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"195.6\" cy=\"172.9\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"234.1\" cy=\"138.8\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"210.7\" cy=\"163.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"97.6\" cy=\"161.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"226.4\" cy=\"146.8\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"83.1\" cy=\"85.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"193.9\" cy=\"37.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"146.6\" cy=\"184.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"109.0\" cy=\"172.6\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"230.1\" cy=\"90.9\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"192.9\" cy=\"175.8\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"168.0\" cy=\"185.9\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"97.4\" cy=\"70.8\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"235.6\" cy=\"111.9\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"107.4\" cy=\"166.5\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"235.2\" cy=\"87.2\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"82.6\" cy=\"102.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"128.0\" cy=\"46.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"224.2\" cy=\"63.0\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"216.2\" cy=\"53.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"101.2\" cy=\"157.2\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"222.1\" cy=\"157.2\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"226.3\" cy=\"137.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"178.6\" cy=\"180.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"121.6\" cy=\"170.4\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"232.7\" cy=\"110.1\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"220.3\" cy=\"154.6\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"239.6\" cy=\"122.9\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"105.2\" cy=\"62.3\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"158.9\" cy=\"184.8\" r=\"1.3\" fill=\"#a8a29e\"/>\n  <circle cx=\"137.4\" cy=\"101.8\" r=\"4\" fill=\"#94a3b8\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"126.2\" y=\"101.7\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">1</text>\n  <circle cx=\"187.6\" cy=\"86.9\" r=\"5\" fill=\"#fde68a\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"197.5\" y=\"82.5\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">2</text>\n  <circle cx=\"202.4\" cy=\"134.5\" r=\"5\" fill=\"#60a5fa\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"213.7\" y=\"145.0\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">3</text>\n  <circle cx=\"112.5\" cy=\"149.9\" r=\"4\" fill=\"#ef4444\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"103.3\" y=\"161.6\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">4</text>\n  <circle cx=\"250.2\" cy=\"142.8\" r=\"11\" fill=\"#d6a46b\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <text x=\"268.1\" y=\"153.3\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">5</text>\n  <line x1=\"219\" y1=\"151\" x2=\"282\" y2=\"190\" class=\"arrow\" style=\"stroke:#f8fafc\"/>\n  <circle cx=\"292\" cy=\"196\" r=\"10\" class=\"tag\"/><text x=\"292\" y=\"200.5\" text-anchor=\"middle\" class=\"label\">X</text>\n  <text x=\"8\" y=\"16\" class=\"small\" style=\"fill:#cbd5e1\">Top view, planets 1-5 from the Sun. Not to scale.</text>\n</svg>", "alt": "Top view of the Sun with five planet orbits numbered 1 to 5 going outwards, and a ring of many small rocks marked X between orbit 4 and orbit 5"}
  },
  {
    id: "g5-sci-space-b-q11",
    prompt: "Kiran places two footballs of the SAME size on a long straight road. Ball P is near him and ball Q is far away. Q looks much smaller. Which fact about the Sun does this help explain?",
    options: [
      { id: "a", text: "The Sun is actually smaller than Earth." },
      { id: "b", text: "The Sun is huge but looks small because it is very, very far away." },
      { id: "c", text: "Clouds always cover most of the Sun." },
      { id: "d", text: "The Sun shrinks a little every afternoon." }
    ],
    answerId: "b",
    explanation: "Objects look smaller the farther away they are, even if their real size is the same. The Sun is much bigger than Earth, but it is so far away that it looks like a small disc in the sky.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A straight road with one football P close to the viewer looking big and another football Q far down the road looking tiny; the Sun is in the sky\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"120\" fill=\"#e0f2fe\"/>\n  <rect x=\"0\" y=\"120\" width=\"320\" height=\"100\" fill=\"#bbf7d0\"/>\n  <polygon points=\"40,220 280,220 172,120 148,120\" fill=\"#9ca3af\"/>\n  <line x1=\"160\" y1=\"122\" x2=\"160\" y2=\"218\" stroke=\"#f8fafc\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/>\n  <circle cx=\"110\" cy=\"186\" r=\"26\" fill=\"#ffffff\" stroke=\"#111\" stroke-width=\"2\"/>\n  <path d=\"M100 176 l10 -6 l10 6 l-4 12 h-12 z\" fill=\"#111\"/>\n  <circle cx=\"166\" cy=\"126\" r=\"5\" fill=\"#ffffff\" stroke=\"#111\" stroke-width=\"1.5\"/>\n  <circle cx=\"64\" cy=\"170\" r=\"10\" class=\"tag\"/><text x=\"64\" y=\"174.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  <circle cx=\"196\" cy=\"118\" r=\"10\" class=\"tag\"/><text x=\"196\" y=\"122.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n  <circle cx=\"275\" cy=\"40\" r=\"14\" class=\"sun\"/>\n  <text x=\"12\" y=\"22\" class=\"small\">Both footballs are the SAME size</text>\n</svg>", "alt": "A straight road with one football P close to the viewer looking big and another football Q far down the road looking tiny; the Sun is in the sky"}
  },
  {
    id: "g5-sci-space-b-q12",
    prompt: "Gravity on the Moon is much weaker than on Earth (about one-sixth). If Priya jumps with the same effort on the Moon as she does on Earth, she will jump:",
    options: [
      { id: "a", text: "Lower" },
      { id: "b", text: "Exactly the same height" },
      { id: "c", text: "Much higher" },
      { id: "d", text: "Not at all" }
    ],
    answerId: "c",
    explanation: "The Moon pulls things down much less strongly than Earth does. So with the same jump, Priya would rise much higher and come down more slowly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q13",
    prompt: "The picture shows the Moon at four places as it goes around Earth. A red dot marks one patch on the Moon. Look at where the red dot is each time. What does this tell us?",
    options: [
      { id: "a", text: "The Moon does not move at all." },
      { id: "b", text: "The same side of the Moon always faces Earth." },
      { id: "c", text: "Earth always blocks the other side of the Moon." },
      { id: "d", text: "The other side of the Moon has no patches." }
    ],
    answerId: "b",
    explanation: "At every place, the red dot points towards Earth. The Moon spins once in the same time it takes to go once around Earth, so the same side always faces us. That is why we always see the same dark patches.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Earth in the centre with the Moon shown at four places around it; a red dot marks one patch on the Moon at each place\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB13\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#f8fafc\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"22\" fill=\"#3b82f6\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"114\" text-anchor=\"middle\" class=\"small\" style=\"fill:#f8fafc\">Earth</text>\n  <circle cx=\"160\" cy=\"110\" r=\"78\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"238.0\" cy=\"110.0\" r=\"14\" fill=\"#cbd5e1\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <circle cx=\"229.0\" cy=\"110.0\" r=\"4\" fill=\"#dc2626\"/>\n  <circle cx=\"160.0\" cy=\"188.0\" r=\"14\" fill=\"#cbd5e1\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <circle cx=\"160.0\" cy=\"179.0\" r=\"4\" fill=\"#dc2626\"/>\n  <circle cx=\"82.0\" cy=\"110.0\" r=\"14\" fill=\"#cbd5e1\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <circle cx=\"91.0\" cy=\"110.0\" r=\"4\" fill=\"#dc2626\"/>\n  <circle cx=\"160.0\" cy=\"32.0\" r=\"14\" fill=\"#cbd5e1\" stroke=\"#e2e8f0\" stroke-width=\"1\"/>\n  <circle cx=\"160.0\" cy=\"41.0\" r=\"4\" fill=\"#dc2626\"/>\n  <path d=\"M232 48 Q250 70 252 92\" class=\"arrow\" style=\"stroke:#f8fafc\" marker-end=\"url(#ahB13)\"/>\n  <text x=\"8\" y=\"16\" class=\"small\" style=\"fill:#cbd5e1\">Red dot = one patch on the Moon</text>\n  <text x=\"8\" y=\"210\" class=\"small\" style=\"fill:#cbd5e1\">The Moon shown at four places on its path</text>\n</svg>", "alt": "Earth in the centre with the Moon shown at four places around it; a red dot marks one patch on the Moon at each place"}
  },
  {
    id: "g5-sci-space-b-q14",
    prompt: "Which group contains only the four rocky planets closest to the Sun?",
    options: [
      { id: "a", text: "Mercury, Venus, Earth, Mars" },
      { id: "b", text: "Mercury, Venus, Jupiter, Saturn" },
      { id: "c", text: "Earth, Mars, Jupiter, Neptune" },
      { id: "d", text: "Venus, Earth, Saturn, Uranus" }
    ],
    answerId: "a",
    explanation: "The four inner planets, Mercury, Venus, Earth, and Mars, have hard, rocky surfaces. The four outer planets are giant planets made mostly of gases and ices.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q15",
    prompt: "A memory trick for the order of planets is \"My Very Educated Mother Just Served Us Noodles.\" Which planet does the word \"Us\" stand for?",
    options: [
      { id: "a", text: "Saturn" },
      { id: "b", text: "Neptune" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Uranus" }
    ],
    answerId: "d",
    explanation: "Each first letter matches a planet in order: My (Mercury), Very (Venus), Educated (Earth), Mother (Mars), Just (Jupiter), Served (Saturn), Us (Uranus), Noodles (Neptune).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q16",
    prompt: "Ravi drew the Moon on four nights, starting on Full Moon night, as shown. What is this change in the Moon's shape called?",
    options: [
      { id: "a", text: "Waxing" },
      { id: "b", text: "Eclipse" },
      { id: "c", text: "Rotation" },
      { id: "d", text: "Waning" }
    ],
    answerId: "d",
    explanation: "After Full Moon, the lit part we see gets smaller night by night until New Moon. This shrinking is called waning. Waxing is the opposite, when the lit part grows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Four Moon drawings labelled Night 1, Night 4, Night 8 and Night 12, starting with a fully lit disc; arrows show the order\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB16\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#f8fafc\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#1e293b\"/>\n  <circle cx=\"42\" cy=\"105\" r=\"28\" class=\"dark\"/>\n  <circle cx=\"42\" cy=\"105\" r=\"28\" class=\"lit\"/>\n  <text x=\"42\" y=\"160\" text-anchor=\"middle\" class=\"small\" style=\"fill:#f8fafc\">Night 1</text>\n  <circle cx=\"122\" cy=\"105\" r=\"28\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M122,77 A28,28 0 0 0 122,133 A14.0,28 0 0 0 122,77 Z\"/>\n  <text x=\"122\" y=\"160\" text-anchor=\"middle\" class=\"small\" style=\"fill:#f8fafc\">Night 4</text>\n  <circle cx=\"200\" cy=\"105\" r=\"28\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M200,77 A28,28 0 0 0 200,133 Z\"/>\n  <text x=\"200\" y=\"160\" text-anchor=\"middle\" class=\"small\" style=\"fill:#f8fafc\">Night 8</text>\n  <circle cx=\"278\" cy=\"105\" r=\"28\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M278,77 A28,28 0 0 0 278,133 A14.0,28 0 0 1 278,77 Z\"/>\n  <text x=\"278\" y=\"160\" text-anchor=\"middle\" class=\"small\" style=\"fill:#f8fafc\">Night 12</text>\n  <line x1=\"74\" y1=\"105\" x2=\"88\" y2=\"105\" class=\"arrow\" style=\"stroke:#f8fafc\" marker-end=\"url(#ahB16)\"/>\n  <line x1=\"154\" y1=\"105\" x2=\"168\" y2=\"105\" class=\"arrow\" style=\"stroke:#f8fafc\" marker-end=\"url(#ahB16)\"/>\n  <line x1=\"232\" y1=\"105\" x2=\"246\" y2=\"105\" class=\"arrow\" style=\"stroke:#f8fafc\" marker-end=\"url(#ahB16)\"/>\n  <text x=\"160\" y=\"30\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">Ravi's Moon diary (starting at Full Moon)</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">Pale yellow = lit part we see</text>\n</svg>", "alt": "Four Moon drawings labelled Night 1, Night 4, Night 8 and Night 12, starting with a fully lit disc; arrows show the order"}
  },
  {
    id: "g5-sci-space-b-q17",
    prompt: "This is Earth seen from above the North Pole, with sunlight coming from the left. Earth spins in the direction of the arrow. Place X is on the line between the light and dark halves. What time of day is it at X?",
    options: [
      { id: "a", text: "Early morning (sunrise)" },
      { id: "b", text: "Noon" },
      { id: "c", text: "Evening (sunset)" },
      { id: "d", text: "Midnight" }
    ],
    answerId: "a",
    explanation: "The arrow shows Earth turning so that X is about to move from the dark half into the lit half. Turning into sunlight means the Sun is just rising there, so it is early morning at X. A place moving from light into dark would be having sunset.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Earth seen from above the North Pole with sunlight from the left, so the left half is lit and the right half is dark; a curved arrow shows the direction of spin; place X sits on the line between light and dark at the top\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB17\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#f8fafc\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"-15\" cy=\"110\" r=\"55\" class=\"sun\"/>\n  <text x=\"4\" y=\"114\" class=\"label\">Sun</text>\n  <line x1=\"50\" y1=\"70\" x2=\"100\" y2=\"70\" class=\"ray\"/>\n  <line x1=\"50\" y1=\"110\" x2=\"100\" y2=\"110\" class=\"ray\"/>\n  <line x1=\"50\" y1=\"150\" x2=\"100\" y2=\"150\" class=\"ray\"/>\n  <circle cx=\"200\" cy=\"110\" r=\"66\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M200,44 A66,66 0 0 0 200,176 Z\"/>\n  <circle cx=\"200\" cy=\"110\" r=\"5\" fill=\"#f8fafc\"/>\n  <text x=\"208\" y=\"106\" class=\"small\" style=\"fill:#f8fafc\">North Pole</text>\n  <path d=\"M262 52 A88 88 0 0 0 150 32\" class=\"arrow\" style=\"stroke:#f8fafc\" marker-end=\"url(#ahB17)\"/>\n  <text x=\"262\" y=\"36\" class=\"small\" style=\"fill:#f8fafc\">spin</text>\n  <circle cx=\"200\" cy=\"44\" r=\"9\" class=\"tag\"/><text x=\"200\" y=\"48.5\" text-anchor=\"middle\" class=\"label\">X</text>\n  <text x=\"8\" y=\"210\" class=\"small\" style=\"fill:#cbd5e1\">View from above the North Pole. Not to scale.</text>\n</svg>", "alt": "Earth seen from above the North Pole with sunlight from the left, so the left half is lit and the right half is dark; a curved arrow shows the direction of spin; place X sits on the line between light and dark at the top"}
  },
  {
    id: "g5-sci-space-b-q18",
    prompt: "Sunita in Delhi is having breakfast in the morning. Her cousin lives in the USA, almost on the opposite side of Earth. What is her cousin most likely doing?",
    options: [
      { id: "a", text: "Also having breakfast in the morning" },
      { id: "b", text: "Eating lunch at noon" },
      { id: "c", text: "Getting ready for bed at night" },
      { id: "d", text: "Watching the same sunrise" }
    ],
    answerId: "c",
    explanation: "Places on opposite sides of Earth have opposite times. When Delhi is turning towards the Sun (morning), the far side is turning away from it, so it is evening or night there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q19",
    prompt: "Venus is sometimes called the \"morning star\" or \"evening star\" because it shines so brightly. Which statement about Venus is correct?",
    options: [
      { id: "a", text: "It is a planet that shines by reflecting sunlight." },
      { id: "b", text: "It is a real star that makes its own light." },
      { id: "c", text: "It is a second Moon of Earth." },
      { id: "d", text: "It shines because of lights built by people." }
    ],
    answerId: "a",
    explanation: "Venus is a planet, not a star. Its thick white clouds reflect a lot of sunlight, so it looks very bright, often just after sunset or just before sunrise.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q20",
    prompt: "Which planet takes the longest time to go once around the Sun?",
    options: [
      { id: "a", text: "Mercury" },
      { id: "b", text: "Earth" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Neptune" }
    ],
    answerId: "d",
    explanation: "Planets farther from the Sun have much longer paths and move more slowly. Neptune is the farthest planet, so its year is the longest, about 165 Earth years.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q21",
    prompt: "Sunlight comes from the left. The Moon is shown at four places, 1 to 4, on its path around Earth. Its sunlit half always faces the Sun. At which place will people on Earth see a FULL Moon?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "At place 1, the Moon is on the far side of Earth from the Sun. Its whole lit half faces Earth, so we see a Full Moon. At place 3 the lit half faces away from us (New Moon), and at 2 and 4 we see half of the lit side (half Moon).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Sunlight from the left shining on Earth at the centre and on the Moon drawn at four places, 1 to 4, around Earth; each Moon has its left half lit\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB21\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#f8fafc\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <line x1=\"6\" y1=\"50\" x2=\"56\" y2=\"50\" class=\"ray\" marker-end=\"url(#ahB21)\"/>\n  <line x1=\"6\" y1=\"90\" x2=\"56\" y2=\"90\" class=\"ray\" marker-end=\"url(#ahB21)\"/>\n  <line x1=\"6\" y1=\"130\" x2=\"56\" y2=\"130\" class=\"ray\" marker-end=\"url(#ahB21)\"/>\n  <line x1=\"6\" y1=\"170\" x2=\"56\" y2=\"170\" class=\"ray\" marker-end=\"url(#ahB21)\"/>\n  <text x=\"6\" y=\"30\" class=\"small\" style=\"fill:#fde68a\">Sunlight</text>\n  <circle cx=\"185\" cy=\"110\" r=\"74\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"185\" cy=\"110\" r=\"18\" fill=\"#3b82f6\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <text x=\"185\" y=\"114\" text-anchor=\"middle\" class=\"small\" style=\"fill:#f8fafc\">Earth</text>\n  <circle cx=\"259.0\" cy=\"110.0\" r=\"12\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M259.0,98.0 A12,12 0 0 0 259.0,122.0 Z\"/>\n  <text x=\"283.0\" y=\"114.0\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">1</text>\n  <circle cx=\"185.0\" cy=\"36.0\" r=\"12\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M185.0,24.0 A12,12 0 0 0 185.0,48.0 Z\"/>\n  <text x=\"207.0\" y=\"41.0\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">2</text>\n  <circle cx=\"111.0\" cy=\"110.0\" r=\"12\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M111.0,98.0 A12,12 0 0 0 111.0,122.0 Z\"/>\n  <text x=\"87.0\" y=\"114.0\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">3</text>\n  <circle cx=\"185.0\" cy=\"184.0\" r=\"12\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M185.0,172.0 A12,12 0 0 0 185.0,196.0 Z\"/>\n  <text x=\"207.0\" y=\"189.0\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">4</text>\n  <text x=\"8\" y=\"210\" class=\"small\" style=\"fill:#cbd5e1\">Top view of the Moon's path. Not to scale.</text>\n</svg>", "alt": "Sunlight from the left shining on Earth at the centre and on the Moon drawn at four places, 1 to 4, around Earth; each Moon has its left half lit"}
  },
  {
    id: "g5-sci-space-b-q22",
    prompt: "Neel says, \"It is hot in summer because Earth is closest to the Sun then.\" In this diagram, P and Q are the SAME distance from the Sun. At which place does the northern half of Earth have summer, and why?",
    options: [
      { id: "a", text: "P, because the northern half leans away from the Sun" },
      { id: "b", text: "Q, because the northern half leans towards the Sun" },
      { id: "c", text: "P, because Earth is closer to the Sun at P" },
      { id: "d", text: "Both P and Q, because they are the same distance from the Sun" }
    ],
    answerId: "b",
    explanation: "The axis always leans the same way. At Q, the northern end (N) tips towards the Sun, so the northern half gets more direct sunlight and longer days: summer. At P it tips away: winter. Distance is the same at both places, so distance cannot be the reason. This shows Neel is wrong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Earth shown at two places, P and Q, on a circular path around the Sun at equal distances; at both places the tilted axis leans the same way\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <defs><marker id=\"ahB22\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#f8fafc\"/></marker></defs>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"160\" cy=\"105\" r=\"110\" class=\"orbit\" style=\"stroke:#94a3b8\"/>\n  <circle cx=\"160\" cy=\"105\" r=\"22\" class=\"sun\"/>\n  <text x=\"160\" y=\"110\" text-anchor=\"middle\" class=\"small\">Sun</text>\n  <circle cx=\"50\" cy=\"105\" r=\"18\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M50,87 A18,18 0 0 1 50,123 Z\"/>\n  <line x1=\"33.4\" y1=\"112.0\" x2=\"66.6\" y2=\"98.0\" stroke=\"#16a34a\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <line x1=\"61.7\" y1=\"132.6\" x2=\"38.3\" y2=\"77.4\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n  <text x=\"24.3\" y=\"75.4\" class=\"small\" style=\"fill:#f8fafc\">N</text>\n  <circle cx=\"270\" cy=\"105\" r=\"18\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M270,87 A18,18 0 0 0 270,123 Z\"/>\n  <line x1=\"253.4\" y1=\"112.0\" x2=\"286.6\" y2=\"98.0\" stroke=\"#16a34a\" stroke-width=\"1.5\" stroke-dasharray=\"3 2\"/>\n  <line x1=\"281.7\" y1=\"132.6\" x2=\"258.3\" y2=\"77.4\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n  <text x=\"244.3\" y=\"75.4\" class=\"small\" style=\"fill:#f8fafc\">N</text>\n  <circle cx=\"50\" cy=\"150\" r=\"10\" class=\"tag\"/><text x=\"50\" y=\"154.5\" text-anchor=\"middle\" class=\"label\">P</text>\n  <circle cx=\"270\" cy=\"150\" r=\"10\" class=\"tag\"/><text x=\"270\" y=\"154.5\" text-anchor=\"middle\" class=\"label\">Q</text>\n  <line x1=\"72\" y1=\"105\" x2=\"136\" y2=\"105\" class=\"arrow\" style=\"stroke:#cbd5e1\" marker-start=\"url(#ahB22)\" marker-end=\"url(#ahB22)\"/>\n  <line x1=\"184\" y1=\"105\" x2=\"248\" y2=\"105\" class=\"arrow\" style=\"stroke:#cbd5e1\" marker-start=\"url(#ahB22)\" marker-end=\"url(#ahB22)\"/>\n  <text x=\"160\" y=\"16\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">Same distance. Red line = axis, N = northern end</text>\n</svg>", "alt": "Earth shown at two places, P and Q, on a circular path around the Sun at equal distances; at both places the tilted axis leans the same way"}
  },
  {
    id: "g5-sci-space-b-q23",
    prompt: "The picture shows a solar eclipse: the Moon is directly between the Sun and Earth, and its shadow falls on Earth. In which phase must the Moon be at this time?",
    options: [
      { id: "a", text: "Full Moon" },
      { id: "b", text: "First Quarter" },
      { id: "c", text: "New Moon" },
      { id: "d", text: "Gibbous Moon" }
    ],
    answerId: "c",
    explanation: "When the Moon is between the Sun and Earth, its lit side faces the Sun and its dark side faces us. That is the New Moon position. So a solar eclipse can happen only at New Moon, though not every New Moon has one because the three are usually not in an exact line.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"The Sun on the left, the Moon in the middle and Earth on the right in one straight line, with the Moon's shadow falling on a small part of Earth\">\n  <style>\n    .part { fill:#e2e8f0; stroke:#1e293b; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:13px; fill:#111; font-weight:600; }\n    .arrow { stroke:#1e293b; stroke-width:1.8; fill:none; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#111; }\n    .sun { fill:#fde047; stroke:#b45309; stroke-width:2; }\n    .ray { stroke:#d97706; stroke-width:2; stroke-linecap:round; }\n    .lit { fill:#fef9c3; stroke:#1e293b; stroke-width:1.5; }\n    .dark { fill:#334155; stroke:#1e293b; stroke-width:1.5; }\n    .orbit { fill:none; stroke:#64748b; stroke-width:1.2; stroke-dasharray:4 3; }\n    .tag { fill:#ffffff; stroke:#111; stroke-width:1.5; }\n    .frame { fill:#ffffff; stroke:#94a3b8; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#0f172a\"/>\n  <circle cx=\"-20\" cy=\"110\" r=\"70\" class=\"sun\"/>\n  <text x=\"6\" y=\"114\" class=\"label\">Sun</text>\n  <polygon points=\"166,98 166,122 262,114 262,106\" fill=\"#020617\" stroke=\"#475569\" stroke-width=\"1\" />\n  <circle cx=\"160\" cy=\"110\" r=\"12\" class=\"dark\"/>\n  <path class=\"lit\" d=\"M160,98 A12,12 0 0 0 160,122 Z\"/>\n  <text x=\"160\" y=\"88\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">Moon</text>\n  <circle cx=\"275\" cy=\"110\" r=\"36\" fill=\"#3b82f6\" stroke=\"#e2e8f0\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"241\" cy=\"110\" rx=\"3\" ry=\"6\" fill=\"#020617\"/>\n  <text x=\"275\" y=\"165\" text-anchor=\"middle\" class=\"label\" style=\"fill:#f8fafc\">Earth</text>\n  <line x1=\"40\" y1=\"190\" x2=\"300\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n  <text x=\"160\" y=\"208\" text-anchor=\"middle\" class=\"small\" style=\"fill:#cbd5e1\">Sun, Moon and Earth in one straight line. Not to scale.</text>\n</svg>", "alt": "The Sun on the left, the Moon in the middle and Earth on the right in one straight line, with the Moon's shadow falling on a small part of Earth"}
  },
  {
    id: "g5-sci-space-b-q24",
    prompt: "Find the odd one out: Sun, Pole Star, Sirius, Moon.",
    options: [
      { id: "a", text: "Sun" },
      { id: "b", text: "Pole Star" },
      { id: "c", text: "Sirius" },
      { id: "d", text: "Moon" }
    ],
    answerId: "d",
    explanation: "The Sun, the Pole Star, and Sirius are all stars that make their own light. The Moon is a satellite that only reflects sunlight, so it is the odd one out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf1e",
    title: "Sun, Moon and planets",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "The Sun is our nearest star. Earth spins for day and night and orbits the Sun for a year.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Sun", reveal: "Nearest star; heat and light", emoji: "\u2600\ufe0f" },
      { label: "Day and night", reveal: "Earth spins on its axis", emoji: "\ud83c\udf0d" },
      { label: "Year", reveal: "Earth orbits the Sun", emoji: "\ud83d\udcc5" },
      { label: "Moon phases", reveal: "Changing shapes as Moon orbits Earth", emoji: "\ud83c\udf19" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "What causes day and night?",
    options: [
        { id: "a", text: "Sun orbits Earth" },
        { id: "b", text: "Earth spinning on its axis" },
        { id: "c", text: "Moon blocks Sun" },
        { id: "d", text: "Clouds" }
    ],
    answerId: "b",
    why: "Earth's rotation causes day and night.",
    visual: "water-cycle",
    speak: "What causes day and night?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Sun is a star", "Spin makes day/night", "Orbit makes a year", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5ScienceSpace: ChapterDef = {
  id: "sun-moon-space",
  title: "Sun, Moon and Solar System",
  emoji: "\\ud83c\\udf1e",
  blurb: "Day, night, Moon and planets",
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
  paperTopics: ["earth-space", "living-things"],
};

export const g5ScienceSpaceQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
