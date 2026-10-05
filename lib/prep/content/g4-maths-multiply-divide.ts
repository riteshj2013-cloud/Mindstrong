import type { ChapterDef, PrepQuestion } from "../types";

/** Multiplication & Division - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-muldiv-a-q01",
    prompt: "6 + 6 + 6 + 6 + 6 is the same as which of these?",
    options: [
      { id: "a", text: "6 \u00d7 6" },
      { id: "b", text: "5 + 6" },
      { id: "c", text: "5 \u00d7 6" },
      { id: "d", text: "6 \u00d7 4" }
    ],
    answerId: "c",
    explanation: "There are 5 groups of 6, so it is 5 \u00d7 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q02",
    prompt: "What is 7 \u00d7 8?",
    options: [
      { id: "a", text: "56" },
      { id: "b", text: "54" },
      { id: "c", text: "63" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "From the 7 table: 7 \u00d7 8 = 56 (15 is what you get if you add).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q03",
    prompt: "A school garden has 4 rows of rose plants with 9 plants in each row. How many rose plants are there?",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "36" },
      { id: "c", text: "32" },
      { id: "d", text: "45" }
    ],
    answerId: "b",
    explanation: "4 rows of 9 make 4 \u00d7 9 = 36 plants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q04",
    prompt: "What is 0 \u00d7 345?",
    options: [
      { id: "a", text: "345" },
      { id: "b", text: "1" },
      { id: "c", text: "3,450" },
      { id: "d", text: "0" }
    ],
    answerId: "d",
    explanation: "Any number multiplied by 0 is 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q05",
    prompt: "What is 1 \u00d7 87?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "87" },
      { id: "c", text: "0" },
      { id: "d", text: "88" }
    ],
    answerId: "b",
    explanation: "Any number multiplied by 1 stays the same.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q06",
    prompt: "What is 42 \u00f7 6?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "36" }
    ],
    answerId: "a",
    explanation: "6 \u00d7 7 = 42, so 42 \u00f7 6 = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q07",
    prompt: "If 9 \u00d7 4 = 36, then what is 36 \u00f7 4?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "32" },
      { id: "c", text: "40" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "Division undoes multiplication: 36 \u00f7 4 = 9 because 9 \u00d7 4 = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q08",
    prompt: "What is 3 \u00d7 12?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "33" },
      { id: "c", text: "36" },
      { id: "d", text: "39" }
    ],
    answerId: "c",
    explanation: "3 \u00d7 12 = 12 + 12 + 12 = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q09",
    prompt: "Which of these is equal to 8 \u00d7 5?",
    options: [
      { id: "a", text: "5 \u00d7 8" },
      { id: "b", text: "8 + 5" },
      { id: "c", text: "8 \u00d7 8" },
      { id: "d", text: "5 \u00d7 5" }
    ],
    answerId: "a",
    explanation: "Changing the order of the factors does not change the product: both are 40.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q10",
    prompt: "Meena shares 24 laddoos equally among 3 friends. How many laddoos does each friend get?",
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "27" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "24 \u00f7 3 = 8, because 3 \u00d7 8 = 24.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q11",
    prompt: "What is 46 \u00d7 3?",
    options: [
      { id: "a", text: "128" },
      { id: "b", text: "138" },
      { id: "c", text: "49" },
      { id: "d", text: "1,218" }
    ],
    answerId: "b",
    explanation: "6 \u00d7 3 = 18, write 8 carry 1; 4 \u00d7 3 = 12, plus 1 is 13, so the answer is 138.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q12",
    prompt: "What is 214 \u00d7 4?",
    options: [
      { id: "a", text: "218" },
      { id: "b", text: "846" },
      { id: "c", text: "856" },
      { id: "d", text: "864" }
    ],
    answerId: "c",
    explanation: "200 \u00d7 4 = 800, 10 \u00d7 4 = 40 and 4 \u00d7 4 = 16, and 800 + 40 + 16 = 856.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q13",
    prompt: "What is 12 \u00d7 11?",
    options: [
      { id: "a", text: "132" },
      { id: "b", text: "23" },
      { id: "c", text: "121" },
      { id: "d", text: "122" }
    ],
    answerId: "a",
    explanation: "12 \u00d7 11 = 12 \u00d7 10 + 12 \u00d7 1 = 120 + 12 = 132.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q14",
    prompt: "What is 29 \u00f7 4?",
    options: [
      { id: "a", text: "7 exactly" },
      { id: "b", text: "6 remainder 5" },
      { id: "c", text: "7 remainder 1" },
      { id: "d", text: "8 remainder 1" }
    ],
    answerId: "c",
    explanation: "4 \u00d7 7 = 28 and 29 \u2212 28 = 1; the remainder must be smaller than 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q15",
    prompt: "Find the missing number: 6 \u00d7 ___ = 54",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "48" },
      { id: "c", text: "60" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "6 \u00d7 9 = 54, so the missing number is 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q16",
    prompt: "A pack has 10 pencils. Ravi buys 7 packs and 4 loose pencils. How many pencils does he have?",
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "74" },
      { id: "c", text: "70" },
      { id: "d", text: "47" }
    ],
    answerId: "b",
    explanation: "7 packs give 7 \u00d7 10 = 70 pencils, and 70 + 4 = 74.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q17",
    prompt: "One notebook costs \u20b925. How much do 6 notebooks cost?",
    options: [
      { id: "a", text: "\u20b931" },
      { id: "b", text: "\u20b9125" },
      { id: "c", text: "\u20b9140" },
      { id: "d", text: "\u20b9150" }
    ],
    answerId: "d",
    explanation: "6 \u00d7 \u20b925 = \u20b9150 (\u20b931 comes from adding instead of multiplying).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q18",
    prompt: "72 students stand in rows of 8 for assembly. How many rows are there?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "8" },
      { id: "c", text: "64" },
      { id: "d", text: "80" }
    ],
    answerId: "a",
    explanation: "72 \u00f7 8 = 9 rows, because 8 \u00d7 9 = 72.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q19",
    prompt: "Find the missing number: ___ \u00f7 7 = 6",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "42" },
      { id: "c", text: "36" },
      { id: "d", text: "49" }
    ],
    answerId: "b",
    explanation: "The missing number is 7 \u00d7 6 = 42.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q20",
    prompt: "A cricket coach has 3 boxes with 24 balls in each. He shares all the balls equally among 8 teams. How many balls does each team get?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "35" },
      { id: "c", text: "72" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "3 \u00d7 24 = 72 balls, and 72 \u00f7 8 = 9 balls per team.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q21",
    prompt: "50 children are going on a picnic. Each van can carry 8 children. How many vans are needed so that every child can go?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "42" }
    ],
    answerId: "a",
    explanation: "50 \u00f7 8 = 6 remainder 2, so 6 vans are full and 1 more van is needed for the last 2 children.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q22",
    prompt: "What is 25 \u00d7 24?",
    options: [
      { id: "a", text: "49" },
      { id: "b", text: "500" },
      { id: "c", text: "600" },
      { id: "d", text: "620" }
    ],
    answerId: "c",
    explanation: "25 \u00d7 4 = 100, and 24 is 6 fours, so 25 \u00d7 24 = 6 \u00d7 100 = 600.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q23",
    prompt: "A number is multiplied by 6 and then 4 is added. The answer is 70. What is the number?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "11" },
      { id: "c", text: "10" },
      { id: "d", text: "64" }
    ],
    answerId: "b",
    explanation: "Undo the steps: 70 \u2212 4 = 66, and 66 \u00f7 6 = 11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-a-q24",
    prompt: "Anita has \u20b9500. She buys 4 storybooks at \u20b985 each. How much money does she have left?",
    options: [
      { id: "a", text: "\u20b9415" },
      { id: "b", text: "\u20b9340" },
      { id: "c", text: "\u20b9160" },
      { id: "d", text: "\u20b9260" }
    ],
    answerId: "c",
    explanation: "4 \u00d7 \u20b985 = \u20b9340, and \u20b9500 \u2212 \u20b9340 = \u20b9160.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-muldiv-b-q01",
    prompt: "What does 9 \u00d7 4 mean?",
    options: [
      { id: "a", text: "9 + 4" },
      { id: "b", text: "9 + 9 + 9 + 9" },
      { id: "c", text: "9 + 9 + 9" },
      { id: "d", text: "4 + 4 + 4 + 4" }
    ],
    answerId: "b",
    explanation: "9 \u00d7 4 means 4 groups of 9, which is 9 + 9 + 9 + 9 = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q02",
    prompt: "What is 6 \u00d7 9?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "45" },
      { id: "c", text: "56" },
      { id: "d", text: "54" }
    ],
    answerId: "d",
    explanation: "From the 6 table: 6 \u00d7 9 = 54 (45 is 5 \u00d7 9, one step too few).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q03",
    prompt: "A chocolate bar has 5 rows with 6 pieces in each row. How many pieces are there in all?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "11" },
      { id: "c", text: "25" },
      { id: "d", text: "36" }
    ],
    answerId: "a",
    explanation: "5 rows of 6 make 5 \u00d7 6 = 30 pieces.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q04",
    prompt: "What is 999 \u00d7 0?",
    options: [
      { id: "a", text: "999" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "9,990" }
    ],
    answerId: "c",
    explanation: "Any number multiplied by 0 is 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q05",
    prompt: "What is 64 \u00f7 1?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "0" },
      { id: "c", text: "65" },
      { id: "d", text: "64" }
    ],
    answerId: "d",
    explanation: "Dividing a number by 1 leaves it the same.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q06",
    prompt: "What is 63 \u00f7 9?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "54" }
    ],
    answerId: "b",
    explanation: "9 \u00d7 7 = 63, so 63 \u00f7 9 = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q07",
    prompt: "Which division fact matches 8 \u00d7 7 = 56?",
    options: [
      { id: "a", text: "56 \u00f7 8 = 6" },
      { id: "b", text: "56 \u2212 8 = 7" },
      { id: "c", text: "56 \u00f7 8 = 7" },
      { id: "d", text: "8 \u00f7 7 = 56" }
    ],
    answerId: "c",
    explanation: "If 8 \u00d7 7 = 56, then 56 shared into 8 equal parts gives 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q08",
    prompt: "What is 11 \u00d7 4?",
    options: [
      { id: "a", text: "44" },
      { id: "b", text: "15" },
      { id: "c", text: "40" },
      { id: "d", text: "48" }
    ],
    answerId: "a",
    explanation: "11 \u00d7 4 = 10 \u00d7 4 + 1 \u00d7 4 = 40 + 4 = 44.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q09",
    prompt: "Fill in the blank: 7 \u00d7 3 = 3 \u00d7 ___",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "10" },
      { id: "c", text: "21" },
      { id: "d", text: "7" }
    ],
    answerId: "d",
    explanation: "Changing the order of the factors keeps the product the same, so 7 \u00d7 3 = 3 \u00d7 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q10",
    prompt: "30 bananas are put equally into 5 baskets. How many bananas are in each basket?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "25" },
      { id: "c", text: "35" },
      { id: "d", text: "150" }
    ],
    answerId: "a",
    explanation: "30 \u00f7 5 = 6, because 5 \u00d7 6 = 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q11",
    prompt: "What is 58 \u00d7 4?",
    options: [
      { id: "a", text: "202" },
      { id: "b", text: "62" },
      { id: "c", text: "232" },
      { id: "d", text: "2,032" }
    ],
    answerId: "c",
    explanation: "8 \u00d7 4 = 32, write 2 carry 3; 5 \u00d7 4 = 20, plus 3 is 23, so the answer is 232.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q12",
    prompt: "What is 305 \u00d7 3?",
    options: [
      { id: "a", text: "95" },
      { id: "b", text: "915" },
      { id: "c", text: "905" },
      { id: "d", text: "308" }
    ],
    answerId: "b",
    explanation: "300 \u00d7 3 = 900, 0 \u00d7 3 = 0 and 5 \u00d7 3 = 15, and 900 + 15 = 915.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q13",
    prompt: "What is 21 \u00d7 13?",
    options: [
      { id: "a", text: "34" },
      { id: "b", text: "263" },
      { id: "c", text: "273" },
      { id: "d", text: "283" }
    ],
    answerId: "c",
    explanation: "21 \u00d7 10 = 210 and 21 \u00d7 3 = 63, and 210 + 63 = 273.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q14",
    prompt: "What is 47 \u00f7 5?",
    options: [
      { id: "a", text: "9 exactly" },
      { id: "b", text: "8 remainder 7" },
      { id: "c", text: "9 remainder 3" },
      { id: "d", text: "9 remainder 2" }
    ],
    answerId: "d",
    explanation: "5 \u00d7 9 = 45 and 47 \u2212 45 = 2; the remainder must be smaller than 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q15",
    prompt: "Find the missing number: ___ \u00d7 8 = 96",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "11" },
      { id: "c", text: "88" },
      { id: "d", text: "104" }
    ],
    answerId: "a",
    explanation: "12 \u00d7 8 = 96, so the missing number is 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q16",
    prompt: "A school hall has 14 rows of chairs with 9 chairs in each row. How many chairs are there?",
    options: [
      { id: "a", text: "23" },
      { id: "b", text: "126" },
      { id: "c", text: "116" },
      { id: "d", text: "136" }
    ],
    answerId: "b",
    explanation: "14 \u00d7 9 = 10 \u00d7 9 + 4 \u00d7 9 = 90 + 36 = 126.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q17",
    prompt: "Kabir saves \u20b915 every week. How much does he save in 12 weeks?",
    options: [
      { id: "a", text: "\u20b927" },
      { id: "b", text: "\u20b9170" },
      { id: "c", text: "\u20b9150" },
      { id: "d", text: "\u20b9180" }
    ],
    answerId: "d",
    explanation: "12 \u00d7 \u20b915 = \u20b9120 + \u20b960 = \u20b9180 (\u20b927 comes from adding).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q18",
    prompt: "88 children make cricket teams of 11 players each. How many teams can they make?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "9" },
      { id: "c", text: "8" },
      { id: "d", text: "77" }
    ],
    answerId: "c",
    explanation: "11 \u00d7 8 = 88, so 88 \u00f7 11 = 8 teams.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q19",
    prompt: "Find the missing number: ___ \u00f7 9 = 8",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "72" },
      { id: "c", text: "63" },
      { id: "d", text: "81" }
    ],
    answerId: "b",
    explanation: "The missing number is 9 \u00d7 8 = 72.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q20",
    prompt: "There are 4 packets with 18 biscuits in each. The biscuits are shared equally among 6 children. How many biscuits does each child get?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "3" },
      { id: "c", text: "28" },
      { id: "d", text: "72" }
    ],
    answerId: "a",
    explanation: "4 \u00d7 18 = 72 biscuits, and 72 \u00f7 6 = 12 each.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q21",
    prompt: "Tara has 75 beads. Each bracelet needs 8 beads. How many full bracelets can she make, and how many beads are left?",
    options: [
      { id: "a", text: "10 bracelets, 0 beads left" },
      { id: "b", text: "9 bracelets, 5 beads left" },
      { id: "c", text: "9 bracelets, 3 beads left" },
      { id: "d", text: "8 bracelets, 11 beads left" }
    ],
    answerId: "c",
    explanation: "8 \u00d7 9 = 72 and 75 \u2212 72 = 3, so 9 full bracelets with 3 beads left over.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q22",
    prompt: "What is 15 \u00d7 15?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "125" },
      { id: "c", text: "215" },
      { id: "d", text: "225" }
    ],
    answerId: "d",
    explanation: "15 \u00d7 10 = 150 and 15 \u00d7 5 = 75, and 150 + 75 = 225.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q23",
    prompt: "I think of a number. I divide it by 4 and then add 5. I get 14. What is my number?",
    options: [
      { id: "a", text: "36" },
      { id: "b", text: "9" },
      { id: "c", text: "76" },
      { id: "d", text: "32" }
    ],
    answerId: "a",
    explanation: "Undo the steps: 14 \u2212 5 = 9, and 9 \u00d7 4 = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-muldiv-b-q24",
    prompt: "A school buys 6 cricket bats at \u20b9245 each and pays with \u20b92,000. How much change does it get back?",
    options: [
      { id: "a", text: "\u20b91,470" },
      { id: "b", text: "\u20b9530" },
      { id: "c", text: "\u20b91,755" },
      { id: "d", text: "\u20b9630" }
    ],
    answerId: "b",
    explanation: "6 \u00d7 \u20b9245 = \u20b91,470, and \u20b92,000 \u2212 \u20b91,470 = \u20b9530.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🥟",
    title: "Equal groups",
    body: [
      "Three plates with four samosas on each: 4 + 4 + 4 = 12.",
      "So 3 × 4 = 12! Multiplying is fast adding of equal groups.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's go!",
    visual: "place-value",
    speak: "Three plates with four samosas on each. Four plus four plus four is twelve. So three times four is twelve!",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Multiplication tricks",
    lead: "Tap each card.",
    visual: "place-value",
    speak: "Rows and columns make an array; turn it around and the total stays the same. Tables are skip counting. Any number times zero is zero, and times one stays the same.",
    cards: [
      { label: "Turn it around", reveal: "3 × 5 = 5 × 3 = 15", emoji: "🔄" },
      { label: "Tables = skip counting", reveal: "9 table digits add to 9: 9 × 7 = 63", emoji: "🐸" },
      { label: "Times zero", reveal: "0 × 75 = 0", emoji: "0️⃣" },
      { label: "Times one", reveal: "1 × 48 = 48", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Multiply 46 × 3",
    visual: "place-value",
    speak: "Multiply the ones first, then the tens. Carry over when you need to! Forty-six times three is one hundred thirty-eight.",
    steps: [
      "Ones: 6 × 3 = 18 → write 8, carry 1 ten",
      "Tens: 4 × 3 = 12 tens, + 1 carried = 13 tens",
      "13 tens = 130, plus 8 → 138",
    ],
    punchline: "Ones first, then tens — don't forget the carry.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is 23 × 4?",
    options: [
      { id: "a", text: "82" },
      { id: "b", text: "92" },
      { id: "c", text: "812" },
      { id: "d", text: "27" },
    ],
    answerId: "b",
    why: "3 × 4 = 12 → write 2, carry 1; 2 × 4 = 8, + 1 = 9 → 92.",
    visual: "place-value",
    speak: "What is twenty-three times four?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Sharing, fact families, leftovers",
    visual: "number-line",
    speak: "Division means sharing equally, or making equal groups. Multiplication and division are partners. Sometimes things don't share equally; what is left over is the remainder, and it is always smaller than the number you divide by.",
    steps: [
      "24 laddoos ÷ 4 friends = 6 each",
      "Fact family: 7 × 8 = 56 → 56 ÷ 8 = 7 and 56 ÷ 7 = 8",
      "Missing number: 8 × ? = 72 → 72 ÷ 8 = 9",
      "26 ÷ 4 = 6 remainder 2 (2 is less than 4)",
    ],
    punchline: "Division undoes multiplication.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "What is thirty-five divided by five?",
    question: {
      id: "g4-muldiv-check",
      prompt: "What is 35 ÷ 5?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "7" },
        { id: "d", text: "8" },
      ],
      answerId: "c",
      explanation: "5 × 7 = 35, so 35 ÷ 5 = 7.",
      hints: ["Think of the 5 table.", "Which number times 5 makes 35?"],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Times-and-share star!",
    bullets: [
      "Multiply = equal groups; order doesn't matter",
      "Ones first, then tens, carry over",
      "Division shares equally; remainder < divisor",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can multiply, divide and find remainders. Set A and Set B are ready.",
  },
];

export const g4MathsMultiplyDivide: ChapterDef = {
  id: "g4-multiply-divide",
  title: "Multiplication & Division",
  emoji: "\u2716\ufe0f",
  blurb: "Tables, carrying, sharing & remainders",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "multiply-basics",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "multiply-basics",
      questions: SET_B,
    },
  ],
  paperTopics: ["multiply-basics", "add-sub"],
};

export const g4MathsMultiplyDivideQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
