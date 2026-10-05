import type { ChapterDef, PrepQuestion } from "../types";

/** Comparing Quantities - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-compare-a-q01",
    prompt: "What is 3/4 written as a percentage?",
    options: [
      { id: "a", text: "34%" },
      { id: "b", text: "43%" },
      { id: "c", text: "7.5%" },
      { id: "d", text: "75%" }
    ],
    answerId: "d",
    explanation: "3/4 \u00d7 100% = 75%, while 34% just joins the digits together.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q02",
    prompt: "What is 0.08 written as a percentage?",
    options: [
      { id: "a", text: "80%" },
      { id: "b", text: "8%" },
      { id: "c", text: "0.8%" },
      { id: "d", text: "0.08%" }
    ],
    answerId: "b",
    explanation: "Multiplying by 100 gives 0.08 \u00d7 100 = 8%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q03",
    prompt: "What is the ratio of 40 cm to 2 m in simplest form?",
    options: [
      { id: "a", text: "1 : 5" },
      { id: "b", text: "20 : 1" },
      { id: "c", text: "1 : 20" },
      { id: "d", text: "5 : 1" }
    ],
    answerId: "a",
    explanation: "2 m is 200 cm, so 40 : 200 = 1 : 5, while 20 : 1 forgets to convert the units.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q04",
    prompt: "What is 15% of \u20b9600?",
    options: [
      { id: "a", text: "\u20b9900" },
      { id: "b", text: "\u20b940" },
      { id: "c", text: "\u20b990" },
      { id: "d", text: "\u20b960" }
    ],
    answerId: "c",
    explanation: "15/100 \u00d7 600 = \u20b990.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q05",
    prompt: "A shopkeeper buys a school bag for \u20b9250 and sells it for \u20b9300. What is the result?",
    options: [
      { id: "a", text: "Profit of \u20b950" },
      { id: "b", text: "Loss of \u20b950" },
      { id: "c", text: "Profit of \u20b9550" },
      { id: "d", text: "Loss of \u20b920" }
    ],
    answerId: "a",
    explanation: "SP is more than CP, so there is a profit of \u20b9300 \u2212 \u20b9250 = \u20b950.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q06",
    prompt: "A kurta has a marked price of \u20b9800 and a discount of \u20b9120. What is its selling price?",
    options: [
      { id: "a", text: "\u20b9800" },
      { id: "b", text: "\u20b9920" },
      { id: "c", text: "\u20b9120" },
      { id: "d", text: "\u20b9680" }
    ],
    answerId: "d",
    explanation: "SP = MP \u2212 discount = \u20b9800 \u2212 \u20b9120 = \u20b9680.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q07",
    prompt: "What is the simple interest on \u20b92,000 at 5% per year for 3 years?",
    options: [
      { id: "a", text: "\u20b9100" },
      { id: "b", text: "\u20b9300" },
      { id: "c", text: "\u20b92,300" },
      { id: "d", text: "\u20b930" }
    ],
    answerId: "b",
    explanation: "I = (2000 \u00d7 5 \u00d7 3)/100 = \u20b9300, while \u20b92,300 is the amount, not the interest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q08",
    prompt: "In a class test, 18 out of 24 students passed. What percentage of students passed?",
    options: [
      { id: "a", text: "25%" },
      { id: "b", text: "18%" },
      { id: "c", text: "75%" },
      { id: "d", text: "80%" }
    ],
    answerId: "c",
    explanation: "18/24 = 3/4, which is 75%, while 25% is the percentage who failed.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q09",
    prompt: "The price of a notebook rises from \u20b950 to \u20b960. What is the percentage increase?",
    options: [
      { id: "a", text: "20%" },
      { id: "b", text: "16 2/3%" },
      { id: "c", text: "10%" },
      { id: "d", text: "60%" }
    ],
    answerId: "a",
    explanation: "The increase of \u20b910 on the original \u20b950 is 20%, while 16 2/3% wrongly divides by the new price.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q10",
    prompt: "A water bottle costs \u20b9400 and 5% GST is charged on it. What is the total bill?",
    options: [
      { id: "a", text: "\u20b9405" },
      { id: "b", text: "\u20b9420" },
      { id: "c", text: "\u20b9380" },
      { id: "d", text: "\u20b920" }
    ],
    answerId: "b",
    explanation: "5% of \u20b9400 is \u20b920, so the bill is \u20b9400 + \u20b920 = \u20b9420.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q11",
    prompt: "A cycle is bought for \u20b91,250 and sold for \u20b91,000. What is the loss percent?",
    options: [
      { id: "a", text: "12.5%" },
      { id: "b", text: "25%" },
      { id: "c", text: "20%" },
      { id: "d", text: "250%" }
    ],
    answerId: "c",
    explanation: "The loss is \u20b9250, and 250/1250 \u00d7 100 = 20%, while 25% wrongly divides by SP.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q12",
    prompt: "A shop in Pratapgarh gives a 15% discount on a jacket marked at \u20b91,600. What is the selling price?",
    options: [
      { id: "a", text: "\u20b91,585" },
      { id: "b", text: "\u20b91,840" },
      { id: "c", text: "\u20b9240" },
      { id: "d", text: "\u20b91,360" }
    ],
    answerId: "d",
    explanation: "15% of \u20b91,600 is \u20b9240, so SP = \u20b91,600 \u2212 \u20b9240 = \u20b91,360, while \u20b9240 is only the discount.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q13",
    prompt: "After a 20% raise, Mr Iyer's monthly salary is \u20b918,000. What was his salary before the raise?",
    options: [
      { id: "a", text: "\u20b914,000" },
      { id: "b", text: "\u20b915,000" },
      { id: "c", text: "\u20b914,400" },
      { id: "d", text: "\u20b921,600" }
    ],
    answerId: "b",
    explanation: "The new salary is 1.2 times the old one, so the old salary is 18,000 \u00f7 1.2 = \u20b915,000, while \u20b914,400 wrongly takes 20% off the new salary.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q14",
    prompt: "What principal gives a simple interest of \u20b9540 at 6% per year in 3 years?",
    options: [
      { id: "a", text: "\u20b93,000" },
      { id: "b", text: "\u20b91,800" },
      { id: "c", text: "\u20b9300" },
      { id: "d", text: "\u20b99,720" }
    ],
    answerId: "a",
    explanation: "P = (540 \u00d7 100)/(6 \u00d7 3) = 54,000/18 = \u20b93,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q15",
    prompt: "A shopkeeper buys a lamp for \u20b9480 and wants a 25% profit. At what price should he sell it?",
    options: [
      { id: "a", text: "\u20b9505" },
      { id: "b", text: "\u20b9640" },
      { id: "c", text: "\u20b9384" },
      { id: "d", text: "\u20b9600" }
    ],
    answerId: "d",
    explanation: "25% of \u20b9480 is \u20b9120, so SP = \u20b9480 + \u20b9120 = \u20b9600, while \u20b9384 is a 20% loss.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q16",
    prompt: "The ratio of boys to girls in a school club is 5 : 3. There are 96 members in all. How many girls are there?",
    options: [
      { id: "a", text: "32" },
      { id: "b", text: "48" },
      { id: "c", text: "36" },
      { id: "d", text: "60" }
    ],
    answerId: "c",
    explanation: "There are 5 + 3 = 8 parts, so each part is 96 \u00f7 8 = 12, and the girls are 3 \u00d7 12 = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q17",
    prompt: "The population of Gopalpur town is 25,000. It decreases by 8%. What is the new population?",
    options: [
      { id: "a", text: "23,000" },
      { id: "b", text: "2,000" },
      { id: "c", text: "24,800" },
      { id: "d", text: "27,000" }
    ],
    answerId: "a",
    explanation: "8% of 25,000 is 2,000, so the new population is 25,000 \u2212 2,000 = 23,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q18",
    prompt: "\u20b95,000 becomes \u20b96,200 in 3 years at simple interest. What is the rate of interest per year?",
    options: [
      { id: "a", text: "4%" },
      { id: "b", text: "8%" },
      { id: "c", text: "12%" },
      { id: "d", text: "24%" }
    ],
    answerId: "b",
    explanation: "The interest is \u20b91,200, so R = (1200 \u00d7 100)/(5000 \u00d7 3) = 8%, while 24% forgets to divide by the 3 years.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q19",
    prompt: "What is the compound interest on \u20b910,000 at 10% per year for 2 years, compounded annually?",
    options: [
      { id: "a", text: "\u20b91,100" },
      { id: "b", text: "\u20b92,000" },
      { id: "c", text: "\u20b92,100" },
      { id: "d", text: "\u20b912,100" }
    ],
    answerId: "c",
    explanation: "The amount is 10,000 \u00d7 1.1 \u00d7 1.1 = \u20b912,100, so the CI is \u20b92,100, while \u20b92,000 is the simple interest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q20",
    prompt: "The price of a phone cover is first increased by 20% and then decreased by 20%. What is the net change in price?",
    options: [
      { id: "a", text: "4% decrease" },
      { id: "b", text: "No change" },
      { id: "c", text: "4% increase" },
      { id: "d", text: "2% decrease" }
    ],
    answerId: "a",
    explanation: "1.2 \u00d7 0.8 = 0.96, so the final price is 4% less than the original, because the second 20% is taken on a bigger amount.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q21",
    prompt: "A shopkeeper marks his goods 40% above cost price and then gives a 25% discount. What is his profit or loss percent?",
    options: [
      { id: "a", text: "15% profit" },
      { id: "b", text: "10% profit" },
      { id: "c", text: "5% loss" },
      { id: "d", text: "5% profit" }
    ],
    answerId: "d",
    explanation: "For CP = \u20b9100, MP = \u20b9140 and SP = 140 \u00d7 0.75 = \u20b9105, so the profit is 5%, not 40% \u2212 25% = 15%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q22",
    prompt: "The price of a mixer including 12% GST is \u20b92,240. What is its price before GST?",
    options: [
      { id: "a", text: "\u20b91,880" },
      { id: "b", text: "\u20b92,000" },
      { id: "c", text: "\u20b91,971.20" },
      { id: "d", text: "\u20b92,508.80" }
    ],
    answerId: "b",
    explanation: "The price including GST is 1.12 times the original, so the original is 2,240 \u00f7 1.12 = \u20b92,000, while \u20b91,971.20 wrongly takes 12% off \u20b92,240.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q23",
    prompt: "What is the difference between the compound interest and the simple interest on \u20b98,000 at 5% per year for 2 years?",
    options: [
      { id: "a", text: "\u20b90" },
      { id: "b", text: "\u20b940" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b9820" }
    ],
    answerId: "c",
    explanation: "SI = \u20b9800 and CI = 8,000 \u00d7 1.05\u00b2 \u2212 8,000 = \u20b9820, so the difference is \u20b920.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-a-q24",
    prompt: "Ravi bought two cycles for \u20b94,000 each. He sold one at a 20% profit and the other at a 15% loss. What is his overall profit or loss percent?",
    options: [
      { id: "a", text: "2.5% profit" },
      { id: "b", text: "2.5% loss" },
      { id: "c", text: "5% profit" },
      { id: "d", text: "35% profit" }
    ],
    answerId: "a",
    explanation: "The SPs are \u20b94,800 and \u20b93,400, which total \u20b98,200 against a CP of \u20b98,000, so the profit is \u20b9200 = 2.5%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-compare-b-q01",
    prompt: "What is 2/5 written as a percentage?",
    options: [
      { id: "a", text: "25%" },
      { id: "b", text: "40%" },
      { id: "c", text: "4%" },
      { id: "d", text: "20%" }
    ],
    answerId: "b",
    explanation: "2/5 \u00d7 100% = 40%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q02",
    prompt: "What is 0.375 written as a percentage?",
    options: [
      { id: "a", text: "375%" },
      { id: "b", text: "3.75%" },
      { id: "c", text: "37.5%" },
      { id: "d", text: "0.375%" }
    ],
    answerId: "c",
    explanation: "Multiplying by 100 gives 0.375 \u00d7 100 = 37.5%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q03",
    prompt: "What is the ratio of 750 g to 3 kg in simplest form?",
    options: [
      { id: "a", text: "1 : 40" },
      { id: "b", text: "4 : 1" },
      { id: "c", text: "250 : 1" },
      { id: "d", text: "1 : 4" }
    ],
    answerId: "d",
    explanation: "3 kg is 3,000 g, so 750 : 3000 = 1 : 4, while 250 : 1 forgets to convert the units.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q04",
    prompt: "What is 12% of \u20b9450?",
    options: [
      { id: "a", text: "\u20b954" },
      { id: "b", text: "\u20b945" },
      { id: "c", text: "\u20b938" },
      { id: "d", text: "\u20b9540" }
    ],
    answerId: "a",
    explanation: "12/100 \u00d7 450 = \u20b954.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q05",
    prompt: "A shopkeeper buys a table fan for \u20b9640 and sells it for \u20b9600. What is the result?",
    options: [
      { id: "a", text: "Profit of \u20b940" },
      { id: "b", text: "Loss of \u20b91,240" },
      { id: "c", text: "Loss of \u20b940" },
      { id: "d", text: "Profit of \u20b9600" }
    ],
    answerId: "c",
    explanation: "SP is less than CP, so there is a loss of \u20b9640 \u2212 \u20b9600 = \u20b940.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q06",
    prompt: "A pair of shoes is marked at \u20b91,250 and sold for \u20b91,100. What is the discount?",
    options: [
      { id: "a", text: "\u20b950" },
      { id: "b", text: "\u20b92,350" },
      { id: "c", text: "\u20b91,100" },
      { id: "d", text: "\u20b9150" }
    ],
    answerId: "d",
    explanation: "Discount = MP \u2212 SP = \u20b91,250 \u2212 \u20b91,100 = \u20b9150.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q07",
    prompt: "What is the simple interest on \u20b91,500 at 8% per year for 2 years?",
    options: [
      { id: "a", text: "\u20b9240" },
      { id: "b", text: "\u20b9120" },
      { id: "c", text: "\u20b91,740" },
      { id: "d", text: "\u20b92,400" }
    ],
    answerId: "a",
    explanation: "I = (1500 \u00d7 8 \u00d7 2)/100 = \u20b9240, while \u20b9120 is the interest for just 1 year.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q08",
    prompt: "Nisha scored 42 out of 60 in a quiz. What is her percentage score?",
    options: [
      { id: "a", text: "42%" },
      { id: "b", text: "70%" },
      { id: "c", text: "60%" },
      { id: "d", text: "30%" }
    ],
    answerId: "b",
    explanation: "42/60 = 0.7, which is 70%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q09",
    prompt: "The price of a lunch box falls from \u20b980 to \u20b968. What is the percentage decrease?",
    options: [
      { id: "a", text: "12%" },
      { id: "b", text: "85%" },
      { id: "c", text: "20%" },
      { id: "d", text: "15%" }
    ],
    answerId: "d",
    explanation: "The fall of \u20b912 on the original \u20b980 is 15%, while 12% treats the rupee drop as a percent.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q10",
    prompt: "A tailoring service costs \u20b9500 and 18% GST is charged. How much is the GST?",
    options: [
      { id: "a", text: "\u20b9590" },
      { id: "b", text: "\u20b990" },
      { id: "c", text: "\u20b918" },
      { id: "d", text: "\u20b9410" }
    ],
    answerId: "b",
    explanation: "18% of \u20b9500 is \u20b990, while \u20b9590 is the total bill.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q11",
    prompt: "A cricket bat is bought for \u20b9800 and sold for \u20b9920. What is the profit percent?",
    options: [
      { id: "a", text: "12%" },
      { id: "b", text: "13%" },
      { id: "c", text: "15%" },
      { id: "d", text: "120%" }
    ],
    answerId: "c",
    explanation: "The profit is \u20b9120, and 120/800 \u00d7 100 = 15%, while about 13% wrongly divides by SP.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q12",
    prompt: "A school uniform marked at \u20b92,500 is sold at a 12% discount. What is the selling price?",
    options: [
      { id: "a", text: "\u20b92,200" },
      { id: "b", text: "\u20b92,800" },
      { id: "c", text: "\u20b9300" },
      { id: "d", text: "\u20b92,488" }
    ],
    answerId: "a",
    explanation: "12% of \u20b92,500 is \u20b9300, so SP = \u20b92,500 \u2212 \u20b9300 = \u20b92,200.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q13",
    prompt: "After a 10% price cut, a pressure cooker costs \u20b91,080. What was the original price?",
    options: [
      { id: "a", text: "\u20b91,180" },
      { id: "b", text: "\u20b91,188" },
      { id: "c", text: "\u20b9972" },
      { id: "d", text: "\u20b91,200" }
    ],
    answerId: "d",
    explanation: "The new price is 0.9 times the old one, so the old price is 1,080 \u00f7 0.9 = \u20b91,200, while \u20b91,188 wrongly adds 10% of the new price.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q14",
    prompt: "In how many years will \u20b94,000 earn \u20b9900 as simple interest at 7.5% per year?",
    options: [
      { id: "a", text: "2 years" },
      { id: "b", text: "4 years" },
      { id: "c", text: "3 years" },
      { id: "d", text: "30 years" }
    ],
    answerId: "c",
    explanation: "T = (900 \u00d7 100)/(4000 \u00d7 7.5) = 90,000/30,000 = 3 years.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q15",
    prompt: "A trader buys a wall clock for \u20b91,350 and sells it at a 10% loss. What is the selling price?",
    options: [
      { id: "a", text: "\u20b91,485" },
      { id: "b", text: "\u20b91,215" },
      { id: "c", text: "\u20b9135" },
      { id: "d", text: "\u20b91,340" }
    ],
    answerId: "b",
    explanation: "10% of \u20b91,350 is \u20b9135, so SP = \u20b91,350 \u2212 \u20b9135 = \u20b91,215, while \u20b91,485 adds the loss instead.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q16",
    prompt: "At a fruit stall, the ratio of mangoes to apples is 7 : 5. There are 84 mangoes. How many apples are there?",
    options: [
      { id: "a", text: "35" },
      { id: "b", text: "49" },
      { id: "c", text: "144" },
      { id: "d", text: "60" }
    ],
    answerId: "d",
    explanation: "7 parts are 84 mangoes, so 1 part is 12 and 5 parts are 60 apples.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q17",
    prompt: "The annual fee at Shanti Vidyalaya is \u20b912,000. It is increased by 15%. What is the new fee?",
    options: [
      { id: "a", text: "\u20b913,800" },
      { id: "b", text: "\u20b913,200" },
      { id: "c", text: "\u20b91,800" },
      { id: "d", text: "\u20b910,200" }
    ],
    answerId: "a",
    explanation: "15% of \u20b912,000 is \u20b91,800, so the new fee is \u20b912,000 + \u20b91,800 = \u20b913,800.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q18",
    prompt: "What is the amount on \u20b97,500 at 6% per year simple interest after 4 years?",
    options: [
      { id: "a", text: "\u20b91,800" },
      { id: "b", text: "\u20b99,300" },
      { id: "c", text: "\u20b99,050" },
      { id: "d", text: "\u20b97,950" }
    ],
    answerId: "b",
    explanation: "I = (7500 \u00d7 6 \u00d7 4)/100 = \u20b91,800, so the amount is \u20b97,500 + \u20b91,800 = \u20b99,300.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q19",
    prompt: "What is the compound interest on \u20b95,000 at 8% per year for 2 years, compounded annually?",
    options: [
      { id: "a", text: "\u20b9832" },
      { id: "b", text: "\u20b9800" },
      { id: "c", text: "\u20b9864" },
      { id: "d", text: "\u20b95,832" }
    ],
    answerId: "a",
    explanation: "The amount is 5,000 \u00d7 1.08 \u00d7 1.08 = \u20b95,832, so the CI is \u20b9832, while \u20b9800 is the simple interest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q20",
    prompt: "A price is first increased by 25% and then decreased by 20%. What is the net change?",
    options: [
      { id: "a", text: "5% increase" },
      { id: "b", text: "1% decrease" },
      { id: "c", text: "5% decrease" },
      { id: "d", text: "No change" }
    ],
    answerId: "d",
    explanation: "1.25 \u00d7 0.8 = 1, so the final price equals the original price.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q21",
    prompt: "The cost price of a pressure pan is \u20b9750. A shopkeeper wants a 20% profit even after giving a 10% discount on the marked price. What should the marked price be?",
    options: [
      { id: "a", text: "\u20b9975" },
      { id: "b", text: "\u20b9990" },
      { id: "c", text: "\u20b91,000" },
      { id: "d", text: "\u20b91,050" }
    ],
    answerId: "c",
    explanation: "The required SP is 750 \u00d7 1.2 = \u20b9900, and SP = 0.9 \u00d7 MP, so MP = 900 \u00f7 0.9 = \u20b91,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q22",
    prompt: "A bill including 5% GST comes to \u20b91,890. How much of the bill is GST?",
    options: [
      { id: "a", text: "\u20b91,800" },
      { id: "b", text: "\u20b994.50" },
      { id: "c", text: "\u20b9100" },
      { id: "d", text: "\u20b990" }
    ],
    answerId: "d",
    explanation: "The price before tax is 1,890 \u00f7 1.05 = \u20b91,800, so the GST is \u20b990, while \u20b994.50 wrongly takes 5% of the whole bill.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q23",
    prompt: "The population of Nandgaon village is 20,000. It grows by 5% every year. What will the population be after 2 years?",
    options: [
      { id: "a", text: "21,000" },
      { id: "b", text: "22,050" },
      { id: "c", text: "22,000" },
      { id: "d", text: "22,100" }
    ],
    answerId: "b",
    explanation: "Growth compounds each year, so 20,000 \u00d7 1.05 \u00d7 1.05 = 22,050, while 22,000 treats it as simple growth.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-compare-b-q24",
    prompt: "Selling an almirah for \u20b95,850 causes a 10% loss. At what price should it be sold to gain 10%?",
    options: [
      { id: "a", text: "\u20b96,435" },
      { id: "b", text: "\u20b96,500" },
      { id: "c", text: "\u20b97,150" },
      { id: "d", text: "\u20b97,020" }
    ],
    answerId: "c",
    explanation: "CP = 5,850 \u00f7 0.9 = \u20b96,500, so the SP for a 10% gain is 6,500 \u00d7 1.1 = \u20b97,150, while \u20b96,435 wrongly adds 10% to \u20b95,850.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "%",
    title: "Comparing quantities",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "fraction-bar",
    speak: "Ratios compare same-kind quantities. Percent means per hundred. Profit and loss percent use cost price.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "fraction-bar",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Ratio", reveal: "Compare two quantities in the same units", emoji: "\ud83d\udcd0" },
      { label: "Percent", reveal: "Out of every hundred", emoji: "%" },
      { label: "Percent change", reveal: "Change over original, times 100", emoji: "\ud83d\udcc8" },
      { label: "Profit and loss", reveal: "Always on cost price", emoji: "\ud83c\udfea" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Write 3/4 as a percentage.",
    options: [
        { id: "a", text: "34%" },
        { id: "b", text: "75%" },
        { id: "c", text: "43%" },
        { id: "d", text: "7.5%" }
    ],
    answerId: "b",
    why: "3/4 = 0.75 = 75%.",
    visual: "fraction-bar",
    speak: "Write 3/4 as a percentage.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Ratio needs same units", "% on the original", "Profit/loss on CP", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8MathsComparing: ChapterDef = {
  id: "comparing-quantities",
  title: "Comparing Quantities",
  emoji: "%",
  blurb: "Ratios, percent, profit & loss",
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
  paperTopics: ["percent", "ratios", "fractions"],
};

export const g8MathsComparingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
