import type { PrepQuestion } from "../types";

/** Data Handling (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g5MathsDataAchievers: PrepQuestion[] = [
  {
    id: "g5-maths-ch06-ach-x-01",
    prompt: "The bar graph shows the runs Samarth scored in his first five matches. How many runs must he score in his sixth match so that his average for all six matches is exactly 40?",
    options: [
      { id: "a", text: "42" },
      { id: "b", text: "40" },
      { id: "c", text: "50" },
      { id: "d", text: "45" }
    ],
    answerId: "c",
    explanation: "The five bars show 35, 50, 20, 45 and 40 runs, a total of 190. An average of 40 over six matches needs 6 \u00d7 40 = 240 runs, so the sixth match needs 240 \u2212 190 = 50 runs. 42 is tempting because his five-match average is 38, two short of 40, and adding 2 to 40 seems to fix it, but the one new score must make up the shortfall of 2 runs in each of the five matches.",
    hints: ["Find the total runs Samarth needs for six matches at that average, then compare it with his five-match total."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 500 350\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Bar graph of runs scored in five matches\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"500\" height=\"350\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"250.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Samarth's runs</text>\n  <line class=\"part axis\" x1=\"70\" y1=\"44\" x2=\"70\" y2=\"290\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part axis\" x1=\"70\" y1=\"290\" x2=\"480\" y2=\"290\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <text class=\"label axis-name\" x=\"16\" y=\"36\" font-size=\"12\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#455a64\">Runs</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"290\" x2=\"480\" y2=\"290\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"294\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">0</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"270\" x2=\"480\" y2=\"270\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"274\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">5</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"250\" x2=\"480\" y2=\"250\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"254\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">10</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"230\" x2=\"480\" y2=\"230\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"234\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">15</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"210\" x2=\"480\" y2=\"210\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"214\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">20</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"190\" x2=\"480\" y2=\"190\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"194\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">25</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"170\" x2=\"480\" y2=\"170\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"174\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">30</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"150\" x2=\"480\" y2=\"150\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"154\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">35</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"130\" x2=\"480\" y2=\"130\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"134\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">40</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"110\" x2=\"480\" y2=\"110\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"114\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">45</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"90\" x2=\"480\" y2=\"90\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"94\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">50</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"70\" x2=\"480\" y2=\"70\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"74\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">55</text>\n  <line class=\"part grid\" x1=\"65\" y1=\"50\" x2=\"480\" y2=\"50\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label tick\" x=\"61\" y=\"54\" font-size=\"12\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">60</text>\n  <rect class=\"part bar\" x=\"91\" y=\"150\" width=\"46\" height=\"140\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"114\" y=\"310\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">M1</text>\n  <rect class=\"part bar\" x=\"171\" y=\"90\" width=\"46\" height=\"200\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"194\" y=\"310\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">M2</text>\n  <rect class=\"part bar\" x=\"251\" y=\"210\" width=\"46\" height=\"80\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"274\" y=\"310\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">M3</text>\n  <rect class=\"part bar\" x=\"331\" y=\"110\" width=\"46\" height=\"180\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"354\" y=\"310\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">M4</text>\n  <rect class=\"part bar\" x=\"411\" y=\"130\" width=\"46\" height=\"160\" rx=\"0\" fill=\"#7986cb\" stroke=\"#3949ab\" stroke-width=\"1.2\"/>\n  <text class=\"label cat\" x=\"434\" y=\"310\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">M5</text>\n</svg>", "alt": "A bar graph with a scale from 0 to 60 in steps of 5 and bars for matches M1 to M5."}
  },
  {
    id: "g5-maths-ch06-ach-x-02",
    prompt: "Shivansh records the shoe sizes in his class: size 3 is worn by 4 children, size 4 by 7 children, size 5 by 9 children and size 6 by 5 children. How many children wear a size bigger than the most common size?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "9" },
      { id: "c", text: "21" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "The most common size (the mode) is size 5, worn by 9 children. Only size 6 is bigger, and 5 children wear it, so the answer is 5. 14 is tempting because it adds the 9 children who wear size 5 as well, but they wear the most common size itself, not a bigger one.",
    hints: ["Find which size is most common in Shivansh's class first, then add only the children with larger sizes."]
  },
  {
    id: "g5-maths-ch06-ach-x-03",
    prompt: "The pictograph shows the plants sold at Snehal's nursery stall. Every plant costs \u20b915. How much more money came in on the busiest day than on the quietest day?",
    options: [
      { id: "a", text: "\u20b9495" },
      { id: "b", text: "\u20b9540" },
      { id: "c", text: "\u20b9810" },
      { id: "d", text: "\u20b9450" }
    ],
    answerId: "a",
    explanation: "One icon is 12 plants, so a half icon is 6 and a three-quarter icon is 9. Wednesday, the busiest day, has 4\u00bd icons = 54 plants; Tuesday, the quietest, has 1\u00be icons = 21 plants. The difference is 33 plants, worth 33 \u00d7 \u20b915 = \u20b9495. \u20b9540 is tempting because it reads Tuesday's last part icon as a half, giving 18 plants, but that icon is three-quarters of a pot wide.",
    hints: ["Each of Snehal's icons stands for twelve plants, so measure how much of a whole pot each part icon is."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 320 258\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"Pictograph of plants sold from Monday to Thursday with whole and part icons\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"320\" height=\"258\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"160.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Plants sold at Snehal's stall</text>\n  <text class=\"label row-name\" x=\"20\" y=\"63\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Monday</text>\n  <rect class=\"part icon\" x=\"130\" y=\"46\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"162\" y=\"46\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"194\" y=\"46\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"226\" y=\"46\" width=\"6\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"101\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Tuesday</text>\n  <rect class=\"part icon\" x=\"130\" y=\"84\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"162\" y=\"84\" width=\"18\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"139\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Wednesday</text>\n  <rect class=\"part icon\" x=\"130\" y=\"122\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"162\" y=\"122\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"194\" y=\"122\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"226\" y=\"122\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"258\" y=\"122\" width=\"12\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <text class=\"label row-name\" x=\"20\" y=\"177\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Thursday</text>\n  <rect class=\"part icon\" x=\"130\" y=\"160\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"162\" y=\"160\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon\" x=\"194\" y=\"160\" width=\"12\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <rect class=\"part icon key\" x=\"20\" y=\"206\" width=\"24\" height=\"24\" rx=\"0\" fill=\"#a5d6a7\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/>\n  <text class=\"label key\" x=\"54\" y=\"223\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">= 12 plants</text>\n</svg>", "alt": "A pictograph with rows of square pot icons for Monday, Tuesday, Wednesday and Thursday; some rows end in a part icon. The key shows one icon = 12 plants."}
  },
  {
    id: "g5-maths-ch06-ach-x-04",
    prompt: "Tisha's football team played 10 matches. They scored 0 goals in 2 matches, 1 goal in 3 matches, 2 goals in 4 matches and 3 goals in 1 match. What is the average number of goals per match?",
    options: [
      { id: "a", text: "1.5" },
      { id: "b", text: "1.4" },
      { id: "c", text: "2.5" },
      { id: "d", text: "1.2" }
    ],
    answerId: "b",
    explanation: "Total goals = 0 \u00d7 2 + 1 \u00d7 3 + 2 \u00d7 4 + 3 \u00d7 1 = 0 + 3 + 8 + 3 = 14. Shared over 10 matches, the average is 14 \u00f7 10 = 1.4 goals. 1.5 is tempting because it is the average of the goal numbers 0, 1, 2 and 3, but those numbers happened in different numbers of matches, so each must be multiplied by its count first.",
    hints: ["Find the total goals Tisha's team scored across all the matches before sharing them out equally."]
  },
  {
    id: "g5-maths-ch06-ach-x-05",
    prompt: "Urja draws a bar graph of the old newspapers collected by four classes: 56 kg, 44 kg, 72 kg and 28 kg. Her bars use 1 cm for every 8 kg. How much longer is the longest bar than the shortest bar?",
    options: [
      { id: "a", text: "5.5 cm" },
      { id: "b", text: "44 cm" },
      { id: "c", text: "9 cm" },
      { id: "d", text: "3.5 cm" }
    ],
    answerId: "a",
    explanation: "The longest bar is 72 \u00f7 8 = 9 cm and the shortest is 28 \u00f7 8 = 3.5 cm, so the difference is 9 \u2212 3.5 = 5.5 cm. 44 cm is tempting because 72 \u2212 28 = 44, but that is a difference in kilograms, and it still has to be divided by 8 to turn it into centimetres.",
    hints: ["Change each of Urja's amounts into centimetres using her scale, or find the difference in kilograms and then use the scale."]
  }
];
