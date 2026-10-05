import type { ChapterDef, PrepQuestion } from "../types";

/** Cell Structure - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-cells-a-q01",
    prompt: "Who first used the word \"cell\" to describe the tiny box-like spaces he saw under a microscope?",
    options: [
      { id: "a", text: "Anton van Leeuwenhoek" },
      { id: "b", text: "Robert Hooke" },
      { id: "c", text: "Robert Brown" },
      { id: "d", text: "Matthias Schleiden" }
    ],
    answerId: "b",
    explanation: "Robert Hooke used the word \"cell\" in 1665 after looking at a thin slice of cork. The spaces reminded him of small rooms. Leeuwenhoek was the first to see living cells, and Robert Brown discovered the nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q02",
    prompt: "When Robert Hooke looked at his first cells in 1665, what material was he observing?",
    options: [
      { id: "a", text: "Onion peel" },
      { id: "b", text: "Human cheek lining" },
      { id: "c", text: "A green leaf" },
      { id: "d", text: "A thin slice of cork" }
    ],
    answerId: "d",
    explanation: "Hooke looked at cork, which comes from tree bark. Cork cells are dead, so he saw only their empty walls arranged like a honeycomb, not any living contents.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q03",
    prompt: "What is called the basic structural and functional unit of all living things?",
    options: [
      { id: "a", text: "Cell" },
      { id: "b", text: "Tissue" },
      { id: "c", text: "Organ" },
      { id: "d", text: "Nucleus" }
    ],
    answerId: "a",
    explanation: "Every living thing is made of one or more cells, and every life activity happens inside cells. Tissues and organs are made of cells, and the nucleus is only one part of a cell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q04",
    prompt: "Which part of a compound microscope keeps the glass slide firmly in place on the stage?",
    options: [
      { id: "a", text: "Eyepiece" },
      { id: "b", text: "Objective lens" },
      { id: "c", text: "Stage clips" },
      { id: "d", text: "Coarse adjustment knob" }
    ],
    answerId: "c",
    explanation: "Stage clips press the slide onto the stage so it does not slide around. The eyepiece and objective lens magnify the image, and the coarse adjustment knob is used for focusing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q05",
    prompt: "The cell membrane is called selectively permeable. What does this mean?",
    options: [
      { id: "a", text: "It lets every substance pass freely" },
      { id: "b", text: "It stops every substance from passing" },
      { id: "c", text: "It lets some substances pass in and out but blocks others" },
      { id: "d", text: "It is made of tough cellulose" }
    ],
    answerId: "c",
    explanation: "\"Selectively permeable\" means the membrane chooses what passes. Useful things such as water and oxygen can enter, and wastes can leave, while many other substances are kept out. Cellulose makes up the plant cell wall, not the membrane.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q06",
    prompt: "Which organelle is called the powerhouse of the cell because it releases energy from food?",
    options: [
      { id: "a", text: "Mitochondria" },
      { id: "b", text: "Ribosomes" },
      { id: "c", text: "Vacuole" },
      { id: "d", text: "Cell wall" }
    ],
    answerId: "a",
    explanation: "Mitochondria break down food such as glucose using oxygen, which releases energy the cell can use. This is called respiration. Cells that work hard, such as muscle cells, have many mitochondria.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q07",
    prompt: "Which of these structures is found in plant cells but NOT in animal cells?",
    options: [
      { id: "a", text: "Cell membrane" },
      { id: "b", text: "Nucleus" },
      { id: "c", text: "Mitochondria" },
      { id: "d", text: "Cell wall" }
    ],
    answerId: "d",
    explanation: "Plant and animal cells both have a cell membrane, a nucleus, and mitochondria. Only plant cells have a cell wall, a stiff outer layer that sits outside the cell membrane.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q08",
    prompt: "What is the plant cell wall mainly made of?",
    options: [
      { id: "a", text: "Protein" },
      { id: "b", text: "Cellulose" },
      { id: "c", text: "Starch" },
      { id: "d", text: "Chitin" }
    ],
    answerId: "b",
    explanation: "The plant cell wall is made mostly of cellulose, a strong carbohydrate made of long fibres. Starch is stored food, not a wall material. Chitin is found in the cell walls of fungi and in insect shells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q09",
    prompt: "Which green pigment inside chloroplasts traps sunlight for photosynthesis?",
    options: [
      { id: "a", text: "Chlorophyll" },
      { id: "b", text: "Haemoglobin" },
      { id: "c", text: "Melanin" },
      { id: "d", text: "Carotene" }
    ],
    answerId: "a",
    explanation: "Chlorophyll is the green pigment that absorbs light energy so the plant can make food. Haemoglobin carries oxygen in our blood, and melanin colours our skin. Carotene is yellow-orange, not green.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q10",
    prompt: "What is the jelly-like substance between the cell membrane and the nucleus called?",
    options: [
      { id: "a", text: "Nucleoplasm" },
      { id: "b", text: "Protoplasm" },
      { id: "c", text: "Cytoplasm" },
      { id: "d", text: "Vacuole" }
    ],
    answerId: "c",
    explanation: "Cytoplasm is the jelly-like material that holds the organelles. Nucleoplasm is the fluid inside the nucleus. Protoplasm means all the living contents of the cell, which is the cytoplasm and the nucleus together.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q11",
    prompt: "Which of the following organisms is made of just one cell?",
    options: [
      { id: "a", text: "Earthworm" },
      { id: "b", text: "Amoeba" },
      { id: "c", text: "Mushroom" },
      { id: "d", text: "Hydra" }
    ],
    answerId: "b",
    explanation: "Amoeba is unicellular: one cell carries out feeding, breathing, moving, and reproducing. Earthworms, mushrooms, and Hydra are all multicellular, even though Hydra and mushrooms look simple.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q12",
    prompt: "Where are genes, which carry characteristics from parents to offspring, found in a cell?",
    options: [
      { id: "a", text: "In the cell wall" },
      { id: "b", text: "In the vacuole" },
      { id: "c", text: "In the cytoplasm only" },
      { id: "d", text: "On the chromosomes in the nucleus" }
    ],
    answerId: "d",
    explanation: "Genes are found on thread-like chromosomes inside the nucleus. This is why the nucleus controls the cell's activities and passes on characteristics from one generation to the next.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q13",
    prompt: "A student stains onion peel and sees brick-shaped cells with a thick, clear boundary around each one. What mainly forms this thick boundary?",
    options: [
      { id: "a", text: "Cell membrane" },
      { id: "b", text: "Cytoplasm" },
      { id: "c", text: "Nucleus" },
      { id: "d", text: "Cell wall" }
    ],
    answerId: "d",
    explanation: "Onion peel is plant tissue, so each cell has a rigid cell wall outside its thin membrane. The thick, neat outline that makes onion cells look like bricks comes from the cell wall.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q14",
    prompt: "A student stains human cheek cells with methylene blue and looks at them under a microscope. Which structure will she NOT see?",
    options: [
      { id: "a", text: "Nucleus" },
      { id: "b", text: "Cell wall" },
      { id: "c", text: "Cell membrane" },
      { id: "d", text: "Cytoplasm" }
    ],
    answerId: "b",
    explanation: "Cheek cells are animal cells, so they have no cell wall. She will see a thin cell membrane, cytoplasm, and a darkly stained nucleus. Because there is no wall, cheek cells look irregular and flat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q15",
    prompt: "A plant cell is placed in very salty water, and its contents shrink away from the cell wall. Which part of the cell loses the most water?",
    options: [
      { id: "a", text: "Nucleus" },
      { id: "b", text: "Cell wall" },
      { id: "c", text: "Large central vacuole" },
      { id: "d", text: "Chloroplast" }
    ],
    answerId: "c",
    explanation: "Water moves out of the cell into the salty water. The large central vacuole holds most of the cell's water, so it shrinks the most and pulls the cell membrane away from the wall. The stiff wall keeps its shape.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q16",
    prompt: "A microscope has a 10x eyepiece and a 40x objective lens. What is the total magnification?",
    options: [
      { id: "a", text: "400x" },
      { id: "b", text: "50x" },
      { id: "c", text: "4x" },
      { id: "d", text: "4000x" }
    ],
    answerId: "a",
    explanation: "To find total magnification, multiply the eyepiece power by the objective power: 10 x 40 = 400. The object looks 400 times bigger. Adding the numbers (50x) is a common mistake.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q17",
    prompt: "Cells from the root of a carrot or a potato tuber usually do NOT have which structure?",
    options: [
      { id: "a", text: "Mitochondria" },
      { id: "b", text: "Chloroplasts" },
      { id: "c", text: "Nucleus" },
      { id: "d", text: "Cell wall" }
    ],
    answerId: "b",
    explanation: "Roots and tubers grow underground, where there is no light, so their cells do not need chloroplasts. They still have a nucleus, mitochondria, and a cell wall, and they often store food such as starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q18",
    prompt: "Nerve cells are long and have many branches. How does this shape help them?",
    options: [
      { id: "a", text: "It helps them carry messages over long distances" },
      { id: "b", text: "It helps them store food" },
      { id: "c", text: "It helps them make food by photosynthesis" },
      { id: "d", text: "It helps them engulf germs" }
    ],
    answerId: "a",
    explanation: "A cell's shape suits its job. Long, branched nerve cells can receive and pass messages between the brain and distant parts of the body. White blood cells, on the other hand, change shape to engulf germs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q19",
    prompt: "Amoeba has no fixed shape. Which structures does it push out to move and to catch food?",
    options: [
      { id: "a", text: "Cilia" },
      { id: "b", text: "Flagella" },
      { id: "c", text: "Cell wall" },
      { id: "d", text: "Pseudopodia" }
    ],
    answerId: "d",
    explanation: "Pseudopodia means \"false feet\". They are finger-like bulges of cytoplasm. Amoeba pushes them out to creep forward and to surround its food. Paramecium moves with cilia, and some bacteria use flagella.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q20",
    prompt: "A cell has no nuclear membrane, and its genetic material lies loose in the cytoplasm. This cell most likely belongs to which organism?",
    options: [
      { id: "a", text: "Amoeba" },
      { id: "b", text: "Paramecium" },
      { id: "c", text: "A bacterium" },
      { id: "d", text: "Yeast" }
    ],
    answerId: "c",
    explanation: "Bacteria are prokaryotes: their nuclear material has no membrane around it. Amoeba, Paramecium, and yeast are eukaryotes, which means they have a proper nucleus enclosed by a nuclear membrane.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q21",
    prompt: "Which order correctly shows the levels of organisation in a multicellular organism, from simplest to most complex?",
    options: [
      { id: "a", text: "Organ, tissue, cell, organ system" },
      { id: "b", text: "Tissue, cell, organ, organ system" },
      { id: "c", text: "Cell, tissue, organ, organ system" },
      { id: "d", text: "Cell, organ, tissue, organ system" }
    ],
    answerId: "c",
    explanation: "Similar cells group together to form a tissue. Different tissues form an organ, such as the stomach. Several organs working together form an organ system, such as the digestive system.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q22",
    prompt: "A cell has a cell wall and a large central vacuole but no chloroplasts. Where is it most likely taken from?",
    options: [
      { id: "a", text: "A leaf of a green plant" },
      { id: "b", text: "Human skin" },
      { id: "c", text: "Frog blood" },
      { id: "d", text: "Onion bulb peel" }
    ],
    answerId: "d",
    explanation: "The cell wall and large vacuole tell us it is a plant cell. A leaf cell would have chloroplasts. Onion bulb scales grow underground, away from light, so their cells have no chloroplasts. Skin and blood cells have no cell wall.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q23",
    prompt: "If the mitochondria in a muscle cell suddenly stopped working, what would the cell run short of first?",
    options: [
      { id: "a", text: "Energy for its activities" },
      { id: "b", text: "Its cell wall" },
      { id: "c", text: "Chlorophyll" },
      { id: "d", text: "Genetic information" }
    ],
    answerId: "a",
    explanation: "Mitochondria release energy from food during respiration. Without them, a muscle cell could not get enough energy to contract. Muscle cells have no cell wall or chlorophyll, and genetic information is kept in the nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-a-q24",
    prompt: "Why do plant cells need a cell wall, while animal cells can do without one?",
    options: [
      { id: "a", text: "Plants need a wall so they can move about" },
      { id: "b", text: "The wall gives plant cells strength and shape, since plants have no skeleton and must stand upright" },
      { id: "c", text: "The wall is where plants make their food" },
      { id: "d", text: "The wall stores the plant's genes" }
    ],
    answerId: "b",
    explanation: "Plants cannot move away from wind or other stresses, and they have no bones. Stiff cellulose walls give each cell strength and shape, which helps the whole plant stand tall. Food is made in chloroplasts, and genes are kept in the nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-cells-b-q01",
    prompt: "Who first saw living cells, such as bacteria in pond water, using simple microscopes he made himself?",
    options: [
      { id: "a", text: "Anton van Leeuwenhoek" },
      { id: "b", text: "Robert Hooke" },
      { id: "c", text: "Robert Brown" },
      { id: "d", text: "Charles Darwin" }
    ],
    answerId: "a",
    explanation: "In the 1670s, Leeuwenhoek ground his own high-quality lenses and saw tiny living things moving in water. Hooke had seen only dead cork cells. Brown discovered the nucleus later, in 1831.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q02",
    prompt: "Who discovered the nucleus of the cell?",
    options: [
      { id: "a", text: "Robert Hooke" },
      { id: "b", text: "Theodor Schwann" },
      { id: "c", text: "Robert Brown" },
      { id: "d", text: "Anton van Leeuwenhoek" }
    ],
    answerId: "c",
    explanation: "In 1831, Robert Brown noticed a dark round body in the cells of orchid leaves and named it the nucleus. Schwann helped put forward the cell theory.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q03",
    prompt: "Which statement best describes the cell theory?",
    options: [
      { id: "a", text: "All cells have a cell wall" },
      { id: "b", text: "All living things are made of cells, and new cells come from existing cells" },
      { id: "c", text: "Cells are found only in animals" },
      { id: "d", text: "Cells can form from non-living matter" }
    ],
    answerId: "b",
    explanation: "Scientists including Schleiden, Schwann, and later Virchow showed that every living thing is made of cells and that new cells come only from cells that already exist. Not every cell has a wall, and cells do not form from non-living matter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q04",
    prompt: "Which of these is usually given as the largest single cell?",
    options: [
      { id: "a", text: "A nerve cell" },
      { id: "b", text: "A red blood cell" },
      { id: "c", text: "An Amoeba" },
      { id: "d", text: "An ostrich egg" }
    ],
    answerId: "d",
    explanation: "Before development begins, a bird's egg yolk is a single cell, and the ostrich egg is the biggest of these. Most cells, however, are too small to see without a microscope.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q05",
    prompt: "Which unit is most suitable for measuring the size of most cells?",
    options: [
      { id: "a", text: "Kilometre" },
      { id: "b", text: "Micrometre" },
      { id: "c", text: "Litre" },
      { id: "d", text: "Kilogram" }
    ],
    answerId: "b",
    explanation: "A micrometre (one-millionth of a metre) is the right scale for cells. For example, a human red blood cell is about 7 micrometres across. Litres measure volume and kilograms measure mass, not length.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q06",
    prompt: "Which organelle stores water, salts, and wastes, and is very large in a mature plant cell?",
    options: [
      { id: "a", text: "Ribosome" },
      { id: "b", text: "Mitochondrion" },
      { id: "c", text: "Nucleolus" },
      { id: "d", text: "Vacuole" }
    ],
    answerId: "d",
    explanation: "The vacuole is a sac filled with cell sap. In plant cells, one large central vacuole stores water and keeps the cell firm. Animal cells have only small vacuoles, if any.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q07",
    prompt: "What is the small, dense, round body found inside the nucleus called?",
    options: [
      { id: "a", text: "Nucleolus" },
      { id: "b", text: "Chloroplast" },
      { id: "c", text: "Ribosome" },
      { id: "d", text: "Vacuole" }
    ],
    answerId: "a",
    explanation: "The nucleolus sits inside the nucleus and helps make ribosomes. Chloroplasts and vacuoles are found in the cytoplasm, not inside the nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q08",
    prompt: "Which part of the cell controls what enters and leaves it?",
    options: [
      { id: "a", text: "Cell wall" },
      { id: "b", text: "Nucleus" },
      { id: "c", text: "Cell membrane" },
      { id: "d", text: "Vacuole" }
    ],
    answerId: "c",
    explanation: "The cell membrane is selectively permeable, so it decides which materials pass through. The plant cell wall lets almost everything through; its job is support and protection.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q09",
    prompt: "Which of the following organisms is multicellular?",
    options: [
      { id: "a", text: "Paramecium" },
      { id: "b", text: "Chlamydomonas" },
      { id: "c", text: "Yeast" },
      { id: "d", text: "Hydra" }
    ],
    answerId: "d",
    explanation: "Hydra is a small freshwater animal made of many cells arranged in layers. Paramecium, Chlamydomonas (a green alga), and yeast (a fungus) are each made of just one cell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q10",
    prompt: "What is the coarse adjustment knob of a microscope used for?",
    options: [
      { id: "a", text: "To bring the object roughly into focus by making large movements" },
      { id: "b", text: "To control the amount of light" },
      { id: "c", text: "To hold the slide in place" },
      { id: "d", text: "To change the eyepiece" }
    ],
    answerId: "a",
    explanation: "The coarse knob moves the tube or stage over a large distance to bring the object roughly into focus. The fine adjustment knob then sharpens the image. Light is controlled by the mirror and diaphragm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q11",
    prompt: "What shape is a human red blood cell?",
    options: [
      { id: "a", text: "Long and branched" },
      { id: "b", text: "Spindle-shaped" },
      { id: "c", text: "Disc-shaped and dented in the middle on both sides (biconcave)" },
      { id: "d", text: "Rectangular with a thick wall" }
    ],
    answerId: "c",
    explanation: "The biconcave disc gives each red blood cell a large surface for taking in and giving out oxygen. It also lets the cell bend and squeeze through narrow blood vessels. Mature human red blood cells have no nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q12",
    prompt: "Muscle cells that help us move are shaped like a spindle (wide in the middle, tapering at both ends). What does this shape help them do?",
    options: [
      { id: "a", text: "Store large amounts of water" },
      { id: "b", text: "Shorten and lengthen (contract and relax)" },
      { id: "c", text: "Carry oxygen" },
      { id: "d", text: "Make food" }
    ],
    answerId: "b",
    explanation: "Long, spindle-shaped muscle cells can contract and relax, which pulls on body parts to move them. Red blood cells carry oxygen, and plant leaf cells make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q13",
    prompt: "Why do we add a stain such as methylene blue or safranin when preparing a cell slide?",
    options: [
      { id: "a", text: "Most cell parts are nearly colourless, and the stain makes them easier to see" },
      { id: "b", text: "The stain kills germs on the slide" },
      { id: "c", text: "The stain makes the cells grow bigger" },
      { id: "d", text: "The stain gives the cells energy" }
    ],
    answerId: "a",
    explanation: "Cell parts are mostly transparent. Stains colour some parts, especially the nucleus, more strongly than others, so the parts stand out. Stains do not enlarge cells; the lenses do the magnifying.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q14",
    prompt: "While preparing an onion peel slide, a student adds a drop of glycerine before placing the cover slip. Why?",
    options: [
      { id: "a", text: "To give the cells colour" },
      { id: "b", text: "To stop the peel from drying out" },
      { id: "c", text: "To kill the cells" },
      { id: "d", text: "To magnify the cells" }
    ],
    answerId: "b",
    explanation: "Glycerine keeps the thin peel moist, so the cells do not dry out and wrinkle while they are being observed. Colour comes from a stain such as safranin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q15",
    prompt: "A cell has a nucleus, a cell wall, and many chloroplasts. Where could it have come from?",
    options: [
      { id: "a", text: "Human cheek" },
      { id: "b", text: "A bacterium" },
      { id: "c", text: "An Amoeba" },
      { id: "d", text: "A Hydrilla leaf" }
    ],
    answerId: "d",
    explanation: "A cell wall together with chloroplasts points to a green plant cell, such as one from a Hydrilla leaf. Cheek cells and Amoeba have no cell wall or chloroplasts, and a bacterium has no proper nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q16",
    prompt: "Which organelle is correctly matched with its function?",
    options: [
      { id: "a", text: "Chloroplast: releasing energy from food" },
      { id: "b", text: "Nucleus: photosynthesis" },
      { id: "c", text: "Ribosome: making proteins" },
      { id: "d", text: "Cell wall: controlling heredity" }
    ],
    answerId: "c",
    explanation: "Ribosomes are tiny structures where proteins are made. Chloroplasts carry out photosynthesis, mitochondria release energy, and the nucleus controls heredity. The cell wall gives support.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q17",
    prompt: "A microscope has a 15x eyepiece and a 10x objective. What is the total magnification?",
    options: [
      { id: "a", text: "25x" },
      { id: "b", text: "1.5x" },
      { id: "c", text: "150x" },
      { id: "d", text: "1500x" }
    ],
    answerId: "c",
    explanation: "Multiply the two lens powers: 15 x 10 = 150, so the object looks 150 times larger. Adding them (25x) or dividing them (1.5x) does not give the magnification.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q18",
    prompt: "Why is the heart called an organ?",
    options: [
      { id: "a", text: "It is made of different tissues that work together to do one job" },
      { id: "b", text: "It is made of a single large cell" },
      { id: "c", text: "It is made of only one kind of tissue" },
      { id: "d", text: "It is a group of organ systems" }
    ],
    answerId: "a",
    explanation: "An organ is made of several kinds of tissue, such as muscle, nerve, and connective tissue, that work together. In the heart, they work together to pump blood. The heart is one part of the circulatory system.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q19",
    prompt: "Which group contains only tissues?",
    options: [
      { id: "a", text: "Stomach, liver, heart" },
      { id: "b", text: "Blood, xylem, epithelium" },
      { id: "c", text: "Amoeba, yeast, bacteria" },
      { id: "d", text: "Digestive, nervous, respiratory systems" }
    ],
    answerId: "b",
    explanation: "Blood, xylem (water-carrying tissue in plants), and epithelium (lining tissue) are all groups of similar cells. The first group are organs, the third are unicellular organisms, and the last are organ systems.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q20",
    prompt: "An elephant is much bigger than a mouse. Comparing similar cells, such as liver cells, from both animals, which statement is correct?",
    options: [
      { id: "a", text: "Elephant cells are much bigger" },
      { id: "b", text: "An elephant has fewer cells" },
      { id: "c", text: "Each elephant cell does more work" },
      { id: "d", text: "Their cells are about the same size, but the elephant has far more cells" }
    ],
    answerId: "d",
    explanation: "The size of an organism depends on how many cells it has, not on how big each cell is. A given type of cell is roughly the same size in a mouse and an elephant; the elephant simply has many more of them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q21",
    prompt: "Why does an Amoeba not need tissues or organs?",
    options: [
      { id: "a", text: "Its single cell carries out all life activities by itself" },
      { id: "b", text: "It has no nucleus" },
      { id: "c", text: "It is not a living thing" },
      { id: "d", text: "It makes its own food like a plant" }
    ],
    answerId: "a",
    explanation: "In unicellular organisms, one cell takes in food, respires, gets rid of wastes, moves, and reproduces. Tissues are needed only when many cells share out the work. Amoeba does have a nucleus, and it takes in food rather than making it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q22",
    prompt: "In an experiment, the nucleus is carefully removed from an Amoeba. What is the most likely result?",
    options: [
      { id: "a", text: "It grows faster" },
      { id: "b", text: "It starts making chlorophyll" },
      { id: "c", text: "It divides more often" },
      { id: "d", text: "It stops growing and dividing, and soon dies" }
    ],
    answerId: "d",
    explanation: "The nucleus controls the cell's activities and carries the instructions for growth and division. Without it, the Amoeba can survive for only a short time and cannot reproduce. This shows how important the nucleus is.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q23",
    prompt: "Mature human red blood cells have no nucleus. Which of these can they NOT do?",
    options: [
      { id: "a", text: "Carry oxygen" },
      { id: "b", text: "Move through blood vessels" },
      { id: "c", text: "Divide to form new red blood cells" },
      { id: "d", text: "Contain haemoglobin" }
    ],
    answerId: "c",
    explanation: "A cell needs its nucleus to divide. Red blood cells cannot divide, so new ones are made constantly in the bone marrow. Having no nucleus leaves more room for haemoglobin to carry oxygen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-cells-b-q24",
    prompt: "When placed in pure water, an animal cell may swell and burst, but a plant cell only becomes firm. Why?",
    options: [
      { id: "a", text: "Plant cells have no cell membrane" },
      { id: "b", text: "The plant cell's stiff cell wall stops it from bursting" },
      { id: "c", text: "Plant cells have no vacuole" },
      { id: "d", text: "Animal cells have chloroplasts" }
    ],
    answerId: "b",
    explanation: "Water enters both cells. The plant cell swells until it presses against its strong cellulose wall, which stops further swelling and keeps the cell firm. An animal cell has only a thin membrane, so it can burst.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd2c",
    title: "Cell structure",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "atom-lite",
    speak: "The cell is the basic unit of life. Plant cells have a wall and chloroplasts.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "atom-lite",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Cell", reveal: "Basic unit of life", emoji: "\ud83d\udd2c" },
      { label: "Nucleus", reveal: "Control centre", emoji: "\ud83e\uddec" },
      { label: "Mitochondria", reveal: "Powerhouse", emoji: "\u26a1" },
      { label: "Plant extras", reveal: "Cell wall and chloroplasts", emoji: "\ud83c\udf3f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Powerhouse of the cell?",
    options: [
        { id: "a", text: "Nucleus" },
        { id: "b", text: "Mitochondria" },
        { id: "c", text: "Vacuole" },
        { id: "d", text: "Ribosome" }
    ],
    answerId: "b",
    why: "Mitochondria release energy from food.",
    visual: "atom-lite",
    speak: "Powerhouse of the cell?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Cell = unit of life", "Know organelles", "Plant vs animal", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceCells: ChapterDef = {
  id: "cells",
  title: "Cell Structure",
  emoji: "\ud83d\udd2c",
  blurb: "Unit of life",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "cells-basics",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "cells-basics",
      questions: SET_B,
    },
  ],
  paperTopics: ["cells-basics", "living-things"],
};

export const g8ScienceCellsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
