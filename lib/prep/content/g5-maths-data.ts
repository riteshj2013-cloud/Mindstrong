import type { ChapterDef, PrepQuestion } from "../types";
import { g5MathsDataAchievers } from "./g5-maths-data-achievers";

/** Data Handling - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-data-a-q01",
    prompt: "What are data?",
    options: [
      { id: "a", text: "Facts and numbers we collect" },
      { id: "b", text: "Only drawings" },
      { id: "c", text: "Only graphs" },
      { id: "d", text: "Only tallies" }
    ],
    answerId: "a",
    explanation: "Data are facts and numbers collected for a purpose. Only drawings is tempting if you confuse a display of data with the data itself; drawings, graphs, and tallies are ways to show data, not the whole definition.",
    hints: ["Think of a class survey of favourite fruits: the information you write down is the data."]
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
    explanation: "Four upright strokes plus one across make a bundle of 5. 4 is tempting if you count only the upright strokes and forget the diagonal that completes the bundle of 5.",
    hints: ["Count the strokes in one tally bundle: the four upright lines plus the diagonal stroke."]
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
    explanation: "4 × 2 = 8 children. 6 is tempting if you add every row except the one named in the question; reading the named category gives 8.",
    hints: ["Each star stands for 2 children. Add 2 for every one of the 4 stars."]
  },
  {
    id: "g5-maths-data-a-q04",
    prompt: "In a bar graph, bars should have\u2026",
    options: [
      { id: "a", text: "Different widths" },
      { id: "b", text: "No scale" },
      { id: "c", text: "No title" },
      { id: "d", text: "Equal widths" }
    ],
    answerId: "d",
    explanation: "Bars must have equal widths so only their heights carry the quantities. Different widths is tempting if you think wider bars somehow show larger amounts; unequal width would make fair height comparison impossible.",
    hints: ["If one bar were fatter, it would look bigger than it really is. Bars should differ only in height."]
  },
  {
    id: "g5-maths-data-a-q05",
    prompt: "Which graph uses pictures to show data?",
    options: [
      { id: "a", text: "Pictograph" },
      { id: "b", text: "Bar graph" },
      { id: "c", text: "Number line only" },
      { id: "d", text: "Place-value chart" }
    ],
    answerId: "a",
    explanation: "A pictograph uses pictures (icons) for quantities. Bar graph is tempting if you assume every display of amounts must use bars, forgetting that pictographs use pictures instead.",
    hints: ["Look for the display whose key says what one picture stands for, like ⭐ = 2 children."]
  },
  {
    id: "g5-maths-data-a-q06",
    prompt: "The number of times a value appears is called its\u2026",
    options: [
      { id: "a", text: "Average" },
      { id: "b", text: "Frequency" },
      { id: "c", text: "Mode only" },
      { id: "d", text: "Perimeter" }
    ],
    answerId: "b",
    explanation: "Frequency means how often a value appears. Average is tempting if you confuse the count of appearances with a typical middle value of the set.",
    hints: ["Think of tally marks counting how many times each value appears. What is that count called?"]
  },
  {
    id: "g5-maths-data-a-q07",
    prompt: "Tally marks for 7 are best written as\u2026",
    options: [
      { id: "a", text: "Seven single strokes only with no bundles" },
      { id: "b", text: "Two bundles of 5" },
      { id: "c", text: "One bundle of 5 and two more" },
      { id: "d", text: "One stroke" }
    ],
    answerId: "c",
    explanation: "7 = 5 + 2, so write one crossed bundle and two single strokes. Seven single strokes only with no bundles is tempting if you draw one stroke for each count and never group them into bundles of 5.",
    hints: ["A tally bundle is a group of upright strokes with a slash. Take one bundle away from 7 and count what is left."]
  },
  {
    id: "g5-maths-data-a-q08",
    prompt: "A bar graph shows favourite colours. The tallest bar means\u2026",
    options: [
      { id: "a", text: "The least popular colour" },
      { id: "b", text: "An error" },
      { id: "c", text: "Equal votes" },
      { id: "d", text: "The most popular colour" }
    ],
    answerId: "d",
    explanation: "The tallest bar has the greatest frequency, so it shows the most popular colour. The least popular colour is tempting if you mix up tallest with shortest and treat the tallest bar as the least popular.",
    hints: ["A taller bar means more votes for that colour. What do the most votes tell you?"]
  },
  {
    id: "g5-maths-data-a-q09",
    prompt: "What is the average of 2, 4 and 6?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "Total 12 divided by 3 numbers gives 4. 3 is tempting if you double-count a bar or pictograph symbol when totalling; the careful total is 4.",
    hints: ["For the average, add the three numbers and divide the total by how many there are."]
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
    explanation: "5 appears most often, so the mode is 5. 4 is tempting if you read the scale mark just above or below the true height; the chart reading is 5.",
    hints: ["Count how many times each value in the list appears. The mode is the value seen most often."]
  },
  {
    id: "g5-maths-data-a-q11",
    prompt: "A table has columns for Name and Marks. To find Meera's marks you\u2026",
    options: [
      { id: "a", text: "Ignore headings" },
      { id: "b", text: "Add all marks" },
      { id: "c", text: "Find Meera's row and read the Marks cell" },
      { id: "d", text: "Draw a pictograph first" }
    ],
    answerId: "c",
    explanation: "Find Meera's row, then read the Marks cell in that row. Add all marks is tempting if you think “Meera's marks” means a total, so you add up the whole Marks column instead of reading just Meera's row.",
    hints: ["A table has a row for each name and a column for each heading. Where do Meera's row and the Marks column meet?"]
  },
  {
    id: "g5-maths-data-a-q12",
    prompt: "If 1 icon = 5 books and Monday shows 3 icons, Monday has how many books?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "8" },
      { id: "c", text: "5" },
      { id: "d", text: "15" }
    ],
    answerId: "d",
    explanation: "3 × 5 = 15 books. 8 is tempting if you count symbols without using the key; with the key the total is 15.",
    hints: ["Each icon stands for 5 books. Add 5 for each of the 3 icons."]
  },
  {
    id: "g5-maths-data-a-q13",
    prompt: "A class survey: Bus 12, Walk 8, Cycle 5. How many children were surveyed?",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "12" },
      { id: "c", text: "20" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "12 + 8 + 5 = 25 children. 20 is tempting if you combine two neighbouring categories instead of the asked one; the asked reading is 25.",
    hints: ["Every child chose one way, so add the Bus, Walk and Cycle numbers."]
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
    explanation: "The correct answer is 7. 8 is tempting if you forget the key (how many each symbol stands for) halfway through; applying the key throughout gives 7.",
    hints: ["How many more means subtract: take the Cycle number from the Bus number."]
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
    explanation: "2 × 10 = 20 and half an icon = 5, total 25. 20 is tempting if you include a half-symbol as a whole (or ignore it); counting halves correctly gives 25.",
    hints: ["Two whole icons are 2 × 10 cars. Half an icon is half of 10 cars."]
  },
  {
    id: "g5-maths-data-a-q16",
    prompt: "Bars on a graph show scores 20, 35, 15, 30. What is the highest score shown?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "15" },
      { id: "c", text: "30" },
      { id: "d", text: "35" }
    ],
    answerId: "d",
    explanation: "35 is the greatest value. 30 is tempting if you read the wrong row or column, or skip a category when totalling; the correct reading is 35.",
    hints: ["Compare the bar scores one by one and keep the biggest; the tallest bar shows it."]
  },
  {
    id: "g5-maths-data-a-q17",
    prompt: "What is the average of 10, 20, 30 and 40?",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "20" },
      { id: "c", text: "30" },
      { id: "d", text: "100" }
    ],
    answerId: "a",
    explanation: "Sum 100 ÷ 4 = 25. 20 is tempting if you divide the total by the number of categories when the question only asks for a total or a single bar; the answer is 25.",
    hints: ["Add 10, 20, 30 and 40, then divide the total by 4."]
  },
  {
    id: "g5-maths-data-a-q18",
    prompt: "In 2, 2, 3, 4, 4, 4, 5, the mode is\u2026",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "3" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "4 appears three times, more than any other value. 3 is tempting if you rank the bars and pick the runner-up instead of the asked value; the asked reading is 4.",
    hints: ["Tally how many times each value appears in the list. The mode is the most frequent value."]
  },
  {
    id: "g5-maths-data-a-q19",
    prompt: "Look at the tally chart. How many votes for red?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "8" },
      { id: "c", text: "12" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "Two crossed bundles of 5 and two single strokes make 5 + 5 + 2 = 12. 10 is tempting if you count only the two bundles and forget the two extra strokes.",
    hints: ["Each crossed group is a bundle of 5. Count the bundles, then the single strokes."]
  ,
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Tally of two crossed bundles of five and two single strokes\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"160.0\" y=\"28\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Red votes tally</text>\n  <line class=\"part tally\" x1=\"40\" y1=\"70\" x2=\"40\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"50\" y1=\"70\" x2=\"50\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"60\" y1=\"70\" x2=\"60\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"70\" y1=\"70\" x2=\"70\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally-slash\" x1=\"36\" y1=\"114\" x2=\"74\" y2=\"76\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"102\" y1=\"70\" x2=\"102\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"112\" y1=\"70\" x2=\"112\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"122\" y1=\"70\" x2=\"122\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"132\" y1=\"70\" x2=\"132\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally-slash\" x1=\"98\" y1=\"114\" x2=\"136\" y2=\"76\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"164\" y1=\"70\" x2=\"164\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"174\" y1=\"70\" x2=\"174\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label small\" x=\"160.0\" y=\"145\" font-size=\"11\" text-anchor=\"middle\" fill=\"#666\">Each crossed group is a bundle of 5.</text>\n</svg>", "alt": "Two crossed tally bundles of five and two single strokes for red votes."}},
  {
    id: "g5-maths-data-a-q20",
    prompt: "Which is needed on a clear bar graph?",
    options: [
      { id: "a", text: "Only colours" },
      { id: "b", text: "No scale" },
      { id: "c", text: "Random bar widths" },
      { id: "d", text: "A title and labelled axes" }
    ],
    answerId: "d",
    explanation: "A clear bar graph needs a title and labelled axes (and a scale). Only colours is tempting if you think colouring the bars is enough and skip the title, labels and scale that make the graph readable.",
    hints: ["A reader must know what the bar graph is about and what each line measures. What tells them that?"]
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
    explanation: "Sum 15 ÷ 5 = 3 mm. 2 mm is tempting if you total the scores but divide by the wrong count; the average is 3 mm.",
    hints: ["Add the five daily rainfall amounts, then divide the total by the number of days."]
  },
  {
    id: "g5-maths-data-a-q22",
    prompt: "In a pictograph, 1 \ud83c\udf4e = 4 children. Friday shows 1\u00be icons. How many children?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "1 icon = 4 and ¾ icon = 3, total 7. 6 is tempting if you start the vertical scale from the first labelled tick instead of zero; reading from zero gives 7.",
    hints: ["One whole icon is 4 children. Three quarters of an icon is ¾ of 4 children."]
  },
  {
    id: "g5-maths-data-a-q23",
    prompt: "Marks: 12, 15, 18, 15, 20. What is the mode?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "18" },
      { id: "c", text: "15" },
      { id: "d", text: "20" }
    ],
    answerId: "c",
    explanation: "15 appears twice; every other mark appears once. 12 is tempting if you confuse frequency with cumulative total across the table; the single-cell value is 15.",
    hints: ["Count how often each mark appears. The mode is the mark that appears the most times."]
  },
  {
    id: "g5-maths-data-a-q24",
    prompt: "A bar graph scale is 1 unit = 5 students. A bar reaches 6 units. How many students?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "11" },
      { id: "c", text: "5" },
      { id: "d", text: "30" }
    ],
    answerId: "d",
    explanation: "Each unit stands for 5 students, so 6 × 5 = 30. 11 is tempting if you add the 6 units to the scale factor 5 instead of multiplying.",
    hints: ["Each unit stands for 5 students. Multiply the 6 units by 5."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-data-b-q01",
    prompt: "Why do we organise data in tables?",
    options: [
      { id: "a", text: "To make data neat and easy to read" },
      { id: "b", text: "To hide numbers" },
      { id: "c", text: "To avoid totals" },
      { id: "d", text: "To erase tallies" }
    ],
    answerId: "a",
    explanation: "Tables organise data so patterns are easier to see. \"To hide numbers\" is tempting if you reverse that purpose, but tables are meant to make data neat and easy to read.",
    hints: ["Imagine 30 survey answers in one long sentence versus in a table's rows and columns. Which is quicker to read?"]
  },
  {
    id: "g5-maths-data-b-q02",
    prompt: "Four tally bundles of five each show how many?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "20" },
      { id: "c", text: "5" },
      { id: "d", text: "9" }
    ],
    answerId: "b",
    explanation: "Four bundles of five strokes each make 4 × 5 = 20. 4 is tempting if you count the number of bundles instead of the strokes inside them.",
    hints: ["Each tally bundle is five strokes. Count in fives, once for each bundle."]
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
    explanation: "2 × 10 = 20 books. 2 is tempting if you skip a tally bundle when crossing from one group to the next; counting every bundle gives 20.",
    hints: ["Each icon stands for 10 books. Add 10 for each of the 2 icons."]
  },
  {
    id: "g5-maths-data-b-q04",
    prompt: "The horizontal line at the bottom of a bar graph is called the\u2026",
    options: [
      { id: "a", text: "Title" },
      { id: "b", text: "Scale only" },
      { id: "c", text: "Mode" },
      { id: "d", text: "Horizontal axis (or x-axis)" }
    ],
    answerId: "d",
    explanation: "The line along the bottom of a bar graph is the horizontal axis (x-axis). Title is tempting if you name the heading written above the graph instead of that bottom axis.",
    hints: ["The two lines that frame a bar graph are its axes. Which one runs along the bottom, left to right?"]
  },
  {
    id: "g5-maths-data-b-q05",
    prompt: "Which display uses bars of equal width?",
    options: [
      { id: "a", text: "Bar graph" },
      { id: "b", text: "Pictograph" },
      { id: "c", text: "Tally only" },
      { id: "d", text: "Place-value chart" }
    ],
    answerId: "a",
    explanation: "A bar graph draws bars of equal width. Pictograph is tempting if you remember that pictographs also compare amounts, but they use pictures, not equal-width bars.",
    hints: ["Which display draws a rectangle of the same width for each item, with heights that differ?"]
  },
  {
    id: "g5-maths-data-b-q06",
    prompt: "Raw scores written as they are collected are called\u2026",
    options: [
      { id: "a", text: "Mode" },
      { id: "b", text: "Raw data" },
      { id: "c", text: "Perimeter" },
      { id: "d", text: "Percent" }
    ],
    answerId: "b",
    explanation: "Scores written as collected, before sorting, are raw data. Mode is tempting if you name a summary of the data (the most common value) instead of the unsorted list itself.",
    hints: ["Scores written down just as they come, before any sorting, are not organised yet. What are such data called?"]
  },
  {
    id: "g5-maths-data-b-q07",
    prompt: "Tally marks for 3 look like\u2026",
    options: [
      { id: "a", text: "One bundle of 5" },
      { id: "b", text: "Two bundles" },
      { id: "c", text: "Three single strokes" },
      { id: "d", text: "Ten strokes" }
    ],
    answerId: "c",
    explanation: "3 is less than 5, so tally marks for 3 are three single strokes. One bundle of 5 is tempting if you always draw a crossed bundle even when the count is fewer than 5.",
    hints: ["A bundle needs 5 tally strokes. With only 3 to show, do you draw a bundle?"]
  },
  {
    id: "g5-maths-data-b-q08",
    prompt: "The shortest bar on a bar graph shows\u2026",
    options: [
      { id: "a", text: "The greatest frequency" },
      { id: "b", text: "The average" },
      { id: "c", text: "The mode always" },
      { id: "d", text: "The least frequency" }
    ],
    answerId: "d",
    explanation: "The shortest bar has the smallest count, so it shows the least frequency. The greatest frequency is tempting if you read the shortest bar as if it were the tallest.",
    hints: ["A shorter bar means fewer counts. What do the fewest counts tell you?"]
  },
  {
    id: "g5-maths-data-b-q09",
    prompt: "What is the average of 5, 5 and 8?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "8" },
      { id: "d", text: "18" }
    ],
    answerId: "a",
    explanation: "Sum 18 ÷ 3 = 6. 5 is tempting if you treat each tally stroke as 5 instead of 1 (or the reverse); the correct stroke value gives 6.",
    hints: ["Add 5, 5 and 8, then divide the total by 3."]
  },
  {
    id: "g5-maths-data-b-q10",
    prompt: "In the list 9, 1, 9, 2, the mode is\u2026",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "9" },
      { id: "c", text: "2" },
      { id: "d", text: "There is no mode" }
    ],
    answerId: "b",
    explanation: "9 appears twice and every other value appears once, so the mode is 9. 2 is tempting if you report how many times the mode appears rather than the mode value itself.",
    hints: ["Count how many times each number in the list appears; the mode appears most often."]
  },
  {
    id: "g5-maths-data-b-q11",
    prompt: "A table shows Day and Temperature. Tuesday's temperature is found by\u2026",
    options: [
      { id: "a", text: "Ignoring the table" },
      { id: "b", text: "Only using a pictograph" },
      { id: "c", text: "Reading Tuesday's row" },
      { id: "d", text: "Guessing" }
    ],
    answerId: "c",
    explanation: "Find Tuesday in the Day column and read across to Temperature. Ignoring the table is tempting if you think you already know Tuesday's temperature from memory, so you never look at the table, but the exact temperature is written only in Tuesday's row.",
    hints: ["Find Tuesday in the Day column, then move across to the Temperature column."]
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
    explanation: "5 × 3 = 15 balls. 8 is tempting if you count symbols without using the key; with the key the total is 15.",
    hints: ["Each icon stands for 3 balls. Multiply the 5 icons by 3."]
  },
  {
    id: "g5-maths-data-b-q13",
    prompt: "Ice-cream flavours: Vanilla 9, Chocolate 14, Strawberry 7. How many children chose chocolate or vanilla?",
    options: [
      { id: "a", text: "23" },
      { id: "b", text: "14" },
      { id: "c", text: "16" },
      { id: "d", text: "30" }
    ],
    answerId: "a",
    explanation: "14 + 9 = 23. 16 is tempting if you double-count a bar or pictograph symbol when totalling; the careful total is 23.",
    hints: ["'Or' means add: add the Chocolate and Vanilla numbers."]
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
    explanation: "The correct answer is 7. 5 is tempting if you read the scale mark just above or below the true height; the chart reading is 7.",
    hints: ["How many fewer means subtract: take the Strawberry number from the Chocolate number."]
  },
  {
    id: "g5-maths-data-b-q15",
    prompt: "A pictograph key is 1 \ud83c\udf33 = 4 trees. There are 3\u00bc icons. How many trees?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "14" },
      { id: "c", text: "13" },
      { id: "d", text: "16" }
    ],
    answerId: "c",
    explanation: "3 × 4 = 12 and ¼ icon = 1, total 13. 12 is tempting if you combine two neighbouring categories instead of the asked one; the asked reading is 13.",
    hints: ["Three whole icons are 3 × 4 trees. A quarter of an icon is ¼ of 4 trees."]
  },
  {
    id: "g5-maths-data-b-q16",
    prompt: "Bars show library visitors: 40, 55, 35, 60. What is the least number of visitors?",
    options: [
      { id: "a", text: "40" },
      { id: "b", text: "55" },
      { id: "c", text: "60" },
      { id: "d", text: "35" }
    ],
    answerId: "d",
    explanation: "35 is the smallest value. 40 is tempting if you read the wrong row or column, or skip a category when totalling; the correct reading is 35.",
    hints: ["Compare the visitor numbers one by one and keep the smallest; the shortest bar shows it."]
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
    explanation: "Sum 36 ÷ 3 = 12. 11 is tempting if you forget the key (how many each symbol stands for) halfway through; applying the key throughout gives 12.",
    hints: ["The average is the total shared equally. Add the three numbers, then divide by 3."]
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
    explanation: "7 appears three times. 6 is tempting if you include a half-symbol as a whole (or ignore it); counting halves correctly gives 7.",
    hints: ["Make a tally of how many times each value appears. The mode is the value with the biggest tally."]
  },
  {
    id: "g5-maths-data-b-q19",
    prompt: "Look at the tally chart. How many blue cars?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "15" },
      { id: "c", text: "16" },
      { id: "d", text: "20" }
    ],
    answerId: "c",
    explanation: "Three crossed bundles of 5 and one single stroke make 15 + 1 = 16. 15 is tempting if you count only the three bundles and leave out the final single stroke.",
    hints: ["Each crossed group is a bundle of 5. Count the bundles in fives, then add the single stroke."]
  ,
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 160\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Tally of three crossed bundles of five and one single stroke\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"160\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"160.0\" y=\"28\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Blue cars tally</text>\n  <line class=\"part tally\" x1=\"40\" y1=\"70\" x2=\"40\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"50\" y1=\"70\" x2=\"50\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"60\" y1=\"70\" x2=\"60\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"70\" y1=\"70\" x2=\"70\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally-slash\" x1=\"36\" y1=\"114\" x2=\"74\" y2=\"76\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"102\" y1=\"70\" x2=\"102\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"112\" y1=\"70\" x2=\"112\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"122\" y1=\"70\" x2=\"122\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"132\" y1=\"70\" x2=\"132\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally-slash\" x1=\"98\" y1=\"114\" x2=\"136\" y2=\"76\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"164\" y1=\"70\" x2=\"164\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"174\" y1=\"70\" x2=\"174\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"184\" y1=\"70\" x2=\"184\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"194\" y1=\"70\" x2=\"194\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally-slash\" x1=\"160\" y1=\"114\" x2=\"198\" y2=\"76\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line class=\"part tally\" x1=\"226\" y1=\"70\" x2=\"226\" y2=\"120\" stroke=\"#333\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <text class=\"label small\" x=\"160.0\" y=\"145\" font-size=\"11\" text-anchor=\"middle\" fill=\"#666\">Each crossed group is a bundle of 5.</text>\n</svg>", "alt": "Three crossed tally bundles of five and one single stroke for blue cars."}},
  {
    id: "g5-maths-data-b-q20",
    prompt: "Scale on a bar graph is 1 unit = 2 goals. A bar is 9 units tall. Goals scored?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "11" },
      { id: "c", text: "2" },
      { id: "d", text: "18" }
    ],
    answerId: "d",
    explanation: "Scale 1 unit = 2 goals and height 9 units give 9 × 2 = 18 goals. 9 is tempting if you report the bar height in units and forget to multiply by the scale factor 2.",
    hints: ["Each unit stands for 2 goals. Multiply the 9 units by 2."]
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
    explanation: "Sum 25 ÷ 5 = 5. 6 is tempting if you divide the total by the number of categories when the question only asks for a total or a single bar; the answer is 5.",
    hints: ["Add all the step counts, then divide the total by the number of weeks listed."]
  },
  {
    id: "g5-maths-data-b-q22",
    prompt: "In a pictograph, 1 \ud83d\udc1f = 8 fish. A day shows 2\u00be icons. How many fish?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "22" },
      { id: "c", text: "20" },
      { id: "d", text: "24" }
    ],
    answerId: "b",
    explanation: "2 × 8 = 16 and ¾ × 8 = 6, total 22. 20 is tempting if you rank the bars and pick the runner-up instead of the asked value; the asked reading is 22.",
    hints: ["Two whole icons are 2 × 8 fish. Three quarters of an icon is ¾ of 8 fish."]
  },
  {
    id: "g5-maths-data-b-q23",
    prompt: "Scores: 11, 14, 11, 17, 14, 14. What is the mode?",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "17" },
      { id: "c", text: "14" },
      { id: "d", text: "13" }
    ],
    answerId: "c",
    explanation: "14 appears three times; 11 appears twice. 13 is tempting if you start the vertical scale from the first labelled tick instead of zero; reading from zero gives 14.",
    hints: ["Count how often each score appears. The mode is the score that comes up most."]
  },
  {
    id: "g5-maths-data-b-q24",
    prompt: "A class has this bar scale: 1 unit = 4 pupils. Reading bar height 7.5 units means how many pupils?",
    options: [
      { id: "a", text: "7.5" },
      { id: "b", text: "11.5" },
      { id: "c", text: "32" },
      { id: "d", text: "30" }
    ],
    answerId: "d",
    explanation: "Scale 1 unit = 4 pupils and height 7.5 units give 7.5 × 4 = 30 pupils. 32 is tempting if you round 7.5 units up to 8 before multiplying by 4 (8 × 4 = 32).",
    hints: ["Each unit is 4 pupils. Multiply 7.5 by 4: do 7 × 4, then add half of 4."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcca",
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
      { label: "Tally", reveal: "Bundles of five make counting fast", emoji: "✍️" },
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
  emoji: "\ud83d\udcca",
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g5MathsDataAchievers.length,
      topic: "data",
      questions: g5MathsDataAchievers,
    },
  ],
  paperTopics: ["percent", "decimals", "add-sub"],
};

export const g5MathsDataQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
