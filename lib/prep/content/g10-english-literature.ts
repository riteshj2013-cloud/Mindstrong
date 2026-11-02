import type { ChapterDef, PrepQuestion } from "../types";

/** Literature - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-eng-ch01-a-q01",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhat does the opening call the monsoon before the rain arrives?",
    options: [
      { id: "a", text: "a drought" },
      { id: "b", text: "a timetable" },
      { id: "c", text: "a festival" },
      { id: "d", text: "a rumour" }
    ],
    answerId: "d",
    explanation: "The first sentence says the monsoon arrived 'not as rain at first but as a rumour'. 'A drought' is tempting because the passage starts with dry, dusty ground, but there is no drought; the rain is just about to come.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q02",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\n\"a bruise-coloured cloud\" mainly suggests the cloud is \u2014",
    options: [
      { id: "a", text: "completely white and calm" },
      { id: "b", text: "dark, stormy, and ominous" },
      { id: "c", text: "bright yellow" },
      { id: "d", text: "invisible" }
    ],
    answerId: "b",
    explanation: "\"Bruise-coloured\" evokes dark purples/blues of an approaching storm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q03",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nSomeone says \"It will pass.\" What happens next?",
    options: [
      { id: "a", text: "The class goes home dry" },
      { id: "b", text: "The sun returns immediately" },
      { id: "c", text: "The cloud vanishes" },
      { id: "d", text: "The rain does not pass; it arrives fully" }
    ],
    answerId: "d",
    explanation: "The narrator answers: \"It did not pass,\" then the sky opens.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q04",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\n\"as if a seam had been ripped\" is an example of \u2014",
    options: [
      { id: "a", text: "simile" },
      { id: "b", text: "alliteration" },
      { id: "c", text: "pun" },
      { id: "d", text: "metaphor only without as/like" }
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
      { id: "c", text: "turning it to stone" },
      { id: "d", text: "calling it a rumour" }
    ],
    answerId: "a",
    explanation: "Laughing is something people do, so giving it to the tree personifies the tree. 'Calling it a rumour' is tempting because that is also figurative language in the passage, but the word 'rumour' describes the monsoon, not the tree.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q06",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nMeera remembers her grandmother's saying about rain. The saying claims rain \u2014",
    options: [
      { id: "a", text: "is always gentle" },
      { id: "b", text: "never falls in cities" },
      { id: "c", text: "follows exam timetables" },
      { id: "d", text: "has a memory older than towns" }
    ],
    answerId: "d",
    explanation: "Her grandmother's saying is that rain 'has a memory older than towns'. 'Never falls in cities' is tempting because the saying mentions towns, but it compares rain's age with towns; it says nothing about where rain falls.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q07",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nAt the end, the proverb \"did not feel like decoration\" means Meera \u2014",
    options: [
      { id: "a", text: "ignored the rain" },
      { id: "b", text: "wanted to paint the verandah" },
      { id: "c", text: "disliked her grandmother" },
      { id: "d", text: "felt it was suddenly true and solid" }
    ],
    answerId: "d",
    explanation: "Decoration = empty ornament; now it feels like a fact in the mud.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q08",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe overall tone of the passage is best described as \u2014",
    options: [
      { id: "a", text: "angry and sarcastic" },
      { id: "b", text: "coldly scientific only" },
      { id: "c", text: "observant and quietly awed" },
      { id: "d", text: "comic slapstick" }
    ],
    answerId: "c",
    explanation: "Sensory detail and the proverb shift show attentive wonder, not rage or jokes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q09",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich detail is sensory (smell)?",
    options: [
      { id: "a", text: "the smell of wet dust" },
      { id: "b", text: "class under the roof" },
      { id: "c", text: "cricket pitch" },
      { id: "d", text: "corrugated roof" }
    ],
    answerId: "a",
    explanation: "'The smell of wet dust' is the detail that appeals to our sense of smell. 'Corrugated roof' is tempting because it is a vivid concrete detail, but it is something we see, not smell.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q10",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe cricket pitch becomes \"a shallow lake\" through \u2014",
    options: [
      { id: "a", text: "metaphor / figurative description of flooding" },
      { id: "b", text: "snow" },
      { id: "c", text: "literal construction of a lake overnight by workers" },
      { id: "d", text: "a mirage in drought" }
    ],
    answerId: "a",
    explanation: "The pitch is not really a lake; calling it one is a metaphor for how badly it flooded. 'Literal construction of a lake overnight by workers' is tempting if you read the words literally, but the change happened 'within minutes' because of the rain.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q11",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nWhy had Arun originally come to the library?",
    options: [
      { id: "a", text: "to sleep" },
      { id: "b", text: "for a project" },
      { id: "c", text: "to buy books" },
      { id: "d", text: "to meet a scooter mechanic" }
    ],
    answerId: "b",
    explanation: "The passage says 'Arun had come for a project and stayed for a feeling'. 'To buy books' is tempting because he is surrounded by books, but this is a library, and the text names the project as his reason.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q12",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\n\"dust floated\u2026 like slow snow\" uses \u2014",
    options: [
      { id: "a", text: "hyperbole only" },
      { id: "b", text: "irony" },
      { id: "c", text: "simile" },
      { id: "d", text: "oxymoron" }
    ],
    answerId: "c",
    explanation: "'Like' directly compares the floating dust to slow snow, which makes it a simile. 'Hyperbole only' is tempting because the image is striking, but nothing is exaggerated; it is a likeness made with 'like'.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q13",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe pressed marigold is described as \"brittle as a whisper.\" This suggests it is \u2014",
    options: [
      { id: "a", text: "metallic" },
      { id: "b", text: "wet and heavy" },
      { id: "c", text: "fragile and delicate" },
      { id: "d", text: "loud and fresh" }
    ],
    answerId: "c",
    explanation: "'Brittle' means easily broken and a whisper is faint, so the flower is fragile and delicate. 'Loud and fresh' is tempting because a whisper is a sound, but a whisper is the softest sound, and a pressed flower is dry, not fresh.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q14",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe marginal note \"Do not finish this journey alone\" most nearly urges \u2014",
    options: [
      { id: "a", text: "companionship on a journey" },
      { id: "b", text: "finishing homework alone" },
      { id: "c", text: "selling the diary" },
      { id: "d", text: "abandoning all travel" }
    ],
    answerId: "a",
    explanation: "'Do not finish this journey alone' urges having company on the journey. 'Finishing homework alone' is tempting because Arun is there for a school project, but the note is about a journey, and it warns against going alone.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q15",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nArun closes the book \"as if loudness might wake the past.\" This implies he \u2014",
    options: [
      { id: "a", text: "hates silence" },
      { id: "b", text: "wants to wake everyone in the library" },
      { id: "c", text: "treats the past as something fragile and worthy of quiet" },
      { id: "d", text: "tears the page" }
    ],
    answerId: "c",
    explanation: "Closing the book gently, as if noise might wake the past, shows he treats the past as delicate and deserving quiet. 'Wants to wake everyone in the library' is tempting because the line mentions waking, but he is avoiding loudness, not seeking it.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q16",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nContrast between inside and outside emphasises \u2014",
    options: [
      { id: "a", text: "that scooters are silent" },
      { id: "b", text: "that libraries are illegal" },
      { id: "c", text: "that dust is snow" },
      { id: "d", text: "different paces of time: calm vs noisy rush" }
    ],
    answerId: "d",
    explanation: "Scooter horns outside vs \"time had a different speed\" inside.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q17",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe phrase \"the speed of pages turning when no one is late\" suggests \u2014",
    options: [
      { id: "a", text: "exam panic" },
      { id: "b", text: "unhurried reading" },
      { id: "c", text: "train schedules" },
      { id: "d", text: "sports timing" }
    ],
    answerId: "b",
    explanation: "When no one is late, nobody rushes, so pages turn slowly: the phrase suggests unhurried reading. 'Exam panic' is tempting because 'late' suggests deadlines, but the line says no one is late, so there is no pressure.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q18",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\n\"Hold the quiet like a cup\" compares quiet to a cup to stress that quiet is \u2014",
    options: [
      { id: "a", text: "made of ceramic only" },
      { id: "b", text: "something that can be held carefully or spilled" },
      { id: "c", text: "impossible" },
      { id: "d", text: "always loud" }
    ],
    answerId: "b",
    explanation: "A cup can be carried with care or spilled, so the image treats quiet as something precious we can keep or waste. 'Made of ceramic only' is tempting if you read the cup literally, but the comparison is about how we handle quiet, not what it is made of.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q19",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\n\"Words are birds\" is a \u2014",
    options: [
      { id: "a", text: "metaphor" },
      { id: "b", text: "paradox only" },
      { id: "c", text: "pun" },
      { id: "d", text: "simile (has like)" }
    ],
    answerId: "a",
    explanation: "'Words are birds' says words are birds without 'like' or 'as', so it is a metaphor. 'Simile (has like)' is tempting because it is also a comparison, but this line does not use 'like'.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q20",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nAccording to the poem, once words are released they \u2014",
    options: [
      { id: "a", text: "become cups" },
      { id: "b", text: "always return politely" },
      { id: "c", text: "turn into streets" },
      { id: "d", text: "will not return to your hand" }
    ],
    answerId: "d",
    explanation: "The poem says released words 'will not return to your hand'. 'Always return politely' is tempting because birds can fly home, but the poem says the opposite: once let go, words stay gone.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q21",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe speaker advises you to speak as if the air \u2014",
    options: [
      { id: "a", text: "were a mirror" },
      { id: "b", text: "were listening for something true" },
      { id: "c", text: "were empty of meaning" },
      { id: "d", text: "were angry" }
    ],
    answerId: "b",
    explanation: "The last two lines say to speak 'as if the air were listening for something true'. 'Were empty of meaning' is tempting because air is literally empty, but the poem imagines the air as an attentive listener.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q22",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe mood of the poem is best called \u2014",
    options: [
      { id: "a", text: "hilarious" },
      { id: "b", text: "reflective and cautionary" },
      { id: "c", text: "indifferent to language" },
      { id: "d", text: "vengeful" }
    ],
    answerId: "b",
    explanation: "The poem calmly advises care with silence and with words, so its mood is reflective and cautionary. 'Indifferent to language' is tempting because the poem praises quiet, but it cares deeply about how we use words.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q23",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich theme fits Passage P1 best?",
    options: [
      { id: "a", text: "Clouds fear verandahs" },
      { id: "b", text: "Towns invent rain" },
      { id: "c", text: "Nature's force can make old wisdom feel newly true" },
      { id: "d", text: "Exams matter more than weather" }
    ],
    answerId: "c",
    explanation: "The storm makes Meera feel her grandmother's old proverb is a real fact, so nature's force makes old wisdom feel newly true. 'Towns invent rain' is tempting because the proverb mentions towns, but it says rain is older than towns, not made by them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-a-q24",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nWhich theme fits Passage P2 best?",
    options: [
      { id: "a", text: "Projects should be abandoned" },
      { id: "b", text: "Dust is dangerous snow" },
      { id: "c", text: "Quiet places can change our sense of time and connection" },
      { id: "d", text: "Horns improve reading" }
    ],
    answerId: "c",
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
      { id: "b", text: "introduce a cricket coach" },
      { id: "c", text: "describe desert heat only" },
      { id: "d", text: "prove the school is closed forever" }
    ],
    answerId: "a",
    explanation: "The school verandah is an everyday place, which makes the sudden change in weather feel real and close. 'Prove the school is closed forever' is tempting because the class is standing outside, but nothing suggests the school has closed.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q02",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\n\"leaning on the western hills\" makes the cloud seem \u2014",
    options: [
      { id: "a", text: "tiny as a speck" },
      { id: "b", text: "heavy and almost physical" },
      { id: "c", text: "underground" },
      { id: "d", text: "made of paper" }
    ],
    answerId: "b",
    explanation: "'Leaning' makes the cloud seem heavy, as if it had a body resting on the hills. 'Tiny as a speck' is tempting because clouds look small far away, but something leaning on hills must be large and weighty.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q03",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe narrator's point of view is \u2014",
    options: [
      { id: "a", text: "first-person Meera saying \"I\"" },
      { id: "b", text: "third-person, following Meera" },
      { id: "c", text: "second-person \"you\" throughout" },
      { id: "d", text: "no clear perspective" }
    ],
    answerId: "b",
    explanation: "The narrator says 'Meera stood…', using her name and 'she', so it is third person following Meera. 'First-person Meera saying \"I\"' is tempting because we share her thoughts, but she never says 'I'.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q04",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich word best describes the rain's arrival?",
    options: [
      { id: "a", text: "absent" },
      { id: "b", text: "gradual drizzle only" },
      { id: "c", text: "sudden / overwhelming" },
      { id: "d", text: "snow-like" }
    ],
    answerId: "c",
    explanation: "The sky 'opened all at once' and the pitch flooded 'within minutes', so the arrival was sudden and overwhelming. 'Gradual drizzle only' is tempting because the monsoon first came as a rumour, but when the rain itself came, it came all at once.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q05",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhy might the proverb feel like \"a fact standing in the mud\"?",
    options: [
      { id: "a", text: "Experience makes the saying concrete and undeniable" },
      { id: "b", text: "Meera wrote the proverb that day" },
      { id: "c", text: "Mud always contains books" },
      { id: "d", text: "Proverbs are illegal" }
    ],
    answerId: "a",
    explanation: "Standing in the flooded mud, Meera feels the saying come true, so it becomes concrete and undeniable. 'Meera wrote the proverb that day' is tempting because she thinks about it then, but the saying is her grandmother's.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q06",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe travel diary date \"1924\" mainly emphasises \u2014",
    options: [
      { id: "a", text: "historical distance / the past's nearness in objects" },
      { id: "b", text: "a bus number" },
      { id: "c", text: "Arun's birth year" },
      { id: "d", text: "exam year" }
    ],
    answerId: "a",
    explanation: "A diary from 1924 is a century old, yet Arun can hold it, so the date shows both how far away the past is and how near it feels through objects. 'Arun's birth year' is tempting because it is a year, but a boy doing a school project could not have been born in 1924.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q07",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\n\"The books did not shout; they waited\" contrasts books with \u2014",
    options: [
      { id: "a", text: "noisy modern life (and impatient demands)" },
      { id: "b", text: "scooters that read" },
      { id: "c", text: "the marigold only" },
      { id: "d", text: "other silent books" }
    ],
    answerId: "a",
    explanation: "Books that 'did not shout' and 'waited' contrast with the noisy, impatient world outside, like the scooters arguing with horns. 'Other silent books' is tempting because books appear on both sides, but the contrast needs something noisy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q08",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nArun's closing the book \"gently\" shows \u2014",
    options: [
      { id: "a", text: "boredom only" },
      { id: "b", text: "theft" },
      { id: "c", text: "respect and care" },
      { id: "d", text: "anger" }
    ],
    answerId: "c",
    explanation: "Closing the book gently shows respect and care for something old and fragile. 'Boredom only' is tempting because he is leaving the book, but he stayed for a feeling, and his gentleness shows he valued it.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q09",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe pressed flower is a symbol of \u2014",
    options: [
      { id: "a", text: "future traffic" },
      { id: "b", text: "sports victory" },
      { id: "c", text: "school fees" },
      { id: "d", text: "preserved memory" }
    ],
    answerId: "d",
    explanation: "A pressed flower keeps a moment from the past alive inside a book, so it symbolises preserved memory. 'Future traffic' is tempting because the passage ends with scooters outside, but the flower belongs to the old diary, not to the street.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q10",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\n\"Inside, time had a different speed\" is best read as \u2014",
    options: [
      { id: "a", text: "a broken clock on the wall only" },
      { id: "b", text: "subjective experience of slower, deeper time" },
      { id: "c", text: "a bus schedule error" },
      { id: "d", text: "time travel science" }
    ],
    answerId: "b",
    explanation: "Time does not really change speed; inside the calm library it simply feels slower and deeper. 'A broken clock on the wall only' is tempting if you read the line literally, but no clock is mentioned; the line describes a feeling.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q11",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe imperative \"Hold\" and \"Speak\" show the poem is \u2014",
    options: [
      { id: "a", text: "narrating a cricket match" },
      { id: "b", text: "listing grocery items" },
      { id: "c", text: "addressing the reader with advice" },
      { id: "d", text: "a weather report" }
    ],
    answerId: "c",
    explanation: "'Hold' and 'Speak' are commands addressed to the reader, so the poem gives advice. 'A weather report' is tempting because the poem mentions air, but it gives instructions about speaking, not information about weather.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q12",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nSpill the quiet \"on the street\" would mean \u2014",
    options: [
      { id: "a", text: "losing or wasting silence in public noise" },
      { id: "b", text: "painting roads" },
      { id: "c", text: "watering plants" },
      { id: "d", text: "buying cups" }
    ],
    answerId: "a",
    explanation: "Spilling quiet on the street means wasting the silence you carried by letting it pour into public noise. 'Painting roads' is tempting if you read 'spill on the street' literally, but the poem is talking about quiet, not paint.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q13",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nComparing words to birds that won't return warns that speech is \u2014",
    options: [
      { id: "a", text: "always kind" },
      { id: "b", text: "never heard" },
      { id: "c", text: "irreversible in effect" },
      { id: "d", text: "only for birds" }
    ],
    answerId: "c",
    explanation: "Birds that won't come back show that spoken words cannot be taken back. 'Never heard' is tempting because the words fly away, but the poem says they don't return, not that no one hears them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q14",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\n\"the air were listening\" uses subjunctive mood to \u2014",
    options: [
      { id: "a", text: "count syllables only" },
      { id: "b", text: "imagine an ideal attentive audience" },
      { id: "c", text: "state a scientific fact about nitrogen" },
      { id: "d", text: "describe rain" }
    ],
    answerId: "b",
    explanation: "'As if the air were listening' imagines an ideal, attentive listener for our words. 'State a scientific fact about nitrogen' is tempting because air is mentioned, but 'as if… were' signals an imagined situation, not a fact.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q15",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe poem's central message is closest to \u2014",
    options: [
      { id: "a", text: "never speak" },
      { id: "b", text: "value silence and speak truthfully" },
      { id: "c", text: "collect cups" },
      { id: "d", text: "shout always" }
    ],
    answerId: "b",
    explanation: "The poem asks us to guard quiet and to speak as if something true were wanted, so it values silence and truthful speech. 'Never speak' is tempting because the poem praises quiet, but its last lines tell us how to speak, not to stay silent.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q16",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nWhich quotation best supports the idea that rain transforms the ordinary playground?",
    options: [
      { id: "a", text: "\"western hills\"" },
      { id: "b", text: "\"school verandah\"" },
      { id: "c", text: "\"It will pass\"" },
      { id: "d", text: "\"the cricket pitch was a shallow lake\"" }
    ],
    answerId: "d",
    explanation: "\"The cricket pitch was a shallow lake\" shows the rain turning a familiar part of the playground into something new. \"School verandah\" is tempting because it is also at school, but it only says where the coolness was felt; it shows no change.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q17",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nWhich quotation best shows Arun's changed purpose for staying?",
    options: [
      { id: "a", text: "\"stayed for a feeling he could not name\"" },
      { id: "b", text: "\"pressed marigold\"" },
      { id: "c", text: "\"1924\"" },
      { id: "d", text: "\"scooters argued with horns\"" }
    ],
    answerId: "a",
    explanation: "'Stayed for a feeling he could not name' shows that his reason for staying changed from the project to a feeling. '\"Pressed marigold\"' is tempting because it is a moving detail, but it does not tell us why he stayed.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q18",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nThe phrase \"older than towns\" suggests nature's scale is \u2014",
    options: [
      { id: "a", text: "invented by students" },
      { id: "b", text: "exactly one year" },
      { id: "c", text: "smaller than a verandah" },
      { id: "d", text: "greater / deeper than human settlements" }
    ],
    answerId: "d",
    explanation: "Rain with a memory 'older than towns' suggests nature is far older and deeper than human settlements. 'Smaller than a verandah' is tempting because the verandah is mentioned, but 'older than' makes nature greater, not smaller.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q19",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nIrony in the scene includes \u2014",
    options: [
      { id: "a", text: "dust that is literally snow" },
      { id: "b", text: "a diary that shouts" },
      { id: "c", text: "Arun finishing the journey alone in the text" },
      { id: "d", text: "a quiet past message amid a noisy present outside" }
    ],
    answerId: "d",
    explanation: "The note urges company while the modern street is frantic and isolating in pace.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q20",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nLine breaks after \"released\" and before \"they will not return\" emphasise \u2014",
    options: [
      { id: "a", text: "rhyme scheme AABB" },
      { id: "b", text: "the separation between speaking and consequence" },
      { id: "c", text: "a shopping list" },
      { id: "d", text: "metre of a sonnet only" }
    ],
    answerId: "b",
    explanation: "Breaking the line after 'released' makes us pause, separating the act of speaking from its result on the next line. 'Rhyme scheme AABB' is tempting because poems often rhyme, but these lines do not rhyme in pairs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q21",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nMeera is characterised as someone who \u2014",
    options: [
      { id: "a", text: "sleeps through rain" },
      { id: "b", text: "hates proverbs always" },
      { id: "c", text: "organises cricket" },
      { id: "d", text: "notices sensory detail and connects it to inherited wisdom" }
    ],
    answerId: "d",
    explanation: "Meera watches the cloud, smell and rain closely and links them to her grandmother's saying. 'Hates proverbs always' is tempting because the proverb once felt like decoration to her, but now it feels like a fact to her, which shows respect, not hatred.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q22",
    prompt: "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nThe library setting functions as \u2014",
    options: [
      { id: "a", text: "a sports stadium" },
      { id: "b", text: "a scooter garage" },
      { id: "c", text: "a refuge where time and attention deepen" },
      { id: "d", text: "a closed empty void with no books" }
    ],
    answerId: "c",
    explanation: "Dust, shafts of light, waiting books = contemplative refuge.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q23",
    prompt: "Hold the quiet like a cup;\ndo not spill it on the street.\nWords are birds: once released\nthey will not return to your hand.\nSpeak, then, as if the air\nwere listening for something true.\n\nThe cup and birds images together teach \u2014",
    options: [
      { id: "a", text: "count birds in cups" },
      { id: "b", text: "never use metaphors" },
      { id: "c", text: "drink quietly then shout" },
      { id: "d", text: "guard silence; release words carefully" }
    ],
    answerId: "d",
    explanation: "The cup teaches us to guard silence and the birds teach us to release words carefully. 'Never use metaphors' is tempting because both lines are metaphors, but the poem uses them to teach care with speech, not to reject them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch01-b-q24",
    prompt: "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust rising before a single drop fell. Meera stood with her class under the corrugated roof and watched the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, and the peepal tree shook as though laughing. Meera thought of her grandmother's saying \u2014 that rain has a memory older than towns \u2014 and for once the proverb did not feel like decoration. It felt like a fact standing in the mud beside her.\n\nIn the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, \"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. Outside, scooters argued with horns. Inside, time had a different speed \u2014 the speed of pages turning when no one is late.\n\nA similarity between the two prose passages is that both \u2014",
    options: [
      { id: "a", text: "are about cricket scores" },
      { id: "b", text: "reject the past" },
      { id: "c", text: "use vivid imagery to show how place shapes feeling" },
      { id: "d", text: "occur in outer space" }
    ],
    answerId: "c",
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
