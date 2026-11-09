import type { ChapterDef, PrepQuestion } from "../types";

/** Pair of Linear Equations - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-maths-linear-a-q01",
    prompt: "The graph of a linear equation in two variables is \u2014",
    options: [
      { id: "a", text: "a point only" },
      { id: "b", text: "a parabola" },
      { id: "c", text: "a circle" },
      { id: "d", text: "a straight line" }
    ],
    answerId: "d",
    explanation: "Any equation ax + by + c = 0 graphs as a straight line. 'A parabola' is tempting because it is a familiar curve, but a parabola needs an x² term; a linear equation has none.",
    hints: ["Two-variable linear ⇒ line."]
  },
  {
    id: "g10-maths-linear-a-q02",
    prompt: "The pair x + y = 5 and 2x + 2y = 10 has \u2014",
    options: [
      { id: "a", text: "exactly two solutions" },
      { id: "b", text: "infinitely many solutions" },
      { id: "c", text: "unique solution" },
      { id: "d", text: "no solution" }
    ],
    answerId: "b",
    explanation: "2x + 2y = 10 is just 2 × (x + y = 5), so both equations draw the same line and every point on it is a solution. 'Unique solution' is tempting because most pairs meet once, but these lines coincide rather than cross.",
    hints: ["Compare a1/a2, b1/b2, c1/c2."]
  },
  {
    id: "g10-maths-linear-a-q03",
    prompt: "The pair x + y = 5 and x + y = 7 has \u2014",
    options: [
      { id: "a", text: "x=0 only" },
      { id: "b", text: "infinitely many" },
      { id: "c", text: "no solution" },
      { id: "d", text: "unique solution" }
    ],
    answerId: "c",
    explanation: "Parallel distinct lines (same left side, different constants).",
    hints: ["Can x + y equal 5 and 7 at the same time? Think of two lines with the same slope."]
  },
  {
    id: "g10-maths-linear-a-q04",
    prompt: "Solve: x + y = 7 and x \u2212 y = 1. Then (x, y) = \u2014",
    options: [
      { id: "a", text: "(5, 2)" },
      { id: "b", text: "(4, 3)" },
      { id: "c", text: "(3, 4)" },
      { id: "d", text: "(2, 5)" }
    ],
    answerId: "b",
    explanation: "Adding gives 2x = 8, so x = 4 and y = 3; check: 4 − 3 = 1. (3, 4) is tempting because it uses the same numbers, but 3 − 4 = −1, not 1.",
    hints: ["Add the equations to get 2x = 8, then put x back into x + y = 7."]
  },
  {
    id: "g10-maths-linear-a-q05",
    prompt: "For unique solution of a1x+b1y+c1=0 and a2x+b2y+c2=0 \u2014",
    options: [
      { id: "a", text: "a1/a2 = b1/b2 = c1/c2" },
      { id: "b", text: "a1/a2 \u2260 b1/b2" },
      { id: "c", text: "c1=c2=0" },
      { id: "d", text: "a1/a2 = b1/b2 \u2260 c1/c2" }
    ],
    answerId: "b",
    explanation: "Lines intersect at one point iff slopes differ: a1/a2 \u2260 b1/b2.",
    hints: ["Unique ⇔ ratios of a and b differ."]
  },
  {
    id: "g10-maths-linear-a-q06",
    prompt: "From x = 2y + 1 into x + y = 7, y equals \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "1" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "Substitute: 2y + 1 + y = 7, so 3y = 6 and y = 2 (then x = 5). 3 is tempting, but y = 3 gives x = 7 and 7 + 3 = 10, not 7.",
    hints: ["Replace x, then solve the one-variable equation."]
  },
  {
    id: "g10-maths-linear-a-q07",
    prompt: "Elimination: 2x+3y=5 and 3x+2y=5. Adding after suitable multiply yields \u2014",
    options: [
      { id: "a", text: "x=2, y=\u22121" },
      { id: "b", text: "x=0, y=5/3" },
      { id: "c", text: "x=1, y=1" },
      { id: "d", text: "x=5, y=\u22125" }
    ],
    answerId: "c",
    explanation: "Multiply first\u00d72, second\u00d73: 4x+6y=10, 9x+6y=15; subtract: \u22125x=\u22125 \u2192 x=1; y=1.",
    hints: ["Add the equations: 5x + 5y = 10. Subtract them: x − y = 0. Solve these two simpler ones."]
  },
  {
    id: "g10-maths-linear-a-q08",
    prompt: "The line x = 3 is \u2014",
    options: [
      { id: "a", text: "a circle" },
      { id: "b", text: "parallel to the y-axis" },
      { id: "c", text: "the x-axis" },
      { id: "d", text: "parallel to the x-axis" }
    ],
    answerId: "b",
    explanation: "Every point on x = 3 has x-coordinate 3, so the line is vertical, parallel to the y-axis. 'Parallel to the x-axis' is tempting because the equation mentions x, but fixing x makes the line vertical, not horizontal.",
    hints: ["Constant x ⇒ vertical line."]
  },
  {
    id: "g10-maths-linear-a-q09",
    prompt: "The equation y = 0 represents \u2014",
    options: [
      { id: "a", text: "origin only" },
      { id: "b", text: "the y-axis" },
      { id: "c", text: "x=y" },
      { id: "d", text: "the x-axis" }
    ],
    answerId: "d",
    explanation: "All points with y-coordinate 0 lie on the x-axis. 'The y-axis' is tempting because the equation is in y, but the y-axis is x = 0.",
    hints: ["y=0 is the horizontal axis."]
  },
  {
    id: "g10-maths-linear-a-q10",
    prompt: "If 3x + 2y = 12 intersects axes at A and B, OA\u00b7OB for origin O equals \u2014",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "12" },
      { id: "c", text: "18" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "Put y = 0: x = 4, so OA = 4; put x = 0: y = 6, so OB = 6. OA·OB = 24. 12 is tempting because it is the constant in the equation, but the product of the intercepts is 4 × 6 = 24.",
    hints: ["Put y = 0 to find OA from 3x = 12, then x = 0 to find OB. Multiply them."]
  },
  {
    id: "g10-maths-linear-a-q11",
    prompt: "Solve by elimination: 3x \u2212 y = 3 and 9x \u2212 3y = 9. The system has \u2014",
    options: [
      { id: "a", text: "unique solution (1,0)" },
      { id: "b", text: "infinitely many solutions" },
      { id: "c", text: "no solution" },
      { id: "d", text: "unique solution (0,3)" }
    ],
    answerId: "b",
    explanation: "9x − 3y = 9 is 3 × (3x − y = 3), so both describe one line and there are infinitely many solutions. 'Unique solution (1, 0)' is tempting because (1, 0) does satisfy both, but so does every other point on the line.",
    hints: ["Multiply 3x − y = 3 by 3. How does it compare with 9x − 3y = 9?"]
  },
  {
    id: "g10-maths-linear-a-q12",
    prompt: "The solution of x \u2212 2y = 0 and 3x + 4y = 20 is \u2014",
    options: [
      { id: "a", text: "(2, 4)" },
      { id: "b", text: "(4, 2)" },
      { id: "c", text: "(0, 0)" },
      { id: "d", text: "(5, 2.5)" }
    ],
    answerId: "b",
    explanation: "From x = 2y: 6y + 4y = 20, so y = 2 and x = 4. (2, 4) is tempting because it swaps the same numbers, but 2 − 2(4) = −6, not 0.",
    hints: ["Substitute x=2y into the second equation."]
  },
  {
    id: "g10-maths-linear-a-q13",
    prompt: "Graphically, inconsistent linear equations appear as \u2014",
    options: [
      { id: "a", text: "coincident lines" },
      { id: "b", text: "perpendicular lines only" },
      { id: "c", text: "intersecting lines" },
      { id: "d", text: "parallel lines" }
    ],
    answerId: "d",
    explanation: "Inconsistent equations have no common solution, so their lines never meet: they are parallel and distinct. Coincident lines are tempting because they also look like one direction, but they lie on top of each other and share every point, so those equations have infinitely many solutions.",
    hints: ["Inconsistent linear equations have no common solution.", "Graphically, a common solution is where the lines meet. How must two lines lie if they never meet?"]
  },
  {
    id: "g10-maths-linear-a-q14",
    prompt: "If am \u2212 bl \u2260 0 for equations ax+by=c, lx+my=n, the system has \u2014",
    options: [
      { id: "a", text: "infinitely many" },
      { id: "b", text: "no solution" },
      { id: "c", text: "only x=0" },
      { id: "d", text: "unique solution" }
    ],
    answerId: "d",
    explanation: "am\u2212bl is the determinant a1b2\u2212a2b1 (up to naming); non-zero \u21d2 unique.",
    hints: ["am − bl ≠ 0 means a/l ≠ b/m, so the slopes differ. How many times do the lines cross?"]
  },
  {
    id: "g10-maths-linear-a-q15",
    prompt: "The cost of 2 pens and 3 pencils is \u20b940; 3 pens and 2 pencils is \u20b945. Cost of one pen is \u2014",
    options: [
      { id: "a", text: "\u20b99" },
      { id: "b", text: "\u20b910" },
      { id: "c", text: "\u20b912" },
      { id: "d", text: "\u20b911" }
    ],
    answerId: "d",
    explanation: "2p+3c=40, 3p+2c=45. \u00d72 and \u00d73: 4p+6c=80, 9p+6c=135 \u2192 5p=55 \u2192 p=11.",
    hints: ["Eliminate pencils, then solve for the pen cost."]
  },
  {
    id: "g10-maths-linear-a-q16",
    prompt: "y = 2x + 1 and y = 2x \u2212 4 are \u2014",
    options: [
      { id: "a", text: "intersecting at one point" },
      { id: "b", text: "perpendicular" },
      { id: "c", text: "coincident" },
      { id: "d", text: "parallel" }
    ],
    answerId: "d",
    explanation: "Both lines have slope 2 but different intercepts (1 and −4), so they are parallel and never meet. 'Coincident' is tempting because the slopes match, but coincident lines also need the same intercept.",
    hints: ["Both y = 2x + 1 and y = 2x − 4 have slope 2, but different y-intercepts. Will they ever meet?"]
  },
  {
    id: "g10-maths-linear-a-q17",
    prompt: "A pair of linear equations can represent \u2014",
    options: [
      { id: "a", text: "only unique solutions" },
      { id: "b", text: "only integers" },
      { id: "c", text: "all of: unique, none, or infinitely many solutions" },
      { id: "d", text: "only positive x" }
    ],
    answerId: "c",
    explanation: "Depending on the ratios of the coefficients, a pair can meet once, never meet (parallel) or coincide. 'Only unique solutions' is tempting because many textbook pairs meet once, but parallel and coincident pairs also occur.",
    hints: ["Two lines in a plane can cross once, never meet, or lie on top of each other. Which cases can a pair show?"]
  },
  {
    id: "g10-maths-linear-a-q18",
    prompt: "If x = 1, y = 2 satisfies both equations of a pair, then that pair \u2014",
    options: [
      { id: "a", text: "has at least the solution (1, 2)" },
      { id: "b", text: "has no solution" },
      { id: "c", text: "must have infinitely many" },
      { id: "d", text: "cannot be linear" }
    ],
    answerId: "a",
    explanation: "A common point means at least one solution (could be unique or infinite).",
    hints: ["Put x = 1, y = 2 into both equations. If both hold, what is that point for the pair?"]
  },
  {
    id: "g10-maths-linear-a-q19",
    prompt: "Reduce 2x + 3y \u2212 9 = 0 and 4x + 6y \u2212 18 = 0. Consistency?",
    options: [
      { id: "a", text: "unique (0,3)" },
      { id: "b", text: "inconsistent" },
      { id: "c", text: "dependent (infinite solutions)" },
      { id: "d", text: "unique (1,1)" }
    ],
    answerId: "c",
    explanation: "4x + 6y − 18 = 0 is exactly 2 × the first equation, so the pair is dependent with infinitely many solutions. 'Unique (0, 3)' is tempting because (0, 3) satisfies both, but it is only one of infinitely many common points.",
    hints: ["Compare 4x + 6y − 18 = 0 with 2x + 3y − 9 = 0. Is one exactly double the other?"]
  },
  {
    id: "g10-maths-linear-a-q20",
    prompt: "The point (0, 0) lies on ax + by + c = 0 if and only if \u2014",
    options: [
      { id: "a", text: "c = 0" },
      { id: "b", text: "a = 0" },
      { id: "c", text: "a = b" },
      { id: "d", text: "b = 0" }
    ],
    answerId: "a",
    explanation: "Putting x = 0, y = 0 gives c = 0, so the line passes through the origin exactly when c = 0. 'a = 0' is tempting, but a = 0 only makes the line horizontal; it can still miss the origin.",
    hints: ["Substitute the origin's coordinates into ax + by + c. What must the remaining term equal?"]
  },
  {
    id: "g10-maths-linear-a-q21",
    prompt: "For equations x/2 + y/3 = 1 and x/3 + y/2 = 1, multiply by 6 to clear denominators. System becomes \u2014",
    options: [
      { id: "a", text: "x + y = 1 and x + y = 1" },
      { id: "b", text: "x/2 + y/3 = 6 and x/3 + y/2 = 6" },
      { id: "c", text: "3x + 2y = 6 and 2x + 3y = 6" },
      { id: "d", text: "3x+2y=1 and 2x+3y=1" }
    ],
    answerId: "c",
    explanation: "Multiply each by 6: x/2 + y/3 = 1 becomes 3x + 2y = 6 and x/3 + y/2 = 1 becomes 2x + 3y = 6. '3x+2y=1 and 2x+3y=1' is tempting because the left sides are right, but the right-hand side 1 must be multiplied by 6 too.",
    hints: ["Clear denominators with LCM of 2 and 3."]
  },
  {
    id: "g10-maths-linear-a-q22",
    prompt: "Solving 3x+2y=6 and 2x+3y=6 by elimination, x equals \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3/5" },
      { id: "c", text: "6/5" },
      { id: "d", text: "1" }
    ],
    answerId: "c",
    explanation: "Multiply by 3 and 2: 9x + 6y = 18 and 4x + 6y = 12; subtract to get 5x = 6, so x = 6/5. 1 is tempting by symmetry (x = y = 1), but 3 + 2 = 5, not 6.",
    hints: ["Eliminate y, solve for x."]
  },
  {
    id: "g10-maths-linear-a-q23",
    prompt: "A father's age is 3 times his son's. In 12 years, father will be twice the son. Present ages (father, son) \u2014",
    options: [
      { id: "a", text: "(36, 12)" },
      { id: "b", text: "(30, 10)" },
      { id: "c", text: "(45, 15)" },
      { id: "d", text: "(24, 8)" }
    ],
    answerId: "a",
    explanation: "f = 3s and 3s + 12 = 2(s + 12) give s = 12, f = 36. (30, 10) is tempting because 30 is 3 × 10, but in 12 years they are 42 and 22, and 42 is not twice 22.",
    hints: ["Let the son be s and the father 3s. In 12 years: 3s + 12 = 2(s + 12). Solve for s."]
  },
  {
    id: "g10-maths-linear-a-q24",
    prompt: "The pair  x = 2 and y = 3 represents \u2014",
    options: [
      { id: "a", text: "two lines parallel to the axes intersecting at (2, 3)" },
      { id: "b", text: "a single line" },
      { id: "c", text: "a circle" },
      { id: "d", text: "no graph" }
    ],
    answerId: "a",
    explanation: "x = 2 is a vertical line and y = 3 is a horizontal line; together they meet at (2, 3). 'A single line' is tempting because each equation alone is a line, but here there are two different lines.",
    hints: ["x = 2 is a vertical line and y = 3 is a horizontal line. Where do they meet?"]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-maths-linear-b-q01",
    prompt: "The lines 2x \u2212 y \u2212 3 = 0 and 4x \u2212 2y \u2212 k = 0 are coincident for k = \u2014",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "12" },
      { id: "c", text: "6" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "Coincident lines need 2/4 = (−1)/(−2) = (−3)/(−k), so 1/2 = 3/k and k = 6. 3 is tempting because it copies the first constant, but the second equation is double the first, so its constant must be 6.",
    hints: ["For coincident lines all three coefficient ratios match."]
  },
  {
    id: "g10-maths-linear-b-q02",
    prompt: "For parallel lines 2x \u2212 y \u2212 3 = 0 and 4x \u2212 2y \u2212 k = 0, k \u2260 \u2014",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "3" },
      { id: "c", text: "0" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "Parallel lines need a1/a2 = b1/b2 ≠ c1/c2; with k = 6 the lines coincide, so k ≠ 6. 3 is tempting because it matches the first constant, but k = 3 still gives parallel lines.",
    hints: ["Divide 4x − 2y − k = 0 by 2. For parallel lines its constant must differ from the first line's."]
  },
  {
    id: "g10-maths-linear-b-q03",
    prompt: "Solve: 0.2x + 0.3y = 1.3 and 0.4x + 0.5y = 2.3. Then x = \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "1" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "\u00d710: 2x+3y=13, 4x+5y=23. \u00d72 first: 4x+6y=26; subtract: y=3; 2x+9=13 \u2192 x=2.",
    hints: ["Multiply both equations by 10 to clear the decimals. Then eliminate x, find y, and substitute back to get x."]
  },
  {
    id: "g10-maths-linear-b-q04",
    prompt: "The area of the triangle formed by x=0, y=0 and 3x+4y=12 is \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "12" },
      { id: "c", text: "24" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "3x + 4y = 12 meets the axes at (4, 0) and (0, 3), so the area is (1/2) × 4 × 3 = 6. 12 is tempting, but that is 4 × 3 without the half.",
    hints: ["Right triangle with legs on the axes."]
  },
  {
    id: "g10-maths-linear-b-q05",
    prompt: "If 2x + 3y = 17 and 3x \u2212 2y = 6, then 2x + 3y + 3x \u2212 2y equals \u2014",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "6" },
      { id: "c", text: "23" },
      { id: "d", text: "11" }
    ],
    answerId: "c",
    explanation: "Adding the two equations adds their right sides: 17 + 6 = 23. 11 is tempting if you subtract, but the question adds the left sides, so the right sides add too.",
    hints: ["The left side is the sum of both left sides of the equations. So add 17 and 6."]
  },
  {
    id: "g10-maths-linear-b-q06",
    prompt: "A fraction becomes 1/2 if 1 is added to both numerator and denominator. It becomes 1/3 if 1 is subtracted from both. The fraction is \u2014",
    options: [
      { id: "a", text: "4/7" },
      { id: "b", text: "2/3" },
      { id: "c", text: "3/7" },
      { id: "d", text: "3/5" }
    ],
    answerId: "c",
    explanation: "Let the fraction be n/d: (n+1)/(d+1) = 1/2 gives d = 2n + 1, and (n−1)/(d−1) = 1/3 gives d = 3n − 2, so n = 3 and d = 7. 3/5 is tempting because it has the right numerator, but (3+1)/(5+1) = 2/3, not 1/2.",
    hints: ["Write (n + 1)/(d + 1) = 1/2 and (n − 1)/(d − 1) = 1/3. Cross-multiply and solve."]
  },
  {
    id: "g10-maths-linear-b-q07",
    prompt: "Taxi charges \u20b915 for first km and \u20b98 per additional km. For d km (d\u22651), fare F satisfies \u2014",
    options: [
      { id: "a", text: "F = 8d + 7" },
      { id: "b", text: "F = 8d + 15" },
      { id: "c", text: "F = 15d" },
      { id: "d", text: "F = 7d + 8" }
    ],
    answerId: "a",
    explanation: "The first km costs ₹15 and the other (d − 1) km cost ₹8 each: F = 15 + 8(d − 1) = 8d + 7. F = 8d + 15 is tempting, but it charges ₹8 for the first km on top of the ₹15.",
    hints: ["First kilometre at 15, rest at 8."]
  },
  {
    id: "g10-maths-linear-b-q08",
    prompt: "Two lines a1x+b1y+c1=0 and a2x+b2y+c2=0 are perpendicular if \u2014",
    options: [
      { id: "a", text: "a1b2 \u2212 a2b1 = 0" },
      { id: "b", text: "a1a2 = b1b2" },
      { id: "c", text: "a1/a2 = b1/b2" },
      { id: "d", text: "a1a2 + b1b2 = 0" }
    ],
    answerId: "d",
    explanation: "Slopes are −a1/b1 and −a2/b2; perpendicular means their product is −1, which gives a1a2 + b1b2 = 0. a1/a2 = b1/b2 is tempting, but that is the condition for parallel lines.",
    hints: ["Product of slopes = −1."]
  },
  {
    id: "g10-maths-linear-b-q09",
    prompt: "The solution set of 3x + 2y \u2212 1 = 0 and 3x + 2y \u2212 1 = 0 (same equation twice) is \u2014",
    options: [
      { id: "a", text: "only (1/3,0)" },
      { id: "b", text: "empty" },
      { id: "c", text: "infinitely many points on the line" },
      { id: "d", text: "only (0,1/2)" }
    ],
    answerId: "c",
    explanation: "The two equations are identical, so every point on 3x + 2y − 1 = 0 satisfies both. 'Only (1/3, 0)' is tempting because that point does lie on the line, but so do infinitely many others.",
    hints: ["Same line twice ⇒ dependent system."]
  },
  {
    id: "g10-maths-linear-b-q10",
    prompt: "Using matrices idea: for  x + y = 5, 2x \u2212 y = 4, adding gives \u2014",
    options: [
      { id: "a", text: "y=4" },
      { id: "b", text: "3x = 9 so x=3, then y=2" },
      { id: "c", text: "x=y=0" },
      { id: "d", text: "x=5" }
    ],
    answerId: "b",
    explanation: "Adding cancels y: 3x = 9, so x = 3, and then y = 5 − 3 = 2. x = 5 is tempting because 5 is on the right of the first equation, but then y = 0 and 2(5) − 0 = 10, not 4.",
    hints: ["Elimination by adding."]
  },
  {
    id: "g10-maths-linear-b-q11",
    prompt: "Which ordered pair satisfies both x \u2212 y = 2 and 2x + y = 7?",
    options: [
      { id: "a", text: "(2, 0)" },
      { id: "b", text: "(3, 1)" },
      { id: "c", text: "(4, 2)" },
      { id: "d", text: "(1, \u22121)" }
    ],
    answerId: "b",
    explanation: "(3, 1) works in both: 3 − 1 = 2 and 6 + 1 = 7. (2, 0) is tempting because 2 − 0 = 2, but 2(2) + 0 = 4, not 7.",
    hints: ["Test each pair in both equations."]
  },
  {
    id: "g10-maths-linear-b-q12",
    prompt: "If the system kx + 2y = 5 and 3x + y = 1 has no solution, then k equals \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "0" },
      { id: "c", text: "3" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "a1/a2=b1/b2\u2260c1/c2 \u2192 k/3 = 2/1 \u21d2 k=6, and 5/1 \u2260 that ratio for c.",
    hints: ["For no solution: a-ratio = b-ratio ≠ c-ratio."]
  },
  {
    id: "g10-maths-linear-b-q13",
    prompt: "Draw x + y = 4. It passes through \u2014",
    options: [
      { id: "a", text: "(1,1) only" },
      { id: "b", text: "(0,4) and (4,0)" },
      { id: "c", text: "(2,3)" },
      { id: "d", text: "(0,0) only" }
    ],
    answerId: "b",
    explanation: "Put x = 0 to get y = 4 and y = 0 to get x = 4, so the line passes through (0, 4) and (4, 0). (2, 3) is tempting because it looks central, but 2 + 3 = 5, not 4.",
    hints: ["In x + y = 4, find where the line meets each axis: make one variable zero, then the other."]
  },
  {
    id: "g10-maths-linear-b-q14",
    prompt: "In the graphical method, the solution of a consistent independent pair is \u2014",
    options: [
      { id: "a", text: "the intersection point of the two lines" },
      { id: "b", text: "any point on either line" },
      { id: "c", text: "the midpoint of intercepts" },
      { id: "d", text: "origin" }
    ],
    answerId: "a",
    explanation: "A consistent independent pair has exactly one common solution: the point where the two lines cross. 'Any point on either line' is tempting, but a point on only one line fails the other equation.",
    hints: ["In the graphical method, draw both lines. Which single point lies on both lines at once?"]
  },
  {
    id: "g10-maths-linear-b-q15",
    prompt: "Solve: x + 2y = 5 and 3x + 2y = 11. Then x equals \u2014",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "2" },
      { id: "c", text: "1" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "Subtracting the first from the second gives 2x = 6, so x = 3 and then y = 1. 1 is tempting, but that is the value of y, not x.",
    hints: ["Subtract to eliminate y."]
  },
  {
    id: "g10-maths-linear-b-q16",
    prompt: "The pair  \u221a2 x + \u221a3 y = 0 and \u221a3 x \u2212 \u221a2 y = 0 has \u2014",
    options: [
      { id: "a", text: "unique solution (0,0)" },
      { id: "b", text: "no solution" },
      { id: "c", text: "infinite solutions" },
      { id: "d", text: "solution (1,1)" }
    ],
    answerId: "a",
    explanation: "The coefficient determinant is √2(−√2) − √3·√3 = −5 ≠ 0, so the only solution is (0, 0). (1, 1) is tempting, but √2 + √3 is not 0.",
    hints: ["Homogeneous with non-zero determinant ⇒ only (0,0)."]
  },
  {
    id: "g10-maths-linear-b-q17",
    prompt: "Five years ago, a man was seven times as old as his son. After five years he will be three times as old. Present ages (man, son) \u2014",
    options: [
      { id: "a", text: "(35, 5)" },
      { id: "b", text: "(30, 10)" },
      { id: "c", text: "(42, 12)" },
      { id: "d", text: "(40, 10)" }
    ],
    answerId: "d",
    explanation: "m\u22125=7(s\u22125); m+5=3(s+5). From first m=7s\u221230; plug: 7s\u221230+5=3s+15 \u2192 4s=40 \u2192 s=10, m=40.",
    hints: ["Set two equations from the two time frames."]
  },
  {
    id: "g10-maths-linear-b-q18",
    prompt: "For what value of k do the equations 2x \u2212 y = 3 and 4x \u2212 ky = 6 represent coincident lines?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "Coincident lines need 2/4 = (−1)/(−k) = 3/6, so 1/k = 1/2 and k = 2. 4 is tempting because 4 already appears as a coefficient, but k = 4 makes 1/k = 1/4, not 1/2.",
    hints: ["For coincident lines, 4x − ky = 6 must be exactly double 2x − y = 3. What must k be?"]
  },
  {
    id: "g10-maths-linear-b-q19",
    prompt: "The distance between parallel lines 3x + 4y \u2212 5 = 0 and 3x + 4y \u2212 15 = 0 is \u2014",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "5" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "Distance = |c1 − c2|/√(a² + b²) = |−5 + 15|/√(9 + 16) = 10/5 = 2. 10 is tempting, but it forgets to divide by √(3² + 4²) = 5.",
    hints: ["Distance |c1−c2|/√(a²+b²) for same a,b."]
  },
  {
    id: "g10-maths-linear-b-q20",
    prompt: "A chemist has two solutions: 20% and 50% acid. How much of each to make 10 L of 35%? Let x = litres of 20%. Then \u2014",
    options: [
      { id: "a", text: "x=3.5" },
      { id: "b", text: "x=7" },
      { id: "c", text: "x=2" },
      { id: "d", text: "x=5, (10\u2212x)=5" }
    ],
    answerId: "d",
    explanation: "0.2x+0.5(10\u2212x)=3.5 \u2192 2\u22120.3x=3.5? 0.2x+5\u22120.5x=3.5 \u2192 5\u22120.3x=3.5 \u2192 0.3x=1.5 \u2192 x=5.",
    hints: ["Acid balance: percent × volume."]
  },
  {
    id: "g10-maths-linear-b-q21",
    prompt: "Which system is inconsistent?",
    options: [
      { id: "a", text: "x=1 and y=2" },
      { id: "b", text: "x+y=2 and x\u2212y=0" },
      { id: "c", text: "x+y=2 and 2x+2y=5" },
      { id: "d", text: "x+y=2 and 2x+2y=4" }
    ],
    answerId: "c",
    explanation: "Second would need =4 to match; 5 makes parallel distinct lines.",
    hints: ["Inconsistent means parallel lines. Multiply x + y = 2 by 2 and compare its constant with each pair."]
  },
  {
    id: "g10-maths-linear-b-q22",
    prompt: "The value of k for which the system x + 2y = 3 and 5x + ky = 15 has infinitely many solutions is \u2014",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "5" },
      { id: "c", text: "3" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "Infinitely many solutions need 1/5 = 2/k = 3/15, so k = 10. 5 is tempting because it matches the x-coefficient, but 2/5 is not 1/5.",
    hints: ["Infinite solutions when all three ratios are equal."]
  },
  {
    id: "g10-maths-linear-b-q23",
    prompt: "If 3x + 4y = 10 and 6x + 8y = 20, the system has \u2014",
    options: [
      { id: "a", text: "infinitely many solutions" },
      { id: "b", text: "unique solution (2,1)" },
      { id: "c", text: "unique solution (0,0)" },
      { id: "d", text: "no solution" }
    ],
    answerId: "a",
    explanation: "6x + 8y = 20 is exactly 2 × (3x + 4y = 10), so the lines coincide and there are infinitely many solutions. 'No solution' is tempting because the coefficients are in ratio, but the constants are in the same ratio too.",
    hints: ["Multiply 3x + 4y = 10 by 2. Is it the same as 6x + 8y = 20?"]
  },
  {
    id: "g10-maths-linear-b-q24",
    prompt: "Solve: 5x \u2212 2y = 4 and 3x + y = 9. Then y equals \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "1" },
      { id: "c", text: "3" },
      { id: "d", text: "0" }
    ],
    answerId: "c",
    explanation: "From the second equation, y = 9 − 3x. Then 5x − 2(9 − 3x) = 4 → 5x − 18 + 6x = 4 → 11x = 22 → x = 2, so y = 9 − 6 = 3. 2 is tempting, but that is x, not y.",
    hints: ["Substitute y from one equation into the other."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u2696\ufe0f",
    title: "Pair of Linear Equations",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "balance",
    speak: "Two lines can meet once, never, or everywhere along a line.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "balance",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Unique", reveal: "a1/a2 \u2260 b1/b2", emoji: "\u2716\ufe0f" },
      { label: "None", reveal: "a1/a2 = b1/b2 \u2260 c1/c2", emoji: "\ud83d\udeab" },
      { label: "Infinite", reveal: "a1/a2 = b1/b2 = c1/c2", emoji: "\u267e\ufe0f" },
      { label: "Methods", reveal: "Graph, substitute, eliminate", emoji: "\ud83d\udee0\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "x + y = 6 and x \u2212 y = 2. What is x?",
    options: [
        { id: "a", text: "4" },
        { id: "b", text: "2" },
        { id: "c", text: "6" },
        { id: "d", text: "3" }
    ],
    answerId: "a",
    why: "Add the equations: 2x = 8, so x = 4.",
    visual: "balance",
    speak: "x + y = 6 and x \u2212 y = 2. What is x?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Linear pairs unlocked", "Three consistency cases", "Eliminate or substitute", "Check by plugging back"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10MathsLinearPair: ChapterDef = {
  id: "linear-pair",
  title: "Pair of Linear Equations",
  emoji: "\u2696\ufe0f",
  blurb: "Two lines, three outcomes",
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

export const g10MathsLinearPairQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
