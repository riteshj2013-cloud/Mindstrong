import type { PhaseSpec } from "../types";
import type { AgeBand } from "../types";

/** Age-appropriate spelling focus phase for daily practice. */
export function spellingPhase(band: AgeBand): PhaseSpec {
  const commonClose = {
    id: "sp-close",
    type: "intro" as const,
    emoji: "✨",
    title: "Spelling muscle flexed!",
    body: ["Sound it · see it · write it in your head.", "Next: a brave hard try."],
    cta: "Hard try!",
  };

  if (band === "6-7") {
    return {
      muscle: "spelling",
      title: "Spelling",
      kidTitle: "Spelling",
      emoji: "🔤",
      estimatedMin: 5,
      items: [
        {
          id: "sp-intro",
          type: "intro",
          emoji: "🔤",
          title: "Letter sounds",
          body: ["Listen for the sounds in a word.", "Pick the word that matches."],
          cta: "Let’s spell!",
        },
        {
          id: "sp-1",
          type: "choice",
          prompt: "Which word means a furry pet that says meow?",
          options: [
            { id: "cat", text: "cat" },
            { id: "cot", text: "cot" },
            { id: "cut", text: "cut" },
            { id: "cap", text: "cap" },
          ],
          answerId: "cat",
          hints: ["It starts with /c/ and ends with /t/.", "Middle sound is /a/ as in apple."],
          correct: "cat — c-a-t!",
          tryAgain: "Say the sounds slowly: /c/ /a/ /t/.",
          rule: "Sound out CVC words.",
        },
        {
          id: "sp-2",
          type: "choice",
          prompt: "Which spelling is correct for the number after two?",
          options: [
            { id: "three", text: "three" },
            { id: "tree", text: "tree" },
            { id: "thre", text: "thre" },
            { id: "thee", text: "thee" },
          ],
          answerId: "three",
          hints: ["It starts with thr-.", "Ends with ee sound spelled ee."],
          correct: "three — nice!",
          tryAgain: "Not the plant “tree” — the number.",
        },
        {
          id: "sp-3",
          type: "choice",
          prompt: "Pick the correctly spelled colour.",
          options: [
            { id: "blue", text: "blue" },
            { id: "bloo", text: "bloo" },
            { id: "blew", text: "blew" },
            { id: "blu", text: "blu" },
          ],
          answerId: "blue",
          hints: ["Colour word, not “blew” the wind.", "b-l-u-e."],
          correct: "blue!",
          tryAgain: "Think crayon colour, not past-tense blow.",
        },
        commonClose,
      ],
    };
  }

  if (band === "8-9") {
    return {
      muscle: "spelling",
      title: "Spelling",
      kidTitle: "Spelling",
      emoji: "🔤",
      estimatedMin: 5,
      items: [
        {
          id: "sp-intro",
          type: "intro",
          emoji: "🔤",
          title: "Tricky bits",
          body: ["Some words hide silent letters or double letters.", "Spot the right spelling."],
          cta: "Let’s spell!",
        },
        {
          id: "sp-1",
          type: "choice",
          prompt: "Which is spelled correctly?",
          options: [
            { id: "friend", text: "friend" },
            { id: "freind", text: "freind" },
            { id: "frend", text: "frend" },
            { id: "friand", text: "friand" },
          ],
          answerId: "friend",
          hints: ["i before e in friend.", "fr + iend."],
          correct: "friend — classic tricky word!",
          tryAgain: "Remember: fri-end.",
          rule: "Common exception: friend.",
        },
        {
          id: "sp-2",
          type: "choice",
          prompt: "Past tense of “stop” is…",
          options: [
            { id: "stopped", text: "stopped" },
            { id: "stoped", text: "stoped" },
            { id: "stopt", text: "stopt" },
            { id: "stoppped", text: "stoppped" },
          ],
          answerId: "stopped",
          hints: ["Short vowel + one consonant → double before -ed.", "stop → stopped."],
          correct: "stopped — double the p!",
          tryAgain: "Double the final consonant, then -ed.",
        },
        {
          id: "sp-3",
          type: "choice",
          prompt: "Which sentence uses the right “their/there/they’re”?",
          options: [
            { id: "a", text: "Their bags are by the door." },
            { id: "b", text: "There bags are by the door." },
            { id: "c", text: "They’re bags are by the door." },
            { id: "d", text: "Thier bags are by the door." },
          ],
          answerId: "a",
          hints: ["Their = belongs to them.", "There = a place; they’re = they are."],
          correct: "Their bags — belonging!",
          tryAgain: "Belonging → their.",
        },
        {
          id: "sp-4",
          type: "choice",
          prompt: "Correct spelling?",
          options: [
            { id: "because", text: "because" },
            { id: "becaus", text: "becaus" },
            { id: "becouse", text: "becouse" },
            { id: "becuase", text: "becuase" },
          ],
          answerId: "because",
          hints: ["be-cause.", "Ends with -ause."],
          correct: "because!",
          tryAgain: "Say be-cause slowly.",
        },
        commonClose,
      ],
    };
  }

  if (band === "10-11") {
    return {
      muscle: "spelling",
      title: "Spelling",
      kidTitle: "Spelling",
      emoji: "🔤",
      estimatedMin: 5,
      items: [
        {
          id: "sp-intro",
          type: "intro",
          emoji: "🔤",
          title: "Prefixes & twins",
          body: ["Watch prefixes and lookalike words.", "Choose the spelling that fits the meaning."],
          cta: "Let’s spell!",
        },
        {
          id: "sp-1",
          type: "choice",
          prompt: "Which is correct?",
          options: [
            { id: "necessary", text: "necessary" },
            { id: "neccessary", text: "neccessary" },
            { id: "necesary", text: "necesary" },
            { id: "neccesary", text: "neccesary" },
          ],
          answerId: "necessary",
          hints: ["One c, two s’s.", "ne-ces-sary."],
          correct: "necessary!",
          tryAgain: "Remember: 1 c, 2 s.",
        },
        {
          id: "sp-2",
          type: "choice",
          prompt: "“A place you go to learn” is a…",
          options: [
            { id: "school", text: "school" },
            { id: "scool", text: "scool" },
            { id: "skool", text: "skool" },
            { id: "schole", text: "schole" },
          ],
          answerId: "school",
          hints: ["Starts with sch-.", "Double o in the middle."],
          correct: "school!",
          tryAgain: "sch + ool.",
        },
        {
          id: "sp-3",
          type: "choice",
          prompt: "Which fits: “Please ____ the door.”",
          options: [
            { id: "close", text: "close" },
            { id: "clothes", text: "clothes" },
            { id: "clause", text: "clause" },
            { id: "cloze", text: "cloze" },
          ],
          answerId: "close",
          hints: ["Action for a door.", "Not the things you wear."],
          correct: "close the door.",
          tryAgain: "Clothes = what you wear.",
        },
        {
          id: "sp-4",
          type: "choice",
          prompt: "Opposite of succeed — correct spelling?",
          options: [
            { id: "fail", text: "fail" },
            { id: "fale", text: "fale" },
            { id: "faile", text: "faile" },
            { id: "feil", text: "feil" },
          ],
          answerId: "fail",
          hints: ["Short word: f-ai-l.", "ai as in rain."],
          correct: "fail!",
          tryAgain: "f + ail.",
        },
        commonClose,
      ],
    };
  }

  if (band === "12-13") {
    return {
      muscle: "spelling",
      title: "Spelling",
      kidTitle: "Spelling",
      emoji: "🔤",
      estimatedMin: 5,
      items: [
        {
          id: "sp-intro",
          type: "intro",
          emoji: "🔤",
          title: "Academic spellings",
          body: ["Science and school words love unusual letter patterns.", "Pick carefully."],
          cta: "Let’s spell!",
        },
        {
          id: "sp-1",
          type: "choice",
          prompt: "Correct spelling?",
          options: [
            { id: "environment", text: "environment" },
            { id: "enviroment", text: "enviroment" },
            { id: "enviromment", text: "enviromment" },
            { id: "enviornment", text: "enviornment" },
          ],
          answerId: "environment",
          hints: ["en-viron-ment — don’t drop the n.", "viron in the middle."],
          correct: "environment!",
          tryAgain: "There’s an n before ment.",
        },
        {
          id: "sp-2",
          type: "choice",
          prompt: "Which is correct?",
          options: [
            { id: "definitely", text: "definitely" },
            { id: "definately", text: "definately" },
            { id: "definitly", text: "definitly" },
            { id: "definatly", text: "definatly" },
          ],
          answerId: "definitely",
          hints: ["It has finite inside.", "de-finite-ly."],
          correct: "definitely — finite + ly!",
          tryAgain: "Look for “finite”.",
        },
        {
          id: "sp-3",
          type: "choice",
          prompt: "Homophone: “They walked ____ the park.”",
          options: [
            { id: "through", text: "through" },
            { id: "threw", text: "threw" },
            { id: "thru", text: "thru" },
            { id: "though", text: "though" },
          ],
          answerId: "through",
          hints: ["Movement from one side to another.", "Not past of throw."],
          correct: "through the park.",
          tryAgain: "threw = past of throw.",
        },
        commonClose,
      ],
    };
  }

  // 14-15
  return {
    muscle: "spelling",
    title: "Spelling",
    kidTitle: "Spelling",
    emoji: "🔤",
    estimatedMin: 5,
    items: [
      {
        id: "sp-intro",
        type: "intro",
        emoji: "🔤",
        title: "Precision spelling",
        body: ["Exam words and near-misses.", "Choose the form that matches meaning."],
        cta: "Let’s spell!",
      },
      {
        id: "sp-1",
        type: "choice",
        prompt: "Correct spelling?",
        options: [
          { id: "accommodate", text: "accommodate" },
          { id: "acommodate", text: "acommodate" },
          { id: "accomodate", text: "accomodate" },
          { id: "acomodate", text: "acomodate" },
        ],
        answerId: "accommodate",
        hints: ["Two c’s and two m’s.", "ac + com + modate."],
        correct: "accommodate!",
        tryAgain: "Double c and double m.",
      },
      {
        id: "sp-2",
        type: "choice",
        prompt: "Which fits: “The ____ of the story surprised us.”",
        options: [
          { id: "principle", text: "principle (rule)" },
          { id: "principal", text: "principal (main / head)" },
          { id: "princple", text: "princple" },
          { id: "principel", text: "principel" },
        ],
        answerId: "principal",
        hints: ["Main idea → principal.", "Principle = rule/belief."],
        correct: "principal — the main part!",
        tryAgain: "Main/head = principal.",
      },
      {
        id: "sp-3",
        type: "choice",
        prompt: "Correct spelling?",
        options: [
          { id: "questionnaire", text: "questionnaire" },
          { id: "questionaire", text: "questionaire" },
          { id: "questionnair", text: "questionnair" },
          { id: "questonnaire", text: "questonnaire" },
        ],
        answerId: "questionnaire",
        hints: ["Double n before -aire.", "question + naire."],
        correct: "questionnaire!",
        tryAgain: "Keep the double n.",
      },
      commonClose,
    ],
  };
}
