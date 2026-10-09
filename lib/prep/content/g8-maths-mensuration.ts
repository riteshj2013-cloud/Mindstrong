import type { ChapterDef, PrepQuestion } from "../types";

/** Mensuration - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-mensuration-a-q01",
    prompt: "Area of a rectangle with length 12 cm and breadth 5 cm is\u2026",
    options: [
      { id: "a", text: "60 cm\u00b2" },
      { id: "b", text: "34 cm\u00b2" },
      { id: "c", text: "120 cm\u00b2" },
      { id: "d", text: "17 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "Area = length \u00d7 breadth = 12 \u00d7 5 = 60 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q02",
    prompt: "Perimeter of a square of side 9 cm is\u2026",
    options: [
      { id: "a", text: "27 cm" },
      { id: "b", text: "36 cm" },
      { id: "c", text: "81 cm" },
      { id: "d", text: "18 cm" }
    ],
    answerId: "b",
    explanation: "Perimeter = 4 \u00d7 side = 4 \u00d7 9 = 36 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q03",
    prompt: "Area of a triangle with base 10 cm and height 6 cm is\u2026",
    options: [
      { id: "a", text: "32 cm\u00b2" },
      { id: "b", text: "60 cm\u00b2" },
      { id: "c", text: "30 cm\u00b2" },
      { id: "d", text: "16 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "Area = (1/2) \u00d7 base \u00d7 height = (1/2) \u00d7 10 \u00d7 6 = 30 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q04",
    prompt: "Circumference of a circle of radius 7 cm (take \u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "154 cm" },
      { id: "b", text: "22 cm" },
      { id: "c", text: "88 cm" },
      { id: "d", text: "44 cm" }
    ],
    answerId: "d",
    explanation: "C = 2\u03c0r = 2 \u00d7 (22/7) \u00d7 7 = 44 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q05",
    prompt: "Area of a circle of radius 7 cm (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "154 cm\u00b2" },
      { id: "b", text: "49 cm\u00b2" },
      { id: "c", text: "22 cm\u00b2" },
      { id: "d", text: "44 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "A = \u03c0r\u00b2 = (22/7) \u00d7 49 = 154 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q06",
    prompt: "Volume of a cube of edge 4 cm is\u2026",
    options: [
      { id: "a", text: "16 cm\u00b3" },
      { id: "b", text: "64 cm\u00b3" },
      { id: "c", text: "48 cm\u00b3" },
      { id: "d", text: "12 cm\u00b3" }
    ],
    answerId: "b",
    explanation: "Volume = a\u00b3 = 4\u00b3 = 64 cm\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q07",
    prompt: "Volume of a cuboid 5 cm \u00d7 3 cm \u00d7 2 cm is\u2026",
    options: [
      { id: "a", text: "15 cm\u00b3" },
      { id: "b", text: "60 cm\u00b3" },
      { id: "c", text: "30 cm\u00b3" },
      { id: "d", text: "10 cm\u00b3" }
    ],
    answerId: "c",
    explanation: "V = l \u00d7 b \u00d7 h = 5 \u00d7 3 \u00d7 2 = 30 cm\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q08",
    prompt: "Lateral surface area of a cube of edge 5 cm is\u2026",
    options: [
      { id: "a", text: "125 cm\u00b2" },
      { id: "b", text: "150 cm\u00b2" },
      { id: "c", text: "25 cm\u00b2" },
      { id: "d", text: "100 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "LSA = 4a\u00b2 = 4 \u00d7 25 = 100 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q09",
    prompt: "Total surface area of a cube of edge 3 cm is\u2026",
    options: [
      { id: "a", text: "54 cm\u00b2" },
      { id: "b", text: "36 cm\u00b2" },
      { id: "c", text: "18 cm\u00b2" },
      { id: "d", text: "27 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "TSA = 6a\u00b2 = 6 \u00d7 9 = 54 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q10",
    prompt: "Area of a parallelogram with base 8 cm and height 5 cm is\u2026",
    options: [
      { id: "a", text: "80 cm\u00b2" },
      { id: "b", text: "40 cm\u00b2" },
      { id: "c", text: "13 cm\u00b2" },
      { id: "d", text: "20 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Area = base \u00d7 height = 8 \u00d7 5 = 40 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q11",
    prompt: "A circle has diameter 14 cm. Its radius is\u2026",
    options: [
      { id: "a", text: "44 cm" },
      { id: "b", text: "28 cm" },
      { id: "c", text: "7 cm" },
      { id: "d", text: "14 cm" }
    ],
    answerId: "c",
    explanation: "Radius is half the diameter: 14/2 = 7 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q12",
    prompt: "Find the area of a trapezium with parallel sides 10 cm and 6 cm, height 4 cm.",
    options: [
      { id: "a", text: "64 cm\u00b2" },
      { id: "b", text: "40 cm\u00b2" },
      { id: "c", text: "24 cm\u00b2" },
      { id: "d", text: "32 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "Area = (1/2)(a + b)h = (1/2)(10 + 6)\u00d74 = 32 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q13",
    prompt: "Volume of a cylinder: r = 7 cm, h = 10 cm (\u03c0 = 22/7).",
    options: [
      { id: "a", text: "1540 cm\u00b3" },
      { id: "b", text: "440 cm\u00b3" },
      { id: "c", text: "220 cm\u00b3" },
      { id: "d", text: "770 cm\u00b3" }
    ],
    answerId: "a",
    explanation: "V = \u03c0r\u00b2h = (22/7)\u00d749\u00d710 = 1540 cm\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q14",
    prompt: "Curved surface area of a cylinder: r = 7 cm, h = 10 cm (\u03c0 = 22/7).",
    options: [
      { id: "a", text: "140 cm\u00b2" },
      { id: "b", text: "440 cm\u00b2" },
      { id: "c", text: "1540 cm\u00b2" },
      { id: "d", text: "220 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "CSA = 2\u03c0rh = 2\u00d7(22/7)\u00d77\u00d710 = 440 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q15",
    prompt: "A cuboid is 8 cm \u00d7 6 cm \u00d7 5 cm. Its total surface area is\u2026",
    options: [
      { id: "a", text: "118 cm\u00b2" },
      { id: "b", text: "480 cm\u00b2" },
      { id: "c", text: "236 cm\u00b2" },
      { id: "d", text: "240 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "TSA = 2(lb + bh + hl) = 2(48 + 30 + 40) = 2\u00d7118 = 236 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q16",
    prompt: "Area of four walls of a room 5 m \u00d7 4 m \u00d7 3 m high is\u2026",
    options: [
      { id: "a", text: "60 m\u00b2" },
      { id: "b", text: "27 m\u00b2" },
      { id: "c", text: "120 m\u00b2" },
      { id: "d", text: "54 m\u00b2" }
    ],
    answerId: "d",
    explanation: "Lateral area = 2(l + b)h = 2(5 + 4)\u00d73 = 54 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q17",
    prompt: "A square park has perimeter 80 m. Its area is\u2026",
    options: [
      { id: "a", text: "400 m\u00b2" },
      { id: "b", text: "1600 m\u00b2" },
      { id: "c", text: "200 m\u00b2" },
      { id: "d", text: "6400 m\u00b2" }
    ],
    answerId: "a",
    explanation: "Side = 80/4 = 20 m; area = 20\u00b2 = 400 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q18",
    prompt: "How many 2 cm cubes fit in a 6 cm cube?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "27" },
      { id: "c", text: "9" },
      { id: "d", text: "36" }
    ],
    answerId: "b",
    explanation: "Along each edge 6/2 = 3 cubes; 3\u00b3 = 27.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q19",
    prompt: "Diagonal of a rectangle 6 cm by 8 cm is\u2026",
    options: [
      { id: "a", text: "48 cm" },
      { id: "b", text: "7 cm" },
      { id: "c", text: "10 cm" },
      { id: "d", text: "14 cm" }
    ],
    answerId: "c",
    explanation: "By Pythagoras: \u221a(36 + 64) = \u221a100 = 10 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q20",
    prompt: "A cylindrical tank has r = 3.5 m and h = 7 m. Volume (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "154 m\u00b3" },
      { id: "b", text: "77 m\u00b3" },
      { id: "c", text: "539 m\u00b3" },
      { id: "d", text: "269.5 m\u00b3" }
    ],
    answerId: "d",
    explanation: "V = (22/7)\u00d7(3.5)\u00b2\u00d77 = (22/7)\u00d712.25\u00d77 = 22\u00d712.25 = 269.5 m\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q21",
    prompt: "TSA of a cylinder: r = 7 cm, h = 5 cm (\u03c0 = 22/7).",
    options: [
      { id: "a", text: "528 cm\u00b2" },
      { id: "b", text: "220 cm\u00b2" },
      { id: "c", text: "308 cm\u00b2" },
      { id: "d", text: "440 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "TSA = 2\u03c0r(h + r) = 2\u00d7(22/7)\u00d77\u00d7(5 + 7) = 44\u00d712 = 528 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q22",
    prompt: "A path 1 m wide runs inside a square park of side 20 m. Area of the path is\u2026",
    options: [
      { id: "a", text: "39 m\u00b2" },
      { id: "b", text: "76 m\u00b2" },
      { id: "c", text: "400 m\u00b2" },
      { id: "d", text: "361 m\u00b2" }
    ],
    answerId: "b",
    explanation: "Inner square side 18 m; path area = 400 \u2212 324 = 76 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q23",
    prompt: "Volume of water in a tank 2 m \u00d7 1.5 m filled to 80 cm depth is\u2026",
    options: [
      { id: "a", text: "3 m\u00b3" },
      { id: "b", text: "1.2 m\u00b3" },
      { id: "c", text: "2.4 m\u00b3" },
      { id: "d", text: "2.4 cm\u00b3" }
    ],
    answerId: "c",
    explanation: "Depth = 0.8 m; V = 2 \u00d7 1.5 \u00d7 0.8 = 2.4 m\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-a-q24",
    prompt: "A cone has r = 7 cm and slant height 25 cm. CSA (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "154 cm\u00b2" },
      { id: "b", text: "175 cm\u00b2" },
      { id: "c", text: "1100 cm\u00b2" },
      { id: "d", text: "550 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "CSA = \u03c0rl = (22/7)\u00d77\u00d725 = 550 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-mensuration-b-q01",
    prompt: "Area of a square of side 11 cm is\u2026",
    options: [
      { id: "a", text: "121 cm\u00b2" },
      { id: "b", text: "22 cm\u00b2" },
      { id: "c", text: "110 cm\u00b2" },
      { id: "d", text: "44 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "Area = side\u00b2 = 11\u00b2 = 121 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q02",
    prompt: "Perimeter of a rectangle 15 cm by 8 cm is\u2026",
    options: [
      { id: "a", text: "38 cm" },
      { id: "b", text: "46 cm" },
      { id: "c", text: "120 cm" },
      { id: "d", text: "23 cm" }
    ],
    answerId: "b",
    explanation: "P = 2(l + b) = 2(15 + 8) = 46 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q03",
    prompt: "Area of a right triangle with legs 6 cm and 8 cm is\u2026",
    options: [
      { id: "a", text: "28 cm\u00b2" },
      { id: "b", text: "48 cm\u00b2" },
      { id: "c", text: "24 cm\u00b2" },
      { id: "d", text: "14 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "Area = (1/2)\u00d76\u00d78 = 24 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q04",
    prompt: "Diameter of a circle with circumference 44 cm (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "22 cm" },
      { id: "b", text: "28 cm" },
      { id: "c", text: "7 cm" },
      { id: "d", text: "14 cm" }
    ],
    answerId: "d",
    explanation: "C = \u03c0d \u21d2 d = 44 \u00d7 7/22 = 14 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q05",
    prompt: "Area of a circle with diameter 14 cm (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "154 cm\u00b2" },
      { id: "b", text: "44 cm\u00b2" },
      { id: "c", text: "616 cm\u00b2" },
      { id: "d", text: "308 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "r = 7; A = (22/7)\u00d749 = 154 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q06",
    prompt: "Edge of a cube whose volume is 125 cm\u00b3 is\u2026",
    options: [
      { id: "a", text: "10 cm" },
      { id: "b", text: "5 cm" },
      { id: "c", text: "25 cm" },
      { id: "d", text: "15 cm" }
    ],
    answerId: "b",
    explanation: "a\u00b3 = 125 \u21d2 a = 5 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q07",
    prompt: "Volume of a cuboid 10 cm \u00d7 4 cm \u00d7 3 cm is\u2026",
    options: [
      { id: "a", text: "40 cm\u00b3" },
      { id: "b", text: "240 cm\u00b3" },
      { id: "c", text: "120 cm\u00b3" },
      { id: "d", text: "17 cm\u00b3" }
    ],
    answerId: "c",
    explanation: "V = 10 \u00d7 4 \u00d7 3 = 120 cm\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q08",
    prompt: "TSA of a cuboid 4 cm \u00d7 3 cm \u00d7 2 cm is\u2026",
    options: [
      { id: "a", text: "24 cm\u00b2" },
      { id: "b", text: "26 cm\u00b2" },
      { id: "c", text: "48 cm\u00b2" },
      { id: "d", text: "52 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "2(12 + 6 + 8) = 2\u00d726 = 52 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q09",
    prompt: "LSA of a cuboid 6 cm \u00d7 4 cm \u00d7 5 cm is\u2026",
    options: [
      { id: "a", text: "100 cm\u00b2" },
      { id: "b", text: "148 cm\u00b2" },
      { id: "c", text: "120 cm\u00b2" },
      { id: "d", text: "50 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "LSA = 2(l + b)h = 2(6 + 4)\u00d75 = 100 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q10",
    prompt: "Area of a rhombus with diagonals 10 cm and 8 cm is\u2026",
    options: [
      { id: "a", text: "36 cm\u00b2" },
      { id: "b", text: "40 cm\u00b2" },
      { id: "c", text: "80 cm\u00b2" },
      { id: "d", text: "18 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Area = (1/2)\u00d7d\u2081\u00d7d\u2082 = (1/2)\u00d710\u00d78 = 40 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q11",
    prompt: "A circular pond has radius 21 m. Area (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "462 m\u00b2" },
      { id: "b", text: "2772 m\u00b2" },
      { id: "c", text: "1386 m\u00b2" },
      { id: "d", text: "132 m\u00b2" }
    ],
    answerId: "c",
    explanation: "A = (22/7)\u00d7441 = 1386 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q12",
    prompt: "Trapezium: parallel sides 12 cm, 8 cm; height 5 cm. Area is\u2026",
    options: [
      { id: "a", text: "100 cm\u00b2" },
      { id: "b", text: "60 cm\u00b2" },
      { id: "c", text: "40 cm\u00b2" },
      { id: "d", text: "50 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "(1/2)(12 + 8)\u00d75 = 50 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q13",
    prompt: "Cylinder volume: r = 3.5 cm, h = 8 cm (\u03c0 = 22/7).",
    options: [
      { id: "a", text: "308 cm\u00b3" },
      { id: "b", text: "154 cm\u00b3" },
      { id: "c", text: "88 cm\u00b3" },
      { id: "d", text: "616 cm\u00b3" }
    ],
    answerId: "a",
    explanation: "V = (22/7)\u00d7(3.5)\u00b2\u00d78 = 22\u00d712.25\u00d78/7\u2026 (22/7)\u00d712.25\u00d78 = 22\u00d71.75\u00d78 = 308 cm\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q14",
    prompt: "CSA of a cylinder: r = 5 cm, h = 14 cm (\u03c0 = 22/7).",
    options: [
      { id: "a", text: "700 cm\u00b2" },
      { id: "b", text: "440 cm\u00b2" },
      { id: "c", text: "220 cm\u00b2" },
      { id: "d", text: "350 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "2\u03c0rh = 2\u00d7(22/7)\u00d75\u00d714 = 440 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q15",
    prompt: "How many litres does a cuboid tank 2 m \u00d7 1 m \u00d7 0.5 m hold?",
    options: [
      { id: "a", text: "10 L" },
      { id: "b", text: "2000 L" },
      { id: "c", text: "1000 L" },
      { id: "d", text: "100 L" }
    ],
    answerId: "c",
    explanation: "V = 1 m\u00b3 = 1000 litres.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q16",
    prompt: "A room is 6 m \u00d7 5 m \u00d7 4 m. Cost of painting four walls at \u20b920/m\u00b2 is\u2026",
    options: [
      { id: "a", text: "\u20b92400" },
      { id: "b", text: "\u20b9880" },
      { id: "c", text: "\u20b91200" },
      { id: "d", text: "\u20b91760" }
    ],
    answerId: "d",
    explanation: "Area = 2(6+5)\u00d74 = 88 m\u00b2; cost = 88 \u00d7 20 = \u20b91760.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q17",
    prompt: "Side of a square whose area equals a rectangle 16 cm by 9 cm is\u2026",
    options: [
      { id: "a", text: "12 cm" },
      { id: "b", text: "25 cm" },
      { id: "c", text: "13 cm" },
      { id: "d", text: "18 cm" }
    ],
    answerId: "a",
    explanation: "Rectangle area 144; side = \u221a144 = 12 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q18",
    prompt: "Number of 1 cm cubes in a 5 cm \u00d7 4 cm \u00d7 3 cm cuboid is\u2026",
    options: [
      { id: "a", text: "120" },
      { id: "b", text: "60" },
      { id: "c", text: "12" },
      { id: "d", text: "20" }
    ],
    answerId: "b",
    explanation: "Volume in cm\u00b3 equals the count of 1 cm cubes: 5\u00d74\u00d73 = 60.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q19",
    prompt: "A wire of length 88 cm is bent into a circle. Radius (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "28 cm" },
      { id: "b", text: "11 cm" },
      { id: "c", text: "14 cm" },
      { id: "d", text: "7 cm" }
    ],
    answerId: "c",
    explanation: "2\u03c0r = 88 \u21d2 r = 88 \u00d7 7/(2\u00d722) = 14 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q20",
    prompt: "A cone has r = 3 cm and height 4 cm. Volume (\u03c0 = 3.14) is about\u2026",
    options: [
      { id: "a", text: "113 cm\u00b3" },
      { id: "b", text: "12 cm\u00b3" },
      { id: "c", text: "75.36 cm\u00b3" },
      { id: "d", text: "37.68 cm\u00b3" }
    ],
    answerId: "d",
    explanation: "V = (1/3)\u03c0r\u00b2h = (1/3)\u00d73.14\u00d79\u00d74 = 37.68 cm\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q21",
    prompt: "TSA of a hemisphere of radius 7 cm (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "462 cm\u00b2" },
      { id: "b", text: "308 cm\u00b2" },
      { id: "c", text: "154 cm\u00b2" },
      { id: "d", text: "616 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "TSA = 3\u03c0r\u00b2 = 3\u00d7(22/7)\u00d749 = 462 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q22",
    prompt: "Outer side of a square frame is 12 cm; inner side 10 cm. Area of the frame is\u2026",
    options: [
      { id: "a", text: "100 cm\u00b2" },
      { id: "b", text: "44 cm\u00b2" },
      { id: "c", text: "24 cm\u00b2" },
      { id: "d", text: "120 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Outer area 144 \u2212 inner 100 = 44 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q23",
    prompt: "A cylindrical pipe has inner r = 3.5 cm and length 20 m. Volume of water it can hold (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "1540 cm\u00b3" },
      { id: "b", text: "440 cm\u00b3" },
      { id: "c", text: "77000 cm\u00b3" },
      { id: "d", text: "7700 cm\u00b3" }
    ],
    answerId: "c",
    explanation: "Length = 2000 cm; V = (22/7)\u00d712.25\u00d72000 = 77000 cm\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-mensuration-b-q24",
    prompt: "Slant height of a cone with r = 5 cm and h = 12 cm is\u2026",
    options: [
      { id: "a", text: "17 cm" },
      { id: "b", text: "7 cm" },
      { id: "c", text: "60 cm" },
      { id: "d", text: "13 cm" }
    ],
    answerId: "d",
    explanation: "l = \u221a(r\u00b2 + h\u00b2) = \u221a(25 + 144) = \u221a169 = 13 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcd0",
    title: "Mensuration",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "fraction-bar",
    speak: "Area covers a surface. Volume fills a solid. Match the shape to its formula.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "fraction-bar",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "2D area", reveal: "Rectangles, triangles, circles", emoji: "\u2b1b" },
      { label: "Surface area", reveal: "Faces of cubes and cylinders", emoji: "\ud83d\udce6" },
      { label: "Volume", reveal: "Space inside a solid", emoji: "\ud83e\uddea" },
      { label: "\u03c0 recipes", reveal: "C = 2\u03c0r, A = \u03c0r\u00b2", emoji: "\u2b55" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Volume of a cube of edge 4 cm?",
    options: [
        { id: "a", text: "16 cm\u00b3" },
        { id: "b", text: "64 cm\u00b3" },
        { id: "c", text: "48 cm\u00b3" },
        { id: "d", text: "12 cm\u00b3" }
    ],
    answerId: "b",
    why: "Volume = a\u00b3 = 4\u00b3 = 64 cm\u00b3.",
    visual: "fraction-bar",
    speak: "Volume of a cube of edge 4 cm?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Pick the formula", "Watch units", "\u03c0 with care", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8MathsMensuration: ChapterDef = {
  id: "mensuration",
  title: "Mensuration",
  emoji: "\ud83d\udcd0",
  blurb: "Area, surface area and volume",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "multiply-basics",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "multiply-basics",
      questions: SET_B,
    },
  ],
  paperTopics: ["multiply-basics", "fractions"],
};

export const g8MathsMensurationQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
