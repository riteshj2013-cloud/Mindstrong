import type { ChapterDef, PrepQuestion } from "../types";

/** My Body - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-sci-body-a-q01",
    prompt: "We see with our\u2026",
    options: [
      { id: "a", text: "ears" },
      { id: "b", text: "eyes" },
      { id: "c", text: "nose" },
      { id: "d", text: "tongue" }
    ],
    answerId: "b",
    explanation: "We see with our eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q02",
    prompt: "We hear with our\u2026",
    options: [
      { id: "a", text: "eyes" },
      { id: "b", text: "ears" },
      { id: "c", text: "hands" },
      { id: "d", text: "feet" }
    ],
    answerId: "b",
    explanation: "We hear with our ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q03",
    prompt: "We smell with our\u2026",
    options: [
      { id: "a", text: "nose" },
      { id: "b", text: "eyes" },
      { id: "c", text: "ears" },
      { id: "d", text: "hair" }
    ],
    answerId: "a",
    explanation: "We smell with our nose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q04",
    prompt: "We taste with our\u2026",
    options: [
      { id: "a", text: "tongue" },
      { id: "b", text: "elbow" },
      { id: "c", text: "knee" },
      { id: "d", text: "ear" }
    ],
    answerId: "a",
    explanation: "We taste with our tongue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q05",
    prompt: "We have how many hands?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "We have 2 hands.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q06",
    prompt: "We walk with our\u2026",
    options: [
      { id: "a", text: "ears" },
      { id: "b", text: "feet" },
      { id: "c", text: "nose" },
      { id: "d", text: "hair" }
    ],
    answerId: "b",
    explanation: "We walk with our feet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q07",
    prompt: "Brush your ___ every day.",
    options: [
      { id: "a", text: "teeth" },
      { id: "b", text: "shoes only" },
      { id: "c", text: "books" },
      { id: "d", text: "walls" }
    ],
    answerId: "a",
    explanation: "Brush your teeth every day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q08",
    prompt: "We breathe air in through our\u2026",
    options: [
      { id: "a", text: "nose / mouth" },
      { id: "b", text: "toes" },
      { id: "c", text: "elbows" },
      { id: "d", text: "hair" }
    ],
    answerId: "a",
    explanation: "We breathe through nose or mouth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q09",
    prompt: "Wash your hands ___ eating.",
    options: [
      { id: "a", text: "before" },
      { id: "b", text: "never" },
      { id: "c", text: "only once a year" },
      { id: "d", text: "with paint" }
    ],
    answerId: "a",
    explanation: "Wash hands before eating.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q10",
    prompt: "Our heart is inside our\u2026",
    options: [
      { id: "a", text: "chest" },
      { id: "b", text: "shoe" },
      { id: "c", text: "hat" },
      { id: "d", text: "bag" }
    ],
    answerId: "a",
    explanation: "The heart is in the chest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q11",
    prompt: "We have how many eyes?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "Most people have 2 eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q12",
    prompt: "Skin helps us to\u2026",
    options: [
      { id: "a", text: "feel touch" },
      { id: "b", text: "fly" },
      { id: "c", text: "bark" },
      { id: "d", text: "lay eggs" }
    ],
    answerId: "a",
    explanation: "Skin helps us feel touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q13",
    prompt: "Exercise makes our body\u2026",
    options: [
      { id: "a", text: "stronger" },
      { id: "b", text: "weaker always" },
      { id: "c", text: "made of stone" },
      { id: "d", text: "invisible" }
    ],
    answerId: "a",
    explanation: "Exercise helps us stay strong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q14",
    prompt: "We should sleep at\u2026",
    options: [
      { id: "a", text: "night / rest time" },
      { id: "b", text: "never" },
      { id: "c", text: "only in class always" },
      { id: "d", text: "in the rain without care" }
    ],
    answerId: "a",
    explanation: "Sleep helps the body rest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q15",
    prompt: "Fingers are on our\u2026",
    options: [
      { id: "a", text: "hands" },
      { id: "b", text: "ears" },
      { id: "c", text: "nose tip only" },
      { id: "d", text: "knees only" }
    ],
    answerId: "a",
    explanation: "Fingers are on our hands.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q16",
    prompt: "Which helps us chew food?",
    options: [
      { id: "a", text: "teeth" },
      { id: "b", text: "hair" },
      { id: "c", text: "nails only" },
      { id: "d", text: "eyelashes" }
    ],
    answerId: "a",
    explanation: "Teeth help us chew food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-sci-body-b-q01",
    prompt: "We clap with our\u2026",
    options: [
      { id: "a", text: "hands" },
      { id: "b", text: "ears" },
      { id: "c", text: "nose" },
      { id: "d", text: "hair" }
    ],
    answerId: "a",
    explanation: "We clap with our hands.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q02",
    prompt: "Sunglasses protect our\u2026",
    options: [
      { id: "a", text: "eyes" },
      { id: "b", text: "toes" },
      { id: "c", text: "elbows" },
      { id: "d", text: "knees" }
    ],
    answerId: "a",
    explanation: "Sunglasses protect eyes from bright sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q03",
    prompt: "A loud sound is heard by our\u2026",
    options: [
      { id: "a", text: "ears" },
      { id: "b", text: "eyes" },
      { id: "c", text: "tongue" },
      { id: "d", text: "hair" }
    ],
    answerId: "a",
    explanation: "Ears hear loud sounds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q04",
    prompt: "Sweet and salty are kinds of\u2026",
    options: [
      { id: "a", text: "taste" },
      { id: "b", text: "colour only" },
      { id: "c", text: "shape only" },
      { id: "d", text: "number" }
    ],
    answerId: "a",
    explanation: "Sweet and salty are tastes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q05",
    prompt: "We have how many legs?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "We have 2 legs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q06",
    prompt: "Cover your mouth when you\u2026",
    options: [
      { id: "a", text: "sneeze or cough" },
      { id: "b", text: "sleep only" },
      { id: "c", text: "read" },
      { id: "d", text: "draw" }
    ],
    answerId: "a",
    explanation: "Cover mouth when you sneeze or cough.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q07",
    prompt: "Bones help our body to\u2026",
    options: [
      { id: "a", text: "stand and move" },
      { id: "b", text: "make honey" },
      { id: "c", text: "fly alone" },
      { id: "d", text: "turn into water" }
    ],
    answerId: "a",
    explanation: "Bones help us stand and move.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q08",
    prompt: "Drink plenty of\u2026",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "mud" },
      { id: "c", text: "paint" },
      { id: "d", text: "sand" }
    ],
    answerId: "a",
    explanation: "Drink plenty of water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q09",
    prompt: "Nails grow on our\u2026",
    options: [
      { id: "a", text: "fingers and toes" },
      { id: "b", text: "ears" },
      { id: "c", text: "eyes" },
      { id: "d", text: "tongue" }
    ],
    answerId: "a",
    explanation: "Nails grow on fingers and toes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q10",
    prompt: "We smile with our\u2026",
    options: [
      { id: "a", text: "mouth" },
      { id: "b", text: "elbow" },
      { id: "c", text: "knee" },
      { id: "d", text: "heel" }
    ],
    answerId: "a",
    explanation: "We smile with our mouth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q11",
    prompt: "Ears help us enjoy\u2026",
    options: [
      { id: "a", text: "music" },
      { id: "b", text: "only colours" },
      { id: "c", text: "only smells" },
      { id: "d", text: "only tastes" }
    ],
    answerId: "a",
    explanation: "Ears help us hear music.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q12",
    prompt: "A doctor checks if we are\u2026",
    options: [
      { id: "a", text: "healthy" },
      { id: "b", text: "a plant" },
      { id: "c", text: "a car" },
      { id: "d", text: "a cloud" }
    ],
    answerId: "a",
    explanation: "Doctors help keep us healthy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q13",
    prompt: "Jumping uses our\u2026",
    options: [
      { id: "a", text: "legs" },
      { id: "b", text: "ears only" },
      { id: "c", text: "hair only" },
      { id: "d", text: "eyelashes" }
    ],
    answerId: "a",
    explanation: "Jumping uses our legs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q14",
    prompt: "Keep your body\u2026",
    options: [
      { id: "a", text: "clean" },
      { id: "b", text: "dirty always" },
      { id: "c", text: "painted blue" },
      { id: "d", text: "wet with mud always" }
    ],
    answerId: "a",
    explanation: "Keep your body clean.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q15",
    prompt: "We think with our\u2026",
    options: [
      { id: "a", text: "brain" },
      { id: "b", text: "shoes" },
      { id: "c", text: "belt" },
      { id: "d", text: "socks" }
    ],
    answerId: "a",
    explanation: "We think with our brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q16",
    prompt: "Which is a sense organ?",
    options: [
      { id: "a", text: "eye" },
      { id: "b", text: "shoe" },
      { id: "c", text: "chair" },
      { id: "d", text: "bag" }
    ],
    answerId: "a",
    explanation: "The eye is a sense organ.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddcd",
    title: "My Body",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Our body helps us sense the world.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Eyes", reveal: "See", emoji: "\ud83d\udc41\ufe0f" },
      { label: "Ears", reveal: "Hear", emoji: "\ud83d\udc42" },
      { label: "Hands", reveal: "Touch and hold", emoji: "\u270b" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "We see with our\u2026",
    options: [
        { id: "a", text: "ears" },
        { id: "b", text: "eyes" },
        { id: "c", text: "nose" },
        { id: "d", text: "toes" }
    ],
    answerId: "b",
    why: "We see with our eyes.",
    visual: "none",
    speak: "We see with our\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know sense organs", "Stay clean and strong", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1ScienceBody: ChapterDef = {
  id: "my-body",
  title: "My Body",
  emoji: "\ud83e\uddcd",
  blurb: "Senses & staying healthy",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "human-body",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "human-body",
      questions: SET_B,
    },
  ],
  paperTopics: ["human-body", "living-things"],
};

export const g1ScienceBodyQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
