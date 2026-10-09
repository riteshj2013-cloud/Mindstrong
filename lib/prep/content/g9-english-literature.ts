import type { ChapterDef, PrepQuestion } from "../types";

/** Literature MCQ - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-eng-ch01-a-q01",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nWhy does Riya pause at the library door?",
    options: [
      { id: "a", text: "She feels conflicted about returning the journal" },
      { id: "b", text: "She is angry at the librarian" },
      { id: "c", text: "She forgot her keys" },
      { id: "d", text: "She is lost" }
    ],
    answerId: "a",
    explanation: "Her fingers tighten on the cover even though she promised to return it — hesitation and conflict.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q02",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nThe dust motes in the light mainly create a sense of…",
    options: [
      { id: "a", text: "danger" },
      { id: "b", text: "atmosphere / mood" },
      { id: "c", text: "humour" },
      { id: "d", text: "anger" }
    ],
    answerId: "b",
    explanation: "Sensory detail sets a quiet, reflective atmosphere rather than advancing plot alone.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q03",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nThe librarian’s line “Some stories wait for the right reader” suggests…",
    options: [
      { id: "a", text: "Riya should throw the letter away" },
      { id: "b", text: "books expire quickly" },
      { id: "c", text: "meaning depends on who is ready to receive it" },
      { id: "d", text: "librarians dislike children" }
    ],
    answerId: "c",
    explanation: "The quote implies timing and readiness matter for a story’s impact.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q04",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nWhat is inside the journal besides recipes?",
    options: [
      { id: "a", text: "Money" },
      { id: "b", text: "A train ticket" },
      { id: "c", text: "A map" },
      { id: "d", text: "A never-sent letter" }
    ],
    answerId: "d",
    explanation: "The passage explicitly mentions a letter never sent.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q05",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nRiya’s final decision shows she…",
    options: [
      { id: "a", text: "chooses to engage with the story herself" },
      { id: "b", text: "returns the journal immediately without thought" },
      { id: "c", text: "leaves the library forever" },
      { id: "d", text: "rejects her grandmother" }
    ],
    answerId: "a",
    explanation: "She decides she might be the right reader — engagement, not rejection.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q06",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nThe phrase “worn cover” implies the journal is…",
    options: [
      { id: "a", text: "brand new" },
      { id: "b", text: "well used / old" },
      { id: "c", text: "waterproof" },
      { id: "d", text: "empty" }
    ],
    answerId: "b",
    explanation: "“Worn” signals long use and age.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q07",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nWhich best states a theme of the passage?",
    options: [
      { id: "a", text: "Promises never matter" },
      { id: "b", text: "Cooking is difficult" },
      { id: "c", text: "Personal history can wait until someone is ready to face it" },
      { id: "d", text: "Libraries are dusty" }
    ],
    answerId: "c",
    explanation: "The delayed letter and “right reader” point to readiness with family stories.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q08",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nThe narrator’s tone toward Riya is mainly…",
    options: [
      { id: "a", text: "furious" },
      { id: "b", text: "indifferent" },
      { id: "c", text: "mocking" },
      { id: "d", text: "sympathetic / gentle" }
    ],
    answerId: "d",
    explanation: "Close attention to her hesitation and sensory world feels gentle, not mocking.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q09",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nWhy does Arjun turn sideways on the path?",
    options: [
      { id: "a", text: "The path has become very narrow" },
      { id: "b", text: "He sees a train" },
      { id: "c", text: "He dropped his bottle" },
      { id: "d", text: "He is dancing" }
    ],
    answerId: "a",
    explanation: "The path “narrowed until Arjun had to turn sideways.”",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q10",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\n“The valley looked like a crumpled green map” is an example of…",
    options: [
      { id: "a", text: "hyperbole" },
      { id: "b", text: "simile" },
      { id: "c", text: "metaphor" },
      { id: "d", text: "alliteration" }
    ],
    answerId: "b",
    explanation: "“Like” signals a simile comparing valley to a map.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q11",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nArjun’s sister’s dare mainly adds…",
    options: [
      { id: "a", text: "a villain" },
      { id: "b", text: "a recipe" },
      { id: "c", text: "a goal and motivation" },
      { id: "d", text: "a weather report" }
    ],
    answerId: "c",
    explanation: "The noon deadline gives purpose to the climb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q12",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nThe goat’s calm eyes, “as if it owned the cliff,” suggest…",
    options: [
      { id: "a", text: "Arjun should go home" },
      { id: "b", text: "the cliff is artificial" },
      { id: "c", text: "the goat is dangerous" },
      { id: "d", text: "humorous confidence / quiet mastery of the place" }
    ],
    answerId: "d",
    explanation: "The playful personification makes the goat seem serenely in charge.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q13",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nArjun laughs “surprising himself,” which shows…",
    options: [
      { id: "a", text: "he is usually solemn under pressure" },
      { id: "b", text: "he always laughs on cliffs" },
      { id: "c", text: "he fears goats" },
      { id: "d", text: "he finished the climb" }
    ],
    answerId: "a",
    explanation: "Surprise at his own laugh implies it is unusual for him in that moment.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q14",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nWhich detail shows risk without stating “danger” directly?",
    options: [
      { id: "a", text: "Half-full water bottle" },
      { id: "b", text: "Narrow path and wind on a cliff" },
      { id: "c", text: "Green map" },
      { id: "d", text: "Noon dare alone" }
    ],
    answerId: "b",
    explanation: "Narrow cliff path and wind imply peril through setting.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q15",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nThe overall mood of the climb passage is…",
    options: [
      { id: "a", text: "hopeless" },
      { id: "b", text: "sleepy" },
      { id: "c", text: "tense but determined" },
      { id: "d", text: "purely comic" }
    ],
    answerId: "c",
    explanation: "Wind, narrow path, and dare create tension; the laugh and next step show resolve.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q16",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nArjun’s next step at the end emphasises…",
    options: [
      { id: "a", text: "returning the goat" },
      { id: "b", text: "reading a map" },
      { id: "c", text: "giving up" },
      { id: "d", text: "continuing despite difficulty" }
    ],
    answerId: "d",
    explanation: "After laughing, he takes the next step — persistence.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q17",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nMira’s marigold is called “stubborn,” which suggests…",
    options: [
      { id: "a", text: "it has been hard to keep going" },
      { id: "b", text: "it is artificial" },
      { id: "c", text: "judges dislike flowers" },
      { id: "d", text: "it grows easily" }
    ],
    answerId: "a",
    explanation: "“Stubborn” personifies difficulty in the plant’s survival/growth.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q18",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\n“Cheers rising like bright balloons” is…",
    options: [
      { id: "a", text: "metaphor" },
      { id: "b", text: "simile" },
      { id: "c", text: "irony" },
      { id: "d", text: "pun" }
    ],
    answerId: "b",
    explanation: "“Like” compares cheers to balloons — simile.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q19",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nWhy do the curling edges of Mira’s board matter?",
    options: [
      { id: "a", text: "They are unrelated decoration" },
      { id: "b", text: "They prove she cheated" },
      { id: "c", text: "They hint at nervousness / imperfect preparation under pressure" },
      { id: "d", text: "They show rain inside" }
    ],
    answerId: "c",
    explanation: "Curling edges are a small imperfect detail that humanises her stress.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q20",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nThe new petal is described as “a small, quiet vote of confidence.” This is mainly…",
    options: [
      { id: "a", text: "a judge’s scorecard" },
      { id: "b", text: "a football chant" },
      { id: "c", text: "literal election news" },
      { id: "d", text: "figurative encouragement from the plant’s progress" }
    ],
    answerId: "d",
    explanation: "The plant cannot vote; the image figuratively reassures Mira.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q21",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nContrast between Mira and her classmates highlights…",
    options: [
      { id: "a", text: "she prefers quiet, patient work to the noisy rush of the field" },
      { id: "b", text: "she hates sports" },
      { id: "c", text: "nobody likes science" },
      { id: "d", text: "the courtyard is empty" }
    ],
    answerId: "a",
    explanation: "They rush to football; she tends a plant and a project — different energies.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q22",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nSix weeks of measuring plant growth shows Mira is…",
    options: [
      { id: "a", text: "impatient" },
      { id: "b", text: "persistent and methodical" },
      { id: "c", text: "uninterested" },
      { id: "d", text: "afraid of judges" }
    ],
    answerId: "b",
    explanation: "Long, careful measurement signals persistence.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q23",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nA reasonable theme is…",
    options: [
      { id: "a", text: "Flowers never bloom" },
      { id: "b", text: "Judges are always unfair" },
      { id: "c", text: "Quiet dedication can be its own kind of courage" },
      { id: "d", text: "Football is better than science" }
    ],
    answerId: "c",
    explanation: "Her steady care and the petal’s “vote” support quiet courage.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-a-q24",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nThe author’s purpose is mainly to…",
    options: [
      { id: "a", text: "teach photosynthesis formulas" },
      { id: "b", text: "advertise football" },
      { id: "c", text: "list science fair rules" },
      { id: "d", text: "portray a character’s quiet resolve before judgment" }
    ],
    answerId: "d",
    explanation: "Narrative focus is Mira’s feelings and resolve, not a rulebook.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-eng-ch01-b-q01",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nWhich sensory detail appears in the library scene?",
    options: [
      { id: "a", text: "The smell of paper" },
      { id: "b", text: "The taste of salt" },
      { id: "c", text: "A siren" },
      { id: "d", text: "Falling snow" }
    ],
    answerId: "a",
    explanation: "Riya “breathed in the smell of paper.”",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q02",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nThe journal mainly symbolises…",
    options: [
      { id: "a", text: "forgotten family connection / unfinished communication" },
      { id: "b", text: "a school textbook" },
      { id: "c", text: "money problems" },
      { id: "d", text: "a sports trophy" }
    ],
    answerId: "a",
    explanation: "Recipes plus an unsent letter point to family memory and unfinished words.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q03",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nRiya’s tightened fingers are an example of…",
    options: [
      { id: "a", text: "showing emotion through action (show, don’t tell)" },
      { id: "b", text: "a simile" },
      { id: "c", text: "direct definition of fear" },
      { id: "d", text: "comic relief" }
    ],
    answerId: "a",
    explanation: "Body language shows conflict without naming it.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q04",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\n“Late light” most nearly suggests…",
    options: [
      { id: "a", text: "early morning" },
      { id: "b", text: "end of day / fading afternoon" },
      { id: "c", text: "midnight" },
      { id: "d", text: "neon signs" }
    ],
    answerId: "b",
    explanation: "Late light implies late day.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q05",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nThe passage is written in…",
    options: [
      { id: "a", text: "first person (“I”)" },
      { id: "b", text: "second person (“you”)" },
      { id: "c", text: "third person limited around Riya" },
      { id: "d", text: "only dialogue" }
    ],
    answerId: "c",
    explanation: "Narration follows Riya’s actions and thoughts from outside using “she.”",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q06",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nWhich inference is best supported?",
    options: [
      { id: "a", text: "Riya has never met her grandmother" },
      { id: "b", text: "The letter may matter emotionally to Riya’s family story" },
      { id: "c", text: "The librarian stole the journal" },
      { id: "d", text: "The library is closing forever" }
    ],
    answerId: "b",
    explanation: "An unsent letter kept with recipes implies emotional weight.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q07",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nThe crumpled green map image primarily helps the reader…",
    options: [
      { id: "a", text: "see the valley’s textured distance from above" },
      { id: "b", text: "learn cartography" },
      { id: "c", text: "meet Arjun’s sister" },
      { id: "d", text: "count goats" }
    ],
    answerId: "a",
    explanation: "The simile makes the view vivid from the height of the path.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q08",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nHalf-full water is a detail that…",
    options: [
      { id: "a", text: "proves he will fail" },
      { id: "b", text: "quietly marks limited resources on the climb" },
      { id: "c", text: "means he just started" },
      { id: "d", text: "is only about thirst advertising" }
    ],
    answerId: "b",
    explanation: "It notes constraint without melodrama.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q09",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nArjun’s laugh functions as…",
    options: [
      { id: "a", text: "a release of tension" },
      { id: "b", text: "proof he quit" },
      { id: "c", text: "anger at the goat" },
      { id: "d", text: "the noon signal" }
    ],
    answerId: "a",
    explanation: "Laughing on a hard path suggests tension easing into courage.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q10",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nThe dare to reach the ridge before noon is an example of…",
    options: [
      { id: "a", text: "external motivation / goal" },
      { id: "b", text: "flashback" },
      { id: "c", text: "metaphor for sleep" },
      { id: "d", text: "alliteration" }
    ],
    answerId: "a",
    explanation: "A time-bound challenge from someone else drives action.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q11",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nWhich word best describes the goat’s role?",
    options: [
      { id: "a", text: "antagonist villain" },
      { id: "b", text: "brief comic witness" },
      { id: "c", text: "narrator" },
      { id: "d", text: "mapmaker" }
    ],
    answerId: "b",
    explanation: "The calm, “owning” goat adds a wry beat, not a true villain arc.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q12",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\n“Wind tugged at his jacket” personifies the wind by…",
    options: [
      { id: "a", text: "giving it a human-like action (tugging)" },
      { id: "b", text: "measuring speed" },
      { id: "c", text: "naming a storm" },
      { id: "d", text: "using a simile with “like”" }
    ],
    answerId: "a",
    explanation: "Wind cannot literally tug as a person does; the verb personifies it.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q13",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nMira’s project duration (six weeks) contrasts with…",
    options: [
      { id: "a", text: "the classmates’ momentary rush to the field" },
      { id: "b", text: "the judges’ absence" },
      { id: "c", text: "the marigold’s colour only" },
      { id: "d", text: "a football rulebook" }
    ],
    answerId: "a",
    explanation: "Long patience vs. quick rush sharpens character contrast.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q14",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nThe curling board edges mainly make Mira seem…",
    options: [
      { id: "a", text: "perfectly polished" },
      { id: "b", text: "human and a little vulnerable" },
      { id: "c", text: "dishonest" },
      { id: "d", text: "finished years ago" }
    ],
    answerId: "b",
    explanation: "Imperfection under pressure invites empathy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q15",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nCalling cheers “bright balloons” appeals mainly to…",
    options: [
      { id: "a", text: "sound transformed into a visual image" },
      { id: "b", text: "taste" },
      { id: "c", text: "touch of rubber only" },
      { id: "d", text: "smell" }
    ],
    answerId: "a",
    explanation: "Sound (cheers) is pictured as bright rising balloons — synesthetic-ish imagery.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q16",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nThe marigold’s new petal overnight suggests…",
    options: [
      { id: "a", text: "failure of the experiment" },
      { id: "b", text: "incremental progress worth noticing" },
      { id: "c", text: "judges cancelled" },
      { id: "d", text: "Mira stopped watering" }
    ],
    answerId: "b",
    explanation: "One new petal is small growth — progress.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q17",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nMira’s attitude is best described as…",
    options: [
      { id: "a", text: "quietly hopeful" },
      { id: "b", text: "boastful" },
      { id: "c", text: "furious" },
      { id: "d", text: "indifferent" }
    ],
    answerId: "a",
    explanation: "Careful work plus reading the petal as confidence shows quiet hope.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q18",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nWhich title best fits the Mira passage?",
    options: [
      { id: "a", text: "The Loudest Cheer" },
      { id: "b", text: "A Quiet Petal Before the Judges" },
      { id: "c", text: "Football Rules" },
      { id: "d", text: "How to Build a Board Overnight" }
    ],
    answerId: "b",
    explanation: "It centres the soft plant image and the coming judgment.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q19",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nThe word “motes” in “dust motes” most nearly means…",
    options: [
      { id: "a", text: "large stones" },
      { id: "b", text: "tiny particles" },
      { id: "c", text: "books" },
      { id: "d", text: "windows" }
    ],
    answerId: "b",
    explanation: "Dust motes are tiny floating particles.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q20",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nThe phrase “crumpled green map” emphasises the valley’s…",
    options: [
      { id: "a", text: "smooth flatness" },
      { id: "b", text: "folded, uneven green expanse from above" },
      { id: "c", text: "exact road names" },
      { id: "d", text: "lack of colour" }
    ],
    answerId: "b",
    explanation: "Crumpled suggests uneven folds; green paints vegetation.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q21",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nThe science fair board “leaned against the wall” suggests Mira is…",
    options: [
      { id: "a", text: "still waiting / not yet presenting" },
      { id: "b", text: "already gone home" },
      { id: "c", text: "playing football" },
      { id: "d", text: "hiding the board forever" }
    ],
    answerId: "a",
    explanation: "It waits with her — not yet in front of judges.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q22",
    prompt: "Read:\n\n\"Riya paused at the old library door. Dust motes swam in a shaft of late light. She had promised herself she would return the borrowed journal, yet her fingers tightened on its worn cover. Inside were her grandmother’s recipes — and a letter never sent. “Some stories,” the librarian had once said, “wait for the right reader.” Riya breathed in the smell of paper and decided the right reader might be her.\"\n\nWhich claim is NOT supported by the text?",
    options: [
      { id: "a", text: "Riya holds a journal with family material" },
      { id: "b", text: "A librarian once spoke about stories and readers" },
      { id: "c", text: "Riya’s grandmother emailed her that morning" },
      { id: "d", text: "Riya notices the smell of paper" }
    ],
    answerId: "c",
    explanation: "No email is mentioned; the letter is unsent and in the journal.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q23",
    prompt: "Read:\n\n\"The mountain path narrowed until Arjun had to turn sideways. Wind tugged at his jacket. Below, the valley looked like a crumpled green map. He checked his water bottle — half full — and thought of his sister’s dare: reach the ridge before noon. A goat watched him with calm eyes, as if it owned the cliff. Arjun laughed, surprising himself, and took the next step.\"\n\nArjun’s water bottle being half full is an example of…",
    options: [
      { id: "a", text: "foreshadowing certain death" },
      { id: "b", text: "a concrete detail that grounds the scene" },
      { id: "c", text: "a metaphor for maps" },
      { id: "d", text: "hyperbole" }
    ],
    answerId: "b",
    explanation: "It is a literal, grounding detail (not certain doom).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch01-b-q24",
    prompt: "Read:\n\n\"In the school courtyard, Mira watered a stubborn marigold. Classmates rushed past toward the football field, their cheers rising like bright balloons. Mira’s science fair board leaned against the wall, edges curling. She had measured plant growth for six weeks. Today the judges would come. The marigold, she noticed, had opened one new petal overnight — a small, quiet vote of confidence.\"\n\nThe passage invites the reader to value…",
    options: [
      { id: "a", text: "patience and careful observation" },
      { id: "b", text: "only winning trophies" },
      { id: "c", text: "ignoring plants" },
      { id: "d", text: "rushing always" }
    ],
    answerId: "a",
    explanation: "Six weeks of data and noticing one petal celebrate patience.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "📖",
    title: "Read like a critic",
    body: ["Plot is the surface; theme, tone and craft sit underneath.", "Every answer should point back to a line in the passage.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Today we practise literature multiple choice with evidence.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Theme", reveal: "Big idea built from evidence", emoji: "💡" },
      { label: "Tone", reveal: "Writer’s attitude in word choice", emoji: "🎚️" },
      { label: "Inference", reveal: "Logical reading between the lines", emoji: "🔎" },
      { label: "Figurative language", reveal: "Simile, metaphor, personification", emoji: "✨" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Evidence first",
    visual: "sentence",
    speak: "Read the question, scan for a matching line, then choose.",
    steps: ["Read the question stem", "Underline a key phrase in the passage", "Eliminate options the text does not support", "Pick the best-supported answer"],
    punchline: "Evidence beats guesswork.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "“Her smile was a lighthouse.” This is a…",
    options: [
        { id: "a", text: "simile" },
        { id: "b", text: "metaphor" },
        { id: "c", text: "alliteration" },
        { id: "d", text: "irony" }
    ],
    answerId: "b",
    why: "Was (without like/as) signals metaphor.",
    visual: "sentence",
    speak: "“Her smile was a lighthouse.” This is a…",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Evidence reader!",
    bullets: ["Quote the line in your head", "Tone lives in diction", "Theme ≠ one detail", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Evidence reader! You are ready for the practice sets.",
  },
];

export const g9EnglishLiterature: ChapterDef = {
  id: "literature-mcq",
  title: "Literature MCQ",
  emoji: "📖",
  blurb: "Theme, tone, inference & craft",
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

export const g9EnglishLiteratureQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
