/**
 * Grade 6 English — item-specific hint fixes (ts-ready overlay).
 * Source: app repo commit 8bfc38d (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 56 | hints: 110
 * By category (primary): generic replaced 48 · answer-revealing fixed 8 · shared-hint split 0
 * Each entry is [hint1 (gentle nudge), hint2 (stronger nudge)]. Neither gives the answer.
 * Merge: these must WIN over G6_ENGLISH_HINTS and over authored question.hints (fix layer in lib/prep/hints/fixes; see README-2026-10-19.md).
 */
import type { HintOverlay } from "../types";

export const G6_ENGLISH_HINT_FIXES: Record<string, HintOverlay> = {
  // g6-english-comprehension — Reading Comprehension
  "g6-eng-comp-a-q01": ["Read the opening sentence about Kabir and Meera.", "Look for the place Kabir and Meera visit \"every Sunday\"."],
  "g6-eng-comp-a-q08": ["Find the sentence that describes how Uncle Raju works.", "Look at what he does with the tomatoes, and whether he hurries."],
  "g6-eng-comp-a-q11": ["Find the sentence where Amma pays Uncle Raju.", "Look for the ₹ amount just before \"and thanked him\"."],
  "g6-eng-comp-a-q12": ["Read the closing sentence of Passage P2, on the walk home.", "Find what Amma says about honest traders."],
  "g6-eng-comp-a-q18": ["Read the last sentence of Passage P3, about the annual fair.", "Everyone clapped when Mr Das decided about the two stalls — what did he say?"],
  "g6-eng-comp-a-q24": ["Read the final sentence, about Wednesday.", "On Wednesday the sun returned — what did the team practise until dusk?"],
  "g6-eng-comp-b-q06": ["Three details really appear in the library passage; one is never mentioned.", "Check what Kabir actually chooses at the library — magazines, or something else?"],
  "g6-eng-comp-b-q07": ["Read the first sentence of Passage P2 for how often Amma visits.", "Look at the time phrase right after \"from the same stall\"."],
  "g6-eng-comp-b-q08": ["Find the sentence where Amma asks Uncle Raju for her order.", "She asked for two things; coriander is one of them."],
  "g6-eng-comp-b-q09": ["Uncle Raju smiled while telling Amma the coriander was fresh.", "What does a smile usually show about how a seller treats a customer?"],
  "g6-eng-comp-b-q12": ["The closing message is in Amma's words to her son.", "She says honest traders make shopping a pleasure — what is she praising?"],
  "g6-eng-comp-b-q13": ["Find the sentence about recycling paper in Passage P3.", "Two students speak in that sentence; check who spoke first, before \"Rohan added\"."],
  "g6-eng-comp-b-q15": ["Find how Mr Das is introduced in Passage P3.", "Look at the words just before \"Mr Das\": \"Their ___\"."],
  "g6-eng-comp-b-q16": ["Read the last sentence, where Mr Das approves sharing a corner.", "Find the word that shows how the club reacted to sharing one corner."],
  "g6-eng-comp-b-q21": ["Find who says \"patience is part of becoming a better player\".", "Priya says it to her friend — is it a fact, a rule, or her own view?"],
  "g6-eng-comp-b-q23": ["Practice was cut short, but Priya mended her bat grip.", "What does she do with the lost time, and what does she say about patience?"],
  // g6-english-grammar — Grammar
  "g6-eng-gram-a-q03": ["A noun names a person, place or thing in the sentence about the shelf.", "\"opened\" is the action and \"new\" describes; which word names the person who opened it?"],
  "g6-eng-gram-a-q04": ["An adjective tells what kind of story Meera read.", "Meera and story are nouns and read is a verb; which word describes the story?"],
  "g6-eng-gram-a-q05": ["Say \"apple\" aloud and listen to its first sound.", "The article depends on the sound that follows; a vowel sound needs the form ending in n."],
  "g6-eng-gram-a-q06": ["\"Himalayas\" names one particular mountain range, written as a plural.", "Names of mountain ranges, rivers and oceans take a definite article — not a or an."],
  "g6-eng-gram-a-q08": ["The pronoun is part of the subject, with Ravi, before \"are partners\".", "Drop \"Ravi and\": which form would start the sentence on its own — subject or object?"],
  "g6-eng-gram-a-q11": ["An adverb tells how, when or where an action happens.", "Ask how he spoke to the vendor — which word answers that?"],
  "g6-eng-gram-a-q12": ["A book lying flat touches a table's top surface.", "\"in\" means inside and \"at\" means a point; which preposition shows touching a surface from above?"],
  "g6-eng-gram-a-q17": ["The second part tells why I stayed home.", "Which conjunction gives a reason for staying home?"],
  "g6-eng-gram-a-q18": ["The sentence is inverted: the verb \"ran\" comes before the doer.", "Ask who ran across the field — that is the subject, not \"the field\"."],
  "g6-eng-gram-a-q19": ["\"Bread and butter\" here means one dish, eaten together.", "Bread and butter make one single dish, so the verb must be singular."],
  "g6-eng-gram-a-q20": ["A collective noun names a group acting as one unit.", "A player is one person; which word names many players together?"],
  "g6-eng-gram-a-q22": ["An interjection is a word that bursts out with feeling.", "The rest describes the catch; which word is just a cry of surprise?"],
  "g6-eng-gram-b-q03": ["A verb shows what the mangroves do for the coast.", "\"mangroves\" and \"coast\" are nouns; which word is the action?"],
  "g6-eng-gram-b-q05": ["The past participle is the third form, used after has/have.", "Say \"I have ___ my lunch\"; \"ate\" is the simple past, not the third form."],
  "g6-eng-gram-b-q07": ["The present continuous shows an action going on now.", "Look for am/is/are followed by a verb ending in -ing."],
  "g6-eng-gram-b-q08": ["Count the people sharing the sweets: two sisters.", "\"among\" is for three or more; choose the preposition used for exactly two."],
  "g6-eng-gram-b-q09": ["A conjunction joins parts of a sentence.", "\"Hurry up\" and \"we will miss the bus\" are linked by one word showing a warning choice."],
  "g6-eng-gram-b-q10": ["\"than\" shows two things compared: iron and wood.", "Use the comparative form; never add \"more\" to a word already ending in -er."],
  "g6-eng-gram-b-q12": ["An interrogative sentence asks a question.", "Check the end mark of each sentence about the bat or the door."],
  "g6-eng-gram-b-q15": ["\"milk\" is uncountable — you cannot count one milk, two milks.", "Milk is uncountable; which determiner goes with uncountable amounts?"],
  "g6-eng-gram-b-q17": ["The blank refers back to \"The girl\" and is the subject of \"planted\".", "Choose the relative pronoun used for people as subjects, not for things or ownership."],
  "g6-eng-gram-b-q20": ["An abstract noun names a quality you cannot touch.", "\"heart\" names a body part; which word names a good quality?"],
  "g6-eng-gram-b-q22": ["You need a connector that shows contrast, like \"but\".", "Which connector shows an opposite idea, like but?"],
  // g6-english-vocabulary — Vocabulary
  "g6-eng-vocab-a-q06": ["The person in the market who sells goods has a special name.", "Recall Uncle Raju at the vegetable stall, a person who sells goods."],
  "g6-eng-vocab-a-q07": ["Split \"disagree\" into dis- + agree.", "Compare dislike and disobey; what does dis- do to the word after it?"],
  "g6-eng-vocab-a-q08": ["\"useful\" is \"use\" + the suffix -ful.", "Compare useful with useless — which suffix means the opposite of -less?"],
  "g6-eng-vocab-a-q09": ["A \"glance\" is how you look at a clock when in a hurry.", "Staring for hours is the opposite; a glance is short and fast."],
  "g6-eng-vocab-a-q12": ["Homophones sound exactly alike but are spelt differently.", "Say sail aloud, then find the word on a shop sign for lower prices."],
  "g6-eng-vocab-a-q13": ["\"commence\" is a formal word used for the start of an exam or ceremony.", "Find the everyday word for the start of something, like commence."],
  "g6-eng-vocab-a-q18": ["\"arrival\" means coming to a place, like a train reaching a station.", "Find the word about going away from a place, the opposite of arrival."],
  "g6-eng-vocab-a-q21": ["The blank names what this story teaches: to be patient.", "Several choices look alike; only one spelling means what a story teaches about being patient."],
  "g6-eng-vocab-b-q05": ["Fresh food was picked recently; it is the opposite of stale."],
  "g6-eng-vocab-b-q07": ["Split \"preview\" into pre- + view.", "Like the prefix in prepay and preheat: when does the action happen?"],
  "g6-eng-vocab-b-q08": ["\"careless\" is care + the suffix -less.", "Compare careful and careless — -ful means full of, so -less means the opposite."],
  "g6-eng-vocab-b-q09": ["\"purchase\" is what Amma does at the vegetable stall when she pays.", "\"sell\" is the shopkeeper's side; borrowing and losing involve no payment."],
  "g6-eng-vocab-b-q11": ["Fertile soil is what farmers hope for.", "\"barren\" soil grows nothing — fertile soil does the opposite."],
  "g6-eng-vocab-b-q12": ["The k in \"knight\" is silent; say it aloud.", "Which word sounds exactly like knight and names the time after evening?"],
  "g6-eng-vocab-b-q17": ["A \"flexible\" ruler or straw can be curved without breaking.", "\"unable to bend\" is the opposite of flexible."],
  "g6-eng-vocab-b-q20": ["\"hit the books\" is an idiom; nobody really hits anything.", "Before exams, Kabir decided to \"hit the books\". What did he do?"],
  "g6-eng-vocab-b-q24": ["Dusk is the dim light after sunset; dawn is at the other end of the day."],
  // Near-duplicate fix (2026-10-19): hints for rewritten questions (see dedupe/english-near-dupes-2026-10-19.md)
  "g6-eng-gram-a-q02": ["\"puppies\" means more than one puppy.", "A plural subject with an -ing verb needs the plural helper, not is or am."],
  "g6-eng-gram-a-q01": ["\"every evening\" shows a habit, so use the simple present.", "\"My grandmother\" is one person; think of the -s ending used with he or she."],
  "g6-eng-vocab-b-q02": ["A shallow pond comes up only to your ankles.", "The opposite of shallow is water far over your head."],
  "g6-eng-vocab-a-q02": ["A guilty person did the wrong thing.", "Find the word for someone who did nothing wrong, the opposite of guilty."],
  "g6-eng-vocab-b-q14": ["The coach praised the team for its hard work.", "Find the word for pointing out faults, the opposite of praise."],
  "g6-eng-vocab-b-q03": ["A silent room has no sound at all.", "Find another word for silent, like a library with no talking."],
  "g6-eng-gram-a-q15": ["The cheetah is compared with every other land animal.", "For a superlative, use the -est form, and never put most before it."],
  "g6-eng-vocab-a-q10": ["A fragile glass vase breaks if you drop it.", "Delicate is a twin of fragile; find the word for something hard to break."],
};
