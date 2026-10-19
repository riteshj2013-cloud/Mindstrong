import type { ChapterDef, PrepQuestion } from "../types";

/** Basic Geometry - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-maths-geo-a-q01",
    prompt: "Which of these is a good model of a ray?",
    options: [
      { id: "a", text: "A torch beam shining into the night sky" },
      { id: "b", text: "The edge of a ruler" },
      { id: "c", text: "A railway track between two stations" },
      { id: "d", text: "A rope tied between two poles" }
    ],
    answerId: "a",
    explanation: "A ray starts at one point and goes on without end in one direction, like a torch beam starting at the torch. A ruler edge, a track between two stations and a rope between poles all have two ends, so they model line segments.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q02",
    prompt: "Points P, Q and R lie on a line in that order. How many line segments can be named using these points as endpoints?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "The segments are PQ, QR and PR, so there are 3. 2 is tempting if you count only the short pieces and forget the whole segment PR.",
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
      { id: "a", text: "right" },
      { id: "b", text: "obtuse" },
      { id: "c", text: "straight" },
      { id: "d", text: "acute" }
    ],
    answerId: "d",
    explanation: "Acute angles are less than 90°. 45° is acute.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q05",
    prompt: "An angle of 120° is —",
    options: [
      { id: "a", text: "obtuse" },
      { id: "b", text: "acute" },
      { id: "c", text: "right" },
      { id: "d", text: "straight" }
    ],
    answerId: "a",
    explanation: "Obtuse angles are between 90° and 180°. 120° is obtuse.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q06",
    prompt: "The hands of a clock form a straight angle at —",
    options: [
      { id: "a", text: "3 o'clock" },
      { id: "b", text: "6 o'clock" },
      { id: "c", text: "9 o'clock" },
      { id: "d", text: "12 o'clock" }
    ],
    answerId: "b",
    explanation: "At 6 o'clock the hands point in opposite directions, making a straight angle of 180°. At 3 o'clock and 9 o'clock they make a right angle (90°), and at 12 o'clock they overlap (0°).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q07",
    prompt: "A polygon has 5 vertices. How many sides does it have?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "5" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "In any polygon each side joins two neighbouring vertices, so the number of sides equals the number of vertices: 5 (a pentagon). 10 is tempting if you add vertices and sides together.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q08",
    prompt: "The sum of angles in any triangle is —",
    options: [
      { id: "a", text: "90°" },
      { id: "b", text: "270°" },
      { id: "c", text: "360°" },
      { id: "d", text: "180°" }
    ],
    answerId: "d",
    explanation: "Interior angles of a triangle always sum to 180°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q09",
    prompt: "A quadrilateral has how many sides?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "Quad means four — four sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q10",
    prompt: "Which shape has all sides equal and all angles 90°?",
    options: [
      { id: "a", text: "Rectangle that is not a square" },
      { id: "b", text: "Square" },
      { id: "c", text: "Rhombus that is not a square" },
      { id: "d", text: "Trapezium" }
    ],
    answerId: "b",
    explanation: "A square has equal sides and four right angles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q11",
    prompt: "Which pair of lines on a ruled notebook page are parallel?",
    options: [
      { id: "a", text: "A printed line and the margin line" },
      { id: "b", text: "The two diagonals of the page" },
      { id: "c", text: "Two printed lines running across the page" },
      { id: "d", text: "The top edge and the left edge of the page" }
    ],
    answerId: "c",
    explanation: "The printed lines across the page stay the same distance apart and never meet, so they are parallel. The margin line meets the printed lines at right angles, so those are perpendicular, not parallel; the diagonals cross in the middle, and the top and left edges meet at a corner.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q12",
    prompt: "Perpendicular lines meet at —",
    options: [
      { id: "a", text: "45°" },
      { id: "b", text: "60°" },
      { id: "c", text: "180°" },
      { id: "d", text: "90°" }
    ],
    answerId: "d",
    explanation: "Perpendicular means they form a right angle (90°).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q13",
    prompt: "A circle’s distance from centre to any point on it is the —",
    options: [
      { id: "a", text: "radius" },
      { id: "b", text: "diameter" },
      { id: "c", text: "chord" },
      { id: "d", text: "arc" }
    ],
    answerId: "a",
    explanation: "Radius is centre-to-rim distance.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q14",
    prompt: "If the radius of a circle is 7 cm, the diameter is —",
    options: [
      { id: "a", text: "3.5 cm" },
      { id: "b", text: "14 cm" },
      { id: "c", text: "7 cm" },
      { id: "d", text: "21 cm" }
    ],
    answerId: "b",
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
      { id: "b", text: "curve" },
      { id: "c", text: "line" },
      { id: "d", text: "polygon" }
    ],
    answerId: "d",
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
      { id: "b", text: "Angles 60°, 60°, 60°" },
      { id: "c", text: "Angles 100°, 40°, 40°" },
      { id: "d", text: "Angles 120°, 30°, 30°" }
    ],
    answerId: "b",
    explanation: "All three angles of an equilateral triangle are 60° — all acute.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q19",
    prompt: "A rectangle has length 8 cm and breadth 5 cm. Perimeter is —",
    options: [
      { id: "a", text: "13 cm" },
      { id: "b", text: "40 cm" },
      { id: "c", text: "26 cm" },
      { id: "d", text: "20 cm" }
    ],
    answerId: "c",
    explanation: "Perimeter = 2(l + b) = 2(13) = 26 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q20",
    prompt: "Area of a square of side 6 cm is —",
    options: [
      { id: "a", text: "12 cm²" },
      { id: "b", text: "24 cm²" },
      { id: "c", text: "18 cm²" },
      { id: "d", text: "36 cm²" }
    ],
    answerId: "d",
    explanation: "Area = side × side = 36 cm².",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q21",
    prompt: "Which point lies inside a circle of centre O and radius 5 cm?",
    options: [
      { id: "a", text: "A point 3 cm from O" },
      { id: "b", text: "A point 5 cm from O" },
      { id: "c", text: "A point 6 cm from O" },
      { id: "d", text: "A point 5.5 cm from O" }
    ],
    answerId: "a",
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
      { id: "b", text: "acute" },
      { id: "c", text: "supplementary" },
      { id: "d", text: "right" }
    ],
    answerId: "c",
    explanation: "Supplementary angles sum to 180°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-a-q24",
    prompt: "A chord of a circle that passes through the centre is the —",
    options: [
      { id: "a", text: "radius" },
      { id: "b", text: "tangent" },
      { id: "c", text: "arc" },
      { id: "d", text: "diameter" }
    ],
    answerId: "d",
    explanation: "The longest chord through the centre is the diameter.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-maths-geo-b-q01",
    prompt: "Which figure has no endpoints?",
    options: [
      { id: "a", text: "Line" },
      { id: "b", text: "Ray" },
      { id: "c", text: "Line segment" },
      { id: "d", text: "Angle" }
    ],
    answerId: "a",
    explanation: "A line extends endlessly in both directions — no endpoints.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q02",
    prompt: "An angle of 180° is —",
    options: [
      { id: "a", text: "acute" },
      { id: "b", text: "straight" },
      { id: "c", text: "obtuse" },
      { id: "d", text: "right" }
    ],
    answerId: "b",
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
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "A quadrilateral has 2 diagonals.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q05",
    prompt: "A triangle has sides 6 cm, 6 cm and 4 cm. It is —",
    options: [
      { id: "a", text: "isosceles" },
      { id: "b", text: "scalene" },
      { id: "c", text: "equilateral" },
      { id: "d", text: "right-angled" }
    ],
    answerId: "a",
    explanation: "Exactly two sides are equal (6 cm and 6 cm), so it is isosceles. It is not equilateral, because that needs all three sides equal, and it is not scalene, because scalene triangles have no equal sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q06",
    prompt: "A triangle with one angle 90° is —",
    options: [
      { id: "a", text: "acute-angled" },
      { id: "b", text: "right-angled" },
      { id: "c", text: "obtuse-angled" },
      { id: "d", text: "equilateral" }
    ],
    answerId: "b",
    explanation: "One right angle → right-angled triangle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q07",
    prompt: "Perimeter of a regular hexagon of side 4 cm is —",
    options: [
      { id: "a", text: "20 cm" },
      { id: "b", text: "16 cm" },
      { id: "c", text: "24 cm" },
      { id: "d", text: "28 cm" }
    ],
    answerId: "c",
    explanation: "6 × 4 = 24 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q08",
    prompt: "Area of a rectangle 9 cm by 4 cm is —",
    options: [
      { id: "a", text: "13 cm²" },
      { id: "b", text: "26 cm²" },
      { id: "c", text: "18 cm²" },
      { id: "d", text: "36 cm²" }
    ],
    answerId: "d",
    explanation: "Area = l × b = 36 cm².",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q09",
    prompt: "If diameter is 20 cm, radius is —",
    options: [
      { id: "a", text: "10 cm" },
      { id: "b", text: "40 cm" },
      { id: "c", text: "20 cm" },
      { id: "d", text: "5 cm" }
    ],
    answerId: "a",
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
      { id: "a", text: "85°" },
      { id: "b", text: "105°" },
      { id: "c", text: "75°" },
      { id: "d", text: "95°" }
    ],
    answerId: "c",
    explanation: "180 − 40 − 65 = 75°.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q12",
    prompt: "A square of perimeter 32 cm has side —",
    options: [
      { id: "a", text: "16 cm" },
      { id: "b", text: "4 cm" },
      { id: "c", text: "12 cm" },
      { id: "d", text: "8 cm" }
    ],
    answerId: "d",
    explanation: "Side = perimeter ÷ 4 = 8 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q13",
    prompt: "Which tool draws a circle?",
    options: [
      { id: "a", text: "Compass" },
      { id: "b", text: "Protractor" },
      { id: "c", text: "Ruler" },
      { id: "d", text: "Set square only" }
    ],
    answerId: "a",
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
      { id: "b", text: "all angles 90°" },
      { id: "c", text: "no equal sides" },
      { id: "d", text: "at least two sides equal" }
    ],
    answerId: "d",
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
      { id: "b", text: "chord" },
      { id: "c", text: "interior (disk)" },
      { id: "d", text: "secant" }
    ],
    answerId: "c",
    explanation: "The interior region is the disk; circumference is the boundary length.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q20",
    prompt: "If ∠P and ∠Q are complementary and ∠P = 35°, then ∠Q = —",
    options: [
      { id: "a", text: "145°" },
      { id: "b", text: "65°" },
      { id: "c", text: "45°" },
      { id: "d", text: "55°" }
    ],
    answerId: "d",
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
      { id: "b", text: "all sides different" },
      { id: "c", text: "two sides equal" },
      { id: "d", text: "two right angles" }
    ],
    answerId: "b",
    explanation: "Scalene means all three sides different lengths.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q23",
    prompt: "The longest chord of a circle is always the —",
    options: [
      { id: "a", text: "radius" },
      { id: "b", text: "tangent" },
      { id: "c", text: "diameter" },
      { id: "d", text: "minor arc" }
    ],
    answerId: "c",
    explanation: "The diameter is the longest chord.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-geo-b-q24",
    prompt: "A closed shape with curved boundary that is not a polygon is —",
    options: [
      { id: "a", text: "triangle" },
      { id: "b", text: "square" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "circle" }
    ],
    answerId: "d",
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
