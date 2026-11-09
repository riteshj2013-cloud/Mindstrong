import type { PrepQuestion } from "../types";

/** Algebraic Expressions and Identities (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g8MathsAlgebraAchievers: PrepQuestion[] = [
  {
    id: "g8-maths-ch04-ach-x-01",
    prompt: "Akshat's rectangular garden plan is split into four smaller rectangles, and the area of each part, in m\u00b2, is written inside it. If x = 7, what is the perimeter of the whole garden?",
    options: [
      { id: "a", text: "44 m" },
      { id: "b", text: "22 m" },
      { id: "c", text: "34 m" },
      { id: "d", text: "48 m" }
    ],
    answerId: "a",
    explanation: "The top-left part, x\u00b2, is a square of side x. The top-right part, 5x, has height x, so its width is 5. The bottom-left part, 3x, has width x, so its height is 3; the bottom-right part is 5 \u00d7 3 = 15, which checks. The garden is (x + 5) m by (x + 3) m, so its perimeter is 2(2x + 8) = 4x + 16 = 44 m when x = 7. 22 m is tempting because it adds just one length and one breadth, 12 + 10, which is only half the way round.",
    hints: ["Use the square part of Akshat's plan to find the side lengths of the other parts, then add all four sides of the garden."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 360 290\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A rectangle split into four parts with areas x squared, 5x, 3x and 15 square metres\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"360\" height=\"290\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"180.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Akshat's garden plan</text>\n  <rect class=\"part plot\" x=\"60\" y=\"50\" width=\"140\" height=\"140\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#33691e\" stroke-width=\"2\"/>\n  <text class=\"label part-area\" x=\"130\" y=\"126\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">x\u00b2</text>\n  <rect class=\"part plot\" x=\"200\" y=\"50\" width=\"100\" height=\"140\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#33691e\" stroke-width=\"2\"/>\n  <text class=\"label part-area\" x=\"250\" y=\"126\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">5x</text>\n  <rect class=\"part plot\" x=\"60\" y=\"190\" width=\"140\" height=\"60\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"#33691e\" stroke-width=\"2\"/>\n  <text class=\"label part-area\" x=\"130\" y=\"226\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">3x</text>\n  <rect class=\"part plot\" x=\"200\" y=\"190\" width=\"100\" height=\"60\" rx=\"0\" fill=\"#d1c4e9\" stroke=\"#33691e\" stroke-width=\"2\"/>\n  <text class=\"label part-area\" x=\"250\" y=\"226\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">15</text>\n</svg>", "alt": "A large rectangle split into a 2 by 2 arrangement of smaller rectangles. Top row: x\u00b2 and 5x. Bottom row: 3x and 15."}
  },
  {
    id: "g8-maths-ch04-ach-x-02",
    prompt: "The temple courtyard in Gaurika's town is a square with a square pond in the middle, measuring as shown. Everything except the pond is paved with stone at \u20b925 per m\u00b2. What does the paving cost?",
    options: [
      { id: "a", text: "\u20b94,900" },
      { id: "b", text: "\u20b928,000" },
      { id: "c", text: "\u20b955,225" },
      { id: "d", text: "\u20b927,225" }
    ],
    answerId: "b",
    explanation: "The paved area is 47\u00b2 \u2212 33\u00b2. Using a\u00b2 \u2212 b\u00b2 = (a + b)(a \u2212 b), that is (47 + 33)(47 \u2212 33) = 80 \u00d7 14 = 1,120 m\u00b2. At \u20b925 per m\u00b2 the paving costs 1,120 \u00d7 25 = \u20b928,000. \u20b94,900 is tempting because it uses (47 \u2212 33)\u00b2 = 196 m\u00b2, but a\u00b2 \u2212 b\u00b2 is not the same as (a \u2212 b)\u00b2; the paved region is much bigger than a 14 m square.",
    hints: ["Gaurika's paved area is the big square minus the pond; a difference of two squares splits into two easy factors."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 355 335\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A square courtyard of side 47 metres with a square pond of side 33 metres in the middle; the rest is paved\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"355\" height=\"335\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"177.5\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Gaurika's temple courtyard</text>\n  <rect class=\"part yard\" x=\"60\" y=\"62\" width=\"235\" height=\"235\" rx=\"0\" fill=\"#d7ccc8\" stroke=\"#4e342e\" stroke-width=\"3\"/>\n  <rect class=\"part pond\" x=\"95\" y=\"97\" width=\"165\" height=\"165\" rx=\"0\" fill=\"#81d4fa\" stroke=\"#0277bd\" stroke-width=\"2.5\"/>\n  <text class=\"label side\" x=\"177.5\" y=\"52\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">47 m</text>\n  <text class=\"label side\" x=\"177.5\" y=\"87\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#01579b\">33 m</text>\n  <text class=\"label region-name\" x=\"177.5\" y=\"185.5\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#01579b\">pond</text>\n  <text class=\"label region-name\" x=\"177.5\" y=\"285\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#3e2723\">paved</text>\n</svg>", "alt": "A large square labelled 47 m along its top side, with a smaller blue square labelled pond in its middle; the pond's top side is labelled 33 m. The area around the pond is labelled paved."}
  },
  {
    id: "g8-maths-ch04-ach-x-03",
    prompt: "Janhavi multiplies out (2x + k)(x \u2212 3), where k is a number, and finds that the coefficient of x in her answer is 1. What is the value of k?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "\u22125" },
      { id: "c", text: "3" },
      { id: "d", text: "7" }
    ],
    answerId: "d",
    explanation: "(2x + k)(x \u2212 3) = 2x\u00b2 \u2212 6x + kx \u2212 3k = 2x\u00b2 + (k \u2212 6)x \u2212 3k. The coefficient of x is k \u2212 6, so k \u2212 6 = 1 and k = 7. 4 is tempting because it takes the x-term as (k \u2212 3)x, forgetting that 2x \u00d7 (\u22123) gives \u22126x, not \u22123x.",
    hints: ["Multiply out Janhavi's two brackets term by term and collect every term that has x to the first power."]
  },
  {
    id: "g8-maths-ch04-ach-x-04",
    prompt: "At a stationery shop in Indore, a pen costs \u20b9(2x + 5) and a notebook costs \u20b9(3x \u2212 4). Lipika buys 4 pens and 3 notebooks and pays with \u20b9(20x + 20). She gets \u20b957 back. What does one notebook cost?",
    options: [
      { id: "a", text: "\u20b965" },
      { id: "b", text: "\u20b935" },
      { id: "c", text: "\u20b941" },
      { id: "d", text: "\u20b915" }
    ],
    answerId: "c",
    explanation: "The bill is 4(2x + 5) + 3(3x \u2212 4) = 8x + 20 + 9x \u2212 12 = 17x + 8. The change is (20x + 20) \u2212 (17x + 8) = 3x + 12, so 3x + 12 = 57 and x = 15. A notebook costs 3 \u00d7 15 \u2212 4 = \u20b941 (and a pen \u20b935; 4 \u00d7 35 + 3 \u00d7 41 = 263 and 320 \u2212 263 = 57). \u20b965 is tempting because it writes 3 \u00d7 (\u22124) as +12, making the change 3x \u2212 12 = 57, x = 23 and a notebook 3 \u00d7 23 \u2212 4 = \u20b965.",
    hints: ["Write Lipika's whole bill as one expression, subtract it from what she paid, and match the result to her change."]
  },
  {
    id: "g8-maths-ch04-ach-x-05",
    prompt: "Deeksha asks her brother to think of a number, add 3 to it and square the result, then subtract 3 from the same number and square that, and finally take the second square away from the first. He gets 168. What number did he think of?",
    options: [
      { id: "a", text: "28" },
      { id: "b", text: "14" },
      { id: "c", text: "12" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "If the number is n, the result is (n + 3)\u00b2 \u2212 (n \u2212 3)\u00b2 = (n\u00b2 + 6n + 9) \u2212 (n\u00b2 \u2212 6n + 9) = 12n. So 12n = 168 and n = 14. Check: 17\u00b2 \u2212 11\u00b2 = 289 \u2212 121 = 168. 28 is tempting because it keeps only one 6n, getting 6n = 168, but the middle terms +6n and \u22126n are subtracted, so they add up to 12n.",
    hints: ["Call the brother's number n, expand both squares in Deeksha's trick, and see which terms cancel when you subtract."]
  }
];
