# English near-duplicate stems: G1–G10 (2026-10-19)

Base: origin/main **181a447** (#57), with PATCH A (`/workspace/mindstrong/hints/hints-ruleout-2026-10-19.patch`) applied first. Apply order is **A then B**. This patch does not apply to bare 181a447, because it edits fix-layer lines that A changes. English content files have not changed since 4291140. The patch was built and checked on throwaway `git archive` copies in /tmp. Nothing in `/workspace/Mindstrong` or any worktree was changed.

## Result

- Scanned **1752 English items** as served: 1632 chapter-set items plus 120 English mock addendum items (LR / Achievers).
- **80 real near-duplicate groups**, with **108 later items rewritten**. All are NEW original items with the same id, skill, difficulty, grade pitch and answer letter. Each has 2 item-specific hints, an explanation that names the tempting wrong option, and 4 distinct options.
- No STEM-only fixes were needed. Every later item tested the same target as its keeper, so a stem reword would have left the duplicate in place.
- Kept item: the lowest grade, then file order. Fixed items per grade:

| Grade | Items fixed | Groups touching grade |
|---|---|---|
| G2 | 2 | 2 |
| G3 | 18 | 18 |
| G4 | 6 | 6 |
| G5 | 2 | 2 |
| G6 | 14 | 14 |
| G7 | 30 | 30 |
| G8 | 2 | 2 |
| G9 | 19 | 18 |
| G10 | 15 | 15 |
| **Total** | **108** | **80 groups** |

After the patch: `node scripts/audit-content.mjs` gives **0 finding(s), 0 warning(s)** (0 duplicate-stem, 0 hint leaks). The near-duplicate rescan gives **0 candidate pairs**. `qa.py` gives **0 FAIL / 0 WARN**. `tsc --noEmit` exits 0, and `node --test scripts/*.test.mjs` gives 13/13 pass.

- Round 4 (new rules on 181a447): every hint of the 108 items rules out at most ONE option by name and does not quote most of the answer. 32 second hints that named 2–3 wrong options were rewritten as skill nudges, e.g. g7-eng-words-a-q17: "Costly and pricey are twins of expensive; rare is about how often." became "Find the word for something costing very little, the opposite of expensive."

## Method (scanner `scripts/near-duplicate-english-stems.mjs`)

- Compares only the question line (passages are stripped). Uses strong normalisation: case, punctuation and quotes are removed, filler words are dropped, and the skill words are unified (synonym / means the same / closest in meaning → one token; antonym / opposite → one token).
- **R1 same-norm:** the normalised stems are equal (with a same-content guard).
- **R2 same-target:** the same target word is tested for the same skill (synonym, antonym, meaning, homophone, plural, past tense, idiom, prefix/suffix, root), or the fill-in sentence is the same.
- **R4 same-answer:** the same correct answer, no passage, and stem-token Jaccard ≥ 0.5 or the same quoted target.
- **R3 similar:** stem+options Jaccard ≥ 0.8 or LCS ratio ≥ 0.9.
- On base: 111 candidate pairs. Each was reviewed by hand, giving 80 real groups and 16 surviving false-positive pairs (see below).
- Re-target check: the first drafts of 21 new items reused target words already tested elsewhere (for example shout, laugh, tall, ascend, spill the beans, agenda). The rescan caught them, and all 21 were re-targeted. Every new target was then checked against every English stem in the repo: chapter sets, mocks, and reverse pairs such as full/empty.

## Groups, decisions and old → new stems

Each row shows: Kept (unchanged) | Fixed id | Old stem → **new stem** (new answer, same letter).

| # | Group | Kept | Fixed id | Old stem | New stem | New answer |
|---|---|---|---|---|---|---|
| 1 | article an + apple | `g1-eng-grammar-a-q02` | `g2-eng-grammar-a-q12` | This is ___ apple. | **This is ___ igloo.** | an (d) |
| 2 | article an + umbrella | `g1-eng-grammar-a-q10` | `g2-eng-grammar-b-q11` | This is ___ umbrella. | **This is ___ owl.** | an (c) |
| 2 | article an + umbrella | `g1-eng-grammar-a-q10` | `g3-eng-grammar-b-q13` | Choose the correct article: ____ umbrella is red. | **Choose the correct article: ____ eagle flew over the hill.** | An (a) |
| 2 | article an + umbrella | `g1-eng-grammar-a-q10` | `g7-eng-grammar-a-q06` | Correct article: She bought ____ umbrella. | **Correct article: She waited for ____ hour at the station.** | an (b) |
| 3 | are: The boys ___ playing | `g1-eng-grammar-a-q03` | `g6-eng-gram-a-q02` | Choose the correct verb: The boys ____ playing cricket. | **Choose the correct verb: The puppies ____ sleeping in the basket.** | are (d) |
| 4 | am: I ___ a student | `g1-eng-grammar-a-q05` | `g3-eng-grammar-b-q08` | I ____ a student. | **I ____ eight years old.** | am (d) |
| 5 | noun: school (same options) | `g1-eng-grammar-a-q06` | `g3-eng-grammar-a-q01` | Which word is a NOUN (a naming word)? | **Which word in this sentence is a NOUN? "My sister paints beautiful pictures."** | sister (a) |
| 6 | verb: jump | `g1-eng-grammar-a-q07` | `g3-eng-grammar-a-q05` | Which word is a VERB (an action word)? | **Which word is a VERB (an action word)?** | clap (a) |
| 6 | verb: jump | `g1-eng-grammar-a-q07` | `g4-eng-ch02-a-q15` | Which word is a VERB (a doing word)? | **Which word is a VERB (a doing word)?** | swim (d) |
| 7 | antonym of big | `g1-eng-grammar-a-q16` | `g3-eng-antonyms-a-q02` | Which word means the OPPOSITE of "big"? | **Which word means the OPPOSITE of "heavy"?** | light (a) |
| 8 | antonym of happy | `g1-eng-grammar-b-q16` | `g3-eng-antonyms-a-q01` | Which word means the OPPOSITE of "happy"? | **Which word means the OPPOSITE of "top"?** | bottom (a) |
| 9 | goes: She ___ to school | `g2-eng-grammar-a-q01` | `g3-eng-grammar-b-q07` | She ____ to school by bus. | **Ravi ____ his bicycle to school.** | rides (c) |
| 9 | goes: She ___ to school | `g2-eng-grammar-a-q01` | `g6-eng-gram-a-q01` | Choose the correct verb: She ____ to school by bus. | **Choose the correct verb: My grandmother ____ the plants every evening.** | waters (a) |
| 9 | goes: She ___ to school | `g2-eng-grammar-a-q01` | `g7-eng-grammar-a-q01` | Choose the correct verb: She ____ to school every day. | **Choose the correct verb: The train to Pune ____ at 6 a.m. every day.** | leaves (a) |
| 10 | are: They ___ playing in the park | `g2-eng-grammar-a-q02` | `g3-eng-grammar-a-q08` | They ____ playing in the park. | **My friends ____ at the gate.** | are (d) |
| 11 | went: ___ to the market yesterday | `g2-eng-grammar-a-q08` | `g3-eng-grammar-a-q17` | Yesterday, Riya ____ to the market. | **Last night, Dad ____ a story to us.** | told (a) |
| 11 | went: ___ to the market yesterday | `g2-eng-grammar-a-q08` | `g10-eng-ch02-a-q01` | Choose the correct form: She ____ to the market yesterday. | **Choose the correct form: The bell ____ before we reached the gate.** | rang (c) |
| 12 | antonym of early | `g2-eng-grammar-b-q13` | `g3-eng-antonyms-a-q06` | Which word means the OPPOSITE of "early"? | **Which word means the OPPOSITE of "loud"?** | quiet (a) |
| 13 | synonym of happy | `g2-eng-words-a-q01` | `g3-eng-synonyms-a-q01` | Which word means almost the SAME as "happy"? | **Which word means almost the SAME as "rush"?** | hurry (a) |
| 14 | antonym of hot | `g2-eng-words-a-q02` | `g3-eng-antonyms-a-q03` | The chai was too **hot**. Which word means the opposite of "hot"? | **The baby is **asleep** in the cradle. Which word means the opposite of "asleep"?** | awake (d) |
| 15 | prefix un- = not | `g2-eng-words-a-q08` | `g6-eng-vocab-a-q07` | Prefix un- in unkind means — | **Prefix dis- in disagree means —** | not (c) |
| 15 | prefix un- = not | `g2-eng-words-a-q08` | `g7-eng-words-a-q09` | Prefix in “unhappy” means… | **Prefix in “impossible” means…** | not (a) |
| 16 | synonym of begin | `g2-eng-words-a-q09` | `g3-eng-synonyms-a-q04` | Which word means almost the SAME as "begin"? | **Which word means almost the SAME as "shut"?** | close (d) |
| 17 | antonym of full | `g2-eng-words-a-q10` | `g3-eng-antonyms-a-q05` | Riya's water bottle was **full**. Which word means the opposite of "full"? | **Meena's room was **messy**. Which word means the opposite of "messy"?** | tidy (b) |
| 18 | one word: library | `g2-eng-words-a-q11` | `g5-eng-ch03-a-q19` | Choose ONE word for: "a place where books are kept for people to read or borrow." | **Choose ONE word for: "a shop where medicines are sold."** | pharmacy (a) |
| 19 | plural of child | `g2-eng-words-a-q14` | `g3-eng-grammar-a-q04` | One child, many ____. | **One man, many ____.** | men (d) |
| 19 | plural of child | `g2-eng-words-a-q14` | `g4-eng-ch02-a-q09` | Look at the picture. Fill in the blank. / "One child, three ___." | **Look at the picture. Fill in the blank. / "One foot, two ___."** | feet (d) |
| 20 | homophone of pair | `g2-eng-words-a-q16` | `g6-eng-vocab-a-q12` | Homophone of pair is — | **Homophone of sail is —** | sale (d) |
| 21 | antonym of open | `g2-eng-words-b-q02` | `g3-eng-antonyms-a-q08` | Which word means the OPPOSITE of "open"? | **Which word means the OPPOSITE of "sell"?** | buy (a) |
| 22 | prefix re- = again | `g2-eng-words-b-q08` | `g6-eng-vocab-b-q07` | Prefix re- in rewrite means — | **Prefix pre- in preview means —** | before (c) |
| 23 | synonym of end | `g2-eng-words-b-q09` | `g3-eng-synonyms-a-q10` | Which word means almost the SAME as "end"? | **Which word means almost the SAME as "enjoy"?** | like (b) |
| 24 | antonym of near | `g2-eng-words-b-q10` | `g3-eng-antonyms-a-q16` | Which word means the OPPOSITE of "near"? | **Which word means the OPPOSITE of "lost"?** | found (a) |
| 25 | plural of mouse | `g2-eng-words-b-q14` | `g4-eng-ch02-b-q09` | Look at the picture. Fill in the blank. / "One mouse, three ___." | **Look at the picture. Fill in the blank. / "One tooth, many ___."** | teeth (b) |
| 26 | homophone of sea | `g2-eng-words-b-q16` | `g6-eng-vocab-b-q12` | Homophone of sea is — | **Homophone of knight is —** | night (d) |
| 27 | synonym of quick | `g3-eng-synonyms-a-q03` | `g4-eng-ch03-a-q15` | Which word means almost the SAME as "quick"? | **Which word means almost the SAME as "shiny"?** | bright (c) |
| 28 | synonym of brave | `g3-eng-synonyms-a-q05` | `g7-eng-words-a-q01` | Synonym of “brave”? | **Synonym of “wealthy”?** | rich (a) |
| 29 | antonym of noisy | `g3-eng-antonyms-a-q19` | `g6-eng-vocab-b-q02` | Antonym of noisy is — | **Antonym of shallow is —** | deep (b) |
| 30 | antonym of brave | `g3-eng-antonyms-a-q22` | `g6-eng-vocab-a-q02` | Antonym of brave is — | **Antonym of guilty is —** | innocent (b) |
| 31 | antonym of polite | `g3-eng-antonyms-b-q14` | `g6-eng-vocab-b-q14` | Antonym of polite is — | **Antonym of praise is —** | criticise (b) |
| 31 | antonym of polite | `g3-eng-antonyms-b-q14` | `g7-eng-words-b-q22` | Antonym of “polite”? | **Antonym of “voluntary”?** | compulsory (b) |
| 32 | rises: the sun ___ | `g3-eng-grammar-a-q18` | `g4-eng-ch02-b-q18` | Choose the correct verb. / "The sun ___ every morning." | **Choose the correct verb. / "The moon ___ around the Earth."** | moves (d) |
| 32 | rises: the sun ___ | `g3-eng-grammar-a-q18` | `g5-eng-ch02-b-q17` | Choose the correct verb. / "The sun ___ in the east." | **Choose the correct verb. / "Water ___ at 100 °C."** | boils (c) |
| 33 | plural: box | `g3-eng-grammar-b-q04` | `g4-eng-ch02-a-q10` | Look at the picture. Fill in the blank. / "One box, two ___." | **Look at the picture. Fill in the blank. / "One glass, three ___."** | glasses (a) |
| 34 | synonym of tiny | `g4-eng-ch03-b-q14` | `g6-eng-vocab-b-q03` | Synonym of tiny is — | **Synonym of silent is —** | quiet (c) |
| 35 | antonym of ancient | `g5-eng-ch01-b-q22` | `g9-eng-ch03-b-q01` | Antonym of “ancient”… | **Antonym of “reckless”…** | cautious (a) |
| 36 | abstract noun: honesty | `g5-eng-ch02-a-q10` | `g6-eng-gram-b-q20` | Identify the abstract noun: Honesty makes shopping a pleasure. | **Identify the abstract noun: Her kindness won every heart.** | kindness (d) |
| 37 | superlative: Mount Everest highest | `g5-eng-ch02-a-q13` | `g6-eng-gram-a-q15` | Choose the correct superlative: Mount Everest is the ____ peak. | **Choose the correct superlative: The cheetah is the ____ land animal.** | fastest (c) |
| 37 | superlative: Mount Everest highest | `g5-eng-ch02-a-q13` | `g7-eng-grammar-b-q20` | Correct degree: Mount Everest is the ____ peak. | **Correct degree: Of all the students, Asha is the ____.** | tallest (d) |
| 38 | has: Each of the students ___ | `g5-eng-ch02-a-q19` | `g7-eng-grammar-a-q18` | Correct: Each of the students ____ a notebook. | **Correct: Every one of the players ____ a jersey number.** | has (b) |
| 39 | plural: knife | `g5-eng-ch02-b-q11` | `g7-eng-grammar-a-q23` | Correct plural: The ____ are sharp. | **Correct plural: The ____ fell from the trees in autumn.** | leaves (c) |
| 40 | antonym of generous | `g5-eng-ch03-a-q12` | `g6-eng-vocab-a-q10` | Antonym of generous is — | **Antonym of fragile is —** | sturdy (b) |
| 40 | antonym of generous | `g5-eng-ch03-a-q12` | `g7-eng-words-a-q12` | Antonym of “generous”? | **Antonym of “visible”?** | invisible (d) |
| 41 | idiom: a piece of cake | `g5-eng-ch03-a-q17` | `g6-eng-vocab-b-q20` | The idiom “a piece of cake” means — | **The idiom “hit the books” means —** | study hard (d) |
| 42 | closing: Yours faithfully | `g5-eng-ch05-a-q24` | `g9-eng-ch03-b-q07` | Choose formal closing when the reader’s name is unknown: | **Choose the closing for a formal letter that begins “Dear Ms Iyer,” (the reader is named):** | Yours sincerely (c) |
| 42 | closing: Yours faithfully | `g5-eng-ch05-a-q24` | `g10-eng-ch03-a-q03` | Closing a formal letter to an unknown official: — | **In a formal letter, where does the subject line go?** | after the receiver's address, before the salutation (a) |
| 43 | past: Yesterday ... watched | `g5-eng-ch01-b-q18` | `g7-eng-grammar-a-q07` | Choose the correct tense: Yesterday we ____ a film. | **Choose the correct tense: Last Sunday we ____ our grandparents.** | visited (c) |
| 44 | synonym of ancient | `g6-eng-vocab-a-q01` | `g7-eng-words-a-q06` | Synonym of “ancient”? | **Synonym of “abundant”?** | more than enough (b) |
| 45 | synonym of assist | `g6-eng-vocab-a-q03` | `g7-eng-words-a-q11` | Synonym of “assist”? | **Synonym of “gather”?** | collect (c) |
| 46 | antonym of scarce | `g6-eng-vocab-a-q04` | `g7-eng-words-a-q02` | Antonym of “scarce”? | **Antonym of “vacant”?** | occupied (b) |
| 47 | article the + Himalayas | `g6-eng-gram-a-q06` | `g7-eng-grammar-b-q13` | Correct article usage: ____ Himalayas are majestic. | **Correct article usage: ____ Ganga flows through Varanasi.** | The (a) |
| 47 | article the + Himalayas | `g6-eng-gram-a-q06` | `g10-eng-ch02-b-q06` | Article: ____ Himalayas are in Asia. | **Article: ____ Indian Ocean lies to the south of India.** | The (c) |
| 48 | is: Neither of the answers ___ correct | `g6-eng-gram-a-q10` | `g7-eng-grammar-a-q11` | Correct form: Neither of the answers ____ correct. | **Correct form: One of my pens ____ missing.** | is (c) |
| 48 | is: Neither of the answers ___ correct | `g6-eng-gram-a-q10` | `g10-eng-ch02-a-q06` | Fill in: Neither of the answers ____ correct. | **Fill in: Either of these routes ____ fine for the trip.** | is (a) |
| 49 | reported: I am -> was | `g6-eng-gram-a-q16` | `g7-eng-grammar-b-q09` | Correct reported speech: He said, “I am tired.” → He said that he ____ tired. | **Correct reported speech: Riya said, “I like mangoes.” → Riya said that she ____ mangoes.** | liked (a) |
| 49 | reported: I am -> was | `g6-eng-gram-a-q16` | `g9-eng-ch02-a-q04` | Reported speech: He said, “I am tired.” → He said that he ____ tired. | **Reported speech: Meena said, “I can solve this puzzle.” → Meena said that she ____ solve that puzzle.** | could (d) |
| 49 | reported: I am -> was | `g6-eng-gram-a-q16` | `g10-eng-ch02-a-q04` | Reported speech: She said, "I am tired." → She said that she ____ tired. | **Reported speech: She said, "I have finished my work." → She said that she ____ her work.** | had finished (d) |
| 50 | because: stayed home, it was raining | `g6-eng-gram-a-q17` | `g7-eng-grammar-a-q10` | Choose the conjunction: I stayed indoors ____ it was raining. | **Choose the conjunction: Kabir wore a raincoat ____ the sky was cloudy.** | because (b) |
| 51 | is: The news ___ | `g6-eng-gram-a-q21` | `g7-eng-grammar-a-q16` | Choose the right verb: The news ____ surprising. | **Choose the right verb: Measles ____ a serious illness.** | is (d) |
| 51 | is: The news ___ | `g6-eng-gram-a-q21` | `g9-eng-ch02-a-q08` | Choose the correct verb: The news ____ surprising. | **Choose the correct verb: The furniture in this room ____ new.** | is (d) |
| 51 | is: The news ___ | `g6-eng-gram-a-q21` | `g10-eng-ch02-a-q16` | Concord: The news ____ good today. | **Concord: The number of applicants ____ rising every year.** | is (d) |
| 52 | interjection: Wow | `g6-eng-gram-a-q22` | `g7-eng-grammar-a-q17` | Identify the interjection: Wow, that sparkler is bright! | **Identify the interjection: Oops, I dropped my lunchbox!** | Oops (a) |
| 53 | antonym of expand | `g6-eng-vocab-a-q14` | `g7-eng-words-a-q07` | Antonym of “expand”? | **Antonym of “import”?** | export (c) |
| 54 | suffix -ful = full of | `g6-eng-vocab-a-q08` | `g7-eng-words-a-q10` | Suffix in “hopeful” suggests… | **Suffix in “childhood” suggests…** | state or time of being (b) |
| 55 | idiom: break the ice | `g6-eng-vocab-a-q20` | `g9-eng-ch03-a-q04` | Idiom: “break the ice” means… | **Idiom: “the ball is in your court” means…** | it is your turn to decide or act (d) |
| 56 | moral of the story | `g6-eng-vocab-a-q21` | `g7-eng-words-a-q20` | Choose the best word: The ____ of the story made us smile. | **Choose the best word: The team’s ____ was high after the win.** | morale (d) |
| 57 | synonym of rapid | `g6-eng-vocab-b-q01` | `g7-eng-words-b-q20` | Synonym of “rapid”? | **Synonym of “swift”?** | speedy (d) |
| 58 | antonym of victory | `g6-eng-vocab-b-q04` | `g7-eng-words-b-q02` | Antonym of “victory”? | **Antonym of “maximum”?** | minimum (b) |
| 58 | antonym of victory | `g6-eng-vocab-b-q04` | `g9-eng-ch03-b-q16` | Antonym of “scarce” already practised; antonym of “victory”… | **Antonym of “hostile”…** | welcoming (d) |
| 59 | suffix -less = without | `g6-eng-vocab-b-q08` | `g7-eng-words-b-q21` | Suffix “-less” in “fearless” means… | **Suffix “-able” in “readable” means…** | can be done (a) |
| 60 | antonym of include | `g6-eng-vocab-b-q10` | `g7-eng-words-a-q23` | Antonym of “include”? | **Antonym of “accept”?** | reject (c) |
| 61 | antonym of temporary | `g6-eng-vocab-b-q18` | `g7-eng-words-a-q17` | Antonym of “temporary”? | **Antonym of “expensive”?** | cheap (a) |
| 62 | much: milk | `g6-eng-gram-b-q15` | `g9-eng-ch02-a-q19` | Choose the right determiner: ____ of the milk was spilled. | **Choose the right determiner: We don’t have ____ time before the train leaves.** | much (c) |
| 63 | relative who: The girl ___ | `g6-eng-gram-b-q17` | `g7-eng-grammar-a-q20` | Choose correct relative pronoun: The girl ____ won the race is my cousin. | **Choose correct relative pronoun: The doctor ____ treated my grandfather lives nearby.** | who (d) |
| 63 | relative who: The girl ___ | `g6-eng-gram-b-q17` | `g10-eng-ch02-a-q10` | Relative pronoun: The girl ____ won the prize is my cousin. | **Relative pronoun: The man ____ I met at the conference is a scientist.** | whom (b) |
| 64 | has: The committee ___ decided | `g6-eng-gram-b-q19` | `g7-eng-grammar-b-q06` | Correct: The committee ____ decided. | **Correct: The jury ____ given its verdict.** | has (b) |
| 65 | first conditional: If it rains, we ___ indoors | `g6-eng-gram-b-q21` | `g7-eng-grammar-a-q21` | Fill in: If it rains, we ____ indoors. | **Fill in: If the bus is late, we ____ a taxi.** | will take (a) |
| 65 | first conditional: If it rains, we ___ indoors | `g6-eng-gram-b-q21` | `g10-eng-ch02-a-q11` | Choose: If it rains, we ____ indoors. | **Choose: Unless you hurry, you ____ the train.** | will miss (d) |
| 66 | are: Neither Ravi nor his friends ___ | `g7-eng-grammar-b-q01` | `g9-eng-ch02-a-q16` | Fill: Neither Ravi nor his friends ____ ready. | **Fill: Not only the captain but also the players ____ tired.** | are (d) |
| 67 | must: You ___ wear a helmet | `g7-eng-grammar-b-q07` | `g8-eng-ch02-a-q17` | Choose the most suitable modal. / "You ___ wear a helmet while riding a two-wheeler; it is the law." | **Choose the most suitable modal. / "Visitors ___ not touch the paintings; it is strictly forbidden."** | must (c) |
| 67 | must: You ___ wear a helmet | `g7-eng-grammar-b-q07` | `g9-eng-ch02-a-q07` | Modal: You ____ wear a helmet on this site. (strong obligation) | **Modal: You ____ be exhausted after such a long journey. (logical certainty)** | must (c) |
| 67 | must: You ___ wear a helmet | `g7-eng-grammar-b-q07` | `g10-eng-ch02-a-q08` | Choose the correct modal: You ____ wear a helmet; it's the rule. | **Choose the correct modal: You ____ not have brought gifts; we said it was not necessary.** | need (c) |
| 68 | me: Between you and ___ | `g7-eng-grammar-b-q11` | `g9-eng-ch02-b-q16` | Choose correct: Between you and ____, this is secret. | **Choose correct: The teacher gave the prize to Asha and ____.** | me (d) |
| 69 | tag: You are ..., aren't you | `g7-eng-grammar-b-q14` | `g9-eng-ch02-b-q05` | Choose the correct question tag: You’re ready, ____? | **Choose the correct question tag: Let’s go for a walk, ____?** | shall we (a) |
| 69 | tag: You are ..., aren't you | `g7-eng-grammar-b-q14` | `g10-eng-ch02-a-q19` | Question tag: You are coming, ____? | **Question tag: Nobody called while I was out, ____?** | did they (b) |
| 70 | good at | `g7-eng-grammar-b-q21` | `g9-eng-ch02-a-q24` | Choose correct preposition: She is good ____ mathematics. | **Choose correct preposition: She is afraid ____ spiders.** | of (d) |
| 70 | good at | `g7-eng-grammar-b-q21` | `g10-eng-ch02-a-q14` | Preposition: She is good ____ mathematics. | **Preposition: The team is capable ____ winning the cup.** | of (a) |
| 71 | Hardly ... when | `g7-eng-grammar-b-q23` | `g9-eng-ch02-b-q07` | Choose: Hardly had we entered ____ it started raining. | **Choose: Not until the rain stopped ____ we leave the shelter.** | did (c) |
| 71 | Hardly ... when | `g7-eng-grammar-b-q23` | `g10-eng-ch02-b-q15` | Choose: Hardly had he entered ____ the phone rang. | **Choose: Seldom ____ such a beautiful sunset.** | have I seen (c) |
| 72 | idiom: once in a blue moon | `g7-eng-words-a-q15` | `g8-eng-ch03-a-q23` | "My cousin from Canada visits us once in a blue moon." What does the idiom mean? | **"Rohan was all ears when Grandpa began the story." What does the idiom mean?** | Listening eagerly (d) |
| 73 | meaning/synonym of reluctant | `g7-eng-words-a-q18` | `g9-eng-ch02-b-q13` | Choose synonym of the underlined idea: He was reluctant to speak. He was… | **Choose synonym of the underlined idea: She was hesitant to raise her hand. She was…** | unsure (a) |
| 73 | meaning/synonym of reluctant | `g7-eng-words-a-q18` | `g9-eng-ch03-b-q08` | Synonym of “reluctant”… | **Synonym of “candid”…** | frank (d) |
| 74 | synonym of brief | `g7-eng-words-b-q15` | `g9-eng-ch03-a-q01` | Choose the synonym of “brief”. | **Choose the synonym of “frugal”.** | thrifty (a) |
| 75 | future perfect: By next ..., will have completed | `g8-eng-ch02-a-q12` | `g10-eng-ch02-a-q18` | Choose: By next year, they ____ the bridge. | **Choose: By the time we reach the stadium, the match ____.** | will have started (a) |
| 76 | one word: democracy | `g8-eng-ch03-a-q16` | `g9-eng-ch03-a-q17` | One-word: Government by the people… | **One-word: A person who cannot read or write…** | illiterate (a) |
| 77 | one word: illegible | `g8-eng-ch03-a-q17` | `g9-eng-ch03-b-q06` | One-word: Incapable of being read… | **One-word: A detailed plan of a journey, listing places and dates…** | itinerary (b) |
| 78 | principal (head of school) | `g8-eng-ch03-a-q19` | `g9-eng-ch03-a-q03` | Choose the correct word: The ____ of the school spoke to parents. | **Choose the correct word: After dinner, we had ice cream for ____.** | dessert (c) |
| 79 | article an + honest | `g9-eng-ch02-a-q05` | `g10-eng-ch02-a-q12` | Article: She is ____ honest officer. | **Article: She bought ____ one-way ticket.** | a (d) |
| 80 | clause type: that she is/was right | `g9-eng-ch02-a-q15` | `g10-eng-ch02-a-q07` | Identify the clause type: "I know that she is right." — "that she is right" is a — | **Identify the clause type: "The house where I grew up has been sold." — "where I grew up" is a —** | adjective clause (c) |

G4 pictorial items got new SVG figures in the same two-panel house style (400×260; `role="img"`, `aria-label`, `<title>`, `<desc>`, `alt`):
- `g4-eng-ch02-a-q09`: footprints.
- `g4-eng-ch02-b-q09`: one tooth vs a row of teeth.
- `g4-eng-ch02-a-q10`: one glass vs three.

`g4-eng-ch02-b-q18` (now a general-truth item: the moon/Earth) had a pictorial overlay table in `lib/prep/pictorial/g4-overlays.ts` that showed *went/goes* with *Past* highlighted. It now shows a subject → simple-present pattern (they/go, it/goes). It does not show the answer verb.

## Reviewed false positives (allow-list `scripts/audit-baselines/near-duplicate-english-allow.json`)

| Pair | Why it is not a duplicate |
|---|---|
| `g1-eng-letters-a-q04|g1-eng-letters-a-q07` | different questions (which is a letter / capital of a) |
| `g1-eng-letters-a-q05|g1-eng-letters-b-q04` | count letters: SUN vs DOG (different words) |
| `g1-eng-letters-a-q05|g1-eng-letters-b-q12` | count letters: SUN vs YES (different words) |
| `g1-eng-letters-b-q04|g1-eng-letters-b-q12` | count letters: DOG vs YES (different words) |
| `g1-eng-grammar-a-q02|g1-eng-grammar-a-q10` | an + apple vs an + umbrella (different nouns) |
| `g1-eng-grammar-a-q02|g1-eng-grammar-b-q02` | an + apple vs an + egg (different nouns) |
| `g1-eng-grammar-a-q02|g1-eng-grammar-b-q10` | an + apple vs an + orange (different nouns) |
| `g1-eng-grammar-a-q10|g1-eng-grammar-b-q02` | an + umbrella vs an + egg (different nouns) |
| `g1-eng-grammar-a-q10|g1-eng-grammar-b-q10` | an + umbrella vs an + orange (different nouns) |
| `g1-eng-grammar-b-q02|g1-eng-grammar-b-q10` | an + egg vs an + orange (different nouns) |
| `g1-eng-grammar-a-q05|g1-eng-grammar-b-q05` | I am a student / I am hungry (different sentences) |
| `g1-eng-grammar-a-q15|g1-eng-grammar-b-q15` | a + ball vs a + dog (different nouns) |
| `g2-eng-words-a-q01|g6-eng-vocab-a-q16` | pick-the-synonym vs odd-one-out (different task) |
| `g3-eng-synonyms-a-q02|g6-eng-vocab-b-q16` | pick-the-synonym vs odd-one-out (different task) |
| `g3-eng-synonyms-a-q05|g7-eng-words-b-q05` | pick-the-synonym vs odd-one-out (different task) |
| `g3-eng-antonyms-a-q04|g3-eng-antonyms-b-q03` | opposite of up vs opposite of above (different targets) |

Other reviewed rejects (not flagged after the fix, listed for the record):
- g1-eng-letters-a-q04 ~ g1-eng-letters-a-q07: different questions (which is a letter / capital of a); both single-letter answers
- g1-eng-letters-a-q05 ~ b-q04 ~ b-q12: same instruction (count letters), different words SUN/DOG/YES
- g1-eng-grammar-a-q02/b-q02/a-q10/b-q10 (an + apple/egg/umbrella/orange): same instruction, different target words; only repeated targets (apple, umbrella) grouped
- g1-eng-grammar-a-q05 ~ b-q05: I ___ a student / I ___ hungry: same rule, different sentences in one set
- g1-eng-grammar-a-q15 ~ b-q15: a + ball / a + dog: different targets (engineering skip list)
- g2-eng-words-a-q01 / g3-eng-synonyms-a-q01 ~ g6-eng-vocab-a-q16: odd-one-out (G6) is a different task from pick-the-synonym
- g3-eng-synonyms-a-q02 ~ g6-eng-vocab-b-q16: pick-the-synonym vs odd-one-out
- g3-eng-synonyms-a-q05 / g7-eng-words-a-q01 ~ g7-eng-words-b-q05: odd-one-out (not a synonym of brave) is a different task
- g3-eng-antonyms-a-q04 ~ b-q03: opposite of up vs opposite of above: different targets

## Hints

- The 108 rewritten items carry their 2 hints in the content `hints` field and in the English fix layer (`lib/prep/hints/fixes/english-g*.ts`), so the fix wins as before.
- Old overlay entries for these ids in `lib/prep/hints/g*-english.ts` were rewritten to the same new hints, so nothing stale is left.
- Writer source: `/workspace/mindstrong/hints/_work/src/p3_dedupe.py` (`SUPERSEDES = True`). It replaces the pass-1/pass-2 hints for these ids.
- `/workspace/mindstrong/hints/english-g*.ts` was regenerated. Those files equal main's fix layer plus the pass-3 entries.

## QA output (clean 181a447 + A + B)

```
$ node scripts/audit-content.mjs
hint checks: 0 bare-letter, 0 letter-reference, 0 hint-is-answer, 0 hint-contains-answer (0 known in scripts/audit-baselines/hint-contains-answer.json, 0 items)
0 finding(s), 0 warning(s)

$ node scripts/near-duplicate-english-stems.mjs --strict
1752 English items scanned, 0 near-duplicate candidate pair(s)   (exit 0; before the patch: 111 pairs)

hint-rules-out: 50 item(s), 50 known (all Maths/Science; 0 English)
hint-partial-quote: 15 item(s), 15 known (all Maths/Science; 0 English)

$ ITEMS=<served dump> python3 qa.py --verbose --from-ts lib/prep/hints/fixes
new items: 965  hints: 1915
FAIL items: 0  WARN items: 0

$ npx tsc --noEmit -p .   -> exit 0
$ npm test   -> 57 pass, 0 fail
$ node scripts/check-boilerplate-hints.mjs   -> Remaining boilerplate after overlay: 0
```

## Files

- `english-near-dupes.patch`: `git apply` after PATCH A, on origin/main 181a447. It covers 39 files:
  - 18 English content files;
  - English fix layer for G2–G10;
  - 9 English hint overlays;
  - `g4-overlays.ts`;
  - new `scripts/near-duplicate-english-stems.mjs`;
  - new `scripts/audit-baselines/near-duplicate-english-allow.json`.
- `near-duplicate-english-stems.mjs` and `near-duplicate-english-allow.json`: the scanner and its allow-list, also included in the patch.
- `_work/`: `groups.py` (groups and false positives), `new_items.py` (all 108 items), `apply.py`, `svgs.py`, `rebuild.sh` (rebuilds everything plus QA), `wordcheck.py`, `rawdump.mjs`, `served-check.mjs`, `raw-base-6f1e8e0.json`.

## Engineering to do

1. On main 181a447: `git apply hints-ruleout-2026-10-19.patch`, then `git apply english-near-dupes.patch`. Run the audit after each; expect 0 findings both times.
2. Wire the scanner as a **warning**, like the Science one. Call `node scripts/near-duplicate-english-stems.mjs` from CI or from `audit-content.mjs`. Report-only by default; use `--strict` to fail. Supports `MINDSTRONG_ROOT`. New look-alike pairs that are not real duplicates go in the allow-list with a reason.
3. No baseline edits needed: the hint-contains-answer baseline is already 0 on main and stays 0.
4. Optional: add a line to `docs/quality/duplicates-2026-10-19.md` pointing to this report.

## Integration review (2026-10-19)

- All 108 keys re-solved by hand: no key changes needed. Ids, answer letters and difficulty unchanged.
- G4 pictures checked against stems: g4-eng-ch02-a-q09 (1 vs 2 footprints), a-q10 (1 vs 3 glasses), b-q09 (1 tooth vs a row of teeth) all match; g4-eng-ch02-b-q18's table (they/go, it/goes, "it" highlighted) fits "The moon ___".
- Cross-grade collisions fixed at integration:
  - g7-eng-grammar-b-q09 repeated the G5 mock sentence of g5-eng-lrach-a-q12 (`Mira said, "I like mangoes."` → liked). Now `Kabir said, "I enjoy chess."` → enjoyed.
  - g9-eng-ch03-b-q07 repeated g8-eng-ch05-b-q20's `Dear Ms Iyer` → Yours sincerely. Now `Dear Mr Mehta`.
- `scripts/audit-content.mjs` now runs both near-duplicate scanners (Science and English): unallowed pairs are warnings, and `--strict` fails on any warning.
