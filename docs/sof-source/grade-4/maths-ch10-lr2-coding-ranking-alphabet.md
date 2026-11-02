# Grade 4 Maths — Chapter 10: Logical Reasoning 2 — Coding, Ranking and Alphabet

## Meta
- grade: 4
- subject: Maths
- chapter_id: g4-maths-ch10-lr2-coding-ranking-alphabet
- chapter_title: Logical Reasoning 2: Coding, Ranking and Alphabet
- curriculum_source: general reasoning topics: coding-decoding, ranking and alphabet (public topic list only)
- content_type: original_olympiad_style
- scope: letter-shift codes (forward, backward, with wrap-round), number-to-letter and letter-to-number codes, symbol codes, substitution codes from coded sentences, decoding, codes with two or three steps (shift and reverse, growing shift, vowel/consonant rules, sort and shift, grid codes); ranking from the left/right, front/back and top/bottom, totals in a row, children between, swaps; ordering by height, age, marks and weight from clues (with brute-force-checked 5-person puzzles); alphabet positions from either end, letters between, midway letters, skip-letter lists, letter series and dictionary order
- item_counts: Set A = 24 MCQs, Set B = 24 MCQs
- pictorial_items: Set A = 9, Set B = 9 (inline `**Diagram (SVG):**` blocks)
- render: svg_css_in_app
- svg_class_names: `bg`, `title`, `label`, `label small`, `label letter`, `label pos`, `label name`, `label end`, `label clue`, `label card-head`, `label value`, `label code`, `label plain`, `label move`, `label row-head`, `label rownum`, `label colnum`, `part`, `tile`, `tile-box`, `highlight`, `covered`, `ring`, `child`, `head`, `body`, `card`, `card-box`, `hbar`, `bar`, `scale`, `axis`, `pair`, `top-box`, `bottom-box`, `move-box`, `col`, `ring-outer`, `ring-inner`, `hub`, `spoke`, `gcell`, `gcell-box`
- difficulty_mix: per set 10 easy / 9 medium / 5 hard (Set B same)
- section_mix: per set 19 logical / 5 achievers (the 5 hard items)
- answer_balance: per set 6 A / 6 B / 6 C / 6 D


## Interactive Lesson Outline

### step_1: Alphabet Positions
- **tts**:
  - Every letter has a place in the alphabet: A is 1st and Z is 26th.
  - To count from the right end, use 26 + 1 − (place from the left). For example, S is 19th from the left and 8th from the right.
- **on_screen**: An alphabet strip lights up as the child taps letters; each tap shows the place from the left and from the right.
- **check**: Which letter is 5th from the right end of the alphabet? — Answer: V

### step_2: Letters Between and Midway
- **tts**:
  - 'Between F and M' leaves out both F and M, so count only the letters in the middle.
  - The letter midway between two letters is at the place halfway between their two positions.
- **on_screen**: Two letters on the strip are joined by a bridge; the letters under the bridge glow and are counted.
- **check**: How many letters are between C and H? — Answer: 4 (D, E, F, G)

### step_3: Letter-Shift Codes
- **tts**:
  - In a shift code, every letter moves the same number of places forward or back. Find the move from one letter of the example.
  - After Z the alphabet starts again at A, and before A comes Z.
- **on_screen**: A code machine takes in a word and slides each letter along a strip by the same number of places.
- **check**: If CAT is coded DBU, how is SUN coded? — Answer: TVO

### step_4: Number and Symbol Codes
- **tts**:
  - Some codes swap letters for numbers (A = 1, B = 2, …) or for symbols from a table.
  - When two coded sentences share a word, the code word they share stands for that word.
- **on_screen**: Code cards flip over to show symbols and numbers, and matching pairs are joined by a line.
- **check**: If A = 1, B = 2 and so on, what does 3-1-2 spell? — Answer: CAB

### step_5: Decoding and Two-Step Codes
- **tts**:
  - To decode, undo the code: move letters the other way, or turn the word back round.
  - For a code with two steps, undo the last step first. Always test your rule on the example.
- **on_screen**: A coded word travels backwards through the machine, and each step is undone in reverse order.
- **check**: In a code each letter moves 1 forward. Which word is coded EPH? — Answer: DOG

### step_6: Ranking in a Row
- **tts**:
  - If someone is 4th from the left and 3rd from the right, the row has 4 + 3 − 1 = 6 people, because that person is counted twice.
  - Position from the other end = total − position + 1.
- **on_screen**: Children in a queue raise number cards counting from each end; the child in the middle holds both cards.
- **check**: Ana is 2nd from the left and 5th from the right. How many children are in the row? — Answer: 6

### step_7: Ordering from Clues
- **tts**:
  - Turn each clue into a short line of names, such as 'taller → shorter', and join the lines where they share a name.
  - Check that your final order agrees with every clue.
- **on_screen**: Name tiles slide up and down a height chart as each clue card is read out.
- **check**: Ravi is taller than Sita. Sita is taller than Om. Who is the shortest? — Answer: Om


## Practice Set A

### Q01
- **id**: g4-maths-ch10-a-01
- **stem**: Ajay starts at the right end of the strip and counts 8 letters, starting with Z. On which letter does he stop?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 706 112" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="An alphabet strip from A to Z with positions 1 and 26 marked">
  <rect class="bg" x="0" y="0" width="706" height="112" fill="#fff"/>
  <text class="title" x="353.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">The English alphabet</text>
  <g class="part tile" data-pos="1"><rect class="part tile-box" x="15" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="28" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">A</text></g>
  <text class="label pos" x="28" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">1</text>
  <g class="part tile" data-pos="2"><rect class="part tile-box" x="41" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="54" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">B</text></g>
  <g class="part tile" data-pos="3"><rect class="part tile-box" x="67" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="80" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">C</text></g>
  <g class="part tile" data-pos="4"><rect class="part tile-box" x="93" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="106" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">D</text></g>
  <g class="part tile" data-pos="5"><rect class="part tile-box" x="119" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="132" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">E</text></g>
  <g class="part tile" data-pos="6"><rect class="part tile-box" x="145" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="158" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">F</text></g>
  <g class="part tile" data-pos="7"><rect class="part tile-box" x="171" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="184" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">G</text></g>
  <g class="part tile" data-pos="8"><rect class="part tile-box" x="197" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="210" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">H</text></g>
  <g class="part tile" data-pos="9"><rect class="part tile-box" x="223" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="236" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">I</text></g>
  <g class="part tile" data-pos="10"><rect class="part tile-box" x="249" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="262" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">J</text></g>
  <g class="part tile" data-pos="11"><rect class="part tile-box" x="275" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="288" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">K</text></g>
  <g class="part tile" data-pos="12"><rect class="part tile-box" x="301" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="314" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">L</text></g>
  <g class="part tile" data-pos="13"><rect class="part tile-box" x="327" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="340" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">M</text></g>
  <g class="part tile" data-pos="14"><rect class="part tile-box" x="353" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="366" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">N</text></g>
  <g class="part tile" data-pos="15"><rect class="part tile-box" x="379" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="392" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">O</text></g>
  <g class="part tile" data-pos="16"><rect class="part tile-box" x="405" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="418" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">P</text></g>
  <g class="part tile" data-pos="17"><rect class="part tile-box" x="431" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="444" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Q</text></g>
  <g class="part tile" data-pos="18"><rect class="part tile-box" x="457" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="470" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">R</text></g>
  <g class="part tile" data-pos="19"><rect class="part tile-box" x="483" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="496" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">S</text></g>
  <g class="part tile" data-pos="20"><rect class="part tile-box" x="509" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="522" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">T</text></g>
  <g class="part tile" data-pos="21"><rect class="part tile-box" x="535" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="548" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">U</text></g>
  <g class="part tile" data-pos="22"><rect class="part tile-box" x="561" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="574" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">V</text></g>
  <g class="part tile" data-pos="23"><rect class="part tile-box" x="587" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="600" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">W</text></g>
  <g class="part tile" data-pos="24"><rect class="part tile-box" x="613" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="626" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">X</text></g>
  <g class="part tile" data-pos="25"><rect class="part tile-box" x="639" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="652" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Y</text></g>
  <g class="part tile" data-pos="26"><rect class="part tile-box" x="665" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="678" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Z</text></g>
  <text class="label pos" x="678" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">26</text>
</svg>
```

- **alt**: The 26 letters A to Z in one strip, with position 1 under A and position 26 under Z.
- **options**:
  - A) R
  - B) H
  - C) T
  - D) S
- **answer**: D
- **explanation**: Counting from the right end: Z is 1st, Y 2nd, X 3rd, W 4th, V 5th, U 6th, T 7th and S 8th. Using positions: 26 − 8 + 1 = 19, and the 19th letter is S. R is tempting if you work out 26 − 8 = 18, but that forgets to add 1, because Z itself is the 1st from the right.
- **hint**: Count Z as number one and move left along the strip, or use the total number of letters on the strip.
- **skill**: position_from_right_end
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q02
- **id**: g4-maths-ch10-a-02
- **stem**: In a secret code, SOAP is written as UQCR. How is MILK written in the same code?
- **options**:
  - A) NJML
  - B) OKNM
  - C) KGJI
  - D) OKMN
- **answer**: B
- **explanation**: Each letter moves 2 places forward: S → U, O → Q, A → C, P → R. So M → O, I → K, L → N, K → M, giving OKNM. NJML is tempting because it moves every letter only 1 place forward, but S → U is a jump of 2.
- **hint**: Compare S with its code letter. How many places forward did it move? Do the same to every letter of MILK.
- **skill**: letter_shift_code
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q03
- **id**: g4-maths-ch10-a-03
- **stem**: Zara's secret notes use numbers for letters: A = 1, B = 2, and so on up to Z = 26. Her note says 2-9-18-4. Which word did she write?
- **options**:
  - A) BHRD
  - B) BIRD
  - C) CIRD
  - D) BIRE
- **answer**: B
- **explanation**: 2 = B, 9 = I, 18 = R and 4 = D, so the word is BIRD. BHRD is tempting if you count one letter short for 9, but H is the 8th letter and I is the 9th.
- **hint**: Change each number in Zara's note into the letter at that place in the alphabet. Check the two bigger numbers carefully.
- **skill**: number_to_letter_decode
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q04
- **id**: g4-maths-ch10-a-04
- **stem**: Seven children stand in a row for a class photo, as shown. Who is 3rd from the right?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 484 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Seven children standing in a row with their names">
  <rect class="bg" x="0" y="0" width="484" height="140" fill="#fff"/>
  <text class="title" x="242.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Class photo row</text>
  <text class="label end end-left" x="30" y="82" font-size="12" text-anchor="middle" font-weight="bold" fill="#1565c0">LEFT</text>
  <text class="label end end-right" x="454" y="82" font-size="12" text-anchor="middle" font-weight="bold" fill="#1565c0">RIGHT</text>
  <g class="part child" data-name="Anu">
    <circle class="part head" cx="86" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="73" y="65" width="26" height="34" rx="8" fill="#90caf9" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="86" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Anu</text>
  </g>
  <g class="part child" data-name="Bobby">
    <circle class="part head" cx="138" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="125" y="65" width="26" height="34" rx="8" fill="#a5d6a7" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="138" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Bobby</text>
  </g>
  <g class="part child" data-name="Chinu">
    <circle class="part head" cx="190" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="177" y="65" width="26" height="34" rx="8" fill="#ce93d8" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="190" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Chinu</text>
  </g>
  <g class="part child" data-name="Deepa">
    <circle class="part head" cx="242" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="229" y="65" width="26" height="34" rx="8" fill="#ffab91" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="242" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Deepa</text>
  </g>
  <g class="part child" data-name="Eshan">
    <circle class="part head" cx="294" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="281" y="65" width="26" height="34" rx="8" fill="#80cbc4" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="294" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Eshan</text>
  </g>
  <g class="part child" data-name="Farah">
    <circle class="part head" cx="346" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="333" y="65" width="26" height="34" rx="8" fill="#fff59d" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="346" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Farah</text>
  </g>
  <g class="part child" data-name="Gopal">
    <circle class="part head" cx="398" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="385" y="65" width="26" height="34" rx="8" fill="#b0bec5" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="398" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Gopal</text>
  </g>
</svg>
```

- **alt**: From left to right: Anu, Bobby, Chinu, Deepa, Eshan, Farah, Gopal. LEFT is marked at the left end and RIGHT at the right end.
- **options**:
  - A) Eshan
  - B) Chinu
  - C) Farah
  - D) Deepa
