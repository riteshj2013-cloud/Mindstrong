import type { ChapterDef, PrepQuestion } from "../types";
import { g8MathsComparingAchievers } from "./g8-maths-comparing-achievers";

/** Comparing Quantities - original olympiad-style content (not affiliated with SOF). */

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
    explanation: "3/4 × 100% = 75%, while 34% just joins the digits together. 43% is tempting if you treat a percentage or ratio in “written / percentage” as a raw count, which lands on 43% instead of 75%.",
    hints: ["Multiply 3/4 by 100%, or first change 3/4 to a fraction out of 100."]
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
    explanation: "Multiplying by 100 gives 0.08 × 100 = 8%. 0.8% is tempting if you treat a percentage or ratio in “written / percentage” as a raw count, which lands on 0.8% instead of 8%.",
    hints: ["Multiply 0.08 by 100: move the decimal point two places to the right."]
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
    explanation: "2 m is 200 cm, so 40 : 200 = 1 : 5, while 20 : 1 forgets to convert the units. 1 : 20 is tempting if you treat a percentage or ratio in “ratio / simplest / form” as a raw count, which lands on 1 : 20 instead of 1 : 5.",
    hints: ["Change 2 m to centimetres first, then divide both parts of the ratio by their HCF."]
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
    explanation: "15/100 × 600 = ₹90. ₹900 is tempting if you treat a percentage or ratio in “compare” as a raw count, which lands on ₹900 instead of ₹90.",
    hints: ["Find 1% of ₹600 by dividing by 100, then multiply by 15."]
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
    explanation: "SP is more than CP, so there is a profit of ₹300 − ₹250 = ₹50. Loss of ₹50 is tempting if you swap selling price and cost price; because SP > CP here the result is Profit of ₹50.",
    hints: ["Compare the selling price ₹300 with the cost price ₹250. Which is bigger, and by how much?"]
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
    explanation: "SP = MP − discount = ₹800 − ₹120 = ₹680. ₹800 is tempting if you quote the marked price itself or subtract the wrong amount; SP = MP − discount gives ₹680.",
    hints: ["Selling price = marked price − discount. Subtract ₹120 from ₹800."]
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
    explanation: "I = (2000 × 5 × 3)/100 = ₹300, while ₹2,300 is the amount, not the interest. ₹100 is tempting if you treat a percentage or ratio in “simple / interest / per” as a raw count, which lands on ₹100 instead of ₹300.",
    hints: ["Use SI = P × R × T ÷ 100 with P = ₹2,000, R = 5 and T = 3."]
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
    explanation: "18/24 = 3/4, which is 75%, while 25% is the percentage who failed. 80% is tempting if you treat a percentage or ratio in “class / test / students” as a raw count, which lands on 80% instead of 75%.",
    hints: ["Write 18 out of 24 as a fraction, simplify it, then multiply by 100%."]
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
    explanation: "The increase of ₹10 on the original ₹50 is 20%, while 16 2/3% wrongly divides by the new price. 16 2/3% is tempting if you treat a percentage or ratio in “price / notebook / rises” as a raw count, which lands on 16 2/3% instead of 20%.",
    hints: ["Find the rise in rupees, then divide it by the original price ₹50 and multiply by 100."]
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
    explanation: "5% of ₹400 is ₹20, so the bill is ₹400 + ₹20 = ₹420. ₹405 is tempting if you add 400 and 5 to get ₹405 when the stem needs a different operation that yields ₹420.",
    hints: ["Find 5% of ₹400, then add it to ₹400 for the total bill."]
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
    explanation: "The loss is ₹250, and 250/1250 × 100 = 20%, while 25% wrongly divides by SP. 25% is tempting if you treat a percentage or ratio in “cycle / bought / sold” as a raw count, which lands on 25% instead of 20%.",
    hints: ["Find the loss in rupees, then divide it by the cost price ₹1,250 and multiply by 100."]
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
    explanation: "15% of ₹1,600 is ₹240, so SP = ₹1,600 − ₹240 = ₹1,360, while ₹240 is only the discount. ₹1,585 is tempting if you subtract 15 and 1600.0 in the order that yields ₹1,585 instead of the path to ₹1,360.",
    hints: ["Find 15% of ₹1,600, then subtract that discount from the marked price."]
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
    explanation: "The new salary is 1.2 times the old one, so the old salary is 18,000 ÷ 1.2 = ₹15,000, while ₹14,400 wrongly takes 20% off the new salary. ₹14,000 is tempting if you treat a percentage or ratio in “After / raise / Iyer” as a raw count, which lands on ₹14,000 instead of ₹15,000.",
    hints: ["After a 20% raise the new salary is 120% of the old one. Divide ₹18,000 by 1.2."]
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
    explanation: "P = (540 × 100)/(6 × 3) = 54,000/18 = ₹3,000. ₹1,800 is tempting if you round an intermediate decimal before multiplying by the base; keeping precision gives ₹3,000.",
    hints: ["Use P = (SI × 100) ÷ (R × T) with SI = ₹540, R = 6 and T = 3."]
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
    explanation: "25% of ₹480 is ₹120, so SP = ₹480 + ₹120 = ₹600, while ₹384 is a 20% loss. ₹505 is tempting if you add 480 and 25 to get ₹505 when the stem needs a different operation that yields ₹600.",
    hints: ["Find 25% of ₹480 (a quarter of it), then add it to the cost price."]
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
    explanation: "There are 5 + 3 = 8 parts, so each part is 96 ÷ 8 = 12, and the girls are 3 × 12 = 36. 32 is tempting if you treat a percentage or ratio in “ratio / boys / girls” as a raw count, which lands on 32 instead of 36.",
    hints: ["The ratio 5 : 3 has 5 + 3 equal parts. Find one part of 96, then take the girls' share."]
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
    explanation: "8% of 25,000 is 2,000, so the new population is 25,000 − 2,000 = 23,000. 24,800 is tempting if you apply the rate to a nearby round number instead of the given base; the exact calculation is 23,000.",
    hints: ["Find 8% of 25,000, then subtract it from the population."]
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
    explanation: "The interest is ₹1,200, so R = (1200 × 100)/(5000 × 3) = 8%, while 24% forgets to divide by the 3 years. 12% is tempting if you forget the /100 in SI = (P×R×T)/100, or use the amount in place of interest; the correct figure is 8%.",
    hints: ["First find the interest: ₹6,200 − ₹5,000. Then use R = SI × 100 ÷ (P × T)."]
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
    explanation: "The amount is 10,000 × 1.1 × 1.1 = ₹12,100, so the CI is ₹2,100, while ₹2,000 is the simple interest. ₹1,100 is tempting if you find what percent ₹2,100 is of something else rather than the asked percentage of the base; the asked amount is ₹2,100.",
    hints: ["Grow ₹10,000 by 10% for one year, then grow that new amount by 10% again. Subtract ₹10,000."]
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
    explanation: "1.2 × 0.8 = 0.96, so the final price is 4% less than the original, because the second 20% is taken on a bigger amount. 4% increase is tempting if you add the rate to the base instead of taking that percent of it; 4% decrease is the percentage amount.",
    hints: ["Start with a price of ₹100. Increase it by 20%, then decrease the new price by 20%."]
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
    explanation: "For CP = ₹100, MP = ₹140 and SP = 140 × 0.75 = ₹105, so the profit is 5%, not 40% − 25% = 15%. 5% loss is tempting if you treat a percentage or ratio in “shopkeeper / marks / goods” as a raw count, which lands on 5% loss instead of 5% profit.",
    hints: ["Take the cost price as ₹100. Mark it up by 40%, then take 25% off the marked price."]
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
    explanation: "The price including GST is 1.12 times the original, so the original is 2,240 ÷ 1.12 = ₹2,000, while ₹1,971.20 wrongly takes 12% off ₹2,240. ₹1,880 is tempting if you treat a percentage or ratio in “price / mixer / including” as a raw count, which lands on ₹1,880 instead of ₹2,000.",
    hints: ["The bill is 112% of the price before GST. Divide ₹2,240 by 1.12."]
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
    explanation: "SI = ₹800 and CI = 8,000 × 1.05² − 8,000 = ₹820, so the difference is ₹20. ₹0 is tempting if you treat a percentage or ratio in “difference / between / compound” as a raw count, which lands on ₹0 instead of ₹20.",
    hints: ["Find the simple interest for 2 years, then the compound interest by growing ₹8,000 by 5% twice. Subtract."]
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
    explanation: "The SPs are ₹4,800 and ₹3,400, which total ₹8,200 against a CP of ₹8,000, so the profit is ₹200 = 2.5%. 2.5%. 2.5%. 2.5% loss is tempting if you treat a percentage or ratio in “Ravi / bought / two” as a raw count, which lands on 2.5% loss instead of 2.5% profit.",
    hints: ["Find each selling price: ₹4,000 plus 20%, and ₹4,000 minus 15%. Compare their total with ₹8,000."]
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
    explanation: "2/5 × 100% = 40%. 25% is tempting if you multiply only the numerator by something near 10, or confuse 2/5 with 1/4; multiplying the fraction by 100 gives 40%.",
    hints: ["Multiply 2/5 by 100%, or make the denominator 100 first."]
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
    explanation: "Multiplying by 100 gives 0.375 × 100 = 37.5%. 375% is tempting if you treat a percentage or ratio in “written / percentage” as a raw count, which lands on 375% instead of 37.5%.",
    hints: ["Multiply 0.375 by 100: move the decimal point two places to the right."]
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
    explanation: "3 kg is 3,000 g, so 750 : 3000 = 1 : 4, while 250 : 1 forgets to convert the units. 1 : 40 is tempting if you treat a percentage or ratio in “ratio / simplest / form” as a raw count, which lands on 1 : 40 instead of 1 : 4.",
    hints: ["Change 3 kg to grams first, then divide both parts of the ratio by 750."]
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
    explanation: "12/100 × 450 = ₹54. ₹45 is tempting if you round an intermediate decimal before multiplying by the base; keeping precision gives ₹54.",
    hints: ["Find 10% of ₹450 and 2% of ₹450, then add them."]
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
    explanation: "SP is less than CP, so there is a loss of ₹640 − ₹600 = ₹40. Profit of ₹40 is tempting if you swap selling price and cost price; because CP > SP here the result is Loss of ₹40.",
    hints: ["Compare the selling price ₹600 with the cost price ₹640. Which is bigger, and by how much?"]
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
    explanation: "Discount = MP − SP = ₹1,250 − ₹1,100 = ₹150. ₹50 is tempting if you quote the marked price itself or subtract the wrong amount; SP = MP − discount gives ₹150.",
    hints: ["Discount = marked price − selling price. Subtract ₹1,100 from ₹1,250."]
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
    explanation: "I = (1500 × 8 × 2)/100 = ₹240, while ₹120 is the interest for just 1 year. ₹120 is tempting if you apply the rate to a nearby round number instead of the given base; the exact calculation is ₹240.",
    hints: ["Use SI = P × R × T ÷ 100 with P = ₹1,500, R = 8 and T = 2."]
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
    explanation: "42/60 = 0.7, which is 70%. 60% is tempting if you treat a percentage or ratio in “Nisha / scored / quiz” as a raw count, which lands on 60% instead of 70%.",
    hints: ["Write 42 out of 60 as a fraction, simplify it, then multiply by 100%."]
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
    explanation: "The fall of ₹12 on the original ₹80 is 15%, while 12% treats the rupee drop as a percent. 12% is tempting if you subtract 80 and 68.0 in the order that yields 12% instead of the path to 15%.",
    hints: ["Find the fall in rupees, then divide it by the original price ₹80 and multiply by 100."]
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
    explanation: "18% of ₹500 is ₹90, while ₹590 is the total bill. ₹590 is tempting if you treat a percentage or ratio in “tailoring / service / costs” as a raw count, which lands on ₹590 instead of ₹90.",
    hints: ["The question asks for the GST alone. Find 18% of ₹500 as 10% plus 8%."]
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
    explanation: "The profit is ₹120, and 120/800 × 100 = 15%, while about 13% wrongly divides by SP. 13% is tempting if you treat a percentage or ratio in “cricket / bat / bought” as a raw count, which lands on 13% instead of 15%.",
    hints: ["Find the profit in rupees, then divide it by the cost price ₹800 and multiply by 100."]
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
    explanation: "12% of ₹2,500 is ₹300, so SP = ₹2,500 − ₹300 = ₹2,200. ₹2,800 is tempting if you find what percent ₹2,200 is of something else rather than the asked percentage of the base; the asked amount is ₹2,200.",
    hints: ["Find 12% of ₹2,500, then subtract that discount from the marked price."]
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
    explanation: "The new price is 0.9 times the old one, so the old price is 1,080 ÷ 0.9 = ₹1,200, while ₹1,188 wrongly adds 10% of the new price. ₹1,180 is tempting if you treat a percentage or ratio in “After / price / cut” as a raw count, which lands on ₹1,180 instead of ₹1,200.",
    hints: ["After a 10% cut the price is 90% of the original. Divide ₹1,080 by 0.9."]
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
    explanation: "T = (900 × 100)/(4000 × 7.5) = 90,000/30,000 = 3 years. 2 years is tempting if you treat a percentage or ratio in “many / years / earn” as a raw count, which lands on 2 years instead of 3 years.",
    hints: ["Use T = (SI × 100) ÷ (P × R) with SI = ₹900, P = ₹4,000 and R = 7.5."]
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
    explanation: "10% of ₹1,350 is ₹135, so SP = ₹1,350 − ₹135 = ₹1,215, while ₹1,485 adds the loss instead. ₹1,485 is tempting if you add the rate to the base instead of taking that percent of it; ₹1,215 is the percentage amount.",
    hints: ["Find 10% of ₹1,350, then subtract it from the cost price because it is a loss."]
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
    explanation: "7 parts are 84 mangoes, so 1 part is 12 and 5 parts are 60 apples. 49 is tempting if you treat a percentage or ratio in “fruit / stall / ratio” as a raw count, which lands on 49 instead of 60.",
    hints: ["7 parts of the ratio are the 84 mangoes. Find one part, then the apples are 5 parts."]
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
    explanation: "15% of ₹12,000 is ₹1,800, so the new fee is ₹12,000 + ₹1,800 = ₹13,800. ₹13,200 is tempting if you treat a percentage or ratio in “annual / fee / Shanti” as a raw count, which lands on ₹13,200 instead of ₹13,800.",
    hints: ["Find 15% of ₹12,000 as 10% plus 5%, then add it to the old fee."]
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
    explanation: "I = (7500 × 6 × 4)/100 = ₹1,800, so the amount is ₹7,500 + ₹1,800 = ₹9,300. ₹1,800 is tempting if you treat a percentage or ratio in “amount / per / year” as a raw count, which lands on ₹1,800 instead of ₹9,300.",
    hints: ["Find the simple interest with P = ₹7,500, R = 6, T = 4. The amount is principal plus interest."]
  },
  {
    id: "g8-maths-compare-b-q19",
    prompt: "Yashwant buys a scooter in Ludhiana for ₹80,000. Its value falls by 10% every year, each time on its value at the start of that year. What is the scooter worth after 2 years?",
    options: [
      { id: "a", text: "₹64,800" },
      { id: "b", text: "₹64,000" },
      { id: "c", text: "₹72,000" },
      { id: "d", text: "₹15,200" }
    ],
    answerId: "a",
    explanation: "After 1 year the value is 90% of ₹80,000 = ₹72,000. After 2 years it is 90% of ₹72,000 = ₹64,800 (that is, 80,000 × 0.9 × 0.9). ₹64,000 is tempting if you take 10% of ₹80,000 off twice, but the second year's 10% is taken from the lower value of ₹72,000.",
    hints: ["Find the value of Yashwant's scooter after the first year, then take the percentage fall from that new value for the next year."]
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
    explanation: "1.25 × 0.8 = 1, so the final price equals the original price. 5% increase is tempting if you subtract 25 and 20 in the order that yields 5% increase instead of the path to No change.",
    hints: ["Start with a price of ₹100. Increase it by 25%, then decrease the new price by 20%."]
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
    explanation: "The required SP is 750 × 1.2 = ₹900, and SP = 0.9 × MP, so MP = 900 ÷ 0.9 = ₹1,000. ₹975 is tempting if you treat a percentage or ratio in “cost / price / pressure” as a raw count, which lands on ₹975 instead of ₹1,000.",
    hints: ["First find the selling price for a 20% profit on ₹750. That selling price is 90% of the marked price."]
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
    explanation: "The price before tax is 1,890 ÷ 1.05 = ₹1,800, so the GST is ₹90, while ₹94.50 wrongly takes 5% of the whole bill. ₹1,800 is tempting if you treat a percentage or ratio in “bill / including / GST” as a raw count, which lands on ₹1,800 instead of ₹90.",
    hints: ["The bill is 105% of the price before GST. Find that price from ₹1,890, then subtract."]
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
    explanation: "Growth compounds each year, so 20,000 × 1.05 × 1.05 = 22,050, while 22,000 treats it as simple growth. 22,000 is tempting if you treat a percentage or ratio in “population / Nandgaon / village” as a raw count, which lands on 22,000 instead of 22,050.",
    hints: ["Growth compounds: increase 20,000 by 5%, then increase that new number by 5% again."]
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
    explanation: "CP = 5,850 ÷ 0.9 = ₹6,500, so the SP for a 10% gain is 6,500 × 1.1 = ₹7,150, while ₹6,435 wrongly adds 10% to ₹5,850. ₹6,435 is tempting if you treat a percentage or ratio in “Selling / almirah / causes” as a raw count, which lands on ₹6,435 instead of ₹7,150.",
    hints: ["₹5,850 is 90% of the cost price. Find the cost price, then add 10% of it."]
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g8MathsComparingAchievers.length,
      topic: "percent",
      questions: g8MathsComparingAchievers,
    },
  ],
  paperTopics: ["percent", "ratios", "fractions"],
};

export const g8MathsComparingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
