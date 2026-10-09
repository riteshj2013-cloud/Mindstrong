import type { ChapterDef, PrepQuestion } from "../types";

/** Combustion and Flame - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-combustion-a-q01",
    prompt: "A substance that burns in air to produce heat and light is called a \u2014",
    options: [
      { id: "a", text: "Non-combustible substance" },
      { id: "b", text: "Combustible substance" },
      { id: "c", text: "Coolant" },
      { id: "d", text: "Insulator" }
    ],
    answerId: "b",
    explanation: "Combustible substances catch fire and burn in air, giving heat and light. Non-combustible substances do not burn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q02",
    prompt: "Which of these is a non-combustible substance?",
    options: [
      { id: "a", text: "Wood" },
      { id: "b", text: "Paper" },
      { id: "c", text: "Kerosene" },
      { id: "d", text: "Glass" }
    ],
    answerId: "d",
    explanation: "Glass does not burn in air. Wood, paper, and kerosene are fuels that can burn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q03",
    prompt: "The lowest temperature at which a substance catches fire is called its \u2014",
    options: [
      { id: "a", text: "Boiling point" },
      { id: "b", text: "Melting point" },
      { id: "c", text: "Ignition temperature" },
      { id: "d", text: "Freezing point" }
    ],
    answerId: "c",
    explanation: "Ignition temperature is the lowest temperature at which a substance starts burning.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q04",
    prompt: "LPG burns with a blue flame on a stove almost as soon as the burner is lit. This is an example of \u2014",
    options: [
      { id: "a", text: "Spontaneous combustion" },
      { id: "b", text: "Rapid combustion" },
      { id: "c", text: "Explosion only" },
      { id: "d", text: "Smouldering without oxygen" }
    ],
    answerId: "b",
    explanation: "Rapid combustion produces heat and light quickly. LPG and CNG show rapid combustion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q05",
    prompt: "Oily rags left in a warm cupboard slowly heat up and catch fire without a match. This is \u2014",
    options: [
      { id: "a", text: "Rapid combustion" },
      { id: "b", text: "Spontaneous combustion" },
      { id: "c", text: "Complete combustion only" },
      { id: "d", text: "An acid\u2013base reaction" }
    ],
    answerId: "b",
    explanation: "Spontaneous combustion begins on its own when a substance slowly reaches its ignition temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q06",
    prompt: "A firecracker bursting with a loud bang is an example of \u2014",
    options: [
      { id: "a", text: "Spontaneous combustion" },
      { id: "b", text: "An explosion" },
      { id: "c", text: "Slow rusting" },
      { id: "d", text: "Photosynthesis" }
    ],
    answerId: "b",
    explanation: "An explosion is a sudden combustion that releases a large amount of gas and heat with sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q07",
    prompt: "The three essential conditions for a fire are fuel, heat, and \u2014",
    options: [
      { id: "a", text: "Nitrogen" },
      { id: "b", text: "Oxygen (air)" },
      { id: "c", text: "Carbon dioxide" },
      { id: "d", text: "Argon" }
    ],
    answerId: "b",
    explanation: "Fire needs fuel, oxygen from air, and enough heat. Removing any one puts the fire out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q08",
    prompt: "Why should you never pour water on a burning oil pan?",
    options: [
      { id: "a", text: "Water raises the ignition temperature of oil" },
      { id: "b", text: "Water sinks under oil and the oil can splash and spread the fire" },
      { id: "c", text: "Water turns oil into LPG" },
      { id: "d", text: "Water increases the calorific value of oil" }
    ],
    answerId: "b",
    explanation: "Oil floats on water. Water can vaporise under the oil and throw burning oil around, spreading the fire.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q09",
    prompt: "Carbon dioxide fire extinguishers put out fire mainly by \u2014",
    options: [
      { id: "a", text: "Raising the fuel's ignition temperature" },
      { id: "b", text: "Cutting off the supply of air (oxygen)" },
      { id: "c", text: "Adding more fuel" },
      { id: "d", text: "Increasing the flame temperature" }
    ],
    answerId: "b",
    explanation: "CO2 is denser than air and forms a blanket that cuts off oxygen from the fuel.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q10",
    prompt: "In a candle flame, the outermost blue zone is \u2014",
    options: [
      { id: "a", text: "The coolest zone" },
      { id: "b", text: "The hottest zone with complete combustion" },
      { id: "c", text: "Made only of unburnt wax" },
      { id: "d", text: "Where no oxygen reaches" }
    ],
    answerId: "b",
    explanation: "The outermost non-luminous zone has plenty of air, so combustion is complete and the temperature is highest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q11",
    prompt: "The yellow luminous zone of a candle flame gives light mainly because of \u2014",
    options: [
      { id: "a", text: "Glowing unburnt carbon particles" },
      { id: "b", text: "Completely burnt water vapour only" },
      { id: "c", text: "Cold air from the room" },
      { id: "d", text: "Nitrogen gas" }
    ],
    answerId: "a",
    explanation: "Incomplete burning in the middle zone produces hot carbon particles that glow and give yellow light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q12",
    prompt: "The innermost dark zone of a candle flame contains mainly \u2014",
    options: [
      { id: "a", text: "Completely burnt ash" },
      { id: "b", text: "Unburnt wax vapour" },
      { id: "c", text: "Liquid water" },
      { id: "d", text: "Solid wax only" }
    ],
    answerId: "b",
    explanation: "Wax vapour rises into the innermost zone before it mixes well with air, so little burning happens there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q13",
    prompt: "Calorific value of a fuel is the heat produced when \u2014",
    options: [
      { id: "a", text: "One gram of fuel melts" },
      { id: "b", text: "One kilogram of fuel burns completely" },
      { id: "c", text: "One litre of water freezes" },
      { id: "d", text: "One mole of oxygen is cooled" }
    ],
    answerId: "b",
    explanation: "Calorific value is heat from complete burning of 1 kg of fuel, usually in kJ/kg.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q14",
    prompt: "Which unit is commonly used for calorific value?",
    options: [
      { id: "a", text: "newton" },
      { id: "b", text: "pascal" },
      { id: "c", text: "kilojoule per kilogram (kJ/kg)" },
      { id: "d", text: "metre per second" }
    ],
    answerId: "c",
    explanation: "Calorific value is heat energy per unit mass, so kJ/kg is the usual unit in school science.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q15",
    prompt: "Which of these is generally considered a cleaner fuel for city buses?",
    options: [
      { id: "a", text: "Raw coal only" },
      { id: "b", text: "Wet wood" },
      { id: "c", text: "CNG" },
      { id: "d", text: "Damp cow-dung cakes" }
    ],
    answerId: "c",
    explanation: "Compressed natural gas (CNG) burns more cleanly with less smoke than coal or wood.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q16",
    prompt: "Burning coal that contains sulphur can produce sulphur dioxide, which may lead to \u2014",
    options: [
      { id: "a", text: "Acid rain" },
      { id: "b", text: "An increase in soil nitrogen only" },
      { id: "c", text: "Colder winters only" },
      { id: "d", text: "More oxygen in air" }
    ],
    answerId: "a",
    explanation: "Sulphur dioxide dissolves in rainwater and forms acids, contributing to acid rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q17",
    prompt: "Which gas released by burning fossil fuels is most linked to global warming?",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Nitrogen" },
      { id: "c", text: "Carbon dioxide" },
      { id: "d", text: "Argon" }
    ],
    answerId: "c",
    explanation: "Extra carbon dioxide traps heat in the atmosphere and contributes to global warming.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q18",
    prompt: "A good domestic fuel should \u2014",
    options: [
      { id: "a", text: "Have a very low calorific value and produce thick smoke" },
      { id: "b", text: "Be hard to light and leave a lot of ash" },
      { id: "c", text: "Have a high calorific value and burn with little smoke" },
      { id: "d", text: "Be stored as an open powder near a flame" }
    ],
    answerId: "c",
    explanation: "Useful fuels give plenty of heat, light easily in a controlled way, and produce little harmful smoke.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q19",
    prompt: "White phosphorus catches fire in air at room temperature because \u2014",
    options: [
      { id: "a", text: "Its ignition temperature is below room temperature" },
      { id: "b", text: "It is non-combustible" },
      { id: "c", text: "It needs no oxygen" },
      { id: "d", text: "It is colder than ice" }
    ],
    answerId: "a",
    explanation: "If the ignition temperature is lower than the surroundings, the substance can catch fire easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q20",
    prompt: "Forest fires can start when dry leaves catch fire from the heat of the Sun because dry leaves have \u2014",
    options: [
      { id: "a", text: "A very high ignition temperature" },
      { id: "b", text: "A low ignition temperature" },
      { id: "c", text: "No carbon" },
      { id: "d", text: "Only nitrogen" }
    ],
    answerId: "b",
    explanation: "Dry leaves ignite at a relatively low temperature, so strong heating can start a fire.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q21",
    prompt: "The fuel used in many homes for cooking, stored in cylinders, is \u2014",
    options: [
      { id: "a", text: "LPG" },
      { id: "b", text: "Solid iron" },
      { id: "c", text: "Glass wool" },
      { id: "d", text: "Pure nitrogen" }
    ],
    answerId: "a",
    explanation: "Liquefied petroleum gas (LPG) is a common cooking fuel stored under pressure in cylinders.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q22",
    prompt: "Incomplete combustion of a carbon fuel often produces \u2014",
    options: [
      { id: "a", text: "Only pure oxygen" },
      { id: "b", text: "Carbon monoxide, which is poisonous" },
      { id: "c", text: "More nitrogen for breathing" },
      { id: "d", text: "Only harmless steam" }
    ],
    answerId: "b",
    explanation: "When there is not enough air, carbon burns to carbon monoxide, a dangerous gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q23",
    prompt: "Water puts out a wood fire mainly by \u2014",
    options: [
      { id: "a", text: "Adding more oxygen" },
      { id: "b", text: "Cooling the fuel below its ignition temperature and limiting air contact" },
      { id: "c", text: "Turning wood into coal" },
      { id: "d", text: "Raising the flame temperature" }
    ],
    answerId: "b",
    explanation: "Water cools the burning material and the steam formed can also help keep air away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q24",
    prompt: "Which statement about combustion is correct?",
    options: [
      { id: "a", text: "Combustion never needs oxygen" },
      { id: "b", text: "Combustion always happens below freezing point" },
      { id: "c", text: "Combustion is a chemical process that needs a combustible substance and usually oxygen" },
      { id: "d", text: "Only metals can burn" }
    ],
    answerId: "c",
    explanation: "Combustion is the burning of a fuel, usually in oxygen, that releases heat and often light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-combustion-b-q01",
    prompt: "Which pair correctly matches a substance with whether it is combustible?",
    options: [
      { id: "a", text: "Stone \u2014 combustible; coal \u2014 non-combustible" },
      { id: "b", text: "Iron nail \u2014 combustible; paper \u2014 non-combustible" },
      { id: "c", text: "Kerosene \u2014 combustible; glass \u2014 non-combustible" },
      { id: "d", text: "Water \u2014 combustible; wood \u2014 non-combustible" }
    ],
    answerId: "c",
    explanation: "Kerosene burns; glass does not. Stone, iron, and water are not fuels in ordinary air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q02",
    prompt: "A matchstick tip has chemicals with a low ignition temperature so that \u2014",
    options: [
      { id: "a", text: "The stick never burns" },
      { id: "b", text: "Friction heat can light the tip easily" },
      { id: "c", text: "The tip becomes an insulator" },
      { id: "d", text: "Oxygen is removed from air" }
    ],
    answerId: "b",
    explanation: "The tip chemicals ignite with the small heat from rubbing, then light the wood of the stick.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q03",
    prompt: "Spontaneous combustion differs from rapid combustion because it \u2014",
    options: [
      { id: "a", text: "Always needs a match flame at the start" },
      { id: "b", text: "Can start without an external flame when heat builds up slowly" },
      { id: "c", text: "Never produces heat" },
      { id: "d", text: "Happens only under water" }
    ],
    answerId: "b",
    explanation: "In spontaneous combustion, slow heating reaches the ignition temperature without a separate flame.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q04",
    prompt: "During an explosion, a large volume of gas forms suddenly. This mainly causes \u2014",
    options: [
      { id: "a", text: "A quiet cooling effect" },
      { id: "b", text: "A sudden increase in pressure and a loud sound" },
      { id: "c", text: "The fuel to freeze" },
      { id: "d", text: "Air to turn into liquid oxygen" }
    ],
    answerId: "b",
    explanation: "Rapid gas production raises pressure violently, which we hear and feel as an explosion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q05",
    prompt: "Cutting off air from a small fire with a wet blanket works because \u2014",
    options: [
      { id: "a", text: "The blanket increases oxygen" },
      { id: "b", text: "Oxygen needed for burning is blocked" },
      { id: "c", text: "The fuel's calorific value rises" },
      { id: "d", text: "Ignition temperature becomes zero" }
    ],
    answerId: "b",
    explanation: "Without oxygen, the fire triangle is broken and burning stops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q06",
    prompt: "For an electrical fire in a socket, the safer first action is usually to \u2014",
    options: [
      { id: "a", text: "Spray plenty of water on the wires" },
      { id: "b", text: "Switch off the power if safe, and use a CO2 or dry-powder extinguisher \u2014 not water" },
      { id: "c", text: "Pour kerosene to dilute the fire" },
      { id: "d", text: "Blow with a fan to add more air" }
    ],
    answerId: "b",
    explanation: "Water conducts electricity and can cause shock. Cut power and use a suitable extinguisher.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q07",
    prompt: "A thin copper wire held across a candle flame gets hottest in the \u2014",
    options: [
      { id: "a", text: "Innermost dark zone" },
      { id: "b", text: "Middle yellow zone only at the wick" },
      { id: "c", text: "Outermost blue zone" },
      { id: "d", text: "Cold air far below the candle" }
    ],
    answerId: "c",
    explanation: "The outer non-luminous zone has complete combustion and the highest temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q08",
    prompt: "Goldsmiths often use the outermost zone of a flame when heating gold because \u2014",
    options: [
      { id: "a", text: "It is the coolest and darkest" },
      { id: "b", text: "It gives the highest temperature for melting and working the metal" },
      { id: "c", text: "It contains only unburnt wax" },
      { id: "d", text: "It has no oxygen" }
    ],
    answerId: "b",
    explanation: "The outer zone burns completely and is hottest, which helps melt or work metals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q09",
    prompt: "Which fuel usually has a higher calorific value than wood?",
    options: [
      { id: "a", text: "Wet leaves" },
      { id: "b", text: "Damp cow dung" },
      { id: "c", text: "LPG" },
      { id: "d", text: "Green twigs" }
    ],
    answerId: "c",
    explanation: "LPG releases much more heat per kilogram than wood or wet biomass fuels.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q10",
    prompt: "Acid rain is linked to oxides of sulphur and nitrogen mainly because they \u2014",
    options: [
      { id: "a", text: "Make rain alkaline like soap" },
      { id: "b", text: "Dissolve in rainwater to form acids" },
      { id: "c", text: "Turn rain into pure oxygen" },
      { id: "d", text: "Freeze all clouds instantly" }
    ],
    answerId: "b",
    explanation: "These oxides react with water in the air to form acids that fall as acid rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q11",
    prompt: "Choosing CNG over petrol for many vehicles helps the environment mainly by \u2014",
    options: [
      { id: "a", text: "Producing more thick black smoke" },
      { id: "b", text: "Reducing harmful exhaust gases compared with petrol or diesel" },
      { id: "c", text: "Removing all oxygen from cities" },
      { id: "d", text: "Increasing sulphur in the air" }
    ],
    answerId: "b",
    explanation: "CNG burns more cleanly, so vehicles release fewer pollutants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q12",
    prompt: "A substance with a very high ignition temperature is \u2014",
    options: [
      { id: "a", text: "Easier to set on fire with a small spark" },
      { id: "b", text: "Harder to set on fire under normal conditions" },
      { id: "c", text: "Always explosive" },
      { id: "d", text: "Always a liquid" }
    ],
    answerId: "b",
    explanation: "High ignition temperature means you must heat it a lot before it catches fire.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q13",
    prompt: "Inflammable substances such as petrol and alcohol \u2014",
    options: [
      { id: "a", text: "Have high ignition temperatures and never burn" },
      { id: "b", text: "Have low ignition temperatures and catch fire easily" },
      { id: "c", text: "Cannot be fuels" },
      { id: "d", text: "Burn only in pure nitrogen" }
    ],
    answerId: "b",
    explanation: "Inflammable liquids ignite easily because their ignition temperatures are low.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q14",
    prompt: "The middle zone of a candle flame is luminous mainly due to \u2014",
    options: [
      { id: "a", text: "Complete combustion of all carbon" },
      { id: "b", text: "Partial combustion leaving hot carbon particles" },
      { id: "c", text: "Ice crystals in the flame" },
      { id: "d", text: "Only ultraviolet light" }
    ],
    answerId: "b",
    explanation: "Limited air in the middle zone leaves glowing carbon particles that emit yellow light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q15",
    prompt: "Which product of incomplete combustion is especially dangerous in closed rooms?",
    options: [
      { id: "a", text: "Water vapour only" },
      { id: "b", text: "Carbon monoxide" },
      { id: "c", text: "Argon" },
      { id: "d", text: "Pure nitrogen" }
    ],
    answerId: "b",
    explanation: "Carbon monoxide binds strongly in blood and can be fatal in poorly ventilated spaces.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q16",
    prompt: "The fire triangle collapses if you remove \u2014",
    options: [
      { id: "a", text: "Only the colour of the flame" },
      { id: "b", text: "Any one of fuel, oxygen, or heat" },
      { id: "c", text: "Only the sound of burning" },
      { id: "d", text: "Gravity" }
    ],
    answerId: "b",
    explanation: "All three conditions are needed. Take away fuel, air, or heat and burning stops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q17",
    prompt: "Calorific value helps us compare fuels because it tells \u2014",
    options: [
      { id: "a", text: "How heavy the fuel cylinder is" },
      { id: "b", text: "How much heat one kilogram of fuel can give when burnt completely" },
      { id: "c", text: "The colour of the flame only" },
      { id: "d", text: "The melting point of glass" }
    ],
    answerId: "b",
    explanation: "Fuels with higher calorific value give more heat per kilogram.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q18",
    prompt: "Burning plastics and some synthetic materials can be especially harmful because they may release \u2014",
    options: [
      { id: "a", text: "Only oxygen" },
      { id: "b", text: "Toxic gases and smoke" },
      { id: "c", text: "Pure drinking water" },
      { id: "d", text: "Extra nitrogen for plants only" }
    ],
    answerId: "b",
    explanation: "Many plastics produce poisonous gases and thick smoke when they burn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q19",
    prompt: "A candle flame goes out when covered with a glass because \u2014",
    options: [
      { id: "a", text: "The wax becomes non-combustible instantly" },
      { id: "b", text: "Oxygen inside is used up and not replaced" },
      { id: "c", text: "The ignition temperature rises to infinity" },
      { id: "d", text: "Glass adds nitrogen fuel" }
    ],
    answerId: "b",
    explanation: "The flame uses the trapped oxygen; when oxygen is gone, combustion stops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q20",
    prompt: "Which is the best description of a fuel?",
    options: [
      { id: "a", text: "Any substance that never reacts with oxygen" },
      { id: "b", text: "A combustible substance that is burnt to obtain heat (and often light)" },
      { id: "c", text: "Only solid metals" },
      { id: "d", text: "Only water and sand" }
    ],
    answerId: "b",
    explanation: "Fuels are materials we burn on purpose for useful heat or light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q21",
    prompt: "Unburnt carbon particles from smoky fuels can cause \u2014",
    options: [
      { id: "a", text: "Clearer lungs" },
      { id: "b", text: "Respiratory problems and blackening of buildings" },
      { id: "c", text: "More ozone at ground level that always heals lungs" },
      { id: "d", text: "Only a sweet smell" }
    ],
    answerId: "b",
    explanation: "Soot and smoke irritate the lungs and dirty walls and monuments.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q22",
    prompt: "Dry powder extinguishers are useful for oil fires because they \u2014",
    options: [
      { id: "a", text: "Add water under the oil" },
      { id: "b", text: "Cut off oxygen without spreading burning oil the way water can" },
      { id: "c", text: "Increase the oil's calorific value" },
      { id: "d", text: "Turn oil into LPG" }
    ],
    answerId: "b",
    explanation: "Powder blankets the burning oil and stops air reaching it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q23",
    prompt: "Why is the innermost zone of a flame least hot?",
    options: [
      { id: "a", text: "It has the most oxygen and complete burning" },
      { id: "b", text: "Fuel vapour there has not mixed well with air, so little combustion occurs" },
      { id: "c", text: "It is made of solid diamond" },
      { id: "d", text: "It is outside the flame entirely" }
    ],
    answerId: "b",
    explanation: "Without enough oxygen mixed in, burning is minimal and the zone stays cooler.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q24",
    prompt: "Global warming concerns from fossil fuels are mainly about \u2014",
    options: [
      { id: "a", text: "Extra carbon dioxide trapping heat" },
      { id: "b", text: "Extra argon making rain pink" },
      { id: "c", text: "Less nitrogen in fertilisers only" },
      { id: "d", text: "Colder ocean water from more oxygen" }
    ],
    answerId: "a",
    explanation: "CO2 from burning coal, oil, and gas adds to the greenhouse effect.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd25",
    title: "Combustion and flame",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "Combustion needs fuel, oxygen and heat. Flames have zones; fuels differ in calorific value.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Combustible", reveal: "Burns in air with heat and light", emoji: "\ud83d\udd25" },
      { label: "Ignition temp", reveal: "Lowest temperature to catch fire", emoji: "\ud83c\udf21\ufe0f" },
      { label: "Fire triangle", reveal: "Fuel, oxygen, heat", emoji: "\ud83d\udd3a" },
      { label: "Calorific value", reveal: "Heat from 1 kg fuel (kJ/kg)", emoji: "\ud83d\udccf" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Fire needs fuel, heat and\u2026",
    options: [
        { id: "a", text: "Nitrogen only" },
        { id: "b", text: "Oxygen (air)" },
        { id: "c", text: "Argon" },
        { id: "d", text: "Sand" }
    ],
    answerId: "b",
    why: "Oxygen from air completes the fire triangle.",
    visual: "magnet",
    speak: "Fire needs fuel, heat and\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know combustible fuels", "Fire triangle", "Flame zones", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceCombustion: ChapterDef = {
  id: "combustion-flame",
  title: "Combustion and Flame",
  emoji: "\ud83d\udd25",
  blurb: "Fuels, fire and flame zones",
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

export const g8ScienceCombustionQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
