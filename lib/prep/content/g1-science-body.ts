import type { ChapterDef, PrepQuestion } from "../types";

/** My Body - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-sci-body-a-q01",
    prompt: "We see with our\u2026",
    options: [
      { id: "a", text: "eyes" },
      { id: "b", text: "ears" },
      { id: "c", text: "nose" },
      { id: "d", text: "tongue" }
    ],
    answerId: "a",
    explanation: "We see with our eyes. Ears are tempting because they are also on our head, but ears help us hear, not see.",
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
    explanation: "We hear with our ears. Eyes are tempting because they are also on our face, but eyes help us see, not hear.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q03",
    prompt: "We smell with our\u2026",
    options: [
      { id: "a", text: "eyes" },
      { id: "b", text: "ears" },
      { id: "c", text: "nose" },
      { id: "d", text: "hair" }
    ],
    answerId: "c",
    explanation: "We smell with our nose. Ears are tempting because they sit close by on the head, but ears hear sounds; they cannot smell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q04",
    prompt: "We taste with our\u2026",
    options: [
      { id: "a", text: "elbow" },
      { id: "b", text: "knee" },
      { id: "c", text: "ear" },
      { id: "d", text: "tongue" }
    ],
    answerId: "d",
    explanation: "We taste with our tongue. The ear is tempting because it is on the head near the mouth, but ears hear; only the tongue tastes food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q05",
    prompt: "We have how many hands?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "1" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "We have 2 hands, a left one and a right one. 1 is tempting if you count only the hand you write with, but we have two.",
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
    explanation: "We walk with our feet. Ears, nose and hair are all body parts too, but none of them touch the ground to carry us.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q07",
    prompt: "Brush your ___ every day.",
    options: [
      { id: "a", text: "nails" },
      { id: "b", text: "books" },
      { id: "c", text: "teeth" },
      { id: "d", text: "walls" }
    ],
    answerId: "c",
    explanation: "Brush your teeth every day to keep them clean. Nails are tempting because we keep them clean too, but we cut and wash nails, we do not brush them every day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q08",
    prompt: "We breathe air in through our\u2026",
    options: [
      { id: "a", text: "toes" },
      { id: "b", text: "elbows" },
      { id: "c", text: "hair" },
      { id: "d", text: "nose / mouth" }
    ],
    answerId: "d",
    explanation: "Air goes in through the nose or the mouth. Hair is tempting because it is on the head, but hair has no opening for air to go in.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q09",
    prompt: "Wash your hands ___ eating.",
    options: [
      { id: "a", text: "before" },
      { id: "b", text: "never" },
      { id: "c", text: "only once a week" },
      { id: "d", text: "instead of" }
    ],
    answerId: "a",
    explanation: "Wash your hands before eating so germs do not go into your mouth. 'Only once a week' is tempting if you think washing sometimes is enough, but hands get dirty every day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q10",
    prompt: "Our heart is inside our\u2026",
    options: [
      { id: "a", text: "shoe" },
      { id: "b", text: "chest" },
      { id: "c", text: "hat" },
      { id: "d", text: "bag" }
    ],
    answerId: "b",
    explanation: "The heart is inside the chest, under the ribs. A hat or shoe is something we wear outside the body, so the heart cannot be inside it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q11",
    prompt: "When you sit on a chair, which part of your legs bends?",
    options: [
      { id: "a", text: "ears" },
      { id: "b", text: "elbows" },
      { id: "c", text: "knees" },
      { id: "d", text: "nose" }
    ],
    answerId: "c",
    explanation: "Our knees are in the middle of our legs. They bend when we sit, kneel or climb steps. Elbows bend too, but elbows are in our arms, not our legs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q12",
    prompt: "Skin helps us to\u2026",
    options: [
      { id: "a", text: "fly" },
      { id: "b", text: "bark" },
      { id: "c", text: "lay eggs" },
      { id: "d", text: "feel touch" }
    ],
    answerId: "d",
    explanation: "Skin helps us feel touch, like hot, cold, soft and rough. 'Lay eggs' is tempting if you think of animals with skin, but people do not lay eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q13",
    prompt: "Exercise makes our body\u2026",
    options: [
      { id: "a", text: "stronger" },
      { id: "b", text: "weaker" },
      { id: "c", text: "sleepy" },
      { id: "d", text: "smaller" }
    ],
    answerId: "a",
    explanation: "Exercise makes our body stronger. 'Sleepy' is tempting because we may feel tired after playing, but exercise builds strength, it does not make us sleepy all the time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q14",
    prompt: "We should sleep at\u2026",
    options: [
      { id: "a", text: "school time" },
      { id: "b", text: "night / rest time" },
      { id: "c", text: "playtime" },
      { id: "d", text: "lunch time" }
    ],
    answerId: "b",
    explanation: "We should sleep at night so the body can rest. Rest time is tempting because it sounds like sleep time, but a short rest in the day is not our main sleep.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q15",
    prompt: "Fingers are on our\u2026",
    options: [
      { id: "a", text: "ears" },
      { id: "b", text: "feet" },
      { id: "c", text: "hands" },
      { id: "d", text: "knees" }
    ],
    answerId: "c",
    explanation: "Fingers are on our hands. Feet are tempting because they also have parts that wiggle, but those are toes, not fingers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-a-q16",
    prompt: "Which helps us chew food?",
    options: [
      { id: "a", text: "hair" },
      { id: "b", text: "nails" },
      { id: "c", text: "eyelashes" },
      { id: "d", text: "teeth" }
    ],
    answerId: "d",
    explanation: "Teeth help us chew food. Nails are tempting because they are hard like teeth, but nails are on fingers and toes, not in the mouth.",
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
    explanation: "We clap with our hands. Ears are tempting because we hear the clap with them, but ears hear; hands make the clap.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q02",
    prompt: "Sunglasses protect our\u2026",
    options: [
      { id: "a", text: "toes" },
      { id: "b", text: "eyes" },
      { id: "c", text: "elbows" },
      { id: "d", text: "knees" }
    ],
    answerId: "b",
    explanation: "Sunglasses protect our eyes from bright sunlight. Knees and elbows can get hurt too, but sunglasses are worn over the eyes, not on them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q03",
    prompt: "A loud sound is heard by our\u2026",
    options: [
      { id: "a", text: "eyes" },
      { id: "b", text: "tongue" },
      { id: "c", text: "ears" },
      { id: "d", text: "hair" }
    ],
    answerId: "c",
    explanation: "Our ears hear loud sounds. Eyes are tempting because we may look towards a loud noise, but we see with eyes and hear with ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q04",
    prompt: "Sweet and salty are kinds of\u2026",
    options: [
      { id: "a", text: "colour" },
      { id: "b", text: "smell" },
      { id: "c", text: "number" },
      { id: "d", text: "taste" }
    ],
    answerId: "d",
    explanation: "Sweet and salty are kinds of taste. Smell is tempting because food also has a smell, but we find out sweet or salty with the tongue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q05",
    prompt: "On a cold winter morning, what should we wear to keep our body warm?",
    options: [
      { id: "a", text: "a warm sweater" },
      { id: "b", text: "a paper hat" },
      { id: "c", text: "wet clothes" },
      { id: "d", text: "swimming clothes" }
    ],
    answerId: "a",
    explanation: "A warm sweater keeps the heat of our body close to us, so we feel warm in winter. Swimming clothes are clothes too, but they are thin and made for water, not for the cold.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q06",
    prompt: "Cover your mouth when you\u2026",
    options: [
      { id: "a", text: "sleep" },
      { id: "b", text: "sneeze or cough" },
      { id: "c", text: "read" },
      { id: "d", text: "draw" }
    ],
    answerId: "b",
    explanation: "Cover your mouth when you sneeze or cough so germs do not spread. Sleep is tempting because the mouth may be open, but sleeping does not spray germs at others.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q07",
    prompt: "Bones help our body to\u2026",
    options: [
      { id: "a", text: "make honey" },
      { id: "b", text: "fly alone" },
      { id: "c", text: "stand and move" },
      { id: "d", text: "turn into water" }
    ],
    answerId: "c",
    explanation: "Bones help our body stand and move. 'Fly alone' is tempting if you think of birds' bones, but our bones hold us up; they do not make us fly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q08",
    prompt: "Drink plenty of\u2026",
    options: [
      { id: "a", text: "mud" },
      { id: "b", text: "paint" },
      { id: "c", text: "sand" },
      { id: "d", text: "water" }
    ],
    answerId: "d",
    explanation: "Drink plenty of water to stay healthy. Mud and paint may look like liquids, but they are not safe to drink.",
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
    explanation: "Nails grow on our fingers and toes. The tongue is tempting because it is a body part we use every day, but no nails grow on it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q10",
    prompt: "We smile with our\u2026",
    options: [
      { id: "a", text: "elbow" },
      { id: "b", text: "mouth" },
      { id: "c", text: "knee" },
      { id: "d", text: "heel" }
    ],
    answerId: "b",
    explanation: "We smile with our mouth. The heel is a body part too, but it is on the foot and cannot smile.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q11",
    prompt: "Ears help us enjoy\u2026",
    options: [
      { id: "a", text: "pictures" },
      { id: "b", text: "smells" },
      { id: "c", text: "music" },
      { id: "d", text: "tastes" }
    ],
    answerId: "c",
    explanation: "Ears help us enjoy music. Pictures are tempting because we enjoy them too, but we enjoy pictures with our eyes, not our ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q12",
    prompt: "A doctor checks if we are\u2026",
    options: [
      { id: "a", text: "a plant" },
      { id: "b", text: "a car" },
      { id: "c", text: "a cloud" },
      { id: "d", text: "healthy" }
    ],
    answerId: "d",
    explanation: "A doctor checks if we are healthy. A plant is tempting because plants can get sick too, but a plant doctor is different; our doctor checks people.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q13",
    prompt: "Jumping uses our\u2026",
    options: [
      { id: "a", text: "legs" },
      { id: "b", text: "ears" },
      { id: "c", text: "hair" },
      { id: "d", text: "eyelashes" }
    ],
    answerId: "a",
    explanation: "Jumping uses our legs. Hair may bounce when we jump, but it does not push us up; the legs do.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q14",
    prompt: "Keep your body\u2026",
    options: [
      { id: "a", text: "dirty" },
      { id: "b", text: "clean" },
      { id: "c", text: "smelly" },
      { id: "d", text: "muddy" }
    ],
    answerId: "b",
    explanation: "Keep your body clean to stay healthy. Muddy is tempting after playing outside, but we must wash the mud off.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q15",
    prompt: "We think with our\u2026",
    options: [
      { id: "a", text: "shoes" },
      { id: "b", text: "belt" },
      { id: "c", text: "brain" },
      { id: "d", text: "socks" }
    ],
    answerId: "c",
    explanation: "We think with our brain, inside the head. A belt or socks are things we wear; they cannot think.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-body-b-q16",
    prompt: "Which is a sense organ?",
    options: [
      { id: "a", text: "shoe" },
      { id: "b", text: "chair" },
      { id: "c", text: "bag" },
      { id: "d", text: "eye" }
    ],
    answerId: "d",
    explanation: "The eye is a sense organ because it helps us see. A shoe is tempting because we wear it on the body, but it is a thing we put on, not a part of us.",
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
