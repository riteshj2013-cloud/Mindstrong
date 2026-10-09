import type { ChapterDef, PrepQuestion } from "../types";

/** Coordinate Geometry - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-maths-coord-a-q01",
    prompt: "The point where the x-axis and y-axis meet is called the…",
    options: [
      { id: "a", text: "quadrant" },
      { id: "b", text: "origin" },
      { id: "c", text: "abscissa" },
      { id: "d", text: "ordinate" }
    ],
    answerId: "b",
    explanation: "Their intersection is the origin (0, 0).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q02",
    prompt: "In the ordered pair (3, −2), the abscissa is…",
    options: [
      { id: "a", text: "−2" },
      { id: "b", text: "3" },
      { id: "c", text: "0" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "Abscissa means the x-coordinate, which is 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q03",
    prompt: "The point (−4, 5) lies in which quadrant?",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "II" },
      { id: "c", text: "III" },
      { id: "d", text: "IV" }
    ],
    answerId: "b",
    explanation: "x negative, y positive → quadrant II.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q04",
    prompt: "A point on the x-axis has…",
    options: [
      { id: "a", text: "x = 0" },
      { id: "b", text: "y = 0" },
      { id: "c", text: "x = y" },
      { id: "d", text: "x = −y" }
    ],
    answerId: "b",
    explanation: "On the x-axis the y-coordinate is 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q05",
    prompt: "The distance of point (0, 6) from the origin is…",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "6" },
      { id: "c", text: "36" },
      { id: "d", text: "√6" }
    ],
    answerId: "b",
    explanation: "It lies on the y-axis 6 units from (0,0).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q06",
    prompt: "Which point lies in quadrant III?",
    options: [
      { id: "a", text: "(2, 3)" },
      { id: "b", text: "(−2, 3)" },
      { id: "c", text: "(−2, −3)" },
      { id: "d", text: "(2, −3)" }
    ],
    answerId: "c",
    explanation: "Both coordinates negative → quadrant III.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q07",
    prompt: "The ordinate of (−7, 0) is…",
    options: [
      { id: "a", text: "−7" },
      { id: "b", text: "0" },
      { id: "c", text: "7" },
      { id: "d", text: "undefined" }
    ],
    answerId: "b",
    explanation: "Ordinate is the y-coordinate: 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q08",
    prompt: "Points (2, 0), (−3, 0) and (5, 0) are…",
    options: [
      { id: "a", text: "on the y-axis" },
      { id: "b", text: "on the x-axis" },
      { id: "c", text: "in quadrant I" },
      { id: "d", text: "at the origin" }
    ],
    answerId: "b",
    explanation: "Each has y = 0, so all lie on the x-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q09",
    prompt: "The mirror image of (3, 4) in the x-axis is…",
    options: [
      { id: "a", text: "(−3, 4)" },
      { id: "b", text: "(3, −4)" },
      { id: "c", text: "(−3, −4)" },
      { id: "d", text: "(4, 3)" }
    ],
    answerId: "b",
    explanation: "Reflection in the x-axis flips the sign of y.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q10",
    prompt: "If a point has equal abscissa and ordinate and lies in quadrant I, an example is…",
    options: [
      { id: "a", text: "(2, 2)" },
      { id: "b", text: "(−2, −2)" },
      { id: "c", text: "(2, −2)" },
      { id: "d", text: "(−2, 2)" }
    ],
    answerId: "a",
    explanation: "Equal positive coordinates sit in quadrant I.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q11",
    prompt: "Distance between (0, 0) and (3, 4) is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "12" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "√(3² + 4²) = √(9+16) = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q12",
    prompt: "Which point is 3 units to the left of the origin on the x-axis?",
    options: [
      { id: "a", text: "(3, 0)" },
      { id: "b", text: "(0, 3)" },
      { id: "c", text: "(−3, 0)" },
      { id: "d", text: "(0, −3)" }
    ],
    answerId: "c",
    explanation: "Left on the x-axis means negative x: (−3, 0).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q13",
    prompt: "The signs of coordinates in quadrant IV are…",
    options: [
      { id: "a", text: "(+, +)" },
      { id: "b", text: "(−, +)" },
      { id: "c", text: "(−, −)" },
      { id: "d", text: "(+, −)" }
    ],
    answerId: "d",
    explanation: "Quadrant IV: x positive, y negative.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q14",
    prompt: "If P(x, y) lies on the y-axis, then…",
    options: [
      { id: "a", text: "y = 0" },
      { id: "b", text: "x = 0" },
      { id: "c", text: "x = y" },
      { id: "d", text: "x + y = 0" }
    ],
    answerId: "b",
    explanation: "On the y-axis, x = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q15",
    prompt: "The point (0, −5) is…",
    options: [
      { id: "a", text: "in quadrant III" },
      { id: "b", text: "in quadrant IV" },
      { id: "c", text: "on the negative y-axis" },
      { id: "d", text: "on the positive x-axis" }
    ],
    answerId: "c",
    explanation: "x = 0 and y < 0 means on the negative y-axis (not inside a quadrant).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q16",
    prompt: "Distance between A(1, 2) and B(4, 6) is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "25" },
      { id: "d", text: "√13" }
    ],
    answerId: "a",
    explanation: "√((4−1)² + (6−2)²) = √(9+16) = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q17",
    prompt: "Reflecting (5, −2) in the y-axis gives…",
    options: [
      { id: "a", text: "(−5, −2)" },
      { id: "b", text: "(5, 2)" },
      { id: "c", text: "(−5, 2)" },
      { id: "d", text: "(2, −5)" }
    ],
    answerId: "a",
    explanation: "y-axis reflection flips the sign of x.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q18",
    prompt: "Which ordered pair represents the origin?",
    options: [
      { id: "a", text: "(1, 1)" },
      { id: "b", text: "(0, 0)" },
      { id: "c", text: "(0, 1)" },
      { id: "d", text: "(1, 0)" }
    ],
    answerId: "b",
    explanation: "The origin is (0, 0).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q19",
    prompt: "A point with abscissa −3 and ordinate 7 is written…",
    options: [
      { id: "a", text: "(7, −3)" },
      { id: "b", text: "(−3, 7)" },
      { id: "c", text: "(−3, −7)" },
      { id: "d", text: "(3, 7)" }
    ],
    answerId: "b",
    explanation: "Ordered pairs are (abscissa, ordinate) = (−3, 7).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q20",
    prompt: "How many quadrants does the Cartesian plane have?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "The two axes divide the plane into four quadrants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q21",
    prompt: "Which point on the y-axis is equidistant from (2, 0) and (−2, 0)?",
    options: [
      { id: "a", text: "(0, 0)" },
      { id: "b", text: "(2, 2)" },
      { id: "c", text: "(1, 0)" },
      { id: "d", text: "(2, 0)" }
    ],
    answerId: "a",
    explanation: "Any point (0, y) is equidistant from (2,0) and (−2,0); among the options, (0,0) works.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q22",
    prompt: "If both coordinates of a point are zero, the point…",
    options: [
      { id: "a", text: "lies in quadrant I" },
      { id: "b", text: "is the origin" },
      { id: "c", text: "lies on x-axis only, not y-axis" },
      { id: "d", text: "does not exist" }
    ],
    answerId: "b",
    explanation: "(0,0) is the origin, belonging to both axes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q23",
    prompt: "Which point is closer to the origin: A(3, 4) or B(0, 6)?",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "B" },
      { id: "c", text: "equally far" },
      { id: "d", text: "cannot tell" }
    ],
    answerId: "a",
    explanation: "OA = 5 and OB = 6, so A is closer.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-a-q24",
    prompt: "The vertical line through (−2, 5) has equation…",
    options: [
      { id: "a", text: "y = −2" },
      { id: "b", text: "x = −2" },
      { id: "c", text: "y = 5" },
      { id: "d", text: "x = 5" }
    ],
    answerId: "b",
    explanation: "A vertical line has constant x-coordinate: x = −2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-maths-coord-b-q01",
    prompt: "The Cartesian plane is also called the…",
    options: [
      { id: "a", text: "number line only" },
      { id: "b", text: "coordinate plane" },
      { id: "c", text: "quadrant line" },
      { id: "d", text: "ray plane" }
    ],
    answerId: "b",
    explanation: "It is the coordinate (or Cartesian) plane.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q02",
    prompt: "Point (0, 8) lies…",
    options: [
      { id: "a", text: "in quadrant I" },
      { id: "b", text: "on the positive y-axis" },
      { id: "c", text: "on the positive x-axis" },
      { id: "d", text: "in quadrant II" }
    ],
    answerId: "b",
    explanation: "x = 0, y > 0 → positive y-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q03",
    prompt: "In quadrant II, x is ____ and y is ____.",
    options: [
      { id: "a", text: "positive, positive" },
      { id: "b", text: "negative, positive" },
      { id: "c", text: "negative, negative" },
      { id: "d", text: "positive, negative" }
    ],
    answerId: "b",
    explanation: "Quadrant II: x < 0, y > 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q04",
    prompt: "The distance of (−5, 0) from the origin is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "−5" },
      { id: "c", text: "0" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "Distance is absolute: 5 units along the x-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q05",
    prompt: "Mirror image of (−1, 6) across the origin is…",
    options: [
      { id: "a", text: "(1, −6)" },
      { id: "b", text: "(−1, −6)" },
      { id: "c", text: "(1, 6)" },
      { id: "d", text: "(6, −1)" }
    ],
    answerId: "a",
    explanation: "Point reflection through origin: (x, y) → (−x, −y).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q06",
    prompt: "Which point does NOT lie on the line x = 4?",
    options: [
      { id: "a", text: "(4, 0)" },
      { id: "b", text: "(4, −2)" },
      { id: "c", text: "(4, 7)" },
      { id: "d", text: "(0, 4)" }
    ],
    answerId: "d",
    explanation: "(0, 4) has x = 0, not 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q07",
    prompt: "Abscissa of a point is positive and ordinate negative. It lies in…",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "II" },
      { id: "c", text: "III" },
      { id: "d", text: "IV" }
    ],
    answerId: "d",
    explanation: "(+, −) is quadrant IV.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q08",
    prompt: "Distance between (2, −1) and (2, 4) is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "√5" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Same x-coordinate: |4 − (−1)| = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q09",
    prompt: "The point (7, 7) lies…",
    options: [
      { id: "a", text: "on the x-axis" },
      { id: "b", text: "on the y-axis" },
      { id: "c", text: "on the line y = x in quadrant I" },
      { id: "d", text: "at the origin" }
    ],
    answerId: "c",
    explanation: "Equal positive coordinates → on y = x in quadrant I.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q10",
    prompt: "If P(a, b) is reflected in both axes (x then y), the final image is…",
    options: [
      { id: "a", text: "(a, b)" },
      { id: "b", text: "(−a, −b)" },
      { id: "c", text: "(−a, b)" },
      { id: "d", text: "(a, −b)" }
    ],
    answerId: "b",
    explanation: "x-axis: (a,−b); then y-axis: (−a,−b). Same as central inversion.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q11",
    prompt: "Coordinates of a point 4 units above the x-axis and 3 units left of the y-axis are…",
    options: [
      { id: "a", text: "(4, −3)" },
      { id: "b", text: "(−3, 4)" },
      { id: "c", text: "(3, 4)" },
      { id: "d", text: "(−4, 3)" }
    ],
    answerId: "b",
    explanation: "Left of y-axis → x = −3; above x-axis → y = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q12",
    prompt: "Which is true for every point on the x-axis?",
    options: [
      { id: "a", text: "abscissa is zero" },
      { id: "b", text: "ordinate is zero" },
      { id: "c", text: "both coordinates equal" },
      { id: "d", text: "both coordinates positive" }
    ],
    answerId: "b",
    explanation: "y = 0 for every point on the x-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q13",
    prompt: "The area of the triangle formed by (0,0), (4,0) and (0,3) is…",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "24" }
    ],
    answerId: "b",
    explanation: "Right triangle with legs 4 and 3: area = (1/2)·4·3 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q14",
    prompt: "Point (−3, −3) lies in…",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "II" },
      { id: "c", text: "III" },
      { id: "d", text: "IV" }
    ],
    answerId: "c",
    explanation: "Both negative → quadrant III.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q15",
    prompt: "The horizontal line through (5, −2) has equation…",
    options: [
      { id: "a", text: "x = 5" },
      { id: "b", text: "y = −2" },
      { id: "c", text: "x = −2" },
      { id: "d", text: "y = 5" }
    ],
    answerId: "b",
    explanation: "Horizontal lines have constant y.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q16",
    prompt: "Distance between (−1, −1) and (2, 3) is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "√18" },
      { id: "c", text: "7" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "√[(2−(−1))² + (3−(−1))²] = √(9+16) = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q17",
    prompt: "Which point is the reflection of (0, 4) in the x-axis?",
    options: [
      { id: "a", text: "(0, −4)" },
      { id: "b", text: "(4, 0)" },
      { id: "c", text: "(−4, 0)" },
      { id: "d", text: "(0, 4)" }
    ],
    answerId: "a",
    explanation: "Flip y: (0, −4).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q18",
    prompt: "If a point lies in quadrant I, then…",
    options: [
      { id: "a", text: "x > 0 and y > 0" },
      { id: "b", text: "x < 0 and y > 0" },
      { id: "c", text: "x > 0 and y < 0" },
      { id: "d", text: "x < 0 and y < 0" }
    ],
    answerId: "a",
    explanation: "Quadrant I is the (+, +) region.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q19",
    prompt: "The points (1, 2) and (1, −5)…",
    options: [
      { id: "a", text: "have the same ordinate" },
      { id: "b", text: "lie on a vertical line" },
      { id: "c", text: "lie on the x-axis" },
      { id: "d", text: "are the same point" }
    ],
    answerId: "b",
    explanation: "Same x-coordinate ⇒ vertical line x = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q20",
    prompt: "Coordinates (−6, 0) describe a point…",
    options: [
      { id: "a", text: "6 units left of origin on the x-axis" },
      { id: "b", text: "6 units up on the y-axis" },
      { id: "c", text: "in quadrant II" },
      { id: "d", text: "in quadrant III" }
    ],
    answerId: "a",
    explanation: "y = 0 and x = −6 → on the negative x-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q21",
    prompt: "√[(5−1)² + (2−2)²] is the distance between…",
    options: [
      { id: "a", text: "(5, 2) and (1, 2)" },
      { id: "b", text: "(5, 1) and (2, 2)" },
      { id: "c", text: "(1, 5) and (2, 2)" },
      { id: "d", text: "(5, 2) and (2, 1)" }
    ],
    answerId: "a",
    explanation: "The expression matches Δx=4, Δy=0 between (5,2) and (1,2).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q22",
    prompt: "A point with zero abscissa and positive ordinate lies…",
    options: [
      { id: "a", text: "on the positive x-axis" },
      { id: "b", text: "on the positive y-axis" },
      { id: "c", text: "in quadrant I" },
      { id: "d", text: "in quadrant II" }
    ],
    answerId: "b",
    explanation: "x = 0, y > 0 → positive y-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q23",
    prompt: "Which pair of points are symmetric about the y-axis?",
    options: [
      { id: "a", text: "(2, 3) and (−2, 3)" },
      { id: "b", text: "(2, 3) and (2, −3)" },
      { id: "c", text: "(2, 3) and (−2, −3)" },
      { id: "d", text: "(2, 3) and (3, 2)" }
    ],
    answerId: "a",
    explanation: "y-axis symmetry flips x only: (2,3) ↔ (−2,3).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-coord-b-q24",
    prompt: "The origin is…",
    options: [
      { id: "a", text: "in quadrant I only" },
      { id: "b", text: "the intersection of the axes" },
      { id: "c", text: "not a point of the plane" },
      { id: "d", text: "only on the x-axis, not the y-axis" }
    ],
    answerId: "b",
    explanation: "Origin is where both axes meet and belongs to both.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "📍",
    title: "Coordinate geometry",
    body: ["Every point gets an address: (x, y).", "Axes, quadrants and distance unlock the plane.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Plot points with coordinates and measure distances.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Origin", reveal: "(0, 0) — where axes meet", emoji: "⭕" },
      { label: "Quadrants", reveal: "I (+,+), II (−,+), III (−,−), IV (+,−)", emoji: "🧭" },
      { label: "Axes", reveal: "x-axis: y=0 · y-axis: x=0", emoji: "➕" },
      { label: "Distance", reveal: "√[(x₂−x₁)² + (y₂−y₁)²]", emoji: "📏" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Plot (−3, 2)",
    visual: "number-line",
    speak: "Move 3 left, then 2 up — that is quadrant II.",
    steps: ["Start at origin", "x = −3 → left 3", "y = 2 → up 2", "Land in quadrant II"],
    punchline: "Signs tell the quadrant before you plot.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Where is (−2, −5)?",
    options: [
        { id: "a", text: "I" },
        { id: "b", text: "II" },
        { id: "c", text: "III" },
        { id: "d", text: "IV" }
    ],
    answerId: "c",
    why: "Both negative → quadrant III.",
    visual: "number-line",
    speak: "Where is (−2, −5)?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Plane pilot!",
    bullets: ["(x, y) order matters", "Axes are not quadrants", "Distance formula from Pythagoras", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Plane pilot! You are ready for the practice sets.",
  },
];

export const g9MathsCoordinate: ChapterDef = {
  id: "coordinate-geometry",
  title: "Coordinate Geometry",
  emoji: "📍",
  blurb: "Axes, quadrants & distance intro",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "linear-lite",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "linear-lite",
      questions: SET_B,
    },
  ],
  paperTopics: ["linear-lite", "fractions"],
};

export const g9MathsCoordinateQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
