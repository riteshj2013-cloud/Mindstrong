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
    explanation: "Complement means the two angles add to 90°, so 90 − 38 = 52°. 142° is tempting if you subtract from 180° (the supplement) instead of from 90°.",
    hints: ["Complementary angles make a right angle together. What do two angles that make a right angle add to?"]
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
    explanation: "Adjacent angles on a straight line form a linear pair, so they add to 180°. 90° is tempting if you confuse them with complementary angles; 360° if you think of a full turn instead of a straight line.",
    hints: ["How many right angles fit side by side along a straight line?"]
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
    explanation: "The three interior angles of any triangle add to 180°. 360° is tempting if you use the angle sum for a quadrilateral; 90° if you think only of a right triangle's right angle.",
    hints: ["Tear the three corners off a paper triangle and slide them together along one edge. What kind of line do they form?"]
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
    explanation: "An equilateral triangle has three equal angles that share 180°, so each is 180° ÷ 3 = 60°. 90° is tempting if you picture a right triangle instead; 120° if you take two of the equal angles as one.",
    hints: ["In an equilateral triangle every angle is the same size. How do those three equal angles share the triangle's total?"]
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
    explanation: "An exterior angle of a triangle equals the sum of the two remote (non-adjacent) interior angles. The adjacent interior angle is tempting if you think the exterior and the interior next to it are equal rather than supplementary on a straight line.",
    hints: ["Extend one side of a triangle past a corner, then mark the exterior angle and the interior angle beside it on that straight line."]
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
    explanation: "When parallel lines are cut by a transversal, corresponding angles (same position at each crossing) are equal. Supplementary is tempting if you mix them up with consecutive (co-interior) angles, which do add to 180°.",
    hints: ["Corresponding angles take one corner position at each crossing, for example above the parallel line and right of the transversal, at both crossings."]
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
    explanation: "Alternate interior angles (the Z-shape pair between the parallels) are equal when the lines are parallel. Complementary is tempting if you confuse them with angles that make a right angle.",
    hints: ["Alternate interior angles lie between the parallel lines on opposite sides of the transversal; trace the Z shape and find its two inside bends."]
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
    explanation: "Consecutive (co-interior / same-side) interior angles are supplementary — they add to 180°. Equal is tempting if you apply the alternate-interior rule instead of the same-side rule.",
    hints: ["Consecutive interior angles both sit inside the parallel lines and on one side of the transversal, like the two inner corners of a letter C."]
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
    explanation: "A co-interior angle with 75° is supplementary to it: 180 − 75 = 105°. 75° is tempting if you quote the corresponding angle again instead of moving to the co-interior pair; 15° if you subtract from 90°.",
    hints: ["What do co-interior angles on parallel lines add up to?"]
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
    explanation: "A reflex angle measures more than 180° and less than 360°. 'Between 90° and 180°' is tempting if you describe an obtuse angle instead; 'less than 90°' if you describe an acute angle.",
    hints: ["Reflex is not another name for a straight angle. Picture clock hands: there is a turn between them on each side."]
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
    explanation: "Complementary angles share 90°. With ratio 2 : 3, one part is 90° ÷ 5 = 18°, so the angles are 36° and 54°. 36° is the smaller angle (2 × 18°); the question asks for the larger.",
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
    explanation: "40 + 50 = 90, so they are complementary. 40° and 140° is tempting if you think of supplementary pairs: 40° and 140° add to 180° (supplementary), not 90°.",
    hints: ["Think of the corner of a book page split into two angles. Which pair could fit together exactly into that corner?"]
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
    explanation: "Let the angle be x. Its complement is x − 20, and together they make 90: x + (x − 20) = 90 → 2x = 110 → x = 55°. 110° is tempting if you stop at 2x = 110 and forget to halve; 35° if you give the complement instead of the angle.",
    hints: ["Call the angle x. Its complement is 20° smaller. What should x and that complement add to?"]
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
    explanation: "Corresponding angles are equal when the lines are parallel, so the corresponding angle is also 65°. 115° is tempting if you take the co-interior (180 − 65) instead; 25° if you subtract from 90°.",
    hints: ["Corresponding angles sit in matching corners at the two parallel lines. With the lines parallel, how do those matching angles compare?"]
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
    explanation: "Alternate interior angles are equal for parallel lines, so the alternate interior angle is also 112°. 68° is tempting if you take the supplement (180 − 112) as if they were co-interior.",
    hints: ["Alternate interior angles make the Z between the parallels. Does that Z-pair match, or add to 180°?"]
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
    explanation: "Parts 2 + 3 + 4 = 9 share 180°, so one part is 20° and the largest (4 parts) is 80°. 90° is tempting if you treat the triangle as right-angled; 60° if you take the middle part only as 3 × 20.",
    hints: ["The three angles share 180° in the ratio 2 : 3 : 4. How many equal parts is that in total before you find the largest?"]
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
    explanation: "Adjacent angles that form a straight line are called a linear pair. 'Vertical pair' is tempting if you picture opposite angles at a crossing instead of neighbours on a line; 'complementary pair' if you think they make 90°.",
    hints: ["Two adjacent angles fill a straight line. What do they add up to?"]
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
    explanation: "Base angles are equal, so each is (180 − 40) ÷ 2 = 70°. 140° is tempting if you subtract 40 from 180 and forget to halve; 40° if you copy the vertex angle onto each base.",
    hints: ["After you remove the 40° vertex from the triangle's total, what do you still need to do because the two base angles are equal?"]
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
    explanation: "Vertically opposite angles made by two intersecting lines are always equal. 'Adjacent angles are equal' is tempting if you mix vertical angles with a linear pair — neighbours on a straight line add to 180°, they are not equal.",
    hints: ["An always-true statement survives every example. Test one claim with two obtuse angles, 100° and 120°, then test the remaining statements yourself."]
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
    explanation: "Corresponding angles are equal when lines are parallel, so 3x = 2x + 30 → x = 30. 15 is tempting if you divide 30 by the 2 from 2x instead of collecting the x terms; 10 if you divide 30 by the 3 from 3x.",
    hints: ["Corresponding angles on parallel lines are equal — set the two expressions equal. What happens to the x terms when you collect them?"]
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
    explanation: "A ray that cuts an angle into two equal parts is an angle bisector. 'Perpendicular bisector' is tempting if you picture cutting a side at right angles through its midpoint instead of splitting an angle.",
    hints: ["A transversal just crosses lines. Which of the other names are about cutting something into two equal parts?"]
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
    explanation: "A right angle is 90°. Bisecting it splits it into two equal angles of 45° each. 30° is tempting if you split the right angle into three equal parts instead of two (90 ÷ 3 = 30); 90° if you forget to halve.",
    hints: ["What does 'bisect' mean — split into how many equal parts?"]
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
    explanation: "Co-interior angles on parallel lines add to 180°: (2x + 10) + (3x − 20) = 180 → 5x − 10 = 180 → 5x = 190 → x = 38. 30 is tempting if you set the two angles equal (2x + 10 = 3x − 20 → x = 30), as for alternate angles, instead of adding them to 180°.",
    hints: ["Co-interior angles on parallel lines add to a straight angle. Write that sum with the two expressions, then collect the x terms."]
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
    explanation: "A right triangle already uses 90° of its 180°, so the other two add to 90° — each is acute and they are complementary. 'Obtuse' is tempting if you forget that those two must share only 90° between them, so neither can be bigger than 90°.",
    hints: ["Could a right triangle also hold a 100° angle? Add the angles to check, then decide what kind the other two must be."]
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
    explanation: "Equal corresponding angles is a test for parallel lines. 'Complementary' is tempting if you confuse corresponding angles with a pair that makes a right angle; equal matching corners, not a 90° sum, is the parallel test.",
    hints: ["Find where the transversal crosses each of the two lines, and mark the top-left corner at both crossings as your corresponding pair."]
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
    explanation: "270° is greater than 180° and less than 360°, so it is reflex. 'Obtuse' is tempting if you stop after 'bigger than 90°' and forget obtuse only goes up to 180°.",
    hints: ["How many right angles make 270°?"]
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
    explanation: "Complementary angles add to 90°, so 30° and 60° side by side making a right angle fit. '30° and 60° making a straight line' is tempting if you use the supplement (180°) instead of the complement.",
    hints: ["What do complementary angles add up to?"]
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
