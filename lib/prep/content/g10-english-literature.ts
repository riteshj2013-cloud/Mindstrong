import type { ChapterDef, PrepQuestion } from "../types";

/** Literature - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-eng-ch01-a-q01",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhat does the opening call the monsoon before the rain arrives?",
    options: [
      { id: "a", text: "a rumour" },
      { id: "b", text: "a festival" },
      { id: "c", text: "a drought" },
      { id: "d", text: "a timetable" }
    ],
    answerId: "a",
    explanation: "The first sentence says the monsoon arrived \"as a rumour.\"",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q02",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\n\"a bruise-coloured cloud\" mainly suggests the cloud is \u2014",
    options: [
      { id: "a", text: "dark, stormy, and ominous" },
      { id: "b", text: "bright yellow" },
      { id: "c", text: "completely white and calm" },
      { id: "d", text: "invisible" }
    ],
    answerId: "a",
    explanation: "\"Bruise-coloured\" evokes dark purples/blues of an approaching storm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q03",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nSomeone says \"It will pass.\" What happens next?",
    options: [
      { id: "a", text: "The rain does not pass; it arrives fully" },
      { id: "b", text: "The sun returns immediately" },
      { id: "c", text: "The class goes home dry" },
      { id: "d", text: "The cloud vanishes" }
    ],
    answerId: "a",
    explanation: "The narrator answers: \"It did not pass,\" then the sky opens.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q04",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\n\"as if a seam had been ripped\" is an example of \u2014",
    options: [
      { id: "a", text: "simile" },
      { id: "b", text: "metaphor only without as/like" },
      { id: "c", text: "alliteration" },
      { id: "d", text: "pun" }
    ],
    answerId: "a",
    explanation: "\"As if\" introduces a simile comparing the sky opening to a ripped seam.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q05",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe peepal tree \"shook as though laughing\" personifies the tree by \u2014",
    options: [
      { id: "a", text: "giving it a human action (laughing)" },
      { id: "b", text: "measuring its height" },
      { id: "c", text: "calling it a rumour" },
      { id: "d", text: "turning it to stone" }
    ],
    answerId: "a",
    explanation: "Laughing is a human behaviour applied to the tree.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q06",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nMeera remembers her grandmother's saying about rain. The saying claims rain \u2014",
    options: [
      { id: "a", text: "has a memory older than towns" },
      { id: "b", text: "never falls in cities" },
      { id: "c", text: "is always gentle" },
      { id: "d", text: "follows exam timetables" }
    ],
    answerId: "a",
    explanation: "Quoted idea: rain's memory is older than towns.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q07",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nAt the end, the proverb \"did not feel like decoration\" means Meera \u2014",
    options: [
      { id: "a", text: "felt it was suddenly true and solid" },
      { id: "b", text: "wanted to paint the verandah" },
      { id: "c", text: "disliked her grandmother" },
      { id: "d", text: "ignored the rain" }
    ],
    answerId: "a",
    explanation: "Decoration = empty ornament; now it feels like a fact in the mud.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q08",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe overall tone of the passage is best described as \u2014",
    options: [
      { id: "a", text: "observant and quietly awed" },
      { id: "b", text: "angry and sarcastic" },
      { id: "c", text: "comic slapstick" },
      { id: "d", text: "coldly scientific only" }
    ],
    answerId: "a",
    explanation: "Sensory detail and the proverb shift show attentive wonder, not rage or jokes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q09",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich detail is sensory (smell)?",
    options: [
      { id: "a", text: "the smell of wet dust" },
      { id: "b", text: "corrugated roof" },
      { id: "c", text: "cricket pitch" },
      { id: "d", text: "class under the roof" }
    ],
    answerId: "a",
    explanation: "\"Smell of wet dust\" is olfactory imagery.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q10",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe cricket pitch becomes \"a shallow lake\" through \u2014",
    options: [
      { id: "a", text: "metaphor / figurative description of flooding" },
      { id: "b", text: "literal construction of a lake overnight by workers" },
      { id: "c", text: "a mirage in drought" },
      { id: "d", text: "snow" }
    ],
    answerId: "a",
    explanation: "Heavy rain floods the pitch so it resembles a lake.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q11",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nWhy had Arun originally come to the library?",
    options: [
      { id: "a", text: "for a project" },
      { id: "b", text: "to sleep" },
      { id: "c", text: "to buy books" },
      { id: "d", text: "to meet a scooter mechanic" }
    ],
    answerId: "a",
    explanation: "\"Arun had come for a project and stayed for a feeling\u2026\"",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q12",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\n\"dust floated\u2026 like slow snow\" uses \u2014",
    options: [
      { id: "a", text: "simile" },
      { id: "b", text: "hyperbole only" },
      { id: "c", text: "oxymoron" },
      { id: "d", text: "irony" }
    ],
    answerId: "a",
    explanation: "\"Like\" compares dust to snow.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q13",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe pressed marigold is described as \"brittle as a whisper.\" This suggests it is \u2014",
    options: [
      { id: "a", text: "fragile and delicate" },
      { id: "b", text: "loud and fresh" },
      { id: "c", text: "wet and heavy" },
      { id: "d", text: "metallic" }
    ],
    answerId: "a",
    explanation: "Brittle + whisper = easily broken, barely there.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q14",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe marginal note \"Do not finish this journey alone\" most nearly urges \u2014",
    options: [
      { id: "a", text: "companionship on a journey" },
      { id: "b", text: "abandoning all travel" },
      { id: "c", text: "finishing homework alone" },
      { id: "d", text: "selling the diary" }
    ],
    answerId: "a",
    explanation: "It advises against solitary completion of a journey.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q15",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nArun closes the book \"as if loudness might wake the past.\" This implies he \u2014",
    options: [
      { id: "a", text: "treats the past as something fragile and worthy of quiet" },
      { id: "b", text: "wants to wake everyone in the library" },
      { id: "c", text: "hates silence" },
      { id: "d", text: "tears the page" }
    ],
    answerId: "a",
    explanation: "Quiet respect for history is the point of the simile.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q16",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nContrast between inside and outside emphasises \u2014",
    options: [
      { id: "a", text: "different paces of time: calm vs noisy rush" },
      { id: "b", text: "that libraries are illegal" },
      { id: "c", text: "that scooters are silent" },
      { id: "d", text: "that dust is snow" }
    ],
    answerId: "a",
    explanation: "Scooter horns outside vs \"time had a different speed\" inside.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q17",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe phrase \"the speed of pages turning when no one is late\" suggests \u2014",
    options: [
      { id: "a", text: "unhurried reading" },
      { id: "b", text: "exam panic" },
      { id: "c", text: "train schedules" },
      { id: "d", text: "sports timing" }
    ],
    answerId: "a",
    explanation: "No lateness \u2192 leisurely turning of pages.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q18",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\n\"Hold the quiet like a cup\" compares quiet to a cup to stress that quiet is \u2014",
    options: [
      { id: "a", text: "something that can be held carefully or spilled" },
      { id: "b", text: "made of ceramic only" },
      { id: "c", text: "impossible" },
      { id: "d", text: "always loud" }
    ],
    answerId: "a",
    explanation: "The cup image says silence is precious and spillable.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q19",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\n\"Words are birds\" is a \u2014",
    options: [
      { id: "a", text: "metaphor" },
      { id: "b", text: "simile (has like)" },
      { id: "c", text: "pun" },
      { id: "d", text: "paradox only" }
    ],
    answerId: "a",
    explanation: "Direct equation without like/as \u2192 metaphor.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q20",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nAccording to the poem, once words are released they \u2014",
    options: [
      { id: "a", text: "will not return to your hand" },
      { id: "b", text: "always return politely" },
      { id: "c", text: "become cups" },
      { id: "d", text: "turn into streets" }
    ],
    answerId: "a",
    explanation: "\"They will not return to your hand.\"",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q21",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe speaker advises you to speak as if the air \u2014",
    options: [
      { id: "a", text: "were listening for something true" },
      { id: "b", text: "were empty of meaning" },
      { id: "c", text: "were a mirror" },
      { id: "d", text: "were angry" }
    ],
    answerId: "a",
    explanation: "Final lines urge truth-seeking speech.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q22",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe mood of the poem is best called \u2014",
    options: [
      { id: "a", text: "reflective and cautionary" },
      { id: "b", text: "hilarious" },
      { id: "c", text: "vengeful" },
      { id: "d", text: "indifferent to language" }
    ],
    answerId: "a",
    explanation: "Care with quiet and words shows reflective caution.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q23",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich theme fits Passage P1 best?",
    options: [
      { id: "a", text: "Nature's force can make old wisdom feel newly true" },
      { id: "b", text: "Exams matter more than weather" },
      { id: "c", text: "Towns invent rain" },
      { id: "d", text: "Clouds fear verandahs" }
    ],
    answerId: "a",
    explanation: "Storm experience validates the grandmother's proverb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q24",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nWhich theme fits Passage P2 best?",
    options: [
      { id: "a", text: "Quiet places can change our sense of time and connection" },
      { id: "b", text: "Dust is dangerous snow" },
      { id: "c", text: "Projects should be abandoned" },
      { id: "d", text: "Horns improve reading" }
    ],
    answerId: "a",
    explanation: "Library calm vs street noise + the note about not journeying alone.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-eng-ch01-b-q01",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe verandah detail mainly serves to \u2014",
    options: [
      { id: "a", text: "ground the scene in a familiar school space before the storm" },
      { id: "b", text: "prove the school is closed forever" },
      { id: "c", text: "introduce a cricket coach" },
      { id: "d", text: "describe desert heat only" }
    ],
    answerId: "a",
    explanation: "Concrete school setting makes the weather shift vivid.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q02",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\n\"leaning on the western hills\" makes the cloud seem \u2014",
    options: [
      { id: "a", text: "heavy and almost physical" },
      { id: "b", text: "tiny as a speck" },
      { id: "c", text: "underground" },
      { id: "d", text: "made of paper" }
    ],
    answerId: "a",
    explanation: "\"Leaning\" personifies/weightens the cloud on the landscape.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q03",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe narrator's point of view is \u2014",
    options: [
      { id: "a", text: "third-person, following Meera" },
      { id: "b", text: "first-person Meera saying \"I\"" },
      { id: "c", text: "second-person \"you\" throughout" },
      { id: "d", text: "no clear perspective" }
    ],
    answerId: "a",
    explanation: "\"Meera stood\u2026\" uses third person focused on her.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q04",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich word best describes the rain's arrival?",
    options: [
      { id: "a", text: "sudden / overwhelming" },
      { id: "b", text: "gradual drizzle only" },
      { id: "c", text: "absent" },
      { id: "d", text: "snow-like" }
    ],
    answerId: "a",
    explanation: "\"Opened all at once\" and instant flooding.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q05",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhy might the proverb feel like \"a fact standing in the mud\"?",
    options: [
      { id: "a", text: "Experience makes the saying concrete and undeniable" },
      { id: "b", text: "Mud always contains books" },
      { id: "c", text: "Proverbs are illegal" },
      { id: "d", text: "Meera wrote the proverb that day" }
    ],
    answerId: "a",
    explanation: "Lived weather turns abstract wisdom into something present.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q06",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe travel diary date \"1924\" mainly emphasises \u2014",
    options: [
      { id: "a", text: "historical distance / the past's nearness in objects" },
      { id: "b", text: "Arun's birth year" },
      { id: "c", text: "a bus number" },
      { id: "d", text: "exam year" }
    ],
    answerId: "a",
    explanation: "A century-old diary makes the past tangible.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q07",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\n\"The books did not shout; they waited\" contrasts books with \u2014",
    options: [
      { id: "a", text: "noisy modern life (and impatient demands)" },
      { id: "b", text: "other silent books" },
      { id: "c", text: "the marigold only" },
      { id: "d", text: "scooters that read" }
    ],
    answerId: "a",
    explanation: "Books' patience vs shouting world outside.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q08",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nArun's closing the book \"gently\" shows \u2014",
    options: [
      { id: "a", text: "respect and care" },
      { id: "b", text: "anger" },
      { id: "c", text: "boredom only" },
      { id: "d", text: "theft" }
    ],
    answerId: "a",
    explanation: "Gentle handling matches reverence for the past.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q09",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe pressed flower is a symbol of \u2014",
    options: [
      { id: "a", text: "preserved memory" },
      { id: "b", text: "future traffic" },
      { id: "c", text: "sports victory" },
      { id: "d", text: "school fees" }
    ],
    answerId: "a",
    explanation: "A dried flower keeps a moment inside a book.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q10",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\n\"Inside, time had a different speed\" is best read as \u2014",
    options: [
      { id: "a", text: "subjective experience of slower, deeper time" },
      { id: "b", text: "a broken clock on the wall only" },
      { id: "c", text: "time travel science" },
      { id: "d", text: "a bus schedule error" }
    ],
    answerId: "a",
    explanation: "Psychological time in a calm place.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q11",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe imperative \"Hold\" and \"Speak\" show the poem is \u2014",
    options: [
      { id: "a", text: "addressing the reader with advice" },
      { id: "b", text: "narrating a cricket match" },
      { id: "c", text: "listing grocery items" },
      { id: "d", text: "a weather report" }
    ],
    answerId: "a",
    explanation: "Commands address \"you\" with guidance.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q12",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nSpill the quiet \"on the street\" would mean \u2014",
    options: [
      { id: "a", text: "losing or wasting silence in public noise" },
      { id: "b", text: "watering plants" },
      { id: "c", text: "painting roads" },
      { id: "d", text: "buying cups" }
    ],
    answerId: "a",
    explanation: "Don't waste carefully held quiet in the noisy street.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q13",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nComparing words to birds that won't return warns that speech is \u2014",
    options: [
      { id: "a", text: "irreversible in effect" },
      { id: "b", text: "always kind" },
      { id: "c", text: "never heard" },
      { id: "d", text: "only for birds" }
    ],
    answerId: "a",
    explanation: "Once spoken, words can't be taken back fully.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q14",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\n\"the air were listening\" uses subjunctive mood to \u2014",
    options: [
      { id: "a", text: "imagine an ideal attentive audience" },
      { id: "b", text: "state a scientific fact about nitrogen" },
      { id: "c", text: "describe rain" },
      { id: "d", text: "count syllables only" }
    ],
    answerId: "a",
    explanation: "\"As if the air were\u2026\" imagines attentive air.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q15",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe poem's central message is closest to \u2014",
    options: [
      { id: "a", text: "value silence and speak truthfully" },
      { id: "b", text: "never speak" },
      { id: "c", text: "shout always" },
      { id: "d", text: "collect cups" }
    ],
    answerId: "a",
    explanation: "Care for quiet + speak for what is true.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q16",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich quotation best supports the idea that rain transforms the ordinary playground?",
    options: [
      { id: "a", text: "\"the cricket pitch was a shallow lake\"" },
      { id: "b", text: "\"It will pass\"" },
      { id: "c", text: "\"school verandah\"" },
      { id: "d", text: "\"western hills\"" }
    ],
    answerId: "a",
    explanation: "Pitch \u2192 lake shows sudden transformation.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q17",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nWhich quotation best shows Arun's changed purpose for staying?",
    options: [
      { id: "a", text: "\"stayed for a feeling he could not name\"" },
      { id: "b", text: "\"scooters argued with horns\"" },
      { id: "c", text: "\"1924\"" },
      { id: "d", text: "\"pressed marigold\"" }
    ],
    answerId: "a",
    explanation: "He came for a project but stayed for an unnamed feeling.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q18",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe phrase \"older than towns\" suggests nature's scale is \u2014",
    options: [
      { id: "a", text: "greater / deeper than human settlements" },
      { id: "b", text: "exactly one year" },
      { id: "c", text: "smaller than a verandah" },
      { id: "d", text: "invented by students" }
    ],
    answerId: "a",
    explanation: "Rain's \"memory\" outlasts urban history.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q19",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nIrony in the scene includes \u2014",
    options: [
      { id: "a", text: "a quiet past message amid a noisy present outside" },
      { id: "b", text: "dust that is literally snow" },
      { id: "c", text: "a diary that shouts" },
      { id: "d", text: "Arun finishing the journey alone in the text" }
    ],
    answerId: "a",
    explanation: "The note urges company while the modern street is frantic and isolating in pace.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q20",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nLine breaks after \"released\" and before \"they will not return\" emphasise \u2014",
    options: [
      { id: "a", text: "the separation between speaking and consequence" },
      { id: "b", text: "rhyme scheme AABB" },
      { id: "c", text: "a shopping list" },
      { id: "d", text: "metre of a sonnet only" }
    ],
    answerId: "a",
    explanation: "The break stages cause then effect.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q21",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nMeera is characterised as someone who \u2014",
    options: [
      { id: "a", text: "notices sensory detail and connects it to inherited wisdom" },
      { id: "b", text: "hates proverbs always" },
      { id: "c", text: "organises cricket" },
      { id: "d", text: "sleeps through rain" }
    ],
    answerId: "a",
    explanation: "She watches, remembers the saying, and feels its truth.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q22",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe library setting functions as \u2014",
    options: [
      { id: "a", text: "a refuge where time and attention deepen" },
      { id: "b", text: "a scooter garage" },
      { id: "c", text: "a sports stadium" },
      { id: "d", text: "a closed empty void with no books" }
    ],
    answerId: "a",
    explanation: "Dust, shafts of light, waiting books = contemplative refuge.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q23",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe cup and birds images together teach \u2014",
    options: [
      { id: "a", text: "guard silence; release words carefully" },
      { id: "b", text: "drink quietly then shout" },
      { id: "c", text: "never use metaphors" },
      { id: "d", text: "count birds in cups" }
    ],
    answerId: "a",
    explanation: "Two linked metaphors about care with silence and speech.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q24",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nIn the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nA similarity between the two prose passages is that both \u2014",
    options: [
      { id: "a", text: "use vivid imagery to show how place shapes feeling" },
      { id: "b", text: "are about cricket scores" },
      { id: "c", text: "reject the past" },
      { id: "d", text: "occur in outer space" }
    ],
    answerId: "a",
    explanation: "Storm verandah and library both tie setting to inner response.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcd6",
    title: "Literature",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Read for theme, tone, imagery, and evidence \u2014 not guesses.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Theme", reveal: "Big idea built from the whole text", emoji: "\ud83d\udca1" },
      { label: "Tone & mood", reveal: "Writer's attitude; reader's feeling", emoji: "\ud83c\udf9a\ufe0f" },
      { label: "Figurative language", reveal: "Simile, metaphor, personification", emoji: "\ud83e\ude84" },
      { label: "Evidence", reveal: "Point back to a line that proves it", emoji: "\ud83d\udd0e" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "\"The classroom was a beehive.\" This is a \u2014",
    options: [
        { id: "a", text: "metaphor" },
        { id: "b", text: "simile" },
        { id: "c", text: "pun" },
        { id: "d", text: "haiku" }
    ],
    answerId: "a",
    why: "It says the classroom was a beehive \u2014 direct comparison without like/as.",
    visual: "sentence",
    speak: "\"The classroom was a beehive.\" This is a \u2014",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Literature ready", "Theme needs the whole arc", "Name the device", "Quote your proof"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10EnglishLiterature: ChapterDef = {
  id: "literature",
  title: "Literature",
  emoji: "\ud83d\udcd6",
  blurb: "Theme, tone & figurative language",
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

export const g10EnglishLiteratureQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
