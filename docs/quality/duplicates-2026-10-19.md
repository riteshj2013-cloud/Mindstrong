# Duplicate question stems — 2026-10-19

Source: Business Lead scorecard item 7. Branch `fix/scorecard-1019`, merged in PR #46 (main `8bfc38d`).

Duplicates were detected on the questions as served (after pictorial/hint overlays), comparing stems after ignoring case, quotes, `*`, brackets and punctuation (… — – : ? . ! , ;). That gives **68 groups / 89 extra items** on main at 3b348a0 (59 groups span more than one grade). The scorecard figure was 71/93; the small gap is down to normalisation (for example, `Tally ||||` vs `Tally |||| |||| ||||` and `14 − 5` vs `14 + 5` are different questions and are not counted here).

For each group the first item (lowest grade, then file order) was kept. Each later item was fixed in one of two ways:

- **NEW**: a new original item for the same skill and difficulty, with its own hint, an explanation that says why the tempting wrong option is wrong, and a checked answer key (57 items).
- **STEM**: the item's options and content were already different and only the stem was generic ("Which statement is true?", "Which pair is correctly matched?"). The stem now names the topic; the options and key are unchanged (32 items).

**Left for writers: none.** All 89 extras are resolved. `node scripts/audit-content.mjs` now fails on any repeated stem (rule `duplicate-stem`).

## Groups

### 1. `How many sides does a triangle have?`
- keep `g1-maths-shapes-a-q02`
- NEW `g6-maths-geo-a-q07` → “A polygon has 5 vertices. How many sides does it have?”

### 2. `Which is correct?`
- keep `g2-maths-addsub-a-q16`
- STEM `g2-maths-addsub-b-q16` → “Which addition fact is correct?”
- STEM `g9-maths-numbers-b-q13` → “Which rule about square roots is correct?”

### 3. `Look at the blocks. What number do the blocks make together?`
- keep `g3-maths-numbers-a-q07`
- STEM `g3-maths-numbers-b-q07` → “Look at the hundreds, tens and ones blocks. What number do they show?”

### 4. `Look at the blocks. Which number do the four blocks make together?`
- keep `g4-maths-large-a-q04`
- STEM `g5-maths-large-a-q04` → “Look at the place-value blocks. Which number do they show altogether?”

### 5. `Which list goes from smallest to greatest?`
- keep `g4-maths-large-a-q13`
- STEM `g4-maths-fractions-b-q11` → “Which list of unit fractions goes from smallest to greatest?”
- STEM `g4-maths-fractions-b-q17` → “Which list of sevenths goes from smallest to greatest?”

### 6. `Which of these is NOT a unit fraction?`
- keep `g4-maths-fractions-b-q06`
- NEW `g5-maths-frac-b-q04` → “Which of these unit fractions is the largest?”

### 7. `Which statement is true?`
- keep `g4-maths-measurement-a-q21`
- STEM `g6-maths-int-a-q11` → “Which statement about natural numbers and integers is true?”
- STEM `g6-maths-frac-b-q22` → “Which statement about 0.7 and 7/10 is true?”
- STEM `g7-maths-integers-a-q12` → “Which statement comparing −5 and −2 is true?”
- STEM `g8-maths-rational-a-q07` → “Which statement about integers and rational numbers is true?”
- STEM `g9-maths-numbers-a-q07` → “Which statement about number sets is true?”
- STEM `g10-maths-real-a-q09` → “Which statement about rational and irrational numbers is true?”
- STEM `g4-sci-matter-b-q21` → “Which statement about solids, liquids and gases is TRUE?”
- STEM `g4-sci-body-b-q18` → “Which statement about the human body is true?”
- STEM `g5-sci-force-a-q21` → “Which statement about forces is true?”
- STEM `g6-sci-food-b-q16` → “Which statement about fats in our diet is true?”
- STEM `g6-sci-fibre-a-q17` → “Which statement about fibres is true?”
- STEM `g7-sci-heat-b-q21` → “Which statement about heat and temperature is true?”
- STEM `g8-sci-sound-b-q19` → “Which statement about sound is true?”
- STEM `g9-sci-matter-b-q08` → “Which statement about the states of matter is true?”

### 8. `A ray has…`
- keep `g4-maths-geometry-a-q07`
- NEW `g6-maths-geo-a-q01` → “Which of these is a good model of a ray?”

