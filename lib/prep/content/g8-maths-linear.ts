import type { ChapterDef, PrepQuestion } from "../types";

/** Linear Equations - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-linear-a-q01",
    prompt: "Which of these is an equation?",
    options: [
      { id: "a", text: "3x + 5" },
      { id: "b", text: "2x \u2212 7 = 11" },
      { id: "c", text: "4y" },
      { id: "d", text: "x + y" }
    ],
    answerId: "b",
    explanation: "An equation must have an equals sign with an LHS and an RHS, and the others are only expressions.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q02",
    prompt: "Solve: x + 9 = 4",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "-13" },
      { id: "c", text: "5" },
      { id: "d", text: "-5" }
    ],
    answerId: "d",
    explanation: "Subtracting 9 from both sides gives x = 4 \u2212 9 = \u22125, while 13 wrongly adds 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q03",
    prompt: "Solve: 3x = \u221221",
    options: [
      { id: "a", text: "-7" },
      { id: "b", text: "7" },
      { id: "c", text: "-63" },
      { id: "d", text: "-18" }
    ],
    answerId: "a",
    explanation: "Dividing both sides by 3 gives x = \u221221 \u00f7 3 = \u22127, and the sign must be kept.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q04",
    prompt: "Solve: 2x \u2212 5 = 9",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "14" },
      { id: "c", text: "7" },
      { id: "d", text: "-2" }
    ],
    answerId: "c",
    explanation: "Adding 5 to both sides gives 2x = 14, and dividing by 2 gives x = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q05",
    prompt: "Solve: x/4 = 6",
    options: [
      { id: "a", text: "3/2" },
      { id: "b", text: "24" },
      { id: "c", text: "10" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "Multiplying both sides by 4 gives x = 24, while 3/2 comes from dividing instead.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q06",
    prompt: "Which value of y satisfies 5y + 3 = 18?",
    options: [
      { id: "a", text: "21/5" },
      { id: "b", text: "4" },
      { id: "c", text: "3" },
      { id: "d", text: "15" }
    ],
    answerId: "c",
    explanation: "Substituting y = 3 gives 15 + 3 = 18, so LHS = RHS.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q07",
    prompt: "Solve: 7 \u2212 x = 10",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "-17" },
      { id: "c", text: "17" },
      { id: "d", text: "-3" }
    ],
    answerId: "d",
    explanation: "Taking 7 away from both sides gives \u2212x = 3, so x = \u22123.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q08",
    prompt: "A number increased by 12 is 30. What is the number?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "42" },
      { id: "c", text: "2.5" },
      { id: "d", text: "-18" }
    ],
    answerId: "a",
    explanation: "The equation is n + 12 = 30, so n = 30 \u2212 12 = 18.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q09",
    prompt: "In the equation 4x + 7 = 2x + 15, what is the LHS?",
    options: [
      { id: "a", text: "2x + 15" },
      { id: "b", text: "4x + 7" },
      { id: "c", text: "6x + 22" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "LHS means left-hand side, which is the expression to the left of the equals sign, 4x + 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q10",
    prompt: "Solve: 5x = 2x + 12",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "12/7" },
      { id: "c", text: "4" },
      { id: "d", text: "-4" }
    ],
    answerId: "c",
    explanation: "Subtracting 2x from both sides gives 3x = 12, so x = 4, while 12/7 wrongly adds the x terms.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q11",
    prompt: "Solve: 3(x \u2212 2) = 2x + 5",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "7" },
      { id: "c", text: "-1" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "Opening the bracket gives 3x \u2212 6 = 2x + 5, so x = 5 + 6 = 11, while 7 forgets to multiply 2 by 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q12",
    prompt: "Solve: x/3 + x/6 = 5",
    options: [
      { id: "a", text: "5/2" },
      { id: "b", text: "15" },
      { id: "c", text: "30" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "Multiplying every term by the LCM 6 gives 2x + x = 30, so 3x = 30 and x = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q13",
    prompt: "Solve: 2 \u2212 3(x + 1) = 8",
    options: [
      { id: "a", text: "-1" },
      { id: "b", text: "-3" },
      { id: "c", text: "3" },
      { id: "d", text: "-7/3" }
    ],
    answerId: "b",
    explanation: "\u22123(x + 1) = \u22123x \u2212 3, so 2 \u2212 3x \u2212 3 = 8 gives \u22123x = 9 and x = \u22123, while \u22121 comes from writing +3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q14",
    prompt: "The sum of three consecutive integers is 87. What is the smallest of them?",
    options: [
      { id: "a", text: "27" },
      { id: "b", text: "29" },
      { id: "c", text: "28" },
      { id: "d", text: "30" }
    ],
    answerId: "c",
    explanation: "With n, n + 1 and n + 2, the equation 3n + 3 = 87 gives n = 28, and 29 is the middle number.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q15",
    prompt: "Aarav's father is 3 times as old as Aarav, and the sum of their ages is 52 years. How old is Aarav?",
    options: [
      { id: "a", text: "39 years" },
      { id: "b", text: "17 years" },
      { id: "c", text: "26 years" },
      { id: "d", text: "13 years" }
    ],
    answerId: "d",
    explanation: "With x + 3x = 52 we get 4x = 52, so Aarav is 13, while 39 is the father's age.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q16",
    prompt: "The length of a rectangular garden is 6 cm more than its breadth, and its perimeter is 64 cm. What is the breadth?",
    options: [
      { id: "a", text: "13 cm" },
      { id: "b", text: "10 cm" },
      { id: "c", text: "19 cm" },
      { id: "d", text: "29 cm" }
    ],
    answerId: "a",
    explanation: "2(b + 6 + b) = 64 gives 4b + 12 = 64, so b = 13 cm, while 19 cm is the length.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q17",
    prompt: "Solve: (2x + 1)/3 = (x + 4)/2",
    options: [
      { id: "a", text: "-10" },
      { id: "b", text: "14" },
      { id: "c", text: "10" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "Cross-multiplying gives 2(2x + 1) = 3(x + 4), so 4x + 2 = 3x + 12 and x = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q18",
    prompt: "Solve: 0.4x \u2212 1.2 = 0.2x + 0.6",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "9" },
      { id: "c", text: "0.9" },
      { id: "d", text: "-3" }
    ],
    answerId: "b",
    explanation: "Collecting terms gives 0.2x = 1.8, so x = 1.8 \u00f7 0.2 = 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q19",
    prompt: "For which of these equations is x = \u22122 a solution?",
    options: [
      { id: "a", text: "x/2 = 1" },
      { id: "b", text: "2x \u2212 1 = 3" },
      { id: "c", text: "5 \u2212 x = 3" },
      { id: "d", text: "3x + 4 = \u22122" }
    ],
    answerId: "d",
    explanation: "Substituting x = \u22122 gives 3(\u22122) + 4 = \u22122, so LHS = RHS, while every other equation is solved by x = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q20",
    prompt: "Meera is 5 years older than Kabir. Six years ago, Meera was twice as old as Kabir. How old is Kabir now?",
    options: [
      { id: "a", text: "5 years" },
      { id: "b", text: "11 years" },
      { id: "c", text: "16 years" },
      { id: "d", text: "17 years" }
    ],
    answerId: "b",
    explanation: "Six years ago, (k + 5 \u2212 6) = 2(k \u2212 6), so k \u2212 1 = 2k \u2212 12 and k = 11, while 16 is Meera's age.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q21",
    prompt: "Riya has \u20b9540 in \u20b910 and \u20b920 notes. She has 36 notes in all. How many \u20b920 notes does she have?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "15" },
      { id: "c", text: "21" },
      { id: "d", text: "27" }
    ],
    answerId: "a",
    explanation: "With t notes of \u20b920, 10(36 \u2212 t) + 20t = 540 gives 360 + 10t = 540, so t = 18.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q22",
    prompt: "Sitapur and Ramgarh are 330 km apart. Two buses start at the same time from the two towns towards each other at 50 km/h and 60 km/h. After how many hours do they meet?",
    options: [
      { id: "a", text: "33 hours" },
      { id: "b", text: "5.5 hours" },
      { id: "c", text: "6.6 hours" },
      { id: "d", text: "3 hours" }
    ],
    answerId: "d",
    explanation: "Moving towards each other, they close the gap at 50 + 60 = 110 km/h, so 110t = 330 gives t = 3 hours.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q23",
    prompt: "When 3/5 of a number is subtracted from 2/3 of the same number, the result is 4. What is the number?",
    options: [
      { id: "a", text: "4/15" },
      { id: "b", text: "15" },
      { id: "c", text: "60" },
      { id: "d", text: "20" }
    ],
    answerId: "c",
    explanation: "2/3 \u2212 3/5 = 1/15, so n/15 = 4 gives n = 60.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-a-q24",
    prompt: "Solve: 5 \u2212 2(x \u2212 3) = 3(1 \u2212 x) + 4",
    options: [
      { id: "a", text: "-4" },
      { id: "b", text: "4" },
      { id: "c", text: "8" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "Opening the brackets gives 11 \u2212 2x = 7 \u2212 3x, so x = \u22124, while 8 comes from writing \u22122(x \u2212 3) as \u22122x \u2212 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-linear-b-q01",
    prompt: "Which of these is NOT an equation?",
    options: [
      { id: "a", text: "2a + 3" },
      { id: "b", text: "7y = 21" },
      { id: "c", text: "m \u2212 4 = 0" },
      { id: "d", text: "5 = p/2" }
    ],
    answerId: "a",
    explanation: "2a + 3 has no equals sign, so it is an expression and not an equation.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q02",
    prompt: "Solve: x \u2212 8 = \u22123",
    options: [
      { id: "a", text: "-11" },
      { id: "b", text: "11" },
      { id: "c", text: "5" },
      { id: "d", text: "-5" }
    ],
    answerId: "c",
    explanation: "Adding 8 to both sides gives x = \u22123 + 8 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q03",
    prompt: "Solve: \u22124x = 28",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "24" },
      { id: "c", text: "-112" },
      { id: "d", text: "-7" }
    ],
    answerId: "d",
    explanation: "Dividing both sides by \u22124 gives x = \u22127, because a positive divided by a negative is negative.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q04",
    prompt: "Solve: 3x + 4 = 25",
    options: [
      { id: "a", text: "29/3" },
      { id: "b", text: "7" },
      { id: "c", text: "21" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "Subtracting 4 gives 3x = 21, so x = 7, while 29/3 adds the 4 instead of subtracting it.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q05",
    prompt: "Solve: y/5 = \u22123",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "15" },
      { id: "c", text: "-3/5" },
      { id: "d", text: "-15" }
    ],
    answerId: "d",
    explanation: "Multiplying both sides by 5 gives y = \u221215.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q06",
    prompt: "Which value of m satisfies 6 \u2212 2m = 0?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "-3" },
      { id: "c", text: "6" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "Substituting m = 3 gives 6 \u2212 6 = 0, so LHS = RHS.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q07",
    prompt: "Solve: 12 = x + 15",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "-3" },
      { id: "c", text: "27" },
      { id: "d", text: "-27" }
    ],
    answerId: "b",
    explanation: "Subtracting 15 from both sides gives x = 12 \u2212 15 = \u22123.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q08",
    prompt: "Twice a number decreased by 7 is 13. What is the number?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "20" },
      { id: "c", text: "10" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "The equation 2n \u2212 7 = 13 gives 2n = 20, so n = 10, while 20 forgets to divide by 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q09",
    prompt: "In the equation 9 = 3y \u2212 6, what is the RHS?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "15" },
      { id: "c", text: "3y" },
      { id: "d", text: "3y \u2212 6" }
    ],
    answerId: "d",
    explanation: "RHS means right-hand side, which is the expression to the right of the equals sign, 3y \u2212 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q10",
    prompt: "Solve: 8x = 3x + 35",
    options: [
      { id: "a", text: "35/11" },
      { id: "b", text: "7" },
      { id: "c", text: "5" },
      { id: "d", text: "-7" }
    ],
    answerId: "b",
    explanation: "Subtracting 3x from both sides gives 5x = 35, so x = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q11",
    prompt: "Solve: 4(x + 3) = 2x \u2212 6",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "-3" },
      { id: "c", text: "-9" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "Opening the bracket gives 4x + 12 = 2x \u2212 6, so 2x = \u221218 and x = \u22129, while 9 comes from a sign slip when moving 12 across.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q12",
    prompt: "Solve: x/2 \u2212 x/5 = 9",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "3" },
      { id: "c", text: "27" },
      { id: "d", text: "90" }
    ],
    answerId: "a",
    explanation: "Multiplying by the LCM 10 gives 5x \u2212 2x = 90, so 3x = 90 and x = 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q13",
    prompt: "Solve: 10 \u2212 2(3 \u2212 x) = 14",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "-5" },
      { id: "c", text: "10" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "\u22122(3 \u2212 x) = \u22126 + 2x, so 4 + 2x = 14 gives x = 5, while \u22125 comes from writing \u22122x.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q14",
    prompt: "The sum of three consecutive even integers is 102. What is the largest of them?",
    options: [
      { id: "a", text: "32" },
      { id: "b", text: "36" },
      { id: "c", text: "34" },
      { id: "d", text: "38" }
    ],
    answerId: "b",
    explanation: "With n, n + 2 and n + 4, the equation 3n + 6 = 102 gives n = 32, so the largest is 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q15",
    prompt: "Sana is 4 years younger than her brother, and the sum of their ages is 30 years. How old is Sana?",
    options: [
      { id: "a", text: "13 years" },
      { id: "b", text: "11 years" },
      { id: "c", text: "15 years" },
      { id: "d", text: "17 years" }
    ],
    answerId: "a",
    explanation: "With s + (s + 4) = 30 we get 2s = 26, so Sana is 13, while 17 is her brother's age.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q16",
    prompt: "An isosceles triangle has a perimeter of 50 cm and a base of 14 cm. What is the length of each equal side?",
    options: [
      { id: "a", text: "32 cm" },
      { id: "b", text: "25 cm" },
      { id: "c", text: "18 cm" },
      { id: "d", text: "36 cm" }
    ],
    answerId: "c",
    explanation: "2s + 14 = 50 gives 2s = 36, so each equal side is 18 cm, while 36 cm is the two sides together.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q17",
    prompt: "Solve: (3x \u2212 2)/4 = (x + 1)/3",
    options: [
      { id: "a", text: "10/13" },
      { id: "b", text: "-2" },
      { id: "c", text: "6/5" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "Cross-multiplying gives 3(3x \u2212 2) = 4(x + 1), so 9x \u2212 6 = 4x + 4 and x = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q18",
    prompt: "Solve: 0.5y + 2.5 = 0.3y + 4.1",
    options: [
      { id: "a", text: "32" },
      { id: "b", text: "0.8" },
      { id: "c", text: "8" },
      { id: "d", text: "-8" }
    ],
    answerId: "c",
    explanation: "Collecting terms gives 0.2y = 1.6, so y = 1.6 \u00f7 0.2 = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q19",
    prompt: "For which of these equations is y = 3/2 a solution?",
    options: [
      { id: "a", text: "4y \u2212 1 = 5" },
      { id: "b", text: "2y + 3 = 5" },
      { id: "c", text: "6y = 4" },
      { id: "d", text: "y \u2212 3/2 = 3" }
    ],
    answerId: "a",
    explanation: "Substituting y = 3/2 gives 4 \u00d7 3/2 \u2212 1 = 6 \u2212 1 = 5, so LHS = RHS.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q20",
    prompt: "A father is 26 years older than his son. In 4 years, the father will be 3 times as old as the son. How old is the son now?",
    options: [
      { id: "a", text: "11 years" },
      { id: "b", text: "9 years" },
      { id: "c", text: "13 years" },
      { id: "d", text: "35 years" }
    ],
    answerId: "b",
    explanation: "In 4 years, s + 30 = 3(s + 4), so 2s = 18 and s = 9, while 13 is the son's age in 4 years.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q21",
    prompt: "Dev's piggy bank has only \u20b95 and \u20b92 coins. There are 40 coins worth \u20b9134 in all. How many \u20b95 coins are there?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "22" },
      { id: "c", text: "18" },
      { id: "d", text: "26" }
    ],
    answerId: "c",
    explanation: "With f coins of \u20b95, 5f + 2(40 \u2212 f) = 134 gives 3f + 80 = 134, so f = 18, while 22 is the number of \u20b92 coins.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q22",
    prompt: "Arjun cycles from Chandpur to Devnagar at 12 km/h and comes back by the same road at 8 km/h. The round trip takes 5 hours. How far is Devnagar from Chandpur?",
    options: [
      { id: "a", text: "20 km" },
      { id: "b", text: "48 km" },
      { id: "c", text: "25 km" },
      { id: "d", text: "24 km" }
    ],
    answerId: "d",
    explanation: "d/12 + d/8 = 5 gives 5d/24 = 5, so d = 24 km, while 25 km wrongly uses an average speed of 10 km/h.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q23",
    prompt: "The digits of a two-digit number add up to 9. When the digits are swapped, the new number is 27 more than the original. What is the original number?",
    options: [
      { id: "a", text: "36" },
      { id: "b", text: "27" },
      { id: "c", text: "45" },
      { id: "d", text: "63" }
    ],
    answerId: "a",
    explanation: "With tens digit t, 10(9 \u2212 t) + t = 10t + (9 \u2212 t) + 27 gives t = 3, so the number is 36 and 63 \u2212 36 = 27.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-linear-b-q24",
    prompt: "Solve: (x \u2212 1)/2 \u2212 (x \u2212 2)/3 = 1",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "5" },
      { id: "c", text: "1" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "Multiplying by 6 gives 3(x \u2212 1) \u2212 2(x \u2212 2) = 6, so x + 1 = 6 and x = 5, while 13 comes from writing \u22122(x \u2212 2) as \u22122x \u2212 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud835\udc65",
    title: "Linear equations",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "balance",
    speak: "A linear equation has the unknown to power one. Keep both sides balanced.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "balance",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Balance", reveal: "Same change on both sides", emoji: "\u2696\ufe0f" },
      { label: "Inverse ops", reveal: "Undo + with -, undo x with /", emoji: "\ud83d\udd04" },
      { label: "Isolate x", reveal: "Peel layers carefully", emoji: "\ud83c\udfaf" },
      { label: "Check", reveal: "Substitute back", emoji: "\u2705" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Solve x + 7 = 15",
    options: [
        { id: "a", text: "8" },
        { id: "b", text: "22" },
        { id: "c", text: "7" },
        { id: "d", text: "15" }
    ],
    answerId: "a",
    why: "Subtract 7 from both sides: x = 8.",
    visual: "balance",
    speak: "Solve x + 7 = 15",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Balance both sides", "Use inverse ops", "Check your answer", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8MathsLinear: ChapterDef = {
  id: "linear-equations",
  title: "Linear Equations",
  emoji: "\ud835\udc65",
  blurb: "Solve for x",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "linear-lite",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "linear-lite",
      questions: SET_B,
    },
  ],
  paperTopics: ["linear-lite", "fractions"],
};

export const g8MathsLinearQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
