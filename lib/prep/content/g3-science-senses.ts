import type { ChapterDef, PrepQuestion } from "../types";

/** Our Sense Organs - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-sci-senses-a-q01",
    prompt: "Look at the face. Which label points to the part that helps us see?",
    options: [
      { id: "a", text: "Label A" },
      { id: "b", text: "Label B" },
      { id: "c", text: "Label C" },
      { id: "d", text: "Label D" }
    ],
    answerId: "b",
    explanation: "Label B points to the eye. We see colours, shapes and things with our eyes. A is the ear, C is the nose and D is the tongue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA1\"><title id=\"tA1\">A child's face with four parts labelled A to D</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA1\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><ellipse class=\"part\" cx=\"90\" cy=\"112\" rx=\"10\" ry=\"18\"/><ellipse class=\"part\" cx=\"230\" cy=\"112\" rx=\"10\" ry=\"18\"/><circle class=\"part\" cx=\"160\" cy=\"110\" r=\"70\"/><path d=\"M92,95 Q100,30 160,34 Q220,30 228,95 Q200,60 160,62 Q120,60 92,95 Z\" style=\"fill:#4a2c17\"/><path class=\"part\" d=\"M122,95 Q135,83 148,95 Q135,105 122,95 Z\" style=\"fill:#fff\"/><circle cx=\"135\" cy=\"95\" r=\"5\" style=\"fill:#3b6fb6\"/><path class=\"part\" d=\"M172,95 Q185,83 198,95 Q185,105 172,95 Z\" style=\"fill:#fff\"/><circle cx=\"185\" cy=\"95\" r=\"5\" style=\"fill:#3b6fb6\"/><path d=\"M160,102 Q150,124 154,126 Q160,130 166,126\" style=\"fill:none;stroke:#333;stroke-width:2\"/><path class=\"part\" d=\"M138,142 Q160,138 182,142 Q160,170 138,142 Z\" style=\"fill:#c0392b\"/><path class=\"part\" d=\"M150,148 Q160,174 170,148 Z\" style=\"fill:#f28b9b\"/><text class=\"label\" x=\"22\" y=\"72\" text-anchor=\"middle\">A</text><line class=\"arrow\" x1=\"30\" y1=\"78\" x2=\"78\" y2=\"104\" marker-end=\"url(#ahA1)\"/><text class=\"label\" x=\"298\" y=\"42\" text-anchor=\"middle\">B</text><line class=\"arrow\" x1=\"290\" y1=\"48\" x2=\"198\" y2=\"90\" marker-end=\"url(#ahA1)\"/><text class=\"label\" x=\"22\" y=\"198\" text-anchor=\"middle\">C</text><line class=\"arrow\" x1=\"32\" y1=\"190\" x2=\"152\" y2=\"124\" marker-end=\"url(#ahA1)\"/><text class=\"label\" x=\"298\" y=\"200\" text-anchor=\"middle\">D</text><line class=\"arrow\" x1=\"290\" y1=\"194\" x2=\"172\" y2=\"158\" marker-end=\"url(#ahA1)\"/></svg>"}
  },
  {
    id: "g3-sci-senses-a-q02",
    prompt: "We hear music with our ______.",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Skin" },
      { id: "c", text: "Eyes" },
      { id: "d", text: "Nose" }
    ],
    answerId: "a",
    explanation: "Ears catch sounds, so we can hear music.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q03",
    prompt: "Look at the rose. Which sense organ in the picture helps you smell it?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "c",
    explanation: "Picture C is the nose. The nose helps us smell things like flowers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA3\"><title id=\"tA3\">A rose and four sense organ pictures: A tongue, B ear, C nose, D eye</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA3\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><g transform=\"translate(62,80) scale(1.6)\"><line x1=\"0\" y1=\"8\" x2=\"0\" y2=\"40\" style=\"stroke:#2e7d32;stroke-width:3\"/><path class=\"part\" d=\"M0,26 Q12,18 16,26 Q8,32 0,26 Z\" style=\"fill:#4caf50\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"12\" style=\"fill:#e53950\"/><path d=\"M-5,0 Q0,-7 5,0 Q0,5 -2,0\" style=\"fill:none;stroke:#8e1b2b;stroke-width:1.5\"/></g><text class=\"small\" x=\"62\" y=\"200\" text-anchor=\"middle\">Rose</text><rect x=\"130\" y=\"12\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"142\" y=\"30\" text-anchor=\"middle\">A</text><g transform=\"translate(173,64) scale(1.4)\"><path class=\"part\" d=\"M-18,-4 Q0,-12 18,-4 Q0,18 -18,-4 Z\" style=\"fill:#c0392b\"/><path class=\"part\" d=\"M-8,2 Q0,24 8,2 Z\" style=\"fill:#f28b9b\"/></g><rect x=\"222\" y=\"12\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"234\" y=\"30\" text-anchor=\"middle\">B</text><g transform=\"translate(265,64) scale(1.4)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><rect x=\"130\" y=\"114\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"142\" y=\"132\" text-anchor=\"middle\">C</text><g transform=\"translate(173,166) scale(1.4)\"><path class=\"part\" d=\"M-2,-18 C-4,-6 -14,6 -10,12 C-6,16 6,16 10,12 C14,6 4,-6 2,-18 Z\"/><circle cx=\"-5\" cy=\"11\" r=\"2\" style=\"fill:#333\"/><circle cx=\"5\" cy=\"11\" r=\"2\" style=\"fill:#333\"/></g><rect x=\"222\" y=\"114\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"234\" y=\"132\" text-anchor=\"middle\">D</text><g transform=\"translate(265,166) scale(1.4)\"><path class=\"part\" d=\"M-20,0 Q0,-16 20,0 Q0,16 -20,0 Z\" style=\"fill:#fff\"/><circle cx=\"0\" cy=\"0\" r=\"6\" style=\"fill:#3b6fb6\"/><circle cx=\"0\" cy=\"0\" r=\"2.5\" style=\"fill:#111\"/></g></svg>"}
  },
  {
    id: "g3-sci-senses-a-q04",
    prompt: "Which organ tells you that a lemon is sour?",
    options: [
      { id: "a", text: "Eyes" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Tongue" }
    ],
    answerId: "d",
    explanation: "The tongue helps us taste. Lemon tastes sour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q05",
    prompt: "Which sense organ covers our whole body?",
    options: [
      { id: "a", text: "Skin" },
      { id: "b", text: "Eyes" },
      { id: "c", text: "Tongue" },
      { id: "d", text: "Ears" }
    ],
    answerId: "a",
    explanation: "Skin covers our whole body. It helps us feel touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q06",
    prompt: "How many main sense organs do we have?",
    options: [
      { id: "a", text: "Three" },
      { id: "b", text: "Four" },
      { id: "c", text: "Five" },
      { id: "d", text: "Six" }
    ],
    answerId: "c",
    explanation: "We have five: eyes, ears, nose, tongue and skin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q07",
    prompt: "When you hold a piece of ice, your skin feels ______.",
    options: [
      { id: "a", text: "hot" },
      { id: "b", text: "cold" },
      { id: "c", text: "sweet" },
      { id: "d", text: "loud" }
    ],
    answerId: "b",
    explanation: "Ice is cold. Our skin feels the cold.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q08",
    prompt: "The sense of hearing goes with which organ?",
    options: [
      { id: "a", text: "Nose" },
      { id: "b", text: "Tongue" },
      { id: "c", text: "Eyes" },
      { id: "d", text: "Ears" }
    ],
    answerId: "d",
    explanation: "We hear with our ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q09",
    prompt: "Look at the four foods. Which one tastes sweet?",
    options: [
      { id: "a", text: "Lemon" },
      { id: "b", text: "Karela (bitter gourd)" },
      { id: "c", text: "Honey" },
      { id: "d", text: "Salt" }
    ],
    answerId: "c",
    explanation: "Honey (C) is sweet. Lemon is sour, karela is bitter and salt is salty.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA9\"><title id=\"tA9\">Four foods: A lemon, B karela, C honey jar, D salt shaker</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA9\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"5\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"41.875\" y=\"23\" text-anchor=\"middle\">A</text><rect x=\"84\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"120.625\" y=\"23\" text-anchor=\"middle\">B</text><rect x=\"162\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199.375\" y=\"23\" text-anchor=\"middle\">C</text><rect x=\"241\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"278.125\" y=\"23\" text-anchor=\"middle\">D</text><g transform=\"translate(41.875,110) scale(1.5)\"><ellipse class=\"part\" cx=\"0\" cy=\"0\" rx=\"17\" ry=\"12\" style=\"fill:#f7d417\"/><circle cx=\"-18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/><circle cx=\"18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/></g><text class=\"small\" x=\"41.875\" y=\"190\" text-anchor=\"middle\">Lemon</text><g transform=\"translate(120.625,110) scale(1.5)\"><ellipse class=\"part\" cx=\"0\" cy=\"0\" rx=\"22\" ry=\"8\" style=\"fill:#3a8d3a\"/><circle cx=\"-12\" cy=\"-2\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"-5\" cy=\"2\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"2\" cy=\"-3\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"9\" cy=\"1\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"15\" cy=\"-1\" r=\"1.5\" style=\"fill:#bfe6a0\"/></g><text class=\"small\" x=\"120.625\" y=\"190\" text-anchor=\"middle\">Karela</text><g transform=\"translate(199.375,110) scale(1.5)\"><rect class=\"part\" x=\"-13\" y=\"-10\" width=\"26\" height=\"26\" rx=\"5\" style=\"fill:#f0a500\"/><rect class=\"part\" x=\"-15\" y=\"-17\" width=\"30\" height=\"8\" rx=\"2\" style=\"fill:#8b5a2b\"/><path d=\"M-6,0 Q0,8 6,0\" style=\"fill:none;stroke:#fff;stroke-width:2\"/></g><text class=\"small\" x=\"199.375\" y=\"190\" text-anchor=\"middle\">Honey</text><g transform=\"translate(278.125,110) scale(1.5)\"><rect class=\"part\" x=\"-10\" y=\"-8\" width=\"20\" height=\"26\" rx=\"4\" style=\"fill:#fff\"/><path class=\"part\" d=\"M-10,-8 Q0,-22 10,-8 Z\" style=\"fill:#bbb\"/><circle cx=\"-3\" cy=\"-12\" r=\"1.3\" style=\"fill:#333\"/><circle cx=\"3\" cy=\"-12\" r=\"1.3\" style=\"fill:#333\"/></g><text class=\"small\" x=\"278.125\" y=\"190\" text-anchor=\"middle\">Salt</text></svg>"}
  },
  {
    id: "g3-sci-senses-a-q10",
    prompt: "We should wash our hands before ______.",
    options: [
      { id: "a", text: "eating food" },
      { id: "b", text: "looking at the sky" },
      { id: "c", text: "hearing a song" },
      { id: "d", text: "smelling rain" }
    ],
    answerId: "a",
    explanation: "Clean hands keep germs away from our food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q11",
    prompt: "Riya is in the next room. Smoke comes from the kitchen. Which organ warns her first?",
    options: [
      { id: "a", text: "Eyes" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Tongue" },
      { id: "d", text: "Nose" }
    ],
    answerId: "d",
    explanation: "Her nose smells the smoke. Then she should tell a grown-up at once.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA11\"><title id=\"tA11\">Smoke rising from a pan on a stove and drifting towards a girl</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA11\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"20\" y=\"150\" width=\"120\" height=\"50\" rx=\"4\" style=\"fill:#7f8c8d;stroke:#333;stroke-width:2\"/><circle cx=\"55\" cy=\"175\" r=\"8\" style=\"fill:#333\"/><circle cx=\"105\" cy=\"175\" r=\"8\" style=\"fill:#333\"/><path class=\"part\" d=\"M40,130 L120,130 L112,150 L48,150 Z\" style=\"fill:#555\"/><rect x=\"120\" y=\"134\" width=\"30\" height=\"5\" style=\"fill:#555\"/><path d=\"M70,128 q-8,-10 0,-20 q8,-10 0,-20\" style=\"fill:none;stroke:#888;stroke-width:4;opacity:.8\"/><path d=\"M80,128 q-8,-10 0,-20 q8,-10 0,-20\" style=\"fill:none;stroke:#888;stroke-width:4;opacity:.8\"/><path d=\"M90,128 q-8,-10 0,-20 q8,-10 0,-20\" style=\"fill:none;stroke:#888;stroke-width:4;opacity:.8\"/><line class=\"arrow\" x1=\"100\" y1=\"70\" x2=\"195\" y2=\"80\" marker-end=\"url(#ahA11)\"/><g transform=\"translate(240,100) scale(1.6)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><text class=\"small\" x=\"240\" y=\"205\" text-anchor=\"middle\">Riya</text><text class=\"small\" x=\"80\" y=\"210\" text-anchor=\"middle\">Kitchen</text></svg>"}
  },
  {
    id: "g3-sci-senses-a-q12",
    prompt: "Which picture shows the SAFE way to clean your ears?",
    options: [
      { id: "a", text: "A pencil poked inside" },
      { id: "b", text: "A soft cloth wiping the outer ear" },
      { id: "c", text: "Hot water poured inside" },
      { id: "d", text: "A hairpin poked inside" }
    ],
    answerId: "b",
    explanation: "Picture B is safe. Never put sharp things or hot water in the ear. Just wipe the outside gently.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA12\"><title id=\"tA12\">Four ways to clean ears: A pencil, B soft cloth on outer ear, C hot water, D hairpin</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA12\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"5\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"41.875\" y=\"23\" text-anchor=\"middle\">A</text><rect x=\"84\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"120.625\" y=\"23\" text-anchor=\"middle\">B</text><rect x=\"162\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199.375\" y=\"23\" text-anchor=\"middle\">C</text><rect x=\"241\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"278.125\" y=\"23\" text-anchor=\"middle\">D</text><g transform=\"translate(41.875,105) scale(1.4)\"><g transform=\"translate(-4,0) scale(1.3)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><g transform=\"translate(10,-6) scale(0.9) rotate(-60)\"><rect class=\"part\" x=\"-4\" y=\"-24\" width=\"8\" height=\"38\" style=\"fill:#f4d03f\"/><path class=\"part\" d=\"M-4,14 L0,24 L4,14 Z\" style=\"fill:#f5cba7\"/></g></g><g transform=\"translate(120.625,105) scale(1.4)\"><g transform=\"translate(-4,0) scale(1.3)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><g transform=\"translate(18,10) scale(0.9)\"><path class=\"part\" d=\"M-14,-10 Q-4,-14 14,-10 L12,10 Q0,6 -12,10 Z\" style=\"fill:#85c1e9\"/></g></g><g transform=\"translate(199.375,105) scale(1.4)\"><g transform=\"translate(-4,0) scale(1.3)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><path d=\"M10,-22 L10,-6\" style=\"stroke:#3498db;stroke-width:3;stroke-dasharray:3 3\"/><path d=\"M6,-18 q-3,-4 0,-8 q3,-4 0,-8\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/><path d=\"M14,-18 q-3,-4 0,-8 q3,-4 0,-8\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/><path d=\"M22,-18 q-3,-4 0,-8 q3,-4 0,-8\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/></g><g transform=\"translate(278.125,105) scale(1.4)\"><g transform=\"translate(-4,0) scale(1.3)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><g transform=\"translate(14,-8) scale(0.9) rotate(-60)\"><path d=\"M-3,-24 L-3,16 Q0,22 3,16 L3,-20\" style=\"fill:none;stroke:#222;stroke-width:2.5\"/></g></g><text class=\"small\" x=\"41.875\" y=\"195\" text-anchor=\"middle\">Pencil</text><text class=\"small\" x=\"120.625\" y=\"195\" text-anchor=\"middle\">Soft cloth</text><text class=\"small\" x=\"199.375\" y=\"195\" text-anchor=\"middle\">Hot water</text><text class=\"small\" x=\"278.125\" y=\"195\" text-anchor=\"middle\">Hairpin</text></svg>"}
  },
  {
    id: "g3-sci-senses-a-q13",
    prompt: "A car horn honks behind you, so you step aside. Which sense helped you?",
    options: [
      { id: "a", text: "Hearing" },
      { id: "b", text: "Taste" },
      { id: "c", text: "Smell" },
      { id: "d", text: "Touch" }
    ],
    answerId: "a",
    explanation: "Your ears heard the horn. Hearing kept you safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA13\"><title id=\"tA13\">A car honking behind a child on the road; the child steps aside to the footpath</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA13\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"1\" y=\"120\" width=\"318\" height=\"70\" style=\"fill:#7b7d7d\"/><line x1=\"10\" y1=\"155\" x2=\"310\" y2=\"155\" style=\"stroke:#fff;stroke-width:3;stroke-dasharray:14 10\"/><rect x=\"1\" y=\"190\" width=\"318\" height=\"28\" style=\"fill:#d5dbdb\"/><g transform=\"translate(70,150) scale(1.2)\"><rect class=\"part\" x=\"-34\" y=\"-10\" width=\"68\" height=\"22\" rx=\"6\" style=\"fill:#e74c3c\"/><path class=\"part\" d=\"M-20,-10 L-12,-26 L14,-26 L22,-10 Z\" style=\"fill:#f5b7b1\"/><circle cx=\"-18\" cy=\"14\" r=\"8\" style=\"fill:#222\"/><circle cx=\"18\" cy=\"14\" r=\"8\" style=\"fill:#222\"/></g><path d=\"M118,130 Q126,138 118,146\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><path d=\"M127,124 Q135,138 127,152\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><path d=\"M136,118 Q144,138 136,158\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><text class=\"label\" x=\"130\" y=\"112\" text-anchor=\"middle\">BEEP!</text><g transform=\"translate(240,110) scale(1.2)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><line class=\"arrow\" x1=\"262\" y1=\"140\" x2=\"262\" y2=\"196\" marker-end=\"url(#ahA13)\"/><text class=\"small\" x=\"160\" y=\"212\" text-anchor=\"middle\">Footpath</text></svg>"}
  },
  {
    id: "g3-sci-senses-a-q14",
    prompt: "You touch a hot cup and pull your hand back fast. Which sense helped you?",
    options: [
      { id: "a", text: "Taste" },
      { id: "b", text: "Smell" },
      { id: "c", text: "Hearing" },
      { id: "d", text: "Touch" }
    ],
    answerId: "d",
    explanation: "Your skin felt the heat. Touch helped you move away quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA14\"><title id=\"tA14\">A hand pulling back from a hot, steaming cup</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA14\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><g transform=\"translate(110,150) scale(2)\"><path class=\"part\" d=\"M-16,-12 L16,-12 L12,16 L-12,16 Z\" style=\"fill:#e74c3c\"/><path d=\"M16,-6 Q28,-2 14,8\" style=\"fill:none;stroke:#333;stroke-width:3\"/></g><path d=\"M102,112 q-5,-8 0,-16 q5,-8 0,-16\" style=\"fill:none;stroke:#e67e22;stroke-width:2\"/><path d=\"M110,112 q-5,-8 0,-16 q5,-8 0,-16\" style=\"fill:none;stroke:#e67e22;stroke-width:2\"/><path d=\"M118,112 q-5,-8 0,-16 q5,-8 0,-16\" style=\"fill:none;stroke:#e67e22;stroke-width:2\"/><g transform=\"translate(230,110) scale(1.8) rotate(-90)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g><line class=\"arrow\" x1=\"205\" y1=\"150\" x2=\"285\" y2=\"150\" marker-end=\"url(#ahA14)\"/><text class=\"small\" x=\"110\" y=\"208\" text-anchor=\"middle\">Hot cup</text></svg>"}
  },
  {
    id: "g3-sci-senses-a-q15",
    prompt: "Which picture shows a good habit for your eyes?",
    options: [
      { id: "a", text: "Rubbing them with dirty hands" },
      { id: "b", text: "Looking straight at the Sun" },
      { id: "c", text: "Reading in good light" },
      { id: "d", text: "Reading in the dark" }
    ],
    answerId: "c",
    explanation: "Picture C shows reading in good light. Good light lets your eyes see without strain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA15\"><title id=\"tA15\">Four eye habits: A rubbing eyes with dirty hands, B looking at the Sun, C reading under a lamp, D reading in the dark</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA15\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"5\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"41.875\" y=\"23\" text-anchor=\"middle\">A</text><rect x=\"84\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"120.625\" y=\"23\" text-anchor=\"middle\">B</text><rect x=\"162\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199.375\" y=\"23\" text-anchor=\"middle\">C</text><rect x=\"241\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"278.125\" y=\"23\" text-anchor=\"middle\">D</text><g transform=\"translate(41.875,95) scale(1)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/><g transform=\"translate(-6,-2) scale(0.5)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g><circle cx=\"-10\" cy=\"-6\" r=\"1.8\" style=\"fill:#6e2c00\"/><circle cx=\"-4\" cy=\"4\" r=\"1.8\" style=\"fill:#6e2c00\"/><circle cx=\"-12\" cy=\"6\" r=\"1.8\" style=\"fill:#6e2c00\"/></g><text class=\"small\" x=\"41.875\" y=\"195\" text-anchor=\"middle\">Dirty hands</text><g transform=\"translate(132.625,50) scale(1)\"><line x1=\"0\" y1=\"0\" x2=\"18.0\" y2=\"0.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"12.7\" y2=\"12.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-0.0\" y2=\"18.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-12.7\" y2=\"12.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-18.0\" y2=\"-0.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-12.7\" y2=\"-12.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"0.0\" y2=\"-18.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"12.7\" y2=\"-12.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><circle cx=\"0\" cy=\"0\" r=\"9\" style=\"fill:#f9d71c;stroke:#f39c12;stroke-width:2\"/></g><g transform=\"translate(112.625,120) scale(1.0)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><text class=\"small\" x=\"120.625\" y=\"195\" text-anchor=\"middle\">Look at Sun</text><g transform=\"translate(215.375,60) scale(0.9)\"><path class=\"part\" d=\"M-14,0 L-6,-16 L6,-16 L14,0 Z\" style=\"fill:#f5b041\"/><rect class=\"part\" x=\"-2\" y=\"0\" width=\"4\" height=\"22\" style=\"fill:#555\"/><rect class=\"part\" x=\"-12\" y=\"22\" width=\"24\" height=\"5\" style=\"fill:#555\"/></g><path d=\"M215.375,60 L173.375,150 L229.375,150 Z\" style=\"fill:#f9e79f;opacity:.7\"/><g transform=\"translate(193.375,120) scale(1.0)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><g transform=\"translate(195.375,150) scale(0.9)\"><path class=\"part\" d=\"M-18,-10 L0,-6 L18,-10 L18,12 L0,16 L-18,12 Z\" style=\"fill:#fff\"/><line x1=\"0\" y1=\"-6\" x2=\"0\" y2=\"16\" style=\"stroke:#333;stroke-width:1.5\"/></g><text class=\"small\" x=\"199.375\" y=\"195\" text-anchor=\"middle\">Good light</text><rect x=\"242.125\" y=\"30\" width=\"72\" height=\"150\" style=\"fill:#1b2631\"/><g transform=\"translate(298.125,50) scale(1)\"><circle cx=\"0\" cy=\"0\" r=\"8\" style=\"fill:#f7f9f9\"/><circle cx=\"4\" cy=\"-2\" r=\"7\" style=\"fill:#1b2631\"/></g><g transform=\"translate(272.125,120) scale(1.0)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><g transform=\"translate(274.125,150) scale(0.9)\"><path class=\"part\" d=\"M-18,-10 L0,-6 L18,-10 L18,12 L0,16 L-18,12 Z\" style=\"fill:#fff\"/><line x1=\"0\" y1=\"-6\" x2=\"0\" y2=\"16\" style=\"stroke:#333;stroke-width:1.5\"/></g><text class=\"small\" x=\"278.125\" y=\"195\" text-anchor=\"middle\">In the dark</text></svg>"}
  },
  {
    id: "g3-sci-senses-a-q16",
    prompt: "What taste does karela (bitter gourd) have?",
    options: [
      { id: "a", text: "Sweet" },
      { id: "b", text: "Bitter" },
      { id: "c", text: "Salty" },
      { id: "d", text: "Sour" }
    ],
    answerId: "b",
    explanation: "Karela tastes bitter. That is how it got its name, bitter gourd.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q17",
    prompt: "Which sense helps you tell a red ball from a blue ball?",
    options: [
      { id: "a", text: "Touch" },
      { id: "b", text: "Smell" },
      { id: "c", text: "Hearing" },
      { id: "d", text: "Sight" }
    ],
    answerId: "d",
    explanation: "Our eyes see colours. Both balls may feel the same.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q18",
    prompt: "Which of these can you NOT find out by smell?",
    options: [
      { id: "a", text: "The colour of a flower" },
      { id: "b", text: "Burnt toast" },
      { id: "c", text: "A ripe mango" },
      { id: "d", text: "Fresh soap" }
    ],
    answerId: "a",
    explanation: "We see colour with our eyes, not our nose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q19",
    prompt: "Raju stands next to this very loud speaker for a long time. What can happen?",
    options: [
      { id: "a", text: "His ears become sharper" },
      { id: "b", text: "His ears can get hurt" },
      { id: "c", text: "His eyes see better" },
      { id: "d", text: "His food becomes tasty" }
    ],
    answerId: "b",
    explanation: "Very loud sounds for a long time can hurt our ears. Keep the sound low or move away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tA19\"><title id=\"tA19\">A very loud speaker with big sound waves next to a child</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahA19\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><g transform=\"translate(70,110) scale(1.8)\"><rect class=\"part\" x=\"-22\" y=\"-34\" width=\"44\" height=\"68\" rx=\"4\" style=\"fill:#34495e\"/><circle cx=\"0\" cy=\"-16\" r=\"9\" style=\"fill:#95a5a6;stroke:#222;stroke-width:2\"/><circle cx=\"0\" cy=\"12\" r=\"15\" style=\"fill:#95a5a6;stroke:#222;stroke-width:2\"/><circle cx=\"0\" cy=\"12\" r=\"5\" style=\"fill:#222\"/></g><path d=\"M125,102 Q133,110 125,118\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><path d=\"M134,96 Q142,110 134,124\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><path d=\"M143,90 Q151,110 143,130\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><path d=\"M152,84 Q160,110 152,136\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><g transform=\"translate(165,40) scale(1.0)\"><ellipse cx=\"-6\" cy=\"12\" rx=\"6\" ry=\"4.5\" style=\"fill:#8e44ad\"/><ellipse cx=\"10\" cy=\"8\" rx=\"6\" ry=\"4.5\" style=\"fill:#8e44ad\"/><path d=\"M0,12 L0,-14 L16,-18 L16,8\" style=\"fill:none;stroke:#8e44ad;stroke-width:3\"/></g><g transform=\"translate(250,100) scale(1.5)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,10 Q0,5 6,10\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><text class=\"small\" x=\"250\" y=\"205\" text-anchor=\"middle\">Raju</text><text class=\"small\" x=\"70\" y=\"205\" text-anchor=\"middle\">Very loud!</text></svg>"}
  },
  {
    id: "g3-sci-senses-a-q20",
    prompt: "Which pair is matched correctly?",
    options: [
      { id: "a", text: "Nose \u2013 taste" },
      { id: "b", text: "Ears \u2013 see" },
      { id: "c", text: "Skin \u2013 touch" },
      { id: "d", text: "Tongue \u2013 hear" }
    ],
    answerId: "c",
    explanation: "Skin helps us feel touch. The other pairs are mixed up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q21",
    prompt: "When your nose is blocked from a cold, food seems less tasty. Why?",
    options: [
      { id: "a", text: "Smell helps us taste food" },
      { id: "b", text: "Our ears stop working" },
      { id: "c", text: "Our eyes close" },
      { id: "d", text: "Our skin gets cold" }
    ],
    answerId: "a",
    explanation: "Smell and taste work together. A blocked nose makes food taste less.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q22",
    prompt: "Some people who cannot see read raised dots called Braille. Which sense do they use?",
    options: [
      { id: "a", text: "Sight" },
      { id: "b", text: "Hearing" },
      { id: "c", text: "Touch" },
      { id: "d", text: "Taste" }
    ],
    answerId: "c",
    explanation: "They feel the bumpy dots with their fingertips. That is touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q23",
    prompt: "Which group has ONLY things you can hear?",
    options: [
      { id: "a", text: "Rainbow, star, moon" },
      { id: "b", text: "Rose, soap, perfume" },
      { id: "c", text: "Sugar, salt, lemon" },
      { id: "d", text: "Bell, drum, whistle" }
    ],
    answerId: "d",
    explanation: "A bell, a drum and a whistle all make sounds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q24",
    prompt: "Which sense organ can warn us that milk has gone bad, before we drink it?",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Knees" },
      { id: "d", text: "Hair" }
    ],
    answerId: "b",
    explanation: "Bad milk smells sour. The nose warns us before we taste it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-sci-senses-b-q01",
    prompt: "Look at the face. Which label points to the part that tastes food?",
    options: [
      { id: "a", text: "Label A" },
      { id: "b", text: "Label B" },
      { id: "c", text: "Label C" },
      { id: "d", text: "Label D" }
    ],
    answerId: "c",
    explanation: "Label C points to the tongue. The tongue tastes our food. A is the nose, B is the eye and D is the ear.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB1\"><title id=\"tB1\">A child's face with four parts labelled A to D</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB1\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><ellipse class=\"part\" cx=\"90\" cy=\"112\" rx=\"10\" ry=\"18\"/><ellipse class=\"part\" cx=\"230\" cy=\"112\" rx=\"10\" ry=\"18\"/><circle class=\"part\" cx=\"160\" cy=\"110\" r=\"70\"/><path d=\"M92,95 Q100,30 160,34 Q220,30 228,95 Q200,60 160,62 Q120,60 92,95 Z\" style=\"fill:#4a2c17\"/><path class=\"part\" d=\"M122,95 Q135,83 148,95 Q135,105 122,95 Z\" style=\"fill:#fff\"/><circle cx=\"135\" cy=\"95\" r=\"5\" style=\"fill:#3b6fb6\"/><path class=\"part\" d=\"M172,95 Q185,83 198,95 Q185,105 172,95 Z\" style=\"fill:#fff\"/><circle cx=\"185\" cy=\"95\" r=\"5\" style=\"fill:#3b6fb6\"/><path d=\"M160,102 Q150,124 154,126 Q160,130 166,126\" style=\"fill:none;stroke:#333;stroke-width:2\"/><path class=\"part\" d=\"M138,142 Q160,138 182,142 Q160,170 138,142 Z\" style=\"fill:#c0392b\"/><path class=\"part\" d=\"M150,148 Q160,174 170,148 Z\" style=\"fill:#f28b9b\"/><text class=\"label\" x=\"298\" y=\"198\" text-anchor=\"middle\">A</text><line class=\"arrow\" x1=\"290\" y1=\"190\" x2=\"166\" y2=\"126\" marker-end=\"url(#ahB1)\"/><text class=\"label\" x=\"22\" y=\"42\" text-anchor=\"middle\">B</text><line class=\"arrow\" x1=\"30\" y1=\"48\" x2=\"122\" y2=\"92\" marker-end=\"url(#ahB1)\"/><text class=\"label\" x=\"22\" y=\"198\" text-anchor=\"middle\">C</text><line class=\"arrow\" x1=\"32\" y1=\"192\" x2=\"150\" y2=\"160\" marker-end=\"url(#ahB1)\"/><text class=\"label\" x=\"298\" y=\"72\" text-anchor=\"middle\">D</text><line class=\"arrow\" x1=\"290\" y1=\"78\" x2=\"242\" y2=\"104\" marker-end=\"url(#ahB1)\"/></svg>"}
  },
  {
    id: "g3-sci-senses-b-q02",
    prompt: "We feel soft cotton with our ______.",
    options: [
      { id: "a", text: "skin" },
      { id: "b", text: "ears" },
      { id: "c", text: "nose" },
      { id: "d", text: "eyes" }
    ],
    answerId: "a",
    explanation: "Skin feels soft and rough things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q03",
    prompt: "Which organ do we use to watch a cartoon?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Skin" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "d",
    explanation: "We watch pictures with our eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q04",
    prompt: "What taste does sugar have?",
    options: [
      { id: "a", text: "Salty" },
      { id: "b", text: "Sweet" },
      { id: "c", text: "Sour" },
      { id: "d", text: "Bitter" }
    ],
    answerId: "b",
    explanation: "Sugar tastes sweet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q05",
    prompt: "The school bell is ringing. Which organ in the picture hears it?",
    options: [
      { id: "a", text: "Eyes" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Tongue" },
      { id: "d", text: "Skin" }
    ],
    answerId: "b",
    explanation: "Picture B is the ear. Ears help us hear the bell ring.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB5\"><title id=\"tB5\">A ringing school bell and four sense organ pictures: A eye, B ear, C tongue, D hand</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB5\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><g transform=\"translate(55,95) scale(2)\"><path class=\"part\" d=\"M-16,12 Q-16,-14 0,-16 Q16,-14 16,12 Z\" style=\"fill:#f1c40f\"/><rect class=\"part\" x=\"-20\" y=\"12\" width=\"40\" height=\"5\" rx=\"2\" style=\"fill:#d4ac0d\"/><circle class=\"part\" cx=\"0\" cy=\"21\" r=\"4\" style=\"fill:#7d6608\"/><rect class=\"part\" x=\"-2\" y=\"-22\" width=\"4\" height=\"7\" style=\"fill:#7d6608\"/></g><path d=\"M95,82 Q103,90 95,98\" style=\"fill:none;stroke:#8e44ad;stroke-width:2.5\"/><path d=\"M104,76 Q112,90 104,104\" style=\"fill:none;stroke:#8e44ad;stroke-width:2.5\"/><text class=\"small\" x=\"62\" y=\"200\" text-anchor=\"middle\">School bell</text><rect x=\"130\" y=\"12\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"142\" y=\"30\" text-anchor=\"middle\">A</text><g transform=\"translate(173,64) scale(1.4)\"><path class=\"part\" d=\"M-20,0 Q0,-16 20,0 Q0,16 -20,0 Z\" style=\"fill:#fff\"/><circle cx=\"0\" cy=\"0\" r=\"6\" style=\"fill:#3b6fb6\"/><circle cx=\"0\" cy=\"0\" r=\"2.5\" style=\"fill:#111\"/></g><rect x=\"222\" y=\"12\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"234\" y=\"30\" text-anchor=\"middle\">B</text><g transform=\"translate(265,64) scale(1.4)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><rect x=\"130\" y=\"114\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"142\" y=\"132\" text-anchor=\"middle\">C</text><g transform=\"translate(173,166) scale(1.4)\"><path class=\"part\" d=\"M-18,-4 Q0,-12 18,-4 Q0,18 -18,-4 Z\" style=\"fill:#c0392b\"/><path class=\"part\" d=\"M-8,2 Q0,24 8,2 Z\" style=\"fill:#f28b9b\"/></g><rect x=\"222\" y=\"114\" width=\"86\" height=\"94\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"234\" y=\"132\" text-anchor=\"middle\">D</text><g transform=\"translate(265,166) scale(1.4)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g></svg>"}
  },
  {
    id: "g3-sci-senses-b-q06",
    prompt: "Which of these smells nice?",
    options: [
      { id: "a", text: "Garbage" },
      { id: "b", text: "Smoke" },
      { id: "c", text: "A rotten egg" },
      { id: "d", text: "A jasmine flower" }
    ],
    answerId: "d",
    explanation: "Jasmine has a sweet, nice smell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q07",
    prompt: "A raw green mango tastes ______.",
    options: [
      { id: "a", text: "sour" },
      { id: "b", text: "sweet" },
      { id: "c", text: "salty" },
      { id: "d", text: "bitter" }
    ],
    answerId: "a",
    explanation: "A raw mango is sour. It turns sweet when it ripens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q08",
    prompt: "How many eyes do we have?",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "Three" },
      { id: "c", text: "Two" },
      { id: "d", text: "Four" }
    ],
    answerId: "c",
    explanation: "We have two eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q09",
    prompt: "The sense of touch goes with which organ?",
    options: [
      { id: "a", text: "Skin" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Ears" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "a",
    explanation: "We feel touch with our skin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q10",
    prompt: "Which taste do chips and sea water have?",
    options: [
      { id: "a", text: "Sweet" },
      { id: "b", text: "Bitter" },
      { id: "c", text: "Salty" },
      { id: "d", text: "Sour" }
    ],
    answerId: "c",
    explanation: "Chips and sea water both have salt. They taste salty.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q11",
    prompt: "Look at the picture. Your feet tell you the sand is hot. Which sense is this?",
    options: [
      { id: "a", text: "Sight" },
      { id: "b", text: "Touch" },
      { id: "c", text: "Smell" },
      { id: "d", text: "Hearing" }
    ],
    answerId: "b",
    explanation: "The skin on your feet feels the heat. That is touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB11\"><title id=\"tB11\">Bare feet on hot sand at the beach under a bright Sun</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB11\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"1\" y=\"1\" width=\"318\" height=\"90\" rx=\"10\" style=\"fill:#d6eaf8\"/><path d=\"M1,70 Q40,60 80,70 T160,70 T240,70 T319,70 L319,95 L1,95 Z\" style=\"fill:#5dade2\"/><rect x=\"1\" y=\"95\" width=\"318\" height=\"124\" rx=\"10\" style=\"fill:#f8d77a\"/><g transform=\"translate(270,35) scale(1)\"><line x1=\"0\" y1=\"0\" x2=\"25.0\" y2=\"0.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"17.7\" y2=\"17.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-0.0\" y2=\"25.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-17.7\" y2=\"17.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-25.0\" y2=\"-0.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"-17.7\" y2=\"-17.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"0.0\" y2=\"-25.0\" style=\"stroke:#f39c12;stroke-width:2.5\"/><line x1=\"0\" y1=\"0\" x2=\"17.7\" y2=\"-17.7\" style=\"stroke:#f39c12;stroke-width:2.5\"/><circle cx=\"0\" cy=\"0\" r=\"16\" style=\"fill:#f9d71c;stroke:#f39c12;stroke-width:2\"/></g><g transform=\"translate(130,150) scale(1.6)\"><path class=\"part\" d=\"M-10,-20 Q10,-24 12,0 Q12,22 0,24 Q-12,22 -12,0 Z\"/><circle class=\"part\" cx=\"-8\" cy=\"-26\" r=\"3\"/><circle class=\"part\" cx=\"-2\" cy=\"-26\" r=\"3\"/><circle class=\"part\" cx=\"4\" cy=\"-26\" r=\"3\"/><circle class=\"part\" cx=\"9\" cy=\"-26\" r=\"3\"/></g><g transform=\"translate(190,150) scale(1.6)\"><path class=\"part\" d=\"M-10,-20 Q10,-24 12,0 Q12,22 0,24 Q-12,22 -12,0 Z\"/><circle class=\"part\" cx=\"-8\" cy=\"-26\" r=\"3\"/><circle class=\"part\" cx=\"-2\" cy=\"-26\" r=\"3\"/><circle class=\"part\" cx=\"4\" cy=\"-26\" r=\"3\"/><circle class=\"part\" cx=\"9\" cy=\"-26\" r=\"3\"/></g><path d=\"M95,128 q-5,-6 0,-12 q5,-6 0,-12\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/><path d=\"M230,128 q-5,-6 0,-12 q5,-6 0,-12\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/><path d=\"M160,128 q-5,-6 0,-12 q5,-6 0,-12\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/><text class=\"small\" x=\"160\" y=\"210\" text-anchor=\"middle\">Hot sand</text></svg>"}
  },
  {
    id: "g3-sci-senses-b-q12",
    prompt: "Which picture shows something good for our eyes?",
    options: [
      { id: "a", text: "Rubbing them hard" },
      { id: "b", text: "Watching TV from very close" },
      { id: "c", text: "Splashing them with dirty water" },
      { id: "d", text: "Washing them with clean water" }
    ],
    answerId: "d",
    explanation: "Picture D shows washing with clean water. It keeps our eyes fresh and safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB12\"><title id=\"tB12\">Four eye habits: A rubbing hard, B TV very close, C dirty water, D washing with clean tap water</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB12\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"5\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"41.875\" y=\"23\" text-anchor=\"middle\">A</text><rect x=\"84\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"120.625\" y=\"23\" text-anchor=\"middle\">B</text><rect x=\"162\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199.375\" y=\"23\" text-anchor=\"middle\">C</text><rect x=\"241\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"278.125\" y=\"23\" text-anchor=\"middle\">D</text><g transform=\"translate(41.875,95) scale(1)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/><g transform=\"translate(-8,-2) scale(0.5)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g><g transform=\"translate(8,-2) scale(0.5)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g><path d=\"M-24,-10 l-6,-4 M-24,0 l-7,0 M24,-10 l6,-4 M24,0 l7,0\" style=\"stroke:#c0392b;stroke-width:2\"/></g><text class=\"small\" x=\"41.875\" y=\"195\" text-anchor=\"middle\">Rub hard</text><g transform=\"translate(128.625,80) scale(0.9)\"><rect class=\"part\" x=\"-26\" y=\"-18\" width=\"52\" height=\"36\" rx=\"4\" style=\"fill:#2c3e50\"/><rect x=\"-21\" y=\"-13\" width=\"42\" height=\"26\" style=\"fill:#76d7c4\"/><line x1=\"-10\" y1=\"18\" x2=\"-14\" y2=\"26\" style=\"stroke:#333;stroke-width:2\"/><line x1=\"10\" y1=\"18\" x2=\"14\" y2=\"26\" style=\"stroke:#333;stroke-width:2\"/></g><g transform=\"translate(116.625,135) scale(0.9)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><text class=\"small\" x=\"120.625\" y=\"195\" text-anchor=\"middle\">TV too close</text><g transform=\"translate(199.375,95) scale(1)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><circle cx=\"185.375\" cy=\"81\" r=\"3\" style=\"fill:#6e2c00\"/><circle cx=\"211.375\" cy=\"77\" r=\"3\" style=\"fill:#6e2c00\"/><circle cx=\"179.375\" cy=\"93\" r=\"3\" style=\"fill:#6e2c00\"/><circle cx=\"217.375\" cy=\"91\" r=\"3\" style=\"fill:#6e2c00\"/><text class=\"small\" x=\"199.375\" y=\"195\" text-anchor=\"middle\">Dirty water</text><g transform=\"translate(278.125,110) scale(1)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><rect x=\"258.125\" y=\"40\" width=\"30\" height=\"8\" style=\"fill:#7f8c8d;stroke:#333;stroke-width:1.5\"/><rect x=\"282.125\" y=\"40\" width=\"6\" height=\"16\" style=\"fill:#7f8c8d\"/><circle cx=\"285.125\" cy=\"64\" r=\"2.5\" style=\"fill:#3498db\"/><circle cx=\"285.125\" cy=\"74\" r=\"2.5\" style=\"fill:#3498db\"/><circle cx=\"285.125\" cy=\"84\" r=\"2.5\" style=\"fill:#3498db\"/><text class=\"small\" x=\"278.125\" y=\"195\" text-anchor=\"middle\">Clean water</text></svg>"}
  },
  {
    id: "g3-sci-senses-b-q13",
    prompt: "Which picture is NOT safe for our ears?",
    options: [
      { id: "a", text: "Keeping the TV sound low" },
      { id: "b", text: "Covering ears near loud crackers" },
      { id: "c", text: "Wiping the outer ear gently" },
      { id: "d", text: "Putting a stick inside the ear" }
    ],
    answerId: "d",
    explanation: "Picture D is not safe. Never put a stick inside the ear. It can hurt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB13\"><title id=\"tB13\">Four ear habits: A TV sound low, B covering ears near crackers, C wiping outer ear, D stick inside ear</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB13\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"5\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"41.875\" y=\"23\" text-anchor=\"middle\">A</text><rect x=\"84\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"120.625\" y=\"23\" text-anchor=\"middle\">B</text><rect x=\"162\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199.375\" y=\"23\" text-anchor=\"middle\">C</text><rect x=\"241\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"278.125\" y=\"23\" text-anchor=\"middle\">D</text><g transform=\"translate(41.875,100) scale(1.0)\"><rect class=\"part\" x=\"-26\" y=\"-18\" width=\"52\" height=\"36\" rx=\"4\" style=\"fill:#2c3e50\"/><rect x=\"-21\" y=\"-13\" width=\"42\" height=\"26\" style=\"fill:#76d7c4\"/><line x1=\"-10\" y1=\"18\" x2=\"-14\" y2=\"26\" style=\"stroke:#333;stroke-width:2\"/><line x1=\"10\" y1=\"18\" x2=\"14\" y2=\"26\" style=\"stroke:#333;stroke-width:2\"/></g><rect x=\"21.875\" y=\"140\" width=\"40\" height=\"8\" style=\"fill:#eee;stroke:#333\"/><rect x=\"21.875\" y=\"140\" width=\"10\" height=\"8\" style=\"fill:#27ae60\"/><text class=\"small\" x=\"41.875\" y=\"195\" text-anchor=\"middle\">Sound low</text><g transform=\"translate(120.625,115) scale(1)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/><g transform=\"translate(-19,2) scale(0.45)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g><g transform=\"translate(19,2) scale(0.45)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g></g><path d=\"M104.625,62 l5,-12 l5,12 z\" style=\"fill:#e74c3c\"/><text class=\"small\" x=\"134.625\" y=\"56\" text-anchor=\"middle\">Bang!</text><text class=\"small\" x=\"120.625\" y=\"195\" text-anchor=\"middle\">Cover ears</text><g transform=\"translate(199.375,105) scale(1)\"><g transform=\"translate(-6,0) scale(1.4)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><g transform=\"translate(14,10) scale(0.8)\"><path class=\"part\" d=\"M-14,-10 Q-4,-14 14,-10 L12,10 Q0,6 -12,10 Z\" style=\"fill:#85c1e9\"/></g></g><text class=\"small\" x=\"199.375\" y=\"195\" text-anchor=\"middle\">Wipe outside</text><g transform=\"translate(278.125,105) scale(1)\"><g transform=\"translate(-6,0) scale(1.4)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><g transform=\"translate(10,-6) scale(0.9) rotate(-55)\"><rect class=\"part\" x=\"-3\" y=\"-26\" width=\"6\" height=\"40\" rx=\"2\" style=\"fill:#a0522d\"/></g></g><text class=\"small\" x=\"278.125\" y=\"195\" text-anchor=\"middle\">Stick inside</text></svg>"}
  },
  {
    id: "g3-sci-senses-b-q14",
    prompt: "Without looking, you know someone lit an agarbatti in the next room. Which sense told you?",
    options: [
      { id: "a", text: "Sight" },
      { id: "b", text: "Smell" },
      { id: "c", text: "Taste" },
      { id: "d", text: "Touch" }
    ],
    answerId: "b",
    explanation: "The smell of the agarbatti reached your nose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q15",
    prompt: "Look at the matches. Which pair is NOT correct?",
    options: [
      { id: "a", text: "Eyes \u2013 see" },
      { id: "b", text: "Ears \u2013 hear" },
      { id: "c", text: "Nose \u2013 touch" },
      { id: "d", text: "Tongue \u2013 taste" }
    ],
    answerId: "c",
    explanation: "Row C is wrong. The nose is for smell. Skin is for touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB15\"><title id=\"tB15\">Four organ-to-sense matches: A eye to see, B ear to hear, C nose to touch, D tongue to taste</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB15\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><text class=\"label\" x=\"22\" y=\"35\" text-anchor=\"middle\">A</text><g transform=\"translate(80,30) scale(1.0)\"><path class=\"part\" d=\"M-20,0 Q0,-16 20,0 Q0,16 -20,0 Z\" style=\"fill:#fff\"/><circle cx=\"0\" cy=\"0\" r=\"6\" style=\"fill:#3b6fb6\"/><circle cx=\"0\" cy=\"0\" r=\"2.5\" style=\"fill:#111\"/></g><line class=\"arrow\" x1=\"110\" y1=\"30\" x2=\"180\" y2=\"30\" marker-end=\"url(#ahB15)\"/><g transform=\"translate(215,30) scale(0.95)\"><path d=\"M-18,8 A18,18 0 0 1 18,8\" style=\"fill:none;stroke:#e74c3c;stroke-width:3\"/><path d=\"M-14,8 A14,14 0 0 1 14,8\" style=\"fill:none;stroke:#f1c40f;stroke-width:3\"/><path d=\"M-10,8 A10,10 0 0 1 10,8\" style=\"fill:none;stroke:#27ae60;stroke-width:3\"/><path d=\"M-6,8 A6,6 0 0 1 6,8\" style=\"fill:none;stroke:#3498db;stroke-width:3\"/></g><text class=\"small\" x=\"250\" y=\"34\">see</text><line x1=\"10\" y1=\"56\" x2=\"310\" y2=\"56\" style=\"stroke:#ddd;stroke-width:1\"/><text class=\"label\" x=\"22\" y=\"87\" text-anchor=\"middle\">B</text><g transform=\"translate(80,82) scale(1.0)\"><path class=\"part\" d=\"M-6,-18 C12,-22 18,-4 10,6 C6,12 4,18 -4,18 C-10,18 -10,10 -6,8\"/><path d=\"M-2,-8 C6,-10 8,0 2,4\" style=\"fill:none;stroke:#333;stroke-width:1.5\"/></g><line class=\"arrow\" x1=\"110\" y1=\"82\" x2=\"180\" y2=\"82\" marker-end=\"url(#ahB15)\"/><g transform=\"translate(215,82) scale(0.95)\"><ellipse cx=\"-6\" cy=\"12\" rx=\"6\" ry=\"4.5\" style=\"fill:#8e44ad\"/><ellipse cx=\"10\" cy=\"8\" rx=\"6\" ry=\"4.5\" style=\"fill:#8e44ad\"/><path d=\"M0,12 L0,-14 L16,-18 L16,8\" style=\"fill:none;stroke:#8e44ad;stroke-width:3\"/></g><text class=\"small\" x=\"250\" y=\"86\">hear</text><line x1=\"10\" y1=\"108\" x2=\"310\" y2=\"108\" style=\"stroke:#ddd;stroke-width:1\"/><text class=\"label\" x=\"22\" y=\"139\" text-anchor=\"middle\">C</text><g transform=\"translate(80,134) scale(1.0)\"><path class=\"part\" d=\"M-2,-18 C-4,-6 -14,6 -10,12 C-6,16 6,16 10,12 C14,6 4,-6 2,-18 Z\"/><circle cx=\"-5\" cy=\"11\" r=\"2\" style=\"fill:#333\"/><circle cx=\"5\" cy=\"11\" r=\"2\" style=\"fill:#333\"/></g><line class=\"arrow\" x1=\"110\" y1=\"134\" x2=\"180\" y2=\"134\" marker-end=\"url(#ahB15)\"/><g transform=\"translate(215,134) scale(0.95)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g><text class=\"small\" x=\"250\" y=\"138\">touch</text><line x1=\"10\" y1=\"160\" x2=\"310\" y2=\"160\" style=\"stroke:#ddd;stroke-width:1\"/><text class=\"label\" x=\"22\" y=\"191\" text-anchor=\"middle\">D</text><g transform=\"translate(80,186) scale(1.0)\"><path class=\"part\" d=\"M-18,-4 Q0,-12 18,-4 Q0,18 -18,-4 Z\" style=\"fill:#c0392b\"/><path class=\"part\" d=\"M-8,2 Q0,24 8,2 Z\" style=\"fill:#f28b9b\"/></g><line class=\"arrow\" x1=\"110\" y1=\"186\" x2=\"180\" y2=\"186\" marker-end=\"url(#ahB15)\"/><g transform=\"translate(215,186) scale(0.95)\"><path class=\"part\" d=\"M-8,0 L8,0 L0,22 Z\" style=\"fill:#d68910\"/><circle class=\"part\" cx=\"0\" cy=\"-6\" r=\"10\" style=\"fill:#f5b7b1\"/></g><text class=\"small\" x=\"250\" y=\"190\">taste</text></svg>"}
  },
  {
    id: "g3-sci-senses-b-q16",
    prompt: "A pin pricks your finger and you feel pain. Which organ felt it?",
    options: [
      { id: "a", text: "Skin" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "a",
    explanation: "Skin feels pain. Pain tells us to be careful.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q17",
    prompt: "Look at the food pairs. Which pair has the SAME taste?",
    options: [
      { id: "a", text: "Sugar and lemon" },
      { id: "b", text: "Salt and honey" },
      { id: "c", text: "Lemon and imli (tamarind)" },
      { id: "d", text: "Karela and sugar" }
    ],
    answerId: "c",
    explanation: "Pair C: lemon and imli both taste sour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB17\"><title id=\"tB17\">Four food pairs: A sugar and lemon, B salt and honey, C lemon and imli, D karela and sugar</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB17\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"5\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"41.875\" y=\"23\" text-anchor=\"middle\">A</text><rect x=\"84\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"120.625\" y=\"23\" text-anchor=\"middle\">B</text><rect x=\"162\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199.375\" y=\"23\" text-anchor=\"middle\">C</text><rect x=\"241\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"278.125\" y=\"23\" text-anchor=\"middle\">D</text><g transform=\"translate(41.875,70) scale(1.1)\"><path class=\"part\" d=\"M-18,-2 L18,-2 Q16,16 0,16 Q-16,16 -18,-2 Z\" style=\"fill:#7fb3d5\"/><rect x=\"-12\" y=\"-9\" width=\"7\" height=\"7\" style=\"fill:#fff;stroke:#999;stroke-width:1\"/><rect x=\"-4\" y=\"-11\" width=\"7\" height=\"7\" style=\"fill:#fff;stroke:#999;stroke-width:1\"/><rect x=\"4\" y=\"-9\" width=\"7\" height=\"7\" style=\"fill:#fff;stroke:#999;stroke-width:1\"/></g><text class=\"small\" x=\"41.875\" y=\"100\" text-anchor=\"middle\">Sugar</text><text class=\"label\" x=\"41.875\" y=\"120\" text-anchor=\"middle\">+</text><g transform=\"translate(41.875,150) scale(1.1)\"><ellipse class=\"part\" cx=\"0\" cy=\"0\" rx=\"17\" ry=\"12\" style=\"fill:#f7d417\"/><circle cx=\"-18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/><circle cx=\"18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/></g><text class=\"small\" x=\"41.875\" y=\"182\" text-anchor=\"middle\">Lemon</text><g transform=\"translate(120.625,70) scale(1.1)\"><rect class=\"part\" x=\"-10\" y=\"-8\" width=\"20\" height=\"26\" rx=\"4\" style=\"fill:#fff\"/><path class=\"part\" d=\"M-10,-8 Q0,-22 10,-8 Z\" style=\"fill:#bbb\"/><circle cx=\"-3\" cy=\"-12\" r=\"1.3\" style=\"fill:#333\"/><circle cx=\"3\" cy=\"-12\" r=\"1.3\" style=\"fill:#333\"/></g><text class=\"small\" x=\"120.625\" y=\"100\" text-anchor=\"middle\">Salt</text><text class=\"label\" x=\"120.625\" y=\"120\" text-anchor=\"middle\">+</text><g transform=\"translate(120.625,150) scale(1.1)\"><rect class=\"part\" x=\"-13\" y=\"-10\" width=\"26\" height=\"26\" rx=\"5\" style=\"fill:#f0a500\"/><rect class=\"part\" x=\"-15\" y=\"-17\" width=\"30\" height=\"8\" rx=\"2\" style=\"fill:#8b5a2b\"/><path d=\"M-6,0 Q0,8 6,0\" style=\"fill:none;stroke:#fff;stroke-width:2\"/></g><text class=\"small\" x=\"120.625\" y=\"182\" text-anchor=\"middle\">Honey</text><g transform=\"translate(199.375,70) scale(1.1)\"><ellipse class=\"part\" cx=\"0\" cy=\"0\" rx=\"17\" ry=\"12\" style=\"fill:#f7d417\"/><circle cx=\"-18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/><circle cx=\"18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/></g><text class=\"small\" x=\"199.375\" y=\"100\" text-anchor=\"middle\">Lemon</text><text class=\"label\" x=\"199.375\" y=\"120\" text-anchor=\"middle\">+</text><g transform=\"translate(199.375,150) scale(1.1)\"><path class=\"part\" d=\"M-20,4 C-12,-12 8,-12 20,-4 C14,0 10,2 6,0 C2,4 -4,4 -8,2 C-12,6 -16,6 -20,4 Z\" style=\"fill:#8b5a2b\"/></g><text class=\"small\" x=\"199.375\" y=\"182\" text-anchor=\"middle\">Imli</text><g transform=\"translate(278.125,70) scale(1.1)\"><ellipse class=\"part\" cx=\"0\" cy=\"0\" rx=\"22\" ry=\"8\" style=\"fill:#3a8d3a\"/><circle cx=\"-12\" cy=\"-2\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"-5\" cy=\"2\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"2\" cy=\"-3\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"9\" cy=\"1\" r=\"1.5\" style=\"fill:#bfe6a0\"/><circle cx=\"15\" cy=\"-1\" r=\"1.5\" style=\"fill:#bfe6a0\"/></g><text class=\"small\" x=\"278.125\" y=\"100\" text-anchor=\"middle\">Karela</text><text class=\"label\" x=\"278.125\" y=\"120\" text-anchor=\"middle\">+</text><g transform=\"translate(278.125,150) scale(1.1)\"><path class=\"part\" d=\"M-18,-2 L18,-2 Q16,16 0,16 Q-16,16 -18,-2 Z\" style=\"fill:#7fb3d5\"/><rect x=\"-12\" y=\"-9\" width=\"7\" height=\"7\" style=\"fill:#fff;stroke:#999;stroke-width:1\"/><rect x=\"-4\" y=\"-11\" width=\"7\" height=\"7\" style=\"fill:#fff;stroke:#999;stroke-width:1\"/><rect x=\"4\" y=\"-9\" width=\"7\" height=\"7\" style=\"fill:#fff;stroke:#999;stroke-width:1\"/></g><text class=\"small\" x=\"278.125\" y=\"182\" text-anchor=\"middle\">Sugar</text></svg>"}
  },
  {
    id: "g3-sci-senses-b-q18",
    prompt: "Why should we never look straight at the Sun?",
    options: [
      { id: "a", text: "It makes our ears hurt" },
      { id: "b", text: "It makes food taste bad" },
      { id: "c", text: "It makes our nose run" },
      { id: "d", text: "Its strong light can hurt our eyes" }
    ],
    answerId: "d",
    explanation: "The Sun is very bright. Its light can harm our eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q19",
    prompt: "Which sense helps you enjoy a bird's song?",
    options: [
      { id: "a", text: "Hearing" },
      { id: "b", text: "Taste" },
      { id: "c", text: "Touch" },
      { id: "d", text: "Smell" }
    ],
    answerId: "a",
    explanation: "We hear the bird sing with our ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q20",
    prompt: "Why should our hands be clean before we eat?",
    options: [
      { id: "a", text: "Clean hands smell like flowers" },
      { id: "b", text: "Dirty hands can carry germs into food" },
      { id: "c", text: "Clean hands help us hear" },
      { id: "d", text: "Dirty hands make food sweet" }
    ],
    answerId: "b",
    explanation: "Germs on dirty hands can go into our food and make us ill.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q21",
    prompt: "Which one organ tells you an ice cream is both cold and sweet?",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Tongue" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "b",
    explanation: "The tongue tastes sweet. It can also feel cold.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q22",
    prompt: "Seema closes her eyes. She is given these four things. Which one can she find by hearing?",
    options: [
      { id: "a", text: "The bell" },
      { id: "b", text: "The rose" },
      { id: "c", text: "The lemon" },
      { id: "d", text: "The soft toy" }
    ],
    answerId: "a",
    explanation: "A bell makes a sound when shaken. The rose, lemon and soft toy make no sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB22\"><title id=\"tB22\">Seema with eyes covered, and four things: A bell, B rose, C lemon, D soft toy</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB22\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><g transform=\"translate(160,40) scale(1.0)\"><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><rect x=\"-20\" y=\"-8\" width=\"40\" height=\"9\" rx=\"3\" style=\"fill:#2c3e50\"/><path d=\"M-6,9 Q0,13 6,9\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/></g><text class=\"small\" x=\"160\" y=\"74\" text-anchor=\"middle\">Seema (eyes closed)</text><rect x=\"10\" y=\"84\" width=\"70\" height=\"128\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"45\" y=\"102\" text-anchor=\"middle\">A</text><g transform=\"translate(45,140) scale(1.1)\"><path class=\"part\" d=\"M-16,12 Q-16,-14 0,-16 Q16,-14 16,12 Z\" style=\"fill:#f1c40f\"/><rect class=\"part\" x=\"-20\" y=\"12\" width=\"40\" height=\"5\" rx=\"2\" style=\"fill:#d4ac0d\"/><circle class=\"part\" cx=\"0\" cy=\"21\" r=\"4\" style=\"fill:#7d6608\"/><rect class=\"part\" x=\"-2\" y=\"-22\" width=\"4\" height=\"7\" style=\"fill:#7d6608\"/></g><text class=\"small\" x=\"45\" y=\"202\" text-anchor=\"middle\">Bell</text><rect x=\"87\" y=\"84\" width=\"70\" height=\"128\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"122\" y=\"102\" text-anchor=\"middle\">B</text><g transform=\"translate(122,128) scale(1.1)\"><line x1=\"0\" y1=\"8\" x2=\"0\" y2=\"40\" style=\"stroke:#2e7d32;stroke-width:3\"/><path class=\"part\" d=\"M0,26 Q12,18 16,26 Q8,32 0,26 Z\" style=\"fill:#4caf50\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"12\" style=\"fill:#e53950\"/><path d=\"M-5,0 Q0,-7 5,0 Q0,5 -2,0\" style=\"fill:none;stroke:#8e1b2b;stroke-width:1.5\"/></g><text class=\"small\" x=\"122\" y=\"202\" text-anchor=\"middle\">Rose</text><rect x=\"164\" y=\"84\" width=\"70\" height=\"128\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199\" y=\"102\" text-anchor=\"middle\">C</text><g transform=\"translate(199,140) scale(1.1)\"><ellipse class=\"part\" cx=\"0\" cy=\"0\" rx=\"17\" ry=\"12\" style=\"fill:#f7d417\"/><circle cx=\"-18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/><circle cx=\"18\" cy=\"0\" r=\"2\" style=\"fill:#d4b000\"/></g><text class=\"small\" x=\"199\" y=\"202\" text-anchor=\"middle\">Lemon</text><rect x=\"241\" y=\"84\" width=\"70\" height=\"128\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"276\" y=\"102\" text-anchor=\"middle\">D</text><g transform=\"translate(276,140) scale(1.1)\"><circle class=\"part\" cx=\"-10\" cy=\"-16\" r=\"6\" style=\"fill:#b5835a\"/><circle class=\"part\" cx=\"10\" cy=\"-16\" r=\"6\" style=\"fill:#b5835a\"/><circle class=\"part\" cx=\"0\" cy=\"-6\" r=\"12\" style=\"fill:#b5835a\"/><ellipse class=\"part\" cx=\"0\" cy=\"16\" rx=\"13\" ry=\"12\" style=\"fill:#b5835a\"/><circle cx=\"-4\" cy=\"-8\" r=\"1.6\" style=\"fill:#111\"/><circle cx=\"4\" cy=\"-8\" r=\"1.6\" style=\"fill:#111\"/></g><text class=\"small\" x=\"276\" y=\"202\" text-anchor=\"middle\">Soft toy</text></svg>"}
  },
  {
    id: "g3-sci-senses-b-q23",
    prompt: "Which organ tells us the colour, shape and size of a toy, all at once?",
    options: [
      { id: "a", text: "Nose" },
      { id: "b", text: "Tongue" },
      { id: "c", text: "Ears" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "d",
    explanation: "Our eyes see colour, shape and size together.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q24",
    prompt: "Which picture shows our senses keeping us safe?",
    options: [
      { id: "a", text: "Eating food that smells bad" },
      { id: "b", text: "Touching a hot iron" },
      { id: "c", text: "Smelling smoke and telling an adult" },
      { id: "d", text: "Playing music very loud" }
    ],
    answerId: "c",
    explanation: "Picture C: the nose smells smoke, and telling an adult keeps everyone safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"220\" viewBox=\"0 0 320 220\" role=\"img\" aria-labelledby=\"tB24\"><title id=\"tB24\">Four scenes: A eating bad-smelling food, B touching a hot iron, C smelling smoke and telling an adult, D very loud music</title><style>.part{fill:#fde2c4;stroke:#333;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:14px;font-weight:bold;fill:#222}.small{font-family:Arial,sans-serif;font-size:11px;fill:#222}.arrow{stroke:#c0392b;stroke-width:2.5;fill:none}</style><defs><marker id=\"ahB24\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#c0392b\"/></marker></defs><rect x=\"1\" y=\"1\" width=\"318\" height=\"218\" rx=\"10\" style=\"fill:#fffdf6;stroke:#bbb;stroke-width:1\"/><rect x=\"5\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"41.875\" y=\"23\" text-anchor=\"middle\">A</text><rect x=\"84\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"120.625\" y=\"23\" text-anchor=\"middle\">B</text><rect x=\"162\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"199.375\" y=\"23\" text-anchor=\"middle\">C</text><rect x=\"241\" y=\"5\" width=\"74\" height=\"210\" rx=\"8\" style=\"fill:#fff;stroke:#999;stroke-width:1.5\"/><text class=\"label\" x=\"278.125\" y=\"23\" text-anchor=\"middle\">D</text><g transform=\"translate(41.875,80) scale(0.9)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><ellipse cx=\"41.875\" cy=\"150\" rx=\"20\" ry=\"7\" style=\"fill:#fff;stroke:#333;stroke-width:1.5\"/><circle cx=\"41.875\" cy=\"145\" r=\"8\" style=\"fill:#7d8c3c\"/><path d=\"M33.875,135 q-4,-6 0,-12\" style=\"fill:none;stroke:#27ae60;stroke-width:2\"/><path d=\"M41.875,135 q-4,-6 0,-12\" style=\"fill:none;stroke:#27ae60;stroke-width:2\"/><path d=\"M49.875,135 q-4,-6 0,-12\" style=\"fill:none;stroke:#27ae60;stroke-width:2\"/><text class=\"small\" x=\"41.875\" y=\"195\" text-anchor=\"middle\">Bad food</text><g transform=\"translate(120.625,140) scale(1.0)\"><path class=\"part\" d=\"M-24,10 Q-22,-8 0,-10 L22,-10 L22,10 Z\" style=\"fill:#95a5a6\"/><path class=\"part\" d=\"M-6,-10 Q0,-22 18,-10\" style=\"fill:none\"/><rect x=\"-22\" y=\"10\" width=\"44\" height=\"4\" style=\"fill:#e74c3c\"/></g><g transform=\"translate(120.625,100) scale(1.0)\"><rect class=\"part\" x=\"-12\" y=\"-4\" width=\"24\" height=\"22\" rx=\"6\"/><rect class=\"part\" x=\"-12\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"-6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"0\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"6\" y=\"-20\" width=\"5\" height=\"18\" rx=\"2.5\"/><rect class=\"part\" x=\"10\" y=\"0\" width=\"5\" height=\"14\" rx=\"2.5\" transform=\"rotate(-35 12 6)\"/></g><path d=\"M104.625,125 q-3,-5 0,-10\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/><path d=\"M136.625,125 q-3,-5 0,-10\" style=\"fill:none;stroke:#e74c3c;stroke-width:2\"/><text class=\"small\" x=\"120.625\" y=\"195\" text-anchor=\"middle\">Hot iron</text><path d=\"M169.375,100 q-8,-10 0,-20 q8,-10 0,-20\" style=\"fill:none;stroke:#888;stroke-width:2.5;opacity:.8\"/><path d=\"M179.375,100 q-8,-10 0,-20 q8,-10 0,-20\" style=\"fill:none;stroke:#888;stroke-width:2.5;opacity:.8\"/><path d=\"M189.375,100 q-8,-10 0,-20 q8,-10 0,-20\" style=\"fill:none;stroke:#888;stroke-width:2.5;opacity:.8\"/><g transform=\"translate(185.375,130) scale(0.7)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#4a2c17\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><g transform=\"translate(217.375,120) scale(0.9)\"><rect class=\"part\" x=\"-14\" y=\"18\" width=\"28\" height=\"34\" rx=\"8\" style=\"fill:#5dade2\"/><circle class=\"part\" cx=\"0\" cy=\"0\" r=\"18\"/><path d=\"M-18,-4 Q-16,-22 0,-20 Q16,-22 18,-4 Q8,-14 -18,-4 Z\" style=\"fill:#7f8c8d\"/><circle cx=\"-6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><circle cx=\"6\" cy=\"-1\" r=\"2.2\" style=\"fill:#111\"/><path d=\"M-6,8 Q0,13 6,8\" style=\"fill:none;stroke:#333;stroke-width:1.8\"/></g><text class=\"small\" x=\"199.375\" y=\"195\" text-anchor=\"middle\">Tell an adult</text><g transform=\"translate(264.125,115) scale(0.8)\"><rect class=\"part\" x=\"-22\" y=\"-34\" width=\"44\" height=\"68\" rx=\"4\" style=\"fill:#34495e\"/><circle cx=\"0\" cy=\"-16\" r=\"9\" style=\"fill:#95a5a6;stroke:#222;stroke-width:2\"/><circle cx=\"0\" cy=\"12\" r=\"15\" style=\"fill:#95a5a6;stroke:#222;stroke-width:2\"/><circle cx=\"0\" cy=\"12\" r=\"5\" style=\"fill:#222\"/></g><path d=\"M284.125,107 Q292.125,115 284.125,123\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><path d=\"M293.125,101 Q301.125,115 293.125,129\" style=\"fill:none;stroke:#c0392b;stroke-width:2.5\"/><text class=\"small\" x=\"278.125\" y=\"195\" text-anchor=\"middle\">Very loud</text></svg>"}
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udc41\ufe0f",
    title: "Five senses",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "We learn about the world with five sense organs: eyes, ears, nose, tongue and skin.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Eyes", reveal: "Sight", emoji: "\ud83d\udc40" },
      { label: "Ears", reveal: "Hearing", emoji: "\ud83d\udc42" },
      { label: "Nose", reveal: "Smell", emoji: "\ud83d\udc43" },
      { label: "Tongue", reveal: "Taste", emoji: "\ud83d\udc45" },
      { label: "Skin", reveal: "Touch", emoji: "\u270b" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which sense organ helps you hear a bell?",
    options: [
        { id: "a", text: "Eyes" },
        { id: "b", text: "Ears" },
        { id: "c", text: "Nose" },
        { id: "d", text: "Tongue" }
    ],
    answerId: "b",
    why: "Ears are for hearing.",
    visual: "plant",
    speak: "Which sense organ helps you hear a bell?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Five senses", "Each organ has a job", "Keep senses safe", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g3ScienceSenses: ChapterDef = {
  id: "sense-organs",
  title: "Our Sense Organs",
  emoji: "\ud83d\udc41\ufe0f",
  blurb: "See, hear, smell, taste, touch",
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

export const g3ScienceSensesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
