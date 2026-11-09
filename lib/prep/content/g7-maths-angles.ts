import type { ChapterDef, PrepQuestion } from "../types";
import { g7MathsAnglesAchievers } from "./g7-maths-angles-achievers";

/** Lines and Angles - original olympiad-style content (not affiliated with SOF). */

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
    explanation: "Less than 90° means acute. Right is tempting if you call every corner-looking angle a right angle; acute is strictly between 0° and 90°.",
    hints: ["Compare with 90°."]
  },
  {
    id: "g7-maths-angles-a-q02",
    prompt: "Two angles together make a right angle. One of them is 35\u00b0. The other is\u2026",
    options: [
      { id: "a", text: "35\u00b0" },
      { id: "b", text: "55\u00b0" },
      { id: "c", text: "65\u00b0" },
      { id: "d", text: "145\u00b0" }
    ],
    answerId: "b",
    explanation: "A right angle is 90°, so the other angle is 90° − 35° = 55°. 145° is tempting, but that uses 180° (a straight angle) instead of 90°.",
    hints: ["A right angle is a quarter turn. Subtract from that, not from a half turn."]
  },
  {
    id: "g7-maths-angles-a-q03",
    prompt: "An angle of 250\u00b0 is \u2014",
    options: [
      { id: "a", text: "acute" },
      { id: "b", text: "obtuse" },
      { id: "c", text: "reflex" },
      { id: "d", text: "straight" }
    ],
    answerId: "c",
    explanation: "An angle greater than 180° and less than 360° is reflex. Obtuse is tempting because 250° is big, but obtuse angles lie between 90° and 180° only.",
    hints: ["Compare 250° with 90°, 180° and 360°."]
  },
  {
    id: "g7-maths-angles-a-q04",
    prompt: "Angles x and 3x form a linear pair. What is x?",
    options: [
      { id: "a", text: "30\u00b0" },
      { id: "b", text: "60\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "45\u00b0" }
    ],
    answerId: "d",
    explanation: "A linear pair adds up to 180°, so x + 3x = 4x = 180° and x = 45°. 30° is tempting if you use 120° or forget that the two angles together make a straight angle.",
    hints: ["Angles on a straight line add up to 180°. Write that as an equation in x."]
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
    explanation: "Two angles are complementary if they add to 90°. 45° is tempting if you subtract from 180° (supplement) when the pair is complementary (90°); using 90° gives 90° when you re-check the complementary.",
    hints: ["Complement → right angle total."]
  },
  {
    id: "g7-maths-angles-a-q06",
    prompt: "Supplementary angles sum to\u2026",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "b",
    explanation: "Two angles are supplementary if they add to 180°. 270° is tempting if you subtract from 90° (complement) instead of from 180°.",
    hints: ["Supplement → straight angle total."]
  },
  {
    id: "g7-maths-angles-a-q07",
    prompt: "Complement of 38\u00b0 is\u2026",
    options: [
      { id: "a", text: "142\u00b0" },
      { id: "b", text: "62\u00b0" },
      { id: "c", text: "52\u00b0" },
      { id: "d", text: "48\u00b0" }
    ],
    answerId: "c",
    explanation: "90 − 38 = 52. 48° is tempting if you subtract from 90° when the pair is supplementary (180°); using 180° gives 52° when you re-check the complement.",
    hints: ["Complement = 90° minus the angle."]
  },
  {
    id: "g7-maths-angles-a-q08",
    prompt: "Supplement of 110\u00b0 is\u2026",
    options: [
      { id: "a", text: "20\u00b0" },
      { id: "b", text: "250\u00b0" },
      { id: "c", text: "80\u00b0" },
      { id: "d", text: "70\u00b0" }
    ],
    answerId: "d",
    explanation: "180 − 110 = 70. 80° is tempting if you subtract from 90° (complement) instead of from 180°.",
    hints: ["Supplement = 180° minus the angle."]
  },
  {
    id: "g7-maths-angles-a-q09",
    prompt: "Two straight lines cross. One of the angles formed is 65\u00b0. What is the angle vertically opposite to it?",
    options: [
      { id: "a", text: "65\u00b0" },
      { id: "b", text: "25\u00b0" },
      { id: "c", text: "115\u00b0" },
      { id: "d", text: "295\u00b0" }
    ],
    answerId: "a",
    explanation: "Vertically opposite angles are equal, so it is 65°. 115° is tempting, but that is the angle next to it on the straight line (180° − 65°), not the opposite one.",
    hints: ["Vertically opposite angles face each other across the crossing point. Do they change size?"]
  },
  {
    id: "g7-maths-angles-a-q10",
    prompt: "Adjacent angles on a straight line sum to\u2026",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "45\u00b0" }
    ],
    answerId: "b",
    explanation: "They form a linear pair — supplementary. 90° is tempting if you mix corresponding with alternate angles on the parallel lines; the matching relationship gives 180° when you re-check the adjacent.",
    hints: ["Adjacent angles on a straight line make a half-turn. A full turn is 360°."]
  },
  {
    id: "g7-maths-angles-a-q11",
    prompt: "If two lines intersect and one angle is 70\u00b0, the vertically opposite angle is\u2026",
    options: [
      { id: "a", text: "110\u00b0" },
      { id: "b", text: "20\u00b0" },
      { id: "c", text: "70\u00b0" },
      { id: "d", text: "90\u00b0" }
    ],
    answerId: "c",
    explanation: "Vertically opposite angles are equal. 90° is tempting if you use an adjacent angle on a straight line instead of the vertically opposite equal angle.",
    hints: ["Opposite equals opposite."]
  },
  {
    id: "g7-maths-angles-a-q12",
    prompt: "If one angle of a linear pair is 65\u00b0, the other is\u2026",
    options: [
      { id: "a", text: "25\u00b0" },
      { id: "b", text: "65\u00b0" },
      { id: "c", text: "295\u00b0" },
      { id: "d", text: "115\u00b0" }
    ],
    answerId: "d",
    explanation: "180 − 65 = 115. 65° is tempting if you subtract from 90° (complement) instead of from 180°.",
    hints: ["Linear pair sums to 180°."]
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
    explanation: "A full turn is 360°. 270° is tempting if you mix co-interior (same-side) with alternate angles; same-side interiors add to 180°, giving 360° when you re-check the angles.",
    hints: ["Full circle around a point."]
  },
  {
    id: "g7-maths-angles-a-q14",
    prompt: "In a triangle, the sum of interior angles is\u2026",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "360\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "b",
    explanation: "Angle sum property of a triangle. 270° is tempting if you forget that a triangle's three angles add to 180° and mis-subtract; the missing angle is 180° when you re-check the triangle.",
    hints: ["Tear off the corners of a paper triangle and line them up. They make a straight line."]
  },
  {
    id: "g7-maths-angles-a-q15",
    prompt: "An equilateral triangle has each angle\u2026",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "45\u00b0" },
      { id: "c", text: "60\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "c",
    explanation: "180° ÷ 3 = 60°. 45° is tempting if you use the wrong turn size in the figure (quarter vs half); measuring the marked turn gives 60° when you re-check the equilateral.",
    hints: ["All three angles equal."]
  },
  {
    id: "g7-maths-angles-a-q16",
    prompt: "A triangle with angles 40\u00b0, 60\u00b0, and ___.",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "100\u00b0" },
      { id: "c", text: "70\u00b0" },
      { id: "d", text: "80\u00b0" }
    ],
    answerId: "d",
    explanation: "180 − 40 − 60 = 80. 70° is tempting if you call an acute angle obtuse (or the reverse) from a rough look; the size band is 80° when you re-check the triangle.",
    hints: ["Use the angle sum."]
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
    explanation: "Exterior-angle theorem for triangles. The adjacent interior angle is tempting if you treat vertically opposite angles as a linear pair; opposite equals opposite, giving Sum of the two remote interior angles when you re-check the exterior.",
    hints: ["The angles of a triangle add to 180°, and so do angles on a straight line. Write both facts and compare."]
  },
  {
    id: "g7-maths-angles-a-q18",
    prompt: "Parallel lines cut by a transversal: corresponding angles are\u2026",
    options: [
      { id: "a", text: "Supplementary" },
      { id: "b", text: "Equal" },
      { id: "c", text: "Complementary" },
      { id: "d", text: "Always 90\u00b0" }
    ],
    answerId: "b",
    explanation: "Corresponding angles are congruent when lines are parallel. Supplementary is tempting if you add the wrong pair of angles around a point; angles around a point total 360°, giving Equal when you re-check the parallel.",
    hints: ["Corresponding angles sit in the same position at each crossing of the transversal. Slide one onto the other: do they match?"]
  },
  {
    id: "g7-maths-angles-a-q19",
    prompt: "Parallel lines: alternate interior angles are\u2026",
    options: [
      { id: "a", text: "Complementary" },
      { id: "b", text: "Always obtuse" },
      { id: "c", text: "Equal" },
      { id: "d", text: "Always acute" }
    ],
    answerId: "c",
    explanation: "Alternate interior angles are equal for parallel lines. Complementary is tempting if you mis-read which arm is shared in the adjacent pair; the correct adjacent relationship gives Equal when you re-check the parallel.",
    hints: ["Z-shape angles match."]
  },
  {
    id: "g7-maths-angles-a-q20",
    prompt: "Parallel lines: consecutive interior angles are\u2026",
    options: [
      { id: "a", text: "Equal" },
      { id: "b", text: "Complementary" },
      { id: "c", text: "Always 45\u00b0" },
      { id: "d", text: "Supplementary" }
    ],
    answerId: "d",
    explanation: "They add to 180° (co-interior / same-side interior). Equal is tempting if you apply the exterior-angle rule to an interior angle; the matching rule gives Supplementary when you re-check the parallel.",
    hints: ["Same-side interior → 180°."]
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
    explanation: "Co-interior with 75°: 180 − 75 = 105. 75° is tempting if you use alternate angles when the lines are not marked parallel; only with parallels you get 105° when you re-check the corresponding.",
    hints: ["Co-interior angles are supplementary."]
  },
  {
    id: "g7-maths-angles-a-q22",
    prompt: "A reflex angle is\u2026",
    options: [
      { id: "a", text: "Less than 90\u00b0" },
      { id: "b", text: "Greater than 180\u00b0 and less than 360\u00b0" },
      { id: "c", text: "Exactly 180\u00b0" },
      { id: "d", text: "Between 90\u00b0 and 180\u00b0" }
    ],
    answerId: "b",
    explanation: "Reflex angles measure more than a straight angle but less than a full turn. Less than 90° is tempting if you subtract from 180° (supplement) when the pair is complementary (90°); using 90° gives Greater than 180° and less than 360° when you re-check the reflex.",
    hints: ["Reflex is the larger turn."]
  },
  {
    id: "g7-maths-angles-a-q23",
    prompt: "Two complementary angles are in the ratio 2 : 3. The larger is\u2026",
    options: [
      { id: "a", text: "36\u00b0" },
      { id: "b", text: "108\u00b0" },
      { id: "c", text: "54\u00b0" },
      { id: "d", text: "72\u00b0" }
    ],
    answerId: "c",
    explanation: "2x + 3x = 90 → 5x = 90 → x = 18; larger = 54°. 36° is tempting if you subtract from 90° when the pair is supplementary (180°); using 180° gives 54° when you re-check the two.",
    hints: ["Parts of 90° in ratio 2:3."]
  },
  {
    id: "g7-maths-angles-a-q24",
    prompt: "Which pair can be complementary?",
    options: [
      { id: "a", text: "40\u00b0 and 140\u00b0" },
      { id: "b", text: "90\u00b0 and 90\u00b0" },
      { id: "c", text: "100\u00b0 and 80\u00b0" },
      { id: "d", text: "40\u00b0 and 50\u00b0" }
    ],
    answerId: "d",
    explanation: "40 + 50 = 90, so they are complementary. 40° and 140° is tempting if you think of supplementary pairs: 40° and 140° adds to 180° (supplementary), not 90°.",
    hints: ["Complementary angles add up to 90°. Add each pair."]
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
    explanation: "2x + 10 = 3x − 20 → 30 = x. 20 is tempting if you use the wrong angle relationship; the correct measure is 30.",
    hints: ["Set vertically opposite angles equal."]
  },
  {
    id: "g7-maths-angles-b-q02",
    prompt: "An angle is 20\u00b0 more than its complement. The angle is?",
    options: [
      { id: "a", text: "35\u00b0" },
      { id: "b", text: "55\u00b0" },
      { id: "c", text: "70\u00b0" },
      { id: "d", text: "110\u00b0" }
    ],
    answerId: "b",
    explanation: "x + (x − 20) = 90 → 2x = 110 → x = 55. 70° is tempting if you mix co-interior (same-side) with alternate angles; same-side interiors add to 180°, giving 55° when you re-check the angle.",
    hints: ["Let the angle be x; complement is x − 20."]
  },
  {
    id: "g7-maths-angles-b-q03",
    prompt: "An angle is equal to its supplement. The angle is?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "60\u00b0" }
    ],
    answerId: "c",
    explanation: "x + x = 180 → x = 90. 60° is tempting if you subtract from 90° (complement) instead of from 180°.",
    hints: ["Supplementary angles add to 180°. If an angle equals its supplement, then x + x = 180°."]
  },
  {
    id: "g7-maths-angles-b-q04",
    prompt: "In \u25b3ABC, \u2220A = 50\u00b0, \u2220B = 60\u00b0. Exterior at C is?",
    options: [
      { id: "a", text: "70\u00b0" },
      { id: "b", text: "130\u00b0" },
      { id: "c", text: "80\u00b0" },
      { id: "d", text: "110\u00b0" }
    ],
    answerId: "d",
    explanation: "Interior at C is 70°; exterior = 180 − 70 = 110, also = A + B. 130° is tempting if you use an interior angle where the exterior equals the sum of the two remote interiors.",
    hints: ["Exterior = sum of remote interiors."]
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
    explanation: "Corresponding angles are equal when lines are parallel. 90° is tempting if you forget that a triangle's three angles add to 180° and mis-subtract; the missing angle is 65° when you re-check the lines.",
    hints: ["Corresponding angles sit in matching corners where the transversal meets l and m. With l ∥ m, how do they compare?"]
  },
  {
    id: "g7-maths-angles-b-q06",
    prompt: "l \u2225 m; a transversal makes 112\u00b0 with l. Alternate interior angle is?",
    options: [
      { id: "a", text: "68\u00b0" },
      { id: "b", text: "112\u00b0" },
      { id: "c", text: "22\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "b",
    explanation: "Alternate interior angles are equal. 68° is tempting if you use the wrong turn size in the figure (quarter vs half); measuring the marked turn gives 112° when you re-check the transversal.",
    hints: ["Z-angles are equal."]
  },
  {
    id: "g7-maths-angles-b-q07",
    prompt: "Angles of a triangle are in ratio 2 : 3 : 4. Largest angle?",
    options: [
      { id: "a", text: "40\u00b0" },
      { id: "b", text: "60\u00b0" },
      { id: "c", text: "80\u00b0" },
      { id: "d", text: "90\u00b0" }
    ],
    answerId: "c",
    explanation: "2x+3x+4x=180 → 9x=180 → x=20; largest=80°. 90° is tempting if you call an acute angle obtuse (or the reverse) from a rough look; the size band is 80° when you re-check the angles.",
    hints: ["The angles share 180° in the ratio 2 : 3 : 4. Find one part as 180° ÷ 9."]
  },
  {
    id: "g7-maths-angles-b-q08",
    prompt: "Can a triangle have two right angles?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "Only if isosceles" },
      { id: "c", text: "Only if equilateral" },
      { id: "d", text: "No" }
    ],
    answerId: "d",
    explanation: "90 + 90 = 180 leaves 0° for the third angle — impossible. Yes is tempting if you treat vertically opposite angles as a linear pair; opposite equals opposite, giving No when you re-check the can.",
    hints: ["Angle sum would exceed or leave nothing."]
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
    explanation: "Adjacent angles on a straight line form a linear pair. Vertical pair is tempting if you add the wrong pair of angles around a point; angles around a point total 360°, giving Linear pair when you re-check the pair.",
    hints: ["Two adjacent angles that together make a straight line add to 180°. Which pair name means 'on a line'?"]
  },
  {
    id: "g7-maths-angles-b-q10",
    prompt: "If three angles around a point are 90\u00b0, 120\u00b0, and x, then x = ?",
    options: [
      { id: "a", text: "210\u00b0" },
      { id: "b", text: "150\u00b0" },
      { id: "c", text: "30\u00b0" },
      { id: "d", text: "60\u00b0" }
    ],
    answerId: "b",
    explanation: "360 − 90 − 120 = 150. 210° is tempting if you mis-read which arm is shared in the adjacent pair; the correct adjacent relationship gives 150° when you re-check the three.",
    hints: ["Angles around a point sum to 360°."]
  },
  {
    id: "g7-maths-angles-b-q11",
    prompt: "In an isosceles triangle, base angles are equal. If vertex is 40\u00b0, each base is?",
    options: [
      { id: "a", text: "40\u00b0" },
      { id: "b", text: "140\u00b0" },
      { id: "c", text: "70\u00b0" },
      { id: "d", text: "80\u00b0" }
    ],
    answerId: "c",
    explanation: "(180 − 40)/2 = 70. 80° is tempting if you apply the exterior-angle rule to an interior angle; the matching rule gives 70° when you re-check the isosceles.",
    hints: ["Equal base angles share the remaining sum."]
  },
  {
    id: "g7-maths-angles-b-q12",
    prompt: "Which statement is always true?",
    options: [
      { id: "a", text: "Adjacent angles are equal" },
      { id: "b", text: "Acute angles are complementary" },
      { id: "c", text: "Obtuse angles are supplementary" },
      { id: "d", text: "Vertically opposite angles are equal" }
    ],
    answerId: "d",
    explanation: "Vertical angles formed by intersecting lines are always equal. Adjacent angles are equal is tempting if you use alternate angles when the lines are not marked parallel; only with parallels you get Vertically opposite angles are equal when you re-check the statement.",
    hints: ["Test each claim with examples: are adjacent angles always equal? Are two acute angles always complementary? Check every option like this."]
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
    explanation: "3x = 2x + 30 → x = 30. 15 is tempting if you subtract from 180° (supplement) when the pair is complementary (90°); using 90° gives 30 when you re-check the and.",
    hints: ["Corresponding angles equal when parallel."]
  },
  {
    id: "g7-maths-angles-b-q14",
    prompt: "A ray that divides an angle into two equal parts is a\u2026",
    options: [
      { id: "a", text: "Perpendicular bisector" },
      { id: "b", text: "Angle bisector" },
      { id: "c", text: "Transversal" },
      { id: "d", text: "Median" }
    ],
    answerId: "b",
    explanation: "An angle bisector splits an angle into two congruent angles. Perpendicular bisector is tempting if you subtract from 90° when the pair is supplementary (180°); using 180° gives Angle bisector when you re-check the ray.",
    hints: ["Bisector means cut into equal halves."]
  },
  {
    id: "g7-maths-angles-b-q15",
    prompt: "Measure of each angle formed by bisecting a right angle?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "45\u00b0" },
      { id: "d", text: "30\u00b0" }
    ],
    answerId: "c",
    explanation: "90° ÷ 2 = 45°. 30° is tempting if you mix corresponding with alternate angles on the parallel lines; the matching relationship gives 45° when you re-check the measure.",
    hints: ["Bisecting means splitting into two equal parts. Halve the 90° of a right angle."]
  },
  {
    id: "g7-maths-angles-b-q16",
    prompt: "If co-interior angles are (2x + 10)\u00b0 and (3x \u2212 20)\u00b0, and lines are parallel, x = ?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "42" },
      { id: "c", text: "20" },
      { id: "d", text: "38" }
    ],
    answerId: "d",
    explanation: "(2x+10)+(3x−20)=180 → 5x − 10 = 180 → 5x = 190 → x = 38. 42 is tempting if you mix co-interior (same-side) with alternate angles; same-side interiors add to 180°, giving 38 when you re-check the interior.",
    hints: ["Co-interior angles sum to 180°."]
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
    explanation: "All three angles less than 90° → acute-angled triangle. Obtuse-angled is tempting if you forget that a triangle's three angles add to 180° and mis-subtract; the missing angle is Acute-angled when you re-check the triangle.",
    hints: ["Named by its largest angle type."]
  },
  {
    id: "g7-maths-angles-b-q18",
    prompt: "In a right triangle, the other two angles are\u2026",
    options: [
      { id: "a", text: "Obtuse" },
      { id: "b", text: "Acute and complementary" },
      { id: "c", text: "Equal to 90\u00b0" },
      { id: "d", text: "Supplementary to each other only if both 90\u00b0" }
    ],
    answerId: "b",
    explanation: "They sum to 90°, so each is acute and they are complementary. Obtuse is tempting if you use the wrong turn size in the figure (quarter vs half); measuring the marked turn gives Acute and complementary when you re-check the right.",
    hints: ["A right triangle uses 90° of its 180°. What do the other two angles add to, and how big can each be?"]
  },
  {
    id: "g7-maths-angles-b-q19",
    prompt: "Two lines are parallel if a pair of corresponding angles is\u2026",
    options: [
      { id: "a", text: "Complementary" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "Equal" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "c",
    explanation: "Equal corresponding angles is a parallel-line test. Complementary is tempting if you call an acute angle obtuse (or the reverse) from a rough look; the size band is Equal when you re-check the two.",
    hints: ["Draw a transversal across parallel lines and measure the corresponding angles at both crossings. Compare them."]
  },
  {
    id: "g7-maths-angles-b-q20",
    prompt: "Angle of 270\u00b0 is\u2026",
    options: [
      { id: "a", text: "Obtuse" },
      { id: "b", text: "Straight" },
      { id: "c", text: "Acute" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "d",
    explanation: "270° is between 180° and 360°. Obtuse is tempting if you treat vertically opposite angles as a linear pair; opposite equals opposite, giving Reflex when you re-check the angle.",
    hints: ["270° is more than a straight angle of 180° but less than a full turn of 360°. Name that angle type."]
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
    explanation: "Adjacent to 85° on a straight-line style at the intersection: 180 − 85 = 95. 85° is tempting if you use the wrong angle relationship (for example complementary instead of supplementary); the correct measure is 95°.",
    hints: ["Adjacent angles on intersecting lines form a linear pair."]
  },
  {
    id: "g7-maths-angles-b-q22",
    prompt: "Sum of exterior angles of any convex polygon (one per vertex) is\u2026",
    options: [
      { id: "a", text: "180\u00b0" },
      { id: "b", text: "360\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "Depends on sides" }
    ],
    answerId: "b",
    explanation: "Exterior angles of a convex polygon sum to 360°. 180° is tempting if you use an interior angle where the exterior equals the sum of the two remote interiors.",
    hints: ["Walk round a convex polygon, turning by the exterior angle at each vertex. How much have you turned in total?"]
  },
  {
    id: "g7-maths-angles-b-q23",
    prompt: "In \u25b3PQR, \u2220P = \u2220Q and exterior at R is 100\u00b0. Each of \u2220P and \u2220Q is?",
    options: [
      { id: "a", text: "40\u00b0" },
      { id: "b", text: "80\u00b0" },
      { id: "c", text: "50\u00b0" },
      { id: "d", text: "100\u00b0" }
    ],
    answerId: "c",
    explanation: "Exterior = P + Q = 100, and P = Q, so each 50°. 40° is tempting if you use an interior angle where the exterior equals the sum of the two remote interiors.",
    hints: ["Exterior equals sum of remote interiors."]
  },
  {
    id: "g7-maths-angles-b-q24",
    prompt: "Which drawing represents a pair of complementary angles?",
    options: [
      { id: "a", text: "30\u00b0 and 60\u00b0 making a straight line" },
      { id: "b", text: "90\u00b0 and 90\u00b0" },
      { id: "c", text: "120\u00b0 and 60\u00b0 making a right angle" },
      { id: "d", text: "30\u00b0 and 60\u00b0 side by side making a right angle" }
    ],
    answerId: "d",
    explanation: "30 + 60 = 90; they form a right angle together. 30° and 60° making a straight line is tempting if you add the wrong pair of angles around a point; angles around a point total 360°, giving 30° and 60° side by side making a right angle when you re-check the drawing.",
    hints: ["Complementary → combined right angle."]
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
        { id: "a", text: "145\u00b0" },
        { id: "b", text: "35\u00b0" },
        { id: "c", text: "55\u00b0" },
        { id: "d", text: "90\u00b0" }
    ],
    answerId: "c",
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g7MathsAnglesAchievers.length,
      topic: "angles",
      questions: g7MathsAnglesAchievers,
    },
  ],
  paperTopics: ["add-sub", "fractions"],
};

export const g7MathsAnglesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
