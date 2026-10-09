import type { ChapterDef, PrepQuestion } from "../types";

/** Plants - parts, photosynthesis, germination, uses (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-plants-a-q01",
    prompt: "Which part of a plant usually grows under the soil and takes in water?",
    options: [
      { id: "a", text: "Root" },
      { id: "b", text: "Flower" },
      { id: "c", text: "Fruit" },
      { id: "d", text: "Leaf" }
    ],
    answerId: "a",
    explanation: "Roots grow down into the soil. They take in water and minerals and hold the plant firmly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q02",
    prompt: "Which plant part is often called the plant's kitchen because it makes food?",
    options: [
      { id: "a", text: "Stem" },
      { id: "b", text: "Leaf" },
      { id: "c", text: "Root" },
      { id: "d", text: "Seed" }
    ],
    answerId: "b",
    explanation: "Green leaves make food for the plant using sunlight, air and water. That process is called photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q03",
    prompt: "What do we call the process by which green leaves make food?",
    options: [
      { id: "a", text: "Germination" },
      { id: "b", text: "Evaporation" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Digestion" }
    ],
    answerId: "c",
    explanation: "Photosynthesis means green leaves make food using sunlight, air (carbon dioxide) and water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q04",
    prompt: "Which gas do green plants take in from air during photosynthesis?",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Nitrogen" },
      { id: "c", text: "Steam" },
      { id: "d", text: "Carbon dioxide" }
    ],
    answerId: "d",
    explanation: "During photosynthesis, plants take in carbon dioxide from the air and give out oxygen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q05",
    prompt: "Which gas do green plants give out during photosynthesis that animals need to breathe?",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Carbon dioxide" },
      { id: "c", text: "Smoke" },
      { id: "d", text: "Helium" }
    ],
    answerId: "a",
    explanation: "Photosynthesis releases oxygen into the air. Animals and people need oxygen to breathe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q06",
    prompt: "The green colour in leaves comes mainly from a pigment called ______.",
    options: [
      { id: "a", text: "Haemoglobin" },
      { id: "b", text: "Chlorophyll" },
      { id: "c", text: "Melanin" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "b",
    explanation: "Chlorophyll is the green pigment that helps leaves trap sunlight for photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q07",
    prompt: "What does the stem mainly do for a plant?",
    options: [
      { id: "a", text: "Make seeds only" },
      { id: "b", text: "Dig deep into the soil" },
      { id: "c", text: "Hold the plant up and carry water to the leaves" },
      { id: "d", text: "Catch insects for food" }
    ],
    answerId: "c",
    explanation: "The stem supports the plant and works like a pipe, carrying water and food between roots and leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q08",
    prompt: "A carrot that we pull from the ground is mainly which plant part?",
    options: [
      { id: "a", text: "Leaf" },
      { id: "b", text: "Flower" },
      { id: "c", text: "Fruit" },
      { id: "d", text: "Root" }
    ],
    answerId: "d",
    explanation: "A carrot is a swollen root that stores food. It grows under the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q09",
    prompt: "When we eat spinach (palak), which plant part are we mostly eating?",
    options: [
      { id: "a", text: "Leaf" },
      { id: "b", text: "Root" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Seed" }
    ],
    answerId: "a",
    explanation: "Spinach is made of soft green leaves. Leafy vegetables give us vitamins and fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q10",
    prompt: "What do we usually find inside a ripe mango or apple?",
    options: [
      { id: "a", text: "Roots" },
      { id: "b", text: "Seeds" },
      { id: "c", text: "Leaves" },
      { id: "d", text: "Stems" }
    ],
    answerId: "b",
    explanation: "Fruits grow from flowers and usually protect seeds inside. Seeds can grow into new plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q11",
    prompt: "Germination means ______.",
    options: [
      { id: "a", text: "A leaf falling off" },
      { id: "b", text: "A flower changing colour" },
      { id: "c", text: "A seed starting to grow into a young plant" },
      { id: "d", text: "A fruit becoming sweet" }
    ],
    answerId: "c",
    explanation: "Germination is when a seed wakes up and begins to grow into a seedling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q12",
    prompt: "Which three things do most seeds need to germinate?",
    options: [
      { id: "a", text: "Soil, moonlight and sugar" },
      { id: "b", text: "Only bright sunlight" },
      { id: "c", text: "Salt, ice and wind" },
      { id: "d", text: "Water, air and warmth" }
    ],
    answerId: "d",
    explanation: "Most seeds need water, air and warmth to germinate. Soil and sunlight help later as the seedling grows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q13",
    prompt: "In germination, which part of the seedling usually comes out of the seed first?",
    options: [
      { id: "a", text: "Root (radicle)" },
      { id: "b", text: "Flower" },
      { id: "c", text: "Fruit" },
      { id: "d", text: "Leaf tip only" }
    ],
    answerId: "a",
    explanation: "The baby root, called the radicle, usually comes out first and grows downward into the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q14",
    prompt: "Why do farmers grow neem, tulsi and other useful plants near homes and fields?",
    options: [
      { id: "a", text: "Only for decoration" },
      { id: "b", text: "They have many uses such as shade, medicine and clean air" },
      { id: "c", text: "They stop rainfall" },
      { id: "d", text: "They make the soil salty" }
    ],
    answerId: "b",
    explanation: "Many plants give shade, medicine, timber, fibre, food and fresher air. Neem and tulsi are useful in Indian homes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q15",
    prompt: "Cotton clothes come mainly from which plant product?",
    options: [
      { id: "a", text: "Wooden stems" },
      { id: "b", text: "Tree roots" },
      { id: "c", text: "Soft fibres around cotton seeds" },
      { id: "d", text: "Fruit juice" }
    ],
    answerId: "c",
    explanation: "Cotton fibre grows around cotton seeds. It is spun into thread and woven into cloth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q16",
    prompt: "Which of these is a plant product used as food in India?",
    options: [
      { id: "a", text: "Plastic bottle" },
      { id: "b", text: "Glass bangle" },
      { id: "c", text: "Iron nail" },
      { id: "d", text: "Rice grain" }
    ],
    answerId: "d",
    explanation: "Rice is a grain from the rice plant. Many of our everyday foods come from plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q17",
    prompt: "A potato grows under the soil and has \"eyes\" that can sprout. A potato is a ______.",
    options: [
      { id: "a", text: "Underground stem" },
      { id: "b", text: "Root" },
      { id: "c", text: "Flower" },
      { id: "d", text: "Fruit" }
    ],
    answerId: "a",
    explanation: "A potato is an underground stem that stores food. New shoots can grow from its eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q18",
    prompt: "Flowers are important to plants mainly because they ______.",
    options: [
      { id: "a", text: "Make the soil dry" },
      { id: "b", text: "Help the plant make fruits and seeds" },
      { id: "c", text: "Stop photosynthesis" },
      { id: "d", text: "Turn into roots" }
    ],
    answerId: "b",
    explanation: "Flowers help plants reproduce. After pollination, flowers can grow into fruits that hold seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q19",
    prompt: "Which of these plants has a thick woody stem called a trunk?",
    options: [
      { id: "a", text: "Grass" },
      { id: "b", text: "Wheat seedling" },
      { id: "c", text: "Mango tree" },
      { id: "d", text: "Moss on a wall" }
    ],
    answerId: "c",
    explanation: "Trees like mango have a thick woody stem called a trunk. Grass has a soft, thin stem.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q20",
    prompt: "Leaves have tiny openings that help gases move in and out. These openings are called ______.",
    options: [
      { id: "a", text: "Roots" },
      { id: "b", text: "Petals" },
      { id: "c", text: "Seeds" },
      { id: "d", text: "Stomata" }
    ],
    answerId: "d",
    explanation: "Stomata are tiny pores on leaves. Carbon dioxide enters and oxygen and water vapour can leave through them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q21",
    prompt: "Riya puts dry moong seeds in a dry jar with no water. Will they germinate soon?",
    options: [
      { id: "a", text: "No, because seeds usually need water to start growing" },
      { id: "b", text: "Yes, because seeds never need water" },
      { id: "c", text: "Yes, if the jar is painted green" },
      { id: "d", text: "Yes, if she adds salt" }
    ],
    answerId: "a",
    explanation: "Without water, most seeds stay dormant and do not germinate. Water helps the seed swell and wake up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q22",
    prompt: "Which plant part carries water from the roots up to the leaves?",
    options: [
      { id: "a", text: "Petal" },
      { id: "b", text: "Stem" },
      { id: "c", text: "Seed coat" },
      { id: "d", text: "Fruit skin" }
    ],
    answerId: "b",
    explanation: "Water travels up through tubes in the stem from the roots to the leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q23",
    prompt: "Teak and sal wood used for furniture come from ______.",
    options: [
      { id: "a", text: "Animal bones" },
      { id: "b", text: "Sea sand" },
      { id: "c", text: "Tree trunks" },
      { id: "d", text: "Plastic bags" }
    ],
    answerId: "c",
    explanation: "Timber for furniture comes from the woody trunks of trees such as teak and sal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-a-q24",
    prompt: "Which statement about green plants is true?",
    options: [
      { id: "a", text: "They only take in oxygen and never give any gas out" },
      { id: "b", text: "They do not need sunlight at all" },
      { id: "c", text: "They eat insects for all their food" },
      { id: "d", text: "They make their own food and also help keep air fresh by giving out oxygen" }
    ],
    answerId: "d",
    explanation: "Green plants make food by photosynthesis and release oxygen, which helps living things breathe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-plants-b-q01",
    prompt: "Which of these is NOT a main job of roots?",
    options: [
      { id: "a", text: "Making colourful petals" },
      { id: "b", text: "Taking in water" },
      { id: "c", text: "Holding the plant in soil" },
      { id: "d", text: "Taking in minerals" }
    ],
    answerId: "a",
    explanation: "Roots take in water and minerals and anchor the plant. Making petals is a job of flowers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q02",
    prompt: "Photosynthesis mainly happens in which plant part?",
    options: [
      { id: "a", text: "Dry wooden bark" },
      { id: "b", text: "Green leaves" },
      { id: "c", text: "Hard seeds only" },
      { id: "d", text: "Underground stones" }
    ],
    answerId: "b",
    explanation: "Green leaves contain chlorophyll and are the main place where photosynthesis happens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q03",
    prompt: "During photosynthesis, plants need sunlight mainly to ______.",
    options: [
      { id: "a", text: "Paint the leaves blue" },
      { id: "b", text: "Freeze the water in roots" },
      { id: "c", text: "Provide energy to make food" },
      { id: "d", text: "Turn seeds into rocks" }
    ],
    answerId: "c",
    explanation: "Sunlight gives the energy that chlorophyll uses to make food from carbon dioxide and water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q04",
    prompt: "Which of these is a fibrous root system plant?",
    options: [
      { id: "a", text: "Carrot" },
      { id: "b", text: "Radish" },
      { id: "c", text: "Beetroot" },
      { id: "d", text: "Grass" }
    ],
    answerId: "d",
    explanation: "Grass has many thin fibrous roots. Carrot, radish and beetroot have a thick tap root.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q05",
    prompt: "A mango grows from a flower on the tree. A mango is a ______.",
    options: [
      { id: "a", text: "Fruit" },
      { id: "b", text: "Root" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Stem bark" }
    ],
    answerId: "a",
    explanation: "A mango develops from a flower and holds the seed, so it is a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q06",
    prompt: "Which condition would most likely stop a healthy seed from germinating?",
    options: [
      { id: "a", text: "A little water, air and a warm room" },
      { id: "b", text: "Keeping it in a freezer with no warmth" },
      { id: "c", text: "Placing it on wet cotton in a warm cupboard" },
      { id: "d", text: "Sprinkling it lightly with water daily" }
    ],
    answerId: "b",
    explanation: "Most seeds need warmth as well as water and air. A freezer is too cold for germination.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q07",
    prompt: "The baby shoot that grows upward from a germinating seed is called the ______.",
    options: [
      { id: "a", text: "Radicle" },
      { id: "b", text: "Petiole" },
      { id: "c", text: "Plumule" },
      { id: "d", text: "Stamen" }
    ],
    answerId: "c",
    explanation: "The plumule is the baby shoot that grows up toward light. The radicle is the baby root.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q08",
    prompt: "Why do people plant trees along roads and in parks?",
    options: [
      { id: "a", text: "Trees make the air dirtier" },
      { id: "b", text: "Trees stop all rain forever" },
      { id: "c", text: "Trees remove all soil" },
      { id: "d", text: "Trees give shade, fresher air and homes for birds" }
    ],
    answerId: "d",
    explanation: "Trees give shade, release oxygen, reduce dust and heat, and provide homes for birds and insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q09",
    prompt: "Jute bags are made from plant ______.",
    options: [
      { id: "a", text: "Fibres from jute stems" },
      { id: "b", text: "Flowers only" },
      { id: "c", text: "Animal fur" },
      { id: "d", text: "Metal wires" }
    ],
    answerId: "a",
    explanation: "Jute fibre comes from the stem of the jute plant and is used to make bags and mats.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q10",
    prompt: "Which plant product is used as a medicine or home remedy in many Indian houses?",
    options: [
      { id: "a", text: "Plastic wrapper" },
      { id: "b", text: "Tulsi leaves" },
      { id: "c", text: "Glass marble" },
      { id: "d", text: "Rubber tyre only" }
    ],
    answerId: "b",
    explanation: "Tulsi (holy basil) leaves are used in many homes for herbal drinks and remedies.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q11",
    prompt: "Water from the soil reaches the leaves mainly by travelling through the ______.",
    options: [
      { id: "a", text: "Flower petals" },
      { id: "b", text: "Fruit juice" },
      { id: "c", text: "Stem" },
      { id: "d", text: "Seed coat" }
    ],
    answerId: "c",
    explanation: "The stem has tiny tubes that carry water upward from roots to leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q12",
    prompt: "Which of these foods comes from a plant seed or grain?",
    options: [
      { id: "a", text: "Egg" },
      { id: "b", text: "Fish" },
      { id: "c", text: "Milk" },
      { id: "d", text: "Wheat roti" }
    ],
    answerId: "d",
    explanation: "Wheat grains are seeds of the wheat plant. Roti is made from wheat flour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q13",
    prompt: "A cactus stores water in its thick stem. This helps it live in a ______ place.",
    options: [
      { id: "a", text: "Dry desert" },
      { id: "b", text: "Very wet swamp only" },
      { id: "c", text: "Deep ocean" },
      { id: "d", text: "Snowy polar ice only" }
    ],
    answerId: "a",
    explanation: "Desert plants like cactus store water and often have spines instead of broad leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q14",
    prompt: "What do bees and butterflies often carry from flower to flower?",
    options: [
      { id: "a", text: "Soil" },
      { id: "b", text: "Pollen" },
      { id: "c", text: "Roots" },
      { id: "d", text: "Bark" }
    ],
    answerId: "b",
    explanation: "Insects carry pollen from flower to flower. This helps plants make fruits and seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q15",
    prompt: "Which statement about germination is correct?",
    options: [
      { id: "a", text: "Seeds need only moonlight to grow" },
      { id: "b", text: "Seeds eat insects for energy" },
      { id: "c", text: "A seed uses food stored inside it until leaves can make food" },
      { id: "d", text: "Germination means a fruit ripening" }
    ],
    answerId: "c",
    explanation: "Until the seedling's leaves can photosynthesise, the young plant uses food stored in the seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q16",
    prompt: "Paper is mostly made from ______.",
    options: [
      { id: "a", text: "Animal bones" },
      { id: "b", text: "Pure plastic only" },
      { id: "c", text: "Sea salt" },
      { id: "d", text: "Plant fibres from wood pulp" }
    ],
    answerId: "d",
    explanation: "Most paper is made from wood pulp, which comes from plant fibres in trees.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q17",
    prompt: "Which plant part attracts insects with colour and scent?",
    options: [
      { id: "a", text: "Flower" },
      { id: "b", text: "Root tip" },
      { id: "c", text: "Dry bark" },
      { id: "d", text: "Underground potato eye" }
    ],
    answerId: "a",
    explanation: "Bright, scented flowers attract insects that help with pollination.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q18",
    prompt: "A tap root is best described as ______.",
    options: [
      { id: "a", text: "Many equal thin roots with no main root" },
      { id: "b", text: "One main thick root growing downward with smaller side roots" },
      { id: "c", text: "A green leaf with veins" },
      { id: "d", text: "A soft petal" }
    ],
    answerId: "b",
    explanation: "A tap root has one main root going deep, with thinner side roots. Carrot and radish show this.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q19",
    prompt: "Why should we not waste paper and cut trees carelessly?",
    options: [
      { id: "a", text: "Paper grows on its own in rivers" },
      { id: "b", text: "Trees are useless to people" },
      { id: "c", text: "Trees and plant products are useful and trees help the environment" },
      { id: "d", text: "Cutting all trees makes more rain instantly" }
    ],
    answerId: "c",
    explanation: "Trees give oxygen, shade, wood and homes for animals. Saving paper helps save trees.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q20",
    prompt: "Which of these is a use of plants for clothing?",
    options: [
      { id: "a", text: "Silk from cotton only" },
      { id: "b", text: "Iron from leaves" },
      { id: "c", text: "Glass from roots" },
      { id: "d", text: "Cotton and jute fibres made into cloth and bags" }
    ],
    answerId: "d",
    explanation: "Cotton and jute fibres from plants are used to make clothes and bags.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q21",
    prompt: "Arjun covers a green plant with a thick black box for many days. What is most likely?",
    options: [
      { id: "a", text: "It will struggle to make food without light" },
      { id: "b", text: "It will photosynthesise better" },
      { id: "c", text: "It will turn into a rock" },
      { id: "d", text: "It will need no water ever again" }
    ],
    answerId: "a",
    explanation: "Without light, photosynthesis slows or stops, so the plant cannot make food well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q22",
    prompt: "Which gas do we (and other animals) give out that plants can use in photosynthesis?",
    options: [
      { id: "a", text: "Oxygen only" },
      { id: "b", text: "Carbon dioxide" },
      { id: "c", text: "Ozone from machines" },
      { id: "d", text: "Helium balloons" }
    ],
    answerId: "b",
    explanation: "We breathe out carbon dioxide. Plants use carbon dioxide during photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q23",
    prompt: "Mustard oil and coconut oil are examples of ______ from plants.",
    options: [
      { id: "a", text: "Metals" },
      { id: "b", text: "Animal bones" },
      { id: "c", text: "Useful products (oils)" },
      { id: "d", text: "Rocks" }
    ],
    answerId: "c",
    explanation: "Many oils used in Indian cooking come from plant seeds or fruits, such as mustard and coconut.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-plants-b-q24",
    prompt: "Which order correctly shows a plant's life story from the start?",
    options: [
      { id: "a", text: "Fruit \u2192 flower \u2192 seed \u2192 plant" },
      { id: "b", text: "Leaf \u2192 root \u2192 only flower forever" },
      { id: "c", text: "Stem \u2192 seed \u2192 root only" },
      { id: "d", text: "Seed \u2192 seedling \u2192 plant \u2192 flower \u2192 fruit \u2192 seed" }
    ],
    answerId: "d",
    explanation: "A seed grows into a seedling and then a plant. Flowers can form fruits with new seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf3f",
    title: "Green factories around us",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Plants have parts with jobs. Leaves make food. Seeds grow. Plants help us every day.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Parts", reveal: "Root, stem, leaf, flower, fruit, seed", emoji: "\ud83c\udf31" },
      { label: "Photosynthesis", reveal: "Leaves use sunlight, air and water to make food", emoji: "\u2600\ufe0f" },
      { label: "Germination", reveal: "Seeds need water, air and warmth to sprout", emoji: "\ud83e\udeb4" },
      { label: "Uses", reveal: "Food, fibre, timber, medicine, fresher air", emoji: "\ud83e\uddf5" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which gas do green leaves give out during photosynthesis?",
    options: [
        { id: "a", text: "Carbon dioxide" },
        { id: "b", text: "Oxygen" },
        { id: "c", text: "Smoke" },
        { id: "d", text: "Nitrogen only" }
    ],
    answerId: "b",
    why: "Photosynthesis releases oxygen that animals need to breathe.",
    visual: "plant",
    speak: "Which gas do green leaves give out during photosynthesis?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Plant parts have jobs", "Leaves make food in light", "Seeds germinate with water, air, warmth", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4SciencePlants: ChapterDef = {
  id: "plants",
  title: "Plants",
  emoji: "\ud83c\udf3f",
  blurb: "Parts, food-making, seeds and uses",
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

export const g4SciencePlantsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
