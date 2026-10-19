/**
 * Grade 7 English — item-specific hint fixes (ts-ready overlay).
 * Source: app repo commit 8bfc38d (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 57 | hints: 114
 * By category (primary): generic replaced 42 · answer-revealing fixed 6 · shared-hint split 9
 * Each entry is [hint1 (gentle nudge), hint2 (stronger nudge)]. Neither gives the answer.
 * Merge: these must WIN over G7_ENGLISH_HINTS and over authored question.hints (fix layer in lib/prep/hints/fixes; see README-2026-10-19.md).
 */
import type { HintOverlay } from "../types";

export const G7_ENGLISH_HINT_FIXES: Record<string, HintOverlay> = {
  // g7-english-grammar — Grammar Builders
  "g7-eng-grammar-a-q06": ["Say \"umbrella\" aloud and listen to its first sound.", "The article depends on the sound after it; a vowel sound needs the form ending in n."],
  "g7-eng-grammar-a-q09": ["Kabir's words are a question, so the question mark belongs with his words.", "Put the question mark inside the closing quote, then end \"asked Kabir\" with a full stop."],
  "g7-eng-grammar-a-q20": ["The blank refers to \"The girl\" and is the subject of \"won\".", "\"which\" is for things; choose the relative pronoun for people as subjects."],
  "g7-eng-grammar-a-q23": ["Some nouns ending in -fe change before adding -s, like wife and life.", "An apostrophe shows possession, not plural; change f to v for this plural."],
  "g7-eng-grammar-a-q24": ["Adjectives follow an order: opinion, size, age, shape, colour.", "Which comes first before \"puppy\" — the size word or the colour word?"],
  "g7-eng-grammar-b-q03": ["The blank links erasers to a list: pens, pencils, ...", "Pick the coordinating word that simply adds erasers to the list."],
  "g7-eng-grammar-b-q13": ["\"Himalayas\" names one particular mountain range, written as a plural.", "Names of mountain ranges take a definite article — not a or an."],
  "g7-eng-grammar-b-q23": ["\"Hardly had we entered\" begins a fixed pair, like \"No sooner ... than\".", "\"than\" belongs with No sooner; Hardly links to a time word."],
  // g7-english-reading — Reading Smart
  "g7-eng-reading-a-q01": ["Read the opening sentence: where does Ananya wheel her bicycle?", "Most of the action — planting, watering, sharing chai — happens in one place behind a building."],
  "g7-eng-reading-a-q03": ["Look for the sentence that shows Ananya's own feeling about the city.", "Chai and sparrows are just scene details; check the last sentence about pockets of green."],
  "g7-eng-reading-a-q05": ["Check what they were doing just before sharing chai from the steel flask.", "\"When the sun climbed higher\" marks a pause after planting and watering."],
  "g7-eng-reading-a-q07": ["Find the sentence that says \"The change is often simple\".", "The fix is about where outdoor lamps point, not about switching electricity off."],
  "g7-eng-reading-a-q08": ["Find the sentence beginning \"Within weeks\".", "Look at what residents reported seeing from their rooftops."],
  "g7-eng-reading-a-q09": ["The rooftops once looked \"washed out\" because of too much streetlight.", "Think of how stars look when the sky is lit up — bright and clear, or dim and faint?"],
  "g7-eng-reading-a-q13": ["Captain Leela \"never argued with either group\".", "She just kept the timetable and told stories — does that sound angry, or peaceful?"],
  "g7-eng-reading-a-q14": ["A ferry cannot really talk; the line compares it to a conversation.", "A comparison that says one thing \"is\" another, without like or as, has a special name."],
  "g7-eng-reading-a-q17": ["Find the sentence about mapping the brightest blocks.", "Look at who \"have begun mapping\" in several Indian cities."],
  "g7-eng-reading-a-q18": ["Find the sentence starting \"She simply kept...\".", "Leela doesn't take sides; list the jobs she keeps doing on the ferry."],
  "g7-eng-reading-a-q19": ["The sparrows hop between the bean poles while Ananya and Mr. Fernandes rest.", "Do the sparrows change the story, or just make the garden scene feel alive?"],
  "g7-eng-reading-a-q23": ["The last line is figurative: no real window is opened.", "Light pollution hides the stars — what would \"reopening\" the night sky give back?"],
  "g7-eng-reading-b-q02": ["Track what Mr. Fernandes does and says in the garden.", "He waters one kind of bed and says \"Plants teach patience\"."],
  "g7-eng-reading-b-q03": ["Read the sentence describing the soil as \"dark and soft\".", "Look at what happened the night before, at the end of that sentence."],
  "g7-eng-reading-b-q05": ["Find the second sentence, about streetlights that shine upward.", "Look at the verb used for what upward light does to migrating birds."],
  "g7-eng-reading-b-q06": ["The passage calls the change \"often simple\" and talks about small habits.", "Is the hope based on far-off laws, or on easy steps people can take nearby?"],
  "g7-eng-reading-b-q08": ["Read the first sentence of the ferry passage.", "Look for the time of day the old ferry crossed the river."],
  "g7-eng-reading-b-q10": ["Read the opening sentence about Saturday morning.", "Look at what Ananya \"wheeled\" to the community garden."],
  "g7-eng-reading-b-q11": ["The advice is to tilt or shield outdoor lamps.", "Who owns streetlights and shop lamps in a city and could change them?"],
  "g7-eng-reading-b-q13": ["\"Multiplied\" here is not maths; read it with \"Small habits\".", "What happens when many neighbours each do one small habit?"],
  "g7-eng-reading-b-q17": ["Find the sentence where Captain Leela told stories.", "Look at what the stories were \"about\" at the end of that sentence."],
  "g7-eng-reading-b-q18": ["Put the garden events in order: rain, planting, chai, then...", "Ananya leaving the garden comes last — check what she left with."],
  "g7-eng-reading-b-q19": ["Look for a time phrase showing how fast results came.", "Find the sentence starting \"Within weeks\"."],
  "g7-eng-reading-b-q22": ["Volunteers ask shops to shield lamps together.", "Is this people working together for their area, or ignoring the problem?"],
  "g7-eng-reading-b-q23": ["The passage keeps comparing two ways to cross the river.", "Fishermen prefer one and school children prefer the other."],
  // g7-english-words — Word Power
  "g7-eng-words-a-q03": ["A \"glimpse\" is what you get of a train speeding past.", "A glimpse is about seeing, and it is very brief."],
  "g7-eng-words-a-q06": ["\"ancient\" describes ruins, temples and very early times in history.", "\"brand new\" is the opposite; find the meaning that fits ancient ruins."],
  "g7-eng-words-a-q13": ["Frosted glass and a wooden door are \"opaque\" — light cannot pass.", "\"transparent\" means you can see through; opaque is its opposite."],
  "g7-eng-words-a-q15": ["\"once in a blue moon\" is an idiom about how often something happens.", "A blue moon is uncommon in the sky — so how often does the event happen?"],
  "g7-eng-words-a-q16": ["\"precise\" measurements leave no room for error.", "Vague is its opposite; which word means correct in every detail?"],
  "g7-eng-words-a-q18": ["A \"reluctant\" student goes slowly and drags their feet.", "Eager is the opposite of reluctant; which choice means not wanting to?"],
  "g7-eng-words-a-q19": ["Think of biology and biography — both come from root \"bio\".", "Biology studies living things; root bio links to what all living things have."],
  "g7-eng-words-a-q20": ["The blank names a lesson that a story teaches and that made us smile.", "Which word names what a story teaches and made us smile? Check the spelling."],
  "g7-eng-words-a-q21": ["Homophones sound exactly the same but differ in spelling and meaning.", "Say each pair aloud; \"pierce\" and \"pace\" do not sound the same as their partners."],
  "g7-eng-words-a-q22": ["\"fragile\" is written on parcels holding glass or china.", "Sturdy is the opposite; which word means easily broken?"],
  "g7-eng-words-a-q24": ["The root bene- means good, as in benefit.", "Cruel is the opposite; a benevolent person does good for others."],
  "g7-eng-words-b-q01": ["To \"abandon\" a sinking ship is to get off and go away from it.", "To abandon is to go away and not come back for it."],
  "g7-eng-words-b-q03": ["A diligent student does homework carefully every day.", "A diligent student keeps at a task with real effort."],
  "g7-eng-words-b-q04": ["\"hit the nail on the head\" is an idiom, not about carpentry.", "When a hammer hits a nail exactly, it is perfect — so what does the idiom describe?"],
  "g7-eng-words-b-q07": ["\"Water was scarce\" — think of a drought.", "Flooding is the opposite; scarce means there is not enough."],
  "g7-eng-words-b-q10": ["A \"vast\" desert or ocean stretches as far as the eye can see.", "Find the word for something that stretches very far, like vast."],
  "g7-eng-words-b-q11": ["An ambiguous sentence can be read in two ways.", "\"perfectly clear\" is the opposite of ambiguous."],
  "g7-eng-words-b-q13": ["Think of a thermometer — it shares root \"therm\".", "A thermometer measures temperature; what does root \"therm\" relate to?"],
  "g7-eng-words-b-q15": ["A \"brief\" meeting is over quickly.", "Endless is the opposite of brief; find the word about length of time."],
  "g7-eng-words-b-q16": ["Check spelling: the noun comes from \"scene\".", "The word is uncountable and keeps the \"scene\" spelling plus -ry."],
  "g7-eng-words-b-q18": ["An \"optimistic\" person looks on the bright side.", "\"sure of disaster\" is the opposite attitude of optimistic."],
  "g7-eng-words-b-q19": ["Homophones sound the same: say \"allowed\" out loud.", "Which word sounds exactly like allowed and means \"in a voice others can hear\"?"],
  "g7-eng-words-b-q20": ["\"rapid\" describes a rushing river or a fast train.", "Find another word for rapid, like a fast train."],
  "g7-eng-words-b-q23": ["Water and air are \"essential\" for life.", "\"optional\" is the opposite; essential things cannot be done without."],
};
