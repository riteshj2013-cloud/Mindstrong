import type { ChapterDef, PrepQuestion } from "../types";

/** Coordinate Geometry - original olympiad-style content (not affiliated with SOF). */

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
    explanation: "Their intersection is the origin (0, 0). quadrant is tempting if you stop one step early or reverse a step, but the correct result is origin.",
    hints: ["The x-axis and y-axis cross at the point (0, 0). What is that point called?"]
  },
  {
    id: "g9-maths-coord-a-q02",
    prompt: "In the ordered pair (3, −2), the abscissa is…",
    options: [
      { id: "a", text: "−2" },
      { id: "b", text: "0" },
      { id: "c", text: "3" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "Abscissa means the x-coordinate, which is 3. 5 is tempting if you stop one step early or reverse a step, but the correct result is 3.",
    hints: ["Abscissa = x; ordinate = y."]
  },
  {
    id: "g9-maths-coord-a-q03",
    prompt: "The point (−4, 5) lies in which quadrant?",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "III" },
      { id: "c", text: "IV" },
      { id: "d", text: "II" }
    ],
    answerId: "d",
    explanation: "x negative, y positive → quadrant II. I is tempting if you stop one step early or reverse a step, but the correct result is II.",
    hints: ["Sign of x and y decides the quadrant."]
  },
  {
    id: "g9-maths-coord-a-q04",
    prompt: "A point on the x-axis has…",
    options: [
      { id: "a", text: "y = 0" },
      { id: "b", text: "x = 0" },
      { id: "c", text: "x = y" },
      { id: "d", text: "x = −y" }
    ],
    answerId: "a",
    explanation: "On the x-axis the y-coordinate is 0. x = 0 is tempting if you stop one step early or reverse a step, but the correct result is y = 0.",
    hints: ["Which coordinate vanishes on the x-axis?"]
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
    explanation: "It lies on the y-axis 6 units from (0,0). 0 is tempting if you stop one step early or reverse a step, but the correct result is 6.",
    hints: ["Use the distance formula or axis distance."]
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
    explanation: "Both coordinates negative → quadrant III. (2, 3) is tempting if you stop one step early or reverse a step, but the correct result is (−2, −3).",
    hints: ["III is (−, −)."]
  },
  {
    id: "g9-maths-coord-a-q07",
    prompt: "The ordinate of (−7, 0) is…",
    options: [
      { id: "a", text: "−7" },
      { id: "b", text: "7" },
      { id: "c", text: "undefined" },
      { id: "d", text: "0" }
    ],
    answerId: "d",
    explanation: "Ordinate is the y-coordinate: 0. −7 is tempting if you stop one step early or reverse a step, but the correct result is 0.",
    hints: ["The ordinate is the y-coordinate, the second number in (x, y)."]
  },
  {
    id: "g9-maths-coord-a-q08",
    prompt: "Points (2, 0), (−3, 0) and (5, 0) are…",
    options: [
      { id: "a", text: "on the x-axis" },
      { id: "b", text: "on the y-axis" },
      { id: "c", text: "in quadrant I" },
      { id: "d", text: "at the origin" }
    ],
    answerId: "a",
    explanation: "Each has y = 0, so all lie on the x-axis. on the y-axis is tempting if you stop one step early or reverse a step, but the correct result is on the x-axis.",
    hints: ["Each point has y-coordinate 0, so none moves up or down from the origin. Along which line do they lie?"]
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
    explanation: "Reflection in the x-axis flips the sign of y. (−3, 4) is tempting if you stop one step early or reverse a step, but the correct result is (3, −4).",
    hints: ["x-axis reflection: (x, y) → (x, −y)."]
  },
  {
    id: "g9-maths-coord-a-q10",
    prompt: "If a point has equal abscissa and ordinate and lies in quadrant I, an example is…",
    options: [
      { id: "a", text: "(−2, −2)" },
      { id: "b", text: "(2, −2)" },
      { id: "c", text: "(2, 2)" },
      { id: "d", text: "(−2, 2)" }
    ],
    answerId: "c",
    explanation: "Equal positive coordinates sit in quadrant I. (−2, −2) is tempting if you stop one step early or reverse a step, but the correct result is (2, 2).",
    hints: ["In quadrant I both coordinates are positive, and here the abscissa must equal the ordinate."]
  },
  {
    id: "g9-maths-coord-a-q11",
    prompt: "Distance between (0, 0) and (3, 4) is…",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "12" },
      { id: "c", text: "25" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "√(3² + 4²) = √(9+16) = 5. 7 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["Use distance = √(x² + y²) with x = 3 and y = 4."]
  },
  {
    id: "g9-maths-coord-a-q12",
    prompt: "Which point is 3 units to the left of the origin on the x-axis?",
    options: [
      { id: "a", text: "(−3, 0)" },
      { id: "b", text: "(3, 0)" },
      { id: "c", text: "(0, 3)" },
      { id: "d", text: "(0, −3)" }
    ],
    answerId: "a",
    explanation: "Left on the x-axis means negative x: (−3, 0). (3, 0) is tempting if you stop one step early or reverse a step, but the correct result is (−3, 0).",
    hints: ["Left → negative x; on axis → y = 0."]
  },
  {
    id: "g9-maths-coord-a-q13",
    prompt: "The signs of coordinates in quadrant IV are…",
    options: [
      { id: "a", text: "(+, +)" },
      { id: "b", text: "(+, −)" },
      { id: "c", text: "(−, +)" },
      { id: "d", text: "(−, −)" }
    ],
    answerId: "b",
    explanation: "Quadrant IV: x positive, y negative. (+, +) is tempting if you stop one step early or reverse a step, but the correct result is (+, −).",
    hints: ["Quadrant IV is the bottom-right part of the plane. Is x right or left there, and is y up or down?"]
  },
  {
    id: "g9-maths-coord-a-q14",
    prompt: "If P(x, y) lies on the y-axis, then…",
    options: [
      { id: "a", text: "y = 0" },
      { id: "b", text: "x = y" },
      { id: "c", text: "x = 0" },
      { id: "d", text: "x + y = 0" }
    ],
    answerId: "c",
    explanation: "On the y-axis, x = 0. y = 0 is tempting if you stop one step early or reverse a step, but the correct result is x = 0.",
    hints: ["Every point on the y-axis sits straight above or below the origin. Which coordinate is the same for all of them?"]
  },
  {
    id: "g9-maths-coord-a-q15",
    prompt: "The point (0, −5) is…",
    options: [
      { id: "a", text: "in quadrant III" },
      { id: "b", text: "in quadrant IV" },
      { id: "c", text: "on the positive x-axis" },
      { id: "d", text: "on the negative y-axis" }
    ],
    answerId: "d",
    explanation: "x = 0 and y < 0 means on the negative y-axis (not inside a quadrant). in quadrant III is tempting if you stop one step early or reverse a step, but the correct result is on the negative y-axis.",
    hints: ["Axis points are not in any quadrant."]
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
    explanation: "√((4−1)² + (6−2)²) = √(9+16) = 5. 7 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["Use the distance formula: root of delta-x squared plus delta-y squared."]
  },
  {
    id: "g9-maths-coord-a-q17",
    prompt: "Reflecting (5, −2) in the y-axis gives…",
    options: [
      { id: "a", text: "(5, 2)" },
      { id: "b", text: "(−5, −2)" },
      { id: "c", text: "(−5, 2)" },
      { id: "d", text: "(2, −5)" }
    ],
    answerId: "b",
    explanation: "y-axis reflection flips the sign of x. (5, 2) is tempting if you stop one step early or reverse a step, but the correct result is (−5, −2).",
    hints: ["(x, y) → (−x, y) across the y-axis."]
  },
  {
    id: "g9-maths-coord-a-q18",
    prompt: "Which ordered pair represents the origin?",
    options: [
      { id: "a", text: "(1, 1)" },
      { id: "b", text: "(0, 1)" },
      { id: "c", text: "(0, 0)" },
      { id: "d", text: "(1, 0)" }
    ],
    answerId: "c",
    explanation: "The origin is (0, 0). (1, 1) is tempting if you stop one step early or reverse a step, but the correct result is (0, 0).",
    hints: ["The origin is where the x-axis and y-axis cross, so it has moved neither right nor up."]
  },
  {
    id: "g9-maths-coord-a-q19",
    prompt: "A point with abscissa −3 and ordinate 7 is written…",
    options: [
      { id: "a", text: "(7, −3)" },
      { id: "b", text: "(−3, −7)" },
      { id: "c", text: "(3, 7)" },
      { id: "d", text: "(−3, 7)" }
    ],
    answerId: "d",
    explanation: "Ordered pairs are (abscissa, ordinate) = (−3, 7). (7, −3) is tempting if you stop one step early or reverse a step, but the correct result is (−3, 7).",
    hints: ["The abscissa is x and the ordinate is y. Write the pair in the order (x, y)."]
  },
  {
    id: "g9-maths-coord-a-q20",
    prompt: "How many quadrants does the Cartesian plane have?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "The two axes divide the plane into four quadrants. 3 is tempting if you stop one step early or reverse a step, but the correct result is 4.",
    hints: ["The x-axis and y-axis cross and cut the Cartesian plane into regions. Count the quadrants they make."]
  },
  {
    id: "g9-maths-coord-a-q21",
    prompt: "Which point on the y-axis is equidistant from (2, 0) and (−2, 0)?",
    options: [
      { id: "a", text: "(2, 2)" },
      { id: "b", text: "(0, 0)" },
      { id: "c", text: "(1, 0)" },
      { id: "d", text: "(2, 0)" }
    ],
    answerId: "b",
    explanation: "Any point (0, y) is equidistant from (2,0) and (−2,0); among the options, (0,0) works. (2, 2) is tempting if you stop one step early or reverse a step, but the correct result is (0, 0).",
    hints: ["The perpendicular bisector of (−2,0) and (2,0) is the y-axis."]
  },
  {
    id: "g9-maths-coord-a-q22",
    prompt: "If both coordinates of a point are zero, the point…",
    options: [
      { id: "a", text: "lies in quadrant I" },
      { id: "b", text: "lies on x-axis only, not y-axis" },
      { id: "c", text: "is the origin" },
      { id: "d", text: "does not exist" }
    ],
    answerId: "c",
    explanation: "(0,0) is the origin, belonging to both axes. lies in quadrant I is tempting if you stop one step early or reverse a step, but the correct result is is the origin.",
    hints: ["Write the point with both coordinates zero as an ordered pair. How far is it from each axis?", "Is that point on the x-axis, on the y-axis, on both or on neither? Which description fits?"]
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
    explanation: "OA = 5 and OB = 6, so A is closer. B is tempting if you stop one step early or reverse a step, but the correct result is A.",
    hints: ["Find each point's distance from the origin with √(x² + y²), then compare."]
  },
  {
    id: "g9-maths-coord-a-q24",
    prompt: "The vertical line through (−2, 5) has equation…",
    options: [
      { id: "a", text: "y = −2" },
      { id: "b", text: "y = 5" },
      { id: "c", text: "x = 5" },
      { id: "d", text: "x = −2" }
    ],
    answerId: "d",
    explanation: "A vertical line has constant x-coordinate: x = −2. y = −2 is tempting if you use the y-value from the point (−2, 5) as if the line were horizontal; a vertical line keeps x fixed, so the equation is x = −2.",
    hints: ["Vertical → fixed x."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-maths-coord-b-q01",
    prompt: "The Cartesian plane is also called the…",
    options: [
      { id: "a", text: "coordinate plane" },
      { id: "b", text: "number line only" },
      { id: "c", text: "quadrant line" },
      { id: "d", text: "ray plane" }
    ],
    answerId: "a",
    explanation: "It is the coordinate (or Cartesian) plane. number line only is tempting if you swap x and y or misread a quadrant; the correct result is coordinate plane.",
    hints: ["Another name for the xy-plane."]
  },
  {
    id: "g9-maths-coord-b-q02",
    prompt: "Point (0, 8) lies…",
    options: [
      { id: "a", text: "in quadrant I" },
      { id: "b", text: "on the positive x-axis" },
      { id: "c", text: "on the positive y-axis" },
      { id: "d", text: "in quadrant II" }
    ],
    answerId: "c",
    explanation: "x = 0, y > 0 → positive y-axis. in quadrant I is tempting if you stop one step early or reverse a step, but the correct result is on the positive y-axis.",
    hints: ["Axis points are not inside quadrants."]
  },
  {
    id: "g9-maths-coord-b-q03",
    prompt: "In quadrant II, x is ____ and y is ____.",
    options: [
      { id: "a", text: "positive, positive" },
      { id: "b", text: "negative, negative" },
      { id: "c", text: "positive, negative" },
      { id: "d", text: "negative, positive" }
    ],
    answerId: "d",
    explanation: "Quadrant II: x < 0, y > 0. positive, positive is tempting if you stop one step early or reverse a step, but the correct result is negative, positive.",
    hints: ["Quadrant II is the upper-left part of the plane. Is x left or right there, and is y up or down?"]
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
    explanation: "Distance is absolute: 5 units along the x-axis. 0 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["Distance is never negative."]
  },
  {
    id: "g9-maths-coord-b-q05",
    prompt: "Mirror image of (−1, 6) across the origin is…",
    options: [
      { id: "a", text: "(−1, −6)" },
      { id: "b", text: "(1, −6)" },
      { id: "c", text: "(1, 6)" },
      { id: "d", text: "(6, −1)" }
    ],
    answerId: "b",
    explanation: "Point reflection through origin: (x, y) → (−x, −y). (−1, −6) is tempting if you stop one step early or reverse a step, but the correct result is (1, −6).",
    hints: ["Reflecting across the origin changes the sign of both coordinates of (−1, 6)."]
  },
  {
    id: "g9-maths-coord-b-q06",
    prompt: "Which point does NOT lie on the line x = 4?",
    options: [
      { id: "a", text: "(4, 0)" },
      { id: "b", text: "(4, −2)" },
      { id: "c", text: "(0, 4)" },
      { id: "d", text: "(4, 7)" }
    ],
    answerId: "c",
    explanation: "(0, 4) has x = 0, not 4. (4, 0) is tempting if you stop one step early or reverse a step, but the correct result is (0, 4).",
    hints: ["Check the x-coordinate of each option."]
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
    explanation: "(+, −) is quadrant IV. I is tempting if you stop one step early or reverse a step, but the correct result is IV.",
    hints: ["A positive abscissa is right of the y-axis; a negative ordinate is below the x-axis. Which quadrant is that?"]
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
    explanation: "Same x-coordinate: |4 − (−1)| = 5. 3 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["Both points have x = 2, so the segment is vertical. Find the change in y from −1 to 4."]
  },
  {
    id: "g9-maths-coord-b-q09",
    prompt: "The point (7, 7) lies…",
    options: [
      { id: "a", text: "on the x-axis" },
      { id: "b", text: "on the line y = x in quadrant I" },
      { id: "c", text: "on the y-axis" },
      { id: "d", text: "at the origin" }
    ],
    answerId: "b",
    explanation: "Equal positive coordinates → on y = x in quadrant I. on the x-axis is tempting if you stop one step early or reverse a step, but the correct result is on the line y = x in quadrant I.",
    hints: ["Compare the two coordinates of (7, 7), and note their signs."]
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
    explanation: "x-axis: (a,−b); then y-axis: (−a,−b). Same as central inversion. (a, b) is tempting if you stop one step early or reverse a step, but the correct result is (−a, −b).",
    hints: ["Reflecting in the x-axis changes the sign of b; reflecting in the y-axis changes the sign of a."]
  },
  {
    id: "g9-maths-coord-b-q11",
    prompt: "Coordinates of a point 4 units above the x-axis and 3 units left of the y-axis are…",
    options: [
      { id: "a", text: "(4, −3)" },
      { id: "b", text: "(3, 4)" },
      { id: "c", text: "(−3, 4)" },
      { id: "d", text: "(−4, 3)" }
    ],
    answerId: "c",
    explanation: "Left of y-axis → x = −3; above x-axis → y = 4. (4, −3) is tempting if you stop one step early or reverse a step, but the correct result is (−3, 4).",
    hints: ["Left of the y-axis makes x negative; above the x-axis makes y positive. Then write (x, y)."]
  },
  {
    id: "g9-maths-coord-b-q12",
    prompt: "Which is true for every point on the x-axis?",
    options: [
      { id: "a", text: "abscissa is zero" },
      { id: "b", text: "both coordinates equal" },
      { id: "c", text: "both coordinates positive" },
      { id: "d", text: "ordinate is zero" }
    ],
    answerId: "d",
    explanation: "y = 0 for every point on the x-axis. abscissa is zero is tempting if you stop one step early or reverse a step, but the correct result is ordinate is zero.",
    hints: ["Points on the x-axis have no height above or below it. Which coordinate measures that height?"]
  },
  {
    id: "g9-maths-coord-b-q13",
    prompt: "The area of the triangle formed by (0,0), (4,0) and (0,3) is…",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "12" },
      { id: "c", text: "7" },
      { id: "d", text: "24" }
    ],
    answerId: "a",
    explanation: "Right triangle with legs 4 and 3: area = (1/2)·4·3 = 6. 7 is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 6. 7 is tempting if you swap x and y or misread a quadrant; the correct result is 6.",
    hints: ["The base on the x-axis is 4 and the height on the y-axis is 3. Area = ½ × base × height."]
  },
  {
    id: "g9-maths-coord-b-q14",
    prompt: "Point (−3, −3) lies in…",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "III" },
      { id: "c", text: "II" },
      { id: "d", text: "IV" }
    ],
    answerId: "b",
    explanation: "Both negative → quadrant III. I is tempting if you stop one step early or reverse a step, but the correct result is III.",
    hints: ["Both coordinates of (−3, −3) are negative: left of the y-axis and below the x-axis."]
  },
  {
    id: "g9-maths-coord-b-q15",
    prompt: "The horizontal line through (5, −2) has equation…",
    options: [
      { id: "a", text: "x = 5" },
      { id: "b", text: "x = −2" },
      { id: "c", text: "y = −2" },
      { id: "d", text: "y = 5" }
    ],
    answerId: "c",
    explanation: "Horizontal lines have constant y. x = 5 is tempting if you stop one step early or reverse a step, but the correct result is y = −2.",
    hints: ["Horizontal → fixed y."]
  },
  {
    id: "g9-maths-coord-b-q16",
    prompt: "Distance between (−1, −1) and (2, 3) is…",
    options: [
      { id: "a", text: "√18" },
      { id: "b", text: "7" },
      { id: "c", text: "25" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "√[(2−(−1))² + (3−(−1))²] = √(9+16) = 5. 7 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["Apply the distance formula."]
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
    explanation: "Flip y: (0, −4). (4, 0) is tempting if you stop one step early or reverse a step, but the correct result is (0, −4).",
    hints: ["x-axis reflection changes y’s sign."]
  },
  {
    id: "g9-maths-coord-b-q18",
    prompt: "If a point lies in quadrant I, then…",
    options: [
      { id: "a", text: "x < 0 and y > 0" },
      { id: "b", text: "x > 0 and y > 0" },
      { id: "c", text: "x > 0 and y < 0" },
      { id: "d", text: "x < 0 and y < 0" }
    ],
    answerId: "b",
    explanation: "Quadrant I is the (+, +) region. x < 0 and y > 0 is tempting if you stop one step early or reverse a step, but the correct result is x > 0 and y > 0.",
    hints: ["Quadrant I is the upper-right part of the plane. Is x right or left of the y-axis, and is y above or below?"]
  },
  {
    id: "g9-maths-coord-b-q19",
    prompt: "The points (1, 2) and (1, −5)…",
    options: [
      { id: "a", text: "have the same ordinate" },
      { id: "b", text: "lie on the x-axis" },
      { id: "c", text: "lie on a vertical line" },
      { id: "d", text: "are the same point" }
    ],
    answerId: "c",
    explanation: "Same x-coordinate ⇒ vertical line x = 1. have the same ordinate is tempting if you stop one step early or reverse a step, but the correct result is lie on a vertical line.",
    hints: ["Both points have the same x-coordinate, 1. What kind of line joins points with equal x?"]
  },
  {
    id: "g9-maths-coord-b-q20",
    prompt: "Coordinates (−6, 0) describe a point…",
    options: [
      { id: "a", text: "6 units up on the y-axis" },
      { id: "b", text: "in quadrant II" },
      { id: "c", text: "in quadrant III" },
      { id: "d", text: "6 units left of origin on the x-axis" }
    ],
    answerId: "d",
    explanation: "y = 0 and x = −6 → on the negative x-axis. 6 units up on the y-axis is tempting if you stop one step early or reverse a step, but the correct result is 6 units left of origin on the x-axis.",
    hints: ["y = 0 puts (−6, 0) on an axis. The x-value −6 says which way and how far from the origin."]
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
    explanation: "The expression matches Δx=4, Δy=0 between (5,2) and (1,2). (5, 1) and (2, 2) is tempting if you stop one step early or reverse a step, but the correct result is (5, 2) and (1, 2).",
    hints: ["In the distance formula, the first bracket subtracts the two x-coordinates and the second subtracts the two y-coordinates. Check each pair."]
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
    explanation: "x = 0, y > 0 → positive y-axis. on the positive x-axis is tempting if you stop one step early or reverse a step, but the correct result is on the positive y-axis.",
    hints: ["Zero abscissa means on the y-axis."]
  },
  {
    id: "g9-maths-coord-b-q23",
    prompt: "Which pair of points are symmetric about the y-axis?",
    options: [
      { id: "a", text: "(2, 3) and (2, −3)" },
      { id: "b", text: "(2, 3) and (−2, −3)" },
      { id: "c", text: "(2, 3) and (−2, 3)" },
      { id: "d", text: "(2, 3) and (3, 2)" }
    ],
    answerId: "c",
    explanation: "y-axis symmetry flips x only: (2,3) ↔ (−2,3). (2, 3) and (2, −3) is tempting if you stop one step early or reverse a step, but the correct result is (2, 3) and (−2, 3).",
    hints: ["Same y, opposite x."]
  },
  {
    id: "g9-maths-coord-b-q24",
    prompt: "The origin is…",
    options: [
      { id: "a", text: "in quadrant I only" },
      { id: "b", text: "not a point of the plane" },
      { id: "c", text: "only on the x-axis, not the y-axis" },
      { id: "d", text: "the intersection of the axes" }
    ],
    answerId: "d",
    explanation: "Origin is where both axes meet and belongs to both. in quadrant I only is tempting if you stop one step early or reverse a step, but the correct result is the intersection of the axes.",
    hints: ["Definition of the origin."]
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
