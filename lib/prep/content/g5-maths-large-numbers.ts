import type { ChapterDef, PrepQuestion } from "../types";

/** Large Numbers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-large-a-q01",
    prompt: "Look at the Indian Place Value Chart. Which digit is in the **Ten Lakhs (TL)** column?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "0" },
      { id: "c", text: "2" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "Reading the chart: C = 6, TL = 2, L = 0, so the ten-lakhs digit is 2 (the number is 6,20,47,158).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 462 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Indian Place Value Chart\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"462\" height=\"170\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"231.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Indian Place Value Chart</text>\n  <rect class=\"part period\" x=\"15\" y=\"32\" width=\"54\" height=\"22\" rx=\"0\" fill=\"#f8bbd0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"42.0\" y=\"48\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Crores</text>\n  <rect class=\"part period\" x=\"69\" y=\"32\" width=\"108\" height=\"22\" rx=\"0\" fill=\"#ffe0b2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"123.0\" y=\"48\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Lakhs</text>\n  <rect class=\"part period\" x=\"177\" y=\"32\" width=\"108\" height=\"22\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"231.0\" y=\"48\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Thousands</text>\n  <rect class=\"part period\" x=\"285\" y=\"32\" width=\"162\" height=\"22\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"366.0\" y=\"48\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ones</text>\n  <rect class=\"part header\" x=\"15\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"42.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">C</text>\n  <rect class=\"part cell\" x=\"15\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"25.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"42.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part header\" x=\"69\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"96.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">TL</text>\n  <rect class=\"part cell\" x=\"69\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"79.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"96.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <rect class=\"part header\" x=\"123\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"150.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  <rect class=\"part cell\" x=\"123\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"133.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"150.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part header\" x=\"177\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"204.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">TTh</text>\n  <rect class=\"part cell\" x=\"177\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"187.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"204.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part header\" x=\"231\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"258.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Th</text>\n  <rect class=\"part cell\" x=\"231\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"241.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"258.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <rect class=\"part header\" x=\"285\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"312.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part cell\" x=\"285\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"295.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"312.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <rect class=\"part header\" x=\"339\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"366.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part cell\" x=\"339\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"349.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"366.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <rect class=\"part header\" x=\"393\" y=\"54\" width=\"54\" height=\"30\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"420.0\" y=\"74\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part cell\" x=\"393\" y=\"84\" width=\"54\" height=\"52\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part digit-tile\" x=\"403.0\" y=\"92\" width=\"34\" height=\"38\" rx=\"6\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"420.0\" y=\"119\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label small\" x=\"231.0\" y=\"158\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">C = Crores \u00b7 TL = Ten Lakhs \u00b7 L = Lakhs \u00b7 TTh = Ten Thousands \u00b7 Th = Thousands</text>\n</svg>", "alt": "An Indian place value chart with period bands Crores, Lakhs, Thousands and Ones over eight columns C, TL, L, TTh, Th, H, T, O. The digits are 6, 2, 0, 4, 7, 1, 5, 8."}
  },
  {
    id: "g5-maths-large-a-q02",
    prompt: "Look at cards A, B, C and D. Three cards match the number name to the right numeral. Which card is the **odd one out**?",
    options: [
      { id: "a", text: "Card A" },
      { id: "b", text: "Card B" },
      { id: "c", text: "Card C" },
      { id: "d", text: "Card D" }
    ],
    answerId: "a",
    explanation: "Eight lakh forty is 8,00,040, not 8,40,000. Cards B, C and D are all correct.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Match the name to the numeral\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Match the name to the numeral</text>\n  <rect class=\"part card\" x=\"20\" y=\"34\" width=\"210\" height=\"64\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"32\" y=\"54\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label\" x=\"133.0\" y=\"64\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Eight lakh forty</text>\n  <text class=\"label value\" x=\"133.0\" y=\"84\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u2192 8,40,000</text>\n  <rect class=\"part card\" x=\"250\" y=\"34\" width=\"210\" height=\"64\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"262\" y=\"54\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <text class=\"label\" x=\"363.0\" y=\"64\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Five lakh six thousand</text>\n  <text class=\"label value\" x=\"363.0\" y=\"84\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u2192 5,06,000</text>\n  <rect class=\"part card\" x=\"20\" y=\"114\" width=\"210\" height=\"64\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"32\" y=\"134\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <text class=\"label\" x=\"133.0\" y=\"144\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Two crore thirty lakh</text>\n  <text class=\"label value\" x=\"133.0\" y=\"164\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u2192 2,30,00,000</text>\n  <rect class=\"part card\" x=\"250\" y=\"114\" width=\"210\" height=\"64\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"262\" y=\"134\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label\" x=\"363.0\" y=\"144\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Seventy thousand nine</text>\n  <text class=\"label value\" x=\"363.0\" y=\"164\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u2192 70,009</text>\n</svg>", "alt": "Four cards, each pairing a number name with a numeral. A: Eight lakh forty \u2192 8,40,000. B: Five lakh six thousand \u2192 5,06,000. C: Two crore thirty lakh \u2192 2,30,00,000. D: Seventy thousand nine \u2192 70,009."}
  },
  {
    id: "g5-maths-large-a-q03",
    prompt: "What is the place value of 8 in 3,28,415?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "800" },
      { id: "c", text: "80,000" },
      { id: "d", text: "8,000" }
    ],
    answerId: "d",
    explanation: "The 8 sits in the thousands place, so its place value is 8,000, while 8 alone is only its face value.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q04",
    prompt: "Look at the blocks. Which number do the four blocks make together?",
    options: [
      { id: "a", text: "3,40,906" },
      { id: "b", text: "3,49,006" },
      { id: "c", text: "34,906" },
      { id: "d", text: "3,04,906" }
    ],
    answerId: "a",
    explanation: "3,00,000 + 40,000 + 900 + 6 = 3,40,906. There are no thousands and no tens, so both places get a 0.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Join the blocks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Join the blocks</text>\n  <rect class=\"part block\" x=\"6.0\" y=\"34.5\" width=\"130\" height=\"85.5\" rx=\"4\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"71.0\" y=\"82.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,00,000</text>\n  <text class=\"label small\" x=\"71.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Lakhs</text>\n  <text class=\"label op\" x=\"149.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"162.0\" y=\"45.0\" width=\"100\" height=\"75.0\" rx=\"4\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"212.0\" y=\"87.5\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">40,000</text>\n  <text class=\"label small\" x=\"212.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ten Thousands</text>\n  <text class=\"label op\" x=\"275.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"288.0\" y=\"55.5\" width=\"70\" height=\"64.5\" rx=\"4\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"323.0\" y=\"92.75\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">900</text>\n  <text class=\"label small\" x=\"323.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Hundreds</text>\n  <text class=\"label op\" x=\"371.0\" y=\"95\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">+</text>\n  <rect class=\"part block\" x=\"384.0\" y=\"62.5\" width=\"50\" height=\"57.5\" rx=\"4\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"409.0\" y=\"96.25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <text class=\"label small\" x=\"409.0\" y=\"138\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Ones</text>\n</svg>", "alt": "Four blocks joined with plus signs: 3,00,000 (Lakhs), 40,000 (Ten Thousands), 900 (Hundreds) and 6 (Ones). There is no Thousands block and no Tens block."}
  },
  {
    id: "g5-maths-large-a-q05",
    prompt: "Look at the Number See-Saw. The LEFT side is down, so the LEFT number is greater. What is the **smallest** digit that can go in the box?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "Both numbers start 7,4. With 6 in the box, 7,46,815 < 7,46,902, so it fails. With 7, 7,47,815 > 7,46,902, so it works. The smallest digit is 7.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Number See-Saw\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"210\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Number See-Saw</text>\n  <polygon class=\"part fulcrum\" points=\"230,150 204,194 256,194\" fill=\"#bcaaa4\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"part plank\" x1=\"44.15\" y1=\"189.5\" x2=\"415.85\" y2=\"110.5\" stroke=\"#6d4c41\" stroke-width=\"8\"/>\n  <rect class=\"part card\" x=\"42.15\" y=\"133.5\" width=\"124\" height=\"40\" rx=\"6\" fill=\"#ffe0b2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"92.15\" y=\"160.5\" font-size=\"17\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">7,4</text>\n  <rect class=\"part blank-box\" x=\"94.15\" y=\"141.5\" width=\"18\" height=\"24\" rx=\"2\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"114.15\" y=\"160.5\" font-size=\"17\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">,815</text>\n  <text class=\"label option-label\" x=\"104.15\" y=\"125.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">LEFT</text>\n  <rect class=\"part card\" x=\"293.85\" y=\"54.5\" width=\"124\" height=\"40\" rx=\"6\" fill=\"#c5e1a5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"355.85\" y=\"81.5\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7,46,902</text>\n  <text class=\"label option-label\" x=\"355.85\" y=\"46.5\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">RIGHT</text>\n  <text class=\"label small\" x=\"230.0\" y=\"206\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The GREATER number makes its side go DOWN.</text>\n</svg>", "alt": "A see-saw tilted down on the left. The LEFT card shows 7,4 box ,815 with one missing digit. The RIGHT card shows 7,46,902. A note says the greater number makes its side go down."}
  },
  {
    id: "g5-maths-large-a-q06",
    prompt: "Look at cards A, B, C and D. Which card puts the commas in 45038216 the **Indian** way?",
    options: [
      { id: "a", text: "Card A" },
      { id: "b", text: "Card B" },
      { id: "c", text: "Card C" },
      { id: "d", text: "Card D" }
    ],
    answerId: "b",
    explanation: "Indian commas go after the first 3 digits from the right, then after every 2: 4,50,38,216. Card A is the international way.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Where do the commas go?\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"210\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Where do the commas go?</text>\n  <text class=\"label small\" x=\"240.0\" y=\"46\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">The number 45038216 written four ways:</text>\n  <rect class=\"part card\" x=\"20\" y=\"52\" width=\"210\" height=\"60\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"32\" y=\"72\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label value\" x=\"133.0\" y=\"89.0\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">45,038,216</text>\n  <rect class=\"part card\" x=\"250\" y=\"52\" width=\"210\" height=\"60\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"262\" y=\"72\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <text class=\"label value\" x=\"363.0\" y=\"89.0\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4,50,38,216</text>\n  <rect class=\"part card\" x=\"20\" y=\"128\" width=\"210\" height=\"60\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"32\" y=\"148\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <text class=\"label value\" x=\"133.0\" y=\"165.0\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">450,38,216</text>\n  <rect class=\"part card\" x=\"250\" y=\"128\" width=\"210\" height=\"60\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"262\" y=\"148\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label value\" x=\"363.0\" y=\"165.0\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4,503,82,16</text>\n</svg>", "alt": "Four cards showing 45038216 with commas in different places. A: 45,038,216. B: 4,50,38,216. C: 450,38,216. D: 4,503,82,16."}
  },
  {
    id: "g5-maths-large-a-q07",
    prompt: "Round 46,382 to the nearest thousand.",
    options: [
      { id: "a", text: "46,000" },
      { id: "b", text: "47,000" },
      { id: "c", text: "46,400" },
      { id: "d", text: "50,000" }
    ],
    answerId: "a",
    explanation: "The hundreds digit is 3, which is less than 5, so we round down to 46,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q08",
    prompt: "Look at Build the Number. Use all six tiles to make the **greatest** 6-digit number that has 1 in the Thousands slot. Which number is it?",
    options: [
      { id: "a", text: "9,64,310" },
      { id: "b", text: "9,61,430" },
      { id: "c", text: "9,64,130" },
      { id: "d", text: "9,61,340" }
    ],
    answerId: "b",
    explanation: "With 1 fixed in Th, put the rest from biggest to smallest in the other slots: 9 (L), 6 (TTh), 1 (Th), 4, 3, 0, which gives 9,61,430.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Build the Number\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Build the Number</text>\n  <rect class=\"part tile\" x=\"76.0\" y=\"36\" width=\"48\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"100.0\" y=\"70\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part tile\" x=\"132.0\" y=\"36\" width=\"48\" height=\"50\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"156.0\" y=\"70\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part tile\" x=\"188.0\" y=\"36\" width=\"48\" height=\"50\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"212.0\" y=\"70\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <rect class=\"part tile\" x=\"244.0\" y=\"36\" width=\"48\" height=\"50\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"268.0\" y=\"70\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <rect class=\"part tile\" x=\"300.0\" y=\"36\" width=\"48\" height=\"50\" rx=\"8\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"324.0\" y=\"70\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part tile\" x=\"356.0\" y=\"36\" width=\"48\" height=\"50\" rx=\"8\" fill=\"#e0f7fa\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"380.0\" y=\"70\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <text class=\"label\" x=\"72.0\" y=\"118\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">L</text>\n  <rect class=\"part slot\" x=\"42.0\" y=\"126\" width=\"60\" height=\"46\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label\" x=\"138.0\" y=\"118\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">TTh</text>\n  <rect class=\"part slot\" x=\"108.0\" y=\"126\" width=\"60\" height=\"46\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label\" x=\"204.0\" y=\"118\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Th</text>\n  <rect class=\"part slot fixed\" x=\"174.0\" y=\"126\" width=\"60\" height=\"46\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"204.0\" y=\"157\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <text class=\"label\" x=\"270.0\" y=\"118\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">H</text>\n  <rect class=\"part slot\" x=\"240.0\" y=\"126\" width=\"60\" height=\"46\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label\" x=\"336.0\" y=\"118\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">T</text>\n  <rect class=\"part slot\" x=\"306.0\" y=\"126\" width=\"60\" height=\"46\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label\" x=\"402.0\" y=\"118\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">O</text>\n  <rect class=\"part slot\" x=\"372.0\" y=\"126\" width=\"60\" height=\"46\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label small\" x=\"240.0\" y=\"192\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Use every tile once. The 1 must stay in the Thousands slot.</text>\n</svg>", "alt": "Six digit tiles: 9, 6, 4, 1, 3, 0. Below are six slots labelled L, TTh, Th, H, T, O. The Thousands slot already holds 1 and the other slots are empty and dashed."}
  },
  {
    id: "g5-maths-large-a-q09",
    prompt: "What is the smallest 5-digit number you can make using the digits 4, 0, 7, 2 and 9, each only once?",
    options: [
      { id: "a", text: "02,479" },
      { id: "b", text: "20,749" },
      { id: "c", text: "24,079" },
      { id: "d", text: "20,479" }
    ],
    answerId: "d",
    explanation: "A number cannot start with 0, so we start with 2, put 0 next, and then place 4, 7, 9 in increasing order.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q10",
    prompt: "Look at Growing Jumps. The jump grows by the same amount each time. Which number goes on the **?** card?",
    options: [
      { id: "a", text: "1,95,000" },
      { id: "b", text: "1,75,000" },
      { id: "c", text: "2,15,000" },
      { id: "d", text: "2,05,000" }
    ],
    answerId: "d",
    explanation: "The jumps are +10,000, +20,000, +30,000, so the next is +40,000: 1,65,000 + 40,000 = 2,05,000.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 478 130\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Growing Jumps\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"478\" height=\"130\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"239.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Growing Jumps</text>\n  <rect class=\"part card\" x=\"10\" y=\"74\" width=\"82\" height=\"40\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"51.0\" y=\"100\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1,05,000</text>\n  <rect class=\"part card\" x=\"104\" y=\"74\" width=\"82\" height=\"40\" rx=\"6\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"145.0\" y=\"100\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1,15,000</text>\n  <rect class=\"part card\" x=\"198\" y=\"74\" width=\"82\" height=\"40\" rx=\"6\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"239.0\" y=\"100\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1,35,000</text>\n  <rect class=\"part card\" x=\"292\" y=\"74\" width=\"82\" height=\"40\" rx=\"6\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"333.0\" y=\"100\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1,65,000</text>\n  <rect class=\"part card missing\" x=\"386\" y=\"74\" width=\"82\" height=\"40\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"427.0\" y=\"100\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text>\n  <path class=\"arrow jump\" d=\"M 51.0 72 Q 98.0 36 141.0 70\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"143.0,73 135.0,66 142.0,62\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"98.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+10,000</text>\n  <path class=\"arrow jump\" d=\"M 145.0 72 Q 192.0 36 235.0 70\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"237.0,73 229.0,66 236.0,62\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"192.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">+20,000</text>\n  <path class=\"arrow jump\" d=\"M 239.0 72 Q 286.0 36 329.0 70\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"331.0,73 323.0,66 330.0,62\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"286.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n  <path class=\"arrow jump\" d=\"M 333.0 72 Q 380.0 36 423.0 70\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"1.8\"/>\n  <polygon class=\"arrow\" points=\"425.0,73 417.0,66 424.0,62\" fill=\"#e65100\"/>\n  <text class=\"label jump-label\" x=\"380.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">?</text>\n</svg>", "alt": "Five cards: 1,05,000, 1,15,000, 1,35,000, 1,65,000 and a question mark. Curved arrows join them. The first two arrows are labelled +10,000 and +20,000, and the last two are labelled with question marks."}
  },
  {
    id: "g5-maths-large-a-q11",
    prompt: "What is the difference between the place values of the two 6s in 6,42,615?",
    options: [
      { id: "a", text: "5,99,400" },
      { id: "b", text: "0" },
      { id: "c", text: "6,00,600" },
      { id: "d", text: "5,94,000" }
    ],
    answerId: "a",
    explanation: "The place values are 6,00,000 and 600, and 6,00,000 \u2212 600 = 5,99,400, while 0 is the trap of using face values.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q12",
    prompt: "Look at the City Libraries table. At the end of the year, which library has the **most** books?",
    options: [
      { id: "a", text: "Library A" },
      { id: "b", text: "Library B" },
      { id: "c", text: "Library C" },
      { id: "d", text: "Library D" }
    ],
    answerId: "c",
    explanation: "End totals: A 2,85,100; B 2,84,150; C 2,85,500; D 2,84,950. C has the most, even though it started with the fewest.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 490 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"City Libraries\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"490\" height=\"210\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"245.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">City Libraries</text>\n  <rect class=\"part header\" x=\"20\" y=\"34\" width=\"90\" height=\"32\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"65.0\" y=\"55\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Library</text>\n  <rect class=\"part header\" x=\"110\" y=\"34\" width=\"170\" height=\"32\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"195.0\" y=\"55\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Books on 1 April</text>\n  <rect class=\"part header\" x=\"280\" y=\"34\" width=\"190\" height=\"32\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"375.0\" y=\"55\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Books added this year</text>\n  <rect class=\"part cell\" x=\"20\" y=\"66\" width=\"90\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"65.0\" y=\"87\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <rect class=\"part cell\" x=\"110\" y=\"66\" width=\"170\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"195.0\" y=\"87\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">2,48,600</text>\n  <rect class=\"part cell\" x=\"280\" y=\"66\" width=\"190\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"375.0\" y=\"87\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">36,500</text>\n  <rect class=\"part cell\" x=\"20\" y=\"98\" width=\"90\" height=\"32\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"65.0\" y=\"119\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <rect class=\"part cell\" x=\"110\" y=\"98\" width=\"170\" height=\"32\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"195.0\" y=\"119\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">2,71,250</text>\n  <rect class=\"part cell\" x=\"280\" y=\"98\" width=\"190\" height=\"32\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"375.0\" y=\"119\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">12,900</text>\n  <rect class=\"part cell\" x=\"20\" y=\"130\" width=\"90\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"65.0\" y=\"151\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <rect class=\"part cell\" x=\"110\" y=\"130\" width=\"170\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"195.0\" y=\"151\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">2,39,800</text>\n  <rect class=\"part cell\" x=\"280\" y=\"130\" width=\"190\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"375.0\" y=\"151\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">45,700</text>\n  <rect class=\"part cell\" x=\"20\" y=\"162\" width=\"90\" height=\"32\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"65.0\" y=\"183\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <rect class=\"part cell\" x=\"110\" y=\"162\" width=\"170\" height=\"32\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"195.0\" y=\"183\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">2,65,000</text>\n  <rect class=\"part cell\" x=\"280\" y=\"162\" width=\"190\" height=\"32\" rx=\"0\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"375.0\" y=\"183\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">19,950</text>\n</svg>", "alt": "A table of four city libraries. A: 2,48,600 books on 1 April, 36,500 added. B: 2,71,250 and 12,900. C: 2,39,800 and 45,700. D: 2,65,000 and 19,950."}
  },
  {
    id: "g5-maths-large-a-q13",
    prompt: "A number rounded to the nearest hundred becomes 7,300. Which of these could the number be?",
    options: [
      { id: "a", text: "7,401" },
      { id: "b", text: "7,350" },
      { id: "c", text: "7,249" },
      { id: "d", text: "7,349" }
    ],
    answerId: "d",
    explanation: "7,349 has 49 in its last two places so it rounds down to 7,300, while 7,350 rounds up to 7,400.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q14",
    prompt: "A cricket match drew 38,712 fans on Day 1 and 41,265 fans on Day 2. Rounding each day to the nearest thousand, what is the estimated total?",
    options: [
      { id: "a", text: "79,000" },
      { id: "b", text: "80,000" },
      { id: "c", text: "81,000" },
      { id: "d", text: "70,000" }
    ],
    answerId: "b",
    explanation: "38,712 rounds to 39,000 and 41,265 rounds to 41,000, and 39,000 + 41,000 = 80,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q15",
    prompt: "Look at the number line. Round 3,76,400 to the **nearest ten thousand**.",
    options: [
      { id: "a", text: "3,70,000" },
      { id: "b", text: "3,76,000" },
      { id: "c", text: "3,75,000" },
      { id: "d", text: "3,80,000" }
    ],
    answerId: "d",
    explanation: "3,76,400 is past the halfway mark 3,75,000, so it rounds up to 3,80,000.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Round to the nearest ten thousand\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Round to the nearest ten thousand</text>\n  <line class=\"axis\" x1=\"18\" y1=\"92\" x2=\"422\" y2=\"92\" stroke=\"#333\" stroke-width=\"2\"/>\n  <polygon class=\"arrow\" points=\"428,92 420,87 420,97\" fill=\"#333\"/>\n  <polygon class=\"arrow\" points=\"12,92 20,87 20,97\" fill=\"#333\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"82\" x2=\"30.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"30.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,70,000</text>\n  <line class=\"tick\" x1=\"68.0\" y1=\"82\" x2=\"68.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"106.0\" y1=\"82\" x2=\"106.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"144.0\" y1=\"82\" x2=\"144.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"182.0\" y1=\"82\" x2=\"182.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"220.0\" y1=\"82\" x2=\"220.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"258.0\" y1=\"82\" x2=\"258.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"296.0\" y1=\"82\" x2=\"296.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"334.0\" y1=\"82\" x2=\"334.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"372.0\" y1=\"82\" x2=\"372.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"410.0\" y1=\"82\" x2=\"410.0\" y2=\"102\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"410.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,80,000</text>\n  <line class=\"part midpoint\" x1=\"220.0\" y1=\"70\" x2=\"220.0\" y2=\"106\" stroke=\"#e65100\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label midpoint-label\" x=\"220.0\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">3,75,000</text>\n  <text class=\"label small\" x=\"220.0\" y=\"134\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#e65100\">(halfway)</text>\n  <circle class=\"part point\" cx=\"273.2\" cy=\"92\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"273.2\" y1=\"52\" x2=\"273.2\" y2=\"80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"273.2,83 268.2,75 278.2,75\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"273.2\" y=\"48\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3,76,400</text>\n</svg>", "alt": "A number line from 3,70,000 to 3,80,000 with ticks every 1,000. The halfway mark 3,75,000 is dashed in orange. A ball marked 3,76,400 sits just past the halfway mark."}
  },
  {
    id: "g5-maths-large-a-q16",
    prompt: "What is the greatest 6-digit EVEN number that can be made using the digits 5, 2, 9, 1, 7 and 3, each only once?",
    options: [
      { id: "a", text: "9,75,312" },
      { id: "b", text: "9,75,321" },
      { id: "c", text: "9,75,132" },
      { id: "d", text: "9,57,312" }
    ],
    answerId: "a",
    explanation: "The only even digit, 2, must go in the ones place, and the rest go in decreasing order to give 9,75,312 (9,75,321 is odd).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q17",
    prompt: "What number is 7 lakhs + 4 thousands + 12 hundreds + 5 tens?",
    options: [
      { id: "a", text: "7,04,125" },
      { id: "b", text: "7,16,050" },
      { id: "c", text: "7,41,250" },
      { id: "d", text: "7,05,250" }
    ],
    answerId: "d",
    explanation: "12 hundreds is 1,200, so 7,00,000 + 4,000 + 1,200 + 50 = 7,05,250.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q18",
    prompt: "How do we read 3,07,00,050 in words?",
    options: [
      { id: "a", text: "Three crore seventy lakh fifty" },
      { id: "b", text: "Three crore seven thousand fifty" },
      { id: "c", text: "Three crore seven lakh fifty" },
      { id: "d", text: "Thirty lakh seven thousand fifty" }
    ],
    answerId: "c",
    explanation: "The periods are 3 crore, 07 lakh, 00 thousand and 050, so the number is three crore seven lakh fifty.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q19",
    prompt: "Add the number just before 10,00,000 to the number just after 99,999. What do you get?",
    options: [
      { id: "a", text: "11,00,000" },
      { id: "b", text: "10,99,999" },
      { id: "c", text: "10,99,998" },
      { id: "d", text: "19,99,999" }
    ],
    answerId: "b",
    explanation: "The numbers are 9,99,999 and 1,00,000, and their sum is 10,99,999.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q20",
    prompt: "Using the digits 0, 3, 5, 8, 1 and 6 once each, what is the difference between the greatest and the smallest 6-digit numbers that can be made?",
    options: [
      { id: "a", text: "9,68,878" },
      { id: "b", text: "7,62,742" },
      { id: "c", text: "7,51,742" },
      { id: "d", text: "7,61,742" }
    ],
    answerId: "d",
    explanation: "The greatest is 8,65,310 and the smallest is 1,03,568, so the difference is 7,61,742 (9,68,878 is their sum, a trap).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q21",
    prompt: "I am a 6-digit number. My lakhs digit is 4. My ten-thousands digit is double my lakhs digit. My thousands digit is 0. My hundreds digit is one less than my lakhs digit. My tens and ones digits are both 5. Who am I?",
    options: [
      { id: "a", text: "4,80,355" },
      { id: "b", text: "4,08,355" },
      { id: "c", text: "4,80,535" },
      { id: "d", text: "8,40,355" }
    ],
    answerId: "a",
    explanation: "Filling the places in order gives 4, 8, 0, 3, 5, 5, which is 4,80,355.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q22",
    prompt: "What is the smallest whole number that becomes 5,60,000 when rounded to the nearest ten thousand?",
    options: [
      { id: "a", text: "5,50,000" },
      { id: "b", text: "5,54,999" },
      { id: "c", text: "5,55,000" },
      { id: "d", text: "5,59,999" }
    ],
    answerId: "c",
    explanation: "5,55,000 has 5 in the thousands place so it rounds up to 5,60,000, while 5,54,999 rounds down to 5,50,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q23",
    prompt: "The town of Neelpur had 3,46,250 people. In one year, 12,875 babies were born, 4,560 people moved out and 9,300 people moved in. What is the new population?",
    options: [
      { id: "a", text: "3,54,565" },
      { id: "b", text: "3,63,865" },
      { id: "c", text: "3,72,985" },
      { id: "d", text: "3,64,865" }
    ],
    answerId: "b",
    explanation: "3,46,250 + 12,875 \u2212 4,560 + 9,300 = 3,63,865, and adding the 4,560 instead of subtracting gives the trap 3,72,985.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-a-q24",
    prompt: "A pattern goes 1,08,000; 1,20,000; 1,32,000; and so on. What is the first number in this pattern that is greater than 2,00,000?",
    options: [
      { id: "a", text: "2,00,000" },
      { id: "b", text: "1,92,000" },
      { id: "c", text: "2,16,000" },
      { id: "d", text: "2,04,000" }
    ],
    answerId: "d",
    explanation: "Adding 12,000 each time gives 1,92,000 and then 2,04,000, so 2,00,000 never appears in the pattern.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-large-b-q01",
    prompt: "Look at the Newspaper Headline. The real number of visitors was rounded to the nearest ten thousand. Which of these could be the **real** number?",
    options: [
      { id: "a", text: "3,55,000" },
      { id: "b", text: "3,54,999" },
      { id: "c", text: "3,44,999" },
      { id: "d", text: "3,40,500" }
    ],
    answerId: "b",
    explanation: "Numbers from 3,45,000 to 3,54,999 round to 3,50,000. 3,55,000 rounds up to 3,60,000, and 3,44,999 and 3,40,500 round down to 3,40,000.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Newspaper Headline\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Newspaper Headline</text>\n  <rect class=\"part paper\" x=\"30\" y=\"36\" width=\"400\" height=\"140\" rx=\"2\" fill=\"#fafafa\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label masthead\" x=\"230\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#444\">THE DAILY KHABAR</text>\n  <line class=\"part rule\" x1=\"40\" y1=\"68\" x2=\"420\" y2=\"68\" stroke=\"#666\" stroke-width=\"1.5\"/>\n  <text class=\"label headline\" x=\"230\" y=\"100\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">About 3,50,000 visit Hampi Utsav</text>\n  <text class=\"label small\" x=\"230\" y=\"124\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#e65100\">(number rounded to the nearest ten thousand)</text>\n  <line class=\"part text-line\" x1=\"50\" y1=\"142\" x2=\"410\" y2=\"142\" stroke=\"#bbb\" stroke-width=\"4\"/>\n  <line class=\"part text-line\" x1=\"50\" y1=\"152\" x2=\"410\" y2=\"152\" stroke=\"#bbb\" stroke-width=\"4\"/>\n  <line class=\"part text-line\" x1=\"50\" y1=\"162\" x2=\"300\" y2=\"162\" stroke=\"#bbb\" stroke-width=\"4\"/>\n</svg>", "alt": "A newspaper called The Daily Khabar with the headline 'About 3,50,000 visit Hampi Utsav' and a note in orange: number rounded to the nearest ten thousand."}
  },
  {
    id: "g5-maths-large-b-q02",
    prompt: "Which numeral stands for \"two crore forty lakh nine thousand\"?",
    options: [
      { id: "a", text: "2,40,90,000" },
      { id: "b", text: "2,04,09,000" },
      { id: "c", text: "2,40,09,000" },
      { id: "d", text: "24,09,000" }
    ],
    answerId: "c",
    explanation: "Two crore, then 40 lakh, then 09 thousand and 000 gives 2,40,09,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q03",
    prompt: "Look at the number. What is the **place value** of the digit the orange arrow points to?",
    options: [
      { id: "a", text: "50,000" },
      { id: "b", text: "5" },
      { id: "c", text: "50,00,000" },
      { id: "d", text: "5,00,000" }
    ],
    answerId: "d",
    explanation: "In 8,35,27,604, the 5 is in the lakhs place, so its place value is 5,00,000. (Its face value is 5.)",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Find the Place Value\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Find the Place Value</text>\n  <rect class=\"part tile\" x=\"32.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"52.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label comma\" x=\"84.0\" y=\"118\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">,</text>\n  <rect class=\"part tile\" x=\"94.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"114.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <rect class=\"part tile highlight\" x=\"140.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"160.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"arrow\" x1=\"160.0\" y1=\"36\" x2=\"160.0\" y2=\"66\" stroke=\"#e65100\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"160.0,72 155.0,64 165.0,64\" fill=\"#e65100\"/>\n  <text class=\"label comma\" x=\"192.0\" y=\"118\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">,</text>\n  <rect class=\"part tile\" x=\"202.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"222.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <rect class=\"part tile\" x=\"248.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"268.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <text class=\"label comma\" x=\"300.0\" y=\"118\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">,</text>\n  <rect class=\"part tile\" x=\"310.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"330.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <rect class=\"part tile\" x=\"356.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"376.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part tile\" x=\"402.0\" y=\"78\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"digit\" x=\"422.0\" y=\"111\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n</svg>", "alt": "The number 8,35,27,604 shown as digit tiles with Indian commas. An orange arrow points to the third digit, 5."}
  },
  {
    id: "g5-maths-large-b-q04",
    prompt: "Which is the correct expanded form of 8,06,040?",
    options: [
      { id: "a", text: "8,00,000 + 60,000 + 40" },
      { id: "b", text: "8,00,000 + 6,000 + 40" },
      { id: "c", text: "8,00,000 + 6,000 + 400" },
      { id: "d", text: "80,000 + 6,000 + 40" }
    ],
    answerId: "b",
    explanation: "The 8 is in lakhs, the 6 in thousands and the 4 in tens, so the number is 8,00,000 + 6,000 + 40.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q05",
    prompt: "Look at Read the Scale. All ticks are equally spaced. What number is at point **P**?",
    options: [
      { id: "a", text: "3,10,000" },
      { id: "b", text: "3,00,000" },
      { id: "c", text: "3,30,000" },
      { id: "d", text: "2,90,000" }
    ],
    answerId: "a",
    explanation: "From 2,40,000 to 2,70,000 is 3 gaps, so each gap is 10,000. P is 4 gaps after 2,70,000: 2,70,000 + 40,000 = 3,10,000.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Read the Scale\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Read the Scale</text>\n  <line class=\"axis\" x1=\"20\" y1=\"80\" x2=\"440\" y2=\"80\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"30.0\" y1=\"71\" x2=\"30.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"70.0\" y1=\"71\" x2=\"70.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"110.0\" y1=\"71\" x2=\"110.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"110.0\" y=\"110\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2,40,000</text>\n  <line class=\"tick\" x1=\"150.0\" y1=\"71\" x2=\"150.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"190.0\" y1=\"71\" x2=\"190.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"230.0\" y1=\"71\" x2=\"230.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"230.0\" y=\"110\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2,70,000</text>\n  <line class=\"tick\" x1=\"270.0\" y1=\"71\" x2=\"270.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"310.0\" y1=\"71\" x2=\"310.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"350.0\" y1=\"71\" x2=\"350.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"390.0\" y1=\"71\" x2=\"390.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"tick\" x1=\"430.0\" y1=\"71\" x2=\"430.0\" y2=\"89\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"part point\" cx=\"390.0\" cy=\"80\" r=\"7\" fill=\"#42a5f5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line class=\"arrow\" x1=\"390.0\" y1=\"40\" x2=\"390.0\" y2=\"65\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"390.0,71 385.0,63 395.0,63\" fill=\"#333\"/>\n  <text class=\"label point-label\" x=\"390.0\" y=\"36\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">P</text>\n  <text class=\"label small\" x=\"230.0\" y=\"134\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">All the ticks are equally spaced.</text>\n</svg>", "alt": "A number line with 11 equally spaced ticks. The third tick is labelled 2,40,000 and the sixth tick is labelled 2,70,000. Point P is on the tenth tick. No other ticks are labelled."}
  },
  {
    id: "g5-maths-large-b-q06",
    prompt: "What is the smallest 7-digit number, written in words?",
    options: [
      { id: "a", text: "One lakh" },
      { id: "b", text: "Ten lakh" },
      { id: "c", text: "One crore" },
      { id: "d", text: "Nine lakh ninety-nine thousand nine hundred ninety-nine" }
    ],
    answerId: "b",
    explanation: "The smallest 7-digit number is 10,00,000, which we read as ten lakh.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q07",
    prompt: "Round 2,384 to the nearest hundred.",
    options: [
      { id: "a", text: "2,300" },
      { id: "b", text: "2,000" },
      { id: "c", text: "2,380" },
      { id: "d", text: "2,400" }
    ],
    answerId: "d",
    explanation: "The tens digit is 8, which is 5 or more, so 2,384 rounds up to 2,400.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q08",
    prompt: "What is the greatest 5-digit number you can make using the digits 2, 7, 0, 5 and 4, each only once?",
    options: [
      { id: "a", text: "75,420" },
      { id: "b", text: "75,402" },
      { id: "c", text: "20,457" },
      { id: "d", text: "57,420" }
    ],
    answerId: "a",
    explanation: "Putting the digits in decreasing order, 7, 5, 4, 2, 0, gives 75,420.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q09",
    prompt: "What comes next in the pattern 50,000; 45,000; 40,000; ___ ?",
    options: [
      { id: "a", text: "30,000" },
      { id: "b", text: "39,000" },
      { id: "c", text: "35,000" },
      { id: "d", text: "36,000" }
    ],
    answerId: "c",
    explanation: "Each number is 5,000 less than the one before, so the next number is 35,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q10",
    prompt: "The cricket ground in Kesarnagar has 52,400 seats. For a match, 48,750 tickets were sold. How many seats were left empty?",
    options: [
      { id: "a", text: "3,650" },
      { id: "b", text: "4,650" },
      { id: "c", text: "3,750" },
      { id: "d", text: "4,350" }
    ],
    answerId: "a",
    explanation: "52,400 \u2212 48,750 = 3,650, which checks out because 48,750 + 3,650 = 52,400.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q11",
    prompt: "Look at Riya's Tiles. She wanted the **greatest** 6-digit number but made one swap mistake. Which two tiles should she swap to fix it?",
    options: [
      { id: "a", text: "Tile 2 and Tile 4" },
      { id: "b", text: "Tile 3 and Tile 4" },
      { id: "c", text: "Tile 2 and Tile 3" },
      { id: "d", text: "Tile 1 and Tile 4" }
    ],
    answerId: "a",
    explanation: "The greatest number is 9,87,531. Swapping Tile 2 (5) and Tile 4 (8) turns 9,57,831 into 9,87,531.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Riya's Tiles\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Riya's Tiles</text>\n  <text class=\"label option-label\" x=\"75.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Tile 1</text>\n  <rect class=\"part tile\" x=\"47.0\" y=\"56\" width=\"56\" height=\"56\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"75.0\" y=\"94\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <text class=\"label option-label\" x=\"141.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Tile 2</text>\n  <rect class=\"part tile\" x=\"113.0\" y=\"56\" width=\"56\" height=\"56\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"141.0\" y=\"94\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <text class=\"label option-label\" x=\"207.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Tile 3</text>\n  <rect class=\"part tile\" x=\"179.0\" y=\"56\" width=\"56\" height=\"56\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"207.0\" y=\"94\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <text class=\"label option-label\" x=\"273.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Tile 4</text>\n  <rect class=\"part tile\" x=\"245.0\" y=\"56\" width=\"56\" height=\"56\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"273.0\" y=\"94\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <text class=\"label option-label\" x=\"339.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Tile 5</text>\n  <rect class=\"part tile\" x=\"311.0\" y=\"56\" width=\"56\" height=\"56\" rx=\"8\" fill=\"#ede7f6\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"339.0\" y=\"94\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <text class=\"label option-label\" x=\"405.0\" y=\"48\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1565c0\">Tile 6</text>\n  <rect class=\"part tile\" x=\"377.0\" y=\"56\" width=\"56\" height=\"56\" rx=\"8\" fill=\"#e0f7fa\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"digit\" x=\"405.0\" y=\"94\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <text class=\"label small\" x=\"240.0\" y=\"132\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Riya wanted the GREATEST 6-digit number but made one swap mistake.</text>\n</svg>", "alt": "Six numbered tiles in a row: Tile 1 shows 9, Tile 2 shows 5, Tile 3 shows 7, Tile 4 shows 8, Tile 5 shows 3, Tile 6 shows 1."}
  },
  {
    id: "g5-maths-large-b-q12",
    prompt: "Four trains travelled these distances in a year: Train P 1,25,480 km; Train Q 1,52,048 km; Train R 1,25,804 km; Train S 1,52,480 km. Which list shows them from greatest to smallest distance?",
    options: [
      { id: "a", text: "Q, S, R, P" },
      { id: "b", text: "S, Q, R, P" },
      { id: "c", text: "P, R, Q, S" },
      { id: "d", text: "S, Q, P, R" }
    ],
    answerId: "b",
    explanation: "1,52,480 > 1,52,048 > 1,25,804 > 1,25,480, so the order is S, Q, R, P, and the trap lies in the swapped digits 4 and 0, and 4 and 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q13",
    prompt: "Look at the Town Populations chart. Which town has **more than 5 lakh but less than 6 lakh** people?",
    options: [
      { id: "a", text: "Town A" },
      { id: "b", text: "Town B" },
      { id: "c", text: "Town C" },
      { id: "d", text: "Town D" }
    ],
    answerId: "c",
    explanation: "Only Sitapur (C), with 5,47,900, is between 5,00,000 and 6,00,000. A is below 5 lakh, and B and D are above 6 lakh.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 256\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Town Populations\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"256\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Town Populations</text>\n  <line class=\"part guide\" x1=\"354.29\" y1=\"36\" x2=\"354.29\" y2=\"220\" stroke=\"#e65100\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label small\" x=\"351.29\" y=\"234\" font-size=\"10.5\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#e65100\">5,00,000</text>\n  <line class=\"part guide\" x1=\"397.14\" y1=\"36\" x2=\"397.14\" y2=\"220\" stroke=\"#e65100\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label small\" x=\"400.14\" y=\"234\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#e65100\">6,00,000</text>\n  <line class=\"axis\" x1=\"140\" y1=\"36\" x2=\"140\" y2=\"220\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label option-label\" x=\"14\" y=\"60\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">A</text>\n  <text class=\"label\" x=\"134\" y=\"60\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Kesarpur</text>\n  <rect class=\"part bar\" x=\"140\" y=\"44\" width=\"208.41000000000003\" height=\"24\" rx=\"2\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"342.41\" y=\"61\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">4,86,300</text>\n  <text class=\"label option-label\" x=\"14\" y=\"104\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">B</text>\n  <text class=\"label\" x=\"134\" y=\"104\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Motinagar</text>\n  <rect class=\"part bar\" x=\"140\" y=\"88\" width=\"262.29\" height=\"24\" rx=\"2\" fill=\"#e8f5e9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"396.29\" y=\"105\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">6,12,000</text>\n  <text class=\"label option-label\" x=\"14\" y=\"148\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">C</text>\n  <text class=\"label\" x=\"134\" y=\"148\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Sitapur</text>\n  <rect class=\"part bar\" x=\"140\" y=\"132\" width=\"234.81\" height=\"24\" rx=\"2\" fill=\"#fff8e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"368.81\" y=\"149\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">5,47,900</text>\n  <text class=\"label option-label\" x=\"14\" y=\"192\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1565c0\">D</text>\n  <text class=\"label\" x=\"134\" y=\"192\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">Hiranpur</text>\n  <rect class=\"part bar\" x=\"140\" y=\"176\" width=\"259.48\" height=\"24\" rx=\"2\" fill=\"#fce4ec\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"393.48\" y=\"193\" font-size=\"11.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">6,05,450</text>\n  <text class=\"label small\" x=\"240.0\" y=\"250\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Population (dashed lines mark 5 lakh and 6 lakh)</text>\n</svg>", "alt": "Horizontal bar chart of four towns. A Kesarpur 4,86,300; B Motinagar 6,12,000; C Sitapur 5,47,900; D Hiranpur 6,05,450. Dashed orange lines mark 5,00,000 and 6,00,000."}
  },
  {
    id: "g5-maths-large-b-q14",
    prompt: "A school library has 6,812 Hindi books and 3,295 English books. Rounding each to the nearest hundred, what is the estimated total?",
    options: [
      { id: "a", text: "10,100" },
      { id: "b", text: "10,000" },
      { id: "c", text: "10,107" },
      { id: "d", text: "9,100" }
    ],
    answerId: "a",
    explanation: "6,812 rounds to 6,800 and 3,295 rounds to 3,300, giving 10,100, while 10,107 is the exact sum and not an estimate.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q15",
    prompt: "The district of Sundarvan planted 18,46,300 trees in 2025 and 21,05,750 trees in 2026. How many more trees were planted in 2026?",
    options: [
      { id: "a", text: "2,59,550" },
      { id: "b", text: "3,59,450" },
      { id: "c", text: "2,69,450" },
      { id: "d", text: "2,59,450" }
    ],
    answerId: "d",
    explanation: "21,05,750 \u2212 18,46,300 = 2,59,450, which checks out because 18,46,300 + 2,59,450 = 21,05,750.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q16",
    prompt: "What is the smallest 6-digit ODD number that can be made using the digits 4, 0, 8, 3, 6 and 2, each only once?",
    options: [
      { id: "a", text: "2,03,468" },
      { id: "b", text: "0,24,683" },
      { id: "c", text: "2,04,683" },
      { id: "d", text: "2,04,863" }
    ],
    answerId: "c",
    explanation: "The only odd digit, 3, must be in the ones place, and the rest are arranged smallest first without a leading zero to give 2,04,683.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q17",
    prompt: "What number is 9 crore + 5 lakh + 30 thousand + 7?",
    options: [
      { id: "a", text: "9,50,30,007" },
      { id: "b", text: "9,05,30,007" },
      { id: "c", text: "9,05,03,007" },
      { id: "d", text: "95,30,007" }
    ],
    answerId: "b",
    explanation: "Writing 9 crore, then 05 lakh, then 30 thousand and 007 gives 9,05,30,007.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q18",
    prompt: "Look at the School Fund Money Box. How much money is in the box altogether?",
    options: [
      { id: "a", text: "\u20b92,13,600" },
      { id: "b", text: "\u20b93,03,600" },
      { id: "c", text: "\u20b93,30,600" },
      { id: "d", text: "\u20b93,36,000" }
    ],
    answerId: "c",
    explanation: "2 boxes = \u20b92,00,000, 13 bundles = \u20b91,30,000, 6 notes = \u20b9600. Total \u20b93,30,600 (13 ten-thousands = 1 lakh 30 thousand).",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"School Fund Money Box\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"210\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">School Fund Money Box</text>\n  <rect class=\"part cash-box\" x=\"16\" y=\"48\" width=\"74\" height=\"58\" rx=\"4\" fill=\"#ffe082\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"53\" y=\"74\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91,00,000</text>\n  <text class=\"label small\" x=\"53\" y=\"92\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">box</text>\n  <rect class=\"part cash-box\" x=\"98\" y=\"48\" width=\"74\" height=\"58\" rx=\"4\" fill=\"#ffe082\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"135\" y=\"74\" font-size=\"11.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91,00,000</text>\n  <text class=\"label small\" x=\"135\" y=\"92\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">box</text>\n  <rect class=\"part bundle\" x=\"184\" y=\"40\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"197\" y=\"40\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"203\" y=\"60\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"221\" y=\"40\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"234\" y=\"40\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"240\" y=\"60\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"258\" y=\"40\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"271\" y=\"40\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"277\" y=\"60\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"295\" y=\"40\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"308\" y=\"40\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"314\" y=\"60\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"332\" y=\"40\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"345\" y=\"40\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"351\" y=\"60\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"369\" y=\"40\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"382\" y=\"40\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"388\" y=\"60\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"406\" y=\"40\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"419\" y=\"40\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"425\" y=\"60\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"184\" y=\"80\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"197\" y=\"80\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"203\" y=\"100\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"221\" y=\"80\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"234\" y=\"80\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"240\" y=\"100\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"258\" y=\"80\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"271\" y=\"80\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"277\" y=\"100\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"295\" y=\"80\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"308\" y=\"80\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"314\" y=\"100\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"332\" y=\"80\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"345\" y=\"80\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"351\" y=\"100\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <rect class=\"part bundle\" x=\"369\" y=\"80\" width=\"33\" height=\"32\" rx=\"3\" fill=\"#c8e6c9\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part band\" x=\"382\" y=\"80\" width=\"7\" height=\"32\" rx=\"0\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"388\" y=\"100\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\"></text>\n  <text class=\"label small\" x=\"312\" y=\"130\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2e7d32\">each bundle = \u20b910,000</text>\n  <rect class=\"part note\" x=\"40\" y=\"150\" width=\"40\" height=\"22\" rx=\"2\" fill=\"#e1bee7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"60\" y=\"166\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text>\n  <rect class=\"part note\" x=\"84\" y=\"150\" width=\"40\" height=\"22\" rx=\"2\" fill=\"#e1bee7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"104\" y=\"166\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text>\n  <rect class=\"part note\" x=\"128\" y=\"150\" width=\"40\" height=\"22\" rx=\"2\" fill=\"#e1bee7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"148\" y=\"166\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text>\n  <rect class=\"part note\" x=\"172\" y=\"150\" width=\"40\" height=\"22\" rx=\"2\" fill=\"#e1bee7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"192\" y=\"166\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text>\n  <rect class=\"part note\" x=\"216\" y=\"150\" width=\"40\" height=\"22\" rx=\"2\" fill=\"#e1bee7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"236\" y=\"166\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text>\n  <rect class=\"part note\" x=\"260\" y=\"150\" width=\"40\" height=\"22\" rx=\"2\" fill=\"#e1bee7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"label\" x=\"280\" y=\"166\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text>\n  <text class=\"label small\" x=\"240.0\" y=\"196\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Count everything in the money box.</text>\n</svg>", "alt": "Two yellow boxes each labelled \u20b91,00,000, thirteen green note bundles (each bundle = \u20b910,000) in two rows, and six \u20b9100 notes."}
  },
  {
    id: "g5-maths-large-b-q19",
    prompt: "Look at the Scooter Meter. What will the meter show after the scooter travels **1 more km**?",
    options: [
      { id: "a", text: "10,00,000 km" },
      { id: "b", text: "9,99,990 km" },
      { id: "c", text: "1,00,000 km" },
      { id: "d", text: "99,99,999 km" }
    ],
    answerId: "a",
    explanation: "9,99,999 + 1 = 10,00,000 (ten lakh). Every 9 rolls over to 0 and a 1 appears in the ten-lakhs place.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Scooter Meter\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Scooter Meter</text>\n  <rect class=\"part meter\" x=\"66.0\" y=\"40\" width=\"308\" height=\"70\" rx=\"12\" fill=\"#37474f\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <rect class=\"part wheel-digit\" x=\"83.0\" y=\"52\" width=\"34\" height=\"46\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"digit\" x=\"100.0\" y=\"84\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">0</text>\n  <rect class=\"part wheel-digit\" x=\"123.0\" y=\"52\" width=\"34\" height=\"46\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"digit\" x=\"140.0\" y=\"84\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part wheel-digit\" x=\"163.0\" y=\"52\" width=\"34\" height=\"46\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"digit\" x=\"180.0\" y=\"84\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part wheel-digit\" x=\"203.0\" y=\"52\" width=\"34\" height=\"46\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"digit\" x=\"220.0\" y=\"84\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part wheel-digit\" x=\"243.0\" y=\"52\" width=\"34\" height=\"46\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"digit\" x=\"260.0\" y=\"84\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part wheel-digit\" x=\"283.0\" y=\"52\" width=\"34\" height=\"46\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"digit\" x=\"300.0\" y=\"84\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <rect class=\"part wheel-digit\" x=\"323.0\" y=\"52\" width=\"34\" height=\"46\" rx=\"3\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text class=\"digit\" x=\"340.0\" y=\"84\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <text class=\"label\" x=\"390.0\" y=\"84\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">km</text>\n  <text class=\"label small\" x=\"220.0\" y=\"136\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Scooter meter: total kilometres travelled</text>\n</svg>", "alt": "A scooter meter with seven digit wheels reading 0 9 9 9 9 9 9 km, which is 9,99,999 km."}
  },
  {
    id: "g5-maths-large-b-q20",
    prompt: "Using the digits 7, 1, 0, 4 and 9 once each, which 5-digit number is closest to 50,000?",
    options: [
      { id: "a", text: "70,149" },
      { id: "b", text: "41,079" },
      { id: "c", text: "49,710" },
      { id: "d", text: "49,170" }
    ],
    answerId: "c",
    explanation: "49,710 is only 290 below 50,000, while the closest number starting with 7, which is 70,149, is more than 20,000 away.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q21",
    prompt: "In 4,25,340, the place value of the 4 in the lakhs place is how many times the place value of the 4 in the tens place?",
    options: [
      { id: "a", text: "100" },
      { id: "b", text: "10,000" },
      { id: "c", text: "1,000" },
      { id: "d", text: "1,00,000" }
    ],
    answerId: "b",
    explanation: "The place values are 4,00,000 and 40, and 4,00,000 \u00f7 40 = 10,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-large-b-q22",
    prompt: "Look at Two Ways to Write. How do we read 7,500,000 in the **Indian** system?",
    options: [
      { id: "a", text: "7 crore 50 lakh" },
      { id: "b", text: "75 lakh" },
      { id: "c", text: "7 lakh 50 thousand" },
      { id: "d", text: "750 lakh" }
    ],
    answerId: "b",
    explanation: "7,500,000 = 75,00,000 in Indian commas, which is read as seventy-five lakh.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two Ways to Write\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Two Ways to Write</text>\n  <text class=\"label\" x=\"20\" y=\"62\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">International:</text>\n  <rect class=\"part card\" x=\"130\" y=\"40\" width=\"200\" height=\"36\" rx=\"6\" fill=\"#e3f2fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label value\" x=\"230\" y=\"65\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7,500,000</text>\n  <text class=\"label small\" x=\"345\" y=\"58\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#666\">millions,</text>\n  <text class=\"label small\" x=\"345\" y=\"72\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#666\">thousands, ones</text>\n  <line class=\"arrow\" x1=\"230\" y1=\"82\" x2=\"230\" y2=\"108\" stroke=\"#e65100\" stroke-width=\"1.5\"/>\n  <polygon class=\"arrow\" points=\"230,114 225,106 235,106\" fill=\"#e65100\"/>\n  <text class=\"label small\" x=\"250\" y=\"102\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#e65100\">same number</text>\n  <text class=\"label\" x=\"20\" y=\"140\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Indian:</text>\n  <rect class=\"part card missing\" x=\"130\" y=\"118\" width=\"200\" height=\"36\" rx=\"6\" fill=\"#fff3e0\" stroke=\"#333\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n  <text class=\"label value\" x=\"230\" y=\"143\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">? ? ?</text>\n  <text class=\"label small\" x=\"345\" y=\"136\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#666\">crores, lakhs,</text>\n  <text class=\"label small\" x=\"345\" y=\"150\" font-size=\"10.5\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#666\">thousands, ones</text>\n  <text class=\"label small\" x=\"240.0\" y=\"180\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">How do we read this number the Indian way?</text>\n</svg>", "alt": "A card labelled International shows 7,500,000. An arrow labelled 'same number' points down to a dashed card labelled Indian that shows question marks."}
  },
  {
    id: "g5-maths-large-b-q23",
    prompt: "Look at the Flood Relief Collection. How much **more** money is needed to reach the target?",
    options: [
      { id: "a", text: "\u20b91,30,450" },
      { id: "b", text: "\u20b91,29,450" },
      { id: "c", text: "\u20b93,70,450" },
      { id: "d", text: "\u20b91,29,550" }
    ],
    answerId: "d",
    explanation: "Collected: 1,28,450 + 96,700 + 1,45,300 = 3,70,450. Still needed: 5,00,000 \u2212 3,70,450 = \u20b91,29,550.",
    hints: ["Look carefully at the diagram.", "Match what you see to the question asked."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 270\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Flood Relief Collection\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"270\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Flood Relief Collection</text>\n  <rect class=\"part tube\" x=\"70\" y=\"50\" width=\"40\" height=\"180\" rx=\"20\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect class=\"part fill\" x=\"74\" y=\"183.76\" width=\"32\" height=\"46.24\" rx=\"0\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part fill\" x=\"74\" y=\"148.95\" width=\"32\" height=\"34.81\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1\"/>\n  <rect class=\"part fill\" x=\"74\" y=\"96.64\" width=\"32\" height=\"52.31\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1\"/>\n  <circle class=\"part bulb\" cx=\"90\" cy=\"242\" r=\"20\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"110\" y1=\"50\" x2=\"130\" y2=\"50\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"134\" y=\"55\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Target \u20b95,00,000</text>\n  <rect class=\"part legend-swatch\" x=\"240\" y=\"96\" width=\"20\" height=\"20\" rx=\"3\" fill=\"#ef9a9a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"268\" y=\"111\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Week 1: \u20b91,28,450</text>\n  <rect class=\"part legend-swatch\" x=\"240\" y=\"132\" width=\"20\" height=\"20\" rx=\"3\" fill=\"#ffcc80\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"268\" y=\"147\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Week 2: \u20b996,700</text>\n  <rect class=\"part legend-swatch\" x=\"240\" y=\"168\" width=\"20\" height=\"20\" rx=\"3\" fill=\"#a5d6a7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label\" x=\"268\" y=\"183\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Week 3: \u20b91,45,300</text>\n  <text class=\"label small\" x=\"300\" y=\"226\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#666\">Coloured parts = money collected</text>\n</svg>", "alt": "A thermometer-style bar with a target of \u20b95,00,000 at the top. Three coloured parts are filled from the bottom: Week 1 \u20b91,28,450, Week 2 \u20b996,700, Week 3 \u20b91,45,300. The top part is still empty."}
  },
  {
    id: "g5-maths-large-b-q24",
    prompt: "A pattern goes 7,50,000; 7,25,000; 7,00,000; 6,75,000; and so on. What is the 10th number in the pattern?",
    options: [
      { id: "a", text: "5,00,000" },
      { id: "b", text: "5,50,000" },
      { id: "c", text: "5,25,000" },
      { id: "d", text: "4,75,000" }
    ],
    answerId: "c",
    explanation: "The 10th number comes after 9 steps of 25,000 each, so 7,50,000 \u2212 2,25,000 = 5,25,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🏟️",
    title: "Big numbers all around us",
    body: [
      "A cricket stadium can hold more than fifty thousand people!",
      "Today we read, write, and compare really big numbers — Indian place value.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Start counting!",
    visual: "place-value",
    speak: "Have you ever wondered how many people fit in a big cricket stadium? Today we will learn to read, write and play with really big numbers.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Indian place value",
    lead: "Tap each period. Commas: first 3 from the right, then every 2.",
    visual: "place-value",
    speak: "In India we group digits as ones, thousands, lakhs and crores. Commas come after the first three digits from the right, and then after every two digits.",
    cards: [
      { label: "Ones period", reveal: "Hundreds | Tens | Ones (3 digits)", emoji: "1️⃣" },
      { label: "Thousands", reveal: "Ten Thousands | Thousands", emoji: "🔟" },
      { label: "Lakhs", reveal: "Ten Lakhs | Lakhs", emoji: "💯" },
      { label: "Crores", reveal: "Crores (and up)", emoji: "🏆" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Place value vs face value",
    visual: "place-value",
    speak: "The face value of a digit is the digit itself. Its place value depends on where it sits. In 4,70,312 the seven is worth seventy thousand.",
    steps: [
      "Face value = the digit itself (7 is just 7)",
      "Place value = digit × its place",
      "In 4,70,312 the 7 is in ten-thousands → 70,000",
      "Expanded form adds each place value",
    ],
    punchline: "Same digit, different place → different value.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is the place value of 6 in 2,61,045?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "600" },
      { id: "c", text: "6,000" },
      { id: "d", text: "60,000" },
    ],
    answerId: "d",
    why: "The 6 sits in the ten-thousands place → 60,000.",
    visual: "place-value",
    speak: "What is the place value of 6 in 2 lakh 61 thousand 45?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Compare, form, round",
    visual: "number-line",
    speak: "First count the digits. More digits means bigger. If equal, compare from the left. For the greatest number put big digits left. Never start the smallest with zero. Rounding: 5 or more rounds up.",
    steps: [
      "More digits → greater number",
      "Same length → compare left to right",
      "Greatest: biggest digits on the left",
      "Smallest: small digits left, but never lead with 0",
      "Round: look right; 5+ → round up",
    ],
    punchline: "Count digits, then compare places.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Which is greater: 5,08,999 or 5,09,001?",
    question: {
      id: "math-check",
      prompt: "Which is greater?",
      options: [
        { id: "a", text: "5,08,999" },
        { id: "b", text: "5,09,001" },
        { id: "c", text: "They are equal" },
        { id: "d", text: "Cannot tell" },
      ],
      answerId: "b",
      explanation: "Same lakhs digit; ten-thousands: 0 vs 0; thousands: 8 vs 9 → 5,09,001 is greater.",
      hints: ["Compare from the left.", "Look at the thousands place."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Large-number legend!",
    bullets: [
      "Indian commas: 3, then pairs",
      "Place value ≠ face value",
      "Compare digits, form extremes, round smart",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, compare, form and round large numbers the Indian way.",
  },
];

export const g5MathsLargeNumbers: ChapterDef = {
  id: "large-numbers",
  title: "Large Numbers",
  emoji: "\ud83d\udd22",
  blurb: "Indian place value to crores",
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

export const g5MathsLargeNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
