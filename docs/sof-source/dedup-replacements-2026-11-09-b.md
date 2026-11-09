# Duplicate-prompt replacements (b) — 2026-11-09

## Meta
- source: origin/main c9479649 (read with git show; nothing in the repo was edited). This head already contains the first file (dedup-replacements-2026-11-09.md, merged as #127).
- scope: one distractor fix (g8 exponents a-q04), five exponent-shell replacements, one G5 angles replacement, one G6 fractions replacement, markdown sync blocks for G5 angles Set A Q20 / Set B Q13, and the hint-layer lines for every replaced id
- content_type: original_olympiad_style
- letters: each new item keeps the replaced item's correct-answer letter in the TS file (answerId a–d) and in the source markdown (A–D), which order options differently
- how to apply: in the TS file replace the object with the same id by the TS block shown; in the source markdown replace the same Set/Q block by the house-format item (options in the markdown order shown); then apply the hint-layer lines, because lib/prep/hints/fixes WIN over authored hints (applyHints in lib/prep/hints/index.ts)

## Summary

| # | Id | Change | Old key (TS / md) | New key (TS / md) |
|---|---|---|---|---|
| 1 | g8-maths-exponents-a-q04 | distractor 9³ → 3⁸ only | a) 3⁶ / B) 3⁶ | a) 3⁶ / B) 3⁶ (unchanged) |
| 2 | g8-maths-exponents-a-q11 | item replaced | c) 2⁴ / A) 2⁴ | c) 6 / A) 6 |
| 3 | g8-maths-exponents-a-q20 | item replaced | d) 1 / A) 1 | d) 10³ / A) 10³ |
| 4 | g8-maths-exponents-a-q24 | item replaced | d) 10² / A) 10² | d) p²q² / A) p²q² |
| 5 | g8-maths-exponents-b-q24 | item replaced | d) 10³ / A) 10³ | d) 3¹² / A) 3¹² |
| 6 | g8-maths-exponents-b-q20 | item replaced | d) 1 / A) 1 | d) 9/4 / A) 9/4 |
| 7 | g5-maths-angles-a-q20 | item replaced | b) 60° / D) 240° | b) 210° / D) 210° |
| 8 | g6-maths-frac-b-q05 | item replaced | a) 2/25 / A) 2/25 | a) 1/3 / A) 1/3 |

## Exponent shell check

- **shell**: (aˣ × aʸ) ÷ aᶻ in g8-maths-exponents practice sets
- **before** (origin): a-q11, a-q20, a-q24, b-q22, b-q24 (+ reversed-order variants a-q22, b-q20); b-q11 already replaced by the first file
- **replaced here**: a-q11, a-q20, a-q24, b-q24, b-q20
- **stays**: g8-maths-exponents-b-q22 — Express (7⁻³ × 7⁵) ÷ 7² as a power of 7. (the only practice item left in the (aˣ × aʸ) ÷ aᶻ shell)
- **also stays (flag)**: g8-maths-exponents-a-q22 — Express (5³ ÷ 5⁵) × 5² as a single power of 5. (reversed-order variant, same as the replaced b-q20; CoS to decide)
- **lesson**: the step_5 check 'Simplify (2³ × 2⁵) ÷ 2⁴' is unchanged; no practice item repeats it after this file

## Group 1: g8 exponents a-q04 — two correct options (3⁶ and 9³)

- **replaced_id**: g8-maths-exponents-a-q04
- **old_stem_ts**: (3²)³ = ?   (lib/prep/content/g8-maths-exponents.ts)
- **old_key_ts**: a) 3⁶
- **old_stem_md**: (3²)³ = ?   (docs/sof-source/grade-8/maths-ch06-exponents.md, Set A Q04)
- **old_key_md**: B) 3⁶
- **old_option_ts**: `{ id: "c", text: "9³" }`
- **new_option_ts**: `{ id: "c", text: "3⁸" }`
- **old_option_md**: `  - C) 9³`
- **new_option_md**: `  - C) 3⁸`
- **why_this_item**: 9³ = (3²)³ = 3⁶, so on origin a-q04 has two correct options (3⁶ and 9³). Only that distractor is changed. 3⁸ comes from a real misconception: reading (3²)³ as 3 to the power 2³ = 8 (a 'power tower') instead of multiplying the exponents 2 × 3. It is not equal to 3⁶ and is different from 3⁵ and 3⁹, so exactly one option is correct. Key letter, key value, stem, explanation, hint, skill and difficulty are unchanged.
- **new_key**: TS a) 3⁶ · markdown B) 3⁶ (unchanged)

Markdown block after the fix (only the option line changes):

```markdown
### Q04
- **stem**: (3²)³ = ?
- **options**:
  - A) 3⁵
  - B) 3⁶
  - C) 3⁸
  - D) 3⁹
- **answer**: B
- **explanation**: Power of a power: multiply exponents, 2 × 3 = 6.
- **skill**: laws
- **difficulty**: easy
```

TS object after the fix (only the option line changes; the TS file stores it as escaped unicode, either form is fine):

```ts
  {
    id: "g8-maths-exponents-a-q04",
    prompt: "(3²)³ = ?",
    options: [
      { id: "a", text: "3⁶" },
      { id: "b", text: "3⁵" },
      { id: "c", text: "3⁸" },
      { id: "d", text: "3⁹" }
    ],
    answerId: "a",
    explanation: "Power of a power: multiply exponents, 2 × 3 = 6. 3⁵ is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives 3⁶.",
    hints: ["For a power of a power, multiply the exponents 2 and 3. Keep the base 3."]
  }
```

