import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar Under the Microscope - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-eng-ch02-a-q01",
    prompt: "By the time the judges reached our table, Arnav and I had been rehearsing our explanation for nearly two hours. We had built a water clock from three plastic bottles, a length of rubber tubing and a ruler marked in minutes. It had taken us a month to get the drip rate right; the first version had flooded my mother's kitchen twice.\n\nThe chief judge, a retired engineer who had taught physics for thirty years, studied the clock in silence. \"Who designed the float?\" she asked. Arnav pointed at me. \"She did. I only cut the bottles.\"\n\nThe judge smiled. \"Then you have both learnt something important. Every machine is designed by one person and improved by another.\" She asked us whether the clock would work at a hill station, where water boils at a lower temperature. We hadn't considered that. \"It should still work,\" I said slowly, \"because the drip depends mainly on gravity, not on boiling.\"\n\nShe wrote something in her notebook. We did not win first prize, but we were invited to present the clock at the district exhibition next month.\n\nRead Passage P1. \"Arnav and I had been rehearsing our explanation for nearly two hours.\" Which tense is used?",
    options: [
      { id: "a", text: "Past continuous" },
      { id: "b", text: "Past perfect continuous" },
      { id: "c", text: "Present perfect continuous" },
      { id: "d", text: "Past perfect" }
    ],
    answerId: "b",
    explanation: "\"Had been + -ing\" is the past perfect continuous. It shows an action that continued for a period up to another past moment, here the judges' arrival.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q02",
    prompt: "By the time the judges reached our table, Arnav and I had been rehearsing our explanation for nearly two hours. We had built a water clock from three plastic bottles, a length of rubber tubing and a ruler marked in minutes. It had taken us a month to get the drip rate right; the first version had flooded my mother's kitchen twice.\n\nThe chief judge, a retired engineer who had taught physics for thirty years, studied the clock in silence. \"Who designed the float?\" she asked. Arnav pointed at me. \"She did. I only cut the bottles.\"\n\nThe judge smiled. \"Then you have both learnt something important. Every machine is designed by one person and improved by another.\" She asked us whether the clock would work at a hill station, where water boils at a lower temperature. We hadn't considered that. \"It should still work,\" I said slowly, \"because the drip depends mainly on gravity, not on boiling.\"\n\nShe wrote something in her notebook. We did not win first prize, but we were invited to present the clock at the district exhibition next month.\n\nRead Passage P1. Change into active voice: \"Every machine is designed by one person and improved by another.\"",
    options: [
      { id: "a", text: "One person designed every machine, and another improved it." },
      { id: "b", text: "One person is designing every machine, and another is improving it." },
      { id: "c", text: "Every machine designs one person and improves another." },
      { id: "d", text: "One person designs every machine, and another improves it." }
    ],
    answerId: "d",
    explanation: "The passive \"is designed\" is simple present, so the active must stay in simple present: \"designs,\" \"improves.\" Option A wrongly shifts to the past.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q03",
    prompt: "By the time the judges reached our table, Arnav and I had been rehearsing our explanation for nearly two hours. We had built a water clock from three plastic bottles, a length of rubber tubing and a ruler marked in minutes. It had taken us a month to get the drip rate right; the first version had flooded my mother's kitchen twice.\n\nThe chief judge, a retired engineer who had taught physics for thirty years, studied the clock in silence. \"Who designed the float?\" she asked. Arnav pointed at me. \"She did. I only cut the bottles.\"\n\nThe judge smiled. \"Then you have both learnt something important. Every machine is designed by one person and improved by another.\" She asked us whether the clock would work at a hill station, where water boils at a lower temperature. We hadn't considered that. \"It should still work,\" I said slowly, \"because the drip depends mainly on gravity, not on boiling.\"\n\nShe wrote something in her notebook. We did not win first prize, but we were invited to present the clock at the district exhibition next month.\n\nRead Passage P1. Choose the correct indirect form of: \"Who designed the float?\" she asked.",
    options: [
      { id: "a", text: "She asked who had designed the float." },
      { id: "b", text: "She asked who designed the float?" },
      { id: "c", text: "She asked that who had designed the float." },
      { id: "d", text: "She said who has designed the float." }
    ],
    answerId: "a",
    explanation: "In reported questions: no question mark, no \"that\" before the question word, and the tense steps back (designed becomes had designed).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q04",
    prompt: "By the time the judges reached our table, Arnav and I had been rehearsing our explanation for nearly two hours. We had built a water clock from three plastic bottles, a length of rubber tubing and a ruler marked in minutes. It had taken us a month to get the drip rate right; the first version had flooded my mother's kitchen twice.\n\nThe chief judge, a retired engineer who had taught physics for thirty years, studied the clock in silence. \"Who designed the float?\" she asked. Arnav pointed at me. \"She did. I only cut the bottles.\"\n\nThe judge smiled. \"Then you have both learnt something important. Every machine is designed by one person and improved by another.\" She asked us whether the clock would work at a hill station, where water boils at a lower temperature. We hadn't considered that. \"It should still work,\" I said slowly, \"because the drip depends mainly on gravity, not on boiling.\"\n\nShe wrote something in her notebook. We did not win first prize, but we were invited to present the clock at the district exhibition next month.\n\nRead Passage P1. \"It should still work,\" I said slowly. What does \"should\" express here?",
    options: [
      { id: "a", text: "Obligation" },
      { id: "b", text: "Permission" },
      { id: "c", text: "Probability or expectation" },
      { id: "d", text: "Ability" }
    ],
    answerId: "c",
    explanation: "The speaker is reasoning about a likely outcome, not giving a duty. \"Should\" here means \"it is expected to,\" a logical expectation.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q05",
    prompt: "(1) Last winter, our class have visited the Sundarbans as part of a nature camp.\n(2) We travelled by boat for six hour before reaching the forest office.\n(3) The guide, who has been working there since ten years, told us about the tigers.\n(4) He said that the tigers of the Sundarbans can swimming across wide rivers.\n(5) Most of us had never saw a mangrove forest before that trip.\n(6) The roots, which rises out of the mud like fingers, help the trees to breathe.\n\nRead Editing Passage E1, line (1): \"Last winter, our class have visited the Sundarbans...\" Choose the correct replacement for \"have visited.\"",
    options: [
      { id: "a", text: "visited" },
      { id: "b", text: "has visit" },
      { id: "c", text: "were visiting" },
      { id: "d", text: "had visit" }
    ],
    answerId: "a",
    explanation: "A finished past time (\"Last winter\") needs the simple past, not the present perfect. \"Class\" acting as one group also takes a singular verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q06",
    prompt: "Choose the correct verb form.\n\"I ___ this novel three times already, and I still love it.\"",
    options: [
      { id: "a", text: "read" },
      { id: "b", text: "am reading" },
      { id: "c", text: "was reading" },
      { id: "d", text: "have read" }
    ],
    answerId: "d",
    explanation: "\"Already\" with a repeated experience that still matters now calls for the present perfect: have + past participle.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q07",
    prompt: "(1) Last winter, our class have visited the Sundarbans as part of a nature camp.\n(2) We travelled by boat for six hour before reaching the forest office.\n(3) The guide, who has been working there since ten years, told us about the tigers.\n(4) He said that the tigers of the Sundarbans can swimming across wide rivers.\n(5) Most of us had never saw a mangrove forest before that trip.\n(6) The roots, which rises out of the mud like fingers, help the trees to breathe.\n\nRead Editing Passage E1, line (3): \"...who has been working there since ten years...\" Choose the correct replacement for \"since.\"",
    options: [
      { id: "a", text: "from" },
      { id: "b", text: "for" },
      { id: "c", text: "during" },
      { id: "d", text: "till" }
    ],
    answerId: "b",
    explanation: "Use \"for\" with a length of time (ten years) and \"since\" with a starting point (since 2016).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q08",
    prompt: "(1) Last winter, our class have visited the Sundarbans as part of a nature camp.\n(2) We travelled by boat for six hour before reaching the forest office.\n(3) The guide, who has been working there since ten years, told us about the tigers.\n(4) He said that the tigers of the Sundarbans can swimming across wide rivers.\n(5) Most of us had never saw a mangrove forest before that trip.\n(6) The roots, which rises out of the mud like fingers, help the trees to breathe.\n\nRead Editing Passage E1, line (4): \"...the tigers of the Sundarbans can swimming across wide rivers.\" Choose the correct replacement for \"can swimming.\"",
    options: [
      { id: "a", text: "can swam" },
      { id: "b", text: "could swimming" },
      { id: "c", text: "can swim" },
      { id: "d", text: "can to swim" }
    ],
    answerId: "c",
    explanation: "Modals (can, must, should, may) are always followed by the base form of the verb, with no -ing, no past form, and no \"to.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q09",
    prompt: "Choose the correct verb form.\n\"When we reached the platform, the train ___ already ___. We had to wait for the next one.\"",
    options: [
      { id: "a", text: "has / leave" },
      { id: "b", text: "is / leaving" },
      { id: "c", text: "was / leave" },
      { id: "d", text: "had / left" }
    ],
    answerId: "d",
    explanation: "The train left before we reached, so the earlier past action takes the past perfect: had left. \"Already\" supports this.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q10",
    prompt: "(1) Last winter, our class have visited the Sundarbans as part of a nature camp.\n(2) We travelled by boat for six hour before reaching the forest office.\n(3) The guide, who has been working there since ten years, told us about the tigers.\n(4) He said that the tigers of the Sundarbans can swimming across wide rivers.\n(5) Most of us had never saw a mangrove forest before that trip.\n(6) The roots, which rises out of the mud like fingers, help the trees to breathe.\n\nRead Editing Passage E1, line (6): \"The roots, which rises out of the mud like fingers...\" Choose the correct replacement for \"rises.\"",
    options: [
      { id: "a", text: "rise" },
      { id: "b", text: "rising" },
      { id: "c", text: "has risen" },
      { id: "d", text: "rose up" }
    ],
    answerId: "a",
    explanation: "The relative pronoun \"which\" takes the number of its antecedent. It refers to \"roots,\" which is plural, so the verb must be \"rise.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q11",
    prompt: "Choose the correct verb form.\n\"She ___ for the exam since six o'clock this morning.\"",
    options: [
      { id: "a", text: "studies" },
      { id: "b", text: "is studying" },
      { id: "c", text: "has been studying" },
      { id: "d", text: "studied" }
    ],
    answerId: "c",
    explanation: "An action that began in the past and is still continuing, with \"since,\" takes the present perfect continuous.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q12",
    prompt: "Choose the correct verb form.\n\"By next June, my sister ___ her engineering degree.\"",
    options: [
      { id: "a", text: "completes" },
      { id: "b", text: "will have completed" },
      { id: "c", text: "has completed" },
      { id: "d", text: "will be complete" }
    ],
    answerId: "b",
    explanation: "\"By + future time\" signals the future perfect (will have + past participle). The action will be finished before that point.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q13",
    prompt: "Change into passive voice: \"The workers are repairing the old bridge.\"",
    options: [
      { id: "a", text: "The old bridge is being repaired by the workers." },
      { id: "b", text: "The old bridge is repaired by the workers." },
      { id: "c", text: "The old bridge was being repaired by the workers." },
      { id: "d", text: "The old bridge has been repairing by the workers." }
    ],
    answerId: "a",
    explanation: "In the present continuous passive, use is/are + being + past participle. Keep the tense; only the focus changes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q14",
    prompt: "Change into passive voice: \"Did the committee approve the new timetable?\"",
    options: [
      { id: "a", text: "Was the new timetable approve by the committee?" },
      { id: "b", text: "Is the new timetable approved by the committee?" },
      { id: "c", text: "Was the new timetable approved by the committee?" },
      { id: "d", text: "Did the new timetable approved by the committee?" }
    ],
    answerId: "c",
    explanation: "\"Did + approve\" is simple past, so the passive question uses \"Was + subject + past participle.\" Keep the question form and the tense.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q15",
    prompt: "Choose the correct indirect form: Rahul said, \"I am tired.\"",
    options: [
      { id: "a", text: "Rahul said that I am tired." },
      { id: "b", text: "Rahul said that he is tired." },
      { id: "c", text: "Rahul told that he was tired." },
      { id: "d", text: "Rahul said that he was tired." }
    ],
    answerId: "d",
    explanation: "Change the pronoun (I becomes he) and step the tense back (am becomes was). \"Told\" needs an object, as in \"told me,\" so C is wrong.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q16",
    prompt: "Choose the correct indirect form: The teacher said to us, \"Don't run in the corridor.\"",
    options: [
      { id: "a", text: "The teacher told us that don't run in the corridor." },
      { id: "b", text: "The teacher told us not to run in the corridor." },
      { id: "c", text: "The teacher said us not to run in the corridor." },
      { id: "d", text: "The teacher asked us to not running in the corridor." }
    ],
    answerId: "b",
    explanation: "A negative command is reported as \"told/ordered + object + not to + base verb.\" \"Said us\" is incorrect English.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q17",
    prompt: "Choose the most suitable modal.\n\"You ___ wear a helmet while riding a two-wheeler; it is the law.\"",
    options: [
      { id: "a", text: "might" },
      { id: "b", text: "can" },
      { id: "c", text: "must" },
      { id: "d", text: "may" }
    ],
    answerId: "c",
    explanation: "\"It is the law\" signals a strong obligation, and \"must\" expresses that. \"Might\" and \"may\" suggest only possibility.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q18",
    prompt: "Choose the correct option.\n\"The roads are flooded this morning. It ___ rained heavily last night.\"",
    options: [
      { id: "a", text: "would" },
      { id: "b", text: "must have" },
      { id: "c", text: "should" },
      { id: "d", text: "can have" }
    ],
    answerId: "b",
    explanation: "\"Must have + past participle\" expresses a confident deduction about the past from present evidence. \"Can have\" isn't used this way in positive sentences.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q19",
    prompt: "\"The girl who won the debate is my cousin.\"\nWhat kind of clause is \"who won the debate\"?",
    options: [
      { id: "a", text: "An adjective (relative) clause" },
      { id: "b", text: "An adverb clause" },
      { id: "c", text: "A noun clause" },
      { id: "d", text: "The main clause" }
    ],
    answerId: "a",
    explanation: "It describes the noun \"girl\" and tells us which girl, so it does the job of an adjective. Relative pronouns like who, which and that often introduce such clauses.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q20",
    prompt: "Choose the correct conjunction.\n\"___ it was raining heavily, the match continued.\"",
    options: [
      { id: "a", text: "Because" },
      { id: "b", text: "Unless" },
      { id: "c", text: "So" },
      { id: "d", text: "Although" }
    ],
    answerId: "d",
    explanation: "The two ideas contrast: heavy rain, yet the match went on. \"Although\" introduces a contrast; \"because\" would show a cause.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q21",
    prompt: "Choose the correct determiner.\n\"There is ___ milk left in the jug; please buy some on your way home.\"",
    options: [
      { id: "a", text: "few" },
      { id: "b", text: "a few" },
      { id: "c", text: "many" },
      { id: "d", text: "little" }
    ],
    answerId: "d",
    explanation: "Milk is uncountable, so use little/much, not few/many. \"Little\" (meaning almost none) fits the request to buy more.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q22",
    prompt: "Choose the correct preposition.\n\"Priya has been absent ___ Monday.\"",
    options: [
      { id: "a", text: "for" },
      { id: "b", text: "from" },
      { id: "c", text: "since" },
      { id: "d", text: "by" }
    ],
    answerId: "c",
    explanation: "With the present perfect and a starting point in time (Monday), use \"since.\" \"For\" goes with a duration, such as \"for three days.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q23",
    prompt: "Choose the sentence with the same meaning: \"He is too weak to walk.\"",
    options: [
      { id: "a", text: "He is so weak that he can walk." },
      { id: "b", text: "He is so weak that he cannot walk." },
      { id: "c", text: "He is very weak but he walks." },
      { id: "d", text: "He is weak enough to walk." }
    ],
    answerId: "b",
    explanation: "\"Too... to\" carries a negative meaning. When rewritten with \"so... that,\" the negative must appear openly: cannot walk.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-a-q24",
    prompt: "Which sentence is grammatically correct?",
    options: [
      { id: "a", text: "One of my friends lives in Pune." },
      { id: "b", text: "One of my friend lives in Pune." },
      { id: "c", text: "One of my friends live in Pune." },
      { id: "d", text: "One of my friend live in Pune." }
    ],
    answerId: "a",
    explanation: "\"One of\" is followed by a plural noun (friends), but the subject is \"one,\" which is singular. So the verb is \"lives.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-eng-ch02-b-q01",
    prompt: "Cricket (1) ___ played in India for more than two centuries. The first recorded match in the country (2) ___ said to have taken place in 1721, when English sailors played on the coast of Gujarat. Since then, the sport (3) ___ grown into a national passion. Today, children play it in narrow lanes, (4) ___ a brick often serves as the wicket, and in vast stadiums (5) ___ can hold over a hundred thousand fans. Many believe that cricket (6) ___ never lose its place in Indian hearts.\n\nRead Omission Passage O1. Choose the correct option for blank (1): \"Cricket (1) ___ played in India for more than two centuries.\"",
    options: [
      { id: "a", text: "has been" },
      { id: "b", text: "is being" },
      { id: "c", text: "was" },
      { id: "d", text: "had" }
    ],
    answerId: "a",
    explanation: "\"For more than two centuries\" up to today calls for the present perfect. Because cricket receives the action, the passive is \"has been played.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q02",
    prompt: "Cricket (1) ___ played in India for more than two centuries. The first recorded match in the country (2) ___ said to have taken place in 1721, when English sailors played on the coast of Gujarat. Since then, the sport (3) ___ grown into a national passion. Today, children play it in narrow lanes, (4) ___ a brick often serves as the wicket, and in vast stadiums (5) ___ can hold over a hundred thousand fans. Many believe that cricket (6) ___ never lose its place in Indian hearts.\n\nRead Omission Passage O1. Choose the correct option for blank (2): \"The first recorded match in the country (2) ___ said to have taken place in 1721...\"",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "has" },
      { id: "c", text: "is" },
      { id: "d", text: "were" }
    ],
    answerId: "c",
    explanation: "\"Is said to have...\" is a passive reporting structure. The subject \"match\" is singular, so \"is\" is correct, and \"has said\" would change the meaning.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q03",
    prompt: "Cricket (1) ___ played in India for more than two centuries. The first recorded match in the country (2) ___ said to have taken place in 1721, when English sailors played on the coast of Gujarat. Since then, the sport (3) ___ grown into a national passion. Today, children play it in narrow lanes, (4) ___ a brick often serves as the wicket, and in vast stadiums (5) ___ can hold over a hundred thousand fans. Many believe that cricket (6) ___ never lose its place in Indian hearts.\n\nRead Omission Passage O1. Choose the correct option for blank (3): \"Since then, the sport (3) ___ grown into a national passion.\"",
    options: [
      { id: "a", text: "had" },
      { id: "b", text: "has" },
      { id: "c", text: "have" },
      { id: "d", text: "is" }
    ],
    answerId: "b",
    explanation: "\"Since then\" connects past to present, so use the present perfect. \"Sport\" is singular and takes \"has.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q04",
    prompt: "Cricket (1) ___ played in India for more than two centuries. The first recorded match in the country (2) ___ said to have taken place in 1721, when English sailors played on the coast of Gujarat. Since then, the sport (3) ___ grown into a national passion. Today, children play it in narrow lanes, (4) ___ a brick often serves as the wicket, and in vast stadiums (5) ___ can hold over a hundred thousand fans. Many believe that cricket (6) ___ never lose its place in Indian hearts.\n\nRead Omission Passage O1. Choose the correct option for blank (4): \"...children play it in narrow lanes, (4) ___ a brick often serves as the wicket...\"",
    options: [
      { id: "a", text: "which" },
      { id: "b", text: "when" },
      { id: "c", text: "who" },
      { id: "d", text: "where" }
    ],
    answerId: "d",
    explanation: "The clause describes a place (lanes) and the brick is the subject of its own clause. \"Where\" means \"in which\" and links them.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q05",
    prompt: "Cricket (1) ___ played in India for more than two centuries. The first recorded match in the country (2) ___ said to have taken place in 1721, when English sailors played on the coast of Gujarat. Since then, the sport (3) ___ grown into a national passion. Today, children play it in narrow lanes, (4) ___ a brick often serves as the wicket, and in vast stadiums (5) ___ can hold over a hundred thousand fans. Many believe that cricket (6) ___ never lose its place in Indian hearts.\n\nRead Omission Passage O1. Choose the correct option for blank (5): \"...and in vast stadiums (5) ___ can hold over a hundred thousand fans.\"",
    options: [
      { id: "a", text: "where" },
      { id: "b", text: "who" },
      { id: "c", text: "that" },
      { id: "d", text: "what" }
    ],
    answerId: "c",
    explanation: "The blank needs a subject for \"can hold,\" since the stadiums themselves hold the fans. \"That\" can be a subject; \"where\" cannot. \"Who\" is for people only.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q06",
    prompt: "Cricket (1) ___ played in India for more than two centuries. The first recorded match in the country (2) ___ said to have taken place in 1721, when English sailors played on the coast of Gujarat. Since then, the sport (3) ___ grown into a national passion. Today, children play it in narrow lanes, (4) ___ a brick often serves as the wicket, and in vast stadiums (5) ___ can hold over a hundred thousand fans. Many believe that cricket (6) ___ never lose its place in Indian hearts.\n\nRead Omission Passage O1. Choose the correct option for blank (6): \"Many believe that cricket (6) ___ never lose its place in Indian hearts.\"",
    options: [
      { id: "a", text: "will" },
      { id: "b", text: "is" },
      { id: "c", text: "has" },
      { id: "d", text: "would been" }
    ],
    answerId: "a",
    explanation: "The sentence predicts the future, and \"lose\" is a base verb that needs a modal before it. \"Will never lose\" fits.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q07",
    prompt: "By the time the judges reached our table, Arnav and I had been rehearsing our explanation for nearly two hours. We had built a water clock from three plastic bottles, a length of rubber tubing and a ruler marked in minutes. It had taken us a month to get the drip rate right; the first version had flooded my mother's kitchen twice.\n\nThe chief judge, a retired engineer who had taught physics for thirty years, studied the clock in silence. \"Who designed the float?\" she asked. Arnav pointed at me. \"She did. I only cut the bottles.\"\n\nThe judge smiled. \"Then you have both learnt something important. Every machine is designed by one person and improved by another.\" She asked us whether the clock would work at a hill station, where water boils at a lower temperature. We hadn't considered that. \"It should still work,\" I said slowly, \"because the drip depends mainly on gravity, not on boiling.\"\n\nShe wrote something in her notebook. We did not win first prize, but we were invited to present the clock at the district exhibition next month.\n\nRead Passage P1. \"It had taken us a month to get the drip rate right; the first version had flooded my mother's kitchen twice.\" Why does the writer use the past perfect here?",
    options: [
      { id: "a", text: "The actions are happening at the moment of speaking." },
      { id: "b", text: "The actions are regular habits." },
      { id: "c", text: "The actions will happen in the future." },
      { id: "d", text: "The actions were completed before the main past event, the judging." }
    ],
    answerId: "d",
    explanation: "The story's \"now\" is the judging, which is already in the past. Earlier events, like building and flooding, step further back into the past perfect.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q08",
    prompt: "By the time the judges reached our table, Arnav and I had been rehearsing our explanation for nearly two hours. We had built a water clock from three plastic bottles, a length of rubber tubing and a ruler marked in minutes. It had taken us a month to get the drip rate right; the first version had flooded my mother's kitchen twice.\n\nThe chief judge, a retired engineer who had taught physics for thirty years, studied the clock in silence. \"Who designed the float?\" she asked. Arnav pointed at me. \"She did. I only cut the bottles.\"\n\nThe judge smiled. \"Then you have both learnt something important. Every machine is designed by one person and improved by another.\" She asked us whether the clock would work at a hill station, where water boils at a lower temperature. We hadn't considered that. \"It should still work,\" I said slowly, \"because the drip depends mainly on gravity, not on boiling.\"\n\nShe wrote something in her notebook. We did not win first prize, but we were invited to present the clock at the district exhibition next month.\n\nRead Passage P1. Choose the correct indirect form of: Arnav said, \"She did. I only cut the bottles.\"",
    options: [
      { id: "a", text: "Arnav said that she did and he only cuts the bottles." },
      { id: "b", text: "Arnav said that she had done it and that he had only cut the bottles." },
      { id: "c", text: "Arnav told that she had done it and he only cut the bottles." },
      { id: "d", text: "Arnav said that she does it and I only cut the bottles." }
    ],
    answerId: "b",
    explanation: "Both simple past verbs step back to past perfect. \"I\" becomes \"he.\" When two statements are reported, \"that\" is repeated for clarity.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q09",
    prompt: "Change into passive voice: \"Someone has stolen my bicycle.\"",
    options: [
      { id: "a", text: "My bicycle was stolen." },
      { id: "b", text: "My bicycle has been stolen." },
      { id: "c", text: "My bicycle has stolen." },
      { id: "d", text: "My bicycle is being stolen." }
    ],
    answerId: "b",
    explanation: "Present perfect passive = has/have + been + past participle. When the doer is vague (\"someone\"), we leave out the \"by\" phrase.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q10",
    prompt: "Choose the correct verb form.\n\"Listen! Someone ___ the piano upstairs.\"",
    options: [
      { id: "a", text: "plays" },
      { id: "b", text: "played" },
      { id: "c", text: "has played" },
      { id: "d", text: "is playing" }
    ],
    answerId: "d",
    explanation: "\"Listen!\" draws attention to something happening right now, so use the present continuous.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q11",
    prompt: "Choose the correct verb form.\n\"I ___ Kavya at the bookshop yesterday.\"",
    options: [
      { id: "a", text: "saw" },
      { id: "b", text: "have seen" },
      { id: "c", text: "had seen" },
      { id: "d", text: "have saw" }
    ],
    answerId: "a",
    explanation: "The present perfect cannot be used with a finished time like \"yesterday.\" Use the simple past.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q12",
    prompt: "Choose the correct verb form.\n\"They ___ at the stop for an hour when the bus finally arrived.\"",
    options: [
      { id: "a", text: "waited" },
      { id: "b", text: "are waiting" },
      { id: "c", text: "had been waiting" },
      { id: "d", text: "have been waiting" }
    ],
    answerId: "c",
    explanation: "The waiting lasted a period (\"for an hour\") up to another past event (the bus arrived). That calls for the past perfect continuous.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q13",
    prompt: "Change into passive voice: \"They will announce the results tomorrow.\"",
    options: [
      { id: "a", text: "The results will announced tomorrow." },
      { id: "b", text: "The results would be announced tomorrow." },
      { id: "c", text: "The results are announced tomorrow." },
      { id: "d", text: "The results will be announced tomorrow." }
    ],
    answerId: "d",
    explanation: "Future passive = will + be + past participle. Don't drop \"be,\" and don't change \"will\" to \"would.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q14",
    prompt: "Change into passive voice: \"Close the door.\"",
    options: [
      { id: "a", text: "The door is closed." },
      { id: "b", text: "Let the door be closed." },
      { id: "c", text: "The door be closed." },
      { id: "d", text: "Let close the door." }
    ],
    answerId: "b",
    explanation: "An imperative becomes passive with \"Let + object + be + past participle.\" Option A describes a state; it is not a command.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q15",
    prompt: "Choose the correct indirect form: She said to me, \"Are you coming to the party?\"",
    options: [
      { id: "a", text: "She asked me that am I coming to the party." },
      { id: "b", text: "She asked me was I coming to the party." },
      { id: "c", text: "She asked me whether I was coming to the party." },
      { id: "d", text: "She told me if I am coming to the party." }
    ],
    answerId: "c",
    explanation: "Yes/no questions are reported with \"if\" or \"whether,\" in statement word order (I was), with the tense stepped back.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q16",
    prompt: "Choose the correct indirect form: The teacher said, \"The Earth revolves around the Sun.\"",
    options: [
      { id: "a", text: "The teacher said that the Earth revolves around the Sun." },
      { id: "b", text: "The teacher said that the Earth revolved around the Sun." },
      { id: "c", text: "The teacher said that the Earth had revolved around the Sun." },
      { id: "d", text: "The teacher said that the Earth is revolving around the Sun." }
    ],
    answerId: "a",
    explanation: "Universal truths and scientific facts keep the present tense in reported speech. The Earth still revolves, so the backshift rule does not apply.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q17",
    prompt: "Choose the most suitable modal for a polite request for permission.\n\"___ I borrow your pen for a minute, please?\"",
    options: [
      { id: "a", text: "May" },
      { id: "b", text: "Must" },
      { id: "c", text: "Should" },
      { id: "d", text: "Need" }
    ],
    answerId: "a",
    explanation: "\"May I...?\" is the most polite, formal way to ask permission. \"Must\" and \"should\" express duty, not permission.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q18",
    prompt: "Choose the correct modal.\n\"You ___ have told me about your problem earlier; I could have helped.\"",
    options: [
      { id: "a", text: "must" },
      { id: "b", text: "can" },
      { id: "c", text: "will" },
      { id: "d", text: "should" }
    ],
    answerId: "d",
    explanation: "\"Should have + past participle\" expresses advice or regret about something that did not happen in the past.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q19",
    prompt: "\"I know that she is honest.\"\nWhat kind of clause is \"that she is honest\"?",
    options: [
      { id: "a", text: "An adjective clause" },
      { id: "b", text: "A noun clause" },
      { id: "c", text: "An adverb clause" },
      { id: "d", text: "A phrase, not a clause" }
    ],
    answerId: "b",
    explanation: "The clause answers \"Know what?\" It is the object of \"know,\" just as a noun would be. Clauses that act as subjects or objects are noun clauses.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q20",
    prompt: "Combine the sentences correctly: \"He was unwell. He went to school.\"",
    options: [
      { id: "a", text: "He was unwell, so he went to school." },
      { id: "b", text: "Because he was unwell, he went to school." },
      { id: "c", text: "Though he was unwell, he went to school." },
      { id: "d", text: "He was unwell unless he went to school." }
    ],
    answerId: "c",
    explanation: "Going to school despite being unwell is a contrast, so \"though\" fits. \"So\" and \"because\" wrongly suggest that illness caused the trip.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q21",
    prompt: "Choose the correct option.\n\"___ students in our class has a different hobby.\"",
    options: [
      { id: "a", text: "All" },
      { id: "b", text: "Many" },
      { id: "c", text: "Each of the" },
      { id: "d", text: "Few" }
    ],
    answerId: "c",
    explanation: "The singular verb \"has\" is the clue. \"Each of the + plural noun\" takes a singular verb; all, many and few would need \"have.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q22",
    prompt: "Choose the correct preposition.\n\"The cat leapt ___ the wall and landed in the garden.\"",
    options: [
      { id: "a", text: "over" },
      { id: "b", text: "on" },
      { id: "c", text: "at" },
      { id: "d", text: "in" }
    ],
    answerId: "a",
    explanation: "\"Over\" shows movement from one side to the other above something, which matches landing in the garden beyond.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q23",
    prompt: "Rewrite using the superlative degree: \"No other planet in the solar system is as large as Jupiter.\"",
    options: [
      { id: "a", text: "Jupiter is larger planet in the solar system." },
      { id: "b", text: "Jupiter is as large as other planets in the solar system." },
      { id: "c", text: "Jupiter is the larger planet in the solar system." },
      { id: "d", text: "Jupiter is the largest planet in the solar system." }
    ],
    answerId: "d",
    explanation: "\"No other... as large as\" means Jupiter beats all the others. The superlative needs \"the\" + -est: the largest.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch02-b-q24",
    prompt: "Choose the correct word.\n\"Scarcely had the guests arrived ___ the power went off.\"",
    options: [
      { id: "a", text: "than" },
      { id: "b", text: "when" },
      { id: "c", text: "then" },
      { id: "d", text: "that" }
    ],
    answerId: "b",
    explanation: "\"Scarcely\" and \"hardly\" pair with \"when,\" and \"no sooner\" pairs with \"than.\" Mixing these pairs is a common error.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd2c",
    title: "How sentences work",
    body: ["Tenses show how actions relate in time.", "Voice, reported speech and modals each change focus or attitude.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Today we put grammar under the microscope and look at how sentences actually work, not just at the rules.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Four big tools",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: perfect tenses, voice, reported speech and modals.",
    cards: [
      { label: "Perfect tenses", reveal: "have finished \u2192 links past to now; had finished \u2192 before another past", emoji: "\u23f3" },
      { label: "Active / passive", reveal: "Doer first vs. action first: \u201cThe bridge was built in 1990\u201d", emoji: "\ud83d\udd04" },
      { label: "Reported speech", reveal: "Tense steps back: is \u2192 was, will \u2192 would", emoji: "\ud83d\udde3\ufe0f" },
      { label: "Modals", reveal: "must, should, might, could \u2014 duty, advice, possibility", emoji: "\ud83e\udded" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Report it step by step",
    visual: "sentence",
    speak: "Meera said, I have lost my library card. The tense steps back: have lost becomes had lost. I becomes she, my becomes her. Meera said that she had lost her library card.",
    steps: ["Meera said, \u201cI have lost my library card.\u201d", "Reporting verb is past \u2192 tense steps back: have lost \u2192 had lost", "Pronouns shift: I \u2192 she, my \u2192 her", "Meera said that she had lost her library card."],
    punchline: "Universal truths keep the present: \u201cThe Earth is round.\u201d",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Choose the correct verb: \u201cWe ____ for an hour when the bus finally came.\u201d",
    options: [
      { id: "a", text: "have waited" },
      { id: "b", text: "had been waiting" },
      { id: "c", text: "are waiting" },
      { id: "d", text: "will wait" }
    ],
    answerId: "b",
    why: "Past perfect continuous stresses how long an action went on before another past moment.",
    visual: "sentence",
    speak: "Choose the correct verb: \u201cWe ____ for an hour when the bus finally came.\u201d",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Grammar engineer!",
    bullets: ["Name the rule before you choose", "Check subject\u2013verb, tense & time words", "Watch prepositions in error spotting", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Grammar engineer! You are ready for the practice sets.",
  },
];

export const g8EnglishGrammar: ChapterDef = {
  id: "grammar-microscope",
  title: "Grammar Under the Microscope",
  emoji: "\ud83d\udd2c",
  blurb: "Tenses, voice, reported speech & editing",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "grammar",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "grammar",
      questions: SET_B,
    },
  ],
  paperTopics: ["grammar", "comprehension"],
};

export const g8EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
