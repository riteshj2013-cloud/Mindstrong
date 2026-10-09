import type { ChapterDef, PrepQuestion } from "../types";

/** Shapes - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-maths-shapes-a-q01",
    prompt: "A round ball looks most like a\u2026",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "circle" },
      { id: "c", text: "triangle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "b",
    explanation: "A ball is round like a circle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    explanation: "A triangle has 3 sides.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    explanation: "A square has 4 equal sides.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q04",
    prompt: "Which shape has no corners?",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "circle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "c",
    explanation: "A circle is smooth \u2014 no corners.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q05",
    prompt: "A book cover looks most like a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "ball" }
    ],
    answerId: "c",
    explanation: "A book is longer one way \u2014 a rectangle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q06",
    prompt: "How many corners does a square have?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "0" }
    ],
    answerId: "c",
    explanation: "A square has 4 corners.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q07",
    prompt: "Which shape looks like a slice of pizza?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "square" },
      { id: "d", text: "oval" }
    ],
    answerId: "b",
    explanation: "A pizza slice is triangle-shaped.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q08",
    prompt: "A door is often shaped like a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "star" }
    ],
    answerId: "c",
    explanation: "Most doors are rectangles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q09",
    prompt: "Which has 3 corners?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "square" },
      { id: "c", text: "triangle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "c",
    explanation: "A triangle has 3 corners.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    explanation: "A rectangle has 4 sides.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q12",
    prompt: "Which shape can roll easily?",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "circle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "c",
    explanation: "A circle rolls.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q13",
    prompt: "A sandwich cut corner to corner makes\u2026",
    options: [
      { id: "a", text: "circles" },
      { id: "b", text: "triangles" },
      { id: "c", text: "squares only" },
      { id: "d", text: "ovals" }
    ],
    answerId: "b",
    explanation: "Corner-to-corner cuts make triangles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q14",
    prompt: "All sides equal and 4 corners \u2014 what shape?",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "circle" },
      { id: "c", text: "square" },
      { id: "d", text: "oval" }
    ],
    answerId: "c",
    explanation: "Equal sides + 4 corners = square.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q15",
    prompt: "Which is NOT a shape name?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "apple" },
      { id: "c", text: "square" },
      { id: "d", text: "triangle" }
    ],
    answerId: "b",
    explanation: "Apple is a fruit, not a shape name.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-a-q16",
    prompt: "A window pane is often a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "star" }
    ],
    answerId: "c",
    explanation: "Many window panes are rectangles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q02",
    prompt: "A traffic warning board is often a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "square only" },
      { id: "d", text: "line" }
    ],
    answerId: "b",
    explanation: "Many warning boards are triangles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    explanation: "A square\u2019s four corners match.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q04",
    prompt: "A chapati is most like a\u2026",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "circle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "c",
    explanation: "A chapati is round like a circle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q05",
    prompt: "Rectangle sides: opposite sides are\u2026",
    options: [
      { id: "a", text: "round" },
      { id: "b", text: "equal" },
      { id: "c", text: "broken" },
      { id: "d", text: "three" }
    ],
    answerId: "b",
    explanation: "Opposite sides of a rectangle are equal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q06",
    prompt: "How many corners does a triangle have?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "Three corners on a triangle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    explanation: "A box face can be a square.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q08",
    prompt: "A coin is shaped like a\u2026",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "square" },
      { id: "c", text: "circle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "c",
    explanation: "Coins are round circles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q09",
    prompt: "Which has more sides: square or triangle?",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "square" },
      { id: "c", text: "same" },
      { id: "d", text: "circle" }
    ],
    answerId: "b",
    explanation: "Square has 4; triangle has 3. Square has more.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    explanation: "The cone tip is triangle-shaped.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q11",
    prompt: "Can a circle have a corner?",
    options: [
      { id: "a", text: "yes" },
      { id: "b", text: "no" },
      { id: "c", text: "only two" },
      { id: "d", text: "only at night" }
    ],
    answerId: "b",
    explanation: "A circle has no corners.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q12",
    prompt: "A phone screen is often a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "star" }
    ],
    answerId: "c",
    explanation: "Phone screens are rectangles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q13",
    prompt: "Three sticks joined end to end can make a\u2026",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "line only" },
      { id: "d", text: "ball" }
    ],
    answerId: "b",
    explanation: "Three sticks can make a triangle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-shapes-b-q14",
    prompt: "Which shape name starts with S?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "square" },
      { id: "d", text: "oval" }
    ],
    answerId: "c",
    explanation: "Square starts with S.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    explanation: "A bangle is round \u2014 a circle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
