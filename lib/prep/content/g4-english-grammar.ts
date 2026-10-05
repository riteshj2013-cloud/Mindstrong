import type { ChapterDef, PrepQuestion } from "../types";

/** Word Workshop - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-eng-ch02-a-q01",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. Which word from the passage is a PROPER noun?",
    options: [
      { id: "a", text: "zoo" },
      { id: "b", text: "Mysuru" },
      { id: "c", text: "tiger" },
      { id: "d", text: "tree" }
    ],
    answerId: "b",
    explanation: "A proper noun is the special name of a person or place. It starts with a capital letter. Mysuru is the name of a city.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q02",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. \"The monkeys were jumping from branch to branch.\" When was this happening?",
    options: [
      { id: "a", text: "Every day" },
      { id: "b", text: "Tomorrow" },
      { id: "c", text: "Right now" },
      { id: "d", text: "In the past, for some time" }
    ],
    answerId: "d",
    explanation: "\"Were + jumping\" shows an action that was going on in the past. The visit was \"last Sunday.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q03",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. \"His aunt bought him an ice cream.\" Why do we use \"an\" before \"ice cream\"?",
    options: [
      { id: "a", text: "\"Ice\" begins with a vowel sound." },
      { id: "b", text: "The ice cream was very big." },
      { id: "c", text: "There were many ice creams." },
      { id: "d", text: "We always use \"an\" before food." }
    ],
    answerId: "a",
    explanation: "Use \"an\" before words that begin with a vowel sound (a, e, i, o, u). \"Ice\" begins with \"i.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q04",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. \"Ravi has a new notebook.\" Why does the passage use \"has\" and not \"have\"?",
    options: [
      { id: "a", text: "Ravi has many notebooks." },
      { id: "b", text: "It happened yesterday." },
      { id: "c", text: "Ravi is one person, so we say \"he has.\"" },
      { id: "d", text: "It is a question." }
    ],
    answerId: "c",
    explanation: "Use \"has\" with he, she, it or one person's name. Use \"have\" with I, you, we and they.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q05",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. \"They saw a big tiger.\" Which word is the ADJECTIVE?",
    options: [
      { id: "a", text: "big" },
      { id: "b", text: "a" },
      { id: "c", text: "tiger" },
      { id: "d", text: "saw" }
    ],
    answerId: "a",
    explanation: "An adjective describes a noun. \"Big\" tells us what the tiger was like.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q06",
    prompt: "**Meena:** Mummy, are these mangoes sweet?\n**Mother:** Yes, they are. The shopkeeper says they are from Ratnagiri.\n**Meena:** I want an apple too.\n**Mother:** We have apples at home. Let's buy bananas instead.\n**Meena:** Okay! I am carrying the bag.\n**Mother:** Thank you, beta. It is heavy, so hold it with both hands.\n**Shopkeeper:** Here are six bananas. They are fresh and yellow.\n**Mother:** Thank you. How much are they?\n**Shopkeeper:** Forty rupees, please.\n\nRead Passage P2. Mother says, \"Yes, they are.\" Who or what does \"they\" mean here?",
    options: [
      { id: "a", text: "The bananas" },
      { id: "b", text: "The apples" },
      { id: "c", text: "The bags" },
      { id: "d", text: "The mangoes" }
    ],
    answerId: "d",
    explanation: "Meena asked, \"Are these mangoes sweet?\" Mother uses \"they\" in place of \"the mangoes.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q07",
    prompt: "Our new classroom is on the first floor. There is a big window next to my desk. A neem tree stands outside the window. Every morning, a bird sits on its branch and sings. Our teacher, Ms. Lata, keeps a globe on her table. The books are in the cupboard behind the door. We have a small garden in front of the classroom. The guard locks the room at five o'clock every evening.\n\nRead Passage P3. Where are the books kept?",
    options: [
      { id: "a", text: "On the table" },
      { id: "b", text: "In the cupboard" },
      { id: "c", text: "Under the desk" },
      { id: "d", text: "Outside the window" }
    ],
    answerId: "b",
    explanation: "\"The books are in the cupboard behind the door.\" \"In\" tells us they are inside the cupboard.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q08",
    prompt: "Our new classroom is on the first floor. There is a big window next to my desk. A neem tree stands outside the window. Every morning, a bird sits on its branch and sings. Our teacher, Ms. Lata, keeps a globe on her table. The books are in the cupboard behind the door. We have a small garden in front of the classroom. The guard locks the room at five o'clock every evening.\n\nRead Passage P3. \"Every morning, a bird sits on its branch and sings.\" What does \"its\" refer to?",
    options: [
      { id: "a", text: "The bird" },
      { id: "b", text: "The window" },
      { id: "c", text: "The neem tree" },
      { id: "d", text: "The desk" }
    ],
    answerId: "c",
    explanation: "Look at the sentence before: \"A neem tree stands outside the window.\" The branch belongs to the tree.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q09",
    prompt: "Look at the picture. Fill in the blank.\n\"One child, three ___.\"",
    options: [
      { id: "a", text: "childs" },
      { id: "b", text: "childes" },
      { id: "c", text: "childrens" },
      { id: "d", text: "children" }
    ],
    answerId: "d",
    explanation: "Some plurals don't add -s. One child, many children. Never say \"childrens\".",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>One child and three ?</title><desc>Two boxes: the left box shows one young girl; the right box shows a group of three kids.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"10\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#eaf4f4\" stroke=\"#5e9ea0\" stroke-width=\"2\"/><rect x=\"205\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#fff1e6\" stroke=\"#e29578\" stroke-width=\"2\"/><line x1=\"93.7\" y1=\"153.8\" x2=\"92.1\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"110.2\" y1=\"153.8\" x2=\"111.9\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"85.5\" y1=\"121.9\" x2=\"76.7\" y2=\"154.9\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"118.5\" y1=\"121.9\" x2=\"127.3\" y2=\"154.9\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><polygon points=\"87.1,116.4 116.8,116.4 126.7,167.0 77.2,167.0\" fill=\"#f4a261\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"87.2\" y=\"100.5\" width=\"6.6\" height=\"21.1\" rx=\"3.3\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"110.1\" y=\"100.5\" width=\"6.6\" height=\"21.1\" rx=\"3.3\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"102\" cy=\"103.2\" r=\"13.2\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M88.8,101.8 a13.2,13.2 0 0 1 26.4,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"98.3\" cy=\"104.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"105.6\" cy=\"104.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M98.3,108.3 q3.6,3.1 7.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"232.5\" y1=\"158.0\" x2=\"231.0\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"247.5\" y1=\"158.0\" x2=\"249.0\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"225.0\" y1=\"129.0\" x2=\"217.0\" y2=\"159.0\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"255.0\" y1=\"129.0\" x2=\"263.0\" y2=\"159.0\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><rect x=\"225.0\" y=\"124.0\" width=\"30.0\" height=\"34.0\" rx=\"4.0\" fill=\"#e76f51\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"112.0\" r=\"12.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M228.0,110.8 a12.0,12.0 0 0 1 24.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"236.6\" cy=\"112.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"243.3\" cy=\"112.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M236.6,116.6 q3.3,2.8 6.7,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"289.5\" y1=\"158.0\" x2=\"288.0\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"304.5\" y1=\"158.0\" x2=\"306.0\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"282.0\" y1=\"129.0\" x2=\"274.0\" y2=\"159.0\" stroke=\"#e0ac69\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"312.0\" y1=\"129.0\" x2=\"320.0\" y2=\"159.0\" stroke=\"#e0ac69\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"283.5,124.0 310.5,124.0 319.5,170.0 274.5,170.0\" fill=\"#2a9d8f\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"283.5\" y=\"109.6\" width=\"6.0\" height=\"19.2\" rx=\"3.0\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"304.4\" y=\"109.6\" width=\"6.0\" height=\"19.2\" rx=\"3.0\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"297\" cy=\"112.0\" r=\"12.0\" fill=\"#e0ac69\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M285.0,110.8 a12.0,12.0 0 0 1 24.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"293.6\" cy=\"112.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300.3\" cy=\"112.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M293.6,116.6 q3.3,2.8 6.7,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"346.5\" y1=\"158.0\" x2=\"345.0\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"361.5\" y1=\"158.0\" x2=\"363.0\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"339.0\" y1=\"129.0\" x2=\"331.0\" y2=\"159.0\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"369.0\" y1=\"129.0\" x2=\"377.0\" y2=\"159.0\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><rect x=\"339.0\" y=\"124.0\" width=\"30.0\" height=\"34.0\" rx=\"4.0\" fill=\"#457b9d\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"354\" cy=\"112.0\" r=\"12.0\" fill=\"#8d5524\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M342.0,110.8 a12.0,12.0 0 0 1 24.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"350.6\" cy=\"112.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"357.3\" cy=\"112.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M350.6,116.6 q3.3,2.8 6.7,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"102\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">one child</text><text x=\"297\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">three ?</text></svg>", "alt": "Two boxes: one shows a single child, and the other shows a group of three kids with a question mark label."}
  },
  {
    id: "g4-eng-ch02-a-q10",
    prompt: "Look at the picture. Fill in the blank.\n\"One box, two ___.\"",
    options: [
      { id: "a", text: "boxes" },
      { id: "b", text: "boxs" },
      { id: "c", text: "boxen" },
      { id: "d", text: "boxies" }
    ],
    answerId: "a",
    explanation: "Words ending in x, s, sh or ch add -es. So box becomes boxes, bus becomes buses and dish becomes dishes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>One box and two ?</title><desc>Two panels: the left shows a single cardboard box; the right shows a larger number of the same object.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"10\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#eaf4f4\" stroke=\"#5e9ea0\" stroke-width=\"2\"/><rect x=\"205\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#fff1e6\" stroke=\"#e29578\" stroke-width=\"2\"/><rect x=\"72\" y=\"130\" width=\"60.0\" height=\"50.0\" rx=\"3\" fill=\"#d4a373\" stroke=\"#7f5539\" stroke-width=\"2\"/><line x1=\"72\" y1=\"142.0\" x2=\"132.0\" y2=\"142.0\" stroke=\"#7f5539\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"96.0\" y=\"130\" width=\"12.0\" height=\"50.0\" rx=\"0\" fill=\"#e9c46a\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"225\" y=\"130\" width=\"60.0\" height=\"50.0\" rx=\"3\" fill=\"#d4a373\" stroke=\"#7f5539\" stroke-width=\"2\"/><line x1=\"225\" y1=\"142.0\" x2=\"285.0\" y2=\"142.0\" stroke=\"#7f5539\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"249.0\" y=\"130\" width=\"12.0\" height=\"50.0\" rx=\"0\" fill=\"#e9c46a\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"305\" y=\"130\" width=\"60.0\" height=\"50.0\" rx=\"3\" fill=\"#d4a373\" stroke=\"#7f5539\" stroke-width=\"2\"/><line x1=\"305\" y1=\"142.0\" x2=\"365.0\" y2=\"142.0\" stroke=\"#7f5539\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"329.0\" y=\"130\" width=\"12.0\" height=\"50.0\" rx=\"0\" fill=\"#e9c46a\" stroke=\"none\" stroke-width=\"2\"/><text x=\"102\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">one box</text><text x=\"297\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">two ?</text></svg>", "alt": "Two panels: one shows a single cardboard box, and the other shows a larger number of them with a question mark label."}
  },
  {
    id: "g4-eng-ch02-a-q11",
    prompt: "Look at the picture. The king is standing next to the ___.",
    options: [
      { id: "a", text: "prince" },
      { id: "b", text: "man" },
      { id: "c", text: "queen" },
      { id: "d", text: "princess" }
    ],
    answerId: "c",
    explanation: "The woman is a grown-up and wears a crown. A king's partner is a queen. A prince and a princess are young.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A king and a woman at the palace</title><desc>A grown-up king with a crown and beard stands next to a grown-up woman who also wears a crown; she is labelled with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"200\" width=\"400\" height=\"60\" rx=\"0\" fill=\"#f1e3c8\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"140\" y=\"8\" width=\"120\" height=\"28\" rx=\"6\" fill=\"#ffffff\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"200\" y=\"28\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">The palace</text><line x1=\"119.5\" y1=\"156.2\" x2=\"117.4\" y2=\"215\" stroke=\"#3d405b\" stroke-width=\"9.8\" stroke-linecap=\"round\"/><line x1=\"140.5\" y1=\"156.2\" x2=\"142.6\" y2=\"215\" stroke=\"#3d405b\" stroke-width=\"9.8\" stroke-linecap=\"round\"/><line x1=\"109.0\" y1=\"115.6\" x2=\"97.8\" y2=\"157.6\" stroke=\"#c68642\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><line x1=\"151.0\" y1=\"115.6\" x2=\"162.2\" y2=\"157.6\" stroke=\"#c68642\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><rect x=\"109.0\" y=\"108.6\" width=\"42.0\" height=\"47.5\" rx=\"5.6\" fill=\"#9b2226\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"130\" cy=\"91.8\" r=\"16.8\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M113.2,90.1 a16.8,16.8 0 0 1 33.6,0 z\" fill=\"#3e2723\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"125.2\" cy=\"92.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"134.7\" cy=\"92.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M125.2,98.3 q4.7,4.0 9.4,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M116.5,96.8 q13.4,23.5 26.8,0 z\" fill=\"#3e2723\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polygon points=\"113.2,76.6 113.2,63.2 121.6,70.8 130,59.8 138.4,70.8 146.8,63.2 146.8,76.6\" fill=\"#f5c518\" stroke=\"#b8860b\" stroke-width=\"1.5\"/><line x1=\"259.5\" y1=\"156.2\" x2=\"257.4\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"9.8\" stroke-linecap=\"round\"/><line x1=\"280.5\" y1=\"156.2\" x2=\"282.6\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"9.8\" stroke-linecap=\"round\"/><line x1=\"249.0\" y1=\"115.6\" x2=\"237.8\" y2=\"157.6\" stroke=\"#c68642\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><line x1=\"291.0\" y1=\"115.6\" x2=\"302.2\" y2=\"157.6\" stroke=\"#c68642\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><polygon points=\"251.1,108.6 288.9,108.6 301.5,173.0 238.5,173.0\" fill=\"#7b2cbf\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"251.1\" y=\"88.4\" width=\"8.4\" height=\"26.8\" rx=\"4.2\" fill=\"#3e2723\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"280.4\" y=\"88.4\" width=\"8.4\" height=\"26.8\" rx=\"4.2\" fill=\"#3e2723\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"270\" cy=\"91.8\" r=\"16.8\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M253.2,90.1 a16.8,16.8 0 0 1 33.6,0 z\" fill=\"#3e2723\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"265.2\" cy=\"92.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"274.7\" cy=\"92.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M265.2,98.3 q4.7,4.0 9.4,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polygon points=\"253.2,76.6 253.2,63.2 261.6,70.8 270,59.8 278.4,70.8 286.8,63.2 286.8,76.6\" fill=\"#f5c518\" stroke=\"#b8860b\" stroke-width=\"1.5\"/><rect x=\"100\" y=\"222\" width=\"60\" height=\"24\" rx=\"5\" fill=\"#fff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"130\" y=\"240\" font-family=\"sans-serif\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">king</text><rect x=\"250\" y=\"222\" width=\"40\" height=\"24\" rx=\"5\" fill=\"#fff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"270\" y=\"240\" font-family=\"sans-serif\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">?</text></svg>", "alt": "A king with a crown stands next to a grown-up woman wearing a crown, who is labelled with a question mark."}
  },
  {
    id: "g4-eng-ch02-a-q12",
    prompt: "Which of these is a COMMON noun?",
    options: [
      { id: "a", text: "Delhi" },
      { id: "b", text: "river" },
      { id: "c", text: "Raju" },
      { id: "d", text: "Sunday" }
    ],
    answerId: "b",
    explanation: "A common noun is a general name, like river, city or boy. Delhi, Raju and Sunday are special names, so they are proper nouns.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q13",
    prompt: "Look at the picture. Ravi points to his friend. Which word fills the blank in his speech bubble?",
    options: [
      { id: "a", text: "She" },
      { id: "b", text: "He" },
      { id: "c", text: "It" },
      { id: "d", text: "They" }
    ],
    answerId: "a",
    explanation: "Ravi is pointing at Sita, who is a girl, so we use \"she\" in place of her name.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Ravi points at his friend</title><desc>A boy named Ravi points at a girl named Sita and says a sentence with a missing word in a speech bubble.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#d8f3dc\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"80.2\" y1=\"160.4\" x2=\"78.3\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"9.1\" stroke-linecap=\"round\"/><line x1=\"99.7\" y1=\"160.4\" x2=\"101.7\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"9.1\" stroke-linecap=\"round\"/><line x1=\"70.5\" y1=\"122.6\" x2=\"60.1\" y2=\"161.7\" stroke=\"#c68642\" stroke-width=\"7.8\" stroke-linecap=\"round\"/><line x1=\"109.5\" y1=\"122.6\" x2=\"151.1\" y2=\"125.2\" stroke=\"#c68642\" stroke-width=\"7.8\" stroke-linecap=\"round\"/><rect x=\"70.5\" y=\"116.1\" width=\"39.0\" height=\"44.2\" rx=\"5.2\" fill=\"#1e6fd9\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"100.6\" r=\"15.6\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M74.4,99.0 a15.6,15.6 0 0 1 31.2,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"85.6\" cy=\"101.6\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"94.3\" cy=\"101.6\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M85.6,106.6 q4.3,3.7 8.7,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"65.6\" y=\"221\" width=\"48.8\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"90\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Ravi</text><line x1=\"280.6\" y1=\"162.5\" x2=\"278.7\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"299.3\" y1=\"162.5\" x2=\"301.2\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"271.2\" y1=\"126.2\" x2=\"261.2\" y2=\"163.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><line x1=\"308.7\" y1=\"126.2\" x2=\"318.7\" y2=\"163.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><polygon points=\"273.1,120.0 306.8,120.0 318.1,177.5 261.8,177.5\" fill=\"#e63946\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"273.2\" y=\"102.0\" width=\"7.5\" height=\"24.0\" rx=\"3.7\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"299.3\" y=\"102.0\" width=\"7.5\" height=\"24.0\" rx=\"3.7\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"290\" cy=\"105.0\" r=\"15.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M275.0,103.5 a15.0,15.0 0 0 1 30.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"285.8\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"294.2\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M285.8,110.8 q4.1,3.5 8.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"265.6\" y=\"221\" width=\"48.8\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"290\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Sita</text><rect x=\"20\" y=\"12\" width=\"230\" height=\"46\" rx=\"12\" fill=\"#ffffff\" stroke=\"#555\" stroke-width=\"2\"/><polygon points=\"70,57 90,57 80,88\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M70,58 L80,88 L90,58\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"135.0\" y=\"34\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">\"___ lives near my house.\"</text></svg>", "alt": "A boy named Ravi points at his friend Sita and says a sentence with a missing word."}
  },
  {
    id: "g4-eng-ch02-a-q14",
    prompt: "Look at the picture. Which word fills the blank in Anu's speech bubble?",
    options: [
      { id: "a", text: "They" },
      { id: "b", text: "He" },
      { id: "c", text: "We" },
      { id: "d", text: "You" }
    ],
    answerId: "c",
    explanation: "Anu is talking about Rahul and herself. \"Rahul and I\" includes the speaker, so the pronoun is \"we\".",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Anu and Rahul at their desk</title><desc>A girl named Anu and a boy named Rahul share one desk; Anu speaks in a speech bubble with a missing word.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#e9ecef\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"110\" y=\"160\" width=\"180\" height=\"14\" rx=\"3\" fill=\"#8d6e63\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"120\" y=\"174\" width=\"8\" height=\"45\" rx=\"0\" fill=\"#6d4c41\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"272\" y=\"174\" width=\"8\" height=\"45\" rx=\"0\" fill=\"#6d4c41\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"151.3\" y1=\"166.7\" x2=\"149.6\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.0\" stroke-linecap=\"round\"/><line x1=\"168.6\" y1=\"166.7\" x2=\"170.3\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.0\" stroke-linecap=\"round\"/><line x1=\"142.7\" y1=\"133.3\" x2=\"133.5\" y2=\"167.8\" stroke=\"#c68642\" stroke-width=\"6.8\" stroke-linecap=\"round\"/><line x1=\"177.2\" y1=\"133.3\" x2=\"186.4\" y2=\"167.8\" stroke=\"#c68642\" stroke-width=\"6.8\" stroke-linecap=\"round\"/><polygon points=\"144.4,127.6 175.5,127.6 185.8,180.5 134.1,180.5\" fill=\"#9b5de5\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"144.5\" y=\"111.0\" width=\"6.8\" height=\"22.0\" rx=\"3.4\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"168.5\" y=\"111.0\" width=\"6.8\" height=\"22.0\" rx=\"3.4\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"160\" cy=\"113.8\" r=\"13.7\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M146.2,112.4 a13.7,13.7 0 0 1 27.5,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"156.1\" cy=\"114.7\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"163.8\" cy=\"114.7\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M156.1,119.1 q3.8,3.3 7.7,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"140.2\" y=\"221\" width=\"39.5\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"160\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Anu</text><line x1=\"236.1\" y1=\"165.4\" x2=\"234.3\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.2\" stroke-linecap=\"round\"/><line x1=\"253.8\" y1=\"165.4\" x2=\"255.6\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.2\" stroke-linecap=\"round\"/><line x1=\"227.3\" y1=\"131.2\" x2=\"217.8\" y2=\"166.6\" stroke=\"#c68642\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"262.7\" y1=\"131.2\" x2=\"272.1\" y2=\"166.6\" stroke=\"#c68642\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><rect x=\"227.3\" y=\"125.3\" width=\"35.4\" height=\"40.1\" rx=\"4.7\" fill=\"#2a9d8f\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"245\" cy=\"111.1\" r=\"14.1\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M230.8,109.7 a14.1,14.1 0 0 1 28.3,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"241.0\" cy=\"112.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"248.9\" cy=\"112.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M241.0,116.6 q3.9,3.3 7.9,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"216.0\" y=\"221\" width=\"58.0\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"245\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Rahul</text><rect x=\"110\" y=\"150\" width=\"180\" height=\"12\" rx=\"3\" fill=\"#a1887f\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"8\" width=\"300\" height=\"66\" rx=\"12\" fill=\"#ffffff\" stroke=\"#555\" stroke-width=\"2\"/><polygon points=\"140,73 160,73 150,98\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M140,74 L150,98 L160,74\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"165.0\" y=\"30\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">\"Rahul and I are friends.</text><text x=\"165.0\" y=\"50\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">___ sit together in class.\"</text></svg>", "alt": "Two children named Anu and Rahul share a desk, and Anu speaks a sentence with a missing word."}
  },
  {
    id: "g4-eng-ch02-a-q15",
    prompt: "Which word is a VERB (a doing word)?",
    options: [
      { id: "a", text: "happy" },
      { id: "b", text: "chair" },
      { id: "c", text: "green" },
      { id: "d", text: "jump" }
    ],
    answerId: "d",
    explanation: "A verb shows an action. You can jump! Happy and green are describing words, and chair is a noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q16",
    prompt: "Choose the correct verb.\n\"My father ___ to the office every day.\"",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "going" },
      { id: "d", text: "gone" }
    ],
    answerId: "b",
    explanation: "\"Every day\" means a habit, so we use the simple present. With one person (he, my father), add -es: goes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q17",
    prompt: "Choose the correct verb.\n\"Yesterday, I ___ a juicy mango.\"",
    options: [
      { id: "a", text: "eat" },
      { id: "b", text: "eats" },
      { id: "c", text: "ate" },
      { id: "d", text: "eating" }
    ],
    answerId: "c",
    explanation: "\"Yesterday\" tells us it is in the past. The past form of \"eat\" is \"ate.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q18",
    prompt: "Look at the picture. What is the baby doing right now?",
    options: [
      { id: "a", text: "The baby sleep." },
      { id: "b", text: "The baby is sleeping." },
      { id: "c", text: "The baby are sleeping." },
      { id: "d", text: "The baby is eating." }
    ],
    answerId: "b",
    explanation: "The baby's eyes are closed, and \"Z z z\" shows sleep. For something happening now, use is + -ing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A baby in a cradle</title><desc>A baby lies in a cradle with eyes closed; small letters float above the baby.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#ffe5ec\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M110,150 Q200,250 290,150\" fill=\"#f8edeb\" stroke=\"#9d8189\" stroke-width=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"150\" x2=\"110\" y2=\"90\" stroke=\"#9d8189\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"150\" x2=\"290\" y2=\"90\" stroke=\"#9d8189\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"90\" x2=\"290\" y2=\"90\" stroke=\"#9d8189\" stroke-width=\"3\" stroke-linecap=\"round\"/><ellipse cx=\"200\" cy=\"170\" rx=\"60\" ry=\"22\" fill=\"#a2d2ff\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"160\" r=\"20\" fill=\"#e0ac69\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M142.0,161.4 q2.4,2.4 4.8,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M153.2,161.4 q2.4,2.4 4.8,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M144.4,167.8 q5.6,4.8 11.2,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"195\" y=\"130\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5e60ce\">Z</text><text x=\"218\" y=\"112\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5e60ce\">z</text><text x=\"236\" y=\"98\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#5e60ce\">z</text><line x1=\"150\" y1=\"250\" x2=\"140\" y2=\"215\" stroke=\"#9d8189\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"250\" x2=\"260\" y2=\"215\" stroke=\"#9d8189\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>", "alt": "A baby lying in a cradle with small letters floating above."}
  },
  {
    id: "g4-eng-ch02-a-q19",
    prompt: "Fill in the blank.\n\"I ___ in Class 4.\"",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "is" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "a",
    explanation: "With \"I,\" we always use \"am.\" Use is with he, she or it, and are with we, you or they.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q20",
    prompt: "Fill in the blank.\n\"The children ___ at the park yesterday.\"",
    options: [
      { id: "a", text: "was" },
      { id: "b", text: "is" },
      { id: "c", text: "am" },
      { id: "d", text: "were" }
    ],
    answerId: "d",
    explanation: "\"Yesterday\" means the past, so use was or were. \"Children\" means many, so use \"were.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q21",
    prompt: "Fill in the blank.\n\"I saw ___ owl in the tree.\"",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "two" },
      { id: "c", text: "many" },
      { id: "d", text: "an" }
    ],
    answerId: "d",
    explanation: "\"Owl\" begins with a vowel sound, so we say \"an owl.\" \"Two\" and \"many\" need \"owls.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q22",
    prompt: "Look at the clock. Fill in the blank.\n\"We have lunch ___.\"",
    options: [
      { id: "a", text: "in one o'clock" },
      { id: "b", text: "on one o'clock" },
      { id: "c", text: "at one o'clock" },
      { id: "d", text: "at three o'clock" }
    ],
    answerId: "c",
    explanation: "The short hand points to 1 and the long hand to 12, so it is one o'clock. Use \"at\" with clock times.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A clock and a lunch plate</title><desc>A wall clock showing a time, next to a plate of food labelled Lunch.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"120\" cy=\"130\" r=\"95\" fill=\"#ffffff\" stroke=\"#264653\" stroke-width=\"5\"/><text x=\"159.5\" y=\"67.5\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">1</text><text x=\"188.4\" y=\"96.5\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">2</text><text x=\"199.0\" y=\"136.0\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">3</text><text x=\"188.4\" y=\"175.5\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">4</text><text x=\"159.5\" y=\"204.4\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">5</text><text x=\"120.0\" y=\"215.0\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">6</text><text x=\"80.5\" y=\"204.4\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">7</text><text x=\"51.5\" y=\"175.5\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">8</text><text x=\"41.0\" y=\"136.0\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">9</text><text x=\"51.5\" y=\"96.5\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">10</text><text x=\"80.4\" y=\"67.5\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">11</text><text x=\"119.9\" y=\"57.0\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">12</text><line x1=\"120\" y1=\"130\" x2=\"143.7\" y2=\"88.8\" stroke=\"#e63946\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"130\" x2=\"120.0\" y2=\"55.8\" stroke=\"#264653\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"130\" r=\"5\" fill=\"#264653\" stroke=\"none\" stroke-width=\"2\"/><ellipse cx=\"300\" cy=\"170\" rx=\"70\" ry=\"20\" fill=\"#ffffff\" stroke=\"#999\" stroke-width=\"2\"/><ellipse cx=\"300\" cy=\"165\" rx=\"50\" ry=\"12\" fill=\"#ffd166\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"280\" cy=\"160\" r=\"8\" fill=\"#06d6a0\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"315\" cy=\"160\" r=\"9\" fill=\"#ef476f\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"250\" y=\"60\" width=\"100\" height=\"30\" rx=\"6\" fill=\"#ffffff\" stroke=\"#999\" stroke-width=\"1\"/><text x=\"300\" y=\"81\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Lunch</text></svg>", "alt": "A wall clock showing a time, next to a plate of food labelled Lunch."}
  },
  {
    id: "g4-eng-ch02-a-q23",
    prompt: "Which sentence is correct?",
    options: [
      { id: "a", text: "She have a red bag." },
      { id: "b", text: "She has a red bag." },
      { id: "c", text: "She are a red bag." },
      { id: "d", text: "She having a red bag." }
    ],
    answerId: "b",
    explanation: "With \"she,\" we use \"has.\" \"She have\" is a very common mistake.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q24",
    prompt: "Look at the picture. Which sentence is TRUE?",
    options: [
      { id: "a", text: "The ball is under the table." },
      { id: "b", text: "The cat is under the table." },
      { id: "c", text: "The dog is on the table." },
      { id: "d", text: "The cat is beside the dog." }
    ],
    answerId: "a",
    explanation: "Check each one. The cat is ON the table, the dog is BESIDE the table, and the red ball is UNDER the table.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A cat, a ball and a dog with a table</title><desc>A room with a wooden table; a cat, a red ball and a dog are each in a different place around the table.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"225\" width=\"400\" height=\"35\" rx=\"0\" fill=\"#e9d8a6\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"110\" y=\"130\" width=\"170\" height=\"14\" rx=\"3\" fill=\"#8d6e63\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"120\" y=\"144\" width=\"10\" height=\"82\" rx=\"0\" fill=\"#6d4c41\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"260\" y=\"144\" width=\"10\" height=\"82\" rx=\"0\" fill=\"#6d4c41\" stroke=\"none\" stroke-width=\"2\"/><ellipse cx=\"185\" cy=\"116\" rx=\"22\" ry=\"14\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/><circle cx=\"207\" cy=\"104\" r=\"10\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/><polygon points=\"200,98 203,88 208,96\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1\"/><polygon points=\"208,96 213,88 215,99\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1\"/><circle cx=\"204\" cy=\"103\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"211\" cy=\"103\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M163,116 q-14,-4 -12,-20\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"195\" cy=\"208\" r=\"16\" fill=\"#e63946\" stroke=\"#9b2226\" stroke-width=\"2\"/><path d=\"M181,204 q14,8 28,0\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><ellipse cx=\"330\" cy=\"196\" rx=\"28\" ry=\"15\" fill=\"#a47148\" stroke=\"#5c3d2e\" stroke-width=\"1.5\"/><line x1=\"312\" y1=\"206\" x2=\"312\" y2=\"226\" stroke=\"#5c3d2e\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"322\" y1=\"206\" x2=\"322\" y2=\"226\" stroke=\"#5c3d2e\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"206\" x2=\"340\" y2=\"226\" stroke=\"#5c3d2e\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"206\" x2=\"350\" y2=\"226\" stroke=\"#5c3d2e\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"360\" cy=\"182\" r=\"13\" fill=\"#a47148\" stroke=\"#5c3d2e\" stroke-width=\"1.5\"/><ellipse cx=\"354\" cy=\"184\" rx=\"5\" ry=\"10\" fill=\"#5c3d2e\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"364\" cy=\"180\" r=\"1.8\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"372\" cy=\"184\" r=\"2.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M302,192 q-12,-10 -8,-22\" fill=\"none\" stroke=\"#5c3d2e\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "A room with a table, and a cat, a red ball and a dog in different places around it."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-eng-ch02-b-q01",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. Which word from the passage is PLURAL (more than one)?",
    options: [
      { id: "a", text: "monkeys" },
      { id: "b", text: "tiger" },
      { id: "c", text: "aunt" },
      { id: "d", text: "tree" }
    ],
    answerId: "a",
    explanation: "The passage says \"three monkeys.\" The -s at the end shows more than one.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q02",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. \"Ravi laughed loudly.\" The verb \"laughed\" tells us the action happened \u2014",
    options: [
      { id: "a", text: "every day" },
      { id: "b", text: "tomorrow" },
      { id: "c", text: "in the past" },
      { id: "d", text: "right now" }
    ],
    answerId: "c",
    explanation: "Many verbs add -ed to show the past: laugh becomes laughed. The zoo trip was last Sunday.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q03",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. \"He is drawing the animals in it.\" Who does \"He\" refer to?",
    options: [
      { id: "a", text: "The aunt" },
      { id: "b", text: "Ravi" },
      { id: "c", text: "The tiger" },
      { id: "d", text: "The elephant" }
    ],
    answerId: "b",
    explanation: "The sentence before talks about Ravi's new notebook. \"He\" takes the place of Ravi.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q04",
    prompt: "Last Sunday, Ravi and his aunt went to the zoo in Mysuru. They saw two elephants, three monkeys and a big tiger. The monkeys were jumping from branch to branch. A baby elephant was spraying water on its mother. Ravi laughed loudly. His aunt bought him an ice cream. At noon, they sat under a tree and ate their lunch. Today, Ravi has a new notebook. He is drawing the animals in it. He is very happy.\n\nRead Passage P1. Fill in the missing word: \"At noon, they sat ___ a tree and ate their lunch.\"",
    options: [
      { id: "a", text: "on" },
      { id: "b", text: "over" },
      { id: "c", text: "into" },
      { id: "d", text: "under" }
    ],
    answerId: "d",
    explanation: "People sit below a tree in its shade. \"Under\" shows that position.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q05",
    prompt: "**Meena:** Mummy, are these mangoes sweet?\n**Mother:** Yes, they are. The shopkeeper says they are from Ratnagiri.\n**Meena:** I want an apple too.\n**Mother:** We have apples at home. Let's buy bananas instead.\n**Meena:** Okay! I am carrying the bag.\n**Mother:** Thank you, beta. It is heavy, so hold it with both hands.\n**Shopkeeper:** Here are six bananas. They are fresh and yellow.\n**Mother:** Thank you. How much are they?\n**Shopkeeper:** Forty rupees, please.\n\nRead Passage P2. Meena says, \"I want an apple too.\" Why does she use \"an\"?",
    options: [
      { id: "a", text: "The apple is small." },
      { id: "b", text: "The apple is red." },
      { id: "c", text: "\"Apple\" begins with a vowel sound." },
      { id: "d", text: "There are many apples." }
    ],
    answerId: "c",
    explanation: "Use \"an\" before a vowel sound: an apple, an egg, an umbrella.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q06",
    prompt: "**Meena:** Mummy, are these mangoes sweet?\n**Mother:** Yes, they are. The shopkeeper says they are from Ratnagiri.\n**Meena:** I want an apple too.\n**Mother:** We have apples at home. Let's buy bananas instead.\n**Meena:** Okay! I am carrying the bag.\n**Mother:** Thank you, beta. It is heavy, so hold it with both hands.\n**Shopkeeper:** Here are six bananas. They are fresh and yellow.\n**Mother:** Thank you. How much are they?\n**Shopkeeper:** Forty rupees, please.\n\nRead Passage P2. \"We have apples at home.\" Why does Mother say \"have\" and not \"has\"?",
    options: [
      { id: "a", text: "\"We\" means more than one person." },
      { id: "b", text: "The apples are red." },
      { id: "c", text: "It happened in the past." },
      { id: "d", text: "It is a question." }
    ],
    answerId: "a",
    explanation: "Use \"have\" with I, you, we and they. Use \"has\" with he, she and it.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q07",
    prompt: "**Meena:** Mummy, are these mangoes sweet?\n**Mother:** Yes, they are. The shopkeeper says they are from Ratnagiri.\n**Meena:** I want an apple too.\n**Mother:** We have apples at home. Let's buy bananas instead.\n**Meena:** Okay! I am carrying the bag.\n**Mother:** Thank you, beta. It is heavy, so hold it with both hands.\n**Shopkeeper:** Here are six bananas. They are fresh and yellow.\n**Mother:** Thank you. How much are they?\n**Shopkeeper:** Forty rupees, please.\n\nRead Passage P2. \"It is heavy, so hold it with both hands.\" Which word is an ADJECTIVE?",
    options: [
      { id: "a", text: "It" },
      { id: "b", text: "hold" },
      { id: "c", text: "hands" },
      { id: "d", text: "heavy" }
    ],
    answerId: "d",
    explanation: "\"Heavy\" describes the bag and tells us what it is like. \"Hold\" is a verb and \"hands\" is a noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q08",
    prompt: "Our new classroom is on the first floor. There is a big window next to my desk. A neem tree stands outside the window. Every morning, a bird sits on its branch and sings. Our teacher, Ms. Lata, keeps a globe on her table. The books are in the cupboard behind the door. We have a small garden in front of the classroom. The guard locks the room at five o'clock every evening.\n\nRead Passage P3. \"There is a big window next to my desk.\" Which words tell us WHERE the window is?",
    options: [
      { id: "a", text: "There is" },
      { id: "b", text: "next to" },
      { id: "c", text: "big" },
      { id: "d", text: "my" }
    ],
    answerId: "b",
    explanation: "\"Next to\" is a preposition of place. It means beside. Other examples are in, on, under and behind.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q09",
    prompt: "Look at the picture. Fill in the blank.\n\"One mouse, three ___.\"",
    options: [
      { id: "a", text: "mouses" },
      { id: "b", text: "mice" },
      { id: "c", text: "mices" },
      { id: "d", text: "meese" }
    ],
    answerId: "b",
    explanation: "Some plurals change their spelling completely. One mouse, three mice, and one tooth, two teeth.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>One mouse and three ?</title><desc>Two panels: the left shows a single grey mouse; the right shows a group of the same small animal.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"10\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#eaf4f4\" stroke=\"#5e9ea0\" stroke-width=\"2\"/><rect x=\"205\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#fff1e6\" stroke=\"#e29578\" stroke-width=\"2\"/><ellipse cx=\"95\" cy=\"140\" rx=\"32.0\" ry=\"19.2\" fill=\"#adb5bd\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"123.8\" cy=\"125.6\" r=\"11.2\" fill=\"#ced4da\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"127.0\" cy=\"140\" r=\"1.8\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M63.0,140 q-18,4 -22,-12\" fill=\"none\" stroke=\"#495057\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"138.2\" cy=\"143.2\" r=\"2\" fill=\"#e5989b\" stroke=\"none\" stroke-width=\"2\"/><ellipse cx=\"255\" cy=\"100\" rx=\"24.0\" ry=\"14.3\" fill=\"#adb5bd\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"276.6\" cy=\"89.2\" r=\"8.4\" fill=\"#ced4da\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"279.0\" cy=\"100\" r=\"1.8\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M231.0,100 q-18,4 -22,-12\" fill=\"none\" stroke=\"#495057\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"287.4\" cy=\"102.4\" r=\"2\" fill=\"#e5989b\" stroke=\"none\" stroke-width=\"2\"/><ellipse cx=\"320\" cy=\"150\" rx=\"24.0\" ry=\"14.3\" fill=\"#adb5bd\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"341.6\" cy=\"139.2\" r=\"8.4\" fill=\"#ced4da\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"344.0\" cy=\"150\" r=\"1.8\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M296.0,150 q-18,4 -22,-12\" fill=\"none\" stroke=\"#495057\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"352.4\" cy=\"152.4\" r=\"2\" fill=\"#e5989b\" stroke=\"none\" stroke-width=\"2\"/><ellipse cx=\"255\" cy=\"190\" rx=\"24.0\" ry=\"14.3\" fill=\"#adb5bd\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"276.6\" cy=\"179.2\" r=\"8.4\" fill=\"#ced4da\" stroke=\"#495057\" stroke-width=\"1.5\"/><circle cx=\"279.0\" cy=\"190\" r=\"1.8\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M231.0,190 q-18,4 -22,-12\" fill=\"none\" stroke=\"#495057\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"287.4\" cy=\"192.4\" r=\"2\" fill=\"#e5989b\" stroke=\"none\" stroke-width=\"2\"/><text x=\"102\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">one mouse</text><text x=\"297\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">three ?</text></svg>", "alt": "Two panels: one shows a single grey mouse, and the other shows a group of the same animal with a question mark label."}
  },
  {
    id: "g4-eng-ch02-b-q10",
    prompt: "Look at the picture. Fill in the blank.\n\"One baby, two ___.\"",
    options: [
      { id: "a", text: "babys" },
      { id: "b", text: "babyes" },
      { id: "c", text: "babyies" },
      { id: "d", text: "babies" }
    ],
    answerId: "d",
    explanation: "When a word ends in a consonant + y, change the y to i and add -es. So baby becomes babies and city becomes cities.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>One baby and two ?</title><desc>Two panels: the left shows one smiling baby in a bonnet; the right shows a larger number of the same.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"10\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#eaf4f4\" stroke=\"#5e9ea0\" stroke-width=\"2\"/><rect x=\"205\" y=\"10\" width=\"185\" height=\"240\" rx=\"12\" fill=\"#fff1e6\" stroke=\"#e29578\" stroke-width=\"2\"/><ellipse cx=\"102\" cy=\"149.0\" rx=\"33.8\" ry=\"39.0\" fill=\"#ffafcc\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"102\" cy=\"99.6\" r=\"26.0\" fill=\"#e0ac69\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M76.0,94.4 a26.0,26.0 0 0 1 52.0,0 z\" fill=\"#ffafcc\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"95.1\" cy=\"102.8\" r=\"1.9\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"108.8\" cy=\"102.8\" r=\"1.9\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M95.1,110.6 q6.8,5.8 13.6,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><ellipse cx=\"255\" cy=\"143.0\" rx=\"28.6\" ry=\"33.0\" fill=\"#a2d2ff\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"255\" cy=\"101.2\" r=\"22.0\" fill=\"#e0ac69\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M233.0,96.8 a22.0,22.0 0 0 1 44.0,0 z\" fill=\"#a2d2ff\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"249.2\" cy=\"103.9\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"260.7\" cy=\"103.9\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M249.2,110.5 q5.7,4.9 11.5,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><ellipse cx=\"340\" cy=\"143.0\" rx=\"28.6\" ry=\"33.0\" fill=\"#caffbf\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"340\" cy=\"101.2\" r=\"22.0\" fill=\"#e0ac69\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M318.0,96.8 a22.0,22.0 0 0 1 44.0,0 z\" fill=\"#caffbf\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"334.2\" cy=\"103.9\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"345.7\" cy=\"103.9\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M334.2,110.5 q5.7,4.9 11.5,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"102\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">one baby</text><text x=\"297\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">two ?</text></svg>", "alt": "Two panels: one shows a single smiling baby, and the other shows a larger number of them with a question mark label."}
  },
  {
    id: "g4-eng-ch02-b-q11",
    prompt: "Look at the picture. The woman is Uncle Raj's wife. She is Meena's ___.",
    options: [
      { id: "a", text: "aunt" },
      { id: "b", text: "niece" },
      { id: "c", text: "sister" },
      { id: "d", text: "mother" }
    ],
    answerId: "a",
    explanation: "Uncle and aunt are a pair. An uncle's wife is your aunt.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Meena's family picture</title><desc>A family picture showing a man labelled Uncle Raj, a grown-up woman labelled with a question mark, and a girl labelled Meena.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#fefae0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"110\" y=\"10\" width=\"180\" height=\"30\" rx=\"6\" fill=\"#ffffff\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"200\" y=\"31\" font-family=\"sans-serif\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Meena's family</text><line x1=\"79.5\" y1=\"141.2\" x2=\"77.4\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"9.8\" stroke-linecap=\"round\"/><line x1=\"100.5\" y1=\"141.2\" x2=\"102.6\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"9.8\" stroke-linecap=\"round\"/><line x1=\"69.0\" y1=\"100.6\" x2=\"57.8\" y2=\"142.6\" stroke=\"#c68642\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><line x1=\"111.0\" y1=\"100.6\" x2=\"122.2\" y2=\"142.6\" stroke=\"#c68642\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><rect x=\"69.0\" y=\"93.6\" width=\"42.0\" height=\"47.5\" rx=\"5.6\" fill=\"#457b9d\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"76.8\" r=\"16.8\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M73.2,75.1 a16.8,16.8 0 0 1 33.6,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"85.2\" cy=\"77.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"94.7\" cy=\"77.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M85.2,83.3 q4.7,4.0 9.4,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M76.5,81.8 q13.4,23.5 26.8,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"42.6\" y=\"206\" width=\"94.8\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"90\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Uncle Raj</text><line x1=\"189.8\" y1=\"143.3\" x2=\"187.8\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"9.4\" stroke-linecap=\"round\"/><line x1=\"210.1\" y1=\"143.3\" x2=\"212.1\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"9.4\" stroke-linecap=\"round\"/><line x1=\"179.7\" y1=\"104.1\" x2=\"168.9\" y2=\"144.6\" stroke=\"#c68642\" stroke-width=\"8.1\" stroke-linecap=\"round\"/><line x1=\"220.2\" y1=\"104.1\" x2=\"231.0\" y2=\"144.6\" stroke=\"#c68642\" stroke-width=\"8.1\" stroke-linecap=\"round\"/><polygon points=\"181.7,97.4 218.2,97.4 230.3,159.5 169.6,159.5\" fill=\"#e76f51\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"181.8\" y=\"77.9\" width=\"8.1\" height=\"25.9\" rx=\"4.0\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"210.0\" y=\"77.9\" width=\"8.1\" height=\"25.9\" rx=\"4.0\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"200\" cy=\"81.2\" r=\"16.2\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M183.8,79.5 a16.2,16.2 0 0 1 32.4,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"195.4\" cy=\"82.3\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"204.5\" cy=\"82.3\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M195.4,87.5 q4.5,3.8 9.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"189.4\" y=\"206\" width=\"21.2\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"200\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">?</text><line x1=\"303.2\" y1=\"162.2\" x2=\"301.9\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><line x1=\"316.7\" y1=\"162.2\" x2=\"318.1\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><line x1=\"296.5\" y1=\"136.1\" x2=\"289.3\" y2=\"163.1\" stroke=\"#c68642\" stroke-width=\"5.3\" stroke-linecap=\"round\"/><line x1=\"323.5\" y1=\"136.1\" x2=\"330.7\" y2=\"163.1\" stroke=\"#c68642\" stroke-width=\"5.3\" stroke-linecap=\"round\"/><polygon points=\"297.8,131.6 322.1,131.6 330.2,173.0 289.7,173.0\" fill=\"#ffb703\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"297.9\" y=\"118.6\" width=\"5.3\" height=\"17.2\" rx=\"2.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"316.6\" y=\"118.6\" width=\"5.3\" height=\"17.2\" rx=\"2.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"310\" cy=\"120.8\" r=\"10.7\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M299.2,119.7 a10.7,10.7 0 0 1 21.5,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"306.9\" cy=\"121.5\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"313.0\" cy=\"121.5\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M306.9,125.0 q3.0,2.5 6.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"281.0\" y=\"206\" width=\"58.0\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"310\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Meena</text></svg>", "alt": "A family picture of Uncle Raj, a grown-up woman labelled with a question mark, and a girl named Meena."}
  },
  {
    id: "g4-eng-ch02-b-q12",
    prompt: "Which of these is a PROPER noun?",
    options: [
      { id: "a", text: "city" },
      { id: "b", text: "girl" },
      { id: "c", text: "Ganga" },
      { id: "d", text: "book" }
    ],
    answerId: "c",
    explanation: "Ganga is the name of a particular river, so it starts with a capital letter. The others are common nouns.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q13",
    prompt: "Choose the correct word.\n\"The dog wagged ___ tail.\"",
    options: [
      { id: "a", text: "it" },
      { id: "b", text: "they" },
      { id: "c", text: "them" },
      { id: "d", text: "its" }
    ],
    answerId: "d",
    explanation: "\"Its\" shows that something belongs to an animal or thing. The tail belongs to the dog.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q14",
    prompt: "Look at the picture. Kavya wants the book for herself. Which word fills the blank in her speech bubble?",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "me" },
      { id: "c", text: "we" },
      { id: "d", text: "she" }
    ],
    answerId: "b",
    explanation: "Kavya wants the book given to herself. After \"to\", use me, him, her, us or them. We say \"give it to me\".",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A girl asks her teacher</title><desc>A girl named Kavya speaks to her teacher, who is holding a red book; the girl's speech bubble has a missing word.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#e9ecef\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"102.1\" y1=\"170.9\" x2=\"100.5\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.3\" stroke-linecap=\"round\"/><line x1=\"117.8\" y1=\"170.9\" x2=\"119.4\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.3\" stroke-linecap=\"round\"/><line x1=\"94.2\" y1=\"140.4\" x2=\"85.8\" y2=\"171.9\" stroke=\"#c68642\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><line x1=\"125.7\" y1=\"140.4\" x2=\"159.3\" y2=\"142.5\" stroke=\"#c68642\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><polygon points=\"95.8,135.2 124.1,135.2 133.6,183.5 86.3,183.5\" fill=\"#ffb703\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"95.8\" y=\"120.0\" width=\"6.3\" height=\"20.1\" rx=\"3.1\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"117.8\" y=\"120.0\" width=\"6.3\" height=\"20.1\" rx=\"3.1\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"122.6\" r=\"12.6\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M97.4,121.3 a12.6,12.6 0 0 1 25.2,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"106.4\" cy=\"123.4\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"113.5\" cy=\"123.4\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M106.4,127.5 q3.5,3.0 7.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"81.0\" y=\"221\" width=\"58.0\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"110\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Kavya</text><line x1=\"278.7\" y1=\"152.0\" x2=\"276.5\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"10.5\" stroke-linecap=\"round\"/><line x1=\"301.2\" y1=\"152.0\" x2=\"303.5\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"10.5\" stroke-linecap=\"round\"/><line x1=\"267.5\" y1=\"108.5\" x2=\"255.5\" y2=\"153.5\" stroke=\"#c68642\" stroke-width=\"9.0\" stroke-linecap=\"round\"/><line x1=\"312.5\" y1=\"108.5\" x2=\"342.5\" y2=\"141.5\" stroke=\"#c68642\" stroke-width=\"9.0\" stroke-linecap=\"round\"/><polygon points=\"269.7,101.0 310.2,101.0 323.7,170.0 256.2,170.0\" fill=\"#6a4c93\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"290\" cy=\"83.0\" r=\"18.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M272.0,81.2 a18.0,18.0 0 0 1 36.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"290\" cy=\"64.1\" r=\"8.1\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"284.9\" cy=\"84.2\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"295.0\" cy=\"84.2\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M284.9,90.0 q5.0,4.3 10.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"318\" y=\"140\" width=\"34\" height=\"26\" rx=\"3\" fill=\"#e63946\" stroke=\"#9b2226\" stroke-width=\"1.5\"/><line x1=\"335\" y1=\"140\" x2=\"335\" y2=\"166\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"10\" y=\"10\" width=\"260\" height=\"46\" rx=\"12\" fill=\"#ffffff\" stroke=\"#555\" stroke-width=\"2\"/><polygon points=\"90,55 110,55 100,95\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M90,56 L100,95 L110,56\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"140.0\" y=\"32\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">\"Please give the book to ___.\"</text></svg>", "alt": "A girl named Kavya speaks to her teacher, who is holding a book, and her sentence has a missing word."}
  },
  {
    id: "g4-eng-ch02-b-q15",
    prompt: "Look at the picture. Fill in the blank with the correct describing word.\n\"The ___ boy is playing the drum.\"",
    options: [
      { id: "a", text: "short" },
      { id: "b", text: "sleepy" },
      { id: "c", text: "tall" },
      { id: "d", text: "sad" }
    ],
    answerId: "c",
    explanation: "Look carefully. The boy with the drum is much taller than the boy with the flute. \"Tall\" describes him.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Two boys making music</title><desc>Two boys play music outdoors: one boy is much taller than the other; one plays a drum and the other plays a flute.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#d8f3dc\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"97.2\" y1=\"143.6\" x2=\"94.7\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"11.9\" stroke-linecap=\"round\"/><line x1=\"122.7\" y1=\"143.6\" x2=\"125.3\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"11.9\" stroke-linecap=\"round\"/><line x1=\"84.5\" y1=\"94.3\" x2=\"70.9\" y2=\"145.3\" stroke=\"#c68642\" stroke-width=\"10.2\" stroke-linecap=\"round\"/><line x1=\"135.5\" y1=\"94.3\" x2=\"169.5\" y2=\"131.7\" stroke=\"#c68642\" stroke-width=\"10.2\" stroke-linecap=\"round\"/><rect x=\"84.5\" y=\"85.8\" width=\"51.0\" height=\"57.8\" rx=\"6.8\" fill=\"#2a9d8f\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"65.4\" r=\"20.4\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M89.6,63.3 a20.4,20.4 0 0 1 40.8,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"104.2\" cy=\"66.8\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"115.7\" cy=\"66.8\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M104.2,73.3 q5.7,4.8 11.4,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"128\" y=\"160\" width=\"48\" height=\"36\" rx=\"2\" fill=\"#e63946\" stroke=\"#9b2226\" stroke-width=\"2\"/><ellipse cx=\"152\" cy=\"160\" rx=\"24\" ry=\"8\" fill=\"#f1faee\" stroke=\"#9b2226\" stroke-width=\"2\"/><ellipse cx=\"152\" cy=\"196\" rx=\"24\" ry=\"7\" fill=\"#c1121f\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M130,165 L174,192 M174,165 L130,192\" fill=\"none\" stroke=\"#ffd166\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"150\" x2=\"166\" y2=\"128\" stroke=\"#6d4c41\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"282.5\" y1=\"173.0\" x2=\"281.0\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"297.5\" y1=\"173.0\" x2=\"299.0\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.0\" stroke-linecap=\"round\"/><line x1=\"275.0\" y1=\"144.0\" x2=\"267.0\" y2=\"174.0\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"305.0\" y1=\"144.0\" x2=\"325.0\" y2=\"166.0\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><rect x=\"275.0\" y=\"139.0\" width=\"30.0\" height=\"34.0\" rx=\"4.0\" fill=\"#f77f00\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"290\" cy=\"127.0\" r=\"12.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M278.0,125.8 a12.0,12.0 0 0 1 24.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"286.6\" cy=\"127.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"293.3\" cy=\"127.8\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M286.6,131.6 q3.3,2.8 6.7,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"300\" y1=\"150\" x2=\"345\" y2=\"140\" stroke=\"#8d6e63\" stroke-width=\"5\" stroke-linecap=\"round\"/></svg>", "alt": "Two boys of different heights make music, one with a drum and one with a flute."}
  },
  {
    id: "g4-eng-ch02-b-q16",
    prompt: "What is the past form of \"go\"?",
    options: [
      { id: "a", text: "went" },
      { id: "b", text: "goed" },
      { id: "c", text: "gone" },
      { id: "d", text: "going" }
    ],
    answerId: "a",
    explanation: "\"Go\" does not add -ed. Today I go; yesterday I went.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q17",
    prompt: "Look at the picture. Choose the sentence that correctly tells what the children are doing now.",
    options: [
      { id: "a", text: "They are playing cricket." },
      { id: "b", text: "They is playing cricket." },
      { id: "c", text: "They are playing football." },
      { id: "d", text: "They am playing cricket." }
    ],
    answerId: "a",
    explanation: "The picture shows a bat, a ball and wickets, so it's cricket. With \"they\", use \"are\" + -ing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Children in a field</title><desc>Three children are outdoors together in a green field, playing a game with sports equipment.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#cdeac0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"0\" width=\"400\" height=\"90\" rx=\"0\" fill=\"#cfe9ff\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"330\" y1=\"150\" x2=\"330\" y2=\"215\" stroke=\"#f1e3c8\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"340\" y1=\"150\" x2=\"340\" y2=\"215\" stroke=\"#f1e3c8\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"150\" x2=\"350\" y2=\"215\" stroke=\"#f1e3c8\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"328\" y1=\"150\" x2=\"352\" y2=\"150\" stroke=\"#f1e3c8\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"281.7\" y1=\"173.8\" x2=\"280.1\" y2=\"220\" stroke=\"#ffffff\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"298.2\" y1=\"173.8\" x2=\"299.9\" y2=\"220\" stroke=\"#ffffff\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"273.5\" y1=\"141.9\" x2=\"264.7\" y2=\"174.9\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"306.5\" y1=\"141.9\" x2=\"328.5\" y2=\"166.1\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><rect x=\"273.5\" y=\"136.4\" width=\"33.0\" height=\"37.4\" rx=\"4.4\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"290\" cy=\"123.2\" r=\"13.2\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M276.8,121.8 a13.2,13.2 0 0 1 26.4,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"286.3\" cy=\"124.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"293.6\" cy=\"124.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M286.3,128.3 q3.6,3.1 7.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M318,185 L340,230\" fill=\"none\" stroke=\"#a0522d\" stroke-width=\"8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"72.1\" y1=\"170.9\" x2=\"70.5\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.3\" stroke-linecap=\"round\"/><line x1=\"87.8\" y1=\"170.9\" x2=\"89.4\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.3\" stroke-linecap=\"round\"/><line x1=\"64.2\" y1=\"140.4\" x2=\"51.6\" y2=\"111.0\" stroke=\"#c68642\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><line x1=\"95.7\" y1=\"140.4\" x2=\"108.3\" y2=\"111.0\" stroke=\"#c68642\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><polygon points=\"65.8,135.2 94.1,135.2 103.6,183.5 56.3,183.5\" fill=\"#e63946\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"65.8\" y=\"120.0\" width=\"6.3\" height=\"20.1\" rx=\"3.1\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"87.8\" y=\"120.0\" width=\"6.3\" height=\"20.1\" rx=\"3.1\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"122.6\" r=\"12.6\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M67.4,121.3 a12.6,12.6 0 0 1 25.2,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"76.4\" cy=\"123.4\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"83.5\" cy=\"123.4\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M76.4,127.5 q3.5,3.0 7.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"165\" cy=\"120\" r=\"7\" fill=\"#c1121f\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"183.6\" y1=\"164.3\" x2=\"182.3\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"5.9\" stroke-linecap=\"round\"/><line x1=\"196.3\" y1=\"164.3\" x2=\"197.6\" y2=\"200\" stroke=\"#4d4d4d\" stroke-width=\"5.9\" stroke-linecap=\"round\"/><line x1=\"177.2\" y1=\"139.6\" x2=\"170.4\" y2=\"165.1\" stroke=\"#c68642\" stroke-width=\"5.1\" stroke-linecap=\"round\"/><line x1=\"202.7\" y1=\"139.6\" x2=\"209.5\" y2=\"165.1\" stroke=\"#c68642\" stroke-width=\"5.1\" stroke-linecap=\"round\"/><rect x=\"177.2\" y=\"135.4\" width=\"25.5\" height=\"28.9\" rx=\"3.4\" fill=\"#1e6fd9\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"190\" cy=\"125.2\" r=\"10.2\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M179.8,124.1 a10.2,10.2 0 0 1 20.4,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"187.1\" cy=\"125.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"192.8\" cy=\"125.9\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M187.1,129.1 q2.8,2.4 5.7,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "Three children play a game together in a green field."}
  },
  {
    id: "g4-eng-ch02-b-q18",
    prompt: "Choose the correct verb.\n\"The sun ___ every morning.\"",
    options: [
      { id: "a", text: "rise" },
      { id: "b", text: "rising" },
      { id: "c", text: "rose" },
      { id: "d", text: "rises" }
    ],
    answerId: "d",
    explanation: "This happens every day, so use the simple present. With \"the sun\" (it), add -s: rises.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q19",
    prompt: "Fill in the blank.\n\"I ___ ill last week.\"",
    options: [
      { id: "a", text: "were" },
      { id: "b", text: "was" },
      { id: "c", text: "am" },
      { id: "d", text: "are" }
    ],
    answerId: "b",
    explanation: "\"Last week\" means the past. With \"I,\" use \"was.\" Use \"were\" with we, you and they.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q20",
    prompt: "Fill in the blank.\n\"They ___ a big garden.\"",
    options: [
      { id: "a", text: "has" },
      { id: "b", text: "is" },
      { id: "c", text: "have" },
      { id: "d", text: "am" }
    ],
    answerId: "c",
    explanation: "With \"they,\" use \"have.\" \"They has\" is a mistake.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q21",
    prompt: "Fill in the blank.\n\"___ sun is very hot today.\"",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "An" },
      { id: "c", text: "The" },
      { id: "d", text: "Some" }
    ],
    answerId: "c",
    explanation: "There is only one sun, so we use \"the.\" \"The\" is for something special or the only one: the sun, the moon.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q22",
    prompt: "Look at the calendar. Riya circled her birthday. Fill in the blank.\n\"My birthday is ___.\"",
    options: [
      { id: "a", text: "in July" },
      { id: "b", text: "on July" },
      { id: "c", text: "at July" },
      { id: "d", text: "in June" }
    ],
    answerId: "a",
    explanation: "The calendar page shows July. Use \"in\" with months, \"on\" with days and dates, and \"at\" with times.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A calendar page with one date circled</title><desc>A one-month wall calendar with the month name at the top and one date circled in yellow.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"60\" y=\"10\" width=\"280\" height=\"240\" rx=\"10\" fill=\"#ffffff\" stroke=\"#264653\" stroke-width=\"3\"/><rect x=\"60\" y=\"10\" width=\"280\" height=\"40\" rx=\"10\" fill=\"#2a9d8f\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"60\" y=\"35\" width=\"280\" height=\"15\" rx=\"0\" fill=\"#2a9d8f\" stroke=\"none\" stroke-width=\"2\"/><text x=\"200\" y=\"40\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">JULY</text><text x=\"85\" y=\"70\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2a9d8f\">S</text><text x=\"123\" y=\"70\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2a9d8f\">M</text><text x=\"161\" y=\"70\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2a9d8f\">T</text><text x=\"199\" y=\"70\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2a9d8f\">W</text><text x=\"237\" y=\"70\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2a9d8f\">T</text><text x=\"275\" y=\"70\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2a9d8f\">F</text><text x=\"313\" y=\"70\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2a9d8f\">S</text><text x=\"199\" y=\"96\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">1</text><text x=\"237\" y=\"96\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">2</text><text x=\"275\" y=\"96\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">3</text><text x=\"313\" y=\"96\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">4</text><text x=\"85\" y=\"126\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">5</text><text x=\"123\" y=\"126\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">6</text><text x=\"161\" y=\"126\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">7</text><text x=\"199\" y=\"126\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">8</text><text x=\"237\" y=\"126\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">9</text><text x=\"275\" y=\"126\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">10</text><text x=\"313\" y=\"126\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">11</text><text x=\"85\" y=\"156\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">12</text><text x=\"123\" y=\"156\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">13</text><circle cx=\"161\" cy=\"151\" r=\"14\" fill=\"#ffd166\" stroke=\"#e76f51\" stroke-width=\"2\"/><text x=\"161\" y=\"156\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">14</text><text x=\"199\" y=\"156\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">15</text><text x=\"237\" y=\"156\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">16</text><text x=\"275\" y=\"156\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">17</text><text x=\"313\" y=\"156\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">18</text><text x=\"85\" y=\"186\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">19</text><text x=\"123\" y=\"186\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">20</text><text x=\"161\" y=\"186\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">21</text><text x=\"199\" y=\"186\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">22</text><text x=\"237\" y=\"186\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">23</text><text x=\"275\" y=\"186\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">24</text><text x=\"313\" y=\"186\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">25</text><text x=\"85\" y=\"216\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">26</text><text x=\"123\" y=\"216\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">27</text><text x=\"161\" y=\"216\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">28</text><text x=\"199\" y=\"216\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">29</text><text x=\"237\" y=\"216\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">30</text><text x=\"275\" y=\"216\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">31</text><circle cx=\"355\" cy=\"60\" r=\"0\" fill=\"#fff\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"250\" y=\"226\" width=\"82\" height=\"0\" rx=\"0\" fill=\"#fff\" stroke=\"none\" stroke-width=\"2\"/></svg>", "alt": "A one-month wall calendar with one date circled."}
  },
  {
    id: "g4-eng-ch02-b-q23",
    prompt: "Look at the picture. Fill in the blank.\n\"The cat is hiding ___ the bed.\"",
    options: [
      { id: "a", text: "on" },
      { id: "b", text: "beside" },
      { id: "c", text: "behind" },
      { id: "d", text: "under" }
    ],
    answerId: "d",
    explanation: "The cat is on the floor, below the bed and between its legs. \"Under\" means below something.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A cat and a bed</title><desc>A bedroom with a bed on four legs and an orange cat hiding somewhere near the bed.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#e0e1dd\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"70\" y=\"120\" width=\"260\" height=\"40\" rx=\"8\" fill=\"#a2d2ff\" stroke=\"#457b9d\" stroke-width=\"2\"/><rect x=\"60\" y=\"155\" width=\"280\" height=\"14\" rx=\"3\" fill=\"#8d6e63\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"64\" y=\"90\" width=\"16\" height=\"130\" rx=\"3\" fill=\"#6d4c41\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"320\" y=\"110\" width=\"16\" height=\"110\" rx=\"3\" fill=\"#6d4c41\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"80\" y=\"108\" width=\"60\" height=\"18\" rx=\"8\" fill=\"#ffffff\" stroke=\"#bbb\" stroke-width=\"1\"/><ellipse cx=\"190\" cy=\"200\" rx=\"26.4\" ry=\"16.8\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/><circle cx=\"216.4\" cy=\"185.6\" r=\"12.0\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1.5\"/><polygon points=\"208.0,178.4 211.6,166.4 217.6,176.0\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1\"/><polygon points=\"217.6,176.0 223.6,166.4 226.0,179.6\" fill=\"#f4a261\" stroke=\"#6d4c41\" stroke-width=\"1\"/><circle cx=\"212.8\" cy=\"184.4\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"221.2\" cy=\"184.4\" r=\"1.6\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M163.6,200 q-14,-4 -12,-20\" fill=\"none\" stroke=\"#6d4c41\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "A bedroom with a bed on four legs and an orange cat hiding near it."}
  },
  {
    id: "g4-eng-ch02-b-q24",
    prompt: "Which sentence is correct?",
    options: [
      { id: "a", text: "The boys is playing." },
      { id: "b", text: "The boys are playing." },
      { id: "c", text: "The boy are playing." },
      { id: "d", text: "The boys am playing." }
    ],
    answerId: "b",
    explanation: "\"Boys\" means more than one, so use \"are.\" One boy \"is\" playing; many boys \"are\" playing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udee0\ufe0f",
    title: "Welcome, word worker!",
    body: ["Every word has a job.", "Let's meet the team and build sentences together.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Hello, word worker! Welcome to the Word Workshop, where we build sentences together. Every word has a job.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Meet the word team",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: nouns, pronouns, adjectives, verbs and articles.",
    cards: [
      { label: "Nouns", reveal: "Naming words: Ravi, school, mango, Delhi", emoji: "\ud83d\udcdb" },
      { label: "Pronouns", reveal: "Take a noun's place: he, she, it, we, they", emoji: "\ud83d\udd01" },
      { label: "Adjectives", reveal: "Describing words: a big tiger, a sweet mango", emoji: "\ud83c\udfa8" },
      { label: "Verbs", reveal: "Doing words that tell when: eat, ate, am eating", emoji: "\ud83c\udfc3" },
      { label: "A, an, the", reveal: "Use \u201can\u201d before a vowel sound: an apple, an owl", emoji: "\ud83d\udd24" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Spot the jobs",
    visual: "sentence",
    speak: "Priya is eating an orange under the tree. Priya is a noun. Is eating is a verb happening right now. An orange, because orange begins with a vowel sound. Under tells us where.",
    steps: ["\u201cPriya is eating an orange under the tree.\u201d", "Priya \u2192 noun (a name)", "is eating \u2192 verb, happening right now", "an orange \u2192 vowel sound \u00b7 under \u2192 tells where"],
    punchline: "Ask: what job is this word doing?",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Choose the right word: \u201cI saw ___ owl in the tree.\u201d",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the two" },
      { id: "d", text: "some" }
    ],
    answerId: "b",
    why: "Owl begins with a vowel sound, so we use \u201can.\u201d",
    visual: "sentence",
    speak: "Choose the right word: \u201cI saw ___ owl in the tree.\u201d",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Word worker pro!",
    bullets: ["Nouns name, verbs do", "Adjectives describe; pronouns replace", "Say it aloud \u2014 the right answer sounds right", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Word worker pro! You are ready for the practice sets.",
  },
];

export const g4EnglishGrammar: ChapterDef = {
  id: "word-workshop",
  title: "Word Workshop",
  emoji: "\ud83d\udee0\ufe0f",
  blurb: "Nouns, pronouns, adjectives & verbs",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "grammar",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "grammar",
      questions: SET_B,
    },
  ],
  paperTopics: ["grammar", "vocabulary"],
};

export const g4EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
