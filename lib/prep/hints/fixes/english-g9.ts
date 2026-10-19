/**
 * Grade 9 English — item-specific hint fixes (ts-ready overlay).
 * Source: app repo commit 8bfc38d (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 51 | hints: 102
 * By category (primary): generic replaced 25 · answer-revealing fixed 23 · shared-hint split 3
 * Each entry is [hint1 (gentle nudge), hint2 (stronger nudge)]. Neither gives the answer.
 * Merge: these must WIN over G9_ENGLISH_HINTS and over authored question.hints (fix layer in lib/prep/hints/fixes; see README-2026-10-19.md).
 */
import type { HintOverlay } from "../types";

export const G9_ENGLISH_HINT_FIXES: Record<string, HintOverlay> = {
  // g9-english-grammar — Grammar Workshop
  "g9-eng-ch02-a-q04": ["In reported speech after \"He said\", the tense usually moves one step back.", "\"am\" is present; shift it to its past form to match \"said\"."],
  "g9-eng-ch02-a-q05": ["Say \"honest\" aloud — is the h pronounced?", "Choose the article by the first sound you hear, not the first letter you see."],
  "g9-eng-ch02-a-q12": ["\"2019\" is a starting point in time, not a length of time.", "\"for\" goes with periods like five years; use the other word for a fixed starting point."],
  "g9-eng-ch02-a-q13": ["In a reported question, the words go in statement order, without \"do\".", "\"asked\" is past, so shift \"live\" one step back in tense."],
  "g9-eng-ch02-a-q14": ["\"than\" compares two puzzles, so use the comparative form.", "Never use \"more\" with an -er word; for words ending in y, change y to i."],
  "g9-eng-ch02-a-q19": ["\"milk\" is uncountable — you cannot say two milks.", "Milk is uncountable; pick the determiner that goes with an amount, not a number."],
  "g9-eng-ch02-a-q21": ["Two past actions: finishing the novel came before the exam started.", "The earlier past action uses the past perfect: a helper + past participle \"finished\"."],
  "g9-eng-ch02-a-q23": ["\"It's time we ...\" talks about now, but uses a special verb form.", "After \"It's time we\", English uses the simple past form of go, not the base form."],
  "g9-eng-ch02-a-q24": ["\"good ___ mathematics\" is a fixed collocation for being skilled in a subject.", "We say someone is \"good ___ cricket\" or \"good ___ drawing\" — the same preposition fits here."],
  "g9-eng-ch02-b-q04": ["\"five years\" is a length of time, not a starting point.", "\"since\" needs a starting point like 2019; pick the preposition used with a length of time."],
  "g9-eng-ch02-b-q07": ["\"Hardly had we entered\" begins a fixed pair, like \"No sooner ... than\".", "\"than\" belongs with No sooner; Hardly links to a time word."],
  "g9-eng-ch02-b-q08": ["Adjective order is: opinion, size, age, shape, colour, origin, material, then noun.", "Put \"new\" (age) first, the colour next, and \"leather\" (material) just before \"bag\"."],
  "g9-eng-ch02-b-q09": ["\"Prefer\" takes its own fixed preposition when it compares two things.", "Say \"I prefer walking ___ driving\" and listen for the small preposition that fits."],
  "g9-eng-ch02-b-q14": ["\"insisted\" takes a fixed preposition before the -ing form \"paying\".", "We say \"insist ___ going\"; \"to\" would need a base verb, not \"paying\"."],
  "g9-eng-ch02-b-q17": ["The present perfect uses has/have + past participle.", "\"wrote\" is simple past and \"had written\" is past perfect."],
  "g9-eng-ch02-b-q19": ["\"No sooner had she left\" begins a fixed correlative pair.", "No sooner pairs with the comparison word; \"when\" goes with Hardly."],
  "g9-eng-ch02-b-q20": ["The blank shows the house belongs to the man.", "Which relative pronoun shows possession, like \"his house\"?"],
  "g9-eng-ch02-b-q22": ["\"over ___\" points to a place.", "\"their\" shows ownership and \"they're\" means they are; pick the place word."],
  // g9-english-literature — Literature MCQ
  "g9-eng-ch01-a-q05": ["Read the last sentence about \"the right reader\".", "Riya decides the right reader \"might be her\" — does she walk away or take part?"],
  "g9-eng-ch01-a-q09": ["Read the first sentence about the mountain path.", "Look at what the path did \"until Arjun had to turn sideways\"."],
  "g9-eng-ch01-a-q10": ["The comparison uses the word \"like\": valley like a map.", "A comparison with like or as has a different name from one without them."],
  "g9-eng-ch01-a-q16": ["Arjun laughs and \"took the next step\" despite the narrow path and wind.", "Does the ending show him stopping, or carrying on through the hard climb?"],
  "g9-eng-ch01-a-q19": ["The board's edges are curling on judging day.", "Physical details can mirror a character's feelings — how might Mira feel before judges come?"],
  "g9-eng-ch01-a-q22": ["Mira measured plant growth for six weeks.", "What trait does long, careful, regular measuring show?"],
  "g9-eng-ch01-b-q06": ["The journal holds her grandmother's recipes and \"a letter never sent\".", "Choose the inference the text supports, not invented events like stealing or closing."],
  "g9-eng-ch01-b-q08": ["Arjun checks his water bottle — half full — on a hard climb with a noon dare.", "Does half full prove failure, or quietly show that supplies are limited?"],
  "g9-eng-ch01-b-q14": ["The curling board edges are not perfectly polished.", "A small flaw like curling edges makes a character seem real — how?"],
  "g9-eng-ch01-b-q21": ["The board \"leaned against the wall\" and the judges would come \"today\".", "Is the board up in front of judges, or set aside against a wall for later?"],
  "g9-eng-ch01-b-q22": ["Three claims appear in the passage: the journal, the librarian, the smell of paper.", "Check the passage for any email from the grandmother."],
  "g9-eng-ch01-b-q23": ["A half-full water bottle is a simple, real object on the climb.", "Is it heavy symbolism or exaggeration, or just a real object that helps us picture the climb?"],
  "g9-eng-ch01-b-q24": ["The author lingers on the marigold's new petal and six weeks of measuring.", "Classmates rush past; what does Mira's slow, careful work invite us to value?"],
  // g9-english-words — Writing & Vocabulary
  "g9-eng-ch03-a-q03": ["The blank is a person: the head of the school who spoke to parents.", "A \"principle\" is a rule or belief, not a person."],
  "g9-eng-ch03-a-q06": ["After \"will\" you need a verb meaning to change or influence the picnic plans.", "\"effect\" is usually a noun (a result); the verb form starts with a different letter."],
  "g9-eng-ch03-a-q07": ["A \"diligent\" student finishes every task carefully and on time.", "\"lazy\" is the opposite of diligent; which word describes steady effort?"],
  "g9-eng-ch03-a-q09": ["\"call off\" is a phrasal verb often used for matches or events.", "If rain makes a school \"call off\" sports day, does sports day still happen?"],
  "g9-eng-ch03-a-q10": ["A formal heading should be plain, clear and serious.", "\"hey guys\", \"yo\" and \"sup\" are slang; a formal heading is one word in capitals naming the format."],
  "g9-eng-ch03-a-q11": ["The root \"aud-\" relates to hearing, as in audience and audio.", "Each choice is built on a root for a sense; which root means heard?"],
  "g9-eng-ch03-a-q12": ["The bus was not moving in traffic.", "\"stationery\" with an e means pens and paper — remember e for envelopes."],
  "g9-eng-ch03-a-q16": ["The speech \"bored the audience\", so it must be dull and long.", "Find the precise word for a dull, dragging speech."],
  "g9-eng-ch03-a-q18": ["\"look into\" is a phrasal verb used for police or officials checking a problem.", "If the principal will \"look into\" a complaint, will she study it carefully or ignore it?"],
  "g9-eng-ch03-a-q20": ["The sentence leaves Rohan out of the group that was present.", "\"accept\" means to receive; choose the word meaning \"but not\"."],
  "g9-eng-ch03-a-q21": ["A \"courageous\" person faces danger without running away.", "\"timid\" is the opposite of courageous."],
  "g9-eng-ch03-a-q23": ["The blank names the top point of the mountain.", "Several spellings sound alike; choose the one for a mountain's pointed top."],
  "g9-eng-ch03-b-q04": ["The scarf goes perfectly with the dress — it completes it.", "\"compliment\" with an i is praise; the spelling with e is linked to \"complete\"."],
  "g9-eng-ch03-b-q06": ["\"Legible\" means readable; add a negative prefix.", "Before l, the prefix \"in-\" becomes \"il-\"; \"illegal\" is about laws, not reading."],
  "g9-eng-ch03-b-q08": ["Someone \"reluctant\" agrees slowly, without wanting to.", "Which choice means not willing, like reluctant?"],
  "g9-eng-ch03-b-q10": ["\"legal ___\" here means advice from a lawyer.", "A \"council\" is a group of people who meet; the other spelling means advice."],
  "g9-eng-ch03-b-q15": ["A good witness gives a clear, detailed account of the event.", "Find the precise word for an account so clear you can picture it."],
  "g9-eng-ch03-b-q18": ["A formal notice must tell readers what to do, when and where.", "Emojis, poems and slang are not formal; think of what a reader needs to act."],
  "g9-eng-ch03-b-q19": ["\"diminish\" describes a sound slowly fading away.", "\"increase\" is the opposite of diminish."],
  "g9-eng-ch03-b-q21": ["Their ideas fit together well, each making the other complete.", "\"compliment\" with an i means praise; the e spelling links to \"complete\"."],
  // Pass 4 (2026-10-19): hint-rules-out / hint-partial-quote rewrites for items not already in this file
  "g9-eng-ch03-b-q12": ["Each choice names a period of time; count the years in each."],
};
