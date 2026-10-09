import type { ChapterDef, PrepQuestion } from "../types";

/** Basic Geometry - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-maths-geo-a-q01",
    prompt: "A ray has —",
    options: [
      { id: "a", text: "two endpoints" },
      { id: "b", text: "one endpoint" },
      { id: "c", text: "no endpoints" },
      { id: "d", text: "three endpoints" }
    ],
    answerId: "b",
    explanation: "A ray starts at one endpoint and goes on forever in one direction.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q02",
    prompt: "A line segment has —",
    options: [
      { id: "a", text: "one endpoint" },
      { id: "b", text: "two endpoints" },
      { id: "c", text: "no endpoints" },
      { id: "d", text: "infinite endpoints" }
    ],
    answerId: "b",
    explanation: "A segment is the part of a line between two endpoints.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q03",
    prompt: "An angle measuring 90° is called —",
    options: [
      { id: "a", text: "acute" },
      { id: "b", text: "obtuse" },
      { id: "c", text: "right" },
      { id: "d", text: "reflex" }
    ],
    answerId: "c",
    explanation: "A right angle measures exactly 90°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q04",
    prompt: "An angle of 45° is —",
    options: [
      { id: "a", text: "acute" },
      { id: "b", text: "right" },
      { id: "c", text: "obtuse" },
      { id: "d", text: "straight" }
    ],
    answerId: "a",
    explanation: "Acute angles are less than 90°. 45° is acute.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q05",
    prompt: "An angle of 120° is —",
    options: [
      { id: "a", text: "acute" },
      { id: "b", text: "right" },
      { id: "c", text: "obtuse" },
      { id: "d", text: "straight" }
    ],
    answerId: "c",
    explanation: "Obtuse angles are between 90° and 180°. 120° is obtuse.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q06",
    prompt: "A straight angle measures —",
    options: [
      { id: "a", text: "0°" },
      { id: "b", text: "90°" },
      { id: "c", text: "180°" },
      { id: "d", text: "360°" }
    ],
    answerId: "c",
    explanation: "A straight angle is a half-turn: 180°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q07",
    prompt: "How many sides does a triangle have?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "A triangle is a closed shape with 3 sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q08",
    prompt: "The sum of angles in any triangle is —",
    options: [
      { id: "a", text: "90°" },
      { id: "b", text: "180°" },
      { id: "c", text: "270°" },
      { id: "d", text: "360°" }
    ],
    answerId: "b",
    explanation: "Interior angles of a triangle always sum to 180°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q09",
    prompt: "A quadrilateral has how many sides?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "Quad means four — four sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q10",
    prompt: "Which shape has all sides equal and all angles 90°?",
    options: [
      { id: "a", text: "Rectangle that is not a square" },
      { id: "b", text: "Rhombus that is not a square" },
      { id: "c", text: "Square" },
      { id: "d", text: "Trapezium" }
    ],
    answerId: "c",
    explanation: "A square has equal sides and four right angles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q11",
    prompt: "Parallel lines —",
    options: [
      { id: "a", text: "meet at one point" },
      { id: "b", text: "never meet" },
      { id: "c", text: "meet at two points" },
      { id: "d", text: "are always curved" }
    ],
    answerId: "b",
    explanation: "Parallel lines stay the same distance apart and never meet.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q12",
    prompt: "Perpendicular lines meet at —",
    options: [
      { id: "a", text: "45°" },
      { id: "b", text: "60°" },
      { id: "c", text: "90°" },
      { id: "d", text: "180°" }
    ],
    answerId: "c",
    explanation: "Perpendicular means they form a right angle (90°).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q13",
    prompt: "A circle’s distance from centre to any point on it is the —",
    options: [
      { id: "a", text: "diameter" },
      { id: "b", text: "radius" },
      { id: "c", text: "chord" },
      { id: "d", text: "arc" }
    ],
    answerId: "b",
    explanation: "Radius is centre-to-rim distance.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q14",
    prompt: "If the radius of a circle is 7 cm, the diameter is —",
    options: [
      { id: "a", text: "3.5 cm" },
      { id: "b", text: "7 cm" },
      { id: "c", text: "14 cm" },
      { id: "d", text: "21 cm" }
    ],
    answerId: "c",
    explanation: "Diameter = 2 × radius = 14 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q15",
    prompt: "Which instrument measures angles?",
    options: [
      { id: "a", text: "Ruler" },
      { id: "b", text: "Compass" },
      { id: "c", text: "Protractor" },
      { id: "d", text: "Divider" }
    ],
    answerId: "c",
    explanation: "A protractor measures angles in degrees.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q16",
    prompt: "A closed figure made of straight line segments is a —",
    options: [
      { id: "a", text: "ray" },
      { id: "b", text: "polygon" },
      { id: "c", text: "curve" },
      { id: "d", text: "line" }
    ],
    answerId: "b",
    explanation: "Polygons are closed shapes with straight sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q17",
    prompt: "In △ABC, if ∠A = 50° and ∠B = 60°, then ∠C = —",
    options: [
      { id: "a", text: "70°" },
      { id: "b", text: "80°" },
      { id: "c", text: "90°" },
      { id: "d", text: "110°" }
    ],
    answerId: "a",
    explanation: "180 − 50 − 60 = 70°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q18",
    prompt: "Which is an acute-angled triangle?",
    options: [
      { id: "a", text: "Angles 90°, 45°, 45°" },
      { id: "b", text: "Angles 100°, 40°, 40°" },
      { id: "c", text: "Angles 60°, 60°, 60°" },
      { id: "d", text: "Angles 120°, 30°, 30°" }
    ],
    answerId: "c",
    explanation: "All three angles of an equilateral triangle are 60° — all acute.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q19",
    prompt: "A rectangle has length 8 cm and breadth 5 cm. Perimeter is —",
    options: [
      { id: "a", text: "13 cm" },
      { id: "b", text: "26 cm" },
      { id: "c", text: "40 cm" },
      { id: "d", text: "20 cm" }
    ],
    answerId: "b",
    explanation: "Perimeter = 2(l + b) = 2(13) = 26 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q20",
    prompt: "Area of a square of side 6 cm is —",
    options: [
      { id: "a", text: "12 cm²" },
      { id: "b", text: "24 cm²" },
      { id: "c", text: "36 cm²" },
      { id: "d", text: "18 cm²" }
    ],
    answerId: "c",
    explanation: "Area = side × side = 36 cm².",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q21",
    prompt: "Which point lies inside a circle of centre O and radius 5 cm?",
    options: [
      { id: "a", text: "A point 5 cm from O" },
      { id: "b", text: "A point 6 cm from O" },
      { id: "c", text: "A point 3 cm from O" },
      { id: "d", text: "A point 5.5 cm from O" }
    ],
    answerId: "c",
    explanation: "Points at distance less than the radius lie inside. 3 < 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q22",
    prompt: "Two angles that add to 90° are called —",
    options: [
      { id: "a", text: "supplementary" },
      { id: "b", text: "complementary" },
      { id: "c", text: "vertically opposite" },
      { id: "d", text: "reflex" }
    ],
    answerId: "b",
    explanation: "Complementary angles sum to 90°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q23",
    prompt: "Two angles that add to 180° are called —",
    options: [
      { id: "a", text: "complementary" },
      { id: "b", text: "supplementary" },
      { id: "c", text: "acute" },
      { id: "d", text: "right" }
    ],
    answerId: "b",
    explanation: "Supplementary angles sum to 180°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q24",
    prompt: "A chord of a circle that passes through the centre is the —",
    options: [
      { id: "a", text: "radius" },
      { id: "b", text: "tangent" },
      { id: "c", text: "diameter" },
      { id: "d", text: "arc" }
    ],
    answerId: "c",
    explanation: "The longest chord through the centre is the diameter.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-maths-geo-b-q01",
    prompt: "Which figure has no endpoints?",
    options: [
      { id: "a", text: "Ray" },
      { id: "b", text: "Line segment" },
      { id: "c", text: "Line" },
      { id: "d", text: "Angle" }
    ],
    answerId: "c",
    explanation: "A line extends endlessly in both directions — no endpoints.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q02",
    prompt: "An angle of 180° is —",
    options: [
      { id: "a", text: "acute" },
      { id: "b", text: "obtuse" },
      { id: "c", text: "right" },
      { id: "d", text: "straight" }
    ],
    answerId: "d",
    explanation: "180° is a straight angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q03",
    prompt: "An angle greater than 180° but less than 360° is —",
    options: [
      { id: "a", text: "acute" },
      { id: "b", text: "obtuse" },
      { id: "c", text: "reflex" },
      { id: "d", text: "right" }
    ],
    answerId: "c",
    explanation: "Reflex angles lie between 180° and 360°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q04",
    prompt: "How many diagonals does a quadrilateral have?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "A quadrilateral has 2 diagonals.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q05",
    prompt: "A triangle with all sides equal is —",
    options: [
      { id: "a", text: "scalene" },
      { id: "b", text: "isosceles but not equilateral" },
      { id: "c", text: "equilateral" },
      { id: "d", text: "right-angled only" }
    ],
    answerId: "c",
    explanation: "All three sides equal → equilateral.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q06",
    prompt: "A triangle with one angle 90° is —",
    options: [
      { id: "a", text: "acute-angled" },
      { id: "b", text: "obtuse-angled" },
      { id: "c", text: "right-angled" },
      { id: "d", text: "equilateral" }
    ],
    answerId: "c",
    explanation: "One right angle → right-angled triangle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q07",
    prompt: "Perimeter of a regular hexagon of side 4 cm is —",
    options: [
      { id: "a", text: "20 cm" },
      { id: "b", text: "24 cm" },
      { id: "c", text: "16 cm" },
      { id: "d", text: "28 cm" }
    ],
    answerId: "b",
    explanation: "6 × 4 = 24 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q08",
    prompt: "Area of a rectangle 9 cm by 4 cm is —",
    options: [
      { id: "a", text: "13 cm²" },
      { id: "b", text: "26 cm²" },
      { id: "c", text: "36 cm²" },
      { id: "d", text: "18 cm²" }
    ],
    answerId: "c",
    explanation: "Area = l × b = 36 cm².",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q09",
    prompt: "If diameter is 20 cm, radius is —",
    options: [
      { id: "a", text: "40 cm" },
      { id: "b", text: "10 cm" },
      { id: "c", text: "20 cm" },
      { id: "d", text: "5 cm" }
    ],
    answerId: "b",
    explanation: "Radius = diameter ÷ 2 = 10 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q10",
    prompt: "Which pair of lines can be both parallel and perpendicular?",
    options: [
      { id: "a", text: "Any two lines" },
      { id: "b", text: "No pair of lines" },
      { id: "c", text: "Only vertical lines" },
      { id: "d", text: "Only circle chords" }
    ],
    answerId: "b",
    explanation: "Parallel lines never meet; perpendicular lines meet at 90° — impossible together.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q11",
    prompt: "In a triangle, two angles are 40° and 65°. The third is —",
    options: [
      { id: "a", text: "75°" },
      { id: "b", text: "85°" },
      { id: "c", text: "105°" },
      { id: "d", text: "95°" }
    ],
    answerId: "a",
    explanation: "180 − 40 − 65 = 75°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q12",
    prompt: "A square of perimeter 32 cm has side —",
    options: [
      { id: "a", text: "8 cm" },
      { id: "b", text: "16 cm" },
      { id: "c", text: "4 cm" },
      { id: "d", text: "12 cm" }
    ],
    answerId: "a",
    explanation: "Side = perimeter ÷ 4 = 8 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q13",
    prompt: "Which tool draws a circle?",
    options: [
      { id: "a", text: "Protractor" },
      { id: "b", text: "Ruler" },
      { id: "c", text: "Compass" },
      { id: "d", text: "Set square only" }
    ],
    answerId: "c",
    explanation: "A compass draws circles of a chosen radius.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q14",
    prompt: "Number of vertices in a cube is —",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "8" },
      { id: "c", text: "12" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "A cube has 8 corners (vertices).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q15",
    prompt: "Number of edges in a cube is —",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "8" },
      { id: "c", text: "12" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "A cube has 12 edges.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q16",
    prompt: "An isosceles triangle has —",
    options: [
      { id: "a", text: "all sides different" },
      { id: "b", text: "at least two sides equal" },
      { id: "c", text: "all angles 90°" },
      { id: "d", text: "no equal sides" }
    ],
    answerId: "b",
    explanation: "Isosceles means at least two sides equal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q17",
    prompt: "Vertically opposite angles are —",
    options: [
      { id: "a", text: "always equal" },
      { id: "b", text: "always complementary" },
      { id: "c", text: "always 90°" },
      { id: "d", text: "never equal" }
    ],
    answerId: "a",
    explanation: "When two lines cross, vertically opposite angles are equal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q18",
    prompt: "A polygon with 5 sides is a —",
    options: [
      { id: "a", text: "hexagon" },
      { id: "b", text: "pentagon" },
      { id: "c", text: "octagon" },
      { id: "d", text: "heptagon" }
    ],
    answerId: "b",
    explanation: "Penta- means five → pentagon.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q19",
    prompt: "The region enclosed by a circle is its —",
    options: [
      { id: "a", text: "circumference" },
      { id: "b", text: "interior (disk)" },
      { id: "c", text: "chord" },
      { id: "d", text: "secant" }
    ],
    answerId: "b",
    explanation: "The interior region is the disk; circumference is the boundary length.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q20",
    prompt: "If ∠P and ∠Q are complementary and ∠P = 35°, then ∠Q = —",
    options: [
      { id: "a", text: "55°" },
      { id: "b", text: "145°" },
      { id: "c", text: "65°" },
      { id: "d", text: "45°" }
    ],
    answerId: "a",
    explanation: "90 − 35 = 55°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q21",
    prompt: "If ∠X and ∠Y are supplementary and ∠X = 110°, then ∠Y = —",
    options: [
      { id: "a", text: "70°" },
      { id: "b", text: "80°" },
      { id: "c", text: "20°" },
      { id: "d", text: "90°" }
    ],
    answerId: "a",
    explanation: "180 − 110 = 70°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q22",
    prompt: "A scalene triangle has —",
    options: [
      { id: "a", text: "all sides equal" },
      { id: "b", text: "two sides equal" },
      { id: "c", text: "all sides different" },
      { id: "d", text: "two right angles" }
    ],
    answerId: "c",
    explanation: "Scalene means all three sides different lengths.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q23",
    prompt: "The longest chord of a circle is always the —",
    options: [
      { id: "a", text: "radius" },
      { id: "b", text: "diameter" },
      { id: "c", text: "tangent" },
      { id: "d", text: "minor arc" }
    ],
    answerId: "b",
    explanation: "The diameter is the longest chord.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q24",
    prompt: "A closed shape with curved boundary that is not a polygon is —",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "square" },
      { id: "c", text: "circle" },
      { id: "d", text: "rectangle" }
    ],
    answerId: "c",
    explanation: "A circle’s boundary is curved, so it is not a polygon.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "📐",
    title: "Basic Geometry",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Geometry studies lines, angles and shapes.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Ray / line / segment", reveal: "One end, no ends, or two ends", emoji: "📏" },
      { label: "Angle types", reveal: "Acute, right, obtuse, straight", emoji: "📐" },
      { label: "Triangle sum", reveal: "Angles add to 180°", emoji: "🔺" },
      { label: "Circle", reveal: "Radius half of diameter", emoji: "⭕" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "A right angle measures?",
    options: [
        { id: "a", text: "45°" },
        { id: "b", text: "90°" },
        { id: "c", text: "180°" },
        { id: "d", text: "360°" }
    ],
    answerId: "b",
    why: "A right angle is 90°.",
    visual: "none",
    speak: "A right angle measures?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6MathsGeometry: ChapterDef = {
  id: "basic-geometry",
  title: "Basic Geometry",
  emoji: "📐",
  blurb: "Lines, angles and simple shapes",
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

export const g6MathsGeometryQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
