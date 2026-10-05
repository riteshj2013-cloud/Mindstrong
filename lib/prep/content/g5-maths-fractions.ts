import type { ChapterDef, PrepQuestion } from "../types";

/** Fractions - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-frac-a-q01",
    prompt: "A roti is cut into 4 equal pieces and Ravi eats 1 piece. What fraction of the roti did he eat?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "1/4" },
      { id: "c", text: "3/4" },
      { id: "d", text: "4/1" }
    ],
    answerId: "b",
    explanation: "He ate 1 out of 4 equal pieces, so the fraction is 1/4, while 1/3 wrongly compares the eaten piece with the uneaten pieces.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q02",
    prompt: "What is the denominator of the fraction 5/8?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "13" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "The denominator is the bottom number, which tells how many equal parts the whole has, so it is 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q03",
    prompt: "A chocolate bar has 10 equal pieces and 3 pieces are eaten. What fraction of the bar is left?",
    options: [
      { id: "a", text: "7/10" },
      { id: "b", text: "3/10" },
      { id: "c", text: "7/3" },
      { id: "d", text: "10/7" }
    ],
    answerId: "a",
    explanation: "10 \u2212 3 = 7 pieces are left out of 10 equal pieces, so 7/10 is left, while 3/10 is the part eaten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q04",
    prompt: "Which of these is a unit fraction?",
    options: [
      { id: "a", text: "9/1" },
      { id: "b", text: "2/9" },
      { id: "c", text: "1/9" },
      { id: "d", text: "9/9" }
    ],
    answerId: "c",
    explanation: "A unit fraction has 1 as its numerator, and among these only 1/9 does.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q05",
    prompt: "Which of these shows exactly 1/2 shaded?",
    options: [
      { id: "a", text: "A square cut into one big part and one small part, with the small part shaded" },
      { id: "b", text: "A circle cut into 3 equal parts, with 1 part shaded" },
      { id: "c", text: "A circle cut into 2 equal parts, with 1 part shaded" },
      { id: "d", text: "A rectangle cut into 4 equal parts, with 1 part shaded" }
    ],
    answerId: "c",
    explanation: "A half means 1 of 2 EQUAL parts, so a shape cut into unequal parts does not show 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q06",
    prompt: "What is 2/7 + 3/7?",
    options: [
      { id: "a", text: "5/7" },
      { id: "b", text: "5/14" },
      { id: "c", text: "6/7" },
      { id: "d", text: "1/7" }
    ],
    answerId: "a",
    explanation: "For like fractions we add only the numerators and keep the denominator, so 2/7 + 3/7 = 5/7, not 5/14.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q07",
    prompt: "Which is greater: 5/9 or 4/9?",
    options: [
      { id: "a", text: "4/9" },
      { id: "b", text: "They cannot be compared" },
      { id: "c", text: "Both are equal" },
      { id: "d", text: "5/9" }
    ],
    answerId: "d",
    explanation: "When the denominators are the same, the fraction with the bigger numerator is greater, so 5/9 is greater.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q08",
    prompt: "Which fraction is equivalent to 1/2?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "3/6" },
      { id: "c", text: "1/4" },
      { id: "d", text: "2/6" }
    ],
    answerId: "b",
    explanation: "Multiplying both parts of 1/2 by 3 gives 3/6, so they show the same amount.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q09",
    prompt: "What is 1/4 of 20?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "80" },
      { id: "c", text: "16" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "To find 1/4 of 20, split 20 into 4 equal groups, and each group has 20 \u00f7 4 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q10",
    prompt: "Which of these is an improper fraction?",
    options: [
      { id: "a", text: "7/4" },
      { id: "b", text: "4/7" },
      { id: "c", text: "3/4" },
      { id: "d", text: "1/4" }
    ],
    answerId: "a",
    explanation: "An improper fraction has a numerator bigger than or equal to its denominator, and 7 is bigger than 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q11",
    prompt: "What is 12/18 in its simplest form?",
    options: [
      { id: "a", text: "6/9" },
      { id: "b", text: "4/6" },
      { id: "c", text: "2/3" },
      { id: "d", text: "3/2" }
    ],
    answerId: "c",
    explanation: "Dividing both 12 and 18 by their biggest common factor, 6, gives 2/3, while 6/9 and 4/6 are only partly simplified.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q12",
    prompt: "Which is greater: 1/5 or 1/8?",
    options: [
      { id: "a", text: "1/8" },
      { id: "b", text: "1/5" },
      { id: "c", text: "Both are equal" },
      { id: "d", text: "They cannot be compared" }
    ],
    answerId: "b",
    explanation: "With the same numerator, the smaller denominator means bigger pieces, so 1/5 is greater even though 8 is bigger than 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q13",
    prompt: "In a class of 30 students, 2/5 wear glasses. How many students wear glasses?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "18" },
      { id: "c", text: "15" },
      { id: "d", text: "12" }
    ],
    answerId: "d",
    explanation: "1/5 of 30 is 6, so 2/5 of 30 is 2 \u00d7 6 = 12, while 6 is the trap of stopping at 1/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q14",
    prompt: "What is 9/10 \u2212 4/10 in its simplest form?",
    options: [
      { id: "a", text: "13/20" },
      { id: "b", text: "5/20" },
      { id: "c", text: "1/2" },
      { id: "d", text: "1/5" }
    ],
    answerId: "c",
    explanation: "9/10 \u2212 4/10 = 5/10, which simplifies to 1/2 when we divide the top and bottom by 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q15",
    prompt: "Which improper fraction is equal to the mixed number 2 1/3?",
    options: [
      { id: "a", text: "7/3" },
      { id: "b", text: "5/3" },
      { id: "c", text: "6/3" },
      { id: "d", text: "3/7" }
    ],
    answerId: "a",
    explanation: "2 wholes make 6 thirds, and 1 more third gives 7/3, while 5/3 wrongly adds 2 + 3 for the top.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q16",
    prompt: "A number line from 0 to 1 is divided into 6 equal parts. A point is at the 4th mark after 0. Which fraction names this point?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "2/3" },
      { id: "c", text: "4/5" },
      { id: "d", text: "6/4" }
    ],
    answerId: "b",
    explanation: "The point is at 4/6, and 4/6 simplifies to 2/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q17",
    prompt: "Which list shows 3/11, 8/11 and 5/11 from smallest to largest?",
    options: [
      { id: "a", text: "8/11, 5/11, 3/11" },
      { id: "b", text: "3/11, 8/11, 5/11" },
      { id: "c", text: "5/11, 3/11, 8/11" },
      { id: "d", text: "3/11, 5/11, 8/11" }
    ],
    answerId: "d",
    explanation: "With the same denominator we simply order the numerators 3, 5, 8, so the order is 3/11, 5/11, 8/11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q18",
    prompt: "Which number goes in the box: 3/4 = \u2610/20?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "15" },
      { id: "c", text: "16" },
      { id: "d", text: "23" }
    ],
    answerId: "b",
    explanation: "The denominator is multiplied by 5 to go from 4 to 20, so the numerator must also be multiplied by 5, giving 15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q19",
    prompt: "A cricket over has 6 balls. A bowler has bowled 4 balls of the over. What fraction of the over has he bowled, in simplest form?",
    options: [
      { id: "a", text: "4/10" },
      { id: "b", text: "1/3" },
      { id: "c", text: "2/3" },
      { id: "d", text: "3/2" }
    ],
    answerId: "c",
    explanation: "He has bowled 4 of 6 balls, which is 4/6 = 2/3, while 1/3 is the part still left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q20",
    prompt: "A rangoli uses 48 diyas. 1/4 of them are red, 1/3 are blue and the rest are yellow. How many diyas are yellow?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "16" },
      { id: "c", text: "24" },
      { id: "d", text: "28" }
    ],
    answerId: "a",
    explanation: "Red is 48 \u00f7 4 = 12 and blue is 48 \u00f7 3 = 16, so yellow is 48 \u2212 12 \u2212 16 = 20.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q21",
    prompt: "Which of these fractions is the greatest?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "5/8" },
      { id: "c", text: "7/12" },
      { id: "d", text: "3/4" }
    ],
    answerId: "d",
    explanation: "Writing all of them with denominator 24 gives 18/24, 15/24, 14/24 and 16/24, so 3/4 is the greatest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q22",
    prompt: "In a class of 40 students, 3/8 are girls. How many more boys than girls are there?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "5" },
      { id: "c", text: "15" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "There are 3/8 \u00d7 40 = 15 girls and 40 \u2212 15 = 25 boys, so there are 25 \u2212 15 = 10 more boys.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q23",
    prompt: "Meera ate 2/9 of a cake and her brother ate 4/9 of it. What fraction of the cake is left, in simplest form?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "6/9" },
      { id: "c", text: "1/3" },
      { id: "d", text: "3/18" }
    ],
    answerId: "c",
    explanation: "Together they ate 6/9, so 9/9 \u2212 6/9 = 3/9 is left, which simplifies to 1/3, while 2/3 is the part eaten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-a-q24",
    prompt: "Which fraction lies between 1/3 and 1/2 on the number line?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "5/12" },
      { id: "c", text: "2/3" },
      { id: "d", text: "3/5" }
    ],
    answerId: "b",
    explanation: "In twelfths, 1/3 = 4/12 and 1/2 = 6/12, so 5/12 lies between them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-frac-b-q01",
    prompt: "A paratha is cut into 6 equal pieces and 5 pieces are eaten. What fraction of the paratha is eaten?",
    options: [
      { id: "a", text: "1/6" },
      { id: "b", text: "6/5" },
      { id: "c", text: "5/6" },
      { id: "d", text: "5/11" }
    ],
    answerId: "c",
    explanation: "5 out of 6 equal pieces are eaten, so the fraction eaten is 5/6, and 1/6 is what is left.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q02",
    prompt: "What is the numerator of the fraction 4/9?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "9" },
      { id: "c", text: "13" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "The numerator is the top number, which tells how many parts we are counting, so it is 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q03",
    prompt: "A pizza is cut into 8 equal slices and 3 slices are left. What fraction of the pizza is left?",
    options: [
      { id: "a", text: "5/8" },
      { id: "b", text: "3/8" },
      { id: "c", text: "3/5" },
      { id: "d", text: "8/3" }
    ],
    answerId: "b",
    explanation: "3 slices out of 8 equal slices are left, so the fraction left is 3/8, while 5/8 is the part eaten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q04",
    prompt: "Which of these is NOT a unit fraction?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/7" },
      { id: "c", text: "1/100" },
      { id: "d", text: "3/10" }
    ],
    answerId: "d",
    explanation: "A unit fraction must have 1 as its numerator, but 3/10 has 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q05",
    prompt: "Which of these shows exactly 1/3 shaded?",
    options: [
      { id: "a", text: "A rectangle cut into 3 strips of different widths, with 1 strip shaded" },
      { id: "b", text: "A rectangle cut into 3 equal strips, with 1 strip shaded" },
      { id: "c", text: "A rectangle cut into 4 equal strips, with 1 strip shaded" },
      { id: "d", text: "A rectangle cut into 3 equal strips, with 2 strips shaded" }
    ],
    answerId: "b",
    explanation: "One-third means 1 of 3 EQUAL parts, so the strips must be equal and only one should be shaded.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q06",
    prompt: "What is 4/9 + 2/9?",
    options: [
      { id: "a", text: "6/18" },
      { id: "b", text: "2/9" },
      { id: "c", text: "8/9" },
      { id: "d", text: "6/9" }
    ],
    answerId: "d",
    explanation: "We add the numerators and keep the same denominator, so 4/9 + 2/9 = 6/9, not 6/18.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q07",
    prompt: "Which is smaller: 3/7 or 6/7?",
    options: [
      { id: "a", text: "3/7" },
      { id: "b", text: "6/7" },
      { id: "c", text: "Both are equal" },
      { id: "d", text: "They cannot be compared" }
    ],
    answerId: "a",
    explanation: "With the same denominator, the fraction with the smaller numerator is smaller, so 3/7 is smaller.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q08",
    prompt: "Which fraction is equivalent to 2/3?",
    options: [
      { id: "a", text: "2/6" },
      { id: "b", text: "3/4" },
      { id: "c", text: "4/6" },
      { id: "d", text: "4/9" }
    ],
    answerId: "c",
    explanation: "Multiplying both parts of 2/3 by 2 gives 4/6, so they show the same amount.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q09",
    prompt: "What is 1/3 of 21?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "3" },
      { id: "c", text: "18" },
      { id: "d", text: "63" }
    ],
    answerId: "a",
    explanation: "Splitting 21 into 3 equal groups gives 21 \u00f7 3 = 7 in each group.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q10",
    prompt: "Which of these is a mixed number?",
    options: [
      { id: "a", text: "5/5" },
      { id: "b", text: "7/5" },
      { id: "c", text: "2/5" },
      { id: "d", text: "1 2/5" }
    ],
    answerId: "d",
    explanation: "A mixed number has a whole number and a fraction written together, like 1 2/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q11",
    prompt: "What is 16/24 in its simplest form?",
    options: [
      { id: "a", text: "8/12" },
      { id: "b", text: "2/3" },
      { id: "c", text: "4/6" },
      { id: "d", text: "3/4" }
    ],
    answerId: "b",
    explanation: "Dividing 16 and 24 by their biggest common factor, 8, gives 2/3, while 8/12 and 4/6 are not fully simplified.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q12",
    prompt: "Which is greater: 3/5 or 3/8?",
    options: [
      { id: "a", text: "3/8" },
      { id: "b", text: "Both are equal" },
      { id: "c", text: "3/5" },
      { id: "d", text: "They cannot be compared" }
    ],
    answerId: "c",
    explanation: "With the same numerator, fifths are bigger pieces than eighths, so 3/5 is greater.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q13",
    prompt: "A basket has 32 mangoes and 3/4 of them are ripe. How many mangoes are ripe?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "12" },
      { id: "c", text: "28" },
      { id: "d", text: "24" }
    ],
    answerId: "d",
    explanation: "1/4 of 32 is 8, so 3/4 of 32 is 3 \u00d7 8 = 24, while 8 is the number of unripe mangoes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q14",
    prompt: "What is 7/8 \u2212 3/8 in its simplest form?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "4/16" },
      { id: "c", text: "1/4" },
      { id: "d", text: "10/8" }
    ],
    answerId: "a",
    explanation: "7/8 \u2212 3/8 = 4/8, which simplifies to 1/2 when we divide the top and bottom by 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q15",
    prompt: "Which mixed number is equal to 11/4?",
    options: [
      { id: "a", text: "3 1/4" },
      { id: "b", text: "2 3/4" },
      { id: "c", text: "2 1/4" },
      { id: "d", text: "4 3/11" }
    ],
    answerId: "b",
    explanation: "11 quarters make 2 wholes (8 quarters) with 3 quarters left over, so 11/4 = 2 3/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q16",
    prompt: "A number line from 0 to 1 is divided into 8 equal parts. A point is at the 6th mark after 0. Which fraction names this point?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "6/10" },
      { id: "c", text: "3/4" },
      { id: "d", text: "1/6" }
    ],
    answerId: "c",
    explanation: "The point is at 6/8, and 6/8 simplifies to 3/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q17",
    prompt: "Which list shows 5/12, 11/12 and 7/12 from largest to smallest?",
    options: [
      { id: "a", text: "11/12, 7/12, 5/12" },
      { id: "b", text: "5/12, 7/12, 11/12" },
      { id: "c", text: "7/12, 11/12, 5/12" },
      { id: "d", text: "11/12, 5/12, 7/12" }
    ],
    answerId: "a",
    explanation: "With the same denominator, larger numerators mean larger fractions, so the order is 11/12, 7/12, 5/12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q18",
    prompt: "Which number goes in the box: 4/5 = 24/\u2610?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "25" },
      { id: "c", text: "29" },
      { id: "d", text: "30" }
    ],
    answerId: "d",
    explanation: "The numerator is multiplied by 6 to go from 4 to 24, so the denominator must also be multiplied by 6, giving 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q19",
    prompt: "A family is travelling 60 km to their village and has finished 5/6 of the journey. How many km are left?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "10" },
      { id: "c", text: "12" },
      { id: "d", text: "50" }
    ],
    answerId: "b",
    explanation: "5/6 of 60 km is 50 km, so 60 \u2212 50 = 10 km are left, while 50 is the distance already covered.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q20",
    prompt: "In a school of 60 students, 1/3 like cricket best, 1/4 like kabaddi best and the rest like kho-kho best. How many students like kho-kho best?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "20" },
      { id: "c", text: "25" },
      { id: "d", text: "35" }
    ],
    answerId: "c",
    explanation: "Cricket is 60 \u00f7 3 = 20 and kabaddi is 60 \u00f7 4 = 15, so kho-kho is 60 \u2212 20 \u2212 15 = 25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q21",
    prompt: "Which of these fractions is the smallest?",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "3/5" },
      { id: "c", text: "4/7" },
      { id: "d", text: "5/9" }
    ],
    answerId: "d",
    explanation: "Each fraction is just over half, and the amount over half shrinks from 2/3 to 5/9, which makes 5/9 the smallest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q22",
    prompt: "A T20 innings has 20 overs. A team has already batted 15 overs. What fraction of the innings is still left, in simplest form?",
    options: [
      { id: "a", text: "3/4" },
      { id: "b", text: "1/4" },
      { id: "c", text: "1/5" },
      { id: "d", text: "1/3" }
    ],
    answerId: "b",
    explanation: "20 \u2212 15 = 5 overs are left, which is 5/20 = 1/4 of the innings, while 3/4 is the part already played.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q23",
    prompt: "Amma baked a cake. She gave 3/10 of it to a neighbour and 5/10 to her sister. What fraction of the cake does she have left, in simplest form?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "4/5" },
      { id: "c", text: "8/10" },
      { id: "d", text: "1/2" }
    ],
    answerId: "a",
    explanation: "She gave away 8/10, so 10/10 \u2212 8/10 = 2/10 is left, which simplifies to 1/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-frac-b-q24",
    prompt: "Ankit gives away 2/5 of his marbles, which is 14 marbles. How many marbles did he have at first?",
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "28" },
      { id: "c", text: "35" },
      { id: "d", text: "70" }
    ],
    answerId: "c",
    explanation: "If 2/5 is 14 marbles, then 1/5 is 7 marbles, so all 5/5 is 5 \u00d7 7 = 35 marbles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf55",
    title: "Fractions",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "fraction-bar",
    speak: "A fraction names equal parts of a whole. Bottom is parts; top is how many you have.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "fraction-bar",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Denominator", reveal: "Equal parts in the whole", emoji: "\u2797" },
      { label: "Numerator", reveal: "Parts you count", emoji: "\u2728" },
      { label: "Unit fraction", reveal: "Numerator is 1", emoji: "1\ufe0f\u20e3" },
      { label: "Equivalent", reveal: "Same amount, different look", emoji: "\u2696\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Roti cut into 4; Ravi eats 1. Fraction eaten?",
    options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "1/4" },
        { id: "c", text: "3/4" },
        { id: "d", text: "4/1" }
    ],
    answerId: "b",
    why: "One of four equal parts is 1/4.",
    visual: "fraction-bar",
    speak: "Roti cut into 4; Ravi eats 1. Fraction eaten?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Top = parts you have", "Bottom = equal parts", "Compare carefully", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5MathsFractions: ChapterDef = {
  id: "fractions-g5",
  title: "Fractions",
  emoji: "\ud83c\udf55",
  blurb: "Parts of a whole",
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
  paperTopics: ["fractions", "decimals"],
};

export const g5MathsFractionsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
