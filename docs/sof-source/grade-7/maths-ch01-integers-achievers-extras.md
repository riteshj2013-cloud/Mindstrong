# Grade 7 Maths — Chapter 1: Integers (Achievers extras)

## Meta
- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.
- grade: 7
- subject: Maths
- chapter_id: g7-maths-integers-achievers-extras
- parent_chapter_id: g7-maths-integers
- chapter_title: Integers (Achievers extras)
- curriculum_source: NCERT Class 7 themes (public topic list only)
- content_type: original_olympiad_style
- addition: extra_set — does not replace existing items
- item_counts: Extra Set = 5 MCQs, all hard / achievers
- pictorial_items: Extra Set = 2 (inline `**Diagram (SVG):**` blocks)
- render: svg_css_in_app
- answer_balance: 1 A / 2 B / 1 C / 1 D

## Extra Set

### Q01
- **id**: g7-maths-ch01-ach-x-01
- **stem**: Anvay picks any three of the five number cards shown and multiplies the numbers on them. What is the difference between the greatest product and the least product he can make?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 450 158" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Five number cards showing minus 3, minus 2, minus 1, 4 and 5">
  <rect class="bg" x="0" y="0" width="450" height="158" fill="#fff"/>
  <text class="title" x="225.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Anvay's number cards</text>
  <rect class="part card" x="29" y="46" width="64" height="84" rx="8" fill="#fff8e1" stroke="#ef6c00" stroke-width="2"/>
  <text class="label card-value" x="61" y="97.0" font-size="26" text-anchor="middle" font-weight="bold" fill="#c62828">−3</text>
  <rect class="part card" x="111" y="46" width="64" height="84" rx="8" fill="#fff8e1" stroke="#ef6c00" stroke-width="2"/>
  <text class="label card-value" x="143" y="97.0" font-size="26" text-anchor="middle" font-weight="bold" fill="#c62828">−2</text>
  <rect class="part card" x="193" y="46" width="64" height="84" rx="8" fill="#fff8e1" stroke="#ef6c00" stroke-width="2"/>
  <text class="label card-value" x="225" y="97.0" font-size="26" text-anchor="middle" font-weight="bold" fill="#c62828">−1</text>
  <rect class="part card" x="275" y="46" width="64" height="84" rx="8" fill="#fff8e1" stroke="#ef6c00" stroke-width="2"/>
  <text class="label card-value" x="307" y="97.0" font-size="26" text-anchor="middle" font-weight="bold" fill="#263238">4</text>
  <rect class="part card" x="357" y="46" width="64" height="84" rx="8" fill="#fff8e1" stroke="#ef6c00" stroke-width="2"/>
  <text class="label card-value" x="389" y="97.0" font-size="26" text-anchor="middle" font-weight="bold" fill="#263238">5</text>
</svg>
```

- **alt**: Five number cards in a row: −3, −2, −1, 4 and 5.
- **options**:
  - A) 90
  - B) −30
  - C) 50
  - D) 120
- **answer**: A
- **explanation**: For the greatest product, two negative cards make a positive pair: (−3) × (−2) × 5 = 30 (5 × 4 × (−1) is negative). For the least product, use one negative card with the two biggest positives: (−3) × 4 × 5 = −60. The difference is 30 − (−60) = 30 + 60 = 90. −30 is tempting because it works out 30 − 60, dropping the minus sign of −60, but subtracting a negative number adds its size.
- **hint**: Decide which of Anvay's cards make the biggest positive product and which make the most negative one, then subtract with care.
- **skill**: greatest_and_least_products_of_cards
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q02
- **id**: g7-maths-ch01-ach-x-02
- **stem**: In a Mumbai mall, Paridhi's lift starts at floor −3 (the lowest basement), goes up to floor 5, and then comes down to floor −2. The floors are 4 m apart. How many metres does the lift travel in all?
- **options**:
  - A) 20 m
  - B) 4 m
  - C) 60 m
  - D) 32 m
- **answer**: C
- **explanation**: Going up from floor −3 to floor 5 is 5 − (−3) = 8 floors. Coming down from floor 5 to floor −2 is 5 − (−2) = 7 floors. That is 15 floors of 4 m each, so the lift travels 60 m. 20 m is tempting because it ignores the minus signs and counts 5 − 3 = 2 and 5 − 2 = 3 floors, but floors below 0 add to the distance instead of taking away from it.
- **hint**: Count the floors Paridhi's lift passes on each trip separately; a trip from a basement upwards also passes floor 0.
- **skill**: lift_distance_across_floor_zero
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q03
- **id**: g7-maths-ch01-ach-x-03
- **stem**: Ruchir fills a 3 × 3 grid with integers so that the three numbers in any line, across, down or corner to corner, add up to the same number. What is the value of P − Q?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 290 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A three by three magic square of integers with two unknown cells P and Q">
  <rect class="bg" x="0" y="0" width="290" height="280" fill="#fff"/>
  <text class="title" x="145.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Ruchir's magic square</text>
  <rect class="part cell" x="40" y="44" width="70" height="70" rx="0" fill="#ffffff" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="75" y="87.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#263238">−4</text>
  <rect class="part cell" x="110" y="44" width="70" height="70" rx="0" fill="#e8eaf6" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="145" y="87.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#1a237e">P</text>
  <rect class="part cell" x="180" y="44" width="70" height="70" rx="0" fill="#ffffff" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="215" y="87.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#263238">0</text>
  <rect class="part cell" x="40" y="114" width="70" height="70" rx="0" fill="#ffffff" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="75" y="157.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#263238">3</text>
  <rect class="part cell" x="110" y="114" width="70" height="70" rx="0" fill="#ffffff" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="145" y="157.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#263238">−1</text>
  <rect class="part cell" x="180" y="114" width="70" height="70" rx="0" fill="#e8eaf6" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="215" y="157.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#1a237e">Q</text>
  <rect class="part cell" x="40" y="184" width="70" height="70" rx="0" fill="#ffffff" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="75" y="227.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#263238">−2</text>
  <rect class="part cell" x="110" y="184" width="70" height="70" rx="0" fill="#ffffff" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="145" y="227.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#263238">−3</text>
  <rect class="part cell" x="180" y="184" width="70" height="70" rx="0" fill="#ffffff" stroke="#3949ab" stroke-width="2"/>
  <text class="label cell-value" x="215" y="227.0" font-size="22" text-anchor="middle" font-weight="bold" fill="#263238">2</text>
</svg>
```