- **answer**: A
- **explanation**: Counting from the right end: Gopal is 1st, Farah 2nd and Eshan 3rd. Chinu is tempting because Chinu is 3rd from the left, but the question counts from the right end.
- **hint**: Find which end of the photo row is the right end, and start counting from the child standing there.
- **skill**: queue_position_from_right
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q05
- **id**: g4-maths-ch10-a-05
- **stem**: In a line of children waiting for the swings, Ravi is 9th from the left and 6th from the right. How many children are in the line?
- **options**:
  - A) 15 children
  - B) 13 children
  - C) 16 children
  - D) 14 children
- **answer**: D
- **explanation**: Ravi is counted in both numbers, so total = 9 + 6 − 1 = 14 children (8 to his left, Ravi, and 5 to his right). 15 children is tempting (9 + 6), but that counts Ravi twice.
- **hint**: Draw Ravi, then the children to his left and to his right. Is Ravi counted once or twice in the two positions?
- **skill**: total_in_row
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q06
- **id**: g4-maths-ch10-a-06
- **stem**: Read the two clue cards about Kabir, Meera and Zoya. Who is the shortest?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 520 134" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two clue cards about heights">
  <rect class="bg" x="0" y="0" width="520" height="134" fill="#fff"/>
  <text class="title" x="260.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Height clues</text>
  <g class="part card" data-n="1"><rect class="part card-box" x="16" y="38" width="488" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="61" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 1:</text><text class="label clue" x="100" y="61" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Kabir is taller than Meera.</text></g>
  <g class="part card" data-n="2"><rect class="part card-box" x="16" y="82" width="488" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="105" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 2:</text><text class="label clue" x="100" y="105" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Zoya is shorter than Meera.</text></g>
</svg>
```

- **alt**: Clue 1: Kabir is taller than Meera. Clue 2: Zoya is shorter than Meera.
- **options**:
  - A) Meera
  - B) Zoya
  - C) Kabir
  - D) It cannot be told
- **answer**: B
- **explanation**: Clue 1 puts Kabir above Meera, and clue 2 puts Zoya below Meera. So the order from tallest is Kabir, Meera, Zoya, and Zoya is the shortest. Meera is tempting because Meera is shorter than Kabir, but Zoya is shorter still.
- **hint**: Line the three friends up from tallest to shortest, using one clue card at a time.
- **skill**: order_three_heights
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q07
- **id**: g4-maths-ch10-a-07
- **stem**: How many letters of the English alphabet come between F and M?
- **options**:
  - A) 7
  - B) 8
  - C) 5
  - D) 6
- **answer**: D
- **explanation**: The letters between F and M are G, H, I, J, K, L: that is 6 letters. 7 is tempting because M is the 13th letter and F is the 6th, and 13 − 6 = 7, but that subtraction counts M itself; 'between' leaves out both F and M.
- **hint**: Write the letters after F up to the one just before M. Leave out F and M themselves.
- **skill**: letters_between
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q08
- **id**: g4-maths-ch10-a-08
- **stem**: Use the code table, where each symbol stands for one letter. Which word is written as & @ # $ % ?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 418 112" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A table matching six symbols to six letters">
  <rect class="bg" x="0" y="0" width="418" height="112" fill="#fff"/>
  <text class="title" x="209.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Symbol code table</text>
  <text class="label row-head" x="60" y="60" font-size="12" text-anchor="middle" font-weight="bold" fill="#455a64">Symbol</text>
  <text class="label row-head" x="60" y="95" font-size="12" text-anchor="middle" font-weight="bold" fill="#455a64">Letter</text>
  <g class="part pair" data-i="0"><rect class="part top-box" x="110" y="36" width="48" height="34" rx="0" fill="#e3f2fd" stroke="#546e7a" stroke-width="1.2"/><text class="label code" x="134.0" y="60" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">@</text><rect class="part bottom-box" x="110" y="72" width="48" height="34" rx="0" fill="#fff" stroke="#546e7a" stroke-width="1.2"/><text class="label plain" x="134.0" y="95" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">R</text></g>
  <g class="part pair" data-i="1"><rect class="part top-box" x="158" y="36" width="48" height="34" rx="0" fill="#e3f2fd" stroke="#546e7a" stroke-width="1.2"/><text class="label code" x="182.0" y="60" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">#</text><rect class="part bottom-box" x="158" y="72" width="48" height="34" rx="0" fill="#fff" stroke="#546e7a" stroke-width="1.2"/><text class="label plain" x="182.0" y="95" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">A</text></g>
  <g class="part pair" data-i="2"><rect class="part top-box" x="206" y="36" width="48" height="34" rx="0" fill="#e3f2fd" stroke="#546e7a" stroke-width="1.2"/><text class="label code" x="230.0" y="60" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">$</text><rect class="part bottom-box" x="206" y="72" width="48" height="34" rx="0" fill="#fff" stroke="#546e7a" stroke-width="1.2"/><text class="label plain" x="230.0" y="95" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">I</text></g>
  <g class="part pair" data-i="3"><rect class="part top-box" x="254" y="36" width="48" height="34" rx="0" fill="#e3f2fd" stroke="#546e7a" stroke-width="1.2"/><text class="label code" x="278.0" y="60" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">%</text><rect class="part bottom-box" x="254" y="72" width="48" height="34" rx="0" fill="#fff" stroke="#546e7a" stroke-width="1.2"/><text class="label plain" x="278.0" y="95" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">N</text></g>
  <g class="part pair" data-i="4"><rect class="part top-box" x="302" y="36" width="48" height="34" rx="0" fill="#e3f2fd" stroke="#546e7a" stroke-width="1.2"/><text class="label code" x="326.0" y="60" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">&amp;</text><rect class="part bottom-box" x="302" y="72" width="48" height="34" rx="0" fill="#fff" stroke="#546e7a" stroke-width="1.2"/><text class="label plain" x="326.0" y="95" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">T</text></g>
  <g class="part pair" data-i="5"><rect class="part top-box" x="350" y="36" width="48" height="34" rx="0" fill="#e3f2fd" stroke="#546e7a" stroke-width="1.2"/><text class="label code" x="374.0" y="60" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">*</text><rect class="part bottom-box" x="350" y="72" width="48" height="34" rx="0" fill="#fff" stroke="#546e7a" stroke-width="1.2"/><text class="label plain" x="374.0" y="95" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">E</text></g>
</svg>
```

- **alt**: Symbol code table: @ = R, # = A, $ = I, % = N, & = T, * = E.
- **options**:
  - A) TRIAN
  - B) TERAN
  - C) RAINT
  - D) TRAIN
- **answer**: D
- **explanation**: & = T, @ = R, # = A, $ = I and % = N, so the word is TRAIN. TRIAN is tempting because it uses the same five letters, but # (A) comes before $ (I) in the code.
- **hint**: Swap each symbol for its letter from the table, keeping the symbols in the same order.
- **skill**: symbol_letter_code
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q09
- **id**: g4-maths-ch10-a-09
- **stem**: Asha arranges these words in dictionary order: mango, melon, maple, mint. Which word comes third?
- **options**:
  - A) melon
  - B) maple
  - C) mango
  - D) mint
- **answer**: A
- **explanation**: All start with m, so look at the second letter: a, a, e, i. Mango and maple both have a, so look at the third letter: n comes before p, giving mango, maple, then melon, then mint. Maple is tempting because it is 3rd in the list as written, but in dictionary order it is 2nd.
- **hint**: All the words start with the same letter. Compare the second letters, and where they match, the third letters.
- **skill**: dictionary_order
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q10
- **id**: g4-maths-ch10-a-10
- **stem**: Which letter is exactly midway between D and R in the alphabet?
- **options**:
  - A) L
  - B) J
  - C) K
  - D) M
- **answer**: C
- **explanation**: D is 4th and R is 18th. Halfway between 4 and 18 is 11, and the 11th letter is K (K is 7 letters after D and 7 letters before R). L is tempting if you count the letters between D and R and pick the next one, but L is 6 letters from R and 8 from D.
- **hint**: Find the alphabet positions of D and R, then find the number exactly halfway between them.
- **skill**: midway_letter
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q11
- **id**: g4-maths-ch10-a-11
- **stem**: The table shows how each letter is coded. Using it, which word is coded as WLJHU?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 734 120" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two strips: plain letters on top and their code letters below">
  <rect class="bg" x="0" y="0" width="734" height="120" fill="#fff"/>
  <text class="title" x="367.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Code table</text>
  <text class="label row-head" x="44" y="60" font-size="12" text-anchor="middle" font-weight="bold" fill="#455a64">Letter</text>
  <text class="label row-head" x="44" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#455a64">Code</text>
  <g class="part pair" data-i="0"><rect class="part top-box" x="88" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="100" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">A</text><rect class="part bottom-box" x="88" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="100" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">D</text></g>
  <g class="part pair" data-i="1"><rect class="part top-box" x="112" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="124" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">B</text><rect class="part bottom-box" x="112" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="124" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">E</text></g>
  <g class="part pair" data-i="2"><rect class="part top-box" x="136" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="148" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">C</text><rect class="part bottom-box" x="136" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="148" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">F</text></g>
  <g class="part pair" data-i="3"><rect class="part top-box" x="160" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="172" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">D</text><rect class="part bottom-box" x="160" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="172" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">G</text></g>
  <g class="part pair" data-i="4"><rect class="part top-box" x="184" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="196" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">E</text><rect class="part bottom-box" x="184" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="196" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">H</text></g>
  <g class="part pair" data-i="5"><rect class="part top-box" x="208" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="220" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">F</text><rect class="part bottom-box" x="208" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="220" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">I</text></g>
  <g class="part pair" data-i="6"><rect class="part top-box" x="232" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="244" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">G</text><rect class="part bottom-box" x="232" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="244" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">J</text></g>
  <g class="part pair" data-i="7"><rect class="part top-box" x="256" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="268" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">H</text><rect class="part bottom-box" x="256" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="268" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">K</text></g>
  <g class="part pair" data-i="8"><rect class="part top-box" x="280" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="292" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">I</text><rect class="part bottom-box" x="280" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="292" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">L</text></g>
  <g class="part pair" data-i="9"><rect class="part top-box" x="304" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="316" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">J</text><rect class="part bottom-box" x="304" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="316" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">M</text></g>
  <g class="part pair" data-i="10"><rect class="part top-box" x="328" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="340" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">K</text><rect class="part bottom-box" x="328" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="340" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">N</text></g>
  <g class="part pair" data-i="11"><rect class="part top-box" x="352" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="364" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">L</text><rect class="part bottom-box" x="352" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="364" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">O</text></g>
  <g class="part pair" data-i="12"><rect class="part top-box" x="376" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="388" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">M</text><rect class="part bottom-box" x="376" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="388" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">P</text></g>
  <g class="part pair" data-i="13"><rect class="part top-box" x="400" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="412" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">N</text><rect class="part bottom-box" x="400" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="412" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">Q</text></g>
  <g class="part pair" data-i="14"><rect class="part top-box" x="424" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="436" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">O</text><rect class="part bottom-box" x="424" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="436" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">R</text></g>
  <g class="part pair" data-i="15"><rect class="part top-box" x="448" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="460" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">P</text><rect class="part bottom-box" x="448" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="460" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">S</text></g>
  <g class="part pair" data-i="16"><rect class="part top-box" x="472" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="484" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">Q</text><rect class="part bottom-box" x="472" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="484" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">T</text></g>
  <g class="part pair" data-i="17"><rect class="part top-box" x="496" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="508" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">R</text><rect class="part bottom-box" x="496" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="508" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">U</text></g>
  <g class="part pair" data-i="18"><rect class="part top-box" x="520" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="532" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">S</text><rect class="part bottom-box" x="520" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="532" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">V</text></g>
  <g class="part pair" data-i="19"><rect class="part top-box" x="544" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="556" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">T</text><rect class="part bottom-box" x="544" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="556" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">W</text></g>
  <g class="part pair" data-i="20"><rect class="part top-box" x="568" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="580" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">U</text><rect class="part bottom-box" x="568" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="580" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">X</text></g>
  <g class="part pair" data-i="21"><rect class="part top-box" x="592" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="604" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">V</text><rect class="part bottom-box" x="592" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="604" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">Y</text></g>
  <g class="part pair" data-i="22"><rect class="part top-box" x="616" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="628" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">W</text><rect class="part bottom-box" x="616" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="628" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">Z</text></g>
  <g class="part pair" data-i="23"><rect class="part top-box" x="640" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="652" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">X</text><rect class="part bottom-box" x="640" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="652" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">A</text></g>
  <g class="part pair" data-i="24"><rect class="part top-box" x="664" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="676" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">Y</text><rect class="part bottom-box" x="664" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="676" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">B</text></g>
  <g class="part pair" data-i="25"><rect class="part top-box" x="688" y="38" width="24" height="32" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="700" y="60" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">Z</text><rect class="part bottom-box" x="688" y="74" width="24" height="32" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="700" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">C</text></g>
