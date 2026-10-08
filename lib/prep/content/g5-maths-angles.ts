import type { ChapterDef, PrepQuestion } from "../types";

/** Shapes and Angles - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-angles-a-q01",
    prompt: "Look at the four angles. Which panel shows a **right angle**?",
    options: [
      { id: "a", text: "Panel A" },
      { id: "b", text: "Panel B" },
      { id: "c", text: "Panel C" },
      { id: "d", text: "Panel D" }
    ],
    answerId: "b",
    explanation: "Panel B has a square corner with a right-angle mark, so it is 90\u00b0. A is acute, C is obtuse and D is straight.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four angles labelled A to D\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"220\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which angle is a right angle?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"34\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"54\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <line class=\"part arm\" x1=\"122\" y1=\"89\" x2=\"167.0\" y2=\"89.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"122\" y1=\"89\" x2=\"153.8\" y2=\"57.2\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"122\" cy=\"89\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 137.8 89.0 A 15.7 15.7 0 0 0 133.1 77.9\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"34\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"54\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <line class=\"part arm\" x1=\"357\" y1=\"89\" x2=\"402.0\" y2=\"89.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"357\" y1=\"89\" x2=\"357.0\" y2=\"44.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"357\" cy=\"89\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polyline class=\"part right-mark\" points=\"369.0,89.0 369.0,77.0 357.0,77.0\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <rect class=\"part panel\" x=\"10\" y=\"120\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"140\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <line class=\"part arm\" x1=\"122\" y1=\"175\" x2=\"167.0\" y2=\"175.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"122\" y1=\"175\" x2=\"90.2\" y2=\"143.2\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"122\" cy=\"175\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 137.8 175.0 A 15.7 15.7 0 0 0 110.9 163.9\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"120\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"140\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <line class=\"part arm\" x1=\"357\" y1=\"175\" x2=\"402.0\" y2=\"175.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"357\" y1=\"175\" x2=\"312.0\" y2=\"175.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"357\" cy=\"175\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "Four panels. A shows a sharp acute angle. B shows a square corner with an orange right-angle mark. C shows a wide obtuse angle. D shows a straight angle."}
  },
  {
    id: "g5-maths-angles-a-q02",
    prompt: "What angle is formed at the corner of a rectangular notebook page?",
    options: [
      { id: "a", text: "Right angle" },
      { id: "b", text: "Acute angle" },
      { id: "c", text: "Obtuse angle" },
      { id: "d", text: "Straight angle" }
    ],
    answerId: "a",
    explanation: "The corners of a rectangle are square corners, and a square corner is a right angle of 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q03",
    prompt: "How many degrees are there in a straight angle?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "360\u00b0" },
      { id: "c", text: "270\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "d",
    explanation: "A straight angle looks like a straight line and measures 180\u00b0, which is two right angles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q04",
    prompt: "Look at Name the parts. What is the **orange point V** called?",
    options: [
      { id: "a", text: "An arm" },
      { id: "b", text: "A side" },
      { id: "c", text: "The vertex" },
      { id: "d", text: "A base" }
    ],
    answerId: "c",
    explanation: "The common meeting point of the two arms is the vertex, shown here as the orange point V.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Angle with vertex V and arms VA and VB\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Name the parts</text>\n  <line class=\"part arm\" x1=\"220\" y1=\"110\" x2=\"304.6\" y2=\"79.2\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"220\" y1=\"110\" x2=\"250.8\" y2=\"25.4\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"220\" cy=\"110\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 249.6 99.2 A 31.5 31.5 0 0 0 230.8 80.4\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"220\" y=\"128\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">V</text>\n  <text class=\"label\" x=\"318.7\" y=\"74.1\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <text class=\"label\" x=\"255.9\" y=\"11.3\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <text class=\"label small\" x=\"220\" y=\"148\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The orange dot is where the arms meet.</text>\n</svg>", "alt": "Two rays meet at an orange point labelled V. One arm ends at A and the other at B. A blue arc sits between the arms."}
  },
  {
    id: "g5-maths-angles-a-q05",
    prompt: "Look at Count the sides. Which shape is a **triangle**?",
    options: [
      { id: "a", text: "Shape A" },
      { id: "b", text: "Shape B" },
      { id: "c", text: "Shape C" },
      { id: "d", text: "Shape D" }
    ],
    answerId: "a",
    explanation: "A triangle has 3 straight sides. Shape A is the only triangle.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 470 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four polygons labelled A to D\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"470\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Count the sides</text>\n  <polygon class=\"part poly\" points=\"70.0,58.0 106.4,121.0 33.6,121.0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"70\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <polygon class=\"part poly\" points=\"180.0,58.0 222.0,100.0 180.0,142.0 138.0,100.0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"180\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <polygon class=\"part poly\" points=\"290.0,58.0 329.9,87.0 314.7,134.0 265.3,134.0 250.1,87.0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"290\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <polygon class=\"part poly\" points=\"400.0,58.0 436.4,79.0 436.4,121.0 400.0,142.0 363.6,121.0 363.6,79.0\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"400\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label small\" x=\"240\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All shapes are closed with straight sides.</text>\n</svg>", "alt": "Four shapes in a row. A is a triangle, B a square, C a pentagon and D a hexagon."}
  },
  {
    id: "g5-maths-angles-a-q06",
    prompt: "Look at Open or closed? Which shape is a **closed triangle**?",
    options: [
      { id: "a", text: "Shape A" },
      { id: "b", text: "Shape B" },
      { id: "c", text: "Shape C" },
      { id: "d", text: "Shape D" }
    ],
    answerId: "a",
    explanation: "Shape A is a triangle with no gaps. B and D are open, and C is a closed circle, not a triangle.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 240\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four shapes A to D open or closed\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"240\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Open or closed?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"34\" width=\"225\" height=\"90\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <polygon class=\"part\" points=\"122,50 162,110 82,110\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"34\" width=\"225\" height=\"90\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"56\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <path class=\"part\" d=\"M 410 70 A 35 35 0 1 0 410 108\" fill=\"none\" stroke=\"#333\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <rect class=\"part panel\" x=\"10\" y=\"134\" width=\"225\" height=\"90\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"156\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <circle class=\"part\" cx=\"122\" cy=\"180\" r=\"32\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"134\" width=\"225\" height=\"90\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"156\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <path class=\"part\" d=\"M 280 180 Q 310 150 340 180 T 400 180\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n</svg>", "alt": "Four panels. A is a closed triangle. B is an open C-shaped curve. C is a closed circle. D is an open wavy line."}
  },
  {
    id: "g5-maths-angles-a-q07",
    prompt: "Look at Read the angle. What **type** of angle is shown?",
    options: [
      { id: "a", text: "Obtuse" },
      { id: "b", text: "Straight" },
      { id: "c", text: "Right" },
      { id: "d", text: "Acute" }
    ],
    answerId: "d",
    explanation: "55\u00b0 is greater than 0\u00b0 and less than 90\u00b0, so the angle is acute.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 165\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Angle measuring 55 degrees\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"165\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Read the angle</text>\n  <line class=\"part arm\" x1=\"40\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"80\" y1=\"130\" x2=\"160.3\" y2=\"15.3\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"80\" cy=\"130\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 140 130 A 60 60 0 0 0 114.4 80.9\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"145\" y=\"110\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">55\u00b0</text>\n  <text class=\"label small\" x=\"220\" y=\"152\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The blue arc shows the opening of the angle.</text>\n</svg>", "alt": "A baseline with a second arm opening upward. A blue arc between them is labelled 55\u00b0."}
  },
  {
    id: "g5-maths-angles-a-q08",
    prompt: "Look at the clock at 3:00. What angle do the hands make?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "60\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "c",
    explanation: "From 12 to 3 is a quarter of the clock face, and a quarter of 360\u00b0 is 90\u00b0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 245\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Clock with hands at 3 o clock\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"245\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"200\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Clock hands at 3:00</text>\n  <circle class=\"part clock\" cx=\"200\" cy=\"130\" r=\"85\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle class=\"part hub\" cx=\"200\" cy=\"130\" r=\"4\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"200.0\" y1=\"49.0\" x2=\"200.0\" y2=\"57.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"200.0\" y=\"67.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <line class=\"tick\" x1=\"240.5\" y1=\"59.9\" x2=\"236.5\" y2=\"66.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"231.5\" y=\"75.4\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"tick\" x1=\"270.1\" y1=\"89.5\" x2=\"263.2\" y2=\"93.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"254.6\" y=\"98.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"tick\" x1=\"281.0\" y1=\"130.0\" x2=\"273.0\" y2=\"130.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"263.0\" y=\"130.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"tick\" x1=\"270.1\" y1=\"170.5\" x2=\"263.2\" y2=\"166.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"254.6\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"tick\" x1=\"240.5\" y1=\"200.1\" x2=\"236.5\" y2=\"193.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"231.5\" y=\"184.6\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"tick\" x1=\"200.0\" y1=\"211.0\" x2=\"200.0\" y2=\"203.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"200.0\" y=\"193.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick\" x1=\"159.5\" y1=\"200.1\" x2=\"163.5\" y2=\"193.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"168.5\" y=\"184.6\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"tick\" x1=\"129.9\" y1=\"170.5\" x2=\"136.8\" y2=\"166.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"145.4\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick\" x1=\"119.0\" y1=\"130.0\" x2=\"127.0\" y2=\"130.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"137.0\" y=\"130.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"tick\" x1=\"129.9\" y1=\"89.5\" x2=\"136.8\" y2=\"93.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"145.4\" y=\"98.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <line class=\"tick\" x1=\"159.5\" y1=\"59.9\" x2=\"163.5\" y2=\"66.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"168.5\" y=\"75.4\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <line class=\"part hour-hand\" x1=\"200\" y1=\"130\" x2=\"242.5\" y2=\"130.0\" stroke=\"#1565c0\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <line class=\"part minute-hand\" x1=\"200\" y1=\"130\" x2=\"200.0\" y2=\"68.8\" stroke=\"#e65100\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <text class=\"label small\" x=\"200\" y=\"230\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Blue = hour hand \u00b7 Orange = minute hand</text>\n</svg>", "alt": "A clock face. The minute hand points to 12 and the hour hand points to 3."}
  },
  {
    id: "g5-maths-angles-a-q09",
    prompt: "What is the smallest number of straight sides a polygon can have?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "Two straight sides cannot close a shape, so the smallest polygon is a triangle with 3 sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q10",
    prompt: "How many degrees are there in a half turn?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "270\u00b0" },
      { id: "d", text: "360\u00b0" }
    ],
    answerId: "b",
    explanation: "A full turn is 360\u00b0, so half a turn is 180\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q11",
    prompt: "An angle measures 200\u00b0. What type of angle is it?",
    options: [
      { id: "a", text: "Reflex" },
      { id: "b", text: "Straight" },
      { id: "c", text: "Obtuse" },
      { id: "d", text: "Acute" }
    ],
    answerId: "a",
    explanation: "An angle greater than 180\u00b0 but less than 360\u00b0 is a reflex angle, so 200\u00b0 is not obtuse.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q12",
    prompt: "Look at Quarter turn clockwise. The child starts facing North. After the turn, where does the child face?",
    options: [
      { id: "a", text: "West" },
      { id: "b", text: "East" },
      { id: "c", text: "South" },
      { id: "d", text: "North" }
    ],
    answerId: "b",
    explanation: "A quarter turn clockwise from North lands on East (N \u2192 E \u2192 S \u2192 W).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 235\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Compass facing North with quarter turn clockwise\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"235\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Quarter turn clockwise</text>\n  <circle class=\"part compass\" cx=\"140\" cy=\"120\" r=\"55\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"140.0\" y=\"49.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">N</text>\n  <text class=\"label\" x=\"211.0\" y=\"120.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">E</text>\n  <text class=\"label\" x=\"140.0\" y=\"191.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">S</text>\n  <text class=\"label\" x=\"69.0\" y=\"120.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">W</text>\n  <polygon class=\"part arrow\" points=\"140.0,75.0 130.4,136.7 149.6,136.7\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part hub\" cx=\"140\" cy=\"120\" r=\"5\" fill=\"#333\"/>\n  <text class=\"label\" x=\"140\" y=\"200\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Start: facing North</text>\n  <path class=\"arrow jump\" d=\"M 220 90 A 40 40 0 0 1 260 130\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <polygon class=\"arrow\" points=\"262,132 252,128 258,120\" fill=\"#e65100\"/>\n  <text class=\"label\" x=\"300\" y=\"100\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">\u00bc turn</text>\n  <text class=\"label\" x=\"300\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">clockwise</text>\n  <text class=\"label small\" x=\"220\" y=\"220\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Clockwise means the same way clock hands turn.</text>\n</svg>", "alt": "A compass rose with an orange arrow pointing North. A curved orange arrow shows a quarter turn clockwise."}
  },
  {
    id: "g5-maths-angles-a-q13",
    prompt: "Ravi is facing North. He turns 90\u00b0 clockwise. Which direction is he facing now?",
    options: [
      { id: "a", text: "North" },
      { id: "b", text: "West" },
      { id: "c", text: "South" },
      { id: "d", text: "East" }
    ],
    answerId: "d",
    explanation: "Clockwise from North goes to East first, while West would be the result of an anticlockwise turn.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q14",
    prompt: "Look at Angles on a straight line. One angle is 70\u00b0. What is the **missing** angle?",
    options: [
      { id: "a", text: "70\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "20\u00b0" },
      { id: "d", text: "110\u00b0" }
    ],
    answerId: "d",
    explanation: "Angles on a straight line add to 180\u00b0, so the missing angle is 180\u00b0 \u2212 70\u00b0 = 110\u00b0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Straight line with 70 degree angle and missing angle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Angles on a straight line</text>\n  <line class=\"part arm\" x1=\"30\" y1=\"140\" x2=\"450\" y2=\"140\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"240\" y1=\"140\" x2=\"240\" y2=\"40\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"240\" y1=\"140\" x2=\"281.0\" y2=\"27.2\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"240\" cy=\"140\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 180 140 A 60 60 0 0 0 260.5 83.6\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"175\" y=\"115\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">70\u00b0</text>\n  <path class=\"part arc\" d=\"M 258.8 88.3 A 55 55 0 0 0 300 140\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label\" x=\"290\" y=\"105\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <text class=\"label small\" x=\"240\" y=\"175\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">A straight line measures 180\u00b0.</text>\n</svg>", "alt": "A straight line with a ray from the middle. The left opening is labelled 70\u00b0. The right opening is labelled with a question mark."}
  },
  {
    id: "g5-maths-angles-a-q15",
    prompt: "What is the smaller angle between the hands of a clock at exactly 4 o'clock?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "100\u00b0" },
      { id: "c", text: "120\u00b0" },
      { id: "d", text: "150\u00b0" }
    ],
    answerId: "c",
    explanation: "Each gap between two numbers on a clock is 30\u00b0, and from 12 to 4 there are 4 gaps, so the angle is 4 \u00d7 30\u00b0 = 120\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q16",
    prompt: "In angle PQR, which point is the vertex?",
    options: [
      { id: "a", text: "Q" },
      { id: "b", text: "P" },
      { id: "c", text: "R" },
      { id: "d", text: "Both P and R" }
    ],
    answerId: "a",
    explanation: "The middle letter in an angle's name always names the vertex, so Q is the vertex of angle PQR.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q17",
    prompt: "A cupboard door is opened exactly halfway between fully closed and a right angle. What angle does the door make with the cupboard?",
    options: [
      { id: "a", text: "30\u00b0" },
      { id: "b", text: "135\u00b0" },
      { id: "c", text: "60\u00b0" },
      { id: "d", text: "45\u00b0" }
    ],
    answerId: "d",
    explanation: "Half of a right angle is 90\u00b0 \u00f7 2 = 45\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q18",
    prompt: "Asha draws one pentagon and one quadrilateral. How many sides has she drawn in all?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "A pentagon has 5 sides and a quadrilateral has 4, so together they have 5 + 4 = 9 sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q19",
    prompt: "A straight angle is split into two angles by a ray. One of them is 70\u00b0. What is the other?",
    options: [
      { id: "a", text: "20\u00b0" },
      { id: "b", text: "110\u00b0" },
      { id: "c", text: "100\u00b0" },
      { id: "d", text: "290\u00b0" }
    ],
    answerId: "b",
    explanation: "The two parts must add up to 180\u00b0, so the other angle is 180\u00b0 \u2212 70\u00b0 = 110\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q20",
    prompt: "Look at the clock at 2:00. What angle do the hands make?",
    options: [
      { id: "a", text: "30\u00b0" },
      { id: "b", text: "60\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "b",
    explanation: "Each hour mark is 30\u00b0. From 12 to 2 is 2 \u00d7 30\u00b0 = 60\u00b0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 245\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Clock with hands at 2 o clock\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"245\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"200\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Clock hands at 2:00</text>\n  <circle class=\"part clock\" cx=\"200\" cy=\"130\" r=\"85\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle class=\"part hub\" cx=\"200\" cy=\"130\" r=\"4\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"200.0\" y1=\"49.0\" x2=\"200.0\" y2=\"57.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"200.0\" y=\"67.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <line class=\"tick\" x1=\"240.5\" y1=\"59.9\" x2=\"236.5\" y2=\"66.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"231.5\" y=\"75.4\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"tick\" x1=\"270.1\" y1=\"89.5\" x2=\"263.2\" y2=\"93.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"254.6\" y=\"98.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"tick\" x1=\"281.0\" y1=\"130.0\" x2=\"273.0\" y2=\"130.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"263.0\" y=\"130.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"tick\" x1=\"270.1\" y1=\"170.5\" x2=\"263.2\" y2=\"166.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"254.6\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"tick\" x1=\"240.5\" y1=\"200.1\" x2=\"236.5\" y2=\"193.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"231.5\" y=\"184.6\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"tick\" x1=\"200.0\" y1=\"211.0\" x2=\"200.0\" y2=\"203.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"200.0\" y=\"193.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick\" x1=\"159.5\" y1=\"200.1\" x2=\"163.5\" y2=\"193.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"168.5\" y=\"184.6\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"tick\" x1=\"129.9\" y1=\"170.5\" x2=\"136.8\" y2=\"166.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"145.4\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick\" x1=\"119.0\" y1=\"130.0\" x2=\"127.0\" y2=\"130.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"137.0\" y=\"130.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"tick\" x1=\"129.9\" y1=\"89.5\" x2=\"136.8\" y2=\"93.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"145.4\" y=\"98.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <line class=\"tick\" x1=\"159.5\" y1=\"59.9\" x2=\"163.5\" y2=\"66.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"168.5\" y=\"75.4\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <line class=\"part hour-hand\" x1=\"200\" y1=\"130\" x2=\"236.8\" y2=\"108.8\" stroke=\"#1565c0\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <line class=\"part minute-hand\" x1=\"200\" y1=\"130\" x2=\"200.0\" y2=\"68.8\" stroke=\"#e65100\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <text class=\"label small\" x=\"200\" y=\"230\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each hour mark is 30\u00b0 around the clock.</text>\n</svg>", "alt": "A clock face. The minute hand points to 12 and the hour hand points to 2."}
  },
  {
    id: "g5-maths-angles-a-q21",
    prompt: "Sita faces East. She turns 90\u00b0 anticlockwise and then 180\u00b0 clockwise. Which direction is she facing now?",
    options: [
      { id: "a", text: "South" },
      { id: "b", text: "North" },
      { id: "c", text: "West" },
      { id: "d", text: "East" }
    ],
    answerId: "a",
    explanation: "Turning anticlockwise from East brings her to North, and a half turn from North brings her to South.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q22",
    prompt: "Three angles together make a full turn around a point. Two of them are 90\u00b0 and 150\u00b0. What is the third angle?",
    options: [
      { id: "a", text: "60\u00b0" },
      { id: "b", text: "140\u00b0" },
      { id: "c", text: "120\u00b0" },
      { id: "d", text: "210\u00b0" }
    ],
    answerId: "c",
    explanation: "Angles around a point add up to 360\u00b0, so the third angle is 360\u00b0 \u2212 90\u00b0 \u2212 150\u00b0 = 120\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q23",
    prompt: "A toy robot turns 45\u00b0 at a time. How many such turns does it need to make a three-quarter turn?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "6" },
      { id: "c", text: "4" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "A three-quarter turn is 270\u00b0, and 270\u00b0 \u00f7 45\u00b0 = 6 turns, while 8 turns would make a full turn.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-a-q24",
    prompt: "Through how many degrees does the minute hand turn between 2:00 and 2:20?",
    options: [
      { id: "a", text: "20\u00b0" },
      { id: "b", text: "100\u00b0" },
      { id: "c", text: "140\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "d",
    explanation: "In 20 minutes the minute hand moves from 12 to 4, which is 4 gaps \u00d7 30\u00b0 = 120\u00b0, not 20\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-angles-b-q01",
    prompt: "Look at Read the angle. What **type** of angle is shown?",
    options: [
      { id: "a", text: "Acute" },
      { id: "b", text: "Right" },
      { id: "c", text: "Straight" },
      { id: "d", text: "Obtuse" }
    ],
    answerId: "d",
    explanation: "140\u00b0 is greater than 90\u00b0 and less than 180\u00b0, so the angle is obtuse.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Angle measuring 140 degrees\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Read the angle</text>\n  <line class=\"part arm\" x1=\"40\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"80\" y1=\"130\" x2=\"-19.6\" y2=\"46.4\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"80\" cy=\"130\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 150 130 A 70 70 0 0 0 26.4 85.0\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"160\" y=\"95\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">140\u00b0</text>\n  <text class=\"label small\" x=\"220\" y=\"155\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Compare the opening with a square corner.</text>\n</svg>", "alt": "A baseline with a second arm opening wide. A blue arc between them is labelled 140\u00b0."}
  },
  {
    id: "g5-maths-angles-b-q02",
    prompt: "An angle measures 170\u00b0. What type of angle is it?",
    options: [
      { id: "a", text: "Acute" },
      { id: "b", text: "Straight" },
      { id: "c", text: "Obtuse" },
      { id: "d", text: "Reflex" }
    ],
    answerId: "c",
    explanation: "170\u00b0 is more than 90\u00b0 but still less than 180\u00b0, so it is obtuse and not yet a straight angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q03",
    prompt: "What are the two straight lines that form an angle called?",
    options: [
      { id: "a", text: "Arms" },
      { id: "b", text: "Vertices" },
      { id: "c", text: "Diagonals" },
      { id: "d", text: "Edges" }
    ],
    answerId: "a",
    explanation: "An angle is made of two arms that start from a common point called the vertex.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q04",
    prompt: "Look at the four shapes. Which one is a **pentagon**?",
    options: [
      { id: "a", text: "Shape A" },
      { id: "b", text: "Shape B" },
      { id: "c", text: "Shape C" },
      { id: "d", text: "Shape D" }
    ],
    answerId: "c",
    explanation: "A pentagon has 5 sides. Shape C is the only one with 5 sides.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 470 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four polygons find the pentagon\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"470\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which shape is a pentagon?</text>\n  <polygon class=\"part poly\" points=\"70.0,60.0 110.0,100.0 70.0,140.0 30.0,100.0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"70\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <polygon class=\"part poly\" points=\"180.0,60.0 214.6,80.0 214.6,120.0 180.0,140.0 145.4,120.0 145.4,80.0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"180\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <polygon class=\"part poly\" points=\"290.0,60.0 328.0,87.6 313.5,132.4 266.5,132.4 252.0,87.6\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"290\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <polygon class=\"part poly\" points=\"400.0,60.0 428.3,71.7 440.0,100.0 428.3,128.3 400.0,140.0 371.7,128.3 360.0,100.0 371.7,71.7\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"400\" y=\"158\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label small\" x=\"240\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Count the straight sides of each shape.</text>\n</svg>", "alt": "Four shapes. A has 4 sides, B has 6, C has 5 and D has 8."}
  },
  {
    id: "g5-maths-angles-b-q05",
    prompt: "Look at Half turn. The child starts facing East. After a half turn, where does the child face?",
    options: [
      { id: "a", text: "West" },
      { id: "b", text: "South" },
      { id: "c", text: "East" },
      { id: "d", text: "North" }
    ],
    answerId: "a",
    explanation: "A half turn is 180\u00b0. From East, the opposite direction is West.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 235\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Compass facing East with half turn\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"235\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Half turn</text>\n  <circle class=\"part compass\" cx=\"140\" cy=\"120\" r=\"55\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"140.0\" y=\"49.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">N</text>\n  <text class=\"label\" x=\"211.0\" y=\"120.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">E</text>\n  <text class=\"label\" x=\"140.0\" y=\"191.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">S</text>\n  <text class=\"label\" x=\"69.0\" y=\"120.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">W</text>\n  <polygon class=\"part arrow\" points=\"185.0,120.0 123.3,110.4 123.3,129.6\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part hub\" cx=\"140\" cy=\"120\" r=\"5\" fill=\"#333\"/>\n  <text class=\"label\" x=\"140\" y=\"200\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Start: facing East</text>\n  <path class=\"arrow jump\" d=\"M 220 80 A 50 50 0 0 1 220 160\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <polygon class=\"arrow\" points=\"220,162 214,152 226,152\" fill=\"#e65100\"/>\n  <text class=\"label\" x=\"300\" y=\"110\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">\u00bd turn</text>\n  <text class=\"label\" x=\"300\" y=\"130\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">(180\u00b0)</text>\n  <text class=\"label small\" x=\"220\" y=\"220\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">A half turn faces you the opposite way.</text>\n</svg>", "alt": "A compass with an orange arrow pointing East. A curved arrow shows a half turn of 180\u00b0."}
  },
  {
    id: "g5-maths-angles-b-q06",
    prompt: "Which of these angles is acute?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "89\u00b0" },
      { id: "c", text: "91\u00b0" },
      { id: "d", text: "180\u00b0" }
    ],
    answerId: "b",
    explanation: "Only 89\u00b0 is less than 90\u00b0, while 90\u00b0 is a right angle and 91\u00b0 is already obtuse.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q07",
    prompt: "Which of these is an open shape?",
    options: [
      { id: "a", text: "A triangle" },
      { id: "b", text: "A rectangle" },
      { id: "c", text: "A hexagon" },
      { id: "d", text: "The letter M" }
    ],
    answerId: "d",
    explanation: "The letter M has two loose ends that do not meet, so it is open, while the polygons are all closed.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q08",
    prompt: "At exactly 6 o'clock, what type of angle do the clock hands make?",
    options: [
      { id: "a", text: "Straight angle" },
      { id: "b", text: "Right angle" },
      { id: "c", text: "Obtuse angle" },
      { id: "d", text: "Acute angle" }
    ],
    answerId: "a",
    explanation: "At 6 o'clock the hands point to 12 and 6 in opposite directions, forming a straight line of 180\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q09",
    prompt: "How many degrees are there in a quarter turn?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "180\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "c",
    explanation: "A quarter of a full turn is 360\u00b0 \u00f7 4 = 90\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q10",
    prompt: "A rangoli border is a closed shape with 5 straight sides. What is it called?",
    options: [
      { id: "a", text: "Pentagon" },
      { id: "b", text: "Hexagon" },
      { id: "c", text: "Quadrilateral" },
      { id: "d", text: "Octagon" }
    ],
    answerId: "a",
    explanation: "A closed shape with 5 straight sides is a pentagon, while a hexagon has 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q11",
    prompt: "Look at Odd one out. Three angles are acute. Which panel is the **odd one out**?",
    options: [
      { id: "a", text: "Panel A" },
      { id: "b", text: "Panel B" },
      { id: "c", text: "Panel C" },
      { id: "d", text: "Panel D" }
    ],
    answerId: "c",
    explanation: "30\u00b0, 45\u00b0 and 60\u00b0 are all acute (less than 90\u00b0). Panel C shows 95\u00b0, which is obtuse.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four angles find the odd one out\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Odd one out</text>\n  <rect class=\"part panel\" x=\"10\" y=\"40\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"60\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <line class=\"part arm\" x1=\"130\" y1=\"95\" x2=\"170.0\" y2=\"95.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"130\" y1=\"95\" x2=\"164.6\" y2=\"75.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"130\" cy=\"95\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 144.0 95.0 A 14.0 14.0 0 0 0 142.1 88.0\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"151.3\" y=\"89.3\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">30\u00b0</text>\n  <rect class=\"part panel\" x=\"245\" y=\"40\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"60\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <line class=\"part arm\" x1=\"365\" y1=\"95\" x2=\"405.0\" y2=\"95.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"365\" y1=\"95\" x2=\"393.3\" y2=\"66.7\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"365\" cy=\"95\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 379.0 95.0 A 14.0 14.0 0 0 0 374.9 85.1\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"385.3\" y=\"86.6\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">45\u00b0</text>\n  <rect class=\"part panel\" x=\"10\" y=\"130\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"150\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <line class=\"part arm\" x1=\"130\" y1=\"185\" x2=\"170.0\" y2=\"185.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"130\" y1=\"185\" x2=\"126.5\" y2=\"145.2\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"130\" cy=\"185\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 144.0 185.0 A 14.0 14.0 0 0 0 128.8 171.1\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"144.9\" y=\"168.8\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">95\u00b0</text>\n  <rect class=\"part panel\" x=\"245\" y=\"130\" width=\"225\" height=\"80\" rx=\"8\" fill=\"#fafafa\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"150\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <line class=\"part arm\" x1=\"365\" y1=\"185\" x2=\"405.0\" y2=\"185.0\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"365\" y1=\"185\" x2=\"385.0\" y2=\"150.4\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"365\" cy=\"185\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part arc\" d=\"M 379.0 185.0 A 14.0 14.0 0 0 0 372.0 172.9\" fill=\"none\" stroke=\"#42a5f5\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"384.1\" y=\"174.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">60\u00b0</text>\n</svg>", "alt": "Four angle cards labelled with their measures: A 30\u00b0, B 45\u00b0, C 95\u00b0 and D 60\u00b0."}
  },
  {
    id: "g5-maths-angles-b-q12",
    prompt: "Arjun is facing South. He turns 90\u00b0 anticlockwise. Which direction is he facing now?",
    options: [
      { id: "a", text: "West" },
      { id: "b", text: "East" },
      { id: "c", text: "North" },
      { id: "d", text: "South" }
    ],
    answerId: "b",
    explanation: "Going anticlockwise the order is North, West, South, East, so a quarter turn anticlockwise from South points East.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q13",
    prompt: "Look at the clock at 4:00. What angle do the hands make?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "150\u00b0" },
      { id: "c", text: "60\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "d",
    explanation: "From 12 to 4 is 4 hour marks. Each mark is 30\u00b0, so 4 \u00d7 30\u00b0 = 120\u00b0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 245\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Clock with hands at 4 o clock\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"245\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"200\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Clock hands at 4:00</text>\n  <circle class=\"part clock\" cx=\"200\" cy=\"130\" r=\"85\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle class=\"part hub\" cx=\"200\" cy=\"130\" r=\"4\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"200.0\" y1=\"49.0\" x2=\"200.0\" y2=\"57.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"200.0\" y=\"67.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <line class=\"tick\" x1=\"240.5\" y1=\"59.9\" x2=\"236.5\" y2=\"66.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"231.5\" y=\"75.4\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"tick\" x1=\"270.1\" y1=\"89.5\" x2=\"263.2\" y2=\"93.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"254.6\" y=\"98.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"tick\" x1=\"281.0\" y1=\"130.0\" x2=\"273.0\" y2=\"130.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"263.0\" y=\"130.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"tick\" x1=\"270.1\" y1=\"170.5\" x2=\"263.2\" y2=\"166.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"254.6\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"tick\" x1=\"240.5\" y1=\"200.1\" x2=\"236.5\" y2=\"193.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"231.5\" y=\"184.6\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"tick\" x1=\"200.0\" y1=\"211.0\" x2=\"200.0\" y2=\"203.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"200.0\" y=\"193.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick\" x1=\"159.5\" y1=\"200.1\" x2=\"163.5\" y2=\"193.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"168.5\" y=\"184.6\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"tick\" x1=\"129.9\" y1=\"170.5\" x2=\"136.8\" y2=\"166.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"145.4\" y=\"161.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick\" x1=\"119.0\" y1=\"130.0\" x2=\"127.0\" y2=\"130.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"137.0\" y=\"130.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"tick\" x1=\"129.9\" y1=\"89.5\" x2=\"136.8\" y2=\"93.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"145.4\" y=\"98.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <line class=\"tick\" x1=\"159.5\" y1=\"59.9\" x2=\"163.5\" y2=\"66.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"168.5\" y=\"75.4\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <line class=\"part hour-hand\" x1=\"200\" y1=\"130\" x2=\"236.8\" y2=\"151.2\" stroke=\"#1565c0\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <line class=\"part minute-hand\" x1=\"200\" y1=\"130\" x2=\"200.0\" y2=\"68.8\" stroke=\"#e65100\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <text class=\"label small\" x=\"200\" y=\"230\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Minute hand at 12 \u00b7 Hour hand at 4</text>\n</svg>", "alt": "A clock face. The minute hand points to 12 and the hour hand points to 4."}
  },
  {
    id: "g5-maths-angles-b-q14",
    prompt: "Look at Angles around a point. Three angles are 90\u00b0 each. What is the **missing** angle?",
    options: [
      { id: "a", text: "45\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "180\u00b0" },
      { id: "d", text: "270\u00b0" }
    ],
    answerId: "b",
    explanation: "Angles around a point add to 360\u00b0. 360\u00b0 \u2212 90\u00b0 \u2212 90\u00b0 \u2212 90\u00b0 = 90\u00b0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 265\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Cross with three 90 degree labels and one question mark\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"265\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Angles around a point</text>\n  <line class=\"part arm\" x1=\"80\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"part arm\" x1=\"240\" y1=\"30\" x2=\"240\" y2=\"230\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle class=\"part vertex\" cx=\"240\" cy=\"130\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"280\" y=\"100\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">90\u00b0</text>\n  <text class=\"label\" x=\"280\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">90\u00b0</text>\n  <text class=\"label\" x=\"185\" y=\"100\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">90\u00b0</text>\n  <text class=\"label\" x=\"185\" y=\"170\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <text class=\"label small\" x=\"240\" y=\"250\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">A full turn around a point is 360\u00b0.</text>\n</svg>", "alt": "Two crossing lines make four right angles at the centre. Three sectors are labelled 90\u00b0 and one is labelled with a question mark."}
  },
  {
    id: "g5-maths-angles-b-q15",
    prompt: "Two angles of 35\u00b0 and 55\u00b0 are placed side by side with a common arm. What type of angle do they make together?",
    options: [
      { id: "a", text: "Acute angle" },
      { id: "b", text: "Straight angle" },
      { id: "c", text: "Obtuse angle" },
      { id: "d", text: "Right angle" }
    ],
    answerId: "d",
    explanation: "35\u00b0 + 55\u00b0 = 90\u00b0, which is exactly a right angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q16",
    prompt: "The minute hand of a clock moves clockwise from 3 to 7. Through how many degrees does it turn?",
    options: [
      { id: "a", text: "90\u00b0" },
      { id: "b", text: "150\u00b0" },
      { id: "c", text: "120\u00b0" },
      { id: "d", text: "210\u00b0" }
    ],
    answerId: "c",
    explanation: "From 3 to 7 there are 4 gaps of 30\u00b0 each, so the hand turns 4 \u00d7 30\u00b0 = 120\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q17",
    prompt: "Look at Name this angle. Using the three points, what is the correct name?",
    options: [
      { id: "a", text: "Angle BAC" },
      { id: "b", text: "Angle ABC" },
      { id: "c", text: "Angle ACB" },
      { id: "d", text: "Angle CAB" }
    ],
    answerId: "b",
    explanation: "The vertex letter goes in the middle, so the angle is named angle ABC (or CBA).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Angle ABC with points A B and C\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"180\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Name this angle</text>\n  <line class=\"part arm\" x1=\"126.0\" y1=\"85.8\" x2=\"220\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"220\" y1=\"120\" x2=\"314.0\" y2=\"85.8\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"220\" cy=\"120\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part point\" cx=\"126.0\" cy=\"85.8\" r=\"4\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part point\" cx=\"314.0\" cy=\"85.8\" r=\"4\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"126.0\" y=\"71.8\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <text class=\"label\" x=\"220\" y=\"142\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">B</text>\n  <text class=\"label\" x=\"314.0\" y=\"71.8\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <text class=\"label small\" x=\"220\" y=\"165\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The middle letter names the vertex.</text>\n</svg>", "alt": "Two arms meet at orange point B. Point A is on one arm and point C is on the other."}
  },
  {
    id: "g5-maths-angles-b-q18",
    prompt: "Angle XYZ measures 40\u00b0. Which two rays are its arms?",
    options: [
      { id: "a", text: "XY and XZ" },
      { id: "b", text: "Only XZ" },
      { id: "c", text: "ZX and ZY" },
      { id: "d", text: "YX and YZ" }
    ],
    answerId: "d",
    explanation: "Y is the middle letter and so it is the vertex, which means both arms start from Y: ray YX and ray YZ.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q19",
    prompt: "At which of these times do the clock hands make an obtuse angle?",
    options: [
      { id: "a", text: "5:00" },
      { id: "b", text: "3:00" },
      { id: "c", text: "1:00" },
      { id: "d", text: "6:00" }
    ],
    answerId: "a",
    explanation: "At 5:00 the angle is 5 \u00d7 30\u00b0 = 150\u00b0, which is obtuse, while 3:00 gives a right angle and 6:00 a straight angle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q20",
    prompt: "At exactly 10 o'clock, what is the REFLEX angle between the hands of a clock?",
    options: [
      { id: "a", text: "60\u00b0" },
      { id: "b", text: "120\u00b0" },
      { id: "c", text: "300\u00b0" },
      { id: "d", text: "240\u00b0" }
    ],
    answerId: "c",
    explanation: "The smaller angle from 10 to 12 is 2 \u00d7 30\u00b0 = 60\u00b0, so the reflex angle is 360\u00b0 \u2212 60\u00b0 = 300\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q21",
    prompt: "Look at Three-quarter turn anticlockwise. Starting facing North, where does the child face after the turn?",
    options: [
      { id: "a", text: "East" },
      { id: "b", text: "South" },
      { id: "c", text: "West" },
      { id: "d", text: "North" }
    ],
    answerId: "a",
    explanation: "Anticlockwise from North: N \u2192 W \u2192 S \u2192 E. Three quarter-turns land on East.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 240\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Compass with three quarter turn anticlockwise\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"240\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Three-quarter turn anticlockwise</text>\n  <circle class=\"part compass\" cx=\"140\" cy=\"125\" r=\"55\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"140.0\" y=\"54.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">N</text>\n  <text class=\"label\" x=\"211.0\" y=\"125.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">E</text>\n  <text class=\"label\" x=\"140.0\" y=\"196.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">S</text>\n  <text class=\"label\" x=\"69.0\" y=\"125.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">W</text>\n  <polygon class=\"part arrow\" points=\"140.0,80.0 130.4,141.7 149.6,141.7\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part hub\" cx=\"140\" cy=\"125\" r=\"5\" fill=\"#333\"/>\n  <text class=\"label\" x=\"140\" y=\"205\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Start: facing North</text>\n  <path class=\"arrow jump\" d=\"M 210 70 A 55 55 0 1 0 210 180\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <polygon class=\"arrow\" points=\"208,182 214,172 202,174\" fill=\"#e65100\"/>\n  <text class=\"label\" x=\"310\" y=\"110\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">\u00be turn</text>\n  <text class=\"label\" x=\"310\" y=\"130\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">anticlockwise</text>\n  <text class=\"label\" x=\"310\" y=\"150\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">(270\u00b0)</text>\n  <text class=\"label small\" x=\"240\" y=\"225\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Anticlockwise is opposite to clock hands.</text>\n</svg>", "alt": "A compass facing North with a curved arrow showing a three-quarter turn anticlockwise."}
  },
  {
    id: "g5-maths-angles-b-q22",
    prompt: "Look at Two equal angles. The upright arm makes a right angle with the baseline. One part is 45\u00b0. What is the **missing** part?",
    options: [
      { id: "a", text: "30\u00b0" },
      { id: "b", text: "45\u00b0" },
      { id: "c", text: "90\u00b0" },
      { id: "d", text: "135\u00b0" }
    ],
    answerId: "b",
    explanation: "A right angle is 90\u00b0. If one part is 45\u00b0, the other part is 90\u00b0 \u2212 45\u00b0 = 45\u00b0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Right angle with 45 degree ray and missing angle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Two equal angles</text>\n  <line class=\"part arm\" x1=\"60\" y1=\"150\" x2=\"380\" y2=\"150\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"220\" y1=\"150\" x2=\"220\" y2=\"40\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <line class=\"part arm\" x1=\"220\" y1=\"150\" x2=\"283.6\" y2=\"86.4\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <circle class=\"part vertex\" cx=\"220\" cy=\"150\" r=\"5\" fill=\"#e65100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"250\" y=\"125\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">45\u00b0</text>\n  <text class=\"label\" x=\"185\" y=\"100\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <text class=\"label small\" x=\"220\" y=\"175\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The upright arm makes a right angle with the baseline.</text>\n</svg>", "alt": "A baseline and an upright arm form a right angle. A ray at 45\u00b0 sits between them. One small angle is labelled 45\u00b0 and the other is labelled with a question mark."}
  },
  {
    id: "g5-maths-angles-b-q23",
    prompt: "A fan blade turns 30\u00b0 at a time. How many such turns make a straight angle?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "3" },
      { id: "c", text: "9" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "A straight angle is 180\u00b0, and 180\u00b0 \u00f7 30\u00b0 = 6 turns, while 12 turns would make a full turn.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-angles-b-q24",
    prompt: "What is the smaller angle between the hands of a clock at exactly 9:30?",
    options: [
      { id: "a", text: "75\u00b0" },
      { id: "b", text: "90\u00b0" },
      { id: "c", text: "105\u00b0" },
      { id: "d", text: "120\u00b0" }
    ],
    answerId: "c",
    explanation: "At 9:30 the minute hand is on 6 and the hour hand is halfway between 9 and 10, so the gap is 3\u00bd \u00d7 30\u00b0 = 105\u00b0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcd0",
    title: "Shapes and angles",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "An angle has two arms and a vertex. A square corner is ninety degrees.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Acute", reveal: "Less than 90 degrees", emoji: "\ud83d\udd39" },
      { label: "Right", reveal: "Exactly 90 degrees", emoji: "\u2b1c" },
      { label: "Obtuse", reveal: "Between 90 and 180", emoji: "\ud83d\udd36" },
      { label: "Polygons", reveal: "Closed straight-sided shapes", emoji: "\u2b21" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "An angle of 35 degrees is\u2026",
    options: [
        { id: "a", text: "Obtuse" },
        { id: "b", text: "Right" },
        { id: "c", text: "Acute" },
        { id: "d", text: "Straight" }
    ],
    answerId: "c",
    why: "Less than 90 means acute.",
    visual: "number-line",
    speak: "An angle of 35 degrees is\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Vertex plus two arms", "Know angle types", "Quarter turn is 90", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5MathsAngles: ChapterDef = {
  id: "shapes-angles",
  title: "Shapes and Angles",
  emoji: "\\ud83d\\udcd0",
  blurb: "Degrees, turns and polygons",
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

export const g5MathsAnglesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
