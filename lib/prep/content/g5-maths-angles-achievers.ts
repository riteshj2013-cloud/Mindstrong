import type { PrepQuestion } from "../types";

/** Shapes and Angles (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g5MathsAnglesAchievers: PrepQuestion[] = [
  {
    id: "g5-maths-ch02-ach-x-01",
    prompt: "Amruta draws four rays from point O. The two angles marked with matching arcs and a question mark are equal. What is the size of each of them?",
    options: [
      { id: "a", text: "150\u00b0" },
      { id: "b", text: "60\u00b0" },
      { id: "c", text: "75\u00b0" },
      { id: "d", text: "85\u00b0" }
    ],
    answerId: "c",
    explanation: "The angles round point O make a full turn of 360\u00b0. The square marks a right angle, 90\u00b0. So the two equal angles share 360\u00b0 \u2212 120\u00b0 \u2212 90\u00b0 = 150\u00b0, and each is 150\u00b0 \u00f7 2 = 75\u00b0. 150\u00b0 is tempting because it is what is left after the labelled angles, but that amount is shared by the two equal angles.",
    hints: ["The angles round Amruta's point O fill one full turn, and the small square marks a right angle."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four rays from a point O with one angle of 120 degrees, one right angle and two equal angles\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"300\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"210.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Amruta's rays from O</text>\n  <line class=\"part ray\" x1=\"210\" y1=\"170\" x2=\"330\" y2=\"170\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part ray\" x1=\"210\" y1=\"170\" x2=\"150\" y2=\"66.08\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part ray\" x1=\"210\" y1=\"170\" x2=\"94.09\" y2=\"201.06\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part ray\" x1=\"210\" y1=\"170\" x2=\"210\" y2=\"290\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <circle class=\"part vertex\" cx=\"210\" cy=\"170\" r=\"3.5\" fill=\"#263238\"/>\n  <text class=\"label point-name\" x=\"186\" y=\"166\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">O</text>\n  <path class=\"part arc marked\" d=\"M 235.96 168.64 A 26 26 0 0 0 198.2 146.83\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"239\" y=\"124.77\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">120\u00b0</text>\n  <path class=\"part arc equal\" d=\"M 188.21 136.45 A 40 40 0 0 0 170.87 178.32\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <line class=\"part arc-tick\" x1=\"178.59\" y1=\"156.99\" x2=\"167.5\" y2=\"152.4\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"156.41\" y=\"152.8\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">?</text>\n  <path class=\"part arc equal\" d=\"M 171.96 182.36 A 40 40 0 0 0 207.91 209.95\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <line class=\"part arc-tick\" x1=\"189.3\" y1=\"196.97\" x2=\"182\" y2=\"206.49\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"174.69\" y=\"221.01\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">?</text>\n  <polyline class=\"part right-mark\" points=\"210,188 228,188 228,170\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2\"/>\n</svg>", "alt": "Four rays start at point O. One angle between rays is labelled 120\u00b0, one has a small square for a right angle, and the other two angles each have an arc with a small cross-stroke and a question mark."}
  },
  {
    id: "g5-maths-ch02-ach-x-02",
    prompt: "At 4:40, what is the smaller angle between the hour hand and the minute hand of Anshika's wall clock? Remember that the hour hand keeps moving as the minutes pass.",
    options: [
      { id: "a", text: "100\u00b0" },
      { id: "b", text: "120\u00b0" },
      { id: "c", text: "110\u00b0" },
      { id: "d", text: "80\u00b0" }
    ],
    answerId: "a",
    explanation: "The minute hand points at 8, which is 8 \u00d7 30\u00b0 = 240\u00b0 from 12. The hour hand moves 30\u00b0 in an hour, so in 40 minutes it moves 20\u00b0 past the 4: it is at 120\u00b0 + 20\u00b0 = 140\u00b0. The angle between them is 240\u00b0 \u2212 140\u00b0 = 100\u00b0. 120\u00b0 is tempting because it treats the hour hand as still pointing exactly at 4, but by 4:40 it has moved two-thirds of the way towards 5.",
    hints: ["In forty minutes the hour hand on Anshika's clock creeps part of the way from the 4 towards the 5."]
  },
  {
    id: "g5-maths-ch02-ach-x-03",
    prompt: "Aradhya draws four rays OP, OQ, OR and OS from point O, in that order. Each angle between neighbouring rays is 40\u00b0. Counting every angle made by any two of the rays, how many of these angles are acute?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "6" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Four rays make 6 angles in all: three between neighbours (POQ, QOR, ROS) of 40\u00b0 each, two that skip one ray (POR, QOS) of 40\u00b0 + 40\u00b0 = 80\u00b0 each, and one from the first ray to the last (POS) of 120\u00b0. The 40\u00b0 and 80\u00b0 angles are acute and 120\u00b0 is obtuse, so 5 angles are acute. 3 is tempting because it counts only the angles between neighbouring rays, but angles such as POR, made by rays that are not next to each other, are angles too.",
    hints: ["List every pair of Aradhya's rays, not just neighbours, and find each angle by adding the 40\u00b0 steps between them."]
  },
  {
    id: "g5-maths-ch02-ach-x-04",
    prompt: "Arush draws a straight line AOB and two rays OC and OD above it, as shown. What is the reflex angle AOD?",
    options: [
      { id: "a", text: "125\u00b0" },
      { id: "b", text: "235\u00b0" },
      { id: "c", text: "305\u00b0" },
      { id: "d", text: "145\u00b0" }
    ],
    answerId: "b",
    explanation: "Angle AOD is made of angle AOC and angle COD: 35\u00b0 + 90\u00b0 = 125\u00b0. The reflex angle AOD goes the other way round O, so it is 360\u00b0 \u2212 125\u00b0 = 235\u00b0. 125\u00b0 is tempting because it is the ordinary angle AOD, but a reflex angle is the larger angle, more than 180\u00b0.",
    hints: ["Find the ordinary angle AOD by adding Arush's two marked angles, then think about the other way round point O."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A straight line AOB with rays OC and OD above it; angle AOC is 35 degrees and angle COD is a right angle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"210.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Arush's straight line AOB</text>\n  <line class=\"part ray\" x1=\"210\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"358\" y=\"185\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <line class=\"part ray\" x1=\"210\" y1=\"180\" x2=\"284.56\" y2=\"73.51\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"294.89\" y=\"63.77\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <line class=\"part ray\" x1=\"210\" y1=\"180\" x2=\"103.51\" y2=\"105.44\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"88.77\" y=\"100.11\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <line class=\"part ray\" x1=\"210\" y1=\"180\" x2=\"80\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label point-name\" x=\"62\" y=\"185\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <circle class=\"part vertex\" cx=\"210\" cy=\"180\" r=\"3.5\" fill=\"#263238\"/>\n  <text class=\"label point-name\" x=\"224\" y=\"200\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">O</text>\n  <polyline class=\"part right-mark\" points=\"220.32,165.26 205.58,154.93 195.26,169.68\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2\"/>\n  <path class=\"part arc marked\" d=\"M 187.95 166.22 A 26 26 0 0 0 184.04 178.64\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label angle-mark\" x=\"154.68\" y=\"167.56\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#6a1b9a\">35\u00b0</text>\n</svg>", "alt": "A straight line with A on the left, O in the middle and B on the right. Ray OC leans up to the left and ray OD leans up to the right. Angle AOC is labelled 35\u00b0 and angle COD has a small square for a right angle."}
  },
  {
    id: "g5-maths-ch02-ach-x-05",
    prompt: "A giant wheel at a mela has 12 cabins spaced equally, numbered 1 to 12 going clockwise. Cabin 1 is at the top. Chetna's wheel turns clockwise until cabin 5 reaches the top for the first time. Through how many degrees has it turned?",
    options: [
      { id: "a", text: "120\u00b0" },
      { id: "b", text: "150\u00b0" },
      { id: "c", text: "270\u00b0" },
      { id: "d", text: "240\u00b0" }
    ],
    answerId: "d",
    explanation: "Neighbouring cabins are 360\u00b0 \u00f7 12 = 30\u00b0 apart, so cabin 5 starts 4 \u00d7 30\u00b0 = 120\u00b0 clockwise from the top. Turning clockwise carries cabin 5 further away from the top first, so it must go the long way round: 360\u00b0 \u2212 120\u00b0 = 240\u00b0. 120\u00b0 is tempting because cabin 5 is 120\u00b0 from the top, but that turn would be anticlockwise.",
    hints: ["As Chetna's wheel turns clockwise, think about which way cabin 5 travels and how far it must go to reach the top."]
  }
];
