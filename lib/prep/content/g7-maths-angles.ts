import type { ChapterDef, PrepQuestion } from "../types";

/** Lines and Angles - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-maths-angles-a-q01",
    prompt: "An angle of 35\u00b0 is\u2026",
    options: [
      { id: "a", text: "Acute" },
      { id: "b", text: "Right" },
      { id: "c", text: "Obtuse" },
      { id: "d", text: "Straight" }
    ],
    answerId: "a",
    explanation: "Less than 90\u00b0 means acute.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q02",
    prompt: "A right angle measures\u2026",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "45\u00b0" },
      { id: "c", text: "180\u00b0" },
      { id: "d", text: "360\u00b0" }
    ],
    answerId: "a",
    explanation: "A square corner is 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q03",
    prompt: "An angle of 120\u00b0 is\u2026",
    options: [
      { id: "a", text: "Obtuse" },
      { id: "b", text: "Acute" },
      { id: "c", text: "Right" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "a",
    explanation: "Between 90\u00b0 and 180\u00b0 is obtuse.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q04",
    prompt: "A straight angle measures\u2026",
    options: [
      { id: "a", text: "180\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "270\u00b0" },
      { id: "d", text: "360\u00b0" }
    ],
    answerId: "a",
    explanation: "A straight line forms a 180\u00b0 angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q05",
    prompt: "Complementary angles sum to\u2026",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "45\u00b0" }
    ],
    answerId: "a",
    explanation: "Two angles are complementary if they add to 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q06",
    prompt: "Supplementary angles sum to\u2026",
    options: [
      { id: "a", text: "180\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "a",
    explanation: "Two angles are supplementary if they add to 180\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q07",
    prompt: "Complement of 38\u00b0 is\u2026",
    options: [
      { id: "a", text: "52\u00b0" },
      { id: "b", text: "142\u00b0" },
      { id: "c", text: "62\u00b0" },
      { id: "d", text: "48\u00b0" }
    ],
    answerId: "a",
    explanation: "90 \u2212 38 = 52.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q08",
    prompt: "Supplement of 110\u00b0 is\u2026",
    options: [
      { id: "a", text: "70\u00b0" },
      { id: "b", text: "20\u00b0" },
      { id: "c", text: "250\u00b0" },
      { id: "d", text: "80\u00b0" }
    ],
    answerId: "a",
    explanation: "180 \u2212 110 = 70.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q09",
    prompt: "Vertically opposite angles are\u2026",
    options: [
      { id: "a", text: "Equal" },
      { id: "b", text: "Complementary" },
      { id: "c", text: "Always acute" },
      { id: "d", text: "Always 90\u00b0" }
    ],
    answerId: "a",
    explanation: "When two lines cross, opposite angles are equal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q10",
    prompt: "Adjacent angles on a straight line sum to\u2026",
    options: [
      { id: "a", text: "180\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "45\u00b0" }
    ],
    answerId: "a",
    explanation: "They form a linear pair \u2014 supplementary.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q11",
    prompt: "If two lines intersect and one angle is 70\u00b0, the vertically opposite angle is\u2026",
    options: [
      { id: "a", text: "70\u00b0" },
      { id: "b", text: "110\u00b0" },
      { id: "c", text: "20\u00b0" },
      { id: "d", text: "90\u00b0" }
    ],
    answerId: "a",
    explanation: "Vertically opposite angles are equal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q12",
    prompt: "If one angle of a linear pair is 65\u00b0, the other is\u2026",
    options: [
      { id: "a", text: "115\u00b0" },
      { id: "b", text: "25\u00b0" },
      { id: "c", text: "65\u00b0" },
      { id: "d", text: "295\u00b0" }
    ],
    answerId: "a",
    explanation: "180 \u2212 65 = 115.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q13",
    prompt: "Angles around a point sum to\u2026",
    options: [
      { id: "a", text: "360\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "a",
    explanation: "A full turn is 360\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q14",
    prompt: "In a triangle, the sum of interior angles is\u2026",
    options: [
      { id: "a", text: "180\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "a",
    explanation: "Angle sum property of a triangle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q15",
    prompt: "An equilateral triangle has each angle\u2026",
    options: [
      { id: "a", text: "60\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "45\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "a",
    explanation: "180\u00b0 \u00f7 3 = 60\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q16",
    prompt: "A triangle with angles 40\u00b0, 60\u00b0, and ___.",
    options: [
      { id: "a", text: "80\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "100\u00b0" },
      { id: "d", text: "70\u00b0" }
    ],
    answerId: "a",
    explanation: "180 \u2212 40 \u2212 60 = 80.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q17",
    prompt: "An exterior angle of a triangle equals\u2026",
    options: [
      { id: "a", text: "Sum of the two remote interior angles" },
      { id: "b", text: "The adjacent interior angle" },
      { id: "c", text: "90\u00b0 always" },
      { id: "d", text: "Half the opposite angle" }
    ],
    answerId: "a",
    explanation: "Exterior-angle theorem for triangles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q18",
    prompt: "Parallel lines cut by a transversal: corresponding angles are\u2026",
    options: [
      { id: "a", text: "Equal" },
      { id: "b", text: "Supplementary" },
      { id: "c", text: "Complementary" },
      { id: "d", text: "Always 90\u00b0" }
    ],
    answerId: "a",
    explanation: "Corresponding angles are congruent when lines are parallel.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q19",
    prompt: "Parallel lines: alternate interior angles are\u2026",
    options: [
      { id: "a", text: "Equal" },
      { id: "b", text: "Complementary" },
      { id: "c", text: "Always obtuse" },
      { id: "d", text: "Always acute" }
    ],
    answerId: "a",
    explanation: "Alternate interior angles are equal for parallel lines.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q20",
    prompt: "Parallel lines: consecutive interior angles are\u2026",
    options: [
      { id: "a", text: "Supplementary" },
      { id: "b", text: "Equal" },
      { id: "c", text: "Complementary" },
      { id: "d", text: "Always 45\u00b0" }
    ],
    answerId: "a",
    explanation: "They add to 180\u00b0 (co-interior / same-side interior).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q21",
    prompt: "If corresponding angles are 75\u00b0, a co-interior angle with that 75\u00b0 is\u2026",
    options: [
      { id: "a", text: "105\u00b0" },
      { id: "b", text: "75\u00b0" },
      { id: "c", text: "15\u00b0" },
      { id: "d", text: "150\u00b0" }
    ],
    answerId: "a",
    explanation: "Co-interior with 75\u00b0: 180 \u2212 75 = 105.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q22",
    prompt: "A reflex angle is\u2026",
    options: [
      { id: "a", text: "Greater than 180\u00b0 and less than 360\u00b0" },
      { id: "b", text: "Less than 90\u00b0" },
      { id: "c", text: "Exactly 180\u00b0" },
      { id: "d", text: "Between 90\u00b0 and 180\u00b0" }
    ],
    answerId: "a",
    explanation: "Reflex angles measure more than a straight angle but less than a full turn.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q23",
    prompt: "Two complementary angles are in the ratio 2 : 3. The larger is\u2026",
    options: [
      { id: "a", text: "54\u00b0" },
      { id: "b", text: "36\u00b0" },
      { id: "c", text: "108\u00b0" },
      { id: "d", text: "72\u00b0" }
    ],
    answerId: "a",
    explanation: "2x + 3x = 90 \u2192 5x = 90 \u2192 x = 18; larger = 54\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-a-q24",
    prompt: "Which pair can be complementary?",
    options: [
      { id: "a", text: "40\u00b0 and 50\u00b0" },
      { id: "b", text: "40\u00b0 and 140\u00b0" },
      { id: "c", text: "90\u00b0 and 90\u00b0" },
      { id: "d", text: "100\u00b0 and 80\u00b0" }
    ],
    answerId: "a",
    explanation: "40 + 50 = 90.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-maths-angles-b-q01",
    prompt: "If \u2220A and \u2220B are vertically opposite and \u2220A = 2x + 10, \u2220B = 3x \u2212 20, then x = ?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "10" },
      { id: "c", text: "20" },
      { id: "d", text: "40" }
    ],
    answerId: "a",
    explanation: "2x + 10 = 3x \u2212 20 \u2192 30 = x.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q02",
    prompt: "An angle is 20\u00b0 more than its complement. The angle is?",
    options: [
      { id: "a", text: "55\u00b0" },
      { id: "b", text: "35\u00b0" },
      { id: "c", text: "70\u00b0" },
      { id: "d", text: "110\u00b0" }
    ],
    answerId: "a",
    explanation: "x + (x \u2212 20) = 90 \u2192 2x = 110 \u2192 x = 55.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q03",
    prompt: "An angle is equal to its supplement. The angle is?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "45\u00b0" },
      { id: "c", text: "180\u00b0" },
      { id: "d", text: "60\u00b0" }
    ],
    answerId: "a",
    explanation: "x + x = 180 \u2192 x = 90.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q04",
    prompt: "In \u25b3ABC, \u2220A = 50\u00b0, \u2220B = 60\u00b0. Exterior at C is?",
    options: [
      { id: "a", text: "110\u00b0" },
      { id: "b", text: "70\u00b0" },
      { id: "c", text: "130\u00b0" },
      { id: "d", text: "80\u00b0" }
    ],
    answerId: "a",
    explanation: "Interior at C is 70\u00b0; exterior = 180 \u2212 70 = 110, also = A + B.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q05",
    prompt: "Lines l \u2225 m; transversal makes an angle 65\u00b0. Corresponding angle is?",
    options: [
      { id: "a", text: "65\u00b0" },
      { id: "b", text: "115\u00b0" },
      { id: "c", text: "25\u00b0" },
      { id: "d", text: "90\u00b0" }
    ],
    answerId: "a",
    explanation: "Corresponding angles are equal when lines are parallel.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q06",
    prompt: "l \u2225 m; a transversal makes 112\u00b0 with l. Alternate interior angle is?",
    options: [
      { id: "a", text: "112\u00b0" },
      { id: "b", text: "68\u00b0" },
      { id: "c", text: "22\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "a",
    explanation: "Alternate interior angles are equal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q07",
    prompt: "Angles of a triangle are in ratio 2 : 3 : 4. Largest angle?",
    options: [
      { id: "a", text: "80\u00b0" },
      { id: "b", text: "40\u00b0" },
      { id: "c", text: "60\u00b0" },
      { id: "d", text: "90\u00b0" }
    ],
    answerId: "a",
    explanation: "2x+3x+4x=180 \u2192 9x=180 \u2192 x=20; largest=80\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q08",
    prompt: "Can a triangle have two right angles?",
    options: [
      { id: "a", text: "No" },
      { id: "b", text: "Yes" },
      { id: "c", text: "Only if isosceles" },
      { id: "d", text: "Only if equilateral" }
    ],
    answerId: "a",
    explanation: "90 + 90 = 180 leaves 0\u00b0 for the third angle \u2014 impossible.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q09",
    prompt: "A pair of adjacent angles forming a straight line is called a\u2026",
    options: [
      { id: "a", text: "Linear pair" },
      { id: "b", text: "Vertical pair" },
      { id: "c", text: "Complementary pair" },
      { id: "d", text: "Corresponding pair" }
    ],
    answerId: "a",
    explanation: "Adjacent angles on a straight line form a linear pair.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q10",
    prompt: "If three angles around a point are 90\u00b0, 120\u00b0, and x, then x = ?",
    options: [
      { id: "a", text: "150\u00b0" },
      { id: "b", text: "210\u00b0" },
      { id: "c", text: "30\u00b0" },
      { id: "d", text: "60\u00b0" }
    ],
    answerId: "a",
    explanation: "360 \u2212 90 \u2212 120 = 150.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q11",
    prompt: "In an isosceles triangle, base angles are equal. If vertex is 40\u00b0, each base is?",
    options: [
      { id: "a", text: "70\u00b0" },
      { id: "b", text: "40\u00b0" },
      { id: "c", text: "140\u00b0" },
      { id: "d", text: "80\u00b0" }
    ],
    answerId: "a",
    explanation: "(180 \u2212 40)/2 = 70.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q12",
    prompt: "Which statement is always true?",
    options: [
      { id: "a", text: "Vertically opposite angles are equal" },
      { id: "b", text: "Adjacent angles are equal" },
      { id: "c", text: "Acute angles are complementary" },
      { id: "d", text: "Obtuse angles are supplementary" }
    ],
    answerId: "a",
    explanation: "Vertical angles formed by intersecting lines are always equal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q13",
    prompt: "If \u22201 and \u22202 are corresponding and \u22201 = 3x, \u22202 = 2x + 30, for parallel lines x = ?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "15" },
      { id: "c", text: "60" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "3x = 2x + 30 \u2192 x = 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q14",
    prompt: "A ray that divides an angle into two equal parts is a\u2026",
    options: [
      { id: "a", text: "Angle bisector" },
      { id: "b", text: "Perpendicular bisector" },
      { id: "c", text: "Transversal" },
      { id: "d", text: "Median" }
    ],
    answerId: "a",
    explanation: "An angle bisector splits an angle into two congruent angles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q15",
    prompt: "Measure of each angle formed by bisecting a right angle?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "180\u00b0" },
      { id: "d", text: "30\u00b0" }
    ],
    answerId: "a",
    explanation: "90\u00b0 \u00f7 2 = 45\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q16",
    prompt: "If co-interior angles are (2x + 10)\u00b0 and (3x \u2212 20)\u00b0, and lines are parallel, x = ?",
    options: [
      { id: "a", text: "38" },
      { id: "b", text: "30" },
      { id: "c", text: "42" },
      { id: "d", text: "20" }
    ],
    answerId: "a",
    explanation: "(2x+10)+(3x\u221220)=180 \u2192 5x \u2212 10 = 180 \u2192 5x = 190 \u2192 x = 38.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q17",
    prompt: "A triangle with all angles acute is called\u2026",
    options: [
      { id: "a", text: "Acute-angled" },
      { id: "b", text: "Obtuse-angled" },
      { id: "c", text: "Right-angled" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "a",
    explanation: "All three angles less than 90\u00b0 \u2192 acute-angled triangle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q18",
    prompt: "In a right triangle, the other two angles are\u2026",
    options: [
      { id: "a", text: "Acute and complementary" },
      { id: "b", text: "Obtuse" },
      { id: "c", text: "Equal to 90\u00b0" },
      { id: "d", text: "Supplementary to each other only if both 90\u00b0" }
    ],
    answerId: "a",
    explanation: "They sum to 90\u00b0, so each is acute and they are complementary.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q19",
    prompt: "Two lines are parallel if a pair of corresponding angles is\u2026",
    options: [
      { id: "a", text: "Equal" },
      { id: "b", text: "Complementary" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "a",
    explanation: "Equal corresponding angles is a parallel-line test.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q20",
    prompt: "Angle of 270\u00b0 is\u2026",
    options: [
      { id: "a", text: "Reflex" },
      { id: "b", text: "Obtuse" },
      { id: "c", text: "Straight" },
      { id: "d", text: "Acute" }
    ],
    answerId: "a",
    explanation: "270\u00b0 is between 180\u00b0 and 360\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q21",
    prompt: "If \u2220AOC and \u2220BOD are vertically opposite and each is 85\u00b0, adjacent \u2220AOD is?",
    options: [
      { id: "a", text: "95\u00b0" },
      { id: "b", text: "85\u00b0" },
      { id: "c", text: "170\u00b0" },
      { id: "d", text: "5\u00b0" }
    ],
    answerId: "a",
    explanation: "Adjacent to 85\u00b0 on a straight-line style at the intersection: 180 \u2212 85 = 95.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q22",
    prompt: "Sum of exterior angles of any convex polygon (one per vertex) is\u2026",
    options: [
      { id: "a", text: "360\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "Depends on sides" }
    ],
    answerId: "a",
    explanation: "Exterior angles of a convex polygon sum to 360\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q23",
    prompt: "In \u25b3PQR, \u2220P = \u2220Q and exterior at R is 100\u00b0. Each of \u2220P and \u2220Q is?",
    options: [
      { id: "a", text: "50\u00b0" },
      { id: "b", text: "40\u00b0" },
      { id: "c", text: "80\u00b0" },
      { id: "d", text: "100\u00b0" }
    ],
    answerId: "a",
    explanation: "Exterior = P + Q = 100, and P = Q, so each 50\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-angles-b-q24",
    prompt: "Which drawing represents a pair of complementary angles?",
    options: [
      { id: "a", text: "30\u00b0 and 60\u00b0 side by side making a right angle" },
      { id: "b", text: "30\u00b0 and 60\u00b0 making a straight line" },
      { id: "c", text: "90\u00b0 and 90\u00b0" },
      { id: "d", text: "120\u00b0 and 60\u00b0 making a right angle" }
    ],
    answerId: "a",
    explanation: "30 + 60 = 90; they form a right angle together.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcd0",
    title: "Lines and Angles",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Angles are measured in degrees. Special pairs help you solve geometry problems.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Angle types", reveal: "Acute, right, obtuse, straight, reflex", emoji: "\ud83d\udccf" },
      { label: "Complementary", reveal: "Sum to 90 degrees", emoji: "\ud83e\udde9" },
      { label: "Supplementary", reveal: "Sum to 180 degrees", emoji: "\u2796" },
      { label: "Parallel lines", reveal: "Corresponding and alternate angles equal", emoji: "\ud83d\udd00" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Complement of 35 degrees?",
    options: [
        { id: "a", text: "55\u00b0" },
        { id: "b", text: "145\u00b0" },
        { id: "c", text: "35\u00b0" },
        { id: "d", text: "90\u00b0" }
    ],
    answerId: "a",
    why: "90 \u2212 35 = 55.",
    visual: "number-line",
    speak: "Complement of 35 degrees?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know angle types", "Use special pairs", "Parallel-line facts", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7MathsAngles: ChapterDef = {
  id: "lines-angles",
  title: "Lines and Angles",
  emoji: "\ud83d\udcd0",
  blurb: "Degrees, pairs and parallel lines",
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
  paperTopics: ["add-sub", "fractions"],
};

export const g7MathsAnglesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
