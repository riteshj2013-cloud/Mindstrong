import type { ChapterDef, PrepQuestion } from "../types";

/** Our Sense Organs - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-sci-senses-a-q01",
    prompt: "Which sense organ helps us see?",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Eyes" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Tongue" }
    ],
    answerId: "b",
    explanation: "We see colours, shapes and things with our eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q02",
    prompt: "We hear music with our ______.",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Skin" },
      { id: "c", text: "Eyes" },
      { id: "d", text: "Nose" }
    ],
    answerId: "a",
    explanation: "Ears catch sounds, so we can hear music.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q03",
    prompt: "Which organ helps you smell a rose?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "c",
    explanation: "The nose helps us smell things like flowers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q04",
    prompt: "Which organ tells you that a lemon is sour?",
    options: [
      { id: "a", text: "Eyes" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Tongue" }
    ],
    answerId: "d",
    explanation: "The tongue helps us taste. Lemon tastes sour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q05",
    prompt: "Which sense organ covers our whole body?",
    options: [
      { id: "a", text: "Skin" },
      { id: "b", text: "Eyes" },
      { id: "c", text: "Tongue" },
      { id: "d", text: "Ears" }
    ],
    answerId: "a",
    explanation: "Skin covers our whole body. It helps us feel touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q06",
    prompt: "How many main sense organs do we have?",
    options: [
      { id: "a", text: "Three" },
      { id: "b", text: "Four" },
      { id: "c", text: "Five" },
      { id: "d", text: "Six" }
    ],
    answerId: "c",
    explanation: "We have five: eyes, ears, nose, tongue and skin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q07",
    prompt: "When you hold a piece of ice, your skin feels ______.",
    options: [
      { id: "a", text: "hot" },
      { id: "b", text: "cold" },
      { id: "c", text: "sweet" },
      { id: "d", text: "loud" }
    ],
    answerId: "b",
    explanation: "Ice is cold. Our skin feels the cold.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q08",
    prompt: "The sense of hearing goes with which organ?",
    options: [
      { id: "a", text: "Nose" },
      { id: "b", text: "Tongue" },
      { id: "c", text: "Eyes" },
      { id: "d", text: "Ears" }
    ],
    answerId: "d",
    explanation: "We hear with our ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q09",
    prompt: "Which of these tastes sweet?",
    options: [
      { id: "a", text: "Lemon" },
      { id: "b", text: "Karela (bitter gourd)" },
      { id: "c", text: "Honey" },
      { id: "d", text: "Salt" }
    ],
    answerId: "c",
    explanation: "Honey is sweet. Lemon is sour, karela is bitter, salt is salty.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q10",
    prompt: "We should wash our hands before ______.",
    options: [
      { id: "a", text: "eating food" },
      { id: "b", text: "looking at the sky" },
      { id: "c", text: "hearing a song" },
      { id: "d", text: "smelling rain" }
    ],
    answerId: "a",
    explanation: "Clean hands keep germs away from our food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q11",
    prompt: "Riya smells smoke coming from the kitchen. Which organ warned her?",
    options: [
      { id: "a", text: "Eyes" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Tongue" },
      { id: "d", text: "Nose" }
    ],
    answerId: "d",
    explanation: "Her nose smelled the smoke. Then she can tell a grown-up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q12",
    prompt: "What is the safe way to clean your ears?",
    options: [
      { id: "a", text: "Poke inside with a pencil" },
      { id: "b", text: "Gently wipe the outer ear with a soft cloth" },
      { id: "c", text: "Pour hot water inside" },
      { id: "d", text: "Use a hairpin" }
    ],
    answerId: "b",
    explanation: "Never put sharp things in the ear. Just wipe the outside gently.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q13",
    prompt: "A car horn honks behind you, so you step aside. Which sense helped you?",
    options: [
      { id: "a", text: "Hearing" },
      { id: "b", text: "Taste" },
      { id: "c", text: "Smell" },
      { id: "d", text: "Touch" }
    ],
    answerId: "a",
    explanation: "Your ears heard the horn. Hearing kept you safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q14",
    prompt: "You touch a hot cup and pull your hand back fast. Which sense helped you?",
    options: [
      { id: "a", text: "Taste" },
      { id: "b", text: "Smell" },
      { id: "c", text: "Hearing" },
      { id: "d", text: "Touch" }
    ],
    answerId: "d",
    explanation: "Your skin felt the heat. Touch helped you move away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q15",
    prompt: "Which habit is good for your eyes?",
    options: [
      { id: "a", text: "Rubbing them with dirty hands" },
      { id: "b", text: "Looking straight at the Sun" },
      { id: "c", text: "Reading in good light" },
      { id: "d", text: "Reading in the dark" }
    ],
    answerId: "c",
    explanation: "Good light lets your eyes see without strain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q16",
    prompt: "What taste does karela (bitter gourd) have?",
    options: [
      { id: "a", text: "Sweet" },
      { id: "b", text: "Bitter" },
      { id: "c", text: "Salty" },
      { id: "d", text: "Sour" }
    ],
    answerId: "b",
    explanation: "Karela tastes bitter. That is how it got its name, bitter gourd.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q17",
    prompt: "Which sense helps you tell a red ball from a blue ball?",
    options: [
      { id: "a", text: "Touch" },
      { id: "b", text: "Smell" },
      { id: "c", text: "Hearing" },
      { id: "d", text: "Sight" }
    ],
    answerId: "d",
    explanation: "Our eyes see colours. Both balls may feel the same.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q18",
    prompt: "Which of these can you NOT find out by smell?",
    options: [
      { id: "a", text: "The colour of a flower" },
      { id: "b", text: "Burnt toast" },
      { id: "c", text: "A ripe mango" },
      { id: "d", text: "Fresh soap" }
    ],
    answerId: "a",
    explanation: "We see colour with our eyes, not our nose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q19",
    prompt: "Very loud sounds for a long time can ______.",
    options: [
      { id: "a", text: "make our ears sharper" },
      { id: "b", text: "hurt our ears" },
      { id: "c", text: "help our eyes see" },
      { id: "d", text: "make food tasty" }
    ],
    answerId: "b",
    explanation: "Loud sounds can hurt our ears. Keep the sound low.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q20",
    prompt: "Which pair is matched correctly?",
    options: [
      { id: "a", text: "Nose \u2013 taste" },
      { id: "b", text: "Ears \u2013 see" },
      { id: "c", text: "Skin \u2013 touch" },
      { id: "d", text: "Tongue \u2013 hear" }
    ],
    answerId: "c",
    explanation: "Skin helps us feel touch. The other pairs are mixed up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q21",
    prompt: "When your nose is blocked from a cold, food seems less tasty. Why?",
    options: [
      { id: "a", text: "Smell helps us taste food" },
      { id: "b", text: "Our ears stop working" },
      { id: "c", text: "Our eyes close" },
      { id: "d", text: "Our skin gets cold" }
    ],
    answerId: "a",
    explanation: "Smell and taste work together. A blocked nose makes food taste less.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q22",
    prompt: "Some people who cannot see read raised dots called Braille. Which sense do they use?",
    options: [
      { id: "a", text: "Sight" },
      { id: "b", text: "Hearing" },
      { id: "c", text: "Touch" },
      { id: "d", text: "Taste" }
    ],
    answerId: "c",
    explanation: "They feel the bumpy dots with their fingertips. That is touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q23",
    prompt: "Which group has ONLY things you can hear?",
    options: [
      { id: "a", text: "Rainbow, star, moon" },
      { id: "b", text: "Rose, soap, perfume" },
      { id: "c", text: "Sugar, salt, lemon" },
      { id: "d", text: "Bell, drum, whistle" }
    ],
    answerId: "d",
    explanation: "A bell, a drum and a whistle all make sounds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-a-q24",
    prompt: "Which sense organ can warn us that milk has gone bad, before we drink it?",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Knees" },
      { id: "d", text: "Hair" }
    ],
    answerId: "b",
    explanation: "Bad milk smells sour. The nose warns us before we taste it.\n\n---",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-sci-senses-b-q01",
    prompt: "Which organ helps us taste food?",
    options: [
      { id: "a", text: "Nose" },
      { id: "b", text: "Eyes" },
      { id: "c", text: "Tongue" },
      { id: "d", text: "Ears" }
    ],
    answerId: "c",
    explanation: "The tongue tastes our food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q02",
    prompt: "We feel soft cotton with our ______.",
    options: [
      { id: "a", text: "skin" },
      { id: "b", text: "ears" },
      { id: "c", text: "nose" },
      { id: "d", text: "eyes" }
    ],
    answerId: "a",
    explanation: "Skin feels soft and rough things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q03",
    prompt: "Which organ do we use to watch a cartoon?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Skin" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "d",
    explanation: "We watch pictures with our eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q04",
    prompt: "What taste does sugar have?",
    options: [
      { id: "a", text: "Salty" },
      { id: "b", text: "Sweet" },
      { id: "c", text: "Sour" },
      { id: "d", text: "Bitter" }
    ],
    answerId: "b",
    explanation: "Sugar tastes sweet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q05",
    prompt: "The ringing school bell is heard with our ______.",
    options: [
      { id: "a", text: "eyes" },
      { id: "b", text: "ears" },
      { id: "c", text: "tongue" },
      { id: "d", text: "skin" }
    ],
    answerId: "b",
    explanation: "Ears help us hear the bell ring.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q06",
    prompt: "Which of these smells nice?",
    options: [
      { id: "a", text: "Garbage" },
      { id: "b", text: "Smoke" },
      { id: "c", text: "A rotten egg" },
      { id: "d", text: "A jasmine flower" }
    ],
    answerId: "d",
    explanation: "Jasmine has a sweet, nice smell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q07",
    prompt: "A raw green mango tastes ______.",
    options: [
      { id: "a", text: "sour" },
      { id: "b", text: "sweet" },
      { id: "c", text: "salty" },
      { id: "d", text: "bitter" }
    ],
    answerId: "a",
    explanation: "A raw mango is sour. It turns sweet when it ripens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q08",
    prompt: "How many eyes do we have?",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "Three" },
      { id: "c", text: "Two" },
      { id: "d", text: "Four" }
    ],
    answerId: "c",
    explanation: "We have two eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q09",
    prompt: "The sense of touch goes with which organ?",
    options: [
      { id: "a", text: "Skin" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Ears" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "a",
    explanation: "We feel touch with our skin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q10",
    prompt: "Which taste do chips and sea water have?",
    options: [
      { id: "a", text: "Sweet" },
      { id: "b", text: "Bitter" },
      { id: "c", text: "Salty" },
      { id: "d", text: "Sour" }
    ],
    answerId: "c",
    explanation: "Chips and sea water both have salt. They taste salty.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q11",
    prompt: "At the beach, your feet tell you the sand is hot. Which sense is this?",
    options: [
      { id: "a", text: "Sight" },
      { id: "b", text: "Touch" },
      { id: "c", text: "Smell" },
      { id: "d", text: "Hearing" }
    ],
    answerId: "b",
    explanation: "The skin on your feet feels the heat. That is touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q12",
    prompt: "Which is good for our eyes?",
    options: [
      { id: "a", text: "Rubbing them hard" },
      { id: "b", text: "Watching TV from very close" },
      { id: "c", text: "Splashing them with dirty water" },
      { id: "d", text: "Washing them with clean water" }
    ],
    answerId: "d",
    explanation: "Clean water keeps our eyes fresh and safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q13",
    prompt: "Which is NOT safe for our ears?",
    options: [
      { id: "a", text: "Keeping the TV sound low" },
      { id: "b", text: "Covering ears near loud crackers" },
      { id: "c", text: "Wiping the outer ear gently" },
      { id: "d", text: "Putting a stick inside the ear" }
    ],
    answerId: "d",
    explanation: "Never put a stick inside the ear. It can hurt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q14",
    prompt: "Without looking, you know someone lit an agarbatti in the next room. Which sense told you?",
    options: [
      { id: "a", text: "Sight" },
      { id: "b", text: "Smell" },
      { id: "c", text: "Taste" },
      { id: "d", text: "Touch" }
    ],
    answerId: "b",
    explanation: "The smell of the agarbatti reached your nose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q15",
    prompt: "Which pair is NOT correct?",
    options: [
      { id: "a", text: "Eyes \u2013 see" },
      { id: "b", text: "Ears \u2013 hear" },
      { id: "c", text: "Nose \u2013 touch" },
      { id: "d", text: "Tongue \u2013 taste" }
    ],
    answerId: "c",
    explanation: "The nose is for smell. Skin is for touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q16",
    prompt: "A pin pricks your finger and you feel pain. Which organ felt it?",
    options: [
      { id: "a", text: "Skin" },
      { id: "b", text: "Ears" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "a",
    explanation: "Skin feels pain. Pain tells us to be careful.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q17",
    prompt: "Which two foods have the SAME taste?",
    options: [
      { id: "a", text: "Sugar and lemon" },
      { id: "b", text: "Salt and honey" },
      { id: "c", text: "Lemon and imli (tamarind)" },
      { id: "d", text: "Karela and sugar" }
    ],
    answerId: "c",
    explanation: "Lemon and imli both taste sour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q18",
    prompt: "Why should we never look straight at the Sun?",
    options: [
      { id: "a", text: "It makes our ears hurt" },
      { id: "b", text: "It makes food taste bad" },
      { id: "c", text: "It makes our nose run" },
      { id: "d", text: "Its strong light can hurt our eyes" }
    ],
    answerId: "d",
    explanation: "The Sun is very bright. Its light can harm our eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q19",
    prompt: "Which sense helps you enjoy a bird's song?",
    options: [
      { id: "a", text: "Hearing" },
      { id: "b", text: "Taste" },
      { id: "c", text: "Touch" },
      { id: "d", text: "Smell" }
    ],
    answerId: "a",
    explanation: "We hear the bird sing with our ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q20",
    prompt: "Why should our hands be clean before we eat?",
    options: [
      { id: "a", text: "Clean hands smell like flowers" },
      { id: "b", text: "Dirty hands can carry germs into food" },
      { id: "c", text: "Clean hands help us hear" },
      { id: "d", text: "Dirty hands make food sweet" }
    ],
    answerId: "b",
    explanation: "Germs on dirty hands can go into our food and make us ill.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q21",
    prompt: "Which one organ tells you an ice cream is both cold and sweet?",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Tongue" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "b",
    explanation: "The tongue tastes sweet. It can also feel cold.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q22",
    prompt: "Seema closes her eyes. She gets a bell, a rose, a lemon and a soft toy. Which can she find by hearing?",
    options: [
      { id: "a", text: "The bell" },
      { id: "b", text: "The rose" },
      { id: "c", text: "The lemon" },
      { id: "d", text: "The soft toy" }
    ],
    answerId: "a",
    explanation: "A bell makes a sound when shaken. The others make no sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q23",
    prompt: "Which organ tells us the colour, shape and size of a toy, all at once?",
    options: [
      { id: "a", text: "Nose" },
      { id: "b", text: "Tongue" },
      { id: "c", text: "Ears" },
      { id: "d", text: "Eyes" }
    ],
    answerId: "d",
    explanation: "Our eyes see colour, shape and size together.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-senses-b-q24",
    prompt: "Which shows our senses keeping us safe?",
    options: [
      { id: "a", text: "Eating food that smells bad" },
      { id: "b", text: "Touching a hot iron" },
      { id: "c", text: "Smelling smoke and telling an adult" },
      { id: "d", text: "Playing music very loud" }
    ],
    answerId: "c",
    explanation: "The nose smells smoke. Telling an adult keeps everyone safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udc41\ufe0f",
    title: "Five senses",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "We learn about the world with five sense organs.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Eyes", reveal: "Sight", emoji: "\ud83d\udc40" },
      { label: "Ears", reveal: "Hearing", emoji: "\ud83d\udc42" },
      { label: "Nose", reveal: "Smell", emoji: "\ud83d\udc43" },
      { label: "Tongue", reveal: "Taste", emoji: "\ud83d\udc45" },
      { label: "Skin", reveal: "Touch", emoji: "\u270b" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which sense organ helps you hear a bell?",
    options: [
        { id: "a", text: "Eyes" },
        { id: "b", text: "Ears" },
        { id: "c", text: "Nose" },
        { id: "d", text: "Tongue" }
    ],
    answerId: "b",
    why: "Ears are for hearing.",
    visual: "plant",
    speak: "Which sense organ helps you hear a bell?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Five senses", "Each organ has a job", "Keep senses safe", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g3ScienceSenses: ChapterDef = {
  id: "sense-organs",
  title: "Our Sense Organs",
  emoji: "\ud83d\udc41\ufe0f",
  blurb: "See, hear, smell, taste, touch",
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

export const g3ScienceSensesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
