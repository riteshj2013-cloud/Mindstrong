import type { ChapterDef, PrepQuestion } from "../types";

/** Plants: Seeds & Dispersal — authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-plants-a-q01",
    prompt: "Which part of a seed is its outer protective covering?",
    options: [
      { id: "a", text: "Cotyledon" },
      { id: "b", text: "Seed coat" },
      { id: "c", text: "Radicle" },
      { id: "d", text: "Plumule" }
    ],
    answerId: "b",
    explanation: "The seed coat is the tough outer skin. It protects the baby plant inside from injury, insects, and drying out.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q02",
    prompt: "Which part of the embryo grows into the root of a new plant?",
    options: [
      { id: "a", text: "Plumule" },
      { id: "b", text: "Seed coat" },
      { id: "c", text: "Radicle" },
      { id: "d", text: "Cotyledon" }
    ],
    answerId: "c",
    explanation: "The radicle is the baby root. It is the first part to come out of the seed, and it grows downward.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q03",
    prompt: "The plumule of a seed develops into the plant's —",
    options: [
      { id: "a", text: "shoot" },
      { id: "b", text: "root" },
      { id: "c", text: "seed coat" },
      { id: "d", text: "fruit" }
    ],
    answerId: "a",
    explanation: "The plumule is the baby shoot. It grows upward and later gives rise to the stem and leaves.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q04",
    prompt: "In a bean seed, most of the stored food is found in the —",
    options: [
      { id: "a", text: "seed coat" },
      { id: "b", text: "radicle" },
      { id: "c", text: "plumule" },
      { id: "d", text: "cotyledons" }
    ],
    answerId: "d",
    explanation: "The two thick cotyledons store food. The young plant uses this food until it can make its own food in its leaves.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q05",
    prompt: "Which set of conditions do most seeds need to germinate?",
    options: [
      { id: "a", text: "Water, light, and soil" },
      { id: "b", text: "Soil, fertiliser, and sunlight" },
      { id: "c", text: "Water, air, and warmth" },
      { id: "d", text: "Air, light, and manure" }
    ],
    answerId: "c",
    explanation: "Water, air, and a suitable temperature wake a seed up. Soil, light, and fertiliser become important later, when the plant grows bigger.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q06",
    prompt: "Seeds stored in a dry, closed jar stay the same for months and do not sprout. Which condition are they mainly missing?",
    options: [
      { id: "a", text: "Sunlight" },
      { id: "b", text: "Water" },
      { id: "c", text: "Soil" },
      { id: "d", text: "Fertiliser" }
    ],
    answerId: "b",
    explanation: "Without water, a seed cannot swell or start using its stored food, so it stays dormant (resting).",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q07",
    prompt: "When a seed germinates, which part usually comes out first?",
    options: [
      { id: "a", text: "Green leaves" },
      { id: "b", text: "Plumule" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Radicle" }
    ],
    answerId: "d",
    explanation: "The radicle comes out first and grows down. This anchors the seedling and lets it take in water early on.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q08",
    prompt: "A coconut fruit is mainly dispersed by —",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "explosion" },
      { id: "c", text: "wind" },
      { id: "d", text: "sticking to animals" }
    ],
    answerId: "a",
    explanation: "A coconut has a light, fibrous husk that traps air, so it floats. Sea currents can carry it to faraway shores.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q09",
    prompt: "Xanthium fruits are covered with tiny hooked spines. How are they mostly dispersed?",
    options: [
      { id: "a", text: "By wind" },
      { id: "b", text: "By animals" },
      { id: "c", text: "By water" },
      { id: "d", text: "By explosion" }
    ],
    answerId: "b",
    explanation: "The hooks catch on animal fur and on people's clothes. The fruits drop off later, far from the parent plant.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q10",
    prompt: "Madar (aak) seeds have a tuft of soft, silky hairs. These hairs help the seeds travel by —",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "animals" },
      { id: "c", text: "wind" },
      { id: "d", text: "explosion" }
    ],
    answerId: "c",
    explanation: "The silky hairs work like a parachute. They let the light seed float on the wind over long distances.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q11",
    prompt: "When ripe balsam (touch-me-not) pods are touched, they burst open and throw out their seeds. This method of dispersal is called —",
    options: [
      { id: "a", text: "explosion" },
      { id: "b", text: "water dispersal" },
      { id: "c", text: "wind dispersal" },
      { id: "d", text: "dispersal by birds" }
    ],
    answerId: "a",
    explanation: "The ripe pod bursts suddenly and flings its seeds away from the plant. This is dispersal by explosion.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q12",
    prompt: "The carrying of seeds away from the parent plant to new places is called —",
    options: [
      { id: "a", text: "germination" },
      { id: "b", text: "pollination" },
      { id: "c", text: "photosynthesis" },
      { id: "d", text: "seed dispersal" }
    ],
    answerId: "d",
    explanation: "Seed dispersal means spreading seeds to new places. Germination is sprouting, and photosynthesis is how leaves make food.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q13",
    prompt: "Why is seed dispersal useful for plants?",
    options: [
      { id: "a", text: "It makes seeds heavier." },
      { id: "b", text: "It makes the parent plant grow taller." },
      { id: "c", text: "It keeps all the seeds inside the fruit." },
      { id: "d", text: "It reduces crowding and competition for light, water, and space." }
    ],
    answerId: "d",
    explanation: "Seeds that land in new places do not have to compete with the parent or with each other. This gives them a better chance to grow.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q14",
    prompt: "Riya soaked some gram (chana) seeds overnight. The next morning, they were bigger and their skin was wrinkled and loose. Why do we soak seeds before sprouting them?",
    options: [
      { id: "a", text: "To wash away their stored food" },
      { id: "b", text: "The seeds absorb water, which softens the seed coat and starts germination" },
      { id: "c", text: "To kill the germs and the embryo" },
      { id: "d", text: "To make the seeds heavy so they sink in soil" }
    ],
    answerId: "b",
    explanation: "Soaking lets the seed take in water and swell. The softer seed coat then splits more easily so the embryo can grow.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q15",
    prompt: "Which feature helps a fruit or seed float and travel on water?",
    options: [
      { id: "a", text: "Hooks and spines" },
      { id: "b", text: "Thin papery wings" },
      { id: "c", text: "A light, fibrous, air-filled outer layer" },
      { id: "d", text: "Sweet, sticky pulp" }
    ],
    answerId: "c",
    explanation: "Air trapped in a fibrous layer, like a coconut's husk, keeps the fruit afloat. Wings suit wind dispersal, and hooks suit animal dispersal.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q16",
    prompt: "How many cotyledons does a maize grain have?",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "Two" },
      { id: "c", text: "Three" },
      { id: "d", text: "None" }
    ],
    answerId: "a",
    explanation: "Maize, wheat, and rice seeds have one cotyledon. Bean, pea, and gram seeds have two.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q17",
    prompt: "Birds eat ripe guavas. Later, guava plants start growing in places far from the tree, where the birds left their droppings. Which kind of dispersal is this?",
    options: [
      { id: "a", text: "Wind" },
      { id: "b", text: "Water" },
      { id: "c", text: "Animals" },
      { id: "d", text: "Explosion" }
    ],
    answerId: "c",
    explanation: "The hard seeds pass unharmed through the bird's body and are dropped far away. This is dispersal by animals.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q18",
    prompt: "Arjun set up three cups of moong seeds in a warm room. Cup 1 had dry cotton. Cup 2 had wet cotton. In Cup 3, the seeds were fully under boiled and cooled water. After three days, in which cup(s) did the seeds sprout?",
    options: [
      { id: "a", text: "Cup 1 only" },
      { id: "b", text: "Cup 3 only" },
      { id: "c", text: "All three cups" },
      { id: "d", text: "Cup 2 only" }
    ],
    answerId: "d",
    explanation: "Only Cup 2 had water, air, and warmth together. Cup 1 had no water. In Cup 3, boiling had removed most of the air, and the seeds were cut off from it.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q19",
    prompt: "Seeds placed on wet cotton inside a refrigerator did not sprout, but the same seeds on wet cotton on a kitchen shelf did. Which condition was missing in the refrigerator?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Warmth (a suitable temperature)" },
      { id: "c", text: "Air" },
      { id: "d", text: "Soil" }
    ],
    answerId: "b",
    explanation: "Both sets of seeds had water and air. The refrigerator was too cold, and seeds need a suitable warm temperature to germinate.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q20",
    prompt: "Which of these is NOT needed for most seeds to start germinating?",
    options: [
      { id: "a", text: "Sunlight" },
      { id: "b", text: "Water" },
      { id: "c", text: "Air" },
      { id: "d", text: "A suitable temperature" }
    ],
    answerId: "a",
    explanation: "Most seeds can sprout even in the dark because they use their stored food. Sunlight becomes necessary once the leaves need to make food.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q21",
    prompt: "Which order of germination is correct?",
    options: [
      { id: "a", text: "Seed absorbs water → seed coat bursts → radicle grows down → plumule grows up" },
      { id: "b", text: "Plumule grows up → seed absorbs water → radicle grows down → seed coat bursts" },
      { id: "c", text: "Seed coat bursts → leaves open → seed absorbs water → radicle grows down" },
      { id: "d", text: "Radicle grows down → seed absorbs water → leaves open → seed coat bursts" }
    ],
    answerId: "a",
    explanation: "Water comes first. The seed then swells, the coat splits, the root comes out, and the shoot grows up last.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q22",
    prompt: "Pea pods dry up and split open suddenly, flinging their seeds. Which other plant scatters its seeds in the same way?",
    options: [
      { id: "a", text: "Coconut" },
      { id: "b", text: "Cotton" },
      { id: "c", text: "Castor" },
      { id: "d", text: "Mango" }
    ],
    answerId: "c",
    explanation: "Castor fruits also burst open when they are dry and throw their seeds out. Coconut uses water, cotton uses wind, and mango uses animals.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q23",
    prompt: "Which statement about germination is correct?",
    options: [
      { id: "a", text: "Seeds cannot germinate without soil." },
      { id: "b", text: "Seeds need fertiliser to germinate." },
      { id: "c", text: "Seeds always germinate faster in the dark." },
      { id: "d", text: "A seed can germinate on wet cotton without soil because it uses its own stored food." }
    ],
    answerId: "d",
    explanation: "The cotyledons feed the young seedling at first. Wet cotton supplies water, the air supplies oxygen, and the room supplies warmth.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-a-q24",
    prompt: "Compare a dandelion seed with a coconut. Which statement is TRUE?",
    options: [
      { id: "a", text: "Both are dispersed by wind." },
      { id: "b", text: "The dandelion seed is tiny with parachute-like hairs for wind; the coconut is large and floats on water." },
      { id: "c", text: "Both are dispersed by sticking to animals." },
      { id: "d", text: "Both are dispersed by bursting pods." }
    ],
    answerId: "b",
    explanation: "A seed's features match how it travels. A light seed with hairs rides the wind, and a large fruit with an air-filled husk floats.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-plants-b-q01",
    prompt: "The tiny baby plant found inside a seed is called the —",
    options: [
      { id: "a", text: "fruit" },
      { id: "b", text: "flower" },
      { id: "c", text: "embryo" },
      { id: "d", text: "pod" }
    ],
    answerId: "c",
    explanation: "The embryo is the baby plant. It has a radicle (baby root) and a plumule (baby shoot), ready to grow when conditions are right.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q02",
    prompt: "What is the main job of the seed coat?",
    options: [
      { id: "a", text: "To protect the inner parts of the seed from injury and drying out" },
      { id: "b", text: "To make food using sunlight" },
      { id: "c", text: "To absorb minerals from the soil" },
      { id: "d", text: "To attract insects to the flower" }
    ],
    answerId: "a",
    explanation: "The seed coat is a protective cover. Making food is the job of leaves, and absorbing minerals is the job of roots.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q03",
    prompt: "A soaked bean seed splits easily into two halves. These two halves are the —",
    options: [
      { id: "a", text: "seed coats" },
      { id: "b", text: "radicles" },
      { id: "c", text: "plumules" },
      { id: "d", text: "cotyledons" }
    ],
    answerId: "d",
    explanation: "A bean has two cotyledons, which are seed leaves full of stored food. The tiny embryo lies tucked between them.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q04",
    prompt: "The process in which a seed sprouts and begins to grow into a young plant is called —",
    options: [
      { id: "a", text: "dispersal" },
      { id: "b", text: "germination" },
      { id: "c", text: "pollination" },
      { id: "d", text: "respiration" }
    ],
    answerId: "b",
    explanation: "Germination is the start of growth from a seed. Dispersal is about seeds moving to new places.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q05",
    prompt: "Why does a germinating seed need air?",
    options: [
      { id: "a", text: "It uses oxygen from the air to breathe and get energy from its stored food." },
      { id: "b", text: "It needs carbon dioxide to make soil." },
      { id: "c", text: "Air dries the seed so it can grow." },
      { id: "d", text: "Air pushes the seed coat off." }
    ],
    answerId: "a",
    explanation: "Like all living things, a seed breathes. It uses oxygen to release energy from its stored food for growth.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q06",
    prompt: "Which part of a seedling grows upward, toward light?",
    options: [
      { id: "a", text: "Radicle" },
      { id: "b", text: "Root hairs" },
      { id: "c", text: "Plumule (shoot)" },
      { id: "d", text: "Seed coat" }
    ],
    answerId: "c",
    explanation: "The plumule grows up into the shoot so the leaves can reach sunlight. The radicle grows down into the soil.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q07",
    prompt: "Lotus grows in ponds. Its fruit is light and spongy and can float. How are lotus seeds mainly dispersed?",
    options: [
      { id: "a", text: "By explosion" },
      { id: "b", text: "By water" },
      { id: "c", text: "By hooks catching on animals" },
      { id: "d", text: "By wind" }
    ],
    answerId: "b",
    explanation: "The spongy, floating fruit drifts on the water and carries its seeds to new spots in the pond or stream.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q08",
    prompt: "Seeds of the silk cotton (semal) tree are wrapped in white, fluffy fibres. These seeds are dispersed by —",
    options: [
      { id: "a", text: "explosion" },
      { id: "b", text: "water" },
      { id: "c", text: "animals" },
      { id: "d", text: "wind" }
    ],
    answerId: "d",
    explanation: "The fluffy fibres make the seeds very light, so even a gentle breeze can carry them far away.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q09",
    prompt: "A squirrel buries nuts to eat later but forgets some of them. Months later, new trees grow there. This is seed dispersal by —",
    options: [
      { id: "a", text: "wind" },
      { id: "b", text: "water" },
      { id: "c", text: "animals" },
      { id: "d", text: "explosion" }
    ],
    answerId: "c",
    explanation: "The squirrel carried the nuts and buried them in new places. That makes it an animal helper in dispersal.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q10",
    prompt: "When Ruellia (pataka) pods get wet, they snap open with a crackling sound and throw their seeds far away. This is dispersal by —",
    options: [
      { id: "a", text: "explosion" },
      { id: "b", text: "wind" },
      { id: "c", text: "water" },
      { id: "d", text: "animals" }
    ],
    answerId: "a",
    explanation: "The pod bursts and flings out its seeds. Water only triggers the burst; the seeds are not carried by water.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q11",
    prompt: "Which feature helps a seed or fruit \"hitch a ride\" on an animal?",
    options: [
      { id: "a", text: "Thin wings" },
      { id: "b", text: "Parachute-like hairs" },
      { id: "c", text: "A floating, air-filled husk" },
      { id: "d", text: "Hooks or spines" }
    ],
    answerId: "d",
    explanation: "Hooks and spines cling to fur, feathers, and clothes. Wings and hairs suit wind, and a floating husk suits water.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q12",
    prompt: "Mango, ber, and many berries have sweet, juicy, colourful fruits. How does this help their seeds get dispersed?",
    options: [
      { id: "a", text: "The wind is attracted to bright colours." },
      { id: "b", text: "Animals and birds eat the fruits and drop or spit out the seeds in other places." },
      { id: "c", text: "Juicy fruits float better on water." },
      { id: "d", text: "Sweet fruits burst open by themselves." }
    ],
    answerId: "b",
    explanation: "Tasty fruits work like a reward. Animals carry the seeds away while eating, then drop them somewhere new.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q13",
    prompt: "Aman placed moong seeds on wet cotton in two cups in the same warm room. He kept one cup in a dark cupboard and one near a window. Seeds in both cups sprouted. What can he conclude?",
    options: [
      { id: "a", text: "Light is needed for seeds to germinate." },
      { id: "b", text: "Light is not needed for these seeds to germinate." },
      { id: "c", text: "The cupboard seeds must be dead." },
      { id: "d", text: "Water is not needed for germination." }
    ],
    answerId: "b",
    explanation: "The only difference between the cups was light, and both sets sprouted. So light was not needed to start germination.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q14",
    prompt: "Why do farmers store seeds in dry, closed containers until sowing time?",
    options: [
      { id: "a", text: "So the seeds get more light" },
      { id: "b", text: "To make the seeds germinate faster" },
      { id: "c", text: "So insects can eat the seeds" },
      { id: "d", text: "To keep the seeds dry so they do not sprout or rot before sowing" }
    ],
    answerId: "d",
    explanation: "Without moisture, seeds stay dormant and safe. A closed container also keeps out insects and damp air.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q15",
    prompt: "As a bean seedling grows, its cotyledons slowly shrink and shrivel. Why?",
    options: [
      { id: "a", text: "The young plant uses up the food stored in them." },
      { id: "b", text: "They absorb too much water." },
      { id: "c", text: "Sunlight burns them." },
      { id: "d", text: "Birds peck at them." }
    ],
    answerId: "a",
    explanation: "The cotyledons are a food store. Once the seedling has used the food and its green leaves can make food, they shrink and fall off.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q16",
    prompt: "Which of these seeds has two cotyledons?",
    options: [
      { id: "a", text: "Maize" },
      { id: "b", text: "Wheat" },
      { id: "c", text: "Gram (chana)" },
      { id: "d", text: "Rice" }
    ],
    answerId: "c",
    explanation: "Gram, like bean and pea, splits into two halves (two cotyledons). Maize, wheat, and rice have only one.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q17",
    prompt: "Arrange these germination stages in the correct order. P: radicle comes out. Q: seed swells with water. R: first leaves open. S: shoot pushes up.",
    options: [
      { id: "a", text: "P, Q, R, S" },
      { id: "b", text: "S, R, Q, P" },
      { id: "c", text: "Q, S, P, R" },
      { id: "d", text: "Q, P, S, R" }
    ],
    answerId: "d",
    explanation: "The seed swells first (Q). Then the root comes out (P), the shoot grows up (S), and finally the leaves open (R).",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q18",
    prompt: "Coconut palms often grow on small islands far from other land. How did they most likely get there?",
    options: [
      { id: "a", text: "Coconuts floated across the sea and washed ashore." },
      { id: "b", text: "Strong winds blew the heavy coconuts there." },
      { id: "c", text: "Coconut fruits exploded and flew across the sea." },
      { id: "d", text: "Squirrels carried them across the sea." }
    ],
    answerId: "a",
    explanation: "Coconuts float on sea water for a long time. Their hard shell protects the seed until it lands on a beach and sprouts.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q19",
    prompt: "A plant makes many very light seeds with feathery hairs. Where are its new plants most likely to grow?",
    options: [
      { id: "a", text: "Only directly under the parent plant" },
      { id: "b", text: "Only underwater" },
      { id: "c", text: "Spread over a wide area, in the direction the wind blows" },
      { id: "d", text: "Only where birds sit" }
    ],
    answerId: "c",
    explanation: "Light, hairy seeds are carried by the wind. They can land far away, so the young plants appear spread out.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q20",
    prompt: "Which pair of plant and dispersal method is matched correctly?",
    options: [
      { id: "a", text: "Coconut – explosion" },
      { id: "b", text: "Drumstick (winged seeds) – wind" },
      { id: "c", text: "Balsam – water" },
      { id: "d", text: "Cotton – animals" }
    ],
    answerId: "b",
    explanation: "Drumstick seeds have papery wings that catch the wind. Coconut uses water, balsam uses explosion, and cotton uses wind.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q21",
    prompt: "Imagine a plant whose seeds all fall right under it, with no dispersal at all. What is most likely to happen?",
    options: [
      { id: "a", text: "The seedlings will be crowded, compete for light, water, and space, and many will die." },
      { id: "b", text: "The seedlings will grow faster than usual." },
      { id: "c", text: "The parent plant will produce more fruits." },
      { id: "d", text: "The seeds will never germinate at all." }
    ],
    answerId: "a",
    explanation: "The seeds can still sprout, but crowded seedlings share too little light, water, and space. This is why dispersal matters.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q22",
    prompt: "Meera wants to test whether seeds need water to germinate. Which setup is a fair test?",
    options: [
      { id: "a", text: "Cup 1 with wet cotton in sunlight; Cup 2 with dry cotton in a fridge" },
      { id: "b", text: "Different kinds of seeds in each cup" },
      { id: "c", text: "Only one cup with wet cotton" },
      { id: "d", text: "Two cups with the same kind of seeds, kept in the same place; only one gets water" }
    ],
    answerId: "d",
    explanation: "A fair test changes only one thing, here water. Option A also changes temperature, so you cannot tell which change mattered.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q23",
    prompt: "Which of these is NOT a way seeds are dispersed?",
    options: [
      { id: "a", text: "Wind" },
      { id: "b", text: "Water" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Animals" }
    ],
    answerId: "c",
    explanation: "Photosynthesis is how green leaves make food using sunlight. The four ways seeds travel are wind, water, animals, and explosion.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  },
  {
    id: "g5-sci-plants-b-q24",
    prompt: "Xanthium plants are often found growing along paths where cattle and goats walk every day. What is the best explanation?",
    options: [
      { id: "a", text: "Cattle plant the seeds on purpose." },
      { id: "b", text: "The hooked burrs stick to the animals' fur and drop off along the paths they use." },
      { id: "c", text: "The wind blows only along paths." },
      { id: "d", text: "Paths always have more water than fields." }
    ],
    answerId: "b",
    explanation: "Xanthium burrs hitch a ride on passing animals. They fall off along the animals' routes, so new plants grow beside the paths.",
    hints: ["Think about what you learned in the lesson.","Eliminate options that don't match the key idea."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🌱",
    title: "A seed's secret lunch box",
    body: [
      "Every seed holds a baby plant and its food.",
      "We'll peek inside, wake a seed up, and see how seeds travel.",
      "Skip anytime — practice sets are unlocked.",
    ],
    cta: "Open a seed!",
    visual: "plant",
    speak: "Every seed is like a tiny lunch box with a baby plant inside.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "What's inside a seed?",
    lead: "Tap each part of a bean seed.",
    visual: "plant",
    speak: "Tap each part. The seed coat protects. Cotyledons store food. The embryo is the baby plant.",
    cards: [
      { label: "Seed coat", reveal: "Outer skin — protects from injury and drying", emoji: "🧥" },
      { label: "Cotyledons", reveal: "Fat halves that store food for the baby plant", emoji: "🥜" },
      { label: "Radicle", reveal: "Baby root — grows downward first", emoji: "🪴" },
      { label: "Plumule", reveal: "Baby shoot — grows up toward light", emoji: "🌿" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Wake-up conditions",
    visual: "plant",
    speak: "Most seeds need water, air, and warmth to germinate. They do not need soil or sunlight to start.",
    steps: [
      "Germination = a seed starting to grow",
      "Needs: water + air + warmth",
      "Dry jar → no water → stays asleep",
      "Under boiled water → little air → no sprout",
      "Fridge → too cold → no sprout",
      "Surprise: soil and sunlight come later",
    ],
    punchline: "Water, air, and warmth wake most seeds.",
  },
  {
    id: "t1",
    type: "try",
    title: "Which jar sprouts?",
    prompt: "Moong on wet cotton in a warm room — will it sprout?",
    options: [
      { id: "a", text: "Yes — it has water, air, and warmth" },
      { id: "b", text: "No — it needs soil first" },
      { id: "c", text: "No — it needs bright sunlight" },
      { id: "d", text: "No — moong seeds never germinate" },
    ],
    answerId: "a",
    why: "Wet cotton gives water; room air and warmth do the rest. Stored food feeds the seedling.",
    visual: "plant",
    speak: "Will moong seeds on wet cotton in a warm room sprout?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Stages of germination",
    visual: "plant",
    speak: "First the seed soaks water and swells. The coat bursts. The radicle grows down. Then the plumule grows up and leaves open.",
    steps: [
      "Seed soaks water and swells",
      "Seed coat softens and splits",
      "Radicle comes out first → root",
      "Plumule grows up → shoot",
      "First leaves open; cotyledons shrink",
    ],
    punchline: "Root first, then shoot, then leaves.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "How seeds travel",
    lead: "Tap each dispersal helper.",
    visual: "plant",
    speak: "Wind, water, animals, and exploding pods help seeds travel away from the parent plant.",
    cards: [
      { label: "Wind", reveal: "Light seeds with hairs or wings (madar, cotton, drumstick)", emoji: "🌬️" },
      { label: "Water", reveal: "Floaters like coconut and lotus", emoji: "🥥" },
      { label: "Animals", reveal: "Hooks on fur, or seeds in fruits birds eat", emoji: "🐕" },
      { label: "Explosion", reveal: "Pods burst — balsam, pea, castor", emoji: "💥" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "plant",
    speak: "Why is seed dispersal useful for plants?",
    question: {
      id: "sci-check",
      prompt: "Why is seed dispersal useful?",
      options: [
        { id: "a", text: "It makes seeds heavier" },
        { id: "b", text: "It reduces crowding for light, water, and space" },
        { id: "c", text: "It keeps all seeds under the parent" },
        { id: "d", text: "It makes the parent taller" },
      ],
      answerId: "b",
      explanation: "Spreading out gives seedlings room to grow without fighting the parent.",
      hints: ["Think about crowded seedlings under one tree.", "What do plants compete for?"],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Seed scientist!",
    bullets: [
      "Parts: coat, cotyledons, radicle, plumule",
      "Germinate with water, air, warmth",
      "Dispersal: wind, water, animals, explosion",
      "Practice Set A or B whenever you're ready",
    ],
    cta: "Back to chapter",
    speak: "You learned seed parts, germination needs, and four ways seeds travel.",
  },
];

export const g5SciencePlants: ChapterDef = {
  id: "plants-seeds",
  title: "Plants: Seeds & Dispersal",
  emoji: "🌱",
  blurb: "Germination, seed parts & travel",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "living-things",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "living-things",
      questions: SET_B,
    },
  ],
  paperTopics: ["living-things","earth-space"],
};

export const g5SciencePlantsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
