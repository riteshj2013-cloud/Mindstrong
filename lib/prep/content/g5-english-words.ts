import type { ChapterDef, PrepQuestion } from "../types";

/** Words at Work - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-eng-ch03-a-q01",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. Which line from the poem contains a SIMILE?",
    options: [
      { id: "a", text: "\"The puddles are mirrors, the lanes are a stream\"" },
      { id: "b", text: "\"The peacock unfolds like a fan made of light\"" },
      { id: "c", text: "\"Amma calls, 'Children! Come in, you'll be wet!'\"" },
      { id: "d", text: "\"The sky is a drummer who practises at noon\"" }
    ],
    answerId: "b",
    explanation: "A simile compares two things using \"like\" or \"as.\" Lines A and D compare without those words, so they are not similes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q02",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. \"The lanes are a stream\" means that the lanes \u2014",
    options: [
      { id: "a", text: "are completely dry" },
      { id: "b", text: "are crowded with people" },
      { id: "c", text: "have just been swept clean" },
      { id: "d", text: "are flowing with rainwater" }
    ],
    answerId: "d",
    explanation: "The poem is about heavy rain. The poet compares the lanes to a stream because water is running through them.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q03",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. In \"you'll be wet,\" the word \"you'll\" is a short form of \u2014",
    options: [
      { id: "a", text: "you will" },
      { id: "b", text: "you all" },
      { id: "c", text: "you shall be" },
      { id: "d", text: "you fill" }
    ],
    answerId: "a",
    explanation: "In a contraction, the apostrophe takes the place of missing letters. \"You'll\" drops the \"wi\" from \"you will.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q04",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. Which word is the OPPOSITE of \"quietly,\" from the last line?",
    options: [
      { id: "a", text: "gently" },
      { id: "b", text: "softly" },
      { id: "c", text: "noisily" },
      { id: "d", text: "slowly" }
    ],
    answerId: "c",
    explanation: "An antonym has the opposite meaning. \"Gently\" and \"softly\" are close to \"quietly\"; \"noisily\" is its opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q05",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. Who or what is \"the drummer\" in the poem?",
    options: [
      { id: "a", text: "The thundering monsoon sky" },
      { id: "b", text: "A boy playing a drum in the lane" },
      { id: "c", text: "Amma calling the children" },
      { id: "d", text: "The frogs in the ditches" }
    ],
    answerId: "a",
    explanation: "The drummer \"thunders and rumbles\" and packs up its sound by morning. These clues describe the stormy sky, not a person.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q06",
    prompt: "**Shopkeeper:** Good morning! How may I help you?\n**Ishaan:** Good morning, uncle. I need a geometry box and two notebooks, please.\n**Shopkeeper:** Ruled or unruled?\n**Ishaan:** Ruled, please. They're for my science project.\n**Shopkeeper:** Here you are. That will be one hundred and twenty rupees.\n**Ishaan:** Oh no, I have only one hundred rupees. Could I take just one notebook today?\n**Shopkeeper:** Of course. You can buy the other one tomorrow.\n**Ishaan:** Thank you so much, uncle. You're very kind.\n**Shopkeeper:** Not at all. Best of luck with your project!\n\nRead Passage P2. Which line shows Ishaan asking politely when he has a problem?",
    options: [
      { id: "a", text: "\"Ruled, please.\"" },
      { id: "b", text: "\"Good morning, uncle.\"" },
      { id: "c", text: "\"They're for my science project.\"" },
      { id: "d", text: "\"Could I take just one notebook today?\"" }
    ],
    answerId: "d",
    explanation: "His problem is that he is short of money. \"Could I...?\" is a polite way to ask for something different.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q07",
    prompt: "**Shopkeeper:** Good morning! How may I help you?\n**Ishaan:** Good morning, uncle. I need a geometry box and two notebooks, please.\n**Shopkeeper:** Ruled or unruled?\n**Ishaan:** Ruled, please. They're for my science project.\n**Shopkeeper:** Here you are. That will be one hundred and twenty rupees.\n**Ishaan:** Oh no, I have only one hundred rupees. Could I take just one notebook today?\n**Shopkeeper:** Of course. You can buy the other one tomorrow.\n**Ishaan:** Thank you so much, uncle. You're very kind.\n**Shopkeeper:** Not at all. Best of luck with your project!\n\nRead Passage P2. Ishaan says, \"They're for my science project.\" \"They're\" means \u2014",
    options: [
      { id: "a", text: "Their are" },
      { id: "b", text: "They are" },
      { id: "c", text: "There are" },
      { id: "d", text: "They were" }
    ],
    answerId: "b",
    explanation: "\"They're\" is a contraction of \"they are.\" Don't mix it up with \"their,\" which shows belonging, or \"there,\" which names a place.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q08",
    prompt: "Ammu had butterflies in her stomach. Her teacher, Mr. D'Souza, had asked for a volunteer to welcome the guests at the school's Annual Day, and Ammu's hand had shot up before she could stop it. For a whole week, she practised in front of the mirror. Her little brother, Kiran, was her audience. He clapped loudly even when she stumbled over a word. On the big day, the hall was as busy as a beehive. Ammu walked to the microphone, took a deep breath and spoke clearly. \"Good evening, everyone, and welcome!\" When she finished, the applause was louder than the monsoon rain. Her knees were still shaking, but her heart felt as light as a feather.\n\nRead Passage P3. \"Ammu had butterflies in her stomach.\" This means Ammu \u2014",
    options: [
      { id: "a", text: "was very hungry" },
      { id: "b", text: "had eaten something bad" },
      { id: "c", text: "felt nervous" },
      { id: "d", text: "loved butterflies" }
    ],
    answerId: "c",
    explanation: "This idiom describes the fluttery feeling of being nervous. The clues are her practising all week and her shaking knees.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q09",
    prompt: "Ammu had butterflies in her stomach. Her teacher, Mr. D'Souza, had asked for a volunteer to welcome the guests at the school's Annual Day, and Ammu's hand had shot up before she could stop it. For a whole week, she practised in front of the mirror. Her little brother, Kiran, was her audience. He clapped loudly even when she stumbled over a word. On the big day, the hall was as busy as a beehive. Ammu walked to the microphone, took a deep breath and spoke clearly. \"Good evening, everyone, and welcome!\" When she finished, the applause was louder than the monsoon rain. Her knees were still shaking, but her heart felt as light as a feather.\n\nRead Passage P3. The teacher asked for a \"volunteer.\" A volunteer is \u2014",
    options: [
      { id: "a", text: "a person who is paid to do a job" },
      { id: "b", text: "a person who watches a show" },
      { id: "c", text: "a person who teaches a class" },
      { id: "d", text: "a person who offers to do something willingly" }
    ],
    answerId: "d",
    explanation: "Ammu's hand \"shot up\" on its own. She chose to do the task, and that is exactly what a volunteer does.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q10",
    prompt: "Ammu had butterflies in her stomach. Her teacher, Mr. D'Souza, had asked for a volunteer to welcome the guests at the school's Annual Day, and Ammu's hand had shot up before she could stop it. For a whole week, she practised in front of the mirror. Her little brother, Kiran, was her audience. He clapped loudly even when she stumbled over a word. On the big day, the hall was as busy as a beehive. Ammu walked to the microphone, took a deep breath and spoke clearly. \"Good evening, everyone, and welcome!\" When she finished, the applause was louder than the monsoon rain. Her knees were still shaking, but her heart felt as light as a feather.\n\nRead Passage P3. \"The hall was as busy as a beehive.\" This tells us the hall was \u2014",
    options: [
      { id: "a", text: "crowded and full of activity" },
      { id: "b", text: "full of real bees" },
      { id: "c", text: "very quiet and empty" },
      { id: "d", text: "sweet-smelling" }
    ],
    answerId: "a",
    explanation: "A beehive is crowded with bees moving about. The simile shows the hall was full of people bustling around.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q11",
    prompt: "Choose the word closest in meaning to \"enormous.\"",
    options: [
      { id: "a", text: "tiny" },
      { id: "b", text: "narrow" },
      { id: "c", text: "huge" },
      { id: "d", text: "quiet" }
    ],
    answerId: "c",
    explanation: "\"Enormous\" means very big, so its synonym is \"huge.\" \"Tiny\" is its opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q12",
    prompt: "Choose the word OPPOSITE in meaning to \"generous.\"",
    options: [
      { id: "a", text: "kind" },
      { id: "b", text: "selfish" },
      { id: "c", text: "rich" },
      { id: "d", text: "helpful" }
    ],
    answerId: "b",
    explanation: "A generous person shares freely, and a selfish person keeps things for themselves. Being rich doesn't make anyone generous or selfish.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q13",
    prompt: "Which word correctly means the opposite of \"appear\"?",
    options: [
      { id: "a", text: "disappear" },
      { id: "b", text: "unappear" },
      { id: "c", text: "misappear" },
      { id: "d", text: "inappear" }
    ],
    answerId: "a",
    explanation: "The prefix \"dis-\" means \"not\" or \"the opposite of.\" It is the one used with \"appear,\" as in dislike and disagree.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q14",
    prompt: "Which word means \"a person who paints\"?",
    options: [
      { id: "a", text: "painted" },
      { id: "b", text: "painting" },
      { id: "c", text: "painter" },
      { id: "d", text: "paintful" }
    ],
    answerId: "c",
    explanation: "The suffix \"-er\" can mean \"a person who does something,\" as in teacher, singer and painter.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q15",
    prompt: "Choose the correct word.\n\"The baker needs a bag of ___ to make bread.\"",
    options: [
      { id: "a", text: "flower" },
      { id: "b", text: "flowr" },
      { id: "c", text: "floor" },
      { id: "d", text: "flour" }
    ],
    answerId: "d",
    explanation: "\"Flour\" (powder for baking) and \"flower\" (part of a plant) are homophones. Only flour makes bread.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q16",
    prompt: "Choose the correct word.\n\"We could ___ the school bell from the playground.\"",
    options: [
      { id: "a", text: "here" },
      { id: "b", text: "hear" },
      { id: "c", text: "hair" },
      { id: "d", text: "heir" }
    ],
    answerId: "b",
    explanation: "\"Hear\" is what you do with your ears; \"here\" means \"in this place.\" Remember: you hear with your EAR.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q17",
    prompt: "\"The maths test was a piece of cake for Joseph.\" What does \"a piece of cake\" mean here?",
    options: [
      { id: "a", text: "A sweet dessert" },
      { id: "b", text: "A small portion" },
      { id: "c", text: "Something very easy" },
      { id: "d", text: "Something expensive" }
    ],
    answerId: "c",
    explanation: "This idiom means a task is very easy. Nobody is eating cake during a test!",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q18",
    prompt: "Complete the simile: \"as brave as a ___\"",
    options: [
      { id: "a", text: "mouse" },
      { id: "b", text: "lion" },
      { id: "c", text: "snail" },
      { id: "d", text: "feather" }
    ],
    answerId: "b",
    explanation: "Similes compare something with a thing famous for that quality. Lions are known for courage, so \"as brave as a lion.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q19",
    prompt: "Choose ONE word for: \"a place where books are kept for people to read or borrow.\"",
    options: [
      { id: "a", text: "library" },
      { id: "b", text: "bakery" },
      { id: "c", text: "laboratory" },
      { id: "d", text: "museum" }
    ],
    answerId: "a",
    explanation: "A library keeps books to read and borrow. A laboratory is for experiments, and a museum displays objects.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q20",
    prompt: "Which sentence uses commas correctly?",
    options: [
      { id: "a", text: "I bought apples bananas, and, grapes." },
      { id: "b", text: "I bought, apples bananas and grapes." },
      { id: "c", text: "I, bought apples, bananas and grapes." },
      { id: "d", text: "I bought apples, bananas and grapes." }
    ],
    answerId: "d",
    explanation: "In a list, a comma separates the items, and \"and\" joins the last two. No comma comes between the verb and the list.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q21",
    prompt: "Rearrange the parts to make a correct sentence.\nP: to the park  Q: every evening  R: walks  S: Our dog Bruno",
    options: [
      { id: "a", text: "P S R Q" },
      { id: "b", text: "Q P S R" },
      { id: "c", text: "R S Q P" },
      { id: "d", text: "S R P Q" }
    ],
    answerId: "d",
    explanation: "Start with who (Our dog Bruno), then the action (walks), then where (to the park), then when (every evening).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q22",
    prompt: "You accidentally bump into a classmate in the corridor. What is the best thing to say?",
    options: [
      { id: "a", text: "\"Move out of the way!\"" },
      { id: "b", text: "\"Watch where you are walking.\"" },
      { id: "c", text: "\"Sorry, I didn't see you. Are you okay?\"" },
      { id: "d", text: "Say nothing and keep walking." }
    ],
    answerId: "c",
    explanation: "When we make a mistake, a good reply says sorry and shows we care. It doesn't blame the other person.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q23",
    prompt: "**MESSAGE**\n5 October, 4:15 p.m.\nDear Didi,\nMs. Kapoor from your dance class called. Tomorrow's practice has been moved from 5 p.m. to 6 p.m. Please bring your ghungroo and a water bottle.\nRiya\n\nRead Message N1. Why did Riya write this message?",
    options: [
      { id: "a", text: "To invite Didi to a party" },
      { id: "b", text: "To pass on a change in the practice time" },
      { id: "c", text: "To complain about the dance class" },
      { id: "d", text: "To ask Didi for a water bottle" }
    ],
    answerId: "b",
    explanation: "A message passes on important information to someone who missed a call. Here, the practice time has changed.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-a-q24",
    prompt: "Two puppies share their toys. Which phrase uses the apostrophe correctly?",
    options: [
      { id: "a", text: "the puppies' toys" },
      { id: "b", text: "the puppy's toys" },
      { id: "c", text: "the puppies's toys" },
      { id: "d", text: "the puppie's toys" }
    ],
    answerId: "a",
    explanation: "For a plural noun ending in -s, add only an apostrophe after the s: puppies'. \"Puppy's\" would mean one puppy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-eng-ch03-b-q01",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. \"The puddles are mirrors.\" This line suggests that the puddles \u2014",
    options: [
      { id: "a", text: "reflect things the way a mirror does" },
      { id: "b", text: "are made of glass" },
      { id: "c", text: "are broken into pieces" },
      { id: "d", text: "are muddy and dark" }
    ],
    answerId: "a",
    explanation: "The poet compares puddles to mirrors because still water shows reflections, such as the sky or trees.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q02",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. \"He thunders and rumbles.\" Which phrase is closest in meaning to \"rumbles\"?",
    options: [
      { id: "a", text: "whispers softly" },
      { id: "b", text: "shines brightly" },
      { id: "c", text: "makes a deep, rolling sound" },
      { id: "d", text: "falls asleep" }
    ],
    answerId: "c",
    explanation: "\"Rumbles\" sits next to \"thunders,\" which is the clue. Both describe low, heavy sounds from a stormy sky.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q03",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. Why are inverted commas (\" \") used in: Amma calls, \"Children! Come in, you'll be wet!\"?",
    options: [
      { id: "a", text: "To show a question" },
      { id: "b", text: "To show the exact words Amma speaks" },
      { id: "c", text: "To show the title of the poem" },
      { id: "d", text: "To separate items in a list" }
    ],
    answerId: "b",
    explanation: "Inverted commas, or quotation marks, go around the exact words a person says aloud.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q04",
    prompt: "The sky is a drummer who practises at noon,\nHe thunders and rumbles, then hums a soft tune.\nThe peacock unfolds like a fan made of light,\nThe frogs in the ditches sing all through the night.\n\nThe puddles are mirrors, the lanes are a stream,\nPaper boats sail like the ships in a dream.\nAmma calls, \"Children! Come in, you'll be wet!\"\nBut who wants to leave when the show isn't done yet?\n\nBy morning the drummer has packed up his sound,\nAnd quietly, gently, green covers the ground.\n\nRead Passage P1. \"But who wants to leave when the show isn't done yet?\" What is \"the show\"?",
    options: [
      { id: "a", text: "A programme on television" },
      { id: "b", text: "A dance performance at school" },
      { id: "c", text: "A magic show in the lane" },
      { id: "d", text: "The rain, thunder and nature all around them" }
    ],
    answerId: "d",
    explanation: "The whole poem describes the storm, the peacock, the frogs and paper boats. The poet calls this outdoor scene a \"show.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q05",
    prompt: "**Shopkeeper:** Good morning! How may I help you?\n**Ishaan:** Good morning, uncle. I need a geometry box and two notebooks, please.\n**Shopkeeper:** Ruled or unruled?\n**Ishaan:** Ruled, please. They're for my science project.\n**Shopkeeper:** Here you are. That will be one hundred and twenty rupees.\n**Ishaan:** Oh no, I have only one hundred rupees. Could I take just one notebook today?\n**Shopkeeper:** Of course. You can buy the other one tomorrow.\n**Ishaan:** Thank you so much, uncle. You're very kind.\n**Shopkeeper:** Not at all. Best of luck with your project!\n\nRead Passage P2. How does the shopkeeper respond to Ishaan's problem?",
    options: [
      { id: "a", text: "He gets angry." },
      { id: "b", text: "He refuses to sell anything." },
      { id: "c", text: "He kindly suggests a solution." },
      { id: "d", text: "He asks Ishaan to leave." }
    ],
    answerId: "c",
    explanation: "\"Of course. You can buy the other one tomorrow.\" He agrees warmly and offers a way to solve the problem.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q06",
    prompt: "**Shopkeeper:** Good morning! How may I help you?\n**Ishaan:** Good morning, uncle. I need a geometry box and two notebooks, please.\n**Shopkeeper:** Ruled or unruled?\n**Ishaan:** Ruled, please. They're for my science project.\n**Shopkeeper:** Here you are. That will be one hundred and twenty rupees.\n**Ishaan:** Oh no, I have only one hundred rupees. Could I take just one notebook today?\n**Shopkeeper:** Of course. You can buy the other one tomorrow.\n**Ishaan:** Thank you so much, uncle. You're very kind.\n**Shopkeeper:** Not at all. Best of luck with your project!\n\nRead Passage P2. The shopkeeper asks, \"Ruled or unruled?\" In \"unruled,\" the prefix \"un-\" means \u2014",
    options: [
      { id: "a", text: "not" },
      { id: "b", text: "again" },
      { id: "c", text: "before" },
      { id: "d", text: "wrongly" }
    ],
    answerId: "a",
    explanation: "\"Un-\" means \"not,\" so unruled pages have no lines. \"Re-\" means again, \"pre-\" means before, and \"mis-\" means wrongly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q07",
    prompt: "**Shopkeeper:** Good morning! How may I help you?\n**Ishaan:** Good morning, uncle. I need a geometry box and two notebooks, please.\n**Shopkeeper:** Ruled or unruled?\n**Ishaan:** Ruled, please. They're for my science project.\n**Shopkeeper:** Here you are. That will be one hundred and twenty rupees.\n**Ishaan:** Oh no, I have only one hundred rupees. Could I take just one notebook today?\n**Shopkeeper:** Of course. You can buy the other one tomorrow.\n**Ishaan:** Thank you so much, uncle. You're very kind.\n**Shopkeeper:** Not at all. Best of luck with your project!\n\nRead Passage P2. The shopkeeper says, \"Best of luck with your project!\" What is the best reply?",
    options: [
      { id: "a", text: "\"Okay.\"" },
      { id: "b", text: "\"Why?\"" },
      { id: "c", text: "\"I don't need luck.\"" },
      { id: "d", text: "\"Thank you, uncle! Have a nice day.\"" }
    ],
    answerId: "d",
    explanation: "When someone wishes you well, thank them and return the good wishes. It keeps the conversation friendly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q08",
    prompt: "Ammu had butterflies in her stomach. Her teacher, Mr. D'Souza, had asked for a volunteer to welcome the guests at the school's Annual Day, and Ammu's hand had shot up before she could stop it. For a whole week, she practised in front of the mirror. Her little brother, Kiran, was her audience. He clapped loudly even when she stumbled over a word. On the big day, the hall was as busy as a beehive. Ammu walked to the microphone, took a deep breath and spoke clearly. \"Good evening, everyone, and welcome!\" When she finished, the applause was louder than the monsoon rain. Her knees were still shaking, but her heart felt as light as a feather.\n\nRead Passage P3. \"The applause was louder than the monsoon rain.\" \"Applause\" means \u2014",
    options: [
      { id: "a", text: "loud singing" },
      { id: "b", text: "clapping to show praise" },
      { id: "c", text: "heavy rainfall" },
      { id: "d", text: "a crack of thunder" }
    ],
    answerId: "b",
    explanation: "Applause is clapping that shows people enjoyed something. The rain is only being compared with the sound of the clapping.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q09",
    prompt: "Ammu had butterflies in her stomach. Her teacher, Mr. D'Souza, had asked for a volunteer to welcome the guests at the school's Annual Day, and Ammu's hand had shot up before she could stop it. For a whole week, she practised in front of the mirror. Her little brother, Kiran, was her audience. He clapped loudly even when she stumbled over a word. On the big day, the hall was as busy as a beehive. Ammu walked to the microphone, took a deep breath and spoke clearly. \"Good evening, everyone, and welcome!\" When she finished, the applause was louder than the monsoon rain. Her knees were still shaking, but her heart felt as light as a feather.\n\nRead Passage P3. \"Her heart felt as light as a feather.\" This shows that Ammu felt \u2014",
    options: [
      { id: "a", text: "unwell and weak" },
      { id: "b", text: "relieved and happy" },
      { id: "c", text: "much thinner than before" },
      { id: "d", text: "as if she could fly" }
    ],
    answerId: "b",
    explanation: "A light heart means worry has gone away. Her speech was over and it went well, so she felt relieved and happy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q10",
    prompt: "Ammu had butterflies in her stomach. Her teacher, Mr. D'Souza, had asked for a volunteer to welcome the guests at the school's Annual Day, and Ammu's hand had shot up before she could stop it. For a whole week, she practised in front of the mirror. Her little brother, Kiran, was her audience. He clapped loudly even when she stumbled over a word. On the big day, the hall was as busy as a beehive. Ammu walked to the microphone, took a deep breath and spoke clearly. \"Good evening, everyone, and welcome!\" When she finished, the applause was louder than the monsoon rain. Her knees were still shaking, but her heart felt as light as a feather.\n\nRead Passage P3. \"Kiran was her audience.\" An audience is \u2014",
    options: [
      { id: "a", text: "people who perform on stage" },
      { id: "b", text: "a person who writes plays" },
      { id: "c", text: "people who sell tickets" },
      { id: "d", text: "people who watch or listen to a performance" }
    ],
    answerId: "d",
    explanation: "Kiran watched Ammu practise and clapped. Those who watch or listen to a performance are its audience.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q11",
    prompt: "**MESSAGE**\n5 October, 4:15 p.m.\nDear Didi,\nMs. Kapoor from your dance class called. Tomorrow's practice has been moved from 5 p.m. to 6 p.m. Please bring your ghungroo and a water bottle.\nRiya\n\nRead Message N1. What does the name \"Riya\" at the end of the message tell us?",
    options: [
      { id: "a", text: "Who wrote the message" },
      { id: "b", text: "Who the message is for" },
      { id: "c", text: "Who made the phone call" },
      { id: "d", text: "The name of the dance teacher" }
    ],
    answerId: "a",
    explanation: "In a message, the writer's name goes at the end. The person it is for, Didi, is named at the start after \"Dear.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q12",
    prompt: "**MESSAGE**\n5 October, 4:15 p.m.\nDear Didi,\nMs. Kapoor from your dance class called. Tomorrow's practice has been moved from 5 p.m. to 6 p.m. Please bring your ghungroo and a water bottle.\nRiya\n\nRead Message N1. What time should Didi reach dance practice tomorrow?",
    options: [
      { id: "a", text: "4:15 p.m." },
      { id: "b", text: "5 p.m." },
      { id: "c", text: "6 p.m." },
      { id: "d", text: "5:15 p.m." }
    ],
    answerId: "c",
    explanation: "4:15 p.m. is when the message was written and 5 p.m. was the old time. Practice has moved to 6 p.m.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q13",
    prompt: "Choose the word closest in meaning to \"rapid.\"",
    options: [
      { id: "a", text: "slow" },
      { id: "b", text: "heavy" },
      { id: "c", text: "calm" },
      { id: "d", text: "fast" }
    ],
    answerId: "d",
    explanation: "\"Rapid\" means very quick, as in a rapid train, so its synonym is \"fast.\" \"Slow\" is the opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q14",
    prompt: "Choose the word OPPOSITE in meaning to \"arrive.\"",
    options: [
      { id: "a", text: "reach" },
      { id: "b", text: "depart" },
      { id: "c", text: "enter" },
      { id: "d", text: "return" }
    ],
    answerId: "b",
    explanation: "To arrive is to come to a place, and to depart is to leave it. Railway stations show both \"Arrivals\" and \"Departures.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q15",
    prompt: "Add a suffix to \"hope\" to make a word meaning \"full of hope.\" Which spelling is correct?",
    options: [
      { id: "a", text: "hopefull" },
      { id: "b", text: "hopeing" },
      { id: "c", text: "hopeful" },
      { id: "d", text: "hopely" }
    ],
    answerId: "c",
    explanation: "The suffix \"-ful\" has only one l: hopeful, careful, playful. \"Full\" with two l's is a separate word.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q16",
    prompt: "What does \"rewrite\" mean?",
    options: [
      { id: "a", text: "To write again" },
      { id: "b", text: "To write wrongly" },
      { id: "c", text: "To not write" },
      { id: "d", text: "To write before" }
    ],
    answerId: "a",
    explanation: "The prefix \"re-\" means \"again,\" as in reread, refill and rebuild.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q17",
    prompt: "Choose the correct word.\n\"Our class went on a trip to ___ the old fort.\"",
    options: [
      { id: "a", text: "see" },
      { id: "b", text: "sea" },
      { id: "c", text: "she" },
      { id: "d", text: "seat" }
    ],
    answerId: "a",
    explanation: "\"See\" means to look at; \"sea\" is a large body of salt water. They sound alike but have different meanings.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q18",
    prompt: "Which sentence uses the homophones correctly?",
    options: [
      { id: "a", text: "Their going too the market." },
      { id: "b", text: "There going to the market." },
      { id: "c", text: "They're going too the market." },
      { id: "d", text: "They're going to the market too." }
    ],
    answerId: "d",
    explanation: "They're = they are. \"To\" shows direction (to the market). \"Too\" means also. Only D uses each word correctly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q19",
    prompt: "\"When Grandpa started his story, we were all ears.\" \"To be all ears\" means \u2014",
    options: [
      { id: "a", text: "to have very big ears" },
      { id: "b", text: "to listen very carefully" },
      { id: "c", text: "to hear nothing at all" },
      { id: "d", text: "to talk a lot" }
    ],
    answerId: "b",
    explanation: "This idiom means giving someone your full attention. It doesn't mean anyone grew bigger ears!",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q20",
    prompt: "Choose ONE word for: \"a person who travels to see new places for pleasure.\"",
    options: [
      { id: "a", text: "pilot" },
      { id: "b", text: "guard" },
      { id: "c", text: "tourist" },
      { id: "d", text: "tailor" }
    ],
    answerId: "c",
    explanation: "A tourist visits places for enjoyment. A pilot flies planes, a guard protects places, and a tailor stitches clothes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q21",
    prompt: "Which sentence is punctuated correctly?",
    options: [
      { id: "a", text: "Ramu's sister said, \"come home early.\"" },
      { id: "b", text: "Ramus sister said, \"Come home early.\"" },
      { id: "c", text: "Ramu's sister said, \"Come home early.\"" },
      { id: "d", text: "Ramu's sister said \"come home early\"" }
    ],
    answerId: "c",
    explanation: "You need an apostrophe for belonging (Ramu's) and a comma before the speech. The spoken words begin with a capital, and the full stop goes inside the inverted commas.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q22",
    prompt: "Nani calls you while you are finishing your homework. What is the most polite reply?",
    options: [
      { id: "a", text: "\"Coming, Nani! I'll be there in a minute.\"" },
      { id: "b", text: "\"Not now!\"" },
      { id: "c", text: "\"Why do you always call me?\"" },
      { id: "d", text: "Pretend you didn't hear." }
    ],
    answerId: "a",
    explanation: "A polite reply answers warmly and lets the person know when you will come. It shows respect even when you are busy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q23",
    prompt: "Rearrange the parts to make a correct sentence.\nP: a letter  Q: to her pen pal  R: wrote  S: Anjali",
    options: [
      { id: "a", text: "P R S Q" },
      { id: "b", text: "Q S R P" },
      { id: "c", text: "R P Q S" },
      { id: "d", text: "S R P Q" }
    ],
    answerId: "d",
    explanation: "The order is who (Anjali), action (wrote), what (a letter), then to whom (to her pen pal): \"Anjali wrote a letter to her pen pal.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch03-b-q24",
    prompt: "Rearrange the parts to make a correct sentence.\nP: When the bell rang,  Q: out of the classroom  R: the children  S: ran happily",
    options: [
      { id: "a", text: "Q R S P" },
      { id: "b", text: "P R S Q" },
      { id: "c", text: "S Q P R" },
      { id: "d", text: "R P Q S" }
    ],
    answerId: "b",
    explanation: "\"When the bell rang, the children ran happily out of the classroom.\" A time phrase can open the sentence, followed by who, the action and where.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u270d\ufe0f",
    title: "Words at work",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "word-cards",
    speak: "Synonyms are meaning twins. Antonyms are opposites. Homophones sound alike but differ in meaning.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "word-cards",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Synonyms", reveal: "Nearly the same meaning", emoji: "\ud83d\ude0a" },
      { label: "Antonyms", reveal: "Opposites", emoji: "\ud83d\udd04" },
      { label: "Homophones", reveal: "Same sound, different meaning", emoji: "\ud83d\udc42" },
      { label: "Idioms and similes", reveal: "Paint pictures with words", emoji: "\ud83c\udfa8" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Best synonym of \"happy\"?",
    options: [
        { id: "a", text: "joyful" },
        { id: "b", text: "angry" },
        { id: "c", text: "tiny" },
        { id: "d", text: "slow" }
    ],
    answerId: "a",
    why: "Joyful means nearly the same as happy.",
    visual: "word-cards",
    speak: "Best synonym of \"happy\"?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Pick the right word", "Context decides meaning", "Punctuate cleanly", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5EnglishWords: ChapterDef = {
  id: "words-at-work",
  title: "Words at Work",
  emoji: "\u270d\ufe0f",
  blurb: "Say it right, write it bright",
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
  paperTopics: ["vocabulary", "idioms-lite", "grammar"],
};

export const g5EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