</svg>
```

- **alt**: Code table: each plain letter on top has its code letter below it, 3 places further on: A → D, B → E, C → F, and so on, with X → A, Y → B, Z → C.
- **options**:
  - A) TIGER
  - B) ZORKX
  - C) TIGRE
  - D) UJHFS
- **answer**: A
- **explanation**: To decode, find each code letter in the bottom row and read the letter above it: W ← T, L ← I, J ← G, H ← E, U ← R, so the word is TIGER. ZORKX is tempting because it moves each letter 3 places forward, but that codes the word again instead of decoding it.
- **hint**: This time you start from the code. Find each code letter in the bottom row and read upwards.
- **skill**: decode_with_shift_table
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q12
- **id**: g4-maths-ch10-a-12
- **stem**: In a secret language, the words of each sentence may be in a different order. Using the three code cards, what is the code word for 'big'?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 470 178" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Three code cards with coded sentences and their meanings">
  <rect class="bg" x="0" y="0" width="470" height="178" fill="#fff"/>
  <text class="title" x="235.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Secret language</text>
  <g class="part card" data-n="1"><rect class="part card-box" x="16" y="38" width="438" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="61" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Card 1:</text><text class="label clue" x="100" y="61" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">'tok ra mi' means 'big red ball'</text></g>
  <g class="part card" data-n="2"><rect class="part card-box" x="16" y="82" width="438" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="105" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Card 2:</text><text class="label clue" x="100" y="105" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">'lu mi pe' means 'red kite flies'</text></g>
  <g class="part card" data-n="3"><rect class="part card-box" x="16" y="126" width="438" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="149" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Card 3:</text><text class="label clue" x="100" y="149" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">'ra su' means 'ball rolls'</text></g>
</svg>
```

- **alt**: Card 1: 'tok ra mi' means 'big red ball'. Card 2: 'lu mi pe' means 'red kite flies'. Card 3: 'ra su' means 'ball rolls'.
- **options**:
  - A) ra
  - B) mi
  - C) tok
  - D) lu
- **answer**: C
- **explanation**: Cards 1 and 2 share only 'red' and only 'mi', so mi = red. Cards 1 and 3 share only 'ball' and only 'ra', so ra = ball. In card 1 the word left over is tok, so tok = big. Ra is tempting because it is next to tok in card 1, but ra also appears in card 3, where it must mean 'ball'.
- **hint**: Find a word that appears on two cards, and the code word those two cards share. Remove known words from card 1.
- **skill**: substitution_sentences
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q13
- **id**: g4-maths-ch10-a-13
- **stem**: Three of these words are coded by the same rule. Which word and code does NOT follow that rule?
- **options**:
  - A) CUP → DVQ
  - B) PEN → QFO
  - C) MAT → NBU
  - D) SUN → TVP
- **answer**: D
- **explanation**: In CUP → DVQ, PEN → QFO and MAT → NBU every letter moves 1 place forward. In SUN → TVP, S → T and U → V are right, but N should become O, not P. So SUN → TVP is the odd one out. MAT → NBU is tempting because A becomes B, which looks like a big change, but every letter of MAT still moves exactly 1 place forward.
- **hint**: Check each letter against its code letter for every pair. A single letter that breaks the pattern is enough.
- **skill**: odd_code_pair
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q14
- **id**: g4-maths-ch10-a-14
- **stem**: Twenty children stand in a row for the morning assembly. Raj is 5th from the left and Sam is 8th from the right. How many children stand between Raj and Sam?
- **options**:
  - A) 8
  - B) 7
  - C) 6
  - D) 9
- **answer**: B
- **explanation**: Sam is 8th from the right, so from the left he is 20 − 8 + 1 = 13th. Between the 5th and the 13th places are places 6 to 12: that is 7 children. 8 is tempting because 13 − 5 = 8, but that counts Sam as well; 'between' leaves out both Raj and Sam.
- **hint**: First change Sam's place so that it is counted from the left, like Raj's. Then count only the places strictly between them.
- **skill**: children_between
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q15
- **id**: g4-maths-ch10-a-15
- **stem**: Four cousins compare ages. Sana is older than Tara. Rohan is younger than Tara. Uday is older than Sana. Who is the second oldest?
- **options**:
  - A) Tara
  - B) Uday
  - C) Sana
  - D) Rohan
- **answer**: C
- **explanation**: From the clues, Uday is older than Sana, Sana is older than Tara, and Tara is older than Rohan. So the order from oldest is Uday, Sana, Tara, Rohan, and Sana is the second oldest. Tara is tempting because Tara is in the middle of the first clue, but Uday and Sana are both older than Tara, so Tara is third.
- **hint**: Write the cousins on a line from oldest to youngest, joining the clues where they share a cousin.
- **skill**: order_four_ages
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q16
- **id**: g4-maths-ch10-a-16
- **stem**: Use the alphabet strip. Which letter is 4th to the left of the letter that is 9th from the right end?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 706 112" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="An alphabet strip with positions 1, 5, 10, 15, 20, 25 and 26 marked">
  <rect class="bg" x="0" y="0" width="706" height="112" fill="#fff"/>
  <text class="title" x="353.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Alphabet strip</text>
  <g class="part tile" data-pos="1"><rect class="part tile-box" x="15" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="28" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">A</text></g>
  <text class="label pos" x="28" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">1</text>
  <g class="part tile" data-pos="2"><rect class="part tile-box" x="41" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="54" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">B</text></g>
  <g class="part tile" data-pos="3"><rect class="part tile-box" x="67" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="80" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">C</text></g>
  <g class="part tile" data-pos="4"><rect class="part tile-box" x="93" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="106" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">D</text></g>
  <g class="part tile" data-pos="5"><rect class="part tile-box" x="119" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="132" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">E</text></g>
  <text class="label pos" x="132" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">5</text>
  <g class="part tile" data-pos="6"><rect class="part tile-box" x="145" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="158" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">F</text></g>
  <g class="part tile" data-pos="7"><rect class="part tile-box" x="171" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="184" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">G</text></g>
  <g class="part tile" data-pos="8"><rect class="part tile-box" x="197" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="210" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">H</text></g>
  <g class="part tile" data-pos="9"><rect class="part tile-box" x="223" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="236" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">I</text></g>
  <g class="part tile" data-pos="10"><rect class="part tile-box" x="249" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="262" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">J</text></g>
  <text class="label pos" x="262" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">10</text>
  <g class="part tile" data-pos="11"><rect class="part tile-box" x="275" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="288" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">K</text></g>
  <g class="part tile" data-pos="12"><rect class="part tile-box" x="301" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="314" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">L</text></g>
  <g class="part tile" data-pos="13"><rect class="part tile-box" x="327" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="340" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">M</text></g>
  <g class="part tile" data-pos="14"><rect class="part tile-box" x="353" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="366" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">N</text></g>
  <g class="part tile" data-pos="15"><rect class="part tile-box" x="379" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="392" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">O</text></g>
  <text class="label pos" x="392" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">15</text>
  <g class="part tile" data-pos="16"><rect class="part tile-box" x="405" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="418" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">P</text></g>
  <g class="part tile" data-pos="17"><rect class="part tile-box" x="431" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="444" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Q</text></g>
  <g class="part tile" data-pos="18"><rect class="part tile-box" x="457" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="470" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">R</text></g>
  <g class="part tile" data-pos="19"><rect class="part tile-box" x="483" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="496" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">S</text></g>
  <g class="part tile" data-pos="20"><rect class="part tile-box" x="509" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="522" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">T</text></g>
  <text class="label pos" x="522" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">20</text>
  <g class="part tile" data-pos="21"><rect class="part tile-box" x="535" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="548" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">U</text></g>
  <g class="part tile" data-pos="22"><rect class="part tile-box" x="561" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="574" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">V</text></g>
  <g class="part tile" data-pos="23"><rect class="part tile-box" x="587" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="600" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">W</text></g>
  <g class="part tile" data-pos="24"><rect class="part tile-box" x="613" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="626" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">X</text></g>
  <g class="part tile" data-pos="25"><rect class="part tile-box" x="639" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="652" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Y</text></g>
  <text class="label pos" x="652" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">25</text>
  <g class="part tile" data-pos="26"><rect class="part tile-box" x="665" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="678" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Z</text></g>
  <text class="label pos" x="678" y="88" font-size="11" text-anchor="middle" font-weight="normal" fill="#546e7a">26</text>
</svg>
```

- **alt**: The letters A to Z in one strip. Positions are marked under A (1), E (5), J (10), O (15), T (20), Y (25) and Z (26).
- **options**:
  - A) V
  - B) M
  - C) N
  - D) O
- **answer**: C
- **explanation**: 9th from the right is position 26 − 9 + 1 = 18, which is R. Moving 4 to the left of R: Q, P, O, N. So the answer is N. V is tempting if you move 4 to the right of R instead, but the question asks for the left.
- **hint**: Do it in two steps: find the letter that is 9th from the right end first, then move along the strip.
- **skill**: two_step_letter_position
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q17
- **id**: g4-maths-ch10-a-17
- **stem**: Rahul's flash cards read C, Z, D, X, F, V, ?, T, M. Two patterns take turns on the cards. Which letter is on the missing card?
- **options**:
  - A) H
  - B) U
  - C) I
  - D) J
- **answer**: C
- **explanation**: Cards 2, 4, 6, 8 go Z, X, V, T, two steps back each time. Cards 1, 3, 5, 7, 9 go C, D, F, ?, M with steps of 1, 2, 3 and 4, so the missing card is F + 3 = I, and I + 4 = M checks. H is tempting because it keeps the last step of 2 (D to F), but then H to M would be 5 steps, not 4.
- **hint**: Split Rahul's cards into two lists that take turns. In the list with the gap, watch how the steps between letters change.
- **skill**: interleaved_letter_series
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q18
- **id**: g4-maths-ch10-a-18
- **stem**: Four friends took a quiz. Ria scored more than Om but less than Kiran. Dev scored the lowest marks. Who has the third highest marks?
- **options**:
  - A) Om
  - B) Ria
  - C) Dev
  - D) Kiran
- **answer**: A
- **explanation**: The first clue gives Kiran above Ria above Om, and Dev is last. So the order from highest is Kiran, Ria, Om, Dev, and Om is third. Ria is tempting because Ria is in the middle of the first clue, but Kiran and Ria are both above Om, which puts Ria second.
- **hint**: Turn the 'more than … but less than' clue into a line of three names, then fit the last clue on.
- **skill**: order_marks_clues
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q19
- **id**: g4-maths-ch10-a-19
- **stem**: Neha turns words into numbers. She turns ACE into 135. What number does she get for BAG?
- **options**:
  - A) 10
  - B) 712
  - C) 217
  - D) 2107
- **answer**: C
- **explanation**: Each letter is replaced by its alphabet position, and the digits are written side by side: A = 1, C = 3, E = 5 gives 135. So B = 2, A = 1, G = 7 gives 217. 10 is tempting if you add the positions (2 + 1 + 7), but adding A, C and E would give 9, not 135.
- **hint**: Write the alphabet position of each letter in ACE and look at how they appear in its code. Do the same for BAG.
- **skill**: position_digit_code
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q20
- **id**: g4-maths-ch10-a-20
- **stem**: Ishaan hides words in two steps. Step 1: every letter goes back by one (B becomes A). Step 2: the letters are read from right to left. FISH turns into GRHE. What does ROPE turn into?
- **options**:
  - A) QNOD
  - B) DONQ
  - C) SPQF
  - D) FQPS
- **answer**: B
- **explanation**: Move each letter of ROPE one place back: R → Q, O → N, P → O, E → D, giving QNOD. Then write it backwards: DONQ. (Check with FISH: EHRG written backwards is GRHE.) QNOD is tempting because the letters are moved correctly, but it misses the second step of writing the word backwards.
- **hint**: Do the two steps in order on ROPE, and test your method on FISH first to make sure it gives the code shown.
- **skill**: shift_then_reverse_code
- **difficulty**: hard
- **type**: logical
- **pictorial**: no
- **olympiad_section**: achievers

### Q21
- **id**: g4-maths-ch10-a-21
- **stem**: Five friends, Asha, Bilal, Chitra, Dev and Esha, line up by height. Use all five clue cards. Who stands in the middle of the line, with two friends taller and two shorter?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 560 266" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Five clue cards about the heights of five friends">
  <rect class="bg" x="0" y="0" width="560" height="266" fill="#fff"/>
  <text class="title" x="280.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Height clue cards</text>
  <g class="part card" data-n="1"><rect class="part card-box" x="16" y="38" width="528" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="61" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 1:</text><text class="label clue" x="100" y="61" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Bilal is taller than Chitra.</text></g>
  <g class="part card" data-n="2"><rect class="part card-box" x="16" y="82" width="528" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="105" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 2:</text><text class="label clue" x="100" y="105" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Asha is neither the tallest nor the shortest.</text></g>
  <g class="part card" data-n="3"><rect class="part card-box" x="16" y="126" width="528" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="149" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 3:</text><text class="label clue" x="100" y="149" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Only one person is taller than Bilal.</text></g>
  <g class="part card" data-n="4"><rect class="part card-box" x="16" y="170" width="528" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="193" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 4:</text><text class="label clue" x="100" y="193" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Chitra is taller than Asha.</text></g>
  <g class="part card" data-n="5"><rect class="part card-box" x="16" y="214" width="528" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="237" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 5:</text><text class="label clue" x="100" y="237" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Chitra is taller than Dev.</text></g>
</svg>
```

