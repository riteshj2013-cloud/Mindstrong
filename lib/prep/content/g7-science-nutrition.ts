import type { ChapterDef, PrepQuestion } from "../types";

/** Nutrition in Plants and Animals - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-sci-nutrition-a-q01",
    prompt: "Organisms that make their own food are called\u2026",
    options: [
      { id: "a", text: "Autotrophs" },
      { id: "b", text: "Heterotrophs" },
      { id: "c", text: "Parasites only" },
      { id: "d", text: "Saprotrophs only" }
    ],
    answerId: "a",
    explanation: "Autotrophs synthesise food (e.g. green plants).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q02",
    prompt: "The process by which green plants make food is\u2026",
    options: [
      { id: "a", text: "Respiration only" },
      { id: "b", text: "Photosynthesis" },
      { id: "c", text: "Transpiration only" },
      { id: "d", text: "Digestion" }
    ],
    answerId: "b",
    explanation: "Photosynthesis uses light to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q03",
    prompt: "Which gas do plants take in for photosynthesis?",
    options: [
      { id: "a", text: "Nitrogen only" },
      { id: "b", text: "Ozone" },
      { id: "c", text: "Carbon dioxide" },
      { id: "d", text: "Helium" }
    ],
    answerId: "c",
    explanation: "CO\u2082 is a raw material for photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q04",
    prompt: "Which gas is released as a by-product of photosynthesis?",
    options: [
      { id: "a", text: "Nitrogen" },
      { id: "b", text: "Carbon monoxide" },
      { id: "c", text: "Argon" },
      { id: "d", text: "Oxygen" }
    ],
    answerId: "d",
    explanation: "Oxygen is liberated when plants photosynthesise.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q05",
    prompt: "The green pigment that traps sunlight is\u2026",
    options: [
      { id: "a", text: "Chlorophyll" },
      { id: "b", text: "Haemoglobin" },
      { id: "c", text: "Melanin" },
      { id: "d", text: "Keratin" }
    ],
    answerId: "a",
    explanation: "Chlorophyll in chloroplasts traps light energy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q06",
    prompt: "Where does photosynthesis mainly occur in a leaf?",
    options: [
      { id: "a", text: "Mitochondria only" },
      { id: "b", text: "Chloroplasts" },
      { id: "c", text: "Nucleus only" },
      { id: "d", text: "Cell wall only" }
    ],
    answerId: "b",
    explanation: "Chloroplasts contain chlorophyll for photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q07",
    prompt: "Organisms that depend on others for food are\u2026",
    options: [
      { id: "a", text: "Autotrophs" },
      { id: "b", text: "Producers only" },
      { id: "c", text: "Heterotrophs" },
      { id: "d", text: "Chemosynthesisers only" }
    ],
    answerId: "c",
    explanation: "Heterotrophs cannot make food; they consume it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q08",
    prompt: "Fungi that feed on dead matter are\u2026",
    options: [
      { id: "a", text: "Parasites" },
      { id: "b", text: "Autotrophs" },
      { id: "c", text: "Herbivores" },
      { id: "d", text: "Saprotrophs" }
    ],
    answerId: "d",
    explanation: "Saprotrophs secrete enzymes on dead organic matter and absorb nutrients.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q09",
    prompt: "Cuscuta (dodder) is an example of a\u2026",
    options: [
      { id: "a", text: "Parasitic plant" },
      { id: "b", text: "Autotrophic tree" },
      { id: "c", text: "Saprotrophic mushroom" },
      { id: "d", text: "Insect only" }
    ],
    answerId: "a",
    explanation: "Cuscuta takes food from a host plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q10",
    prompt: "Insectivorous plants like pitcher plant mainly capture insects to obtain\u2026",
    options: [
      { id: "a", text: "Only sunlight" },
      { id: "b", text: "Nitrogen nutrients" },
      { id: "c", text: "Only carbon dioxide" },
      { id: "d", text: "Only water vapour" }
    ],
    answerId: "b",
    explanation: "They grow in nitrogen-poor soil and get nitrogen from insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q11",
    prompt: "Stomata on leaves mainly help in\u2026",
    options: [
      { id: "a", text: "Making bones" },
      { id: "b", text: "Pumping blood" },
      { id: "c", text: "Gas exchange" },
      { id: "d", text: "Hearing sound" }
    ],
    answerId: "c",
    explanation: "Stomata allow CO\u2082 in and O\u2082/water vapour out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q12",
    prompt: "Animals that eat only plants are\u2026",
    options: [
      { id: "a", text: "Carnivores" },
      { id: "b", text: "Omnivores" },
      { id: "c", text: "Parasites" },
      { id: "d", text: "Herbivores" }
    ],
    answerId: "d",
    explanation: "Herbivores feed on plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q13",
    prompt: "Humans are typically\u2026",
    options: [
      { id: "a", text: "Omnivores" },
      { id: "b", text: "Autotrophs" },
      { id: "c", text: "Saprotrophs" },
      { id: "d", text: "Producers" }
    ],
    answerId: "a",
    explanation: "Humans eat plant and animal foods.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q14",
    prompt: "The first step of nutrition in animals is usually\u2026",
    options: [
      { id: "a", text: "Egestion" },
      { id: "b", text: "Ingestion" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Transpiration" }
    ],
    answerId: "b",
    explanation: "Ingestion means taking in food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q15",
    prompt: "In humans, protein digestion begins mainly in the\u2026",
    options: [
      { id: "a", text: "Mouth only" },
      { id: "b", text: "Large intestine only" },
      { id: "c", text: "Stomach" },
      { id: "d", text: "Nose" }
    ],
    answerId: "c",
    explanation: "Gastric juices in the stomach start protein digestion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q16",
    prompt: "Bile produced by the liver helps mainly to\u2026",
    options: [
      { id: "a", text: "Digest starch in the mouth" },
      { id: "b", text: "Absorb oxygen" },
      { id: "c", text: "Make chlorophyll" },
      { id: "d", text: "Emulsify fats" }
    ],
    answerId: "d",
    explanation: "Bile emulsifies fats for easier digestion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q17",
    prompt: "Villi in the small intestine increase\u2026",
    options: [
      { id: "a", text: "Surface area for absorption" },
      { id: "b", text: "Bone length" },
      { id: "c", text: "Heart rate" },
      { id: "d", text: "Leaf area" }
    ],
    answerId: "a",
    explanation: "Finger-like villi absorb digested food efficiently.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q18",
    prompt: "Carbohydrates are mainly used by the body for\u2026",
    options: [
      { id: "a", text: "Only building bones" },
      { id: "b", text: "Energy" },
      { id: "c", text: "Only carrying oxygen in leaves" },
      { id: "d", text: "Insulation alone" }
    ],
    answerId: "b",
    explanation: "Carbohydrates are a primary energy source.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q19",
    prompt: "Iodine deficiency can lead to\u2026",
    options: [
      { id: "a", text: "Scurvy" },
      { id: "b", text: "Rickets only" },
      { id: "c", text: "Goitre" },
      { id: "d", text: "Night blindness only" }
    ],
    answerId: "c",
    explanation: "Lack of iodine affects the thyroid and can cause goitre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q20",
    prompt: "Vitamin C deficiency causes\u2026",
    options: [
      { id: "a", text: "Goitre" },
      { id: "b", text: "Beriberi only" },
      { id: "c", text: "Anaemia from iron only" },
      { id: "d", text: "Scurvy" }
    ],
    answerId: "d",
    explanation: "Scurvy is linked to lack of vitamin C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q21",
    prompt: "A food chain always begins with a\u2026",
    options: [
      { id: "a", text: "Producer" },
      { id: "b", text: "Carnivore" },
      { id: "c", text: "Decomposer only as starter" },
      { id: "d", text: "Parasite" }
    ],
    answerId: "a",
    explanation: "Producers (usually green plants) start food chains.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q22",
    prompt: "Rumination in cows involves\u2026",
    options: [
      { id: "a", text: "Photosynthesis in the stomach" },
      { id: "b", text: "Bringing back partly chewed food to chew again" },
      { id: "c", text: "Breathing underwater" },
      { id: "d", text: "Making nectar" }
    ],
    answerId: "b",
    explanation: "Ruminants chew the cud.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q23",
    prompt: "Amoeba takes in food using\u2026",
    options: [
      { id: "a", text: "Teeth" },
      { id: "b", text: "Stomata" },
      { id: "c", text: "Pseudopodia" },
      { id: "d", text: "Gills" }
    ],
    answerId: "c",
    explanation: "Pseudopodia surround food to form a food vacuole.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q24",
    prompt: "Which is a symbiotic nutrition example?",
    options: [
      { id: "a", text: "Tiger hunting deer" },
      { id: "b", text: "Mushroom on dead log only" },
      { id: "c", text: "Cuscuta on host only" },
      { id: "d", text: "Lichen (alga + fungus)" }
    ],
    answerId: "d",
    explanation: "In lichens, alga and fungus live together with mutual benefit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-sci-nutrition-b-q01",
    prompt: "Raw materials for photosynthesis are mainly\u2026",
    options: [
      { id: "a", text: "Carbon dioxide and water" },
      { id: "b", text: "Oxygen and nitrogen" },
      { id: "c", text: "Proteins and fats" },
      { id: "d", text: "Soil only" }
    ],
    answerId: "a",
    explanation: "CO\u2082 and water are used; light and chlorophyll are also needed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q02",
    prompt: "The site of photosynthesis in plant cells is the\u2026",
    options: [
      { id: "a", text: "Ribosome" },
      { id: "b", text: "Chloroplast" },
      { id: "c", text: "Vacuole only" },
      { id: "d", text: "Cell wall" }
    ],
    answerId: "b",
    explanation: "Chloroplasts house the photosynthetic machinery.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q03",
    prompt: "Heterotrophic nutrition means\u2026",
    options: [
      { id: "a", text: "Making food with sunlight only" },
      { id: "b", text: "Living without energy" },
      { id: "c", text: "Depending on other organisms for food" },
      { id: "d", text: "Breathing nitrogen only" }
    ],
    answerId: "c",
    explanation: "Heterotrophs obtain ready-made food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q04",
    prompt: "Pitcher plant is green, yet it traps insects mainly because\u2026",
    options: [
      { id: "a", text: "It cannot photosynthesise at all" },
      { id: "b", text: "It needs no water" },
      { id: "c", text: "It is a fungus" },
      { id: "d", text: "Soil lacks enough nitrogen" }
    ],
    answerId: "d",
    explanation: "It still photosynthesises but supplements nitrogen from insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q05",
    prompt: "During photosynthesis, solar energy is stored as\u2026",
    options: [
      { id: "a", text: "Chemical energy in food" },
      { id: "b", text: "Sound energy" },
      { id: "c", text: "Nuclear energy" },
      { id: "d", text: "Magnetic energy" }
    ],
    answerId: "a",
    explanation: "Light energy converts to chemical energy in glucose/starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q06",
    prompt: "Starch in leaves can be tested with\u2026",
    options: [
      { id: "a", text: "Limewater only" },
      { id: "b", text: "Iodine solution" },
      { id: "c", text: "Phenolphthalein only" },
      { id: "d", text: "Copper sulphate only for starch" }
    ],
    answerId: "b",
    explanation: "Iodine turns blue-black with starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q07",
    prompt: "Parasitic nutrition harms the\u2026",
    options: [
      { id: "a", text: "Only the parasite never" },
      { id: "b", text: "Soil only" },
      { id: "c", text: "Host" },
      { id: "d", text: "Sun only" }
    ],
    answerId: "c",
    explanation: "Parasites derive nutrition from a living host, often harming it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q08",
    prompt: "In human digestion, starch digestion begins in the\u2026",
    options: [
      { id: "a", text: "Stomach only" },
      { id: "b", text: "Large intestine" },
      { id: "c", text: "Liver" },
      { id: "d", text: "Mouth" }
    ],
    answerId: "d",
    explanation: "Salivary amylase starts breaking down starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q09",
    prompt: "The finger-like projections for absorption are\u2026",
    options: [
      { id: "a", text: "Villi" },
      { id: "b", text: "Alveoli only" },
      { id: "c", text: "Nephrons only" },
      { id: "d", text: "Stomata" }
    ],
    answerId: "a",
    explanation: "Intestinal villi absorb nutrients.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q10",
    prompt: "Proteins are broken down into\u2026",
    options: [
      { id: "a", text: "Glucose only" },
      { id: "b", text: "Amino acids" },
      { id: "c", text: "Fatty acids only" },
      { id: "d", text: "Vitamins" }
    ],
    answerId: "b",
    explanation: "Proteins digest to amino acids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q11",
    prompt: "Fats are broken down into\u2026",
    options: [
      { id: "a", text: "Amino acids" },
      { id: "b", text: "Glucose only" },
      { id: "c", text: "Fatty acids and glycerol" },
      { id: "d", text: "Starch" }
    ],
    answerId: "c",
    explanation: "Fat digestion yields fatty acids and glycerol.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q12",
    prompt: "A balanced diet should include\u2026",
    options: [
      { id: "a", text: "Only sugar" },
      { id: "b", text: "Only fat" },
      { id: "c", text: "Only vitamins" },
      { id: "d", text: "Carbohydrates, proteins, fats, vitamins, minerals, fibre and water" }
    ],
    answerId: "d",
    explanation: "All nutrient classes matter in balance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q13",
    prompt: "Night blindness is linked to deficiency of\u2026",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Vitamin D only" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "a",
    explanation: "Vitamin A deficiency can cause night blindness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q14",
    prompt: "Rickets is associated with deficiency of\u2026",
    options: [
      { id: "a", text: "Vitamin C only" },
      { id: "b", text: "Vitamin D (and related calcium issues)" },
      { id: "c", text: "Iodine only" },
      { id: "d", text: "Vitamin K only as sole cause named here" }
    ],
    answerId: "b",
    explanation: "Vitamin D helps calcium use for bones; deficiency relates to rickets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q15",
    prompt: "Decomposers in a food chain\u2026",
    options: [
      { id: "a", text: "Make food from sunlight" },
      { id: "b", text: "Only eat living lions" },
      { id: "c", text: "Break down dead matter and recycle nutrients" },
      { id: "d", text: "Stop all cycles" }
    ],
    answerId: "c",
    explanation: "Bacteria and fungi recycle materials.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q16",
    prompt: "Holozoic nutrition involves\u2026",
    options: [
      { id: "a", text: "Absorbing only from dead logs as fungi do" },
      { id: "b", text: "Photosynthesis" },
      { id: "c", text: "Parasitism only" },
      { id: "d", text: "Ingesting and digesting solid food internally" }
    ],
    answerId: "d",
    explanation: "Humans and many animals show holozoic nutrition.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q17",
    prompt: "In photosynthesis equation terms, sugar is a\u2026",
    options: [
      { id: "a", text: "Product" },
      { id: "b", text: "Reactant only" },
      { id: "c", text: "Catalyst only" },
      { id: "d", text: "Pigment" }
    ],
    answerId: "a",
    explanation: "Glucose/sugar is produced; CO\u2082 and water are reactants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q18",
    prompt: "Leaves appear green because chlorophyll\u2026",
    options: [
      { id: "a", text: "Produces green paint" },
      { id: "b", text: "Reflects green light more than it absorbs it" },
      { id: "c", text: "Absorbs only green and reflects all else always wrongly stated" },
      { id: "d", text: "Turns into iodine" }
    ],
    answerId: "b",
    explanation: "Chlorophyll absorbs other wavelengths more and reflects green.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q19",
    prompt: "A food web is\u2026",
    options: [
      { id: "a", text: "A single straight chain only" },
      { id: "b", text: "Only producers" },
      { id: "c", text: "Many interlinked food chains" },
      { id: "d", text: "A vitamin chart" }
    ],
    answerId: "c",
    explanation: "Real ecosystems have interconnected chains forming webs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q20",
    prompt: "Saliva contains an enzyme that acts on\u2026",
    options: [
      { id: "a", text: "Fats only" },
      { id: "b", text: "Proteins only" },
      { id: "c", text: "Vitamins" },
      { id: "d", text: "Starch" }
    ],
    answerId: "d",
    explanation: "Salivary amylase acts on starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q21",
    prompt: "Water and minerals are transported from roots mainly through\u2026",
    options: [
      { id: "a", text: "Xylem" },
      { id: "b", text: "Phloem only" },
      { id: "c", text: "Stomata tubes of blood" },
      { id: "d", text: "Nerves" }
    ],
    answerId: "a",
    explanation: "Xylem carries water and minerals upward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q22",
    prompt: "Food (sugar) is transported in plants mainly through\u2026",
    options: [
      { id: "a", text: "Xylem only" },
      { id: "b", text: "Phloem" },
      { id: "c", text: "Stomata only" },
      { id: "d", text: "Root hairs only" }
    ],
    answerId: "b",
    explanation: "Phloem transports food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q23",
    prompt: "Which mode of nutrition does a mushroom show?",
    options: [
      { id: "a", text: "Autotrophic photosynthesis like leaves" },
      { id: "b", text: "Holozoic chewing" },
      { id: "c", text: "Saprotrophic" },
      { id: "d", text: "Parasitic on sunlight" }
    ],
    answerId: "c",
    explanation: "Mushrooms feed on dead organic matter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q24",
    prompt: "Why are green plants called producers?",
    options: [
      { id: "a", text: "They produce only oxygen for sale" },
      { id: "b", text: "They produce soil rocks" },
      { id: "c", text: "They produce consumers" },
      { id: "d", text: "They produce food that supports other organisms" }
    ],
    answerId: "d",
    explanation: "Producers synthesise organic food from inorganic materials.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf3f",
    title: "Nutrition in Plants and Animals",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Plants make food; animals take it in. Know the modes of nutrition.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Autotrophs", reveal: "Make their own food", emoji: "\ud83c\udf1e" },
      { label: "Heterotrophs", reveal: "Depend on others for food", emoji: "\ud83c\udf7d\ufe0f" },
      { label: "Photosynthesis", reveal: "Light, CO\u2082, water \u2192 food + oxygen", emoji: "\ud83c\udf43" },
      { label: "Digestion", reveal: "Break food into absorbable forms", emoji: "\ud83e\udec1" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Green plants are mainly\u2026",
    options: [
        { id: "a", text: "Autotrophs" },
        { id: "b", text: "Parasites only" },
        { id: "c", text: "Saprotrophs only" },
        { id: "d", text: "Carnivores" }
    ],
    answerId: "a",
    why: "They make food by photosynthesis.",
    visual: "plant",
    speak: "Green plants are mainly\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Autotroph vs heterotroph", "Photosynthesis basics", "Animal nutrition steps", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7ScienceNutrition: ChapterDef = {
  id: "nutrition",
  title: "Nutrition in Plants and Animals",
  emoji: "\ud83c\udf3f",
  blurb: "How living things get food",
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

export const g7ScienceNutritionQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