### 9. `A right angle measures…`
- keep `g4-maths-geometry-a-q09`
- NEW `g7-maths-angles-a-q02` → “Two angles together make a right angle. One of them is 35°. The other is…”

### 10. `Parallel lines…`
- keep `g4-maths-geometry-a-q16`
- NEW `g6-maths-geo-a-q11` → “Which pair of lines on a ruled notebook page are parallel?”

### 11. `A triangle with all sides equal is…`
- keep `g4-maths-geometry-a-q18`
- NEW `g6-maths-geo-b-q05` → “A triangle has sides 6 cm, 6 cm and 4 cm. It is —”

### 12. `A line segment has…`
- keep `g4-maths-geometry-a-q20`
- NEW `g6-maths-geo-a-q02` → “Points P, Q and R lie on a line in that order. How many line segments can be named using these points as endpoints?”

### 13. `A straight angle measures…`
- keep `g4-maths-geometry-b-q04`
- NEW `g6-maths-geo-a-q06` → “The hands of a clock form a straight angle at —”
- NEW `g7-maths-angles-a-q04` → “Angles x and 3x form a linear pair. What is x?”

### 14. `Perimeter of a square of side 9 cm is…`
- keep `g4-maths-geometry-b-q06`
- NEW `g8-maths-mensuration-a-q02` → “A square park has a perimeter of 48 m. What is its area?”

### 15. `Look at the angle. What **type** of angle is shown?`
- keep `g5-maths-angles-a-q07`
- STEM `g5-maths-angles-b-q01` → “Look at the angle in the picture. Which type of angle is it?”

### 16. `Which of these is an integer?`
- keep `g6-maths-int-a-q01`
- NEW `g7-maths-integers-a-q01` → “How many integers lie strictly between −3 and 2?”

### 17. `Which is the smallest?`
- keep `g6-maths-int-b-q12`
- NEW `g7-maths-integers-a-q22` → “The temperatures in four cities one winter night were −4°C, 2°C, −9°C and 0°C. Which was the coldest?”

### 18. `Which is true for every integer n?`
- keep `g6-maths-int-b-q24`
- NEW `g7-maths-integers-b-q09` → “For every integer n, which of these is always equal to n?”

### 19. `An angle of 120° is —`
- keep `g6-maths-geo-a-q05`
- NEW `g7-maths-angles-a-q03` → “An angle of 250° is —”

### 20. `Vertically opposite angles are —`
- keep `g6-maths-geo-b-q17`
- NEW `g7-maths-angles-a-q09` → “Two straight lines cross. One of the angles formed is 65°. What is the angle vertically opposite to it?”

### 21. `2⁻³ equals…`
- keep `g8-maths-exponents-a-q06`
- NEW `g9-maths-numbers-b-q15` → “5⁻² equals…”

### 22. `Which number is rational?`
- keep `g9-maths-numbers-a-q16`
- NEW `g10-maths-real-b-q04` → “Which number can be written in the form p/q, where p and q are integers and q ≠ 0?”

### 23. `Rationalising the denominator of 1/√5 gives…`
- keep `g9-maths-numbers-a-q17`
- NEW `g10-maths-real-a-q08` → “Rationalising the denominator of 6/√3 gives —”

### 24. `The product of a non-zero rational and an irrational number is…`
- keep `g9-maths-numbers-a-q19`
- NEW `g10-maths-real-a-q16` → “The sum of a rational number and an irrational number is always —”

### 25. `√(0.09) equals…`
- keep `g9-maths-numbers-a-q20`
- NEW `g10-maths-real-b-q15` → “√(0.0016) equals —”

### 26. `The degree of the polynomial 5x³ − 2x + 7 is…`
- keep `g9-maths-poly-a-q01`
- NEW `g10-maths-poly-a-q01` → “The degree of the polynomial 4x² − x⁵ + 3x is —”

### 27. `If α and β are zeros of x² − 5x + 6, then α + β equals…`
- keep `g9-maths-poly-a-q17`
- NEW `g10-maths-poly-a-q06` → “If α and β are the zeros of 2x² − 7x + 3, then αβ equals —”

### 28. `The remainder when x³ + 3x + 1 is divided by (x − 1) is…`
- keep `g9-maths-poly-a-q21`
- NEW `g10-maths-poly-a-q04` → “The remainder when x³ − 2x² + 4 is divided by x + 1 is —”

