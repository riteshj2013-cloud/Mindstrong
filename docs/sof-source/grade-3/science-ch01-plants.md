# Chapter 1: Plants — Parts and What They Do

## Meta
- Grade: 3
- Subject: Science
- Theme tags: plants, root, stem, leaf, flower, fruit, seed, pictorial, svg-diagrams
- Source basis: NCERT Class 3 EVS / typical NSO themes (original items only)
- Language: Grade 3 (short sentences, high visual/TTS)

## Pictorial notes
- Visual items: **Set A — 9 of 24** (A1, A5, A8, A11, A13, A17, A18, A21, A24); **Set B — 9 of 24** (B1, B9, B11, B12, B15, B16, B17, B20, B23). Total 18 of 48 (37.5%).
- Diagram types:
  - **Labelled whole plant / tree** (A1 plant parts, B1 tree trunk as stem) — circled letters **A–D** on dashed leader lines; the letters match the options.
  - **Edible-part drawings** (A11 carrot = root, A13 potato with eyes = stem, A17 cauliflower = flower, A18 pea pod = seed, B11 radish = root, B12 cabbage = leaf, B15 rajma/moong pods = seed, B16 cut tomato = fruit, B20 root basket).
  - **Sequence cards** (A5 flower → ? card, A24 four numbered cards **1–4**: seed, young plant, flower, fruit).
  - **Simple demos** (A21 celery in red water, Day 1 vs Next day; B9 water arrows up the stem from a hidden "?" root zone; B17 plant bending towards a sunny window; A8 sun + air + water into the leaf's kitchen; B23 cactus stem cut-away with stored water).
- Every pictorial item is tagged `· Pictorial` in its heading and uses: `**Diagram (SVG):**` → inline `<svg>` → `**Stem:**` → `**Options:**` → `**Answer:**` → `**Explanation:**`. Text-only items keep the original bullet format.
- SVGs are original drawings (not copied from SOF papers), self-contained (no external images or fonts), `viewBox="0 0 320 220"`, with `role="img"` and a descriptive `aria-label` for TTS/screen readers.
- Labels: circled letters **A–D** always match the option letters; circled numbers **1–4** are used for sequence cards; a dashed box with **?** marks the hidden or missing part.
- One identical `<style>` block is repeated in every SVG, so shared class names never clash when SVGs render together on one page:
  - `.part` green plant parts (leaves, pods, cactus) · `.label` bold 14px letters/titles · `.small` 11px captions · `.big` large "?" · `.arrow` arrows and pointers · `.leader` dashed label lines
  - `.badge` circled label backgrounds · `.card` picture cards · `.dash` empty "?" slots · `.sky` `.soil` `.sand` `.wall` backgrounds
  - plant drawing: `.root` `.stemline` `.vein` `.trunk` `.petal`; water demos: `.water` `.redwater` `.glass` `.flow` `.redline`
  - colour fills: `.yellow` `.orange` `.red` `.pinkred` `.purple` `.white` `.cream` `.potato`
- Arrowheads are drawn as short polylines (no `<marker>`/`id`s), so there are no duplicate-ID conflicts.
- Answer letters were kept the same for converted items, so each set stays balanced at 6 A / 6 B / 6 C / 6 D.

## Learning objectives
- I can name the parts of a plant: root, stem, leaf, flower, fruit and seed.
- I can tell what the root does and what the stem does.
- I can tell how a leaf makes food using sunlight, air and water.
- I can tell how a flower turns into a fruit, and a fruit keeps seeds safe.
- I can name plant parts we eat, like carrot, spinach, potato and apple.

## Interactive lesson outline

### Scene 1: Meet Sunny the Sunflower
- **Visual:** A big, smiling yellow sunflower in a clay pot on a sunny window. The pot turns see-through so kids can see brown soil and white roots. Each part glows when named: roots, stem, leaves, flower. A small seed sits on the window sill.
- **TTS:**
  - "Hi! I am Sunny the Sunflower."
  - "Plants have parts, just like you have hands and feet."
  - "Let us meet my roots, stem, leaves and flower."
  - "Fruits and seeds come later. Wait and see!"
- **Interaction:** Drag-and-drop. Kids drag four word-cards (Root, Stem, Leaf, Flower) onto the right glowing spot on Sunny. A correct drop makes the part wiggle and sparkle. A wrong drop gently bounces back with "Try again!"

### Scene 2: Roots — The Thirsty Holders
- **Visual:** A cut-away view under the soil. Roots spread like a tangle of brown strings. Blue water drops in the soil move into the roots like juice going up a straw. Then a cartoon wind blows hard above the ground, but the plant stays standing.
- **TTS:**
  - "Roots live under the soil."
  - "Roots drink water from the soil."
  - "Roots also hold the plant tight."
  - "Even a strong wind cannot pull it out!"
- **Interaction:**
  1. Tap the watering can. Water soaks into the soil. Tap the drops to help them enter the roots.
  2. Tap-and-hold the "Pull!" button. A cartoon hand tugs the plant, but it stays put. A badge pops up: "Roots hold on!"

### Scene 3: Stem — The Plant's Water Pipe
- **Visual:** A celery stick standing in a glass of red-coloured water. A time-lapse clock spins and thin red lines climb up the stem into the leaves. Next to it, a tall tree trunk and a money plant climbing a stick.
- **TTS:**
  - "The stem holds the plant up."
  - "The stem is like a pipe."
  - "It carries water up from the roots to the leaves."
  - "It also carries food from the leaves to other parts."
  - "A tree trunk is a big, strong stem."
- **Interaction:** Drag blue water drops from the roots, up the stem, to the leaves. Each drop that arrives makes a leaf turn brighter green. Bonus tap: "Which one is a stem?" Kids tap the tree trunk, the celery stick and the money plant vine. All three light up as stems.

### Scene 4: Leaf — The Plant's Kitchen
- **Visual:** A big green leaf with a chef's hat and a tiny cooking pot. Three ingredient icons float nearby: a smiling sun, a puffy air cloud and a water drop. When all three go into the pot, the leaf glows and a small "food" sparkle travels down the stem.
- **TTS:**
  - "Leaves are the plant's kitchen."
  - "Leaves make food for the whole plant."
  - "They use sunlight, air and water."
  - "This is called photosynthesis."
  - "It simply means making food with light."
  - "No sunlight means no food for the plant."
- **Interaction:** Drag the sun, air and water into the leaf's pot. Once all three are in, the leaf cheers. Then a quick "Oops" round: kids try to drag in a moon, a stone or a toy car. These bounce out with "Leaves do not need that!"

### Scene 5: Flower to Fruit to Seed — And What We Eat
- **Visual (Part A):** A time-lapse of a mango tree. Small flowers bloom, a bee visits, the flowers fall and tiny green mangoes appear. They grow into big, ripe yellow mangoes. One mango is cut open to show the big seed inside. The seed is planted and a baby plant pops up, so the circle is complete.
- **Visual (Part B):** A bright vegetable market stall with six baskets labelled Root, Stem, Leaf, Flower, Fruit and Seed. Foods wait in a pile: carrot, radish, potato, sugarcane, spinach, cabbage, cauliflower, apple, tomato, peas.
- **TTS:**
  - "A flower slowly turns into a fruit."
  - "The fruit keeps the seeds safe inside."
  - "A seed can grow into a new plant."
  - "We eat many plant parts!"
  - "A carrot is a root. Spinach is a leaf."
  - "A potato grows under the soil, but it is a stem."
  - "See its little eyes? New shoots grow from them."
  - "An apple is a fruit."
- **Interaction:**
  1. Sequence game: drag four pictures into order: Seed → Plant → Flower → Fruit.
  2. Market sort: drag each food into the right basket. A correct drop plays a happy crunch. When a child drops the potato in the Root basket, a friendly tip appears: "Tricky one! Potato has eyes, so it is a stem."

---

## Quiz Set A — 24 MCQs

**Q1.** *(Recall · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A flowering plant in soil with four labels: A on the flower, B on the roots under the soil, C on a leaf, D on the stem">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="sky" x="0" y="0" width="320" height="150"/><rect class="soil" x="0" y="150" width="320" height="70"/>
  <text class="label" x="12" y="22">A plant</text>
  <path class="root" d="M130 150 L130 172 M130 160 Q112 172 104 194 M130 162 Q150 175 158 198 M130 172 Q124 188 120 204 M130 170 Q140 186 142 206"/>
  <line class="stemline" x1="130" y1="150" x2="130" y2="58"/>
  <ellipse class="part" cx="108" cy="112" rx="22" ry="9" transform="rotate(-25 108 112)"/><line class="vein" x1="88.1" y1="121.3" x2="127.9" y2="102.7"/>
  <ellipse class="part" cx="153" cy="96" rx="22" ry="9" transform="rotate(25 153 96)"/><line class="vein" x1="133.1" y1="86.7" x2="172.9" y2="105.3"/>
  <circle class="petal" cx="141.7" cy="48.0" r="9"/><circle class="petal" cx="135.8" cy="58.1" r="9"/><circle class="petal" cx="124.2" cy="58.1" r="9"/><circle class="petal" cx="118.3" cy="48.0" r="9"/><circle class="petal" cx="124.1" cy="37.9" r="9"/><circle class="petal" cx="135.8" cy="37.9" r="9"/><circle class="yellow" cx="130" cy="48" r="8.1"/>
  <line class="leader" x1="147" y1="48" x2="226" y2="40"/><circle class="badge" cx="238" cy="40" r="11"/><text class="label" x="238" y="45" text-anchor="middle">A</text>
  <line class="leader" x1="146" y1="186" x2="226" y2="186"/><circle class="badge" cx="238" cy="186" r="11"/><text class="label" x="238" y="191" text-anchor="middle">B</text>
  <line class="leader" x1="88" y1="118" x2="52" y2="118"/><circle class="badge" cx="40" cy="118" r="11"/><text class="label" x="40" y="123" text-anchor="middle">C</text>
  <line class="leader" x1="133" y1="134" x2="226" y2="134"/><circle class="badge" cx="238" cy="134" r="11"/><text class="label" x="238" y="139" text-anchor="middle">D</text>
</svg>

**Stem:** Look at the plant. Which labelled part grows **under the soil**?

**Options:**
- A) Part A
- B) Part B
- C) Part C
- D) Part D

