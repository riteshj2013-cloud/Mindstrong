# Grade 8 Maths — Chapter 6: Exponents and Powers (Achievers extras)

## Meta
- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.
- grade: 8
- subject: Maths
- chapter_id: g8-maths-ch06-exponents-powers-achievers-extras
- parent_chapter_id: g8-maths-ch06-exponents-powers
- chapter_title: Exponents and Powers (Achievers extras)
- curriculum_source: NCERT Class 8 themes (public topic list only)
- content_type: original_olympiad_style
- addition: extra_set — does not replace existing items
- item_counts: Extra Set = 5 MCQs, all hard / achievers
- pictorial_items: Extra Set = 2 (inline `**Diagram (SVG):**` blocks)
- render: svg_css_in_app
- answer_balance: 1 A / 1 B / 1 C / 2 D

## Extra Set

### Q01
- **id**: g8-maths-ch06-ach-x-01
- **stem**: On Diwali, Tvesha sends a greeting to some friends; that is round 1. In each later round, everyone who got it in the round before sends it to new people in the same way, as the diagram shows. In which round do more than 2,000 new people first get the greeting?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 598 276" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A tree diagram: Tvesha at the top sends to 3 people in round 1, and each of them sends to 3 new people in round 2, making 9">
  <rect class="bg" x="0" y="0" width="598" height="276" fill="#fff"/>
  <text class="title" x="299.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Tvesha's Diwali greeting</text>
  <line class="part link" x1="339" y1="72" x2="287" y2="130" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="339" y1="72" x2="339" y2="130" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="339" y1="72" x2="391" y2="130" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="287" y1="150" x2="131" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="287" y1="150" x2="183" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="287" y1="150" x2="235" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="339" y1="150" x2="287" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="339" y1="150" x2="339" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="339" y1="150" x2="391" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="391" y1="150" x2="443" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="391" y1="150" x2="495" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <line class="part link" x1="391" y1="150" x2="547" y2="208" stroke="#8d6e63" stroke-width="1.5"/>
  <circle class="part node root" cx="339" cy="62" r="11" fill="#ffb300" stroke="#e65100" stroke-width="2"/>
  <text class="label root-name" x="357" y="67" font-size="14" text-anchor="start" font-weight="bold" fill="#263238">Tvesha</text>
  <circle class="part node" cx="287" cy="140" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="339" cy="140" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="391" cy="140" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <text class="label round-name" x="16" y="145" font-size="14" text-anchor="start" font-weight="bold" fill="#5d4037">Round 1</text>
  <circle class="part node" cx="131" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="183" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="235" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="287" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="339" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="391" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="443" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="495" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <circle class="part node" cx="547" cy="218" r="9" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <text class="label round-name" x="16" y="223" font-size="14" text-anchor="start" font-weight="bold" fill="#5d4037">Round 2</text>
  <text class="label caption" x="299.0" y="258" font-size="14" text-anchor="middle" font-weight="normal" fill="#263238">… and so on</text>
</svg>
```

- **alt**: A tree diagram. Tvesha is at the top. Round 1 has 3 people joined to her. Round 2 has 9 people, 3 joined to each person in round 1. Below it says … and so on.
- **options**:
  - A) Round 7
  - B) Round 8
  - C) Round 6
  - D) Round 5
- **answer**: A
- **explanation**: Each person passes it to 3 new people, so round 1 has 3 people, round 2 has 3² = 9, and round n has 3ⁿ new people. 3⁶ = 729 is not more than 2,000, but 3⁷ = 2,187 is, so it first happens in round 7. Round 8 is tempting because it counts Tvesha herself as round 1, giving 3ⁿ⁻¹ people in round n, but she only starts the chain; round 1 already has 3 people.
- **hint**: From the diagram, write how many new people get Tvesha's greeting in round n as a power, then test rounds.
- **skill**: power_growth_round_from_a_tree
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q02
- **id**: g8-maths-ch06-ach-x-02
- **stem**: A rare coin that Shreyan's grandfather bought for ₹2,000 doubles in value every 5 years. After how many years will it be worth ₹1,28,000?
- **options**:
  - A) 35 years
  - B) 6 years
  - C) 32 years
  - D) 30 years
- **answer**: D
- **explanation**: After n doublings the coin is worth 2,000 × 2ⁿ. Setting 2,000 × 2ⁿ = 1,28,000 gives 2ⁿ = 64 = 2⁶, so n = 6 doublings. Each doubling takes 5 years, so it takes 6 × 5 = 30 years. 6 years is tempting because 6 is the exponent, the number of doublings, but every doubling takes 5 years.
- **hint**: Write the value of Shreyan's coin after some number of doublings as a power of 2, then turn doublings into years.
- **skill**: unknown_exponent_from_a_doubling_value
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q03
- **id**: g8-maths-ch06-ach-x-03
- **stem**: Kiaansh reads that radio signals travel at 3 × 10⁸ m per second. A control room in Bengaluru sends a signal to a lander on the Moon, using the distance shown, and the lander's reply comes straight back. How many seconds after sending does the control room get the reply?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="The Earth and the Moon with the distance between them marked as 3.84 times 10 to the power 8 metres">
  <rect class="bg" x="0" y="0" width="600" height="200" fill="#fff"/>
  <text class="title" x="300.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Kiaansh's Earth–Moon diagram</text>
  <circle class="part earth" cx="90" cy="110" r="46" fill="#4fc3f7" stroke="#0277bd" stroke-width="2"/>
  <circle class="part moon" cx="520" cy="110" r="16" fill="#e0e0e0" stroke="#616161" stroke-width="2"/>
  <text class="label body-name" x="90" y="180" font-size="15" text-anchor="middle" font-weight="bold" fill="#263238">Earth</text>
  <text class="label body-name" x="520" y="150" font-size="15" text-anchor="middle" font-weight="bold" fill="#263238">Moon</text>
  <line class="part distance-line" x1="142" y1="110" x2="498" y2="110" stroke="#6a1b9a" stroke-width="2" stroke-dasharray="7 4"/>
  <polyline class="part arrow-head" points="490,104.4 498,110 490,115.6" fill="none" stroke="#6a1b9a" stroke-width="2"/>
  <polyline class="part arrow-head" points="150,104.4 142,110 150,115.6" fill="none" stroke="#6a1b9a" stroke-width="2"/>
  <text class="label distance" x="320" y="96" font-size="16" text-anchor="middle" font-weight="bold" fill="#6a1b9a">3.84 × 10⁸ m</text>
</svg>
```

