import type { ChapterDef, PrepQuestion } from "../types";

/** Fractions - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-fractions-a-q01",
    prompt: "A paratha is cut into 4 equal pieces. What fraction of the paratha is each piece?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/3" },
      { id: "c", text: "4/1" },
      { id: "d", text: "1/4" }
    ],
    answerId: "d",
    explanation: "4 equal pieces means each piece is one quarter, written 1/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q02",
    prompt: "In the fraction 3/4, what is the denominator?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "7" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "The denominator is the bottom number; it tells us the whole has 4 equal parts.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q03",
    prompt: "Which picture shows 1/2 shaded?",
    options: [
      { id: "a", text: "A circle cut into 2 equal parts with 1 part shaded" },
      { id: "b", text: "A circle cut into 2 unequal parts with the smaller part shaded" },
      { id: "c", text: "A square cut into 4 equal parts with 1 part shaded" },
      { id: "d", text: "A circle cut into 3 equal parts with 1 part shaded" }
    ],
    answerId: "a",
    explanation: "A half needs 2 EQUAL parts with 1 of them shaded.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q04",
    prompt: "A cake is cut into 3 equal pieces and Ishaan eats 1 piece. What fraction of the cake did he eat?",
    options: [
      { id: "a", text: "3/1" },
      { id: "b", text: "1/2" },
      { id: "c", text: "1/3" },
      { id: "d", text: "2/3" }
    ],
    answerId: "c",
    explanation: "He ate 1 out of 3 equal pieces, which is 1/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q05",
    prompt: "What is 1/2 of 12?",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "Share 12 into 2 equal groups: each group has 12 \u00f7 2 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q06",
    prompt: "Which of these is a unit fraction?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "2/5" },
      { id: "c", text: "5/1" },
      { id: "d", text: "3/4" }
    ],
    answerId: "a",
    explanation: "A unit fraction has 1 as its numerator, like 1/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q07",
    prompt: "Which is bigger: 1/2 or 1/4 of the same roti?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "Both are the same" },
      { id: "c", text: "We cannot tell" },
      { id: "d", text: "1/2" }
    ],
    answerId: "d",
    explanation: "Cutting into 2 parts gives bigger pieces than cutting into 4 parts.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q08",
    prompt: "A square is cut into 4 equal parts and 3 parts are coloured. What fraction is coloured?",
    options: [
      { id: "a", text: "4/3" },
      { id: "b", text: "3/4" },
      { id: "c", text: "1/4" },
      { id: "d", text: "3/7" }
    ],
    answerId: "b",
    explanation: "3 out of 4 equal parts are coloured, which is 3/4 (three-quarters).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q09",
    prompt: "What is 1/4 of 20?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "10" },
      { id: "c", text: "16" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Share 20 into 4 equal groups: each group has 20 \u00f7 4 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q10",
    prompt: "How many halves make one whole?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "1" },
      { id: "c", text: "4" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "Two halves, 1/2 + 1/2, make one whole.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q11",
    prompt: "Which list goes from greatest to smallest?",
    options: [
      { id: "a", text: "1/4, 1/3, 1/2" },
      { id: "b", text: "1/3, 1/2, 1/4" },
      { id: "c", text: "1/2, 1/3, 1/4" },
      { id: "d", text: "1/2, 1/4, 1/3" }
    ],
    answerId: "c",
    explanation: "For unit fractions, more parts means smaller pieces, so 1/2 > 1/3 > 1/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q12",
    prompt: "Which fraction is the same as 1/2?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "2/4" },
      { id: "c", text: "2/3" },
      { id: "d", text: "4/2" }
    ],
    answerId: "b",
    explanation: "2 quarters cover the same space as 1 half, so 2/4 = 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q13",
    prompt: "What is 3/4 of 16?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "13" },
      { id: "d", text: "12" }
    ],
    answerId: "d",
    explanation: "1/4 of 16 is 4, so 3/4 of 16 is 3 \u00d7 4 = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q14",
    prompt: "There are 30 children in a class. 1/3 of them like kabaddi the most. How many children like kabaddi the most?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "3" },
      { id: "c", text: "15" },
      { id: "d", text: "20" }
    ],
    answerId: "a",
    explanation: "1/3 of 30 is 30 \u00f7 3 = 10 children.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q15",
    prompt: "A roti is cut into 4 equal parts. Pooja eats 1 part. What fraction of the roti is left?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "3/4" },
      { id: "c", text: "4/3" },
      { id: "d", text: "1/3" }
    ],
    answerId: "b",
    explanation: "3 of the 4 equal parts are left, so 3/4 of the roti is left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q16",
    prompt: "Which picture does NOT show 1/4 shaded?",
    options: [
      { id: "a", text: "A circle cut into 4 equal slices with 1 slice shaded" },
      { id: "b", text: "A square cut into 4 equal small squares with 1 shaded" },
      { id: "c", text: "A rectangle cut into 4 strips of different widths with 1 strip shaded" },
      { id: "d", text: "A rectangle cut into 4 equal strips with 1 strip shaded" }
    ],
    answerId: "c",
    explanation: "Quarters must be equal parts; strips of different widths are not quarters.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q17",
    prompt: "Which is greater: 3/5 or 2/5 of the same chocolate bar?",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "2/5" },
      { id: "c", text: "Both are the same" },
      { id: "d", text: "We cannot tell" }
    ],
    answerId: "a",
    explanation: "The pieces are the same size (fifths), so 3 pieces are more than 2 pieces.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q18",
    prompt: "Sana eats 1/4 of a pizza and then 2/4 more. How much of the pizza has she eaten?",
    options: [
      { id: "a", text: "3/8" },
      { id: "b", text: "1/4" },
      { id: "c", text: "2/8" },
      { id: "d", text: "3/4" }
    ],
    answerId: "d",
    explanation: "1 quarter + 2 quarters = 3 quarters; the size of each piece stays a quarter, so the answer is 3/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q19",
    prompt: "Arjun gets \u20b940 as a gift. He spends 1/4 of it on a kite. How much does the kite cost?",
    options: [
      { id: "a", text: "\u20b94" },
      { id: "b", text: "\u20b930" },
      { id: "c", text: "\u20b910" },
      { id: "d", text: "\u20b920" }
    ],
    answerId: "c",
    explanation: "1/4 of \u20b940 is \u20b940 \u00f7 4 = \u20b910.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q20",
    prompt: "Mohan has 24 marbles. He gives 1/2 of them to his sister and 1/4 of them to his friend. How many marbles does Mohan have left?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "6" },
      { id: "c", text: "12" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "1/2 of 24 is 12 and 1/4 of 24 is 6, so 24 \u2212 12 \u2212 6 = 6 are left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q21",
    prompt: "1/3 of a number is 7. What is the number?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "3" },
      { id: "c", text: "14" },
      { id: "d", text: "21" }
    ],
    answerId: "d",
    explanation: "If one of 3 equal parts is 7, the whole is 3 \u00d7 7 = 21.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q22",
    prompt: "Neha eats 1/3 of a pizza and Sam eats 1/4 of a pizza of the same size. Who ate more?",
    options: [
      { id: "a", text: "Neha, because thirds are bigger pieces than quarters" },
      { id: "b", text: "Sam, because 4 is bigger than 3" },
      { id: "c", text: "Both ate the same amount" },
      { id: "d", text: "Sam, because quarters are bigger pieces" }
    ],
    answerId: "a",
    explanation: "Sharing into 3 parts gives bigger pieces than sharing into 4, so 1/3 > 1/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q23",
    prompt: "A jug holds 1 and a half litres of lassi. How many quarter-litre glasses can it fill?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "1 litre fills 4 quarter-litre glasses and half a litre fills 2 more, so 4 + 2 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-a-q24",
    prompt: "A box has 18 laddoos. 2/3 of them are besan laddoos and the rest are coconut laddoos. How many coconut laddoos are there?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "6" },
      { id: "c", text: "9" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "2/3 of 18 is 12 besan laddoos, so 18 \u2212 12 = 6 are coconut.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-fractions-b-q01",
    prompt: "A pizza is cut into 3 equal slices. What fraction of the pizza is each slice?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "1/2" },
      { id: "c", text: "3/1" },
      { id: "d", text: "1/4" }
    ],
    answerId: "a",
    explanation: "3 equal slices means each slice is one third, written 1/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q02",
    prompt: "In the fraction 2/5, what is the numerator?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "2" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "The numerator is the top number; it tells how many parts we take.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q03",
    prompt: "Which picture shows 1/4 shaded?",
    options: [
      { id: "a", text: "A square cut into 4 unequal parts with 1 part shaded" },
      { id: "b", text: "A square cut into 2 equal parts with 1 part shaded" },
      { id: "c", text: "A square cut into 4 equal parts with 3 parts shaded" },
      { id: "d", text: "A square cut into 4 equal parts with 1 part shaded" }
    ],
    answerId: "d",
    explanation: "A quarter needs 4 EQUAL parts with 1 of them shaded.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q04",
    prompt: "An orange has 8 equal segments. Riya eats 3 segments. What fraction of the orange did she eat?",
    options: [
      { id: "a", text: "8/3" },
      { id: "b", text: "3/8" },
      { id: "c", text: "5/8" },
      { id: "d", text: "3/5" }
    ],
    answerId: "b",
    explanation: "She ate 3 out of 8 equal segments, which is 3/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q05",
    prompt: "What is 1/2 of 18?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "36" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "Share 18 into 2 equal groups: each group has 18 \u00f7 2 = 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q06",
    prompt: "Which of these is NOT a unit fraction?",
    options: [
      { id: "a", text: "1/7" },
      { id: "b", text: "1/9" },
      { id: "c", text: "1/2" },
      { id: "d", text: "3/7" }
    ],
    answerId: "d",
    explanation: "A unit fraction must have 1 on top; 3/7 has 3 on top.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q07",
    prompt: "Which is smaller: 1/3 or 1/2 of the same chapati?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/3" },
      { id: "c", text: "Both are the same" },
      { id: "d", text: "We cannot tell" }
    ],
    answerId: "b",
    explanation: "Cutting into 3 parts gives smaller pieces than cutting into 2 parts.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q08",
    prompt: "A ribbon is cut into 2 equal pieces. What fraction of the ribbon is one piece?",
    options: [
      { id: "a", text: "2/1" },
      { id: "b", text: "1/3" },
      { id: "c", text: "1/2" },
      { id: "d", text: "1/4" }
    ],
    answerId: "c",
    explanation: "2 equal pieces means each piece is one half, written 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q09",
    prompt: "What is 1/4 of 12?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "Share 12 into 4 equal groups: each group has 12 \u00f7 4 = 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q10",
    prompt: "How many quarters make one whole?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "1" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "Four quarters, 1/4 + 1/4 + 1/4 + 1/4, make one whole.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q11",
    prompt: "Which list goes from smallest to greatest?",
    options: [
      { id: "a", text: "1/6, 1/4, 1/2" },
      { id: "b", text: "1/2, 1/4, 1/6" },
      { id: "c", text: "1/4, 1/6, 1/2" },
      { id: "d", text: "1/6, 1/2, 1/4" }
    ],
    answerId: "a",
    explanation: "More parts means smaller pieces, so 1/6 < 1/4 < 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q12",
    prompt: "Which fraction is the same as 1/3?",
    options: [
      { id: "a", text: "1/6" },
      { id: "b", text: "3/1" },
      { id: "c", text: "2/6" },
      { id: "d", text: "2/3" }
    ],
    answerId: "c",
    explanation: "Cut each third into 2 equal pieces: 1 third becomes 2 sixths, so 2/6 = 1/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q13",
    prompt: "What is 2/3 of 15?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "5" },
      { id: "c", text: "13" },
      { id: "d", text: "30" }
    ],
    answerId: "a",
    explanation: "1/3 of 15 is 5, so 2/3 of 15 is 2 \u00d7 5 = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q14",
    prompt: "There are 40 students in Class 4. 1/4 of them come to school by bus. How many students come by bus?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "30" },
      { id: "c", text: "36" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "1/4 of 40 is 40 \u00f7 4 = 10 students.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q15",
    prompt: "A chocolate bar has 6 equal pieces. Kavya eats 2 pieces. What fraction of the bar is left?",
    options: [
      { id: "a", text: "2/6" },
      { id: "b", text: "4/2" },
      { id: "c", text: "4/6" },
      { id: "d", text: "2/4" }
    ],
    answerId: "c",
    explanation: "4 of the 6 equal pieces are left, so 4/6 of the bar is left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q16",
    prompt: "Rahul cuts a paper into 3 parts: one big part and two small parts. He shades the big part and says, \"I shaded 1/3.\" Is he right?",
    options: [
      { id: "a", text: "Yes, because 1 of the 3 parts is shaded" },
      { id: "b", text: "No, because the 3 parts are not equal" },
      { id: "c", text: "Yes, because the big part is always a third" },
      { id: "d", text: "No, because he should shade all 3 parts" }
    ],
    answerId: "b",
    explanation: "Thirds must be 3 EQUAL parts, so his big part is not 1/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q17",
    prompt: "Which list goes from smallest to greatest?",
    options: [
      { id: "a", text: "6/7, 3/7, 1/7" },
      { id: "b", text: "3/7, 1/7, 6/7" },
      { id: "c", text: "1/7, 3/7, 6/7" },
      { id: "d", text: "1/7, 6/7, 3/7" }
    ],
    answerId: "c",
    explanation: "All pieces are sevenths, so fewer pieces means less: 1 < 3 < 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q18",
    prompt: "A cake is cut into 6 equal pieces. 5 pieces are on the plate and 2 pieces are eaten. What fraction of the cake is still on the plate?",
    options: [
      { id: "a", text: "3/6" },
      { id: "b", text: "7/6" },
      { id: "c", text: "3/12" },
      { id: "d", text: "2/6" }
    ],
    answerId: "a",
    explanation: "5 sixths \u2212 2 sixths = 3 sixths; the piece size stays a sixth, so the answer is 3/6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q19",
    prompt: "Mummy has \u20b960. She spends 1/3 of it on vegetables. How much does she spend on vegetables?",
    options: [
      { id: "a", text: "\u20b93" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b930" },
      { id: "d", text: "\u20b940" }
    ],
    answerId: "b",
    explanation: "1/3 of \u20b960 is \u20b960 \u00f7 3 = \u20b920.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q20",
    prompt: "There are 36 children in a park. 1/2 of them play cricket, 1/3 of them play football and the rest play kho-kho. How many children play kho-kho?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "12" },
      { id: "c", text: "9" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "Cricket: 18, football: 12, so kho-kho: 36 \u2212 18 \u2212 12 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q21",
    prompt: "Aditi has read 15 pages of a storybook. That is 1/4 of the book. How many pages does the book have?",
    options: [
      { id: "a", text: "19" },
      { id: "b", text: "60" },
      { id: "c", text: "11" },
      { id: "d", text: "30" }
    ],
    answerId: "b",
    explanation: "If one of 4 equal parts is 15 pages, the whole book is 4 \u00d7 15 = 60 pages.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q22",
    prompt: "Which share gives the MOST rotis?",
    options: [
      { id: "a", text: "1/4 of 20 rotis" },
      { id: "b", text: "1/2 of 8 rotis" },
      { id: "c", text: "1/3 of 9 rotis" },
      { id: "d", text: "All the shares are equal" }
    ],
    answerId: "a",
    explanation: "1/2 of 8 is 4, 1/3 of 9 is 3, and 1/4 of 20 is 5, so 1/4 of 20 is the most.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q23",
    prompt: "How many halves make 2 and a half?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "Each whole has 2 halves, so 2 wholes have 4 halves, plus 1 more half makes 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-fractions-b-q24",
    prompt: "A school garden has 20 flowers. 3/4 of them are marigolds. How many flowers are NOT marigolds?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "3" },
      { id: "c", text: "16" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "3/4 of 20 is 15 marigolds, so 20 \u2212 15 = 5 are not marigolds.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🫓",
    title: "Equal parts",
    body: [
      "A fraction is a part of a whole — but the parts must be equal!",
      "Two equal pieces? Each one is a half.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's share!",
    visual: "fraction-bar",
    speak: "A fraction is a part of a whole. But the parts must be equal! Two equal pieces? Each one is a half.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Halves, quarters, thirds",
    lead: "Tap each card.",
    visual: "fraction-bar",
    speak: "Fold a paper in half, then fold it again. Now you have four equal quarters. Two quarters make one half. Three equal parts are called thirds.",
    cards: [
      { label: "Half (1/2)", reveal: "2 equal parts — take 1", emoji: "🌓" },
      { label: "Quarter (1/4)", reveal: "4 equal parts; 2 quarters = 1 half", emoji: "🍕" },
      { label: "Third (1/3)", reveal: "3 equal parts — take 1", emoji: "🍰" },
      { label: "Three-quarters (3/4)", reveal: "Shade 3 of 4 equal parts", emoji: "🟧" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Top and bottom",
    visual: "fraction-bar",
    speak: "The bottom number, the denominator, tells how many equal parts. The top number, the numerator, tells how many parts we take. A unit fraction has one on top. More parts means smaller pieces, so one half is bigger than one third.",
    steps: [
      "2/5: denominator 5 = equal parts in the whole",
      "2/5: numerator 2 = parts we take",
      "Unit fractions: 1/2 > 1/3 > 1/5 (more parts → smaller pieces)",
      "Same-size pieces: 5/6 > 2/6 (more pieces → more)",
    ],
    punchline: "Bottom = equal parts · Top = parts taken",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Which is bigger, 1/3 or 1/5?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "1/5" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" },
    ],
    answerId: "a",
    why: "Cutting into 3 parts makes bigger pieces than cutting into 5 parts.",
    visual: "fraction-bar",
    speak: "Which is bigger, one third or one fifth?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Fraction of a group",
    visual: "fraction-bar",
    speak: "To find half of twelve, share twelve into two equal groups. Each group has six. In a story, find the whole first, then find the part. Three-quarters of sixteen is twelve.",
    steps: [
      "1/2 of 12 → 12 ÷ 2 = 6",
      "1/4 of 20 → 20 ÷ 4 = 5",
      "3/4 of 16 → 16 ÷ 4 = 4, then 4 × 3 = 12",
      "Story: find the whole first, then the part",
    ],
    punchline: "Divide by the bottom, multiply by the top.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "fraction-bar",
    speak: "One third of a class of twenty-four children wear glasses. How many children wear glasses?",
    question: {
      id: "g4-frac-check",
      prompt: "1/3 of a class of 24 children wear glasses. How many wear glasses?",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "8" },
        { id: "c", text: "12" },
        { id: "d", text: "3" },
      ],
      answerId: "b",
      explanation: "24 ÷ 3 = 8 children.",
      hints: ["The whole is 24.", "Share 24 into 3 equal groups."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Fraction friend!",
    bullets: [
      "Parts must be equal",
      "Bottom = equal parts; top = parts taken",
      "Unit fractions: more parts → smaller pieces",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can name, compare and find fractions. Set A and Set B are ready.",
  },
];

export const g4MathsFractions: ChapterDef = {
  id: "g4-fractions",
  title: "Fractions",
  emoji: "\ud83c\udf55",
  blurb: "Halves, quarters, compare & fraction of a group",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "fractions",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "fractions",
      questions: SET_B,
    },
  ],
  paperTopics: ["fractions", "multiply-basics"],
};

export const g4MathsFractionsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
