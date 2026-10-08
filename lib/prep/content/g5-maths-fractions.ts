import type { ChapterDef, PrepQuestion } from "../types";

/** Fractions - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-frac-a-q01",
    prompt: "Look at the Chocolate Bar. What fraction is **shaded**?",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "5/8" },
      { id: "c", text: "3/8" },
      { id: "d", text: "8/3" }
    ],
    answerId: "c",
    explanation: "3 pieces out of 8 equal pieces are shaded, so the fraction is 3/8.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 145\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Chocolate bar with 3 of 8 pieces shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"145\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Chocolate Bar</text>\n  <rect class=\"part piece shaded\" x=\"40.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#a1887f\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"85.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#a1887f\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"130.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#a1887f\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"175.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"220.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"265.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"310.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"355.0\" y=\"50\" width=\"45.0\" height=\"55\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"220\" y=\"130\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All pieces are the same size.</text>\n</svg>", "alt": "A bar divided into 8 equal pieces. The first 3 pieces are shaded brown."}
  },
  {
    id: "g5-maths-frac-a-q02",
    prompt: "Look at Parts of a fraction. What is the **denominator** of the fraction shown?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "5" },
      { id: "c", text: "13" },
      { id: "d", text: "40" }
    ],
    answerId: "a",
    explanation: "The denominator is the bottom number. Here it is 8, the number of equal parts in the whole.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Fraction five eighths with numerator and denominator labels\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Parts of a fraction</text>\n  <rect class=\"part card\" x=\"150\" y=\"40\" width=\"140\" height=\"110\" rx=\"10\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"220\" y=\"78\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"part fraction-bar\" x1=\"175\" y1=\"90\" x2=\"265\" y2=\"90\" stroke=\"#333\" stroke-width=\"3\"/>\n  <text class=\"label\" x=\"220\" y=\"125\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"arrow\" x1=\"300\" y1=\"70\" x2=\"310\" y2=\"70\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"360\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">numerator</text>\n  <line class=\"arrow\" x1=\"300\" y1=\"118\" x2=\"310\" y2=\"118\" stroke=\"#1565c0\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"365\" y=\"122\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">denominator</text>\n  <text class=\"label small\" x=\"220\" y=\"170\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Top = how many \u00b7 Bottom = equal parts in the whole</text>\n</svg>", "alt": "A large fraction card shows 5 over 8. An orange arrow labels the 5 as numerator. A blue arrow labels the 8 as denominator."}
  },
  {
    id: "g5-maths-frac-a-q03",
    prompt: "A chocolate bar has 10 equal pieces and 3 pieces are eaten. What fraction of the bar is left?",
    options: [
      { id: "a", text: "7/10" },
      { id: "b", text: "3/10" },
      { id: "c", text: "7/3" },
      { id: "d", text: "10/7" }
    ],
    answerId: "a",
    explanation: "10 \u2212 3 = 7 pieces are left out of 10 equal pieces, so 7/10 is left, while 3/10 is the part eaten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q04",
    prompt: "Look at the four cards. Which one shows a **unit fraction**?",
    options: [
      { id: "a", text: "Card A" },
      { id: "b", text: "Card B" },
      { id: "c", text: "Card C" },
      { id: "d", text: "Card D" }
    ],
    answerId: "c",
    explanation: "A unit fraction has 1 as its numerator. Only Card C shows 1/9.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 165\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four fraction cards find the unit fraction\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"165\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which is a unit fraction?</text>\n  <rect class=\"part card\" x=\"40\" y=\"50\" width=\"90\" height=\"70\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"52\" y=\"72\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label\" x=\"85\" y=\"95\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9/1</text>\n  <rect class=\"part card\" x=\"150\" y=\"50\" width=\"90\" height=\"70\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"162\" y=\"72\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <text class=\"label\" x=\"195\" y=\"95\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2/9</text>\n  <rect class=\"part card\" x=\"260\" y=\"50\" width=\"90\" height=\"70\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"272\" y=\"72\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <text class=\"label\" x=\"305\" y=\"95\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1/9</text>\n  <rect class=\"part card\" x=\"370\" y=\"50\" width=\"90\" height=\"70\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"382\" y=\"72\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label\" x=\"415\" y=\"95\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9/9</text>\n  <text class=\"label small\" x=\"240\" y=\"150\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">A unit fraction has 1 as its numerator.</text>\n</svg>", "alt": "Four cards show 9/1, 2/9, 1/9 and 9/9."}
  },
  {
    id: "g5-maths-frac-a-q05",
    prompt: "Look at the four panels. Which one shows exactly **1/2** shaded?",
    options: [
      { id: "a", text: "Panel A" },
      { id: "b", text: "Panel B" },
      { id: "c", text: "Panel D" },
      { id: "d", text: "Panel C" }
    ],
    answerId: "d",
    explanation: "A half means 1 of 2 equal parts. Only Panel C shows that. A has unequal parts, B is 1/3 and D is 1/4.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four diagrams which shows one half\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"260\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which shows 1/2 shaded?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"34\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <rect class=\"part piece shaded\" x=\"50\" y=\"60\" width=\"50\" height=\"55\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"100\" y=\"60\" width=\"100\" height=\"55\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"34\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <path class=\"part slice shaded\" d=\"M 357 90 L 357.0 58.0 A 32 32 0 0 1 384.7 106.0 Z\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 357 90 L 384.7 106.0 A 32 32 0 0 1 329.3 106.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 357 90 L 329.3 106.0 A 32 32 0 0 1 357.0 58.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"10\" y=\"144\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"166\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <path class=\"part slice shaded\" d=\"M 122 200 L 122.0 168.0 A 32 32 0 0 1 122.0 232.0 Z\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 122 200 L 122.0 232.0 A 32 32 0 0 1 122.0 168.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"144\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"166\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <rect class=\"part piece shaded\" x=\"280.0\" y=\"175\" width=\"40.0\" height=\"40\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"320.0\" y=\"175\" width=\"40.0\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"360.0\" y=\"175\" width=\"40.0\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"400.0\" y=\"175\" width=\"40.0\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "Four panels. A has unequal parts with the small part shaded. B is a circle in 3 equal parts with 1 shaded. C is a circle in 2 equal parts with 1 shaded. D is a bar in 4 equal parts with 1 shaded."}
  },
  {
    id: "g5-maths-frac-a-q06",
    prompt: "Look at Add the shaded parts. What is **2/7 + 3/7**?",
    options: [
      { id: "a", text: "5/14" },
      { id: "b", text: "5/7" },
      { id: "c", text: "6/7" },
      { id: "d", text: "1/7" }
    ],
    answerId: "b",
    explanation: "For like fractions, add the numerators and keep the denominator: 2 + 3 = 5, so 5/7.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two bars showing 2 of 7 and 3 of 7 to add\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Add the shaded parts</text>\n  <text class=\"label\" x=\"30\" y=\"58\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">2/7</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"40\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"120.0\" y=\"40\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"170.0\" y=\"40\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"220.0\" y=\"40\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"270.0\" y=\"40\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"320.0\" y=\"40\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"370.0\" y=\"40\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30\" y=\"98\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">3/7</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"80\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"120.0\" y=\"80\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"170.0\" y=\"80\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"220.0\" y=\"80\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"270.0\" y=\"80\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"320.0\" y=\"80\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"370.0\" y=\"80\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30\" y=\"138\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <rect class=\"part piece\" x=\"70.0\" y=\"120\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"120.0\" y=\"120\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"170.0\" y=\"120\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"220.0\" y=\"120\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"270.0\" y=\"120\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"320.0\" y=\"120\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"370.0\" y=\"120\" width=\"50.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part missing\" x=\"70\" y=\"120\" width=\"350\" height=\"28\" rx=\"0\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label small\" x=\"240\" y=\"175\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Both bars are cut into 7 equal parts.</text>\n</svg>", "alt": "A bar with 2 of 7 parts shaded green, a bar with 3 of 7 parts shaded blue, and an empty 7-part bar with a dashed outline for the sum."}
  },
  {
    id: "g5-maths-frac-a-q07",
    prompt: "Look at the same-size bars. Which shaded fraction is **greater**?",
    options: [
      { id: "a", text: "4/9" },
      { id: "b", text: "5/9" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "b",
    explanation: "When denominators match, the larger numerator wins. 5/9 > 4/9.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 165\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Bars comparing five ninths and four ninths\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"165\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Same-size bars</text>\n  <text class=\"label\" x=\"30\" y=\"58\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">5/9</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"110.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"150.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"190.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"230.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"270.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"310.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"350.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"390.0\" y=\"40\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30\" y=\"108\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">4/9</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"110.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"150.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"190.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"230.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"270.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"310.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"350.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"390.0\" y=\"90\" width=\"40.0\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"240\" y=\"150\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Both bars are the same length with equal parts.</text>\n</svg>", "alt": "Two equal-length bars. The top has 5 of 9 parts shaded. The bottom has 4 of 9 parts shaded."}
  },
  {
    id: "g5-maths-frac-a-q08",
    prompt: "Look at Same amount shaded? Bars 1, 2 and 3 all show the same amount. Which list names those equivalent fractions?",
    options: [
      { id: "a", text: "1/2, 2/4, 4/8" },
      { id: "b", text: "1/2, 1/4, 1/8" },
      { id: "c", text: "2/2, 4/4, 8/8" },
      { id: "d", text: "1/2, 3/4, 5/8" }
    ],
    answerId: "a",
    explanation: "Bar 1 is 1/2, Bar 2 is 2/4 and Bar 3 is 4/8. Multiplying top and bottom by the same number keeps the value equal.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Three bars showing equivalent halves\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Same amount shaded?</text>\n  <text class=\"label\" x=\"40\" y=\"55\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 1</text>\n  <rect class=\"part piece shaded\" x=\"100.0\" y=\"38\" width=\"160.0\" height=\"28\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"260.0\" y=\"38\" width=\"160.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40\" y=\"95\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 2</text>\n  <rect class=\"part piece shaded\" x=\"100.0\" y=\"78\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"180.0\" y=\"78\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"260.0\" y=\"78\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"340.0\" y=\"78\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40\" y=\"135\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 3</text>\n  <rect class=\"part piece shaded\" x=\"100.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"140.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"180.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"220.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"260.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"300.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"340.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"380.0\" y=\"118\" width=\"40.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"240\" y=\"170\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All three bars are the same length.</text>\n</svg>", "alt": "Three equal-length bars. Bar 1 shows 1 of 2 shaded. Bar 2 shows 2 of 4 shaded. Bar 3 shows 4 of 8 shaded."}
  },
  {
    id: "g5-maths-frac-a-q09",
    prompt: "Look at Laddoos on a plate. What fraction of the laddoos are marked?",
    options: [
      { id: "a", text: "4/6" },
      { id: "b", text: "6/10" },
      { id: "c", text: "10/4" },
      { id: "d", text: "4/10" }
    ],
    answerId: "d",
    explanation: "4 of the 10 laddoos are marked, so the fraction is 4/10.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 195\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Ten laddoos with four marked\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"195\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Laddoos on a plate</text>\n  <circle class=\"part marble\" cx=\"50\" cy=\"50\" r=\"22\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <circle class=\"part marble\" cx=\"120\" cy=\"50\" r=\"22\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <circle class=\"part marble\" cx=\"190\" cy=\"50\" r=\"22\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <circle class=\"part marble\" cx=\"260\" cy=\"50\" r=\"22\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <circle class=\"part marble\" cx=\"330\" cy=\"50\" r=\"22\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"50\" cy=\"110\" r=\"22\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"120\" cy=\"110\" r=\"22\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"190\" cy=\"110\" r=\"22\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"260\" cy=\"110\" r=\"22\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"330\" cy=\"110\" r=\"22\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"240\" y=\"180\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Orange rings mark the chosen laddoos.</text>\n</svg>", "alt": "Ten round laddoos in two rows. The first four have orange rings and a warmer fill."}
  },
  {
    id: "g5-maths-frac-a-q10",
    prompt: "Which of these is an improper fraction?",
    options: [
      { id: "a", text: "7/4" },
      { id: "b", text: "4/7" },
      { id: "c", text: "3/4" },
      { id: "d", text: "1/4" }
    ],
    answerId: "a",
    explanation: "An improper fraction has a numerator bigger than or equal to its denominator, and 7 is bigger than 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q11",
    prompt: "What is 12/18 in its simplest form?",
    options: [
      { id: "a", text: "6/9" },
      { id: "b", text: "4/6" },
      { id: "c", text: "2/3" },
      { id: "d", text: "3/2" }
    ],
    answerId: "c",
    explanation: "Dividing both 12 and 18 by their biggest common factor, 6, gives 2/3, while 6/9 and 4/6 are only partly simplified.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q12",
    prompt: "Which is greater: 1/5 or 1/8?",
    options: [
      { id: "a", text: "1/8" },
      { id: "b", text: "1/5" },
      { id: "c", text: "Both are equal" },
      { id: "d", text: "They cannot be compared" }
    ],
    answerId: "b",
    explanation: "With the same numerator, the smaller denominator means bigger pieces, so 1/5 is greater even though 8 is bigger than 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q13",
    prompt: "In a class of 30 students, 2/5 wear glasses. How many students wear glasses?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "18" },
      { id: "c", text: "15" },
      { id: "d", text: "12" }
    ],
    answerId: "d",
    explanation: "1/5 of 30 is 6, so 2/5 of 30 is 2 \u00d7 6 = 12, while 6 is the trap of stopping at 1/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q14",
    prompt: "What is 9/10 \u2212 4/10 in its simplest form?",
    options: [
      { id: "a", text: "13/20" },
      { id: "b", text: "5/20" },
      { id: "c", text: "1/2" },
      { id: "d", text: "1/5" }
    ],
    answerId: "c",
    explanation: "9/10 \u2212 4/10 = 5/10, which simplifies to 1/2 when we divide the top and bottom by 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q15",
    prompt: "Which improper fraction is equal to the mixed number 2 1/3?",
    options: [
      { id: "a", text: "7/3" },
      { id: "b", text: "5/3" },
      { id: "c", text: "6/3" },
      { id: "d", text: "3/7" }
    ],
    answerId: "a",
    explanation: "2 wholes make 6 thirds, and 1 more third gives 7/3, while 5/3 wrongly adds 2 + 3 for the top.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q16",
    prompt: "Look at the number line. Point P is at which fraction?",
    options: [
      { id: "a", text: "2/6" },
      { id: "b", text: "4/6" },
      { id: "c", text: "5/6" },
      { id: "d", text: "3/6" }
    ],
    answerId: "b",
    explanation: "The line is split into 6 equal parts. P sits on the fourth mark after 0, so P is at 4/6.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number line from 0 to 1 in sixths with point P\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Fractions on a number line</text>\n  <line class=\"axis\" x1=\"40\" y1=\"90\" x2=\"440\" y2=\"90\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"446,90 438,85 438,95\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"40.0\" y1=\"80\" x2=\"40.0\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"106.7\" y1=\"80\" x2=\"106.7\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"106.7\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1/6</text>\n  <line class=\"tick\" x1=\"173.3\" y1=\"80\" x2=\"173.3\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"173.3\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2/6</text>\n  <line class=\"tick\" x1=\"240.0\" y1=\"80\" x2=\"240.0\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"240.0\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3/6</text>\n  <line class=\"tick\" x1=\"306.7\" y1=\"80\" x2=\"306.7\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"306.7\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4/6</text>\n  <line class=\"tick\" x1=\"373.3\" y1=\"80\" x2=\"373.3\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"373.3\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5/6</text>\n  <line class=\"tick\" x1=\"440.0\" y1=\"80\" x2=\"440.0\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"440.0\" y=\"118\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <circle class=\"part point\" cx=\"306.7\" cy=\"90\" r=\"8\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"306.7\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">P</text>\n  <text class=\"label small\" x=\"240\" y=\"145\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The line from 0 to 1 is split into 6 equal parts.</text>\n</svg>", "alt": "A number line from 0 to 1 with marks at each sixth. A blue point P sits at the 4/6 mark."}
  },
  {
    id: "g5-maths-frac-a-q17",
    prompt: "Which list shows 3/11, 8/11 and 5/11 from smallest to largest?",
    options: [
      { id: "a", text: "8/11, 5/11, 3/11" },
      { id: "b", text: "3/11, 8/11, 5/11" },
      { id: "c", text: "5/11, 3/11, 8/11" },
      { id: "d", text: "3/11, 5/11, 8/11" }
    ],
    answerId: "d",
    explanation: "With the same denominator we simply order the numerators 3, 5, 8, so the order is 3/11, 5/11, 8/11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q18",
    prompt: "Which number goes in the box: 3/4 = \u2610/20?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "15" },
      { id: "c", text: "16" },
      { id: "d", text: "23" }
    ],
    answerId: "b",
    explanation: "The denominator is multiplied by 5 to go from 4 to 20, so the numerator must also be multiplied by 5, giving 15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q19",
    prompt: "A cricket over has 6 balls. A bowler has bowled 4 balls of the over. What fraction of the over has he bowled, in simplest form?",
    options: [
      { id: "a", text: "4/10" },
      { id: "b", text: "1/3" },
      { id: "c", text: "2/3" },
      { id: "d", text: "3/2" }
    ],
    answerId: "c",
    explanation: "He has bowled 4 of 6 balls, which is 4/6 = 2/3, while 1/3 is the part still left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q20",
    prompt: "A rangoli uses 48 diyas. 1/4 of them are red, 1/3 are blue and the rest are yellow. How many diyas are yellow?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "16" },
      { id: "c", text: "24" },
      { id: "d", text: "28" }
    ],
    answerId: "a",
    explanation: "Red is 48 \u00f7 4 = 12 and blue is 48 \u00f7 3 = 16, so yellow is 48 \u2212 12 \u2212 16 = 20.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q21",
    prompt: "Which of these fractions is the greatest?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "5/8" },
      { id: "c", text: "7/12" },
      { id: "d", text: "3/4" }
    ],
    answerId: "d",
    explanation: "Writing all of them with denominator 24 gives 18/24, 15/24, 14/24 and 16/24, so 3/4 is the greatest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q22",
    prompt: "In a class of 40 students, 3/8 are girls. How many more boys than girls are there?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "5" },
      { id: "c", text: "15" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "There are 3/8 \u00d7 40 = 15 girls and 40 \u2212 15 = 25 boys, so there are 25 \u2212 15 = 10 more boys.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q23",
    prompt: "Meera ate 2/9 of a cake and her brother ate 4/9 of it. What fraction of the cake is left, in simplest form?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "6/9" },
      { id: "c", text: "1/3" },
      { id: "d", text: "3/18" }
    ],
    answerId: "c",
    explanation: "Together they ate 6/9, so 9/9 \u2212 6/9 = 3/9 is left, which simplifies to 1/3, while 2/3 is the part eaten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q24",
    prompt: "Which fraction lies between 1/3 and 1/2 on the number line?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "5/12" },
      { id: "c", text: "2/3" },
      { id: "d", text: "3/5" }
    ],
    answerId: "b",
    explanation: "In twelfths, 1/3 = 4/12 and 1/2 = 6/12, so 5/12 lies between them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-frac-b-q01",
    prompt: "Look at Pizza slices left. What fraction of the pizza is still on the plate?",
    options: [
      { id: "a", text: "3/8" },
      { id: "b", text: "5/8" },
      { id: "c", text: "5/3" },
      { id: "d", text: "8/5" }
    ],
    answerId: "b",
    explanation: "5 of the 8 equal slices are shaded as left on the plate, so 5/8 remains.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Pizza with 5 of 8 slices shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"220\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Pizza slices left</text>\n  <path class=\"part slice shaded\" d=\"M 220 115 L 220.0 45.0 A 70 70 0 0 1 269.5 65.5 Z\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 115 L 269.5 65.5 A 70 70 0 0 1 290.0 115.0 Z\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 115 L 290.0 115.0 A 70 70 0 0 1 269.5 164.5 Z\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 115 L 269.5 164.5 A 70 70 0 0 1 220.0 185.0 Z\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 220 115 L 220.0 185.0 A 70 70 0 0 1 170.5 164.5 Z\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 220 115 L 170.5 164.5 A 70 70 0 0 1 150.0 115.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 220 115 L 150.0 115.0 A 70 70 0 0 1 170.5 65.5 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 220 115 L 170.5 65.5 A 70 70 0 0 1 220.0 45.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"220\" y=\"205\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Shaded slices are still on the plate.</text>\n</svg>", "alt": "A circle divided into 8 equal slices. Five slices are shaded."}
  },
  {
    id: "g5-maths-frac-b-q02",
    prompt: "What is the numerator of the fraction 4/9?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "9" },
      { id: "c", text: "13" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "The numerator is the top number, which tells how many parts we are counting, so it is 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q03",
    prompt: "A pizza is cut into 8 equal slices and 3 slices are left. What fraction of the pizza is left?",
    options: [
      { id: "a", text: "5/8" },
      { id: "b", text: "3/8" },
      { id: "c", text: "3/5" },
      { id: "d", text: "8/3" }
    ],
    answerId: "b",
    explanation: "3 slices out of 8 equal slices are left, so the fraction left is 3/8, while 5/8 is the part eaten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q04",
    prompt: "Which of these is NOT a unit fraction?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/7" },
      { id: "c", text: "1/100" },
      { id: "d", text: "3/10" }
    ],
    answerId: "d",
    explanation: "A unit fraction must have 1 as its numerator, but 3/10 has 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q05",
    prompt: "Which of these shows exactly 1/3 shaded?",
    options: [
      { id: "a", text: "A rectangle cut into 3 strips of different widths, with 1 strip shaded" },
      { id: "b", text: "A rectangle cut into 3 equal strips, with 1 strip shaded" },
      { id: "c", text: "A rectangle cut into 4 equal strips, with 1 strip shaded" },
      { id: "d", text: "A rectangle cut into 3 equal strips, with 2 strips shaded" }
    ],
    answerId: "b",
    explanation: "One-third means 1 of 3 EQUAL parts, so the strips must be equal and only one should be shaded.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q06",
    prompt: "Look at Take away the shaded strip. What is **7/10 \u2212 2/10**?",
    options: [
      { id: "a", text: "5/0" },
      { id: "b", text: "5/20" },
      { id: "c", text: "9/10" },
      { id: "d", text: "5/10" }
    ],
    answerId: "d",
    explanation: "Subtract the numerators and keep the denominator: 7 \u2212 2 = 5, so 5/10.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Bars for subtracting two tenths from seven tenths\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Take away the shaded strip</text>\n  <text class=\"label\" x=\"30\" y=\"55\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">7/10</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"106.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"142.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"178.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"214.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"250.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"286.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"322.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"358.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"394.0\" y=\"38\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30\" y=\"95\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u22122/10</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"106.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"142.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"178.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"214.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"286.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"322.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"358.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"394.0\" y=\"78\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30\" y=\"135\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <rect class=\"part piece\" x=\"70.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"106.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"142.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"178.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"214.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"286.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"322.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"358.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"394.0\" y=\"118\" width=\"36.0\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part missing\" x=\"70\" y=\"118\" width=\"360\" height=\"26\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label small\" x=\"240\" y=\"170\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Keep the denominator. Subtract only the tops.</text>\n</svg>", "alt": "A bar with 7 of 10 shaded green, a bar with 2 of 10 shaded red, and an empty dashed bar for the difference."}
  },
  {
    id: "g5-maths-frac-b-q07",
    prompt: "Look at the two bars. Which shaded fraction is **greater**?",
    options: [
      { id: "a", text: "1/8" },
      { id: "b", text: "1/5" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "b",
    explanation: "With the same numerator, the smaller denominator means larger pieces. 1/5 > 1/8.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Bars comparing one fifth and one eighth\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Same numerator, different pieces</text>\n  <text class=\"label\" x=\"30\" y=\"58\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1/5</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"40\" width=\"72.0\" height=\"28\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"142.0\" y=\"40\" width=\"72.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"214.0\" y=\"40\" width=\"72.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"286.0\" y=\"40\" width=\"72.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"358.0\" y=\"40\" width=\"72.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30\" y=\"108\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1/8</text>\n  <rect class=\"part piece shaded\" x=\"70.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"115.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"160.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"205.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"250.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"295.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"340.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"385.0\" y=\"90\" width=\"45.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"240\" y=\"145\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Both bars are the same length.</text>\n</svg>", "alt": "Two equal-length bars. The top is cut into 5 with 1 shaded. The bottom is cut into 8 with 1 shaded."}
  },
  {
    id: "g5-maths-frac-b-q08",
    prompt: "Look at Which bar matches Bar 1? Bar 1 shows 2/3. Which other bar shows the **same amount**?",
    options: [
      { id: "a", text: "Bar 2" },
      { id: "b", text: "Bar 3" },
      { id: "c", text: "Bar 4" },
      { id: "d", text: "None of them" }
    ],
    answerId: "a",
    explanation: "2/3 = 4/6, so Bar 2 matches. Bar 3 is 3/6 = 1/2 and Bar 4 is 1/4.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 225\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four bars find which matches two thirds\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"225\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which bar matches Bar 1?</text>\n  <text class=\"label\" x=\"40\" y=\"55\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 1</text>\n  <rect class=\"part piece shaded\" x=\"100.0\" y=\"38\" width=\"106.7\" height=\"28\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"206.7\" y=\"38\" width=\"106.7\" height=\"28\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"313.3\" y=\"38\" width=\"106.7\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40\" y=\"95\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 2</text>\n  <rect class=\"part piece shaded\" x=\"100.0\" y=\"78\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"153.3\" y=\"78\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"206.7\" y=\"78\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"260.0\" y=\"78\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#80cbc4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"313.3\" y=\"78\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"366.7\" y=\"78\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40\" y=\"135\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 3</text>\n  <rect class=\"part piece shaded\" x=\"100.0\" y=\"118\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"153.3\" y=\"118\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"206.7\" y=\"118\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"260.0\" y=\"118\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"313.3\" y=\"118\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"366.7\" y=\"118\" width=\"53.3\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40\" y=\"175\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Bar 4</text>\n  <rect class=\"part piece shaded\" x=\"100.0\" y=\"158\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"180.0\" y=\"158\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"260.0\" y=\"158\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"340.0\" y=\"158\" width=\"80.0\" height=\"28\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"240\" y=\"210\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All bars are the same length.</text>\n</svg>", "alt": "Four equal-length bars. Bar 1 shows 2 of 3 shaded. Bar 2 shows 4 of 6. Bar 3 shows 3 of 6. Bar 4 shows 1 of 4."}
  },
  {
    id: "g5-maths-frac-b-q09",
    prompt: "Look at Take 3/5 of the dots. How many dots are shaded, and what is 3/5 of 20?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "15" },
      { id: "c", text: "4" },
      { id: "d", text: "12" }
    ],
    answerId: "d",
    explanation: "20 \u00f7 5 = 4 dots in each group. Three groups make 3 \u00d7 4 = 12.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Twenty dots with twelve shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Take 3/5 of the dots</text>\n  <circle class=\"part marble\" cx=\"40\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"80\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"120\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"160\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"200\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"240\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"280\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"320\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"360\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"400\" cy=\"50\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"40\" cy=\"95\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"80\" cy=\"95\" r=\"14\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"120\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"160\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"200\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"240\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"280\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"320\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"360\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part marble\" cx=\"400\" cy=\"95\" r=\"14\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"240\" y=\"155\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">20 dots in all. Blue dots show 3 out of 5 equal groups.</text>\n</svg>", "alt": "Twenty dots in two rows. The first twelve are shaded blue."}
  },
  {
    id: "g5-maths-frac-b-q10",
    prompt: "Look at More than one whole. How many quarters are shaded in all, and what mixed number is that?",
    options: [
      { id: "a", text: "7/4 = 1 3/4" },
      { id: "b", text: "7/4 = 1 1/4" },
      { id: "c", text: "3/4 = 3/4" },
      { id: "d", text: "4/4 = 1" }
    ],
    answerId: "a",
    explanation: "4 quarters + 3 quarters = 7/4. That is 1 whole and 3/4 left over, written 1 3/4.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 225\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Seven quarter pieces filling one whole and three quarters\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"225\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">More than one whole</text>\n  <path class=\"part slice shaded\" d=\"M 120 110 L 120.0 55.0 A 55 55 0 0 1 175.0 110.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 110 L 175.0 110.0 A 55 55 0 0 1 120.0 165.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 110 L 120.0 165.0 A 55 55 0 0 1 65.0 110.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 120 110 L 65.0 110.0 A 55 55 0 0 1 120.0 55.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 300 110 L 300.0 55.0 A 55 55 0 0 1 355.0 110.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 300 110 L 355.0 110.0 A 55 55 0 0 1 300.0 165.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice shaded\" d=\"M 300 110 L 300.0 165.0 A 55 55 0 0 1 245.0 110.0 Z\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part slice\" d=\"M 300 110 L 245.0 110.0 A 55 55 0 0 1 300.0 55.0 Z\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"120\" y=\"185\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4 quarters</text>\n  <text class=\"label\" x=\"300\" y=\"185\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3 quarters</text>\n  <text class=\"label small\" x=\"240\" y=\"210\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each circle is one whole cut into 4 equal parts.</text>\n</svg>", "alt": "Two circles each cut into 4 equal parts. The first circle is fully shaded. The second has 3 parts shaded."}
  },
  {
    id: "g5-maths-frac-b-q11",
    prompt: "Look at Simplify the shaded fraction. What is **6/8** in simplest form?",
    options: [
      { id: "a", text: "6/4" },
      { id: "b", text: "3/8" },
      { id: "c", text: "3/4" },
      { id: "d", text: "2/8" }
    ],
    answerId: "c",
    explanation: "Divide top and bottom by 2: 6 \u00f7 2 = 3 and 8 \u00f7 2 = 4, so 3/4.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 155\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Bar with 6 of 8 shaded to simplify\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"155\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Simplify the shaded fraction</text>\n  <rect class=\"part piece shaded\" x=\"40.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"90.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"140.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"190.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"240.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece shaded\" x=\"290.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#ffab91\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"340.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"390.0\" y=\"50\" width=\"50.0\" height=\"45\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"220\" y=\"125\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">6 pieces are shaded out of 8 equal pieces.</text>\n  <text class=\"label small\" x=\"220\" y=\"142\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Divide top and bottom by the same number.</text>\n</svg>", "alt": "A bar divided into 8 equal pieces with the first 6 shaded."}
  },
  {
    id: "g5-maths-frac-b-q12",
    prompt: "Which is greater: 3/5 or 3/8?",
    options: [
      { id: "a", text: "3/8" },
      { id: "b", text: "Both are equal" },
      { id: "c", text: "3/5" },
      { id: "d", text: "They cannot be compared" }
    ],
    answerId: "c",
    explanation: "With the same numerator, fifths are bigger pieces than eighths, so 3/5 is greater.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q13",
    prompt: "A basket has 32 mangoes and 3/4 of them are ripe. How many mangoes are ripe?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "12" },
      { id: "c", text: "28" },
      { id: "d", text: "24" }
    ],
    answerId: "d",
    explanation: "1/4 of 32 is 8, so 3/4 of 32 is 3 \u00d7 8 = 24, while 8 is the number of unripe mangoes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q14",
    prompt: "What is 7/8 \u2212 3/8 in its simplest form?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "4/16" },
      { id: "c", text: "1/4" },
      { id: "d", text: "10/8" }
    ],
    answerId: "a",
    explanation: "7/8 \u2212 3/8 = 4/8, which simplifies to 1/2 when we divide the top and bottom by 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q15",
    prompt: "Look at Place the flag. The dashed flag sits at which mark?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "2/4" },
      { id: "c", text: "3/4" },
      { id: "d", text: "1" }
    ],
    answerId: "c",
    explanation: "The flag is above the third quarter mark after 0, which is 3/4.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number line in quarters with flag at three quarters\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Place the flag</text>\n  <line class=\"axis\" x1=\"40\" y1=\"100\" x2=\"440\" y2=\"100\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"40\" y1=\"90\" x2=\"40\" y2=\"110\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40\" y=\"128\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"140\" y1=\"90\" x2=\"140\" y2=\"110\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140\" y=\"128\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1/4</text>\n  <line class=\"tick\" x1=\"240\" y1=\"90\" x2=\"240\" y2=\"110\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"240\" y=\"128\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2/4</text>\n  <line class=\"tick\" x1=\"340\" y1=\"90\" x2=\"340\" y2=\"110\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"340\" y=\"128\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3/4</text>\n  <line class=\"tick\" x1=\"440\" y1=\"90\" x2=\"440\" y2=\"110\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"440\" y=\"128\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <rect class=\"part missing\" x=\"320\" y=\"55\" width=\"40\" height=\"28\" rx=\"4\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label\" x=\"340\" y=\"75\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <line class=\"arrow\" x1=\"340\" y1=\"85\" x2=\"340\" y2=\"95\" stroke=\"#e65100\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"240\" y=\"155\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The dashed flag marks one of the quarter points.</text>\n</svg>", "alt": "A number line from 0 to 1 marked in quarters. A dashed orange flag sits above the 3/4 mark."}
  },
  {
    id: "g5-maths-frac-b-q16",
    prompt: "A number line from 0 to 1 is divided into 8 equal parts. A point is at the 6th mark after 0. Which fraction names this point?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "6/10" },
      { id: "c", text: "3/4" },
      { id: "d", text: "1/6" }
    ],
    answerId: "c",
    explanation: "The point is at 6/8, and 6/8 simplifies to 3/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q17",
    prompt: "Which list shows 5/12, 11/12 and 7/12 from largest to smallest?",
    options: [
      { id: "a", text: "11/12, 7/12, 5/12" },
      { id: "b", text: "5/12, 7/12, 11/12" },
      { id: "c", text: "7/12, 11/12, 5/12" },
      { id: "d", text: "11/12, 5/12, 7/12" }
    ],
    answerId: "a",
    explanation: "With the same denominator, larger numerators mean larger fractions, so the order is 11/12, 7/12, 5/12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q18",
    prompt: "Which number goes in the box: 4/5 = 24/\u2610?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "25" },
      { id: "c", text: "29" },
      { id: "d", text: "30" }
    ],
    answerId: "d",
    explanation: "The numerator is multiplied by 6 to go from 4 to 24, so the denominator must also be multiplied by 6, giving 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q19",
    prompt: "A family is travelling 60 km to their village and has finished 5/6 of the journey. How many km are left?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "10" },
      { id: "c", text: "12" },
      { id: "d", text: "50" }
    ],
    answerId: "b",
    explanation: "5/6 of 60 km is 50 km, so 60 \u2212 50 = 10 km are left, while 50 is the distance already covered.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q20",
    prompt: "Look at Balls in an over. What fraction of the over is done, in **simplest form**?",
    options: [
      { id: "a", text: "3/6" },
      { id: "b", text: "1/2" },
      { id: "c", text: "2/3" },
      { id: "d", text: "6/3" }
    ],
    answerId: "b",
    explanation: "3 out of 6 balls are done, so 3/6. Dividing top and bottom by 3 gives 1/2.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Six balls with first three shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Balls in an over</text>\n  <circle class=\"part marble\" cx=\"60\" cy=\"90\" r=\"24\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"60\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <circle class=\"part marble\" cx=\"120\" cy=\"90\" r=\"24\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"120\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <circle class=\"part marble\" cx=\"180\" cy=\"90\" r=\"24\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"180\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <circle class=\"part marble\" cx=\"240\" cy=\"90\" r=\"24\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"240\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <circle class=\"part marble\" cx=\"300\" cy=\"90\" r=\"24\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"300\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <circle class=\"part marble\" cx=\"360\" cy=\"90\" r=\"24\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"360\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <text class=\"label small\" x=\"240\" y=\"140\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Blue balls have already been bowled.</text>\n  <text class=\"label small\" x=\"240\" y=\"156\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">An over has 6 balls in all.</text>\n</svg>", "alt": "Six cricket balls in a row numbered 1 to 6. The first three are shaded blue."}
  },
  {
    id: "g5-maths-frac-b-q21",
    prompt: "Which of these fractions is the smallest?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "3/5" },
      { id: "c", text: "4/7" },
      { id: "d", text: "5/9" }
    ],
    answerId: "d",
    explanation: "Each fraction is just over half, and the amount over half shrinks from 2/3 to 5/9, which makes 5/9 the smallest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q22",
    prompt: "A T20 innings has 20 overs. A team has already batted 15 overs. What fraction of the innings is still left, in simplest form?",
    options: [
      { id: "a", text: "3/4" },
      { id: "b", text: "1/4" },
      { id: "c", text: "1/5" },
      { id: "d", text: "1/3" }
    ],
    answerId: "b",
    explanation: "20 \u2212 15 = 5 overs are left, which is 5/20 = 1/4 of the innings, while 3/4 is the part already played.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q23",
    prompt: "Amma baked a cake. She gave 3/10 of it to a neighbour and 5/10 to her sister. What fraction of the cake does she have left, in simplest form?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "4/5" },
      { id: "c", text: "8/10" },
      { id: "d", text: "1/2" }
    ],
    answerId: "a",
    explanation: "She gave away 8/10, so 10/10 \u2212 8/10 = 2/10 is left, which simplifies to 1/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q24",
    prompt: "Ankit gives away 2/5 of his marbles, which is 14 marbles. How many marbles did he have at first?",
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "28" },
      { id: "c", text: "35" },
      { id: "d", text: "70" }
    ],
    answerId: "c",
    explanation: "If 2/5 is 14 marbles, then 1/5 is 7 marbles, so all 5/5 is 5 \u00d7 7 = 35 marbles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf55",
    title: "Fractions",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "fraction-bar",
    speak: "A fraction names equal parts of a whole. Bottom is parts; top is how many you have.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "fraction-bar",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Denominator", reveal: "Equal parts in the whole", emoji: "\u2797" },
      { label: "Numerator", reveal: "Parts you count", emoji: "\u2728" },
      { label: "Unit fraction", reveal: "Numerator is 1", emoji: "1\ufe0f\u20e3" },
      { label: "Equivalent", reveal: "Same amount, different look", emoji: "\u2696\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Roti cut into 4; Ravi eats 1. Fraction eaten?",
    options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "1/4" },
        { id: "c", text: "3/4" },
        { id: "d", text: "4/1" }
    ],
    answerId: "b",
    why: "One of four equal parts is 1/4.",
    visual: "fraction-bar",
    speak: "Roti cut into 4; Ravi eats 1. Fraction eaten?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Top = parts you have", "Bottom = equal parts", "Compare carefully", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5MathsFractions: ChapterDef = {
  id: "fractions-g5",
  title: "Fractions",
  emoji: "\\ud83c\\udf55",
  blurb: "Parts of a whole",
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
  paperTopics: ["fractions", "decimals"],
};

export const g5MathsFractionsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
