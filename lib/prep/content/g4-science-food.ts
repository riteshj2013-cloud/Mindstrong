import type { ChapterDef, PrepQuestion } from "../types";

/** Food and Nutrition - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-food-a-q01",
    prompt: "Which nutrient mainly gives our body energy?",
    options: [
      { id: "a", text: "Proteins" },
      { id: "b", text: "Carbohydrates" },
      { id: "c", text: "Vitamins" },
      { id: "d", text: "Minerals" }
    ],
    answerId: "b",
    explanation: "Carbohydrates are energy-giving foods. Rice, roti and potato are full of them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q02",
    prompt: "Which of these is a body-building food?",
    options: [
      { id: "a", text: "Sugar" },
      { id: "b", text: "Rice" },
      { id: "c", text: "Butter" },
      { id: "d", text: "Dal" }
    ],
    answerId: "d",
    explanation: "Dal is rich in protein. Proteins help our body grow and repair itself.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q03",
    prompt: "Oranges, amla and lemons are rich in which vitamin?",
    options: [
      { id: "a", text: "Vitamin C" },
      { id: "b", text: "Vitamin D" },
      { id: "c", text: "Vitamin A" },
      { id: "d", text: "Vitamin K" }
    ],
    answerId: "a",
    explanation: "Citrus fruits and amla are great sources of vitamin C. It keeps our gums healthy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q04",
    prompt: "Which part of food helps it move smoothly through our stomach and intestines?",
    options: [
      { id: "a", text: "Fat" },
      { id: "b", text: "Protein" },
      { id: "c", text: "Fibre" },
      { id: "d", text: "Sugar" }
    ],
    answerId: "c",
    explanation: "Fibre, also called roughage, helps food move along and keeps our tummy happy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q05",
    prompt: "Our skin can make which vitamin with the help of sunlight?",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Vitamin D" },
      { id: "d", text: "Vitamin B" }
    ],
    answerId: "c",
    explanation: "When gentle sunlight falls on our skin, the body makes vitamin D for strong bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q06",
    prompt: "Which mineral helps make our bones and teeth strong?",
    options: [
      { id: "a", text: "Calcium" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Iron" },
      { id: "d", text: "Vitamin C" }
    ],
    answerId: "a",
    explanation: "Calcium builds strong bones and teeth. Milk, curd and paneer have lots of it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q07",
    prompt: "Fruits and vegetables are called which kind of foods?",
    options: [
      { id: "a", text: "Energy-giving foods" },
      { id: "b", text: "Body-building foods" },
      { id: "c", text: "Fatty foods" },
      { id: "d", text: "Protective foods" }
    ],
    answerId: "d",
    explanation: "Fruits and vegetables give vitamins and minerals. These protect us from illness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q08",
    prompt: "Which of these foods is rich in fat?",
    options: [
      { id: "a", text: "Cucumber" },
      { id: "b", text: "Ghee" },
      { id: "c", text: "Spinach" },
      { id: "d", text: "Watermelon" }
    ],
    answerId: "b",
    explanation: "Ghee is a fat. Fats give energy, but we need only small amounts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q09",
    prompt: "Which food is mostly carbohydrate?",
    options: [
      { id: "a", text: "Potato" },
      { id: "b", text: "Egg" },
      { id: "c", text: "Fish" },
      { id: "d", text: "Paneer" }
    ],
    answerId: "a",
    explanation: "Potato is full of starch, a carbohydrate. Egg, fish and paneer are rich in protein.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q10",
    prompt: "About how much of our body is made of water?",
    options: [
      { id: "a", text: "One-tenth" },
      { id: "b", text: "One-quarter" },
      { id: "c", text: "About two-thirds" },
      { id: "d", text: "All of it" }
    ],
    answerId: "c",
    explanation: "About two-thirds of our body is water. That is why drinking water every day matters.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q11",
    prompt: "Riya feels tired in the middle of a football match. Which snack will give her energy quickly?",
    options: [
      { id: "a", text: "A cucumber slice" },
      { id: "b", text: "A banana" },
      { id: "c", text: "A pinch of salt" },
      { id: "d", text: "A glass of plain water" }
    ],
    answerId: "b",
    explanation: "A banana has natural sugars, which are carbohydrates. They give quick energy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q12",
    prompt: "Kabir's gums bleed when he brushes. Which food should he eat more of?",
    options: [
      { id: "a", text: "Butter" },
      { id: "b", text: "White rice" },
      { id: "c", text: "Sugar" },
      { id: "d", text: "Guava and lemon" }
    ],
    answerId: "d",
    explanation: "Bleeding gums can mean too little vitamin C. Guava and lemon are rich in vitamin C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q13",
    prompt: "Arjun's mother adds moong sprouts to his breakfast to help him grow. Sprouts mainly give him:",
    options: [
      { id: "a", text: "Fats" },
      { id: "b", text: "Sugar" },
      { id: "c", text: "Iodine" },
      { id: "d", text: "Proteins" }
    ],
    answerId: "d",
    explanation: "Sprouts are rich in protein, the body-building nutrient. They help children grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q14",
    prompt: "Which lunch plate is balanced?",
    options: [
      { id: "a", text: "Rice, potato and roti" },
      { id: "b", text: "Roti, dal, sabzi, curd and salad" },
      { id: "c", text: "Puri, jalebi and chips" },
      { id: "d", text: "Only apples" }
    ],
    answerId: "b",
    explanation: "This plate has energy food, body-building food and protective food. That makes it balanced.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q15",
    prompt: "Rohan often finds it hard to pass stool. What should he add to his meals?",
    options: [
      { id: "a", text: "More biscuits" },
      { id: "b", text: "More fried chips" },
      { id: "c", text: "Whole fruits, leafy vegetables and water" },
      { id: "d", text: "More sweets" }
    ],
    answerId: "c",
    explanation: "Fibre and water help food move smoothly. Fruits and leafy vegetables are full of fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q16",
    prompt: "Meena cannot see well in dim light at night. Which food can help her eyes?",
    options: [
      { id: "a", text: "Carrot" },
      { id: "b", text: "White bread" },
      { id: "c", text: "Toffee" },
      { id: "d", text: "Cola" }
    ],
    answerId: "a",
    explanation: "Trouble seeing in dim light can mean too little vitamin A. Carrots are rich in vitamin A.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q17",
    prompt: "Which kind of salt helps prevent swelling in the neck called goitre?",
    options: [
      { id: "a", text: "Sugar" },
      { id: "b", text: "Iodised salt" },
      { id: "c", text: "Baking soda" },
      { id: "d", text: "Chilli powder" }
    ],
    answerId: "b",
    explanation: "Iodised salt has iodine. Our body needs a little iodine to stay healthy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q18",
    prompt: "After playing in the hot sun, Dev is very thirsty. What is the best drink for him?",
    options: [
      { id: "a", text: "Cola" },
      { id: "b", text: "Packed sweet juice" },
      { id: "c", text: "Tea" },
      { id: "d", text: "Water or coconut water" }
    ],
    answerId: "d",
    explanation: "Our body loses water as sweat. Water or coconut water puts it back in a healthy way.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q19",
    prompt: "Asha puts a drop of iodine on a raw potato slice. What colour will the spot become?",
    options: [
      { id: "a", text: "Blue-black" },
      { id: "b", text: "Red" },
      { id: "c", text: "Green" },
      { id: "d", text: "It stays yellow" }
    ],
    answerId: "a",
    explanation: "Iodine turns blue-black when starch is present. Potato is full of starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q20",
    prompt: "Fats give us lots of energy. So why should we eat only small amounts of them?",
    options: [
      { id: "a", text: "Fats have no use at all" },
      { id: "b", text: "Fats are only for grown-ups" },
      { id: "c", text: "Extra fat gets stored in the body and can harm the heart" },
      { id: "d", text: "Fats make our bones weak" }
    ],
    answerId: "c",
    explanation: "A little fat is useful. Too much gets stored in the body and is not good for the heart.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q21",
    prompt: "Raju eats only rice and potatoes every day. What problem might he face?",
    options: [
      { id: "a", text: "He will get too little energy" },
      { id: "b", text: "He will get too much protein" },
      { id: "c", text: "He may not get enough proteins, vitamins and minerals" },
      { id: "d", text: "He will get too much fibre" }
    ],
    answerId: "c",
    explanation: "Rice and potato give energy, but not enough of the other nutrients. Raju needs a balanced diet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q22",
    prompt: "Why should we wash vegetables before cutting them, not after?",
    options: [
      { id: "a", text: "Some vitamins and minerals wash away from cut pieces" },
      { id: "b", text: "Washing first makes vegetables sweeter" },
      { id: "c", text: "Washing first makes vegetables grow bigger" },
      { id: "d", text: "Washing first changes their colour" }
    ],
    answerId: "a",
    explanation: "Some vitamins and minerals dissolve in water. Cut pieces lose them faster when washed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q23",
    prompt: "Which pair has one energy-giving food and one protective food?",
    options: [
      { id: "a", text: "Dal and egg" },
      { id: "b", text: "Rice and roti" },
      { id: "c", text: "Milk and paneer" },
      { id: "d", text: "Roti and spinach" }
    ],
    answerId: "d",
    explanation: "Roti gives energy. Spinach is a protective leafy vegetable. The other pairs are from the same group.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-a-q24",
    prompt: "Meera loves chips. What is the wisest advice for her?",
    options: [
      { id: "a", text: "Eat chips at every meal" },
      { id: "b", text: "Enjoy chips once in a while and eat home food most days" },
      { id: "c", text: "Drink cola instead of water" },
      { id: "d", text: "Skip breakfast to eat more chips later" }
    ],
    answerId: "b",
    explanation: "Chips have lots of salt and oil but few nutrients. A small treat sometimes is fine.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-food-b-q01",
    prompt: "Which of these protein foods comes from an animal?",
    options: [
      { id: "a", text: "Rice" },
      { id: "b", text: "Wheat" },
      { id: "c", text: "Fish" },
      { id: "d", text: "Carrot" }
    ],
    answerId: "c",
    explanation: "Fish comes from an animal and is rich in protein. Rice, wheat and carrot come from plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q02",
    prompt: "Which nutrient helps build muscles and repair our body?",
    options: [
      { id: "a", text: "Proteins" },
      { id: "b", text: "Fats" },
      { id: "c", text: "Fibre" },
      { id: "d", text: "Water" }
    ],
    answerId: "a",
    explanation: "Proteins are body-building nutrients. They help us grow and heal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q03",
    prompt: "Which foods are good sources of iron, which keeps our blood healthy?",
    options: [
      { id: "a", text: "Sugar and toffee" },
      { id: "b", text: "Butter and cream" },
      { id: "c", text: "Salt and pepper" },
      { id: "d", text: "Spinach and jaggery" }
    ],
    answerId: "d",
    explanation: "Leafy greens like spinach and jaggery give iron. Iron helps our blood carry oxygen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q04",
    prompt: "What is another name for fibre?",
    options: [
      { id: "a", text: "Starch" },
      { id: "b", text: "Roughage" },
      { id: "c", text: "Protein" },
      { id: "d", text: "Vitamin" }
    ],
    answerId: "b",
    explanation: "Fibre is also called roughage. It helps our tummy work well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q05",
    prompt: "Honey and sugar are mainly which nutrient?",
    options: [
      { id: "a", text: "Carbohydrates" },
      { id: "b", text: "Proteins" },
      { id: "c", text: "Fats" },
      { id: "d", text: "Fibre" }
    ],
    answerId: "a",
    explanation: "Sugars are a kind of carbohydrate. They give energy, but we should not eat too much.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q06",
    prompt: "Which of these is a pulse?",
    options: [
      { id: "a", text: "Mango" },
      { id: "b", text: "Cabbage" },
      { id: "c", text: "Rice" },
      { id: "d", text: "Moong" }
    ],
    answerId: "d",
    explanation: "Moong is a pulse. Pulses like moong, chana and masoor are rich in protein.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q07",
    prompt: "A diet that has all nutrients in the right amounts is called a:",
    options: [
      { id: "a", text: "Junk diet" },
      { id: "b", text: "Fast diet" },
      { id: "c", text: "Balanced diet" },
      { id: "d", text: "Sweet diet" }
    ],
    answerId: "c",
    explanation: "A balanced diet gives our body everything it needs in the right amounts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q08",
    prompt: "Vitamin A is especially good for our:",
    options: [
      { id: "a", text: "Hair colour" },
      { id: "b", text: "Eyes" },
      { id: "c", text: "Ears" },
      { id: "d", text: "Nails" }
    ],
    answerId: "b",
    explanation: "Vitamin A keeps our eyes healthy. Carrots, papaya and mangoes have it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q09",
    prompt: "Too little vitamin D in children can cause soft, bent bones. This is called:",
    options: [
      { id: "a", text: "Goitre" },
      { id: "b", text: "Scurvy" },
      { id: "c", text: "Anaemia" },
      { id: "d", text: "Rickets" }
    ],
    answerId: "d",
    explanation: "Rickets happens when bones do not get enough vitamin D. Sunlight and milk help.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q10",
    prompt: "Which of these is rich in oil, a kind of fat?",
    options: [
      { id: "a", text: "Groundnuts" },
      { id: "b", text: "Tomato" },
      { id: "c", text: "Lemon" },
      { id: "d", text: "Lettuce" }
    ],
    answerId: "a",
    explanation: "Groundnuts are full of oil. That is why groundnut oil is made from them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q11",
    prompt: "Sonu's plate has only roti and rice. What should he add to make it balanced?",
    options: [
      { id: "a", text: "More rice" },
      { id: "b", text: "A jalebi" },
      { id: "c", text: "Dal, sabzi and curd" },
      { id: "d", text: "A packet of chips" }
    ],
    answerId: "c",
    explanation: "Dal and curd add protein. Sabzi adds vitamins, minerals and fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q12",
    prompt: "Mangoes, guavas and papayas belong to which food group?",
    options: [
      { id: "a", text: "Body-building foods" },
      { id: "b", text: "Protective foods" },
      { id: "c", text: "Fatty foods" },
      { id: "d", text: "Junk foods" }
    ],
    answerId: "b",
    explanation: "Fruits give vitamins and minerals. These protect our body from illness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q13",
    prompt: "Lata often feels tired and looks pale. The doctor says she needs more iron. What should she eat?",
    options: [
      { id: "a", text: "Cola" },
      { id: "b", text: "Leafy greens, jaggery and dates" },
      { id: "c", text: "Chips" },
      { id: "d", text: "Toffees" }
    ],
    answerId: "b",
    explanation: "Leafy greens, jaggery and dates give iron. Iron helps her blood and energy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q14",
    prompt: "Priya does not eat eggs. Which food can give her protein instead?",
    options: [
      { id: "a", text: "Cucumber" },
      { id: "b", text: "Apple" },
      { id: "c", text: "Paneer" },
      { id: "d", text: "Rice" }
    ],
    answerId: "c",
    explanation: "Paneer is made from milk and is rich in protein. It is a great choice for vegetarians.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q15",
    prompt: "Dal was cooked at noon. In which case is it most likely to spoil by night?",
    options: [
      { id: "a", text: "Left open on a warm kitchen shelf" },
      { id: "b", text: "Kept covered in the fridge" },
      { id: "c", text: "Kept in the freezer" },
      { id: "d", text: "Eaten hot at lunch" }
    ],
    answerId: "a",
    explanation: "Germs grow fast in warm places. Open dal on a warm shelf spoils quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q16",
    prompt: "Mango pickle stays good for many months. What helps keep it from spoiling?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Ice" },
      { id: "c", text: "Rain" },
      { id: "d", text: "Salt and oil" }
    ],
    answerId: "d",
    explanation: "Salt and oil stop germs from growing in pickles. This keeps them good for long.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q17",
    prompt: "Which tiffin box is the healthiest for school?",
    options: [
      { id: "a", text: "Vegetable paratha, curd and a guava" },
      { id: "b", text: "Noodles and cola" },
      { id: "c", text: "Chips and biscuits" },
      { id: "d", text: "A slice of cream cake" }
    ],
    answerId: "a",
    explanation: "This tiffin has energy food, protein and a fruit. It keeps you strong all day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q18",
    prompt: "What should you do just before eating?",
    options: [
      { id: "a", text: "Play in the mud" },
      { id: "b", text: "Eat with unwashed hands" },
      { id: "c", text: "Wash your hands with soap" },
      { id: "d", text: "Cough over the food" }
    ],
    answerId: "c",
    explanation: "Washing hands with soap removes germs. Clean hands keep our food safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q19",
    prompt: "Why should we not overcook vegetables?",
    options: [
      { id: "a", text: "They become too green" },
      { id: "b", text: "They grow bigger" },
      { id: "c", text: "They become heavier" },
      { id: "d", text: "Some vitamins are lost with too much heat" }
    ],
    answerId: "d",
    explanation: "Long cooking destroys some vitamins. Cook vegetables just enough, with a lid on.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q20",
    prompt: "Who needs the most energy-giving food?",
    options: [
      { id: "a", text: "A person sleeping" },
      { id: "b", text: "A farmer ploughing a field all day" },
      { id: "c", text: "A child watching TV" },
      { id: "d", text: "A person sitting at a desk" }
    ],
    answerId: "b",
    explanation: "Hard physical work uses lots of energy. The farmer needs more energy food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q21",
    prompt: "A mango milkshake is made with milk and mango. What does it give us?",
    options: [
      { id: "a", text: "Only fibre" },
      { id: "b", text: "Only fat" },
      { id: "c", text: "Only water" },
      { id: "d", text: "Protein and calcium from milk, vitamins from mango" }
    ],
    answerId: "d",
    explanation: "Mixing foods mixes their nutrients. Milk gives protein and calcium. Mango gives vitamins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q22",
    prompt: "Why should we drink more water on a hot day?",
    options: [
      { id: "a", text: "Our body loses water as sweat and needs it back" },
      { id: "b", text: "Water makes us taller" },
      { id: "c", text: "Water is full of protein" },
      { id: "d", text: "Water can take the place of food" }
    ],
    answerId: "a",
    explanation: "On hot days we sweat more. Drinking water replaces what our body loses.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q23",
    prompt: "Which of these has the most fibre?",
    options: [
      { id: "a", text: "White bread" },
      { id: "b", text: "Whole wheat roti" },
      { id: "c", text: "Sugar" },
      { id: "d", text: "Butter" }
    ],
    answerId: "b",
    explanation: "Whole wheat keeps the outer bran layer, which is full of fibre. White bread loses most of it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-food-b-q24",
    prompt: "Anu says, \"Fruits give us no energy at all.\" What is correct?",
    options: [
      { id: "a", text: "Anu is right" },
      { id: "b", text: "Fruits give only fat" },
      { id: "c", text: "Fruits give some energy from natural sugars, plus vitamins and fibre" },
      { id: "d", text: "Fruits give only protein" }
    ],
    answerId: "c",
    explanation: "Fruits have natural sugars for energy. They also give vitamins, minerals and fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf71",
    title: "Why do we eat?",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Food gives us energy to play, helps us grow, and keeps us healthy. A balanced thali has a bit of every kind.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Go foods", reveal: "Energy: rice, roti, potato", emoji: "\ud83c\udf5a" },
      { label: "Grow foods", reveal: "Body-building: dal, milk, eggs", emoji: "\ud83e\udd5b" },
      { label: "Protective foods", reveal: "Vitamins & minerals: fruits, vegetables", emoji: "\ud83e\udd55" },
      { label: "Fibre & water", reveal: "Help digestion; keep the body cool", emoji: "\ud83d\udca7" },
      { label: "Fats", reveal: "A little bit for energy \u2014 not too much", emoji: "\ud83e\uddc8" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which food mainly helps us grow?",
    options: [
        { id: "a", text: "Dal" },
        { id: "b", text: "Sugar" },
        { id: "c", text: "Chips" },
        { id: "d", text: "Cold drink" }
    ],
    answerId: "a",
    why: "Dal is rich in protein, a grow (body-building) food.",
    visual: "plant",
    speak: "Which food mainly helps us grow?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Go, grow & protective foods", "Fibre and water help digestion", "Eat a balanced thali", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceFood: ChapterDef = {
  id: "food-nutrition",
  title: "Food and Nutrition",
  emoji: "\ud83c\udf71",
  blurb: "Go, grow & protective foods",
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

export const g4ScienceFoodQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
