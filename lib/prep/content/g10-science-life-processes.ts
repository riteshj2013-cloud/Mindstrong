import type { ChapterDef, PrepQuestion } from "../types";

/** Life Processes - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-sci-life-a-q01",
    prompt: "The process of obtaining and using food in living organisms is called \u2014",
    options: [
      { id: "a", text: "phototropism" },
      { id: "b", text: "nutrition" },
      { id: "c", text: "transpiration only" },
      { id: "d", text: "excretion only" }
    ],
    answerId: "b",
    explanation: "Nutrition is taking in food and using it for energy and growth. 'Transpiration only' is tempting because it is also a life process, but transpiration is water loss from leaves.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q02",
    prompt: "Autotrophs \u2014",
    options: [
      { id: "a", text: "lack chlorophyll always" },
      { id: "b", text: "only eat animals" },
      { id: "c", text: "cannot use sunlight" },
      { id: "d", text: "make their own food (e.g. photosynthesis)" }
    ],
    answerId: "d",
    explanation: "Autotrophs make their own food from simple substances, as green plants do by photosynthesis. 'Lack chlorophyll always' is tempting, but green plants are autotrophs because they have chlorophyll.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q03",
    prompt: "The site of photosynthesis in a plant cell is the \u2014",
    options: [
      { id: "a", text: "nucleus" },
      { id: "b", text: "chloroplast" },
      { id: "c", text: "mitochondrion" },
      { id: "d", text: "ribosome" }
    ],
    answerId: "b",
    explanation: "Chloroplasts hold chlorophyll, which traps light for photosynthesis. The mitochondrion is tempting because it also handles energy, but it releases energy from food by respiration.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q04",
    prompt: "Stomata mainly help in \u2014",
    options: [
      { id: "a", text: "gas exchange and transpiration" },
      { id: "b", text: "absorbing minerals from soil" },
      { id: "c", text: "transporting food in phloem exclusively" },
      { id: "d", text: "storing starch only" }
    ],
    answerId: "a",
    explanation: "Stomata are leaf pores that exchange CO₂ and O₂ and let water vapour out (transpiration). 'Absorbing minerals from soil' is tempting, but roots do that; stomata are on leaves.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q05",
    prompt: "In humans, proteins are mainly digested by \u2014",
    options: [
      { id: "a", text: "bile salts only" },
      { id: "b", text: "amylase only" },
      { id: "c", text: "lipase only" },
      { id: "d", text: "pepsin and trypsin" }
    ],
    answerId: "d",
    explanation: "Pepsin in the stomach and trypsin from the pancreas break down proteins. 'Amylase only' is tempting because it is a well-known enzyme, but amylase digests starch.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q06",
    prompt: "Bile is produced by the \u2014",
    options: [
      { id: "a", text: "stomach" },
      { id: "b", text: "kidney" },
      { id: "c", text: "liver" },
      { id: "d", text: "pancreas" }
    ],
    answerId: "c",
    explanation: "The liver makes bile and the gall bladder stores it. The pancreas is tempting because its juice also enters the small intestine, but it makes enzymes, not bile.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q07",
    prompt: "The respiratory pigment in human blood is \u2014",
    options: [
      { id: "a", text: "pepsin" },
      { id: "b", text: "insulin" },
      { id: "c", text: "chlorophyll" },
      { id: "d", text: "haemoglobin" }
    ],
    answerId: "d",
    explanation: "Haemoglobin in red blood cells carries oxygen. Chlorophyll is tempting because it is also a coloured pigment, but it traps light in plants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q08",
    prompt: "Aerobic respiration yields more energy because \u2014",
    options: [
      { id: "a", text: "ATP is not involved" },
      { id: "b", text: "glucose is fully oxidised using oxygen" },
      { id: "c", text: "only fermentation occurs" },
      { id: "d", text: "no oxygen is used" }
    ],
    answerId: "b",
    explanation: "With oxygen, glucose is broken down fully to CO₂ and water, releasing far more energy (ATP). 'No oxygen is used' is tempting, but that describes anaerobic respiration, which releases less.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q09",
    prompt: "In anaerobic respiration in muscle, glucose forms \u2014",
    options: [
      { id: "a", text: "lactic acid" },
      { id: "b", text: "alcohol and CO\u2082 always in muscle" },
      { id: "c", text: "only water" },
      { id: "d", text: "urea" }
    ],
    answerId: "a",
    explanation: "When muscles run short of oxygen, glucose is turned into lactic acid. 'Alcohol and CO₂' is tempting because that is also anaerobic, but it happens in yeast, not in muscle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q10",
    prompt: "At night, when transpiration is very low, water still rises a little in the xylem of a plant. This is mainly due to \u2014",
    options: [
      { id: "a", text: "photosynthesis in the leaves" },
      { id: "b", text: "translocation in the phloem" },
      { id: "c", text: "root pressure" },
      { id: "d", text: "peristalsis" }
    ],
    answerId: "c",
    explanation: "Root cells actively take in ions from the soil, and water follows by osmosis. This builds root pressure that pushes water up the xylem, which matters most at night. Translocation is tempting, but it moves food through the phloem, not water through the xylem.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q11",
    prompt: "Sugars made in the leaves reach the roots of a plant through the \u2014",
    options: [
      { id: "a", text: "xylem" },
      { id: "b", text: "root hairs" },
      { id: "c", text: "phloem" },
      { id: "d", text: "stomata" }
    ],
    answerId: "c",
    explanation: "Phloem carries food (sugars) from the leaves to other parts of the plant, including the roots; this is translocation. Xylem is tempting because it also connects roots and leaves, but it carries water and minerals upward.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q12",
    prompt: "The functional unit of the kidney is the \u2014",
    options: [
      { id: "a", text: "alveolus" },
      { id: "b", text: "villus" },
      { id: "c", text: "nephron" },
      { id: "d", text: "neuron" }
    ],
    answerId: "c",
    explanation: "Each kidney has about a million nephrons that filter blood and form urine. The alveolus is tempting because it is also a tiny unit, but it belongs to the lungs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q13",
    prompt: "Blood is pumped from left ventricle to the body through the \u2014",
    options: [
      { id: "a", text: "aorta" },
      { id: "b", text: "pulmonary artery" },
      { id: "c", text: "pulmonary vein" },
      { id: "d", text: "vena cava" }
    ],
    answerId: "a",
    explanation: "The aorta carries oxygen-rich blood from the left ventricle to the body. The pulmonary artery is tempting because it also leaves the heart, but it starts at the right ventricle and goes to the lungs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q14",
    prompt: "Pulmonary artery carries \u2014",
    options: [
      { id: "a", text: "oxygenated blood to body" },
      { id: "b", text: "oxygenated blood to lungs" },
      { id: "c", text: "lymph" },
      { id: "d", text: "deoxygenated blood to lungs" }
    ],
    answerId: "d",
    explanation: "The pulmonary artery takes deoxygenated blood from the right ventricle to the lungs. 'Oxygenated blood to lungs' is tempting because most arteries carry oxygenated blood, but this one carries blood that still needs oxygen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q15",
    prompt: "Villi in the small intestine \u2014",
    options: [
      { id: "a", text: "pump blood" },
      { id: "b", text: "increase surface area for absorption" },
      { id: "c", text: "filter urea" },
      { id: "d", text: "produce bile" }
    ],
    answerId: "b",
    explanation: "Villi are finger-like projections that give a huge surface for absorbing digested food. 'Produce bile' is tempting because bile also acts in the small intestine, but the liver makes it.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q16",
    prompt: "Transpiration helps in \u2014",
    options: [
      { id: "a", text: "ascent of sap and cooling" },
      { id: "b", text: "photosynthesis dark reaction only" },
      { id: "c", text: "protein synthesis" },
      { id: "d", text: "nerve impulse" }
    ],
    answerId: "a",
    explanation: "Water evaporating from leaves pulls water up the xylem (ascent of sap) and cools the leaf. 'Photosynthesis dark reaction only' is tempting because it happens in leaves too, but it does not move water up the plant.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q17",
    prompt: "Human excretory wastes include \u2014",
    options: [
      { id: "a", text: "starch" },
      { id: "b", text: "urea" },
      { id: "c", text: "oxygen" },
      { id: "d", text: "glucose as main waste" }
    ],
    answerId: "b",
    explanation: "Urea is the main nitrogen-containing waste, removed in urine. 'Glucose as main waste' is tempting because it appears in tests, but glucose is useful fuel and is normally taken back into the blood.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q18",
    prompt: "Platelets help in \u2014",
    options: [
      { id: "a", text: "digesting fat" },
      { id: "b", text: "carrying oxygen" },
      { id: "c", text: "fighting all viruses alone" },
      { id: "d", text: "blood clotting" }
    ],
    answerId: "d",
    explanation: "Platelets gather at a cut and help the blood clot. 'Carrying oxygen' is tempting because platelets are in blood, but red blood cells carry oxygen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q19",
    prompt: "The breakdown of pyruvate in mitochondria (with O\u2082) yields \u2014",
    options: [
      { id: "a", text: "only alcohol" },
      { id: "b", text: "only lactic acid" },
      { id: "c", text: "CO\u2082, H\u2082O and energy (ATP)" },
      { id: "d", text: "starch" }
    ],
    answerId: "c",
    explanation: "With oxygen, pyruvate is broken down in mitochondria to CO₂, H₂O and a lot of ATP. 'Only lactic acid' is tempting, but that is the anaerobic route in muscles, without oxygen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q20",
    prompt: "Heterotrophs \u2014",
    options: [
      { id: "a", text: "depend on other organisms for food" },
      { id: "b", text: "need no energy" },
      { id: "c", text: "always photosynthesise" },
      { id: "d", text: "make food from CO\u2082 only" }
    ],
    answerId: "a",
    explanation: "Heterotrophs, like animals and fungi, cannot make their own food and depend on other organisms. 'Make food from CO₂ only' is tempting, but making food from CO₂ is what autotrophs do.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q21",
    prompt: "Salivary amylase begins digestion of \u2014",
    options: [
      { id: "a", text: "starch" },
      { id: "b", text: "protein" },
      { id: "c", text: "fat" },
      { id: "d", text: "vitamins" }
    ],
    answerId: "a",
    explanation: "Salivary amylase starts breaking starch into sugar in the mouth. Protein is tempting, but protein digestion starts in the stomach with pepsin.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q22",
    prompt: "Double circulation in humans means blood goes through the heart \u2014",
    options: [
      { id: "a", text: "never to the lungs" },
      { id: "b", text: "only in veins" },
      { id: "c", text: "only once ever" },
      { id: "d", text: "twice for each complete body circuit (pulmonary + systemic)" }
    ],
    answerId: "d",
    explanation: "Pulmonary and systemic circulations are separate; blood returns to the heart between them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q23",
    prompt: "Guard cells control \u2014",
    options: [
      { id: "a", text: "heart rate" },
      { id: "b", text: "urine volume only" },
      { id: "c", text: "stomatal opening" },
      { id: "d", text: "bone growth" }
    ],
    answerId: "c",
    explanation: "Guard cells swell to open the stomatal pore and shrink to close it. 'Urine volume only' is tempting because it is also about controlling water, but that is the kidney's job.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q24",
    prompt: "Dialysis is used when \u2014",
    options: [
      { id: "a", text: "liver makes too much bile" },
      { id: "b", text: "kidneys fail to filter blood" },
      { id: "c", text: "lungs lack alveoli temporarily for fun" },
      { id: "d", text: "stomach lacks acid" }
    ],
    answerId: "b",
    explanation: "Dialysis filters the blood with a machine when the kidneys fail. 'Liver makes too much bile' is tempting because the liver is also an organ that cleans the blood, but dialysis does the kidneys' job.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-sci-life-b-q01",
    prompt: "Before testing a leaf for starch, a potted plant is kept in the dark for about two days. Why?",
    options: [
      { id: "a", text: "To increase the amount of chlorophyll" },
      { id: "b", text: "To make all the stomata open" },
      { id: "c", text: "To use up the starch already stored in the leaves" },
      { id: "d", text: "To kill the leaf cells so that iodine can enter" }
    ],
    answerId: "c",
    explanation: "In the dark the plant cannot photosynthesise, so it uses up the starch already in its leaves (destarching). Any starch found after exposure to light must then be newly made. Opening stomata is tempting, but stomata usually close in the dark and that has nothing to do with stored starch.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q02",
    prompt: "Oxygen released in photosynthesis comes mainly from \u2014",
    options: [
      { id: "a", text: "carbon dioxide" },
      { id: "b", text: "water" },
      { id: "c", text: "soil minerals" },
      { id: "d", text: "glucose" }
    ],
    answerId: "b",
    explanation: "The O₂ given out in photosynthesis comes from splitting water molecules. Carbon dioxide is tempting because it contains oxygen, but its oxygen ends up in glucose.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q03",
    prompt: "Peristalsis is \u2014",
    options: [
      { id: "a", text: "leaf folding" },
      { id: "b", text: "blood clotting" },
      { id: "c", text: "urine storage only" },
      { id: "d", text: "wave-like muscle movement pushing food" }
    ],
    answerId: "d",
    explanation: "Peristalsis is a wave of muscle contractions that pushes food along the gut. 'Blood clotting' is tempting because it is also a body process, but it has nothing to do with moving food.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q04",
    prompt: "Emulsification of fats is done by \u2014",
    options: [
      { id: "a", text: "bile salts" },
      { id: "b", text: "amylase" },
      { id: "c", text: "pepsin" },
      { id: "d", text: "HCl alone" }
    ],
    answerId: "a",
    explanation: "Bile salts break large fat drops into tiny droplets so lipase can work faster. 'Pepsin' is tempting because it is a digestive enzyme, but it digests protein, not fat.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q05",
    prompt: "Alveoli are adapted for gas exchange by having \u2014",
    options: [
      { id: "a", text: "large surface area and thin walls" },
      { id: "b", text: "nephrons" },
      { id: "c", text: "chloroplasts" },
      { id: "d", text: "thick cartilage only" }
    ],
    answerId: "a",
    explanation: "Millions of thin-walled alveoli give a huge surface next to capillaries for quick gas exchange. 'Thick cartilage only' is tempting because cartilage supports the airways, but thick walls would slow gas exchange.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q06",
    prompt: "Lymph \u2014",
    options: [
      { id: "a", text: "is identical to pure water" },
      { id: "b", text: "is made in alveoli" },
      { id: "c", text: "carries oxygen mainly via haemoglobin" },
      { id: "d", text: "returns tissue fluid to blood and helps immunity" }
    ],
    answerId: "d",
    explanation: "Lymph carries extra tissue fluid back to the blood and its white cells help fight infection. 'Carries oxygen mainly via haemoglobin' is tempting because lymph comes from blood, but it has no red blood cells.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q07",
    prompt: "Sphygmomanometer measures \u2014",
    options: [
      { id: "a", text: "body temperature only" },
      { id: "b", text: "blood sugar only" },
      { id: "c", text: "blood pressure" },
      { id: "d", text: "lung volume only" }
    ],
    answerId: "c",
    explanation: "A sphygmomanometer measures blood pressure. 'Body temperature only' is tempting because it is also a doctor's instrument, but temperature is measured with a thermometer.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q08",
    prompt: "In plants, transport of water is mainly driven by \u2014",
    options: [
      { id: "a", text: "transpiration pull" },
      { id: "b", text: "blood pressure" },
      { id: "c", text: "bile flow" },
      { id: "d", text: "peristalsis" }
    ],
    answerId: "a",
    explanation: "Evaporation from leaves creates a pull that draws water up the xylem. 'Blood pressure' is tempting because it moves fluid in animals, but plants have no heart or blood.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q09",
    prompt: "Ammonia is highly toxic; humans convert it to \u2014",
    options: [
      { id: "a", text: "oxygen in lungs" },
      { id: "b", text: "glucose in muscle" },
      { id: "c", text: "starch in leaves" },
      { id: "d", text: "urea in the liver" }
    ],
    answerId: "d",
    explanation: "The liver turns toxic ammonia into less harmful urea, which the kidneys remove. 'Glucose in muscle' is tempting, but glucose has no nitrogen and cannot hold the ammonia's nitrogen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q10",
    prompt: "Capillaries are \u2014",
    options: [
      { id: "a", text: "the largest arteries" },
      { id: "b", text: "valves in veins only" },
      { id: "c", text: "thin-walled vessels for exchange with tissues" },
      { id: "d", text: "air sacs" }
    ],
    answerId: "c",
    explanation: "Capillaries have walls one cell thick, so substances pass between blood and tissues. 'The largest arteries' is tempting because they are also blood vessels, but capillaries are the smallest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q11",
    prompt: "HCl in the stomach \u2014",
    options: [
      { id: "a", text: "digests cellulose fully" },
      { id: "b", text: "kills microbes and activates pepsin" },
      { id: "c", text: "makes bile" },
      { id: "d", text: "absorbs vitamins" }
    ],
    answerId: "b",
    explanation: "Stomach HCl kills germs and gives the acid conditions pepsin needs to work. 'Makes bile' is tempting because both act on food, but the liver makes bile.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q12",
    prompt: "Aerobic respiration equation overall:",
    options: [
      { id: "a", text: "6CO\u2082 \u2192 glucose in animals" },
      { id: "b", text: "C\u2086H\u2081\u2082O\u2086 \u2192 lactic acid only" },
      { id: "c", text: "N\u2082 + O\u2082 \u2192 protein" },
      { id: "d", text: "C\u2086H\u2081\u2082O\u2086 + 6O\u2082 \u2192 6CO\u2082 + 6H\u2082O + energy" }
    ],
    answerId: "d",
    explanation: "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy. 'C₆H₁₂O₆ → lactic acid only' is tempting because it also starts with glucose, but that is anaerobic respiration in muscles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q13",
    prompt: "Valves in veins \u2014",
    options: [
      { id: "a", text: "secrete enzymes" },
      { id: "b", text: "prevent backflow of blood" },
      { id: "c", text: "produce RBCs" },
      { id: "d", text: "filter urea" }
    ],
    answerId: "b",
    explanation: "Vein valves let blood flow only towards the heart and stop it flowing back. 'Produce RBCs' is tempting because both concern blood, but red blood cells are made in bone marrow.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q14",
    prompt: "Bowman's capsule is part of \u2014",
    options: [
      { id: "a", text: "nephron filtration" },
      { id: "b", text: "alveolus" },
      { id: "c", text: "villus" },
      { id: "d", text: "stomata" }
    ],
    answerId: "a",
    explanation: "Bowman's capsule is the cup of the nephron that surrounds the glomerulus and filters the blood. The alveolus is tempting because it is also a cup-shaped sac, but it is in the lungs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q15",
    prompt: "Paramecium takes food by \u2014",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "photosynthesis" },
      { id: "c", text: "stomata" },
      { id: "d", text: "cilia sweeping into oral groove" }
    ],
    answerId: "d",
    explanation: "Paramecium's cilia beat to sweep food into its oral groove. 'Photosynthesis' is tempting because it is a single-celled organism like some algae, but Paramecium has no chloroplasts.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q16",
    prompt: "ATP is \u2014",
    options: [
      { id: "a", text: "a waste like urea" },
      { id: "b", text: "a respiratory pigment" },
      { id: "c", text: "a plant hormone only" },
      { id: "d", text: "an energy currency of cells" }
    ],
    answerId: "d",
    explanation: "ATP stores energy that cells can use at once, so it is called the cell's energy currency. 'A respiratory pigment' is tempting because ATP is linked to respiration, but pigments like haemoglobin carry oxygen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q17",
    prompt: "Desert plants often have \u2014",
    options: [
      { id: "a", text: "only phloem, no xylem" },
      { id: "b", text: "no roots" },
      { id: "c", text: "sunken stomata / thick cuticle to reduce water loss" },
      { id: "d", text: "gills" }
    ],
    answerId: "c",
    explanation: "Sunken stomata and a thick waxy cuticle cut down water loss in dry places. 'No roots' is tempting because water is scarce, but desert plants usually have long roots to reach water.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q18",
    prompt: "Blood group antibodies are found in \u2014",
    options: [
      { id: "a", text: "plasma" },
      { id: "b", text: "platelets only" },
      { id: "c", text: "only inside RBCs haemoglobin" },
      { id: "d", text: "bone matrix" }
    ],
    answerId: "a",
    explanation: "Blood-group antibodies float in the plasma. 'Only inside RBCs haemoglobin' is tempting because blood groups depend on red cells, but red cells carry the antigens; the antibodies are in plasma.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q19",
    prompt: "The pancreas secretes \u2014",
    options: [
      { id: "a", text: "only urea" },
      { id: "b", text: "only bile" },
      { id: "c", text: "digestive enzymes and hormones (insulin/glucagon)" },
      { id: "d", text: "only HCl" }
    ],
    answerId: "c",
    explanation: "The pancreas releases digestive enzymes into the intestine and the hormones insulin and glucagon into the blood. 'Only bile' is tempting because bile also enters the intestine, but bile comes from the liver.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q20",
    prompt: "During heavy exercise, breathing rate rises to \u2014",
    options: [
      { id: "a", text: "supply more O\u2082 and remove more CO\u2082" },
      { id: "b", text: "cool blood by stopping heart" },
      { id: "c", text: "close all alveoli" },
      { id: "d", text: "stop respiration" }
    ],
    answerId: "a",
    explanation: "Working muscles need more oxygen and make more CO₂, so we breathe faster. 'Stop respiration' is tempting only if you mix up breathing and respiration, but cells respire faster, not slower.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q21",
    prompt: "Saprophytic nutrition is seen in \u2014",
    options: [
      { id: "a", text: "green leaves only" },
      { id: "b", text: "fungi like mushrooms on dead matter" },
      { id: "c", text: "fish gills" },
      { id: "d", text: "human stomach only" }
    ],
    answerId: "b",
    explanation: "Saprophytes like mushrooms feed on dead and decaying matter. 'Green leaves only' is tempting because leaves also make or use food, but green leaves make their own food by photosynthesis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q22",
    prompt: "The correct path of urine is \u2014",
    options: [
      { id: "a", text: "liver \u2192 ureter \u2192 skin" },
      { id: "b", text: "kidney \u2192 ureter \u2192 bladder \u2192 urethra" },
      { id: "c", text: "bladder \u2192 kidney \u2192 ureter" },
      { id: "d", text: "kidney \u2192 urethra \u2192 bladder" }
    ],
    answerId: "b",
    explanation: "Urine is made in the kidney, flows down the ureter, is stored in the bladder and leaves through the urethra. Kidney → urethra → bladder is tempting because the parts are right, but the order is wrong: the bladder comes before the urethra.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q23",
    prompt: "Chlorophyll appears green because it \u2014",
    options: [
      { id: "a", text: "is made of iron oxide" },
      { id: "b", text: "absorbs only green" },
      { id: "c", text: "reflects green wavelengths mainly" },
      { id: "d", text: "emits only X-rays" }
    ],
    answerId: "c",
    explanation: "Chlorophyll absorbs mainly red and blue light and reflects green, so leaves look green. 'Absorbs only green' is tempting, but a colour that is absorbed cannot reach our eyes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q24",
    prompt: "Why is the wall of the left ventricle thicker than the right?",
    options: [
      { id: "a", text: "It stores urine" },
      { id: "b", text: "It pumps blood all around the body at higher pressure" },
      { id: "c", text: "It makes bile" },
      { id: "d", text: "It only pumps to lungs" }
    ],
    answerId: "b",
    explanation: "The left ventricle pumps blood to the whole body, so it needs a thicker, stronger wall. 'It only pumps to lungs' is tempting, but that is the right ventricle's job, which needs less pressure.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddec",
    title: "Life Processes",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Living things nutrition, breathe, transport, and excrete.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Nutrition", reveal: "Auto vs hetero; digestion", emoji: "\ud83e\udd57" },
      { label: "Respiration", reveal: "Aerobic vs anaerobic ATP", emoji: "\ud83d\udca8" },
      { label: "Transport", reveal: "Xylem/phloem; blood", emoji: "\ud83e\ude78" },
      { label: "Excretion", reveal: "Nephrons remove urea", emoji: "\ud83e\uddea" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which tissue carries water up a plant?",
    options: [
        { id: "a", text: "Xylem" },
        { id: "b", text: "Phloem only" },
        { id: "c", text: "Blood" },
        { id: "d", text: "Nerves" }
    ],
    answerId: "a",
    why: "Xylem vessels move water and minerals upward.",
    visual: "plant",
    speak: "Which tissue carries water up a plant?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Life processes ready", "Food \u2192 energy", "Gas exchange", "Clean the blood"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10ScienceLifeProcesses: ChapterDef = {
  id: "life-processes",
  title: "Life Processes",
  emoji: "\ud83e\uddec",
  blurb: "Nutrition, breath, transport, excretion",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "plant",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "plant",
      questions: SET_B,
    },
  ],
  paperTopics: ["plant"],
};

export const g10ScienceLifeProcessesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
