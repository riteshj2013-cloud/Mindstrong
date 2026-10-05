import type { ChapterDef, PrepQuestion } from "../types";

/** Water: Sources, Uses & Cycle - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-water-a-q01",
    prompt: "Which of these do all living things need to stay alive?",
    options: [
      { id: "a", text: "Gold" },
      { id: "b", text: "Water" },
      { id: "c", text: "Toys" },
      { id: "d", text: "Plastic" }
    ],
    answerId: "b",
    explanation: "Plants, animals and people all need water to live. Gold, toys and plastic are not needed for life.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q02",
    prompt: "Which of these is a natural source of water?",
    options: [
      { id: "a", text: "Plastic bottle" },
      { id: "b", text: "Bucket" },
      { id: "c", text: "Water tank" },
      { id: "d", text: "River" }
    ],
    answerId: "d",
    explanation: "A river is made by nature. Bottles, buckets and tanks only store water that comes from natural sources.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q03",
    prompt: "Water that falls from the clouds as drops is called \u2014",
    options: [
      { id: "a", text: "Rain" },
      { id: "b", text: "Fog" },
      { id: "c", text: "Steam" },
      { id: "d", text: "Ice cube" }
    ],
    answerId: "a",
    explanation: "Rain is water falling from clouds as drops. Fog floats near the ground, and steam comes from boiling water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q04",
    prompt: "Which of these helps us pull up water from under the ground?",
    options: [
      { id: "a", text: "Kite" },
      { id: "b", text: "Umbrella" },
      { id: "c", text: "Handpump" },
      { id: "d", text: "Fan" }
    ],
    answerId: "c",
    explanation: "A handpump brings up groundwater when we push its handle up and down.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q05",
    prompt: "How does water from the sea taste?",
    options: [
      { id: "a", text: "Sweet" },
      { id: "b", text: "Sour" },
      { id: "c", text: "Salty" },
      { id: "d", text: "Bitter like medicine" }
    ],
    answerId: "c",
    explanation: "Sea water has a lot of salt mixed in it, so it tastes salty and is not safe to drink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q06",
    prompt: "Which of these is a use of water for cleaning?",
    options: [
      { id: "a", text: "Washing clothes" },
      { id: "b", text: "Drinking juice" },
      { id: "c", text: "Cooking rice" },
      { id: "d", text: "Watering plants" }
    ],
    answerId: "a",
    explanation: "Washing clothes uses water to remove dirt. The other choices use water for drinking, cooking and growing plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q07",
    prompt: "Farmers use a lot of water mainly to \u2014",
    options: [
      { id: "a", text: "Paint their houses" },
      { id: "b", text: "Fly kites" },
      { id: "c", text: "Make roads shine" },
      { id: "d", text: "Grow crops" }
    ],
    answerId: "d",
    explanation: "Crops need water to grow. Farmers water their fields using rain, canals, wells and pumps.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q08",
    prompt: "What makes water in a pond slowly dry up on a hot day?",
    options: [
      { id: "a", text: "The Moon" },
      { id: "b", text: "The heat of the Sun" },
      { id: "c", text: "The stars" },
      { id: "d", text: "Shadows of trees" }
    ],
    answerId: "b",
    explanation: "The Sun's heat turns pond water into water vapour, which rises into the air. This is evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q09",
    prompt: "What are clouds made of?",
    options: [
      { id: "a", text: "Tiny drops of water" },
      { id: "b", text: "Cotton" },
      { id: "c", text: "Smoke from fires" },
      { id: "d", text: "Sand" }
    ],
    answerId: "a",
    explanation: "Clouds are made of many tiny water drops (or ice bits) floating high in the sky.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q10",
    prompt: "What is the best habit while brushing your teeth?",
    options: [
      { id: "a", text: "Keep the tap running" },
      { id: "b", text: "Use a hose pipe" },
      { id: "c", text: "Turn off the tap until you rinse" },
      { id: "d", text: "Fill a bathtub" }
    ],
    answerId: "c",
    explanation: "Turning off the tap while brushing saves many litres of water every day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q11",
    prompt: "When water changes into water vapour, it is called \u2014",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Evaporation" },
      { id: "c", text: "Melting" },
      { id: "d", text: "Condensation" }
    ],
    answerId: "b",
    explanation: "Evaporation is when liquid water becomes water vapour, usually when it is heated.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q12",
    prompt: "When water vapour cools down and changes into tiny drops of water, it is called \u2014",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Boiling" },
      { id: "d", text: "Condensation" }
    ],
    answerId: "d",
    explanation: "Condensation is when water vapour cools and turns back into liquid drops. This is how clouds form.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q13",
    prompt: "Water stored in the soil and rocks under the ground is called \u2014",
    options: [
      { id: "a", text: "Rainwater" },
      { id: "b", text: "Seawater" },
      { id: "c", text: "Tap water" },
      { id: "d", text: "Groundwater" }
    ],
    answerId: "d",
    explanation: "Rainwater soaks into the soil and collects under the ground. This is groundwater, which wells and handpumps use.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q14",
    prompt: "Meera keeps a glass of ice-cold water on the table. Soon, water drops appear on the outside of the glass. Where do they come from?",
    options: [
      { id: "a", text: "The glass is leaking" },
      { id: "b", text: "Water vapour in the air cools on the cold glass" },
      { id: "c", text: "The ice melts through the glass" },
      { id: "d", text: "From Meera's hands" }
    ],
    answerId: "b",
    explanation: "Air has invisible water vapour. When it touches the cold glass, it cools and condenses into drops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q15",
    prompt: "What is a safe way to kill germs in drinking water at home?",
    options: [
      { id: "a", text: "Add salt" },
      { id: "b", text: "Stir it fast" },
      { id: "c", text: "Boil it and let it cool" },
      { id: "d", text: "Add food colour" }
    ],
    answerId: "c",
    explanation: "Boiling water kills most germs. After it cools, it is safer to drink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q16",
    prompt: "Which illness can spread by drinking dirty water?",
    options: [
      { id: "a", text: "Cholera" },
      { id: "b", text: "A broken bone" },
      { id: "c", text: "Sunburn" },
      { id: "d", text: "Short eyesight" }
    ],
    answerId: "a",
    explanation: "Cholera is caused by germs in dirty water. Drinking clean, boiled or filtered water helps prevent it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q17",
    prompt: "Water left after washing vegetables can be reused to \u2014",
    options: [
      { id: "a", text: "Drink" },
      { id: "b", text: "Cook dal" },
      { id: "c", text: "Water plants" },
      { id: "d", text: "Brush teeth" }
    ],
    answerId: "c",
    explanation: "Rinse water is not clean enough to drink or cook with, but it is perfect for watering plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q18",
    prompt: "Collecting and storing rainwater so we can use it later is called \u2014",
    options: [
      { id: "a", text: "Rainwater harvesting" },
      { id: "b", text: "Evaporation" },
      { id: "c", text: "Flooding" },
      { id: "d", text: "Melting" }
    ],
    answerId: "a",
    explanation: "Rainwater harvesting means catching rainwater from rooftops or the ground and saving it in tanks, pits or ponds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q19",
    prompt: "A tap that keeps dripping all day \u2014",
    options: [
      { id: "a", text: "Wastes no water at all" },
      { id: "b", text: "Wastes a lot of water over time" },
      { id: "c", text: "Wastes only hot water" },
      { id: "d", text: "Wastes water only at night" }
    ],
    answerId: "b",
    explanation: "Each drop is small, but a dripping tap can waste many buckets of water in a day. Leaks should be fixed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q20",
    prompt: "Which is the correct order of the water cycle?",
    options: [
      { id: "a", text: "Rain \u2192 Sun heats water \u2192 clouds form \u2192 evaporation" },
      { id: "b", text: "Clouds form \u2192 evaporation \u2192 rain \u2192 Sun heats water" },
      { id: "c", text: "Rain \u2192 clouds form \u2192 evaporation \u2192 water cools" },
      { id: "d", text: "Sun heats water \u2192 evaporation \u2192 condensation into clouds \u2192 rain" }
    ],
    answerId: "d",
    explanation: "First the Sun heats water, which evaporates. The vapour cools and condenses into clouds, then falls as rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q21",
    prompt: "Where is most of the water on Earth found?",
    options: [
      { id: "a", text: "Oceans and seas" },
      { id: "b", text: "Rivers" },
      { id: "c", text: "Wells" },
      { id: "d", text: "Ponds" }
    ],
    answerId: "a",
    explanation: "Oceans and seas hold almost all of Earth's water. Rivers, wells and ponds hold only a tiny part.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q22",
    prompt: "On which day will wet clothes dry the fastest?",
    options: [
      { id: "a", text: "A cool day, kept inside a cupboard" },
      { id: "b", text: "A rainy day, hung outside" },
      { id: "c", text: "Any day, kept folded in a bag" },
      { id: "d", text: "A sunny, windy day, spread out on a line" }
    ],
    answerId: "d",
    explanation: "Sunlight, wind and spreading clothes out all help water evaporate faster.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q23",
    prompt: "Riya covers a pan of boiling water with a lid. Later, she sees water drops on the inside of the lid. Which two changes happened?",
    options: [
      { id: "a", text: "Melting and freezing" },
      { id: "b", text: "Freezing and evaporation" },
      { id: "c", text: "Evaporation and condensation" },
      { id: "d", text: "Melting and condensation" }
    ],
    answerId: "c",
    explanation: "The hot water evaporated into vapour. The vapour touched the cooler lid and condensed into drops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-a-q24",
    prompt: "Why does rainwater harvesting help wells and handpumps in a village?",
    options: [
      { id: "a", text: "It makes more rain fall" },
      { id: "b", text: "It helps refill the groundwater" },
      { id: "c", text: "It makes the water salty" },
      { id: "d", text: "It stops evaporation forever" }
    ],
    answerId: "b",
    explanation: "Saved rainwater soaks into the ground and refills groundwater, so wells and handpumps do not dry up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-water-b-q01",
    prompt: "Which of these brings water into our homes through pipes?",
    options: [
      { id: "a", text: "Chimney" },
      { id: "b", text: "Window" },
      { id: "c", text: "Tap" },
      { id: "d", text: "Light switch" }
    ],
    answerId: "c",
    explanation: "Water travels through pipes and comes out of a tap when we open it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q02",
    prompt: "A large body of still water with land all around it is called a \u2014",
    options: [
      { id: "a", text: "Lake" },
      { id: "b", text: "River" },
      { id: "c", text: "Waterfall" },
      { id: "d", text: "Stream" }
    ],
    answerId: "a",
    explanation: "A lake has land all around it and its water stays mostly still. Rivers and streams keep flowing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q03",
    prompt: "Which of these foods needs water to be cooked?",
    options: [
      { id: "a", text: "A fresh apple" },
      { id: "b", text: "A raw carrot" },
      { id: "c", text: "A banana" },
      { id: "d", text: "Boiled rice" }
    ],
    answerId: "d",
    explanation: "Rice is cooked by boiling it in water. Apples, raw carrots and bananas can be eaten without cooking.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q04",
    prompt: "A deep hole dug into the ground to get water is called a \u2014",
    options: [
      { id: "a", text: "Tunnel" },
      { id: "b", text: "Well" },
      { id: "c", text: "Garbage pit" },
      { id: "d", text: "Burrow" }
    ],
    answerId: "b",
    explanation: "A well is dug deep until it reaches groundwater. People pull the water up with a bucket and rope or a pump.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q05",
    prompt: "Which living thing has its home in water?",
    options: [
      { id: "a", text: "Fish" },
      { id: "b", text: "Camel" },
      { id: "c", text: "Sparrow" },
      { id: "d", text: "Cow" }
    ],
    answerId: "a",
    explanation: "Fish live in water and breathe using gills. Water is home for many plants and animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q06",
    prompt: "Water changes into ice when it is \u2014",
    options: [
      { id: "a", text: "Heated" },
      { id: "b", text: "Stirred" },
      { id: "c", text: "Poured" },
      { id: "d", text: "Made very cold" }
    ],
    answerId: "d",
    explanation: "When water becomes very cold, it freezes and turns into solid ice, like in a freezer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q07",
    prompt: "When ice changes into water, it is called \u2014",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Raining" }
    ],
    answerId: "b",
    explanation: "Ice melts into water when it gets warm. Freezing is the opposite change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q08",
    prompt: "Water that we drink should always be \u2014",
    options: [
      { id: "a", text: "Muddy" },
      { id: "b", text: "Smelly" },
      { id: "c", text: "Clean and safe" },
      { id: "d", text: "Coloured" }
    ],
    answerId: "c",
    explanation: "Drinking water must be clean and safe so that germs do not make us sick.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q09",
    prompt: "Plants take in water from the soil through their \u2014",
    options: [
      { id: "a", text: "Flowers" },
      { id: "b", text: "Fruits" },
      { id: "c", text: "Seeds" },
      { id: "d", text: "Roots" }
    ],
    answerId: "d",
    explanation: "Roots grow into the soil and soak up water for the whole plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q10",
    prompt: "Which is a good habit to save water?",
    options: [
      { id: "a", text: "Washing a car with a bucket and cloth" },
      { id: "b", text: "Leaving the tap open while talking" },
      { id: "c", text: "Playing with a running hose pipe" },
      { id: "d", text: "Throwing leftover drinking water down the drain" }
    ],
    answerId: "a",
    explanation: "A bucket uses much less water than a running hose. Leftover drinking water can be given to plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q11",
    prompt: "Water falling from clouds as rain, snow or hail is called \u2014",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Condensation" },
      { id: "c", text: "Precipitation" },
      { id: "d", text: "Germination" }
    ],
    answerId: "c",
    explanation: "Precipitation is any water that falls from clouds to the ground, such as rain, snow or hail.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q12",
    prompt: "Which of these gets its water from groundwater?",
    options: [
      { id: "a", text: "Rain gauge" },
      { id: "b", text: "Handpump" },
      { id: "c", text: "Cloud" },
      { id: "d", text: "Ocean" }
    ],
    answerId: "b",
    explanation: "A handpump has a pipe going deep into the ground to bring up groundwater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q13",
    prompt: "A puddle on the road disappears on a sunny afternoon. This is mainly because the water \u2014",
    options: [
      { id: "a", text: "Turns into sand" },
      { id: "b", text: "Evaporates into the air" },
      { id: "c", text: "Becomes salt" },
      { id: "d", text: "Turns into ice" }
    ],
    answerId: "b",
    explanation: "The Sun's heat turns the puddle water into water vapour, which goes into the air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q14",
    prompt: "Factories mainly use water for \u2014",
    options: [
      { id: "a", text: "Watching TV" },
      { id: "b", text: "Flying planes" },
      { id: "c", text: "Reading books" },
      { id: "d", text: "Cooling machines and making things" }
    ],
    answerId: "d",
    explanation: "Factories use water to cool hot machines and to make things like paper, cloth and food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q15",
    prompt: "Which of these shows water being wasted?",
    options: [
      { id: "a", text: "Leaving the tap open while soaping your hands" },
      { id: "b", text: "Closing the tap tightly" },
      { id: "c", text: "Getting a leaking pipe fixed" },
      { id: "d", text: "Bathing with a bucket and mug" }
    ],
    answerId: "a",
    explanation: "Water flows away for nothing while we soap our hands. We should close the tap and open it only to rinse.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q16",
    prompt: "Muddy water is collected in a pot. What should be done first to clean it before boiling?",
    options: [
      { id: "a", text: "Add more mud" },
      { id: "b", text: "Shake it hard" },
      { id: "c", text: "Let the mud settle, then pour it through a clean cloth" },
      { id: "d", text: "Add cooking oil" }
    ],
    answerId: "c",
    explanation: "Letting mud settle and filtering through a clean cloth removes dirt. Boiling afterwards kills germs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q17",
    prompt: "Water vapour high in the sky cools down and forms \u2014",
    options: [
      { id: "a", text: "Clouds" },
      { id: "b", text: "Sand" },
      { id: "c", text: "Smoke" },
      { id: "d", text: "Stones" }
    ],
    answerId: "a",
    explanation: "When water vapour cools high up, it condenses into tiny drops that join together to make clouds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q18",
    prompt: "Arjun sees tiny water drops on the grass early in the morning, though it did not rain. Why?",
    options: [
      { id: "a", text: "The grass sweats like we do" },
      { id: "b", text: "Someone always waters it at night" },
      { id: "c", text: "Water vapour in the air cools on the cool grass and forms drops" },
      { id: "d", text: "The drops fall from the Moon" }
    ],
    answerId: "c",
    explanation: "These drops are called dew. Water vapour in the air condenses on the cool grass during the night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q19",
    prompt: "Which of these does NOT help save water?",
    options: [
      { id: "a", text: "Fixing leaking taps" },
      { id: "b", text: "Reusing rinse water for plants" },
      { id: "c", text: "Collecting rainwater in tanks" },
      { id: "d", text: "Washing the courtyard daily with a running hose" }
    ],
    answerId: "d",
    explanation: "A running hose wastes a lot of water. Sweeping first and using a bucket is a better choice.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q20",
    prompt: "Which of these is fresh water, not salty water?",
    options: [
      { id: "a", text: "Sea water" },
      { id: "b", text: "River water" },
      { id: "c", text: "Ocean water" },
      { id: "d", text: "Water from a salt pan" }
    ],
    answerId: "b",
    explanation: "River water is fresh water. Sea water, ocean water and salt pan water have lots of salt in them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q21",
    prompt: "About how much of the Earth's surface is covered with water?",
    options: [
      { id: "a", text: "One-tenth" },
      { id: "b", text: "Half" },
      { id: "c", text: "About three-fourths" },
      { id: "d", text: "One-fourth" }
    ],
    answerId: "c",
    explanation: "About three out of every four parts of Earth's surface is water, mostly salty oceans and seas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q22",
    prompt: "Two same plates have the same amount of water. One is kept in the sun and one in the shade. What will happen?",
    options: [
      { id: "a", text: "The plate in the sun will dry first" },
      { id: "b", text: "The plate in the shade will dry first" },
      { id: "c", text: "Both will dry at exactly the same time" },
      { id: "d", text: "Neither plate will ever dry" }
    ],
    answerId: "a",
    explanation: "Heat from the Sun makes water evaporate faster, so the plate in the sun dries first.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q23",
    prompt: "Clouds keep collecting water drops and become dark and heavy. Which step of the water cycle comes next?",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Precipitation" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Melting" }
    ],
    answerId: "b",
    explanation: "When drops in a cloud become too heavy, they fall as rain. This step is called precipitation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-water-b-q24",
    prompt: "In some dry places, people built stepwells and ponds long ago. How did these help them?",
    options: [
      { id: "a", text: "They brought the sea closer" },
      { id: "b", text: "They turned salty water sweet" },
      { id: "c", text: "They stopped all rain from falling" },
      { id: "d", text: "They stored rainwater for the dry months" }
    ],
    answerId: "d",
    explanation: "Stepwells and ponds collected rainwater in the rainy season, so people had water when it did not rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udca7",
    title: "Water means life",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "Plants, animals and people all need water. The Sun heats water, it rises as vapour, cools into clouds, then falls back as rain.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Sources", reveal: "Rain, rivers, lakes, wells, groundwater", emoji: "\ud83c\udfde\ufe0f" },
      { label: "Uses", reveal: "Drinking, cooking, cleaning, farms, factories", emoji: "\ud83d\udeb0" },
      { label: "Water cycle", reveal: "Evaporation \u2192 condensation \u2192 precipitation", emoji: "\ud83d\udd04" },
      { label: "Safe & saved", reveal: "Boil dirty water; never waste a drop", emoji: "\ud83e\uddb8" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Water vapour cooling to form clouds is called\u2026",
    options: [
        { id: "a", text: "Evaporation" },
        { id: "b", text: "Condensation" },
        { id: "c", text: "Precipitation" },
        { id: "d", text: "Melting" }
    ],
    answerId: "b",
    why: "Cooling vapour turns into tiny droplets that form clouds: condensation.",
    visual: "water-cycle",
    speak: "Water vapour cooling to form clouds is called\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Water means life", "Evaporation, condensation, precipitation", "Boil to stay safe; save every drop", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceWater: ChapterDef = {
  id: "water-cycle",
  title: "Water: Sources, Uses & Cycle",
  emoji: "\ud83d\udca7",
  blurb: "Where water comes from and where it goes",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "earth-space",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "earth-space",
      questions: SET_B,
    },
  ],
  paperTopics: ["earth-space", "materials"],
};

export const g4ScienceWaterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