### 29. `Remainder when 2x³ − 3x² + x − 1 is divided by (x − 2) is…`
- keep `g9-maths-poly-b-q08`
- NEW `g10-maths-poly-b-q02` → “Remainder when x³ − 4x + 5 is divided by x − 3 is —”

### 30. `Pick the correct sentence.`
- keep `g1-eng-grammar-a-q01`
- NEW `g1-eng-grammar-b-q01` → “"we play in the park." Which word needs a capital letter?”
- NEW `g2-eng-grammar-a-q01` → “Fill in the blank: "She ___ to school every day."”
- NEW `g2-eng-grammar-b-q01` → “Fill in the blank: "He ___ rice for lunch."”

### 31. `Which needs a capital letter?`
- keep `g1-eng-grammar-a-q08`
- NEW `g2-eng-grammar-a-q07` → “"We visited pune last week." Which word needs a capital letter?”

### 32. `Which is a question?`
- keep `g1-eng-grammar-a-q13`
- NEW `g1-eng-grammar-b-q13` → “Which sentence needs a question mark (?) at the end?”

### 33. `Which needs a capital?`
- keep `g1-eng-grammar-b-q08`
- NEW `g2-eng-grammar-b-q07` → “Which day name is written correctly?”

### 34. `Pick the describing word.`
- keep `g2-eng-grammar-a-q05`
- NEW `g2-eng-grammar-b-q05` → “Pick the describing word: "Ravi has a big kite."”

### 35. `Which is a question word?`
- keep `g2-eng-grammar-a-q13`
- NEW `g2-eng-grammar-b-q12` → “Which question word asks about a time?”

### 36. `Which word means almost the SAME as "big"?`
- keep `g3-eng-synonyms-a-q02`
- NEW `g4-eng-ch03-b-q14` → “Which word means almost the SAME as "tiny"?”

### 37. `Which word means almost the SAME as "begin"?`
- keep `g3-eng-synonyms-a-q04`
- NEW `g4-eng-ch03-a-q15` → “Which word means almost the SAME as "quick"?”

### 38. `Which sentence is written correctly?`
- keep `g3-eng-grammar-a-q21`
- STEM `g3-eng-grammar-b-q21` → “Riya wants to ask her new friend's age. Which sentence is written correctly?”

### 39. `Which of these is a COMMON noun?`
- keep `g4-eng-ch02-a-q12`
- NEW `g5-eng-ch02-b-q10` → “"My cousin lives near the river yamuna." Which word should begin with a capital letter?”

### 40. `Which sentence is correct?`
- keep `g4-eng-ch02-a-q23`
- STEM `g4-eng-ch02-b-q24` → “Which sentence about the boys is correct?”
- STEM `g5-eng-ch02-b-q23` → “Which sentence about the children is correct?”

### 41. `Which sentence uses commas correctly?`
- keep `g4-eng-ch03-a-q22`
- STEM `g5-eng-ch03-a-q20` → “Asha lists the fruit she bought. Which sentence uses commas correctly?”

### 42. `Look at the word tiles. Put them in the correct order to make a sentence.`
- keep `g4-eng-ch03-a-q24`
- STEM `g4-eng-ch03-b-q24` → “Look at the word tiles about a bird. Put them in the correct order to make a sentence.”

### 43. `Which pair is correctly matched?`
- keep `g4-eng-ch05-b-q20`
- STEM `g4-sci-body-b-q01` → “Which sense organ is correctly matched with its sense?”
- STEM `g8-sci-chemfx-b-q22` → “During electrolysis, which electrode is correctly matched with its charge?”

### 44. `Which sentence is punctuated correctly?`
- keep `g5-eng-ch01-b-q24`
- STEM `g5-eng-ch03-b-q21` → “Ramu's sister calls him home. Which sentence is punctuated correctly?”
- STEM `g7-eng-grammar-a-q09` → “Kabir asks a question. Which sentence is punctuated correctly?”

### 45. `Which sentence is grammatically correct?`
- keep `g5-eng-ch02-a-q23`
- STEM `g8-eng-ch02-a-q24` → “Which sentence using "one of" is grammatically correct?”

### 46. `Which sentence is imperative?`
- keep `g6-eng-gram-b-q16`
- NEW `g7-eng-grammar-b-q05` → “Which of these is an imperative sentence?”

