import type { ChapterDef, PrepQuestion } from "../types";

/** Cell & Tissues - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-sci-cell-a-q01",
    prompt: "The basic structural and functional unit of life is the…",
    options: [
      { id: "a", text: "tissue" },
      { id: "b", text: "organ" },
      { id: "c", text: "cell" },
      { id: "d", text: "organism" }
    ],
    answerId: "c",
    explanation: "Cell theory: cell is the basic unit of life.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q02",
    prompt: "Who coined the term “cell” after observing cork?",
    options: [
      { id: "a", text: "Darwin" },
      { id: "b", text: "Robert Hooke" },
      { id: "c", text: "Newton" },
      { id: "d", text: "Mendel" }
    ],
    answerId: "b",
    explanation: "Robert Hooke observed cork cells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q03",
    prompt: "The control centre of the cell that contains genetic material is the…",
    options: [
      { id: "a", text: "mitochondrion" },
      { id: "b", text: "nucleus" },
      { id: "c", text: "ribosome" },
      { id: "d", text: "vacuole" }
    ],
    answerId: "b",
    explanation: "Nucleus houses DNA and controls activities.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q04",
    prompt: "Powerhouse of the cell refers to…",
    options: [
      { id: "a", text: "nucleus" },
      { id: "b", text: "mitochondria" },
      { id: "c", text: "golgi apparatus" },
      { id: "d", text: "cell wall" }
    ],
    answerId: "b",
    explanation: "Mitochondria release energy (cellular respiration).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q05",
    prompt: "Which is present in plant cells but not in typical animal cells?",
    options: [
      { id: "a", text: "mitochondria" },
      { id: "b", text: "cell membrane" },
      { id: "c", text: "cell wall" },
      { id: "d", text: "ribosomes" }
    ],
    answerId: "c",
    explanation: "Rigid cell wall of cellulose is plant-typical.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q06",
    prompt: "Chloroplasts are associated with…",
    options: [
      { id: "a", text: "protein digestion" },
      { id: "b", text: "photosynthesis" },
      { id: "c", text: "nerve signals" },
      { id: "d", text: "bone growth" }
    ],
    answerId: "b",
    explanation: "Chloroplasts trap light to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q07",
    prompt: "A group of similar cells performing a specific function forms a…",
    options: [
      { id: "a", text: "organelle" },
      { id: "b", text: "tissue" },
      { id: "c", text: "organ system only" },
      { id: "d", text: "population" }
    ],
    answerId: "b",
    explanation: "Tissue = group of similar cells with a common function.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q08",
    prompt: "The selectively permeable boundary of an animal cell is the…",
    options: [
      { id: "a", text: "cell wall" },
      { id: "b", text: "plasma membrane" },
      { id: "c", text: "nuclear envelope only" },
      { id: "d", text: "cytoplasm" }
    ],
    answerId: "b",
    explanation: "Plasma/cell membrane controls entry and exit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q09",
    prompt: "Prokaryotic cells lack a…",
    options: [
      { id: "a", text: "cell membrane" },
      { id: "b", text: "true membrane-bound nucleus" },
      { id: "c", text: "DNA of any kind" },
      { id: "d", text: "ribosomes always" }
    ],
    answerId: "b",
    explanation: "Prokaryotes lack a true nucleus; DNA is not in a nuclear envelope.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q10",
    prompt: "Which plant tissue provides rigid support and is usually dead at maturity?",
    options: [
      { id: "a", text: "meristematic tissue" },
      { id: "b", text: "sclerenchyma" },
      { id: "c", text: "blood" },
      { id: "d", text: "nerve tissue" }
    ],
    answerId: "b",
    explanation: "Sclerenchyma is a supporting tissue, typically dead at maturity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q11",
    prompt: "Meristematic tissue in plants is responsible for…",
    options: [
      { id: "a", text: "photosynthesis only" },
      { id: "b", text: "growth by cell division" },
      { id: "c", text: "transport of only water forever without division" },
      { id: "d", text: "storing only fat in animals" }
    ],
    answerId: "b",
    explanation: "Meristems actively divide to allow growth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q12",
    prompt: "Epithelial tissue in animals mainly…",
    options: [
      { id: "a", text: "contracts to move bones" },
      { id: "b", text: "covers body surfaces and lines cavities" },
      { id: "c", text: "carries oxygen as haemoglobin tissue name" },
      { id: "d", text: "stores only starch" }
    ],
    answerId: "b",
    explanation: "Epithelium covers and lines surfaces.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q13",
    prompt: "Large central vacuoles are typical of…",
    options: [
      { id: "a", text: "animal cells" },
      { id: "b", text: "plant cells" },
      { id: "c", text: "viruses" },
      { id: "d", text: "all bacteria without exception in exams always" }
    ],
    answerId: "b",
    explanation: "Mature plant cells often have a large central vacuole.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q14",
    prompt: "Ribosomes help in…",
    options: [
      { id: "a", text: "lipid storage only" },
      { id: "b", text: "protein synthesis" },
      { id: "c", text: "photosynthesis" },
      { id: "d", text: "digestion of food in stomach tissue" }
    ],
    answerId: "b",
    explanation: "Ribosomes assemble proteins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q15",
    prompt: "Xylem mainly transports…",
    options: [
      { id: "a", text: "food from leaves" },
      { id: "b", text: "water and minerals from roots" },
      { id: "c", text: "oxygen in blood" },
      { id: "d", text: "hormones only in animals" }
    ],
    answerId: "b",
    explanation: "Xylem conducts water and minerals upward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q16",
    prompt: "Phloem transports…",
    options: [
      { id: "a", text: "water only upward always" },
      { id: "b", text: "food (sugars) to plant parts" },
      { id: "c", text: "only carbon dioxide" },
      { id: "d", text: "only sunlight" }
    ],
    answerId: "b",
    explanation: "Phloem moves prepared food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q17",
    prompt: "Which organelle packages and dispatches proteins?",
    options: [
      { id: "a", text: "lysosome" },
      { id: "b", text: "golgi apparatus" },
      { id: "c", text: "chloroplast" },
      { id: "d", text: "cell wall" }
    ],
    answerId: "b",
    explanation: "Golgi modifies and packages materials.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q18",
    prompt: "Lysosomes are rich in…",
    options: [
      { id: "a", text: "chlorophyll" },
      { id: "b", text: "digestive enzymes" },
      { id: "c", text: "cellulose only" },
      { id: "d", text: "starch grains only" }
    ],
    answerId: "b",
    explanation: "Lysosomes contain hydrolytic enzymes (suicide bags).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q19",
    prompt: "Connective tissue examples include…",
    options: [
      { id: "a", text: "skin epithelium only" },
      { id: "b", text: "blood, bone and cartilage" },
      { id: "c", text: "xylem" },
      { id: "d", text: "meristem" }
    ],
    answerId: "b",
    explanation: "Blood, bone and cartilage are connective tissues.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q20",
    prompt: "Muscle tissue is specialised for…",
    options: [
      { id: "a", text: "impulse only" },
      { id: "b", text: "contraction and movement" },
      { id: "c", text: "photosynthesis" },
      { id: "d", text: "covering surfaces only" }
    ],
    answerId: "b",
    explanation: "Muscles contract to produce movement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q21",
    prompt: "Nervous tissue is specialised to…",
    options: [
      { id: "a", text: "store fat" },
      { id: "b", text: "transmit impulses" },
      { id: "c", text: "transport water in stems" },
      { id: "d", text: "make glucose in leaves" }
    ],
    answerId: "b",
    explanation: "Neurons transmit electrical/chemical signals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q22",
    prompt: "Which is unicellular?",
    options: [
      { id: "a", text: "mango tree" },
      { id: "b", text: "human" },
      { id: "c", text: "Amoeba" },
      { id: "d", text: "rose plant" }
    ],
    answerId: "c",
    explanation: "Amoeba is a single-celled organism.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q23",
    prompt: "Cell wall of plants is mainly made of…",
    options: [
      { id: "a", text: "chitin only as in all plants" },
      { id: "b", text: "cellulose" },
      { id: "c", text: "peptidoglycan only" },
      { id: "d", text: "keratin" }
    ],
    answerId: "b",
    explanation: "Plant cell walls are chiefly cellulose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q24",
    prompt: "Chromosomes are found in the…",
    options: [
      { id: "a", text: "vacuole" },
      { id: "b", text: "nucleus" },
      { id: "c", text: "cell wall" },
      { id: "d", text: "mitochondrial nickname only never nucleus" }
    ],
    answerId: "b",
    explanation: "Chromosomes reside in the nucleus (as chromatin/chromosomes).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-sci-cell-b-q01",
    prompt: "Who proposed that all cells arise from pre-existing cells?",
    options: [
      { id: "a", text: "Hooke alone" },
      { id: "b", text: "Virchow" },
      { id: "c", text: "Einstein" },
      { id: "d", text: "Lavoisier" }
    ],
    answerId: "b",
    explanation: "Virchow: Omnis cellula e cellula.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q02",
    prompt: "Cytoplasm is…",
    options: [
      { id: "a", text: "the rigid outer wall" },
      { id: "b", text: "the jelly-like substance between membrane and nucleus" },
      { id: "c", text: "only DNA" },
      { id: "d", text: "only air" }
    ],
    answerId: "b",
    explanation: "Cytoplasm fills the cell between membrane and nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q03",
    prompt: "Which cells lack chloroplasts?",
    options: [
      { id: "a", text: "leaf mesophyll cells" },
      { id: "b", text: "typical animal cells" },
      { id: "c", text: "green algal cells with chloroplasts" },
      { id: "d", text: "plant guard cells" }
    ],
    answerId: "b",
    explanation: "Animal cells do not have chloroplasts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q04",
    prompt: "Permanent tissues in plants are formed from…",
    options: [
      { id: "a", text: "blood" },
      { id: "b", text: "meristematic tissues that have lost the ability to divide" },
      { id: "c", text: "only animal epithelium" },
      { id: "d", text: "viruses" }
    ],
    answerId: "b",
    explanation: "Differentiation of meristems yields permanent tissues.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q05",
    prompt: "Parenchyma typically…",
    options: [
      { id: "a", text: "is dead with thick lignin always" },
      { id: "b", text: "is living and soft, often storing food" },
      { id: "c", text: "transmits nerve impulses" },
      { id: "d", text: "contracts like biceps" }
    ],
    answerId: "b",
    explanation: "Parenchyma is living ground tissue, often storage.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q06",
    prompt: "Collenchyma provides…",
    options: [
      { id: "a", text: "flexibility and support to growing plant parts" },
      { id: "b", text: "impulse conduction" },
      { id: "c", text: "oxygen transport in blood" },
      { id: "d", text: "only flower colour" }
    ],
    answerId: "a",
    explanation: "Collenchyma supports young stems/petioles with flexibility.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q07",
    prompt: "The nucleus is separated from cytoplasm by the…",
    options: [
      { id: "a", text: "cell wall" },
      { id: "b", text: "nuclear membrane" },
      { id: "c", text: "xylem" },
      { id: "d", text: "cuticle only" }
    ],
    answerId: "b",
    explanation: "Nuclear envelope/membrane bounds the nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q08",
    prompt: "Mitochondria are more numerous in cells that…",
    options: [
      { id: "a", text: "need little energy" },
      { id: "b", text: "require a lot of energy" },
      { id: "c", text: "are dead xylem vessels only" },
      { id: "d", text: "have no membrane" }
    ],
    answerId: "b",
    explanation: "Active cells need more mitochondria for ATP.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q09",
    prompt: "Which is an example of a connective tissue that is fluid?",
    options: [
      { id: "a", text: "bone" },
      { id: "b", text: "blood" },
      { id: "c", text: "cartilage only" },
      { id: "d", text: "tendon only" }
    ],
    answerId: "b",
    explanation: "Blood is a fluid connective tissue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q10",
    prompt: "Striated muscles are also called…",
    options: [
      { id: "a", text: "smooth muscles" },
      { id: "b", text: "skeletal muscles (voluntary, striped)" },
      { id: "c", text: "cardiac only without stripes" },
      { id: "d", text: "xylem fibres" }
    ],
    answerId: "b",
    explanation: "Skeletal muscles appear striped (striated) and are voluntary.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q11",
    prompt: "Smooth muscles are found in…",
    options: [
      { id: "a", text: "biceps mainly" },
      { id: "b", text: "walls of internal organs (involuntary)" },
      { id: "c", text: "heart only as skeletal" },
      { id: "d", text: "leaf veins" }
    ],
    answerId: "b",
    explanation: "Visceral/smooth muscle is involuntary in organ walls.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q12",
    prompt: "The heart is made of…",
    options: [
      { id: "a", text: "epithelial tissue only" },
      { id: "b", text: "cardiac muscle tissue" },
      { id: "c", text: "only parenchyma" },
      { id: "d", text: "only sclerenchyma" }
    ],
    answerId: "b",
    explanation: "Cardiac muscle is specialised heart muscle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q13",
    prompt: "Plastids that store starch are…",
    options: [
      { id: "a", text: "chloroplasts" },
      { id: "b", text: "leucoplasts (amyloplasts)" },
      { id: "c", text: "chromoplasts that always photosynthesise" },
      { id: "d", text: "lysosomes" }
    ],
    answerId: "b",
    explanation: "Leucoplasts/amyloplasts store starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q14",
    prompt: "Chromoplasts mainly…",
    options: [
      { id: "a", text: "store water" },
      { id: "b", text: "provide colours to flowers/fruits" },
      { id: "c", text: "make ATP only" },
      { id: "d", text: "form cell walls" }
    ],
    answerId: "b",
    explanation: "Chromoplasts hold pigments for colour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q15",
    prompt: "Which feature is absent in prokaryotes?",
    options: [
      { id: "a", text: "ribosomes" },
      { id: "b", text: "membrane-bound organelles like mitochondria" },
      { id: "c", text: "plasma membrane" },
      { id: "d", text: "DNA" }
    ],
    answerId: "b",
    explanation: "Prokaryotes lack membrane-bound organelles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q16",
    prompt: "The outermost layer in plant cells is usually the…",
    options: [
      { id: "a", text: "plasma membrane inside the wall" },
      { id: "b", text: "cell wall" },
      { id: "c", text: "nuclear membrane outside everything" },
      { id: "d", text: "cytoplasm shell" }
    ],
    answerId: "b",
    explanation: "Cell wall is outside the plasma membrane in plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q17",
    prompt: "Tissue that covers the body and protects underlying parts is…",
    options: [
      { id: "a", text: "epithelial tissue" },
      { id: "b", text: "xylem" },
      { id: "c", text: "phloem" },
      { id: "d", text: "meristem only deep inside" }
    ],
    answerId: "a",
    explanation: "Epithelium covers and protects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q18",
    prompt: "Cartilage is a type of…",
    options: [
      { id: "a", text: "epithelial tissue" },
      { id: "b", text: "connective tissue" },
      { id: "c", text: "nervous tissue" },
      { id: "d", text: "meristem" }
    ],
    answerId: "b",
    explanation: "Cartilage is connective tissue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q19",
    prompt: "Who observed living cells (e.g., protozoa) with better microscopes after Hooke?",
    options: [
      { id: "a", text: "Leeuwenhoek" },
      { id: "b", text: "Dalton" },
      { id: "c", text: "Bohr" },
      { id: "d", text: "Faraday" }
    ],
    answerId: "a",
    explanation: "Antonie van Leeuwenhoek observed living microbes/cells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q20",
    prompt: "Cell theory states that…",
    options: [
      { id: "a", text: "all living beings are made of cells / cell products" },
      { id: "b", text: "rocks are made of cells" },
      { id: "c", text: "energy cannot be created" },
      { id: "d", text: "atoms are indivisible" }
    ],
    answerId: "a",
    explanation: "Cell theory concerns organisation of living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q21",
    prompt: "Vacuoles in animal cells are generally…",
    options: [
      { id: "a", text: "larger than in plants" },
      { id: "b", text: "smaller (when present) than the plant central vacuole" },
      { id: "c", text: "made of cellulose wall" },
      { id: "d", text: "absent in all cells forever" }
    ],
    answerId: "b",
    explanation: "Animal vacuoles are smaller/more temporary than plant central vacuoles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q22",
    prompt: "Phloem fibres are…",
    options: [
      { id: "a", text: "always living sieve tubes" },
      { id: "b", text: "supportive components associated with phloem" },
      { id: "c", text: "blood cells" },
      { id: "d", text: "nerve endings" }
    ],
    answerId: "b",
    explanation: "Phloem includes fibres that help support.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q23",
    prompt: "A multicellular organism…",
    options: [
      { id: "a", text: "has only one cell" },
      { id: "b", text: "is made of many cells" },
      { id: "c", text: "cannot have tissues" },
      { id: "d", text: "never grows" }
    ],
    answerId: "b",
    explanation: "Multi- = many cells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q24",
    prompt: "The organelle involved in photosynthesis contains the pigment…",
    options: [
      { id: "a", text: "haemoglobin" },
      { id: "b", text: "chlorophyll" },
      { id: "c", text: "melanin only" },
      { id: "d", text: "keratin" }
    ],
    answerId: "b",
    explanation: "Chlorophyll in chloroplasts captures light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🔬",
    title: "Cells and tissues",
    body: ["Cells build tissues; organelles divide the labour.", "Plant and animal cells share much — and differ in walls and chloroplasts.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "plant",
    speak: "Cell organelles and an introduction to tissues.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Nucleus", reveal: "Control centre with genetic material", emoji: "🧬" },
      { label: "Mitochondria", reveal: "Energy release", emoji: "⚡" },
      { label: "Plant extras", reveal: "Cell wall, chloroplasts, large vacuole", emoji: "🌿" },
      { label: "Tissues", reveal: "Similar cells with a shared job", emoji: "🧱" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Plant vs animal cell",
    visual: "plant",
    speak: "Both have membrane, cytoplasm and nucleus; plants add wall and chloroplasts.",
    steps: ["Start with shared parts", "Add cell wall outside membrane", "Add chloroplasts for photosynthesis", "Note large central vacuole"],
    punchline: "Same toolkit, different extras.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Which organelle is for photosynthesis?",
    options: [
        { id: "a", text: "mitochondrion" },
        { id: "b", text: "chloroplast" },
        { id: "c", text: "ribosome" },
        { id: "d", text: "lysosome" }
    ],
    answerId: "b",
    why: "Chloroplasts contain chlorophyll for photosynthesis.",
    visual: "plant",
    speak: "Which organelle is for photosynthesis?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Cell explorer!",
    bullets: ["Cell → tissue → organ", "Match organelle to job", "Meristems grow; permanent tissues specialise", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Cell explorer! You are ready for the practice sets.",
  },
];

export const g9ScienceCell: ChapterDef = {
  id: "cell-tissues",
  title: "Cell & Tissues",
  emoji: "🔬",
  blurb: "Organelles & tissue types intro",
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

export const g9ScienceCellQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
