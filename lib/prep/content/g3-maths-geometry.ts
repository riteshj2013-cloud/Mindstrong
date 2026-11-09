import type { ChapterDef, PrepQuestion } from "../types";

/** Geometry - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-maths-geometry-a-q01",
    prompt: "Hiral's sticker sheet has seven shapes, numbered 1 to 7. How many of the stickers have exactly 4 straight sides?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "Sticker 2 (the rectangle), sticker 5 (the tilted square) and sticker 6 (the kite) each have exactly 4 straight sides, so the answer is 3. 2 is tempting if you skip sticker 5, but a square standing on its corner still has 4 sides; turning a shape does not change its sides.",
    hints: ["Count the straight sides of every sticker on Hiral's sheet, including any sticker that is turned or tilted."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 290\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Seven stickers of different flat shapes, numbered 1 to 7\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"290\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Hiral's sticker sheet</text>\n  <polygon class=\"part shape\" points=\"30,110 60,50 90,110\" fill=\"#ffcc80\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"60\" y=\"140\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <polygon class=\"part shape\" points=\"155,65 221,65 221,100 155,100\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"185\" y=\"140\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <polygon class=\"part shape\" points=\"310,50 340,72 329,108 291,108 280,72\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"310\" y=\"140\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <circle class=\"part shape\" cx=\"435\" cy=\"80\" r=\"30\" fill=\"#f48fb1\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"435\" y=\"140\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <polygon class=\"part shape\" points=\"122,170 152,200 122,230 92,200\" fill=\"#ce93d8\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"122\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <polygon class=\"part shape\" points=\"247,170 269,190 247,234 225,190\" fill=\"#fff59d\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"247\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <polygon class=\"part shape\" points=\"358,172 388,172 404,200 388,228 358,228 342,200\" fill=\"#80deea\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"372\" y=\"260\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n</svg>", "alt": "Seven stickers. 1: a triangle. 2: a long rectangle. 3: a five-sided shape. 4: a circle. 5: a square standing on one corner. 6: a kite shape, long at the bottom. 7: a six-sided shape."}
  },
  {
    id: "g3-maths-geometry-a-q02",
    prompt: "Nimisha's tiffin set has a cube-shaped box and a cylinder-shaped bottle. How many flat faces do the box and the bottle have altogether?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "9" }
    ],
    answerId: "c",
    explanation: "A cube has 6 flat square faces. A cylinder has 2 flat circle faces, one at the top and one at the bottom, and a curved surface. 6 + 2 = 8. 7 is tempting if you count only the bottom circle of the bottle, but its top is a flat circle too.",
    hints: ["Count the flat faces of Nimisha's box and of her bottle separately; the curved part of the bottle is not flat."]
  },
  {
    id: "g3-maths-geometry-a-q03",
    prompt: "Vibha writes the word MANGO in capital letters on the class board. How many of its letters are made of straight lines only?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "M, A and N are drawn with straight lines only. G and O have curved lines. So 3 letters are made only of straight lines. 4 is tempting if you count G because of its short straight bar, but most of G is a curve.",
    hints: ["Look at each capital letter on Vibha's board and check whether any part of that letter bends."]
  },
  {
    id: "g3-maths-geometry-a-q04",
    prompt: "Kunika makes a mat from 6 tiles with 1 cm sides, laid 3 in a row and 2 rows deep. A beetle crawls once round the outer edge of the mat. How many centimetres does it crawl?",
    options: [
      { id: "a", text: "6 cm" },
      { id: "b", text: "10 cm" },
      { id: "c", text: "12 cm" },
      { id: "d", text: "17 cm" }
    ],
    answerId: "b",
    explanation: "Along the long sides there are 3 + 3 = 6 tile edges, and along the short sides there are 2 + 2 = 4 tile edges. That is 10 edges of 1 cm, so the beetle walks 10 cm. 6 cm is tempting because there are 6 tiles, but the beetle walks along the outside edges, not across the tiles.",
    hints: ["Count only the tile edges on the outer edge of Kunika's mat, going all the way round it."]
  },
  {
    id: "g3-maths-geometry-a-q05",
    prompt: "Vasudha's party box holds four things. Which one has exactly one flat face, one curved surface and one pointed corner?",
    options: [
      { id: "a", text: "a tin of juice" },
      { id: "b", text: "a rubber ball" },
      { id: "c", text: "a gift box" },
      { id: "d", text: "a birthday cap" }
    ],
    answerId: "d",
    explanation: "A birthday cap is shaped like a cone: a flat circle at the bottom, one curved surface and one pointed tip at the top. A tin of juice is tempting because it also has a curved surface, but a cylinder has two flat faces and no pointed corner.",
    hints: ["Picture each of Vasudha's things standing on a table, and look for a single pointed tip at the top."]
  },
  {
    id: "g3-maths-geometry-a-q06",
    prompt: "Lokesh folds a paper in half along the dotted line and cuts out the shaded piece along the fold, as shown. When he opens the paper, how many corners does the hole have?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "2" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "The cut has one corner on the paper away from the fold. When the paper opens, that corner is copied on the other side of the fold, and the two corners on the fold stay as they are. So the hole has 2 + 2 = 4 corners. 3 is tempting because the cut piece looks like a triangle, but opening the paper doubles the corner that is away from the fold.",
    hints: ["Picture Lokesh's cut piece together with its mirror copy on the other side of the fold line."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 330 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A folded paper with a shaded triangle-shaped cut touching the dotted fold line\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"330\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"165.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Lokesh's folded paper</text>\n  <rect class=\"part paper\" x=\"150\" y=\"45\" width=\"140\" height=\"160\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#546e7a\" stroke-width=\"1.6\"/>\n  <polygon class=\"part cut\" points=\"150,70 220,125 150,180\" fill=\"#ffab91\" stroke=\"#bf360c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <line class=\"part fold\" x1=\"150\" y1=\"38\" x2=\"150\" y2=\"212\" stroke=\"#d81b60\" stroke-width=\"2.2\" stroke-dasharray=\"7 5\"/>\n  <text class=\"label small\" x=\"140\" y=\"130\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#ad1457\">fold</text>\n</svg>", "alt": "A folded sheet of paper. Its left edge is the dotted fold line. A shaded three-cornered piece is cut out: two of its corners lie on the fold, one above the other, and its third corner points away from the fold."}
  },
  {
    id: "g3-maths-geometry-a-q07",
    prompt: "Mansi's rubber stamp prints a flat shape with straight edges. Count its corners and you get the number of fingers on one hand. Which shape does the stamp print?",
    options: [
      { id: "a", text: "a hexagon" },
      { id: "b", text: "a rectangle" },
      { id: "c", text: "a pentagon" },
      { id: "d", text: "an octagon" }
    ],
    answerId: "c",
    explanation: "A hand has 5 fingers, so the shape has 5 corners, and a closed shape with straight sides has as many sides as corners. A shape with 5 sides and 5 corners is a pentagon. A hexagon is tempting because its name also sounds like a number shape, but a hexagon has 6 corners, one more than the fingers on a hand.",
    hints: ["Count the fingers on a single hand, then match that number of corners to a shape name for Mansi's stamp."]
  },
  {
    id: "g3-maths-geometry-a-q08",
    prompt: "Navin draws Shape P and Shape Q on squared paper, as shown. Which shape covers more squares, and by how many?",
    options: [
      { id: "a", text: "Shape P, by 2 squares" },
      { id: "b", text: "Shape Q, by 2 squares" },
      { id: "c", text: "Shape P, by 4 squares" },
      { id: "d", text: "They cover the same number" }
    ],
    answerId: "a",
    explanation: "Shape P is 3 rows of 3 squares, which is 9 squares. Shape Q is 7 squares. 9 \u2212 7 = 2, so Shape P covers 2 more squares. 'Shape Q, by 2 squares' is tempting because the strip looks longer, but long and thin does not mean more squares.",
    hints: ["Count the shaded squares inside each of Navin's shapes one by one; a long shape is not always the bigger one."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 175\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two shapes shaded on squared paper: a block and a long strip\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"175\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Navin's shapes on squared paper</text>\n  <g class=\"part shape-group\">\n  <g class=\"part grid\">\n  <rect class=\"part cell shaded\" x=\"30\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"56\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"56\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"56\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"82\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"82\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"82\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  </g>\n  </g>\n  <text class=\"label\" x=\"69\" y=\"158\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape P</text>\n  <g class=\"part shape-group\">\n  <g class=\"part grid\">\n  <rect class=\"part cell\" x=\"180\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"180\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"180\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"206\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"206\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"206\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"232\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"232\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"232\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"258\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"258\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"258\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"284\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"284\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"284\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"310\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"310\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"310\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"336\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"336\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"336\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"362\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"362\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"362\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"388\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"388\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"388\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"414\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"414\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"414\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"440\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"440\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"440\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"466\" y=\"50\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"466\" y=\"76\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"466\" y=\"102\" width=\"26\" height=\"26\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  </g>\n  </g>\n  <text class=\"label\" x=\"336\" y=\"158\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape Q</text>\n</svg>", "alt": "Shape P is a block of shaded squares, 3 squares wide and 3 squares tall. Shape Q is a long strip of shaded squares, 7 squares long and 1 square tall, on a wider grid."}
  },
  {
    id: "g3-maths-geometry-a-q09",
    prompt: "Nirav draws four solids, labelled P, Q, R and S. Which of Nirav's solids has the most corners?",
    options: [
      { id: "a", text: "Solid P" },
      { id: "b", text: "Solid Q" },
      { id: "c", text: "Solid R" },
      { id: "d", text: "Solid S" }
    ],
    answerId: "c",
    explanation: "The cube (Solid R) has 8 corners where its edges meet. The cone has only 1 corner, its pointed tip, and the cylinder and the ball have none. Solid P, the cone, is tempting because its sharp tip stands out, but one tip is far fewer than the 8 corners of a cube.",
    hints: ["A corner is a point where edges meet; check Nirav's drawings for pointed tips and for box-like meeting points."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four solid shapes drawn in a row, labelled P, Q, R and S\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"180\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Nirav's solids</text>\n  <g class=\"part solid-group\">\n  <ellipse class=\"part solid\" cx=\"68\" cy=\"122\" rx=\"34\" ry=\"10\" fill=\"#c5e1a5\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <line class=\"part solid\" x1=\"34\" y1=\"122\" x2=\"68\" y2=\"52\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part solid\" x1=\"102\" y1=\"122\" x2=\"68\" y2=\"52\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n  <text class=\"label\" x=\"68\" y=\"160\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Solid P</text>\n  <g class=\"part solid-group\">\n  <ellipse class=\"part solid\" cx=\"193\" cy=\"122\" rx=\"32\" ry=\"10\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part solid-body\" x=\"161\" y=\"60\" width=\"64\" height=\"62\" rx=\"0\" fill=\"#90caf9\" stroke=\"none\" stroke-width=\"0\"/>\n  <line class=\"part solid\" x1=\"161\" y1=\"60\" x2=\"161\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part solid\" x1=\"225\" y1=\"60\" x2=\"225\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <ellipse class=\"part solid\" cx=\"193\" cy=\"60\" rx=\"32\" ry=\"10\" fill=\"#bbdefb\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  </g>\n  <text class=\"label\" x=\"193\" y=\"160\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Solid Q</text>\n  <g class=\"part solid-group\">\n  <polygon class=\"part solid\" points=\"280,72 336,72 336,128 280,128\" fill=\"#ffcc80\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part solid\" points=\"280,72 300,52 356,52 336,72\" fill=\"#ffe0b2\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part solid\" points=\"336,72 356,52 356,108 336,128\" fill=\"#ffb74d\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  </g>\n  <text class=\"label\" x=\"318\" y=\"160\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Solid R</text>\n  <g class=\"part solid-group\">\n  <circle class=\"part solid\" cx=\"443\" cy=\"92\" r=\"38\" fill=\"#f48fb1\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <ellipse class=\"part solid-line\" cx=\"443\" cy=\"92\" rx=\"38\" ry=\"10\" fill=\"none\" stroke=\"#37474f\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/>\n  </g>\n  <text class=\"label\" x=\"443\" y=\"160\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Solid S</text>\n</svg>", "alt": "Four drawings in a row. Solid P: an ice-cream cone shape with a round base and a pointed tip. Solid Q: a can shape with a round top and a round bottom. Solid R: a box with square faces. Solid S: a ball."}
  },
  {
    id: "g3-maths-geometry-a-q10",
    prompt: "Parul sticks shapes in a repeating pattern along her notebook border. The first six shapes are shown. Which shape will be the 14th one?",
    options: [
      { id: "a", text: "circle" },
      { id: "b", text: "triangle" },
      { id: "c", text: "square" },
      { id: "d", text: "pentagon" }
    ],
    answerId: "a",
    explanation: "The pattern repeats every 3 shapes: triangle, circle, square. After 4 full repeats there are 12 shapes, so the 13th is a triangle and the 14th is a circle. Triangle is tempting if you think the 14th shape starts a new repeat, but the new repeat starts at the 13th shape, so the 14th is the second shape of a repeat.",
    hints: ["Find how many shapes make one full repeat on Parul's border, then jump ahead in whole repeats."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A row of six shapes in a repeating pattern\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Parul's notebook border</text>\n  <polygon class=\"part shape\" points=\"28,116 56,66 84,116\" fill=\"#ffcc80\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <circle class=\"part shape\" cx=\"138\" cy=\"91\" r=\"26\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <polygon class=\"part shape\" points=\"195,66 245,66 245,116 195,116\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part shape\" points=\"274,116 302,66 330,116\" fill=\"#ffcc80\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <circle class=\"part shape\" cx=\"384\" cy=\"91\" r=\"26\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <polygon class=\"part shape\" points=\"441,66 491,66 491,116 441,116\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"505\" y=\"98\" font-size=\"22\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">\u2026</text>\n</svg>", "alt": "A row of six shapes from left to right: triangle, circle, square, triangle, circle, square, followed by three dots."}
  },
  {
    id: "g3-maths-geometry-a-q11",
    prompt: "Ruhi's bow tie is two triangles touching tip to tip, and a straight line runs across the middle of it, as shown. Counting big and small ones, how many triangles can Ruhi trace along the lines?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "4" },
      { id: "c", text: "2" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "The line across the middle cuts each side of the bow tie into a top triangle and a bottom triangle: 4 small triangles. Each whole side of the bow tie is also a triangle: 2 more. 4 + 2 = 6. 4 is tempting if you count only the small triangles and forget that each whole side is a triangle too.",
    hints: ["Count the small triangles on each side of Ruhi's bow tie, then check whether each whole side is a triangle too."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 270\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bow tie made of two triangles meeting at a point, with a straight line across the middle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"270\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"160.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ruhi's bow tie</text>\n  <polygon class=\"part paper\" points=\"60,50 160,150 60,250\" fill=\"#f8bbd0\" stroke=\"none\" stroke-width=\"0\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part paper\" points=\"260,50 160,150 260,250\" fill=\"#f8bbd0\" stroke=\"none\" stroke-width=\"0\" stroke-linejoin=\"round\"/>\n  <line class=\"part seg\" x1=\"60\" y1=\"50\" x2=\"60\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"260\" y1=\"50\" x2=\"260\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"60\" y1=\"50\" x2=\"260\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"260\" y1=\"50\" x2=\"60\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"60\" y1=\"150\" x2=\"260\" y2=\"150\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n</svg>", "alt": "A bow tie: a triangle on the left and a triangle on the right, touching at their tips in the centre. A straight line runs across the middle from the left edge to the right edge, through the centre point."}
  },
  {
    id: "g3-maths-geometry-a-q12",
    prompt: "Zeenat's garden bed has five straight sides of 4 m, 3 m, 5 m, 3 m and 4 m. She plants a marigold at every metre mark along the edge, starting at a corner and going all the way round. How many marigolds does Zeenat plant?",
    options: [
      { id: "a", text: "19" },
      { id: "b", text: "20" },
      { id: "c", text: "18" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "The distance round the bed is 4 + 3 + 5 + 3 + 4 = 19 m. On a closed path the last metre mark is the starting corner, which already has a stone, so Zeenat plants 19 marigolds. 20 is tempting because on a straight line you need one more plant than metres, but going round brings you back to the first plant.",
    hints: ["Find the full distance round Zeenat's bed; on a closed path the last mark lands back on the starting plant."]
  },
  {
    id: "g3-maths-geometry-a-q13",
    prompt: "Udit's tangram square is made of seven pieces, as shown. How many of Udit's pieces have exactly 4 corners?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "Five pieces are triangles with 3 corners. The small square has 4 corners, and the slanted piece along the bottom (a parallelogram) also has 4 corners. So 2 pieces have 4 corners. 1 is tempting if you count only the square, but the slanted piece has 4 corners too.",
    hints: ["Look for Udit's pieces that are not triangles, and count the corners of each of those pieces."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 300 285\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A square made of seven tangram pieces\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"300\" height=\"285\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"150.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Udit's tangram square</text>\n  <polygon class=\"part piece\" points=\"40,45 260,45 150,155\" fill=\"#ffcc80\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"40,45 150,155 40,265\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"260,155 260,265 150,265\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"260,45 260,155 205,100\" fill=\"#f48fb1\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"150,155 205,100 260,155 205,210\" fill=\"#ce93d8\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"150,155 205,210 95,210\" fill=\"#fff59d\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"40,265 95,210 205,210 150,265\" fill=\"#80deea\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n</svg>", "alt": "A square split into seven pieces: two large triangles meeting in the middle, one medium triangle in a corner, two small triangles, a small square standing on its corner, and a slanted four-sided piece along the bottom."}
  },
  {
    id: "g3-maths-geometry-a-q14",
    prompt: "Vidit makes a solid cylinder and a solid cone out of clay. Altogether, how many curved surfaces and how many flat faces do the two clay shapes have?",
    options: [
      { id: "a", text: "2 curved surfaces and 4 flat faces" },
      { id: "b", text: "2 curved surfaces and 3 flat faces" },
      { id: "c", text: "1 curved surface and 3 flat faces" },
      { id: "d", text: "2 curved surfaces and 2 flat faces" }
    ],
    answerId: "b",
    explanation: "The cylinder has 1 curved surface and 2 flat circles. The cone has 1 curved surface and 1 flat circle. Together that is 2 curved surfaces and 3 flat faces. '2 curved surfaces and 2 flat faces' is tempting if you give each shape only one flat face, but the cylinder has a flat circle at both ends.",
    hints: ["List Vidit's clay shapes one at a time: say which parts can roll and which parts sit flat."]
  },
  {
    id: "g3-maths-geometry-a-q15",
    prompt: "Tilak cuts the capital letters A, H, M and T out of card. Which card letter looks the same after a flip from left to right and also after a flip from top to bottom?",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "M" },
      { id: "c", text: "H" },
      { id: "d", text: "T" }
    ],
    answerId: "c",
    explanation: "H matches when folded down its middle from top to bottom, and also when folded across its middle from side to side, so it has 2 lines of symmetry. A, M and T match only with a fold from top to bottom. T is tempting because its top bar is the same on both sides, but a side-to-side fold would put the bar on top of the stem.",
    hints: ["Imagine flipping each of Tilak's card letters both ways, and check whether the bars still land in the same places."]
  },
  {
    id: "g3-maths-geometry-a-q16",
    prompt: "Kashish turns the flag card a quarter turn clockwise, the way a clock's hands move from 12 to 3. Which picture shows the card after the turn?",
    options: [
      { id: "a", text: "Picture P" },
      { id: "b", text: "Picture Q" },
      { id: "c", text: "Picture R" },
      { id: "d", text: "Picture S" }
    ],
    answerId: "d",
    explanation: "In a quarter turn clockwise, the top of the card moves to the right side, so the pole lies on its side with its top end pointing right and the flag hanging below the pole. That is Picture S. Picture P is tempting because it is also a quarter turn, but it is turned the other way (anticlockwise), so its flag sits above the pole.",
    hints: ["Follow where the top of Kashish's card goes when it turns the way clock hands move, by one quarter."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 620 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A flag-shaped card and four pictures P, Q, R and S of it turned or flipped\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"620\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"310.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kashish's flag card</text>\n  <rect class=\"part panel\" x=\"20\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"43,64 97,82 61,100 61,136 43,136\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"70\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Card</text>\n  <text class=\"label\" x=\"140\" y=\"105\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u2192</text>\n  <rect class=\"part panel\" x=\"170\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"184,127 202,73 220,109 256,109 256,127\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"220\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture P</text>\n  <rect class=\"part panel\" x=\"282\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"359,136 305,118 341,100 341,64 359,64\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"332\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture Q</text>\n  <rect class=\"part panel\" x=\"394\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"471,64 417,82 453,100 453,136 471,136\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"444\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture R</text>\n  <rect class=\"part panel\" x=\"506\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"592,73 574,127 556,91 520,91 520,73\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"556\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture S</text>\n</svg>", "alt": "On the left, the card: a pole standing upright with a pointed flag at its top, pointing to the right. On the right, four pictures P, Q, R and S of the same card, each turned or flipped in a different way."}
  },
  {
    id: "g3-maths-geometry-a-q17",
    prompt: "Hrithik places two triangle cards edge to edge, so that a whole side of one lies exactly on a whole side of the other. Every side of each card is 6 cm. How long is the outline of the shape he makes?",
    options: [
      { id: "a", text: "36 cm" },
      { id: "b", text: "30 cm" },
      { id: "c", text: "24 cm" },
      { id: "d", text: "18 cm" }
    ],
    answerId: "c",
    explanation: "The two cards have 6 sides of 6 cm. The two sides that touch are now inside the shape, so 4 sides are left on the outside: 4 \u00d7 6 = 24 cm. 36 cm is tempting because it adds all six sides, but the touching sides are not part of the edge any more.",
    hints: ["The sides that touch are inside Hrithik's new shape, so leave them out when you go round its outline."]
  },
  {
    id: "g3-maths-geometry-a-q18",
    prompt: "Gautam has glued five squares of a cube net onto card. He can add one more square at P, Q, R or S. Which position makes a net that folds into a cube?",
    options: [
      { id: "a", text: "Position P" },
      { id: "b", text: "Position Q" },
      { id: "c", text: "Position R" },
      { id: "d", text: "Position S" }
    ],
    answerId: "b",
    explanation: "Fold the row of four squares round into a ring of four side faces. The square above the second square becomes the top. The cube still needs a bottom, which must hang below the row, and only Position Q is below the row. The spots above the row would fold onto the top again, and the spot at the end of the row would wrap round onto the first square of the ring. Position R is tempting because it touches two squares, but it folds onto the top face, which is already covered.",
    hints: ["Imagine folding Gautam's row of squares into a ring; the cube is still missing one face, so find where it must go."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 340 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Five joined squares with four dashed spots P, Q, R and S for a sixth square\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"340\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"170.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Gautam's net</text>\n  <rect class=\"part face\" x=\"40\" y=\"100\" width=\"50\" height=\"50\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <rect class=\"part face\" x=\"90\" y=\"50\" width=\"50\" height=\"50\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <rect class=\"part face\" x=\"90\" y=\"100\" width=\"50\" height=\"50\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <rect class=\"part face\" x=\"140\" y=\"100\" width=\"50\" height=\"50\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <rect class=\"part face\" x=\"190\" y=\"100\" width=\"50\" height=\"50\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <rect class=\"part spot\" x=\"43\" y=\"53\" width=\"44\" height=\"44\" rx=\"0\" fill=\"#fff\" stroke=\"#78909c\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/>\n  <text class=\"label\" x=\"65\" y=\"81\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  <rect class=\"part spot\" x=\"193\" y=\"153\" width=\"44\" height=\"44\" rx=\"0\" fill=\"#fff\" stroke=\"#78909c\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/>\n  <text class=\"label\" x=\"215\" y=\"181\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Q</text>\n  <rect class=\"part spot\" x=\"143\" y=\"53\" width=\"44\" height=\"44\" rx=\"0\" fill=\"#fff\" stroke=\"#78909c\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/>\n  <text class=\"label\" x=\"165\" y=\"81\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">R</text>\n  <rect class=\"part spot\" x=\"243\" y=\"103\" width=\"44\" height=\"44\" rx=\"0\" fill=\"#fff\" stroke=\"#78909c\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/>\n  <text class=\"label\" x=\"265\" y=\"131\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">S</text>\n</svg>", "alt": "Five squares: a row of four squares, with one more square on top of the second square from the left. Four dashed squares are marked P, Q, R and S around the shape."}
  },
  {
    id: "g3-maths-geometry-a-q19",
    prompt: "Madhuri wants to cover her floor with tiles that are all the same shape and size, with no gaps and no overlaps. Tiles of which shape will NOT work?",
    options: [
      { id: "a", text: "squares" },
      { id: "b", text: "equilateral triangles" },
      { id: "c", text: "regular hexagons" },
      { id: "d", text: "regular pentagons" }
    ],
    answerId: "d",
    explanation: "Squares (4 at a point), equilateral triangles (6 at a point) and regular hexagons (3 at a point, like a honeycomb) fit together with no gaps. Regular pentagons always leave a gap where they meet. Regular hexagons are tempting because they look nearly round, but a honeycomb shows they fit perfectly.",
    hints: ["Picture copies of each tile meeting at a point on Madhuri's floor; for some shapes a gap is left there."]
  },
  {
    id: "g3-maths-geometry-a-q20",
    prompt: "Ketan makes this figure with 12 matchsticks. What is the smallest number of matchsticks he must take away so that no square of any size is left?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "There are 5 squares: 4 small ones and the big outer one. Taking away the 2 sticks of the middle upright line breaks all 4 small squares, but the big outer square is still there, so 2 is the tempting answer. In fact 2 sticks can never be enough: to break the big square one stick must be on the outside, and an outside stick touches only 1 small square, while the other stick touches at most 2, so a small square is left. Taking the 2 middle upright sticks and any 1 outside stick works, so the answer is 3.",
    hints: ["Remember the big square around Ketan's whole figure; every stick on its edge belongs to just a single small square."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Twelve matchsticks forming a big square split into four small squares\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"220\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"130.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ketan's matchsticks</text>\n  <g class=\"part sticks\">\n  <line class=\"part stick\" x1=\"55\" y1=\"55\" x2=\"55\" y2=\"120\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"55\" cy=\"57\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"60\" y1=\"50\" x2=\"125\" y2=\"50\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"62\" cy=\"50\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"55\" y1=\"130\" x2=\"55\" y2=\"195\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"55\" cy=\"132\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"60\" y1=\"125\" x2=\"125\" y2=\"125\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"62\" cy=\"125\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"60\" y1=\"200\" x2=\"125\" y2=\"200\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"62\" cy=\"200\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"130\" y1=\"55\" x2=\"130\" y2=\"120\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"130\" cy=\"57\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"135\" y1=\"50\" x2=\"200\" y2=\"50\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"137\" cy=\"50\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"130\" y1=\"130\" x2=\"130\" y2=\"195\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"130\" cy=\"132\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"135\" y1=\"125\" x2=\"200\" y2=\"125\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"137\" cy=\"125\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"135\" y1=\"200\" x2=\"200\" y2=\"200\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"137\" cy=\"200\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"205\" y1=\"55\" x2=\"205\" y2=\"120\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"205\" cy=\"57\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  <line class=\"part stick\" x1=\"205\" y1=\"130\" x2=\"205\" y2=\"195\" stroke=\"#d7a35d\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <circle class=\"part stick-head\" cx=\"205\" cy=\"132\" r=\"3.6\" fill=\"#c62828\" stroke=\"#8e0000\" stroke-width=\"0.8\"/>\n  </g>\n</svg>", "alt": "Twelve matchsticks laid out as a big square divided into 4 small squares, 2 across and 2 down."}
  },
  {
    id: "g3-maths-geometry-a-q21",
    prompt: "Jahnavi's house drawing is a square with a roof on top, plus two straight lines from the roof's highest point to the two bottom corners of the square, as shown. Counting big and small ones, how many triangles can she trace?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "7" },
      { id: "c", text: "11" },
      { id: "d", text: "13" }
    ],
    answerId: "c",
    explanation: "In the roof, the two slanting lines make 3 small triangles, and joining neighbours gives 2 more plus the whole roof: 6. Inside the square there are 2 small corner triangles beside the walls. Starting at the roof top there are 3 tall triangles: one down each wall of the square and the biggest one with the bottom of the square as its base. 6 + 2 + 3 = 11. 9 is tempting if you miss the two tall triangles that run down the walls.",
    hints: ["Count Jahnavi's roof triangles, then small ones in the square, then tall ones that start at the roof top."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 300 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A house made of a square and a triangle roof, with two slanting lines from the roof top to the bottom corners\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"300\" height=\"300\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"150.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Jahnavi's house drawing</text>\n  <polygon class=\"part wall\" points=\"90,160 210,160 210,280 90,280\" fill=\"#ffe0b2\" stroke=\"none\" stroke-width=\"0\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part roof\" points=\"90,160 150,40 210,160\" fill=\"#ffab91\" stroke=\"none\" stroke-width=\"0\" stroke-linejoin=\"round\"/>\n  <line class=\"part seg\" x1=\"90\" y1=\"160\" x2=\"210\" y2=\"160\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"210\" y1=\"160\" x2=\"210\" y2=\"280\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"210\" y1=\"280\" x2=\"90\" y2=\"280\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"90\" y1=\"280\" x2=\"90\" y2=\"160\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"90\" y1=\"160\" x2=\"150\" y2=\"40\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"150\" y1=\"40\" x2=\"210\" y2=\"160\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"150\" y1=\"40\" x2=\"90\" y2=\"280\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"150\" y1=\"40\" x2=\"210\" y2=\"280\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n</svg>", "alt": "A square with a triangle roof sitting on its top side. Two straight lines start at the top point of the roof, cross the top side of the square, and end at the two bottom corners of the square."}
  },
  {
    id: "g3-maths-geometry-a-q22",
    prompt: "Ojasvi joins 4 equal square tiles so that each tile touches another along a full side. Shapes that match after turning or flipping count as the same. How many different shapes can Ojasvi make?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "The different shapes are: a straight line of 4, a 2-by-2 square, an L shape, a T shape and a zigzag (S) shape. Every other arrangement is one of these turned or flipped, so there are 5. 7 is tempting because the L and the zigzag each have a mirror copy, but the question says flipped shapes count as the same.",
    hints: ["Start with all of Ojasvi's tiles in a straight row, then move tiles one at a time; check each new shape against flipped copies."]
  },
  {
    id: "g3-maths-geometry-a-q23",
    prompt: "Prisha puts 6 equal squares in a row to make a long rectangle. The perimeter of the rectangle is 42 cm. What is the perimeter of a single square?",
    options: [
      { id: "a", text: "12 cm" },
      { id: "b", text: "7 cm" },
      { id: "c", text: "28 cm" },
      { id: "d", text: "3 cm" }
    ],
    answerId: "a",
    explanation: "The edge of the rectangle is made of 6 square sides along the top, 6 along the bottom and 1 at each end: 14 sides. 42 \u00f7 14 = 3, so each side is 3 cm, and a square's perimeter is 4 \u00d7 3 = 12 cm. 7 cm is tempting from 42 \u00f7 6, but the squares' sides in the middle of the row are not on the edge.",
    hints: ["Count how many square sides make up the edge of Prisha's rectangle, then find the length of each side."]
  },
  {
    id: "g3-maths-geometry-a-q24",
    prompt: "Vedika's gate has a grill shaped like a 3-by-3 grid of squares with the top right square missing, as shown. How many squares of any size can Vedika trace along its bars?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "11" },
      { id: "c", text: "12" },
      { id: "d", text: "14" }
    ],
    answerId: "b",
    explanation: "There are 8 small squares. A 2-by-2 square can sit in 4 places in a 3-by-3 grid, but the top right one needs the missing square, so 3 are left. The big 3-by-3 square needs the missing corner too, so it is not there. 8 + 3 = 11. 14 is tempting because it is the count for a full 3-by-3 grid, but squares that use the missing corner cannot be traced.",
    hints: ["Count the small squares, then each 2-by-2 block Vedika can trace; a block needs every one of its bars."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A grid of bars making 8 small squares: a 3-by-3 grid with the top right square missing\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"130.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Vedika's gate grill</text>\n  <g class=\"part grid\">\n  <rect class=\"part cell\" x=\"60\" y=\"45\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  <rect class=\"part cell\" x=\"60\" y=\"91\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  <rect class=\"part cell\" x=\"60\" y=\"137\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  <rect class=\"part cell\" x=\"106\" y=\"45\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  <rect class=\"part cell\" x=\"106\" y=\"91\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  <rect class=\"part cell\" x=\"106\" y=\"137\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  <rect class=\"part cell\" x=\"152\" y=\"91\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  <rect class=\"part cell\" x=\"152\" y=\"137\" width=\"46\" height=\"46\" rx=\"0\" fill=\"#fff\" stroke=\"#455a64\" stroke-width=\"4\"/>\n  </g>\n</svg>", "alt": "Iron bars forming a grid of small squares, 3 across and 3 down, but the small square at the top right is missing, leaving 8 small squares."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-maths-geometry-b-q01",
    prompt: "Yohan draws a toy train using flat shapes, as shown. How many rectangles in Yohan's drawing are NOT squares?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "The four-sided parts with unequal length and width are the engine body, the chimney and the two carriages: 4 rectangles that are not squares. The cabin and the four windows have equal sides, so they are squares. 9 is tempting because every square is also a rectangle, but the question asks only for rectangles that are not squares.",
    hints: ["Check the length and width of each straight-sided part of Yohan's train with square corners; in a square they are equal."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 205\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A toy train drawn with rectangles, squares, circles and a triangle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"205\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"200.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Yohan's toy train</text>\n  <rect class=\"part shape\" x=\"40\" y=\"90\" width=\"110\" height=\"70\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"110\" y=\"56\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"88\" y=\"64\" width=\"14\" height=\"26\" rx=\"0\" fill=\"#8d6e63\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"165\" y=\"100\" width=\"90\" height=\"60\" rx=\"0\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"270\" y=\"100\" width=\"90\" height=\"60\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"52\" y=\"104\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"185\" y=\"112\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"290\" y=\"112\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <rect class=\"part shape\" x=\"325\" y=\"112\" width=\"22\" height=\"22\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <line class=\"part coupler\" x1=\"150\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"#37474f\" stroke-width=\"3\"/>\n  <line class=\"part coupler\" x1=\"255\" y1=\"145\" x2=\"270\" y2=\"145\" stroke=\"#37474f\" stroke-width=\"3\"/>\n  <circle class=\"part wheel\" cx=\"65\" cy=\"172\" r=\"13\" fill=\"#455a64\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <circle class=\"part wheel\" cx=\"125\" cy=\"172\" r=\"13\" fill=\"#455a64\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <circle class=\"part wheel\" cx=\"190\" cy=\"172\" r=\"13\" fill=\"#455a64\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <circle class=\"part wheel\" cx=\"230\" cy=\"172\" r=\"13\" fill=\"#455a64\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <circle class=\"part wheel\" cx=\"295\" cy=\"172\" r=\"13\" fill=\"#455a64\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <circle class=\"part wheel\" cx=\"335\" cy=\"172\" r=\"13\" fill=\"#455a64\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <polygon class=\"part shape\" points=\"40,120 14,135 40,150\" fill=\"#ffd54f\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <line class=\"part rail\" x1=\"20\" y1=\"190\" x2=\"385\" y2=\"190\" stroke=\"#795548\" stroke-width=\"3\"/>\n</svg>", "alt": "A toy train on a rail. The engine is a long rectangle with a square cabin on top, a tall thin chimney and a square window. Two long carriages follow, with square windows. The wheels are circles and the front has a triangle."}
  },
  {
    id: "g3-maths-geometry-b-q02",
    prompt: "Ilesh has a round laddoo shaped like a sphere, a party hat shaped like a cone, and a cube-shaped dice. How many corners do the three things have altogether?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "11" }
    ],
    answerId: "b",
    explanation: "A sphere has no corners. A cone has 1 corner, its pointed tip. A cube has 8 corners. 0 + 1 + 8 = 9. 8 is tempting if you forget the tip of the party hat, but the point where a cone's curved surface ends is a corner.",
    hints: ["Think about each of Ilesh's things on its own: does it have pointed tips or box-like corners?"]
  },
  {
    id: "g3-maths-geometry-b-q03",
    prompt: "Charulata draws a sailing boat with seven lines, as shown. How many of the lines in Charulata's drawing are straight?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "7" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "The deck, the mast, the slanting edge of the sail and the bottom edge of the sail are straight: 4 lines. The bottom of the boat and the two waves are curved. 3 is tempting because it is the number of curved lines, not straight ones.",
    hints: ["Run a finger along each line in Charulata's boat and count only the lines that never bend."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 235\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A sailing boat drawn with straight and curved lines above two waves\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"235\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"160.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Charulata's sailing boat</text>\n  <path class=\"part edge\" d=\"M 60 150 Q 160 205 260 150\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path class=\"part edge\" d=\"M 60 150 L 260 150\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path class=\"part edge\" d=\"M 160 150 L 160 40\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path class=\"part edge\" d=\"M 160 40 L 230 130\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path class=\"part edge\" d=\"M 160 130 L 230 130\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path class=\"part edge\" d=\"M 30 215 Q 80 195 130 215\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path class=\"part edge\" d=\"M 190 215 Q 240 195 290 215\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>", "alt": "A sailing boat. The bottom of the boat is a curve. The deck is a flat line, the mast stands upright, and the sail is made by a slanting line and a short flat line from the mast. Below, two curved waves."}
  },
  {
    id: "g3-maths-geometry-b-q04",
    prompt: "Dhanya's road-safety poster is shaped like a hexagon with all its sides 8 cm long. She sticks shiny tape along its whole edge. How much tape does Dhanya need?",
    options: [
      { id: "a", text: "32 cm" },
      { id: "b", text: "40 cm" },
      { id: "c", text: "48 cm" },
      { id: "d", text: "56 cm" }
    ],
    answerId: "c",
    explanation: "A hexagon has 6 sides. 6 sides of 8 cm make 6 \u00d7 8 = 48 cm. 40 cm is tempting if you count 5 sides, which is a pentagon, not a hexagon.",
    hints: ["Add a side length for every side of Dhanya's poster; equal sides make this quick."]
  },
  {
    id: "g3-maths-geometry-b-q05",
    prompt: "On squared paper, Falak draws a floor mat as a rectangle 5 squares long and 3 squares wide. How many squares does Falak's mat cover?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "8" },
      { id: "c", text: "18" },
      { id: "d", text: "15" }
    ],
    answerId: "d",
    explanation: "The mat has 3 rows with 5 squares in each row: 5 + 5 + 5 = 15 squares. 16 is tempting because it is the distance round the mat (5 + 3 + 5 + 3), which is the perimeter, not the number of squares inside.",
    hints: ["Think of Falak's mat as rows of squares; find how many are in each row and how many rows there are."]
  },
  {
    id: "g3-maths-geometry-b-q06",
    prompt: "Girija's pencil holder has two flat faces shaped like circles and one curved surface. Which solid is Girija's pencil holder shaped like?",
    options: [
      { id: "a", text: "a cylinder" },
      { id: "b", text: "a cone" },
      { id: "c", text: "a sphere" },
      { id: "d", text: "a cuboid" }
    ],
    answerId: "a",
    explanation: "A cylinder has a flat circle at each end and one curved surface joining them. A cone is tempting because it has a flat circle and a curved surface too, but it has only one flat circle and a pointed tip.",
    hints: ["Picture Girija's holder standing up: a circle face on the table and another circle face at the top."]
  },
  {
    id: "g3-maths-geometry-b-q07",
    prompt: "Lalita's four-pointed star is made from a square with one triangle on every side, as shown. How many mirror lines does the star have?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "2" },
      { id: "c", text: "8" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "The star matches when folded through the top and bottom points, through the left and right points, and along each of the two lines through opposite corners of the middle square: 4 ways. 2 is tempting if you try only the upright and the side-to-side folds and miss the two slanting folds.",
    hints: ["Try Lalita's folds through the points of the star and also folds through the corners of the middle square."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 340\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A four-pointed star made from a square with a triangle on each side\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"340\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"160.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Lalita's paper star</text>\n  <polygon class=\"part shape\" points=\"115,140 160,45 205,140 300,185 205,230 160,325 115,230 20,185\" fill=\"#ffe082\" stroke=\"#e65100\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part inner\" points=\"115,140 205,140 205,230 115,230\" fill=\"none\" stroke=\"#fb8c00\" stroke-width=\"1.2\" stroke-linejoin=\"round\" stroke-dasharray=\"4 3\"/>\n</svg>", "alt": "A four-pointed star. In the middle is a square drawn with a dashed outline. A triangle sits on each side of the square, pointing up, right, down and left."}
  },
  {
    id: "g3-maths-geometry-b-q08",
    prompt: "Manohar has a hexagon-shaped card with all sides equal. He cuts it in a straight line from a corner to the opposite corner. How many sides does each of the two pieces have?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "A hexagon has 6 sides. A cut from a corner to the opposite corner leaves 3 of the hexagon's sides on each piece, and the cut adds 1 more side to each: 3 + 1 = 4. 3 is tempting if you think a cut always makes triangles, but each piece gets three of the hexagon's sides plus the cut.",
    hints: ["Count the sides of Manohar's hexagon that go into each piece, then add the cut line."]
  },
  {
    id: "g3-maths-geometry-b-q09",
    prompt: "Pranjal tips the seven pieces of a tangram set out on the table, as shown. How many of the pieces on Pranjal's table are triangles?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "4" },
      { id: "c", text: "3" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "The two large triangles, the medium triangle and the two small triangles are the triangle pieces: 2 + 1 + 2 = 5. The square and the slanted piece have 4 corners. 4 is tempting if you count the large, medium and small sizes and miss that there are two small triangles.",
    hints: ["Count the corners of each of Pranjal's pieces; only pieces with the fewest corners count."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 540 310\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Seven tangram pieces spread out on a table\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"540\" height=\"310\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"270.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Pranjal's tangram pieces</text>\n  <polygon class=\"part piece\" points=\"20,50 164,50 92,122\" fill=\"#ffcc80\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"20,150 92,222 20,294\" fill=\"#90caf9\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"262,50 262,122 190,122\" fill=\"#a5d6a7\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"326,50 326,122 290,86\" fill=\"#f48fb1\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"355,86 391,50 427,86 391,122\" fill=\"#ce93d8\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"336,200 372,236 300,236\" fill=\"#fff59d\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <polygon class=\"part piece\" points=\"130,226 166,190 238,190 202,226\" fill=\"#80deea\" stroke=\"#37474f\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n</svg>", "alt": "Seven separate tangram pieces: two large triangles, one medium triangle, two small triangles, a small square standing on its corner, and a slanted four-sided piece."}
  },
  {
    id: "g3-maths-geometry-b-q10",
    prompt: "Rachit puts a cricket ball, a gas cylinder, an ice-cream cone and a matchbox on a sloping board. Which one is the odd one out because it cannot roll?",
    options: [
      { id: "a", text: "a cricket ball" },
      { id: "b", text: "a gas cylinder" },
      { id: "c", text: "a matchbox" },
      { id: "d", text: "an ice-cream cone" }
    ],
    answerId: "c",
    explanation: "A ball (sphere), a gas cylinder and an ice-cream cone each have a curved surface, so they can roll. A matchbox is a cuboid with only flat faces, so it slides instead of rolling. The ice-cream cone is tempting because it does not roll in a straight line, but it still rolls round in a circle on its curved surface.",
    hints: ["Something rolls only if it has a curved surface; check the shape of each of Rachit's objects."]
  },
  {
    id: "g3-maths-geometry-b-q11",
    prompt: "Shalu's Shape P and Shape Q each cover 6 squares of the grid, as shown. Which shape has the longer perimeter, and by how many units?",
    options: [
      { id: "a", text: "Shape P, by 4 units" },
      { id: "b", text: "They are the same" },
      { id: "c", text: "Shape Q, by 2 units" },
      { id: "d", text: "Shape Q, by 4 units" }
    ],
    answerId: "d",
    explanation: "Going round Shape P passes 3 + 2 + 3 + 2 = 10 unit sides. Going round the staircase Shape Q passes 14 unit sides. 14 \u2212 10 = 4, so Shape Q is longer by 4 units. 'They are the same' is tempting because both cover 6 squares, but the same area can have different perimeters.",
    hints: ["Walk round the outside of each of Shalu's shapes and count every unit side you pass."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two shapes, each of 6 shaded squares, on grids\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shalu's shapes</text>\n  <g class=\"part shape-group\">\n  <g class=\"part grid\">\n  <rect class=\"part cell shaded\" x=\"30\" y=\"55\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"85\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"30\" y=\"115\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"60\" y=\"55\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"60\" y=\"85\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"60\" y=\"115\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"90\" y=\"55\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"90\" y=\"85\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"90\" y=\"115\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  </g>\n  </g>\n  <text class=\"label\" x=\"75\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape P</text>\n  <g class=\"part shape-group\">\n  <g class=\"part grid\">\n  <rect class=\"part cell shaded\" x=\"220\" y=\"55\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"220\" y=\"85\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"220\" y=\"115\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"250\" y=\"55\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"250\" y=\"85\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"250\" y=\"115\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"280\" y=\"55\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"280\" y=\"85\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell shaded\" x=\"280\" y=\"115\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  <rect class=\"part cell\" x=\"310\" y=\"55\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"310\" y=\"85\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"310\" y=\"115\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#e65100\" stroke-width=\"1.4\"/>\n  </g>\n  </g>\n  <text class=\"label\" x=\"280\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shape Q</text>\n</svg>", "alt": "Shape P is a rectangle of shaded squares, 3 across and 2 down. Shape Q is a staircase of shaded squares: 2 in the top row, 2 in the middle row moved one square right, and 2 in the bottom row moved one more square right."}
  },
  {
    id: "g3-maths-geometry-b-q12",
    prompt: "In Urvi's rectangle, an upright line splits it into two halves, and each upper corner is joined to the foot of that splitting line, as shown. Find the number of triangles in the figure.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "There are 4 small triangles: one in each bottom corner and one on each side of the middle line. The two slanting lines and the top of the rectangle also make a big triangle that contains the two middle pieces. 4 + 1 = 5. 4 is tempting if you count only the small triangles.",
    hints: ["Find the small triangles first, then look for a bigger triangle made by joining Urvi's small triangles."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A rectangle with an upright middle line and two slanting lines from the top corners\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"160.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Urvi's rectangle</text>\n  <polygon class=\"part paper\" points=\"32,50 288,50 288,178 32,178\" fill=\"#e1f5fe\" stroke=\"none\" stroke-width=\"0\" stroke-linejoin=\"round\"/>\n  <line class=\"part seg\" x1=\"32\" y1=\"50\" x2=\"288\" y2=\"50\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"288\" y1=\"50\" x2=\"288\" y2=\"178\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"288\" y1=\"178\" x2=\"32\" y2=\"178\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"32\" y1=\"178\" x2=\"32\" y2=\"50\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"32\" y1=\"50\" x2=\"160\" y2=\"178\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"288\" y1=\"50\" x2=\"160\" y2=\"178\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"160\" y1=\"50\" x2=\"160\" y2=\"178\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n</svg>", "alt": "A wide rectangle. An upright line runs down the middle. Two slanting lines go from the top left and top right corners down to the bottom end of the middle line."}
  },
  {
    id: "g3-maths-geometry-b-q13",
    prompt: "Vaidehi folds a paper net into a closed cube-shaped box. At each corner of Vaidehi's box, how many square faces meet?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "At a corner of a cube, a top or bottom face meets two side faces, so 3 faces meet. 4 is tempting because a square has 4 corners and in a flat net 4 squares can meet at a point, but when the box is closed only 3 faces meet at a corner.",
    hints: ["Look at a corner of a closed box and count the faces that touch at that point."]
  },
  {
    id: "g3-maths-geometry-b-q14",
    prompt: "Yatin's sheet is creased along the dotted line, and the shaded part, which touches the crease at two points, is snipped away. What shape is the hole once the sheet is laid flat?",
    options: [
      { id: "a", text: "a rectangle" },
      { id: "b", text: "a hexagon" },
      { id: "c", text: "a pentagon" },
      { id: "d", text: "an octagon" }
    ],
    answerId: "b",
    explanation: "The cut has 2 corners on the fold and 2 corners away from it. Opening the paper copies the 2 corners that are away from the fold onto the other side, so the hole has 2 + 2 + 2 = 6 corners: a hexagon. A rectangle is tempting because the cut part has 4 sides, but that is only half of the hole.",
    hints: ["Picture the cut part of Yatin's sheet next to its mirror copy across the crease, then count the corners of the whole hole."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 330 215\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A folded sheet with a shaded four-sided cut touching the dotted fold line\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"330\" height=\"215\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"165.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Yatin's folded sheet</text>\n  <rect class=\"part paper\" x=\"150\" y=\"40\" width=\"130\" height=\"150\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"#546e7a\" stroke-width=\"1.6\"/>\n  <polygon class=\"part cut\" points=\"150,60 205,85 205,145 150,170\" fill=\"#ffab91\" stroke=\"#bf360c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <line class=\"part fold\" x1=\"150\" y1=\"33\" x2=\"150\" y2=\"197\" stroke=\"#d81b60\" stroke-width=\"2.2\" stroke-dasharray=\"7 5\"/>\n  <text class=\"label small\" x=\"140\" y=\"120\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#ad1457\">fold</text>\n</svg>", "alt": "A folded sheet whose left edge is the dotted fold line. A shaded four-sided piece is cut out: two of its corners lie on the fold, one above the other, and its other two corners are away from the fold, one above the other."}
  },
  {
    id: "g3-maths-geometry-b-q15",
    prompt: "Hetal lays 5 square tiles with 2 cm sides in a plus pattern: one in the centre and one against each of its four sides. How far is it all the way round the outside of the plus?",
    options: [
      { id: "a", text: "24 cm" },
      { id: "b", text: "40 cm" },
      { id: "c", text: "12 cm" },
      { id: "d", text: "20 cm" }
    ],
    answerId: "a",
    explanation: "Each of the 4 outer tiles has 3 sides on the outside, and the middle tile has none: 4 \u00d7 3 = 12 tile sides. Each side is 2 cm, so the perimeter is 12 \u00d7 2 = 24 cm. 40 cm is tempting because it adds all the sides of all 5 tiles, but sides where tiles touch are inside the plus.",
    hints: ["Count the outside tile edges of Hetal's plus sign, then use the length of each tile edge."]
  },
  {
    id: "g3-maths-geometry-b-q16",
    prompt: "Revati gives her letter card a half turn, like a clock hand moving from 12 to 6. Which picture shows Revati's card after the half turn?",
    options: [
      { id: "a", text: "Picture P" },
      { id: "b", text: "Picture Q" },
      { id: "c", text: "Picture R" },
      { id: "d", text: "Picture S" }
    ],
    answerId: "b",
    explanation: "After a half turn the card is upside down and back to front: the upright bar is on the right, and the arms point left, with the long arm now at the bottom. That is Picture Q. Picture R is tempting because it is also upside down, but it is only flipped top to bottom, so its arms still point right.",
    hints: ["After a half turn, the top of Revati's card ends up at the bottom and its left edge ends up on the right."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 620 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A card shaped like the letter F and four pictures P, Q, R and S of it turned or flipped\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"620\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"310.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Revati's letter card</text>\n  <rect class=\"part panel\" x=\"20\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"40,62.5 100,62.5 100,77.5 55,77.5 55,92.5 85,92.5 85,107.5 55,107.5 55,137.5 40,137.5\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"70\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Card</text>\n  <text class=\"label\" x=\"140\" y=\"105\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u2192</text>\n  <rect class=\"part panel\" x=\"170\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"257.5,70 257.5,130 242.5,130 242.5,85 227.5,85 227.5,115 212.5,115 212.5,85 182.5,85 182.5,70\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"220\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture P</text>\n  <rect class=\"part panel\" x=\"282\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"362,137.5 302,137.5 302,122.5 347,122.5 347,107.5 317,107.5 317,92.5 347,92.5 347,62.5 362,62.5\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"332\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture Q</text>\n  <rect class=\"part panel\" x=\"394\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"414,137.5 474,137.5 474,122.5 429,122.5 429,107.5 459,107.5 459,92.5 429,92.5 429,62.5 414,62.5\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"444\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture R</text>\n  <rect class=\"part panel\" x=\"506\" y=\"50\" width=\"100\" height=\"100\" rx=\"6\" fill=\"#fafafa\" stroke=\"#b0bec5\" stroke-width=\"1.2\"/>\n  <polygon class=\"part card\" points=\"586,62.5 526,62.5 526,77.5 571,77.5 571,92.5 541,92.5 541,107.5 571,107.5 571,137.5 586,137.5\" fill=\"#ef9a9a\" stroke=\"#b71c1c\" stroke-width=\"2\" stroke-linejoin=\"round\"/>\n  <text class=\"label\" x=\"556\" y=\"170\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Picture S</text>\n</svg>", "alt": "On the left, the card shaped like a capital F: an upright bar with a long arm at the top and a shorter arm in the middle, both pointing right. On the right, four pictures P, Q, R and S of the card, each turned or flipped in a different way."}
  },
  {
    id: "g3-maths-geometry-b-q17",
    prompt: "Sharvari notices that every flat face of a cube is a square. Complete her pattern about flat faces: cube is to square as cylinder is to which shape?",
    options: [
      { id: "a", text: "rectangle" },
      { id: "b", text: "circle" },
      { id: "c", text: "triangle" },
      { id: "d", text: "oval" }
    ],
    answerId: "b",
    explanation: "A cube's flat faces are squares. A cylinder's flat faces, at its two ends, are circles. Rectangle is tempting because the curved surface of a cylinder unrolls into a rectangle, but that surface is curved, not a flat face.",
    hints: ["Think of the shape a cylinder leaves when Sharvari presses its flat end on an ink pad and then on paper."]
  },
  {
    id: "g3-maths-geometry-b-q18",
    prompt: "Bhargav cuts out this net from card and folds it up. Which solid does Bhargav's net make?",
    options: [
      { id: "a", text: "a cone" },
      { id: "b", text: "a cuboid" },
      { id: "c", text: "a cylinder" },
      { id: "d", text: "a sphere" }
    ],
    answerId: "c",
    explanation: "The rectangle rolls round into a tube, and the two circles close its two ends, so the net folds into a cylinder. A cone is tempting because its net has a circle too, but a cone has only one circle and a fan-shaped piece, not a rectangle.",
    hints: ["Match each flat piece of Bhargav's net to a part of a solid: the rectangle rolls and the round pieces close the ends."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 340 330\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A net made of a rectangle with a circle touching its top side and a circle touching its bottom side\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"340\" height=\"330\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"170.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bhargav's net</text>\n  <rect class=\"part shape\" x=\"70\" y=\"100\" width=\"201.06\" height=\"90\" rx=\"0\" fill=\"#b3e5fc\" stroke=\"#0277bd\" stroke-width=\"2\"/>\n  <circle class=\"part shape\" cx=\"170.53\" cy=\"68\" r=\"32\" fill=\"#ffe082\" stroke=\"#ff8f00\" stroke-width=\"2\"/>\n  <circle class=\"part shape\" cx=\"170.53\" cy=\"222\" r=\"32\" fill=\"#ffe082\" stroke=\"#ff8f00\" stroke-width=\"2\"/>\n</svg>", "alt": "A long rectangle. A circle touches the middle of its top side and another circle of the same size touches the middle of its bottom side."}
  },
  {
    id: "g3-maths-geometry-b-q19",
    prompt: "A blade of Chaitra's toy windmill points straight up. She turns the windmill clockwise until that blade points straight to the left. How many quarter turns has she made?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "Turning clockwise, the blade goes from up to right (1 quarter turn), right to down (2), and down to left (3). So she made 3 quarter turns. 1 is tempting because left is just a quarter turn away going anticlockwise, but Chaitra turns clockwise.",
    hints: ["Move Chaitra's blade the way clock hands move, stopping each time it points straight up, right, down or left."]
  },
  {
    id: "g3-maths-geometry-b-q20",
    prompt: "An ant sits at a corner of Dheeraj's cube-shaped box. It walks along the edges to the corner farthest away, using as few edges as possible. How many different shortest routes can the ant take?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "8" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "A shortest route uses 3 edges: one going across, one going back (away from you) and one going up, in any order. The ant has 3 choices for its first edge and then 2 choices for its second edge, and the last edge is fixed: 3 \u00d7 2 = 6 routes. 3 is tempting because there are 3 edges at the start, but each of those starts splits into 2 routes.",
    hints: ["Count how many edges a shortest route on Dheeraj's box uses, then count the ways the ant can go on at each corner."]
  },
  {
    id: "g3-maths-geometry-b-q21",
    prompt: "Bharat joins every corner of his triangle to the middle point of the side facing it; the three joining lines meet at one point, as shown. Find the total number of triangles, big and small, in his figure.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "12" },
      { id: "c", text: "16" },
      { id: "d", text: "18" }
    ],
    answerId: "c",
    explanation: "There are 6 small triangles. Two small triangles that sit side by side along an edge of the big triangle join into 3 more, each with its top at the crossing point. Each of the 3 lines cuts the big triangle into 2 halves, which gives 6 more, and the whole triangle is 1 more. 6 + 3 + 6 + 1 = 16. 6 is tempting if you count only the smallest pieces.",
    hints: ["Count Bharat's smallest triangles, then triangles made by joining two, three or more small ones."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 315\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A triangle with three lines, each from a corner to the middle of the opposite side, crossing at one point\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"315\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"160.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bharat's triangle</text>\n  <polygon class=\"part paper\" points=\"34,297 160,45 286,297\" fill=\"#f1f8e9\" stroke=\"none\" stroke-width=\"0\" stroke-linejoin=\"round\"/>\n  <line class=\"part seg\" x1=\"34\" y1=\"297\" x2=\"286\" y2=\"297\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"286\" y1=\"297\" x2=\"160\" y2=\"45\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"160\" y1=\"45\" x2=\"34\" y2=\"297\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"160\" y1=\"45\" x2=\"160\" y2=\"297\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"34\" y1=\"297\" x2=\"223\" y2=\"171\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part seg\" x1=\"286\" y1=\"297\" x2=\"97\" y2=\"171\" stroke=\"#263238\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n</svg>", "alt": "A triangle with its point at the top. Three straight lines go from each corner to the middle of the opposite side. All three lines cross at one point inside, cutting the triangle into 6 small triangles."}
  },
  {
    id: "g3-maths-geometry-b-q22",
    prompt: "Aadya folds this numbered net into a cube. Three faces meet at the corner marked with a star. What is the sum of the numbers on those three faces?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "8" },
      { id: "c", text: "12" },
      { id: "d", text: "14" }
    ],
    answerId: "a",
    explanation: "Fold the middle row into a ring of four side faces: 1, 5, 3, 6. Square 4 becomes the top and square 2 the bottom. The star is at the bottom corner where faces 5 and 3 meet, so the third face there is the bottom, 2. 5 + 3 + 2 = 10. 8 is tempting from adding only the two squares that touch the star in the flat net, but the bottom face 2 folds round to that corner too.",
    hints: ["Fold Aadya's middle row into a ring first, then decide whether the starred corner is at the top or the bottom."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A cube net of six numbered squares with a star at one corner\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"160.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Aadya's numbered net</text>\n  <rect class=\"part face\" x=\"40\" y=\"45\" width=\"52\" height=\"52\" rx=\"0\" fill=\"#e1bee7\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"66\" y=\"79\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part face\" x=\"40\" y=\"97\" width=\"52\" height=\"52\" rx=\"0\" fill=\"#e1bee7\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"66\" y=\"131\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <rect class=\"part face\" x=\"92\" y=\"97\" width=\"52\" height=\"52\" rx=\"0\" fill=\"#e1bee7\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"118\" y=\"131\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part face\" x=\"144\" y=\"97\" width=\"52\" height=\"52\" rx=\"0\" fill=\"#e1bee7\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"170\" y=\"131\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part face\" x=\"196\" y=\"97\" width=\"52\" height=\"52\" rx=\"0\" fill=\"#e1bee7\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"222\" y=\"131\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part face\" x=\"196\" y=\"149\" width=\"52\" height=\"52\" rx=\"0\" fill=\"#e1bee7\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label\" x=\"222\" y=\"183\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <polygon class=\"part star\" points=\"144,140 146.22,145.94 152.56,146.22 147.59,150.17 149.29,156.28 144,152.78 138.71,156.28 140.41,150.17 135.44,146.22 141.78,145.94\" fill=\"#ffb300\" stroke=\"#e65100\" stroke-width=\"1\" stroke-linejoin=\"round\"/>\n</svg>", "alt": "A net of six squares. Top row: a square numbered 4 at the far left. Middle row, left to right: squares numbered 1, 5, 3 and 6. Bottom row: a square numbered 2 under the 6. A star sits at the point where the bottom of the 5 meets the bottom of the 3."}
  },
  {
    id: "g3-maths-geometry-b-q23",
    prompt: "Ritvik cuts a 12 cm by 12 cm square sheet into 4 equal strips, each as long as the sheet. How much longer is the total distance round all 4 strips than the distance round the sheet?",
    options: [
      { id: "a", text: "72 cm" },
      { id: "b", text: "120 cm" },
      { id: "c", text: "48 cm" },
      { id: "d", text: "24 cm" }
    ],
    answerId: "a",
    explanation: "Each strip is 12 cm long and 12 \u00f7 4 = 3 cm wide, so its perimeter is 12 + 3 + 12 + 3 = 30 cm. The 4 strips together have 4 \u00d7 30 = 120 cm. The sheet's perimeter is 4 \u00d7 12 = 48 cm. 120 \u2212 48 = 72 cm. 120 cm is tempting because it is the total for the strips, but the question asks how much more it is than the sheet.",
    hints: ["Find the width and the perimeter of each of Ritvik's strips, then compare all the strips with the whole sheet."]
  },
  {
    id: "g3-maths-geometry-b-q24",
    prompt: "Swara's chocolate bar had 2 rows of 4 equal pieces, but the piece at the top right has been eaten, as shown. Tracing only along the lines of the pieces that are left, how many rectangles of any size can she find? Squares count as rectangles too.",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "22" },
      { id: "c", text: "30" },
      { id: "d", text: "18" }
    ],
    answerId: "b",
    explanation: "Count by size, skipping any rectangle that would need the eaten piece. Single pieces: 7. Two side by side: 5. Three in a row: 3. The whole bottom row of four: 1. Two one above the other: 3. Two-by-two blocks: 2. Two rows of three: 1. 7 + 5 + 3 + 1 + 3 + 2 + 1 = 22. 30 is tempting because a whole 2-by-4 bar has 30 rectangles, but the 8 rectangles that use the eaten top-right piece are gone.",
    hints: ["Count Swara's rectangles size by size, and drop every rectangle that would need the eaten piece."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 340 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A chocolate bar of 2 rows of 4 square pieces with the top right piece missing\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"340\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"170.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Swara's chocolate bar</text>\n  <rect class=\"part eaten\" x=\"230\" y=\"50\" width=\"60\" height=\"60\" rx=\"0\" fill=\"none\" stroke=\"#bcaaa4\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n  <g class=\"part grid\">\n  <rect class=\"part cell shaded\" x=\"50\" y=\"50\" width=\"60\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#3e2723\" stroke-width=\"3\"/>\n  <rect class=\"part cell shaded\" x=\"50\" y=\"110\" width=\"60\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#3e2723\" stroke-width=\"3\"/>\n  <rect class=\"part cell shaded\" x=\"110\" y=\"50\" width=\"60\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#3e2723\" stroke-width=\"3\"/>\n  <rect class=\"part cell shaded\" x=\"110\" y=\"110\" width=\"60\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#3e2723\" stroke-width=\"3\"/>\n  <rect class=\"part cell shaded\" x=\"170\" y=\"50\" width=\"60\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#3e2723\" stroke-width=\"3\"/>\n  <rect class=\"part cell shaded\" x=\"170\" y=\"110\" width=\"60\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#3e2723\" stroke-width=\"3\"/>\n  <rect class=\"part cell shaded\" x=\"230\" y=\"110\" width=\"60\" height=\"60\" rx=\"0\" fill=\"#a1887f\" stroke=\"#3e2723\" stroke-width=\"3\"/>\n  </g>\n</svg>", "alt": "A chocolate bar drawn as a grid of equal squares: the bottom row has 4 squares and the top row has 3 squares, because the top right piece is missing, leaving 7 pieces."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "⬡", "title": "Shapes all around", "body": ["Look at a dice, a kite, a window and a chapati — each has its own sides, corners or curves. Let's name shapes, measure round them and spot the ones that fold in half.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Look at a dice, a kite, a window and a chapati — each has its own sides, corners or curves. Let's name shapes, measure round them and spot the ones that fold in half. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Flat Shapes: Sides and Corners", "steps": ["A flat shape made of straight sides is named by how many sides it has. A triangle has 3 sides and 3 corners, a square and a rectangle have 4, a pentagon has 5 and a hexagon has 6.", "A circle has one curved edge and no corners. Turning a shape does not change its name: a square standing on a corner is still a square.", "Check: How many corners does a hexagon have?"], "punchline": "Answer: 6", "visual": "none", "speak": "A flat shape made of straight sides is named by how many sides it has. A triangle has 3 sides and 3 corners, a square and a rectangle have 4, a pentagon has 5 and a hexagon has 6. A circle has one curved edge and no corners. Turning a shape does not change its name: a square standing on a corner is still a square."},
  {"id": "s2", "type": "demo", "title": "Straight Lines, Curved Lines and Solid Shapes", "steps": ["Some lines are straight and some are curved. Solid shapes can have flat faces, curved surfaces, edges where faces meet, and corners where edges meet.", "A cube has 6 square faces, 12 edges and 8 corners. A cylinder has 2 flat circles and a curved surface. A cone has 1 flat circle, a curved surface and a pointed tip. A sphere is curved all over.", "Check: How many edges does a cube have?"], "punchline": "Answer: 12", "visual": "none", "speak": "Some lines are straight and some are curved. Solid shapes can have flat faces, curved surfaces, edges where faces meet, and corners where edges meet. A cube has 6 square faces, 12 edges and 8 corners. A cylinder has 2 flat circles and a curved surface. A cone has 1 flat circle, a curved surface and a pointed tip. A sphere is curved all over."},
  {"id": "s3", "type": "demo", "title": "Perimeter: The Distance Round a Shape", "steps": ["The perimeter is the distance all the way round the edge of a shape. Add the lengths of all the sides, or count the unit lengths along the edge on squared paper.", "When two shapes are joined, the sides that touch are inside, so they are not part of the new perimeter.", "Check: A rectangle has sides of 5 cm and 2 cm. What is its perimeter?"], "punchline": "Answer: 14 cm", "visual": "none", "speak": "The perimeter is the distance all the way round the edge of a shape. Add the lengths of all the sides, or count the unit lengths along the edge on squared paper. When two shapes are joined, the sides that touch are inside, so they are not part of the new perimeter."},
  {"id": "s4", "type": "demo", "title": "Area: Counting Squares", "steps": ["The area of a flat shape is the number of unit squares that cover it. Count the squares, or count the rows and how many squares are in each row.", "Two shapes can cover the same number of squares and still have different perimeters.", "Check: A rectangle on squared paper is 3 rows of 4 squares. How many squares does it cover?"], "punchline": "Answer: 12", "visual": "none", "speak": "The area of a flat shape is the number of unit squares that cover it. Count the squares, or count the rows and how many squares are in each row. Two shapes can cover the same number of squares and still have different perimeters."},
  {"id": "s5", "type": "demo", "title": "Symmetry, Folding and Cutting", "steps": ["A line of symmetry is a fold line where the two halves match exactly. Some shapes have one such line, some have more, and some have none.", "If you fold paper and cut along the fold, the opened hole is the cut shape together with its mirror image.", "Check: How many lines of symmetry does a rectangle that is not a square have?"], "punchline": "Answer: 2", "visual": "none", "speak": "A line of symmetry is a fold line where the two halves match exactly. Some shapes have one such line, some have more, and some have none. If you fold paper and cut along the fold, the opened hole is the cut shape together with its mirror image."},
  {"id": "s6", "type": "demo", "title": "Turns, Patterns and Tiles", "steps": ["A quarter turn moves a shape like a clock hand going from 12 to 3. Two quarter turns make a half turn and four quarter turns make a full turn.", "A pattern repeats a group of shapes. Shapes that fit together with no gaps and no overlaps make a tiling, like squares on a floor.", "Check: How many quarter turns make one full turn?"], "punchline": "Answer: 4", "visual": "none", "speak": "A quarter turn moves a shape like a clock hand going from 12 to 3. Two quarter turns make a half turn and four quarter turns make a full turn. A pattern repeats a group of shapes. Shapes that fit together with no gaps and no overlaps make a tiling, like squares on a floor."},
  {"id": "s7", "type": "demo", "title": "Counting Shapes, Tangrams and Nets", "steps": ["To count shapes in a figure, count the smallest ones first, then the ones made by joining two, three or more, so you do not miss any.", "A tangram square splits into 7 pieces that can be moved around to make many pictures. A net is a flat shape that folds up into a solid; a cube net has 6 squares.", "Check: How many squares of any size are there in a 2-by-2 grid of squares?"], "punchline": "Answer: 5", "visual": "none", "speak": "To count shapes in a figure, count the smallest ones first, then the ones made by joining two, three or more, so you do not miss any. A tangram square splits into 7 pieces that can be moved around to make many pictures. A net is a flat shape that folds up into a solid; a cube net has 6 squares."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "A rectangle on squared paper is 3 rows of 4 squares. How many unit squares cover it?", "options": [{"id": "a", "text": "7"}, {"id": "b", "text": "12"}, {"id": "c", "text": "14"}, {"id": "d", "text": "3"}], "answerId": "b", "why": "3 rows of 4 squares cover 3 × 4 = 12 unit squares. 7 is tempting if you add 3 and 4, and 14 if you find the perimeter instead of the area.", "visual": "none", "speak": "A rectangle on squared paper is 3 rows of 4 squares. How many unit squares cover it?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Sides and corners name a flat shape", "Perimeter = distance round the edge", "Area = count of unit squares", "A fold line that matches both halves is a line of symmetry", "4 quarter turns make one full turn", "A cube net has 6 squares"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g3MathsGeometry: ChapterDef = {
  id: "g3-geometry",
  title: "Geometry",
  emoji: "\u2b21",
  blurb: "Flat & solid shapes, perimeter, area, symmetry, turns & nets",
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

export const g3MathsGeometryQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