**Answer:** B

**Explanation:** Part B is the root. Roots grow down into the soil. They drink water and hold the plant in place.

**Q2.** *(Recall)* Which part of a plant makes food for the plant?
- A) Root
- B) Seed
- C) Stem
- D) Leaf
- **Answer:** D
- **Explanation:** Leaves are the plant's kitchen. They make food using sunlight, air and water.

**Q3.** *(Recall)* What do roots take from the soil?
- A) Water
- B) Sunlight
- C) Fruits
- D) Flowers
- **Answer:** A
- **Explanation:** Roots drink water from the soil, like you drink juice through a straw.

**Q4.** *(Recall)* Which part holds the plant up and carries water to the leaves?
- A) Flower
- B) Seed
- C) Stem
- D) Fruit
- **Answer:** C
- **Explanation:** The stem stands tall and works like a pipe. Water goes up the stem to the leaves.

**Q5.** *(Recall · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="Card 1 shows a pink flower with a bee. An arrow points to card 2, which is empty with a big question mark">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="label" x="160" y="22" text-anchor="middle">What comes next?</text>
  <rect class="card" x="20" y="40" width="110" height="150" rx="10"/>
  <line class="stemline" x1="75" y1="180" x2="75" y2="110"/>
  <ellipse class="part" cx="62" cy="150" rx="14" ry="6" transform="rotate(-30 62 150)"/><line class="vein" x1="49.9" y1="157.0" x2="74.1" y2="143.0"/>
  <circle class="petal" cx="89.3" cy="98.0" r="11"/><circle class="petal" cx="82.2" cy="110.4" r="11"/><circle class="petal" cx="67.9" cy="110.4" r="11"/><circle class="petal" cx="60.7" cy="98.0" r="11"/><circle class="petal" cx="67.8" cy="85.6" r="11"/><circle class="petal" cx="82.2" cy="85.6" r="11"/><circle class="yellow" cx="75" cy="98" r="9.9"/>
  <ellipse class="yellow" cx="108" cy="66" rx="9" ry="6"/><line class="arrow" x1="105" y1="61" x2="105" y2="71" style="stroke:#111"/><line class="arrow" x1="110" y1="61" x2="110" y2="71" style="stroke:#111"/><ellipse class="white" cx="106" cy="58" rx="5" ry="4"/>
  <text class="small" x="75" y="56" text-anchor="middle">Flower</text>
  <line class="arrow" x1="142" y1="115" x2="178" y2="115" style="stroke-width:3"/><polyline class="arrow" points="173,110 180,115 173,120"/>
  <rect class="dash" x="190" y="40" width="110" height="150" rx="10"/>
  <text class="big" x="245" y="130" text-anchor="middle">?</text>
</svg>

**Stem:** A flower slowly turns into something new. What goes in the **?** card?

**Options:**
- A) A root
- B) A leaf
- C) A fruit
- D) A stem

**Answer:** C

**Explanation:** After the bee visits, the flower slowly grows into a fruit. That is how we get mangoes and apples!

**Q6.** *(Recall)* What do we find inside most fruits?
- A) Seeds
- B) Roots
- C) Leaves
- D) Stems
- **Answer:** A
- **Explanation:** Fruits keep seeds safe inside. Cut an apple and you will see small seeds.

**Q7.** *(Recall)* Most leaves are which colour?
- A) Blue
- B) Black
- C) Pink
- D) Green
- **Answer:** D
- **Explanation:** Most leaves are green. The green colour helps them use sunlight to make food.

**Q8.** *(Recall · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A sun, a puffy air cloud and a water drop each have an arrow pointing into a big green leaf that says food">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="label" x="160" y="20" text-anchor="middle">The leaf's kitchen</text>
  <line class="arrow" x1="73.0" y1="58.0" x2="79.0" y2="58.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="67.7" y1="70.7" x2="72.0" y2="75.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="55.0" y1="76.0" x2="55.0" y2="82.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="42.3" y1="70.7" x2="38.0" y2="75.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="37.0" y1="58.0" x2="31.0" y2="58.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="42.3" y1="45.3" x2="38.0" y2="41.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="55.0" y1="40.0" x2="55.0" y2="34.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="67.7" y1="45.3" x2="72.0" y2="41.0" style="stroke:#ca8a04;stroke-width:2"/><circle class="yellow" cx="55" cy="58" r="14"/>
  <g><circle class="white" cx="148" cy="58" r="13"/><circle class="white" cx="164" cy="50" r="15"/><circle class="white" cx="180" cy="60" r="12"/><rect x="140" y="58" width="44" height="12" fill="#ffffff"/><line x1="138" y1="70" x2="190" y2="70" stroke="#374151" stroke-width="1.5"/></g>
  <path class="water" d="M265 36 Q250 60 254 70 A12 12 0 0 0 276 70 Q280 60 265 36 Z"/>
  <line class="arrow" x1="70" y1="90" x2="128" y2="138"/><polyline class="arrow" points="125,133 130,140 135,133"/>
  <line class="arrow" x1="162" y1="80" x2="162" y2="128"/><polyline class="arrow" points="157,123 162,130 167,123"/>
  <line class="arrow" x1="256" y1="90" x2="196" y2="138"/><polyline class="arrow" points="189,133 194,140 199,133"/>
  <ellipse class="part" cx="162" cy="172" rx="64" ry="28"/>
  <line class="vein" x1="98" y1="172" x2="226" y2="172"/>
  <line class="vein" x1="130" y1="172" x2="118" y2="158"/><line class="vein" x1="190" y1="172" x2="204" y2="158"/>
  <text class="label" x="162" y="168" text-anchor="middle">Food!</text>
</svg>

**Stem:** The leaf is the plant's kitchen. Which three things in the picture does it use to make food?

**Options:**
- A) Sand, salt and sugar
- B) Sunlight, air and water
- C) Soil, stones and heat
- D) Moonlight and darkness

