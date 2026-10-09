import type { ChapterDef, PrepQuestion } from "../types";

/** Reading - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-eng-reading-a-q01",
    prompt: "Read: \"Tina waters the plants every morning.\" When does Tina water them?",
    options: [
      { id: "a", text: "at night" },
      { id: "b", text: "every morning" },
      { id: "c", text: "only on Sunday" },
      { id: "d", text: "never" }
    ],
    answerId: "b",
    explanation: "The sentence says every morning.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q02",
    prompt: "Read: \"The little puppy hid under the table.\" Where did the puppy hide?",
    options: [
      { id: "a", text: "on the roof" },
      { id: "b", text: "under the table" },
      { id: "c", text: "in the sky" },
      { id: "d", text: "in a cup" }
    ],
    answerId: "b",
    explanation: "Under the table \u2014 from the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q03",
    prompt: "Read: \"Rohan shared his lunch with Meena.\" What did Rohan do?",
    options: [
      { id: "a", text: "hid his lunch" },
      { id: "b", text: "shared his lunch" },
      { id: "c", text: "threw his lunch" },
      { id: "d", text: "sold his lunch" }
    ],
    answerId: "b",
    explanation: "He shared his lunch with Meena.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q04",
    prompt: "Why do we wear a raincoat?",
    options: [
      { id: "a", text: "to stay dry in rain" },
      { id: "b", text: "to fly" },
      { id: "c", text: "to sleep underwater" },
      { id: "d", text: "to cook" }
    ],
    answerId: "a",
    explanation: "A raincoat keeps us dry in the rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q05",
    prompt: "Read: \"Grandma tells stories at bedtime.\" When does Grandma tell stories?",
    options: [
      { id: "a", text: "at bedtime" },
      { id: "b", text: "at noon only" },
      { id: "c", text: "in maths class only" },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "At bedtime \u2014 from the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q06",
    prompt: "Read: \"The bus was late, so Kabir ran.\" Why did Kabir run?",
    options: [
      { id: "a", text: "the bus was late" },
      { id: "b", text: "he was sleepy" },
      { id: "c", text: "it was a holiday" },
      { id: "d", text: "he lost a shoe for fun" }
    ],
    answerId: "a",
    explanation: "Because the bus was late.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q07",
    prompt: "Which sentence shows kindness?",
    options: [
      { id: "a", text: "She helped her friend." },
      { id: "b", text: "She broke the toy." },
      { id: "c", text: "She shouted angrily." },
      { id: "d", text: "She hid the book forever." }
    ],
    answerId: "a",
    explanation: "Helping a friend is kind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q08",
    prompt: "Read: \"Ants work together to carry food.\" What do ants do?",
    options: [
      { id: "a", text: "sleep all day only" },
      { id: "b", text: "work together" },
      { id: "c", text: "drive cars" },
      { id: "d", text: "read novels" }
    ],
    answerId: "b",
    explanation: "They work together to carry food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q09",
    prompt: "What is the main idea: 'Bo planted seeds. He watered them. Green shoots came up.'?",
    options: [
      { id: "a", text: "Bo grew plants" },
      { id: "b", text: "Bo flew a plane" },
      { id: "c", text: "Bo baked a cake" },
      { id: "d", text: "Bo swam" }
    ],
    answerId: "a",
    explanation: "The lines are about growing plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q10",
    prompt: "Read: \"Do not touch the hot pan.\" What should you do?",
    options: [
      { id: "a", text: "touch the pan" },
      { id: "b", text: "not touch the hot pan" },
      { id: "c", text: "lick the pan" },
      { id: "d", text: "throw the pan" }
    ],
    answerId: "b",
    explanation: "Do not touch \u2014 stay safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q11",
    prompt: "Read: \"Leela felt proud after her race.\" How did Leela feel?",
    options: [
      { id: "a", text: "sad" },
      { id: "b", text: "proud" },
      { id: "c", text: "sleepy only" },
      { id: "d", text: "angry" }
    ],
    answerId: "b",
    explanation: "Proud \u2014 from the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q12",
    prompt: "A library is a place to\u2026",
    options: [
      { id: "a", text: "borrow books" },
      { id: "b", text: "swim with sharks" },
      { id: "c", text: "park aeroplanes" },
      { id: "d", text: "bake only" }
    ],
    answerId: "a",
    explanation: "Libraries are for books.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q13",
    prompt: "Read: \"First wash hands. Next eat. Then play.\" What comes first?",
    options: [
      { id: "a", text: "play" },
      { id: "b", text: "eat" },
      { id: "c", text: "wash hands" },
      { id: "d", text: "sleep" }
    ],
    answerId: "c",
    explanation: "First means wash hands comes first.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q14",
    prompt: "Read: \"The moon looks bright tonight.\" What looks bright?",
    options: [
      { id: "a", text: "the sun" },
      { id: "b", text: "the moon" },
      { id: "c", text: "a shoe" },
      { id: "d", text: "a spoon" }
    ],
    answerId: "b",
    explanation: "The moon looks bright.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q15",
    prompt: "Which title fits a story about a lost kitten found at home?",
    options: [
      { id: "a", text: "The Kitten Comes Home" },
      { id: "b", text: "Space Rockets" },
      { id: "c", text: "Deep Sea Sharks" },
      { id: "d", text: "Maths Only" }
    ],
    answerId: "a",
    explanation: "The title matches the kitten story.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q16",
    prompt: "Read: \"Aarav closed the tap to save water.\" Why did Aarav close the tap?",
    options: [
      { id: "a", text: "to save water" },
      { id: "b", text: "to waste water" },
      { id: "c", text: "to make noise" },
      { id: "d", text: "to cook rice" }
    ],
    answerId: "a",
    explanation: "To save water \u2014 from the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-eng-reading-b-q01",
    prompt: "Read: \"Sara feeds the sparrows on the balcony.\" Whom does Sara feed?",
    options: [
      { id: "a", text: "cats only" },
      { id: "b", text: "sparrows" },
      { id: "c", text: "fish in the sea" },
      { id: "d", text: "cows" }
    ],
    answerId: "b",
    explanation: "She feeds the sparrows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q02",
    prompt: "Read: \"The ball rolled behind the sofa.\" Where is the ball?",
    options: [
      { id: "a", text: "behind the sofa" },
      { id: "b", text: "on the moon" },
      { id: "c", text: "in the fridge" },
      { id: "d", text: "under the sea" }
    ],
    answerId: "a",
    explanation: "Behind the sofa \u2014 place words.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q03",
    prompt: "Read: \"Neha thanked the shopkeeper.\" What did Neha do?",
    options: [
      { id: "a", text: "thanked him" },
      { id: "b", text: "ignored him" },
      { id: "c", text: "ran without paying" },
      { id: "d", text: "hid" }
    ],
    answerId: "a",
    explanation: "She thanked the shopkeeper.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q04",
    prompt: "Why do we use an umbrella?",
    options: [
      { id: "a", text: "to keep rain off" },
      { id: "b", text: "to dig soil" },
      { id: "c", text: "to write sums" },
      { id: "d", text: "to sleep" }
    ],
    answerId: "a",
    explanation: "Umbrellas keep rain off us.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q05",
    prompt: "Read: \"Papa reads the newspaper after breakfast.\" When does Papa read?",
    options: [
      { id: "a", text: "after breakfast" },
      { id: "b", text: "before dawn only" },
      { id: "c", text: "at midnight only" },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "After breakfast \u2014 time clue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q06",
    prompt: "Read: \"It started to rain, so we went inside.\" Why did they go inside?",
    options: [
      { id: "a", text: "it started to rain" },
      { id: "b", text: "they were hungry only" },
      { id: "c", text: "the TV called" },
      { id: "d", text: "shoes were new" }
    ],
    answerId: "a",
    explanation: "Because it started to rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q07",
    prompt: "Which sentence shows sharing?",
    options: [
      { id: "a", text: "He gave half his snack to his sister." },
      { id: "b", text: "He hid all the snacks." },
      { id: "c", text: "He threw snacks away." },
      { id: "d", text: "He sat alone angrily." }
    ],
    answerId: "a",
    explanation: "Giving half is sharing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q08",
    prompt: "Read: \"Bees fly from flower to flower.\" What do bees do?",
    options: [
      { id: "a", text: "fly to flowers" },
      { id: "b", text: "drive buses" },
      { id: "c", text: "read books" },
      { id: "d", text: "swim in ice" }
    ],
    answerId: "a",
    explanation: "They fly from flower to flower.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q09",
    prompt: "Main idea: 'Mina sorted waste. She put plastic in one bin. She put paper in another.'?",
    options: [
      { id: "a", text: "Mina sorted waste" },
      { id: "b", text: "Mina cooked dinner" },
      { id: "c", text: "Mina flew kites" },
      { id: "d", text: "Mina slept" }
    ],
    answerId: "a",
    explanation: "All lines are about sorting waste.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q10",
    prompt: "Read: \"Look both ways before you cross.\" What should you do?",
    options: [
      { id: "a", text: "look both ways" },
      { id: "b", text: "run with eyes closed" },
      { id: "c", text: "sit on the road" },
      { id: "d", text: "ignore cars" }
    ],
    answerId: "a",
    explanation: "Look both ways \u2014 safety rule.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q11",
    prompt: "Read: \"Kabir felt brave on stage.\" How did Kabir feel?",
    options: [
      { id: "a", text: "brave" },
      { id: "b", text: "sleepy only" },
      { id: "c", text: "lost forever" },
      { id: "d", text: "angry at shoes" }
    ],
    answerId: "a",
    explanation: "Brave \u2014 feeling word.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q12",
    prompt: "A post office is a place to\u2026",
    options: [
      { id: "a", text: "send letters" },
      { id: "b", text: "swim" },
      { id: "c", text: "grow rice only" },
      { id: "d", text: "park planes" }
    ],
    answerId: "a",
    explanation: "Post offices help send letters.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q13",
    prompt: "Read: \"First pack the bag. Next wear shoes. Then leave.\" What comes last?",
    options: [
      { id: "a", text: "pack the bag" },
      { id: "b", text: "wear shoes" },
      { id: "c", text: "leave" },
      { id: "d", text: "sleep" }
    ],
    answerId: "c",
    explanation: "Then leave \u2014 last step.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q14",
    prompt: "Read: \"Stars twinkle in the night sky.\" When do stars twinkle here?",
    options: [
      { id: "a", text: "at night" },
      { id: "b", text: "only at noon" },
      { id: "c", text: "only underwater" },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "In the night sky.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q15",
    prompt: "Best title for a story about saving a street puppy?",
    options: [
      { id: "a", text: "A Puppy Needs Help" },
      { id: "b", text: "Rocket Science" },
      { id: "c", text: "Deep Ocean" },
      { id: "d", text: "Silent Stones" }
    ],
    answerId: "a",
    explanation: "Title matches the puppy story.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q16",
    prompt: "Read: \"Meera switched off lights to save power.\" Why switch off?",
    options: [
      { id: "a", text: "to save power" },
      { id: "b", text: "to waste power" },
      { id: "c", text: "to break bulbs" },
      { id: "d", text: "to hide" }
    ],
    answerId: "a",
    explanation: "To save power \u2014 reason given.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcd6",
    title: "Reading",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Answers hide in the lines.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Read", reveal: "Look at every word", emoji: "\ud83d\udc40" },
      { label: "Find", reveal: "Hunt the clue", emoji: "\ud83d\udd0e" },
      { label: "Decide", reveal: "Pick what the text says", emoji: "\u2705" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Read: \"Bo ran home.\" What did Bo do?",
    options: [
        { id: "a", text: "slept" },
        { id: "b", text: "ran home" },
        { id: "c", text: "flew" },
        { id: "d", text: "hid" }
    ],
    answerId: "b",
    why: "Bo ran home.",
    visual: "sentence",
    speak: "Read: \"Bo ran home.\" What did Bo do?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Clue in the text", "No wild guesses", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2EnglishReading: ChapterDef = {
  id: "reading",
  title: "Reading",
  emoji: "\ud83d\udcd6",
  blurb: "Short passages & clues",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "comprehension",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "comprehension",
      questions: SET_B,
    },
  ],
  paperTopics: ["comprehension", "vocabulary"],
};

export const g2EnglishReadingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
