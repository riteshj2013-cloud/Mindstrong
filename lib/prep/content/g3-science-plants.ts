import type { ChapterDef, PrepQuestion } from "../types";

/** Plant Parts - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-sci-plants-a-q01",
    prompt: "Which part of a plant usually grows under the soil?",
    options: [
      { id: "a", text: "Leaf" },
      { id: "b", text: "Root" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "b",
    explanation: "Roots grow down into the soil. They drink water and hold the plant in place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q02",
    prompt: "Which part of a plant makes food for the plant?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Leaf" }
    ],
    answerId: "d",
    explanation: "Leaves are the plant's kitchen. They make food using sunlight, air and water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q03",
    prompt: "What do roots take from the soil?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Sunlight" },
      { id: "c", text: "Fruits" },
      { id: "d", text: "Flowers" }
    ],
    answerId: "a",
    explanation: "Roots drink water from the soil, like you drink juice through a straw.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q04",
    prompt: "Which part holds the plant up and carries water to the leaves?",
    options: [
      { id: "a", text: "Flower" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "c",
    explanation: "The stem stands tall and works like a pipe. Water goes up the stem to the leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q05",
    prompt: "A flower slowly turns into a ______.",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "leaf" },
      { id: "c", text: "fruit" },
      { id: "d", text: "stem" }
    ],
    answerId: "c",
    explanation: "After a flower blooms, it slowly grows into a fruit. That is how we get mangoes and apples.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q06",
    prompt: "What do we find inside most fruits?",
    options: [
      { id: "a", text: "Seeds" },
      { id: "b", text: "Roots" },
      { id: "c", text: "Leaves" },
      { id: "d", text: "Stems" }
    ],
    answerId: "a",
    explanation: "Fruits keep seeds safe inside. Cut an apple and you will see small seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q07",
    prompt: "Most leaves are which colour?",
    options: [
      { id: "a", text: "Blue" },
      { id: "b", text: "Black" },
      { id: "c", text: "Pink" },
      { id: "d", text: "Green" }
    ],
    answerId: "d",
    explanation: "Most leaves are green. The green colour helps them use sunlight to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q08",
    prompt: "What does a leaf need to make food?",
    options: [
      { id: "a", text: "Sand, salt and sugar" },
      { id: "b", text: "Sunlight, air and water" },
      { id: "c", text: "Soil, stones and heat" },
      { id: "d", text: "Moonlight and darkness" }
    ],
    answerId: "b",
    explanation: "Leaves mix sunlight, air and water to make food. This is called photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q09",
    prompt: "A seed can grow into a ______.",
    options: [
      { id: "a", text: "new plant" },
      { id: "b", text: "stone" },
      { id: "c", text: "insect" },
      { id: "d", text: "flower pot" }
    ],
    answerId: "a",
    explanation: "A seed has a baby plant sleeping inside. With water and warmth, it grows into a new plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q10",
    prompt: "Which part of a plant often has bright colours and a sweet smell?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Seed" }
    ],
    answerId: "c",
    explanation: "Flowers are often bright and sweet-smelling. This brings bees and butterflies to them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q11",
    prompt: "When we eat a carrot, which part of the plant are we eating?",
    options: [
      { id: "a", text: "Stem" },
      { id: "b", text: "Root" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Flower" }
    ],
    answerId: "b",
    explanation: "A carrot is a root. It grows down into the soil and stores food for the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q12",
    prompt: "When we eat spinach (palak), which part of the plant are we eating?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Fruit" },
      { id: "c", text: "Seed" },
      { id: "d", text: "Leaf" }
    ],
    answerId: "d",
    explanation: "Spinach is made of soft green leaves. We cook these leaves to eat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q13",
    prompt: "A potato grows under the soil. But which part of the plant is it?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Leaf" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Stem" }
    ],
    answerId: "d",
    explanation: "A potato is a stem that grows under the soil. Its little \"eyes\" can grow new shoots. Roots do not have eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q14",
    prompt: "Which of these is a fruit?",
    options: [
      { id: "a", text: "Radish" },
      { id: "b", text: "Apple" },
      { id: "c", text: "Cabbage" },
      { id: "d", text: "Ginger" }
    ],
    answerId: "b",
    explanation: "An apple grows from a flower and has seeds inside, so it is a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q15",
    prompt: "Riya tries to pull a weed out of the garden. It is very hard to pull. Why?",
    options: [
      { id: "a", text: "Its flowers are too big" },
      { id: "b", text: "Its leaves are too green" },
      { id: "c", text: "Its roots hold the soil tightly" },
      { id: "d", text: "Its fruits are too heavy" }
    ],
    answerId: "c",
    explanation: "Roots spread into the soil and hold on tight. That is why a plant is hard to pull out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q16",
    prompt: "Sweet sugarcane juice comes from which part of the plant?",
    options: [
      { id: "a", text: "Stem" },
      { id: "b", text: "Root" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Flower" }
    ],
    answerId: "a",
    explanation: "The tall, thick sugarcane stick is a stem. It stores sweet juice inside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q17",
    prompt: "When we eat cauliflower, which part of the plant are we eating?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "c",
    explanation: "The white part of a cauliflower is made of many tiny flower buds packed together.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q18",
    prompt: "The green peas we eat are the plant's ______.",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "stems" },
      { id: "c", text: "leaves" },
      { id: "d", text: "seeds" }
    ],
    answerId: "d",
    explanation: "Peas grow inside a pod. Each pea is a seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q19",
    prompt: "Aman forgets to water his plant for many days. What will most likely happen?",
    options: [
      { id: "a", text: "Its leaves droop and dry up" },
      { id: "b", text: "It grows many more flowers" },
      { id: "c", text: "Its roots turn into fruits" },
      { id: "d", text: "Its leaves turn blue" }
    ],
    answerId: "a",
    explanation: "Without water, the roots have nothing to drink. The leaves droop and dry up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q20",
    prompt: "Which group has ONLY roots?",
    options: [
      { id: "a", text: "Potato and carrot" },
      { id: "b", text: "Radish and carrot" },
      { id: "c", text: "Spinach and radish" },
      { id: "d", text: "Apple and beetroot" }
    ],
    answerId: "b",
    explanation: "Radish and carrot are both roots. Potato is a stem, spinach is a leaf and apple is a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q21",
    prompt: "Tara puts a celery stick in red-coloured water. The next day, she sees red lines in its leaves. What does this show?",
    options: [
      { id: "a", text: "Leaves drink from the air" },
      { id: "b", text: "The stem carries water up to the leaves" },
      { id: "c", text: "Roots make food for the plant" },
      { id: "d", text: "Flowers carry water to the leaves" }
    ],
    answerId: "b",
    explanation: "The red water moved up the celery stem into the leaves. This shows the stem works like a water pipe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q22",
    prompt: "A plant is kept inside a dark cupboard for many days. It becomes weak and pale. Why?",
    options: [
      { id: "a", text: "Its leaves cannot make food without sunlight" },
      { id: "b", text: "Its roots got too much sunlight" },
      { id: "c", text: "Its stem turned into a root" },
      { id: "d", text: "Its seeds fell out" }
    ],
    answerId: "a",
    explanation: "Leaves need sunlight to make food. In the dark, the plant gets no food, so it grows weak.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q23",
    prompt: "Someone plucks off all the flowers from a mango tree. What will the tree NOT give this year?",
    options: [
      { id: "a", text: "Roots" },
      { id: "b", text: "Leaves" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Mangoes" }
    ],
    answerId: "d",
    explanation: "Mangoes grow from mango flowers. With no flowers, there can be no mangoes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-a-q24",
    prompt: "Which is the correct order?",
    options: [
      { id: "a", text: "Fruit \u2192 Seed \u2192 Flower \u2192 Plant" },
      { id: "b", text: "Flower \u2192 Plant \u2192 Seed \u2192 Fruit" },
      { id: "c", text: "Seed \u2192 Plant \u2192 Flower \u2192 Fruit" },
      { id: "d", text: "Plant \u2192 Fruit \u2192 Seed \u2192 Flower" }
    ],
    answerId: "c",
    explanation: "A seed grows into a plant. The plant gets flowers. The flowers turn into fruits, and fruits hold new seeds.\n\n---",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-sci-plants-b-q01",
    prompt: "The thick, brown trunk of a tree is which part?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Leaf" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Flower" }
    ],
    answerId: "c",
    explanation: "A tree trunk is a big, strong stem. It holds the tree up tall.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q02",
    prompt: "How do roots help a plant?",
    options: [
      { id: "a", text: "They hold it firmly in the soil" },
      { id: "b", text: "They make the flowers smell" },
      { id: "c", text: "They catch insects" },
      { id: "d", text: "They make sunlight" }
    ],
    answerId: "a",
    explanation: "Roots hold the plant firmly in the soil. They also drink water for the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q03",
    prompt: "Which part of the plant keeps the seeds safe?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "d",
    explanation: "The fruit wraps around the seeds and keeps them safe until they are ready.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q04",
    prompt: "Food made in the leaves goes to other parts of the plant through the ______.",
    options: [
      { id: "a", text: "flower" },
      { id: "b", text: "stem" },
      { id: "c", text: "seed" },
      { id: "d", text: "soil" }
    ],
    answerId: "b",
    explanation: "The stem is like a two-way pipe. Water goes up, and food from the leaves goes to other parts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q05",
    prompt: "What does the word \"photosynthesis\" mean?",
    options: [
      { id: "a", text: "Plants making food with sunlight" },
      { id: "b", text: "Plants drinking milk" },
      { id: "c", text: "Plants sleeping at night" },
      { id: "d", text: "Seeds falling from trees" }
    ],
    answerId: "a",
    explanation: "Photosynthesis is a big word for a simple idea. It means leaves making food with sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q06",
    prompt: "Bees and butterflies love to visit which part of a plant?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Seed" },
      { id: "d", text: "Flower" }
    ],
    answerId: "d",
    explanation: "Bees and butterflies visit flowers for sweet juice. This visit helps flowers turn into fruits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q07",
    prompt: "Which part of a plant is usually flat, thin and green?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Seed" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "c",
    explanation: "Most leaves are flat, thin and green. Being flat helps them catch lots of sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q08",
    prompt: "What does a seed need to start growing?",
    options: [
      { id: "a", text: "Only darkness" },
      { id: "b", text: "Water, air and warmth" },
      { id: "c", text: "Lots of salt" },
      { id: "d", text: "Ice" }
    ],
    answerId: "b",
    explanation: "A seed wakes up and sprouts when it gets water, air and warmth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q09",
    prompt: "The stem carries water from the ______ to the leaves.",
    options: [
      { id: "a", text: "flowers" },
      { id: "b", text: "roots" },
      { id: "c", text: "fruits" },
      { id: "d", text: "seeds" }
    ],
    answerId: "b",
    explanation: "Roots drink water from the soil. The stem then carries this water up to the leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q10",
    prompt: "Which part do we call the \"kitchen\" of the plant?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Seed" }
    ],
    answerId: "c",
    explanation: "Leaves cook food for the plant, so we call them the plant's kitchen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q11",
    prompt: "When we eat a radish (mooli), which part of the plant are we eating?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "a",
    explanation: "A radish is a root. It grows deep into the soil and stores food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q12",
    prompt: "When we eat cabbage, which part of the plant are we eating?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Seed" },
      { id: "d", text: "Leaf" }
    ],
    answerId: "d",
    explanation: "A cabbage is made of many leaves wrapped tightly into a ball.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q13",
    prompt: "Ginger (adrak) grows under the soil, just like potato. Which part of the plant is it?",
    options: [
      { id: "a", text: "Stem" },
      { id: "b", text: "Leaf" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "a",
    explanation: "Ginger is a stem that grows under the soil. Like potato, new shoots can grow from it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q14",
    prompt: "Mango, banana and guava are all ______.",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "fruits" },
      { id: "c", text: "stems" },
      { id: "d", text: "leaves" }
    ],
    answerId: "b",
    explanation: "Mango, banana and guava all grow from flowers. So they are all fruits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q15",
    prompt: "Rajma and moong dal come from which part of the plant?",
    options: [
      { id: "a", text: "Roots" },
      { id: "b", text: "Leaves" },
      { id: "c", text: "Flowers" },
      { id: "d", text: "Seeds" }
    ],
    answerId: "d",
    explanation: "Rajma and moong are seeds. They grow inside pods on the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q16",
    prompt: "A tomato has many small seeds inside it. So a tomato is a ______.",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "leaf" },
      { id: "c", text: "fruit" },
      { id: "d", text: "stem" }
    ],
    answerId: "c",
    explanation: "A part that grows from a flower and holds seeds is a fruit. So a tomato is a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q17",
    prompt: "Neha keeps a plant near a window. After some days, it bends towards the window. Why?",
    options: [
      { id: "a", text: "It wants to see the rain" },
      { id: "b", text: "Its roots are looking for sand" },
      { id: "c", text: "It is running away from the wind" },
      { id: "d", text: "Its leaves need sunlight to make food" }
    ],
    answerId: "d",
    explanation: "Plants grow towards light. Their leaves need sunlight to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q18",
    prompt: "A strong storm blows, but the big tree does not fall. Which part helps the most?",
    options: [
      { id: "a", text: "Its deep, strong roots" },
      { id: "b", text: "Its colourful flowers" },
      { id: "c", text: "Its sweet fruits" },
      { id: "d", text: "Its small seeds" }
    ],
    answerId: "a",
    explanation: "Deep roots hold the tree tightly in the ground, so the wind cannot knock it over.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q19",
    prompt: "Which plant part is matched with the right job?",
    options: [
      { id: "a", text: "Leaf \u2014 holds the plant in the soil" },
      { id: "b", text: "Root \u2014 makes food with sunlight" },
      { id: "c", text: "Stem \u2014 carries water to the leaves" },
      { id: "d", text: "Flower \u2014 drinks water from the soil" }
    ],
    answerId: "c",
    explanation: "The stem carries water up to the leaves. Roots hold the plant, and leaves make the food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q20",
    prompt: "A basket has carrot, beetroot and sweet potato. What label fits this basket best?",
    options: [
      { id: "a", text: "Leaves" },
      { id: "b", text: "Roots" },
      { id: "c", text: "Fruits" },
      { id: "d", text: "Flowers" }
    ],
    answerId: "b",
    explanation: "Carrot, beetroot and sweet potato are all roots. They store food under the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q21",
    prompt: "An old potato is left in the kitchen. Small shoots grow from its \"eyes\". What does this tell us?",
    options: [
      { id: "a", text: "Potato is a root because it grows under the soil" },
      { id: "b", text: "Potato is a fruit because it is round" },
      { id: "c", text: "Potato is a stem because new shoots grow from its eyes" },
      { id: "d", text: "Potato is a leaf because it stores food" }
    ],
    answerId: "c",
    explanation: "The eyes on a potato are buds. Buds grow on stems, so a potato is a stem.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q22",
    prompt: "Rohan cuts off all the leaves of a small plant. What will happen to the plant?",
    options: [
      { id: "a", text: "It will grow faster" },
      { id: "b", text: "It will make more food" },
      { id: "c", text: "Its roots will make the food instead" },
      { id: "d", text: "It cannot make food and will grow weak" }
    ],
    answerId: "d",
    explanation: "Leaves make the plant's food. Without leaves, the plant gets no food and grows weak.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q23",
    prompt: "A cactus grows in the hot, dry desert. It has spines instead of wide leaves, and a thick green stem. How does its thick stem help it?",
    options: [
      { id: "a", text: "It makes the cactus taste sweet" },
      { id: "b", text: "It stores water for dry days" },
      { id: "c", text: "It pulls sand into the plant" },
      { id: "d", text: "It helps the cactus grow under the sea" }
    ],
    answerId: "b",
    explanation: "The desert has very little rain. The cactus keeps water in its thick stem to use later.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-plants-b-q24",
    prompt: "Meena says, \"Every plant part that grows under the soil is a root.\" Which food shows that Meena is wrong?",
    options: [
      { id: "a", text: "Potato" },
      { id: "b", text: "Carrot" },
      { id: "c", text: "Radish" },
      { id: "d", text: "Beetroot" }
    ],
    answerId: "a",
    explanation: "A potato grows under the soil, but it is a stem, not a root. Carrot, radish and beetroot really are roots.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf31",
    title: "Plant parts",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Plants have roots, stem, leaves, flowers and fruits.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Roots", reveal: "Take up water and hold the plant", emoji: "\ud83e\udeb4" },
      { label: "Stem", reveal: "Carries water up", emoji: "\ud83c\udf8b" },
      { label: "Leaves", reveal: "Make food with sunlight", emoji: "\ud83c\udf43" },
      { label: "Flower and fruit", reveal: "Help make new plants", emoji: "\ud83c\udf38" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which part makes food using sunlight?",
    options: [
        { id: "a", text: "Roots" },
        { id: "b", text: "Leaves" },
        { id: "c", text: "Flower only" },
        { id: "d", text: "Bark" }
    ],
    answerId: "b",
    why: "Leaves catch sunlight to make food.",
    visual: "plant",
    speak: "Which part makes food using sunlight?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know each plant part", "Leaves make food", "Roots drink water", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g3SciencePlants: ChapterDef = {
  id: "plants-parts",
  title: "Plant Parts",
  emoji: "\ud83c\udf31",
  blurb: "Roots, stem, leaves and more",
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
  paperTopics: ["living-things", "human-body"],
};

export const g3SciencePlantsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
