import type { ChapterDef, PrepQuestion } from "../types";

/** Metals and Non-metals - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-metals-a-q01",
    prompt: "The property of metals that allows them to be beaten into thin sheets is called \u2014",
    options: [
      { id: "a", text: "Ductility" },
      { id: "b", text: "Malleability" },
      { id: "c", text: "Sonority" },
      { id: "d", text: "Lustre" }
    ],
    answerId: "b",
    explanation: "Malleability is the ability to be hammered into thin sheets. Ductility is about being drawn into wires.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q02",
    prompt: "Which metal is a liquid at room temperature?",
    options: [
      { id: "a", text: "Sodium" },
      { id: "b", text: "Aluminium" },
      { id: "c", text: "Bromine" },
      { id: "d", text: "Mercury" }
    ],
    answerId: "d",
    explanation: "Mercury is the metal that is liquid at room temperature. Bromine is also a liquid, but it is a non-metal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q03",
    prompt: "Which of these non-metallic substances is a good conductor of electricity?",
    options: [
      { id: "a", text: "Graphite" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Diamond" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "a",
    explanation: "Graphite is a form of carbon that conducts electricity, which is why it is used in electrodes. Diamond, also carbon, does not conduct.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q04",
    prompt: "A temple bell gives a ringing sound when struck. This property of metals is called \u2014",
    options: [
      { id: "a", text: "Malleability" },
      { id: "b", text: "Ductility" },
      { id: "c", text: "Sonority" },
      { id: "d", text: "Brittleness" }
    ],
    answerId: "c",
    explanation: "Sonority is the property of producing a ringing sound when struck. Most metals are sonorous.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q05",
    prompt: "Which metal is kept under kerosene in the laboratory?",
    options: [
      { id: "a", text: "Copper" },
      { id: "b", text: "Iron" },
      { id: "c", text: "Sodium" },
      { id: "d", text: "Zinc" }
    ],
    answerId: "c",
    explanation: "Sodium reacts strongly with oxygen and with moisture in the air. Kerosene keeps air and water away from it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q06",
    prompt: "Electric wires are commonly made of copper because copper is \u2014",
    options: [
      { id: "a", text: "A good conductor of electricity and ductile" },
      { id: "b", text: "Brittle and lustrous" },
      { id: "c", text: "A poor conductor of heat" },
      { id: "d", text: "Soft enough to cut with a knife" }
    ],
    answerId: "a",
    explanation: "Copper conducts electricity very well and can be drawn into thin wires. Both properties make it ideal for wiring.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q07",
    prompt: "Magnesium ribbon is burnt and the white ash is dissolved in water. The solution will \u2014",
    options: [
      { id: "a", text: "Turn blue litmus red" },
      { id: "b", text: "Have no effect on litmus" },
      { id: "c", text: "Turn red litmus colourless" },
      { id: "d", text: "Turn red litmus blue" }
    ],
    answerId: "d",
    explanation: "The ash is magnesium oxide, a basic oxide. In water it forms magnesium hydroxide, which turns red litmus blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q08",
    prompt: "For iron to rust, which conditions must both be present?",
    options: [
      { id: "a", text: "Oxygen only" },
      { id: "b", text: "Oxygen and water" },
      { id: "c", text: "Water only" },
      { id: "d", text: "Carbon dioxide and nitrogen" }
    ],
    answerId: "b",
    explanation: "Rusting needs both oxygen (air) and water (moisture). If either one is missing, iron does not rust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q09",
    prompt: "Galvanisation is a method of protecting iron by coating it with a layer of \u2014",
    options: [
      { id: "a", text: "Zinc" },
      { id: "b", text: "Copper" },
      { id: "c", text: "Paint" },
      { id: "d", text: "Grease" }
    ],
    answerId: "a",
    explanation: "Galvanising means coating iron or steel with zinc. Painting and greasing also prevent rust, but they are not galvanisation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q10",
    prompt: "Zinc granules are added to dilute hydrochloric acid. The gas given off is \u2014",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Carbon dioxide" },
      { id: "c", text: "Hydrogen" },
      { id: "d", text: "Chlorine" }
    ],
    answerId: "c",
    explanation: "Zinc reacts with dilute hydrochloric acid to form zinc chloride and hydrogen gas. The hydrogen burns with a pop sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q11",
    prompt: "An iron nail is left in blue copper sulphate solution for some time. What colour change is seen in the solution?",
    options: [
      { id: "a", text: "Colourless to blue" },
      { id: "b", text: "Blue to light green" },
      { id: "c", text: "Light green to blue" },
      { id: "d", text: "No change at all" }
    ],
    answerId: "b",
    explanation: "Iron is more reactive than copper and displaces it. Iron sulphate forms, which is light green, and copper deposits on the nail.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q12",
    prompt: "Which non-metal is stored under water because it catches fire when exposed to air?",
    options: [
      { id: "a", text: "Sulphur" },
      { id: "b", text: "Carbon" },
      { id: "c", text: "Iodine" },
      { id: "d", text: "White phosphorus" }
    ],
    answerId: "d",
    explanation: "White phosphorus is very reactive and burns in air. Storing it under water keeps air away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q13",
    prompt: "Sulphur is burnt and the gas formed is dissolved in water. The solution will \u2014",
    options: [
      { id: "a", text: "Turn red litmus blue" },
      { id: "b", text: "Be basic in nature" },
      { id: "c", text: "Be neutral to litmus" },
      { id: "d", text: "Turn blue litmus red" }
    ],
    answerId: "d",
    explanation: "Burning sulphur forms sulphur dioxide, an acidic oxide. In water it forms sulphurous acid, which turns blue litmus red.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q14",
    prompt: "Which of these non-metals has a shiny appearance (lustre)?",
    options: [
      { id: "a", text: "Sulphur" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Phosphorus" },
      { id: "d", text: "Charcoal" }
    ],
    answerId: "b",
    explanation: "Iodine is a non-metal, yet its crystals are shiny. It is an exception to the rule that non-metals are dull.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q15",
    prompt: "Which is the hardest natural substance known?",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Graphite" },
      { id: "c", text: "Diamond" },
      { id: "d", text: "Copper" }
    ],
    answerId: "c",
    explanation: "Diamond, a form of carbon, is the hardest natural substance. Graphite is also carbon, but it is soft.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q16",
    prompt: "Which metal is soft enough to be cut with a knife?",
    options: [
      { id: "a", text: "Sodium" },
      { id: "b", text: "Iron" },
      { id: "c", text: "Copper" },
      { id: "d", text: "Aluminium" }
    ],
    answerId: "a",
    explanation: "Sodium and potassium are very soft metals. This is an exception, as most metals are hard.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q17",
    prompt: "In which of these will NO displacement reaction take place?",
    options: [
      { id: "a", text: "Zinc strip in copper sulphate solution" },
      { id: "b", text: "Copper strip in iron sulphate solution" },
      { id: "c", text: "Iron nail in copper sulphate solution" },
      { id: "d", text: "Magnesium ribbon in zinc sulphate solution" }
    ],
    answerId: "b",
    explanation: "A metal displaces another only if it is more reactive. Copper is less reactive than iron, so it cannot displace iron.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q18",
    prompt: "Aluminium foil is used to wrap food mainly because aluminium is \u2014",
    options: [
      { id: "a", text: "Highly malleable" },
      { id: "b", text: "Highly sonorous" },
      { id: "c", text: "A poor conductor of heat" },
      { id: "d", text: "A liquid at room temperature" }
    ],
    answerId: "a",
    explanation: "Aluminium is very malleable, so it can be beaten into thin, flexible foil that wraps food easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q19",
    prompt: "A copper vessel left in moist air slowly gets a dull green coating. This coating is \u2014",
    options: [
      { id: "a", text: "Rust" },
      { id: "b", text: "Copper sulphate" },
      { id: "c", text: "Pure copper oxide" },
      { id: "d", text: "A mixture of copper hydroxide and copper carbonate" }
    ],
    answerId: "d",
    explanation: "Copper reacts with moist air and carbon dioxide to form a green mixture of copper hydroxide and copper carbonate. Rust forms only on iron.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q20",
    prompt: "Which statement is generally true for non-metals?",
    options: [
      { id: "a", text: "They are malleable." },
      { id: "b", text: "They are sonorous." },
      { id: "c", text: "Solid non-metals are brittle." },
      { id: "d", text: "They are good conductors of heat." }
    ],
    answerId: "c",
    explanation: "Solid non-metals such as sulphur and coal break into pieces when hammered. Malleability, sonority, and good conduction are metal properties.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q21",
    prompt: "Metal P displaces metal Q from its salt solution. Metal Q displaces metal R from its salt solution. What is the correct order of reactivity?",
    options: [
      { id: "a", text: "R > Q > P" },
      { id: "b", text: "Q > P > R" },
      { id: "c", text: "P > Q > R" },
      { id: "d", text: "P > R > Q" }
    ],
    answerId: "c",
    explanation: "A metal displaces only a less reactive metal. P is more reactive than Q, and Q is more reactive than R, so P > Q > R.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q22",
    prompt: "Aluminium foil is warmed with sodium hydroxide solution. A gas is given off that burns with a pop sound. The gas is \u2014",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Nitrogen" },
      { id: "c", text: "Carbon dioxide" },
      { id: "d", text: "Hydrogen" }
    ],
    answerId: "d",
    explanation: "Aluminium reacts with sodium hydroxide to form hydrogen gas. A pop sound with a burning splint is the test for hydrogen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q23",
    prompt: "Why should copper sulphate solution NOT be stored in an iron container?",
    options: [
      { id: "a", text: "Iron displaces copper from the solution, so the container gets eaten away." },
      { id: "b", text: "Copper displaces iron, making the container stronger." },
      { id: "c", text: "Iron is less reactive than copper." },
      { id: "d", text: "Copper sulphate solution boils on contact with iron." }
    ],
    answerId: "a",
    explanation: "Iron is more reactive than copper. It slowly displaces copper and forms iron sulphate, so the container is damaged.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q24",
    prompt: "Element X is dull and breaks easily when hammered. Its oxide dissolves in water to give a solution that turns blue litmus red. X is most likely \u2014",
    options: [
      { id: "a", text: "Magnesium" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Sodium" },
      { id: "d", text: "Copper" }
    ],
    answerId: "b",
    explanation: "Dull, brittle, and forming an acidic oxide are all signs of a non-metal. Sulphur fits. The other three are metals that form basic oxides.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-metals-b-q01",
    prompt: "The property of metals that allows them to be drawn into thin wires is called \u2014",
    options: [
      { id: "a", text: "Malleability" },
      { id: "b", text: "Sonority" },
      { id: "c", text: "Ductility" },
      { id: "d", text: "Lustre" }
    ],
    answerId: "c",
    explanation: "Ductility is the ability to be drawn into wires. Gold and silver are among the most ductile metals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q02",
    prompt: "A freshly cut surface of a metal looks shiny. This shine is called \u2014",
    options: [
      { id: "a", text: "Lustre" },
      { id: "b", text: "Ductility" },
      { id: "c", text: "Hardness" },
      { id: "d", text: "Sonority" }
    ],
    answerId: "a",
    explanation: "Lustre is the shine of a metal surface. Metals often look dull over time because a coating forms on them in air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q03",
    prompt: "Which non-metal is a liquid at room temperature?",
    options: [
      { id: "a", text: "Mercury" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Iodine" },
      { id: "d", text: "Bromine" }
    ],
    answerId: "d",
    explanation: "Bromine is a reddish-brown liquid non-metal. Mercury is also a liquid, but it is a metal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q04",
    prompt: "Which non-metal is a key part of many fertilisers that help plants grow?",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Nitrogen" },
      { id: "c", text: "Chlorine" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "b",
    explanation: "Nitrogen is needed by plants to make proteins. Many fertilisers, such as urea, supply nitrogen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q05",
    prompt: "Which non-metal is used to kill germs in drinking water supplies?",
    options: [
      { id: "a", text: "Chlorine" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Carbon" },
      { id: "d", text: "Nitrogen" }
    ],
    answerId: "a",
    explanation: "Chlorine is added in small amounts to water to kill harmful germs. This makes the water safe to drink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q06",
    prompt: "Which metal was traditionally used in clinical thermometers?",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Sodium" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Aluminium" }
    ],
    answerId: "c",
    explanation: "Mercury is a liquid metal that expands evenly when heated. This made it useful in thermometers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q07",
    prompt: "A solution of which non-metal is applied on cuts and wounds as an antiseptic?",
    options: [
      { id: "a", text: "Sulphur" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Phosphorus" },
      { id: "d", text: "Bromine" }
    ],
    answerId: "b",
    explanation: "Tincture of iodine is a solution of iodine in alcohol. It is used as an antiseptic on wounds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q08",
    prompt: "When metals react with oxygen, they generally form \u2014",
    options: [
      { id: "a", text: "Acidic oxides" },
      { id: "b", text: "Neutral salts" },
      { id: "c", text: "Acids" },
      { id: "d", text: "Basic oxides" }
    ],
    answerId: "d",
    explanation: "Metal oxides are basic. When they dissolve in water, they form bases that turn red litmus blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q09",
    prompt: "Which gas is formed when sulphur burns in air?",
    options: [
      { id: "a", text: "Hydrogen" },
      { id: "b", text: "Oxygen" },
      { id: "c", text: "Sulphur dioxide" },
      { id: "d", text: "Carbon dioxide" }
    ],
    answerId: "c",
    explanation: "Sulphur combines with oxygen to form sulphur dioxide. It has a sharp, choking smell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q10",
    prompt: "Cooking pans are made of metals mainly because metals \u2014",
    options: [
      { id: "a", text: "Are good conductors of heat" },
      { id: "b", text: "Are sonorous" },
      { id: "c", text: "Are brittle" },
      { id: "d", text: "Have low melting points" }
    ],
    answerId: "a",
    explanation: "Metals carry heat quickly from the flame to the food. Most metals also have high melting points.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q11",
    prompt: "Which of these metals reacts most vigorously with cold water?",
    options: [
      { id: "a", text: "Copper" },
      { id: "b", text: "Iron" },
      { id: "c", text: "Gold" },
      { id: "d", text: "Sodium" }
    ],
    answerId: "d",
    explanation: "Sodium is high in the reactivity series and reacts violently with cold water. Copper and gold do not react with water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q12",
    prompt: "Copper does not give hydrogen gas with dilute hydrochloric acid because copper is \u2014",
    options: [
      { id: "a", text: "More reactive than hydrogen" },
      { id: "b", text: "Less reactive than hydrogen" },
      { id: "c", text: "A non-metal" },
      { id: "d", text: "A liquid" }
    ],
    answerId: "b",
    explanation: "Copper lies below hydrogen in the reactivity series. It cannot displace hydrogen from dilute acids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q13",
    prompt: "The reddish-brown substance called rust is mainly \u2014",
    options: [
      { id: "a", text: "Iron sulphate" },
      { id: "b", text: "Hydrated iron oxide" },
      { id: "c", text: "Iron carbonate" },
      { id: "d", text: "Iron chloride" }
    ],
    answerId: "b",
    explanation: "Rust forms when iron reacts with oxygen and water. It is mainly hydrated iron oxide.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q14",
    prompt: "Which of these does NOT help prevent an iron gate from rusting?",
    options: [
      { id: "a", text: "Painting it" },
      { id: "b", text: "Applying grease" },
      { id: "c", text: "Washing it often with salt water" },
      { id: "d", text: "Galvanising it" }
    ],
    answerId: "c",
    explanation: "Salt water speeds up rusting. Painting, greasing, and galvanising keep air and moisture away from the iron.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q15",
    prompt: "A zinc strip is placed in blue copper sulphate solution. What is observed after some time?",
    options: [
      { id: "a", text: "The solution becomes colourless and a reddish-brown layer forms on the zinc." },
      { id: "b", text: "The solution turns green and the zinc becomes shiny." },
      { id: "c", text: "The solution turns deeper blue and nothing forms on the zinc." },
      { id: "d", text: "No change is seen." }
    ],
    answerId: "a",
    explanation: "Zinc is more reactive than copper and displaces it. Zinc sulphate is colourless, and reddish-brown copper deposits on the strip.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q16",
    prompt: "Diamond and graphite are both forms of carbon. Which statement about them is correct?",
    options: [
      { id: "a", text: "Both conduct electricity well." },
      { id: "b", text: "Diamond conducts electricity, but graphite does not." },
      { id: "c", text: "Both are very soft." },
      { id: "d", text: "Graphite conducts electricity, while diamond is very hard and does not." }
    ],
    answerId: "d",
    explanation: "Graphite is soft and conducts electricity. Diamond is the hardest natural substance and does not conduct electricity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q17",
    prompt: "Magnesium oxide dissolves in water to form magnesium hydroxide. This solution is \u2014",
    options: [
      { id: "a", text: "Basic" },
      { id: "b", text: "Acidic" },
      { id: "c", text: "Neutral" },
      { id: "d", text: "A strong acid" }
    ],
    answerId: "a",
    explanation: "Magnesium oxide is a metal oxide. Its solution in water is basic and turns red litmus blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q18",
    prompt: "Iron railings in coastal towns rust faster than those in dry inland towns. The main reason is that \u2014",
    options: [
      { id: "a", text: "Sea air has no oxygen." },
      { id: "b", text: "Salt stops water from touching the iron." },
      { id: "c", text: "Sea sand coats and protects the iron." },
      { id: "d", text: "Moist, salty air speeds up rusting." }
    ],
    answerId: "d",
    explanation: "Near the sea, the air has more moisture and salt. Salt speeds up the reaction of iron with oxygen and water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q19",
    prompt: "School bells are made of metal because metals are \u2014",
    options: [
      { id: "a", text: "Lustrous" },
      { id: "b", text: "Ductile" },
      { id: "c", text: "Sonorous" },
      { id: "d", text: "Brittle" }
    ],
    answerId: "c",
    explanation: "Sonorous materials produce a ringing sound when struck. This property makes metals ideal for bells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q20",
    prompt: "Which of these is a non-metal?",
    options: [
      { id: "a", text: "Zinc" },
      { id: "b", text: "Carbon" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Aluminium" }
    ],
    answerId: "b",
    explanation: "Carbon is a non-metal. Zinc, mercury, and aluminium are metals, though mercury is a liquid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q21",
    prompt: "An iron nail is placed in boiled water, and a layer of oil is poured over the water. The nail does not rust. Why?",
    options: [
      { id: "a", text: "There is no water in the tube." },
      { id: "b", text: "The water is too cold." },
      { id: "c", text: "The oil reacts with the iron." },
      { id: "d", text: "The boiled water has almost no dissolved air, and the oil stops air from entering." }
    ],
    answerId: "d",
    explanation: "Boiling removes dissolved air, and the oil layer stops fresh air from dissolving. Without oxygen, iron cannot rust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q22",
    prompt: "Metal X gives hydrogen with dilute hydrochloric acid and displaces copper from copper sulphate solution. It does NOT displace zinc from zinc sulphate solution. X could be \u2014",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Magnesium" },
      { id: "c", text: "Silver" },
      { id: "d", text: "Gold" }
    ],
    answerId: "a",
    explanation: "X lies above hydrogen and copper but below zinc. Iron fits. Magnesium would displace zinc, and silver and gold do not react with dilute acids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q23",
    prompt: "Gold is widely used for making jewellery mainly because it \u2014",
    options: [
      { id: "a", text: "Reacts quickly with air" },
      { id: "b", text: "Is the hardest metal" },
      { id: "c", text: "Is lustrous, malleable, and does not corrode easily" },
      { id: "d", text: "Is the best conductor of heat" }
    ],
    answerId: "c",
    explanation: "Gold is very unreactive, so it keeps its shine. It is also malleable and ductile, so it can be shaped into fine designs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q24",
    prompt: "Charcoal is burnt and the gas formed is bubbled through water. The solution will \u2014",
    options: [
      { id: "a", text: "Turn red litmus blue" },
      { id: "b", text: "Turn blue litmus slightly red" },
      { id: "c", text: "Turn red litmus deep red" },
      { id: "d", text: "Show no effect on any indicator" }
    ],
    answerId: "b",
    explanation: "Burning carbon forms carbon dioxide, an acidic oxide. It dissolves in water to form weak carbonic acid, which turns blue litmus slightly red.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u2699\ufe0f",
    title: "Metals and non-metals",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "Metals are usually shiny, malleable and conduct heat and electricity.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Metals", reveal: "Shiny, malleable, ductile, conductors", emoji: "\ud83e\ude99" },
      { label: "Non-metals", reveal: "Often dull, brittle, poor conductors", emoji: "\ud83d\udca8" },
      { label: "Reactions", reveal: "With oxygen and acids", emoji: "\ud83e\uddea" },
      { label: "Uses", reveal: "Match property to use", emoji: "\ud83c\udfe0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Drawing metals into wires is called\u2026",
    options: [
        { id: "a", text: "Malleability" },
        { id: "b", text: "Ductility" },
        { id: "c", text: "Brittleness" },
        { id: "d", text: "Sonority" }
    ],
    answerId: "b",
    why: "Ductility is drawing into wires.",
    visual: "magnet",
    speak: "Drawing metals into wires is called\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Metal properties", "Contrast non-metals", "Link uses to properties", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceMetals: ChapterDef = {
  id: "metals-nonmetals",
  title: "Metals and Non-metals",
  emoji: "\u2699\ufe0f",
  blurb: "Properties and uses",
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

export const g8ScienceMetalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
