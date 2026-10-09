import type { ChapterDef, PrepQuestion } from "../types";

/** Data Handling - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-data-a-q01",
    prompt: "What are data?",
    options: [
      { id: "a", text: "Only drawings" },
      { id: "b", text: "Facts and numbers we collect" },
      { id: "c", text: "Only graphs" },
      { id: "d", text: "Only tallies" }
    ],
    answerId: "b",
    explanation: "Data are facts and numbers collected for a purpose.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q02",
    prompt: "In tally marks, a bundle with a diagonal stroke across four lines stands for how many?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "10" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Four upright strokes plus one across make a bundle of 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q03",
    prompt: "A pictograph key says 1 \u2b50 = 2 children. How many children do 4 stars show?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "4 \u00d7 2 = 8 children.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q04",
    prompt: "In a bar graph, bars should have\u2026",
    options: [
      { id: "a", text: "Different widths" },
      { id: "b", text: "Equal widths" },
      { id: "c", text: "No scale" },
      { id: "d", text: "No title" }
    ],
    answerId: "b",
    explanation: "Bars are drawn with equal width so heights can be compared fairly.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q05",
    prompt: "Which graph uses pictures to show data?",
    options: [
      { id: "a", text: "Bar graph" },
      { id: "b", text: "Pictograph" },
      { id: "c", text: "Number line only" },
      { id: "d", text: "Place-value chart" }
    ],
    answerId: "b",
    explanation: "A pictograph uses pictures (icons) for quantities.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q06",
    prompt: "The number of times a value appears is called its\u2026",
    options: [
      { id: "a", text: "Average" },
      { id: "b", text: "Mode only" },
      { id: "c", text: "Frequency" },
      { id: "d", text: "Perimeter" }
    ],
    answerId: "c",
    explanation: "Frequency is how often a value appears.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q07",
    prompt: "Tally marks for 7 are best written as\u2026",
    options: [
      { id: "a", text: "Seven single strokes only with no bundles" },
      { id: "b", text: "One bundle of 5 and two more" },
      { id: "c", text: "Two bundles of 5" },
      { id: "d", text: "One stroke" }
    ],
    answerId: "b",
    explanation: "7 = 5 + 2, so one bundle and two strokes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q08",
    prompt: "A bar graph shows favourite colours. The tallest bar means\u2026",
    options: [
      { id: "a", text: "The least popular colour" },
      { id: "b", text: "The most popular colour" },
      { id: "c", text: "An error" },
      { id: "d", text: "Equal votes" }
    ],
    answerId: "b",
    explanation: "The tallest bar has the greatest frequency.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q09",
    prompt: "What is the average of 2, 4 and 6?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "Total 12 divided by 3 numbers gives 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q10",
    prompt: "In the list 3, 5, 5, 7, the mode is\u2026",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "7" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "5 appears most often, so the mode is 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q11",
    prompt: "A table has columns for Name and Marks. To find Meera's marks you\u2026",
    options: [
      { id: "a", text: "Ignore headings" },
      { id: "b", text: "Find Meera's row and read the Marks cell" },
      { id: "c", text: "Add all marks" },
      { id: "d", text: "Draw a pictograph first" }
    ],
    answerId: "b",
    explanation: "Use the row for Meera and the Marks column.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q12",
    prompt: "If 1 icon = 5 books and Monday shows 3 icons, Monday has how many books?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "8" },
      { id: "c", text: "15" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "3 \u00d7 5 = 15 books.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q13",
    prompt: "A class survey: Bus 12, Walk 8, Cycle 5. How many children were surveyed?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "20" },
      { id: "c", text: "25" },
      { id: "d", text: "15" }
    ],
    answerId: "c",
    explanation: "12 + 8 + 5 = 25 children.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q14",
    prompt: "Using the same survey (Bus 12, Walk 8, Cycle 5), how many more chose bus than cycle?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "12 \u2212 5 = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q15",
    prompt: "A pictograph key is 1 \ud83d\ude97 = 10 cars. There are 2\u00bd car icons. How many cars?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "20" },
      { id: "c", text: "25" },
      { id: "d", text: "30" }
    ],
    answerId: "c",
    explanation: "2 \u00d7 10 = 20 and half an icon = 5, total 25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q16",
    prompt: "Bars on a graph show scores 20, 35, 15, 30. What is the highest score shown?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "35" },
      { id: "c", text: "15" },
      { id: "d", text: "30" }
    ],
    answerId: "b",
    explanation: "35 is the greatest value.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q17",
    prompt: "What is the average of 10, 20, 30 and 40?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "25" },
      { id: "c", text: "30" },
      { id: "d", text: "100" }
    ],
    answerId: "b",
    explanation: "Sum 100 \u00f7 4 = 25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q18",
    prompt: "In 2, 2, 3, 4, 4, 4, 5, the mode is\u2026",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "4 appears three times, more than any other value.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q19",
    prompt: "A tally shows |||| |||| || for red votes. How many votes for red?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "12" },
      { id: "c", text: "8" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "Two bundles of 5 and two more make 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q20",
    prompt: "Which is needed on a clear bar graph?",
    options: [
      { id: "a", text: "A title and labelled axes" },
      { id: "b", text: "Only colours" },
      { id: "c", text: "No scale" },
      { id: "d", text: "Random bar widths" }
    ],
    answerId: "a",
    explanation: "Title, labels and scale make the graph readable.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q21",
    prompt: "Rainfall (mm) Mon\u2013Fri: 2, 0, 5, 3, 5. What is the average rainfall?",
    options: [
      { id: "a", text: "3 mm" },
      { id: "b", text: "5 mm" },
      { id: "c", text: "2 mm" },
      { id: "d", text: "15 mm" }
    ],
    answerId: "a",
    explanation: "Sum 15 \u00f7 5 = 3 mm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q22",
    prompt: "In a pictograph, 1 \ud83c\udf4e = 4 children. Friday shows 1\u00be icons. How many children?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "1 icon = 4 and \u00be icon = 3, total 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q23",
    prompt: "Marks: 12, 15, 18, 15, 20. What is the mode?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "15" },
      { id: "c", text: "18" },
      { id: "d", text: "20" }
    ],
    answerId: "b",
    explanation: "15 appears twice; every other mark appears once.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-a-q24",
    prompt: "A bar graph scale is 1 unit = 5 students. A bar reaches 6 units. How many students?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "11" },
      { id: "c", text: "30" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "6 \u00d7 5 = 30 students.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-data-b-q01",
    prompt: "Why do we organise data in tables?",
    options: [
      { id: "a", text: "To hide numbers" },
      { id: "b", text: "To make data neat and easy to read" },
      { id: "c", text: "To avoid totals" },
      { id: "d", text: "To erase tallies" }
    ],
    answerId: "b",
    explanation: "Tables organise data so patterns are easier to see.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q02",
    prompt: "Four tally bundles of five each show how many?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "20" },
      { id: "d", text: "9" }
    ],
    answerId: "c",
    explanation: "4 \u00d7 5 = 20.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q03",
    prompt: "A pictograph key says 1 \ud83d\udcd8 = 10 books. How many books do 2 icons show?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "10" },
      { id: "c", text: "20" },
      { id: "d", text: "12" }
    ],
    answerId: "c",
    explanation: "2 \u00d7 10 = 20 books.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q04",
    prompt: "The horizontal line at the bottom of a bar graph is called the\u2026",
    options: [
      { id: "a", text: "Title" },
      { id: "b", text: "Scale only" },
      { id: "c", text: "Horizontal axis (or x-axis)" },
      { id: "d", text: "Mode" }
    ],
    answerId: "c",
    explanation: "The bottom axis is the horizontal axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q05",
    prompt: "Which display uses bars of equal width?",
    options: [
      { id: "a", text: "Pictograph" },
      { id: "b", text: "Bar graph" },
      { id: "c", text: "Tally only" },
      { id: "d", text: "Place-value chart" }
    ],
    answerId: "b",
    explanation: "Bar graphs use equal-width bars.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q06",
    prompt: "Raw scores written as they are collected are called\u2026",
    options: [
      { id: "a", text: "Raw data" },
      { id: "b", text: "Mode" },
      { id: "c", text: "Perimeter" },
      { id: "d", text: "Percent" }
    ],
    answerId: "a",
    explanation: "Unsorted collected facts are raw data.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q07",
    prompt: "Tally marks for 3 look like\u2026",
    options: [
      { id: "a", text: "One bundle of 5" },
      { id: "b", text: "Three single strokes" },
      { id: "c", text: "Two bundles" },
      { id: "d", text: "Ten strokes" }
    ],
    answerId: "b",
    explanation: "Three is fewer than five, so three single strokes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q08",
    prompt: "The shortest bar on a bar graph shows\u2026",
    options: [
      { id: "a", text: "The greatest frequency" },
      { id: "b", text: "The least frequency" },
      { id: "c", text: "The average" },
      { id: "d", text: "The mode always" }
    ],
    answerId: "b",
    explanation: "Shortest bar means the smallest count.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q09",
    prompt: "What is the average of 5, 5 and 8?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "18" }
    ],
    answerId: "b",
    explanation: "Sum 18 \u00f7 3 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q10",
    prompt: "In the list 9, 1, 9, 2, the mode is\u2026",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "9" },
      { id: "d", text: "There is no mode" }
    ],
    answerId: "c",
    explanation: "9 appears twice; others appear once.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q11",
    prompt: "A table shows Day and Temperature. Tuesday's temperature is found by\u2026",
    options: [
      { id: "a", text: "Reading Tuesday's row" },
      { id: "b", text: "Ignoring the table" },
      { id: "c", text: "Only using a pictograph" },
      { id: "d", text: "Guessing" }
    ],
    answerId: "a",
    explanation: "Find the Tuesday row and read the temperature.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q12",
    prompt: "If 1 icon = 3 balls and there are 5 icons, how many balls?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "8" },
      { id: "d", text: "15" }
    ],
    answerId: "d",
    explanation: "5 \u00d7 3 = 15 balls.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q13",
    prompt: "Ice-cream flavours: Vanilla 9, Chocolate 14, Strawberry 7. How many children chose chocolate or vanilla?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "23" },
      { id: "c", text: "16" },
      { id: "d", text: "30" }
    ],
    answerId: "b",
    explanation: "14 + 9 = 23.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q14",
    prompt: "Using Vanilla 9, Chocolate 14, Strawberry 7, how many fewer chose strawberry than chocolate?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "9" },
      { id: "d", text: "14" }
    ],
    answerId: "b",
    explanation: "14 \u2212 7 = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q15",
    prompt: "A pictograph key is 1 \ud83c\udf33 = 4 trees. There are 3\u00bc icons. How many trees?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "13" },
      { id: "c", text: "14" },
      { id: "d", text: "16" }
    ],
    answerId: "b",
    explanation: "3 \u00d7 4 = 12 and \u00bc icon = 1, total 13.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q16",
    prompt: "Bars show library visitors: 40, 55, 35, 60. What is the least number of visitors?",
    options: [
      { id: "a", text: "40" },
      { id: "b", text: "55" },
      { id: "c", text: "35" },
      { id: "d", text: "60" }
    ],
    answerId: "c",
    explanation: "35 is the smallest value.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q17",
    prompt: "What is the average of 8, 12 and 16?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "11" },
      { id: "c", text: "14" },
      { id: "d", text: "36" }
    ],
    answerId: "a",
    explanation: "Sum 36 \u00f7 3 = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q18",
    prompt: "In 6, 7, 7, 8, 9, 7, the mode is\u2026",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "9" }
    ],
    answerId: "b",
    explanation: "7 appears three times.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q19",
    prompt: "A tally shows |||| |||| |||| | for blue cars. How many blue cars?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "15" },
      { id: "c", text: "16" },
      { id: "d", text: "20" }
    ],
    answerId: "c",
    explanation: "Three bundles of 5 and one more = 16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q20",
    prompt: "Scale on a bar graph is 1 unit = 2 goals. A bar is 9 units tall. Goals scored?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "11" },
      { id: "c", text: "18" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "9 \u00d7 2 = 18 goals.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q21",
    prompt: "Weekly steps (thousands): 4, 6, 5, 7, 3. What is the average?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "4" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "Sum 25 \u00f7 5 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q22",
    prompt: "In a pictograph, 1 \ud83d\udc1f = 8 fish. A day shows 2\u00be icons. How many fish?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "20" },
      { id: "c", text: "22" },
      { id: "d", text: "24" }
    ],
    answerId: "c",
    explanation: "2 \u00d7 8 = 16 and \u00be \u00d7 8 = 6, total 22.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q23",
    prompt: "Scores: 11, 14, 11, 17, 14, 14. What is the mode?",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "14" },
      { id: "c", text: "17" },
      { id: "d", text: "13" }
    ],
    answerId: "b",
    explanation: "14 appears three times; 11 appears twice.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-data-b-q24",
    prompt: "A class has this bar scale: 1 unit = 4 pupils. Reading bar height 7.5 units means how many pupils?",
    options: [
      { id: "a", text: "7.5" },
      { id: "b", text: "11.5" },
      { id: "c", text: "30" },
      { id: "d", text: "32" }
    ],
    answerId: "c",
    explanation: "7.5 \u00d7 4 = 30 pupils.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "📊",
    title: "Data handling",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Organise data with tallies, pictographs and bar graphs. Find average and mode.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Tally", reveal: "Bundles of five make counting fast", emoji: "||||" },
      { label: "Pictograph", reveal: "Read the key \u2014 each icon has a value", emoji: "\ud83d\uddbc\ufe0f" },
      { label: "Bar graph", reveal: "Equal bars; height shows the number", emoji: "\ud83d\udcca" },
      { label: "Average & mode", reveal: "Mean divides the total; mode appears most", emoji: "\u2b50" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Average of 4, 6 and 8?",
    options: [
        { id: "a", text: "4" },
        { id: "b", text: "6" },
        { id: "c", text: "8" },
        { id: "d", text: "18" }
    ],
    answerId: "b",
    why: "Sum 18 \u00f7 3 = 6.",
    visual: "number-line",
    speak: "Average of 4, 6 and 8?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Read keys and scales", "Compare carefully", "Mean and mode", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5MathsData: ChapterDef = {
  id: "data-handling",
  title: "Data Handling",
  emoji: "📊",
  blurb: "Tallies, graphs, average and mode",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "percent",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "percent",
      questions: SET_B,
    },
  ],
  paperTopics: ["percent", "decimals", "add-sub"],
};

export const g5MathsDataQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
