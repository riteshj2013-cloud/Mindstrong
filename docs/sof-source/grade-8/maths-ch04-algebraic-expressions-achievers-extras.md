# Grade 8 Maths — Chapter 4: Algebraic Expressions and Identities (Achievers extras)

## Meta
- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.
- grade: 8
- subject: Maths
- chapter_id: g8-maths-ch04-algebraic-expressions-achievers-extras
- parent_chapter_id: g8-maths-ch04-algebraic-expressions
- chapter_title: Algebraic Expressions and Identities (Achievers extras)
- curriculum_source: NCERT Class 8 themes (public topic list only)
- content_type: original_olympiad_style
- addition: extra_set — does not replace existing items
- item_counts: Extra Set = 5 MCQs, all hard / achievers
- pictorial_items: Extra Set = 2 (inline `**Diagram (SVG):**` blocks)
- render: svg_css_in_app
- answer_balance: 1 A / 2 B / 1 C / 1 D

## Extra Set

### Q01
- **id**: g8-maths-ch04-ach-x-01
- **stem**: Akshat's rectangular garden plan is split into four smaller rectangles, and the area of each part, in m², is written inside it. If x = 7, what is the perimeter of the whole garden?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 360 290" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A rectangle split into four parts with areas x squared, 5x, 3x and 15 square metres">
  <rect class="bg" x="0" y="0" width="360" height="290" fill="#fff"/>
  <text class="title" x="180.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Akshat's garden plan</text>
  <rect class="part plot" x="60" y="50" width="140" height="140" rx="0" fill="#c8e6c9" stroke="#33691e" stroke-width="2"/>
  <text class="label part-area" x="130" y="126" font-size="17" text-anchor="middle" font-weight="bold" fill="#263238">x²</text>
  <rect class="part plot" x="200" y="50" width="100" height="140" rx="0" fill="#fff9c4" stroke="#33691e" stroke-width="2"/>
  <text class="label part-area" x="250" y="126" font-size="17" text-anchor="middle" font-weight="bold" fill="#263238">5x</text>
  <rect class="part plot" x="60" y="190" width="140" height="60" rx="0" fill="#ffe0b2" stroke="#33691e" stroke-width="2"/>
  <text class="label part-area" x="130" y="226" font-size="17" text-anchor="middle" font-weight="bold" fill="#263238">3x</text>
  <rect class="part plot" x="200" y="190" width="100" height="60" rx="0" fill="#d1c4e9" stroke="#33691e" stroke-width="2"/>
  <text class="label part-area" x="250" y="226" font-size="17" text-anchor="middle" font-weight="bold" fill="#263238">15</text>
</svg>
```

- **alt**: A large rectangle split into a 2 by 2 arrangement of smaller rectangles. Top row: x² and 5x. Bottom row: 3x and 15.
- **options**:
  - A) 44 m
  - B) 22 m
  - C) 34 m
  - D) 48 m
- **answer**: A
- **explanation**: The top-left part, x², is a square of side x. The top-right part, 5x, has height x, so its width is 5. The bottom-left part, 3x, has width x, so its height is 3; the bottom-right part is 5 × 3 = 15, which checks. The garden is (x + 5) m by (x + 3) m, so its perimeter is 2(2x + 8) = 4x + 16 = 44 m when x = 7. 22 m is tempting because it adds just one length and one breadth, 12 + 10, which is only half the way round.
- **hint**: Use the square part of Akshat's plan to find the side lengths of the other parts, then add all four sides of the garden.
- **skill**: factorising_from_an_area_model
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q02
- **id**: g8-maths-ch04-ach-x-02
- **stem**: The temple courtyard in Gaurika's town is a square with a square pond in the middle, measuring as shown. Everything except the pond is paved with stone at ₹25 per m². What does the paving cost?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 355 335" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A square courtyard of side 47 metres with a square pond of side 33 metres in the middle; the rest is paved">
  <rect class="bg" x="0" y="0" width="355" height="335" fill="#fff"/>
  <text class="title" x="177.5" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Gaurika's temple courtyard</text>
  <rect class="part yard" x="60" y="62" width="235" height="235" rx="0" fill="#d7ccc8" stroke="#4e342e" stroke-width="3"/>
  <rect class="part pond" x="95" y="97" width="165" height="165" rx="0" fill="#81d4fa" stroke="#0277bd" stroke-width="2.5"/>
  <text class="label side" x="177.5" y="52" font-size="15" text-anchor="middle" font-weight="bold" fill="#263238">47 m</text>
  <text class="label side" x="177.5" y="87" font-size="15" text-anchor="middle" font-weight="bold" fill="#01579b">33 m</text>
  <text class="label region-name" x="177.5" y="185.5" font-size="15" text-anchor="middle" font-weight="normal" fill="#01579b">pond</text>
  <text class="label region-name" x="177.5" y="285" font-size="14" text-anchor="middle" font-weight="normal" fill="#3e2723">paved</text>
</svg>
```

