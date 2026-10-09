import type { ChapterDef, PrepQuestion } from "../types";

/** Writing That Works - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-eng-ch05-a-q01",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. Who has issued the notice?",
    options: [
      { id: "a", text: "The House Captains" },
      { id: "b", text: "Kabir Sen, Cultural Secretary" },
      { id: "c", text: "The Principal alone, with no name shown" },
      { id: "d", text: "Class 9 monitors only" }
    ],
    answerId: "b",
    explanation: "A notice ends with the issuer's name and designation \u2014 here Kabir Sen, Cultural Secretary.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q02",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. What is the last date to submit names?",
    options: [
      { id: "a", text: "5 November" },
      { id: "b", text: "12 November" },
      { id: "c", text: "18 November" },
      { id: "d", text: "20 November" }
    ],
    answerId: "b",
    explanation: "5 November is the issue date, 18 November is the audition, and 12 November is the deadline for names.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q03",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. Which detail is essential for a student who wants to take part?",
    options: [
      { id: "a", text: "The colour of the Activity Hall curtains" },
      { id: "b", text: "Time and place of the auditions" },
      { id: "c", text: "Kabir Sen's favourite play" },
      { id: "d", text: "The school's founding year" }
    ],
    answerId: "b",
    explanation: "Notices must answer what, when and where so readers can act.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q04",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. Which sentence could be cut without removing an essential instruction?",
    options: [
      { id: "a", text: "\"Auditions\u2026 will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m.\"" },
      { id: "b", text: "\"Interested students must submit their names to their House Captains by 12 November.\"" },
      { id: "c", text: "\"Props, if any, should be simple and safe.\"" },
      { id: "d", text: "None of A\u2013C \u2014 each gives a usable rule or fact for participants" }
    ],
    answerId: "d",
    explanation: "Time/place, deadline and safety rule are all actionable; none is pure decoration.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q05",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. Why is the subject line effective?",
    options: [
      { id: "a", text: "It is vague on purpose" },
      { id: "b", text: "It states the request and the topic briefly" },
      { id: "c", text: "It contains only the word \"Hi\"" },
      { id: "d", text: "It lists every book title" }
    ],
    answerId: "b",
    explanation: "A strong subject names the purpose (extend return date) and the topic (Class 8 project books).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q06",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. Why does Nisha close with \"Yours sincerely\"?",
    options: [
      { id: "a", text: "She addressed a named person, Ms. Iyer" },
      { id: "b", text: "She does not know the librarian at all" },
      { id: "c", text: "\"Yours sincerely\" is used only with \"Dear Sir/Madam\"" },
      { id: "d", text: "Emails never use a closing" }
    ],
    answerId: "a",
    explanation: "A named salutation pairs with \"Yours sincerely\"; \"Dear Sir/Madam\" pairs with \"Yours faithfully.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q07",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. What clear request does Nisha make?",
    options: [
      { id: "a", text: "To ban the Science Fair" },
      { id: "b", text: "A one-week extension for returning project books" },
      { id: "c", text: "To close the library" },
      { id: "d", text: "To change her class section" }
    ],
    answerId: "b",
    explanation: "The opening paragraph states she is requesting a one-week extension.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q08",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. Which best describes the tone?",
    options: [
      { id: "a", text: "Rude and demanding" },
      { id: "b", text: "Polite, specific and purposeful" },
      { id: "c", text: "Joking and slangy" },
      { id: "d", text: "Angry and threatening" }
    ],
    answerId: "b",
    explanation: "She explains the need, offers a return date and thanks the librarian in advance \u2014 polite and clear.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q09",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. Where does the sender's address appear?",
    options: [
      { id: "a", text: "Only after the signature" },
      { id: "b", text: "At the top, before the date" },
      { id: "c", text: "In the subject line" },
      { id: "d", text: "Nowhere" }
    ],
    answerId: "b",
    explanation: "In a formal letter the sender's address comes first, followed by the date.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q10",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. Why is \"Yours faithfully\" the correct closing?",
    options: [
      { id: "a", text: "The reader is addressed as Sir/Madam, not by name" },
      { id: "b", text: "The writer knows the editor personally by first name in the salutation" },
      { id: "c", text: "Faithfully is only for emails" },
      { id: "d", text: "The letter is informal" }
    ],
    answerId: "a",
    explanation: "Unnamed salutations take \"Yours faithfully.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q11",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. What is the writer's main purpose?",
    options: [
      { id: "a", text: "To complain about canteen food" },
      { id: "b", text: "To highlight an unsafe crossing and urge action" },
      { id: "c", text: "To advertise a scooter brand" },
      { id: "d", text: "To resign from school" }
    ],
    answerId: "b",
    explanation: "The subject and body focus on the faded crossing and a request for coverage and safety measures.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q12",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. Which element is correctly placed for a formal letter to an editor?",
    options: [
      { id: "a", text: "Subject line before the salutation" },
      { id: "b", text: "Subject line after \"Yours faithfully\"" },
      { id: "c", text: "No subject line at all" },
      { id: "d", text: "Receiver's address missing on purpose" }
    ],
    answerId: "a",
    explanation: "Formal letters include a subject after the receiver's details and before \"Dear\u2026\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q13",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. What is the heading?",
    options: [
      { id: "a", text: "By Meera Joseph, Class 8" },
      { id: "b", text: "When the Playground Went Quiet" },
      { id: "c", text: "Student Council Minutes" },
      { id: "d", text: "NOTICE" }
    ],
    answerId: "b",
    explanation: "The heading/title is the bold line that names the piece; the byline names the writer.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q14",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. The line \"By Meera Joseph, Class 8\" is called the \u2014",
    options: [
      { id: "a", text: "salutation" },
      { id: "b", text: "byline" },
      { id: "c", text: "complimentary close" },
      { id: "d", text: "agenda" }
    ],
    answerId: "b",
    explanation: "A byline identifies the author of an article.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q15",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. What problem does the writer describe?",
    options: [
      { id: "a", text: "The canteen closed forever" },
      { id: "b", text: "Building work removed the play space students used at break" },
      { id: "c", text: "Cricket was banned nationwide" },
      { id: "d", text: "Corridors were widened too much" }
    ],
    answerId: "b",
    explanation: "Diggers turned the pitch into a construction site, so break-time play was lost.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q16",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. What solution does the Student Council propose?",
    options: [
      { id: "a", text: "Stop all construction" },
      { id: "b", text: "A temporary games zone on the front lawn with soft balls only" },
      { id: "c", text: "Longer exams" },
      { id: "d", text: "Closing the canteen" }
    ],
    answerId: "b",
    explanation: "The article reports a temporary games zone on the front lawn until the block opens.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q17",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. Which sentence best states the writer's viewpoint?",
    options: [
      { id: "a", text: "\"Progress need not silence play.\"" },
      { id: "b", text: "\"In three days the pitch became a trench\u2026\"" },
      { id: "c", text: "\"By Meera Joseph, Class 8\"" },
      { id: "d", text: "\"The diggers came.\"" }
    ],
    answerId: "a",
    explanation: "The closing line crystallises the opinion: building work and play can coexist with small compromises.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q18",
    prompt: "Which format is best for informing all Classes 7\u20139 about audition times on a school board?",
    options: [
      { id: "a", text: "A private diary entry" },
      { id: "b", text: "A notice" },
      { id: "c", text: "A personal text to one friend only" },
      { id: "d", text: "A poem with no dates" }
    ],
    answerId: "b",
    explanation: "Notices are the standard public format for school events and deadlines.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q19",
    prompt: "Which format is best for a short opinion piece in the school magazine?",
    options: [
      { id: "a", text: "Formal letter to an editor of a city paper only" },
      { id: "b", text: "Article" },
      { id: "c", text: "Bank cheque" },
      { id: "d", text: "Math formula sheet" }
    ],
    answerId: "b",
    explanation: "Magazine pieces use article format: heading, byline, engaging body and close.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q20",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. Who is the intended primary reader?",
    options: [
      { id: "a", text: "Aarav's classmates only" },
      { id: "b", text: "The Editor of The City Herald" },
      { id: "c", text: "The canteen staff" },
      { id: "d", text: "A pen friend abroad" }
    ],
    answerId: "b",
    explanation: "The receiver's address and salutation target the newspaper editor.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q21",
    prompt: "A student writes a formal letter that begins \"Hey Editor!\" and ends \"See ya.\" The main problem is \u2014",
    options: [
      { id: "a", text: "wrong register for a formal letter" },
      { id: "b", text: "missing paper size" },
      { id: "c", text: "too many facts" },
      { id: "d", text: "using a subject line" }
    ],
    answerId: "a",
    explanation: "Formal letters need formal greeting and closing; casual chat language mismatches the genre.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q22",
    prompt: "Which subject line is weakest for a permission request?",
    options: [
      { id: "a", text: "\"Request for permission to use the AV room on 12 November\"" },
      { id: "b", text: "\"Hello\"" },
      { id: "c", text: "\"AV room booking request \u2014 Class 8 science presentation\"" },
      { id: "d", text: "\"Permission needed: AV room, 12 Nov, 2\u20133 p.m.\"" }
    ],
    answerId: "b",
    explanation: "\"Hello\" gives no purpose; the others name the request clearly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q23",
    prompt: "In a school notice, the word NOTICE usually appears \u2014",
    options: [
      { id: "a", text: "only in the last sentence" },
      { id: "b", text: "as a clear centred heading near the top" },
      { id: "c", text: "inside the signature only" },
      { id: "d", text: "nowhere" }
    ],
    answerId: "b",
    explanation: "Standard notice layout places NOTICE prominently under the issuing body's name.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-a-q24",
    prompt: "Match the pair that belongs together.",
    options: [
      { id: "a", text: "Dear Sir/Madam \u2192 Yours sincerely" },
      { id: "b", text: "Dear Ms. Iyer \u2192 Yours faithfully" },
      { id: "c", text: "Dear Sir/Madam \u2192 Yours faithfully" },
      { id: "d", text: "Dear Rohan \u2192 Yours obediently as the only correct close for friends" }
    ],
    answerId: "c",
    explanation: "Unnamed formal salutations take \"Yours faithfully\"; named ones take \"Yours sincerely.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-eng-ch05-b-q01",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. Where will the auditions be held?",
    options: [
      { id: "a", text: "The cricket pitch" },
      { id: "b", text: "The Activity Hall" },
      { id: "c", text: "Room 12 only" },
      { id: "d", text: "The city stadium" }
    ],
    answerId: "b",
    explanation: "The notice states the Activity Hall as the venue.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q02",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. How many participants may each House send?",
    options: [
      { id: "a", text: "Two" },
      { id: "b", text: "Five" },
      { id: "c", text: "Up to eight" },
      { id: "d", text: "Unlimited" }
    ],
    answerId: "c",
    explanation: "\"Each House may send up to eight participants.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q03",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. What should interested students bring?",
    options: [
      { id: "a", text: "A short prepared piece (1\u20132 minutes)" },
      { id: "b", text: "Expensive stage lights" },
      { id: "c", text: "Nothing" },
      { id: "d", text: "Only a cricket bat" }
    ],
    answerId: "a",
    explanation: "The notice asks for a short prepared piece of one to two minutes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q04",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1. The phrase \"are hereby informed\" mainly creates \u2014",
    options: [
      { id: "a", text: "a joking tone" },
      { id: "b", text: "an official, formal tone" },
      { id: "c", text: "a poetic rhythm" },
      { id: "d", text: "a threat" }
    ],
    answerId: "b",
    explanation: "\"Hereby\" and passive \"are informed\" are markers of formal notice language.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q05",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. Who is the email written to?",
    options: [
      { id: "a", text: "The sports coach" },
      { id: "b", text: "Ms. Iyer, the librarian" },
      { id: "c", text: "The editor of a newspaper" },
      { id: "d", text: "The whole school on a notice board" }
    ],
    answerId: "b",
    explanation: "The To-field and salutation address Ms. Iyer at the library.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q06",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. By which date does Nisha promise to return the books?",
    options: [
      { id: "a", text: "Last Monday" },
      { id: "b", text: "20 November" },
      { id: "c", text: "22 November" },
      { id: "d", text: "8 November" }
    ],
    answerId: "c",
    explanation: "She says all titles will be returned by 22 November.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q07",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. Which sentence best shows supporting detail for the request?",
    options: [
      { id: "a", text: "\"Yours sincerely,\"" },
      { id: "b", text: "\"Our group is completing a display on water conservation for the Science Fair on 20 November\u2026\"" },
      { id: "c", text: "\"Class 8B\"" },
      { id: "d", text: "\"Dear Ms. Iyer,\"" }
    ],
    answerId: "b",
    explanation: "Explaining the Science Fair purpose gives the librarian a concrete reason to grant the extension.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q08",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. What is the subject of the letter?",
    options: [
      { id: "a", text: "Concern over unsafe crossing near Green Park School" },
      { id: "b", text: "Library book fines" },
      { id: "c", text: "Street play auditions" },
      { id: "d", text: "Canteen menu changes" }
    ],
    answerId: "a",
    explanation: "The subject line states concern over the unsafe crossing near Green Park School.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q09",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. Which action does Aarav request from the newspaper?",
    options: [
      { id: "a", text: "Publish a report and urge authorities to improve safety" },
      { id: "b", text: "Give him a free subscription only" },
      { id: "c", text: "Ban all scooters in India" },
      { id: "d", text: "Hire him as editor immediately" }
    ],
    answerId: "a",
    explanation: "He asks for a report and for pressure on traffic authorities to repaint and marshal the crossing.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q10",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. Which detail makes the complaint more persuasive?",
    options: [
      { id: "a", text: "Vague anger without examples" },
      { id: "b", text: "A specific recent incident of students leaping back from a scooter" },
      { id: "c", text: "Insults aimed at drivers" },
      { id: "d", text: "No date on the letter" }
    ],
    answerId: "b",
    explanation: "A concrete incident gives editors and authorities something factual to investigate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q11",
    prompt: "Which order is correct for a formal letter?",
    options: [
      { id: "a", text: "Closing \u2192 Body \u2192 Subject \u2192 Sender's address" },
      { id: "b", text: "Sender's address \u2192 Date \u2192 Receiver's address \u2192 Subject \u2192 Salutation \u2192 Body \u2192 Closing \u2192 Signature" },
      { id: "c", text: "Body only, with no addresses" },
      { id: "d", text: "Salutation \u2192 Sender's address \u2192 Date at the end only" }
    ],
    answerId: "b",
    explanation: "Standard formal-letter order runs from sender details through subject and body to closing and signature.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q12",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. Where did students used to play cricket?",
    options: [
      { id: "a", text: "Behind the canteen" },
      { id: "b", text: "On the roof" },
      { id: "c", text: "In the library" },
      { id: "d", text: "At the bus stop only" }
    ],
    answerId: "a",
    explanation: "The opening says the ground behind the canteen rang with cricket scores.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q13",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. Why do teachers spend minutes at break asking students to keep the way clear?",
    options: [
      { id: "a", text: "Students now crowd the corridors because the play space is gone" },
      { id: "b", text: "The lawn is too large" },
      { id: "c", text: "The library is closed" },
      { id: "d", text: "Exams were cancelled" }
    ],
    answerId: "a",
    explanation: "With the pitch gone, break crowds move into corridors, blocking the way.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q14",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. Compared with Notice N1, this article is more likely to \u2014",
    options: [
      { id: "a", text: "list only a deadline and venue with no opinion" },
      { id: "b", text: "develop a viewpoint with description and a proposed compromise" },
      { id: "c", text: "use \"Yours faithfully\" as its heading" },
      { id: "d", text: "hide the writer's name forever" }
    ],
    answerId: "b",
    explanation: "Articles develop ideas and voice; notices prioritise brief facts for action.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q15",
    prompt: "**When the Playground Went Quiet**\nBy Meera Joseph, Class 8\nFor years, the scrap of ground behind our canteen rang with cricket scores and laughter. Then the diggers came. In three days the pitch became a trench, and the trench became the skeleton of a new block.\nNobody argues that classrooms matter. What students miss is a place to breathe between bells. During break we now crowd the corridors, and teachers spend precious minutes asking us to keep the way clear.\nThe Student Council has proposed a simple fix: mark a temporary games zone on the front lawn until the block opens, with soft balls only. Small compromises keep school life human while buildings rise. Progress need not silence play.\n\nRead Article P2. \"Progress need not silence play\" is best described as \u2014",
    options: [
      { id: "a", text: "a complimentary close like \"Yours sincerely\"" },
      { id: "b", text: "a concise concluding opinion" },
      { id: "c", text: "a receiver's address" },
      { id: "d", text: "a notice heading" }
    ],
    answerId: "b",
    explanation: "It wraps the article with a clear, memorable stance.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q16",
    prompt: "You need the traffic police to act and also want public attention. Which pair of formats fits best?",
    options: [
      { id: "a", text: "Only a private joke shared in class" },
      { id: "b", text: "A formal letter to the editor (as in P1) plus possible follow-up emails to officials" },
      { id: "c", text: "A notice about street-play auditions" },
      { id: "d", text: "A byline without any body text" }
    ],
    answerId: "b",
    explanation: "Letters to editors raise public concern; emails can address officials directly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q17",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nRead Email E1. The primary purpose is to \u2014",
    options: [
      { id: "a", text: "entertain with a funny story" },
      { id: "b", text: "request a practical favour with reasons and a clear deadline" },
      { id: "c", text: "announce auditions to the whole school" },
      { id: "d", text: "argue a newspaper editorial" }
    ],
    answerId: "b",
    explanation: "The email asks for an extension, explains why, and proposes a return date.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q18",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nWhich opening is most suitable for Formal letter P1's purpose?",
    options: [
      { id: "a", text: "\"I wish to draw your attention to\u2026\"" },
      { id: "b", text: "\"Yo, listen up!\"" },
      { id: "c", text: "\"Guess what happened!!!\"" },
      { id: "d", text: "\"Sup, editor?\"" }
    ],
    answerId: "a",
    explanation: "Formal complaint letters use measured openings such as \"I wish to draw your attention to\u2026\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q19",
    prompt: "A notice is missing the date and the issuer's designation. What should be fixed?",
    options: [
      { id: "a", text: "Add both the date and the name with designation" },
      { id: "b", text: "Add more jokes only" },
      { id: "c", text: "Remove the heading NOTICE" },
      { id: "d", text: "Replace all facts with opinions" }
    ],
    answerId: "a",
    explanation: "Dates and issuer details are core notice elements readers rely on.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q20",
    prompt: "**From:** nisha.k@example.com\n**To:** librarian@peakview.edu.in\n**Date:** 8 November 2026\n**Subject:** Request to extend library return date for Class 8 project books\nDear Ms. Iyer,\nI am writing to request a one-week extension for returning the Class 8 project reference books issued last Monday. Our group is completing a display on water conservation for the Science Fair on 20 November, and we still need the books for captions and diagrams.\nWe will ensure that all titles are returned by 22 November and kept in good condition. I would be grateful if you could approve this extension.\nYours sincerely,\nNisha Kapoor\nClass 8B\n\nWhich closing pair is correct for Email E1's salutation \"Dear Ms. Iyer\"?",
    options: [
      { id: "a", text: "Yours faithfully" },
      { id: "b", text: "Yours sincerely" },
      { id: "c", text: "Love," },
      { id: "d", text: "SEE YA!!!" }
    ],
    answerId: "b",
    explanation: "Named formal readers take \"Yours sincerely.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q21",
    prompt: "Which piece must usually include a byline?",
    options: [
      { id: "a", text: "A standard school notice" },
      { id: "b", text: "A magazine article" },
      { id: "c", text: "A maths times table" },
      { id: "d", text: "A blank attendance sheet" }
    ],
    answerId: "b",
    explanation: "Articles commonly name the writer in a byline; notices use name and designation at the end instead.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q22",
    prompt: "**PEAKVIEW PUBLIC SCHOOL, PUNE**\n**NOTICE**\n5 November 2026\n**AUDITIONS: INTER-HOUSE STREET PLAY**\nStudents of Classes 7 to 9 are hereby informed that auditions for the Inter-House Street Play will be held on 18 November 2026 in the Activity Hall from 3:00 p.m. to 5:00 p.m. Each House may send up to eight participants. Interested students must submit their names to their House Captains by 12 November. Please bring a short prepared piece (1\u20132 minutes). Props, if any, should be simple and safe.\nKabir Sen\nCultural Secretary\n\nRead Notice N1 and Article P2. Which statement is true?",
    options: [
      { id: "a", text: "Both are mainly meant to entertain with fiction" },
      { id: "b", text: "N1 mainly informs and instructs; P2 mainly reflects and persuades" },
      { id: "c", text: "P2 is a formal letter to an editor" },
      { id: "d", text: "N1 needs a byline like a magazine feature" }
    ],
    answerId: "b",
    explanation: "Notices push action with facts; articles develop reflection and opinion.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q23",
    prompt: "14 Lake Road\nIndore \u2013 452001\n10 November 2026\nThe Editor\nThe City Herald\nIndore\nSubject: Concern over unsafe crossing near Green Park School\nDear Sir/Madam,\nI wish to draw your attention to the zebra crossing outside Green Park School, which has faded badly and is ignored by many drivers during morning drop-off. Last week two students had to leap back onto the pavement when a scooter did not slow down.\nI request you to publish a report on this hazard and urge the traffic authorities to repaint the crossing and place a temporary marshal during school hours. Prompt action could prevent a serious accident.\nYours faithfully,\nAarav Malhotra\nResident, Lake Road\n\nRead Formal letter P1. After the body, the correct sequence is \u2014",
    options: [
      { id: "a", text: "Signature, then \"Yours faithfully,\" then subject" },
      { id: "b", text: "\"Yours faithfully,\" then name (and details)" },
      { id: "c", text: "Subject line repeated twice" },
      { id: "d", text: "Receiver's address again" }
    ],
    answerId: "b",
    explanation: "The complimentary close comes before the typed or written name.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch05-b-q24",
    prompt: "A classmate's \"article\" has no heading, no byline, starts with \"Dear Sir,\" and ends \"Yours faithfully.\" It is really closer to \u2014",
    options: [
      { id: "a", text: "a formal letter format than an article format" },
      { id: "b", text: "a perfect magazine article" },
      { id: "c", text: "a notice with NOTICE centred" },
      { id: "d", text: "an email subject line alone" }
    ],
    answerId: "a",
    explanation: "Salutation and \"Yours faithfully\" belong to letters; articles use heading, byline and a journalistic close instead.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcdd",
    title: "Formats readers expect",
    body: ["A notice, letter, article and email each have a pattern.", "Ask: who is my reader, and what should they do?", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Today we practise the formats readers expect: formal letters, notices, articles and emails.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Four formats",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: notice, formal letter, article and email.",
    cards: [
      { label: "Notice", reveal: "Body, NOTICE, date, heading, details, name & designation", emoji: "\ud83d\udccb" },
      { label: "Formal letter", reveal: "Addresses, date, subject, salutation, body, close, signature", emoji: "\u2709\ufe0f" },
      { label: "Article", reveal: "Heading, byline, opening, body, memorable close", emoji: "\ud83d\udcf0" },
      { label: "Email", reveal: "Precise subject, greeting, clear ask, suitable close", emoji: "\ud83d\udcbb" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Subject line upgrade",
    visual: "sentence",
    speak: "Weak subject: Hello. Strong subject: Request for permission to use the AV room on 12 November. Name the purpose before they open the message.",
    steps: ["Weak subject: Hello.", "Reader learns nothing until they open it.", "Strong: Request for permission to use the AV room on 12 November.", "Purpose and details up front"],
    punchline: "Dear Sir/Madam \u2192 Yours faithfully \u00b7 Named reader \u2192 Yours sincerely",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Dear Sir/Madam should be followed by which closing?",
    options: [
      { id: "a", text: "Yours sincerely" },
      { id: "b", text: "Yours faithfully" },
      { id: "c", text: "Love," },
      { id: "d", text: "See ya" }
    ],
    answerId: "b",
    why: "An unnamed formal salutation pairs with Yours faithfully.",
    visual: "sentence",
    speak: "Dear Sir/Madam should be followed by which closing?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Format pro!",
    bullets: ["Match purpose to genre", "Notices = brief facts; articles = viewpoint", "Closings follow the salutation rule", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Format pro! You are ready for the practice sets.",
  },
];

export const g8EnglishWriting: ChapterDef = {
  id: "writing-that-works",
  title: "Writing That Works",
  emoji: "\ud83d\udcdd",
  blurb: "Letters, notices, articles & emails",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "writing",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "writing",
      questions: SET_B,
    },
  ],
  paperTopics: ["comprehension", "vocabulary"],
};

export const g8EnglishWritingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