## Group 2: Exponent laws: a-q11 (same exponent, different bases)

- **group_ids**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20, g8-maths-exponents-a-q22, g8-maths-exponents-b-q22
- **replaced_id**: g8-maths-exponents-a-q11
- **also_replaced_in_this_file**: g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20
- **old_stem_ts**: Simplify: (2³ × 2⁵) ÷ 2⁴   (lib/prep/content/g8-maths-exponents.ts)
- **old_key_ts**: c) 2⁴
- **old_stem_md**: Simplify: (2³ × 2⁵) ÷ 2⁴   (docs/sof-source/grade-8/maths-ch06-exponents.md, Set A Q11)
- **old_key_md**: A) 2⁴
- **kept**: g8-maths-exponents-a-q22 — Express (5³ ÷ 5⁵) × 5² as a single power of 5. (key b) 5⁰)
- **kept**: g8-maths-exponents-b-q22 — Express (7⁻³ × 7⁵) ÷ 7² as a power of 7. (key b) 7⁰)
- **why_this_item**: a-q11 repeats the lesson step_5 check 'Simplify (2³ × 2⁵) ÷ 2⁴' word for word. The new item tests a different law, aⁿ × bⁿ = (ab)ⁿ (same exponent, different bases), with no division step, at medium, keeping TS letter c and markdown letter A.
- **flag_for_cos**: Shell count after this file (and the first file's b-q11, already merged): exactly one practice item in the chapter keeps the (aˣ × aʸ) ÷ aᶻ shell, namely b-q22 'Express (7⁻³ × 7⁵) ÷ 7² as a power of 7.' (kept). a-q22 'Express (5³ ÷ 5⁵) × 5² as a single power of 5.' is the reversed-order (aˣ ÷ aʸ) × aᶻ variant, the same variant as the b-q20 being replaced here; it is kept and flagged for CoS. The lesson step_5 check 'Simplify (2³ × 2⁵) ÷ 2⁴' also stays (it is a lesson check, not a practice item).
- **new_key**: TS c) 6 · markdown A) 6

### Q02
- **id**: g8-maths-exponents-a-q11
- **stem**: Rasika, who lives in Jaipur, works out 2⁶ × 5⁶ without a calculator. How many zeros are there at the end of her answer?
- **options**:
  - A) 6
  - B) 12
  - C) 36
  - D) 5
- **answer**: A
- **explanation**: When two powers have the same exponent, you can multiply the bases: 2⁶ × 5⁶ = (2 × 5)⁶ = 10⁶ = 1,000,000, which ends in 6 zeros. 12 is tempting if you add the exponents 6 and 6, but adding exponents works only when the bases are the same, and here the bases 2 and 5 are different.
- **hint**: Pair each 2 in Rasika's product with a 5; think about what every such pair multiplies to.
- **skill**: laws
- **difficulty**: medium
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g8-maths-exponents-a-q11",
    prompt: "Rasika, who lives in Jaipur, works out 2⁶ × 5⁶ without a calculator. How many zeros are there at the end of her answer?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "36" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "When two powers have the same exponent, you can multiply the bases: 2⁶ × 5⁶ = (2 × 5)⁶ = 10⁶ = 1,000,000, which ends in 6 zeros. 12 is tempting if you add the exponents 6 and 6, but adding exponents works only when the bases are the same, and here the bases 2 and 5 are different.",
    hints: ["Pair each 2 in Rasika's product with a 5; think about what every such pair multiplies to."]
  }
```

## Group 3: Exponent laws: a-q20 (quotient of negative powers of 10, in context)

- **group_ids**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20, g8-maths-exponents-a-q22, g8-maths-exponents-b-q22
- **replaced_id**: g8-maths-exponents-a-q20
- **also_replaced_in_this_file**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20
- **old_stem_ts**: Simplify: (3⁵ × 3⁻²) ÷ 3³   (lib/prep/content/g8-maths-exponents.ts)
- **old_key_ts**: d) 1
- **old_stem_md**: Simplify: (3⁵ × 3⁻²) ÷ 3³   (docs/sof-source/grade-8/maths-ch06-exponents.md, Set A Q20)
- **old_key_md**: A) 1
- **kept**: g8-maths-exponents-a-q22 — Express (5³ ÷ 5⁵) × 5² as a single power of 5. (key b) 5⁰)
- **kept**: g8-maths-exponents-b-q22 — Express (7⁻³ × 7⁵) ÷ 7² as a power of 7. (key b) 7⁰)
- **why_this_item**: a-q20 is a (aˣ × aʸ) ÷ aᶻ shell item (engineering already fixed its explanation, but the whole item is replaced). The new item tests the quotient law with negative exponents of 10 through a measuring context, at hard, keeping TS letter d and markdown letter A.
- **new_key**: TS d) 10³ · markdown A) 10³

### Q03
- **id**: g8-maths-exponents-a-q20
- **stem**: In her school laboratory in Guwahati, Tarini looks at a tiny cell that is 10⁻⁵ m long. How many such cells, placed end to end in a straight line, would make a line 10⁻² m long?
- **options**:
  - A) 10³
  - B) 10⁻³
  - C) 10⁷
  - D) 10⁻⁷
- **answer**: A
- **explanation**: Number of cells = length of the line ÷ length of one cell = 10⁻² ÷ 10⁻⁵ = 10⁻²⁻⁽⁻⁵⁾ = 10³, that is 1,000 cells. 10⁻³ is tempting if you divide the wrong way round (10⁻⁵ ÷ 10⁻²), but a count of cells must be more than 1, because each cell is much shorter than the line.
- **hint**: Divide the length of the whole line by the length of one of Tarini's cells; for powers of the same base, subtract the exponents.
- **skill**: laws
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g8-maths-exponents-a-q20",
    prompt: "In her school laboratory in Guwahati, Tarini looks at a tiny cell that is 10⁻⁵ m long. How many such cells, placed end to end in a straight line, would make a line 10⁻² m long?",
    options: [
      { id: "a", text: "10⁻³" },
      { id: "b", text: "10⁷" },
      { id: "c", text: "10⁻⁷" },
      { id: "d", text: "10³" }
    ],
    answerId: "d",
    explanation: "Number of cells = length of the line ÷ length of one cell = 10⁻² ÷ 10⁻⁵ = 10⁻²⁻⁽⁻⁵⁾ = 10³, that is 1,000 cells. 10⁻³ is tempting if you divide the wrong way round (10⁻⁵ ÷ 10⁻²), but a count of cells must be more than 1, because each cell is much shorter than the line.",
    hints: ["Divide the length of the whole line by the length of one of Tarini's cells; for powers of the same base, subtract the exponents."]
  }
```