- **alt**: A large blue circle labelled Earth and a small grey circle labelled Moon, joined by a dashed double-headed arrow marked 3.84 × 10⁸ m.
- **options**:
  - A) 1.28 seconds
  - B) 25.6 seconds
  - C) 2.56 seconds
  - D) 0.256 seconds
- **answer**: C
- **explanation**: One way, the signal takes (3.84 × 10⁸) ÷ (3 × 10⁸) = 1.28 seconds, because the powers of 10 cancel. The reply has to come all the way back, so the total is 2 × 1.28 = 2.56 seconds. 1.28 seconds is tempting because it is only the time for the signal to reach the Moon; the control room must also wait for the reply to travel back.
- **hint**: Divide the distance in Kiaansh's diagram by the speed, letting the powers of 10 cancel, and remember the signal goes there and back.
- **skill**: standard_form_round_trip_time
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q04
- **id**: g8-maths-ch06-ach-x-04
- **stem**: Ishwari's teacher writes four numbers on the board and offers a ₹10 prize to whoever can say, without a calculator, which one is the largest: 2⁵⁰, 3⁴⁰, 5³⁰ and 7²⁰. Which number should Ishwari choose?
- **options**:
  - A) 2⁵⁰
  - B) 5³⁰
  - C) 3⁴⁰
  - D) 7²⁰
- **answer**: B
- **explanation**: Write each number as a power with exponent 10: 2⁵⁰ = (2⁵)¹⁰ = 32¹⁰, 3⁴⁰ = (3⁴)¹⁰ = 81¹⁰, 5³⁰ = (5³)¹⁰ = 125¹⁰ and 7²⁰ = (7²)¹⁰ = 49¹⁰. With the same exponent, the biggest base wins, so 5³⁰ is the largest. 2⁵⁰ is tempting because it has the biggest exponent, but its base is so small that 32¹⁰ is the smallest of the four.
- **hint**: Rewrite each number on the board as some base raised to one shared exponent, then compare the bases Ishwari gets.
- **skill**: comparing_large_powers_by_a_common_exponent
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q05
- **id**: g8-maths-ch06-ach-x-05
- **stem**: Sumedh wants the last digit of 3²⁰²⁶ + 7²⁰²⁶ for a puzzle in his school magazine. What is the units digit of this sum?
- **options**:
  - A) 0
  - B) 9
  - C) 6
  - D) 8
- **answer**: D
- **explanation**: The units digits of powers of 3 repeat as 3, 9, 7, 1, and those of powers of 7 repeat as 7, 9, 3, 1, every 4 steps. 2026 = 4 × 506 + 2, so each power is in the 2nd place of its cycle: 3²⁰²⁶ ends in 9 and 7²⁰²⁶ ends in 9. The sum ends in the units digit of 9 + 9 = 18, which is 8. 0 is tempting because it adds the bases first, as if 3²⁰²⁶ + 7²⁰²⁶ were (3 + 7)²⁰²⁶ = 10²⁰²⁶, but a sum of powers cannot be added like that.
- **hint**: Look for the repeating pattern in the last digits of the powers of 3 and of 7, and find where Sumedh's exponent lands.
- **skill**: units_digit_of_a_sum_of_powers
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

## Answer Key

| Q# | id | Answer | skill | difficulty | olympiad_section | pictorial |
|----|----|--------|-------|------------|------------------|-----------|
| Q01 | g8-maths-ch06-ach-x-01 | A | power_growth_round_from_a_tree | hard | achievers | yes |
| Q02 | g8-maths-ch06-ach-x-02 | D | unknown_exponent_from_a_doubling_value | hard | achievers | no |
| Q03 | g8-maths-ch06-ach-x-03 | C | standard_form_round_trip_time | hard | achievers | yes |
| Q04 | g8-maths-ch06-ach-x-04 | B | comparing_large_powers_by_a_common_exponent | hard | achievers | no |
| Q05 | g8-maths-ch06-ach-x-05 | D | units_digit_of_a_sum_of_powers | hard | achievers | no |

## Pictorial notes
- Extra set added to `g8-maths-ch06-exponents-powers`: five hard multi-step Achievers items; pictorial items Q01, Q03. The parent chapter and its items are unchanged.
- Figures are drawn from the generator's data and read back by verify from geometry and printed text only; no figure carries data-* attributes or class names containing 'data-' (audit rule svg-data-attr). Every key and each tempting option is recomputed by `/workspace/scratch/verify_g8_achievers_extras.py`.
