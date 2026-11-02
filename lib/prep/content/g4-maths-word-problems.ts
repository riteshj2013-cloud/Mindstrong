import type { ChapterDef, PrepQuestion } from "../types";

/** Everyday Word Problems - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-wordprob-a-q01",
    prompt: "Meena reads the fruit cart's price board and buys half a dozen bananas. How much does she pay?",
    options: [
      { id: "a", text: "\u20b9360" },
      { id: "b", text: "\u20b960" },
      { id: "c", text: "\u20b930" },
      { id: "d", text: "\u20b910" }
    ],
    answerId: "c",
    explanation: "A dozen is 12, so half a dozen is 6 bananas, which is half the price: \u20b960 \u00f7 2 = \u20b930. \u20b9360 is tempting if you multiply the 6 bananas by \u20b960, but \u20b960 is the price of all 12 bananas, not of one.",
    hints: ["The banana price on the board is for a whole dozen. What part of a dozen is Meena buying?"],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 216\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A fruit cart price board\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"216\" fill=\"#fff\"/>\n  <rect class=\"part board\" x=\"10\" y=\"8\" width=\"400\" height=\"200\" rx=\"10\" fill=\"#2e7d32\" stroke=\"#5d4037\" stroke-width=\"4\"/>\n  <text class=\"title\" x=\"210.0\" y=\"40\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#fff\">Ramu's Fruit Cart</text>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"74\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Bananas</text>\n  <text class=\"label price\" x=\"386\" y=\"74\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b960 per dozen</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"108\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Guavas</text>\n  <text class=\"label price\" x=\"386\" y=\"108\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b915 each</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"142\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Chikoos</text>\n  <text class=\"label price\" x=\"386\" y=\"142\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b980 per kg</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"176\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Coconuts</text>\n  <text class=\"label price\" x=\"386\" y=\"176\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b935 each</text>\n  </g>\n</svg>", "alt": "A price board: Bananas \u20b960 per dozen, Guavas \u20b915 each, Chikoos \u20b980 per kg, Coconuts \u20b935 each."}
  },
  {
    id: "g4-maths-wordprob-a-q02",
    prompt: "Tailor Jaspreet has a 3 m strip of lace. She cuts it into pieces of 50 cm each for cushion covers. How many pieces does she get?",
    options: [
      { id: "a", text: "150 pieces" },
      { id: "b", text: "60 pieces" },
      { id: "c", text: "15 pieces" },
      { id: "d", text: "6 pieces" }
    ],
    answerId: "d",
    explanation: "3 m = 300 cm, and 300 \u00f7 50 = 6 pieces. 150 pieces is tempting if you multiply 3 by 50, but cutting into pieces means dividing, and metres must first be changed into centimetres.",
    hints: ["Change the lace's length into centimetres first, then see how many pieces of that size fit."]
  },
  {
    id: "g4-maths-wordprob-a-q03",
    prompt: "A sweet shop has 47 laddoos and packs them in boxes of 6. Only full boxes go on sale. How many laddoos are left unpacked?",
    options: [
      { id: "a", text: "7 laddoos" },
      { id: "b", text: "8 laddoos" },
      { id: "c", text: "5 laddoos" },
      { id: "d", text: "41 laddoos" }
    ],
    answerId: "c",
    explanation: "6 \u00d7 7 = 42, so 7 full boxes use 42 laddoos and 47 \u2212 42 = 5 are left. 7 laddoos is tempting because 7 is the answer to the division, but 7 is the number of boxes, not the laddoos left over.",
    hints: ["Find how many full boxes the laddoos can fill. Then work out how many laddoos did not fit."]
  },
  {
    id: "g4-maths-wordprob-a-q04",
    prompt: "A school van carries 12 children on each trip. It makes 3 trips every morning. The driver is 45 years old. Which fact is NOT needed to find how many children the van carries each morning?",
    options: [
      { id: "a", text: "the 12 children on each trip" },
      { id: "b", text: "the 3 trips" },
      { id: "c", text: "the driver's age" },
      { id: "d", text: "all of the facts are needed" }
    ],
    answerId: "c",
    explanation: "Children each morning = 12 \u00d7 3 = 36, which uses only the children per trip and the number of trips. 'All of the facts are needed' is tempting because word problems often use every number, but the driver's age has nothing to do with how many children ride.",
    hints: ["Write the calculation for the children carried each morning. Which number never appears in it?"]
  },
  {
    id: "g4-maths-wordprob-a-q05",
    prompt: "Riya is 8. Her brother Sameer is 3 years older. Nani's age is 7 times Sameer's age. How old is Nani?",
    options: [
      { id: "a", text: "56 years" },
      { id: "b", text: "59 years" },
      { id: "c", text: "21 years" },
      { id: "d", text: "77 years" }
    ],
    answerId: "d",
    explanation: "Sameer is 8 + 3 = 11, and Nani is 7 \u00d7 11 = 77 years old. 56 years is tempting if you multiply Riya's age by 7, but Nani's age is compared with Sameer's, not Riya's.",
    hints: ["First find Sameer's age. Then use the times clue with his age, not Riya's."]
  },
  {
    id: "g4-maths-wordprob-a-q06",
    prompt: "Vikram's storybook has 250 pages. The bar model shows the pages he read on two days. How many pages are still left to read?",
    options: [
      { id: "a", text: "75 pages" },
      { id: "b", text: "165 pages" },
      { id: "c", text: "175 pages" },
      { id: "d", text: "85 pages" }
    ],
    answerId: "a",
    explanation: "He has read 85 + 90 = 175 pages, so 250 \u2212 175 = 75 pages are left. 165 pages is tempting if you take away only the first day's 85 pages, but the 90 pages read on the second day must come off too.",
    hints: ["Both known parts of the bar have already been read. Put them together, then compare with the whole book."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 142\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar model of a 250-page book split into 85 pages, 90 pages and an unknown part\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"142\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Vikram's storybook</text>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"98.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Pages</text>\n  <g class=\"part seg known\"><rect class=\"part seg-box\" x=\"100\" y=\"76\" width=\"108.8\" height=\"34\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"154.4\" y=\"98.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">85</text></g>\n  <g class=\"part seg known\"><rect class=\"part seg-box\" x=\"208.8\" y=\"76\" width=\"115.2\" height=\"34\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"266.4\" y=\"98.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">90</text></g>\n  <g class=\"part seg unknown\"><rect class=\"part seg-box\" x=\"324\" y=\"76\" width=\"96\" height=\"34\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"372\" y=\"98.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  </g>\n  <g class=\"part brace\"><line class=\"part brace-line\" x1=\"100\" y1=\"62\" x2=\"420\" y2=\"62\" stroke=\"#37474f\" stroke-width=\"1.5\"/><line class=\"part brace-line\" x1=\"100\" y1=\"56\" x2=\"100\" y2=\"68\" stroke=\"#37474f\" stroke-width=\"1.5\"/><line class=\"part brace-line\" x1=\"420\" y1=\"56\" x2=\"420\" y2=\"68\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label total-text\" x=\"260\" y=\"54\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">250 pages</text></g>\n  <g class=\"part model-scale\"></g>\n</svg>", "alt": "A single bar labelled 250 pages, split into parts of 85, 90 and a question mark."}
  },
  {
    id: "g4-maths-wordprob-a-q07",
    prompt: "Kabir gave away 12 marbles to his cousin. Later he won 5 marbles in a game. Now he has 30 marbles. How many marbles did he have at the start?",
    options: [
      { id: "a", text: "37 marbles" },
      { id: "b", text: "47 marbles" },
      { id: "c", text: "23 marbles" },
      { id: "d", text: "13 marbles" }
    ],
    answerId: "a",
    explanation: "Undo the steps from the end: before winning he had 30 \u2212 5 = 25; before giving away he had 25 + 12 = 37. 47 marbles is tempting if you add both numbers, but the 5 marbles he won must be taken back off, not added.",
    hints: ["Start from the marbles Kabir has now and undo each event in reverse order, doing the opposite each time."]
  },
  {
    id: "g4-maths-wordprob-a-q08",
    prompt: "Aditi can cycle from home to the library along the winding river road, or go through the market. Which way is shorter, and by how much?",
    options: [
      { id: "a", text: "The river road, by 300 m" },
      { id: "b", text: "Via the market, by 1 km 500 m" },
      { id: "c", text: "Both ways are the same" },
      { id: "d", text: "Via the market, by 300 m" }
    ],
    answerId: "d",
    explanation: "Through the market: 1 km 200 m + 900 m = 2 km 100 m. The river road is 2 km 400 m, so the market way is shorter by 300 m. 'The river road' is tempting because it is a single road, but one long road can still be longer than two short ones.",
    hints: ["Add the two roads through the market, keeping metres with metres. Then compare that total with the river road."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 320\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A map with roads from Home to Market, Market to Library, and a winding road from Home to Library\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"320\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Aditi's roads</text>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 70 230 Q 135 135 240 80\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"103\" y=\"134\" width=\"84\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"145\" y=\"149\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">1 km 200 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 240 80 Q 348 134 400 220\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"310\" y=\"131\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"334\" y=\"146\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">900 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 70 230 Q 235 325 400 220\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"193\" y=\"264\" width=\"84\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"235\" y=\"279\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">2 km 400 m</text>\n  </g>\n  <g class=\"part place\"><circle cx=\"70\" cy=\"230\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"70\" y=\"215\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Home</text></g>\n  <g class=\"part place\"><circle cx=\"240\" cy=\"80\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"240\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Market</text></g>\n  <g class=\"part place\"><circle cx=\"400\" cy=\"220\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"400\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Library</text></g>\n  <text class=\"label small\" x=\"446\" y=\"310\" font-size=\"11\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#757575\">Map not drawn to scale</text>\n</svg>", "alt": "A map. Home to Market 1 km 200 m. Market to Library 900 m. The winding road from Home straight to Library is 2 km 400 m. Not drawn to scale."}
  },
  {
    id: "g4-maths-wordprob-a-q09",
    prompt: "A box of pedas can be shared equally among 4 children with none left over. It can also be shared equally among 6 children with none left over. What is the smallest number of pedas the box can have?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "24" },
      { id: "c", text: "10" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "The number must be in both the 4 times table and the 6 times table. 4, 8, 12 \u2026 and 6, 12 \u2026 meet first at 12. 24 is tempting because 4 \u00d7 6 = 24, and 24 does work, but 12 is smaller and also works.",
    hints: ["List numbers in the 4 times table and in the 6 times table. Look for the smallest number on both lists."]
  },
  {
    id: "g4-maths-wordprob-a-q10",
    prompt: "The school needs 500 chairs for Annual Day. So far, 18 rows of 25 chairs have been set out. How many more chairs are needed?",
    options: [
      { id: "a", text: "450 chairs" },
      { id: "b", text: "50 chairs" },
      { id: "c", text: "475 chairs" },
      { id: "d", text: "457 chairs" }
    ],
    answerId: "b",
    explanation: "Chairs set out = 18 \u00d7 25 = 450, so 500 \u2212 450 = 50 more are needed. 450 chairs is tempting because it is the first answer you get, but that is the chairs already set out, not the chairs still needed.",
    hints: ["Work out how many chairs are already in rows, then compare with the chairs the school needs."]
  },
  {
    id: "g4-maths-wordprob-a-q11",
    prompt: "Here is Mr Pillai's grocery bill. The shop's offer is printed below the total. How much does he actually pay?",
    options: [
      { id: "a", text: "\u20b9645" },
      { id: "b", text: "\u20b9695" },
      { id: "c", text: "\u20b9545" },
      { id: "d", text: "\u20b9595" }
    ],
    answerId: "d",
    explanation: "The total is 260 + 220 + 165 = \u20b9645, which is above \u20b9600, so \u20b950 comes off: 645 \u2212 50 = \u20b9595. \u20b9645 is tempting because it is the printed total, but the offer applies to this bill.",
    hints: ["Check whether the bill total is above the offer's limit. If it is, take the discount off the total."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 250\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A grocery bill with an offer\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"250\" fill=\"#fff\"/>\n  <rect class=\"part bill-paper\" x=\"10\" y=\"8\" width=\"420\" height=\"234\" rx=\"6\" fill=\"#fffef7\" stroke=\"#bdbdbd\" stroke-width=\"1.5\"/>\n  <text class=\"title\" x=\"220.0\" y=\"34\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Annapurna Stores</text>\n  <text class=\"label small\" x=\"220.0\" y=\"52\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#757575\">CASH BILL</text>\n  <text class=\"label\" x=\"24\" y=\"70\" font-size=\"12.5\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Item</text>\n  <text class=\"label\" x=\"210\" y=\"70\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Qty</text>\n  <text class=\"label\" x=\"300\" y=\"70\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Rate (\u20b9)</text>\n  <text class=\"label\" x=\"420\" y=\"70\" font-size=\"12.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Amount (\u20b9)</text>\n  <line class=\"guide\" x1=\"20\" y1=\"78\" x2=\"420\" y2=\"78\" stroke=\"#9e9e9e\" stroke-width=\"1\"/>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"24\" y=\"100\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Rice</text>\n  <text class=\"label cell qty\" x=\"210\" y=\"100\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">5 kg</text>\n  <text class=\"label cell rate\" x=\"300\" y=\"100\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">52</text>\n  <text class=\"label cell amount\" x=\"420\" y=\"100\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">260</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"24\" y=\"130\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Toor dal</text>\n  <text class=\"label cell qty\" x=\"210\" y=\"130\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">2 kg</text>\n  <text class=\"label cell rate\" x=\"300\" y=\"130\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">110</text>\n  <text class=\"label cell amount\" x=\"420\" y=\"130\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">220</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"24\" y=\"160\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Mustard oil</text>\n  <text class=\"label cell qty\" x=\"210\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1 L</text>\n  <text class=\"label cell rate\" x=\"300\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">165</text>\n  <text class=\"label cell amount\" x=\"420\" y=\"160\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">165</text>\n  </g>\n  <line class=\"guide\" x1=\"20\" y1=\"178\" x2=\"420\" y2=\"178\" stroke=\"#9e9e9e\" stroke-width=\"1\"/>\n  <g class=\"part bill-total\"><text class=\"label\" x=\"300\" y=\"198\" font-size=\"13.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Total</text><text class=\"label cell total\" x=\"420\" y=\"198\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">645</text></g>\n  <g class=\"part offer\"><rect class=\"part offer-box\" x=\"24\" y=\"210\" width=\"392\" height=\"26\" rx=\"4\" fill=\"#fff3e0\" stroke=\"#fb8c00\" stroke-width=\"1\"/><text class=\"label offer-text\" x=\"220.0\" y=\"228\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">Offer: \u20b950 off on every bill above \u20b9600</text></g>\n</svg>", "alt": "A bill: Rice 5 kg at \u20b952 = \u20b9260; Toor dal 2 kg at \u20b9110 = \u20b9220; Mustard oil 1 L at \u20b9165 = \u20b9165; Total \u20b9645. Offer: \u20b950 off on every bill above \u20b9600."}
  },
  {
    id: "g4-maths-wordprob-a-q12",
    prompt: "Mother buys a 5 kg bag of atta. She uses 750 g of it every week. How much atta is left after 4 weeks?",
    options: [
      { id: "a", text: "4 kg 250 g" },
      { id: "b", text: "2 kg" },
      { id: "c", text: "3 kg" },
      { id: "d", text: "1 kg 250 g" }
    ],
    answerId: "b",
    explanation: "In 4 weeks she uses 4 \u00d7 750 g = 3,000 g = 3 kg. Left: 5 kg \u2212 3 kg = 2 kg. 4 kg 250 g is tempting, but that is what is left after only one week.",
    hints: ["Find the atta used in all the weeks, change grams into kilograms, then take it from the full bag."]
  },
  {
    id: "g4-maths-wordprob-a-q13",
    prompt: "Read Neel's comic strip from left to right. How much money did Neel have at the start?",
    options: [
      { id: "a", text: "\u20b9200" },
      { id: "b", text: "\u20b9160" },
      { id: "c", text: "\u20b9100" },
      { id: "d", text: "\u20b9140" }
    ],
    answerId: "a",
    explanation: "Work backwards: before the snack he had 60 + 40 = \u20b9100. That was the half left after the comic, so at the start he had 2 \u00d7 100 = \u20b9200. \u20b9160 is tempting if you double the \u20b960 first and then add \u20b940, but the steps must be undone in reverse order.",
    hints: ["Undo the last panel first, then the middle one. Each undo is the opposite of what Neel did."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A three-panel comic strip about Neel spending his pocket money\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Neel's pocket money</text>\n  <g class=\"part panel\">\n  <rect class=\"part panel-box\" x=\"14\" y=\"38\" width=\"146.667\" height=\"150\" rx=\"8\" fill=\"#fff\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <text class=\"label small\" x=\"28\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">1</text>\n  <circle class=\"part face\" cx=\"87.333\" cy=\"78\" r=\"16\" fill=\"#ffe0b2\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <path class=\"part smile\" d=\"M 80.333 82 Q 87.333 89 94.333 82\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label caption\" x=\"87.333\" y=\"118\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">I have some</text>\n  <text class=\"label caption\" x=\"87.333\" y=\"135\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">pocket money.</text>\n  </g>\n  <text class=\"label arrow\" x=\"163.667\" y=\"116\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">\u203a</text>\n  <g class=\"part panel\">\n  <rect class=\"part panel-box\" x=\"166.667\" y=\"38\" width=\"146.667\" height=\"150\" rx=\"8\" fill=\"#fff\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <text class=\"label small\" x=\"180.667\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">2</text>\n  <circle class=\"part face\" cx=\"240\" cy=\"78\" r=\"16\" fill=\"#ffe0b2\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <path class=\"part smile\" d=\"M 233 82 Q 240 89 247 82\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label caption\" x=\"240\" y=\"118\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">I spend half of it</text>\n  <text class=\"label caption\" x=\"240\" y=\"135\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">on a comic book.</text>\n  </g>\n  <text class=\"label arrow\" x=\"316.333\" y=\"116\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">\u203a</text>\n  <g class=\"part panel\">\n  <rect class=\"part panel-box\" x=\"319.333\" y=\"38\" width=\"146.667\" height=\"150\" rx=\"8\" fill=\"#fff\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <text class=\"label small\" x=\"333.333\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">3</text>\n  <circle class=\"part face\" cx=\"392.667\" cy=\"78\" r=\"16\" fill=\"#ffe0b2\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <path class=\"part smile\" d=\"M 385.667 82 Q 392.667 89 399.667 82\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label caption\" x=\"392.667\" y=\"118\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Then a snack costs \u20b940.</text>\n  <text class=\"label caption\" x=\"392.667\" y=\"135\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Now \u20b960 is left!</text>\n  </g>\n</svg>", "alt": "Panel 1: Neel has some pocket money. Panel 2: he spends half of it on a comic book. Panel 3: a snack costs \u20b940, and \u20b960 is left."}
  },
  {
    id: "g4-maths-wordprob-a-q14",
    prompt: "Arjun's grandmother lives 30 km away. He cycles for 2 hours at 12 km each hour, and then walks the rest of the way at 3 km each hour. How long does he walk?",
    options: [
      { id: "a", text: "6 hours" },
      { id: "b", text: "10 hours" },
      { id: "c", text: "2 hours" },
      { id: "d", text: "4 hours" }
    ],
    answerId: "c",
    explanation: "Cycling covers 2 \u00d7 12 = 24 km, so 30 \u2212 24 = 6 km is left. At 3 km each hour that takes 6 \u00f7 3 = 2 hours. 6 hours is tempting, but 6 is the distance left in km, not the time.",
    hints: ["Find the distance Arjun cycles, then the distance still left. Last, see how long walking that part takes."]
  },
  {
    id: "g4-maths-wordprob-a-q15",
    prompt: "120 children are going on a school trip to a science park. Each bus seats 35 children, and each bus costs \u20b92,500 for the day. What is the least the school must pay for buses?",
    options: [
      { id: "a", text: "\u20b910,000" },
      { id: "b", text: "\u20b97,500" },
      { id: "c", text: "\u20b987,500" },
      { id: "d", text: "\u20b93,00,000" }
    ],
    answerId: "a",
    explanation: "3 buses seat only 105 children, so 4 buses are needed for 120. Cost = 4 \u00d7 \u20b92,500 = \u20b910,000. \u20b97,500 is tempting if you use 3 buses because 120 \u00f7 35 is about 3, but then 15 children would be left behind.",
    hints: ["Work out how many buses are needed so that no child is left behind, then find the cost of those buses."]
  },
  {
    id: "g4-maths-wordprob-a-q16",
    prompt: "Amma uses this recipe card to make poha for 10 people. How many grams of peanuts does she need?",
    options: [
      { id: "a", text: "600 g" },
      { id: "b", text: "120 g" },
      { id: "c", text: "66 g" },
      { id: "d", text: "150 g" }
    ],
    answerId: "d",
    explanation: "The card serves 4, so 1 person needs 60 \u00f7 4 = 15 g of peanuts. For 10 people: 10 \u00d7 15 = 150 g. 600 g is tempting if you multiply 60 by 10, but 60 g is already enough for 4 people, not for one.",
    hints: ["The card's amounts are for a group, not one person. Find the peanuts for one person first, then scale up."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 212\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A recipe card for kanda poha that serves 4 people\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"212\" fill=\"#fff\"/>\n  <rect class=\"part card\" x=\"10\" y=\"8\" width=\"360\" height=\"196\" rx=\"10\" fill=\"#fff8e1\" stroke=\"#f9a825\" stroke-width=\"2\"/>\n  <text class=\"title\" x=\"190.0\" y=\"36\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kanda Poha</text>\n  <g class=\"part serves\"><text class=\"label serves-text\" x=\"190.0\" y=\"58\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#6d4c41\">Serves 4 people</text></g>\n  <g class=\"part ingredient\">\n  <text class=\"label item\" x=\"40\" y=\"88\" font-size=\"14\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Poha</text>\n  <text class=\"label qty\" x=\"340\" y=\"88\" font-size=\"14\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">200 g</text>\n  </g>\n  <g class=\"part ingredient\">\n  <text class=\"label item\" x=\"40\" y=\"118\" font-size=\"14\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Onions</text>\n  <text class=\"label qty\" x=\"340\" y=\"118\" font-size=\"14\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">2</text>\n  </g>\n  <g class=\"part ingredient\">\n  <text class=\"label item\" x=\"40\" y=\"148\" font-size=\"14\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Peanuts</text>\n  <text class=\"label qty\" x=\"340\" y=\"148\" font-size=\"14\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">60 g</text>\n  </g>\n  <g class=\"part ingredient\">\n  <text class=\"label item\" x=\"40\" y=\"178\" font-size=\"14\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Lemon</text>\n  <text class=\"label qty\" x=\"340\" y=\"178\" font-size=\"14\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">1</text>\n  </g>\n</svg>", "alt": "Recipe card for Kanda Poha, serves 4 people: Poha 200 g, Onions 2, Peanuts 60 g, Lemon 1."}
  },
  {
    id: "g4-maths-wordprob-a-q17",
    prompt: "A train has 12 coaches with 72 seats in each coach. On Monday, 650 seats were filled. Which question can NOT be answered from these facts?",
    options: [
      { id: "a", text: "How many seats are there in the whole train?" },
      { id: "b", text: "How many seats were empty on Monday?" },
      { id: "c", text: "How many passengers got off at the first station?" },
      { id: "d", text: "How many seats are there in 3 coaches?" }
    ],
    answerId: "c",
    explanation: "Seats in the train (12 \u00d7 72 = 864), empty seats (864 \u2212 650 = 214) and seats in 3 coaches (3 \u00d7 72 = 216) can all be worked out. Nothing tells us about passengers getting off. 'How many seats were empty on Monday?' is tempting because it is not given directly, but it can be found in two steps.",
    hints: ["For each question, try to write a calculation using only the train facts. Which question needs a fact that is never given?"]
  },
  {
    id: "g4-maths-wordprob-a-q18",
    prompt: "Sunita's father is 4 times as old as Sunita. In 5 years' time, their ages will add up to 60. How old is Sunita now?",
    options: [
      { id: "a", text: "12 years" },
      { id: "b", text: "40 years" },
      { id: "c", text: "11 years" },
      { id: "d", text: "10 years" }
    ],
    answerId: "d",
    explanation: "In 5 years both are 5 years older, so today their ages add up to 60 \u2212 10 = 50. Father is 4 parts and Sunita 1 part: 5 parts = 50, so Sunita is 10. 12 years is tempting if you share 60 into 5 parts, but 60 is their total in 5 years, not today.",
    hints: ["Each person gains the same years, so first find their total age today. Then share it using the times-as-old clue."]
  },
  {
    id: "g4-maths-wordprob-a-q19",
    prompt: "Four classes have sapling targets: 4A 60, 4B 60, 4C 75, 4D 75. So far they have planted 4A 45, 4B 52, 4C 58, 4D 75. How many more saplings must be planted to meet every target?",
    options: [
      { id: "a", text: "230" },
      { id: "b", text: "40" },
      { id: "c", text: "17" },
      { id: "d", text: "270" }
    ],
    answerId: "b",
    explanation: "Gaps: 4A 15, 4B 8, 4C 17, 4D 0, so 15 + 8 + 17 = 40 more. (Or 270 \u2212 230 = 40.) 17 is tempting because it is the biggest single gap (4C), but every class's gap must be added.",
    hints: ["Find how far each class is from its own target, then add those gaps together."]
  },
  {
    id: "g4-maths-wordprob-a-q20",
    prompt: "A taxi charges \u20b915 for every km. Mr Shah travels from Anandpur to Ekpur, but he must stop at Bela on the way to collect a parcel. Using the map, what is the least fare he can pay?",
    options: [
      { id: "a", text: "\u20b91,200" },
      { id: "b", text: "\u20b91,275" },
      { id: "c", text: "\u20b91,500" },
      { id: "d", text: "\u20b91,350" }
    ],
    answerId: "b",
    explanation: "Shortest way to Bela: Anandpur\u2013Chandan\u2013Bela = 25 + 10 = 35 km (shorter than the 40 km road). Shortest way on from Bela: Bela\u2013Devgarh\u2013Ekpur = 15 + 35 = 50 km (shorter than 60 km). Total 85 km \u00d7 \u20b915 = \u20b91,275. \u20b91,200 is tempting because 80 km (Anandpur\u2013Chandan\u2013Devgarh\u2013Ekpur) is the shortest trip overall, but that route never passes Bela.",
    hints: ["Split the trip into two parts: to Bela, then from Bela. Find the shortest roads for each part before working out the fare."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 290\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A map of five towns joined by roads marked in kilometres\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"290\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Roads between five towns</text>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 50 160 Q 124 82 230 60\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"108\" y=\"85\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"132\" y=\"100\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">40 km</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 50 160 Q 82 216 170 240\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"72\" y=\"197\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"96\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">25 km</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 170 240 Q 188 150 230 60\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"170\" y=\"139\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"194\" y=\"154\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">10 km</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 230 60 Q 325 62 420 120\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"301\" y=\"65\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"325\" y=\"80\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">60 km</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 170 240 Q 245 263 320 230\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"221\" y=\"238\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"245\" y=\"253\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">20 km</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 230 60 Q 291 137 320 230\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"259\" y=\"130\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"283\" y=\"145\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">15 km</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 320 230 Q 398 191 420 120\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"360\" y=\"172\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"384\" y=\"187\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">35 km</text>\n  </g>\n  <g class=\"part place\"><circle cx=\"50\" cy=\"160\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"50\" y=\"145\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Anandpur</text></g>\n  <g class=\"part place\"><circle cx=\"230\" cy=\"60\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"230\" y=\"86\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Bela</text></g>\n  <g class=\"part place\"><circle cx=\"170\" cy=\"240\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"170\" y=\"225\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Chandan</text></g>\n  <g class=\"part place\"><circle cx=\"320\" cy=\"230\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"320\" y=\"215\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Devgarh</text></g>\n  <g class=\"part place\"><circle cx=\"420\" cy=\"120\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"420\" y=\"105\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Ekpur</text></g>\n  <text class=\"label small\" x=\"446\" y=\"280\" font-size=\"11\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#757575\">Map not drawn to scale</text>\n</svg>", "alt": "A map. Roads: Anandpur\u2013Bela 40 km, Anandpur\u2013Chandan 25 km, Chandan\u2013Bela 10 km, Bela\u2013Ekpur 60 km, Chandan\u2013Devgarh 20 km, Bela\u2013Devgarh 15 km, Devgarh\u2013Ekpur 35 km. Not drawn to scale."}
  },
  {
    id: "g4-maths-wordprob-a-q21",
    prompt: "A sweet shop packs kaju barfi only in full boxes of 4 pieces or 6 pieces. Ravi needs exactly 26 pieces for a party. What is the smallest number of boxes he can buy?",
    options: [
      { id: "a", text: "4 boxes" },
      { id: "b", text: "5 boxes" },
      { id: "c", text: "6 boxes" },
      { id: "d", text: "7 boxes" }
    ],
    answerId: "b",
    explanation: "Use as many 6s as possible while the rest fits into 4s: 6 \u00d7 3 = 18 and 26 \u2212 18 = 8 = 4 \u00d7 2, so 3 + 2 = 5 boxes. (6 \u00d7 4 = 24 leaves 2, which no box can hold.) 4 boxes is tempting because 26 \u00f7 6 is just over 4, but no 4 boxes make exactly 26.",
    hints: ["Try using as many of the bigger boxes as you can, checking that the pieces left over fill smaller boxes exactly."]
  },
  {
    id: "g4-maths-wordprob-a-q22",
    prompt: "Grandpa shares \u20b91,200 among Zoya, Aman and Priya. Aman gets \u20b9100 more than Zoya, and Priya gets twice as much as Aman. The bar model shows this. How much does Priya get?",
    options: [
      { id: "a", text: "\u20b9650" },
      { id: "b", text: "\u20b9400" },
      { id: "c", text: "\u20b9800" },
      { id: "d", text: "\u20b9450" }
    ],
    answerId: "a",
    explanation: "The model has 4 equal unknown parts and three \u20b9100 pieces. 1,200 \u2212 300 = 900, so each part is 900 \u00f7 4 = \u20b9225. Aman gets 225 + 100 = \u20b9325 and Priya 2 \u00d7 325 = \u20b9650. \u20b9400 is tempting because 1,200 \u00f7 3 = 400, but the three shares are not equal.",
    hints: ["Take the \u20b9100 pieces away from the total first. Then share what is left equally among the unknown parts."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 224\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar model of \u20b91,200 shared among Zoya, Aman and Priya\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"224\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Grandpa's \u20b91,200</text>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"68.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Zoya</text>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"100\" y=\"46\" width=\"114.231\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"157.115\" y=\"68.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  </g>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"124.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Aman</text>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"100\" y=\"102\" width=\"114.231\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"157.115\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg extra\"><rect class=\"part seg-box\" x=\"214.231\" y=\"102\" width=\"50.769\" height=\"34\" rx=\"0\" fill=\"#ffccbc\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"239.615\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text></g>\n  </g>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"180.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Priya</text>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"100\" y=\"158\" width=\"114.231\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"157.115\" y=\"180.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg extra\"><rect class=\"part seg-box\" x=\"214.231\" y=\"158\" width=\"50.769\" height=\"34\" rx=\"0\" fill=\"#ffccbc\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"239.615\" y=\"180.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text></g>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"265\" y=\"158\" width=\"114.231\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"322.115\" y=\"180.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg extra\"><rect class=\"part seg-box\" x=\"379.231\" y=\"158\" width=\"50.769\" height=\"34\" rx=\"0\" fill=\"#ffccbc\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"404.615\" y=\"180.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text></g>\n  </g>\n  <g class=\"part model-scale\"></g>\n</svg>", "alt": "Bar model. Zoya: one unknown part. Aman: one unknown part and \u20b9100. Priya: two unknown parts and two \u20b9100 pieces. All together \u20b91,200."}
  },
  {
    id: "g4-maths-wordprob-a-q23",
    prompt: "A shopkeeper buys a 25 kg sack of sugar for \u20b91,000. He packs it into 500 g packets and sells each packet for \u20b924. How much profit does he make when the whole sack is sold?",
    options: [
      { id: "a", text: "\u20b91,200 profit" },
      { id: "b", text: "\u20b9200 profit" },
      { id: "c", text: "\u20b9400 loss" },
      { id: "d", text: "\u20b9100 profit" }
    ],
    answerId: "b",
    explanation: "25 kg = 25,000 g, and 25,000 \u00f7 500 = 50 packets. Sales = 50 \u00d7 \u20b924 = \u20b91,200. Profit = 1,200 \u2212 1,000 = \u20b9200. \u20b91,200 profit is tempting, but that is the money from sales; the \u20b91,000 he paid must be taken away.",
    hints: ["Change the sack into grams to count the packets. Find the money from selling them, then compare with what he paid."]
  },
  {
    id: "g4-maths-wordprob-a-q24",
    prompt: "The two ticket stubs show the prices at a bird sanctuary. A group of 10 people paid \u20b9840 in all. How many children were in the group?",
    options: [
      { id: "a", text: "4 children" },
      { id: "b", text: "7 children" },
      { id: "c", text: "6 children" },
      { id: "d", text: "5 children" }
    ],
    answerId: "c",
    explanation: "If all 10 were children the cost would be 10 \u00d7 \u20b960 = \u20b9600. The extra \u20b9240 comes from adults, who cost \u20b960 more each, so there are 240 \u00f7 60 = 4 adults and 10 \u2212 4 = 6 children. Check: 4 \u00d7 120 + 6 \u00d7 60 = 480 + 360 = 840. 4 children is tempting, but 4 is the number of adults.",
    hints: ["Imagine everyone paid the cheaper ticket. The extra money tells you how many paid the dearer ticket."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 146\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Two ticket stubs: adult and child\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"146\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"220.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bird sanctuary tickets</text>\n  <g class=\"part ticket\">\n  <rect class=\"part ticket-body\" x=\"20.0\" y=\"40\" width=\"190.0\" height=\"90\" rx=\"8\" fill=\"#e1f5fe\" stroke=\"#0277bd\" stroke-width=\"2\"/>\n  <line class=\"guide perforation\" x1=\"174\" y1=\"44\" x2=\"174\" y2=\"126\" stroke=\"#90a4ae\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <text class=\"label kind\" x=\"97\" y=\"72\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Adult</text>\n  <text class=\"label price\" x=\"97\" y=\"104\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b9120</text>\n  </g>\n  <g class=\"part ticket\">\n  <rect class=\"part ticket-body\" x=\"230.0\" y=\"40\" width=\"190.0\" height=\"90\" rx=\"8\" fill=\"#fce4ec\" stroke=\"#ad1457\" stroke-width=\"2\"/>\n  <line class=\"guide perforation\" x1=\"384\" y1=\"44\" x2=\"384\" y2=\"126\" stroke=\"#90a4ae\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <text class=\"label kind\" x=\"307\" y=\"72\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Child</text>\n  <text class=\"label price\" x=\"307\" y=\"104\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b960</text>\n  </g>\n</svg>", "alt": "Two ticket stubs: Adult \u20b9120, Child \u20b960."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-wordprob-b-q01",
    prompt: "Farhan has exactly \u20b940 at the chai stall. Using the menu board, which two different items can he buy with all of it?",
    options: [
      { id: "a", text: "Filter coffee and Vada pav" },
      { id: "b", text: "Cutting chai and Filter coffee" },
      { id: "c", text: "Filter coffee and Bun-maska" },
      { id: "d", text: "Cutting chai and Bun-maska" }
    ],
    answerId: "d",
    explanation: "Cutting chai + Bun-maska = 15 + 25 = \u20b940 exactly. Filter coffee and Vada pav is tempting because \u20b920 + \u20b920 would make \u20b940, but vada pav costs \u20b922, so that pair is \u20b942.",
    hints: ["Add the prices of each pair of items on the board and look for a pair that uses Farhan's money exactly."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 216\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A chai stall menu board\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"216\" fill=\"#fff\"/>\n  <rect class=\"part board\" x=\"10\" y=\"8\" width=\"400\" height=\"200\" rx=\"10\" fill=\"#37474f\" stroke=\"#5d4037\" stroke-width=\"4\"/>\n  <text class=\"title\" x=\"210.0\" y=\"40\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#fff\">Irani Chai Corner</text>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"74\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Cutting chai</text>\n  <text class=\"label price\" x=\"386\" y=\"74\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b915</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"108\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Filter coffee</text>\n  <text class=\"label price\" x=\"386\" y=\"108\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b920</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"142\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Bun-maska</text>\n  <text class=\"label price\" x=\"386\" y=\"142\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b925</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"176\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Vada pav</text>\n  <text class=\"label price\" x=\"386\" y=\"176\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b922</text>\n  </g>\n</svg>", "alt": "A menu board: Cutting chai \u20b915, Filter coffee \u20b920, Bun-maska \u20b925, Vada pav \u20b922."}
  },
  {
    id: "g4-maths-wordprob-b-q02",
    prompt: "Dev's school is 1 km 250 m from his home. He walks to school and back home every day. How far does he walk in 5 school days?",
    options: [
      { id: "a", text: "6 km 250 m" },
      { id: "b", text: "12 km 500 m" },
      { id: "c", text: "10 km 250 m" },
      { id: "d", text: "12 km 50 m" }
    ],
    answerId: "b",
    explanation: "One day = 1 km 250 m there + 1 km 250 m back = 2 km 500 m. Five days = 5 \u00d7 2 km 500 m = 12 km 500 m. 6 km 250 m is tempting, but that counts only the walk to school and forgets the walk back.",
    hints: ["Find the distance for one whole day, there and back, then multiply by the school days."]
  },
  {
    id: "g4-maths-wordprob-b-q03",
    prompt: "A tailor sews 3 buttons on each kurta. She has 4 packets of buttons with 12 buttons in each packet. How many kurtas can she finish?",
    options: [
      { id: "a", text: "144 kurtas" },
      { id: "b", text: "16 kurtas" },
      { id: "c", text: "36 kurtas" },
      { id: "d", text: "9 kurtas" }
    ],
    answerId: "b",
    explanation: "She has 4 \u00d7 12 = 48 buttons, and 48 \u00f7 3 = 16 kurtas. 144 kurtas is tempting if you multiply all three numbers, but each kurta uses up 3 buttons, so we divide by 3.",
    hints: ["Find the total number of buttons first. Then share them out with the buttons each kurta needs."]
  },
  {
    id: "g4-maths-wordprob-b-q04",
    prompt: "Gita wants to find what she will pay for 3 kg of tomatoes and 2 kg of onions. Tomatoes cost \u20b940 per kg. What else must she know?",
    options: [
      { id: "a", text: "the total weight of the vegetables" },
      { id: "b", text: "the price of 1 kg of tomatoes" },
      { id: "c", text: "the time the shop opens" },
      { id: "d", text: "the price of 1 kg of onions" }
    ],
    answerId: "d",
    explanation: "Tomatoes cost 3 \u00d7 \u20b940 = \u20b9120, but the onion cost cannot be found without the onion price. 'The total weight of the vegetables' is tempting because it sounds useful, but it is already known (5 kg) and does not give any price.",
    hints: ["Try to work out the cost of each vegetable. Which part of the bill can Gita not finish?"]
  },
  {
    id: "g4-maths-wordprob-b-q05",
    prompt: "Mohan is 12 years old and his sister is 4. How old will Mohan be when he is exactly twice as old as his sister?",
    options: [
      { id: "a", text: "24 years" },
      { id: "b", text: "8 years" },
      { id: "c", text: "16 years" },
      { id: "d", text: "20 years" }
    ],
    answerId: "c",
    explanation: "Mohan is always 8 years older. He is twice her age when she is 8 and he is 16 (16 = 2 \u00d7 8). 24 years is tempting because 2 \u00d7 12 = 24, but his sister will also be older then, so the gap stays 8.",
    hints: ["The difference between their ages never changes. When is Mohan's age double his sister's with that same gap?"]
  },
  {
    id: "g4-maths-wordprob-b-q06",
    prompt: "Ali has 135 stamps. Bina has 48 more stamps than Ali, as the bar model shows. How many stamps do they have altogether?",
    options: [
      { id: "a", text: "318 stamps" },
      { id: "b", text: "183 stamps" },
      { id: "c", text: "231 stamps" },
      { id: "d", text: "270 stamps" }
    ],
    answerId: "a",
    explanation: "Bina has 135 + 48 = 183. Together: 135 + 183 = 318 stamps. 183 stamps is tempting because it is the first answer you get, but that is only Bina's stamps.",
    hints: ["Find Bina's stamps from her bar first, then put both bars together."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 168\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar model comparing Ali's 135 stamps with Bina's, which is 48 longer\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"168\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Stamp collections</text>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"68.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Ali</text>\n  <g class=\"part seg known\"><rect class=\"part seg-box\" x=\"100\" y=\"46\" width=\"191.803\" height=\"34\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"195.902\" y=\"68.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">135</text></g>\n  </g>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"124.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Bina</text>\n  <g class=\"part seg known\"><rect class=\"part seg-box\" x=\"100\" y=\"102\" width=\"191.803\" height=\"34\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"195.902\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">135</text></g>\n  <g class=\"part seg extra\"><rect class=\"part seg-box\" x=\"291.803\" y=\"102\" width=\"68.197\" height=\"34\" rx=\"0\" fill=\"#ffccbc\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"325.902\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">48</text></g>\n  </g>\n  <g class=\"part model-scale\"></g>\n</svg>", "alt": "Bar model: Ali's bar is 135. Bina's bar is the same 135 plus an extra 48."}
  },
  {
    id: "g4-maths-wordprob-b-q07",
    prompt: "Prem had some stickers. His friend gave him 9 more. Then he shared all of them equally with his sister, and each of them got 16. How many stickers did Prem have at first?",
    options: [
      { id: "a", text: "23 stickers" },
      { id: "b", text: "25 stickers" },
      { id: "c", text: "41 stickers" },
      { id: "d", text: "7 stickers" }
    ],
    answerId: "a",
    explanation: "After sharing, each had 16, so together there were 2 \u00d7 16 = 32. Before his friend's 9, Prem had 32 \u2212 9 = 23. 25 stickers is tempting (16 + 9), but 16 was only half of the stickers after sharing.",
    hints: ["Undo the sharing first to find how many stickers there were before it. Then undo the friend's gift."]
  },
  {
    id: "g4-maths-wordprob-b-q08",
    prompt: "Riya walks around the park paths from the Gate to the Pond, then to the Swings, and back to the Gate. How far does she walk?",
    options: [
      { id: "a", text: "1 km 40 m" },
      { id: "b", text: "14 km" },
      { id: "c", text: "1 km 100 m" },
      { id: "d", text: "1 km 400 m" }
    ],
    answerId: "d",
    explanation: "450 + 300 + 650 = 1,400 m, and 1,400 m = 1 km 400 m. 1 km 40 m is tempting if you write the 4 hundreds as 40, but 400 m is left over after taking out 1,000 m.",
    hints: ["Add all three path lengths in metres, then change the total into kilometres and metres."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A park map with paths between the Gate, the Pond and the Swings\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"300\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Paths in Nehru Park</text>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 70 220 Q 121 134 220 80\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"109\" y=\"131\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"133\" y=\"146\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">450 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 220 80 Q 329 120 390 200\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"293\" y=\"119\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"317\" y=\"134\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">300 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 390 200 Q 230 262 70 220\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"206\" y=\"225\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"230\" y=\"240\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">650 m</text>\n  </g>\n  <g class=\"part place\"><circle cx=\"70\" cy=\"220\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"70\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Gate</text></g>\n  <g class=\"part place\"><circle cx=\"220\" cy=\"80\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"220\" y=\"65\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Pond</text></g>\n  <g class=\"part place\"><circle cx=\"390\" cy=\"200\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"390\" y=\"185\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Swings</text></g>\n  <text class=\"label small\" x=\"446\" y=\"290\" font-size=\"11\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#757575\">Map not drawn to scale</text>\n</svg>", "alt": "A park map. Gate to Pond 450 m. Pond to Swings 300 m. Swings to Gate 650 m. Not drawn to scale."}
  },
  {
    id: "g4-maths-wordprob-b-q09",
    prompt: "A packet of 30 jalebis is shared among some children. Each child gets 4 jalebis, and 2 jalebis are left over. How many children are there?",
    options: [
      { id: "a", text: "7 children" },
      { id: "b", text: "8 children" },
      { id: "c", text: "6 children" },
      { id: "d", text: "120 children" }
    ],
    answerId: "a",
    explanation: "2 are left over, so 30 \u2212 2 = 28 jalebis were shared, and 28 \u00f7 4 = 7 children. 8 children is tempting because 30 \u00f7 4 is between 7 and 8, but an eighth child would need 4 more jalebis and only 2 are left.",
    hints: ["Take away the jalebis left over first. Then see how many children can get their share from the rest."]
  },
  {
    id: "g4-maths-wordprob-b-q10",
    prompt: "On the beach at Puri, Raju collected 48 shells. That is 15 shells fewer than his cousin Amit collected. How many shells did the two cousins collect altogether?",
    options: [
      { id: "a", text: "111 shells" },
      { id: "b", text: "81 shells" },
      { id: "c", text: "63 shells" },
      { id: "d", text: "96 shells" }
    ],
    answerId: "a",
    explanation: "Raju has 15 fewer than Amit, so Amit has 48 + 15 = 63 shells. Together: 48 + 63 = 111 shells. 81 shells is tempting if you take 15 away from 48 because of the word 'fewer', but it is Raju who has fewer, so Amit has more.",
    hints: ["Decide which cousin collected more shells before you work out Amit's shells. Then add the two cousins' shells."]
  },
  {
    id: "g4-maths-wordprob-b-q11",
    prompt: "Four friends had lunch and got this bill. They use the coupon printed on the bill and then share the cost equally. How much does each friend pay?",
    options: [
      { id: "a", text: "\u20b9120" },
      { id: "b", text: "\u20b9135" },
      { id: "c", text: "\u20b9480" },
      { id: "d", text: "\u20b9170" }
    ],
    answerId: "a",
    explanation: "Total = 280 + 90 + 140 = \u20b9510. After the coupon: 510 \u2212 30 = \u20b9480. Shared by 4: 480 \u00f7 4 = \u20b9120 each. \u20b9135 is tempting if you add the \u20b930 instead of taking it off (540 \u00f7 4), but a coupon lowers the bill.",
    hints: ["Use the coupon on the bill total first, then share what is left equally among the friends."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 250\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A restaurant bill with a coupon\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"250\" fill=\"#fff\"/>\n  <rect class=\"part bill-paper\" x=\"10\" y=\"8\" width=\"420\" height=\"234\" rx=\"6\" fill=\"#fffef7\" stroke=\"#bdbdbd\" stroke-width=\"1.5\"/>\n  <text class=\"title\" x=\"220.0\" y=\"34\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Udupi Tiffin Room</text>\n  <text class=\"label small\" x=\"220.0\" y=\"52\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#757575\">CASH BILL</text>\n  <text class=\"label\" x=\"24\" y=\"70\" font-size=\"12.5\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">Item</text>\n  <text class=\"label\" x=\"210\" y=\"70\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Qty</text>\n  <text class=\"label\" x=\"300\" y=\"70\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Rate (\u20b9)</text>\n  <text class=\"label\" x=\"420\" y=\"70\" font-size=\"12.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Amount (\u20b9)</text>\n  <line class=\"guide\" x1=\"20\" y1=\"78\" x2=\"420\" y2=\"78\" stroke=\"#9e9e9e\" stroke-width=\"1\"/>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"24\" y=\"100\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Masala dosa</text>\n  <text class=\"label cell qty\" x=\"210\" y=\"100\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">4</text>\n  <text class=\"label cell rate\" x=\"300\" y=\"100\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">70</text>\n  <text class=\"label cell amount\" x=\"420\" y=\"100\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">280</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"24\" y=\"130\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Idli plate</text>\n  <text class=\"label cell qty\" x=\"210\" y=\"130\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">2</text>\n  <text class=\"label cell rate\" x=\"300\" y=\"130\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">45</text>\n  <text class=\"label cell amount\" x=\"420\" y=\"130\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">90</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"24\" y=\"160\" font-size=\"13\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Sweet lime juice</text>\n  <text class=\"label cell qty\" x=\"210\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">4</text>\n  <text class=\"label cell rate\" x=\"300\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">35</text>\n  <text class=\"label cell amount\" x=\"420\" y=\"160\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#333\">140</text>\n  </g>\n  <line class=\"guide\" x1=\"20\" y1=\"178\" x2=\"420\" y2=\"178\" stroke=\"#9e9e9e\" stroke-width=\"1\"/>\n  <g class=\"part bill-total\"><text class=\"label\" x=\"300\" y=\"198\" font-size=\"13.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Total</text><text class=\"label cell total\" x=\"420\" y=\"198\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">510</text></g>\n  <g class=\"part offer\"><rect class=\"part offer-box\" x=\"24\" y=\"210\" width=\"392\" height=\"26\" rx=\"4\" fill=\"#fff3e0\" stroke=\"#fb8c00\" stroke-width=\"1\"/><text class=\"label offer-text\" x=\"220.0\" y=\"228\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e65100\">Coupon: \u20b930 off this bill</text></g>\n</svg>", "alt": "A bill: Masala dosa 4 at \u20b970 = \u20b9280; Idli plate 2 at \u20b945 = \u20b990; Sweet lime juice 4 at \u20b935 = \u20b9140; Total \u20b9510. Coupon: \u20b930 off this bill."}
  },
  {
    id: "g4-maths-wordprob-b-q12",
    prompt: "A juice stall fills two 6 L cans with nimbu pani. It pours the drink into 250 mL glasses and sells each glass for \u20b915. How much money does it get when both cans are sold?",
    options: [
      { id: "a", text: "\u20b9360" },
      { id: "b", text: "\u20b9180" },
      { id: "c", text: "\u20b990" },
      { id: "d", text: "\u20b9720" }
    ],
    answerId: "d",
    explanation: "Two cans = 12 L = 12,000 mL, and 12,000 \u00f7 250 = 48 glasses. 48 \u00d7 \u20b915 = \u20b9720. \u20b9360 is tempting, but that is the money from only one can.",
    hints: ["Change the litres in both cans into millilitres, find how many glasses that fills, then work out the money."]
  },
  {
    id: "g4-maths-wordprob-b-q13",
    prompt: "Lata tells the story of her laddoos in three pictures. How many laddoos were on her tray to begin with?",
    options: [
      { id: "a", text: "32 laddoos" },
      { id: "b", text: "36 laddoos" },
      { id: "c", text: "72 laddoos" },
      { id: "d", text: "28 laddoos" }
    ],
    answerId: "b",
    explanation: "Before eating she had 20 + 4 = 24. Giving away one-third left two-thirds, so 24 is two-thirds of the tray: one-third is 12, and the whole tray is 36. 32 laddoos is tempting if you add one-third of 24 (24 + 8), but the third was a third of the whole tray, not of 24.",
    hints: ["Undo the last panel first. Then remember the laddoos left after the middle panel are two parts out of three."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 480 200\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A three-panel comic strip about Lata's laddoos\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"480\" height=\"200\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"240.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Lata's laddoos</text>\n  <g class=\"part panel\">\n  <rect class=\"part panel-box\" x=\"14\" y=\"38\" width=\"146.667\" height=\"150\" rx=\"8\" fill=\"#fff\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <text class=\"label small\" x=\"28\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">1</text>\n  <circle class=\"part face\" cx=\"87.333\" cy=\"78\" r=\"16\" fill=\"#ffe0b2\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <path class=\"part smile\" d=\"M 80.333 82 Q 87.333 89 94.333 82\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label caption\" x=\"87.333\" y=\"118\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">I made a big tray</text>\n  <text class=\"label caption\" x=\"87.333\" y=\"135\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">of laddoos!</text>\n  </g>\n  <text class=\"label arrow\" x=\"163.667\" y=\"116\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">\u203a</text>\n  <g class=\"part panel\">\n  <rect class=\"part panel-box\" x=\"166.667\" y=\"38\" width=\"146.667\" height=\"150\" rx=\"8\" fill=\"#fff\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <text class=\"label small\" x=\"180.667\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">2</text>\n  <circle class=\"part face\" cx=\"240\" cy=\"78\" r=\"16\" fill=\"#ffe0b2\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <path class=\"part smile\" d=\"M 233 82 Q 240 89 247 82\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label caption\" x=\"240\" y=\"118\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">I gave one-third of</text>\n  <text class=\"label caption\" x=\"240\" y=\"135\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">them to neighbours.</text>\n  </g>\n  <text class=\"label arrow\" x=\"316.333\" y=\"116\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">\u203a</text>\n  <g class=\"part panel\">\n  <rect class=\"part panel-box\" x=\"319.333\" y=\"38\" width=\"146.667\" height=\"150\" rx=\"8\" fill=\"#fff\" stroke=\"#37474f\" stroke-width=\"2\"/>\n  <text class=\"label small\" x=\"333.333\" y=\"58\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#90a4ae\">3</text>\n  <circle class=\"part face\" cx=\"392.667\" cy=\"78\" r=\"16\" fill=\"#ffe0b2\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <path class=\"part smile\" d=\"M 385.667 82 Q 392.667 89 399.667 82\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label caption\" x=\"392.667\" y=\"118\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Then I ate 4.</text>\n  <text class=\"label caption\" x=\"392.667\" y=\"135\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Now 20 are left!</text>\n  </g>\n</svg>", "alt": "Panel 1: Lata made a tray of laddoos. Panel 2: she gave one-third of them to neighbours. Panel 3: she ate 4, and 20 are left."}
  },
  {
    id: "g4-maths-wordprob-b-q14",
    prompt: "A train and a car both leave Delhi at the same moment for Agra, 210 km away. The train covers 60 km each hour and the car 70 km each hour. How much sooner does the car reach Agra?",
    options: [
      { id: "a", text: "10 minutes" },
      { id: "b", text: "1 hour" },
      { id: "c", text: "30 minutes" },
      { id: "d", text: "3 hours" }
    ],
    answerId: "c",
    explanation: "Train: 210 \u00f7 60 = 3\u00bd hours. Car: 210 \u00f7 70 = 3 hours. The car arrives \u00bd hour = 30 minutes sooner. 10 minutes is tempting because the speeds differ by 10 km each hour, but that is a difference in speed, not in time.",
    hints: ["Work out the journey time for the train and for the car separately, then find the difference between the two times."]
  },
  {
    id: "g4-maths-wordprob-b-q15",
    prompt: "A school orders 156 sports T-shirts. They come in cartons of 12, and each carton costs \u20b91,800. The shop also charges \u20b9780 to deliver the whole order. Including delivery, what does one T-shirt cost the school?",
    options: [
      { id: "a", text: "\u20b9150" },
      { id: "b", text: "\u20b923,400" },
      { id: "c", text: "\u20b924,180" },
      { id: "d", text: "\u20b9155" }
    ],
    answerId: "d",
    explanation: "One T-shirt costs 1,800 \u00f7 12 = \u20b9150. The delivery is shared by all 156 T-shirts: 780 \u00f7 156 = \u20b95 each. So each T-shirt costs 150 + 5 = \u20b9155. (Check: 13 cartons \u00d7 1,800 + 780 = 24,180, and 24,180 \u00f7 156 = 155.) \u20b9150 is tempting, but it leaves out each T-shirt's share of the delivery charge.",
    hints: ["Find the price of one T-shirt from a carton. Then share the delivery charge equally among all the T-shirts and add."]
  },
  {
    id: "g4-maths-wordprob-b-q16",
    prompt: "Kiran takes the bus to school and back home on 22 days this month. Using the fare card, how much does she save by buying the monthly pass instead of single tickets?",
    options: [
      { id: "a", text: "\u20b9350" },
      { id: "b", text: "\u20b91,100" },
      { id: "c", text: "\u20b9200" },
      { id: "d", text: "\u20b9875" }
    ],
    answerId: "c",
    explanation: "She makes 2 trips a day, so 22 \u00d7 2 = 44 trips. Single tickets cost 44 \u00d7 \u20b925 = \u20b91,100. The pass saves 1,100 \u2212 900 = \u20b9200. \u20b9350 is tempting if you count only one trip a day (22 \u00d7 25 = 550, then 900 \u2212 550), but each school day has two trips.",
    hints: ["Count the bus trips she makes this month, find the cost of single tickets, then compare with the pass."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 148\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bus fare card with a one-way ticket price and a monthly pass price\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"148\" fill=\"#fff\"/>\n  <rect class=\"part board\" x=\"10\" y=\"8\" width=\"400\" height=\"132\" rx=\"10\" fill=\"#1565c0\" stroke=\"#5d4037\" stroke-width=\"4\"/>\n  <text class=\"title\" x=\"210.0\" y=\"40\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#fff\">City Bus Fares</text>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"74\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Bus ticket (one way)</text>\n  <text class=\"label price\" x=\"386\" y=\"74\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b925</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"108\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Monthly bus pass</text>\n  <text class=\"label price\" x=\"386\" y=\"108\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b9900</text>\n  </g>\n</svg>", "alt": "A fare card: Bus ticket (one way) \u20b925. Monthly bus pass \u20b9900."}
  },
  {
    id: "g4-maths-wordprob-b-q17",
    prompt: "A farmer's three fields gave 245 kg, 310 kg and 198 kg of wheat. He sold only the wheat from the second field, at \u20b928 per kg, and paid \u20b9480 to carry it to the market. How much money did he have left from the sale?",
    options: [
      { id: "a", text: "\u20b920,604" },
      { id: "b", text: "\u20b98,680" },
      { id: "c", text: "\u20b98,200" },
      { id: "d", text: "\u20b96,380" }
    ],
    answerId: "c",
    explanation: "Only the second field's wheat was sold: 310 \u00d7 28 = \u20b98,680. Taking off the \u20b9480 transport leaves \u20b98,200. \u20b920,604 is tempting if you add all three fields first (753 kg \u00d7 28 \u2212 480), but the other two fields' wheat was not sold.",
    hints: ["Pick out only the wheat that was sold and find the money for it. Then take off what the farmer paid to carry it."]
  },
  {
    id: "g4-maths-wordprob-b-q18",
    prompt: "The ages of Mrs Nair and her daughter add up to 44 years. Mrs Nair is 28 years older than her daughter. How old is the daughter?",
    options: [
      { id: "a", text: "16 years" },
      { id: "b", text: "8 years" },
      { id: "c", text: "22 years" },
      { id: "d", text: "36 years" }
    ],
    answerId: "b",
    explanation: "Take away the 28-year gap: 44 \u2212 28 = 16 is two equal daughter-ages, so the daughter is 16 \u00f7 2 = 8 (and Mrs Nair 36). 16 years is tempting because it is 44 \u2212 28, but that is the daughter's age counted twice.",
    hints: ["Remove the age gap from the total. What is left is the daughter's age counted twice."]
  },
  {
    id: "g4-maths-wordprob-b-q19",
    prompt: "The milkman's card for one week shows: Mon 2 L, Tue 1 L 500 mL, Wed 2 L, Thu 2 L 500 mL, Fri 1 L 500 mL, Sat 2 L. Milk costs \u20b956 per litre. What is the bill for the week?",
    options: [
      { id: "a", text: "\u20b9560" },
      { id: "b", text: "\u20b9644" },
      { id: "c", text: "\u20b9672" },
      { id: "d", text: "\u20b9588" }
    ],
    answerId: "b",
    explanation: "The whole litres add to 2 + 1 + 2 + 2 + 1 + 2 = 10 L, and the three 500 mL parts make 1 L 500 mL, so the total is 11\u00bd L. 11 \u00d7 56 = 616 and half a litre is \u20b928, so the bill is \u20b9644. \u20b9560 is tempting if you add only the whole litres, but the 500 mL parts must be paid for too.",
    hints: ["Add the whole litres, then put the millilitre parts together. Change them into litres before working out the cost."]
  },
  {
    id: "g4-maths-wordprob-b-q20",
    prompt: "A delivery boy starts at the Shop, takes parcels to Pari's house and Qadir's house in any order, and comes back to the Shop. Using the map, what is the shortest total distance he can ride?",
    options: [
      { id: "a", text: "6 km 900 m" },
      { id: "b", text: "5 km" },
      { id: "c", text: "5 km 300 m" },
      { id: "d", text: "4 km 100 m" }
    ],
    answerId: "c",
    explanation: "Shop \u2192 Pari's house 1 km 200 m; Pari's house \u2192 Chowk \u2192 Qadir's house 800 m + 900 m = 1 km 700 m (shorter than the 2 km 600 m road); Qadir's house \u2192 Chowk \u2192 Shop 900 m + 1 km 500 m = 2 km 400 m (shorter than 3 km 100 m). Total 1 km 200 m + 1 km 700 m + 2 km 400 m = 5 km 300 m. 6 km 900 m is tempting because it uses the three direct roads, but going through the Chowk is shorter twice.",
    hints: ["For each part of the delivery trip, compare the direct road with the way through the Chowk. Add the shorter choices."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 290\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A map with roads between the Shop, Pari's house, Qadir's house and the Chowk\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"290\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Delivery roads</text>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 60 175 Q 113.5 134 215 125\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"83.5\" y=\"131\" width=\"84\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"125.5\" y=\"146\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">1 km 200 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 60 175 Q 132.5 239 245 255\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"100.5\" y=\"216\" width=\"84\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"142.5\" y=\"231\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">1 km 500 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 215 125 Q 327.5 122 400 175\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"275.5\" y=\"125\" width=\"84\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"317.5\" y=\"140\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">2 km 600 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 215 125 Q 246 190 245 255\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"214\" y=\"179\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"238\" y=\"194\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">800 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 245 255 Q 342.5 235 400 175\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"308.5\" y=\"214\" width=\"48\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"332.5\" y=\"229\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">900 m</text>\n  </g>\n  <g class=\"part road\">\n  <path class=\"part road-line\" d=\"M 60 175 Q 230 -75 400 175\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <rect class=\"part road-tag\" x=\"188\" y=\"39\" width=\"84\" height=\"20\" rx=\"4\" fill=\"#fff\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label dist\" x=\"230\" y=\"54\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#4e342e\">3 km 100 m</text>\n  </g>\n  <g class=\"part place\"><circle cx=\"60\" cy=\"175\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"60\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Shop</text></g>\n  <g class=\"part place\"><circle cx=\"215\" cy=\"125\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"215\" y=\"110\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Pari's house</text></g>\n  <g class=\"part place\"><circle cx=\"400\" cy=\"175\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"400\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Qadir's house</text></g>\n  <g class=\"part place\"><circle cx=\"245\" cy=\"255\" r=\"9\" fill=\"#1e88e5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text class=\"label place-name\" x=\"245\" y=\"240\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d47a1\">Chowk</text></g>\n  <text class=\"label small\" x=\"446\" y=\"280\" font-size=\"11\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#757575\">Map not drawn to scale</text>\n</svg>", "alt": "A map. Shop\u2013Pari's house 1 km 200 m. Shop\u2013Chowk 1 km 500 m. Pari's house\u2013Qadir's house 2 km 600 m. Pari's house\u2013Chowk 800 m. Chowk\u2013Qadir's house 900 m. Shop\u2013Qadir's house 3 km 100 m. Not drawn to scale."}
  },
  {
    id: "g4-maths-wordprob-b-q21",
    prompt: "Kunal, Leela and Mithun have \u20b9100 altogether. Mithun has exactly as much as Kunal and Leela put together. Kunal has \u20b910 more than Leela. How much money does Leela have?",
    options: [
      { id: "a", text: "\u20b930" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b925" },
      { id: "d", text: "\u20b945" }
    ],
    answerId: "b",
    explanation: "Mithun equals the other two together, so he has half of \u20b9100 = \u20b950, and Kunal + Leela = \u20b950. Taking away Kunal's extra \u20b910 leaves \u20b940 to split equally, so Leela has \u20b920 (Kunal \u20b930). \u20b930 is tempting, but that is Kunal's money; Leela is the one with \u20b910 less.",
    hints: ["Mithun's money equals the other two together, so first find Mithun's share of the \u20b9100. Then split the rest using the last clue."]
  },
  {
    id: "g4-maths-wordprob-b-q22",
    prompt: "Ravi and Sunil share \u20b9960 so that for every \u20b93 Ravi gets, Sunil gets \u20b95. The bar model shows their shares. How much more does Sunil get than Ravi?",
    options: [
      { id: "a", text: "\u20b9600" },
      { id: "b", text: "\u20b9120" },
      { id: "c", text: "\u20b9240" },
      { id: "d", text: "\u20b9480" }
    ],
    answerId: "c",
    explanation: "There are 3 + 5 = 8 equal parts, so each part is 960 \u00f7 8 = \u20b9120. Sunil has 2 more parts than Ravi: 2 \u00d7 120 = \u20b9240. \u20b9600 is tempting, but that is Sunil's whole share, not how much more he gets.",
    hints: ["Count all the equal parts in both bars and find what one part is worth. Then compare the two bars part by part."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 168\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar model with Ravi's share as 3 equal parts and Sunil's as 5 equal parts\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"168\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sharing \u20b9960</text>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"68.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Ravi</text>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"100\" y=\"46\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"133\" y=\"68.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"166\" y=\"46\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"199\" y=\"68.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"232\" y=\"46\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"265\" y=\"68.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  </g>\n  <g class=\"part model-bar\">\n  <text class=\"label bar-name\" x=\"90\" y=\"124.0\" font-size=\"13.5\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Sunil</text>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"100\" y=\"102\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"133\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"166\" y=\"102\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"199\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"232\" y=\"102\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"265\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"298\" y=\"102\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"331\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  <g class=\"part seg unit\"><rect class=\"part seg-box\" x=\"364\" y=\"102\" width=\"66\" height=\"34\" rx=\"0\" fill=\"#c8e6c9\" stroke=\"#37474f\" stroke-width=\"1.5\"/><text class=\"label seg-text\" x=\"397\" y=\"124.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">?</text></g>\n  </g>\n  <g class=\"part model-scale\"></g>\n</svg>", "alt": "Bar model: Ravi's bar has 3 equal parts and Sunil's bar has 5 equal parts of the same size. Together they are \u20b9960."}
  },
  {
    id: "g4-maths-wordprob-b-q23",
    prompt: "A fruit seller had some bananas. In the morning he sold half of them and then 2 more. In the afternoon he sold half of what was left and then 2 more. Now 10 bananas are left. How many did he start with?",
    options: [
      { id: "a", text: "52 bananas" },
      { id: "b", text: "46 bananas" },
      { id: "c", text: "40 bananas" },
      { id: "d", text: "48 bananas" }
    ],
    answerId: "a",
    explanation: "Undo the afternoon: 10 + 2 = 12, which was half, so 24 were left after the morning. Undo the morning: 24 + 2 = 26, which was half, so he started with 52. 46 bananas is tempting if you double before adding back the 2 each time, but the 2 extra were sold last, so they must be added back first.",
    hints: ["Work from the end. At each stage, put back the extra bananas first, then undo the halving."]
  },
  {
    id: "g4-maths-wordprob-b-q24",
    prompt: "Mrs Gupta needs exactly 12 kg of mangoes for a wedding. Using the stall's board, what is the least she can pay?",
    options: [
      { id: "a", text: "\u20b9640" },
      { id: "b", text: "\u20b9620" },
      { id: "c", text: "\u20b9720" },
      { id: "d", text: "\u20b9600" }
    ],
    answerId: "d",
    explanation: "An offer pack gives 6 kg for the price of 5 kg: 5 \u00d7 \u20b960 = \u20b9300, which is cheaper than a \u20b9320 gift box. Two offer packs give 12 kg for \u20b9600. \u20b9640 is tempting because two gift boxes make exactly 12 kg, but each box costs \u20b920 more than an offer pack.",
    hints: ["Work out what one offer pack costs in rupees, then compare it with a gift box before choosing how to make up the mangoes."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 420 182\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A mango stall board with a loose price, an offer pack and a gift box\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"420\" height=\"182\" fill=\"#fff\"/>\n  <rect class=\"part board\" x=\"10\" y=\"8\" width=\"400\" height=\"166\" rx=\"10\" fill=\"#e65100\" stroke=\"#5d4037\" stroke-width=\"4\"/>\n  <text class=\"title\" x=\"210.0\" y=\"40\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#fff\">Ratnagiri Mango Stall</text>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"74\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Mangoes (loose)</text>\n  <text class=\"label price\" x=\"386\" y=\"74\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b960 per kg</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"108\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Offer pack</text>\n  <text class=\"label price\" x=\"386\" y=\"108\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">Pay for 5 kg, get 6 kg</text>\n  </g>\n  <g class=\"part price-row\">\n  <text class=\"label item\" x=\"34\" y=\"142\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#fff\">Gift box (6 kg)</text>\n  <text class=\"label price\" x=\"386\" y=\"142\" font-size=\"15\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#fff59d\">\u20b9320</text>\n  </g>\n</svg>", "alt": "A board: Mangoes (loose) \u20b960 per kg. Offer pack: pay for 5 kg, get 6 kg. Gift box (6 kg) \u20b9320."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "🛒", "title": "Maths in real life", "body": ["Shopping bills, bus fares, recipes and road trips are all stories we can solve step by step.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Shopping bills, bus fares, recipes and road trips are all stories we can solve step by step. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Read, Picture, Plan", "steps": ["Every word problem has a story. First find what the question is asking, then find the facts you need.", "A quick picture, like a bar model, helps you see which numbers to join and which to compare.", "Check: Rani has 25 stickers and gets 17 more. Which operation joins the two amounts?"], "punchline": "Answer: Addition", "visual": "none", "speak": "Every word problem has a story. First find what the question is asking, then find the facts you need. A quick picture, like a bar model, helps you see which numbers to join and which to compare."},
  {"id": "s2", "type": "demo", "title": "Choose the Operation", "steps": ["Joining or 'in all' means add. 'How many more', 'how many are left' or 'difference' means subtract.", "Equal groups mean multiply. Sharing equally or 'how many groups' means divide.", "Check: 36 pencils are shared equally among 4 children. How many does each get?"], "punchline": "Answer: 9", "visual": "none", "speak": "Joining or 'in all' means add. 'How many more', 'how many are left' or 'difference' means subtract. Equal groups mean multiply. Sharing equally or 'how many groups' means divide."},
  {"id": "s3", "type": "demo", "title": "Two and Three Steps", "steps": ["Many problems need more than one step. Find a middle answer first, then use it in the next step.", "Write each step on its own line so you do not stop too early.", "Check: Each box has 6 eggs. 4 boxes are bought and 5 eggs break. How many eggs are left?"], "punchline": "Answer: 19", "visual": "none", "speak": "Many problems need more than one step. Find a middle answer first, then use it in the next step. Write each step on its own line so you do not stop too early."},
  {"id": "s4", "type": "demo", "title": "Units Inside the Story", "steps": ["Before you add, subtract or divide, make the units match: change km to m, kg to g or L to mL.", "Always write the unit in your answer, such as km, kg, ₹ or minutes.", "Check: How many 250 mL glasses can be filled from 1 L of juice?"], "punchline": "Answer: 4", "visual": "none", "speak": "Before you add, subtract or divide, make the units match: change km to m, kg to g or L to mL. Always write the unit in your answer, such as km, kg, ₹ or minutes."},
  {"id": "s5", "type": "demo", "title": "Work Backwards", "steps": ["When you know the end of a story but not the start, undo each step from the last one to the first.", "Undo means do the opposite: add back what was spent, and double what was halved.", "Check: Ravi spent ₹15 and has ₹35 left. How much did he have at first?"], "punchline": "Answer: ₹50", "visual": "none", "speak": "When you know the end of a story but not the start, undo each step from the last one to the first. Undo means do the opposite: add back what was spent, and double what was halved."},
  {"id": "s6", "type": "demo", "title": "Extra and Missing Facts", "steps": ["Some problems give facts you do not need. Cross them out!", "Sometimes a fact is missing, and the question cannot be answered until you know it.", "Check: A van carries 10 children on each trip and makes 2 trips. The van is blue. Which fact is not needed?"], "punchline": "Answer: The van is blue", "visual": "none", "speak": "Some problems give facts you do not need. Cross them out! Sometimes a fact is missing, and the question cannot be answered until you know it."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "A packet of 6 pencils costs ₹30. Asha buys 3 packets and a ₹25 eraser set. How much does she spend?", "options": [{"id": "a", "text": "₹55"}, {"id": "b", "text": "₹90"}, {"id": "c", "text": "₹180"}, {"id": "d", "text": "₹115"}], "answerId": "d", "why": "First the packets: 3 × ₹30 = ₹90. Then add the eraser set: ₹90 + ₹25 = ₹115. ₹90 is tempting, but it stops after the first step and leaves out the eraser set.", "visual": "none", "speak": "A packet of six pencils costs thirty rupees. Asha buys three packets and a twenty-five rupee eraser set. How much does she spend?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Find the question first", "Pick the operation from the story", "Solve in steps, one line each", "Make the units match", "Work backwards by undoing", "Cross out facts you do not need"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g4MathsWordProblems: ChapterDef = {
  id: "g4-word-problems",
  title: "Everyday Word Problems",
  emoji: "\ud83d\uded2",
  blurb: "Bills, offers, maps, bar models & working backwards",
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
  paperTopics: ["add-sub", "multiply-basics", "measurement"],
};

export const g4MathsWordProblemsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