## Group 4: Exponent laws: a-q24 (power of a product with two letters)

- **group_ids**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20, g8-maths-exponents-a-q22, g8-maths-exponents-b-q22
- **replaced_id**: g8-maths-exponents-a-q24
- **also_replaced_in_this_file**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20
- **old_stem_ts**: Simplify: (10³ × 10⁻⁵) ÷ 10⁻⁴   (lib/prep/content/g8-maths-exponents.ts)
- **old_key_ts**: d) 10²
- **old_stem_md**: Simplify: (10³ × 10⁻⁵) ÷ 10⁻⁴   (docs/sof-source/grade-8/maths-ch06-exponents.md, Set A Q24)
- **old_key_md**: A) 10²
- **kept**: g8-maths-exponents-a-q22 — Express (5³ ÷ 5⁵) × 5² as a single power of 5. (key b) 5⁰)
- **kept**: g8-maths-exponents-b-q22 — Express (7⁻³ × 7⁵) ÷ 7² as a power of 7. (key b) 7⁰)
- **why_this_item**: a-q24 is a (aˣ × aʸ) ÷ aᶻ shell item. The new item tests the power-of-a-product law (xᵃyᵇ)ⁿ = xᵃⁿyᵇⁿ followed by division, with two letters, at hard, keeping TS letter d and markdown letter A.
- **new_key**: TS d) p²q² · markdown A) p²q²

### Q04
- **id**: g8-maths-exponents-a-q24
- **stem**: In a class quiz in Chennai, Sunanda must write (p³q²)⁴ ÷ (p⁵q³)² in its simplest form, where p and q are not zero. What should she write?
- **options**:
  - A) p²q²
  - B) q
  - C) p²q
  - D) p⁻²q⁻²
- **answer**: A
- **explanation**: Raising a product to a power multiplies each exponent: (p³q²)⁴ = p¹²q⁸ and (p⁵q³)² = p¹⁰q⁶. Dividing subtracts the exponents of matching letters: p¹²⁻¹⁰q⁸⁻⁶ = p²q². The option q is tempting if you add the outside power instead of multiplying (p⁷q⁶ ÷ p⁷q⁵), but a power of a power multiplies the exponents.
- **hint**: Multiply every exponent inside each of Sunanda's brackets by the power outside, then subtract exponents of matching letters.
- **skill**: laws
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g8-maths-exponents-a-q24",
    prompt: "In a class quiz in Chennai, Sunanda must write (p³q²)⁴ ÷ (p⁵q³)² in its simplest form, where p and q are not zero. What should she write?",
    options: [
      { id: "a", text: "q" },
      { id: "b", text: "p²q" },
      { id: "c", text: "p⁻²q⁻²" },
      { id: "d", text: "p²q²" }
    ],
    answerId: "d",
    explanation: "Raising a product to a power multiplies each exponent: (p³q²)⁴ = p¹²q⁸ and (p⁵q³)² = p¹⁰q⁶. Dividing subtracts the exponents of matching letters: p¹²⁻¹⁰q⁸⁻⁶ = p²q². The option q is tempting if you add the outside power instead of multiplying (p⁷q⁶ ÷ p⁷q⁵), but a power of a power multiplies the exponents.",
    hints: ["Multiply every exponent inside each of Sunanda's brackets by the power outside, then subtract exponents of matching letters."]
  }
