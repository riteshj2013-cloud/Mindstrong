import type { PrepQuestion } from "../types";

/** Fractions and Decimals (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g6MathsFractionsDecimalsAchievers: PrepQuestion[] = [
  {
    id: "g6-maths-ch02-ach-x-01",
    prompt: "Shamita's grandfather harvests 480 kg of onions. He sells 3/8 of the harvest at the mandi, gives 1/4 of the onions that remain to his brother, and packs the rest equally into five sacks. How many kilograms go into each sack?",
    options: [
      { id: "a", text: "36 kg" },
      { id: "b", text: "60 kg" },
      { id: "c", text: "45 kg" },
      { id: "d", text: "75 kg" }
    ],
    answerId: "c",
    explanation: "At the mandi he sells 3/8 of 480 kg = 180 kg, leaving 300 kg. His brother gets 1/4 of 300 kg = 75 kg, leaving 225 kg. Each of the 5 sacks holds 225 \u00f7 5 = 45 kg. 36 kg is tempting because it takes 1/4 of the whole 480 kg (120 kg), leaving 180 kg and 36 kg per sack, but the brother's share is 1/4 of the onions left after the mandi sale.",
    hints: ["The brother's fraction is taken from the onions still left after the mandi sale, not from the whole of Shamita's grandfather's harvest."]
  },
  {
    id: "g6-maths-ch02-ach-x-02",
    prompt: "Jahnvi buys 1 1/4 kg of besan and 3/5 kg of groundnuts at the prices shown and hands the shopkeeper \u20b9500. What balance should the shopkeeper return?",
    options: [
      { id: "a", text: "\u20b9279.48" },
      { id: "b", text: "\u20b9206.06" },
      { id: "c", text: "\u20b9329.59" },
      { id: "d", text: "\u20b9293.94" }
    ],
    answerId: "d",
    explanation: "1 1/4 kg = 1.25 kg, so the besan costs 96.40 \u00d7 1.25 = \u20b9120.50. 3/5 kg = 0.6 kg, so the groundnuts cost 142.60 \u00d7 0.6 = \u20b985.56. The bill is \u20b9120.50 + \u20b985.56 = \u20b9206.06, and the balance returned is \u20b9500 \u2212 \u20b9206.06 = \u20b9293.94. \u20b9279.48 is tempting because it reads 1 1/4 kg as 1.4 kg, but a quarter is 0.25, not 0.4.",
    hints: ["Change Jahnvi's fraction masses into decimals of a kilogram before multiplying by each price per kg."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 560 166\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two price cards: besan and groundnuts, each priced per kilogram\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"560\" height=\"166\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"280.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Prices at the kirana shop</text>\n  <rect class=\"part card\" x=\"30\" y=\"44\" width=\"230\" height=\"96\" rx=\"10\" fill=\"#f1f8e9\" stroke=\"#689f38\" stroke-width=\"2\"/>\n  <text class=\"label item-name\" x=\"145.0\" y=\"80\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Besan</text>\n  <text class=\"label item-price\" x=\"145.0\" y=\"116\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b996.40 per kg</text>\n  <rect class=\"part card\" x=\"290\" y=\"44\" width=\"230\" height=\"96\" rx=\"10\" fill=\"#f1f8e9\" stroke=\"#689f38\" stroke-width=\"2\"/>\n  <text class=\"label item-name\" x=\"405.0\" y=\"80\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Groundnuts</text>\n  <text class=\"label item-price\" x=\"405.0\" y=\"116\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b9142.60 per kg</text>\n</svg>", "alt": "Two price cards. Besan: \u20b996.40 per kg. Groundnuts: \u20b9142.60 per kg."}
  },
  {
    id: "g6-maths-ch02-ach-x-03",
    prompt: "On a car trip from Pune to Goa, Ekansh's family covered 3/8 of the whole distance before lunch and 2/5 of it after lunch. They still had 63 km to go. How many kilometres more did they travel after lunch than before lunch?",
    options: [
      { id: "a", text: "280 km" },
      { id: "b", text: "7 km" },
      { id: "c", text: "112 km" },
      { id: "d", text: "21 km" }
    ],
    answerId: "b",
    explanation: "Before and after lunch they covered 3/8 + 2/5 = 15/40 + 16/40 = 31/40 of the trip, so the last 63 km is the other 9/40. Then 1/40 of the trip is 63 \u00f7 9 = 7 km and the whole trip is 40 \u00d7 7 = 280 km. After lunch they went 16/40 of 280 km = 112 km and before lunch 15/40 of 280 km = 105 km, so they went 7 km more after lunch. 280 km is tempting because it is the length of the whole trip, but that is only a step on the way; the question asks for the difference between the two parts.",
    hints: ["Find what fraction of the trip the last 63 km stands for, then work out the full distance of Ekansh's trip."]
  },
  {
    id: "g6-maths-ch02-ach-x-04",
    prompt: "Kiaan's number line prints only the whole numbers; the small ticks between them are equally spaced. R is the point midway between P and Q. Which decimal names R?",
    options: [
      { id: "a", text: "1.625" },
      { id: "b", text: "1.25" },
      { id: "c", text: "0.875" },
      { id: "d", text: "1.75" }
    ],
    answerId: "a",
    explanation: "Each whole is cut into 4 equal gaps, so each small gap is 1/4. P is 3 gaps past 0, so P = 3/4, and Q is 2 gaps past 2, so Q = 2 2/4 = 2 1/2. Midway between them is (3/4 + 10/4) \u00f7 2 = 13/4 \u00f7 2 = 13/8 = 1.625. 1.25 is tempting because it reads each small gap as a tenth, making P = 0.3 and Q = 2.2, but four gaps fill each whole, so each gap is a quarter.",
    hints: ["Count how many small gaps fill each whole on Kiaan's line, write P and Q as fractions, then find the point midway between them."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 530 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number line from 0 to 3 with small ticks between the whole numbers and two points P and Q\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"530\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"265.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kiaan's number line</text>\n  <line class=\"part axis\" x1=\"26.0\" y1=\"90\" x2=\"504.0\" y2=\"90\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <line class=\"part tick major\" x1=\"40\" y1=\"80\" x2=\"40\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"40\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">0</text>\n  <line class=\"part tick\" x1=\"77.5\" y1=\"84\" x2=\"77.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick\" x1=\"115\" y1=\"84\" x2=\"115\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick\" x1=\"152.5\" y1=\"84\" x2=\"152.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick major\" x1=\"190\" y1=\"80\" x2=\"190\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"190\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1</text>\n  <line class=\"part tick\" x1=\"227.5\" y1=\"84\" x2=\"227.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick\" x1=\"265\" y1=\"84\" x2=\"265\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick\" x1=\"302.5\" y1=\"84\" x2=\"302.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick major\" x1=\"340\" y1=\"80\" x2=\"340\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"340\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2</text>\n  <line class=\"part tick\" x1=\"377.5\" y1=\"84\" x2=\"377.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick\" x1=\"415\" y1=\"84\" x2=\"415\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick\" x1=\"452.5\" y1=\"84\" x2=\"452.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <line class=\"part tick major\" x1=\"490\" y1=\"80\" x2=\"490\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label tick-label\" x=\"490\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">3</text>\n  <circle class=\"part point\" cx=\"152.5\" cy=\"90\" r=\"6\" fill=\"#1e88e5\"/>\n  <text class=\"label point-name\" x=\"152.5\" y=\"74\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e88e5\">P</text>\n  <circle class=\"part point\" cx=\"415\" cy=\"90\" r=\"6\" fill=\"#1e88e5\"/>\n  <text class=\"label point-name\" x=\"415\" y=\"74\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1e88e5\">Q</text>\n</svg>", "alt": "A number line from 0 to 3. Only 0, 1, 2 and 3 are printed, and small ticks split each whole into 4 equal gaps. Point P is on the third small tick after 0 and point Q is on the second small tick after 2."}
  },
  {
    id: "g6-maths-ch02-ach-x-05",
    prompt: "A tailor has a 13.3 m roll of cloth. For Vrinda's order she first cuts off 2/7 of the roll for curtains. She then cuts as many 1.5 m kurta lengths as she can from the rest. How much cloth is left over at the end?",
    options: [
      { id: "a", text: "1.3 m" },
      { id: "b", text: "0.8 m" },
      { id: "c", text: "1 m" },
      { id: "d", text: "0.5 m" }
    ],
    answerId: "d",
    explanation: "2/7 of 13.3 m is 13.3 \u00f7 7 \u00d7 2 = 3.8 m, so 13.3 \u2212 3.8 = 9.5 m is left. 1.5 m fits into 9.5 m 6 times (6 \u00d7 1.5 = 9 m), leaving 9.5 \u2212 9 = 0.5 m. 1.3 m is tempting because it cuts kurta lengths from the whole 13.3 m roll (8 \u00d7 1.5 = 12 m, leaving 1.3 m), but the curtain cloth was cut off first.",
    hints: ["Work out the curtain cloth first, then see how many kurta lengths fit into what remains of Vrinda's roll."]
  }
];
