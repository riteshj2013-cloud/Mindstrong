import type { ChapterDef, PrepQuestion } from "../types";

/** Money - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-maths-money-a-q01",
    prompt: "Akash wants to buy a \u20b930 ball. His purse has the money shown. How much more money does he need?",
    options: [
      { id: "a", text: "\u20b93" },
      { id: "b", text: "\u20b927" },
      { id: "c", text: "\u20b913" },
      { id: "d", text: "\u20b97" }
    ],
    answerId: "a",
    explanation: "The purse has \u20b910 + \u20b95 + \u20b95 + \u20b92 + \u20b92 + \u20b92 + \u20b91 = \u20b927. The ball costs \u20b930, so he needs \u20b930 \u2212 \u20b927 = \u20b93 more. \u20b927 is tempting because it is the first number you work out, but that is what he already has, not what is missing.",
    hints: ["Count all of Akash's money first, starting with the note, then find the gap up to the price of the ball."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 194\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A purse with a note and some coins\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"194\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Money in Akash's purse</text>\n  <rect class=\"part purse\" x=\"22\" y=\"40\" width=\"336\" height=\"118\" rx=\"14\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"190\" y=\"176\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Akash's purse</text>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"40\" y=\"52\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"45\" y=\"57\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 48 86 Q 56 80 64 86 Q 72 92 80 86 Q 88 80 96 86 Q 104 92 112 86 Q 120 80 128 86\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"86\" y=\"79\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"52\" y=\"66\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"60\" cy=\"131\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"60\" cy=\"131\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"60\" y=\"135.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"106\" cy=\"131\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"106\" cy=\"131\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"106\" y=\"135.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"151\" cy=\"131\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"151\" cy=\"131\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"151\" y=\"135.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"195\" cy=\"131\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"195\" cy=\"131\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"195\" y=\"135.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"239\" cy=\"131\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"239\" cy=\"131\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"239\" y=\"135.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"281\" cy=\"131\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"281\" cy=\"131\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"281\" y=\"135.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  </g>\n</svg>", "alt": "Akash's purse holds one \u20b910 note, two \u20b95 coins, three \u20b92 coins and one \u20b91 coin."}
  },
  {
    id: "g3-maths-money-a-q02",
    prompt: "Chetan has to put exactly \u20b920 into the temple donation box. Which of these is NOT a way to make exactly \u20b920?",
    options: [
      { id: "a", text: "two \u20b910 notes" },
      { id: "b", text: "three \u20b95 coins and two \u20b92 coins" },
      { id: "c", text: "four \u20b95 coins" },
      { id: "d", text: "a \u20b910 note and five \u20b92 coins" }
    ],
    answerId: "b",
    explanation: "Three \u20b95 coins make \u20b915 and two \u20b92 coins make \u20b94, so together they make only \u20b919, \u20b91 short. 'A \u20b910 note and five \u20b92 coins' is tempting because the coins are small, but five \u20b92 coins make \u20b910, and \u20b910 + \u20b910 = \u20b920 exactly.",
    hints: ["Add up each group of notes and coins for Chetan's donation box; exactly one group falls a little short."]
  },
  {
    id: "g3-maths-money-a-q03",
    prompt: "Darshan's grandmother gives him a 50-paise coin for every page of neat handwriting he finishes. On Sunday he finishes 6 pages. How much money does he get?",
    options: [
      { id: "a", text: "\u20b96" },
      { id: "b", text: "\u20b930" },
      { id: "c", text: "\u20b93" },
      { id: "d", text: "\u20b9300" }
    ],
    answerId: "c",
    explanation: "Two 50-paise coins make 100 paise = \u20b91. Six coins make three such pairs, so he gets \u20b93 (6 \u00d7 50 = 300 paise = \u20b93). \u20b96 is tempting if you count each coin as \u20b91, but a 50-paise coin is only half a rupee.",
    hints: ["Think about how many of grandmother's 50-paise coins make one rupee, then group Darshan's coins that way."]
  },
  {
    id: "g3-maths-money-a-q04",
    prompt: "At a toy stall, Ekta picks the yo-yo and the whistle and hands over a \u20b950 note. What does the stall owner return to her?",
    options: [
      { id: "a", text: "\u20b916" },
      { id: "b", text: "\u20b934" },
      { id: "c", text: "\u20b924" },
      { id: "d", text: "\u20b914" }
    ],
    answerId: "a",
    explanation: "The yo-yo and the whistle cost \u20b925 + \u20b99 = \u20b934. The change is \u20b950 \u2212 \u20b934 = \u20b916. \u20b934 is tempting because it is the total cost, but the question asks for the money she gets back. \u20b924 comes from forgetting to regroup when taking 4 from 0.",
    hints: ["Add only the two prices Ekta needs from the tags, then subtract that from her note, regrouping a ten."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 536 116\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four price tags at a toy stall\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"536\" height=\"116\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"268.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Price tags at the toy stall</text>\n  <g class=\"part tags\">\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"12,73.0 30,44 132,44 132,102 30,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"26\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"81\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Top</text>\n  <text class=\"label value price\" x=\"81\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b918</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"142,73.0 160,44 262,44 262,102 160,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"156\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"211\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Yo-yo</text>\n  <text class=\"label value price\" x=\"211\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b925</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"272,73.0 290,44 392,44 392,102 290,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"286\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"341\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Whistle</text>\n  <text class=\"label value price\" x=\"341\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b99</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"402,73.0 420,44 522,44 522,102 420,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"416\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"471\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ball</text>\n  <text class=\"label value price\" x=\"471\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b932</text>\n  </g>\n  </g>\n</svg>", "alt": "Four price tags: Top \u20b918, Yo-yo \u20b925, Whistle \u20b99, Ball \u20b932."}
  },
  {
    id: "g3-maths-money-a-q05",
    prompt: "Falguni's canteen sells idlis at \u20b912 each and vadas at \u20b99 each. She can buy either 2 idlis or 3 vadas. Which costs less, and by how much?",
    options: [
      { id: "a", text: "the vadas, by \u20b93" },
      { id: "b", text: "the idlis, by \u20b93" },
      { id: "c", text: "the idlis, by \u20b927" },
      { id: "d", text: "they cost the same" }
    ],
    answerId: "b",
    explanation: "2 idlis cost 2 \u00d7 \u20b912 = \u20b924 and 3 vadas cost 3 \u00d7 \u20b99 = \u20b927, so the idlis cost less by \u20b927 \u2212 \u20b924 = \u20b93. 'The vadas, by \u20b93' is tempting because one vada is \u20b93 cheaper than one idli, but she would buy more vadas.",
    hints: ["Find the full cost of each plan at Falguni's canteen, not the price of one piece, and then compare."]
  },
  {
    id: "g3-maths-money-a-q06",
    prompt: "Girish must pay exactly \u20b946 at the book shop using only the kinds of notes and coins shown. What is the fewest number of notes and coins he can use?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "3" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "Use the biggest pieces first: \u20b920 + \u20b920 = \u20b940, then \u20b95 makes \u20b945 and \u20b91 makes \u20b946. That is 4 pieces. 5 is tempting if you pay the last \u20b96 as \u20b92 + \u20b92 + \u20b92, which works but uses more coins. 3 pieces cannot make \u20b946 because no single piece is worth \u20b96.",
    hints: ["Start with the biggest kind of note Girish can use as many times as fits, then fill the rest with as few coins as possible."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 178\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"One of each kind of note and coin that Girish can use\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"178\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kinds of money Girish can use</text>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"30\" y=\"44\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"35\" y=\"49\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 38 78 Q 46 72 54 78 Q 62 84 70 78 Q 78 72 86 78 Q 94 84 102 78 Q 110 72 118 78\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"76\" y=\"71\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"42\" y=\"58\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"130\" y=\"44\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"135\" y=\"49\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 138 78 Q 146 72 154 78 Q 162 84 170 78 Q 178 72 186 78 Q 194 84 202 78 Q 210 72 218 78\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"176\" y=\"71\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"142\" y=\"58\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"50\" cy=\"123\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"50\" cy=\"123\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"50\" y=\"127.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"95\" cy=\"123\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"95\" cy=\"123\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"95\" y=\"127.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"137\" cy=\"123\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"137\" cy=\"123\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"137\" y=\"127.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  </g>\n  <text class=\"label small\" x=\"230\" y=\"166\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Girish may use as many of each as he needs.</text>\n</svg>", "alt": "One \u20b920 note, one \u20b910 note, one \u20b95 coin, one \u20b92 coin and one \u20b91 coin. A note says Girish may use as many of each as he needs."}
  },
  {
    id: "g3-maths-money-a-q07",
    prompt: "Three of these shopping lists cost exactly the same. Which list is the odd one out?",
    options: [
      { id: "a", text: "3 pens at \u20b98 each" },
      { id: "b", text: "4 erasers at \u20b96 each" },
      { id: "c", text: "6 pencils at \u20b94 each" },
      { id: "d", text: "5 sharpeners at \u20b95 each" }
    ],
    answerId: "d",
    explanation: "3 \u00d7 \u20b98 = \u20b924, 4 \u00d7 \u20b96 = \u20b924 and 6 \u00d7 \u20b94 = \u20b924, but 5 \u00d7 \u20b95 = \u20b925. So the sharpeners are the odd one out. The pencils are tempting because they have the most items and the smallest price, but 6 \u00d7 \u20b94 still makes \u20b924 like the others.",
    hints: ["Multiply to find the cost of each shopping list; the pens list is a good one to start with."]
  },
  {
    id: "g3-maths-money-a-q08",
    prompt: "Ishita opened her piggy bank and made a tally of the coins inside. Which kind of coin gave her the most money?",
    options: [
      { id: "a", text: "the \u20b91 coins" },
      { id: "b", text: "the \u20b95 coins" },
      { id: "c", text: "the \u20b92 coins" },
      { id: "d", text: "all kinds gave the same" }
    ],
    answerId: "b",
    explanation: "\u20b91 coins: 9 \u00d7 \u20b91 = \u20b99. \u20b92 coins: 6 \u00d7 \u20b92 = \u20b912. \u20b95 coins: 3 \u00d7 \u20b95 = \u20b915. The \u20b95 coins gave the most money. The \u20b91 coins are tempting because they have the most tally marks, but each of them is worth very little.",
    hints: ["For each row of Ishita's tally, multiply the number of coins by what each coin is worth before you compare."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A tally chart of coins from a piggy bank\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"190\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ishita's piggy-bank tally</text>\n  <g class=\"part tallies\">\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"66\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"66\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"70.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"71\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b91 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"52\" x2=\"174\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"52\" x2=\"182\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"52\" x2=\"190\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"52\" x2=\"198\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"74\" x2=\"202\" y2=\"58\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"52\" x2=\"218\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"226\" y1=\"52\" x2=\"226\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"234\" y1=\"52\" x2=\"234\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"242\" y1=\"52\" x2=\"242\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"112\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"112\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"116.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"117\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b92 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"98\" x2=\"174\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"98\" x2=\"182\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"98\" x2=\"190\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"98\" x2=\"198\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"120\" x2=\"202\" y2=\"104\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"98\" x2=\"218\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"158\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"158\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"162.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"163\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b95 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"144\" x2=\"174\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"144\" x2=\"182\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"144\" x2=\"190\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  </g>\n</svg>", "alt": "A tally chart. \u20b91 coins: 9 tally marks. \u20b92 coins: 6 tally marks. \u20b95 coins: 3 tally marks. Every fifth mark is a red line across the first four."}
  },
  {
    id: "g3-maths-money-a-q09",
    prompt: "At the village fair, Jayant buys a toffee for 50 paise and a balloon for \u20b92. He hands over a \u20b95 coin. What should the stall owner give back?",
    options: [
      { id: "a", text: "\u20b93 and 50 paise" },
      { id: "b", text: "\u20b92 and 50 paise" },
      { id: "c", text: "\u20b93" },
      { id: "d", text: "\u20b92" }
    ],
    answerId: "b",
    explanation: "He spends \u20b92 and 50 paise in all (250 paise). \u20b95 = 500 paise, and 500 \u2212 250 = 250 paise = \u20b92 and 50 paise. \u20b93 is tempting if you forget the 50 paise for the toffee and only take away the balloon.",
    hints: ["Change Jayant's coin and each price at the fair into paise before you subtract."]
  },
  {
    id: "g3-maths-money-a-q10",
    prompt: "Fill in the blank so that the second pair matches the first pair in the same way: four \u20b95 coins \u2192 \u20b920, and four 50-paise coins \u2192 ___",
    options: [
      { id: "a", text: "\u20b92" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b94" },
      { id: "d", text: "\u20b91" }
    ],
    answerId: "a",
    explanation: "In the first pair, four coins of \u20b95 are worth 4 \u00d7 \u20b95 = \u20b920. In the same way, four coins of 50 paise are worth 4 \u00d7 50 = 200 paise, and 200 paise = \u20b92. \u20b920 is tempting because it copies the first answer, but a 50-paise coin is worth far less than a \u20b95 coin.",
    hints: ["Find the value of the second group of coins in paise first, then change paise into rupees."]
  },
  {
    id: "g3-maths-money-a-q11",
    prompt: "Kritika's bill from the stationery shop is shown. She hands the shopkeeper a \u20b9100 note. What should she get back?",
    options: [
      { id: "a", text: "\u20b95" },
      { id: "b", text: "\u20b995" },
      { id: "c", text: "\u20b915" },
      { id: "d", text: "\u20b9105" }
    ],
    answerId: "a",
    explanation: "The bill total is \u20b960 + \u20b921 + \u20b914 = \u20b995. Her change is \u20b9100 \u2212 \u20b995 = \u20b95. \u20b995 is tempting because it is printed in bold on the bill, but that is what she pays, not what she gets back.",
    hints: ["Check the total on Kritika's bill by adding the Amount column, then take it away from the note she gives."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 218\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A shop bill with three items and a total\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"218\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bill from the stationery shop</text>\n  <g class=\"part bill\">\n  <rect class=\"part bill-paper\" x=\"25\" y=\"40\" width=\"330\" height=\"164\" rx=\"4\" fill=\"#fffef5\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label bill-title\" x=\"190\" y=\"60\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kritika's stationery bill</text>\n  <text class=\"label bill-head\" x=\"87.7\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Item</text>\n  <text class=\"label bill-head\" x=\"176.8\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Qty</text>\n  <text class=\"label bill-head\" x=\"236.2\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Rate</text>\n  <text class=\"label bill-head\" x=\"312.1\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Amount</text>\n  <line class=\"rule-line\" x1=\"31\" y1=\"94\" x2=\"349\" y2=\"94\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"113\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Notebook</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">4</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b915</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b960</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"139\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Pen</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">3</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b97</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b921</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"165\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Glue stick</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"165\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">1</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"165\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b914</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"165\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b914</text>\n  </g>\n  <line class=\"rule-line\" x1=\"31\" y1=\"178\" x2=\"349\" y2=\"178\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label bill-total\" x=\"345\" y=\"196\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Total: \u20b995</text>\n  </g>\n</svg>", "alt": "A bill with columns Item, Qty, Rate and Amount. Notebook: 4 at \u20b915, amount \u20b960. Pen: 3 at \u20b97, amount \u20b921. Glue stick: 1 at \u20b914, amount \u20b914. Total: \u20b995."}
  },
  {
    id: "g3-maths-money-a-q12",
    prompt: "With her \u20b950 Diwali gift, Lavanya picks up 4 gel pens priced \u20b97 each and a \u20b915 sketch book. What is left of her gift money?",
    options: [
      { id: "a", text: "\u20b943" },
      { id: "b", text: "\u20b928" },
      { id: "c", text: "\u20b922" },
      { id: "d", text: "\u20b97" }
    ],
    answerId: "d",
    explanation: "4 gel pens cost 4 \u00d7 \u20b97 = \u20b928. With the sketch book she spends \u20b928 + \u20b915 = \u20b943. She has \u20b950 \u2212 \u20b943 = \u20b97 left. \u20b928 is tempting if you count only one pen (\u20b950 \u2212 \u20b915 \u2212 \u20b97), but she buys 4 pens.",
    hints: ["First find what all of Lavanya's gel pens cost together, add the sketch book, then subtract from her money."]
  },
  {
    id: "g3-maths-money-a-q13",
    prompt: "Madhav's uncle gives \u20b960 to Madhav and his 4 cousins to share equally. Each child then buys a kulfi for \u20b98. How much money does each child have left?",
    options: [
      { id: "a", text: "\u20b912" },
      { id: "b", text: "\u20b952" },
      { id: "c", text: "\u20b97" },
      { id: "d", text: "\u20b94" }
    ],
    answerId: "d",
    explanation: "Madhav and 4 cousins make 5 children. \u20b960 \u00f7 5 = \u20b912 each, and after a \u20b98 kulfi each child has \u20b912 \u2212 \u20b98 = \u20b94. \u20b912 is tempting because it is each child's share, but the kulfi has not been paid for yet. \u20b97 comes from sharing among 4 children and forgetting Madhav.",
    hints: ["Count how many children share the uncle's money, including Madhav himself, before you divide."]
  },
  {
    id: "g3-maths-money-a-q14",
    prompt: "Notebooks cost \u20b918 each. The shop's offer says: 'Buy 2 notebooks, get \u20b95 off those 2.' The offer works again for every 2 notebooks. Nandan buys 4 notebooks. How much does he pay?",
    options: [
      { id: "a", text: "\u20b962" },
      { id: "b", text: "\u20b967" },
      { id: "c", text: "\u20b972" },
      { id: "d", text: "\u20b931" }
    ],
    answerId: "a",
    explanation: "2 notebooks cost \u20b936, and with \u20b95 off they cost \u20b931. 4 notebooks are 2 such pairs: \u20b931 + \u20b931 = \u20b962. \u20b967 is tempting if you take \u20b95 off only once, but the offer works for every 2 notebooks, so \u20b910 comes off in all. \u20b931 is the price for just one pair.",
    hints: ["Find what Nandan pays for each pair of notebooks after the offer, then count how many pairs he buys."]
  },
  {
    id: "g3-maths-money-a-q15",
    prompt: "Parth wants to pay exactly \u20b9130 for a cricket ball, so that he gets no change. Which notes from his wallet should he give?",
    options: [
      { id: "a", text: "\u20b9100 and \u20b950" },
      { id: "b", text: "\u20b9100, \u20b920 and \u20b920" },
      { id: "c", text: "\u20b9100, \u20b920 and \u20b910" },
      { id: "d", text: "\u20b950, \u20b920, \u20b920 and \u20b910" }
    ],
    answerId: "c",
    explanation: "\u20b9100 + \u20b920 + \u20b910 = \u20b9130 exactly. '\u20b9100 and \u20b950' is tempting because it uses only two notes, but it makes \u20b9150, so he would need change. \u20b9100, \u20b920 and \u20b920 make \u20b9140, and \u20b950 + \u20b920 + \u20b920 + \u20b910 make only \u20b9100.",
    hints: ["Start with Parth's biggest note that is not too much, then pick smaller notes from the wallet to make up the rest."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 202\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A wallet with five notes\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"202\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Notes in Parth's wallet</text>\n  <rect class=\"part wallet\" x=\"22\" y=\"40\" width=\"336\" height=\"124\" rx=\"14\" fill=\"#efebe9\" stroke=\"#4e342e\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"190\" y=\"182\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Parth's wallet</text>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"40\" y=\"52\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d1c4e9\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"45\" y=\"57\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 48 86 Q 56 80 64 86 Q 72 92 80 86 Q 88 80 96 86 Q 104 92 112 86 Q 120 80 128 86\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"86\" y=\"79\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b9100</text>\n  <text class=\"label small corner\" x=\"52\" y=\"66\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">100</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"140\" y=\"52\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#b2ebf2\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"145\" y=\"57\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 148 86 Q 156 80 164 86 Q 172 92 180 86 Q 188 80 196 86 Q 204 92 212 86 Q 220 80 228 86\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"186\" y=\"79\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b950</text>\n  <text class=\"label small corner\" x=\"152\" y=\"66\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">50</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"240\" y=\"52\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"245\" y=\"57\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 248 86 Q 256 80 264 86 Q 272 92 280 86 Q 288 80 296 86 Q 304 92 312 86 Q 320 80 328 86\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"286\" y=\"79\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"252\" y=\"66\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"40\" y=\"106\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"45\" y=\"111\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 48 140 Q 56 134 64 140 Q 72 146 80 140 Q 88 134 96 140 Q 104 146 112 140 Q 120 134 128 140\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"86\" y=\"133\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"52\" y=\"120\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"140\" y=\"106\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"145\" y=\"111\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 148 140 Q 156 134 164 140 Q 172 146 180 140 Q 188 134 196 140 Q 204 146 212 140 Q 220 134 228 140\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"186\" y=\"133\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"152\" y=\"120\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  </g>\n</svg>", "alt": "Parth's wallet holds one \u20b9100 note, one \u20b950 note, two \u20b920 notes and one \u20b910 note."}
  },
  {
    id: "g3-maths-money-a-q16",
    prompt: "Rajat's chikki stall has this price board: 1 packet \u20b95, 2 packets \u20b99, 3 packets \u20b913, 4 packets \u20b917. If the prices keep the same pattern, what do 5 packets cost?",
    options: [
      { id: "a", text: "\u20b925" },
      { id: "b", text: "\u20b922" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b921" }
    ],
    answerId: "d",
    explanation: "Each extra packet adds \u20b94 to the price: 5, 9, 13, 17, so 5 packets cost \u20b917 + \u20b94 = \u20b921. \u20b925 is tempting because the first packet costs \u20b95 and 5 \u00d7 \u20b95 = \u20b925, but after the first packet each one adds only \u20b94.",
    hints: ["Look at how much the price on Rajat's board goes up each time one more packet is added."]
  },
  {
    id: "g3-maths-money-a-q17",
    prompt: "Rachna is saving for a board game that costs \u20b9200. She already has \u20b9110, and she saves \u20b918 every week. How many more weeks must she save?",
    options: [
      { id: "a", text: "6 weeks" },
      { id: "b", text: "5 weeks" },
      { id: "c", text: "4 weeks" },
      { id: "d", text: "11 weeks" }
    ],
    answerId: "b",
    explanation: "She still needs \u20b9200 \u2212 \u20b9110 = \u20b990. At \u20b918 a week: 18, 36, 54, 72, 90, which is 5 weeks. 11 weeks is tempting if you forget the \u20b9110 she already has and count from zero (11 \u00d7 \u20b918 = \u20b9198, still short of \u20b9200).",
    hints: ["Find how much Rachna still needs for the board game, then count in steps of her weekly saving."]
  },
  {
    id: "g3-maths-money-a-q18",
    prompt: "Sachin needs 2 juices and 1 sandwich for a picnic. The price tags at two shops are shown. Which shop is cheaper for his order, and by how much?",
    options: [
      { id: "a", text: "Shop Q, by \u20b92" },
      { id: "b", text: "Shop Q, by \u20b94" },
      { id: "c", text: "Shop P, by \u20b93" },
      { id: "d", text: "Shop P, by \u20b97" }
    ],
    answerId: "c",
    explanation: "Shop P: 2 \u00d7 \u20b920 + \u20b935 = \u20b975. Shop Q: 2 \u00d7 \u20b918 + \u20b942 = \u20b978. Shop P is cheaper by \u20b93. 'Shop Q, by \u20b92' is tempting because Shop Q's juice is \u20b92 cheaper, but its sandwich costs \u20b97 more, which wipes out the saving.",
    hints: ["Work out the whole cost of Sachin's order at each shop, counting the juice twice, before you compare."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 520 222\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Price tags for juice and sandwiches at two shops\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"520\" height=\"222\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"260.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Price tags at two shops</text>\n  <g class=\"part shops\">\n  <rect class=\"part shop-board\" x=\"20\" y=\"40\" width=\"230\" height=\"170\" rx=\"8\" fill=\"#f1f8e9\" stroke=\"#33691e\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"135\" y=\"62\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shop P</text>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"70,103.0 88,74 190,74 190,132 88,132\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"84\" cy=\"103\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"139\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Juice</text>\n  <text class=\"label value price\" x=\"139\" y=\"119\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b920</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"70,169.0 88,140 190,140 190,198 88,198\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"84\" cy=\"169\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"139\" y=\"162\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sandwich</text>\n  <text class=\"label value price\" x=\"139\" y=\"185\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b935</text>\n  </g>\n  <rect class=\"part shop-board\" x=\"270\" y=\"40\" width=\"230\" height=\"170\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#0d47a1\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"385\" y=\"62\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shop Q</text>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"320,103.0 338,74 440,74 440,132 338,132\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"334\" cy=\"103\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"389\" y=\"96\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Juice</text>\n  <text class=\"label value price\" x=\"389\" y=\"119\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b918</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"320,169.0 338,140 440,140 440,198 338,198\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"334\" cy=\"169\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"389\" y=\"162\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sandwich</text>\n  <text class=\"label value price\" x=\"389\" y=\"185\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b942</text>\n  </g>\n  </g>\n</svg>", "alt": "Shop P: Juice \u20b920, Sandwich \u20b935. Shop Q: Juice \u20b918, Sandwich \u20b942."}
  },
  {
    id: "g3-maths-money-a-q19",
    prompt: "Tejas has five \u20b92 coins and three \u20b95 coins. Urmila has two \u20b910 notes and four 50-paise coins. Who has more money, and how much more?",
    options: [
      { id: "a", text: "Urmila, by \u20b93" },
      { id: "b", text: "Urmila, by \u20b92" },
      { id: "c", text: "Tejas, by \u20b93" },
      { id: "d", text: "Tejas, by \u20b95" }
    ],
    answerId: "c",
    explanation: "Tejas: 5 \u00d7 \u20b92 + 3 \u00d7 \u20b95 = \u20b910 + \u20b915 = \u20b925. Urmila: 2 \u00d7 \u20b910 + four 50-paise coins (\u20b92) = \u20b922. Tejas has \u20b93 more. 'Urmila, by \u20b93' is tempting because she has notes, which look like more money, but her coins are worth only 50 paise each.",
    hints: ["Add up each child's coins and notes separately, remembering what Urmila's small coins are worth, then compare."]
  },
  {
    id: "g3-maths-money-a-q20",
    prompt: "Vedant has exactly 6 coins worth \u20b917 in all. Every coin is a \u20b91, \u20b92 or \u20b95 coin, and he has at least one of each kind. How many \u20b95 coins does he have?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "1" },
      { id: "c", text: "4" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "Try the \u20b95 coins. With one \u20b95 coin, the other 5 coins must make \u20b912, but five coins of \u20b91 or \u20b92 make at most \u20b910. With three \u20b95 coins (\u20b915), the other 3 coins must make \u20b92, but 3 coins make at least \u20b93. With two \u20b95 coins (\u20b910), the other 4 coins make \u20b97: one \u20b91 and three \u20b92 coins. So he has 2 coins of \u20b95. 3 is tempting because 3 \u00d7 \u20b95 = \u20b915 comes close to \u20b917, but then the other three coins would be too many for the \u20b92 left.",
    hints: ["Vedant's coin count and his total must fit together, so test each possible number of \u20b95 coins and check what the other coins must make."]
  },
  {
    id: "g3-maths-money-a-q21",
    prompt: "Yogesh buys veg puffs and plates of jalebi for his football team. On the bill, the quantities did not print. How many veg puffs did he buy?",
    options: [
      { id: "a", text: "5 veg puffs" },
      { id: "b", text: "3 veg puffs" },
      { id: "c", text: "4 veg puffs" },
      { id: "d", text: "2 veg puffs" }
    ],
    answerId: "d",
    explanation: "If all 7 items were jalebi plates, the bill would be 7 \u00d7 \u20b915 = \u20b9105. The real bill is \u20b96 less. Each veg puff instead of a jalebi plate saves \u20b93, so there are \u20b96 \u00f7 \u20b93 = 2 veg puffs (and 5 jalebi plates). Check: 2 \u00d7 \u20b912 + 5 \u00d7 \u20b915 = \u20b924 + \u20b975 = \u20b999. 5 veg puffs is tempting because 5 appears in the working, but 5 is the number of jalebi plates; 5 puffs and 2 plates would cost only \u20b990.",
    hints: ["Imagine every item on Yogesh's bill were a jalebi plate, compare with the real total, and see how much each swap changes it."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 214\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A canteen bill with the quantities missing\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"214\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Yogesh's canteen bill</text>\n  <g class=\"part bill\">\n  <rect class=\"part bill-paper\" x=\"25\" y=\"40\" width=\"330\" height=\"160\" rx=\"4\" fill=\"#fffef5\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label bill-title\" x=\"190\" y=\"60\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Canteen bill</text>\n  <text class=\"label bill-head\" x=\"87.7\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Item</text>\n  <text class=\"label bill-head\" x=\"176.8\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Qty</text>\n  <text class=\"label bill-head\" x=\"236.2\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Rate</text>\n  <text class=\"label bill-head\" x=\"312.1\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Amount</text>\n  <line class=\"rule-line\" x1=\"31\" y1=\"94\" x2=\"349\" y2=\"94\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"113\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Veg puff</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">?</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b912</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">?</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"139\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Jalebi plate</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">?</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b915</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">?</text>\n  </g>\n  <line class=\"rule-line\" x1=\"31\" y1=\"152\" x2=\"349\" y2=\"152\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label bill-total\" x=\"345\" y=\"170\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Total: \u20b999</text>\n  <text class=\"label bill-foot\" x=\"35\" y=\"192\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">7 items in all</text>\n  </g>\n</svg>", "alt": "A bill with columns Item, Qty, Rate and Amount. Veg puff: quantity ?, rate \u20b912, amount ?. Jalebi plate: quantity ?, rate \u20b915, amount ?. Total: \u20b999. Below: 7 items in all."}
  },
  {
    id: "g3-maths-money-a-q22",
    prompt: "Zara has plenty of \u20b91, \u20b92 and \u20b95 coins. In how many different ways can she make exactly \u20b98? (Only the number of each kind of coin matters, not the order.)",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "4" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "Without a \u20b95 coin: \u20b98 can use 0, 1, 2, 3 or 4 coins of \u20b92 (the rest in \u20b91 coins), which is 5 ways. With one \u20b95 coin, \u20b93 is left: three \u20b91 coins, or one \u20b92 and one \u20b91, which is 2 ways. Two \u20b95 coins are too much. 5 + 2 = 7 ways. 5 is tempting if you forget to use the \u20b95 coin at all.",
    hints: ["Sort Zara's ways by how many \u20b95 coins she uses, and in each case list the possible numbers of \u20b92 coins in order."]
  },
  {
    id: "g3-maths-money-a-q23",
    prompt: "Anu and Keshav have \u20b980 altogether. If Anu gives Keshav \u20b910, they will both have the same amount. What amount is in Anu's hand right now?",
    options: [
      { id: "a", text: "\u20b940" },
      { id: "b", text: "\u20b945" },
      { id: "c", text: "\u20b950" },
      { id: "d", text: "\u20b930" }
    ],
    answerId: "c",
    explanation: "After the gift they have the same amount and still \u20b980 in all, so each will have \u20b940. Anu has \u20b940 after giving away \u20b910, so she has \u20b950 now (and Keshav has \u20b930). Check: \u20b950 + \u20b930 = \u20b980. \u20b940 is tempting because it is half of \u20b980, but that is what Anu has after she gives, not before. \u20b945 comes from adding only half of the \u20b910.",
    hints: ["Work backwards: find what Anu and Keshav each have after the gift, then undo the gift for Anu."]
  },
  {
    id: "g3-maths-money-a-q24",
    prompt: "Shalini, Trisha and Ujjwala put all the money from their purses together and share it equally among the three of them. How much of Shalini's money goes to her sisters?",
    options: [
      { id: "a", text: "\u20b945" },
      { id: "b", text: "\u20b965" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b917" }
    ],
    answerId: "c",
    explanation: "Shalini has \u20b965, Trisha \u20b942 and Ujjwala \u20b928, which is \u20b9135 altogether. Shared equally, each gets \u20b9135 \u00f7 3 = \u20b945. Shalini keeps \u20b945 of her \u20b965, so \u20b965 \u2212 \u20b945 = \u20b920 goes to her sisters. \u20b945 is tempting because it is each sister's share, but the question asks how much Shalini gives away. \u20b917 is the amount Ujjwala receives.",
    hints: ["Total all three purses, find each sister's equal share, then compare that share with what Shalini started with."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 590 254\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Three purses with notes and coins\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"590\" height=\"254\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"295.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Money in the three sisters' purses</text>\n  <g class=\"part purses\">\n  <rect class=\"part purse\" x=\"14\" y=\"42\" width=\"178\" height=\"176\" rx=\"14\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"103\" y=\"236\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Shalini's purse</text>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"28\" y=\"54\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#b2ebf2\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"33\" y=\"59\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 36 88 Q 44 82 52 88 Q 60 94 68 88 Q 76 82 84 88 Q 92 94 100 88 Q 108 82 116 88\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"74\" y=\"81\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b950</text>\n  <text class=\"label small corner\" x=\"40\" y=\"68\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">50</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"28\" y=\"108\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"33\" y=\"113\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 36 142 Q 44 136 52 142 Q 60 148 68 142 Q 76 136 84 142 Q 92 148 100 142 Q 108 136 116 142\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"74\" y=\"135\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"40\" y=\"122\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"187\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"187\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"191.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  </g>\n  <rect class=\"part purse\" x=\"204\" y=\"42\" width=\"178\" height=\"176\" rx=\"14\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"293\" y=\"236\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Trisha's purse</text>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"218\" y=\"54\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"223\" y=\"59\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 226 88 Q 234 82 242 88 Q 250 94 258 88 Q 266 82 274 88 Q 282 94 290 88 Q 298 82 306 88\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"264\" y=\"81\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"230\" y=\"68\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"218\" y=\"108\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"223\" y=\"113\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 226 142 Q 234 136 242 142 Q 250 148 258 142 Q 266 136 274 142 Q 282 148 290 142 Q 298 136 306 142\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"264\" y=\"135\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"230\" y=\"122\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"237\" cy=\"187\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"237\" cy=\"187\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"237\" y=\"191.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  </g>\n  <rect class=\"part purse\" x=\"394\" y=\"42\" width=\"178\" height=\"176\" rx=\"14\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"483\" y=\"236\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Ujjwala's purse</text>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"408\" y=\"54\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"413\" y=\"59\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 416 88 Q 424 82 432 88 Q 440 94 448 88 Q 456 82 464 88 Q 472 94 480 88 Q 488 82 496 88\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"454\" y=\"81\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"420\" y=\"68\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"428\" cy=\"133\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"428\" cy=\"133\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"428\" y=\"137.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"473\" cy=\"133\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"473\" cy=\"133\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"473\" y=\"137.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"515\" cy=\"133\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"515\" cy=\"133\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"515\" y=\"137.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  </g>\n  </g>\n</svg>", "alt": "Shalini's purse: a \u20b950 note, a \u20b910 note and a \u20b95 coin. Trisha's purse: two \u20b920 notes and a \u20b92 coin. Ujjwala's purse: a \u20b920 note, a \u20b95 coin, a \u20b92 coin and a \u20b91 coin."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-maths-money-b-q01",
    prompt: "Aditya is collecting \u20b950 for his swimming class. Which group of notes and coins is exactly \u20b92 short of \u20b950?",
    options: [
      { id: "a", text: "Group 1" },
      { id: "b", text: "Group 2" },
      { id: "c", text: "Group 3" },
      { id: "d", text: "Group 4" }
    ],
    answerId: "c",
    explanation: "Group 1: \u20b940 + \u20b95 + \u20b94 = \u20b949. Group 2: \u20b940 + \u20b95 + \u20b92 = \u20b947. Group 3: \u20b920 + \u20b920 + \u20b95 + \u20b92 + \u20b91 = \u20b948. Group 4: \u20b940 + \u20b910 + \u20b91 = \u20b951. \u20b950 \u2212 \u20b948 = \u20b92, so Group 3 is exactly \u20b92 short. Group 1 is tempting because it has two \u20b92 coins, but it is only \u20b91 short. Group 2 is \u20b93 short, and Group 4 is \u20b91 over.",
    hints: ["Total each of Aditya's groups, notes first and then coins, and compare every total with the class fee."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 614 464\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four groups of notes and coins\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"614\" height=\"464\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"307.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Four groups of notes and coins</text>\n  <g class=\"part groups\">\n  <rect class=\"part panel\" x=\"14\" y=\"40\" width=\"286\" height=\"200\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"26\" y=\"50\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"31\" y=\"55\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 34 84 Q 42 78 50 84 Q 58 90 66 84 Q 74 78 82 84 Q 90 90 98 84 Q 106 78 114 84\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"72\" y=\"77\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"38\" y=\"64\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"126\" y=\"50\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"131\" y=\"55\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 134 84 Q 142 78 150 84 Q 158 90 166 84 Q 174 78 182 84 Q 190 90 198 84 Q 206 78 214 84\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"172\" y=\"77\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"138\" y=\"64\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"46\" cy=\"129\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"46\" cy=\"129\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"46\" y=\"133.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"91\" cy=\"129\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"91\" cy=\"129\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"91\" y=\"133.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"135\" cy=\"129\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"135\" cy=\"129\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"135\" y=\"133.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"157\" y=\"232\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 1</text>\n  <rect class=\"part panel\" x=\"314\" y=\"40\" width=\"286\" height=\"200\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"326\" y=\"50\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"331\" y=\"55\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 334 84 Q 342 78 350 84 Q 358 90 366 84 Q 374 78 382 84 Q 390 90 398 84 Q 406 78 414 84\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"372\" y=\"77\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"338\" y=\"64\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"426\" y=\"50\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"431\" y=\"55\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 434 84 Q 442 78 450 84 Q 458 90 466 84 Q 474 78 482 84 Q 490 90 498 84 Q 506 78 514 84\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"472\" y=\"77\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"438\" y=\"64\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"326\" y=\"104\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"331\" y=\"109\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 334 138 Q 342 132 350 138 Q 358 144 366 138 Q 374 132 382 138 Q 390 144 398 138 Q 406 132 414 138\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"372\" y=\"131\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"338\" y=\"118\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"426\" y=\"104\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"431\" y=\"109\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 434 138 Q 442 132 450 138 Q 458 144 466 138 Q 474 132 482 138 Q 490 144 498 138 Q 506 132 514 138\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"472\" y=\"131\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"438\" y=\"118\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"346\" cy=\"183\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"346\" cy=\"183\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"346\" y=\"187.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"391\" cy=\"183\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"391\" cy=\"183\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"391\" y=\"187.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"457\" y=\"232\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 2</text>\n  <rect class=\"part panel\" x=\"14\" y=\"250\" width=\"286\" height=\"200\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"26\" y=\"260\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"31\" y=\"265\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 34 294 Q 42 288 50 294 Q 58 300 66 294 Q 74 288 82 294 Q 90 300 98 294 Q 106 288 114 294\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"72\" y=\"287\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"38\" y=\"274\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"126\" y=\"260\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"131\" y=\"265\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 134 294 Q 142 288 150 294 Q 158 300 166 294 Q 174 288 182 294 Q 190 300 198 294 Q 206 288 214 294\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"172\" y=\"287\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"138\" y=\"274\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"26\" y=\"314\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"31\" y=\"319\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 34 348 Q 42 342 50 348 Q 58 354 66 348 Q 74 342 82 348 Q 90 354 98 348 Q 106 342 114 348\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"72\" y=\"341\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"38\" y=\"328\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"46\" cy=\"393\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"46\" cy=\"393\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"46\" y=\"397.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"91\" cy=\"393\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"91\" cy=\"393\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"91\" y=\"397.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"133\" cy=\"393\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"133\" cy=\"393\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"133\" y=\"397.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"157\" y=\"442\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 3</text>\n  <rect class=\"part panel\" x=\"314\" y=\"250\" width=\"286\" height=\"200\" rx=\"6\" fill=\"#fafafa\" stroke=\"#bbb\" stroke-width=\"1\"/>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"326\" y=\"260\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"331\" y=\"265\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 334 294 Q 342 288 350 294 Q 358 300 366 294 Q 374 288 382 294 Q 390 300 398 294 Q 406 288 414 294\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"372\" y=\"287\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"338\" y=\"274\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"426\" y=\"260\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"431\" y=\"265\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 434 294 Q 442 288 450 294 Q 458 300 466 294 Q 474 288 482 294 Q 490 300 498 294 Q 506 288 514 294\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"472\" y=\"287\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"438\" y=\"274\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"346\" cy=\"339\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"346\" cy=\"339\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"346\" y=\"343.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"392\" cy=\"339\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"392\" cy=\"339\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"392\" y=\"343.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"435\" cy=\"339\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"435\" cy=\"339\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"435\" y=\"343.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  </g>\n  <text class=\"label option-label\" x=\"457\" y=\"442\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Group 4</text>\n  </g>\n</svg>", "alt": "Group 1: two \u20b920 notes, a \u20b95 coin and two \u20b92 coins. Group 2: four \u20b910 notes, a \u20b95 coin and a \u20b92 coin. Group 3: a \u20b920 note, two \u20b910 notes, a \u20b95 coin, a \u20b92 coin and a \u20b91 coin. Group 4: two \u20b920 notes, two \u20b95 coins and a \u20b91 coin."}
  },
  {
    id: "g3-maths-money-b-q02",
    prompt: "Hina has exactly one note and exactly one coin, and together they are worth \u20b925. Which could they be?",
    options: [
      { id: "a", text: "a \u20b920 note and a \u20b95 coin" },
      { id: "b", text: "a \u20b910 note and a \u20b95 coin" },
      { id: "c", text: "a \u20b920 note and a \u20b92 coin" },
      { id: "d", text: "a \u20b950 note and a \u20b95 coin" }
    ],
    answerId: "a",
    explanation: "\u20b920 + \u20b95 = \u20b925, and it is one note and one coin. 'A \u20b920 note and a \u20b92 coin' is tempting because the \u20b92 coin looks like the 2 in 25, but \u20b920 + \u20b92 is only \u20b922.",
    hints: ["Add the note and the coin in each pair and check which pair matches Hina's total exactly."]
  },
  {
    id: "g3-maths-money-b-q03",
    prompt: "At the school shop a pencil costs \u20b94. An eraser costs 50 paise less than the pencil. Bindu buys one pencil and one eraser. How much does she pay?",
    options: [
      { id: "a", text: "\u20b98" },
      { id: "b", text: "\u20b97 and 50 paise" },
      { id: "c", text: "\u20b94 and 50 paise" },
      { id: "d", text: "\u20b97" }
    ],
    answerId: "b",
    explanation: "The eraser costs \u20b94 \u2212 50 paise = \u20b93 and 50 paise. Pencil and eraser together cost \u20b94 + \u20b93 and 50 paise = \u20b97 and 50 paise. \u20b98 is tempting if you think the eraser also costs \u20b94, but it is 50 paise cheaper. \u20b94 and 50 paise comes from adding 50 paise to the pencil's price instead of finding the eraser's price and adding the two.",
    hints: ["Find the eraser's price first by taking the paise away from the pencil's price, then add the two prices Bindu pays."]
  },
  {
    id: "g3-maths-money-b-q04",
    prompt: "Charvi's father buys a new filter for the water purifier. It costs \u20b9268, and he hands over a \u20b9500 note. What should the shopkeeper return?",
    options: [
      { id: "a", text: "\u20b9368" },
      { id: "b", text: "\u20b9242" },
      { id: "c", text: "\u20b9232" },
      { id: "d", text: "\u20b9332" }
    ],
    answerId: "c",
    explanation: "\u20b9500 \u2212 \u20b9268: regroup \u20b9500 as 4 hundreds, 9 tens and 10 ones. 10 \u2212 8 = 2, 9 \u2212 6 = 3, 4 \u2212 2 = 2, so the change is \u20b9232. \u20b9368 is tempting if you take the smaller digit from the bigger one in each place (8 \u2212 0, 6 \u2212 0, 5 \u2212 2) instead of regrouping. Check: \u20b9268 + \u20b9232 = \u20b9500.",
    hints: ["The note Charvi's father gives has zeros in the tens and ones places, so regroup a hundred before subtracting."]
  },
  {
    id: "g3-maths-money-b-q05",
    prompt: "A cup of sweet corn costs \u20b930 at the mall. A stall outside sells 2 cups for \u20b950. Naina wants 2 cups. How much does she save by buying them at the stall?",
    options: [
      { id: "a", text: "\u20b920" },
      { id: "b", text: "\u20b910" },
      { id: "c", text: "\u20b95" },
      { id: "d", text: "\u20b950" }
    ],
    answerId: "b",
    explanation: "2 cups at the mall cost 2 \u00d7 \u20b930 = \u20b960. At the stall they cost \u20b950. She saves \u20b960 \u2212 \u20b950 = \u20b910. \u20b95 is tempting because each cup at the stall is \u20b95 cheaper, but she buys 2 cups, so she saves on both.",
    hints: ["Find what Naina's cups of sweet corn would cost at the mall, then compare with the stall's price for the same number of cups."]
  },
  {
    id: "g3-maths-money-b-q06",
    prompt: "Omkar has \u20b950 for the kite festival. He first buys a spool of thread. Then he buys as many kites as he can with the money left. How many kites does he buy?",
    options: [
      { id: "a", text: "6 kites" },
      { id: "b", text: "4 kites" },
      { id: "c", text: "2 kites" },
      { id: "d", text: "3 kites" }
    ],
    answerId: "d",
    explanation: "After the spool, Omkar has \u20b950 \u2212 \u20b925 = \u20b925. Kites cost \u20b98: 3 kites cost \u20b924 and 4 kites would cost \u20b932, which is too much. So he buys 3 kites (\u20b91 is left). 6 kites is tempting if you forget the spool and share all \u20b950 (6 \u00d7 \u20b98 = \u20b948).",
    hints: ["Take the spool's price away from Omkar's money first, then count kites at their price until the money runs out."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 440 116\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Three price tags at a kite shop\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"440\" height=\"116\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"220.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Price tags at the kite shop</text>\n  <g class=\"part tags\">\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"14,73.0 32,44 142,44 142,102 32,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"28\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"87\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kite</text>\n  <text class=\"label value price\" x=\"87\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b98</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"154,73.0 172,44 282,44 282,102 172,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"168\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"227\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Spool</text>\n  <text class=\"label value price\" x=\"227\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b925</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"294,73.0 312,44 422,44 422,102 312,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"308\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"367\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Tail ribbon</text>\n  <text class=\"label value price\" x=\"367\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b94</text>\n  </g>\n  </g>\n</svg>", "alt": "Three price tags: Kite \u20b98, Spool \u20b925, Tail ribbon \u20b94."}
  },
  {
    id: "g3-maths-money-b-q07",
    prompt: "A toll booth on a village road accepts only \u20b95 coins and gives no change. Three of these toll amounts can be paid exactly with \u20b95 coins. Which amount is the odd one out?",
    options: [
      { id: "a", text: "\u20b935" },
      { id: "b", text: "\u20b942" },
      { id: "c", text: "\u20b950" },
      { id: "d", text: "\u20b945" }
    ],
    answerId: "b",
    explanation: "\u20b935, \u20b945 and \u20b950 are all reached by counting in fives (7, 9 and 10 coins). \u20b942 is not: 8 coins make \u20b940 and 9 coins make \u20b945. \u20b945 is tempting because it is close to \u20b942 and does not look like a 'round' number, but it is 9 \u00d7 \u20b95.",
    hints: ["Count in fives at the toll booth; \u20b935 is reached that way. Which amount does the counting jump over?"]
  },
  {
    id: "g3-maths-money-b-q08",
    prompt: "Prakash keeps 50-paise and \u20b91 coins in a tin and tallied them. What are all the coins in the tin worth together?",
    options: [
      { id: "a", text: "\u20b913" },
      { id: "b", text: "\u20b919" },
      { id: "c", text: "\u20b967" },
      { id: "d", text: "\u20b910" }
    ],
    answerId: "a",
    explanation: "12 coins of 50 paise make 6 rupees (two coins make \u20b91). 7 coins of \u20b91 make \u20b97. Together \u20b96 + \u20b97 = \u20b913. \u20b919 is tempting because there are 12 + 7 = 19 coins, but the 50-paise coins are worth only half a rupee each.",
    hints: ["Count each row of Prakash's tally, then remember how many of the small coins make one rupee before you add."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A tally chart of 50-paise and 1-rupee coins\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"150\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Prakash's coin tally</text>\n  <g class=\"part tallies\">\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"68\" r=\"15\" fill=\"#90a4ae\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"68\" r=\"12\" fill=\"#cfd8dc\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"72.5\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">50 p</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"73\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">50 p coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"54\" x2=\"174\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"54\" x2=\"182\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"54\" x2=\"190\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"54\" x2=\"198\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"76\" x2=\"202\" y2=\"60\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"54\" x2=\"218\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"226\" y1=\"54\" x2=\"226\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"234\" y1=\"54\" x2=\"234\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"242\" y1=\"54\" x2=\"242\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"214\" y1=\"76\" x2=\"246\" y2=\"60\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"262\" y1=\"54\" x2=\"262\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"270\" y1=\"54\" x2=\"270\" y2=\"82\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"118\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"118\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"122.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"123\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b91 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"104\" x2=\"174\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"104\" x2=\"182\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"104\" x2=\"190\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"104\" x2=\"198\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"126\" x2=\"202\" y2=\"110\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"104\" x2=\"218\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"226\" y1=\"104\" x2=\"226\" y2=\"132\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  </g>\n</svg>", "alt": "A tally chart. 50-paise coins: 12 tally marks. \u20b91 coins: 7 tally marks. Every fifth mark is a red line across the first four."}
  },
  {
    id: "g3-maths-money-b-q09",
    prompt: "Devika puts \u20b95 into her savings box every day for 9 days. Then she spends \u20b918 on a skipping game. How much money is left in her savings box?",
    options: [
      { id: "a", text: "\u20b945" },
      { id: "b", text: "\u20b963" },
      { id: "c", text: "\u20b933" },
      { id: "d", text: "\u20b927" }
    ],
    answerId: "d",
    explanation: "9 days \u00d7 \u20b95 = \u20b945 saved. \u20b945 \u2212 \u20b918 = \u20b927 left. \u20b933 is tempting if you subtract the smaller digit from the bigger one in the ones place (8 \u2212 5) instead of regrouping a ten.",
    hints: ["Find what Devika saved over all the days, then take away the game's price, regrouping a ten."]
  },
  {
    id: "g3-maths-money-b-q10",
    prompt: "A flower seller changes the price of a jasmine garland every hour, following a pattern. The tags show the prices. What will the garland cost at 12 noon?",
    options: [
      { id: "a", text: "\u20b90" },
      { id: "b", text: "\u20b912" },
      { id: "c", text: "\u20b96" },
      { id: "d", text: "\u20b918" }
    ],
    answerId: "b",
    explanation: "Each hour the price becomes half of what it was: \u20b996 \u2192 \u20b948 \u2192 \u20b924, so at 12 noon it is half of \u20b924 = \u20b912. \u20b90 is tempting if you think the price drops by \u20b924 each time, but the drops are \u20b948, then \u20b924, so they are not the same.",
    hints: ["Compare each garland price with the one an hour before it: is the seller taking away the same amount, or doing something else?"],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 536 116\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Four price tags for different hours\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"536\" height=\"116\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"268.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Jasmine garland prices</text>\n  <g class=\"part tags\">\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"12,73.0 30,44 132,44 132,102 30,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"26\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"81\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9 a.m.</text>\n  <text class=\"label value price\" x=\"81\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b996</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"142,73.0 160,44 262,44 262,102 160,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"156\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"211\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10 a.m.</text>\n  <text class=\"label value price\" x=\"211\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b948</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"272,73.0 290,44 392,44 392,102 290,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"286\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"341\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11 a.m.</text>\n  <text class=\"label value price\" x=\"341\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b924</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"402,73.0 420,44 522,44 522,102 420,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"416\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"471\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12 noon</text>\n  <text class=\"label value price\" x=\"471\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">?</text>\n  </g>\n  </g>\n</svg>", "alt": "Four price tags: 9 a.m. \u20b996, 10 a.m. \u20b948, 11 a.m. \u20b924, 12 noon with a question mark."}
  },
  {
    id: "g3-maths-money-b-q11",
    prompt: "Vandana gets this bill at the fruit shop. Before paying, she gives back one coconut. What is her new total?",
    options: [
      { id: "a", text: "\u20b966" },
      { id: "b", text: "\u20b9116" },
      { id: "c", text: "\u20b9141" },
      { id: "d", text: "\u20b991" }
    ],
    answerId: "d",
    explanation: "The bill total is \u20b930 + \u20b950 + \u20b936 = \u20b9116. Giving back one coconut takes off its rate, \u20b925: \u20b9116 \u2212 \u20b925 = \u20b991. \u20b966 is tempting if you take off the whole coconut line (\u20b950), but she returns only one of the two coconuts.",
    hints: ["On Vandana's bill, find the price of a single coconut from the Rate column, not the Amount column, and take only that off."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 218\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A fruit shop bill with three items\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"218\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Bill from the fruit shop</text>\n  <g class=\"part bill\">\n  <rect class=\"part bill-paper\" x=\"25\" y=\"40\" width=\"330\" height=\"164\" rx=\"4\" fill=\"#fffef5\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/>\n  <text class=\"label bill-title\" x=\"190\" y=\"60\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Vandana's fruit bill</text>\n  <text class=\"label bill-head\" x=\"87.7\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Item</text>\n  <text class=\"label bill-head\" x=\"176.8\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Qty</text>\n  <text class=\"label bill-head\" x=\"236.2\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Rate</text>\n  <text class=\"label bill-head\" x=\"312.1\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5d4037\">Amount</text>\n  <line class=\"rule-line\" x1=\"31\" y1=\"94\" x2=\"349\" y2=\"94\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"113\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Guava</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">6</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b95</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b930</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"139\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Coconut</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">2</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b925</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"139\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b950</text>\n  </g>\n  <g class=\"part bill-row\">\n  <text class=\"label cell item\" x=\"33\" y=\"165\" font-size=\"12\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#333\">Lemon</text>\n  <text class=\"label cell qty\" x=\"176.8\" y=\"165\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">12</text>\n  <text class=\"label cell rate\" x=\"236.2\" y=\"165\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b93</text>\n  <text class=\"label cell amount\" x=\"312.1\" y=\"165\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">\u20b936</text>\n  </g>\n  <line class=\"rule-line\" x1=\"31\" y1=\"178\" x2=\"349\" y2=\"178\" stroke=\"#8d6e63\" stroke-width=\"1\"/>\n  <text class=\"label bill-total\" x=\"345\" y=\"196\" font-size=\"13\" text-anchor=\"end\" font-weight=\"bold\" fill=\"#333\">Total: \u20b9116</text>\n  </g>\n</svg>", "alt": "A bill with columns Item, Qty, Rate and Amount. Guava: 6 at \u20b95, amount \u20b930. Coconut: 2 at \u20b925, amount \u20b950. Lemon: 12 at \u20b93, amount \u20b936. Total: \u20b9116."}
  },
  {
    id: "g3-maths-money-b-q12",
    prompt: "Jeevan and 7 friends plan to share the cost of a \u20b996 cake equally. On the day, 2 of the friends forget their money, so the others share the whole cost equally. How much more does each of them pay than planned?",
    options: [
      { id: "a", text: "\u20b916" },
      { id: "b", text: "\u20b912" },
      { id: "c", text: "\u20b94" },
      { id: "d", text: "\u20b924" }
    ],
    answerId: "c",
    explanation: "Jeevan and 7 friends make 8 children, so the plan was \u20b996 \u00f7 8 = \u20b912 each. Without 2 children, 6 share it: \u20b996 \u00f7 6 = \u20b916 each. Each pays \u20b916 \u2212 \u20b912 = \u20b94 more. \u20b916 is tempting because it is the new share, but the question asks how much MORE than planned.",
    hints: ["Find each share in Jeevan's plan and each share on the day, remembering to count Jeevan himself, then compare."]
  },
  {
    id: "g3-maths-money-b-q13",
    prompt: "Mango juice boxes cost \u20b925 each. The shop has an offer: 'Buy 3, pay for only 2.' The offer works for every 3 boxes. Garima buys 7 boxes. How much does she pay?",
    options: [
      { id: "a", text: "\u20b9175" },
      { id: "b", text: "\u20b9125" },
      { id: "c", text: "\u20b9150" },
      { id: "d", text: "\u20b9100" }
    ],
    answerId: "b",
    explanation: "7 boxes = 3 + 3 + 1. Each group of 3 costs only 2 \u00d7 \u20b925 = \u20b950, so two groups cost \u20b9100, and the last box costs \u20b925. Total \u20b9125. \u20b9150 is tempting if you use the offer only once (\u20b950 + 4 \u00d7 \u20b925), and \u20b9175 ignores the offer completely.",
    hints: ["Split Garima's juice boxes into groups that get the offer, then pay full price for any boxes left over."]
  },
  {
    id: "g3-maths-money-b-q14",
    prompt: "Harini must pay exactly \u20b965 for a school trip, using money from her wallet and getting no change. In how many different ways can she do it? (Notes of the same value count as the same.)",
    options: [
      { id: "a", text: "1 way" },
      { id: "b", text: "3 ways" },
      { id: "c", text: "2 ways" },
      { id: "d", text: "4 ways" }
    ],
    answerId: "c",
    explanation: "\u20b965 needs the \u20b95 coin, because all the notes are in tens. The notes must then make \u20b960: either \u20b950 + \u20b910, or \u20b920 + \u20b920 + \u20b910 + \u20b910. \u20b950 with any \u20b920 note goes past \u20b960. So there are 2 ways. 1 way is tempting because \u20b950 + \u20b910 + \u20b95 is the first way most people find, but the smaller notes also add up to \u20b960.",
    hints: ["Harini's notes all end in zero, so decide what must make the last five rupees, then list the ways the notes can make the rest."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 248\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A wallet with notes and a coin\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"248\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Money in Harini's wallet</text>\n  <rect class=\"part wallet\" x=\"22\" y=\"40\" width=\"336\" height=\"170\" rx=\"14\" fill=\"#efebe9\" stroke=\"#4e342e\" stroke-width=\"2\"/>\n  <text class=\"label option-label\" x=\"190\" y=\"228\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Harini's wallet</text>\n  <g class=\"part money\">\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"40\" y=\"52\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#b2ebf2\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"45\" y=\"57\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 48 86 Q 56 80 64 86 Q 72 92 80 86 Q 88 80 96 86 Q 104 92 112 86 Q 120 80 128 86\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"86\" y=\"79\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b950</text>\n  <text class=\"label small corner\" x=\"52\" y=\"66\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">50</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"140\" y=\"52\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"145\" y=\"57\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 148 86 Q 156 80 164 86 Q 172 92 180 86 Q 188 80 196 86 Q 204 92 212 86 Q 220 80 228 86\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"186\" y=\"79\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"152\" y=\"66\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"240\" y=\"52\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#e6ee9c\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"245\" y=\"57\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 248 86 Q 256 80 264 86 Q 272 92 280 86 Q 288 80 296 86 Q 304 92 312 86 Q 320 80 328 86\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"286\" y=\"79\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b920</text>\n  <text class=\"label small corner\" x=\"252\" y=\"66\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">20</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"40\" y=\"106\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"45\" y=\"111\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 48 140 Q 56 134 64 140 Q 72 146 80 140 Q 88 134 96 140 Q 104 146 112 140 Q 120 134 128 140\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"86\" y=\"133\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"52\" y=\"120\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part note\">\n  <rect class=\"part note-body\" x=\"140\" y=\"106\" width=\"92\" height=\"46\" rx=\"3\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"1.4\"/>\n  <rect class=\"part note-frame\" x=\"145\" y=\"111\" width=\"82\" height=\"36\" rx=\"2\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <path class=\"part note-wave\" d=\"M 148 140 Q 156 134 164 140 Q 172 146 180 140 Q 188 134 196 140 Q 204 146 212 140 Q 220 134 228 140\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"0.8\"/>\n  <text class=\"label value\" x=\"186\" y=\"133\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  <text class=\"label small corner\" x=\"152\" y=\"120\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"60\" cy=\"185\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"60\" cy=\"185\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"60\" y=\"189.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  </g>\n</svg>", "alt": "Harini's wallet holds one \u20b950 note, two \u20b920 notes, two \u20b910 notes and one \u20b95 coin."}
  },
  {
    id: "g3-maths-money-b-q15",
    prompt: "One pencil costs \u20b93 and 50 paise at the stationery stall. Tanuj buys 4 pencils for his class project. How much does he pay?",
    options: [
      { id: "a", text: "\u20b912" },
      { id: "b", text: "\u20b912 and 50 paise" },
      { id: "c", text: "\u20b914" },
      { id: "d", text: "\u20b915 and 50 paise" }
    ],
    answerId: "c",
    explanation: "4 pencils cost 4 \u00d7 \u20b93 = \u20b912 and 4 \u00d7 50 paise = 200 paise = \u20b92. In all, \u20b912 + \u20b92 = \u20b914. \u20b912 is tempting if you forget the paise, and \u20b912 and 50 paise comes from adding the 50 paise only once.",
    hints: ["Multiply the rupees and the paise of Tanuj's pencils separately, then change the paise into rupees."]
  },
  {
    id: "g3-maths-money-b-q16",
    prompt: "All pens at a shop cost the same. Complete the analogy. 2 pens : \u20b914 :: 5 pens : ___",
    options: [
      { id: "a", text: "\u20b917" },
      { id: "b", text: "\u20b970" },
      { id: "c", text: "\u20b928" },
      { id: "d", text: "\u20b935" }
    ],
    answerId: "d",
    explanation: "2 pens cost \u20b914, so one pen costs \u20b97. 5 pens cost 5 \u00d7 \u20b97 = \u20b935. \u20b917 is tempting because 5 is 3 more than 2 and \u20b914 + \u20b93 = \u20b917, but each extra pen adds a whole pen's price, not \u20b91.",
    hints: ["In this analogy, find the price of a single pen first, then scale up to the number of pens on the right."]
  },
  {
    id: "g3-maths-money-b-q17",
    prompt: "Usman needs 48 crayons for the art club. The tags show the price of a small box and a big box. How much does he save by buying big boxes only instead of small boxes only?",
    options: [
      { id: "a", text: "\u20b912" },
      { id: "b", text: "\u20b9120" },
      { id: "c", text: "\u20b924" },
      { id: "d", text: "\u20b9144" }
    ],
    answerId: "c",
    explanation: "48 crayons are 4 small boxes (4 \u00d7 \u20b936 = \u20b9144) or 2 big boxes (2 \u00d7 \u20b960 = \u20b9120). He saves \u20b9144 \u2212 \u20b9120 = \u20b924. \u20b912 is tempting if you compare just one big box with two small boxes (\u20b972 \u2212 \u20b960), but he needs two big boxes, so he saves twice that.",
    hints: ["Work out how many of each box Usman needs for all his crayons, find both totals, and then find the difference."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 390 116\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Price tags for a small and a big crayon box\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"390\" height=\"116\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"195.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Crayon box prices</text>\n  <g class=\"part tags\">\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"30,73.0 48,44 180,44 180,102 48,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"44\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"114\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12 crayons</text>\n  <text class=\"label value price\" x=\"114\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b936</text>\n  </g>\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"200,73.0 218,44 350,44 350,102 218,102\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"214\" cy=\"73\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"284\" y=\"66\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">24 crayons</text>\n  <text class=\"label value price\" x=\"284\" y=\"89\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b960</text>\n  </g>\n  </g>\n</svg>", "alt": "Two price tags: a box of 12 crayons costs \u20b936; a box of 24 crayons costs \u20b960."}
  },
  {
    id: "g3-maths-money-b-q18",
    prompt: "Leena has \u20b910 more than Mukesh. Mukesh has \u20b95 less than Nirmala. Nirmala has \u20b940. Who has the least money?",
    options: [
      { id: "a", text: "Mukesh" },
      { id: "b", text: "Leena" },
      { id: "c", text: "Nirmala" },
      { id: "d", text: "They all have the same" }
    ],
    answerId: "a",
    explanation: "Nirmala has \u20b940, so Mukesh has \u20b940 \u2212 \u20b95 = \u20b935, and Leena has \u20b935 + \u20b910 = \u20b945. The least is Mukesh with \u20b935. Nirmala is tempting because the clue 'Mukesh has \u20b95 less' is easy to flip, but 'less' means Mukesh is below Nirmala.",
    hints: ["Start from the only amount you know, Nirmala's, and work out each other person's money one clue at a time."]
  },
  {
    id: "g3-maths-money-b-q19",
    prompt: "Sticker sheets cost \u20b97 each. Ritika has \u20b950 and buys as many sheets as she can. How much more money would she need to buy one more sheet?",
    options: [
      { id: "a", text: "\u20b96" },
      { id: "b", text: "\u20b91" },
      { id: "c", text: "\u20b97" },
      { id: "d", text: "\u20b98" }
    ],
    answerId: "a",
    explanation: "7 sheets cost \u20b949, and 8 would cost \u20b956, so she buys 7 and has \u20b91 left. One more sheet needs \u20b97, so she needs \u20b97 \u2212 \u20b91 = \u20b96 more. \u20b91 is tempting because it is the money left over, but that is what she has, not what she is missing.",
    hints: ["Count Ritika's sticker sheets in sevens up to her money, see what is left, and compare it with the price of a sheet."]
  },
  {
    id: "g3-maths-money-b-q20",
    prompt: "Kavitha pays the exact price on the tag using exactly 9 coins. All her coins are of the two kinds shown. How many \u20b95 coins does she use?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "3" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "If all 9 coins were \u20b92 coins, they would make \u20b918. The price is \u20b933, which is \u20b915 more. Swapping a \u20b92 coin for a \u20b95 coin adds \u20b93, so she needs \u20b915 \u00f7 \u20b93 = 5 swaps: 5 coins of \u20b95 and 4 coins of \u20b92. Check: \u20b925 + \u20b98 = \u20b933. 6 is tempting because 6 \u00d7 \u20b95 = \u20b930 is close to \u20b933, but then the other 3 coins would make only \u20b96, giving \u20b936.",
    hints: ["Imagine all of Kavitha's coins were the smaller kind, find how far short of the tag price that is, and see what each swap adds."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 380 140\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A price tag and two kinds of coin\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"380\" height=\"140\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"190.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Kavitha's toy and her coins</text>\n  <g class=\"part coinpuzzle\">\n  <g class=\"part tag\">\n  <polygon class=\"part tag-body\" points=\"20,77.0 38,48 170,48 170,106 38,106\" fill=\"#fff9c4\" stroke=\"#795548\" stroke-width=\"1.5\"/>\n  <circle class=\"part tag-hole\" cx=\"34\" cy=\"77\" r=\"4\" fill=\"#fff\" stroke=\"#795548\" stroke-width=\"1\"/>\n  <text class=\"label item-name\" x=\"104\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Toy elephant</text>\n  <text class=\"label value price\" x=\"104\" y=\"93\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#c62828\">\u20b933</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"240\" cy=\"77\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"240\" cy=\"77\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"240\" y=\"81.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"300\" cy=\"77\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"300\" cy=\"77\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"300\" y=\"81.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <text class=\"label small\" x=\"270\" y=\"124\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#333\">Her only two kinds of coin</text>\n  </g>\n</svg>", "alt": "A price tag: Toy elephant \u20b933. Beside it, a \u20b95 coin and a \u20b92 coin with the note: her only two kinds of coin."}
  },
  {
    id: "g3-maths-money-b-q21",
    prompt: "Tushar and 3 friends plan to share the cost of a \u20b9180 cricket bat equally. One friend, Indira, can pay only \u20b915. The other three share the rest of the cost equally. How much does each of the other three pay?",
    options: [
      { id: "a", text: "\u20b955" },
      { id: "b", text: "\u20b945" },
      { id: "c", text: "\u20b960" },
      { id: "d", text: "\u20b965" }
    ],
    answerId: "a",
    explanation: "After Indira's \u20b915, the rest of the cost is \u20b9180 \u2212 \u20b915 = \u20b9165. The other three share it: \u20b9165 \u00f7 3 = \u20b955 each. Check: \u20b955 + \u20b955 + \u20b955 + \u20b915 = \u20b9180. \u20b945 is tempting because it is the planned equal share (\u20b9180 \u00f7 4), but Indira pays \u20b930 less than that, and the others must cover it. \u20b960 comes from \u20b9180 \u00f7 3, forgetting Indira's \u20b915.",
    hints: ["Take Indira's part away from the bat's price first, then share what is left among the friends who pay it."]
  },
  {
    id: "g3-maths-money-b-q22",
    prompt: "A parking ticket machine takes only \u20b95 coins and \u20b92 coins, and it gives no change. Vinay's ticket costs \u20b923. What is the fewest number of coins he can put in to pay exactly \u20b923?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "6" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "Using four \u20b95 coins leaves \u20b93, which \u20b92 coins cannot make. Three \u20b95 coins leave \u20b98 = four \u20b92 coins: 3 + 4 = 7 coins. One \u20b95 coin needs nine \u20b92 coins (10 coins), which is more. Two \u20b95 coins leave \u20b913, which is odd, so it fails. So 7 is the fewest. 5 is tempting because four \u20b95 coins and one more coin look enough, but no single coin is worth \u20b93.",
    hints: ["Use as many \u20b95 coins as Vinay can and check whether \u20b92 coins can make the rest; if not, drop a \u20b95 coin."]
  },
  {
    id: "g3-maths-money-b-q23",
    prompt: "Zainab needs 8 pens. Shop P sells them at \u20b912 each with the offer 'Buy 3, get 1 free'. Shop Q sells the same pen at \u20b910 each with no offer. Which shop is cheaper for 8 pens, and by how much?",
    options: [
      { id: "a", text: "Shop P, by \u20b98" },
      { id: "b", text: "Shop Q, by \u20b916" },
      { id: "c", text: "Shop Q, by \u20b98" },
      { id: "d", text: "Shop P, by \u20b924" }
    ],
    answerId: "a",
    explanation: "At Shop P, every 4 pens cost only 3 \u00d7 \u20b912 = \u20b936, so 8 pens cost \u20b936 + \u20b936 = \u20b972. At Shop Q, 8 pens cost 8 \u00d7 \u20b910 = \u20b980. Shop P is cheaper by \u20b980 \u2212 \u20b972 = \u20b98. 'Shop Q, by \u20b916' is tempting because Shop Q's pen is \u20b92 cheaper and 8 \u00d7 \u20b912 = \u20b996 is \u20b916 more than \u20b980, but that forgets the free pens at Shop P.",
    hints: ["Group Zainab's pens in fours to use Shop P's offer, find what she really pays there, then compare with the other shop."]
  },
  {
    id: "g3-maths-money-b-q24",
    prompt: "Sarita made this tally of the coins in her piggy bank. She wants to buy a \u20b9250 school bag. How many more \u20b95 coins must she save to have exactly enough?",
    options: [
      { id: "a", text: "12 coins" },
      { id: "b", text: "70 coins" },
      { id: "c", text: "13 coins" },
      { id: "d", text: "14 coins" }
    ],
    answerId: "d",
    explanation: "\u20b91 coins: \u20b98. \u20b92 coins: 11 \u00d7 \u20b92 = \u20b922. \u20b95 coins: 12 \u00d7 \u20b95 = \u20b960. \u20b910 coins: 9 \u00d7 \u20b910 = \u20b990. Total \u20b98 + \u20b922 + \u20b960 + \u20b990 = \u20b9180. She needs \u20b9250 \u2212 \u20b9180 = \u20b970 more, which is \u20b970 \u00f7 \u20b95 = 14 coins. '70 coins' is tempting because \u20b970 is the amount still needed, but each coin is worth \u20b95. 12 coins is just how many \u20b95 coins she already has.",
    hints: ["Find the value of each row of Sarita's tally, add them, then see how many \u20b95 coins fill the gap to the bag's price."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 236\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A tally chart of four kinds of coins\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"236\" fill=\"#fff\"/>\n  <text class=\"label title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Sarita's piggy-bank tally</text>\n  <g class=\"part tallies\">\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"66\" r=\"17\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"66\" r=\"14\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"70.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b91</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"71\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b91 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"52\" x2=\"174\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"52\" x2=\"182\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"52\" x2=\"190\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"52\" x2=\"198\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"74\" x2=\"202\" y2=\"58\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"52\" x2=\"218\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"226\" y1=\"52\" x2=\"226\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"234\" y1=\"52\" x2=\"234\" y2=\"80\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"112\" r=\"19\" fill=\"#9e9e9e\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"112\" r=\"16\" fill=\"#eeeeee\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"116.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b92</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"117\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b92 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"98\" x2=\"174\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"98\" x2=\"182\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"98\" x2=\"190\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"98\" x2=\"198\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"120\" x2=\"202\" y2=\"104\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"98\" x2=\"218\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"226\" y1=\"98\" x2=\"226\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"234\" y1=\"98\" x2=\"234\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"242\" y1=\"98\" x2=\"242\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"214\" y1=\"120\" x2=\"246\" y2=\"104\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"262\" y1=\"98\" x2=\"262\" y2=\"126\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"158\" r=\"20\" fill=\"#c8a200\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"158\" r=\"17\" fill=\"#ffe082\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"162.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b95</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"163\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b95 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"144\" x2=\"174\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"144\" x2=\"182\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"144\" x2=\"190\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"144\" x2=\"198\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"166\" x2=\"202\" y2=\"150\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"144\" x2=\"218\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"226\" y1=\"144\" x2=\"226\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"234\" y1=\"144\" x2=\"234\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"242\" y1=\"144\" x2=\"242\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"214\" y1=\"166\" x2=\"246\" y2=\"150\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"262\" y1=\"144\" x2=\"262\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"270\" y1=\"144\" x2=\"270\" y2=\"172\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  <g class=\"part tally\">\n  <g class=\"part coin\">\n  <circle class=\"part coin-rim\" cx=\"48\" cy=\"204\" r=\"22\" fill=\"#bdbdbd\" stroke=\"#616161\" stroke-width=\"1.2\"/>\n  <circle class=\"part coin-face\" cx=\"48\" cy=\"204\" r=\"19\" fill=\"#e0e0e0\" stroke=\"none\"/>\n  <text class=\"label value\" x=\"48\" y=\"208.5\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">\u20b910</text>\n  </g>\n  <text class=\"label tally-label\" x=\"76\" y=\"209\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#333\">\u20b910 coins</text>\n  <line class=\"mark\" x1=\"174\" y1=\"190\" x2=\"174\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"182\" y1=\"190\" x2=\"182\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"190\" y1=\"190\" x2=\"190\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"198\" y1=\"190\" x2=\"198\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark diag\" x1=\"170\" y1=\"212\" x2=\"202\" y2=\"196\" stroke=\"#c62828\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"218\" y1=\"190\" x2=\"218\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"226\" y1=\"190\" x2=\"226\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"234\" y1=\"190\" x2=\"234\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  <line class=\"mark\" x1=\"242\" y1=\"190\" x2=\"242\" y2=\"218\" stroke=\"#263238\" stroke-width=\"2.2\"/>\n  </g>\n  </g>\n</svg>", "alt": "A tally chart. \u20b91 coins: 8 marks. \u20b92 coins: 11 marks. \u20b95 coins: 12 marks. \u20b910 coins: 9 marks. Every fifth mark is a red line across the first four."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "💰", "title": "Rupees in our pocket", "body": ["We use money at the vegetable stall, the stationery shop and the school canteen. Let's learn to count it, pay and get the right change.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "We use money at the vegetable stall, the stationery shop and the school canteen. Let's learn to count it, pay and get the right change. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Coins and Notes", "steps": ["Indian money comes as coins and notes. Coins are ₹1, ₹2, ₹5, ₹10 and ₹20, and there is also a small 50-paise coin.", "Notes are ₹10, ₹20, ₹50, ₹100, ₹200 and ₹500. A bigger number on a coin or note means more money, not a bigger size.", "Check: Which is worth more: a ₹10 note or a ₹5 coin?"], "punchline": "Answer: the ₹10 note", "visual": "none", "speak": "Indian money comes as coins and notes. Coins are ₹1, ₹2, ₹5, ₹10 and ₹20, and there is also a small 50-paise coin. Notes are ₹10, ₹20, ₹50, ₹100, ₹200 and ₹500. A bigger number on a coin or note means more money, not a bigger size."},
  {"id": "s2", "type": "demo", "title": "Rupees and Paise", "steps": ["100 paise make 1 rupee. So two 50-paise coins make ₹1.", "We can write ₹3 and 50 paise for three rupees and fifty paise.", "Check: How many 50-paise coins make ₹2?"], "punchline": "Answer: 4", "visual": "none", "speak": "100 paise make 1 rupee. So two 50-paise coins make ₹1. We can write ₹3 and 50 paise for three rupees and fifty paise."},
  {"id": "s3", "type": "demo", "title": "Making an Amount in Different Ways", "steps": ["The same amount can be made in many ways. ₹10 can be one ₹10 note, two ₹5 coins, or five ₹2 coins.", "To use the fewest notes and coins, start with the biggest one that fits and keep going.", "Check: What is the fewest notes and coins to make ₹15 using ₹10 notes and ₹5 coins?"], "punchline": "Answer: 2", "visual": "none", "speak": "The same amount can be made in many ways. ₹10 can be one ₹10 note, two ₹5 coins, or five ₹2 coins. To use the fewest notes and coins, start with the biggest one that fits and keep going."},
  {"id": "s4", "type": "demo", "title": "Adding, Subtracting and Change", "steps": ["Add prices to find a bill. Subtract the bill from the money you give to find the change.", "Regroup carefully when the money you give has zeros, like ₹100 or ₹500.", "Check: A cap costs ₹43. You pay with a ₹50 note. What is your change?"], "punchline": "Answer: ₹7", "visual": "none", "speak": "Add prices to find a bill. Subtract the bill from the money you give to find the change. Regroup carefully when the money you give has zeros, like ₹100 or ₹500."},
  {"id": "s5", "type": "demo", "title": "Bills and Price Lists", "steps": ["A bill lists each item, how many you bought (quantity), the price of one (rate) and the amount.", "Amount = quantity × rate. The total is all the amounts added together.", "Check: On a bill, 5 erasers at ₹3 each. What is the amount?"], "punchline": "Answer: ₹15", "visual": "none", "speak": "A bill lists each item, how many you bought (quantity), the price of one (rate) and the amount. Amount = quantity × rate. The total is all the amounts added together."},
  {"id": "s6", "type": "demo", "title": "Multiplying and Sharing Money", "steps": ["If one pen costs ₹7, then 4 pens cost 4 × ₹7 = ₹28.", "To share money equally, divide. ₹60 shared among 5 children is ₹12 each.", "Check: ₹40 is shared equally among 4 friends. How much does each get?"], "punchline": "Answer: ₹10", "visual": "none", "speak": "If one pen costs ₹7, then 4 pens cost 4 × ₹7 = ₹28. To share money equally, divide. ₹60 shared among 5 children is ₹12 each."},
  {"id": "s7", "type": "demo", "title": "Offers and Best Buys", "steps": ["Shops give offers like 'Buy 2, get ₹5 off'. Work out what you really pay before you decide.", "Compare the whole cost of what you need at each shop. The cheaper price for one item is not always the cheaper total.", "Check: Biscuits cost ₹10 a packet. With 'Buy 2, get ₹5 off', what do 2 packets cost?"], "punchline": "Answer: ₹15", "visual": "none", "speak": "Shops give offers like 'Buy 2, get ₹5 off'. Work out what you really pay before you decide. Compare the whole cost of what you need at each shop. The cheaper price for one item is not always the cheaper total."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "Meena buys a ₹26 notebook and pays with a ₹50 note. How much change does she get?", "options": [{"id": "a", "text": "₹34"}, {"id": "b", "text": "₹76"}, {"id": "c", "text": "₹24"}, {"id": "d", "text": "₹26"}], "answerId": "c", "why": "Change = money given − price: ₹50 − ₹26 = ₹24. ₹34 is tempting if you forget to regroup, but 50 − 26 is 24.", "visual": "none", "speak": "Meena buys a twenty-six rupee notebook and pays with a fifty rupee note. How much change does she get?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["100 paise = ₹1", "Fewest coins: start with the biggest that fits", "Change = money given − bill", "Amount = quantity × rate", "Share equally by dividing", "Compare the whole cost of an offer"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g3MathsMoney: ChapterDef = {
  id: "g3-money",
  title: "Money",
  emoji: "\ud83d\udcb0",
  blurb: "Coins, notes, bills, change & best buys",
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
  paperTopics: ["add-sub", "multiply-basics"],
};

export const g3MathsMoneyQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