```

## Group 5: Exponent laws: b-q24 (change of base before the laws)

- **group_ids**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20, g8-maths-exponents-a-q22, g8-maths-exponents-b-q22
- **replaced_id**: g8-maths-exponents-b-q24
- **also_replaced_in_this_file**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q20
- **old_stem_ts**: Simplify: (10⁻² × 10⁴) ÷ 10⁻¹   (lib/prep/content/g8-maths-exponents.ts)
- **old_key_ts**: d) 10³
- **old_stem_md**: Simplify: (10⁻² × 10⁴) ÷ 10⁻¹   (docs/sof-source/grade-8/maths-ch06-exponents.md, Set B Q24)
- **old_key_md**: A) 10³
- **kept**: g8-maths-exponents-a-q22 — Express (5³ ÷ 5⁵) × 5² as a single power of 5. (key b) 5⁰)
- **kept**: g8-maths-exponents-b-q22 — Express (7⁻³ × 7⁵) ÷ 7² as a power of 7. (key b) 7⁰)
- **why_this_item**: b-q24 is a (aˣ × aʸ) ÷ aᶻ shell item. The new item tests rewriting different bases (9 and 27) as powers of a common base before using the laws, at hard, keeping TS letter d and markdown letter A.
- **new_key**: TS d) 3¹² · markdown A) 3¹²

### Q05
- **id**: g8-maths-exponents-b-q24
- **stem**: For a puzzle in her school magazine in Ahmedabad, Anupama must write 9³ × 27² as a single power of 3. Which power of 3 is correct?
- **options**:
  - A) 3¹²
  - B) 3⁵
  - C) 3³⁶
  - D) 3¹⁰
- **answer**: A
- **explanation**: Write each base as a power of 3: 9 = 3² and 27 = 3³. Then 9³ = (3²)³ = 3⁶ and 27² = (3³)² = 3⁶, so 9³ × 27² = 3⁶ × 3⁶ = 3¹². 3⁵ is tempting if you just add the outside exponents 3 and 2, but the bases are 9 and 27, not 3, so they must first be written as powers of 3.
- **hint**: Rewrite Anupama's two bases as powers of a common smaller base before you use any exponent law.
- **skill**: laws
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g8-maths-exponents-b-q24",
    prompt: "For a puzzle in her school magazine in Ahmedabad, Anupama must write 9³ × 27² as a single power of 3. Which power of 3 is correct?",
    options: [
      { id: "a", text: "3⁵" },
      { id: "b", text: "3³⁶" },
      { id: "c", text: "3¹⁰" },
      { id: "d", text: "3¹²" }
    ],
    answerId: "d",
    explanation: "Write each base as a power of 3: 9 = 3² and 27 = 3³. Then 9³ = (3²)³ = 3⁶ and 27² = (3³)² = 3⁶, so 9³ × 27² = 3⁶ × 3⁶ = 3¹². 3⁵ is tempting if you just add the outside exponents 3 and 2, but the bases are 9 and 27, not 3, so they must first be written as powers of 3.",
    hints: ["Rewrite Anupama's two bases as powers of a common smaller base before you use any exponent law."]
  }
```

## Group 6: Exponent laws: b-q20 (powers of reciprocal fractions)

- **group_ids**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24, g8-maths-exponents-b-q20, g8-maths-exponents-a-q22, g8-maths-exponents-b-q22
- **replaced_id**: g8-maths-exponents-b-q20
- **also_replaced_in_this_file**: g8-maths-exponents-a-q11, g8-maths-exponents-a-q20, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24
- **old_stem_ts**: Simplify: (2⁴ ÷ 2⁷) × 2³   (lib/prep/content/g8-maths-exponents.ts)
- **old_key_ts**: d) 1
- **old_stem_md**: Simplify: (2⁴ ÷ 2⁷) × 2³   (docs/sof-source/grade-8/maths-ch06-exponents.md, Set B Q20)
- **old_key_md**: A) 1
- **kept**: g8-maths-exponents-a-q22 — Express (5³ ÷ 5⁵) × 5² as a single power of 5. (key b) 5⁰)
- **kept**: g8-maths-exponents-b-q22 — Express (7⁻³ × 7⁵) ÷ 7² as a power of 7. (key b) 7⁰)
- **why_this_item**: b-q20 'Simplify: (2⁴ ÷ 2⁷) × 2³' is the reversed-order variant of the shell. The new item tests powers of a fraction and its reciprocal ((b/a)ⁿ = (a/b)⁻ⁿ), ending in a negative exponent, at hard, keeping TS letter d and markdown letter A.
- **new_key**: TS d) 9/4 · markdown A) 9/4

### Q06
- **id**: g8-maths-exponents-b-q20
- **stem**: In an inter-school maths relay in Indore, Aarush's team must find the value of (2/3)³ × (3/2)⁵. What is the value?
- **options**:
  - A) 9/4
  - B) 4/9
  - C) 1
  - D) 3/2
- **answer**: A
- **explanation**: 3/2 is the reciprocal of 2/3, so (3/2)⁵ = (2/3)⁻⁵. Then (2/3)³ × (2/3)⁻⁵ = (2/3)³⁻⁵ = (2/3)⁻² = (3/2)² = 9/4. 4/9 is tempting if you end with (2/3)² instead of (2/3)⁻², forgetting that the bigger power belongs to 3/2.
- **hint**: Write the second fraction in Aarush's product as a power of 2/3 with a negative exponent, then add the exponents.
- **skill**: laws
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g8-maths-exponents-b-q20",
    prompt: "In an inter-school maths relay in Indore, Aarush's team must find the value of (2/3)³ × (3/2)⁵. What is the value?",
    options: [
      { id: "a", text: "4/9" },
      { id: "b", text: "1" },
      { id: "c", text: "3/2" },
      { id: "d", text: "9/4" }
    ],
    answerId: "d",
    explanation: "3/2 is the reciprocal of 2/3, so (3/2)⁵ = (2/3)⁻⁵. Then (2/3)³ × (2/3)⁻⁵ = (2/3)³⁻⁵ = (2/3)⁻² = (3/2)² = 9/4. 4/9 is tempting if you end with (2/3)² instead of (2/3)⁻², forgetting that the bigger power belongs to 3/2.",
    hints: ["Write the second fraction in Aarush's product as a power of 2/3 with a negative exponent, then add the exponents."]
  }
