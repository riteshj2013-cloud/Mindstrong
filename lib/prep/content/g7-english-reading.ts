import type { ChapterDef, PrepQuestion } from "../types";

/** Reading Smart - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-eng-reading-a-q01",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhat is the main setting of the passage?",
    options: [
      { id: "a", text: "A community garden behind a library" },
      { id: "b", text: "A rooftop caf\u00e9" },
      { id: "c", text: "A busy highway" },
      { id: "d", text: "A school classroom" }
    ],
    answerId: "a",
    explanation: "Ananya goes to the community garden behind the library.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q02",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhat does Mr. Fernandes mean by \u201cYou cannot hurry a root\u201d?",
    options: [
      { id: "a", text: "Growth takes time and cannot be rushed" },
      { id: "b", text: "Roots should be pulled quickly" },
      { id: "c", text: "Gardens need no water" },
      { id: "d", text: "Bicycles damage plants" }
    ],
    answerId: "a",
    explanation: "He is teaching patience \u2014 plants grow at their own pace.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q03",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhich detail best supports that Ananya cares about green spaces?",
    options: [
      { id: "a", text: "She leaves feeling the city still has green worth protecting" },
      { id: "b", text: "She drinks chai" },
      { id: "c", text: "Sparrows hop" },
      { id: "d", text: "It rained at night" }
    ],
    answerId: "a",
    explanation: "The closing feeling shows her value for urban green pockets.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q04",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nThe word \u201cneat\u201d in \u201cneat rows\u201d most nearly means\u2026",
    options: [
      { id: "a", text: "Orderly" },
      { id: "b", text: "Messy" },
      { id: "c", text: "Hidden" },
      { id: "d", text: "Expensive" }
    ],
    answerId: "a",
    explanation: "Neat rows are tidy and carefully arranged.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q05",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhy do Ananya and Mr. Fernandes share chai?",
    options: [
      { id: "a", text: "They take a break together after working" },
      { id: "b", text: "They are lost" },
      { id: "c", text: "The library closed" },
      { id: "d", text: "It begins to snow" }
    ],
    answerId: "a",
    explanation: "After planting and watering, they share chai as the sun climbs.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q06",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWhat is the central problem described?",
    options: [
      { id: "a", text: "Light aimed upward wastes energy and harms wildlife" },
      { id: "b", text: "Too many bridges" },
      { id: "c", text: "Lack of chai shops" },
      { id: "d", text: "Missing libraries" }
    ],
    answerId: "a",
    explanation: "The passage focuses on light pollution and its effects.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q07",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWhat simple fix do volunteers suggest?",
    options: [
      { id: "a", text: "Aim outdoor lamps at the pavement, not the sky" },
      { id: "b", text: "Turn off all electricity forever" },
      { id: "c", text: "Ban bicycles" },
      { id: "d", text: "Plant only spinach" }
    ],
    answerId: "a",
    explanation: "Shielding/tilting lamps toward the ground is the suggested change.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q08",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWhich result followed the changes?",
    options: [
      { id: "a", text: "Residents saw more stars from rooftops" },
      { id: "b", text: "Birds disappeared" },
      { id: "c", text: "Shops closed" },
      { id: "d", text: "Rain stopped" }
    ],
    answerId: "a",
    explanation: "Residents reported seeing more stars once lights were adjusted.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q09",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\n\u201cWashed out\u201d in this passage suggests the sky looked\u2026",
    options: [
      { id: "a", text: "Faded and pale because of excess light" },
      { id: "b", text: "Cleaned with soap" },
      { id: "c", text: "Covered in paint" },
      { id: "d", text: "Full of storms" }
    ],
    answerId: "a",
    explanation: "Bright city light made the night sky look faded.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q10",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nThe author\u2019s tone is best described as\u2026",
    options: [
      { id: "a", text: "Hopeful and practical" },
      { id: "b", text: "Angry and hopeless" },
      { id: "c", text: "Comic only" },
      { id: "d", text: "Indifferent" }
    ],
    answerId: "a",
    explanation: "The piece notes a problem but highlights simple, workable fixes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q11",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhy do fishermen prefer the ferry?",
    options: [
      { id: "a", text: "It leaves them closer to their nets" },
      { id: "b", text: "It is made of gold" },
      { id: "c", text: "It is faster than the bridge" },
      { id: "d", text: "It has no captain" }
    ],
    answerId: "a",
    explanation: "The passage states the ferry leaves them closer to their nets.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q12",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhy do school children prefer the bridge?",
    options: [
      { id: "a", text: "It is faster" },
      { id: "b", text: "It tells stories" },
      { id: "c", text: "It polishes railings" },
      { id: "d", text: "It catches fish" }
    ],
    answerId: "a",
    explanation: "Children prefer the bridge because it is faster.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q13",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nCaptain Leela\u2019s attitude toward the two groups is\u2026",
    options: [
      { id: "a", text: "Calm and accepting" },
      { id: "b", text: "Angry at fishermen" },
      { id: "c", text: "Dismissive of children" },
      { id: "d", text: "Confused" }
    ],
    answerId: "a",
    explanation: "She never argues; she keeps the timetable and tells stories.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q14",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\n\u201cA ferry is a conversation with water\u201d is an example of\u2026",
    options: [
      { id: "a", text: "Metaphor" },
      { id: "b", text: "Literal measurement" },
      { id: "c", text: "A timetable" },
      { id: "d", text: "A weather report" }
    ],
    answerId: "a",
    explanation: "A ferry is not literally a conversation; the image is figurative.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q15",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhat does the contrast between bridge and ferry mainly highlight?",
    options: [
      { id: "a", text: "Speed versus a slower, relational journey" },
      { id: "b", text: "That bridges are useless" },
      { id: "c", text: "That ferries are unsafe" },
      { id: "d", text: "That children dislike water" }
    ],
    answerId: "a",
    explanation: "Bridge = line/speed; ferry = conversation \u2014 different relationships to travel.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q16",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhich inference is best supported?",
    options: [
      { id: "a", text: "Ananya values both work and quiet appreciation of nature" },
      { id: "b", text: "Ananya hates cities" },
      { id: "c", text: "Mr. Fernandes dislikes plants" },
      { id: "d", text: "The library banned gardens" }
    ],
    answerId: "a",
    explanation: "She works carefully and leaves with a quiet protective feeling.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q17",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWho is mapping the brightest blocks?",
    options: [
      { id: "a", text: "Volunteers" },
      { id: "b", text: "Migrating birds" },
      { id: "c", text: "Only astronomers abroad" },
      { id: "d", text: "Ferry captains" }
    ],
    answerId: "a",
    explanation: "Volunteers map bright blocks and ask shops to adjust lamps.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q18",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhat does Captain Leela keep doing regardless of preferences?",
    options: [
      { id: "a", text: "Keeping the timetable and caring for the ferry" },
      { id: "b", text: "Building a new bridge" },
      { id: "c", text: "Closing the river" },
      { id: "d", text: "Arguing daily" }
    ],
    answerId: "a",
    explanation: "She keeps the timetable, polishes railings, and tells stories.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q19",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nThe sparrows mainly add\u2026",
    options: [
      { id: "a", text: "A lively natural detail to the scene" },
      { id: "b", text: "A warning about danger" },
      { id: "c", text: "A reason to leave" },
      { id: "d", text: "A maths problem" }
    ],
    answerId: "a",
    explanation: "Sparrows hopping among bean poles enrich the garden atmosphere.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q20",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWhich cause\u2013effect pair is accurate?",
    options: [
      { id: "a", text: "Shielded lamps \u2192 more visible stars" },
      { id: "b", text: "More stars \u2192 more light pollution" },
      { id: "c", text: "Birds confuse lamps \u2192 more chai" },
      { id: "d", text: "Mapping blocks \u2192 fewer bridges" }
    ],
    answerId: "a",
    explanation: "Adjusting lamps reduces upward glare so stars become visible again.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q21",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nThe new bridge stands\u2026",
    options: [
      { id: "a", text: "Nearby, as an alternative crossing" },
      { id: "b", text: "On the ferry deck" },
      { id: "c", text: "Inside the library" },
      { id: "d", text: "Under the garden" }
    ],
    answerId: "a",
    explanation: "A new bridge stood nearby while the ferry still crossed at dawn.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q22",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhat did Ananya plant?",
    options: [
      { id: "a", text: "Tomato seedlings" },
      { id: "b", text: "Only spinach" },
      { id: "c", text: "Bean poles made of steel" },
      { id: "d", text: "Sparrows" }
    ],
    answerId: "a",
    explanation: "She planted tomato seedlings in neat rows.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q23",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nThe phrase \u201creopen a window to the night\u201d suggests\u2026",
    options: [
      { id: "a", text: "Restoring access to a dark, starry sky" },
      { id: "b", text: "Building glass windows" },
      { id: "c", text: "Closing shops" },
      { id: "d", text: "Stopping rain" }
    ],
    answerId: "a",
    explanation: "It figuratively means people can see the night sky again.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-a-q24",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhich theme fits best?",
    options: [
      { id: "a", text: "Different journeys can serve different needs" },
      { id: "b", text: "Speed is the only value" },
      { id: "c", text: "Stories are useless" },
      { id: "d", text: "Bridges erase rivers" }
    ],
    answerId: "a",
    explanation: "Fishermen and children choose differently; both needs coexist.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-eng-reading-b-q01",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhich word best describes the mood at the end?",
    options: [
      { id: "a", text: "Quietly hopeful" },
      { id: "b", text: "Terrified" },
      { id: "c", text: "Furious" },
      { id: "d", text: "Bored" }
    ],
    answerId: "a",
    explanation: "Muddy shoes and a quiet protective feeling create a calm, hopeful mood.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q02",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nMr. Fernandes\u2019s role in the garden is mainly to\u2026",
    options: [
      { id: "a", text: "Water the spinach and share wisdom" },
      { id: "b", text: "Sell bicycles" },
      { id: "c", text: "Close the library" },
      { id: "d", text: "Chase sparrows" }
    ],
    answerId: "a",
    explanation: "He waters spinach and remarks on patience.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q03",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhat makes the soil \u201cdark and soft\u201d?",
    options: [
      { id: "a", text: "The night\u2019s rain" },
      { id: "b", text: "Chai spills" },
      { id: "c", text: "Steel flasks" },
      { id: "d", text: "Bean poles" }
    ],
    answerId: "a",
    explanation: "The soil was dark and soft after the night\u2019s rain.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q04",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nLight pollution wastes electricity when lamps\u2026",
    options: [
      { id: "a", text: "Shine upward uselessly" },
      { id: "b", text: "Are shielded toward the ground" },
      { id: "c", text: "Are turned off" },
      { id: "d", text: "Use timers correctly" }
    ],
    answerId: "a",
    explanation: "Upward-shining streetlights waste electricity.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q05",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nMigrating birds are harmed because they\u2026",
    options: [
      { id: "a", text: "Become confused by upward light" },
      { id: "b", text: "Prefer chai" },
      { id: "c", text: "Avoid all cities forever by law" },
      { id: "d", text: "Eat steel" }
    ],
    answerId: "a",
    explanation: "Upward light confuses birds that navigate by night cues.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q06",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nThe passage suggests change is possible because\u2026",
    options: [
      { id: "a", text: "Fixes are often simple and local" },
      { id: "b", text: "Stars cannot return" },
      { id: "c", text: "Only new laws abroad work" },
      { id: "d", text: "Mapping is impossible" }
    ],
    answerId: "a",
    explanation: "Simple lamp adjustments multiplied across a neighbourhood help.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q07",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\n\u201cA bridge is a line\u201d most nearly suggests the bridge is\u2026",
    options: [
      { id: "a", text: "A direct, efficient path" },
      { id: "b", text: "A talking captain" },
      { id: "c", text: "A fishing net" },
      { id: "d", text: "A muddy garden" }
    ],
    answerId: "a",
    explanation: "Compared with the ferry\u2019s \u201cconversation,\u201d a line implies straight efficiency.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q08",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhen does the ferry cross?",
    options: [
      { id: "a", text: "At dawn" },
      { id: "b", text: "Only at midnight" },
      { id: "c", text: "Never" },
      { id: "d", text: "After the library closes" }
    ],
    answerId: "a",
    explanation: "The old ferry still crossed the river at dawn.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q09",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhich detail shows Captain Leela\u2019s care for the boat?",
    options: [
      { id: "a", text: "She polished the railings" },
      { id: "b", text: "She closed the bridge" },
      { id: "c", text: "She banned children" },
      { id: "d", text: "She removed the timetable" }
    ],
    answerId: "a",
    explanation: "Polishing railings shows steady care.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q10",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nAnanya arrives by\u2026",
    options: [
      { id: "a", text: "Bicycle" },
      { id: "b", text: "Ferry" },
      { id: "c", text: "Bridge only" },
      { id: "d", text: "Submarine" }
    ],
    answerId: "a",
    explanation: "She wheeled her bicycle to the garden.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q11",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWhich audience is the passage most trying to persuade?",
    options: [
      { id: "a", text: "City residents and shop owners who can adjust lights" },
      { id: "b", text: "Only deep-sea divers" },
      { id: "c", text: "People without electricity" },
      { id: "d", text: "Ferry passengers only" }
    ],
    answerId: "a",
    explanation: "It asks shops to tilt lamps and notes neighbourhood habits.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q12",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nWhich statement is an opinion expressed in the passage?",
    options: [
      { id: "a", text: "Plants teach patience" },
      { id: "b", text: "Ananya planted tomatoes" },
      { id: "c", text: "It rained at night" },
      { id: "d", text: "They shared chai" }
    ],
    answerId: "a",
    explanation: "\u201cPlants teach patience\u201d is a spoken judgment, not a measurable fact.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q13",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\n\u201cMultiplied across a neighbourhood\u201d means\u2026",
    options: [
      { id: "a", text: "Many people repeating small good habits" },
      { id: "b", text: "Doing maths homework" },
      { id: "c", text: "Building more towers" },
      { id: "d", text: "Turning lights brighter" }
    ],
    answerId: "a",
    explanation: "Many small actions together create a large effect.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q14",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhat remains true despite the new bridge?",
    options: [
      { id: "a", text: "The ferry still runs at dawn" },
      { id: "b", text: "Fishermen hate nets" },
      { id: "c", text: "Children fear bridges" },
      { id: "d", text: "The river disappeared" }
    ],
    answerId: "a",
    explanation: "Though a bridge stood nearby, the ferry still crossed at dawn.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q15",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nThe steel flask mainly shows\u2026",
    options: [
      { id: "a", text: "A realistic detail of their shared break" },
      { id: "b", text: "That metal grows tomatoes" },
      { id: "c", text: "A safety warning" },
      { id: "d", text: "A bus ticket" }
    ],
    answerId: "a",
    explanation: "They share chai from a steel flask \u2014 a concrete scene detail.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q16",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWhich title best fits the passage?",
    options: [
      { id: "a", text: "Reclaiming the Night Sky" },
      { id: "b", text: "How to Build a Bridge" },
      { id: "c", text: "Tomato Tips" },
      { id: "d", text: "Ferry Timetables" }
    ],
    answerId: "a",
    explanation: "The focus is reducing light pollution to see stars again.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q17",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nThe captain\u2019s stories are about\u2026",
    options: [
      { id: "a", text: "The river\u2019s moods" },
      { id: "b", text: "Library rules" },
      { id: "c", text: "Tomato prices" },
      { id: "d", text: "Star maps only" }
    ],
    answerId: "a",
    explanation: "She told stories about the river\u2019s moods.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q18",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nSequence: which happens last?",
    options: [
      { id: "a", text: "Ananya leaves with muddy shoes" },
      { id: "b", text: "Night rain" },
      { id: "c", text: "Planting seedlings" },
      { id: "d", text: "Sharing chai" }
    ],
    answerId: "a",
    explanation: "Leaving with muddy shoes closes the scene.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q19",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nWhich evidence shows the problem can reverse quickly?",
    options: [
      { id: "a", text: "Residents saw more stars within weeks" },
      { id: "b", text: "Birds never migrate" },
      { id: "c", text: "Lamps cannot tilt" },
      { id: "d", text: "Mapping takes centuries" }
    ],
    answerId: "a",
    explanation: "Within weeks, more stars were visible after adjustments.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q20",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nThe author\u2019s purpose is mainly to\u2026",
    options: [
      { id: "a", text: "Show how different crossings serve different human needs" },
      { id: "b", text: "Teach multiplication" },
      { id: "c", text: "Ban ferries" },
      { id: "d", text: "Sell bridges" }
    ],
    answerId: "a",
    explanation: "The piece contrasts bridge and ferry without declaring one worthless.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q21",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\n\u201cPockets of green\u201d refers to\u2026",
    options: [
      { id: "a", text: "Small remaining natural spaces in the city" },
      { id: "b", text: "Money in a wallet" },
      { id: "c", text: "Paint colours only" },
      { id: "d", text: "Library books" }
    ],
    answerId: "a",
    explanation: "It means remaining green spaces worth protecting.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q22",
    prompt: "Light pollution is not only an astronomer\u2019s problem. Streetlights that shine upward waste electricity and confuse migrating birds. In several Indian cities, volunteers have begun mapping the brightest blocks and asking shops to tilt or shield outdoor lamps. The change is often simple: aim light at the pavement, not the sky. Within weeks, residents reported seeing more stars from rooftops that once looked washed out. Small habits, multiplied across a neighbourhood, can reopen a window to the night.\n\nAsking shops to shield lamps is an example of\u2026",
    options: [
      { id: "a", text: "Community action" },
      { id: "b", text: "Ignoring the problem" },
      { id: "c", text: "Increasing glare" },
      { id: "d", text: "Closing the night sky" }
    ],
    answerId: "a",
    explanation: "Volunteers engage local shops \u2014 grassroots action.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q23",
    prompt: "The old ferry still crossed the river at dawn, though a new bridge stood nearby. Fishermen preferred the ferry because it left them closer to their nets. School children preferred the bridge because it was faster. Captain Leela never argued with either group. She simply kept the timetable, polished the railings, and told stories about the river\u2019s moods. \u201cA bridge is a line,\u201d she liked to say. \u201cA ferry is a conversation with water.\u201d\n\nWhich contrast is central?",
    options: [
      { id: "a", text: "Ferry vs bridge" },
      { id: "b", text: "Tomato vs spinach" },
      { id: "c", text: "Stars vs sparrows" },
      { id: "d", text: "Rain vs chai" }
    ],
    answerId: "a",
    explanation: "The passage turns on two ways of crossing the river.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-reading-b-q24",
    prompt: "Every Saturday morning, Ananya wheeled her bicycle to the community garden behind the library. The soil there was dark and soft after the night\u2019s rain. She planted tomato seedlings in neat rows while her neighbour, Mr. Fernandes, watered the spinach beds. \u201cPlants teach patience,\u201d he said. \u201cYou cannot hurry a root.\u201d When the sun climbed higher, they shared chai from a steel flask and watched sparrows hop between the bean poles. Ananya left with muddy shoes and a quiet feeling that the city still had pockets of green worth protecting.\n\nBest summary?",
    options: [
      { id: "a", text: "Ananya and a neighbour tend a city garden and value patient green spaces" },
      { id: "b", text: "Ananya builds a bridge" },
      { id: "c", text: "Volunteers map streetlights" },
      { id: "d", text: "A captain polishes railings" }
    ],
    answerId: "a",
    explanation: "Summary must cover garden work and the protective feeling.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd0e",
    title: "Reading Smart",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Answers hide in the passage. Hunt evidence before you choose.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Main idea", reveal: "What the whole text is about", emoji: "\ud83c\udfaf" },
      { label: "Evidence", reveal: "Quote or detail that supports an answer", emoji: "\ud83d\udcce" },
      { label: "Inference", reveal: "A conclusion the text supports", emoji: "\ud83e\udde0" },
      { label: "Tone", reveal: "The writer's attitude", emoji: "\ud83c\udfad" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Best first step for a reading question?",
    options: [
        { id: "a", text: "Read the question, then scan for evidence" },
        { id: "b", text: "Guess without reading" },
        { id: "c", text: "Skip the passage" },
        { id: "d", text: "Pick the longest option" }
    ],
    answerId: "a",
    why: "Question first, then evidence from the text.",
    visual: "sentence",
    speak: "Best first step for a reading question?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Question \u2192 scan \u2192 evidence", "Don't invent extras", "Watch tone and theme", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7EnglishReading: ChapterDef = {
  id: "reading-smart",
  title: "Reading Smart",
  emoji: "\ud83d\udd0e",
  blurb: "Evidence, inference and main idea",
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

export const g7EnglishReadingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
