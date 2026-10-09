import type { ChapterDef, PrepQuestion } from "../types";

/** Pair of Linear Equations - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-maths-linear-a-q01",
    prompt: "The graph of a linear equation in two variables is \u2014",
    options: [
      { id: "a", text: "a straight line" },
      { id: "b", text: "a parabola" },
      { id: "c", text: "a circle" },
      { id: "d", text: "a point only" }
    ],
    answerId: "a",
    explanation: "ax+by+c=0 graphs as a straight line.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q02",
    prompt: "The pair x + y = 5 and 2x + 2y = 10 has \u2014",
    options: [
      { id: "a", text: "infinitely many solutions" },
      { id: "b", text: "no solution" },
      { id: "c", text: "unique solution" },
      { id: "d", text: "exactly two solutions" }
    ],
    answerId: "a",
    explanation: "Second is 2\u00d7 the first: coincident lines.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q03",
    prompt: "The pair x + y = 5 and x + y = 7 has \u2014",
    options: [
      { id: "a", text: "no solution" },
      { id: "b", text: "unique solution" },
      { id: "c", text: "infinitely many" },
      { id: "d", text: "x=0 only" }
    ],
    answerId: "a",
    explanation: "Parallel distinct lines (same left side, different constants).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q04",
    prompt: "Solve: x + y = 7 and x \u2212 y = 1. Then (x, y) = \u2014",
    options: [
      { id: "a", text: "(4, 3)" },
      { id: "b", text: "(3, 4)" },
      { id: "c", text: "(5, 2)" },
      { id: "d", text: "(2, 5)" }
    ],
    answerId: "a",
    explanation: "Add: 2x=8 \u2192 x=4; y=3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q05",
    prompt: "For unique solution of a1x+b1y+c1=0 and a2x+b2y+c2=0 \u2014",
    options: [
      { id: "a", text: "a1/a2 \u2260 b1/b2" },
      { id: "b", text: "a1/a2 = b1/b2 = c1/c2" },
      { id: "c", text: "a1/a2 = b1/b2 \u2260 c1/c2" },
      { id: "d", text: "c1=c2=0" }
    ],
    answerId: "a",
    explanation: "Lines intersect at one point iff slopes differ: a1/a2 \u2260 b1/b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "2y+1+y=7 \u2192 3y=6 \u2192 y=2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q07",
    prompt: "Elimination: 2x+3y=5 and 3x+2y=5. Adding after suitable multiply yields \u2014",
    options: [
      { id: "a", text: "x=1, y=1" },
      { id: "b", text: "x=2, y=\u22121" },
      { id: "c", text: "x=0, y=5/3" },
      { id: "d", text: "x=5, y=\u22125" }
    ],
    answerId: "a",
    explanation: "Multiply first\u00d72, second\u00d73: 4x+6y=10, 9x+6y=15; subtract: \u22125x=\u22125 \u2192 x=1; y=1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q08",
    prompt: "The line x = 3 is \u2014",
    options: [
      { id: "a", text: "parallel to the y-axis" },
      { id: "b", text: "parallel to the x-axis" },
      { id: "c", text: "the x-axis" },
      { id: "d", text: "a circle" }
    ],
    answerId: "a",
    explanation: "x=3 is a vertical line, parallel to y-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q09",
    prompt: "The equation y = 0 represents \u2014",
    options: [
      { id: "a", text: "the x-axis" },
      { id: "b", text: "the y-axis" },
      { id: "c", text: "x=y" },
      { id: "d", text: "origin only" }
    ],
    answerId: "a",
    explanation: "All points with y-coordinate 0 form the x-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q10",
    prompt: "If 3x + 2y = 12 intersects axes at A and B, OA\u00b7OB for origin O equals \u2014",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "12" },
      { id: "c", text: "6" },
      { id: "d", text: "18" }
    ],
    answerId: "a",
    explanation: "x-int 4, y-int 6; product 24.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q11",
    prompt: "Solve by elimination: 3x \u2212 y = 3 and 9x \u2212 3y = 9. The system has \u2014",
    options: [
      { id: "a", text: "infinitely many solutions" },
      { id: "b", text: "no solution" },
      { id: "c", text: "unique solution (1,0)" },
      { id: "d", text: "unique solution (0,3)" }
    ],
    answerId: "a",
    explanation: "Second = 3\u00d7 first: dependent equations.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q12",
    prompt: "The solution of x \u2212 2y = 0 and 3x + 4y = 20 is \u2014",
    options: [
      { id: "a", text: "(4, 2)" },
      { id: "b", text: "(2, 4)" },
      { id: "c", text: "(5, 2.5)" },
      { id: "d", text: "(0, 0)" }
    ],
    answerId: "a",
    explanation: "x=2y; 6y+4y=20 \u2192 10y=20 \u2192 y=2, x=4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q13",
    prompt: "Graphically, inconsistent linear equations appear as \u2014",
    options: [
      { id: "a", text: "parallel lines" },
      { id: "b", text: "intersecting lines" },
      { id: "c", text: "coincident lines" },
      { id: "d", text: "perpendicular lines only" }
    ],
    answerId: "a",
    explanation: "No common point \u21d2 parallel distinct lines.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q14",
    prompt: "If am \u2212 bl \u2260 0 for equations ax+by=c, lx+my=n, the system has \u2014",
    options: [
      { id: "a", text: "unique solution" },
      { id: "b", text: "no solution" },
      { id: "c", text: "infinitely many" },
      { id: "d", text: "only x=0" }
    ],
    answerId: "a",
    explanation: "am\u2212bl is the determinant a1b2\u2212a2b1 (up to naming); non-zero \u21d2 unique.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q15",
    prompt: "The cost of 2 pens and 3 pencils is \u20b940; 3 pens and 2 pencils is \u20b945. Cost of one pen is \u2014",
    options: [
      { id: "a", text: "\u20b911" },
      { id: "b", text: "\u20b910" },
      { id: "c", text: "\u20b99" },
      { id: "d", text: "\u20b912" }
    ],
    answerId: "a",
    explanation: "2p+3c=40, 3p+2c=45. \u00d72 and \u00d73: 4p+6c=80, 9p+6c=135 \u2192 5p=55 \u2192 p=11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q16",
    prompt: "y = 2x + 1 and y = 2x \u2212 4 are \u2014",
    options: [
      { id: "a", text: "parallel" },
      { id: "b", text: "perpendicular" },
      { id: "c", text: "coincident" },
      { id: "d", text: "intersecting at one point" }
    ],
    answerId: "a",
    explanation: "Same slope 2, different intercepts \u21d2 parallel.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q17",
    prompt: "A pair of linear equations can represent \u2014",
    options: [
      { id: "a", text: "all of: unique, none, or infinitely many solutions" },
      { id: "b", text: "only unique solutions" },
      { id: "c", text: "only integers" },
      { id: "d", text: "only positive x" }
    ],
    answerId: "a",
    explanation: "Depending on ratios of coefficients.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q19",
    prompt: "Reduce 2x + 3y \u2212 9 = 0 and 4x + 6y \u2212 18 = 0. Consistency?",
    options: [
      { id: "a", text: "dependent (infinite solutions)" },
      { id: "b", text: "inconsistent" },
      { id: "c", text: "unique (1,1)" },
      { id: "d", text: "unique (0,3)" }
    ],
    answerId: "a",
    explanation: "Second = 2\u00d7 first exactly.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q20",
    prompt: "The point (0, 0) lies on ax + by + c = 0 if and only if \u2014",
    options: [
      { id: "a", text: "c = 0" },
      { id: "b", text: "a = 0" },
      { id: "c", text: "b = 0" },
      { id: "d", text: "a = b" }
    ],
    answerId: "a",
    explanation: "Plug (0,0): c=0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q21",
    prompt: "For equations x/2 + y/3 = 1 and x/3 + y/2 = 1, multiply by 6 to clear denominators. System becomes \u2014",
    options: [
      { id: "a", text: "3x + 2y = 6 and 2x + 3y = 6" },
      { id: "b", text: "x + y = 1 and x + y = 1" },
      { id: "c", text: "3x+2y=1 and 2x+3y=1" },
      { id: "d", text: "2x+3y=6 and 3x+2y=6" }
    ],
    answerId: "a",
    explanation: "\u00d76: 3x+2y=6 and 2x+3y=6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-a-q22",
    prompt: "Solving 3x+2y=6 and 2x+3y=6 by elimination, x equals \u2014",
    options: [
      { id: "a", text: "6/5" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "3/5" }
    ],
    answerId: "a",
    explanation: "\u00d73 and \u00d72: 9x+6y=18, 4x+6y=12 \u2192 5x=6 \u2192 x=6/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "f=3s; 3s+12=2(s+12) \u2192 3s+12=2s+24 \u2192 s=12, f=36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "x=2 is vertical; y=3 is horizontal; they meet at (2,3).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-maths-linear-b-q01",
    prompt: "The lines 2x \u2212 y \u2212 3 = 0 and 4x \u2212 2y \u2212 k = 0 are coincident for k = \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "3" },
      { id: "c", text: "0" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "Need a1/a2=b1/b2=c1/c2 \u2192 2/4=1/2=(\u22123)/(\u2212k) \u2192 1/2=3/k \u2192 k=6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q02",
    prompt: "For parallel lines 2x \u2212 y \u2212 3 = 0 and 4x \u2212 2y \u2212 k = 0, k \u2260 \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "0" },
      { id: "c", text: "3" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "Parallel when a1/a2=b1/b2\u2260c1/c2, so k\u22606.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q03",
    prompt: "Solve: 0.2x + 0.3y = 1.3 and 0.4x + 0.5y = 2.3. Then x = \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "1" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "\u00d710: 2x+3y=13, 4x+5y=23. \u00d72 first: 4x+6y=26; subtract: y=3; 2x+9=13 \u2192 x=2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Intercepts 4 and 3; area = (1/2)\u00d74\u00d73=6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q05",
    prompt: "If 2x + 3y = 17 and 3x \u2212 2y = 6, then 2x + 3y + 3x \u2212 2y equals \u2014",
    options: [
      { id: "a", text: "23" },
      { id: "b", text: "17" },
      { id: "c", text: "6" },
      { id: "d", text: "11" }
    ],
    answerId: "a",
    explanation: "Sum of left sides equals 17+6=23; simplifies to 5x+y.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q06",
    prompt: "A fraction becomes 1/2 if 1 is added to both numerator and denominator. It becomes 1/3 if 1 is subtracted from both. The fraction is \u2014",
    options: [
      { id: "a", text: "3/7" },
      { id: "b", text: "2/3" },
      { id: "c", text: "3/5" },
      { id: "d", text: "4/7" }
    ],
    answerId: "a",
    explanation: "From the two conditions, n=3 and d=7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q07",
    prompt: "Taxi charges \u20b915 for first km and \u20b98 per additional km. For d km (d\u22651), fare F satisfies \u2014",
    options: [
      { id: "a", text: "F = 8d + 7" },
      { id: "b", text: "F = 15d" },
      { id: "c", text: "F = 8d + 15" },
      { id: "d", text: "F = 7d + 8" }
    ],
    answerId: "a",
    explanation: "F=15+8(d\u22121)=8d+7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q08",
    prompt: "Two lines a1x+b1y+c1=0 and a2x+b2y+c2=0 are perpendicular if \u2014",
    options: [
      { id: "a", text: "a1a2 + b1b2 = 0" },
      { id: "b", text: "a1/a2 = b1/b2" },
      { id: "c", text: "a1a2 = b1b2" },
      { id: "d", text: "a1b2 \u2212 a2b1 = 0" }
    ],
    answerId: "a",
    explanation: "Slopes m1=\u2212a1/b1, m2=\u2212a2/b2; m1m2=\u22121 \u21d2 a1a2+b1b2=0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q09",
    prompt: "The solution set of 3x + 2y \u2212 1 = 0 and 3x + 2y \u2212 1 = 0 (same equation twice) is \u2014",
    options: [
      { id: "a", text: "infinitely many points on the line" },
      { id: "b", text: "empty" },
      { id: "c", text: "only (1/3,0)" },
      { id: "d", text: "only (0,1/2)" }
    ],
    answerId: "a",
    explanation: "Identical equations \u21d2 every point of the line.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q10",
    prompt: "Using matrices idea: for  x + y = 5, 2x \u2212 y = 4, adding gives \u2014",
    options: [
      { id: "a", text: "3x = 9 so x=3, then y=2" },
      { id: "b", text: "x=5" },
      { id: "c", text: "y=4" },
      { id: "d", text: "x=y=0" }
    ],
    answerId: "a",
    explanation: "Add: 3x=9 \u2192 x=3; from x+y=5, y=2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q11",
    prompt: "Which ordered pair satisfies both x \u2212 y = 2 and 2x + y = 7?",
    options: [
      { id: "a", text: "(3, 1)" },
      { id: "b", text: "(2, 0)" },
      { id: "c", text: "(1, \u22121)" },
      { id: "d", text: "(4, 2)" }
    ],
    answerId: "a",
    explanation: "3\u22121=2 and 6+1=7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q12",
    prompt: "If the system kx + 2y = 5 and 3x + y = 1 has no solution, then k equals \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "3" },
      { id: "c", text: "2" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "a1/a2=b1/b2\u2260c1/c2 \u2192 k/3 = 2/1 \u21d2 k=6, and 5/1 \u2260 that ratio for c.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q13",
    prompt: "Draw x + y = 4. It passes through \u2014",
    options: [
      { id: "a", text: "(0,4) and (4,0)" },
      { id: "b", text: "(0,0) only" },
      { id: "c", text: "(2,3)" },
      { id: "d", text: "(1,1) only" }
    ],
    answerId: "a",
    explanation: "Axis intercepts are 4 and 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Unique solution = unique intersection.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q15",
    prompt: "Solve: x + 2y = 5 and 3x + 2y = 11. Then x equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "1" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "Subtract: 2x=6 \u2192 x=3; then y=1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q16",
    prompt: "The pair  \u221a2 x + \u221a3 y = 0 and \u221a3 x \u2212 \u221a2 y = 0 has \u2014",
    options: [
      { id: "a", text: "unique solution (0,0)" },
      { id: "b", text: "infinite solutions" },
      { id: "c", text: "no solution" },
      { id: "d", text: "solution (1,1)" }
    ],
    answerId: "a",
    explanation: "Determinant  \u22122\u22123=\u22125\u22600, only trivial solution.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q17",
    prompt: "Five years ago, a man was seven times as old as his son. After five years he will be three times as old. Present ages (man, son) \u2014",
    options: [
      { id: "a", text: "(40, 10)" },
      { id: "b", text: "(35, 5)" },
      { id: "c", text: "(42, 12)" },
      { id: "d", text: "(30, 10)" }
    ],
    answerId: "a",
    explanation: "m\u22125=7(s\u22125); m+5=3(s+5). From first m=7s\u221230; plug: 7s\u221230+5=3s+15 \u2192 4s=40 \u2192 s=10, m=40.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q18",
    prompt: "For what value of k do the equations 2x \u2212 y = 3 and 4x \u2212 ky = 6 represent coincident lines?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "1" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Need 2/4 = 1/k = 3/6 \u2192 k=2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q19",
    prompt: "The distance between parallel lines 3x + 4y \u2212 5 = 0 and 3x + 4y \u2212 15 = 0 is \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "10" },
      { id: "c", text: "1" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "|\u22125\u2212(\u221215)|/5 = 10/5=2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q20",
    prompt: "A chemist has two solutions: 20% and 50% acid. How much of each to make 10 L of 35%? Let x = litres of 20%. Then \u2014",
    options: [
      { id: "a", text: "x=5, (10\u2212x)=5" },
      { id: "b", text: "x=3.5" },
      { id: "c", text: "x=7" },
      { id: "d", text: "x=2" }
    ],
    answerId: "a",
    explanation: "0.2x+0.5(10\u2212x)=3.5 \u2192 2\u22120.3x=3.5? 0.2x+5\u22120.5x=3.5 \u2192 5\u22120.3x=3.5 \u2192 0.3x=1.5 \u2192 x=5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q21",
    prompt: "Which system is inconsistent?",
    options: [
      { id: "a", text: "x+y=2 and 2x+2y=5" },
      { id: "b", text: "x+y=2 and 2x+2y=4" },
      { id: "c", text: "x+y=2 and x\u2212y=0" },
      { id: "d", text: "x=1 and y=2" }
    ],
    answerId: "a",
    explanation: "Second would need =4 to match; 5 makes parallel distinct lines.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q22",
    prompt: "The value of k for which the system x + 2y = 3 and 5x + ky = 15 has infinitely many solutions is \u2014",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "5" },
      { id: "c", text: "3" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "1/5 = 2/k = 3/15 \u2192 k=10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q23",
    prompt: "If 3x + 4y = 10 and 6x + 8y = 20, the system has \u2014",
    options: [
      { id: "a", text: "infinitely many solutions" },
      { id: "b", text: "no solution" },
      { id: "c", text: "unique solution (2,1)" },
      { id: "d", text: "unique solution (0,0)" }
    ],
    answerId: "a",
    explanation: "Second equation is exactly twice the first.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-linear-b-q24",
    prompt: "Solve: 5x \u2212 2y = 4 and 3x + y = 9. Then y equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "From second y=9\u22123x; 5x\u22122(9\u22123x)=4 \u2192 5x\u221218+6x=4 \u2192 11x=22 \u2192 x=2; y=3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