```

## Group 7: G5 angles: a-q20 (clock N:00 shell)

- **group_ids**: g5-maths-angles-a-q08, g5-maths-angles-a-q20
- **replaced_id**: g5-maths-angles-a-q20
- **old_stem_ts**: Look at the clock at 2:00. What angle do the hands make?   (lib/prep/content/g5-maths-angles.ts)
- **old_key_ts**: b) 60°
- **old_stem_md**: At exactly 8 o'clock, what is the REFLEX angle between the hands of a clock?   (docs/sof-source/grade-5/maths-ch02-shapes-angles.md, Set A Q20)
- **old_key_md**: D) 240°
- **kept**: g5-maths-angles-a-q08 — Look at the clock at 3:00. What angle do the hands make? (key c) 90°)
- **why_this_item**: a-q20 is the later of the two remaining 'Look at the clock at N:00' items, and replacing it also resolves the TS/markdown mismatch at Set A Q20 (TS 2:00 item vs markdown 8 o'clock reflex item). The new item has no clock hands and no hour-hand turn: two ribbons on a clock dial, asking for the reflex angle (30° per number), at hard as markdown Set A Q20 records, with a figure as the TS item had. It keeps TS letter b and markdown letter D.
- **flag_for_cos**: After this replacement a-q08 ('Look at the clock at 3:00…') is the only N:00 clock item left in Set A; Set B keeps b-q08 (6 o'clock angle type), b-q20 (10 o'clock reflex) and b-q24 (9:30), which are different questions.
- **flag_for_cos**: The old markdown Set A Q20 (8 o'clock reflex, hard) was never served in TS; the new item keeps its skill (clock_angle), difficulty (hard) and letter D, so the Answer Key row 'Q20 | D | clock_angle | hard' does not change.
- **new_key**: TS b) 210° · markdown D) 210°

### Q07
- **id**: g5-maths-angles-a-q20
- **stem**: For an art project in Amritsar, Gurleen takes the hands off an old wall clock and stretches two ribbons from the centre of the dial: one to the number 2 and one to the number 7. The dashed arc in the picture marks the reflex angle between the ribbons. What is the size of this reflex angle?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A clock dial without hands; an orange ribbon runs from the centre to 2, a purple ribbon runs from the centre to 7, and a dashed arc goes the long way round from 7 to 2">
  <rect class="bg" x="0" y="0" width="400" height="260" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Gurleen's clock dial</text>
  <circle class="part clock" cx="200" cy="135" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <line class="part tick" x1="240.5" y1="64.9" x2="236.5" y2="71.8" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="230.5" y="86.2" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="part tick" x1="270.1" y1="94.5" x2="263.2" y2="98.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="252.8" y="108.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="part tick" x1="281.0" y1="135.0" x2="273.0" y2="135.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="261.0" y="139.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="part tick" x1="270.1" y1="175.5" x2="263.2" y2="171.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="252.8" y="169.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="part tick" x1="240.5" y1="205.1" x2="236.5" y2="198.2" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="230.5" y="191.8" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="part tick" x1="200.0" y1="216.0" x2="200.0" y2="208.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="200.0" y="200.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="part tick" x1="159.5" y1="205.1" x2="163.5" y2="198.2" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="169.5" y="191.8" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="part tick" x1="129.9" y1="175.5" x2="136.8" y2="171.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="147.2" y="169.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="part tick" x1="119.0" y1="135.0" x2="127.0" y2="135.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="139.0" y="139.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="part tick" x1="129.9" y1="94.5" x2="136.8" y2="98.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="147.2" y="108.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="part tick" x1="159.5" y1="64.9" x2="163.5" y2="71.8" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="169.5" y="86.2" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part tick" x1="200.0" y1="54.0" x2="200.0" y2="62.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="200.0" y="78.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <path class="part reflex-arc" d="M 187.0 157.5 A 26 26 0 1 1 222.5 122.0" fill="none" stroke="#2e7d32" stroke-width="2.5" stroke-dasharray="5 3"/>
  <line class="part ribbon-1" x1="200" y1="135" x2="245.0" y2="109.0" stroke="#e65100" stroke-width="4" stroke-linecap="round"/>
  <line class="part ribbon-2" x1="200" y1="135" x2="174.0" y2="180.0" stroke="#6a1b9a" stroke-width="4" stroke-linecap="round"/>
  <circle class="part hub" cx="200" cy="135" r="4" fill="#333"/>
  <text class="label caption" x="200" y="246" font-size="12" text-anchor="middle" font-weight="normal" fill="#555">Ribbons to 2 and to 7 · dashed arc: reflex angle</text>
</svg>
```

- **alt**: A clock dial numbered 1 to 12 with no hands. An orange ribbon goes from the centre to 2 and a purple ribbon goes from the centre to 7. A dashed green arc goes the long way round, from 7 past 12 to 2.
- **options**:
  - A) 150°
  - B) 180°
  - C) 240°
  - D) 210°
- **answer**: D
- **explanation**: Neighbouring numbers on a clock dial are 360° ÷ 12 = 30° apart. The short way from 2 to 7 is 5 steps, so the smaller angle is 5 × 30° = 150°, and the reflex angle is 360° − 150° = 210° (the long way, from 7 past 12 to 2, is 7 steps, and 7 × 30° = 210°). 150° is tempting because it is the smaller angle between the ribbons, but a reflex angle is the one greater than 180°.
- **hint**: On Gurleen's dial each step from one number to the next is 30°; count the steps along the dashed arc.
- **skill**: clock_angle
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes

