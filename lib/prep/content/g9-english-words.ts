import type { ChapterDef, PrepQuestion } from "../types";

/** Writing & Vocabulary - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-eng-ch03-a-q01",
    prompt: "Choose the synonym of “brief”.",
    options: [
      { id: "a", text: "lengthy" },
      { id: "b", text: "concise" },
      { id: "c", text: "noisy" },
      { id: "d", text: "ancient" }
    ],
    answerId: "b",
    explanation: "Brief means short/concise.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q02",
    prompt: "Antonym of “scarce” is…",
    options: [
      { id: "a", text: "rare" },
      { id: "b", text: "abundant" },
      { id: "c", text: "tiny" },
      { id: "d", text: "hidden" }
    ],
    answerId: "b",
    explanation: "Scarce ↔ abundant/plentiful.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q03",
    prompt: "Choose the correct word: The ____ of the school spoke to parents.",
    options: [
      { id: "a", text: "principle" },
      { id: "b", text: "principal" },
      { id: "c", text: "premier" },
      { id: "d", text: "principle’s" }
    ],
    answerId: "b",
    explanation: "Principal = head of school; principle = rule/belief.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q04",
    prompt: "Idiom: “break the ice” means…",
    options: [
      { id: "a", text: "shatter glass" },
      { id: "b", text: "start conversation in a friendly way" },
      { id: "c", text: "cancel a match" },
      { id: "d", text: "freeze water" }
    ],
    answerId: "b",
    explanation: "It means ease social tension / begin chatting.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q05",
    prompt: "One-word substitute: A person who loves books.",
    options: [
      { id: "a", text: "bibliophile" },
      { id: "b", text: "philanthropist" },
      { id: "c", text: "sceptic" },
      { id: "d", text: "optimist" }
    ],
    answerId: "a",
    explanation: "Bibliophile = book lover.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q06",
    prompt: "Choose: The storm will ____ our picnic plans.",
    options: [
      { id: "a", text: "effect" },
      { id: "b", text: "affect" },
      { id: "c", text: "affection" },
      { id: "d", text: "effective" }
    ],
    answerId: "b",
    explanation: "Affect (verb) = influence; effect (noun) = result.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q07",
    prompt: "Synonym of “diligent”…",
    options: [
      { id: "a", text: "lazy" },
      { id: "b", text: "hardworking" },
      { id: "c", text: "rude" },
      { id: "d", text: "noisy" }
    ],
    answerId: "b",
    explanation: "Diligent means careful and hardworking.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q08",
    prompt: "Antonym of “optimistic”…",
    options: [
      { id: "a", text: "hopeful" },
      { id: "b", text: "cheerful" },
      { id: "c", text: "pessimistic" },
      { id: "d", text: "eager" }
    ],
    answerId: "c",
    explanation: "Optimistic ↔ pessimistic.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q09",
    prompt: "Phrasal verb: “call off” means…",
    options: [
      { id: "a", text: "phone someone" },
      { id: "b", text: "cancel" },
      { id: "c", text: "shout loudly" },
      { id: "d", text: "visit briefly" }
    ],
    answerId: "b",
    explanation: "Call off = cancel.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q10",
    prompt: "Choose formal option for a notice heading style:",
    options: [
      { id: "a", text: "hey guys picnic!!!" },
      { id: "b", text: "NOTICE" },
      { id: "c", text: "yo read this" },
      { id: "d", text: "sup" }
    ],
    answerId: "b",
    explanation: "School notices use a clear formal heading such as NOTICE.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q11",
    prompt: "Word meaning “capable of being heard”…",
    options: [
      { id: "a", text: "edible" },
      { id: "b", text: "audible" },
      { id: "c", text: "visible" },
      { id: "d", text: "legible" }
    ],
    answerId: "b",
    explanation: "Audible = can be heard.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q12",
    prompt: "Choose correctly: stationery vs stationary — “The bus was ____ in traffic.”",
    options: [
      { id: "a", text: "stationery" },
      { id: "b", text: "stationary" },
      { id: "c", text: "stationerly" },
      { id: "d", text: "stationory" }
    ],
    answerId: "b",
    explanation: "Stationary = not moving; stationery = writing materials.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q13",
    prompt: "Idiom: “once in a blue moon” means…",
    options: [
      { id: "a", text: "very often" },
      { id: "b", text: "very rarely" },
      { id: "c", text: "at night only" },
      { id: "d", text: "during exams" }
    ],
    answerId: "b",
    explanation: "It means very rarely.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q14",
    prompt: "Synonym of “fragile”…",
    options: [
      { id: "a", text: "sturdy" },
      { id: "b", text: "delicate" },
      { id: "c", text: "heavy" },
      { id: "d", text: "loud" }
    ],
    answerId: "b",
    explanation: "Fragile = easily broken; delicate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q15",
    prompt: "Antonym of “expand”…",
    options: [
      { id: "a", text: "enlarge" },
      { id: "b", text: "contract" },
      { id: "c", text: "grow" },
      { id: "d", text: "spread" }
    ],
    answerId: "b",
    explanation: "Expand ↔ contract/shrink.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q16",
    prompt: "Choose the best word: A ____ speech bored the audience.",
    options: [
      { id: "a", text: "concise" },
      { id: "b", text: "tedious" },
      { id: "c", text: "vivid" },
      { id: "d", text: "witty" }
    ],
    answerId: "b",
    explanation: "Tedious = long and boring.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q17",
    prompt: "One-word: Government by the people…",
    options: [
      { id: "a", text: "monarchy" },
      { id: "b", text: "democracy" },
      { id: "c", text: "autocracy" },
      { id: "d", text: "bureaucracy" }
    ],
    answerId: "b",
    explanation: "Democracy = rule by the people.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q18",
    prompt: "Phrasal: “look into” means…",
    options: [
      { id: "a", text: "stare at a mirror only" },
      { id: "b", text: "investigate" },
      { id: "c", text: "ignore" },
      { id: "d", text: "memorise" }
    ],
    answerId: "b",
    explanation: "Look into = investigate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q19",
    prompt: "Choose for a formal email opening to an unknown reader:",
    options: [
      { id: "a", text: "Hey!" },
      { id: "b", text: "Dear Sir or Madam," },
      { id: "c", text: "Yo," },
      { id: "d", text: "What’s up," }
    ],
    answerId: "b",
    explanation: "Unknown recipient → Dear Sir or Madam.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q20",
    prompt: "Confusable: “accept” vs “except” — “All ____ Rohan were present.”",
    options: [
      { id: "a", text: "accept" },
      { id: "b", text: "except" },
      { id: "c", text: "expect" },
      { id: "d", text: "access" }
    ],
    answerId: "b",
    explanation: "Except = leaving out; accept = receive/agree.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q21",
    prompt: "Synonym of “courageous”…",
    options: [
      { id: "a", text: "timid" },
      { id: "b", text: "brave" },
      { id: "c", text: "silent" },
      { id: "d", text: "clever" }
    ],
    answerId: "b",
    explanation: "Courageous ≈ brave.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q22",
    prompt: "Idiom: “spill the beans” means…",
    options: [
      { id: "a", text: "cook dinner" },
      { id: "b", text: "reveal a secret" },
      { id: "c", text: "plant seeds" },
      { id: "d", text: "cry loudly" }
    ],
    answerId: "b",
    explanation: "Spill the beans = tell a secret.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q23",
    prompt: "Choose precise word: The ____ of the mountain was covered with snow.",
    options: [
      { id: "a", text: "peek" },
      { id: "b", text: "peak" },
      { id: "c", text: "pique" },
      { id: "d", text: "peel" }
    ],
    answerId: "b",
    explanation: "Peak = top of a mountain.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q24",
    prompt: "One-word: A person who travels to work daily…",
    options: [
      { id: "a", text: "tourist" },
      { id: "b", text: "commuter" },
      { id: "c", text: "pilgrim" },
      { id: "d", text: "nomad" }
    ],
    answerId: "b",
    explanation: "Commuter travels regularly to work.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-eng-ch03-b-q01",
    prompt: "Antonym of “ancient”…",
    options: [
      { id: "a", text: "old" },
      { id: "b", text: "modern" },
      { id: "c", text: "historic" },
      { id: "d", text: "aged" }
    ],
    answerId: "b",
    explanation: "Ancient ↔ modern/new.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q02",
    prompt: "Synonym of “precise”…",
    options: [
      { id: "a", text: "vague" },
      { id: "b", text: "exact" },
      { id: "c", text: "rough" },
      { id: "d", text: "random" }
    ],
    answerId: "b",
    explanation: "Precise = exact/accurate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q03",
    prompt: "Idiom: “hit the nail on the head” means…",
    options: [
      { id: "a", text: "do carpentry" },
      { id: "b", text: "describe something exactly right" },
      { id: "c", text: "fail a test" },
      { id: "d", text: "sleep early" }
    ],
    answerId: "b",
    explanation: "It means be exactly correct.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q04",
    prompt: "Confusable: “complement” vs “compliment” — “Her scarf was a perfect ____ to the dress.”",
    options: [
      { id: "a", text: "compliment" },
      { id: "b", text: "complement" },
      { id: "c", text: "compliance" },
      { id: "d", text: "complex" }
    ],
    answerId: "b",
    explanation: "Complement = completes/goes well with; compliment = praise.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q05",
    prompt: "Phrasal: “put off” means…",
    options: [
      { id: "a", text: "wear clothes" },
      { id: "b", text: "postpone" },
      { id: "c", text: "extinguish" },
      { id: "d", text: "publish" }
    ],
    answerId: "b",
    explanation: "Put off = postpone/delay.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q06",
    prompt: "One-word: Incapable of being read…",
    options: [
      { id: "a", text: "illegible" },
      { id: "b", text: "illegal" },
      { id: "c", text: "illogical" },
      { id: "d", text: "eligible" }
    ],
    answerId: "a",
    explanation: "Illegible = unreadable handwriting/text.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q07",
    prompt: "Choose formal closing when the reader’s name is unknown:",
    options: [
      { id: "a", text: "Yours sincerely" },
      { id: "b", text: "Yours faithfully" },
      { id: "c", text: "See ya" },
      { id: "d", text: "Love" }
    ],
    answerId: "b",
    explanation: "Unknown name → Yours faithfully (with Dear Sir/Madam).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q08",
    prompt: "Synonym of “reluctant”…",
    options: [
      { id: "a", text: "eager" },
      { id: "b", text: "unwilling" },
      { id: "c", text: "joyful" },
      { id: "d", text: "swift" }
    ],
    answerId: "b",
    explanation: "Reluctant = unwilling/hesitant.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q09",
    prompt: "Antonym of “generous”…",
    options: [
      { id: "a", text: "kind" },
      { id: "b", text: "stingy" },
      { id: "c", text: "helpful" },
      { id: "d", text: "noble" }
    ],
    answerId: "b",
    explanation: "Generous ↔ stingy/miserly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q10",
    prompt: "Confusable: “council” vs “counsel” — “She sought legal ____.”",
    options: [
      { id: "a", text: "council" },
      { id: "b", text: "counsel" },
      { id: "c", text: "cancel" },
      { id: "d", text: "console" }
    ],
    answerId: "b",
    explanation: "Counsel = advice; council = a group of people.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q11",
    prompt: "Idiom: “cost an arm and a leg” means…",
    options: [
      { id: "a", text: "be very expensive" },
      { id: "b", text: "require surgery" },
      { id: "c", text: "be free" },
      { id: "d", text: "be light" }
    ],
    answerId: "a",
    explanation: "It means very costly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q12",
    prompt: "Word for “a period of ten years”…",
    options: [
      { id: "a", text: "decade" },
      { id: "b", text: "century" },
      { id: "c", text: "millennium" },
      { id: "d", text: "fortnight" }
    ],
    answerId: "a",
    explanation: "Decade = 10 years.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q13",
    prompt: "Phrasal: “give up” means…",
    options: [
      { id: "a", text: "donate upward" },
      { id: "b", text: "quit / stop trying" },
      { id: "c", text: "raise a hand" },
      { id: "d", text: "start again" }
    ],
    answerId: "b",
    explanation: "Give up = quit.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q14",
    prompt: "Confusable: “advice” vs “advise” — “Please ____ me on this choice.”",
    options: [
      { id: "a", text: "advice" },
      { id: "b", text: "advise" },
      { id: "c", text: "advicing" },
      { id: "d", text: "advisory as verb" }
    ],
    answerId: "b",
    explanation: "Advise = verb; advice = noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q15",
    prompt: "Choose the most precise word: The witness gave a ____ account of the event.",
    options: [
      { id: "a", text: "blurry" },
      { id: "b", text: "vivid" },
      { id: "c", text: "mute" },
      { id: "d", text: "lazy" }
    ],
    answerId: "b",
    explanation: "Vivid = clear and detailed.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q16",
    prompt: "Antonym of “scarce” already practised; antonym of “victory”…",
    options: [
      { id: "a", text: "triumph" },
      { id: "b", text: "defeat" },
      { id: "c", text: "medal" },
      { id: "d", text: "cheer" }
    ],
    answerId: "b",
    explanation: "Victory ↔ defeat.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q17",
    prompt: "One-word: A fictitious name used by a writer…",
    options: [
      { id: "a", text: "biography" },
      { id: "b", text: "autograph" },
      { id: "c", text: "pseudonym" },
      { id: "d", text: "manuscript" }
    ],
    answerId: "c",
    explanation: "Pseudonym = pen name / fictitious name.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q18",
    prompt: "Formal notice body should usually include…",
    options: [
      { id: "a", text: "only emojis" },
      { id: "b", text: "purpose, date/time/place, and who to contact" },
      { id: "c", text: "a poem only" },
      { id: "d", text: "slang greetings" }
    ],
    answerId: "b",
    explanation: "Notices need clear purpose and logistics.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q19",
    prompt: "Synonym of “abandon”…",
    options: [
      { id: "a", text: "keep" },
      { id: "b", text: "leave" },
      { id: "c", text: "build" },
      { id: "d", text: "polish" }
    ],
    answerId: "b",
    explanation: "Abandon means leave behind / give up.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q20",
    prompt: "Idiom: “on cloud nine” means…",
    options: [
      { id: "a", text: "very happy" },
      { id: "b", text: "lost in fog" },
      { id: "c", text: "asleep" },
      { id: "d", text: "angry" }
    ],
    answerId: "a",
    explanation: "On cloud nine = extremely happy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q21",
    prompt: "Choose: Their ideas ____ each other well.",
    options: [
      { id: "a", text: "compliment" },
      { id: "b", text: "complement" },
      { id: "c", text: "comply" },
      { id: "d", text: "complicate" }
    ],
    answerId: "b",
    explanation: "Complement means go well together.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q22",
    prompt: "Phrasal: “turn down” can mean…",
    options: [
      { id: "a", text: "increase volume only" },
      { id: "b", text: "reject an offer" },
      { id: "c", text: "stand up" },
      { id: "d", text: "wake up" }
    ],
    answerId: "b",
    explanation: "Turn down = reject (also lower volume, but reject fits options).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q23",
    prompt: "One-word: Happening every year…",
    options: [
      { id: "a", text: "annual" },
      { id: "b", text: "manual" },
      { id: "c", text: "casual" },
      { id: "d", text: "neutral" }
    ],
    answerId: "a",
    explanation: "Annual = yearly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q24",
    prompt: "Best subject line for a school email requesting leave:",
    options: [
      { id: "a", text: "sup" },
      { id: "b", text: "Request for leave — [dates] — [name]" },
      { id: "c", text: "!!!!!!" },
      { id: "d", text: "see attached meme" }
    ],
    answerId: "b",
    explanation: "Clear, formal, informative subject lines help readers.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "✉️",
    title: "Precision & format",
    body: ["The right word and the right form make writing work.", "Register changes with the reader.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "word-cards",
    speak: "Vocabulary precision and school writing formats.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "word-cards",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Confusables", reveal: "principal/principle · affect/effect", emoji: "👯" },
      { label: "Idioms", reveal: "Meaning from use, not word-by-word", emoji: "🧩" },
      { label: "One-word substitutes", reveal: "Compress a phrase into one term", emoji: "🎯" },
      { label: "Formats", reveal: "Notice and email: purpose + details + sign-off", emoji: "📋" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Register fix",
    visual: "word-cards",
    speak: "Replace hey fix the bus with a polite specific request.",
    steps: ["Identify the reader (principal)", "State the fact clearly", "Use polite formal phrasing", "Close correctly"],
    punchline: "Same message, fitting voice.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "The match was ____ due to rain.",
    options: [
        { id: "a", text: "called off" },
        { id: "b", text: "called up" },
        { id: "c", text: "called on" },
        { id: "d", text: "called in" }
    ],
    answerId: "a",
    why: "Call off means cancel.",
    visual: "word-cards",
    speak: "The match was ____ due to rain.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Precision pro!",
    bullets: ["Who is the reader?", "Confusables differ by one letter", "Formats have expected parts", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Precision pro! You are ready for the practice sets.",
  },
];

export const g9EnglishWords: ChapterDef = {
  id: "writing-vocab",
  title: "Writing & Vocabulary",
  emoji: "✉️",
  blurb: "Confusables, idioms, formats",
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
  paperTopics: ["vocabulary", "idioms-lite", "comprehension"],
};

export const g9EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
