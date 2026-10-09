import type { ChapterDef, PrepQuestion } from "../types";

/** Words - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-eng-words-a-q01",
    prompt: "Word closest in meaning to \"happy\"?",
    options: [
      { id: "a", text: "sad" },
      { id: "b", text: "glad" },
      { id: "c", text: "angry" },
      { id: "d", text: "tired" }
    ],
    answerId: "b",
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
      { id: "b", text: "puppy" },
      { id: "c", text: "cub" },
      { id: "d", text: "calf" }
    ],
    answerId: "b",
    explanation: "A baby dog is a puppy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q04",
    prompt: "Complete: as busy as a\u2026",
    options: [
      { id: "a", text: "bee" },
      { id: "b", text: "stone" },
      { id: "c", text: "pillow" },
      { id: "d", text: "cloud" }
    ],
    answerId: "a",
    explanation: "As busy as a bee.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q05",
    prompt: "Which word means \"very big\"?",
    options: [
      { id: "a", text: "tiny" },
      { id: "b", text: "huge" },
      { id: "c", text: "thin" },
      { id: "d", text: "soft" }
    ],
    answerId: "b",
    explanation: "Huge means very big.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q06",
    prompt: "Rhymes with light?",
    options: [
      { id: "a", text: "night" },
      { id: "b", text: "long" },
      { id: "c", text: "lamp" },
      { id: "d", text: "leaf" }
    ],
    answerId: "a",
    explanation: "Night rhymes with light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q07",
    prompt: "Compound word: sun + flower =",
    options: [
      { id: "a", text: "sunshine" },
      { id: "b", text: "sunflower" },
      { id: "c", text: "sunset" },
      { id: "d", text: "sunlight" }
    ],
    answerId: "b",
    explanation: "sun + flower = sunflower.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q08",
    prompt: "Prefix un- in \"unhappy\" means\u2026",
    options: [
      { id: "a", text: "very" },
      { id: "b", text: "not" },
      { id: "c", text: "again" },
      { id: "d", text: "before" }
    ],
    answerId: "b",
    explanation: "un- means not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q09",
    prompt: "Synonym of begin?",
    options: [
      { id: "a", text: "end" },
      { id: "b", text: "start" },
      { id: "c", text: "stop" },
      { id: "d", text: "finish" }
    ],
    answerId: "b",
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
      { id: "a", text: "library" },
      { id: "b", text: "kitchen only" },
      { id: "c", text: "garage only" },
      { id: "d", text: "garden only" }
    ],
    answerId: "a",
    explanation: "A library keeps books.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q12",
    prompt: "Which word is a naming word for a person?",
    options: [
      { id: "a", text: "doctor" },
      { id: "b", text: "run" },
      { id: "c", text: "blue" },
      { id: "d", text: "quickly" }
    ],
    answerId: "a",
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
      { id: "a", text: "teacher" },
      { id: "b", text: "driver only" },
      { id: "c", text: "singer only" },
      { id: "d", text: "painter only" }
    ],
    answerId: "a",
    explanation: "A teacher teaches.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-a-q16",
    prompt: "Homophones: pair / \u2026",
    options: [
      { id: "a", text: "pear" },
      { id: "b", text: "peer" },
      { id: "c", text: "poor" },
      { id: "d", text: "pour" }
    ],
    answerId: "a",
    explanation: "Pair and pear sound alike.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-eng-words-b-q01",
    prompt: "Word closest to \"fast\"?",
    options: [
      { id: "a", text: "slow" },
      { id: "b", text: "quick" },
      { id: "c", text: "late" },
      { id: "d", text: "heavy" }
    ],
    answerId: "b",
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
      { id: "b", text: "kitten" },
      { id: "c", text: "cub" },
      { id: "d", text: "chick" }
    ],
    answerId: "b",
    explanation: "A baby cat is a kitten.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q04",
    prompt: "Complete: as light as a\u2026",
    options: [
      { id: "a", text: "feather" },
      { id: "b", text: "rock" },
      { id: "c", text: "truck" },
      { id: "d", text: "elephant" }
    ],
    answerId: "a",
    explanation: "As light as a feather.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q05",
    prompt: "Which means \"very small\"?",
    options: [
      { id: "a", text: "huge" },
      { id: "b", text: "tiny" },
      { id: "c", text: "wide" },
      { id: "d", text: "tall" }
    ],
    answerId: "b",
    explanation: "Tiny means very small.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q06",
    prompt: "Rhymes with cake?",
    options: [
      { id: "a", text: "lake" },
      { id: "b", text: "cook" },
      { id: "c", text: "coat" },
      { id: "d", text: "kick" }
    ],
    answerId: "a",
    explanation: "Lake rhymes with cake.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q07",
    prompt: "Compound: rain + bow =",
    options: [
      { id: "a", text: "rainbow" },
      { id: "b", text: "raincoat" },
      { id: "c", text: "raindrop" },
      { id: "d", text: "rainfall" }
    ],
    answerId: "a",
    explanation: "rain + bow = rainbow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q08",
    prompt: "Prefix re- in \"redo\" means\u2026",
    options: [
      { id: "a", text: "not" },
      { id: "b", text: "again" },
      { id: "c", text: "before" },
      { id: "d", text: "against" }
    ],
    answerId: "b",
    explanation: "re- means again.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q09",
    prompt: "Synonym of end?",
    options: [
      { id: "a", text: "begin" },
      { id: "b", text: "finish" },
      { id: "c", text: "start" },
      { id: "d", text: "open" }
    ],
    answerId: "b",
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
      { id: "a", text: "market" },
      { id: "b", text: "pillow" },
      { id: "c", text: "cloud" },
      { id: "d", text: "dream" }
    ],
    answerId: "a",
    explanation: "A market is for buying things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q12",
    prompt: "Naming word for a place?",
    options: [
      { id: "a", text: "school" },
      { id: "b", text: "run" },
      { id: "c", text: "soft" },
      { id: "d", text: "quickly" }
    ],
    answerId: "a",
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
      { id: "a", text: "driver" },
      { id: "b", text: "cook only" },
      { id: "c", text: "teacher only" },
      { id: "d", text: "doctor only" }
    ],
    answerId: "a",
    explanation: "A driver drives.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-words-b-q16",
    prompt: "Homophones: sea / \u2026",
    options: [
      { id: "a", text: "see" },
      { id: "b", text: "say" },
      { id: "c", text: "sit" },
      { id: "d", text: "set" }
    ],
    answerId: "a",
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