TS replacement object:

```ts
  {
    id: "g5-maths-angles-a-q20",
    prompt: "For an art project in Amritsar, Gurleen takes the hands off an old wall clock and stretches two ribbons from the centre of the dial: one to the number 2 and one to the number 7. The dashed arc in the picture marks the reflex angle between the ribbons. What is the size of this reflex angle?",
    options: [
      { id: "a", text: "150°" },
      { id: "b", text: "210°" },
      { id: "c", text: "180°" },
      { id: "d", text: "240°" }
    ],
    answerId: "b",
    explanation: "Neighbouring numbers on a clock dial are 360° ÷ 12 = 30° apart. The short way from 2 to 7 is 5 steps, so the smaller angle is 5 × 30° = 150°, and the reflex angle is 360° − 150° = 210° (the long way, from 7 past 12 to 2, is 7 steps, and 7 × 30° = 210°). 150° is tempting because it is the smaller angle between the ribbons, but a reflex angle is the one greater than 180°.",
    hints: ["On Gurleen's dial each step from one number to the next is 30°; count the steps along the dashed arc."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A clock dial without hands; an orange ribbon runs from the centre to 2, a purple ribbon runs from the centre to 7, and a dashed arc goes the long way round from 7 to 2\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"260\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"200\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Gurleen's clock dial</text>\n  <circle class=\"part clock\" cx=\"200\" cy=\"135\" r=\"85\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"240.5\" y1=\"64.9\" x2=\"236.5\" y2=\"71.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"230.5\" y=\"86.2\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"part tick\" x1=\"270.1\" y1=\"94.5\" x2=\"263.2\" y2=\"98.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"252.8\" y=\"108.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"part tick\" x1=\"281.0\" y1=\"135.0\" x2=\"273.0\" y2=\"135.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"261.0\" y=\"139.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"part tick\" x1=\"270.1\" y1=\"175.5\" x2=\"263.2\" y2=\"171.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"252.8\" y=\"169.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"part tick\" x1=\"240.5\" y1=\"205.1\" x2=\"236.5\" y2=\"198.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"230.5\" y=\"191.8\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"part tick\" x1=\"200.0\" y1=\"216.0\" x2=\"200.0\" y2=\"208.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"200.0\" y=\"200.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"part tick\" x1=\"159.5\" y1=\"205.1\" x2=\"163.5\" y2=\"198.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"169.5\" y=\"191.8\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"part tick\" x1=\"129.9\" y1=\"175.5\" x2=\"136.8\" y2=\"171.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"147.2\" y=\"169.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"part tick\" x1=\"119.0\" y1=\"135.0\" x2=\"127.0\" y2=\"135.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"139.0\" y=\"139.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"part tick\" x1=\"129.9\" y1=\"94.5\" x2=\"136.8\" y2=\"98.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"147.2\" y=\"108.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <line class=\"part tick\" x1=\"159.5\" y1=\"64.9\" x2=\"163.5\" y2=\"71.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"169.5\" y=\"86.2\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <line class=\"part tick\" x1=\"200.0\" y1=\"54.0\" x2=\"200.0\" y2=\"62.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"200.0\" y=\"78.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <path class=\"part reflex-arc\" d=\"M 187.0 157.5 A 26 26 0 1 1 222.5 122.0\" fill=\"none\" stroke=\"#2e7d32\" stroke-width=\"2.5\" stroke-dasharray=\"5 3\"/>\n  <line class=\"part ribbon-1\" x1=\"200\" y1=\"135\" x2=\"245.0\" y2=\"109.0\" stroke=\"#e65100\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <line class=\"part ribbon-2\" x1=\"200\" y1=\"135\" x2=\"174.0\" y2=\"180.0\" stroke=\"#6a1b9a\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <circle class=\"part hub\" cx=\"200\" cy=\"135\" r=\"4\" fill=\"#333\"/>\n  <text class=\"label caption\" x=\"200\" y=\"246\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">Ribbons to 2 and to 7 · dashed arc: reflex angle</text>\n</svg>", "alt": "A clock dial numbered 1 to 12 with no hands. An orange ribbon goes from the centre to 2 and a purple ribbon goes from the centre to 7. A dashed green arc goes the long way round, from 7 past 12 to 2."}
  }
```

## Group 8: G6 fractions: b-q05 ('Convert 0.N' shell)

- **group_ids**: g6-maths-frac-a-q05, g6-maths-frac-b-q05
- **replaced_id**: g6-maths-frac-b-q05
- **old_stem_ts**: Convert 0.08 to a fraction in simplest form.   (lib/prep/content/g6-maths-fractions-decimals.ts)
- **old_key_ts**: a) 2/25
- **old_stem_md**: Convert 0.08 to a fraction in simplest form.   (docs/sof-source/grade-6/maths-ch02-fractions-decimals.md, Set B Q05)
- **old_key_md**: A) 2/25
- **kept**: g6-maths-frac-a-q05 — Convert 0.7 to a fraction in simplest form. (key a) 7/10)
- **why_this_item**: b-q05 is the Set B (later) copy of the 'Convert 0.N to a fraction in simplest form' shell (b-q21 was already replaced by the first file). The new item tests fraction–decimal comparison (which fraction lies strictly between two decimals) instead of conversion, keeping TS letter a and markdown letter A.
- **flag_for_cos**: The source markdown for this chapter records no skill or difficulty; the labels below are mine, as in the first file.
- **new_key**: TS a) 1/3 · markdown A) 1/3

