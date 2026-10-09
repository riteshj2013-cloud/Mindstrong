import type { ChapterDef, PrepQuestion } from "../types";

/** Writing - authored olympiad-style content (original). */

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
    explanation: "Formal register uses Sir/Madam.",
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
    explanation: "A clear subject helps the official file and act.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q03",
    prompt: "Closing a formal letter to an unknown official: \u2014",
    options: [
      { id: "a", text: "Yours faithfully" },
      { id: "b", text: "See ya" },
      { id: "c", text: "Yours lovingly" },
      { id: "d", text: "Thnx" }
    ],
    answerId: "a",
    explanation: "Unknown recipient \u2192 Yours faithfully; named \u2192 Yours sincerely.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Exam analytical paras read a chart/table and comment.",
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
    explanation: "Overview sentence before details.",
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
    explanation: "Headlines attract and inform quickly.",
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
    explanation: "Structured argumentative/informative flow.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q08",
    prompt: "A notice must include \u2014",
    options: [
      { id: "a", text: "a formal letter salutation Dear Sir inside notice box only always" },
      { id: "b", text: "heading, date, body, name & designation" },
      { id: "c", text: "only a poem" },
      { id: "d", text: "your Aadhaar number" }
    ],
    answerId: "b",
    explanation: "Standard school notice format.",
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
    explanation: "Impersonal and brief.",
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
    explanation: "Narrative arc keeps readers engaged.",
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
    explanation: "Dialogue reveals character and advances action.",
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
    explanation: "Respectful language with clear request for action.",
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
    explanation: "Public issue + stance + call to readers/authorities.",
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
    explanation: "Stay on task and within limits.",
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
    explanation: "Keeps parallel lists aligned.",
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
    explanation: "Reports record what happened.",
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
    explanation: "\"Hello\" doesn't help prioritisation.",
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
    explanation: "School formal invites are structured and impersonal.",
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
    explanation: "Name the trend: rise, then fall.",
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
    explanation: "One paragraph, one job.",
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
    explanation: "Closure with purpose.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-a-q22",
    prompt: "In a formal letter, the sender's address is usually placed \u2014",
    options: [
      { id: "a", text: "in the subject line" },
      { id: "b", text: "nowhere" },
      { id: "c", text: "after the signature only always in every board identically without variation" },
      { id: "d", text: "at the top (before date), as per format taught" }
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
    explanation: "Concrete detail implies emotion.",
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
    explanation: "Content on-task before surface polish.",
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
    explanation: "Polite request + specific issue.",
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
    explanation: "Comparison is the job.",
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
    explanation: "Signals obligation for the audience.",
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
    explanation: "Obey the stem's constraint.",
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
    explanation: "Threats are inappropriate; civic tone matters.",
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
    explanation: "Linkers guide the reader.",
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
    explanation: "Readers need to know the event at a glance.",
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
    explanation: "60\u221245=15 percentage points (not \"rose by 15%\" of 45).",
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
    explanation: "Same courtesy as letters, tighter.",
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
    explanation: "Fair twists feel surprising yet earned.",
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
    explanation: "States issue + stakes + direction.",
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
    explanation: "Friendly tone, contractions OK.",
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
    explanation: "Fix the indicated mistake.",
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
    explanation: "Stay data-centred.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q15",
    prompt: "A bio-sketch should highlight \u2014",
    options: [
      { id: "a", text: "key life facts and achievements in organised order" },
      { id: "b", text: "fictional powers only always" },
      { id: "c", text: "exam board codes" },
      { id: "d", text: "only one adjective" }
    ],
    answerId: "a",
    explanation: "Concise factual portrait.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch03-b-q16",
    prompt: "Diary entry format usually includes \u2014",
    options: [
      { id: "a", text: "notice heading NOTICE" },
      { id: "b", text: "Yours faithfully" },
      { id: "c", text: "date and first-person feelings about events" },
      { id: "d", text: "third-person only always" }
    ],
    answerId: "c",
    explanation: "Personal, dated, reflective.",
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
    explanation: "Address the person named in the question.",
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
    explanation: "Contrast linkers clarify comparison.",
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
    explanation: "\"That is all\" adds nothing.",
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
    explanation: "Process beats one-shot panic.",
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
    explanation: "Fairness + reasoned rebuttal.",
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
    explanation: "Majority = more than 50%; significant stresses size.",
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
    explanation: "Human interest with respect.",
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
    explanation: "Cover what the figure actually shows.",
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
