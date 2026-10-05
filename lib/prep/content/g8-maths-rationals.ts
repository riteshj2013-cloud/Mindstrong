import type { ChapterDef, PrepQuestion } from "../types";

/** Rational Numbers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-rational-a-q01",
    prompt: "Which of these is NOT a rational number?",
    options: [
      { id: "a", text: "-3/7" },
      { id: "b", text: "0" },
      { id: "c", text: "5/0" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "A rational number p/q needs q \u2260 0, so 5/0 is not defined and is not rational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q02",
    prompt: "What is the standard form of 9/-12?",
    options: [
      { id: "a", text: "-3/4" },
      { id: "b", text: "3/-4" },
      { id: "c", text: "3/4" },
      { id: "d", text: "-9/12" }
    ],
    answerId: "a",
    explanation: "Standard form needs a positive denominator and no common factor, so 9/-12 becomes -9/12 and then -3/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q03",
    prompt: "What is the additive inverse of -5/8?",
    options: [
      { id: "a", text: "-8/5" },
      { id: "b", text: "8/5" },
      { id: "c", text: "-5/8" },
      { id: "d", text: "5/8" }
    ],
    answerId: "d",
    explanation: "The additive inverse is the number that gives 0 when added, and -5/8 + 5/8 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q04",
    prompt: "What is the multiplicative inverse of -2/7?",
    options: [
      { id: "a", text: "7/2" },
      { id: "b", text: "-7/2" },
      { id: "c", text: "2/7" },
      { id: "d", text: "-2/7" }
    ],
    answerId: "b",
    explanation: "(-2/7) \u00d7 (-7/2) = 1, so the reciprocal keeps the negative sign.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q05",
    prompt: "What is (-3/5) + (1/5)?",
    options: [
      { id: "a", text: "-4/5" },
      { id: "b", text: "-2/10" },
      { id: "c", text: "2/5" },
      { id: "d", text: "-2/5" }
    ],
    answerId: "d",
    explanation: "With like denominators we add the numerators, and -3 + 1 = -2, so the answer is -2/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q06",
    prompt: "Which number is the additive identity for rational numbers?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "0" },
      { id: "c", text: "-1" },
      { id: "d", text: "No such number exists" }
    ],
    answerId: "b",
    explanation: "Adding 0 to any rational number leaves it unchanged, so 0 is the additive identity.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q07",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Every integer is a rational number" },
      { id: "b", text: "Every rational number is an integer" },
      { id: "c", text: "0 is not a rational number" },
      { id: "d", text: "Every rational number is a natural number" }
    ],
    answerId: "a",
    explanation: "Any integer n can be written as n/1, so every integer is rational, but not every rational is an integer.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q08",
    prompt: "What is (-4/9) \u00d7 (3/2)?",
    options: [
      { id: "a", text: "-8/27" },
      { id: "b", text: "2/3" },
      { id: "c", text: "-2/3" },
      { id: "d", text: "-1/3" }
    ],
    answerId: "c",
    explanation: "(-4 \u00d7 3)/(9 \u00d7 2) = -12/18 = -2/3, while -8/27 is the result of dividing instead of multiplying.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q09",
    prompt: "On the number line, between which two integers does -3/4 lie?",
    options: [
      { id: "a", text: "0 and 1" },
      { id: "b", text: "-1 and 0" },
      { id: "c", text: "-2 and -1" },
      { id: "d", text: "3 and 4" }
    ],
    answerId: "b",
    explanation: "-3/4 is three quarters of a unit to the left of 0, so it lies between -1 and 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q10",
    prompt: "Which of these is equivalent to -2/3?",
    options: [
      { id: "a", text: "-10/15" },
      { id: "b", text: "10/-12" },
      { id: "c", text: "-4/9" },
      { id: "d", text: "2/3" }
    ],
    answerId: "a",
    explanation: "Multiplying the numerator and denominator of -2/3 by 5 gives -10/15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q11",
    prompt: "Which is greater: -5/6 or -7/9?",
    options: [
      { id: "a", text: "-5/6" },
      { id: "b", text: "They cannot be compared" },
      { id: "c", text: "Both are equal" },
      { id: "d", text: "-7/9" }
    ],
    answerId: "d",
    explanation: "With denominator 18 they become -15/18 and -14/18, and -14/18 is closer to zero, so -7/9 is greater.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q12",
    prompt: "What is 2/3 \u2212 (\u22125/6)?",
    options: [
      { id: "a", text: "-1/6" },
      { id: "b", text: "1/6" },
      { id: "c", text: "3/2" },
      { id: "d", text: "7/9" }
    ],
    answerId: "c",
    explanation: "Subtracting a negative means adding, so 4/6 + 5/6 = 9/6 = 3/2, while -1/6 comes from ignoring the double negative.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q13",
    prompt: "What is (-7/12) \u00f7 (14/9)?",
    options: [
      { id: "a", text: "-3/8" },
      { id: "b", text: "-49/54" },
      { id: "c", text: "-8/3" },
      { id: "d", text: "3/8" }
    ],
    answerId: "a",
    explanation: "Dividing means multiplying by the reciprocal, so (-7/12) \u00d7 (9/14) = -63/168 = -3/8, while -49/54 forgets to flip 14/9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q14",
    prompt: "Which property is shown by 3/4 \u00d7 (2/5 + (-1/3)) = 3/4 \u00d7 2/5 + 3/4 \u00d7 (-1/3)?",
    options: [
      { id: "a", text: "Commutativity" },
      { id: "b", text: "Associativity" },
      { id: "c", text: "Closure" },
      { id: "d", text: "Distributivity of multiplication over addition" }
    ],
    answerId: "d",
    explanation: "Multiplying 3/4 into each term of the bracket is the distributive property.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q15",
    prompt: "Which of these sets is NOT closed under subtraction?",
    options: [
      { id: "a", text: "Rational numbers" },
      { id: "b", text: "Natural numbers" },
      { id: "c", text: "Integers" },
      { id: "d", text: "All of these are closed" }
    ],
    answerId: "b",
    explanation: "3 \u2212 5 = \u22122 is not a natural number, so natural numbers are not closed under subtraction, while integers and rationals are.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q16",
    prompt: "Which list shows -1/2, -2/3 and -3/4 in ascending order?",
    options: [
      { id: "a", text: "-1/2, -2/3, -3/4" },
      { id: "b", text: "-3/4, -1/2, -2/3" },
      { id: "c", text: "-2/3, -3/4, -1/2" },
      { id: "d", text: "-3/4, -2/3, -1/2" }
    ],
    answerId: "d",
    explanation: "In twelfths they are -6/12, -8/12 and -9/12, so from smallest to largest the order is -3/4, -2/3, -1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q17",
    prompt: "Which of these lies between -1/3 and 1/4?",
    options: [
      { id: "a", text: "-1/2" },
      { id: "b", text: "1/3" },
      { id: "c", text: "0" },
      { id: "d", text: "-2/5" }
    ],
    answerId: "c",
    explanation: "-1/3 is negative and 1/4 is positive, so 0 lies between them, while -1/2 and -2/5 are both less than -1/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q18",
    prompt: "What should be added to -3/8 to get 1?",
    options: [
      { id: "a", text: "11/8" },
      { id: "b", text: "5/8" },
      { id: "c", text: "-5/8" },
      { id: "d", text: "8/11" }
    ],
    answerId: "a",
    explanation: "The missing number is 1 \u2212 (\u22123/8) = 8/8 + 3/8 = 11/8, while 5/8 wrongly treats -3/8 as positive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q19",
    prompt: "What is (-2/3) \u00d7 (3/4) \u00d7 (-8/5)?",
    options: [
      { id: "a", text: "-4/5" },
      { id: "b", text: "4/5" },
      { id: "c", text: "16/15" },
      { id: "d", text: "-5/4" }
    ],
    answerId: "b",
    explanation: "Two negative factors make the product positive, and (2 \u00d7 3 \u00d7 8)/(3 \u00d7 4 \u00d7 5) = 48/60 = 4/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q20",
    prompt: "The water tank of Rampur village is 3/4 full. In the morning, 2/5 of the tank's capacity is used, and later 1/6 of the capacity is refilled. What fraction of the tank is full now?",
    options: [
      { id: "a", text: "2/15" },
      { id: "b", text: "11/60" },
      { id: "c", text: "37/60" },
      { id: "d", text: "31/60" }
    ],
    answerId: "d",
    explanation: "With denominator 60, 45/60 \u2212 24/60 + 10/60 = 31/60, while 11/60 wrongly subtracts the refill.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q21",
    prompt: "What is the value of (-5/7) \u00d7 (3/11) + (-5/7) \u00d7 (8/11)?",
    options: [
      { id: "a", text: "-5/7" },
      { id: "b", text: "-15/77" },
      { id: "c", text: "-40/77" },
      { id: "d", text: "5/7" }
    ],
    answerId: "a",
    explanation: "Taking out -5/7 as a common factor gives (-5/7) \u00d7 (3/11 + 8/11) = (-5/7) \u00d7 1 = -5/7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q22",
    prompt: "How many rational numbers of the form p/10, where p is an integer, lie strictly between -1/2 and 1/2?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "9" },
      { id: "d", text: "11" }
    ],
    answerId: "c",
    explanation: "-1/2 = -5/10 and 1/2 = 5/10, so p can be any integer from -4 to 4, which gives 9 values.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q23",
    prompt: "If x = -3/2, what is x + (1/x)?",
    options: [
      { id: "a", text: "13/6" },
      { id: "b", text: "-13/6" },
      { id: "c", text: "-5/6" },
      { id: "d", text: "-1" }
    ],
    answerId: "b",
    explanation: "1/x = -2/3, so x + 1/x = -9/6 \u2212 4/6 = -13/6, while -5/6 forgets that the reciprocal is also negative.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-a-q24",
    prompt: "The product of two rational numbers is -15/28. One of them is 5/-7. What is the other?",
    options: [
      { id: "a", text: "3/4" },
      { id: "b", text: "-3/4" },
      { id: "c", text: "75/196" },
      { id: "d", text: "-4/3" }
    ],
    answerId: "a",
    explanation: "The other number is (-15/28) \u00f7 (-5/7) = (15/28) \u00d7 (7/5) = 3/4, which is positive because negative \u00f7 negative is positive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-rational-b-q01",
    prompt: "Which of these is a rational number but NOT an integer?",
    options: [
      { id: "a", text: "-7" },
      { id: "b", text: "0" },
      { id: "c", text: "12/4" },
      { id: "d", text: "-7/3" }
    ],
    answerId: "d",
    explanation: "12/4 simplifies to the integer 3, but -7/3 cannot be simplified to a whole number, so it is rational but not an integer.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q02",
    prompt: "What is the standard form of -15/-25?",
    options: [
      { id: "a", text: "-3/5" },
      { id: "b", text: "3/5" },
      { id: "c", text: "15/25" },
      { id: "d", text: "3/-5" }
    ],
    answerId: "b",
    explanation: "The two negatives cancel to give 15/25, which simplifies to 3/5 when divided by 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q03",
    prompt: "What is the additive inverse of 4/-9?",
    options: [
      { id: "a", text: "-4/9" },
      { id: "b", text: "9/4" },
      { id: "c", text: "4/9" },
      { id: "d", text: "-9/4" }
    ],
    answerId: "c",
    explanation: "4/-9 equals -4/9, and adding 4/9 to it gives 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q04",
    prompt: "What is the reciprocal of -5/6?",
    options: [
      { id: "a", text: "-6/5" },
      { id: "b", text: "6/5" },
      { id: "c", text: "5/6" },
      { id: "d", text: "-5/6" }
    ],
    answerId: "a",
    explanation: "(-5/6) \u00d7 (-6/5) = 1, so the reciprocal is -6/5 with the sign kept.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q05",
    prompt: "What is 7/10 + (-3/10) in simplest form?",
    options: [
      { id: "a", text: "4/20" },
      { id: "b", text: "1" },
      { id: "c", text: "-2/5" },
      { id: "d", text: "2/5" }
    ],
    answerId: "d",
    explanation: "7 \u2212 3 = 4 gives 4/10, which simplifies to 2/5, while 4/20 wrongly adds the denominators.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q06",
    prompt: "Which number is the multiplicative identity for rational numbers?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "-1" },
      { id: "c", text: "1" },
      { id: "d", text: "1/2" }
    ],
    answerId: "c",
    explanation: "Multiplying any rational number by 1 leaves it unchanged, so 1 is the multiplicative identity.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q07",
    prompt: "Which rational number has NO multiplicative inverse?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "-1" },
      { id: "d", text: "1/2" }
    ],
    answerId: "a",
    explanation: "No number multiplied by 0 gives 1, so 0 has no reciprocal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q08",
    prompt: "What is (-5/6) \u00d7 (-3/10)?",
    options: [
      { id: "a", text: "-1/4" },
      { id: "b", text: "1/4" },
      { id: "c", text: "25/9" },
      { id: "d", text: "1/2" }
    ],
    answerId: "b",
    explanation: "Negative \u00d7 negative is positive, and 15/60 = 1/4, while 25/9 is the result of dividing instead.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q09",
    prompt: "On the number line, between which two integers does 5/-3 lie?",
    options: [
      { id: "a", text: "1 and 2" },
      { id: "b", text: "-1 and 0" },
      { id: "c", text: "-2 and -1" },
      { id: "d", text: "-3 and -2" }
    ],
    answerId: "c",
    explanation: "5/-3 = -5/3, which is -1 and 2/3, so it lies between -2 and -1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q10",
    prompt: "Which of these is equivalent to 3/-7?",
    options: [
      { id: "a", text: "12/28" },
      { id: "b", text: "-12/28" },
      { id: "c", text: "-3/-7" },
      { id: "d", text: "-9/14" }
    ],
    answerId: "b",
    explanation: "3/-7 = -3/7, and multiplying the top and bottom by 4 gives -12/28.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q11",
    prompt: "Which is greater: -3/8 or -2/5?",
    options: [
      { id: "a", text: "-3/8" },
      { id: "b", text: "-2/5" },
      { id: "c", text: "Both are equal" },
      { id: "d", text: "They cannot be compared" }
    ],
    answerId: "a",
    explanation: "With denominator 40 they become -15/40 and -16/40, and -15/40 is closer to zero, so -3/8 is greater.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q12",
    prompt: "What is (-5/12) \u2212 (3/8)?",
    options: [
      { id: "a", text: "-8/20" },
      { id: "b", text: "-1/24" },
      { id: "c", text: "19/24" },
      { id: "d", text: "-19/24" }
    ],
    answerId: "d",
    explanation: "With LCM 24 this is -10/24 \u2212 9/24 = -19/24, while -1/24 wrongly adds 9/24 instead of subtracting it.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q13",
    prompt: "What is (-9/16) \u00f7 (-3/4)?",
    options: [
      { id: "a", text: "-3/4" },
      { id: "b", text: "3/4" },
      { id: "c", text: "27/64" },
      { id: "d", text: "4/3" }
    ],
    answerId: "b",
    explanation: "(-9/16) \u00d7 (-4/3) = 36/48 = 3/4, which is positive because there are two negatives.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q14",
    prompt: "Which property is shown by (-2/3 + 1/4) + 5/6 = -2/3 + (1/4 + 5/6)?",
    options: [
      { id: "a", text: "Commutativity of addition" },
      { id: "b", text: "Distributivity" },
      { id: "c", text: "Associativity of addition" },
      { id: "d", text: "Additive identity" }
    ],
    answerId: "c",
    explanation: "The numbers stay in the same order and only the grouping changes, which is associativity.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q15",
    prompt: "Which of these statements is FALSE?",
    options: [
      { id: "a", text: "Integers are closed under division" },
      { id: "b", text: "Rational numbers are closed under multiplication" },
      { id: "c", text: "Addition of rational numbers is commutative" },
      { id: "d", text: "0 is a rational number" }
    ],
    answerId: "a",
    explanation: "1 \u00f7 2 = 1/2 is not an integer, so integers are not closed under division.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q16",
    prompt: "Which list shows 2/3, 5/8 and 3/4 in descending order?",
    options: [
      { id: "a", text: "3/4, 5/8, 2/3" },
      { id: "b", text: "2/3, 3/4, 5/8" },
      { id: "c", text: "5/8, 2/3, 3/4" },
      { id: "d", text: "3/4, 2/3, 5/8" }
    ],
    answerId: "d",
    explanation: "In twenty-fourths they are 16/24, 15/24 and 18/24, so from largest to smallest the order is 3/4, 2/3, 5/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q17",
    prompt: "Which of these lies between -1/2 and -1/3?",
    options: [
      { id: "a", text: "-1/4" },
      { id: "b", text: "-5/12" },
      { id: "c", text: "-3/5" },
      { id: "d", text: "1/3" }
    ],
    answerId: "b",
    explanation: "In twelfths, -1/2 = -6/12 and -1/3 = -4/12, so -5/12 lies between them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q18",
    prompt: "What should be subtracted from -2/3 to get 1/6?",
    options: [
      { id: "a", text: "-1/2" },
      { id: "b", text: "5/6" },
      { id: "c", text: "-5/6" },
      { id: "d", text: "1/2" }
    ],
    answerId: "c",
    explanation: "If -2/3 \u2212 x = 1/6, then x = -2/3 \u2212 1/6 = -5/6, and -1/2 is the trap of adding 1/6 to -2/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q19",
    prompt: "What is (-3/4) \u00d7 (8/9) \u00d7 (-3/2)?",
    options: [
      { id: "a", text: "-2/3" },
      { id: "b", text: "-1" },
      { id: "c", text: "3/2" },
      { id: "d", text: "1" }
    ],
    answerId: "d",
    explanation: "The two negatives make the product positive, and (3 \u00d7 8 \u00d7 3)/(4 \u00d7 9 \u00d7 2) = 72/72 = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q20",
    prompt: "On Lakshmi's farm in Kesarpur, 2/5 of the land grows wheat, 1/3 grows rice and the remaining 12 acres grow vegetables. How big is the farm?",
    options: [
      { id: "a", text: "45 acres" },
      { id: "b", text: "36 acres" },
      { id: "c", text: "30 acres" },
      { id: "d", text: "60 acres" }
    ],
    answerId: "a",
    explanation: "Vegetables use 1 \u2212 2/5 \u2212 1/3 = 4/15 of the farm, so the farm is 12 \u00f7 4/15 = 45 acres.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q21",
    prompt: "What is the value of (7/9) \u00d7 (-4/5) \u2212 (7/9) \u00d7 (1/5)?",
    options: [
      { id: "a", text: "7/9" },
      { id: "b", text: "-7/9" },
      { id: "c", text: "-7/15" },
      { id: "d", text: "-28/45" }
    ],
    answerId: "b",
    explanation: "Taking 7/9 out as a common factor gives (7/9) \u00d7 (-4/5 \u2212 1/5) = (7/9) \u00d7 (-1) = -7/9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q22",
    prompt: "How many rational numbers of the form p/6, where p is an integer, lie strictly between -1 and 1/2?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "9" },
      { id: "c", text: "8" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "-1 = -6/6 and 1/2 = 3/6, so p can be any integer from -5 to 2, which gives 8 values.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q23",
    prompt: "If x = -2/5 and y = 3/4, what is (x \u2212 y) \u00f7 (x \u00d7 y)?",
    options: [
      { id: "a", text: "23/6" },
      { id: "b", text: "-23/6" },
      { id: "c", text: "-7/6" },
      { id: "d", text: "6/23" }
    ],
    answerId: "a",
    explanation: "x \u2212 y = -23/20 and x \u00d7 y = -3/10, so (-23/20) \u00f7 (-3/10) = 23/6, while -7/6 uses x + y instead.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-rational-b-q24",
    prompt: "The sum of two rational numbers is -3/4. One of them is 5/6. What is the other?",
    options: [
      { id: "a", text: "-8/10" },
      { id: "b", text: "1/12" },
      { id: "c", text: "19/12" },
      { id: "d", text: "-19/12" }
    ],
    answerId: "d",
    explanation: "The other number is -3/4 \u2212 5/6 = -9/12 \u2212 10/12 = -19/12, while 1/12 subtracts in the wrong order.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd22",
    title: "Rational numbers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "A rational number can be written as p/q where q is not zero.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Definition", reveal: "p/q with q not zero", emoji: "\u2797" },
      { label: "Standard form", reveal: "Lowest terms; positive denominator", emoji: "\u2728" },
      { label: "Operations", reveal: "Add, subtract, multiply, divide", emoji: "\ud83e\uddee" },
      { label: "Number line", reveal: "Between integers too", emoji: "\ud83d\udccd" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which is rational?",
    options: [
        { id: "a", text: "3/4" },
        { id: "b", text: "pi only as non-ratio" },
        { id: "c", text: "square root of 2 as non-ratio" },
        { id: "d", text: "None" }
    ],
    answerId: "a",
    why: "3/4 is p/q with integers.",
    visual: "number-line",
    speak: "Which is rational?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["p/q form", "Standard form", "Watch signs", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8MathsRationals: ChapterDef = {
  id: "rational-numbers",
  title: "Rational Numbers",
  emoji: "\ud83d\udd22",
  blurb: "p/q on the number line",
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
  paperTopics: ["fractions", "linear-lite"],
};

export const g8MathsRationalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
