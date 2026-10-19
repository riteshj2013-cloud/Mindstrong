import type { ChapterDef, PrepQuestion } from "../types";

/** Fibre to Fabric - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-sci-fibre-a-q01",
    prompt: "Cotton fibre comes from the —",
    options: [
      { id: "a", text: "cotton plant’s boll" },
      { id: "b", text: "stem of jute only" },
      { id: "c", text: "sheep’s fleece" },
      { id: "d", text: "silkworm cocoon" }
    ],
    answerId: "a",
    explanation: "Cotton fibres grow in the boll of the cotton plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q02",
    prompt: "Wool is obtained from —",
    options: [
      { id: "a", text: "cotton plants" },
      { id: "b", text: "sheep (and some other animals)" },
      { id: "c", text: "jute stems" },
      { id: "d", text: "nylon factories only" }
    ],
    answerId: "b",
    explanation: "Wool is an animal fibre from sheep and similar animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q03",
    prompt: "Silk fibre is produced by —",
    options: [
      { id: "a", text: "cotton plants" },
      { id: "b", text: "jute plants" },
      { id: "c", text: "silkworms" },
      { id: "d", text: "sheep" }
    ],
    answerId: "c",
    explanation: "Silkworms spin cocoons of silk fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q04",
    prompt: "Jute fibre is mainly obtained from the plant’s —",
    options: [
      { id: "a", text: "flower petals" },
      { id: "b", text: "roots only" },
      { id: "c", text: "seeds only" },
      { id: "d", text: "stem" }
    ],
    answerId: "d",
    explanation: "Jute fibres come from the stem.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q05",
    prompt: "Which is a natural fibre?",
    options: [
      { id: "a", text: "Cotton" },
      { id: "b", text: "Nylon" },
      { id: "c", text: "Polyester" },
      { id: "d", text: "Acrylic" }
    ],
    answerId: "a",
    explanation: "Cotton is natural; nylon, polyester and acrylic are synthetic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q06",
    prompt: "Which is a synthetic fibre?",
    options: [
      { id: "a", text: "Wool" },
      { id: "b", text: "Polyester" },
      { id: "c", text: "Silk" },
      { id: "d", text: "Jute" }
    ],
    answerId: "b",
    explanation: "Polyester is made from chemicals — synthetic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q07",
    prompt: "Spinning converts —",
    options: [
      { id: "a", text: "fabric into fibre" },
      { id: "b", text: "yarn into sheep" },
      { id: "c", text: "fibre into yarn" },
      { id: "d", text: "plastic into cotton" }
    ],
    answerId: "c",
    explanation: "Spinning twists fibres into yarn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q08",
    prompt: "Weaving is done on a —",
    options: [
      { id: "a", text: "charkha only forever" },
      { id: "b", text: "filter paper" },
      { id: "c", text: "protractor" },
      { id: "d", text: "loom" }
    ],
    answerId: "d",
    explanation: "Weaving interlaces yarns on a loom.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q09",
    prompt: "Knitting differs from weaving because knitting —",
    options: [
      { id: "a", text: "uses a single yarn looped together" },
      { id: "b", text: "always needs a loom with two yarn sets" },
      { id: "c", text: "makes only metals" },
      { id: "d", text: "grows cotton" }
    ],
    answerId: "a",
    explanation: "Knitting loops a yarn; weaving crosses two sets of yarns.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q10",
    prompt: "Cotton plants grow well in —",
    options: [
      { id: "a", text: "only polar ice" },
      { id: "b", text: "black soil and warm climate (typical regions)" },
      { id: "c", text: "only deep ocean" },
      { id: "d", text: "only deserts with no water ever" }
    ],
    answerId: "b",
    explanation: "Cotton needs a warm climate and suitable soils such as black soil in many Indian regions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q11",
    prompt: "The process of separating cotton fibres from seeds is —",
    options: [
      { id: "a", text: "reeling" },
      { id: "b", text: "shearing" },
      { id: "c", text: "ginning" },
      { id: "d", text: "sericulture" }
    ],
    answerId: "c",
    explanation: "Ginning removes seeds from cotton fibres.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q12",
    prompt: "Shearing refers to —",
    options: [
      { id: "a", text: "cutting silk cocoons with acid only" },
      { id: "b", text: "weaving jute" },
      { id: "c", text: "filtering water" },
      { id: "d", text: "removing wool fleece from sheep" }
    ],
    answerId: "d",
    explanation: "Shearing is cutting/removing the sheep’s wool.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q13",
    prompt: "Sericulture is the rearing of —",
    options: [
      { id: "a", text: "silkworms" },
      { id: "b", text: "sheep" },
      { id: "c", text: "cotton plants" },
      { id: "d", text: "jute" }
    ],
    answerId: "a",
    explanation: "Sericulture means silkworm rearing for silk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q14",
    prompt: "Yarn is —",
    options: [
      { id: "a", text: "a finished stitched shirt only" },
      { id: "b", text: "a thin continuous strand made from fibres" },
      { id: "c", text: "a type of soil" },
      { id: "d", text: "a vitamin" }
    ],
    answerId: "b",
    explanation: "Yarn is spun fibre ready for fabric making.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q15",
    prompt: "Which fabric is usually most suitable for hot, humid weather?",
    options: [
      { id: "a", text: "Heavy wool coat" },
      { id: "b", text: "Thick acrylic winter wear only" },
      { id: "c", text: "Cotton" },
      { id: "d", text: "Leather jacket only" }
    ],
    answerId: "c",
    explanation: "Cotton is breathable and comfortable in heat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q16",
    prompt: "Jute is widely used to make —",
    options: [
      { id: "a", text: "winter sweaters only" },
      { id: "b", text: "silk sarees only" },
      { id: "c", text: "nylon ropes only" },
      { id: "d", text: "gunny bags and mats" }
    ],
    answerId: "d",
    explanation: "Jute is common for sacks, mats and similar goods.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q17",
    prompt: "Which statement about fibres is true?",
    options: [
      { id: "a", text: "Some fibres are natural and some are synthetic" },
      { id: "b", text: "All fibres are synthetic" },
      { id: "c", text: "Wool comes from cotton seeds" },
      { id: "d", text: "Silk comes from sheep" }
    ],
    answerId: "a",
    explanation: "Fibres may be natural (plant/animal) or synthetic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q18",
    prompt: "Reeling in silk processing means —",
    options: [
      { id: "a", text: "shearing sheep" },
      { id: "b", text: "unwinding silk filament from the cocoon" },
      { id: "c", text: "ginning cotton" },
      { id: "d", text: "knitting wool" }
    ],
    answerId: "b",
    explanation: "Reeling draws silk filament off the cocoon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q19",
    prompt: "A charkha is used for —",
    options: [
      { id: "a", text: "filtering tea" },
      { id: "b", text: "measuring angles" },
      { id: "c", text: "spinning yarn" },
      { id: "d", text: "evaporating salt" }
    ],
    answerId: "c",
    explanation: "A charkha is a spinning device.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q20",
    prompt: "Which fibre is animal in origin?",
    options: [
      { id: "a", text: "Jute" },
      { id: "b", text: "Cotton" },
      { id: "c", text: "Nylon" },
      { id: "d", text: "Wool" }
    ],
    answerId: "d",
    explanation: "Wool is an animal fibre; jute and cotton are plant fibres; nylon is synthetic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q21",
    prompt: "Fabric is made from yarn by —",
    options: [
      { id: "a", text: "weaving or knitting" },
      { id: "b", text: "only evaporation" },
      { id: "c", text: "only handpicking stones" },
      { id: "d", text: "only magnet use" }
    ],
    answerId: "a",
    explanation: "Weaving and knitting turn yarn into fabric.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q22",
    prompt: "Coir fibre comes from —",
    options: [
      { id: "a", text: "sheep" },
      { id: "b", text: "coconut husk" },
      { id: "c", text: "silkworm" },
      { id: "d", text: "nylon pellets" }
    ],
    answerId: "b",
    explanation: "Coir is from coconut husk — a plant fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q23",
    prompt: "Which property makes cotton clothes comfortable in summer?",
    options: [
      { id: "a", text: "They are waterproof plastic" },
      { id: "b", text: "They are always thicker than wool" },
      { id: "c", text: "They absorb sweat and allow air flow better than many synthetics" },
      { id: "d", text: "They are metals" }
    ],
    answerId: "c",
    explanation: "Cotton absorbs moisture and breathes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-a-q24",
    prompt: "Synthetic fibres are often —",
    options: [
      { id: "a", text: "harvested from sheep" },
      { id: "b", text: "grown as cotton bolls" },
      { id: "c", text: "spun by silkworms" },
      { id: "d", text: "made from petrochemicals" }
    ],
    answerId: "d",
    explanation: "Many synthetics come from chemical/petroleum sources.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-sci-fibre-b-q01",
    prompt: "Which sequence is correct?",
    options: [
      { id: "a", text: "Fibre → yarn → fabric" },
      { id: "b", text: "Fabric → yarn → fibre" },
      { id: "c", text: "Yarn → fibre → fabric" },
      { id: "d", text: "Fabric → fibre → yarn" }
    ],
    answerId: "a",
    explanation: "Fibres are spun to yarn, then woven/knitted to fabric.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q02",
    prompt: "Lint is a term linked with —",
    options: [
      { id: "a", text: "sheep shearing only" },
      { id: "b", text: "cotton fibres after ginning" },
      { id: "c", text: "nylon melt" },
      { id: "d", text: "salt crystals" }
    ],
    answerId: "b",
    explanation: "Cotton lint refers to the fibres separated from seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q03",
    prompt: "Among common natural fibres discussed in class, silk is often noted for its —",
    options: [
      { id: "a", text: "being a metal" },
      { id: "b", text: "coming from sheep" },
      { id: "c", text: "strength and shine" },
      { id: "d", text: "being synthetic polyester" }
    ],
    answerId: "c",
    explanation: "Silk is valued for strength and lustre among natural fibres.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q04",
    prompt: "Polyester clothes —",
    options: [
      { id: "a", text: "are always made by silkworms" },
      { id: "b", text: "come from sheep" },
      { id: "c", text: "are a vitamin" },
      { id: "d", text: "dry quickly compared with many cottons" }
    ],
    answerId: "d",
    explanation: "Synthetics like polyester often dry quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q05",
    prompt: "Which animal fibre can come from goats (e.g. pashmina type discussions)?",
    options: [
      { id: "a", text: "Wool/specialty animal underfur fibres" },
      { id: "b", text: "Cotton" },
      { id: "c", text: "Jute" },
      { id: "d", text: "Nylon" }
    ],
    answerId: "a",
    explanation: "Some fine animal fibres come from goats; wool broadly is animal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q06",
    prompt: "Retting is a step used for —",
    options: [
      { id: "a", text: "shearing wool" },
      { id: "b", text: "loosening jute fibres from the stem" },
      { id: "c", text: "reeling silk only" },
      { id: "d", text: "knitting sweaters" }
    ],
    answerId: "b",
    explanation: "Retting soaks jute stems so fibres can be separated.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q07",
    prompt: "Which fabric choice suits a cold hill station better?",
    options: [
      { id: "a", text: "Light cotton tee only" },
      { id: "b", text: "Wet jute sack as clothing" },
      { id: "c", text: "Woollen sweater" },
      { id: "d", text: "Paper" }
    ],
    answerId: "c",
    explanation: "Wool traps air and keeps the body warm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q08",
    prompt: "Handloom fabrics are made —",
    options: [
      { id: "a", text: "only in chemical reactors" },
      { id: "b", text: "by silkworms directly as shirts" },
      { id: "c", text: "by magnets" },
      { id: "d", text: "on looms operated largely by hand/foot power" }
    ],
    answerId: "d",
    explanation: "Handlooms are manually operated weaving devices.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q09",
    prompt: "Which is plant fibre?",
    options: [
      { id: "a", text: "Jute" },
      { id: "b", text: "Silk" },
      { id: "c", text: "Wool" },
      { id: "d", text: "Nylon" }
    ],
    answerId: "a",
    explanation: "Jute is a plant stem fibre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q10",
    prompt: "Burning a cotton thread typically smells like —",
    options: [
      { id: "a", text: "burning hair always for cotton" },
      { id: "b", text: "burning paper (plant material)" },
      { id: "c", text: "burning plastic sweet smell always" },
      { id: "d", text: "no smell ever" }
    ],
    answerId: "b",
    explanation: "Cotton is cellulose plant fibre and smells like burning paper.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q11",
    prompt: "Burning wool often smells like —",
    options: [
      { id: "a", text: "burning paper only" },
      { id: "b", text: "pure mint" },
      { id: "c", text: "burning hair/feathers (protein)" },
      { id: "d", text: "ozone only" }
    ],
    answerId: "c",
    explanation: "Wool is protein fibre and smells like burning hair.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q12",
    prompt: "Why are jute bags called eco-friendly compared with some plastics?",
    options: [
      { id: "a", text: "Jute is a metal" },
      { id: "b", text: "Jute never decomposes" },
      { id: "c", text: "Jute is pure plastic" },
      { id: "d", text: "Jute is biodegradable plant fibre" }
    ],
    answerId: "d",
    explanation: "Natural jute can break down more readily than many plastics.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q13",
    prompt: "Yarn twist makes fibres —",
    options: [
      { id: "a", text: "hold together as a stronger strand" },
      { id: "b", text: "evaporate" },
      { id: "c", text: "become vitamins" },
      { id: "d", text: "turn into iron" }
    ],
    answerId: "a",
    explanation: "Twisting binds fibres into usable yarn.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q14",
    prompt: "Which occupation is linked to silk?",
    options: [
      { id: "a", text: "Astronaut only" },
      { id: "b", text: "Sericulturist" },
      { id: "c", text: "Deep-sea diver only" },
      { id: "d", text: "Protractor maker only" }
    ],
    answerId: "b",
    explanation: "Sericulturists rear silkworms.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q15",
    prompt: "Cotton is preferred for bandages partly because it is —",
    options: [
      { id: "a", text: "completely waterproof plastic" },
      { id: "b", text: "a metal mesh" },
      { id: "c", text: "soft and absorbent" },
      { id: "d", text: "edible protein" }
    ],
    answerId: "c",
    explanation: "Soft absorbent cotton suits wound care.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q16",
    prompt: "Which step comes first in wool processing among these?",
    options: [
      { id: "a", text: "Weaving a finished coat" },
      { id: "b", text: "Wearing the sweater" },
      { id: "c", text: "Dyeing a stitched blazer only" },
      { id: "d", text: "Shearing" }
    ],
    answerId: "d",
    explanation: "First the fleece is sheared from the animal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q17",
    prompt: "Blended fabrics combine —",
    options: [
      { id: "a", text: "two or more types of fibre" },
      { id: "b", text: "only water and salt" },
      { id: "c", text: "only metals" },
      { id: "d", text: "only vitamins" }
    ],
    answerId: "a",
    explanation: "Blends mix fibres (e.g. cotton-polyester) for useful properties.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q18",
    prompt: "Which tool helps spin yarn by hand traditionally?",
    options: [
      { id: "a", text: "Beaker" },
      { id: "b", text: "Takli or charkha" },
      { id: "c", text: "Bar magnet" },
      { id: "d", text: "Thermometer" }
    ],
    answerId: "b",
    explanation: "Takli and charkha are traditional spinning devices.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q19",
    prompt: "Fabric edges may fray because —",
    options: [
      { id: "a", text: "fabric turns into water" },
      { id: "b", text: "magnets pull cotton" },
      { id: "c", text: "yarns can slip out when not finished" },
      { id: "d", text: "vitamins escape" }
    ],
    answerId: "c",
    explanation: "Unfinished edges let yarns loosen — hence hems/selvedge.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q20",
    prompt: "Which is true of knitting?",
    options: [
      { id: "a", text: "It always needs two perpendicular yarn sheets like weaving" },
      { id: "b", text: "It grows cotton" },
      { id: "c", text: "It is evaporation" },
      { id: "d", text: "It can make stretchy fabrics like socks" }
    ],
    answerId: "d",
    explanation: "Knitted fabrics often stretch — good for socks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q21",
    prompt: "India’s history of cotton is notable because —",
    options: [
      { id: "a", text: "cotton weaving has deep traditional roots here" },
      { id: "b", text: "cotton is a metal ore" },
      { id: "c", text: "cotton is only synthetic" },
      { id: "d", text: "cotton comes from sheep" }
    ],
    answerId: "a",
    explanation: "India has a long tradition of cotton textiles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q22",
    prompt: "Which fibre is least likely to be called natural?",
    options: [
      { id: "a", text: "Cotton" },
      { id: "b", text: "Acrylic" },
      { id: "c", text: "Wool" },
      { id: "d", text: "Silk" }
    ],
    answerId: "b",
    explanation: "Acrylic is synthetic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q23",
    prompt: "Why sort laundry by fabric type sometimes?",
    options: [
      { id: "a", text: "All fabrics are identical metals" },
      { id: "b", text: "Sorting removes vitamins" },
      { id: "c", text: "Different fabrics need different wash/heat care" },
      { id: "d", text: "It creates iodine" }
    ],
    answerId: "c",
    explanation: "Wool, cotton and synthetics tolerate heat/agitation differently.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-fibre-b-q24",
    prompt: "The smallest usable textile building block among these is —",
    options: [
      { id: "a", text: "stitched garment" },
      { id: "b", text: "full loom shed" },
      { id: "c", text: "market stall" },
      { id: "d", text: "fibre" }
    ],
    answerId: "d",
    explanation: "Fibre is the basic strand; yarn and fabric are built from it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🧵",
    title: "Fibre to Fabric",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Fibres are spun into yarn and woven or knitted into fabric.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Fibre", reveal: "Thin strands that make yarn", emoji: "🧵" },
      { label: "Natural fibres", reveal: "Cotton, jute, silk, wool", emoji: "🌱" },
      { label: "Spinning", reveal: "Fibres twisted into yarn", emoji: "🌀" },
      { label: "Weaving / knitting", reveal: "Yarn becomes fabric", emoji: "🧶" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Cotton fibre comes from —",
    options: [
        { id: "a", text: "sheep" },
        { id: "b", text: "silkworm" },
        { id: "c", text: "cotton plant" },
        { id: "d", text: "jute stem only" }
    ],
    answerId: "c",
    why: "Cotton is from the cotton boll of the plant.",
    visual: "none",
    speak: "Cotton fibre comes from —",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6ScienceFibre: ChapterDef = {
  id: "fibre-fabric",
  title: "Fibre to Fabric",
  emoji: "🧵",
  blurb: "Natural fibres, yarn and cloth",
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
  paperTopics: ["materials", "living-things"],
};

export const g6ScienceFibreQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