**Answer:** B

**Explanation:** Leaves mix sunlight, air and water to make food. This is called photosynthesis.

**Q9.** *(Recall)* A seed can grow into a ______.
- A) new plant
- B) stone
- C) insect
- D) flower pot
- **Answer:** A
- **Explanation:** A seed has a baby plant sleeping inside. With water and warmth, it grows into a new plant.

**Q10.** *(Recall)* Which part of a plant often has bright colours and a sweet smell?
- A) Root
- B) Stem
- C) Flower
- D) Seed
- **Answer:** C
- **Explanation:** Flowers are often bright and sweet-smelling. This brings bees and butterflies to them.

**Q11.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A carrot plant with feathery green leaves above the soil and a long orange part under the soil. An arrow says we eat this part">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="sky" x="0" y="0" width="320" height="90"/><rect class="soil" x="0" y="90" width="320" height="130"/>
  <text class="label" x="12" y="22">Carrot plant</text>
  <path class="stemline" d="M160 92 Q150 60 128 34 M160 92 Q160 58 160 28 M160 92 Q170 60 192 34" style="stroke-width:3"/>
  <ellipse class="part" cx="130" cy="38" rx="10" ry="5" transform="rotate(-40 130 38)"/><line class="vein" x1="122.3" y1="44.4" x2="137.7" y2="31.6"/><ellipse class="part" cx="160" cy="28" rx="10" ry="5" transform="rotate(90 160 28)"/><line class="vein" x1="160.0" y1="18.0" x2="160.0" y2="38.0"/><ellipse class="part" cx="190" cy="38" rx="10" ry="5" transform="rotate(40 190 38)"/><line class="vein" x1="182.3" y1="31.6" x2="197.7" y2="44.4"/><ellipse class="part" cx="144" cy="58" rx="9" ry="4" transform="rotate(-50 144 58)"/><line class="vein" x1="138.2" y1="64.9" x2="149.8" y2="51.1"/><ellipse class="part" cx="176" cy="58" rx="9" ry="4" transform="rotate(50 176 58)"/><line class="vein" x1="170.2" y1="51.1" x2="181.8" y2="64.9"/><ellipse class="part" cx="152" cy="76" rx="8" ry="4" transform="rotate(-60 152 76)"/><line class="vein" x1="148.0" y1="82.9" x2="156.0" y2="69.1"/><ellipse class="part" cx="168" cy="76" rx="8" ry="4" transform="rotate(60 168 76)"/><line class="vein" x1="164.0" y1="69.1" x2="172.0" y2="82.9"/>
  <path class="orange" d="M142 92 L178 92 Q176 140 160 200 Q144 140 142 92 Z"/>
  <path class="arrow" d="M150 115 L156 115 M164 140 L170 140 M151 160 L157 160" style="stroke:#9a3412"/>
  <path class="root" d="M152 150 L138 156 M168 128 L182 122 M160 200 L160 210" style="stroke-width:1.5"/>
  <line class="arrow" x1="260" y1="150" x2="184" y2="140"/><polyline class="arrow" points="191.3,146.0 184,140 192.6,136.1"/><text class="small" x="262" y="168" text-anchor="middle">We eat this part</text>
</svg>

**Stem:** Look at the carrot plant. The orange part we eat grows down into the soil. Which plant part is it?

**Options:**
- A) Stem
- B) Root
- C) Leaf
- D) Flower

**Answer:** B

**Explanation:** A carrot is a root. It grows down into the soil and stores food for the plant.

**Q12.** *(Apply)* When we eat spinach (palak), which part of the plant are we eating?
- A) Root
- B) Fruit
- C) Seed
- D) Leaf
- **Answer:** D
- **Explanation:** Spinach is made of soft green leaves. We cook these leaves to eat.

**Q13.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A potato under the soil with small eyes. Little shoots are growing out of the eyes. A label points to an eye">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="sky" x="0" y="0" width="320" height="70"/><rect class="soil" x="0" y="70" width="320" height="150"/>
  <text class="label" x="12" y="22">Potato under the soil</text>
  <ellipse class="potato" cx="160" cy="140" rx="70" ry="44"/>
  <ellipse cx="128" cy="124" rx="4" ry="2.5" fill="#7c4a1e"/>
  <ellipse cx="186" cy="118" rx="4" ry="2.5" fill="#7c4a1e"/>
  <ellipse cx="170" cy="160" rx="4" ry="2.5" fill="#7c4a1e"/>
  <ellipse cx="134" cy="160" rx="4" ry="2.5" fill="#7c4a1e"/>
  <path class="stemline" d="M128 121 Q118 100 124 66 M186 115 Q196 92 192 64" style="stroke-width:3"/>
  <ellipse class="part" cx="116" cy="58" rx="10" ry="5" transform="rotate(-40 116 58)"/><line class="vein" x1="108.3" y1="64.4" x2="123.7" y2="51.6"/><ellipse class="part" cx="200" cy="56" rx="10" ry="5" transform="rotate(40 200 56)"/><line class="vein" x1="192.3" y1="49.6" x2="207.7" y2="62.4"/>
  <line class="arrow" x1="260" y1="184" x2="176" y2="162"/><polyline class="arrow" points="182.5,168.9 176,162 185.0,159.2"/><text class="small" x="268" y="196" text-anchor="middle">eye</text>
</svg>

**Stem:** This potato grew under the soil. See the little **eyes**? New shoots grow from them. Which part of the plant is a potato?

**Options:**
- A) Root
- B) Leaf
- C) Flower
- D) Stem

**Answer:** D

**Explanation:** A potato is a stem that grows under the soil. Its little "eyes" can grow new shoots. Roots do not have eyes.

**Q14.** *(Apply)* Which of these is a fruit?
- A) Radish
- B) Apple
- C) Cabbage
- D) Ginger
- **Answer:** B
- **Explanation:** An apple grows from a flower and has seeds inside, so it is a fruit.

**Q15.** *(Apply)* Riya tries to pull a weed out of the garden. It is very hard to pull. Why?
- A) Its flowers are too big
- B) Its leaves are too green
- C) Its roots hold the soil tightly
- D) Its fruits are too heavy
- **Answer:** C
- **Explanation:** Roots spread into the soil and hold on tight. That is why a plant is hard to pull out.

**Q16.** *(Apply)* Sweet sugarcane juice comes from which part of the plant?
- A) Stem
- B) Root
- C) Leaf
- D) Flower
- **Answer:** A
- **Explanation:** The tall, thick sugarcane stick is a stem. It stores sweet juice inside.