- **alt**: Clue 1: Bilal is taller than Chitra. Clue 2: Asha is neither the tallest nor the shortest. Clue 3: Only one person is taller than Bilal. Clue 4: Chitra is taller than Asha. Clue 5: Chitra is taller than Dev.
- **options**:
  - A) Asha
  - B) Chitra
  - C) Bilal
  - D) Dev
- **answer**: B
- **explanation**: Clue 3 makes Bilal 2nd tallest. Clues 1, 4 and 5 put Chitra below Bilal but above Asha and Dev, so Chitra is 3rd. Clue 2 says Asha is not shortest, so Asha is 4th and Dev 5th, which leaves Esha tallest. The order is Esha, Bilal, Chitra, Asha, Dev, so Chitra is in the middle. Asha is tempting because clue 2 says Asha is neither tallest nor shortest, but that leaves three places, and Chitra is taller than Asha.
- **hint**: Start with the card that fixes one friend's exact place in the line, then fit the other friends around it.
- **skill**: five_person_height_puzzle
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q22
- **id**: g4-maths-ch10-a-22
- **stem**: In a row of children, Tara is 10th from the left and Uma is 6th from the right. When they swap places, Tara becomes 15th from the left. How many children are in the row?
- **options**:
  - A) 20 children
  - B) 21 children
  - C) 25 children
  - D) 16 children
- **answer**: A
- **explanation**: After the swap, Tara stands where Uma was. That place is 15th from the left and 6th from the right, so the row has 15 + 6 − 1 = 20 children. 21 children is tempting (15 + 6), but that counts the swapped place twice.
- **hint**: After the swap, Tara is standing in Uma's old place. Describe that one place from both ends of the row.
- **skill**: swap_places_total
- **difficulty**: hard
- **type**: logical
- **pictorial**: no
- **olympiad_section**: achievers

### Q23
- **id**: g4-maths-ch10-a-23
- **stem**: The table shows how CODE is coded. Each letter moves forward, but by a different amount. Using the same rule, how is BEAN coded?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 374 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A table showing each letter of CODE, how far it moves and its code letter">
  <rect class="bg" x="0" y="0" width="374" height="150" fill="#fff"/>
  <text class="title" x="187.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">How CODE is coded</text>
  <text class="label row-head" x="64" y="62" font-size="12" text-anchor="middle" font-weight="bold" fill="#455a64">Letter</text>
  <text class="label row-head" x="64" y="98" font-size="12" text-anchor="middle" font-weight="bold" fill="#455a64">Move</text>
  <text class="label row-head" x="64" y="134" font-size="12" text-anchor="middle" font-weight="bold" fill="#455a64">Code</text>
  <g class="part col" data-i="0"><rect class="part top-box" x="120" y="40" width="56" height="34" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="148.0" y="63" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">C</text><rect class="part move-box" x="120" y="76" width="56" height="34" rx="0" fill="#fff3e0" stroke="#78909c" stroke-width="1"/><text class="label move" x="148.0" y="99" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">+1</text><rect class="part bottom-box" x="120" y="112" width="56" height="34" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="148.0" y="135" font-size="16" text-anchor="middle" font-weight="bold" fill="#2e7d32">D</text></g>
  <g class="part col" data-i="1"><rect class="part top-box" x="176" y="40" width="56" height="34" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="204.0" y="63" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">O</text><rect class="part move-box" x="176" y="76" width="56" height="34" rx="0" fill="#fff3e0" stroke="#78909c" stroke-width="1"/><text class="label move" x="204.0" y="99" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">+2</text><rect class="part bottom-box" x="176" y="112" width="56" height="34" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="204.0" y="135" font-size="16" text-anchor="middle" font-weight="bold" fill="#2e7d32">Q</text></g>
  <g class="part col" data-i="2"><rect class="part top-box" x="232" y="40" width="56" height="34" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="260.0" y="63" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">D</text><rect class="part move-box" x="232" y="76" width="56" height="34" rx="0" fill="#fff3e0" stroke="#78909c" stroke-width="1"/><text class="label move" x="260.0" y="99" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">+3</text><rect class="part bottom-box" x="232" y="112" width="56" height="34" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="260.0" y="135" font-size="16" text-anchor="middle" font-weight="bold" fill="#2e7d32">G</text></g>
  <g class="part col" data-i="3"><rect class="part top-box" x="288" y="40" width="56" height="34" rx="0" fill="#fff" stroke="#78909c" stroke-width="1"/><text class="label plain" x="316.0" y="63" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">E</text><rect class="part move-box" x="288" y="76" width="56" height="34" rx="0" fill="#fff3e0" stroke="#78909c" stroke-width="1"/><text class="label move" x="316.0" y="99" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">+4</text><rect class="part bottom-box" x="288" y="112" width="56" height="34" rx="0" fill="#e8f5e9" stroke="#78909c" stroke-width="1"/><text class="label code" x="316.0" y="135" font-size="16" text-anchor="middle" font-weight="bold" fill="#2e7d32">I</text></g>
</svg>
```

- **alt**: C moves +1 to D, O moves +2 to Q, D moves +3 to G, E moves +4 to I, so CODE is coded DQGI.
- **options**:
  - A) CGDR
  - B) CFBO
  - C) DGCP
  - D) CGDQ
- **answer**: A
- **explanation**: The 1st letter moves 1 place, the 2nd moves 2, the 3rd moves 3 and the 4th moves 4. So B → C, E → G, A → D, N → R, giving CGDR. CFBO is tempting because it moves every letter by 1, like the first letter of CODE, but the move grows by one for each next letter.
- **hint**: Look at the middle row of the table. How does the move change from one letter to the next? Use the same moves for BEAN.
- **skill**: growing_shift_code
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q24
- **id**: g4-maths-ch10-a-24
- **stem**: In a code, TAPE is written as SBOF: vowels and consonants follow different rules. How is RICE written?
- **options**:
  - A) SJDF
  - B) QHBD
  - C) SHDD
  - D) QJBF
- **answer**: D
- **explanation**: In TAPE → SBOF, the consonants T and P move 1 place back (S, O) and the vowels A and E move 1 place forward (B, F). In RICE, R → Q, I → J, C → B, E → F, giving QJBF. SJDF is tempting because it moves R and C forward, but consonants move back in this code.
- **hint**: Sort the letters of TAPE into vowels and consonants, and see which way each kind moves. Then do the same for RICE.
- **skill**: vowel_consonant_code
- **difficulty**: hard
- **type**: logical
- **pictorial**: no
- **olympiad_section**: achievers

## Practice Set B

### Q01
- **id**: g4-maths-ch10-b-01
- **stem**: On the alphabet strip, the letter P is highlighted. Which letter is 6th to the left of P?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 706 112" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="An alphabet strip from A to Z with P highlighted">
  <rect class="bg" x="0" y="0" width="706" height="112" fill="#fff"/>
  <text class="title" x="353.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Find the letter</text>
  <g class="part tile" data-pos="1"><rect class="part tile-box" x="15" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="28" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">A</text></g>
  <g class="part tile" data-pos="2"><rect class="part tile-box" x="41" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="54" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">B</text></g>
  <g class="part tile" data-pos="3"><rect class="part tile-box" x="67" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="80" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">C</text></g>
  <g class="part tile" data-pos="4"><rect class="part tile-box" x="93" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="106" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">D</text></g>
  <g class="part tile" data-pos="5"><rect class="part tile-box" x="119" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="132" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">E</text></g>
  <g class="part tile" data-pos="6"><rect class="part tile-box" x="145" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="158" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">F</text></g>
  <g class="part tile" data-pos="7"><rect class="part tile-box" x="171" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="184" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">G</text></g>
  <g class="part tile" data-pos="8"><rect class="part tile-box" x="197" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="210" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">H</text></g>
  <g class="part tile" data-pos="9"><rect class="part tile-box" x="223" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="236" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">I</text></g>
  <g class="part tile" data-pos="10"><rect class="part tile-box" x="249" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="262" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">J</text></g>
  <g class="part tile" data-pos="11"><rect class="part tile-box" x="275" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="288" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">K</text></g>
  <g class="part tile" data-pos="12"><rect class="part tile-box" x="301" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="314" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">L</text></g>
  <g class="part tile" data-pos="13"><rect class="part tile-box" x="327" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="340" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">M</text></g>
  <g class="part tile" data-pos="14"><rect class="part tile-box" x="353" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="366" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">N</text></g>
  <g class="part tile" data-pos="15"><rect class="part tile-box" x="379" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="392" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">O</text></g>
  <g class="part tile highlight" data-pos="16"><rect class="part tile-box" x="405" y="38" width="26" height="34" rx="3" fill="#ffe082" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="418" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">P</text></g>
  <g class="part tile" data-pos="17"><rect class="part tile-box" x="431" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="444" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Q</text></g>
  <g class="part tile" data-pos="18"><rect class="part tile-box" x="457" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="470" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">R</text></g>
  <g class="part tile" data-pos="19"><rect class="part tile-box" x="483" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="496" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">S</text></g>
  <g class="part tile" data-pos="20"><rect class="part tile-box" x="509" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="522" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">T</text></g>
  <g class="part tile" data-pos="21"><rect class="part tile-box" x="535" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="548" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">U</text></g>
  <g class="part tile" data-pos="22"><rect class="part tile-box" x="561" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="574" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">V</text></g>
  <g class="part tile" data-pos="23"><rect class="part tile-box" x="587" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="600" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">W</text></g>
  <g class="part tile" data-pos="24"><rect class="part tile-box" x="613" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="626" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">X</text></g>
  <g class="part tile" data-pos="25"><rect class="part tile-box" x="639" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="652" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Y</text></g>
  <g class="part tile" data-pos="26"><rect class="part tile-box" x="665" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="678" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Z</text></g>
</svg>
```

- **alt**: The letters A to Z in one strip; the letter P is highlighted.
- **options**:
  - A) K
  - B) V
  - C) J
  - D) I
- **answer**: C
- **explanation**: Moving left from P: O (1st), N (2nd), M (3rd), L (4th), K (5th), J (6th). So the answer is J. K is tempting if you count P itself as the first step, but the count starts with the letter next to P.
- **hint**: Put your finger on the highlighted letter and step left one letter at a time, without counting the starting letter.
- **skill**: letter_left_of_highlight
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q02
- **id**: g4-maths-ch10-b-02
- **stem**: Rhea's secret code turns GRAPE into FQZOD. What does LEMON turn into?
- **options**:
  - A) KDLNM
  - B) MFNPO
  - C) KDLMN
  - D) NOMEL
