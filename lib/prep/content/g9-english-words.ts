import type { ChapterDef, PrepQuestion } from "../types";

/** Writing & Vocabulary - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-eng-ch03-a-q01",
    prompt: "Choose the synonym of “brief”.",
    options: [
      { id: "a", text: "concise" },
      { id: "b", text: "noisy" },
      { id: "c", text: "ancient" },
      { id: "d", text: "lengthy" }
    ],
    answerId: "a",
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
      { id: "a", text: "principle’s" },
      { id: "b", text: "principle" },
      { id: "c", text: "principal" },
      { id: "d", text: "premier" }
    ],
    answerId: "c",
    explanation: "Principal = head of school; principle = rule/belief.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q04",
    prompt: "Idiom: “break the ice” means…",
    options: [
      { id: "a", text: "cancel a match" },
      { id: "b", text: "freeze water" },
      { id: "c", text: "shatter glass" },
      { id: "d", text: "start conversation in a friendly way" }
    ],
    answerId: "d",
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
      { id: "a", text: "noisy" },
      { id: "b", text: "lazy" },
      { id: "c", text: "hardworking" },
      { id: "d", text: "rude" }
    ],
    answerId: "c",
    explanation: "Diligent means careful and hardworking.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q08",
    prompt: "Antonym of “optimistic”…",
    options: [
      { id: "a", text: "eager" },
      { id: "b", text: "hopeful" },
      { id: "c", text: "cheerful" },
      { id: "d", text: "pessimistic" }
    ],
    answerId: "d",
    explanation: "Optimistic ↔ pessimistic.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q09",
    prompt: "Phrasal verb: “call off” means…",
    options: [
      { id: "a", text: "cancel" },
      { id: "b", text: "shout loudly" },
      { id: "c", text: "visit briefly" },
      { id: "d", text: "phone someone" }
    ],
    answerId: "a",
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
      { id: "a", text: "legible" },
      { id: "b", text: "edible" },
      { id: "c", text: "audible" },
      { id: "d", text: "visible" }
    ],
    answerId: "c",
    explanation: "Audible = can be heard.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q12",
    prompt: "Choose correctly: stationery vs stationary — “The bus was ____ in traffic.”",
    options: [
      { id: "a", text: "stationerly" },
      { id: "b", text: "stationory" },
      { id: "c", text: "stationery" },
      { id: "d", text: "stationary" }
    ],
    answerId: "d",
    explanation: "Stationary = not moving; stationery = writing materials.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q13",
    prompt: "Idiom: “once in a blue moon” means…",
    options: [
      { id: "a", text: "very rarely" },
      { id: "b", text: "at night only" },
      { id: "c", text: "during exams" },
      { id: "d", text: "very often" }
    ],
    answerId: "a",
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
      { id: "a", text: "spread" },
      { id: "b", text: "enlarge" },
      { id: "c", text: "contract" },
      { id: "d", text: "grow" }
    ],
    answerId: "c",
    explanation: "Expand ↔ contract/shrink.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q16",
    prompt: "Choose the best word: A ____ speech bored the audience.",
    options: [
      { id: "a", text: "vivid" },
      { id: "b", text: "witty" },
      { id: "c", text: "concise" },
      { id: "d", text: "tedious" }
    ],
    answerId: "d",
    explanation: "Tedious = long and boring.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q17",
    prompt: "One-word: Government by the people…",
    options: [
      { id: "a", text: "democracy" },
      { id: "b", text: "autocracy" },
      { id: "c", text: "bureaucracy" },
      { id: "d", text: "monarchy" }
    ],
    answerId: "a",
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
      { id: "a", text: "What’s up," },
      { id: "b", text: "Hey!" },
      { id: "c", text: "Dear Sir or Madam," },
      { id: "d", text: "Yo," }
    ],
    answerId: "c",
    explanation: "Unknown recipient → Dear Sir or Madam.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q20",
    prompt: "Confusable: “accept” vs “except” — “All ____ Rohan were present.”",
    options: [
      { id: "a", text: "expect" },
      { id: "b", text: "access" },
      { id: "c", text: "accept" },
      { id: "d", text: "except" }
    ],
    answerId: "d",
    explanation: "Except = leaving out; accept = receive/agree.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q21",
    prompt: "Synonym of “courageous”…",
    options: [
      { id: "a", text: "brave" },
      { id: "b", text: "silent" },
      { id: "c", text: "clever" },
      { id: "d", text: "timid" }
    ],
    answerId: "a",
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
      { id: "a", text: "peel" },
      { id: "b", text: "peek" },
      { id: "c", text: "peak" },
      { id: "d", text: "pique" }
    ],
    answerId: "c",
    explanation: "Peak = top of a mountain.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q24",
    prompt: "One-word: A person who travels to work daily…",
    options: [
      { id: "a", text: "pilgrim" },
      { id: "b", text: "nomad" },
      { id: "c", text: "tourist" },
      { id: "d", text: "commuter" }
    ],
    answerId: "d",
    explanation: "Commuter travels regularly to work.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-eng-ch03-b-q01",
    prompt: "Antonym of “ancient”…",
    options: [
      { id: "a", text: "modern" },
      { id: "b", text: "historic" },
      { id: "c", text: "aged" },
      { id: "d", text: "old" }
    ],
    answerId: "a",
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
      { id: "a", text: "sleep early" },
      { id: "b", text: "do carpentry" },
      { id: "c", text: "describe something exactly right" },
      { id: "d", text: "fail a test" }
    ],
    answerId: "c",
    explanation: "It means be exactly correct.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q04",
    prompt: "Confusable: “complement” vs “compliment” — “Her scarf was a perfect ____ to the dress.”",
    options: [
      { id: "a", text: "compliance" },
      { id: "b", text: "complex" },
      { id: "c", text: "compliment" },
      { id: "d", text: "complement" }
    ],
    answerId: "d",
    explanation: "Complement = completes/goes well with; compliment = praise.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q05",
    prompt: "Phrasal: “put off” means…",
    options: [
      { id: "a", text: "postpone" },
      { id: "b", text: "extinguish" },
      { id: "c", text: "publish" },
      { id: "d", text: "wear clothes" }
    ],
    answerId: "a",
    explanation: "Put off = postpone/delay.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q06",
    prompt: "One-word: Incapable of being read…",
    options: [
      { id: "a", text: "eligible" },
      { id: "b", text: "illegible" },
      { id: "c", text: "illegal" },
      { id: "d", text: "illogical" }
    ],
    answerId: "b",
    explanation: "Illegible = unreadable handwriting/text.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q07",
    prompt: "Choose formal closing when the reader’s name is unknown:",
    options: [
      { id: "a", text: "Love" },
      { id: "b", text: "Yours sincerely" },
      { id: "c", text: "Yours faithfully" },
      { id: "d", text: "See ya" }
    ],
    answerId: "c",
    explanation: "Unknown name → Yours faithfully (with Dear Sir/Madam).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q08",
    prompt: "Synonym of “reluctant”…",
    options: [
      { id: "a", text: "joyful" },
      { id: "b", text: "swift" },
      { id: "c", text: "eager" },
      { id: "d", text: "unwilling" }
    ],
    answerId: "d",
    explanation: "Reluctant = unwilling/hesitant.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q09",
    prompt: "Antonym of “generous”…",
    options: [
      { id: "a", text: "stingy" },
      { id: "b", text: "helpful" },
      { id: "c", text: "noble" },
      { id: "d", text: "kind" }
    ],
    answerId: "a",
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
      { id: "a", text: "be free" },
      { id: "b", text: "be light" },
      { id: "c", text: "be very expensive" },
      { id: "d", text: "require surgery" }
    ],
    answerId: "c",
    explanation: "It means very costly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q12",
    prompt: "Word for “a period of ten years”…",
    options: [
      { id: "a", text: "century" },
      { id: "b", text: "millennium" },
      { id: "c", text: "fortnight" },
      { id: "d", text: "decade" }
    ],
    answerId: "d",
    explanation: "Decade = 10 years.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q13",
    prompt: "Phrasal: “give up” means…",
    options: [
      { id: "a", text: "quit / stop trying" },
      { id: "b", text: "raise a hand" },
      { id: "c", text: "start again" },
      { id: "d", text: "donate upward" }
    ],
    answerId: "a",
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
      { id: "a", text: "lazy" },
      { id: "b", text: "blurry" },
      { id: "c", text: "vivid" },
      { id: "d", text: "mute" }
    ],
    answerId: "c",
    explanation: "Vivid = clear and detailed.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q16",
    prompt: "Antonym of “scarce” already practised; antonym of “victory”…",
    options: [
      { id: "a", text: "medal" },
      { id: "b", text: "cheer" },
      { id: "c", text: "triumph" },
      { id: "d", text: "defeat" }
    ],
    answerId: "d",
    explanation: "Victory ↔ defeat.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q17",
    prompt: "One-word: A fictitious name used by a writer…",
    options: [
      { id: "a", text: "pseudonym" },
      { id: "b", text: "manuscript" },
      { id: "c", text: "biography" },
      { id: "d", text: "autograph" }
    ],
    answerId: "a",
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
      { id: "a", text: "polish" },
      { id: "b", text: "keep" },
      { id: "c", text: "leave" },
      { id: "d", text: "build" }
    ],
    answerId: "c",
    explanation: "Abandon means leave behind / give up.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q20",
    prompt: "Idiom: “on cloud nine” means…",
    options: [
      { id: "a", text: "lost in fog" },
      { id: "b", text: "asleep" },
      { id: "c", text: "angry" },
      { id: "d", text: "very happy" }
    ],
    answerId: "d",
    explanation: "On cloud nine = extremely happy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q21",
    prompt: "Choose: Their ideas ____ each other well.",
    options: [
      { id: "a", text: "complement" },
      { id: "b", text: "comply" },
      { id: "c", text: "complicate" },
      { id: "d", text: "compliment" }
    ],
    answerId: "a",
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
      { id: "a", text: "casual" },
      { id: "b", text: "neutral" },
      { id: "c", text: "annual" },
      { id: "d", text: "manual" }
    ],
    answerId: "c",
    explanation: "Annual = yearly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q24",
    prompt: "Best subject line for a school email requesting leave:",
    options: [
      { id: "a", text: "!!!!!!" },
      { id: "b", text: "see attached meme" },
      { id: "c", text: "sup" },
      { id: "d", text: "Request for leave — [dates] — [name]" }
    ],
    answerId: "d",
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