- **alt**: A 3 by 3 grid. Top row: −4, P, 0. Middle row: 3, −1, Q. Bottom row: −2, −3, 2.
- **options**:
  - A) −4
  - B) 6
  - C) 4
  - D) −6
- **answer**: B
- **explanation**: The diagonal −4, −1, 2 is complete, so every line adds up to −3. Top row: −4 + P + 0 = −3, so P = 1. Middle row: 3 + (−1) + Q = −3, so Q = −5. Then P − Q = 1 − (−5) = 6. −4 is tempting because it works out 1 − 5, dropping the minus sign of Q, but subtracting −5 means adding 5.
- **hint**: Find the common sum from a line of Ruchir's square with no letters in it, then use the row that holds each letter.
- **skill**: integer_magic_square_unknowns
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q04
- **id**: g7-maths-ch01-ach-x-04
- **stem**: Over 6 days, the water level in the reservoir near Sanvika's village changed by −84 cm in all. On each of the first 2 days the level rose by 10 cm. On each of the other days it fell by the same amount. By how much did it fall each day?
- **options**:
  - A) 16 cm
  - B) 14 cm
  - C) 21 cm
  - D) 26 cm
- **answer**: D
- **explanation**: The two rises add +20 cm. The 4 falling days must bring the total from +20 down to −84, a change of −84 − 20 = −104 cm. Shared over 4 days, that is −104 ÷ 4 = −26 cm a day, so the level fell 26 cm each day. 16 cm is tempting because it works out −84 + 20 = −64 and shares that, but the rises pushed the level up, so the falls had to undo them as well.
- **hint**: Work out how much change Sanvika's reservoir needed on the falling days alone, keeping track of the rises on the early days.
- **skill**: equal_daily_fall_from_net_change
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q05
- **id**: g7-maths-ch01-ach-x-05
- **stem**: Divit's metro card starts with ₹160. Every ride takes ₹23 off the balance, and the card still allows a ride as long as the balance after that ride is not below −₹50. How many rides can he take before he must recharge?
- **options**:
  - A) 6 rides
  - B) 9 rides
  - C) 7 rides
  - D) 10 rides
- **answer**: B
- **explanation**: The balance may fall to −₹50, so the rides can use up to 160 + 50 = ₹210. 9 rides cost 9 × 23 = ₹207, leaving −₹47, which is allowed; a 10th ride would leave −₹70, below the limit. So he can take 9 rides. 6 rides is tempting because 6 × 23 = ₹138 is as far as the balance stays at or above ₹0, but this card is allowed to go below zero.
- **hint**: Divit's card may dip below zero, so find the lowest balance allowed and count how many rides fit before passing it.
- **skill**: negative_balance_limit_count
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

## Answer Key

| Q# | id | Answer | skill | difficulty | olympiad_section | pictorial |
|----|----|--------|-------|------------|------------------|-----------|
| Q01 | g7-maths-ch01-ach-x-01 | A | greatest_and_least_products_of_cards | hard | achievers | yes |
| Q02 | g7-maths-ch01-ach-x-02 | C | lift_distance_across_floor_zero | hard | achievers | no |
| Q03 | g7-maths-ch01-ach-x-03 | B | integer_magic_square_unknowns | hard | achievers | yes |
| Q04 | g7-maths-ch01-ach-x-04 | D | equal_daily_fall_from_net_change | hard | achievers | no |
| Q05 | g7-maths-ch01-ach-x-05 | B | negative_balance_limit_count | hard | achievers | no |

## Pictorial notes
- Extra set added to `g7-maths-integers`: five hard multi-step Achievers items; pictorial items Q01, Q03. The parent chapter and its items are unchanged.
- Figures are drawn from the generator's data and read back by verify from geometry and printed text only; no figure carries data-* attributes or class names containing 'data-' (audit rule svg-data-attr). Every key and each tempting option is recomputed by `/workspace/scratch/verify_g7_achievers_extras.py`.
