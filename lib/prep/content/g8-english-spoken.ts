import type { ChapterDef, PrepQuestion } from "../types";

/** Speak Up: Dialogue & Debate - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-eng-ch04-a-q01",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Which side of the debate is Rohan on?",
    options: [
      { id: "a", text: "Opposition" },
      { id: "b", text: "Proposition" },
      { id: "c", text: "Judge" },
      { id: "d", text: "Neutral chairperson" }
    ],
    answerId: "b",
    explanation: "Rohan says he is on the proposition, so he argues that social media does more harm than good.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q02",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Rohan's words \"Firstly\u2026 Secondly\u2026 Finally\u2026\" mainly help him \u2014",
    options: [
      { id: "a", text: "apologise for being late" },
      { id: "b", text: "organise his arguments in clear order" },
      { id: "c", text: "change the motion of the debate" },
      { id: "d", text: "interrupt Anya" }
    ],
    answerId: "b",
    explanation: "Sequencing markers signal the order of points so listeners can follow the speech.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q03",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Anya begins, \"On the other hand\u2026\" This phrase signals that she will \u2014",
    options: [
      { id: "a", text: "repeat Rohan's exact words" },
      { id: "b", text: "end the conversation" },
      { id: "c", text: "present a contrasting point of view" },
      { id: "d", text: "ask for a dictionary" }
    ],
    answerId: "c",
    explanation: "\"On the other hand\" introduces a contrasting idea \u2014 here, benefits of social media against Rohan's harms.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q04",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Which line is the most polite request?",
    options: [
      { id: "a", text: "\"Have you finished your opening speech for tomorrow?\"" },
      { id: "b", text: "\"Would you mind if we practise for ten minutes after lunch?\"" },
      { id: "c", text: "\"Please don't use 'like' every second word in the hall.\"" },
      { id: "d", text: "\"Point taken. Formal register it is.\"" }
    ],
    answerId: "b",
    explanation: "\"Would you mind if\u2026\" is a classic softener for a polite request. The others are a question, advice, or agreement.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q05",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Why does Rohan want Anya to prepare a rebuttal for his \"study time\" point?",
    options: [
      { id: "a", text: "Judges notice when speakers answer the other side's arguments" },
      { id: "b", text: "Rebuttals replace the need for an opening speech" },
      { id: "c", text: "Rebuttals are only used by the chairperson" },
      { id: "d", text: "He wants her to copy his speech word for word" }
    ],
    answerId: "a",
    explanation: "Rohan says judges notice when you answer the other side \u2014 that is the purpose of a rebuttal.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q06",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Rohan warns Anya not to use \"like\" every second word in the hall because \u2014",
    options: [
      { id: "a", text: "the word \"like\" is grammatically illegal" },
      { id: "b", text: "debate English needs a more formal spoken register" },
      { id: "c", text: "judges forbid all comparisons" },
      { id: "d", text: "Anya is on the proposition" }
    ],
    answerId: "b",
    explanation: "Casual fillers suit chat with friends; a debate hall expects clearer, more formal spoken English.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q07",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. \"Let's get cracking\" means \u2014",
    options: [
      { id: "a", text: "let's start working immediately" },
      { id: "b", text: "let's break something" },
      { id: "c", text: "let's cancel the debate" },
      { id: "d", text: "let's whisper" }
    ],
    answerId: "a",
    explanation: "\"Get cracking\" is an informal idiom meaning to begin a task without delay.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q08",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. \"Point taken\" shows that Anya \u2014",
    options: [
      { id: "a", text: "rejects Rohan's advice" },
      { id: "b", text: "accepts Rohan's advice" },
      { id: "c", text: "changes the debate motion" },
      { id: "d", text: "asks for more time" }
    ],
    answerId: "b",
    explanation: "\"Point taken\" means she acknowledges and accepts what he said.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q09",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. What is the motion being debated?",
    options: [
      { id: "a", text: "Social media should be banned in schools" },
      { id: "b", text: "Homework should be limited to one hour on school nights" },
      { id: "c", text: "Sport should replace all homework" },
      { id: "d", text: "Students should never study at home" }
    ],
    answerId: "b",
    explanation: "The speaker states the motion clearly in the opening: homework limited to one hour on school nights.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q10",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. Which side is the speaker on?",
    options: [
      { id: "a", text: "Opposition" },
      { id: "b", text: "Proposition" },
      { id: "c", text: "Undecided audience" },
      { id: "d", text: "Timekeeper only" }
    ],
    answerId: "b",
    explanation: "The speaker says \"We on the proposition firmly support this motion.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q11",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. The phrase \"To sum up\" signals that the speaker is about to \u2014",
    options: [
      { id: "a", text: "introduce a brand-new unrelated topic" },
      { id: "b", text: "ask the opposition to speak first" },
      { id: "c", text: "restate the main case before closing" },
      { id: "d", text: "apologise for speaking" }
    ],
    answerId: "c",
    explanation: "\"To sum up\" is a concluding marker used before a closing restatement of the case.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q12",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. How does the speaker handle a possible counter-argument?",
    options: [
      { id: "a", text: "By ignoring critics completely" },
      { id: "b", text: "By naming a likely claim (\"less homework means less learning\") and answering it" },
      { id: "c", text: "By asking the judges to invent evidence" },
      { id: "d", text: "By changing the motion mid-speech" }
    ],
    answerId: "b",
    explanation: "Anticipating critics and answering them strengthens a proposition speech.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q13",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. Which claim is supported with a reason about concentration?",
    options: [
      { id: "a", text: "Family meals are unnecessary" },
      { id: "b", text: "After about sixty minutes, concentration falls for most adolescents" },
      { id: "c", text: "Homework should last four hours" },
      { id: "d", text: "Sport replaces all learning" }
    ],
    answerId: "b",
    explanation: "The first point links the one-hour limit to falling concentration after about sixty minutes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q14",
    prompt: "Thank you. The proposition painted a neat picture, but it skips an important fact. Many subjects \u2014 mathematics and languages especially \u2014 need spaced practice beyond a single hour. If we cap homework rigidly, weaker students lose the extra support they need at home. Moreover, \"one hour\" is not equal for everyone: a quiet desk at home is not the same as a crowded shared room. We on the opposition therefore reject a blanket limit. Instead, we propose clearer guidelines and better-designed tasks, not a one-size-fits-all clock. I ask the house to oppose the motion.\n\nRead Opposition rebuttal P2. The speaker's main purpose is to \u2014",
    options: [
      { id: "a", text: "support the one-hour homework limit" },
      { id: "b", text: "argue against a blanket one-hour limit" },
      { id: "c", text: "cancel the debate" },
      { id: "d", text: "praise the proposition without changes" }
    ],
    answerId: "b",
    explanation: "The opposition rejects a blanket limit and asks the house to oppose the motion.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q15",
    prompt: "Thank you. The proposition painted a neat picture, but it skips an important fact. Many subjects \u2014 mathematics and languages especially \u2014 need spaced practice beyond a single hour. If we cap homework rigidly, weaker students lose the extra support they need at home. Moreover, \"one hour\" is not equal for everyone: a quiet desk at home is not the same as a crowded shared room. We on the opposition therefore reject a blanket limit. Instead, we propose clearer guidelines and better-designed tasks, not a one-size-fits-all clock. I ask the house to oppose the motion.\n\nRead Opposition rebuttal P2. Which line best shows a rebuttal (answering the other side)?",
    options: [
      { id: "a", text: "\"Thank you.\"" },
      { id: "b", text: "\"The proposition painted a neat picture, but it skips an important fact.\"" },
      { id: "c", text: "\"I ask the house to oppose the motion.\"" },
      { id: "d", text: "\"Moreover, 'one hour' is not equal for everyone\u2026\"" }
    ],
    answerId: "b",
    explanation: "Naming the proposition's picture and saying it skips a fact directly challenges the other side \u2014 classic rebuttal framing. D adds evidence; B marks the rebuttal move.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q16",
    prompt: "Thank you. The proposition painted a neat picture, but it skips an important fact. Many subjects \u2014 mathematics and languages especially \u2014 need spaced practice beyond a single hour. If we cap homework rigidly, weaker students lose the extra support they need at home. Moreover, \"one hour\" is not equal for everyone: a quiet desk at home is not the same as a crowded shared room. We on the opposition therefore reject a blanket limit. Instead, we propose clearer guidelines and better-designed tasks, not a one-size-fits-all clock. I ask the house to oppose the motion.\n\nRead Opposition rebuttal P2. \"Moreover\" is used to \u2014",
    options: [
      { id: "a", text: "add a further supporting point" },
      { id: "b", text: "withdraw the previous sentence" },
      { id: "c", text: "greet the judges" },
      { id: "d", text: "change sides mid-debate" }
    ],
    answerId: "a",
    explanation: "\"Moreover\" adds another reason on the same side of the argument.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q17",
    prompt: "Thank you. The proposition painted a neat picture, but it skips an important fact. Many subjects \u2014 mathematics and languages especially \u2014 need spaced practice beyond a single hour. If we cap homework rigidly, weaker students lose the extra support they need at home. Moreover, \"one hour\" is not equal for everyone: a quiet desk at home is not the same as a crowded shared room. We on the opposition therefore reject a blanket limit. Instead, we propose clearer guidelines and better-designed tasks, not a one-size-fits-all clock. I ask the house to oppose the motion.\n\nRead Opposition rebuttal P2. What alternative does the opposition propose instead of a rigid cap?",
    options: [
      { id: "a", text: "Ban all homework forever" },
      { id: "b", text: "Clearer guidelines and better-designed tasks" },
      { id: "c", text: "Four hours of homework nightly" },
      { id: "d", text: "No sport until exams end" }
    ],
    answerId: "b",
    explanation: "The speaker proposes clearer guidelines and better-designed tasks, not a one-size-fits-all clock.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q18",
    prompt: "Good morning, everyone. May I have your attention, please? The Literary Club invites all Classes 7 and 8 students to a Spoken English workshop this Saturday from 10 a.m. to noon in Room 12. Please bring a notebook and a pencil. Those interested should give their names to the Club Secretary by Thursday. Thank you.\n\nRead Assembly announcement O1. The speaker begins with \"May I have your attention, please?\" This is mainly \u2014",
    options: [
      { id: "a", text: "a rude command" },
      { id: "b", text: "a polite way to open a public spoken message" },
      { id: "c", text: "a debate rebuttal" },
      { id: "d", text: "a written notice heading" }
    ],
    answerId: "b",
    explanation: "The phrase politely gathers listeners before an announcement.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q19",
    prompt: "Good morning, everyone. May I have your attention, please? The Literary Club invites all Classes 7 and 8 students to a Spoken English workshop this Saturday from 10 a.m. to noon in Room 12. Please bring a notebook and a pencil. Those interested should give their names to the Club Secretary by Thursday. Thank you.\n\nRead Assembly announcement O1. Who is invited?",
    options: [
      { id: "a", text: "Only teachers" },
      { id: "b", text: "Classes 7 and 8 students" },
      { id: "c", text: "Only Class 9" },
      { id: "d", text: "Parents only" }
    ],
    answerId: "b",
    explanation: "The announcement invites all Classes 7 and 8 students to the workshop.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q20",
    prompt: "Good morning, everyone. May I have your attention, please? The Literary Club invites all Classes 7 and 8 students to a Spoken English workshop this Saturday from 10 a.m. to noon in Room 12. Please bring a notebook and a pencil. Those interested should give their names to the Club Secretary by Thursday. Thank you.\n\nRead Assembly announcement O1. By when must interested students give their names?",
    options: [
      { id: "a", text: "Saturday noon" },
      { id: "b", text: "Thursday" },
      { id: "c", text: "Monday morning" },
      { id: "d", text: "After the workshop" }
    ],
    answerId: "b",
    explanation: "Names should be given to the Club Secretary by Thursday.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q21",
    prompt: "Which reply disagrees politely with \"Homework should be banned completely\"?",
    options: [
      { id: "a", text: "\"That's nonsense.\"" },
      { id: "b", text: "\"I see your concern about stress, but a complete ban may hurt practice in maths.\"" },
      { id: "c", text: "\"You are wrong, full stop.\"" },
      { id: "d", text: "\"Whatever.\"" }
    ],
    answerId: "b",
    explanation: "Acknowledging the other person's point and then offering a reason is respectful disagreement.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q22",
    prompt: "In a formal debate, if your opponent is still speaking, the best action is to \u2014",
    options: [
      { id: "a", text: "shout your next point over them" },
      { id: "b", text: "wait for your turn or raise a point of information if the rules allow" },
      { id: "c", text: "leave the hall" },
      { id: "d", text: "change the motion without permission" }
    ],
    answerId: "b",
    explanation: "Turn-taking and following debate rules keep discussion fair; interrupting by shouting breaks them.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q23",
    prompt: "Which sentence is most suitable for a school debate opening?",
    options: [
      { id: "a", text: "\"Yo, homework sucks, right?\"" },
      { id: "b", text: "\"Honourable judges, we stand firmly for the motion that\u2026\"" },
      { id: "c", text: "\"Um, like, I guess homework is, you know, bad?\"" },
      { id: "d", text: "\"My mom says stuff about this.\"" }
    ],
    answerId: "b",
    explanation: "Debate openings use formal address and a clear stance; slang and heavy fillers weaken the register.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-a-q24",
    prompt: "Choose the best marker to introduce a contrasting idea in a spoken argument.",
    options: [
      { id: "a", text: "\"For example\"" },
      { id: "b", text: "\"In conclusion\"" },
      { id: "c", text: "\"However\"" },
      { id: "d", text: "\"Firstly\"" }
    ],
    answerId: "c",
    explanation: "\"However\" signals contrast. \"For example\" illustrates, \"In conclusion\" closes, and \"Firstly\" sequences.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-eng-ch04-b-q01",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Anya is on the opposition. That means she will argue that \u2014",
    options: [
      { id: "a", text: "social media does more harm than good" },
      { id: "b", text: "the motion is false or overstated \u2014 social media also helps" },
      { id: "c", text: "debates should be cancelled" },
      { id: "d", text: "only judges may speak" }
    ],
    answerId: "b",
    explanation: "Opposition argues against the motion; Anya plans to stress organising campaigns and study groups.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q02",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. What does Anya ask about Rohan's case?",
    options: [
      { id: "a", text: "His strongest point" },
      { id: "b", text: "The judges' names" },
      { id: "c", text: "The bus timetable" },
      { id: "d", text: "Whether lunch is vegetarian" }
    ],
    answerId: "a",
    explanation: "She asks, \"What's your strongest point?\" to understand his case.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q03",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. \"May I suggest you prepare a rebuttal\u2026\" is an example of \u2014",
    options: [
      { id: "a", text: "an order shouted at a junior" },
      { id: "b", text: "a polite suggestion" },
      { id: "c", text: "a written notice heading" },
      { id: "d", text: "a poem" }
    ],
    answerId: "b",
    explanation: "\"May I suggest\u2026\" softens advice into a polite suggestion.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q04",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. \"Formal register it is\" means Anya will \u2014",
    options: [
      { id: "a", text: "speak more carefully and formally in the debate hall" },
      { id: "b", text: "write only in capital letters" },
      { id: "c", text: "refuse to debate" },
      { id: "d", text: "use more slang on purpose" }
    ],
    answerId: "a",
    explanation: "Register means matching tone to the situation; she agrees to speak formally.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q05",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. Which marker begins the speaker's first main reason?",
    options: [
      { id: "a", text: "\"Secondly\"" },
      { id: "b", text: "\"Firstly\"" },
      { id: "c", text: "\"To sum up\"" },
      { id: "d", text: "\"However\"" }
    ],
    answerId: "b",
    explanation: "The first reason is introduced with \"Firstly.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q06",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. Besides study time, which needs does the speaker mention?",
    options: [
      { id: "a", text: "Only video games" },
      { id: "b", text: "Sport, family meals and rest" },
      { id: "c", text: "Longer school days" },
      { id: "d", text: "More exams every week" }
    ],
    answerId: "b",
    explanation: "The second point lists sport, family meals and rest as necessary, not luxuries.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q07",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. The closing line \"I urge you to vote for the motion\" is meant to \u2014",
    options: [
      { id: "a", text: "confuse the judges" },
      { id: "b", text: "persuade the house to support the proposition" },
      { id: "c", text: "surrender the debate" },
      { id: "d", text: "change the topic to sport only" }
    ],
    answerId: "b",
    explanation: "A closing appeal asks listeners to vote with the speaker's side.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q08",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1 and Opposition rebuttal P2. Which statement is accurate?",
    options: [
      { id: "a", text: "Both speakers support a rigid one-hour homework cap" },
      { id: "b", text: "P1 supports the cap; P2 rejects a blanket one-hour limit" },
      { id: "c", text: "Neither speaker mentions homework" },
      { id: "d", text: "P2 agrees completely with P1" }
    ],
    answerId: "b",
    explanation: "P1 argues for the limit; P2 opposes a blanket cap and proposes guidelines instead.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q09",
    prompt: "Thank you. The proposition painted a neat picture, but it skips an important fact. Many subjects \u2014 mathematics and languages especially \u2014 need spaced practice beyond a single hour. If we cap homework rigidly, weaker students lose the extra support they need at home. Moreover, \"one hour\" is not equal for everyone: a quiet desk at home is not the same as a crowded shared room. We on the opposition therefore reject a blanket limit. Instead, we propose clearer guidelines and better-designed tasks, not a one-size-fits-all clock. I ask the house to oppose the motion.\n\nRead Opposition rebuttal P2. Why does the speaker say \"'one hour' is not equal for everyone\"?",
    options: [
      { id: "a", text: "Because clocks are broken in schools" },
      { id: "b", text: "Because home study conditions differ (for example, quiet desk vs crowded room)" },
      { id: "c", text: "Because one hour equals sixty minutes everywhere in the same way for fairness only" },
      { id: "d", text: "Because judges refuse stopwatches" }
    ],
    answerId: "b",
    explanation: "The speaker contrasts a quiet desk with a crowded shared room to show unequal conditions.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q10",
    prompt: "Thank you. The proposition painted a neat picture, but it skips an important fact. Many subjects \u2014 mathematics and languages especially \u2014 need spaced practice beyond a single hour. If we cap homework rigidly, weaker students lose the extra support they need at home. Moreover, \"one hour\" is not equal for everyone: a quiet desk at home is not the same as a crowded shared room. We on the opposition therefore reject a blanket limit. Instead, we propose clearer guidelines and better-designed tasks, not a one-size-fits-all clock. I ask the house to oppose the motion.\n\nRead Opposition rebuttal P2. \"Instead\" signals that the speaker will \u2014",
    options: [
      { id: "a", text: "repeat the proposition's exact plan" },
      { id: "b", text: "offer an alternative proposal" },
      { id: "c", text: "end without a proposal" },
      { id: "d", text: "thank only the timekeeper" }
    ],
    answerId: "b",
    explanation: "\"Instead\" introduces a different course of action \u2014 guidelines and better tasks.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q11",
    prompt: "Good morning, everyone. May I have your attention, please? The Literary Club invites all Classes 7 and 8 students to a Spoken English workshop this Saturday from 10 a.m. to noon in Room 12. Please bring a notebook and a pencil. Those interested should give their names to the Club Secretary by Thursday. Thank you.\n\nRead Assembly announcement O1. What should students bring?",
    options: [
      { id: "a", text: "A cricket bat" },
      { id: "b", text: "A notebook and a pencil" },
      { id: "c", text: "Lunch for the teachers" },
      { id: "d", text: "Nothing at all" }
    ],
    answerId: "b",
    explanation: "The announcement asks them to bring a notebook and a pencil.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q12",
    prompt: "Good morning, everyone. May I have your attention, please? The Literary Club invites all Classes 7 and 8 students to a Spoken English workshop this Saturday from 10 a.m. to noon in Room 12. Please bring a notebook and a pencil. Those interested should give their names to the Club Secretary by Thursday. Thank you.\n\nRead Assembly announcement O1. Where will the workshop be held?",
    options: [
      { id: "a", text: "The playground" },
      { id: "b", text: "Room 12" },
      { id: "c", text: "The city library" },
      { id: "d", text: "The principal's office" }
    ],
    answerId: "b",
    explanation: "The spoken notice places the workshop in Room 12.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q13",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Which behaviour shows good conversational turn-taking?",
    options: [
      { id: "a", text: "Anya asks a question, Rohan answers, then she responds" },
      { id: "b", text: "Both speak at full volume over each other" },
      { id: "c", text: "Rohan ignores every question" },
      { id: "d", text: "Anya leaves before Rohan finishes a sentence every time" }
    ],
    answerId: "a",
    explanation: "Alternating questions and answers is cooperative turn-taking.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q14",
    prompt: "A teammate says, \"Your speech is too long and confusing.\" Which reply is firm but respectful?",
    options: [
      { id: "a", text: "\"You're just jealous.\"" },
      { id: "b", text: "\"I hear you \u2014 I'll cut the third example and tighten the conclusion.\"" },
      { id: "c", text: "\"Don't talk to me.\"" },
      { id: "d", text: "\"Whatever, I don't care.\"" }
    ],
    answerId: "b",
    explanation: "Acknowledging feedback and naming a concrete fix keeps the exchange constructive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q15",
    prompt: "In debate terms, a \"motion\" is \u2014",
    options: [
      { id: "a", text: "the statement being argued for or against" },
      { id: "b", text: "the name of the school bus" },
      { id: "c", text: "a type of homework diary" },
      { id: "d", text: "the judge's lunch order" }
    ],
    answerId: "a",
    explanation: "The motion is the claim under debate \u2014 for example, that homework should be limited.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q16",
    prompt: "Which pair correctly matches marker to job?",
    options: [
      { id: "a", text: "\"Firstly\" = contrast; \"However\" = sequence" },
      { id: "b", text: "\"Firstly\" = sequence; \"However\" = contrast" },
      { id: "c", text: "\"To sum up\" = example; \"For instance\" = conclusion" },
      { id: "d", text: "\"Moreover\" = apology; \"Please\" = evidence" }
    ],
    answerId: "b",
    explanation: "\"Firstly\" orders points; \"However\" introduces contrast.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q17",
    prompt: "Which line fits a friendly chat better than a formal debate?",
    options: [
      { id: "a", text: "\"Honourable judges, we reject the motion.\"" },
      { id: "b", text: "\"To sum up, the evidence favours the opposition.\"" },
      { id: "c", text: "\"Yeah, that point was kinda wild, ngl.\"" },
      { id: "d", text: "\"Moreover, weaker students need spaced practice.\"" }
    ],
    answerId: "c",
    explanation: "Heavy slang and chat abbreviations suit friends, not a formal debate floor.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q18",
    prompt: "**Anya:** Have you finished your opening speech for tomorrow?\n**Rohan:** Almost. The motion is \"Social media does more harm than good for teenagers.\" I'm on the proposition.\n**Anya:** So you argue that it harms more than it helps. What's your strongest point?\n**Rohan:** Firstly, endless scrolling steals study time. Secondly, comparison culture damages self-esteem. Finally, cyberbullying is hard to escape.\n**Anya:** That's clear. I'm opposition. On the other hand, social media helps students organise campaigns and find reliable study groups.\n**Rohan:** Fair enough. May I suggest you prepare a rebuttal for my \"study time\" point? Judges notice when you answer the other side.\n**Anya:** Would you mind if we practise for ten minutes after lunch?\n**Rohan:** Not at all. Let's get cracking \u2014 and please don't use \"like\" every second word in the hall.\n**Anya:** Point taken. Formal register it is.\n\nRead Dialogue D1. Rohan's three harms include scrolling, comparison culture and \u2014",
    options: [
      { id: "a", text: "free libraries" },
      { id: "b", text: "cyberbullying" },
      { id: "c", text: "school gardens" },
      { id: "d", text: "morning assembly" }
    ],
    answerId: "b",
    explanation: "His third point is that cyberbullying is hard to escape.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q19",
    prompt: "Thank you. The proposition painted a neat picture, but it skips an important fact. Many subjects \u2014 mathematics and languages especially \u2014 need spaced practice beyond a single hour. If we cap homework rigidly, weaker students lose the extra support they need at home. Moreover, \"one hour\" is not equal for everyone: a quiet desk at home is not the same as a crowded shared room. We on the opposition therefore reject a blanket limit. Instead, we propose clearer guidelines and better-designed tasks, not a one-size-fits-all clock. I ask the house to oppose the motion.\n\nRead Opposition rebuttal P2. Which subject areas does the speaker say especially need practice beyond one hour?",
    options: [
      { id: "a", text: "Only art and music" },
      { id: "b", text: "Mathematics and languages" },
      { id: "c", text: "Only physical education" },
      { id: "d", text: "Cooking alone" }
    ],
    answerId: "b",
    explanation: "The rebuttal names mathematics and languages as needing spaced practice.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q20",
    prompt: "Choose the most polite way to ask someone to speak more slowly.",
    options: [
      { id: "a", text: "\"Slow down, will you?\"" },
      { id: "b", text: "\"Could you please speak a little more slowly?\"" },
      { id: "c", text: "\"You're too fast. Fix it.\"" },
      { id: "d", text: "\"Blah blah, hurry up.\"" }
    ],
    answerId: "b",
    explanation: "\"Could you please\u2026\" is a standard polite request form.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q21",
    prompt: "Honourable judges, teachers and friends: the motion before us today is that homework should be limited to one hour on school nights. We on the proposition firmly support this motion. Firstly, research shows that after about sixty minutes of focused work, concentration falls sharply for most adolescents. Secondly, students need time for sport, family meals and rest \u2014 none of which are luxuries. Critics may claim that less homework means less learning, but we argue that shorter, well-designed tasks teach more than long, rushed ones. To sum up, limiting homework protects health without lowering standards. I urge you to vote for the motion.\n\nRead Opening speech P1. The speaker claims shorter, well-designed tasks \u2014",
    options: [
      { id: "a", text: "teach more than long, rushed ones" },
      { id: "b", text: "are useless" },
      { id: "c", text: "must last four hours" },
      { id: "d", text: "replace teachers" }
    ],
    answerId: "a",
    explanation: "The speech argues that shorter, well-designed tasks teach more than long, rushed ones.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q22",
    prompt: "Which phrase best softens disagreement in spoken English?",
    options: [
      { id: "a", text: "\"I see your point, but\u2026\"" },
      { id: "b", text: "\"Wrong again.\"" },
      { id: "c", text: "\"As if!\"" },
      { id: "d", text: "\"No way, ever.\"" }
    ],
    answerId: "a",
    explanation: "Softeners acknowledge the other person before presenting a different view.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q23",
    prompt: "A strong debate point usually contains \u2014",
    options: [
      { id: "a", text: "only insults" },
      { id: "b", text: "a claim plus a reason or evidence" },
      { id: "c", text: "only jokes" },
      { id: "d", text: "silence" }
    ],
    answerId: "b",
    explanation: "Persuasive debate links a clear claim to reasons or evidence listeners can evaluate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g8-eng-ch04-b-q24",
    prompt: "Good morning, everyone. May I have your attention, please? The Literary Club invites all Classes 7 and 8 students to a Spoken English workshop this Saturday from 10 a.m. to noon in Room 12. Please bring a notebook and a pencil. Those interested should give their names to the Club Secretary by Thursday. Thank you.\n\nRead Assembly announcement O1. After giving details, the speaker ends with \"Thank you.\" This mainly \u2014",
    options: [
      { id: "a", text: "opens a new debate motion" },
      { id: "b", text: "closes the spoken announcement politely" },
      { id: "c", text: "cancels the workshop" },
      { id: "d", text: "replaces the need for a date" }
    ],
    answerId: "b",
    explanation: "\"Thank you\" is a polite closing for a public announcement.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udde3\ufe0f",
    title: "Speak so listeners can follow",
    body: ["Good speaking is turn-taking, clear points and polite disagreement.", "Discourse markers are road signs: firstly, however, to sum up.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Today we practise spoken English the way it appears in dialogues, debates and real conversations.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Talk toolkit",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: discourse markers, debate roles, rebuttal and register.",
    cards: [
      { label: "Discourse markers", reveal: "Firstly / on the other hand / to sum up \u2014 guide the listener", emoji: "\ud83e\udded" },
      { label: "Proposition & opposition", reveal: "For the motion vs against the motion", emoji: "\u2696\ufe0f" },
      { label: "Rebuttal", reveal: "Answer their strongest point \u2014 don't only repeat yours", emoji: "\ud83d\udd01" },
      { label: "Register", reveal: "Chat allows fillers; debate needs clearer formal speech", emoji: "\ud83c\udf9a\ufe0f" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Upgrade a weak opening",
    visual: "sentence",
    speak: "Weak: Uniforms are boring and I hate them. Stronger: Uniforms limit self-expression without improving learning. The second version states a claim listeners can test.",
    steps: ["Motion: School uniforms should be optional.", "Weak: Uniforms are boring and I hate them.", "Stronger: Uniforms limit self-expression without improving learning.", "Debate language = a claim listeners can test"],
    punchline: "Would you mind if\u2026 keeps disagreement respectful.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Which marker best introduces a contrasting idea?",
    options: [
      { id: "a", text: "Firstly" },
      { id: "b", text: "For example" },
      { id: "c", text: "However" },
      { id: "d", text: "To sum up" }
    ],
    answerId: "c",
    why: "However signals contrast. Firstly sequences; for example illustrates; to sum up concludes.",
    visual: "sentence",
    speak: "Which marker best introduces a contrasting idea?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Debate ready!",
    bullets: ["Claim + reason beats slogans", "Answer the other side in rebuttal", "Match register to the hall, not the corridor", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Debate ready! You are ready for the practice sets.",
  },
];

export const g8EnglishSpoken: ChapterDef = {
  id: "speak-up-debate",
  title: "Speak Up: Dialogue & Debate",
  emoji: "\ud83d\udde3\ufe0f",
  blurb: "Discourse markers, rebuttals & polite speech",
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
  paperTopics: ["comprehension", "vocabulary", "grammar"],
};

export const g8EnglishSpokenQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
