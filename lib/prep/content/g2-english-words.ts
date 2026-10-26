import type { ChapterDef, PrepQuestion } from "../types";

/** Words - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-eng-words-a-q01",
    prompt: "Word closest in meaning to \"happy\"?",
    options: [
      { id: "a", text: "glad" },
      { id: "b", text: "sad" },
      { id: "c", text: "angry" },
      { id: "d", text: "tired" }
    ],
    answerId: "a",
    explanation: "Glad means nearly the same as happy. 'Tired' is tempting because it is also a feeling, but it does not mean happy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q02",
    prompt: "Opposite of \"hot\"?",
    options: [
      { id: "a", text: "warm" },
      { id: "b", text: "cold" },
      { id: "c", text: "boiling" },
      { id: "d", text: "spicy" }
    ],
    answerId: "b",
    explanation: "Cold is the opposite of hot. 'Warm' is tempting because it is a temperature word, but warm is close to hot, not its opposite.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q03",
    prompt: "A baby dog is called a\u2026",
    options: [
      { id: "a", text: "kitten" },
      { id: "b", text: "cub" },
      { id: "c", text: "puppy" },
      { id: "d", text: "calf" }
    ],
    answerId: "c",
    explanation: "A baby dog is a puppy. 'Kitten' is tempting because it is also a baby pet, but a kitten is a baby cat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q04",
    prompt: "Complete: as busy as a\u2026",
    options: [
      { id: "a", text: "snail" },
      { id: "b", text: "cat" },
      { id: "c", text: "owl" },
      { id: "d", text: "bee" }
    ],
    answerId: "d",
    explanation: "The saying is 'as busy as a bee', because bees work all day. 'Snail' is tempting because it is also a small creature, but a snail is known for being slow, not busy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q05",
    prompt: "Which word means \"very big\"?",
    options: [
      { id: "a", text: "huge" },
      { id: "b", text: "tiny" },
      { id: "c", text: "thin" },
      { id: "d", text: "soft" }
    ],
    answerId: "a",
    explanation: "Huge means very big. 'Thin' is tempting because it is also a size word, but thin means narrow, not big.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q06",
    prompt: "Rhymes with light?",
    options: [
      { id: "a", text: "long" },
      { id: "b", text: "night" },
      { id: "c", text: "lamp" },
      { id: "d", text: "leaf" }
    ],
    answerId: "b",
    explanation: "Night rhymes with light because both end in -ight. 'Lamp' is tempting because a lamp gives light, but it does not sound like light at the end.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q07",
    prompt: "Compound word: sun + flower =",
    options: [
      { id: "a", text: "sunshine" },
      { id: "b", text: "sunset" },
      { id: "c", text: "sunflower" },
      { id: "d", text: "sunlight" }
    ],
    answerId: "c",
    explanation: "sun + flower makes sunflower. 'Sunshine' is tempting because it also starts with sun, but its second part is shine, not flower.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q08",
    prompt: "Prefix un- in \"unhappy\" means\u2026",
    options: [
      { id: "a", text: "very" },
      { id: "b", text: "again" },
      { id: "c", text: "before" },
      { id: "d", text: "not" }
    ],
    answerId: "d",
    explanation: "un- means not, so unhappy means not happy. 'Again' is tempting because it is a common word-starter meaning, but that is re-, as in redo.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q09",
    prompt: "Synonym of begin?",
    options: [
      { id: "a", text: "start" },
      { id: "b", text: "end" },
      { id: "c", text: "stop" },
      { id: "d", text: "finish" }
    ],
    answerId: "a",
    explanation: "Start means nearly the same as begin. 'Finish' is tempting because it is also about doing a task, but it means the opposite: to end.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q10",
    prompt: "Antonym of full?",
    options: [
      { id: "a", text: "packed" },
      { id: "b", text: "empty" },
      { id: "c", text: "filled" },
      { id: "d", text: "loaded" }
    ],
    answerId: "b",
    explanation: "Empty is the opposite of full. 'Packed' is tempting because it is a 'how much' word, but packed means nearly the same as full.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q11",
    prompt: "A place where books are kept?",
    options: [
      { id: "a", text: "kitchen" },
      { id: "b", text: "garage" },
      { id: "c", text: "library" },
      { id: "d", text: "garden" }
    ],
    answerId: "c",
    explanation: "Books are kept in a library. 'Kitchen' is tempting because recipe books can be kept there, but a kitchen is for cooking.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q12",
    prompt: "Which word is a naming word for a person?",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "blue" },
      { id: "c", text: "quickly" },
      { id: "d", text: "doctor" }
    ],
    answerId: "d",
    explanation: "Doctor is a naming word for a person. 'Run' is tempting because doctors do things, but run is an action word.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q13",
    prompt: "Choose the polite word.",
    options: [
      { id: "a", text: "please" },
      { id: "b", text: "shut up" },
      { id: "c", text: "move it" },
      { id: "d", text: "hey you" }
    ],
    answerId: "a",
    explanation: "Please is the polite word. 'Hey you' is tempting because it is a way to call someone, but it sounds rude.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q14",
    prompt: "Plural of child?",
    options: [
      { id: "a", text: "childs" },
      { id: "b", text: "children" },
      { id: "c", text: "childes" },
      { id: "d", text: "child" }
    ],
    answerId: "b",
    explanation: "The plural of child is children. 'Childs' is tempting because we add -s to most words, but child has a special plural.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q15",
    prompt: "Word for a person who teaches?",
    options: [
      { id: "a", text: "driver" },
      { id: "b", text: "singer" },
      { id: "c", text: "teacher" },
      { id: "d", text: "painter" }
    ],
    answerId: "c",
    explanation: "A person who teaches is a teacher. 'Painter' is tempting because it also ends in -er for a job, but a painter paints.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q16",
    prompt: "Homophones: pair / \u2026",
    options: [
      { id: "a", text: "peer" },
      { id: "b", text: "poor" },
      { id: "c", text: "pour" },
      { id: "d", text: "pear" }
    ],
    answerId: "d",
    explanation: "Pair and pear sound the same but mean different things. 'Pour' is tempting because it looks a little like pair, but it sounds different.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-eng-words-b-q01",
    prompt: "Word closest to \"fast\"?",
    options: [
      { id: "a", text: "quick" },
      { id: "b", text: "slow" },
      { id: "c", text: "late" },
      { id: "d", text: "heavy" }
    ],
    answerId: "a",
    explanation: "Quick means nearly the same as fast. 'Slow' is tempting because it is also a speed word, but it means the opposite.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q02",
    prompt: "Opposite of \"open\"?",
    options: [
      { id: "a", text: "wide" },
      { id: "b", text: "closed" },
      { id: "c", text: "clear" },
      { id: "d", text: "free" }
    ],
    answerId: "b",
    explanation: "Closed is the opposite of open. 'Wide' is tempting because we say 'wide open', but wide is about size, not the opposite.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q03",
    prompt: "A baby cat is called a\u2026",
    options: [
      { id: "a", text: "puppy" },
      { id: "b", text: "cub" },
      { id: "c", text: "kitten" },
      { id: "d", text: "chick" }
    ],
    answerId: "c",
    explanation: "A baby cat is a kitten. 'Puppy' is tempting because it is also a baby pet, but a puppy is a baby dog.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q04",
    prompt: "Complete: as light as a\u2026",
    options: [
      { id: "a", text: "rock" },
      { id: "b", text: "truck" },
      { id: "c", text: "elephant" },
      { id: "d", text: "feather" }
    ],
    answerId: "d",
    explanation: "We say 'as light as a feather' because feathers weigh almost nothing. 'Rock' is tempting because it is a common thing, but rocks are heavy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q05",
    prompt: "Which means \"very small\"?",
    options: [
      { id: "a", text: "tiny" },
      { id: "b", text: "huge" },
      { id: "c", text: "wide" },
      { id: "d", text: "tall" }
    ],
    answerId: "a",
    explanation: "Tiny means very small. 'Huge' is tempting because it is also a size word, but it means very big.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q06",
    prompt: "Rhymes with cake?",
    options: [
      { id: "a", text: "cook" },
      { id: "b", text: "lake" },
      { id: "c", text: "coat" },
      { id: "d", text: "kick" }
    ],
    answerId: "b",
    explanation: "Lake rhymes with cake because both end in -ake. 'Cook' is tempting because cooks make cakes, but it does not sound like cake at the end.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q07",
    prompt: "Compound: rain + bow =",
    options: [
      { id: "a", text: "raincoat" },
      { id: "b", text: "raindrop" },
      { id: "c", text: "rainbow" },
      { id: "d", text: "rainfall" }
    ],
    answerId: "c",
    explanation: "rain + bow makes rainbow. 'Raincoat' is tempting because it also starts with rain, but its second part is coat, not bow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q08",
    prompt: "Prefix re- in \"redo\" means\u2026",
    options: [
      { id: "a", text: "not" },
      { id: "b", text: "before" },
      { id: "c", text: "against" },
      { id: "d", text: "again" }
    ],
    answerId: "d",
    explanation: "re- means again, so redo means do again. 'Not' is tempting because some starters change a word's meaning, but 'not' is shown by un-, as in undo.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q09",
    prompt: "Synonym of end?",
    options: [
      { id: "a", text: "finish" },
      { id: "b", text: "begin" },
      { id: "c", text: "start" },
      { id: "d", text: "open" }
    ],
    answerId: "a",
    explanation: "Finish means nearly the same as end. 'Begin' is tempting because it is also about a task, but it means the opposite.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q10",
    prompt: "Antonym of near?",
    options: [
      { id: "a", text: "close" },
      { id: "b", text: "far" },
      { id: "c", text: "next" },
      { id: "d", text: "beside" }
    ],
    answerId: "b",
    explanation: "Far is the opposite of near. 'Close' is tempting because it is a distance word, but close means nearly the same as near.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q11",
    prompt: "A place to buy food and things?",
    options: [
      { id: "a", text: "library" },
      { id: "b", text: "hospital" },
      { id: "c", text: "market" },
      { id: "d", text: "school" }
    ],
    answerId: "c",
    explanation: "A market is a place to buy food and things. 'Library' is tempting because we get books there, but we borrow books from a library; we do not buy them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q12",
    prompt: "Naming word for a place?",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "soft" },
      { id: "c", text: "quickly" },
      { id: "d", text: "school" }
    ],
    answerId: "d",
    explanation: "School is a naming word for a place. 'Run' is tempting because children run at school, but run is an action word.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q13",
    prompt: "Polite reply when someone helps?",
    options: [
      { id: "a", text: "thank you" },
      { id: "b", text: "go away" },
      { id: "c", text: "whatever" },
      { id: "d", text: "no" }
    ],
    answerId: "a",
    explanation: "'Thank you' is the polite reply when someone helps. 'No' is tempting because it is short, but it does not thank the helper.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q14",
    prompt: "Plural of mouse?",
    options: [
      { id: "a", text: "mouses" },
      { id: "b", text: "mice" },
      { id: "c", text: "mouse" },
      { id: "d", text: "meese" }
    ],
    answerId: "b",
    explanation: "The plural of mouse is mice. 'Mouses' is tempting because we add -s to most words, but mouse has a special plural.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q15",
    prompt: "Person who drives a bus?",
    options: [
      { id: "a", text: "cook" },
      { id: "b", text: "teacher" },
      { id: "c", text: "driver" },
      { id: "d", text: "doctor" }
    ],
    answerId: "c",
    explanation: "A person who drives a bus is a driver. 'Teacher' is tempting because a teacher may ride the school bus, but the driver drives it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q16",
    prompt: "Homophones: sea / \u2026",
    options: [
      { id: "a", text: "say" },
      { id: "b", text: "sit" },
      { id: "c", text: "set" },
      { id: "d", text: "see" }
    ],
    answerId: "d",
    explanation: "Sea and see sound the same but mean different things. 'Say' is tempting because it starts with s too, but it sounds different.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcac",
    title: "Words",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "word-cards",
    speak: "Words can be twins or opposites.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "word-cards",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Synonym", reveal: "Nearly same meaning", emoji: "\ud83d\ude0a" },
      { label: "Antonym", reveal: "Opposite", emoji: "\ud83d\udd00" },
      { label: "Parts", reveal: "Prefixes help", emoji: "\ud83e\udde9" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Closest to \"happy\"?",
    options: [
        { id: "a", text: "sad" },
        { id: "b", text: "glad" },
        { id: "c", text: "angry" },
        { id: "d", text: "tired" }
    ],
    answerId: "b",
    why: "Glad means nearly the same as happy.",
    visual: "word-cards",
    speak: "Closest to \"happy\"?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Same or opposite?", "Use word parts", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2EnglishWords: ChapterDef = {
  id: "words",
  title: "Words",
  emoji: "\ud83d\udcac",
  blurb: "Meanings, opposites & word parts",
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
  paperTopics: ["vocabulary", "grammar"],
};

export const g2EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
