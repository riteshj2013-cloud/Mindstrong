import type { ChapterDef, PrepQuestion } from "../types";

/** Writing - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-eng-ch03-a-q01",
    prompt: "A formal letter to the Municipal Commissioner should open with \u2014",
    options: [
      { id: "a", text: "Hey!" },
      { id: "b", text: "Sir/Madam (or Respected Sir/Madam)" },
      { id: "c", text: "Yo" },
      { id: "d", text: "Dearest friend" }
    ],
    answerId: "b",
    explanation: "A formal letter to an official opens with 'Sir/Madam' or 'Respected Sir/Madam'. 'Dearest friend' is tempting because it is a polite opening, but it belongs in an informal letter, not one to the Municipal Commissioner.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q02",
    prompt: "The subject line of a formal letter should be \u2014",
    options: [
      { id: "a", text: "a long story" },
      { id: "b", text: "only emojis" },
      { id: "c", text: "omitted always" },
      { id: "d", text: "brief and specific" }
    ],
    answerId: "d",
    explanation: "A brief, specific subject line tells the official at once what the letter is about. 'Omitted always' is tempting because informal letters have no subject line, but formal letters need one.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q03",
    prompt: "In a formal letter, where does the subject line go?",
    options: [
      { id: "a", text: "after the receiver's address, before the salutation" },
      { id: "b", text: "after the closing" },
      { id: "c", text: "at the very top, above the sender's address" },
      { id: "d", text: "inside the last paragraph" }
    ],
    answerId: "a",
    explanation: "The subject line comes after the receiver's address and before the salutation (Sir/Madam). Putting it above the sender's address is tempting, but it breaks the standard layout.",
    hints: ["The subject line tells the topic before the letter greets the reader.", "It is not at the end and not above the sender's address; think of the order you read a letter in."]
  },
  {
    id: "g10-eng-ch03-a-q04",
    prompt: "An analytical paragraph should mainly \u2014",
    options: [
      { id: "a", text: "tell a fairy tale" },
      { id: "b", text: "list random adjectives" },
      { id: "c", text: "copy a poem" },
      { id: "d", text: "interpret data with comparisons and a conclusion" }
    ],
    answerId: "d",
    explanation: "An analytical paragraph reads a chart or table, compares the figures and ends with a conclusion. 'List random adjectives' is tempting because good writing uses describing words, but without data and comparison it is not analysis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q05",
    prompt: "In an analytical paragraph, a good opening \u2014",
    options: [
      { id: "a", text: "states what the data shows overall" },
      { id: "b", text: "starts with \"Once upon a time\"" },
      { id: "c", text: "asks the examiner's age" },
      { id: "d", text: "uses only one number with no claim" }
    ],
    answerId: "a",
    explanation: "A strong opening sums up what the data shows overall before going into details. 'Uses only one number with no claim' is tempting because it does use data, but one number without a point does not introduce the analysis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q06",
    prompt: "A newspaper article's headline should be \u2014",
    options: [
      { id: "a", text: "catchy and informative" },
      { id: "b", text: "a full 200-word paragraph" },
      { id: "c", text: "written in all jokes with no topic" },
      { id: "d", text: "blank" }
    ],
    answerId: "a",
    explanation: "A headline must catch the eye and tell the reader the topic quickly. 'A full 200-word paragraph' is tempting because it gives more information, but that is the article body, not a headline.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q07",
    prompt: "Article body usually includes \u2014",
    options: [
      { id: "a", text: "only a greeting" },
      { id: "b", text: "only data table with no words" },
      { id: "c", text: "introduction, problem/discussion, suggestions, conclusion" },
      { id: "d", text: "a shopping list only" }
    ],
    answerId: "c",
    explanation: "An article body moves from introduction to the problem or discussion, then suggestions and a conclusion. 'Only data table with no words' is tempting because articles may use facts, but an article explains them in paragraphs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q08",
    prompt: "A notice must include \u2014",
    options: [
      { id: "a", text: "a salutation such as Dear Sir" },
      { id: "b", text: "heading, date, body, name & designation" },
      { id: "c", text: "a complimentary close like Yours faithfully" },
      { id: "d", text: "your Aadhaar number" }
    ],
    answerId: "b",
    explanation: "A school notice has a heading, date, body, and the writer's name and designation. 'A salutation such as Dear Sir' is tempting because letters begin that way, but a notice is addressed to everyone, so it has no salutation.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q09",
    prompt: "Notices are typically written in \u2014",
    options: [
      { id: "a", text: "only questions" },
      { id: "b", text: "chat slang" },
      { id: "c", text: "third person, concise language" },
      { id: "d", text: "first-person love letter style" }
    ],
    answerId: "c",
    explanation: "Notices use the third person and short, clear sentences because they address a whole group. 'Chat slang' is tempting because it is quick to read, but a notice is formal and must be clear to everyone.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q10",
    prompt: "Story writing needs \u2014",
    options: [
      { id: "a", text: "a notice box" },
      { id: "b", text: "random sentences" },
      { id: "c", text: "beginning, conflict, climax, ending" },
      { id: "d", text: "only a moral with no events" }
    ],
    answerId: "c",
    explanation: "A story needs a beginning, a conflict, a climax and an ending so readers want to follow it. 'Only a moral with no events' is tempting because many stories end with a moral, but without events there is no story.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q11",
    prompt: "In story writing, dialogue should \u2014",
    options: [
      { id: "a", text: "sound natural and move the plot" },
      { id: "b", text: "replace all description always" },
      { id: "c", text: "be in formal letter format" },
      { id: "d", text: "use only one word forever" }
    ],
    answerId: "a",
    explanation: "Good dialogue sounds like real speech and moves the plot forward. 'Replace all description always' is tempting because dialogue is lively, but stories still need description of setting and action.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q12",
    prompt: "Formal letter complaint tone should be \u2014",
    options: [
      { id: "a", text: "abusive" },
      { id: "b", text: "sarcastic slang" },
      { id: "c", text: "romantic" },
      { id: "d", text: "polite but firm" }
    ],
    answerId: "d",
    explanation: "A complaint should be polite but firm, stating the problem clearly and asking for action. 'Sarcastic slang' is tempting because the writer is annoyed, but sarcasm and slang make a formal letter less effective.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q13",
    prompt: "Which belongs in a letter to the editor?",
    options: [
      { id: "a", text: "class timetable only" },
      { id: "b", text: "issue, effects, appeal for action" },
      { id: "c", text: "your lunch menu only" },
      { id: "d", text: "a math derivation only" }
    ],
    answerId: "b",
    explanation: "A letter to the editor raises a public issue, explains its effects and appeals for action. 'Class timetable only' is tempting because it is school-related, but it is not a public issue for newspaper readers.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q14",
    prompt: "Word limit discipline means \u2014",
    options: [
      { id: "a", text: "ignore the task" },
      { id: "b", text: "repeat the same sentence ten times" },
      { id: "c", text: "cover required points without padding" },
      { id: "d", text: "write half a word" }
    ],
    answerId: "c",
    explanation: "Keeping to the word limit means covering every required point without padding. 'Repeat the same sentence ten times' is tempting if you only think of reaching the word count, but repetition adds words, not content.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q15",
    prompt: "In analytical writing, \"respectively\" is used when \u2014",
    options: [
      { id: "a", text: "ending a letter" },
      { id: "b", text: "listing values that map onto a prior list in order" },
      { id: "c", text: "quoting Shakespeare only" },
      { id: "d", text: "describing a storm metaphor" }
    ],
    answerId: "b",
    explanation: "'Respectively' links a list of values to an earlier list in the same order, e.g. 'Delhi and Pune scored 40 and 55 respectively'. 'Ending a letter' is tempting because 'Respectfully' is a letter close, but 'respectively' is a different word.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q16",
    prompt: "A report on a school event should be \u2014",
    options: [
      { id: "a", text: "fictional fantasy only" },
      { id: "b", text: "a rhyme scheme" },
      { id: "c", text: "factual, chronologically clear, in past tense usually" },
      { id: "d", text: "second-person commands only" }
    ],
    answerId: "c",
    explanation: "A report records what happened, so it is factual, in time order and usually in the past tense. 'Second-person commands only' is tempting because notices and instructions use commands, but a report describes rather than instructs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q17",
    prompt: "Email subject lines should avoid \u2014",
    options: [
      { id: "a", text: "vague titles like \"Hello\" with no topic" },
      { id: "b", text: "clear topics" },
      { id: "c", text: "event names" },
      { id: "d", text: "dates when relevant" }
    ],
    answerId: "a",
    explanation: "A subject line like 'Hello' tells the reader nothing about the email's topic, so it should be avoided. 'Dates when relevant' is tempting because extra detail can seem cluttered, but a relevant date makes a subject clearer.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q18",
    prompt: "Formal invitation vs informal: formal invitations \u2014",
    options: [
      { id: "a", text: "omit time and place" },
      { id: "b", text: "use \"Hi dude\"" },
      { id: "c", text: "use third person and fixed layout" },
      { id: "d", text: "are only spoken" }
    ],
    answerId: "c",
    explanation: "Formal invitations use the third person ('The Principal requests the pleasure…') and a fixed layout. 'Omit time and place' is tempting because formal cards look short, but every invitation must give the time and place.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q19",
    prompt: "When describing a graph that rises then falls, you may write that it \u2014",
    options: [
      { id: "a", text: "increased and then declined" },
      { id: "b", text: "cannot be described in words" },
      { id: "c", text: "stayed perfectly flat with no change" },
      { id: "d", text: "must be a poem" }
    ],
    answerId: "a",
    explanation: "A line that rises and then falls is described as having 'increased and then declined'. 'Stayed perfectly flat with no change' is tempting if you only compare the start and end, but the graph clearly rose and fell in between.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q20",
    prompt: "Paragraph unity means \u2014",
    options: [
      { id: "a", text: "only questions" },
      { id: "b", text: "each sentence is a new unrelated topic" },
      { id: "c", text: "no topic sentence ever" },
      { id: "d", text: "all sentences support one main idea" }
    ],
    answerId: "d",
    explanation: "Paragraph unity means every sentence supports one main idea. 'Each sentence is a new unrelated topic' is tempting because it gives variety, but it breaks the paragraph's focus.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q21",
    prompt: "A good concluding sentence in an article \u2014",
    options: [
      { id: "a", text: "insults the reader" },
      { id: "b", text: "introduces three new unrelated topics" },
      { id: "c", text: "repeats the headline only in reverse" },
      { id: "d", text: "sums up and looks forward / calls to act" }
    ],
    answerId: "d",
    explanation: "A good conclusion sums up the article and looks ahead or calls readers to act. 'Repeats the headline only in reverse' is tempting because it links back to the start, but it adds nothing new.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q22",
    prompt: "In a formal letter, the sender's address is usually placed \u2014",
    options: [
      { id: "a", text: "in the subject line" },
      { id: "b", text: "nowhere" },
      { id: "c", text: "after the signature" },
      { id: "d", text: "at the top, before the date" }
    ],
    answerId: "d",
    explanation: "Standard school format: sender address \u2192 date \u2192 receiver \u2192 subject \u2192 salutation.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q23",
    prompt: "Show, don't tell in stories means \u2014",
    options: [
      { id: "a", text: "avoid plot" },
      { id: "b", text: "use actions and senses instead of only labels like \"she was sad\"" },
      { id: "c", text: "only use adjectives" },
      { id: "d", text: "never describe feelings" }
    ],
    answerId: "b",
    explanation: "'Show, don't tell' means using actions and senses (her voice shook, she stared at the floor) instead of only saying 'she was sad'. 'Only use adjectives' is tempting because adjectives describe, but words like 'sad' are exactly the labels to avoid.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q24",
    prompt: "Editing a draft, you should first check \u2014",
    options: [
      { id: "a", text: "adding slang" },
      { id: "b", text: "task fulfilment and clarity, then grammar" },
      { id: "c", text: "font colour only" },
      { id: "d", text: "removing the subject" }
    ],
    answerId: "b",
    explanation: "First check that the draft does the task and is clear, then fix grammar and spelling. 'Font colour only' is tempting because it is easy to change, but it does not affect what the writing says.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-eng-ch03-b-q01",
    prompt: "Which sentence suits a formal complaint letter?",
    options: [
      { id: "a", text: "Water is like, gone, lol." },
      { id: "b", text: "I request you to look into the irregular water supply in our area." },
      { id: "c", text: "Supply me feelings." },
      { id: "d", text: "Fix it now, dude." }
    ],
    answerId: "b",
    explanation: "'I request you to look into the irregular water supply in our area' is polite, formal and names the problem. 'Fix it now, dude' is tempting because it is direct, but it is rude and informal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q02",
    prompt: "An analytical paragraph on a bar graph comparing two years should \u2014",
    options: [
      { id: "a", text: "ignore the numbers" },
      { id: "b", text: "invent categories not shown" },
      { id: "c", text: "compare categories and note the largest change" },
      { id: "d", text: "only describe colours of the bars" }
    ],
    answerId: "c",
    explanation: "A good paragraph compares the categories across the two years and points out the biggest change. 'Only describe colours of the bars' is tempting because colours are visible, but they carry no information about the data.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q03",
    prompt: "Notice word \"Compulsory\" is used to \u2014",
    options: [
      { id: "a", text: "mean optional" },
      { id: "b", text: "stress that attendance/action is required" },
      { id: "c", text: "end the notice" },
      { id: "d", text: "decorate the page" }
    ],
    answerId: "b",
    explanation: "'Compulsory' tells readers that attending or acting is required. 'Mean optional' is tempting because both words describe whether you must attend, but optional is the opposite of compulsory.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q04",
    prompt: "Story prompt \"Write a story beginning with\u2026\" requires you to \u2014",
    options: [
      { id: "a", text: "write a letter instead" },
      { id: "b", text: "use the given line as the opening" },
      { id: "c", text: "put the line only at the end" },
      { id: "d", text: "ignore the line" }
    ],
    answerId: "b",
    explanation: "The given line must be the first line of your story. 'Put the line only at the end' is tempting because some prompts give an ending, but 'beginning with' means it opens the story.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q05",
    prompt: "In letters to the editor, you usually do NOT \u2014",
    options: [
      { id: "a", text: "suggest solutions" },
      { id: "b", text: "end with a courteous close" },
      { id: "c", text: "state the public issue" },
      { id: "d", text: "demand personal revenge with threats" }
    ],
    answerId: "d",
    explanation: "Letters to the editor stay civil, so threats and demands for revenge do not belong there. 'Suggest solutions' is tempting as something to leave out, but suggestions are a normal part of such letters.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q06",
    prompt: "Coherence devices include \u2014",
    options: [
      { id: "a", text: "random emojis only" },
      { id: "b", text: "changing topic every three words" },
      { id: "c", text: "removing all verbs" },
      { id: "d", text: "however, furthermore, for example" }
    ],
    answerId: "d",
    explanation: "Words like however, furthermore and for example link ideas so the reader can follow. 'Random emojis only' is tempting because emojis show feeling, but they do not show how one idea connects to the next.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q07",
    prompt: "A report title should be \u2014",
    options: [
      { id: "a", text: "absent" },
      { id: "b", text: "a riddle" },
      { id: "c", text: "longer than the report" },
      { id: "d", text: "clear and factual" }
    ],
    answerId: "d",
    explanation: "A report title should be clear and factual so readers know the event at a glance. 'A riddle' is tempting because it might grab attention, but a report must inform, not puzzle.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q08",
    prompt: "When data shows \"45% \u2192 60%\", a precise phrase is \u2014",
    options: [
      { id: "a", text: "rose by 15 percentage points" },
      { id: "b", text: "unchanged" },
      { id: "c", text: "fell by 45%" },
      { id: "d", text: "doubled" }
    ],
    answerId: "a",
    explanation: "From 45% to 60% is a rise of 60 − 45 = 15 percentage points. 'Doubled' is tempting because it is a big rise, but doubling 45% would give 90%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q09",
    prompt: "Formal emails should include \u2014",
    options: [
      { id: "a", text: "password in subject" },
      { id: "b", text: "clear subject, salutation, body, closing, name" },
      { id: "c", text: "only GIFs" },
      { id: "d", text: "only attachments with no text" }
    ],
    answerId: "b",
    explanation: "A formal email has a clear subject, salutation, body, closing and the sender's name. 'Only attachments with no text' is tempting because attachments carry the content, but the email still needs a short message.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q10",
    prompt: "In story endings, a twist works if it \u2014",
    options: [
      { id: "a", text: "stops mid-sentence always" },
      { id: "b", text: "contradicts everything with no link" },
      { id: "c", text: "lists grammar rules" },
      { id: "d", text: "is prepared by earlier hints" }
    ],
    answerId: "d",
    explanation: "A twist works when earlier clues prepare for it, so it surprises but still makes sense. 'Contradicts everything with no link' is tempting because it is surprising, but readers feel cheated when nothing set it up.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q11",
    prompt: "Which is the best thesis-style opener for an article on plastic waste?",
    options: [
      { id: "a", text: "I like bottles." },
      { id: "b", text: "Plastic exists." },
      { id: "c", text: "Plastic waste is choking our drains and demands urgent community action." },
      { id: "d", text: "Once there was a dragon." }
    ],
    answerId: "c",
    explanation: "'Plastic waste is choking our drains and demands urgent community action' states the issue, its impact and what should happen. 'Plastic exists' is tempting because it is on topic, but it makes no point.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q12",
    prompt: "Register for a letter to a friend about a trip is \u2014",
    options: [
      { id: "a", text: "informal but clear" },
      { id: "b", text: "notices format" },
      { id: "c", text: "same as to the President without change" },
      { id: "d", text: "legal affidavit style only" }
    ],
    answerId: "a",
    explanation: "A letter to a friend uses an informal but clear register. 'Same as to the President without change' is tempting because good manners always matter, but writing to a friend that formally sounds stiff.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q13",
    prompt: "Proofreading mark for a spelling error means you should \u2014",
    options: [
      { id: "a", text: "correct the word's spelling" },
      { id: "b", text: "change the topic" },
      { id: "c", text: "delete the whole essay" },
      { id: "d", text: "add more errors" }
    ],
    answerId: "a",
    explanation: "A spelling mark means you should correct the spelling of that word. 'Change the topic' is tempting only if you think the mark criticises content, but it points to a spelling mistake.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q14",
    prompt: "In analytical paragraphs, avoid \u2014",
    options: [
      { id: "a", text: "overview sentences" },
      { id: "b", text: "clear conclusions" },
      { id: "c", text: "comparatives like higher/lower" },
      { id: "d", text: "personal stories unrelated to the data" }
    ],
    answerId: "d",
    explanation: "An analytical paragraph should stay on the data, so personal stories unrelated to it should be left out. 'Comparatives like higher/lower' is tempting as something to avoid, but comparatives are exactly what analysis needs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q15",
    prompt: "A bio-sketch should highlight \u2014",
    options: [
      { id: "a", text: "key life facts and achievements in organised order" },
      { id: "b", text: "imaginary adventures" },
      { id: "c", text: "exam board codes" },
      { id: "d", text: "a list of the person's favourite foods" }
    ],
    answerId: "a",
    explanation: "A bio-sketch presents the person's key life facts and achievements in a clear order. 'A list of the person's favourite foods' is tempting because it is personal information, but it is not a key fact about their life.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q16",
    prompt: "Diary entry format usually includes \u2014",
    options: [
      { id: "a", text: "notice heading NOTICE" },
      { id: "b", text: "Yours faithfully" },
      { id: "c", text: "date and first-person feelings about events" },
      { id: "d", text: "a formal subject line" }
    ],
    answerId: "c",
    explanation: "A diary entry has a date and records your own feelings about events in the first person. 'A formal subject line' is tempting because letters and emails have one, but a diary is private and informal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q17",
    prompt: "When the task says \"Write a letter to the Principal,\" the receiver's address is \u2014",
    options: [
      { id: "a", text: "your friend Rahul" },
      { id: "b", text: "the Municipal Commissioner always" },
      { id: "c", text: "the Principal, School name/place" },
      { id: "d", text: "no receiver" }
    ],
    answerId: "c",
    explanation: "The receiver is the person the task names: the Principal, with the school's name and place. 'The Municipal Commissioner always' is tempting because many formal letters go to officials, but this letter is addressed to the Principal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q18",
    prompt: "To show contrast between two data series, use \u2014",
    options: [
      { id: "a", text: "meanwhile as the only option forever" },
      { id: "b", text: "while / whereas / however" },
      { id: "c", text: "no linker" },
      { id: "d", text: "because only" }
    ],
    answerId: "b",
    explanation: "Linkers like while, whereas and however show contrast between the two series. 'Because only' is tempting because it is also a linker, but 'because' gives a reason; it does not contrast.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q19",
    prompt: "A weak article conclusion \u2014",
    options: [
      { id: "a", text: "restates the call to action" },
      { id: "b", text: "trails off with \"That is all\" and no takeaway" },
      { id: "c", text: "links back to the lead" },
      { id: "d", text: "offers a practical step" }
    ],
    answerId: "b",
    explanation: "Ending with 'That is all' gives the reader no takeaway, so it is a weak conclusion. 'Restates the call to action' is tempting because it repeats something, but restating the action is a strong way to end.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q20",
    prompt: "Process writing order:",
    options: [
      { id: "a", text: "plan \u2192 draft \u2192 revise \u2192 proofread" },
      { id: "b", text: "proofread \u2192 plan \u2192 ignore task" },
      { id: "c", text: "publish without reading" },
      { id: "d", text: "memorise one essay for all topics" }
    ],
    answerId: "a",
    explanation: "Good writing moves from plan to draft to revise to proofread. 'Proofread → plan → ignore task' is tempting because proofreading matters, but you cannot proofread before you have written anything.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q21",
    prompt: "In a debate-style article, you should \u2014",
    options: [
      { id: "a", text: "use only questions" },
      { id: "b", text: "avoid any claim" },
      { id: "c", text: "insult opponents personally" },
      { id: "d", text: "acknowledge another view then rebut with reasons" }
    ],
    answerId: "d",
    explanation: "A fair debate article admits the other view and then answers it with reasons. 'Avoid any claim' is tempting because it seems balanced, but a debate article must take a clear position.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q22",
    prompt: "Quantifiers in data writing: \"a significant majority\" implies \u2014",
    options: [
      { id: "a", text: "exactly 1%" },
      { id: "b", text: "zero" },
      { id: "c", text: "well over half" },
      { id: "d", text: "all missing values" }
    ],
    answerId: "c",
    explanation: "A majority means more than half, and 'significant' says it is clearly more than half. 'Exactly 1%' is tempting because 'significant' can mean statistically notable, but 1% is far below a majority.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q23",
    prompt: "School magazine feature on a teacher should be \u2014",
    options: [
      { id: "a", text: "anonymous insults" },
      { id: "b", text: "a math proof only" },
      { id: "c", text: "respectful, specific anecdotes, readable" },
      { id: "d", text: "a formal FIR" }
    ],
    answerId: "c",
    explanation: "A feature on a teacher should be respectful and readable and use specific stories about them. 'A formal FIR' is tempting because it is a factual document, but an FIR is a police complaint, not a magazine feature.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q24",
    prompt: "If the visual shows three bars for 2019, 2021, 2023, your paragraph must \u2014",
    options: [
      { id: "a", text: "mention all three years or clearly justify a focus" },
      { id: "b", text: "ignore years" },
      { id: "c", text: "mention only 1990" },
      { id: "d", text: "change them to months secretly" }
    ],
    answerId: "a",
    explanation: "The paragraph should cover all three years shown, or clearly explain why it focuses on some. 'Ignore years' is tempting if you only compare heights of bars, but the years are what the bars compare.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u270d\ufe0f",
    title: "Writing",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Match form to purpose: letter, article, notice, story, data paragraph.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Formal letters", reveal: "Format, tone, clear ask", emoji: "\u2709\ufe0f" },
      { label: "Analytical para", reveal: "Overview \u2192 compare \u2192 conclude", emoji: "\ud83d\udcca" },
      { label: "Article & notice", reveal: "Headline/box + structured body", emoji: "\ud83d\udcf0" },
      { label: "Story", reveal: "Arc, detail, dialogue", emoji: "\ud83d\udcd5" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Unknown official: end the letter with \u2014",
    options: [
        { id: "a", text: "Yours faithfully" },
        { id: "b", text: "Yours lovingly" },
        { id: "c", text: "See you" },
        { id: "d", text: "Bye" }
    ],
    answerId: "a",
    why: "When you don't use the person's name, close with Yours faithfully.",
    visual: "sentence",
    speak: "Unknown official: end the letter with \u2014",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Writing toolkit", "Audience & purpose", "Format first", "Revise for clarity"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10EnglishWriting: ChapterDef = {
  id: "writing",
  title: "Writing",
  emoji: "\u270d\ufe0f",
  blurb: "Letters, articles, notices & data paras",
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
  paperTopics: ["comprehension", "grammar"],
};

export const g10EnglishWritingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