**Q17.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A cauliflower with a big white bumpy head made of tiny buds, wrapped by green leaves. An arrow points to the white part">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="label" x="12" y="22">Cauliflower</text>
  <ellipse class="part" cx="108" cy="150" rx="46" ry="18" transform="rotate(-30 108 150)"/><line class="vein" x1="68.2" y1="173.0" x2="147.8" y2="127.0"/><ellipse class="part" cx="212" cy="150" rx="46" ry="18" transform="rotate(30 212 150)"/><line class="vein" x1="172.2" y1="127.0" x2="251.8" y2="173.0"/><ellipse class="part" cx="160" cy="172" rx="50" ry="16" transform="rotate(0 160 172)"/><line class="vein" x1="110.0" y1="172.0" x2="210.0" y2="172.0"/>
  <circle class="white" cx="130" cy="118" r="16"/><circle class="white" cx="160" cy="108" r="16"/><circle class="white" cx="190" cy="118" r="16"/><circle class="white" cx="122" cy="140" r="16"/><circle class="white" cx="150" cy="134" r="16"/><circle class="white" cx="176" cy="134" r="16"/><circle class="white" cx="200" cy="142" r="16"/><circle class="white" cx="160" cy="150" r="16"/><circle class="white" cx="140" cy="92" r="16"/><circle class="white" cx="178" cy="92" r="16"/>
  <line class="arrow" x1="268" y1="70" x2="196" y2="98"/><polyline class="arrow" points="205.3,99.8 196,98 201.6,90.4"/><text class="small" x="236" y="56" text-anchor="middle">We eat this white part</text>
</svg>

**Stem:** Look at the cauliflower. The white part is made of many tiny buds packed together. Which plant part are we eating?

**Options:**
- A) Root
- B) Seed
- C) Flower
- D) Fruit

**Answer:** C

**Explanation:** The white part of a cauliflower is made of many tiny flower buds. So we are eating flowers!

**Q18.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="An open green pea pod with five round green peas inside. An arrow points to one pea">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="label" x="12" y="22">An open pea pod</text>
  <path class="part" d="M40 120 Q160 40 284 110 Q160 170 40 120 Z" style="fill:#4ade80"/>
  <path class="part" d="M58 118 Q160 70 266 110 Q160 144 58 118 Z" style="fill:#dcfce7"/>
  <circle class="part" cx="92" cy="114" r="13" style="fill:#22c55e"/><circle class="part" cx="126" cy="108" r="13" style="fill:#22c55e"/><circle class="part" cx="160" cy="106" r="13" style="fill:#22c55e"/><circle class="part" cx="194" cy="107" r="13" style="fill:#22c55e"/><circle class="part" cx="228" cy="110" r="13" style="fill:#22c55e"/>
  <path class="stemline" d="M284 110 Q298 100 300 86" style="stroke-width:3"/>
  <line class="arrow" x1="160" y1="190" x2="160" y2="124"/><polyline class="arrow" points="155.0,132.0 160,124 165.0,132.0"/><text class="small" x="160" y="206" text-anchor="middle">One green pea</text>
</svg>

**Stem:** Look inside the pea pod. Each green pea we eat is the plant's ______.

**Options:**
- A) root
- B) stem
- C) leaf
- D) seed

**Answer:** D

**Explanation:** Peas grow inside a pod. Each pea is a seed. If you plant it, a new pea plant can grow!

**Q19.** *(Apply)* Aman forgets to water his plant for many days. What will most likely happen?
- A) Its leaves droop and dry up
- B) It grows many more flowers
- C) Its roots turn into fruits
- D) Its leaves turn blue
- **Answer:** A
- **Explanation:** Without water, the roots have nothing to drink. The leaves droop and dry up.

**Q20.** *(Apply)* Which group has ONLY roots?
- A) Potato and carrot
- B) Radish and carrot
- C) Spinach and radish
- D) Apple and beetroot
- **Answer:** B
- **Explanation:** Radish and carrot are both roots. Potato is a stem, spinach is a leaf and apple is a fruit.

**Q21.** *(Think harder · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="Two glasses of red water with a celery stick. On day 1 the celery is green. The next day red lines go up the stem into the leaves">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="small" x="80" y="18" text-anchor="middle">Day 1</text>
  <text class="small" x="240" y="18" text-anchor="middle">Next day</text>
  <line x1="160" y1="10" x2="160" y2="210" stroke="#d1d5db" stroke-width="1"/>
  
  <path class="redwater" d="M54 150 L106 150 L102 205 L58 205 Z"/>
  <path class="glass" d="M50 110 L58 205 L102 205 L110 110"/>
  <rect class="part" x="74" y="58" width="12" height="138" rx="5"/>
  <ellipse class="part" cx="62" cy="46" rx="16" ry="7" transform="rotate(-35 62 46)"/><line class="vein" x1="48.9" y1="55.2" x2="75.1" y2="36.8"/><ellipse class="part" cx="98" cy="46" rx="16" ry="7" transform="rotate(35 98 46)"/><line class="vein" x1="84.9" y1="36.8" x2="111.1" y2="55.2"/><ellipse class="part" cx="80" cy="34" rx="14" ry="6" transform="rotate(90 80 34)"/><line class="vein" x1="80.0" y1="20.0" x2="80.0" y2="48.0"/>
  
  <path class="redwater" d="M214 150 L266 150 L262 205 L218 205 Z"/>
  <path class="glass" d="M210 110 L218 205 L262 205 L270 110"/>
  <rect class="part" x="234" y="58" width="12" height="138" rx="5"/>
  <ellipse class="part" cx="222" cy="46" rx="16" ry="7" transform="rotate(-35 222 46)"/><line class="vein" x1="208.9" y1="55.2" x2="235.1" y2="36.8"/><ellipse class="part" cx="258" cy="46" rx="16" ry="7" transform="rotate(35 258 46)"/><line class="vein" x1="244.9" y1="36.8" x2="271.1" y2="55.2"/><ellipse class="part" cx="240" cy="34" rx="14" ry="6" transform="rotate(90 240 34)"/><line class="vein" x1="240.0" y1="20.0" x2="240.0" y2="48.0"/>
  
  <line class="redline" x1="238" y1="196" x2="238" y2="60"/><line class="redline" x1="243" y1="196" x2="243" y2="60"/>
  <line class="redline" x1="238" y1="60" x2="226" y2="48"/><line class="redline" x1="243" y1="60" x2="256" y2="48"/><line class="redline" x1="240" y1="60" x2="240" y2="30"/>
  <text class="small" x="28" y="178" text-anchor="middle">red</text><text class="small" x="28" y="191" text-anchor="middle">water</text>
</svg>

**Stem:** Tara puts a celery stick in red water. The next day she sees red lines going up into its leaves. What does this show?

**Options:**
- A) Leaves drink from the air
- B) The stem carries water up to the leaves
- C) Roots make food for the plant
- D) Flowers carry water to the leaves

**Answer:** B

**Explanation:** The red water moved up the celery stem into the leaves. This shows the stem works like a water pipe.

**Q22.** *(Think harder)* A plant is kept inside a dark cupboard for many days. It becomes weak and pale. Why?
- A) Its leaves cannot make food without sunlight
- B) Its roots got too much sunlight
- C) Its stem turned into a root
- D) Its seeds fell out
- **Answer:** A
- **Explanation:** Leaves need sunlight to make food. In the dark, the plant gets no food, so it grows weak.

**Q23.** *(Think harder)* Someone plucks off all the flowers from a mango tree. What will the tree NOT give this year?
- A) Roots
- B) Leaves
- C) Stem
- D) Mangoes
- **Answer:** D
- **Explanation:** Mangoes grow from mango flowers. With no flowers, there can be no mangoes.