### 47. `Antonym of scarce is —`
- keep `g6-eng-vocab-a-q04`
- NEW `g9-eng-ch03-a-q02` → “Antonym of “frequent” is…”

### 48. `Choose the odd one out (not a synonym of happy):`
- keep `g6-eng-vocab-a-q16`
- NEW `g7-eng-words-b-q05` → “Choose the odd one out (not a synonym of “brave”):”

### 49. `Prefix re- in rewrite means —`
- keep `g6-eng-vocab-b-q07`
- NEW `g7-eng-words-b-q06` → “Prefix “mis-” in “misunderstand” means…”

### 50. `Which is a complex sentence?`
- keep `g7-eng-grammar-a-q14`
- NEW `g9-eng-ch02-b-q10` → “Which of these is a complex sentence?”

### 51. `Fill in: If it rains, we ____ indoors.`
- keep `g7-eng-grammar-a-q21`
- NEW `g9-eng-ch02-a-q09` → “Fill in: If you heat ice, it ____.”

### 52. `Identify the clause type: “when the bell rang” in “We left when the bell rang.”`
- keep `g7-eng-grammar-b-q02`
- NEW `g9-eng-ch02-a-q15` → “Identify the clause type: “that she was right” in “Everyone knew that she was right.””

### 53. `Idiom: “spill the beans” means…`
- keep `g7-eng-words-a-q05`
- NEW `g9-eng-ch03-a-q22` → “Idiom: “bite the bullet” means…”

### 54. `Antonym of “expand”?`
- keep `g7-eng-words-a-q07`
- NEW `g9-eng-ch03-a-q15` → “Antonym of “conceal”…”

### 55. `Antonym of “generous”?`
- keep `g7-eng-words-a-q12`
- NEW `g9-eng-ch03-b-q09` → “Antonym of “humble”…”

### 56. `Idiom: “once in a blue moon” means…`
- keep `g7-eng-words-a-q15`
- NEW `g9-eng-ch03-a-q13` → “Idiom: “a blessing in disguise” means…”

### 57. `Synonym of “precise”?`
- keep `g7-eng-words-a-q16`
- NEW `g9-eng-ch03-b-q02` → “Synonym of “meticulous”…”

### 58. `Synonym of “fragile”?`
- keep `g7-eng-words-a-q22`
- NEW `g9-eng-ch03-a-q14` → “Synonym of “obstinate”…”

### 59. `Synonym of “abandon”?`
- keep `g7-eng-words-b-q01`
- NEW `g9-eng-ch03-b-q19` → “Synonym of “diminish”…”

### 60. `Idiom: “hit the nail on the head” means…`
- keep `g7-eng-words-b-q04`
- NEW `g9-eng-ch03-b-q03` → “Idiom: “the tip of the iceberg” means…”

### 61. `Idiom: “cost an arm and a leg” means…`
- keep `g7-eng-words-b-q14`
- NEW `g9-eng-ch03-b-q11` → “Idiom: “under the weather” means…”

### 62. `Animals that eat only plants are…`
- keep `g2-sci-animals-a-q01`
- NEW `g7-sci-nutrition-a-q12` → “A bear eats berries, roots, honey and fish. Based on its diet, a bear is —”

### 63. `Which of these is a liquid?`
- keep `g4-sci-matter-a-q02`
- NEW `g4-sci-matter-b-q01` → “Riya pours water from a tall glass into a flat plate. What happens to the water?”

### 64. `Which statement about germination is correct?`
- keep `g4-sci-plants-b-q15`
- STEM `g5-sci-plants-a-q23` → “Riya puts a bean seed on wet cotton in a bowl. Which statement about its germination is correct?”

### 65. `In science, a force is best described as —`
- keep `g5-sci-force-a-q01`
- NEW `g8-sci-force-a-q01` → “A force can change all of these EXCEPT —”

### 66. `Condensation is the change from —`
- keep `g6-sci-sep-a-q22`
- NEW `g9-sci-matter-a-q14` → “Water droplets form on the outside of a glass of iced water. This is because…”

### 67. `Which factor increases the rate of evaporation?`
- keep `g7-sci-heat-b-q10`
- NEW `g9-sci-matter-a-q09` → “Which change DECREASES the rate of evaporation?”

### 68. `Phloem transports…`
- keep `g9-sci-cell-a-q16`
- NEW `g10-sci-life-a-q11` → “Sugars made in the leaves reach the roots of a plant through the —”

