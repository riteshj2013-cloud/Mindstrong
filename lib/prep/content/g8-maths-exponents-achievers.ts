import type { PrepQuestion } from "../types";

/** Exponents and Powers (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g8MathsExponentsAchievers: PrepQuestion[] = [
  {
    id: "g8-maths-ch06-ach-x-01",
    prompt: "On Diwali, Tvesha sends a greeting to some friends; that is round 1. In each later round, everyone who got it in the round before sends it to new people in the same way, as the diagram shows. In which round do more than 2,000 new people first get the greeting?",
    options: [
      { id: "a", text: "Round 7" },
      { id: "b", text: "Round 8" },
      { id: "c", text: "Round 6" },
      { id: "d", text: "Round 5" }
    ],
    answerId: "a",
    explanation: "Each person passes it to 3 new people, so round 1 has 3 people, round 2 has 3\u00b2 = 9, and round n has 3\u207f new people. 3\u2076 = 729 is not more than 2,000, but 3\u2077 = 2,187 is, so it first happens in round 7. Round 8 is tempting because it counts Tvesha herself as round 1, giving 3\u207f\u207b\u00b9 people in round n, but she only starts the chain; round 1 already has 3 people.",
    hints: ["From the diagram, write how many new people get Tvesha's greeting in round n as a power, then test rounds."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 598 276\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A tree diagram: Tvesha at the top sends to 3 people in round 1, and each of them sends to 3 new people in round 2, making 9\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"598\" height=\"276\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"299.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tvesha's Diwali greeting</text>\n  <line class=\"part link\" x1=\"339\" y1=\"72\" x2=\"287\" y2=\"130\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"339\" y1=\"72\" x2=\"339\" y2=\"130\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"339\" y1=\"72\" x2=\"391\" y2=\"130\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"287\" y1=\"150\" x2=\"131\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"287\" y1=\"150\" x2=\"183\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"287\" y1=\"150\" x2=\"235\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"339\" y1=\"150\" x2=\"287\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"339\" y1=\"150\" x2=\"339\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"339\" y1=\"150\" x2=\"391\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"391\" y1=\"150\" x2=\"443\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"391\" y1=\"150\" x2=\"495\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <line class=\"part link\" x1=\"391\" y1=\"150\" x2=\"547\" y2=\"208\" stroke=\"#8d6e63\" stroke-width=\"1.5\"/>\n  <circle class=\"part node root\" cx=\"339\" cy=\"62\" r=\"11\" fill=\"#ffb300\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <text class=\"label root-name\" x=\"357\" y=\"67\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Tvesha</text>\n  <circle class=\"part node\" cx=\"287\" cy=\"140\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"339\" cy=\"140\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"391\" cy=\"140\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <text class=\"label round-name\" x=\"16\" y=\"145\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#5d4037\">Round 1</text>\n  <circle class=\"part node\" cx=\"131\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"183\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"235\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"287\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"339\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"391\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"443\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"495\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <circle class=\"part node\" cx=\"547\" cy=\"218\" r=\"9\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <text class=\"label round-name\" x=\"16\" y=\"223\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#5d4037\">Round 2</text>\n  <text class=\"label caption\" x=\"299.0\" y=\"258\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">\u2026 and so on</text>\n</svg>", "alt": "A tree diagram. Tvesha is at the top. Round 1 has 3 people joined to her. Round 2 has 9 people, 3 joined to each person in round 1. Below it says \u2026 and so on."}
  },
  {
    id: "g8-maths-ch06-ach-x-02",
    prompt: "A rare coin that Shreyan's grandfather bought for \u20b92,000 doubles in value every 5 years. After how many years will it be worth \u20b91,28,000?",
    options: [
      { id: "a", text: "35 years" },
      { id: "b", text: "6 years" },
      { id: "c", text: "32 years" },
      { id: "d", text: "30 years" }
    ],
    answerId: "d",
    explanation: "After n doublings the coin is worth 2,000 \u00d7 2\u207f. Setting 2,000 \u00d7 2\u207f = 1,28,000 gives 2\u207f = 64 = 2\u2076, so n = 6 doublings. Each doubling takes 5 years, so it takes 6 \u00d7 5 = 30 years. 6 years is tempting because 6 is the exponent, the number of doublings, but every doubling takes 5 years.",
    hints: ["Write the value of Shreyan's coin after some number of doublings as a power of 2, then turn doublings into years."]
  },
  {
    id: "g8-maths-ch06-ach-x-03",
    prompt: "Kiaansh reads that radio signals travel at 3 \u00d7 10\u2078 m per second. A control room in Bengaluru sends a signal to a lander on the Moon, using the distance shown, and the lander's reply comes straight back. How many seconds after sending does the control room get the reply?",
    options: [
      { id: "a", text: "1.28 seconds" },
      { id: "b", text: "25.6 seconds" },
      { id: "c", text: "2.56 seconds" },
      { id: "d", text: "0.256 seconds" }
    ],
    answerId: "c",
    explanation: "One way, the signal takes (3.84 \u00d7 10\u2078) \u00f7 (3 \u00d7 10\u2078) = 1.28 seconds, because the powers of 10 cancel. The reply has to come all the way back, so the total is 2 \u00d7 1.28 = 2.56 seconds. 1.28 seconds is tempting because it is only the time for the signal to reach the Moon; the control room must also wait for the reply to travel back.",
    hints: ["Divide the distance in Kiaansh's diagram by the speed, letting the powers of 10 cancel, and remember the signal goes there and back."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"The Earth and the Moon with the distance between them marked as 3.84 times 10 to the power 8 metres\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"600\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"300.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kiaansh's Earth\u2013Moon diagram</text>\n  <circle class=\"part earth\" cx=\"90\" cy=\"110\" r=\"46\" fill=\"#4fc3f7\" stroke=\"#0277bd\" stroke-width=\"2\"/>\n  <circle class=\"part moon\" cx=\"520\" cy=\"110\" r=\"16\" fill=\"#e0e0e0\" stroke=\"#616161\" stroke-width=\"2\"/>\n  <text class=\"label body-name\" x=\"90\" y=\"180\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Earth</text>\n  <text class=\"label body-name\" x=\"520\" y=\"150\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Moon</text>\n  <line class=\"part distance-line\" x1=\"142\" y1=\"110\" x2=\"498\" y2=\"110\" stroke=\"#6a1b9a\" stroke-width=\"2\" stroke-dasharray=\"7 4\"/>\n  <polyline class=\"part arrow-head\" points=\"490,104.4 498,110 490,115.6\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"150,104.4 142,110 150,115.6\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label distance\" x=\"320\" y=\"96\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">3.84 \u00d7 10\u2078 m</text>\n</svg>", "alt": "A large blue circle labelled Earth and a small grey circle labelled Moon, joined by a dashed double-headed arrow marked 3.84 \u00d7 10\u2078 m."}
  },
  {
    id: "g8-maths-ch06-ach-x-04",
    prompt: "Ishwari's teacher writes four numbers on the board and offers a \u20b910 prize to whoever can say, without a calculator, which one is the largest: 2\u2075\u2070, 3\u2074\u2070, 5\u00b3\u2070 and 7\u00b2\u2070. Which number should Ishwari choose?",
    options: [
      { id: "a", text: "2\u2075\u2070" },
      { id: "b", text: "5\u00b3\u2070" },
      { id: "c", text: "3\u2074\u2070" },
      { id: "d", text: "7\u00b2\u2070" }
    ],
    answerId: "b",
    explanation: "Write each number as a power with exponent 10: 2\u2075\u2070 = (2\u2075)\u00b9\u2070 = 32\u00b9\u2070, 3\u2074\u2070 = (3\u2074)\u00b9\u2070 = 81\u00b9\u2070, 5\u00b3\u2070 = (5\u00b3)\u00b9\u2070 = 125\u00b9\u2070 and 7\u00b2\u2070 = (7\u00b2)\u00b9\u2070 = 49\u00b9\u2070. With the same exponent, the biggest base wins, so 5\u00b3\u2070 is the largest. 2\u2075\u2070 is tempting because it has the biggest exponent, but its base is so small that 32\u00b9\u2070 is the smallest of the four.",
    hints: ["Rewrite each number on the board as some base raised to one shared exponent, then compare the bases Ishwari gets."]
  },
  {
    id: "g8-maths-ch06-ach-x-05",
    prompt: "Sumedh wants the last digit of 3\u00b2\u2070\u00b2\u2076 + 7\u00b2\u2070\u00b2\u2076 for a puzzle in his school magazine. What is the units digit of this sum?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "9" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "The units digits of powers of 3 repeat as 3, 9, 7, 1, and those of powers of 7 repeat as 7, 9, 3, 1, every 4 steps. 2026 = 4 \u00d7 506 + 2, so each power is in the 2nd place of its cycle: 3\u00b2\u2070\u00b2\u2076 ends in 9 and 7\u00b2\u2070\u00b2\u2076 ends in 9. The sum ends in the units digit of 9 + 9 = 18, which is 8. 0 is tempting because it adds the bases first, as if 3\u00b2\u2070\u00b2\u2076 + 7\u00b2\u2070\u00b2\u2076 were (3 + 7)\u00b2\u2070\u00b2\u2076 = 10\u00b2\u2070\u00b2\u2076, but a sum of powers cannot be added like that.",
    hints: ["Look for the repeating pattern in the last digits of the powers of 3 and of 7, and find where Sumedh's exponent lands."]
  }
];