**Q24.** *(Think harder · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="Four mixed-up picture cards: 1 a flower, 2 a seed, 3 a fruit, 4 a young plant in soil">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="label" x="160" y="22" text-anchor="middle">Put the cards in order</text>
  <rect class="card" x="8" y="40" width="70" height="130" rx="8"/><line class="stemline" x1="43" y1="148" x2="43" y2="104" style="stroke-width:3"/><ellipse class="part" cx="34" cy="128" rx="10" ry="4" transform="rotate(-30 34 128)"/><line class="vein" x1="25.3" y1="133.0" x2="42.7" y2="123.0"/><circle class="petal" cx="53.4" cy="94.0" r="8"/><circle class="petal" cx="48.2" cy="103.0" r="8"/><circle class="petal" cx="37.8" cy="103.0" r="8"/><circle class="petal" cx="32.6" cy="94.0" r="8"/><circle class="petal" cx="37.8" cy="85.0" r="8"/><circle class="petal" cx="48.2" cy="85.0" r="8"/><circle class="yellow" cx="43" cy="94" r="7.2"/><circle class="badge" cx="43" cy="40" r="11"/><text class="label" x="43" y="45" text-anchor="middle">1</text><text class="small" x="43" y="162" text-anchor="middle">Flower</text>
  <rect class="card" x="86" y="40" width="70" height="130" rx="8"/><ellipse class="trunk" cx="121" cy="110" rx="16" ry="11"/><path class="vein" d="M110 108 Q121 100 132 108" style="stroke:#fde68a"/><circle class="badge" cx="121" cy="40" r="11"/><text class="label" x="121" y="45" text-anchor="middle">2</text><text class="small" x="121" y="162" text-anchor="middle">Seed</text>
  <rect class="card" x="164" y="40" width="70" height="130" rx="8"/><circle class="red" cx="199" cy="112" r="22"/><line class="stemline" x1="199" y1="90" x2="201" y2="80" style="stroke:#5b3a10;stroke-width:3"/><ellipse class="part" cx="210" cy="82" rx="8" ry="4" transform="rotate(-20 210 82)"/><line class="vein" x1="202.5" y1="84.7" x2="217.5" y2="79.3"/><circle class="badge" cx="199" cy="40" r="11"/><text class="label" x="199" y="45" text-anchor="middle">3</text><text class="small" x="199" y="162" text-anchor="middle">Fruit</text>
  <rect class="card" x="242" y="40" width="70" height="130" rx="8"/><rect class="soil" x="250" y="128" width="54" height="22"/><line class="stemline" x1="277" y1="128" x2="277" y2="98" style="stroke-width:3"/><ellipse class="part" cx="267" cy="96" rx="10" ry="5" transform="rotate(-30 267 96)"/><line class="vein" x1="258.3" y1="101.0" x2="275.7" y2="91.0"/><ellipse class="part" cx="287" cy="96" rx="10" ry="5" transform="rotate(30 287 96)"/><line class="vein" x1="278.3" y1="91.0" x2="295.7" y2="101.0"/><circle class="badge" cx="277" cy="40" r="11"/><text class="label" x="277" y="45" text-anchor="middle">4</text><text class="small" x="277" y="162" text-anchor="middle">Young plant</text>
  <text class="small" x="160" y="200" text-anchor="middle">Which order shows how a plant grows?</text>
</svg>

**Stem:** Look at the four cards. Which order shows how a plant grows?

**Options:**
- A) 3 → 2 → 1 → 4
- B) 1 → 4 → 2 → 3
- C) 2 → 4 → 1 → 3
- D) 4 → 3 → 2 → 1

**Answer:** C

**Explanation:** A seed (2) grows into a young plant (4). The plant gets a flower (1). The flower turns into a fruit (3), and the fruit holds new seeds.

---

## Quiz Set B — 24 MCQs

**Q1.** *(Recall · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A tree with four labels: A on the green leaves, B on a red fruit, C on the thick brown trunk, D on the roots under the soil">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="sky" x="0" y="0" width="320" height="160"/><rect class="soil" x="0" y="160" width="320" height="60"/>
  <text class="label" x="12" y="22">A fruit tree</text>
  <path class="root" d="M150 160 Q130 180 108 196 M160 160 L160 206 M170 160 Q192 180 214 194" style="stroke-width:4"/>
  <rect class="trunk" x="148" y="88" width="24" height="74" rx="4"/>
  <circle class="part" cx="130" cy="72" r="30"/><circle class="part" cx="190" cy="72" r="30"/><circle class="part" cx="160" cy="50" r="34"/>
  <circle class="red" cx="128" cy="82" r="7"/><circle class="red" cx="186" cy="58" r="7"/><circle class="red" cx="200" cy="86" r="7"/>
  <line class="leader" x1="150" y1="40" x2="62" y2="40"/><circle class="badge" cx="50" cy="40" r="11"/><text class="label" x="50" y="45" text-anchor="middle">A</text>
  <line class="leader" x1="207" y1="86" x2="258" y2="86"/><circle class="badge" cx="270" cy="86" r="11"/><text class="label" x="270" y="91" text-anchor="middle">B</text>
  <line class="leader" x1="148" y1="130" x2="62" y2="130"/><circle class="badge" cx="50" cy="130" r="11"/><text class="label" x="50" y="135" text-anchor="middle">C</text>
  <line class="leader" x1="212" y1="192" x2="258" y2="192"/><circle class="badge" cx="270" cy="192" r="11"/><text class="label" x="270" y="197" text-anchor="middle">D</text>
</svg>

**Stem:** Look at the tree. A tree trunk is a big, strong stem. Which labelled part is the **stem**?

**Options:**
- A) Part A
- B) Part B
- C) Part C
- D) Part D

**Answer:** C

**Explanation:** Part C is the thick brown trunk. A trunk is a big, strong stem. It holds the tree up tall.

**Q2.** *(Recall)* How do roots help a plant?
- A) They hold it firmly in the soil
- B) They make the flowers smell
- C) They catch insects
- D) They make sunlight
- **Answer:** A
- **Explanation:** Roots hold the plant firmly in the soil. They also drink water for the plant.

**Q3.** *(Recall)* Which part of the plant keeps the seeds safe?
- A) Root
- B) Stem
- C) Leaf
- D) Fruit
- **Answer:** D
- **Explanation:** The fruit wraps around the seeds and keeps them safe until they are ready.

**Q4.** *(Recall)* Food made in the leaves goes to other parts of the plant through the ______.
- A) flower
- B) stem
- C) seed
- D) soil
- **Answer:** B
- **Explanation:** The stem is like a two-way pipe. Water goes up, and food from the leaves goes to other parts.

**Q5.** *(Recall)* What does the word "photosynthesis" mean?
- A) Plants making food with sunlight
- B) Plants drinking milk
- C) Plants sleeping at night
- D) Seeds falling from trees
- **Answer:** A
- **Explanation:** Photosynthesis is a big word for a simple idea. It means leaves making food with sunlight.

**Q6.** *(Recall)* Bees and butterflies love to visit which part of a plant?
- A) Root
- B) Stem
- C) Seed
- D) Flower
- **Answer:** D
- **Explanation:** Bees and butterflies visit flowers for sweet juice. This visit helps flowers turn into fruits.

**Q7.** *(Recall)* Which part of a plant is usually flat, thin and green?
- A) Root
- B) Seed
- C) Leaf
- D) Fruit
- **Answer:** C
- **Explanation:** Most leaves are flat, thin and green. Being flat helps them catch lots of sunlight.

