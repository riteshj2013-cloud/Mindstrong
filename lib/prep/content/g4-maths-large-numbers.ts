import type { ChapterDef, PrepQuestion } from "../types";

/** Large Numbers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-large-a-q01",
    prompt: "Look at the Place Value Chart. Which digit is in the **Ten Thousands** column?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "7" },
      { id: "c", text: "0" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "The first column, Ten Thousands, holds the digit 7 (the number is 73,058).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Place Value Chart\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Place Value Chart</text>\n  <rect class=\"part header\" x=\"20\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"60.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ten Thousands</text>\n  <text class=\"label small\" x=\"60.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(TTh)</text>\n  <rect class=\"part cell\" x=\"20\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"42.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"60.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <rect class=\"part header\" x=\"100\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Thousands</text>\n  <text class=\"label small\" x=\"140.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(Th)</text>\n  <rect class=\"part cell\" x=\"100\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"122.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"140.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part header\" x=\"180\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"220.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Hundreds</text>\n  <text class=\"label small\" x=\"220.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(H)</text>\n  <rect class=\"part cell\" x=\"180\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"202.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"220.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"260\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"300.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tens</text>\n  <text class=\"label small\" x=\"300.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(T)</text>\n  <rect class=\"part cell\" x=\"260\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"282.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"300.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"340\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"380.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ones</text>\n  <text class=\"label small\" x=\"380.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(O)</text>\n  <rect class=\"part cell\" x=\"340\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"362.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"380.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n</svg>", "alt": "A place value chart with five columns: Ten Thousands 7, Thousands 3, Hundreds 0, Tens 5, Ones 8."}
  },
  {
    id: "g4-maths-large-a-q02",
    prompt: "Which numeral is \"thirty-four thousand two hundred six\"?",
    options: [
      { id: "a", text: "34,260" },
      { id: "b", text: "3,426" },
      { id: "c", text: "34,206" },
      { id: "d", text: "30,426" }
    ],
    answerId: "c",
    explanation: "Thirty-four thousand is 34,000 and two hundred six is 206, so together they make 34,206.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q03",
    prompt: "Look at the number line. It is split into equal jumps. What number does point **P** show?",
    options: [
      { id: "a", text: "28,000" },
      { id: "b", text: "24,000" },
      { id: "c", text: "26,000" },
      { id: "d", text: "29,000" }
    ],
    answerId: "a",
    explanation: "10,000 split into 5 equal jumps means each jump is 2,000; P is 4 jumps after 20,000, so 20,000 + 8,000 = 28,000.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Where is P?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Where is P?</text>\n  <line class=\"axis\" x1=\"18\" y1=\"92\" x2=\"422\" y2=\"92\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"428,92 420,87 420,97\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"12,92 20,87 20,97\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"82\" x2=\"30.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20,000</text>\n  <line class=\"tick\" x1=\"106.0\" y1=\"82\" x2=\"106.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"182.0\" y1=\"82\" x2=\"182.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"258.0\" y1=\"82\" x2=\"258.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"334.0\" y1=\"82\" x2=\"334.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"410.0\" y1=\"82\" x2=\"410.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"410.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">30,000</text>\n  <circle class=\"part point\" cx=\"334.0\" cy=\"92\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"334.0\" y1=\"52\" x2=\"334.0\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"334.0,83 329.0,75 339.0,75\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"334.0\" y=\"48\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n</svg>", "alt": "A number line from 20,000 to 30,000 split into 5 equal jumps; only the ends are labelled. Point P is on the fourth tick from the left."}
  },
  {
    id: "g4-maths-large-a-q04",
    prompt: "Look at the blocks. Which number do the four blocks make together?",
    options: [
      { id: "a", text: "53,240" },
      { id: "b", text: "5,324" },
      { id: "c", text: "53,024" },
      { id: "d", text: "50,324" }
    ],
    answerId: "c",
    explanation: "50,000 + 3,000 + 20 + 4 = 53,024; there are no hundreds, so 0 goes in the hundreds place.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Join the blocks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Join the blocks</text>\n  <rect class=\"part block\" x=\"21.0\" y=\"38.0\" width=\"120\" height=\"82.0\" rx=\"4\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"81.0\" y=\"84.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">50,000</text>\n  <text class=\"label small\" x=\"81.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ten Thousands</text>\n  <text class=\"label op\" x=\"154.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"167.0\" y=\"48.5\" width=\"90\" height=\"71.5\" rx=\"4\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"212.0\" y=\"89.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,000</text>\n  <text class=\"label small\" x=\"212.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Thousands</text>\n  <text class=\"label op\" x=\"270.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"283.0\" y=\"59.0\" width=\"60\" height=\"61.0\" rx=\"4\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"313.0\" y=\"94.5\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  <text class=\"label small\" x=\"313.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Tens</text>\n  <text class=\"label op\" x=\"356.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"369.0\" y=\"62.5\" width=\"50\" height=\"57.5\" rx=\"4\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"394.0\" y=\"96.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <text class=\"label small\" x=\"394.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ones</text>\n</svg>", "alt": "Four blocks joined with plus signs: 50,000 plus 3,000 plus 20 plus 4, getting smaller from left to right."}
  },
  {
    id: "g4-maths-large-a-q05",
    prompt: "Look at the bar chart. The bars look almost the same! Which fair, A, B, C or D, had the **most** visitors on Day 1?",
    options: [
      { id: "a", text: "Fair A" },
      { id: "b", text: "Fair B" },
      { id: "c", text: "Fair C" },
      { id: "d", text: "Fair D" }
    ],
    answerId: "d",
    explanation: "All have 4 ten thousands; at thousands, 6 beats 5, and at hundreds, D's 8 beats A's 2 and C's 0, so 46,820 is the greatest.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 236\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Visitors on Day 1\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"236\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Visitors on Day 1</text>\n  <line class=\"axis\" x1=\"130\" y1=\"36\" x2=\"130\" y2=\"222\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"61\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <text class=\"label\" x=\"124\" y=\"61\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Pushkar Mela</text>\n  <rect class=\"part bar\" x=\"130\" y=\"44\" width=\"197.7\" height=\"26\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"333.7\" y=\"62\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">46,280</text>\n  <text class=\"label option-label\" x=\"14\" y=\"105\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <text class=\"label\" x=\"124\" y=\"105\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Hornbill Fest</text>\n  <rect class=\"part bar\" x=\"130\" y=\"88\" width=\"196.5\" height=\"26\" rx=\"2\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"332.5\" y=\"106\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">45,990</text>\n  <text class=\"label option-label\" x=\"14\" y=\"149\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <text class=\"label\" x=\"124\" y=\"149\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Surajkund Mela</text>\n  <rect class=\"part bar\" x=\"130\" y=\"132\" width=\"196.8\" height=\"26\" rx=\"2\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"332.8\" y=\"150\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">46,082</text>\n  <text class=\"label option-label\" x=\"14\" y=\"193\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">D</text>\n  <text class=\"label\" x=\"124\" y=\"193\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Dasara Fair</text>\n  <rect class=\"part bar\" x=\"130\" y=\"176\" width=\"200.0\" height=\"26\" rx=\"2\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"336.0\" y=\"194\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">46,820</text>\n  <text class=\"label small\" x=\"220.0\" y=\"234\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Number of visitors</text>\n</svg>", "alt": "Horizontal bar chart of Day 1 visitors. A Pushkar Mela 46,280; B Hornbill Fest 45,990; C Surajkund Mela 46,082; D Dasara Fair 46,820. Bars look almost equal in length."}
  },
  {
    id: "g4-maths-large-a-q06",
    prompt: "What is the successor of 4,999?",
    options: [
      { id: "a", text: "4,998" },
      { id: "b", text: "5,999" },
      { id: "c", text: "4,000" },
      { id: "d", text: "5,000" }
    ],
    answerId: "d",
    explanation: "The successor is one more, and 4,999 + 1 = 5,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q07",
    prompt: "What is the face value of 3 in 63,108?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "3,000" },
      { id: "c", text: "30" },
      { id: "d", text: "300" }
    ],
    answerId: "a",
    explanation: "Face value is just the digit itself, so it is 3 (its place value would be 3,000).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q08",
    prompt: "Round 3,482 to the nearest 10.",
    options: [
      { id: "a", text: "3,490" },
      { id: "b", text: "3,500" },
      { id: "c", text: "3,480" },
      { id: "d", text: "3,400" }
    ],
    answerId: "c",
    explanation: "The ones digit is 2, which is less than 5, so we round down to 3,480.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q09",
    prompt: "Look at charts A, B, C and D. Which chart correctly shows **forty thousand five hundred six**?",
    options: [
      { id: "a", text: "Chart A" },
      { id: "b", text: "Chart B" },
      { id: "c", text: "Chart C" },
      { id: "d", text: "Chart D" }
    ],
    answerId: "b",
    explanation: "Forty thousand five hundred six = 40,506: 4 ten thousands, 0 thousands, 5 hundreds, 0 tens, 6 ones, which is Chart B.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 250\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Which chart is correct?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"250\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which chart is correct?</text>\n  <text class=\"label option-label\" x=\"28\" y=\"88\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <rect class=\"part header\" x=\"50\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"68.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">TTh</text>\n  <rect class=\"part cell\" x=\"50\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"68.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part header\" x=\"86\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"104.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Th</text>\n  <rect class=\"part cell\" x=\"86\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"104.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"122\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"122\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"140.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"158\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"176.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"158\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"176.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part header\" x=\"194\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"212.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"194\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"212.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <text class=\"label option-label\" x=\"253\" y=\"88\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <rect class=\"part header\" x=\"275\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"293.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">TTh</text>\n  <rect class=\"part cell\" x=\"275\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"293.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part header\" x=\"311\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"329.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Th</text>\n  <rect class=\"part cell\" x=\"311\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"329.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"347\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"365.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"347\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"365.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"383\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"401.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"383\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"401.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"419\" y=\"48\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"437.0\" y=\"64\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"419\" y=\"70\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"437.0\" y=\"96\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <text class=\"label option-label\" x=\"28\" y=\"193\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <rect class=\"part header\" x=\"50\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"68.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">TTh</text>\n  <rect class=\"part cell\" x=\"50\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"68.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part header\" x=\"86\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"104.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Th</text>\n  <rect class=\"part cell\" x=\"86\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"104.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"122\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"122\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"140.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"158\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"176.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"158\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"176.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part header\" x=\"194\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"212.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"194\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"212.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <text class=\"label option-label\" x=\"253\" y=\"193\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">D</text>\n  <rect class=\"part header\" x=\"275\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"293.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">TTh</text>\n  <rect class=\"part cell\" x=\"275\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"293.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"311\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"329.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Th</text>\n  <rect class=\"part cell\" x=\"311\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"329.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part header\" x=\"347\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"365.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"347\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"365.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"383\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"401.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"383\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"401.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"419\" y=\"153\" width=\"36\" height=\"22\" rx=\"0\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"437.0\" y=\"169\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"419\" y=\"175\" width=\"36\" height=\"36\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"437.0\" y=\"201\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n</svg>", "alt": "Four small place value charts labelled A to D. A: 4,0,5,6,0. B: 4,0,5,0,6. C: 4,5,0,6,0. D: 0,4,5,0,6."}
  },
  {
    id: "g4-maths-large-a-q10",
    prompt: "What is the greatest 4-digit number?",
    options: [
      { id: "a", text: "9,999" },
      { id: "b", text: "9,000" },
      { id: "c", text: "10,000" },
      { id: "d", text: "1,000" }
    ],
    answerId: "a",
    explanation: "9,999 is the greatest 4-digit number; 10,000 already has five digits.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q11",
    prompt: "Look at the four digit tiles. What is the **greatest** 4-digit number you can make using each tile once?",
    options: [
      { id: "a", text: "9,742" },
      { id: "b", text: "9,724" },
      { id: "c", text: "7,942" },
      { id: "d", text: "2,479" }
    ],
    answerId: "a",
    explanation: "Put the tiles from biggest to smallest: 9, 7, 4, 2 \u2192 9,742.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Digit Tiles\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"160.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Digit Tiles</text>\n  <rect class=\"part tile\" x=\"45.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"70.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part tile\" x=\"105.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"130.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part tile\" x=\"165.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"190.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <rect class=\"part tile\" x=\"225.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"250.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <text class=\"label small\" x=\"160.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Use each tile once.</text>\n</svg>", "alt": "Four digit tiles showing 4, 9, 2 and 7."}
  },
  {
    id: "g4-maths-large-a-q12",
    prompt: "What is the smallest 4-digit number you can make with 5, 0, 8 and 2, using each digit once?",
    options: [
      { id: "a", text: "2,058" },
      { id: "b", text: "2,085" },
      { id: "c", text: "2,508" },
      { id: "d", text: "5,028" }
    ],
    answerId: "a",
    explanation: "Zero cannot go first, so start with 2, then 0, 5 and 8 to make 2,058.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q13",
    prompt: "Which list goes from smallest to greatest?",
    options: [
      { id: "a", text: "36,748; 36,478; 37,468" },
      { id: "b", text: "37,468; 36,748; 36,478" },
      { id: "c", text: "36,478; 37,468; 36,748" },
      { id: "d", text: "36,478; 36,748; 37,468" }
    ],
    answerId: "d",
    explanation: "36,478 and 36,748 both have 36 thousands, but 4 hundreds < 7 hundreds; 37,468 has 37 thousands, so it is greatest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q14",
    prompt: "Look at the number line. The ball is at 3,862. Round 3,862 to the **nearest hundred**.",
    options: [
      { id: "a", text: "3,800" },
      { id: "b", text: "3,860" },
      { id: "c", text: "3,900" },
      { id: "d", text: "3,850" }
    ],
    answerId: "c",
    explanation: "3,862 is past the halfway mark 3,850, so it is closer to 3,900.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Round to the nearest hundred\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Round to the nearest hundred</text>\n  <line class=\"axis\" x1=\"18\" y1=\"92\" x2=\"422\" y2=\"92\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"428,92 420,87 420,97\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"12,92 20,87 20,97\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"82\" x2=\"30.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,800</text>\n  <line class=\"tick\" x1=\"68.0\" y1=\"82\" x2=\"68.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"106.0\" y1=\"82\" x2=\"106.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"144.0\" y1=\"82\" x2=\"144.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"182.0\" y1=\"82\" x2=\"182.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"220.0\" y1=\"82\" x2=\"220.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"258.0\" y1=\"82\" x2=\"258.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"296.0\" y1=\"82\" x2=\"296.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"334.0\" y1=\"82\" x2=\"334.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"372.0\" y1=\"82\" x2=\"372.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"410.0\" y1=\"82\" x2=\"410.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"410.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,900</text>\n  <line class=\"part midpoint\" x1=\"220.0\" y1=\"70\" x2=\"220.0\" y2=\"106\" stroke=\"#e65100\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label midpoint-label\" x=\"220.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">3,850</text>\n  <text class=\"label small\" x=\"220.0\" y=\"134\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#e65100\">(halfway)</text>\n  <circle class=\"part point\" cx=\"265.6\" cy=\"92\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"265.6\" y1=\"52\" x2=\"265.6\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"265.6,83 260.6,75 270.6,75\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"265.6\" y=\"48\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,862</text>\n</svg>", "alt": "A number line from 3,800 to 3,900 with ticks every 10. The halfway mark 3,850 is dashed in orange. A ball marked 3,862 sits just past the halfway mark."}
  },
  {
    id: "g4-maths-large-a-q15",
    prompt: "Round 24,516 to the nearest 1,000.",
    options: [
      { id: "a", text: "24,000" },
      { id: "b", text: "24,500" },
      { id: "c", text: "25,000" },
      { id: "d", text: "30,000" }
    ],
    answerId: "c",
    explanation: "The hundreds digit is 5, so we round up to 25,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q16",
    prompt: "Look at the cards. The same rule takes you from one card to the next. Which number goes on the **?** card?",
    options: [
      { id: "a", text: "26,000" },
      { id: "b", text: "25,900" },
      { id: "c", text: "26,600" },
      { id: "d", text: "26,100" }
    ],
    answerId: "d",
    explanation: "Each card is 500 more than the one before: 25,600 + 500 = 26,100 (and 26,100 + 500 = 26,600).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 508 100\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Find the missing card\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"508\" height=\"100\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"254.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Find the missing card</text>\n  <rect class=\"part card\" x=\"15\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"54.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">24,600</text>\n  <line class=\"arrow\" x1=\"96\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"114,60 108,56 108,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"115\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"154.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">25,100</text>\n  <line class=\"arrow\" x1=\"196\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"214,60 208,56 208,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"215\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"254.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">25,600</text>\n  <line class=\"arrow\" x1=\"296\" y1=\"60\" x2=\"310\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"314,60 308,56 308,64\" fill=\"#333\"/>\n  <rect class=\"part card missing\" x=\"315\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"354.0\" y=\"66\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <line class=\"arrow\" x1=\"396\" y1=\"60\" x2=\"410\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"414,60 408,56 408,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"415\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"454.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">26,600</text>\n</svg>", "alt": "Five cards joined by arrows: 24,600, 25,100, 25,600, a question mark card, 26,600."}
  },
  {
    id: "g4-maths-large-a-q17",
    prompt: "A stadium in Pune has 18,450 seats. On match day, 9,275 seats are filled. How many seats are empty?",
    options: [
      { id: "a", text: "9,175" },
      { id: "b", text: "9,225" },
      { id: "c", text: "11,225" },
      { id: "d", text: "27,725" }
    ],
    answerId: "a",
    explanation: "Empty seats = 18,450 \u2212 9,275 = 9,175.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q18",
    prompt: "How many hundreds make 4,000?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "40" },
      { id: "c", text: "400" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "10 hundreds make 1,000, so 40 hundreds make 4,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q19",
    prompt: "Which number is 7 thousands + 15 hundreds + 3 ones?",
    options: [
      { id: "a", text: "7,153" },
      { id: "b", text: "71,503" },
      { id: "c", text: "8,503" },
      { id: "d", text: "7,503" }
    ],
    answerId: "c",
    explanation: "15 hundreds is 1,500, so 7,000 + 1,500 + 3 = 8,503.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q20",
    prompt: "In 47,374, what is the difference between the place values of the two 7s?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "6,993" },
      { id: "c", text: "7,070" },
      { id: "d", text: "6,930" }
    ],
    answerId: "d",
    explanation: "One 7 is worth 7,000 and the other is worth 70, and 7,000 \u2212 70 = 6,930.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q21",
    prompt: "Look at the five digit tiles. Using each tile once, what is the **smallest 5-digit ODD number** you can make?",
    options: [
      { id: "a", text: "30,487" },
      { id: "b", text: "30,478" },
      { id: "c", text: "30,847" },
      { id: "d", text: "40,378" }
    ],
    answerId: "a",
    explanation: "It must end in 3 or 7; ending in 7 lets 3 lead: 3, then 0, 4, 8, then 7 \u2192 30,487. (30,478 is even.)",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Digit Tiles\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"190.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Digit Tiles</text>\n  <rect class=\"part tile\" x=\"45.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"70.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part tile\" x=\"105.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"130.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part tile\" x=\"165.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"190.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <rect class=\"part tile\" x=\"225.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"250.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part tile\" x=\"285.0\" y=\"38\" width=\"50\" height=\"56\" rx=\"8\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"310.0\" y=\"76\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label small\" x=\"190.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Use each tile once.</text>\n</svg>", "alt": "Five digit tiles showing 4, 0, 7, 3 and 8."}
  },
  {
    id: "g4-maths-large-a-q22",
    prompt: "A number rounded to the nearest 100 is 5,300. Which of these could the number be?",
    options: [
      { id: "a", text: "5,349" },
      { id: "b", text: "5,350" },
      { id: "c", text: "5,249" },
      { id: "d", text: "5,399" }
    ],
    answerId: "a",
    explanation: "5,349 has tens digit 4, so it rounds down to 5,300; the others round to 5,400 or 5,200.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q23",
    prompt: "Class 4 went on a school trip. The train travelled 1,265 km to Jaipur and the same distance back. About how many km did they travel in all, to the nearest hundred?",
    options: [
      { id: "a", text: "2,530" },
      { id: "b", text: "2,600" },
      { id: "c", text: "2,500" },
      { id: "d", text: "1,300" }
    ],
    answerId: "c",
    explanation: "1,265 + 1,265 = 2,530, and the tens digit 3 is less than 5, so it rounds to 2,500.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q24",
    prompt: "What comes next: 10,001; 10,011; 10,111; 11,111; ___?",
    options: [
      { id: "a", text: "11,121" },
      { id: "b", text: "12,111" },
      { id: "c", text: "20,000" },
      { id: "d", text: "21,111" }
    ],
    answerId: "d",
    explanation: "We add 10, then 100, then 1,000, so next we add 10,000: 11,111 + 10,000 = 21,111.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-large-b-q01",
    prompt: "Look at the number line. Each small jump is 1,000. Which number is point **Q** showing?",
    options: [
      { id: "a", text: "54,500" },
      { id: "b", text: "55,400" },
      { id: "c", text: "45,500" },
      { id: "d", text: "54,050" }
    ],
    answerId: "a",
    explanation: "Q is halfway between 54,000 and 55,000, and halfway is 500 more, so Q = 54,500.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Where is Q?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Where is Q?</text>\n  <line class=\"axis\" x1=\"18\" y1=\"92\" x2=\"422\" y2=\"92\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"428,92 420,87 420,97\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"12,92 20,87 20,97\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"82\" x2=\"30.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">50,000</text>\n  <line class=\"tick\" x1=\"68.0\" y1=\"82\" x2=\"68.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"106.0\" y1=\"82\" x2=\"106.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"144.0\" y1=\"82\" x2=\"144.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"182.0\" y1=\"82\" x2=\"182.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"220.0\" y1=\"82\" x2=\"220.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"220.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">55,000</text>\n  <line class=\"tick\" x1=\"258.0\" y1=\"82\" x2=\"258.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"296.0\" y1=\"82\" x2=\"296.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"334.0\" y1=\"82\" x2=\"334.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"372.0\" y1=\"82\" x2=\"372.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"410.0\" y1=\"82\" x2=\"410.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"410.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">60,000</text>\n  <circle class=\"part point\" cx=\"201.0\" cy=\"92\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"201.0\" y1=\"52\" x2=\"201.0\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"201.0,83 196.0,75 206.0,75\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"201.0\" y=\"48\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Q</text>\n</svg>", "alt": "A number line from 50,000 to 60,000 with ticks every 1,000; 50,000, 55,000 and 60,000 are labelled. Point Q is exactly halfway between the 4th and 5th ticks after 50,000."}
  },
  {
    id: "g4-maths-large-b-q02",
    prompt: "Which numeral is \"fifty-seven thousand forty\"?",
    options: [
      { id: "a", text: "57,040" },
      { id: "b", text: "57,400" },
      { id: "c", text: "5,740" },
      { id: "d", text: "57,004" }
    ],
    answerId: "a",
    explanation: "Fifty-seven thousand is 57,000 and forty is 40, so the number is 57,040.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q03",
    prompt: "Look at the Place Value Chart. What is the **place value** of the digit in the column marked with the star (orange star \u2605)?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "400" },
      { id: "c", text: "40,000" },
      { id: "d", text: "4,000" }
    ],
    answerId: "d",
    explanation: "The star is under Thousands, which holds 4, so its place value is 4 thousands = 4,000.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 152\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Place Value Chart\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"152\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Place Value Chart</text>\n  <rect class=\"part header\" x=\"20\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"60.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ten Thousands</text>\n  <text class=\"label small\" x=\"60.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(TTh)</text>\n  <rect class=\"part cell\" x=\"20\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"42.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"60.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part header\" x=\"100\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Thousands</text>\n  <text class=\"label small\" x=\"140.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(Th)</text>\n  <rect class=\"part cell\" x=\"100\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"122.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"140.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <polygon class=\"highlight star\" points=\"140.0,135.0 142.0,140.25 147.61,140.53 143.23,144.05 144.7,149.47 140.0,146.4 135.3,149.47 136.77,144.05 132.39,140.53 138.0,140.25\" fill=\"#ffb300\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part header\" x=\"180\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"220.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Hundreds</text>\n  <text class=\"label small\" x=\"220.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(H)</text>\n  <rect class=\"part cell\" x=\"180\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"202.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"220.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part header\" x=\"260\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"300.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tens</text>\n  <text class=\"label small\" x=\"300.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(T)</text>\n  <rect class=\"part cell\" x=\"260\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"282.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"300.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <rect class=\"part header\" x=\"340\" y=\"36\" width=\"80\" height=\"40\" rx=\"0\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"380.0\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ones</text>\n  <text class=\"label small\" x=\"380.0\" y=\"69\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">(O)</text>\n  <rect class=\"part cell\" x=\"340\" y=\"76\" width=\"80\" height=\"56\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"362.0\" y=\"84\" width=\"36\" height=\"40\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"380.0\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n</svg>", "alt": "A place value chart: Ten Thousands 6, Thousands 4, Hundreds 9, Tens 1, Ones 5. A star is under the Thousands column."}
  },
  {
    id: "g4-maths-large-b-q04",
    prompt: "Look at the blocks. Which number do the three blocks make together?",
    options: [
      { id: "a", text: "86,009" },
      { id: "b", text: "80,609" },
      { id: "c", text: "80,690" },
      { id: "d", text: "8,069" }
    ],
    answerId: "b",
    explanation: "80,000 + 600 + 9 = 80,609; there are no thousands and no tens, so both get a 0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Join the blocks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Join the blocks</text>\n  <rect class=\"part block\" x=\"64.0\" y=\"34.5\" width=\"130\" height=\"85.5\" rx=\"4\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"129.0\" y=\"82.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">80,000</text>\n  <text class=\"label small\" x=\"129.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ten Thousands</text>\n  <text class=\"label op\" x=\"207.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"220.0\" y=\"52.0\" width=\"80\" height=\"68.0\" rx=\"4\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"260.0\" y=\"91.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">600</text>\n  <text class=\"label small\" x=\"260.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Hundreds</text>\n  <text class=\"label op\" x=\"313.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"326.0\" y=\"62.5\" width=\"50\" height=\"57.5\" rx=\"4\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"351.0\" y=\"96.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <text class=\"label small\" x=\"351.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ones</text>\n</svg>", "alt": "Three blocks joined with plus signs: 80,000 plus 600 plus 9. There is no thousands block and no tens block."}
  },
  {
    id: "g4-maths-large-b-q05",
    prompt: "Look at the Village Census table. Which village has the **smallest** population?",
    options: [
      { id: "a", text: "Rampur" },
      { id: "b", text: "Sonpur" },
      { id: "c", text: "Devgarh" },
      { id: "d", text: "Kalyani" }
    ],
    answerId: "c",
    explanation: "All begin 38 thousand; at the hundreds place Devgarh has 1, the smallest, so 38,146 is the least.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Village Census\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"360\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"180.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Village Census</text>\n  <rect class=\"part header\" x=\"20\" y=\"34\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"54\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\"></text>\n  <rect class=\"part header\" x=\"60\" y=\"34\" width=\"160\" height=\"30\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"54\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Village</text>\n  <rect class=\"part header\" x=\"220\" y=\"34\" width=\"120\" height=\"30\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"280.0\" y=\"54\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Population</text>\n  <rect class=\"part cell\" x=\"20\" y=\"64\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"84\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <rect class=\"part cell\" x=\"60\" y=\"64\" width=\"160\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"84\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Rampur</text>\n  <rect class=\"part cell\" x=\"220\" y=\"64\" width=\"120\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"280.0\" y=\"84\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">38,416</text>\n  <rect class=\"part cell\" x=\"20\" y=\"94\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"114\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <rect class=\"part cell\" x=\"60\" y=\"94\" width=\"160\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"114\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Sonpur</text>\n  <rect class=\"part cell\" x=\"220\" y=\"94\" width=\"120\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"280.0\" y=\"114\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">38,461</text>\n  <rect class=\"part cell\" x=\"20\" y=\"124\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"144\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <rect class=\"part cell\" x=\"60\" y=\"124\" width=\"160\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"144\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Devgarh</text>\n  <rect class=\"part cell\" x=\"220\" y=\"124\" width=\"120\" height=\"30\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"280.0\" y=\"144\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">38,146</text>\n  <rect class=\"part cell\" x=\"20\" y=\"154\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"40.0\" y=\"174\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">D</text>\n  <rect class=\"part cell\" x=\"60\" y=\"154\" width=\"160\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"140.0\" y=\"174\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Kalyani</text>\n  <rect class=\"part cell\" x=\"220\" y=\"154\" width=\"120\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"280.0\" y=\"174\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">38,614</text>\n</svg>", "alt": "A table of four villages. A Rampur 38,416; B Sonpur 38,461; C Devgarh 38,146; D Kalyani 38,614."}
  },
  {
    id: "g4-maths-large-b-q06",
    prompt: "Look at the Number Train. Each carriage is 1 more than the one before it. Which number goes on the **?** carriage?",
    options: [
      { id: "a", text: "60,000" },
      { id: "b", text: "59,990" },
      { id: "c", text: "50,000" },
      { id: "d", text: "60,010" }
    ],
    answerId: "a",
    explanation: "The successor of 59,999 is 59,999 + 1 = 60,000, and 60,000 + 1 = 60,001.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 454 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number Train\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"454\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"227.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Number Train</text>\n  <rect class=\"part engine\" x=\"15\" y=\"48\" width=\"50\" height=\"46\" rx=\"6\" fill=\"#ffccbc\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part chimney\" x=\"43\" y=\"34\" width=\"16\" height=\"16\" rx=\"2\" fill=\"#ffccbc\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"27\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"53\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"65\" y1=\"80\" x2=\"75\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage\" x=\"75\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"118.0\" y=\"77\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">59,998</text>\n  <circle class=\"part wheel\" cx=\"93\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"143\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"161\" y1=\"80\" x2=\"171\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage\" x=\"171\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"214.0\" y=\"77\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">59,999</text>\n  <circle class=\"part wheel\" cx=\"189\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"239\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"257\" y1=\"80\" x2=\"267\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage missing\" x=\"267\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"310.0\" y=\"77\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <circle class=\"part wheel\" cx=\"285\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"335\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part coupler\" x1=\"353\" y1=\"80\" x2=\"363\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part carriage\" x=\"363\" y=\"48\" width=\"86\" height=\"46\" rx=\"6\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"406.0\" y=\"77\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">60,001</text>\n  <circle class=\"part wheel\" cx=\"381\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"431\" cy=\"100\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part track\" x1=\"10\" y1=\"110\" x2=\"444\" y2=\"110\" stroke=\"#666\" stroke-width=\"2\"/>\n</svg>", "alt": "An engine pulling four carriages numbered 59,998, 59,999, a question mark, and 60,001."}
  },
  {
    id: "g4-maths-large-b-q07",
    prompt: "In 25,814, what is the face value of 8?",
    options: [
      { id: "a", text: "800" },
      { id: "b", text: "80" },
      { id: "c", text: "8,000" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "Face value is just the digit itself, so it is 8 (its place value is 800).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q08",
    prompt: "Round 5,267 to the nearest 10.",
    options: [
      { id: "a", text: "5,260" },
      { id: "b", text: "5,270" },
      { id: "c", text: "5,300" },
      { id: "d", text: "5,200" }
    ],
    answerId: "b",
    explanation: "The ones digit is 7, which is 5 or more, so we round up to 5,270.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q09",
    prompt: "What comes next: 4,200; 4,300; 4,400; ___?",
    options: [
      { id: "a", text: "4,500" },
      { id: "b", text: "4,410" },
      { id: "c", text: "5,400" },
      { id: "d", text: "4,401" }
    ],
    answerId: "a",
    explanation: "Each number is 100 more than the one before, so the next is 4,500.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q10",
    prompt: "A school library has 2,345 Hindi books and 1,420 English books. How many books does it have in all?",
    options: [
      { id: "a", text: "925" },
      { id: "b", text: "3,665" },
      { id: "c", text: "3,765" },
      { id: "d", text: "3,756" }
    ],
    answerId: "c",
    explanation: "Total books = 2,345 + 1,420 = 3,765.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q11",
    prompt: "What is the smallest 5-digit number with all different digits?",
    options: [
      { id: "a", text: "10,000" },
      { id: "b", text: "10,234" },
      { id: "c", text: "12,345" },
      { id: "d", text: "10,023" }
    ],
    answerId: "b",
    explanation: "Start with 1, then use the smallest unused digits 0, 2, 3, 4 to get 10,234.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q12",
    prompt: "What is the greatest 4-digit number you can make with 0, 7, 3 and 9, using each digit once?",
    options: [
      { id: "a", text: "9,703" },
      { id: "b", text: "9,370" },
      { id: "c", text: "7,930" },
      { id: "d", text: "9,730" }
    ],
    answerId: "d",
    explanation: "Put the digits from biggest to smallest, with 0 last: 9,730.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q13",
    prompt: "Which list goes from greatest to smallest?",
    options: [
      { id: "a", text: "52,019; 25,910; 25,091" },
      { id: "b", text: "25,910; 52,019; 25,091" },
      { id: "c", text: "25,091; 25,910; 52,019" },
      { id: "d", text: "52,019; 25,091; 25,910" }
    ],
    answerId: "a",
    explanation: "52,019 has 5 ten thousands, and 25,910 beats 25,091 because 9 hundreds > 0 hundreds.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q14",
    prompt: "Look at the number line. The ball is at 17,480. Round 17,480 to the **nearest thousand**.",
    options: [
      { id: "a", text: "18,000" },
      { id: "b", text: "17,500" },
      { id: "c", text: "17,400" },
      { id: "d", text: "17,000" }
    ],
    answerId: "d",
    explanation: "17,480 has not reached the halfway mark 17,500, so it rounds down to 17,000.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Round to the nearest thousand\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Round to the nearest thousand</text>\n  <line class=\"axis\" x1=\"18\" y1=\"92\" x2=\"422\" y2=\"92\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"428,92 420,87 420,97\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"12,92 20,87 20,97\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"82\" x2=\"30.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">17,000</text>\n  <line class=\"tick\" x1=\"68.0\" y1=\"82\" x2=\"68.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"106.0\" y1=\"82\" x2=\"106.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"144.0\" y1=\"82\" x2=\"144.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"182.0\" y1=\"82\" x2=\"182.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"220.0\" y1=\"82\" x2=\"220.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"258.0\" y1=\"82\" x2=\"258.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"296.0\" y1=\"82\" x2=\"296.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"334.0\" y1=\"82\" x2=\"334.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"372.0\" y1=\"82\" x2=\"372.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"410.0\" y1=\"82\" x2=\"410.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"410.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">18,000</text>\n  <line class=\"part midpoint\" x1=\"220.0\" y1=\"70\" x2=\"220.0\" y2=\"106\" stroke=\"#e65100\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label midpoint-label\" x=\"220.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">17,500</text>\n  <text class=\"label small\" x=\"220.0\" y=\"134\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#e65100\">(halfway)</text>\n  <circle class=\"part point\" cx=\"212.4\" cy=\"92\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"212.4\" y1=\"52\" x2=\"212.4\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"212.4,83 207.4,75 217.4,75\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"212.4\" y=\"48\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">17,480</text>\n</svg>", "alt": "A number line from 17,000 to 18,000 with ticks every 100. The halfway mark 17,500 is dashed in orange. A ball marked 17,480 sits just before the halfway mark."}
  },
  {
    id: "g4-maths-large-b-q15",
    prompt: "Round 63,499 to the nearest 1,000.",
    options: [
      { id: "a", text: "64,000" },
      { id: "b", text: "63,500" },
      { id: "c", text: "60,000" },
      { id: "d", text: "63,000" }
    ],
    answerId: "d",
    explanation: "The hundreds digit is 4, which is less than 5, so we round down to 63,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q16",
    prompt: "For a recycling drive, Class 4 collected 3,608 old newspapers and Class 5 collected 4,295. How many more did Class 5 collect?",
    options: [
      { id: "a", text: "1,493" },
      { id: "b", text: "687" },
      { id: "c", text: "7,903" },
      { id: "d", text: "697" }
    ],
    answerId: "b",
    explanation: "4,295 \u2212 3,608 = 687 (remember to regroup in the ones and hundreds).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q17",
    prompt: "What number is 1,000 more than 48,650?",
    options: [
      { id: "a", text: "48,750" },
      { id: "b", text: "58,650" },
      { id: "c", text: "49,650" },
      { id: "d", text: "48,660" }
    ],
    answerId: "c",
    explanation: "Adding 1,000 changes only the thousands digit, from 8 to 9: 49,650.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q18",
    prompt: "Look at the Mystery Number Cards. What number do the four cards make together?",
    options: [
      { id: "a", text: "3,14,512" },
      { id: "b", text: "44,512" },
      { id: "c", text: "34,512" },
      { id: "d", text: "45,412" }
    ],
    answerId: "b",
    explanation: "30,000 + 14,000 + 500 + 12 = 44,512 (14 thousands = 1 ten thousand + 4 thousands; 12 ones = 1 ten + 2 ones).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Mystery Number Cards\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Mystery Number Cards</text>\n  <rect class=\"part block\" x=\"18\" y=\"40\" width=\"92\" height=\"80\" rx=\"4\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"64.0\" y=\"78\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <text class=\"label\" x=\"64.0\" y=\"104\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ten Thousands</text>\n  <text class=\"label op\" x=\"122\" y=\"86\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"134\" y=\"40\" width=\"92\" height=\"80\" rx=\"4\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"180.0\" y=\"78\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">14</text>\n  <text class=\"label\" x=\"180.0\" y=\"104\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Thousands</text>\n  <text class=\"label op\" x=\"238\" y=\"86\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"250\" y=\"40\" width=\"92\" height=\"80\" rx=\"4\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"296.0\" y=\"78\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <text class=\"label\" x=\"296.0\" y=\"104\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Hundreds</text>\n  <text class=\"label op\" x=\"354\" y=\"86\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"366\" y=\"40\" width=\"92\" height=\"80\" rx=\"4\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"412.0\" y=\"78\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <text class=\"label\" x=\"412.0\" y=\"104\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ones</text>\n  <text class=\"label small\" x=\"230.0\" y=\"140\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each card tells how many of that place.</text>\n</svg>", "alt": "Four cards joined with plus signs: 3 Ten Thousands, 14 Thousands, 5 Hundreds, 12 Ones."}
  },
  {
    id: "g4-maths-large-b-q19",
    prompt: "What is the successor of 99,999?",
    options: [
      { id: "a", text: "99,990" },
      { id: "b", text: "10,000" },
      { id: "c", text: "1,00,001" },
      { id: "d", text: "1,00,000" }
    ],
    answerId: "d",
    explanation: "99,999 + 1 = 1,00,000, which is the first 6-digit number, called one lakh.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q20",
    prompt: "What is the smallest 5-digit ODD number you can make with 4, 0, 7, 2 and 6, using each digit once?",
    options: [
      { id: "a", text: "20,467" },
      { id: "b", text: "20,476" },
      { id: "c", text: "24,067" },
      { id: "d", text: "20,647" }
    ],
    answerId: "a",
    explanation: "It must end in 7; the rest go smallest first without starting with 0: 2, 0, 4, 6 gives 20,467.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q21",
    prompt: "I am a 5-digit number. My ten thousands digit is 6 and my thousands digit is half of it. My hundreds digit is 0. My tens and ones digits are both 1 more than my thousands digit. Who am I?",
    options: [
      { id: "a", text: "63,440" },
      { id: "b", text: "36,044" },
      { id: "c", text: "63,044" },
      { id: "d", text: "63,404" }
    ],
    answerId: "c",
    explanation: "Digits are 6, 3, 0, 4, 4 from left to right, so the number is 63,044.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q22",
    prompt: "A number rounded to the nearest 1,000 is 12,000. Which of these could the number be?",
    options: [
      { id: "a", text: "12,500" },
      { id: "b", text: "11,500" },
      { id: "c", text: "11,499" },
      { id: "d", text: "12,600" }
    ],
    answerId: "b",
    explanation: "11,500 has hundreds digit 5, so it rounds up to 12,000; the others round to 11,000 or 13,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q23",
    prompt: "Look at the bar chart of metro passengers. How many **more** passengers travelled on the busiest day than on the quietest day?",
    options: [
      { id: "a", text: "4,245" },
      { id: "b", text: "4,355" },
      { id: "c", text: "2,670" },
      { id: "d", text: "1,280" }
    ],
    answerId: "a",
    explanation: "Busiest is B, Tuesday (26,150); quietest is C, Wednesday (21,905); 26,150 \u2212 21,905 = 4,245.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 236\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Metro Passengers at Rajiv Chowk\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"236\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Metro Passengers at Rajiv Chowk</text>\n  <line class=\"axis\" x1=\"130\" y1=\"36\" x2=\"130\" y2=\"222\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"61\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <text class=\"label\" x=\"124\" y=\"61\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Monday</text>\n  <rect class=\"part bar\" x=\"130\" y=\"44\" width=\"179.6\" height=\"26\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"315.6\" y=\"62\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">23,480</text>\n  <text class=\"label option-label\" x=\"14\" y=\"105\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <text class=\"label\" x=\"124\" y=\"105\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Tuesday</text>\n  <rect class=\"part bar\" x=\"130\" y=\"88\" width=\"200.0\" height=\"26\" rx=\"2\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"336.0\" y=\"106\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">26,150</text>\n  <text class=\"label option-label\" x=\"14\" y=\"149\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <text class=\"label\" x=\"124\" y=\"149\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Wednesday</text>\n  <rect class=\"part bar\" x=\"130\" y=\"132\" width=\"167.5\" height=\"26\" rx=\"2\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"303.5\" y=\"150\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">21,905</text>\n  <text class=\"label option-label\" x=\"14\" y=\"193\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">D</text>\n  <text class=\"label\" x=\"124\" y=\"193\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Thursday</text>\n  <rect class=\"part bar\" x=\"130\" y=\"176\" width=\"189.4\" height=\"26\" rx=\"2\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"325.4\" y=\"194\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">24,760</text>\n  <text class=\"label small\" x=\"220.0\" y=\"234\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Number of passengers each day</text>\n</svg>", "alt": "Horizontal bar chart of metro passengers. A Monday 23,480; B Tuesday 26,150; C Wednesday 21,905; D Thursday 24,760."}
  },
  {
    id: "g4-maths-large-b-q24",
    prompt: "Look at the cards. The numbers go down by the same amount each time. Which number goes on the **?** card?",
    options: [
      { id: "a", text: "65,500" },
      { id: "b", text: "66,000" },
      { id: "c", text: "65,000" },
      { id: "d", text: "62,500" }
    ],
    answerId: "c",
    explanation: "Each card is 2,500 less: 67,500 \u2212 2,500 = 65,000 (and 65,000 \u2212 2,500 = 62,500).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 508 100\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Find the missing card\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"508\" height=\"100\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"254.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Find the missing card</text>\n  <rect class=\"part card\" x=\"15\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"54.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">72,500</text>\n  <line class=\"arrow\" x1=\"96\" y1=\"60\" x2=\"110\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"114,60 108,56 108,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"115\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"154.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">70,000</text>\n  <line class=\"arrow\" x1=\"196\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"214,60 208,56 208,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"215\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"254.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">67,500</text>\n  <line class=\"arrow\" x1=\"296\" y1=\"60\" x2=\"310\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"314,60 308,56 308,64\" fill=\"#333\"/>\n  <rect class=\"part card missing\" x=\"315\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"354.0\" y=\"66\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <line class=\"arrow\" x1=\"396\" y1=\"60\" x2=\"410\" y2=\"60\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"414,60 408,56 408,64\" fill=\"#333\"/>\n  <rect class=\"part card\" x=\"415\" y=\"40\" width=\"78\" height=\"40\" rx=\"6\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"454.0\" y=\"66\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">62,500</text>\n</svg>", "alt": "Five cards joined by arrows: 72,500, 70,000, 67,500, a question mark card, 62,500."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🏟️",
    title: "Big numbers all around us",
    body: [
      "A big cricket stadium can hold 40,000 people!",
      "Today we read, write and play with big numbers.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's go!",
    visual: "place-value",
    speak: "A big cricket stadium can hold forty thousand people! That is a large number. Today, let's read, write and play with big numbers.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "The place value chart",
    lead: "Each place is worth ten times the place on its right. Tap each place for 46,215.",
    visual: "place-value",
    speak: "Each place is worth ten times the place on its right. Nine thousand nine hundred ninety-nine plus one is ten thousand!",
    cards: [
      { label: "Ten thousands", reveal: "4 → 40,000", emoji: "🏆" },
      { label: "Thousands", reveal: "6 → 6,000", emoji: "💯" },
      { label: "Hundreds", reveal: "2 → 200", emoji: "🔟" },
      { label: "Tens", reveal: "1 → 10", emoji: "➕" },
      { label: "Ones", reveal: "5 → 5", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Face value, place value, expanded form",
    visual: "place-value",
    speak: "Face value is just the digit. Place value depends on where it sits. In thirty-seven thousand five hundred eighty-two, the seven is worth seven thousand. Expanded form breaks a number into the worth of each digit. Zero holds an empty place, but we don't say it aloud.",
    steps: [
      "Face value of 7 in 37,582 is 7",
      "Place value of 7 in 37,582 is 7,000",
      "46,083 = 40,000 + 6,000 + 80 + 3",
      "Name: forty-six thousand eighty-three (zero not spoken)",
    ],
    punchline: "Same digit, different place → different value.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is the place value of 5 in 25,309?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "500" },
      { id: "c", text: "5,000" },
      { id: "d", text: "50,000" },
    ],
    answerId: "c",
    why: "The 5 sits in the thousands place → 5,000.",
    visual: "place-value",
    speak: "What is the place value of five in twenty-five thousand three hundred nine?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Compare, make, round",
    visual: "number-line",
    speak: "More digits means a bigger number. Same number of digits? Compare from the left. For the greatest number put the biggest digit first; for the smallest, start with the smallest digit, but never zero. Rounding: look at the digit just to the right. Five or more, round up. Less than five, round down.",
    steps: [
      "More digits → bigger; same digits → compare from the left",
      "48,390 > 48,309 (tens: 9 beats 0)",
      "Smallest 4-digit from 3, 0, 8, 5 → 3,058 (zero never first)",
      "6,472 to the nearest hundred → 6,500 (7 is 5 or more)",
    ],
    punchline: "Look left to compare; look right to round.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "Before, after & one lakh",
    lead: "Tap each card.",
    visual: "number-line",
    speak: "The successor is one more. The predecessor is one less. Ninety-nine thousand nine hundred ninety-nine plus one is one lakh!",
    cards: [
      { label: "Successor", reveal: "One more: after 19,999 comes 20,000", emoji: "➡️" },
      { label: "Predecessor", reveal: "One less: before 20,000 is 19,999", emoji: "⬅️" },
      { label: "Patterns", reveal: "25,000 → 26,000 → 27,000 → 28,000", emoji: "🚂" },
      { label: "One lakh", reveal: "99,999 + 1 = 1,00,000", emoji: "🎉" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Which is bigger, forty-eight thousand three hundred nine, or forty-eight thousand three hundred ninety?",
    question: {
      id: "g4-large-check",
      prompt: "Which is bigger?",
      options: [
        { id: "a", text: "48,309" },
        { id: "b", text: "48,390" },
        { id: "c", text: "They are equal" },
        { id: "d", text: "Cannot tell" },
      ],
      answerId: "b",
      explanation: "Same up to hundreds; tens: 9 vs 0 → 48,390 is bigger.",
      hints: ["Compare from the left.", "Find the first place that differs."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Big-number champ!",
    bullets: [
      "Each place is 10× the one on its right",
      "Place value = digit × its place",
      "Compare from the left; round by looking right",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, compare, make and round big numbers. Set A and Set B are ready.",
  },
];

export const g4MathsLargeNumbers: ChapterDef = {
  id: "g4-large-numbers",
  title: "Large Numbers",
  emoji: "\ud83d\udd22",
  blurb: "Place value to 1 lakh, compare & round",
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

export const g4MathsLargeNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
