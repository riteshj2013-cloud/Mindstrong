import type { ChapterDef, PrepQuestion } from "../types";

/** Achievers: Maths HOTS - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-achhots-a-q01",
    prompt: "Aadhya hides a number and shows four clue cards about it. Which number fits every clue?",
    options: [
      { id: "a", text: "405" },
      { id: "b", text: "450" },
      { id: "c", text: "540" },
      { id: "d", text: "360" }
    ],
    answerId: "b",
    explanation: "Clue 2 says the hundreds digit is 4 and Clue 4 says the ones digit is 0, so the digits are 4, ?, 0. They must add up to 9, so the tens digit is 9 \u2212 4 = 5, giving 450. 405 is tempting because its digits also add up to 9, but its ones digit is 5, so it breaks Clue 4.",
    hints: ["Use Aadhya's Clue 2 and Clue 4 to fix two digits first. Then use the digit sum clue for the middle digit."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 340 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four clue cards about a hidden number\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"340\" height=\"260\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"170.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Aadhya's clue cards</text>\n  <rect class=\"part card\" x=\"20\" y=\"44\" width=\"300\" height=\"40\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#f9a825\" stroke-width=\"1.6\"/>\n  <text class=\"label clue-num\" x=\"34\" y=\"69\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#e65100\">Clue 1:</text>\n  <text class=\"label clue\" x=\"102\" y=\"69\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#263238\">It has 3 digits.</text>\n  <rect class=\"part card\" x=\"20\" y=\"94\" width=\"300\" height=\"40\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#f9a825\" stroke-width=\"1.6\"/>\n  <text class=\"label clue-num\" x=\"34\" y=\"119\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#e65100\">Clue 2:</text>\n  <text class=\"label clue\" x=\"102\" y=\"119\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#263238\">It is between 400 and 500.</text>\n  <rect class=\"part card\" x=\"20\" y=\"144\" width=\"300\" height=\"40\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#f9a825\" stroke-width=\"1.6\"/>\n  <text class=\"label clue-num\" x=\"34\" y=\"169\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#e65100\">Clue 3:</text>\n  <text class=\"label clue\" x=\"102\" y=\"169\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#263238\">Its digits add up to 9.</text>\n  <rect class=\"part card\" x=\"20\" y=\"194\" width=\"300\" height=\"40\" rx=\"8\" fill=\"#fff8e1\" stroke=\"#f9a825\" stroke-width=\"1.6\"/>\n  <text class=\"label clue-num\" x=\"34\" y=\"219\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#e65100\">Clue 4:</text>\n  <text class=\"label clue\" x=\"102\" y=\"219\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#263238\">Its ones digit is 0.</text>\n</svg>", "alt": "Four yellow clue cards, one under another. Clue 1: It has 3 digits. Clue 2: It is between 400 and 500. Clue 3: Its digits add up to 9. Clue 4: Its ones digit is 0."}
  },
  {
    id: "g4-maths-achhots-a-q02",
    prompt: "Bhuvi reads 5,38,204 on her railway ticket. Which sentence correctly gives the value of one of its digits?",
    options: [
      { id: "a", text: "The digit 3 stands for 3,000." },
      { id: "b", text: "The digit 2 stands for 20." },
      { id: "c", text: "The digit 5 stands for 50,000." },
      { id: "d", text: "The digit 8 stands for 8,000." }
    ],
    answerId: "d",
    explanation: "In 5,38,204 the places from the left are lakhs, ten thousands, thousands, hundreds, tens and ones. The 8 is in the thousands place, so it stands for 8,000. \"The digit 3 stands for 3,000\" is tempting because 3 sits next to the thousands comma, but it is in the ten thousands place, so it stands for 30,000.",
    hints: ["Write the place names under each digit of Bhuvi's ticket number, starting with ones on the right. Then test each statement."]
  },
  {
    id: "g4-maths-achhots-a-q03",
    prompt: "Dhanush measures four cycling tracks in a park. Which track is the longest?",
    options: [
      { id: "a", text: "2 km 50 m" },
      { id: "b", text: "2 km 300 m" },
      { id: "c", text: "2,090 m" },
      { id: "d", text: "2,500 m" }
    ],
    answerId: "d",
    explanation: "Change each length to metres: 2 km 50 m = 2,050 m, 2 km 300 m = 2,300 m, and the other two are 2,500 m and 2,090 m. The greatest is 2,500 m. 2 km 300 m is tempting because 300 looks bigger than the other small numbers, but 2,300 m is still less than 2,500 m.",
    hints: ["Write each of the cycling tracks in metres only, remembering that 1 km = 1,000 m, before you compare."]
  },
  {
    id: "g4-maths-achhots-a-q04",
    prompt: "Eshwar pours lassi into the measuring jug shown. His sister drinks one quarter of the lassi in the jug. How much lassi is left in the jug?",
    options: [
      { id: "a", text: "600 mL" },
      { id: "b", text: "200 mL" },
      { id: "c", text: "750 mL" },
      { id: "d", text: "700 mL" }
    ],
    answerId: "a",
    explanation: "The jug shows 800 mL. One quarter of 800 mL is 800 \u00f7 4 = 200 mL, so 800 \u2212 200 = 600 mL is left. 200 mL is tempting, but that is the part the sister drank, not the part left. 750 mL comes from taking a quarter of the full 1000 mL jug instead of the lassi in it.",
    hints: ["First read the top of the lassi against the marks on Eshwar's jug. Find one quarter of that amount, then think what remains."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 300 330\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A measuring jug marked in millilitres with lassi in it\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"300\" height=\"330\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"150.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Eshwar's measuring jug</text>\n  <rect class=\"part liquid\" x=\"90\" y=\"98\" width=\"110\" height=\"192\" rx=\"0\" fill=\"#ffb74d\" stroke=\"none\" stroke-width=\"0\"/>\n  <path class=\"part jug\" d=\"M 90 40 L 90 290 L 200 290 L 200 40\" fill=\"none\" stroke=\"#263238\" stroke-width=\"3\"/>\n  <line class=\"part tick\" x1=\"90\" y1=\"290\" x2=\"108\" y2=\"290\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"294\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">0 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"266\" x2=\"108\" y2=\"266\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"270\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">100 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"242\" x2=\"108\" y2=\"242\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"246\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">200 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"218\" x2=\"108\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"222\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">300 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"194\" x2=\"108\" y2=\"194\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"198\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">400 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"170\" x2=\"108\" y2=\"170\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"174\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">500 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"146\" x2=\"108\" y2=\"146\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"150\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">600 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"122\" x2=\"108\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"126\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">700 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"98\" x2=\"108\" y2=\"98\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"102\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">800 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"74\" x2=\"108\" y2=\"74\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"78\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">900 mL</text>\n  <line class=\"part tick\" x1=\"90\" y1=\"50\" x2=\"108\" y2=\"50\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label mark\" x=\"82\" y=\"54\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">1000 mL</text>\n</svg>", "alt": "A measuring jug with marks every 100 mL from 0 mL at the bottom to 1000 mL at the top. Orange lassi fills it up to the 800 mL mark."}
  },
  {
    id: "g4-maths-achhots-a-q05",
    prompt: "Jivika's bus route number has 2 digits. It is in the 9 times table. Taking its ones digit away from its tens digit leaves 3. Which bus route does Jivika take?",
    options: [
      { id: "a", text: "36" },
      { id: "b", text: "52" },
      { id: "c", text: "85" },
      { id: "d", text: "63" }
    ],
    answerId: "d",
    explanation: "The 2-digit multiples of 9 are 18, 27, 36, 45, 54, 63, 72, 81 and 90. Only in 63 is the tens digit (6) 3 more than the ones digit (3). 36 is tempting because its digits also differ by 3, but there the ones digit is the bigger one, so the clue fails.",
    hints: ["List the 2-digit multiples of 9 for Jivika. For each one, check which digit is bigger and by how much."]
  },
  {
    id: "g4-maths-achhots-a-q06",
    prompt: "Kairav shades the squares to the left of the dotted fold line. He then shades more squares on the right so that the fold line becomes a line of symmetry of the whole shape. Each small square has sides of 1 cm. What is the perimeter of the whole shape?",
    options: [
      { id: "a", text: "20 cm" },
      { id: "b", text: "28 cm" },
      { id: "c", text: "14 cm" },
      { id: "d", text: "24 cm" }
    ],
    answerId: "a",
    explanation: "Mirror each shaded square across the fold line to finish the shape, which then has 14 squares. Walk round its outline counting the 1 cm edges: there are 20 edges, so the perimeter is 20 cm. 28 cm is tempting because it doubles the half shape's perimeter of 14 cm, but the 4 edges along the fold line are then counted twice even though they are inside the whole shape.",
    hints: ["Draw Kairav's mirror squares first. Edges lying on the dotted fold line end up inside the shape, so do not count those."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 264 230\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A squared grid with some squares shaded to the left of a dotted fold line\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"264\" height=\"230\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"132.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kairav's half shape</text>\n  <rect class=\"part cell\" x=\"30\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"30\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"30\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"64\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"64\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"64\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"64\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"98\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"98\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"98\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"98\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"166\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"166\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"166\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"166\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"200\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"200\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"200\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"200\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <line class=\"part fold\" x1=\"132\" y1=\"42\" x2=\"132\" y2=\"194\" stroke=\"#d81b60\" stroke-width=\"2.5\" stroke-dasharray=\"6 5\"/>\n  <text class=\"label small\" x=\"132\" y=\"216\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#455a64\">Each small square: 1 cm by 1 cm</text>\n</svg>", "alt": "A grid 6 squares wide and 4 squares tall with a dotted pink fold line down the middle. On the left of the line 7 squares are shaded: in the column next to the line all 4 squares are shaded, in the column before it the second and third squares from the top are shaded, and in the first column only the third square from the top is shaded. The right half is blank."}
  },
  {
    id: "g4-maths-achhots-a-q07",
    prompt: "A cycle stand charges \u20b910 for every hour or part of an hour. Lohit leaves his cycle there from 10:40 in the morning to 1:15 in the afternoon. How much does he pay?",
    options: [
      { id: "a", text: "\u20b920" },
      { id: "b", text: "\u20b940" },
      { id: "c", text: "\u20b925" },
      { id: "d", text: "\u20b930" }
    ],
    answerId: "d",
    explanation: "From 10:40 to 12:40 is 2 hours, and from 12:40 to 1:15 is 35 more minutes, so the cycle stays 2 hours 35 minutes. The 35 minutes are a part of an hour and are charged as a whole hour, so he pays for 3 hours: 3 \u00d7 \u20b910 = \u20b930. \u20b920 is tempting if you pay only for the 2 full hours and forget the extra 35 minutes.",
    hints: ["Find how long Lohit's cycle stays at the stand. Then decide how many hours are charged when some minutes are left over."]
  },
  {
    id: "g4-maths-achhots-a-q08",
    prompt: "The school librarian draws a bar graph of the books each Class 4 section borrowed in one week. Which statement about the four sections is true?",
    options: [
      { id: "a", text: "4C and 4D together borrowed more books than 4B." },
      { id: "b", text: "4B borrowed twice as many books as 4A." },
      { id: "c", text: "4D borrowed half as many books as 4C." },
      { id: "d", text: "The four sections borrowed 50 books in all." }
    ],
    answerId: "b",
    explanation: "Reading the bars: 4A 12, 4B 24, 4C 18, 4D 6. 24 = 2 \u00d7 12, so 4B did borrow twice as many as 4A. \"4C and 4D together borrowed more books than 4B.\" is tempting, but 18 + 6 = 24 is equal to 4B, not more. 6 is one third of 18, not half, and the total is 60, not 50.",
    hints: ["Read every bar on the library graph against the scale first, then test each statement with the numbers you read."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 310\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar graph of library books borrowed by four classes\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"310\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"210.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Library books borrowed</text>\n  <line class=\"part axis\" x1=\"70\" y1=\"44\" x2=\"70\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part axis\" x1=\"70\" y1=\"250\" x2=\"400\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label axis-name\" x=\"16\" y=\"36\" font-size=\"12\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#455a64\">Books</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"250\" x2=\"400\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"254\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">0</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"214\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">6</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"170\" x2=\"400\" y2=\"170\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"174\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">12</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"134\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">18</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"90\" x2=\"400\" y2=\"90\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"94\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">24</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"50\" x2=\"400\" y2=\"50\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"54\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">30</text>\n  <rect class=\"part bar\" x=\"91\" y=\"170\" width=\"46\" height=\"80\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"114\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4A</text>\n  <rect class=\"part bar\" x=\"171\" y=\"90\" width=\"46\" height=\"160\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"194\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4B</text>\n  <rect class=\"part bar\" x=\"251\" y=\"130\" width=\"46\" height=\"120\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"274\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4C</text>\n  <rect class=\"part bar\" x=\"331\" y=\"210\" width=\"46\" height=\"40\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"354\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4D</text>\n</svg>", "alt": "A bar graph with the classes 4A, 4B, 4C and 4D along the bottom and a scale from 0 to 30 in steps of 6. The bar for 4A reaches 12, 4B reaches 24, 4C reaches 18 and 4D reaches 6."}
  },
  {
    id: "g4-maths-achhots-a-q09",
    prompt: "Omisha cuts 3/4 of a 20 m rope. Pratham cuts 2/3 of a 24 m rope. Whose piece is longer, and by how much?",
    options: [
      { id: "a", text: "Omisha's, by 1 m" },
      { id: "b", text: "Pratham's, by 4 m" },
      { id: "c", text: "Both pieces are equal" },
      { id: "d", text: "Pratham's, by 1 m" }
    ],
    answerId: "d",
    explanation: "3/4 of 20 m: 20 \u00f7 4 = 5, and 3 \u00d7 5 = 15 m. 2/3 of 24 m: 24 \u00f7 3 = 8, and 2 \u00d7 8 = 16 m. So Pratham's piece is longer by 16 \u2212 15 = 1 m. \"Omisha's, by 1 m\" is tempting because 3/4 is a bigger fraction than 2/3, but it is a fraction of a shorter rope.",
    hints: ["Work out each piece in metres before comparing. Omisha's fraction is bigger, but Pratham's rope is longer."]
  },
  {
    id: "g4-maths-achhots-a-q10",
    prompt: "Between 20 and 60 children are in Tavish's drill group. When they stand in rows of 6, 4 children are left over. When they stand in rows of 5, nobody is left over. How many children are in the group?",
    options: [
      { id: "a", text: "34" },
      { id: "b", text: "40" },
      { id: "c", text: "45" },
      { id: "d", text: "55" }
    ],
    answerId: "b",
    explanation: "With nobody left over in rows of 5, the number is a multiple of 5: 25, 30, 35, 40, 45, 50 or 55. Of these, only 40 leaves 4 over in rows of 6 (6 \u00d7 6 = 36 and 40 \u2212 36 = 4). 34 is tempting because 34 also leaves 4 over in rows of 6, but 34 is not a multiple of 5.",
    hints: ["List the group sizes between 20 and 60 that fill rows of 5 exactly. Test each of them with rows of 6."]
  },
  {
    id: "g4-maths-achhots-a-q11",
    prompt: "Inaya's grandfather wants to put a fence all the way round his vegetable plot, shown below. Fencing costs \u20b915 for each metre. How much will the fence cost?",
    options: [
      { id: "a", text: "\u20b9480" },
      { id: "b", text: "\u20b9630" },
      { id: "c", text: "\u20b9600" },
      { id: "d", text: "\u20b9315" }
    ],
    answerId: "b",
    explanation: "The step's flat side is 12 \u2212 7 = 5 m and its upright side is 9 \u2212 4 = 5 m. The perimeter is 12 + 4 + 5 + 5 + 7 + 9 = 42 m, so the fence costs 42 \u00d7 \u20b915 = \u20b9630. \u20b9480 is tempting because it prices only the four labelled sides (32 m) and leaves out the two marked sides.",
    hints: ["Find each side marked with a question mark from the 12 m and 9 m sides. Add every side of the plot before you multiply."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 396 330\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"An L-shaped plot with four sides labelled and two sides marked with a question mark\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"396\" height=\"330\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"198.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Grandfather's vegetable plot</text>\n  <polygon class=\"part plot\" points=\"66,76 330,76 330,164 220,164 220,274 66,274\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"2.5\"/>\n  <text class=\"label side\" x=\"198\" y=\"66\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">12 m</text>\n  <text class=\"label side\" x=\"340\" y=\"125\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">4 m</text>\n  <text class=\"label side\" x=\"275\" y=\"184\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">?</text>\n  <text class=\"label side\" x=\"230\" y=\"224\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#c62828\">?</text>\n  <text class=\"label side\" x=\"143\" y=\"294\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">7 m</text>\n  <text class=\"label side\" x=\"56\" y=\"180\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">9 m</text>\n</svg>", "alt": "An L-shaped green plot. The top side is 12 m and the left side is 9 m. Going round, the right side is 4 m, then a step goes in with two sides marked ?, and the bottom side is 7 m. All corners are square corners."}
  },
  {
    id: "g4-maths-achhots-a-q12",
    prompt: "Reva writes four statements on the board. Statement 1: 1/3 is greater than 1/5. Statement 2: 1/2 of 10 is the same as 1/5 of 25. Statement 3: 1/4 of an hour is 15 minutes. Statement 4: 1/8 of \u20b940 is more than 1/6 of \u20b936. How many of Reva's statements are true?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "1" }
    ],
    answerId: "c",
    explanation: "Statement 1 is true: one of 3 equal parts is bigger than one of 5. Statement 2 is true: both are 5. Statement 3 is true: 60 \u00f7 4 = 15. Statement 4 is false: 1/8 of \u20b940 is \u20b95, but 1/6 of \u20b936 is \u20b96, which is more. So 3 statements are true. 4 is tempting because 8 and 40 are bigger numbers than 6 and 36, but the amounts must be worked out and compared.",
    hints: ["Work out both sides of each of Reva's statements as an amount before deciding. Bigger numbers in a fraction do not mean a bigger part."]
  },
  {
    id: "g4-maths-achhots-a-q13",
    prompt: "Samaira helps at the school canteen and keeps a pictograph of the samosas it sells. How many more samosas were sold on Tuesday than on Wednesday?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "24" },
      { id: "c", text: "12" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "One full icon is 8 samosas, so a half icon is 4. Tuesday: 5 \u00d7 8 = 40. Wednesday: 2 \u00d7 8 + 4 = 20. The difference is 40 \u2212 20 = 20. 16 is tempting if the half icon on Wednesday is counted as a full one, making Wednesday 24.",
    hints: ["Use the key to find what half an icon on Samaira's pictograph stands for, then work out each day before subtracting."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 330 244\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A pictograph of samosas sold on four days, with full and half icons\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"330\" height=\"244\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"165.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Samosas sold at the canteen</text>\n  <text class=\"label row-name\" x=\"20\" y=\"61\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Monday</text>\n  <circle class=\"part icon full\" cx=\"150\" cy=\"56\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"180\" cy=\"56\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"210\" cy=\"56\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <path class=\"part icon half\" d=\"M 240 45 A 11 11 0 0 0 240 67 Z\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"97\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Tuesday</text>\n  <circle class=\"part icon full\" cx=\"150\" cy=\"92\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"180\" cy=\"92\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"210\" cy=\"92\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"240\" cy=\"92\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"270\" cy=\"92\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"133\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Wednesday</text>\n  <circle class=\"part icon full\" cx=\"150\" cy=\"128\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"180\" cy=\"128\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <path class=\"part icon half\" d=\"M 210 117 A 11 11 0 0 0 210 139 Z\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"169\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Thursday</text>\n  <circle class=\"part icon full\" cx=\"150\" cy=\"164\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"180\" cy=\"164\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"210\" cy=\"164\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon full\" cx=\"240\" cy=\"164\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <circle class=\"part icon key\" cx=\"30\" cy=\"206\" r=\"11\" fill=\"#ffca28\" stroke=\"#f57f17\" stroke-width=\"1.5\"/>\n  <text class=\"label key\" x=\"50\" y=\"211\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">= 8 samosas</text>\n</svg>", "alt": "A pictograph with one row for each day. Monday has 3 full icons and a half icon, Tuesday has 5 full icons, Wednesday has 2 full icons and a half icon, and Thursday has 4 full icons. The key shows that one full icon stands for 8 samosas."}
  },
  {
    id: "g4-maths-achhots-a-q14",
    prompt: "Utkarsh's village fair sold a secret number of entry passes, and the organisers post clues about it. It has 5 digits. Rounded to the nearest thousand, it is 47,000. Its digits add up to 20. Its hundreds digit is 0. Its ones digit is 9. How many passes were sold?",
    options: [
      { id: "a", text: "47,009" },
      { id: "b", text: "47,090" },
      { id: "c", text: "46,019" },
      { id: "d", text: "47,029" }
    ],
    answerId: "a",
    explanation: "Numbers that round to 47,000 run from 46,500 to 47,499. With hundreds digit 0, the number looks like 470?9 or 460?9, but 460?9 rounds to 46,000, so it is 470?9. Its digits 4 + 7 + 0 + ? + 9 = 20 make the tens digit 0, giving 47,009. 47,090 is tempting because it uses the same digits and they add up to 20, but its ones digit is 0, not 9.",
    hints: ["Decide which numbers of passes are possible from the rounding clue first. Then fix the hundreds and ones digits and use the digit sum."]
  },
  {
    id: "g4-maths-achhots-a-q15",
    prompt: "Yashika's art teacher pins up a shaded circle and four shaded strips. Which strip shows the same fraction of its whole as the circle does?",
    options: [
      { id: "a", text: "Strip 1" },
      { id: "b", text: "Strip 2" },
      { id: "c", text: "Strip 3" },
      { id: "d", text: "Strip 4" }
    ],
    answerId: "b",
    explanation: "The circle has 6 of 8 equal parts shaded, which is 6/8 = 3/4. Strip 2 has 3 of 4 parts shaded, which is also 3/4. Strip 1 is tempting because it also has 6 parts shaded, but they are 6 out of 10, which is 3/5, a smaller fraction.",
    hints: ["Write the circle's shaded part as a fraction of all its equal parts. Do the same for each strip and look for equal fractions."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 264\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A circle in equal parts with some shaded, and four strips in equal parts with some shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"264\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Yashika's circle and strips</text>\n  <path class=\"part sector shaded\" d=\"M 90 120 L 90 58 A 62 62 0 0 1 133.84 76.16 Z\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <path class=\"part sector shaded\" d=\"M 90 120 L 133.84 76.16 A 62 62 0 0 1 152 120 Z\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <path class=\"part sector shaded\" d=\"M 90 120 L 152 120 A 62 62 0 0 1 133.84 163.84 Z\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <path class=\"part sector shaded\" d=\"M 90 120 L 133.84 163.84 A 62 62 0 0 1 90 182 Z\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <path class=\"part sector shaded\" d=\"M 90 120 L 90 182 A 62 62 0 0 1 46.16 163.84 Z\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <path class=\"part sector shaded\" d=\"M 90 120 L 46.16 163.84 A 62 62 0 0 1 28 120 Z\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <path class=\"part sector\" d=\"M 90 120 L 28 120 A 62 62 0 0 1 46.16 76.16 Z\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <path class=\"part sector\" d=\"M 90 120 L 46.16 76.16 A 62 62 0 0 1 90 58 Z\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.5\"/>\n  <text class=\"label fig-name\" x=\"90\" y=\"206\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Circle</text>\n  <text class=\"label fig-name\" x=\"218\" y=\"70\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">Strip 1</text>\n  <rect class=\"part strip-cell shaded\" x=\"230\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"254\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"278\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"302\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"326\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"350\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"374\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"398\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"422\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"446\" y=\"50\" width=\"24\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <text class=\"label fig-name\" x=\"218\" y=\"116\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">Strip 2</text>\n  <rect class=\"part strip-cell shaded\" x=\"230\" y=\"96\" width=\"60\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"290\" y=\"96\" width=\"60\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"350\" y=\"96\" width=\"60\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"410\" y=\"96\" width=\"60\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <text class=\"label fig-name\" x=\"218\" y=\"162\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">Strip 3</text>\n  <rect class=\"part strip-cell shaded\" x=\"230\" y=\"142\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"270\" y=\"142\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"310\" y=\"142\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"350\" y=\"142\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"390\" y=\"142\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"430\" y=\"142\" width=\"40\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <text class=\"label fig-name\" x=\"218\" y=\"208\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#263238\">Strip 4</text>\n  <rect class=\"part strip-cell shaded\" x=\"230\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell shaded\" x=\"260\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#81c784\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"290\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"320\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"350\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"380\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"410\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <rect class=\"part strip-cell\" x=\"440\" y=\"188\" width=\"30\" height=\"30\" rx=\"0\" fill=\"#ffffff\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n</svg>", "alt": "A circle cut into 8 equal parts with 6 parts shaded green. Beside it are four strips: Strip 1 has 10 equal parts with 6 shaded, Strip 2 has 4 equal parts with 3 shaded, Strip 3 has 6 equal parts with 4 shaded, Strip 4 has 8 equal parts with 2 shaded."}
  },
  {
    id: "g4-maths-achhots-a-q16",
    prompt: "Upasana's grocer balances two identical rice packets plus a 500 g weight against the weights on the other side, as shown. What does one packet of rice weigh?",
    options: [
      { id: "a", text: "1 kg 500 g" },
      { id: "b", text: "1 kg 250 g" },
      { id: "c", text: "1 kg 750 g" },
      { id: "d", text: "2 kg 500 g" }
    ],
    answerId: "b",
    explanation: "The right pan holds 2 kg + 1 kg = 3 kg. Take away the 500 g weight from both sides: the two packets weigh 3 kg \u2212 500 g = 2 kg 500 g, so one packet weighs 1 kg 250 g. 1 kg 500 g is tempting because it is half of 3 kg, but it forgets that the 500 g weight is on the same pan as the packets.",
    hints: ["Add up the weights on the right side of the grocer's balance. Remember the rice packets share their side with another weight."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 270\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A level balance with two bags and a small weight on the left and two weights on the right\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"270\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Upasana's balance</text>\n  <polygon class=\"part stand\" points=\"250,240 270,240 262,70 258,70\" fill=\"#8d6e63\"/>\n  <line class=\"part beam\" x1=\"70\" y1=\"70\" x2=\"450\" y2=\"70\" stroke=\"#5d4037\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line class=\"part base\" x1=\"60\" y1=\"242\" x2=\"460\" y2=\"242\" stroke=\"#5d4037\" stroke-width=\"4\"/>\n  <line class=\"part string\" x1=\"90\" y1=\"70\" x2=\"40\" y2=\"200\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part string\" x1=\"190\" y1=\"70\" x2=\"240\" y2=\"200\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part pan left\" x1=\"35\" y1=\"200\" x2=\"245\" y2=\"200\" stroke=\"#5d4037\" stroke-width=\"5\"/>\n  <path class=\"part bag left\" d=\"M 66 196 L 71 150 L 105 150 L 110 196 Z\" fill=\"#fff3c4\" stroke=\"#8d6e63\" stroke-width=\"1.6\"/>\n  <text class=\"label item left\" x=\"88\" y=\"182\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">rice</text>\n  <path class=\"part bag left\" d=\"M 118 196 L 123 150 L 157 150 L 162 196 Z\" fill=\"#fff3c4\" stroke=\"#8d6e63\" stroke-width=\"1.6\"/>\n  <text class=\"label item left\" x=\"140\" y=\"182\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">rice</text>\n  <rect class=\"part weight left\" x=\"170\" y=\"160\" width=\"44\" height=\"36\" rx=\"4\" fill=\"#90a4ae\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <text class=\"label item left\" x=\"192\" y=\"182\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">500 g</text>\n  <line class=\"part string\" x1=\"330\" y1=\"70\" x2=\"280\" y2=\"200\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part string\" x1=\"430\" y1=\"70\" x2=\"480\" y2=\"200\" stroke=\"#5d4037\" stroke-width=\"1.5\"/>\n  <line class=\"part pan right\" x1=\"275\" y1=\"200\" x2=\"485\" y2=\"200\" stroke=\"#5d4037\" stroke-width=\"5\"/>\n  <rect class=\"part weight right\" x=\"332\" y=\"160\" width=\"44\" height=\"36\" rx=\"4\" fill=\"#90a4ae\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <text class=\"label item right\" x=\"354\" y=\"182\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2 kg</text>\n  <rect class=\"part weight right\" x=\"384\" y=\"160\" width=\"44\" height=\"36\" rx=\"4\" fill=\"#90a4ae\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <text class=\"label item right\" x=\"406\" y=\"182\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1 kg</text>\n</svg>", "alt": "A level balance. The left pan holds two bags labelled rice and a weight marked 500 g. The right pan holds a weight marked 2 kg and a weight marked 1 kg."}
  },
  {
    id: "g4-maths-achhots-a-q17",
    prompt: "A pump fills an overhead tank with 15 L of water every minute. Mitesh switches it on at 9:50 and switches it off at 10:14. How much water goes into the tank?",
    options: [
      { id: "a", text: "360 L" },
      { id: "b", text: "960 L" },
      { id: "c", text: "390 L" },
      { id: "d", text: "3,600 L" }
    ],
    answerId: "a",
    explanation: "From 9:50 to 10:00 is 10 minutes and from 10:00 to 10:14 is 14 minutes, so the pump runs for 24 minutes. 24 \u00d7 15 L = 360 L. 960 L is tempting: it comes from subtracting 950 from 1014 as if they were ordinary numbers, giving 64 minutes, but an hour has only 60 minutes.",
    hints: ["Count Mitesh's pump minutes in two jumps: up to 10:00, then on to the switch-off time. Then use the litres for each minute."]
  },
  {
    id: "g4-maths-achhots-a-q18",
    prompt: "Nandita pays exactly \u20b943 using only \u20b95 coins and \u20b92 coins. She uses as many \u20b95 coins as she can. How many coins does she use in all?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "9" },
      { id: "c", text: "11" },
      { id: "d", text: "12" }
    ],
    answerId: "c",
    explanation: "8 coins of \u20b95 make \u20b940 and leave \u20b93, which cannot be made from \u20b92 coins. So she uses 7 coins of \u20b95 (\u20b935); the \u20b98 left is 4 coins of \u20b92. That is 7 + 4 = 11 coins. 10 is tempting: 8 coins of \u20b95 and 2 coins of \u20b92 make \u20b944, which is not exactly \u20b943.",
    hints: ["Try the biggest number of \u20b95 coins Nandita could use, and check whether the rest can be paid exactly with \u20b92 coins."]
  },
  {
    id: "g4-maths-achhots-a-q19",
    prompt: "Himanshu draws four shapes on squared paper. Each small square has sides of 1 cm. Which shape has exactly 2 lines of symmetry and a perimeter of 16 cm?",
    options: [
      { id: "a", text: "Shape 1" },
      { id: "b", text: "Shape 2" },
      { id: "c", text: "Shape 3" },
      { id: "d", text: "Shape 4" }
    ],
    answerId: "a",
    explanation: "Shape 1, the 5 by 3 rectangle, has perimeter 5 + 3 + 5 + 3 = 16 cm and 2 lines of symmetry (one across, one down). Shape 2, the 4 by 4 square, is tempting because its perimeter is also 16 cm, but a square has 4 lines of symmetry, not exactly 2. The L also has perimeter 16 cm but only 1 line of symmetry, and the 5 by 2 rectangle has perimeter 14 cm.",
    hints: ["Check both conditions for each of Himanshu's shapes: count its fold lines, then add the lengths around its edge."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 510 204\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four shapes made of small squares on squared paper\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"510\" height=\"204\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"255.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Himanshu's four shapes</text>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"50\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"110\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"70\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"90\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"50\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"70\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"110\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"90\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"70\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"50\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"90\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"110\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <text class=\"label fig-name\" x=\"80\" y=\"154\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Shape 1</text>\n  <rect class=\"part cell shaded\" x=\"160\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"180\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"200\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"160\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"220\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"180\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"160\" y=\"110\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"200\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"220\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"200\" y=\"110\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"160\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"220\" y=\"110\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"200\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"180\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"220\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"180\" y=\"110\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <text class=\"label fig-name\" x=\"200\" y=\"154\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Shape 2</text>\n  <rect class=\"part cell shaded\" x=\"270\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"350\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"310\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"270\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"330\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"290\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"310\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"330\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"290\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"350\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <text class=\"label fig-name\" x=\"320\" y=\"154\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Shape 3</text>\n  <rect class=\"part cell shaded\" x=\"400\" y=\"70\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"400\" y=\"90\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"400\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"420\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"400\" y=\"110\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"440\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"460\" y=\"50\" width=\"20\" height=\"20\" rx=\"0\" fill=\"#ffcc80\" stroke=\"#e65100\" stroke-width=\"1\"/>\n  <text class=\"label fig-name\" x=\"440\" y=\"154\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Shape 4</text>\n  <text class=\"label small\" x=\"255\" y=\"192\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#455a64\">Each small square: 1 cm by 1 cm</text>\n</svg>", "alt": "Four shapes made of 1 cm squares. Shape 1 is a rectangle 5 squares wide and 3 squares tall. Shape 2 is a square 4 squares wide and 4 squares tall. Shape 3 is a rectangle 5 squares wide and 2 squares tall. Shape 4 is an L made of a row of 4 squares with 3 more squares going down from its left end."}
  },
  {
    id: "g4-maths-achhots-a-q20",
    prompt: "Kush sets a secret code on his new cycle lock and gives his sister these clues. It has 4 digits. Its ones digit is double its thousands digit. Its hundreds digit is the sum of its thousands digit and its ones digit. Its tens digit is 0. It is a multiple of 4. What is the code?",
    options: [
      { id: "a", text: "1,302" },
      { id: "b", text: "3,906" },
      { id: "c", text: "2,604" },
      { id: "d", text: "2,640" }
    ],
    answerId: "c",
    explanation: "Try each thousands digit. 1 gives ones 2 and hundreds 3: 1,302. 2 gives 2,604. 3 gives 3,906. 4 would need ones digit 8 and hundreds digit 12, which is impossible. Now test 'multiple of 4': 1,302 \u00f7 4 and 3,906 \u00f7 4 leave 2, but 2,604 = 4 \u00d7 651. 1,302 is tempting because it is the first number that fits the digit clues, but it fails the last clue.",
    hints: ["Try thousands digits one by one for Kush's code and build the other digits from it. Test the last clue on each number."]
  },
  {
    id: "g4-maths-achhots-a-q21",
    prompt: "Vipul puts poles round the rectangular badminton court shown, one at every corner and one every 2 m along each side. How many poles does he need?",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "21" },
      { id: "c", text: "20" },
      { id: "d", text: "40" }
    ],
    answerId: "c",
    explanation: "Going all the way round, the distance is 12 + 8 + 12 + 8 = 40 m. A pole every 2 m round a closed loop gives 40 \u00f7 2 = 20 gaps and 20 poles, because the last gap ends at the first pole. 24 is tempting: counting 7 + 7 + 5 + 5 poles side by side counts each of the 4 corner poles twice.",
    hints: ["Think of Vipul walking once round the court. Count the gaps between poles, and check whether any corner pole is counted twice."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 348 276\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A rectangle with its length and width labelled in metres\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"348\" height=\"276\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"174.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">The badminton court</text>\n  <polygon class=\"part plot\" points=\"66,76 282,76 282,220 66,220\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"2.5\"/>\n  <text class=\"label side\" x=\"174\" y=\"66\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">12 m</text>\n  <text class=\"label side\" x=\"292\" y=\"153\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">8 m</text>\n</svg>", "alt": "A green rectangle. Its long top side is labelled 12 m and its short right side is labelled 8 m."}
  },
  {
    id: "g4-maths-achhots-a-q22",
    prompt: "There are 36 children in Tejaswini's class. One quarter of them walk to school, one third come by bus and the rest come by auto-rickshaw. Which statement is true?",
    options: [
      { id: "a", text: "The auto-rickshaws bring half of the class." },
      { id: "b", text: "The bus brings 9 children." },
      { id: "c", text: "The auto-rickshaws bring 3 more children than the bus." },
      { id: "d", text: "The auto-rickshaws bring 24 children." }
    ],
    answerId: "c",
    explanation: "One quarter of 36 is 9 walkers and one third of 36 is 12 bus riders, so the auto-rickshaws bring 36 \u2212 9 \u2212 12 = 15 children, which is 3 more than the bus. \"The auto-rickshaws bring 24 children\" is tempting: 36 \u2212 12 = 24 takes away the bus riders but forgets the 9 walkers.",
    hints: ["Work out the walkers and the bus riders in Tejaswini's class first. The auto-rickshaw children are whoever is still left."]
  },
  {
    id: "g4-maths-achhots-a-q23",
    prompt: "Kiyan circles one number in the grid. It is a multiple of 4. Its digits add up to 9. It is more than 50. Its tens digit is greater than its ones digit. Which number does Kiyan circle?",
    options: [
      { id: "a", text: "54" },
      { id: "b", text: "36" },
      { id: "c", text: "72" },
      { id: "d", text: "81" }
    ],
    answerId: "c",
    explanation: "The multiples of 4 in the grid are 72, 36, 64, 56 and 48. Of these, only 72 and 36 have digits that add up to 9, and only 72 is more than 50. Its tens digit 7 is greater than 2, so every clue fits. 54 is tempting because it passes the other three clues, but 54 \u00f7 4 leaves 2.",
    hints: ["Cross out every number on Kiyan's grid that fails the first clue, then use the remaining clues on the numbers still left."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 296 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A grid of twelve two-digit numbers\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"296\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"148.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kiyan's number grid</text>\n  <rect class=\"part grid-cell\" x=\"20\" y=\"44\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"52\" y=\"70.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">18</text>\n  <rect class=\"part grid-cell\" x=\"84\" y=\"44\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"116\" y=\"70.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">45</text>\n  <rect class=\"part grid-cell\" x=\"148\" y=\"44\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"180\" y=\"70.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">54</text>\n  <rect class=\"part grid-cell\" x=\"212\" y=\"44\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"244\" y=\"70.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">63</text>\n  <rect class=\"part grid-cell\" x=\"20\" y=\"84\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"52\" y=\"110.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">72</text>\n  <rect class=\"part grid-cell\" x=\"84\" y=\"84\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"116\" y=\"110.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">36</text>\n  <rect class=\"part grid-cell\" x=\"148\" y=\"84\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"180\" y=\"110.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">81</text>\n  <rect class=\"part grid-cell\" x=\"212\" y=\"84\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"244\" y=\"110.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">27</text>\n  <rect class=\"part grid-cell\" x=\"20\" y=\"124\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"52\" y=\"150.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">90</text>\n  <rect class=\"part grid-cell\" x=\"84\" y=\"124\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"116\" y=\"150.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">64</text>\n  <rect class=\"part grid-cell\" x=\"148\" y=\"124\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"180\" y=\"150.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">56</text>\n  <rect class=\"part grid-cell\" x=\"212\" y=\"124\" width=\"64\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <text class=\"label grid-num\" x=\"244\" y=\"150.0\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">48</text>\n</svg>", "alt": "A grid of numbers in 3 rows. Top row: 18, 45, 54, 63. Middle row: 72, 36, 81, 27. Bottom row: 90, 64, 56, 48."}
  },
  {
    id: "g4-maths-achhots-a-q24",
    prompt: "Nysa practises the sitar for 3/4 of an hour every day from Monday to Friday, and for 1 1/2 hours on Saturday. How long does she practise in the whole week?",
    options: [
      { id: "a", text: "5 hours 15 minutes" },
      { id: "b", text: "5 hours 35 minutes" },
      { id: "c", text: "3 hours 45 minutes" },
      { id: "d", text: "6 hours" }
    ],
    answerId: "a",
    explanation: "3/4 of an hour is 45 minutes, so Monday to Friday gives 5 \u00d7 45 = 225 minutes. 1 1/2 hours is 90 minutes. 225 + 90 = 315 minutes = 5 hours 15 minutes. 5 hours 35 minutes is tempting: it reads 1 1/2 hours as 1 hour 50 minutes, but half an hour is 30 minutes, not 50.",
    hints: ["Change Nysa's daily practice and her Saturday practice into minutes first. Half an hour and a quarter hour are fixed numbers of minutes."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-achhots-b-q01",
    prompt: "Ahaan draws a line from 0 to 2 with each whole split into 8 equal parts, and marks four lettered points on it. Which point shows 3/4 of 2?",
    options: [
      { id: "a", text: "Point P" },
      { id: "b", text: "Point Q" },
      { id: "c", text: "Point R" },
      { id: "d", text: "Point S" }
    ],
    answerId: "a",
    explanation: "3/4 of 2 is 2 \u00f7 4 = 1/2, and 3 \u00d7 1/2 = 1 1/2, which is halfway between 1 and 2, or 12 small parts from 0. That is Point P. Point Q is tempting because it sits at 3/4 (6 small parts), but that is 3/4 of 1, not 3/4 of 2.",
    hints: ["First work out 3/4 of 2 as a number. Then count the small parts along Ahaan's number line to find where it sits."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 500 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A number line from 0 to 2 with four lettered points\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"500\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"250.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ahaan's number line</text>\n  <line class=\"part axis\" x1=\"40\" y1=\"90\" x2=\"460\" y2=\"90\" stroke=\"#263238\" stroke-width=\"2.5\"/>\n  <line class=\"part tick\" x1=\"40\" y1=\"80\" x2=\"40\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-num\" x=\"40\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">0</text>\n  <line class=\"part tick\" x1=\"66.25\" y1=\"84\" x2=\"66.25\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"92.5\" y1=\"84\" x2=\"92.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"118.75\" y1=\"84\" x2=\"118.75\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"145\" y1=\"84\" x2=\"145\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"171.25\" y1=\"84\" x2=\"171.25\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"197.5\" y1=\"84\" x2=\"197.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"223.75\" y1=\"84\" x2=\"223.75\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"250\" y1=\"80\" x2=\"250\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-num\" x=\"250\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1</text>\n  <line class=\"part tick\" x1=\"276.25\" y1=\"84\" x2=\"276.25\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"302.5\" y1=\"84\" x2=\"302.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"328.75\" y1=\"84\" x2=\"328.75\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"355\" y1=\"84\" x2=\"355\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"381.25\" y1=\"84\" x2=\"381.25\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"407.5\" y1=\"84\" x2=\"407.5\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"433.75\" y1=\"84\" x2=\"433.75\" y2=\"96\" stroke=\"#263238\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"460\" y1=\"80\" x2=\"460\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label tick-num\" x=\"460\" y=\"120\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2</text>\n  <circle class=\"part point\" cx=\"355\" cy=\"90\" r=\"6\" fill=\"#d81b60\"/>\n  <text class=\"label point-name\" x=\"355\" y=\"72\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ad1457\">P</text>\n  <circle class=\"part point\" cx=\"197.5\" cy=\"90\" r=\"6\" fill=\"#d81b60\"/>\n  <text class=\"label point-name\" x=\"197.5\" y=\"72\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ad1457\">Q</text>\n  <circle class=\"part point\" cx=\"118.75\" cy=\"90\" r=\"6\" fill=\"#d81b60\"/>\n  <text class=\"label point-name\" x=\"118.75\" y=\"72\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ad1457\">R</text>\n  <circle class=\"part point\" cx=\"407.5\" cy=\"90\" r=\"6\" fill=\"#d81b60\"/>\n  <text class=\"label point-name\" x=\"407.5\" y=\"72\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ad1457\">S</text>\n</svg>", "alt": "A number line from 0 to 2 with a small mark every eighth, so there are 8 equal parts between 0 and 1 and 8 more between 1 and 2. Point P is 12 small parts from 0, Point Q is 6 small parts from 0, Point R is 3 small parts from 0, Point S is 14 small parts from 0."}
  },
  {
    id: "g4-maths-achhots-b-q02",
    prompt: "Bhavin's house number fits three clues. It is between 50 and 100. It is a multiple of both 6 and 8. Its digits add up to 15. What is Bhavin's house number?",
    options: [
      { id: "a", text: "72" },
      { id: "b", text: "84" },
      { id: "c", text: "78" },
      { id: "d", text: "96" }
    ],
    answerId: "d",
    explanation: "Numbers that are multiples of both 6 and 8 are multiples of 24: 24, 48, 72, 96, \u2026 Between 50 and 100 there are 72 and 96. The digits of 96 add up to 15. 72 is tempting because it fits the first two clues, but its digits add up to only 9.",
    hints: ["List numbers that both 6 and 8 divide exactly, between 50 and 100. Then check the digit sum of each one for Bhavin."]
  },
  {
    id: "g4-maths-achhots-b-q03",
    prompt: "A shop sells a pack of 3 notebooks for \u20b984 and a pack of 5 of the same notebooks for \u20b9135. Chhavi wants the better buy. Which statement is true?",
    options: [
      { id: "a", text: "The pack of 3 is better, because \u20b984 is less than \u20b9135." },
      { id: "b", text: "Both packs cost \u20b928 for each notebook." },
      { id: "c", text: "The pack of 5 costs \u20b91 less for each notebook." },
      { id: "d", text: "The pack of 5 costs \u20b951 less for each notebook." }
    ],
    answerId: "c",
    explanation: "One notebook in the pack of 3 costs \u20b984 \u00f7 3 = \u20b928, and in the pack of 5 it costs \u20b9135 \u00f7 5 = \u20b927. So the pack of 5 costs \u20b91 less for each notebook. \"The pack of 3 is better, because \u20b984 is less than \u20b9135\" is tempting because \u20b984 is a smaller bill, but it buys fewer notebooks, so the bills cannot be compared directly.",
    hints: ["Work out the price of each notebook in each of the shop's packs. Compare those, not the whole pack prices Chhavi sees."]
  },
  {
    id: "g4-maths-achhots-b-q04",
    prompt: "Dakshesh looks at the clock when he starts his drawing homework. He finishes three quarters of an hour later. At what time does he finish?",
    options: [
      { id: "a", text: "3:00" },
      { id: "b", text: "3:15" },
      { id: "c", text: "3:30" },
      { id: "d", text: "4:15" }
    ],
    answerId: "c",
    explanation: "The clock shows 2:45. Three quarters of an hour is 3 \u00d7 15 = 45 minutes. 2:45 + 15 minutes is 3:00, and 30 more minutes is 3:30. 3:00 is tempting because it adds only one quarter of an hour (15 minutes).",
    hints: ["Read the time on Dakshesh's clock first. Change the fraction of an hour in the question into minutes before you count on."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 246 254\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A clock face with an hour hand and a minute hand\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"246\" height=\"254\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"123.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Clock in Dakshesh's room</text>\n  <circle class=\"part face\" cx=\"123\" cy=\"132\" r=\"92\" fill=\"#fffdf5\" stroke=\"#263238\" stroke-width=\"3\"/>\n  <line class=\"tick\" x1=\"123\" y1=\"42\" x2=\"123\" y2=\"49\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"168\" y1=\"54.06\" x2=\"164.5\" y2=\"60.12\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"200.94\" y1=\"87\" x2=\"194.88\" y2=\"90.5\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"213\" y1=\"132\" x2=\"206\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"200.94\" y1=\"177\" x2=\"194.88\" y2=\"173.5\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"168\" y1=\"209.94\" x2=\"164.5\" y2=\"203.88\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"123\" y1=\"222\" x2=\"123\" y2=\"215\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"78\" y1=\"209.94\" x2=\"81.5\" y2=\"203.88\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"45.06\" y1=\"177\" x2=\"51.12\" y2=\"173.5\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"33\" y1=\"132\" x2=\"40\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"45.06\" y1=\"87\" x2=\"51.12\" y2=\"90.5\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"tick\" x1=\"78\" y1=\"54.06\" x2=\"81.5\" y2=\"60.12\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label clock-num\" x=\"158.5\" y=\"75.51\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1</text>\n  <text class=\"label clock-num\" x=\"184.49\" y=\"101.5\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2</text>\n  <text class=\"label clock-num\" x=\"194\" y=\"137\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">3</text>\n  <text class=\"label clock-num\" x=\"184.49\" y=\"172.5\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4</text>\n  <text class=\"label clock-num\" x=\"158.5\" y=\"198.49\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">5</text>\n  <text class=\"label clock-num\" x=\"123\" y=\"208\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">6</text>\n  <text class=\"label clock-num\" x=\"87.5\" y=\"198.49\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">7</text>\n  <text class=\"label clock-num\" x=\"61.51\" y=\"172.5\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">8</text>\n  <text class=\"label clock-num\" x=\"52\" y=\"137\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">9</text>\n  <text class=\"label clock-num\" x=\"61.51\" y=\"101.5\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">10</text>\n  <text class=\"label clock-num\" x=\"87.5\" y=\"75.51\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">11</text>\n  <text class=\"label clock-num\" x=\"123\" y=\"66\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">12</text>\n  <line class=\"part hand\" x1=\"123\" y1=\"132\" x2=\"161.31\" y2=\"126.96\" stroke=\"#1a237e\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line class=\"part hand\" x1=\"123\" y1=\"132\" x2=\"64.12\" y2=\"132\" stroke=\"#c62828\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle class=\"part hub\" cx=\"123\" cy=\"132\" r=\"5\" fill=\"#263238\"/>\n</svg>", "alt": "A round clock face with the numbers 1 to 12. The long minute hand points at 9 and the short hour hand is three quarters of the way from 2 to 3."}
  },
  {
    id: "g4-maths-achhots-b-q05",
    prompt: "Jayesh fills four bottles with kokum sherbet: 1 L 50 mL, 1,500 mL, 1 L 5 mL and 1,150 mL. How much more is in the fullest bottle than in the least full bottle?",
    options: [
      { id: "a", text: "450 mL" },
      { id: "b", text: "495 mL" },
      { id: "c", text: "145 mL" },
      { id: "d", text: "500 mL" }
    ],
    answerId: "b",
    explanation: "In millilitres the bottles hold 1,050 mL, 1,500 mL, 1,005 mL and 1,150 mL. The fullest has 1,500 mL and the least full has 1,005 mL, so the difference is 495 mL. 450 mL is tempting if 1 L 50 mL is taken as the least full, but 1 L 5 mL is only 1,005 mL, which is less.",
    hints: ["Write every one of Jayesh's bottles in millilitres. Be careful that 5 mL and 50 mL are different amounts."]
  },
  {
    id: "g4-maths-achhots-b-q06",
    prompt: "In Rutvi's bathroom, a rectangle of equal square tiles has some blue tiles. In lowest terms, what fraction of the tiles in the rectangle is blue?",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "1/3" },
      { id: "c", text: "3/4" },
      { id: "d", text: "3/8" }
    ],
    answerId: "d",
    explanation: "There are 6 \u00d7 4 = 24 tiles and 9 are shaded, so 9/24 are shaded. Dividing both numbers by 3 gives 3/8. 3/5 is tempting because it compares the 9 shaded tiles with the 15 unshaded tiles, but a fraction of all the tiles must be out of 24.",
    hints: ["Count the blue tiles and all the tiles in Rutvi's rectangle. Then divide the top and bottom by the same number."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 264 206\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A rectangle of equal square tiles with some tiles shaded\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"264\" height=\"206\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"132.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Rutvi's bathroom tiles</text>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"30\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"30\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"64\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"64\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"64\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"64\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"98\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"98\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"98\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"98\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"132\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"166\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"166\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"166\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"166\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"200\" y=\"50\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell\" x=\"200\" y=\"84\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"200\" y=\"118\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n  <rect class=\"part cell shaded\" x=\"200\" y=\"152\" width=\"34\" height=\"34\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#90a4ae\" stroke-width=\"1\"/>\n</svg>", "alt": "A rectangle made of 6 columns and 4 rows of equal square tiles. Six tiles are shaded in the top left corner (3 in the top row, 2 in the second row and 1 in the third row) and three tiles are shaded in the bottom right corner (2 in the bottom row and 1 just above them)."}
  },
  {
    id: "g4-maths-achhots-b-q07",
    prompt: "Udayan writes 4\u25a1 \u00d7 6 = 2\u25a18. The same digit goes in both boxes. Which digit is it?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "3" },
      { id: "c", text: "9" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "Try the digits: 48 \u00d7 6 = 288, and the digit in both boxes is 8, so it fits. 3 is tempting because 6 \u00d7 3 = 18 ends in 8, but 43 \u00d7 6 = 258, whose middle digit is 5, not 3.",
    hints: ["Put each possible digit into both of Udayan's boxes and multiply in full. Checking only the ones digit is not enough."]
  },
  {
    id: "g4-maths-achhots-b-q08",
    prompt: "Jigna makes a tally chart of the games children chose for sports day. Each tally mark stands for 2 children. How many children chose Cricket or Kabaddi?",
    options: [
      { id: "a", text: "26" },
      { id: "b", text: "34" },
      { id: "c", text: "48" },
      { id: "d", text: "52" }
    ],
    answerId: "d",
    explanation: "Cricket has 17 marks and Kabaddi has 9 marks, 26 marks together. Each mark stands for 2 children, so 26 \u00d7 2 = 52 children. 26 is tempting because it is the number of marks, but every mark is 2 children, not 1.",
    hints: ["Count the marks in the Cricket and Kabaddi rows of Jigna's chart, then use what each tally mark stands for."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A tally chart of four games\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"220\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Games chosen for sports day</text>\n  <text class=\"label row-name\" x=\"20\" y=\"72\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Kho-kho</text>\n  <line class=\"part tally\" x1=\"130\" y1=\"56\" x2=\"130\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"139\" y1=\"56\" x2=\"139\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"148\" y1=\"56\" x2=\"148\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"157\" y1=\"56\" x2=\"157\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"125\" y1=\"78\" x2=\"162\" y2=\"60\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"182\" y1=\"56\" x2=\"182\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"191\" y1=\"56\" x2=\"191\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"200\" y1=\"56\" x2=\"200\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"209\" y1=\"56\" x2=\"209\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"177\" y1=\"78\" x2=\"214\" y2=\"60\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"234\" y1=\"56\" x2=\"234\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"243\" y1=\"56\" x2=\"243\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"252\" y1=\"56\" x2=\"252\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"112\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Kabaddi</text>\n  <line class=\"part tally\" x1=\"130\" y1=\"96\" x2=\"130\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"139\" y1=\"96\" x2=\"139\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"148\" y1=\"96\" x2=\"148\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"157\" y1=\"96\" x2=\"157\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"125\" y1=\"118\" x2=\"162\" y2=\"100\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"182\" y1=\"96\" x2=\"182\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"191\" y1=\"96\" x2=\"191\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"200\" y1=\"96\" x2=\"200\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"209\" y1=\"96\" x2=\"209\" y2=\"122\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"152\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Cricket</text>\n  <line class=\"part tally\" x1=\"130\" y1=\"136\" x2=\"130\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"139\" y1=\"136\" x2=\"139\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"148\" y1=\"136\" x2=\"148\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"157\" y1=\"136\" x2=\"157\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"125\" y1=\"158\" x2=\"162\" y2=\"140\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"182\" y1=\"136\" x2=\"182\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"191\" y1=\"136\" x2=\"191\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"200\" y1=\"136\" x2=\"200\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"209\" y1=\"136\" x2=\"209\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"177\" y1=\"158\" x2=\"214\" y2=\"140\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"234\" y1=\"136\" x2=\"234\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"243\" y1=\"136\" x2=\"243\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"252\" y1=\"136\" x2=\"252\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"261\" y1=\"136\" x2=\"261\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"229\" y1=\"158\" x2=\"266\" y2=\"140\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"286\" y1=\"136\" x2=\"286\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"295\" y1=\"136\" x2=\"295\" y2=\"162\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"192\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Chess</text>\n  <line class=\"part tally\" x1=\"130\" y1=\"176\" x2=\"130\" y2=\"202\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"139\" y1=\"176\" x2=\"139\" y2=\"202\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"148\" y1=\"176\" x2=\"148\" y2=\"202\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"157\" y1=\"176\" x2=\"157\" y2=\"202\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"125\" y1=\"198\" x2=\"162\" y2=\"180\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"part tally\" x1=\"182\" y1=\"176\" x2=\"182\" y2=\"202\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n</svg>", "alt": "A tally chart with four rows. Kho-kho has 2 bundles of five and 3 single marks. Kabaddi has 1 bundle of five and 4 single marks. Cricket has 3 bundles of five and 2 single marks. Chess has 1 bundle of five and 1 single mark."}
  },
  {
    id: "g4-maths-achhots-b-q09",
    prompt: "Madhu rounds the number 6,749 in different ways and writes four statements about it. Which statement is correct?",
    options: [
      { id: "a", text: "Rounded to the nearest ten, it is 6,750." },
      { id: "b", text: "Rounded to the nearest hundred, it is 6,800." },
      { id: "c", text: "Rounded to the nearest thousand, it is 6,000." },
      { id: "d", text: "Rounded to the nearest ten, it is 6,740." }
    ],
    answerId: "a",
    explanation: "6,749 is between 6,740 and 6,750 and its ones digit is 9, so to the nearest ten it is 6,750. To the nearest hundred, look at the tens digit 4: it rounds down to 6,700. To the nearest thousand, the hundreds digit 7 makes it 7,000. \"Rounded to the nearest hundred, it is 6,800\" is tempting: it rounds 6,750 again instead of rounding 6,749 itself.",
    hints: ["Round Madhu's number straight from its own digits each time. Do not round an already rounded number a second time."]
  },
  {
    id: "g4-maths-achhots-b-q10",
    prompt: "Nirmal's square garden bed has sides of 6 m. His new bed is a triangle with all three sides equal, and its perimeter is exactly the same. How long is each side of the triangular bed?",
    options: [
      { id: "a", text: "6 m" },
      { id: "b", text: "12 m" },
      { id: "c", text: "4 m" },
      { id: "d", text: "8 m" }
    ],
    answerId: "d",
    explanation: "The square bed's perimeter is 4 \u00d7 6 = 24 m. The triangle has the same 24 m shared among 3 equal sides, so each side is 24 \u00f7 3 = 8 m. 6 m is tempting because it keeps the square's side, but the same perimeter shared among only 3 sides makes each side longer.",
    hints: ["Find the perimeter of Nirmal's square bed first. Then share that length equally among the sides of the triangular bed."]
  },
  {
    id: "g4-maths-achhots-b-q11",
    prompt: "Sejal's village road runs past four places, as shown. One distance is missing. Sejal walks from the Bank to the Mandi and back again. How far does she walk?",
    options: [
      { id: "a", text: "1 km 750 m" },
      { id: "b", text: "10 km 500 m" },
      { id: "c", text: "3 km 500 m" },
      { id: "d", text: "2 km 750 m" }
    ],
    answerId: "c",
    explanation: "The two known stretches are 1 km 400 m + 2 km 100 m = 3 km 500 m, so Bank to Mandi is 5 km 250 m \u2212 3 km 500 m = 1 km 750 m. There and back is twice that: 3 km 500 m. 1 km 750 m is tempting because it is the missing distance, but Sejal walks it twice, once each way.",
    hints: ["Use the whole length of Sejal's road to find the stretch marked with a question mark. Then remember she comes back too."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A straight road through four places with distances and the total length\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sejal's village road</text>\n  <line class=\"part road\" x1=\"50\" y1=\"120\" x2=\"470\" y2=\"120\" stroke=\"#8d6e63\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <circle class=\"part stop\" cx=\"50\" cy=\"120\" r=\"9\" fill=\"#43a047\" stroke=\"#fff\" stroke-width=\"2\"/>\n  <text class=\"label place-name\" x=\"50\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Home</text>\n  <circle class=\"part stop\" cx=\"190\" cy=\"120\" r=\"9\" fill=\"#43a047\" stroke=\"#fff\" stroke-width=\"2\"/>\n  <text class=\"label place-name\" x=\"190\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Bank</text>\n  <circle class=\"part stop\" cx=\"330\" cy=\"120\" r=\"9\" fill=\"#43a047\" stroke=\"#fff\" stroke-width=\"2\"/>\n  <text class=\"label place-name\" x=\"330\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Mandi</text>\n  <circle class=\"part stop\" cx=\"470\" cy=\"120\" r=\"9\" fill=\"#43a047\" stroke=\"#fff\" stroke-width=\"2\"/>\n  <text class=\"label place-name\" x=\"470\" y=\"152\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Fort</text>\n  <text class=\"label dist\" x=\"120\" y=\"106\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">1 km 400 m</text>\n  <text class=\"label dist\" x=\"260\" y=\"106\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">?</text>\n  <text class=\"label dist\" x=\"400\" y=\"106\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2 km 100 m</text>\n  <line class=\"part brace\" x1=\"50\" y1=\"66\" x2=\"470\" y2=\"66\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <line class=\"part brace\" x1=\"50\" y1=\"60\" x2=\"50\" y2=\"72\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <line class=\"part brace\" x1=\"470\" y1=\"60\" x2=\"470\" y2=\"72\" stroke=\"#455a64\" stroke-width=\"1.5\"/>\n  <text class=\"label dist total\" x=\"260\" y=\"58\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Home to Fort: 5 km 250 m</text>\n</svg>", "alt": "A straight road with four stops in order: Home, Bank, Mandi and Fort. Home to Bank is 1 km 400 m, Bank to Mandi is marked ?, and Mandi to Fort is 2 km 100 m. A line above shows that the whole road from Home to Fort is 5 km 250 m."}
  },
  {
    id: "g4-maths-achhots-b-q12",
    prompt: "Ashok writes four number sentences. Only one of them is true. Which one is true?",
    options: [
      { id: "a", text: "25 \u00d7 16 = 40 \u00d7 10" },
      { id: "b", text: "36 \u00d7 5 = 18 \u00d7 20" },
      { id: "c", text: "120 \u00f7 4 = 240 \u00f7 2" },
      { id: "d", text: "7 \u00d7 300 = 21 \u00d7 10" }
    ],
    answerId: "a",
    explanation: "25 \u00d7 16 = 400 and 40 \u00d7 10 = 400, so this one is true. 36 \u00d7 5 = 18 \u00d7 20 is tempting because 18 is half of 36, but 20 is four times 5, so the right side is 360, double 180. The other two give 30 and 120, and 2,100 and 210.",
    hints: ["Work out each side of Ashok's sentences as a single number. Halving one number only balances if the other is exactly doubled."]
  },
  {
    id: "g4-maths-achhots-b-q13",
    prompt: "Dipti's kulfi cart sold 90 kulfis on Sunday. The bar for Mango has been rubbed out. How many Mango kulfis were sold?",
    options: [
      { id: "a", text: "36" },
      { id: "b", text: "18" },
      { id: "c", text: "72" },
      { id: "d", text: "20" }
    ],
    answerId: "b",
    explanation: "The bars that can be read show 24 + 18 + 30 = 72 kulfis. All 90 were sold, so Mango is 90 \u2212 72 = 18. 36 is tempting: it comes from 90 \u2212 24 \u2212 30, leaving out the Pista bar.",
    hints: ["Read every bar on Dipti's graph that is still there and add them. The dashed bar is not a reading."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 310\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar graph of kulfi flavours with one bar rubbed out\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"310\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"210.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kulfis sold on Sunday</text>\n  <line class=\"part axis\" x1=\"70\" y1=\"44\" x2=\"70\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part axis\" x1=\"70\" y1=\"250\" x2=\"400\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label axis-name\" x=\"16\" y=\"36\" font-size=\"12\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#455a64\">Kulfis</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"250\" x2=\"400\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"254\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">0</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"214\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">6</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"170\" x2=\"400\" y2=\"170\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"174\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">12</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"130\" x2=\"400\" y2=\"130\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"134\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">18</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"90\" x2=\"400\" y2=\"90\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"94\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">24</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"50\" x2=\"400\" y2=\"50\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"54\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">30</text>\n  <rect class=\"part bar\" x=\"91\" y=\"90\" width=\"46\" height=\"160\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"114\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Kesar</text>\n  <rect class=\"part bar\" x=\"171\" y=\"130\" width=\"46\" height=\"120\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"194\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Pista</text>\n  <rect class=\"part bar hidden\" x=\"251\" y=\"50\" width=\"46\" height=\"200\" rx=\"0\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n  <text class=\"label hidden-mark\" x=\"274\" y=\"155\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">?</text>\n  <text class=\"label cat\" x=\"274\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Mango</text>\n  <rect class=\"part bar\" x=\"331\" y=\"50\" width=\"46\" height=\"200\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"354\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Malai</text>\n</svg>", "alt": "A bar graph of four kulfi flavours with a scale from 0 to 30 in steps of 6. The Kesar bar reaches 24, the Pista bar reaches 18, the Mango bar is only a dashed outline with a question mark, and the Malai bar reaches 30."}
  },
  {
    id: "g4-maths-achhots-b-q14",
    prompt: "Mishti counts her clay beads. It is between 20 and 40. One third of it is an even number. One quarter of it is an odd number. How many beads does Mishti have?",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "30" },
      { id: "c", text: "28" },
      { id: "d", text: "36" }
    ],
    answerId: "d",
    explanation: "The number can be split into both thirds and quarters, so it is a multiple of 12: between 20 and 40 that is 24 or 36. A third of 24 is 8 and a quarter is 6, which is even. A third of 36 is 12 (even) and a quarter is 9 (odd), so it is 36. 24 is tempting because a third of it is even too, but its quarter is even, not odd.",
    hints: ["Mishti's number must split exactly into thirds and into quarters. List those numbers between 20 and 40 and test both halves of the clues."]
  },
  {
    id: "g4-maths-achhots-b-q15",
    prompt: "Manish folds a square paper napkin along the dotted line, which is one of its lines of symmetry. What is the perimeter of the folded napkin?",
    options: [
      { id: "a", text: "16 cm" },
      { id: "b", text: "32 cm" },
      { id: "c", text: "24 cm" },
      { id: "d", text: "20 cm" }
    ],
    answerId: "c",
    explanation: "Folding along the middle line gives a rectangle 8 cm long and 4 cm wide. Its perimeter is 8 + 4 + 8 + 4 = 24 cm. 16 cm is tempting because it is half of the square's 32 cm perimeter, but folding makes a new edge along the fold, so the perimeter does not simply halve.",
    hints: ["Draw the shape of Manish's napkin after the fold and write the length of each of its sides before adding."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 328 308\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A square with a dotted fold line across its middle\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"328\" height=\"308\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"164.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Manish's paper napkin</text>\n  <rect class=\"part paper\" x=\"60\" y=\"50\" width=\"208\" height=\"208\" rx=\"0\" fill=\"#f8bbd0\" stroke=\"#ad1457\" stroke-width=\"2.5\"/>\n  <line class=\"part fold\" x1=\"60\" y1=\"154\" x2=\"268\" y2=\"154\" stroke=\"#4a148c\" stroke-width=\"2.5\" stroke-dasharray=\"7 5\"/>\n  <text class=\"label side\" x=\"164\" y=\"282\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">8 cm</text>\n  <text class=\"label fold-name\" x=\"278\" y=\"146\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#4a148c\">fold</text>\n</svg>", "alt": "A pink square with its bottom side labelled 8 cm. A dotted fold line goes straight across the middle from the left side to the right side."}
  },
  {
    id: "g4-maths-achhots-b-q16",
    prompt: "Suresh's mother pours a 2 kg bag of moong dal equally into 8 small jars. Suresh carries 3 of the jars to his aunt. How much dal does he carry?",
    options: [
      { id: "a", text: "750 g" },
      { id: "b", text: "250 g" },
      { id: "c", text: "1 kg 250 g" },
      { id: "d", text: "500 g" }
    ],
    answerId: "a",
    explanation: "2 kg = 2,000 g. Each jar holds 2,000 \u00f7 8 = 250 g, so 3 jars hold 3 \u00d7 250 = 750 g. 250 g is tempting, but it is only one jar; Suresh carries 3. 1 kg 250 g is what stays in the other 5 jars.",
    hints: ["Change the 2 kg of moong dal into grams and find how much one jar holds. Then think about how many jars Suresh carries."]
  },
  {
    id: "g4-maths-achhots-b-q17",
    prompt: "Trupti writes four numbers as word descriptions on cards. Which card describes the greatest number?",
    options: [
      { id: "a", text: "The smallest 5-digit number" },
      { id: "b", text: "The largest 4-digit number" },
      { id: "c", text: "The largest 4-digit number with all digits even" },
      { id: "d", text: "The smallest 5-digit number with all digits different" }
    ],
    answerId: "d",
    explanation: "Write each number: the smallest 5-digit number is 10,000; the largest 4-digit number is 9,999; the smallest 5-digit number with all digits different is 10,234; the largest 4-digit number with all digits even is 8,888. The greatest is 10,234. The largest 4-digit number is tempting because it is made of all 9s, but any 5-digit number is greater than every 4-digit number.",
    hints: ["Turn each of Trupti's descriptions into an actual number first, and compare the numbers of digits before anything else."]
  },
  {
    id: "g4-maths-achhots-b-q18",
    prompt: "Vimal lays a pencil and an eraser above a ruler, as shown. How many of these erasers, placed end to end, would be exactly as long as the pencil?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "The pencil goes from 3 cm to 15 cm, so it is 15 \u2212 3 = 12 cm long. The eraser goes from 2 cm to 5 cm, so it is 3 cm long. 12 \u00f7 3 = 4 erasers. 3 is tempting: reading only the end marks, 15 and 5, gives 15 \u00f7 5 = 3, but neither object starts at 0.",
    hints: ["Find where Vimal's pencil starts and ends on the ruler, and do the same for the eraser, before comparing lengths."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 560 222\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A pencil and an eraser above a centimetre ruler, neither starting at 0\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"560\" height=\"222\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"280.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Vimal's pencil and eraser</text>\n  <rect class=\"part object\" x=\"130\" y=\"46\" width=\"360\" height=\"22\" rx=\"6\" fill=\"#ffe082\" stroke=\"#37474f\" stroke-width=\"1.4\"/>\n  <text class=\"label object-name\" x=\"310\" y=\"62\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">pencil</text>\n  <rect class=\"part object\" x=\"100\" y=\"82\" width=\"90\" height=\"22\" rx=\"6\" fill=\"#f48fb1\" stroke=\"#37474f\" stroke-width=\"1.4\"/>\n  <text class=\"label object-name\" x=\"145\" y=\"98\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">eraser</text>\n  <rect class=\"part ruler\" x=\"30\" y=\"126\" width=\"500\" height=\"44\" rx=\"3\" fill=\"#fff59d\" stroke=\"#827717\" stroke-width=\"1.4\"/>\n  <line class=\"part tick\" x1=\"40\" y1=\"126\" x2=\"40\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"40\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">0</text>\n  <line class=\"part tick\" x1=\"70\" y1=\"126\" x2=\"70\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"70\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">1</text>\n  <line class=\"part tick\" x1=\"100\" y1=\"126\" x2=\"100\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"100\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">2</text>\n  <line class=\"part tick\" x1=\"130\" y1=\"126\" x2=\"130\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"130\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">3</text>\n  <line class=\"part tick\" x1=\"160\" y1=\"126\" x2=\"160\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"160\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">4</text>\n  <line class=\"part tick\" x1=\"190\" y1=\"126\" x2=\"190\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"190\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">5</text>\n  <line class=\"part tick\" x1=\"220\" y1=\"126\" x2=\"220\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"220\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">6</text>\n  <line class=\"part tick\" x1=\"250\" y1=\"126\" x2=\"250\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"250\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">7</text>\n  <line class=\"part tick\" x1=\"280\" y1=\"126\" x2=\"280\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"280\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">8</text>\n  <line class=\"part tick\" x1=\"310\" y1=\"126\" x2=\"310\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"310\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">9</text>\n  <line class=\"part tick\" x1=\"340\" y1=\"126\" x2=\"340\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"340\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">10</text>\n  <line class=\"part tick\" x1=\"370\" y1=\"126\" x2=\"370\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"370\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">11</text>\n  <line class=\"part tick\" x1=\"400\" y1=\"126\" x2=\"400\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"400\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">12</text>\n  <line class=\"part tick\" x1=\"430\" y1=\"126\" x2=\"430\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"430\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">13</text>\n  <line class=\"part tick\" x1=\"460\" y1=\"126\" x2=\"460\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"460\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">14</text>\n  <line class=\"part tick\" x1=\"490\" y1=\"126\" x2=\"490\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"490\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">15</text>\n  <line class=\"part tick\" x1=\"520\" y1=\"126\" x2=\"520\" y2=\"142\" stroke=\"#263238\" stroke-width=\"1.6\"/>\n  <text class=\"label tick-num\" x=\"520\" y=\"160\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#263238\">16</text>\n</svg>", "alt": "A ruler marked from 0 to 16 cm. Above it, a pencil starts at the 3 cm mark and ends at the 15 cm mark. Below the pencil, an eraser starts at the 2 cm mark and ends at the 5 cm mark."}
  },
  {
    id: "g4-maths-achhots-b-q19",
    prompt: "On Sports Day each of the 12 houses at Oorja's school sends 38 runners, and every runner gets a medal. The school has bought 450 medals. Which is true?",
    options: [
      { id: "a", text: "6 medals spare" },
      { id: "b", text: "56 medals short" },
      { id: "c", text: "6 medals short" },
      { id: "d", text: "16 medals spare" }
    ],
    answerId: "c",
    explanation: "12 \u00d7 38 = 380 + 76 = 456 runners. 456 \u2212 450 = 6, so there are 6 more runners than medals: 6 medals short. \"6 medals spare\" is tempting because the difference is right, but there are more runners than medals, not fewer.",
    hints: ["Multiply to find how many runners Oorja's school has on Sports Day. Then decide which is bigger, the runners or the medals."]
  },
  {
    id: "g4-maths-achhots-b-q20",
    prompt: "Shubhra arranges all four digit cards in a row to make 4-digit numbers. She finds the biggest even number and the smallest odd number she can make, then subtracts the smaller from the bigger. What answer does she get?",
    options: [
      { id: "a", text: "8,235" },
      { id: "b", text: "6,435" },
      { id: "c", text: "6,335" },
      { id: "d", text: "5,733" }
    ],
    answerId: "b",
    explanation: "The largest number is 8520, and it ends in 0, so it is even. An odd number must end in 5; the smallest such 4-digit number puts 2 first and 0 next: 2085. 8,520 \u2212 2,085 = 6,435. 8,235 is tempting: it uses 0285 as the smallest odd number, but a 4-digit number cannot start with 0.",
    hints: ["For the odd number, decide Shubhra's last card first. Remember the first card of a 4-digit number cannot be 0."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 340 120\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four digit cards\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"340\" height=\"120\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"170.0\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shubhra's digit cards</text>\n  <rect class=\"part card\" x=\"37\" y=\"40\" width=\"56\" height=\"66\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <text class=\"label card-digit\" x=\"65\" y=\"84\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">2</text>\n  <rect class=\"part card\" x=\"107\" y=\"40\" width=\"56\" height=\"66\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <text class=\"label card-digit\" x=\"135\" y=\"84\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">5</text>\n  <rect class=\"part card\" x=\"177\" y=\"40\" width=\"56\" height=\"66\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <text class=\"label card-digit\" x=\"205\" y=\"84\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">0</text>\n  <rect class=\"part card\" x=\"247\" y=\"40\" width=\"56\" height=\"66\" rx=\"8\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"2\"/>\n  <text class=\"label card-digit\" x=\"275\" y=\"84\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">8</text>\n</svg>", "alt": "Four green digit cards in a row showing 2, 5, 0 and 8."}
  },
  {
    id: "g4-maths-achhots-b-q21",
    prompt: "Tanay's bar graph shows how much money he saved in each of four weeks. From now on he will save the same amount every week as in his best week so far. He wants \u20b9600 altogether. How many more weeks must he save?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "8" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "So far Tanay has 45 + 60 + 30 + 75 = \u20b9210, so he still needs 600 \u2212 210 = \u20b9390. His best week was \u20b975. 5 weeks give \u20b9375, which is \u20b915 short, so he needs 6 more weeks. 5 is tempting because 390 \u00f7 75 is 5 with \u20b915 left over, but that leftover still needs another week of saving.",
    hints: ["Add what Tanay has saved on the graph and find how much is still needed. A part-week of saving still takes a whole week."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 310\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar graph of money saved in four weeks\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"310\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"210.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tanay's savings</text>\n  <line class=\"part axis\" x1=\"70\" y1=\"44\" x2=\"70\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part axis\" x1=\"70\" y1=\"250\" x2=\"400\" y2=\"250\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label axis-name\" x=\"16\" y=\"36\" font-size=\"12\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#455a64\">Rupees</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"250\" x2=\"400\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"254\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">0</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"216.67\" x2=\"400\" y2=\"216.67\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"220.67\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">15</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"183.33\" x2=\"400\" y2=\"183.33\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"187.33\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">30</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"150\" x2=\"400\" y2=\"150\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"154\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">45</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"116.67\" x2=\"400\" y2=\"116.67\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"120.67\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">60</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"83.33\" x2=\"400\" y2=\"83.33\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"87.33\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">75</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"50\" x2=\"400\" y2=\"50\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"54\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">90</text>\n  <rect class=\"part bar\" x=\"91\" y=\"150\" width=\"46\" height=\"100\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"114\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Week 1</text>\n  <rect class=\"part bar\" x=\"171\" y=\"116.67\" width=\"46\" height=\"133.33\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"194\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Week 2</text>\n  <rect class=\"part bar\" x=\"251\" y=\"183.33\" width=\"46\" height=\"66.67\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"274\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Week 3</text>\n  <rect class=\"part bar\" x=\"331\" y=\"83.33\" width=\"46\" height=\"166.67\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"354\" y=\"270\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Week 4</text>\n</svg>", "alt": "A bar graph with Week 1, Week 2, Week 3 and Week 4 along the bottom and a scale in rupees from 0 to 90 in steps of 15. Week 1 reaches 45, Week 2 reaches 60, Week 3 reaches 30 and Week 4 reaches 75."}
  },
  {
    id: "g4-maths-achhots-b-q22",
    prompt: "Tvisha spends 1/4 of her money on books. Then she spends 1/3 of the money left on snacks. She has \u20b960 left. How much money did Tvisha have at the start?",
    options: [
      { id: "a", text: "\u20b9144" },
      { id: "b", text: "\u20b9240" },
      { id: "c", text: "\u20b9120" },
      { id: "d", text: "\u20b990" }
    ],
    answerId: "c",
    explanation: "Work backwards. After books she spent 1/3 of what was left on snacks, so \u20b960 is the other 2/3: one third is \u20b930 and the money after books was \u20b990. Books took 1/4, so \u20b990 is 3/4 of the start: one quarter is \u20b930 and the start was \u20b9120. \u20b9144 is tempting: it treats 1/3 as a part of the starting money instead of a part of what was left.",
    hints: ["Start from Tvisha's \u20b960 and undo the snacks step first. The snacks fraction is a part of what was left after the books."]
  },
  {
    id: "g4-maths-achhots-b-q23",
    prompt: "Yug cuts three paper squares and places them side by side on a line, touching, as shown. What is the perimeter of the outline of the whole shape?",
    options: [
      { id: "a", text: "72 cm" },
      { id: "b", text: "52 cm" },
      { id: "c", text: "36 cm" },
      { id: "d", text: "44 cm" }
    ],
    answerId: "b",
    explanation: "Go round the outline: the bottom is 4 + 6 + 8 = 18 cm, the right side is 8 cm, the tops are 8, 6 and 4 cm, the two small steps are 8 \u2212 6 = 2 cm and 6 \u2212 4 = 2 cm, and the left side is 4 cm. 18 + 8 + 8 + 2 + 6 + 2 + 4 + 4 = 52 cm. 72 cm is tempting because it adds the three squares' perimeters, but the sides where the squares touch are inside the shape.",
    hints: ["Trace only the outside edge of Yug's shape. Sides where two squares touch are not on the outline."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 296 206\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Three squares of different sizes standing side by side on one line\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"296\" height=\"206\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"148.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Yug's three squares</text>\n  <rect class=\"part square\" x=\"40\" y=\"108\" width=\"48\" height=\"48\" rx=\"0\" fill=\"#b3e5fc\" stroke=\"#0277bd\" stroke-width=\"2\"/>\n  <text class=\"label side\" x=\"64\" y=\"178\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">4 cm</text>\n  <rect class=\"part square\" x=\"88\" y=\"84\" width=\"72\" height=\"72\" rx=\"0\" fill=\"#b3e5fc\" stroke=\"#0277bd\" stroke-width=\"2\"/>\n  <text class=\"label side\" x=\"124\" y=\"178\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">6 cm</text>\n  <rect class=\"part square\" x=\"160\" y=\"60\" width=\"96\" height=\"96\" rx=\"0\" fill=\"#b3e5fc\" stroke=\"#0277bd\" stroke-width=\"2\"/>\n  <text class=\"label side\" x=\"208\" y=\"178\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">8 cm</text>\n</svg>", "alt": "Three blue squares stand side by side on one base line, touching. From left to right their sides are 4 cm, 6 cm and 8 cm."}
  },
  {
    id: "g4-maths-achhots-b-q24",
    prompt: "Gopika's family makes 9 L of aam panna and keeps 1/4 of it at home. The rest is poured into bottles that each hold 3 cups. 4 cups make 1 L. How many bottles are filled?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "9" },
      { id: "c", text: "27" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "1/4 of 9 L is 2 L 250 mL, so 6 L 750 mL = 6,750 mL goes into bottles. One cup is 1,000 \u00f7 4 = 250 mL, so a bottle holds 3 \u00d7 250 = 750 mL. 6,750 \u00f7 750 = 9 bottles. 12 is tempting: 9,000 \u00f7 750 = 12 bottles uses all 9 L and forgets the part kept at home.",
    hints: ["Find how much aam panna Gopika's family pours, then how many millilitres one bottle holds. Change litres to millilitres first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "🏆", "title": "Join the clues", "body": ["Achiever questions hide more than one idea. Read every clue, match the units, cross out what fails — then join the steps and watch the leftover.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Achiever questions hide more than one idea. Read every clue, match the units, cross out what fails — then join the steps and watch the leftover. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Read Every Clue First", "steps": ["An achiever reads the whole question, every clue and every number, before choosing an answer.", "An option that fits the first clue may still break a later one, so a quick choice is often wrong.", "Check: A number is between 10 and 50, is a multiple of 5, and its digits add up to 8. Which number is it?"], "punchline": "Answer: 35", "visual": "none", "speak": "An achiever reads the whole question, every clue and every number, before choosing an answer. An option that fits the first clue may still break a later one, so a quick choice is often wrong."},
  {"id": "s2", "type": "demo", "title": "Make the Units Match", "steps": ["Before you compare or add amounts, write them all in the same unit: metres with metres, millilitres with millilitres.", "Remember 1 km = 1,000 m, 1 m = 100 cm, 1 kg = 1,000 g and 1 L = 1,000 mL.", "Check: Which is longer, 1 km 80 m or 1,200 m?"], "punchline": "Answer: 1,200 m", "visual": "none", "speak": "Before you compare or add amounts, write them all in the same unit: metres with metres, millilitres with millilitres. Remember 1 km = 1,000 m, 1 m = 100 cm, 1 kg = 1,000 g and 1 L = 1,000 mL."},
  {"id": "s3", "type": "demo", "title": "Cross Out What Fails", "steps": ["When many numbers are possible, list them and test one clue at a time.", "Cross out a number as soon as it fails a single clue; whatever survives every clue is the answer.", "Check: Which of 12, 18, 20 and 24 is a multiple of 4 but not of 6?"], "punchline": "Answer: 20", "visual": "none", "speak": "When many numbers are possible, list them and test one clue at a time. Cross out a number as soon as it fails a single clue; whatever survives every clue is the answer."},
  {"id": "s4", "type": "demo", "title": "Test Each Statement", "steps": ["For a true-or-false question, work out each statement with real numbers instead of judging by how it looks.", "Bigger numbers in a fraction do not always mean a bigger amount: one quarter of 40 is less than one third of 36.", "Check: True or false: one half of 18 is more than one third of 24."], "punchline": "Answer: True (9 is more than 8)", "visual": "none", "speak": "For a true-or-false question, work out each statement with real numbers instead of judging by how it looks. Bigger numbers in a fraction do not always mean a bigger amount: one quarter of 40 is less than one third of 36."},
  {"id": "s5", "type": "demo", "title": "Join Two Ideas", "steps": ["Hard problems often join two ideas: first find a perimeter, then a cost; or first read a measure, then take a fraction of it.", "Finish the first step fully and write its answer down before starting the second step.", "Check: A square park has sides of 10 m. Fencing costs ₹20 for each metre. What does fencing the whole park cost?"], "punchline": "Answer: ₹800", "visual": "none", "speak": "Hard problems often join two ideas: first find a perimeter, then a cost; or first read a measure, then take a fraction of it. Finish the first step fully and write its answer down before starting the second step."},
  {"id": "s6", "type": "demo", "title": "Watch the Leftover", "steps": ["Some numbers in a story are there to catch you: a short bit left over after cutting, a part kept aside, or a weight on the same pan.", "Ask what each number is for, and check whether the leftover part belongs in the answer.", "Check: From a 1 m ribbon, how many whole 30 cm pieces can be cut?"], "punchline": "Answer: 3", "visual": "none", "speak": "Some numbers in a story are there to catch you: a short bit left over after cutting, a part kept aside, or a weight on the same pan. Ask what each number is for, and check whether the leftover part belongs in the answer."},
  {"id": "s7", "type": "demo", "title": "Check Your Answer", "steps": ["When you have an answer, put it back into the question and test every condition once more.", "If an option passes all but one condition, it is still not the answer.", "Check: Does 46 fit both clues 'leaves 1 over in fives' and 'is a multiple of 3'?"], "punchline": "Answer: No, 46 is not a multiple of 3", "visual": "none", "speak": "When you have an answer, put it back into the question and test every condition once more. If an option passes all but one condition, it is still not the answer."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "A number is between 10 and 50, is a multiple of 5, and its digits add up to 8. Which number is it?", "options": [{"id": "a", "text": "15"}, {"id": "b", "text": "35"}, {"id": "c", "text": "40"}, {"id": "d", "text": "45"}], "answerId": "b", "why": "Multiples of 5 between 10 and 50 include 15, 20, 25, 30, 35, 40, 45, 50. Digits that add to 8 leave only 35. 40 is tempting because it is a multiple of 5, but 4 + 0 = 4, not 8.", "visual": "none", "speak": "A number is between 10 and 50, is a multiple of 5, and its digits add up to 8. Which number is it?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Read every clue before choosing", "Make units match before comparing", "Cross out anything that fails one clue", "Test each true/false statement with numbers", "Finish step 1 before starting step 2", "Ask what each leftover number is for"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g4MathsAchieversHots: ChapterDef = {
  id: "g4-achievers-hots",
  title: "Achievers: Maths HOTS",
  emoji: "\ud83c\udfc6",
  blurb: "Multi-step HOTS joining numbers, measures, fractions, time, money & graphs",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "word-problems",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "word-problems",
      questions: SET_B,
    },
  ],
  paperTopics: ["numbers", "measurement", "fractions", "data-handling"],
};

export const g4MathsAchieversHotsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