**Q8.** *(Recall)* What does a seed need to start growing?
- A) Only darkness
- B) Water, air and warmth
- C) Lots of salt
- D) Ice
- **Answer:** B
- **Explanation:** A seed wakes up and sprouts when it gets water, air and warmth.

**Q9.** *(Recall · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A plant in soil. The part under the soil is hidden by a question mark box. Blue arrows go from the box up the stem to the leaves">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="sky" x="0" y="0" width="320" height="130"/><rect class="soil" x="0" y="130" width="320" height="90"/>
  <text class="label" x="12" y="22">Where does water start?</text>
  <line class="stemline" x1="160" y1="130" x2="160" y2="52"/>
  <ellipse class="part" cx="138" cy="70" rx="24" ry="9" transform="rotate(-25 138 70)"/><line class="vein" x1="116.2" y1="80.1" x2="159.8" y2="59.9"/><ellipse class="part" cx="182" cy="62" rx="24" ry="9" transform="rotate(25 182 62)"/><line class="vein" x1="160.2" y1="51.9" x2="203.8" y2="72.1"/><ellipse class="part" cx="140" cy="104" rx="20" ry="8" transform="rotate(-20 140 104)"/><line class="vein" x1="121.2" y1="110.8" x2="158.8" y2="97.2"/>
  <line class="flow" x1="172" y1="150" x2="172" y2="96"/><polyline class="flow" points="167,101 172,94 177,101"/>
  <line class="flow" x1="148" y1="150" x2="148" y2="116"/><polyline class="flow" points="143,121 148,114 153,121"/>
  <rect class="dash" x="120" y="150" width="80" height="58" rx="8"/>
  <text class="big" x="160" y="194" text-anchor="middle">?</text>
  <text class="small" x="230" y="104">water goes up</text>
</svg>

**Stem:** The blue arrows show water going up the stem to the leaves. Which part hidden under the **?** sends the water up?

**Options:**
- A) The flowers
- B) The roots
- C) The fruits
- D) The seeds

**Answer:** B

**Explanation:** Roots drink water from the soil. The stem then carries this water up to the leaves.

**Q10.** *(Recall)* Which part do we call the "kitchen" of the plant?
- A) Root
- B) Stem
- C) Leaf
- D) Seed
- **Answer:** C
- **Explanation:** Leaves cook food for the plant, so we call them the plant's kitchen.

**Q11.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A radish plant with big green leaves above the soil and a long white part under the soil. An arrow says we eat this part">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="sky" x="0" y="0" width="320" height="90"/><rect class="soil" x="0" y="90" width="320" height="130"/>
  <text class="label" x="12" y="22">Radish (mooli) plant</text>
  <ellipse class="part" cx="132" cy="58" rx="30" ry="11" transform="rotate(-55 132 58)"/><line class="vein" x1="114.8" y1="82.6" x2="149.2" y2="33.4"/><ellipse class="part" cx="188" cy="58" rx="30" ry="11" transform="rotate(55 188 58)"/><line class="vein" x1="170.8" y1="33.4" x2="205.2" y2="82.6"/><ellipse class="part" cx="160" cy="48" rx="32" ry="11" transform="rotate(90 160 48)"/><line class="vein" x1="160.0" y1="16.0" x2="160.0" y2="80.0"/>
  <path class="white" d="M144 92 L176 92 Q178 150 160 200 Q142 150 144 92 Z"/>
  <path class="root" d="M160 200 L160 212 M150 150 L138 158 M170 130 L182 124" style="stroke-width:1.5"/>
  <line class="arrow" x1="262" y1="150" x2="182" y2="140"/><polyline class="arrow" points="189.3,146.0 182,140 190.6,136.0"/><text class="small" x="262" y="168" text-anchor="middle">We eat this part</text>
</svg>

**Stem:** Look at the radish plant. The long white part we eat grows down into the soil. Which plant part is it?

**Options:**
- A) Root
- B) Stem
- C) Leaf
- D) Fruit

**Answer:** A

**Explanation:** A radish is a root. It grows deep into the soil and stores food for the plant.

**Q12.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A whole green cabbage and a cabbage cut in half showing many leaves wrapped in layers">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="small" x="85" y="30" text-anchor="middle">Whole cabbage</text>
  <text class="small" x="235" y="30" text-anchor="middle">Cut in half</text>
  <circle class="part" cx="85" cy="120" r="58"/>
  <path class="vein" d="M85 62 Q60 120 85 178 M85 62 Q110 120 85 178 M40 90 Q85 110 130 90"/>
  <circle class="part" cx="235" cy="120" r="58"/>
  <circle class="vein" cx="235" cy="121.8" r="46" style="stroke-width:1.5"/><circle class="vein" cx="235" cy="123.3" r="36" style="stroke-width:1.5"/><circle class="vein" cx="235" cy="124.8" r="26" style="stroke-width:1.5"/><circle class="vein" cx="235" cy="126.3" r="16" style="stroke-width:1.5"/><circle class="vein" cx="235" cy="127.7" r="7" style="stroke-width:1.5"/>
  <text class="small" x="160" y="204" text-anchor="middle">See the layers?</text>
</svg>

**Stem:** A cabbage is cut in half. We can see many layers wrapped tightly into a ball. When we eat cabbage, which plant part are we eating?

**Options:**
- A) Root
- B) Stem
- C) Seed
- D) Leaf

**Answer:** D

**Explanation:** A cabbage is made of many leaves wrapped tightly together. Each layer is a leaf.

**Q13.** *(Apply)* Ginger (adrak) grows under the soil, just like potato. Which part of the plant is it?
- A) Stem
- B) Leaf
- C) Flower
- D) Fruit
- **Answer:** A
- **Explanation:** Ginger is a stem that grows under the soil. Like potato, new shoots can grow from it.

**Q14.** *(Apply)* Mango, banana and guava are all ______.
- A) roots
- B) fruits
- C) stems
- D) leaves
- **Answer:** B
- **Explanation:** Mango, banana and guava all grow from flowers. So they are all fruits.

**Q15.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="An open pod with beans inside, a bowl of red rajma beans, and a bowl of small green moong">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="label" x="160" y="22" text-anchor="middle">Pod, rajma and moong</text>
  <path class="part" d="M20 80 Q160 20 300 70 Q160 120 20 80 Z" style="fill:#4ade80"/>
  <ellipse class="red" cx="70" cy="72" rx="13" ry="8"/><ellipse class="red" cx="110" cy="66" rx="13" ry="8"/><ellipse class="red" cx="150" cy="63" rx="13" ry="8"/><ellipse class="red" cx="190" cy="63" rx="13" ry="8"/><ellipse class="red" cx="230" cy="66" rx="13" ry="8"/>
  <path class="cream" d="M40 150 Q90 200 140 150 Z"/>
  <ellipse class="red" cx="66" cy="146" rx="8" ry="5"/><ellipse class="red" cx="84" cy="142" rx="8" ry="5"/><ellipse class="red" cx="102" cy="146" rx="8" ry="5"/><ellipse class="red" cx="120" cy="143" rx="8" ry="5"/><ellipse class="red" cx="76" cy="154" rx="8" ry="5"/><ellipse class="red" cx="96" cy="154" rx="8" ry="5"/><ellipse class="red" cx="114" cy="153" rx="8" ry="5"/>
  <path class="cream" d="M180 150 Q230 200 280 150 Z"/>
  <circle class="part" cx="198" cy="146" r="4" style="fill:#22c55e"/><circle class="part" cx="208" cy="143" r="4" style="fill:#22c55e"/><circle class="part" cx="218" cy="147" r="4" style="fill:#22c55e"/><circle class="part" cx="228" cy="143" r="4" style="fill:#22c55e"/><circle class="part" cx="238" cy="146" r="4" style="fill:#22c55e"/><circle class="part" cx="248" cy="144" r="4" style="fill:#22c55e"/><circle class="part" cx="258" cy="147" r="4" style="fill:#22c55e"/><circle class="part" cx="204" cy="154" r="4" style="fill:#22c55e"/><circle class="part" cx="214" cy="155" r="4" style="fill:#22c55e"/><circle class="part" cx="224" cy="153" r="4" style="fill:#22c55e"/><circle class="part" cx="234" cy="155" r="4" style="fill:#22c55e"/><circle class="part" cx="244" cy="154" r="4" style="fill:#22c55e"/><circle class="part" cx="254" cy="153" r="4" style="fill:#22c55e"/><circle class="part" cx="220" cy="162" r="4" style="fill:#22c55e"/><circle class="part" cx="232" cy="162" r="4" style="fill:#22c55e"/><circle class="part" cx="242" cy="161" r="4" style="fill:#22c55e"/>
  <text class="small" x="90" y="196" text-anchor="middle">Rajma</text>
  <text class="small" x="230" y="196" text-anchor="middle">Moong</text>
