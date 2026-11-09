import type { PrepQuestion } from "../types";

/** Rational Numbers (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g8MathsRationalsAchievers: PrepQuestion[] = [
  {
    id: "g8-maths-ch01-ach-x-01",
    prompt: "Pranit marks two points, P and Q, on the number line shown, where every whole-number gap is cut into equal small steps. What is P \u00f7 Q?",
    options: [
      { id: "a", text: "\u22123/5" },
      { id: "b", text: "\u22125/3" },
      { id: "c", text: "5/3" },
      { id: "d", text: "\u221215/16" }
    ],
    answerId: "b",
    explanation: "Each whole-number gap has 4 equal steps, so each step is 1/4. P is 5 steps to the left of 0, so P = \u22125/4; Q is 3 steps to the right of 0, so Q = 3/4. Then P \u00f7 Q = (\u22125/4) \u00d7 (4/3) = \u22125/3. Choosing \u22123/5 is tempting because it works out Q \u00f7 P, but division is not commutative: the number before the \u00f7 sign, P, must be divided by Q.",
    hints: ["Count the small steps in one whole-number gap of Pranit's line to find each step's size, then read P and Q before dividing."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 600 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number line from minus 2 to 1 with each unit cut into four equal steps; P is five steps left of 0 and Q is three steps right of 0\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"600\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"300.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Pranit's number line</text>\n  <line class=\"part axis\" x1=\"25\" y1=\"90\" x2=\"575\" y2=\"90\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <polyline class=\"part arrow-head\" points=\"570,84.4 578,90 570,95.6\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"30,84.4 22,90 30,95.6\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick major\" x1=\"50\" y1=\"78\" x2=\"50\" y2=\"102\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"50\" y=\"124\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u22122</text>\n  <line class=\"part tick minor\" x1=\"91.67\" y1=\"83\" x2=\"91.67\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick minor\" x1=\"133.33\" y1=\"83\" x2=\"133.33\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick minor\" x1=\"175\" y1=\"83\" x2=\"175\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick major\" x1=\"216.67\" y1=\"78\" x2=\"216.67\" y2=\"102\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"216.67\" y=\"124\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u22121</text>\n  <line class=\"part tick minor\" x1=\"258.33\" y1=\"83\" x2=\"258.33\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick minor\" x1=\"300\" y1=\"83\" x2=\"300\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick minor\" x1=\"341.67\" y1=\"83\" x2=\"341.67\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick major\" x1=\"383.33\" y1=\"78\" x2=\"383.33\" y2=\"102\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"383.33\" y=\"124\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">0</text>\n  <line class=\"part tick minor\" x1=\"425\" y1=\"83\" x2=\"425\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick minor\" x1=\"466.67\" y1=\"83\" x2=\"466.67\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick minor\" x1=\"508.33\" y1=\"83\" x2=\"508.33\" y2=\"97\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick major\" x1=\"550\" y1=\"78\" x2=\"550\" y2=\"102\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"550\" y=\"124\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1</text>\n  <circle class=\"part point-dot\" cx=\"175\" cy=\"90\" r=\"6\" fill=\"#c62828\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <text class=\"label point-name\" x=\"175\" y=\"68\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">P</text>\n  <circle class=\"part point-dot\" cx=\"508.33\" cy=\"90\" r=\"6\" fill=\"#c62828\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <text class=\"label point-name\" x=\"508.33\" y=\"68\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">Q</text>\n</svg>", "alt": "A number line labelled \u22122, \u22121, 0 and 1, with three small ticks between each pair of whole numbers. Point P is on the first small tick to the left of \u22121. Point Q is on the third small tick to the right of 0."}
  },
  {
    id: "g8-maths-ch01-ach-x-02",
    prompt: "At a khadi shop in Jaipur, Mihika pays \u20b9363 for 2 3/4 m of cloth. At the same rate, how much would 1 1/3 m of the same cloth cost?",
    options: [
      { id: "a", text: "\u20b9484" },
      { id: "b", text: "\u20b9132" },
      { id: "c", text: "\u20b9198" },
      { id: "d", text: "\u20b9176" }
    ],
    answerId: "d",
    explanation: "One metre costs 363 \u00f7 2 3/4 = 363 \u00d7 4/11 = \u20b9132. So 1 1/3 m costs 132 \u00d7 4/3 = \u20b9176. \u20b9484 is tempting because it works out 363 \u00d7 4/3, scaling the whole bill by 1 1/3 as if \u20b9363 were the price of one metre, but \u20b9363 paid for 2 3/4 m.",
    hints: ["First find what one metre of Mihika's cloth costs by dividing by the mixed number, then work out the shorter length."]
  },
  {
    id: "g8-maths-ch01-ach-x-03",
    prompt: "Vritika's number machine does the three steps shown, from left to right, to whatever number goes in. The number that came out is shown at the end. What number did she put in?",
    options: [
      { id: "a", text: "4/3" },
      { id: "b", text: "8/9" },
      { id: "c", text: "\u22124/3" },
      { id: "d", text: "2/3" }
    ],
    answerId: "a",
    explanation: "Undo the steps from the end, using the opposite operations. Undo \u00f7 (\u22121/2): 1/3 \u00d7 (\u22121/2) = \u22121/6. Undo + 5/6: \u22121/6 \u2212 5/6 = \u22121. Undo \u00d7 (\u22123/4): \u22121 \u00f7 (\u22123/4) = 4/3. Check: 4/3 \u00d7 (\u22123/4) = \u22121, \u22121 + 5/6 = \u22121/6, and \u22121/6 \u00f7 (\u22121/2) = 1/3. 8/9 is tempting because it drops the minus sign when undoing the last step (1/3 \u00d7 1/2 = 1/6), but dividing by \u22121/2 changes the sign, so undoing it must change the sign back.",
    hints: ["Start from the number that came out of Vritika's machine and undo each step in reverse order, keeping track of every sign."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 684 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number machine: IN is a question mark, then times minus three quarters, then plus five sixths, then divided by minus one half, and OUT is one third\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"684\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"342.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Vritika's number machine</text>\n  <rect class=\"part card op-box\" x=\"20\" y=\"62\" width=\"100\" height=\"56\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label op-text\" x=\"70\" y=\"96\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">?</text>\n  <text class=\"label io-name\" x=\"70\" y=\"52\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">IN</text>\n  <line class=\"part flow\" x1=\"124\" y1=\"90\" x2=\"152\" y2=\"90\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"145,85.1 152,90 145,94.9\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <rect class=\"part card op-box\" x=\"156\" y=\"62\" width=\"100\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label op-text\" x=\"206\" y=\"96\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u00d7 (\u22123/4)</text>\n  <line class=\"part flow\" x1=\"260\" y1=\"90\" x2=\"288\" y2=\"90\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"281,85.1 288,90 281,94.9\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <rect class=\"part card op-box\" x=\"292\" y=\"62\" width=\"100\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label op-text\" x=\"342\" y=\"96\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">+ 5/6</text>\n  <line class=\"part flow\" x1=\"396\" y1=\"90\" x2=\"424\" y2=\"90\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"417,85.1 424,90 417,94.9\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <rect class=\"part card op-box\" x=\"428\" y=\"62\" width=\"100\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label op-text\" x=\"478\" y=\"96\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u00f7 (\u22121/2)</text>\n  <line class=\"part flow\" x1=\"532\" y1=\"90\" x2=\"560\" y2=\"90\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"553,85.1 560,90 553,94.9\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <rect class=\"part card op-box\" x=\"564\" y=\"62\" width=\"100\" height=\"56\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label op-text\" x=\"614\" y=\"96\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1/3</text>\n  <text class=\"label io-name\" x=\"614\" y=\"52\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">OUT</text>\n</svg>", "alt": "Five boxes joined by arrows from left to right: IN ?, then \u00d7 (\u22123/4), then + 5/6, then \u00f7 (\u22121/2), then OUT 1/3."}
  },
  {
    id: "g8-maths-ch01-ach-x-04",
    prompt: "The average of the four fractions on Aadvik's slate is \u22121/8. Three of them are 7/10, \u221211/10 and 1/5. Which fraction is missing?",
    options: [
      { id: "a", text: "3/40" },
      { id: "b", text: "3/10" },
      { id: "c", text: "\u22123/10" },
      { id: "d", text: "\u22127/10" }
    ],
    answerId: "c",
    explanation: "An average of \u22121/8 for four fractions means they add up to 4 \u00d7 (\u22121/8) = \u22121/2. The three known fractions add up to 7/10 \u2212 11/10 + 2/10 = \u22122/10 = \u22121/5. So the missing fraction is \u22121/2 \u2212 (\u22121/5) = \u22125/10 + 2/10 = \u22123/10. 3/40 is tempting because it works out \u22121/8 \u2212 (\u22121/5), using the average as if it were the total, but the average must first be multiplied by 4 to give the sum of all four fractions.",
    hints: ["Turn the average of Aadvik's fractions into their total first, then take away the fractions you already know."]
  },
  {
    id: "g8-maths-ch01-ach-x-05",
    prompt: "Gauransh writes a list of numbers. The first number is 27/8, and each number after that is the one before it multiplied by \u22122/3. What is the fifth number in his list?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "\u22122/3" },
      { id: "d", text: "\u22124/9" }
    ],
    answerId: "a",
    explanation: "Multiply by \u22122/3 again and again: 27/8, then \u22129/4, then 3/2, then \u22121, then 2/3. The fifth number is 2/3 (four multiplications by \u22122/3 give a positive result). Choosing \u22121 is tempting because it is the fourth number in the list, reached after only three multiplications; the first number is already in the list, so the fifth number needs four.",
    hints: ["Gauransh's list starts at 27/8; keep multiplying by the same fraction and count carefully which place in the list you have reached."]
  }
];
