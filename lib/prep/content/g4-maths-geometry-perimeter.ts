import type { ChapterDef, PrepQuestion } from "../types";

/** Perimeter, Area & Symmetry - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-geoperim-a-q01",
    prompt: "Ishaan draws a triangle, a square and a pentagon on his slate. He counts all their corners together. How many corners does he count?",
    options: [
      { id: "a", text: "12 corners" },
      { id: "b", text: "7 corners" },
      { id: "c", text: "10 corners" },
      { id: "d", text: "15 corners" }
    ],
    answerId: "a",
    explanation: "A triangle has 3 corners, a square has 4 and a pentagon has 5, so 3 + 4 + 5 = 12 corners. 7 corners is tempting if you stop after the triangle and the square (3 + 4), but the pentagon's corners must be added too.",
    hints: ["A straight-sided shape has as many corners as sides. Count the corners of each shape on the slate, then add."]
  },
  {
    id: "g4-maths-geoperim-a-q02",
    prompt: "Pooja wants to draw a flat shape with only one square corner. Which shape could she draw?",
    options: [
      { id: "a", text: "square" },
      { id: "b", text: "triangle" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "circle" }
    ],
    answerId: "b",
    explanation: "A triangle can have one square corner, like the set square in a geometry box; its other two corners are then smaller. A square is tempting because its corners are right angles, but it always has four of them, never just one.",
    hints: ["Think of the set square in your geometry box. Which shape can Pooja draw with one square corner and pointy other corners?"]
  },
  {
    id: "g4-maths-geoperim-a-q03",
    prompt: "Kriti glues a gold border all around a square photo frame with sides of 15 cm. How long is the border?",
    options: [
      { id: "a", text: "60 cm" },
      { id: "b", text: "30 cm" },
      { id: "c", text: "225 cm" },
      { id: "d", text: "45 cm" }
    ],
    answerId: "a",
    explanation: "A square has 4 equal sides, so the border is 15 + 15 + 15 + 15 = 4 \u00d7 15 = 60 cm. 225 is tempting because 15 \u00d7 15 = 225, but that measures the space inside (area), not the length around.",
    hints: ["The border goes around all the sides, and a square's sides are all the same length."]
  },
  {
    id: "g4-maths-geoperim-a-q04",
    prompt: "Sunil wants to draw a rectangle with a perimeter of 16 cm on squared paper. Which size should he draw?",
    options: [
      { id: "a", text: "8 cm by 2 cm" },
      { id: "b", text: "5 cm by 3 cm" },
      { id: "c", text: "6 cm by 4 cm" },
      { id: "d", text: "7 cm by 3 cm" }
    ],
    answerId: "b",
    explanation: "The perimeter of a 5 cm by 3 cm rectangle is 5 + 3 + 5 + 3 = 16 cm. 8 cm by 2 cm is tempting because 8 \u00d7 2 = 16, but that is its area; its perimeter is 8 + 2 + 8 + 2 = 20 cm.",
    hints: ["For each size, add the two long sides and the two short sides. Compare the total with the perimeter Sunil wants."]
  },
  {
    id: "g4-maths-geoperim-a-q05",
    prompt: "How many flat faces does a cube have?",
    options: [
      { id: "a", text: "4 faces" },
      { id: "b", text: "8 faces" },
      { id: "c", text: "12 faces" },
      { id: "d", text: "6 faces" }
    ],
    answerId: "d",
    explanation: "A cube has 6 square faces: top, bottom, front, back, left and right. 8 is the number of corners and 12 is the number of edges, which is why they are tempting.",
    hints: ["Think of a dice: count the top and bottom, then the four faces around the sides."]
  },
  {
    id: "g4-maths-geoperim-a-q06",
    prompt: "The triangle has two equal sides. Four dotted lines, 1 to 4, are drawn on it. Which dotted line is a line of symmetry?",
    options: [
      { id: "a", text: "Line 1" },
      { id: "b", text: "Line 2" },
      { id: "c", text: "Line 3" },
      { id: "d", text: "Line 4" }
    ],
    answerId: "c",
    explanation: "Folding along Line 3, from the top corner straight down to the middle of the base, makes the two halves match exactly. Line 2 is tempting because it also cuts the triangle from a corner to the middle of a side, but the two parts it makes are different shapes.",
    hints: ["Imagine folding the paper along each dotted line. The two halves must land exactly on top of each other."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 290\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A triangle with two equal sloping sides and four numbered dotted lines across it\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"290\" fill=\"#fff\"/>\n  <g class=\"part sym-test\">\n  <polygon class=\"part shape\" points=\"50,210 254,210 152,40\" fill=\"#ffe0b2\" stroke=\"#e65100\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line class=\"axis\" x1=\"22.8\" y1=\"125\" x2=\"281.2\" y2=\"125\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  <text class=\"label option-label\" x=\"293.2\" y=\"141.0\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">1</text>\n  <line class=\"axis\" x1=\"34.7\" y1=\"218.5\" x2=\"233.6\" y2=\"99.5\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  <text class=\"label option-label\" x=\"245.6\" y=\"95.5\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">2</text>\n  <line class=\"axis\" x1=\"152\" y1=\"16.2\" x2=\"152\" y2=\"233.8\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  <text class=\"label option-label\" x=\"164\" y=\"249.8\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">3</text>\n  <line class=\"axis\" x1=\"73.12\" y1=\"237.2\" x2=\"162.2\" y2=\"14.5\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  <text class=\"label option-label\" x=\"174.2\" y=\"10.5\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">4</text>\n  </g>\n</svg>", "alt": "A triangle with two equal sloping sides and a flat base. Four dotted lines numbered 1 to 4 cross it: one goes straight down from the top corner to the middle of the base, one runs flat across the middle, one runs from a bottom corner to the middle of the opposite side, and one slants from the top corner to a point on the base that is not the middle."}
  },
  {
    id: "g4-maths-geoperim-a-q07",
    prompt: "Which of these objects is shaped most like a cylinder?",
    options: [
      { id: "a", text: "a can of juice" },
      { id: "b", text: "a brick" },
      { id: "c", text: "a cricket ball" },
      { id: "d", text: "a birthday cap" }
    ],
    answerId: "a",
    explanation: "A can has two flat circle ends and one curved side, just like a cylinder. A birthday cap is tempting because it is also curved, but it comes to a point, so it is a cone.",
    hints: ["Look for an object with a flat circle at both ends and a curved side joining them."]
  },
  {
    id: "g4-maths-geoperim-a-q08",
    prompt: "Each small square on the grid is 1 square unit. What is the area of the shaded shape?",
    options: [
      { id: "a", text: "16 square units" },
      { id: "b", text: "9 square units" },
      { id: "c", text: "10 square units" },
      { id: "d", text: "12 square units" }
    ],
    answerId: "c",
    explanation: "Count row by row: 2 + 4 + 4 = 10 squares, so the area is 10 square units. 16 is tempting, but that is the number of unit lengths around the edge (the perimeter), not the squares inside.",
    hints: ["Count the shaded squares one row at a time, then add the rows together."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 250 166\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A shaded shape made of whole squares on a grid\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"250\" height=\"166\" fill=\"#fff\"/>\n  <g class=\"part grid-shape\">\n  <line class=\"guide grid\" x1=\"23\" y1=\"22\" x2=\"23\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"57\" y1=\"22\" x2=\"57\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"91\" y1=\"22\" x2=\"91\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"125\" y1=\"22\" x2=\"125\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"159\" y1=\"22\" x2=\"159\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"193\" y1=\"22\" x2=\"193\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"227\" y1=\"22\" x2=\"227\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"23\" y1=\"22\" x2=\"227\" y2=\"22\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"23\" y1=\"56\" x2=\"227\" y2=\"56\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"23\" y1=\"90\" x2=\"227\" y2=\"90\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"23\" y1=\"124\" x2=\"227\" y2=\"124\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"23\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"57\" y=\"22\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"57\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"57\" y=\"90\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"91\" y=\"22\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"91\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"91\" y=\"90\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"125\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"125\" y=\"90\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"159\" y=\"90\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#90caf9\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <line class=\"part outline\" x1=\"23\" y1=\"56\" x2=\"57\" y2=\"56\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"23\" y1=\"90\" x2=\"57\" y2=\"90\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"23\" y1=\"56\" x2=\"23\" y2=\"90\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"57\" y1=\"22\" x2=\"91\" y2=\"22\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"57\" y1=\"22\" x2=\"57\" y2=\"56\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"57\" y1=\"124\" x2=\"91\" y2=\"124\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"57\" y1=\"90\" x2=\"57\" y2=\"124\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"91\" y1=\"22\" x2=\"125\" y2=\"22\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"125\" y1=\"22\" x2=\"125\" y2=\"56\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"91\" y1=\"124\" x2=\"125\" y2=\"124\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"125\" y1=\"56\" x2=\"159\" y2=\"56\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"159\" y1=\"56\" x2=\"159\" y2=\"90\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"125\" y1=\"124\" x2=\"159\" y2=\"124\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"159\" y1=\"90\" x2=\"193\" y2=\"90\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"159\" y1=\"124\" x2=\"193\" y2=\"124\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"193\" y1=\"90\" x2=\"193\" y2=\"124\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n  <text class=\"label small\" x=\"125\" y=\"156\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">Each small square = 1 square unit</text>\n</svg>", "alt": "A shaded shape on a square grid: 2 squares in the top row, 4 in the middle row and 4 in the bottom row."}
  },
  {
    id: "g4-maths-geoperim-a-q09",
    prompt: "In plain capital letters, which letter has a line of symmetry going across (top to bottom fold) but NOT one going up and down?",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "H" },
      { id: "c", text: "N" },
      { id: "d", text: "E" }
    ],
    answerId: "d",
    explanation: "E folds top-to-bottom onto itself, but its left and right halves do not match. H is tempting because it has the across line too, but it also has an up-and-down line, so it does not fit 'NOT'.",
    hints: ["Fold each letter so the top meets the bottom, then so the left meets the right. Only the first fold should work."]
  },
  {
    id: "g4-maths-geoperim-a-q10",
    prompt: "Kabir bends a piece of wire into a triangle with sides of 7 cm, 5 cm and 6 cm, with no wire left over. How long was the wire?",
    options: [
      { id: "a", text: "13 cm" },
      { id: "b", text: "210 cm" },
      { id: "c", text: "18 cm" },
      { id: "d", text: "12 cm" }
    ],
    answerId: "c",
    explanation: "The wire goes once round the triangle, so its length is the perimeter: 7 + 5 + 6 = 18 cm. 210 cm is tempting if you multiply the sides (7 \u00d7 5 \u00d7 6), but going round means adding the lengths.",
    hints: ["The wire runs once round all three sides of the triangle, so put the side lengths together."]
  },
  {
    id: "g4-maths-geoperim-a-q11",
    prompt: "A school garden is shaped like the letter T, as drawn on the grid. Each small square has sides of 1 m. How much fencing is needed to go all the way around it?",
    options: [
      { id: "a", text: "8 m" },
      { id: "b", text: "18 m" },
      { id: "c", text: "16 m" },
      { id: "d", text: "12 m" }
    ],
    answerId: "b",
    explanation: "Walk round the outline counting square edges: top 5, the two ends 1 + 1, under the bar 2 + 2, the stem sides 3 + 3 and its bottom 1. 5 + 2 + 4 + 6 + 1 = 18 m. 8 m is tempting, but that counts the squares inside (area), not the edges around.",
    hints: ["Trace the thick outline with your finger and count every square edge you pass, including the short ones under the bar."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 240 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A T-shaped garden on a grid\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"240\" height=\"200\" fill=\"#fff\"/>\n  <g class=\"part grid-shape\">\n  <line class=\"guide grid\" x1=\"30\" y1=\"28\" x2=\"30\" y2=\"172\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"66\" y1=\"28\" x2=\"66\" y2=\"172\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"102\" y1=\"28\" x2=\"102\" y2=\"172\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"138\" y1=\"28\" x2=\"138\" y2=\"172\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"174\" y1=\"28\" x2=\"174\" y2=\"172\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"210\" y1=\"28\" x2=\"210\" y2=\"172\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"28\" x2=\"210\" y2=\"28\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"64\" x2=\"210\" y2=\"64\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"100\" x2=\"210\" y2=\"100\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"136\" x2=\"210\" y2=\"136\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"172\" x2=\"210\" y2=\"172\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"30\" y=\"28\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"66\" y=\"28\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"102\" y=\"28\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"102\" y=\"64\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"102\" y=\"100\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"102\" y=\"136\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"138\" y=\"28\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <rect class=\"part cell filled\" x=\"174\" y=\"28\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#90a4ae\" stroke-width=\"0.6\"/>\n  <line class=\"part outline\" x1=\"30\" y1=\"28\" x2=\"66\" y2=\"28\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"30\" y1=\"64\" x2=\"66\" y2=\"64\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"30\" y1=\"28\" x2=\"30\" y2=\"64\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"66\" y1=\"28\" x2=\"102\" y2=\"28\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"66\" y1=\"64\" x2=\"102\" y2=\"64\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"102\" y1=\"28\" x2=\"138\" y2=\"28\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"102\" y1=\"64\" x2=\"102\" y2=\"100\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"138\" y1=\"64\" x2=\"138\" y2=\"100\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"102\" y1=\"100\" x2=\"102\" y2=\"136\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"138\" y1=\"100\" x2=\"138\" y2=\"136\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"102\" y1=\"172\" x2=\"138\" y2=\"172\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"102\" y1=\"136\" x2=\"102\" y2=\"172\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"138\" y1=\"136\" x2=\"138\" y2=\"172\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"138\" y1=\"28\" x2=\"174\" y2=\"28\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"138\" y1=\"64\" x2=\"174\" y2=\"64\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"174\" y1=\"28\" x2=\"210\" y2=\"28\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"174\" y1=\"64\" x2=\"210\" y2=\"64\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part outline\" x1=\"210\" y1=\"28\" x2=\"210\" y2=\"64\" stroke=\"#0d47a1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n  <text class=\"label small\" x=\"120\" y=\"18\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">1 square = 1 m by 1 m</text>\n</svg>", "alt": "A T-shaped garden on a grid: a top bar 5 squares long and 1 square tall, with a stem 1 square wide going down 3 squares from the middle."}
  },
  {
    id: "g4-maths-geoperim-a-q12",
    prompt: "A rectangle is 11 cm long. Its perimeter is 34 cm. How wide is it?",
    options: [
      { id: "a", text: "23 cm" },
      { id: "b", text: "17 cm" },
      { id: "c", text: "8 cm" },
      { id: "d", text: "6 cm" }
    ],
    answerId: "d",
    explanation: "One length plus one width is half the perimeter: 34 \u00f7 2 = 17 cm. So width = 17 \u2212 11 = 6 cm. Check: 11 + 6 + 11 + 6 = 34. 23 cm is tempting (34 \u2212 11), but that forgets there are two lengths and two widths.",
    hints: ["Halve the perimeter first to get one length plus one width. Then take away the length."]
  },
  {
    id: "g4-maths-geoperim-a-q13",
    prompt: "Each net is made of 6 equal squares. Which net can be folded to make a cube?",
    options: [
      { id: "a", text: "Net A" },
      { id: "b", text: "Net B" },
      { id: "c", text: "Net C" },
      { id: "d", text: "Net D" }
    ],
    answerId: "b",
    explanation: "Net B is a row of four squares that wrap around to make the sides, with one square folding up as the top and one folding down as the bottom. Net A is tempting because it is neat and tidy, but its two rows of three overlap when folded and leave two faces open.",
    hints: ["Fold each net in your head. A cube needs a top, a bottom and four sides, with no squares overlapping."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 410 392\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four nets of six squares labelled A to D\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"410\" height=\"392\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"205.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which net folds into a cube?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"36\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"69.0\" y=\"84.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"93.0\" y=\"84.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"117.0\" y=\"84.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"69.0\" y=\"108.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"93.0\" y=\"108.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"117.0\" y=\"108.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"105.0\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net A</text>\n  <rect class=\"part panel\" x=\"210\" y=\"36\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"281.0\" y=\"72.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"257.0\" y=\"96.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"281.0\" y=\"96.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"305.0\" y=\"96.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"329.0\" y=\"96.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"281.0\" y=\"120.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"305.0\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net B</text>\n  <rect class=\"part panel\" x=\"10\" y=\"214\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"57.0\" y=\"262.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"81.0\" y=\"262.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"57.0\" y=\"286.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"81.0\" y=\"286.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"105.0\" y=\"286.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"129.0\" y=\"286.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"105.0\" y=\"374\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net C</text>\n  <rect class=\"part panel\" x=\"210\" y=\"214\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"245.0\" y=\"262.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"269.0\" y=\"262.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"293.0\" y=\"262.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"317.0\" y=\"262.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"341.0\" y=\"262.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"269.0\" y=\"286.0\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"305.0\" y=\"374\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net D</text>\n</svg>", "alt": "Four nets of six squares. Net A: two rows of three squares forming a rectangle. Net B: a row of four with one square above and one below the second square. Net C: a row of four with two squares above the first two. Net D: a row of five with one square below the second."}
  },
  {
    id: "g4-maths-geoperim-a-q14",
    prompt: "Arnav draws a square and both of its diagonals, as shown. How many triangles of any size can he find in the figure?",
    options: [
      { id: "a", text: "8 triangles" },
      { id: "b", text: "4 triangles" },
      { id: "c", text: "6 triangles" },
      { id: "d", text: "10 triangles" }
    ],
    answerId: "a",
    explanation: "There are 4 small triangles meeting at the centre. Each diagonal also cuts the square into 2 big triangles, and there are 2 diagonals, giving 4 big ones. 4 + 4 = 8. 4 triangles is tempting, but it counts only the small ones.",
    hints: ["First count the small triangles around the centre. Then look for bigger triangles made by joining two small ones."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 220 214\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A square with both diagonals drawn\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"220\" height=\"214\" fill=\"#fff\"/>\n  <g class=\"part seg-figure\">\n  <line class=\"part seg\" x1=\"30\" y1=\"20\" x2=\"190\" y2=\"20\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"190\" y1=\"20\" x2=\"190\" y2=\"180\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"190\" y1=\"180\" x2=\"30\" y2=\"180\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"30\" y1=\"180\" x2=\"30\" y2=\"20\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"30\" y1=\"20\" x2=\"190\" y2=\"180\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"190\" y1=\"20\" x2=\"30\" y2=\"180\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n  <text class=\"label small\" x=\"110\" y=\"206\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">Arnav's figure</text>\n</svg>", "alt": "A square with both diagonals drawn, crossing at the centre."}
  },
  {
    id: "g4-maths-geoperim-a-q15",
    prompt: "Coach Ravi's team jogs 3 times around the edge of a rectangular ground that is 120 m long and 70 m wide. How far do they jog?",
    options: [
      { id: "a", text: "570 m" },
      { id: "b", text: "380 m" },
      { id: "c", text: "8,400 m" },
      { id: "d", text: "1,140 m" }
    ],
    answerId: "d",
    explanation: "One round is the perimeter: 120 + 70 + 120 + 70 = 380 m. Three rounds = 3 \u00d7 380 = 1,140 m. 570 m is tempting because 3 \u00d7 (120 + 70) = 570, but one round has two lengths and two widths, not one of each.",
    hints: ["Find the distance for one round of the ground first. Then think about how many rounds the team jogs."]
  },
  {
    id: "g4-maths-geoperim-a-q16",
    prompt: "A tent is shaped like a square pyramid: a square base and four triangle faces that meet at the top. How many corners does it have?",
    options: [
      { id: "a", text: "4 corners" },
      { id: "b", text: "8 corners" },
      { id: "c", text: "5 corners" },
      { id: "d", text: "6 corners" }
    ],
    answerId: "c",
    explanation: "The square base has 4 corners and the four triangles meet at 1 more corner at the top: 4 + 1 = 5. 4 corners is tempting because the base is a square, but it forgets the top point.",
    hints: ["Count the corners of the base, then look for any corner that is not on the base."]
  },
  {
    id: "g4-maths-geoperim-a-q17",
    prompt: "Which shape is the odd one out because its sides are NOT all the same length?",
    options: [
      { id: "a", text: "a square" },
      { id: "b", text: "an equilateral triangle" },
      { id: "c", text: "a rectangle 6 cm by 3 cm" },
      { id: "d", text: "a rhombus" }
    ],
    answerId: "c",
    explanation: "A square, an equilateral triangle and a rhombus all have equal sides. A 6 cm by 3 cm rectangle has two sides of 6 cm and two of 3 cm. The rhombus is tempting because it looks slanted and different, but its four sides are equal.",
    hints: ["Do not judge by how slanted a shape looks. Check only whether every side has the same length."]
  },
  {
    id: "g4-maths-geoperim-a-q18",
    prompt: "The dotted line is a mirror line. The 'Given' grid shows only the left half of a design. Which grid, A to D, shows the design correctly completed so that it is symmetrical about the dotted line?",
    options: [
      { id: "a", text: "Grid A" },
      { id: "b", text: "Grid B" },
      { id: "c", text: "Grid C" },
      { id: "d", text: "Grid D" }
    ],
    answerId: "b",
    explanation: "In Grid B every shaded square on the left has a partner the same distance from the mirror line on the right, so the halves match like a reflection. Grid A is tempting because its right half has the same pattern, but it is copied (slid across), not flipped, so the squares sit at the wrong distances from the line.",
    hints: ["Pick a shaded square on the left, count its distance to the dotted line, then find its partner that far on the right."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 526 294\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A half design on the left of a vertical mirror line, and four completed designs labelled A to D\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"526\" height=\"294\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"263.0\" y=\"20\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Complete the design</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"15\" y1=\"98.0\" x2=\"15\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"37\" y1=\"98.0\" x2=\"37\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"59\" y1=\"98.0\" x2=\"59\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"81\" y1=\"98.0\" x2=\"81\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"103\" y1=\"98.0\" x2=\"103\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"125\" y1=\"98.0\" x2=\"125\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"147\" y1=\"98.0\" x2=\"147\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"98.0\" x2=\"147\" y2=\"98.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"120.0\" x2=\"147\" y2=\"120.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"142.0\" x2=\"147\" y2=\"142.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"164.0\" x2=\"147\" y2=\"164.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"186.0\" x2=\"147\" y2=\"186.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"15\" y=\"98.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"15\" y=\"164.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"37\" y=\"120.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"37\" y=\"164.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"59\" y=\"120.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"59\" y=\"142.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"81\" y1=\"92\" x2=\"81\" y2=\"192\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"81.0\" y=\"210.0\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Given</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"202\" y1=\"34\" x2=\"202\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"224\" y1=\"34\" x2=\"224\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"246\" y1=\"34\" x2=\"246\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"268\" y1=\"34\" x2=\"268\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"290\" y1=\"34\" x2=\"290\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"312\" y1=\"34\" x2=\"312\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"334\" y1=\"34\" x2=\"334\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"34\" x2=\"334\" y2=\"34\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"56\" x2=\"334\" y2=\"56\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"78\" x2=\"334\" y2=\"78\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"100\" x2=\"334\" y2=\"100\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"122\" x2=\"334\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"202\" y=\"34\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"202\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"224\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"224\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"246\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"246\" y=\"78\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"268\" y=\"34\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"268\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"290\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"290\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"312\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"312\" y=\"78\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"268\" y1=\"28\" x2=\"268\" y2=\"128\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"268.0\" y=\"146\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"369\" y1=\"34\" x2=\"369\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"391\" y1=\"34\" x2=\"391\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"413\" y1=\"34\" x2=\"413\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"435\" y1=\"34\" x2=\"435\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"457\" y1=\"34\" x2=\"457\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"479\" y1=\"34\" x2=\"479\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"501\" y1=\"34\" x2=\"501\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"34\" x2=\"501\" y2=\"34\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"56\" x2=\"501\" y2=\"56\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"78\" x2=\"501\" y2=\"78\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"100\" x2=\"501\" y2=\"100\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"122\" x2=\"501\" y2=\"122\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"369\" y=\"34\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"369\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"391\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"391\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"413\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"413\" y=\"78\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"435\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"435\" y=\"78\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"457\" y=\"56\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"457\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"479\" y=\"34\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"479\" y=\"100\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"435\" y1=\"28\" x2=\"435\" y2=\"128\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"435.0\" y=\"146\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"202\" y1=\"162\" x2=\"202\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"224\" y1=\"162\" x2=\"224\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"246\" y1=\"162\" x2=\"246\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"268\" y1=\"162\" x2=\"268\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"290\" y1=\"162\" x2=\"290\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"312\" y1=\"162\" x2=\"312\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"334\" y1=\"162\" x2=\"334\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"162\" x2=\"334\" y2=\"162\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"184\" x2=\"334\" y2=\"184\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"206\" x2=\"334\" y2=\"206\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"228\" x2=\"334\" y2=\"228\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"202\" y1=\"250\" x2=\"334\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"202\" y=\"162\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"202\" y=\"228\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"224\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"224\" y=\"228\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"246\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"246\" y=\"206\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"268\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"268\" y=\"206\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"290\" y=\"162\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"290\" y=\"206\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"312\" y=\"162\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"312\" y=\"228\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"268\" y1=\"156\" x2=\"268\" y2=\"256\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"268.0\" y=\"274\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"369\" y1=\"162\" x2=\"369\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"391\" y1=\"162\" x2=\"391\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"413\" y1=\"162\" x2=\"413\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"435\" y1=\"162\" x2=\"435\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"457\" y1=\"162\" x2=\"457\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"479\" y1=\"162\" x2=\"479\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"501\" y1=\"162\" x2=\"501\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"162\" x2=\"501\" y2=\"162\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"184\" x2=\"501\" y2=\"184\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"206\" x2=\"501\" y2=\"206\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"228\" x2=\"501\" y2=\"228\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"369\" y1=\"250\" x2=\"501\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"369\" y=\"162\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"369\" y=\"228\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"391\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"391\" y=\"228\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"413\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"413\" y=\"206\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"435\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"435\" y=\"206\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"457\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"457\" y=\"228\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"479\" y=\"184\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"479\" y=\"228\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"435\" y1=\"156\" x2=\"435\" y2=\"256\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"435.0\" y=\"274\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">D</text>\n  <line class=\"guide\" x1=\"189\" y1=\"40\" x2=\"189\" y2=\"280\" stroke=\"#bbb\" stroke-width=\"1\"/>\n</svg>", "alt": "Five small grids, each 6 squares wide and 4 tall with a dotted mirror line down the middle. The first shows only the left half of a design. Grids A to D show four different ways of filling the right half."}
  },
  {
    id: "g4-maths-geoperim-a-q19",
    prompt: "Pallavi covers a notebook cover 20 cm long and 10 cm wide with square stickers. Each sticker is 5 cm by 5 cm. How many stickers does she need to cover it exactly?",
    options: [
      { id: "a", text: "40 stickers" },
      { id: "b", text: "12 stickers" },
      { id: "c", text: "6 stickers" },
      { id: "d", text: "8 stickers" }
    ],
    answerId: "d",
    explanation: "Along the 20 cm side, 20 \u00f7 5 = 4 stickers fit. Along the 10 cm side, 10 \u00f7 5 = 2 fit. So 4 \u00d7 2 = 8 stickers. 40 is tempting because 200 \u00f7 5 = 40, but each sticker covers 5 \u00d7 5 = 25 square cm, not 5.",
    hints: ["Work out how many stickers fit along the long side and along the short side, then make rows."]
  },
  {
    id: "g4-maths-geoperim-a-q20",
    prompt: "A window has 6 equal square panes, arranged as shown. Counting squares too, how many rectangles of any size can you find in the figure?",
    options: [
      { id: "a", text: "6 rectangles" },
      { id: "b", text: "12 rectangles" },
      { id: "c", text: "18 rectangles" },
      { id: "d", text: "17 rectangles" }
    ],
    answerId: "c",
    explanation: "Count by size: 1 pane: 6; 2 side by side: 4; 2 one above the other: 3; 3 in a row: 2; 2 \u00d7 2 blocks: 2; the whole window: 1. Total 6 + 4 + 3 + 2 + 2 + 1 = 18. 6 is tempting, but that counts only the small panes.",
    hints: ["Sort rectangles by size: one pane, two panes across, two panes down, three across, four in a block, and the whole window."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A rectangle divided into 3 columns and 2 rows of equal squares\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"label small\" x=\"130\" y=\"18\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">Window with 6 panes</text>\n  <g class=\"part seg-figure\">\n  <line class=\"part seg\" x1=\"31\" y1=\"26\" x2=\"229\" y2=\"26\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"31\" y1=\"92\" x2=\"229\" y2=\"92\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"31\" y1=\"158\" x2=\"229\" y2=\"158\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"31\" y1=\"26\" x2=\"31\" y2=\"158\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"97\" y1=\"26\" x2=\"97\" y2=\"158\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"163\" y1=\"26\" x2=\"163\" y2=\"158\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"229\" y1=\"26\" x2=\"229\" y2=\"158\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n</svg>", "alt": "A rectangle split into 3 columns and 2 rows, making 6 equal squares."}
  },
  {
    id: "g4-maths-geoperim-a-q21",
    prompt: "Divya has a square card with sides of 6 cm. She cuts a small square with sides of 2 cm out of one corner. What is the perimeter of the card that is left?",
    options: [
      { id: "a", text: "24 cm" },
      { id: "b", text: "20 cm" },
      { id: "c", text: "28 cm" },
      { id: "d", text: "32 cm" }
    ],
    answerId: "a",
    explanation: "Cutting the corner removes 2 cm from two outside edges but adds two new inside edges of 2 cm each, so the perimeter stays 4 \u00d7 6 = 24 cm. 20 cm is tempting if you only subtract the 2 + 2 cm that was removed and forget the two new edges.",
    hints: ["Sketch the card after the cut. The two removed edges are replaced by two new edges; compare their lengths."]
  },
  {
    id: "g4-maths-geoperim-a-q22",
    prompt: "The figure shows a tangram: a big square cut into 7 pieces. L = large triangle, M = medium triangle, S = small triangle, Sq = square, P = parallelogram. If one small triangle S has an area of 1 unit, what is the area of the whole big square?",
    options: [
      { id: "a", text: "16 units" },
      { id: "b", text: "7 units" },
      { id: "c", text: "8 units" },
      { id: "d", text: "12 units" }
    ],
    answerId: "a",
    explanation: "Two small triangles fit exactly on the square, on the parallelogram and on the medium triangle, so each of those is 2 units. Four small triangles fit on a large triangle, so each L is 4 units. Total = 4 + 4 + 2 + 2 + 2 + 1 + 1 = 16 units. 7 is tempting, but that is the number of pieces, not their area.",
    hints: ["Find how many small triangles fit on each other piece. Then add up all seven pieces in small-triangle units."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 270\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A seven-piece tangram square with pieces labelled L, L, M, S, S, Sq and P\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"270\" fill=\"#fff\"/>\n  <g class=\"part tangram\">\n  <polygon class=\"part piece\" points=\"26,238 130,134 26,30\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"60.7\" y=\"139.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  <polygon class=\"part piece\" points=\"26,30 130,134 234,30\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"130.0\" y=\"69.7\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  <polygon class=\"part piece\" points=\"130,238 234,238 234,134\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"199.3\" y=\"208.3\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">M</text>\n  <polygon class=\"part piece\" points=\"130,134 182,186 234,134 182,82\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"182.0\" y=\"139.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sq</text>\n  <polygon class=\"part piece\" points=\"182,82 234,134 234,30\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"216.7\" y=\"87.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">S</text>\n  <polygon class=\"part piece\" points=\"78,186 130,134 182,186\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"130.0\" y=\"173.7\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">S</text>\n  <polygon class=\"part piece\" points=\"26,238 130,238 182,186 78,186\" fill=\"#80deea\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"104.0\" y=\"217.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  </g>\n</svg>", "alt": "A tangram square made of two large triangles (L), one medium triangle (M), two small triangles (S), one square (Sq) and one parallelogram (P)."}
  },
  {
    id: "g4-maths-geoperim-a-q23",
    prompt: "Yash builds a big cube from 27 small cubes (3 along each edge) and paints the whole outside red. How many small cubes have red paint on exactly 3 of their faces?",
    options: [
      { id: "a", text: "6 cubes" },
      { id: "b", text: "12 cubes" },
      { id: "c", text: "27 cubes" },
      { id: "d", text: "8 cubes" }
    ],
    answerId: "d",
    explanation: "Only a small cube at a corner of the big cube shows 3 faces to the outside. A cube has 8 corners, so 8 small cubes have 3 red faces. 6 is tempting because a cube has 6 faces, but the small cube in the middle of each face shows only 1 red face.",
    hints: ["Think about where a small cube must sit to have three of its faces on the outside at once."]
  },
  {
    id: "g4-maths-geoperim-a-q24",
    prompt: "Gauri folds this net to make a number cube. Which number will be on the face opposite the face marked 2?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "4" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "Faces that touch in the net become neighbours, so 1 and 3 cannot be opposite 2. When the net folds, the 4 swings up beside the 2 and the 5 lands across from it (1 is across from 4, and 3 is across from 6). 4 is tempting because it does not touch 2 in the flat net, but after folding it meets 2 along an edge.",
    hints: ["Cross out every number touching the 2 in the net. Then fold the staircase in your head to see which face lands across from it."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 244 184\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A staircase-shaped cube net with faces numbered 1 to 6\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"244\" height=\"184\" fill=\"#fff\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"26\" y=\"20\" width=\"48\" height=\"48\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"50.0\" y=\"52.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <rect class=\"part face-cell\" x=\"74\" y=\"20\" width=\"48\" height=\"48\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"98.0\" y=\"52.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <rect class=\"part face-cell\" x=\"74\" y=\"68\" width=\"48\" height=\"48\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"98.0\" y=\"100.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part face-cell\" x=\"122\" y=\"68\" width=\"48\" height=\"48\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"146.0\" y=\"100.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part face-cell\" x=\"122\" y=\"116\" width=\"48\" height=\"48\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"146.0\" y=\"148.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part face-cell\" x=\"170\" y=\"116\" width=\"48\" height=\"48\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"194.0\" y=\"148.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  </g>\n</svg>", "alt": "A staircase-shaped net: 1 and 2 in the top row; 3 and 4 in the middle row with 3 under 2; 5 and 6 in the bottom row with 5 under 4."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-geoperim-b-q01",
    prompt: "Joseph's clue card says: 'My 4 sides are all the same length, yet none of my corners is a right angle.' Which shape is on the card?",
    options: [
      { id: "a", text: "rhombus" },
      { id: "b", text: "square" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "kite" }
    ],
    answerId: "a",
    explanation: "A rhombus has 4 equal sides and slanted corners. A square is tempting because it also has 4 equal sides, but all of its corners are right angles, so it fails the second clue.",
    hints: ["Both clues on the card must be true: same-length sides AND no corner like a book's corner. Check each shape against both."]
  },
  {
    id: "g4-maths-geoperim-b-q02",
    prompt: "The five-sided shape is drawn on a dot grid. How many of its corners are right angles?",
    options: [
      { id: "a", text: "2 right angles" },
      { id: "b", text: "4 right angles" },
      { id: "c", text: "3 right angles" },
      { id: "d", text: "5 right angles" }
    ],
    answerId: "c",
    explanation: "The bottom-left, bottom-right and top-left corners are square corners, so there are 3 right angles. The two corners at the ends of the slanted side are wider than a right angle. 4 is tempting because the shape looks like a square with a corner cut off, but cutting the corner removed one right angle.",
    hints: ["Check each corner with the corner of a page. The corners at the ends of the slanted side need extra care."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 220 224\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A five-sided shape on a dot grid with one slanted side\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"220\" height=\"224\" fill=\"#fff\"/>\n  <g class=\"part poly-grid\">\n  <polygon class=\"part shape\" points=\"30,184 190,184 190,104 110,24 30,24\" fill=\"#ffe0b2\" stroke=\"#e65100\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <circle class=\"part dot\" cx=\"30\" cy=\"24\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"30\" cy=\"64\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"30\" cy=\"104\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"30\" cy=\"144\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"30\" cy=\"184\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"70\" cy=\"24\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"70\" cy=\"64\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"70\" cy=\"104\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"70\" cy=\"144\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"70\" cy=\"184\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"110\" cy=\"24\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"110\" cy=\"64\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"110\" cy=\"104\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"110\" cy=\"144\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"110\" cy=\"184\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"150\" cy=\"24\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"150\" cy=\"64\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"150\" cy=\"104\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"150\" cy=\"144\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"150\" cy=\"184\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"190\" cy=\"24\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"190\" cy=\"64\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"190\" cy=\"104\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"190\" cy=\"144\" r=\"3\" fill=\"#455a64\"/>\n  <circle class=\"part dot\" cx=\"190\" cy=\"184\" r=\"3\" fill=\"#455a64\"/>\n  </g>\n  <text class=\"label small\" x=\"110\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">Five-sided shape on a dot grid</text>\n</svg>", "alt": "A five-sided shape on a dot grid. Its bottom, left side and part of its right side and top lie along the dots in straight lines; one slanted side joins the right side to the top edge."}
  },
  {
    id: "g4-maths-geoperim-b-q03",
    prompt: "Sneha lays a line of flower petals around a rangoli shaped like a triangle with all three sides 45 cm long. How long is the line of petals?",
    options: [
      { id: "a", text: "90 cm" },
      { id: "b", text: "180 cm" },
      { id: "c", text: "135 cm" },
      { id: "d", text: "145 cm" }
    ],
    answerId: "c",
    explanation: "All three sides are 45 cm, so the length around is 45 + 45 + 45 = 3 \u00d7 45 = 135 cm. 180 cm is tempting if you think of 4 sides, but a triangle has only 3.",
    hints: ["Count how many sides a triangle has, then add that many equal side lengths together."]
  },
  {
    id: "g4-maths-geoperim-b-q04",
    prompt: "Each small square on the grid is 1 square unit, and two half squares make one whole square. What is the area of the house-shaped figure?",
    options: [
      { id: "a", text: "10 square units" },
      { id: "b", text: "14 square units" },
      { id: "c", text: "12 square units" },
      { id: "d", text: "16 square units" }
    ],
    answerId: "c",
    explanation: "There are 10 whole squares, and the slanted roof cuts 4 squares in half. 4 halves make 2 whole squares, so the area is 10 + 2 = 12 square units. 10 is tempting, but it leaves out the half squares.",
    hints: ["Count the whole squares first. Then count the half squares and pair them up into wholes."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 220 214\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A house-shaped figure on a 4 by 4 grid with a pointed roof\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"220\" height=\"214\" fill=\"#fff\"/>\n  <g class=\"part poly-grid\">\n  <line class=\"guide grid\" x1=\"30\" y1=\"20\" x2=\"30\" y2=\"180\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"70\" y1=\"20\" x2=\"70\" y2=\"180\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"110\" y1=\"20\" x2=\"110\" y2=\"180\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"20\" x2=\"150\" y2=\"180\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"190\" y1=\"20\" x2=\"190\" y2=\"180\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"20\" x2=\"190\" y2=\"20\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"60\" x2=\"190\" y2=\"60\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"140\" x2=\"190\" y2=\"140\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"180\" x2=\"190\" y2=\"180\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <polygon class=\"part shape\" points=\"30,180 190,180 190,100 110,20 30,100\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"2.5\" stroke-linejoin=\"round\" fill-opacity=\"0.75\"/>\n  </g>\n  <text class=\"label small\" x=\"110\" y=\"206\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">1 small square = 1 square unit</text>\n</svg>", "alt": "A house shape on a 4 by 4 grid: a 4 by 2 block at the bottom and a pointed roof on top whose slanted sides cut some squares in half."}
  },
  {
    id: "g4-maths-geoperim-b-q05",
    prompt: "A chalk box is shaped like a cuboid. How many edges does it have?",
    options: [
      { id: "a", text: "6 edges" },
      { id: "b", text: "8 edges" },
      { id: "c", text: "10 edges" },
      { id: "d", text: "12 edges" }
    ],
    answerId: "d",
    explanation: "A cuboid has 4 edges around the top, 4 around the bottom and 4 standing up: 12 edges. 8 is tempting, but that is the number of corners.",
    hints: ["Count the edges round the top face, then round the bottom face, then the ones joining top to bottom."]
  },
  {
    id: "g4-maths-geoperim-b-q06",
    prompt: "Each shape, A to D, has one dotted line drawn on it. In which shape is the dotted line a TRUE line of symmetry?",
    options: [
      { id: "a", text: "Shape A" },
      { id: "b", text: "Shape B" },
      { id: "c", text: "Shape C" },
      { id: "d", text: "Shape D" }
    ],
    answerId: "d",
    explanation: "Folding the square in Shape D along its diagonal makes one triangle land exactly on the other. Shape A is tempting because a diagonal also cuts a rectangle into two equal triangles, but when you fold along it the corners stick out, so the halves do not match.",
    hints: ["Equal halves are not enough: imagine folding along each dotted line and check whether every corner lands on another corner."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 430 390\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four shapes A to D, each with one dotted line\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"430\" height=\"390\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"215\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Is the dotted line a line of symmetry?</text>\n  <rect class=\"part panel\" x=\"16\" y=\"44\" width=\"195\" height=\"160\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part sym-test\">\n  <polygon class=\"part shape\" points=\"53.5,80 173.5,80 173.5,140 53.5,140\" fill=\"#b3e5fc\" stroke=\"#01579b\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line class=\"axis\" x1=\"44.5\" y1=\"144.5\" x2=\"182.5\" y2=\"75.5\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"113\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape A</text>\n  <rect class=\"part panel\" x=\"221\" y=\"44\" width=\"195\" height=\"160\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part sym-test\">\n  <polygon class=\"part shape\" points=\"288.5,80 378.5,80 348.5,140 258.5,140\" fill=\"#b3e5fc\" stroke=\"#01579b\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line class=\"axis\" x1=\"318.5\" y1=\"68\" x2=\"318.5\" y2=\"152\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"318\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape B</text>\n  <rect class=\"part panel\" x=\"16\" y=\"214\" width=\"195\" height=\"160\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part sym-test\">\n  <polygon class=\"part shape\" points=\"53.5,250 53.5,310 173.5,310\" fill=\"#b3e5fc\" stroke=\"#01579b\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line class=\"axis\" x1=\"44.5\" y1=\"314.5\" x2=\"134.5\" y2=\"269.5\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"113\" y=\"366\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape C</text>\n  <rect class=\"part panel\" x=\"221\" y=\"214\" width=\"195\" height=\"160\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part sym-test\">\n  <polygon class=\"part shape\" points=\"273.5,235 363.5,235 363.5,325 273.5,325\" fill=\"#b3e5fc\" stroke=\"#01579b\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <line class=\"axis\" x1=\"264.5\" y1=\"334\" x2=\"372.5\" y2=\"226\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"318\" y=\"366\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape D</text>\n</svg>", "alt": "Shape A: a long rectangle with a dotted diagonal. Shape B: a slanted parallelogram with a dotted up-and-down line through the middle. Shape C: a right-angled triangle with a dotted line from one corner to the middle of the longest side. Shape D: a square with a dotted diagonal."}
  },
  {
    id: "g4-maths-geoperim-b-q07",
    prompt: "Which solid has NO corners and NO flat faces?",
    options: [
      { id: "a", text: "cylinder" },
      { id: "b", text: "cone" },
      { id: "c", text: "sphere" },
      { id: "d", text: "cube" }
    ],
    answerId: "c",
    explanation: "A sphere, like a ball, is curved all over, with no flat face and no corner. A cylinder is tempting because it has no corners, but its two ends are flat circles.",
    hints: ["Think of each solid resting on a table: which one can never lie flat on any part of itself?"]
  },
  {
    id: "g4-maths-geoperim-b-q08",
    prompt: "A square handkerchief can be folded so that the two halves match exactly. How many different lines of symmetry does a square have?",
    options: [
      { id: "a", text: "4 lines" },
      { id: "b", text: "2 lines" },
      { id: "c", text: "1 line" },
      { id: "d", text: "8 lines" }
    ],
    answerId: "a",
    explanation: "A square folds exactly in half up-and-down, side-to-side and along both diagonals: 4 lines. 2 is tempting if you forget the two diagonal folds.",
    hints: ["Try folding the square handkerchief straight across first, then from corner to corner."]
  },
  {
    id: "g4-maths-geoperim-b-q09",
    prompt: "On Ayaan's map, each small grid square has sides of 2 cm. He draws a rectangle that is 4 squares long and 2 squares wide. What is the perimeter of his rectangle in cm?",
    options: [
      { id: "a", text: "12 cm" },
      { id: "b", text: "24 cm" },
      { id: "c", text: "32 cm" },
      { id: "d", text: "16 cm" }
    ],
    answerId: "b",
    explanation: "Around the rectangle there are 4 + 2 + 4 + 2 = 12 square edges. Each edge is 2 cm, so the perimeter is 12 \u00d7 2 = 24 cm. 12 cm is tempting, but it counts square edges and forgets that each one is 2 cm long.",
    hints: ["Count the square edges around the rectangle first, then change that count into centimetres."]
  },
  {
    id: "g4-maths-geoperim-b-q10",
    prompt: "Look at the pattern: triangle, square, pentagon, \u2026 Which shape comes next?",
    options: [
      { id: "a", text: "octagon" },
      { id: "b", text: "pentagon" },
      { id: "c", text: "rectangle" },
      { id: "d", text: "hexagon" }
    ],
    answerId: "d",
    explanation: "The number of sides goes 3, 4, 5, so the next shape has 6 sides: a hexagon. An octagon is tempting because the names hexagon and octagon are easy to mix up, but an octagon has 8 sides, not 6.",
    hints: ["Count the sides of each shape in order and see how the number changes each time."]
  },
  {
    id: "g4-maths-geoperim-b-q11",
    prompt: "The figure shows the plan of a U-shaped school courtyard. All corners are right angles, and the gap at the top is exactly in the middle. What is the perimeter of the courtyard?",
    options: [
      { id: "a", text: "32 m" },
      { id: "b", text: "26 m" },
      { id: "c", text: "40 m" },
      { id: "d", text: "29 m" }
    ],
    answerId: "a",
    explanation: "The left and right sides are 5 m each and the bottom is 8 m. The top pieces either side of the gap are (8 \u2212 2) \u00f7 2 = 3 m each, the gap's two inside walls are 3 m each and its floor is 2 m. 8 + 5 + 5 + 3 + 3 + 3 + 3 + 2 = 32 m. 26 m is tempting because it is the perimeter of a plain 8 m by 5 m rectangle, but the gap adds two extra 3 m walls.",
    hints: ["Find the two unlabelled top pieces first. Then remember the gap has walls going down and back up."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 310 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A U-shaped courtyard: 8 m wide, 5 m tall, with a gap 2 m wide and 3 m deep cut into the middle of the top\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"310\" height=\"210\" fill=\"#fff\"/>\n  <g class=\"part labelled-shape\">\n  <polygon class=\"part shape\" points=\"40,30 124,30 124,114 180,114 180,30 264,30 264,170 40,170\" fill=\"#c5e1a5\" stroke=\"#33691e\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <text class=\"label dim\" x=\"152\" y=\"192\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1b5e20\">8 m</text>\n  <text class=\"label dim\" x=\"290\" y=\"105.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1b5e20\">5 m</text>\n  <text class=\"label dim\" x=\"100\" y=\"77.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1b5e20\">3 m</text>\n  <text class=\"label dim\" x=\"152\" y=\"106\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1b5e20\">2 m</text>\n  </g>\n</svg>", "alt": "A U-shaped plan. The bottom side is 8 m and the right side is 5 m. A gap cut into the middle of the top is 2 m wide and 3 m deep. All corners are right angles."}
  },
  {
    id: "g4-maths-geoperim-b-q12",
    prompt: "Gita ties a string tightly around the edge of an 11 cm by 5 cm card. She then uses the same string to make a square. How long is each side of the square?",
    options: [
      { id: "a", text: "16 cm" },
      { id: "b", text: "4 cm" },
      { id: "c", text: "8 cm" },
      { id: "d", text: "12 cm" }
    ],
    answerId: "c",
    explanation: "The string is as long as the card's perimeter: 11 + 5 + 11 + 5 = 32 cm. A square has 4 equal sides, so each side is 32 \u00f7 4 = 8 cm. 16 cm is tempting (11 + 5), but that is only half of the card's perimeter, and the string still has to be shared among the square's sides.",
    hints: ["Find the distance around the card first. Then share that string length equally among the square's sides."]
  },
  {
    id: "g4-maths-geoperim-b-q13",
    prompt: "Three of these nets fold into a cube. Which net does NOT fold into a cube?",
    options: [
      { id: "a", text: "Net A" },
      { id: "b", text: "Net B" },
      { id: "c", text: "Net C" },
      { id: "d", text: "Net D" }
    ],
    answerId: "b",
    explanation: "Net B has five squares in one line. Four squares in a line already wrap all the way around, so the fifth square lands on top of the first one and one face is left open. Net C is tempting because it looks untidy, but its staircase does fold into a cube.",
    hints: ["Look for a straight line of squares in each net. Four in a row wrap a cube; what happens to an extra one?"],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 410 392\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four nets of six squares labelled A to D\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"410\" height=\"392\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"205.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which net does NOT fold into a cube?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"36\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"61.0\" y=\"75.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"61.0\" y=\"97.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"83.0\" y=\"97.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"105.0\" y=\"97.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"127.0\" y=\"97.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"127.0\" y=\"119.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"105.0\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net A</text>\n  <rect class=\"part panel\" x=\"210\" y=\"36\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"283.0\" y=\"53.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"283.0\" y=\"75.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"283.0\" y=\"97.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"283.0\" y=\"119.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"283.0\" y=\"141.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"305.0\" y=\"141.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"305.0\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net B</text>\n  <rect class=\"part panel\" x=\"10\" y=\"214\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"61.0\" y=\"253.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"83.0\" y=\"253.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"83.0\" y=\"275.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"105.0\" y=\"275.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"105.0\" y=\"297.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"127.0\" y=\"297.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"105.0\" y=\"374\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net C</text>\n  <rect class=\"part panel\" x=\"210\" y=\"214\" width=\"190\" height=\"168\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part net\">\n  <rect class=\"part face-cell\" x=\"250.0\" y=\"264.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"272.0\" y=\"264.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"294.0\" y=\"264.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"294.0\" y=\"286.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"316.0\" y=\"286.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part face-cell\" x=\"338.0\" y=\"286.0\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  </g>\n  <text class=\"label option-label\" x=\"305.0\" y=\"374\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Net D</text>\n</svg>", "alt": "Four nets of six squares. Net A: one square, a row of four below it, and one square below the end of the row, like a Z. Net B: a column of five squares with one square beside the bottom one. Net C: three pairs of squares going down like stairs. Net D: a row of three joined to another row of three, shifted along like a step."}
  },
  {
    id: "g4-maths-geoperim-b-q14",
    prompt: "A room floor is 5 m long and 4 m wide. It is covered with square tiles of side 1 m, and each tile costs \u20b9150. What is the total cost of the tiles?",
    options: [
      { id: "a", text: "\u20b92,700" },
      { id: "b", text: "\u20b91,350" },
      { id: "c", text: "\u20b93,150" },
      { id: "d", text: "\u20b93,000" }
    ],
    answerId: "d",
    explanation: "The floor needs 5 \u00d7 4 = 20 tiles, so the cost is 20 \u00d7 150 = \u20b93,000. \u20b92,700 is tempting because the perimeter is 18 m and 18 \u00d7 150 = 2,700, but tiles cover the whole floor, so we need the area.",
    hints: ["Tiles cover the inside of the floor, not just its edge. Find how many tiles are needed before working out the cost."]
  },
  {
    id: "g4-maths-geoperim-b-q15",
    prompt: "Rahul builds staircases from square tiles. A 1-step staircase uses 1 tile, a 2-step staircase uses 3 tiles and a 3-step staircase uses 6 tiles. How many tiles does a 5-step staircase use?",
    options: [
      { id: "a", text: "25 tiles" },
      { id: "b", text: "15 tiles" },
      { id: "c", text: "10 tiles" },
      { id: "d", text: "12 tiles" }
    ],
    answerId: "b",
    explanation: "Each new step adds a column as tall as the step number: 1, then + 2 = 3, + 3 = 6, + 4 = 10, + 5 = 15 tiles. 25 tiles is tempting if you picture a full 5 by 5 square, but a staircase leaves the top corner empty.",
    hints: ["Each new step of the staircase adds a column of tiles as tall as that step. Keep adding columns."]
  },
  {
    id: "g4-maths-geoperim-b-q16",
    prompt: "A tent has two triangle-shaped ends and three rectangle-shaped sides, like a triangular prism. How many faces does a triangular prism have?",
    options: [
      { id: "a", text: "5 faces" },
      { id: "b", text: "6 faces" },
      { id: "c", text: "3 faces" },
      { id: "d", text: "9 faces" }
    ],
    answerId: "a",
    explanation: "2 triangle ends + 3 rectangle sides = 5 faces. 6 is tempting because a box has 6 faces, but a triangular prism has only three sides around it, not four. 9 is its number of edges.",
    hints: ["Add the triangle-shaped ends to the rectangle-shaped sides that join them."]
  },
  {
    id: "g4-maths-geoperim-b-q17",
    prompt: "Complete the analogy about lines of symmetry.  Rectangle (not a square) : 2  ::  Equilateral triangle : ?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "0" },
      { id: "c", text: "3" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "A rectangle has 2 lines of symmetry. An equilateral triangle has 3: one from each corner to the middle of the opposite side. 1 is tempting because many triangles have only one line, but an equilateral triangle has all sides equal, so each corner gives a line.",
    hints: ["In an equilateral triangle every corner is alike. Try folding from each corner to the middle of the side opposite it."]
  },
  {
    id: "g4-maths-geoperim-b-q18",
    prompt: "The dotted line across the middle is a mirror line. The 'Given' grid shows only the top half of a tile design. Which grid, A to D, completes the design so that the bottom half is the mirror image of the top?",
    options: [
      { id: "a", text: "Grid A" },
      { id: "b", text: "Grid B" },
      { id: "c", text: "Grid C" },
      { id: "d", text: "Grid D" }
    ],
    answerId: "b",
    explanation: "In Grid B the row just above the line is repeated just below it, the next row up is repeated next row down, and so on, like a reflection in still water. Grid A is tempting because the bottom has the same rows, but they are slid down, not flipped, so they come in the wrong order.",
    hints: ["The row touching the mirror line must be repeated right below it. Then check the rows further away, in order."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 370 358\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A half tile design above a horizontal mirror line, and four completed designs labelled A to D\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"370\" height=\"358\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"185.0\" y=\"20\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Complete the tile design</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"15\" y1=\"114.0\" x2=\"15\" y2=\"234.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"35\" y1=\"114.0\" x2=\"35\" y2=\"234.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"55\" y1=\"114.0\" x2=\"55\" y2=\"234.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"75\" y1=\"114.0\" x2=\"75\" y2=\"234.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"95\" y1=\"114.0\" x2=\"95\" y2=\"234.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"114.0\" x2=\"95\" y2=\"114.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"134.0\" x2=\"95\" y2=\"134.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"154.0\" x2=\"95\" y2=\"154.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"174.0\" x2=\"95\" y2=\"174.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"194.0\" x2=\"95\" y2=\"194.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"214.0\" x2=\"95\" y2=\"214.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"15\" y1=\"234.0\" x2=\"95\" y2=\"234.0\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"15\" y=\"114.0\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"35\" y=\"114.0\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"35\" y=\"154.0\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"55\" y=\"154.0\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"75\" y=\"134.0\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"75\" y=\"154.0\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"9\" y1=\"174\" x2=\"101\" y2=\"174\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"55.0\" y=\"258.0\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Given</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"150\" y1=\"34\" x2=\"150\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"170\" y1=\"34\" x2=\"170\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"190\" y1=\"34\" x2=\"190\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"210\" y1=\"34\" x2=\"210\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"230\" y1=\"34\" x2=\"230\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"34\" x2=\"230\" y2=\"34\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"54\" x2=\"230\" y2=\"54\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"74\" x2=\"230\" y2=\"74\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"94\" x2=\"230\" y2=\"94\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"114\" x2=\"230\" y2=\"114\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"134\" x2=\"230\" y2=\"134\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"154\" x2=\"230\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"150\" y=\"34\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"150\" y=\"94\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"170\" y=\"34\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"170\" y=\"74\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"170\" y=\"94\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"170\" y=\"134\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"190\" y=\"74\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"190\" y=\"134\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"210\" y=\"54\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"210\" y=\"74\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"210\" y=\"114\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"210\" y=\"134\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"144\" y1=\"94\" x2=\"236\" y2=\"94\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"190.0\" y=\"178\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"265\" y1=\"34\" x2=\"265\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"285\" y1=\"34\" x2=\"285\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"305\" y1=\"34\" x2=\"305\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"325\" y1=\"34\" x2=\"325\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"345\" y1=\"34\" x2=\"345\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"34\" x2=\"345\" y2=\"34\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"54\" x2=\"345\" y2=\"54\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"74\" x2=\"345\" y2=\"74\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"94\" x2=\"345\" y2=\"94\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"114\" x2=\"345\" y2=\"114\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"134\" x2=\"345\" y2=\"134\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"154\" x2=\"345\" y2=\"154\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"265\" y=\"34\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"265\" y=\"134\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"34\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"74\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"94\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"134\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"305\" y=\"74\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"305\" y=\"94\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"325\" y=\"54\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"325\" y=\"74\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"325\" y=\"94\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"325\" y=\"114\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"259\" y1=\"94\" x2=\"351\" y2=\"94\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"305.0\" y=\"178\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"150\" y1=\"194\" x2=\"150\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"170\" y1=\"194\" x2=\"170\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"190\" y1=\"194\" x2=\"190\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"210\" y1=\"194\" x2=\"210\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"230\" y1=\"194\" x2=\"230\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"194\" x2=\"230\" y2=\"194\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"214\" x2=\"230\" y2=\"214\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"234\" x2=\"230\" y2=\"234\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"254\" x2=\"230\" y2=\"254\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"274\" x2=\"230\" y2=\"274\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"294\" x2=\"230\" y2=\"294\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"150\" y1=\"314\" x2=\"230\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"150\" y=\"194\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"150\" y=\"254\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"150\" y=\"274\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"170\" y=\"194\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"170\" y=\"234\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"170\" y=\"254\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"190\" y=\"234\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"190\" y=\"254\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"190\" y=\"294\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"210\" y=\"214\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"210\" y=\"234\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"210\" y=\"294\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"144\" y1=\"254\" x2=\"236\" y2=\"254\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"190.0\" y=\"338\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"265\" y1=\"194\" x2=\"265\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"285\" y1=\"194\" x2=\"285\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"305\" y1=\"194\" x2=\"305\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"325\" y1=\"194\" x2=\"325\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"345\" y1=\"194\" x2=\"345\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"194\" x2=\"345\" y2=\"194\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"214\" x2=\"345\" y2=\"214\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"234\" x2=\"345\" y2=\"234\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"254\" x2=\"345\" y2=\"254\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"274\" x2=\"345\" y2=\"274\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"294\" x2=\"345\" y2=\"294\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"265\" y1=\"314\" x2=\"345\" y2=\"314\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"265\" y=\"194\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"265\" y=\"294\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"194\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"234\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"254\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"285\" y=\"294\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"305\" y=\"234\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"305\" y=\"254\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"305\" y=\"274\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"325\" y=\"214\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"325\" y=\"234\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"325\" y=\"254\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#7e57c2\" stroke=\"#4527a0\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"259\" y1=\"254\" x2=\"351\" y2=\"254\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label option-label\" x=\"305.0\" y=\"338\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">D</text>\n  <line class=\"guide\" x1=\"137\" y1=\"40\" x2=\"137\" y2=\"344\" stroke=\"#bbb\" stroke-width=\"1\"/>\n</svg>", "alt": "Five small grids, each 4 squares wide and 6 tall with a dotted mirror line across the middle. The first shows only the top half of a design. Grids A to D show four different bottom halves."}
  },
  {
    id: "g4-maths-geoperim-b-q19",
    prompt: "Arun makes the frame of a cube using one straw for each edge. Each straw is 10 cm long. What is the total length of straw he uses?",
    options: [
      { id: "a", text: "120 cm" },
      { id: "b", text: "60 cm" },
      { id: "c", text: "80 cm" },
      { id: "d", text: "40 cm" }
    ],
    answerId: "a",
    explanation: "A cube has 12 edges, so Arun needs 12 straws: 12 \u00d7 10 = 120 cm. 60 cm is tempting because a cube has 6 faces, but straws go along edges, not faces.",
    hints: ["A frame uses one straw along every edge, so start by counting how many edges a cube has."]
  },
  {
    id: "g4-maths-geoperim-b-q20",
    prompt: "Two lines are drawn from the top corner of a triangle down to its base, and one line is drawn across it, as shown. How many triangles of any size are in the figure?",
    options: [
      { id: "a", text: "6 triangles" },
      { id: "b", text: "9 triangles" },
      { id: "c", text: "10 triangles" },
      { id: "d", text: "12 triangles" }
    ],
    answerId: "d",
    explanation: "Every triangle uses the top corner. With the middle line as the bottom, the slices give 3 + 2 + 1 = 6 triangles. With the base as the bottom, there are 6 more. 6 + 6 = 12. 6 is tempting, but it counts the triangles for only one of the two flat lines.",
    hints: ["Every triangle here uses the top corner. Count the triangles whose bottom is on the middle line, then those on the base."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 244\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A triangle with two lines from the top corner to the base and one line across the middle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"244\" fill=\"#fff\"/>\n  <g class=\"part seg-figure\">\n  <line class=\"part seg\" x1=\"28\" y1=\"216\" x2=\"232\" y2=\"216\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"28\" y1=\"216\" x2=\"130\" y2=\"12\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"232\" y1=\"216\" x2=\"130\" y2=\"12\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"130\" y1=\"12\" x2=\"96\" y2=\"216\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"130\" y1=\"12\" x2=\"164\" y2=\"216\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"79.0\" y1=\"114\" x2=\"181.0\" y2=\"114\" stroke=\"#1a237e\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n  <text class=\"label small\" x=\"130\" y=\"236\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">How many triangles?</text>\n</svg>", "alt": "A large triangle. Two lines go from the top corner to points on the base, splitting it into three slices. A line across the middle, parallel to the base, cuts all three slices."}
  },
  {
    id: "g4-maths-geoperim-b-q21",
    prompt: "Each of these rectangles has a perimeter of 20 cm. Which one covers the LARGEST area?",
    options: [
      { id: "a", text: "6 cm by 4 cm" },
      { id: "b", text: "9 cm by 1 cm" },
      { id: "c", text: "8 cm by 2 cm" },
      { id: "d", text: "7 cm by 3 cm" }
    ],
    answerId: "a",
    explanation: "Areas: 9 \u00d7 1 = 9, 8 \u00d7 2 = 16, 7 \u00d7 3 = 21 and 6 \u00d7 4 = 24 square cm. The 6 cm by 4 cm rectangle is largest. 9 cm by 1 cm is tempting because it has the longest side, but a long thin rectangle covers very little space.",
    hints: ["Same perimeter does not mean same area. Multiply length by width for each one and compare."]
  },
  {
    id: "g4-maths-geoperim-b-q22",
    prompt: "Look at the tangram (L = large triangle, M = medium triangle, S = small triangle, Sq = square, P = parallelogram). Which two pieces together cover exactly the same area as ONE large triangle?",
    options: [
      { id: "a", text: "two small triangles" },
      { id: "b", text: "the square and one small triangle" },
      { id: "c", text: "the medium triangle and one large triangle" },
      { id: "d", text: "the square and the parallelogram" }
    ],
    answerId: "d",
    explanation: "Measure in small triangles: the square is 2, the parallelogram is 2, the medium triangle is 2 and a large triangle is 4. Square + parallelogram = 2 + 2 = 4, the same as a large triangle. 'The square and one small triangle' is tempting because the square looks big, but that is only 2 + 1 = 3.",
    hints: ["Use the small triangle as your measuring unit. Work out how many fit on each piece before adding pairs."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 270\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A seven-piece tangram square with pieces labelled L, L, M, S, S, Sq and P\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"270\" fill=\"#fff\"/>\n  <g class=\"part tangram\">\n  <polygon class=\"part piece\" points=\"26,238 130,134 26,30\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"60.7\" y=\"139.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  <polygon class=\"part piece\" points=\"26,30 130,134 234,30\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"130.0\" y=\"69.7\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  <polygon class=\"part piece\" points=\"130,238 234,238 234,134\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"199.3\" y=\"208.3\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">M</text>\n  <polygon class=\"part piece\" points=\"130,134 182,186 234,134 182,82\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"182.0\" y=\"139.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sq</text>\n  <polygon class=\"part piece\" points=\"182,82 234,134 234,30\" fill=\"#ce93d8\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"216.7\" y=\"87.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">S</text>\n  <polygon class=\"part piece\" points=\"78,186 130,134 182,186\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"130.0\" y=\"173.7\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">S</text>\n  <polygon class=\"part piece\" points=\"26,238 130,238 182,186 78,186\" fill=\"#80deea\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"104.0\" y=\"217.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  </g>\n</svg>", "alt": "A tangram square made of two large triangles (L), one medium triangle (M), two small triangles (S), one square (Sq) and one parallelogram (P)."}
  },
  {
    id: "g4-maths-geoperim-b-q23",
    prompt: "Rani has 12 square tiles, each with sides of 1 cm. She puts ALL of them together to make one solid rectangle. What is the LONGEST perimeter her rectangle can have?",
    options: [
      { id: "a", text: "16 cm" },
      { id: "b", text: "26 cm" },
      { id: "c", text: "14 cm" },
      { id: "d", text: "24 cm" }
    ],
    answerId: "b",
    explanation: "The possible rectangles are 1 by 12, 2 by 6 and 3 by 4. Their perimeters are 26 cm, 16 cm and 14 cm, so the longest is 26 cm (the long 1 by 12 strip). 24 cm is tempting if you double the 12 and forget to add the two short ends of 1 cm.",
    hints: ["List every way to arrange the tiles as a rectangle using all of them, then find the distance around each."]
  },
  {
    id: "g4-maths-geoperim-b-q24",
    prompt: "Neel wants the dotted line to be a line of symmetry of this design. What is the SMALLEST number of extra squares he must shade?",
    options: [
      { id: "a", text: "3 squares" },
      { id: "b", text: "4 squares" },
      { id: "c", text: "5 squares" },
      { id: "d", text: "8 squares" }
    ],
    answerId: "b",
    explanation: "Check each shaded square's mirror partner. The top row already matches. Row 2 needs square 5 (partner of square 2); row 3 needs square 4 (partner of square 3); the bottom row needs squares 6 and 2 (partners of squares 1 and 5). That is 4 squares. 3 is tempting if you miss that the bottom row needs two new squares, one on each side.",
    hints: ["Go row by row. For every shaded square, ask whether its partner the same distance from the line is shaded."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 264 196\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A 6 by 4 grid with a dotted vertical line down the middle and 8 shaded squares\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"264\" height=\"196\" fill=\"#fff\"/>\n  <g class=\"part mirror-grid\">\n  <line class=\"guide grid\" x1=\"30\" y1=\"22\" x2=\"30\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"64\" y1=\"22\" x2=\"64\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"98\" y1=\"22\" x2=\"98\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"132\" y1=\"22\" x2=\"132\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"166\" y1=\"22\" x2=\"166\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"200\" y1=\"22\" x2=\"200\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"234\" y1=\"22\" x2=\"234\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"22\" x2=\"234\" y2=\"22\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"56\" x2=\"234\" y2=\"56\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"90\" x2=\"234\" y2=\"90\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"124\" x2=\"234\" y2=\"124\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"guide grid\" x1=\"30\" y1=\"158\" x2=\"234\" y2=\"158\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell filled\" x=\"30\" y=\"22\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"30\" y=\"124\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"64\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"98\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"98\" y=\"90\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"132\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"166\" y=\"124\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <rect class=\"part cell filled\" x=\"200\" y=\"22\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"0.8\"/>\n  <line class=\"axis\" x1=\"132\" y1=\"12\" x2=\"132\" y2=\"168\" stroke=\"#c62828\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/>\n  </g>\n  <text class=\"label small\" x=\"132\" y=\"188\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">dotted line = mirror line</text>\n</svg>", "alt": "A grid 6 squares wide and 4 tall with a dotted line down the middle. Top row: the first and last squares shaded. Second row: squares 2, 3 and 4 shaded. Third row: square 3 shaded. Bottom row: squares 1 and 5 shaded."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "🔷", "title": "Shapes all around us", "body": ["Fences, rangoli, photo frames and gift boxes all use the maths in this chapter.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Fences, rangoli, photo frames and gift boxes all use the maths in this chapter. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Sides, Corners and Right Angles", "steps": ["A closed shape made of straight lines has sides and corners. A triangle has three of each, and a hexagon has six.", "A right angle is a square corner, like the corner of your notebook. A rectangle has four of them.", "Check: How many right-angle corners does a rectangle have?"], "punchline": "Answer: 4", "visual": "none", "speak": "A closed shape made of straight lines has sides and corners. A triangle has three of each, and a hexagon has six. A right angle is a square corner, like the corner of your notebook. A rectangle has four of them."},
  {"id": "s2", "type": "demo", "title": "Perimeter: The Distance Around", "steps": ["Perimeter is the total length all the way around a shape. Just add up the sides!", "A square has four equal sides, so its perimeter is four times one side.", "Check: What is the perimeter of a 6 cm by 4 cm rectangle?"], "punchline": "Answer: 20 cm", "visual": "none", "speak": "Perimeter is the total length all the way around a shape. Just add up the sides! A square has four equal sides, so its perimeter is four times one side."},
  {"id": "s3", "type": "demo", "title": "Perimeter on a Grid", "steps": ["For a shape on a grid, trace the outline and count every square edge you pass.", "Cutting a square out of a corner does not always make the perimeter smaller. Count to check!", "Check: A rectangle 3 squares long and 2 squares wide is drawn on a grid. How many square edges go around it?"], "punchline": "Answer: 10", "visual": "none", "speak": "For a shape on a grid, trace the outline and count every square edge you pass. Cutting a square out of a corner does not always make the perimeter smaller. Count to check!"},
  {"id": "s4", "type": "demo", "title": "Area: Counting Squares", "steps": ["Area is the space inside a shape. Count how many unit squares cover it.", "Two half squares make one whole square.", "Check: A shape covers 6 whole squares and 2 half squares. What is its area?"], "punchline": "Answer: 7 square units", "visual": "none", "speak": "Area is the space inside a shape. Count how many unit squares cover it. Two half squares make one whole square."},
  {"id": "s5", "type": "demo", "title": "Lines of Symmetry", "steps": ["A line of symmetry folds a shape into two halves that match exactly.", "To complete a symmetric picture, copy each square the same distance away on the other side of the mirror line.", "Check: How many lines of symmetry does a rectangle that is not a square have?"], "punchline": "Answer: 2", "visual": "none", "speak": "A line of symmetry folds a shape into two halves that match exactly. To complete a symmetric picture, copy each square the same distance away on the other side of the mirror line."},
  {"id": "s6", "type": "demo", "title": "Solids, Faces, Edges and Nets", "steps": ["A cube has 6 faces, 12 edges and 8 corners. A cuboid has the same numbers, but its faces are rectangles.", "A net is a flat pattern that folds up into a solid. Not every set of six squares folds into a cube!", "Check: How many corners does a cube have?"], "punchline": "Answer: 8", "visual": "none", "speak": "A cube has 6 faces, 12 edges and 8 corners. A cuboid has the same numbers, but its faces are rectangles. A net is a flat pattern that folds up into a solid. Not every set of six squares folds into a cube!"},
  {"id": "s7", "type": "demo", "title": "Tangrams and Counting Shapes", "steps": ["A tangram is a square cut into seven pieces: five triangles, one square and one parallelogram.", "When counting shapes in a figure, count the small ones first, then look for bigger ones made by joining them.", "Check: A triangle is cut into two parts by one line from its top corner to its base. How many triangles are there in the figure?"], "punchline": "Answer: 3", "visual": "none", "speak": "A tangram is a square cut into seven pieces: five triangles, one square and one parallelogram. When counting shapes in a figure, count the small ones first, then look for bigger ones made by joining them."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "A rectangular garden is 9 m long and 5 m wide. How long is the fence that goes all the way around it?", "options": [{"id": "a", "text": "14 m"}, {"id": "b", "text": "45 m"}, {"id": "c", "text": "28 m"}, {"id": "d", "text": "23 m"}], "answerId": "c", "why": "Add all four sides: 9 + 5 + 9 + 5 = 28 m. 45 is 9 × 5, which is the area, not the distance around.", "visual": "none", "speak": "A rectangular garden is nine metres long and five metres wide. How long is the fence that goes all the way around it?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Perimeter = add every side", "Area = count the unit squares", "A line of symmetry folds into matching halves", "Cube: 6 faces, 12 edges, 8 corners", "Count small shapes first, then bigger ones"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g4MathsGeometryPerimeter: ChapterDef = {
  id: "g4-geometry-perimeter",
  title: "Perimeter, Area & Symmetry",
  emoji: "\ud83d\udd37",
  blurb: "Perimeter, area on grids, symmetry, nets & tangrams",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "geometry",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "geometry",
      questions: SET_B,
    },
  ],
  paperTopics: ["geometry", "measurement"],
};

export const g4MathsGeometryPerimeterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
