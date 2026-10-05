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
    prompt: "What is the plural of \"child\"?",
    options: [
      { id: "a", text: "childs" },
      { id: "b", text: "childes" },
      { id: "c", text: "childrens" },
      { id: "d", text: "children" }
    ],
    answerId: "d",
    explanation: "Some plurals don't add -s. One child, many children. Never say \"childrens.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q10",
    prompt: "What is the plural of \"box\"?",
    options: [
      { id: "a", text: "boxes" },
      { id: "b", text: "boxs" },
      { id: "c", text: "boxen" },
      { id: "d", text: "boxies" }
    ],
    answerId: "a",
    explanation: "Words ending in x, s, sh or ch add -es: box becomes boxes, bus becomes buses, dish becomes dishes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q11",
    prompt: "What is the opposite gender of \"king\"?",
    options: [
      { id: "a", text: "prince" },
      { id: "b", text: "man" },
      { id: "c", text: "queen" },
      { id: "d", text: "princess" }
    ],
    answerId: "c",
    explanation: "King and queen are a pair. Prince and princess are another pair.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "Choose the correct pronoun.\n\"Sita is my friend. ___ lives near my house.\"",
    options: [
      { id: "a", text: "She" },
      { id: "b", text: "He" },
      { id: "c", text: "It" },
      { id: "d", text: "They" }
    ],
    answerId: "a",
    explanation: "Sita is a girl, so we use \"she\" in place of her name.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-a-q14",
    prompt: "Choose the correct pronoun.\n\"Rahul and I are in the same class. ___ sit together.\"",
    options: [
      { id: "a", text: "They" },
      { id: "b", text: "He" },
      { id: "c", text: "We" },
      { id: "d", text: "You" }
    ],
    answerId: "c",
    explanation: "\"Rahul and I\" includes the speaker, so the pronoun is \"we.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "Choose the correct verb.\n\"Look! The baby ___.\"",
    options: [
      { id: "a", text: "sleep" },
      { id: "b", text: "is sleeping" },
      { id: "c", text: "slept" },
      { id: "d", text: "sleeps" }
    ],
    answerId: "b",
    explanation: "\"Look!\" means it is happening right now. Use is/am/are + -ing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "Fill in the blank.\n\"We have lunch ___ one o'clock.\"",
    options: [
      { id: "a", text: "in" },
      { id: "b", text: "on" },
      { id: "c", text: "at" },
      { id: "d", text: "under" }
    ],
    answerId: "c",
    explanation: "Use \"at\" with clock times: at one o'clock, at 5 p.m.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "\"The happy girl sang sweetly.\"\nWhich word in this sentence is a NOUN?",
    options: [
      { id: "a", text: "girl" },
      { id: "b", text: "happy" },
      { id: "c", text: "sang" },
      { id: "d", text: "sweetly" }
    ],
    answerId: "a",
    explanation: "A noun names a person, place, animal or thing. \"Girl\" names a person. Happy describes her, and sang is the action.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "What is the plural of \"mouse\"?",
    options: [
      { id: "a", text: "mouses" },
      { id: "b", text: "mice" },
      { id: "c", text: "mices" },
      { id: "d", text: "meese" }
    ],
    answerId: "b",
    explanation: "Some plurals change their spelling completely: one mouse, two mice. One tooth, two teeth.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q10",
    prompt: "What is the plural of \"baby\"?",
    options: [
      { id: "a", text: "babys" },
      { id: "b", text: "babyes" },
      { id: "c", text: "babyies" },
      { id: "d", text: "babies" }
    ],
    answerId: "d",
    explanation: "When a word ends in a consonant + y, change y to i and add -es: baby becomes babies, city becomes cities.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q11",
    prompt: "What is the opposite gender of \"uncle\"?",
    options: [
      { id: "a", text: "aunt" },
      { id: "b", text: "niece" },
      { id: "c", text: "sister" },
      { id: "d", text: "mother" }
    ],
    answerId: "a",
    explanation: "Uncle and aunt are a pair. Nephew and niece are another pair.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "Choose the correct pronoun.\n\"Please give the book to ___.\"",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "me" },
      { id: "c", text: "we" },
      { id: "d", text: "she" }
    ],
    answerId: "b",
    explanation: "After words like \"to,\" use me, him, her, us or them. We say \"give it to me,\" not \"to I.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q15",
    prompt: "\"The tall boy played the drum.\"\nWhich word describes the boy?",
    options: [
      { id: "a", text: "boy" },
      { id: "b", text: "played" },
      { id: "c", text: "tall" },
      { id: "d", text: "drum" }
    ],
    answerId: "c",
    explanation: "\"Tall\" is an adjective. It tells us what the boy looks like.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "Choose the correct verb.\n\"We ___ cricket now.\"",
    options: [
      { id: "a", text: "are playing" },
      { id: "b", text: "is playing" },
      { id: "c", text: "am playing" },
      { id: "d", text: "played" }
    ],
    answerId: "a",
    explanation: "\"Now\" means it is happening at this moment. With \"we,\" use \"are\" + -ing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
    prompt: "Fill in the blank.\n\"My birthday is ___ July.\"",
    options: [
      { id: "a", text: "in" },
      { id: "b", text: "on" },
      { id: "c", text: "at" },
      { id: "d", text: "under" }
    ],
    answerId: "a",
    explanation: "Use \"in\" with months and years (in July), \"on\" with days (on Monday), and \"at\" with times (at 3 o'clock).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch02-b-q23",
    prompt: "Fill in the blank.\n\"The cat is hiding ___ the bed.\"",
    options: [
      { id: "a", text: "at" },
      { id: "b", text: "of" },
      { id: "c", text: "to" },
      { id: "d", text: "under" }
    ],
    answerId: "d",
    explanation: "\"Under\" means below something. A cat often hides below the bed.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
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