</svg>

**Stem:** Rajma and moong grow inside pods, like in the picture. Which part of the plant are they?

**Options:**
- A) Roots
- B) Leaves
- C) Flowers
- D) Seeds

**Answer:** D

**Explanation:** Rajma and moong are seeds. They grow inside pods on the plant. We cook and eat these seeds as dal.

**Q16.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A whole red tomato and a tomato cut in half showing many small seeds inside">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="small" x="85" y="30" text-anchor="middle">Whole tomato</text>
  <text class="small" x="235" y="30" text-anchor="middle">Cut in half</text>
  <circle class="red" cx="85" cy="118" r="54"/>
  <path class="part" d="M70 66 L85 72 L100 66 L92 78 L85 74 L78 78 Z" style="fill:#22c55e"/>
  <circle class="red" cx="235" cy="118" r="54"/>
  <circle cx="235" cy="118" r="44" fill="#fca5a5"/>
  <line class="redline" x1="235" y1="74" x2="235" y2="162"/><line class="redline" x1="191" y1="118" x2="279" y2="118"/>
  <ellipse class="cream" cx="214" cy="98" rx="4" ry="2.5"/><ellipse class="cream" cx="222" cy="104" rx="4" ry="2.5"/><ellipse class="cream" cx="254" cy="98" rx="4" ry="2.5"/><ellipse class="cream" cx="248" cy="106" rx="4" ry="2.5"/><ellipse class="cream" cx="214" cy="138" rx="4" ry="2.5"/><ellipse class="cream" cx="224" cy="132" rx="4" ry="2.5"/><ellipse class="cream" cx="254" cy="136" rx="4" ry="2.5"/><ellipse class="cream" cx="246" cy="130" rx="4" ry="2.5"/><ellipse class="cream" cx="208" cy="110" rx="4" ry="2.5"/><ellipse class="cream" cx="262" cy="128" rx="4" ry="2.5"/>
  <line class="arrow" x1="296" y1="190" x2="252" y2="138"/><polyline class="arrow" points="253.4,147.3 252,138 261.0,140.9"/><text class="small" x="296" y="206" text-anchor="middle">seeds</text>
</svg>

**Stem:** Look at the tomato cut in half. It grew from a flower and has many seeds inside. So a tomato is a ______.

**Options:**
- A) root
- B) leaf
- C) fruit
- D) stem

**Answer:** C

**Explanation:** A part that grows from a flower and holds seeds is a fruit. So a tomato is a fruit!

**Q17.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A potted plant on a table next to a sunny window. The stem bends towards the window">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="wall" x="0" y="0" width="320" height="220"/>
  <rect class="sky" x="222" y="30" width="86" height="110" style="stroke:#6b7280;stroke-width:3"/>
  <line x1="265" y1="30" x2="265" y2="140" stroke="#6b7280" stroke-width="3"/>
  <line class="arrow" x1="281.0" y1="72.0" x2="287.0" y2="72.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="276.3" y1="83.3" x2="280.6" y2="87.6" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="265.0" y1="88.0" x2="265.0" y2="94.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="253.7" y1="83.3" x2="249.4" y2="87.6" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="249.0" y1="72.0" x2="243.0" y2="72.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="253.7" y1="60.7" x2="249.4" y2="56.4" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="265.0" y1="56.0" x2="265.0" y2="50.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="276.3" y1="60.7" x2="280.6" y2="56.4" style="stroke:#ca8a04;stroke-width:2"/><circle class="yellow" cx="265" cy="72" r="12"/>
  <rect class="trunk" x="20" y="176" width="200" height="10"/>
  <path class="orange" d="M70 176 L110 176 L104 146 L76 146 Z"/>
  <path class="stemline" d="M90 146 Q92 100 150 70"/>
  <ellipse class="part" cx="104" cy="112" rx="14" ry="6" transform="rotate(-50 104 112)"/><line class="vein" x1="95.0" y1="122.7" x2="113.0" y2="101.3"/><ellipse class="part" cx="126" cy="94" rx="14" ry="6" transform="rotate(10 126 94)"/><line class="vein" x1="112.2" y1="91.6" x2="139.8" y2="96.4"/><ellipse class="part" cx="156" cy="64" rx="16" ry="7" transform="rotate(-25 156 64)"/><line class="vein" x1="141.5" y1="70.8" x2="170.5" y2="57.2"/>
  <text class="label" x="12" y="22">After some days</text>
</svg>

**Stem:** Neha keeps a plant near a window. After some days, it bends towards the window. Why?

**Options:**
- A) It wants to see the rain
- B) Its roots are looking for sand
- C) It is running away from the wind
- D) Its leaves need sunlight to make food

**Answer:** D

**Explanation:** Plants grow towards light. Their leaves need sunlight to make food.

**Q18.** *(Apply)* A strong storm blows, but the big tree does not fall. Which part helps the most?
- A) Its deep, strong roots
- B) Its colourful flowers
- C) Its sweet fruits
- D) Its small seeds
- **Answer:** A
- **Explanation:** Deep roots hold the tree tightly in the ground, so the wind cannot knock it over.

**Q19.** *(Apply)* Which plant part is matched with the right job?
- A) Leaf — holds the plant in the soil
- B) Root — makes food with sunlight
- C) Stem — carries water to the leaves
- D) Flower — drinks water from the soil
- **Answer:** C
- **Explanation:** The stem carries water up to the leaves. Roots hold the plant, and leaves make the food.

**Q20.** *(Apply · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A basket with a carrot, a round purple beetroot and a sweet potato, and a blank tag with a question mark">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <text class="label" x="12" y="22">What is this basket?</text>
  <path class="orange" d="M62 104 L82 92 Q112 116 128 136 Q100 126 62 104 Z"/>
  <path class="stemline" d="M70 98 L58 74 M74 96 L76 70" style="stroke-width:3"/>
  <circle class="purple" cx="160" cy="124" r="22"/><path class="root" d="M160 146 L160 162" style="stroke:#4a044e"/><path class="part" d="M156 102 L148 76 M164 102 L172 76" style="fill:none;stroke-width:3"/>
  <ellipse class="pinkred" cx="234" cy="130" rx="34" ry="17" transform="rotate(-15 234 130)" style="fill:#c2410c;stroke:#7c2d12"/>
  <path class="trunk" d="M40 140 L280 140 L262 206 L58 206 Z"/>
  <path class="vein" d="M50 160 L272 160 M56 182 L266 182" style="stroke:#5b3a10"/>
  <rect class="dash" x="236" y="32" width="70" height="34" rx="6"/><text class="label" x="271" y="55" text-anchor="middle">?</text>
  <line class="leader" x1="252" y1="66" x2="232" y2="112"/>
</svg>

**Stem:** This basket has carrot, beetroot and sweet potato. Which label fits the **?** tag best?

**Options:**
- A) Leaves
- B) Roots
- C) Fruits
- D) Flowers

