import type { ChapterDef, PrepQuestion } from "../types";

/** Kind Voices — Grade 4 Spoken English & Situations (original). */

const SET_A: PrepQuestion[] = [
{
    id: "g4-eng-ch04-a-q01",
    prompt: "**Librarian:** Good afternoon, Aarav. How may I help you?\n**Aarav:** Good afternoon, ma'am. May I borrow this book on rivers, please?\n**Librarian:** Yes. Please return it by next Friday.\n**Aarav:** Thank you, ma'am. I will.\n**Librarian:** You're welcome. Enjoy reading!\n\nRead the dialogue. Which line shows a polite request?",
    options: [
      { id: "a", text: "\"May I borrow this book on rivers, please?\"" },
      { id: "b", text: "\"Yes. Please return it by next Friday.\"" },
      { id: "c", text: "\"You're welcome. Enjoy reading!\"" },
      { id: "d", text: "\"I will.\"" }
    ],
    answerId: "a",
    explanation: "\"May I\" and \"please\" make a request polite and respectful.",
    hints: ["Look for May I or Could I with please.", "A polite request asks, not orders."],
  },
{
    id: "g4-eng-ch04-a-q02",
    prompt: "**Librarian:** Good afternoon, Aarav. How may I help you?\n**Aarav:** Good afternoon, ma'am. May I borrow this book on rivers, please?\n**Librarian:** Yes. Please return it by next Friday.\n**Aarav:** Thank you, ma'am. I will.\n**Librarian:** You're welcome. Enjoy reading!\n\nRead the dialogue. How does Aarav greet the librarian?",
    options: [
      { id: "a", text: "He shouts Hello!" },
      { id: "b", text: "He says Good afternoon, ma'am." },
      { id: "c", text: "He says Hey, give me a book." },
      { id: "d", text: "He does not greet her." }
    ],
    answerId: "b",
    explanation: "Aarav says \"Good afternoon, ma'am,\" which is a polite greeting for an older person.",
    hints: ["Match the greeting to the time of day and the person.", "Ma'am shows respect for a grown-up."],
  },
{
    id: "g4-eng-ch04-a-q03",
    prompt: "**Librarian:** Good afternoon, Aarav. How may I help you?\n**Aarav:** Good afternoon, ma'am. May I borrow this book on rivers, please?\n**Librarian:** Yes. Please return it by next Friday.\n**Aarav:** Thank you, ma'am. I will.\n**Librarian:** You're welcome. Enjoy reading!\n\nRead the dialogue. What should Aarav do by next Friday?",
    options: [
      { id: "a", text: "Buy a new book." },
      { id: "b", text: "Clean the library." },
      { id: "c", text: "Return the book." },
      { id: "d", text: "Write a poem." }
    ],
    answerId: "c",
    explanation: "The librarian says to return the book by next Friday.",
    hints: ["Find the librarian's instruction.", "Return means bring the book back."],
  },
{
    id: "g4-eng-ch04-a-q04",
    prompt: "**Shopkeeper:** Hello! What would you like?\n**Meera:** Hello, uncle. Could I have half a kilo of apples, please?\n**Shopkeeper:** Of course. Here you are.\n**Meera:** Thank you. How much is that?\n**Shopkeeper:** Forty rupees.\n**Meera:** Here is fifty. Please keep the change — oh, wait, here is exact change.\n**Shopkeeper:** Thank you. Come again!\n\nRead the dialogue. Which words make Meera's request polite?",
    options: [
      { id: "a", text: "Give me now" },
      { id: "b", text: "I want that" },
      { id: "c", text: "Hurry up" },
      { id: "d", text: "Could I … please" }
    ],
    answerId: "d",
    explanation: "\"Could I\" and \"please\" soften a request. Orders like \"Give me\" sound rude.",
    hints: ["Polite asks often use Could I or May I.", "Cross out bossy orders."],
  },
{
    id: "g4-eng-ch04-a-q05",
    prompt: "**Shopkeeper:** Hello! What would you like?\n**Meera:** Hello, uncle. Could I have half a kilo of apples, please?\n**Shopkeeper:** Of course. Here you are.\n**Meera:** Thank you. How much is that?\n**Shopkeeper:** Forty rupees.\n**Meera:** Here is fifty. Please keep the change — oh, wait, here is exact change.\n**Shopkeeper:** Thank you. Come again!\n\nRead the dialogue. Why does Meera say \"uncle\" to the shopkeeper?",
    options: [
      { id: "a", text: "In India, children often use uncle or auntie as a respectful way to address an older person." },
      { id: "b", text: "He is her real uncle from her family." },
      { id: "c", text: "She is joking and being silly." },
      { id: "d", text: "She does not know his name so she is rude." }
    ],
    answerId: "a",
    explanation: "Calling an older shopkeeper \"uncle\" is a common respectful habit in Indian homes and markets.",
    hints: ["Think about respectful ways children speak to elders.", "It is not always a family uncle."],
  },
{
    id: "g4-eng-ch04-a-q06",
    prompt: "**Shopkeeper:** Hello! What would you like?\n**Meera:** Hello, uncle. Could I have half a kilo of apples, please?\n**Shopkeeper:** Of course. Here you are.\n**Meera:** Thank you. How much is that?\n**Shopkeeper:** Forty rupees.\n**Meera:** Here is fifty. Please keep the change — oh, wait, here is exact change.\n**Shopkeeper:** Thank you. Come again!\n\nRead the dialogue. Which is the kindest closing from the shopkeeper?",
    options: [
      { id: "a", text: "\"Pay faster next time.\"" },
      { id: "b", text: "\"Come again!\"" },
      { id: "c", text: "\"Don't come back.\"" },
      { id: "d", text: "\"Whatever.\"" }
    ],
    answerId: "b",
    explanation: "\"Come again!\" welcomes the customer kindly. The other lines sound unfriendly.",
    hints: ["Kind closings invite the person back.", "Cross out rude or cold lines."],
  },
{
    id: "g4-eng-ch04-a-q07",
    prompt: "**Riya:** Hello, this is Riya speaking.\n**Caller:** Hello, Riya. May I speak to your mother, please?\n**Riya:** She is in a meeting. May I take a message?\n**Caller:** Yes. Please tell her that Mrs. Khan called about the PTA meeting.\n**Riya:** I will tell her. Thank you for calling.\n**Caller:** Thank you, Riya. Bye!\n\nRead the dialogue. Why does Riya say, \"May I take a message?\"",
    options: [
      { id: "a", text: "Riya wants to end the call rudely." },
      { id: "b", text: "Riya does not like Mrs. Khan." },
      { id: "c", text: "Her mother is busy, so Riya offers to write down the caller's words." },
      { id: "d", text: "Riya wants to keep the phone for herself." }
    ],
    answerId: "c",
    explanation: "When someone is unavailable, a polite helper offers to take a message.",
    hints: ["Mother is in a meeting — she cannot talk now.", "Taking a message is helpful and polite."],
  },
{
    id: "g4-eng-ch04-a-q08",
    prompt: "**Riya:** Hello, this is Riya speaking.\n**Caller:** Hello, Riya. May I speak to your mother, please?\n**Riya:** She is in a meeting. May I take a message?\n**Caller:** Yes. Please tell her that Mrs. Khan called about the PTA meeting.\n**Riya:** I will tell her. Thank you for calling.\n**Caller:** Thank you, Riya. Bye!\n\nRead the dialogue. How does Riya introduce herself on the phone?",
    options: [
      { id: "a", text: "\"Who are you? What do you want?\"" },
      { id: "b", text: "\"Yeah?\"" },
      { id: "c", text: "\"Mum is not here. Bye.\"" },
      { id: "d", text: "\"Hello, this is Riya speaking.\"" }
    ],
    answerId: "d",
    explanation: "A clear phone greeting names who is speaking: \"This is Riya speaking.\"",
    hints: ["Good phone manners start with a clear name.", "Cross out abrupt or rude openings."],
  },
{
    id: "g4-eng-ch04-a-q09",
    prompt: "**Riya:** Hello, this is Riya speaking.\n**Caller:** Hello, Riya. May I speak to your mother, please?\n**Riya:** She is in a meeting. May I take a message?\n**Caller:** Yes. Please tell her that Mrs. Khan called about the PTA meeting.\n**Riya:** I will tell her. Thank you for calling.\n**Caller:** Thank you, Riya. Bye!\n\nRead the dialogue. What message should Riya pass on?",
    options: [
      { id: "a", text: "Mrs. Khan called about the PTA meeting." },
      { id: "b", text: "Mrs. Khan wants apples." },
      { id: "c", text: "The library book is late." },
      { id: "d", text: "School is closed tomorrow." }
    ],
    answerId: "a",
    explanation: "The caller asks Riya to tell her mother that Mrs. Khan called about the PTA meeting.",
    hints: ["Copy the caller's exact reason for calling.", "Ignore details that were never said."],
  },
{
    id: "g4-eng-ch04-a-q10",
    prompt: "**Teacher:** Class, please take out your notebooks.\n**Kabir:** Excuse me, ma'am. May I sharpen my pencil?\n**Teacher:** Yes, Kabir. Please be quick.\n**Kabir:** Thank you, ma'am.\n**Ananya:** Ma'am, I forgot my eraser at home.\n**Teacher:** You may borrow one from a friend. Next time, pack carefully.\n**Ananya:** Sorry, ma'am. I will remember.\n\nRead the dialogue. Why does Kabir say \"Excuse me, ma'am\" before asking?",
    options: [
      { id: "a", text: "He wants to leave the school." },
      { id: "b", text: "He gets the teacher's attention politely before speaking." },
      { id: "c", text: "He is angry with the teacher." },
      { id: "d", text: "He is answering a maths sum." }
    ],
    answerId: "b",
    explanation: "\"Excuse me\" is a polite way to interrupt or get someone's attention.",
    hints: ["Excuse me softens an interruption.", "He asks before sharpening his pencil."],
  },
{
    id: "g4-eng-ch04-a-q11",
    prompt: "**Teacher:** Class, please take out your notebooks.\n**Kabir:** Excuse me, ma'am. May I sharpen my pencil?\n**Teacher:** Yes, Kabir. Please be quick.\n**Kabir:** Thank you, ma'am.\n**Ananya:** Ma'am, I forgot my eraser at home.\n**Teacher:** You may borrow one from a friend. Next time, pack carefully.\n**Ananya:** Sorry, ma'am. I will remember.\n\nRead the dialogue. Ananya forgot her eraser. Which reply is most polite?",
    options: [
      { id: "a", text: "\"So what? It's only an eraser.\"" },
      { id: "b", text: "\"You should give me yours.\"" },
      { id: "c", text: "\"Sorry, ma'am. I will remember.\"" },
      { id: "d", text: "\"I don't care.\"" }
    ],
    answerId: "c",
    explanation: "Saying sorry and promising to do better shows responsibility and respect.",
    hints: ["Own the mistake gently.", "Cross out rude or careless replies."],
  },
{
    id: "g4-eng-ch04-a-q12",
    prompt: "Your neighbour Aunty Geeta visits in the morning. What is the best greeting?",
    options: [
      { id: "a", text: "What do you want?" },
      { id: "b", text: "Go away." },
      { id: "c", text: "Who cares?" },
      { id: "d", text: "Good morning, Aunty!" }
    ],
    answerId: "d",
    explanation: "\"Good morning\" matches the time of day and \"Aunty\" shows respect.",
    hints: ["Match greeting to morning/afternoon/evening.", "Use a respectful name for elders."],
  },
{
    id: "g4-eng-ch04-a-q13",
    prompt: "You bump into a classmate in the corridor by mistake. What should you say?",
    options: [
      { id: "a", text: "Sorry! Are you all right?" },
      { id: "b", text: "Watch where you walk!" },
      { id: "c", text: "Haha, that was funny." },
      { id: "d", text: "Nothing — walk away." }
    ],
    answerId: "a",
    explanation: "Saying sorry and checking if they are fine is kind and responsible.",
    hints: ["Accidents need a quick sorry.", "Ask if the other person is okay."],
  },
{
    id: "g4-eng-ch04-a-q14",
    prompt: "You need to borrow a ruler from your friend during art class. Choose the polite request.",
    options: [
      { id: "a", text: "Give me your ruler now." },
      { id: "b", text: "Could I borrow your ruler for a minute, please?" },
      { id: "c", text: "Hand it over." },
      { id: "d", text: "I'm taking this." }
    ],
    answerId: "b",
    explanation: "\"Could I… please?\" asks permission. The other lines sound like orders.",
    hints: ["Polite requests ask; they do not grab.", "Please softens the ask."],
  },
{
    id: "g4-eng-ch04-a-q15",
    prompt: "Someone says \"Thank you\" after you hold the door. What is a kind reply?",
    options: [
      { id: "a", text: "Finally!" },
      { id: "b", text: "You owe me." },
      { id: "c", text: "You're welcome." },
      { id: "d", text: "Whatever." }
    ],
    answerId: "c",
    explanation: "\"You're welcome\" (or \"My pleasure\") is the kind reply to thank you.",
    hints: ["Thank you pairs with You're welcome.", "Cross out cold or boastful replies."],
  },
{
    id: "g4-eng-ch04-a-q16",
    prompt: "At the school gate, the guard says \"Good evening.\" You arrive after sunset. Best reply?",
    options: [
      { id: "a", text: "Good morning!" },
      { id: "b", text: "Hiya dude!" },
      { id: "c", text: "Silent stare." },
      { id: "d", text: "Good evening, uncle." }
    ],
    answerId: "d",
    explanation: "Return the same time-of-day greeting and add a respectful address.",
    hints: ["Evening greeting matches after sunset.", "Uncle is respectful for an older guard."],
  },
{
    id: "g4-eng-ch04-a-q17",
    prompt: "Your friend offers you a ladoo. You do not want one. Kindest reply?",
    options: [
      { id: "a", text: "No thank you. It looks lovely, though!" },
      { id: "b", text: "Yuck, I hate that." },
      { id: "c", text: "Are you trying to make me fat?" },
      { id: "d", text: "Throw it away." }
    ],
    answerId: "a",
    explanation: "You can say no politely and still be kind about the offer.",
    hints: ["Decline with thank you.", "Never insult the food or the giver."],
  },
{
    id: "g4-eng-ch04-a-q18",
    prompt: "You want to ask a stranger for directions to the park. Best opening?",
    options: [
      { id: "a", text: "Hey you! Where's the park?" },
      { id: "b", text: "Excuse me, could you please tell me the way to the park?" },
      { id: "c", text: "Move. I need help." },
      { id: "d", text: "Tell me now or else." }
    ],
    answerId: "b",
    explanation: "\"Excuse me\" plus \"could you please\" is the safe, polite way to ask a stranger.",
    hints: ["Start with Excuse me for strangers.", "Add please to the question."],
  },
{
    id: "g4-eng-ch04-a-q19",
    prompt: "On a video call with Dadi, the screen freezes. Kindest thing to say when it works again?",
    options: [
      { id: "a", text: "This is so boring." },
      { id: "b", text: "You talk too much." },
      { id: "c", text: "Sorry, Dadi — the call paused. Can you hear me now?" },
      { id: "d", text: "I'm hanging up. Bye forever." }
    ],
    answerId: "c",
    explanation: "Explain the problem calmly and check if she can hear you — patient and kind.",
    hints: ["Tech glitches need a calm explanation.", "Check that the other person can hear you."],
  },
{
    id: "g4-eng-ch04-a-q20",
    prompt: "A classmate wins a drawing prize. What is an appropriate reply?",
    options: [
      { id: "a", text: "I deserved it more than you." },
      { id: "b", text: "Prizes are stupid." },
      { id: "c", text: "Lucky you — teachers are unfair." },
      { id: "d", text: "Congratulations! Your drawing looked wonderful." }
    ],
    answerId: "d",
    explanation: "Congratulating and praising the work is kind. Jealous comments hurt friends.",
    hints: ["Celebrate others' wins.", "Cross out jealous or mean lines."],
  },
{
    id: "g4-eng-ch04-a-q21",
    prompt: "You are late to assembly. Teacher asks why. Best reply?",
    options: [
      { id: "a", text: "Sorry, ma'am. The auto was stuck in traffic. I will leave home earlier." },
      { id: "b", text: "Not my fault. Blame the auto." },
      { id: "c", text: "I don't know. Whatever." },
      { id: "d", text: "You always scold me." }
    ],
    answerId: "a",
    explanation: "Apologise, give a brief honest reason, and show how you will improve.",
    hints: ["Sorry first, then a short reason.", "Offer a plan to do better."],
  },
{
    id: "g4-eng-ch04-a-q22",
    prompt: "Someone says \"Namaste\" when visiting your home. Appropriate reply?",
    options: [
      { id: "a", text: "What a weird word." },
      { id: "b", text: "Namaste! Please come in." },
      { id: "c", text: "We don't say that here — leave." },
      { id: "d", text: "Ignore them." }
    ],
    answerId: "b",
    explanation: "Returning Namaste and welcoming the guest is warm and respectful.",
    hints: ["Return the greeting you receive.", "Invite guests in kindly."],
  },
{
    id: "g4-eng-ch04-a-q23",
    prompt: "You need silence in the library. A friend talks loudly. Kindest whisper?",
    options: [
      { id: "a", text: "Shut up right now!" },
      { id: "b", text: "You are so annoying!" },
      { id: "c", text: "Shh — shall we whisper? Others are reading." },
      { id: "d", text: "I'm telling everyone you are silly." }
    ],
    answerId: "c",
    explanation: "A soft reminder with a reason is kind. Insults make noise worse.",
    hints: ["Remind gently and give a reason.", "Libraries need quiet voices."],
  },
{
    id: "g4-eng-ch04-a-q24",
    prompt: "Which reply best matches this situation?\n\nFriend: \"Can you help me carry these books?\"\nYou: ___",
    options: [
      { id: "a", text: "Carry them yourself." },
      { id: "b", text: "Only if you pay me." },
      { id: "c", text: "Ask someone else. I'm busy forever." },
      { id: "d", text: "Of course! Let's take half each." }
    ],
    answerId: "d",
    explanation: "Offering help cheerfully is a kind reply when a friend asks.",
    hints: ["Friends help each other when they can.", "Cross out selfish refusals."],
  }
];

