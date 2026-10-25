import type { ChapterDef, PrepQuestion } from "../types";

/** Combustion and Flame - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-combustion-a-q01",
    prompt: "A substance that burns in air to produce heat and light is called a \u2014",
    options: [
      { id: "a", text: "Combustible substance" },
      { id: "b", text: "Non-combustible substance" },
      { id: "c", text: "Coolant" },
      { id: "d", text: "Insulator" }
    ],
    answerId: "a",
    explanation: "Combustible substances catch fire and burn in air, giving heat and light. Non-combustible substances do not burn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q02",
    prompt: "Which of these is a non-combustible substance?",
    options: [
      { id: "a", text: "Wood" },
      { id: "b", text: "Glass" },
      { id: "c", text: "Paper" },
      { id: "d", text: "Kerosene" }
    ],
    answerId: "b",
    explanation: "Glass does not burn in air. Wood, paper, and kerosene are fuels that can burn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q03",
    prompt: "The graph shows the temperature of a piece of paper as it is heated slowly. What is the temperature at point X called?",
    options: [
      { id: "a", text: "Boiling point" },
      { id: "b", text: "Melting point" },
      { id: "c", text: "Ignition temperature" },
      { id: "d", text: "Freezing point" }
    ],
    answerId: "c",
    explanation: "At X, about 230 \u00b0C, the paper first bursts into flame. The lowest temperature at which a substance catches fire is its ignition temperature. It is not a boiling point: the paper does not turn into a vapour at X, it starts to burn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A graph of temperature in degrees Celsius against time while paper is heated. The line rises steadily. At point X, near 230 degrees, a small flame symbol shows the paper bursting into flame.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"190\" x2=\"293.0\" y2=\"190.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"300,190 293,193.8 293,186.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"190\" x2=\"50.0\" y2=\"37.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,30 53.9,37 46.1,37\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"46\" y1=\"144\" x2=\"50\" y2=\"144\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"148\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">100</text><line x1=\"46\" y1=\"98\" x2=\"50\" y2=\"98\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"102\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">200</text><line x1=\"46\" y1=\"52\" x2=\"50\" y2=\"52\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"56\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">300</text><text x=\"300\" y=\"220\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time</text><text x=\"44\" y=\"24\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">temperature (\u00b0C)</text><polyline points=\"50,178 120,145 180,106 210,85\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"210\" cy=\"85\" r=\"5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"85\" x2=\"210\" y2=\"85\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><text x=\"222\" y=\"106\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">X</text><path d=\"M222,72 C232,60 230,48 222,38 C222,50 212,52 214,64 C214,70 218,74 222,72 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><text x=\"212\" y=\"52\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">flames appear</text></svg>", "alt": "A graph of temperature in degrees Celsius against time while paper is heated. The line rises steadily. At point X, near 230 degrees, a small flame symbol shows the paper bursting into flame."}
  },
  {
    id: "g8-sci-combustion-a-q04",
    prompt: "LPG burns with a blue flame on a stove almost as soon as the burner is lit. This is an example of \u2014",
    options: [
      { id: "a", text: "Spontaneous combustion" },
      { id: "b", text: "Explosion only" },
      { id: "c", text: "Smouldering without oxygen" },
      { id: "d", text: "Rapid combustion" }
    ],
    answerId: "d",
    explanation: "Rapid combustion produces heat and light quickly. LPG and CNG show rapid combustion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q05",
    prompt: "A heap of oily rags is left in a warm cupboard and nobody lights it. The picture shows what happens over five days. What kind of burning happens on day 5?",
    options: [
      { id: "a", text: "Spontaneous combustion" },
      { id: "b", text: "Rapid combustion" },
      { id: "c", text: "Complete combustion only" },
      { id: "d", text: "An acid\u2013base reaction" }
    ],
    answerId: "a",
    explanation: "The rags slowly warmed up by themselves until they reached their ignition temperature and burst into flame without any match. This is spontaneous combustion. Rapid combustion is when something burns quickly after it is lit, like cooking gas lit with a match.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three pictures of a heap of oily rags in a cupboard with a thermometer. Day 1: 30 degrees Celsius. Day 3: 45 degrees Celsius. Day 5: the rags are on fire. No match is used.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"15\" y=\"40\" width=\"90\" height=\"130\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/><path d=\"M25,160 Q60,120 95,160 Z\" fill=\"#a3a3a3\" stroke=\"#525252\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><path d=\"M35,150 q15,-12 30,0\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"117\" y=\"40\" width=\"90\" height=\"130\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/><path d=\"M127,160 Q162,120 197,160 Z\" fill=\"#a3a3a3\" stroke=\"#525252\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><path d=\"M137,150 q15,-12 30,0\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"219\" y=\"40\" width=\"90\" height=\"130\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/><path d=\"M229,160 Q264,120 299,160 Z\" fill=\"#a3a3a3\" stroke=\"#525252\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><path d=\"M239,150 q15,-12 30,0\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"60\" y=\"80\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">30 \u00b0C</text><text x=\"162\" y=\"80\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#ea580c\">45 \u00b0C</text><path d=\"M264,140 C290,110 286,80 264,60 C268,90 240,96 246,124 C248,136 256,142 264,140 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M280,145 C294,128 290,110 280,98 C282,118 270,122 272,136 Z\" fill=\"#fde047\" stroke=\"#ea580c\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"60\" y=\"192\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">day 1</text><text x=\"162\" y=\"192\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">day 3</text><text x=\"264\" y=\"192\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">day 5</text><text x=\"160\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">no match used</text></svg>", "alt": "Three pictures of a heap of oily rags in a cupboard with a thermometer. Day 1: 30 degrees Celsius. Day 3: 45 degrees Celsius. Day 5: the rags are on fire. No match is used."}
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
    prompt: "The fire triangle shows the three things a fire needs. What should replace the question mark?",
    options: [
      { id: "a", text: "Nitrogen" },
      { id: "b", text: "Carbon dioxide" },
      { id: "c", text: "Oxygen (air)" },
      { id: "d", text: "Argon" }
    ],
    answerId: "c",
    explanation: "A fire needs fuel, heat and oxygen from the air; take away any one side of the triangle and the fire goes out. Carbon dioxide is wrong: it does not help things burn, which is why it is used to put fires out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A triangle with a flame in the middle. One side is labelled fuel, another side is labelled heat, and the third side has a question mark.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"160,25 285,190 35,190\" fill=\"#fff7ed\" stroke=\"#c2410c\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M160,95 C185,125 182,160 160,165 C138,160 135,125 160,95 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M160,125 C170,140 168,158 160,160 C152,158 150,140 160,125 Z\" fill=\"#fde047\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"72\" y=\"100\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\" transform=\"rotate(-53 72 100)\">fuel</text><text x=\"250\" y=\"100\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\" transform=\"rotate(53 250 100)\">heat</text><text x=\"160\" y=\"212\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#dc2626\">?</text></svg>", "alt": "A triangle with a flame in the middle. One side is labelled fuel, another side is labelled heat, and the third side has a question mark."}
  },
  {
    id: "g8-sci-combustion-a-q08",
    prompt: "Why should you never pour water on a burning oil pan?",
    options: [
      { id: "a", text: "Water raises the ignition temperature of oil" },
      { id: "b", text: "Water turns oil into LPG" },
      { id: "c", text: "Water increases the calorific value of oil" },
      { id: "d", text: "Water sinks under oil and the oil can splash and spread the fire" }
    ],
    answerId: "d",
    explanation: "Oil floats on water. Water can vaporise under the oil and throw burning oil around, spreading the fire.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q09",
    prompt: "The picture shows a carbon dioxide extinguisher being used on a burning tray of oil. How does the gas put the fire out?",
    options: [
      { id: "a", text: "By cutting off the supply of air (oxygen)" },
      { id: "b", text: "By raising the fuel's ignition temperature" },
      { id: "c", text: "By adding more fuel" },
      { id: "d", text: "By increasing the flame temperature" }
    ],
    answerId: "a",
    explanation: "Carbon dioxide is heavier than air, so it settles over the fire like a blanket and keeps oxygen away from the fuel; it also cools it. It does not raise the ignition temperature, which is a fixed property of the fuel.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A red extinguisher on the left sprays a white cloud of carbon dioxide. The heavy cloud spreads low and covers a burning tray of oil like a blanket.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"25\" y=\"90\" width=\"40\" height=\"110\" rx=\"10\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"2\"/><rect x=\"36\" y=\"72\" width=\"18\" height=\"20\" fill=\"#111827\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M54,78 Q90,60 110,92\" fill=\"none\" stroke=\"#111827\" stroke-width=\"5\" stroke-linejoin=\"round\"/><polygon points=\"108,86 122,98 106,100\" fill=\"#111827\" stroke=\"#111827\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M120,100 C150,80 190,95 220,110 C260,120 300,130 305,160 C280,175 160,178 130,160 C110,145 112,118 120,100 Z\" fill=\"#e5e7eb\" stroke=\"#9ca3af\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.9\"/><text x=\"200\" y=\"130\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">carbon dioxide</text><rect x=\"170\" y=\"170\" width=\"120\" height=\"16\" fill=\"#78716c\" stroke=\"#44403c\" stroke-width=\"1.5\"/><path d=\"M190,170 q-6,-10 0,-20 q6,10 0,20 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1\" stroke-linejoin=\"round\" opacity=\"0.6\"/><path d=\"M215,170 q-6,-10 0,-20 q6,10 0,20 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1\" stroke-linejoin=\"round\" opacity=\"0.6\"/><path d=\"M240,170 q-6,-10 0,-20 q6,10 0,20 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1\" stroke-linejoin=\"round\" opacity=\"0.6\"/><path d=\"M265,170 q-6,-10 0,-20 q6,10 0,20 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1\" stroke-linejoin=\"round\" opacity=\"0.6\"/><text x=\"230\" y=\"205\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">burning oil</text></svg>", "alt": "A red extinguisher on the left sprays a white cloud of carbon dioxide. The heavy cloud spreads low and covers a burning tray of oil like a blanket."}
  },
  {
    id: "g8-sci-combustion-a-q10",
    prompt: "The picture shows the three zones of a candle flame. Which statement about zone 3 is correct?",
    options: [
      { id: "a", text: "It is the coolest zone" },
      { id: "b", text: "It is the hottest zone, where combustion is complete" },
      { id: "c", text: "It is made only of unburnt wax vapour" },
      { id: "d", text: "No oxygen reaches it" }
    ],
    answerId: "b",
    explanation: "Zone 3 is the thin outer, non-luminous zone. It gets plenty of air, so the fuel burns completely and this is the hottest part of the flame. It is not the coolest zone: the dark innermost zone 1, around the wick, is the coolest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A candle flame with three zones: zone 1 is the dark innermost part around the wick, zone 2 is the bright yellow middle part, and zone 3 is the thin pale blue outer layer.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"126\" y=\"150\" width=\"28\" height=\"60\" fill=\"#fef3c7\" stroke=\"#a16207\" stroke-width=\"1.5\"/><line x1=\"140\" y1=\"150\" x2=\"140\" y2=\"140\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M140,30 C182,80 180,144 140,146 C100,144 98,80 140,30 Z\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M140,40 C172,82 170,136 140,138 C110,136 108,82 140,40 Z\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M140,100 C152,112 152,134 140,136 C128,134 128,112 140,100 Z\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><line x1=\"140\" y1=\"128\" x2=\"230\" y2=\"150\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"140\" cy=\"128\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"155\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">zone 1</text><line x1=\"156\" y1=\"80\" x2=\"230\" y2=\"95\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"156\" cy=\"80\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"100\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">zone 2</text><line x1=\"160\" y1=\"66\" x2=\"230\" y2=\"40\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"160\" cy=\"66\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"45\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">zone 3</text></svg>", "alt": "A candle flame with three zones: zone 1 is the dark innermost part around the wick, zone 2 is the bright yellow middle part, and zone 3 is the thin pale blue outer layer."}
  },
  {
    id: "g8-sci-combustion-a-q11",
    prompt: "The yellow luminous zone of a candle flame gives light mainly because of \u2014",
    options: [
      { id: "a", text: "Completely burnt water vapour only" },
      { id: "b", text: "Cold air from the room" },
      { id: "c", text: "Glowing unburnt carbon particles" },
      { id: "d", text: "Nitrogen gas" }
    ],
    answerId: "c",
    explanation: "Incomplete burning in the middle zone produces hot carbon particles that glow and give yellow light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q12",
    prompt: "The innermost dark zone of a candle flame contains mainly \u2014",
    options: [
      { id: "a", text: "Completely burnt ash" },
      { id: "b", text: "Liquid water" },
      { id: "c", text: "Solid wax only" },
      { id: "d", text: "Unburnt wax vapour" }
    ],
    answerId: "d",
    explanation: "Wax vapour rises into the innermost zone before it mixes well with air, so little burning happens there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q13",
    prompt: "The bar chart shows the calorific values of four fuels. Which fuel gives the most heat when 1 kg of it burns completely?",
    options: [
      { id: "a", text: "LPG" },
      { id: "b", text: "Kerosene" },
      { id: "c", text: "Coal" },
      { id: "d", text: "Wood" }
    ],
    answerId: "a",
    explanation: "Calorific value is the heat given out when 1 kg of a fuel burns completely. LPG has the tallest bar, 55,000 kJ/kg. Kerosene comes close at 45,000 kJ/kg, but its bar is shorter, so it gives less heat per kilogram.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A bar chart of calorific value in kilojoules per kilogram: wood 17,000, coal 27,000, kerosene 45,000 and LPG 55,000.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><text x=\"160\" y=\"20\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">calorific value (kJ/kg)</text><line x1=\"40\" y1=\"190\" x2=\"330\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"190\" x2=\"40\" y2=\"40\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"58\" y=\"146.72727272727272\" width=\"50\" height=\"43.27272727272727\" fill=\"#d6a76a\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"83.0\" y=\"140.72727272727272\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">17,000</text><text x=\"83.0\" y=\"206\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">wood</text><rect x=\"126\" y=\"121.27272727272727\" width=\"50\" height=\"68.72727272727273\" fill=\"#57534e\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"151.0\" y=\"115.27272727272727\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">27,000</text><text x=\"151.0\" y=\"206\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">coal</text><rect x=\"194\" y=\"75.45454545454545\" width=\"50\" height=\"114.54545454545455\" fill=\"#60a5fa\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"219.0\" y=\"69.45454545454545\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">45,000</text><text x=\"219.0\" y=\"206\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">kerosene</text><rect x=\"262\" y=\"50.0\" width=\"50\" height=\"140.0\" fill=\"#f97316\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"287.0\" y=\"44.0\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">55,000</text><text x=\"287.0\" y=\"206\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">LPG</text></svg>", "alt": "A bar chart of calorific value in kilojoules per kilogram: wood 17,000, coal 27,000, kerosene 45,000 and LPG 55,000."}
  },
  {
    id: "g8-sci-combustion-a-q14",
    prompt: "Which unit is commonly used for calorific value?",
    options: [
      { id: "a", text: "newton" },
      { id: "b", text: "kilojoule per kilogram (kJ/kg)" },
      { id: "c", text: "pascal" },
      { id: "d", text: "metre per second" }
    ],
    answerId: "b",
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
      { id: "a", text: "An increase in soil nitrogen only" },
      { id: "b", text: "Colder winters only" },
      { id: "c", text: "More oxygen in air" },
      { id: "d", text: "Acid rain" }
    ],
    answerId: "d",
    explanation: "Sulphur dioxide dissolves in rainwater and forms acids, contributing to acid rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q17",
    prompt: "Which gas released by burning fossil fuels is most linked to global warming?",
    options: [
      { id: "a", text: "Carbon dioxide" },
      { id: "b", text: "Oxygen" },
      { id: "c", text: "Nitrogen" },
      { id: "d", text: "Argon" }
    ],
    answerId: "a",
    explanation: "Extra carbon dioxide traps heat in the atmosphere and contributes to global warming.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q18",
    prompt: "A good domestic fuel should \u2014",
    options: [
      { id: "a", text: "Have a very low calorific value and produce thick smoke" },
      { id: "b", text: "Have a high calorific value and burn with little smoke" },
      { id: "c", text: "Be hard to light and leave a lot of ash" },
      { id: "d", text: "Be stored as an open powder near a flame" }
    ],
    answerId: "b",
    explanation: "Useful fuels give plenty of heat, light easily in a controlled way, and produce little harmful smoke.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q19",
    prompt: "White phosphorus catches fire in air at room temperature because \u2014",
    options: [
      { id: "a", text: "It is non-combustible" },
      { id: "b", text: "It needs no oxygen" },
      { id: "c", text: "Its ignition temperature is below room temperature" },
      { id: "d", text: "It is colder than ice" }
    ],
    answerId: "c",
    explanation: "If the ignition temperature is lower than the surroundings, the substance can catch fire easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q20",
    prompt: "Forest fires can start when dry leaves catch fire from the heat of the Sun because dry leaves have \u2014",
    options: [
      { id: "a", text: "A very high ignition temperature" },
      { id: "b", text: "No carbon" },
      { id: "c", text: "Only nitrogen" },
      { id: "d", text: "A low ignition temperature" }
    ],
    answerId: "d",
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
      { id: "b", text: "Turning wood into coal" },
      { id: "c", text: "Cooling the fuel below its ignition temperature and limiting air contact" },
      { id: "d", text: "Raising the flame temperature" }
    ],
    answerId: "c",
    explanation: "Water cools the burning material and the steam formed can also help keep air away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-a-q24",
    prompt: "Which statement about combustion is correct?",
    options: [
      { id: "a", text: "Combustion never needs oxygen" },
      { id: "b", text: "Combustion always happens below freezing point" },
      { id: "c", text: "Only metals can burn" },
      { id: "d", text: "Combustion is a chemical process that needs a combustible substance and usually oxygen" }
    ],
    answerId: "d",
    explanation: "Combustion is the burning of a fuel, usually in oxygen, that releases heat and often light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-combustion-b-q01",
    prompt: "Which pair correctly matches a substance with whether it is combustible?",
    options: [
      { id: "a", text: "Kerosene \u2014 combustible; glass \u2014 non-combustible" },
      { id: "b", text: "Stone \u2014 combustible; coal \u2014 non-combustible" },
      { id: "c", text: "Iron nail \u2014 combustible; paper \u2014 non-combustible" },
      { id: "d", text: "Water \u2014 combustible; wood \u2014 non-combustible" }
    ],
    answerId: "a",
    explanation: "Kerosene burns; glass does not. Stone, iron, and water are not fuels in ordinary air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q02",
    prompt: "The picture shows how a matchstick is lit. Why does it catch fire only after step 2?",
    options: [
      { id: "a", text: "Rubbing removes oxygen from the air" },
      { id: "b", text: "The heat from rubbing raises the tip to its low ignition temperature" },
      { id: "c", text: "Rubbing turns the tip into an insulator" },
      { id: "d", text: "The box gives out nitrogen" }
    ],
    answerId: "b",
    explanation: "In step 2 the tip is rubbed quickly across the rough strip. Friction produces a little heat, and because the tip chemicals have a low ignition temperature, this is enough to light them. Rubbing does not remove oxygen from the air: the match needs oxygen to burn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Step 1: a matchstick held still against the rough strip on the side of a matchbox; nothing happens. Step 2: the match is rubbed quickly along the strip and the tip bursts into flame.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"20\" y=\"120\" width=\"120\" height=\"50\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"20\" y=\"160\" width=\"120\" height=\"10\" fill=\"#78350f\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"100\" x2=\"110\" y2=\"158\" stroke=\"#d6a76a\" stroke-width=\"5\" stroke-linecap=\"round\"/><circle cx=\"112\" cy=\"160\" r=\"5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"80\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">1. held still</text><rect x=\"180\" y=\"120\" width=\"120\" height=\"50\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/><rect x=\"180\" y=\"160\" width=\"120\" height=\"10\" fill=\"#78350f\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"250\" y1=\"100\" x2=\"300\" y2=\"140\" stroke=\"#d6a76a\" stroke-width=\"5\" stroke-linecap=\"round\"/><circle cx=\"302\" cy=\"142\" r=\"5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M302,138 C314,122 310,108 302,98 C302,112 292,116 294,128 Z\" fill=\"#f97316\" stroke=\"#c2410c\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><line x1=\"200\" y1=\"150\" x2=\"272.0\" y2=\"150.0\" stroke=\"#334155\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"280,150 272,154.4 272,145.6\" fill=\"#334155\" stroke=\"#334155\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"240\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">2. rubbed quickly</text></svg>", "alt": "Step 1: a matchstick held still against the rough strip on the side of a matchbox; nothing happens. Step 2: the match is rubbed quickly along the strip and the tip bursts into flame."}
  },
  {
    id: "g8-sci-combustion-b-q03",
    prompt: "Spontaneous combustion differs from rapid combustion because it \u2014",
    options: [
      { id: "a", text: "Always needs a match flame at the start" },
      { id: "b", text: "Never produces heat" },
      { id: "c", text: "Can start without an external flame when heat builds up slowly" },
      { id: "d", text: "Happens only under water" }
    ],
    answerId: "c",
    explanation: "In spontaneous combustion, slow heating reaches the ignition temperature without a separate flame.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q04",
    prompt: "During an explosion, a large volume of gas forms suddenly. This mainly causes \u2014",
    options: [
      { id: "a", text: "A quiet cooling effect" },
      { id: "b", text: "The fuel to freeze" },
      { id: "c", text: "Air to turn into liquid oxygen" },
      { id: "d", text: "A sudden increase in pressure and a loud sound" }
    ],
    answerId: "d",
    explanation: "Rapid gas production raises pressure violently, which we hear and feel as an explosion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q05",
    prompt: "Cutting off air from a small fire with a wet blanket works because \u2014",
    options: [
      { id: "a", text: "Oxygen needed for burning is blocked" },
      { id: "b", text: "The blanket increases oxygen" },
      { id: "c", text: "The fuel's calorific value rises" },
      { id: "d", text: "Ignition temperature becomes zero" }
    ],
    answerId: "a",
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
      { id: "b", text: "It contains only unburnt wax" },
      { id: "c", text: "It has no oxygen" },
      { id: "d", text: "It gives the highest temperature for melting and working the metal" }
    ],
    answerId: "d",
    explanation: "The outer zone burns completely and is hottest, which helps melt or work metals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q09",
    prompt: "Which fuel usually has a higher calorific value than wood?",
    options: [
      { id: "a", text: "LPG" },
      { id: "b", text: "Wet leaves" },
      { id: "c", text: "Damp cow dung" },
      { id: "d", text: "Green twigs" }
    ],
    answerId: "a",
    explanation: "LPG releases much more heat per kilogram than wood or wet biomass fuels.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q10",
    prompt: "Follow the arrows in the picture. Why does the rain falling near the factory become acidic?",
    options: [
      { id: "a", text: "The gases make the rain alkaline like soap" },
      { id: "b", text: "The gases dissolve in rainwater to form acids" },
      { id: "c", text: "The gases turn the rain into pure oxygen" },
      { id: "d", text: "The gases freeze the clouds" }
    ],
    answerId: "b",
    explanation: "Sulphur dioxide and nitrogen oxides from the chimney rise into the clouds and dissolve in the water droplets, forming acids that fall as acid rain. Alkaline like soap is the opposite: acid rain has a low pH.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A factory chimney gives off smoke containing sulphur dioxide and nitrogen oxides. An arrow leads up to a rain cloud, and rain falls from the cloud onto trees and a lake.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"30\" y=\"120\" width=\"80\" height=\"80\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"80\" y=\"60\" width=\"18\" height=\"60\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"2\"/><path d=\"M89,58 C80,40 100,30 110,40 C120,25 140,35 135,48\" fill=\"#d1d5db\" stroke=\"#6b7280\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"60\" y=\"12\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">sulphur dioxide,</text><text x=\"60\" y=\"25\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">nitrogen oxides</text><line x1=\"140\" y1=\"50\" x2=\"177.0\" y2=\"50.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"185,50 177,54.4 177,45.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M195,60 C185,40 205,25 222,34 C232,15 262,18 266,36 C290,32 300,56 282,64 Z\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"210\" y1=\"76\" x2=\"205\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"228\" y1=\"76\" x2=\"223\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"246\" y1=\"76\" x2=\"241\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"264\" y1=\"76\" x2=\"259\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"282\" y1=\"76\" x2=\"277\" y2=\"92\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"104\" x2=\"213\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"104\" x2=\"233\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"258\" y1=\"104\" x2=\"253\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"276\" y1=\"104\" x2=\"271\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"205\" cy=\"160\" r=\"18\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"1.5\"/><rect x=\"202\" y=\"176\" width=\"6\" height=\"24\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"270\" cy=\"196\" rx=\"40\" ry=\"9\" fill=\"#bfdbfe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><line x1=\"0\" y1=\"200\" x2=\"320\" y2=\"200\" stroke=\"#78350f\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>", "alt": "A factory chimney gives off smoke containing sulphur dioxide and nitrogen oxides. An arrow leads up to a rain cloud, and rain falls from the cloud onto trees and a lake."}
  },
  {
    id: "g8-sci-combustion-b-q11",
    prompt: "The bar chart compares the harmful gases given out by two buses running the same distance. Why are many city buses being switched to the fuel used by bus 2?",
    options: [
      { id: "a", text: "It produces more thick black smoke" },
      { id: "b", text: "It removes oxygen from cities" },
      { id: "c", text: "It gives out less harmful exhaust gas" },
      { id: "d", text: "It adds more sulphur to the air" }
    ],
    answerId: "c",
    explanation: "Bus 2 runs on CNG, which burns more cleanly, so its bar is much shorter than the diesel bus's bar for the same distance. More thick black smoke is the opposite: that comes from the diesel bus 1.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A bar chart of the gases given out by two buses over the same distance. Bus 1, running on diesel, has a tall bar. Bus 2, running on CNG, has a much shorter bar.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><text x=\"160\" y=\"22\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">gases given out (same distance)</text><line x1=\"60\" y1=\"180\" x2=\"280\" y2=\"180\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"180\" x2=\"60\" y2=\"34\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><rect x=\"95\" y=\"50\" width=\"60\" height=\"130\" fill=\"#57534e\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"195\" y=\"140\" width=\"60\" height=\"40\" fill=\"#4ade80\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"125\" y=\"198\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">bus 1: diesel</text><text x=\"225\" y=\"198\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">bus 2: CNG</text></svg>", "alt": "A bar chart of the gases given out by two buses over the same distance. Bus 1, running on diesel, has a tall bar. Bus 2, running on CNG, has a much shorter bar."}
  },
  {
    id: "g8-sci-combustion-b-q12",
    prompt: "A substance with a very high ignition temperature is \u2014",
    options: [
      { id: "a", text: "Easier to set on fire with a small spark" },
      { id: "b", text: "Always explosive" },
      { id: "c", text: "Always a liquid" },
      { id: "d", text: "Harder to set on fire under normal conditions" }
    ],
    answerId: "d",
    explanation: "High ignition temperature means you must heat it a lot before it catches fire.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q13",
    prompt: "Inflammable substances such as petrol and alcohol \u2014",
    options: [
      { id: "a", text: "Have low ignition temperatures and catch fire easily" },
      { id: "b", text: "Have high ignition temperatures and never burn" },
      { id: "c", text: "Cannot be fuels" },
      { id: "d", text: "Burn only in pure nitrogen" }
    ],
    answerId: "a",
    explanation: "Inflammable liquids ignite easily because their ignition temperatures are low.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q14",
    prompt: "A clean glass plate is held in zone X of a candle flame for a few seconds. It comes out with a black coating, as shown. Why does zone X glow yellow?",
    options: [
      { id: "a", text: "All the carbon burns completely there" },
      { id: "b", text: "Partial burning leaves hot, glowing carbon particles" },
      { id: "c", text: "Ice crystals form in it" },
      { id: "d", text: "It gives out only ultraviolet light" }
    ],
    answerId: "b",
    explanation: "Little air reaches zone X, so the wax burns only partly. Tiny unburnt carbon particles become very hot and glow yellow, and they collect on the plate as black soot. If all the carbon burned completely, no soot would be left on the plate.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A candle flame with a glass plate held in its bright yellow middle zone, labelled X. Beside it, the plate after a few seconds has a round black sooty patch.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"96\" y=\"150\" width=\"28\" height=\"60\" fill=\"#fef3c7\" stroke=\"#a16207\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"150\" x2=\"110\" y2=\"140\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M110,30 C152,80 150,144 110,146 C70,144 68,80 110,30 Z\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M110,40 C142,82 140,136 110,138 C80,136 78,82 110,40 Z\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M110,100 C122,112 122,134 110,136 C98,134 98,112 110,100 Z\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><rect x=\"60\" y=\"88\" width=\"100\" height=\"6\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"1.2\"/><line x1=\"100\" y1=\"91\" x2=\"40\" y2=\"130\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"100\" cy=\"91\" r=\"2.5\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"36\" y=\"135\" font-size=\"16\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">X</text><rect x=\"205\" y=\"100\" width=\"100\" height=\"8\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"1.2\"/><ellipse cx=\"255\" cy=\"104\" rx=\"22\" ry=\"5\" fill=\"#111827\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"255\" y=\"132\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">plate afterwards</text></svg>", "alt": "A candle flame with a glass plate held in its bright yellow middle zone, labelled X. Beside it, the plate after a few seconds has a round black sooty patch."}
  },
  {
    id: "g8-sci-combustion-b-q15",
    prompt: "A coal stove (angithi) is kept burning all night in the room shown. Which gas makes this dangerous?",
    options: [
      { id: "a", text: "Water vapour" },
      { id: "b", text: "Argon" },
      { id: "c", text: "Carbon monoxide" },
      { id: "d", text: "Nitrogen" }
    ],
    answerId: "c",
    explanation: "With the window and door shut, little fresh air reaches the coal, so it burns incompletely and gives off carbon monoxide, a poisonous gas with no smell that can kill people as they sleep. Water vapour is also given off, but it is harmless.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A bedroom at night with a burning coal stove beside a bed. The window is shut and the door is shut, with no gaps for air.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"20\" y=\"20\" width=\"280\" height=\"180\" fill=\"#f1f5f9\" stroke=\"#334155\" stroke-width=\"2.5\"/><rect x=\"50\" y=\"45\" width=\"70\" height=\"55\" fill=\"#1e3a8a\" stroke=\"#334155\" stroke-width=\"3\"/><line x1=\"85\" y1=\"45\" x2=\"85\" y2=\"100\" stroke=\"#334155\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"70\" cy=\"62\" r=\"6\" fill=\"#fef9c3\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"85\" y=\"118\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">window shut</text><rect x=\"230\" y=\"70\" width=\"50\" height=\"130\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"2.5\"/><circle cx=\"240\" cy=\"140\" r=\"3\" fill=\"#fde68a\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"255\" y=\"62\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">door shut</text><rect x=\"40\" y=\"150\" width=\"110\" height=\"30\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"180\" width=\"8\" height=\"18\" fill=\"#334155\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"142\" y=\"180\" width=\"8\" height=\"18\" fill=\"#334155\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"170,200 178,160 212,160 220,200\" fill=\"#57534e\" stroke=\"#292524\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><circle cx=\"185\" cy=\"156\" r=\"5\" fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"0.8\"/><circle cx=\"194\" cy=\"156\" r=\"5\" fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"0.8\"/><circle cx=\"203\" cy=\"156\" r=\"5\" fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"0.8\"/><circle cx=\"212\" cy=\"156\" r=\"5\" fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"0.8\"/><path d=\"M195,148 q-6,-12 0,-24 q6,-12 0,-24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>", "alt": "A bedroom at night with a burning coal stove beside a bed. The window is shut and the door is shut, with no gaps for air."}
  },
  {
    id: "g8-sci-combustion-b-q16",
    prompt: "The fire triangle collapses if you remove \u2014",
    options: [
      { id: "a", text: "Only the colour of the flame" },
      { id: "b", text: "Only the sound of burning" },
      { id: "c", text: "Gravity" },
      { id: "d", text: "Any one of fuel, oxygen, or heat" }
    ],
    answerId: "d",
    explanation: "All three conditions are needed. Take away fuel, air, or heat and burning stops.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q17",
    prompt: "Calorific value helps us compare fuels because it tells \u2014",
    options: [
      { id: "a", text: "How much heat one kilogram of fuel can give when burnt completely" },
      { id: "b", text: "How heavy the fuel cylinder is" },
      { id: "c", text: "The colour of the flame only" },
      { id: "d", text: "The melting point of glass" }
    ],
    answerId: "a",
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
    prompt: "Two identical candles were lit at the same time. The picture shows them one minute later. Why has candle 2 gone out?",
    options: [
      { id: "a", text: "Its wax could no longer burn" },
      { id: "b", text: "Its ignition temperature rose" },
      { id: "c", text: "The oxygen inside was used up and not replaced" },
      { id: "d", text: "The glass gave out nitrogen" }
    ],
    answerId: "c",
    explanation: "The glass trapped only a little air. The flame used up the oxygen in it, no fresh air could get in, and so burning stopped. The wax itself could still burn: candle 1, out in the open air, is still alight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Candle 1 stands in the open and is still burning. Candle 2 stands under an upside-down glass tumbler and its flame has gone out, leaving a thin wisp of smoke.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"66\" y=\"110\" width=\"28\" height=\"80\" fill=\"#fef3c7\" stroke=\"#a16207\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"110\" x2=\"80\" y2=\"100\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M80,68 C94,86 92,102 80,104 C68,102 66,86 80,68 Z\" fill=\"#fde047\" stroke=\"#ea580c\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"216\" y=\"110\" width=\"28\" height=\"80\" fill=\"#fef3c7\" stroke=\"#a16207\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"110\" x2=\"230\" y2=\"100\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M230,98 q-6,-12 0,-22 q6,-10 0,-20\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M180,190 L188,40 L272,40 L280,190\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><line x1=\"186\" y1=\"44\" x2=\"274\" y2=\"44\" stroke=\"#64748b\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"20\" y1=\"190\" x2=\"300\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"80\" y=\"210\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">candle 1</text><text x=\"230\" y=\"210\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">candle 2</text></svg>", "alt": "Candle 1 stands in the open and is still burning. Candle 2 stands under an upside-down glass tumbler and its flame has gone out, leaving a thin wisp of smoke."}
  },
  {
    id: "g8-sci-combustion-b-q20",
    prompt: "Which is the best description of a fuel?",
    options: [
      { id: "a", text: "Any substance that never reacts with oxygen" },
      { id: "b", text: "Only solid metals" },
      { id: "c", text: "Only water and sand" },
      { id: "d", text: "A combustible substance that is burnt to obtain heat (and often light)" }
    ],
    answerId: "d",
    explanation: "Fuels are materials we burn on purpose for useful heat or light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q21",
    prompt: "Unburnt carbon particles from smoky fuels can cause \u2014",
    options: [
      { id: "a", text: "Respiratory problems and blackening of buildings" },
      { id: "b", text: "Clearer lungs" },
      { id: "c", text: "More ozone at ground level that always heals lungs" },
      { id: "d", text: "Only a sweet smell" }
    ],
    answerId: "a",
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
      { id: "b", text: "It is made of solid diamond" },
      { id: "c", text: "Fuel vapour there has not mixed well with air, so little combustion occurs" },
      { id: "d", text: "It is outside the flame entirely" }
    ],
    answerId: "c",
    explanation: "Without enough oxygen mixed in, burning is minimal and the zone stays cooler.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-combustion-b-q24",
    prompt: "Global warming concerns from fossil fuels are mainly about \u2014",
    options: [
      { id: "a", text: "Extra argon making rain pink" },
      { id: "b", text: "Less nitrogen in fertilisers only" },
      { id: "c", text: "Colder ocean water from more oxygen" },
      { id: "d", text: "Extra carbon dioxide trapping heat" }
    ],
    answerId: "d",
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
