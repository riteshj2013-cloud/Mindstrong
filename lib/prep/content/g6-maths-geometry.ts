import type { ChapterDef, PrepQuestion } from "../types";
import { g6MathsGeometryAchievers } from "./g6-maths-geometry-achievers";

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
    explanation: "A ray starts at one point and goes on without end in one direction, like a torch beam starting at the torch. A ruler edge, a track between two stations and a rope between poles all have two ends, so they model line segments. The edge of a ruler is tempting if you confuse a line, a ray, and a line segment (how many endpoints each has).",
    hints: ["A ray has a starting point but no finishing point. Which of these has only one end?"]
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
    hints: ["Each segment needs two endpoints. List every pair of points."]
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
    explanation: "A right angle measures exactly 90°. acute is tempting if you count an extra side that is not part of the polygon.",
    hints: ["Picture the corner of a notebook page. What special name is given to an angle measuring exactly 90°?"]
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
    explanation: "Acute angles are less than 90°, so 45° is acute. right is tempting if you confuse 45° with a right angle (90°).",
    hints: ["Compare with 90°."]
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
    explanation: "Obtuse angles are between 90° and 180°. 120° is obtuse. acute is tempting if you use radius where diameter is needed.",
    hints: ["120° is more than a right angle of 90° but less than 180°. Which type is that?"]
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
    explanation: "At 6 o'clock the hands point in opposite directions, making a straight angle of 180°. At 3 o'clock and 9 o'clock they make a right angle (90°), and at 12 o'clock they overlap (0°). 3 o'clock is tempting if you subtract from 90° (complement) instead of from 180° (straight/supplement).",
    hints: ["A straight angle is a half turn, so the two hands must point in opposite directions."]
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
    hints: ["Walk round the shape: after each corner comes one side. Compare the two counts."]
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
    explanation: "The interior angles of any triangle sum to 180°. 90° is tempting if you give the measure of a right angle instead of the angle sum of a triangle.",
    hints: ["Triangle angle sum is a half-turn."]
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
    explanation: "Quad means four — four sides. 3 is tempting if you name a ray when the figure is a line segment (or the other way round).",
    hints: ["Draw a quadrilateral, such as a kite or a rectangle, and count its sides."]
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
    explanation: "A square has equal sides and four right angles. Rectangle that is not a square is tempting if you add angle sizes that do not meet at the vertex asked for.",
    hints: ["All angles 90° gives a rectangle shape. Which rectangle also has all its sides equal?"]
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
    explanation: "The printed lines across the page stay the same distance apart and never meet, so they are parallel. The margin line meets the printed lines at right angles, so those are perpendicular, not parallel; the diagonals cross in the middle, and the top and left edges meet at a corner. A printed line and the margin line is tempting if you confuse this term with a closely related geometry word.",
    hints: ["Parallel lines keep the same gap all along and never meet. Check whether each pair crosses or meets."]
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
    explanation: "Perpendicular means they form a right angle (90°). 60° is tempting if you confuse this term with a closely related geometry word.",
    hints: ["Perpendicular lines meet like the edges at a corner of a book. What angle is that square corner?"]
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
    explanation: "Radius is centre-to-rim distance. diameter is tempting if you confuse the circumference with the radius, diameter, or the disk inside.",
    hints: ["The distance from the centre of a circle to any point on it is half the diameter. What is it called?"]
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
    explanation: "Diameter = 2 × radius = 2 × 7 = 14 cm. 7 cm is tempting if you report the radius again instead of doubling it for the diameter.",
    hints: ["Diameter is twice the radius."]
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
    explanation: "A protractor measures angles in degrees. Ruler is tempting if you confuse complementary with supplementary.",
    hints: ["Angles are measured in degrees. Which geometry-box instrument is a half-circle marked from 0° to 180°?"]
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
    explanation: "Polygons are closed shapes with straight sides. ray is tempting if you confuse a line, a ray, and a line segment (how many endpoints each has).",
    hints: ["A closed figure with straight line segments as sides, like a triangle or hexagon, has a general name. What is it?"]
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
    explanation: "∠C = 180° − 50° − 60° = 70°. 110° is tempting if you add 50° + 60° and forget to subtract from 180°.",
    hints: ["The three angles of △ABC together make a straight angle. Once ∠A and ∠B are in place, how much of that straight angle is still left for ∠C?"]
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
    explanation: "All three angles of an equilateral triangle are 60° — all acute. Angles 90°, 45°, 45° is tempting if you count 90° as acute.",
    hints: ["An acute-angled triangle has every angle less than 90°. Check all three angles in each option."]
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
    explanation: "Perimeter = 2 × (8 + 5) = 2 × 13 = 26 cm. 40 cm is tempting if you multiply length × breadth (area) instead of doubling the sum of the sides.",
    hints: ["Perimeter means walking all the way round the 8 cm by 5 cm rectangle. How many sides do you walk along, and how long is each one?"]
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
    explanation: "Area of a square = 6 × 6 = 36 cm². 24 cm² is tempting if you find the perimeter 4 × 6 = 24 instead of the area.",
    hints: ["Picture the 6 cm square filled with 1 cm by 1 cm tiles. How many rows of tiles are there, and how many tiles are in each row?"]
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
    explanation: "Points at distance less than the radius lie inside. 3 < 5. A point 5 cm from O is tempting if you confuse radius with diameter or with the circumference.",
    hints: ["Inside means distance from centre < radius."]
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
    explanation: "Complementary angles sum to 90°. supplementary is tempting if you mix faces with edges on the solid.",
    hints: ["Complement → 90°; supplement → 180°."]
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
    explanation: "Supplementary angles sum to 180°. complementary is tempting if you read a neighbouring label from the same diagram.",
    hints: ["Supplement → straight angle."]
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
    explanation: "The longest chord through the centre is the diameter. radius is tempting because it starts at the centre, but a radius goes only from the centre to the circle.",
    hints: ["A chord through the centre goes right across the circle and is twice the radius. Name it."]
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
    explanation: "A line extends endlessly in both directions — no endpoints. Ray is tempting if you forget that a ray has only one endpoint, while a line has none.",
    hints: ["Count endpoints: a segment has two and a ray has one. Which figure has no endpoints at all?"]
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
    explanation: "180° is a straight angle. acute is tempting if you count an extra side that is not part of the polygon.",
    hints: ["At 180° the two arms point in exactly opposite directions and form a line. Which angle type is that?"]
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
    explanation: "A reflex angle is greater than 180° and less than 360°. obtuse is tempting if you stop at the obtuse range (between 90° and 180°) and miss that reflex goes past a straight angle.",
    hints: ["Think of turning more than half-way round but not all the way round. Which angle name is used once an angle has opened wider than a straight line?"]
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
    explanation: "A quadrilateral has 2 diagonals. 1 is tempting if you add angle sizes that do not meet at the vertex asked for.",
    hints: ["Join opposite corners — how many ways?"]
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
    explanation: "Exactly two sides are equal (6 cm and 6 cm), so it is isosceles. It is not equilateral, because that needs all three sides equal, and it is not scalene, because scalene triangles have no equal sides. scalene is tempting if you confuse complementary with supplementary.",
    hints: ["Count how many sides have the same length."]
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
    explanation: "A triangle with one 90° angle is right-angled. acute-angled is tempting if you name the triangle by its other angles being acute and ignore the right angle.",
    hints: ["Look for the 90° corner."]
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
    explanation: "A regular hexagon has 6 equal sides, so perimeter = 6 × 4 = 24 cm. 16 cm is tempting if you multiply by 4 sides (as for a square) instead of 6.",
    hints: ["How many sides does a hexagon have? In a regular hexagon, are they all the same 4 cm?"]
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
    explanation: "Area = l × b = 36 cm². 26 cm² is tempting if you add the sides (perimeter) instead of multiplying the two lengths for area.",
    hints: ["Area of a rectangle = length × breadth. Multiply 9 cm by 4 cm."]
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
    explanation: "Radius = diameter ÷ 2 = 20 ÷ 2 = 10 cm. 40 cm is tempting if you double the diameter instead of halving it.",
    hints: ["The radius goes from the centre to the edge, and the diameter goes right across through the centre. How many radii fit along one diameter?"]
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
    explanation: "Parallel lines never meet; perpendicular lines meet at 90° — impossible together. Any two lines is tempting if you confuse this term with a closely related geometry word.",
    hints: ["Can never-meeting lines also meet at 90°?"]
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
    explanation: "180 − 40 − 65 = 75°. 85° is tempting if you read a neighbouring label from the same diagram.",
    hints: ["Subtract the two known angles from 180°."]
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
    explanation: "Side = perimeter ÷ 4 = 8 cm. 4 cm is tempting if you add only some sides, or find the area, instead of the full distance around.",
    hints: ["Four equal sides share the perimeter."]
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
    explanation: "A compass draws circles of a chosen radius. Protractor is tempting if you confuse the circumference with the radius, diameter, or the disk inside.",
    hints: ["Which tool has a sharp point to hold the centre and a pencil arm that turns to draw a circle?"]
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
    explanation: "A cube has 8 corners (vertices). 6 is tempting if you mix up faces, edges, and vertices of the solid (for example counting faces when asked for edges).",
    hints: ["Picture a dice: count the corners on the top face of the cube, then on the bottom face."]
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
    explanation: "A cube has 12 edges. 8 is tempting if you mix up faces, edges, and vertices of the solid (for example counting faces when asked for edges).",
    hints: ["Count the edges of a cube: the top face has 4, the bottom face has 4, then add the upright edges."]
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
    explanation: "Isosceles means at least two sides equal. all sides different is tempting if you count an extra side that is not part of the polygon.",
    hints: ["Iso means equal. In an isosceles triangle, how many sides must match?"]
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
    explanation: "When two lines cross, vertically opposite angles are equal. always complementary is tempting if you use adjacent angles on a straight line instead of the vertically opposite equal pair.",
    hints: ["Opposite angles at an X."]
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
    explanation: "Penta- means five → pentagon. hexagon is tempting if you name a ray when the figure is a line segment (or the other way round).",
    hints: ["Hexa means 6, hepta means 7, octa means 8. Which polygon name is left for 5 sides?"]
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
    explanation: "The interior region is the disk; circumference is the boundary length. circumference is tempting if you confuse the circumference with the radius, diameter, or the disk inside.",
    hints: ["The circumference is the boundary of the circle. What do we call the region enclosed inside it?"]
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
    explanation: "Complementary angles sum to 90°, so ∠Q = 90° − 35° = 55°. 145° is tempting if you subtract from 180° (supplementary) instead of from 90°.",
    hints: ["Complementary angles together make a right angle. What must ∠Q be so that ∠P and ∠Q fill that corner exactly?"]
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
    explanation: "Supplementary angles sum to 180°, so ∠Y = 180° − 110° = 70°. 20° is tempting if you use 90° (complementary) instead of 180° and take the difference the other way round: 110° − 90° = 20°.",
    hints: ["Supplementary angles together make a straight line. What must ∠Y be so that ∠X and ∠Y lie flat along that line?"]
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
    explanation: "Scalene means all three sides different lengths. all sides equal is tempting if you use radius where diameter is needed.",
    hints: ["Equilateral has all sides equal; isosceles has two. What is left for a scalene triangle?"]
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
    explanation: "The diameter is the longest chord of a circle. radius is tempting if you name the half-chord from centre to rim instead of the full longest chord.",
    hints: ["Through the centre = longest."]
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
    explanation: "A circle has a curved boundary, so it is not a polygon. Triangle is tempting if you read only 'closed shape' and pick the simplest closed shape you know, the 3-sided triangle, missing the words 'curved boundary'.",
    hints: ["Run your finger round the edge of each shape in your head. Does the edge go in straight pieces with corners, or bend smoothly all the way round?"]
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g6MathsGeometryAchievers.length,
      topic: "geometry",
      questions: g6MathsGeometryAchievers,
    },
  ],
  paperTopics: ["add-sub", "place-value"],
};

export const g6MathsGeometryQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