- **answer**: A
- **explanation**: Each letter moves 1 place back: G → F, R → Q, A → Z (going back from A wraps round to Z), P → O, E → D. So L → K, E → D, M → L, O → N, N → M, giving KDLNM. MFNPO is tempting, but it moves the letters forward instead of back.
- **hint**: Compare G with its code letter to see which way the letters move. The A in GRAPE shows what happens at the start.
- **skill**: backward_shift_code
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q03
- **id**: g4-maths-ch10-b-03
- **stem**: To send a number message, Om swaps every letter for its place in the alphabet (A = 1, Z = 26). What message does he send for FISH?
- **options**:
  - A) 6-9-19-8
  - B) 6-9-18-8
  - C) 6-8-19-8
  - D) 7-9-19-8
- **answer**: A
- **explanation**: F is the 6th letter, I the 9th, S the 19th and H the 8th, so FISH is 6-9-19-8. 6-9-18-8 is tempting if you slip by one when counting to S, but 18 is R; S comes next at 19.
- **hint**: Count to each letter of FISH in the alphabet. For letters far along, count back from Z, which is the last place.
- **skill**: letter_to_number_code
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q04
- **id**: g4-maths-ch10-b-04
- **stem**: Ten children wait in the canteen queue, as shown. Ishaan is 4th from the front. What is his position from the back?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 620 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Ten children standing in a queue, front at the left">
  <rect class="bg" x="0" y="0" width="620" height="140" fill="#fff"/>
  <text class="title" x="310.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Canteen queue</text>
  <text class="label end end-left" x="30" y="82" font-size="12" text-anchor="middle" font-weight="bold" fill="#1565c0">FRONT</text>
  <text class="label end end-right" x="590" y="82" font-size="12" text-anchor="middle" font-weight="bold" fill="#1565c0">BACK</text>
  <g class="part child" data-name="Nikhil">
    <circle class="part head" cx="85" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="72" y="65" width="26" height="34" rx="8" fill="#90caf9" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="85" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Nikhil</text>
  </g>
  <g class="part child" data-name="Rhea">
    <circle class="part head" cx="135" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="122" y="65" width="26" height="34" rx="8" fill="#a5d6a7" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="135" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Rhea</text>
  </g>
  <g class="part child" data-name="Sahil">
    <circle class="part head" cx="185" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="172" y="65" width="26" height="34" rx="8" fill="#ce93d8" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="185" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Sahil</text>
  </g>
  <g class="part child" data-name="Ishaan">
    <circle class="part head" cx="235" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="222" y="65" width="26" height="34" rx="8" fill="#ffab91" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="235" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Ishaan</text>
  </g>
  <g class="part child" data-name="Tanvi">
    <circle class="part head" cx="285" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="272" y="65" width="26" height="34" rx="8" fill="#80cbc4" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="285" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Tanvi</text>
  </g>
  <g class="part child" data-name="Kunal">
    <circle class="part head" cx="335" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="322" y="65" width="26" height="34" rx="8" fill="#fff59d" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="335" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Kunal</text>
  </g>
  <g class="part child" data-name="Lavanya">
    <circle class="part head" cx="385" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="372" y="65" width="26" height="34" rx="8" fill="#b0bec5" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="385" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Lavanya</text>
  </g>
  <g class="part child" data-name="Manav">
    <circle class="part head" cx="435" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="422" y="65" width="26" height="34" rx="8" fill="#f48fb1" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="435" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Manav</text>
  </g>
  <g class="part child" data-name="Ojas">
    <circle class="part head" cx="485" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="472" y="65" width="26" height="34" rx="8" fill="#bcaaa4" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="485" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Ojas</text>
  </g>
  <g class="part child" data-name="Pihu">
    <circle class="part head" cx="535" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="522" y="65" width="26" height="34" rx="8" fill="#9fa8da" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="535" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Pihu</text>
  </g>
</svg>
```

- **alt**: From the front (left) to the back (right): Nikhil, Rhea, Sahil, Ishaan, Tanvi, Kunal, Lavanya, Manav, Ojas, Pihu.
- **options**:
  - A) 6th
  - B) 7th
  - C) 8th
  - D) 5th
- **answer**: B
- **explanation**: There are 10 children and Ishaan is 4th from the front, so from the back he is 10 − 4 + 1 = 7th (Pihu, Ojas, Manav, Lavanya, Kunal, Tanvi, then Ishaan). 6th is tempting (10 − 4), but that forgets to count Ishaan himself.
- **hint**: Count from the back of the canteen queue up to Ishaan, including him, or use the total and his place from the front.
- **skill**: front_back_position
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q05
- **id**: g4-maths-ch10-b-05
- **stem**: Twenty-five students stand in a line for the school bus. Arun is 9th from the left end. What is his position from the right end?
- **options**:
  - A) 16th
  - B) 18th
  - C) 17th
  - D) 15th
- **answer**: C
- **explanation**: Children to Arun's left: 8. Children to his right: 25 − 9 = 16. So from the right he is 16 + 1 = 17th. 16th is tempting (25 − 9), but that is the number of children to his right, not his own place.
- **hint**: Work out how many students stand to Arun's right, then remember to count Arun himself.
- **skill**: position_other_end
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q06
- **id**: g4-maths-ch10-b-06
- **stem**: The bars show the heights of five friends. Who is the second tallest?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 228" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A bar chart of the heights of five friends">
  <rect class="bg" x="0" y="0" width="480" height="228" fill="#fff"/>
  <text class="title" x="240.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Our heights</text>
  <line class="axis" x1="40" y1="178" x2="460" y2="178" stroke="#455a64" stroke-width="1.5"/>
  <g class="part scale" data-base="120" data-scale="6" data-y0="178"></g>
  <g class="part hbar" data-name="Jaya"><rect class="part bar" x="70" y="100" width="40" height="78" rx="2" fill="#90caf9" stroke="#455a64" stroke-width="1.2"/><text class="label value" x="90" y="94" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">128 cm</text><text class="label name" x="90" y="196" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Jaya</text></g>
  <g class="part hbar" data-name="Kunal"><rect class="part bar" x="150" y="58" width="40" height="120" rx="2" fill="#a5d6a7" stroke="#455a64" stroke-width="1.2"/><text class="label value" x="170" y="52" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">135 cm</text><text class="label name" x="170" y="196" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Kunal</text></g>
  <g class="part hbar" data-name="Lalit"><rect class="part bar" x="230" y="82" width="40" height="96" rx="2" fill="#ce93d8" stroke="#455a64" stroke-width="1.2"/><text class="label value" x="250" y="76" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">131 cm</text><text class="label name" x="250" y="196" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Lalit</text></g>
  <g class="part hbar" data-name="Mitali"><rect class="part bar" x="310" y="40" width="40" height="138" rx="2" fill="#ffab91" stroke="#455a64" stroke-width="1.2"/><text class="label value" x="330" y="34" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">138 cm</text><text class="label name" x="330" y="196" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Mitali</text></g>
  <g class="part hbar" data-name="Nisha"><rect class="part bar" x="390" y="112" width="40" height="66" rx="2" fill="#80cbc4" stroke="#455a64" stroke-width="1.2"/><text class="label value" x="410" y="106" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">126 cm</text><text class="label name" x="410" y="196" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Nisha</text></g>
</svg>
```

- **alt**: Heights: Jaya 128 cm, Kunal 135 cm, Lalit 131 cm, Mitali 138 cm, Nisha 126 cm.
- **options**:
  - A) Mitali
  - B) Kunal
  - C) Lalit
  - D) Nisha
- **answer**: B
- **explanation**: From tallest: Mitali 138 cm, Kunal 135 cm, Lalit 131 cm, Jaya 128 cm, Nisha 126 cm. So Kunal is second tallest. Mitali is tempting because her bar is the highest, but that makes her the tallest, one place above second.
- **hint**: Find the tallest bar first and set it aside. Then find the tallest of the bars that are left.
- **skill**: second_tallest_from_bars
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q07
- **id**: g4-maths-ch10-b-07
- **stem**: The vowels of the alphabet are A, E, I, O and U. Which letter is 3rd after the 2nd vowel?
- **options**:
  - A) G
  - B) L
  - C) H
  - D) K
- **answer**: C
- **explanation**: The 2nd vowel is E. The letters after E are F (1st), G (2nd) and H (3rd). So the answer is H. G is tempting if you count E itself as the first letter, but 'after E' starts with F.
- **hint**: Find the second vowel in the list first. Then count forward, starting with the letter just after it.
- **skill**: letter_after_vowel
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q08
- **id**: g4-maths-ch10-b-08
- **stem**: In a picture language, each symbol stands for one word. Using the two code cards, what does # mean?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 420 134" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two code cards with symbols and their meanings">
  <rect class="bg" x="0" y="0" width="420" height="134" fill="#fff"/>
  <text class="title" x="210.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Picture language</text>
  <g class="part card" data-n="1"><rect class="part card-box" x="16" y="38" width="388" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="61" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Card 1:</text><text class="label clue" x="100" y="61" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">@ # means 'red apple'</text></g>
  <g class="part card" data-n="2"><rect class="part card-box" x="16" y="82" width="388" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="105" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Card 2:</text><text class="label clue" x="100" y="105" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">@ % means 'red car'</text></g>