### Q08
- **id**: g6-maths-frac-b-q05
- **stem**: Nishtha marks 0.3 and 0.4 on a number line in her notebook in Nashik. Which fraction lies between these two marks?
- **options**:
  - A) 1/3
  - B) 3/4
  - C) 2/5
  - D) 3/10
- **answer**: A
- **explanation**: Write each fraction as a decimal: 1/3 = 0.333…, which is more than 0.3 and less than 0.4. 2/5 = 0.4 and 3/10 = 0.3 sit exactly on the marks, not between them, and 3/4 = 0.75 is far past 0.4. 3/4 is tempting because it is made of the digits 3 and 4, but it means three quarters, not a number between 0.3 and 0.4.
- **hint**: Turn each fraction into a decimal and test it against the two marks on Nishtha's number line.
- **skill**: compare_fractions_decimals
- **difficulty**: medium
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g6-maths-frac-b-q05",
    prompt: "Nishtha marks 0.3 and 0.4 on a number line in her notebook in Nashik. Which fraction lies between these two marks?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "3/4" },
      { id: "c", text: "2/5" },
      { id: "d", text: "3/10" }
    ],
    answerId: "a",
    explanation: "Write each fraction as a decimal: 1/3 = 0.333…, which is more than 0.3 and less than 0.4. 2/5 = 0.4 and 3/10 = 0.3 sit exactly on the marks, not between them, and 3/4 = 0.75 is far past 0.4. 3/4 is tempting because it is made of the digits 3 and 4, but it means three quarters, not a number between 0.3 and 0.4.",
    hints: ["Turn each fraction into a decimal and test it against the two marks on Nishtha's number line."]
  }
```

## Markdown sync: G5 angles Set A Q20 and Set B Q13

- **file**: docs/sof-source/grade-5/maths-ch02-shapes-angles.md
- **format**: the same fields engineering used for the merged Set B Q13 (id, stem, alt, options, answer, explanation, hint, skill, difficulty, type, pictorial); the SVG lives in the TS figure only, as for every other clock item in this markdown
- **set_a_q20**: replace the 8 o'clock REFLEX block with the block below (= TS a-q20 after Group 7)
- **set_b_q13**: already matches TS b-q13 on origin c9479649 (the Indrajit hour-hand item from the first file); block repeated below for checking, no change needed
- **answer_key**: rows 'Q20 | D | clock_angle | hard' (Set A) and 'Q13 | C | clock_angle | medium' (Set B) stay as they are

Set A Q20:

```markdown
### Q20
- **id**: g5-maths-angles-a-q20
- **stem**: For an art project in Amritsar, Gurleen takes the hands off an old wall clock and stretches two ribbons from the centre of the dial: one to the number 2 and one to the number 7. The dashed arc in the picture marks the reflex angle between the ribbons. What is the size of this reflex angle?
- **alt**: A clock dial numbered 1 to 12 with no hands. An orange ribbon goes from the centre to 2 and a purple ribbon goes from the centre to 7. A dashed green arc goes the long way round, from 7 past 12 to 2.
- **options**:
  - A) 150°
  - B) 180°
  - C) 240°
  - D) 210°
- **answer**: D
- **explanation**: Neighbouring numbers on a clock dial are 360° ÷ 12 = 30° apart. The short way from 2 to 7 is 5 steps, so the smaller angle is 5 × 30° = 150°, and the reflex angle is 360° − 150° = 210° (the long way, from 7 past 12 to 2, is 7 steps, and 7 × 30° = 210°). 150° is tempting because it is the smaller angle between the ribbons, but a reflex angle is the one greater than 180°.
- **hint**: On Gurleen's dial each step from one number to the next is 30°; count the steps along the dashed arc.
- **skill**: clock_angle
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
```

Set B Q13:

```markdown
### Q13
- **id**: g5-maths-angles-b-q13
- **stem**: Indrajit's art class in Mysuru starts at 1 o'clock and ends at 5 o'clock the same afternoon. The clock shows the hour hand at the start (dashed) and at the end (solid). Through what angle does the hour hand turn during the class?
- **alt**: A clock face numbered 1 to 12. The minute hand points to 12. A dashed grey hour hand points to 1 and a solid blue hour hand points to 5, with a dashed green arc running clockwise from 1 to 5.
- **options**:
  - A) 90°
  - B) 150°
  - C) 120°
  - D) 60°
