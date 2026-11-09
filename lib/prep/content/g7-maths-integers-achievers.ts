import type { PrepQuestion } from "../types";

/** Integers (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g7MathsIntegersAchievers: PrepQuestion[] = [
  {
    id: "g7-maths-ch01-ach-x-01",
    prompt: "Anvay picks any three of the five number cards shown and multiplies the numbers on them. What is the difference between the greatest product and the least product he can make?",
    options: [
      { id: "a", text: "90" },
      { id: "b", text: "\u221230" },
      { id: "c", text: "50" },
      { id: "d", text: "120" }
    ],
    answerId: "a",
    explanation: "For the greatest product, two negative cards make a positive pair: (\u22123) \u00d7 (\u22122) \u00d7 5 = 30 (5 \u00d7 4 \u00d7 (\u22121) is negative). For the least product, use one negative card with the two biggest positives: (\u22123) \u00d7 4 \u00d7 5 = \u221260. The difference is 30 \u2212 (\u221260) = 30 + 60 = 90. \u221230 is tempting because it works out 30 \u2212 60, dropping the minus sign of \u221260, but subtracting a negative number adds its size.",
    hints: ["Decide which of Anvay's cards make the biggest positive product and which make the most negative one, then subtract with care."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 450 158\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Five number cards showing minus 3, minus 2, minus 1, 4 and 5\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"450\" height=\"158\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"225.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Anvay's number cards</text>\n  <rect class=\"part card\" x=\"29\" y=\"46\" width=\"64\" height=\"84\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#ef6c00\" stroke-width=\"2\"/>\n  <text class=\"label card-value\" x=\"61\" y=\"97.0\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u22123</text>\n  <rect class=\"part card\" x=\"111\" y=\"46\" width=\"64\" height=\"84\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#ef6c00\" stroke-width=\"2\"/>\n  <text class=\"label card-value\" x=\"143\" y=\"97.0\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u22122</text>\n  <rect class=\"part card\" x=\"193\" y=\"46\" width=\"64\" height=\"84\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#ef6c00\" stroke-width=\"2\"/>\n  <text class=\"label card-value\" x=\"225\" y=\"97.0\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u22121</text>\n  <rect class=\"part card\" x=\"275\" y=\"46\" width=\"64\" height=\"84\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#ef6c00\" stroke-width=\"2\"/>\n  <text class=\"label card-value\" x=\"307\" y=\"97.0\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4</text>\n  <rect class=\"part card\" x=\"357\" y=\"46\" width=\"64\" height=\"84\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#ef6c00\" stroke-width=\"2\"/>\n  <text class=\"label card-value\" x=\"389\" y=\"97.0\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">5</text>\n</svg>", "alt": "Five number cards in a row: \u22123, \u22122, \u22121, 4 and 5."}
  },
  {
    id: "g7-maths-ch01-ach-x-02",
    prompt: "In a Mumbai mall, Paridhi's lift starts at floor \u22123 (the lowest basement), goes up to floor 5, and then comes down to floor \u22122. The floors are 4 m apart. How many metres does the lift travel in all?",
    options: [
      { id: "a", text: "20 m" },
      { id: "b", text: "4 m" },
      { id: "c", text: "60 m" },
      { id: "d", text: "32 m" }
    ],
    answerId: "c",
    explanation: "Going up from floor \u22123 to floor 5 is 5 \u2212 (\u22123) = 8 floors. Coming down from floor 5 to floor \u22122 is 5 \u2212 (\u22122) = 7 floors. That is 15 floors of 4 m each, so the lift travels 60 m. 20 m is tempting because it ignores the minus signs and counts 5 \u2212 3 = 2 and 5 \u2212 2 = 3 floors, but floors below 0 add to the distance instead of taking away from it.",
    hints: ["Count the floors Paridhi's lift passes on each trip separately; a trip from a basement upwards also passes floor 0."]
  },
  {
    id: "g7-maths-ch01-ach-x-03",
    prompt: "Ruchir fills a 3 \u00d7 3 grid with integers so that the three numbers in any line, across, down or corner to corner, add up to the same number. What is the value of P \u2212 Q?",
    options: [
      { id: "a", text: "\u22124" },
      { id: "b", text: "6" },
      { id: "c", text: "4" },
      { id: "d", text: "\u22126" }
    ],
    answerId: "b",
    explanation: "The diagonal \u22124, \u22121, 2 is complete, so every line adds up to \u22123. Top row: \u22124 + P + 0 = \u22123, so P = 1. Middle row: 3 + (\u22121) + Q = \u22123, so Q = \u22125. Then P \u2212 Q = 1 \u2212 (\u22125) = 6. \u22124 is tempting because it works out 1 \u2212 5, dropping the minus sign of Q, but subtracting \u22125 means adding 5.",
    hints: ["Find the common sum from a line of Ruchir's square with no letters in it, then use the row that holds each letter."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 290 280\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A three by three magic square of integers with two unknown cells P and Q\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"290\" height=\"280\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"145.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ruchir's magic square</text>\n  <rect class=\"part cell\" x=\"40\" y=\"44\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffffff\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"75\" y=\"87.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u22124</text>\n  <rect class=\"part cell\" x=\"110\" y=\"44\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#e8eaf6\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"145\" y=\"87.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a237e\">P</text>\n  <rect class=\"part cell\" x=\"180\" y=\"44\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffffff\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"215\" y=\"87.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">0</text>\n  <rect class=\"part cell\" x=\"40\" y=\"114\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffffff\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"75\" y=\"157.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">3</text>\n  <rect class=\"part cell\" x=\"110\" y=\"114\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffffff\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"145\" y=\"157.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u22121</text>\n  <rect class=\"part cell\" x=\"180\" y=\"114\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#e8eaf6\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"215\" y=\"157.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a237e\">Q</text>\n  <rect class=\"part cell\" x=\"40\" y=\"184\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffffff\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"75\" y=\"227.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u22122</text>\n  <rect class=\"part cell\" x=\"110\" y=\"184\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffffff\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"145\" y=\"227.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">\u22123</text>\n  <rect class=\"part cell\" x=\"180\" y=\"184\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffffff\" stroke=\"#3949ab\" stroke-width=\"2\"/>\n  <text class=\"label cell-value\" x=\"215\" y=\"227.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2</text>\n</svg>", "alt": "A 3 by 3 grid. Top row: \u22124, P, 0. Middle row: 3, \u22121, Q. Bottom row: \u22122, \u22123, 2."}
  },
  {
    id: "g7-maths-ch01-ach-x-04",
    prompt: "Over 6 days, the water level in the reservoir near Sanvika's village changed by \u221284 cm in all. On each of the first 2 days the level rose by 10 cm. On each of the other days it fell by the same amount. By how much did it fall each day?",
    options: [
      { id: "a", text: "16 cm" },
      { id: "b", text: "14 cm" },
      { id: "c", text: "21 cm" },
      { id: "d", text: "26 cm" }
    ],
    answerId: "d",
    explanation: "The two rises add +20 cm. The 4 falling days must bring the total from +20 down to \u221284, a change of \u221284 \u2212 20 = \u2212104 cm. Shared over 4 days, that is \u2212104 \u00f7 4 = \u221226 cm a day, so the level fell 26 cm each day. 16 cm is tempting because it works out \u221284 + 20 = \u221264 and shares that, but the rises pushed the level up, so the falls had to undo them as well.",
    hints: ["Work out how much change Sanvika's reservoir needed on the falling days alone, keeping track of the rises on the early days."]
  },
  {
    id: "g7-maths-ch01-ach-x-05",
    prompt: "Divit's metro card starts with \u20b9160. Every ride takes \u20b923 off the balance, and the card still allows a ride as long as the balance after that ride is not below \u2212\u20b950. How many rides can he take before he must recharge?",
    options: [
      { id: "a", text: "6 rides" },
      { id: "b", text: "9 rides" },
      { id: "c", text: "7 rides" },
      { id: "d", text: "10 rides" }
    ],
    answerId: "b",
    explanation: "The balance may fall to \u2212\u20b950, so the rides can use up to 160 + 50 = \u20b9210. 9 rides cost 9 \u00d7 23 = \u20b9207, leaving \u2212\u20b947, which is allowed; a 10th ride would leave \u2212\u20b970, below the limit. So he can take 9 rides. 6 rides is tempting because 6 \u00d7 23 = \u20b9138 is as far as the balance stays at or above \u20b90, but this card is allowed to go below zero.",
    hints: ["Divit's card may dip below zero, so find the lowest balance allowed and count how many rides fit before passing it."]
  }
];
