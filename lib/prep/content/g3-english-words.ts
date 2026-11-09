import type { ChapterDef, PrepQuestion } from "../types";

/** Words and Word Power - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-eng-words-a-q01",
    prompt: "Look at the picture. Which is the correct spelling of the thing the arrow points to?",
    options: [
      { id: "a", text: "pillow" },
      { id: "b", text: "pilow" },
      { id: "c", text: "pillo" },
      { id: "d", text: "pilloe" }
    ],
    answerId: "a",
    explanation: "The correct spelling is p-i-l-l-o-w, with a double l and 'ow' at the end. 'pilow' is tempting, but it has only one l.",
    hints: ["Say the word for the thing the arrow points to slowly, in two parts, and picture each part written down."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 280\" width=\"520\" height=\"280\" role=\"img\" aria-label=\"A bed with a red arrow pointing at one thing on it\" font-family=\"Arial, Helvetica, sans-serif\"><title>A bed with a red arrow pointing at one thing on it</title><desc>A bed with a pink blanket. A red arrow labelled &#x27;What is this?&#x27; points to the soft white thing at the head of the bed.</desc><rect x=\"0\" y=\"0\" width=\"520\" height=\"280\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"520\" height=\"280\" rx=\"0\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"60\" y=\"150\" width=\"400\" height=\"70\" rx=\"8\" fill=\"#90caf9\" stroke=\"#1565c0\" stroke-width=\"3\"/><rect x=\"40\" y=\"110\" width=\"30\" height=\"140\" rx=\"0\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"3\"/><rect x=\"450\" y=\"140\" width=\"30\" height=\"110\" rx=\"0\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"3\"/><rect x=\"80\" y=\"112\" width=\"120\" height=\"46\" rx=\"20\" fill=\"#ffffff\" stroke=\"#607d8b\" stroke-width=\"3\"/><rect x=\"200\" y=\"140\" width=\"250\" height=\"28\" rx=\"6\" fill=\"#f48fb1\" stroke=\"#ad1457\" stroke-width=\"2\"/><path d=\"M330,50 L180,112\" fill=\"none\" stroke=\"#d32f2f\" stroke-width=\"5\" stroke-linecap=\"round\"/><polygon points=\"180,112 200,92 208,112\" fill=\"#d32f2f\" stroke=\"#d32f2f\" stroke-width=\"2\"/><rect x=\"320\" y=\"26\" width=\"150\" height=\"40\" rx=\"8\" fill=\"#ffebee\" stroke=\"#d32f2f\" stroke-width=\"2\"/><text x=\"395\" y=\"53\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#b71c1c\">What is this?</text></svg>", "alt": "A bed with a pink blanket; a red arrow labelled 'What is this?' points to the soft white thing at the head of the bed."}
  },
  {
    id: "g3-eng-words-a-q02",
    prompt: "Choose the correct spelling to fill the blank: \"Ananya is ___ a clay pot for Diwali.\"",
    options: [
      { id: "a", text: "makeing" },
      { id: "b", text: "makking" },
      { id: "c", text: "making" },
      { id: "d", text: "makin" }
    ],
    answerId: "c",
    explanation: "When a word ends in a silent e, we drop the e before adding -ing: make becomes making. 'makeing' keeps the e, so it is wrong.",
    hints: ["Ananya 'makes' things. Think what happens to the silent e at the end of 'make' when -ing is added."]
  },
  {
    id: "g3-eng-words-a-q03",
    prompt: "Three of these are things we wear. Which word is the odd one out?",
    options: [
      { id: "a", text: "saree" },
      { id: "b", text: "shirt" },
      { id: "c", text: "spoon" },
      { id: "d", text: "scarf" }
    ],
    answerId: "c",
    explanation: "A saree, a shirt and a scarf are clothes, but a spoon is used for eating. 'scarf' may seem odd because it is small, but we still wear it.",
    hints: ["Picture each thing in your mind and think where you would keep it at home."]
  },
  {
    id: "g3-eng-words-a-q04",
    prompt: "Which word in this sentence should begin with a capital letter? \"My cousin lives in jaipur near a big fort.\"",
    options: [
      { id: "a", text: "jaipur" },
      { id: "b", text: "cousin" },
      { id: "c", text: "fort" },
      { id: "d", text: "lives" }
    ],
    answerId: "a",
    explanation: "Jaipur is the name of a city, so it needs a capital J. 'fort' is tempting because forts are special, but it is not a name here.",
    hints: ["Read the sentence about the cousin aloud and check every word, not just the first one, for a missing capital."]
  },
  {
    id: "g3-eng-words-a-q05",
    prompt: "Look at the picture. Which mark should go in the box at the end of what Kiran shouts?",
    options: [
      { id: "a", text: "A question mark (?)" },
      { id: "b", text: "A comma (,)" },
      { id: "c", text: "An apostrophe (')" },
      { id: "d", text: "An exclamation mark (!)" }
    ],
    answerId: "d",
    explanation: "Kiran is shouting a sudden warning, so it needs an exclamation mark. 'A question mark (?)' is wrong, because Kiran is not asking anything.",
    hints: ["Look at Kiran's face and the flying ball. Think about how he is saying these words."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 340\" width=\"600\" height=\"340\" role=\"img\" aria-label=\"Kiran calls out to Pari as a ball flies towards her\" font-family=\"Arial, Helvetica, sans-serif\"><title>Kiran calls out to Pari as a ball flies towards her</title><desc>Kiran stands with his arms up and his mouth wide open. His speech bubble says &#x27;Watch out for the ball&#x27; with an empty box at the end. A ball flies towards Pari.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"340\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"340\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"0\" y=\"280\" width=\"600\" height=\"60\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"131.6\" y1=\"252.75\" x2=\"129.5\" y2=\"300\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><line x1=\"148.4\" y1=\"252.75\" x2=\"150.5\" y2=\"300\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><rect x=\"123.2\" y=\"205.5\" width=\"33.6\" height=\"50.400000000000006\" rx=\"6.300000000000001\" fill=\"#1e88e5\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"123.2\" y1=\"211.8\" x2=\"108.5\" y2=\"176.1\" stroke=\"#c68642\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><line x1=\"156.8\" y1=\"211.8\" x2=\"171.5\" y2=\"176.1\" stroke=\"#c68642\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><circle cx=\"140\" cy=\"189.75\" r=\"14.700000000000001\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M125.3,186.6 Q140,164.55 154.7,186.6\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"134.75\" cy=\"190.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"145.25\" cy=\"190.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"140\" cy=\"198.15\" r=\"3.1500000000000004\" fill=\"#5d1f1f\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><line x1=\"462.0\" y1=\"255.0\" x2=\"460.0\" y2=\"300\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"478.0\" y1=\"255.0\" x2=\"480.0\" y2=\"300\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"456.0,212.0 484.0,212.0 496.0,260.0 444.0,260.0\" fill=\"#f06292\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"454.0\" y1=\"216.0\" x2=\"444.0\" y2=\"248.0\" stroke=\"#8d5524\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"486.0\" y1=\"216.0\" x2=\"496.0\" y2=\"248.0\" stroke=\"#8d5524\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><rect x=\"452.0\" y=\"185.0\" width=\"36.0\" height=\"24.0\" rx=\"8.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"470\" cy=\"195.0\" r=\"14.0\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M456.0,192.0 Q470,171.0 484.0,192.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"465.0\" cy=\"196.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"475.0\" cy=\"196.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M464.0,201.0 Q470,206.0 476.0,201.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><circle cx=\"370\" cy=\"120\" r=\"16\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><path d=\"M356,112 Q370,124 384,112\" fill=\"none\" stroke=\"#d32f2f\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M260,90 Q310,80 350,112\" fill=\"none\" stroke=\"#9e9e9e\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M250,110 Q300,104 352,124\" fill=\"none\" stroke=\"#9e9e9e\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"137,75 163,75 150,170\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"20\" y=\"20\" width=\"270\" height=\"56\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"137,75 163,75 150,170\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"155.0\" y=\"54.666666666666664\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">Watch out for the ball \u25a1</text><text x=\"140\" y=\"330\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Kiran</text><text x=\"470\" y=\"330\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Pari</text></svg>", "alt": "Kiran, arms up and mouth wide open, has a speech bubble that says 'Watch out for the ball' with an empty box at the end. A ball flies towards Pari."}
  },
  {
    id: "g3-eng-words-a-q06",
    prompt: "Look at the picture of Mohan's picnic basket. In which sentence are the commas in the right places?",
    options: [
      { id: "a", text: "I packed, idlis a mat, a ball and a cap." },
      { id: "b", text: "I packed idlis a mat a ball, and, a cap." },
      { id: "c", text: "I, packed idlis, a mat a ball and a cap." },
      { id: "d", text: "I packed idlis, a mat, a ball and a cap." }
    ],
    answerId: "d",
    explanation: "Commas separate the things in the list: idlis, a mat, a ball and a cap. 'I, packed idlis, a mat a ball and a cap.' wrongly puts a comma after 'I'.",
    hints: ["Point to each thing in Mohan's picnic basket, then read each sentence aloud and pause at every comma."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 260\" width=\"560\" height=\"260\" role=\"img\" aria-label=\"Mohan&#x27;s picnic basket with four things in it\" font-family=\"Arial, Helvetica, sans-serif\"><title>Mohan&#x27;s picnic basket with four things in it</title><desc>A picnic basket holding two white idlis, a rolled red mat, a yellow ball and a blue cap.</desc><rect x=\"0\" y=\"0\" width=\"560\" height=\"260\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"560\" height=\"260\" rx=\"0\" fill=\"#fff8e1\" stroke=\"none\" stroke-width=\"0\"/><path d=\"M150,140 Q280,40 410,140\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"8\" stroke-linecap=\"round\"/><rect x=\"130\" y=\"140\" width=\"300\" height=\"100\" rx=\"10\" fill=\"#d7a86e\" stroke=\"#6d4c41\" stroke-width=\"3\"/><line x1=\"140\" y1=\"145\" x2=\"140\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"164\" y1=\"145\" x2=\"164\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"145\" x2=\"188\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"145\" x2=\"212\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"236\" y1=\"145\" x2=\"236\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"145\" x2=\"260\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"284\" y1=\"145\" x2=\"284\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"308\" y1=\"145\" x2=\"308\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"332\" y1=\"145\" x2=\"332\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"356\" y1=\"145\" x2=\"356\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"380\" y1=\"145\" x2=\"380\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"404\" y1=\"145\" x2=\"404\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"428\" y1=\"145\" x2=\"428\" y2=\"235\" stroke=\"#b07c45\" stroke-width=\"2\" stroke-linecap=\"round\"/><ellipse cx=\"190\" cy=\"140\" rx=\"26\" ry=\"10\" fill=\"#ffffff\" stroke=\"#9e9e9e\" stroke-width=\"2\"/><ellipse cx=\"225\" cy=\"132\" rx=\"26\" ry=\"10\" fill=\"#ffffff\" stroke=\"#9e9e9e\" stroke-width=\"2\"/><rect x=\"250\" y=\"100\" width=\"50\" height=\"46\" rx=\"22\" fill=\"#ef5350\" stroke=\"#b71c1c\" stroke-width=\"2\"/><path d=\"M256,112 Q275,104 294,112 M256,124 Q275,116 294,124 M256,136 Q275,128 294,136\" fill=\"none\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"330\" cy=\"125\" r=\"22\" fill=\"#ffca28\" stroke=\"#e65100\" stroke-width=\"2\"/><path d=\"M310,118 Q330,132 350,118\" fill=\"none\" stroke=\"#e65100\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M370,140 Q395,100 420,140 Z\" fill=\"#42a5f5\" stroke=\"#0d47a1\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"370\" y1=\"140\" x2=\"440\" y2=\"140\" stroke=\"#0d47a1\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"280\" y=\"30\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">Mohan&#x27;s picnic basket</text></svg>", "alt": "A picnic basket holding two white idlis, a rolled red mat, a yellow ball and a blue cap."}
  },
  {
    id: "g3-eng-words-a-q07",
    prompt: "Sunil writes a note: \"Please ___ forget your water bottle.\" Which is the correct short form of \"do not\"?",
    options: [
      { id: "a", text: "do'nt" },
      { id: "b", text: "dont'" },
      { id: "c", text: "don't" },
      { id: "d", text: "dont" }
    ],
    answerId: "c",
    explanation: "In don't, the apostrophe takes the place of the missing o in 'not'. 'do'nt' puts the apostrophe in the wrong place, before the n.",
    hints: ["Say 'do not' quickly, as Sunil would, and listen for the sound that disappears from the second word."]
  },
  {
    id: "g3-eng-words-a-q08",
    prompt: "Look at the picture. Which sentence shows Nanaji's words correctly with speech marks?",
    options: [
      { id: "a", text: "\"Nanaji said, let's plant a mango tree.\"" },
      { id: "b", text: "Nanaji \"said,\" Let's plant a mango tree." },
      { id: "c", text: "Nanaji said, Let's \"plant a mango\" tree." },
      { id: "d", text: "Nanaji said, \"Let's plant a mango tree.\"" }
    ],
    answerId: "d",
    explanation: "Only Nanaji's own words go inside the speech marks. '\"Nanaji said, let's plant a mango tree.\"' wrongly puts 'Nanaji said' inside them too.",
    hints: ["Find the exact words in Nanaji's speech bubble. Speech marks should hug those words and nothing else."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 300\" width=\"560\" height=\"300\" role=\"img\" aria-label=\"Nanaji holds a small spade next to a young plant and speaks\" font-family=\"Arial, Helvetica, sans-serif\"><title>Nanaji holds a small spade next to a young plant and speaks</title><desc>Nanaji, an older man in white, holds a small spade near a young plant. His speech bubble says: Let&#x27;s plant a mango tree.</desc><rect x=\"0\" y=\"0\" width=\"560\" height=\"300\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"560\" height=\"300\" rx=\"0\" fill=\"#f1f8e9\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"0\" y=\"250\" width=\"560\" height=\"50\" rx=\"0\" fill=\"#a1887f\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"141.2\" y1=\"220.5\" x2=\"139.0\" y2=\"270\" stroke=\"#bdbdbd\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><line x1=\"158.8\" y1=\"220.5\" x2=\"161.0\" y2=\"270\" stroke=\"#bdbdbd\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><rect x=\"132.4\" y=\"171.0\" width=\"35.2\" height=\"52.800000000000004\" rx=\"6.6000000000000005\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"132.4\" y1=\"177.6\" x2=\"121.4\" y2=\"212.8\" stroke=\"#b5651d\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><line x1=\"167.6\" y1=\"177.6\" x2=\"196.2\" y2=\"168.8\" stroke=\"#b5651d\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><circle cx=\"150\" cy=\"154.5\" r=\"15.400000000000002\" fill=\"#b5651d\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M134.6,151.2 Q150,128.1 165.4,151.2\" fill=\"#9e9e9e\" stroke=\"#9e9e9e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"144.5\" cy=\"155.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"155.5\" cy=\"155.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M143.4,161.1 Q150,166.6 156.6,161.1\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><rect x=\"196\" y=\"196\" width=\"14\" height=\"50\" rx=\"0\" fill=\"#6d4c41\" stroke=\"#4e342e\" stroke-width=\"1\"/><line x1=\"203\" y1=\"246\" x2=\"203\" y2=\"262\" stroke=\"#6d4c41\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M380,250 L380,190\" fill=\"none\" stroke=\"#2e7d32\" stroke-width=\"4\" stroke-linecap=\"round\"/><ellipse cx=\"370\" cy=\"190\" rx=\"14\" ry=\"6\" fill=\"#66bb6a\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/><ellipse cx=\"392\" cy=\"182\" rx=\"14\" ry=\"6\" fill=\"#66bb6a\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/><polygon points=\"251,89 277,89 170,140\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"240\" y=\"30\" width=\"290\" height=\"60\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"251,89 277,89 170,140\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"385.0\" y=\"66.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Let&#x27;s plant a mango tree.</text><text x=\"150\" y=\"292\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Nanaji</text></svg>", "alt": "Nanaji holds a small spade near a young plant. His speech bubble says: Let's plant a mango tree."}
  },
  {
    id: "g3-eng-words-a-q09",
    prompt: "Look at the picture. Which word fits? \"Amma mixes ___ and water to make the dough for rotis.\"",
    options: [
      { id: "a", text: "flour" },
      { id: "b", text: "flower" },
      { id: "c", text: "flor" },
      { id: "d", text: "flowr" }
    ],
    answerId: "a",
    explanation: "Flour is the powder made from wheat for rotis. 'flower' sounds the same, but it is the colourful part of a plant.",
    hints: ["Two of the words sound the same. Think which one names the soft white powder in Amma's bowl."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 240\" width=\"560\" height=\"240\" role=\"img\" aria-label=\"Things Amma uses to make rotis\" font-family=\"Arial, Helvetica, sans-serif\"><title>Things Amma uses to make rotis</title><desc>A steel bowl full of soft white powder, a round ball of dough, and a wooden rolling pin on the kitchen counter.</desc><rect x=\"0\" y=\"0\" width=\"560\" height=\"240\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"560\" height=\"240\" rx=\"0\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"20\" y=\"170\" width=\"520\" height=\"50\" rx=\"0\" fill=\"#bcaaa4\" stroke=\"#6d4c41\" stroke-width=\"2\"/><path d=\"M70,120 Q130,190 190,120 Z\" fill=\"#b0bec5\" stroke=\"#455a64\" stroke-width=\"3\" stroke-linecap=\"round\"/><ellipse cx=\"130\" cy=\"120\" rx=\"60\" ry=\"14\" fill=\"#fafafa\" stroke=\"#455a64\" stroke-width=\"3\"/><path d=\"M95,118 Q130,90 165,118\" fill=\"#ffffff\" stroke=\"#bdbdbd\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"280\" cy=\"150\" r=\"30\" fill=\"#ffe0b2\" stroke=\"#a1887f\" stroke-width=\"2\"/><rect x=\"350\" y=\"140\" width=\"140\" height=\"20\" rx=\"8\" fill=\"#d7a86e\" stroke=\"#6d4c41\" stroke-width=\"2\"/><rect x=\"330\" y=\"144\" width=\"24\" height=\"12\" rx=\"4\" fill=\"#a1887f\" stroke=\"#6d4c41\" stroke-width=\"2\"/><rect x=\"486\" y=\"144\" width=\"24\" height=\"12\" rx=\"4\" fill=\"#a1887f\" stroke=\"#6d4c41\" stroke-width=\"2\"/><text x=\"280\" y=\"40\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">Making rotis</text></svg>", "alt": "A steel bowl full of soft white powder, a round ball of dough and a wooden rolling pin on a kitchen counter."}
  },
  {
    id: "g3-eng-words-a-q10",
    prompt: "Choose the words that fit both blanks: \"Our team ___ the kho-kho match by just ___ point.\"",
    options: [
      { id: "a", text: "one, won" },
      { id: "b", text: "won, one" },
      { id: "c", text: "won, won" },
      { id: "d", text: "one, one" }
    ],
    answerId: "b",
    explanation: "The team 'won' the match, and it was by 'one' point, a number. 'one, won' has the same two words, but in the wrong blanks.",
    hints: ["The two missing words sound the same but are spelt differently. Think about what each blank in the kho-kho sentence needs."]
  },
  {
    id: "g3-eng-words-a-q11",
    prompt: "In this sentence, what does \"bright\" mean? \"Nisha is a bright girl; she solves every riddle quickly.\"",
    options: [
      { id: "a", text: "shining" },
      { id: "b", text: "colourful" },
      { id: "c", text: "noisy" },
      { id: "d", text: "clever" }
    ],
    answerId: "d",
    explanation: "Solving riddles quickly shows that Nisha is clever. 'shining' is what bright means for the sun or a lamp, not for a girl solving riddles.",
    hints: ["Look at the second half of the sentence: what does Nisha do with every riddle?"]
  },
  {
    id: "g3-eng-words-a-q12",
    prompt: "In this sentence, what is a \"bat\"? \"A bat hung upside down from the old banyan tree all day.\"",
    options: [
      { id: "a", text: "A wooden stick for cricket" },
      { id: "b", text: "An animal that flies at night" },
      { id: "c", text: "A kind of ball" },
      { id: "d", text: "A bird's nest" }
    ],
    answerId: "b",
    explanation: "This bat is a flying animal that sleeps upside down in the day. 'A wooden stick for cricket' is the other meaning, but it does not hang in trees all day.",
    hints: ["Think about what could hang upside down from a banyan tree all day long."]
  },
  {
    id: "g3-eng-words-a-q13",
    prompt: "Choose the word that fits: \"Uncle bought a ___ of grapes from the market.\"",
    options: [
      { id: "a", text: "bunch" },
      { id: "b", text: "pair" },
      { id: "c", text: "herd" },
      { id: "d", text: "slice" }
    ],
    answerId: "a",
    explanation: "Grapes grow together in a bunch. 'pair' means just two things, like a pair of socks, so it is not used for grapes.",
    hints: ["Think how grapes grow together on one stem, and the word we use for that group."]
  },
  {
    id: "g3-eng-words-a-q14",
    prompt: "Choose the word that fits: \"Every morning, Dadi ___ her prayers before breakfast.\"",
    options: [
      { id: "a", text: "tells" },
      { id: "b", text: "says" },
      { id: "c", text: "speaks" },
      { id: "d", text: "talks" }
    ],
    answerId: "b",
    explanation: "We 'say' our prayers. 'tells' goes with a story or a joke, not with prayers.",
    hints: ["Read the whole sentence aloud with each word; only one sounds right next to 'prayers'."]
  },
  {
    id: "g3-eng-words-a-q15",
    prompt: "Look at the letter tiles. Use every tile once to make the name of a pet. Which word is it?",
    options: [
      { id: "a", text: "parrot" },
      { id: "b", text: "potter" },
      { id: "c", text: "carrot" },
      { id: "d", text: "pirate" }
    ],
    answerId: "a",
    explanation: "P-A-R-R-O-T uses every tile once. 'carrot' sounds close, but it needs a C, and there is no C tile.",
    hints: ["Count the letter tiles carefully. There are two R tiles and only one T tile."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 150\" width=\"560\" height=\"150\" role=\"img\" aria-label=\"Six letter tiles to rearrange\" font-family=\"Arial, Helvetica, sans-serif\"><title>Six letter tiles to rearrange</title><desc>Six letter tiles: R, O, T, P, A, R.</desc><rect x=\"0\" y=\"0\" width=\"560\" height=\"150\" fill=\"#ffffff\"/><rect x=\"53.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"85.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">R</text><rect x=\"131.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"163.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">O</text><rect x=\"209.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"241.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">T</text><rect x=\"287.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"319.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">P</text><rect x=\"365.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"397.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">A</text><rect x=\"443.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"475.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">R</text></svg>", "alt": "Six letter tiles: R, O, T, P, A, R."}
  },
  {
    id: "g3-eng-words-a-q16",
    prompt: "Look at the word tiles. Which sentence uses all the tiles in the right order?",
    options: [
      { id: "a", text: "Our plants always waters the gardener." },
      { id: "b", text: "The gardener waters always our plants." },
      { id: "c", text: "Our gardener waters the always plants." },
      { id: "d", text: "Our gardener always waters the plants." }
    ],
    answerId: "d",
    explanation: "The gardener does the watering, so 'Our gardener' comes first. 'Our plants always waters the gardener.' uses every tile, but plants cannot water people.",
    hints: ["Before you order the tiles, ask who does the watering and what gets watered."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 130\" width=\"700\" height=\"130\" role=\"img\" aria-label=\"Six word tiles to put in order\" font-family=\"Arial, Helvetica, sans-serif\"><title>Six word tiles to put in order</title><desc>Six word tiles: always, the, Our, waters, plants, gardener.</desc><rect x=\"0\" y=\"0\" width=\"700\" height=\"130\" fill=\"#ffffff\"/><rect x=\"18.0\" y=\"40\" width=\"110\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"73.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">always</text><rect x=\"140.0\" y=\"40\" width=\"68\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"174.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">the</text><rect x=\"220.0\" y=\"40\" width=\"68\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"254.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">Our</text><rect x=\"300.0\" y=\"40\" width=\"110\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"355.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">waters</text><rect x=\"422.0\" y=\"40\" width=\"110\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"477.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">plants</text><rect x=\"544.0\" y=\"40\" width=\"138\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"613.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">gardener</text></svg>", "alt": "Six word tiles: always, the, Our, waters, plants, gardener."}
  },
  {
    id: "g3-eng-words-a-q17",
    prompt: "Look at the picture. Anu's balloon has just flown away. How does Anu feel?",
    options: [
      { id: "a", text: "sad" },
      { id: "b", text: "proud" },
      { id: "c", text: "excited" },
      { id: "d", text: "sleepy" }
    ],
    answerId: "a",
    explanation: "Anu has a tear and a downturned mouth because she lost her balloon. 'excited' is how we feel when something good is about to happen.",
    hints: ["Look closely at Anu's face and at the balloon floating away from her."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 320\" width=\"480\" height=\"320\" role=\"img\" aria-label=\"Anu looks up at her balloon floating away\" font-family=\"Arial, Helvetica, sans-serif\"><title>Anu looks up at her balloon floating away</title><desc>Anu has a tear on her cheek and her mouth turns down. A red balloon with a loose string floats high in the sky, away from her.</desc><rect x=\"0\" y=\"0\" width=\"480\" height=\"320\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"320\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"158.8\" y1=\"237.0\" x2=\"156.0\" y2=\"300\" stroke=\"#8d5524\" stroke-width=\"8.399999999999999\" stroke-linecap=\"round\"/><line x1=\"181.2\" y1=\"237.0\" x2=\"184.0\" y2=\"300\" stroke=\"#8d5524\" stroke-width=\"8.399999999999999\" stroke-linecap=\"round\"/><polygon points=\"150.4,176.8 189.6,176.8 206.4,244.0 133.6,244.0\" fill=\"#ffb74d\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"147.6\" y1=\"182.4\" x2=\"133.6\" y2=\"227.2\" stroke=\"#8d5524\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"192.4\" y1=\"182.4\" x2=\"206.4\" y2=\"227.2\" stroke=\"#8d5524\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><rect x=\"144.8\" y=\"139.0\" width=\"50.4\" height=\"33.599999999999994\" rx=\"11.2\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"170\" cy=\"153.0\" r=\"19.599999999999998\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M150.4,148.8 Q170,119.4 189.6,148.8\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"163.0\" cy=\"154.4\" r=\"2.52\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"177.0\" cy=\"154.4\" r=\"2.52\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M161.6,167.0 Q170,160.0 178.4,167.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M154,160 Q150,172 156,178 Q162,172 158,160 Z\" fill=\"#4fc3f7\" stroke=\"#0277bd\" stroke-width=\"1\" stroke-linecap=\"round\"/><ellipse cx=\"380\" cy=\"70\" rx=\"14\" ry=\"18\" fill=\"#e53935\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M380,88 Q370,120 390,150 Q400,170 385,190\" fill=\"none\" stroke=\"#555555\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"170\" y=\"316\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Anu</text></svg>", "alt": "Anu has a tear on her cheek and her mouth turns down. A red balloon with a loose string floats away high in the sky."}
  },
  {
    id: "g3-eng-words-a-q18",
    prompt: "Look at the word cards. Which word is the odd one out?",
    options: [
      { id: "a", text: "mango" },
      { id: "b", text: "papaya" },
      { id: "c", text: "potato" },
      { id: "d", text: "guava" }
    ],
    answerId: "c",
    explanation: "Mango, papaya and guava are fruits, but a potato is a vegetable. 'papaya' may look different because it is big, but it is still a fruit.",
    hints: ["Think about how each food on the word cards is usually eaten or cooked at home."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 170\" width=\"640\" height=\"170\" role=\"img\" aria-label=\"Four word cards\" font-family=\"Arial, Helvetica, sans-serif\"><title>Four word cards</title><desc>Four word cards: mango, papaya, guava, potato.</desc><rect x=\"0\" y=\"0\" width=\"640\" height=\"170\" fill=\"#ffffff\"/><rect x=\"13.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"3\"/><text x=\"83.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">mango</text><rect x=\"171.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"3\"/><text x=\"241.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">papaya</text><rect x=\"329.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"3\"/><text x=\"399.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">guava</text><rect x=\"487.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"3\"/><text x=\"557.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">potato</text></svg>", "alt": "Four word cards: mango, papaya, guava, potato."}
  },
  {
    id: "g3-eng-words-a-q19",
    prompt: "Which word is the odd one out in this group: puppy, calf, kitten, duck?",
    options: [
      { id: "a", text: "calf" },
      { id: "b", text: "puppy" },
      { id: "c", text: "kitten" },
      { id: "d", text: "duck" }
    ],
    answerId: "d",
    explanation: "A puppy, a calf and a kitten are baby animals, but a duck is grown up; its baby is a duckling. 'calf' may look odd as a farm animal, but it is a baby too.",
    hints: ["Think about the age of each animal named in the group."]
  },
  {
    id: "g3-eng-words-a-q20",
    prompt: "Cow is to shed as horse is to ___.",
    options: [
      { id: "a", text: "kennel" },
      { id: "b", text: "stable" },
      { id: "c", text: "nest" },
      { id: "d", text: "burrow" }
    ],
    answerId: "b",
    explanation: "A cow lives in a shed and a horse lives in a stable. 'kennel' is a home too, but it is built for a dog.",
    hints: ["A shed is the home people build for a cow. Think of the home people build for a horse."]
  },
  {
    id: "g3-eng-words-a-q21",
    prompt: "Tailor is to needle as farmer is to ___.",
    options: [
      { id: "a", text: "scissors" },
      { id: "b", text: "plough" },
      { id: "c", text: "pen" },
      { id: "d", text: "chalk" }
    ],
    answerId: "b",
    explanation: "A tailor uses a needle to sew, and a farmer uses a plough to dig the field. 'scissors' is another tailor's tool, so it does not match the farmer.",
    hints: ["A tailor works with a needle. Think of the tool a farmer uses to work in the fields."]
  },
  {
    id: "g3-eng-words-a-q22",
    prompt: "Which sentence has a spelling mistake?",
    options: [
      { id: "a", text: "We ate our lunch under the tree." },
      { id: "b", text: "The wind shook the old window." },
      { id: "c", text: "Their are ten mangoes in the basket." },
      { id: "d", text: "Please put your shoes over there." }
    ],
    answerId: "c",
    explanation: "It should be 'There are ten mangoes', because their means 'belonging to them'. 'Please put your shoes over there.' is correct, as there tells a place.",
    hints: ["Read each sentence slowly to hunt for the spelling mistake. Watch for words that sound alike but are spelt differently."]
  },
  {
    id: "g3-eng-words-a-q23",
    prompt: "In this sentence, what does \"light\" mean? \"The bag of cotton is so light that little Chotu can lift it.\"",
    options: [
      { id: "a", text: "bright" },
      { id: "b", text: "not heavy" },
      { id: "c", text: "a lamp" },
      { id: "d", text: "pale in colour" }
    ],
    answerId: "b",
    explanation: "Chotu can lift the bag because it is not heavy. 'bright' is another meaning of light, but it is about how much something shines.",
    hints: ["Think about what makes it easy for little Chotu to lift the bag of cotton."]
  },
  {
    id: "g3-eng-words-a-q24",
    prompt: "Which sentence uses apostrophes correctly in every short form and belonging word?",
    options: [
      { id: "a", text: "Its raining, so lets take Manus umbrella." },
      { id: "b", text: "It's raining so, let's take Manus' umbrella." },
      { id: "c", text: "It's raining, so let's take Manu's umbrella." },
      { id: "d", text: "Its' raining, so let's take Manu's umbrella." }
    ],
    answerId: "c",
    explanation: "It's (it is), let's (let us) and Manu's (belongs to Manu) each need an apostrophe. 'Its raining, so lets take Manus umbrella.' has no apostrophes at all.",
    hints: ["Check three punctuated spots: the short form of 'it is', the short form of 'let us', and the umbrella's owner."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-eng-words-b-q01",
    prompt: "Look at the picture. Which is the correct spelling of this thing?",
    options: [
      { id: "a", text: "buket" },
      { id: "b", text: "bukket" },
      { id: "c", text: "bucket" },
      { id: "d", text: "buckit" }
    ],
    answerId: "c",
    explanation: "Bucket is spelt b-u-c-k-e-t, with 'ck' in the middle. 'buket' is tempting because it sounds the same, but it is missing the c.",
    hints: ["Say the word slowly in two parts and think carefully about the spelling of the middle sound."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 260\" width=\"360\" height=\"260\" role=\"img\" aria-label=\"A drawing of one thing used to carry water\" font-family=\"Arial, Helvetica, sans-serif\"><title>A drawing of one thing used to carry water</title><desc>A blue plastic container, wide at the top and narrow at the bottom, with a curved handle over it.</desc><rect x=\"0\" y=\"0\" width=\"360\" height=\"260\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"360\" height=\"260\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"none\" stroke-width=\"0\"/><path d=\"M110,90 L250,90 L230,220 L130,220 Z\" fill=\"#4fc3f7\" stroke=\"#0277bd\" stroke-width=\"3\" stroke-linecap=\"round\"/><ellipse cx=\"180\" cy=\"90\" rx=\"70\" ry=\"14\" fill=\"#81d4fa\" stroke=\"#0277bd\" stroke-width=\"3\"/><path d=\"M112,92 Q180,10 248,92\" fill=\"none\" stroke=\"#455a64\" stroke-width=\"4\" stroke-linecap=\"round\"/><rect x=\"120\" y=\"230\" width=\"120\" height=\"10\" rx=\"4\" fill=\"#ce93d8\" stroke=\"none\" stroke-width=\"0\"/></svg>", "alt": "A blue plastic container, wide at the top and narrow at the bottom, with a curved handle."}
  },
  {
    id: "g3-eng-words-b-q02",
    prompt: "Choose the correct spelling to fill the blank: \"The children are ___ in the pool.\"",
    options: [
      { id: "a", text: "swiming" },
      { id: "b", text: "swimmming" },
      { id: "c", text: "swimmeing" },
      { id: "d", text: "swimming" }
    ],
    answerId: "d",
    explanation: "For short words like swim, we double the last letter before -ing: swimming. 'swiming' is tempting, but it has only one m.",
    hints: ["The children 'swim'. Think about 'swim' plus -ing: does the last letter of 'swim' change before the ending?"]
  },
  {
    id: "g3-eng-words-b-q03",
    prompt: "Look at the word cards. Which animal is the odd one out?",
    options: [
      { id: "a", text: "goldfish" },
      { id: "b", text: "parrot" },
      { id: "c", text: "tiger" },
      { id: "d", text: "puppy" }
    ],
    answerId: "c",
    explanation: "A goldfish, a parrot and a puppy can be pets at home, but a tiger is a wild animal. 'goldfish' may seem odd because it lives in water, but it is a pet.",
    hints: ["Think about where each animal on the word cards usually lives."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 170\" width=\"640\" height=\"170\" role=\"img\" aria-label=\"Four word cards\" font-family=\"Arial, Helvetica, sans-serif\"><title>Four word cards</title><desc>Four word cards: goldfish, parrot, puppy, tiger.</desc><rect x=\"0\" y=\"0\" width=\"640\" height=\"170\" fill=\"#ffffff\"/><rect x=\"13.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e3f2fd\" stroke=\"#1565c0\" stroke-width=\"3\"/><text x=\"83.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">goldfish</text><rect x=\"171.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e3f2fd\" stroke=\"#1565c0\" stroke-width=\"3\"/><text x=\"241.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">parrot</text><rect x=\"329.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e3f2fd\" stroke=\"#1565c0\" stroke-width=\"3\"/><text x=\"399.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">puppy</text><rect x=\"487.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#e3f2fd\" stroke=\"#1565c0\" stroke-width=\"3\"/><text x=\"557.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">tiger</text></svg>", "alt": "Four word cards: goldfish, parrot, puppy, tiger."}
  },
  {
    id: "g3-eng-words-b-q04",
    prompt: "Which word in this sentence should begin with a capital letter? \"Our school will stay closed on friday for the festival.\"",
    options: [
      { id: "a", text: "school" },
      { id: "b", text: "closed" },
      { id: "c", text: "festival" },
      { id: "d", text: "friday" }
    ],
    answerId: "d",
    explanation: "Days of the week, like Friday, always begin with a capital letter. 'festival' is tempting because festivals are special, but it is not a name here.",
    hints: ["Look at each word after 'Our school will stay' and ask if any of them is a name that must always look special."]
  },
  {
    id: "g3-eng-words-b-q05",
    prompt: "Jai is asking the shopkeeper about a spinning top in the picture. How should his sentence end?",
    options: [
      { id: "a", text: "With a full stop (.)" },
      { id: "b", text: "With a question mark (?)" },
      { id: "c", text: "With an exclamation mark (!)" },
      { id: "d", text: "With a comma (,)" }
    ],
    answerId: "b",
    explanation: "Jai wants to know the price, so he is asking a question. 'With a full stop (.)' is for a telling sentence, not a question.",
    hints: ["Read Jai's words in the bubble and think about what he wants from the shopkeeper."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 330\" width=\"600\" height=\"330\" role=\"img\" aria-label=\"Jai at a toy stall with spinning tops\" font-family=\"Arial, Helvetica, sans-serif\"><title>Jai at a toy stall with spinning tops</title><desc>A toy stall with three coloured spinning tops. Jai points at one and his speech bubble says &#x27;How much is this lattu&#x27; with an empty box at the end.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"330\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"330\" rx=\"0\" fill=\"#fff3e0\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"30\" y=\"180\" width=\"260\" height=\"110\" rx=\"0\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"3\"/><path d=\"M48,150 L92,150 L70,190 Z\" fill=\"#e53935\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"140\" x2=\"70\" y2=\"152\" stroke=\"#333333\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M128,150 L172,150 L150,190 Z\" fill=\"#43a047\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"140\" x2=\"150\" y2=\"152\" stroke=\"#333333\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M208,150 L252,150 L230,190 Z\" fill=\"#1e88e5\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"140\" x2=\"230\" y2=\"152\" stroke=\"#333333\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"154.4\" y1=\"148.5\" x2=\"153.0\" y2=\"180\" stroke=\"#37474f\" stroke-width=\"4.199999999999999\" stroke-linecap=\"round\"/><line x1=\"165.6\" y1=\"148.5\" x2=\"167.0\" y2=\"180\" stroke=\"#37474f\" stroke-width=\"4.199999999999999\" stroke-linecap=\"round\"/><rect x=\"148.8\" y=\"117.0\" width=\"22.4\" height=\"33.599999999999994\" rx=\"4.199999999999999\" fill=\"#00897b\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"148.8\" y1=\"121.2\" x2=\"141.8\" y2=\"143.6\" stroke=\"#8d5524\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"171.2\" y1=\"121.2\" x2=\"178.2\" y2=\"143.6\" stroke=\"#8d5524\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"160\" cy=\"106.5\" r=\"9.799999999999999\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M150.2,104.4 Q160,89.7 169.8,104.4\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"156.5\" cy=\"107.2\" r=\"1.26\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"163.5\" cy=\"107.2\" r=\"1.26\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M155.8,110.7 Q160,114.2 164.2,110.7\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"441.6\" y1=\"262.75\" x2=\"439.5\" y2=\"310\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><line x1=\"458.4\" y1=\"262.75\" x2=\"460.5\" y2=\"310\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><rect x=\"433.2\" y=\"215.5\" width=\"33.6\" height=\"50.400000000000006\" rx=\"6.300000000000001\" fill=\"#fdd835\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"466.8\" y1=\"221.8\" x2=\"477.3\" y2=\"255.4\" stroke=\"#a0522d\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><line x1=\"433.2\" y1=\"221.8\" x2=\"405.9\" y2=\"213.39999999999998\" stroke=\"#a0522d\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><circle cx=\"450\" cy=\"199.75\" r=\"14.700000000000001\" fill=\"#a0522d\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M435.3,196.6 Q450,174.55 464.7,196.6\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"444.75\" cy=\"200.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"455.25\" cy=\"200.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M443.7,206.05 Q450,211.3 456.3,206.05\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"437,75 463,75 450,170\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"330\" y=\"20\" width=\"250\" height=\"56\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"437,75 463,75 450,170\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"455.0\" y=\"54.333333333333336\" font-size=\"19\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">How much is this lattu \u25a1</text><text x=\"450\" y=\"326\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Jai</text></svg>", "alt": "A toy stall with three spinning tops. Jai points at one; his speech bubble says 'How much is this lattu' with an empty box at the end."}
  },
  {
    id: "g3-eng-words-b-q06",
    prompt: "Which sentence about Jaya's shopping at the mela has its comma in the right place?",
    options: [
      { id: "a", text: "Jaya, bought bangles ribbons and a mirror at the mela." },
      { id: "b", text: "Jaya bought bangles ribbons, and, a mirror at the mela." },
      { id: "c", text: "Jaya bought bangles, ribbons and a mirror at the mela." },
      { id: "d", text: "Jaya bought, bangles ribbons and a mirror, at the mela." }
    ],
    answerId: "c",
    explanation: "The comma separates the first two things in the list: bangles, ribbons and a mirror. 'Jaya, bought bangles ribbons' wrongly splits Jaya from what she did.",
    hints: ["Find the list of things Jaya bought, then read each sentence aloud and pause at every comma."]
  },
  {
    id: "g3-eng-words-b-q07",
    prompt: "Which is the correct short form of \"it is\" in this sentence? \"___ time for lunch!\"",
    options: [
      { id: "a", text: "Its" },
      { id: "b", text: "It'is" },
      { id: "c", text: "It's" },
      { id: "d", text: "Its'" }
    ],
    answerId: "c",
    explanation: "It's is the short form of 'it is'. 'Its' without an apostrophe means 'belonging to it', as in 'The cat licked its paw.'",
    hints: ["The short form must still mean 'it is' in the lunch sentence. Think where the missing letter used to be."]
  },
  {
    id: "g3-eng-words-b-q08",
    prompt: "Look at the picture. The paint box belongs to Isha. Which sentence is written correctly?",
    options: [
      { id: "a", text: "This is Isha's paint box." },
      { id: "b", text: "This is Ishas paint box." },
      { id: "c", text: "This is Ishas' paint box." },
      { id: "d", text: "This is Isha paint's box." }
    ],
    answerId: "a",
    explanation: "Isha's, with an apostrophe before the s, shows the box belongs to one girl. 'This is Ishas' paint box.' puts the apostrophe after the s, as if there were many Ishas.",
    hints: ["The owner of the paint box needs a small mark to show it belongs to her. Look carefully at where that mark sits."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 300\" width=\"480\" height=\"300\" role=\"img\" aria-label=\"Isha holding an open paint box\" font-family=\"Arial, Helvetica, sans-serif\"><title>Isha holding an open paint box</title><desc>Isha, a girl in a red frock, holds out an open box with six round colours inside.</desc><rect x=\"0\" y=\"0\" width=\"480\" height=\"300\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"300\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"149.6\" y1=\"221.5\" x2=\"147.0\" y2=\"280\" stroke=\"#c68642\" stroke-width=\"7.800000000000001\" stroke-linecap=\"round\"/><line x1=\"170.4\" y1=\"221.5\" x2=\"173.0\" y2=\"280\" stroke=\"#c68642\" stroke-width=\"7.800000000000001\" stroke-linecap=\"round\"/><polygon points=\"141.8,165.6 178.2,165.6 193.8,228.0 126.19999999999999,228.0\" fill=\"#ef5350\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"139.2\" y1=\"170.8\" x2=\"126.19999999999999\" y2=\"212.39999999999998\" stroke=\"#c68642\" stroke-width=\"6.5\" stroke-linecap=\"round\"/><line x1=\"180.8\" y1=\"170.8\" x2=\"214.6\" y2=\"160.39999999999998\" stroke=\"#c68642\" stroke-width=\"6.5\" stroke-linecap=\"round\"/><rect x=\"136.6\" y=\"130.5\" width=\"46.800000000000004\" height=\"31.200000000000003\" rx=\"10.4\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"160\" cy=\"143.5\" r=\"18.2\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M141.8,139.6 Q160,112.3 178.2,139.6\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"153.5\" cy=\"144.8\" r=\"2.3400000000000003\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"166.5\" cy=\"144.8\" r=\"2.3400000000000003\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M152.2,151.3 Q160,157.8 167.8,151.3\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><rect x=\"220\" y=\"150\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"3\"/><circle cx=\"240\" cy=\"175\" r=\"9\" fill=\"#e53935\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"264\" cy=\"175\" r=\"9\" fill=\"#fdd835\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"288\" cy=\"175\" r=\"9\" fill=\"#1e88e5\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"312\" cy=\"175\" r=\"9\" fill=\"#43a047\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"336\" cy=\"175\" r=\"9\" fill=\"#8e24aa\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"360\" cy=\"175\" r=\"9\" fill=\"#fb8c00\" stroke=\"#333333\" stroke-width=\"1\"/><text x=\"160\" y=\"296\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Isha</text></svg>", "alt": "Isha, a girl in a red frock, holds out an open box with six round colours inside."}
  },
  {
    id: "g3-eng-words-b-q09",
    prompt: "Look at the picture. Which word fits? \"The monkey has a long, curly ___.\"",
    options: [
      { id: "a", text: "tale" },
      { id: "b", text: "tial" },
      { id: "c", text: "tail" },
      { id: "d", text: "tayl" }
    ],
    answerId: "c",
    explanation: "A tail is the part at the back of an animal's body. 'tale' sounds the same, but it means a story.",
    hints: ["Two of the words sound the same. Think which one names a part of the monkey's body in the picture."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 300\" width=\"480\" height=\"300\" role=\"img\" aria-label=\"A monkey holding on to a branch\" font-family=\"Arial, Helvetica, sans-serif\"><title>A monkey holding on to a branch</title><desc>A brown monkey hangs from a branch by its hands. Behind it, a long part of its body curls round and round at the end.</desc><rect x=\"0\" y=\"0\" width=\"480\" height=\"300\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"300\" rx=\"0\" fill=\"#e0f7fa\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"20\" y1=\"80\" x2=\"460\" y2=\"70\" stroke=\"#6d4c41\" stroke-width=\"14\" stroke-linecap=\"round\"/><ellipse cx=\"240\" cy=\"130\" rx=\"34\" ry=\"44\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"70\" r=\"26\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"2\"/><ellipse cx=\"240\" cy=\"78\" rx=\"16\" ry=\"12\" fill=\"#ffccbc\" stroke=\"#4e342e\" stroke-width=\"1\"/><circle cx=\"232\" cy=\"66\" r=\"3\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"248\" cy=\"66\" r=\"3\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"214\" cy=\"62\" r=\"8\" fill=\"#ffccbc\" stroke=\"#4e342e\" stroke-width=\"1\"/><circle cx=\"266\" cy=\"62\" r=\"8\" fill=\"#ffccbc\" stroke=\"#4e342e\" stroke-width=\"1\"/><line x1=\"214\" y1=\"110\" x2=\"200\" y2=\"80\" stroke=\"#8d6e63\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"266\" y1=\"110\" x2=\"280\" y2=\"80\" stroke=\"#8d6e63\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"225\" y1=\"170\" x2=\"215\" y2=\"220\" stroke=\"#8d6e63\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"255\" y1=\"170\" x2=\"265\" y2=\"220\" stroke=\"#8d6e63\" stroke-width=\"8\" stroke-linecap=\"round\"/><path d=\"M270,160 Q350,200 340,250 Q330,290 290,270 Q270,255 290,245\" fill=\"none\" stroke=\"#8d6e63\" stroke-width=\"7\" stroke-linecap=\"round\"/></svg>", "alt": "A brown monkey hangs from a branch by its hands; behind it, a long part of its body curls round at the end."}
  },
  {
    id: "g3-eng-words-b-q10",
    prompt: "Choose the words that fit both blanks: \"We waited for one ___ for ___ school bus.\"",
    options: [
      { id: "a", text: "our, hour" },
      { id: "b", text: "hour, our" },
      { id: "c", text: "hour, hour" },
      { id: "d", text: "our, our" }
    ],
    answerId: "b",
    explanation: "We waited one 'hour', a length of time, for 'our' bus, the bus that belongs to us. 'our, hour' uses the right words in the wrong blanks.",
    hints: ["The two missing words sound alike. Read the school bus sentence and ask what each blank needs."]
  },
  {
    id: "g3-eng-words-b-q11",
    prompt: "In this sentence, what does \"fair\" mean? \"Let's go to the village fair and ride the giant wheel.\"",
    options: [
      { id: "a", text: "a mela with rides and stalls" },
      { id: "b", text: "honest and equal for all" },
      { id: "c", text: "clean and neat" },
      { id: "d", text: "sunny weather" }
    ],
    answerId: "a",
    explanation: "Here a fair is a mela with rides and stalls. 'honest and equal for all' is another meaning, as in 'a fair game', but you cannot ride it.",
    hints: ["Look at what you can ride at this village fair."]
  },
  {
    id: "g3-eng-words-b-q12",
    prompt: "In this sentence, what does \"watch\" mean? \"Please watch the milk on the stove so that it does not boil over.\"",
    options: [
      { id: "a", text: "a clock worn on the wrist" },
      { id: "b", text: "keep an eye on" },
      { id: "c", text: "see a film" },
      { id: "d", text: "wait for a turn" }
    ],
    answerId: "b",
    explanation: "Here, watch means to keep looking at the milk carefully. 'a clock worn on the wrist' is a thing called a watch, but here watch is something you do.",
    hints: ["Think about what you must do so that the milk on the stove does not boil over."]
  },
  {
    id: "g3-eng-words-b-q13",
    prompt: "Choose the word that fits: \"Mummy bought me a new ___ of school shoes.\"",
    options: [
      { id: "a", text: "bunch" },
      { id: "b", text: "flock" },
      { id: "c", text: "slice" },
      { id: "d", text: "pair" }
    ],
    answerId: "d",
    explanation: "Two shoes that go together make a pair. 'bunch' is used for things like bananas or flowers, not shoes.",
    hints: ["Think how many shoes you buy at one time, and the word we use for that set."]
  },
  {
    id: "g3-eng-words-b-q14",
    prompt: "Choose the word that fits: \"Papa ___ a photo of us at the beach.\"",
    options: [
      { id: "a", text: "made" },
      { id: "b", text: "took" },
      { id: "c", text: "did" },
      { id: "d", text: "caught" }
    ],
    answerId: "b",
    explanation: "We say someone 'took' a photo. 'made' sounds possible, but in English we do not say 'made a photo'.",
    hints: ["Think of the word people use with 'a photo' when they press the camera button."]
  },
  {
    id: "g3-eng-words-b-q15",
    prompt: "Rearrange all five letter tiles to make the name of an animal. Which animal is it?",
    options: [
      { id: "a", text: "camel" },
      { id: "b", text: "clam" },
      { id: "c", text: "cable" },
      { id: "d", text: "metal" }
    ],
    answerId: "a",
    explanation: "C-A-M-E-L uses all five tiles once. 'clam' is an animal too, but it uses only four tiles and leaves out the E.",
    hints: ["Count the letter tiles first. The animal's name must use all five, each one only once."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 150\" width=\"560\" height=\"150\" role=\"img\" aria-label=\"Five letter tiles to rearrange\" font-family=\"Arial, Helvetica, sans-serif\"><title>Five letter tiles to rearrange</title><desc>Five letter tiles: M, L, C, E, A.</desc><rect x=\"0\" y=\"0\" width=\"560\" height=\"150\" fill=\"#ffffff\"/><rect x=\"92.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"124.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">M</text><rect x=\"170.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"202.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">L</text><rect x=\"248.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"280.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">C</text><rect x=\"326.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"358.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">E</text><rect x=\"404.0\" y=\"40\" width=\"64\" height=\"70\" rx=\"10\" fill=\"#fff3c4\" stroke=\"#8d6e00\" stroke-width=\"3\"/><text x=\"436.0\" y=\"88\" font-size=\"34\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">A</text></svg>", "alt": "Five letter tiles: M, L, C, E, A."}
  },
  {
    id: "g3-eng-words-b-q16",
    prompt: "Put the word tiles in order to make a proper sentence. Which sentence do you get?",
    options: [
      { id: "a", text: "We light the festival for clay lamps." },
      { id: "b", text: "Clay lamps light we for the festival." },
      { id: "c", text: "We light clay lamps for the festival." },
      { id: "d", text: "We clay light lamps for the festival." }
    ],
    answerId: "c",
    explanation: "'We' do the action, 'light' is the action, and 'clay lamps' are lit for the festival. 'We light the festival for clay lamps.' uses every tile but makes no sense.",
    hints: ["Among the tiles, first find who does the action, then the action word, then ask what is being lit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 760 130\" width=\"760\" height=\"130\" role=\"img\" aria-label=\"Seven word tiles to put in order\" font-family=\"Arial, Helvetica, sans-serif\"><title>Seven word tiles to put in order</title><desc>Seven word tiles: festival, lamps, We, light, clay, for, the.</desc><rect x=\"0\" y=\"0\" width=\"760\" height=\"130\" fill=\"#ffffff\"/><rect x=\"43.0\" y=\"40\" width=\"138\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"112.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">festival</text><rect x=\"193.0\" y=\"40\" width=\"96\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"241.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">lamps</text><rect x=\"301.0\" y=\"40\" width=\"54\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"328.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">We</text><rect x=\"367.0\" y=\"40\" width=\"96\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"415.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">light</text><rect x=\"475.0\" y=\"40\" width=\"82\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"516.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">clay</text><rect x=\"569.0\" y=\"40\" width=\"68\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"603.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">for</text><rect x=\"649.0\" y=\"40\" width=\"68\" height=\"50\" rx=\"8\" fill=\"#e3f2fd\" stroke=\"#8d6e00\" stroke-width=\"2\"/><text x=\"683.0\" y=\"71.66666666666667\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">the</text></svg>", "alt": "Seven word tiles: festival, lamps, We, light, clay, for, the."}
  },
  {
    id: "g3-eng-words-b-q17",
    prompt: "Look at the picture. Lalitha has just won the first prize in a drawing contest. How does she feel?",
    options: [
      { id: "a", text: "proud" },
      { id: "b", text: "angry" },
      { id: "c", text: "scared" },
      { id: "d", text: "bored" }
    ],
    answerId: "a",
    explanation: "Lalitha is smiling and holding her cup high because she did well, so she feels proud. 'scared' does not fit her big smile.",
    hints: ["Look at Lalitha's face and at the prize she is holding up high."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 320\" width=\"480\" height=\"320\" role=\"img\" aria-label=\"Lalitha holds up a gold cup\" font-family=\"Arial, Helvetica, sans-serif\"><title>Lalitha holds up a gold cup</title><desc>Lalitha smiles widely and holds a shiny gold cup high above her head. Little stars sparkle around her.</desc><rect x=\"0\" y=\"0\" width=\"480\" height=\"320\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"480\" height=\"320\" rx=\"0\" fill=\"#fff8e1\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"208.8\" y1=\"237.0\" x2=\"206.0\" y2=\"300\" stroke=\"#a0522d\" stroke-width=\"8.399999999999999\" stroke-linecap=\"round\"/><line x1=\"231.2\" y1=\"237.0\" x2=\"234.0\" y2=\"300\" stroke=\"#a0522d\" stroke-width=\"8.399999999999999\" stroke-linecap=\"round\"/><polygon points=\"200.4,176.8 239.6,176.8 256.4,244.0 183.6,244.0\" fill=\"#7e57c2\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"197.6\" y1=\"182.4\" x2=\"178.0\" y2=\"134.8\" stroke=\"#a0522d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"242.4\" y1=\"182.4\" x2=\"262.0\" y2=\"134.8\" stroke=\"#a0522d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><rect x=\"194.8\" y=\"139.0\" width=\"50.4\" height=\"33.599999999999994\" rx=\"11.2\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"220\" cy=\"153.0\" r=\"19.599999999999998\" fill=\"#a0522d\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M200.4,148.8 Q220,119.4 239.6,148.8\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"213.0\" cy=\"154.4\" r=\"2.52\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"227.0\" cy=\"154.4\" r=\"2.52\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M211.6,161.4 Q220,168.4 228.4,161.4\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M195,62 L245,62 L240,92 Q220,112 200,92 Z\" fill=\"#ffd54f\" stroke=\"#f57f17\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"212\" y=\"102\" width=\"16\" height=\"18\" rx=\"0\" fill=\"#ffd54f\" stroke=\"#f57f17\" stroke-width=\"2\"/><rect x=\"198\" y=\"118\" width=\"44\" height=\"10\" rx=\"0\" fill=\"#f9a825\" stroke=\"#f57f17\" stroke-width=\"2\"/><line x1=\"180\" y1=\"134\" x2=\"198\" y2=\"124\" stroke=\"#a0522d\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"134\" x2=\"242\" y2=\"124\" stroke=\"#a0522d\" stroke-width=\"7\" stroke-linecap=\"round\"/><polygon points=\"330,60 333,67 340,70 333,73 330,80 327,73 320,70 327,67\" fill=\"#ffeb3b\" stroke=\"#f9a825\" stroke-width=\"1\"/><polygon points=\"350,110 353,117 360,120 353,123 350,130 347,123 340,120 347,117\" fill=\"#ffeb3b\" stroke=\"#f9a825\" stroke-width=\"1\"/><polygon points=\"130,70 133,77 140,80 133,83 130,90 127,83 120,80 127,77\" fill=\"#ffeb3b\" stroke=\"#f9a825\" stroke-width=\"1\"/><text x=\"220\" y=\"316\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Lalitha</text></svg>", "alt": "Lalitha smiles widely and holds a shiny gold cup high above her head; little stars sparkle around her."}
  },
  {
    id: "g3-eng-words-b-q18",
    prompt: "Look at the word cards. Which word does NOT belong with the others?",
    options: [
      { id: "a", text: "broom" },
      { id: "b", text: "kite" },
      { id: "c", text: "mop" },
      { id: "d", text: "duster" }
    ],
    answerId: "b",
    explanation: "A broom, a mop and a duster are used for cleaning, but a kite is a toy we fly. 'duster' may seem odd because it is small, but it cleans too.",
    hints: ["Think about what each thing on the word cards is used for at home."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 170\" width=\"640\" height=\"170\" role=\"img\" aria-label=\"Four word cards\" font-family=\"Arial, Helvetica, sans-serif\"><title>Four word cards</title><desc>Four word cards: broom, mop, duster, kite.</desc><rect x=\"0\" y=\"0\" width=\"640\" height=\"170\" fill=\"#ffffff\"/><rect x=\"13.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#fce4ec\" stroke=\"#ad1457\" stroke-width=\"3\"/><text x=\"83.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">broom</text><rect x=\"171.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#fce4ec\" stroke=\"#ad1457\" stroke-width=\"3\"/><text x=\"241.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">mop</text><rect x=\"329.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#fce4ec\" stroke=\"#ad1457\" stroke-width=\"3\"/><text x=\"399.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">duster</text><rect x=\"487.0\" y=\"40\" width=\"140\" height=\"90\" rx=\"12\" fill=\"#fce4ec\" stroke=\"#ad1457\" stroke-width=\"3\"/><text x=\"557.0\" y=\"94\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">kite</text></svg>", "alt": "Four word cards: broom, mop, duster, kite."}
  },
  {
    id: "g3-eng-words-b-q19",
    prompt: "Which word is the odd one out in this group: knee, knot, know, kite?",
    options: [
      { id: "a", text: "knee" },
      { id: "b", text: "knot" },
      { id: "c", text: "know" },
      { id: "d", text: "kite" }
    ],
    answerId: "d",
    explanation: "In knee, knot and know, the k is silent, but in kite we hear the k. 'know' might seem odd because it is not a thing, but its k is silent too.",
    hints: ["Say each word in the group aloud slowly and listen to the very first sound you hear."]
  },
  {
    id: "g3-eng-words-b-q20",
    prompt: "Bird is to nest as bee is to ___.",
    options: [
      { id: "a", text: "web" },
      { id: "b", text: "kennel" },
      { id: "c", text: "den" },
      { id: "d", text: "hive" }
    ],
    answerId: "d",
    explanation: "A bird lives in a nest and a bee lives in a hive. 'web' is the home a spider spins, not a bee's home.",
    hints: ["A nest is the home of a bird. Think of the home where bees live and make honey."]
  },
  {
    id: "g3-eng-words-b-q21",
    prompt: "Potter is to clay as carpenter is to ___.",
    options: [
      { id: "a", text: "nails" },
      { id: "b", text: "wood" },
      { id: "c", text: "cloth" },
      { id: "d", text: "bricks" }
    ],
    answerId: "b",
    explanation: "A potter works with clay, and a carpenter works with wood. 'nails' are used by a carpenter, but they join pieces; they are not what he shapes.",
    hints: ["A potter shapes clay into pots. Think of the material a carpenter shapes into tables and chairs."]
  },
  {
    id: "g3-eng-words-b-q22",
    prompt: "Find the word that is spelt WRONG in this sentence: \"Arun was so hungrey that he ate three chapatis.\"",
    options: [
      { id: "a", text: "hungrey" },
      { id: "b", text: "chapatis" },
      { id: "c", text: "three" },
      { id: "d", text: "Arun" }
    ],
    answerId: "a",
    explanation: "The right spelling is hungry, with no e. 'chapatis' may look strange, but it is the correct spelling for more than one chapati.",
    hints: ["Read each word in the sentence about Arun slowly, letter by letter, and look for a letter that does not belong."]
  },
  {
    id: "g3-eng-words-b-q23",
    prompt: "In this sentence, what does \"ring\" mean? \"Did you hear the school bell ring?\"",
    options: [
      { id: "a", text: "a piece of jewellery for a finger" },
      { id: "b", text: "a round shape" },
      { id: "c", text: "a place for a boxing match" },
      { id: "d", text: "make a sound" }
    ],
    answerId: "d",
    explanation: "Here, ring means the bell makes a sound. 'a piece of jewellery for a finger' is another meaning of ring, but you cannot hear it.",
    hints: ["Think about what a school bell does that you can hear."]
  },
  {
    id: "g3-eng-words-b-q24",
    prompt: "Coach Rekha's exact words were: Run faster, Vinod! Which sentence writes them correctly?",
    options: [
      { id: "a", text: "Coach Rekha shouted, \"Run faster, Vinod!\"" },
      { id: "b", text: "\"Coach Rekha shouted, Run faster, Vinod!\"" },
      { id: "c", text: "Coach Rekha \"shouted,\" Run faster, Vinod!" },
      { id: "d", text: "Coach Rekha shouted, Run \"faster,\" Vinod!" }
    ],
    answerId: "a",
    explanation: "Speech marks go around Coach Rekha's own words only. 'Coach Rekha \"shouted,\" Run faster, Vinod!' wraps them around 'shouted', which she did not say.",
    hints: ["Count the words Coach Rekha actually said. All of them, and only those, belong inside the speech marks."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "🔤", "title": "Grow your words", "body": ["Spelling patterns, sound-alikes, punctuation marks and words that travel together.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Spelling patterns, sound-alikes, punctuation marks and words that travel together. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Spelling Patterns", "steps": ["Some words have double letters, like rabbit and letter.", "When we add -ing, a silent e often drops: ride becomes riding. A short word like hop doubles its last letter: hopping.", "Check: Add -ing to 'smile'."], "punchline": "Answer: smiling", "visual": "none", "speak": "Some words have double letters, like rabbit and letter. When we add -ing, a silent e often drops: ride becomes riding. A short word like hop doubles its last letter: hopping."},
  {"id": "s2", "type": "demo", "title": "Sound-Alike Words", "steps": ["Some words sound the same but have different spellings and meanings.", "Sun and son sound alike. The sun shines; a son is a boy in a family.", "Check: 'The ___ is shining.' Which word fits: sun or son?"], "punchline": "Answer: sun", "visual": "none", "speak": "Some words sound the same but have different spellings and meanings. Sun and son sound alike. The sun shines; a son is a boy in a family."},
  {"id": "s3", "type": "demo", "title": "Odd One Out and Word Pairs", "steps": ["In an odd one out, three words belong to one group and one does not.", "In a word pair, find how the first two words are linked, then make the same link.", "Check: Which is the odd one out: rose, lily, lotus, spoon?"], "punchline": "Answer: spoon", "visual": "none", "speak": "In an odd one out, three words belong to one group and one does not. In a word pair, find how the first two words are linked, then make the same link."},
  {"id": "s4", "type": "demo", "title": "Capital Letters and End Marks", "steps": ["Begin every sentence, and every name of a person, place or day, with a capital letter.", "End telling sentences with a full stop, questions with a question mark, and strong feelings with an exclamation mark.", "Check: Which mark ends this: 'Where is my bag'?"], "punchline": "Answer: a question mark (?)", "visual": "none", "speak": "Begin every sentence, and every name of a person, place or day, with a capital letter. End telling sentences with a full stop, questions with a question mark, and strong feelings with an exclamation mark."},
  {"id": "s5", "type": "demo", "title": "Commas, Apostrophes and Speech Marks", "steps": ["Commas separate things in a list, like pens, pencils and paints.", "An apostrophe shows a missing letter, as in can't, or who owns something, as in Rani's book. Speech marks hold the words someone says.", "Check: Write the short form of 'can not'."], "punchline": "Answer: can't", "visual": "none", "speak": "Commas separate things in a list, like pens, pencils and paints. An apostrophe shows a missing letter, as in can't, or who owns something, as in Rani's book. Speech marks hold the words someone says."},
  {"id": "s6", "type": "demo", "title": "Words with Many Meanings", "steps": ["Some words have more than one meaning.", "Read the whole sentence to find out which meaning fits.", "Check: 'The dog began to bark.' Is this bark a sound or part of a tree?"], "punchline": "Answer: a sound", "visual": "none", "speak": "Some words have more than one meaning. Read the whole sentence to find out which meaning fits."},
  {"id": "s7", "type": "demo", "title": "Words That Go Together", "steps": ["Some words like to go together, like a glass of water or a cup of tea.", "We say 'take a bath' and 'brush your teeth'.", "Check: Which word fits: 'a ___ of bread'?"], "punchline": "Answer: loaf", "visual": "none", "speak": "Some words like to go together, like a glass of water or a cup of tea. We say 'take a bath' and 'brush your teeth'."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "Which word is spelled correctly?", "options": [{"id": "a", "text": "freind"}, {"id": "b", "text": "friend"}, {"id": "c", "text": "frend"}, {"id": "d", "text": "freend"}], "answerId": "b", "why": "Friend has ie after r. Freind swaps the vowels.", "visual": "none", "speak": "Which word is spelled correctly?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Watch double letters and common spelling patterns", "Homophones sound the same but mean different things", "Odd one out: find the word that does not belong", "Capitals and end marks start and stop sentences", "Commas, apostrophes and speech marks have jobs", "Some words like to go together (collocations)"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g3EnglishWords: ChapterDef = {
  id: "words",
  title: "Words and Word Power",
  emoji: "\ud83d\udd24",
  blurb: "Spelling, homophones, punctuation & word partners",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "vocabulary",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "vocabulary",
      questions: SET_B,
    },
  ],
  paperTopics: ["vocabulary", "spelling", "punctuation"],
};

export const g3EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