**Answer:** B

**Explanation:** Carrot, beetroot and sweet potato are all roots. They store food under the soil.

**Q21.** *(Think harder)* An old potato is left in the kitchen. Small shoots grow from its "eyes". What does this tell us?
- A) Potato is a root because it grows under the soil
- B) Potato is a fruit because it is round
- C) Potato is a stem because new shoots grow from its eyes
- D) Potato is a leaf because it stores food
- **Answer:** C
- **Explanation:** The eyes on a potato are buds. Buds grow on stems, so a potato is a stem.

**Q22.** *(Think harder)* Rohan cuts off all the leaves of a small plant. What will happen to the plant?
- A) It will grow faster
- B) It will make more food
- C) Its roots will make the food instead
- D) It cannot make food and will grow weak
- **Answer:** D
- **Explanation:** Leaves make the plant's food. Without leaves, the plant gets no food and grows weak.

**Q23.** *(Think harder · Pictorial)*

**Diagram (SVG):**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="A cactus in a hot desert under a bright sun. Its thick green stem is shown cut open with blue water drops stored inside. It has spines, not wide leaves">
  <style><![CDATA[
    .part { fill:#86efac; stroke:#14532d; stroke-width:2; }
    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
    .arrow { stroke:#14532d; stroke-width:1.5; fill:none; }
    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
    .big { font-family: system-ui, sans-serif; font-size:40px; fill:#6b7280; font-weight:700; }
    .badge { fill:#fff; stroke:#14532d; stroke-width:1.5; }
    .card { fill:#fffdf7; stroke:#9ca3af; stroke-width:1.5; }
    .dash { fill:#f9fafb; stroke:#6b7280; stroke-width:1.5; stroke-dasharray:4 3; }
    .leader { stroke:#374151; stroke-width:1; fill:none; stroke-dasharray:3 2; }
    .sky { fill:#e0f2fe; stroke:none; }
    .soil { fill:#d6b48a; stroke:#7c4a1e; stroke-width:1.5; }
    .root { fill:none; stroke:#8b5a2b; stroke-width:2.5; stroke-linecap:round; }
    .stemline { fill:none; stroke:#15803d; stroke-width:5; stroke-linecap:round; }
    .vein { fill:none; stroke:#14532d; stroke-width:1; }
    .trunk { fill:#a16207; stroke:#5b3a10; stroke-width:1.5; }
    .petal { fill:#f9a8d4; stroke:#9d174d; stroke-width:1.5; }
    .yellow { fill:#fde047; stroke:#854d0e; stroke-width:1.5; }
    .orange { fill:#fb923c; stroke:#9a3412; stroke-width:1.5; }
    .red { fill:#ef4444; stroke:#7f1d1d; stroke-width:1.5; }
    .pinkred { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .purple { fill:#a21caf; stroke:#4a044e; stroke-width:1.5; }
    .white { fill:#ffffff; stroke:#374151; stroke-width:1.5; }
    .cream { fill:#fef3c7; stroke:#92400e; stroke-width:1.5; }
    .potato { fill:#d4a373; stroke:#7c4a1e; stroke-width:1.5; }
    .water { fill:#bae6fd; stroke:#0369a1; stroke-width:1.5; }
    .redwater { fill:#fca5a5; stroke:#b91c1c; stroke-width:1.5; }
    .glass { fill:none; stroke:#475569; stroke-width:2; }
    .flow { stroke:#0369a1; stroke-width:2; fill:none; }
    .redline { stroke:#dc2626; stroke-width:1.5; fill:none; }
    .sand { fill:#fde68a; stroke:#b45309; stroke-width:1.5; }
    .wall { fill:#e5e7eb; stroke:#6b7280; stroke-width:1.5; }
  ]]></style>
  <rect x="0" y="0" width="320" height="220" fill="#ffffff"/>
  <rect class="sky" x="0" y="0" width="320" height="170"/><rect class="sand" x="0" y="170" width="320" height="50"/>
  <line class="arrow" x1="288.0" y1="44.0" x2="294.0" y2="44.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="282.7" y1="56.7" x2="287.0" y2="61.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="270.0" y1="62.0" x2="270.0" y2="68.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="257.3" y1="56.7" x2="253.0" y2="61.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="252.0" y1="44.0" x2="246.0" y2="44.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="257.3" y1="31.3" x2="253.0" y2="27.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="270.0" y1="26.0" x2="270.0" y2="20.0" style="stroke:#ca8a04;stroke-width:2"/><line class="arrow" x1="282.7" y1="31.3" x2="287.0" y2="27.0" style="stroke:#ca8a04;stroke-width:2"/><circle class="yellow" cx="270" cy="44" r="14"/>
  <text class="label" x="12" y="22">Cactus in the desert</text>
  <path class="part" d="M134 126 L104 126 Q92 126 92 114 L92 90 Q92 83 99 83 Q106 83 106 90 L106 112 L134 112 Z"/>
  <path class="part" d="M170 112 L200 112 Q212 112 212 100 L212 78 Q212 71 205 71 Q198 71 198 78 L198 98 L170 98 Z"/>
  <rect class="part" x="130" y="56" width="44" height="120" rx="22"/>
  <ellipse cx="152" cy="118" rx="14" ry="40" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
  <path class="water" d="M148 88 Q143 96 148 99 Q153 96 148 88 Z"/><path class="water" d="M156 104 Q151 112 156 115 Q161 112 156 104 Z"/><path class="water" d="M147 120 Q142 128 147 131 Q152 128 147 120 Z"/><path class="water" d="M157 134 Q152 142 157 145 Q162 142 157 134 Z"/><path class="water" d="M150 146 Q145 154 150 157 Q155 154 150 146 Z"/><line class="arrow" x1="130" y1="70" x2="124" y2="67"/><line class="arrow" x1="130" y1="96" x2="124" y2="93"/><line class="arrow" x1="130" y1="150" x2="124" y2="147"/><line class="arrow" x1="174" y1="72" x2="180" y2="69"/><line class="arrow" x1="174" y1="130" x2="180" y2="127"/><line class="arrow" x1="174" y1="156" x2="180" y2="153"/>
  <line class="arrow" x1="250" y1="140" x2="170" y2="120"/><polyline class="arrow" points="176.5,126.8 170,120 179.0,117.1"/><text class="small" x="256" y="158" text-anchor="middle">stored water</text>
</svg>

**Stem:** A cactus lives in the hot, dry desert. It has spines, not wide leaves. Look inside its thick green stem. How does the thick stem help it?

**Options:**
- A) It makes the cactus taste sweet
- B) It stores water for dry days
- C) It pulls sand into the plant
- D) It helps the cactus grow under the sea

**Answer:** B

**Explanation:** The desert has very little rain. The cactus keeps water in its thick stem to use later.

**Q24.** *(Think harder)* Meena says, "Every plant part that grows under the soil is a root." Which food shows that Meena is wrong?
- A) Potato
- B) Carrot
- C) Radish
- D) Beetroot
- **Answer:** A
- **Explanation:** A potato grows under the soil, but it is a stem, not a root. Carrot, radish and beetroot really are roots.
