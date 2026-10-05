import type { ChapterDef, PrepQuestion } from "../types";

/** Numbers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-maths-numbers-a-q01",
    prompt: "Look at the Number Houses. What number do the houses show?",
    options: [
      { id: "a", text: "385" },
      { id: "b", text: "538" },
      { id: "c", text: "583" },
      { id: "d", text: "853" }
    ],
    answerId: "c",
    explanation: "5 hundreds, 8 tens and 3 ones make 583.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 185\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number Houses\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"185\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"210.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Number Houses</text>\n  <polygon class=\"part roof\" points=\"24,80 82.0,40 140,80\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"82.0\" y=\"72\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Hundreds</text>\n  <rect class=\"part house\" x=\"30\" y=\"80\" width=\"104\" height=\"82\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part door digit-tile\" x=\"60.0\" y=\"94\" width=\"44\" height=\"52\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"82.0\" y=\"131\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <text class=\"label small\" x=\"82.0\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(H)</text>\n  <polygon class=\"part roof\" points=\"152,80 210.0,40 268,80\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"210.0\" y=\"72\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tens</text>\n  <rect class=\"part house\" x=\"158\" y=\"80\" width=\"104\" height=\"82\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part door digit-tile\" x=\"188.0\" y=\"94\" width=\"44\" height=\"52\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"210.0\" y=\"131\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label small\" x=\"210.0\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(T)</text>\n  <polygon class=\"part roof\" points=\"280,80 338.0,40 396,80\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"338.0\" y=\"72\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ones</text>\n  <rect class=\"part house\" x=\"286\" y=\"80\" width=\"104\" height=\"82\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part door digit-tile\" x=\"316.0\" y=\"94\" width=\"44\" height=\"52\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"338.0\" y=\"131\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <text class=\"label small\" x=\"338.0\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(O)</text>\n</svg>", "alt": "Three houses side by side: the Hundreds house holds 5, the Tens house holds 8 and the Ones house holds 3."}
  },
  {
    id: "g3-maths-numbers-a-q02",
    prompt: "Look at the sticks. How many sticks are there in all?",
    options: [
      { id: "a", text: "642" },
      { id: "b", text: "246" },
      { id: "c", text: "24" },
      { id: "d", text: "264" }
    ],
    answerId: "b",
    explanation: "2 big bundles = 200, 4 small bundles = 40, 6 loose = 6. So 200 + 40 + 6 = 246.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Count the Sticks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"210\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Count the Sticks</text>\n  <line class=\"part stick big-bundle\" x1=\"16.0\" y1=\"60\" x2=\"16.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"18.6\" y1=\"60\" x2=\"18.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"21.2\" y1=\"60\" x2=\"21.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"23.8\" y1=\"60\" x2=\"23.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"26.4\" y1=\"60\" x2=\"26.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"29.0\" y1=\"60\" x2=\"29.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"31.6\" y1=\"60\" x2=\"31.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"34.2\" y1=\"60\" x2=\"34.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"36.8\" y1=\"60\" x2=\"36.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"39.400000000000006\" y1=\"60\" x2=\"39.400000000000006\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"42.0\" y1=\"60\" x2=\"42.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"44.6\" y1=\"60\" x2=\"44.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"47.2\" y1=\"60\" x2=\"47.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"49.800000000000004\" y1=\"60\" x2=\"49.800000000000004\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"52.4\" y1=\"60\" x2=\"52.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"55.0\" y1=\"60\" x2=\"55.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"57.6\" y1=\"60\" x2=\"57.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"60.2\" y1=\"60\" x2=\"60.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"62.800000000000004\" y1=\"60\" x2=\"62.800000000000004\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"65.4\" y1=\"60\" x2=\"65.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <rect class=\"part band\" x=\"13\" y=\"80\" width=\"55.0\" height=\"8\" rx=\"2\" fill=\"#e53935\" stroke=\"#b71c1c\" stroke-width=\"1\"/>\n  <rect class=\"part band\" x=\"13\" y=\"128\" width=\"55.0\" height=\"8\" rx=\"2\" fill=\"#e53935\" stroke=\"#b71c1c\" stroke-width=\"1\"/>\n  <line class=\"part stick big-bundle\" x1=\"80.0\" y1=\"60\" x2=\"80.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"82.6\" y1=\"60\" x2=\"82.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"85.2\" y1=\"60\" x2=\"85.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"87.8\" y1=\"60\" x2=\"87.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"90.4\" y1=\"60\" x2=\"90.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"93.0\" y1=\"60\" x2=\"93.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"95.6\" y1=\"60\" x2=\"95.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"98.2\" y1=\"60\" x2=\"98.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"100.8\" y1=\"60\" x2=\"100.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"103.4\" y1=\"60\" x2=\"103.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"106.0\" y1=\"60\" x2=\"106.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"108.6\" y1=\"60\" x2=\"108.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"111.2\" y1=\"60\" x2=\"111.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"113.80000000000001\" y1=\"60\" x2=\"113.80000000000001\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"116.4\" y1=\"60\" x2=\"116.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"119.0\" y1=\"60\" x2=\"119.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"121.6\" y1=\"60\" x2=\"121.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"124.2\" y1=\"60\" x2=\"124.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"126.80000000000001\" y1=\"60\" x2=\"126.80000000000001\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick big-bundle\" x1=\"129.4\" y1=\"60\" x2=\"129.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <rect class=\"part band\" x=\"77\" y=\"80\" width=\"55.0\" height=\"8\" rx=\"2\" fill=\"#e53935\" stroke=\"#b71c1c\" stroke-width=\"1\"/>\n  <rect class=\"part band\" x=\"77\" y=\"128\" width=\"55.0\" height=\"8\" rx=\"2\" fill=\"#e53935\" stroke=\"#b71c1c\" stroke-width=\"1\"/>\n  <line class=\"part stick ten-bundle\" x1=\"154.0\" y1=\"80\" x2=\"154.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"156.4\" y1=\"80\" x2=\"156.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"158.8\" y1=\"80\" x2=\"158.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"161.2\" y1=\"80\" x2=\"161.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"163.6\" y1=\"80\" x2=\"163.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"166.0\" y1=\"80\" x2=\"166.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"168.4\" y1=\"80\" x2=\"168.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"170.8\" y1=\"80\" x2=\"170.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"173.2\" y1=\"80\" x2=\"173.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"175.6\" y1=\"80\" x2=\"175.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <rect class=\"part band\" x=\"151\" y=\"108\" width=\"27.0\" height=\"7\" rx=\"2\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"1\"/>\n  <line class=\"part stick ten-bundle\" x1=\"188.0\" y1=\"80\" x2=\"188.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"190.4\" y1=\"80\" x2=\"190.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"192.8\" y1=\"80\" x2=\"192.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"195.2\" y1=\"80\" x2=\"195.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"197.6\" y1=\"80\" x2=\"197.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"200.0\" y1=\"80\" x2=\"200.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"202.4\" y1=\"80\" x2=\"202.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"204.8\" y1=\"80\" x2=\"204.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"207.2\" y1=\"80\" x2=\"207.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"209.6\" y1=\"80\" x2=\"209.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <rect class=\"part band\" x=\"185\" y=\"108\" width=\"27.0\" height=\"7\" rx=\"2\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"1\"/>\n  <line class=\"part stick ten-bundle\" x1=\"222.0\" y1=\"80\" x2=\"222.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"224.4\" y1=\"80\" x2=\"224.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"226.8\" y1=\"80\" x2=\"226.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"229.2\" y1=\"80\" x2=\"229.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"231.6\" y1=\"80\" x2=\"231.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"234.0\" y1=\"80\" x2=\"234.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"236.4\" y1=\"80\" x2=\"236.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"238.8\" y1=\"80\" x2=\"238.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"241.2\" y1=\"80\" x2=\"241.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"243.6\" y1=\"80\" x2=\"243.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <rect class=\"part band\" x=\"219\" y=\"108\" width=\"27.0\" height=\"7\" rx=\"2\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"1\"/>\n  <line class=\"part stick ten-bundle\" x1=\"256.0\" y1=\"80\" x2=\"256.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"258.4\" y1=\"80\" x2=\"258.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"260.8\" y1=\"80\" x2=\"260.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"263.2\" y1=\"80\" x2=\"263.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"265.6\" y1=\"80\" x2=\"265.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"268.0\" y1=\"80\" x2=\"268.0\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"270.4\" y1=\"80\" x2=\"270.4\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"272.8\" y1=\"80\" x2=\"272.8\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"275.2\" y1=\"80\" x2=\"275.2\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick ten-bundle\" x1=\"277.6\" y1=\"80\" x2=\"277.6\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <rect class=\"part band\" x=\"253\" y=\"108\" width=\"27.0\" height=\"7\" rx=\"2\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"1\"/>\n  <line class=\"part stick loose\" x1=\"300\" y1=\"100\" x2=\"300\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick loose\" x1=\"312\" y1=\"100\" x2=\"312\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick loose\" x1=\"324\" y1=\"100\" x2=\"324\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick loose\" x1=\"336\" y1=\"100\" x2=\"336\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick loose\" x1=\"348\" y1=\"100\" x2=\"348\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part stick loose\" x1=\"360\" y1=\"100\" x2=\"360\" y2=\"150\" stroke=\"#8d6e63\" stroke-width=\"3\"/>\n  <line class=\"part mat\" x1=\"10\" y1=\"154\" x2=\"470\" y2=\"154\" stroke=\"#999\" stroke-width=\"1\"/>\n  <text class=\"label small\" x=\"240.0\" y=\"176\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Big bundle (red bands) = 100 sticks \u00b7 Small bundle (blue band) = 10 sticks</text>\n  <text class=\"label small\" x=\"240.0\" y=\"194\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Loose stick = 1</text>\n</svg>", "alt": "Two big bundles of sticks with red bands, four small bundles with blue bands, and six loose sticks. A key says big bundle = 100, small bundle = 10, loose stick = 1."}
  },
  {
    id: "g3-maths-numbers-a-q03",
    prompt: "Look at charts A, B, C and D. Which chart shows **three hundred five**?",
    options: [
      { id: "a", text: "Chart A" },
      { id: "b", text: "Chart B" },
      { id: "c", text: "Chart C" },
      { id: "d", text: "Chart D" }
    ],
    answerId: "d",
    explanation: "Three hundred five = 305: 3 hundreds, 0 tens, 5 ones. That is Chart D.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Which chart is correct?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which chart is correct?</text>\n  <text class=\"label option-label\" x=\"30\" y=\"90\" font-size=\"17\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <rect class=\"part header\" x=\"60\" y=\"48\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"83.0\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"60\" y=\"72\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"83.0\" y=\"101\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part header\" x=\"106\" y=\"48\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"129.0\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"106\" y=\"72\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"129.0\" y=\"101\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"152\" y=\"48\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"175.0\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"152\" y=\"72\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"175.0\" y=\"101\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <text class=\"label option-label\" x=\"255\" y=\"90\" font-size=\"17\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <rect class=\"part header\" x=\"285\" y=\"48\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"308.0\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"285\" y=\"72\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"308.0\" y=\"101\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"331\" y=\"48\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"354.0\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"331\" y=\"72\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"354.0\" y=\"101\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"377\" y=\"48\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"400.0\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"377\" y=\"72\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"400.0\" y=\"101\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <text class=\"label option-label\" x=\"30\" y=\"185\" font-size=\"17\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <rect class=\"part header\" x=\"60\" y=\"143\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"83.0\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"60\" y=\"167\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"83.0\" y=\"196\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part header\" x=\"106\" y=\"143\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"129.0\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"106\" y=\"167\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"129.0\" y=\"196\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"152\" y=\"143\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"175.0\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"152\" y=\"167\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"175.0\" y=\"196\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <text class=\"label option-label\" x=\"255\" y=\"185\" font-size=\"17\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <rect class=\"part header\" x=\"285\" y=\"143\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"308.0\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"285\" y=\"167\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"308.0\" y=\"196\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part header\" x=\"331\" y=\"143\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"354.0\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"331\" y=\"167\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"354.0\" y=\"196\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"377\" y=\"143\" width=\"46\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"400.0\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"377\" y=\"167\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"400.0\" y=\"196\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <text class=\"label small\" x=\"230.0\" y=\"224\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">H = Hundreds, T = Tens, O = Ones</text>\n</svg>", "alt": "Four small place value charts labelled A to D with columns H, T, O. A: 3, 5, 0. B: 5, 0, 3. C: 3, 0, 0. D: 3, 0, 5."}
  },
  {
    id: "g3-maths-numbers-a-q04",
    prompt: "Which number comes just after 299?",
    options: [
      { id: "a", text: "298" },
      { id: "b", text: "399" },
      { id: "c", text: "290" },
      { id: "d", text: "300" }
    ],
    answerId: "d",
    explanation: "One more than 299 is 300.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q05",
    prompt: "Look at the Number Balloons. Which balloon has an **even** number?",
    options: [
      { id: "a", text: "Balloon A" },
      { id: "b", text: "Balloon B" },
      { id: "c", text: "Balloon C" },
      { id: "d", text: "Balloon D" }
    ],
    answerId: "d",
    explanation: "Even numbers end in 0, 2, 4, 6 or 8. Only 64 (Balloon D) ends in 4.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number Balloons\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Number Balloons</text>\n  <path class=\"part string\" d=\"M 70 128 Q 62 150 70 172\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.2\"/>\n  <ellipse class=\"part balloon\" cx=\"70\" cy=\"88\" rx=\"38\" ry=\"44\" fill=\"#f48fb1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"part knot\" points=\"65,134 75,134 70,127\" fill=\"#f48fb1\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"70\" y=\"96\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">37</text>\n  <text class=\"label option-label\" x=\"70\" y=\"192\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <path class=\"part string\" d=\"M 177 128 Q 169 150 177 172\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.2\"/>\n  <ellipse class=\"part balloon\" cx=\"177\" cy=\"88\" rx=\"38\" ry=\"44\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"part knot\" points=\"172,134 182,134 177,127\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"177\" y=\"96\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">51</text>\n  <text class=\"label option-label\" x=\"177\" y=\"192\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <path class=\"part string\" d=\"M 284 128 Q 276 150 284 172\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.2\"/>\n  <ellipse class=\"part balloon\" cx=\"284\" cy=\"88\" rx=\"38\" ry=\"44\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"part knot\" points=\"279,134 289,134 284,127\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"284\" y=\"96\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">29</text>\n  <text class=\"label option-label\" x=\"284\" y=\"192\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <path class=\"part string\" d=\"M 391 128 Q 383 150 391 172\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.2\"/>\n  <ellipse class=\"part balloon\" cx=\"391\" cy=\"88\" rx=\"38\" ry=\"44\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"part knot\" points=\"386,134 396,134 391,127\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"391\" y=\"96\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">64</text>\n  <text class=\"label option-label\" x=\"391\" y=\"192\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n</svg>", "alt": "Four balloons labelled A to D with numbers: A 37, B 51, C 29, D 64."}
  },
  {
    id: "g3-maths-numbers-a-q06",
    prompt: "Which number is bigger: 618 or 681?",
    options: [
      { id: "a", text: "681" },
      { id: "b", text: "618" },
      { id: "c", text: "Both are the same" },
      { id: "d", text: "We cannot tell" }
    ],
    answerId: "a",
    explanation: "Both have 6 hundreds, but 681 has 8 tens and 618 has only 1 ten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q07",
    prompt: "Look at the blocks. What number do the blocks make together?",
    options: [
      { id: "a", text: "790" },
      { id: "b", text: "709" },
      { id: "c", text: "7009" },
      { id: "d", text: "79" }
    ],
    answerId: "b",
    explanation: "700 + 9 = 709. There are no tens, so a 0 sits in the tens place.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Join the blocks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Join the blocks</text>\n  <rect class=\"part block\" x=\"114.0\" y=\"34.5\" width=\"130\" height=\"85.5\" rx=\"4\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"179.0\" y=\"82.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">700</text>\n  <text class=\"label small\" x=\"179.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Hundreds</text>\n  <text class=\"label op\" x=\"257.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"270.0\" y=\"60.400000000000006\" width=\"56\" height=\"59.599999999999994\" rx=\"4\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"298.0\" y=\"95.2\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <text class=\"label small\" x=\"298.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ones</text>\n</svg>", "alt": "Two blocks joined with a plus sign: 700 (Hundreds) plus 9 (Ones). There is no tens block."}
  },
  {
    id: "g3-maths-numbers-a-q08",
    prompt: "Look at the cards. We add the same number each time. What goes on the **?** card?",
    options: [
      { id: "a", text: "180" },
      { id: "b", text: "176" },
      { id: "c", text: "200" },
      { id: "d", text: "250" }
    ],
    answerId: "c",
    explanation: "Each card is 25 more: 175 + 25 = 200. Then 200 + 25 = 225.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 508 100\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Find the missing card\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"508\" height=\"100\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"254.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Find the missing card</text>\n  <rect class=\"part card\" x=\"15\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"54.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">125</text>\n  <line class=\"arrow\" x1=\"96\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"114,60 108,56 108,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"115\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"154.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">150</text>\n  <line class=\"arrow\" x1=\"196\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"214,60 208,56 208,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"215\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"254.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">175</text>\n  <line class=\"arrow\" x1=\"296\" y1=\"60\" x2=\"310\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"314,60 308,56 308,64\" fill=\"#333\"/>\n  <rect class=\"part card missing\" x=\"315\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"354.0\" y=\"66\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <line class=\"arrow\" x1=\"396\" y1=\"60\" x2=\"410\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"414,60 408,56 408,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"415\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"454.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">225</text>\n</svg>", "alt": "Five cards joined by arrows: 125, 150, 175, a question mark card, 225."}
  },
  {
    id: "g3-maths-numbers-a-q09",
    prompt: "Which number comes just before 500?",
    options: [
      { id: "a", text: "499" },
      { id: "b", text: "501" },
      { id: "c", text: "400" },
      { id: "d", text: "490" }
    ],
    answerId: "a",
    explanation: "One less than 500 is 499.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q10",
    prompt: "What is the 8 worth in 832?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "80" },
      { id: "c", text: "832" },
      { id: "d", text: "800" }
    ],
    answerId: "d",
    explanation: "The 8 is in the hundreds place, so it is worth 800.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q11",
    prompt: "Look at the Digit Tiles. What is the **biggest** number you can make using each tile once?",
    options: [
      { id: "a", text: "863" },
      { id: "b", text: "836" },
      { id: "c", text: "683" },
      { id: "d", text: "368" }
    ],
    answerId: "a",
    explanation: "Put the biggest digit first: 8, then 6, then 3. That makes 863.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Digit Tiles\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"130.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Digit Tiles</text>\n  <rect class=\"part tile\" x=\"45.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"70.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part tile\" x=\"105.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"130.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part tile\" x=\"165.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"190.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label small\" x=\"130.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Use each tile once.</text>\n</svg>", "alt": "Three digit tiles showing 6, 3 and 8."}
  },
  {
    id: "g3-maths-numbers-a-q12",
    prompt: "What is the smallest 3-digit number you can make with 7, 0 and 4, using each digit once?",
    options: [
      { id: "a", text: "047" },
      { id: "b", text: "470" },
      { id: "c", text: "407" },
      { id: "d", text: "704" }
    ],
    answerId: "c",
    explanation: "Zero cannot go first, so start with 4, then put 0, then 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q13",
    prompt: "Look at the number line. Each small jump is 1. What number is at **P**?",
    options: [
      { id: "a", text: "478" },
      { id: "b", text: "477" },
      { id: "c", text: "488" },
      { id: "d", text: "468" }
    ],
    answerId: "a",
    explanation: "P is 3 jumps after 475. 475, 476, 477, 478. So P = 478.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Where is P?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Where is P?</text>\n  <line class=\"axis\" x1=\"18\" y1=\"92\" x2=\"422\" y2=\"92\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"428,92 420,87 420,97\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"12,92 20,87 20,97\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"82\" x2=\"30.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">470</text>\n  <line class=\"tick\" x1=\"68.0\" y1=\"82\" x2=\"68.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"106.0\" y1=\"82\" x2=\"106.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"144.0\" y1=\"82\" x2=\"144.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"182.0\" y1=\"82\" x2=\"182.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"220.0\" y1=\"82\" x2=\"220.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"220.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">475</text>\n  <line class=\"tick\" x1=\"258.0\" y1=\"82\" x2=\"258.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"296.0\" y1=\"82\" x2=\"296.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"334.0\" y1=\"82\" x2=\"334.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"372.0\" y1=\"82\" x2=\"372.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"410.0\" y1=\"82\" x2=\"410.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"410.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">480</text>\n  <circle class=\"part point\" cx=\"334.0\" cy=\"92\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"334.0\" y1=\"52\" x2=\"334.0\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"334.0,83 329.0,75 339.0,75\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"334.0\" y=\"48\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n</svg>", "alt": "A number line from 470 to 480 with a tick for every number. 470, 475 and 480 are labelled. Point P is three ticks after 475."}
  },
  {
    id: "g3-maths-numbers-a-q14",
    prompt: "Look at the Toffee Jars. Which list puts the jars in order from the **smallest** number to the **biggest**?",
    options: [
      { id: "a", text: "C, A, D, B" },
      { id: "b", text: "A, C, D, B" },
      { id: "c", text: "C, A, B, D" },
      { id: "d", text: "B, D, A, C" }
    ],
    answerId: "a",
    explanation: "596 (C) < 609 (A) < 660 (D) < 690 (B).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Toffee Jars\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Toffee Jars</text>\n  <rect class=\"part lid\" x=\"40\" y=\"40\" width=\"54\" height=\"14\" rx=\"3\" fill=\"#bcaaa4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part jar\" d=\"M 36 56 L 98 56 Q 112 60 112 80 L 112 150 Q 112 164 98 164 L 36 164 Q 22 164 22 150 L 22 80 Q 22 60 36 56 Z\" fill=\"#e1f5fe\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part toffee\" cx=\"42\" cy=\"140\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"67\" cy=\"140\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"92\" cy=\"140\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"42\" cy=\"122\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"67\" cy=\"122\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"92\" cy=\"122\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part jar-label\" x=\"34\" y=\"76\" width=\"66\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"67\" y=\"98\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">609</text>\n  <text class=\"label option-label\" x=\"67\" y=\"188\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Jar A</text>\n  <rect class=\"part lid\" x=\"150\" y=\"40\" width=\"54\" height=\"14\" rx=\"3\" fill=\"#bcaaa4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part jar\" d=\"M 146 56 L 208 56 Q 222 60 222 80 L 222 150 Q 222 164 208 164 L 146 164 Q 132 164 132 150 L 132 80 Q 132 60 146 56 Z\" fill=\"#e1f5fe\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part toffee\" cx=\"152\" cy=\"140\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"177\" cy=\"140\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"202\" cy=\"140\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"152\" cy=\"122\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"177\" cy=\"122\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"202\" cy=\"122\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part jar-label\" x=\"144\" y=\"76\" width=\"66\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"177\" y=\"98\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">690</text>\n  <text class=\"label option-label\" x=\"177\" y=\"188\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Jar B</text>\n  <rect class=\"part lid\" x=\"260\" y=\"40\" width=\"54\" height=\"14\" rx=\"3\" fill=\"#bcaaa4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part jar\" d=\"M 256 56 L 318 56 Q 332 60 332 80 L 332 150 Q 332 164 318 164 L 256 164 Q 242 164 242 150 L 242 80 Q 242 60 256 56 Z\" fill=\"#e1f5fe\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part toffee\" cx=\"262\" cy=\"140\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"287\" cy=\"140\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"312\" cy=\"140\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"262\" cy=\"122\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"287\" cy=\"122\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"312\" cy=\"122\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part jar-label\" x=\"254\" y=\"76\" width=\"66\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"287\" y=\"98\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">596</text>\n  <text class=\"label option-label\" x=\"287\" y=\"188\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Jar C</text>\n  <rect class=\"part lid\" x=\"370\" y=\"40\" width=\"54\" height=\"14\" rx=\"3\" fill=\"#bcaaa4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path class=\"part jar\" d=\"M 366 56 L 428 56 Q 442 60 442 80 L 442 150 Q 442 164 428 164 L 366 164 Q 352 164 352 150 L 352 80 Q 352 60 366 56 Z\" fill=\"#e1f5fe\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part toffee\" cx=\"372\" cy=\"140\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"397\" cy=\"140\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"422\" cy=\"140\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"372\" cy=\"122\" r=\"7\" fill=\"#ef5350\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"397\" cy=\"122\" r=\"7\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part toffee\" cx=\"422\" cy=\"122\" r=\"7\" fill=\"#66bb6a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part jar-label\" x=\"364\" y=\"76\" width=\"66\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"397\" y=\"98\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">660</text>\n  <text class=\"label option-label\" x=\"397\" y=\"188\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Jar D</text>\n</svg>", "alt": "Four toffee jars labelled Jar A to Jar D with the number of toffees on each label: A 609, B 690, C 596, D 660."}
  },
  {
    id: "g3-maths-numbers-a-q15",
    prompt: "What comes next: 215, 225, 235, ___?",
    options: [
      { id: "a", text: "236" },
      { id: "b", text: "335" },
      { id: "c", text: "245" },
      { id: "d", text: "240" }
    ],
    answerId: "c",
    explanation: "Each number is 10 more than the one before, so the next is 245.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q16",
    prompt: "Riya has 3 big packs of 100 toffees, 5 small packs of 10 toffees and 8 loose toffees. How many toffees does she have?",
    options: [
      { id: "a", text: "385" },
      { id: "b", text: "358" },
      { id: "c", text: "16" },
      { id: "d", text: "853" }
    ],
    answerId: "b",
    explanation: "3 hundreds, 5 tens and 8 ones make 358 toffees.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q17",
    prompt: "How many tens make 200?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "10" },
      { id: "c", text: "200" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "10 tens make 100, so 20 tens make 200.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q18",
    prompt: "How many odd numbers are there between 20 and 30?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "The odd numbers are 21, 23, 25, 27 and 29, which makes 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q19",
    prompt: "Which number has 6 hundreds and 14 ones?",
    options: [
      { id: "a", text: "6014" },
      { id: "b", text: "614" },
      { id: "c", text: "641" },
      { id: "d", text: "620" }
    ],
    answerId: "b",
    explanation: "14 ones is 1 ten and 4 ones, so the number is 600 + 10 + 4 = 614.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q20",
    prompt: "I am a 3-digit number. My hundreds digit is 4. My tens digit is 2 more than my hundreds digit. My ones digit is 0. Who am I?",
    options: [
      { id: "a", text: "640" },
      { id: "b", text: "406" },
      { id: "c", text: "460" },
      { id: "d", text: "420" }
    ],
    answerId: "c",
    explanation: "Hundreds is 4, tens is 4 + 2 = 6 and ones is 0, so the number is 460.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q21",
    prompt: "How many different 3-digit numbers can you make with 1, 3 and 5, using each digit once?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "3" },
      { id: "d", text: "9" }
    ],
    answerId: "a",
    explanation: "The numbers are 135, 153, 315, 351, 513 and 531, which makes 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q22",
    prompt: "In 365, what is the difference between what the 6 is worth and the digit 6 itself?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "66" },
      { id: "c", text: "59" },
      { id: "d", text: "54" }
    ],
    answerId: "d",
    explanation: "The 6 is in the tens place, so it is worth 60, and 60 \u2212 6 = 54.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q23",
    prompt: "What is the biggest EVEN number you can make with 3, 8 and 5, using each digit once?",
    options: [
      { id: "a", text: "853" },
      { id: "b", text: "583" },
      { id: "c", text: "538" },
      { id: "d", text: "358" }
    ],
    answerId: "c",
    explanation: "An even number must end in 8, and then 5 and 3 go first, biggest first, to make 538.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q24",
    prompt: "What comes next: 105, 110, 120, 135, ___?",
    options: [
      { id: "a", text: "140" },
      { id: "b", text: "155" },
      { id: "c", text: "150" },
      { id: "d", text: "160" }
    ],
    answerId: "b",
    explanation: "We add 5, then 10, then 15, so next we add 20, and 135 + 20 = 155.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-maths-numbers-b-q01",
    prompt: "Look at the number line. Each jump is 10. What number is at **Q**?",
    options: [
      { id: "a", text: "360" },
      { id: "b", text: "340" },
      { id: "c", text: "306" },
      { id: "d", text: "370" }
    ],
    answerId: "a",
    explanation: "Q is one jump of 10 after 350, so Q = 360.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Where is Q?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Where is Q?</text>\n  <line class=\"axis\" x1=\"18\" y1=\"92\" x2=\"422\" y2=\"92\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"428,92 420,87 420,97\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"12,92 20,87 20,97\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"82\" x2=\"30.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">300</text>\n  <line class=\"tick\" x1=\"68.0\" y1=\"82\" x2=\"68.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"106.0\" y1=\"82\" x2=\"106.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"144.0\" y1=\"82\" x2=\"144.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"182.0\" y1=\"82\" x2=\"182.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"220.0\" y1=\"82\" x2=\"220.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"220.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">350</text>\n  <line class=\"tick\" x1=\"258.0\" y1=\"82\" x2=\"258.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"296.0\" y1=\"82\" x2=\"296.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"334.0\" y1=\"82\" x2=\"334.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"372.0\" y1=\"82\" x2=\"372.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"410.0\" y1=\"82\" x2=\"410.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"410.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">400</text>\n  <circle class=\"part point\" cx=\"258.0\" cy=\"92\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"258.0\" y1=\"52\" x2=\"258.0\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"258.0,83 253.0,75 263.0,75\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"258.0\" y=\"48\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Q</text>\n</svg>", "alt": "A number line from 300 to 400 with ticks every 10. 300, 350 and 400 are labelled. Point Q is one tick after 350."}
  },
  {
    id: "g3-maths-numbers-b-q02",
    prompt: "Which number has 5 hundreds, 0 tens and 7 ones?",
    options: [
      { id: "a", text: "507" },
      { id: "b", text: "570" },
      { id: "c", text: "75" },
      { id: "d", text: "5007" }
    ],
    answerId: "a",
    explanation: "5 hundreds, no tens and 7 ones make 507, and the zero holds the tens place.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q03",
    prompt: "How do we write 760 in words?",
    options: [
      { id: "a", text: "Seven hundred six" },
      { id: "b", text: "Six hundred seventy" },
      { id: "c", text: "Seventy-six" },
      { id: "d", text: "Seven hundred sixty" }
    ],
    answerId: "d",
    explanation: "760 has 7 hundreds and 6 tens, so it is seven hundred sixty.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q04",
    prompt: "Look at the Number Train. Which number goes on the **?** carriage?",
    options: [
      { id: "a", text: "400" },
      { id: "b", text: "300" },
      { id: "c", text: "390" },
      { id: "d", text: "410" }
    ],
    answerId: "a",
    explanation: "Just after 399 comes 400. Then comes 401.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 454 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number Train\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"454\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"227.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Number Train</text>\n  <rect class=\"part engine\" x=\"15\" y=\"48\" width=\"50\" height=\"46\" rx=\"6\" fill=\"#ffccbc\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part chimney\" x=\"43\" y=\"34\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffccbc\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"27\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"53\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"65\" y1=\"80\" x2=\"75\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage\" x=\"75\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"118.0\" y=\"77\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">398</text>\n  <circle class=\"part wheel\" cx=\"93\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"143\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"161\" y1=\"80\" x2=\"171\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage\" x=\"171\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"214.0\" y=\"77\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">399</text>\n  <circle class=\"part wheel\" cx=\"189\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"239\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"257\" y1=\"80\" x2=\"267\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage missing\" x=\"267\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"310.0\" y=\"77\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <circle class=\"part wheel\" cx=\"285\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"335\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"353\" y1=\"80\" x2=\"363\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage\" x=\"363\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"406.0\" y=\"77\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">401</text>\n  <circle class=\"part wheel\" cx=\"381\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"431\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part track\" x1=\"10\" y1=\"110\" x2=\"444\" y2=\"110\" stroke=\"#666\" stroke-width=\"2\"/>\n</svg>", "alt": "An engine pulling four carriages numbered 398, 399, a question mark, and 401."}
  },
  {
    id: "g3-maths-numbers-b-q05",
    prompt: "Look at the dots in Groups 1, 2, 3 and 4. Which group has an **odd** number of dots?",
    options: [
      { id: "a", text: "Group 1" },
      { id: "b", text: "Group 2" },
      { id: "c", text: "Group 3" },
      { id: "d", text: "Group 4" }
    ],
    answerId: "c",
    explanation: "Group 3 has 9 dots. One dot is left without a partner, so 9 is odd.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Make Pairs\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"210\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Make Pairs</text>\n  <rect class=\"part panel\" x=\"14\" y=\"38\" width=\"108\" height=\"140\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"52\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"84\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"52\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"84\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"52\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"84\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"68\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Group 1</text>\n  <rect class=\"part panel\" x=\"131\" y=\"38\" width=\"108\" height=\"140\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"169\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"201\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"169\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"201\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"169\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"201\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"169\" cy=\"118\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"201\" cy=\"118\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"169\" cy=\"138\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"201\" cy=\"138\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"185\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Group 2</text>\n  <rect class=\"part panel\" x=\"248\" y=\"38\" width=\"108\" height=\"140\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"286\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"318\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"286\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"318\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"286\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"318\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"286\" cy=\"118\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"318\" cy=\"118\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"286\" cy=\"138\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"302\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Group 3</text>\n  <rect class=\"part panel\" x=\"365\" y=\"38\" width=\"108\" height=\"140\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"403\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"435\" cy=\"58\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"403\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"435\" cy=\"78\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"403\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"435\" cy=\"98\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"403\" cy=\"118\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"435\" cy=\"118\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"403\" cy=\"138\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"435\" cy=\"138\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"403\" cy=\"158\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part dot\" cx=\"435\" cy=\"158\" r=\"7\" fill=\"#7e57c2\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"419\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Group 4</text>\n</svg>", "alt": "Four boxes labelled Group 1 to Group 4 with purple dots arranged in pairs. Group 1 has 6 dots, Group 2 has 10, Group 3 has 9 (one dot has no partner) and Group 4 has 12."}
  },
  {
    id: "g3-maths-numbers-b-q06",
    prompt: "Which number is smaller: 432 or 423?",
    options: [
      { id: "a", text: "432" },
      { id: "b", text: "We cannot tell" },
      { id: "c", text: "Both are the same" },
      { id: "d", text: "423" }
    ],
    answerId: "d",
    explanation: "Both have 4 hundreds, but 423 has only 2 tens and 432 has 3 tens.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q07",
    prompt: "Look at the blocks. What number do the blocks make together?",
    options: [
      { id: "a", text: "862" },
      { id: "b", text: "268" },
      { id: "c", text: "286" },
      { id: "d", text: "2608" }
    ],
    answerId: "b",
    explanation: "200 + 60 + 8 = 268.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Join the blocks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Join the blocks</text>\n  <rect class=\"part block\" x=\"66.0\" y=\"38.0\" width=\"120\" height=\"82.0\" rx=\"4\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"126.0\" y=\"84.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">200</text>\n  <text class=\"label small\" x=\"126.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Hundreds</text>\n  <text class=\"label op\" x=\"199.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"212.0\" y=\"52.0\" width=\"80\" height=\"68.0\" rx=\"4\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"252.0\" y=\"91.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">60</text>\n  <text class=\"label small\" x=\"252.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Tens</text>\n  <text class=\"label op\" x=\"305.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"318.0\" y=\"60.400000000000006\" width=\"56\" height=\"59.599999999999994\" rx=\"4\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"346.0\" y=\"95.2\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label small\" x=\"346.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ones</text>\n</svg>", "alt": "Three blocks joined with plus signs: 200 (Hundreds) plus 60 (Tens) plus 8 (Ones)."}
  },
  {
    id: "g3-maths-numbers-b-q08",
    prompt: "Count by 10s: 340, 350, 360, ___. What comes next?",
    options: [
      { id: "a", text: "361" },
      { id: "b", text: "370" },
      { id: "c", text: "460" },
      { id: "d", text: "380" }
    ],
    answerId: "b",
    explanation: "When we count by 10s, we add 10 each time, and 360 + 10 = 370.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q09",
    prompt: "Which number comes just before 1000?",
    options: [
      { id: "a", text: "1001" },
      { id: "b", text: "990" },
      { id: "c", text: "900" },
      { id: "d", text: "999" }
    ],
    answerId: "d",
    explanation: "One less than 1000 is 999.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q10",
    prompt: "Look at the Number Houses. What is the digit in the house with the **star** worth?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "40" },
      { id: "c", text: "419" },
      { id: "d", text: "400" }
    ],
    answerId: "d",
    explanation: "The star is under the Hundreds house. 4 in the hundreds house is worth 400.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 205\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number Houses\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"205\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"210.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Number Houses</text>\n  <polygon class=\"part roof\" points=\"24,80 82.0,40 140,80\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"82.0\" y=\"72\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Hundreds</text>\n  <rect class=\"part house\" x=\"30\" y=\"80\" width=\"104\" height=\"82\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part door digit-tile\" x=\"60.0\" y=\"94\" width=\"44\" height=\"52\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"82.0\" y=\"131\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <text class=\"label small\" x=\"82.0\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(H)</text>\n  <polygon class=\"highlight star\" points=\"82.0,184.0 84.0,189.25 89.61,189.53 85.23,193.05 86.7,198.47 82.0,195.4 77.3,198.47 78.77,193.05 74.39,189.53 80.0,189.25\" fill=\"#ffb300\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <polygon class=\"part roof\" points=\"152,80 210.0,40 268,80\" fill=\"#90caf9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"210.0\" y=\"72\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tens</text>\n  <rect class=\"part house\" x=\"158\" y=\"80\" width=\"104\" height=\"82\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part door digit-tile\" x=\"188.0\" y=\"94\" width=\"44\" height=\"52\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"210.0\" y=\"131\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <text class=\"label small\" x=\"210.0\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(T)</text>\n  <polygon class=\"part roof\" points=\"280,80 338.0,40 396,80\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"338.0\" y=\"72\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ones</text>\n  <rect class=\"part house\" x=\"286\" y=\"80\" width=\"104\" height=\"82\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part door digit-tile\" x=\"316.0\" y=\"94\" width=\"44\" height=\"52\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"338.0\" y=\"131\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <text class=\"label small\" x=\"338.0\" y=\"178\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(O)</text>\n</svg>", "alt": "Three houses: Hundreds holds 4, Tens holds 1, Ones holds 9. A star is under the Hundreds house."}
  },
  {
    id: "g3-maths-numbers-b-q11",
    prompt: "Look at the Digit Tiles. What is the **smallest** 3-digit number you can make using each tile once?",
    options: [
      { id: "a", text: "270" },
      { id: "b", text: "702" },
      { id: "c", text: "720" },
      { id: "d", text: "207" }
    ],
    answerId: "d",
    explanation: "Zero cannot go first, so start with 2. Then put 0, then 7. That makes 207.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Digit Tiles\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"130.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Digit Tiles</text>\n  <rect class=\"part tile\" x=\"45.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"70.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part tile\" x=\"105.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"130.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <rect class=\"part tile\" x=\"165.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"190.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <text class=\"label small\" x=\"130.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Zero cannot go first!</text>\n</svg>", "alt": "Three digit tiles showing 0, 7 and 2, with the note: Zero cannot go first!"}
  },
  {
    id: "g3-maths-numbers-b-q12",
    prompt: "What is the biggest 3-digit number you can make with 0, 5 and 3, using each digit once?",
    options: [
      { id: "a", text: "503" },
      { id: "b", text: "350" },
      { id: "c", text: "530" },
      { id: "d", text: "035" }
    ],
    answerId: "c",
    explanation: "Put 5 first, then 3, and zero goes last to make 530.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q13",
    prompt: "Which number is between 498 and 502 AND is even?",
    options: [
      { id: "a", text: "500" },
      { id: "b", text: "499" },
      { id: "c", text: "501" },
      { id: "d", text: "504" }
    ],
    answerId: "a",
    explanation: "The numbers between 498 and 502 are 499, 500 and 501, and only 500 is even. 504 is even, but it is bigger than 502.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q14",
    prompt: "Which list goes from biggest to smallest?",
    options: [
      { id: "a", text: "781, 187, 718" },
      { id: "b", text: "718, 781, 187" },
      { id: "c", text: "187, 718, 781" },
      { id: "d", text: "781, 718, 187" }
    ],
    answerId: "d",
    explanation: "781 and 718 both have 7 hundreds, but 781 has more tens, and 187 has only 1 hundred.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q15",
    prompt: "What comes next: 450, 400, 350, ___?",
    options: [
      { id: "a", text: "340" },
      { id: "b", text: "250" },
      { id: "c", text: "300" },
      { id: "d", text: "349" }
    ],
    answerId: "c",
    explanation: "Each number is 50 less than the one before, so the next is 300.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q16",
    prompt: "Look at the cards. We take away the same number each time. What goes on the **?** card?",
    options: [
      { id: "a", text: "510" },
      { id: "b", text: "490" },
      { id: "c", text: "500" },
      { id: "d", text: "530" }
    ],
    answerId: "c",
    explanation: "Each card is 20 less: 520 \u2212 20 = 500. Then 500 \u2212 20 = 480.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 508 100\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Find the missing card\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"508\" height=\"100\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"254.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Find the missing card</text>\n  <rect class=\"part card\" x=\"15\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"54.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">560</text>\n  <line class=\"arrow\" x1=\"96\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"114,60 108,56 108,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"115\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"154.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">540</text>\n  <line class=\"arrow\" x1=\"196\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"214,60 208,56 208,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"215\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"254.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">520</text>\n  <line class=\"arrow\" x1=\"296\" y1=\"60\" x2=\"310\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"314,60 308,56 308,64\" fill=\"#333\"/>\n  <rect class=\"part card missing\" x=\"315\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"354.0\" y=\"66\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <line class=\"arrow\" x1=\"396\" y1=\"60\" x2=\"410\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"414,60 408,56 408,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"415\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"454.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">480</text>\n</svg>", "alt": "Five cards joined by arrows: 560, 540, 520, a question mark card, 480."}
  },
  {
    id: "g3-maths-numbers-b-q17",
    prompt: "How many hundreds make 1000?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "1" },
      { id: "c", text: "100" },
      { id: "d", text: "9" }
    ],
    answerId: "a",
    explanation: "10 hundreds make one thousand.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q18",
    prompt: "How many even numbers are there from 11 to 21?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "10" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "The even numbers are 12, 14, 16, 18 and 20, which makes 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q19",
    prompt: "Which number has 2 hundreds and 13 tens?",
    options: [
      { id: "a", text: "213" },
      { id: "b", text: "2130" },
      { id: "c", text: "330" },
      { id: "d", text: "230" }
    ],
    answerId: "c",
    explanation: "13 tens is 130, and 200 + 130 = 330.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q20",
    prompt: "Look at the blocks. Count carefully! What number do all the blocks make?",
    options: [
      { id: "a", text: "424" },
      { id: "b", text: "3124" },
      { id: "c", text: "324" },
      { id: "d", text: "342" }
    ],
    answerId: "a",
    explanation: "3 flats = 300, 12 rods = 120, 4 cubes = 4. So 300 + 120 + 4 = 424.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Count the Blocks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Count the Blocks</text>\n  <rect class=\"part hundred-flat\" x=\"16\" y=\"60\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffccbc\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"23\" y1=\"60\" x2=\"23\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"67\" x2=\"86\" y2=\"67\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"30\" y1=\"60\" x2=\"30\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"74\" x2=\"86\" y2=\"74\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"37\" y1=\"60\" x2=\"37\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"81\" x2=\"86\" y2=\"81\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"44\" y1=\"60\" x2=\"44\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"88\" x2=\"86\" y2=\"88\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"51\" y1=\"60\" x2=\"51\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"95\" x2=\"86\" y2=\"95\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"58\" y1=\"60\" x2=\"58\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"102\" x2=\"86\" y2=\"102\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"65\" y1=\"60\" x2=\"65\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"109\" x2=\"86\" y2=\"109\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"72\" y1=\"60\" x2=\"72\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"116\" x2=\"86\" y2=\"116\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"79\" y1=\"60\" x2=\"79\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"16\" y1=\"123\" x2=\"86\" y2=\"123\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <rect class=\"part hundred-flat\" x=\"92\" y=\"60\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffccbc\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"99\" y1=\"60\" x2=\"99\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"67\" x2=\"162\" y2=\"67\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"106\" y1=\"60\" x2=\"106\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"74\" x2=\"162\" y2=\"74\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"113\" y1=\"60\" x2=\"113\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"81\" x2=\"162\" y2=\"81\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"120\" y1=\"60\" x2=\"120\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"88\" x2=\"162\" y2=\"88\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"127\" y1=\"60\" x2=\"127\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"95\" x2=\"162\" y2=\"95\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"134\" y1=\"60\" x2=\"134\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"102\" x2=\"162\" y2=\"102\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"141\" y1=\"60\" x2=\"141\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"109\" x2=\"162\" y2=\"109\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"148\" y1=\"60\" x2=\"148\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"116\" x2=\"162\" y2=\"116\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"155\" y1=\"60\" x2=\"155\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"92\" y1=\"123\" x2=\"162\" y2=\"123\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <rect class=\"part hundred-flat\" x=\"168\" y=\"60\" width=\"70\" height=\"70\" rx=\"0\" fill=\"#ffccbc\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"175\" y1=\"60\" x2=\"175\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"67\" x2=\"238\" y2=\"67\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"182\" y1=\"60\" x2=\"182\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"74\" x2=\"238\" y2=\"74\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"189\" y1=\"60\" x2=\"189\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"81\" x2=\"238\" y2=\"81\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"196\" y1=\"60\" x2=\"196\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"88\" x2=\"238\" y2=\"88\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"203\" y1=\"60\" x2=\"203\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"95\" x2=\"238\" y2=\"95\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"210\" y1=\"60\" x2=\"210\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"102\" x2=\"238\" y2=\"102\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"217\" y1=\"60\" x2=\"217\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"109\" x2=\"238\" y2=\"109\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"224\" y1=\"60\" x2=\"224\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"116\" x2=\"238\" y2=\"116\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"231\" y1=\"60\" x2=\"231\" y2=\"130\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"168\" y1=\"123\" x2=\"238\" y2=\"123\" stroke=\"#bf6f5a\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"250\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"67\" x2=\"259\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"74\" x2=\"259\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"81\" x2=\"259\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"88\" x2=\"259\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"95\" x2=\"259\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"102\" x2=\"259\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"109\" x2=\"259\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"116\" x2=\"259\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"250\" y1=\"123\" x2=\"259\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"263\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"67\" x2=\"272\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"74\" x2=\"272\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"81\" x2=\"272\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"88\" x2=\"272\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"95\" x2=\"272\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"102\" x2=\"272\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"109\" x2=\"272\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"116\" x2=\"272\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"263\" y1=\"123\" x2=\"272\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"276\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"67\" x2=\"285\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"74\" x2=\"285\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"81\" x2=\"285\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"88\" x2=\"285\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"95\" x2=\"285\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"102\" x2=\"285\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"109\" x2=\"285\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"116\" x2=\"285\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"276\" y1=\"123\" x2=\"285\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"289\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"67\" x2=\"298\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"74\" x2=\"298\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"81\" x2=\"298\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"88\" x2=\"298\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"95\" x2=\"298\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"102\" x2=\"298\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"109\" x2=\"298\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"116\" x2=\"298\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"289\" y1=\"123\" x2=\"298\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"302\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"67\" x2=\"311\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"74\" x2=\"311\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"81\" x2=\"311\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"88\" x2=\"311\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"95\" x2=\"311\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"102\" x2=\"311\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"109\" x2=\"311\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"116\" x2=\"311\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"302\" y1=\"123\" x2=\"311\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"315\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"67\" x2=\"324\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"74\" x2=\"324\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"81\" x2=\"324\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"88\" x2=\"324\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"95\" x2=\"324\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"102\" x2=\"324\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"109\" x2=\"324\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"116\" x2=\"324\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"315\" y1=\"123\" x2=\"324\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"328\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"67\" x2=\"337\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"74\" x2=\"337\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"81\" x2=\"337\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"88\" x2=\"337\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"95\" x2=\"337\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"102\" x2=\"337\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"109\" x2=\"337\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"116\" x2=\"337\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"328\" y1=\"123\" x2=\"337\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"341\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"67\" x2=\"350\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"74\" x2=\"350\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"81\" x2=\"350\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"88\" x2=\"350\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"95\" x2=\"350\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"102\" x2=\"350\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"109\" x2=\"350\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"116\" x2=\"350\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"341\" y1=\"123\" x2=\"350\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"354\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"67\" x2=\"363\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"74\" x2=\"363\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"81\" x2=\"363\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"88\" x2=\"363\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"95\" x2=\"363\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"102\" x2=\"363\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"109\" x2=\"363\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"116\" x2=\"363\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"354\" y1=\"123\" x2=\"363\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"367\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"67\" x2=\"376\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"74\" x2=\"376\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"81\" x2=\"376\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"88\" x2=\"376\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"95\" x2=\"376\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"102\" x2=\"376\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"109\" x2=\"376\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"116\" x2=\"376\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"367\" y1=\"123\" x2=\"376\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"380\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"67\" x2=\"389\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"74\" x2=\"389\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"81\" x2=\"389\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"88\" x2=\"389\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"95\" x2=\"389\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"102\" x2=\"389\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"109\" x2=\"389\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"116\" x2=\"389\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"380\" y1=\"123\" x2=\"389\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part ten-rod\" x=\"393\" y=\"60\" width=\"9\" height=\"70\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"67\" x2=\"402\" y2=\"67\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"74\" x2=\"402\" y2=\"74\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"81\" x2=\"402\" y2=\"81\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"88\" x2=\"402\" y2=\"88\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"95\" x2=\"402\" y2=\"95\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"102\" x2=\"402\" y2=\"102\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"109\" x2=\"402\" y2=\"109\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"116\" x2=\"402\" y2=\"116\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <line class=\"part grid\" x1=\"393\" y1=\"123\" x2=\"402\" y2=\"123\" stroke=\"#5c8bc0\" stroke-width=\"0.6\"/>\n  <rect class=\"part one-cube\" x=\"414\" y=\"121\" width=\"9\" height=\"9\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part one-cube\" x=\"427\" y=\"121\" width=\"9\" height=\"9\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part one-cube\" x=\"414\" y=\"108\" width=\"9\" height=\"9\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part one-cube\" x=\"427\" y=\"108\" width=\"9\" height=\"9\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label small\" x=\"230.0\" y=\"160\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Flat = 100 \u00b7 Rod = 10 \u00b7 Small cube = 1</text>\n</svg>", "alt": "Three hundred-flats, twelve ten-rods and four small unit cubes. A key says flat = 100, rod = 10, small cube = 1."}
  },
  {
    id: "g3-maths-numbers-b-q21",
    prompt: "How many different 3-digit numbers can you make with 2, 7 and 0, using each digit once?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "6" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "Zero cannot go first, so we get only 207, 270, 702 and 720.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q22",
    prompt: "Look at the Digit Tiles. What is the **biggest EVEN** number you can make using each tile once?",
    options: [
      { id: "a", text: "805" },
      { id: "b", text: "850" },
      { id: "c", text: "580" },
      { id: "d", text: "508" }
    ],
    answerId: "b",
    explanation: "An even number must end in 0 or 8. 850 ends in 0 and is bigger than 580. (805 is odd.)",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 260 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Digit Tiles\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"260\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"130.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Digit Tiles</text>\n  <rect class=\"part tile\" x=\"45.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"70.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part tile\" x=\"105.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"130.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part tile\" x=\"165.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"190.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label small\" x=\"130.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Use each tile once.</text>\n</svg>", "alt": "Three digit tiles showing 5, 0 and 8."}
  },
  {
    id: "g3-maths-numbers-b-q23",
    prompt: "What is the smallest ODD number you can make with 4, 9 and 2, using each digit once?",
    options: [
      { id: "a", text: "429" },
      { id: "b", text: "294" },
      { id: "c", text: "249" },
      { id: "d", text: "942" }
    ],
    answerId: "c",
    explanation: "An odd number must end in 9, and then 2 and 4 go first, smallest first, to make 249.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q24",
    prompt: "What comes next: 200, 199, 197, 194, ___?",
    options: [
      { id: "a", text: "189" },
      { id: "b", text: "190" },
      { id: "c", text: "191" },
      { id: "d", text: "192" }
    ],
    answerId: "b",
    explanation: "We take away 1, then 2, then 3, so next we take away 4, and 194 \u2212 4 = 190.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🧺",
    title: "Bundles of sticks",
    body: [
      "Ten loose sticks make one bundle — a ten.",
      "Ten bundles of ten make a big bundle — one hundred!",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's count!",
    visual: "place-value",
    speak: "Let's count sticks! Ten loose sticks make one bundle. We call it a ten. Ten bundles of ten make a big bundle. That is one hundred!",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Hundreds, tens and ones",
    lead: "Every digit lives in a house. Tap each house for 347.",
    visual: "place-value",
    speak: "Every digit lives in a house. The houses are hundreds, tens and ones. In three hundred forty-seven, three is in the hundreds house, four in tens, seven in ones.",
    cards: [
      { label: "Hundreds (H)", reveal: "3 → worth 300", emoji: "💯" },
      { label: "Tens (T)", reveal: "4 → worth 40", emoji: "🔟" },
      { label: "Ones (O)", reveal: "7 → worth 7", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "What is a digit worth?",
    visual: "place-value",
    speak: "A digit's worth depends on its house. Four hundred seventy-two is four hundred, plus seventy, plus two. Four zero nine is four hundred nine. The zero means there are no tens, so we don't say it!",
    steps: [
      "472 = 400 + 70 + 2",
      "8 in the hundreds house of 832 is worth 800",
      "409 in words: four hundred nine",
      "Zero holds the tens place — we don't say it",
    ],
    punchline: "Same digit, different house → different worth.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is 8 worth in 832?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "80" },
      { id: "c", text: "800" },
      { id: "d", text: "832" },
    ],
    answerId: "c",
    why: "The 8 lives in the hundreds house, so it is worth 800.",
    visual: "place-value",
    speak: "What is eight worth in eight hundred thirty-two?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Bigger, biggest, smallest",
    visual: "number-line",
    speak: "To compare, look at the hundreds first. If the hundreds are the same, check the tens, then the ones. For the biggest number put the biggest digit first. For the smallest, put the smallest digit first, but zero can never go first!",
    steps: [
      "Compare hundreds first, then tens, then ones",
      "618 vs 681 → same hundreds, 8 tens beats 1 ten → 681",
      "Biggest from 5, 2, 9 → 952",
      "Smallest from 7, 0, 4 → 407 (zero never first)",
    ],
    punchline: "Look left first — the hundreds decide.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "Even, odd and patterns",
    lead: "Tap each card.",
    visual: "number-line",
    speak: "Even numbers end in 0, 2, 4, 6 or 8. Odd numbers end in 1, 3, 5, 7 or 9. The number just after is one more; the number just before is one less.",
    cards: [
      { label: "Even", reveal: "Ends in 0, 2, 4, 6, 8 — makes pairs", emoji: "👫" },
      { label: "Odd", reveal: "Ends in 1, 3, 5, 7, 9 — one left alone", emoji: "🧍" },
      { label: "Skip count", reveal: "By 5s: 15, 20, 25, 30 · By 10s: 340, 350, 360", emoji: "🐸" },
      { label: "Before / after", reveal: "Just after 299 is 300 · just before 500 is 499", emoji: "🚂" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Make the smallest number with seven, zero and four.",
    question: {
      id: "g3-numbers-check",
      prompt: "Make the smallest 3-digit number with 7, 0 and 4.",
      options: [
        { id: "a", text: "047" },
        { id: "b", text: "407" },
        { id: "c", text: "470" },
        { id: "d", text: "704" },
      ],
      answerId: "b",
      explanation: "Zero can't go first, so start with 4, then 0, then 7 → 407.",
      hints: ["Smallest digit first — but not zero.", "Then put the smallest digit left."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Number ninja!",
    bullets: [
      "Hundreds | tens | ones",
      "Digit worth = digit × its house",
      "Compare from the left; zero never first",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, write, compare and make 3-digit numbers. Set A and Set B are ready.",
  },
];

export const g3MathsNumbers: ChapterDef = {
  id: "numbers",
  title: "Numbers",
  emoji: "\ud83e\uddf1",
  blurb: "Place value, compare & patterns to 999",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "place-value",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "place-value",
      questions: SET_B,
    },
  ],
  paperTopics: ["place-value", "add-sub"],
};

export const g3MathsNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
