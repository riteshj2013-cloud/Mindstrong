import type { PrepQuestion } from "../types";

/** Measurement and Area (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g5MathsMeasurementAchievers: PrepQuestion[] = [
  {
    id: "g5-maths-ch05-ach-x-01",
    prompt: "Rajvi's hall plan is shown. Every part except the store room gets square tiles that measure 50 cm along each edge. How many such tiles does the hall need?",
    options: [
      { id: "a", text: "84 tiles" },
      { id: "b", text: "168 tiles" },
      { id: "c", text: "192 tiles" },
      { id: "d", text: "42 tiles" }
    ],
    answerId: "b",
    explanation: "The store room is 8 m \u2212 5 m = 3 m wide and 2 m deep, so the tiled area is 8 \u00d7 6 \u2212 3 \u00d7 2 = 48 \u2212 6 = 42 m\u00b2. A 50 cm tile is half a metre each way, so 2 \u00d7 2 = 4 tiles cover 1 m\u00b2, and 42 \u00d7 4 = 168 tiles are needed. 84 tiles is tempting because it takes 2 tiles for each square metre, but halving the side makes a quarter of a square metre, not a half.",
    hints: ["Find the tiled area of Rajvi's floor in square metres, then work out how many 50 cm tiles fit in one square metre."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 350\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Plan of a rectangular floor with a store room cut out of one corner\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"350\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Rajvi's hall floor</text>\n  <polygon class=\"part floor\" points=\"70,50 270,50 270,130 390,130 390,290 70,290\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"2.5\"/>\n  <rect class=\"part store\" x=\"270\" y=\"50\" width=\"120\" height=\"80\" rx=\"0\" fill=\"#e0e0e0\" stroke=\"#616161\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  <text class=\"label store-name\" x=\"330\" y=\"95\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#424242\">Store</text>\n  <text class=\"label side\" x=\"170\" y=\"40\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">5 m</text>\n  <text class=\"label side\" x=\"60\" y=\"175\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">6 m</text>\n  <text class=\"label side\" x=\"230\" y=\"312\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">8 m</text>\n  <text class=\"label side\" x=\"262\" y=\"95\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">2 m</text>\n</svg>", "alt": "A rectangular floor plan 8 m along the bottom and 6 m on the left side. A grey dashed store room fills the top-right corner; the top edge of the tiled part next to it is 5 m and the store room's left side is 2 m."}
  },
  {
    id: "g5-maths-ch05-ach-x-02",
    prompt: "A gravel strip 2 m wide is laid along the outside of all four edges of Ridhima's school garden, a rectangle 20 m long and 12 m wide. How many square metres of gravel are needed?",
    options: [
      { id: "a", text: "144 m\u00b2" },
      { id: "b", text: "128 m\u00b2" },
      { id: "c", text: "240 m\u00b2" },
      { id: "d", text: "384 m\u00b2" }
    ],
    answerId: "a",
    explanation: "With the gravel, the outer rectangle is 20 + 2 + 2 = 24 m long and 12 + 2 + 2 = 16 m wide, so it covers 24 \u00d7 16 = 384 m\u00b2. The garden covers 20 \u00d7 12 = 240 m\u00b2. The gravel covers 384 \u2212 240 = 144 m\u00b2. 128 m\u00b2 is tempting because it is the garden's perimeter, 64 m, times the 2 m width, but that leaves out the four 2 m by 2 m corner squares of the strip.",
    hints: ["Find the length and width of the big rectangle that holds Ridhima's garden and the gravel together, then take away the garden."]
  },
  {
    id: "g5-maths-ch05-ach-x-03",
    prompt: "Rishit's rectangular photo frame has an area of 96 cm\u00b2 and a length of 12 cm. He bends a wire as long as the frame's perimeter into a square. What is the area of the square?",
    options: [
      { id: "a", text: "25 cm\u00b2" },
      { id: "b", text: "96 cm\u00b2" },
      { id: "c", text: "64 cm\u00b2" },
      { id: "d", text: "100 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "The width is 96 \u00f7 12 = 8 cm, so the perimeter is 2 \u00d7 (12 + 8) = 40 cm. The square has side 40 \u00f7 4 = 10 cm and area 10 \u00d7 10 = 100 cm\u00b2. 25 cm\u00b2 is tempting because it uses 12 + 8 = 20 cm as the perimeter, but that is only half the way round the frame.",
    hints: ["Use the area of Rishit's frame to find its width first, then its perimeter, then one side of the square."]
  },
  {
    id: "g5-maths-ch05-ach-x-04",
    prompt: "Ruhan's uncle puts 3 rounds of wire all the way round the rectangular field shown. The wire costs \u20b912 per metre. How much does the wire cost?",
    options: [
      { id: "a", text: "\u20b919,080" },
      { id: "b", text: "\u20b99,600" },
      { id: "c", text: "\u20b928,800" },
      { id: "d", text: "\u20b914,400" }
    ],
    answerId: "c",
    explanation: "0.15 km = 0.15 \u00d7 1,000 m = 150 m. The perimeter is 2 \u00d7 (250 + 150) = 800 m, so 3 rounds use 2,400 m of wire, which costs 2,400 \u00d7 \u20b912 = \u20b928,800. \u20b919,080 is tempting because it reads 0.15 km as 15 m, but 0.15 km is 150 m.",
    hints: ["Change the field's short side into metres so both of Ruhan's sides use the same unit before finding the perimeter."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 385 245\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A rectangular field with one side marked 250 m and the other marked 0.15 km\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"385\" height=\"245\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"192.5\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ruhan's uncle's field</text>\n  <rect class=\"part field\" x=\"70\" y=\"50\" width=\"225\" height=\"135\" rx=\"0\" fill=\"#dcedc8\" stroke=\"#558b2f\" stroke-width=\"3\"/>\n  <text class=\"label side\" x=\"182.5\" y=\"209\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">250 m</text>\n  <text class=\"label side\" x=\"305\" y=\"122.5\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">0.15 km</text>\n</svg>", "alt": "A green rectangular field. The long side is marked 250 m and the short side is marked 0.15 km."}
  },
  {
    id: "g5-maths-ch05-ach-x-05",
    prompt: "Saanvi's grandfather feeds 350 g of grain to the pigeons every morning from a 2.5 kg bag. After how many mornings will less than 500 g be left in the bag for the first time?",
    options: [
      { id: "a", text: "7 mornings" },
      { id: "b", text: "6 mornings" },
      { id: "c", text: "5 mornings" },
      { id: "d", text: "4 mornings" }
    ],
    answerId: "b",
    explanation: "2.5 kg = 2,500 g. After 5 mornings 2,500 \u2212 1,750 = 750 g is left, which is not less than 500 g. After 6 mornings 2,500 \u2212 2,100 = 400 g is left, which is less than 500 g. So the answer is 6 mornings. 7 mornings is tempting because 7 \u00d7 350 g = 2,450 g nearly empties the bag, but the question asks when less than 500 g is left, not when the bag runs out.",
    hints: ["Change Saanvi's grandfather's bag into grams, then take away one morning's grain at a time and check what is left."]
  }
];