## Writer follow-ups noticed while fixing (not duplicates)

- Some G6/G7 stems are near-duplicates that the exact check does not catch, e.g. `Antonym of temporary is —` (G6) vs `Antonym of “temporary”?` (G7).
- Many G1/G2 hint pairs have a second hint that gives the answer away (e.g. `["Count on five.", "19."]`, `["Adjective.", "Bright."]`). Items touched in this pass got new hints; the rest need a writer pass.

## Follow-up: same-fact pairs within a set (branch `fix/scorecard-followup-1019`)

These stems were not exact duplicates, but they tested the same fact inside one set. The later item was replaced with a new original item of the same skill (own hint, explanation and checked key):

- `g5-maths-angles-a-q13` (repeat of a-q12, North + quarter turn clockwise) → “Meena is facing West. She turns 90° clockwise. Which direction is she facing now?” (North)
- `g5-maths-angles-a-q10` (half turn = 180°, same fact as a-q03 straight angle) → “A wheel makes one complete turn. Through how many degrees has it turned?” (360°)
- `g3-sci-senses-b-q09` (touch → skin, same as b-q02) → “Which of these can you find out ONLY by touching, not by looking?” (warm or cold)
- `g3-sci-senses-b-q16` (pain → skin, same as b-q02) → “Why is it useful that our skin can feel pain?” (it warns us to move away)

## Follow-up 2: Science near-duplicates (branch `science-dup-stems-2026-10-19`)

All Science entries above were already resolved on main (checked against the served stems). A near-duplicate scan of the Science bank (`scripts/near-duplicate-science-stems.mjs`, stem + options token overlap) found 11 more same-fact items, within a grade or repeated from a lower grade. Each later item was replaced with a new original item on the same chapter concept. The id, difficulty and answer letter stay the same, and each new item has its own hint and an explanation that names the tempting wrong option:

- `g1-sci-body-a-q11` (repeats g1-sci-body-a-q05: count hands; same options and answer 2) → “When you sit on a chair, which part of your legs bends?” (knees)
- `g1-sci-body-b-q05` (repeats g1-sci-body-a-q05: count hands; same options and answer 2) → “On a cold winter morning, what should we wear to keep our body warm?” (a warm sweater)
- `g2-sci-airwater-b-q14` (repeats g2-sci-airwater-a-q04: ice is solid water; snow repeated the fact) → “Riya blows into a balloon and it gets bigger. What fills the balloon?” (air)
- `g2-sci-animals-a-q03` (repeats g1-sci-animals-a-q08: birds have wings) → “Which animal moves by crawling on its belly?” (snake)
- `g3-sci-plants-a-q07` (repeats g1-sci-plants-a-q02: leaves are green) → “At a feast in Kerala, food is served on one large, wide leaf. Which leaf is it most likely to be?” (Banana leaf)
- `g3-sci-animals-b-q07` (repeats g2-sci-animals-a-q10: human is an omnivore) → “Which animal can live both on land and in water?” (Frog)
- `g4-sci-plants-a-q01` (repeats g1-sci-plants-a-q01: root grows under the soil) → “A banyan tree has roots that grow down from its branches into the soil, like pillars. What are these roots called?” (Prop roots)
- `g4-sci-plants-a-q09` (repeats g3-sci-plants-a-q12: we eat spinach leaves) → “Which of these vegetables do we eat as a FLOWER?” (Cauliflower)
- `g9-sci-matter-a-q12` (repeats g7-sci-heat-b-q16: 0 °C = 273 K) → “A spoon of sugar is stirred into 50 mL of water until it dissolves, and the water level hardly rises. This shows that particles of matter —” (have spaces between them)
- `g10-sci-life-b-q01` (repeats g7-sci-nutrition-b-q01: raw materials of photosynthesis) → “Before testing a leaf for starch, a potted plant is kept in the dark for about two days. Why?” (To use up the starch already stored in the leaves)
- `g10-sci-life-a-q10` (repeats g9-sci-cell-a-q15: xylem transports water and minerals) → “At night, when transpiration is very low, water still rises a little in the xylem of a plant. This is mainly due to —” (root pressure)

Pairs that look alike but test different facts are listed with reasons in `scripts/audit-baselines/near-duplicate-science-allow.json`.
