import type { ChapterDef, PrepQuestion } from "../types";

/** Write It Right — authored Grade 5 English content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-eng-ch05-a-q01",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. What is the notice mainly about?",
    options: [
      { id: "a", text: "Library Week celebration details" },
      { id: "b", text: "A football match on the ground" },
      { id: "c", text: "A change in school fees" },
      { id: "d", text: "A lost geometry box" }
    ],
    answerId: "a",
    explanation: "The heading and body announce Library Week events and how to join.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q02",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. Who wrote the notice?",
    options: [
      { id: "a", text: "The class monitor" },
      { id: "b", text: "Meera Iyer, the Librarian" },
      { id: "c", text: "A Class 3 student" },
      { id: "d", text: "Dev from Lotus Lane" }
    ],
    answerId: "b",
    explanation: "Notices end with the writer's name and role \u2014 here, Meera Iyer, Librarian.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q03",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. By which date must students give their names?",
    options: [
      { id: "a", text: "3 October" },
      { id: "b", text: "10 October" },
      { id: "c", text: "7 October" },
      { id: "d", text: "14 October" }
    ],
    answerId: "c",
    explanation: "The notice says give names to the class monitor by 7 October.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q04",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. What should students bring for the book exchange?",
    options: [
      { id: "a", text: "A cricket bat" },
      { id: "b", text: "Cash for the librarian" },
      { id: "c", text: "Nothing at all" },
      { id: "d", text: "One old storybook in good condition" }
    ],
    answerId: "d",
    explanation: "The notice asks for one old storybook in good condition if they wish to exchange.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q05",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. Which detail is NOT given in the notice?",
    options: [
      { id: "a", text: "The price of each bookmark" },
      { id: "b", text: "The dates of Library Week" },
      { id: "c", text: "Where events will be held" },
      { id: "d", text: "Who should give names to the monitor" }
    ],
    answerId: "a",
    explanation: "Dates, place and how to join are listed; bookmark prices are not mentioned.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q06",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. Where does Dev live?",
    options: [
      { id: "a", text: "The school library" },
      { id: "b", text: "42 Lotus Lane, Pune" },
      { id: "c", text: "Sunrise Public School hostel only" },
      { id: "d", text: "Anvi's house" }
    ],
    answerId: "b",
    explanation: "An informal letter begins with the sender's address \u2014 42 Lotus Lane, Pune.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q07",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. Who is the letter for?",
    options: [
      { id: "a", text: "Ms. D'Souza" },
      { id: "b", text: "Mrs. Rao" },
      { id: "c", text: "Anvi" },
      { id: "d", text: "Meera Iyer" }
    ],
    answerId: "c",
    explanation: "The salutation is \"Dear Anvi,\" so Anvi is the reader.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q08",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. What was Dev's favourite part of the museum visit?",
    options: [
      { id: "a", text: "The canteen menu" },
      { id: "b", text: "Fancy Dress Day" },
      { id: "c", text: "Football practice" },
      { id: "d", text: "The planetarium" }
    ],
    answerId: "d",
    explanation: "Dev writes that his favourite part was the planetarium.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q09",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. Which closing is correct for this friendly letter?",
    options: [
      { id: "a", text: "Your friend, Dev" },
      { id: "b", text: "Yours faithfully, Dev" },
      { id: "c", text: "Regards only with no name" },
      { id: "d", text: "NOTICE \u2014 Librarian" }
    ],
    answerId: "a",
    explanation: "Informal letters to friends often close with \"Your friend,\" plus the name.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q10",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. Why does Dev ask about Fancy Dress Day?",
    options: [
      { id: "a", text: "To cancel Library Week" },
      { id: "b", text: "To keep the friendly chat going and show interest in Anvi's news" },
      { id: "c", text: "To scold Anvi" },
      { id: "d", text: "To apply for a transfer certificate" }
    ],
    answerId: "b",
    explanation: "Friendly letters share news and ask questions back \u2014 that keeps the conversation alive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q11",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. Who wrote the message?",
    options: [
      { id: "a", text: "Amma" },
      { id: "b", text: "Ms. D'Souza" },
      { id: "c", text: "Kabir" },
      { id: "d", text: "Zara" }
    ],
    answerId: "c",
    explanation: "Messages end with the writer's name \u2014 Kabir.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q12",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. What changed about the PTM?",
    options: [
      { id: "a", text: "It was cancelled forever" },
      { id: "b", text: "It moved to another city" },
      { id: "c", text: "Only Class 8 may attend" },
      { id: "d", text: "The time moved from 9:00 a.m. to 11:30 a.m." }
    ],
    answerId: "d",
    explanation: "The message states the PTM shifted from 9:00 a.m. to 11:30 a.m.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q13",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. What should Amma bring?",
    options: [
      { id: "a", text: "Kabir's Maths notebook" },
      { id: "b", text: "Two bags of dry leaves" },
      { id: "c", text: "A planetarium ticket" },
      { id: "d", text: "An old storybook for exchange" }
    ],
    answerId: "a",
    explanation: "Ms. D'Souza asked Amma to bring Kabir's Maths notebook.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q14",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. Why are messages usually short?",
    options: [
      { id: "a", text: "Writers are not allowed to use full stops" },
      { id: "b", text: "They only need key facts for someone who is away" },
      { id: "c", text: "Messages must never include a date" },
      { id: "d", text: "Messages replace all school notices" }
    ],
    answerId: "b",
    explanation: "A message passes on important facts quickly when the reader is not free to talk.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q15",
    prompt: "Sunday, 8 October\nDear Diary,\nToday felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.\nI was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!\n\u2014 Zara\n\nRead Diary P3. On which day did Zara write?",
    options: [
      { id: "a", text: "Monday, 3 October" },
      { id: "b", text: "Friday, 14 October" },
      { id: "c", text: "Sunday, 8 October" },
      { id: "d", text: "Tuesday, 7 October" }
    ],
    answerId: "c",
    explanation: "Diary entries often start with the day and date \u2014 Sunday, 8 October.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q16",
    prompt: "Sunday, 8 October\nDear Diary,\nToday felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.\nI was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!\n\u2014 Zara\n\nRead Diary P3. What did Zara do in the afternoon?",
    options: [
      { id: "a", text: "Visited the planetarium alone" },
      { id: "b", text: "Wrote a notice for Library Week" },
      { id: "c", text: "Called Ms. D'Souza about PTM" },
      { id: "d", text: "Joined a building clean-up drive" }
    ],
    answerId: "d",
    explanation: "She writes that the building held a clean-up drive in the afternoon.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q17",
    prompt: "Sunday, 8 October\nDear Diary,\nToday felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.\nI was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!\n\u2014 Zara\n\nRead Diary P3. How did Zara feel by evening?",
    options: [
      { id: "a", text: "Tired yet proud" },
      { id: "b", text: "Angry at Mrs. Rao" },
      { id: "c", text: "Bored of lemonade" },
      { id: "d", text: "Afraid of plants" }
    ],
    answerId: "a",
    explanation: "She says she was tired by evening, yet proud.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q18",
    prompt: "Sunday, 8 October\nDear Diary,\nToday felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.\nI was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!\n\u2014 Zara\n\nRead Diary P3. A diary is mainly written for \u2014",
    options: [
      { id: "a", text: "the whole school notice board" },
      { id: "b", text: "the writer's own thoughts and day" },
      { id: "c", text: "a formal complaint to the Principal only" },
      { id: "d", text: "a printed newspaper" }
    ],
    answerId: "b",
    explanation: "A diary is personal \u2014 Zara writes about her day and feelings for herself.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q19",
    prompt: "Which set of parts belongs in a school notice?",
    options: [
      { id: "a", text: "Only emojis and no date" },
      { id: "b", text: "Dear Diary and Good night only" },
      { id: "c", text: "Heading, date, body with facts, name and designation" },
      { id: "d", text: "A rhyme with no purpose" }
    ],
    answerId: "c",
    explanation: "Notices need a clear heading, date, factual body, and the writer's name with role.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q20",
    prompt: "In an informal letter, the writer's address usually appears \u2014",
    options: [
      { id: "a", text: "only inside the Principal's stamp" },
      { id: "b", text: "after \"Yours faithfully\" in formal style always" },
      { id: "c", text: "nowhere at all" },
      { id: "d", text: "at the top before the date" }
    ],
    answerId: "d",
    explanation: "Friendly letters start with the sender's address, then the date, then \"Dear\u2026\".",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q21",
    prompt: "You want every Class 5 student to know about a charity collection. Best format?",
    options: [
      { id: "a", text: "A school notice" },
      { id: "b", text: "A private diary entry only" },
      { id: "c", text: "A secret message to one friend" },
      { id: "d", text: "A letter sealed for the Principal alone with no notice" }
    ],
    answerId: "a",
    explanation: "A notice informs many readers at once about a school event or duty.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q22",
    prompt: "Amma is out, and the music teacher called to change tomorrow's timing. Best format to leave at home?",
    options: [
      { id: "a", text: "A long formal essay" },
      { id: "b", text: "A short message with time, reason and your name" },
      { id: "c", text: "A Library Week notice for the board" },
      { id: "d", text: "A poem about stars" }
    ],
    answerId: "b",
    explanation: "Messages carry key facts for one reader who missed the call.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q23",
    prompt: "Which line suits an informal letter to a cousin?",
    options: [
      { id: "a", text: "\"I wish to bring to your kind notice the following grievances.\"" },
      { id: "b", text: "\"This is to inform all students\u2026\"" },
      { id: "c", text: "\"Guess what? We built a paper bridge at the museum!\"" },
      { id: "d", text: "\"Yours faithfully,\" without any news" }
    ],
    answerId: "c",
    explanation: "Informal letters sound friendly and share personal news.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-a-q24",
    prompt: "Which closing fits a formal letter to the Principal when you do not know them personally?",
    options: [
      { id: "a", text: "Your buddy" },
      { id: "b", text: "See ya" },
      { id: "c", text: "Dear Diary" },
      { id: "d", text: "Yours faithfully" }
    ],
    answerId: "d",
    explanation: "When the reader is not a personal friend, \"Yours faithfully\" is the formal closing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-eng-ch05-b-q01",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. Where will Library Week be held?",
    options: [
      { id: "a", text: "In the school library" },
      { id: "b", text: "On the football ground only" },
      { id: "c", text: "At 42 Lotus Lane" },
      { id: "d", text: "In the city museum" }
    ],
    answerId: "a",
    explanation: "The notice says events will be held in the school library.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q02",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. Which classes are invited?",
    options: [
      { id: "a", text: "Only Class 8" },
      { id: "b", text: "Classes 4 and 5" },
      { id: "c", text: "Teachers alone" },
      { id: "d", text: "Nursery only" }
    ],
    answerId: "b",
    explanation: "It informs students of Classes 4 and 5.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q03",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. Which activity is part of Library Week?",
    options: [
      { id: "a", text: "Night camping on the terrace" },
      { id: "b", text: "PTM at 11:30 a.m." },
      { id: "c", text: "Bookmark-making corner" },
      { id: "d", text: "Transfer certificate collection" }
    ],
    answerId: "c",
    explanation: "Story hours, a bookmark-making corner and a book-exchange table are listed.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q04",
    prompt: "**NOTICE**\nSunrise Public School\nDate: 3 October\n**Library Week Celebration**\nThis is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.\nInterested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.\n\u2014 Meera Iyer\nLibrarian\n\nRead Notice N1. Why is the date at the top important?",
    options: [
      { id: "a", text: "It replaces the writer's name" },
      { id: "b", text: "It is only decoration" },
      { id: "c", text: "It tells the price of books" },
      { id: "d", text: "It shows when the notice was issued" }
    ],
    answerId: "d",
    explanation: "The issue date helps readers know how recent the information is.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q05",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. What date did Dev write the letter?",
    options: [
      { id: "a", text: "5 October" },
      { id: "b", text: "3 October" },
      { id: "c", text: "7 October" },
      { id: "d", text: "8 October" }
    ],
    answerId: "a",
    explanation: "The date under the address is 5 October.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q06",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. Which question does Dev ask Anvi?",
    options: [
      { id: "a", text: "About Library Week bookmark prices" },
      { id: "b", text: "About her school picnic and Fancy Dress costume" },
      { id: "c", text: "About Kabir's football timing" },
      { id: "d", text: "About Zara's lemonade recipe only" }
    ],
    answerId: "b",
    explanation: "He asks about her picnic and whether she has chosen a Fancy Dress costume.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q07",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. \"Give my regards to Uncle and Aunty\" is an example of \u2014",
    options: [
      { id: "a", text: "a formal notice heading" },
      { id: "b", text: "a diary date line" },
      { id: "c", text: "a polite family greeting near the end" },
      { id: "d", text: "a message time stamp" }
    ],
    answerId: "c",
    explanation: "Friendly letters often send regards to family before the closing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q08",
    prompt: "42 Lotus Lane\nPune\n5 October\nDear Anvi,\nI hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium \u2014 the stars felt so close! We also built a tiny paper bridge in the workshop.\nPlease write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?\nGive my regards to Uncle and Aunty.\nYour friend,\nDev\n\nRead Letter P1. Which feature shows this is informal, not a school notice?",
    options: [
      { id: "a", text: "It has a librarian's designation only" },
      { id: "b", text: "It orders all Classes 4 and 5 to assemble" },
      { id: "c", text: "It is pinned with no personal greeting" },
      { id: "d", text: "It uses \"Dear Anvi\" and personal news" }
    ],
    answerId: "d",
    explanation: "A personal salutation and shared news mark an informal letter.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q09",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. Who is the message for?",
    options: [
      { id: "a", text: "Amma" },
      { id: "b", text: "Ms. D'Souza" },
      { id: "c", text: "Dev" },
      { id: "d", text: "Ananya" }
    ],
    answerId: "a",
    explanation: "It begins \"Dear Amma,\" so Amma is the reader.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q10",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. When was the message written?",
    options: [
      { id: "a", text: "8 October, morning" },
      { id: "b", text: "6 October, 5:40 p.m." },
      { id: "c", text: "3 October, no time" },
      { id: "d", text: "14 October, midnight" }
    ],
    answerId: "b",
    explanation: "Messages often show date and time at the top \u2014 6 October, 5:40 p.m.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q11",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. Where has Kabir gone?",
    options: [
      { id: "a", text: "To the planetarium" },
      { id: "b", text: "To Library Week" },
      { id: "c", text: "To football practice" },
      { id: "d", text: "To Fancy Dress rehearsal" }
    ],
    answerId: "c",
    explanation: "He writes he has gone to football practice and will be home by 7:00 p.m.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q12",
    prompt: "**MESSAGE**\n6 October, 5:40 p.m.\nDear Amma,\nMs. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.\nKabir\n\nRead Message P2. Which fact would be weakest to leave out of this message?",
    options: [
      { id: "a", text: "The new PTM time" },
      { id: "b", text: "That Amma should bring the Maths notebook" },
      { id: "c", text: "When Kabir will be home" },
      { id: "d", text: "Kabir's favourite colour" }
    ],
    answerId: "d",
    explanation: "Favourite colour does not help Amma act; time, notebook and return time do.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q13",
    prompt: "Sunday, 8 October\nDear Diary,\nToday felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.\nI was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!\n\u2014 Zara\n\nRead Diary P3. Who brought lemonade?",
    options: [
      { id: "a", text: "Mrs. Rao" },
      { id: "b", text: "Appa" },
      { id: "c", text: "Meera Iyer" },
      { id: "d", text: "Ms. D'Souza" }
    ],
    answerId: "a",
    explanation: "Zara writes that Mrs. Rao brought lemonade for everyone.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q14",
    prompt: "Sunday, 8 October\nDear Diary,\nToday felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.\nI was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!\n\u2014 Zara\n\nRead Diary P3. What does Zara plan for tomorrow?",
    options: [
      { id: "a", text: "Issue a school notice" },
      { id: "b", text: "Finish her English paragraph before cricket" },
      { id: "c", text: "Collect transfer certificates" },
      { id: "d", text: "Cancel the clean-up drive" }
    ],
    answerId: "b",
    explanation: "She plans to finish her English paragraph before cricket.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q15",
    prompt: "Sunday, 8 October\nDear Diary,\nToday felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.\nI was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!\n\u2014 Zara\n\nRead Diary P3. Why might someone write \"Dear Diary\"?",
    options: [
      { id: "a", text: "To order Classes 4 and 5 to assemble" },
      { id: "b", text: "To replace a librarian's signature" },
      { id: "c", text: "To speak to their own private page" },
      { id: "d", text: "To print a public notice" }
    ],
    answerId: "c",
    explanation: "\"Dear Diary\" addresses the journal itself \u2014 a personal writing habit.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q16",
    prompt: "A complete message should usually include \u2014",
    options: [
      { id: "a", text: "only a doodle" },
      { id: "b", text: "Yours faithfully and a school stamp always" },
      { id: "c", text: "a full autobiography" },
      { id: "d", text: "date/time, greeting, key facts, writer's name" }
    ],
    answerId: "d",
    explanation: "Those four pieces let the reader know when, what and who.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q17",
    prompt: "Which order is correct for an informal letter?",
    options: [
      { id: "a", text: "Address \u2192 date \u2192 Dear\u2026 \u2192 body \u2192 closing \u2192 name" },
      { id: "b", text: "Name \u2192 NOTICE heading \u2192 designation only" },
      { id: "c", text: "Dear Diary \u2192 time stamp \u2192 librarian stamp" },
      { id: "d", text: "Body with no greeting or name" }
    ],
    answerId: "a",
    explanation: "That is the usual friendly-letter pattern.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q18",
    prompt: "You want to remember how you felt on Sports Day. Best format?",
    options: [
      { id: "a", text: "A gate guard's directions only" },
      { id: "b", text: "A diary entry" },
      { id: "c", text: "A book-exchange notice" },
      { id: "d", text: "A PTM message for Amma" }
    ],
    answerId: "b",
    explanation: "Diaries store personal feelings and daily events.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q19",
    prompt: "You need to write to a friend who lives in another city about your museum trip. Best format?",
    options: [
      { id: "a", text: "A school assembly announcement only" },
      { id: "b", text: "A formal notice with designation" },
      { id: "c", text: "An informal letter" },
      { id: "d", text: "A one-line gate pass" }
    ],
    answerId: "c",
    explanation: "Sharing personal news with a friend suits an informal letter.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q20",
    prompt: "The Principal asks you to inform the whole school about Tree Planting Day. Best format?",
    options: [
      { id: "a", text: "A secret diary locked at home" },
      { id: "b", text: "A private message to one cousin" },
      { id: "c", text: "A letter only to yourself" },
      { id: "d", text: "A notice on the board" }
    ],
    answerId: "d",
    explanation: "Notices broadcast facts to many readers in school.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q21",
    prompt: "Which opening suits a formal letter to the Principal?",
    options: [
      { id: "a", text: "\"Respected Sir/Madam,\"" },
      { id: "b", text: "\"Hey!\"" },
      { id: "c", text: "\"Dear Diary,\"" },
      { id: "d", text: "\"Yo, Principal!\"" }
    ],
    answerId: "a",
    explanation: "Formal letters use a respectful salutation such as Respected Sir/Madam.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q22",
    prompt: "Which sentence belongs in a notice, not in a diary?",
    options: [
      { id: "a", text: "\"I felt proud and a little tired.\"" },
      { id: "b", text: "\"All Class 5 students must assemble in the hall at 10 a.m.\"" },
      { id: "c", text: "\"Give my regards to Uncle.\"" },
      { id: "d", text: "\"Dear Diary, today was long.\"" }
    ],
    answerId: "b",
    explanation: "Notices give clear instructions to groups; diaries share private feelings.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q23",
    prompt: "A student writes to the Principal: \"Fix the tap now!!!\" What is wrong?",
    options: [
      { id: "a", text: "Nothing \u2014 it is perfect formal style" },
      { id: "b", text: "It should be a diary entry instead of any letter" },
      { id: "c", text: "The tone is too rude and bossy for a formal letter" },
      { id: "d", text: "Formal letters may never mention taps" }
    ],
    answerId: "c",
    explanation: "Formal letters stay polite and clear; commands with extra exclamation marks sound rude.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch05-b-q24",
    prompt: "Where does the writer's designation usually appear in a notice?",
    options: [
      { id: "a", text: "Only inside the diary greeting" },
      { id: "b", text: "Before the school's name as \"Dear\"" },
      { id: "c", text: "Nowhere \u2014 notices never show roles" },
      { id: "d", text: "With the name at the end" }
    ],
    answerId: "d",
    explanation: "After the body, notices show the name and role (for example, Librarian).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcdd",
    title: "Hello, young writer!",
    body: ["Each format has a job: notice, letter, message or diary.", "Match the shape to the reader and the purpose.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Hello, young writer! Today we learn the shapes that writing can take.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Format toolbox",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: notice, letter, message and diary.",
    cards: [
      { label: "Notice", reveal: "Heading, date, facts, name & role \u2014 many readers", emoji: "\ud83d\udccb" },
      { label: "Informal letter", reveal: "Address, date, Dear\u2026, news, warm closing", emoji: "\u2709\ufe0f" },
      { label: "Message", reveal: "Date/time, key facts, your name \u2014 short", emoji: "\ud83d\udcac" },
      { label: "Diary", reveal: "Day, what happened, how you felt", emoji: "\ud83d\udcd4" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Pick the right tool",
    visual: "sentence",
    speak: "Amma missed a call about a new PTM time \u2014 leave a short message. Tree Planting Day for the whole school \u2014 put up a notice.",
    steps: ["Missed phone call at home \u2192 short message", "Whole school must know \u2192 notice", "News for a friend in another city \u2192 informal letter", "Your feelings on Sports Day \u2192 diary"],
    punchline: "Ask: who will read this, and why?",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Best format to tell all Class 5 about a charity collection?",
    options: [
      { id: "a", text: "Private diary only" },
      { id: "b", text: "School notice" },
      { id: "c", text: "Secret note to one friend" },
      { id: "d", text: "Letter only to yourself" }
    ],
    answerId: "b",
    why: "A notice informs many readers at once.",
    visual: "sentence",
    speak: "Best format to tell all Class 5 about a charity collection?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Format pro!",
    bullets: ["Notice = many readers", "Letter = one reader, fuller news", "Message = quick facts; diary = personal", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Format pro! You are ready for the practice sets.",
  },
];

export const g5EnglishWriting: ChapterDef = {
  id: "write-it-right",
  title: "Write It Right",
  emoji: "\ud83d\udcdd",
  blurb: "Notices, letters, messages & diaries",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "writing-formats",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "writing-formats",
      questions: SET_B,
    },
  ],
  paperTopics: ["writing-formats", "expression", "comprehension"],
};

export const g5EnglishWritingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
