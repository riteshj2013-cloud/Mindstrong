import type { PrepQuestion } from "../types";

/** Lines and Angles (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g7MathsAnglesAchievers: PrepQuestion[] = [
  {
    id: "g7-maths-ch03-ach-x-01",
    prompt: "Rudransh draws two parallel lines l and m and a bent wire APB between them, as shown. Find \u2220APB, marked with a question mark.",
    options: [
      { id: "a", text: "105\u00b0" },
      { id: "b", text: "145\u00b0" },
      { id: "c", text: "75\u00b0" },
      { id: "d", text: "70\u00b0" }
    ],
    answerId: "c",
    explanation: "Draw a line through P parallel to l and m. The part of \u2220APB above it is an alternate angle to the 40\u00b0 at A, and the part below it is an alternate angle to the 35\u00b0 at B. So \u2220APB = 40\u00b0 + 35\u00b0 = 75\u00b0. 105\u00b0 is tempting because it treats A, P and B as the corners of a triangle and takes 180\u00b0 \u2212 40\u00b0 \u2212 35\u00b0, but the 40\u00b0 and 35\u00b0 are angles with the parallel lines, not angles of a triangle APB.",
    hints: ["Draw a line through P parallel to Rudransh's lines l and m; it splits the bend into two parts."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two parallel lines l and m with a bent wire from A on l to P and on to B on m; the angles at A and B are 40 and 35 degrees\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"300\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Rudransh's bent wire</text>\n  <line class=\"part parallel\" x1=\"40\" y1=\"80\" x2=\"470\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <polyline class=\"part arrow\" points=\"410,74 418,80 410,86\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label line-name\" x=\"484\" y=\"85\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2e7d32\">l</text>\n  <line class=\"part parallel\" x1=\"40\" y1=\"260\" x2=\"470\" y2=\"260\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <polyline class=\"part arrow\" points=\"410,254 418,260 410,266\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label line-name\" x=\"484\" y=\"265\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2e7d32\">m</text>\n  <polyline class=\"part wire\" points=\"272.74,80 380,170 251.47,260\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"3\"/>\n  <text class=\"label point-name\" x=\"266.74\" y=\"70\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label point-name\" x=\"396\" y=\"175\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">P</text>\n  <text class=\"label point-name\" x=\"245.47\" y=\"282\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <path class=\"part arc\" d=\"M 291.13 95.43 A 24 24 0 0 0 296.74 80\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"319.73\" y=\"102.1\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">40\u00b0</text>\n  <path class=\"part arc\" d=\"M 275.47 260 A 24 24 0 0 0 271.13 246.23\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"301.06\" y=\"249.36\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">35\u00b0</text>\n  <path class=\"part arc\" d=\"M 361.61 154.57 A 24 24 0 0 0 360.34 183.77\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"336.04\" y=\"173.08\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">?</text>\n</svg>", "alt": "Two horizontal parallel lines with arrow marks: l on top and m below. A wire runs from A on l down to a bend P on the right, then back to B on m. The angle between l and AP at A, on the right, is 40\u00b0. The angle between m and BP at B, on the right, is 35\u00b0. The angle at P is marked with a question mark."}
  },
  {
    id: "g7-maths-ch03-ach-x-02",
    prompt: "Two straight railway tracks near Chaitali's town are parallel, and a straight road crosses both. On the same side of the road, the two interior angles it makes with the tracks are (3x + 20)\u00b0 and (x + 40)\u00b0. What is the larger of these two angles?",
    options: [
      { id: "a", text: "50\u00b0" },
      { id: "b", text: "110\u00b0" },
      { id: "c", text: "70\u00b0" },
      { id: "d", text: "30\u00b0" }
    ],
    answerId: "b",
    explanation: "Interior angles on the same side of a line crossing two parallel lines are co-interior, so they add up to 180\u00b0: (3x + 20) + (x + 40) = 180, so 4x + 60 = 180 and x = 30. The angles are 110\u00b0 and 70\u00b0, and the larger is 110\u00b0. 50\u00b0 is tempting because it sets the two angles equal (3x + 20 = x + 40 gives x = 10), but only corresponding or alternate angles are equal; co-interior angles add up to 180\u00b0.",
    hints: ["The two interior angles on one side of the road between Chaitali's parallel tracks are co-interior; decide what they add up to."]
  },
  {
    id: "g7-maths-ch03-ach-x-03",
    prompt: "Sarika splits a round rangoli into four parts with four lines drawn out from its centre. The four angles at the centre are x\u00b0, (x + 20)\u00b0, 2x\u00b0 and (2x \u2212 20)\u00b0. What is the largest of the four angles?",
    options: [
      { id: "a", text: "60\u00b0" },
      { id: "b", text: "100\u00b0" },
      { id: "c", text: "80\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "d",
    explanation: "The angles at the centre make a full turn: x + (x + 20) + 2x + (2x \u2212 20) = 360, so 6x = 360 and x = 60. The angles are 60\u00b0, 80\u00b0, 120\u00b0 and 100\u00b0, and the largest is 120\u00b0. 60\u00b0 is tempting because it uses 180\u00b0 instead of 360\u00b0 (6x = 180 gives x = 30 and a largest angle of 60\u00b0); it is also the value of x itself, but the angles round a full point add up to 360\u00b0.",
    hints: ["The angles at the centre of Sarika's rangoli make a full turn; add the four expressions and solve for x."]
  },
  {
    id: "g7-maths-ch03-ach-x-04",
    prompt: "Lines l and m in Garv's sketch are parallel; A lies on l, while B and C lie on m. Work out the size of \u2220ABC, shown by the question mark.",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "65\u00b0" },
      { id: "c", text: "70\u00b0" },
      { id: "d", text: "115\u00b0" }
    ],
    answerId: "a",
    explanation: "At A the three angles along line l make a straight angle, so the angle between AB and the left-hand part of l is 180\u00b0 \u2212 70\u00b0 \u2212 65\u00b0 = 45\u00b0. That angle and \u2220ABC are alternate angles between the parallel lines, so \u2220ABC = 45\u00b0. 65\u00b0 is tempting because 65\u00b0 is marked at A, but it is alternate to \u2220ACB, the angle at C, not to the angle at B.",
    hints: ["At A, the angles along Garv's line l make a straight angle; find the one alternate to the angle at B."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Parallel lines l and m with triangle ABC; A is on l and B and C are on m; angle BAC is 70 degrees and the angle between l and AC on the right is 65 degrees\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"300\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Garv's triangle between parallel lines</text>\n  <line class=\"part parallel\" x1=\"30\" y1=\"70\" x2=\"470\" y2=\"70\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <polyline class=\"part arrow\" points=\"410,64 418,70 410,76\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label line-name\" x=\"484\" y=\"75\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2e7d32\">l</text>\n  <line class=\"part parallel\" x1=\"30\" y1=\"250\" x2=\"470\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <polyline class=\"part arrow\" points=\"410,244 418,250 410,256\" fill=\"none\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label line-name\" x=\"484\" y=\"255\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2e7d32\">m</text>\n  <polygon class=\"part tri\" points=\"250,70 70,250 333.94,250\" fill=\"#fff8e1\" fill-opacity=\"0.6\" stroke=\"#c62828\" stroke-width=\"2.5\"/>\n  <text class=\"label point-name\" x=\"250\" y=\"60\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label point-name\" x=\"66\" y=\"272\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <text class=\"label point-name\" x=\"337.94\" y=\"272\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <path class=\"part arc\" d=\"M 234.44 85.56 A 22 22 0 0 0 259.3 89.94\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"242.01\" y=\"120.3\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">70\u00b0</text>\n  <path class=\"part arc\" d=\"M 262.68 97.19 A 30 30 0 0 0 280 70\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"298.92\" y=\"106.16\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">65\u00b0</text>\n  <path class=\"part arc\" d=\"M 94 250 A 24 24 0 0 0 86.97 233.03\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"116.19\" y=\"235.87\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">?</text>\n</svg>", "alt": "Two horizontal parallel lines with arrow marks: l on top and m below. Triangle ABC has A on l and B and C on m. At A, the angle inside the triangle is marked 70\u00b0 and the angle between AC and the right-hand part of l is marked 65\u00b0. The angle at B is marked with a question mark."}
  },
  {
    id: "g7-maths-ch03-ach-x-05",
    prompt: "Near Aniruddh's school, two parallel kerbs l and m of a road are crossed by a straight zebra-crossing line at P on l and Q on m. One interior angle at P is 64\u00b0. Rays PR and QR bisect the two interior angles on that same side of the crossing line and meet at R. What is \u2220PRQ?",
    options: [
      { id: "a", text: "122\u00b0" },
      { id: "b", text: "58\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "64\u00b0" }
    ],
    answerId: "c",
    explanation: "The interior angles at P and Q on the same side are co-interior, so the one at Q is 180\u00b0 \u2212 64\u00b0 = 116\u00b0. The bisectors cut them into 32\u00b0 and 58\u00b0, which are two angles of triangle PQR. So \u2220PRQ = 180\u00b0 \u2212 32\u00b0 \u2212 58\u00b0 = 90\u00b0. 122\u00b0 is tempting because it takes away only the 58\u00b0 at Q from 180\u00b0, but the triangle also has the 32\u00b0 angle at P.",
    hints: ["The two interior angles on one side of Aniruddh's crossing line are co-interior; halve each, then use the angle sum of triangle PQR."]
  }
];
