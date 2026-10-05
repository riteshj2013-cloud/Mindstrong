import type { ChapterDef, PrepQuestion } from "../types";

/** Solids, Liquids and Gases - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-matter-a-q01",
    prompt: "Which of these is a solid?",
    options: [
      { id: "a", text: "Milk" },
      { id: "b", text: "Stone" },
      { id: "c", text: "Air" },
      { id: "d", text: "Juice" }
    ],
    answerId: "b",
    explanation: "A stone has its own fixed shape and size, so it is a solid. Milk and juice are liquids, and air is a gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q02",
    prompt: "Which of these is a liquid?",
    options: [
      { id: "a", text: "Pencil" },
      { id: "b", text: "Steam" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Brick" }
    ],
    answerId: "c",
    explanation: "Oil flows and takes the shape of the bottle it is kept in, so it is a liquid. A pencil and a brick are solids, and steam is a gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q03",
    prompt: "Which of these is a gas?",
    options: [
      { id: "a", text: "Air inside a balloon" },
      { id: "b", text: "An ice cube" },
      { id: "c", text: "Honey" },
      { id: "d", text: "A wooden spoon" }
    ],
    answerId: "a",
    explanation: "Air is a gas. It spreads out to fill the whole balloon. Honey is a liquid, and an ice cube and a spoon are solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q04",
    prompt: "Anything that takes up space and has weight is called ______.",
    options: [
      { id: "a", text: "Energy" },
      { id: "b", text: "Light" },
      { id: "c", text: "Sound" },
      { id: "d", text: "Matter" }
    ],
    answerId: "d",
    explanation: "Matter is anything that takes up space and has weight. Solids, liquids and gases are all matter. Light and sound are not matter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q05",
    prompt: "An ice cube is left on a plate on a warm day. What does it turn into?",
    options: [
      { id: "a", text: "Steam" },
      { id: "b", text: "Salt" },
      { id: "c", text: "Water" },
      { id: "d", text: "Air" }
    ],
    answerId: "c",
    explanation: "Warmth melts the ice, and it becomes liquid water. This change from solid to liquid is called melting.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q06",
    prompt: "A book lying on a table keeps its shape. This is because a book is a ______.",
    options: [
      { id: "a", text: "Solid" },
      { id: "b", text: "Liquid" },
      { id: "c", text: "Gas" },
      { id: "d", text: "Shadow" }
    ],
    answerId: "a",
    explanation: "Solids have a fixed shape. A book does not spread out or flow, so it is a solid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q07",
    prompt: "Meera pours milk from a jug into a round bowl. What shape does the milk take?",
    options: [
      { id: "a", text: "It keeps the shape of the jug" },
      { id: "b", text: "It becomes a square" },
      { id: "c", text: "It rolls into a ball" },
      { id: "d", text: "It takes the shape of the bowl" }
    ],
    answerId: "d",
    explanation: "Milk is a liquid. Liquids do not have their own shape, so they take the shape of the container they are in.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q08",
    prompt: "What goes into a balloon when you blow into it?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Air" },
      { id: "c", text: "Sand" },
      { id: "d", text: "Milk" }
    ],
    answerId: "b",
    explanation: "When we blow, air from our body goes into the balloon. The air spreads out and makes the balloon bigger.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q09",
    prompt: "A tray of water is kept in the freezer for a few hours. What does the water become?",
    options: [
      { id: "a", text: "Ice" },
      { id: "b", text: "Steam" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Air" }
    ],
    answerId: "a",
    explanation: "Strong cold turns liquid water into solid ice. This change is called freezing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q10",
    prompt: "Which group has ONLY solids?",
    options: [
      { id: "a", text: "Chair, milk, stone" },
      { id: "b", text: "Air, coin, water" },
      { id: "c", text: "Coin, chair, stone" },
      { id: "d", text: "Water, juice, oil" }
    ],
    answerId: "c",
    explanation: "A coin, a chair and a stone all have a fixed shape and size, so they are all solids. The other groups mix in liquids or gases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q11",
    prompt: "The change of a liquid into a solid by cooling is called ______.",
    options: [
      { id: "a", text: "Melting" },
      { id: "b", text: "Boiling" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Freezing" }
    ],
    answerId: "d",
    explanation: "Freezing means a liquid becomes a solid when it is cooled, like water turning into ice. Melting is the opposite change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q12",
    prompt: "Wet clothes on a line become dry in the sun. Where does the water go?",
    options: [
      { id: "a", text: "It goes only into the ground" },
      { id: "b", text: "It goes into the air as water vapour" },
      { id: "c", text: "It turns into cloth" },
      { id: "d", text: "It turns into ice" }
    ],
    answerId: "b",
    explanation: "The sun's heat slowly changes the water in the clothes into water vapour, a gas, which mixes with the air. This is called evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q13",
    prompt: "Which of these has a fixed volume (amount) but NO fixed shape?",
    options: [
      { id: "a", text: "Brick" },
      { id: "b", text: "Water" },
      { id: "c", text: "Air" },
      { id: "d", text: "Eraser" }
    ],
    answerId: "b",
    explanation: "Water is a liquid. Its amount stays the same, but its shape changes with the container. A brick and an eraser have a fixed shape, and air has neither a fixed shape nor a fixed volume.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q14",
    prompt: "Tiny water drops appear on the outside of a glass of ice-cold water. What is this change called?",
    options: [
      { id: "a", text: "Melting" },
      { id: "b", text: "Freezing" },
      { id: "c", text: "Boiling" },
      { id: "d", text: "Condensation" }
    ],
    answerId: "d",
    explanation: "Water vapour in the air touches the cold glass, cools down and turns into tiny water drops. A gas turning into a liquid is called condensation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q15",
    prompt: "An incense stick is lit in one corner. Soon, the whole room smells nice. Why?",
    options: [
      { id: "a", text: "The smoke and smell are gases that spread to fill the room" },
      { id: "b", text: "The incense stick is a liquid that flows" },
      { id: "c", text: "Solids move very fast across a room" },
      { id: "d", text: "The walls make the smell" }
    ],
    answerId: "a",
    explanation: "Gases have no fixed shape or size. They spread out in every direction until they fill all the space they can reach.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q16",
    prompt: "Which of these is NOT a liquid?",
    options: [
      { id: "a", text: "Honey" },
      { id: "b", text: "Coconut oil" },
      { id: "c", text: "Salt" },
      { id: "d", text: "Vinegar" }
    ],
    answerId: "c",
    explanation: "Salt is made of tiny solid crystals that keep their own shape. Honey, coconut oil and vinegar are liquids that flow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q17",
    prompt: "Water in a kettle is heated until it bubbles quickly and turns into steam. What is this called?",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Boiling" }
    ],
    answerId: "d",
    explanation: "When water is heated strongly, it bubbles and quickly turns into steam. This is called boiling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q18",
    prompt: "One cup of water is poured first into a tall thin bottle, then into a wide flat bowl. What happens to the amount of water?",
    options: [
      { id: "a", text: "It stays the same" },
      { id: "b", text: "It becomes more in the bowl" },
      { id: "c", text: "It becomes less in the bottle" },
      { id: "d", text: "It disappears" }
    ],
    answerId: "a",
    explanation: "A liquid has a fixed volume. Only its shape changes with the container. The amount of water stays one cup.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q19",
    prompt: "An ice cream is left outside on a hot afternoon. What happens to it?",
    options: [
      { id: "a", text: "It becomes harder" },
      { id: "b", text: "It turns into a gas at once" },
      { id: "c", text: "It melts and becomes runny" },
      { id: "d", text: "It turns into stone" }
    ],
    answerId: "c",
    explanation: "Heat melts the solid ice cream into a liquid. That is why it drips and becomes runny.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q20",
    prompt: "We cannot see air. How can we tell that air is around us?",
    options: [
      { id: "a", text: "Air has a bright colour" },
      { id: "b", text: "We feel the wind and see leaves move" },
      { id: "c", text: "Air always smells sweet" },
      { id: "d", text: "Air is hard to touch" }
    ],
    answerId: "b",
    explanation: "Moving air is called wind. We feel it on our face and see it moving leaves, flags and kites, so we know air is there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q21",
    prompt: "Sugar can be poured from a jar like water. Why is sugar still called a solid?",
    options: [
      { id: "a", text: "Each tiny grain of sugar has its own fixed shape" },
      { id: "b", text: "Sugar tastes sweet" },
      { id: "c", text: "Sugar is white in colour" },
      { id: "d", text: "Sugar is kept in a jar" }
    ],
    answerId: "a",
    explanation: "Sugar pours because it is made of many tiny grains. Each grain keeps its own shape and size, so sugar is a solid. Taste and colour do not decide the state.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q22",
    prompt: "Riya closes the tip of a syringe full of air and pushes the plunger. It moves in a little. With water inside, it hardly moves at all. What does this show?",
    options: [
      { id: "a", text: "Water is a gas" },
      { id: "b", text: "Air cannot be pushed at all" },
      { id: "c", text: "Water takes up no space" },
      { id: "d", text: "Air can be squeezed into less space, but water cannot easily" }
    ],
    answerId: "d",
    explanation: "Gases like air can be pressed into a smaller space. Liquids like water have a fixed volume, so they are very hard to squeeze.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q23",
    prompt: "Ice changes into water, and then water changes into water vapour. Which two changes happened, in order?",
    options: [
      { id: "a", text: "Freezing, then condensation" },
      { id: "b", text: "Melting, then evaporation" },
      { id: "c", text: "Boiling, then melting" },
      { id: "d", text: "Condensation, then freezing" }
    ],
    answerId: "b",
    explanation: "Solid ice to liquid water is melting. Liquid water to water vapour is evaporation (or boiling when heated strongly).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-a-q24",
    prompt: "On which day will a puddle of water dry up the fastest?",
    options: [
      { id: "a", text: "A cold, cloudy, still day" },
      { id: "b", text: "A rainy day" },
      { id: "c", text: "A hot, sunny, windy day" },
      { id: "d", text: "A cold night" }
    ],
    answerId: "c",
    explanation: "Heat from the sun and moving air both help water evaporate faster. So a hot, sunny, windy day dries the puddle quickest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-matter-b-q01",
    prompt: "Which of these is a liquid?",
    options: [
      { id: "a", text: "Rock" },
      { id: "b", text: "Smoke" },
      { id: "c", text: "Milk" },
      { id: "d", text: "Spoon" }
    ],
    answerId: "c",
    explanation: "Milk flows and takes the shape of its glass, so it is a liquid. A rock and a spoon are solids, and smoke is mostly gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q02",
    prompt: "Which of these keeps its own shape in any container?",
    options: [
      { id: "a", text: "A marble" },
      { id: "b", text: "Water" },
      { id: "c", text: "Juice" },
      { id: "d", text: "Air" }
    ],
    answerId: "a",
    explanation: "A marble is a solid, so it keeps its round shape wherever you put it. Water and juice take the shape of the container, and air fills it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q03",
    prompt: "A football is pumped up until it is firm. What is inside it?",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Sand" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Air" }
    ],
    answerId: "d",
    explanation: "A football is filled with air. The air spreads out and fills the whole inside of the ball.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q04",
    prompt: "What are the three states of matter?",
    options: [
      { id: "a", text: "Hot, cold and warm" },
      { id: "b", text: "Solid, liquid and gas" },
      { id: "c", text: "Red, blue and green" },
      { id: "d", text: "Big, small and tiny" }
    ],
    answerId: "b",
    explanation: "Matter is found in three states: solid, liquid and gas. For example, ice, water and water vapour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q05",
    prompt: "Water vapour rising from a pot of hot water is a ______.",
    options: [
      { id: "a", text: "Gas" },
      { id: "b", text: "Solid" },
      { id: "c", text: "Liquid" },
      { id: "d", text: "Metal" }
    ],
    answerId: "a",
    explanation: "When water is heated, it changes into water vapour, which is a gas. It rises and spreads into the air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q06",
    prompt: "Which of these is a solid?",
    options: [
      { id: "a", text: "Coconut water" },
      { id: "b", text: "Air" },
      { id: "c", text: "Rain water" },
      { id: "d", text: "An ice cube" }
    ],
    answerId: "d",
    explanation: "An ice cube has a fixed shape and size, so it is a solid. It is frozen water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q07",
    prompt: "A glass of water spills on the floor. What does the water do?",
    options: [
      { id: "a", text: "It stands up tall like a tower" },
      { id: "b", text: "It stays in the shape of a cube" },
      { id: "c", text: "It spreads out and flows" },
      { id: "d", text: "It floats up in the air" }
    ],
    answerId: "c",
    explanation: "Water is a liquid, and liquids flow. Without a container, it spreads out over the floor.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q08",
    prompt: "Which of these can flow?",
    options: [
      { id: "a", text: "Brick" },
      { id: "b", text: "Honey" },
      { id: "c", text: "Pencil" },
      { id: "d", text: "Plate" }
    ],
    answerId: "b",
    explanation: "Honey is a liquid, so it can flow, even if it flows slowly. A brick, a pencil and a plate are solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q09",
    prompt: "What does melting mean?",
    options: [
      { id: "a", text: "A liquid changes into a solid" },
      { id: "b", text: "A gas changes into a liquid" },
      { id: "c", text: "A liquid changes into a gas" },
      { id: "d", text: "A solid changes into a liquid" }
    ],
    answerId: "d",
    explanation: "Melting happens when a solid is heated and becomes a liquid, like butter melting in a hot pan.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q10",
    prompt: "Which of these must be kept in a tightly closed container so it does not escape into the air?",
    options: [
      { id: "a", text: "Cooking gas in a cylinder" },
      { id: "b", text: "A stone" },
      { id: "c", text: "A book" },
      { id: "d", text: "A toy car" }
    ],
    answerId: "a",
    explanation: "Gases spread out in all directions, so they must be kept in closed containers. Solids like a stone, book or toy car stay where they are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q11",
    prompt: "Which pair has a FIXED volume (amount of space taken up)?",
    options: [
      { id: "a", text: "Air and steam" },
      { id: "b", text: "Stone and water" },
      { id: "c", text: "Smoke and air" },
      { id: "d", text: "Steam and smoke" }
    ],
    answerId: "b",
    explanation: "Solids like a stone and liquids like water both have a fixed volume. Gases like air and steam spread to fill any space, so their volume is not fixed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q12",
    prompt: "After a hot bath, the bathroom mirror becomes foggy. Why?",
    options: [
      { id: "a", text: "The mirror melts" },
      { id: "b", text: "Ice forms on the mirror" },
      { id: "c", text: "Water vapour cools on the mirror and turns into tiny drops" },
      { id: "d", text: "Soap jumps onto the mirror" }
    ],
    answerId: "c",
    explanation: "Warm water vapour from the bath touches the cooler mirror and changes into tiny water drops. This is condensation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q13",
    prompt: "Melted wax drips down a candle and becomes hard again as it cools. What is this hardening called?",
    options: [
      { id: "a", text: "Freezing (becoming solid)" },
      { id: "b", text: "Boiling" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Melting" }
    ],
    answerId: "a",
    explanation: "When a liquid cools and becomes a solid, it is called freezing or solidifying. Liquid wax turns back into solid wax.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q14",
    prompt: "Why does the air inside a balloon take the shape of the balloon?",
    options: [
      { id: "a", text: "Air is a solid" },
      { id: "b", text: "Air has its own fixed shape" },
      { id: "c", text: "Air spreads out to fill all the space inside the balloon" },
      { id: "d", text: "Air is a heavy liquid" }
    ],
    answerId: "c",
    explanation: "Air is a gas. Gases have no fixed shape, so they spread out to fill whatever container they are in.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q15",
    prompt: "Which of these will melt quickly if you hold it in your warm hand?",
    options: [
      { id: "a", text: "Iron nail" },
      { id: "b", text: "Stone" },
      { id: "c", text: "Glass marble" },
      { id: "d", text: "A piece of chocolate" }
    ],
    answerId: "d",
    explanation: "Chocolate melts at a low temperature, so even the warmth of your hand can melt it. A nail, stone and marble need much more heat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q16",
    prompt: "Ravi pours a full cup of juice from a cup onto a plate. What changes?",
    options: [
      { id: "a", text: "The amount of juice" },
      { id: "b", text: "Only the shape of the juice" },
      { id: "c", text: "The colour of the juice" },
      { id: "d", text: "The taste of the juice" }
    ],
    answerId: "b",
    explanation: "A liquid takes the shape of its container, but its amount, colour and taste stay the same. Only the shape changes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q17",
    prompt: "A dish of water is kept near a sunny window. After a few days, the water is gone. What is this called?",
    options: [
      { id: "a", text: "Freezing" },
      { id: "b", text: "Melting" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Evaporation" }
    ],
    answerId: "d",
    explanation: "Slowly, the water changes into water vapour and goes into the air. This change from liquid to gas is called evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q18",
    prompt: "Find the odd one out.",
    options: [
      { id: "a", text: "Wooden block" },
      { id: "b", text: "Milk" },
      { id: "c", text: "Oil" },
      { id: "d", text: "Vinegar" }
    ],
    answerId: "a",
    explanation: "A wooden block is a solid. Milk, oil and vinegar are all liquids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q19",
    prompt: "Water vapour rises high into the sky and cools down. What does it form?",
    options: [
      { id: "a", text: "Sand" },
      { id: "b", text: "Stones" },
      { id: "c", text: "Clouds made of tiny water drops" },
      { id: "d", text: "Ice cream" }
    ],
    answerId: "c",
    explanation: "High up, the air is cold. Water vapour cools and condenses into tiny water drops that together make clouds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q20",
    prompt: "Why does a bicycle tyre become firm when we pump more air into it?",
    options: [
      { id: "a", text: "The air turns into a solid" },
      { id: "b", text: "More air is squeezed into the same space" },
      { id: "c", text: "The air turns into water" },
      { id: "d", text: "The tyre melts and grows" }
    ],
    answerId: "b",
    explanation: "Air is a gas and can be pressed into a smaller space. Pumping pushes more and more air into the tyre, which makes it firm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q21",
    prompt: "Which statement is TRUE?",
    options: [
      { id: "a", text: "Liquids have a fixed shape" },
      { id: "b", text: "Gases have a fixed volume" },
      { id: "c", text: "Solids take the shape of their container" },
      { id: "d", text: "Liquids have a fixed volume but take the shape of their container" }
    ],
    answerId: "d",
    explanation: "Liquids keep the same amount but change shape to fit their container. Solids keep their own shape, and gases have neither a fixed shape nor a fixed volume.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q22",
    prompt: "Some ice cubes are put in a glass. After a while, the ice becomes water, and drops appear on the outside of the glass. Which two changes happened?",
    options: [
      { id: "a", text: "Melting of the ice and condensation on the glass" },
      { id: "b", text: "Boiling and freezing" },
      { id: "c", text: "Evaporation and freezing" },
      { id: "d", text: "Melting and boiling" }
    ],
    answerId: "a",
    explanation: "The ice melts into water inside the glass. Water vapour in the air cools on the cold glass and condenses into drops outside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q23",
    prompt: "Meena covers a pot of boiling water with a lid. When she lifts the lid, she sees water drops under it. What is the correct order of changes?",
    options: [
      { id: "a", text: "Water \u2192 ice \u2192 water" },
      { id: "b", text: "Water \u2192 steam \u2192 ice" },
      { id: "c", text: "Water \u2192 water vapour \u2192 water drops" },
      { id: "d", text: "Steam \u2192 ice \u2192 water" }
    ],
    answerId: "c",
    explanation: "Boiling turns water into water vapour. The vapour touches the cooler lid and condenses back into water drops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-matter-b-q24",
    prompt: "A closed bottle is half full of juice. What is in the top half of the bottle?",
    options: [
      { id: "a", text: "Nothing at all, it is truly empty" },
      { id: "b", text: "Air, which is a gas" },
      { id: "c", text: "More juice that we cannot see" },
      { id: "d", text: "A hidden solid" }
    ],
    answerId: "b",
    explanation: "The \"empty\" part of the bottle is filled with air. Air is a gas, and it fills any space that is not taken up by the juice.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddca",
    title: "Everything is matter",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "A stone, milk and air all take up space. We call all of them matter. Matter can be solid, liquid or gas.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Solids", reveal: "Keep their own shape and size", emoji: "\ud83e\udea8" },
      { label: "Liquids", reveal: "Flow; take the shape of the container", emoji: "\ud83e\udd5b" },
      { label: "Gases", reveal: "No fixed shape; fill all the space", emoji: "\ud83c\udf88" },
      { label: "Changing states", reveal: "Heat: ice \u2192 water \u2192 steam; cooling reverses", emoji: "\u2668\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Water poured from a glass into a bowl\u2026",
    options: [
        { id: "a", text: "Keeps the glass shape" },
        { id: "b", text: "Takes the bowl's shape" },
        { id: "c", text: "Turns into a gas" },
        { id: "d", text: "Becomes a solid" }
    ],
    answerId: "b",
    why: "Liquids take the shape of their container; the amount stays the same.",
    visual: "water-cycle",
    speak: "Water poured from a glass into a bowl\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Matter takes up space", "Solid, liquid, gas", "Heat and cooling change states", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceMatter: ChapterDef = {
  id: "solids-liquids-gases",
  title: "Solids, Liquids and Gases",
  emoji: "\ud83e\uddca",
  blurb: "Matter and its three states",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "materials",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "materials",
      questions: SET_B,
    },
  ],
  paperTopics: ["materials", "forces-energy"],
};

export const g4ScienceMatterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
