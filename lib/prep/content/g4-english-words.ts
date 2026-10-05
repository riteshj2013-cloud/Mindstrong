import type { ChapterDef, PrepQuestion } from "../types";

/** Word Garden - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-eng-ch03-a-q01",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Which word rhymes with \"roof\"?",
    options: [
      { id: "a", text: "proof" },
      { id: "b", text: "rain" },
      { id: "c", text: "frogs" },
      { id: "d", text: "boat" }
    ],
    answerId: "a",
    explanation: "Rhyming words end with the same sound. Roof and proof both end with \"oof.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q02",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Which pair of words RHYMES in the poem?",
    options: [
      { id: "a", text: "frogs, clouds" },
      { id: "b", text: "boat, paper" },
      { id: "c", text: "white, right" },
      { id: "d", text: "rain, sky" }
    ],
    answerId: "c",
    explanation: "White and right both end with the \"ite\" sound. Say them aloud, and they sound alike at the end.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q03",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Amma says, \"Come in, it's late!\" What does \"it's\" mean?",
    options: [
      { id: "a", text: "its" },
      { id: "b", text: "it is" },
      { id: "c", text: "it was" },
      { id: "d", text: "is it" }
    ],
    answerId: "b",
    explanation: "\"It's\" is a short form of \"it is.\" The apostrophe (') takes the place of the missing letter \"i.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q04",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. What is the OPPOSITE of \"late\"?",
    options: [
      { id: "a", text: "dark" },
      { id: "b", text: "tired" },
      { id: "c", text: "slow" },
      { id: "d", text: "early" }
    ],
    answerId: "d",
    explanation: "Late means after the right time. Early means before it.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q05",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. \"But puddles, puddles cannot wait!\" What does the child mean?",
    options: [
      { id: "a", text: "The child is scared of puddles." },
      { id: "b", text: "The puddles will dry up soon." },
      { id: "c", text: "The child is too excited to stop playing in the puddles." },
      { id: "d", text: "The child wants to go to sleep." }
    ],
    answerId: "c",
    explanation: "Amma calls the child in, but the child wants to keep playing. Repeating \"puddles, puddles\" shows excitement.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q06",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. Which line shows that Tara asks politely?",
    options: [
      { id: "a", text: "\"May I borrow a book about stars, please?\"" },
      { id: "b", text: "\"When should I return it?\"" },
      { id: "c", text: "\"I will.\"" },
      { id: "d", text: "\"Here is one with lots of pictures.\"" }
    ],
    answerId: "a",
    explanation: "\"May I\" and \"please\" are polite words. They make a request kind and respectful.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q07",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. Why does Tara say, \"Sorry, ma'am, I returned my last book late\"?",
    options: [
      { id: "a", text: "She lost the book." },
      { id: "b", text: "She wants a new book." },
      { id: "c", text: "The librarian was angry." },
      { id: "d", text: "She is being honest about a mistake and saying sorry." }
    ],
    answerId: "d",
    explanation: "Nobody asked her, but Tara owns up to her mistake. Saying sorry for our mistakes is polite and honest.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q08",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. \"When should I return it?\" Why does this sentence end with a question mark (?)?",
    options: [
      { id: "a", text: "It is a happy sentence." },
      { id: "b", text: "It asks a question." },
      { id: "c", text: "It has a name in it." },
      { id: "d", text: "It is a long sentence." }
    ],
    answerId: "b",
    explanation: "A sentence that asks something ends with a question mark. Question words like when, what and where are clues.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q09",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. Which word from the story is a COMPOUND word (two words joined)?",
    options: [
      { id: "a", text: "happily" },
      { id: "b", text: "football" },
      { id: "c", text: "helpless" },
      { id: "d", text: "thankful" }
    ],
    answerId: "b",
    explanation: "Foot + ball = football. The other words have endings like -ly, -less or -ful added, not two whole words.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q10",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. The puppy \"looked hungry and helpless.\" What does \"helpless\" mean?",
    options: [
      { id: "a", text: "Full of help" },
      { id: "b", text: "Helping again" },
      { id: "c", text: "Very helpful" },
      { id: "d", text: "Unable to help itself" }
    ],
    answerId: "d",
    explanation: "\"-less\" means without. A helpless puppy is small and alone, without help, and cannot look after itself.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q11",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. \"Bunty was very thankful.\" What does \"thankful\" mean?",
    options: [
      { id: "a", text: "Full of thanks" },
      { id: "b", text: "Without thanks" },
      { id: "c", text: "Not thankful" },
      { id: "d", text: "Thanking again" }
    ],
    answerId: "a",
    explanation: "\"-ful\" means full of. Thankful means full of thanks, so Bunty was grateful for his gift.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q12",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. \"They played until sunset.\" What is the OPPOSITE of \"sunset\"?",
    options: [
      { id: "a", text: "sunshine" },
      { id: "b", text: "sunlight" },
      { id: "c", text: "sunrise" },
      { id: "d", text: "sunflower" }
    ],
    answerId: "c",
    explanation: "The sun sets in the evening and rises in the morning. Sunrise is the opposite of sunset.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q13",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. \"It was Bunty's birthday.\" What does the apostrophe (') in \"Bunty's\" show?",
    options: [
      { id: "a", text: "There is more than one Bunty." },
      { id: "b", text: "A letter is missing." },
      { id: "c", text: "It is a question." },
      { id: "d", text: "The birthday belongs to Bunty." }
    ],
    answerId: "d",
    explanation: "An apostrophe + s can show that something belongs to someone. Bunty's birthday is the birthday of Bunty.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q14",
    prompt: "Your friend gives you a birthday gift. What should you say?",
    options: [
      { id: "a", text: "\"Give me more.\"" },
      { id: "b", text: "\"Thank you so much!\"" },
      { id: "c", text: "\"Okay.\"" },
      { id: "d", text: "\"Why?\"" }
    ],
    answerId: "b",
    explanation: "When someone gives us something, we say thank you. It shows we are grateful.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q15",
    prompt: "Which word means almost the SAME as \"begin\"?",
    options: [
      { id: "a", text: "end" },
      { id: "b", text: "stop" },
      { id: "c", text: "start" },
      { id: "d", text: "finish" }
    ],
    answerId: "c",
    explanation: "Begin and start mean the same thing. End, stop and finish are opposites of begin.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q16",
    prompt: "Choose the correct word.\n\"I can ___ the birds singing.\"",
    options: [
      { id: "a", text: "hear" },
      { id: "b", text: "here" },
      { id: "c", text: "hair" },
      { id: "d", text: "her" }
    ],
    answerId: "a",
    explanation: "We hear with our ears, and \"hear\" has \"ear\" in it! \"Here\" means this place.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q17",
    prompt: "Choose the correct word.\n\"Please ___ your name on the paper.\"",
    options: [
      { id: "a", text: "write" },
      { id: "b", text: "right" },
      { id: "c", text: "rite" },
      { id: "d", text: "white" }
    ],
    answerId: "a",
    explanation: "\"Write\" means to put words down with a pencil. \"Right\" means correct, or the opposite of left. They sound the same.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q18",
    prompt: "Choose the correct word.\n\"There are ___ apples in the basket.\"",
    options: [
      { id: "a", text: "to" },
      { id: "b", text: "too" },
      { id: "c", text: "tow" },
      { id: "d", text: "two" }
    ],
    answerId: "d",
    explanation: "\"Two\" is the number 2. \"To\" shows direction (go to school), and \"too\" means also.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q19",
    prompt: "Which word means \"not kind\"?",
    options: [
      { id: "a", text: "diskind" },
      { id: "b", text: "unkind" },
      { id: "c", text: "rekind" },
      { id: "d", text: "kindless" }
    ],
    answerId: "b",
    explanation: "\"Un-\" at the start of a word means not. Unkind means not kind, and unhappy means not happy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q20",
    prompt: "What does \"rebuild\" mean?",
    options: [
      { id: "a", text: "Not build" },
      { id: "b", text: "Build badly" },
      { id: "c", text: "Build again" },
      { id: "d", text: "Build fast" }
    ],
    answerId: "c",
    explanation: "\"Re-\" means again. Rebuild means build again, and reread means read again.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q21",
    prompt: "Which sentence uses capital letters correctly?",
    options: [
      { id: "a", text: "my name is arjun." },
      { id: "b", text: "My name is arjun." },
      { id: "c", text: "My name is Arjun." },
      { id: "d", text: "my Name is Arjun." }
    ],
    answerId: "c",
    explanation: "A sentence starts with a capital letter, and names always start with one too. So \"My\" and \"Arjun\" need capitals.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q22",
    prompt: "Which sentence uses commas correctly?",
    options: [
      { id: "a", text: "I bought pens, pencils and erasers." },
      { id: "b", text: "I bought, pens pencils and erasers." },
      { id: "c", text: "I bought pens pencils, and, erasers." },
      { id: "d", text: "I, bought pens pencils and erasers." }
    ],
    answerId: "a",
    explanation: "In a list, use a comma between the items. \"And\" joins the last two items.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q23",
    prompt: "Put the words in the correct order to make a sentence.\nschool / goes / to / Meena",
    options: [
      { id: "a", text: "School goes to Meena." },
      { id: "b", text: "To goes Meena school." },
      { id: "c", text: "Meena school to goes." },
      { id: "d", text: "Meena goes to school." }
    ],
    answerId: "d",
    explanation: "Start with who (Meena), then the action (goes), then where (to school).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q24",
    prompt: "Put the words in the correct order to make a sentence.\nis / the / kite / in / the / blue / sky",
    options: [
      { id: "a", text: "Blue the kite is sky in the." },
      { id: "b", text: "The kite is in the blue sky." },
      { id: "c", text: "The blue is kite in the sky." },
      { id: "d", text: "Kite the is blue in sky the." }
    ],
    answerId: "b",
    explanation: "Who or what (the kite) + is + where (in the blue sky). The describing word \"blue\" goes before the noun \"sky.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-eng-ch03-b-q01",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Which word rhymes with \"cry\"?",
    options: [
      { id: "a", text: "croak" },
      { id: "b", text: "sky" },
      { id: "c", text: "clouds" },
      { id: "d", text: "frogs" }
    ],
    answerId: "b",
    explanation: "Cry and sky both end with the same \"y\" sound. The poet put them at the ends of two lines.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q02",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. \"It wobbles left, it wobbles right.\" This shows that the paper boat is \u2014",
    options: [
      { id: "a", text: "sinking fast" },
      { id: "b", text: "flying in the air" },
      { id: "c", text: "lying still" },
      { id: "d", text: "moving unsteadily from side to side" }
    ],
    answerId: "d",
    explanation: "To wobble is to shake or tip from side to side. \"Left\" and \"right\" are clues.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q03",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. \"I float my boat of paper white.\" What is the OPPOSITE of \"white\"?",
    options: [
      { id: "a", text: "black" },
      { id: "b", text: "grey" },
      { id: "c", text: "paper" },
      { id: "d", text: "bright" }
    ],
    answerId: "a",
    explanation: "White and black are opposite colours. Grey sits between them.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q04",
    prompt: "Pitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. In which season is the poem set?",
    options: [
      { id: "a", text: "Winter" },
      { id: "b", text: "A dry, hot summer" },
      { id: "c", text: "The rainy season (monsoon)" },
      { id: "d", text: "Snowy spring" }
    ],
    answerId: "c",
    explanation: "Rain on the roof, croaking frogs, crying peacocks and puddles are all clues to the monsoon.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q05",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. The librarian says, \"Here is one with lots of pictures.\" Which is another POLITE reply Tara could give?",
    options: [
      { id: "a", text: "\"Thank you, ma'am. It looks lovely!\"" },
      { id: "b", text: "\"Give me another one.\"" },
      { id: "c", text: "\"Hmm.\"" },
      { id: "d", text: "\"I don't like pictures.\"" }
    ],
    answerId: "a",
    explanation: "A polite reply says thank you and is kind about what we are given.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q06",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. When should Tara return the book?",
    options: [
      { id: "a", text: "Today" },
      { id: "b", text: "On Sunday" },
      { id: "c", text: "Next month" },
      { id: "d", text: "Next Monday" }
    ],
    answerId: "d",
    explanation: "The librarian says, \"Please bring it back next Monday.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q07",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. The librarian says, \"That's all right. Thank you for telling me.\" This shows the librarian is \u2014",
    options: [
      { id: "a", text: "angry" },
      { id: "b", text: "kind and understanding" },
      { id: "c", text: "sleepy" },
      { id: "d", text: "in a hurry" }
    ],
    answerId: "b",
    explanation: "She forgives Tara and even thanks her for being honest. That is a kind, understanding reply.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q08",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. What is the short form \"That's\" made of?",
    options: [
      { id: "a", text: "That has" },
      { id: "b", text: "That was" },
      { id: "c", text: "That is" },
      { id: "d", text: "Thats" }
    ],
    answerId: "c",
    explanation: "\"That's\" is short for \"that is.\" The apostrophe stands for the missing \"i.\" Always keep the apostrophe in short forms.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q09",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. The puppy \"looked hungry.\" What is the OPPOSITE of \"hungry\"?",
    options: [
      { id: "a", text: "thirsty" },
      { id: "b", text: "sad" },
      { id: "c", text: "sleepy" },
      { id: "d", text: "full" }
    ],
    answerId: "d",
    explanation: "When we are hungry, we need food. After eating enough, we feel full.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q10",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. Bunty ran to the \"playground.\" Which two words make \"playground\"?",
    options: [
      { id: "a", text: "play + ground" },
      { id: "b", text: "plays + round" },
      { id: "c", text: "pla + yground" },
      { id: "d", text: "player + ground" }
    ],
    answerId: "a",
    explanation: "A compound word joins two whole words. A playground is ground where we play.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q11",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. \"The puppy wagged its tail happily.\" How did the puppy feel?",
    options: [
      { id: "a", text: "Scared" },
      { id: "b", text: "Angry" },
      { id: "c", text: "Happy and thankful" },
      { id: "d", text: "Sleepy" }
    ],
    answerId: "c",
    explanation: "Dogs wag their tails when they are happy. The puppy had just been given cake.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q12",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. Which word from the story has an ending that means \"full of\"?",
    options: [
      { id: "a", text: "helpless" },
      { id: "b", text: "thankful" },
      { id: "c", text: "football" },
      { id: "d", text: "birthday" }
    ],
    answerId: "b",
    explanation: "\"-ful\" means full of, so thankful means full of thanks. \"-less\" means without, which is the opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q13",
    prompt: "You need to pass through a crowded doorway. What should you say?",
    options: [
      { id: "a", text: "\"Excuse me, please.\"" },
      { id: "b", text: "\"Move!\"" },
      { id: "c", text: "\"Go away.\"" },
      { id: "d", text: "\"Hey, you!\"" }
    ],
    answerId: "a",
    explanation: "\"Excuse me\" is the polite way to ask people to let you pass.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q14",
    prompt: "Which word means almost the SAME as \"big\"?",
    options: [
      { id: "a", text: "small" },
      { id: "b", text: "thin" },
      { id: "c", text: "large" },
      { id: "d", text: "short" }
    ],
    answerId: "c",
    explanation: "Big and large mean the same. Small is the opposite of big.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q15",
    prompt: "Which word rhymes with \"cat\"?",
    options: [
      { id: "a", text: "cot" },
      { id: "b", text: "cut" },
      { id: "c", text: "cap" },
      { id: "d", text: "hat" }
    ],
    answerId: "d",
    explanation: "Cat and hat both end with \"at.\" Cot and cut start the same way, but their endings sound different.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q16",
    prompt: "Choose the correct word.\n\"The ___ is shining brightly in the sky.\"",
    options: [
      { id: "a", text: "son" },
      { id: "b", text: "sun" },
      { id: "c", text: "sin" },
      { id: "d", text: "soon" }
    ],
    answerId: "b",
    explanation: "The \"sun\" shines in the sky. \"Son\" means a boy in a family. They sound the same but mean different things.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q17",
    prompt: "Choose the correct word.\n\"Rina has ___ pencils in her box.\"",
    options: [
      { id: "a", text: "ate" },
      { id: "b", text: "eat" },
      { id: "c", text: "eight" },
      { id: "d", text: "eaten" }
    ],
    answerId: "c",
    explanation: "\"Eight\" is the number 8. \"Ate\" is the past of eat. They sound the same.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q18",
    prompt: "Choose the correct word.\n\"Yesterday, the wind ___ my papers away.\"",
    options: [
      { id: "a", text: "blue" },
      { id: "b", text: "blew" },
      { id: "c", text: "blow" },
      { id: "d", text: "bloo" }
    ],
    answerId: "b",
    explanation: "\"Blew\" is the past of blow, and \"yesterday\" tells us it happened in the past. \"Blue\" is a colour.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q19",
    prompt: "Which word means \"without fear\"?",
    options: [
      { id: "a", text: "fearless" },
      { id: "b", text: "fearful" },
      { id: "c", text: "unfear" },
      { id: "d", text: "refear" }
    ],
    answerId: "a",
    explanation: "\"-less\" means without, so fearless means without fear. Fearful means full of fear.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q20",
    prompt: "What is the opposite of \"lock\"?",
    options: [
      { id: "a", text: "relock" },
      { id: "b", text: "dislock" },
      { id: "c", text: "lockful" },
      { id: "d", text: "unlock" }
    ],
    answerId: "d",
    explanation: "Adding \"un-\" can make the opposite of an action: lock and unlock, tie and untie.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q21",
    prompt: "Which of these is NOT a compound word?",
    options: [
      { id: "a", text: "sunflower" },
      { id: "b", text: "rainbow" },
      { id: "c", text: "toothbrush" },
      { id: "d", text: "happy" }
    ],
    answerId: "d",
    explanation: "Sun + flower, rain + bow and tooth + brush are all two words joined. \"Happy\" cannot be split into two words.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q22",
    prompt: "Which sentence should end with a question mark (?)?",
    options: [
      { id: "a", text: "I like mangoes" },
      { id: "b", text: "Please sit down" },
      { id: "c", text: "Where is my bag" },
      { id: "d", text: "The sky is blue" }
    ],
    answerId: "c",
    explanation: "\"Where is my bag\" asks something, so it needs a question mark. The others tell or ask someone to do something.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q23",
    prompt: "The toy belongs to the baby. Which is written correctly?",
    options: [
      { id: "a", text: "the babys toy" },
      { id: "b", text: "the baby's toy" },
      { id: "c", text: "the babies toy" },
      { id: "d", text: "the baby toy's" }
    ],
    answerId: "b",
    explanation: "To show that something belongs to one person, add an apostrophe + s: the baby's toy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q24",
    prompt: "Put the words in the correct order to make a sentence.\na / bird / sat / on / the / tree",
    options: [
      { id: "a", text: "A bird sat on the tree." },
      { id: "b", text: "Sat a bird the on tree." },
      { id: "c", text: "On bird a sat the tree." },
      { id: "d", text: "Tree the on sat bird a." }
    ],
    answerId: "a",
    explanation: "Start with who (a bird), then what it did (sat), then where (on the tree). The first word gets a capital letter.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf3b",
    title: "Hello, word gardener!",
    body: ["Today we grow wonderful words.", "Opposites, look-alikes, rhymes and word parts!", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Hello, word gardener! Today we're going to grow some wonderful words.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Grow your words",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: opposites, same meaning, rhymes, homophones and compound words.",
    cards: [
      { label: "Opposites", reveal: "hot \u2194 cold", emoji: "\ud83d\udd04" },
      { label: "Same meaning", reveal: "big \u2248 large", emoji: "\ud83d\udc6f" },
      { label: "Rhymes", reveal: "cat, hat, mat \u2014 same end sound", emoji: "\ud83c\udfb5" },
      { label: "Homophones", reveal: "sun (sky) \u00b7 son (boy in a family)", emoji: "\ud83d\udc42" },
      { label: "Compound words", reveal: "rain + bow = rainbow", emoji: "\ud83c\udf08" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Break the word",
    visual: "sentence",
    speak: "The puppy was fearless. It ran straight into the big puddle! Fearless is fear plus less. Less means without. So fearless means without fear.",
    steps: ["\u201cThe puppy was fearless. It ran straight into the big puddle!\u201d", "fearless = fear + less (less = without)", "So fearless means without fear", "Clue: the puppy ran right in \u2014 not scared at all!"],
    punchline: "un = not \u00b7 ful = full of \u00b7 less = without",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What does \u201cunhappy\u201d mean?",
    options: [
      { id: "a", text: "Very happy" },
      { id: "b", text: "Not happy" },
      { id: "c", text: "Happy again" },
      { id: "d", text: "Full of happiness" }
    ],
    answerId: "b",
    why: "\u201cUn\u201d means not, so unhappy means not happy.",
    visual: "sentence",
    speak: "What does \u201cunhappy\u201d mean?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Word garden blooming!",
    bullets: ["Opposites, look-alikes & rhymes", "Word parts change meaning", "Not sure? Say both answers out loud", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Word garden blooming! You are ready for the practice sets.",
  },
];

export const g4EnglishWords: ChapterDef = {
  id: "word-garden",
  title: "Word Garden",
  emoji: "\ud83c\udf3b",
  blurb: "Opposites, rhymes, homophones & word parts",
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
  paperTopics: ["vocabulary", "synonyms", "antonyms"],
};

export const g4EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
