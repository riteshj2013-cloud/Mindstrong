import type { ChapterDef, PrepQuestion } from "../types";

/** Food & Nutrition - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-sci-food-a-q01",
    prompt: "Which nutrient is the body’s main source of energy?",
    options: [
      { id: "a", text: "Vitamin C" },
      { id: "b", text: "Carbohydrate" },
      { id: "c", text: "Water" },
      { id: "d", text: "Iron" }
    ],
    answerId: "b",
    explanation: "Carbohydrates from foods like rice and roti are the main energy source.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q02",
    prompt: "Proteins are mainly needed for —",
    options: [
      { id: "a", text: "body building and repair" },
      { id: "b", text: "only night vision" },
      { id: "c", text: "making food sweet" },
      { id: "d", text: "colouring clothes" }
    ],
    answerId: "a",
    explanation: "Proteins help build and repair body tissues.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q03",
    prompt: "Which food is rich in dietary fibre (roughage)?",
    options: [
      { id: "a", text: "Clear oil" },
      { id: "b", text: "Whole grains and vegetables" },
      { id: "c", text: "Sugar only" },
      { id: "d", text: "Salt" }
    ],
    answerId: "b",
    explanation: "Whole grains, fruits and vegetables provide roughage.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q04",
    prompt: "Vitamin C deficiency can cause —",
    options: [
      { id: "a", text: "scurvy" },
      { id: "b", text: "goitre" },
      { id: "c", text: "night blindness" },
      { id: "d", text: "anaemia from iron only" }
    ],
    answerId: "a",
    explanation: "Lack of vitamin C leads to scurvy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q05",
    prompt: "Iodine deficiency is linked to —",
    options: [
      { id: "a", text: "scurvy" },
      { id: "b", text: "goitre" },
      { id: "c", text: "rickets" },
      { id: "d", text: "beri-beri" }
    ],
    answerId: "b",
    explanation: "Lack of iodine can cause goitre (swollen thyroid).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q06",
    prompt: "Which vitamin is needed for good night vision?",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Vitamin D" },
      { id: "d", text: "Vitamin B1 only for bones" }
    ],
    answerId: "a",
    explanation: "Vitamin A helps prevent night blindness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q07",
    prompt: "Sunlight helps our skin make —",
    options: [
      { id: "a", text: "Vitamin C" },
      { id: "b", text: "Vitamin D" },
      { id: "c", text: "Iron" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "b",
    explanation: "Sunlight helps the body produce vitamin D.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q08",
    prompt: "A balanced diet means —",
    options: [
      { id: "a", text: "only sweets" },
      { id: "b", text: "enough of all nutrient groups in right amounts" },
      { id: "c", text: "only protein" },
      { id: "d", text: "skipping breakfast always" }
    ],
    answerId: "b",
    explanation: "A balanced diet includes carbohydrates, proteins, fats, vitamins, minerals, fibre and water in suitable amounts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q09",
    prompt: "Which of these is a body-building food?",
    options: [
      { id: "a", text: "Sugar candy" },
      { id: "b", text: "Dal and milk" },
      { id: "c", text: "Clear aerated drink" },
      { id: "d", text: "Salt alone" }
    ],
    answerId: "b",
    explanation: "Dal and milk are rich in proteins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q10",
    prompt: "Fats give more energy per gram than carbohydrates, but too much fat can —",
    options: [
      { id: "a", text: "always cure scurvy" },
      { id: "b", text: "lead to obesity and heart strain" },
      { id: "c", text: "replace water needs" },
      { id: "d", text: "remove all fibre" }
    ],
    answerId: "b",
    explanation: "Excess fat is linked to obesity and other health problems.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q11",
    prompt: "Iron is important because it —",
    options: [
      { id: "a", text: "makes bones yellow" },
      { id: "b", text: "helps make haemoglobin in blood" },
      { id: "c", text: "sweetens fruit" },
      { id: "d", text: "spins cotton" }
    ],
    answerId: "b",
    explanation: "Iron is needed for haemoglobin, which carries oxygen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q12",
    prompt: "Which meal is closest to balanced?",
    options: [
      { id: "a", text: "Only chips" },
      { id: "b", text: "Roti, dal, sabzi and curd" },
      { id: "c", text: "Only sweets" },
      { id: "d", text: "Only aerated drinks" }
    ],
    answerId: "b",
    explanation: "Roti (energy), dal (protein), sabzi (vitamins/fibre) and curd (protein/minerals) cover key groups.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q13",
    prompt: "Water in the diet is essential because it —",
    options: [
      { id: "a", text: "has no role" },
      { id: "b", text: "helps transport nutrients and remove wastes" },
      { id: "c", text: "replaces all proteins" },
      { id: "d", text: "is a carbohydrate" }
    ],
    answerId: "b",
    explanation: "Water transports substances and helps remove wastes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q14",
    prompt: "Night blindness is linked to lack of —",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Vitamin C" },
      { id: "d", text: "Calcium only" }
    ],
    answerId: "a",
    explanation: "Vitamin A deficiency can cause night blindness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q15",
    prompt: "Rickets in children is linked to lack of —",
    options: [
      { id: "a", text: "Vitamin D / calcium issues" },
      { id: "b", text: "Vitamin C only" },
      { id: "c", text: "Iodine only" },
      { id: "d", text: "Fibre only" }
    ],
    answerId: "a",
    explanation: "Rickets relates to vitamin D and calcium problems affecting bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q16",
    prompt: "Which is a protective food?",
    options: [
      { id: "a", text: "Oil alone" },
      { id: "b", text: "Fruits and green vegetables" },
      { id: "c", text: "Sugar alone" },
      { id: "d", text: "Butter alone" }
    ],
    answerId: "b",
    explanation: "Fruits and greens supply vitamins and minerals that protect health.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q17",
    prompt: "Obesity can result from —",
    options: [
      { id: "a", text: "eating far more energy than you use" },
      { id: "b", text: "drinking only water" },
      { id: "c", text: "eating only greens forever" },
      { id: "d", text: "iodine deficiency alone" }
    ],
    answerId: "a",
    explanation: "Taking in much more energy than the body uses leads to fat storage and obesity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q18",
    prompt: "Oranges and amla are good sources of —",
    options: [
      { id: "a", text: "Vitamin C" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Iron only" },
      { id: "d", text: "Vitamin D only" }
    ],
    answerId: "a",
    explanation: "Citrus fruits and amla are rich in vitamin C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q19",
    prompt: "Milk is a good source of —",
    options: [
      { id: "a", text: "only fibre" },
      { id: "b", text: "protein and calcium" },
      { id: "c", text: "iodine only" },
      { id: "d", text: "roughage only" }
    ],
    answerId: "b",
    explanation: "Milk provides proteins and calcium for bones and teeth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q20",
    prompt: "Roughage helps mainly in —",
    options: [
      { id: "a", text: "night vision" },
      { id: "b", text: "smooth bowel movement" },
      { id: "c", text: "making haemoglobin" },
      { id: "d", text: "iodine uptake only" }
    ],
    answerId: "b",
    explanation: "Dietary fibre aids digestion and bowel movement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q21",
    prompt: "Which habit supports good nutrition?",
    options: [
      { id: "a", text: "Skipping breakfast daily" },
      { id: "b", text: "Washing vegetables before cooking" },
      { id: "c", text: "Eating only fried snacks" },
      { id: "d", text: "Never drinking water" }
    ],
    answerId: "b",
    explanation: "Washing produce reduces dirt and germs — a healthy food habit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q22",
    prompt: "Beriberi is associated with deficiency of —",
    options: [
      { id: "a", text: "Vitamin B1 (thiamine)" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Iodine" },
      { id: "d", text: "Vitamin A" }
    ],
    answerId: "a",
    explanation: "Beriberi is linked to lack of vitamin B1.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q23",
    prompt: "A person with anaemia may need more —",
    options: [
      { id: "a", text: "iron-rich foods" },
      { id: "b", text: "only sugar" },
      { id: "c", text: "only oil" },
      { id: "d", text: "iodised salt only for taste" }
    ],
    answerId: "a",
    explanation: "Anaemia often relates to iron deficiency; iron-rich foods help.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-a-q24",
    prompt: "Why is iodised salt recommended?",
    options: [
      { id: "a", text: "It colours food blue" },
      { id: "b", text: "It helps prevent iodine deficiency disorders" },
      { id: "c", text: "It replaces all vitamins" },
      { id: "d", text: "It is pure carbohydrate" }
    ],
    answerId: "b",
    explanation: "Iodised salt supplies iodine to prevent goitre and related problems.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-sci-food-b-q01",
    prompt: "Carbohydrates are stored in plants mainly as —",
    options: [
      { id: "a", text: "starch" },
      { id: "b", text: "iron filings" },
      { id: "c", text: "plastic" },
      { id: "d", text: "iodine crystals" }
    ],
    answerId: "a",
    explanation: "Plants store carbohydrates largely as starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q02",
    prompt: "Which food is a rich protein source for many vegetarians?",
    options: [
      { id: "a", text: "Pulses (dal)" },
      { id: "b", text: "Sugar" },
      { id: "c", text: "Clear oil" },
      { id: "d", text: "Salt" }
    ],
    answerId: "a",
    explanation: "Pulses are important protein foods in vegetarian diets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q03",
    prompt: "Vitamin D helps the body use —",
    options: [
      { id: "a", text: "calcium for bones" },
      { id: "b", text: "iodine only" },
      { id: "c", text: "fibre only" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
    explanation: "Vitamin D aids calcium use for strong bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q04",
    prompt: "Which is NOT a nutrient?",
    options: [
      { id: "a", text: "Protein" },
      { id: "b", text: "Vitamin" },
      { id: "c", text: "Roughage (fibre)" },
      { id: "d", text: "Plate" }
    ],
    answerId: "d",
    explanation: "A plate is not a nutrient; fibre is considered an important dietary component.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q05",
    prompt: "Ghee and butter are rich in —",
    options: [
      { id: "a", text: "fibre" },
      { id: "b", text: "fat" },
      { id: "c", text: "vitamin C only" },
      { id: "d", text: "iodine only" }
    ],
    answerId: "b",
    explanation: "Ghee and butter are fat-rich foods.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q06",
    prompt: "Scurvy symptoms can include —",
    options: [
      { id: "a", text: "bleeding gums" },
      { id: "b", text: "goitre only" },
      { id: "c", text: "blue skin from iodine" },
      { id: "d", text: "stronger night vision" }
    ],
    answerId: "a",
    explanation: "Scurvy (vitamin C lack) can cause bleeding gums.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q07",
    prompt: "A diet with only rice for weeks may lack —",
    options: [
      { id: "a", text: "enough variety of nutrients" },
      { id: "b", text: "all carbohydrates forever" },
      { id: "c", text: "water in rice" },
      { id: "d", text: "any energy" }
    ],
    answerId: "a",
    explanation: "Single-food diets miss proteins, vitamins and minerals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q08",
    prompt: "Leafy greens like spinach provide —",
    options: [
      { id: "a", text: "iron and vitamins" },
      { id: "b", text: "only pure fat" },
      { id: "c", text: "only sugar" },
      { id: "d", text: "plastic fibre" }
    ],
    answerId: "a",
    explanation: "Spinach offers iron and vitamins among other nutrients.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q09",
    prompt: "Which drink is healthiest as an everyday habit?",
    options: [
      { id: "a", text: "Sweet aerated drinks only" },
      { id: "b", text: "Clean water" },
      { id: "c", text: "Only deep-fried tea" },
      { id: "d", text: "Undiluted syrup" }
    ],
    answerId: "b",
    explanation: "Clean water is essential every day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q10",
    prompt: "Calcium is especially important for —",
    options: [
      { id: "a", text: "bones and teeth" },
      { id: "b", text: "making cloth" },
      { id: "c", text: "magnetism" },
      { id: "d", text: "evaporation" }
    ],
    answerId: "a",
    explanation: "Calcium strengthens bones and teeth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q11",
    prompt: "Energy-giving foods include —",
    options: [
      { id: "a", text: "rice and potato" },
      { id: "b", text: "only vitamin tablets" },
      { id: "c", text: "only water" },
      { id: "d", text: "only salt" }
    ],
    answerId: "a",
    explanation: "Rice and potato are carbohydrate-rich energy foods.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q12",
    prompt: "Junk food is often —",
    options: [
      { id: "a", text: "low in nutrients and high in sugar/fat/salt" },
      { id: "b", text: "a complete balanced diet" },
      { id: "c", text: "the only source of iodine" },
      { id: "d", text: "rich in all vitamins always" }
    ],
    answerId: "a",
    explanation: "Many junk foods are energy-dense but nutrient-poor.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q13",
    prompt: "Which vitamin is easily destroyed by heavy cooking in some vegetables?",
    options: [
      { id: "a", text: "Vitamin C" },
      { id: "b", text: "Iron metal" },
      { id: "c", text: "Iodine crystals" },
      { id: "d", text: "Plastic" }
    ],
    answerId: "a",
    explanation: "Vitamin C is heat-sensitive; gentle cooking helps retain it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q14",
    prompt: "Eggs are a good source of —",
    options: [
      { id: "a", text: "protein" },
      { id: "b", text: "only fibre" },
      { id: "c", text: "only iodine salt" },
      { id: "d", text: "cotton" }
    ],
    answerId: "a",
    explanation: "Eggs provide high-quality protein.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q15",
    prompt: "A child who rarely plays outdoors may risk low —",
    options: [
      { id: "a", text: "vitamin D" },
      { id: "b", text: "cotton fibre" },
      { id: "c", text: "plastic" },
      { id: "d", text: "magnetism" }
    ],
    answerId: "a",
    explanation: "Less sunlight can mean less vitamin D production.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q16",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Fats are never needed" },
      { id: "b", text: "Some fat is needed but not in excess" },
      { id: "c", text: "Only sugar is a balanced diet" },
      { id: "d", text: "Water is optional forever" }
    ],
    answerId: "b",
    explanation: "The body needs some fat for energy and vitamins, but excess is harmful.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q17",
    prompt: "Goitre affects the —",
    options: [
      { id: "a", text: "thyroid gland in the neck" },
      { id: "b", text: "only the toenails" },
      { id: "c", text: "cotton boll" },
      { id: "d", text: "cricket bat" }
    ],
    answerId: "a",
    explanation: "Goitre is swelling of the thyroid in the neck.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q18",
    prompt: "Which food pair gives both energy and body-building nutrients?",
    options: [
      { id: "a", text: "Rice and dal" },
      { id: "b", text: "Only sugar and salt" },
      { id: "c", text: "Only oil and sugar" },
      { id: "d", text: "Only aerated drink and chips" }
    ],
    answerId: "a",
    explanation: "Rice (carb) + dal (protein) cover energy and building.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q19",
    prompt: "Oral rehydration after diarrhoea mainly replaces —",
    options: [
      { id: "a", text: "lost water and salts" },
      { id: "b", text: "cotton" },
      { id: "c", text: "vitamin A only" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
    explanation: "ORS replaces fluids and electrolytes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q20",
    prompt: "Which is a deficiency disease?",
    options: [
      { id: "a", text: "Scurvy" },
      { id: "b", text: "Filtration" },
      { id: "c", text: "Weaving" },
      { id: "d", text: "Sieving" }
    ],
    answerId: "a",
    explanation: "Scurvy is caused by nutrient deficiency.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q21",
    prompt: "Millets in a diet can help because they often provide —",
    options: [
      { id: "a", text: "fibre and minerals with energy" },
      { id: "b", text: "only pure fat" },
      { id: "c", text: "no nutrients" },
      { id: "d", text: "iodine metal pieces" }
    ],
    answerId: "a",
    explanation: "Millets contribute energy plus fibre and minerals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q22",
    prompt: "Too little protein in the diet may lead to —",
    options: [
      { id: "a", text: "poor growth and repair" },
      { id: "b", text: "stronger muscles always" },
      { id: "c", text: "extra vitamin C only" },
      { id: "d", text: "automatic goitre cure" }
    ],
    answerId: "a",
    explanation: "Proteins are needed for growth and tissue repair.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q23",
    prompt: "Which practice keeps food safer?",
    options: [
      { id: "a", text: "Leaving cooked food uncovered for days" },
      { id: "b", text: "Covering and refrigerating leftovers promptly" },
      { id: "c", text: "Using dirty utensils" },
      { id: "d", text: "Never washing hands" }
    ],
    answerId: "b",
    explanation: "Covering and chilling leftovers reduces spoilage and germ growth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-food-b-q24",
    prompt: "A balanced thali for a schoolchild should usually include —",
    options: [
      { id: "a", text: "only dessert" },
      { id: "b", text: "cereal, protein food, vegetables/fruit and some fat in moderation" },
      { id: "c", text: "only fried snacks" },
      { id: "d", text: "only vitamins pills" }
    ],
    answerId: "b",
    explanation: "A mixed thali covers major nutrient groups.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🥗",
    title: "Food & Nutrition",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Food gives energy, builds the body and protects health.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Carbohydrates", reveal: "Main energy from rice, roti, potato", emoji: "🍞" },
      { label: "Proteins", reveal: "Body-building — dal, milk, eggs", emoji: "💪" },
      { label: "Vitamins & minerals", reveal: "Protective nutrients in fruits and greens", emoji: "🍊" },
      { label: "Balanced diet", reveal: "Right mix of all nutrient groups", emoji: "⚖️" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which nutrient mainly gives energy?",
    options: [
        { id: "a", text: "Protein" },
        { id: "b", text: "Carbohydrate" },
        { id: "c", text: "Vitamin C" },
        { id: "d", text: "Water" }
    ],
    answerId: "b",
    why: "Carbohydrates are the body’s main fuel.",
    visual: "plant",
    speak: "Which nutrient mainly gives energy?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6ScienceFood: ChapterDef = {
  id: "food-nutrition",
  title: "Food & Nutrition",
  emoji: "🥗",
  blurb: "Nutrients, balanced diet and deficiency",
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

export const g6ScienceFoodQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
