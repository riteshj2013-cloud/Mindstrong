import type { PrepQuestion } from "../types";

/** Simple Equations (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g7MathsEquationsAchievers: PrepQuestion[] = [
  {
    id: "g7-maths-ch02-ach-x-01",
    prompt: "Vanshika's scale balances as shown. All the bags of jaggery have the same mass. What is the mass of one bag?",
    options: [
      { id: "a", text: "3 kg" },
      { id: "b", text: "4.5 kg" },
      { id: "c", text: "6 kg" },
      { id: "d", text: "4 kg" }
    ],
    answerId: "d",
    explanation: "If one bag has mass x kg, the pans give 4x + 3 = x + 15. Taking x off both pans leaves 3x + 3 = 15, so 3x = 12 and x = 4 kg. Check: 4 \u00d7 4 + 3 = 19 and 4 + 15 = 19. 3 kg is tempting because it shares 15 \u2212 3 = 12 kg among the 4 bags on the left, but the bag on the right pan has to be taken off both sides first.",
    hints: ["Take the same thing off both pans of Vanshika's scale until bags are left on only one side."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A level balance: the left pan holds four bags and a 3 kg weight, the right pan holds one bag and a 15 kg weight\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"600\" height=\"300\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"300.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Vanshika's balance</text>\n  <polygon class=\"part fulcrum\" points=\"300,120 260,270 340,270\" fill=\"#bcaaa4\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part beam\" x1=\"50\" y1=\"120\" x2=\"550\" y2=\"120\" stroke=\"#263238\" stroke-width=\"5\"/>\n  <line class=\"part string\" x1=\"50\" y1=\"120\" x2=\"28\" y2=\"210\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <line class=\"part string\" x1=\"230\" y1=\"120\" x2=\"252\" y2=\"210\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <line class=\"part pan\" x1=\"22\" y1=\"210\" x2=\"258\" y2=\"210\" stroke=\"#263238\" stroke-width=\"4\"/>\n  <rect class=\"part bag\" x=\"43\" y=\"168\" width=\"34\" height=\"42\" rx=\"8\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <rect class=\"part bag\" x=\"83\" y=\"168\" width=\"34\" height=\"42\" rx=\"8\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <rect class=\"part bag\" x=\"123\" y=\"168\" width=\"34\" height=\"42\" rx=\"8\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <rect class=\"part bag\" x=\"163\" y=\"168\" width=\"34\" height=\"42\" rx=\"8\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <rect class=\"part weight\" x=\"203\" y=\"176\" width=\"52\" height=\"34\" rx=\"3\" fill=\"#cfd8dc\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label weight-value\" x=\"229\" y=\"198\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">3 kg</text>\n  <line class=\"part string\" x1=\"370\" y1=\"120\" x2=\"348\" y2=\"210\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <line class=\"part string\" x1=\"550\" y1=\"120\" x2=\"572\" y2=\"210\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <line class=\"part pan\" x1=\"342\" y1=\"210\" x2=\"578\" y2=\"210\" stroke=\"#263238\" stroke-width=\"4\"/>\n  <rect class=\"part bag\" x=\"423\" y=\"168\" width=\"34\" height=\"42\" rx=\"8\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <rect class=\"part weight\" x=\"463\" y=\"176\" width=\"52\" height=\"34\" rx=\"3\" fill=\"#cfd8dc\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label weight-value\" x=\"489\" y=\"198\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">15 kg</text>\n</svg>", "alt": "A balance with a level beam. The left pan holds 4 orange bags and a weight marked 3 kg. The right pan holds 1 orange bag and a weight marked 15 kg."}
  },
  {
    id: "g7-maths-ch02-ach-x-02",
    prompt: "Tank P on Hemang's terrace holds 500 L and is being emptied at 15 L per minute. At the same time Tank Q holds 200 L and is being filled at 10 L per minute. After how many minutes will both tanks hold the same amount?",
    options: [
      { id: "a", text: "12 min" },
      { id: "b", text: "60 min" },
      { id: "c", text: "20 min" },
      { id: "d", text: "30 min" }
    ],
    answerId: "a",
    explanation: "After t minutes Tank P holds 500 \u2212 15t litres and Tank Q holds 200 + 10t litres. Setting them equal: 500 \u2212 15t = 200 + 10t, so 300 = 25t and t = 12 min (both hold 320 L). 60 min is tempting because it divides the 300 L gap by 15 \u2212 10 = 5, but one tank is losing water while the other gains, so the gap closes by 15 + 10 = 25 L every minute.",
    hints: ["Write an expression for the water in each of Hemang's tanks after some minutes, and set the two expressions equal."]
  },
  {
    id: "g7-maths-ch02-ach-x-03",
    prompt: "Nishka's rectangular photo frame has the side lengths shown, and its perimeter is 46 cm. How long is its longer side?",
    options: [
      { id: "a", text: "10 cm" },
      { id: "b", text: "15 cm" },
      { id: "c", text: "8 cm" },
      { id: "d", text: "18 cm" }
    ],
    answerId: "b",
    explanation: "The perimeter is 2 \u00d7 [(x + 5) + (x \u2212 2)] = 2 \u00d7 (2x + 3) = 4x + 6. So 4x + 6 = 46, 4x = 40 and x = 10. The longer side is x + 5 = 15 cm (the shorter is 8 cm, and 2 \u00d7 (15 + 8) = 46). 10 cm is tempting because it is the value of x, but x is not a side; the longer side is x + 5.",
    hints: ["Add all four sides of Nishka's frame in terms of x, set the total equal to the perimeter, then work out the longer side."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 410 238\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A rectangle with its long side labelled x plus 5 centimetres and its short side labelled x minus 2 centimetres\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"410\" height=\"238\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"205.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Nishka's photo frame</text>\n  <rect class=\"part frame\" x=\"60\" y=\"72\" width=\"210\" height=\"112\" rx=\"0\" fill=\"#e1f5fe\" stroke=\"#0277bd\" stroke-width=\"3\"/>\n  <text class=\"label side\" x=\"165\" y=\"62\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">(x + 5) cm</text>\n  <text class=\"label side\" x=\"282\" y=\"133\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">(x \u2212 2) cm</text>\n</svg>", "alt": "A rectangle. The long top side is labelled (x + 5) cm and the short right side is labelled (x \u2212 2) cm."}
  },
  {
    id: "g7-maths-ch02-ach-x-04",
    prompt: "At a planetarium in Kolkata, an adult ticket costs \u20b940 more than a child ticket. Sohan's family of 2 adults and 3 children pays \u20b9580 in all. What does one child ticket cost?",
    options: [
      { id: "a", text: "\u20b9108" },
      { id: "b", text: "\u20b9116" },
      { id: "c", text: "\u20b9100" },
      { id: "d", text: "\u20b9140" }
    ],
    answerId: "c",
    explanation: "Let a child ticket cost \u20b9c, so an adult ticket costs \u20b9(c + 40). Then 2(c + 40) + 3c = 580, so 5c + 80 = 580, 5c = 500 and c = 100. A child ticket costs \u20b9100 (an adult ticket \u20b9140). \u20b9108 is tempting because it writes 5c + 40 = 580, but each of the 2 adult tickets carries the extra \u20b940, so the extra is \u20b980.",
    hints: ["Let a child ticket cost some amount, write each adult ticket in terms of it, and remember Sohan's family has two adults."]
  },
  {
    id: "g7-maths-ch02-ach-x-05",
    prompt: "An auto-rickshaw in Pune charges \u20b925 for the first kilometre and \u20b915 for every kilometre after that. Eshani's ride cost \u20b9205. How long was the ride?",
    options: [
      { id: "a", text: "13 km" },
      { id: "b", text: "12 km" },
      { id: "c", text: "14 km" },
      { id: "d", text: "11 km" }
    ],
    answerId: "a",
    explanation: "If the ride was d km, the fare is 25 + 15(d \u2212 1) = 205. So 15(d \u2212 1) = 180, d \u2212 1 = 12 and d = 13 km. 12 km is tempting because it is the number of kilometres charged at \u20b915, but the first kilometre, charged at \u20b925, has to be added back.",
    hints: ["Take off the charge for Eshani's opening kilometre, then see how many more kilometres the rest of the fare pays for."]
  }
];
