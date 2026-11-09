import type { ChapterDef, PrepQuestion } from "../types";

/** Mensuration - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-mensuration-a-q01",
    prompt: "Area of a rectangle with length 12 cm and breadth 5 cm is\u2026",
    options: [
      { id: "a", text: "60 cm\u00b2" },
      { id: "b", text: "17 cm\u00b2" },
      { id: "c", text: "34 cm\u00b2" },
      { id: "d", text: "120 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "Area = length × breadth = 12 × 5 = 60 cm². 34 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 60 cm². 34 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 60 cm².",
    hints: ["Area of a rectangle = length × breadth. Multiply 12 cm by 5 cm."]
  },
  {
    id: "g8-maths-mensuration-a-q02",
    prompt: "A square park has a perimeter of 48 m. What is its area?",
    options: [
      { id: "a", text: "12 m\u00b2" },
      { id: "b", text: "144 m\u00b2" },
      { id: "c", text: "96 m\u00b2" },
      { id: "d", text: "192 m\u00b2" }
    ],
    answerId: "b",
    explanation: "Side = 48 ÷ 4 = 12 m, so area = 12 × 12 = 144 m². 96 m² is tempting if you double the perimeter instead of finding the side first.",
    hints: ["A square has 4 equal sides. Find one side from the 48 m perimeter, then square it."]
  },
  {
    id: "g8-maths-mensuration-a-q03",
    prompt: "Area of a triangle with base 10 cm and height 6 cm is\u2026",
    options: [
      { id: "a", text: "60 cm\u00b2" },
      { id: "b", text: "16 cm\u00b2" },
      { id: "c", text: "30 cm\u00b2" },
      { id: "d", text: "32 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "Area = (1/2) × base × height = (1/2) × 10 × 6 = 30 cm². 32 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 30 cm². 32 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 30 cm².",
    hints: ["Area of a triangle = ½ × base × height. Use base 10 cm and height 6 cm."]
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
    explanation: "C = 2πr = 2 × (22/7) × 7 = 44 cm. 22 cm is tempting if you use the wrong place-value jump between units, but the correct conversion gives 44 cm.",
    hints: ["Circumference = 2πr. Put r = 7 cm and π = 22/7; the 7s cancel."]
  },
  {
    id: "g8-maths-mensuration-a-q05",
    prompt: "Area of a circle of radius 7 cm (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "154 cm\u00b2" },
      { id: "b", text: "44 cm\u00b2" },
      { id: "c", text: "49 cm\u00b2" },
      { id: "d", text: "22 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "A = πr² = (22/7) × 49 = 154 cm². 49 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 154 cm². 49 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 154 cm².",
    hints: ["Area = πr². Square the radius 7 cm, then multiply by 22/7."]
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
    explanation: "Volume = a³ = 4³ = 64 cm³. 48 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 64 cm³. 48 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 64 cm³.",
    hints: ["Volume of a cube = edge × edge × edge. Multiply 4 cm by itself three times."]
  },
  {
    id: "g8-maths-mensuration-a-q07",
    prompt: "Volume of a cuboid 5 cm \u00d7 3 cm \u00d7 2 cm is\u2026",
    options: [
      { id: "a", text: "10 cm\u00b3" },
      { id: "b", text: "15 cm\u00b3" },
      { id: "c", text: "30 cm\u00b3" },
      { id: "d", text: "60 cm\u00b3" }
    ],
    answerId: "c",
    explanation: "V = l × b × h = 5 × 3 × 2 = 30 cm³. 15 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 30 cm³. 15 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 30 cm³.",
    hints: ["Volume of a cuboid = length × breadth × height. Multiply 5, 3 and 2."]
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
    explanation: "LSA = 4a² = 4 × 25 = 100 cm². 125 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 100 cm². 125 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 100 cm².",
    hints: ["The lateral surface of a cube is its 4 side faces. Each face is 5 cm × 5 cm."]
  },
  {
    id: "g8-maths-mensuration-a-q09",
    prompt: "Total surface area of a cube of edge 3 cm is\u2026",
    options: [
      { id: "a", text: "54 cm\u00b2" },
      { id: "b", text: "27 cm\u00b2" },
      { id: "c", text: "36 cm\u00b2" },
      { id: "d", text: "18 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "TSA = 6a² = 6 × 9 = 54 cm². 36 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 54 cm². 36 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 54 cm².",
    hints: ["A cube has 6 equal square faces. Find the area of one face with edge 3 cm, then multiply."]
  },
  {
    id: "g8-maths-mensuration-a-q10",
    prompt: "Area of a parallelogram with base 8 cm and height 5 cm is\u2026",
    options: [
      { id: "a", text: "13 cm\u00b2" },
      { id: "b", text: "40 cm\u00b2" },
      { id: "c", text: "20 cm\u00b2" },
      { id: "d", text: "80 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Area = base × height = 8 × 5 = 40 cm². 20 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 40 cm². 20 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 40 cm².",
    hints: ["Area of a parallelogram = base × height. Use base 8 cm and height 5 cm."]
  },
  {
    id: "g8-maths-mensuration-a-q11",
    prompt: "A circle has diameter 14 cm. Its radius is\u2026",
    options: [
      { id: "a", text: "28 cm" },
      { id: "b", text: "14 cm" },
      { id: "c", text: "7 cm" },
      { id: "d", text: "44 cm" }
    ],
    answerId: "c",
    explanation: "Radius is half the diameter: 14/2 = 7 cm. 14 cm is tempting if you use the wrong place-value jump between units, but the correct conversion gives 7 cm.",
    hints: ["The radius goes from the centre to the edge: half of the 14 cm diameter."]
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
    explanation: "Area = (1/2)(a + b)h = (1/2)(10 + 6)×4 = 32 cm². 24 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 32 cm². 24 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 32 cm².",
    hints: ["Area of a trapezium = ½ × (sum of parallel sides) × height. Add 10 and 6 first."]
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
    explanation: "V = πr²h = (22/7)×49×10 = 1540 cm³. 770 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 1540 cm³. 770 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 1540 cm³.",
    hints: ["Volume of a cylinder = πr²h. Find the base area with r = 7 cm, then multiply by h = 10 cm."]
  },
  {
    id: "g8-maths-mensuration-a-q14",
    prompt: "Curved surface area of a cylinder: r = 7 cm, h = 10 cm (\u03c0 = 22/7).",
    options: [
      { id: "a", text: "1540 cm\u00b2" },
      { id: "b", text: "440 cm\u00b2" },
      { id: "c", text: "220 cm\u00b2" },
      { id: "d", text: "140 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "CSA = 2πrh = 2×(22/7)×7×10 = 440 cm². 220 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 440 cm². 220 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 440 cm².",
    hints: ["Curved surface area = 2πrh. Use r = 7 cm, h = 10 cm and π = 22/7."]
  },
  {
    id: "g8-maths-mensuration-a-q15",
    prompt: "A cuboid is 8 cm \u00d7 6 cm \u00d7 5 cm. Its total surface area is\u2026",
    options: [
      { id: "a", text: "240 cm\u00b2" },
      { id: "b", text: "118 cm\u00b2" },
      { id: "c", text: "236 cm\u00b2" },
      { id: "d", text: "480 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "TSA = 2(lb + bh + hl) = 2(48 + 30 + 40) = 2×118 = 236 cm². 240 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 236 cm². 240 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 236 cm².",
    hints: ["TSA = 2(lb + bh + hl). Find 8 × 6, 6 × 5 and 5 × 8 first."]
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
    explanation: "Lateral area = 2(l + b)h = 2(5 + 4)×3 = 54 m². 60 m² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 54 m². 60 m² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 54 m².",
    hints: ["Four walls = 2(length + breadth) × height. Use 5 m, 4 m and the 3 m height."]
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
    explanation: "Side = 80/4 = 20 m; area = 20² = 400 m². 200 m² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 400 m². 200 m² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 400 m².",
    hints: ["Divide the 80 m perimeter by 4 to get one side of the square park, then square that side."]
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
    explanation: "Along each edge 6/2 = 3 cubes; 3³ = 27. 36 is tempting if you use the wrong place-value jump between units, but the correct conversion gives 27.",
    hints: ["Find how many 2 cm cubes fit along one 6 cm edge, then cube that number."]
  },
  {
    id: "g8-maths-mensuration-a-q19",
    prompt: "Diagonal of a rectangle 6 cm by 8 cm is\u2026",
    options: [
      { id: "a", text: "14 cm" },
      { id: "b", text: "48 cm" },
      { id: "c", text: "10 cm" },
      { id: "d", text: "7 cm" }
    ],
    answerId: "c",
    explanation: "By Pythagoras: √(36 + 64) = √100 = 10 cm. 7 cm is tempting if you use the wrong place-value jump between units, but the correct conversion gives 10 cm.",
    hints: ["The diagonal makes a right triangle with the 6 cm and 8 cm sides. Use Pythagoras."]
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
    explanation: "V = (22/7)×(3.5)²×7 = (22/7)×12.25×7 = 22×12.25 = 269.5 m³. 154 m³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 269.5 m³. 154 m³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 269.5 m³.",
    hints: ["V = πr²h. Square 3.5 m first, then multiply by 22/7 and by 7 m; the 7s cancel."]
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
    explanation: "TSA = 2πr(h + r) = 2×(22/7)×7×(5 + 7) = 44×12 = 528 cm². 440 cm² is tempting if you use the wrong place-value jump between units, but the correct conversion gives 528 cm².",
    hints: ["TSA of a cylinder = 2πr(h + r). Use r = 7 cm and h = 5 cm."]
  },
  {
    id: "g8-maths-mensuration-a-q22",
    prompt: "A path 1 m wide runs inside a square park of side 20 m. Area of the path is\u2026",
    options: [
      { id: "a", text: "400 m\u00b2" },
      { id: "b", text: "76 m\u00b2" },
      { id: "c", text: "361 m\u00b2" },
      { id: "d", text: "39 m\u00b2" }
    ],
    answerId: "b",
    explanation: "Inner square side 18 m; path area = 400 − 324 = 76 m². 39 m² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 76 m². 39 m² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 76 m².",
    hints: ["The path takes 1 m off each side, so the inner square's side is 20 m − 2 m. Subtract inner area from outer."]
  },
  {
    id: "g8-maths-mensuration-a-q23",
    prompt: "Volume of water in a tank 2 m \u00d7 1.5 m filled to 80 cm depth is\u2026",
    options: [
      { id: "a", text: "2.4 cm\u00b3" },
      { id: "b", text: "3 m\u00b3" },
      { id: "c", text: "2.4 m\u00b3" },
      { id: "d", text: "1.2 m\u00b3" }
    ],
    answerId: "c",
    explanation: "Depth = 0.8 m; V = 2 × 1.5 × 0.8 = 2.4 m³. 2.4. 2.4 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 2.4 m³. 2.4 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 2.4 m³.",
    hints: ["Change the 80 cm depth to metres first, then multiply length × breadth × depth."]
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
    explanation: "CSA = πrl = (22/7)×7×25 = 550 cm². 175 cm² is tempting if you use the wrong place-value jump between units, but the correct conversion gives 110 cm².",
    hints: ["CSA of a cone = πrl. Use r = 7 cm, slant height 25 cm and π = 22/7."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-mensuration-b-q01",
    prompt: "Area of a square of side 11 cm is\u2026",
    options: [
      { id: "a", text: "121 cm\u00b2" },
      { id: "b", text: "44 cm\u00b2" },
      { id: "c", text: "22 cm\u00b2" },
      { id: "d", text: "110 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "Area = side² = 11² = 121 cm². 110 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 121 cm².",
    hints: ["Area of a square = side × side. Multiply 11 cm by 11 cm."]
  },
  {
    id: "g8-maths-mensuration-b-q02",
    prompt: "Perimeter of a rectangle 15 cm by 8 cm is\u2026",
    options: [
      { id: "a", text: "120 cm" },
      { id: "b", text: "46 cm" },
      { id: "c", text: "23 cm" },
      { id: "d", text: "38 cm" }
    ],
    answerId: "b",
    explanation: "P = 2(l + b) = 2(15 + 8) = 46 cm. 38 cm is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 46 cm. 38 cm is tempting if you use the wrong formula or mix length with area/volume; the correct result is 46 cm.",
    hints: ["Perimeter of a rectangle = 2 × (length + breadth). Add 15 cm and 8 cm first."]
  },
  {
    id: "g8-maths-mensuration-b-q03",
    prompt: "Area of a right triangle with legs 6 cm and 8 cm is\u2026",
    options: [
      { id: "a", text: "48 cm\u00b2" },
      { id: "b", text: "14 cm\u00b2" },
      { id: "c", text: "24 cm\u00b2" },
      { id: "d", text: "28 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "Area = (1/2)×6×8 = 24 cm². 28 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 24 cm². 28 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 24 cm².",
    hints: ["In a right triangle the two legs are the base and height. Area = ½ × 6 × 8."]
  },
  {
    id: "g8-maths-mensuration-b-q04",
    prompt: "Diameter of a circle with circumference 44 cm (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "7 cm" },
      { id: "b", text: "22 cm" },
      { id: "c", text: "28 cm" },
      { id: "d", text: "14 cm" }
    ],
    answerId: "d",
    explanation: "C = πd ⇒ d = 44 × 7/22 = 14 cm. 7 cm is tempting if you use the wrong place-value jump between units, but the correct conversion gives 14 cm.",
    hints: ["Circumference = πd. Divide 44 cm by 22/7, which means multiplying by 7/22."]
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
    explanation: "r = 7; A = (22/7)×49 = 154 cm². 44 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 154 cm². 44 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 154 cm².",
    hints: ["Halve the 14 cm diameter to get the radius, then use area = πr²."]
  },
  {
    id: "g8-maths-mensuration-b-q06",
    prompt: "Edge of a cube whose volume is 125 cm\u00b3 is\u2026",
    options: [
      { id: "a", text: "25 cm" },
      { id: "b", text: "5 cm" },
      { id: "c", text: "15 cm" },
      { id: "d", text: "10 cm" }
    ],
    answerId: "b",
    explanation: "a³ = 125 ⇒ a = 5 cm. 10 cm is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 5 cm. 10 cm is tempting if you use the wrong formula or mix length with area/volume; the correct result is 5 cm.",
    hints: ["Find the number that, multiplied by itself three times, gives 125."]
  },
  {
    id: "g8-maths-mensuration-b-q07",
    prompt: "Volume of a cuboid 10 cm \u00d7 4 cm \u00d7 3 cm is\u2026",
    options: [
      { id: "a", text: "17 cm\u00b3" },
      { id: "b", text: "40 cm\u00b3" },
      { id: "c", text: "120 cm\u00b3" },
      { id: "d", text: "240 cm\u00b3" }
    ],
    answerId: "c",
    explanation: "V = 10 × 4 × 3 = 120 cm³. 40 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 120 cm³. 40 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 120 cm³.",
    hints: ["Volume of a cuboid = length × breadth × height. Multiply 10, 4 and 3."]
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
    explanation: "2(12 + 6 + 8) = 2×26 = 52 cm². 48 cm² is tempting if you use the wrong place-value jump between units, but the correct conversion gives 52 cm².",
    hints: ["TSA = 2(lb + bh + hl). Find 4 × 3, 3 × 2 and 2 × 4 first."]
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
    explanation: "LSA = 2(l + b)h = 2(6 + 4)×5 = 100 cm². 120 cm² is tempting if you use the wrong place-value jump between units, but the correct conversion gives 100 cm².",
    hints: ["LSA of a cuboid = 2(length + breadth) × height. Use 6 cm, 4 cm and height 5 cm."]
  },
  {
    id: "g8-maths-mensuration-b-q10",
    prompt: "Area of a rhombus with diagonals 10 cm and 8 cm is\u2026",
    options: [
      { id: "a", text: "80 cm\u00b2" },
      { id: "b", text: "40 cm\u00b2" },
      { id: "c", text: "18 cm\u00b2" },
      { id: "d", text: "36 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Area = (1/2)×d₁×d₂ = (1/2)×10×8 = 40 cm². 36 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 40 cm². 36 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 40 cm².",
    hints: ["Area of a rhombus = ½ × product of the diagonals. Use 10 cm and 8 cm."]
  },
  {
    id: "g8-maths-mensuration-b-q11",
    prompt: "A circular pond has radius 21 m. Area (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "132 m\u00b2" },
      { id: "b", text: "462 m\u00b2" },
      { id: "c", text: "1386 m\u00b2" },
      { id: "d", text: "2772 m\u00b2" }
    ],
    answerId: "c",
    explanation: "A = (22/7)×441 = 1386 m². 462 m² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 1386 m². 462 m² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 1386 m².",
    hints: ["Area = πr². Square the 21 m radius, then multiply by 22/7; 21 divides by 7 neatly."]
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
    explanation: "(1/2)(12 + 8)×5 = 50 cm². 40 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 50 cm². 40 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 50 cm².",
    hints: ["Area of a trapezium = ½ × (sum of parallel sides) × height. Add 12 and 8 first."]
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
    explanation: "V = (22/7)×(3.5)²×8 = 22×12.25×8/7… (22/7)×12.25×8 = 22×1.75×8 = 308 cm³. 154 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 308 cm³. 154 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 308 cm³.",
    hints: ["V = πr²h. Square 3.5 cm, multiply by 22/7, then by the height 8 cm."]
  },
  {
    id: "g8-maths-mensuration-b-q14",
    prompt: "CSA of a cylinder: r = 5 cm, h = 14 cm (\u03c0 = 22/7).",
    options: [
      { id: "a", text: "220 cm\u00b2" },
      { id: "b", text: "440 cm\u00b2" },
      { id: "c", text: "350 cm\u00b2" },
      { id: "d", text: "700 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "2πrh = 2×(22/7)×5×14 = 440 cm². 350 cm² is tempting if you use the wrong place-value jump between units, but the correct conversion gives 440 cm².",
    hints: ["CSA = 2πrh. Use r = 5 cm and h = 14 cm; 14 cancels neatly with the 7 in 22/7."]
  },
  {
    id: "g8-maths-mensuration-b-q15",
    prompt: "How many litres does a cuboid tank 2 m \u00d7 1 m \u00d7 0.5 m hold?",
    options: [
      { id: "a", text: "100 L" },
      { id: "b", text: "10 L" },
      { id: "c", text: "1000 L" },
      { id: "d", text: "2000 L" }
    ],
    answerId: "c",
    explanation: "V = 1 m³ = 1000 litres. 100 L is tempting if you use the wrong place-value jump between units, but the correct conversion gives 1000 L.",
    hints: ["Find the volume of the tank in m³ first. Then convert, using how many litres fill one cubic metre."]
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
    explanation: "Area = 2(6+5)×4 = 88 m²; cost = 88 × 20 = ₹1760. ₹2400 is tempting if you use the wrong place-value jump between units, but the correct conversion gives ₹1760.",
    hints: ["Find the area of the four walls: 2(6 + 5) × 4. Then multiply by ₹20 per m²."]
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
    explanation: "Rectangle area 144; side = √144 = 12 cm. 13 cm is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 12 cm. 13 cm is tempting if you use the wrong formula or mix length with area/volume; the correct result is 12 cm.",
    hints: ["First find the rectangle's area, 16 × 9. The square's side is the square root of that area."]
  },
  {
    id: "g8-maths-mensuration-b-q18",
    prompt: "Number of 1 cm cubes in a 5 cm \u00d7 4 cm \u00d7 3 cm cuboid is\u2026",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "60" },
      { id: "c", text: "20" },
      { id: "d", text: "120" }
    ],
    answerId: "b",
    explanation: "Volume in cm³ equals the count of 1 cm cubes: 5×4×3 = 60. 20 is tempting if you use the wrong place-value jump between units, but the correct conversion gives 60.",
    hints: ["Each 1 cm cube takes up 1 cm³, so count the cubes by finding the volume 5 × 4 × 3."]
  },
  {
    id: "g8-maths-mensuration-b-q19",
    prompt: "A wire of length 88 cm is bent into a circle. Radius (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "7 cm" },
      { id: "b", text: "28 cm" },
      { id: "c", text: "14 cm" },
      { id: "d", text: "11 cm" }
    ],
    answerId: "c",
    explanation: "2πr = 88 ⇒ r = 88 × 7/(2×22) = 14 cm. 11 cm is tempting if you use the wrong place-value jump between units, but the correct conversion gives 14 cm.",
    hints: ["The 88 cm wire becomes the circumference 2πr. Solve for r with π = 22/7."]
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
    explanation: "V = (1/3)πr²h = (1/3)×3.14×9×4 = 37.68 cm³. 12 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 37.68 cm³. 12 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 37.68 cm³.",
    hints: ["Volume of a cone = ⅓ × π × r² × h. Use r = 3 cm, h = 4 cm and π = 3.14."]
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
    explanation: "TSA = 3πr² = 3×(22/7)×49 = 462 cm². 308 cm² is tempting if you use the wrong place-value jump between units, but the correct conversion gives 462 cm².",
    hints: ["A hemisphere's TSA is its curved part 2πr² plus the flat circle πr². Use r = 7 cm."]
  },
  {
    id: "g8-maths-mensuration-b-q22",
    prompt: "Outer side of a square frame is 12 cm; inner side 10 cm. Area of the frame is\u2026",
    options: [
      { id: "a", text: "24 cm\u00b2" },
      { id: "b", text: "44 cm\u00b2" },
      { id: "c", text: "120 cm\u00b2" },
      { id: "d", text: "100 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Outer area 144 − inner 100 = 44 cm². 24 cm² is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 44 cm². 24 cm² is tempting if you use the wrong formula or mix length with area/volume; the correct result is 44 cm².",
    hints: ["Area of the frame = outer square area − inner square area. Square 12 cm and 10 cm."]
  },
  {
    id: "g8-maths-mensuration-b-q23",
    prompt: "A cylindrical pipe has inner r = 3.5 cm and length 20 m. Volume of water it can hold (\u03c0 = 22/7) is\u2026",
    options: [
      { id: "a", text: "7700 cm\u00b3" },
      { id: "b", text: "1540 cm\u00b3" },
      { id: "c", text: "77000 cm\u00b3" },
      { id: "d", text: "440 cm\u00b3" }
    ],
    answerId: "c",
    explanation: "Length = 2000 cm; V = (22/7)×12.25×2000 = 77000 cm³. 7700 cm³ is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 77000 cm³. 7700 cm³ is tempting if you use the wrong formula or mix length with area/volume; the correct result is 77000 cm³.",
    hints: ["Change the 20 m length to centimetres first, then use V = πr²h with r = 3.5 cm."]
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
    explanation: "l = √(r² + h²) = √(25 + 144) = √169 = 13 cm. 17 cm is tempting if you use the wrong place-value jump between units, but the correct conversion gives 13 cm.",
    hints: ["The radius, height and slant height form a right triangle. Use l² = r² + h² with 5 and 12."]
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