</svg>
```

- **alt**: Card 1: @ # means 'red apple'. Card 2: @ % means 'red car'.
- **options**:
  - A) red
  - B) apple
  - C) car
  - D) red apple
- **answer**: B
- **explanation**: Both cards have @ and both meanings have 'red', so @ = red. In card 1 the other symbol, #, must mean the other word, apple. Red is tempting because it is the first word on card 1, but red belongs to @, the symbol found on both cards.
- **hint**: Find the symbol that is on both cards and the word that is in both meanings. What is left over on the first card?
- **skill**: symbol_word_code
- **difficulty**: easy
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q09
- **id**: g4-maths-ch10-b-09
- **stem**: How many of these words would come before MANGO in a dictionary: MELON, LEMON, MAPLE, MAGIC, NUTMEG?
- **options**:
  - A) 3
  - B) 1
  - C) 2
  - D) 4
- **answer**: C
- **explanation**: LEMON starts with L, which is before M, so it comes first. MAGIC: M, A, then G comes before N, so it is before MANGO. MAPLE (P after N), MELON (E after A) and NUTMEG (N after M) come after. That makes 2 words. 3 is tempting if MAPLE is counted, but its third letter P comes after the N of MANGO.
- **hint**: Compare each word with MANGO one letter at a time, from the first letter, until the letters differ.
- **skill**: dictionary_before_word
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q10
- **id**: g4-maths-ch10-b-10
- **stem**: Divya writes the alphabet backwards, starting with Z. Which letter does she write 5th?
- **options**:
  - A) U
  - B) E
  - C) W
  - D) V
- **answer**: D
- **explanation**: Backwards the alphabet goes Z, Y, X, W, V, … so the 5th letter is V. U is tempting because 26 − 5 = 21 and the 21st letter is U, but the 5th from the end is position 26 − 5 + 1 = 22, which is V.
- **hint**: Write the last few letters of the alphabet in reverse order and count them, beginning with Z.
- **skill**: reverse_alphabet_position
- **difficulty**: easy
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q11
- **id**: g4-maths-ch10-b-11
- **stem**: On the code wheel, each outer letter is coded by the inner letter on the same spoke. How is the word BEAD coded?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 336 336" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A code wheel with plain letters on the outer ring and code letters on the inner ring">
  <rect class="bg" x="0" y="0" width="336" height="336" fill="#fff"/>
  <text class="title" x="168.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Code wheel</text>
  <circle class="part ring-outer" cx="168" cy="182" r="144" fill="#e3f2fd" stroke="#546e7a" stroke-width="1.5"/>
  <circle class="part ring-inner" cx="168" cy="182" r="112" fill="#e8f5e9" stroke="#546e7a" stroke-width="1.5"/>
  <circle class="part hub" cx="168" cy="182" r="76" fill="#fff" stroke="#546e7a" stroke-width="1.5"/>
  <text class="label small" x="168" y="178" font-size="11" text-anchor="middle" font-weight="normal" fill="#455a64">outer letter</text>
  <text class="label small" x="168" y="194" font-size="11" text-anchor="middle" font-weight="normal" fill="#455a64">→ inner letter</text>
  <text class="label plain" data-angle="0" x="168" y="59" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">A</text>
  <text class="label code" data-angle="0" x="168" y="89" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">F</text>
  <line class="spoke" x1="181.5" y1="70.82" x2="185.36" y2="39.05" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="13.85" x="198.63" y="62.72" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">B</text>
  <text class="label code" data-angle="13.85" x="191.45" y="91.85" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">G</text>
  <line class="spoke" x1="207.72" y1="77.28" x2="219.06" y2="47.36" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="27.69" x="227.48" y="73.66" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">C</text>
  <text class="label code" data-angle="27.69" x="213.54" y="100.23" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">H</text>
  <line class="spoke" x1="231.62" y1="89.83" x2="249.8" y2="63.49" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="41.54" x="252.88" y="91.19" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">D</text>
  <text class="label code" data-angle="41.54" x="232.99" y="113.65" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">I</text>
  <line class="spoke" x1="251.83" y1="107.73" x2="275.79" y2="86.51" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="55.38" x="273.34" y="114.29" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">E</text>
  <text class="label code" data-angle="55.38" x="248.65" y="131.33" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">J</text>
  <line class="spoke" x1="267.17" y1="129.95" x2="295.51" y2="115.08" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="69.23" x="287.68" y="141.61" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">F</text>
  <text class="label code" data-angle="69.23" x="259.63" y="152.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">K</text>
  <line class="spoke" x1="276.75" y1="155.2" x2="307.82" y2="147.54" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="83.08" x="295.07" y="171.57" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">G</text>
  <text class="label code" data-angle="83.08" x="265.29" y="175.19" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">L</text>
  <line class="spoke" x1="280" y1="182" x2="312" y2="182" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="96.92" x="295.07" y="202.43" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">H</text>
  <text class="label code" data-angle="96.92" x="265.29" y="198.81" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">M</text>
  <line class="spoke" x1="276.75" y1="208.8" x2="307.82" y2="216.46" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="110.77" x="287.68" y="232.39" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">I</text>
  <text class="label code" data-angle="110.77" x="259.63" y="221.75" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">N</text>
  <line class="spoke" x1="267.17" y1="234.05" x2="295.51" y2="248.92" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="124.62" x="273.34" y="259.71" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">J</text>
  <text class="label code" data-angle="124.62" x="248.65" y="242.67" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">O</text>
  <line class="spoke" x1="251.83" y1="256.27" x2="275.79" y2="277.49" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="138.46" x="252.88" y="282.81" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">K</text>
  <text class="label code" data-angle="138.46" x="232.99" y="260.35" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">P</text>
  <line class="spoke" x1="231.62" y1="274.17" x2="249.8" y2="300.51" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="152.31" x="227.48" y="300.34" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">L</text>
  <text class="label code" data-angle="152.31" x="213.54" y="273.77" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">Q</text>
  <line class="spoke" x1="207.72" y1="286.72" x2="219.06" y2="316.64" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="166.15" x="198.63" y="311.28" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">M</text>
  <text class="label code" data-angle="166.15" x="191.45" y="282.15" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">R</text>
  <line class="spoke" x1="181.5" y1="293.18" x2="185.36" y2="324.95" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="180" x="168" y="315" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">N</text>
  <text class="label code" data-angle="180" x="168" y="285" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">S</text>
  <line class="spoke" x1="154.5" y1="293.18" x2="150.64" y2="324.95" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="193.85" x="137.37" y="311.28" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">O</text>
  <text class="label code" data-angle="193.85" x="144.55" y="282.15" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">T</text>
  <line class="spoke" x1="128.28" y1="286.72" x2="116.94" y2="316.64" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="207.69" x="108.52" y="300.34" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">P</text>
  <text class="label code" data-angle="207.69" x="122.46" y="273.77" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">U</text>
  <line class="spoke" x1="104.38" y1="274.17" x2="86.2" y2="300.51" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="221.54" x="83.12" y="282.81" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">Q</text>
  <text class="label code" data-angle="221.54" x="103.01" y="260.35" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">V</text>
  <line class="spoke" x1="84.17" y1="256.27" x2="60.21" y2="277.49" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="235.38" x="62.66" y="259.71" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">R</text>
  <text class="label code" data-angle="235.38" x="87.35" y="242.67" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">W</text>
  <line class="spoke" x1="68.83" y1="234.05" x2="40.49" y2="248.92" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="249.23" x="48.32" y="232.39" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">S</text>
  <text class="label code" data-angle="249.23" x="76.37" y="221.75" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">X</text>
  <line class="spoke" x1="59.25" y1="208.8" x2="28.18" y2="216.46" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="263.08" x="40.93" y="202.43" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">T</text>
  <text class="label code" data-angle="263.08" x="70.71" y="198.81" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">Y</text>
  <line class="spoke" x1="56" y1="182" x2="24" y2="182" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="276.92" x="40.93" y="171.57" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">U</text>
  <text class="label code" data-angle="276.92" x="70.71" y="175.19" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">Z</text>
  <line class="spoke" x1="59.25" y1="155.2" x2="28.18" y2="147.54" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="290.77" x="48.32" y="141.61" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">V</text>
  <text class="label code" data-angle="290.77" x="76.37" y="152.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">A</text>
  <line class="spoke" x1="68.83" y1="129.95" x2="40.49" y2="115.08" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="304.62" x="62.66" y="114.29" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">W</text>
  <text class="label code" data-angle="304.62" x="87.35" y="131.33" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">B</text>
  <line class="spoke" x1="84.17" y1="107.73" x2="60.21" y2="86.51" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="318.46" x="83.12" y="91.19" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">X</text>
  <text class="label code" data-angle="318.46" x="103.01" y="113.65" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">C</text>
  <line class="spoke" x1="104.38" y1="89.83" x2="86.2" y2="63.49" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="332.31" x="108.52" y="73.66" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">Y</text>
  <text class="label code" data-angle="332.31" x="122.46" y="100.23" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">D</text>
  <line class="spoke" x1="128.28" y1="77.28" x2="116.94" y2="47.36" stroke="#90a4ae" stroke-width="1"/>
  <text class="label plain" data-angle="346.15" x="137.37" y="62.72" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">Z</text>
  <text class="label code" data-angle="346.15" x="144.55" y="91.85" font-size="14" text-anchor="middle" font-weight="bold" fill="#2e7d32">E</text>
  <line class="spoke" x1="154.5" y1="70.82" x2="150.64" y2="39.05" stroke="#90a4ae" stroke-width="1"/>
</svg>
```

- **alt**: A code wheel. Each outer letter is paired with the inner letter 5 places further on: A with F, B with G, C with H, and so on, up to U with Z, V with A, W with B, X with C, Y with D, Z with E.
- **options**:
  - A) WZVY
  - B) GJEI
  - C) FIEH
  - D) GJFI
- **answer**: D
- **explanation**: Reading the wheel: B → G, E → J, A → F, D → I, so BEAD is coded GJFI. GJEI is tempting because it gets three letters right, but A is paired with F on the wheel, not E.
- **hint**: Find each letter of BEAD on the outer ring and read the letter just inside it on the same spoke.
- **skill**: code_wheel_encode
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q12
- **id**: g4-maths-ch10-b-12
- **stem**: In a code, MAPLE is written as 31752, with each letter always given the same digit. How is PALM written?
- **options**:
  - A) 3517
  - B) 7135
  - C) 1753
  - D) 7153
- **answer**: D
- **explanation**: Match letters to digits in order: M = 3, A = 1, P = 7, L = 5, E = 2. So PALM is P 7, A 1, L 5, M 3 = 7153. 3517 is tempting because it is PALM's code read backwards, but the code keeps the letters in the same order as the word.
- **hint**: Pair each letter of MAPLE with the digit in the same place. Then write the digit for each letter of PALM.
- **skill**: letter_digit_substitution
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q13
- **id**: g4-maths-ch10-b-13
- **stem**: Three words below are coded by writing each letter's alphabet place side by side. Which word is coded wrongly?
- **options**:
  - A) DIG → 496
  - B) CAB → 312
  - C) BED → 254
  - D) FAD → 614
- **answer**: A
- **explanation**: CAB = 3, 1, 2 → 312; BED = 2, 5, 4 → 254; FAD = 6, 1, 4 → 614. DIG should be 4, 9, 7 → 497, because G is the 7th letter, not the 6th. So DIG → 496 is wrong. FAD → 614 is tempting because F and 6 look like a slip, but F really is the 6th letter.
- **hint**: Check each letter of every word against its place in the alphabet. One letter in one word has the wrong number.
- **skill**: odd_number_code
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q14
- **id**: g4-maths-ch10-b-14
- **stem**: Kiran is the only child named in this row of eleven. Lata is 3rd to the right of Kiran. Counting from the right end, where is Lata?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 670 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Eleven children in a row; only Kiran is named">
  <rect class="bg" x="0" y="0" width="670" height="140" fill="#fff"/>
  <text class="title" x="335.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Children in a row</text>
  <text class="label end end-left" x="30" y="82" font-size="12" text-anchor="middle" font-weight="bold" fill="#1565c0">LEFT</text>
  <text class="label end end-right" x="640" y="82" font-size="12" text-anchor="middle" font-weight="bold" fill="#1565c0">RIGHT</text>
  <g class="part child" data-name="?">
    <circle class="part head" cx="85" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="72" y="65" width="26" height="34" rx="8" fill="#90caf9" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="85" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="135" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="122" y="65" width="26" height="34" rx="8" fill="#a5d6a7" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="135" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="185" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="172" y="65" width="26" height="34" rx="8" fill="#ce93d8" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="185" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="Kiran">
    <circle class="part head" cx="235" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="222" y="65" width="26" height="34" rx="8" fill="#ffab91" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="235" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">Kiran</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="285" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="272" y="65" width="26" height="34" rx="8" fill="#80cbc4" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="285" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="335" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="322" y="65" width="26" height="34" rx="8" fill="#fff59d" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="335" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="385" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="372" y="65" width="26" height="34" rx="8" fill="#b0bec5" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="385" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="435" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="422" y="65" width="26" height="34" rx="8" fill="#f48fb1" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="435" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="485" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="472" y="65" width="26" height="34" rx="8" fill="#bcaaa4" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="485" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="535" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="522" y="65" width="26" height="34" rx="8" fill="#9fa8da" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="535" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
  <g class="part child" data-name="?">
    <circle class="part head" cx="585" cy="52" r="11" fill="#ffcc80" stroke="#6d4c41" stroke-width="1.4"/>
    <rect class="part body" x="572" y="65" width="26" height="34" rx="8" fill="#c5e1a5" stroke="#455a64" stroke-width="1.2"/>
    <text class="label name" x="585" y="116" font-size="12" text-anchor="middle" font-weight="bold" fill="#263238">?</text>
  </g>
