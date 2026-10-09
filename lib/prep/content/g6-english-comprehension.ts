import type { ChapterDef, PrepQuestion } from "../types";

/** Reading Comprehension - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-eng-comp-a-q01",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nWhere do Kabir and Meera go every Sunday?",
    options: [
      { id: "a", text: "The market" },
      { id: "b", text: "The neighbourhood library" },
      { id: "c", text: "The mangrove forest" },
      { id: "d", text: "Mrs Rao’s house" }
    ],
    answerId: "b",
    explanation: "The first sentence says they visit the neighbourhood library every Sunday.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q02",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nWhat kind of reading does Kabir prefer?",
    options: [
      { id: "a", text: "Folk tales" },
      { id: "b", text: "Science magazines" },
      { id: "c", text: "Comic books" },
      { id: "d", text: "Poetry only" }
    ],
    answerId: "b",
    explanation: "The passage says Kabir chooses science magazines.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q03",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nWho showed them the new shelf?",
    options: [
      { id: "a", text: "Meera" },
      { id: "b", text: "Kabir" },
      { id: "c", text: "Mrs Rao" },
      { id: "d", text: "An Indian author" }
    ],
    answerId: "c",
    explanation: "Mrs Rao, the librarian, showed them the new shelf.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q04",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nWhat was Meera’s borrowed story about?",
    options: [
      { id: "a", text: "Mangroves in storms" },
      { id: "b", text: "A girl who plants trees by a dry river" },
      { id: "c", text: "How to run a library" },
      { id: "d", text: "A coastal lighthouse" }
    ],
    answerId: "b",
    explanation: "Meera borrowed a story about a girl who plants trees along a dry river.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q05",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nAccording to Kabir’s article, mangroves —",
    options: [
      { id: "a", text: "harm the coast" },
      { id: "b", text: "protect the coast during storms" },
      { id: "c", text: "grow only in deserts" },
      { id: "d", text: "are folk tales" }
    ],
    answerId: "b",
    explanation: "The article said mangroves protect the coast during storms.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q06",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nHow soon must they return the books?",
    options: [
      { id: "a", text: "In two days" },
      { id: "b", text: "In ten days" },
      { id: "c", text: "In a month" },
      { id: "d", text: "Never" }
    ],
    answerId: "b",
    explanation: "They promised to return the books in ten days.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q07",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nFrom whom does Amma buy vegetables?",
    options: [
      { id: "a", text: "Mrs Rao" },
      { id: "b", text: "Uncle Raju" },
      { id: "c", text: "Kabir" },
      { id: "d", text: "Mr Das" }
    ],
    answerId: "b",
    explanation: "She buys from Uncle Raju’s stall.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q08",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nWhat quality of Uncle Raju is highlighted?",
    options: [
      { id: "a", text: "He rushes customers" },
      { id: "b", text: "He weighs carefully and never rushes" },
      { id: "c", text: "He sells only fruit" },
      { id: "d", text: "He ignores Amma" }
    ],
    answerId: "b",
    explanation: "He weighs tomatoes carefully and never rushes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q09",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nHow much coriander did Amma ask for?",
    options: [
      { id: "a", text: "Two kilos" },
      { id: "b", text: "A bunch" },
      { id: "c", text: "A bag of seeds" },
      { id: "d", text: "None" }
    ],
    answerId: "b",
    explanation: "She asked for a bunch of coriander.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q10",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nWhere was the coriander from?",
    options: [
      { id: "a", text: "A factory" },
      { id: "b", text: "Uncle Raju’s brother’s farm" },
      { id: "c", text: "The library" },
      { id: "d", text: "The school club" }
    ],
    answerId: "b",
    explanation: "Uncle Raju said it was fresh from his brother’s farm.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q11",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nHow much did Amma pay?",
    options: [
      { id: "a", text: "₹19" },
      { id: "b", text: "₹90" },
      { id: "c", text: "₹900" },
      { id: "d", text: "₹9" }
    ],
    answerId: "b",
    explanation: "Amma paid ₹90.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q12",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nWhat did Amma tell her son on the walk home?",
    options: [
      { id: "a", text: "Markets are boring" },
      { id: "b", text: "Honest traders make shopping a pleasure" },
      { id: "c", text: "Never buy tomatoes" },
      { id: "d", text: "Coriander is expensive" }
    ],
    answerId: "b",
    explanation: "She said honest traders make shopping a pleasure.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q13",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nWhen did the science club meet?",
    options: [
      { id: "a", text: "Before breakfast" },
      { id: "b", text: "After lunch" },
      { id: "c", text: "At midnight" },
      { id: "d", text: "On Sunday only" }
    ],
    answerId: "b",
    explanation: "The club met after lunch.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q14",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nWhat did Ananya say recycling paper does?",
    options: [
      { id: "a", text: "Wastes water" },
      { id: "b", text: "Saves trees" },
      { id: "c", text: "Blocks drains" },
      { id: "d", text: "Makes plastic" }
    ],
    answerId: "b",
    explanation: "Ananya said recycling paper saves trees.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q15",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nAccording to Rohan, sorting plastic from kitchen waste —",
    options: [
      { id: "a", text: "keeps drains cleaner" },
      { id: "b", text: "grows mangroves" },
      { id: "c", text: "mends bat grips" },
      { id: "d", text: "buys tomatoes" }
    ],
    answerId: "a",
    explanation: "Rohan said sorting plastic keeps drains cleaner.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q16",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nWhat did Mr Das ask members to bring?",
    options: [
      { id: "a", text: "Lunch boxes" },
      { id: "b", text: "One idea for the annual fair" },
      { id: "c", text: "Mangrove plants" },
      { id: "d", text: "₹90 each" }
    ],
    answerId: "b",
    explanation: "He asked each member to bring one idea for the annual fair.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q17",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nAnanya’s fair idea was a stall about —",
    options: [
      { id: "a", text: "Composting only" },
      { id: "b", text: "Making seed balls" },
      { id: "c", text: "Selling tomatoes" },
      { id: "d", text: "Indoor cricket" }
    ],
    answerId: "b",
    explanation: "Ananya suggested a stall that shows how to make seed balls.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q18",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nHow did Mr Das respond to both ideas?",
    options: [
      { id: "a", text: "He rejected both" },
      { id: "b", text: "He said both could share one corner" },
      { id: "c", text: "He chose only Rohan’s idea" },
      { id: "d", text: "He cancelled the fair" }
    ],
    answerId: "b",
    explanation: "He said both ideas could share one corner of the hall.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q19",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nWhy does the cricket ground become hard to use in the monsoon?",
    options: [
      { id: "a", text: "It turns muddy" },
      { id: "b", text: "It becomes too dry" },
      { id: "c", text: "It is locked forever" },
      { id: "d", text: "It has no coach" }
    ],
    answerId: "a",
    explanation: "The ground turns muddy during the monsoon.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q20",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nWhere does the coach move practice on rainy evenings?",
    options: [
      { id: "a", text: "To the beach" },
      { id: "b", text: "To the indoor hall" },
      { id: "c", text: "To the library" },
      { id: "d", text: "To Uncle Raju’s stall" }
    ],
    answerId: "b",
    explanation: "Practice moves to the indoor hall.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q21",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nWhat happened last Tuesday?",
    options: [
      { id: "a", text: "They played until dusk outdoors" },
      { id: "b", text: "Lightning flashed and practice was cut short" },
      { id: "c", text: "Priya bought tomatoes" },
      { id: "d", text: "Mr Das cancelled science club" }
    ],
    answerId: "b",
    explanation: "Lightning flashed and practice was cut short.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q22",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nHow did Priya use the extra time?",
    options: [
      { id: "a", text: "She slept" },
      { id: "b", text: "She mended her bat grip" },
      { id: "c", text: "She wrote a folk tale" },
      { id: "d", text: "She sorted plastic" }
    ],
    answerId: "b",
    explanation: "She used the time to mend her bat grip.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q23",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nWhat lesson did Priya share with her friend?",
    options: [
      { id: "a", text: "Speed matters most" },
      { id: "b", text: "Patience is part of becoming a better player" },
      { id: "c", text: "Never practise indoors" },
      { id: "d", text: "Mud is good for batting" }
    ],
    answerId: "b",
    explanation: "She said patience is part of becoming a better player.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-a-q24",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nWhat did the team do on Wednesday?",
    options: [
      { id: "a", text: "Stayed home" },
      { id: "b", text: "Practised fielding until dusk" },
      { id: "c", text: "Visited the library" },
      { id: "d", text: "Made seed balls" }
    ],
    answerId: "b",
    explanation: "With the sun back, they practised fielding until dusk.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-eng-comp-b-q01",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nMeera is Kabir’s —",
    options: [
      { id: "a", text: "librarian" },
      { id: "b", text: "sister" },
      { id: "c", text: "coach" },
      { id: "d", text: "vendor" }
    ],
    answerId: "b",
    explanation: "The opening calls Meera his sister.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q02",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nThe new shelf held books by —",
    options: [
      { id: "a", text: "only foreign authors" },
      { id: "b", text: "Indian authors" },
      { id: "c", text: "Mrs Rao alone" },
      { id: "d", text: "scientists only" }
    ],
    answerId: "b",
    explanation: "Mrs Rao showed a shelf of books by Indian authors.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q03",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nWhich word best describes Mrs Rao in this passage?",
    options: [
      { id: "a", text: "Unhelpful" },
      { id: "b", text: "Helpful" },
      { id: "c", text: "Angry" },
      { id: "d", text: "Absent" }
    ],
    answerId: "b",
    explanation: "She showed them a new shelf — a helpful action.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q04",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nKabir’s article topic is closest to —",
    options: [
      { id: "a", text: "coastal protection" },
      { id: "b", text: "indoor cricket" },
      { id: "c", text: "market prices" },
      { id: "d", text: "folk dances" }
    ],
    answerId: "a",
    explanation: "Mangroves protecting the coast is about coastal protection.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q05",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nThe main purpose of the visit was —",
    options: [
      { id: "a", text: "to buy tomatoes" },
      { id: "b", text: "to borrow or explore books" },
      { id: "c", text: "to plant mangroves" },
      { id: "d", text: "to mend a bat" }
    ],
    answerId: "b",
    explanation: "They visit the library and borrow/find reading material.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q06",
    prompt: "Passage P1: Every Sunday, Kabir and his sister Meera visit the neighbourhood library. Kabir chooses science magazines, while Meera looks for folk tales. Last week, the librarian, Mrs Rao, showed them a new shelf of books written by Indian authors. Meera borrowed a story about a girl who plants trees along a dry river. Kabir found an article on how mangroves protect the coast during storms. Before leaving, they promised to return the books in ten days.\n\nWhich detail is NOT in the passage?",
    options: [
      { id: "a", text: "They visit every Sunday" },
      { id: "b", text: "Meera likes folk tales" },
      { id: "c", text: "Kabir bought a cricket bat" },
      { id: "d", text: "They will return books in ten days" }
    ],
    answerId: "c",
    explanation: "No cricket bat is mentioned for Kabir.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q07",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nAmma buys from the same stall —",
    options: [
      { id: "a", text: "each week" },
      { id: "b", text: "once a year" },
      { id: "c", text: "never" },
      { id: "d", text: "only in the monsoon" }
    ],
    answerId: "a",
    explanation: "She buys from the same stall each week.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q08",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nWhat did Amma buy besides coriander?",
    options: [
      { id: "a", text: "Two kilos of tomatoes" },
      { id: "b", text: "Science magazines" },
      { id: "c", text: "Seed balls" },
      { id: "d", text: "A cricket bat" }
    ],
    answerId: "a",
    explanation: "She asked for two kilos of tomatoes and a bunch of coriander.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q09",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nUncle Raju’s smile suggests he is —",
    options: [
      { id: "a", text: "rude" },
      { id: "b", text: "friendly" },
      { id: "c", text: "afraid" },
      { id: "d", text: "silent always" }
    ],
    answerId: "b",
    explanation: "Smiling while talking about fresh coriander suggests friendliness.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q10",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nThe money amount uses which currency symbol in the passage?",
    options: [
      { id: "a", text: "$" },
      { id: "b", text: "₹" },
      { id: "c", text: "€" },
      { id: "d", text: "£" }
    ],
    answerId: "b",
    explanation: "Amma paid ₹90.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q11",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nWho walked home with Amma?",
    options: [
      { id: "a", text: "Uncle Raju" },
      { id: "b", text: "Her son" },
      { id: "c", text: "Mrs Rao" },
      { id: "d", text: "Mr Das" }
    ],
    answerId: "b",
    explanation: "She told her son on the walk home.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q12",
    prompt: "Passage P2: On market day, Amma buys vegetables from the same stall each week. The vendor, Uncle Raju, always weighs the tomatoes carefully and never rushes. Yesterday Amma asked for two kilos of tomatoes and a bunch of coriander. Uncle Raju smiled and said the coriander was fresh from his brother’s farm. Amma paid ₹90 and thanked him. On the walk home, she told her son that honest traders make shopping a pleasure.\n\nThe passage’s closing message praises —",
    options: [
      { id: "a", text: "rushing" },
      { id: "b", text: "honesty in trade" },
      { id: "c", text: "ignoring vendors" },
      { id: "d", text: "high prices" }
    ],
    answerId: "b",
    explanation: "Honest traders make shopping a pleasure.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q13",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nWho explained that recycling paper saves trees?",
    options: [
      { id: "a", text: "Rohan" },
      { id: "b", text: "Ananya" },
      { id: "c", text: "Mr Das" },
      { id: "d", text: "Uncle Raju" }
    ],
    answerId: "b",
    explanation: "Ananya explained that point.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q14",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nRohan’s fair idea was about —",
    options: [
      { id: "a", text: "seed balls" },
      { id: "b", text: "composting" },
      { id: "c", text: "folk tales" },
      { id: "d", text: "mangroves" }
    ],
    answerId: "b",
    explanation: "Rohan wanted a demo on composting.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q15",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nMr Das is the students’ —",
    options: [
      { id: "a", text: "vendor" },
      { id: "b", text: "coach" },
      { id: "c", text: "teacher" },
      { id: "d", text: "librarian" }
    ],
    answerId: "c",
    explanation: "The passage calls him their teacher.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q16",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nHow did the group react when Mr Das approved sharing a corner?",
    options: [
      { id: "a", text: "They cried" },
      { id: "b", text: "Everyone clapped" },
      { id: "c", text: "They left silently" },
      { id: "d", text: "They cancelled recycling" }
    ],
    answerId: "b",
    explanation: "Everyone clapped.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q17",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nThe annual fair ideas are mainly about —",
    options: [
      { id: "a", text: "sports scores" },
      { id: "b", text: "caring for the environment" },
      { id: "c", text: "buying tomatoes" },
      { id: "d", text: "library fines" }
    ],
    answerId: "b",
    explanation: "Seed balls and composting are environment-care ideas.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q18",
    prompt: "Passage P3: The school science club met after lunch. Ananya explained that recycling paper saves trees, and Rohan added that sorting plastic from kitchen waste keeps drains cleaner. Their teacher, Mr Das, asked each member to bring one idea for the annual fair. Ananya suggested a stall that shows how to make seed balls. Rohan wanted a demo on composting. Everyone clapped when Mr Das said both ideas could share one corner of the hall.\n\nWhich statement is true?",
    options: [
      { id: "a", text: "Only Ananya may present" },
      { id: "b", text: "Both ideas can share one corner" },
      { id: "c", text: "Mr Das forbade recycling talk" },
      { id: "d", text: "The club met before breakfast" }
    ],
    answerId: "b",
    explanation: "Mr Das said both ideas could share one corner.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q19",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nPriya’s coach changes the venue when —",
    options: [
      { id: "a", text: "it is sunny" },
      { id: "b", text: "evenings are rainy" },
      { id: "c", text: "the library opens" },
      { id: "d", text: "tomatoes are cheap" }
    ],
    answerId: "b",
    explanation: "On rainy evenings practice moves indoors.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q20",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nWhy was Tuesday’s practice cut short?",
    options: [
      { id: "a", text: "Priya was late" },
      { id: "b", text: "Lightning flashed" },
      { id: "c", text: "The bat was perfect" },
      { id: "d", text: "The hall was closed forever" }
    ],
    answerId: "b",
    explanation: "Lightning led to cutting practice short.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q21",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\n“Patience is part of becoming a better player” is —",
    options: [
      { id: "a", text: "Priya’s belief" },
      { id: "b", text: "Uncle Raju’s price list" },
      { id: "c", text: "Mrs Rao’s library rule" },
      { id: "d", text: "A mangrove fact" }
    ],
    answerId: "a",
    explanation: "Priya told her friend that idea.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q22",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nOn Wednesday the team practised —",
    options: [
      { id: "a", text: "batting only for one minute" },
      { id: "b", text: "fielding until dusk" },
      { id: "c", text: "sewing" },
      { id: "d", text: "recycling paper" }
    ],
    answerId: "b",
    explanation: "They practised fielding until dusk.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q23",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nThe passage suggests Priya is —",
    options: [
      { id: "a", text: "giving up cricket" },
      { id: "b", text: "using setbacks to improve" },
      { id: "c", text: "afraid of the sun" },
      { id: "d", text: "a librarian" }
    ],
    answerId: "b",
    explanation: "She mends her grip and values patience — improving through setbacks.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g6-eng-comp-b-q24",
    prompt: "Passage P4: During the monsoon, the cricket ground near Priya’s house turns muddy. Priya’s coach moves practice to the indoor hall on rainy evenings. Last Tuesday, lightning flashed and practice was cut short. Priya used the extra time to mend her bat grip. She told her friend that patience is part of becoming a better player. On Wednesday the sun returned, and the team practised fielding until dusk.\n\nWhich title best fits Passage P4?",
    options: [
      { id: "a", text: "Market Day Bargains" },
      { id: "b", text: "Rain, Practice and Patience" },
      { id: "c", text: "Mangroves at War" },
      { id: "d", text: "Library Sundays" }
    ],
    answerId: "b",
    explanation: "The focus is rainy practice, patience and returning to the ground.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🔎",
    title: "Reading Comprehension",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Answers hide in the passage — hunt the evidence.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Question first", reveal: "Know what you are hunting", emoji: "❓" },
      { label: "Scan for clues", reveal: "Match key words in the text", emoji: "🔍" },
      { label: "Evidence only", reveal: "Do not invent extras", emoji: "📜" },
      { label: "Infer carefully", reveal: "Read between the lines when asked", emoji: "💡" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "“Asha watered the tulsi because the soil was dry.” Why did she water it?",
    options: [
        { id: "a", text: "The soil was dry" },
        { id: "b", text: "It was raining" },
        { id: "c", text: "She was bored" },
        { id: "d", text: "The plant was fake" }
    ],
    answerId: "a",
    why: "The passage says because the soil was dry.",
    visual: "sentence",
    speak: "“Asha watered the tulsi because the soil was dry.” Why did she water it?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6EnglishComprehension: ChapterDef = {
  id: "comprehension",
  title: "Reading Comprehension",
  emoji: "🔎",
  blurb: "Find evidence in the passage",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "comprehension",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "comprehension",
      questions: SET_B,
    },
  ],
  paperTopics: ["comprehension", "vocabulary"],
};

export const g6EnglishComprehensionQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
