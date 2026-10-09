import type { ChapterDef, PrepQuestion } from "../types";

/** Measurement & Area - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-meas-a-q01",
    prompt: "How many centimetres are there in 1 metre?",
    options: [
      { id: "a", text: "10 cm" },
      { id: "b", text: "100 cm" },
      { id: "c", text: "1000 cm" },
      { id: "d", text: "50 cm" }
    ],
    answerId: "b",
    explanation: "1 m = 100 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q02",
    prompt: "How many metres are there in 1 kilometre?",
    options: [
      { id: "a", text: "10 m" },
      { id: "b", text: "100 m" },
      { id: "c", text: "1000 m" },
      { id: "d", text: "10000 m" }
    ],
    answerId: "c",
    explanation: "1 km = 1000 m.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q03",
    prompt: "How many grams are there in 1 kilogram?",
    options: [
      { id: "a", text: "100 g" },
      { id: "b", text: "10 g" },
      { id: "c", text: "1000 g" },
      { id: "d", text: "500 g" }
    ],
    answerId: "c",
    explanation: "1 kg = 1000 g.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q04",
    prompt: "How many millilitres are there in 1 litre?",
    options: [
      { id: "a", text: "10 ml" },
      { id: "b", text: "100 ml" },
      { id: "c", text: "1000 ml" },
      { id: "d", text: "500 ml" }
    ],
    answerId: "c",
    explanation: "1 L = 1000 ml.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q05",
    prompt: "What is the perimeter of a square with side 4 cm?",
    options: [
      { id: "a", text: "8 cm" },
      { id: "b", text: "12 cm" },
      { id: "c", text: "16 cm" },
      { id: "d", text: "20 cm" }
    ],
    answerId: "c",
    explanation: "Perimeter of a square is 4 \u00d7 side = 4 \u00d7 4 = 16 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q06",
    prompt: "What is the area of a square with side 5 cm?",
    options: [
      { id: "a", text: "20 cm\u00b2" },
      { id: "b", text: "25 cm\u00b2" },
      { id: "c", text: "10 cm\u00b2" },
      { id: "d", text: "15 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Area of a square is side \u00d7 side = 5 \u00d7 5 = 25 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q07",
    prompt: "What is the perimeter of a rectangle 6 cm long and 2 cm broad?",
    options: [
      { id: "a", text: "8 cm" },
      { id: "b", text: "12 cm" },
      { id: "c", text: "16 cm" },
      { id: "d", text: "14 cm" }
    ],
    answerId: "c",
    explanation: "Perimeter = 2 \u00d7 (6 + 2) = 2 \u00d7 8 = 16 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q08",
    prompt: "What is the area of a rectangle 7 cm by 3 cm?",
    options: [
      { id: "a", text: "21 cm\u00b2" },
      { id: "b", text: "20 cm\u00b2" },
      { id: "c", text: "10 cm\u00b2" },
      { id: "d", text: "24 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "Area = length \u00d7 breadth = 7 \u00d7 3 = 21 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q09",
    prompt: "Which unit is best for the length of a classroom?",
    options: [
      { id: "a", text: "millimetre" },
      { id: "b", text: "centimetre" },
      { id: "c", text: "metre" },
      { id: "d", text: "kilometre" }
    ],
    answerId: "c",
    explanation: "A classroom is a few metres long, so metre is the sensible unit.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q10",
    prompt: "Which unit is best for the mass of a packet of sugar?",
    options: [
      { id: "a", text: "millilitre" },
      { id: "b", text: "kilogram" },
      { id: "c", text: "kilometre" },
      { id: "d", text: "litre" }
    ],
    answerId: "b",
    explanation: "Sugar is sold by mass, usually in kilograms (or grams).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q11",
    prompt: "Convert 3 m to centimetres.",
    options: [
      { id: "a", text: "30 cm" },
      { id: "b", text: "300 cm" },
      { id: "c", text: "3000 cm" },
      { id: "d", text: "3 cm" }
    ],
    answerId: "b",
    explanation: "3 \u00d7 100 = 300 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q12",
    prompt: "Convert 2 kg to grams.",
    options: [
      { id: "a", text: "200 g" },
      { id: "b", text: "20 g" },
      { id: "c", text: "2000 g" },
      { id: "d", text: "2500 g" }
    ],
    answerId: "c",
    explanation: "2 \u00d7 1000 = 2000 g.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q13",
    prompt: "A rectangular park is 40 m long and 25 m broad. What is its perimeter?",
    options: [
      { id: "a", text: "65 m" },
      { id: "b", text: "130 m" },
      { id: "c", text: "1000 m" },
      { id: "d", text: "90 m" }
    ],
    answerId: "b",
    explanation: "Perimeter = 2 \u00d7 (40 + 25) = 2 \u00d7 65 = 130 m.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q14",
    prompt: "A square field has side 12 m. What is its area?",
    options: [
      { id: "a", text: "48 m\u00b2" },
      { id: "b", text: "144 m\u00b2" },
      { id: "c", text: "24 m\u00b2" },
      { id: "d", text: "120 m\u00b2" }
    ],
    answerId: "b",
    explanation: "Area = 12 \u00d7 12 = 144 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q15",
    prompt: "Convert 450 cm to metres.",
    options: [
      { id: "a", text: "4.5 m" },
      { id: "b", text: "45 m" },
      { id: "c", text: "0.45 m" },
      { id: "d", text: "4500 m" }
    ],
    answerId: "a",
    explanation: "450 \u00f7 100 = 4.5 m.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q16",
    prompt: "Convert 3500 ml to litres.",
    options: [
      { id: "a", text: "3.5 L" },
      { id: "b", text: "35 L" },
      { id: "c", text: "0.35 L" },
      { id: "d", text: "350 L" }
    ],
    answerId: "a",
    explanation: "3500 \u00f7 1000 = 3.5 L.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q17",
    prompt: "A rectangular stamp is 3 cm by 2 cm. What is its area?",
    options: [
      { id: "a", text: "5 cm\u00b2" },
      { id: "b", text: "6 cm\u00b2" },
      { id: "c", text: "10 cm\u00b2" },
      { id: "d", text: "12 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "Area = 3 \u00d7 2 = 6 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q18",
    prompt: "How many millimetres are in 5 cm?",
    options: [
      { id: "a", text: "5 mm" },
      { id: "b", text: "50 mm" },
      { id: "c", text: "500 mm" },
      { id: "d", text: "0.5 mm" }
    ],
    answerId: "b",
    explanation: "1 cm = 10 mm, so 5 cm = 50 mm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q19",
    prompt: "A square has perimeter 36 cm. What is the length of one side?",
    options: [
      { id: "a", text: "6 cm" },
      { id: "b", text: "9 cm" },
      { id: "c", text: "12 cm" },
      { id: "d", text: "18 cm" }
    ],
    answerId: "b",
    explanation: "Side = perimeter \u00f7 4 = 36 \u00f7 4 = 9 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q20",
    prompt: "A rectangular floor is 8 m by 5 m. How many square metres of carpet are needed?",
    options: [
      { id: "a", text: "13 m\u00b2" },
      { id: "b", text: "26 m\u00b2" },
      { id: "c", text: "40 m\u00b2" },
      { id: "d", text: "45 m\u00b2" }
    ],
    answerId: "c",
    explanation: "Area = 8 \u00d7 5 = 40 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q21",
    prompt: "Which is longer: 1.2 km or 1200 m?",
    options: [
      { id: "a", text: "1.2 km" },
      { id: "b", text: "1200 m" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "c",
    explanation: "1.2 km = 1200 m, so they are equal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q22",
    prompt: "A rectangular garden is 15 m long and 10 m broad. A fence goes around it. How long is the fence?",
    options: [
      { id: "a", text: "25 m" },
      { id: "b", text: "50 m" },
      { id: "c", text: "150 m" },
      { id: "d", text: "30 m" }
    ],
    answerId: "b",
    explanation: "Fence length = perimeter = 2 \u00d7 (15 + 10) = 50 m.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q23",
    prompt: "Tiles of area 1 m\u00b2 each cover a room of 6 m by 4 m. How many tiles are needed?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "20" },
      { id: "c", text: "24" },
      { id: "d", text: "48" }
    ],
    answerId: "c",
    explanation: "Room area = 24 m\u00b2, so 24 tiles of 1 m\u00b2 are needed.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-a-q24",
    prompt: "A juice can holds 250 ml. How many such cans make 2 L?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "2 L = 2000 ml; 2000 \u00f7 250 = 8 cans.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-meas-b-q01",
    prompt: "How many millimetres are in 1 centimetre?",
    options: [
      { id: "a", text: "1 mm" },
      { id: "b", text: "10 mm" },
      { id: "c", text: "100 mm" },
      { id: "d", text: "1000 mm" }
    ],
    answerId: "b",
    explanation: "1 cm = 10 mm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q02",
    prompt: "How many centimetres are in 1 kilometre?",
    options: [
      { id: "a", text: "100 cm" },
      { id: "b", text: "1000 cm" },
      { id: "c", text: "10,000 cm" },
      { id: "d", text: "100,000 cm" }
    ],
    answerId: "d",
    explanation: "1 km = 1000 m = 1000 \u00d7 100 cm = 100,000 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q03",
    prompt: "How many kilograms equal 5000 g?",
    options: [
      { id: "a", text: "5 kg" },
      { id: "b", text: "50 kg" },
      { id: "c", text: "0.5 kg" },
      { id: "d", text: "500 kg" }
    ],
    answerId: "a",
    explanation: "5000 \u00f7 1000 = 5 kg.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q04",
    prompt: "How many litres equal 2000 ml?",
    options: [
      { id: "a", text: "2 L" },
      { id: "b", text: "20 L" },
      { id: "c", text: "0.2 L" },
      { id: "d", text: "200 L" }
    ],
    answerId: "a",
    explanation: "2000 \u00f7 1000 = 2 L.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q05",
    prompt: "What is the perimeter of a square with side 7 cm?",
    options: [
      { id: "a", text: "14 cm" },
      { id: "b", text: "21 cm" },
      { id: "c", text: "28 cm" },
      { id: "d", text: "49 cm" }
    ],
    answerId: "c",
    explanation: "4 \u00d7 7 = 28 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q06",
    prompt: "What is the area of a square with side 8 cm?",
    options: [
      { id: "a", text: "32 cm\u00b2" },
      { id: "b", text: "64 cm\u00b2" },
      { id: "c", text: "16 cm\u00b2" },
      { id: "d", text: "48 cm\u00b2" }
    ],
    answerId: "b",
    explanation: "8 \u00d7 8 = 64 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q07",
    prompt: "What is the perimeter of a rectangle 9 cm by 4 cm?",
    options: [
      { id: "a", text: "13 cm" },
      { id: "b", text: "26 cm" },
      { id: "c", text: "36 cm" },
      { id: "d", text: "22 cm" }
    ],
    answerId: "b",
    explanation: "2 \u00d7 (9 + 4) = 26 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q08",
    prompt: "What is the area of a rectangle 10 cm by 6 cm?",
    options: [
      { id: "a", text: "16 cm\u00b2" },
      { id: "b", text: "32 cm\u00b2" },
      { id: "c", text: "60 cm\u00b2" },
      { id: "d", text: "100 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "10 \u00d7 6 = 60 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q09",
    prompt: "Which unit is best for the distance between two cities?",
    options: [
      { id: "a", text: "cm" },
      { id: "b", text: "mm" },
      { id: "c", text: "km" },
      { id: "d", text: "ml" }
    ],
    answerId: "c",
    explanation: "City distances are measured in kilometres.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q10",
    prompt: "Which unit is best for a spoon of cough syrup?",
    options: [
      { id: "a", text: "kilometre" },
      { id: "b", text: "kilogram" },
      { id: "c", text: "millilitre" },
      { id: "d", text: "metre" }
    ],
    answerId: "c",
    explanation: "Small liquid amounts use millilitres.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q11",
    prompt: "Convert 4 km to metres.",
    options: [
      { id: "a", text: "40 m" },
      { id: "b", text: "400 m" },
      { id: "c", text: "4000 m" },
      { id: "d", text: "40,000 m" }
    ],
    answerId: "c",
    explanation: "4 \u00d7 1000 = 4000 m.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q12",
    prompt: "Convert 3 L to millilitres.",
    options: [
      { id: "a", text: "30 ml" },
      { id: "b", text: "300 ml" },
      { id: "c", text: "3000 ml" },
      { id: "d", text: "3 ml" }
    ],
    answerId: "c",
    explanation: "3 \u00d7 1000 = 3000 ml.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q13",
    prompt: "A rectangular photo is 18 cm by 12 cm. What is its perimeter?",
    options: [
      { id: "a", text: "30 cm" },
      { id: "b", text: "60 cm" },
      { id: "c", text: "216 cm" },
      { id: "d", text: "48 cm" }
    ],
    answerId: "b",
    explanation: "2 \u00d7 (18 + 12) = 60 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q14",
    prompt: "A square courtyard has side 20 m. What is its area?",
    options: [
      { id: "a", text: "80 m\u00b2" },
      { id: "b", text: "400 m\u00b2" },
      { id: "c", text: "40 m\u00b2" },
      { id: "d", text: "200 m\u00b2" }
    ],
    answerId: "b",
    explanation: "20 \u00d7 20 = 400 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q15",
    prompt: "Convert 2.5 m to centimetres.",
    options: [
      { id: "a", text: "25 cm" },
      { id: "b", text: "250 cm" },
      { id: "c", text: "2500 cm" },
      { id: "d", text: "2.5 cm" }
    ],
    answerId: "b",
    explanation: "2.5 \u00d7 100 = 250 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q16",
    prompt: "Convert 1.25 kg to grams.",
    options: [
      { id: "a", text: "125 g" },
      { id: "b", text: "1250 g" },
      { id: "c", text: "12.5 g" },
      { id: "d", text: "12500 g" }
    ],
    answerId: "b",
    explanation: "1.25 \u00d7 1000 = 1250 g.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q17",
    prompt: "A notebook page is 20 cm by 15 cm. What is its area?",
    options: [
      { id: "a", text: "35 cm\u00b2" },
      { id: "b", text: "70 cm\u00b2" },
      { id: "c", text: "300 cm\u00b2" },
      { id: "d", text: "200 cm\u00b2" }
    ],
    answerId: "c",
    explanation: "20 \u00d7 15 = 300 cm\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q18",
    prompt: "How many centimetres are in 80 mm?",
    options: [
      { id: "a", text: "0.8 cm" },
      { id: "b", text: "8 cm" },
      { id: "c", text: "80 cm" },
      { id: "d", text: "800 cm" }
    ],
    answerId: "b",
    explanation: "80 \u00f7 10 = 8 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q19",
    prompt: "A square has area 81 cm\u00b2. What is the length of one side?",
    options: [
      { id: "a", text: "8 cm" },
      { id: "b", text: "9 cm" },
      { id: "c", text: "18 cm" },
      { id: "d", text: "40.5 cm" }
    ],
    answerId: "b",
    explanation: "Side \u00d7 side = 81, so side = 9 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q20",
    prompt: "A rectangular playground is 50 m by 30 m. What is its area?",
    options: [
      { id: "a", text: "80 m\u00b2" },
      { id: "b", text: "160 m\u00b2" },
      { id: "c", text: "1500 m\u00b2" },
      { id: "d", text: "800 m\u00b2" }
    ],
    answerId: "c",
    explanation: "50 \u00d7 30 = 1500 m\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q21",
    prompt: "Which is heavier: 2.5 kg or 2400 g?",
    options: [
      { id: "a", text: "2.5 kg" },
      { id: "b", text: "2400 g" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "2.5 kg = 2500 g, which is more than 2400 g.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q22",
    prompt: "A rectangular field is 60 m long and 40 m broad. Find the cost of fencing at \u20b915 per metre.",
    options: [
      { id: "a", text: "\u20b91500" },
      { id: "b", text: "\u20b93000" },
      { id: "c", text: "\u20b92400" },
      { id: "d", text: "\u20b93600" }
    ],
    answerId: "b",
    explanation: "Perimeter = 2 \u00d7 (60 + 40) = 200 m; cost = 200 \u00d7 15 = \u20b93000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q23",
    prompt: "A room is 9 m long and 6 m broad. Square tiles of side 1 m cover the floor. How many tiles are needed?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "30" },
      { id: "c", text: "54" },
      { id: "d", text: "108" }
    ],
    answerId: "c",
    explanation: "Area = 9 \u00d7 6 = 54 m\u00b2; each tile is 1 m\u00b2, so 54 tiles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-meas-b-q24",
    prompt: "A tank holds 12 L of water. How many 500 ml bottles can be filled from it?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "20" },
      { id: "c", text: "24" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "12 L = 12,000 ml; 12,000 \u00f7 500 = 24 bottles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "📏",
    title: "Measurement and area",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Measure length, mass and capacity. Perimeter goes around; area fills inside.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Length", reveal: "mm, cm, m, km \u2014 convert with 10, 100, 1000", emoji: "\ud83d\udcd0" },
      { label: "Mass & capacity", reveal: "1000 g = 1 kg; 1000 ml = 1 L", emoji: "\u2696\ufe0f" },
      { label: "Perimeter", reveal: "Distance around a shape", emoji: "\ud83d\udd32" },
      { label: "Area", reveal: "Space inside \u2014 square units", emoji: "\ud83d\udfe6" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Area of a 6 cm by 4 cm rectangle?",
    options: [
        { id: "a", text: "10 cm\u00b2" },
        { id: "b", text: "20 cm\u00b2" },
        { id: "c", text: "24 cm\u00b2" },
        { id: "d", text: "48 cm\u00b2" }
    ],
    answerId: "c",
    why: "Area = length \u00d7 breadth = 6 \u00d7 4 = 24 cm\u00b2.",
    visual: "number-line",
    speak: "Area of a 6 cm by 4 cm rectangle?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Choose sensible units", "Convert carefully", "P = around, A = inside", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5MathsMeasurement: ChapterDef = {
  id: "measurement-area",
  title: "Measurement & Area",
  emoji: "📏",
  blurb: "Length, mass, perimeter and area",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "decimals",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "decimals",
      questions: SET_B,
    },
  ],
  paperTopics: ["decimals", "add-sub", "percent"],
};

export const g5MathsMeasurementQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
