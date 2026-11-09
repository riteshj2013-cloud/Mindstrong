import type { ChapterDef, PrepQuestion } from "../types";

/** Spoken and Written Expression - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-eng-expression-a-q01",
    prompt: "Look at the picture. It is early morning at the pool, and Mahi meets her coach. What should Mahi say?",
    options: [
      { id: "a", text: "Good morning, Ms. Thomas!" },
      { id: "b", text: "Good evening, Ms. Thomas!" },
      { id: "c", text: "Good night, Ms. Thomas!" },
      { id: "d", text: "Goodbye, Ms. Thomas!" }
    ],
    answerId: "a",
    explanation: "At 7 o'clock in the morning we say 'Good morning'. 'Good evening, Ms. Thomas!' is a greeting for after sunset, not for an early lesson.",
    hints: ["Look at the clock in the picture and think which part of the day Mahi's lesson is in."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 360\" width=\"600\" height=\"360\" role=\"img\" aria-label=\"Comic: Mahi meets her swimming coach at the pool\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: Mahi meets her swimming coach at the pool</title><desc>A swimming pool. A wall clock shows seven o&#x27;clock. Ms. Thomas, the coach, says: Ready for your lesson, Mahi? Mahi has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"360\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"300\" rx=\"0\" fill=\"#e1f5fe\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"0\" y=\"300\" width=\"600\" height=\"60\" rx=\"0\" fill=\"#4fc3f7\" stroke=\"#0277bd\" stroke-width=\"2\"/><path d=\"M0,315 Q30,305 60,315 T120,315 T180,315 T240,315 T300,315 T360,315 T420,315 T480,315 T540,315 T600,315\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"520\" cy=\"64\" r=\"34\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"3\"/><line x1=\"520.0\" y1=\"36.0\" x2=\"520.0\" y2=\"32.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"534.0\" y1=\"39.751288694035715\" x2=\"536.0\" y2=\"36.28718707889796\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"544.2487113059643\" y1=\"50.0\" x2=\"547.712812921102\" y2=\"48.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"548.0\" y1=\"64.0\" x2=\"552.0\" y2=\"64.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"544.2487113059643\" y1=\"78.0\" x2=\"547.712812921102\" y2=\"80.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"534.0\" y1=\"88.24871130596429\" x2=\"536.0\" y2=\"91.71281292110204\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"520.0\" y1=\"92.0\" x2=\"520.0\" y2=\"96.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"506.0\" y1=\"88.24871130596428\" x2=\"504.0\" y2=\"91.71281292110203\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"495.75128869403574\" y1=\"78.00000000000001\" x2=\"492.287187078898\" y2=\"80.00000000000001\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"492.0\" y1=\"64.0\" x2=\"488.0\" y2=\"64.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"495.75128869403574\" y1=\"50.0\" x2=\"492.28718707889794\" y2=\"48.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"506.0\" y1=\"39.75128869403572\" x2=\"504.0\" y2=\"36.28718707889797\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"520\" y1=\"64\" x2=\"511.5\" y2=\"78.72243186433546\" stroke=\"#1a1a1a\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"520\" y1=\"64\" x2=\"520.0\" y2=\"36.8\" stroke=\"#1a1a1a\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"520\" cy=\"64\" r=\"3\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><line x1=\"160.8\" y1=\"248.25\" x2=\"158.5\" y2=\"300\" stroke=\"#c62828\" stroke-width=\"6.8999999999999995\" stroke-linecap=\"round\"/><line x1=\"179.2\" y1=\"248.25\" x2=\"181.5\" y2=\"300\" stroke=\"#c62828\" stroke-width=\"6.8999999999999995\" stroke-linecap=\"round\"/><rect x=\"151.6\" y=\"196.5\" width=\"36.8\" height=\"55.199999999999996\" rx=\"6.8999999999999995\" fill=\"#c62828\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"151.6\" y1=\"203.4\" x2=\"140.1\" y2=\"240.2\" stroke=\"#a0522d\" stroke-width=\"5.75\" stroke-linecap=\"round\"/><line x1=\"188.4\" y1=\"203.4\" x2=\"218.3\" y2=\"194.2\" stroke=\"#a0522d\" stroke-width=\"5.75\" stroke-linecap=\"round\"/><rect x=\"149.3\" y=\"167.75\" width=\"41.4\" height=\"27.599999999999998\" rx=\"9.2\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"170\" cy=\"179.25\" r=\"16.099999999999998\" fill=\"#a0522d\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M153.9,175.8 Q170,151.65 186.1,175.8\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"164.25\" cy=\"180.4\" r=\"2.07\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"175.75\" cy=\"180.4\" r=\"2.07\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M163.1,186.15 Q170,191.9 176.9,186.15\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"220\" x2=\"170\" y2=\"236\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"392.0\" y1=\"255.0\" x2=\"390.0\" y2=\"300\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"408.0\" y1=\"255.0\" x2=\"410.0\" y2=\"300\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"386.0,212.0 414.0,212.0 426.0,260.0 374.0,260.0\" fill=\"#1565c0\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"384.0\" y1=\"216.0\" x2=\"374.0\" y2=\"248.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"416.0\" y1=\"216.0\" x2=\"426.0\" y2=\"248.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><rect x=\"382.0\" y=\"185.0\" width=\"36.0\" height=\"24.0\" rx=\"8.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"400\" cy=\"195.0\" r=\"14.0\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M386.0,192.0 Q400,171.0 414.0,192.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"395.0\" cy=\"196.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"405.0\" cy=\"196.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M394.0,201.0 Q400,206.0 406.0,201.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"157,109 183,109 170,150\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"40\" y=\"40\" width=\"250\" height=\"70\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"157,109 183,109 170,150\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"165.0\" y=\"69.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Ready for your</text><text x=\"165.0\" y=\"92.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">lesson, Mahi?</text><polygon points=\"387,125 413,125 400,175\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"360\" y=\"70\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"387,125 413,125 400,175\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"405.0\" y=\"108.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"170\" y=\"345\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Ms. Thomas</text><text x=\"400\" y=\"345\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Mahi</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"358\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic at a swimming pool. A wall clock shows seven o'clock. Ms. Thomas says, 'Ready for your lesson, Mahi?' Mahi's speech bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-a-q02",
    prompt: "It is 9:30 at night, and Dadu is going to bed. What should Tushar say to him?",
    options: [
      { id: "a", text: "Good evening, Dadu!" },
      { id: "b", text: "Good afternoon, Dadu!" },
      { id: "c", text: "Good morning, Dadu!" },
      { id: "d", text: "Good night, Dadu!" }
    ],
    answerId: "d",
    explanation: "We say 'Good night' when someone goes to sleep. 'Good evening, Dadu!' is a hello for the evening, not a bedtime wish.",
    hints: ["Think about the words we say to someone who is going to sleep, like Dadu at 9:30."]
  },
  {
    id: "g3-eng-expression-a-q03",
    prompt: "It is Tanvi's first day at a new school. Her teacher asks her to tell the class about herself. Which is the BEST way to begin?",
    options: [
      { id: "a", text: "Hello, everyone! My name is Tanvi, and I am from Shillong." },
      { id: "b", text: "Who are all of you?" },
      { id: "c", text: "Please give me the seat near the window." },
      { id: "d", text: "I don't want to talk today." }
    ],
    answerId: "a",
    explanation: "A good introduction says hello and gives your name. 'Who are all of you?' asks about others instead of telling the class about Tanvi.",
    hints: ["Think about what a new girl should tell the class first when she speaks about herself."]
  },
  {
    id: "g3-eng-expression-a-q04",
    prompt: "Harsh brings his classmate Gopal home after school. How should Harsh introduce Gopal to his mother?",
    options: [
      { id: "a", text: "Amma, I am Harsh, your son." },
      { id: "b", text: "Amma, this is Gopal. He sits next to me in class." },
      { id: "c", text: "Gopal, this is our kitchen." },
      { id: "d", text: "Amma, Gopal is here. Give him food." }
    ],
    answerId: "b",
    explanation: "Harsh tells Amma who Gopal is and how he knows him. 'Amma, Gopal is here. Give him food.' names Gopal but sounds like an order, not an introduction.",
    hints: ["Think about what Amma would like to know about the classmate she is meeting for the first time."]
  },
  {
    id: "g3-eng-expression-a-q05",
    prompt: "Look at the picture. Dev needs two long notebooks from the stationery shop. What should he say?",
    options: [
      { id: "a", text: "Could I have two long notebooks, please?" },
      { id: "b", text: "Give me two long notebooks now." },
      { id: "c", text: "Notebooks! Two! Quick!" },
      { id: "d", text: "Why are your notebooks so costly?" }
    ],
    answerId: "a",
    explanation: "'Could I\u2026, please?' is a polite request. 'Give me two long notebooks now.' asks for the right thing, but it is an order and sounds rude.",
    hints: ["Think of the polite words that turn an order into a request at the stationery shop."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 362\" width=\"600\" height=\"362\" role=\"img\" aria-label=\"Comic: Dev at a stationery shop counter\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: Dev at a stationery shop counter</title><desc>A stationery shop with shelves of coloured notebooks. The shopkeeper behind the counter says: Yes, beta? What do you need? Dev, a boy in an orange shirt, has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" rx=\"0\" fill=\"#fff8e1\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"320\" y=\"30\" width=\"250\" height=\"110\" rx=\"0\" fill=\"#d7ccc8\" stroke=\"#5d4037\" stroke-width=\"2\"/><rect x=\"332\" y=\"42\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#e53935\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"372\" y=\"42\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#1e88e5\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"412\" y=\"42\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#43a047\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"452\" y=\"42\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#fdd835\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"492\" y=\"42\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#8e24aa\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"532\" y=\"42\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#fb8c00\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"332\" y=\"90\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#1e88e5\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"372\" y=\"90\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#43a047\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"412\" y=\"90\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#fdd835\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"452\" y=\"90\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#8e24aa\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"492\" y=\"90\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#fb8c00\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"532\" y=\"90\" width=\"30\" height=\"38\" rx=\"0\" fill=\"#e53935\" stroke=\"#333333\" stroke-width=\"1\"/><line x1=\"151.2\" y1=\"280.5\" x2=\"149.0\" y2=\"330\" stroke=\"#37474f\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><line x1=\"168.8\" y1=\"280.5\" x2=\"171.0\" y2=\"330\" stroke=\"#37474f\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><rect x=\"142.4\" y=\"231.0\" width=\"35.2\" height=\"52.800000000000004\" rx=\"6.6000000000000005\" fill=\"#00897b\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"142.4\" y1=\"237.6\" x2=\"131.4\" y2=\"272.8\" stroke=\"#8d5524\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><line x1=\"177.6\" y1=\"237.6\" x2=\"188.6\" y2=\"272.8\" stroke=\"#8d5524\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><circle cx=\"160\" cy=\"214.5\" r=\"15.400000000000002\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M144.6,211.2 Q160,188.1 175.4,211.2\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"154.5\" cy=\"215.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"165.5\" cy=\"215.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M153.4,221.1 Q160,226.6 166.6,221.1\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><rect x=\"20\" y=\"250\" width=\"300\" height=\"90\" rx=\"0\" fill=\"#a1887f\" stroke=\"#4e342e\" stroke-width=\"2\"/><text x=\"170\" y=\"302\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">STATIONERY</text><line x1=\"461.6\" y1=\"292.75\" x2=\"459.5\" y2=\"340\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><line x1=\"478.4\" y1=\"292.75\" x2=\"480.5\" y2=\"340\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><rect x=\"453.2\" y=\"245.5\" width=\"33.6\" height=\"50.400000000000006\" rx=\"6.300000000000001\" fill=\"#f57c00\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"453.2\" y1=\"251.8\" x2=\"442.7\" y2=\"285.4\" stroke=\"#c68642\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><line x1=\"486.8\" y1=\"251.8\" x2=\"497.3\" y2=\"285.4\" stroke=\"#c68642\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><circle cx=\"470\" cy=\"229.75\" r=\"14.700000000000001\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M455.3,226.6 Q470,204.55 484.7,226.6\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"464.75\" cy=\"230.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"475.25\" cy=\"230.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M463.7,236.05 Q470,241.3 476.3,236.05\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"147,95 173,95 160,190\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"30\" y=\"30\" width=\"250\" height=\"66\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"147,95 173,95 160,190\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"155.0\" y=\"57.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Yes, beta?</text><text x=\"155.0\" y=\"80.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">What do you need?</text><polygon points=\"383,215 409,215 452,222\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"330\" y=\"160\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"383,215 409,215 452,222\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"375.0\" y=\"198.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"470\" y=\"356\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Dev</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"360\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic at a stationery shop. The shopkeeper behind the counter says, 'Yes, beta? What do you need?' Dev's speech bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-a-q06",
    prompt: "Bhumi wants to use the class computer to type her story. What should she say to her teacher?",
    options: [
      { id: "a", text: "I am using the computer now, ma'am." },
      { id: "b", text: "Move away, I need the computer." },
      { id: "c", text: "The computer should type my story for me." },
      { id: "d", text: "May I use the computer to type my story, ma'am?" }
    ],
    answerId: "d",
    explanation: "'May I\u2026?' asks for permission politely. 'I am using the computer now, ma'am.' only tells the teacher; it does not ask first.",
    hints: ["Bhumi needs her teacher to say yes first. Which words ask for permission to use the computer?"]
  },
  {
    id: "g3-eng-expression-a-q07",
    prompt: "Akash kept Simran's colour pencils for a whole week and forgot to return them. What should he say when he gives them back?",
    options: [
      { id: "a", text: "Here. Take your pencils." },
      { id: "b", text: "Sorry I kept them so long, Simran. Here they are." },
      { id: "c", text: "Why did you lend them to me?" },
      { id: "d", text: "Your pencils are not very sharp." }
    ],
    answerId: "b",
    explanation: "Akash should say sorry for the delay. 'Here. Take your pencils.' returns them, but it has no sorry for keeping them a whole week.",
    hints: ["Akash kept the colour pencils too long. Think what he should say about that before handing them back."]
  },
  {
    id: "g3-eng-expression-a-q08",
    prompt: "Leela shared her umbrella with Uma on a rainy day. Uma says, \"Thank you, Leela!\" What is the best reply from Leela?",
    options: [
      { id: "a", text: "Thank you, Uma." },
      { id: "b", text: "Yes, you should thank me." },
      { id: "c", text: "Any time, Uma! I was happy to share." },
      { id: "d", text: "Next time, bring your own umbrella." }
    ],
    answerId: "c",
    explanation: "Leela answers the thanks warmly. 'Thank you, Uma.' sounds polite, but Uma is the one saying thanks, so Leela should not thank her back.",
    hints: ["Uma has thanked Leela for the umbrella. Leela should answer those thanks kindly."]
  },
  {
    id: "g3-eng-expression-a-q09",
    prompt: "Look at the picture. Sana is doing her homework when her friend calls her to play cricket. What is the most polite reply?",
    options: [
      { id: "a", text: "No! Go away!" },
      { id: "b", text: "Cricket is a silly game." },
      { id: "c", text: "Okay, I'll leave my homework and come." },
      { id: "d", text: "Sorry, I can't come now. I must finish my homework. Can we play at six?" }
    ],
    answerId: "d",
    explanation: "This reply says sorry, gives a reason and offers a new time. 'No! Go away!' also says no, but it is rude and could hurt her friend.",
    hints: ["Sana wants to say no to cricket for now. Think how she can say it kindly and still stay friends."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 362\" width=\"600\" height=\"362\" role=\"img\" aria-label=\"Comic: Sana at her study desk and her friend at the window\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: Sana at her study desk and her friend at the window</title><desc>Aryan holds a cricket bat at the window and says: Sana! Come and play cricket! Sana is at her desk with notebooks. A clock shows half past four. Sana has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"360\" rx=\"0\" fill=\"#f3e5f5\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"30\" y=\"50\" width=\"170\" height=\"200\" rx=\"0\" fill=\"#bbdefb\" stroke=\"#455a64\" stroke-width=\"4\"/><line x1=\"115\" y1=\"50\" x2=\"115\" y2=\"250\" stroke=\"#455a64\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"540\" cy=\"60\" r=\"30\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"3\"/><line x1=\"540.0\" y1=\"36.0\" x2=\"540.0\" y2=\"32.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"552.0\" y1=\"39.21539030917347\" x2=\"554.0\" y2=\"35.751288694035715\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"560.7846096908265\" y1=\"48.0\" x2=\"564.2487113059643\" y2=\"46.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"564.0\" y1=\"60.0\" x2=\"568.0\" y2=\"60.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"560.7846096908265\" y1=\"72.0\" x2=\"564.2487113059643\" y2=\"74.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"552.0\" y1=\"80.78460969082653\" x2=\"554.0\" y2=\"84.24871130596429\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"540.0\" y1=\"84.0\" x2=\"540.0\" y2=\"88.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"528.0\" y1=\"80.78460969082653\" x2=\"526.0\" y2=\"84.24871130596428\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"519.2153903091735\" y1=\"72.00000000000001\" x2=\"515.7512886940357\" y2=\"74.00000000000001\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"516.0\" y1=\"60.00000000000001\" x2=\"512.0\" y2=\"60.00000000000001\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"519.2153903091735\" y1=\"48.0\" x2=\"515.7512886940357\" y2=\"46.0\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"528.0\" y1=\"39.21539030917348\" x2=\"526.0\" y2=\"35.75128869403572\" stroke=\"#333333\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"540\" y1=\"60\" x2=\"550.6066017177982\" y2=\"70.60660171779821\" stroke=\"#1a1a1a\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"540\" y1=\"60\" x2=\"540.0\" y2=\"84.0\" stroke=\"#1a1a1a\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"540\" cy=\"60\" r=\"3\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><line x1=\"107.4\" y1=\"197.25\" x2=\"105.5\" y2=\"240\" stroke=\"#37474f\" stroke-width=\"5.699999999999999\" stroke-linecap=\"round\"/><line x1=\"122.6\" y1=\"197.25\" x2=\"124.5\" y2=\"240\" stroke=\"#37474f\" stroke-width=\"5.699999999999999\" stroke-linecap=\"round\"/><rect x=\"99.8\" y=\"154.5\" width=\"30.4\" height=\"45.599999999999994\" rx=\"5.699999999999999\" fill=\"#43a047\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"99.8\" y1=\"160.2\" x2=\"90.3\" y2=\"190.6\" stroke=\"#8d5524\" stroke-width=\"4.75\" stroke-linecap=\"round\"/><line x1=\"130.2\" y1=\"160.2\" x2=\"154.9\" y2=\"152.60000000000002\" stroke=\"#8d5524\" stroke-width=\"4.75\" stroke-linecap=\"round\"/><circle cx=\"115\" cy=\"140.25\" r=\"13.299999999999999\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M101.7,137.4 Q115,117.45 128.3,137.4\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"110.25\" cy=\"141.2\" r=\"1.71\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"119.75\" cy=\"141.2\" r=\"1.71\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M109.3,145.95 Q115,150.7 120.7,145.95\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"152\" y1=\"154\" x2=\"170\" y2=\"120\" stroke=\"#8d6e63\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"422.0\" y1=\"285.0\" x2=\"420.0\" y2=\"330\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"438.0\" y1=\"285.0\" x2=\"440.0\" y2=\"330\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"416.0,242.0 444.0,242.0 456.0,290.0 404.0,290.0\" fill=\"#ec407a\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"414.0\" y1=\"246.0\" x2=\"404.0\" y2=\"278.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"446.0\" y1=\"246.0\" x2=\"456.0\" y2=\"278.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><rect x=\"412.0\" y=\"215.0\" width=\"36.0\" height=\"24.0\" rx=\"8.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"430\" cy=\"225.0\" r=\"14.0\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M416.0,222.0 Q430,201.0 444.0,222.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"425.0\" cy=\"226.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"435.0\" cy=\"226.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M424.0,231.0 Q430,236.0 436.0,231.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><rect x=\"340\" y=\"260\" width=\"180\" height=\"20\" rx=\"0\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"2\"/><line x1=\"355\" y1=\"280\" x2=\"355\" y2=\"345\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"505\" y1=\"280\" x2=\"505\" y2=\"345\" stroke=\"#4e342e\" stroke-width=\"5\" stroke-linecap=\"round\"/><rect x=\"380\" y=\"244\" width=\"70\" height=\"16\" rx=\"0\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"1.5\"/><rect x=\"455\" y=\"240\" width=\"40\" height=\"20\" rx=\"0\" fill=\"#1e88e5\" stroke=\"#333333\" stroke-width=\"1.5\"/><polygon points=\"221,105 247,105 150,150\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"210\" y=\"40\" width=\"230\" height=\"66\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"221,105 247,105 150,150\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"325.0\" y=\"67.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Sana! Come and</text><text x=\"325.0\" y=\"90.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">play cricket!</text><polygon points=\"481,185 507,185 440,205\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"470\" y=\"130\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"481,185 507,185 440,205\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"515.0\" y=\"168.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"115\" y=\"270\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Aryan</text><text x=\"430\" y=\"354\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Sana</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"360\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic: Aryan at the window holds a cricket bat and says, 'Sana! Come and play cricket!' Sana is at her desk with notebooks; a clock shows half past four. Her speech bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-a-q10",
    prompt: "[D1] A Phone Call for Rhea (dialogue)\n\n**Ishaan:** Hello, this is Ishaan.\n**Mr. Bose:** Hello, Ishaan. I am Mr. Bose, Rhea's cricket coach. Is Rhea at home?\n**Ishaan:** Sorry, sir, she has gone to the library. May I take a message?\n**Mr. Bose:** Yes, please. Tell her that practice on Saturday will start at 8 a.m., not 7 a.m. She must bring her own water bottle.\n**Ishaan:** Practice at 8 a.m. on Saturday, and a water bottle. I will tell her, sir.\n**Mr. Bose:** Thank you, Ishaan. Bye!\n\nRead Dialogue D1 (the phone call). Which note should Ishaan write for Rhea?",
    options: [
      { id: "a", text: "Mr. Bose called. Saturday practice starts at 7 a.m. Bring a water bottle." },
      { id: "b", text: "Mr. Bose called. Saturday practice starts at 8 a.m. Bring a water bottle." },
      { id: "c", text: "Rhea, go to the library at 8 a.m. on Saturday." },
      { id: "d", text: "Mr. Bose wants a water bottle from the library." }
    ],
    answerId: "b",
    explanation: "Practice moved to 8 a.m., and Rhea needs a water bottle. 'Mr. Bose called. Saturday practice starts at 7 a.m.' gives the old time, not the new one.",
    hints: ["A good phone note keeps who called, the new time and what to bring. Check each detail against Mr. Bose's words."]
  },
  {
    id: "g3-eng-expression-a-q11",
    prompt: "[D1] A Phone Call for Rhea (dialogue)\n\n**Ishaan:** Hello, this is Ishaan.\n**Mr. Bose:** Hello, Ishaan. I am Mr. Bose, Rhea's cricket coach. Is Rhea at home?\n**Ishaan:** Sorry, sir, she has gone to the library. May I take a message?\n**Mr. Bose:** Yes, please. Tell her that practice on Saturday will start at 8 a.m., not 7 a.m. She must bring her own water bottle.\n**Ishaan:** Practice at 8 a.m. on Saturday, and a water bottle. I will tell her, sir.\n**Mr. Bose:** Thank you, Ishaan. Bye!\n\nRead Dialogue D1. Why does Ishaan say, \"Practice at 8 a.m. on Saturday, and a water bottle\"?",
    options: [
      { id: "a", text: "Because he did not hear Mr. Bose at all" },
      { id: "b", text: "To end the call quickly" },
      { id: "c", text: "To ask Mr. Bose a new question" },
      { id: "d", text: "To check that he has the message right" }
    ],
    answerId: "d",
    explanation: "Saying the details back helps Ishaan check that he heard them correctly. 'Because he did not hear Mr. Bose at all' is wrong; he repeats the exact details.",
    hints: ["Think about why someone taking a phone message would say the details back to the caller."]
  },
  {
    id: "g3-eng-expression-a-q12",
    prompt: "On Eid morning, Kavya visits her friend Farhan's home. What can she say to greet Farhan's family?",
    options: [
      { id: "a", text: "Happy Diwali!" },
      { id: "b", text: "Eid Mubarak!" },
      { id: "c", text: "Happy New Year!" },
      { id: "d", text: "Best of luck!" }
    ],
    answerId: "b",
    explanation: "'Eid Mubarak!' is the greeting for Eid. 'Happy Diwali!' is a lovely wish, but it belongs to a different festival.",
    hints: ["Choose the greeting that matches the festival Farhan's family is celebrating that morning."]
  },
  {
    id: "g3-eng-expression-a-q13",
    prompt: "Look at Lavanya's invitation card. Which important detail has she FORGOTTEN to write?",
    options: [
      { id: "a", text: "The time of the lunch" },
      { id: "b", text: "The day of the lunch" },
      { id: "c", text: "The place of the lunch" },
      { id: "d", text: "Who is inviting" }
    ],
    answerId: "a",
    explanation: "The card gives the day, the place and Lavanya's name, but no time. 'The day of the lunch' is wrong; 'Thursday, 14 January' is on the card.",
    hints: ["Check the invitation card for each fact a guest needs: what, when, where and who."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 580 340\" width=\"580\" height=\"340\" role=\"img\" aria-label=\"Lavanya&#x27;s invitation card for a Pongal lunch\" font-family=\"Arial, Helvetica, sans-serif\"><title>Lavanya&#x27;s invitation card for a Pongal lunch</title><desc>An invitation card with a Pongal pot drawn on each side. Please come for our Pongal lunch! Day: Thursday, 14 January Place: 5, Temple Street, Madurai With love, Lavanya</desc><rect x=\"0\" y=\"0\" width=\"580\" height=\"340\" fill=\"#ffffff\"/><rect x=\"14\" y=\"14\" width=\"552\" height=\"312\" rx=\"18\" fill=\"#fff8e1\" stroke=\"#ef6c00\" stroke-width=\"4\"/><ellipse cx=\"70\" cy=\"270\" rx=\"30\" ry=\"26\" fill=\"#ef6c00\" stroke=\"#4e342e\" stroke-width=\"2\"/><rect x=\"52\" y=\"234\" width=\"36\" height=\"12\" rx=\"0\" fill=\"#ef6c00\" stroke=\"#4e342e\" stroke-width=\"2\"/><path d=\"M60,230 Q52,210 64,200 M76,230 Q84,212 74,200\" fill=\"none\" stroke=\"#9e9e9e\" stroke-width=\"3\" stroke-linecap=\"round\"/><ellipse cx=\"510\" cy=\"270\" rx=\"30\" ry=\"26\" fill=\"#ef6c00\" stroke=\"#4e342e\" stroke-width=\"2\"/><rect x=\"492\" y=\"234\" width=\"36\" height=\"12\" rx=\"0\" fill=\"#ef6c00\" stroke=\"#4e342e\" stroke-width=\"2\"/><path d=\"M500,230 Q492,210 504,200 M516,230 Q524,212 514,200\" fill=\"none\" stroke=\"#9e9e9e\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"290\" y=\"70\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#3e2723\">Please come for our Pongal lunch!</text><text x=\"290\" y=\"110\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#3e2723\">Day: Thursday, 14 January</text><text x=\"290\" y=\"146\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#3e2723\">Place: 5, Temple Street, Madurai</text><text x=\"290\" y=\"182\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#3e2723\">With love,</text><text x=\"290\" y=\"218\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#3e2723\">Lavanya</text></svg>", "alt": "Invitation card with Pongal pots: Please come for our Pongal lunch! Day: Thursday, 14 January Place: 5, Temple Street, Madurai With love, Lavanya"}
  },
  {
    id: "g3-eng-expression-a-q14",
    prompt: "Look at the notice. Where will the Fancy Dress Show be held?",
    options: [
      { id: "a", text: "In the Class 3 room" },
      { id: "b", text: "On the playground" },
      { id: "c", text: "In the School Hall" },
      { id: "d", text: "At Ms. Kaur's house" }
    ],
    answerId: "c",
    explanation: "The notice says 'Place: School Hall'. 'In the Class 3 room' is tempting because the show is for Class 3, but the place line says otherwise.",
    hints: ["Find the line on the notice that tells the place of the Fancy Dress Show."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 580 380\" width=\"580\" height=\"380\" role=\"img\" aria-label=\"A school notice pinned on a notice board about a fancy dress show\" font-family=\"Arial, Helvetica, sans-serif\"><title>A school notice pinned on a notice board about a fancy dress show</title><desc>A notice board. NOTICE. Fancy Dress Show. For: Class 3 Day: Monday, 7 December Time: 10 a.m. Place: School Hall Theme: Animals of India \u2014 Ms. Kaur, Class Teacher</desc><rect x=\"0\" y=\"0\" width=\"580\" height=\"380\" fill=\"#ffffff\"/><rect x=\"10\" y=\"10\" width=\"560\" height=\"360\" rx=\"8\" fill=\"#a1887f\" stroke=\"#4e342e\" stroke-width=\"6\"/><rect x=\"70\" y=\"34\" width=\"440\" height=\"316\" rx=\"0\" fill=\"#ffffff\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/><circle cx=\"290\" cy=\"44\" r=\"8\" fill=\"#e53935\" stroke=\"#8e0000\" stroke-width=\"2\"/><text x=\"290\" y=\"80\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#b71c1c\">NOTICE</text><text x=\"290\" y=\"112\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">Fancy Dress Show</text><text x=\"100\" y=\"150\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">For: Class 3</text><text x=\"100\" y=\"180\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Day: Monday, 7 December</text><text x=\"100\" y=\"210\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Time: 10 a.m.</text><text x=\"100\" y=\"240\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Place: School Hall</text><text x=\"100\" y=\"270\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Theme: Animals of India</text><text x=\"100\" y=\"300\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">\u2014 Ms. Kaur, Class Teacher</text></svg>", "alt": "Notice board: NOTICE \u2014 Fancy Dress Show. For: Class 3 Day: Monday, 7 December Time: 10 a.m. Place: School Hall Theme: Animals of India \u2014 Ms. Kaur, Class Teacher"}
  },
  {
    id: "g3-eng-expression-a-q15",
    prompt: "[N1] Fancy Dress Show (school notice)\n\n> **NOTICE \u2014 Fancy Dress Show**\n> For: Class 3\n> Day: Monday, 7 December\n> Time: 10 a.m.\n> Place: School Hall\n> Theme: Animals of India\n> \u2014 Ms. Kaur, Class Teacher\n\nRead Notice N1 (Fancy Dress Show). Which costume fits the theme on the notice?",
    options: [
      { id: "a", text: "A tiger" },
      { id: "b", text: "A kangaroo" },
      { id: "c", text: "A penguin" },
      { id: "d", text: "A polar bear" }
    ],
    answerId: "a",
    explanation: "The theme is Animals of India, and tigers live in Indian forests. 'A kangaroo' is a fun costume, but kangaroos live in Australia.",
    hints: ["Read the theme line on the Fancy Dress notice and think about where each animal lives."]
  },
  {
    id: "g3-eng-expression-a-q16",
    prompt: "Look at Varun's message for his sister. Where did Varun keep the storybook?",
    options: [
      { id: "a", text: "In Anjali's bag" },
      { id: "b", text: "In the school library" },
      { id: "c", text: "Under his bed" },
      { id: "d", text: "On Didi's table" }
    ],
    answerId: "d",
    explanation: "Varun wrote, 'I kept it on your table.' 'In Anjali's bag' is wrong, because Anjali had just given the book back.",
    hints: ["Find the line in Varun's message that comes right after the storybook was returned."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 330\" width=\"480\" height=\"330\" role=\"img\" aria-label=\"A short message written on a page from a notebook\" font-family=\"Arial, Helvetica, sans-serif\"><title>A short message written on a page from a notebook</title><desc>A lined notebook page. Didi, Anjali came at 4 o&#x27;clock. She returned your storybook. I kept it on your table. She will call you after dinner. \u2014 Varun</desc><rect x=\"0\" y=\"0\" width=\"480\" height=\"330\" fill=\"#eceff1\"/><rect x=\"30\" y=\"14\" width=\"420\" height=\"300\" rx=\"4\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"40\" y1=\"60\" x2=\"440\" y2=\"60\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"98\" x2=\"440\" y2=\"98\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"136\" x2=\"440\" y2=\"136\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"174\" x2=\"440\" y2=\"174\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"212\" x2=\"440\" y2=\"212\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"250\" x2=\"440\" y2=\"250\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"288\" x2=\"440\" y2=\"288\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"14\" x2=\"80\" y2=\"314\" stroke=\"#ef9a9a\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"96\" y=\"52\" font-size=\"19\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1a1a1a\">Didi,</text><text x=\"96\" y=\"90\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Anjali came at 4 o&#x27;clock.</text><text x=\"96\" y=\"128\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">She returned your storybook.</text><text x=\"96\" y=\"166\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">I kept it on your table.</text><text x=\"96\" y=\"204\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">She will call you after dinner.</text><text x=\"96\" y=\"242\" font-size=\"19\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1a1a1a\">\u2014 Varun</text></svg>", "alt": "A lined notebook page with a message: Didi, Anjali came at 4 o'clock. She returned your storybook. I kept it on your table. She will call you after dinner. \u2014 Varun"}
  },
  {
    id: "g3-eng-expression-a-q17",
    prompt: "Look at the poster. Which line belongs in the empty space on this poster?",
    options: [
      { id: "a", text: "I went to a water park last Sunday." },
      { id: "b", text: "Water is my favourite drink, yum!" },
      { id: "c", text: "Turn off the tap while you brush." },
      { id: "d", text: "Please pass me the water bottle." }
    ],
    answerId: "c",
    explanation: "The poster asks everyone to save water, so it needs a helpful tip. 'I went to a water park last Sunday.' is a diary line about one person's day.",
    hints: ["A poster gives one short, useful message for everyone who sees it. Look at the heading on the poster."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 380\" width=\"480\" height=\"380\" role=\"img\" aria-label=\"A poster with a tap and a drop, and an empty line for a message\" font-family=\"Arial, Helvetica, sans-serif\"><title>A poster with a tap and a drop, and an empty line for a message</title><desc>A blue poster with the heading SAVE WATER, a drawing of a tap with one drop, and an empty white line at the bottom.</desc><rect x=\"0\" y=\"0\" width=\"480\" height=\"380\" fill=\"#ffffff\"/><rect x=\"14\" y=\"14\" width=\"452\" height=\"352\" rx=\"10\" fill=\"#e1f5fe\" stroke=\"#0277bd\" stroke-width=\"5\"/><text x=\"240\" y=\"66\" font-size=\"32\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#01579b\">SAVE WATER</text><rect x=\"150\" y=\"110\" width=\"120\" height=\"26\" rx=\"0\" fill=\"#90a4ae\" stroke=\"#37474f\" stroke-width=\"2\"/><rect x=\"250\" y=\"110\" width=\"26\" height=\"60\" rx=\"0\" fill=\"#90a4ae\" stroke=\"#37474f\" stroke-width=\"2\"/><rect x=\"190\" y=\"96\" width=\"40\" height=\"14\" rx=\"0\" fill=\"#d32f2f\" stroke=\"#7f0000\" stroke-width=\"2\"/><path d=\"M263,180 Q250,200 263,212 Q276,200 263,180 Z\" fill=\"#4fc3f7\" stroke=\"#0277bd\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"50\" y=\"250\" width=\"380\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#0277bd\" stroke-width=\"2\"/><text x=\"240\" y=\"288\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555555\">______________________</text></svg>", "alt": "A blue poster with the heading SAVE WATER, a tap with one drop, and an empty line for a message."}
  },
  {
    id: "g3-eng-expression-a-q18",
    prompt: "Esha left her homework notebook at home. Which note should she give her teacher?",
    options: [
      { id: "a", text: "Ma'am, homework is boring, so I did not bring it." },
      { id: "b", text: "Ma'am, my friend hid my notebook. It's her fault." },
      { id: "c", text: "Ma'am, I left my homework notebook at home. I will bring it tomorrow. \u2014 Esha" },
      { id: "d", text: "Ma'am, please give no homework today." }
    ],
    answerId: "c",
    explanation: "This note tells the truth and promises to bring the notebook. 'Ma'am, my friend hid my notebook' blames someone else for Esha's own mistake.",
    hints: ["A note to a teacher should be honest and polite, and say what Esha will do about the notebook."]
  },
  {
    id: "g3-eng-expression-a-q19",
    prompt: "Look at the comic on the bus. What should Pooja say in the empty bubble?",
    options: [
      { id: "a", text: "You're welcome, Nani." },
      { id: "b", text: "You're welcome, Nani. I'm going to my music class." },
      { id: "c", text: "Yes, please sit here." },
      { id: "d", text: "Good night, Nani." }
    ],
    answerId: "b",
    explanation: "Nani thanks Pooja and asks where she is going, so Pooja answers both. 'You're welcome, Nani.' answers the thanks but skips Nani's question.",
    hints: ["Read Nani's last bubble carefully. She says two things, and the second part is a question for Pooja."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 442\" width=\"620\" height=\"442\" role=\"img\" aria-label=\"Comic: Pooja and an older lady on a city bus\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: Pooja and an older lady on a city bus</title><desc>Inside a bus. Nani asks: Is this seat free, beta? Pooja says: Yes, Nani, please sit here. Nani says: Thank you, dear. Where are you going? Pooja&#x27;s last speech bubble is empty with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"620\" height=\"442\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"620\" height=\"440\" rx=\"0\" fill=\"#eceff1\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"20\" y=\"270\" width=\"120\" height=\"60\" rx=\"6\" fill=\"#b3e5fc\" stroke=\"#607d8b\" stroke-width=\"3\"/><rect x=\"170\" y=\"270\" width=\"120\" height=\"60\" rx=\"6\" fill=\"#b3e5fc\" stroke=\"#607d8b\" stroke-width=\"3\"/><rect x=\"320\" y=\"270\" width=\"120\" height=\"60\" rx=\"6\" fill=\"#b3e5fc\" stroke=\"#607d8b\" stroke-width=\"3\"/><rect x=\"470\" y=\"270\" width=\"120\" height=\"60\" rx=\"6\" fill=\"#b3e5fc\" stroke=\"#607d8b\" stroke-width=\"3\"/><rect x=\"0\" y=\"400\" width=\"620\" height=\"40\" rx=\"0\" fill=\"#90a4ae\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"141.6\" y1=\"372.75\" x2=\"139.5\" y2=\"420\" stroke=\"#b5651d\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><line x1=\"158.4\" y1=\"372.75\" x2=\"160.5\" y2=\"420\" stroke=\"#b5651d\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><polygon points=\"135.3,327.6 164.7,327.6 177.3,378.0 122.7,378.0\" fill=\"#7b1fa2\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"133.2\" y1=\"331.8\" x2=\"122.7\" y2=\"365.4\" stroke=\"#b5651d\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><line x1=\"166.8\" y1=\"331.8\" x2=\"177.3\" y2=\"365.4\" stroke=\"#b5651d\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><rect x=\"131.1\" y=\"299.25\" width=\"37.800000000000004\" height=\"25.200000000000003\" rx=\"8.4\" fill=\"#9e9e9e\" stroke=\"#9e9e9e\" stroke-width=\"1\"/><circle cx=\"150\" cy=\"309.75\" r=\"14.700000000000001\" fill=\"#b5651d\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M135.3,306.6 Q150,284.55 164.7,306.6\" fill=\"#9e9e9e\" stroke=\"#9e9e9e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"144.75\" cy=\"310.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"155.25\" cy=\"310.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M143.7,316.05 Q150,321.3 156.3,316.05\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"462.0\" y1=\"375.0\" x2=\"460.0\" y2=\"420\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"478.0\" y1=\"375.0\" x2=\"480.0\" y2=\"420\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"456.0,332.0 484.0,332.0 496.0,380.0 444.0,380.0\" fill=\"#26a69a\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"454.0\" y1=\"336.0\" x2=\"444.0\" y2=\"368.0\" stroke=\"#8d5524\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"486.0\" y1=\"336.0\" x2=\"496.0\" y2=\"368.0\" stroke=\"#8d5524\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><rect x=\"452.0\" y=\"305.0\" width=\"36.0\" height=\"24.0\" rx=\"8.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"470\" cy=\"315.0\" r=\"14.0\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M456.0,312.0 Q470,291.0 484.0,312.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"465.0\" cy=\"316.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"475.0\" cy=\"316.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M464.0,321.0 Q470,326.0 476.0,321.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"137,65 163,65 150,300\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"20\" y=\"14\" width=\"270\" height=\"52\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"137,65 163,65 150,300\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"155.0\" y=\"46.0\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Is this seat free, beta?</text><circle cx=\"24\" cy=\"18\" r=\"13\" fill=\"#0d47a1\" stroke=\"#ffffff\" stroke-width=\"2\"/><text x=\"24\" y=\"24\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">1</text><polygon points=\"457,125 483,125 470,300\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"330\" y=\"74\" width=\"270\" height=\"52\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"457,125 483,125 470,300\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"465.0\" y=\"106.0\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Yes, Nani, please sit here.</text><circle cx=\"334\" cy=\"78\" r=\"13\" fill=\"#0d47a1\" stroke=\"#ffffff\" stroke-width=\"2\"/><text x=\"334\" y=\"84\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">2</text><polygon points=\"137,205 163,205 150,300\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"20\" y=\"134\" width=\"290\" height=\"72\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"137,205 163,205 150,300\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"165.0\" y=\"164.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Thank you, dear.</text><text x=\"165.0\" y=\"187.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Where are you going?</text><circle cx=\"24\" cy=\"138\" r=\"13\" fill=\"#0d47a1\" stroke=\"#ffffff\" stroke-width=\"2\"/><text x=\"24\" y=\"144\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">3</text><polygon points=\"457,251 483,251 470,305\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"430\" y=\"196\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"457,251 483,251 470,305\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"475.0\" y=\"234.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><circle cx=\"434\" cy=\"200\" r=\"13\" fill=\"#0d47a1\" stroke=\"#ffffff\" stroke-width=\"2\"/><text x=\"434\" y=\"206\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">4</text><text x=\"150\" y=\"436\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Nani</text><text x=\"470\" y=\"436\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Pooja</text><rect x=\"1\" y=\"1\" width=\"618\" height=\"440\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic on a bus. Nani: 'Is this seat free, beta?' Pooja: 'Yes, Nani, please sit here.' Nani: 'Thank you, dear. Where are you going?' Pooja's last bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-a-q20",
    prompt: "Nidhi has a glue stick. Which line is NOT a polite way to ask her for it?",
    options: [
      { id: "a", text: "Nidhi, could I use your glue stick, please?" },
      { id: "b", text: "Give me your glue stick now, Nidhi." },
      { id: "c", text: "May I borrow your glue stick for a minute, Nidhi?" },
      { id: "d", text: "Nidhi, would you please share your glue stick?" }
    ],
    answerId: "b",
    explanation: "'Give me your glue stick now' is an order with no please. 'May I borrow your glue stick for a minute, Nidhi?' is polite, so it is not the answer.",
    hints: ["Read each line aloud. Most of them ask kindly about the glue stick; find the one that sounds like an order."]
  },
  {
    id: "g3-eng-expression-a-q21",
    prompt: "Nikhil wants to leave a note for Papa. Put the lines in the right order: (1) I will be back from there by 6. (2) Dear Papa, (3) I have gone to Yash's house to finish our project. (4) \u2014 Nikhil",
    options: [
      { id: "a", text: "2, 1, 3, 4" },
      { id: "b", text: "3, 2, 1, 4" },
      { id: "c", text: "4, 3, 1, 2" },
      { id: "d", text: "2, 3, 1, 4" }
    ],
    answerId: "d",
    explanation: "First 'Dear Papa,', then where Nikhil went, then when he will be back, then his name. '2, 1, 3, 4' says 'back from there' before telling Papa where 'there' is.",
    hints: ["Find the line that greets Papa and the line with Nikhil's name. Then put the two middle lines in a sensible order."]
  },
  {
    id: "g3-eng-expression-a-q22",
    prompt: "Karthik is at his friend Joel's house. He wants to call his mother to say he will be late. What should he say to Joel's mother?",
    options: [
      { id: "a", text: "Aunty, give me your phone." },
      { id: "b", text: "Aunty, I will take your phone home with me." },
      { id: "c", text: "Aunty, may I please use your phone to call my mother?" },
      { id: "d", text: "Aunty, why is your phone so old?" }
    ],
    answerId: "c",
    explanation: "'May I please\u2026?' politely asks for permission. 'Aunty, give me your phone.' asks for the right thing, but it sounds like an order.",
    hints: ["Karthik wants to use someone else's phone. Which words ask Joel's mother for permission first?"]
  },
  {
    id: "g3-eng-expression-a-q23",
    prompt: "Jaya wants to invite her friend Neha to watch the Republic Day parade on TV at her home. Which message is complete and clear?",
    options: [
      { id: "a", text: "Neha, please come to my home on 26 January at 9 a.m. to watch the parade on TV. \u2014 Jaya" },
      { id: "b", text: "Neha, please come to my home on 26 January. \u2014 Jaya" },
      { id: "c", text: "Neha, please come and watch the parade. \u2014 Jaya" },
      { id: "d", text: "Please come at 9 a.m. to watch the parade on TV." }
    ],
    answerId: "a",
    explanation: "Only one message has who, what, when and where. 'Neha, please come to my home on 26 January' misses the time and the reason.",
    hints: ["A good invitation tells who is invited, what for, when and where. Check each message for all of these."]
  },
  {
    id: "g3-eng-expression-a-q24",
    prompt: "Look at the picture. Gaurav did not hear the page number. What should he say to his teacher?",
    options: [
      { id: "a", text: "What? Say it again!" },
      { id: "b", text: "I don't care about the page." },
      { id: "c", text: "Excuse me, ma'am, could you please say the page number again?" },
      { id: "d", text: "Ma'am, you talk too fast!" }
    ],
    answerId: "c",
    explanation: "'Excuse me\u2026 could you please\u2026' is polite. 'What? Say it again!' asks for the same thing, but it sounds rude to a teacher.",
    hints: ["Gaurav needs the page number repeated. Think of polite words to get a teacher's attention and make a request."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 362\" width=\"600\" height=\"362\" role=\"img\" aria-label=\"Comic: a teacher speaks and Gaurav looks puzzled\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: a teacher speaks and Gaurav looks puzzled</title><desc>A classroom with a board that says English. The teacher says: Open your books to page, and the number is mumbled. Gaurav looks puzzled and has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"360\" rx=\"0\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"30\" y=\"30\" width=\"250\" height=\"140\" rx=\"0\" fill=\"#2e7d32\" stroke=\"#5d4037\" stroke-width=\"6\"/><text x=\"155\" y=\"108\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">English</text><line x1=\"111.2\" y1=\"280.5\" x2=\"109.0\" y2=\"330\" stroke=\"#c68642\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><line x1=\"128.8\" y1=\"280.5\" x2=\"131.0\" y2=\"330\" stroke=\"#c68642\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><polygon points=\"104.6,233.2 135.4,233.2 148.6,286.0 91.4,286.0\" fill=\"#5c6bc0\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"137.6\" y1=\"237.6\" x2=\"148.6\" y2=\"272.8\" stroke=\"#c68642\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><line x1=\"102.4\" y1=\"237.6\" x2=\"73.8\" y2=\"228.8\" stroke=\"#c68642\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><rect x=\"100.2\" y=\"203.5\" width=\"39.6\" height=\"26.400000000000002\" rx=\"8.8\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"120\" cy=\"214.5\" r=\"15.400000000000002\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M104.6,211.2 Q120,188.1 135.4,211.2\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"114.5\" cy=\"215.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"125.5\" cy=\"215.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M113.4,221.1 Q120,226.6 126.6,221.1\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"251,209 251,231 150,220\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"250\" y=\"186\" width=\"220\" height=\"66\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"251,209 251,231 150,220\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"360.0\" y=\"213.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Open your books</text><text x=\"360.0\" y=\"236.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">to page mm-mm\u2026</text><line x1=\"462.4\" y1=\"297.25\" x2=\"460.5\" y2=\"340\" stroke=\"#37474f\" stroke-width=\"5.699999999999999\" stroke-linecap=\"round\"/><line x1=\"477.6\" y1=\"297.25\" x2=\"479.5\" y2=\"340\" stroke=\"#37474f\" stroke-width=\"5.699999999999999\" stroke-linecap=\"round\"/><rect x=\"454.8\" y=\"254.5\" width=\"30.4\" height=\"45.599999999999994\" rx=\"5.699999999999999\" fill=\"#fbc02d\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"454.8\" y1=\"260.2\" x2=\"445.3\" y2=\"290.6\" stroke=\"#a0522d\" stroke-width=\"4.75\" stroke-linecap=\"round\"/><line x1=\"485.2\" y1=\"260.2\" x2=\"494.7\" y2=\"290.6\" stroke=\"#a0522d\" stroke-width=\"4.75\" stroke-linecap=\"round\"/><circle cx=\"470\" cy=\"240.25\" r=\"13.299999999999999\" fill=\"#a0522d\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M456.7,237.4 Q470,217.45 483.3,237.4\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"465.25\" cy=\"241.2\" r=\"1.71\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"474.75\" cy=\"241.2\" r=\"1.71\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><line x1=\"465.25\" y1=\"247.85\" x2=\"474.75\" y2=\"247.85\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><rect x=\"400\" y=\"275\" width=\"140\" height=\"18\" rx=\"0\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"2\"/><polygon points=\"501,175 527,175 480,215\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"490\" y=\"120\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"501,175 527,175 480,215\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"535.0\" y=\"158.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"120\" y=\"354\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Ma&#x27;am</text><text x=\"470\" y=\"356\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Gaurav</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"360\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic in a classroom. The board says English. The teacher says, 'Open your books to page mm-mm\u2026' Gaurav looks puzzled; his speech bubble is empty with a question mark."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-eng-expression-b-q01",
    prompt: "Look at the picture. Ritu's family visits Mr. and Mrs. D'Souza at 6 in the evening. What should Ritu say at the door?",
    options: [
      { id: "a", text: "Good evening, Uncle and Aunty!" },
      { id: "b", text: "Good night, Uncle and Aunty!" },
      { id: "c", text: "Good morning, Uncle and Aunty!" },
      { id: "d", text: "Good afternoon, Uncle and Aunty!" }
    ],
    answerId: "a",
    explanation: "At 6 in the evening, as the sun sets, we say 'Good evening'. 'Good night, Uncle and Aunty!' is for going to bed, not for arriving.",
    hints: ["Look at the sky behind Ritu and the time in the question, then pick the greeting for that part of the day."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 362\" width=\"600\" height=\"362\" role=\"img\" aria-label=\"Comic: Ritu arrives at a neighbour&#x27;s door at sunset\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: Ritu arrives at a neighbour&#x27;s door at sunset</title><desc>The sun is setting behind a house. Mr. D&#x27;Souza at the door says: Welcome, Ritu! Come in. Ritu has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"250\" rx=\"0\" fill=\"#ffcc80\" stroke=\"none\" stroke-width=\"0\"/><circle cx=\"520\" cy=\"250\" r=\"46\" fill=\"#ff7043\" stroke=\"#e64a19\" stroke-width=\"2\"/><rect x=\"0\" y=\"250\" width=\"600\" height=\"110\" rx=\"0\" fill=\"#d7ccc8\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"60\" y=\"60\" width=\"170\" height=\"260\" rx=\"0\" fill=\"#efebe9\" stroke=\"#5d4037\" stroke-width=\"3\"/><rect x=\"110\" y=\"140\" width=\"70\" height=\"180\" rx=\"0\" fill=\"#8d6e63\" stroke=\"#4e342e\" stroke-width=\"3\"/><circle cx=\"168\" cy=\"232\" r=\"4\" fill=\"#ffd54f\" stroke=\"#333333\" stroke-width=\"1\"/><line x1=\"241.2\" y1=\"280.5\" x2=\"239.0\" y2=\"330\" stroke=\"#37474f\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><line x1=\"258.8\" y1=\"280.5\" x2=\"261.0\" y2=\"330\" stroke=\"#37474f\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><rect x=\"232.4\" y=\"231.0\" width=\"35.2\" height=\"52.800000000000004\" rx=\"6.6000000000000005\" fill=\"#455a64\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"232.4\" y1=\"237.6\" x2=\"221.4\" y2=\"272.8\" stroke=\"#c68642\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><line x1=\"267.6\" y1=\"237.6\" x2=\"296.2\" y2=\"228.8\" stroke=\"#c68642\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><circle cx=\"250\" cy=\"214.5\" r=\"15.400000000000002\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M234.6,211.2 Q250,188.1 265.4,211.2\" fill=\"#9e9e9e\" stroke=\"#9e9e9e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"244.5\" cy=\"215.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"255.5\" cy=\"215.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M243.4,221.1 Q250,226.6 256.6,221.1\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"412.4\" y1=\"292.25\" x2=\"410.5\" y2=\"335\" stroke=\"#8d5524\" stroke-width=\"5.699999999999999\" stroke-linecap=\"round\"/><line x1=\"427.6\" y1=\"292.25\" x2=\"429.5\" y2=\"335\" stroke=\"#8d5524\" stroke-width=\"5.699999999999999\" stroke-linecap=\"round\"/><polygon points=\"406.7,251.4 433.3,251.4 444.7,297.0 395.3,297.0\" fill=\"#ab47bc\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"404.8\" y1=\"255.2\" x2=\"395.3\" y2=\"285.6\" stroke=\"#8d5524\" stroke-width=\"4.75\" stroke-linecap=\"round\"/><line x1=\"435.2\" y1=\"255.2\" x2=\"444.7\" y2=\"285.6\" stroke=\"#8d5524\" stroke-width=\"4.75\" stroke-linecap=\"round\"/><rect x=\"402.9\" y=\"225.75\" width=\"34.199999999999996\" height=\"22.799999999999997\" rx=\"7.6\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"420\" cy=\"235.25\" r=\"13.299999999999999\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M406.7,232.4 Q420,212.45 433.3,232.4\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"415.25\" cy=\"236.2\" r=\"1.71\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"424.75\" cy=\"236.2\" r=\"1.71\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M414.3,240.95 Q420,245.7 425.7,240.95\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"261,85 287,85 250,200\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"250\" y=\"20\" width=\"220\" height=\"66\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"261,85 287,85 250,200\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"360.0\" y=\"47.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Welcome, Ritu!</text><text x=\"360.0\" y=\"70.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Come in.</text><polygon points=\"431,175 457,175 420,215\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"420\" y=\"120\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"431,175 457,175 420,215\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"465.0\" y=\"158.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"250\" y=\"354\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Mr. D&#x27;Souza</text><text x=\"420\" y=\"354\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Ritu</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"360\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic at sunset. Mr. D'Souza at his door says, 'Welcome, Ritu! Come in.' Ritu's speech bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-b-q02",
    prompt: "Mehul's mother says, \"Mehul, this is my friend, Dr. Anita.\" What should Mehul say?",
    options: [
      { id: "a", text: "Bye, Dr. Anita!" },
      { id: "b", text: "Who called you here?" },
      { id: "c", text: "I am not ill today." },
      { id: "d", text: "Hello, Dr. Anita. Nice to meet you." }
    ],
    answerId: "d",
    explanation: "'Nice to meet you' is the polite reply to an introduction. 'Bye, Dr. Anita!' is for leaving, not for meeting someone.",
    hints: ["Mehul is meeting Dr. Anita for the first time. What do we say when we meet someone new?"]
  },
  {
    id: "g3-eng-expression-b-q03",
    prompt: "A new family has moved in next door. Sameer sees a boy his age outside. Which is the best way for Sameer to introduce himself?",
    options: [
      { id: "a", text: "Hi! Can I ride your new cycle?" },
      { id: "b", text: "This lane is mine, not yours." },
      { id: "c", text: "Hi! I'm Sameer. I live in the house next door." },
      { id: "d", text: "Hi! What is your house number?" }
    ],
    answerId: "c",
    explanation: "Sameer says hello, gives his name and says where he lives. 'Hi! Can I ride your new cycle?' asks for a favour before the boy even knows him.",
    hints: ["Think about what the new boy next door would like to know about Sameer when they first meet."]
  },
  {
    id: "g3-eng-expression-b-q04",
    prompt: "Look at the picture. Pallavi wants a small glass of sugarcane juice without ice. What should she say?",
    options: [
      { id: "a", text: "Uncle, small glass. No ice. Quick!" },
      { id: "b", text: "Uncle, why do you put ice in juice?" },
      { id: "c", text: "Uncle, I want all your juice." },
      { id: "d", text: "Uncle, could I have a small glass without ice, please?" }
    ],
    answerId: "d",
    explanation: "This line asks clearly and politely. The 'small glass, no ice, quick' line has the right details, but it is rude and rushes the juice seller.",
    hints: ["Pallavi must ask clearly for what she wants at the juice stall and sound polite too."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 362\" width=\"600\" height=\"362\" role=\"img\" aria-label=\"Comic: Pallavi at a sugarcane juice stall\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: Pallavi at a sugarcane juice stall</title><desc>A sugarcane juice cart with green canes and small glasses. The juice seller says: Yes, beta? Pallavi has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"360\" rx=\"0\" fill=\"#e8f5e9\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"30\" y=\"200\" width=\"260\" height=\"120\" rx=\"0\" fill=\"#ffb74d\" stroke=\"#e65100\" stroke-width=\"3\"/><text x=\"160\" y=\"268\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#3e2723\">SUGARCANE JUICE</text><line x1=\"60\" y1=\"200\" x2=\"70\" y2=\"60\" stroke=\"#7cb342\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"72\" y1=\"200\" x2=\"82\" y2=\"60\" stroke=\"#7cb342\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"84\" y1=\"200\" x2=\"94\" y2=\"60\" stroke=\"#7cb342\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"96\" y1=\"200\" x2=\"106\" y2=\"60\" stroke=\"#7cb342\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"200\" x2=\"118\" y2=\"60\" stroke=\"#7cb342\" stroke-width=\"7\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"200\" x2=\"130\" y2=\"60\" stroke=\"#7cb342\" stroke-width=\"7\" stroke-linecap=\"round\"/><rect x=\"200\" y=\"168\" width=\"20\" height=\"32\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#333333\" stroke-width=\"1.5\"/><rect x=\"226\" y=\"168\" width=\"20\" height=\"32\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#333333\" stroke-width=\"1.5\"/><rect x=\"252\" y=\"168\" width=\"20\" height=\"32\" rx=\"0\" fill=\"#fff9c4\" stroke=\"#333333\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"330\" r=\"14\" fill=\"#424242\" stroke=\"#000000\" stroke-width=\"2\"/><circle cx=\"260\" cy=\"330\" r=\"14\" fill=\"#424242\" stroke=\"#000000\" stroke-width=\"2\"/><line x1=\"153.6\" y1=\"164.0\" x2=\"152.0\" y2=\"200\" stroke=\"#37474f\" stroke-width=\"4.800000000000001\" stroke-linecap=\"round\"/><line x1=\"166.4\" y1=\"164.0\" x2=\"168.0\" y2=\"200\" stroke=\"#37474f\" stroke-width=\"4.800000000000001\" stroke-linecap=\"round\"/><rect x=\"147.2\" y=\"128.0\" width=\"25.6\" height=\"38.400000000000006\" rx=\"4.800000000000001\" fill=\"#1e88e5\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"147.2\" y1=\"132.8\" x2=\"139.2\" y2=\"158.4\" stroke=\"#8d5524\" stroke-width=\"4.0\" stroke-linecap=\"round\"/><line x1=\"172.8\" y1=\"132.8\" x2=\"180.8\" y2=\"158.4\" stroke=\"#8d5524\" stroke-width=\"4.0\" stroke-linecap=\"round\"/><circle cx=\"160\" cy=\"116.0\" r=\"11.200000000000001\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M148.8,113.6 Q160,96.8 171.2,113.6\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"156.0\" cy=\"116.8\" r=\"1.4400000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"164.0\" cy=\"116.8\" r=\"1.4400000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M155.2,120.8 Q160,124.8 164.8,120.8\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"442.0\" y1=\"295.0\" x2=\"440.0\" y2=\"340\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"458.0\" y1=\"295.0\" x2=\"460.0\" y2=\"340\" stroke=\"#c68642\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"436.0,252.0 464.0,252.0 476.0,300.0 424.0,300.0\" fill=\"#e91e63\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"434.0\" y1=\"256.0\" x2=\"424.0\" y2=\"288.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"466.0\" y1=\"256.0\" x2=\"476.0\" y2=\"288.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><rect x=\"432.0\" y=\"225.0\" width=\"36.0\" height=\"24.0\" rx=\"8.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"450\" cy=\"235.0\" r=\"14.0\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M436.0,232.0 Q450,211.0 464.0,232.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"445.0\" cy=\"236.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"455.0\" cy=\"236.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M444.0,241.0 Q450,246.0 456.0,241.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"261,85 287,85 175,110\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"250\" y=\"30\" width=\"160\" height=\"56\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"261,85 287,85 175,110\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"330.0\" y=\"64.0\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Yes, beta?</text><polygon points=\"471,185 497,185 450,205\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"460\" y=\"130\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"471,185 497,185 450,205\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"505.0\" y=\"168.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"450\" y=\"356\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Pallavi</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"360\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic at a sugarcane juice cart. The juice seller says, 'Yes, beta?' Pallavi's speech bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-b-q05",
    prompt: "Rehan wants to play carrom at Ali's house after his homework. What should he ask his father?",
    options: [
      { id: "a", text: "Abba, may I go to Ali's house to play carrom after my homework?" },
      { id: "b", text: "Abba, I am going to Ali's house now. Bye!" },
      { id: "c", text: "Abba, Ali's carrom board is better than ours." },
      { id: "d", text: "Abba, please do my homework so I can play." }
    ],
    answerId: "a",
    explanation: "'May I go\u2026?' asks Abba for permission. 'Abba, I am going to Ali's house now. Bye!' tells him instead of asking, and skips the homework.",
    hints: ["Rehan needs his father's yes before he goes to play carrom. Which line asks for permission?"]
  },
  {
    id: "g3-eng-expression-b-q06",
    prompt: "Navya spilled water on Dadi's newspaper while filling her bottle. What should she say?",
    options: [
      { id: "a", text: "Dadi, your newspaper was in my way." },
      { id: "b", text: "Oh no! Who kept this newspaper here?" },
      { id: "c", text: "Dadi, it's only an old newspaper." },
      { id: "d", text: "Sorry, Dadi! I spilled water on it by mistake. Let me dry it." }
    ],
    answerId: "d",
    explanation: "Navya says sorry and offers to help. 'Dadi, your newspaper was in my way.' blames Dadi for Navya's own mistake.",
    hints: ["Navya made the newspaper wet. Think about saying sorry and offering to help fix it."]
  },
  {
    id: "g3-eng-expression-b-q07",
    prompt: "Look at the picture. The auto driver runs after Kavin with the tiffin box he left in the auto. What should Kavin say?",
    options: [
      { id: "a", text: "Why did you run after me, Uncle?" },
      { id: "b", text: "Thank you so much, Uncle! I almost lost my tiffin." },
      { id: "c", text: "Keep it, Uncle. I don't want it." },
      { id: "d", text: "You should have come faster." }
    ],
    answerId: "b",
    explanation: "Kavin should thank the driver for his kindness. 'Why did you run after me, Uncle?' sounds puzzled, and it never says thanks.",
    hints: ["The auto driver did something kind for Kavin. Which words show Kavin is grateful?"],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 362\" width=\"600\" height=\"362\" role=\"img\" aria-label=\"Comic: an auto driver runs to Kavin holding a steel tiffin box\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: an auto driver runs to Kavin holding a steel tiffin box</title><desc>An auto rickshaw stands on the road. The driver holds out a steel tiffin box and says: Beta, you left this in my auto! Kavin has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"360\" rx=\"0\" fill=\"#e3f2fd\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"0\" y=\"300\" width=\"600\" height=\"60\" rx=\"0\" fill=\"#9e9e9e\" stroke=\"none\" stroke-width=\"0\"/><path d=\"M30,300 L30,200 Q40,150 110,150 L190,150 L190,300 Z\" fill=\"#fdd835\" stroke=\"#333333\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"30\" y=\"230\" width=\"160\" height=\"70\" rx=\"0\" fill=\"#2e7d32\" stroke=\"#333333\" stroke-width=\"3\"/><circle cx=\"60\" cy=\"305\" r=\"20\" fill=\"#212121\" stroke=\"#000000\" stroke-width=\"2\"/><circle cx=\"170\" cy=\"305\" r=\"20\" fill=\"#212121\" stroke=\"#000000\" stroke-width=\"2\"/><line x1=\"261.6\" y1=\"272.75\" x2=\"259.5\" y2=\"320\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><line x1=\"278.4\" y1=\"272.75\" x2=\"280.5\" y2=\"320\" stroke=\"#37474f\" stroke-width=\"6.300000000000001\" stroke-linecap=\"round\"/><rect x=\"253.2\" y=\"225.5\" width=\"33.6\" height=\"50.400000000000006\" rx=\"6.300000000000001\" fill=\"#90a4ae\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"253.2\" y1=\"231.8\" x2=\"242.7\" y2=\"265.4\" stroke=\"#8d5524\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><line x1=\"286.8\" y1=\"231.8\" x2=\"314.1\" y2=\"223.39999999999998\" stroke=\"#8d5524\" stroke-width=\"5.25\" stroke-linecap=\"round\"/><circle cx=\"270\" cy=\"209.75\" r=\"14.700000000000001\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M255.3,206.6 Q270,184.55 284.7,206.6\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"264.75\" cy=\"210.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"275.25\" cy=\"210.8\" r=\"1.8900000000000001\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M263.7,216.05 Q270,221.3 276.3,216.05\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><rect x=\"298\" y=\"196\" width=\"34\" height=\"14\" rx=\"0\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"298\" y=\"210\" width=\"34\" height=\"14\" rx=\"0\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/><rect x=\"298\" y=\"224\" width=\"34\" height=\"14\" rx=\"0\" fill=\"#cfd8dc\" stroke=\"#455a64\" stroke-width=\"1.5\"/><line x1=\"462.0\" y1=\"285.0\" x2=\"460.0\" y2=\"330\" stroke=\"#37474f\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"478.0\" y1=\"285.0\" x2=\"480.0\" y2=\"330\" stroke=\"#37474f\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><rect x=\"454.0\" y=\"240.0\" width=\"32.0\" height=\"48.0\" rx=\"6.0\" fill=\"#ef6c00\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"454.0\" y1=\"246.0\" x2=\"444.0\" y2=\"278.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"486.0\" y1=\"246.0\" x2=\"496.0\" y2=\"278.0\" stroke=\"#c68642\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><circle cx=\"470\" cy=\"225.0\" r=\"14.0\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M456.0,222.0 Q470,201.0 484.0,222.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"465.0\" cy=\"226.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"475.0\" cy=\"226.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M464.0,231.0 Q470,236.0 476.0,231.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"257,85 283,85 270,200\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"150\" y=\"20\" width=\"270\" height=\"66\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"257,85 283,85 270,200\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"285.0\" y=\"47.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Beta, you left this</text><text x=\"285.0\" y=\"70.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">in my auto!</text><polygon points=\"461,175 487,175 470,205\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"450\" y=\"120\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"461,175 487,175 470,205\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"495.0\" y=\"158.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"270\" y=\"352\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Driver</text><text x=\"470\" y=\"352\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Kavin</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"360\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic on a road. An auto driver holds out a steel tiffin box and says, 'Beta, you left this in my auto!' Kavin's speech bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-b-q08",
    prompt: "Ayesha's little cousin Bittu is trying hard to tie his shoelaces. What is the kindest thing Ayesha can say?",
    options: [
      { id: "a", text: "Wear slippers next time." },
      { id: "b", text: "Shall I help you tie your laces, Bittu?" },
      { id: "c", text: "You are so slow, Bittu!" },
      { id: "d", text: "I can tie mine. Why can't you?" }
    ],
    answerId: "b",
    explanation: "'Shall I help you\u2026?' kindly offers help. 'Wear slippers next time.' may sound like a quick fix, but it does not help Bittu now.",
    hints: ["Ayesha wants to offer help with the shoelaces without making Bittu feel bad."]
  },
  {
    id: "g3-eng-expression-b-q09",
    prompt: "Look at the picture. Mitali is waiting at the school gate for her mother. A neighbour offers her a ride home. What should Mitali say?",
    options: [
      { id: "a", text: "Thank you, Uncle, but Amma told me to wait here for her." },
      { id: "b", text: "Okay, let's go!" },
      { id: "c", text: "No. I don't like your scooter." },
      { id: "d", text: "Why do you ask so many questions?" }
    ],
    answerId: "a",
    explanation: "Mitali thanks him, says no politely and gives the reason. 'Okay, let's go!' is wrong; Amma told her to wait at the gate.",
    hints: ["Mitali must follow her mother's plan. Think how to say no to the ride politely."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 362\" width=\"600\" height=\"362\" role=\"img\" aria-label=\"Comic: a neighbour on a scooter stops near Mitali at the school gate\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: a neighbour on a scooter stops near Mitali at the school gate</title><desc>Mitali stands at the school gate. A neighbour on a red scooter says: Hop on, Mitali! I&#x27;ll drop you home. Mitali has an empty speech bubble with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"600\" height=\"362\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"600\" height=\"360\" rx=\"0\" fill=\"#f1f8e9\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"0\" y=\"300\" width=\"600\" height=\"60\" rx=\"0\" fill=\"#bdbdbd\" stroke=\"none\" stroke-width=\"0\"/><line x1=\"360\" y1=\"120\" x2=\"360\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"390\" y1=\"120\" x2=\"390\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"420\" y1=\"120\" x2=\"420\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"450\" y1=\"120\" x2=\"450\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"480\" y1=\"120\" x2=\"480\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"510\" y1=\"120\" x2=\"510\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"540\" y1=\"120\" x2=\"540\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"570\" y1=\"120\" x2=\"570\" y2=\"300\" stroke=\"#546e7a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"350\" y1=\"130\" x2=\"590\" y2=\"130\" stroke=\"#546e7a\" stroke-width=\"6\" stroke-linecap=\"round\"/><rect x=\"400\" y=\"80\" width=\"160\" height=\"40\" rx=\"0\" fill=\"#1565c0\" stroke=\"#0d47a1\" stroke-width=\"2\"/><text x=\"480\" y=\"107\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">SCHOOL</text><path d=\"M60,280 L200,280 L215,240 L150,240 L120,200 L100,200\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"10\" stroke-linecap=\"round\"/><circle cx=\"80\" cy=\"300\" r=\"20\" fill=\"#212121\" stroke=\"#000000\" stroke-width=\"2\"/><circle cx=\"210\" cy=\"300\" r=\"20\" fill=\"#212121\" stroke=\"#000000\" stroke-width=\"2\"/><line x1=\"142.8\" y1=\"209.5\" x2=\"141.0\" y2=\"250\" stroke=\"#37474f\" stroke-width=\"5.4\" stroke-linecap=\"round\"/><line x1=\"157.2\" y1=\"209.5\" x2=\"159.0\" y2=\"250\" stroke=\"#37474f\" stroke-width=\"5.4\" stroke-linecap=\"round\"/><rect x=\"135.6\" y=\"169.0\" width=\"28.8\" height=\"43.2\" rx=\"5.4\" fill=\"#6d4c41\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"135.6\" y1=\"174.39999999999998\" x2=\"126.6\" y2=\"203.2\" stroke=\"#c68642\" stroke-width=\"4.5\" stroke-linecap=\"round\"/><line x1=\"164.4\" y1=\"174.39999999999998\" x2=\"187.8\" y2=\"167.2\" stroke=\"#c68642\" stroke-width=\"4.5\" stroke-linecap=\"round\"/><circle cx=\"150\" cy=\"155.5\" r=\"12.6\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M137.4,152.8 Q150,133.9 162.6,152.8\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"145.5\" cy=\"156.4\" r=\"1.62\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"154.5\" cy=\"156.4\" r=\"1.62\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M144.6,160.9 Q150,165.4 155.4,160.9\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"432.0\" y1=\"285.0\" x2=\"430.0\" y2=\"330\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"448.0\" y1=\"285.0\" x2=\"450.0\" y2=\"330\" stroke=\"#8d5524\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"426.0,242.0 454.0,242.0 466.0,290.0 414.0,290.0\" fill=\"#ffca28\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"424.0\" y1=\"246.0\" x2=\"414.0\" y2=\"278.0\" stroke=\"#8d5524\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"456.0\" y1=\"246.0\" x2=\"466.0\" y2=\"278.0\" stroke=\"#8d5524\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><rect x=\"422.0\" y=\"215.0\" width=\"36.0\" height=\"24.0\" rx=\"8.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"440\" cy=\"225.0\" r=\"14.0\" fill=\"#8d5524\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M426.0,222.0 Q440,201.0 454.0,222.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"435.0\" cy=\"226.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"445.0\" cy=\"226.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M434.0,231.0 Q440,236.0 446.0,231.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"137,85 163,85 150,145\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"20\" y=\"20\" width=\"270\" height=\"66\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"137,85 163,85 150,145\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"155.0\" y=\"47.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Hop on, Mitali!</text><text x=\"155.0\" y=\"70.5\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">I&#x27;ll drop you home.</text><polygon points=\"419,187 419,209 425,215\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"330\" y=\"160\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"419,187 419,209 425,215\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"375.0\" y=\"198.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><text x=\"150\" y=\"345\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Neighbour</text><text x=\"440\" y=\"352\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Mitali</text><rect x=\"1\" y=\"1\" width=\"598\" height=\"360\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic at a school gate. A neighbour on a scooter says, 'Hop on, Mitali! I'll drop you home.' Mitali's speech bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-b-q10",
    prompt: "[D2] At the Clinic (dialogue)\n\n**Receptionist:** Good morning! How can I help you?\n**Nisha:** Good morning. My grandmother has an appointment with Dr. Fernandes at 11 o'clock.\n**Receptionist:** May I know her name, please?\n**Nisha:** Her name is Kamala Pillai.\n**Receptionist:** Thank you. Please take a seat. The doctor will call her in ten minutes.\n**Nisha:** Thank you very much.\n\nRead Dialogue D2 (at the clinic). Who has an appointment with Dr. Fernandes?",
    options: [
      { id: "a", text: "Nisha's grandmother" },
      { id: "b", text: "Nisha" },
      { id: "c", text: "The receptionist" },
      { id: "d", text: "Nisha's mother" }
    ],
    answerId: "a",
    explanation: "Nisha says her grandmother has the appointment. 'Nisha' is tempting because she does all the talking, but she is only helping.",
    hints: ["Read the line Nisha speaks right after her greeting at the clinic."]
  },
  {
    id: "g3-eng-expression-b-q11",
    prompt: "[D2] At the Clinic (dialogue)\n\n**Receptionist:** Good morning! How can I help you?\n**Nisha:** Good morning. My grandmother has an appointment with Dr. Fernandes at 11 o'clock.\n**Receptionist:** May I know her name, please?\n**Nisha:** Her name is Kamala Pillai.\n**Receptionist:** Thank you. Please take a seat. The doctor will call her in ten minutes.\n**Nisha:** Thank you very much.\n\nRead Dialogue D2. Which question does the receptionist ask to find out who the patient is?",
    options: [
      { id: "a", text: "How can I help you?" },
      { id: "b", text: "May I know her name, please?" },
      { id: "c", text: "Please take a seat." },
      { id: "d", text: "The doctor will call her in ten minutes." }
    ],
    answerId: "b",
    explanation: "Asking for her name tells the receptionist who the patient is. 'How can I help you?' is a question too, but it only asks why Nisha came.",
    hints: ["Look for the receptionist's line that asks for a fact about the patient."]
  },
  {
    id: "g3-eng-expression-b-q12",
    prompt: "[D2] At the Clinic (dialogue)\n\n**Receptionist:** Good morning! How can I help you?\n**Nisha:** Good morning. My grandmother has an appointment with Dr. Fernandes at 11 o'clock.\n**Receptionist:** May I know her name, please?\n**Nisha:** Her name is Kamala Pillai.\n**Receptionist:** Thank you. Please take a seat. The doctor will call her in ten minutes.\n**Nisha:** Thank you very much.\n\nRead Dialogue D2. What will Nisha and her grandmother do next?",
    options: [
      { id: "a", text: "Sit down and wait for the doctor to call" },
      { id: "b", text: "Walk into the doctor's room at once" },
      { id: "c", text: "Go back home" },
      { id: "d", text: "Ask for a new appointment" }
    ],
    answerId: "a",
    explanation: "The receptionist asks them to take a seat until the doctor calls. 'Walk into the doctor's room at once' is wrong; they must wait ten minutes.",
    hints: ["Read the receptionist's last line to Nisha and do what it asks."]
  },
  {
    id: "g3-eng-expression-b-q13",
    prompt: "On 25 December, Arnav visits his friend Clara's home. What is the best greeting?",
    options: [
      { id: "a", text: "Happy Holi, Clara!" },
      { id: "b", text: "Eid Mubarak, Clara!" },
      { id: "c", text: "Merry Christmas, Clara!" },
      { id: "d", text: "Happy Independence Day, Clara!" }
    ],
    answerId: "c",
    explanation: "25 December is Christmas, so Arnav says 'Merry Christmas'. 'Happy Holi, Clara!' is a festival wish, but Holi comes in spring.",
    hints: ["Think which festival comes on 25 December and how we greet friends on that day."]
  },
  {
    id: "g3-eng-expression-b-q14",
    prompt: "Look at Ananya's invitation card. What should the guests bring?",
    options: [
      { id: "a", text: "A storybook" },
      { id: "b", text: "A torch" },
      { id: "c", text: "A gift" },
      { id: "d", text: "A mat to sit on" }
    ],
    answerId: "d",
    explanation: "The card says 'Bring: a mat to sit on'. 'A storybook' sounds right for a story hour, but the card does not ask for one.",
    hints: ["Find the line on Ananya's card that begins with 'Bring'."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 580 340\" width=\"580\" height=\"340\" role=\"img\" aria-label=\"Ananya&#x27;s invitation card for a story hour\" font-family=\"Arial, Helvetica, sans-serif\"><title>Ananya&#x27;s invitation card for a story hour</title><desc>An invitation card with a moon, stars and an open book. Come to my Story Hour! When: Saturday, 14 November, 5 p.m. Where: Terrace, Sunflower Apartments Bring: a mat to sit on From: Ananya</desc><rect x=\"0\" y=\"0\" width=\"580\" height=\"340\" fill=\"#ffffff\"/><rect x=\"14\" y=\"14\" width=\"552\" height=\"312\" rx=\"18\" fill=\"#ede7f6\" stroke=\"#5e35b1\" stroke-width=\"4\"/><rect x=\"470\" y=\"230\" width=\"70\" height=\"50\" rx=\"0\" fill=\"#42a5f5\" stroke=\"#0d47a1\" stroke-width=\"2\"/><line x1=\"505\" y1=\"230\" x2=\"505\" y2=\"280\" stroke=\"#0d47a1\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"80\" cy=\"70\" r=\"18\" fill=\"#fff176\" stroke=\"#f9a825\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"64\" r=\"16\" fill=\"#ede7f6\" stroke=\"none\" stroke-width=\"0\"/><circle cx=\"100\" cy=\"270\" r=\"6\" fill=\"#fff176\" stroke=\"#f9a825\" stroke-width=\"1\"/><circle cx=\"60\" cy=\"230\" r=\"5\" fill=\"#fff176\" stroke=\"#f9a825\" stroke-width=\"1\"/><text x=\"290\" y=\"70\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#3e2723\">Come to my Story Hour!</text><text x=\"290\" y=\"112\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#3e2723\">When: Saturday, 14 November, 5 p.m.</text><text x=\"290\" y=\"148\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#3e2723\">Where: Terrace, Sunflower Apartments</text><text x=\"290\" y=\"184\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#3e2723\">Bring: a mat to sit on</text><text x=\"290\" y=\"220\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#3e2723\">From: Ananya</text></svg>", "alt": "Invitation card with a moon and a book: Come to my Story Hour! When: Saturday, 14 November, 5 p.m. Where: Terrace, Sunflower Apartments Bring: a mat to sit on From: Ananya"}
  },
  {
    id: "g3-eng-expression-b-q15",
    prompt: "Ananya wants one friendly last line for her Story Hour invitation card. Which line is best?",
    options: [
      { id: "a", text: "Do not come late, or else!" },
      { id: "b", text: "I hope it rains all day." },
      { id: "c", text: "Hope to see you there!" },
      { id: "d", text: "My terrace is very dusty." }
    ],
    answerId: "c",
    explanation: "'Hope to see you there!' is warm and friendly. 'Do not come late, or else!' sounds like a warning, so it does not welcome guests.",
    hints: ["The last line of an invitation card should make the guests feel welcome."]
  },
  {
    id: "g3-eng-expression-b-q16",
    prompt: "Look at the notice. On which day is the eye check-up?",
    options: [
      { id: "a", text: "Thursday" },
      { id: "b", text: "Monday" },
      { id: "c", text: "Tuesday" },
      { id: "d", text: "Friday" }
    ],
    answerId: "c",
    explanation: "The notice says 'Day: Tuesday, 8 December'. 'Thursday' also starts with T, so read the whole word carefully.",
    hints: ["Find the Day line on the eye check-up notice."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 580 380\" width=\"580\" height=\"380\" role=\"img\" aria-label=\"A school notice pinned on a notice board about an eye check-up\" font-family=\"Arial, Helvetica, sans-serif\"><title>A school notice pinned on a notice board about an eye check-up</title><desc>A notice board. NOTICE. Eye Check-up. For: Class 3 Day: Tuesday, 8 December Time: 11 a.m. Place: Medical Room If you wear glasses, please bring them. \u2014 Mr. Bhatt, Class Teacher</desc><rect x=\"0\" y=\"0\" width=\"580\" height=\"380\" fill=\"#ffffff\"/><rect x=\"10\" y=\"10\" width=\"560\" height=\"360\" rx=\"8\" fill=\"#a1887f\" stroke=\"#4e342e\" stroke-width=\"6\"/><rect x=\"70\" y=\"34\" width=\"440\" height=\"316\" rx=\"0\" fill=\"#ffffff\" stroke=\"#9e9e9e\" stroke-width=\"1.5\"/><circle cx=\"290\" cy=\"44\" r=\"8\" fill=\"#e53935\" stroke=\"#8e0000\" stroke-width=\"2\"/><text x=\"290\" y=\"80\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#b71c1c\">NOTICE</text><text x=\"290\" y=\"112\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">Eye Check-up</text><text x=\"100\" y=\"150\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">For: Class 3</text><text x=\"100\" y=\"180\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Day: Tuesday, 8 December</text><text x=\"100\" y=\"210\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Time: 11 a.m.</text><text x=\"100\" y=\"240\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Place: Medical Room</text><text x=\"100\" y=\"270\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">If you wear glasses, please bring them.</text><text x=\"100\" y=\"300\" font-size=\"18\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">\u2014 Mr. Bhatt, Class Teacher</text></svg>", "alt": "Notice board: NOTICE \u2014 Eye Check-up. For: Class 3 Day: Tuesday, 8 December Time: 11 a.m. Place: Medical Room If you wear glasses, please bring them. \u2014 Mr. Bhatt, Class Teacher"}
  },
  {
    id: "g3-eng-expression-b-q17",
    prompt: "[N2] Eye Check-up (school notice)\n\n> **NOTICE \u2014 Eye Check-up**\n> For: Class 3\n> Day: Tuesday, 8 December\n> Time: 11 a.m.\n> Place: Medical Room\n> If you wear glasses, please bring them.\n> \u2014 Mr. Bhatt, Class Teacher\n\nRead Notice N2 (Eye Check-up). Ravi in Class 3 wears glasses. What must he remember to do?",
    options: [
      { id: "a", text: "Go to the School Hall at 11 a.m. on Tuesday with his glasses" },
      { id: "b", text: "Go to the Medical Room at 11 a.m. on Tuesday with his glasses" },
      { id: "c", text: "Go to the Medical Room at 11 a.m. on Tuesday without his glasses" },
      { id: "d", text: "Go to the Medical Room on Thursday with his glasses" }
    ],
    answerId: "b",
    explanation: "Ravi needs the right place, time and day, and his glasses. 'Go to the School Hall at 11 a.m. on Tuesday with his glasses' has the wrong place.",
    hints: ["Check four things in the eye check-up notice: the place, the time, the day, and what children with glasses must do."]
  },
  {
    id: "g3-eng-expression-b-q18",
    prompt: "Look at Varun's message. When will Anjali call Didi?",
    options: [
      { id: "a", text: "At 4 o'clock" },
      { id: "b", text: "After dinner" },
      { id: "c", text: "Tomorrow morning" },
      { id: "d", text: "Before lunch" }
    ],
    answerId: "b",
    explanation: "Varun wrote, 'She will call you after dinner.' 'At 4 o'clock' is when Anjali came to the house, not when she will call.",
    hints: ["Find the last line of Varun's message, just before his name."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 330\" width=\"480\" height=\"330\" role=\"img\" aria-label=\"A short message written on a page from a notebook\" font-family=\"Arial, Helvetica, sans-serif\"><title>A short message written on a page from a notebook</title><desc>A lined notebook page. Didi, Anjali came at 4 o&#x27;clock. She returned your storybook. I kept it on your table. She will call you after dinner. \u2014 Varun</desc><rect x=\"0\" y=\"0\" width=\"480\" height=\"330\" fill=\"#eceff1\"/><rect x=\"30\" y=\"14\" width=\"420\" height=\"300\" rx=\"4\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"40\" y1=\"60\" x2=\"440\" y2=\"60\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"98\" x2=\"440\" y2=\"98\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"136\" x2=\"440\" y2=\"136\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"174\" x2=\"440\" y2=\"174\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"212\" x2=\"440\" y2=\"212\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"250\" x2=\"440\" y2=\"250\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"40\" y1=\"288\" x2=\"440\" y2=\"288\" stroke=\"#bbdefb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"14\" x2=\"80\" y2=\"314\" stroke=\"#ef9a9a\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"96\" y=\"52\" font-size=\"19\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1a1a1a\">Didi,</text><text x=\"96\" y=\"90\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">Anjali came at 4 o&#x27;clock.</text><text x=\"96\" y=\"128\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">She returned your storybook.</text><text x=\"96\" y=\"166\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">I kept it on your table.</text><text x=\"96\" y=\"204\" font-size=\"19\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1a1a1a\">She will call you after dinner.</text><text x=\"96\" y=\"242\" font-size=\"19\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#1a1a1a\">\u2014 Varun</text></svg>", "alt": "A lined notebook page with a message: Didi, Anjali came at 4 o'clock. She returned your storybook. I kept it on your table. She will call you after dinner. \u2014 Varun"}
  },
  {
    id: "g3-eng-expression-b-q19",
    prompt: "[M1] Varun's Message (short message)\n\n> Didi,\n> Anjali came at 4 o'clock.\n> She returned your storybook.\n> I kept it on your table.\n> She will call you after dinner.\n> \u2014 Varun\n\nRead Message M1. Who wrote this message?",
    options: [
      { id: "a", text: "Varun" },
      { id: "b", text: "Didi" },
      { id: "c", text: "Anjali" },
      { id: "d", text: "Amma" }
    ],
    answerId: "a",
    explanation: "The message ends with '\u2014 Varun', so Varun wrote it. 'Didi' is the person the message is for, named at the top.",
    hints: ["In a short message, the writer's name usually comes at the very end."]
  },
  {
    id: "g3-eng-expression-b-q20",
    prompt: "Look at the 'Be Kind to Animals' poster. Which sentence should go on the blank line?",
    options: [
      { id: "a", text: "My dog is called Tuffy and he is brown." },
      { id: "b", text: "Animals look funny in cartoons." },
      { id: "c", text: "Keep a bowl of clean water out for birds and dogs in summer." },
      { id: "d", text: "Yesterday I saw a cow on the road." }
    ],
    answerId: "c",
    explanation: "This line tells everyone a kind thing to do for animals. 'My dog is called Tuffy and he is brown.' is about one pet, not a message for everyone.",
    hints: ["A poster tells everyone what to do. Look at the poster's heading about animals."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 580 380\" width=\"580\" height=\"380\" role=\"img\" aria-label=\"A poster about animals with an empty line for a message\" font-family=\"Arial, Helvetica, sans-serif\"><title>A poster about animals with an empty line for a message</title><desc>An orange poster with the heading BE KIND TO ANIMALS, a drawing of a dog and two small birds, and an empty white line at the bottom.</desc><rect x=\"0\" y=\"0\" width=\"580\" height=\"380\" fill=\"#ffffff\"/><rect x=\"14\" y=\"14\" width=\"552\" height=\"352\" rx=\"10\" fill=\"#fff3e0\" stroke=\"#ef6c00\" stroke-width=\"5\"/><text x=\"290\" y=\"64\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#bf360c\">BE KIND TO ANIMALS</text><ellipse cx=\"200\" cy=\"188\" rx=\"24\" ry=\"11\" fill=\"#a1887f\" stroke=\"#333333\" stroke-width=\"1.5\"/><line x1=\"184\" y1=\"196\" x2=\"184\" y2=\"210\" stroke=\"#a1887f\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"192\" y1=\"196\" x2=\"192\" y2=\"210\" stroke=\"#a1887f\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"196\" x2=\"210\" y2=\"210\" stroke=\"#a1887f\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"196\" x2=\"218\" y2=\"210\" stroke=\"#a1887f\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"226\" cy=\"176\" r=\"10\" fill=\"#a1887f\" stroke=\"#333333\" stroke-width=\"1.5\"/><ellipse cx=\"222\" cy=\"170\" rx=\"4\" ry=\"8\" fill=\"#5d3a1a\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"230\" cy=\"174\" r=\"1.6\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"236\" cy=\"179\" r=\"2\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M176,184 Q166,170 170,166\" fill=\"none\" stroke=\"#a1887f\" stroke-width=\"3\" stroke-linecap=\"round\"/><ellipse cx=\"370\" cy=\"150\" rx=\"9\" ry=\"6\" fill=\"#78909c\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"378\" cy=\"145\" r=\"4.5\" fill=\"#78909c\" stroke=\"#333333\" stroke-width=\"1\"/><polygon points=\"382,144 387,146 382,147\" fill=\"#ffb300\" stroke=\"#333333\" stroke-width=\"1\"/><ellipse cx=\"410\" cy=\"160\" rx=\"9\" ry=\"6\" fill=\"#8d6e63\" stroke=\"#333333\" stroke-width=\"1\"/><circle cx=\"418\" cy=\"155\" r=\"4.5\" fill=\"#8d6e63\" stroke=\"#333333\" stroke-width=\"1\"/><polygon points=\"422,154 427,156 422,157\" fill=\"#ffb300\" stroke=\"#333333\" stroke-width=\"1\"/><rect x=\"80\" y=\"260\" width=\"420\" height=\"60\" rx=\"8\" fill=\"#ffffff\" stroke=\"#ef6c00\" stroke-width=\"2\"/><text x=\"290\" y=\"298\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555555\">____________________________</text></svg>", "alt": "An orange poster with the heading BE KIND TO ANIMALS, a dog and two small birds, and an empty line for a message."}
  },
  {
    id: "g3-eng-expression-b-q21",
    prompt: "Look at the comic. What is the best thing for Rohini to say next?",
    options: [
      { id: "a", text: "Thank you, ma'am, I'll go now." },
      { id: "b", text: "All right, ma'am. I will go after the test." },
      { id: "c", text: "But I want to go now!" },
      { id: "d", text: "May I go to the water cooler?" }
    ],
    answerId: "b",
    explanation: "The teacher said 'Not now', so Rohini should agree and wait. 'Thank you, ma'am, I'll go now.' sounds polite, but it ignores the teacher's answer.",
    hints: ["Read the teacher's answer carefully. Did she say yes or no to Rohini's request?"],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 382\" width=\"620\" height=\"382\" role=\"img\" aria-label=\"Comic: Rohini asks her teacher something during a test\" font-family=\"Arial, Helvetica, sans-serif\"><title>Comic: Rohini asks her teacher something during a test</title><desc>A classroom board says TEST. Rohini raises her hands and says: Ma&#x27;am, may I go to the water cooler? The teacher says: Not now, Rohini. We are in the middle of a test. Rohini&#x27;s next speech bubble is empty with a question mark.</desc><rect x=\"0\" y=\"0\" width=\"620\" height=\"382\" fill=\"#ffffff\"/><rect x=\"0\" y=\"0\" width=\"620\" height=\"380\" rx=\"0\" fill=\"#fff3e0\" stroke=\"none\" stroke-width=\"0\"/><rect x=\"30\" y=\"30\" width=\"200\" height=\"100\" rx=\"0\" fill=\"#2e7d32\" stroke=\"#5d4037\" stroke-width=\"5\"/><text x=\"130\" y=\"88\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">TEST</text><line x1=\"121.2\" y1=\"310.5\" x2=\"119.0\" y2=\"360\" stroke=\"#c68642\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><line x1=\"138.8\" y1=\"310.5\" x2=\"141.0\" y2=\"360\" stroke=\"#c68642\" stroke-width=\"6.6000000000000005\" stroke-linecap=\"round\"/><polygon points=\"114.6,263.2 145.4,263.2 158.6,316.0 101.4,316.0\" fill=\"#8d6e63\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"112.4\" y1=\"267.6\" x2=\"101.4\" y2=\"302.8\" stroke=\"#c68642\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><line x1=\"147.6\" y1=\"267.6\" x2=\"158.6\" y2=\"302.8\" stroke=\"#c68642\" stroke-width=\"5.5\" stroke-linecap=\"round\"/><rect x=\"110.2\" y=\"233.5\" width=\"39.6\" height=\"26.400000000000002\" rx=\"8.8\" fill=\"#9e9e9e\" stroke=\"#9e9e9e\" stroke-width=\"1\"/><circle cx=\"130\" cy=\"244.5\" r=\"15.400000000000002\" fill=\"#c68642\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M114.6,241.2 Q130,218.1 145.4,241.2\" fill=\"#9e9e9e\" stroke=\"#9e9e9e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"124.5\" cy=\"245.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"135.5\" cy=\"245.6\" r=\"1.9800000000000002\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M123.4,251.1 Q130,256.6 136.6,251.1\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"462.0\" y1=\"315.0\" x2=\"460.0\" y2=\"360\" stroke=\"#a0522d\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><line x1=\"478.0\" y1=\"315.0\" x2=\"480.0\" y2=\"360\" stroke=\"#a0522d\" stroke-width=\"6.0\" stroke-linecap=\"round\"/><polygon points=\"456.0,272.0 484.0,272.0 496.0,320.0 444.0,320.0\" fill=\"#29b6f6\" stroke=\"#333333\" stroke-width=\"2\"/><line x1=\"454.0\" y1=\"276.0\" x2=\"440.0\" y2=\"242.0\" stroke=\"#a0522d\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><line x1=\"486.0\" y1=\"276.0\" x2=\"500.0\" y2=\"242.0\" stroke=\"#a0522d\" stroke-width=\"5.0\" stroke-linecap=\"round\"/><rect x=\"452.0\" y=\"245.0\" width=\"36.0\" height=\"24.0\" rx=\"8.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"1\"/><circle cx=\"470\" cy=\"255.0\" r=\"14.0\" fill=\"#a0522d\" stroke=\"#333333\" stroke-width=\"1.5\"/><path d=\"M456.0,252.0 Q470,231.0 484.0,252.0\" fill=\"#2b1b0e\" stroke=\"#2b1b0e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"465.0\" cy=\"256.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><circle cx=\"475.0\" cy=\"256.0\" r=\"1.8\" fill=\"#1a1a1a\" stroke=\"#1a1a1a\" stroke-width=\"1\"/><path d=\"M464.0,261.0 Q470,266.0 476.0,261.0\" fill=\"none\" stroke=\"#1a1a1a\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"457,65 483,65 470,220\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"300\" y=\"14\" width=\"300\" height=\"52\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"457,65 483,65 470,220\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"450.0\" y=\"45.333333333333336\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Ma&#x27;am, may I go to the water cooler?</text><circle cx=\"304\" cy=\"18\" r=\"13\" fill=\"#0d47a1\" stroke=\"#ffffff\" stroke-width=\"2\"/><text x=\"304\" y=\"24\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">1</text><polygon points=\"261,151 287,151 160,225\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"250\" y=\"80\" width=\"250\" height=\"72\" rx=\"14\" fill=\"#ffffff\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"261,151 287,151 160,225\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"0\"/><text x=\"375.0\" y=\"110.66666666666667\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">Not now, Rohini. We are</text><text x=\"375.0\" y=\"132.66666666666669\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#1a1a1a\">in the middle of a test.</text><circle cx=\"254\" cy=\"84\" r=\"13\" fill=\"#0d47a1\" stroke=\"#ffffff\" stroke-width=\"2\"/><text x=\"254\" y=\"90\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">2</text><polygon points=\"521,215 547,215 480,225\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><rect x=\"510\" y=\"160\" width=\"90\" height=\"56\" rx=\"14\" fill=\"#fffde7\" stroke=\"#333333\" stroke-width=\"2\"/><polygon points=\"521,215 547,215 480,225\" fill=\"#fffde7\" stroke=\"none\" stroke-width=\"0\"/><text x=\"555.0\" y=\"198.0\" font-size=\"30\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1a1a1a\">?</text><circle cx=\"514\" cy=\"164\" r=\"13\" fill=\"#0d47a1\" stroke=\"#ffffff\" stroke-width=\"2\"/><text x=\"514\" y=\"170\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">3</text><text x=\"130\" y=\"376\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Ma&#x27;am</text><text x=\"560\" y=\"340\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#0d2c54\">Rohini</text><rect x=\"1\" y=\"1\" width=\"618\" height=\"380\" rx=\"0\" fill=\"none\" stroke=\"#555555\" stroke-width=\"2\"/></svg>", "alt": "Comic in a classroom during a test. Rohini: 'Ma'am, may I go to the water cooler?' Teacher: 'Not now, Rohini. We are in the middle of a test.' Rohini's next bubble is empty with a question mark."}
  },
  {
    id: "g3-eng-expression-b-q22",
    prompt: "Ayaan's friend asks to copy his maths homework. Which reply says no politely and still helps?",
    options: [
      { id: "a", text: "No way! Do your own work!" },
      { id: "b", text: "Sure, copy it fast before the teacher comes." },
      { id: "c", text: "I didn't do my homework either." },
      { id: "d", text: "Sorry, I can't let you copy, but I can explain the sums to you." }
    ],
    answerId: "d",
    explanation: "This reply says no kindly and offers real help. 'No way! Do your own work!' also says no, but it is rude and does not help.",
    hints: ["Ayaan should not let his friend copy, but he can still be a good friend. Look for a reply that does both."]
  },
  {
    id: "g3-eng-expression-b-q23",
    prompt: "Bindu is writing an invitation. Put the lines in the right order: (1) Please come to our new home for dinner. (2) With love, Bindu (3) Dear Kiran, (4) It is on Sunday, 20 December, at 7 p.m.",
    options: [
      { id: "a", text: "3, 4, 1, 2" },
      { id: "b", text: "1, 3, 4, 2" },
      { id: "c", text: "3, 1, 2, 4" },
      { id: "d", text: "3, 1, 4, 2" }
    ],
    answerId: "d",
    explanation: "Start with 'Dear Kiran,', say what the invitation is for, then when, and sign off. '3, 4, 1, 2' says 'It is on Sunday' before Kiran knows what 'it' is.",
    hints: ["Find the line that greets Kiran and the line that signs off. Then decide which middle line makes sense first."]
  },
  {
    id: "g3-eng-expression-b-q24",
    prompt: "Jatin is writing a short class notice about a Clean-Up Drive. Which line does NOT belong in the notice?",
    options: [
      { id: "a", text: "Please bring a pair of gloves." },
      { id: "b", text: "Day: Friday, 11 December" },
      { id: "c", text: "My favourite colour is green." },
      { id: "d", text: "Place: School garden" }
    ],
    answerId: "c",
    explanation: "A notice tells what, when, where and what to bring. 'Please bring a pair of gloves.' belongs, because children need gloves for cleaning up.",
    hints: ["A notice gives facts that every reader needs to know about the Clean-Up Drive."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {"id": "h", "type": "hook", "emoji": "💬", "title": "Say it kindly", "body": ["Greetings, polite asks, short notes and invitations — pick words that fit the moment.", "Lesson is optional; jump to a set anytime."], "cta": "Let's go!", "visual": "none", "speak": "Greetings, polite asks, short notes and invitations — pick words that fit the moment. Let's go!"},
  {"id": "s1", "type": "demo", "title": "Greetings for Every Time of Day", "steps": ["We say Good morning before lunch time, and Good afternoon after lunch.", "We say Good evening when the sun goes down, and Good night when someone goes to bed.", "Check: You meet your music teacher at 4 in the afternoon. What do you say?"], "punchline": "Answer: Good afternoon", "visual": "none", "speak": "We say Good morning before lunch time, and Good afternoon after lunch. We say Good evening when the sun goes down, and Good night when someone goes to bed."},
  {"id": "s2", "type": "demo", "title": "Saying Who You Are", "steps": ["To introduce yourself, say hello and tell your name.", "To introduce a friend, say: This is my friend, and add one thing about them.", "Check: How can you end a hello when you meet someone new?"], "punchline": "Answer: Nice to meet you.", "visual": "none", "speak": "To introduce yourself, say hello and tell your name. To introduce a friend, say: This is my friend, and add one thing about them."},
  {"id": "s3", "type": "demo", "title": "Asking Nicely", "steps": ["Polite requests often start with May I, Could I or Could you.", "Add please, and your words sound kind, not bossy.", "Check: Make this polite: 'Open the door.'"], "punchline": "Answer: Could you open the door, please?", "visual": "none", "speak": "Polite requests often start with May I, Could I or Could you. Add please, and your words sound kind, not bossy."},
  {"id": "s4", "type": "demo", "title": "Sorry and Thank You", "steps": ["When we make a mistake, we say sorry and try to fix it.", "When someone helps us, we say thank you. When someone thanks us, we can say You're welcome or Happy to help.", "Check: Your friend helps you pick up your crayons. What do you say?"], "punchline": "Answer: Thank you!", "visual": "none", "speak": "When we make a mistake, we say sorry and try to fix it. When someone helps us, we say thank you. When someone thanks us, we can say You're welcome or Happy to help."},
  {"id": "s5", "type": "demo", "title": "Saying No Kindly", "steps": ["Sometimes we have to say no.", "Say sorry or thank you, give a short reason, and if you can, offer another time.", "Check: What three parts make a kind no?"], "punchline": "Answer: sorry or thanks, a reason, another time", "visual": "none", "speak": "Sometimes we have to say no. Say sorry or thank you, give a short reason, and if you can, offer another time."},
  {"id": "s6", "type": "demo", "title": "Notes, Notices and Invitations", "steps": ["Short writing must answer who, what, when and where.", "A notice is for many people. A note or invitation is for one person or a few friends.", "Check: An invitation says the day and the place. What else must it say?"], "punchline": "Answer: the time (and what it is for)", "visual": "none", "speak": "Short writing must answer who, what, when and where. A notice is for many people. A note or invitation is for one person or a few friends."},
  {"id": "s7", "type": "demo", "title": "What Comes Next?", "steps": ["In a conversation, read the last line carefully.", "Your reply must answer exactly what the other person asked.", "Check: Your friend asks, 'What is your favourite fruit?' Is 'I am eight' a good reply?"], "punchline": "Answer: No; name a fruit, like 'Mango!'", "visual": "none", "speak": "In a conversation, read the last line carefully. Your reply must answer exactly what the other person asked."},
  {"id": "t1", "type": "try", "title": "Your turn", "prompt": "It is 8 p.m. You meet your neighbour at the gate. What do you say?", "options": [{"id": "a", "text": "Good morning!"}, {"id": "b", "text": "Good night!"}, {"id": "c", "text": "Good evening!"}, {"id": "d", "text": "Happy birthday!"}], "answerId": "c", "why": "Evening greetings fit after sunset and before bedtime. Good morning is for the start of the day.", "visual": "none", "speak": "It is 8 p.m. You meet your neighbour at the gate. What do you say?"},
  {"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ["Match the greeting to the time of day", "Say who you are clearly on the phone", "Ask with please; thank and apologise kindly", "Say no without being rude", "Notes and notices: who, what, when, where", "Choose the reply that fits what was just said"], "cta": "Back to chapter", "speak": "You are ready for the practice sets."},
];

export const g3EnglishExpression: ChapterDef = {
  id: "expression",
  title: "Spoken and Written Expression",
  emoji: "\ud83d\udcac",
  blurb: "Greetings, polite talk, notes, notices & invitations",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "expression",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "expression",
      questions: SET_B,
    },
  ],
  paperTopics: ["spoken", "writing"],
};

export const g3EnglishExpressionQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
