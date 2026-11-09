import type { PrepQuestion } from "../types";

/** Mensuration (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g8MathsMensurationAchievers: PrepQuestion[] = [
  {
    id: "g8-maths-ch05-ach-x-01",
    prompt: "Aakriti's school is laying new grass on the playground shown: a rectangle with a semicircle at each of its two shorter ends. Using \u03c0 = 22/7, what area of grass is needed?",
    options: [
      { id: "a", text: "700 m\u00b2" },
      { id: "b", text: "392 m\u00b2" },
      { id: "c", text: "546 m\u00b2" },
      { id: "d", text: "238 m\u00b2" }
    ],
    answerId: "c",
    explanation: "The rectangle has area 28 \u00d7 14 = 392 m\u00b2. Each end is a semicircle of radius 14 \u00f7 2 = 7 m, and two semicircles make one full circle: 22/7 \u00d7 7 \u00d7 7 = 154 m\u00b2. The total is 392 + 154 = 546 m\u00b2. 700 m\u00b2 is tempting because it adds a full circle for each end (392 + 2 \u00d7 154), but each end is only half a circle.",
    hints: ["Split Aakriti's playground into the rectangle and the two curved ends, and decide what the two ends make when put together."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 540 264\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A playground made of a rectangle 28 metres long and 14 metres wide with a semicircle on each 14 metre end\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"540\" height=\"264\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"270.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Aakriti's school playground</text>\n  <path class=\"part ground\" d=\"M 130 86 L 410 86 A 70 70 0 0 1 410 226 L 130 226 A 70 70 0 0 1 130 86 Z\" fill=\"#c5e1a5\" stroke=\"#33691e\" stroke-width=\"3\"/>\n  <rect class=\"part inner-rect\" x=\"130\" y=\"86\" width=\"280\" height=\"140\" rx=\"0\" fill=\"none\" stroke=\"#558b2f\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/>\n  <line class=\"part dim-line\" x1=\"130\" y1=\"64\" x2=\"410\" y2=\"64\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <polyline class=\"part arrow-head\" points=\"403,59.1 410,64 403,68.9\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polyline class=\"part arrow-head\" points=\"137,59.1 130,64 137,68.9\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label dim\" x=\"270\" y=\"56\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">28 m</text>\n  <line class=\"part dim-line\" x1=\"148\" y1=\"86\" x2=\"148\" y2=\"226\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label dim\" x=\"156\" y=\"161\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">14 m</text>\n</svg>", "alt": "A green playground shaped like a rectangle with rounded ends. The straight part is marked 28 m long, and a line across the playground at the start of the straight part is marked 14 m."}
  },
  {
    id: "g8-maths-ch05-ach-x-02",
    prompt: "All the water in Keya's full cuboid tank is poured into the empty cylindrical drum shown, and none spills. Using \u03c0 = 22/7, how deep is the water in the drum?",
    options: [
      { id: "a", text: "7.5 cm" },
      { id: "b", text: "15 cm" },
      { id: "c", text: "60 cm" },
      { id: "d", text: "30 cm" }
    ],
    answerId: "d",
    explanation: "The tank holds 44 \u00d7 21 \u00d7 20 = 18,480 cm\u00b3. The dashed line is a diameter, so the drum's radius is 14 cm and its base area is 22/7 \u00d7 14 \u00d7 14 = 616 cm\u00b2. The depth is 18,480 \u00f7 616 = 30 cm. 7.5 cm is tempting because it uses 28 cm as the radius, but 28 cm is measured right across the top, so it is the diameter.",
    hints: ["Find the volume of water in Keya's tank, then the base area of the drum from the line across its top."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 538 316\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A full cuboid tank 44 centimetres long, 21 centimetres wide and 20 centimetres high, and an empty cylindrical drum whose top has a diameter of 28 centimetres\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"538\" height=\"316\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"269.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Keya's tank and drum</text>\n  <polygon class=\"part box-top\" points=\"60,119.7 89.7,90 265.7,90 236,119.7\" fill=\"#bbdefb\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <polygon class=\"part box-side\" points=\"236,119.7 265.7,90 265.7,170 236,199.7\" fill=\"#90caf9\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <rect class=\"part box-front\" x=\"60\" y=\"119.7\" width=\"176\" height=\"80\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label edge-length\" x=\"148\" y=\"221.7\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">44 cm</text>\n  <text class=\"label edge-height\" x=\"52\" y=\"164.7\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">20 cm</text>\n  <text class=\"label edge-breadth\" x=\"260.85\" y=\"198.85\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">21 cm</text>\n  <text class=\"label caption\" x=\"162.85\" y=\"78\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">tank (full)</text>\n  <rect class=\"part drum-body\" x=\"375.7\" y=\"80\" width=\"112\" height=\"150\" rx=\"0\" fill=\"#eceff1\" stroke=\"none\" stroke-width=\"0\"/>\n  <line class=\"part drum-wall\" x1=\"375.7\" y1=\"80\" x2=\"375.7\" y2=\"230\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part drum-wall\" x1=\"487.7\" y1=\"80\" x2=\"487.7\" y2=\"230\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <ellipse class=\"part drum-base\" cx=\"431.7\" cy=\"230\" rx=\"56\" ry=\"15.68\" fill=\"#eceff1\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <ellipse class=\"part drum-top\" cx=\"431.7\" cy=\"80\" rx=\"56\" ry=\"15.68\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part diameter\" x1=\"375.7\" y1=\"80\" x2=\"487.7\" y2=\"80\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label diameter-length\" x=\"431.7\" y=\"56.32\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">28 cm</text>\n  <text class=\"label caption\" x=\"431.7\" y=\"267.68\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">drum (empty)</text>\n</svg>", "alt": "On the left, a cuboid tank labelled 44 cm long, 21 cm wide and 20 cm high, marked full. On the right, an empty cylindrical drum with a dashed line across its circular top labelled 28 cm."}
  },
  {
    id: "g8-maths-ch05-ach-x-03",
    prompt: "A field near Medha's village is shaped like a trapezium. Its parallel sides are 25 m and 13 m long, and each of its other two sides is 10 m long. What is the area of the field?",
    options: [
      { id: "a", text: "190 m\u00b2" },
      { id: "b", text: "152 m\u00b2" },
      { id: "c", text: "304 m\u00b2" },
      { id: "d", text: "130 m\u00b2" }
    ],
    answerId: "b",
    explanation: "The two slanting sides are equal, so the 25 m side sticks out (25 \u2212 13) \u00f7 2 = 6 m beyond the 13 m side at each end. Each slanting side, the 6 m piece and the height make a right triangle, so height\u00b2 = 10\u00b2 \u2212 6\u00b2 = 64 and the height is 8 m. The area is \u00bd \u00d7 (25 + 13) \u00d7 8 = 152 m\u00b2. 190 m\u00b2 is tempting because it uses the 10 m slanting side as the height, but the height must be measured straight across, at right angles to the parallel sides.",
    hints: ["The slanting sides of Medha's field are not the height; drop a perpendicular from a corner and use a right triangle."]
  },
  {
    id: "g8-maths-ch05-ach-x-04",
    prompt: "Amaya's carpenter makes an open wooden box with no lid, 1.5 m long, 1 m wide and 0.8 m high. He paints it both inside and outside at \u20b940 per m\u00b2. Taking the inside and outside areas as equal, what does the painting cost?",
    options: [
      { id: "a", text: "\u20b9440" },
      { id: "b", text: "\u20b9560" },
      { id: "c", text: "\u20b9220" },
      { id: "d", text: "\u20b9280" }
    ],
    answerId: "a",
    explanation: "With no lid, one face of the box is the base, 1.5 \u00d7 1 = 1.5 m\u00b2, and the four sides are 2 \u00d7 0.8 \u00d7 (1.5 + 1) = 4 m\u00b2, so 5.5 m\u00b2 in all. Painting inside and outside doubles this to 11 m\u00b2, which costs 11 \u00d7 40 = \u20b9440. \u20b9220 is tempting because it paints only one side of the wood (5.5 \u00d7 40); the box is painted inside as well as outside.",
    hints: ["List the faces Amaya's box really has without a lid, find their area, then count both the inside and the outside."]
  },
  {
    id: "g8-maths-ch05-ach-x-05",
    prompt: "The garden roller in Nitya's colony park is a cylinder 1.4 m across and 2 m long. Her gardener pushes it through 50 complete turns. Using \u03c0 = 22/7, what area of lawn does it roll over?",
    options: [
      { id: "a", text: "594 m\u00b2" },
      { id: "b", text: "440 m\u00b2" },
      { id: "c", text: "220 m\u00b2" },
      { id: "d", text: "880 m\u00b2" }
    ],
    answerId: "b",
    explanation: "In one turn the roller presses its curved surface onto the lawn: \u03c0 \u00d7 diameter \u00d7 length = 22/7 \u00d7 1.4 \u00d7 2 = 8.8 m\u00b2. In 50 turns that is 8.8 \u00d7 50 = 440 m\u00b2. 594 m\u00b2 is tempting because it uses the total surface area, adding the two circular ends, but the ends never touch the lawn; only the curved surface rolls over it.",
    hints: ["Think about which surface of the roller in Nitya's park touches the lawn in one complete turn."]
  }
];
