import type { ChapterDef, PrepQuestion } from "../types";

/** Integers - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-maths-integers-a-q01",
    prompt: "How many integers lie strictly between \u22123 and 2?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "The integers strictly between −3 and 2 are −2, −1, 0 and 1, so there are 4. 5 is tempting if you include one endpoint, and 6 if you include both.",
    hints: ["\"Strictly between\" leaves out −3 and 2 themselves. Remember to count 0."]
  },
  {
    id: "g7-maths-integers-a-q02",
    prompt: "What is the additive inverse of \u221215?",
    options: [
      { id: "a", text: "\u221215" },
      { id: "b", text: "15" },
      { id: "c", text: "1/15" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "A number plus its additive inverse equals 0, so −15 + 15 = 0. 0 is tempting if you drop a sign or swap place values, but the correct result is 15.",
    hints: ["Additive inverse means the number that sums with it to zero."]
  },
  {
    id: "g7-maths-integers-a-q03",
    prompt: "On a number line, which is farther left?",
    options: [
      { id: "a", text: "\u22123" },
      { id: "b", text: "0" },
      { id: "c", text: "\u221212" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "More negative numbers lie farther to the left. −12 < −3. −3 is tempting if you drop a sign or swap place values, but the correct result is −12.",
    hints: ["On a number line, left means smaller."]
  },
  {
    id: "g7-maths-integers-a-q04",
    prompt: "Evaluate: (\u22128) + (\u22125).",
    options: [
      { id: "a", text: "\u22123" },
      { id: "b", text: "13" },
      { id: "c", text: "3" },
      { id: "d", text: "\u221213" }
    ],
    answerId: "d",
    explanation: "Adding two negatives: add absolute values and keep the negative sign → −13. −3 is tempting if you drop a sign or swap place values, but the correct result is −13.",
    hints: ["Two negatives added go further left. Find 8 + 5 and put a minus sign in front."]
  },
  {
    id: "g7-maths-integers-a-q05",
    prompt: "Evaluate: 9 + (\u22124).",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "13" },
      { id: "c", text: "\u22125" },
      { id: "d", text: "\u221213" }
    ],
    answerId: "a",
    explanation: "9 − 4 = 5. Adding a negative is subtraction. 13 is tempting if you drop a sign or swap place values, but the correct result is 5.",
    hints: ["Adding −4 means stepping 4 to the left. Start at 9 on the number line."]
  },
  {
    id: "g7-maths-integers-a-q06",
    prompt: "Evaluate: (\u22126) \u2212 (\u22122).",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "\u22124" },
      { id: "c", text: "4" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "Subtracting a negative is adding: −6 + 2 = −4. −8 is tempting if you drop a sign or swap place values, but the correct result is −4.",
    hints: ["Subtracting −2 is the same as adding 2. Start at −6 and move 2 steps right."]
  },
  {
    id: "g7-maths-integers-a-q07",
    prompt: "Evaluate: (\u22127) \u00d7 3.",
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "\u221210" },
      { id: "c", text: "\u221221" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "Negative × positive = negative. 7 × 3 = 21, so answer is −21. −10 is tempting if you drop a sign or swap place values, but the correct result is −21.",
    hints: ["A negative times a positive is negative. Work out 7 × 3, then add the sign."]
  },
  {
    id: "g7-maths-integers-a-q08",
    prompt: "Evaluate: (\u22125) \u00d7 (\u22124).",
    options: [
      { id: "a", text: "\u221220" },
      { id: "b", text: "9" },
      { id: "c", text: "\u22129" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "Negative × negative = positive. 5 × 4 = 20. 9 is tempting if you drop a sign or swap place values, but the correct result is 20.",
    hints: ["A negative times a negative is positive. Work out 5 × 4."]
  },
  {
    id: "g7-maths-integers-a-q09",
    prompt: "Evaluate: (\u221236) \u00f7 9.",
    options: [
      { id: "a", text: "\u22124" },
      { id: "b", text: "4" },
      { id: "c", text: "\u221245" },
      { id: "d", text: "45" }
    ],
    answerId: "a",
    explanation: "Negative ÷ positive = negative. 36 ÷ 9 = 4, so −4. 4 is tempting if you drop a sign or swap place values, but the correct result is −4.",
    hints: ["Signs differ, so the quotient is negative. Which number times 9 gives 36?"]
  },
  {
    id: "g7-maths-integers-a-q10",
    prompt: "Evaluate: (\u221248) \u00f7 (\u22126).",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "8" },
      { id: "c", text: "42" },
      { id: "d", text: "\u221242" }
    ],
    answerId: "b",
    explanation: "Negative ÷ negative = positive. 48 ÷ 6 = 8. −8 is tempting if you drop a sign or swap place values, but the correct result is 8.",
    hints: ["Same signs give a positive quotient. Which number times 6 gives 48?"]
  },
  {
    id: "g7-maths-integers-a-q11",
    prompt: "For how many integers x is |x| < 3?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "|x| < 3 means x is less than 3 steps from 0, so x = −2, −1, 0, 1 or 2. That is 5 integers. 4 is tempting if you forget 0, and 7 if you also count −3 and 3.",
    hints: ["List the integers whose distance from 0 is less than 3. Remember 0 and the negative ones."]
  },
  {
    id: "g7-maths-integers-a-q12",
    prompt: "Which statement comparing \u22125 and \u22122 is true?",
    options: [
      { id: "a", text: "\u22125 > \u22122" },
      { id: "b", text: "\u22125 = \u22122" },
      { id: "c", text: "\u22125 > 0" },
      { id: "d", text: "\u22125 < \u22122" }
    ],
    answerId: "d",
    explanation: "−5 is to the left of −2, so −5 is smaller. −5 = −2 is tempting if you drop a sign or swap place values, but the correct result is −5 < −2.",
    hints: ["On the number line, numbers further left are smaller. Is −5 left or right of −2?"]
  },
  {
    id: "g7-maths-integers-a-q13",
    prompt: "A lift goes down 4 floors, then up 9 floors. Net change?",
    options: [
      { id: "a", text: "+5 floors" },
      { id: "b", text: "\u22125 floors" },
      { id: "c", text: "+13 floors" },
      { id: "d", text: "\u221213 floors" }
    ],
    answerId: "a",
    explanation: "−4 + 9 = +5 floors. +13 floors is tempting if you drop a sign or swap place values, but the correct result is +5 floors.",
    hints: ["Down is negative; up is positive."]
  },
  {
    id: "g7-maths-integers-a-q14",
    prompt: "Temperature falls from 6 \u00b0C to \u22123 \u00b0C. Change?",
    options: [
      { id: "a", text: "9 \u00b0C" },
      { id: "b", text: "\u22129 \u00b0C" },
      { id: "c", text: "\u22123 \u00b0C" },
      { id: "d", text: "3 \u00b0C" }
    ],
    answerId: "b",
    explanation: "Final − initial = −3 − 6 = −9 °C. −3 °C is tempting if you drop a sign or swap place values, but the correct result is −9 °C.",
    hints: ["Change = new value minus old value."]
  },
  {
    id: "g7-maths-integers-a-q15",
    prompt: "In a quiz, each correct answer scores +4 and each wrong answer scores \u22122. Ravi gets 11 correct and 6 wrong. What is his score?",
    options: [
      { id: "a", text: "56" },
      { id: "b", text: "22" },
      { id: "c", text: "32" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "11 × 4 = 44 and 6 × (−2) = −12, so his score is 44 + (−12) = 32. 56 is tempting if you add the marks for wrong answers instead of taking them away.",
    hints: ["Work out Ravi's marks for the 11 correct answers and for the 6 wrong ones separately. Then add them; one total is negative."]
  },
  {
    id: "g7-maths-integers-a-q16",
    prompt: "Evaluate: 0 \u2212 (\u22128).",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "0" },
      { id: "c", text: "\u221216" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "The correct answer is 8. 0 is tempting if you drop a sign or swap place values, but the correct result is 8.",
    hints: ["Subtracting a negative is the same as adding its opposite. Start from 0 on the number line."]
  },
  {
    id: "g7-maths-integers-a-q17",
    prompt: "Which product is positive?",
    options: [
      { id: "a", text: "(\u22123) \u00d7 (\u22127)" },
      { id: "b", text: "(\u22123) \u00d7 7" },
      { id: "c", text: "3 \u00d7 (\u22127)" },
      { id: "d", text: "(\u22121) \u00d7 12" }
    ],
    answerId: "a",
    explanation: "Both factors negative → product positive. (−3) × 7 is tempting if you drop a sign or swap place values, but the correct result is (−3) × (−7).",
    hints: ["Count negative factors: even count → positive."]
  },
  {
    id: "g7-maths-integers-a-q18",
    prompt: "Evaluate: (\u22122)\u00b3.",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "\u22128" },
      { id: "c", text: "\u22126" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "(−2)×(−2)×(−2) = 4 × (−2) = −8. Odd power keeps the negative. −6 is tempting if you drop a sign or swap place values, but the correct result is −8.",
    hints: ["Write (−2) × (−2) × (−2). Multiply two at a time and track the sign."]
  },
  {
    id: "g7-maths-integers-a-q19",
    prompt: "Find the successor of \u22129.",
    options: [
      { id: "a", text: "\u221210" },
      { id: "b", text: "9" },
      { id: "c", text: "\u22128" },
      { id: "d", text: "0" }
    ],
    answerId: "c",
    explanation: "Successor means +1: −9 + 1 = −8. −10 is tempting if you drop a sign or swap place values, but the correct result is −8.",
    hints: ["Successor is one more on the number line."]
  },
  {
    id: "g7-maths-integers-a-q20",
    prompt: "Find the predecessor of \u22129.",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "9" },
      { id: "c", text: "0" },
      { id: "d", text: "\u221210" }
    ],
    answerId: "d",
    explanation: "Predecessor means −1: −9 − 1 = −10. −8 is tempting if you drop a sign or swap place values, but the correct result is −10.",
    hints: ["Predecessor is one less."]
  },
  {
    id: "g7-maths-integers-a-q21",
    prompt: "Evaluate: (\u221215) + 15.",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "30" },
      { id: "c", text: "\u221230" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "A number plus its additive inverse is 0. 1 is tempting if you drop a sign or swap place values, but the correct result is 0.",
    hints: ["−15 and 15 are opposites, the same distance from the start on either side of the number line. What do they add to?"]
  },
  {
    id: "g7-maths-integers-a-q22",
    prompt: "The sum of two integers is \u22125. One of them is 8. What is the other?",
    options: [
      { id: "a", text: "\u22123" },
      { id: "b", text: "\u221213" },
      { id: "c", text: "3" },
      { id: "d", text: "13" }
    ],
    answerId: "b",
    explanation: "The other integer is −5 − 8 = −13, because 8 + (−13) = −5. −3 is tempting, but 8 + (−3) = 5, not −5.",
    hints: ["Write 8 + ? = \u22125. Which number must you add to 8 to land on \u22125 on the number line?"]
  },
  {
    id: "g7-maths-integers-a-q23",
    prompt: "A bank account shows \u2212\u20b9240 (overdrawn). A deposit of \u20b9300 is made. New balance?",
    options: [
      { id: "a", text: "\u20b9540" },
      { id: "b", text: "\u2212\u20b960" },
      { id: "c", text: "\u20b960" },
      { id: "d", text: "\u2212\u20b9540" }
    ],
    answerId: "c",
    explanation: "−240 + 300 = 60 rupees. ₹540 is tempting if you drop a sign or swap place values, but the correct result is ₹60.",
    hints: ["Debt is negative; deposits add."]
  },
  {
    id: "g7-maths-integers-a-q24",
    prompt: "Evaluate: (\u22129) \u2212 4 + 2.",
    options: [
      { id: "a", text: "\u221215" },
      { id: "b", text: "\u22127" },
      { id: "c", text: "7" },
      { id: "d", text: "\u221211" }
    ],
    answerId: "d",
    explanation: "−9 − 4 = −13; −13 + 2 = −11. −15 is tempting if you subtract the 2, but +2 gives −11.",
    hints: ["Work left to right: first −9 − 4, then add 2."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-maths-integers-b-q01",
    prompt: "Integers are closed under which operation among these?",
    options: [
      { id: "a", text: "Addition" },
      { id: "b", text: "Division" },
      { id: "c", text: "Taking square roots" },
      { id: "d", text: "Forming halves" }
    ],
    answerId: "a",
    explanation: "Sum of two integers is always an integer. Division may give a non-integer. Division is tempting if you drop a sign or miscount on the number line; the correct result is Addition.",
    hints: ["Closed means the answer is always an integer too. Try 3 and −5 with each operation."]
  },
  {
    id: "g7-maths-integers-b-q02",
    prompt: "Property shown by a + b = b + a for integers?",
    options: [
      { id: "a", text: "Associative" },
      { id: "b", text: "Commutative" },
      { id: "c", text: "Distributive" },
      { id: "d", text: "Identity" }
    ],
    answerId: "b",
    explanation: "Order of addition does not matter — commutative property. Associative is tempting if you drop a sign or swap place values, but the correct result is Commutative.",
    hints: ["In a + b = b + a, only the order of a and b changes. Which property is about swapping the order?"]
  },
  {
    id: "g7-maths-integers-b-q03",
    prompt: "What is the additive identity for integers?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "0" },
      { id: "d", text: "None" }
    ],
    answerId: "c",
    explanation: "a + 0 = a for every integer a. 1 is tempting if you drop a sign or swap place values, but the correct result is 0.",
    hints: ["Identity leaves the number unchanged."]
  },
  {
    id: "g7-maths-integers-b-q04",
    prompt: "Evaluate: (\u22123) \u00d7 (\u22124) \u00d7 (\u22121).",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "\u22127" },
      { id: "c", text: "7" },
      { id: "d", text: "\u221212" }
    ],
    answerId: "d",
    explanation: "Three negatives: product is negative. 3×4×1 = 12 → −12. −7 is tempting if you drop a sign or swap place values, but the correct result is −12.",
    hints: ["Count the negative signs. An odd count gives a negative product. Then multiply 3 × 4 × 1."]
  },
  {
    id: "g7-maths-integers-b-q05",
    prompt: "Solve for the blank: (\u221220) \u00f7 ___ = \u22125.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "\u22124" },
      { id: "c", text: "5" },
      { id: "d", text: "\u22125" }
    ],
    answerId: "a",
    explanation: "−20 ÷ 4 = −5. 5 is tempting if you drop a sign or swap place values, but the correct result is 4.",
    hints: ["What times −5 gives −20?"]
  },
  {
    id: "g7-maths-integers-b-q06",
    prompt: "Which expression equals \u2212(a \u2212 b)?",
    options: [
      { id: "a", text: "a \u2212 b" },
      { id: "b", text: "b \u2212 a" },
      { id: "c", text: "\u2212a \u2212 b" },
      { id: "d", text: "a + b" }
    ],
    answerId: "b",
    explanation: "−(a − b) = −a + b = b − a. a − b is tempting if you drop a sign or swap place values, but the correct result is b − a.",
    hints: ["Open the bracket: the minus sign changes the sign of a and of −b. Rearrange what you get."]
  },
  {
    id: "g7-maths-integers-b-q07",
    prompt: "A submarine is at \u221280 m. It rises 25 m. New depth?",
    options: [
      { id: "a", text: "\u2212105 m" },
      { id: "b", text: "55 m" },
      { id: "c", text: "\u221255 m" },
      { id: "d", text: "105 m" }
    ],
    answerId: "c",
    explanation: "−80 + 25 = −55 m (still below sea level). −105 m is tempting if you drop a sign or swap place values, but the correct result is −55 m.",
    hints: ["Rising adds a positive change to a negative depth."]
  },
  {
    id: "g7-maths-integers-b-q08",
    prompt: "Evaluate: |\u22127| \u2212 |3|.",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "\u22124" },
      { id: "c", text: "\u221210" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "The correct answer is 4. 10 is tempting if you drop a sign or swap place values, but the correct result is 4.",
    hints: ["Find the distance of −7 from zero, and of 3. Then subtract the second from the first."]
  },
  {
    id: "g7-maths-integers-b-q09",
    prompt: "Group the numbers smartly to evaluate (\u22124) \u00d7 37 \u00d7 (\u221225).",
    options: [
      { id: "a", text: "3,700" },
      { id: "b", text: "\u2212173" },
      { id: "c", text: "\u22123,700" },
      { id: "d", text: "\u2212370" }
    ],
    answerId: "a",
    explanation: "(−4) × (−25) = 100, and 100 × 37 = 3,700. Two negative factors make a positive product. −3,700 is tempting if you forget that the two negatives cancel.",
    hints: ["Multiply (\u22124) and (\u221225) first, since that gives a round number. Then multiply by 37. Watch the signs."]
  },
  {
    id: "g7-maths-integers-b-q10",
    prompt: "Evaluate: 5 \u2212 (\u22129) \u2212 3.",
    options: [
      { id: "a", text: "\u22127" },
      { id: "b", text: "11" },
      { id: "c", text: "17" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "5 + 9 − 3 = 11. 17 is tempting if you drop a sign or swap place values, but the correct result is 11.",
    hints: ["Subtracting −9 means adding 9. Work left to right: 5 + 9, then subtract 3."]
  },
  {
    id: "g7-maths-integers-b-q11",
    prompt: "The product of two integers is \u221236. One factor is \u22126. The other is?",
    options: [
      { id: "a", text: "\u22126" },
      { id: "b", text: "\u221230" },
      { id: "c", text: "6" },
      { id: "d", text: "42" }
    ],
    answerId: "c",
    explanation: "(−6) × 6 = −36. −6 is tempting if you drop a sign or swap place values, but the correct result is 6.",
    hints: ["Divide −36 by the given negative factor. Negative divided by negative is positive."]
  },
  {
    id: "g7-maths-integers-b-q12",
    prompt: "Arrange ascending: \u22122, 5, \u22128, 0.",
    options: [
      { id: "a", text: "\u22122, \u22128, 0, 5" },
      { id: "b", text: "0, \u22122, \u22128, 5" },
      { id: "c", text: "5, 0, \u22122, \u22128" },
      { id: "d", text: "\u22128, \u22122, 0, 5" }
    ],
    answerId: "d",
    explanation: "From most negative to most positive: −8, −2, 0, 5. −2, −8, 0, 5 is tempting if you drop a sign or swap place values, but the correct result is −8, −2, 0, 5.",
    hints: ["Ascending means smallest to largest."]
  },
  {
    id: "g7-maths-integers-b-q13",
    prompt: "Evaluate: (\u22121)\u2075\u2070 + (\u22121)\u2075\u00b9.",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "2" },
      { id: "c", text: "\u22122" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "An even power of −1 is 1 and an odd power of −1 is −1, so the sum is 1 + (−1) = 0. 2 is tempting if you think every power of −1 is 1.",
    hints: ["Is 50 even or odd? Is 51? Work out each power of \u22121, then add the two results."]
  },
  {
    id: "g7-maths-integers-b-q14",
    prompt: "What is  (\u221214) + (\u22126) + 20 ?",
    options: [
      { id: "a", text: "\u221240" },
      { id: "b", text: "0" },
      { id: "c", text: "40" },
      { id: "d", text: "\u22128" }
    ],
    answerId: "b",
    explanation: "−14 − 6 = −20; −20 + 20 = 0. −8 is tempting if you drop a sign or swap place values, but the correct result is 0.",
    hints: ["Add the two negatives first: −14 + (−6). Then add 20."]
  },
  {
    id: "g7-maths-integers-b-q15",
    prompt: "If a = \u22123 and b = 7, then a \u2212 b = ?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "\u22124" },
      { id: "c", text: "\u221210" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "−3 − 7 = −10. −4 is tempting if you drop a sign or swap place values, but the correct result is −10.",
    hints: ["Subtract means add the opposite of b."]
  },
  {
    id: "g7-maths-integers-b-q16",
    prompt: "Which division is undefined for integers?",
    options: [
      { id: "a", text: "0 \u00f7 7" },
      { id: "b", text: "(\u22127) \u00f7 1" },
      { id: "c", text: "7 \u00f7 (\u22121)" },
      { id: "d", text: "7 \u00f7 0" }
    ],
    answerId: "d",
    explanation: "Division by zero is never defined. 7 ÷ (−1) is tempting if you drop a sign or swap place values, but the correct result is 7 ÷ 0.",
    hints: ["Undefined means it has no answer. Can any number times zero ever give 7?"]
  },
  {
    id: "g7-maths-integers-b-q17",
    prompt: "A gain of \u20b9450 followed by a loss of \u20b9520. Net?",
    options: [
      { id: "a", text: "Loss of \u20b970" },
      { id: "b", text: "Gain of \u20b970" },
      { id: "c", text: "Gain of \u20b9970" },
      { id: "d", text: "Loss of \u20b9970" }
    ],
    answerId: "a",
    explanation: "450 − 520 = −70 → loss of ₹70. Gain of ₹70 is tempting if you drop a sign or swap place values, but the correct result is Loss of ₹70.",
    hints: ["Gain positive, loss negative."]
  },
  {
    id: "g7-maths-integers-b-q18",
    prompt: "Evaluate: (\u221225) \u00f7 5 \u00d7 (\u22122).",
    options: [
      { id: "a", text: "\u221210" },
      { id: "b", text: "10" },
      { id: "c", text: "\u22122" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "−25 ÷ 5 = −5; (−5)×(−2) = 10. Left to right. −2 is tempting if you drop a sign or swap place values, but the correct result is 10.",
    hints: ["Work left to right: first (−25) ÷ 5, then multiply by (−2)."]
  },
  {
    id: "g7-maths-integers-b-q19",
    prompt: "The difference of two integers can be\u2026",
    options: [
      { id: "a", text: "Only positive" },
      { id: "b", text: "Only negative" },
      { id: "c", text: "Positive, negative, or zero" },
      { id: "d", text: "Never zero" }
    ],
    answerId: "c",
    explanation: "Examples: 5−2=3, 2−5=−3, 5−5=0. Only positive is tempting if you drop a sign or swap place values, but the correct result is Positive, negative, or zero.",
    hints: ["Difference depends on which is larger."]
  },
  {
    id: "g7-maths-integers-b-q20",
    prompt: "Property: a \u00d7 (b + c) = a\u00d7b + a\u00d7c is\u2026",
    options: [
      { id: "a", text: "Commutative" },
      { id: "b", text: "Associative" },
      { id: "c", text: "Closure" },
      { id: "d", text: "Distributive" }
    ],
    answerId: "d",
    explanation: "Multiplication distributes over addition. Commutative is tempting if you drop a sign or swap place values, but the correct result is Distributive.",
    hints: ["In a × (b + c), a multiplies each term inside the bracket. Which property spreads × over +?"]
  },
  {
    id: "g7-maths-integers-b-q21",
    prompt: "If |x| = 12 and x is negative, what is x \u2212 5?",
    options: [
      { id: "a", text: "\u221217" },
      { id: "b", text: "7" },
      { id: "c", text: "\u22127" },
      { id: "d", text: "17" }
    ],
    answerId: "a",
    explanation: "|x| = 12 means x is 12 or −12. x is negative, so x = −12, and −12 − 5 = −17. 7 is tempting if you take x = 12.",
    hints: ["Which two numbers are 12 steps from zero? Pick the negative one, then subtract 5."]
  },
  {
    id: "g7-maths-integers-b-q22",
    prompt: "How many integers lie strictly between \u22123 and 4?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "6" },
      { id: "c", text: "5" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "−2, −1, 0, 1, 2, 3 — six integers. 5 is tempting if you include an endpoint or count the wrong way on the number line; the correct count is 6.",
    hints: ["List them: start just after −3 and stop just before 4. Do not include −3 or 4."]
  },
  {
    id: "g7-maths-integers-b-q23",
    prompt: "Evaluate: (\u22128) + 3 \u00d7 (\u22122).",
    options: [
      { id: "a", text: "\u221210" },
      { id: "b", text: "10" },
      { id: "c", text: "\u221214" },
      { id: "d", text: "14" }
    ],
    answerId: "c",
    explanation: "Multiply first: 3×(−2)=−6; then −8+(−6)=−14. −10 is tempting if you drop a sign or swap place values, but the correct result is −14.",
    hints: ["Multiply before adding: work out 3 × (−2) first, then add it to −8."]
  },
  {
    id: "g7-maths-integers-b-q24",
    prompt: "Which pair are additive inverses?",
    options: [
      { id: "a", text: "\u22129 and \u22129" },
      { id: "b", text: "9 and 0" },
      { id: "c", text: "\u22129 and 1/9" },
      { id: "d", text: "\u22129 and 9" }
    ],
    answerId: "d",
    explanation: "The correct answer is −9 and 9. −9 and 1/9 is tempting if you drop a sign or swap place values, but the correct result is −9 and 9.",
    hints: ["Additive inverses sum to zero."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd22",
    title: "Integers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Integers include negatives, zero and positives. Watch signs when you operate.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Number line", reveal: "Left is smaller; negatives sit left of zero", emoji: "\ud83d\udccd" },
      { label: "Add/subtract", reveal: "Same signs add; minus a negative becomes plus", emoji: "\u2795" },
      { label: "Multiply/divide", reveal: "Same signs \u2192 positive; opposite \u2192 negative", emoji: "\u2716\ufe0f" },
      { label: "Absolute value", reveal: "Distance from zero", emoji: "\ud83d\udccf" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "What is (\u22123) \u00d7 (\u22124)?",
    options: [
        { id: "a", text: "12" },
        { id: "b", text: "\u221212" },
        { id: "c", text: "7" },
        { id: "d", text: "\u22127" }
    ],
    answerId: "a",
    why: "Negative times negative is positive: 12.",
    visual: "number-line",
    speak: "What is (\u22123) \u00d7 (\u22124)?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know the number line", "Watch operation signs", "Use absolute value", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7MathsIntegers: ChapterDef = {
  id: "integers",
  title: "Integers",
  emoji: "\ud83d\udd22",
  blurb: "Signed numbers on the number line",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "add-sub",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "add-sub",
      questions: SET_B,
    },
  ],
  paperTopics: ["add-sub", "linear-lite"],
};

export const g7MathsIntegersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
