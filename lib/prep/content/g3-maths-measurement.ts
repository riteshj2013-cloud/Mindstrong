import type { ChapterDef, PrepQuestion } from "../types";

/** Measurement - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-maths-measurement-a-q01",
    prompt: "Aditi lines up her hair clip with the zero end of a ruler, as shown. She counts the mark lines under the clip and says it is 8 cm long. How long is the clip really?",
    options: [
      { id: "a", text: "8 cm" },
      { id: "b", text: "6 cm" },
      { id: "c", text: "7 cm" },
      { id: "d", text: "10 cm" }
    ],
    answerId: "c",
    explanation: "The clip starts at the 0 mark and ends at the 7 mark, so it covers 7 one-centimetre gaps: it is 7 cm long. 8 cm, Aditi's answer, is tempting because there really are 8 mark lines from 0 to 7, but length is the number of gaps between the marks, not the number of lines.",
    hints: ["Aditi counted lines. Count the centimetre gaps between the lines under her hair clip instead."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 410 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A hair clip lying along a centimetre ruler\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"410\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"205.0\" y=\"20\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Aditi's hair clip on a cm ruler</text>\n  <g class=\"part ruler\">\n  <rect class=\"part ruler-body\" x=\"20\" y=\"70\" width=\"360\" height=\"46\" rx=\"3\" fill=\"#fff59d\" stroke=\"#827717\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"30\" y1=\"70\" x2=\"30\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"30\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick minor\" x1=\"47\" y1=\"70\" x2=\"47\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"64\" y1=\"70\" x2=\"64\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"64\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"tick minor\" x1=\"81\" y1=\"70\" x2=\"81\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"98\" y1=\"70\" x2=\"98\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"98\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"tick minor\" x1=\"115\" y1=\"70\" x2=\"115\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"132\" y1=\"70\" x2=\"132\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"132\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"tick minor\" x1=\"149\" y1=\"70\" x2=\"149\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"166\" y1=\"70\" x2=\"166\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"166\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"tick minor\" x1=\"183\" y1=\"70\" x2=\"183\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"200\" y1=\"70\" x2=\"200\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"200\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"tick minor\" x1=\"217\" y1=\"70\" x2=\"217\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"234\" y1=\"70\" x2=\"234\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"234\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick minor\" x1=\"251\" y1=\"70\" x2=\"251\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"268\" y1=\"70\" x2=\"268\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"tick minor\" x1=\"285\" y1=\"70\" x2=\"285\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"302\" y1=\"70\" x2=\"302\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"302\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick minor\" x1=\"319\" y1=\"70\" x2=\"319\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"336\" y1=\"70\" x2=\"336\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"336\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"tick minor\" x1=\"353\" y1=\"70\" x2=\"353\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"370\" y1=\"70\" x2=\"370\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"370\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <g class=\"part object\">\n  <rect class=\"part object-body\" x=\"30\" y=\"38\" width=\"238\" height=\"26\" rx=\"5\" fill=\"#f48fb1\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label\" x=\"149\" y=\"56\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">hair clip</text>\n  </g>\n  <line class=\"guide\" x1=\"30\" y1=\"64\" x2=\"30\" y2=\"70\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  <line class=\"guide\" x1=\"268\" y1=\"64\" x2=\"268\" y2=\"70\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  </g>\n</svg>", "alt": "A centimetre ruler marked 0 to 10. A pink hair clip lies on it with its left end at the 0 mark and its right end at the 7 mark."}
  },
  {
    id: "g3-maths-measurement-a-q02",
    prompt: "Bhavesh wants to show his little sister how long 1 km is. Which of these is closest to 1 km?",
    options: [
      { id: "a", text: "the length of a school bus" },
      { id: "b", text: "the height of a coconut tree" },
      { id: "c", text: "10 football grounds placed end to end" },
      { id: "d", text: "the length of a cricket bat" }
    ],
    answerId: "c",
    explanation: "A football ground is about 100 m long, and 10 of them in a line make about 1000 m, which is 1 km. The coconut tree is tempting because it is very tall, but it is only about 20 to 30 m high, far less than a kilometre.",
    hints: ["Bhavesh needs about a thousand metres. Picture walking along each one from end to end: which walk would take you many minutes?"]
  },
  {
    id: "g3-maths-measurement-a-q03",
    prompt: "Chitra's mother buys a big striped watermelon at the market. Which is the most sensible weight for it?",
    options: [
      { id: "a", text: "4 g" },
      { id: "b", text: "40 kg" },
      { id: "c", text: "400 g" },
      { id: "d", text: "4 kg" }
    ],
    answerId: "d",
    explanation: "A big watermelon needs both hands to lift, so it weighs a few kilograms: 4 kg makes sense. 400 g is tempting because 400 looks like a big number, but 400 g is less than half a kilogram, about as heavy as two big apples.",
    hints: ["Imagine lifting Chitra's watermelon: is it as light as a pencil, a bit heavy, or as heavy as a child?"]
  },
  {
    id: "g3-maths-measurement-a-q04",
    prompt: "Dev pushes a 1 m long bamboo stick straight down into a flower pot to hold up a money plant. 85 cm of the stick is above the soil. How much of the stick is inside the soil?",
    options: [
      { id: "a", text: "25 cm" },
      { id: "b", text: "15 cm" },
      { id: "c", text: "115 cm" },
      { id: "d", text: "185 cm" }
    ],
    answerId: "b",
    explanation: "1 m = 100 cm, and 100 cm \u2212 85 cm = 15 cm is inside the soil. 25 cm is tempting if you forget to regroup (taking 8 tens from 10 tens leaves 2 tens, but 5 ones cannot come from 0 ones without borrowing a ten).",
    hints: ["Change the stick's full length into centimetres first, then take away the part above the soil."]
  },
  {
    id: "g3-maths-measurement-a-q05",
    prompt: "Esha is making 1 L of lemonade. Her measuring jug shows the water she has poured so far. How much more water does she need?",
    options: [
      { id: "a", text: "600 mL" },
      { id: "b", text: "400 mL" },
      { id: "c", text: "1400 mL" },
      { id: "d", text: "40 mL" }
    ],
    answerId: "b",
    explanation: "The water is at 600 mL. 1 L = 1000 mL, so she needs 1000 \u2212 600 = 400 mL more. 600 mL is tempting because it is the reading on the jug, but that is what is already in the jug, not what is still missing.",
    hints: ["Read the water level on Esha's jug, then find how much is missing to reach the litre line at the top."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 360 262\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A 1 litre measuring jug partly filled with water\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"360\" height=\"262\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"180.0\" y=\"18\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Esha's measuring jug (1 L)</text>\n  <g class=\"part jug\">\n  <rect class=\"part water\" x=\"130\" y=\"122\" width=\"90\" height=\"120\" rx=\"0\" fill=\"#81d4fa\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug-body\" d=\"M 130 30 L 130 242 L 220 242 L 220 30\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 220 48 C 250 48 250 162 220 162\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick minor\" x1=\"130\" y1=\"222\" x2=\"144\" y2=\"222\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"202\" x2=\"154\" y2=\"202\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"206\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">200 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"182\" x2=\"144\" y2=\"182\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"162\" x2=\"154\" y2=\"162\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"166\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">400 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"142\" x2=\"144\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"122\" x2=\"154\" y2=\"122\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"126\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">600 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"102\" x2=\"144\" y2=\"102\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"82\" x2=\"154\" y2=\"82\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"86\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">800 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"62\" x2=\"144\" y2=\"62\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"42\" x2=\"154\" y2=\"42\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"46\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  </g>\n</svg>", "alt": "A measuring jug marked every 100 mL up to 1 L, with labels at 200, 400, 600, 800 mL and 1 L. The water reaches the 600 mL mark."}
  },
  {
    id: "g3-maths-measurement-a-q06",
    prompt: "Four friends rode their cycles around the colony. Gaurav rode 990 m, Harsh rode 1 km, Ira rode 899 m and Jatin rode 95 m. Who rode the longest distance?",
    options: [
      { id: "a", text: "Gaurav" },
      { id: "b", text: "Ira" },
      { id: "c", text: "Jatin" },
      { id: "d", text: "Harsh" }
    ],
    answerId: "d",
    explanation: "Write every distance in metres: 1 km = 1000 m, which is more than 990 m, 899 m and 95 m, so Harsh rode the farthest. Gaurav is tempting because 990 has the biggest digits on paper, but 990 m is 10 m short of a kilometre.",
    hints: ["Before deciding who rode farthest, write every distance the friends rode in metres."]
  },
  {
    id: "g3-maths-measurement-a-q07",
    prompt: "Komal puts a pumpkin on one pan of a balance and a 2 kg weight on the other pan. The balance looks like this. What can Komal say about the pumpkin?",
    options: [
      { id: "a", text: "It weighs more than 2 kg." },
      { id: "b", text: "It weighs less than 2 kg." },
      { id: "c", text: "It weighs exactly 2 kg." },
      { id: "d", text: "We cannot say anything about its weight." }
    ],
    answerId: "a",
    explanation: "On a pan balance the heavier side goes down. The pumpkin's pan is lower, so the pumpkin is heavier than the 2 kg weight. 'It weighs less than 2 kg' is tempting if you think the pan that sits higher holds more, but a higher pan means a lighter load.",
    hints: ["On Komal's balance, ask which pan has sunk lower, and what a lower pan tells you about its load."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 248\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A pan balance with a pumpkin and a 2 kg weight\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"248\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"200.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Komal's balance</text>\n  <g class=\"part balance\">\n  <polygon class=\"part stand\" points=\"200,92 184,212 216,212\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <rect class=\"part base\" x=\"150\" y=\"212\" width=\"100\" height=\"8\" rx=\"2\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/>\n  <line class=\"part beam\" x1=\"90\" y1=\"106\" x2=\"310\" y2=\"78\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part pivot\" cx=\"200\" cy=\"92\" r=\"5\" fill=\"#ffca28\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"90\" y1=\"106\" x2=\"36\" y2=\"176\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"90\" y1=\"106\" x2=\"144\" y2=\"176\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 28 176 Q 90 198 152 176 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"90\" cy=\"158\" rx=\"40\" ry=\"18\" fill=\"#ffb74d\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"90\" y=\"163\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">pumpkin</text>\n  </g>\n  </g>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"310\" y1=\"78\" x2=\"256\" y2=\"148\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"310\" y1=\"78\" x2=\"364\" y2=\"148\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 248 148 Q 310 170 372 148 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"294,118 326,118 332,148 288,148\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"310\" y=\"138\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2 kg</text>\n  </g>\n  </g>\n  </g>\n</svg>", "alt": "A pan balance. The left pan holds a pumpkin and hangs lower; the right pan holds a 2 kg weight and is raised higher."}
  },
  {
    id: "g3-maths-measurement-a-q08",
    prompt: "Manav's ruler is broken, so it starts at 3 cm. He measures a crayon with it, as shown. How long is the crayon?",
    options: [
      { id: "a", text: "10 cm" },
      { id: "b", text: "6 cm" },
      { id: "c", text: "7 cm" },
      { id: "d", text: "4 cm" }
    ],
    answerId: "b",
    explanation: "The crayon runs from the 4 mark to the 10 mark, so its length is 10 \u2212 4 = 6 cm. 10 cm is tempting because the crayon ends at 10, but that only works when the object starts at 0.",
    hints: ["Manav's crayon does not start at zero, so take the starting mark away from the ending mark."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 132\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A crayon measured on a broken ruler that starts at 3 cm\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"132\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"210.0\" y=\"20\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Manav's broken ruler</text>\n  <g class=\"part ruler\">\n  <rect class=\"part ruler-body\" x=\"36\" y=\"72\" width=\"354\" height=\"46\" rx=\"3\" fill=\"#fff59d\" stroke=\"#827717\" stroke-width=\"1.5\"/>\n  <polyline class=\"part break\" points=\"36,72 42,79.667 36,87.333 42,95 36,102.667 42,110.333 36,118\" fill=\"none\" stroke=\"#b71c1c\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"40\" y1=\"72\" x2=\"40\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"40\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"tick minor\" x1=\"57\" y1=\"72\" x2=\"57\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"74\" y1=\"72\" x2=\"74\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"74\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"tick minor\" x1=\"91\" y1=\"72\" x2=\"91\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"108\" y1=\"72\" x2=\"108\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"108\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"tick minor\" x1=\"125\" y1=\"72\" x2=\"125\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"142\" y1=\"72\" x2=\"142\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"142\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick minor\" x1=\"159\" y1=\"72\" x2=\"159\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"176\" y1=\"72\" x2=\"176\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"176\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"tick minor\" x1=\"193\" y1=\"72\" x2=\"193\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"210\" y1=\"72\" x2=\"210\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"210\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick minor\" x1=\"227\" y1=\"72\" x2=\"227\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"244\" y1=\"72\" x2=\"244\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"244\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"tick minor\" x1=\"261\" y1=\"72\" x2=\"261\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"278\" y1=\"72\" x2=\"278\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"278\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <line class=\"tick minor\" x1=\"295\" y1=\"72\" x2=\"295\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"312\" y1=\"72\" x2=\"312\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"312\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <line class=\"tick minor\" x1=\"329\" y1=\"72\" x2=\"329\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"346\" y1=\"72\" x2=\"346\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"346\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <line class=\"tick minor\" x1=\"363\" y1=\"72\" x2=\"363\" y2=\"81\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"380\" y1=\"72\" x2=\"380\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"380\" y=\"104\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">13</text>\n  <g class=\"part object\">\n  <rect class=\"part object-body\" x=\"74\" y=\"40\" width=\"204\" height=\"26\" rx=\"5\" fill=\"#9ccc65\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label\" x=\"176\" y=\"58\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">crayon</text>\n  </g>\n  <line class=\"guide\" x1=\"74\" y1=\"66\" x2=\"74\" y2=\"72\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  <line class=\"guide\" x1=\"278\" y1=\"66\" x2=\"278\" y2=\"72\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  </g>\n</svg>", "alt": "A broken centimetre ruler that begins at the 3 mark and goes to 13. A green crayon lies on it from the 4 mark to the 10 mark."}
  },
  {
    id: "g3-maths-measurement-a-q09",
    prompt: "Nisha's dhokla recipe needs 1 kg of besan. At home she finds one packet with 650 g of besan in it and another with 250 g. How much more besan must she get?",
    options: [
      { id: "a", text: "900 g" },
      { id: "b", text: "200 g" },
      { id: "c", text: "100 g" },
      { id: "d", text: "350 g" }
    ],
    answerId: "c",
    explanation: "She already has 650 + 250 = 900 g. 1 kg = 1000 g, so she needs 1000 \u2212 900 = 100 g more. 900 g is tempting because it is the total she has, but the question asks how much is still missing to reach a kilogram.",
    hints: ["First add the besan in Nisha's packets, then compare that total with a kilogram written in grams."]
  },
  {
    id: "g3-maths-measurement-a-q10",
    prompt: "Mrs. Bose writes four units on the board and asks the class which unit does not belong with the other three. Which unit should they pick?",
    options: [
      { id: "a", text: "metre" },
      { id: "b", text: "centimetre" },
      { id: "c", text: "kilometre" },
      { id: "d", text: "kilogram" }
    ],
    answerId: "d",
    explanation: "Metre, centimetre and kilometre all measure length (how long or how far). Kilogram measures weight, so it is the odd one out. Kilometre is tempting because it starts with 'kilo' like kilogram, but the prefix only means 'a thousand of'; it still measures length.",
    hints: ["Ask what each unit on the board measures: a centimetre tells how long something is. Which unit measures something different?"]
  },
  {
    id: "g3-maths-measurement-a-q11",
    prompt: "Ojas has a rope for a clothesline. He cuts two pieces from it to tie up his cycle and a gate, and the bar model shows the whole rope. How long is the piece marked '?'?",
    options: [
      { id: "a", text: "8 m" },
      { id: "b", text: "4 m" },
      { id: "c", text: "9 m" },
      { id: "d", text: "7 m" }
    ],
    answerId: "b",
    explanation: "The pieces together make the whole rope: 5 m + 3 m + ? = 12 m. 5 + 3 = 8, so ? = 12 \u2212 8 = 4 m. 8 m is tempting because it is the first step of the working, but 8 m is the two known pieces together, not the missing piece.",
    hints: ["Add the two pieces of Ojas's rope that have lengths written on them, then compare with the whole rope."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 136\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar model of a rope cut into three pieces\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"136\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ojas's rope</text>\n  <g class=\"part barmodel\">\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"40\" y=\"46\" width=\"150\" height=\"32\" rx=\"0\" fill=\"#ffe082\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"115\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5 m</text>\n  </g>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"190\" y=\"46\" width=\"90\" height=\"32\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"235\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3 m</text>\n  </g>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"280\" y=\"46\" width=\"120\" height=\"32\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"340\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  </g>\n  <g class=\"part brace\">\n  <line class=\"arrow\" x1=\"40\" y1=\"96\" x2=\"400\" y2=\"96\" stroke=\"#c62828\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"40,96 48,91 48,101\" fill=\"#c62828\"/>\n  <polygon class=\"arrow\" points=\"400,96 392,91 392,101\" fill=\"#c62828\"/>\n  <text class=\"label value\" x=\"220\" y=\"116\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">12 m</text>\n  </g>\n  </g>\n</svg>", "alt": "A bar model of the whole rope, 12 m long, split into three pieces: 5 m, 3 m, and a piece marked with a question mark. A red arrow under the bar shows the total 12 m."}
  },
  {
    id: "g3-maths-measurement-a-q12",
    prompt: "Pooja buys 250 cm of cotton cloth to make a kurta. The cloth costs \u20b980 for each metre. How much does she pay?",
    options: [
      { id: "a", text: "\u20b9160" },
      { id: "b", text: "\u20b9240" },
      { id: "c", text: "\u20b920,000" },
      { id: "d", text: "\u20b9200" }
    ],
    answerId: "d",
    explanation: "250 cm = 2 m 50 cm, which is 2 metres and half a metre. 2 metres cost 2 \u00d7 \u20b980 = \u20b9160 and half a metre costs \u20b940, so she pays \u20b9160 + \u20b940 = \u20b9200. \u20b9160 is tempting if you drop the extra 50 cm, but she bought more than 2 metres.",
    hints: ["Change Pooja's 250 cm into metres and centimetres, and remember half a metre costs half as much as a full metre."]
  },
  {
    id: "g3-maths-measurement-a-q13",
    prompt: "A 2 L jar of nimbu pani fills exactly 8 equal glasses. Sahil and his cousins drink 3 glasses. How much nimbu pani is left?",
    options: [
      { id: "a", text: "1 L 250 mL" },
      { id: "b", text: "1 L 750 mL" },
      { id: "c", text: "750 mL" },
      { id: "d", text: "1 L 500 mL" }
    ],
    answerId: "a",
    explanation: "2 L = 2000 mL shared into 8 equal glasses gives 2000 \u00f7 8 = 250 mL in each glass. 8 \u2212 3 = 5 glasses are left, and 5 \u00d7 250 = 1250 mL = 1 L 250 mL. 750 mL is tempting because it is the 3 glasses they drank, not what is left; 1 L 750 mL comes from taking away just one glass.",
    hints: ["Start by finding how much nimbu pani fits in each glass, then count the glasses that Sahil and his cousins did not drink."]
  },
  {
    id: "g3-maths-measurement-a-q14",
    prompt: "Tanmay measures his tulsi plant every Sunday. Its heights are 12 cm, 15 cm, 19 cm and 24 cm. If it keeps growing in the same pattern, how tall will it be next Sunday?",
    options: [
      { id: "a", text: "30 cm" },
      { id: "b", text: "29 cm" },
      { id: "c", text: "28 cm" },
      { id: "d", text: "31 cm" }
    ],
    answerId: "a",
    explanation: "The plant grows 3 cm, then 4 cm, then 5 cm: each week it grows 1 cm more than the week before. Next it grows 6 cm, so 24 + 6 = 30 cm. 29 cm is tempting if you think it grows 5 cm again, but the growth itself goes up each week.",
    hints: ["Write down how much Tanmay's plant grew each week, then look for the pattern in those growths."]
  },
  {
    id: "g3-maths-measurement-a-q15",
    prompt: "All of Uma's guavas weigh the same. Her balance is level, as shown. How much does one guava weigh?",
    options: [
      { id: "a", text: "450 g" },
      { id: "b", text: "90 g" },
      { id: "c", text: "150 g" },
      { id: "d", text: "225 g" }
    ],
    answerId: "c",
    explanation: "Take one guava off each pan; the balance stays level. Now 3 guavas balance 450 g, so one guava weighs 450 \u00f7 3 = 150 g. 90 g is tempting if you share 450 g among all 5 guavas, but the guava on the right pan must be removed from both sides first.",
    hints: ["Take the same thing off both pans of Uma's balance so it stays level, then share what is left."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 282\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A level balance with guavas on both pans and a 450 g weight\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"282\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"200.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Uma's level balance</text>\n  <g class=\"part balance\">\n  <polygon class=\"part stand\" points=\"200,92 184,212 216,212\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <rect class=\"part base\" x=\"150\" y=\"212\" width=\"100\" height=\"8\" rx=\"2\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/>\n  <line class=\"part beam\" x1=\"82\" y1=\"92\" x2=\"318\" y2=\"92\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part pivot\" cx=\"200\" cy=\"92\" r=\"5\" fill=\"#ffca28\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"82\" y1=\"92\" x2=\"28\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"82\" y1=\"92\" x2=\"136\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 20 162 Q 82 184 144 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"40\" cy=\"149.5\" rx=\"12.5\" ry=\"12.5\" fill=\"#c5e1a5\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"40\" y=\"154.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">G</text>\n  </g>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"68\" cy=\"149.5\" rx=\"12.5\" ry=\"12.5\" fill=\"#c5e1a5\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"68\" y=\"154.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">G</text>\n  </g>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"96\" cy=\"149.5\" rx=\"12.5\" ry=\"12.5\" fill=\"#c5e1a5\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"96\" y=\"154.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">G</text>\n  </g>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"124\" cy=\"149.5\" rx=\"12.5\" ry=\"12.5\" fill=\"#c5e1a5\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"124\" y=\"154.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">G</text>\n  </g>\n  </g>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"318\" y1=\"92\" x2=\"264\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"318\" y1=\"92\" x2=\"372\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 256 162 Q 318 184 380 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"292.5\" cy=\"149.5\" rx=\"12.5\" ry=\"12.5\" fill=\"#c5e1a5\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"292.5\" y=\"154.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">G</text>\n  </g>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"314,132 350,132 356,162 308,162\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"332\" y=\"152\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">450 g</text>\n  </g>\n  </g>\n  </g>\n  <text class=\"label small\" x=\"200\" y=\"270\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">G = one guava (all the guavas weigh the same)</text>\n</svg>", "alt": "A level pan balance. The left pan holds 4 guavas marked G. The right pan holds 1 guava marked G and a 450 g weight. A note says G means one guava and all guavas weigh the same."}
  },
  {
    id: "g3-maths-measurement-a-q16",
    prompt: "Varsha's school measures two amounts: the water in the big overhead tank on the roof, and the ink in a small fountain-pen ink bottle. Which choice of units is best?",
    options: [
      { id: "a", text: "millilitres for the tank, litres for the ink" },
      { id: "b", text: "kilograms for the tank, grams for the ink" },
      { id: "c", text: "litres for the tank, millilitres for the ink" },
      { id: "d", text: "litres for both" }
    ],
    answerId: "c",
    explanation: "A roof tank holds hundreds of litres, so litres suit it. A small ink bottle holds only a few tens of millilitres, so millilitres suit it. 'Litres for both' is tempting because both are liquids, but a whole litre is far more than a tiny ink bottle holds.",
    hints: ["Compare how much water a roof tank holds with how little ink a small bottle holds; big amounts need the bigger unit."]
  },
  {
    id: "g3-maths-measurement-a-q17",
    prompt: "A road sign says the next village is 3 km 40 m away. Uday's map app shows distances only in metres. What does the app show?",
    options: [
      { id: "a", text: "340 m" },
      { id: "b", text: "3040 m" },
      { id: "c", text: "3400 m" },
      { id: "d", text: "30040 m" }
    ],
    answerId: "b",
    explanation: "1 km = 1000 m, so 3 km = 3000 m, and 3000 m + 40 m = 3040 m. 3400 m is tempting if you treat the 40 as 400, but 40 m is just forty metres, so the hundreds digit stays 0.",
    hints: ["Change only the kilometres on Uday's road sign into metres first, then add the extra metres, taking care with zeros."]
  },
  {
    id: "g3-maths-measurement-a-q18",
    prompt: "Two ribbons, P and Q, are placed above the same ruler, as shown. Which ribbon is longer, and by how much?",
    options: [
      { id: "a", text: "Ribbon Q, by 4 cm" },
      { id: "b", text: "Ribbon Q, by 1 cm" },
      { id: "c", text: "Ribbon P, by 3 cm" },
      { id: "d", text: "They are the same length." }
    ],
    answerId: "b",
    explanation: "P runs from 2 to 9, so P = 9 \u2212 2 = 7 cm. Q runs from 5 to 13, so Q = 13 \u2212 5 = 8 cm. Q is longer by 8 \u2212 7 = 1 cm. 'Ribbon Q, by 4 cm' is tempting because Q's right end sticks out 4 cm past P's, but P also starts earlier, so you must find each full length.",
    hints: ["Find each ribbon's own length from its start mark and end mark before comparing them; the ends alone can fool you."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 164\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two ribbons above a centimetre ruler\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"164\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"240.0\" y=\"18\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ribbons P and Q above one ruler</text>\n  <g class=\"part ruler\">\n  <rect class=\"part ruler-body\" x=\"20\" y=\"104\" width=\"440\" height=\"46\" rx=\"3\" fill=\"#fff59d\" stroke=\"#827717\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"30\" y1=\"104\" x2=\"30\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"30\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick minor\" x1=\"45\" y1=\"104\" x2=\"45\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"60\" y1=\"104\" x2=\"60\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"60\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"tick minor\" x1=\"75\" y1=\"104\" x2=\"75\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"90\" y1=\"104\" x2=\"90\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"90\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"tick minor\" x1=\"105\" y1=\"104\" x2=\"105\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"120\" y1=\"104\" x2=\"120\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"120\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"tick minor\" x1=\"135\" y1=\"104\" x2=\"135\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"150\" y1=\"104\" x2=\"150\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"150\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"tick minor\" x1=\"165\" y1=\"104\" x2=\"165\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"180\" y1=\"104\" x2=\"180\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"180\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"tick minor\" x1=\"195\" y1=\"104\" x2=\"195\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"210\" y1=\"104\" x2=\"210\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"210\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick minor\" x1=\"225\" y1=\"104\" x2=\"225\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"104\" x2=\"240\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"240\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"tick minor\" x1=\"255\" y1=\"104\" x2=\"255\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"270\" y1=\"104\" x2=\"270\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"270\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick minor\" x1=\"285\" y1=\"104\" x2=\"285\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"300\" y1=\"104\" x2=\"300\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"300\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"tick minor\" x1=\"315\" y1=\"104\" x2=\"315\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"330\" y1=\"104\" x2=\"330\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"330\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <line class=\"tick minor\" x1=\"345\" y1=\"104\" x2=\"345\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"360\" y1=\"104\" x2=\"360\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"360\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <line class=\"tick minor\" x1=\"375\" y1=\"104\" x2=\"375\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"390\" y1=\"104\" x2=\"390\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"390\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <line class=\"tick minor\" x1=\"405\" y1=\"104\" x2=\"405\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"420\" y1=\"104\" x2=\"420\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"420\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">13</text>\n  <line class=\"tick minor\" x1=\"435\" y1=\"104\" x2=\"435\" y2=\"113\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"450\" y1=\"104\" x2=\"450\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"450\" y=\"136\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">14</text>\n  <g class=\"part object\">\n  <rect class=\"part object-body\" x=\"90\" y=\"38\" width=\"210\" height=\"26\" rx=\"5\" fill=\"#ce93d8\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label\" x=\"195\" y=\"56\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  </g>\n  <line class=\"guide\" x1=\"90\" y1=\"64\" x2=\"90\" y2=\"104\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  <line class=\"guide\" x1=\"300\" y1=\"64\" x2=\"300\" y2=\"104\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  <g class=\"part object\">\n  <rect class=\"part object-body\" x=\"180\" y=\"72\" width=\"240\" height=\"26\" rx=\"5\" fill=\"#80deea\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label\" x=\"300\" y=\"90\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Q</text>\n  </g>\n  <line class=\"guide\" x1=\"180\" y1=\"98\" x2=\"180\" y2=\"104\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  <line class=\"guide\" x1=\"420\" y1=\"98\" x2=\"420\" y2=\"104\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  </g>\n</svg>", "alt": "A centimetre ruler marked 0 to 14. Ribbon P (purple, higher up) runs from the 2 mark to the 9 mark. Ribbon Q (blue, just above the ruler) runs from the 5 mark to the 13 mark. Dashed lines drop from the ribbon ends to the ruler."}
  },
  {
    id: "g3-maths-measurement-a-q19",
    prompt: "Complete the analogy. The length of a sari : metres :: the weight of a sack of wheat : ___",
    options: [
      { id: "a", text: "grams" },
      { id: "b", text: "litres" },
      { id: "c", text: "kilometres" },
      { id: "d", text: "kilograms" }
    ],
    answerId: "d",
    explanation: "A sari is a long cloth, so we measure its length in metres, the everyday unit for it. A sack of wheat is heavy, so its weight is measured in kilograms. Grams is tempting because it is also a weight unit, but grams suit light things like a spoon of salt, not a heavy sack.",
    hints: ["Match the sari's everyday unit with the everyday unit for a heavy sack: is the sack light or heavy?"]
  },
  {
    id: "g3-maths-measurement-a-q20",
    prompt: "Vihaan has an empty 5 L jug, an empty 3 L jug and a tap. Neither jug has any marks. Each of these counts as one step: filling a jug from the tap, emptying a jug onto the plants, or pouring from one jug into the other until the first is empty or the second is full. What is the smallest number of steps he needs to get exactly 4 L of water in the 5 L jug?",
    options: [
      { id: "a", text: "6 steps" },
      { id: "b", text: "4 steps" },
      { id: "c", text: "5 steps" },
      { id: "d", text: "8 steps" }
    ],
    answerId: "a",
    explanation: "Fill the 5 L jug (5, 0). Pour into the 3 L jug (2, 3). Empty the 3 L jug (2, 0). Pour the 2 L across (0, 2). Fill the 5 L jug again (5, 2). Pour into the 3 L jug until it is full; only 1 L fits, so 4 L stays in the big jug (4, 3). That is 6 steps, and no shorter way exists. 8 steps is tempting because starting with the 3 L jug also works (3 + 3 \u2212 5 = 1 L, and so on), but that route is longer.",
    hints: ["Vihaan can trap an exact small amount by filling the big jug and pouring off what fits in the small jug."]
  },
  {
    id: "g3-maths-measurement-a-q21",
    prompt: "Wamiq weighs a coconut and a pineapple on two level balances, as shown. How much does the pineapple weigh?",
    options: [
      { id: "a", text: "600 g" },
      { id: "b", text: "900 g" },
      { id: "c", text: "750 g" },
      { id: "d", text: "1200 g" }
    ],
    answerId: "a",
    explanation: "Balance 1: coconut + pineapple = 1 kg 500 g = 1500 g. Balance 2: coconut = pineapple + 300 g. So in Balance 1 the coconut can be swapped for 'pineapple + 300 g': two pineapples + 300 g = 1500 g, two pineapples = 1200 g, one pineapple = 600 g (and the coconut is 900 g). 900 g is tempting because it is the coconut's weight, and 750 g comes from halving 1500 g as if both fruits weighed the same.",
    hints: ["Use Balance 2 to swap the coconut on Balance 1 for something else, so only pineapples and weights remain."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 720 302\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two level balances with a coconut, a pineapple and weights\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"720\" height=\"302\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"360.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Wamiq's two level balances</text>\n  <g class=\"part puzzle\">\n  <g class=\"part balance\">\n  <polygon class=\"part stand\" points=\"180,92 164,212 196,212\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <rect class=\"part base\" x=\"130\" y=\"212\" width=\"100\" height=\"8\" rx=\"2\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/>\n  <line class=\"part beam\" x1=\"72\" y1=\"92\" x2=\"288\" y2=\"92\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part pivot\" cx=\"180\" cy=\"92\" r=\"5\" fill=\"#ffca28\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"72\" y1=\"92\" x2=\"18\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"72\" y1=\"92\" x2=\"126\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 10 162 Q 72 184 134 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"50.5\" cy=\"146\" rx=\"20\" ry=\"16\" fill=\"#a1887f\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"50.5\" y=\"151\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">C</text>\n  </g>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"93.5\" cy=\"146\" rx=\"20\" ry=\"16\" fill=\"#ffd54f\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"93.5\" y=\"151\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  </g>\n  </g>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"288\" y1=\"92\" x2=\"234\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"288\" y1=\"92\" x2=\"342\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 226 162 Q 288 184 350 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"247.5,132 277.5,132 283.5,162 241.5,162\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"262.5\" y=\"152\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1 kg</text>\n  </g>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"292.5,132 328.5,132 334.5,162 286.5,162\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"310.5\" y=\"152\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">500 g</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"180\" y=\"238\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Balance 1</text>\n  </g>\n  <g class=\"part balance\">\n  <polygon class=\"part stand\" points=\"540,92 524,212 556,212\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <rect class=\"part base\" x=\"490\" y=\"212\" width=\"100\" height=\"8\" rx=\"2\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/>\n  <line class=\"part beam\" x1=\"432\" y1=\"92\" x2=\"648\" y2=\"92\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part pivot\" cx=\"540\" cy=\"92\" r=\"5\" fill=\"#ffca28\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"432\" y1=\"92\" x2=\"378\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"432\" y1=\"92\" x2=\"486\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 370 162 Q 432 184 494 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"432\" cy=\"146\" rx=\"20\" ry=\"16\" fill=\"#a1887f\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"432\" y=\"151\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">C</text>\n  </g>\n  </g>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"648\" y1=\"92\" x2=\"594\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"648\" y1=\"92\" x2=\"702\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 586 162 Q 648 184 710 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <ellipse class=\"part item\" cx=\"622.5\" cy=\"146\" rx=\"20\" ry=\"16\" fill=\"#ffd54f\" stroke=\"#33691e\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"622.5\" y=\"151\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  </g>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"651.5,132 687.5,132 693.5,162 645.5,162\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"669.5\" y=\"152\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">300 g</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"540\" y=\"238\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Balance 2</text>\n  </g>\n  </g>\n  <line class=\"divider\" x1=\"360\" y1=\"60\" x2=\"360\" y2=\"240\" stroke=\"#bdbdbd\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <text class=\"label small\" x=\"360\" y=\"290\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">C = the coconut, P = the pineapple</text>\n</svg>", "alt": "Balance 1 is level: its left pan holds the coconut C and the pineapple P, and its right pan holds a 1 kg weight and a 500 g weight. Balance 2 is level: its left pan holds only the coconut C, and its right pan holds the pineapple P and a 300 g weight."}
  },
  {
    id: "g3-maths-measurement-a-q22",
    prompt: "A nature trail in a hill park is 2 km long. The park puts a marker stone at the start, then one every 250 m, with the last stone exactly at the end of the trail. How many marker stones are there in all?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "7" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "2 km = 2000 m. 2000 \u00f7 250 = 8, so the trail is split into 8 equal gaps. A line with 8 gaps has 8 + 1 = 9 stones, because there is a stone at both ends. 8 is tempting because it is the number of gaps, but the stone at the start must be counted too.",
    hints: ["Find how many equal gaps the trail splits into, then picture the stones at the two ends of those gaps."]
  },
  {
    id: "g3-maths-measurement-a-q23",
    prompt: "Rice costs \u20b960 for each kilogram at Xavier's ration shop. Yamini buys 2 kg 500 g of rice and gives the shopkeeper \u20b9200. How much change does she get?",
    options: [
      { id: "a", text: "\u20b980" },
      { id: "b", text: "\u20b9150" },
      { id: "c", text: "\u20b950" },
      { id: "d", text: "\u20b920" }
    ],
    answerId: "c",
    explanation: "2 kg cost 2 \u00d7 \u20b960 = \u20b9120. 500 g is half a kilogram, so it costs half of \u20b960 = \u20b930. The rice costs \u20b9120 + \u20b930 = \u20b9150, and the change is \u20b9200 \u2212 \u20b9150 = \u20b950. \u20b980 is tempting if you forget the 500 g, \u20b9150 is the cost not the change, and \u20b920 comes from paying for 3 full kilograms.",
    hints: ["Work out the price of the grams part of Yamini's rice using half a kilogram, then find the full cost before the change."]
  },
  {
    id: "g3-maths-measurement-a-q24",
    prompt: "Zeba pours buttermilk from this jug into glasses that hold 150 mL each. She fills as many glasses as she can, right to the top. How much buttermilk is left in the jug?",
    options: [
      { id: "a", text: "50 mL" },
      { id: "b", text: "100 mL" },
      { id: "c", text: "150 mL" },
      { id: "d", text: "200 mL" }
    ],
    answerId: "a",
    explanation: "The jug holds 800 mL. 5 glasses take 5 \u00d7 150 = 750 mL, and a sixth glass would need 900 mL, which is too much. So 800 \u2212 750 = 50 mL is left. 200 mL is tempting if you stop after 4 glasses (600 mL), but there is still enough for a fifth glass.",
    hints: ["Read Zeba's jug, then keep adding a glass at a time until the next glass would need more buttermilk than the jug has."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 360 262\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A 1 litre measuring jug filled with buttermilk\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"360\" height=\"262\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"180.0\" y=\"18\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Zeba's jug of buttermilk</text>\n  <g class=\"part jug\">\n  <rect class=\"part water\" x=\"130\" y=\"82\" width=\"90\" height=\"160\" rx=\"0\" fill=\"#81d4fa\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug-body\" d=\"M 130 30 L 130 242 L 220 242 L 220 30\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 220 48 C 250 48 250 162 220 162\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick minor\" x1=\"130\" y1=\"222\" x2=\"144\" y2=\"222\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"202\" x2=\"154\" y2=\"202\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"206\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">200 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"182\" x2=\"144\" y2=\"182\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"162\" x2=\"154\" y2=\"162\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"166\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">400 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"142\" x2=\"144\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"122\" x2=\"154\" y2=\"122\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"126\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">600 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"102\" x2=\"144\" y2=\"102\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"82\" x2=\"154\" y2=\"82\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"86\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">800 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"62\" x2=\"144\" y2=\"62\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"42\" x2=\"154\" y2=\"42\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"46\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  </g>\n</svg>", "alt": "A measuring jug marked every 100 mL up to 1 L, with labels at 200, 400, 600, 800 mL and 1 L. The buttermilk reaches the 800 mL mark."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-maths-measurement-b-q01",
    prompt: "Bina measures a matchbox on her ruler, as shown. How many such matchboxes, placed end to end, would make the length of her 30 cm scale?",
    options: [
      { id: "a", text: "5 matchboxes" },
      { id: "b", text: "25 matchboxes" },
      { id: "c", text: "35 matchboxes" },
      { id: "d", text: "6 matchboxes" }
    ],
    answerId: "d",
    explanation: "The matchbox goes from 0 to 5, so it is 5 cm long. 30 cm \u00f7 5 cm = 6, so 6 matchboxes fit end to end along the scale. 5 matchboxes is tempting because 5 is the length you read off the ruler, but that is the size of one matchbox, not how many fit.",
    hints: ["First read how long Bina's matchbox is, then count how many of that length make up the whole scale."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 410 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A matchbox lying along a centimetre ruler\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"410\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"205.0\" y=\"20\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bina's matchbox on a cm ruler</text>\n  <g class=\"part ruler\">\n  <rect class=\"part ruler-body\" x=\"20\" y=\"70\" width=\"360\" height=\"46\" rx=\"3\" fill=\"#fff59d\" stroke=\"#827717\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"30\" y1=\"70\" x2=\"30\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"30\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick minor\" x1=\"47\" y1=\"70\" x2=\"47\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"64\" y1=\"70\" x2=\"64\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"64\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"tick minor\" x1=\"81\" y1=\"70\" x2=\"81\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"98\" y1=\"70\" x2=\"98\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"98\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"tick minor\" x1=\"115\" y1=\"70\" x2=\"115\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"132\" y1=\"70\" x2=\"132\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"132\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"tick minor\" x1=\"149\" y1=\"70\" x2=\"149\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"166\" y1=\"70\" x2=\"166\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"166\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"tick minor\" x1=\"183\" y1=\"70\" x2=\"183\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"200\" y1=\"70\" x2=\"200\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"200\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"tick minor\" x1=\"217\" y1=\"70\" x2=\"217\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"234\" y1=\"70\" x2=\"234\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"234\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick minor\" x1=\"251\" y1=\"70\" x2=\"251\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"268\" y1=\"70\" x2=\"268\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"tick minor\" x1=\"285\" y1=\"70\" x2=\"285\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"302\" y1=\"70\" x2=\"302\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"302\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick minor\" x1=\"319\" y1=\"70\" x2=\"319\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"336\" y1=\"70\" x2=\"336\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"336\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"tick minor\" x1=\"353\" y1=\"70\" x2=\"353\" y2=\"79\" stroke=\"#555\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"370\" y1=\"70\" x2=\"370\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"370\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <g class=\"part object\">\n  <rect class=\"part object-body\" x=\"30\" y=\"38\" width=\"170\" height=\"26\" rx=\"5\" fill=\"#ffab91\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label\" x=\"115\" y=\"56\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">matchbox</text>\n  </g>\n  <line class=\"guide\" x1=\"30\" y1=\"64\" x2=\"30\" y2=\"70\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  <line class=\"guide\" x1=\"200\" y1=\"64\" x2=\"200\" y2=\"70\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"2 2\"/>\n  </g>\n</svg>", "alt": "A centimetre ruler marked 0 to 10. An orange matchbox lies on it from the 0 mark to the 5 mark."}
  },
  {
    id: "g3-maths-measurement-b-q02",
    prompt: "Charu wrote four sentences in her notebook. Which sentence uses an amount that does NOT make sense?",
    options: [
      { id: "a", text: "A water bottle holds 1 L." },
      { id: "b", text: "A bag of potatoes weighs 5 kg." },
      { id: "c", text: "A new pencil is 18 cm long." },
      { id: "d", text: "A teaspoon holds 5 L of cough syrup." }
    ],
    answerId: "d",
    explanation: "A teaspoon is tiny and holds only about 5 mL, so '5 L' is far too much; 5 L would fill a whole bucket. The sentence about the bag of potatoes is tempting because 5 kg sounds heavy, but a big bag of potatoes from the market really can weigh that much.",
    hints: ["Picture each of Charu's objects in your hand and ask whether the amount written could really fit or weigh that much."]
  },
  {
    id: "g3-maths-measurement-b-q03",
    prompt: "Danish wants to find something that is about 1 m long. Which of these is the best choice?",
    options: [
      { id: "a", text: "a toothbrush" },
      { id: "b", text: "a guitar" },
      { id: "c", text: "a railway platform" },
      { id: "d", text: "a bus ticket" }
    ],
    answerId: "b",
    explanation: "A guitar is about 100 cm long, which is 1 m. A toothbrush and a bus ticket are only a few centimetres long. A railway platform is tempting because it is 'long', but it is hundreds of metres long, far more than 1 m.",
    hints: ["Danish needs something about a hundred centimetres long. Picture each object lying next to a metre scale."]
  },
  {
    id: "g3-maths-measurement-b-q04",
    prompt: "Dadi packs 1 kg of sugar into small packets of 250 g each to give to the neighbours on Sankranti. How many packets does she fill?",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "40" }
    ],
    answerId: "c",
    explanation: "1 kg = 1000 g. 250 g + 250 g + 250 g + 250 g = 1000 g, so 4 packets. 40 is tempting if you drop a zero and divide 1000 by 25, but each packet holds 250 g, so only 4 packets make a kilogram.",
    hints: ["Write Dadi's kilogram of sugar in grams and keep adding packets until you reach it."]
  },
  {
    id: "g3-maths-measurement-b-q05",
    prompt: "Elina has a 3 m long saree border and a piece of lace that is 290 cm long. Which is longer, and by how much?",
    options: [
      { id: "a", text: "the lace, by 287 cm" },
      { id: "b", text: "the lace, by 10 cm" },
      { id: "c", text: "the border, by 10 cm" },
      { id: "d", text: "the border, by 1 m" }
    ],
    answerId: "c",
    explanation: "3 m = 300 cm, and 300 cm is more than 290 cm, so the border is longer by 300 \u2212 290 = 10 cm. 'The lace, by 287 cm' is tempting because 290 looks bigger than 3, but you cannot compare numbers that are in different units.",
    hints: ["Change Elina's border into centimetres so both lengths are in the same unit before you compare."]
  },
  {
    id: "g3-maths-measurement-b-q06",
    prompt: "Firoz needs milk for a banana milkshake. His jug has small marks between the numbered marks. How much milk has he poured so far?",
    options: [
      { id: "a", text: "300 mL" },
      { id: "b", text: "400 mL" },
      { id: "c", text: "350 mL" },
      { id: "d", text: "450 mL" }
    ],
    answerId: "c",
    explanation: "The long marks go up by 100 mL, and there is one short mark between them, so each short mark is 50 mL. The milk is at the short mark just above 300 mL, so it is 300 + 50 = 350 mL. 300 mL is tempting because it is the nearest number written below the level, but the milk is above that line.",
    hints: ["Work out what each small mark on Firoz's jug stands for by looking at the gap between two labelled marks."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 360 258\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A measuring jug with milk\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"360\" height=\"258\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"180.0\" y=\"18\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Firoz's measuring jug</text>\n  <g class=\"part jug\">\n  <rect class=\"part water\" x=\"130\" y=\"98\" width=\"90\" height=\"140\" rx=\"0\" fill=\"#81d4fa\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug-body\" d=\"M 130 26 L 130 238 L 220 238 L 220 26\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 220 44 C 250 44 250 158 220 158\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick minor\" x1=\"130\" y1=\"218\" x2=\"144\" y2=\"218\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"198\" x2=\"154\" y2=\"198\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"202\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">100 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"178\" x2=\"144\" y2=\"178\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"158\" x2=\"154\" y2=\"158\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"162\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">200 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"138\" x2=\"144\" y2=\"138\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"118\" x2=\"154\" y2=\"118\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"122\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">300 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"98\" x2=\"144\" y2=\"98\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"78\" x2=\"154\" y2=\"78\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"82\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">400 mL</text>\n  <line class=\"tick minor\" x1=\"130\" y1=\"58\" x2=\"144\" y2=\"58\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"130\" y1=\"38\" x2=\"154\" y2=\"38\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"158\" y=\"42\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">500 mL</text>\n  </g>\n</svg>", "alt": "A 500 mL measuring jug with a short mark every 50 mL and a labelled long mark every 100 mL (100, 200, 300, 400, 500 mL). The milk reaches the short mark halfway between 300 mL and 400 mL."}
  },
  {
    id: "g3-maths-measurement-b-q07",
    prompt: "Gauri's dairy can holds 5 L of milk in the morning. She sells 3 L 500 mL to the tea stall. How much milk is still in the can?",
    options: [
      { id: "a", text: "2 L 500 mL" },
      { id: "b", text: "8 L 500 mL" },
      { id: "c", text: "1 L 50 mL" },
      { id: "d", text: "1 L 500 mL" }
    ],
    answerId: "d",
    explanation: "5 L = 5000 mL and 3 L 500 mL = 3500 mL. 5000 \u2212 3500 = 1500 mL = 1 L 500 mL. 2 L 500 mL is tempting if you take 3 L from 5 L and then forget to take away the extra 500 mL.",
    hints: ["Write both amounts in Gauri's question in millilitres, then subtract carefully."]
  },
  {
    id: "g3-maths-measurement-b-q08",
    prompt: "A jeweller keeps small brass weights in a row: 5 g, 10 g, 20 g, 40 g, \u2026 Each weight follows the same rule. What is the next weight?",
    options: [
      { id: "a", text: "60 g" },
      { id: "b", text: "80 g" },
      { id: "c", text: "50 g" },
      { id: "d", text: "45 g" }
    ],
    answerId: "b",
    explanation: "Each weight is double the one before it: 5 \u00d7 2 = 10, 10 \u00d7 2 = 20, 20 \u00d7 2 = 40, so next comes 40 \u00d7 2 = 80 g. 60 g is tempting if you add 20 each time, but the jumps are 5, 10, 20, which keep doubling, not staying the same.",
    hints: ["Compare each brass weight with the one just before it; is the jeweller adding the same amount or doing something else?"]
  },
  {
    id: "g3-maths-measurement-b-q09",
    prompt: "Jagdish joins a 65 cm piece of gota lace and a 48 cm piece of gota lace to decorate a dupatta. How long is the joined lace?",
    options: [
      { id: "a", text: "1 m 13 cm" },
      { id: "b", text: "1 m 3 cm" },
      { id: "c", text: "1 m 23 cm" },
      { id: "d", text: "13 cm" }
    ],
    answerId: "a",
    explanation: "65 + 48 = 113 cm. 100 cm make 1 m, so 113 cm = 1 m 13 cm. 1 m 3 cm is tempting if you forget to carry: 5 + 8 = 13 ones gives a ten to carry, making 11 tens, not 10.",
    hints: ["Add Jagdish's two lace pieces in centimetres, remember to carry, then change every hundred centimetres into a metre."]
  },
  {
    id: "g3-maths-measurement-b-q10",
    prompt: "Hemant opens the maths kit box at school and finds four tools. Three of them belong together. Which tool is the odd one out?",
    options: [
      { id: "a", text: "measuring jug" },
      { id: "b", text: "measuring tape" },
      { id: "c", text: "metre scale" },
      { id: "d", text: "ruler" }
    ],
    answerId: "a",
    explanation: "A measuring tape, a metre scale and a ruler all measure length. A measuring jug measures how much liquid there is (capacity), so it is the odd one out. 'Measuring tape' is tempting because it shares the word 'measuring' with the jug, but it still measures length.",
    hints: ["Ask what each tool in Hemant's kit measures; a ruler tells how long something is. Which tool tells something different?"]
  },
  {
    id: "g3-maths-measurement-b-q11",
    prompt: "Indu's mother buys curtain cloth and cuts it into three pieces for three windows. The bar model shows the whole cloth. How long is the third piece?",
    options: [
      { id: "a", text: "85 cm" },
      { id: "b", text: "215 cm" },
      { id: "c", text: "115 cm" },
      { id: "d", text: "185 cm" }
    ],
    answerId: "a",
    explanation: "3 m = 300 cm. The two known pieces are 120 + 95 = 215 cm, so the third piece is 300 \u2212 215 = 85 cm. 215 cm is tempting because it is the first answer you work out, but it is the two known pieces together. 115 cm comes from a borrowing slip in 300 \u2212 215.",
    hints: ["Change the whole cloth into centimetres, add the two labelled pieces, then find what Indu's mother has left for the third window."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 136\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar model of a cloth cut into three pieces\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"136\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Indu's curtain cloth</text>\n  <g class=\"part barmodel\">\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"40\" y=\"46\" width=\"144\" height=\"32\" rx=\"0\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"112\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">120 cm</text>\n  </g>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"184\" y=\"46\" width=\"114\" height=\"32\" rx=\"0\" fill=\"#f8bbd0\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"241\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">95 cm</text>\n  </g>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"298\" y=\"46\" width=\"102\" height=\"32\" rx=\"0\" fill=\"#eeeeee\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"349\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  </g>\n  <g class=\"part brace\">\n  <line class=\"arrow\" x1=\"40\" y1=\"96\" x2=\"400\" y2=\"96\" stroke=\"#c62828\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"40,96 48,91 48,101\" fill=\"#c62828\"/>\n  <polygon class=\"arrow\" points=\"400,96 392,91 392,101\" fill=\"#c62828\"/>\n  <text class=\"label value\" x=\"220\" y=\"116\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">3 m</text>\n  </g>\n  </g>\n</svg>", "alt": "A bar model of the whole cloth, 3 m long, split into three pieces: 120 cm, 95 cm and a piece marked with a question mark. A red arrow under the bar shows the total 3 m."}
  },
  {
    id: "g3-maths-measurement-b-q12",
    prompt: "At Juhi's dairy, curd costs \u20b930 for every 500 g. Kunal buys 2 kg of curd for a family function. How much does he pay?",
    options: [
      { id: "a", text: "\u20b960" },
      { id: "b", text: "\u20b9120" },
      { id: "c", text: "\u20b990" },
      { id: "d", text: "\u20b9240" }
    ],
    answerId: "b",
    explanation: "2 kg = 2000 g, and 2000 g holds four lots of 500 g. 4 \u00d7 \u20b930 = \u20b9120. \u20b960 is tempting if you think \u20b930 is the price of a whole kilogram, but \u20b930 buys only half a kilogram.",
    hints: ["Find how many lots of 500 g fit into Kunal's curd before you multiply by the price."]
  },
  {
    id: "g3-maths-measurement-b-q13",
    prompt: "Lalit puts a 1 kg bag of rice on a balance and some weights on the other pan, as shown. How much more weight must he add to the weights' pan to make the balance level?",
    options: [
      { id: "a", text: "900 g" },
      { id: "b", text: "100 g" },
      { id: "c", text: "300 g" },
      { id: "d", text: "200 g" }
    ],
    answerId: "b",
    explanation: "The weights add up to 200 + 200 + 500 = 900 g. The rice weighs 1 kg = 1000 g, so the weights' pan needs 1000 \u2212 900 = 100 g more. 900 g is tempting because it is the total of the weights, but that is what is already on the pan. The tilt agrees: the rice side is heavier, so it hangs lower.",
    hints: ["Add up the weights on Lalit's raised pan, then compare that total with the rice bag in grams."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 282\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A tilted balance with a rice bag and three weights\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"282\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"210.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Lalit's balance</text>\n  <g class=\"part balance\">\n  <polygon class=\"part stand\" points=\"210,92 194,212 226,212\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <rect class=\"part base\" x=\"160\" y=\"212\" width=\"100\" height=\"8\" rx=\"2\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/>\n  <line class=\"part beam\" x1=\"82\" y1=\"104\" x2=\"338\" y2=\"80\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part pivot\" cx=\"210\" cy=\"92\" r=\"5\" fill=\"#ffca28\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"82\" y1=\"104\" x2=\"18\" y2=\"174\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"82\" y1=\"104\" x2=\"146\" y2=\"174\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 10 174 Q 82 196 154 174 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"52\" y=\"136\" width=\"60\" height=\"38\" rx=\"4\" fill=\"#fff3e0\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"82\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1 kg</text>\n  </g>\n  </g>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"338\" y1=\"80\" x2=\"274\" y2=\"150\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"338\" y1=\"80\" x2=\"402\" y2=\"150\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 266 150 Q 338 172 410 150 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"277,122 307,122 313,150 271,150\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"292\" y=\"141\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">200 g</text>\n  </g>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"322,122 352,122 358,150 316,150\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"337\" y=\"141\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">200 g</text>\n  </g>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"367,120 399,120 405,150 361,150\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"383\" y=\"140\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">500 g</text>\n  </g>\n  </g>\n  </g>\n  <text class=\"label small\" x=\"210\" y=\"270\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Left pan: a bag of rice marked 1 kg</text>\n</svg>", "alt": "A pan balance tilted to the left. The left pan holds a bag of rice marked 1 kg and hangs lower. The right pan holds weights of 200 g, 200 g and 500 g and is raised."}
  },
  {
    id: "g3-maths-measurement-b-q14",
    prompt: "Mitali wants to fill Bottle P and Bottle Q with water using only Bottle R. How many times must she fill Bottle R and pour it out to fill both P and Q exactly?",
    options: [
      { id: "a", text: "3 times" },
      { id: "b", text: "6 times" },
      { id: "c", text: "4 times" },
      { id: "d", text: "7 times" }
    ],
    answerId: "b",
    explanation: "P and Q together hold 500 mL + 1 L = 500 + 1000 = 1500 mL. Bottle R holds 250 mL, and 1500 \u00f7 250 = 6, so she fills R 6 times. 4 times is tempting because that is how many R-fulls Bottle Q alone takes, but P must be filled too.",
    hints: ["Write what Bottle Q holds in millilitres, add Bottle P, then count how many of Bottle R make that amount."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 244\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Three bottles labelled with how much they hold\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"244\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"200.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Mitali's bottles</text>\n  <g class=\"part shelf\">\n  <g class=\"part bottle\">\n  <rect class=\"part bottle-body\" x=\"55\" y=\"142\" width=\"60\" height=\"70\" rx=\"10\" fill=\"#b2ebf2\" stroke=\"#006064\" stroke-width=\"2\"/>\n  <rect class=\"part neck\" x=\"76\" y=\"126\" width=\"18\" height=\"18\" rx=\"2\" fill=\"#e0f7fa\" stroke=\"#006064\" stroke-width=\"2\"/>\n  <rect class=\"part cap\" x=\"74\" y=\"118\" width=\"22\" height=\"9\" rx=\"2\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"85\" y=\"182\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">500 mL</text>\n  <text class=\"label option-label\" x=\"85\" y=\"230\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bottle P</text>\n  </g>\n  <g class=\"part bottle\">\n  <rect class=\"part bottle-body\" x=\"170\" y=\"72\" width=\"60\" height=\"140\" rx=\"10\" fill=\"#c8e6c9\" stroke=\"#006064\" stroke-width=\"2\"/>\n  <rect class=\"part neck\" x=\"191\" y=\"56\" width=\"18\" height=\"18\" rx=\"2\" fill=\"#e0f7fa\" stroke=\"#006064\" stroke-width=\"2\"/>\n  <rect class=\"part cap\" x=\"189\" y=\"48\" width=\"22\" height=\"9\" rx=\"2\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"200\" y=\"147\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  <text class=\"label option-label\" x=\"200\" y=\"230\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bottle Q</text>\n  </g>\n  <g class=\"part bottle\">\n  <rect class=\"part bottle-body\" x=\"285\" y=\"177\" width=\"60\" height=\"35\" rx=\"10\" fill=\"#ffe0b2\" stroke=\"#006064\" stroke-width=\"2\"/>\n  <rect class=\"part neck\" x=\"306\" y=\"161\" width=\"18\" height=\"18\" rx=\"2\" fill=\"#e0f7fa\" stroke=\"#006064\" stroke-width=\"2\"/>\n  <rect class=\"part cap\" x=\"304\" y=\"153\" width=\"22\" height=\"9\" rx=\"2\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"315\" y=\"199.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">250 mL</text>\n  <text class=\"label option-label\" x=\"315\" y=\"230\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bottle R</text>\n  </g>\n  </g>\n  <line class=\"shelf-line\" x1=\"30\" y1=\"212\" x2=\"370\" y2=\"212\" stroke=\"#795548\" stroke-width=\"3\"/>\n</svg>", "alt": "Three bottles stand on a shelf, drawn to scale. Bottle P holds 500 mL, Bottle Q holds 1 L and is the tallest, and Bottle R holds 250 mL and is the shortest."}
  },
  {
    id: "g3-maths-measurement-b-q15",
    prompt: "The walking path around the lake near Naveen's house is 2 km long. Naveen's grandfather has walked 650 m of it so far. How much farther must he walk to finish one round?",
    options: [
      { id: "a", text: "1450 m" },
      { id: "b", text: "2650 m" },
      { id: "c", text: "1350 m" },
      { id: "d", text: "1250 m" }
    ],
    answerId: "c",
    explanation: "2 km = 2000 m, and 2000 \u2212 650 = 1350 m. 1450 m is tempting if you slip while regrouping across the zeros of 2000, and 2650 m comes from adding instead of taking away.",
    hints: ["Change the lake path into metres, then subtract what Naveen's grandfather has already walked, regrouping across the zeros carefully."]
  },
  {
    id: "g3-maths-measurement-b-q16",
    prompt: "Complete the analogy. 4 m : 400 cm :: 6 kg : ___",
    options: [
      { id: "a", text: "600 g" },
      { id: "b", text: "6000 g" },
      { id: "c", text: "60 g" },
      { id: "d", text: "6 g" }
    ],
    answerId: "b",
    explanation: "The first pair writes 4 m in the smaller unit: 1 m = 100 cm, so 4 m = 400 cm. In the same way write 6 kg in grams, but 1 kg = 1000 g, so 6 kg = 6000 g. 600 g is tempting because it copies the 'add two zeros' step from metres, but a kilogram has 1000 grams, not 100.",
    hints: ["In this analogy the first pair turns metres into centimetres. Ask how many grams make a kilogram; it differs from metres."]
  },
  {
    id: "g3-maths-measurement-b-q17",
    prompt: "Oviya has juice in two jugs, as shown. She wants both jugs to have the same amount of juice. How much juice should she pour from Jug P into Jug Q?",
    options: [
      { id: "a", text: "175 mL" },
      { id: "b", text: "350 mL" },
      { id: "c", text: "425 mL" },
      { id: "d", text: "125 mL" }
    ],
    answerId: "a",
    explanation: "Jug P has 600 mL and Jug Q has 250 mL. The difference is 600 \u2212 250 = 350 mL. Pouring moves juice from P to Q, so pour half the difference: 350 \u00f7 2 = 175 mL. Then both have 425 mL. 350 mL is tempting because it is the difference, but pouring all of it would leave P with 250 mL and Q with 600 mL, just swapped.",
    hints: ["Find the difference between Oviya's jugs; pouring makes one jug go down while the other goes up."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 274\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two measuring jugs with different amounts of juice\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"274\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"200.0\" y=\"18\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Oviya's two jugs of juice</text>\n  <g class=\"part pair\">\n  <g class=\"part jug\">\n  <rect class=\"part water\" x=\"50\" y=\"120\" width=\"80\" height=\"120\" rx=\"0\" fill=\"#81d4fa\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug-body\" d=\"M 50 28 L 50 240 L 130 240 L 130 28\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 130 46 C 160 46 160 160 130 160\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick minor\" x1=\"50\" y1=\"230\" x2=\"64\" y2=\"230\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"220\" x2=\"74\" y2=\"220\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"224\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">100 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"210\" x2=\"64\" y2=\"210\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"200\" x2=\"74\" y2=\"200\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"204\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">200 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"190\" x2=\"64\" y2=\"190\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"180\" x2=\"74\" y2=\"180\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"184\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">300 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"170\" x2=\"64\" y2=\"170\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"160\" x2=\"74\" y2=\"160\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"164\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">400 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"150\" x2=\"64\" y2=\"150\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"140\" x2=\"74\" y2=\"140\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"144\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">500 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"130\" x2=\"64\" y2=\"130\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"120\" x2=\"74\" y2=\"120\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"124\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">600 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"110\" x2=\"64\" y2=\"110\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"100\" x2=\"74\" y2=\"100\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"104\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">700 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"90\" x2=\"64\" y2=\"90\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"80\" x2=\"74\" y2=\"80\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"84\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">800 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"70\" x2=\"64\" y2=\"70\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"60\" x2=\"74\" y2=\"60\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"64\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">900 mL</text>\n  <line class=\"tick minor\" x1=\"50\" y1=\"50\" x2=\"64\" y2=\"50\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"50\" y1=\"40\" x2=\"74\" y2=\"40\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"78\" y=\"44\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  <text class=\"label option-label\" x=\"90\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Jug P</text>\n  </g>\n  <g class=\"part jug\">\n  <rect class=\"part water\" x=\"240\" y=\"190\" width=\"80\" height=\"50\" rx=\"0\" fill=\"#81d4fa\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug-body\" d=\"M 240 28 L 240 240 L 320 240 L 320 28\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 320 46 C 350 46 350 160 320 160\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick minor\" x1=\"240\" y1=\"230\" x2=\"254\" y2=\"230\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"220\" x2=\"264\" y2=\"220\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"224\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">100 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"210\" x2=\"254\" y2=\"210\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"200\" x2=\"264\" y2=\"200\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"204\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">200 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"190\" x2=\"254\" y2=\"190\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"180\" x2=\"264\" y2=\"180\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"184\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">300 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"170\" x2=\"254\" y2=\"170\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"160\" x2=\"264\" y2=\"160\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"164\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">400 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"150\" x2=\"254\" y2=\"150\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"140\" x2=\"264\" y2=\"140\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"144\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">500 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"130\" x2=\"254\" y2=\"130\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"120\" x2=\"264\" y2=\"120\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"124\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">600 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"110\" x2=\"254\" y2=\"110\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"100\" x2=\"264\" y2=\"100\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"104\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">700 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"90\" x2=\"254\" y2=\"90\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"80\" x2=\"264\" y2=\"80\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"84\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">800 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"70\" x2=\"254\" y2=\"70\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"60\" x2=\"264\" y2=\"60\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"64\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">900 mL</text>\n  <line class=\"tick minor\" x1=\"240\" y1=\"50\" x2=\"254\" y2=\"50\" stroke=\"#263238\" stroke-width=\"1\"/>\n  <line class=\"tick\" x1=\"240\" y1=\"40\" x2=\"264\" y2=\"40\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"268\" y=\"44\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  <text class=\"label option-label\" x=\"280\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Jug Q</text>\n  </g>\n  </g>\n</svg>", "alt": "Two 1 L measuring jugs, each with a short mark every 50 mL and labels every 100 mL. Jug P is filled to 600 mL. Jug Q is filled to the short mark halfway between 200 mL and 300 mL."}
  },
  {
    id: "g3-maths-measurement-b-q18",
    prompt: "Four cousins weigh their suitcases before a train trip. Tara's suitcase is lighter than Yash's suitcase. Varun's suitcase is heavier than Wasim's suitcase but lighter than Tara's suitcase. Whose suitcase is the second heaviest?",
    options: [
      { id: "a", text: "Yash's suitcase" },
      { id: "b", text: "Varun's suitcase" },
      { id: "c", text: "Wasim's suitcase" },
      { id: "d", text: "Tara's suitcase" }
    ],
    answerId: "d",
    explanation: "From lightest to heaviest: Wasim, then Varun (heavier than Wasim, lighter than Tara), then Tara, then Yash (heavier than Tara). So the second heaviest is Tara's. Varun's suitcase is tempting because the second clue is all about Varun, but Tara and Yash are both heavier than him.",
    hints: ["Line up the four suitcases from lightest to heaviest using every clue, then count back from the heaviest end."]
  },
  {
    id: "g3-maths-measurement-b-q19",
    prompt: "Pranav's hand span is about 15 cm. He measures the length of his study table and finds it is 8 hand spans long. About how long is the table?",
    options: [
      { id: "a", text: "about 23 cm" },
      { id: "b", text: "about 12 m" },
      { id: "c", text: "about 8 m" },
      { id: "d", text: "about 1 m 20 cm" }
    ],
    answerId: "d",
    explanation: "8 spans of about 15 cm each make about 8 \u00d7 15 = 120 cm, and 120 cm = 1 m 20 cm. 'About 23 cm' is tempting if you add 15 and 8, but each span adds another 15 cm. 'About 12 m' is tempting if you write 120 cm as if it were metres; 12 m would be longer than a classroom.",
    hints: ["Each of Pranav's hand spans adds the same length, so think of repeated addition, then change centimetres into metres and centimetres."]
  },
  {
    id: "g3-maths-measurement-b-q20",
    prompt: "Rehana has 8 L of sugarcane juice in the big jug and two empty jugs, as shown. The jugs have no other marks to help her. A pour means pouring from one jug into another until the first is empty or the second is full. What is the smallest number of pours that leaves exactly 4 L in each of two jugs?",
    options: [
      { id: "a", text: "7 pours" },
      { id: "b", text: "6 pours" },
      { id: "c", text: "8 pours" },
      { id: "d", text: "5 pours" }
    ],
    answerId: "a",
    explanation: "One shortest way, writing (8 L jug, 5 L jug, 3 L jug): (8,0,0) \u2192 (3,5,0) \u2192 (3,2,3) \u2192 (6,2,0) \u2192 (6,0,2) \u2192 (1,5,2) \u2192 (1,4,3) \u2192 (4,4,0). That is 7 pours, and a search of every possible pour shows no shorter way. 6 pours is tempting because after 6 pours you already have 4 L in the 5 L jug, but the other 4 L is still split between two jugs (1 L and 3 L), so one more pour is needed.",
    hints: ["Rehana can make small exact amounts from the juice that does not fit when a jug fills up."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 450 276\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Three jugs holding 8 L, 5 L and 3 L\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"450\" height=\"276\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"225.0\" y=\"18\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Rehana's three jugs</text>\n  <g class=\"part pour-puzzle\">\n  <g class=\"part jug\">\n  <rect class=\"part water\" x=\"40\" y=\"40\" width=\"80\" height=\"200\" rx=\"0\" fill=\"#81d4fa\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug-body\" d=\"M 40 28 L 40 240 L 120 240 L 120 28\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 120 46 C 150 46 150 160 120 160\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick\" x1=\"40\" y1=\"215\" x2=\"64\" y2=\"215\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"219\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  <line class=\"tick\" x1=\"40\" y1=\"190\" x2=\"64\" y2=\"190\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"194\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">2 L</text>\n  <line class=\"tick\" x1=\"40\" y1=\"165\" x2=\"64\" y2=\"165\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"169\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">3 L</text>\n  <line class=\"tick\" x1=\"40\" y1=\"140\" x2=\"64\" y2=\"140\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"144\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">4 L</text>\n  <line class=\"tick\" x1=\"40\" y1=\"115\" x2=\"64\" y2=\"115\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"119\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">5 L</text>\n  <line class=\"tick\" x1=\"40\" y1=\"90\" x2=\"64\" y2=\"90\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"94\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">6 L</text>\n  <line class=\"tick\" x1=\"40\" y1=\"65\" x2=\"64\" y2=\"65\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"69\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">7 L</text>\n  <line class=\"tick\" x1=\"40\" y1=\"40\" x2=\"64\" y2=\"40\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"68\" y=\"44\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">8 L</text>\n  <text class=\"label option-label\" x=\"80\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8 L jug</text>\n  </g>\n  <g class=\"part jug\">\n  <path class=\"part jug-body\" d=\"M 195 103 L 195 240 L 261 240 L 261 103\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 261 121 C 291 121 291 190 261 190\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick\" x1=\"195\" y1=\"215\" x2=\"219\" y2=\"215\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"223\" y=\"219\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  <line class=\"tick\" x1=\"195\" y1=\"190\" x2=\"219\" y2=\"190\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"223\" y=\"194\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">2 L</text>\n  <line class=\"tick\" x1=\"195\" y1=\"165\" x2=\"219\" y2=\"165\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"223\" y=\"169\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">3 L</text>\n  <line class=\"tick\" x1=\"195\" y1=\"140\" x2=\"219\" y2=\"140\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"223\" y=\"144\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">4 L</text>\n  <line class=\"tick\" x1=\"195\" y1=\"115\" x2=\"219\" y2=\"115\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"223\" y=\"119\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">5 L</text>\n  <text class=\"label option-label\" x=\"228\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5 L jug</text>\n  </g>\n  <g class=\"part jug\">\n  <path class=\"part jug-body\" d=\"M 330 153 L 330 240 L 384 240 L 384 153\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <path class=\"part handle\" d=\"M 384 171 C 414 171 414 210 384 210\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"2.5\"/>\n  <line class=\"tick\" x1=\"330\" y1=\"215\" x2=\"354\" y2=\"215\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"358\" y=\"219\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">1 L</text>\n  <line class=\"tick\" x1=\"330\" y1=\"190\" x2=\"354\" y2=\"190\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"358\" y=\"194\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">2 L</text>\n  <line class=\"tick\" x1=\"330\" y1=\"165\" x2=\"354\" y2=\"165\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-label\" x=\"358\" y=\"169\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">3 L</text>\n  <text class=\"label option-label\" x=\"357\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3 L jug</text>\n  </g>\n  </g>\n</svg>", "alt": "Three jugs drawn to scale. The 8 L jug is full of juice. The 5 L jug and the 3 L jug are empty. Each jug has a mark at every litre up to its top."}
  },
  {
    id: "g3-maths-measurement-b-q21",
    prompt: "A sweet shop weighs boxes of laddoos and boxes of barfi on two level balances, as shown. How much does one box of laddoos weigh?",
    options: [
      { id: "a", text: "1 kg 500 g" },
      { id: "b", text: "1 kg" },
      { id: "c", text: "2 kg" },
      { id: "d", text: "500 g" }
    ],
    answerId: "a",
    explanation: "Balance 2 says a laddoo box = a barfi box + 500 g. On Balance 1, replace each laddoo box: 2 barfi boxes + 1000 g = 3 barfi boxes, so one barfi box = 1000 g = 1 kg. A laddoo box = 1 kg + 500 g = 1 kg 500 g. 1 kg is tempting because it is the barfi box's weight, the first number you find, but the question asks about the laddoo box. Check: 2 \u00d7 1500 g = 3000 g = 3 \u00d7 1000 g.",
    hints: ["Use the balance with the metal weight to swap every laddoo box on the other balance, then remove matching boxes from both pans."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 720 302\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two level balances with sweet boxes and a weight\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"720\" height=\"302\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"360.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sweet boxes on two level balances</text>\n  <g class=\"part puzzle\">\n  <g class=\"part balance\">\n  <polygon class=\"part stand\" points=\"180,92 164,212 196,212\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <rect class=\"part base\" x=\"130\" y=\"212\" width=\"100\" height=\"8\" rx=\"2\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/>\n  <line class=\"part beam\" x1=\"72\" y1=\"92\" x2=\"288\" y2=\"92\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part pivot\" cx=\"180\" cy=\"92\" r=\"5\" fill=\"#ffca28\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"72\" y1=\"92\" x2=\"18\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"72\" y1=\"92\" x2=\"126\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 10 162 Q 72 184 134 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"26.5\" y=\"132\" width=\"44\" height=\"30\" rx=\"4\" fill=\"#ffcc80\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"48.5\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  </g>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"73.5\" y=\"132\" width=\"44\" height=\"30\" rx=\"4\" fill=\"#ffcc80\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"95.5\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  </g>\n  </g>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"288\" y1=\"92\" x2=\"234\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"288\" y1=\"92\" x2=\"342\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 226 162 Q 288 184 350 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"234\" y=\"132\" width=\"34\" height=\"30\" rx=\"4\" fill=\"#f8bbd0\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"251\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  </g>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"271\" y=\"132\" width=\"34\" height=\"30\" rx=\"4\" fill=\"#f8bbd0\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"288\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  </g>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"308\" y=\"132\" width=\"34\" height=\"30\" rx=\"4\" fill=\"#f8bbd0\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"325\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"180\" y=\"238\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Balance 1</text>\n  </g>\n  <g class=\"part balance\">\n  <polygon class=\"part stand\" points=\"540,92 524,212 556,212\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <rect class=\"part base\" x=\"490\" y=\"212\" width=\"100\" height=\"8\" rx=\"2\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/>\n  <line class=\"part beam\" x1=\"432\" y1=\"92\" x2=\"648\" y2=\"92\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part pivot\" cx=\"540\" cy=\"92\" r=\"5\" fill=\"#ffca28\" stroke=\"#4e342e\" stroke-width=\"1.5\"/>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"432\" y1=\"92\" x2=\"378\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"432\" y1=\"92\" x2=\"486\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 370 162 Q 432 184 494 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"410\" y=\"132\" width=\"44\" height=\"30\" rx=\"4\" fill=\"#ffcc80\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"432\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  </g>\n  </g>\n  <g class=\"part pan-group\">\n  <line class=\"hang\" x1=\"648\" y1=\"92\" x2=\"594\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <line class=\"hang\" x1=\"648\" y1=\"92\" x2=\"702\" y2=\"162\" stroke=\"#555\" stroke-width=\"1.2\"/>\n  <path class=\"part pan\" d=\"M 586 162 Q 648 184 710 162 Z\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <g class=\"part load\">\n  <rect class=\"part item box\" x=\"605.5\" y=\"132\" width=\"34\" height=\"30\" rx=\"4\" fill=\"#f8bbd0\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"622.5\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  </g>\n  <g class=\"part load\">\n  <polygon class=\"part weight\" points=\"648.5,132 684.5,132 690.5,162 642.5,162\" fill=\"#90a4ae\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"666.5\" y=\"152\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">500 g</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"540\" y=\"238\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Balance 2</text>\n  </g>\n  </g>\n  <line class=\"divider\" x1=\"360\" y1=\"60\" x2=\"360\" y2=\"240\" stroke=\"#bdbdbd\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <text class=\"label small\" x=\"360\" y=\"290\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">L = a box of laddoos, B = a box of barfi (boxes of the same kind weigh the same)</text>\n</svg>", "alt": "Balance 1 is level: 2 laddoo boxes marked L on the left pan, 3 barfi boxes marked B on the right pan. Balance 2 is level: 1 laddoo box on the left pan, 1 barfi box and a 500 g weight on the right pan."}
  },
  {
    id: "g3-maths-measurement-b-q22",
    prompt: "Sharmila's aunt stitches 6 cushion covers. Each cover needs 50 cm of cloth. The cloth costs \u20b9120 for each metre, and she pays with a \u20b9500 note. How much change does she get?",
    options: [
      { id: "a", text: "\u20b9360" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b9140" },
      { id: "d", text: "\u20b9260" }
    ],
    answerId: "c",
    explanation: "6 \u00d7 50 cm = 300 cm = 3 m of cloth. 3 m cost 3 \u00d7 \u20b9120 = \u20b9360, so the change is \u20b9500 \u2212 \u20b9360 = \u20b9140. \u20b9360 is tempting because it is the cost of the cloth, not the change. \u20b920 comes from buying 4 m, and \u20b9260 from buying only 2 m.",
    hints: ["Find the total cloth for all the cushion covers in centimetres, change it into metres, and only then use the price."]
  },
  {
    id: "g3-maths-measurement-b-q23",
    prompt: "A jar full of ghee weighs 1 kg 400 g. After Zubin's family uses half of the ghee, the jar with the ghee left in it weighs 900 g. How much does the empty jar weigh?",
    options: [
      { id: "a", text: "500 g" },
      { id: "b", text: "900 g" },
      { id: "c", text: "1 kg" },
      { id: "d", text: "400 g" }
    ],
    answerId: "d",
    explanation: "1 kg 400 g = 1400 g. The weight went down by 1400 \u2212 900 = 500 g, and that is half the ghee, so all the ghee weighs 1000 g. The empty jar weighs 1400 \u2212 1000 = 400 g. 500 g is tempting because it is the first number you find, but it is the half of the ghee that was used, not the jar.",
    hints: ["The drop in weight tells you how much ghee Zubin's family used; that is only half of all the ghee."]
  },
  {
    id: "g3-maths-measurement-b-q24",
    prompt: "Kiara has a red, a blue and a green ribbon. The bar model shows how their lengths compare: the boxes without numbers are all the same length. The three ribbons together are 130 cm long. How long is the red ribbon?",
    options: [
      { id: "a", text: "20 cm" },
      { id: "b", text: "78 cm" },
      { id: "c", text: "60 cm" },
      { id: "d", text: "40 cm" }
    ],
    answerId: "c",
    explanation: "Altogether there are 3 + 1 + 1 = 5 equal boxes and an extra 30 cm, making 130 cm. So 5 boxes = 130 \u2212 30 = 100 cm, and each box is 100 \u00f7 5 = 20 cm. Red is 3 boxes = 60 cm. 78 cm is tempting if you share 130 cm among the 5 boxes without first taking away the extra 30 cm (each box would then be 26 cm), and 20 cm is just one box.",
    hints: ["Take away the extra numbered piece of Kiara's green ribbon first, then share what is left among all the equal blank boxes."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 216\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar model comparing three ribbons\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"216\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kiara's three ribbons</text>\n  <g class=\"part barmodel\">\n  <text class=\"label\" x=\"82\" y=\"68\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Red</text>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"90\" y=\"46\" width=\"80\" height=\"32\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"130\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\"></text>\n  </g>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"170\" y=\"46\" width=\"80\" height=\"32\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"210\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\"></text>\n  </g>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"250\" y=\"46\" width=\"80\" height=\"32\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"290\" y=\"67\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\"></text>\n  </g>\n  <text class=\"label\" x=\"82\" y=\"114\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Blue</text>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"90\" y=\"92\" width=\"80\" height=\"32\" rx=\"0\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"130\" y=\"113\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\"></text>\n  </g>\n  <text class=\"label\" x=\"82\" y=\"160\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Green</text>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"90\" y=\"138\" width=\"80\" height=\"32\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"130\" y=\"159\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\"></text>\n  </g>\n  <g class=\"part seg\">\n  <rect class=\"part seg-box\" x=\"170\" y=\"138\" width=\"120\" height=\"32\" rx=\"0\" fill=\"#dcedc8\" stroke=\"#37474f\" stroke-width=\"1.8\"/>\n  <text class=\"label value\" x=\"230\" y=\"159\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">30 cm</text>\n  </g>\n  <text class=\"label value sum-label\" x=\"230\" y=\"200\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">All three together: 130 cm</text>\n  </g>\n</svg>", "alt": "A bar model with three rows. Red: 3 equal blank boxes. Blue: 1 blank box of the same size. Green: 1 blank box of the same size plus a box marked 30 cm. A note below says all three together are 130 cm."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "📏", "title": "How long, how heavy, how much?", "body": ["Cloth is sold by the metre, rice by the kilogram and milk by the litre. Measuring tells us how much.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Cloth is sold by the metre, rice by the kilogram and milk by the litre. Measuring tells us how much. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Measuring Length with a Ruler", "steps": ["Length tells us how long something is. Small things are measured in centimetres, written cm.", "Put one end of the object at 0 and read the mark at the other end. If it does not start at 0, take the start mark away from the end mark.", "Check: A leaf lies on a ruler from the 3 mark to the 8 mark. How long is it?"], "punchline": "Answer: 5 cm", "visual": "none", "speak": "Length tells us how long something is. Small things are measured in centimetres, written cm. Put one end of the object at 0 and read the mark at the other end. If it does not start at 0, take the start mark away from the end mark."},
  {"id": "s2", "type": "demo", "title": "Metres and Kilometres", "steps": ["100 centimetres make 1 metre, and 1000 metres make 1 kilometre.", "We use cm for small things, m for rooms and cloth, and km for distances between places.", "Check: How many centimetres are there in 2 m?"], "punchline": "Answer: 200 cm", "visual": "none", "speak": "100 centimetres make 1 metre, and 1000 metres make 1 kilometre. We use cm for small things, m for rooms and cloth, and km for distances between places."},
  {"id": "s3", "type": "demo", "title": "Weight: Grams and Kilograms", "steps": ["Weight tells us how heavy something is. Light things are weighed in grams, g; heavy things in kilograms, kg.", "1 kilogram is the same as 1000 grams. On a pan balance, the heavier side goes down.", "Check: Which is heavier, 1 kg of rice or 900 g of dal?"], "punchline": "Answer: 1 kg of rice", "visual": "none", "speak": "Weight tells us how heavy something is. Light things are weighed in grams, g; heavy things in kilograms, kg. 1 kilogram is the same as 1000 grams. On a pan balance, the heavier side goes down."},
  {"id": "s4", "type": "demo", "title": "Capacity: Litres and Millilitres", "steps": ["Capacity tells us how much liquid a container can hold. Big amounts are in litres, L; small amounts are in millilitres, mL.", "1 litre is the same as 1000 millilitres. Read a jug at the top of the liquid, using the marks.", "Check: How many 250 mL glasses fill a 1 L bottle?"], "punchline": "Answer: 4", "visual": "none", "speak": "Capacity tells us how much liquid a container can hold. Big amounts are in litres, L; small amounts are in millilitres, mL. 1 litre is the same as 1000 millilitres. Read a jug at the top of the liquid, using the marks."},
  {"id": "s5", "type": "demo", "title": "Choosing a Sensible Unit", "steps": ["Before you measure, estimate. A pencil is about 15 cm, a door is about 2 m, a bag of atta can be 5 kg, and a spoon holds about 5 mL.", "If an answer sounds silly, like a spoon holding 5 L, check the unit again.", "Check: Which unit would you use for the water in a bucket: mL or L?"], "punchline": "Answer: L", "visual": "none", "speak": "Before you measure, estimate. A pencil is about 15 cm, a door is about 2 m, a bag of atta can be 5 kg, and a spoon holds about 5 mL. If an answer sounds silly, like a spoon holding 5 L, check the unit again."},
  {"id": "s6", "type": "demo", "title": "Adding and Subtracting Measures", "steps": ["Change everything to the same unit before you add or take away.", "Regroup when you need to: 100 cm make 1 m, 1000 g make 1 kg, and 1000 mL make 1 L.", "Check: What is 1 m − 35 cm?"], "punchline": "Answer: 65 cm", "visual": "none", "speak": "Change everything to the same unit before you add or take away. Regroup when you need to: 100 cm make 1 m, 1000 g make 1 kg, and 1000 mL make 1 L."},
  {"id": "s7", "type": "demo", "title": "Balance and Jug Puzzles", "steps": ["A level balance means both pans weigh the same, so you may take the same thing off both pans and it stays level.", "With jugs that have no marks, you can measure new amounts by filling one jug and pouring into another until it is full.", "Check: If 2 apples balance 200 g, how much does one apple weigh?"], "punchline": "Answer: 100 g", "visual": "none", "speak": "A level balance means both pans weigh the same, so you may take the same thing off both pans and it stays level. With jugs that have no marks, you can measure new amounts by filling one jug and pouring into another until it is full."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "A ribbon is 1 m long. Riya cuts off 35 cm for a rakhi. How much ribbon is left?", "options": [{"id": "a", "text": "75 cm"}, {"id": "b", "text": "65 cm"}, {"id": "c", "text": "35 cm"}, {"id": "d", "text": "135 cm"}], "answerId": "b", "why": "1 m is 100 cm, and 100 cm − 35 cm = 65 cm. 75 cm is tempting if you forget to regroup, but 100 − 35 is 65.", "visual": "none", "speak": "A ribbon is one metre long. Riya cuts off thirty-five centimetres for a rakhi. How much ribbon is left?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Start at 0, or subtract the start mark", "100 cm = 1 m, 1000 m = 1 km", "1000 g = 1 kg, 1000 mL = 1 L", "Same unit before you add or subtract", "A level balance: both pans weigh the same"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g3MathsMeasurement: ChapterDef = {
  id: "g3-measurement",
  title: "Measurement",
  emoji: "\ud83d\udccf",
  blurb: "Length, weight & capacity: rulers, balances and jugs",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "measurement",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "measurement",
      questions: SET_B,
    },
  ],
  paperTopics: ["measurement", "add-sub"],
};

export const g3MathsMeasurementQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
