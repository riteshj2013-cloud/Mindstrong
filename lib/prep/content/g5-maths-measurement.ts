import type { ChapterDef, PrepQuestion } from "../types";
import { g5MathsMeasurementAchievers } from "./g5-maths-measurement-achievers";

/** Measurement & Area - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-meas-a-q01",
    prompt: "How many centimetres are there in 1 metre?",
    options: [
      { id: "a", text: "100 cm" },
      { id: "b", text: "10 cm" },
      { id: "c", text: "1000 cm" },
      { id: "d", text: "50 cm" }
    ],
    answerId: "a",
    explanation: "1 m = 100 cm. 50 cm is tempting if you take half of 100, or think a metre has only 10 cm.",
    hints: ["A metre ruler is marked in centimetres. How many centimetre marks run along the whole metre?"]
  },
  {
    id: "g5-maths-meas-a-q02",
    prompt: "How many metres are there in 1 kilometre?",
    options: [
      { id: "a", text: "10 m" },
      { id: "b", text: "1000 m" },
      { id: "c", text: "100 m" },
      { id: "d", text: "10000 m" }
    ],
    answerId: "b",
    explanation: "1 km = 1000 m. 100 m is tempting if you use 100 (as in m to cm) instead of 1000 for km to m.",
    hints: ["Think of the prefix 'kilo': how many grams are in a kilogram? A kilometre uses the same prefix with metres."]
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
    explanation: "1 kg = 1000 g. 500 g is tempting if you pick half a kilo (500 g) instead of the full 1000 g.",
    hints: ["Think of the prefix 'kilo': how many metres are in a kilometre? A kilogram uses the same prefix with grams."]
  },
  {
    id: "g5-maths-meas-a-q04",
    prompt: "How many millilitres are there in 1 litre?",
    options: [
      { id: "a", text: "10 ml" },
      { id: "b", text: "100 ml" },
      { id: "c", text: "500 ml" },
      { id: "d", text: "1000 ml" }
    ],
    answerId: "d",
    explanation: "1 L = 1000 ml. 500 ml is tempting if you pick half a litre (500 ml) instead of the full 1000 ml.",
    hints: ["A millilitre is a tiny part of a litre, just as a millimetre is of a metre. How many millimetres make a metre?"]
  },
  {
    id: "g5-maths-meas-a-q05",
    prompt: "What is the perimeter of a square with side 4 cm?",
    options: [
      { id: "a", text: "16 cm" },
      { id: "b", text: "8 cm" },
      { id: "c", text: "12 cm" },
      { id: "d", text: "20 cm" }
    ],
    answerId: "a",
    explanation: "Perimeter of a square is 4 × side = 4 × 4 = 16 cm. 12 cm is tempting if you add only three sides (3 × 4) and forget the fourth.",
    hints: ["A square has four equal sides. How do you find the distance all the way round?"]
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
    explanation: "Area of a square = side × side = 5 × 5 = 25 cm². 20 cm² is tempting if you multiply the side by 4 for the perimeter (5 × 4 = 20) instead of side × side.",
    hints: ["Area of a square = side × side. Multiply 5 cm by 5 cm."]
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
    explanation: "Perimeter = 2 × (6 + 2) = 2 × 8 = 16 cm. 14 cm is tempting if you add length and breadth once, or double only one side, instead of 2(l + b).",
    hints: ["Perimeter of a rectangle = 2 × (length + breadth). Add 6 cm and 2 cm first."]
  },
  {
    id: "g5-maths-meas-a-q08",
    prompt: "What is the area of a rectangle 7 cm by 3 cm?",
    options: [
      { id: "a", text: "20 cm\u00b2" },
      { id: "b", text: "10 cm\u00b2" },
      { id: "c", text: "24 cm\u00b2" },
      { id: "d", text: "21 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "Area of a rectangle = length × breadth = 7 × 3 = 21 cm². 20 cm² is tempting if you find the perimeter 2 × (7 + 3) = 20 instead of multiplying for area.",
    hints: ["Area of a rectangle = length × breadth. Multiply 7 cm by 3 cm."]
  },
  {
    id: "g5-maths-meas-a-q09",
    prompt: "Which unit is best for the length of a classroom?",
    options: [
      { id: "a", text: "metre" },
      { id: "b", text: "millimetre" },
      { id: "c", text: "centimetre" },
      { id: "d", text: "kilometre" }
    ],
    answerId: "a",
    explanation: "A classroom is a few metres long, so metre fits. Centimetre is tempting if you think of measuring with your school ruler, which is marked in centimetres, but a classroom would then be hundreds of centimetres long.",
    hints: ["A classroom is longer than a ruler but much shorter than a road between towns. Pick a unit to match."]
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
    explanation: "Sugar is sold by mass, so kilogram fits. millilitre is tempting if you pick a liquid-volume unit instead of a mass unit for the packet.",
    hints: ["A packet of sugar is weighed, not poured or measured with a ruler. Which unit fits a mass that size?"]
  },
  {
    id: "g5-maths-meas-a-q11",
    prompt: "Convert 3 m to centimetres.",
    options: [
      { id: "a", text: "30 cm" },
      { id: "b", text: "3000 cm" },
      { id: "c", text: "300 cm" },
      { id: "d", text: "3 cm" }
    ],
    answerId: "c",
    explanation: "3 m = 3 × 100 = 300 cm. 30 cm is tempting if you multiply by 10 instead of by 100 when changing metres to centimetres.",
    hints: ["1 m = 100 cm, so multiply 3 by 100."]
  },
  {
    id: "g5-maths-meas-a-q12",
    prompt: "Convert 2 kg to grams.",
    options: [
      { id: "a", text: "200 g" },
      { id: "b", text: "20 g" },
      { id: "c", text: "2500 g" },
      { id: "d", text: "2000 g" }
    ],
    answerId: "d",
    explanation: "1 kg = 1000 g, so 2 kg = 2 × 1000 = 2000 g. 200 g is tempting if you multiply by 100 instead of 1000 (2 × 100 = 200).",
    hints: ["How many grams make 1 kg? Use that to change 2 kg."]
  },
  {
    id: "g5-maths-meas-a-q13",
    prompt: "A rectangular park is 40 m long and 25 m broad. What is its perimeter?",
    options: [
      { id: "a", text: "130 m" },
      { id: "b", text: "65 m" },
      { id: "c", text: "1000 m" },
      { id: "d", text: "90 m" }
    ],
    answerId: "a",
    explanation: "Perimeter = 2 × (40 + 25) = 2 × 65 = 130 m. 90 m is tempting if you add only some of the sides instead of the full distance around.",
    hints: ["Perimeter = 2 × (length + breadth). Add 40 m and 25 m first, then double."]
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
    explanation: "Area = 12 × 12 = 144 m². 48 m² is tempting if you multiply the side by 4 for the perimeter (12 × 4 = 48) instead of 12 × 12 for area.",
    hints: ["Area of a square = side × side. Multiply 12 m by 12 m."]
  },
  {
    id: "g5-maths-meas-a-q15",
    prompt: "Convert 450 cm to metres.",
    options: [
      { id: "a", text: "45 m" },
      { id: "b", text: "0.45 m" },
      { id: "c", text: "4.5 m" },
      { id: "d", text: "4500 m" }
    ],
    answerId: "c",
    explanation: "450 ÷ 100 = 4.5 m. 0.45 m is tempting if you divide by 1000 (as if cm were mm to m) instead of by 100; 45 m is tempting if you divide by only 10.",
    hints: ["100 cm = 1 m, so divide 450 by 100."]
  },
  {
    id: "g5-maths-meas-a-q16",
    prompt: "Convert 3500 ml to litres.",
    options: [
      { id: "a", text: "35 L" },
      { id: "b", text: "0.35 L" },
      { id: "c", text: "350 L" },
      { id: "d", text: "3.5 L" }
    ],
    answerId: "d",
    explanation: "1000 ml = 1 L, so 3500 ÷ 1000 = 3.5 L. 0.35 L is tempting if you divide by 10,000 (four zeros) instead of 1000.",
    hints: ["How many millilitres make 1 L? Use that to change 3500 ml."]
  },
  {
    id: "g5-maths-meas-a-q17",
    prompt: "A rectangular stamp is 3 cm by 2 cm. What is its area?",
    options: [
      { id: "a", text: "6 cm\u00b2" },
      { id: "b", text: "5 cm\u00b2" },
      { id: "c", text: "10 cm\u00b2" },
      { id: "d", text: "12 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "Area = 3 × 2 = 6 cm². 10 cm² is tempting if you find the perimeter 2 × (3 + 2) = 10 instead of the area.",
    hints: ["Area of a rectangle = length × breadth. Multiply 3 cm by 2 cm."]
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
    explanation: "1 cm = 10 mm, so 5 cm = 50 mm. 5 mm is tempting if you multiply or divide by 10 instead of by 100 when moving between m and cm.",
    hints: ["1 cm = 10 mm, so multiply 5 by 10."]
  },
  {
    id: "g5-maths-meas-a-q19",
    prompt: "A square has perimeter 36 cm. What is the length of one side?",
    options: [
      { id: "a", text: "6 cm" },
      { id: "b", text: "12 cm" },
      { id: "c", text: "9 cm" },
      { id: "d", text: "18 cm" }
    ],
    answerId: "c",
    explanation: "A square’s four equal sides add to the perimeter, so one side is 36 ÷ 4 = 9 cm. 12 cm is tempting if you divide 36 by 3 (as if a triangle) instead of by 4.",
    hints: ["How many equal sides does a square have, and how do they make up the perimeter?"]
  },
  {
    id: "g5-maths-meas-a-q20",
    prompt: "A rectangular floor is 8 m by 5 m. How many square metres of carpet are needed?",
    options: [
      { id: "a", text: "13 m\u00b2" },
      { id: "b", text: "26 m\u00b2" },
      { id: "c", text: "45 m\u00b2" },
      { id: "d", text: "40 m\u00b2" }
    ],
    answerId: "d",
    explanation: "Area = 8 × 5 = 40 m². 45 m² is tempting if you find the perimeter (or under-count the covering) instead of using length × breadth for area.",
    hints: ["Carpet covers the area: multiply the length 8 m by the breadth 5 m."]
  },
  {
    id: "g5-maths-meas-a-q21",
    prompt: "Which is longer: 1.2 km or 1200 m?",
    options: [
      { id: "a", text: "They are equal" },
      { id: "b", text: "1.2 km" },
      { id: "c", text: "1200 m" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "1.2 km = 1.2 × 1000 = 1200 m, so the two lengths are equal. 1.2 km is tempting if you think kilometres are always longer without converting both to the same unit.",
    hints: ["Change 1.2 km to metres by multiplying by 1000, then compare with 1200 m."]
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
    explanation: "Fence length = perimeter = 2 × (15 + 10) = 50 m. 30 m is tempting if you add length and breadth only once, or use area, instead of the full perimeter.",
    hints: ["The fence goes around the garden, so find the perimeter: 2 × (15 m + 10 m)."]
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
    explanation: "Room area = 24 m², so 24 tiles of 1 m² are needed. 20 is tempting if you use the perimeter of the room, or under-count the tiles needed to cover the area.",
    hints: ["Each tile covers 1 m², so the number of tiles equals the room's area, 6 m × 4 m."]
  },
  {
    id: "g5-maths-meas-a-q24",
    prompt: "A juice can holds 250 ml. How many such cans make 2 L?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "10" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "2 L = 2000 ml; 2000 ÷ 250 = 8 cans. 4 is tempting if you use 1000 mL instead of 2000 mL; 2000 ÷ 250 = 8.",
    hints: ["Change 2 L to millilitres first, then divide by the 250 ml in each can."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-meas-b-q01",
    prompt: "How many millimetres are in 1 centimetre?",
    options: [
      { id: "a", text: "10 mm" },
      { id: "b", text: "1 mm" },
      { id: "c", text: "100 mm" },
      { id: "d", text: "1000 mm" }
    ],
    answerId: "a",
    explanation: "1 cm = 10 mm. 1 mm is tempting if you think centimetres and millimetres are the same size; 100 mm is tempting if you use the m↔cm factor of 100.",
    hints: ["Look at a ruler: count the small millimetre marks between 0 and 1 centimetre."]
  },
  {
    id: "g5-maths-meas-b-q02",
    prompt: "How many centimetres are in 1 kilometre?",
    options: [
      { id: "a", text: "100 cm" },
      { id: "b", text: "100,000 cm" },
      { id: "c", text: "1000 cm" },
      { id: "d", text: "10,000 cm" }
    ],
    answerId: "b",
    explanation: "1 km = 1000 m and 1 m = 100 cm, so 1 km = 1000 × 100 = 100,000 cm. 10,000 cm is tempting if you multiply by only one of those factors (1000 or 100) and miss the other.",
    hints: ["1 kilometre = 1000 m and 1 m = 100 cm. Multiply 1000 by 100."]
  },
  {
    id: "g5-maths-meas-b-q03",
    prompt: "How many kilograms equal 5000 g?",
    options: [
      { id: "a", text: "50 kg" },
      { id: "b", text: "0.5 kg" },
      { id: "c", text: "5 kg" },
      { id: "d", text: "500 kg" }
    ],
    answerId: "c",
    explanation: "1000 g = 1 kg, so 5000 ÷ 1000 = 5 kg. 0.5 kg is tempting if you divide by 10,000 instead of 1000.",
    hints: ["How many grams make 1 kg? Use that to change 5000 g."]
  },
  {
    id: "g5-maths-meas-b-q04",
    prompt: "How many litres equal 2000 ml?",
    options: [
      { id: "a", text: "20 L" },
      { id: "b", text: "0.2 L" },
      { id: "c", text: "200 L" },
      { id: "d", text: "2 L" }
    ],
    answerId: "d",
    explanation: "1000 ml = 1 L, so 2000 ÷ 1000 = 2 L. 0.2 L is tempting if you divide by 10,000 instead of 1000.",
    hints: ["How many millilitres make 1 L? Use that to change 2000 ml."]
  },
  {
    id: "g5-maths-meas-b-q05",
    prompt: "Baldev, a farmer near Nagpur, puts exactly one round of wire 36 m long around his square vegetable patch. How long is each side of the patch?",
    options: [
      { id: "a", text: "9 m" },
      { id: "b", text: "6 m" },
      { id: "c", text: "12 m" },
      { id: "d", text: "18 m" }
    ],
    answerId: "a",
    explanation: "A square has 4 equal sides, and one round of wire is its perimeter. So each side is 36 ÷ 4 = 9 m (check: 4 × 9 = 36 m). 6 m is tempting because 6 × 6 = 36, but that would make 36 the area of the patch, not the length of wire round it.",
    hints: ["The wire goes once round all the equal sides of Baldev's square patch, so share its length equally among those sides."]
  },
  {
    id: "g5-maths-meas-b-q06",
    prompt: "Hemlata's square verandah in Kochi measures 6 m along each edge. She covers the floor completely with square tiles that are 1 m along each edge, with no gaps or overlaps. How many tiles does she use?",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "36" },
      { id: "c", text: "12" },
      { id: "d", text: "18" }
    ],
    answerId: "b",
    explanation: "Each tile covers 1 square metre, so the number of tiles equals the area of the floor: 6 m × 6 m = 36 m², which needs 36 tiles. 24 is tempting because 4 × 6 = 24 is the distance round the edge (the perimeter), not the space covered.",
    hints: ["Each tile covers exactly one square metre of Hemlata's verandah, so find how many square metres the floor covers."]
  },
  {
    id: "g5-maths-meas-b-q07",
    prompt: "What is the perimeter of a rectangle 9 cm by 4 cm?",
    options: [
      { id: "a", text: "13 cm" },
      { id: "b", text: "36 cm" },
      { id: "c", text: "26 cm" },
      { id: "d", text: "22 cm" }
    ],
    answerId: "c",
    explanation: "2 × (9 + 4) = 26 cm. 22 cm is tempting if you add length and breadth once, or double only one side, instead of 2(l + b).",
    hints: ["Perimeter of a rectangle = 2 × (length + breadth). Add 9 cm and 4 cm first."]
  },
  {
    id: "g5-maths-meas-b-q08",
    prompt: "What is the area of a rectangle 10 cm by 6 cm?",
    options: [
      { id: "a", text: "16 cm\u00b2" },
      { id: "b", text: "32 cm\u00b2" },
      { id: "c", text: "100 cm\u00b2" },
      { id: "d", text: "60 cm\u00b2" }
    ],
    answerId: "d",
    explanation: "Area = 10 × 6 = 60 cm². 32 cm² is tempting if you find the perimeter 2 × (10 + 6) = 32 instead of multiplying for area.",
    hints: ["Area of a rectangle = length × breadth. Multiply 10 cm by 6 cm."]
  },
  {
    id: "g5-maths-meas-b-q09",
    prompt: "Which unit is best for the distance between two cities?",
    options: [
      { id: "a", text: "km" },
      { id: "b", text: "cm" },
      { id: "c", text: "mm" },
      { id: "d", text: "ml" }
    ],
    answerId: "a",
    explanation: "Distances between cities are measured in kilometres. cm is tempting if you think of measuring the distance on a map with a ruler, where it is only a few centimetres, but the real distance between the cities is many kilometres.",
    hints: ["Cities are many thousands of metres apart. Which unit is made for long distances?"]
  },
  {
    id: "g5-maths-meas-b-q10",
    prompt: "Which unit is best for a spoon of cough syrup?",
    options: [
      { id: "a", text: "kilometre" },
      { id: "b", text: "millilitre" },
      { id: "c", text: "kilogram" },
      { id: "d", text: "metre" }
    ],
    answerId: "b",
    explanation: "A spoon of syrup is a small liquid amount, so millilitre fits. Kilogram is tempting if you think medicine is weighed, but a liquid dose is measured by volume, in millilitres.",
    hints: ["Cough syrup is a liquid, and a spoonful is a tiny amount. Which unit measures small volumes?"]
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
    explanation: "4 × 1000 = 4000 m. 400 m is tempting if you use 100 instead of 1000 when moving between km and m.",
    hints: ["1 km = 1000 m, so multiply 4 by 1000."]
  },
  {
    id: "g5-maths-meas-b-q12",
    prompt: "Convert 3 L to millilitres.",
    options: [
      { id: "a", text: "30 ml" },
      { id: "b", text: "300 ml" },
      { id: "c", text: "3 ml" },
      { id: "d", text: "3000 ml" }
    ],
    answerId: "d",
    explanation: "3 × 1000 = 3000 ml. 300 ml is tempting if you use 100 or 500 instead of 1000 ml in a litre.",
    hints: ["1 L = 1000 ml, so multiply 3 by 1000."]
  },
  {
    id: "g5-maths-meas-b-q13",
    prompt: "A rectangular photo is 18 cm by 12 cm. What is its perimeter?",
    options: [
      { id: "a", text: "60 cm" },
      { id: "b", text: "30 cm" },
      { id: "c", text: "216 cm" },
      { id: "d", text: "48 cm" }
    ],
    answerId: "a",
    explanation: "2 × (18 + 12) = 60 cm. 48 cm is tempting if you add only some of the sides instead of the full distance around.",
    hints: ["Perimeter = 2 × (length + breadth). Add 18 cm and 12 cm first, then double."]
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
    explanation: "Area of a square is side × side = 20 × 20 = 400 m². 80 m² is tempting if you find the perimeter 4 × 20 = 80 and report it as area.",
    hints: ["Area of a square uses side × side — not the distance round the edge."]
  },
  {
    id: "g5-maths-meas-b-q15",
    prompt: "Convert 2.5 m to centimetres.",
    options: [
      { id: "a", text: "25 cm" },
      { id: "b", text: "2500 cm" },
      { id: "c", text: "250 cm" },
      { id: "d", text: "2.5 cm" }
    ],
    answerId: "c",
    explanation: "2.5 m = 2.5 × 100 = 250 cm. 25 cm is tempting if you multiply by 10 instead of by 100 when changing metres to centimetres.",
    hints: ["1 m = 100 cm, so multiply 2.5 by 100."]
  },
  {
    id: "g5-maths-meas-b-q16",
    prompt: "Convert 1.25 kg to grams.",
    options: [
      { id: "a", text: "125 g" },
      { id: "b", text: "12.5 g" },
      { id: "c", text: "12500 g" },
      { id: "d", text: "1250 g" }
    ],
    answerId: "d",
    explanation: "1 kg = 1000 g, so 1.25 × 1000 = 1250 g. 125 g is tempting if you multiply by 100 instead of 1000.",
    hints: ["How many grams make 1 kg? Use that to change 1.25 kg."]
  },
  {
    id: "g5-maths-meas-b-q17",
    prompt: "A notebook page is 20 cm by 15 cm. What is its area?",
    options: [
      { id: "a", text: "300 cm\u00b2" },
      { id: "b", text: "35 cm\u00b2" },
      { id: "c", text: "70 cm\u00b2" },
      { id: "d", text: "200 cm\u00b2" }
    ],
    answerId: "a",
    explanation: "Area = 20 × 15 = 300 cm². 70 cm² is tempting if you find the perimeter 2 × (20 + 15) = 70 instead of the area.",
    hints: ["Area of a rectangle = length × breadth. Multiply 20 cm by 15 cm."]
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
    explanation: "1 cm = 10 mm, so 80 ÷ 10 = 8 cm. 0.8 cm is tempting if you divide by 100 instead of by 10; 80 cm is tempting if you forget to convert and keep the same digits.",
    hints: ["10 mm = 1 cm, so divide 80 by 10."]
  },
  {
    id: "g5-maths-meas-b-q19",
    prompt: "A square has area 81 cm\u00b2. What is the length of one side?",
    options: [
      { id: "a", text: "8 cm" },
      { id: "b", text: "18 cm" },
      { id: "c", text: "9 cm" },
      { id: "d", text: "40.5 cm" }
    ],
    answerId: "c",
    explanation: "Side × side = 81, so side = 9 because 9 × 9 = 81. 40.5 cm is tempting if you think area means side × 2 and halve 81 instead of finding the number that times itself makes 81.",
    hints: ["Area of a square is side × side, not side × 2. So you need a number that, multiplied by itself, makes the area."]
  },
  {
    id: "g5-maths-meas-b-q20",
    prompt: "A rectangular playground is 50 m by 30 m. What is its area?",
    options: [
      { id: "a", text: "80 m\u00b2" },
      { id: "b", text: "160 m\u00b2" },
      { id: "c", text: "800 m\u00b2" },
      { id: "d", text: "1500 m\u00b2" }
    ],
    answerId: "d",
    explanation: "Area = 50 × 30 = 1500 m². 160 m² is tempting if you find the perimeter 2 × (50 + 30) = 160 instead of the area.",
    hints: ["Area of a rectangle = length × breadth. Multiply 50 m by 30 m: do 5 × 3, then add the zeros."]
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
    explanation: "2.5 kg = 2500 g, and 2500 > 2400, so 2.5 kg is heavier. 2400 g is tempting if you compare the digits 2.5 and 2400 without converting to the same unit and think the larger-looking whole number wins.",
    hints: ["Change 2.5 kg into grams first, then compare with 2400 g."]
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
    explanation: "Perimeter = 2 × (60 + 40) = 200 m; cost = 200 × 15 = ₹3000. ₹2400 is tempting if you add length and breadth only once, or use area, instead of the full perimeter.",
    hints: ["Find the perimeter first: 2 × (60 m + 40 m). Then multiply by ₹15 for each metre."]
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
    explanation: "Area = 9 × 6 = 54 m²; each tile is 1 m², so 54 tiles. 30 is tempting if you find the perimeter (or under-count the covering) instead of using length × breadth for area.",
    hints: ["Each tile covers 1 m², so the number of tiles equals the floor area, 9 m × 6 m."]
  },
  {
    id: "g5-maths-meas-b-q24",
    prompt: "A tank holds 12 L of water. How many 500 ml bottles can be filled from it?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "20" },
      { id: "c", text: "6" },
      { id: "d", text: "24" }
    ],
    answerId: "d",
    explanation: "12 L = 12,000 ml; 12,000 ÷ 500 = 24 bottles. 20 is tempting if you use 100 or 500 instead of 1000 ml in a litre.",
    hints: ["Change 12 L to millilitres first, then divide by the 500 ml in each bottle."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udccf",
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
  emoji: "\ud83d\udccf",
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g5MathsMeasurementAchievers.length,
      topic: "measurement",
      questions: g5MathsMeasurementAchievers,
    },
  ],
  paperTopics: ["decimals", "add-sub", "percent"],
};

export const g5MathsMeasurementQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
