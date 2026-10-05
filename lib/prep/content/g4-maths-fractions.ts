import type { ChapterDef, PrepQuestion } from "../types";

/** Fractions - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-fractions-a-q01",
    prompt: "Look at shapes A, B, C and D. Which shape is **NOT** cut into equal parts?",
    options: [
      { id: "a", text: "Shape A" },
      { id: "b", text: "Shape B" },
      { id: "c", text: "Shape C" },
      { id: "d", text: "Shape D" }
    ],
    answerId: "a",
    explanation: "The three strips in A are different widths, so they are not equal parts.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 296\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Equal parts or not?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"296\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Equal parts or not?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"34\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <rect class=\"part piece\" x=\"47.5\" y=\"74\" width=\"30\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"77.5\" y=\"74\" width=\"50\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"127.5\" y=\"74\" width=\"70\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"34\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <rect class=\"part piece\" x=\"319.5\" y=\"64\" width=\"38.0\" height=\"38.0\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"357.5\" y=\"64\" width=\"38.0\" height=\"38.0\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"319.5\" y=\"102.0\" width=\"38.0\" height=\"38.0\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"357.5\" y=\"102.0\" width=\"38.0\" height=\"38.0\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"10\" y=\"164\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"186\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <path class=\"part slice\" d=\"M 122.5 230.0 L 122.5 188.0 A 42 42 0 0 1 122.5 272.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 122.5 230.0 L 122.5 272.0 A 42 42 0 0 1 122.5 188.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"164\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"186\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <rect class=\"part piece\" x=\"282.5\" y=\"204\" width=\"50\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"332.5\" y=\"204\" width=\"50\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"382.5\" y=\"204\" width=\"50\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "Four boxes labelled A to D. A: a rectangle cut into 3 strips of different widths. B: a square cut into 4 equal smaller squares. C: a circle cut into 2 equal halves. D: a rectangle cut into 3 equal strips."}
  },
  {
    id: "g4-maths-fractions-a-q02",
    prompt: "In the fraction 3/4, what is the denominator?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "7" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "The denominator is the bottom number; it tells us the whole has 4 equal parts.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q03",
    prompt: "Look at shapes A, B, C and D. Which shape shows **1/4** shaded?",
    options: [
      { id: "a", text: "Shape A" },
      { id: "b", text: "Shape B" },
      { id: "c", text: "Shape C" },
      { id: "d", text: "Shape D" }
    ],
    answerId: "c",
    explanation: "C has 4 equal parts with 1 shaded. A shows 2/4, B shows 1/3, and D's parts are not equal.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 296\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Which shows 1/4 shaded?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"296\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which shows 1/4 shaded?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"34\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <path class=\"part slice shaded\" d=\"M 122.5 100.0 L 122.5 58.0 A 42 42 0 0 1 164.5 100.0 Z\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 122.5 100.0 L 164.5 100.0 A 42 42 0 0 1 122.5 142.0 Z\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 122.5 100.0 L 122.5 142.0 A 42 42 0 0 1 80.5 100.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 122.5 100.0 L 80.5 100.0 A 42 42 0 0 1 122.5 58.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"34\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <path class=\"part slice shaded\" d=\"M 357.5 100.0 L 357.5 58.0 A 42 42 0 0 1 393.87 121.0 Z\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 357.5 100.0 L 393.87 121.0 A 42 42 0 0 1 321.13 121.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 357.5 100.0 L 321.13 121.0 A 42 42 0 0 1 357.5 58.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"10\" y=\"164\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"186\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <path class=\"part slice\" d=\"M 122.5 230.0 L 122.5 188.0 A 42 42 0 0 1 164.5 230.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 122.5 230.0 L 164.5 230.0 A 42 42 0 0 1 122.5 272.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 122.5 230.0 L 122.5 272.0 A 42 42 0 0 1 80.5 230.0 Z\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 122.5 230.0 L 80.5 230.0 A 42 42 0 0 1 122.5 188.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"164\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"186\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <rect class=\"part piece shaded\" x=\"297.5\" y=\"194\" width=\"16\" height=\"80\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"313.5\" y=\"194\" width=\"24\" height=\"80\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"337.5\" y=\"194\" width=\"32\" height=\"80\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"369.5\" y=\"194\" width=\"48\" height=\"80\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "Four boxes labelled A to D. A: a circle in 4 equal parts with 2 shaded. B: a circle in 3 equal parts with 1 shaded. C: a circle in 4 equal parts with 1 shaded. D: a rectangle cut into 4 strips of different widths with the narrowest strip shaded."}
  },
  {
    id: "g4-maths-fractions-a-q04",
    prompt: "A cake is cut into 3 equal pieces and Ishaan eats 1 piece. What fraction of the cake did he eat?",
    options: [
      { id: "a", text: "3/1" },
      { id: "b", text: "1/2" },
      { id: "c", text: "1/3" },
      { id: "d", text: "2/3" }
    ],
    answerId: "c",
    explanation: "He ate 1 out of 3 equal pieces, which is 1/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q05",
    prompt: "Look at the Kites for Makar Sankranti. What fraction of the kites are coloured pink?",
    options: [
      { id: "a", text: "4/6" },
      { id: "b", text: "6/10" },
      { id: "c", text: "10/4" },
      { id: "d", text: "4/10" }
    ],
    answerId: "d",
    explanation: "4 of the 10 kites are pink, so the fraction is 4/10.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 188\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Kites for Makar Sankranti\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"188\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kites for Makar Sankranti</text>\n  <polygon class=\"part kite shaded\" points=\"80,42 94.0,62 80,86.0 66.0,62\" fill=\"#f48fb1\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"80\" y1=\"86.0\" x2=\"84\" y2=\"96.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite shaded\" points=\"150,42 164.0,62 150,86.0 136.0,62\" fill=\"#f48fb1\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"150\" y1=\"86.0\" x2=\"154\" y2=\"96.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite shaded\" points=\"220,42 234.0,62 220,86.0 206.0,62\" fill=\"#f48fb1\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"220\" y1=\"86.0\" x2=\"224\" y2=\"96.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite shaded\" points=\"290,42 304.0,62 290,86.0 276.0,62\" fill=\"#f48fb1\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"290\" y1=\"86.0\" x2=\"294\" y2=\"96.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite\" points=\"360,42 374.0,62 360,86.0 346.0,62\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"360\" y1=\"86.0\" x2=\"364\" y2=\"96.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite\" points=\"80,106 94.0,126 80,150.0 66.0,126\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"80\" y1=\"150.0\" x2=\"84\" y2=\"160.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite\" points=\"150,106 164.0,126 150,150.0 136.0,126\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"150\" y1=\"150.0\" x2=\"154\" y2=\"160.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite\" points=\"220,106 234.0,126 220,150.0 206.0,126\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"220\" y1=\"150.0\" x2=\"224\" y2=\"160.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite\" points=\"290,106 304.0,126 290,150.0 276.0,126\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"290\" y1=\"150.0\" x2=\"294\" y2=\"160.0\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part kite\" points=\"360,106 374.0,126 360,150.0 346.0,126\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><line class=\"part tail\" x1=\"360\" y1=\"150.0\" x2=\"364\" y2=\"160.0\" stroke=\"#666\" stroke-width=\"1\"/>\n</svg>", "alt": "Ten kites in two rows of five. The first 4 kites are coloured pink and the other 6 are white."}
  },
  {
    id: "g4-maths-fractions-a-q06",
    prompt: "Which of these is a unit fraction?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "2/5" },
      { id: "c", text: "5/1" },
      { id: "d", text: "3/4" }
    ],
    answerId: "a",
    explanation: "A unit fraction has 1 as its numerator, like 1/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q07",
    prompt: "Look at the number line. Which fraction does point **P** show?",
    options: [
      { id: "a", text: "3/4" },
      { id: "b", text: "1/3" },
      { id: "c", text: "3/5" },
      { id: "d", text: "2/5" }
    ],
    answerId: "c",
    explanation: "0 to 1 is cut into 5 equal parts, and P is 3 parts from 0, so P = 3/5.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Where is P?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Where is P?</text>\n  <line class=\"axis\" x1=\"40\" y1=\"82\" x2=\"400\" y2=\"82\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"tick\" x1=\"40.0\" y1=\"70\" x2=\"40.0\" y2=\"94\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"114\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"112.0\" y1=\"74\" x2=\"112.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"184.0\" y1=\"74\" x2=\"184.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"256.0\" y1=\"74\" x2=\"256.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"328.0\" y1=\"74\" x2=\"328.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"400.0\" y1=\"70\" x2=\"400.0\" y2=\"94\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"400.0\" y=\"114\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <circle class=\"part point\" cx=\"256.0\" cy=\"82\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"256.0\" y1=\"42\" x2=\"256.0\" y2=\"70\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"256.0,73 251.0,65 261.0,65\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"256.0\" y=\"38\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  <text class=\"label small\" x=\"220.0\" y=\"134\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The line from 0 to 1 is cut into equal parts.</text>\n</svg>", "alt": "A number line from 0 to 1 cut into 5 equal parts. Only 0 and 1 are labelled. Point P is on the third mark after 0."}
  },
  {
    id: "g4-maths-fractions-a-q08",
    prompt: "Look at the Chocolate Bar. What fraction of the bar is shaded?",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "3/8" },
      { id: "c", text: "5/8" },
      { id: "d", text: "8/3" }
    ],
    answerId: "b",
    explanation: "There are 8 equal pieces and 3 are shaded, so 3/8 is shaded.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Chocolate Bar\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Chocolate Bar</text>\n  <rect class=\"part piece shaded\" x=\"50\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"92.5\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"135.0\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"177.5\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"220.0\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"262.5\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"305.0\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"347.5\" y=\"50\" width=\"42.5\" height=\"60\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"220.0\" y=\"122\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All pieces are the same size.</text>\n</svg>", "alt": "A chocolate bar divided into 8 equal pieces. The first 3 pieces are shaded brown."}
  },
  {
    id: "g4-maths-fractions-a-q09",
    prompt: "What is 1/4 of 20?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "10" },
      { id: "c", text: "16" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Share 20 into 4 equal groups: each group has 20 \u00f7 4 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q10",
    prompt: "How many halves make one whole?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "1" },
      { id: "c", text: "4" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "Two halves, 1/2 + 1/2, make one whole.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q11",
    prompt: "Look at Bars 1, 2 and 3. Each bar has one part shaded. Which list puts the shaded fractions in order from **greatest to smallest**?",
    options: [
      { id: "a", text: "1/2, 1/3, 1/4" },
      { id: "b", text: "1/4, 1/3, 1/2" },
      { id: "c", text: "1/3, 1/2, 1/4" },
      { id: "d", text: "1/2, 1/4, 1/3" }
    ],
    answerId: "a",
    explanation: "Bar 2 is 1/2, Bar 3 is 1/3 and Bar 1 is 1/4. More parts means smaller pieces, so 1/2 > 1/3 > 1/4.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 238\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Same-size bars\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"238\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Same-size bars</text>\n  <text class=\"label option-label\" x=\"14\" y=\"66\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 1</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"40\" width=\"85.0\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"165.0\" y=\"40\" width=\"85.0\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"40\" width=\"85.0\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"335.0\" y=\"40\" width=\"85.0\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"122\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 2</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"96\" width=\"170.0\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"96\" width=\"170.0\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"178\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 3</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"152\" width=\"113.33\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"193.33\" y=\"152\" width=\"113.33\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"306.67\" y=\"152\" width=\"113.33\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"230.0\" y=\"228\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All three bars are the same size.</text>\n</svg>", "alt": "Three bars of the same length, one above another. Bar 1 is cut into 4 equal parts, Bar 2 into 2 equal parts and Bar 3 into 3 equal parts. Each bar has one part shaded."}
  },
  {
    id: "g4-maths-fractions-a-q12",
    prompt: "Look at Bar 1 and Bar 2. How many parts of **Bar 2** must be shaded so that it shows the same amount as Bar 1?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Bar 1 shows 1/2. Half of 8 equal parts is 4 parts, so 4/8 = 1/2.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 182\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Make them match\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"182\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Make them match</text>\n  <text class=\"label option-label\" x=\"14\" y=\"66\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 1</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"40\" width=\"170.0\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"40\" width=\"170.0\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"122\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 2</text>\n  <rect class=\"part piece\" x=\"80\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"122.5\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"165.0\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"207.5\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"292.5\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"335.0\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"377.5\" y=\"96\" width=\"42.5\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"230.0\" y=\"172\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Both bars are the same size.</text>\n</svg>", "alt": "Two bars of the same length. Bar 1 is cut into 2 equal parts with 1 shaded. Bar 2 is cut into 8 equal parts with none shaded."}
  },
  {
    id: "g4-maths-fractions-a-q13",
    prompt: "What is 3/4 of 16?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "13" },
      { id: "d", text: "12" }
    ],
    answerId: "d",
    explanation: "1/4 of 16 is 4, so 3/4 of 16 is 3 \u00d7 4 = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q14",
    prompt: "There are 30 children in a class. 1/3 of them like kabaddi the most. How many children like kabaddi the most?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "3" },
      { id: "c", text: "15" },
      { id: "d", text: "20" }
    ],
    answerId: "a",
    explanation: "1/3 of 30 is 30 \u00f7 3 = 10 children.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q15",
    prompt: "A roti is cut into 4 equal parts. Pooja eats 1 part. What fraction of the roti is left?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "3/4" },
      { id: "c", text: "4/3" },
      { id: "d", text: "1/3" }
    ],
    answerId: "b",
    explanation: "3 of the 4 equal parts are left, so 3/4 of the roti is left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q16",
    prompt: "Which picture does NOT show 1/4 shaded?",
    options: [
      { id: "a", text: "A circle cut into 4 equal slices with 1 slice shaded" },
      { id: "b", text: "A square cut into 4 equal small squares with 1 shaded" },
      { id: "c", text: "A rectangle cut into 4 strips of different widths with 1 strip shaded" },
      { id: "d", text: "A rectangle cut into 4 equal strips with 1 strip shaded" }
    ],
    answerId: "c",
    explanation: "Quarters must be equal parts; strips of different widths are not quarters.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q17",
    prompt: "Which is greater: 3/5 or 2/5 of the same chocolate bar?",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "2/5" },
      { id: "c", text: "Both are the same" },
      { id: "d", text: "We cannot tell" }
    ],
    answerId: "a",
    explanation: "The pieces are the same size (fifths), so 3 pieces are more than 2 pieces.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q18",
    prompt: "Look at the Pizza Party and its colour key. What fraction of the pizza is **not eaten**?",
    options: [
      { id: "a", text: "3/12" },
      { id: "b", text: "9/12" },
      { id: "c", text: "4/12" },
      { id: "d", text: "5/12" }
    ],
    answerId: "a",
    explanation: "4 + 3 + 2 = 9 of the 12 slices were eaten, so 12 \u2212 9 = 3 slices are left, which is 3/12.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Pizza Party\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Pizza Party</text>\n  <circle class=\"part crust\" cx=\"120\" cy=\"125\" r=\"92\" fill=\"#ffe0b2\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 120.0 41.0 A 84 84 0 0 1 162.0 52.25 Z\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 162.0 52.25 A 84 84 0 0 1 192.75 83.0 Z\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 192.75 83.0 A 84 84 0 0 1 204.0 125.0 Z\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 204.0 125.0 A 84 84 0 0 1 192.75 167.0 Z\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 192.75 167.0 A 84 84 0 0 1 162.0 197.75 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 162.0 197.75 A 84 84 0 0 1 120.0 209.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 120.0 209.0 A 84 84 0 0 1 78.0 197.75 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 78.0 197.75 A 84 84 0 0 1 47.25 167.0 Z\" fill=\"#ffe082\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 125 L 47.25 167.0 A 84 84 0 0 1 36.0 125.0 Z\" fill=\"#ffe082\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 120 125 L 36.0 125.0 A 84 84 0 0 1 47.25 83.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 120 125 L 47.25 83.0 A 84 84 0 0 1 78.0 52.25 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 120 125 L 78.0 52.25 A 84 84 0 0 1 120.0 41.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part legend-swatch\" x=\"250\" y=\"70\" width=\"24\" height=\"24\" rx=\"3\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"284\" y=\"87\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Ravi ate</text>\n  <rect class=\"part legend-swatch\" x=\"250\" y=\"106\" width=\"24\" height=\"24\" rx=\"3\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"284\" y=\"123\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Meena ate</text>\n  <rect class=\"part legend-swatch\" x=\"250\" y=\"142\" width=\"24\" height=\"24\" rx=\"3\" fill=\"#ffe082\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"284\" y=\"159\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Papa ate</text>\n  <rect class=\"part legend-swatch\" x=\"250\" y=\"178\" width=\"24\" height=\"24\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"284\" y=\"195\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Not eaten</text>\n</svg>", "alt": "A pizza cut into 12 equal slices. 4 slices are blue (Ravi ate), 3 are green (Meena ate), 2 are yellow (Papa ate) and 3 are white (not eaten). A colour key is on the right."}
  },
  {
    id: "g4-maths-fractions-a-q19",
    prompt: "Arjun gets \u20b940 as a gift. He spends 1/4 of it on a kite. How much does the kite cost?",
    options: [
      { id: "a", text: "\u20b94" },
      { id: "b", text: "\u20b930" },
      { id: "c", text: "\u20b910" },
      { id: "d", text: "\u20b920" }
    ],
    answerId: "c",
    explanation: "1/4 of \u20b940 is \u20b940 \u00f7 4 = \u20b910.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q20",
    prompt: "Mohan has 24 marbles. He gives 1/2 of them to his sister and 1/4 of them to his friend. How many marbles does Mohan have left?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "6" },
      { id: "c", text: "12" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "1/2 of 24 is 12 and 1/4 of 24 is 6, so 24 \u2212 12 \u2212 6 = 6 are left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q21",
    prompt: "1/3 of a number is 7. What is the number?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "3" },
      { id: "c", text: "14" },
      { id: "d", text: "21" }
    ],
    answerId: "d",
    explanation: "If one of 3 equal parts is 7, the whole is 3 \u00d7 7 = 21.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q22",
    prompt: "Look at Tanvi's Pencils. Tanvi gives **3/4** of her pencils to her friends and keeps the rest. How many pencils does she keep?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "8" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "Each group is 1/4 of the 16 pencils, which is 4 pencils. She gives away 3 groups (12) and keeps 1 group, so 4 pencils.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Tanvi's Pencils\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tanvi's Pencils</text>\n  <circle class=\"part group\" cx=\"65.6\" cy=\"86\" r=\"44\" fill=\"#e3f2fd\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <rect class=\"part pencil\" x=\"44.6\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"44.6,102 50.6,102 47.6,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"56.6\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"56.6,102 62.6,102 59.6,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"68.6\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"68.6,102 74.6,102 71.6,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"80.6\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"80.6,102 86.6,102 83.6,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"65.6\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 1</text>\n  <circle class=\"part group\" cx=\"175.2\" cy=\"86\" r=\"44\" fill=\"#e8f5e9\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <rect class=\"part pencil\" x=\"154.2\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"154.2,102 160.2,102 157.2,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"166.2\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"166.2,102 172.2,102 169.2,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"178.2\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"178.2,102 184.2,102 181.2,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"190.2\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"190.2,102 196.2,102 193.2,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"175.2\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 2</text>\n  <circle class=\"part group\" cx=\"284.8\" cy=\"86\" r=\"44\" fill=\"#fff8e1\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <rect class=\"part pencil\" x=\"263.8\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"263.8,102 269.8,102 266.8,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"275.8\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"275.8,102 281.8,102 278.8,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"287.8\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"287.8,102 293.8,102 290.8,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"299.8\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"299.8,102 305.8,102 302.8,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"284.8\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 3</text>\n  <circle class=\"part group\" cx=\"394.4\" cy=\"86\" r=\"44\" fill=\"#fce4ec\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <rect class=\"part pencil\" x=\"373.4\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"373.4,102 379.4,102 376.4,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"385.4\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"385.4,102 391.4,102 388.4,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"397.4\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"397.4,102 403.4,102 400.4,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part pencil\" x=\"409.4\" y=\"64\" width=\"6\" height=\"38\" rx=\"1\" fill=\"#ffd54f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <polygon class=\"part pencil-tip\" points=\"409.4,102 415.4,102 412.4,110\" fill=\"#8d6e63\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"394.4\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 4</text>\n  <text class=\"label small\" x=\"230.0\" y=\"166\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">16 pencils in 4 equal groups</text>\n</svg>", "alt": "Sixteen pencils arranged in 4 dashed rings labelled Group 1 to Group 4, with 4 pencils in each ring."}
  },
  {
    id: "g4-maths-fractions-a-q23",
    prompt: "A jug holds 1 and a half litres of lassi. How many quarter-litre glasses can it fill?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "1 litre fills 4 quarter-litre glasses and half a litre fills 2 more, so 4 + 2 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q24",
    prompt: "A box has 18 laddoos. 2/3 of them are besan laddoos and the rest are coconut laddoos. How many coconut laddoos are there?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "6" },
      { id: "c", text: "9" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "2/3 of 18 is 12 besan laddoos, so 18 \u2212 12 = 6 are coconut.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-fractions-b-q01",
    prompt: "Look at the number line. Which fraction does point **Q** show?",
    options: [
      { id: "a", text: "6/10" },
      { id: "b", text: "1/6" },
      { id: "c", text: "2/8" },
      { id: "d", text: "6/8" }
    ],
    answerId: "d",
    explanation: "0 to 1 is cut into 8 equal parts, and Q is 6 parts from 0, so Q = 6/8 (it is 2 marks after 1/2 = 4/8).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Where is Q?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Where is Q?</text>\n  <line class=\"axis\" x1=\"40\" y1=\"82\" x2=\"400\" y2=\"82\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"tick\" x1=\"40.0\" y1=\"70\" x2=\"40.0\" y2=\"94\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"114\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"85.0\" y1=\"74\" x2=\"85.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"130.0\" y1=\"74\" x2=\"130.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"175.0\" y1=\"74\" x2=\"175.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"220.0\" y1=\"74\" x2=\"220.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <g class=\"label fraction\"><text class=\"label numerator\" x=\"220.0\" y=\"104\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text><line class=\"fraction-bar\" x1=\"213.125\" y1=\"109\" x2=\"226.875\" y2=\"109\" stroke=\"#333\" stroke-width=\"1.5\"/><text class=\"label denominator\" x=\"220.0\" y=\"123\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text></g>\n  <line class=\"tick\" x1=\"265.0\" y1=\"74\" x2=\"265.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"310.0\" y1=\"74\" x2=\"310.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"355.0\" y1=\"74\" x2=\"355.0\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"400.0\" y1=\"70\" x2=\"400.0\" y2=\"94\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"400.0\" y=\"114\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <circle class=\"part point\" cx=\"310.0\" cy=\"82\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"310.0\" y1=\"42\" x2=\"310.0\" y2=\"70\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"310.0,73 305.0,65 315.0,65\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"310.0\" y=\"38\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Q</text>\n  <text class=\"label small\" x=\"220.0\" y=\"134\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The line from 0 to 1 is cut into equal parts.</text>\n</svg>", "alt": "A number line from 0 to 1 cut into 8 equal parts, with 0, one half and 1 labelled. Point Q is on the sixth mark after 0."}
  },
  {
    id: "g4-maths-fractions-b-q02",
    prompt: "In the fraction 2/5, what is the numerator?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "2" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "The numerator is the top number; it tells how many parts we take.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q03",
    prompt: "Look at bars A, B, C and D. Which bar shows **2/3** shaded?",
    options: [
      { id: "a", text: "Bar A" },
      { id: "b", text: "Bar B" },
      { id: "c", text: "Bar C" },
      { id: "d", text: "Bar D" }
    ],
    answerId: "a",
    explanation: "Bar A has 3 equal parts with 2 shaded. B shows 1/3, C shows 2/5, and D's parts are not equal.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 296\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Which shows 2/3 shaded?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"296\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which shows 2/3 shaded?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"34\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <rect class=\"part piece shaded\" x=\"47.5\" y=\"74\" width=\"50.0\" height=\"56\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"97.5\" y=\"74\" width=\"50.0\" height=\"56\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"147.5\" y=\"74\" width=\"50.0\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"34\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <rect class=\"part piece shaded\" x=\"282.5\" y=\"74\" width=\"50.0\" height=\"56\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"332.5\" y=\"74\" width=\"50.0\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"382.5\" y=\"74\" width=\"50.0\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"10\" y=\"164\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"186\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <rect class=\"part piece shaded\" x=\"47.5\" y=\"204\" width=\"30.0\" height=\"56\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"77.5\" y=\"204\" width=\"30.0\" height=\"56\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"107.5\" y=\"204\" width=\"30.0\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"137.5\" y=\"204\" width=\"30.0\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"167.5\" y=\"204\" width=\"30.0\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"164\" width=\"225\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"186\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <rect class=\"part piece shaded\" x=\"282.5\" y=\"204\" width=\"30\" height=\"56\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"312.5\" y=\"204\" width=\"40\" height=\"56\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"352.5\" y=\"204\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "Four boxes labelled A to D. A: a bar in 3 equal parts with 2 shaded. B: a bar in 3 equal parts with 1 shaded. C: a bar in 5 equal parts with 2 shaded. D: a bar in 3 parts of different sizes with the two smaller parts shaded."}
  },
  {
    id: "g4-maths-fractions-b-q04",
    prompt: "Look at the Orange Segments. What fraction of the orange is **NOT** shaded?",
    options: [
      { id: "a", text: "5/6" },
      { id: "b", text: "6/1" },
      { id: "c", text: "1/5" },
      { id: "d", text: "1/6" }
    ],
    answerId: "d",
    explanation: "1 of the 6 equal segments is white, so 1/6 is not shaded.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Orange Segments\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Orange Segments</text>\n  <circle class=\"part peel\" cx=\"220\" cy=\"110\" r=\"74\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path class=\"part slice shaded\" d=\"M 220 110 L 220.0 44.0 A 66 66 0 0 1 277.16 77.0 Z\" fill=\"#ffa726\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 110 L 277.16 77.0 A 66 66 0 0 1 277.16 143.0 Z\" fill=\"#ffa726\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 110 L 277.16 143.0 A 66 66 0 0 1 220.0 176.0 Z\" fill=\"#ffa726\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 110 L 220.0 176.0 A 66 66 0 0 1 162.84 143.0 Z\" fill=\"#ffa726\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 110 L 162.84 143.0 A 66 66 0 0 1 162.84 77.0 Z\" fill=\"#ffa726\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 220 110 L 162.84 77.0 A 66 66 0 0 1 220.0 44.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"220.0\" y=\"192\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All segments are the same size.</text>\n</svg>", "alt": "An orange cut into 6 equal segments. 5 segments are shaded orange and 1 is white."}
  },
  {
    id: "g4-maths-fractions-b-q05",
    prompt: "Look at the Marble Cups. 15 marbles are shared equally into Cup 1, Cup 2 and Cup 3. What is **1/3 of 15**?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "10" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "One cup is 1/3 of the marbles, and each cup holds 5, so 1/3 of 15 = 5.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Marble Cups\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Marble Cups</text>\n  <circle class=\"part group\" cx=\"93.0\" cy=\"86\" r=\"44\" fill=\"#e3f2fd\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part marble\" cx=\"93.0\" cy=\"62.0\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"115.83\" cy=\"78.58\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"107.11\" cy=\"105.42\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"78.89\" cy=\"105.42\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"70.17\" cy=\"78.58\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"93.0\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Cup 1</text>\n  <circle class=\"part group\" cx=\"230.0\" cy=\"86\" r=\"44\" fill=\"#e8f5e9\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part marble\" cx=\"230.0\" cy=\"62.0\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"252.83\" cy=\"78.58\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"244.11\" cy=\"105.42\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"215.89\" cy=\"105.42\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"207.17\" cy=\"78.58\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"230.0\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Cup 2</text>\n  <circle class=\"part group\" cx=\"367.0\" cy=\"86\" r=\"44\" fill=\"#fff8e1\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part marble\" cx=\"367.0\" cy=\"62.0\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"389.83\" cy=\"78.58\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"381.11\" cy=\"105.42\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"352.89\" cy=\"105.42\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part marble\" cx=\"344.17\" cy=\"78.58\" r=\"8\" fill=\"#4fc3f7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"367.0\" y=\"148\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Cup 3</text>\n  <text class=\"label small\" x=\"230.0\" y=\"166\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">15 marbles shared equally into 3 cups</text>\n</svg>", "alt": "Three dashed rings labelled Cup 1, Cup 2 and Cup 3, each holding 5 blue marbles."}
  },
  {
    id: "g4-maths-fractions-b-q06",
    prompt: "Which of these is NOT a unit fraction?",
    options: [
      { id: "a", text: "1/7" },
      { id: "b", text: "1/9" },
      { id: "c", text: "1/2" },
      { id: "d", text: "3/7" }
    ],
    answerId: "d",
    explanation: "A unit fraction must have 1 on top; 3/7 has 3 on top.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q07",
    prompt: "Look at Roti A and Roti B. They are the same size. Which sentence is true about the shaded pieces?",
    options: [
      { id: "a", text: "1/6 is bigger than 1/2." },
      { id: "b", text: "1/2 and 1/6 are the same size." },
      { id: "c", text: "1/2 is bigger than 1/6." },
      { id: "d", text: "1/6 is exactly half of 1/2." }
    ],
    answerId: "c",
    explanation: "Roti B is cut into more pieces, so each piece is smaller: 1/2 > 1/6. (1/6 is one-third of 1/2, not half.)",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two Same-Size Rotis\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Two Same-Size Rotis</text>\n  <circle class=\"part roti\" cx=\"120\" cy=\"110\" r=\"70\" fill=\"#ffe0b2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <path class=\"part slice shaded\" d=\"M 120 110 L 120.0 46.0 A 64 64 0 0 1 120.0 174.0 Z\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 120 110 L 120.0 174.0 A 64 64 0 0 1 120.0 46.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part roti\" cx=\"320\" cy=\"110\" r=\"70\" fill=\"#ffe0b2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <path class=\"part slice shaded\" d=\"M 320 110 L 320.0 46.0 A 64 64 0 0 1 375.43 78.0 Z\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 320 110 L 375.43 78.0 A 64 64 0 0 1 375.43 142.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 320 110 L 375.43 142.0 A 64 64 0 0 1 320.0 174.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 320 110 L 320.0 174.0 A 64 64 0 0 1 264.57 142.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 320 110 L 264.57 142.0 A 64 64 0 0 1 264.57 78.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 320 110 L 264.57 78.0 A 64 64 0 0 1 320.0 46.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"120\" y=\"200\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Roti A</text>\n  <text class=\"label option-label\" x=\"320\" y=\"200\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Roti B</text>\n  <text class=\"label small\" x=\"220.0\" y=\"222\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each roti has 1 piece shaded.</text>\n</svg>", "alt": "Two rotis of the same size. Roti A is cut into 2 equal pieces with 1 shaded. Roti B is cut into 6 equal pieces with 1 shaded."}
  },
  {
    id: "g4-maths-fractions-b-q08",
    prompt: "A ribbon is cut into 2 equal pieces. What fraction of the ribbon is one piece?",
    options: [
      { id: "a", text: "2/1" },
      { id: "b", text: "1/3" },
      { id: "c", text: "1/2" },
      { id: "d", text: "1/4" }
    ],
    answerId: "c",
    explanation: "2 equal pieces means each piece is one half, written 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q09",
    prompt: "What is 1/4 of 12?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "Share 12 into 4 equal groups: each group has 12 \u00f7 4 = 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q10",
    prompt: "How many quarters make one whole?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "1" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "Four quarters, 1/4 + 1/4 + 1/4 + 1/4, make one whole.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q11",
    prompt: "Which list goes from smallest to greatest?",
    options: [
      { id: "a", text: "1/6, 1/4, 1/2" },
      { id: "b", text: "1/2, 1/4, 1/6" },
      { id: "c", text: "1/4, 1/6, 1/2" },
      { id: "d", text: "1/6, 1/2, 1/4" }
    ],
    answerId: "a",
    explanation: "More parts means smaller pieces, so 1/6 < 1/4 < 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q12",
    prompt: "Look at Bar 1 and Bar 2. The shaded parts line up exactly. Which fraction is **equal to 1/3**?",
    options: [
      { id: "a", text: "2/6" },
      { id: "b", text: "1/6" },
      { id: "c", text: "2/3" },
      { id: "d", text: "3/6" }
    ],
    answerId: "a",
    explanation: "The 2 shaded sixths in Bar 2 cover the same length as 1 shaded third in Bar 1, so 2/6 = 1/3.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 182\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Compare the shaded parts\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"182\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Compare the shaded parts</text>\n  <text class=\"label option-label\" x=\"14\" y=\"66\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 1</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"40\" width=\"113.33\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"193.33\" y=\"40\" width=\"113.33\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"306.67\" y=\"40\" width=\"113.33\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"122\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 2</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"96\" width=\"56.67\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"136.67\" y=\"96\" width=\"56.67\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"193.33\" y=\"96\" width=\"56.67\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"96\" width=\"56.67\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"306.67\" y=\"96\" width=\"56.67\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"363.33\" y=\"96\" width=\"56.67\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"230.0\" y=\"172\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Both bars are the same size.</text>\n</svg>", "alt": "Two bars of the same length. Bar 1 is cut into 3 equal parts with 1 shaded. Bar 2 is cut into 6 equal parts with 2 shaded, and the shaded parts line up exactly."}
  },
  {
    id: "g4-maths-fractions-b-q13",
    prompt: "What is 2/3 of 15?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "5" },
      { id: "c", text: "13" },
      { id: "d", text: "30" }
    ],
    answerId: "a",
    explanation: "1/3 of 15 is 5, so 2/3 of 15 is 2 \u00d7 5 = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q14",
    prompt: "There are 40 students in Class 4. 1/4 of them come to school by bus. How many students come by bus?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "30" },
      { id: "c", text: "36" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "1/4 of 40 is 40 \u00f7 4 = 10 students.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q15",
    prompt: "Look at the Two Chocolate Bars. The shaded parts were eaten. How much **more** of Bar Q was eaten than Bar P?",
    options: [
      { id: "a", text: "7/7" },
      { id: "b", text: "3/14" },
      { id: "c", text: "3/7" },
      { id: "d", text: "2/7" }
    ],
    answerId: "c",
    explanation: "Bar Q: 5/7 eaten. Bar P: 2/7 eaten. 5/7 \u2212 2/7 = 3/7.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 182\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two Chocolate Bars\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"182\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Two Chocolate Bars</text>\n  <text class=\"label option-label\" x=\"14\" y=\"66\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar P</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"40\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"128.57\" y=\"40\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"177.14\" y=\"40\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"225.71\" y=\"40\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"274.29\" y=\"40\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"322.86\" y=\"40\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"371.43\" y=\"40\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"122\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar Q</text>\n  <rect class=\"part piece shaded\" x=\"80\" y=\"96\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"128.57\" y=\"96\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"177.14\" y=\"96\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"225.71\" y=\"96\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"274.29\" y=\"96\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"322.86\" y=\"96\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"371.43\" y=\"96\" width=\"48.57\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"230.0\" y=\"172\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Both bars are the same size. Shaded = eaten.</text>\n</svg>", "alt": "Two same-size chocolate bars, each in 7 equal pieces. Bar P has 2 pieces shaded and Bar Q has 5 pieces shaded."}
  },
  {
    id: "g4-maths-fractions-b-q16",
    prompt: "Rahul cuts a paper into 3 parts: one big part and two small parts. He shades the big part and says, \"I shaded 1/3.\" Is he right?",
    options: [
      { id: "a", text: "Yes, because 1 of the 3 parts is shaded" },
      { id: "b", text: "No, because the 3 parts are not equal" },
      { id: "c", text: "Yes, because the big part is always a third" },
      { id: "d", text: "No, because he should shade all 3 parts" }
    ],
    answerId: "b",
    explanation: "Thirds must be 3 EQUAL parts, so his big part is not 1/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q17",
    prompt: "Which list goes from smallest to greatest?",
    options: [
      { id: "a", text: "6/7, 3/7, 1/7" },
      { id: "b", text: "3/7, 1/7, 6/7" },
      { id: "c", text: "1/7, 3/7, 6/7" },
      { id: "d", text: "1/7, 6/7, 3/7" }
    ],
    answerId: "c",
    explanation: "All pieces are sevenths, so fewer pieces means less: 1 < 3 < 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q18",
    prompt: "A cake is cut into 6 equal pieces. 5 pieces are on the plate and 2 pieces are eaten. What fraction of the cake is still on the plate?",
    options: [
      { id: "a", text: "3/6" },
      { id: "b", text: "7/6" },
      { id: "c", text: "3/12" },
      { id: "d", text: "2/6" }
    ],
    answerId: "a",
    explanation: "5 sixths \u2212 2 sixths = 3 sixths; the piece size stays a sixth, so the answer is 3/6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q19",
    prompt: "Mummy has \u20b960. She spends 1/3 of it on vegetables. How much does she spend on vegetables?",
    options: [
      { id: "a", text: "\u20b93" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b930" },
      { id: "d", text: "\u20b940" }
    ],
    answerId: "b",
    explanation: "1/3 of \u20b960 is \u20b960 \u00f7 3 = \u20b920.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q20",
    prompt: "There are 36 children in a park. 1/2 of them play cricket, 1/3 of them play football and the rest play kho-kho. How many children play kho-kho?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "12" },
      { id: "c", text: "9" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "Cricket: 18, football: 12, so kho-kho: 36 \u2212 18 \u2212 12 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q21",
    prompt: "Look at Kabir's Sticker Album. 1/3 of his stickers is 6. How many stickers does he have **in all**?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "18" },
      { id: "c", text: "2" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "There are 3 equal parts and each part is 6, so 3 \u00d7 6 = 18 stickers.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Kabir's Sticker Album\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kabir's Sticker Album</text>\n  <rect class=\"part piece shaded\" x=\"40.0\" y=\"70\" width=\"126.67\" height=\"44\" rx=\"0\" fill=\"#ffe082\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"103.33\" y=\"98\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part piece\" x=\"166.67\" y=\"70\" width=\"126.67\" height=\"44\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"293.33\" y=\"70\" width=\"126.67\" height=\"44\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"arrow bracket\" d=\"M 40 62 L 40 52 L 420 52 L 420 62\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"230.0\" y=\"46\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">? stickers in all</text>\n  <path class=\"arrow bracket\" d=\"M 40.0 122 L 40.0 132 L 166.67 132 L 166.67 122\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"103.33\" y=\"150\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">1/3 of the stickers</text>\n  <text class=\"label small\" x=\"230.0\" y=\"164\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The tape is cut into 3 equal parts.</text>\n</svg>", "alt": "A tape cut into 3 equal parts under a bracket labelled '? stickers in all'. The first part is shaded and shows 6, with a bracket underneath labelled '1/3 of the stickers'."}
  },
  {
    id: "g4-maths-fractions-b-q22",
    prompt: "Which share gives the MOST rotis?",
    options: [
      { id: "a", text: "1/4 of 20 rotis" },
      { id: "b", text: "1/2 of 8 rotis" },
      { id: "c", text: "1/3 of 9 rotis" },
      { id: "d", text: "All the shares are equal" }
    ],
    answerId: "a",
    explanation: "1/2 of 8 is 4, 1/3 of 9 is 3, and 1/4 of 20 is 5, so 1/4 of 20 is the most.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q23",
    prompt: "Look at Simran's Pocket Money. She spends 1/4 on a kite and 2/4 on a book. How much money is in the part with the **?**",
    options: [
      { id: "a", text: "\u20b912" },
      { id: "b", text: "\u20b924" },
      { id: "c", text: "\u20b936" },
      { id: "d", text: "\u20b916" }
    ],
    answerId: "a",
    explanation: "Each quarter of \u20b948 is \u20b948 \u00f7 4 = \u20b912. The ? is 1 part, so \u20b912 is left.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Simran's Pocket Money\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Simran's Pocket Money</text>\n  <rect class=\"part piece shaded\" x=\"40.0\" y=\"70\" width=\"95.0\" height=\"44\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"87.5\" y=\"98\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kite</text>\n  <rect class=\"part piece shaded\" x=\"135.0\" y=\"70\" width=\"95.0\" height=\"44\" rx=\"0\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"182.5\" y=\"98\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Book</text>\n  <rect class=\"part piece shaded\" x=\"230.0\" y=\"70\" width=\"95.0\" height=\"44\" rx=\"0\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"277.5\" y=\"98\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Book</text>\n  <rect class=\"part piece\" x=\"325.0\" y=\"70\" width=\"95.0\" height=\"44\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"372.5\" y=\"98\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <path class=\"arrow bracket\" d=\"M 40 62 L 40 52 L 420 52 L 420 62\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"230.0\" y=\"46\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b948 pocket money</text>\n  <text class=\"label small\" x=\"230.0\" y=\"164\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The tape is cut into 4 equal parts.</text>\n</svg>", "alt": "A tape labelled \u20b948 pocket money, cut into 4 equal parts. Part 1 is labelled Kite, parts 2 and 3 are labelled Book, and part 4 shows a question mark."}
  },
  {
    id: "g4-maths-fractions-b-q24",
    prompt: "A school garden has 20 flowers. 3/4 of them are marigolds. How many flowers are NOT marigolds?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "3" },
      { id: "c", text: "16" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "3/4 of 20 is 15 marigolds, so 20 \u2212 15 = 5 are not marigolds.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🫓",
    title: "Equal parts",
    body: [
      "A fraction is a part of a whole — but the parts must be equal!",
      "Two equal pieces? Each one is a half.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's share!",
    visual: "fraction-bar",
    speak: "A fraction is a part of a whole. But the parts must be equal! Two equal pieces? Each one is a half.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Halves, quarters, thirds",
    lead: "Tap each card.",
    visual: "fraction-bar",
    speak: "Fold a paper in half, then fold it again. Now you have four equal quarters. Two quarters make one half. Three equal parts are called thirds.",
    cards: [
      { label: "Half (1/2)", reveal: "2 equal parts — take 1", emoji: "🌓" },
      { label: "Quarter (1/4)", reveal: "4 equal parts; 2 quarters = 1 half", emoji: "🍕" },
      { label: "Third (1/3)", reveal: "3 equal parts — take 1", emoji: "🍰" },
      { label: "Three-quarters (3/4)", reveal: "Shade 3 of 4 equal parts", emoji: "🟧" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Top and bottom",
    visual: "fraction-bar",
    speak: "The bottom number, the denominator, tells how many equal parts. The top number, the numerator, tells how many parts we take. A unit fraction has one on top. More parts means smaller pieces, so one half is bigger than one third.",
    steps: [
      "2/5: denominator 5 = equal parts in the whole",
      "2/5: numerator 2 = parts we take",
      "Unit fractions: 1/2 > 1/3 > 1/5 (more parts → smaller pieces)",
      "Same-size pieces: 5/6 > 2/6 (more pieces → more)",
    ],
    punchline: "Bottom = equal parts · Top = parts taken",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Which is bigger, 1/3 or 1/5?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "1/5" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" },
    ],
    answerId: "a",
    why: "Cutting into 3 parts makes bigger pieces than cutting into 5 parts.",
    visual: "fraction-bar",
    speak: "Which is bigger, one third or one fifth?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Fraction of a group",
    visual: "fraction-bar",
    speak: "To find half of twelve, share twelve into two equal groups. Each group has six. In a story, find the whole first, then find the part. Three-quarters of sixteen is twelve.",
    steps: [
      "1/2 of 12 → 12 ÷ 2 = 6",
      "1/4 of 20 → 20 ÷ 4 = 5",
      "3/4 of 16 → 16 ÷ 4 = 4, then 4 × 3 = 12",
      "Story: find the whole first, then the part",
    ],
    punchline: "Divide by the bottom, multiply by the top.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "fraction-bar",
    speak: "One third of a class of twenty-four children wear glasses. How many children wear glasses?",
    question: {
      id: "g4-frac-check",
      prompt: "1/3 of a class of 24 children wear glasses. How many wear glasses?",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "8" },
        { id: "c", text: "12" },
        { id: "d", text: "3" },
      ],
      answerId: "b",
      explanation: "24 ÷ 3 = 8 children.",
      hints: ["The whole is 24.", "Share 24 into 3 equal groups."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Fraction friend!",
    bullets: [
      "Parts must be equal",
      "Bottom = equal parts; top = parts taken",
      "Unit fractions: more parts → smaller pieces",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can name, compare and find fractions. Set A and Set B are ready.",
  },
];

export const g4MathsFractions: ChapterDef = {
  id: "g4-fractions",
  title: "Fractions",
  emoji: "\ud83c\udf55",
  blurb: "Halves, quarters, compare & fraction of a group",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "fractions",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "fractions",
      questions: SET_B,
    },
  ],
  paperTopics: ["fractions", "multiply-basics"],
};

export const g4MathsFractionsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
