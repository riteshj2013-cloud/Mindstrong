import type { ChapterDef, PrepQuestion } from "../types";

/** The Right Word, the Right Format - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-eng-ch03-a-q01",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. Who has issued the notice?",
    options: [
      { id: "a", text: "Meenakshi Pillai, Secretary of the Science Club" },
      { id: "b", text: "The House Captains" },
      { id: "c", text: "The Principal of Riverside Academy" },
      { id: "d", text: "The students of Class 9" }
    ],
    answerId: "a",
    explanation: "In a notice, the issuer's name and designation appear at the bottom. Students reply to House Captains, but the Secretary issues the notice.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q02",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. The phrase \"are hereby informed\" is typical of \u2014",
    options: [
      { id: "a", text: "a casual chat between friends" },
      { id: "b", text: "a personal diary entry" },
      { id: "c", text: "formal notice language" },
      { id: "d", text: "a descriptive poem" }
    ],
    answerId: "c",
    explanation: "\"Hereby\" (\"by means of this\") and passive phrases like \"are informed\" give notices an official, impersonal tone.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q03",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. What is the last date for submitting names?",
    options: [
      { id: "a", text: "14 October" },
      { id: "b", text: "21 October" },
      { id: "c", text: "28 October" },
      { id: "d", text: "30 October" }
    ],
    answerId: "b",
    explanation: "A notice often carries several dates. 14 October is when it was issued, 28 October is the quiz, and 21 October is the deadline.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q04",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. Notices should be brief. Which sentence could be removed without losing any ESSENTIAL information?",
    options: [
      { id: "a", text: "\"Each House may nominate one team of three students.\"" },
      { id: "b", text: "\"Participants are requested to report to the auditorium by 9:30 a.m.\"" },
      { id: "c", text: "\"Interested students should submit their names to their House Captains by 21 October.\"" },
      { id: "d", text: "\"Exciting prizes await the winners.\"" }
    ],
    answerId: "d",
    explanation: "Essential details answer what, when, where, who can join and how. The prizes line adds appeal but no information a participant needs to act.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q05",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. Why is the subject line effective?",
    options: [
      { id: "a", text: "It uses humour to catch the reader's attention." },
      { id: "b", text: "It tells the whole story in detail." },
      { id: "c", text: "It states the purpose and exact location briefly." },
      { id: "d", text: "It addresses the official by name." }
    ],
    answerId: "c",
    explanation: "A good subject line is short and specific. It tells the reader what is wanted (repair) and where (Lake View Road, Sector 12) before they open the email.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q06",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. Why does Arjun close with \"Yours faithfully\" rather than \"Yours sincerely\"?",
    options: [
      { id: "a", text: "He has addressed the reader as \"Sir/Madam,\" not by name." },
      { id: "b", text: "\"Yours faithfully\" is used only in informal letters." },
      { id: "c", text: "He is writing to a close friend." },
      { id: "d", text: "\"Yours sincerely\" is never used in emails." }
    ],
    answerId: "a",
    explanation: "In formal letters, an unnamed salutation (\"Dear Sir/Madam\") pairs with \"Yours faithfully.\" A named salutation (\"Dear Mr. Rao\") pairs with \"Yours sincerely.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q07",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. \"...arrange for the lights to be repaired at the earliest.\" \"At the earliest\" means \u2014",
    options: [
      { id: "a", text: "early in the morning" },
      { id: "b", text: "before anyone else's complaint" },
      { id: "c", text: "first in the queue" },
      { id: "d", text: "as soon as possible" }
    ],
    answerId: "d",
    explanation: "This fixed formal phrase asks for prompt action. It is a polite alternative to the informal \"ASAP.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q08",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. Which best describes the tone of the email?",
    options: [
      { id: "a", text: "Angry and threatening" },
      { id: "b", text: "Polite, firm and factual" },
      { id: "c", text: "Humorous and casual" },
      { id: "d", text: "Desperate and emotional" }
    ],
    answerId: "b",
    explanation: "Arjun gives facts (three weeks, 7 p.m., two accidents) and makes a clear request. He stays courteous throughout, which is ideal for a complaint.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q09",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. \"We have to hand in the report by Friday.\" \"Hand in\" means \u2014",
    options: [
      { id: "a", text: "help someone" },
      { id: "b", text: "submit" },
      { id: "c", text: "hold hands" },
      { id: "d", text: "cancel" }
    ],
    answerId: "b",
    explanation: "To \"hand in\" work is to give it to the person who collects or marks it. Its opposite is \"hand out,\" meaning to distribute.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q10",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. Dev says, \"I'll put together the photos.\" \"Put together\" means \u2014",
    options: [
      { id: "a", text: "argue about" },
      { id: "b", text: "postpone" },
      { id: "c", text: "throw away" },
      { id: "d", text: "assemble and organise" }
    ],
    answerId: "d",
    explanation: "\"Put together\" means combining parts into an organised whole. Here it means arranging the photos for the report.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q11",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nUsing Dev's explanation in Dialogue D1, which sentence is correct?",
    options: [
      { id: "a", text: "The new rule will affect all students." },
      { id: "b", text: "The new rule will effect all students." },
      { id: "c", text: "The rule had a big affect on attendance." },
      { id: "d", text: "The rule's affect was positive." }
    ],
    answerId: "a",
    explanation: "\"Affect\" is the verb (to influence), so \"will affect\" is right. In C and D a noun is needed, so they would need \"effect.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q12",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. Kiara tells Dev, \"You're a lifesaver.\" She means that Dev \u2014",
    options: [
      { id: "a", text: "once rescued her from drowning" },
      { id: "b", text: "works as a lifeguard" },
      { id: "c", text: "has helped her greatly in a difficult moment" },
      { id: "d", text: "gave her medicine" }
    ],
    answerId: "c",
    explanation: "Used informally, \"lifesaver\" praises someone who rescues you from a problem. Here the problem is her confusion over affect and effect.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q13",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. Why does Dev rewrite \"the municipal team turned up late\" as \"joined the volunteers at 11 a.m.\"?",
    options: [
      { id: "a", text: "To hide the fact completely from the teacher" },
      { id: "b", text: "To make the report longer" },
      { id: "c", text: "To add humour to the report" },
      { id: "d", text: "To state the fact neutrally, without sounding accusing, as a formal report should" }
    ],
    answerId: "d",
    explanation: "The time is still recorded, so readers can see the delay. But the wording is objective rather than blaming, which is the register a report needs.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q14",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. \"Now, let's get cracking.\" This means \u2014",
    options: [
      { id: "a", text: "let's break something" },
      { id: "b", text: "let's start working quickly" },
      { id: "c", text: "let's laugh loudly" },
      { id: "d", text: "let's give up" }
    ],
    answerId: "b",
    explanation: "\"Get cracking\" is an informal idiom meaning to begin a task energetically and without delay.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q15",
    prompt: "Choose ONE word for: \"a person whose bad habits cannot be corrected.\"",
    options: [
      { id: "a", text: "incredible" },
      { id: "b", text: "illegible" },
      { id: "c", text: "incorrigible" },
      { id: "d", text: "invincible" }
    ],
    answerId: "c",
    explanation: "\"Incorrigible\" means impossible to reform (in- \"not\" + corrigible \"correctable\"). The other options all start with in-/il- but mean something else.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q16",
    prompt: "Choose ONE word for: \"a system of government in which people elect their representatives.\"",
    options: [
      { id: "a", text: "democracy" },
      { id: "b", text: "monarchy" },
      { id: "c", text: "autocracy" },
      { id: "d", text: "bureaucracy" }
    ],
    answerId: "a",
    explanation: "Demo- means \"people\" and -cracy means \"rule.\" A monarchy is ruled by a king or queen, and an autocracy by one person with total power.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q17",
    prompt: "Choose ONE word for: \"handwriting that cannot be read.\"",
    options: [
      { id: "a", text: "illegible" },
      { id: "b", text: "eligible" },
      { id: "c", text: "ineligible" },
      { id: "d", text: "legible" }
    ],
    answerId: "a",
    explanation: "\"Legible\" means readable, and il- makes it \"not readable.\" Eligible and ineligible concern whether someone qualifies, which is a different root.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q18",
    prompt: "Choose the correct word.\n\"Please ___ my apology for the delay.\"",
    options: [
      { id: "a", text: "except" },
      { id: "b", text: "expect" },
      { id: "c", text: "excess" },
      { id: "d", text: "accept" }
    ],
    answerId: "d",
    explanation: "\"Accept\" means to receive or agree to. \"Except\" means \"excluding.\" They sound similar, but only \"accept\" fits an apology.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q19",
    prompt: "Choose the correct word.\n\"The ___ of our school addressed the morning assembly.\"",
    options: [
      { id: "a", text: "principle" },
      { id: "b", text: "principal" },
      { id: "c", text: "principel" },
      { id: "d", text: "principally" }
    ],
    answerId: "b",
    explanation: "A principal is the head of a school, and a principle is a rule or belief. Memory trick: the principal is your \"pal.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q20",
    prompt: "What is the noun form of the verb \"decide\"?",
    options: [
      { id: "a", text: "decisive" },
      { id: "b", text: "decided" },
      { id: "c", text: "decision" },
      { id: "d", text: "deciding" }
    ],
    answerId: "c",
    explanation: "The suffix \"-sion\" forms nouns, as in decide \u2192 decision and divide \u2192 division. \"Decisive\" is an adjective.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q21",
    prompt: "Which is the correctly spelt adjective formed from \"courage\"?",
    options: [
      { id: "a", text: "couragous" },
      { id: "b", text: "courageful" },
      { id: "c", text: "courageous" },
      { id: "d", text: "encouraging" }
    ],
    answerId: "c",
    explanation: "Keep the \"e\" after \"g\" to preserve the soft g sound: courage \u2192 courageous, like outrage \u2192 outrageous. \"Encouraging\" is a different word.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q22",
    prompt: "In which sentence does \"bank\" mean \"the land along the side of a river\"?",
    options: [
      { id: "a", text: "We sat on the bank and watched the fishing boats." },
      { id: "b", text: "She deposited her savings in the bank." },
      { id: "c", text: "You can bank on me to help." },
      { id: "d", text: "The bank closes at four on Saturdays." }
    ],
    answerId: "a",
    explanation: "Homonyms share a spelling but have different meanings. Fishing boats point to a riverside, while B and D mean a financial institution and C means \"rely on.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q23",
    prompt: "\"My cousin from Canada visits us once in a blue moon.\" What does the idiom mean?",
    options: [
      { id: "a", text: "Every month" },
      { id: "b", text: "Only at night" },
      { id: "c", text: "When the sky is clear" },
      { id: "d", text: "Very rarely" }
    ],
    answerId: "d",
    explanation: "A \"blue moon\" is a rare event, so the idiom means something happens very seldom. The distance from Canada also supports this.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-a-q24",
    prompt: "\"The inter-school match was called off because of the cyclone warning.\" \"Called off\" means \u2014",
    options: [
      { id: "a", text: "postponed to a later date" },
      { id: "b", text: "cancelled" },
      { id: "c", text: "announced loudly" },
      { id: "d", text: "shifted to another venue" }
    ],
    answerId: "b",
    explanation: "\"Call off\" means cancel completely. \"Put off\" means postpone, and confusing the two is a common error.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-eng-ch03-b-q01",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. What is the main purpose of the notice?",
    options: [
      { id: "a", text: "To congratulate last year's quiz winners" },
      { id: "b", text: "To inform students about a quiz and how to take part" },
      { id: "c", text: "To announce that classes are cancelled on 28 October" },
      { id: "d", text: "To invite parents to the auditorium" }
    ],
    answerId: "b",
    explanation: "The heading and body focus on the quiz details and registration steps. A notice's purpose is usually clear from its heading.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q02",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. How many students from each House can take part in the quiz?",
    options: [
      { id: "a", text: "One" },
      { id: "b", text: "Six" },
      { id: "c", text: "Nine" },
      { id: "d", text: "Three" }
    ],
    answerId: "d",
    explanation: "\"Each House may nominate one team of three students.\" Read the full detail: one team, three members.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q03",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. Rohan, a Class 10 student, wants to take part. According to the notice \u2014",
    options: [
      { id: "a", text: "he is not eligible, as the quiz is open to Classes 6 to 9 only" },
      { id: "b", text: "he is eligible if he submits his name by 21 October" },
      { id: "c", text: "he is eligible if he reports by 9:30 a.m." },
      { id: "d", text: "he should ask the Science Club Secretary for a prize" }
    ],
    answerId: "a",
    explanation: "Eligibility comes first. The notice addresses \"students of Classes 6 to 9,\" so deadlines and reporting times don't apply to Rohan.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q04",
    prompt: "**RIVERSIDE ACADEMY, KOCHI**\n**NOTICE**\n14 October 2026\n**INTER-HOUSE QUIZ: \"SCIENCE AROUND US\"**\nAll students of Classes 6 to 9 are hereby informed that an Inter-House Science Quiz will be held on 28 October 2026 in the school auditorium from 10:00 a.m. to 12:30 p.m. Each House may nominate one team of three students. Interested students should submit their names to their House Captains by 21 October. Participants are requested to report to the auditorium by 9:30 a.m. Exciting prizes await the winners.\nMeenakshi Pillai\nSecretary, Science Club\n\nRead Notice N1. \"Each House may nominate one team.\" \"Nominate\" means \u2014",
    options: [
      { id: "a", text: "to defeat" },
      { id: "b", text: "to reject" },
      { id: "c", text: "to formally put forward for a role or contest" },
      { id: "d", text: "to reward with a prize" }
    ],
    answerId: "c",
    explanation: "To nominate is to propose someone officially. Here, each House chooses and puts forward its team.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q05",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. For how long have the streetlights not been working?",
    options: [
      { id: "a", text: "Three weeks" },
      { id: "b", text: "Seven days" },
      { id: "c", text: "Two months" },
      { id: "d", text: "Since 7 p.m." }
    ],
    answerId: "a",
    explanation: "\"For the past three weeks.\" The time 7 p.m. is when the road becomes dark, a separate detail that is easy to confuse.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q06",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. Which best describes how the body of the email is organised?",
    options: [
      { id: "a", text: "A request, then the problem, then a warning" },
      { id: "b", text: "A greeting, a personal story, then a joke" },
      { id: "c", text: "An apology, the problem, then thanks" },
      { id: "d", text: "The problem and its effects, then a request for action" }
    ],
    answerId: "d",
    explanation: "Paragraph 1 states the problem and its consequences (darkness, safety, accidents). Paragraph 2 makes the request. This is the classic structure of a formal complaint.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q07",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. Which sentence would be INAPPROPRIATE to add to this email?",
    options: [
      { id: "a", text: "\"I would be grateful for your prompt action.\"" },
      { id: "b", text: "\"Fix these lights ASAP, or else!\"" },
      { id: "c", text: "\"The matter requires urgent attention.\"" },
      { id: "d", text: "\"Kindly look into this issue.\"" }
    ],
    answerId: "b",
    explanation: "Formal emails stay courteous even when urgent. Abbreviations like \"ASAP\" and threats like \"or else\" break the formal register.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q08",
    prompt: "**From:** arjun.mehta@example.com\n**To:** ward12.office@example.gov.in\n**Date:** 3 October 2026\n**Subject:** Request to repair broken streetlights on Lake View Road, Sector 12\nDear Sir/Madam,\nI am writing to draw your attention to the streetlights on Lake View Road, Sector 12, which have not been working for the past three weeks. As a result, the road becomes completely dark after 7 p.m. Elderly residents and students returning from tuition classes find it unsafe to walk, and two minor accidents have already been reported.\nI request you to look into the matter and arrange for the lights to be repaired at the earliest. The residents of our sector would be grateful for prompt action.\nYours faithfully,\nArjun Mehta\nResident, Sector 12\n\nRead Email E1. \"I am writing to draw your attention to the streetlights...\" \"Draw your attention to\" means \u2014",
    options: [
      { id: "a", text: "sketch something for you" },
      { id: "b", text: "distract you" },
      { id: "c", text: "make you notice" },
      { id: "d", text: "argue with you" }
    ],
    answerId: "c",
    explanation: "This formal phrase means to point something out so that the reader notices it. It is a standard opening for complaint letters.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q09",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. Dev says, \"Let's break it down.\" Here, \"break it down\" means \u2014",
    options: [
      { id: "a", text: "destroy it" },
      { id: "b", text: "start crying" },
      { id: "c", text: "stop working, like a machine" },
      { id: "d", text: "divide it into smaller, manageable parts" }
    ],
    answerId: "d",
    explanation: "The phrasal verb \"break down\" has several meanings. Here it is followed by a plan to share tasks, so it means splitting the work up.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q10",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. \"You really know how to beat around the bush.\" To \"beat around the bush\" means \u2014",
    options: [
      { id: "a", text: "to avoid saying something directly" },
      { id: "b", text: "to search a garden carefully" },
      { id: "c", text: "to hurry through a task" },
      { id: "d", text: "to start a fight" }
    ],
    answerId: "a",
    explanation: "The idiom describes talking indirectly to avoid a point. Kiara teases Dev for not saying \"late\" outright.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q11",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. Kiara says a report \"shouldn't sound like a diary.\" What is the key difference?",
    options: [
      { id: "a", text: "Diaries have dates, but reports never do." },
      { id: "b", text: "Reports must always be longer than diaries." },
      { id: "c", text: "Reports are objective and formal; diaries are personal and express feelings." },
      { id: "d", text: "Diaries must be written in the passive voice." }
    ],
    answerId: "c",
    explanation: "Both formats include dates, as Dev's list shows, so A is wrong. The real difference is register: reports record facts impersonally, while diaries share personal feelings.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q12",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. Which of these is NOT part of a report, according to Dev?",
    options: [
      { id: "a", text: "A heading" },
      { id: "b", text: "A description of the writer's personal feelings" },
      { id: "c", text: "The date and place" },
      { id: "d", text: "The outcome" }
    ],
    answerId: "b",
    explanation: "Dev lists heading, writer's name, date, place, events and outcome. Personal feelings belong in a diary, which is exactly what Kiara warns against.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q13",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. \"That's being diplomatic.\" Here, \"diplomatic\" means \u2014",
    options: [
      { id: "a", text: "tactful and sensitive in handling people" },
      { id: "b", text: "related only to embassies and ambassadors" },
      { id: "c", text: "dishonest and secretive" },
      { id: "d", text: "rude but truthful" }
    ],
    answerId: "a",
    explanation: "\"Diplomatic\" can relate to diplomats, but here it describes Dev's careful, polite wording, which states the truth without causing offence.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q14",
    prompt: "**Kiara:** We have to hand in the report on the cleanliness drive by Friday, and I haven't even started.\n**Dev:** Relax. Let's break it down. You write the introduction; I'll put together the photos.\n**Kiara:** Fine, but Mrs. Rao said a report shouldn't sound like a diary. No \"I felt so happy\" stuff.\n**Dev:** Right. It needs a heading, the writer's name, the date and place, what happened, and the outcome. Formal and to the point.\n**Kiara:** I keep mixing up \"affect\" and \"effect,\" too. Did the drive have a good effect, or did it affect things well?\n**Dev:** \"Effect\" is usually the noun, meaning the result. \"Affect\" is usually the verb, meaning to influence. The drive had a positive effect.\n**Kiara:** You're a lifesaver. Oh, and Mrs. Rao wants us to mention that the municipal team turned up late.\n**Dev:** Let's put it tactfully: \"The municipal team joined the volunteers at 11 a.m.\"\n**Kiara:** Ha! You really know how to beat around the bush.\n**Dev:** That's not beating around the bush. That's being diplomatic. Now, let's get cracking.\n\nRead Dialogue D1. \"...the municipal team turned up late.\" \"Turned up\" means \u2014",
    options: [
      { id: "a", text: "increased the volume" },
      { id: "b", text: "refused an offer" },
      { id: "c", text: "arrived or appeared" },
      { id: "d", text: "folded something upwards" }
    ],
    answerId: "c",
    explanation: "\"Turn up\" has several meanings. With a team and the word \"late,\" it means arrived. \"Turn down\" would mean refuse.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q15",
    prompt: "Choose ONE word for: \"a person who always expects good outcomes.\"",
    options: [
      { id: "a", text: "pessimist" },
      { id: "b", text: "sceptic" },
      { id: "c", text: "realist" },
      { id: "d", text: "optimist" }
    ],
    answerId: "d",
    explanation: "An optimist looks on the bright side, and a pessimist expects the worst. A sceptic doubts claims until shown proof.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q16",
    prompt: "Choose ONE word for: \"a person who watches an event without taking part.\"",
    options: [
      { id: "a", text: "participant" },
      { id: "b", text: "spectator" },
      { id: "c", text: "competitor" },
      { id: "d", text: "organiser" }
    ],
    answerId: "b",
    explanation: "\"Spectator\" comes from the Latin for \"to watch.\" Participants and competitors take part, and organisers arrange the event.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q17",
    prompt: "Choose ONE word for: \"a list of items to be discussed at a meeting.\"",
    options: [
      { id: "a", text: "minutes" },
      { id: "b", text: "memo" },
      { id: "c", text: "agenda" },
      { id: "d", text: "schedule" }
    ],
    answerId: "c",
    explanation: "The agenda is prepared before a meeting. The minutes are the record written after it, and the two are often confused.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q18",
    prompt: "Choose the correct word.\n\"Keep your ticket safe; don't ___ it.\"",
    options: [
      { id: "a", text: "loose" },
      { id: "b", text: "lose" },
      { id: "c", text: "loss" },
      { id: "d", text: "lost" }
    ],
    answerId: "b",
    explanation: "\"Lose\" (one o) is the verb meaning to misplace. \"Loose\" (two o's) means not tight, and \"loss\" is the noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q19",
    prompt: "Choose the correct word.\n\"The car remained ___ at the red signal.\"",
    options: [
      { id: "a", text: "stationary" },
      { id: "b", text: "stationery" },
      { id: "c", text: "stationed" },
      { id: "d", text: "station" }
    ],
    answerId: "a",
    explanation: "\"Stationary\" with an a means not moving. \"Stationery\" with an e means paper and pens. Trick: e for envelopes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q20",
    prompt: "What is the verb form of the adjective \"strong\"?",
    options: [
      { id: "a", text: "strongly" },
      { id: "b", text: "strength" },
      { id: "c", text: "stronger" },
      { id: "d", text: "strengthen" }
    ],
    answerId: "d",
    explanation: "The suffix \"-en\" turns some adjectives or nouns into verbs, as in strength \u2192 strengthen and wide \u2192 widen. \"Strength\" is the noun and \"strongly\" is the adverb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q21",
    prompt: "Which word correctly means \"not responsible\"?",
    options: [
      { id: "a", text: "unresponsible" },
      { id: "b", text: "disresponsible" },
      { id: "c", text: "nonresponsible" },
      { id: "d", text: "irresponsible" }
    ],
    answerId: "d",
    explanation: "Words beginning with \"r\" often take the prefix \"ir-,\" as in irregular and irrelevant. Likewise \"il-\" goes before \"l\" (illegal) and \"im-\" before \"p\" (impossible).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q22",
    prompt: "In which sentence does \"fair\" mean \"just and impartial\"?",
    options: [
      { id: "a", text: "The village fair was crowded with families." },
      { id: "b", text: "The baby has fair, curly hair." },
      { id: "c", text: "The umpire's decision was fair to both teams." },
      { id: "d", text: "The weather will be fair and dry tomorrow." }
    ],
    answerId: "c",
    explanation: "An umpire's decision treating both sides equally is \"fair\" in the sense of just. The others mean a festival or market, light-coloured, and pleasant weather.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q23",
    prompt: "\"Before the board exams, Shreya burnt the midnight oil every day.\" This means she \u2014",
    options: [
      { id: "a", text: "wasted fuel at night" },
      { id: "b", text: "worked or studied late into the night" },
      { id: "c", text: "cooked dinner very late" },
      { id: "d", text: "accidentally started a fire" }
    ],
    answerId: "b",
    explanation: "The idiom comes from studying by lamplight. Today it means working late with great effort, which fits the exam context.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch03-b-q24",
    prompt: "Choose the correct phrasal verb.\n\"The firefighters managed to ___ the fire within an hour.\"",
    options: [
      { id: "a", text: "put out" },
      { id: "b", text: "put off" },
      { id: "c", text: "put up" },
      { id: "d", text: "put on" }
    ],
    answerId: "a",
    explanation: "\"Put out\" means to extinguish. \"Put off\" means postpone, \"put up\" means erect or tolerate, and \"put on\" means wear. The particle changes the whole meaning.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u2709\ufe0f",
    title: "Precision matters",
    body: ["Choose exactly the right word \u2014 and present it in the right form.", "Match your tone to your reader: that's register.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Today is about precision: choosing exactly the right word, and presenting your writing in exactly the right form.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Word & format toolkit",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: near-twins, idioms, one-word substitutes and formats.",
    cards: [
      { label: "Near-twins", reveal: "affect/effect \u00b7 principal/principle \u00b7 stationary/stationery", emoji: "\ud83d\udc6f" },
      { label: "Idioms & phrasal verbs", reveal: "\u201cCall off\u201d = cancel \u2014 let context decode", emoji: "\ud83e\udde9" },
      { label: "One-word substitutes", reveal: "Cannot be reformed \u2192 incorrigible", emoji: "\ud83c\udfaf" },
      { label: "Formats", reveal: "Notice: body, date, heading, details, name & designation", emoji: "\ud83d\udccb" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Fix the register",
    visual: "sentence",
    speak: "Hey, the school bus is always late, fix it! The message is clear, but the tone is wrong for a principal. Better: I wish to bring to your notice that the school bus on Route 4 has been arriving late.",
    steps: ["\u201cHey, the school bus is always late, fix it!\u201d", "Clear message \u2014 but it sounds like a command to a friend", "\u201cI wish to bring to your notice that the bus on Route 4 has been arriving late.\u201d", "Same fact, respectful and specific"],
    punchline: "Dear Sir or Madam \u2192 Yours faithfully \u00b7 Named reader \u2192 Yours sincerely",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "The match was ____ because of heavy rain.",
    options: [
      { id: "a", text: "called off" },
      { id: "b", text: "called up" },
      { id: "c", text: "called on" },
      { id: "d", text: "called in" }
    ],
    answerId: "a",
    why: "\u201cCall off\u201d means cancel.",
    visual: "sentence",
    speak: "The match was ____ because of heavy rain.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Precision pro!",
    bullets: ["Ask: who is the reader? what is the purpose?", "Near-twins differ by one letter", "Each format has a pattern readers expect", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Precision pro! You are ready for the practice sets.",
  },
];

export const g8EnglishWords: ChapterDef = {
  id: "right-word-format",
  title: "The Right Word, the Right Format",
  emoji: "\u2709\ufe0f",
  blurb: "Confusables, idioms, notices & emails",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "vocabulary",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "vocabulary",
      questions: SET_B,
    },
  ],
  paperTopics: ["vocabulary", "idioms-lite", "comprehension"],
};

export const g8EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
