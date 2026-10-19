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
    explanation: "Glad means nearly the same as happy.",
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
    explanation: "Cold is the opposite of hot.",
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
    explanation: "A baby dog is a puppy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q04",
    prompt: "Complete: as busy as a\u2026",
    options: [
      { id: "a", text: "stone" },
      { id: "b", text: "pillow" },
      { id: "c", text: "cloud" },
      { id: "d", text: "bee" }
    ],
    answerId: "d",
    explanation: "As busy as a bee.",
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
    explanation: "Huge means very big.",
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
    explanation: "Night rhymes with light.",
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
    explanation: "sun + flower = sunflower.",
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
    explanation: "un- means not.",
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
    explanation: "Start means nearly the same as begin.",
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
    explanation: "Empty is the opposite of full.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q11",
    prompt: "A place where books are kept?",
    options: [
      { id: "a", text: "kitchen only" },
      { id: "b", text: "garage only" },
      { id: "c", text: "library" },
      { id: "d", text: "garden only" }
    ],
    answerId: "c",
    explanation: "A library keeps books.",
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
    explanation: "Doctor names a person.",
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
    explanation: "Please is polite.",
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
    explanation: "Children is the plural of child.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q15",
    prompt: "Word for a person who teaches?",
    options: [
      { id: "a", text: "driver only" },
      { id: "b", text: "singer only" },
      { id: "c", text: "teacher" },
      { id: "d", text: "painter only" }
    ],
    answerId: "c",
    explanation: "A teacher teaches.",
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
    explanation: "Pair and pear sound alike.",
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
    explanation: "Quick means nearly the same as fast.",
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
    explanation: "Closed is the opposite of open.",
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
    explanation: "A baby cat is a kitten.",
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
    explanation: "As light as a feather.",
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
    explanation: "Tiny means very small.",
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
    explanation: "Lake rhymes with cake.",
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
    explanation: "rain + bow = rainbow.",
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
    explanation: "re- means again.",
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
    explanation: "Finish means nearly the same as end.",
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
    explanation: "Far is the opposite of near.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q11",
    prompt: "A place to buy food and things?",
    options: [
      { id: "a", text: "pillow" },
      { id: "b", text: "cloud" },
      { id: "c", text: "market" },
      { id: "d", text: "dream" }
    ],
    answerId: "c",
    explanation: "A market is for buying things.",
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
    explanation: "School names a place.",
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
    explanation: "Thank you is polite.",
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
    explanation: "Mice is the plural of mouse.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q15",
    prompt: "Person who drives a bus?",
    options: [
      { id: "a", text: "cook only" },
      { id: "b", text: "teacher only" },
      { id: "c", text: "driver" },
      { id: "d", text: "doctor only" }
    ],
    answerId: "c",
    explanation: "A driver drives.",
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
    explanation: "Sea and see sound alike.",
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
