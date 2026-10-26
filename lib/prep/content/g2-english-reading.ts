import type { ChapterDef, PrepQuestion } from "../types";

/** Reading - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-eng-reading-a-q01",
    prompt: "Read: \"Tina waters the plants every morning.\" When does Tina water them?",
    options: [
      { id: "a", text: "every morning" },
      { id: "b", text: "at night" },
      { id: "c", text: "on Sunday" },
      { id: "d", text: "every evening" }
    ],
    answerId: "a",
    explanation: "The sentence says Tina waters the plants every morning. 'Every evening' is tempting because it also means every day, but the sentence says morning, not evening.",
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
    explanation: "The sentence says the puppy hid under the table. 'On the roof' is tempting because it is also a place in a house, but the sentence says under the table.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q03",
    prompt: "Read: \"Rohan shared his lunch with Meena.\" What did Rohan do?",
    options: [
      { id: "a", text: "hid his lunch" },
      { id: "b", text: "threw his lunch" },
      { id: "c", text: "shared his lunch" },
      { id: "d", text: "sold his lunch" }
    ],
    answerId: "c",
    explanation: "The sentence says Rohan shared his lunch with Meena. 'Sold his lunch' is tempting because Meena got the lunch, but sharing means giving some for free.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q04",
    prompt: "Why do we wear a raincoat?",
    options: [
      { id: "a", text: "to stay cool in summer" },
      { id: "b", text: "to go swimming" },
      { id: "c", text: "to keep the sun away" },
      { id: "d", text: "to stay dry in rain" }
    ],
    answerId: "d",
    explanation: "We wear a raincoat to stay dry in the rain. 'To keep the sun away' is tempting because a raincoat covers us, but for the sun we use a cap or umbrella.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q05",
    prompt: "Read: \"Grandma tells stories at bedtime.\" When does Grandma tell stories?",
    options: [
      { id: "a", text: "at bedtime" },
      { id: "b", text: "at lunchtime" },
      { id: "c", text: "in the morning" },
      { id: "d", text: "after school" }
    ],
    answerId: "a",
    explanation: "The sentence says Grandma tells stories at bedtime. 'In the morning' is tempting because stories can be told any time, but the sentence names bedtime.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q06",
    prompt: "Read: \"The bus was late, so Kabir ran.\" Why did Kabir run?",
    options: [
      { id: "a", text: "he was sleepy" },
      { id: "b", text: "the bus was late" },
      { id: "c", text: "it was a holiday" },
      { id: "d", text: "he lost a shoe for fun" }
    ],
    answerId: "b",
    explanation: "The word 'so' tells us why: the bus was late, so Kabir ran. 'He was sleepy' is tempting because people rush when they wake up late, but the sentence does not say he was sleepy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q07",
    prompt: "Which sentence shows kindness?",
    options: [
      { id: "a", text: "She broke the toy." },
      { id: "b", text: "She shouted angrily." },
      { id: "c", text: "She helped her friend." },
      { id: "d", text: "She hid her friend's book." }
    ],
    answerId: "c",
    explanation: "Helping a friend shows kindness. 'She hid her friend's book' is tempting because it is about a friend, but hiding a friend's things is unkind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q08",
    prompt: "Read: \"Ants work together to carry food.\" What do ants do?",
    options: [
      { id: "a", text: "sleep all day" },
      { id: "b", text: "work alone" },
      { id: "c", text: "fight over food" },
      { id: "d", text: "work together" }
    ],
    answerId: "d",
    explanation: "The sentence says ants work together to carry food. 'Work alone' is tempting because each ant is small and busy, but the sentence says together.",
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
    explanation: "Planting, watering and green shoots are all about one thing: Bo grew plants. 'Bo baked a cake' is tempting because baking also has steps, but nothing in the lines is about cooking.",
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
    explanation: "The sentence says 'Do not touch the hot pan', so we must not touch it. 'Touch the pan' is tempting because those words are in the sentence, but 'Do not' at the start means the opposite.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q11",
    prompt: "Read: \"Leela felt proud after her race.\" How did Leela feel?",
    options: [
      { id: "a", text: "sad" },
      { id: "b", text: "sleepy" },
      { id: "c", text: "proud" },
      { id: "d", text: "angry" }
    ],
    answerId: "c",
    explanation: "The sentence says Leela felt proud after her race. 'Sleepy' is tempting because a race can make you tired, but the feeling word in the sentence is proud.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q12",
    prompt: "A library is a place to\u2026",
    options: [
      { id: "a", text: "buy vegetables" },
      { id: "b", text: "watch films" },
      { id: "c", text: "play cricket" },
      { id: "d", text: "borrow books" }
    ],
    answerId: "d",
    explanation: "A library is a place to borrow books. 'Watch films' is tempting because some libraries have films, but a library is mainly for books.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q13",
    prompt: "Read: \"First wash hands. Next eat. Then play.\" What comes first?",
    options: [
      { id: "a", text: "wash hands" },
      { id: "b", text: "play" },
      { id: "c", text: "eat" },
      { id: "d", text: "sleep" }
    ],
    answerId: "a",
    explanation: "'First' tells us washing hands comes first. 'Eat' is tempting because it comes in the middle, but it is the 'next' step, not the first.",
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
    explanation: "The sentence says the moon looks bright tonight. 'The sun' is tempting because the sun is bright too, but the sentence talks about the moon at night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q15",
    prompt: "Which title fits a story about a lost kitten found at home?",
    options: [
      { id: "a", text: "A Day at the Zoo" },
      { id: "b", text: "Deep Sea Sharks" },
      { id: "c", text: "The Kitten Comes Home" },
      { id: "d", text: "The Lost Puppy" }
    ],
    answerId: "c",
    explanation: "'The Kitten Comes Home' matches a story about a lost kitten found at home. 'The Lost Puppy' is tempting because it is about a lost pet, but the story is about a kitten, not a puppy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-a-q16",
    prompt: "Read: \"Aarav closed the tap to save water.\" Why did Aarav close the tap?",
    options: [
      { id: "a", text: "to waste water" },
      { id: "b", text: "to make noise" },
      { id: "c", text: "to cook rice" },
      { id: "d", text: "to save water" }
    ],
    answerId: "d",
    explanation: "The sentence says Aarav closed the tap to save water. 'To waste water' is the opposite: closing the tap stops water from running out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-eng-reading-b-q01",
    prompt: "Read: \"Sara feeds the sparrows on the balcony.\" Whom does Sara feed?",
    options: [
      { id: "a", text: "sparrows" },
      { id: "b", text: "cats" },
      { id: "c", text: "pigeons" },
      { id: "d", text: "cows" }
    ],
    answerId: "a",
    explanation: "The sentence says Sara feeds the sparrows. 'Pigeons' is tempting because pigeons also come to balconies, but the sentence names sparrows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q02",
    prompt: "Read: \"The ball rolled behind the sofa.\" Where is the ball?",
    options: [
      { id: "a", text: "on the moon" },
      { id: "b", text: "behind the sofa" },
      { id: "c", text: "in the fridge" },
      { id: "d", text: "under the sea" }
    ],
    answerId: "b",
    explanation: "The sentence says the ball rolled behind the sofa. 'In the fridge' is tempting because a fridge is also in the house, but the place word in the sentence is 'behind the sofa'.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q03",
    prompt: "Read: \"Neha thanked the shopkeeper.\" What did Neha do?",
    options: [
      { id: "a", text: "ignored him" },
      { id: "b", text: "ran without paying" },
      { id: "c", text: "thanked him" },
      { id: "d", text: "hid" }
    ],
    answerId: "c",
    explanation: "The sentence says Neha thanked the shopkeeper. 'Ignored him' is tempting because the sentence is short, but Neha spoke to him to say thank you.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q04",
    prompt: "Why do we use an umbrella?",
    options: [
      { id: "a", text: "to dig soil" },
      { id: "b", text: "to write sums" },
      { id: "c", text: "to sleep" },
      { id: "d", text: "to keep rain off" }
    ],
    answerId: "d",
    explanation: "We use an umbrella to keep the rain off. 'To sleep' is tempting only if you think of shade, but an umbrella is held up to stay dry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q05",
    prompt: "Read: \"Papa reads the newspaper after breakfast.\" When does Papa read?",
    options: [
      { id: "a", text: "after breakfast" },
      { id: "b", text: "before school" },
      { id: "c", text: "after dinner" },
      { id: "d", text: "at lunchtime" }
    ],
    answerId: "a",
    explanation: "The sentence says Papa reads after breakfast. 'Before school' is tempting because it is also in the morning, but the time clue is 'after breakfast'.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q06",
    prompt: "Read: \"It started to rain, so we went inside.\" Why did they go inside?",
    options: [
      { id: "a", text: "they were hungry" },
      { id: "b", text: "it started to rain" },
      { id: "c", text: "it was too hot" },
      { id: "d", text: "it was getting dark" }
    ],
    answerId: "b",
    explanation: "The word 'so' gives the reason: it started to rain, so they went inside. 'It was getting dark' is tempting because that is also a reason to go in, but the sentence talks about rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q07",
    prompt: "Which sentence shows sharing?",
    options: [
      { id: "a", text: "He hid all the snacks." },
      { id: "b", text: "He threw snacks away." },
      { id: "c", text: "He gave half his snack to his sister." },
      { id: "d", text: "He sat alone angrily." }
    ],
    answerId: "c",
    explanation: "Giving half his snack to his sister is sharing. 'He hid all the snacks' is tempting because it is about snacks too, but hiding them keeps them from others.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q08",
    prompt: "Read: \"Bees fly from flower to flower.\" What do bees do?",
    options: [
      { id: "a", text: "drive buses" },
      { id: "b", text: "read books" },
      { id: "c", text: "swim in ice" },
      { id: "d", text: "fly to flowers" }
    ],
    answerId: "d",
    explanation: "The sentence says bees fly from flower to flower. 'Read books' is tempting only because stories show talking bees, but the sentence is about flying.",
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
    explanation: "Every line is about putting waste into bins, so the main idea is that Mina sorted waste. 'Mina cooked dinner' is tempting because cooking makes waste, but the lines never mention cooking.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q10",
    prompt: "Read: \"Look both ways before you cross.\" What should you do?",
    options: [
      { id: "a", text: "run with eyes closed" },
      { id: "b", text: "look both ways" },
      { id: "c", text: "sit on the road" },
      { id: "d", text: "ignore cars" }
    ],
    answerId: "b",
    explanation: "The sentence tells us to look both ways before crossing. 'Ignore cars' is the opposite of the safety rule; we must watch for cars.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q11",
    prompt: "Read: \"Kabir felt brave on stage.\" How did Kabir feel?",
    options: [
      { id: "a", text: "sleepy" },
      { id: "b", text: "scared" },
      { id: "c", text: "brave" },
      { id: "d", text: "tired" }
    ],
    answerId: "c",
    explanation: "The sentence says Kabir felt brave on stage. 'Scared' is tempting because many people feel scared on stage, but the sentence says brave.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q12",
    prompt: "A post office is a place to\u2026",
    options: [
      { id: "a", text: "borrow books" },
      { id: "b", text: "buy medicines" },
      { id: "c", text: "buy vegetables" },
      { id: "d", text: "send letters" }
    ],
    answerId: "d",
    explanation: "A post office is a place to send letters. 'Borrow books' is tempting because a post office is also a public building, but that is what a library is for.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q13",
    prompt: "Read: \"First pack the bag. Next wear shoes. Then leave.\" What comes last?",
    options: [
      { id: "a", text: "leave" },
      { id: "b", text: "pack the bag" },
      { id: "c", text: "wear shoes" },
      { id: "d", text: "sleep" }
    ],
    answerId: "a",
    explanation: "'Then' marks the last step, which is leave. 'Wear shoes' is tempting because it comes after packing, but it is the 'next' step, not the last.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q14",
    prompt: "Read: \"Stars twinkle in the night sky.\" When do stars twinkle here?",
    options: [
      { id: "a", text: "in the morning" },
      { id: "b", text: "at night" },
      { id: "c", text: "at noon" },
      { id: "d", text: "after lunch" }
    ],
    answerId: "b",
    explanation: "The sentence says stars twinkle in the night sky, so it is at night. 'In the morning' is tempting because the sky is clear then too, but stars cannot be seen in daylight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q15",
    prompt: "Best title for a story about saving a street puppy?",
    options: [
      { id: "a", text: "Rocket Science" },
      { id: "b", text: "Deep Ocean" },
      { id: "c", text: "A Puppy Needs Help" },
      { id: "d", text: "Silent Stones" }
    ],
    answerId: "c",
    explanation: "'A Puppy Needs Help' fits a story about saving a street puppy. 'Silent Stones' is tempting only because it sounds like a story title, but it has nothing to do with a puppy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-reading-b-q16",
    prompt: "Read: \"Meera switched off lights to save power.\" Why switch off?",
    options: [
      { id: "a", text: "to waste power" },
      { id: "b", text: "to break bulbs" },
      { id: "c", text: "to hide" },
      { id: "d", text: "to save power" }
    ],
    answerId: "d",
    explanation: "The sentence says Meera switched off the lights to save power. 'To waste power' is the opposite: switching off stops power from being used.",
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
