import type { PrepQuestion } from "../types";

/** Linear Equations in One Variable (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g8MathsLinearAchievers: PrepQuestion[] = [
  {
    id: "g8-maths-ch02-ach-x-01",
    prompt: "Ishanvi builds a wall of numbered bricks: any brick resting on two others shows their total. Find the number that goes in the middle brick of her bottom row.",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "8" },
      { id: "c", text: "15" },
      { id: "d", text: "23" }
    ],
    answerId: "c",
    explanation: "The middle row holds x + (2x \u2212 1) = 3x \u2212 1 and (2x \u2212 1) + 7 = 2x + 6. The top brick is (3x \u2212 1) + (2x + 6) = 5x + 5, so 5x + 5 = 45 and x = 8. The middle bottom brick is 2 \u00d7 8 \u2212 1 = 15. 25 is tempting because it sets the three bottom bricks' sum, 3x + 6, equal to 45 (giving x = 13), but the middle bottom brick holds up both middle bricks, so it is counted twice in the top brick.",
    hints: ["Fill the two empty middle bricks of Ishanvi's wall with expressions in x, then write the top brick as their sum."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 224\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number wall: the bottom row reads x, 2x minus 1 and 7; the two middle bricks are empty; the top brick reads 45\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"224\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ishanvi's number wall</text>\n  <rect class=\"part card brick\" x=\"40\" y=\"140\" width=\"120\" height=\"48\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"#bf360c\" stroke-width=\"2\"/>\n  <text class=\"label brick-value\" x=\"100\" y=\"170\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">x</text>\n  <rect class=\"part card brick\" x=\"160\" y=\"140\" width=\"120\" height=\"48\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"#bf360c\" stroke-width=\"2\"/>\n  <text class=\"label brick-value\" x=\"220\" y=\"170\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2x \u2212 1</text>\n  <rect class=\"part card brick\" x=\"280\" y=\"140\" width=\"120\" height=\"48\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"#bf360c\" stroke-width=\"2\"/>\n  <text class=\"label brick-value\" x=\"340\" y=\"170\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">7</text>\n  <rect class=\"part card brick\" x=\"100\" y=\"92\" width=\"120\" height=\"48\" rx=\"0\" fill=\"#fffaf3\" stroke=\"#bf360c\" stroke-width=\"2\"/>\n  <rect class=\"part card brick\" x=\"220\" y=\"92\" width=\"120\" height=\"48\" rx=\"0\" fill=\"#fffaf3\" stroke=\"#bf360c\" stroke-width=\"2\"/>\n  <rect class=\"part card brick\" x=\"160\" y=\"44\" width=\"120\" height=\"48\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"#bf360c\" stroke-width=\"2\"/>\n  <text class=\"label brick-value\" x=\"220\" y=\"74\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">45</text>\n</svg>", "alt": "A wall of six bricks: three on the bottom row labelled x, 2x \u2212 1 and 7; two empty bricks in the middle row; one brick on top labelled 45."}
  },
  {
    id: "g8-maths-ch02-ach-x-02",
    prompt: "Mayank spends 1/3 of his savings on a cricket bat. He then spends \u20b9120 more than 1/4 of his savings on a pair of shoes. He has \u20b9380 left. How much did he have in savings at first?",
    options: [
      { id: "a", text: "\u20b91,200" },
      { id: "b", text: "\u20b9912" },
      { id: "c", text: "\u20b91,500" },
      { id: "d", text: "\u20b9960" }
    ],
    answerId: "a",
    explanation: "Let the savings be \u20b9s. The bat costs s/3 and the shoes cost s/4 + 120, so s \u2212 s/3 \u2212 (s/4 + 120) = 380. That gives 5s/12 \u2212 120 = 380, so 5s/12 = 500 and s = \u20b91,200. Check: bat \u20b9400, shoes \u20b9300 + \u20b9120 = \u20b9420, and 1,200 \u2212 400 \u2212 420 = 380. \u20b9912 is tempting because it solves 5s/12 = 380 and forgets the extra \u20b9120 paid for the shoes.",
    hints: ["Write the cost of Mayank's bat and of his shoes in terms of his savings, then subtract both from the savings."]
  },
  {
    id: "g8-maths-ch02-ach-x-03",
    prompt: "Yuvika draws an equilateral triangle and a square with the side lengths shown. The two shapes have the same perimeter. How long is one side of the square?",
    options: [
      { id: "a", text: "10 cm" },
      { id: "b", text: "28 cm" },
      { id: "c", text: "84 cm" },
      { id: "d", text: "21 cm" }
    ],
    answerId: "d",
    explanation: "The triangle's perimeter is 3(3x \u2212 2) = 9x \u2212 6 and the square's is 4(2x + 1) = 8x + 4. Setting them equal: 9x \u2212 6 = 8x + 4, so x = 10. One side of the square is 2 \u00d7 10 + 1 = 21 cm (the triangle's side is 28 cm, and both perimeters are 84 cm). 10 cm is tempting because it is the value of x, but x is not a side length; the square's side is 2x + 1.",
    hints: ["Write each perimeter of Yuvika's shapes in terms of x, set them equal, and then find the square's side."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 598 268\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"An equilateral triangle with each side 3x minus 2 centimetres and a square with each side 2x plus 1 centimetres\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"598\" height=\"268\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"299.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Yuvika's triangle and square</text>\n  <polygon class=\"part tri\" points=\"150,227.62 332,227.62 241,70\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"3\"/>\n  <line class=\"part equal-mark\" x1=\"241\" y1=\"219.62\" x2=\"241\" y2=\"235.62\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <line class=\"part equal-mark\" x1=\"279.57\" y1=\"152.81\" x2=\"293.43\" y2=\"144.81\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <line class=\"part equal-mark\" x1=\"202.43\" y1=\"152.81\" x2=\"188.57\" y2=\"144.81\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <text class=\"label side\" x=\"179.5\" y=\"148.81\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">(3x \u2212 2) cm</text>\n  <rect class=\"part square\" x=\"422\" y=\"91.12\" width=\"136.5\" height=\"136.5\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#1565c0\" stroke-width=\"3\"/>\n  <polyline class=\"part right-mark\" points=\"434,91.12 434,103.12 422,103.12\" fill=\"none\" stroke=\"#1565c0\" stroke-width=\"1.5\"/>\n  <polyline class=\"part right-mark\" points=\"546.5,91.12 546.5,103.12 558.5,103.12\" fill=\"none\" stroke=\"#1565c0\" stroke-width=\"1.5\"/>\n  <polyline class=\"part right-mark\" points=\"434,227.62 434,215.62 422,215.62\" fill=\"none\" stroke=\"#1565c0\" stroke-width=\"1.5\"/>\n  <polyline class=\"part right-mark\" points=\"546.5,227.62 546.5,215.62 558.5,215.62\" fill=\"none\" stroke=\"#1565c0\" stroke-width=\"1.5\"/>\n  <text class=\"label side\" x=\"490.25\" y=\"81.12\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">(2x + 1) cm</text>\n</svg>", "alt": "On the left, an equilateral triangle with a tick on each side; one side is labelled (3x \u2212 2) cm. On the right, a square with right-angle marks; its top side is labelled (2x + 1) cm."}
  },
  {
    id: "g8-maths-ch02-ach-x-04",
    prompt: "Hrishita's uncle runs a tea shop in Darjeeling. He mixes tea leaves costing \u20b9400 per kg with tea leaves costing \u20b9250 per kg to make 15 kg of a blend worth \u20b9300 per kg. How many kilograms of the \u20b9400 tea are in the blend?",
    options: [
      { id: "a", text: "10 kg" },
      { id: "b", text: "5 kg" },
      { id: "c", text: "7.5 kg" },
      { id: "d", text: "6 kg" }
    ],
    answerId: "b",
    explanation: "Let the blend hold k kg of \u20b9400 tea and (15 \u2212 k) kg of \u20b9250 tea. Its value is 400k + 250(15 \u2212 k) = 15 \u00d7 300 = 4,500. So 150k + 3,750 = 4,500, 150k = 750 and k = 5 kg. 10 kg is tempting because it is the amount of the \u20b9250 tea in the blend, not the \u20b9400 tea; a blend price of \u20b9300 is closer to \u20b9250, so the cheaper tea is the larger part.",
    hints: ["Let the dearer tea in Hrishita's uncle's blend be some kilograms, write the cheaper tea's share, and match the blend's total value."]
  },
  {
    id: "g8-maths-ch02-ach-x-05",
    prompt: "In Tanvika's school hall, if 3 children sit on each bench, 8 children have no seat. If 4 children sit on each bench instead, 3 benches are left empty. How many children are there?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "60" },
      { id: "c", text: "68" },
      { id: "d", text: "72" }
    ],
    answerId: "c",
    explanation: "Let there be b benches. The first seating holds 3b children with 8 left over, so there are 3b + 8 children. The second fills b \u2212 3 benches with 4 each, so there are 4(b \u2212 3) children. Then 3b + 8 = 4b \u2212 12, so b = 20 and there are 3 \u00d7 20 + 8 = 68 children (check: 4 \u00d7 17 = 68). 20 is tempting because it is the number of benches, the unknown in the equation, but the question asks for the number of children.",
    hints: ["Let the number of benches in Tanvika's hall be unknown and write the number of children in two ways, one for each seating."]
  }
];
