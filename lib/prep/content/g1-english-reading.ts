import type { ChapterDef, PrepQuestion } from "../types";

/** Reading Pictures - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-eng-reading-a-q01",
    prompt: "Look at the picture. What is it?",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "moon" },
      { id: "c", text: "flower" },
      { id: "d", text: "cloud" }
    ],
    answerId: "a",
    explanation: "The round yellow shape with rays all around it is the sun. Moon is tempting because the moon is also round in the sky, but the moon has no rays like these.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A round yellow face with a big smile and short yellow rays all around it.\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" rx=\"16\" fill=\"#f4fbff\"/><line x1=\"222.0\" y1=\"110.0\" x2=\"248.0\" y2=\"110.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"213.7\" y1=\"141.0\" x2=\"236.2\" y2=\"154.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"191.0\" y1=\"163.7\" x2=\"204.0\" y2=\"186.2\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"160.0\" y1=\"172.0\" x2=\"160.0\" y2=\"198.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"129.0\" y1=\"163.7\" x2=\"116.0\" y2=\"186.2\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"106.3\" y1=\"141.0\" x2=\"83.8\" y2=\"154.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"98.0\" y1=\"110.0\" x2=\"72.0\" y2=\"110.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"106.3\" y1=\"79.0\" x2=\"83.8\" y2=\"66.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"129.0\" y1=\"56.3\" x2=\"116.0\" y2=\"33.8\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"160.0\" y1=\"48.0\" x2=\"160.0\" y2=\"22.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"191.0\" y1=\"56.3\" x2=\"204.0\" y2=\"33.8\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"213.7\" y1=\"79.0\" x2=\"236.2\" y2=\"66.0\" stroke=\"#f9a825\" stroke-width=\"8\" stroke-linecap=\"round\"/><circle cx=\"160\" cy=\"110\" r=\"50\" fill=\"#ffd54f\" stroke=\"#f9a825\" stroke-width=\"4\"/><circle cx=\"142\" cy=\"98\" r=\"6\" fill=\"#5d4037\"/><circle cx=\"178\" cy=\"98\" r=\"6\" fill=\"#5d4037\"/><path d=\"M 136 122 Q 160 146 184 122\" fill=\"none\" stroke=\"#5d4037\" stroke-width=\"5\" stroke-linecap=\"round\"/></svg>", "alt": "A round yellow face with a big smile and short yellow rays all around it."}
  },
  {
    id: "g1-eng-reading-a-q02",
    prompt: "Read: \"The cat is on the mat.\" Where is the cat?",
    options: [
      { id: "a", text: "in a box" },
      { id: "b", text: "on the mat" },
      { id: "c", text: "under a car" },
      { id: "d", text: "in water" }
    ],
    answerId: "b",
    explanation: "The sentence says the cat is on the mat. 'In a box' is tempting because cats like boxes, but the sentence says mat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q03",
    prompt: "Who can fly?",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "dog" },
      { id: "c", text: "bird" },
      { id: "d", text: "cow" }
    ],
    answerId: "c",
    explanation: "A bird can fly with its wings. A fish is tempting because it moves fast in water, but it swims; it cannot fly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q04",
    prompt: "Read: \"I like mango.\" What does the child like?",
    options: [
      { id: "a", text: "apple" },
      { id: "b", text: "milk" },
      { id: "c", text: "rice" },
      { id: "d", text: "mango" }
    ],
    answerId: "d",
    explanation: "The sentence says 'I like mango.' Apple is tempting because it is also a fruit, but the word in the sentence is mango.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q05",
    prompt: "At night we often see the\u2026",
    options: [
      { id: "a", text: "moon" },
      { id: "b", text: "sun" },
      { id: "c", text: "school bus" },
      { id: "d", text: "rainbow" }
    ],
    answerId: "a",
    explanation: "At night we often see the moon. A rainbow is tempting because it is also in the sky, but we see rainbows in the day after rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q06",
    prompt: "Read: \"Rani has a red bag.\" What colour is the bag?",
    options: [
      { id: "a", text: "blue" },
      { id: "b", text: "red" },
      { id: "c", text: "green" },
      { id: "d", text: "black" }
    ],
    answerId: "b",
    explanation: "The sentence says Rani has a red bag. Blue is tempting because it is a common bag colour, but the colour word in the sentence is red.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q07",
    prompt: "Which animal lives in water?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "hen" },
      { id: "c", text: "fish" },
      { id: "d", text: "goat" }
    ],
    answerId: "c",
    explanation: "A fish lives in water. A hen is tempting because it is a farm animal near ponds, but a hen lives on land.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q08",
    prompt: "When do we use an umbrella?",
    options: [
      { id: "a", text: "to eat" },
      { id: "b", text: "to sleep" },
      { id: "c", text: "to swim" },
      { id: "d", text: "in the rain" }
    ],
    answerId: "d",
    explanation: "We use an umbrella in the rain. 'To swim' is tempting because both rain and swimming are about water, but we do not carry an umbrella to swim.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q09",
    prompt: "Read: \"Tom runs fast.\" What does Tom do?",
    options: [
      { id: "a", text: "runs" },
      { id: "b", text: "sleeps" },
      { id: "c", text: "eats" },
      { id: "d", text: "sits" }
    ],
    answerId: "a",
    explanation: "The sentence says Tom runs fast, so the action is runs. 'Sits' is tempting because it is also an action word, but the sentence says runs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q10",
    prompt: "We drink\u2026",
    options: [
      { id: "a", text: "stones" },
      { id: "b", text: "water" },
      { id: "c", text: "sand" },
      { id: "d", text: "smoke" }
    ],
    answerId: "b",
    explanation: "We drink water. Smoke is tempting because it moves like a liquid in the air, but smoke is harmful and cannot be drunk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q11",
    prompt: "Read: \"The hen lays an egg.\" Who lays the egg?",
    options: [
      { id: "a", text: "cow" },
      { id: "b", text: "dog" },
      { id: "c", text: "hen" },
      { id: "d", text: "cat" }
    ],
    answerId: "c",
    explanation: "The sentence says the hen lays an egg. A cow is tempting because it gives us food too, but a cow gives milk, not eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q12",
    prompt: "Which is a place to sleep?",
    options: [
      { id: "a", text: "spoon" },
      { id: "b", text: "ball" },
      { id: "c", text: "pen" },
      { id: "d", text: "bed" }
    ],
    answerId: "d",
    explanation: "A bed is a place to sleep. A ball is tempting because it is soft and round, but we play with a ball; we sleep on a bed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q13",
    prompt: "Look at the picture. Where do children carry this bag every morning?",
    options: [
      { id: "a", text: "to school" },
      { id: "b", text: "to the moon" },
      { id: "c", text: "into the sea" },
      { id: "d", text: "under soil" }
    ],
    answerId: "a",
    explanation: "Children carry a school bag to school every morning. To the moon is tempting because it sounds exciting, but nobody takes a school bag to the moon, into the sea or under the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A blue backpack with two shoulder straps, a front pocket and a top handle.\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" rx=\"16\" fill=\"#f4fbff\"/><path d=\"M 140 52 Q 160 26 180 52\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"8\" stroke-linecap=\"round\"/><rect x=\"104\" y=\"50\" width=\"112\" height=\"140\" rx=\"26\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><rect x=\"124\" y=\"120\" width=\"72\" height=\"50\" rx=\"10\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><line x1=\"124\" y1=\"136\" x2=\"196\" y2=\"136\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><rect x=\"90\" y=\"70\" width=\"14\" height=\"100\" rx=\"7\" fill=\"#1e40af\"/><rect x=\"216\" y=\"70\" width=\"14\" height=\"100\" rx=\"7\" fill=\"#1e40af\"/><circle cx=\"160\" cy=\"80\" r=\"5\" fill=\"#fde047\"/></svg>", "alt": "A blue backpack with two shoulder straps, a front pocket and a top handle."}
  },
  {
    id: "g1-eng-reading-a-q14",
    prompt: "Read: \"Birds live in nests.\" Where do birds live?",
    options: [
      { id: "a", text: "cars" },
      { id: "b", text: "nests" },
      { id: "c", text: "cups" },
      { id: "d", text: "shoes" }
    ],
    answerId: "b",
    explanation: "The sentence says birds live in nests. Cups are tempting because a nest is round like a cup, but the sentence says nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q15",
    prompt: "We write with a\u2026",
    options: [
      { id: "a", text: "shoe" },
      { id: "b", text: "plate" },
      { id: "c", text: "pencil" },
      { id: "d", text: "chair" }
    ],
    answerId: "c",
    explanation: "We write with a pencil. A plate is tempting because it is flat like paper, but we eat from a plate.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q16",
    prompt: "Read: \"It is hot in summer.\" How is summer?",
    options: [
      { id: "a", text: "cold" },
      { id: "b", text: "windy" },
      { id: "c", text: "rainy" },
      { id: "d", text: "hot" }
    ],
    answerId: "d",
    explanation: "The sentence says it is hot in summer. Windy is tempting because summer can be windy, but the word in the sentence is hot.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-eng-reading-b-q01",
    prompt: "Look at the picture. What does it show?",
    options: [
      { id: "a", text: "tree" },
      { id: "b", text: "car" },
      { id: "c", text: "book" },
      { id: "d", text: "fish" }
    ],
    answerId: "a",
    explanation: "The picture has a brown trunk and a big green top of leaves, so it is a tree. Book is wrong: a book has pages, not a trunk and leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A tall plant with a thick brown trunk and a big round green top made of leaves, standing on grass.\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" rx=\"16\" fill=\"#f4fbff\"/><rect x=\"0\" y=\"186\" width=\"320\" height=\"34\" fill=\"#a5d6a7\"/><rect x=\"146\" y=\"112\" width=\"28\" height=\"80\" rx=\"6\" fill=\"#8d6e63\" stroke=\"#5d4037\" stroke-width=\"3\"/><circle cx=\"160\" cy=\"84\" r=\"52\" fill=\"#43a047\" stroke=\"#2e7d32\" stroke-width=\"4\"/><circle cx=\"118\" cy=\"104\" r=\"30\" fill=\"#4caf50\" stroke=\"#2e7d32\" stroke-width=\"3\"/><circle cx=\"202\" cy=\"104\" r=\"30\" fill=\"#4caf50\" stroke=\"#2e7d32\" stroke-width=\"3\"/></svg>", "alt": "A tall plant with a thick brown trunk and a big round green top made of leaves, standing on grass."}
  },
  {
    id: "g1-eng-reading-b-q02",
    prompt: "Read: \"The dog sits by the door.\" Where is the dog?",
    options: [
      { id: "a", text: "under the bed" },
      { id: "b", text: "by the door" },
      { id: "c", text: "on the roof" },
      { id: "d", text: "by the gate" }
    ],
    answerId: "b",
    explanation: "The sentence says the dog sits by the door. 'By the gate' is tempting because it is also near the way in, but the sentence says door.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q03",
    prompt: "Who says bow-wow?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "cow" },
      { id: "c", text: "dog" },
      { id: "d", text: "duck" }
    ],
    answerId: "c",
    explanation: "A dog says bow-wow. A cat is tempting because it is also a pet, but a cat says meow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q04",
    prompt: "Read: \"I see a bus.\" What does the child see?",
    options: [
      { id: "a", text: "train" },
      { id: "b", text: "plane" },
      { id: "c", text: "boat" },
      { id: "d", text: "bus" }
    ],
    answerId: "d",
    explanation: "The sentence says 'I see a bus.' Train is tempting because it also carries many people, but the word in the sentence is bus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q05",
    prompt: "In the morning we see the\u2026",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "stars" },
      { id: "c", text: "fireflies" },
      { id: "d", text: "owl" }
    ],
    answerId: "a",
    explanation: "In the morning we see the sun. Stars are tempting because they also shine in the sky, but we see stars at night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q06",
    prompt: "Read: \"Leela has a blue frock.\" What colour?",
    options: [
      { id: "a", text: "red" },
      { id: "b", text: "blue" },
      { id: "c", text: "yellow" },
      { id: "d", text: "pink" }
    ],
    answerId: "b",
    explanation: "The sentence says Leela has a blue frock. Pink is tempting because it is a common frock colour, but the colour word is blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q07",
    prompt: "Which animal gives us milk?",
    options: [
      { id: "a", text: "tiger" },
      { id: "b", text: "eagle" },
      { id: "c", text: "cow" },
      { id: "d", text: "frog" }
    ],
    answerId: "c",
    explanation: "A cow gives us milk. A tiger is tempting because it is a big animal like a cow, but it is wild and does not give us milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q08",
    prompt: "What do we use a toothbrush for?",
    options: [
      { id: "a", text: "to cut paper" },
      { id: "b", text: "to kick a ball" },
      { id: "c", text: "to cook rice" },
      { id: "d", text: "to brush teeth" }
    ],
    answerId: "d",
    explanation: "We use a toothbrush to brush our teeth. 'To cut paper' is tempting because a toothbrush is held in the hand like scissors, but it has soft bristles for cleaning teeth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q09",
    prompt: "Read: \"Mira hops.\" What does Mira do?",
    options: [
      { id: "a", text: "hops" },
      { id: "b", text: "flies a plane" },
      { id: "c", text: "drives" },
      { id: "d", text: "swims in space" }
    ],
    answerId: "a",
    explanation: "The sentence says Mira hops, so hopping is the action. 'Swims in space' is tempting only because it is also a moving action, but the sentence says hops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q10",
    prompt: "We eat with a\u2026",
    options: [
      { id: "a", text: "shoe" },
      { id: "b", text: "spoon" },
      { id: "c", text: "broom" },
      { id: "d", text: "bell" }
    ],
    answerId: "b",
    explanation: "We eat with a spoon. A bell is tempting because it is a small metal thing like a spoon, but we ring a bell; we eat with a spoon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q11",
    prompt: "Read: \"The frog jumps.\" Who jumps?",
    options: [
      { id: "a", text: "rock" },
      { id: "b", text: "cup" },
      { id: "c", text: "frog" },
      { id: "d", text: "mat" }
    ],
    answerId: "c",
    explanation: "The sentence says the frog jumps. A rock is tempting because frogs sit on rocks, but a rock cannot jump.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q12",
    prompt: "Which is a place to sit?",
    options: [
      { id: "a", text: "cloud" },
      { id: "b", text: "flame" },
      { id: "c", text: "needle" },
      { id: "d", text: "chair" }
    ],
    answerId: "d",
    explanation: "A chair is a place to sit. A cloud is tempting because it looks soft, but no one can sit on a cloud.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q13",
    prompt: "Look at the picture. What is falling from the cloud?",
    options: [
      { id: "a", text: "rain" },
      { id: "b", text: "sand" },
      { id: "c", text: "stones" },
      { id: "d", text: "leaves" }
    ],
    answerId: "a",
    explanation: "Small blue drops are falling from the grey cloud, so it is rain. Stones is tempting because stones can fall too, but clouds hold water, not stones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A grey cloud with many small blue drops coming down from it.\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" rx=\"16\" fill=\"#f4fbff\"/><circle cx=\"130\" cy=\"70\" r=\"34\" fill=\"#90a4ae\"/><circle cx=\"175\" cy=\"58\" r=\"42\" fill=\"#90a4ae\"/><circle cx=\"215\" cy=\"76\" r=\"30\" fill=\"#90a4ae\"/><rect x=\"110\" y=\"72\" width=\"130\" height=\"34\" rx=\"17\" fill=\"#90a4ae\"/><path d=\"M 110 120 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 140 150 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 170 124 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 200 156 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 230 122 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 125 182 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 185 186 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 215 190 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/><path d=\"M 155 176 q -7 12 0 16 q 7 -4 0 -16 z\" fill=\"#42a5f5\" stroke=\"#1565c0\" stroke-width=\"1.5\"/></svg>", "alt": "A grey cloud with many small blue drops coming down from it."}
  },
  {
    id: "g1-eng-reading-b-q14",
    prompt: "Read: \"Fish swim in water.\" Where do fish swim?",
    options: [
      { id: "a", text: "in the sand" },
      { id: "b", text: "in water" },
      { id: "c", text: "in the air" },
      { id: "d", text: "in trees" }
    ],
    answerId: "b",
    explanation: "The sentence says fish swim in water. 'In the air' is tempting because birds move there, but fish need water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q15",
    prompt: "We read a\u2026",
    options: [
      { id: "a", text: "brick" },
      { id: "b", text: "broom" },
      { id: "c", text: "book" },
      { id: "d", text: "boat" }
    ],
    answerId: "c",
    explanation: "We read a book. A boat is tempting because the word looks a lot like book, but we ride in a boat; we read a book.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q16",
    prompt: "Read: \"Winter feels cold.\" How does winter feel?",
    options: [
      { id: "a", text: "hot" },
      { id: "b", text: "sweet" },
      { id: "c", text: "loud" },
      { id: "d", text: "cold" }
    ],
    answerId: "d",
    explanation: "The sentence says winter feels cold. Hot is the opposite: summer is hot, winter is cold.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\uddbc\ufe0f",
    title: "Reading Pictures",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Pictures and words tell stories.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Look", reveal: "See the picture", emoji: "\ud83d\udc40" },
      { label: "Read", reveal: "Find key words", emoji: "\ud83d\udd0e" },
      { label: "Answer", reveal: "Use what you saw", emoji: "\u2705" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Read: \"The cat sits.\" What sits?",
    options: [
        { id: "a", text: "dog" },
        { id: "b", text: "cat" },
        { id: "c", text: "bus" },
        { id: "d", text: "cup" }
    ],
    answerId: "b",
    why: "The cat sits.",
    visual: "sentence",
    speak: "Read: \"The cat sits.\" What sits?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Use picture clues", "Find key words", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1EnglishReading: ChapterDef = {
  id: "reading-pics",
  title: "Reading Pictures",
  emoji: "\ud83d\uddbc\ufe0f",
  blurb: "Picture clues & short lines",
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

export const g1EnglishReadingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
