import type { ChapterDef, PrepQuestion } from "../types";

/** Synonyms — authored Grade 3 English content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-eng-synonyms-a-q01",
    prompt: "Which word means almost the SAME as \"happy\"?",
    options: [
      { id: "a", text: "glad" },
      { id: "b", text: "angry" },
      { id: "c", text: "tiny" },
      { id: "d", text: "slow" }
    ],
    answerId: "a",
    explanation: "\"Glad\" and \"happy\" both name a good, cheerful feeling. \"Angry\" is a different feeling.",
    hints: ["Think of a good feeling after good news.", "Angry is not a twin of happy."]
  },
  {
    id: "g3-eng-synonyms-a-q02",
    prompt: "Which word means almost the SAME as \"big\"?",
    options: [
      { id: "a", text: "small" },
      { id: "b", text: "large" },
      { id: "c", text: "quiet" },
      { id: "d", text: "soft" }
    ],
    answerId: "b",
    explanation: "\"Large\" means nearly the same as \"big.\" \"Small\" is the opposite.",
    hints: ["Picture an elephant — big or large both fit.", "Small means the opposite size."]
  },
  {
    id: "g3-eng-synonyms-a-q03",
    prompt: "Riya finished her homework in a **quick** way. Which word means the same as \"quick\"?",
    options: [
      { id: "a", text: "slow" },
      { id: "b", text: "heavy" },
      { id: "c", text: "fast" },
      { id: "d", text: "sleepy" }
    ],
    answerId: "c",
    explanation: "\"Fast\" and \"quick\" both mean done in a short time. \"Slow\" is the opposite.",
    hints: ["Quick means not taking long.", "Try each option in the sentence."]
  },
  {
    id: "g3-eng-synonyms-a-q04",
    prompt: "Which word means almost the SAME as \"begin\"?",
    options: [
      { id: "a", text: "end" },
      { id: "b", text: "stop" },
      { id: "c", text: "finish" },
      { id: "d", text: "start" }
    ],
    answerId: "d",
    explanation: "\"Start\" and \"begin\" both mean to get going. End, stop and finish are closer to stopping.",
    hints: ["Begin means to get going.", "End and finish are not twins of begin."]
  },
  {
    id: "g3-eng-synonyms-a-q05",
    prompt: "Kabir was **brave** when he spoke on stage. Which word means the same as \"brave\"?",
    options: [
      { id: "a", text: "courageous" },
      { id: "b", text: "scared" },
      { id: "c", text: "shy" },
      { id: "d", text: "silent" }
    ],
    answerId: "a",
    explanation: "\"Courageous\" means nearly the same as \"brave.\" \"Scared\" and \"shy\" are closer to the opposite.",
    hints: ["Brave people face hard things without running away.", "Scared is not a synonym of brave."]
  },
  {
    id: "g3-eng-synonyms-a-q06",
    prompt: "Which word means almost the SAME as \"small\"?",
    options: [
      { id: "a", text: "huge" },
      { id: "b", text: "tiny" },
      { id: "c", text: "loud" },
      { id: "d", text: "tall" }
    ],
    answerId: "b",
    explanation: "\"Tiny\" means very small. \"Huge\" means very big — the opposite idea.",
    hints: ["Small things take little space.", "Huge is the opposite size."]
  },
  {
    id: "g3-eng-synonyms-a-q07",
    prompt: "The library was very **quiet**. Which word means the same as \"quiet\"?",
    options: [
      { id: "a", text: "noisy" },
      { id: "b", text: "bright" },
      { id: "c", text: "silent" },
      { id: "d", text: "sticky" }
    ],
    answerId: "c",
    explanation: "\"Silent\" means almost no sound, like \"quiet.\" \"Noisy\" is the opposite.",
    hints: ["Quiet places have little sound.", "Noisy means lots of sound."]
  },
  {
    id: "g3-eng-synonyms-a-q08",
    prompt: "Which word means almost the SAME as \"smart\"?",
    options: [
      { id: "a", text: "sleepy" },
      { id: "b", text: "empty" },
      { id: "c", text: "rough" },
      { id: "d", text: "clever" }
    ],
    answerId: "d",
    explanation: "\"Clever\" and \"smart\" both mean quick to learn or think. The other words do not mean that.",
    hints: ["Smart can mean good at thinking.", "Sleepy is not about thinking well."]
  },
  {
    id: "g3-eng-synonyms-a-q09",
    prompt: "Amma packed a **gift** for Ananya's birthday. Which word means the same as \"gift\"?",
    options: [
      { id: "a", text: "present" },
      { id: "b", text: "problem" },
      { id: "c", text: "shadow" },
      { id: "d", text: "corner" }
    ],
    answerId: "a",
    explanation: "A \"present\" is another word for a \"gift\" — something you give to someone.",
    hints: ["Think of something wrapped for a birthday.", "A problem is not a gift."]
  },
  {
    id: "g3-eng-synonyms-a-q10",
    prompt: "Which word means almost the SAME as \"end\"?",
    options: [
      { id: "a", text: "start" },
      { id: "b", text: "finish" },
      { id: "c", text: "open" },
      { id: "d", text: "begin" }
    ],
    answerId: "b",
    explanation: "\"Finish\" and \"end\" both mean to bring something to a close. \"Start\" and \"begin\" are opposites.",
    hints: ["End means something is over.", "Start is the opposite of end."]
  },
  {
    id: "g3-eng-synonyms-a-q11",
    prompt: "The mango was **tasty**. Which word means the same as \"tasty\"?",
    options: [
      { id: "a", text: "bitter" },
      { id: "b", text: "sour" },
      { id: "c", text: "delicious" },
      { id: "d", text: "plain" }
    ],
    answerId: "c",
    explanation: "\"Delicious\" means very good to eat, like \"tasty.\" Bitter and sour describe different tastes.",
    hints: ["Tasty food makes you smile while eating.", "Bitter is a different kind of taste."]
  },
  {
    id: "g3-eng-synonyms-a-q12",
    prompt: "Which word means almost the SAME as \"sad\"?",
    options: [
      { id: "a", text: "joyful" },
      { id: "b", text: "proud" },
      { id: "c", text: "excited" },
      { id: "d", text: "unhappy" }
    ],
    answerId: "d",
    explanation: "\"Unhappy\" means nearly the same as \"sad.\" \"Joyful\" and \"excited\" are happier feelings.",
    hints: ["Sad is not a cheerful feeling.", "Joyful is closer to happy, not sad."]
  },
  {
    id: "g3-eng-synonyms-a-q13",
    prompt: "Meera found the sum **hard**. Which word means the same as \"hard\" here?",
    options: [
      { id: "a", text: "difficult" },
      { id: "b", text: "easy" },
      { id: "c", text: "simple" },
      { id: "d", text: "soft" }
    ],
    answerId: "a",
    explanation: "Here \"hard\" means not easy to do, so \"difficult\" is the synonym. \"Easy\" and \"simple\" are opposites.",
    hints: ["In maths, hard means not easy.", "Soft is about touch, not about a sum."]
  },
  {
    id: "g3-eng-synonyms-a-q14",
    prompt: "Which word means almost the SAME as \"kind\"?",
    options: [
      { id: "a", text: "rude" },
      { id: "b", text: "caring" },
      { id: "c", text: "mean" },
      { id: "d", text: "angry" }
    ],
    answerId: "b",
    explanation: "\"Caring\" people are kind — they think of others. Rude and mean are closer to the opposite.",
    hints: ["Kind people help and share.", "Rude is not a twin of kind."]
  },
  {
    id: "g3-eng-synonyms-a-q15",
    prompt: "The puppy looked **scared** in the storm. Which word means the same as \"scared\"?",
    options: [
      { id: "a", text: "brave" },
      { id: "b", text: "calm" },
      { id: "c", text: "afraid" },
      { id: "d", text: "proud" }
    ],
    answerId: "c",
    explanation: "\"Afraid\" means nearly the same as \"scared.\" Brave and calm are different feelings.",
    hints: ["Scared means feeling fear.", "Brave is closer to the opposite."]
  },
  {
    id: "g3-eng-synonyms-a-q16",
    prompt: "Which word means almost the SAME as \"pretty\"?",
    options: [
      { id: "a", text: "ugly" },
      { id: "b", text: "dirty" },
      { id: "c", text: "dark" },
      { id: "d", text: "beautiful" }
    ],
    answerId: "d",
    explanation: "\"Beautiful\" means very nice to look at, like \"pretty.\" \"Ugly\" is the opposite.",
    hints: ["Pretty describes something lovely to see.", "Ugly is the opposite idea."]
  },
  {
    id: "g3-eng-synonyms-a-q17",
    prompt: "After Holi, Arjun's shirt was **dirty**. Which word means the same as \"dirty\"?",
    options: [
      { id: "a", text: "messy" },
      { id: "b", text: "clean" },
      { id: "c", text: "neat" },
      { id: "d", text: "fresh" }
    ],
    answerId: "a",
    explanation: "\"Messy\" can mean not clean, like \"dirty\" after colour play. Clean and neat are opposites.",
    hints: ["Dirty clothes need washing.", "Clean is the opposite of dirty."]
  },
  {
    id: "g3-eng-synonyms-a-q18",
    prompt: "Which word means almost the SAME as \"easy\"?",
    options: [
      { id: "a", text: "tough" },
      { id: "b", text: "simple" },
      { id: "c", text: "heavy" },
      { id: "d", text: "tricky" }
    ],
    answerId: "b",
    explanation: "\"Simple\" means not hard, like \"easy.\" Tough and tricky are closer to difficult.",
    hints: ["Easy tasks do not take much struggle.", "Tough is closer to hard."]
  },
  {
    id: "g3-eng-synonyms-a-q19",
    prompt: "Please **help** your little brother with his bag. Which word means the same as \"help\"?",
    options: [
      { id: "a", text: "ignore" },
      { id: "b", text: "hide" },
      { id: "c", text: "assist" },
      { id: "d", text: "tease" }
    ],
    answerId: "c",
    explanation: "\"Assist\" means to help someone. Ignore and tease do not mean help.",
    hints: ["Help means make someone's job lighter.", "Ignore means you do not help."]
  },
  {
    id: "g3-eng-synonyms-a-q20",
    prompt: "Which word means almost the SAME as \"shout\"?",
    options: [
      { id: "a", text: "whisper" },
      { id: "b", text: "smile" },
      { id: "c", text: "sleep" },
      { id: "d", text: "yell" }
    ],
    answerId: "d",
    explanation: "\"Yell\" means to call out loudly, like \"shout.\" \"Whisper\" is the opposite — very soft.",
    hints: ["Shout is a loud voice.", "Whisper is soft, not loud."]
  },
  {
    id: "g3-eng-synonyms-a-q21",
    prompt: "The frog can **jump** high. Which word means the same as \"jump\"?",
    options: [
      { id: "a", text: "leap" },
      { id: "b", text: "crawl" },
      { id: "c", text: "sit" },
      { id: "d", text: "walk" }
    ],
    answerId: "a",
    explanation: "\"Leap\" means to spring up, like \"jump.\" Crawl is a different way of moving.",
    hints: ["Jump means leave the ground for a moment.", "Crawl stays close to the ground."]
  },
  {
    id: "g3-eng-synonyms-a-q22",
    prompt: "Which word means almost the SAME as \"cold\"?",
    options: [
      { id: "a", text: "hot" },
      { id: "b", text: "chilly" },
      { id: "c", text: "warm" },
      { id: "d", text: "boiling" }
    ],
    answerId: "b",
    explanation: "\"Chilly\" means cool or cold. Hot, warm and boiling are warmer — not the same.",
    hints: ["Cold makes you want a sweater.", "Hot is the opposite feeling."]
  },
  {
    id: "g3-eng-synonyms-a-q23",
    prompt: "Aarav bought a toffee for ₹2. The shopkeeper was **polite**. Which word means the same as \"polite\"?",
    options: [
      { id: "a", text: "rude" },
      { id: "b", text: "angry" },
      { id: "c", text: "courteous" },
      { id: "d", text: "noisy" }
    ],
    answerId: "c",
    explanation: "\"Courteous\" means well-mannered, like \"polite.\" \"Rude\" is the opposite.",
    hints: ["Polite people say please and thank you.", "Rude is not a synonym of polite."]
  },
  {
    id: "g3-eng-synonyms-a-q24",
    prompt: "Which word means almost the SAME as \"near\"?",
    options: [
      { id: "a", text: "far" },
      { id: "b", text: "distant" },
      { id: "c", text: "away" },
      { id: "d", text: "close" }
    ],
    answerId: "d",
    explanation: "\"Close\" means not far away, like \"near.\" Far, distant and away are opposites.",
    hints: ["Near means a short distance.", "Far is the opposite of near."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-eng-synonyms-b-q01",
    prompt: "Which word means almost the SAME as \"angry\"?",
    options: [
      { id: "a", text: "calm" },
      { id: "b", text: "cross" },
      { id: "c", text: "merry" },
      { id: "d", text: "gentle" }
    ],
    answerId: "b",
    explanation: "\"Cross\" can mean annoyed or angry. Calm, merry and gentle are softer, happier feelings.",
    hints: ["Angry is a strong upset feeling.", "Calm is closer to the opposite."]
  },
  {
    id: "g3-eng-synonyms-b-q02",
    prompt: "The school bag felt **heavy**. Which word means the same as \"heavy\"?",
    options: [
      { id: "a", text: "light" },
      { id: "b", text: "empty" },
      { id: "c", text: "weighty" },
      { id: "d", text: "thin" }
    ],
    answerId: "c",
    explanation: "\"Weighty\" means having a lot of weight, like \"heavy.\" \"Light\" is the opposite.",
    hints: ["Heavy things are hard to lift.", "Light is the opposite of heavy."]
  },
  {
    id: "g3-eng-synonyms-b-q03",
    prompt: "Which word means almost the SAME as \"laugh\"?",
    options: [
      { id: "a", text: "cry" },
      { id: "b", text: "weep" },
      { id: "c", text: "frown" },
      { id: "d", text: "giggle" }
    ],
    answerId: "d",
    explanation: "\"Giggle\" is a light laugh. Cry, weep and frown are not laughing.",
    hints: ["Laugh is a happy sound.", "Cry is not a twin of laugh."]
  },
  {
    id: "g3-eng-synonyms-b-q04",
    prompt: "Nisha's room was **neat** after she cleaned it. Which word means the same as \"neat\"?",
    options: [
      { id: "a", text: "tidy" },
      { id: "b", text: "messy" },
      { id: "c", text: "dirty" },
      { id: "d", text: "scattered" }
    ],
    answerId: "a",
    explanation: "\"Tidy\" means clean and in order, like \"neat.\" Messy and dirty are opposites.",
    hints: ["Neat rooms have things in place.", "Messy is the opposite of neat."]
  },
  {
    id: "g3-eng-synonyms-b-q05",
    prompt: "Which word means almost the SAME as \"strong\"?",
    options: [
      { id: "a", text: "weak" },
      { id: "b", text: "powerful" },
      { id: "c", text: "tiny" },
      { id: "d", text: "soft" }
    ],
    answerId: "b",
    explanation: "\"Powerful\" means having strength, like \"strong.\" \"Weak\" is the opposite.",
    hints: ["Strong can mean full of power.", "Weak is the opposite of strong."]
  },
  {
    id: "g3-eng-synonyms-b-q06",
    prompt: "Please **talk** softly in the class. Which word means the same as \"talk\"?",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "draw" },
      { id: "c", text: "speak" },
      { id: "d", text: "jump" }
    ],
    answerId: "c",
    explanation: "\"Speak\" means to use words, like \"talk.\" Run, draw and jump are different actions.",
    hints: ["Talk uses your voice and words.", "Run is a different action."]
  },
  {
    id: "g3-eng-synonyms-b-q07",
    prompt: "Which word means almost the SAME as \"rich\"?",
    options: [
      { id: "a", text: "poor" },
      { id: "b", text: "needy" },
      { id: "c", text: "empty" },
      { id: "d", text: "wealthy" }
    ],
    answerId: "d",
    explanation: "\"Wealthy\" means having a lot of money, like \"rich.\" Poor and needy are opposites.",
    hints: ["Rich can mean having much money.", "Poor is the opposite idea."]
  },
  {
    id: "g3-eng-synonyms-b-q08",
    prompt: "The moon looked **bright** in the night sky. Which word means the same as \"bright\"?",
    options: [
      { id: "a", text: "shiny" },
      { id: "b", text: "dim" },
      { id: "c", text: "dark" },
      { id: "d", text: "dull" }
    ],
    answerId: "a",
    explanation: "\"Shiny\" means giving off light, like \"bright.\" Dim, dark and dull are duller.",
    hints: ["Bright things give light or look clear.", "Dark is closer to the opposite."]
  },
  {
    id: "g3-eng-synonyms-b-q09",
    prompt: "Which word means almost the SAME as \"correct\"?",
    options: [
      { id: "a", text: "wrong" },
      { id: "b", text: "right" },
      { id: "c", text: "false" },
      { id: "d", text: "broken" }
    ],
    answerId: "b",
    explanation: "\"Right\" can mean correct — free from mistakes. Wrong and false are opposites.",
    hints: ["Correct answers match the truth.", "Wrong is the opposite of correct."]
  },
  {
    id: "g3-eng-synonyms-b-q10",
    prompt: "Diya will **buy** a pencil box for ₹50. Which word means the same as \"buy\"?",
    options: [
      { id: "a", text: "sell" },
      { id: "b", text: "lose" },
      { id: "c", text: "purchase" },
      { id: "d", text: "hide" }
    ],
    answerId: "c",
    explanation: "\"Purchase\" means to buy something by paying money. \"Sell\" is the opposite action.",
    hints: ["Buy means you pay and take something home.", "Sell means you give it away for money."]
  },
  {
    id: "g3-eng-synonyms-b-q11",
    prompt: "Which word means almost the SAME as \"old\" (for a building)?",
    options: [
      { id: "a", text: "new" },
      { id: "b", text: "fresh" },
      { id: "c", text: "modern" },
      { id: "d", text: "ancient" }
    ],
    answerId: "d",
    explanation: "\"Ancient\" means very old. New, fresh and modern are closer to the opposite.",
    hints: ["Old things have been around a long time.", "New is the opposite of old."]
  },
  {
    id: "g3-eng-synonyms-b-q12",
    prompt: "Rohan felt **tired** after cricket in the gali. Which word means the same as \"tired\"?",
    options: [
      { id: "a", text: "weary" },
      { id: "b", text: "energetic" },
      { id: "c", text: "fresh" },
      { id: "d", text: "lively" }
    ],
    answerId: "a",
    explanation: "\"Weary\" means needing rest, like \"tired.\" Energetic and lively are opposite feelings.",
    hints: ["Tired means you need rest.", "Energetic is the opposite feeling."]
  },
  {
    id: "g3-eng-synonyms-b-q13",
    prompt: "Which word means almost the SAME as \"empty\"?",
    options: [
      { id: "a", text: "full" },
      { id: "b", text: "vacant" },
      { id: "c", text: "packed" },
      { id: "d", text: "crowded" }
    ],
    answerId: "b",
    explanation: "\"Vacant\" means having nothing inside, like \"empty.\" Full, packed and crowded are opposites.",
    hints: ["Empty means nothing is inside.", "Full is the opposite of empty."]
  },
  {
    id: "g3-eng-synonyms-b-q14",
    prompt: "The baby began to **cry**. Which word means the same as \"cry\"?",
    options: [
      { id: "a", text: "laugh" },
      { id: "b", text: "smile" },
      { id: "c", text: "weep" },
      { id: "d", text: "cheer" }
    ],
    answerId: "c",
    explanation: "\"Weep\" means to cry with tears. Laugh, smile and cheer are happier actions.",
    hints: ["Cry often comes with tears.", "Laugh is not a twin of cry."]
  },
  {
    id: "g3-eng-synonyms-b-q15",
    prompt: "Which word means almost the SAME as \"careful\"?",
    options: [
      { id: "a", text: "careless" },
      { id: "b", text: "hasty" },
      { id: "c", text: "wild" },
      { id: "d", text: "cautious" }
    ],
    answerId: "d",
    explanation: "\"Cautious\" means taking care to avoid mistakes, like \"careful.\" Careless is the opposite.",
    hints: ["Careful people think before they act.", "Careless is the opposite of careful."]
  },
  {
    id: "g3-eng-synonyms-b-q16",
    prompt: "Amina shared her **tiffin** with a **friend**. Which word means the same as \"friend\"?",
    options: [
      { id: "a", text: "buddy" },
      { id: "b", text: "enemy" },
      { id: "c", text: "stranger" },
      { id: "d", text: "rival" }
    ],
    answerId: "a",
    explanation: "A \"buddy\" is a friend — someone you like and trust. Enemy and rival are opposites.",
    hints: ["A friend is someone you like to be with.", "Enemy is the opposite idea."]
  },
  {
    id: "g3-eng-synonyms-b-q17",
    prompt: "Which word means almost the SAME as \"hot\"?",
    options: [
      { id: "a", text: "freezing" },
      { id: "b", text: "warm" },
      { id: "c", text: "icy" },
      { id: "d", text: "chilly" }
    ],
    answerId: "b",
    explanation: "\"Warm\" is close in meaning to \"hot\" (both are heated). Freezing, icy and chilly are cold.",
    hints: ["Hot things have heat.", "Icy is the opposite kind of feeling."]
  },
  {
    id: "g3-eng-synonyms-b-q18",
    prompt: "The auto moved **slowly** in the traffic. Which word means the same as \"slowly\"?",
    options: [
      { id: "a", text: "quickly" },
      { id: "b", text: "rapidly" },
      { id: "c", text: "gradually" },
      { id: "d", text: "swiftly" }
    ],
    answerId: "c",
    explanation: "\"Gradually\" can mean little by little, not fast — like \"slowly.\" Quickly and rapidly are opposites.",
    hints: ["Slowly means not fast.", "Quickly is the opposite of slowly."]
  },
  {
    id: "g3-eng-synonyms-b-q19",
    prompt: "Which word means almost the SAME as \"look\"?",
    options: [
      { id: "a", text: "ignore" },
      { id: "b", text: "hide" },
      { id: "c", text: "cover" },
      { id: "d", text: "see" }
    ],
    answerId: "d",
    explanation: "\"See\" means to notice with your eyes, like \"look.\" Ignore means you do not look.",
    hints: ["Look uses your eyes.", "Ignore means you turn away."]
  },
  {
    id: "g3-eng-synonyms-b-q20",
    prompt: "The story was **funny**. Which word means the same as \"funny\"?",
    options: [
      { id: "a", text: "amusing" },
      { id: "b", text: "boring" },
      { id: "c", text: "sad" },
      { id: "d", text: "scary" }
    ],
    answerId: "a",
    explanation: "\"Amusing\" means it makes you smile or laugh, like \"funny.\" Boring and sad are different.",
    hints: ["Funny things make you laugh.", "Boring is not a twin of funny."]
  },
  {
    id: "g3-eng-synonyms-b-q21",
    prompt: "Which word means almost the SAME as \"wet\"?",
    options: [
      { id: "a", text: "dry" },
      { id: "b", text: "damp" },
      { id: "c", text: "parched" },
      { id: "d", text: "crispy" }
    ],
    answerId: "b",
    explanation: "\"Damp\" means a little wet. Dry and parched are opposites of wet.",
    hints: ["Wet things have water on them.", "Dry is the opposite of wet."]
  },
  {
    id: "g3-eng-synonyms-b-q22",
    prompt: "During the monsoon, the lane was full of **huge** puddles. Which word means the same as \"huge\"?",
    options: [
      { id: "a", text: "tiny" },
      { id: "b", text: "narrow" },
      { id: "c", text: "enormous" },
      { id: "d", text: "thin" }
    ],
    answerId: "c",
    explanation: "\"Enormous\" means very big, like \"huge.\" Tiny is the opposite.",
    hints: ["Huge means very big.", "Tiny is the opposite size."]
  },
  {
    id: "g3-eng-synonyms-b-q23",
    prompt: "Which word means almost the SAME as \"thin\"?",
    options: [
      { id: "a", text: "fat" },
      { id: "b", text: "thick" },
      { id: "c", text: "wide" },
      { id: "d", text: "slim" }
    ],
    answerId: "d",
    explanation: "\"Slim\" means not thick or wide, like \"thin.\" Fat, thick and wide are opposite ideas.",
    hints: ["Thin means not wide or thick.", "Thick is closer to the opposite."]
  },
  {
    id: "g3-eng-synonyms-b-q24",
    prompt: "Sana gave a **correct** answer and felt **proud**. Which word means the same as \"proud\"?",
    options: [
      { id: "a", text: "pleased" },
      { id: "b", text: "ashamed" },
      { id: "c", text: "worried" },
      { id: "d", text: "afraid" }
    ],
    answerId: "a",
    explanation: "\"Pleased\" means happy with yourself or something, close to feeling \"proud.\" Ashamed is the opposite.",
    hints: ["Proud is a good feeling after doing well.", "Ashamed is closer to the opposite."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "😊",
    title: "Word twins",
    body: [
      "Some words are twins in meaning — they say nearly the same thing.",
      "We call those twins synonyms. Tap, try, then check!",
    ],
    cta: "Meet the twins!",
    visual: "word-cards",
    speak: "Some words are twins in meaning. We call them synonyms.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Tap to match",
    lead: "Reveal the twin for each word.",
    visual: "word-cards",
    speak: "Tap each word to reveal a synonym.",
    cards: [
      { label: "happy", reveal: "glad / joyful", emoji: "😊" },
      { label: "big", reveal: "large / huge", emoji: "🐘" },
      { label: "fast", reveal: "quick / speedy", emoji: "⚡" },
      { label: "begin", reveal: "start", emoji: "🏁" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Try it in a sentence",
    visual: "word-cards",
    speak: "Amma was happy. Amma was glad. Both sentences mean nearly the same. Happy and glad are synonyms.",
    steps: [
      "Amma was happy when Riya shared her tiffin.",
      "Swap happy for glad: Amma was glad…",
      "Both sentences mean nearly the same",
      "So happy and glad are synonyms",
    ],
    punchline: "If you can swap the word and the meaning stays, you found a twin!",
  },
  {
    id: "t1",
    type: "try",
    title: "Pick the twin",
    prompt: "Synonym of “brave”?",
    options: [
      { id: "a", text: "courageous" },
      { id: "b", text: "timid" },
      { id: "c", text: "silent" },
      { id: "d", text: "narrow" },
    ],
    answerId: "a",
    why: "Courageous means nearly the same as brave. Timid is closer to an opposite.",
    visual: "word-cards",
    speak: "Which word is a synonym of brave?",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "word-cards",
    speak: "Which pair are synonyms?",
    question: {
      id: "g3-eng-synonyms-check",
      prompt: "Which pair are synonyms?",
      options: [
        { id: "a", text: "hot — cold" },
        { id: "b", text: "big — large" },
        { id: "c", text: "up — down" },
        { id: "d", text: "full — empty" },
      ],
      answerId: "b",
      explanation: "Big and large mean nearly the same. The other pairs are opposites (antonyms).",
      hints: ["Synonyms are meaning twins.", "Opposites are antonyms, not synonyms."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "📚",
    title: "Word power!",
    bullets: [
      "Synonym ≈ similar meaning",
      "Try swapping the word in a sentence",
      "Watch out for opposites in the options",
      "Set A and Set B — 24 questions each",
    ],
    cta: "Back to chapter",
    speak: "Synonym means similar. You are ready for the practice sets.",
  },
];

export const g3EnglishSynonyms: ChapterDef = {
  id: "synonyms",
  title: "Synonyms",
  emoji: "😊",
  blurb: "Words that match",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "synonyms",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "synonyms",
      questions: SET_B,
    },
  ],
  paperTopics: ["synonyms", "antonyms"],
};

export const g3EnglishSynonymsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
