import type { ChapterDef, PrepQuestion } from "../types";

/** Shapes - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-maths-shapes-a-q01",
    prompt: "A round ball looks most like a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "square" },
      { id: "c", text: "triangle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "a",
    explanation: "A ball is round all over, like a circle. A square is tempting, but a square has straight sides and corners, and a ball has none.",
    hints: ["Think of the outline of a round ball.", "Trace a ball's outline. Does it have any corners or straight sides?"]
  },
  {
    id: "g1-maths-shapes-a-q02",
    prompt: "How many sides does a triangle have?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "Trace a triangle with your finger: 1, 2, 3 straight sides. 4 is tempting, but 4 sides make a square or a rectangle.",
    hints: ["Draw a triangle and count its sides.", "Run your finger along each straight side of the triangle and count."]
  },
  {
    id: "g1-maths-shapes-a-q03",
    prompt: "A square has how many equal sides?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "A square has 4 sides, and all 4 are the same length. 2 is tempting because a rectangle has pairs of equal sides, but in a square all 4 match.",
    hints: ["Draw a square and count its sides.", "Touch each side of the square once and count as you go."]
  },
  {
    id: "g1-maths-shapes-a-q04",
    prompt: "Which shape has no corners?",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "circle" }
    ],
    answerId: "d",
    explanation: "A circle is one smooth curve with no corners. A triangle is tempting because it is small, but it still has 3 pointy corners.",
    hints: ["Corners are pointy places on a shape.", "Run your finger round each shape. Which one never hits a pointy corner?"]
  },
  {
    id: "g1-maths-shapes-a-q05",
    prompt: "A book cover looks most like a\u2026",
    options: [
      { id: "a", text: "rectangle" },
      { id: "b", text: "circle" },
      { id: "c", text: "triangle" },
      { id: "d", text: "ball" }
    ],
    answerId: "a",
    explanation: "A book is longer one way \u2014 a rectangle.",
    hints: ["A book cover has 4 straight sides: two long sides and two short ones. Which shape is that?"]
  },
  {
    id: "g1-maths-shapes-a-q06",
    prompt: "How many corners does a square have?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "3" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "Touch the corners of a square: 1, 2, 3, 4. 3 is tempting, but 3 corners make a triangle.",
    hints: ["A corner is where two sides of a square meet.", "Touch each corner of a square once and count."]
  },
  {
    id: "g1-maths-shapes-a-q07",
    prompt: "Which shape looks like a slice of pizza?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "square" },
      { id: "c", text: "triangle" },
      { id: "d", text: "oval" }
    ],
    answerId: "c",
    explanation: "A pizza slice has a pointy tip and two straight sides that meet the crust, like a triangle. Circle is tempting because the whole pizza is round, but one slice is not.",
    hints: ["A pizza slice has two straight sides meeting at a pointy tip, plus the crust. How many corners does it have?"]
  },
  {
    id: "g1-maths-shapes-a-q08",
    prompt: "A door is often shaped like a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "star" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "d",
    explanation: "A door is tall with 4 straight sides and 4 corners, like a rectangle. A triangle is tempting because some roofs have that shape, but a door has 4 sides, not 3.",
    hints: ["A door is tall, with 4 corners and two long sides opposite each other."]
  },
  {
    id: "g1-maths-shapes-a-q09",
    prompt: "Which has 3 corners?",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "circle" },
      { id: "c", text: "square" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "a",
    explanation: "A triangle has 3 sides and 3 corners. A square is tempting, but a square has 4 corners.",
    hints: ["Touch each corner of a shape with your finger and count: one, two, three. Which shape stops at 3 corners?"]
  },
  {
    id: "g1-maths-shapes-a-q10",
    prompt: "A clock face is most like a\u2026",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "circle" },
      { id: "c", text: "triangle" },
      { id: "d", text: "box" }
    ],
    answerId: "b",
    explanation: "A clock face is round \u2014 a circle.",
    hints: ["Look at a wall clock."]
  },
  {
    id: "g1-maths-shapes-a-q11",
    prompt: "How many sides does a rectangle have?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "A rectangle has 4 straight sides: 2 long ones and 2 short ones. 2 is tempting if you count only the long sides.",
    hints: ["Think of a door. It is a rectangle.", "Touch each straight side of the rectangle once and count."]
  },
  {
    id: "g1-maths-shapes-a-q12",
    prompt: "Which shape can roll easily?",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "circle" }
    ],
    answerId: "d",
    explanation: "A circle has no corners, so it can roll easily, like a wheel. A square is tempting, but its corners stop it from rolling.",
    hints: ["Round things roll."]
  },
  {
    id: "g1-maths-shapes-a-q13",
    prompt: "A sandwich cut corner to corner makes\u2026",
    options: [
      { id: "a", text: "triangles" },
      { id: "b", text: "circles" },
      { id: "c", text: "squares" },
      { id: "d", text: "ovals" }
    ],
    answerId: "a",
    explanation: "Cutting a square sandwich from one corner to the opposite corner gives 2 triangles. Squares is tempting, but each piece now has only 3 corners.",
    hints: ["Picture a square sandwich cut from corner to corner.", "Draw a square and a line from one corner to the far corner. Look at each piece."]
  },
  {
    id: "g1-maths-shapes-a-q14",
    prompt: "All sides equal and 4 corners \u2014 what shape?",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "square" },
      { id: "c", text: "circle" },
      { id: "d", text: "oval" }
    ],
    answerId: "b",
    explanation: "A square has 4 corners and all its sides are the same length. A triangle is tempting because its sides can be equal too, but it has only 3 corners.",
    hints: ["Think of a carrom board: 4 corners and all sides equal. What shape is it?"]
  },
  {
    id: "g1-maths-shapes-a-q15",
    prompt: "Which is NOT a shape name?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "square" },
      { id: "c", text: "apple" },
      { id: "d", text: "triangle" }
    ],
    answerId: "c",
    explanation: "Apple is a fruit, not a shape name.",
    hints: ["Shape names tell us how something is drawn, round or with corners. Which word names a thing, not a shape?"]
  },
  {
    id: "g1-maths-shapes-a-q16",
    prompt: "A window pane is often a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "star" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "d",
    explanation: "A window pane usually has 4 straight sides and 4 corners, like a rectangle. Circle is tempting because some windows are round, but most panes are rectangles.",
    hints: ["Think of a window."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-maths-shapes-b-q01",
    prompt: "How many sides does a circle have?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "A circle has no straight sides \u2014 0.",
    hints: ["Run your finger round a circle. Do you ever reach a straight side?"]
  },
  {
    id: "g1-maths-shapes-b-q02",
    prompt: "A traffic warning board is often a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "oval" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "b",
    explanation: "Many traffic warning boards have 3 sides and 3 corners, like a triangle. Circle is tempting because some signs are round, but those usually tell you what not to do.",
    hints: ["A traffic warning board has 3 corners, with one pointing up like a mountain. Which shape is that?"]
  },
  {
    id: "g1-maths-shapes-b-q03",
    prompt: "Which shape has 4 corners that are all the same?",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "circle" },
      { id: "c", text: "square" },
      { id: "d", text: "oval" }
    ],
    answerId: "c",
    explanation: "A square has 4 corners that are all the same. A triangle is tempting, but it has only 3 corners, not 4.",
    hints: ["A rectangle has 4 corners too. Which shape has 4 corners and all 4 sides the same length?"]
  },
  {
    id: "g1-maths-shapes-b-q04",
    prompt: "A chapati is most like a\u2026",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "circle" }
    ],
    answerId: "d",
    explanation: "A chapati is flat and round, like a circle. A square is tempting because some parathas are folded into squares, but a chapati is round.",
    hints: ["A chapati is round with no corners. Which shape is round?"]
  },
  {
    id: "g1-maths-shapes-b-q05",
    prompt: "Rectangle sides: opposite sides are\u2026",
    options: [
      { id: "a", text: "equal" },
      { id: "b", text: "round" },
      { id: "c", text: "broken" },
      { id: "d", text: "three" }
    ],
    answerId: "a",
    explanation: "In a rectangle, the top and bottom sides match, and the two sides match too, so opposite sides are equal. 'Three' is tempting, but a rectangle has 4 sides, not 3.",
    hints: ["Think of a rectangle like a book cover.", "Lay a book's top edge on its bottom edge. Are the opposite sides the same length?"]
  },
  {
    id: "g1-maths-shapes-b-q06",
    prompt: "How many corners does a triangle have?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "3" },
      { id: "c", text: "2" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "A triangle has 3 sides, and they meet at 3 corners. 4 is tempting, but 4 corners make a square or a rectangle.",
    hints: ["Corners are the pointy tips of a triangle.", "Draw a triangle and touch each tip once as you count."]
  },
  {
    id: "g1-maths-shapes-b-q07",
    prompt: "Which shape looks like a box face?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "square" },
      { id: "d", text: "moon" }
    ],
    answerId: "c",
    explanation: "A box face has 4 straight sides and 4 corners, and it can be a square. Circle is tempting, but a box face has corners and a circle has none.",
    hints: ["A box like a dice has faces with 4 equal sides. Which shape is each face?"]
  },
  {
    id: "g1-maths-shapes-b-q08",
    prompt: "A coin is shaped like a\u2026",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "square" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "circle" }
    ],
    answerId: "d",
    explanation: "A coin is flat and round, like a circle. A square is tempting, but a coin has no corners, which is why it can roll.",
    hints: ["Look at ₹1 coin."]
  },
  {
    id: "g1-maths-shapes-b-q09",
    prompt: "Which has more sides: square or triangle?",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "same" },
      { id: "d", text: "circle" }
    ],
    answerId: "a",
    explanation: "Square has 4; triangle has 3. Square has more.",
    hints: ["A triangle has 3 sides. Count the sides of the other shape, then compare."]
  },
  {
    id: "g1-maths-shapes-b-q10",
    prompt: "An ice-cream cone tip looks like a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "square" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "b",
    explanation: "An ice-cream cone gets narrower to a point at the tip, like the corner of a triangle. Circle is tempting because the top of the cone is round, but the tip is pointy.",
    hints: ["An ice-cream cone tip comes to one sharp point with two straight sides. Which flat shape looks like that?"]
  },
  {
    id: "g1-maths-shapes-b-q11",
    prompt: "Can a circle have a corner?",
    options: [
      { id: "a", text: "yes" },
      { id: "b", text: "one corner" },
      { id: "c", text: "no" },
      { id: "d", text: "four corners" }
    ],
    answerId: "c",
    explanation: "A circle is one smooth curve, so it has no corners at all. 'One corner' is tempting if you think the curve must start somewhere, but a corner is where two straight sides meet, and a circle has no straight sides.",
    hints: ["A corner is where two straight sides meet. Does a circle have any straight sides?"]
  },
  {
    id: "g1-maths-shapes-b-q12",
    prompt: "A phone screen is often a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "star" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "d",
    explanation: "A phone screen has 4 straight sides and 4 corners, longer one way, like a rectangle. Circle is tempting because some watch screens are round, but a phone screen is not.",
    hints: ["A phone screen has 4 corners and is longer one way than the other. Which shape is that?"]
  },
  {
    id: "g1-maths-shapes-b-q13",
    prompt: "Three sticks joined end to end can make a\u2026",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "circle" },
      { id: "c", text: "square" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "a",
    explanation: "Three sticks joined end to end make 3 sides and 3 corners: a triangle. Circle is tempting, but sticks are straight and cannot bend into a round shape.",
    hints: ["Three sides."]
  },
  {
    id: "g1-maths-shapes-b-q14",
    prompt: "Which shape name starts with S?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "square" },
      { id: "c", text: "triangle" },
      { id: "d", text: "oval" }
    ],
    answerId: "b",
    explanation: "Square begins with the sound S. Circle is tempting because it sounds like it starts with S, but it is spelt with a C.",
    hints: ["Say the names."]
  },
  {
    id: "g1-maths-shapes-b-q15",
    prompt: "A bangle is most like a\u2026",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "circle" },
      { id: "d", text: "box" }
    ],
    answerId: "c",
    explanation: "A bangle is round, like a circle. Box is tempting because bangles are kept in one, but a box has corners and a bangle has none.",
    hints: ["A bangle goes round your wrist with no corners at all. Which shape is perfectly round?"]
  },
  {
    id: "g1-maths-shapes-b-q16",
    prompt: "How many equal sides must a square have?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "All 4 sides of a square are equal.",
    hints: ["Every side of a square is the same length.", "Draw a square and count its sides. All of them must be equal."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd37",
    title: "Shapes",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Shapes are all around us.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Circle", reveal: "Round, no corners", emoji: "\u26aa" },
      { label: "Triangle", reveal: "3 sides", emoji: "\ud83d\udd3a" },
      { label: "Square", reveal: "4 equal sides", emoji: "\u2b1b" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "How many sides does a triangle have?",
    options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" }
    ],
    answerId: "b",
    why: "A triangle has 3 sides.",
    visual: "none",
    speak: "How many sides does a triangle have?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Name the shape", "Count sides", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1MathsShapes: ChapterDef = {
  id: "shapes",
  title: "Shapes",
  emoji: "\ud83d\udd37",
  blurb: "Circle, square & more",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "shapes",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "shapes",
      questions: SET_B,
    },
  ],
  paperTopics: ["shapes", "numbers"],
};

export const g1MathsShapesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