- **alt**: A large square labelled 47 m along its top side, with a smaller blue square labelled pond in its middle; the pond's top side is labelled 33 m. The area around the pond is labelled paved.
- **options**:
  - A) ₹4,900
  - B) ₹28,000
  - C) ₹55,225
  - D) ₹27,225
- **answer**: B
- **explanation**: The paved area is 47² − 33². Using a² − b² = (a + b)(a − b), that is (47 + 33)(47 − 33) = 80 × 14 = 1,120 m². At ₹25 per m² the paving costs 1,120 × 25 = ₹28,000. ₹4,900 is tempting because it uses (47 − 33)² = 196 m², but a² − b² is not the same as (a − b)²; the paved region is much bigger than a 14 m square.
- **hint**: Gaurika's paved area is the big square minus the pond; a difference of two squares splits into two easy factors.
- **skill**: difference_of_squares_for_a_paved_border
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q03
- **id**: g8-maths-ch04-ach-x-03
- **stem**: Janhavi multiplies out (2x + k)(x − 3), where k is a number, and finds that the coefficient of x in her answer is 1. What is the value of k?
- **options**:
  - A) 4
  - B) −5
  - C) 3
  - D) 7
- **answer**: D
- **explanation**: (2x + k)(x − 3) = 2x² − 6x + kx − 3k = 2x² + (k − 6)x − 3k. The coefficient of x is k − 6, so k − 6 = 1 and k = 7. 4 is tempting because it takes the x-term as (k − 3)x, forgetting that 2x × (−3) gives −6x, not −3x.
- **hint**: Multiply out Janhavi's two brackets term by term and collect every term that has x to the first power.
- **skill**: unknown_constant_from_a_coefficient
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q04
- **id**: g8-maths-ch04-ach-x-04
- **stem**: At a stationery shop in Indore, a pen costs ₹(2x + 5) and a notebook costs ₹(3x − 4). Lipika buys 4 pens and 3 notebooks and pays with ₹(20x + 20). She gets ₹57 back. What does one notebook cost?
- **options**:
  - A) ₹65
  - B) ₹35
  - C) ₹41
  - D) ₹15
- **answer**: C
- **explanation**: The bill is 4(2x + 5) + 3(3x − 4) = 8x + 20 + 9x − 12 = 17x + 8. The change is (20x + 20) − (17x + 8) = 3x + 12, so 3x + 12 = 57 and x = 15. A notebook costs 3 × 15 − 4 = ₹41 (and a pen ₹35; 4 × 35 + 3 × 41 = 263 and 320 − 263 = 57). ₹65 is tempting because it writes 3 × (−4) as +12, making the change 3x − 12 = 57, x = 23 and a notebook 3 × 23 − 4 = ₹65.
- **hint**: Write Lipika's whole bill as one expression, subtract it from what she paid, and match the result to her change.
- **skill**: building_and_simplifying_a_bill_expression
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q05
- **id**: g8-maths-ch04-ach-x-05
- **stem**: Deeksha asks her brother to think of a number, add 3 to it and square the result, then subtract 3 from the same number and square that, and finally take the second square away from the first. He gets 168. What number did he think of?
- **options**:
  - A) 28
  - B) 14
  - C) 12
  - D) 7
- **answer**: B
- **explanation**: If the number is n, the result is (n + 3)² − (n − 3)² = (n² + 6n + 9) − (n² − 6n + 9) = 12n. So 12n = 168 and n = 14. Check: 17² − 11² = 289 − 121 = 168. 28 is tempting because it keeps only one 6n, getting 6n = 168, but the middle terms +6n and −6n are subtracted, so they add up to 12n.
- **hint**: Call the brother's number n, expand both squares in Deeksha's trick, and see which terms cancel when you subtract.
- **skill**: identity_behind_a_number_trick
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

## Answer Key

| Q# | id | Answer | skill | difficulty | olympiad_section | pictorial |
|----|----|--------|-------|------------|------------------|-----------|
| Q01 | g8-maths-ch04-ach-x-01 | A | factorising_from_an_area_model | hard | achievers | yes |
| Q02 | g8-maths-ch04-ach-x-02 | B | difference_of_squares_for_a_paved_border | hard | achievers | yes |
| Q03 | g8-maths-ch04-ach-x-03 | D | unknown_constant_from_a_coefficient | hard | achievers | no |
| Q04 | g8-maths-ch04-ach-x-04 | C | building_and_simplifying_a_bill_expression | hard | achievers | no |
| Q05 | g8-maths-ch04-ach-x-05 | B | identity_behind_a_number_trick | hard | achievers | no |

## Pictorial notes
- Extra set added to `g8-maths-ch04-algebraic-expressions`: five hard multi-step Achievers items; pictorial items Q01, Q02. The parent chapter and its items are unchanged.
- Figures are drawn from the generator's data and read back by verify from geometry and printed text only; no figure carries data-* attributes or class names containing 'data-' (audit rule svg-data-attr). Every key and each tempting option is recomputed by `/workspace/scratch/verify_g8_achievers_extras.py`.
