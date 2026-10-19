import type { ChapterDef, PrepQuestion } from "../types";

/** Writing & Vocabulary - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-eng-ch03-a-q01",
    prompt: "Choose the synonym of “brief”.",
    options: [
      { id: "a", text: "concise" },
      { id: "b", text: "lengthy" },
      { id: "c", text: "noisy" },
      { id: "d", text: "ancient" }
    ],
    answerId: "a",
    explanation: "Brief means short/concise.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q02",
    prompt: "Antonym of “frequent” is…",
    options: [
      { id: "a", text: "regular" },
      { id: "b", text: "rare" },
      { id: "c", text: "common" },
      { id: "d", text: "often" }
    ],
    answerId: "b",
    explanation: "Frequent means happening often, so its opposite is rare. “Regular” and “common” are tempting, but they are close to frequent in meaning, not opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q03",
    prompt: "Choose the correct word: The ____ of the school spoke to parents.",
    options: [
      { id: "a", text: "principle" },
      { id: "b", text: "premier" },
      { id: "c", text: "principal" },
      { id: "d", text: "principle’s" }
    ],
    answerId: "c",
    explanation: "Principal = head of school; principle = rule/belief.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q04",
    prompt: "Idiom: “break the ice” means…",
    options: [
      { id: "a", text: "shatter glass" },
      { id: "b", text: "cancel a match" },
      { id: "c", text: "freeze water" },
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
      { id: "a", text: "lazy" },
      { id: "b", text: "rude" },
      { id: "c", text: "hardworking" },
      { id: "d", text: "noisy" }
    ],
    answerId: "c",
    explanation: "Diligent means careful and hardworking.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q08",
    prompt: "Antonym of “optimistic”…",
    options: [
      { id: "a", text: "hopeful" },
      { id: "b", text: "cheerful" },
      { id: "c", text: "eager" },
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
      { id: "b", text: "phone someone" },
      { id: "c", text: "shout loudly" },
      { id: "d", text: "visit briefly" }
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
      { id: "a", text: "edible" },
      { id: "b", text: "visible" },
      { id: "c", text: "audible" },
      { id: "d", text: "legible" }
    ],
    answerId: "c",
    explanation: "Audible = can be heard.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q12",
    prompt: "Choose correctly: stationery vs stationary — “The bus was ____ in traffic.”",
    options: [
      { id: "a", text: "stationery" },
      { id: "b", text: "stationerly" },
      { id: "c", text: "stationory" },
      { id: "d", text: "stationary" }
    ],
    answerId: "d",
    explanation: "Stationary = not moving; stationery = writing materials.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q13",
    prompt: "Idiom: “a blessing in disguise” means…",
    options: [
      { id: "a", text: "something good that first seemed bad" },
      { id: "b", text: "a gift wrapped in paper" },
      { id: "c", text: "a person in a costume" },
      { id: "d", text: "a lucky charm" }
    ],
    answerId: "a",
    explanation: "A blessing in disguise is something that seems unfortunate at first but turns out to be good. “A gift wrapped in paper” is tempting because it is hidden, but the idiom is about a situation, not an object.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q14",
    prompt: "Synonym of “obstinate”…",
    options: [
      { id: "a", text: "flexible" },
      { id: "b", text: "stubborn" },
      { id: "c", text: "obedient" },
      { id: "d", text: "timid" }
    ],
    answerId: "b",
    explanation: "Obstinate means refusing to change one's mind, which is stubborn. “Flexible” and “obedient” may look right, but they describe someone who changes or gives in easily, which is nearly the opposite of obstinate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q15",
    prompt: "Antonym of “conceal”…",
    options: [
      { id: "a", text: "hide" },
      { id: "b", text: "cover" },
      { id: "c", text: "reveal" },
      { id: "d", text: "bury" }
    ],
    answerId: "c",
    explanation: "To conceal is to hide something, so its opposite is to reveal it. “Cover” and “bury” are tempting because they are common actions, but they also mean hiding something, so they are near-synonyms, not opposites.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q16",
    prompt: "Choose the best word: A ____ speech bored the audience.",
    options: [
      { id: "a", text: "concise" },
      { id: "b", text: "vivid" },
      { id: "c", text: "witty" },
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
      { id: "b", text: "monarchy" },
      { id: "c", text: "autocracy" },
      { id: "d", text: "bureaucracy" }
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
      { id: "a", text: "Hey!" },
      { id: "b", text: "Yo," },
      { id: "c", text: "Dear Sir or Madam," },
      { id: "d", text: "What’s up," }
    ],
    answerId: "c",
    explanation: "Unknown recipient → Dear Sir or Madam.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q20",
    prompt: "Confusable: “accept” vs “except” — “All ____ Rohan were present.”",
    options: [
      { id: "a", text: "accept" },
      { id: "b", text: "expect" },
      { id: "c", text: "access" },
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
      { id: "b", text: "timid" },
      { id: "c", text: "silent" },
      { id: "d", text: "clever" }
    ],
    answerId: "a",
    explanation: "Courageous ≈ brave.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q22",
    prompt: "Idiom: “bite the bullet” means…",
    options: [
      { id: "a", text: "give up a task" },
      { id: "b", text: "face something difficult bravely" },
      { id: "c", text: "eat very quickly" },
      { id: "d", text: "hurt one's teeth" }
    ],
    answerId: "b",
    explanation: "To bite the bullet is to make yourself do something unpleasant or difficult with courage. “Give up a task” is tempting because the situation is hard, but the idiom means the opposite: you go ahead with it.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q23",
    prompt: "Choose precise word: The ____ of the mountain was covered with snow.",
    options: [
      { id: "a", text: "peek" },
      { id: "b", text: "pique" },
      { id: "c", text: "peak" },
      { id: "d", text: "peel" }
    ],
    answerId: "c",
    explanation: "Peak = top of a mountain.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-a-q24",
    prompt: "One-word: A person who travels to work daily…",
    options: [
      { id: "a", text: "tourist" },
      { id: "b", text: "pilgrim" },
      { id: "c", text: "nomad" },
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
      { id: "b", text: "old" },
      { id: "c", text: "historic" },
      { id: "d", text: "aged" }
    ],
    answerId: "a",
    explanation: "Ancient ↔ modern/new.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q02",
    prompt: "Synonym of “meticulous”…",
    options: [
      { id: "a", text: "careless" },
      { id: "b", text: "painstaking" },
      { id: "c", text: "hasty" },
      { id: "d", text: "casual" }
    ],
    answerId: "b",
    explanation: "Meticulous means very careful about every detail, which is what painstaking means. “Hasty” is tempting for a busy worker, but it means too quick and careless.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q03",
    prompt: "Idiom: “the tip of the iceberg” means…",
    options: [
      { id: "a", text: "the coldest part of the sea" },
      { id: "b", text: "the highest point of a mountain" },
      { id: "c", text: "a small visible part of a much bigger problem" },
      { id: "d", text: "the end of a matter" }
    ],
    answerId: "c",
    explanation: "Most of an iceberg is hidden under water, so “the tip of the iceberg” is a small visible sign of a much larger problem. “The end of a matter” is tempting because a tip is an end, but the idiom suggests much more is still to come.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q04",
    prompt: "Confusable: “complement” vs “compliment” — “Her scarf was a perfect ____ to the dress.”",
    options: [
      { id: "a", text: "compliment" },
      { id: "b", text: "compliance" },
      { id: "c", text: "complex" },
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
      { id: "b", text: "wear clothes" },
      { id: "c", text: "extinguish" },
      { id: "d", text: "publish" }
    ],
    answerId: "a",
    explanation: "Put off = postpone/delay.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q06",
    prompt: "One-word: Incapable of being read…",
    options: [
      { id: "a", text: "illegal" },
      { id: "b", text: "illegible" },
      { id: "c", text: "illogical" },
      { id: "d", text: "eligible" }
    ],
    answerId: "b",
    explanation: "Illegible = unreadable handwriting/text.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q07",
    prompt: "Choose formal closing when the reader’s name is unknown:",
    options: [
      { id: "a", text: "Yours sincerely" },
      { id: "b", text: "See ya" },
      { id: "c", text: "Yours faithfully" },
      { id: "d", text: "Love" }
    ],
    answerId: "c",
    explanation: "Unknown name → Yours faithfully (with Dear Sir/Madam).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q08",
    prompt: "Synonym of “reluctant”…",
    options: [
      { id: "a", text: "eager" },
      { id: "b", text: "joyful" },
      { id: "c", text: "swift" },
      { id: "d", text: "unwilling" }
    ],
    answerId: "d",
    explanation: "Reluctant = unwilling/hesitant.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q09",
    prompt: "Antonym of “humble”…",
    options: [
      { id: "a", text: "arrogant" },
      { id: "b", text: "modest" },
      { id: "c", text: "meek" },
      { id: "d", text: "simple" }
    ],
    answerId: "a",
    explanation: "Humble means not proud, so its opposite is arrogant. “Modest” and “meek” are tempting, but they are close in meaning to humble.",
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
    prompt: "Idiom: “under the weather” means…",
    options: [
      { id: "a", text: "outdoors in the rain" },
      { id: "b", text: "very happy" },
      { id: "c", text: "feeling unwell" },
      { id: "d", text: "worried about the forecast" }
    ],
    answerId: "c",
    explanation: "If you are under the weather, you feel slightly ill. “Outdoors in the rain” is tempting as the literal reading, but idioms are not literal.",
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
      { id: "b", text: "donate upward" },
      { id: "c", text: "raise a hand" },
      { id: "d", text: "start again" }
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
      { id: "a", text: "blurry" },
      { id: "b", text: "mute" },
      { id: "c", text: "vivid" },
      { id: "d", text: "lazy" }
    ],
    answerId: "c",
    explanation: "Vivid = clear and detailed.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q16",
    prompt: "Antonym of “scarce” already practised; antonym of “victory”…",
    options: [
      { id: "a", text: "triumph" },
      { id: "b", text: "medal" },
      { id: "c", text: "cheer" },
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
      { id: "b", text: "biography" },
      { id: "c", text: "autograph" },
      { id: "d", text: "manuscript" }
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
    prompt: "Synonym of “diminish”…",
    options: [
      { id: "a", text: "increase" },
      { id: "b", text: "brighten" },
      { id: "c", text: "lessen" },
      { id: "d", text: "repeat" }
    ],
    answerId: "c",
    explanation: "To diminish is to become or make smaller, which is to lessen. “Increase” is its opposite.",
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
      { id: "b", text: "compliment" },
      { id: "c", text: "comply" },
      { id: "d", text: "complicate" }
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
      { id: "a", text: "manual" },
      { id: "b", text: "casual" },
      { id: "c", text: "annual" },
      { id: "d", text: "neutral" }
    ],
    answerId: "c",
    explanation: "Annual = yearly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch03-b-q24",
    prompt: "Best subject line for a school email requesting leave:",
    options: [
      { id: "a", text: "sup" },
      { id: "b", text: "!!!!!!" },
      { id: "c", text: "see attached meme" },
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
