import type { ChapterDef, PrepQuestion } from "../types";

/** Multiplication & Division - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-muldiv-a-q01",
    prompt: "Look at the Frog Jumps. Which multiplication fact do the frog's jumps show?",
    options: [
      { id: "a", text: "6 \u00d7 6 = 36" },
      { id: "b", text: "5 + 6 = 11" },
      { id: "c", text: "5 \u00d7 6 = 30" },
      { id: "d", text: "4 \u00d7 6 = 24" }
    ],
    answerId: "c",
    explanation: "The frog makes 5 jumps of 6 and lands on 30, so 5 \u00d7 6 = 30.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Frog Jumps\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Frog Jumps</text>\n  <line class=\"axis\" x1=\"15\" y1=\"105\" x2=\"447\" y2=\"105\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"453,105 445,100 445,110\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"25.0\" y1=\"97\" x2=\"25.0\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"25.0\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"93.33\" y1=\"97\" x2=\"93.33\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"93.33\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"tick\" x1=\"161.67\" y1=\"97\" x2=\"161.67\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"161.67\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <line class=\"tick\" x1=\"230.0\" y1=\"97\" x2=\"230.0\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"230.0\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">18</text>\n  <line class=\"tick\" x1=\"298.33\" y1=\"97\" x2=\"298.33\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"298.33\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">24</text>\n  <line class=\"tick\" x1=\"366.67\" y1=\"97\" x2=\"366.67\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"366.67\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">30</text>\n  <line class=\"tick\" x1=\"435.0\" y1=\"97\" x2=\"435.0\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"435.0\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">36</text>\n  <path class=\"arrow jump\" d=\"M 25.0 101 Q 59.165 21 93.33 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"93.33,100 86.33,93 94.33,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"59.165\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+6</text>\n  <path class=\"arrow jump\" d=\"M 93.33 101 Q 127.5 21 161.67 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"161.67,100 154.67,93 162.67,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"127.5\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+6</text>\n  <path class=\"arrow jump\" d=\"M 161.67 101 Q 195.83499999999998 21 230.0 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"230.0,100 223.0,93 231.0,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"195.83499999999998\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+6</text>\n  <path class=\"arrow jump\" d=\"M 230.0 101 Q 264.16499999999996 21 298.33 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"298.33,100 291.33,93 299.33,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"264.16499999999996\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+6</text>\n  <path class=\"arrow jump\" d=\"M 298.33 101 Q 332.5 21 366.67 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"366.67,100 359.67,93 367.67,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"332.5\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+6</text>\n</svg>", "alt": "A number line from 0 to 36 marked every 6. Five orange jump arrows, each labelled +6, go from 0 to 30."}
  },
  {
    id: "g4-maths-muldiv-a-q02",
    prompt: "Look at the Times Table Grid. Find the numbers hidden in cells **P** and **Q**. What is P + Q?",
    options: [
      { id: "a", text: "126" },
      { id: "b", text: "118" },
      { id: "c", text: "138" },
      { id: "d", text: "128" }
    ],
    answerId: "d",
    explanation: "P = 7 \u00d7 8 = 56 and Q = 8 \u00d7 9 = 72, so P + Q = 128.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Times Table Grid\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"160.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Times Table Grid</text>\n  <rect class=\"part header\" x=\"20\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e0e0e0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"55.0\" y=\"62\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u00d7</text>\n  <rect class=\"part header\" x=\"90\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"125.0\" y=\"62\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <rect class=\"part header\" x=\"160\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"195.0\" y=\"62\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <rect class=\"part header\" x=\"230\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"265.0\" y=\"62\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part header\" x=\"20\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"55.0\" y=\"102\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part cell\" x=\"90\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"125.0\" y=\"103\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">42</text>\n  <rect class=\"part cell\" x=\"160\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"195.0\" y=\"103\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">48</text>\n  <rect class=\"part cell\" x=\"230\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"265.0\" y=\"103\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">54</text>\n  <rect class=\"part header\" x=\"20\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"55.0\" y=\"142\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <rect class=\"part cell\" x=\"90\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"125.0\" y=\"143\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">49</text>\n  <rect class=\"part cell labelled\" x=\"160\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"195.0\" y=\"143\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <text class=\"label option-label\" x=\"168\" y=\"129\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">P</text>\n  <rect class=\"part cell\" x=\"230\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"265.0\" y=\"143\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">63</text>\n  <rect class=\"part header\" x=\"20\" y=\"156\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"55.0\" y=\"182\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <rect class=\"part cell\" x=\"90\" y=\"156\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"125.0\" y=\"183\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">56</text>\n  <rect class=\"part cell\" x=\"160\" y=\"156\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"195.0\" y=\"183\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">64</text>\n  <rect class=\"part cell labelled\" x=\"230\" y=\"156\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"265.0\" y=\"183\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <text class=\"label option-label\" x=\"238\" y=\"169\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Q</text>\n</svg>", "alt": "A multiplication grid with rows 6, 7, 8 and columns 7, 8, 9. Most cells are filled in. Cell P (row 7, column 8) and cell Q (row 8, column 9) show question marks."}
  },
  {
    id: "g4-maths-muldiv-a-q03",
    prompt: "Look at the sheet of Star Stickers. How many stars are there in all?",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "28" },
      { id: "c", text: "24" },
      { id: "d", text: "32" }
    ],
    answerId: "b",
    explanation: "There are 4 rows with 7 stars in each, and 4 \u00d7 7 = 28.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 318 206\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Star Stickers\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"318\" height=\"206\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"159.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Star Stickers</text>\n  <rect class=\"part tray\" x=\"32.0\" y=\"34\" width=\"254\" height=\"148\" rx=\"8\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"part star\" points=\"57.0,43.4 60.36,52.38 69.93,52.8 62.43,58.77 64.99,68.0 57.0,62.71 49.01,68.0 51.57,58.77 44.07,52.8 53.64,52.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"91.0,43.4 94.36,52.38 103.93,52.8 96.43,58.77 98.99,68.0 91.0,62.71 83.01,68.0 85.57,58.77 78.07,52.8 87.64,52.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"125.0,43.4 128.36,52.38 137.93,52.8 130.43,58.77 132.99,68.0 125.0,62.71 117.01,68.0 119.57,58.77 112.07,52.8 121.64,52.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"159.0,43.4 162.36,52.38 171.93,52.8 164.43,58.77 166.99,68.0 159.0,62.71 151.01,68.0 153.57,58.77 146.07,52.8 155.64,52.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"193.0,43.4 196.36,52.38 205.93,52.8 198.43,58.77 200.99,68.0 193.0,62.71 185.01,68.0 187.57,58.77 180.07,52.8 189.64,52.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"227.0,43.4 230.36,52.38 239.93,52.8 232.43,58.77 234.99,68.0 227.0,62.71 219.01,68.0 221.57,58.77 214.07,52.8 223.64,52.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"261.0,43.4 264.36,52.38 273.93,52.8 266.43,58.77 268.99,68.0 261.0,62.71 253.01,68.0 255.57,58.77 248.07,52.8 257.64,52.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"57.0,77.4 60.36,86.38 69.93,86.8 62.43,92.77 64.99,102.0 57.0,96.71 49.01,102.0 51.57,92.77 44.07,86.8 53.64,86.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"91.0,77.4 94.36,86.38 103.93,86.8 96.43,92.77 98.99,102.0 91.0,96.71 83.01,102.0 85.57,92.77 78.07,86.8 87.64,86.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"125.0,77.4 128.36,86.38 137.93,86.8 130.43,92.77 132.99,102.0 125.0,96.71 117.01,102.0 119.57,92.77 112.07,86.8 121.64,86.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"159.0,77.4 162.36,86.38 171.93,86.8 164.43,92.77 166.99,102.0 159.0,96.71 151.01,102.0 153.57,92.77 146.07,86.8 155.64,86.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"193.0,77.4 196.36,86.38 205.93,86.8 198.43,92.77 200.99,102.0 193.0,96.71 185.01,102.0 187.57,92.77 180.07,86.8 189.64,86.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"227.0,77.4 230.36,86.38 239.93,86.8 232.43,92.77 234.99,102.0 227.0,96.71 219.01,102.0 221.57,92.77 214.07,86.8 223.64,86.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"261.0,77.4 264.36,86.38 273.93,86.8 266.43,92.77 268.99,102.0 261.0,96.71 253.01,102.0 255.57,92.77 248.07,86.8 257.64,86.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"57.0,111.4 60.36,120.38 69.93,120.8 62.43,126.77 64.99,136.0 57.0,130.71 49.01,136.0 51.57,126.77 44.07,120.8 53.64,120.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"91.0,111.4 94.36,120.38 103.93,120.8 96.43,126.77 98.99,136.0 91.0,130.71 83.01,136.0 85.57,126.77 78.07,120.8 87.64,120.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"125.0,111.4 128.36,120.38 137.93,120.8 130.43,126.77 132.99,136.0 125.0,130.71 117.01,136.0 119.57,126.77 112.07,120.8 121.64,120.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"159.0,111.4 162.36,120.38 171.93,120.8 164.43,126.77 166.99,136.0 159.0,130.71 151.01,136.0 153.57,126.77 146.07,120.8 155.64,120.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"193.0,111.4 196.36,120.38 205.93,120.8 198.43,126.77 200.99,136.0 193.0,130.71 185.01,136.0 187.57,126.77 180.07,120.8 189.64,120.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"227.0,111.4 230.36,120.38 239.93,120.8 232.43,126.77 234.99,136.0 227.0,130.71 219.01,136.0 221.57,126.77 214.07,120.8 223.64,120.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"261.0,111.4 264.36,120.38 273.93,120.8 266.43,126.77 268.99,136.0 261.0,130.71 253.01,136.0 255.57,126.77 248.07,120.8 257.64,120.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"57.0,145.4 60.36,154.38 69.93,154.8 62.43,160.77 64.99,170.0 57.0,164.71 49.01,170.0 51.57,160.77 44.07,154.8 53.64,154.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"91.0,145.4 94.36,154.38 103.93,154.8 96.43,160.77 98.99,170.0 91.0,164.71 83.01,170.0 85.57,160.77 78.07,154.8 87.64,154.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"125.0,145.4 128.36,154.38 137.93,154.8 130.43,160.77 132.99,170.0 125.0,164.71 117.01,170.0 119.57,160.77 112.07,154.8 121.64,154.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"159.0,145.4 162.36,154.38 171.93,154.8 164.43,160.77 166.99,170.0 159.0,164.71 151.01,170.0 153.57,160.77 146.07,154.8 155.64,154.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"193.0,145.4 196.36,154.38 205.93,154.8 198.43,160.77 200.99,170.0 193.0,164.71 185.01,170.0 187.57,160.77 180.07,154.8 189.64,154.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"227.0,145.4 230.36,154.38 239.93,154.8 232.43,160.77 234.99,170.0 227.0,164.71 219.01,170.0 221.57,160.77 214.07,154.8 223.64,154.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n  <polygon class=\"part star\" points=\"261.0,145.4 264.36,154.38 273.93,154.8 266.43,160.77 268.99,170.0 261.0,164.71 253.01,170.0 255.57,160.77 248.07,154.8 257.64,154.38\" fill=\"#ffd54f\" stroke=\"#666\" stroke-width=\"1\"/>\n</svg>", "alt": "A sheet of star stickers arranged in 4 rows with 7 stars in each row."}
  },
  {
    id: "g4-maths-muldiv-a-q04",
    prompt: "What is 0 \u00d7 345?",
    options: [
      { id: "a", text: "345" },
      { id: "b", text: "1" },
      { id: "c", text: "3,450" },
      { id: "d", text: "0" }
    ],
    answerId: "d",
    explanation: "Any number multiplied by 0 is 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q05",
    prompt: "Look at pictures A, B, C and D. Which picture shows **3 equal groups with 5 in each group**?",
    options: [
      { id: "a", text: "Picture A" },
      { id: "b", text: "Picture B" },
      { id: "c", text: "Picture C" },
      { id: "d", text: "Picture D" }
    ],
    answerId: "d",
    explanation: "Picture D has 3 circles with 5 counters in each. A is 5 groups of 3, B is 3 groups of 4 and C is 4 groups of 5.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Which picture is it?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"260\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which picture is it?</text>\n  <rect class=\"part panel\" x=\"10\" y=\"36\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"58\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">A</text>\n  <circle class=\"part group\" cx=\"61.98\" cy=\"92\" r=\"15.78512396694215\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"61.98\" cy=\"83.32\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"69.5\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"54.46\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"99.74\" cy=\"92\" r=\"15.78512396694215\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"99.74\" cy=\"83.32\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"107.26\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"92.22\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"137.5\" cy=\"92\" r=\"15.78512396694215\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"137.5\" cy=\"83.32\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"145.02\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"129.98\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"175.26\" cy=\"92\" r=\"15.78512396694215\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"175.26\" cy=\"83.32\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"182.78\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"167.74\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"213.02\" cy=\"92\" r=\"15.78512396694215\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"213.02\" cy=\"83.32\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"220.54\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"205.5\" cy=\"96.34\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"36\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"58\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">B</text>\n  <circle class=\"part group\" cx=\"310.84\" cy=\"92\" r=\"25.81081081081081\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"310.84\" cy=\"77.8\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"325.04\" cy=\"92.0\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"310.84\" cy=\"106.2\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"296.65\" cy=\"92.0\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"372.5\" cy=\"92\" r=\"25.81081081081081\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"372.5\" cy=\"77.8\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"386.7\" cy=\"92.0\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"372.5\" cy=\"106.2\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"358.3\" cy=\"92.0\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"434.16\" cy=\"92\" r=\"25.81081081081081\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"434.16\" cy=\"77.8\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"448.35\" cy=\"92.0\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"434.16\" cy=\"106.2\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"419.96\" cy=\"92.0\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part panel\" x=\"10\" y=\"146\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"24\" y=\"168\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <circle class=\"part group\" cx=\"67.25\" cy=\"202\" r=\"19.58974358974359\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"67.25\" cy=\"191.23\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"77.49\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"73.58\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"60.91\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"57.0\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"114.08\" cy=\"202\" r=\"19.58974358974359\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"114.08\" cy=\"191.23\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"124.33\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"120.42\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"107.75\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"103.84\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"160.92\" cy=\"202\" r=\"19.58974358974359\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"160.92\" cy=\"191.23\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"171.16\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"167.25\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"154.58\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"150.67\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"207.75\" cy=\"202\" r=\"19.58974358974359\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"207.75\" cy=\"191.23\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"218.0\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"214.09\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"201.42\" cy=\"210.72\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"197.51\" cy=\"198.67\" r=\"4.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part panel\" x=\"245\" y=\"146\" width=\"225\" height=\"100\" rx=\"8\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"259\" y=\"168\" font-size=\"16\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">D</text>\n  <circle class=\"part group\" cx=\"310.84\" cy=\"202\" r=\"25.81081081081081\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"310.84\" cy=\"187.8\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"324.35\" cy=\"197.61\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"319.19\" cy=\"213.48\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"302.5\" cy=\"213.48\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"297.34\" cy=\"197.61\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"372.5\" cy=\"202\" r=\"25.81081081081081\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"372.5\" cy=\"187.8\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"386.0\" cy=\"197.61\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"380.84\" cy=\"213.48\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"364.16\" cy=\"213.48\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"359.0\" cy=\"197.61\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"434.16\" cy=\"202\" r=\"25.81081081081081\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"434.16\" cy=\"187.8\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"447.66\" cy=\"197.61\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"442.5\" cy=\"213.48\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"425.81\" cy=\"213.48\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"420.65\" cy=\"197.61\" r=\"5.5\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n</svg>", "alt": "Four boxes labelled A to D. A: 5 circles with 3 counters each. B: 3 circles with 4 counters each. C: 4 circles with 5 counters each. D: 3 circles with 5 counters each."}
  },
  {
    id: "g4-maths-muldiv-a-q06",
    prompt: "What is 42 \u00f7 6?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "36" }
    ],
    answerId: "a",
    explanation: "6 \u00d7 7 = 42, so 42 \u00f7 6 = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q07",
    prompt: "Look at the Fact Family Triangle. Corner A shows 63 and corner B shows 7. Which number belongs at corner **C**?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "8" },
      { id: "c", text: "56" },
      { id: "d", text: "70" }
    ],
    answerId: "a",
    explanation: "7 \u00d7 9 = 63, so 63 \u00f7 7 = 9 belongs at corner C.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 300 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Fact Family Triangle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"300\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"150.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Fact Family Triangle</text>\n  <polygon class=\"part triangle\" points=\"150,62 55,190 245,190\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label op\" x=\"150\" y=\"150\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#666\">\u00d7 \u00f7</text>\n  <circle class=\"part corner\" cx=\"150\" cy=\"62\" r=\"24\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"150\" y=\"69\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">63</text>\n  <text class=\"label option-label\" x=\"184\" y=\"53\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <circle class=\"part corner\" cx=\"55\" cy=\"190\" r=\"24\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"55\" y=\"197\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <text class=\"label option-label\" x=\"21\" y=\"195\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <circle class=\"part corner missing\" cx=\"245\" cy=\"190\" r=\"24\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"245\" y=\"197\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <text class=\"label option-label\" x=\"279\" y=\"195\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n</svg>", "alt": "A triangle with circles at its corners. Corner A at the top shows 63, corner B at bottom left shows 7, and corner C at bottom right shows a question mark."}
  },
  {
    id: "g4-maths-muldiv-a-q08",
    prompt: "What is 3 \u00d7 12?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "33" },
      { id: "c", text: "36" },
      { id: "d", text: "39" }
    ],
    answerId: "c",
    explanation: "3 \u00d7 12 = 12 + 12 + 12 = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q09",
    prompt: "Which of these is equal to 8 \u00d7 5?",
    options: [
      { id: "a", text: "5 \u00d7 8" },
      { id: "b", text: "8 + 5" },
      { id: "c", text: "8 \u00d7 8" },
      { id: "d", text: "5 \u00d7 5" }
    ],
    answerId: "a",
    explanation: "Changing the order of the factors does not change the product: both are 40.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q10",
    prompt: "Look at the figure. Didi shares all the laddoos equally on Plate 1, Plate 2 and Plate 3. How many laddoos go on each plate?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "9" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "There are 18 laddoos and 3 plates, and 18 \u00f7 3 = 6.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Laddoos to Share\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Laddoos to Share</text>\n  <circle class=\"part laddoo\" cx=\"110\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"140\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"170\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"200\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"230\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"260\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"290\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"320\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"350\" cy=\"48\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"110\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"140\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"170\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"200\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"230\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"260\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"290\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"320\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part laddoo\" cx=\"350\" cy=\"76\" r=\"11\" fill=\"#ffb74d\" stroke=\"#333\" stroke-width=\"1\"/>\n  <ellipse class=\"part plate\" cx=\"80\" cy=\"150\" rx=\"60.0\" ry=\"22\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse class=\"part plate-inner\" cx=\"80\" cy=\"150\" rx=\"46.0\" ry=\"13\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"80\" y=\"190\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plate 1</text>\n  <ellipse class=\"part plate\" cx=\"230\" cy=\"150\" rx=\"60.0\" ry=\"22\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse class=\"part plate-inner\" cx=\"230\" cy=\"150\" rx=\"46.0\" ry=\"13\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"230\" y=\"190\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plate 2</text>\n  <ellipse class=\"part plate\" cx=\"380\" cy=\"150\" rx=\"60.0\" ry=\"22\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse class=\"part plate-inner\" cx=\"380\" cy=\"150\" rx=\"46.0\" ry=\"13\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"380\" y=\"190\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plate 3</text>\n  <line class=\"arrow\" x1=\"230\" y1=\"100\" x2=\"230\" y2=\"118\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <polygon class=\"arrow\" points=\"230,124 225,116 235,116\" fill=\"#333\"/>\n  <text class=\"label small\" x=\"300\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">share equally</text>\n</svg>", "alt": "Eighteen laddoos in two rows of nine, with an arrow pointing down to three empty plates labelled Plate 1, Plate 2 and Plate 3."}
  },
  {
    id: "g4-maths-muldiv-a-q11",
    prompt: "Look at the Box Method for 47 \u00d7 6. The first box is already done. What is **47 \u00d7 6**?",
    options: [
      { id: "a", text: "242" },
      { id: "b", text: "282" },
      { id: "c", text: "272" },
      { id: "d", text: "287" }
    ],
    answerId: "b",
    explanation: "The second box is 7 \u00d7 6 = 42, and 240 + 42 = 282.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Box Method: 47 \u00d7 6\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Box Method: 47 \u00d7 6</text>\n  <rect class=\"part box\" x=\"60\" y=\"60\" width=\"293.0\" height=\"80\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"206.5\" y=\"50\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">40</text>\n  <text class=\"label value\" x=\"206.5\" y=\"106.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">240</text>\n  <rect class=\"part box\" x=\"353.0\" y=\"60\" width=\"67.0\" height=\"80\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"386.5\" y=\"50\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <text class=\"label value\" x=\"386.5\" y=\"106.0\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <text class=\"label\" x=\"42\" y=\"106.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <text class=\"label small\" x=\"230.0\" y=\"176\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each box = top number \u00d7 side number</text>\n</svg>", "alt": "A rectangle split into two boxes. The top labels are 40 and 7, and the side label is 6. The first box shows 240 and the second box shows a question mark."}
  },
  {
    id: "g4-maths-muldiv-a-q12",
    prompt: "What is 214 \u00d7 4?",
    options: [
      { id: "a", text: "218" },
      { id: "b", text: "846" },
      { id: "c", text: "856" },
      { id: "d", text: "864" }
    ],
    answerId: "c",
    explanation: "200 \u00d7 4 = 800, 10 \u00d7 4 = 40 and 4 \u00d7 4 = 16, and 800 + 40 + 16 = 856.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q13",
    prompt: "What is 12 \u00d7 11?",
    options: [
      { id: "a", text: "132" },
      { id: "b", text: "23" },
      { id: "c", text: "121" },
      { id: "d", text: "122" }
    ],
    answerId: "a",
    explanation: "12 \u00d7 11 = 12 \u00d7 10 + 12 \u00d7 1 = 120 + 12 = 132.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q14",
    prompt: "Look at the Bead Bags. Rashmi put all her beads into Bags 1 to 4 and some were left over. Which division fact does the figure show?",
    options: [
      { id: "a", text: "23 \u00f7 5 = 4 remainder 2" },
      { id: "b", text: "23 \u00f7 5 = 3 remainder 8" },
      { id: "c", text: "23 \u00f7 5 = 4 remainder 3" },
      { id: "d", text: "20 \u00f7 5 = 4" }
    ],
    answerId: "c",
    explanation: "4 bags of 5 make 20, plus 3 left over makes 23 beads, so 23 \u00f7 5 = 4 remainder 3.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Bead Bags\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bead Bags</text>\n  <circle class=\"part bag\" cx=\"54\" cy=\"88\" r=\"34\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"54.0\" cy=\"69.3\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"71.78\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"64.99\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"43.01\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"36.22\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"54\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bag 1</text>\n  <circle class=\"part bag\" cx=\"136\" cy=\"88\" r=\"34\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"136.0\" cy=\"69.3\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"153.78\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"146.99\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"125.01\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"118.22\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"136\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bag 2</text>\n  <circle class=\"part bag\" cx=\"218\" cy=\"88\" r=\"34\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"218.0\" cy=\"69.3\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"235.78\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"228.99\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"207.01\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"200.22\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"218\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bag 3</text>\n  <circle class=\"part bag\" cx=\"300\" cy=\"88\" r=\"34\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"300.0\" cy=\"69.3\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"317.78\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"310.99\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"289.01\" cy=\"103.13\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"282.22\" cy=\"82.22\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"300\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bag 4</text>\n  <rect class=\"part leftover\" x=\"354\" y=\"58\" width=\"96\" height=\"64\" rx=\"8\" fill=\"#fff\" stroke=\"#e65100\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part counter\" cx=\"376\" cy=\"90\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"402\" cy=\"90\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"428\" cy=\"90\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"402\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">left over</text>\n  <text class=\"label small\" x=\"240.0\" y=\"176\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each circle is one bag.</text>\n</svg>", "alt": "Four circles labelled Bag 1 to Bag 4, each holding 5 purple beads, and a dashed box marked 'left over' holding 3 beads."}
  },
  {
    id: "g4-maths-muldiv-a-q15",
    prompt: "Find the missing number: 6 \u00d7 ___ = 54",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "48" },
      { id: "c", text: "60" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "6 \u00d7 9 = 54, so the missing number is 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q16",
    prompt: "A pack has 10 pencils. Ravi buys 7 packs and 4 loose pencils. How many pencils does he have?",
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "74" },
      { id: "c", text: "70" },
      { id: "d", text: "47" }
    ],
    answerId: "b",
    explanation: "7 packs give 7 \u00d7 10 = 70 pencils, and 70 + 4 = 74.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q17",
    prompt: "One notebook costs \u20b925. How much do 6 notebooks cost?",
    options: [
      { id: "a", text: "\u20b931" },
      { id: "b", text: "\u20b9125" },
      { id: "c", text: "\u20b9140" },
      { id: "d", text: "\u20b9150" }
    ],
    answerId: "d",
    explanation: "6 \u00d7 \u20b925 = \u20b9150 (\u20b931 comes from adding instead of multiplying).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q18",
    prompt: "72 students stand in rows of 8 for assembly. How many rows are there?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "8" },
      { id: "c", text: "64" },
      { id: "d", text: "80" }
    ],
    answerId: "a",
    explanation: "72 \u00f7 8 = 9 rows, because 8 \u00d7 9 = 72.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q19",
    prompt: "Find the missing number: ___ \u00f7 7 = 6",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "42" },
      { id: "c", text: "36" },
      { id: "d", text: "49" }
    ],
    answerId: "b",
    explanation: "The missing number is 7 \u00d7 6 = 42.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q20",
    prompt: "A cricket coach has 3 boxes with 24 balls in each. He shares all the balls equally among 8 teams. How many balls does each team get?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "35" },
      { id: "c", text: "72" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "3 \u00d7 24 = 72 balls, and 72 \u00f7 8 = 9 balls per team.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q21",
    prompt: "50 children are going on a picnic. Each van can carry 8 children. How many vans are needed so that every child can go?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "42" }
    ],
    answerId: "a",
    explanation: "50 \u00f7 8 = 6 remainder 2, so 6 vans are full and 1 more van is needed for the last 2 children.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q22",
    prompt: "What is 25 \u00d7 24?",
    options: [
      { id: "a", text: "49" },
      { id: "b", text: "500" },
      { id: "c", text: "600" },
      { id: "d", text: "620" }
    ],
    answerId: "c",
    explanation: "25 \u00d7 4 = 100, and 24 is 6 fours, so 25 \u00d7 24 = 6 \u00d7 100 = 600.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q23",
    prompt: "A number is multiplied by 6 and then 4 is added. The answer is 70. What is the number?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "11" },
      { id: "c", text: "10" },
      { id: "d", text: "64" }
    ],
    answerId: "b",
    explanation: "Undo the steps: 70 \u2212 4 = 66, and 66 \u00f7 6 = 11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q24",
    prompt: "Look at the price tags in the School Stationery Shop. Arjun buys 3 notebooks and 5 pencils and pays with a \u20b9200 note. How much change does he get?",
    options: [
      { id: "a", text: "\u20b965" },
      { id: "b", text: "\u20b975" },
      { id: "c", text: "\u20b9135" },
      { id: "d", text: "\u20b955" }
    ],
    answerId: "a",
    explanation: "3 \u00d7 \u20b935 = \u20b9105 and 5 \u00d7 \u20b96 = \u20b930, so he spends \u20b9135. \u20b9200 \u2212 \u20b9135 = \u20b965.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"School Stationery Shop\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">School Stationery Shop</text>\n  <path class=\"part tag\" d=\"M 38 50 L 150 50 L 150 130 L 38 130 L 20 90 Z\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part hole\" cx=\"40\" cy=\"90\" r=\"5\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"96\" y=\"82\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Notebook</text>\n  <text class=\"label value\" x=\"96\" y=\"112\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b935</text>\n  <text class=\"label small\" x=\"96\" y=\"126\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">each</text>\n  <path class=\"part tag\" d=\"M 186 50 L 298 50 L 298 130 L 186 130 L 168 90 Z\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part hole\" cx=\"188\" cy=\"90\" r=\"5\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"244\" y=\"82\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Pencil</text>\n  <text class=\"label value\" x=\"244\" y=\"112\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b96</text>\n  <text class=\"label small\" x=\"244\" y=\"126\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">each</text>\n  <path class=\"part tag\" d=\"M 334 50 L 446 50 L 446 130 L 334 130 L 316 90 Z\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part hole\" cx=\"336\" cy=\"90\" r=\"5\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"392\" y=\"82\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Eraser</text>\n  <text class=\"label value\" x=\"392\" y=\"112\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b94</text>\n  <text class=\"label small\" x=\"392\" y=\"126\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">each</text>\n</svg>", "alt": "Three price tags: Notebook \u20b935 each, Pencil \u20b96 each, Eraser \u20b94 each."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-muldiv-b-q01",
    prompt: "What does 9 \u00d7 4 mean?",
    options: [
      { id: "a", text: "9 + 4" },
      { id: "b", text: "9 + 9 + 9 + 9" },
      { id: "c", text: "9 + 9 + 9" },
      { id: "d", text: "4 + 4 + 4 + 4" }
    ],
    answerId: "b",
    explanation: "9 \u00d7 4 means 4 groups of 9, which is 9 + 9 + 9 + 9 = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q02",
    prompt: "Look at Skip Counting by 8. Which number belongs at point **P**?",
    options: [
      { id: "a", text: "32" },
      { id: "b", text: "30" },
      { id: "c", text: "34" },
      { id: "d", text: "28" }
    ],
    answerId: "a",
    explanation: "Counting in 8s: 8, 16, 24, 32, so P = 32 (4 \u00d7 8).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Skip Counting by 8\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Skip Counting by 8</text>\n  <line class=\"axis\" x1=\"15\" y1=\"105\" x2=\"447\" y2=\"105\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"453,105 445,100 445,110\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"25.0\" y1=\"97\" x2=\"25.0\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"25.0\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <line class=\"tick\" x1=\"93.33\" y1=\"97\" x2=\"93.33\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"93.33\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"tick\" x1=\"161.67\" y1=\"97\" x2=\"161.67\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"161.67\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">16</text>\n  <line class=\"tick\" x1=\"230.0\" y1=\"97\" x2=\"230.0\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"230.0\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">24</text>\n  <line class=\"tick\" x1=\"298.33\" y1=\"97\" x2=\"298.33\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label point-label\" x=\"298.33\" y=\"131\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">P</text>\n  <line class=\"tick\" x1=\"366.67\" y1=\"97\" x2=\"366.67\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"366.67\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">40</text>\n  <line class=\"tick\" x1=\"435.0\" y1=\"97\" x2=\"435.0\" y2=\"113\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"435.0\" y=\"131\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">48</text>\n  <path class=\"arrow jump\" d=\"M 25.0 101 Q 59.165 21 93.33 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"93.33,100 86.33,93 94.33,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"59.165\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+8</text>\n  <path class=\"arrow jump\" d=\"M 93.33 101 Q 127.5 21 161.67 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"161.67,100 154.67,93 162.67,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"127.5\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+8</text>\n  <path class=\"arrow jump\" d=\"M 161.67 101 Q 195.83499999999998 21 230.0 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"230.0,100 223.0,93 231.0,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"195.83499999999998\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+8</text>\n  <path class=\"arrow jump\" d=\"M 230.0 101 Q 264.16499999999996 21 298.33 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"298.33,100 291.33,93 299.33,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"264.16499999999996\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+8</text>\n  <path class=\"arrow jump\" d=\"M 298.33 101 Q 332.5 21 366.67 99\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"366.67,100 359.67,93 367.67,91\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"332.5\" y=\"55\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+8</text>\n  <circle class=\"part point\" cx=\"298.33\" cy=\"105\" r=\"6\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "A number line from 0 to 48 marked every 8, with five +8 jumps from 0 to 40. The ticks are labelled 0, 8, 16, 24, P, 40, 48, and P is the fourth landing spot."}
  },
  {
    id: "g4-maths-muldiv-b-q03",
    prompt: "Look at the Egg Tray. Which multiplication tells how many eggs there are?",
    options: [
      { id: "a", text: "3 + 6" },
      { id: "b", text: "3 \u00d7 3" },
      { id: "c", text: "6 \u00d7 6" },
      { id: "d", text: "3 \u00d7 6" }
    ],
    answerId: "d",
    explanation: "The tray has 3 rows with 6 eggs in each, so 3 \u00d7 6 = 18 eggs.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Egg Tray\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"160.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Egg Tray</text>\n  <rect class=\"part tray\" x=\"32.0\" y=\"34\" width=\"256\" height=\"132\" rx=\"8\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"60.0\" cy=\"60.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"100.0\" cy=\"60.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"140.0\" cy=\"60.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"180.0\" cy=\"60.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"220.0\" cy=\"60.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"260.0\" cy=\"60.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"60.0\" cy=\"100.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"100.0\" cy=\"100.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"140.0\" cy=\"100.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"180.0\" cy=\"100.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"220.0\" cy=\"100.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"260.0\" cy=\"100.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"60.0\" cy=\"140.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"100.0\" cy=\"140.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"140.0\" cy=\"140.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"180.0\" cy=\"140.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"220.0\" cy=\"140.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"260.0\" cy=\"140.0\" r=\"14.399999999999999\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "An egg tray with 3 rows of 6 eggs."}
  },
  {
    id: "g4-maths-muldiv-b-q04",
    prompt: "What is 999 \u00d7 0?",
    options: [
      { id: "a", text: "999" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "9,990" }
    ],
    answerId: "c",
    explanation: "Any number multiplied by 0 is 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q05",
    prompt: "What is 64 \u00f7 1?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "0" },
      { id: "c", text: "65" },
      { id: "d", text: "64" }
    ],
    answerId: "d",
    explanation: "Dividing a number by 1 leaves it the same.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q06",
    prompt: "What is 63 \u00f7 9?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "54" }
    ],
    answerId: "b",
    explanation: "9 \u00d7 7 = 63, so 63 \u00f7 9 = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q07",
    prompt: "Look at the fact family triangle with 48, 6 and 8. Which card, A, B, C or D, does **NOT** belong to this fact family?",
    options: [
      { id: "a", text: "Card A" },
      { id: "b", text: "Card B" },
      { id: "c", text: "Card C" },
      { id: "d", text: "Card D" }
    ],
    answerId: "a",
    explanation: "48 \u00f7 4 = 12 is true, but it uses 4 and 12, not 6 and 8, so it is not in this family.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Which card does not belong?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Which card does not belong?</text>\n  <polygon class=\"part triangle\" points=\"85,55 30,165 140,165\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle class=\"part corner\" cx=\"85\" cy=\"55\" r=\"20\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"85\" y=\"61\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">48</text>\n  <circle class=\"part corner\" cx=\"30\" cy=\"165\" r=\"20\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"30\" y=\"171\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <circle class=\"part corner\" cx=\"140\" cy=\"165\" r=\"20\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"label value\" x=\"140\" y=\"171\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label small\" x=\"85\" y=\"205\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Fact family</text>\n  <rect class=\"part card\" x=\"180\" y=\"50\" width=\"135\" height=\"60\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"192\" y=\"70\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label value\" x=\"250\" y=\"90\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">48 \u00f7 4 = 12</text>\n  <rect class=\"part card\" x=\"330\" y=\"50\" width=\"135\" height=\"60\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"342\" y=\"70\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <text class=\"label value\" x=\"400\" y=\"90\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">48 \u00f7 6 = 8</text>\n  <rect class=\"part card\" x=\"180\" y=\"130\" width=\"135\" height=\"60\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"192\" y=\"150\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <text class=\"label value\" x=\"250\" y=\"170\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8 \u00d7 6 = 48</text>\n  <rect class=\"part card\" x=\"330\" y=\"130\" width=\"135\" height=\"60\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"342\" y=\"150\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label value\" x=\"400\" y=\"170\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">48 \u00f7 8 = 6</text>\n</svg>", "alt": "A small triangle with 48 at the top and 6 and 8 at the bottom corners. Four cards: A 48 \u00f7 4 = 12, B 48 \u00f7 6 = 8, C 8 \u00d7 6 = 48, D 48 \u00f7 8 = 6."}
  },
  {
    id: "g4-maths-muldiv-b-q08",
    prompt: "What is 11 \u00d7 4?",
    options: [
      { id: "a", text: "44" },
      { id: "b", text: "15" },
      { id: "c", text: "40" },
      { id: "d", text: "48" }
    ],
    answerId: "a",
    explanation: "11 \u00d7 4 = 10 \u00d7 4 + 1 \u00d7 4 = 40 + 4 = 44.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q09",
    prompt: "Look at Figure 1 and Figure 2. Which sentence is true?",
    options: [
      { id: "a", text: "Figure 1 has more dots." },
      { id: "b", text: "Figure 2 has more dots." },
      { id: "c", text: "Both figures have 14 dots." },
      { id: "d", text: "Both figures have 9 dots." }
    ],
    answerId: "c",
    explanation: "2 \u00d7 7 = 14 and 7 \u00d7 2 = 14. Turning an array around does not change the total.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 310\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two Arrays\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"310\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Two Arrays</text>\n  <text class=\"label option-label\" x=\"30\" y=\"52\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Figure 1</text>\n  <rect class=\"part tray\" x=\"26\" y=\"58\" width=\"190\" height=\"60\" rx=\"6\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"43.0\" cy=\"75.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"69.0\" cy=\"75.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"95.0\" cy=\"75.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"121.0\" cy=\"75.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"147.0\" cy=\"75.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"173.0\" cy=\"75.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"199.0\" cy=\"75.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"43.0\" cy=\"101.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"69.0\" cy=\"101.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"95.0\" cy=\"101.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"121.0\" cy=\"101.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"147.0\" cy=\"101.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"173.0\" cy=\"101.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"199.0\" cy=\"101.0\" r=\"9\" fill=\"#81c784\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label option-label\" x=\"300\" y=\"52\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">Figure 2</text>\n  <rect class=\"part tray\" x=\"296\" y=\"58\" width=\"60\" height=\"190\" rx=\"6\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part item\" cx=\"313.0\" cy=\"75.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"339.0\" cy=\"75.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"313.0\" cy=\"101.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"339.0\" cy=\"101.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"313.0\" cy=\"127.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"339.0\" cy=\"127.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"313.0\" cy=\"153.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"339.0\" cy=\"153.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"313.0\" cy=\"179.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"339.0\" cy=\"179.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"313.0\" cy=\"205.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"339.0\" cy=\"205.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"313.0\" cy=\"231.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part item\" cx=\"339.0\" cy=\"231.0\" r=\"9\" fill=\"#64b5f6\" stroke=\"#333\" stroke-width=\"1\"/>\n</svg>", "alt": "Figure 1 on the left has 2 rows of 7 green dots. Figure 2 on the right has 7 rows of 2 blue dots."}
  },
  {
    id: "g4-maths-muldiv-b-q10",
    prompt: "30 bananas are put equally into 5 baskets. How many bananas are in each basket?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "25" },
      { id: "c", text: "35" },
      { id: "d", text: "150" }
    ],
    answerId: "a",
    explanation: "30 \u00f7 5 = 6, because 5 \u00d7 6 = 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q11",
    prompt: "Look at the Mango Boxes. 20 mangoes are packed with 4 mangoes in each box. How many boxes are needed?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "16" },
      { id: "d", text: "24" }
    ],
    answerId: "b",
    explanation: "20 \u00f7 4 = 5, which matches the 5 dashed rings.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Mango Boxes\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Mango Boxes</text>\n  <circle class=\"part group\" cx=\"62.67\" cy=\"82\" r=\"36\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part mango\" cx=\"62.67\" cy=\"62.2\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"82.47\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"62.67\" cy=\"101.8\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"42.87\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"151.33\" cy=\"82\" r=\"36\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part mango\" cx=\"151.33\" cy=\"62.2\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"171.13\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"151.33\" cy=\"101.8\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"131.53\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"240.0\" cy=\"82\" r=\"36\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part mango\" cx=\"240.0\" cy=\"62.2\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"259.8\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"240.0\" cy=\"101.8\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"220.2\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"328.67\" cy=\"82\" r=\"36\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part mango\" cx=\"328.67\" cy=\"62.2\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"348.47\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"328.67\" cy=\"101.8\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"308.87\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part group\" cx=\"417.33\" cy=\"82\" r=\"36\" fill=\"#fff\" stroke=\"#666\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part mango\" cx=\"417.33\" cy=\"62.2\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"437.13\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"417.33\" cy=\"101.8\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part mango\" cx=\"397.53\" cy=\"82.0\" r=\"8\" fill=\"#ffca28\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label small\" x=\"240.0\" y=\"140\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each dashed ring = one box of mangoes</text>\n</svg>", "alt": "Five dashed rings, each holding 4 yellow mangoes."}
  },
  {
    id: "g4-maths-muldiv-b-q12",
    prompt: "Look at the Box Method for 235 \u00d7 4. What is **235 \u00d7 4**?",
    options: [
      { id: "a", text: "840" },
      { id: "b", text: "920" },
      { id: "c", text: "904" },
      { id: "d", text: "940" }
    ],
    answerId: "d",
    explanation: "Add the boxes: 800 + 120 + 20 = 940.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Box Method: 235 \u00d7 4\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Box Method: 235 \u00d7 4</text>\n  <rect class=\"part box\" x=\"60\" y=\"60\" width=\"247.1\" height=\"80\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"183.55\" y=\"50\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">200</text>\n  <text class=\"label value\" x=\"183.55\" y=\"106.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">800</text>\n  <rect class=\"part box\" x=\"307.1\" y=\"60\" width=\"56.5\" height=\"80\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"335.35\" y=\"50\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">30</text>\n  <text class=\"label value\" x=\"335.35\" y=\"106.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">120</text>\n  <rect class=\"part box\" x=\"363.6\" y=\"60\" width=\"56.5\" height=\"80\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"391.85\" y=\"50\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <text class=\"label value\" x=\"391.85\" y=\"106.0\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  <text class=\"label\" x=\"42\" y=\"106.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <text class=\"label small\" x=\"230.0\" y=\"176\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each box = top number \u00d7 side number</text>\n</svg>", "alt": "A rectangle split into three boxes with top labels 200, 30 and 5 and side label 4. The boxes show 800, 120 and 20."}
  },
  {
    id: "g4-maths-muldiv-b-q13",
    prompt: "Look at Check the Table. One labelled cell has a **wrong** answer. Which cell is it?",
    options: [
      { id: "a", text: "Cell A" },
      { id: "b", text: "Cell B" },
      { id: "c", text: "Cell C" },
      { id: "d", text: "Cell D" }
    ],
    answerId: "a",
    explanation: "Cell A should be 12 \u00d7 11 = 132, not 122. B (99), C (72) and D (96) are correct.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Check the Table\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"160.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Check the Table</text>\n  <rect class=\"part header\" x=\"20\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e0e0e0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"55.0\" y=\"62\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u00d7</text>\n  <rect class=\"part header\" x=\"90\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"125.0\" y=\"62\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part header\" x=\"160\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"195.0\" y=\"62\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <rect class=\"part header\" x=\"230\" y=\"36\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"265.0\" y=\"62\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <rect class=\"part header\" x=\"20\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"55.0\" y=\"102\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part cell\" x=\"90\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"125.0\" y=\"103\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">54</text>\n  <rect class=\"part cell\" x=\"160\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"195.0\" y=\"103\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">72</text>\n  <rect class=\"part cell labelled\" x=\"230\" y=\"76\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"265.0\" y=\"103\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">99</text>\n  <text class=\"label option-label\" x=\"238\" y=\"89\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <rect class=\"part header\" x=\"20\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"55.0\" y=\"142\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <rect class=\"part cell labelled\" x=\"90\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"125.0\" y=\"143\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">72</text>\n  <text class=\"label option-label\" x=\"98\" y=\"129\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <rect class=\"part cell labelled\" x=\"160\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"195.0\" y=\"143\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">96</text>\n  <text class=\"label option-label\" x=\"168\" y=\"129\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <rect class=\"part cell labelled\" x=\"230\" y=\"116\" width=\"70\" height=\"40\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"265.0\" y=\"143\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">122</text>\n  <text class=\"label option-label\" x=\"238\" y=\"129\" font-size=\"11\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n</svg>", "alt": "A multiplication grid with rows 9 and 12 and columns 6, 8 and 11. Row 9: 54, 72, 99 (99 is cell B). Row 12: 72 (cell C), 96 (cell D), 122 (cell A)."}
  },
  {
    id: "g4-maths-muldiv-b-q14",
    prompt: "Look at the Pencil Boxes. Neha shared her pencils equally into Box 1 to Box 4, and some were left over. How many pencils did she have at first?",
    options: [
      { id: "a", text: "28" },
      { id: "b", text: "32" },
      { id: "c", text: "29" },
      { id: "d", text: "36" }
    ],
    answerId: "c",
    explanation: "4 boxes \u00d7 7 pencils = 28, plus 1 left over = 29 pencils.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Pencil Boxes\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Pencil Boxes</text>\n  <circle class=\"part bag\" cx=\"54\" cy=\"88\" r=\"34\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"54.0\" cy=\"66.92\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"70.48\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"74.55\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"63.15\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"44.85\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"33.45\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"37.52\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"54\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Box 1</text>\n  <circle class=\"part bag\" cx=\"136\" cy=\"88\" r=\"34\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"136.0\" cy=\"66.92\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"152.48\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"156.55\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"145.15\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"126.85\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"115.45\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"119.52\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"136\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Box 2</text>\n  <circle class=\"part bag\" cx=\"218\" cy=\"88\" r=\"34\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"218.0\" cy=\"66.92\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"234.48\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"238.55\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"227.15\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"208.85\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"197.45\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"201.52\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"218\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Box 3</text>\n  <circle class=\"part bag\" cx=\"300\" cy=\"88\" r=\"34\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part counter\" cx=\"300.0\" cy=\"66.92\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"316.48\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"320.55\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"309.15\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"290.85\" cy=\"106.99\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"279.45\" cy=\"92.69\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part counter\" cx=\"283.52\" cy=\"74.86\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"300\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Box 4</text>\n  <rect class=\"part leftover\" x=\"354\" y=\"58\" width=\"96\" height=\"64\" rx=\"8\" fill=\"#fff\" stroke=\"#e65100\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <circle class=\"part counter\" cx=\"376\" cy=\"90\" r=\"6\" fill=\"#ba68c8\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"402\" y=\"140\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">left over</text>\n  <text class=\"label small\" x=\"240.0\" y=\"176\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Each circle is one box.</text>\n</svg>", "alt": "Four circles labelled Box 1 to Box 4, each holding 7 pencils shown as dots, and a dashed 'left over' box holding 1 pencil."}
  },
  {
    id: "g4-maths-muldiv-b-q15",
    prompt: "Find the missing number: ___ \u00d7 8 = 96",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "11" },
      { id: "c", text: "88" },
      { id: "d", text: "104" }
    ],
    answerId: "a",
    explanation: "12 \u00d7 8 = 96, so the missing number is 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q16",
    prompt: "A school hall has 14 rows of chairs with 9 chairs in each row. How many chairs are there?",
    options: [
      { id: "a", text: "23" },
      { id: "b", text: "126" },
      { id: "c", text: "116" },
      { id: "d", text: "136" }
    ],
    answerId: "b",
    explanation: "14 \u00d7 9 = 10 \u00d7 9 + 4 \u00d7 9 = 90 + 36 = 126.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q17",
    prompt: "Kabir saves \u20b915 every week. How much does he save in 12 weeks?",
    options: [
      { id: "a", text: "\u20b927" },
      { id: "b", text: "\u20b9170" },
      { id: "c", text: "\u20b9150" },
      { id: "d", text: "\u20b9180" }
    ],
    answerId: "d",
    explanation: "12 \u00d7 \u20b915 = \u20b9120 + \u20b960 = \u20b9180 (\u20b927 comes from adding).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q18",
    prompt: "88 children make cricket teams of 11 players each. How many teams can they make?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "9" },
      { id: "c", text: "8" },
      { id: "d", text: "77" }
    ],
    answerId: "c",
    explanation: "11 \u00d7 8 = 88, so 88 \u00f7 11 = 8 teams.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q19",
    prompt: "Find the missing number: ___ \u00f7 9 = 8",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "72" },
      { id: "c", text: "63" },
      { id: "d", text: "81" }
    ],
    answerId: "b",
    explanation: "The missing number is 9 \u00d7 8 = 72.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q20",
    prompt: "There are 4 packets with 18 biscuits in each. The biscuits are shared equally among 6 children. How many biscuits does each child get?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "3" },
      { id: "c", text: "28" },
      { id: "d", text: "72" }
    ],
    answerId: "a",
    explanation: "4 \u00d7 18 = 72 biscuits, and 72 \u00f7 6 = 12 each.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q21",
    prompt: "Tara has 75 beads. Each bracelet needs 8 beads. How many full bracelets can she make, and how many beads are left?",
    options: [
      { id: "a", text: "10 bracelets, 0 beads left" },
      { id: "b", text: "9 bracelets, 5 beads left" },
      { id: "c", text: "9 bracelets, 3 beads left" },
      { id: "d", text: "8 bracelets, 11 beads left" }
    ],
    answerId: "c",
    explanation: "8 \u00d7 9 = 72 and 75 \u2212 72 = 3, so 9 full bracelets with 3 beads left over.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q22",
    prompt: "What is 15 \u00d7 15?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "125" },
      { id: "c", text: "215" },
      { id: "d", text: "225" }
    ],
    answerId: "d",
    explanation: "15 \u00d7 10 = 150 and 15 \u00d7 5 = 75, and 150 + 75 = 225.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q23",
    prompt: "Look at the School Picnic Buses. 165 children get on Buses 1 to 5. How many seats are still **empty**?",
    options: [
      { id: "a", text: "35" },
      { id: "b", text: "25" },
      { id: "c", text: "15" },
      { id: "d", text: "190" }
    ],
    answerId: "b",
    explanation: "5 \u00d7 38 = 190 seats, and 190 \u2212 165 = 25 empty seats.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"School Picnic Buses\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">School Picnic Buses</text>\n  <rect class=\"part bus\" x=\"12\" y=\"50\" width=\"84\" height=\"52\" rx=\"8\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part window\" x=\"20\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"45\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"70\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"54.0\" y=\"94\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">38 seats</text>\n  <circle class=\"part wheel\" cx=\"30\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"78\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"54.0\" y=\"132\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bus 1</text>\n  <rect class=\"part bus\" x=\"105\" y=\"50\" width=\"84\" height=\"52\" rx=\"8\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part window\" x=\"113\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"138\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"163\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"147.0\" y=\"94\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">38 seats</text>\n  <circle class=\"part wheel\" cx=\"123\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"171\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"147.0\" y=\"132\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bus 2</text>\n  <rect class=\"part bus\" x=\"198\" y=\"50\" width=\"84\" height=\"52\" rx=\"8\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part window\" x=\"206\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"231\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"256\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"240.0\" y=\"94\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">38 seats</text>\n  <circle class=\"part wheel\" cx=\"216\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"264\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"240.0\" y=\"132\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bus 3</text>\n  <rect class=\"part bus\" x=\"291\" y=\"50\" width=\"84\" height=\"52\" rx=\"8\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part window\" x=\"299\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"324\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"349\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"333.0\" y=\"94\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">38 seats</text>\n  <circle class=\"part wheel\" cx=\"309\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"357\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"333.0\" y=\"132\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bus 4</text>\n  <rect class=\"part bus\" x=\"384\" y=\"50\" width=\"84\" height=\"52\" rx=\"8\" fill=\"#fff59d\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part window\" x=\"392\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"417\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part window\" x=\"442\" y=\"58\" width=\"20\" height=\"16\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label value\" x=\"426.0\" y=\"94\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">38 seats</text>\n  <circle class=\"part wheel\" cx=\"402\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part wheel\" cx=\"450\" cy=\"104\" r=\"8\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"426.0\" y=\"132\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bus 5</text>\n  <text class=\"label small\" x=\"240.0\" y=\"152\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All buses are the same size.</text>\n</svg>", "alt": "Five identical yellow buses labelled Bus 1 to Bus 5, each marked 38 seats."}
  },
  {
    id: "g4-maths-muldiv-b-q24",
    prompt: "A school buys 6 cricket bats at \u20b9245 each and pays with \u20b92,000. How much change does it get back?",
    options: [
      { id: "a", text: "\u20b91,470" },
      { id: "b", text: "\u20b9530" },
      { id: "c", text: "\u20b91,755" },
      { id: "d", text: "\u20b9630" }
    ],
    answerId: "b",
    explanation: "6 \u00d7 \u20b9245 = \u20b91,470, and \u20b92,000 \u2212 \u20b91,470 = \u20b9530.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🥟",
    title: "Equal groups",
    body: [
      "Three plates with four samosas on each: 4 + 4 + 4 = 12.",
      "So 3 × 4 = 12! Multiplying is fast adding of equal groups.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's go!",
    visual: "place-value",
    speak: "Three plates with four samosas on each. Four plus four plus four is twelve. So three times four is twelve!",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Multiplication tricks",
    lead: "Tap each card.",
    visual: "place-value",
    speak: "Rows and columns make an array; turn it around and the total stays the same. Tables are skip counting. Any number times zero is zero, and times one stays the same.",
    cards: [
      { label: "Turn it around", reveal: "3 × 5 = 5 × 3 = 15", emoji: "🔄" },
      { label: "Tables = skip counting", reveal: "9 table digits add to 9: 9 × 7 = 63", emoji: "🐸" },
      { label: "Times zero", reveal: "0 × 75 = 0", emoji: "0️⃣" },
      { label: "Times one", reveal: "1 × 48 = 48", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Multiply 46 × 3",
    visual: "place-value",
    speak: "Multiply the ones first, then the tens. Carry over when you need to! Forty-six times three is one hundred thirty-eight.",
    steps: [
      "Ones: 6 × 3 = 18 → write 8, carry 1 ten",
      "Tens: 4 × 3 = 12 tens, + 1 carried = 13 tens",
      "13 tens = 130, plus 8 → 138",
    ],
    punchline: "Ones first, then tens — don't forget the carry.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is 23 × 4?",
    options: [
      { id: "a", text: "82" },
      { id: "b", text: "92" },
      { id: "c", text: "812" },
      { id: "d", text: "27" },
    ],
    answerId: "b",
    why: "3 × 4 = 12 → write 2, carry 1; 2 × 4 = 8, + 1 = 9 → 92.",
    visual: "place-value",
    speak: "What is twenty-three times four?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Sharing, fact families, leftovers",
    visual: "number-line",
    speak: "Division means sharing equally, or making equal groups. Multiplication and division are partners. Sometimes things don't share equally; what is left over is the remainder, and it is always smaller than the number you divide by.",
    steps: [
      "24 laddoos ÷ 4 friends = 6 each",
      "Fact family: 7 × 8 = 56 → 56 ÷ 8 = 7 and 56 ÷ 7 = 8",
      "Missing number: 8 × ? = 72 → 72 ÷ 8 = 9",
      "26 ÷ 4 = 6 remainder 2 (2 is less than 4)",
    ],
    punchline: "Division undoes multiplication.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "What is thirty-five divided by five?",
    question: {
      id: "g4-muldiv-check",
      prompt: "What is 35 ÷ 5?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "7" },
        { id: "d", text: "8" },
      ],
      answerId: "c",
      explanation: "5 × 7 = 35, so 35 ÷ 5 = 7.",
      hints: ["Think of the 5 table.", "Which number times 5 makes 35?"],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Times-and-share star!",
    bullets: [
      "Multiply = equal groups; order doesn't matter",
      "Ones first, then tens, carry over",
      "Division shares equally; remainder < divisor",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can multiply, divide and find remainders. Set A and Set B are ready.",
  },
];

export const g4MathsMultiplyDivide: ChapterDef = {
  id: "g4-multiply-divide",
  title: "Multiplication & Division",
  emoji: "\u2716\ufe0f",
  blurb: "Tables, carrying, sharing & remainders",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "multiply-basics",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "multiply-basics",
      questions: SET_B,
    },
  ],
  paperTopics: ["multiply-basics", "add-sub"],
};

export const g4MathsMultiplyDivideQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
