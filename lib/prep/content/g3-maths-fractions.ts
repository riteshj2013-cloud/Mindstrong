import type { ChapterDef, PrepQuestion } from "../types";

/** Fractions - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-maths-fractions-a-q01",
    prompt: "Meena folds a paper strip into equal parts and colours some of the parts, as shown. What fraction of the strip is coloured?",
    options: [
      { id: "a", text: "2/5" },
      { id: "b", text: "2/3" },
      { id: "c", text: "3/5" },
      { id: "d", text: "1/5" }
    ],
    answerId: "a",
    explanation: "The strip has 5 equal parts and 2 of them are coloured, so 2/5 of the strip is coloured. 2/3 is tempting because it compares the 2 coloured parts with the 3 white parts, but the bottom number must count ALL the parts of the strip.",
    hints: ["Count every equal part of Meena's strip for the bottom number, then count only the coloured parts for the top number."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 390 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A paper strip cut into 5 equal parts with 2 parts coloured\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"390\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"195\" y=\"26\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Meena's paper strip</text>\n  <g class=\"part frac-fig bar\">\n  <rect class=\"part piece\" x=\"45\" y=\"50\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"105\" y=\"50\" width=\"60\" height=\"60\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"165\" y=\"50\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"225\" y=\"50\" width=\"60\" height=\"60\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"285\" y=\"50\" width=\"60\" height=\"60\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>", "alt": "A long paper strip cut into 5 equal parts. The 2nd and 4th parts are coloured orange; the other 3 are white."}
  },
  {
    id: "g3-maths-fractions-a-q02",
    prompt: "Ravi ate some slices of a pizza and wrote the fraction 5/8 for what he ate. What does the 8 in his fraction tell us?",
    options: [
      { id: "a", text: "Ravi ate 8 slices." },
      { id: "b", text: "8 slices were left over." },
      { id: "c", text: "Each slice was 8 cm wide." },
      { id: "d", text: "The pizza was cut into 8 equal slices." }
    ],
    answerId: "d",
    explanation: "The bottom number, the denominator, tells how many equal slices the whole pizza was cut into: 8. The top number, 5, tells how many slices Ravi ate. 'Ravi ate 8 slices' is tempting because 8 is the bigger number, but what he ate is shown by the top number.",
    hints: ["The bottom number of a fraction describes the whole pizza, not the slices Ravi ate."]
  },
  {
    id: "g3-maths-fractions-a-q03",
    prompt: "In each shape, 1 part out of 3 is shaded. Pinki says, 'So the shaded part is 1/3 of the shape.' For which shape is Pinki RIGHT?",
    options: [
      { id: "a", text: "Shape A" },
      { id: "b", text: "Shape B" },
      { id: "c", text: "Shape C" },
      { id: "d", text: "Shape D" }
    ],
    answerId: "c",
    explanation: "Only Shape C is cut into 3 EQUAL parts, so its one shaded part really is 1/3. Shape D is tempting because it also has 3 parts with 1 shaded, but its top part is much smaller than the other two, so it is not a third.",
    hints: ["Before you call a part a third, check that all three parts of the shape are exactly the same size."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 650 194\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four shapes A to D, each cut into 3 parts with 1 part shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"650\" height=\"194\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"325.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Is 1 part out of 3 shaded the same as 1/3?</text>\n  <g class=\"part rule\">\n  <rect class=\"part panel\" x=\"10\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig bar\">\n  <rect class=\"part piece\" x=\"25\" y=\"57\" width=\"24\" height=\"80\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"49\" y=\"57\" width=\"36\" height=\"80\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"85\" y=\"57\" width=\"60\" height=\"80\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"85.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape A</text>\n  <rect class=\"part panel\" x=\"170\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig shape\">\n  <polygon class=\"part piece shaded\" points=\"200,44 245,44 245,134 200,134\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"245,44 290,44 290,89 245,89\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"245,89 290,89 290,134 245,134\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"245.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape B</text>\n  <rect class=\"part panel\" x=\"330\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 405 100 L 405 48 A 52 52 0 0 1 450.033 126 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 405 100 L 450.033 126 A 52 52 0 0 1 359.967 126 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 405 100 L 359.967 126 A 52 52 0 0 1 405 48 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"405.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape C</text>\n  <rect class=\"part panel\" x=\"490\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig shape\">\n  <polygon class=\"part piece shaded\" points=\"565,44 585,79 545,79\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"545,79 585,79 605,114 525,114\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"525,114 605,114 625,149 505,149\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"565.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape D</text>\n  </g>\n</svg>", "alt": "Four shapes, each with 3 parts and 1 shaded part. Shape A: a rectangle cut into 3 strips of different widths, with the middle strip shaded. Shape B: a square cut into a left half and two small squares on the right, with the left half shaded. Shape C: a circle cut into 3 equal slices, with 1 slice shaded. Shape D: a triangle cut by two flat lines into 3 parts, with the small top part shaded."}
  },
  {
    id: "g3-maths-fractions-a-q04",
    prompt: "Didi cuts a watermelon into 6 equal slices. Rohit gets 1 slice, and his cousins share all the other slices. What part of the watermelon does Rohit get?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "1/6" },
      { id: "c", text: "5/6" },
      { id: "d", text: "6/1" }
    ],
    answerId: "b",
    explanation: "The whole watermelon is 6 equal slices and Rohit gets 1 of them, so he gets 1/6. 1/5 is tempting because his cousins have 5 slices, but the bottom number must count all 6 slices of the watermelon, including Rohit's.",
    hints: ["The whole watermelon gives the bottom number, so count every slice Didi cut. Rohit's share gives the top number."]
  },
  {
    id: "g3-maths-fractions-a-q05",
    prompt: "Nandini has 28 glass bangles. She wears 1/4 of them to a wedding. How many bangles does she wear?",
    options: [
      { id: "a", text: "4 bangles" },
      { id: "b", text: "7 bangles" },
      { id: "c", text: "24 bangles" },
      { id: "d", text: "14 bangles" }
    ],
    answerId: "b",
    explanation: "1/4 means share the 28 bangles into 4 equal groups and take one group: 28 \u00f7 4 = 7. 24 is tempting if you take 4 away from 28, but 1/4 means one of four equal groups, not 4 bangles.",
    hints: ["Share Nandini's 28 bangles into equal groups, as many groups as the bottom number says. How many are in one group?"]
  },
  {
    id: "g3-maths-fractions-a-q06",
    prompt: "A frog hops from 0 towards 1 in equal jumps, as the number line shows. Which fraction tells where the frog is sitting now?",
    options: [
      { id: "a", text: "3/6" },
      { id: "b", text: "2/5" },
      { id: "c", text: "3/5" },
      { id: "d", text: "5/3" }
    ],
    answerId: "c",
    explanation: "The space from 0 to 1 is cut into 5 equal gaps, and the frog has hopped 3 of them, so it sits at 3/5. 3/6 is tempting if you count the 6 tick marks, but a fraction on a number line counts the equal gaps between 0 and 1.",
    hints: ["Count the equal gaps between 0 and 1, not the tick marks. Then count the frog's hops."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number line from 0 to 1 cut into equal parts, with a frog after three hops\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220\" y=\"20\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">The frog's hops</text>\n  <g class=\"part numline\">\n  <line class=\"axis\" x1=\"36\" y1=\"80\" x2=\"404\" y2=\"80\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <polygon class=\"arrow\" points=\"412,80 402,74 402,86\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"28,80 38,74 38,86\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"69\" x2=\"50\" y2=\"91\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"50\" y=\"112\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"118\" y1=\"69\" x2=\"118\" y2=\"91\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"186\" y1=\"69\" x2=\"186\" y2=\"91\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"254\" y1=\"69\" x2=\"254\" y2=\"91\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"322\" y1=\"69\" x2=\"322\" y2=\"91\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"390\" y1=\"69\" x2=\"390\" y2=\"91\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"390\" y=\"112\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <path class=\"arrow hop\" d=\"M 50 68 Q 84 30 118 68\" fill=\"none\" stroke=\"#2e7d32\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <path class=\"arrow hop\" d=\"M 118 68 Q 152 30 186 68\" fill=\"none\" stroke=\"#2e7d32\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <path class=\"arrow hop\" d=\"M 186 68 Q 220 30 254 68\" fill=\"none\" stroke=\"#2e7d32\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part point\" cx=\"254\" cy=\"80\" r=\"9\" fill=\"#66bb6a\" stroke=\"#1b5e20\" stroke-width=\"2\"/>\n  <text class=\"label point-label\" x=\"254\" y=\"112\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1b5e20\">frog</text>\n  </g>\n</svg>", "alt": "A number line from 0 to 1 with tick marks cutting it into 5 equal gaps. Dotted hop arrows show the frog jumping from 0 over three gaps; the frog sits on the 3rd mark after 0."}
  },
  {
    id: "g3-maths-fractions-a-q07",
    prompt: "Kabir drank 3/8 of a bottle of nimbu pani. Sana drank 5/8 of a bottle of the same size. Which sentence is true?",
    options: [
      { id: "a", text: "Sana drank more." },
      { id: "b", text: "Kabir drank more." },
      { id: "c", text: "They drank the same amount." },
      { id: "d", text: "We cannot tell without the bottle size." }
    ],
    answerId: "a",
    explanation: "Both amounts are eighths of same-size bottles, so compare the top numbers: 5 eighths is more than 3 eighths. 'They drank the same amount' is tempting because both fractions have 8 at the bottom, but the bottom number only tells the size of each part.",
    hints: ["Both fractions have the same bottom number, so every part of the bottle is the same size. Compare how many parts each child drank."]
  },
  {
    id: "g3-maths-fractions-a-q08",
    prompt: "Four same-size rotis are each shared equally: one among 3 friends, one among 6 friends, one among 4 friends and one among 8 friends. Who gets the BIGGEST piece?",
    options: [
      { id: "a", text: "each of the 8 friends" },
      { id: "b", text: "each of the 3 friends" },
      { id: "c", text: "each of the 6 friends" },
      { id: "d", text: "each of the 4 friends" }
    ],
    answerId: "b",
    explanation: "The fewer people share a roti, the bigger each piece: 1/3 is bigger than 1/4, 1/6 and 1/8. 'Each of the 8 friends' is tempting because 8 is the biggest number, but more sharers means smaller pieces.",
    hints: ["Imagine a roti shared by more and more friends. Do the pieces grow or shrink as friends join?"]
  },
  {
    id: "g3-maths-fractions-a-q09",
    prompt: "Jaya paints 2/7 of a wall on Monday and 3/7 of the same wall on Tuesday. How much of the wall has she painted so far?",
    options: [
      { id: "a", text: "5/14" },
      { id: "b", text: "1/7" },
      { id: "c", text: "5/7" },
      { id: "d", text: "6/7" }
    ],
    answerId: "c",
    explanation: "Both parts are sevenths of the same wall, so add the top numbers: 2 sevenths + 3 sevenths = 5 sevenths, 5/7. 5/14 is tempting if you add the bottom numbers too, but the wall is still cut into 7 equal parts; only the number of painted parts grows.",
    hints: ["Monday's and Tuesday's parts are the same size. Count the painted parts together; does the size of each part change?"]
  },
  {
    id: "g3-maths-fractions-a-q10",
    prompt: "Four same-size rotis are cut into equal pieces and some pieces are shaded. Three rotis have the SAME amount shaded. Which roti is the odd one out?",
    options: [
      { id: "a", text: "Roti A" },
      { id: "b", text: "Roti B" },
      { id: "c", text: "Roti C" },
      { id: "d", text: "Roti D" }
    ],
    answerId: "c",
    explanation: "The rotis with 2 of 4, 4 of 8 and 3 of 6 slices shaded each have exactly half shaded. Roti C has only 2 of 6 slices shaded, which is one third. Roti B is tempting because its shaded slices are spread out, but 4 of 8 equal slices is still half.",
    hints: ["For each roti, check whether the shaded slices would cover exactly half of it if you pushed them together."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 650 194\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four same-size rotis A to D cut into equal slices with some slices shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"650\" height=\"194\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"325.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Same-size rotis</text>\n  <g class=\"part rule\">\n  <rect class=\"part panel\" x=\"10\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 85 100 L 85 48 A 52 52 0 0 1 137 100 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 85 100 L 137 100 A 52 52 0 0 1 85 152 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 85 100 L 85 152 A 52 52 0 0 1 33 100 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 85 100 L 33 100 A 52 52 0 0 1 85 48 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"85.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Roti A</text>\n  <rect class=\"part panel\" x=\"170\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 245 100 L 245 48 A 52 52 0 0 1 281.77 63.23 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 245 100 L 281.77 63.23 A 52 52 0 0 1 297 100 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 245 100 L 297 100 A 52 52 0 0 1 281.77 136.77 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 245 100 L 281.77 136.77 A 52 52 0 0 1 245 152 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 245 100 L 245 152 A 52 52 0 0 1 208.23 136.77 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 245 100 L 208.23 136.77 A 52 52 0 0 1 193 100 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 245 100 L 193 100 A 52 52 0 0 1 208.23 63.23 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 245 100 L 208.23 63.23 A 52 52 0 0 1 245 48 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"245.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Roti B</text>\n  <rect class=\"part panel\" x=\"330\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 405 100 L 405 48 A 52 52 0 0 1 450.033 74 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 405 100 L 450.033 74 A 52 52 0 0 1 450.033 126 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 405 100 L 450.033 126 A 52 52 0 0 1 405 152 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 405 100 L 405 152 A 52 52 0 0 1 359.967 126 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 405 100 L 359.967 126 A 52 52 0 0 1 359.967 74 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 405 100 L 359.967 74 A 52 52 0 0 1 405 48 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"405.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Roti C</text>\n  <rect class=\"part panel\" x=\"490\" y=\"32\" width=\"150\" height=\"150\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 565 100 L 565 48 A 52 52 0 0 1 610.033 74 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 565 100 L 610.033 74 A 52 52 0 0 1 610.033 126 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 565 100 L 610.033 126 A 52 52 0 0 1 565 152 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 565 100 L 565 152 A 52 52 0 0 1 519.967 126 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 565 100 L 519.967 126 A 52 52 0 0 1 519.967 74 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 565 100 L 519.967 74 A 52 52 0 0 1 565 48 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"565.0\" y=\"174\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Roti D</text>\n  </g>\n</svg>", "alt": "Four same-size round rotis. Roti A: 4 equal slices with 2 next to each other shaded. Roti B: 8 equal slices with every other slice shaded (4 shaded). Roti C: 6 equal slices with 2 opposite slices shaded. Roti D: 6 equal slices with 3 next to each other shaded."}
  },
  {
    id: "g3-maths-fractions-a-q11",
    prompt: "Every row of this fraction wall is the same length. Two thirds are shaded. How many sixths together are exactly as long as the shaded part?",
    options: [
      { id: "a", text: "2 sixths" },
      { id: "b", text: "4 sixths" },
      { id: "c", text: "3 sixths" },
      { id: "d", text: "6 sixths" }
    ],
    answerId: "b",
    explanation: "Each third is exactly as long as 2 sixths, so 2 thirds = 2 + 2 = 4 sixths, and 2/3 = 4/6. 2 sixths is tempting because 2 thirds are shaded, but a sixth is only half as long as a third.",
    hints: ["Run your finger down from the end of the shaded thirds to the sixths row, then count the sixths up to that point."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 450 216\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A fraction wall with rows for 1 whole, halves, thirds and sixths; two thirds are shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"450\" height=\"216\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"225\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Fraction wall</text>\n  <g class=\"part wall\">\n  <g class=\"part frac-fig bar\">\n  <rect class=\"part piece\" x=\"70\" y=\"36\" width=\"360\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label\" x=\"62\" y=\"59\" font-size=\"12\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">1 whole</text>\n  <text class=\"label small\" x=\"250\" y=\"59\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1</text>\n  <g class=\"part frac-fig bar\">\n  <rect class=\"part piece\" x=\"70\" y=\"80\" width=\"180\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"250\" y=\"80\" width=\"180\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label\" x=\"62\" y=\"103\" font-size=\"12\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">halves</text>\n  <text class=\"label small\" x=\"160\" y=\"103\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/2</text>\n  <text class=\"label small\" x=\"340\" y=\"103\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/2</text>\n  <g class=\"part frac-fig bar\">\n  <rect class=\"part piece shaded\" x=\"70\" y=\"124\" width=\"120\" height=\"36\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"190\" y=\"124\" width=\"120\" height=\"36\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"310\" y=\"124\" width=\"120\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label\" x=\"62\" y=\"147\" font-size=\"12\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">thirds</text>\n  <text class=\"label small\" x=\"130\" y=\"147\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/3</text>\n  <text class=\"label small\" x=\"250\" y=\"147\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/3</text>\n  <text class=\"label small\" x=\"370\" y=\"147\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/3</text>\n  <g class=\"part frac-fig bar\">\n  <rect class=\"part piece\" x=\"70\" y=\"168\" width=\"60\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"130\" y=\"168\" width=\"60\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"190\" y=\"168\" width=\"60\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"250\" y=\"168\" width=\"60\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"310\" y=\"168\" width=\"60\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"370\" y=\"168\" width=\"60\" height=\"36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label\" x=\"62\" y=\"191\" font-size=\"12\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">sixths</text>\n  <text class=\"label small\" x=\"100\" y=\"191\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/6</text>\n  <text class=\"label small\" x=\"160\" y=\"191\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/6</text>\n  <text class=\"label small\" x=\"220\" y=\"191\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/6</text>\n  <text class=\"label small\" x=\"280\" y=\"191\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/6</text>\n  <text class=\"label small\" x=\"340\" y=\"191\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/6</text>\n  <text class=\"label small\" x=\"400\" y=\"191\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1/6</text>\n  </g>\n</svg>", "alt": "A fraction wall of four rows, all the same length: 1 whole; 2 halves; 3 thirds with the first 2 shaded; 6 sixths."}
  },
  {
    id: "g3-maths-fractions-a-q12",
    prompt: "A school buys 24 saplings for Van Mahotsav. Class 3 plants 3/8 of them on Monday. How many saplings are still waiting to be planted?",
    options: [
      { id: "a", text: "9 saplings" },
      { id: "b", text: "21 saplings" },
      { id: "c", text: "16 saplings" },
      { id: "d", text: "15 saplings" }
    ],
    answerId: "d",
    explanation: "1/8 of 24 is 24 \u00f7 8 = 3, so 3/8 is 3 \u00d7 3 = 9 saplings planted. 24 \u2212 9 = 15 are still waiting. 9 is tempting, but that is the number already planted, not the number left.",
    hints: ["Find how many saplings make one eighth of 24. Then work out how many were planted on Monday and take that away."]
  },
  {
    id: "g3-maths-fractions-a-q13",
    prompt: "Fill the box so that the two fractions are equal:  3/4 = \u25a1/12",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "11" },
      { id: "c", text: "6" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "4 \u00d7 3 = 12, so the bottom number was multiplied by 3. Multiply the top by 3 as well: 3 \u00d7 3 = 9, so 3/4 = 9/12. 11 is tempting if you add 8 to the top because 8 was added to the bottom, but adding the same number does not keep fractions equal.",
    hints: ["Ask what the bottom number 4 was multiplied by to make 12. Then do exactly the same to the top number."]
  },
  {
    id: "g3-maths-fractions-a-q14",
    prompt: "Look at Figures 1, 2 and 3. The shaded slices follow a pattern. If the pattern continues, what fraction of Figure 4 will be shaded?",
    options: [
      { id: "a", text: "6/8" },
      { id: "b", text: "7/8" },
      { id: "c", text: "8/8" },
      { id: "d", text: "1/8" }
    ],
    answerId: "b",
    explanation: "Figures 1, 2 and 3 have 1, 3 and 5 of their 8 slices shaded, so 2 more slices are shaded each time. Figure 4 will have 5 + 2 = 7 shaded: 7/8. 6/8 is tempting if you add only 1 slice, but the pattern grows by 2 slices each time.",
    hints: ["Count the shaded slices in Figures 1, 2 and 3. How many slices are added from one figure to the next?"],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 540 186\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Three circles each cut into 8 equal slices with a growing number of shaded slices, and a fourth circle with a question mark\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"540\" height=\"186\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"270\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">What comes next?</text>\n  <g class=\"part pattern\">\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 75 95 L 75 45 A 50 50 0 0 1 110.355 59.645 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 75 95 L 110.355 59.645 A 50 50 0 0 1 125 95 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 75 95 L 125 95 A 50 50 0 0 1 110.355 130.355 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 75 95 L 110.355 130.355 A 50 50 0 0 1 75 145 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 75 95 L 75 145 A 50 50 0 0 1 39.645 130.355 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 75 95 L 39.645 130.355 A 50 50 0 0 1 25 95 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 75 95 L 25 95 A 50 50 0 0 1 39.645 59.645 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 75 95 L 39.645 59.645 A 50 50 0 0 1 75 45 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"75\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 1</text>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 205 95 L 205 45 A 50 50 0 0 1 240.355 59.645 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 205 95 L 240.355 59.645 A 50 50 0 0 1 255 95 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 205 95 L 255 95 A 50 50 0 0 1 240.355 130.355 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 205 95 L 240.355 130.355 A 50 50 0 0 1 205 145 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 205 95 L 205 145 A 50 50 0 0 1 169.645 130.355 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 205 95 L 169.645 130.355 A 50 50 0 0 1 155 95 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 205 95 L 155 95 A 50 50 0 0 1 169.645 59.645 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 205 95 L 169.645 59.645 A 50 50 0 0 1 205 45 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"205\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 2</text>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 335 95 L 335 45 A 50 50 0 0 1 370.355 59.645 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 335 95 L 370.355 59.645 A 50 50 0 0 1 385 95 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 335 95 L 385 95 A 50 50 0 0 1 370.355 130.355 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 335 95 L 370.355 130.355 A 50 50 0 0 1 335 145 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 335 95 L 335 145 A 50 50 0 0 1 299.645 130.355 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 335 95 L 299.645 130.355 A 50 50 0 0 1 285 95 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 335 95 L 285 95 A 50 50 0 0 1 299.645 59.645 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 335 95 L 299.645 59.645 A 50 50 0 0 1 335 45 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"335\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 3</text>\n  </g>\n  <circle class=\"part missing\" cx=\"465\" cy=\"95\" r=\"50\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  <text class=\"label value\" x=\"465\" y=\"106\" font-size=\"32\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <text class=\"label option-label\" x=\"465\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 4</text>\n</svg>", "alt": "Three circles, each cut into 8 equal slices. Figure 1 has 1 slice shaded, Figure 2 has 3 slices shaded, Figure 3 has 5 slices shaded. Figure 4 is a question mark."}
  },
  {
    id: "g3-maths-fractions-a-q15",
    prompt: "Four same-size chikki bars are each cut into equal pieces: Imran's into 4, Lata's into 10, Mohit's into 5 and Gita's into 7. Each child eats 3 pieces of their own bar. Who eats the most chikki?",
    options: [
      { id: "a", text: "Imran" },
      { id: "b", text: "Lata" },
      { id: "c", text: "Mohit" },
      { id: "d", text: "Gita" }
    ],
    answerId: "a",
    explanation: "Every child eats 3 pieces, so whoever has the biggest pieces eats the most. Imran's bar has the fewest pieces, so his pieces are biggest: 3/4 is more than 3/5, 3/7 and 3/10. Lata is tempting because 10 is the biggest number, but her bar is cut into the most pieces, so they are the smallest.",
    hints: ["Everyone eats the same number of pieces, so compare the size of one piece. Fewer pieces in a same-size bar means bigger pieces."]
  },
  {
    id: "g3-maths-fractions-a-q16",
    prompt: "In the morning, a water tank is 7/10 full. During the day, 4/10 of the tank is used up. What fraction of the tank is full now?",
    options: [
      { id: "a", text: "11/10" },
      { id: "b", text: "4/10" },
      { id: "c", text: "3/7" },
      { id: "d", text: "3/10" }
    ],
    answerId: "d",
    explanation: "All the parts are tenths of the same tank, so take away the top numbers: 7 tenths \u2212 4 tenths = 3 tenths, 3/10. 4/10 is tempting, but that is the part used up during the day, not the part still full.",
    hints: ["Both amounts are tenths of the same tank, so the size of each part stays the same. Take away only the number of parts used."]
  },
  {
    id: "g3-maths-fractions-a-q17",
    prompt: "Kavya's rangoli tile is a square made of 3 pieces, as shown. She fills 2 pieces with colour. What part of the whole tile has colour?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "1/2" },
      { id: "c", text: "3/4" },
      { id: "d", text: "1/3" }
    ],
    answerId: "c",
    explanation: "The big left piece is half the tile, which is the same as 2 of the small squares. So the coloured part is 2 + 1 = 3 small squares out of 4, which is 3/4. 2/3 is tempting because 2 of the 3 pieces are coloured, but the 3 parts are not the same size, so they are not thirds.",
    hints: ["The pieces of Kavya's tile are not the same size. Picture the big piece cut into parts as small as the little squares, then count."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 280 214\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A square tile cut into one big left half and two small squares on the right; the left half and the top-right square are shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"280\" height=\"214\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"140\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kavya's rangoli tile</text>\n  <g class=\"part frac-fig shape\">\n  <polygon class=\"part piece shaded\" points=\"60,36 140,36 140,196 60,196\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece shaded\" points=\"140,36 220,36 220,116 140,116\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"140,116 220,116 220,196 140,196\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>", "alt": "A square tile. A line down the middle makes a left half; the right half is cut across into two small squares. The left half and the top-right small square are shaded; the bottom-right small square is white."}
  },
  {
    id: "g3-maths-fractions-a-q18",
    prompt: "Farhan has \u20b945. He spends 2/5 of his money on a cricket ball. How much money does he have left?",
    options: [
      { id: "a", text: "\u20b918" },
      { id: "b", text: "\u20b99" },
      { id: "c", text: "\u20b943" },
      { id: "d", text: "\u20b927" }
    ],
    answerId: "d",
    explanation: "1/5 of \u20b945 is 45 \u00f7 5 = \u20b99, so 2/5 is 2 \u00d7 9 = \u20b918 spent. He has 45 \u2212 18 = \u20b927 left. \u20b918 is tempting, but that is the money spent on the ball, not the money left.",
    hints: ["Find 1/5 of \u20b945 first by sharing it into equal parts. Then work out the amount spent on the ball and take it away."]
  },
  {
    id: "g3-maths-fractions-a-q19",
    prompt: "The second pair must match the first pair in the same way. Find the missing fraction.   1/2 : 3/6  ::  1/4 : ?",
    options: [
      { id: "a", text: "3/12" },
      { id: "b", text: "3/4" },
      { id: "c", text: "1/12" },
      { id: "d", text: "4/12" }
    ],
    answerId: "a",
    explanation: "In 1/2 \u2192 3/6, both the top and the bottom are multiplied by 3, so the amount stays the same. Do the same to 1/4: 1 \u00d7 3 = 3 and 4 \u00d7 3 = 12, giving 3/12. 3/4 is tempting if you multiply only the top, but that makes a much bigger fraction.",
    hints: ["How did the first fraction turn into the second? Find what its top and bottom were multiplied by, then repeat that before the question mark."]
  },
  {
    id: "g3-maths-fractions-a-q20",
    prompt: "1/3 of Rekha's marbles is 8 marbles. She gives 1/4 of ALL her marbles to her brother. How many marbles does Rekha have left?",
    options: [
      { id: "a", text: "6 marbles" },
      { id: "b", text: "22 marbles" },
      { id: "c", text: "18 marbles" },
      { id: "d", text: "16 marbles" }
    ],
    answerId: "c",
    explanation: "If 1/3 is 8 marbles, all 3 thirds are 3 \u00d7 8 = 24 marbles. 1/4 of 24 is 6, so she has 24 \u2212 6 = 18 left. 22 is tempting if you take 1/4 of 8 (which is 2) instead of 1/4 of all 24 marbles.",
    hints: ["First rebuild Rekha's whole collection from the 1/3 that is 8 marbles. Only then work out the brother's share."]
  },
  {
    id: "g3-maths-fractions-a-q21",
    prompt: "Arjun is painting a window of equal glass panes for Diwali. The shaded panes are already painted. How many MORE panes must he paint so that exactly 3/4 of the window is painted?",
    options: [
      { id: "a", text: "1 more pane" },
      { id: "b", text: "6 more panes" },
      { id: "c", text: "2 more panes" },
      { id: "d", text: "4 more panes" }
    ],
    answerId: "d",
    explanation: "The window has 8 equal panes. For 3/4 of 8: 8 \u00f7 4 = 2, and 3 \u00d7 2 = 6 panes. 2 are already painted, so 6 \u2212 2 = 4 more. 1 is tempting if you think 3/4 means 3 panes and take away the 2 painted ones, but this window has 8 panes, not 4.",
    hints: ["Count all the panes of the window, then work out how many painted panes the target needs before comparing with those already painted."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 340 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A window of 8 equal panes in 2 rows of 4, with 2 panes shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"340\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"170\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Arjun's Diwali window</text>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece shaded\" x=\"70\" y=\"40\" width=\"50\" height=\"50\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"120\" y=\"40\" width=\"50\" height=\"50\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"170\" y=\"40\" width=\"50\" height=\"50\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"220\" y=\"40\" width=\"50\" height=\"50\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"70\" y=\"90\" width=\"50\" height=\"50\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"120\" y=\"90\" width=\"50\" height=\"50\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"170\" y=\"90\" width=\"50\" height=\"50\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"220\" y=\"90\" width=\"50\" height=\"50\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>", "alt": "A window made of 8 equal glass panes in 2 rows of 4. The first pane of the top row and the third pane of the bottom row are shaded (painted)."}
  },
  {
    id: "g3-maths-fractions-a-q22",
    prompt: "Guess my fraction! My bottom number is 8. I am bigger than 1/2 but smaller than 3/4, and my top number is odd. Who am I?",
    options: [
      { id: "a", text: "5/8" },
      { id: "b", text: "3/8" },
      { id: "c", text: "7/8" },
      { id: "d", text: "6/8" }
    ],
    answerId: "a",
    explanation: "1/2 = 4/8 and 3/4 = 6/8. The only eighth between them is 5/8, and 5 is odd. 7/8 is tempting because 7 is odd too, but 7/8 is more than 6/8, so it is bigger than 3/4.",
    hints: ["Change 1/2 and 3/4 into eighths first. Then list the eighths in between and keep the one whose top number is odd."]
  },
  {
    id: "g3-maths-fractions-a-q23",
    prompt: "Pari cuts a ribbon into 8 equal pieces. She uses 3 pieces for a rakhi, and her brother uses 2 pieces for a kite tail. The leftover pieces are shared equally among 3 friends. What fraction of the WHOLE ribbon does each friend get?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "3/8" },
      { id: "c", text: "1/24" },
      { id: "d", text: "1/8" }
    ],
    answerId: "d",
    explanation: "8 \u2212 3 \u2212 2 = 3 pieces are left over. Shared among 3 friends, each friend gets 1 piece, and 1 piece is 1/8 of the whole ribbon. 1/3 is tempting because each friend gets one third of the LEFTOVER pieces, but the question asks about the whole ribbon.",
    hints: ["Find how many pieces are left after the rakhi and kite tail. Share those among the friends, then compare with the whole ribbon."]
  },
  {
    id: "g3-maths-fractions-a-q24",
    prompt: "On this number line, the space from 0 to 1 is cut into equal parts. Which point is exactly halfway between 1/2 and 1?",
    options: [
      { id: "a", text: "Point P" },
      { id: "b", text: "Point R" },
      { id: "c", text: "Point Q" },
      { id: "d", text: "Point S" }
    ],
    answerId: "b",
    explanation: "The line has 8 equal gaps, so 1/2 is on the 4th mark (4/8) and 1 is 8/8. Halfway between 4/8 and 8/8 is 6/8, the same as 3/4: Point R. Point Q is tempting because it is the first mark after 1/2, but it is only 1 gap from 1/2 and 3 gaps from 1.",
    hints: ["First find where 1/2 sits by counting the equal gaps. Then find the mark equally far, in gaps, from 1/2 and from 1."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number line from 0 to 1 cut into equal parts, with points P, Q, R and S marked\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Points on a number line</text>\n  <g class=\"part numline\">\n  <line class=\"axis\" x1=\"26\" y1=\"98\" x2=\"414\" y2=\"98\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <polygon class=\"arrow\" points=\"422,98 412,92 412,104\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"18,98 28,92 28,104\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"40\" y1=\"87\" x2=\"40\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"40\" y=\"130\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"85\" y1=\"87\" x2=\"85\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"87\" x2=\"130\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"175\" y1=\"87\" x2=\"175\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"220\" y1=\"87\" x2=\"220\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"265\" y1=\"87\" x2=\"265\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"310\" y1=\"87\" x2=\"310\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"355\" y1=\"87\" x2=\"355\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"400\" y1=\"87\" x2=\"400\" y2=\"109\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"400\" y=\"130\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <circle class=\"part point\" cx=\"130\" cy=\"98\" r=\"7\" fill=\"#42a5f5\" stroke=\"#0d47a1\" stroke-width=\"2\"/>\n  <line class=\"arrow\" x1=\"130\" y1=\"54\" x2=\"130\" y2=\"82\" stroke=\"#0d47a1\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"130,87 125,79 135,79\" fill=\"#0d47a1\"/>\n  <text class=\"label point-label\" x=\"130\" y=\"48\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">P</text>\n  <circle class=\"part point\" cx=\"265\" cy=\"98\" r=\"7\" fill=\"#42a5f5\" stroke=\"#0d47a1\" stroke-width=\"2\"/>\n  <line class=\"arrow\" x1=\"265\" y1=\"54\" x2=\"265\" y2=\"82\" stroke=\"#0d47a1\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"265,87 260,79 270,79\" fill=\"#0d47a1\"/>\n  <text class=\"label point-label\" x=\"265\" y=\"48\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Q</text>\n  <circle class=\"part point\" cx=\"310\" cy=\"98\" r=\"7\" fill=\"#42a5f5\" stroke=\"#0d47a1\" stroke-width=\"2\"/>\n  <line class=\"arrow\" x1=\"310\" y1=\"54\" x2=\"310\" y2=\"82\" stroke=\"#0d47a1\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"310,87 305,79 315,79\" fill=\"#0d47a1\"/>\n  <text class=\"label point-label\" x=\"310\" y=\"48\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">R</text>\n  <circle class=\"part point\" cx=\"355\" cy=\"98\" r=\"7\" fill=\"#42a5f5\" stroke=\"#0d47a1\" stroke-width=\"2\"/>\n  <line class=\"arrow\" x1=\"355\" y1=\"54\" x2=\"355\" y2=\"82\" stroke=\"#0d47a1\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"355,87 350,79 360,79\" fill=\"#0d47a1\"/>\n  <text class=\"label point-label\" x=\"355\" y=\"48\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">S</text>\n  </g>\n</svg>", "alt": "A number line from 0 to 1 with tick marks making 8 equal gaps. Only 0 and 1 are labelled. Point P is on the 2nd mark, Q on the 5th, R on the 6th and S on the 7th mark after 0."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-maths-fractions-b-q01",
    prompt: "A round rangoli is cut into equal slices, and some slices are filled with colour, as shown. Which words name the coloured part?",
    options: [
      { id: "a", text: "five-eighths" },
      { id: "b", text: "three-fifths" },
      { id: "c", text: "three-eighths" },
      { id: "d", text: "eight-thirds" }
    ],
    answerId: "c",
    explanation: "There are 8 equal slices and 3 are coloured, so the coloured part is three-eighths (3/8). Five-eighths is tempting, but that names the white slices, the part that is NOT coloured.",
    hints: ["Count all the equal slices of the rangoli to name the size of each slice, then count only the coloured slices."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 220 206\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A circle cut into 8 equal slices with 3 slices coloured\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"220\" height=\"206\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"110\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Round rangoli</text>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 110 112 L 110 32 A 80 80 0 0 1 166.569 55.431 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 110 112 L 166.569 55.431 A 80 80 0 0 1 190 112 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 110 112 L 190 112 A 80 80 0 0 1 166.569 168.569 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 110 112 L 166.569 168.569 A 80 80 0 0 1 110 192 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 110 112 L 110 192 A 80 80 0 0 1 53.431 168.569 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 110 112 L 53.431 168.569 A 80 80 0 0 1 30 112 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 110 112 L 30 112 A 80 80 0 0 1 53.431 55.431 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 110 112 L 53.431 55.431 A 80 80 0 0 1 110 32 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>", "alt": "A round rangoli cut into 8 equal slices like a pizza. 3 slices, not next to each other, are coloured orange; the other 5 are white."}
  },
  {
    id: "g3-maths-fractions-b-q02",
    prompt: "Kiran writes the fraction 1/6 on the board. Which statement about it is correct?",
    options: [
      { id: "a", text: "Its denominator is 1." },
      { id: "b", text: "It is a unit fraction." },
      { id: "c", text: "It is more than 1/2." },
      { id: "d", text: "Its numerator is 6." }
    ],
    answerId: "b",
    explanation: "1/6 has 1 on top, so it is a unit fraction: just one of 6 equal parts. 'Its numerator is 6' is tempting, but 6 is the bottom number, the denominator; the numerator is the top number, 1.",
    hints: ["In the fraction Kiran wrote, decide which number is on top and which is at the bottom, then test each statement."]
  },
  {
    id: "g3-maths-fractions-b-q03",
    prompt: "Each flag is made of 8 equal squares. On which flag are exactly HALF of the squares shaded?",
    options: [
      { id: "a", text: "Flag A" },
      { id: "b", text: "Flag B" },
      { id: "c", text: "Flag C" },
      { id: "d", text: "Flag D" }
    ],
    answerId: "c",
    explanation: "Flag C has 4 shaded squares out of 8, and 4 is half of 8, even though the squares are spread out. Flag A is tempting because a whole row is shaded, but it has one extra shaded square, and 5 out of 8 is more than half.",
    hints: ["Count the shaded squares on each flag and compare them with the white squares on the same flag."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 650 164\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four flags A to D, each made of 8 equal squares with some squares shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"650\" height=\"164\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"325.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Flags of 8 equal squares</text>\n  <g class=\"part rule\">\n  <rect class=\"part panel\" x=\"10\" y=\"32\" width=\"150\" height=\"120\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece shaded\" x=\"25\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"55\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"85\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"115\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"25\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"55\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"85\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"115\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"85.0\" y=\"144\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Flag A</text>\n  <rect class=\"part panel\" x=\"170\" y=\"32\" width=\"150\" height=\"120\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece shaded\" x=\"185\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"215\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"245\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"275\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"185\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"215\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"245\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"275\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"245.0\" y=\"144\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Flag B</text>\n  <rect class=\"part panel\" x=\"330\" y=\"32\" width=\"150\" height=\"120\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece shaded\" x=\"345\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"375\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"405\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"435\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"345\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"375\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"405\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"435\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"405.0\" y=\"144\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Flag C</text>\n  <rect class=\"part panel\" x=\"490\" y=\"32\" width=\"150\" height=\"120\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece shaded\" x=\"505\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"535\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"565\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"595\" y=\"54\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"505\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"535\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"565\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"595\" y=\"84\" width=\"30\" height=\"30\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"565.0\" y=\"144\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Flag D</text>\n  </g>\n</svg>", "alt": "Four flags, each 4 squares wide and 2 squares tall. Flag A: the whole top row of 4 shaded plus 1 square below. Flag B: 3 shaded squares in the top row. Flag C: 4 shaded squares spread out like a chessboard. Flag D: 6 shaded squares and 2 white squares."}
  },
  {
    id: "g3-maths-fractions-b-q04",
    prompt: "A rope for tug-of-war practice is 24 m long. The children cut off 1/3 of it to make a skipping rope. How long is the skipping rope?",
    options: [
      { id: "a", text: "3 m" },
      { id: "b", text: "8 m" },
      { id: "c", text: "21 m" },
      { id: "d", text: "12 m" }
    ],
    answerId: "b",
    explanation: "1/3 means one of 3 equal pieces: 24 \u00f7 3 = 8 m. 21 m is tempting if you take 3 m away from 24 m, but 1/3 means sharing the rope into 3 equal pieces, not cutting off 3 metres.",
    hints: ["Split the 24 m rope into equal pieces, as many as the bottom number of the fraction says, and measure one piece."]
  },
  {
    id: "g3-maths-fractions-b-q05",
    prompt: "Some marks on this number line are labelled, starting from 0. What should be written in the empty box?",
    options: [
      { id: "a", text: "3/7" },
      { id: "b", text: "5/7" },
      { id: "c", text: "5/8" },
      { id: "d", text: "4/7" }
    ],
    answerId: "b",
    explanation: "Each mark is one more seventh: 0, 1/7, 2/7, 3/7, 4/7, 5/7, so the box is 5/7. 3/7 is tempting because it comes straight after the last label, 2/7, but there are two more unlabelled marks before the box.",
    hints: ["Keep counting on from the labelled marks, one equal step at a time, until you reach the box."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 120\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number line from 0 to 1 cut into equal parts, with some marks labelled and one empty box\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"120\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220\" y=\"20\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Fill the empty box</text>\n  <g class=\"part numline\">\n  <line class=\"axis\" x1=\"26\" y1=\"64\" x2=\"414\" y2=\"64\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <polygon class=\"arrow\" points=\"422,64 412,58 412,70\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"18,64 28,58 28,70\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"40\" y1=\"53\" x2=\"40\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"40\" y=\"96\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"91.429\" y1=\"53\" x2=\"91.429\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"91.429\" y=\"96\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1/7</text>\n  <line class=\"tick\" x1=\"142.857\" y1=\"53\" x2=\"142.857\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"142.857\" y=\"96\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2/7</text>\n  <line class=\"tick\" x1=\"194.286\" y1=\"53\" x2=\"194.286\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"245.714\" y1=\"53\" x2=\"245.714\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"297.143\" y1=\"53\" x2=\"297.143\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"348.571\" y1=\"53\" x2=\"348.571\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"400\" y1=\"53\" x2=\"400\" y2=\"75\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"400\" y=\"96\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <rect class=\"part box missing\" x=\"277.143\" y=\"80\" width=\"40\" height=\"26\" rx=\"4\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  </g>\n</svg>", "alt": "A number line from 0 to 1 with tick marks making 7 equal gaps. The marks 0, 1/7, 2/7 and 1 are labelled. An empty box sits under the 5th mark after 0."}
  },
  {
    id: "g3-maths-fractions-b-q06",
    prompt: "Choose the sign that makes this statement true:   6/11  ?  9/11",
    options: [
      { id: "a", text: "<" },
      { id: "b", text: ">" },
      { id: "c", text: "=" },
      { id: "d", text: "not enough information" }
    ],
    answerId: "a",
    explanation: "Both fractions are elevenths, so compare the top numbers: 6 elevenths is less than 9 elevenths, so 6/11 < 9/11. '>' is tempting if you mix up the signs; the open side of the sign always faces the bigger fraction.",
    hints: ["Both are elevenths, so the parts match in size. Compare the number of parts; the sign's open side faces the bigger fraction."]
  },
  {
    id: "g3-maths-fractions-b-q07",
    prompt: "Amma made a pot of kheer. The family ate 5/8 of it at lunch. What fraction of the kheer is left for dinner?",
    options: [
      { id: "a", text: "5/8" },
      { id: "b", text: "4/8" },
      { id: "c", text: "3/8" },
      { id: "d", text: "13/8" }
    ],
    answerId: "c",
    explanation: "The full pot is 8/8. 8/8 \u2212 5/8 = 3/8 is left for dinner. 5/8 is tempting, but that is the part eaten at lunch, not the part left.",
    hints: ["Think of the full pot of kheer as all its equal parts. Take away the parts eaten at lunch and count what remains."]
  },
  {
    id: "g3-maths-fractions-b-q08",
    prompt: "Raj wants a unit fraction that lies between 1/4 and 1/2 in size. Which one should he choose?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "1/6" },
      { id: "c", text: "1/3" },
      { id: "d", text: "1/8" }
    ],
    answerId: "c",
    explanation: "For unit fractions, more equal parts means smaller pieces. 1/3 is cut into 3 parts, which is between 2 and 4 parts, so it sits between 1/2 and 1/4. 1/5 is tempting because 5 is bigger than 4, but fifths are smaller pieces than quarters, so 1/5 is less than 1/4.",
    hints: ["Picture a roti shared by more and more people: more sharers means smaller pieces. Use that to place each unit fraction."]
  },
  {
    id: "g3-maths-fractions-b-q09",
    prompt: "Mummy puts the same number of laddoos on each of 4 plates. Ravi takes all the laddoos on the shaded plates. What fraction of all the laddoos does Ravi take?",
    options: [
      { id: "a", text: "3/4" },
      { id: "b", text: "3/24" },
      { id: "c", text: "1/4" },
      { id: "d", text: "3/6" }
    ],
    answerId: "a",
    explanation: "The 4 plates hold equal shares, and Ravi takes 3 of them, so he takes 3/4 of the laddoos (18 out of 24). 3/24 is tempting if you put the number of plates over the number of laddoos, but 3 plates hold 18 laddoos, not 3.",
    hints: ["Each plate holds an equal share of the laddoos. Compare the plates Ravi takes with all the plates."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four plates with 6 laddoos each; three plates are shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"180\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"260\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Laddoo plates</text>\n  <ellipse class=\"part plate taken\" cx=\"70\" cy=\"95\" rx=\"56\" ry=\"46\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"70\" y=\"165\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plate 1</text>\n  <ellipse class=\"part plate taken\" cx=\"195\" cy=\"95\" rx=\"56\" ry=\"46\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"195\" y=\"165\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plate 2</text>\n  <ellipse class=\"part plate taken\" cx=\"320\" cy=\"95\" rx=\"56\" ry=\"46\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"320\" y=\"165\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plate 3</text>\n  <ellipse class=\"part plate\" cx=\"445\" cy=\"95\" rx=\"56\" ry=\"46\" fill=\"#f5f5f5\" stroke=\"#5d4037\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"445\" y=\"165\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plate 4</text>\n  <g class=\"part frac-fig collection\">\n  <circle class=\"part item shaded\" cx=\"40\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"70\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"100\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"40\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"70\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"100\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"165\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"195\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"225\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"165\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"195\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"225\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"290\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"320\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"350\" cy=\"81\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"290\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"320\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"350\" cy=\"109\" r=\"11\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"415\" cy=\"81\" r=\"11\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"445\" cy=\"81\" r=\"11\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"475\" cy=\"81\" r=\"11\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"415\" cy=\"109\" r=\"11\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"445\" cy=\"109\" r=\"11\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"475\" cy=\"109\" r=\"11\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  </g>\n</svg>", "alt": "Four plates in a row, each holding 6 laddoos. Plates 1, 2 and 3 are shaded brown with dark laddoos; Plate 4 is plain."}
  },
  {
    id: "g3-maths-fractions-b-q10",
    prompt: "Three of these fractions belong together in one family. Which fraction is the odd one out?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "1/7" },
      { id: "c", text: "1/8" },
      { id: "d", text: "3/5" }
    ],
    answerId: "d",
    explanation: "1/4, 1/7 and 1/8 all have 1 on top, so each is a unit fraction: one single part. 3/5 is the odd one out because its top number is not 1. 1/7 is tempting because 7 parts seems an unusual way to cut a whole, but 1/7 is still one single part, just like the others.",
    hints: ["Look closely at the top number of every fraction. What do three of them share that the fourth does not?"]
  },
  {
    id: "g3-maths-fractions-b-q11",
    prompt: "A garden plan is split into 12 equal beds. Marigolds grow in the shaded beds. Which fraction is the same as the marigold part of the garden?",
    options: [
      { id: "a", text: "3/12" },
      { id: "b", text: "9/16" },
      { id: "c", text: "3/4" },
      { id: "d", text: "3/9" }
    ],
    answerId: "c",
    explanation: "9 of the 12 beds are shaded. Each row has 3 of its 4 beds shaded, so each row is 3/4 marigolds, and so is the whole garden (9/12 = 3/4). 3/12 is tempting because it uses the 3 white beds, but that is the part WITHOUT marigolds.",
    hints: ["Look at the garden one row at a time. What part of each row is shaded?"],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 296 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A garden plan of 12 equal beds in 3 rows of 4, with 9 beds shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"296\" height=\"180\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"148\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Garden plan</text>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece shaded\" x=\"60\" y=\"36\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"104\" y=\"36\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"148\" y=\"36\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"192\" y=\"36\" width=\"44\" height=\"44\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"60\" y=\"80\" width=\"44\" height=\"44\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"104\" y=\"80\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"148\" y=\"80\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"192\" y=\"80\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"60\" y=\"124\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"104\" y=\"124\" width=\"44\" height=\"44\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"148\" y=\"124\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"192\" y=\"124\" width=\"44\" height=\"44\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>", "alt": "A garden plan of 12 equal square beds in 3 rows of 4. Each row has 3 shaded beds and 1 white bed: the white bed is 4th in the top row, 1st in the middle row and 2nd in the bottom row."}
  },
  {
    id: "g3-maths-fractions-b-q12",
    prompt: "A fruit seller has 48 mangoes. He sells 3/8 of them in the morning and 2/8 of them in the evening. How many mangoes are still unsold?",
    options: [
      { id: "a", text: "18 mangoes" },
      { id: "b", text: "30 mangoes" },
      { id: "c", text: "43 mangoes" },
      { id: "d", text: "6 mangoes" }
    ],
    answerId: "a",
    explanation: "3/8 + 2/8 = 5/8 of the mangoes are sold. 1/8 of 48 is 6, so 5/8 is 5 \u00d7 6 = 30 sold, and 48 \u2212 30 = 18 are unsold. 30 is tempting, but that is the number sold, not the number left.",
    hints: ["Add the morning and evening parts first, since both are eighths. Then find that part of 48 mangoes and take it away."]
  },
  {
    id: "g3-maths-fractions-b-q13",
    prompt: "Ajay eats 2/6 of a pizza. Usha eats 1/3 of another pizza of the same size. Which sentence is true?",
    options: [
      { id: "a", text: "They ate the same amount." },
      { id: "b", text: "Ajay ate more." },
      { id: "c", text: "Usha ate more." },
      { id: "d", text: "Ajay ate twice as much as Usha." }
    ],
    answerId: "a",
    explanation: "2 sixths fit exactly into 1 third, so 2/6 = 1/3 and both ate the same amount. 'Ajay ate more' is tempting because 2 and 6 are bigger numbers, but his slices are smaller, so he needs 2 of them to match Usha's 1.",
    hints: ["Picture both pizzas cut up. How many of Ajay's small slices fit into one of Usha's bigger slices?"]
  },
  {
    id: "g3-maths-fractions-b-q14",
    prompt: "Figure 1 changes into Figure 2 by following a rule. Use the same rule on Figure 3. Which circle, A to D, do you get?",
    options: [
      { id: "a", text: "Circle A" },
      { id: "b", text: "Circle B" },
      { id: "c", text: "Circle C" },
      { id: "d", text: "Circle D" }
    ],
    answerId: "b",
    explanation: "In Figure 2 the shading is swapped: the parts that were white in Figure 1 are shaded and the shaded part becomes white, so 1/4 becomes 3/4. Swapping Figure 3's 1/3 gives 2/3: Circle B. Circle A is tempting because it looks just like Figure 3, but the rule changes the shading.",
    hints: ["Compare the shaded and white parts of Figures 1 and 2. Then make exactly the same change to Figure 3."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 600 306\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A shading analogy: a square with 1 of 4 parts shaded changes to 3 of 4 shaded; a circle with 1 of 3 slices shaded and four answer circles A to D\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"600\" height=\"306\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"300\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 1 is to Figure 2 as Figure 3 is to ?</text>\n  <line class=\"guide\" x1=\"20\" y1=\"168\" x2=\"580\" y2=\"168\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece shaded\" x=\"40\" y=\"40\" width=\"45\" height=\"45\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"85\" y=\"40\" width=\"45\" height=\"45\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"40\" y=\"85\" width=\"45\" height=\"45\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece\" x=\"85\" y=\"85\" width=\"45\" height=\"45\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"85\" y=\"150\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 1</text>\n  <text class=\"label arrow\" x=\"160\" y=\"92\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u2192</text>\n  <g class=\"part frac-fig grid\">\n  <rect class=\"part piece\" x=\"190\" y=\"40\" width=\"45\" height=\"45\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"235\" y=\"40\" width=\"45\" height=\"45\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"190\" y=\"85\" width=\"45\" height=\"45\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <rect class=\"part piece shaded\" x=\"235\" y=\"85\" width=\"45\" height=\"45\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"235\" y=\"150\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 2</text>\n  <text class=\"label\" x=\"335\" y=\"92\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">::</text>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 445 85 L 445 40 A 45 45 0 0 1 483.971 107.5 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 445 85 L 483.971 107.5 A 45 45 0 0 1 406.029 107.5 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 445 85 L 406.029 107.5 A 45 45 0 0 1 445 40 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"445\" y=\"150\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Figure 3</text>\n  <text class=\"label arrow\" x=\"530\" y=\"92\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u2192 ?</text>\n  <g class=\"part rule\">\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 85 225 L 85 180 A 45 45 0 0 1 123.971 247.5 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 85 225 L 123.971 247.5 A 45 45 0 0 1 46.029 247.5 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 85 225 L 46.029 247.5 A 45 45 0 0 1 85 180 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"85\" y=\"292\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Circle A</text>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece\" d=\"M 228 225 L 228 180 A 45 45 0 0 1 266.971 247.5 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 228 225 L 266.971 247.5 A 45 45 0 0 1 189.029 247.5 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 228 225 L 189.029 247.5 A 45 45 0 0 1 228 180 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"228\" y=\"292\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Circle B</text>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 371 225 L 371 180 A 45 45 0 0 1 409.971 247.5 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 371 225 L 409.971 247.5 A 45 45 0 0 1 332.029 247.5 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 371 225 L 332.029 247.5 A 45 45 0 0 1 371 180 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"371\" y=\"292\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Circle C</text>\n  <g class=\"part frac-fig circle\">\n  <path class=\"part piece shaded\" d=\"M 514 225 L 514 180 A 45 45 0 0 1 559 225 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece shaded\" d=\"M 514 225 L 559 225 A 45 45 0 0 1 514 270 Z\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 514 225 L 514 270 A 45 45 0 0 1 469 225 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <path class=\"part piece\" d=\"M 514 225 L 469 225 A 45 45 0 0 1 514 180 Z\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label option-label\" x=\"514\" y=\"292\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Circle D</text>\n  </g>\n</svg>", "alt": "Top row: Figure 1 is a square of 4 equal small squares with 1 shaded; Figure 2 is the same square with the other 3 shaded and the first one white; Figure 3 is a circle of 3 equal slices with 1 shaded. Bottom row: Circle A: 3 equal slices with the same 1 slice shaded as Figure 3. Circle B: 3 equal slices with the 2 slices that were white in Figure 3 shaded. Circle C: 3 equal slices, all shaded. Circle D: 4 equal slices with 2 shaded."}
  },
  {
    id: "g3-maths-fractions-b-q15",
    prompt: "What is the GREATEST whole number that can go in the box so that 5/\u25a1 is greater than 5/8?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "9" },
      { id: "c", text: "8" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "With the same top number, the fraction with the smaller bottom number is bigger, so the box must be less than 8. The greatest such number is 7, and 5/7 > 5/8. 9 is tempting because 9 is bigger than 8, but ninths are smaller pieces, so 5/9 is less than 5/8.",
    hints: ["Compare 5/\u25a1 with 5/8. With matching top numbers, a smaller bottom number means bigger pieces. Which box numbers work? Pick the greatest."]
  },
  {
    id: "g3-maths-fractions-b-q16",
    prompt: "Neha is reading a storybook. She reads 2/10 of it on Monday, 3/10 on Tuesday and 4/10 on Wednesday. What fraction of the book is still unread?",
    options: [
      { id: "a", text: "9/10" },
      { id: "b", text: "9/30" },
      { id: "c", text: "2/10" },
      { id: "d", text: "1/10" }
    ],
    answerId: "d",
    explanation: "2/10 + 3/10 + 4/10 = 9/10 has been read. The whole book is 10/10, so 10/10 \u2212 9/10 = 1/10 is unread. 9/10 is tempting, but that is the part Neha has already read.",
    hints: ["Add the tenths read on Monday, Tuesday and Wednesday. Then compare that with all the tenths in the whole book."]
  },
  {
    id: "g3-maths-fractions-b-q17",
    prompt: "Lines join the middle points of the sides of a big triangle, as shown, and the middle piece is shaded. What fraction of the big triangle is shaded?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "1/2" },
      { id: "c", text: "3/4" },
      { id: "d", text: "1/4" }
    ],
    answerId: "d",
    explanation: "The lines cut the big triangle into 4 triangles of exactly the same size; the middle one is just turned upside down. So the shaded part is 1 of 4 equal parts, 1/4. 1/3 is tempting if you compare the shaded piece with the 3 corner pieces, but the bottom number must count all 4 pieces.",
    hints: ["The middle piece is upside down. Imagine turning it round and laying it on top of a corner piece."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 280 214\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A big triangle cut into 4 smaller triangles by joining the middles of its sides; the upside-down middle triangle is shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"280\" height=\"214\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"140\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Triangle puzzle</text>\n  <g class=\"part frac-fig shape\">\n  <polygon class=\"part piece\" points=\"30,196 140,196 85,116\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"140,196 250,196 195,116\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"85,116 195,116 140,36\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece shaded\" points=\"140,196 195,116 85,116\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>", "alt": "A big triangle. Lines join the middle points of its three sides, making 4 small triangles: three at the corners and one upside-down triangle in the middle, which is shaded."}
  },
  {
    id: "g3-maths-fractions-b-q18",
    prompt: "A cricket bat costs \u20b9600. Arun has saved 3/4 of this money. How much more money does he need to buy the bat?",
    options: [
      { id: "a", text: "\u20b9450" },
      { id: "b", text: "\u20b9150" },
      { id: "c", text: "\u20b9200" },
      { id: "d", text: "\u20b9597" }
    ],
    answerId: "b",
    explanation: "Arun still needs the missing 1/4 of \u20b9600: 600 \u00f7 4 = \u20b9150. \u20b9450 is tempting, but that is 3/4 of \u20b9600, the money he has already saved.",
    hints: ["Work out what part of the price is still missing, then find that part of \u20b9600."]
  },
  {
    id: "g3-maths-fractions-b-q19",
    prompt: "Each pair below should show two fractions of the same amount, but one pair is wrong. Which pair does NOT show equal amounts?",
    options: [
      { id: "a", text: "1/2 and 4/8" },
      { id: "b", text: "3/4 and 6/12" },
      { id: "c", text: "1/3 and 2/6" },
      { id: "d", text: "2/5 and 4/10" }
    ],
    answerId: "b",
    explanation: "1/2 = 4/8 (top and bottom both \u00d7 4), 1/3 = 2/6 (both \u00d7 2) and 2/5 = 4/10 (both \u00d7 2). But in 3/4 and 6/12 the top is \u00d7 2 while the bottom is \u00d7 3, and 6/12 is really one half. '1/2 and 4/8' is tempting because the numbers jump a lot, but top and bottom are both multiplied by 4, so it matches.",
    hints: ["For each pair of fractions, check whether the top and the bottom of the first fraction were multiplied by the SAME number."]
  },
  {
    id: "g3-maths-fractions-b-q20",
    prompt: "Ishaan had a box of laddoos. He ate 1/5 of them and gave 2/5 of them to his cousins. 8 laddoos were left. How many laddoos were in the box at first?",
    options: [
      { id: "a", text: "20 laddoos" },
      { id: "b", text: "40 laddoos" },
      { id: "c", text: "13 laddoos" },
      { id: "d", text: "16 laddoos" }
    ],
    answerId: "a",
    explanation: "He used 1/5 + 2/5 = 3/5, so 2/5 is left, and those 2 fifths are 8 laddoos. So 1/5 is 4 laddoos and the whole box is 5 \u00d7 4 = 20. 40 is tempting if you think the 8 left are only 1/5, but 2 fifths are left.",
    hints: ["Work out what fraction of Ishaan's box is left after eating and giving. That fraction is the 8 laddoos."]
  },
  {
    id: "g3-maths-fractions-b-q21",
    prompt: "Sunita cuts a square card along the lines shown and colours two of the pieces. What fraction of the whole card has she coloured?",
    options: [
      { id: "a", text: "2/4" },
      { id: "b", text: "1/3" },
      { id: "c", text: "3/4" },
      { id: "d", text: "3/8" }
    ],
    answerId: "d",
    explanation: "The left half is 4/8 of the card, the small square is 1/4 = 2/8, and each triangle is half of a small square, 1/8. Coloured = 2/8 + 1/8 = 3/8. 2/4 is tempting because 2 of the 4 pieces are coloured, but the pieces are different sizes.",
    hints: ["Use the smallest triangle as a measuring piece. How many of those triangles would fit in each piece of Sunita's card?"],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 214\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A square card cut into a left half, a top-right small square and two triangles; the small square and one triangle are coloured\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"214\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"130\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sunita's card</text>\n  <g class=\"part frac-fig shape\">\n  <polygon class=\"part piece\" points=\"50,36 130,36 130,196 50,196\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece shaded\" points=\"130,36 210,36 210,116 130,116\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece shaded\" points=\"130,116 210,116 130,196\" fill=\"#ffb74d\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"210,116 210,196 130,196\" fill=\"#ffffff\" stroke=\"#5d4037\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>", "alt": "A square card. A line down the middle makes a left half (white). The right half is cut across into a top small square (coloured) and a bottom small square, and the bottom small square is cut corner to corner into two triangles; the upper-left triangle is coloured."}
  },
  {
    id: "g3-maths-fractions-b-q22",
    prompt: "A cricket over is 6 balls. Tanvi bowled 3 full overs and then half of another over. Zoya bowled 2/3 as many balls as Tanvi. How many balls did Zoya bowl?",
    options: [
      { id: "a", text: "12 balls" },
      { id: "b", text: "7 balls" },
      { id: "c", text: "14 balls" },
      { id: "d", text: "21 balls" }
    ],
    answerId: "c",
    explanation: "Tanvi bowled 3 \u00d7 6 = 18 balls plus half of 6 = 3 balls, so 21 balls. 1/3 of 21 is 7, so 2/3 is 2 \u00d7 7 = 14. 12 is tempting if you forget the half over and use 18 balls (2/3 of 18 is 12).",
    hints: ["Change Tanvi's overs into balls first, including the part-over. Then find one third of her balls and use it."]
  },
  {
    id: "g3-maths-fractions-b-q23",
    prompt: "A Diwali rangoli has red, yellow and green diyas. 3/8 of the diyas are red, 2/8 are yellow and the rest are green. There are 6 more red diyas than yellow diyas. How many green diyas are there?",
    options: [
      { id: "a", text: "6 diyas" },
      { id: "b", text: "12 diyas" },
      { id: "c", text: "48 diyas" },
      { id: "d", text: "18 diyas" }
    ],
    answerId: "d",
    explanation: "Red is 3/8 and yellow is 2/8, so the 6 extra red diyas are 1/8 of all the diyas, and there are 8 \u00d7 6 = 48 diyas. Green is 8/8 \u2212 5/8 = 3/8, which is 3 \u00d7 6 = 18. 6 is tempting, but that is only 1/8 of the diyas, not the green part.",
    hints: ["The gap between red and yellow diyas is one part of all the diyas. Find which part, then use it for the green diyas."]
  },
  {
    id: "g3-maths-fractions-b-q24",
    prompt: "Leela's bead string has red beads (shaded) and white beads, as shown. She adds only red beads. What is the smallest number of red beads she must add so that exactly half of ALL the beads are red?",
    options: [
      { id: "a", text: "2 beads" },
      { id: "b", text: "10 beads" },
      { id: "c", text: "8 beads" },
      { id: "d", text: "4 beads" }
    ],
    answerId: "d",
    explanation: "The 10 white beads never change, so half the beads are red only when there are 10 red beads too. She has 6 red, so she adds 4, making 10 red out of 20. 2 is tempting (8 red out of 16), but adding beads also makes the total bigger: 8 red out of 18 beads is not half.",
    hints: ["When Leela adds red beads, the number of white beads stays the same. How many red beads are needed to match them?"],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bead string of 16 beads in two rows; 6 beads are shaded red\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"560\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"280\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Leela's bead string</text>\n  <line class=\"part string\" x1=\"20\" y1=\"70\" x2=\"536\" y2=\"70\" stroke=\"#8d6e63\" stroke-width=\"2\"/>\n  <line class=\"part string\" x1=\"20\" y1=\"116\" x2=\"536\" y2=\"116\" stroke=\"#8d6e63\" stroke-width=\"2\"/>\n  <g class=\"part frac-fig collection\">\n  <circle class=\"part item shaded\" cx=\"40\" cy=\"70\" r=\"13\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"108\" cy=\"70\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"176\" cy=\"70\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"244\" cy=\"70\" r=\"13\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"312\" cy=\"70\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"380\" cy=\"70\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"448\" cy=\"70\" r=\"13\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"516\" cy=\"70\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"40\" cy=\"116\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"108\" cy=\"116\" r=\"13\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"176\" cy=\"116\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"244\" cy=\"116\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"312\" cy=\"116\" r=\"13\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item shaded\" cx=\"380\" cy=\"116\" r=\"13\" fill=\"#ffa000\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"448\" cy=\"116\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  <circle class=\"part item\" cx=\"516\" cy=\"116\" r=\"13\" fill=\"#fff8e1\" stroke=\"#6d4c41\" stroke-width=\"1.8\"/>\n  </g>\n  <text class=\"label small\" x=\"280\" y=\"156\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">shaded = red bead, white = white bead</text>\n</svg>", "alt": "Two rows of 8 beads, 16 beads in all. 6 beads are shaded (red) and 10 are white."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "🍕", "title": "Sharing fairly", "body": ["Rotis, laddoos and chocolate bars are shared in equal parts. Fractions name those parts.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Rotis, laddoos and chocolate bars are shared in equal parts. Fractions name those parts. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Equal Parts: Halves, Thirds and Quarters", "steps": ["A fraction is a part of a whole, and the parts must be equal.", "Two equal parts are halves, three equal parts are thirds, and four equal parts are quarters.", "Check: A chapati is cut into 3 equal pieces. What is each piece called?"], "punchline": "Answer: one third (1/3)", "visual": "none", "speak": "A fraction is a part of a whole, and the parts must be equal. Two equal parts are halves, three equal parts are thirds, and four equal parts are quarters."},
  {"id": "s2", "type": "demo", "title": "Numerator and Denominator", "steps": ["The bottom number, the denominator, tells how many equal parts the whole has.", "The top number, the numerator, tells how many of those parts we take. When the top is 1, it is a unit fraction.", "Check: In 4/7, how many equal parts is the whole cut into?"], "punchline": "Answer: 7", "visual": "none", "speak": "The bottom number, the denominator, tells how many equal parts the whole has. The top number, the numerator, tells how many of those parts we take. When the top is 1, it is a unit fraction."},
  {"id": "s3", "type": "demo", "title": "Fraction of a Collection", "steps": ["To find one third of a group, share the group into three equal groups and take one.", "Two thirds is two of those groups.", "Check: What is 1/3 of 9 bangles?"], "punchline": "Answer: 3 bangles", "visual": "none", "speak": "To find one third of a group, share the group into three equal groups and take one. Two thirds is two of those groups."},
  {"id": "s4", "type": "demo", "title": "Fractions on a Number Line", "steps": ["Cut the space from 0 to 1 into equal gaps. Each gap is one part.", "Count the gaps from 0, not the tick marks, to name a point.", "Check: A line from 0 to 1 is cut into 4 equal gaps. What fraction is the second mark after 0?"], "punchline": "Answer: 2/4", "visual": "none", "speak": "Cut the space from 0 to 1 into equal gaps. Each gap is one part. Count the gaps from 0, not the tick marks, to name a point."},
  {"id": "s5", "type": "demo", "title": "Equivalent Fractions", "steps": ["Different fractions can show the same amount. Two quarters cover exactly one half.", "If you multiply the top and the bottom by the same number, the amount stays the same.", "Check: How many quarters are the same as 1/2?"], "punchline": "Answer: 2", "visual": "none", "speak": "Different fractions can show the same amount. Two quarters cover exactly one half. If you multiply the top and the bottom by the same number, the amount stays the same."},
  {"id": "s6", "type": "demo", "title": "Comparing Fractions", "steps": ["Same bottom number? Then the parts are the same size, so more parts means more.", "Same top number? Then the smaller bottom number wins, because its pieces are bigger.", "Check: Which is bigger, 2/5 or 2/9?"], "punchline": "Answer: 2/5", "visual": "none", "speak": "Same bottom number? Then the parts are the same size, so more parts means more. Same top number? Then the smaller bottom number wins, because its pieces are bigger."},
  {"id": "s7", "type": "demo", "title": "Adding and Subtracting Like Fractions", "steps": ["When the bottom numbers are the same, add or take away only the top numbers.", "The bottom number stays the same, because the size of each part does not change.", "Check: What is 4/9 − 1/9?"], "punchline": "Answer: 3/9", "visual": "none", "speak": "When the bottom numbers are the same, add or take away only the top numbers. The bottom number stays the same, because the size of each part does not change."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "Meena has 12 bangles. She gives 1/4 of them to her sister. How many bangles does her sister get?", "options": [{"id": "a", "text": "4"}, {"id": "b", "text": "8"}, {"id": "c", "text": "3"}, {"id": "d", "text": "9"}], "answerId": "c", "why": "Share 12 into 4 equal groups: each group has 3, so 1/4 of 12 is 3. 4 is tempting, but that is the number of groups, not the bangles in one group.", "visual": "none", "speak": "Meena has twelve bangles. She gives one quarter of them to her sister. How many bangles does her sister get?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Parts must be equal", "Bottom number: how many equal parts", "Top number: how many parts taken", "Same bottom: more on top is bigger", "Same top: smaller bottom is bigger"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g3MathsFractions: ChapterDef = {
  id: "g3-fractions",
  title: "Fractions",
  emoji: "\ud83c\udf55",
  blurb: "Equal parts, number lines, compare & add like fractions",
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

export const g3MathsFractionsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
