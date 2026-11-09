import type { PrepQuestion } from "../types";

/** Number Systems (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g9MathsNumberSystemsAchievers: PrepQuestion[] = [
  {
    id: "g9-maths-ch01-ach-x-01",
    prompt: "Lakshay draws a rectangle standing on the number line and swings an arc from one of its corners, as shown, to mark the point P. Which number does P stand for?",
    options: [
      { id: "a", text: "\u221a5" },
      { id: "b", text: "2 + \u221a5" },
      { id: "c", text: "1 + \u221a5" },
      { id: "d", text: "\u221a6" }
    ],
    answerId: "c",
    explanation: "The rectangle is 2 units wide and 1 unit tall, and its bottom-left corner is at 1. Its diagonal is \u221a(2\u00b2 + 1\u00b2) = \u221a5 long. The arc is centred at that corner, so it keeps this length and lands \u221a5 to the right of 1: P = 1 + \u221a5 (about 3.24). Choosing \u221a5 is tempting because it is the length of the diagonal, but the arc starts at 1, not at 0.",
    hints: ["The arc in Lakshay's figure keeps the diagonal's length; find that length, then notice where on the line the arc is centred."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number line from minus 1 to 4; a rectangle 2 units wide and 1 unit tall stands on it from 1 to 3; an arc centred at 1 swings from the rectangle's top-right corner down to the point P on the line\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Lakshay's number line</text>\n  <line class=\"part axis\" x1=\"35\" y1=\"170\" x2=\"485\" y2=\"170\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <polyline class=\"part arrow-head\" points=\"480,164.4 488,170 480,175.6\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"40,164.4 32,170 40,175.6\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"60\" y1=\"160\" x2=\"60\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-label\" x=\"60\" y=\"202\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u22121</text>\n  <line class=\"part tick\" x1=\"140\" y1=\"160\" x2=\"140\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-label\" x=\"140\" y=\"202\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">0</text>\n  <line class=\"part tick\" x1=\"220\" y1=\"160\" x2=\"220\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-label\" x=\"220\" y=\"202\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1</text>\n  <line class=\"part tick\" x1=\"300\" y1=\"160\" x2=\"300\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-label\" x=\"300\" y=\"202\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2</text>\n  <line class=\"part tick\" x1=\"380\" y1=\"160\" x2=\"380\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-label\" x=\"380\" y=\"202\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">3</text>\n  <line class=\"part tick\" x1=\"460\" y1=\"160\" x2=\"460\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-label\" x=\"460\" y=\"202\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4</text>\n  <rect class=\"part box\" x=\"220\" y=\"90\" width=\"160\" height=\"80\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#1565c0\" stroke-width=\"2.5\"/>\n  <line class=\"part diag\" x1=\"220\" y1=\"170\" x2=\"380\" y2=\"90\" stroke=\"#c62828\" stroke-width=\"2.5\"/>\n  <path class=\"part swing\" d=\"M 380 90 A 178.89 178.89 0 0 1 398.89 170\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  <circle class=\"part point-dot\" cx=\"398.89\" cy=\"170\" r=\"6\" fill=\"#6a1b9a\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n  <text class=\"label point-name\" x=\"402.89\" y=\"156\" font-size=\"17\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#6a1b9a\">P</text>\n</svg>", "alt": "A number line marked \u22121, 0, 1, 2, 3 and 4. A rectangle stands on the line from 1 to 3 and is 1 unit tall. A diagonal joins its bottom-left corner at 1 to its top-right corner. A dashed arc centred at 1 swings from the top-right corner down to the line at P, a little past 3."}
  },
  {
    id: "g9-maths-ch01-ach-x-02",
    prompt: "For a geometry project, Kalpana cuts a right-angled triangle out of card, with the shorter sides measuring as marked in the figure. What length is the longest side of her triangle?",
    options: [
      { id: "a", text: "2\u221a3 cm" },
      { id: "b", text: "2\u221a2 cm" },
      { id: "c", text: "2 cm" },
      { id: "d", text: "8 cm" }
    ],
    answerId: "b",
    explanation: "(\u221a3 + 1)\u00b2 = 3 + 2\u221a3 + 1 = 4 + 2\u221a3 and (\u221a3 \u2212 1)\u00b2 = 4 \u2212 2\u221a3. By Pythagoras, the longest side squared is (4 + 2\u221a3) + (4 \u2212 2\u221a3) = 8, so the longest side is \u221a8 = 2\u221a2 cm (about 2.83 cm). Choosing 2\u221a3 cm is tempting because it adds the two shorter sides, (\u221a3 + 1) + (\u221a3 \u2212 1), but the longest side comes from adding their squares, not the sides themselves.",
    hints: ["Square each labelled side of Kalpana's triangle with an identity; the middle terms cancel when you add the results."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 411 311\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A right-angled triangle whose upright side is root 3 plus 1 centimetres and whose base is root 3 minus 1 centimetres; the longest side is marked with a question mark\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"411\" height=\"311\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"205.5\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kalpana's triangle</text>\n  <polygon class=\"part tri\" points=\"210,60 210,251.24 261.24,251.24\" fill=\"#fff8e1\" stroke=\"#e65100\" stroke-width=\"3\"/>\n  <polyline class=\"part right-mark\" points=\"224,251.24 224,237.24 210,237.24\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"1.5\"/>\n  <text class=\"label leg\" x=\"198\" y=\"160.62\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">(\u221a3 + 1) cm</text>\n  <text class=\"label leg\" x=\"235.62\" y=\"277.24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">(\u221a3 \u2212 1) cm</text>\n  <text class=\"label hyp-mark\" x=\"253.62\" y=\"147.62\" font-size=\"18\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#c62828\">?</text>\n</svg>", "alt": "A right-angled triangle with the right angle at the bottom left. The upright side is labelled (\u221a3 + 1) cm, the base is labelled (\u221a3 \u2212 1) cm and the sloping side is marked ?."}
  },
  {
    id: "g9-maths-ch01-ach-x-03",
    prompt: "Nirali adds 0.333\u2026 (the digit 3 repeating) and 0.4545\u2026 (the block 45 repeating) and writes the sum as p/q in lowest terms. What is p + q?",
    options: [
      { id: "a", text: "59" },
      { id: "b", text: "107" },
      { id: "c", text: "33" },
      { id: "d", text: "92" }
    ],
    answerId: "a",
    explanation: "0.333\u2026 = 3/9 = 1/3, and for 0.4545\u2026 a two-digit block repeats, so it equals 45/99 = 5/11. The sum is 1/3 + 5/11 = 11/33 + 15/33 = 26/33, which is in lowest terms, so p + q = 26 + 33 = 59. 107 is tempting because it treats 0.4545\u2026 as 45/100, giving 1/3 + 9/20 = 47/60, but a repeating block of two digits is over 99, not 100.",
    hints: ["Turn each of Nirali's repeating decimals into a fraction using nines, add, and cancel before reading off p and q."]
  },
  {
    id: "g9-maths-ch01-ach-x-04",
    prompt: "For a maths-club challenge, Darshit writes x = 1/(3 \u2212 2\u221a2) on a card and asks his friends to work out x\u00b2 + 1/x\u00b2 without a calculator. What value should they get?",
    options: [
      { id: "a", text: "36" },
      { id: "b", text: "17" },
      { id: "c", text: "32" },
      { id: "d", text: "34" }
    ],
    answerId: "d",
    explanation: "Multiply the top and bottom of x by (3 + 2\u221a2): x = (3 + 2\u221a2)/(9 \u2212 8) = 3 + 2\u221a2. Then 1/x = 3 \u2212 2\u221a2, so x + 1/x = 6. Squaring, x\u00b2 + 2 + 1/x\u00b2 = 36, so x\u00b2 + 1/x\u00b2 = 34. 36 is tempting because it is (x + 1/x)\u00b2, which still holds the extra 2 from the middle term 2 \u00d7 x \u00d7 1/x.",
    hints: ["Rationalise Darshit's x first; x and 1/x then form a neat pair whose sum is easy, and squaring that sum helps."]
  },
  {
    id: "g9-maths-ch01-ach-x-05",
    prompt: "At a textile shop in Surat, Parineeti has three ribbons of lengths (\u221a7 + \u221a5) m, (\u221a8 + 2) m and 2\u221a6 m. Which ribbon is the longest?",
    options: [
      { id: "a", text: "(\u221a8 + 2) m" },
      { id: "b", text: "(\u221a7 + \u221a5) m" },
      { id: "c", text: "2\u221a6 m" },
      { id: "d", text: "All three are equal" }
    ],
    answerId: "c",
    explanation: "Compare the squares. (\u221a7 + \u221a5)\u00b2 = 12 + 2\u221a35, (\u221a8 + 2)\u00b2 = 8 + 4\u221a8 + 4 = 12 + 2\u221a32, and (2\u221a6)\u00b2 = 24 = 12 + 2\u221a36. All three start with 12, and \u221a36 is the biggest of \u221a35, \u221a32 and \u221a36, so the 2\u221a6 m ribbon is the longest. Choosing (\u221a8 + 2) m is tempting because \u221a8 is the biggest single root on show, but once each length is squared its extra part is only 2\u221a32.",
    hints: ["Square each of Parineeti's ribbon lengths; all three squares begin with the same whole number, so compare what is left."]
  }
];
