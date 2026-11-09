import type { ChapterDef, PrepQuestion } from "../types";

/** Simple Equations - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-maths-equations-a-q01",
    prompt: "Solve: x + 7 = 15.",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "22" },
      { id: "c", text: "7" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "Subtract 7 from both sides: x = 8. 7 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 8. 7 is tempting if you stop one step early or reverse a step, but the correct result is 8.",
    hints: ["Take 7 away from both sides of x + 7 = 15."]
  },
  {
    id: "g7-maths-equations-a-q02",
    prompt: "Solve: y \u2212 9 = 4.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "13" },
      { id: "c", text: "\u22125" },
      { id: "d", text: "36" }
    ],
    answerId: "b",
    explanation: "Add 9: y = 13. 5 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 13. 5 is tempting if you stop one step early or reverse a step, but the correct result is 13.",
    hints: ["Add 9 to both sides of y − 9 = 4."]
  },
  {
    id: "g7-maths-equations-a-q03",
    prompt: "Solve: 3m = 21.",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "63" },
      { id: "c", text: "7" },
      { id: "d", text: "24" }
    ],
    answerId: "c",
    explanation: "Divide both sides by 3: m = 7. 18 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 7. 18 is tempting if you stop one step early or reverse a step, but the correct result is 7.",
    hints: ["Divide both sides of 3m = 21 by 3."]
  },
  {
    id: "g7-maths-equations-a-q04",
    prompt: "Solve: n/5 = 6.",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "1" },
      { id: "c", text: "5/6" },
      { id: "d", text: "30" }
    ],
    answerId: "d",
    explanation: "Multiply both sides by 5: n = 30. 11 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 30. 11 is tempting if you stop one step early or reverse a step, but the correct result is 30.",
    hints: ["Multiply both sides of n/5 = 6 by 5."]
  },
  {
    id: "g7-maths-equations-a-q05",
    prompt: "Solve: 2x + 3 = 11.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "14" }
    ],
    answerId: "a",
    explanation: "2x = 8, so x = 4. 7 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 4. 7 is tempting if you stop one step early or reverse a step, but the correct result is 4.",
    hints: ["Subtract 3 first, then divide by 2."]
  },
  {
    id: "g7-maths-equations-a-q06",
    prompt: "Solve: 5p \u2212 4 = 16.",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "4" },
      { id: "c", text: "3" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "5p = 20, p = 4. 3 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 4. 3 is tempting if you stop one step early or reverse a step, but the correct result is 4.",
    hints: ["Undo the subtraction first, so 5p equals 16 plus the amount taken away. Then divide by 5."]
  },
  {
    id: "g7-maths-equations-a-q07",
    prompt: "Which is a solution of x \u2212 2 = 10?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "20" },
      { id: "c", text: "12" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "12 − 2 = 10. 8 is tempting if you stop one step early or reverse a step, but the correct result is 12.",
    hints: ["Add 2 to both sides of x − 2 = 10. Then check your value in the equation."]
  },
  {
    id: "g7-maths-equations-a-q08",
    prompt: "Translate: \u201cA number increased by 6 is 19.\u201d",
    options: [
      { id: "a", text: "x \u2212 6 = 19" },
      { id: "b", text: "6x = 19" },
      { id: "c", text: "x/6 = 19" },
      { id: "d", text: "x + 6 = 19" }
    ],
    answerId: "d",
    explanation: "Increased by means add. x − 6 = 19 is tempting if you stop one step early or reverse a step, but the correct result is x + 6 = 19.",
    hints: ["“Increased by” → +."]
  },
  {
    id: "g7-maths-equations-a-q09",
    prompt: "Translate: \u201cThrice a number is 27.\u201d",
    options: [
      { id: "a", text: "3x = 27" },
      { id: "b", text: "x + 3 = 27" },
      { id: "c", text: "x/3 = 27" },
      { id: "d", text: "x \u2212 3 = 27" }
    ],
    answerId: "a",
    explanation: "Thrice means three times. x + 3 = 27 is tempting if you stop one step early or reverse a step, but the correct result is 3x = 27.",
    hints: ["Thrice → multiply by 3."]
  },
  {
    id: "g7-maths-equations-a-q10",
    prompt: "Solve: \u2212x = 8.",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "\u22128" },
      { id: "c", text: "0" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Multiply both sides by −1: x = −8. 0 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives −8. 0 is tempting if you stop one step early or reverse a step, but the correct result is −8.",
    hints: ["Multiply both sides by −1 so that x is on its own."]
  },
  {
    id: "g7-maths-equations-a-q11",
    prompt: "Solve: 4(x \u2212 1) = 20.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "21" }
    ],
    answerId: "c",
    explanation: "x − 1 = 5, so x = 6. 5 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 6. 5 is tempting if you stop one step early or reverse a step, but the correct result is 6.",
    hints: ["Divide by 4, then add 1."]
  },
  {
    id: "g7-maths-equations-a-q12",
    prompt: "Solve: (x/3) + 2 = 5.",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "3" },
      { id: "c", text: "15" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "x/3 = 3, so x = 9. 7 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 9. 7 is tempting if you stop one step early or reverse a step, but the correct result is 9.",
    hints: ["Subtract 2, then multiply by 3."]
  },
  {
    id: "g7-maths-equations-a-q13",
    prompt: "If 7 is added to twice a number, the result is 25. The number is?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "18" },
      { id: "c", text: "32" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "2x + 7 = 25 → 2x = 18 → x = 9. 4 is tempting if you stop one step early or reverse a step, but the correct result is 9.",
    hints: ["Write 2n + 7 = 25. Take 7 from both sides, then halve."]
  },
  {
    id: "g7-maths-equations-a-q14",
    prompt: "Solve: 10 \u2212 x = 3.",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "7" },
      { id: "c", text: "\u22127" },
      { id: "d", text: "30" }
    ],
    answerId: "b",
    explanation: "−x = 3 − 10 = −7, so x = 7. Or: x = 10 − 3. 13 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 7. 13 is tempting if you stop one step early or reverse a step, but the correct result is 7.",
    hints: ["Move x or rearrange to isolate it."]
  },
  {
    id: "g7-maths-equations-a-q15",
    prompt: "Which equation has solution x = 0?",
    options: [
      { id: "a", text: "x + 5 = 0" },
      { id: "b", text: "x \u2212 5 = 0" },
      { id: "c", text: "5x = 0" },
      { id: "d", text: "x/5 = 1" }
    ],
    answerId: "c",
    explanation: "5 × 0 = 0. x + 5 = 0 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 5x = 0. x + 5 = 0 is tempting if you stop one step early or reverse a step, but the correct result is 5x = 0.",
    hints: ["Plug x = 0 into each equation."]
  },
  {
    id: "g7-maths-equations-a-q16",
    prompt: "Solve: 6x = \u221218.",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "\u221212" },
      { id: "c", text: "108" },
      { id: "d", text: "\u22123" }
    ],
    answerId: "d",
    explanation: "x = −18/6 = −3. 3 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives −3. 3 is tempting if you stop one step early or reverse a step, but the correct result is −3.",
    hints: ["Divide both sides by 6."]
  },
  {
    id: "g7-maths-equations-a-q17",
    prompt: "Solve: x/2 \u2212 5 = 1.",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "8" },
      { id: "c", text: "6" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "x/2 = 6, x = 12. 8 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 12. 8 is tempting if you stop one step early or reverse a step, but the correct result is 12.",
    hints: ["Add 5, then multiply by 2."]
  },
  {
    id: "g7-maths-equations-a-q18",
    prompt: "A number minus 12 equals \u22125. The number is?",
    options: [
      { id: "a", text: "\u22127" },
      { id: "b", text: "7" },
      { id: "c", text: "17" },
      { id: "d", text: "\u221217" }
    ],
    answerId: "b",
    explanation: "x − 12 = −5 → x = 7. 17 is tempting if you stop one step early or reverse a step, but the correct result is 7.",
    hints: ["Add 12 to both sides."]
  },
  {
    id: "g7-maths-equations-a-q19",
    prompt: "Solve: 3x + x = 20.",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "20" }
    ],
    answerId: "c",
    explanation: "4x = 20, x = 5. 4 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 5. 4 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["First combine 3x + x into one term. Then divide 20 by its coefficient."]
  },
  {
    id: "g7-maths-equations-a-q20",
    prompt: "Solve: 2x \u2212 x + 4 = 9.",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "4.5" },
      { id: "c", text: "\u22125" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "x + 4 = 9, x = 5. 4. 4.5 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 5. 4.5 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["Simplify 2x − x first. Then take 4 from both sides of the equation."]
  },
  {
    id: "g7-maths-equations-a-q21",
    prompt: "If x = 3 satisfies kx + 1 = 10, then k = ?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "9" },
      { id: "c", text: "1" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "3k + 1 = 10 → 3k = 9 → k = 3. 1 is tempting if you stop one step early or reverse a step, but the correct result is 3.",
    hints: ["Substitute the known value of x."]
  },
  {
    id: "g7-maths-equations-a-q22",
    prompt: "Solve: 5(x + 2) = 5x + 10.",
    options: [
      { id: "a", text: "x = 0 only" },
      { id: "b", text: "All real numbers (identity)" },
      { id: "c", text: "x = 2 only" },
      { id: "d", text: "No solution" }
    ],
    answerId: "b",
    explanation: "Expanding gives 5x + 10 = 5x + 10 — always true. x = 0 only is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives All real numbers (identity). x = 0 only is tempting if you stop one step early or reverse a step, but the correct result is All real numbers (identity).",
    hints: ["If both sides match for every x, it is an identity."]
  },
  {
    id: "g7-maths-equations-a-q23",
    prompt: "Solve: 2x + 5 = 2x + 9.",
    options: [
      { id: "a", text: "x = 0" },
      { id: "b", text: "x = 2" },
      { id: "c", text: "No solution" },
      { id: "d", text: "All real numbers" }
    ],
    answerId: "c",
    explanation: "Subtract 2x: 5 = 9, which is false. No solution. x = 0 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives No solution. x = 0 is tempting if you stop one step early or reverse a step, but the correct result is No solution.",
    hints: ["Subtract 2x from both sides of 2x + 5 = 2x + 9. Is what remains ever true?"]
  },
  {
    id: "g7-maths-equations-a-q24",
    prompt: "Meera has \u20b9x. After spending \u20b940 she has \u20b9110. Find x.",
    options: [
      { id: "a", text: "70" },
      { id: "b", text: "40" },
      { id: "c", text: "110" },
      { id: "d", text: "150" }
    ],
    answerId: "d",
    explanation: "x − 40 = 110 → x = 150. 110 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 15. 110 is tempting if you stop one step early or reverse a step, but the correct result is 15.",
    hints: ["Spending subtracts from the total."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-maths-equations-b-q01",
    prompt: "Solve: 7x \u2212 3 = 4x + 12.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "9" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "7x − 4x = 12 + 3 → 3x = 15 → x = 5. 3 is tempting if you move a term the wrong way or forget to do the same to both sides. 3 is tempting if you stop one step early or reverse a step, but the correct result is 5.",
    hints: ["Take 4x from both sides and add 3 to both sides. Then divide by the coefficient of x."]
  },
  {
    id: "g7-maths-equations-b-q02",
    prompt: "Solve: 3(x \u2212 4) = 2(x + 1).",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "14" },
      { id: "c", text: "\u221214" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "3x − 12 = 2x + 2 → x = 14. 10 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 14. 10 is tempting if you stop one step early or reverse a step, but the correct result is 14.",
    hints: ["Expand both brackets: 3x − 12 = 2x + 2. Then collect the x terms on one side."]
  },
  {
    id: "g7-maths-equations-b-q03",
    prompt: "The sum of three consecutive integers starting at n is 54. Find n.",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "16" },
      { id: "c", text: "17" },
      { id: "d", text: "15" }
    ],
    answerId: "c",
    explanation: "n + (n+1) + (n+2) = 54 → 3n + 3 = 54 → n = 17. 16 is tempting if you stop one step early or reverse a step, but the correct result is 17.",
    hints: ["Consecutive integers differ by 1."]
  },
  {
    id: "g7-maths-equations-b-q04",
    prompt: "Solve: x/4 = x/6 + 1.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "24" },
      { id: "c", text: "2" },
      { id: "d", text: "12" }
    ],
    answerId: "d",
    explanation: "Multiply by 12: 3x = 2x + 12 → x = 12. 6 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 12. 6 is tempting if you stop one step early or reverse a step, but the correct result is 12.",
    hints: ["Multiply every term by the LCM of 4 and 6 to clear the fractions, then solve."]
  },
  {
    id: "g7-maths-equations-b-q05",
    prompt: "A number when multiplied by 5 and then decreased by 8 gives 27. Number?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "5" },
      { id: "c", text: "35" },
      { id: "d", text: "19" }
    ],
    answerId: "a",
    explanation: "5x − 8 = 27 → 5x = 35 → x = 7. 5 is tempting if you stop one step early or reverse a step, but the correct result is 7.",
    hints: ["Write 5n − 8 = 27. Add 8 to both sides, then divide by 5."]
  },
  {
    id: "g7-maths-equations-b-q06",
    prompt: "Solve: \u22122x = 14.",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "\u22127" },
      { id: "c", text: "\u221216" },
      { id: "d", text: "16" }
    ],
    answerId: "b",
    explanation: "x = 14/(−2) = −7. −16 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives −7. −16 is tempting if you stop one step early or reverse a step, but the correct result is −7.",
    hints: ["Divide both sides by −2."]
  },
  {
    id: "g7-maths-equations-b-q07",
    prompt: "If 2x \u2212 1 = 9, then 3x + 2 = ?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "11" },
      { id: "c", text: "17" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "2x = 10, x = 5; 3×5 + 2 = 17. 14 is tempting if you stop one step early or reverse a step, but the correct result is 17.",
    hints: ["Find x first, then evaluate the new expression."]
  },
  {
    id: "g7-maths-equations-b-q08",
    prompt: "Solve: 8 \u2212 3x = 2.",
    options: [
      { id: "a", text: "\u22122" },
      { id: "b", text: "10/3" },
      { id: "c", text: "3" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "−3x = −6 → x = 2. 3 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 2. 10/3 is tempting if you stop one step early or reverse a step, but the correct result is 2.",
    hints: ["Subtract 8, then divide by −3."]
  },
  {
    id: "g7-maths-equations-b-q09",
    prompt: "Perimeter of a square is 48 cm. Side length?",
    options: [
      { id: "a", text: "12 cm" },
      { id: "b", text: "24 cm" },
      { id: "c", text: "48 cm" },
      { id: "d", text: "6 cm" }
    ],
    answerId: "a",
    explanation: "4s = 48 → s = 12. 6 cm is tempting if you use the wrong formula or mix length with area/volume units, but the correct result is 12 cm. 6 cm is tempting if you stop one step early or reverse a step, but the correct result is 12 cm.",
    hints: ["Perimeter of square = 4 × side."]
  },
  {
    id: "g7-maths-equations-b-q10",
    prompt: "Solve: (2x + 1)/3 = 5.",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "7" },
      { id: "c", text: "14" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "2x + 1 = 15 → 2x = 14 → x = 7. 8 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 7. 8 is tempting if you stop one step early or reverse a step, but the correct result is 7.",
    hints: ["Multiply both sides by 3 first."]
  },
  {
    id: "g7-maths-equations-b-q11",
    prompt: "Age: Ravi is 5 years older than Priya. Sum of ages is 29. Priya\u2019s age?",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "24" },
      { id: "c", text: "12" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "p + (p+5) = 29 → 2p = 24 → p = 12. 17 is tempting if you stop one step early or reverse a step, but the correct result is 12.",
    hints: ["Let Priya = p; Ravi = p + 5."]
  },
  {
    id: "g7-maths-equations-b-q12",
    prompt: "Solve: 9 \u2212 x = 2x.",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "\u22123" },
      { id: "c", text: "6" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "9 = 3x → x = 3. 6 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 3. 6 is tempting if you stop one step early or reverse a step, but the correct result is 3.",
    hints: ["Add x to both sides, then divide."]
  },
  {
    id: "g7-maths-equations-b-q13",
    prompt: "Which step is valid when solving equations?",
    options: [
      { id: "a", text: "Add the same number to both sides" },
      { id: "b", text: "Add different numbers to each side" },
      { id: "c", text: "Divide only one side by 2" },
      { id: "d", text: "Delete a term from one side only" }
    ],
    answerId: "a",
    explanation: "Balance requires the same change on both sides. Add different numbers to each side is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives Add the same number to both sides. Add different numbers to each side is tempting if you stop one step early or reverse a step, but the correct result is Add the same number to both sides.",
    hints: ["An equation is like a balance. What must you do to keep both sides equal?"]
  },
  {
    id: "g7-maths-equations-b-q14",
    prompt: "Solve: 0.5x = 4.",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "8" },
      { id: "c", text: "4.5" },
      { id: "d", text: "0.5" }
    ],
    answerId: "b",
    explanation: "x = 4 / 0.5 = 8. 4. 4.5 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 8. 4.5 is tempting if you stop one step early or reverse a step, but the correct result is 8.",
    hints: ["0.5x means half of x. If half of x is 4, what is the whole of x?"]
  },
  {
    id: "g7-maths-equations-b-q15",
    prompt: "Two numbers sum to 40; one is 3 more than the other. Smaller number?",
    options: [
      { id: "a", text: "21.5" },
      { id: "b", text: "20" },
      { id: "c", text: "18.5" },
      { id: "d", text: "17" }
    ],
    answerId: "c",
    explanation: "x + (x+3) = 40 → 2x = 37 → x = 18.5. 17 is tempting if you stop one step early or reverse a step, but the correct result is 18.5.",
    hints: ["Let smaller = x; larger = x + 3."]
  },
  {
    id: "g7-maths-equations-b-q16",
    prompt: "Solve: 4x + 7 = \u22129.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "\u22121/2" },
      { id: "c", text: "2" },
      { id: "d", text: "\u22124" }
    ],
    answerId: "d",
    explanation: "4x = −9 − 7 = −16, so x = −16 ÷ 4 = −4. 4 may look right if the minus sign is dropped, and −1/2 comes from adding 7 to −9 instead of subtracting it. −1/2 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives −4. −1/2 is tempting if you stop one step early or reverse a step, but the correct result is −4.",
    hints: ["Subtract 7 from both sides of 4x + 7 = −9, then divide by the coefficient of x. Keep the negative sign."]
  },
  {
    id: "g7-maths-equations-b-q17",
    prompt: "Form equation: \u201cHalf a number decreased by 3 equals 10.\u201d",
    options: [
      { id: "a", text: "x/2 \u2212 3 = 10" },
      { id: "b", text: "2x \u2212 3 = 10" },
      { id: "c", text: "x/2 + 3 = 10" },
      { id: "d", text: "x \u2212 3/2 = 10" }
    ],
    answerId: "a",
    explanation: "Half is x/2; decreased by 3 subtracts 3. 2x − 3 = 10 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives x/2 − 3 = 10. 2x − 3 = 10 is tempting if you stop one step early or reverse a step, but the correct result is x/2 − 3 = 10.",
    hints: ["Let the number be x. Write half a number first, then show it decreased by 3, then set it equal to 10."]
  },
  {
    id: "g7-maths-equations-b-q18",
    prompt: "Solve: 5x \u2212 2x + 6 = 24.",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "6" },
      { id: "c", text: "18" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "3x + 6 = 24 → 3x = 18 → x = 6. 3 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 6. 3 is tempting if you stop one step early or reverse a step, but the correct result is 6.",
    hints: ["Combine 5x − 2x into one term, subtract the constant from 24, then divide by the coefficient of x."]
  },
  {
    id: "g7-maths-equations-b-q19",
    prompt: "Check: Is x = \u22122 a solution of 3x + 8 = 2?",
    options: [
      { id: "a", text: "No" },
      { id: "b", text: "Only if x > 0" },
      { id: "c", text: "Yes" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "c",
    explanation: "3(−2) + 8 = −6 + 8 = 2. Yes. No is tempting if you stop one step early or reverse a step, but the correct result is Yes.",
    hints: ["Put x = −2 into 3x + 8. Does it equal 2?"]
  },
  {
    id: "g7-maths-equations-b-q20",
    prompt: "Solve: 12 = 3(x + 1).",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "11" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "4 = x + 1 → x = 3. 4 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 3. 4 is tempting if you stop one step early or reverse a step, but the correct result is 3.",
    hints: ["Divide 12 by the number outside the bracket to find x + 1, then subtract 1."]
  },
  {
    id: "g7-maths-equations-b-q21",
    prompt: "A ticket costs \u20b9x. Three tickets cost \u20b990 more than one ticket. Equation?",
    options: [
      { id: "a", text: "3x = x + 90" },
      { id: "b", text: "3x + 90 = x" },
      { id: "c", text: "3x = 90" },
      { id: "d", text: "x = 3\u00d790" }
    ],
    answerId: "a",
    explanation: "Three tickets = one ticket + 90 → 3x = x + 90. 3x + 90 = x is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 3x = x + 90. 3x + 90 = x is tempting if you stop one step early or reverse a step, but the correct result is 3x = x + 90.",
    hints: ["Write the cost of three tickets and of one ticket using ₹x. Which is ₹90 more?"]
  },
  {
    id: "g7-maths-equations-b-q22",
    prompt: "From 3x = x + 90, x = ?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "45" },
      { id: "c", text: "90" },
      { id: "d", text: "15" }
    ],
    answerId: "b",
    explanation: "2x = 90 → x = 45. 30 is tempting if you stop one step early or reverse a step, but the correct result is 45.",
    hints: ["Subtract x from both sides."]
  },
  {
    id: "g7-maths-equations-b-q23",
    prompt: "Solve: \u2212(x \u2212 4) = 10.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "14" },
      { id: "c", text: "\u22126" },
      { id: "d", text: "\u221214" }
    ],
    answerId: "c",
    explanation: "−x + 4 = 10 → −x = 6 → x = −6. −14 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives −6. 14 is tempting if you stop one step early or reverse a step, but the correct result is −6.",
    hints: ["Distribute the minus, then isolate x."]
  },
  {
    id: "g7-maths-equations-b-q24",
    prompt: "Linear equation means the variable\u2019s power is\u2026",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "0" },
      { id: "c", text: "Any power" },
      { id: "d", text: "1" }
    ],
    answerId: "d",
    explanation: "In a linear equation, the unknown appears to the first power only. 0 is tempting if you move a term the wrong way or combine unlike terms; solving carefully gives 1. 0 is tempting if you stop one step early or reverse a step, but the correct result is 1.",
    hints: ["A linear equation such as 2x + 5 = 9 has no x² or x³ term. What power of the variable is left?"]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud835\udc65",
    title: "Simple Equations",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "balance",
    speak: "A simple equation is a balance. Do the same to both sides to find the unknown.",
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
      { label: "Inverse ops", reveal: "Undo + with \u2212, undo \u00d7 with \u00f7", emoji: "\ud83d\udd04" },
      { label: "Translate", reveal: "Words become equations", emoji: "\ud83d\udcdd" },
      { label: "Check", reveal: "Substitute your answer back", emoji: "\u2705" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Solve x + 7 = 15",
    options: [
        { id: "a", text: "22" },
        { id: "b", text: "8" },
        { id: "c", text: "7" },
        { id: "d", text: "15" }
    ],
    answerId: "b",
    why: "Subtract 7 from both sides: x = 8.",
    visual: "balance",
    speak: "Solve x + 7 = 15",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Keep both sides balanced", "Use inverse operations", "Check by substituting", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7MathsEquations: ChapterDef = {
  id: "simple-equations",
  title: "Simple Equations",
  emoji: "\ud835\udc65",
  blurb: "Balance both sides to find x",
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
  paperTopics: ["linear-lite", "add-sub"],
};

export const g7MathsEquationsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
