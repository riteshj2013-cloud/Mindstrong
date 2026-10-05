import type { ChapterDef, PrepQuestion } from "../types";

/** Shapes and Angles - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-angles-a-q01",
    prompt: "An angle measures 35\u00b0. What type of angle is it?",
    options: [
      { id: "a", text: "Obtuse" },
      { id: "b", text: "Right" },
      { id: "c", text: "Acute" },
      { id: "d", text: "Straight" }
    ],
    answerId: "c",
    explanation: "Any angle greater than 0\u00b0 and less than 90\u00b0 is acute, and 35\u00b0 is well below 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q02",
    prompt: "What angle is formed at the corner of a rectangular notebook page?",
    options: [
      { id: "a", text: "Right angle" },
      { id: "b", text: "Acute angle" },
      { id: "c", text: "Obtuse angle" },
      { id: "d", text: "Straight angle" }
    ],
    answerId: "a",
    explanation: "The corners of a rectangle are square corners, and a square corner is a right angle of 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q03",
    prompt: "How many degrees are there in a straight angle?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "360\u00b0" },
      { id: "c", text: "270\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "d",
    explanation: "A straight angle looks like a straight line and measures 180\u00b0, which is two right angles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q04",
    prompt: "What is the point where the two arms of an angle meet called?",
    options: [
      { id: "a", text: "Arm" },
      { id: "b", text: "Vertex" },
      { id: "c", text: "Side" },
      { id: "d", text: "Base" }
    ],
    answerId: "b",
    explanation: "The two arms of an angle start from one common point, and that point is called the vertex.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q05",
    prompt: "What is a closed shape with 6 straight sides called?",
    options: [
      { id: "a", text: "Pentagon" },
      { id: "b", text: "Hexagon" },
      { id: "c", text: "Octagon" },
      { id: "d", text: "Quadrilateral" }
    ],
    answerId: "b",
    explanation: "\"Hexa\" means six, so a hexagon has 6 sides, while a pentagon has only 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q06",
    prompt: "Which of these is a closed shape?",
    options: [
      { id: "a", text: "The letter C" },
      { id: "b", text: "The letter U" },
      { id: "c", text: "A wavy line" },
      { id: "d", text: "A circle with no gaps" }
    ],
    answerId: "d",
    explanation: "A shape is closed when its boundary has no gap, which happens only when the pencil ends where it began.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q07",
    prompt: "An angle measures 125\u00b0. What type of angle is it?",
    options: [
      { id: "a", text: "Obtuse" },
      { id: "b", text: "Right" },
      { id: "c", text: "Acute" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "a",
    explanation: "An obtuse angle is more than 90\u00b0 but less than 180\u00b0, and 125\u00b0 lies in that range.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q08",
    prompt: "At exactly 3 o'clock, what angle do the hour hand and minute hand of a clock make?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "120\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "c",
    explanation: "The minute hand points to 12 and the hour hand to 3, which is a quarter of the clock face, or 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q09",
    prompt: "What is the smallest number of straight sides a polygon can have?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "Two straight sides cannot close a shape, so the smallest polygon is a triangle with 3 sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q10",
    prompt: "How many degrees are there in a half turn?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "270\u00b0" },
      { id: "d", text: "360\u00b0" }
    ],
    answerId: "b",
    explanation: "A full turn is 360\u00b0, so half a turn is 180\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q11",
    prompt: "An angle measures 200\u00b0. What type of angle is it?",
    options: [
      { id: "a", text: "Reflex" },
      { id: "b", text: "Straight" },
      { id: "c", text: "Obtuse" },
      { id: "d", text: "Acute" }
    ],
    answerId: "a",
    explanation: "An angle greater than 180\u00b0 but less than 360\u00b0 is a reflex angle, so 200\u00b0 is not obtuse.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q12",
    prompt: "The minute hand of a clock moves clockwise from 12 to 9. Through how many degrees has it turned?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "270\u00b0" },
      { id: "d", text: "360\u00b0" }
    ],
    answerId: "c",
    explanation: "Going clockwise from 12 passes 3, 6 and then 9, which is three quarter turns, or 270\u00b0, while 90\u00b0 is the anticlockwise trap.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q13",
    prompt: "Ravi is facing North. He turns 90\u00b0 clockwise. Which direction is he facing now?",
    options: [
      { id: "a", text: "North" },
      { id: "b", text: "West" },
      { id: "c", text: "South" },
      { id: "d", text: "East" }
    ],
    answerId: "d",
    explanation: "Clockwise from North goes to East first, while West would be the result of an anticlockwise turn.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q14",
    prompt: "Meena places two right angles side by side so they share one arm. What angle do the two outer arms make?",
    options: [
      { id: "a", text: "Acute angle" },
      { id: "b", text: "Straight angle" },
      { id: "c", text: "Right angle" },
      { id: "d", text: "Reflex angle" }
    ],
    answerId: "b",
    explanation: "Two right angles together make 90\u00b0 + 90\u00b0 = 180\u00b0, which is a straight angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q15",
    prompt: "What is the smaller angle between the hands of a clock at exactly 4 o'clock?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "100\u00b0" },
      { id: "c", text: "120\u00b0" },
      { id: "d", text: "150\u00b0" }
    ],
    answerId: "c",
    explanation: "Each gap between two numbers on a clock is 30\u00b0, and from 12 to 4 there are 4 gaps, so the angle is 4 \u00d7 30\u00b0 = 120\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q16",
    prompt: "In angle PQR, which point is the vertex?",
    options: [
      { id: "a", text: "Q" },
      { id: "b", text: "P" },
      { id: "c", text: "R" },
      { id: "d", text: "Both P and R" }
    ],
    answerId: "a",
    explanation: "The middle letter in an angle's name always names the vertex, so Q is the vertex of angle PQR.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q17",
    prompt: "A cupboard door is opened exactly halfway between fully closed and a right angle. What angle does the door make with the cupboard?",
    options: [
      { id: "a", text: "30\u00b0" },
      { id: "b", text: "135\u00b0" },
      { id: "c", text: "60\u00b0" },
      { id: "d", text: "45\u00b0" }
    ],
    answerId: "d",
    explanation: "Half of a right angle is 90\u00b0 \u00f7 2 = 45\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q18",
    prompt: "Asha draws one pentagon and one quadrilateral. How many sides has she drawn in all?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "A pentagon has 5 sides and a quadrilateral has 4, so together they have 5 + 4 = 9 sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q19",
    prompt: "A straight angle is split into two angles by a ray. One of them is 70\u00b0. What is the other?",
    options: [
      { id: "a", text: "20\u00b0" },
      { id: "b", text: "110\u00b0" },
      { id: "c", text: "100\u00b0" },
      { id: "d", text: "290\u00b0" }
    ],
    answerId: "b",
    explanation: "The two parts must add up to 180\u00b0, so the other angle is 180\u00b0 \u2212 70\u00b0 = 110\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q20",
    prompt: "At exactly 8 o'clock, what is the REFLEX angle between the hands of a clock?",
    options: [
      { id: "a", text: "120\u00b0" },
      { id: "b", text: "160\u00b0" },
      { id: "c", text: "200\u00b0" },
      { id: "d", text: "240\u00b0" }
    ],
    answerId: "d",
    explanation: "The smaller angle is 4 gaps \u00d7 30\u00b0 = 120\u00b0, so the reflex angle is 360\u00b0 \u2212 120\u00b0 = 240\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q21",
    prompt: "Sita faces East. She turns 90\u00b0 anticlockwise and then 180\u00b0 clockwise. Which direction is she facing now?",
    options: [
      { id: "a", text: "South" },
      { id: "b", text: "North" },
      { id: "c", text: "West" },
      { id: "d", text: "East" }
    ],
    answerId: "a",
    explanation: "Turning anticlockwise from East brings her to North, and a half turn from North brings her to South.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q22",
    prompt: "Three angles together make a full turn around a point. Two of them are 90\u00b0 and 150\u00b0. What is the third angle?",
    options: [
      { id: "a", text: "60\u00b0" },
      { id: "b", text: "140\u00b0" },
      { id: "c", text: "120\u00b0" },
      { id: "d", text: "210\u00b0" }
    ],
    answerId: "c",
    explanation: "Angles around a point add up to 360\u00b0, so the third angle is 360\u00b0 \u2212 90\u00b0 \u2212 150\u00b0 = 120\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q23",
    prompt: "A toy robot turns 45\u00b0 at a time. How many such turns does it need to make a three-quarter turn?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "6" },
      { id: "c", text: "4" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "A three-quarter turn is 270\u00b0, and 270\u00b0 \u00f7 45\u00b0 = 6 turns, while 8 turns would make a full turn.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q24",
    prompt: "Through how many degrees does the minute hand turn between 2:00 and 2:20?",
    options: [
      { id: "a", text: "20\u00b0" },
      { id: "b", text: "100\u00b0" },
      { id: "c", text: "140\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "d",
    explanation: "In 20 minutes the minute hand moves from 12 to 4, which is 4 gaps \u00d7 30\u00b0 = 120\u00b0, not 20\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-angles-b-q01",
    prompt: "An angle measures exactly 90\u00b0. What is it called?",
    options: [
      { id: "a", text: "Acute angle" },
      { id: "b", text: "Straight angle" },
      { id: "c", text: "Obtuse angle" },
      { id: "d", text: "Right angle" }
    ],
    answerId: "d",
    explanation: "An angle of exactly 90\u00b0 is a right angle, like the corner of a square.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q02",
    prompt: "An angle measures 170\u00b0. What type of angle is it?",
    options: [
      { id: "a", text: "Acute" },
      { id: "b", text: "Straight" },
      { id: "c", text: "Obtuse" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "c",
    explanation: "170\u00b0 is more than 90\u00b0 but still less than 180\u00b0, so it is obtuse and not yet a straight angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q03",
    prompt: "What are the two straight lines that form an angle called?",
    options: [
      { id: "a", text: "Arms" },
      { id: "b", text: "Vertices" },
      { id: "c", text: "Diagonals" },
      { id: "d", text: "Edges" }
    ],
    answerId: "a",
    explanation: "An angle is made of two arms that start from a common point called the vertex.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q04",
    prompt: "How many sides does a quadrilateral have?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "\"Quadri\" means four, so a quadrilateral has 4 sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q05",
    prompt: "How many degrees are there in one full turn?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "c",
    explanation: "A full turn brings you back to where you started, and it measures 360\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q06",
    prompt: "Which of these angles is acute?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "89\u00b0" },
      { id: "c", text: "91\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "b",
    explanation: "Only 89\u00b0 is less than 90\u00b0, while 90\u00b0 is a right angle and 91\u00b0 is already obtuse.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q07",
    prompt: "Which of these is an open shape?",
    options: [
      { id: "a", text: "A triangle" },
      { id: "b", text: "A rectangle" },
      { id: "c", text: "A hexagon" },
      { id: "d", text: "The letter M" }
    ],
    answerId: "d",
    explanation: "The letter M has two loose ends that do not meet, so it is open, while the polygons are all closed.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q08",
    prompt: "At exactly 6 o'clock, what type of angle do the clock hands make?",
    options: [
      { id: "a", text: "Straight angle" },
      { id: "b", text: "Right angle" },
      { id: "c", text: "Obtuse angle" },
      { id: "d", text: "Acute angle" }
    ],
    answerId: "a",
    explanation: "At 6 o'clock the hands point to 12 and 6 in opposite directions, forming a straight line of 180\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q09",
    prompt: "How many degrees are there in a quarter turn?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "c",
    explanation: "A quarter of a full turn is 360\u00b0 \u00f7 4 = 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q10",
    prompt: "A rangoli border is a closed shape with 5 straight sides. What is it called?",
    options: [
      { id: "a", text: "Pentagon" },
      { id: "b", text: "Hexagon" },
      { id: "c", text: "Quadrilateral" },
      { id: "d", text: "Octagon" }
    ],
    answerId: "a",
    explanation: "A closed shape with 5 straight sides is a pentagon, while a hexagon has 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q11",
    prompt: "Which angle is greater than a right angle but less than a straight angle?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "190\u00b0" },
      { id: "d", text: "150\u00b0" }
    ],
    answerId: "d",
    explanation: "150\u00b0 lies between 90\u00b0 and 180\u00b0, while 190\u00b0 is already more than a straight angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q12",
    prompt: "Arjun is facing South. He turns 90\u00b0 anticlockwise. Which direction is he facing now?",
    options: [
      { id: "a", text: "West" },
      { id: "b", text: "East" },
      { id: "c", text: "North" },
      { id: "d", text: "South" }
    ],
    answerId: "b",
    explanation: "Going anticlockwise the order is North, West, South, East, so a quarter turn anticlockwise from South points East.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q13",
    prompt: "What is the smaller angle between the hands of a clock at exactly 2 o'clock?",
    options: [
      { id: "a", text: "30\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "60\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "c",
    explanation: "From 12 to 2 there are 2 gaps of 30\u00b0 each, so the angle is 60\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q14",
    prompt: "A full turn is split into two angles. One of them is 250\u00b0. What is the other?",
    options: [
      { id: "a", text: "110\u00b0" },
      { id: "b", text: "70\u00b0" },
      { id: "c", text: "130\u00b0" },
      { id: "d", text: "250\u00b0" }
    ],
    answerId: "a",
    explanation: "The two angles must add up to 360\u00b0, so the other is 360\u00b0 \u2212 250\u00b0 = 110\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q15",
    prompt: "Two angles of 35\u00b0 and 55\u00b0 are placed side by side with a common arm. What type of angle do they make together?",
    options: [
      { id: "a", text: "Acute angle" },
      { id: "b", text: "Straight angle" },
      { id: "c", text: "Obtuse angle" },
      { id: "d", text: "Right angle" }
    ],
    answerId: "d",
    explanation: "35\u00b0 + 55\u00b0 = 90\u00b0, which is exactly a right angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q16",
    prompt: "The minute hand of a clock moves clockwise from 3 to 7. Through how many degrees does it turn?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "150\u00b0" },
      { id: "c", text: "120\u00b0" },
      { id: "d", text: "210\u00b0" }
    ],
    answerId: "c",
    explanation: "From 3 to 7 there are 4 gaps of 30\u00b0 each, so the hand turns 4 \u00d7 30\u00b0 = 120\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q17",
    prompt: "How many more sides does a hexagon have than a triangle?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "9" }
    ],
    answerId: "b",
    explanation: "A hexagon has 6 sides and a triangle has 3, so the difference is 6 \u2212 3 = 3, while 9 is the trap of adding.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q18",
    prompt: "Angle XYZ measures 40\u00b0. Which two rays are its arms?",
    options: [
      { id: "a", text: "XY and XZ" },
      { id: "b", text: "Only XZ" },
      { id: "c", text: "ZX and ZY" },
      { id: "d", text: "YX and YZ" }
    ],
    answerId: "d",
    explanation: "Y is the middle letter and so it is the vertex, which means both arms start from Y: ray YX and ray YZ.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q19",
    prompt: "At which of these times do the clock hands make an obtuse angle?",
    options: [
      { id: "a", text: "5:00" },
      { id: "b", text: "3:00" },
      { id: "c", text: "1:00" },
      { id: "d", text: "6:00" }
    ],
    answerId: "a",
    explanation: "At 5:00 the angle is 5 \u00d7 30\u00b0 = 150\u00b0, which is obtuse, while 3:00 gives a right angle and 6:00 a straight angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q20",
    prompt: "At exactly 10 o'clock, what is the REFLEX angle between the hands of a clock?",
    options: [
      { id: "a", text: "60\u00b0" },
      { id: "b", text: "120\u00b0" },
      { id: "c", text: "300\u00b0" },
      { id: "d", text: "240\u00b0" }
    ],
    answerId: "c",
    explanation: "The smaller angle from 10 to 12 is 2 \u00d7 30\u00b0 = 60\u00b0, so the reflex angle is 360\u00b0 \u2212 60\u00b0 = 300\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q21",
    prompt: "Kabir faces West. He makes a 270\u00b0 turn clockwise. Which direction is he facing now?",
    options: [
      { id: "a", text: "North" },
      { id: "b", text: "South" },
      { id: "c", text: "East" },
      { id: "d", text: "West" }
    ],
    answerId: "b",
    explanation: "Clockwise from West he passes North (90\u00b0) and East (180\u00b0) and stops at South (270\u00b0), while North would come from turning anticlockwise.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q22",
    prompt: "Three angles lie together on a straight line. Two of them are equal and the third is 40\u00b0. What is the size of each equal angle?",
    options: [
      { id: "a", text: "50\u00b0" },
      { id: "b", text: "140\u00b0" },
      { id: "c", text: "80\u00b0" },
      { id: "d", text: "70\u00b0" }
    ],
    answerId: "d",
    explanation: "The angles add up to 180\u00b0, so the two equal angles share 180\u00b0 \u2212 40\u00b0 = 140\u00b0, which gives 70\u00b0 each.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q23",
    prompt: "A fan blade turns 30\u00b0 at a time. How many such turns make a straight angle?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "3" },
      { id: "c", text: "9" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "A straight angle is 180\u00b0, and 180\u00b0 \u00f7 30\u00b0 = 6 turns, while 12 turns would make a full turn.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q24",
    prompt: "What is the smaller angle between the hands of a clock at exactly 9:30?",
    options: [
      { id: "a", text: "75\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "105\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "c",
    explanation: "At 9:30 the minute hand is on 6 and the hour hand is halfway between 9 and 10, so the gap is 3\u00bd \u00d7 30\u00b0 = 105\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcd0",
    title: "Shapes and angles",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "An angle has two arms and a vertex. A square corner is ninety degrees.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Acute", reveal: "Less than 90 degrees", emoji: "\ud83d\udd39" },
      { label: "Right", reveal: "Exactly 90 degrees", emoji: "\u2b1c" },
      { label: "Obtuse", reveal: "Between 90 and 180", emoji: "\ud83d\udd36" },
      { label: "Polygons", reveal: "Closed straight-sided shapes", emoji: "\u2b21" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "An angle of 35 degrees is\u2026",
    options: [
        { id: "a", text: "Obtuse" },
        { id: "b", text: "Right" },
        { id: "c", text: "Acute" },
        { id: "d", text: "Straight" }
    ],
    answerId: "c",
    why: "Less than 90 means acute.",
    visual: "number-line",
    speak: "An angle of 35 degrees is\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Vertex plus two arms", "Know angle types", "Quarter turn is 90", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5MathsAngles: ChapterDef = {
  id: "shapes-angles",
  title: "Shapes and Angles",
  emoji: "\ud83d\udcd0",
  blurb: "Degrees, turns and polygons",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "add-sub",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "add-sub",
      questions: SET_B,
    },
  ],
  paperTopics: ["add-sub", "place-value"],
};

export const g5MathsAnglesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
