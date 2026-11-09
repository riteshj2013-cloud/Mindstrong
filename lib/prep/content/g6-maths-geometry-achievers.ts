import type { PrepQuestion } from "../types";

/** Basic Geometry (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g6MathsGeometryAchievers: PrepQuestion[] = [
  {
    id: "g6-maths-ch03-ach-x-01",
    prompt: "In Harshil's figure, side BC of triangle ABC is drawn on past C to the point D. Find the angle marked with a question mark.",
    options: [
      { id: "a", text: "67\u00b0" },
      { id: "b", text: "17\u00b0" },
      { id: "c", text: "65\u00b0" },
      { id: "d", text: "57\u00b0" }
    ],
    answerId: "a",
    explanation: "B, C and D lie on one straight line, so \u2220ACB = 180\u00b0 \u2212 115\u00b0 = 65\u00b0. The angles of triangle ABC add up to 180\u00b0, so \u2220ABC = 180\u00b0 \u2212 48\u00b0 \u2212 65\u00b0 = 67\u00b0. As a check, the outside angle 115\u00b0 equals the two far inside angles together: 48\u00b0 + 67\u00b0 = 115\u00b0. 17\u00b0 is tempting because it puts 115\u00b0 into the angle sum as if it were inside the triangle, but 115\u00b0 is the outside angle at C.",
    hints: ["The two angles at C along Harshil's straight line BCD make a straight angle together; find the inside angle at C first."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Triangle ABC with side BC carried on past C to D; the angle at A is 48 degrees and the outside angle ACD is 115 degrees\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"300\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Harshil's triangle</text>\n  <polygon class=\"part tri\" points=\"146.24,70.38 70,250 230,250\" fill=\"#fff8e1\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <line class=\"part extension\" x1=\"230\" y1=\"250\" x2=\"360\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <text class=\"label point-name\" x=\"146.24\" y=\"58.38\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label point-name\" x=\"56\" y=\"270\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <text class=\"label point-name\" x=\"230\" y=\"274\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <text class=\"label point-name\" x=\"372\" y=\"270\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label angle-mark\" x=\"147.05\" y=\"121.38\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">48\u00b0</text>\n  <path class=\"part arc\" d=\"M 137.65 90.63 A 22 22 0 0 0 155.54 90.32\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"113.36\" y=\"226.3\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">?</text>\n  <path class=\"part arc\" d=\"M 92 250 A 22 22 0 0 0 78.6 229.75\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"253.64\" y=\"217.89\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">115\u00b0</text>\n  <path class=\"part arc\" d=\"M 252 250 A 22 22 0 0 0 220.7 230.06\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n</svg>", "alt": "Triangle ABC stands on base BC, and the base is carried on in a straight line past C to D. The angle at A is marked 48\u00b0, the outside angle ACD between CA and CD is marked 115\u00b0, and the angle at B is marked with a question mark."}
  },
  {
    id: "g6-maths-ch03-ach-x-02",
    prompt: "Hetvi chooses three angles. \u2220P and \u2220Q are supplementary, \u2220Q and \u2220R are complementary, and \u2220P is 4 times \u2220R. What is \u2220Q?",
    options: [
      { id: "a", text: "30\u00b0" },
      { id: "b", text: "120\u00b0" },
      { id: "c", text: "36\u00b0" },
      { id: "d", text: "60\u00b0" }
    ],
    answerId: "d",
    explanation: "\u2220P + \u2220Q = 180\u00b0 and \u2220Q + \u2220R = 90\u00b0, so \u2220P is 90\u00b0 more than \u2220R. If \u2220R is one part, \u2220P is 4 parts, so the 3 extra parts make 90\u00b0 and one part is 30\u00b0. So \u2220R = 30\u00b0, \u2220P = 120\u00b0 and \u2220Q = 90\u00b0 \u2212 30\u00b0 = 60\u00b0. 30\u00b0 is tempting because it is \u2220R, the first angle found, but the question asks for \u2220Q.",
    hints: ["Both facts about \u2220Q show how much bigger \u2220P is than \u2220R; then split that gap using \u2220P = 4 \u00d7 \u2220R."]
  },
  {
    id: "g6-maths-ch03-ach-x-03",
    prompt: "Ivaan's map shows two straight roads AB and CD crossing at a chowk O, and a lane OE with \u2220EOD a right angle. Find \u2220AOE, marked with a question mark.",
    options: [
      { id: "a", text: "116\u00b0" },
      { id: "b", text: "26\u00b0" },
      { id: "c", text: "64\u00b0" },
      { id: "d", text: "154\u00b0" }
    ],
    answerId: "b",
    explanation: "C, O and D lie on one straight line, so \u2220AOC + \u2220AOD = 180\u00b0 and \u2220AOD = 180\u00b0 \u2212 64\u00b0 = 116\u00b0. The right angle EOD is part of \u2220AOD, so \u2220AOE = 116\u00b0 \u2212 90\u00b0 = 26\u00b0. 116\u00b0 is tempting because it is the whole of \u2220AOD, but the right angle EOD has to be taken away from it.",
    hints: ["Use the straight road CD on Ivaan's map to find \u2220AOD first, then remove the part marked with the small square."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 330\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two straight roads AB and CD crossing at O, with a lane OE making a right angle with OD; angle AOC is 64 degrees\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"330\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ivaan's map of two roads</text>\n  <line class=\"part ray\" x1=\"220\" y1=\"175\" x2=\"340\" y2=\"175\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"358\" y=\"180\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <line class=\"part ray\" x1=\"220\" y1=\"175\" x2=\"167.4\" y2=\"67.14\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"159.5\" y=\"55.97\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <line class=\"part ray\" x1=\"220\" y1=\"175\" x2=\"100\" y2=\"175\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"82\" y=\"180\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <line class=\"part ray\" x1=\"220\" y1=\"175\" x2=\"112.14\" y2=\"227.6\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"95.97\" y=\"240.5\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">E</text>\n  <line class=\"part ray\" x1=\"220\" y1=\"175\" x2=\"272.6\" y2=\"282.86\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"280.5\" y=\"304.03\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <circle class=\"part vertex\" cx=\"220\" cy=\"175\" r=\"3.5\" fill=\"#263238\"/>\n  <text class=\"label point-name\" x=\"238\" y=\"165\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">O</text>\n  <path class=\"part arc marked\" d=\"M 205.92 148.51 A 30 30 0 0 0 190.02 173.95\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"172.51\" y=\"150.32\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">64\u00b0</text>\n  <path class=\"part arc marked\" d=\"M 190.02 176.05 A 30 30 0 0 0 192.59 187.2\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"171.28\" y=\"191.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">?</text>\n  <polyline class=\"part right-mark\" points=\"203.82,182.89 211.71,199.07 227.89,191.18\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2\"/>\n</svg>", "alt": "Two straight roads cross at O: road AB runs left to right and road CD slants, with C up to the left and D down to the right. Lane OE points down to the left. Angle AOC is marked 64\u00b0, angle EOD has a small square for a right angle, and angle AOE is marked with a question mark."}
  },
  {
    id: "g6-maths-ch03-ach-x-04",
    prompt: "On her rangoli board, Neelima draws a straight line AOB and three rays OC, OD and OE on the same side of it, in that order from OA. \u2220AOC = 30\u00b0, \u2220COD = 45\u00b0, \u2220DOE = 50\u00b0 and \u2220EOB = 55\u00b0. Taking the five rays two at a time, how many of the angles formed are obtuse?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "0" },
      { id: "c", text: "4" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "Five rays taken two at a time make 10 angles. Adding neighbouring angles gives \u2220AOD = 75\u00b0, \u2220AOE = 125\u00b0, \u2220COE = 95\u00b0, \u2220COB = 150\u00b0 and \u2220DOB = 105\u00b0; there are also the four marked angles (30\u00b0, 45\u00b0, 50\u00b0 and 55\u00b0) and the straight angle AOB = 180\u00b0. The obtuse ones, more than 90\u00b0 but less than 180\u00b0, are 125\u00b0, 95\u00b0, 150\u00b0 and 105\u00b0, so there are 4. 5 is tempting because it also counts \u2220AOB, but 180\u00b0 is a straight angle, not an obtuse angle.",
    hints: ["Add neighbouring marked angles on Neelima's line to get the bigger angles, then check each against the limits for an obtuse angle."]
  },
  {
    id: "g6-maths-ch03-ach-x-05",
    prompt: "At the school science mela, Lakshit's robot toy faces north. It turns 135\u00b0 clockwise and then 260\u00b0 anticlockwise. What is the smaller angle between the direction it faced at the start and the direction it faces now?",
    options: [
      { id: "a", text: "125\u00b0" },
      { id: "b", text: "35\u00b0" },
      { id: "c", text: "235\u00b0" },
      { id: "d", text: "55\u00b0" }
    ],
    answerId: "a",
    explanation: "Turning 135\u00b0 clockwise and then 260\u00b0 anticlockwise leaves the robot 260\u00b0 \u2212 135\u00b0 = 125\u00b0 anticlockwise from north. 125\u00b0 is less than 180\u00b0, so it is the smaller angle; the reflex angle the other way round is 360\u00b0 \u2212 125\u00b0 = 235\u00b0. 35\u00b0 is tempting because it adds the two turns, 135\u00b0 + 260\u00b0 = 395\u00b0, and takes away a full turn, but the turns go in opposite directions, so one must be taken away from the other.",
    hints: ["Lakshit's robot turns in opposite directions, so the second turn partly undoes the earlier one; work out where it ends up compared with north."]
  }
];
