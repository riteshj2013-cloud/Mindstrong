import type { ChapterDef, PrepQuestion } from "../types";

/** Talk It Out — authored Grade 5 English content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-eng-ch04-a-q01",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. How does Meera greet Arjun at the start?",
    options: [
      { id: "a", text: "She says good morning and asks if he is new." },
      { id: "b", text: "She shouts across the room." },
      { id: "c", text: "She ignores him until recess." },
      { id: "d", text: "She tells him to sit somewhere else." }
    ],
    answerId: "a",
    explanation: "Meera opens with \"Good morning!\" and asks if he is new \u2014 a warm, clear greeting.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q02",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. Which line is a polite offer of help?",
    options: [
      { id: "a", text: "\"My name is Arjun.\"" },
      { id: "b", text: "\"Would you like to sit with me?\"" },
      { id: "c", text: "\"I joined today.\"" },
      { id: "d", text: "\"Ms. Kapoor.\"" }
    ],
    answerId: "b",
    explanation: "\"Would you like\u2026?\" is a polite offer. It gives Arjun a choice instead of ordering him.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q03",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. Arjun says, \"Could you also tell me the teacher's name?\" This shows he is \u2014",
    options: [
      { id: "a", text: "giving an order" },
      { id: "b", text: "complaining about class" },
      { id: "c", text: "asking politely for information" },
      { id: "d", text: "refusing Meera's help" }
    ],
    answerId: "c",
    explanation: "\"Could you\u2026?\" is a polite request for information, not a command or complaint.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q04",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. Why does Meera mention raising hands before speaking?",
    options: [
      { id: "a", text: "To scare Arjun away from class" },
      { id: "b", text: "To finish her homework aloud" },
      { id: "c", text: "To ask Arjun to leave" },
      { id: "d", text: "To explain a classroom rule kindly" }
    ],
    answerId: "d",
    explanation: "She shares what Ms. Kapoor likes so Arjun knows the class habit \u2014 a helpful tip for a new student.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q05",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. Which reply best shows Arjun is grateful?",
    options: [
      { id: "a", text: "\"Thanks again, Meera. I feel much better now.\"" },
      { id: "b", text: "\"I don't want to get lost.\"" },
      { id: "c", text: "\"I joined today.\"" },
      { id: "d", text: "\"Are you new here?\"" }
    ],
    answerId: "a",
    explanation: "He thanks Meera again and shares that he feels better \u2014 clear gratitude.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q06",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. How does Kabir answer the phone?",
    options: [
      { id: "a", text: "He hangs up at once." },
      { id: "b", text: "He says \"Speaking\" and greets Riya." },
      { id: "c", text: "He shouts \"Who is this?\"" },
      { id: "d", text: "He asks Riya to call later without listening." }
    ],
    answerId: "b",
    explanation: "\"Speaking. Hi, Riya!\" confirms it is Kabir and greets her politely.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q07",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. Why does Riya say \"Sorry to call during dinner\"?",
    options: [
      { id: "a", text: "She wants Kabir to feel guilty" },
      { id: "b", text: "She forgot Kabir's name" },
      { id: "c", text: "She is being thoughtful about the time" },
      { id: "d", text: "She is ending the call" }
    ],
    answerId: "c",
    explanation: "Apologising for calling at dinner shows she knows the timing may be inconvenient.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q08",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. Which sentence is Riya's main polite request?",
    options: [
      { id: "a", text: "\"Feel better soon.\"" },
      { id: "b", text: "\"Have a good evening!\"" },
      { id: "c", text: "\"Bye, Kabir.\"" },
      { id: "d", text: "\"Could you please tell me what homework Ms. Fernandes gave?\"" }
    ],
    answerId: "d",
    explanation: "Her purpose for calling is to learn the homework; \"Could you please\u2026?\" is the polite ask.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q09",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. Kabir offers to share a photo of the board work. What does this show?",
    options: [
      { id: "a", text: "He is being helpful and clear" },
      { id: "b", text: "He wants Riya to fail" },
      { id: "c", text: "He refuses to help" },
      { id: "d", text: "He is angry about dinner" }
    ],
    answerId: "a",
    explanation: "Offering notes and a photo gives Riya what she missed \u2014 practical help.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q10",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. How do Riya and Kabir end the call?",
    options: [
      { id: "a", text: "They argue about Maths." },
      { id: "b", text: "They say goodbye and wish each other well." },
      { id: "c", text: "They forget to hang up and stay silent." },
      { id: "d", text: "They shout about dinner." }
    ],
    answerId: "b",
    explanation: "Riya says goodbye and wishes Kabir a good evening; Kabir says bye and hopes she feels better.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q11",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. What does the visitor need?",
    options: [
      { id: "a", text: "A cricket bat from the store room" },
      { id: "b", text: "Lunch in the canteen" },
      { id: "c", text: "The school office for a transfer certificate" },
      { id: "d", text: "A seat in Class 5B" }
    ],
    answerId: "c",
    explanation: "She says she is looking for the office to collect a transfer certificate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q12",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. Which directions does the guard give?",
    options: [
      { id: "a", text: "Climb to the terrace, then turn right" },
      { id: "b", text: "Wait outside the gate forever" },
      { id: "c", text: "Run across the football field twice" },
      { id: "d", text: "Go straight past the playground, then turn left at the mango tree" }
    ],
    answerId: "d",
    explanation: "The guard's clear path is: straight past the playground, left at the mango tree.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q13",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. The guard asks, \"Would you like me to call someone to walk with you?\" This is \u2014",
    options: [
      { id: "a", text: "a polite offer of more help" },
      { id: "b", text: "a rude order" },
      { id: "c", text: "a refusal to help" },
      { id: "d", text: "a joke about mangoes" }
    ],
    answerId: "a",
    explanation: "\"Would you like\u2026?\" offers extra help without forcing it.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q14",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. How does the visitor check she understood?",
    options: [
      { id: "a", text: "She walks away silently" },
      { id: "b", text: "She repeats: straight, then left at the mango tree" },
      { id: "c", text: "She scolds the guard" },
      { id: "d", text: "She asks for a cricket score" }
    ],
    answerId: "b",
    explanation: "Repeating directions is a smart way to confirm you heard them correctly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q15",
    prompt: "**ANNOUNCEMENT \u2014 Morning Assembly**\nGood morning, students. This is your Head Girl, Ananya speaking.\nTomorrow is our Sports Day practice. Classes 4 and 5 will assemble on the ground at 8:15 a.m. Please wear your white sports kit and carry a water bottle. Do not bring bags to the ground.\nAfter practice, return quietly to your classrooms. Thank you, and have a wonderful day.\n\nRead Announcement N1. Who is speaking?",
    options: [
      { id: "a", text: "The school cook" },
      { id: "b", text: "A Class 3 student with no name" },
      { id: "c", text: "The Head Girl, Ananya" },
      { id: "d", text: "A visitor at the gate" }
    ],
    answerId: "c",
    explanation: "The announcement begins: \"This is your Head Girl, Ananya speaking.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q16",
    prompt: "**ANNOUNCEMENT \u2014 Morning Assembly**\nGood morning, students. This is your Head Girl, Ananya speaking.\nTomorrow is our Sports Day practice. Classes 4 and 5 will assemble on the ground at 8:15 a.m. Please wear your white sports kit and carry a water bottle. Do not bring bags to the ground.\nAfter practice, return quietly to your classrooms. Thank you, and have a wonderful day.\n\nRead Announcement N1. When should Classes 4 and 5 assemble?",
    options: [
      { id: "a", text: "At midnight in the library" },
      { id: "b", text: "After lunch in the canteen only" },
      { id: "c", text: "On Sunday at home" },
      { id: "d", text: "At 8:15 a.m. on the ground" }
    ],
    answerId: "d",
    explanation: "The announcement says assemble on the ground at 8:15 a.m.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q17",
    prompt: "**ANNOUNCEMENT \u2014 Morning Assembly**\nGood morning, students. This is your Head Girl, Ananya speaking.\nTomorrow is our Sports Day practice. Classes 4 and 5 will assemble on the ground at 8:15 a.m. Please wear your white sports kit and carry a water bottle. Do not bring bags to the ground.\nAfter practice, return quietly to your classrooms. Thank you, and have a wonderful day.\n\nRead Announcement N1. Students must NOT \u2014",
    options: [
      { id: "a", text: "bring bags to the ground" },
      { id: "b", text: "wear white sports kit" },
      { id: "c", text: "carry a water bottle" },
      { id: "d", text: "return to classrooms after practice" }
    ],
    answerId: "a",
    explanation: "The announcement clearly says: \"Do not bring bags to the ground.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q18",
    prompt: "You bump into a classmate and spill her water. What is the most polite thing to say?",
    options: [
      { id: "a", text: "\"Watch where you stand!\"" },
      { id: "b", text: "\"I'm so sorry. Let me help you clean that up.\"" },
      { id: "c", text: "\"Ha! That was funny.\"" },
      { id: "d", text: "Say nothing and walk away." }
    ],
    answerId: "b",
    explanation: "A good apology names the mistake and offers to make it right.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q19",
    prompt: "You need to borrow an eraser. Which is the most polite ask?",
    options: [
      { id: "a", text: "\"Give me that eraser now.\"" },
      { id: "b", text: "\"You never share anything.\"" },
      { id: "c", text: "\"Could I borrow your eraser, please?\"" },
      { id: "d", text: "Grab it without speaking." }
    ],
    answerId: "c",
    explanation: "\"Could I\u2026 please?\" asks permission politely instead of demanding.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q20",
    prompt: "A neighbour phones and asks if your mother is home. Mother is busy cooking. Best reply?",
    options: [
      { id: "a", text: "\"Why are you calling?\"" },
      { id: "b", text: "\"Call someone else.\"" },
      { id: "c", text: "Hang up without a word." },
      { id: "d", text: "\"She's busy right now. May I take a message?\"" }
    ],
    answerId: "d",
    explanation: "You explain briefly and offer to take a message \u2014 helpful and polite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q21",
    prompt: "You want a friend to join your birthday picnic. Best invitation?",
    options: [
      { id: "a", text: "\"Would you like to join my birthday picnic on Saturday at 4 p.m.?\"" },
      { id: "b", text: "\"Come or don't. I don't care.\"" },
      { id: "c", text: "\"You must come or I'll be angry.\"" },
      { id: "d", text: "\"Picnics are boring.\"" }
    ],
    answerId: "a",
    explanation: "A clear invitation includes the event, day and time, and asks with \"Would you like\u2026?\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q22",
    prompt: "In a group project meeting, two friends talk over you. What should you say calmly?",
    options: [
      { id: "a", text: "\"You are both useless!\"" },
      { id: "b", text: "\"Excuse me \u2014 may I finish my point, please?\"" },
      { id: "c", text: "Shout louder than them." },
      { id: "d", text: "Leave the group forever without speaking." }
    ],
    answerId: "b",
    explanation: "\"Excuse me\" plus a polite request to finish keeps the talk respectful.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q23",
    prompt: "You meet your teacher in the corridor in the morning. Best greeting?",
    options: [
      { id: "a", text: "\"Hey, teach!\"" },
      { id: "b", text: "Whistle and walk past" },
      { id: "c", text: "\"Good morning, ma'am.\"" },
      { id: "d", text: "\"What do you want?\"" }
    ],
    answerId: "c",
    explanation: "A respectful morning greeting uses \"Good morning\" and a proper title.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-a-q24",
    prompt: "You are leaving a classmate's house after studying. Best closing?",
    options: [
      { id: "a", text: "Walk out without a word" },
      { id: "b", text: "\"Your house is messy.\"" },
      { id: "c", text: "\"I'm never coming back.\"" },
      { id: "d", text: "\"Thanks for studying with me. See you at school!\"" }
    ],
    answerId: "d",
    explanation: "Thank the host and say a friendly goodbye \u2014 good spoken manners.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-eng-ch04-b-q01",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. What is Arjun's first polite reply after Meera welcomes him?",
    options: [
      { id: "a", text: "\"That's kind of you. Thank you!\"" },
      { id: "b", text: "\"Go away.\"" },
      { id: "c", text: "\"I already know everything.\"" },
      { id: "d", text: "\"Where is the canteen only?\"" }
    ],
    answerId: "a",
    explanation: "He accepts the welcome with thanks \u2014 warm and polite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q02",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. Why does Arjun say he doesn't want to get lost?",
    options: [
      { id: "a", text: "He is joking about maps" },
      { id: "b", text: "He is new and needs guidance around school" },
      { id: "c", text: "He wants to skip assembly" },
      { id: "d", text: "He refuses Meera's help" }
    ],
    answerId: "b",
    explanation: "As a new student, he is unsure of places, so he accepts Meera's offer to show him around.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q03",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. \"May I show you where we keep our bags\u2026?\" Here \"May I\" means Meera is \u2014",
    options: [
      { id: "a", text: "ordering Arjun" },
      { id: "b", text: "refusing to talk" },
      { id: "c", text: "asking permission to help" },
      { id: "d", text: "complaining to Ms. Kapoor" }
    ],
    answerId: "c",
    explanation: "\"May I\u2026?\" asks permission; it is softer than \"I will show you whether you like it or not.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q04",
    prompt: "**Meera:** Good morning! Are you new here?\n**Arjun:** Yes. I joined today. My name is Arjun.\n**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?\n**Arjun:** That's kind of you. Thank you!\n**Meera:** May I show you where we keep our bags and lunch boxes?\n**Arjun:** Yes, please. I don't want to get lost.\n**Meera:** Of course. After assembly, I'll take you to the library too.\n**Arjun:** That would be wonderful. Could you also tell me the teacher's name?\n**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.\n**Arjun:** Thanks again, Meera. I feel much better now.\n\nRead Passage P1. Which classroom habit does Meera pass on?",
    options: [
      { id: "a", text: "Never speak in class" },
      { id: "b", text: "Shout answers from the back" },
      { id: "c", text: "Hide bags under the desk forever" },
      { id: "d", text: "Raise hands before speaking" }
    ],
    answerId: "d",
    explanation: "She explains that Ms. Kapoor likes students to raise hands before they speak.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q05",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. Why is Riya calling Kabir?",
    options: [
      { id: "a", text: "To learn the Maths homework she missed" },
      { id: "b", text: "To invite him to a movie only" },
      { id: "c", text: "To sell geometry boxes" },
      { id: "d", text: "To cancel Sports Day" }
    ],
    answerId: "a",
    explanation: "She missed Maths due to fever and asks what homework was given.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q06",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. Kabir says, \"Shall I also share a photo\u2026?\" \"Shall I\" here is \u2014",
    options: [
      { id: "a", text: "an angry command" },
      { id: "b", text: "a polite offer / suggestion" },
      { id: "c", text: "a way to end friendship" },
      { id: "d", text: "a spelling test question" }
    ],
    answerId: "b",
    explanation: "\"Shall I\u2026?\" gently offers to do something helpful.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q07",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. What must Riya bring tomorrow, according to Kabir?",
    options: [
      { id: "a", text: "A cricket bat and helmet" },
      { id: "b", text: "Only a storybook" },
      { id: "c", text: "Her geometry box" },
      { id: "d", text: "Nothing at all" }
    ],
    answerId: "c",
    explanation: "Kabir says they must bring geometry boxes tomorrow.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q08",
    prompt: "**Riya:** Hello, is that Kabir?\n**Kabir:** Speaking. Hi, Riya!\n**Riya:** Hi! Sorry to call during dinner. Do you have a minute?\n**Kabir:** Sure. What's up?\n**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?\n**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.\n**Riya:** Got it. Should I copy the notes from anyone?\n**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?\n**Riya:** That would help a lot. Thank you so much!\n**Kabir:** No problem. Feel better soon. Bye!\n**Riya:** Bye, Kabir. Have a good evening!\n\nRead Passage P2. Kabir says \"Feel better soon.\" This shows \u2014",
    options: [
      { id: "a", text: "anger about homework" },
      { id: "b", text: "that he forgot Riya's name" },
      { id: "c", text: "that the call failed" },
      { id: "d", text: "care and kindness" }
    ],
    answerId: "d",
    explanation: "Wishing someone a quick recovery is a kind closing line.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q09",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. Where is the office, according to the guard?",
    options: [
      { id: "a", text: "The blue door next to the Principal's room" },
      { id: "b", text: "On the terrace near the water tank" },
      { id: "c", text: "Inside the sports store only" },
      { id: "d", text: "Across the public road outside" }
    ],
    answerId: "a",
    explanation: "The guard says the office is the blue door next to the Principal's room.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q10",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. How does the guard open the conversation?",
    options: [
      { id: "a", text: "\"What do you want?\"" },
      { id: "b", text: "\"Good afternoon. How may I help you?\"" },
      { id: "c", text: "\"Go away from the gate.\"" },
      { id: "d", text: "\"I am busy.\"" }
    ],
    answerId: "b",
    explanation: "A polite service greeting offers help right away.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q11",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. The visitor says the offer to walk with her is \"thoughtful.\" She means it is \u2014",
    options: [
      { id: "a", text: "rude and silly" },
      { id: "b", text: "a waste of time" },
      { id: "c", text: "kind and considerate" },
      { id: "d", text: "against school rules" }
    ],
    answerId: "c",
    explanation: "\"Thoughtful\" praises kindness; she still chooses to go alone.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q12",
    prompt: "**Guard:** Good afternoon. How may I help you?\n**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.\n**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.\n**Visitor:** Straight, then left at the mango tree. Is that correct?\n**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?\n**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.\n**Guard:** You're welcome. Have a pleasant day.\n\nRead Passage P3. If the visitor gets confused, what should she do?",
    options: [
      { id: "a", text: "Leave the school at once" },
      { id: "b", text: "Climb the mango tree" },
      { id: "c", text: "Shout at the guard" },
      { id: "d", text: "Ask any teacher" }
    ],
    answerId: "d",
    explanation: "The guard says: if confused, ask any teacher.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q13",
    prompt: "**ANNOUNCEMENT \u2014 Morning Assembly**\nGood morning, students. This is your Head Girl, Ananya speaking.\nTomorrow is our Sports Day practice. Classes 4 and 5 will assemble on the ground at 8:15 a.m. Please wear your white sports kit and carry a water bottle. Do not bring bags to the ground.\nAfter practice, return quietly to your classrooms. Thank you, and have a wonderful day.\n\nRead Announcement N1. What event is tomorrow?",
    options: [
      { id: "a", text: "Sports Day practice" },
      { id: "b", text: "A silent library exam only" },
      { id: "c", text: "A cooking contest for parents" },
      { id: "d", text: "A holiday with no assembly" }
    ],
    answerId: "a",
    explanation: "Ananya announces Sports Day practice for the next day.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q14",
    prompt: "**ANNOUNCEMENT \u2014 Morning Assembly**\nGood morning, students. This is your Head Girl, Ananya speaking.\nTomorrow is our Sports Day practice. Classes 4 and 5 will assemble on the ground at 8:15 a.m. Please wear your white sports kit and carry a water bottle. Do not bring bags to the ground.\nAfter practice, return quietly to your classrooms. Thank you, and have a wonderful day.\n\nRead Announcement N1. After practice, students should \u2014",
    options: [
      { id: "a", text: "run home without permission" },
      { id: "b", text: "return quietly to their classrooms" },
      { id: "c", text: "stay on the ground all day" },
      { id: "d", text: "bring bags onto the field" }
    ],
    answerId: "b",
    explanation: "The announcement says return quietly to classrooms after practice.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q15",
    prompt: "**ANNOUNCEMENT \u2014 Morning Assembly**\nGood morning, students. This is your Head Girl, Ananya speaking.\nTomorrow is our Sports Day practice. Classes 4 and 5 will assemble on the ground at 8:15 a.m. Please wear your white sports kit and carry a water bottle. Do not bring bags to the ground.\nAfter practice, return quietly to your classrooms. Thank you, and have a wonderful day.\n\nRead Announcement N1. Why does Ananya end with \"Thank you, and have a wonderful day\"?",
    options: [
      { id: "a", text: "To cancel Sports Day" },
      { id: "b", text: "To scold Class 5" },
      { id: "c", text: "To close the announcement warmly" },
      { id: "d", text: "To ask for money" }
    ],
    answerId: "c",
    explanation: "A clear thank-you and kind wish is a polite way to end a public announcement.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q16",
    prompt: "You are late to a friend's birthday party. Best thing to say at the door?",
    options: [
      { id: "a", text: "\"You started without me? Rude!\"" },
      { id: "b", text: "Say nothing and take the biggest piece of cake." },
      { id: "c", text: "\"Parties are boring.\"" },
      { id: "d", text: "\"Traffic was bad \u2014 I'm sorry I'm late. Happy birthday!\"" }
    ],
    answerId: "d",
    explanation: "Apologise briefly, give a simple reason, and greet the birthday child.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q17",
    prompt: "You need the teacher to repeat a question. Best line?",
    options: [
      { id: "a", text: "\"Excuse me, ma'am \u2014 could you please repeat the question?\"" },
      { id: "b", text: "\"Huh?\"" },
      { id: "c", text: "\"That question is silly.\"" },
      { id: "d", text: "Whisper to a friend instead." }
    ],
    answerId: "a",
    explanation: "\"Excuse me\" plus \"could you please\u2026?\" is respectful classroom speech.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q18",
    prompt: "At a shop, the shopkeeper is busy with another customer. What should you do?",
    options: [
      { id: "a", text: "Shout your order across the counter" },
      { id: "b", text: "Wait your turn, then say \"Excuse me, uncle \u2014 when you are free\u2026\"" },
      { id: "c", text: "Push the other customer aside" },
      { id: "d", text: "Take items and leave without paying" }
    ],
    answerId: "b",
    explanation: "Waiting your turn and using \"Excuse me\" shows patience and manners.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q19",
    prompt: "A friend invites you to a story-reading hour, but you already have a music class. Best reply?",
    options: [
      { id: "a", text: "\"Your stories are useless.\"" },
      { id: "b", text: "Ignore the message forever." },
      { id: "c", text: "\"I can't come this time \u2014 I have music class. Thank you for inviting me!\"" },
      { id: "d", text: "\"Fine. Whatever.\"" }
    ],
    answerId: "c",
    explanation: "Decline politely, give a short reason, and thank them for inviting you.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q20",
    prompt: "You dial a wrong number. Best thing to say?",
    options: [
      { id: "a", text: "\"Who is this? Tell me your address!\"" },
      { id: "b", text: "Stay silent for five minutes." },
      { id: "c", text: "Ask them to solve your homework." },
      { id: "d", text: "\"I'm sorry \u2014 I think I have the wrong number. Goodbye.\"" }
    ],
    answerId: "d",
    explanation: "Apologise, explain it was a wrong number, and end politely.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q21",
    prompt: "Someone praises your drawing. Best spoken reply?",
    options: [
      { id: "a", text: "\"Thank you! I'm glad you like it.\"" },
      { id: "b", text: "\"Obviously. I'm the best.\"" },
      { id: "c", text: "\"Your taste is weird.\"" },
      { id: "d", text: "Tear the drawing up." }
    ],
    answerId: "a",
    explanation: "A simple thank-you is warm and humble.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q22",
    prompt: "During a class discussion, you disagree with a friend's idea. Best line?",
    options: [
      { id: "a", text: "\"That's stupid.\"" },
      { id: "b", text: "\"I see your point, but I think we could also try another way.\"" },
      { id: "c", text: "\"Be quiet forever.\"" },
      { id: "d", text: "Laugh loudly and walk out." }
    ],
    answerId: "b",
    explanation: "Acknowledge their idea, then share yours calmly \u2014 good discussion manners.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q23",
    prompt: "You answer the door for the postman. Best greeting?",
    options: [
      { id: "a", text: "\"What?\"" },
      { id: "b", text: "Slam the door" },
      { id: "c", text: "\"Good morning! How may I help you?\"" },
      { id: "d", text: "\"Go away.\"" }
    ],
    answerId: "c",
    explanation: "Greet politely and offer help \u2014 clear door manners.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch04-b-q24",
    prompt: "After a school club meeting, you are the last to leave. Best closing to the teacher?",
    options: [
      { id: "a", text: "Leave without looking back" },
      { id: "b", text: "\"Meetings waste time.\"" },
      { id: "c", text: "Hide under a desk" },
      { id: "d", text: "\"Thank you for the meeting, ma'am. Good afternoon!\"" }
    ],
    answerId: "d",
    explanation: "Thank the teacher and say a polite goodbye before you leave.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udde3\ufe0f",
    title: "Hello, talk champion!",
    body: ["Spoken English is kindness, clarity and the right tone.", "Greet, ask politely, give clear directions, and close warmly.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Hello, talk champion! Today we practise the words we use when we speak with people.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Talk tools",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: greetings, polite asks, phone talk and clear directions.",
    cards: [
      { label: "Greetings", reveal: "Good morning / Hello \u2014 then say who you are", emoji: "\ud83d\udc4b" },
      { label: "Polite asks", reveal: "Could you\u2026? May I\u2026? Please & thank you", emoji: "\ud83d\ude4f" },
      { label: "Phone talk", reveal: "Who you are \u2192 purpose \u2192 listen \u2192 goodbye", emoji: "\ud83d\udcde" },
      { label: "Directions", reveal: "Straight, turn, landmark \u2014 then check understanding", emoji: "\ud83d\uddfa\ufe0f" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Soft words open doors",
    visual: "sentence",
    speak: "Instead of Give me that pencil, try Could I borrow your pencil, please? Soft words show respect.",
    steps: ["Need a pencil from a friend", "Harsh: \"Give me that.\"", "Polite: \"Could I borrow your pencil, please?\"", "Add thank you when they help"],
    punchline: "Could you / May I / Would you like \u2014 choice, not command.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "You bump into a classmate and spill water. Best line?",
    options: [
      { id: "a", text: "Watch where you stand!" },
      { id: "b", text: "I'm so sorry. Let me help clean up." },
      { id: "c", text: "Ha! Funny." },
      { id: "d", text: "Say nothing." }
    ],
    answerId: "b",
    why: "Apologise and offer to help \u2014 short and sincere.",
    visual: "sentence",
    speak: "You bump into a classmate and spill water. Best line?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Talk champion!",
    bullets: ["Greet \u2192 purpose \u2192 polite words \u2192 close", "Phone: clear and kind", "Announcements need who, what, when, where", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Talk champion! You are ready for the practice sets.",
  },
];

export const g5EnglishSpoken: ChapterDef = {
  id: "talk-it-out",
  title: "Talk It Out",
  emoji: "\ud83d\udde3\ufe0f",
  blurb: "Greetings, polite talk & situations",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "spoken-english",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "spoken-english",
      questions: SET_B,
    },
  ],
  paperTopics: ["spoken-english", "expression", "comprehension"],
};

export const g5EnglishSpokenQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
