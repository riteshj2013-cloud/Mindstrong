import type { PrepQuestion } from "../types";

/** Comparing Quantities (Achievers extras) - Achievers extras (original olympiad-style; not affiliated with SOF). */

export const g8MathsComparingAchievers: PrepQuestion[] = [
  {
    id: "g8-maths-ch03-ach-x-01",
    prompt: "Chaitanya buys a pair of school shoes with the price tag shown. All the offers on the tag are applied in the order they are listed. How much does he pay at the counter?",
    options: [
      { id: "a", text: "\u20b91,470" },
      { id: "b", text: "\u20b91,440" },
      { id: "c", text: "\u20b91,575" },
      { id: "d", text: "\u20b91,512" }
    ],
    answerId: "d",
    explanation: "20% off \u20b92,000 leaves \u20b91,600. The extra 10% is taken off \u20b91,600, which is \u20b9160, leaving \u20b91,440. GST of 5% on \u20b91,440 is \u20b972, so he pays \u20b91,512. \u20b91,470 is tempting because it adds the two discounts to make 30% off \u20b92,000, but the second discount is 10% of the already reduced price, so together they take off less than 30%.",
    hints: ["Apply the offers on Chaitanya's tag one at a time; each later percentage is worked out on the price left after the step before."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 460 246\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A price tag: marked price 2,000 rupees; Diwali offer 20 percent off; then an extra 10 percent off the offer price; 5 percent GST added at the counter\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"460\" height=\"246\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"230.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Chaitanya's shoe price tag</text>\n  <polygon class=\"part tag\" points=\"80,46 430,46 430,222 80,222 50,134.0\" fill=\"#fff3e0\" stroke=\"#e65100\" stroke-width=\"2.5\"/>\n  <circle class=\"part tag-hole\" cx=\"72\" cy=\"134\" r=\"6\" fill=\"#fff\" stroke=\"#e65100\" stroke-width=\"2\"/>\n  <text class=\"label tag-line\" x=\"98\" y=\"82\" font-size=\"17\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#b71c1c\">Marked price \u20b92,000</text>\n  <text class=\"label tag-line\" x=\"98\" y=\"116\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Diwali offer: 20% off</text>\n  <text class=\"label tag-line\" x=\"98\" y=\"150\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Extra 10% off the offer price</text>\n  <text class=\"label tag-line\" x=\"98\" y=\"184\" font-size=\"15\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">GST of 5% added at the counter</text>\n</svg>", "alt": "An orange price tag with four lines: Marked price \u20b92,000; Diwali offer: 20% off; Extra 10% off the offer price; GST of 5% added at the counter."}
  },
  {
    id: "g8-maths-ch03-ach-x-02",
    prompt: "Saumya's bar graph shows how many children joined each club at her school this year. By what percentage is the number of Coding members greater than the number of Chess members?",
    options: [
      { id: "a", text: "20%" },
      { id: "b", text: "12%" },
      { id: "c", text: "25%" },
      { id: "d", text: "80%" }
    ],
    answerId: "c",
    explanation: "Reading the graph, Coding has 60 members and Chess has 48. The difference is 12, and it must be compared with the Chess number, because the question asks how much greater Coding is than Chess: 12/48 \u00d7 100 = 25%. 20% is tempting because it divides the difference by 60, the Coding number, which answers how much smaller Chess is than Coding instead.",
    hints: ["Read both bars on Saumya's graph, find the difference, and decide which club's number the difference should be compared with."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 510 342\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A bar graph of club members: Coding 60, Chess 48, Dance 72, Art 36\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"510\" height=\"342\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"255.0\" y=\"24\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Club members at Saumya's school</text>\n  <text class=\"label axis-name\" x=\"70\" y=\"44\" font-size=\"13\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#263238\">Members</text>\n  <line class=\"part grid\" x1=\"80\" y1=\"282\" x2=\"490\" y2=\"282\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label axis-value\" x=\"72\" y=\"287\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">0</text>\n  <line class=\"part grid\" x1=\"80\" y1=\"246\" x2=\"490\" y2=\"246\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label axis-value\" x=\"72\" y=\"251\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">12</text>\n  <line class=\"part grid\" x1=\"80\" y1=\"210\" x2=\"490\" y2=\"210\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label axis-value\" x=\"72\" y=\"215\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">24</text>\n  <line class=\"part grid\" x1=\"80\" y1=\"174\" x2=\"490\" y2=\"174\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label axis-value\" x=\"72\" y=\"179\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">36</text>\n  <line class=\"part grid\" x1=\"80\" y1=\"138\" x2=\"490\" y2=\"138\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label axis-value\" x=\"72\" y=\"143\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">48</text>\n  <line class=\"part grid\" x1=\"80\" y1=\"102\" x2=\"490\" y2=\"102\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label axis-value\" x=\"72\" y=\"107\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">60</text>\n  <line class=\"part grid\" x1=\"80\" y1=\"66\" x2=\"490\" y2=\"66\" stroke=\"#cfd8dc\" stroke-width=\"1\"/>\n  <text class=\"label axis-value\" x=\"72\" y=\"71\" font-size=\"13\" text-anchor=\"end\" font-weight=\"normal\" fill=\"#263238\">72</text>\n  <line class=\"part y-axis\" x1=\"80\" y1=\"50\" x2=\"80\" y2=\"282\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <line class=\"part x-axis\" x1=\"80\" y1=\"282\" x2=\"490\" y2=\"282\" stroke=\"#263238\" stroke-width=\"2\"/>\n  <rect class=\"part bar\" x=\"110\" y=\"102\" width=\"60\" height=\"180\" rx=\"0\" fill=\"#7986cb\" stroke=\"#283593\" stroke-width=\"1.5\"/>\n  <text class=\"label bar-name\" x=\"140\" y=\"304\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Coding</text>\n  <rect class=\"part bar\" x=\"210\" y=\"138\" width=\"60\" height=\"144\" rx=\"0\" fill=\"#7986cb\" stroke=\"#283593\" stroke-width=\"1.5\"/>\n  <text class=\"label bar-name\" x=\"240\" y=\"304\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Chess</text>\n  <rect class=\"part bar\" x=\"310\" y=\"66\" width=\"60\" height=\"216\" rx=\"0\" fill=\"#7986cb\" stroke=\"#283593\" stroke-width=\"1.5\"/>\n  <text class=\"label bar-name\" x=\"340\" y=\"304\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Dance</text>\n  <rect class=\"part bar\" x=\"410\" y=\"174\" width=\"60\" height=\"108\" rx=\"0\" fill=\"#7986cb\" stroke=\"#283593\" stroke-width=\"1.5\"/>\n  <text class=\"label bar-name\" x=\"440\" y=\"304\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#263238\">Art</text>\n</svg>", "alt": "A bar graph with a scale from 0 to 72 in steps of 12. The bars reach 60 for Coding, 48 for Chess, 72 for Dance and 36 for Art."}
  },
  {
    id: "g8-maths-ch03-ach-x-03",
    prompt: "At Anaya's local shop in Kochi, the price of a kilogram of cashews went up by 20% in June, came down by 25% in July and went up by 10% in August. Taking all three changes together, what happened to the price?",
    options: [
      { id: "a", text: "a 1% decrease" },
      { id: "b", text: "a 5% increase" },
      { id: "c", text: "a 1% increase" },
      { id: "d", text: "a 5% decrease" }
    ],
    answerId: "a",
    explanation: "Each change acts on the price left by the one before. Start from \u20b9100 for easy counting: up 20% gives \u20b9120; down 25% of \u20b9120 gives \u20b990; up 10% of \u20b990 gives \u20b999. So the price ends \u20b91 lower on every \u20b9100: a 1% decrease. Choosing a 5% increase is tempting because it adds and subtracts the percentages as 20 \u2212 25 + 10 = 5, but each percentage is taken of a different price.",
    hints: ["Pretend Anaya's cashews started at a round price and apply each month's change in turn to the newest price."]
  },
  {
    id: "g8-maths-ch03-ach-x-04",
    prompt: "Namita pays \u20b92,950 for a microwave oven. This includes 18% GST charged on the shop's selling price. The shop had sold it at 20% off its marked price and still made a 25% profit on what it paid for the oven. How much higher was the marked price than the shop's cost price?",
    options: [
      { id: "a", text: "\u20b9625" },
      { id: "b", text: "\u20b91,125" },
      { id: "c", text: "\u20b9500" },
      { id: "d", text: "\u20b91,250" }
    ],
    answerId: "b",
    explanation: "Without GST the selling price is 2,950 \u00f7 1.18 = \u20b92,500. That is 125% of the cost price, so the cost price is 2,500 \u00f7 1.25 = \u20b92,000. It is also 80% of the marked price, so the marked price is 2,500 \u00f7 0.8 = \u20b93,125. The marked price is 3,125 \u2212 2,000 = \u20b91,125 more than the cost price. \u20b9625 is tempting because it is the gap between the marked price and the selling price, the discount, but the question compares the marked price with the cost price.",
    hints: ["Remove the GST from Namita's bill first, then work back separately to the shop's cost price and to its marked price."]
  },
  {
    id: "g8-maths-ch03-ach-x-05",
    prompt: "In Lucknow, the price of mustard oil rises from \u20b9160 to \u20b9200 per litre. Dhruvi's family wants to spend exactly the same amount on oil each month as before. By what percentage must they reduce the amount of oil they use?",
    options: [
      { id: "a", text: "25%" },
      { id: "b", text: "40%" },
      { id: "c", text: "15%" },
      { id: "d", text: "20%" }
    ],
    answerId: "d",
    explanation: "Suppose the family spent \u20b9800 a month: that bought 800 \u00f7 160 = 5 L before and buys only 800 \u00f7 200 = 4 L now. Using 1 L less out of 5 L is a cut of 1/5 = 20%. 25% is tempting because it is the rise in price (40 out of 160), but the cut in oil is measured against the old amount used, and paying \u20b9200 instead of \u20b9160 means each rupee buys 4/5 as much.",
    hints: ["Pick a convenient monthly amount Dhruvi's family spends and find how many litres it buys at each price."]
  }
];
