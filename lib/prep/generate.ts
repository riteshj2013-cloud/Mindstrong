import type { PrepQuestion } from "./types";

/** Deterministic PRNG for stable question sets across reloads. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: T[]): T {
  return arr[Math.floor(rng() * arr.length) % arr.length];
}

function shuffle<T>(rng: () => number, arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mcq(
  id: string,
  prompt: string,
  correct: string,
  wrongs: string[],
  explanation: string,
  hints: string[],
): PrepQuestion {
  const opts = shuffle(
    () => Math.random(),
    [correct, ...wrongs.slice(0, 3)].map((text, i) => ({
      id: `o${i}`,
      text,
    })),
  );
  // Re-id stably after shuffle by text match
  const options = opts.map((o, i) => ({ id: `o${i}`, text: o.text }));
  const answerId = options.find((o) => o.text === correct)!.id;
  return { id, prompt, options, answerId, explanation, hints };
}

function seededMcq(
  rng: () => number,
  id: string,
  prompt: string,
  correct: string,
  wrongs: string[],
  explanation: string,
  hints: string[],
): PrepQuestion {
  const pool = shuffle(rng, [correct, ...wrongs.filter((w) => w !== correct)]).slice(0, 4);
  if (!pool.includes(correct)) pool[0] = correct;
  const options = shuffle(rng, pool).map((text, i) => ({ id: `o${i}`, text }));
  const answerId = options.find((o) => o.text === correct)!.id;
  return { id, prompt, options, answerId, explanation, hints };
}

type Maker = (rng: () => number, i: number) => PrepQuestion;

const MAKERS: Record<string, Maker> = {
  // ---- Maths ----
  "place-value": (rng, i) => {
    const hundreds = 1 + Math.floor(rng() * 9);
    const tens = Math.floor(rng() * 10);
    const ones = Math.floor(rng() * 10);
    const n = hundreds * 100 + tens * 10 + ones;
    const mode = i % 3;
    if (mode === 0) {
      return seededMcq(
        rng,
        `pv-${i}`,
        `What is the value of the digit ${tens} in ${n}?`,
        String(tens * 10),
        [String(tens), String(tens * 100), String(hundreds * 10)],
        `In ${n}, the digit ${tens} is in the tens place → ${tens * 10}.`,
        ["Look at the place of that digit.", "Tens place means ×10."],
      );
    }
    if (mode === 1) {
      return seededMcq(
        rng,
        `pv-${i}`,
        `${hundreds} hundreds + ${tens} tens + ${ones} ones = ?`,
        String(n),
        [String(hundreds * 10 + tens), String(n + 10), String(hundreds * 100 + ones)],
        `Place value: ${hundreds}×100 + ${tens}×10 + ${ones} = ${n}.`,
        ["Hundreds left, then tens, then ones.", "Multiply each digit by its place."],
      );
    }
    const bigger = n + (rng() > 0.5 ? 10 : 100);
    return seededMcq(
      rng,
      `pv-${i}`,
      `Which is greater?`,
      String(Math.max(n, bigger)),
      [String(Math.min(n, bigger)), String(Math.min(n, bigger) - 1), "They are equal"],
      `${Math.max(n, bigger)} has more value when you compare place by place.`,
      ["Compare hundreds first.", "Then tens, then ones."],
    );
  },
  "add-sub": (rng, i) => {
    const a = 20 + Math.floor(rng() * 70);
    const b = 10 + Math.floor(rng() * 40);
    if (i % 2 === 0) {
      const sum = a + b;
      return seededMcq(
        rng,
        `as-${i}`,
        `${a} + ${b} = ?`,
        String(sum),
        [String(sum + 1), String(sum - 10), String(a + b - 2)],
        `${a} + ${b} = ${sum}.`,
        ["Add ones, then tens (watch the carry).", "Estimate: round and check."],
      );
    }
    const x = Math.max(a, b + 5);
    const y = Math.min(a, b);
    const diff = x - y;
    return seededMcq(
      rng,
      `as-${i}`,
      `${x} − ${y} = ?`,
      String(diff),
      [String(diff + 10), String(diff - 1), String(x + y)],
      `${x} − ${y} = ${diff}.`,
      ["Subtract ones carefully — borrow if needed.", "Check by adding your answer to the smaller number."],
    );
  },
  "multiply-basics": (rng, i) => {
    const a = 2 + Math.floor(rng() * 9);
    const b = 2 + Math.floor(rng() * 9);
    const p = a * b;
    if (i % 3 === 0) {
      return seededMcq(
        rng,
        `mul-${i}`,
        `${a} × ${b} = ?`,
        String(p),
        [String(p + a), String(a + b), String(p - 1)],
        `${a} groups of ${b} make ${p}.`,
        [`Think of ${a} jumps of ${b}.`, "Use a times-table fact you know."],
      );
    }
    if (i % 3 === 1) {
      return seededMcq(
        rng,
        `mul-${i}`,
        `Which equals ${a} × ${b}?`,
        `${b} × ${a}`,
        [`${a} + ${b}`, `${a} × ${b + 1}`, `${a - 1} × ${b}`],
        `Multiplication is commutative: ${a}×${b} = ${b}×${a}.`,
        ["Order can swap when multiplying.", "Same total either way."],
      );
    }
    return seededMcq(
      rng,
      `mul-${i}`,
      `A box has ${a} rows of ${b} stickers. How many stickers?`,
      String(p),
      [String(a + b), String(p + b), String(a * (b - 1))],
      `Rows × columns = ${a}×${b}=${p}.`,
      ["Array → multiply.", "Count one row, then multiply by rows."],
    );
  },
  fractions: (rng, i) => {
    const den = pick(rng, [2, 3, 4, 5, 8]);
    const num = 1 + Math.floor(rng() * (den - 1));
    const whole = den * (2 + Math.floor(rng() * 4));
    const part = (whole / den) * num;
    if (i % 2 === 0) {
      return seededMcq(
        rng,
        `fr-${i}`,
        `What is ${num}/${den} of ${whole}?`,
        String(part),
        [String(whole / den), String(part + den), String(num * den)],
        `${whole}÷${den}=${whole / den}, times ${num} = ${part}.`,
        ["Find one equal part first.", `One ${den}th of ${whole} is ${whole / den}.`],
      );
    }
    return seededMcq(
      rng,
      `fr-${i}`,
      `Which is largest?`,
      den === 2 ? "1/2" : `1/${Math.min(den, 3)}`,
      [`1/${den + 2}`, `1/${den + 4}`, `1/${den + 1}`],
      "With the same numerator 1, smaller denominator is larger.",
      ["Unit fractions: smaller bottom → bigger piece.", "Picture the pizza slices."],
    );
  },
  decimals: (rng, i) => {
    const a = Math.round((rng() * 9 + 1) * 10) / 10;
    const b = Math.round((rng() * 9 + 1) * 10) / 10;
    if (i % 2 === 0) {
      const s = Math.round((a + b) * 10) / 10;
      return seededMcq(
        rng,
        `dec-${i}`,
        `${a} + ${b} = ?`,
        String(s),
        [String(Math.round((s + 0.1) * 10) / 10), String(Math.round((a + b + 1) * 10) / 10), String(a)],
        `Line up the decimal points: ${a}+${b}=${s}.`,
        ["Align decimal points.", "Add tenths, then ones."],
      );
    }
    return seededMcq(
      rng,
      `dec-${i}`,
      `Which is 3 tenths?`,
      "0.3",
      ["3.0", "0.03", "30"],
      "3 tenths = 0.3.",
      ["Tenths are one place after the point.", "0.3 means 3/10."],
    );
  },
  percent: (rng, i) => {
    const base = pick(rng, [20, 40, 50, 80, 100]);
    const pct = pick(rng, [10, 25, 50, 20]);
    const val = (base * pct) / 100;
    return seededMcq(
      rng,
      `pct-${i}`,
      `What is ${pct}% of ${base}?`,
      String(val),
      [String(val + 5), String(base - pct), String(pct)],
      `${pct}% = ${pct}/100; ${pct}/100 × ${base} = ${val}.`,
      ["Percent means per 100.", "10% of a number is ÷10."],
    );
  },
  "linear-lite": (rng, i) => {
    const m = 1 + Math.floor(rng() * 5);
    const c = Math.floor(rng() * 8);
    const x = 1 + Math.floor(rng() * 6);
    const y = m * x + c;
    if (i % 2 === 0) {
      return seededMcq(
        rng,
        `lin-${i}`,
        `If y = ${m}x + ${c}, what is y when x = ${x}?`,
        String(y),
        [String(m * x), String(y + m), String(x + c)],
        `y = ${m}×${x} + ${c} = ${y}.`,
        ["Substitute x, then multiply and add.", "Do multiplication before addition."],
      );
    }
    const target = m * x + c;
    return seededMcq(
      rng,
      `lin-${i}`,
      `Solve: ${m}x + ${c} = ${target}`,
      String(x),
      [String(x + 1), String(target), String(c)],
      `Subtract ${c}, then divide by ${m} → x=${x}.`,
      ["Undo add first.", "Then divide by the coefficient."],
    );
  },
  ratios: (rng, i) => {
    const a = 2 + Math.floor(rng() * 5);
    const b = 2 + Math.floor(rng() * 5);
    const k = 2 + Math.floor(rng() * 4);
    return seededMcq(
      rng,
      `ratio-${i}`,
      `${a}:${b} = ${a * k}: ?`,
      String(b * k),
      [String(b + k), String(a * k), String(b * k + 1)],
      `Scale both parts by ${k}: ${b}×${k}=${b * k}.`,
      ["Same multiplier on both sides.", "Keep the ratio equal."],
    );
  },

  // ---- English ----
  synonyms: (rng, i) => {
    const pairs: [string, string, string[]][] = [
      ["happy", "joyful", ["angry", "tiny", "loud"]],
      ["big", "large", ["small", "quick", "soft"]],
      ["smart", "clever", ["sleepy", "empty", "rough"]],
      ["begin", "start", ["finish", "carry", "hide"]],
      ["brave", "courageous", ["scared", "silent", "narrow"]],
      ["quick", "fast", ["slow", "heavy", "pale"]],
      ["gift", "present", ["problem", "shadow", "corner"]],
      ["silent", "quiet", ["noisy", "bright", "sticky"]],
    ];
    const [w, syn, wrongs] = pick(rng, pairs);
    return seededMcq(
      rng,
      `syn-${i}`,
      `Which word is a synonym of “${w}”?`,
      syn,
      wrongs,
      `“${syn}” means nearly the same as “${w}”.`,
      ["Synonym = similar meaning.", "Try each option in a sentence."],
    );
  },
  antonyms: (rng, i) => {
    const pairs: [string, string, string[]][] = [
      ["hot", "cold", ["warm", "boiling", "spicy"]],
      ["up", "down", ["above", "high", "over"]],
      ["full", "empty", ["heavy", "open", "loud"]],
      ["early", "late", ["soon", "quick", "first"]],
      ["strong", "weak", ["tough", "brave", "solid"]],
      ["ancient", "modern", ["old", "historic", "dusty"]],
    ];
    const [w, ant, wrongs] = pick(rng, pairs);
    return seededMcq(
      rng,
      `ant-${i}`,
      `Which is an antonym of “${w}”?`,
      ant,
      wrongs,
      `Antonym = opposite. “${ant}” opposes “${w}”.`,
      ["Opposite meaning.", "Not a similar word."],
    );
  },
  grammar: (rng, i) => {
    const items: [string, string, string[], string][] = [
      ["She ____ to school every day.", "goes", ["go", "going", "gone"], "Third person singular needs -es/-s."],
      ["They ____ playing cricket.", "are", ["is", "am", "be"], "Plural subject → are."],
      ["I have ____ my homework.", "finished", ["finish", "finishing", "finishes"], "Present perfect uses past participle."],
      ["The cat sat ____ the mat.", "on", ["in", "at", "by"], "Common preposition: on the mat."],
      ["____ apple a day keeps the doctor away.", "An", ["A", "The", "Any"], "Use “an” before vowel sounds."],
      ["He is taller ____ his brother.", "than", ["then", "that", "to"], "Comparisons use than."],
    ];
    const [prompt, correct, wrongs, why] = pick(rng, items);
    return seededMcq(rng, `gr-${i}`, prompt, correct, wrongs, why, ["Read the whole sentence.", "Check subject–verb agreement."]);
  },
  comprehension: (rng, i) => {
    const passages: [string, string, string, string[]][] = [
      [
        "Maya planted seeds. After a week, tiny green shoots appeared.",
        "What appeared after a week?",
        "Tiny green shoots",
        ["Flowers", "Fruits", "Birds"],
      ],
      [
        "The library was quiet. Sam whispered so he wouldn’t disturb others.",
        "Why did Sam whisper?",
        "So he wouldn’t disturb others",
        ["He lost his voice", "The lights were off", "He was alone"],
      ],
      [
        "Ravi’s kite soared high when the wind grew stronger.",
        "What helped the kite soar?",
        "Stronger wind",
        ["Rain", "A long string only", "The sun"],
      ],
    ];
    const [pass, q, correct, wrongs] = pick(rng, passages);
    return seededMcq(
      rng,
      `comp-${i}`,
      `${pass}\n\n${q}`,
      correct,
      wrongs,
      "The answer is stated (or clearly implied) in the passage.",
      ["Find the key sentence.", "Don’t invent extra details."],
    );
  },
  vocabulary: (rng, i) => {
    const items: [string, string, string[]][] = [
      ["A person who writes books is an…", "author", ["actor", "artist", "athlete"]],
      ["Something you can drink is…", "beverage", ["boulder", "beacon", "badge"]],
      ["To look carefully is to…", "observe", ["ignore", "borrow", "whisper"]],
      ["A place with many books is a…", "library", ["bakery", "garage", "stadium"]],
    ];
    const [prompt, correct, wrongs] = pick(rng, items);
    return seededMcq(
      rng,
      `voc-${i}`,
      prompt,
      correct,
      wrongs,
      `“${correct}” fits the definition.`,
      ["Match meaning to word.", "Eliminate odd options."],
    );
  },
  "idioms-lite": (rng, i) => {
    const items: [string, string, string[]][] = [
      ["“Break the ice” means…", "Start a conversation", ["Smash ice cubes", "Feel cold", "Run away"]],
      ["“A piece of cake” means…", "Something easy", ["A dessert only", "A hard puzzle", "A long walk"]],
      ["“Hit the books” means…", "Study hard", ["Throw books", "Buy novels", "Sleep early"]],
    ];
    const [prompt, correct, wrongs] = pick(rng, items);
    return seededMcq(
      rng,
      `id-${i}`,
      prompt,
      correct,
      wrongs,
      "Idioms aren’t literal — look for the common meaning.",
      ["Not the word-for-word meaning.", "Think figurative."],
    );
  },

  // ---- Science ----
  "living-things": (rng, i) => {
    const items: [string, string, string[], string][] = [
      ["Which is a living thing?", "Tree", ["Rock", "Water", "Car"], "Living things grow and need energy."],
      ["Plants make food using…", "Sunlight", ["Moonlight only", "Wind only", "Plastic"], "Photosynthesis needs light."],
      ["Animals that eat only plants are…", "Herbivores", ["Carnivores", "Omnivores only", "Producers"], "Herbivores = plant-eaters."],
      ["Which helps a bird fly?", "Wings", ["Roots", "Gills", "Fins only"], "Wings provide lift."],
    ];
    const [prompt, correct, wrongs, why] = pick(rng, items);
    return seededMcq(rng, `liv-${i}`, prompt, correct, wrongs, why, ["Think about life processes.", "Eliminate non-living distractors."]);
  },
  "human-body": (rng, i) => {
    const items: [string, string, string[], string][] = [
      ["Which organ pumps blood?", "Heart", ["Lungs", "Stomach", "Brain"], "The heart is a pump."],
      ["We breathe in…", "Oxygen", ["Only carbon dioxide", "Nitrogen only", "Helium"], "Lungs take in oxygen."],
      ["Bones together make the…", "Skeleton", ["Muscle", "Nerve", "Skin"], "Skeleton supports the body."],
      ["Which sense organ helps you see?", "Eyes", ["Ears", "Nose", "Tongue"], "Eyes detect light."],
    ];
    const [prompt, correct, wrongs, why] = pick(rng, items);
    return seededMcq(rng, `body-${i}`, prompt, correct, wrongs, why, ["Match organ to job.", "Picture your body systems."]);
  },
  materials: (rng, i) => {
    const items: [string, string, string[], string][] = [
      ["Which material is attracted to a magnet?", "Iron", ["Wood", "Plastic", "Glass"], "Iron (and some metals) are magnetic."],
      ["Ice melting is a…", "Change of state", ["Chemical reaction only", "Magnetic force", "Life process"], "Solid → liquid."],
      ["Which is a transparent material?", "Clear glass", ["Wood", "Stone", "Metal sheet"], "Transparent = light passes through."],
      ["Water boils at about…", "100°C", ["0°C", "50°C", "200°C"], "At standard pressure, water boils near 100°C."],
    ];
    const [prompt, correct, wrongs, why] = pick(rng, items);
    return seededMcq(rng, `mat-${i}`, prompt, correct, wrongs, why, ["Recall properties.", "Watch for tricky near-misses."]);
  },
  "forces-energy": (rng, i) => {
    const items: [string, string, string[], string][] = [
      ["A push or a pull is a…", "Force", ["Colour", "Sound only", "Shadow"], "Forces can change motion."],
      ["Friction usually…", "Slows things down", ["Creates fuel", "Makes things invisible", "Stops gravity"], "Friction opposes motion."],
      ["Which is a source of light energy?", "The Sun", ["A closed box", "A silent rock", "Cold water"], "The Sun radiates light."],
      ["Gravity pulls objects…", "Towards Earth", ["Away from Earth", "Sideways only", "Randomly"], "Gravity attracts toward Earth’s centre."],
    ];
    const [prompt, correct, wrongs, why] = pick(rng, items);
    return seededMcq(rng, `fe-${i}`, prompt, correct, wrongs, why, ["Force = push/pull.", "Name the effect on motion."]);
  },
  "earth-space": (rng, i) => {
    const items: [string, string, string[], string][] = [
      ["Earth goes around the…", "Sun", ["Moon", "Mars", "Polaris only"], "Orbit around the Sun = year."],
      ["Day and night are caused by Earth’s…", "Rotation", ["Only revolution", "Earthquakes", "Rain"], "Spin on its axis."],
      ["The Moon shines mainly because it…", "Reflects sunlight", ["Makes its own fire", "Is a star", "Glows from magma"], "Reflected light."],
      ["Which planet is known as the Red Planet?", "Mars", ["Venus", "Jupiter", "Mercury"], "Mars looks reddish."],
    ];
    const [prompt, correct, wrongs, why] = pick(rng, items);
    return seededMcq(rng, `es-${i}`, prompt, correct, wrongs, why, ["Separate rotation vs revolution.", "Think solar system basics."]);
  },
  "cells-basics": (rng, i) => {
    const items: [string, string, string[], string][] = [
      ["The basic unit of life is the…", "Cell", ["Organ only", "Tissue only", "Atom of gold"], "Cells make tissues and organs."],
      ["Plant cells usually have a…", "Cell wall", ["Only fur", "Beak", "Feather"], "Cell wall gives plants support."],
      ["Which organelle is linked to photosynthesis?", "Chloroplast", ["Mitochondria only", "Nucleus only", "Vacuole only"], "Chloroplasts hold chlorophyll."],
    ];
    const [prompt, correct, wrongs, why] = pick(rng, items);
    return seededMcq(rng, `cell-${i}`, prompt, correct, wrongs, why, ["Cell → tissue → organ.", "Plant vs animal differences."]);
  },
};

export function generateSet(
  topic: string,
  count: number,
  seed: number,
): PrepQuestion[] {
  const maker = MAKERS[topic] ?? MAKERS["add-sub"];
  const rng = mulberry32(seed);
  const out: PrepQuestion[] = [];
  for (let i = 0; i < count; i++) {
    out.push(maker(rng, i));
  }
  return out;
}

export function generatePaper(
  topics: string[],
  count: number,
  seed: number,
): PrepQuestion[] {
  const rng = mulberry32(seed);
  const out: PrepQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const topic = topics[i % topics.length] ?? "add-sub";
    const maker = MAKERS[topic] ?? MAKERS["add-sub"];
    out.push(maker(rng, i + 100));
  }
  return out;
}

export const TOPIC_LABELS: Record<string, string> = Object.fromEntries(
  Object.keys(MAKERS).map((k) => [k, k.replace(/-/g, " ")]),
);