</svg>
```

- **alt**: Eleven children in a row from LEFT to RIGHT. Only Kiran is named; Kiran is the 4th child from the left. The others are marked ?.
- **options**:
  - A) 4th
  - B) 7th
  - C) 5th
  - D) 8th
- **answer**: C
- **explanation**: Kiran is 4th from the left, so Lata, 3 places to the right of Kiran, is 7th from the left. With 11 children, Lata is 11 − 7 + 1 = 5th from the right. 7th is tempting, but that is Lata's place from the left end.
- **hint**: Find Lata's place from the left first by counting on from Kiran. Then count from the right end of the row.
- **skill**: relative_position_row
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q15
- **id**: g4-maths-ch10-b-15
- **stem**: In a spelling test, Pari scored 8 marks more than Neel. Neel scored 5 marks less than Lina. Moti scored 2 marks more than Lina. Who scored the highest?
- **options**:
  - A) Moti
  - B) Lina
  - C) Neel
  - D) Pari
- **answer**: D
- **explanation**: Compare everyone with Lina. Neel = Lina − 5, Pari = Neel + 8 = Lina + 3, and Moti = Lina + 2. So Pari is highest (3 more than Lina), then Moti, Lina and Neel. Moti is tempting because Moti is directly said to be above Lina, but Pari ends up 3 above Lina, one more than Moti.
- **hint**: Pick one friend as the starting point, such as Lina, and write everyone's score as 'more' or 'less' than that friend.
- **skill**: marks_differences
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q16
- **id**: g4-maths-ch10-b-16
- **stem**: Gita circles every 3rd letter of the alphabet. The strip shows her first three circles. Which letter is her 6th circled letter?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 706 112" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="An alphabet strip with C, F and I circled">
  <rect class="bg" x="0" y="0" width="706" height="112" fill="#fff"/>
  <text class="title" x="353.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Every 3rd letter</text>
  <g class="part tile" data-pos="1"><rect class="part tile-box" x="15" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="28" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">A</text></g>
  <g class="part tile" data-pos="2"><rect class="part tile-box" x="41" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="54" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">B</text></g>
  <g class="part tile" data-pos="3"><rect class="part tile-box" x="67" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="80" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">C</text></g>
  <circle class="part ring" data-letter="C" cx="80" cy="55" r="11.96" fill="none" stroke="#d32f2f" stroke-width="2"/>
  <g class="part tile" data-pos="4"><rect class="part tile-box" x="93" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="106" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">D</text></g>
  <g class="part tile" data-pos="5"><rect class="part tile-box" x="119" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="132" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">E</text></g>
  <g class="part tile" data-pos="6"><rect class="part tile-box" x="145" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="158" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">F</text></g>
  <circle class="part ring" data-letter="F" cx="158" cy="55" r="11.96" fill="none" stroke="#d32f2f" stroke-width="2"/>
  <g class="part tile" data-pos="7"><rect class="part tile-box" x="171" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="184" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">G</text></g>
  <g class="part tile" data-pos="8"><rect class="part tile-box" x="197" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="210" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">H</text></g>
  <g class="part tile" data-pos="9"><rect class="part tile-box" x="223" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="236" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">I</text></g>
  <circle class="part ring" data-letter="I" cx="236" cy="55" r="11.96" fill="none" stroke="#d32f2f" stroke-width="2"/>
  <g class="part tile" data-pos="10"><rect class="part tile-box" x="249" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="262" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">J</text></g>
  <g class="part tile" data-pos="11"><rect class="part tile-box" x="275" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="288" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">K</text></g>
  <g class="part tile" data-pos="12"><rect class="part tile-box" x="301" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="314" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">L</text></g>
  <g class="part tile" data-pos="13"><rect class="part tile-box" x="327" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="340" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">M</text></g>
  <g class="part tile" data-pos="14"><rect class="part tile-box" x="353" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="366" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">N</text></g>
  <g class="part tile" data-pos="15"><rect class="part tile-box" x="379" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="392" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">O</text></g>
  <g class="part tile" data-pos="16"><rect class="part tile-box" x="405" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="418" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">P</text></g>
  <g class="part tile" data-pos="17"><rect class="part tile-box" x="431" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="444" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Q</text></g>
  <g class="part tile" data-pos="18"><rect class="part tile-box" x="457" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="470" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">R</text></g>
  <g class="part tile" data-pos="19"><rect class="part tile-box" x="483" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="496" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">S</text></g>
  <g class="part tile" data-pos="20"><rect class="part tile-box" x="509" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="522" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">T</text></g>
  <g class="part tile" data-pos="21"><rect class="part tile-box" x="535" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="548" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">U</text></g>
  <g class="part tile" data-pos="22"><rect class="part tile-box" x="561" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="574" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">V</text></g>
  <g class="part tile" data-pos="23"><rect class="part tile-box" x="587" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="600" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">W</text></g>
  <g class="part tile" data-pos="24"><rect class="part tile-box" x="613" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="626" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">X</text></g>
  <g class="part tile" data-pos="25"><rect class="part tile-box" x="639" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="652" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Y</text></g>
  <g class="part tile" data-pos="26"><rect class="part tile-box" x="665" y="38" width="26" height="34" rx="3" fill="#ffffff" stroke="#546e7a" stroke-width="1.2"/><text class="label letter" x="678" y="61" font-size="16" text-anchor="middle" font-weight="bold" fill="#263238">Z</text></g>
</svg>
```

- **alt**: The letters A to Z in one strip, with C, F and I circled: every 3rd letter.
- **options**:
  - A) R
  - B) P
  - C) S
  - D) O
- **answer**: A
- **explanation**: The circled letters are at places 3, 6, 9, 12, 15, 18, … so the 6th one is at place 6 × 3 = 18, which is R. O is tempting because O, at place 15, is the 5th circled letter: one circle too early.
- **hint**: Write the places of the circled letters on the strip. What times table do they make?
- **skill**: every_third_letter
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: logical

### Q17
- **id**: g4-maths-ch10-b-17
- **stem**: Find the next group of letters: ACE, BDF, CEG, ?
- **options**:
  - A) DEF
  - B) DFH
  - C) EGI
  - D) DFG
- **answer**: B
- **explanation**: Inside each group the letters skip one (A_C_E). Each new group starts one letter later (A, B, C, then D). So the next group is D_F_H = DFH. EGI is tempting because it continues the skipping from CEG, but the group's first letter moves on by only one each time.
- **hint**: Look inside one group first, then look at how the first letters of the groups change.
- **skill**: letter_group_series
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q18
- **id**: g4-maths-ch10-b-18
- **stem**: Four children weigh themselves at the clinic. Bela is heavier than Dinesh. Arjun is lighter than Dinesh. Charu is heavier than Bela. Who is the second lightest?
- **options**:
  - A) Bela
  - B) Dinesh
  - C) Arjun
  - D) Charu
- **answer**: B
- **explanation**: From the clues: Charu is heavier than Bela, Bela is heavier than Dinesh, and Dinesh is heavier than Arjun. From lightest: Arjun, Dinesh, Bela, Charu. So Dinesh is second lightest. Bela is tempting because Bela is second heaviest, but the question asks for second lightest.
- **hint**: Order the four children from lightest to heaviest using the clues, then read the place the question asks for.
- **skill**: order_weights
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q19
- **id**: g4-maths-ch10-b-19
- **stem**: Kavya writes the alphabet from A to Z but leaves out every vowel (A, E, I, O, U). Which letter is 10th in her list?
- **options**:
  - A) M
  - B) J
  - C) L
  - D) N
- **answer**: A
- **explanation**: Without vowels the list starts B, C, D, F, G, H, J, K, L, M, … so the 10th letter is M. J is tempting because J is the 10th letter of the full alphabet, but A, E and I have been left out before it.
- **hint**: Write out the first letters of Kavya's list, skipping the vowels, and number them as you go.
- **skill**: skip_vowels_position
- **difficulty**: medium
- **type**: logical
- **pictorial**: no
- **olympiad_section**: logical

### Q20
- **id**: g4-maths-ch10-b-20
- **stem**: Pihu's code machine flips a word end to end, then pushes each letter 2 steps along the alphabet. MILK comes out as MNKO. Which word did she feed in to get DOCN?
- **options**:
  - A) BMAL
  - B) JYKZ
  - C) LAMB
  - D) NCOD
- **answer**: C
- **explanation**: Undo the steps in reverse order: move each letter of DOCN 2 places back to get BMAL, then write it backwards to get LAMB. (Check: LAMB backwards is BMAL, and moving 2 forward gives DOCN.) BMAL is tempting because it undoes the moving, but it forgets to turn the word back round.
- **hint**: Work backwards from the code: undo the last step first, then undo the first step. Test your method on MILK.
- **skill**: decode_reverse_shift
- **difficulty**: hard
- **type**: logical
- **pictorial**: no
- **olympiad_section**: achievers

### Q21
- **id**: g4-maths-ch10-b-21
- **stem**: Five friends, Farid, Gita, Hari, Indu and Jai, ran a race and no two finished together. Use all five clue cards. Who finished 2nd?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 520 266" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Five clue cards about the finishing order of a race">
  <rect class="bg" x="0" y="0" width="520" height="266" fill="#fff"/>
  <text class="title" x="260.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Race clue cards</text>
  <g class="part card" data-n="1"><rect class="part card-box" x="16" y="38" width="488" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="61" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 1:</text><text class="label clue" x="100" y="61" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Jai did not finish last.</text></g>
  <g class="part card" data-n="2"><rect class="part card-box" x="16" y="82" width="488" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="105" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 2:</text><text class="label clue" x="100" y="105" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Indu finished ahead of Hari.</text></g>
  <g class="part card" data-n="3"><rect class="part card-box" x="16" y="126" width="488" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="149" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 3:</text><text class="label clue" x="100" y="149" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Hari finished neither first nor last.</text></g>
  <g class="part card" data-n="4"><rect class="part card-box" x="16" y="170" width="488" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="193" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 4:</text><text class="label clue" x="100" y="193" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Indu did not win.</text></g>
  <g class="part card" data-n="5"><rect class="part card-box" x="16" y="214" width="488" height="36" rx="8" fill="#fff8e1" stroke="#ffb300" stroke-width="1.4"/><text class="label card-head" x="32" y="237" font-size="13" text-anchor="start" font-weight="bold" fill="#e65100">Clue 5:</text><text class="label clue" x="100" y="237" font-size="13" text-anchor="start" font-weight="normal" fill="#263238">Farid finished just ahead of Gita.</text></g>
</svg>
```

- **alt**: Clue 1: Jai did not finish last. Clue 2: Indu finished ahead of Hari. Clue 3: Hari finished neither first nor last. Clue 4: Indu did not win. Clue 5: Farid finished just ahead of Gita.
- **options**:
  - A) Jai
  - B) Hari
  - C) Farid
  - D) Indu
- **answer**: D
- **explanation**: Clue 5 makes Farid and Gita a pair, one right after the other. Clue 2 puts Indu ahead of Hari, clue 4 says Indu did not win, and clue 3 says Hari was not last. The only order that fits every clue is Jai, Indu, Hari, Farid, Gita, so Indu finished 2nd. Jai is tempting because Jai is placed first in clue 1, but clue 1 only says Jai was not last; Jai turns out to be the winner, in 1st place.
- **hint**: Treat the 'just ahead of' pair as one block, then try the places left for the other three friends in the race.
- **skill**: five_runner_race_puzzle
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q22
- **id**: g4-maths-ch10-b-22
- **stem**: In a class test, Raj ranks 9th from the top. Tanu ranks 5 places below Raj and 12th from the bottom. How many students took the test?
- **options**:
  - A) 26 students
  - B) 21 students
  - C) 20 students
  - D) 25 students
- **answer**: D
- **explanation**: Tanu is 5 places below the 9th, so she is 14th from the top. She is also 12th from the bottom, so there are 14 + 12 − 1 = 25 students. 26 students is tempting (14 + 12), but it counts Tanu twice.
- **hint**: Find Tanu's rank from the top first. Then join her two ranks, remembering she is counted in both.
- **skill**: rank_chain_total
- **difficulty**: hard
- **type**: logical
- **pictorial**: no
- **olympiad_section**: achievers

### Q23
- **id**: g4-maths-ch10-b-23
- **stem**: In this code, each letter is written as its row number then its column number in the grid (so B is 12), and then the codes are written in reverse order. Which word is coded 32 11 26 17?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 422 194" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A grid of letters in 3 rows and 9 columns">
  <rect class="bg" x="0" y="0" width="422" height="194" fill="#fff"/>
  <text class="title" x="211.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Letter grid</text>
  <text class="label colnum" x="79.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">1</text>
  <text class="label colnum" x="117.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">2</text>
  <text class="label colnum" x="155.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">3</text>
  <text class="label colnum" x="193.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">4</text>
  <text class="label colnum" x="231.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">5</text>
  <text class="label colnum" x="269.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">6</text>
  <text class="label colnum" x="307.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">7</text>
  <text class="label colnum" x="345.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">8</text>
  <text class="label colnum" x="383.0" y="52" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">9</text>
  <text class="label rownum" x="36" y="85.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">1</text>
  <g class="part gcell" data-r="1" data-c="1"><rect class="part gcell-box" x="60" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="79.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">A</text></g>
  <g class="part gcell" data-r="1" data-c="2"><rect class="part gcell-box" x="98" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="117.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">B</text></g>
  <g class="part gcell" data-r="1" data-c="3"><rect class="part gcell-box" x="136" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="155.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">C</text></g>
  <g class="part gcell" data-r="1" data-c="4"><rect class="part gcell-box" x="174" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="193.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">D</text></g>
  <g class="part gcell" data-r="1" data-c="5"><rect class="part gcell-box" x="212" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="231.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">E</text></g>
  <g class="part gcell" data-r="1" data-c="6"><rect class="part gcell-box" x="250" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="269.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">F</text></g>
  <g class="part gcell" data-r="1" data-c="7"><rect class="part gcell-box" x="288" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="307.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">G</text></g>
  <g class="part gcell" data-r="1" data-c="8"><rect class="part gcell-box" x="326" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="345.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">H</text></g>
  <g class="part gcell" data-r="1" data-c="9"><rect class="part gcell-box" x="364" y="60" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="383.0" y="85.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">I</text></g>
  <text class="label rownum" x="36" y="123.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">2</text>
  <g class="part gcell" data-r="2" data-c="1"><rect class="part gcell-box" x="60" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="79.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">J</text></g>
  <g class="part gcell" data-r="2" data-c="2"><rect class="part gcell-box" x="98" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="117.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">K</text></g>
  <g class="part gcell" data-r="2" data-c="3"><rect class="part gcell-box" x="136" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="155.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">L</text></g>
  <g class="part gcell" data-r="2" data-c="4"><rect class="part gcell-box" x="174" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="193.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">M</text></g>
  <g class="part gcell" data-r="2" data-c="5"><rect class="part gcell-box" x="212" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="231.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">N</text></g>
  <g class="part gcell" data-r="2" data-c="6"><rect class="part gcell-box" x="250" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="269.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">O</text></g>
  <g class="part gcell" data-r="2" data-c="7"><rect class="part gcell-box" x="288" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="307.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">P</text></g>
  <g class="part gcell" data-r="2" data-c="8"><rect class="part gcell-box" x="326" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="345.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">Q</text></g>
  <g class="part gcell" data-r="2" data-c="9"><rect class="part gcell-box" x="364" y="98" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="383.0" y="123.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">R</text></g>
  <text class="label rownum" x="36" y="161.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">3</text>
  <g class="part gcell" data-r="3" data-c="1"><rect class="part gcell-box" x="60" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="79.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">S</text></g>
  <g class="part gcell" data-r="3" data-c="2"><rect class="part gcell-box" x="98" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="117.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">T</text></g>
  <g class="part gcell" data-r="3" data-c="3"><rect class="part gcell-box" x="136" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="155.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">U</text></g>
  <g class="part gcell" data-r="3" data-c="4"><rect class="part gcell-box" x="174" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="193.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">V</text></g>
  <g class="part gcell" data-r="3" data-c="5"><rect class="part gcell-box" x="212" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="231.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">W</text></g>
  <g class="part gcell" data-r="3" data-c="6"><rect class="part gcell-box" x="250" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="269.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">X</text></g>
  <g class="part gcell" data-r="3" data-c="7"><rect class="part gcell-box" x="288" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="307.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">Y</text></g>
  <g class="part gcell" data-r="3" data-c="8"><rect class="part gcell-box" x="326" y="136" width="38" height="38" rx="0" fill="#fff" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="345.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333">Z</text></g>
  <g class="part gcell" data-r="3" data-c="9"><rect class="part gcell-box" x="364" y="136" width="38" height="38" rx="0" fill="#eceff1" stroke="#78909c" stroke-width="1.2"/><text class="label letter" x="383.0" y="161.0" font-size="16" text-anchor="middle" font-weight="bold" fill="#333"></text></g>
</svg>
```

