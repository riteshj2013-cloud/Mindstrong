import type { PrepQuestion } from "../types";

/** Fractions (Parts and Wholes) (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g5MathsFractionsAchievers: PrepQuestion[] = [
  {
    id: "g5-maths-ch03-ach-x-01",
    prompt: "Dhriti and her brother each had a slab of gur chikki of the same size, cut into equal pieces as shown. The greyed, crossed pieces have been eaten. How much chikki is left altogether, counted in slabs?",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "29/48" },
      { id: "c", text: "1 1/24" },
      { id: "d", text: "1 5/24" }
    ],
    answerId: "d",
    explanation: "Slab 1 has 8 pieces and 3 are eaten, so 5/8 is left. Slab 2 has 12 pieces and 5 are eaten, so 7/12 is left. In twenty-fourths, 5/8 = 15/24 and 7/12 = 14/24, so 29/24 = 1 5/24 slabs are left. 3/5 is tempting because it counts 12 pieces left out of 20 pieces in all, but a piece of Slab 1 is an eighth of a slab while a piece of Slab 2 is only a twelfth, so the pieces cannot be counted together.",
    hints: ["Write what is left of each of Dhriti's slabs as a fraction, then change both to the same denominator before adding."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 580 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two same-sized chikki slabs cut into equal pieces, some greyed and crossed out\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"580\" height=\"220\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"290.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Dhriti's chikki slabs</text>\n  <rect class=\"part slab\" x=\"40\" y=\"46\" width=\"220\" height=\"120\" rx=\"0\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\"/>\n  <rect class=\"part piece\" x=\"40\" y=\"46\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"95\" y=\"46\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"150\" y=\"46\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"205\" y=\"46\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"40\" y=\"106\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"95\" y=\"106\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"101\" y1=\"112\" x2=\"144\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"144\" y1=\"112\" x2=\"101\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"150\" y=\"106\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"156\" y1=\"112\" x2=\"199\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"199\" y1=\"112\" x2=\"156\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"205\" y=\"106\" width=\"55\" height=\"60\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"211\" y1=\"112\" x2=\"254\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"254\" y1=\"112\" x2=\"211\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <text class=\"label slab-name\" x=\"150.0\" y=\"192\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Slab 1</text>\n  <rect class=\"part slab\" x=\"310\" y=\"46\" width=\"220\" height=\"120\" rx=\"0\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\"/>\n  <rect class=\"part piece\" x=\"310\" y=\"46\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"365\" y=\"46\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"420\" y=\"46\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"475\" y=\"46\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"310\" y=\"86\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"365\" y=\"86\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece\" x=\"420\" y=\"86\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#d7a86e\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"475\" y=\"86\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"481\" y1=\"92\" x2=\"524\" y2=\"120\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"524\" y1=\"92\" x2=\"481\" y2=\"120\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"310\" y=\"126\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"316\" y1=\"132\" x2=\"359\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"359\" y1=\"132\" x2=\"316\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"365\" y=\"126\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"371\" y1=\"132\" x2=\"414\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"414\" y1=\"132\" x2=\"371\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"420\" y=\"126\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"426\" y1=\"132\" x2=\"469\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"469\" y1=\"132\" x2=\"426\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <rect class=\"part piece eaten\" x=\"475\" y=\"126\" width=\"55\" height=\"40\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"481\" y1=\"132\" x2=\"524\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <line class=\"part cross\" x1=\"524\" y1=\"132\" x2=\"481\" y2=\"160\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/>\n  <text class=\"label slab-name\" x=\"420.0\" y=\"192\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Slab 2</text>\n</svg>", "alt": "Two slabs of the same size side by side. Slab 1 is cut into 4 columns and 2 rows of equal pieces, and the last 3 pieces are greyed and crossed. Slab 2 is cut into 4 columns and 3 rows of equal pieces, and the last 5 pieces are greyed and crossed."}
  },
  {
    id: "g5-maths-ch03-ach-x-02",
    prompt: "The water tank in Divyansh's building holds 240 L when full. On Monday, 1/4 of the full tank is used. On Tuesday, 2/3 of the water left after Monday is used. How many litres are left in the tank now?",
    options: [
      { id: "a", text: "20 L" },
      { id: "b", text: "60 L" },
      { id: "c", text: "120 L" },
      { id: "d", text: "40 L" }
    ],
    answerId: "b",
    explanation: "Monday uses 1/4 of 240 L = 60 L, leaving 180 L. Tuesday uses 2/3 of 180 L = 120 L, leaving 180 L \u2212 120 L = 60 L. 20 L is tempting because it takes 1/4 + 2/3 = 11/12 of the full tank, but Tuesday's 2/3 is a fraction of the 180 L that was left, not of the full tank.",
    hints: ["Find how much water stayed in Divyansh's tank after Monday first; Tuesday's fraction is of that amount, not of the full tank."]
  },
  {
    id: "g5-maths-ch03-ach-x-03",
    prompt: "Jash's tulsi plant was 2/5 m tall in June and 1/2 m tall in August. In July its height was exactly halfway between those two heights. How tall was the plant in July?",
    options: [
      { id: "a", text: "3/7 m" },
      { id: "b", text: "9/10 m" },
      { id: "c", text: "9/20 m" },
      { id: "d", text: "1/10 m" }
    ],
    answerId: "c",
    explanation: "Write both heights in twentieths: 2/5 = 8/20 and 1/2 = 10/20. Exactly halfway between 8/20 and 10/20 is 9/20, so the plant was 9/20 m tall. 1/10 m is tempting because 10/20 \u2212 8/20 = 2/20 = 1/10 is the gap between the two heights, but the July height is the June height plus half of that gap: 8/20 + 1/20 = 9/20 m.",
    hints: ["Rewrite the June and August heights of Jash's plant with the same denominator, then find the fraction in the middle."]
  },
  {
    id: "g5-maths-ch03-ach-x-04",
    prompt: "Jinal fills two jugs with buttermilk. Each jug is marked in equal parts, and its full capacity is written below it. Which jug holds more buttermilk, and by how much?",
    options: [
      { id: "a", text: "Jug Q, by 500 mL" },
      { id: "b", text: "Jug P, by 500 mL" },
      { id: "c", text: "Jug Q, by 1 L" },
      { id: "d", text: "Jug P, by 250 mL" }
    ],
    answerId: "a",
    explanation: "Jug P is filled to 3 of its 4 parts: 3/4 of 2 L = 1,500 mL. Jug Q is filled to 2 of its 3 parts: 2/3 of 3 L = 2,000 mL. Jug Q holds 2,000 \u2212 1,500 = 500 mL more. Jug P, by 500 mL is tempting because 3/4 is a bigger fraction than 2/3 and Jug P looks fuller, but the fractions are of different capacities, so they must be changed into millilitres first.",
    hints: ["Change each jug's filled part into millilitres using the capacity written below Jinal's jug before you compare."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 505 330\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two jugs of the same height: Jug P marked in 4 equal parts and Jug Q marked in 3 equal parts, each partly filled\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"505\" height=\"330\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"252.5\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Jinal's two jugs</text>\n  <rect class=\"part liquid\" x=\"60\" y=\"115\" width=\"90\" height=\"165\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug\" d=\"M 60 52 L 60 280 L 150 280 L 150 52\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\"/>\n  <line class=\"part tick\" x1=\"60\" y1=\"280\" x2=\"76\" y2=\"280\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"60\" y1=\"225\" x2=\"76\" y2=\"225\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"60\" y1=\"170\" x2=\"76\" y2=\"170\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"60\" y1=\"115\" x2=\"76\" y2=\"115\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"60\" y1=\"60\" x2=\"76\" y2=\"60\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label jug-name\" x=\"105.0\" y=\"304\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Jug P</text>\n  <text class=\"label capacity\" x=\"105.0\" y=\"324\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">holds 2 L when full</text>\n  <rect class=\"part liquid\" x=\"260\" y=\"133.33\" width=\"135\" height=\"146.67\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug\" d=\"M 260 52 L 260 280 L 395 280 L 395 52\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\"/>\n  <line class=\"part tick\" x1=\"260\" y1=\"280\" x2=\"276\" y2=\"280\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"260\" y1=\"206.67\" x2=\"276\" y2=\"206.67\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"260\" y1=\"133.33\" x2=\"276\" y2=\"133.33\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"260\" y1=\"60\" x2=\"276\" y2=\"60\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label jug-name\" x=\"327.5\" y=\"304\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Jug Q</text>\n  <text class=\"label capacity\" x=\"327.5\" y=\"324\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">holds 3 L when full</text>\n</svg>", "alt": "Two jugs drawn the same height. Jug P holds 2 L when full, is marked in 4 equal parts and is filled up to the third mark. Jug Q is wider, holds 3 L when full, is marked in 3 equal parts and is filled up to the second mark."}
  },
  {
    id: "g5-maths-ch03-ach-x-05",
    prompt: "Mahi used 1/3 of a box of rangoli colour on Diwali and 1/4 of the same box on Bhai Dooj. Now 50 g of colour is left in the box. How much colour did the full box hold?",
    options: [
      { id: "a", text: "70 g" },
      { id: "b", text: "120 g" },
      { id: "c", text: "100 g" },
      { id: "d", text: "150 g" }
    ],
    answerId: "b",
    explanation: "Mahi used 1/3 + 1/4 = 4/12 + 3/12 = 7/12 of the box, so 5/12 is left. If 5/12 of the box is 50 g, then 1/12 is 10 g and the full box held 12 \u00d7 10 = 120 g. 70 g is tempting because it uses 1/3 + 1/4 = 2/7 (adding tops and bottoms), so 5/7 would be 50 g, but unlike fractions must be changed to twelfths before adding.",
    hints: ["Add the fractions Mahi used on the two festival days using twelfths, then find what part of the box the colour left makes."]
  }
];