- **answer**: C
- **explanation**: In one hour the hour hand moves from one number to the next, which is 360° ÷ 12 = 30°. From 1 o'clock to 5 o'clock is 4 hours (1 → 2 → 3 → 4 → 5), so it turns 4 × 30° = 120°. 150° is tempting if you count the five numbers 1, 2, 3, 4 and 5 instead of the gaps between them.
- **hint**: In Indrajit's class, count the hours the hour hand travels; each hour moves it one twelfth of a full turn.
- **skill**: clock_angle
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes
```

## Hint-layer sync

- lib/prep/hints/fixes/*.ts WIN over authored question.hints (applyHints, lib/prep/hints/index.ts), so without these lines the app would keep showing each replaced item's OLD hint. The base overlays (lib/prep/hints/gN-maths.ts) are replaced too, as engineering did for the first file.
- g8-maths-exponents-a-q04 keeps its hint (the stem and key are unchanged), so it has no lines here.

lib/prep/hints/fixes/maths-g5.ts:

```diff
-  "g5-maths-angles-a-q20": ["Each hour mark is 30°. Count the marks from 12 to the hour hand at 2."],
+  "g5-maths-angles-a-q20": ["On Gurleen's dial each step from one number to the next is 30°; count the steps along the dashed arc."],
```

lib/prep/hints/fixes/maths-g6.ts:

```diff
-  "g6-maths-frac-b-q05": ["0.08 is 8 hundredths. Write it over 100, then divide top and bottom by 4."],
+  "g6-maths-frac-b-q05": ["Turn each fraction into a decimal and test it against the two marks on Nishtha's number line."],
```

lib/prep/hints/fixes/maths-g8.ts:

```diff
-  "g8-maths-exponents-a-q11": ["Add the exponents 3 and 5 inside the bracket first, then subtract the divisor's exponent."],
+  "g8-maths-exponents-a-q11": ["Pair each 2 in Rasika's product with a 5; think about what every such pair multiplies to."],
-  "g8-maths-exponents-a-q20": ["Add the exponents 5 and −2, then subtract 3. What is any non-zero number to the power 0?"],
+  "g8-maths-exponents-a-q20": ["Divide the length of the whole line by the length of one of Tarini's cells; for powers of the same base, subtract the exponents."],
-  "g8-maths-exponents-a-q24": ["Add the exponents 3 and −5, then subtract −4. Subtracting a negative exponent adds."],
+  "g8-maths-exponents-a-q24": ["Multiply every exponent inside each of Sunanda's brackets by the power outside, then subtract exponents of matching letters."],
-  "g8-maths-exponents-b-q24": ["Add the exponents −2 and 4, then subtract −1. Subtracting a negative exponent adds."],
+  "g8-maths-exponents-b-q24": ["Rewrite Anupama's two bases as powers of a common smaller base before you use any exponent law."],
-  "g8-maths-exponents-b-q20": ["Subtract the exponents 4 − 7, then add 3. What is any non-zero number to that power?"],
+  "g8-maths-exponents-b-q20": ["Write the second fraction in Aarush's product as a power of 2/3 with a negative exponent, then add the exponents."],
```

lib/prep/hints/g5-maths.ts:

```diff
-  "g5-maths-angles-a-q20": ["Each hour mark is 30°. Count marks from 12 to the hour hand."],
+  "g5-maths-angles-a-q20": ["On Gurleen's dial each step from one number to the next is 30°; count the steps along the dashed arc."],
```

lib/prep/hints/g6-maths.ts:

```diff
-  "g6-maths-frac-b-q05": ["Two decimal places → /100, then simplify."],
+  "g6-maths-frac-b-q05": ["Turn each fraction into a decimal and test it against the two marks on Nishtha's number line."],
```

lib/prep/hints/g8-maths.ts:

```diff
-  "g8-maths-exponents-a-q11": ["Same base: add for \u00d7, subtract for \u00f7, multiply for a power of a power."],
+  "g8-maths-exponents-a-q11": ["Pair each 2 in Rasika's product with a 5; think about what every such pair multiplies to."],
-  "g8-maths-exponents-a-q20": ["Same base: add for \u00d7, subtract for \u00f7, multiply for a power of a power."],
+  "g8-maths-exponents-a-q20": ["Divide the length of the whole line by the length of one of Tarini's cells; for powers of the same base, subtract the exponents."],
-  "g8-maths-exponents-a-q24": ["Same base: add for \u00d7, subtract for \u00f7, multiply for a power of a power."],
+  "g8-maths-exponents-a-q24": ["Multiply every exponent inside each of Sunanda's brackets by the power outside, then subtract exponents of matching letters."],
-  "g8-maths-exponents-b-q24": ["Same base: add for \u00d7, subtract for \u00f7, multiply for a power of a power."],
+  "g8-maths-exponents-b-q24": ["Rewrite Anupama's two bases as powers of a common smaller base before you use any exponent law."],
-  "g8-maths-exponents-b-q20": ["Same base: add for \u00d7, subtract for \u00f7, multiply for a power of a power."],
+  "g8-maths-exponents-b-q20": ["Write the second fraction in Aarush's product as a power of 2/3 with a negative exponent, then add the exponents."],
```

## Judgment calls

- 'Only ONE (aˣ×aʸ)÷aᶻ shell remains': all five listed ids are replaced as instructed, so the item that stays is b-q22 ('Express (7⁻³ × 7⁵) ÷ 7² as a power of 7.'). It is worded 'Express … as a power of 7' rather than 'Simplify:', but it is the same shell. a-q22 is the reversed-order variant (as b-q20 was) and is flagged, not changed.
- The five exponent replacements keep skill 'laws' and each replaced item's difficulty, and each uses a different angle: same exponent with different bases (a-q11), quotient of negative powers of 10 (a-q20), power of a product with two letters (a-q24), change of base before the laws (b-q24), and reciprocal fractions ending in a negative exponent (b-q20).
- G5 angles: a-q20 is replaced rather than a-q08. a-q20 is the later item, and replacing it also ends the TS/markdown mismatch at Set A Q20. The new item keeps the markdown's recorded difficulty (hard) and letter D, so the Answer Key row does not change. The figure has no clock hands, so it is neither an N:00 shell nor an hour-hand turn like the first file's b-q13.
- G6 fractions: b-q05 is replaced (the Set B copy). a-q05 stays as the chapter's one 'Convert 0.N' item.
- a-q04: only the 9³ option text changes (TS option c, markdown option C). 3⁸ is the 'power tower' slip (3 to the power 2³).
- Markdown sync blocks omit the SVG, following the format engineering used for the merged Set B Q13; the TS objects carry the figure.
