import type { ChapterDef, PrepQuestion } from "../types";
import { g7MathsEquationsAchievers } from "./g7-maths-equations-achievers";

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
    explanation: "Take 7 away from both sides: x + 7 − 7 = 15 − 7, so x = 8. Check: 8 + 7 = 15. 22 is tempting if you add 7 to 15 instead of taking it away: 15 + 7 = 22.",
    hints: ["Solve it like a balance. Choose the step that leaves x on its own, and do exactly the same to the other side."]
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
    explanation: "Add 9: y = 13. 5 is tempting if you subtract a number from only the left side.",
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
    explanation: "3m means 3 times m. Divide both sides by 3: m = 21 ÷ 3 = 7. Check: 3 × 7 = 21. 63 is tempting if you multiply by 3 instead of dividing: 21 × 3 = 63.",
    hints: ["Solve by asking what has been done to m. Do the opposite on both sides, then check your answer in the equation."]
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
    explanation: "n/5 means n divided by 5. Multiply both sides by 5: n = 6 × 5 = 30. Check: 30 ÷ 5 = 6. 11 is tempting if you undo the dividing by adding 5 instead of multiplying: 6 + 5 = 11.",
    hints: ["Solve by asking what has been done to n. Do the opposite on both sides, then check by putting your answer back in."]
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
    explanation: "2x = 8, so x = 4. 7 is tempting if you collect like terms on one side but drop a sign.",
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
    explanation: "5p = 20, p = 4. 3 is tempting if you add to one side and forget the other.",
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
    explanation: "12 − 2 = 10. 8 is tempting if you clear a bracket but skip multiplying one term.",
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
    explanation: "'Increased by' means added to, and 'is' means equals. So 'a number increased by 6 is 19' becomes x + 6 = 19. 6x = 19 is tempting if you read 'increased by 6' as 'multiplied by 6'.",
    hints: ["Let x be the number. Decide what increased by tells you to do, and use equals for is. Then write the equation."]
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
    explanation: "Thrice means three times, so 'thrice a number' is 3x, and 'is 27' means equals 27: 3x = 27. x + 3 = 27 is tempting if you read 'thrice' as 'add three'.",
    hints: ["Thrice belongs with the words once and twice. Let x be the number, decide what thrice does to it, then write the equation."]
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
    explanation: "Multiply both sides by −1: x = −8. 0 is tempting if you solve for the wrong letter in a two-letter equation.",
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
    explanation: "Divide both sides by 4: x − 1 = 20 ÷ 4 = 5. Then add 1: x = 6. Check: 4 × (6 − 1) = 20. 5 is tempting if you stop after dividing by 4 and give x − 1 = 5 as the answer, forgetting to add the 1 back.",
    hints: ["Solve by undoing the steps in reverse order. The bracket was multiplied last, so deal with that first, then finish the job on x."]
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
    explanation: "Take 2 from both sides: x/3 = 5 − 2 = 3. Then multiply both sides by 3: x = 9. Check: 9 ÷ 3 + 2 = 5. 3 is tempting if you stop at x/3 = 3 and give that as x, forgetting to multiply by 3.",
    hints: ["Solve by undoing: first undo the adding, then undo the dividing, each time on both sides. Your final answer must be x itself."]
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
    explanation: "Let the number be n. Twice the number plus 7 is 25, so 2n + 7 = 25. Take 7 from both sides: 2n = 18. Halve both sides: n = 9. Check: 2 × 9 + 7 = 25. 18 is tempting if you stop at 2n = 18 and forget to halve.",
    hints: ["Write the sentence as an equation, using a letter for the number. Undo the added part first, then undo the doubling."]
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
    explanation: "Add x to both sides: 10 = 3 + x. Take 3 from both sides: x = 7. Check: 10 − 7 = 3. −7 is tempting if you work out −x = 3 − 10 = −7 and then forget that this is −x, not x.",
    hints: ["Solve by adding x to both sides first, so x is no longer being taken away. Then get x on its own and check."]
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
    explanation: "Put x = 0 into each equation. Only 5x = 0 works, because 5 × 0 = 0. 0 + 5 is 5, 0 − 5 is −5, and 0 ÷ 5 is 0, not 1. x + 5 = 0 is tempting if you pick the first equation that ends in = 0 without checking it, but 0 + 5 = 5, not 0.",
    hints: ["For each equation, put the given value in place of x and work out the left side. Keep only the equation whose two sides agree."]
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
    explanation: "x = −18/6 = −3. 3 is tempting if you move a term across without flipping its sign.",
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
    explanation: "x/2 = 6, x = 12. 8 is tempting if you subtract a number from only the left side.",
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
    explanation: "Let the number be x. Then x − 12 = −5. Add 12 to both sides: x = −5 + 12 = 7. Check: 7 − 12 = −5. −17 is tempting if you take 12 away again instead of adding it: −5 − 12 = −17.",
    hints: ["Write the sentence as an equation, with x for the number. Undo the taking away by doing the opposite to both sides, watching the signs."]
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
    explanation: "3x + x means 3 lots of x and 1 more x, which is 4x. So 4x = 20, and x = 20 ÷ 4 = 5. Check: 3 × 5 + 5 = 20. 4 is tempting if you stop after combining and give the number of x's, 4, as the answer instead of dividing 20 by it.",
    hints: ["Solve in two parts. First collect the x terms on the left into a single term, then share the right side equally among them."]
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
    explanation: "x + 4 = 9, x = 5. 13 is tempting if you divide only the right side by the coefficient.",
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
    explanation: "Put x = 3 into kx + 1 = 10: 3k + 1 = 10. Take 1 from both sides: 3k = 9. Divide by 3: k = 3. Check: 3 × 3 + 1 = 10. 9 is tempting if you stop at 3k = 9 and forget to divide by 3.",
    hints: ["Put the x value that satisfies it in place of x, so only k is unknown. Then undo the adding and the multiplying."]
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
    explanation: "Multiply out the left side: 5(x + 2) = 5x + 10. Now both sides are exactly 5x + 10, so the equation is true whatever x is. The answer is All real numbers (identity). No solution is tempting if you take 5x from both sides, get 10 = 10, and think that because x has disappeared there can be no answer.",
    hints: ["Solve by multiplying out the bracket on the left. Then compare the two sides term by term before you decide what x can be."]
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
    explanation: "Subtract 2x: 5 = 9, which is false. No solution. x = 0 is tempting if you collect like terms on one side but drop a sign.",
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
    explanation: "x − 40 = 110 → x = 150. 110 is tempting because it is the money left; x = 110 + 40 = 150.",
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
    explanation: "7x − 4x = 12 + 3 → 3x = 15 → x = 5. 3 is tempting if you move a term the wrong way or forget to do the same to both sides.",
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
    explanation: "Multiply out both brackets: 3x − 12 = 2x + 2. Take 2x from both sides: x − 12 = 2. Add 12 to both sides: x = 14. Check: 3 × (14 − 4) = 30 and 2 × (14 + 1) = 30. 10 is tempting if, at x − 12 = 2, you take 2 away from 12 instead of adding 12 to 2.",
    hints: ["Solve by multiplying out both brackets first. Then gather the x terms on one side and the plain numbers on the other, watching each sign."]
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
    explanation: "The three consecutive integers are n, n + 1 and n + 2. Their sum is 3n + 3 = 54. Take 3 from both sides: 3n = 51, so n = 17. Check: 17 + 18 + 19 = 54. 18 is tempting if you just divide 54 by 3 and forget the extra 1 and 2, which gives the middle number, not n.",
    hints: ["Write the three consecutive integers using n, add them up, and set that equal to the sum given. Then solve for the starting number."]
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
    explanation: "Multiply by 12: 3x = 2x + 12 → x = 12. 6 is tempting if you treat a product as a sum when collecting terms.",
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
    explanation: "5x − 8 = 27 → 5x = 35 → x = 7. 5 is tempting if you cancel a factor that is not common to every term.",
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
    explanation: "−2x means x multiplied by −2. Divide both sides by −2: x = 14 ÷ (−2) = −7. Check: −2 × (−7) = 14. 7 is tempting if you divide by 2 and drop the minus sign.",
    hints: ["Solve by dividing both sides by the whole number in front of x, including its sign. Work out the size, then think about the sign."]
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
    explanation: "2x = 10, x = 5; 3×5 + 2 = 17. 14 is tempting if you move a term across without flipping its sign.",
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
    explanation: "−3x = −6 → x = 2. 3 is tempting if you subtract a number from only the left side.",
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
    explanation: "A square has 4 equal sides, and the perimeter is all 4 sides added. So the side is 48 ÷ 4 = 12 cm. Check: 4 × 12 = 48. 24 cm is tempting if you divide by 2 instead of 4, as if the square had only two sides: 48 ÷ 2 = 24.",
    hints: ["The perimeter is the distance all the way round the square. Count its equal sides, then work out the length of each side."]
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
    explanation: "Multiply both sides by 3: 2x + 1 = 15. Take 1 from both sides: 2x = 14. Halve: x = 7. Check: (2 × 7 + 1) ÷ 3 = 5. 8 is tempting if you add 1 instead of taking it away: 2x = 16, so x = 8.",
    hints: ["Solve by undoing in reverse order. The dividing happened last, so clear it on both sides first. Then deal with the adding and the doubling."]
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
    explanation: "Let Priya's age be p. Ravi is 5 years older, so his age is p + 5. Then p + p + 5 = 29, so 2p = 24 and p = 12. Check: 12 + 17 = 29. 17 is tempting if you work out Ravi's age, p + 5, instead of Priya's.",
    hints: ["Let Priya's age be p and write Ravi's age using p. Add the two ages, set that equal to the sum given, then solve."]
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
    explanation: "9 = 3x → x = 3. 6 is tempting if you add to one side and forget the other.",
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
    explanation: "Balance requires the same change on both sides. Add different numbers to each side is tempting if you collect like terms on one side but drop a sign.",
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
    explanation: "x = 4 / 0.5 = 8. 2 is tempting if you treat the equation as an expression and evaluate too early.",
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
    explanation: "Call the smaller number x, so the other is x + 3. Then x + x + 3 = 40, so 2x = 37 and x = 18.5. Check: 18.5 + 21.5 = 40. 21.5 is tempting if you work out the bigger number, x + 3, instead of the smaller one the question asks for.",
    hints: ["Call the smaller number x and write the other one using x. Add them, set that equal to the sum given, then solve."]
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
    explanation: "4x = −9 − 7 = −16, so x = −16 ÷ 4 = −4. 4 may look right if the minus sign is dropped, and −1/2 comes from adding 7 to −9 instead of subtracting it. −1/2 is tempting if you solve for the wrong letter in a two-letter equation.",
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
    explanation: "Half is x/2; decreased by 3 subtracts 3. 2x − 3 = 10 is tempting if you check by substituting into only one side.",
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
    explanation: "3x + 6 = 24 → 3x = 18 → x = 6. 3 is tempting if you drop the negative when a minus sits outside brackets.",
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
    explanation: "3(−2) + 8 = −6 + 8 = 2. Yes. No is tempting if you treat a product as a sum when collecting terms.",
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
    explanation: "Divide both sides by 3: x + 1 = 12 ÷ 3 = 4. Take 1 from both sides: x = 3. Check: 3 × (3 + 1) = 12. 4 is tempting if you stop at x + 1 = 4 and forget to take the 1 away.",
    hints: ["Solve by undoing. The bracket is multiplied by a number, so undo that on both sides first. Then finish getting x by itself."]
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
    explanation: "One ticket costs ₹x, so three tickets cost ₹3x. Three tickets cost ₹90 more than one ticket, so 3x is the bigger amount and it equals x + 90: 3x = x + 90. 3x + 90 = x is tempting if you add the ₹90 to the three tickets because 'more' sits next to them in the sentence, which makes the bigger cost even bigger.",
    hints: ["Write the cost of three tickets and of one ticket using x. Decide which cost is bigger, then add to the smaller one to balance."]
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
    explanation: "Take x from both sides: 3x − x = 90, so 2x = 90 and x = 45. Check: 3 × 45 = 135 and 45 + 90 = 135. 30 is tempting if you forget the x on the right and divide 90 by 3.",
    hints: ["There is an x on both sides. Take x away from both sides first, then share what is left among the remaining x's."]
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
    explanation: "The minus in front changes the sign of everything inside the bracket: −x + 4 = 10. Take 4 from both sides: −x = 6, so x = −6. Check: −(−6 − 4) = −(−10) = 10. 14 is tempting if you ignore the minus outside the bracket and solve x − 4 = 10, which gives 14.",
    hints: ["Solve by first rewriting the left side without the bracket; the minus in front changes each sign inside. Then get x by itself."]
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
    explanation: "In a linear equation, the unknown appears to the first power only. 0 is tempting if you add the same value to one side and forget the other.",
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g7MathsEquationsAchievers.length,
      topic: "equations",
      questions: g7MathsEquationsAchievers,
    },
  ],
  paperTopics: ["linear-lite", "add-sub"],
};

export const g7MathsEquationsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
