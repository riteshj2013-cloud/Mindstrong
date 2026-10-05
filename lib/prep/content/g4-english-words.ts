import type { ChapterDef, PrepQuestion } from "../types";

/** Word Garden - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-eng-ch03-a-q01",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Which word rhymes with \"roof\"?",
    options: [
      { id: "a", text: "proof" },
      { id: "b", text: "rain" },
      { id: "c", text: "frogs" },
      { id: "d", text: "boat" }
    ],
    answerId: "a",
    explanation: "Rhyming words end with the same sound. Roof and proof both end with \"oof.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-a-q02",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Which pair of words RHYMES in the poem?",
    options: [
      { id: "a", text: "frogs, clouds" },
      { id: "b", text: "boat, paper" },
      { id: "c", text: "white, right" },
      { id: "d", text: "rain, sky" }
    ],
    answerId: "c",
    explanation: "White and right both end with the \"ite\" sound. Say them aloud, and they sound alike at the end.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-a-q03",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Amma says, \"Come in, it's late!\" What does \"it's\" mean?",
    options: [
      { id: "a", text: "its" },
      { id: "b", text: "it is" },
      { id: "c", text: "it was" },
      { id: "d", text: "is it" }
    ],
    answerId: "b",
    explanation: "\"It's\" is a short form of \"it is.\" The apostrophe (') takes the place of the missing letter \"i.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-a-q04",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. What is the OPPOSITE of \"late\"?",
    options: [
      { id: "a", text: "dark" },
      { id: "b", text: "tired" },
      { id: "c", text: "slow" },
      { id: "d", text: "early" }
    ],
    answerId: "d",
    explanation: "Late means after the right time. Early means before it.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-a-q05",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. \"But puddles, puddles cannot wait!\" What does the child mean?",
    options: [
      { id: "a", text: "The child is scared of puddles." },
      { id: "b", text: "The puddles will dry up soon." },
      { id: "c", text: "The child is too excited to stop playing in the puddles." },
      { id: "d", text: "The child wants to go to sleep." }
    ],
    answerId: "c",
    explanation: "Amma calls the child in, but the child wants to keep playing. Repeating \"puddles, puddles\" shows excitement.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-a-q06",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. Which line shows that Tara asks politely?",
    options: [
      { id: "a", text: "\"May I borrow a book about stars, please?\"" },
      { id: "b", text: "\"When should I return it?\"" },
      { id: "c", text: "\"I will.\"" },
      { id: "d", text: "\"Here is one with lots of pictures.\"" }
    ],
    answerId: "a",
    explanation: "\"May I\" and \"please\" are polite words. They make a request kind and respectful.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q07",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. Why does Tara say, \"Sorry, ma'am, I returned my last book late\"?",
    options: [
      { id: "a", text: "She lost the book." },
      { id: "b", text: "She wants a new book." },
      { id: "c", text: "The librarian was angry." },
      { id: "d", text: "She is being honest about a mistake and saying sorry." }
    ],
    answerId: "d",
    explanation: "Nobody asked her, but Tara owns up to her mistake. Saying sorry for our mistakes is polite and honest.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q08",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. \"When should I return it?\" Why does this sentence end with a question mark (?)?",
    options: [
      { id: "a", text: "It is a happy sentence." },
      { id: "b", text: "It asks a question." },
      { id: "c", text: "It has a name in it." },
      { id: "d", text: "It is a long sentence." }
    ],
    answerId: "b",
    explanation: "A sentence that asks something ends with a question mark. Question words like when, what and where are clues.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q09",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. Which word from the story is a COMPOUND word (two words joined)?",
    options: [
      { id: "a", text: "happily" },
      { id: "b", text: "football" },
      { id: "c", text: "helpless" },
      { id: "d", text: "thankful" }
    ],
    answerId: "b",
    explanation: "Foot + ball = football. The other words have endings like -ly, -less or -ful added, not two whole words.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q10",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. The puppy \"looked hungry and helpless.\" What does \"helpless\" mean?",
    options: [
      { id: "a", text: "Full of help" },
      { id: "b", text: "Helping again" },
      { id: "c", text: "Very helpful" },
      { id: "d", text: "Unable to help itself" }
    ],
    answerId: "d",
    explanation: "\"-less\" means without. A helpless puppy is small and alone, without help, and cannot look after itself.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q11",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. \"Bunty was very thankful.\" What does \"thankful\" mean?",
    options: [
      { id: "a", text: "Full of thanks" },
      { id: "b", text: "Without thanks" },
      { id: "c", text: "Not thankful" },
      { id: "d", text: "Thanking again" }
    ],
    answerId: "a",
    explanation: "\"-ful\" means full of. Thankful means full of thanks, so Bunty was grateful for his gift.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q12",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3 and look at the pictures. The first picture shows \"sunset\". Which word names the OPPOSITE shown in the second picture?",
    options: [
      { id: "a", text: "sunshine" },
      { id: "b", text: "sunlight" },
      { id: "c", text: "sunrise" },
      { id: "d", text: "sunflower" }
    ],
    answerId: "c",
    explanation: "Sunset is in the evening, at 6 p.m. The second picture is the morning, at 6 a.m., when the sun comes up. That is sunrise.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Two pictures of the sun near the hills</title><desc>Two panels: the left, labelled sunset, shows an orange evening sky at 6 p.m.; the right, labelled with a question mark, shows a pale sky at 6 a.m. with a child stretching.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"10\" y=\"10\" width=\"185\" height=\"200\" rx=\"10\" fill=\"#f8961e\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"102\" cy=\"150\" r=\"22\" fill=\"#d62828\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"10\" y=\"150\" width=\"185\" height=\"60\" rx=\"0\" fill=\"#6a994e\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M10,150 q46,-30 92,0 q46,-30 93,0 v4 h-185 z\" fill=\"#386641\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"60\" y=\"22\" width=\"85\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#999\" stroke-width=\"1\"/><text x=\"102\" y=\"41\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">6:00 p.m.</text><path d=\"M40,90 l8,6 l8,-6 M70,75 l7,5 l7,-5\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"10\" y=\"10\" width=\"185\" height=\"200\" rx=\"10\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"102\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">sunset</text><rect x=\"205\" y=\"10\" width=\"185\" height=\"200\" rx=\"10\" fill=\"#bde0fe\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"297\" cy=\"138\" r=\"22\" fill=\"#ffd166\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"205\" y=\"150\" width=\"185\" height=\"60\" rx=\"0\" fill=\"#6a994e\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M205,150 q46,-30 92,0 q46,-30 93,0 v4 h-185 z\" fill=\"#386641\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"255\" y=\"22\" width=\"85\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#999\" stroke-width=\"1\"/><text x=\"297\" y=\"41\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">6:00 a.m.</text><path d=\"M235,100 q20,-14 40,0\" fill=\"none\" stroke=\"#fff\" stroke-width=\"0\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"340.5\" y1=\"164.8\" x2=\"339.6\" y2=\"190\" stroke=\"#4d4d4d\" stroke-width=\"4.2\" stroke-linecap=\"round\"/><line x1=\"349.5\" y1=\"164.8\" x2=\"350.4\" y2=\"190\" stroke=\"#4d4d4d\" stroke-width=\"4.2\" stroke-linecap=\"round\"/><line x1=\"336.0\" y1=\"147.3\" x2=\"328.8\" y2=\"130.5\" stroke=\"#c68642\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"354.0\" y1=\"147.3\" x2=\"361.2\" y2=\"130.5\" stroke=\"#c68642\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><rect x=\"336.0\" y=\"144.3\" width=\"18.0\" height=\"20.4\" rx=\"2.4\" fill=\"#e76f51\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"345\" cy=\"137.2\" r=\"7.1\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M337.8,136.4 a7.1,7.1 0 0 1 14.3,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"342.9\" cy=\"137.7\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"347.0\" cy=\"137.7\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M342.9,140.0 q2.0,1.7 4.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"205\" y=\"10\" width=\"185\" height=\"200\" rx=\"10\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"297\" y=\"238\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">?</text></svg>", "alt": "Two panels of the sun near green hills: one labelled sunset at 6 p.m., and one labelled with a question mark at 6 a.m."}
  },
  {
    id: "g4-eng-ch03-a-q13",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. \"It was Bunty's birthday.\" What does the apostrophe (') in \"Bunty's\" show?",
    options: [
      { id: "a", text: "There is more than one Bunty." },
      { id: "b", text: "A letter is missing." },
      { id: "c", text: "It is a question." },
      { id: "d", text: "The birthday belongs to Bunty." }
    ],
    answerId: "d",
    explanation: "An apostrophe + s can show that something belongs to someone. Bunty's birthday is the birthday of Bunty.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q14",
    prompt: "Look at the picture. Kabir is giving Riya a birthday gift. What should Riya say?",
    options: [
      { id: "a", text: "\"Give me more.\"" },
      { id: "b", text: "\"Thank you so much!\"" },
      { id: "c", text: "\"Okay.\"" },
      { id: "d", text: "\"Why?\"" }
    ],
    answerId: "b",
    explanation: "When someone gives us something, we say thank you. It shows we are grateful.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Kabir gives Riya a present</title><desc>A boy named Kabir holds out a wrapped gift to a girl named Riya, who has an empty speech bubble.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#fde2e4\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"100.6\" y1=\"162.5\" x2=\"98.7\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"119.3\" y1=\"162.5\" x2=\"121.2\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"91.2\" y1=\"126.2\" x2=\"81.2\" y2=\"163.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><line x1=\"128.7\" y1=\"126.2\" x2=\"168.7\" y2=\"128.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><rect x=\"91.2\" y=\"120.0\" width=\"37.5\" height=\"42.5\" rx=\"5.0\" fill=\"#2a9d8f\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"105.0\" r=\"15.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M95.0,103.5 a15.0,15.0 0 0 1 30.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"105.8\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"114.2\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M105.8,110.8 q4.1,3.5 8.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"81.0\" y=\"221\" width=\"58.0\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"110\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Kabir</text><rect x=\"160\" y=\"140\" width=\"40\" height=\"34\" rx=\"3\" fill=\"#ffafcc\" stroke=\"#c9184a\" stroke-width=\"2\"/><rect x=\"176\" y=\"140\" width=\"8\" height=\"34\" rx=\"0\" fill=\"#c9184a\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M180,140 q-12,-14 -16,-2 M180,140 q12,-14 16,-2\" fill=\"none\" stroke=\"#c9184a\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"280.6\" y1=\"162.5\" x2=\"278.7\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"299.3\" y1=\"162.5\" x2=\"301.2\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"271.2\" y1=\"126.2\" x2=\"261.2\" y2=\"163.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><line x1=\"308.7\" y1=\"126.2\" x2=\"318.7\" y2=\"163.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><polygon points=\"273.1,120.0 306.8,120.0 318.1,177.5 261.8,177.5\" fill=\"#ffb703\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"273.2\" y=\"102.0\" width=\"7.5\" height=\"24.0\" rx=\"3.7\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"299.3\" y=\"102.0\" width=\"7.5\" height=\"24.0\" rx=\"3.7\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"290\" cy=\"105.0\" r=\"15.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M275.0,103.5 a15.0,15.0 0 0 1 30.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"285.8\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"294.2\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M285.8,110.8 q4.1,3.5 8.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"265.6\" y=\"221\" width=\"48.8\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"290\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Riya</text><rect x=\"250\" y=\"10\" width=\"130\" height=\"46\" rx=\"12\" fill=\"#ffffff\" stroke=\"#555\" stroke-width=\"2\"/><polygon points=\"275,55 295,55 285,92\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M275,56 L285,92 L295,56\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"315.0\" y=\"32\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">?</text></svg>", "alt": "A boy named Kabir holds out a wrapped gift to a girl named Riya, who has an empty speech bubble."}
  },
  {
    id: "g4-eng-ch03-a-q15",
    prompt: "Which word means almost the SAME as \"begin\"?",
    options: [
      { id: "a", text: "end" },
      { id: "b", text: "stop" },
      { id: "c", text: "start" },
      { id: "d", text: "finish" }
    ],
    answerId: "c",
    explanation: "Begin and start mean the same thing. End, stop and finish are opposites of begin.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q16",
    prompt: "Choose the correct word.\n\"I can ___ the birds singing.\"",
    options: [
      { id: "a", text: "hear" },
      { id: "b", text: "here" },
      { id: "c", text: "hair" },
      { id: "d", text: "her" }
    ],
    answerId: "a",
    explanation: "We hear with our ears, and \"hear\" has \"ear\" in it! \"Here\" means this place.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q17",
    prompt: "Choose the correct word.\n\"Please ___ your name on the paper.\"",
    options: [
      { id: "a", text: "write" },
      { id: "b", text: "right" },
      { id: "c", text: "rite" },
      { id: "d", text: "white" }
    ],
    answerId: "a",
    explanation: "\"Write\" means to put words down with a pencil. \"Right\" means correct, or the opposite of left. They sound the same.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q18",
    prompt: "Choose the correct word.\n\"There are ___ apples in the basket.\"",
    options: [
      { id: "a", text: "to" },
      { id: "b", text: "too" },
      { id: "c", text: "tow" },
      { id: "d", text: "two" }
    ],
    answerId: "d",
    explanation: "\"Two\" is the number 2. \"To\" shows direction (go to school), and \"too\" means also.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q19",
    prompt: "Which word means \"not kind\"?",
    options: [
      { id: "a", text: "diskind" },
      { id: "b", text: "unkind" },
      { id: "c", text: "rekind" },
      { id: "d", text: "kindless" }
    ],
    answerId: "b",
    explanation: "\"Un-\" at the start of a word means not. Unkind means not kind, and unhappy means not happy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q20",
    prompt: "What does \"rebuild\" mean?",
    options: [
      { id: "a", text: "Not build" },
      { id: "b", text: "Build badly" },
      { id: "c", text: "Build again" },
      { id: "d", text: "Build fast" }
    ],
    answerId: "c",
    explanation: "\"Re-\" means again. Rebuild means build again, and reread means read again.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q21",
    prompt: "Look at the postcard. Which punctuation mark is missing at the end of line 2?",
    options: [
      { id: "a", text: "A full stop (.)" },
      { id: "b", text: "A comma (,)" },
      { id: "c", text: "A question mark (?)" },
      { id: "d", text: "An apostrophe (')" }
    ],
    answerId: "c",
    explanation: "\"How are you\" asks something, so it needs a question mark at the end.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A postcard to Nani</title><desc>A postcard with a short four-line message on the left, numbered 1 to 4, and a stamp and address on the right.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"10\" y=\"15\" width=\"380\" height=\"230\" rx=\"8\" fill=\"#fffdf5\" stroke=\"#8d6e63\" stroke-width=\"2\"/><line x1=\"232\" y1=\"35\" x2=\"232\" y2=\"225\" stroke=\"#bcaaa4\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"36\" cy=\"60\" r=\"13\" fill=\"#2d2d2d\" stroke=\"none\" stroke-width=\"2\"/><text x=\"36\" y=\"66\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">1</text><text x=\"58\" y=\"66\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Dear Nani,</text><circle cx=\"36\" cy=\"105\" r=\"13\" fill=\"#2d2d2d\" stroke=\"none\" stroke-width=\"2\"/><text x=\"36\" y=\"111\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">2</text><text x=\"58\" y=\"111\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">How are you</text><circle cx=\"36\" cy=\"150\" r=\"13\" fill=\"#2d2d2d\" stroke=\"none\" stroke-width=\"2\"/><text x=\"36\" y=\"156\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">3</text><text x=\"58\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I am having fun in Goa.</text><circle cx=\"36\" cy=\"195\" r=\"13\" fill=\"#2d2d2d\" stroke=\"none\" stroke-width=\"2\"/><text x=\"36\" y=\"201\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#ffffff\">4</text><text x=\"58\" y=\"201\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Love, Arjun</text><rect x=\"315\" y=\"30\" width=\"60\" height=\"70\" rx=\"4\" fill=\"#a8dadc\" stroke=\"#457b9d\" stroke-width=\"2\"/><line x1=\"361.0\" y1=\"62.0\" x2=\"367.0\" y2=\"62.0\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"356.3\" y1=\"73.3\" x2=\"360.5\" y2=\"77.5\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"345.0\" y1=\"78.0\" x2=\"345.0\" y2=\"84.0\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"333.6\" y1=\"73.3\" x2=\"329.4\" y2=\"77.5\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"329.0\" y1=\"62.0\" x2=\"323.0\" y2=\"62.0\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"333.6\" y1=\"50.6\" x2=\"329.4\" y2=\"46.4\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"345.0\" y1=\"46.0\" x2=\"345.0\" y2=\"40.0\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"356.3\" y1=\"50.6\" x2=\"360.5\" y2=\"46.4\" stroke=\"#f4a261\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"345\" cy=\"62\" r=\"12\" fill=\"#f4a261\" stroke=\"none\" stroke-width=\"2\"/><text x=\"245\" y=\"140\" font-family=\"sans-serif\" font-size=\"14\" text-anchor=\"start\" font-weight=\"bold\" fill=\"#2d2d2d\">To:</text><text x=\"245\" y=\"165\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Mrs. Kamala Iyer</text><text x=\"245\" y=\"190\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pune</text><line x1=\"245\" y1=\"147\" x2=\"378\" y2=\"147\" stroke=\"#d7ccc8\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"245\" y1=\"172\" x2=\"378\" y2=\"172\" stroke=\"#d7ccc8\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"245\" y1=\"197\" x2=\"378\" y2=\"197\" stroke=\"#d7ccc8\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>", "alt": "A postcard with a short message on four numbered lines, and a stamp and address on the right."}
  },
  {
    id: "g4-eng-ch03-a-q22",
    prompt: "Which sentence uses commas correctly?",
    options: [
      { id: "a", text: "I bought pens, pencils and erasers." },
      { id: "b", text: "I bought, pens pencils and erasers." },
      { id: "c", text: "I bought pens pencils, and, erasers." },
      { id: "d", text: "I, bought pens pencils and erasers." }
    ],
    answerId: "a",
    explanation: "In a list, use a comma between the items. \"And\" joins the last two items.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q23",
    prompt: "Put the words in the correct order to make a sentence.\nschool / goes / to / Meena",
    options: [
      { id: "a", text: "School goes to Meena." },
      { id: "b", text: "To goes Meena school." },
      { id: "c", text: "Meena school to goes." },
      { id: "d", text: "Meena goes to school." }
    ],
    answerId: "d",
    explanation: "Start with who (Meena), then the action (goes), then where (to school).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-a-q24",
    prompt: "Look at the word tiles. Put them in the correct order to make a sentence.",
    options: [
      { id: "a", text: "Blue the kite is sky in the." },
      { id: "b", text: "The kite is in the blue sky." },
      { id: "c", text: "The blue is kite in the sky." },
      { id: "d", text: "Kite the is blue in sky the." }
    ],
    answerId: "b",
    explanation: "Start with what (the kite), then is, then where (in the blue sky). The describing word \"blue\" goes before \"sky\".",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Word tiles</title><desc>Seven mixed-up word tiles to be put in order to make a sentence.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><text x=\"200\" y=\"40\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#555\">Word tiles</text><g transform=\"rotate(-4 50.0 108)\"><rect x=\"20\" y=\"80\" width=\"60\" height=\"56\" rx=\"10\" fill=\"#ffadad\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"50.0\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">is</text></g><g transform=\"rotate(3 128.5 108)\"><rect x=\"94\" y=\"80\" width=\"69\" height=\"56\" rx=\"10\" fill=\"#ffd6a5\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"128.5\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">the</text></g><g transform=\"rotate(-2 218.0 108)\"><rect x=\"177\" y=\"80\" width=\"82\" height=\"56\" rx=\"10\" fill=\"#fdffb6\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"218.0\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">kite</text></g><g transform=\"rotate(5 303.0 108)\"><rect x=\"273\" y=\"80\" width=\"60\" height=\"56\" rx=\"10\" fill=\"#caffbf\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"303.0\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">in</text></g><g transform=\"rotate(-3 54.5 188)\"><rect x=\"20\" y=\"160\" width=\"69\" height=\"56\" rx=\"10\" fill=\"#9bf6ff\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"54.5\" y=\"196\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">the</text></g><g transform=\"rotate(2 144.0 188)\"><rect x=\"103\" y=\"160\" width=\"82\" height=\"56\" rx=\"10\" fill=\"#a0c4ff\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"144.0\" y=\"196\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">blue</text></g><g transform=\"rotate(-5 233.5 188)\"><rect x=\"199\" y=\"160\" width=\"69\" height=\"56\" rx=\"10\" fill=\"#bdb2ff\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"233.5\" y=\"196\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">sky</text></g></svg>", "alt": "Seven mixed-up word tiles in different colours."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-eng-ch03-b-q01",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. Which word rhymes with \"cry\"?",
    options: [
      { id: "a", text: "croak" },
      { id: "b", text: "sky" },
      { id: "c", text: "clouds" },
      { id: "d", text: "frogs" }
    ],
    answerId: "b",
    explanation: "Cry and sky both end with the same \"y\" sound. The poet put them at the ends of two lines.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-b-q02",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. \"It wobbles left, it wobbles right.\" This shows that the paper boat is \u2014",
    options: [
      { id: "a", text: "sinking fast" },
      { id: "b", text: "flying in the air" },
      { id: "c", text: "lying still" },
      { id: "d", text: "moving unsteadily from side to side" }
    ],
    answerId: "d",
    explanation: "To wobble is to shake or tip from side to side. \"Left\" and \"right\" are clues.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-b-q03",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. \"I float my boat of paper white.\" What is the OPPOSITE of \"white\"?",
    options: [
      { id: "a", text: "black" },
      { id: "b", text: "grey" },
      { id: "c", text: "paper" },
      { id: "d", text: "bright" }
    ],
    answerId: "a",
    explanation: "White and black are opposite colours. Grey sits between them.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-b-q04",
    prompt: "The poem printed on a notebook-style card, in two verses of four lines each.\n\nPitter-patter on the roof,\nThe rain is here, I have the proof!\nThe frogs say croak, the peacocks cry,\nGrey clouds are sailing in the sky.\n\nI float my boat of paper white,\nIt wobbles left, it wobbles right.\nAmma calls, \"Come in, it's late!\"\nBut puddles, puddles cannot wait!\n\nRead Poem P1. In which season is the poem set?",
    options: [
      { id: "a", text: "Winter" },
      { id: "b", text: "A dry, hot summer" },
      { id: "c", text: "The rainy season (monsoon)" },
      { id: "d", text: "Snowy spring" }
    ],
    answerId: "c",
    explanation: "Rain on the roof, croaking frogs, crying peacocks and puddles are all clues to the monsoon.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 320\" width=\"400\" height=\"320\" role=\"img\"><title>Poem card: Rain on the Roof</title><desc>A notebook-style card showing an eight-line poem in two verses of four lines each, with raindrops in the corner.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"320\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"15\" y=\"10\" width=\"370\" height=\"300\" rx=\"10\" fill=\"#ffffff\" stroke=\"#90a4ae\" stroke-width=\"2\"/><line x1=\"30\" y1=\"62\" x2=\"370\" y2=\"62\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"82\" x2=\"370\" y2=\"82\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"102\" x2=\"370\" y2=\"102\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"142\" x2=\"370\" y2=\"142\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"162\" x2=\"370\" y2=\"162\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"182\" x2=\"370\" y2=\"182\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"202\" x2=\"370\" y2=\"202\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"222\" x2=\"370\" y2=\"222\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"242\" x2=\"370\" y2=\"242\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"262\" x2=\"370\" y2=\"262\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"282\" x2=\"370\" y2=\"282\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"30\" y1=\"302\" x2=\"370\" y2=\"302\" stroke=\"#e3f2fd\" stroke-width=\"1\" stroke-linecap=\"round\"/><line x1=\"52\" y1=\"15\" x2=\"52\" y2=\"305\" stroke=\"#ffcdd2\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"205\" y=\"42\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#1d3557\">Rain on the Roof</text><text x=\"64\" y=\"78\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Pitter-patter on the roof,</text><text x=\"64\" y=\"104\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The rain is here, I have the proof!</text><text x=\"64\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">The frogs say croak, the peacocks cry,</text><text x=\"64\" y=\"156\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Grey clouds are sailing in the sky.</text><text x=\"64\" y=\"196\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">I float my boat of paper white,</text><text x=\"64\" y=\"222\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">It wobbles left, it wobbles right.</text><text x=\"64\" y=\"248\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">Amma calls, \"Come in, it's late!\"</text><text x=\"64\" y=\"274\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#2d2d2d\">But puddles, puddles cannot wait!</text><path d=\"M345,30 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M360,55 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M330,58 q5,8 0,12 q-5,-4 0,-12 z\" fill=\"#5dade2\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "The poem printed on a notebook-style card, in two verses of four lines each."}
  },
  {
    id: "g4-eng-ch03-b-q05",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. The librarian says, \"Here is one with lots of pictures.\" Which is another POLITE reply Tara could give?",
    options: [
      { id: "a", text: "\"Thank you, ma'am. It looks lovely!\"" },
      { id: "b", text: "\"Give me another one.\"" },
      { id: "c", text: "\"Hmm.\"" },
      { id: "d", text: "\"I don't like pictures.\"" }
    ],
    answerId: "a",
    explanation: "A polite reply says thank you and is kind about what we are given.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q06",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. When should Tara return the book?",
    options: [
      { id: "a", text: "Today" },
      { id: "b", text: "On Sunday" },
      { id: "c", text: "Next month" },
      { id: "d", text: "Next Monday" }
    ],
    answerId: "d",
    explanation: "The librarian says, \"Please bring it back next Monday.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q07",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. The librarian says, \"That's all right. Thank you for telling me.\" This shows the librarian is \u2014",
    options: [
      { id: "a", text: "angry" },
      { id: "b", text: "kind and understanding" },
      { id: "c", text: "sleepy" },
      { id: "d", text: "in a hurry" }
    ],
    answerId: "b",
    explanation: "She forgives Tara and even thanks her for being honest. That is a kind, understanding reply.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q08",
    prompt: "**Librarian:** Good morning, Tara. How can I help you?\n**Tara:** Good morning, ma'am. May I borrow a book about stars, please?\n**Librarian:** Of course. Here is one with lots of pictures.\n**Tara:** Thank you! When should I return it?\n**Librarian:** Please bring it back next Monday.\n**Tara:** I will. Sorry, ma'am, I returned my last book late.\n**Librarian:** That's all right. Thank you for telling me.\n**Tara:** Thank you, ma'am. Have a nice day!\n\nRead Dialogue P2. What is the short form \"That's\" made of?",
    options: [
      { id: "a", text: "That has" },
      { id: "b", text: "That was" },
      { id: "c", text: "That is" },
      { id: "d", text: "Thats" }
    ],
    answerId: "c",
    explanation: "\"That's\" is short for \"that is.\" The apostrophe stands for the missing \"i.\" Always keep the apostrophe in short forms.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q09",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. The puppy \"looked hungry.\" What is the OPPOSITE of \"hungry\"?",
    options: [
      { id: "a", text: "thirsty" },
      { id: "b", text: "sad" },
      { id: "c", text: "sleepy" },
      { id: "d", text: "full" }
    ],
    answerId: "d",
    explanation: "When we are hungry, we need food. After eating enough, we feel full.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q10",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. Bunty ran to the \"playground.\" Which two words make \"playground\"?",
    options: [
      { id: "a", text: "play + ground" },
      { id: "b", text: "plays + round" },
      { id: "c", text: "pla + yground" },
      { id: "d", text: "player + ground" }
    ],
    answerId: "a",
    explanation: "A compound word joins two whole words. A playground is ground where we play.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q11",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. \"The puppy wagged its tail happily.\" How did the puppy feel?",
    options: [
      { id: "a", text: "Scared" },
      { id: "b", text: "Angry" },
      { id: "c", text: "Happy and thankful" },
      { id: "d", text: "Sleepy" }
    ],
    answerId: "c",
    explanation: "Dogs wag their tails when they are happy. The puppy had just been given cake.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q12",
    prompt: "It was Bunty's birthday. In the morning, he saw a big box on the table. Inside was a red football! Bunty was very thankful. He ran to the playground with his friends. They played until sunset. On the way home, Bunty saw a little puppy sitting alone. It looked hungry and helpless. Bunty gave it some of his birthday cake. The puppy wagged its tail happily. \"This is the best birthday ever,\" said Bunty.\n\nRead Passage P3. Which word from the story has an ending that means \"full of\"?",
    options: [
      { id: "a", text: "helpless" },
      { id: "b", text: "thankful" },
      { id: "c", text: "football" },
      { id: "d", text: "birthday" }
    ],
    answerId: "b",
    explanation: "\"-ful\" means full of, so thankful means full of thanks. \"-less\" means without, which is the opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q13",
    prompt: "Look at the picture. Priya needs to get through the crowded doorway. What should she say?",
    options: [
      { id: "a", text: "\"Excuse me, please.\"" },
      { id: "b", text: "\"Move!\"" },
      { id: "c", text: "\"Go away.\"" },
      { id: "d", text: "\"Hey, you!\"" }
    ],
    answerId: "a",
    explanation: "\"Excuse me\" is the polite way to ask people to let you pass.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Priya at a crowded doorway</title><desc>A girl named Priya stands near a doorway where three people are standing close together; she has an empty speech bubble.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#e9ecef\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"170\" y=\"30\" width=\"120\" height=\"190\" rx=\"4\" fill=\"#8d6e63\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"180\" y=\"40\" width=\"100\" height=\"180\" rx=\"2\" fill=\"#f5ebe0\" stroke=\"none\" stroke-width=\"2\"/><line x1=\"196.0\" y1=\"164.6\" x2=\"194.2\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><line x1=\"214.0\" y1=\"164.6\" x2=\"215.8\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.4\" stroke-linecap=\"round\"/><line x1=\"187.0\" y1=\"129.8\" x2=\"177.4\" y2=\"165.8\" stroke=\"#c68642\" stroke-width=\"7.1\" stroke-linecap=\"round\"/><line x1=\"223.0\" y1=\"129.8\" x2=\"232.6\" y2=\"165.8\" stroke=\"#c68642\" stroke-width=\"7.1\" stroke-linecap=\"round\"/><rect x=\"187.0\" y=\"123.8\" width=\"36.0\" height=\"40.7\" rx=\"4.8\" fill=\"#457b9d\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"205\" cy=\"109.4\" r=\"14.3\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M190.6,107.9 a14.3,14.3 0 0 1 28.7,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"200.9\" cy=\"110.4\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"209.0\" cy=\"110.4\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M200.9,115.0 q4.0,3.4 8.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"245.6\" y1=\"162.5\" x2=\"243.7\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"264.3\" y1=\"162.5\" x2=\"266.2\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"8.7\" stroke-linecap=\"round\"/><line x1=\"236.2\" y1=\"126.2\" x2=\"226.2\" y2=\"163.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><line x1=\"273.7\" y1=\"126.2\" x2=\"283.7\" y2=\"163.7\" stroke=\"#c68642\" stroke-width=\"7.5\" stroke-linecap=\"round\"/><polygon points=\"238.1,120.0 271.8,120.0 283.1,177.5 226.8,177.5\" fill=\"#9b2226\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"238.2\" y=\"102.0\" width=\"7.5\" height=\"24.0\" rx=\"3.7\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"264.3\" y=\"102.0\" width=\"7.5\" height=\"24.0\" rx=\"3.7\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"255\" cy=\"105.0\" r=\"15.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M240.0,103.5 a15.0,15.0 0 0 1 30.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"250.8\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"259.2\" cy=\"106.0\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M250.8,110.8 q4.1,3.5 8.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"221.7\" y1=\"173.8\" x2=\"220.1\" y2=\"220\" stroke=\"#4d4d4d\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"238.2\" y1=\"173.8\" x2=\"239.9\" y2=\"220\" stroke=\"#4d4d4d\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"213.5\" y1=\"141.9\" x2=\"204.7\" y2=\"174.9\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"246.5\" y1=\"141.9\" x2=\"255.3\" y2=\"174.9\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><rect x=\"213.5\" y=\"136.4\" width=\"33.0\" height=\"37.4\" rx=\"4.4\" fill=\"#6a994e\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"230\" cy=\"123.2\" r=\"13.2\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M216.8,121.8 a13.2,13.2 0 0 1 26.4,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"226.3\" cy=\"124.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"233.6\" cy=\"124.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M226.3,128.3 q3.6,3.1 7.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"71.7\" y1=\"168.8\" x2=\"70.1\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"88.2\" y1=\"168.8\" x2=\"89.9\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"7.7\" stroke-linecap=\"round\"/><line x1=\"63.5\" y1=\"136.9\" x2=\"54.7\" y2=\"169.9\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><line x1=\"96.5\" y1=\"136.9\" x2=\"105.3\" y2=\"169.9\" stroke=\"#c68642\" stroke-width=\"6.6\" stroke-linecap=\"round\"/><polygon points=\"65.1,131.4 94.8,131.4 104.7,182.0 55.2,182.0\" fill=\"#f72585\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"65.2\" y=\"115.5\" width=\"6.6\" height=\"21.1\" rx=\"3.3\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"88.1\" y=\"115.5\" width=\"6.6\" height=\"21.1\" rx=\"3.3\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"118.2\" r=\"13.2\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M66.8,116.8 a13.2,13.2 0 0 1 26.4,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"76.3\" cy=\"119.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"83.6\" cy=\"119.1\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M76.3,123.3 q3.6,3.1 7.3,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"51.0\" y=\"221\" width=\"58.0\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"80\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Priya</text><rect x=\"15\" y=\"15\" width=\"130\" height=\"46\" rx=\"12\" fill=\"#ffffff\" stroke=\"#555\" stroke-width=\"2\"/><polygon points=\"60,60 80,60 70,100\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M60,61 L70,100 L80,61\" fill=\"none\" stroke=\"#555\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"80.0\" y=\"37\" font-family=\"sans-serif\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#2d2d2d\">?</text></svg>", "alt": "A girl named Priya stands near a doorway where three people are standing, and she has an empty speech bubble."}
  },
  {
    id: "g4-eng-ch03-b-q14",
    prompt: "Which word means almost the SAME as \"big\"?",
    options: [
      { id: "a", text: "small" },
      { id: "b", text: "thin" },
      { id: "c", text: "large" },
      { id: "d", text: "short" }
    ],
    answerId: "c",
    explanation: "Big and large mean the same. Small is the opposite of big.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q15",
    prompt: "Which word rhymes with \"cat\"?",
    options: [
      { id: "a", text: "cot" },
      { id: "b", text: "cut" },
      { id: "c", text: "cap" },
      { id: "d", text: "hat" }
    ],
    answerId: "d",
    explanation: "Cat and hat both end with \"at.\" Cot and cut start the same way, but their endings sound different.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q16",
    prompt: "Look at the picture. Fill in the blank.\n\"Mrs. Rao is hugging her ___.\"",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "son" },
      { id: "c", text: "sin" },
      { id: "d", text: "soon" }
    ],
    answerId: "b",
    explanation: "A boy in a family is a \"son\". \"Sun\" sounds the same but means the star in the sky.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Mrs. Rao hugs a child</title><desc>A mother named Mrs. Rao hugs her young boy, who is labelled with a question mark; a small heart floats above them.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"0\" y=\"215\" width=\"400\" height=\"45\" rx=\"0\" fill=\"#fff1e6\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"120\" y=\"10\" width=\"160\" height=\"30\" rx=\"6\" fill=\"#ffffff\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"200\" y=\"31\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Mrs. Rao and her ___</text><line x1=\"158.7\" y1=\"152.0\" x2=\"156.5\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"10.5\" stroke-linecap=\"round\"/><line x1=\"181.2\" y1=\"152.0\" x2=\"183.5\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"10.5\" stroke-linecap=\"round\"/><line x1=\"147.5\" y1=\"108.5\" x2=\"135.5\" y2=\"153.5\" stroke=\"#c68642\" stroke-width=\"9.0\" stroke-linecap=\"round\"/><line x1=\"192.5\" y1=\"108.5\" x2=\"240.5\" y2=\"111.5\" stroke=\"#c68642\" stroke-width=\"9.0\" stroke-linecap=\"round\"/><polygon points=\"149.7,101.0 190.2,101.0 203.7,170.0 136.2,170.0\" fill=\"#b5179e\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"149.8\" y=\"79.4\" width=\"9.0\" height=\"28.8\" rx=\"4.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"181.1\" y=\"79.4\" width=\"9.0\" height=\"28.8\" rx=\"4.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"170\" cy=\"83.0\" r=\"18.0\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M152.0,81.2 a18.0,18.0 0 0 1 36.0,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"164.9\" cy=\"84.2\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"175.0\" cy=\"84.2\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M164.9,90.0 q5.0,4.3 10.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"127.1\" y=\"221\" width=\"85.6\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"170\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">Mrs. Rao</text><line x1=\"243.2\" y1=\"177.2\" x2=\"241.9\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><line x1=\"256.7\" y1=\"177.2\" x2=\"258.1\" y2=\"215\" stroke=\"#4d4d4d\" stroke-width=\"6.3\" stroke-linecap=\"round\"/><line x1=\"236.5\" y1=\"151.1\" x2=\"207.7\" y2=\"152.9\" stroke=\"#c68642\" stroke-width=\"5.3\" stroke-linecap=\"round\"/><line x1=\"263.5\" y1=\"151.1\" x2=\"270.7\" y2=\"178.1\" stroke=\"#c68642\" stroke-width=\"5.3\" stroke-linecap=\"round\"/><rect x=\"236.5\" y=\"146.6\" width=\"27.0\" height=\"30.5\" rx=\"3.6\" fill=\"#4cc9f0\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"250\" cy=\"135.8\" r=\"10.7\" fill=\"#c68642\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M239.2,134.7 a10.7,10.7 0 0 1 21.5,0 z\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"246.9\" cy=\"136.5\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"253.0\" cy=\"136.5\" r=\"1.5\" fill=\"#222\" stroke=\"none\" stroke-width=\"2\"/><path d=\"M246.9,140.0 q3.0,2.5 6.0,0\" fill=\"none\" stroke=\"#2d2d2d\" stroke-width=\"1.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"239.4\" y=\"221\" width=\"21.2\" height=\"22\" rx=\"4\" fill=\"#ffffff\" stroke=\"#888\" stroke-width=\"1\"/><text x=\"250\" y=\"237\" font-family=\"sans-serif\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">?</text><path d=\"M205,142 q8,-12 16,0 q8,-12 16,0 q0,14 -16,22 q-16,-8 -16,-22 z\" fill=\"#ef476f\" stroke=\"none\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>", "alt": "A mother named Mrs. Rao hugs a young boy labelled with a question mark."}
  },
  {
    id: "g4-eng-ch03-b-q17",
    prompt: "Choose the correct word.\n\"Rina has ___ pencils in her box.\"",
    options: [
      { id: "a", text: "ate" },
      { id: "b", text: "eat" },
      { id: "c", text: "eight" },
      { id: "d", text: "eaten" }
    ],
    answerId: "c",
    explanation: "\"Eight\" is the number 8. \"Ate\" is the past of eat. They sound the same.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q18",
    prompt: "Choose the correct word.\n\"Yesterday, the wind ___ my papers away.\"",
    options: [
      { id: "a", text: "blue" },
      { id: "b", text: "blew" },
      { id: "c", text: "blow" },
      { id: "d", text: "bloo" }
    ],
    answerId: "b",
    explanation: "\"Blew\" is the past of blow, and \"yesterday\" tells us it happened in the past. \"Blue\" is a colour.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q19",
    prompt: "Which word means \"without fear\"?",
    options: [
      { id: "a", text: "fearless" },
      { id: "b", text: "fearful" },
      { id: "c", text: "unfear" },
      { id: "d", text: "refear" }
    ],
    answerId: "a",
    explanation: "\"-less\" means without, so fearless means without fear. Fearful means full of fear.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q20",
    prompt: "What is the opposite of \"lock\"?",
    options: [
      { id: "a", text: "relock" },
      { id: "b", text: "dislock" },
      { id: "c", text: "lockful" },
      { id: "d", text: "unlock" }
    ],
    answerId: "d",
    explanation: "Adding \"un-\" can make the opposite of an action: lock and unlock, tie and untie.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q21",
    prompt: "Look at the picture word sum. Which compound word does it make?",
    options: [
      { id: "a", text: "toothpaste" },
      { id: "b", text: "hairbrush" },
      { id: "c", text: "teeth" },
      { id: "d", text: "toothbrush" }
    ],
    answerId: "d",
    explanation: "A compound word joins two whole words: tooth + brush = toothbrush.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Picture word sum</title><desc>A picture of a tooth plus a picture of a brush equals a question mark.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><text x=\"200\" y=\"40\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#555\">Picture word sum</text><rect x=\"20\" y=\"70\" width=\"110\" height=\"120\" rx=\"12\" fill=\"#e0fbfc\" stroke=\"#5e9ea0\" stroke-width=\"2\"/><path d=\"M50,95 q25,-12 50,0 q8,30 -6,70 q-6,10 -10,-20 q-4,-14 -8,0 q-4,30 -12,20 q-14,-40 -14,-70 z\" fill=\"#ffffff\" stroke=\"#555\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"155\" y=\"140\" font-family=\"sans-serif\" font-size=\"36\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">+</text><rect x=\"180\" y=\"70\" width=\"110\" height=\"120\" rx=\"12\" fill=\"#fff1e6\" stroke=\"#e29578\" stroke-width=\"2\"/><rect x=\"195\" y=\"125\" width=\"80\" height=\"10\" rx=\"4\" fill=\"#e63946\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"245\" y=\"108\" width=\"30\" height=\"17\" rx=\"3\" fill=\"#ffffff\" stroke=\"#555\" stroke-width=\"1\"/><line x1=\"248\" y1=\"108\" x2=\"248\" y2=\"98\" stroke=\"#4cc9f0\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"254\" y1=\"108\" x2=\"254\" y2=\"98\" stroke=\"#4cc9f0\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"108\" x2=\"260\" y2=\"98\" stroke=\"#4cc9f0\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"266\" y1=\"108\" x2=\"266\" y2=\"98\" stroke=\"#4cc9f0\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"272\" y1=\"108\" x2=\"272\" y2=\"98\" stroke=\"#4cc9f0\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"315\" y=\"140\" font-family=\"sans-serif\" font-size=\"36\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">=</text><text x=\"360\" y=\"145\" font-family=\"sans-serif\" font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#e63946\">?</text><text x=\"75\" y=\"215\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">tooth</text><text x=\"235\" y=\"215\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">brush</text></svg>", "alt": "A picture of a tooth, a plus sign, a picture of a brush, an equals sign and a question mark."}
  },
  {
    id: "g4-eng-ch03-b-q22",
    prompt: "Look at Mum's note. Which line should end with a question mark (?)?",
    options: [
      { id: "a", text: "\"I have gone to the market\"" },
      { id: "b", text: "\"Back by 6\"" },
      { id: "c", text: "\"Have you fed the cat\"" },
      { id: "d", text: "\"Riya,\"" }
    ],
    answerId: "c",
    explanation: "\"Have you fed the cat\" asks Riya something, so it needs a question mark. The other lines tell her something or greet her.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>A note from Mum</title><desc>A yellow sticky note with five short lines of handwriting from Mum to Riya.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><rect x=\"80\" y=\"10\" width=\"240\" height=\"240\" rx=\"6\" fill=\"#fff3b0\" stroke=\"#e9c46a\" stroke-width=\"2\"/><rect x=\"170\" y=\"4\" width=\"60\" height=\"16\" rx=\"2\" fill=\"#bde0fe\" stroke=\"none\" stroke-width=\"2\"/><text x=\"100\" y=\"55\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1d3557\">Riya,</text><text x=\"100\" y=\"97\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1d3557\">I have gone to the market</text><text x=\"100\" y=\"139\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1d3557\">Have you fed the cat</text><text x=\"100\" y=\"181\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1d3557\">Back by 6</text><text x=\"100\" y=\"223\" font-family=\"sans-serif\" font-size=\"17\" text-anchor=\"start\" font-weight=\"normal\" fill=\"#1d3557\">Mum</text></svg>", "alt": "A yellow sticky note from Mum to Riya with five short lines."}
  },
  {
    id: "g4-eng-ch03-b-q23",
    prompt: "The toy belongs to the baby. Which is written correctly?",
    options: [
      { id: "a", text: "the babys toy" },
      { id: "b", text: "the baby's toy" },
      { id: "c", text: "the babies toy" },
      { id: "d", text: "the baby toy's" }
    ],
    answerId: "b",
    explanation: "To show that something belongs to one person, add an apostrophe + s: the baby's toy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch03-b-q24",
    prompt: "Look at the word tiles. Put them in the correct order to make a sentence.",
    options: [
      { id: "a", text: "A bird sat on the tree." },
      { id: "b", text: "Sat a bird the on tree." },
      { id: "c", text: "On bird a sat the tree." },
      { id: "d", text: "Tree the on sat bird a." }
    ],
    answerId: "a",
    explanation: "Start with who (a bird), then what it did (sat), then where (on the tree). The first word gets a capital letter.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 260\" width=\"400\" height=\"260\" role=\"img\"><title>Word tiles</title><desc>Six mixed-up word tiles to be put in order to make a sentence.</desc><rect x=\"0\" y=\"0\" width=\"400\" height=\"260\" rx=\"0\" fill=\"#fffaf0\" stroke=\"none\" stroke-width=\"2\"/><text x=\"200\" y=\"40\" font-family=\"sans-serif\" font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#555\">Word tiles</text><g transform=\"rotate(-4 61.0 108)\"><rect x=\"20\" y=\"80\" width=\"82\" height=\"56\" rx=\"10\" fill=\"#ffadad\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"61.0\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">tree</text></g><g transform=\"rotate(3 150.5 108)\"><rect x=\"116\" y=\"80\" width=\"69\" height=\"56\" rx=\"10\" fill=\"#ffd6a5\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"150.5\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">sat</text></g><g transform=\"rotate(-2 229.0 108)\"><rect x=\"199\" y=\"80\" width=\"60\" height=\"56\" rx=\"10\" fill=\"#fdffb6\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"229.0\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">a</text></g><g transform=\"rotate(5 307.5 108)\"><rect x=\"273\" y=\"80\" width=\"69\" height=\"56\" rx=\"10\" fill=\"#caffbf\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"307.5\" y=\"116\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">the</text></g><g transform=\"rotate(-3 61.0 188)\"><rect x=\"20\" y=\"160\" width=\"82\" height=\"56\" rx=\"10\" fill=\"#9bf6ff\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"61.0\" y=\"196\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">bird</text></g><g transform=\"rotate(2 146.0 188)\"><rect x=\"116\" y=\"160\" width=\"60\" height=\"56\" rx=\"10\" fill=\"#a0c4ff\" stroke=\"#555\" stroke-width=\"2\"/><text x=\"146.0\" y=\"196\" font-family=\"sans-serif\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#2d2d2d\">on</text></g></svg>", "alt": "Six mixed-up word tiles in different colours."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf3b",
    title: "Hello, word gardener!",
    body: ["Today we grow wonderful words.", "Opposites, look-alikes, rhymes and word parts!", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Hello, word gardener! Today we're going to grow some wonderful words.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Grow your words",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: opposites, same meaning, rhymes, homophones and compound words.",
    cards: [
      { label: "Opposites", reveal: "hot \u2194 cold", emoji: "\ud83d\udd04" },
      { label: "Same meaning", reveal: "big \u2248 large", emoji: "\ud83d\udc6f" },
      { label: "Rhymes", reveal: "cat, hat, mat \u2014 same end sound", emoji: "\ud83c\udfb5" },
      { label: "Homophones", reveal: "sun (sky) \u00b7 son (boy in a family)", emoji: "\ud83d\udc42" },
      { label: "Compound words", reveal: "rain + bow = rainbow", emoji: "\ud83c\udf08" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Break the word",
    visual: "sentence",
    speak: "The puppy was fearless. It ran straight into the big puddle! Fearless is fear plus less. Less means without. So fearless means without fear.",
    steps: ["\u201cThe puppy was fearless. It ran straight into the big puddle!\u201d", "fearless = fear + less (less = without)", "So fearless means without fear", "Clue: the puppy ran right in \u2014 not scared at all!"],
    punchline: "un = not \u00b7 ful = full of \u00b7 less = without",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What does \u201cunhappy\u201d mean?",
    options: [
      { id: "a", text: "Very happy" },
      { id: "b", text: "Not happy" },
      { id: "c", text: "Happy again" },
      { id: "d", text: "Full of happiness" }
    ],
    answerId: "b",
    why: "\u201cUn\u201d means not, so unhappy means not happy.",
    visual: "sentence",
    speak: "What does \u201cunhappy\u201d mean?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Word garden blooming!",
    bullets: ["Opposites, look-alikes & rhymes", "Word parts change meaning", "Not sure? Say both answers out loud", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Word garden blooming! You are ready for the practice sets.",
  },
];

export const g4EnglishWords: ChapterDef = {
  id: "word-garden",
  title: "Word Garden",
  emoji: "\ud83c\udf3b",
  blurb: "Opposites, rhymes, homophones & word parts",
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
  paperTopics: ["vocabulary", "synonyms", "antonyms"],
};

export const g4EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