const SET_B: PrepQuestion[] = [
{
    id: "g4-eng-ch04-b-q01",
    prompt: "**Amma:** Diya, please pass the salt.\n**Diya:** Here you are, Amma.\n**Amma:** Thank you.\n**Diya:** You're welcome.\n\nWhich line is a polite request?",
    options: [
      { id: "a", text: "\"Diya, please pass the salt.\"" },
      { id: "b", text: "\"Here you are, Amma.\"" },
      { id: "c", text: "\"Thank you.\"" },
      { id: "d", text: "\"You're welcome.\"" }
    ],
    answerId: "a",
    explanation: "Amma uses \"please\" when asking Diya to pass the salt — that is a polite request.",
    hints: ["Please marks a polite ask.", "Thank you is a reply, not the request."],
  },
{
    id: "g4-eng-ch04-b-q02",
    prompt: "You meet your class teacher at 2 p.m. after lunch. Best greeting?",
    options: [
      { id: "a", text: "Good night, ma'am." },
      { id: "b", text: "Good afternoon, ma'am." },
      { id: "c", text: "Good morning, ma'am." },
      { id: "d", text: "Yo, teacher!" }
    ],
    answerId: "b",
    explanation: "After midday, \"Good afternoon\" is the fitting greeting.",
    hints: ["Afternoon fits after lunch / after 12.", "Keep ma'am for teachers."],
  },
{
    id: "g4-eng-ch04-b-q03",
    prompt: "At a birthday party, you want another piece of cake. Polite ask?",
    options: [
      { id: "a", text: "Give me the biggest piece." },
      { id: "b", text: "I'm taking this." },
      { id: "c", text: "May I have another small piece, please?" },
      { id: "d", text: "You better give me more." }
    ],
    answerId: "c",
    explanation: "\"May I… please?\" asks politely without sounding greedy.",
    hints: ["Ask permission for more food.", "Small / please keeps it polite."],
  },
{
    id: "g4-eng-ch04-b-q04",
    prompt: "**Bus conductor:** Ticket, please.\n**Vikram:** One ticket to MG Road, please.\n**Conductor:** Ten rupees.\n**Vikram:** Here you are. Thank you.\n\nWhy is Vikram's speech polite?",
    options: [
      { id: "a", text: "He shouts the stop name." },
      { id: "b", text: "He refuses to pay." },
      { id: "c", text: "He ignores the conductor." },
      { id: "d", text: "He says please and thank you, and states his stop clearly." }
    ],
    answerId: "d",
    explanation: "Clear words plus please and thank you make public travel polite.",
    hints: ["Please and thank you matter on the bus too.", "State your stop clearly."],
  },
{
    id: "g4-eng-ch04-b-q05",
    prompt: "Your younger cousin spills juice on your notebook. Kindest first reply?",
    options: [
      { id: "a", text: "It's all right — accidents happen. Let's clean it together." },
      { id: "b", text: "You always ruin everything!" },
      { id: "c", text: "I will never talk to you again." },
      { id: "d", text: "Mum will punish you forever." }
    ],
    answerId: "a",
    explanation: "Staying calm and helping clean shows kindness after an accident.",
    hints: ["Accidents need calm, not blame.", "Offer to clean together."],
  },
{
    id: "g4-eng-ch04-b-q06",
    prompt: "Someone knocks while you are studying. Best phone/door reply?",
    options: [
      { id: "a", text: "Go away!" },
      { id: "b", text: "Just a moment, please!" },
      { id: "c", text: "What now?!" },
      { id: "d", text: "Silent — never answer." }
    ],
    answerId: "b",
    explanation: "\"Just a moment, please\" is polite when you need a short wait.",
    hints: ["Ask for a brief wait politely.", "Avoid snapping at the door."],
  },
{
    id: "g4-eng-ch04-b-q07",
    prompt: "**Riya:** Hello, this is Riya speaking.\n**Caller:** Hello, Riya. May I speak to your mother, please?\n**Riya:** She is in a meeting. May I take a message?\n**Caller:** Yes. Please tell her that Mrs. Khan called about the PTA meeting.\n**Riya:** I will tell her. Thank you for calling.\n**Caller:** Thank you, Riya. Bye!\n\nRead the dialogue. Which closing is polite on the phone?",
    options: [
      { id: "a", text: "\"Whatever. Click.\"" },
      { id: "b", text: "\"Stop calling us.\"" },
      { id: "c", text: "\"Thank you for calling.\" / \"Bye!\"" },
      { id: "d", text: "\"I'm busy. Deal with it.\"" }
    ],
    answerId: "c",
    explanation: "Thanking the caller and saying bye closes a call politely.",
    hints: ["End calls with thanks and a clear bye.", "Cross out rude hang-ups."],
  },
{
    id: "g4-eng-ch04-b-q08",
    prompt: "You enter a crowded lift. What should you say if you need to get out?",
    options: [
      { id: "a", text: "Move it!" },
      { id: "b", text: "Out of my way, everyone!" },
      { id: "c", text: "Push hard through people." },
      { id: "d", text: "Excuse me, please — this is my floor." }
    ],
    answerId: "d",
    explanation: "\"Excuse me, please\" lets people make space without shoving.",
    hints: ["Excuse me works in crowds.", "Name why you need space (your floor)."],
  },
{
    id: "g4-eng-ch04-b-q09",
    prompt: "A guest praises your rangoli. Appropriate reply?",
    options: [
      { id: "a", text: "Thank you! I'm glad you like it." },
      { id: "b", text: "Obviously. I'm the best." },
      { id: "c", text: "It was nothing; your taste is poor." },
      { id: "d", text: "Don't look at it." }
    ],
    answerId: "a",
    explanation: "Accept praise with a simple thank you — warm, not boastful.",
    hints: ["Thank you accepts praise kindly.", "Avoid boasting or putting yourself down harshly."],
  },
{
    id: "g4-eng-ch04-b-q10",
    prompt: "You want the window open in class. Polite request to a classmate near it?",
    options: [
      { id: "a", text: "Open it. Now." },
      { id: "b", text: "Could you open the window a little, please?" },
      { id: "c", text: "Why is it always closed? Useless!" },
      { id: "d", text: "I'll force it open myself without asking." }
    ],
    answerId: "b",
    explanation: "Ask the person nearest the window with Could you… please.",
    hints: ["Ask the classmate who can reach it.", "Please keeps the ask soft."],
  },
{
    id: "g4-eng-ch04-b-q11",
    prompt: "**Coach:** Great catch, Sara!\n**Sara:** ___",
    options: [
      { id: "a", text: "I know." },
      { id: "b", text: "Finally you noticed." },
      { id: "c", text: "Thank you, sir!" },
      { id: "d", text: "The others were useless." }
    ],
    answerId: "c",
    explanation: "A short thank you to the coach is respectful and cheerful.",
    hints: ["Thank coaches for praise.", "Don't put teammates down."],
  },
{
    id: "g4-eng-ch04-b-q12",
    prompt: "You answer Papa's phone. The caller asks for Papa, who is bathing. Best line?",
    options: [
      { id: "a", text: "He's bathing — call later. (hangs up without a name)" },
      { id: "b", text: "Who is this? Speak fast." },
      { id: "c", text: "We don't want your call." },
      { id: "d", text: "Papa is busy right now. May I take a message, please?" }
    ],
    answerId: "d",
    explanation: "Explain briefly and offer to take a message — clear and polite.",
    hints: ["Don't share private details loudly; say busy.", "Offer to take a message."],
  },
{
    id: "g4-eng-ch04-b-q13",
    prompt: "At the temple queue, someone steps ahead of you by mistake. Kind reply?",
    options: [
      { id: "a", text: "Excuse me — I think the line starts behind me." },
      { id: "b", text: "Hey! Cheater!" },
      { id: "c", text: "I'll push you back." },
      { id: "d", text: "Angry silence and shove." }
    ],
    answerId: "a",
    explanation: "A calm Excuse me plus a clear fact fixes the line without a fight.",
    hints: ["Stay calm in queues.", "State the fact politely."],
  },
{
    id: "g4-eng-ch04-b-q14",
    prompt: "Which greeting fits Diwali night when guests arrive?",
    options: [
      { id: "a", text: "Good morning — go home." },
      { id: "b", text: "Welcome! Happy Diwali!" },
      { id: "c", text: "Why are you here so late?" },
      { id: "d", text: "No sweets for you." }
    ],
    answerId: "b",
    explanation: "Festival greetings welcome guests warmly: Happy Diwali!",
    hints: ["Festival + welcome fits guests at night.", "Don't send guests away rudely."],
  },
{
    id: "g4-eng-ch04-b-q15",
    prompt: "You borrow Neha's sketch pens and return them. What should you say?",
    options: [
      { id: "a", text: "I took them. Done." },
      { id: "b", text: "Your pens are cheap anyway." },
      { id: "c", text: "Thank you for lending them, Neha." },
      { id: "d", text: "I might keep one." }
    ],
    answerId: "c",
    explanation: "Thank the lender when you return what you borrowed.",
    hints: ["Return + thank you completes borrowing.", "Never insult their things."],
  },
{
    id: "g4-eng-ch04-b-q16",
    prompt: "A tourist asks, \"Where is the railway station?\" You know the way. Best reply?",
    options: [
      { id: "a", text: "Find it yourself." },
      { id: "b", text: "Why should I tell you?" },
      { id: "c", text: "Ask someone else — I'm busy playing." },
      { id: "d", text: "Go straight past the chai stall, then turn left. You'll see it." }
    ],
    answerId: "d",
    explanation: "Clear, simple directions help a visitor — kind and useful.",
    hints: ["Give short clear steps.", "Helping visitors is good manners."],
  },
{
    id: "g4-eng-ch04-b-q17",
    prompt: "Your friend looks sad after losing a race. Kindest words?",
    options: [
      { id: "a", text: "You ran bravely. Want to practise together tomorrow?" },
      { id: "b", text: "You always lose. Ha!" },
      { id: "c", text: "Racing is for winners only." },
      { id: "d", text: "Don't talk to me when you lose." }
    ],
    answerId: "a",
    explanation: "Encourage effort and offer to help next time — that is kindness.",
    hints: ["Praise effort, not only winning.", "Offer to practise together."],
  },
{
    id: "g4-eng-ch04-b-q18",
    prompt: "In a group project, you disagree with an idea. Polite way to speak?",
    options: [
      { id: "a", text: "That's a stupid plan." },
      { id: "b", text: "I see your point. Could we also try this idea?" },
      { id: "c", text: "My idea only. Sit down." },
      { id: "d", text: "I'm leaving the group forever." }
    ],
    answerId: "b",
    explanation: "Acknowledge their idea, then gently offer yours — respectful teamwork.",
    hints: ["Start by noticing their point.", "Offer your idea with Could we…"],
  },
{
    id: "g4-eng-ch04-b-q19",
    prompt: "You sneeze in class. What should you say?",
    options: [
      { id: "a", text: "Nothing." },
      { id: "b", text: "That was loud on purpose." },
      { id: "c", text: "Excuse me." },
      { id: "d", text: "Gross, right?" }
    ],
    answerId: "c",
    explanation: "\"Excuse me\" after a sneeze is simple good manners.",
    hints: ["Sneezes get a quick Excuse me.", "Cover your mouth too (habit)."],
  },
{
    id: "g4-eng-ch04-b-q20",
    prompt: "**Friend:** \"Would you like to join our kho-kho team?\"\nYou are free and interested. Best reply?",
    options: [
      { id: "a", text: "Maybe. Stop asking." },
      { id: "b", text: "Only if I'm captain." },
      { id: "c", text: "Teams are boring." },
      { id: "d", text: "Yes, please! I'd love to join." }
    ],
    answerId: "d",
    explanation: "An eager yes with please/love to join sounds warm and clear.",
    hints: ["Say yes clearly when you want to join.", "Don't set rude conditions."],
  },
{
    id: "g4-eng-ch04-b-q21",
    prompt: "Someone says sorry for stepping on your foot. Appropriate reply?",
    options: [
      { id: "a", text: "That's all right — no worries." },
      { id: "b", text: "You did it on purpose!" },
      { id: "c", text: "Pay me money." },
      { id: "d", text: "I'll step on yours too." }
    ],
    answerId: "a",
    explanation: "Accept a sincere sorry with That's all right or No worries.",
    hints: ["Accept apologies graciously.", "Don't threaten back."],
  },
{
    id: "g4-eng-ch04-b-q22",
    prompt: "You need help from the school office. Best opening at the counter?",
    options: [
      { id: "a", text: "Hey! Lost stuff. Now!" },
      { id: "b", text: "Excuse me, sir. Could you please help me find the lost-and-found?" },
      { id: "c", text: "You people never help." },
      { id: "d", text: "I demand my bag!" }
    ],
    answerId: "b",
    explanation: "Excuse me + Could you please + clear need is the right office tone.",
    hints: ["Office talk stays polite and clear.", "Name what you need."],
  },
{
    id: "g4-eng-ch04-b-q23",
    prompt: "During online class, your mic was unmuted by mistake. Kind fix?",
    options: [
      { id: "a", text: "Why is everyone looking?" },
      { id: "b", text: "This class is so dumb." },
      { id: "c", text: "Sorry, everyone — I muted myself now." },
      { id: "d", text: "Blame the app forever." }
    ],
    answerId: "c",
    explanation: "A quick sorry and muting shows you care about the class.",
    hints: ["Apologise briefly for the noise.", "Mute right away."],
  },
{
    id: "g4-eng-ch04-b-q24",
    prompt: "Which reply is MOST appropriate?\n\nElderly neighbour: \"Could you please water my tulsi plant while I'm away?\"\nYou: ___",
    options: [
      { id: "a", text: "Plants are your problem." },
      { id: "b", text: "Only if you buy me chips." },
      { id: "c", text: "I'm too important for plants." },
      { id: "d", text: "Yes, Aunty. I'd be happy to help." }
    ],
    answerId: "d",
    explanation: "Helping an elderly neighbour kindly is respectful community manners.",
    hints: ["Elders' small asks deserve a warm yes when you can.", "Tulsi care is a kind favour."],
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "💬",
    title: "Kind voices",
    body: [
      "The words we choose can open doors — or close them.",
      "Today we practise greetings, polite requests and kind replies.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's talk kindly!",
    visual: "sentence",
    speak: "Today we practise greetings, polite requests and kind replies.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Polite power words",
    lead: "Tap each card to reveal when to use it.",
    visual: "sentence",
    speak: "Please, thank you, sorry and excuse me are power words for kind talk.",
    cards: [
      { label: "Please", reveal: "Softens a request: May I borrow… please?", emoji: "🙏" },
      { label: "Thank you", reveal: "Shows you noticed someone's help", emoji: "💛" },
      { label: "Sorry", reveal: "Owns a mistake or bump honestly", emoji: "🤗" },
      { label: "Excuse me", reveal: "Gets attention or asks to pass", emoji: "🙋" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Turn an order into a request",
    visual: "sentence",
    speak: "Give me your pencil. Better: Could I borrow your pencil, please?",
    steps: [
      "Rough: \"Give me your pencil.\"",
      "Add Could I / May I",
      "Add please",
      "Kind: \"Could I borrow your pencil, please?\"",
    ],
    punchline: "Ask — don't order. Please makes it warmer.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "You need to leave the row in assembly. What do you say?",
    options: [
      { id: "a", text: "Excuse me, please." },
      { id: "b", text: "Move!" },
      { id: "c", text: "Out of my way." },
      { id: "d", text: "Whatever." },
    ],
    answerId: "a",
    why: "Excuse me, please is the polite way to ask people to let you pass.",
    visual: "sentence",
    speak: "You need to leave the row. What do you say?",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "sentence",
    speak: "Which reply is kind when someone says thank you?",
    question: {
      id: "g4-eng-ch04-check",
      prompt: "Someone says \"Thank you.\" Which reply is kind?",
      options: [
        { id: "a", text: "You're welcome." },
        { id: "b", text: "Finally!" },
        { id: "c", text: "You owe me." },
        { id: "d", text: "Whatever." },
      ],
      answerId: "a",
      explanation: "You're welcome is the warm, usual reply to thank you.",
      hints: ["Thank you pairs with You're welcome.", "Cross out cold replies."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Kind voice ready!",
    bullets: [
      "Greet for the time of day",
      "May I / Could I + please",
      "Choose replies that help, not hurt",
      "Set A and Set B — 24 questions each",
    ],
    cta: "Back to chapter",
    speak: "Kind voice ready! You are ready for the practice sets.",
  },
];

export const g4EnglishSpoken: ChapterDef = {
  id: "kind-voices",
  title: "Kind Voices",
  emoji: "💬",
  blurb: "Greetings, polite requests & kind replies",
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
  paperTopics: ["spoken-english", "polite-expression", "dialogues"],
};

export const g4EnglishSpokenQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