- **alt**: A letter grid with rows 1, 2, 3 and columns 1, 2, 3, 4, 5, 6, 7, 8, 9. Row 1: A to I. Row 2: J to R. Row 3: S to Z, with the last box empty.
- **options**:
  - A) TAOG
  - B) GOAT
  - C) BOAT
  - D) GOAD
- **answer**: B
- **explanation**: Read each code from the grid: 32 = row 3, column 2 = T; 11 = A; 26 = O; 17 = G. That spells TAOG, which is the word written in reverse, so the word is GOAT. TAOG is tempting because it is what the codes spell in the order given, but the codes were written in reverse order, so the word must be turned back round.
- **hint**: Turn each two-digit code into a letter using row first, then column. Then remember the last rule of the code.
- **skill**: grid_code_reversed
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q24
- **id**: g4-maths-ch10-b-24
- **stem**: In a code, the letters of a word are first put in alphabetical order and then each letter is moved one place back. CLOUD becomes BCKNT. What does TIGER become?
- **options**:
  - A) DFHQS
  - B) SHFDQ
  - C) EGIRT
  - D) SQHFD
- **answer**: A
- **explanation**: Put TIGER's letters in alphabetical order: E, G, I, R, T. Move each one place back: D, F, H, Q, S, giving DFHQS. (Check: CLOUD sorted is CDLOU, and one place back gives BCKNT.) EGIRT is tempting because it does the sorting step, but it leaves out moving each letter back.
- **hint**: Do the steps in the order given: sort the letters of TIGER first, then move them. Check your method with CLOUD.
- **skill**: sort_then_shift_code
- **difficulty**: hard
- **type**: logical
- **pictorial**: no
- **olympiad_section**: achievers

## Answer Key

### Set A
| Q# | id | Answer | skill | difficulty | olympiad_section | pictorial |
|----|----|--------|-------|------------|------------------|-----------|
| Q01 | g4-maths-ch10-a-01 | D | position_from_right_end | easy | logical | yes |
| Q02 | g4-maths-ch10-a-02 | B | letter_shift_code | easy | logical | no |
| Q03 | g4-maths-ch10-a-03 | B | number_to_letter_decode | easy | logical | no |
| Q04 | g4-maths-ch10-a-04 | A | queue_position_from_right | easy | logical | yes |
| Q05 | g4-maths-ch10-a-05 | D | total_in_row | easy | logical | no |
| Q06 | g4-maths-ch10-a-06 | B | order_three_heights | easy | logical | yes |
| Q07 | g4-maths-ch10-a-07 | D | letters_between | easy | logical | no |
| Q08 | g4-maths-ch10-a-08 | D | symbol_letter_code | easy | logical | yes |
| Q09 | g4-maths-ch10-a-09 | A | dictionary_order | easy | logical | no |
| Q10 | g4-maths-ch10-a-10 | C | midway_letter | easy | logical | no |
| Q11 | g4-maths-ch10-a-11 | A | decode_with_shift_table | medium | logical | yes |
| Q12 | g4-maths-ch10-a-12 | C | substitution_sentences | medium | logical | yes |
| Q13 | g4-maths-ch10-a-13 | D | odd_code_pair | medium | logical | no |
| Q14 | g4-maths-ch10-a-14 | B | children_between | medium | logical | no |
| Q15 | g4-maths-ch10-a-15 | C | order_four_ages | medium | logical | no |
| Q16 | g4-maths-ch10-a-16 | C | two_step_letter_position | medium | logical | yes |
| Q17 | g4-maths-ch10-a-17 | C | interleaved_letter_series | medium | logical | no |
| Q18 | g4-maths-ch10-a-18 | A | order_marks_clues | medium | logical | no |
| Q19 | g4-maths-ch10-a-19 | C | position_digit_code | medium | logical | no |
| Q20 | g4-maths-ch10-a-20 | B | shift_then_reverse_code | hard | achievers | no |
| Q21 | g4-maths-ch10-a-21 | B | five_person_height_puzzle | hard | achievers | yes |
| Q22 | g4-maths-ch10-a-22 | A | swap_places_total | hard | achievers | no |
| Q23 | g4-maths-ch10-a-23 | A | growing_shift_code | hard | achievers | yes |
| Q24 | g4-maths-ch10-a-24 | D | vowel_consonant_code | hard | achievers | no |

### Set B
| Q# | id | Answer | skill | difficulty | olympiad_section | pictorial |
|----|----|--------|-------|------------|------------------|-----------|
| Q01 | g4-maths-ch10-b-01 | C | letter_left_of_highlight | easy | logical | yes |
| Q02 | g4-maths-ch10-b-02 | A | backward_shift_code | easy | logical | no |
| Q03 | g4-maths-ch10-b-03 | A | letter_to_number_code | easy | logical | no |
| Q04 | g4-maths-ch10-b-04 | B | front_back_position | easy | logical | yes |
| Q05 | g4-maths-ch10-b-05 | C | position_other_end | easy | logical | no |
| Q06 | g4-maths-ch10-b-06 | B | second_tallest_from_bars | easy | logical | yes |
| Q07 | g4-maths-ch10-b-07 | C | letter_after_vowel | easy | logical | no |
| Q08 | g4-maths-ch10-b-08 | B | symbol_word_code | easy | logical | yes |
| Q09 | g4-maths-ch10-b-09 | C | dictionary_before_word | easy | logical | no |
| Q10 | g4-maths-ch10-b-10 | D | reverse_alphabet_position | easy | logical | no |
| Q11 | g4-maths-ch10-b-11 | D | code_wheel_encode | medium | logical | yes |
| Q12 | g4-maths-ch10-b-12 | D | letter_digit_substitution | medium | logical | no |
| Q13 | g4-maths-ch10-b-13 | A | odd_number_code | medium | logical | no |
| Q14 | g4-maths-ch10-b-14 | C | relative_position_row | medium | logical | yes |
| Q15 | g4-maths-ch10-b-15 | D | marks_differences | medium | logical | no |
| Q16 | g4-maths-ch10-b-16 | A | every_third_letter | medium | logical | yes |
| Q17 | g4-maths-ch10-b-17 | B | letter_group_series | medium | logical | no |
| Q18 | g4-maths-ch10-b-18 | B | order_weights | medium | logical | no |
| Q19 | g4-maths-ch10-b-19 | A | skip_vowels_position | medium | logical | no |
| Q20 | g4-maths-ch10-b-20 | C | decode_reverse_shift | hard | achievers | no |
| Q21 | g4-maths-ch10-b-21 | D | five_runner_race_puzzle | hard | achievers | yes |
| Q22 | g4-maths-ch10-b-22 | D | rank_chain_total | hard | achievers | no |
| Q23 | g4-maths-ch10-b-23 | B | grid_code_reversed | hard | achievers | yes |
| Q24 | g4-maths-ch10-b-24 | A | sort_then_shift_code | hard | achievers | no |

## Pictorial notes
- Pictorial items: Set A Q01, Q04, Q06, Q08, Q11, Q12, Q16, Q21, Q23; Set B Q01, Q04, Q06, Q08, Q11, Q14, Q16, Q21, Q23.
- Figure kinds: alphabet strips (plain, with a highlighted letter, with circled letters, with marked positions), children in a row or queue with their names, clue cards and code cards, a height bar chart, a symbol code table, a two-row shift table, a code wheel, a growing-shift table and a letter grid with row and column numbers.
- Exactness: every figure is drawn from the generator's data and read back by the verify script: strip letters in left-to-right order (giving each letter's position), each child's place from the x-position of the drawing and the end labels, every clue sentence (parsed back into a rule and solved again by brute force), bar heights from the rectangles (checked against the printed cm values), code pairs from the table columns, wheel pairs from the angle of each outer and inner letter, the moves in the growing-shift table, and grid letters by row and column.
- Uniqueness: coding items were checked against about 280 simple code rules (every forward or backward shift, reverse with any shift, alternating shifts, growing shifts, A↔Z mirror with or without reversing, separate vowel and consonant moves, sort with a shift, swapping the end letters or neighbouring pairs with a shift). Every rule that fits the example gives the key, and no rule turns the example into a distractor. Number codes were checked against A = 1, Z = 1, doubled, ±1 and ±2 versions, forwards and backwards. Ranking and ordering puzzles were solved by trying every possible order: each has exactly one order, and for every multi-clue puzzle each clue is needed (dropping any clue leaves more than one order). Row-total items were checked by trying every row length.
- Scope guard: direction sense, mirror and water images, clocks and calendars belong to Chapters 11 and 12, and pattern/analogy formats belong to Chapter 9, so none are used here. Ties in ranking are avoided, as the syllabus asks for Grade 4.
- Every SVG is self-contained (no external fonts, CSS, scripts or images), carries `role="img"` + `aria-label`, and each item also has an `alt` line that names every printed number. Code symbols are plain keyboard characters (@ # $ % & *) so they render in every font. Label text is 11–18 px in the viewBox; scale with `max-width: 100%; height: auto;`.
- olympiad_section values use the house tokens: `logical` = Logical Reasoning, `achievers` = Achievers. The easy and medium items are `logical` and the 5 hard items in each set are `achievers`.
- All keys were computed and asserted by `/workspace/scratch/gen_g4ch10.py` (figures in `/workspace/scratch/g4ch10_figs.py`, rules and solvers in `/workspace/scratch/g4ch10_logic.py`); `/workspace/scratch/verify_g4ch10.py` re-checks the saved file, reads every figure back from the SVG, recomputes each key, re-runs the uniqueness checks and runs the review rules R1–R6.
- Original content only: written from public topic headings; no past or sample paper items were used, and stems were checked for near-duplicates against the repo's Maths items and Chapters 5–9.
