/**
 * Grade 3 English — item-specific hint fixes (ts-ready overlay).
 * Source: app repo commit 8bfc38d (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 55 | hints: 110
 * By category (primary): generic replaced 29 · answer-revealing fixed 22 · shared-hint split 4
 * Each entry is [hint1 (gentle nudge), hint2 (stronger nudge)]. Neither gives the answer.
 * Merge: these must WIN over G3_ENGLISH_HINTS and over authored question.hints (fix layer in lib/prep/hints/fixes; see README-2026-10-19.md).
 */
import type { HintOverlay } from "../types";

export const G3_ENGLISH_HINT_FIXES: Record<string, HintOverlay> = {
  // g3-english-antonyms — Antonyms
  "g3-eng-antonyms-a-q02": ["A heavy school bag is hard to lift.", "The opposite of heavy is something as easy to lift as a feather."],
  "g3-eng-antonyms-a-q03": ["An asleep baby has closed eyes.", "Think of the baby in the morning with eyes wide open."],
  "g3-eng-antonyms-a-q04": ["\"up\" points toward the sky.", "\"Up\" points to the sky; which word points to the floor?"],
  "g3-eng-antonyms-a-q05": ["Messy means toys and books are everywhere.", "The opposite of messy is a room after everything is put away."],
  "g3-eng-antonyms-a-q08": ["A shopkeeper sells toys to children.", "If you sell your old bike, what does the new owner do?"],
  "g3-eng-antonyms-a-q10": ["Clean clothes look washed.", "The opposite of clean is clothes covered in mud."],
  "g3-eng-antonyms-a-q13": ["Amma was kind: she helped the lost puppy.", "The opposite of kind is someone who shouts at the lost puppy."],
  "g3-eng-antonyms-a-q18": ["Wet things have water on them.", "The opposite of wet has no water on it at all."],
  "g3-eng-antonyms-a-q21": ["Meera's correct sum has no mistakes.", "The opposite of correct is a sum with a mistake."],
  "g3-eng-antonyms-a-q23": ["Aarav pays ₹5 and takes the pencil home.", "What does the shopkeeper do with the pencil?"],
  "g3-eng-antonyms-b-q01": ["An old school bag has been used a long time.", "The opposite of old is a school bag bought today."],
  "g3-eng-antonyms-b-q03": ["\"above\" means higher than something.", "\"Above\" points up; which word points the other way?"],
  "g3-eng-antonyms-b-q07": ["A sharp pencil tip writes a thin line.", "The opposite of a sharp tip is a worn-down, rounded tip."],
  "g3-eng-antonyms-b-q09": ["A hard maths sum takes a long time to solve.", "The opposite of a hard sum is one you solve in seconds."],
  "g3-eng-antonyms-b-q10": ["\"give\" means you hand the eraser to Diya.", "The opposite of give is getting the eraser back from Diya."],
  "g3-eng-antonyms-b-q11": ["\"push\" moves something away from you.", "The opposite of push moves a door toward you."],
  "g3-eng-antonyms-b-q13": ["\"arrive\" means you get to a place.", "The opposite of arrive is what you do when you say goodbye."],
  "g3-eng-antonyms-b-q18": ["The bright classroom has lots of light.", "The opposite of bright is a classroom with the lights off."],
  "g3-eng-antonyms-b-q19": ["\"first\" means at the very beginning of a line.", "\"First\" is the start of a line; who stands at the very end?"],
  "g3-eng-antonyms-b-q21": ["\"young\" is about age, like a baby.", "The opposite of young describes a grandparent."],
  "g3-eng-antonyms-b-q24": ["Sana felt proud: a good feeling after her neat notebook.", "The opposite of proud is how you feel after a mistake."],
  // g3-english-grammar — Grammar Basics
  "g3-eng-grammar-a-q01": ["A noun names a person, place or thing.", "Paints is an action and beautiful describes. Which word names a person?"],
  "g3-eng-grammar-a-q02": ["A noun names a person, place or thing.", "Ask yourself: what did Riya get ready for school?"],
  "g3-eng-grammar-a-q05": ["A verb is something you can do with your body.", "A verb can be something your hands do after a show."],
  "g3-eng-grammar-a-q06": ["The blank needs an action word for the birds.", "The blank needs what birds do in the sky."],
  "g3-eng-grammar-a-q08": ["\"My friends\" means more than one friend.", "Try each word in the blank and say the sentence aloud. Which one sounds right for a group of friends?"],
  "g3-eng-grammar-a-q09": ["An adjective is a describing word that tells more about a noun.", "An adjective tells what a cat looks or feels like."],
  "g3-eng-grammar-a-q10": ["A describing word tells you more about a naming word.", "Ask yourself: what kind of tree did Meena see?"],
  "g3-eng-grammar-a-q13": ["Say \"apple\" aloud and listen to its first sound.", "Before a vowel sound, use the article that ends in n."],
  "g3-eng-grammar-a-q14": ["Say \"book\" aloud. Does it start with a vowel sound?", "\"Them\" is not an article; book starts with a consonant sound."],
  "g3-eng-grammar-a-q16": ["Compare \"a\" or \"an\" (any one thing) with \"the\" in a story.", "\"the\" points to one thing that both of us already know about."],
  "g3-eng-grammar-a-q22": ["\"What a lovely day\" shows a strong happy feeling.", "It is not asking anything; which mark shows surprise or joy?"],
  "g3-eng-grammar-b-q01": ["A noun can follow \"the\", like the name of a place.", "A noun can be a place where flowers grow."],
  "g3-eng-grammar-b-q04": ["Words ending in x add two letters for the plural.", "Think of fox and foxes; do the same with box."],
  "g3-eng-grammar-b-q05": ["A verb fits after \"I can ___\".", "A verb is something you do with a pen."],
  "g3-eng-grammar-b-q06": ["The blank needs an action word for the children.", "The blank needs what children do with a song."],
  "g3-eng-grammar-b-q07": ["Ravi is one boy, and this is his daily habit.", "With one person, the verb needs an ending, like \"she sings\"."],
  "g3-eng-grammar-b-q08": ["The sentence starts with \"I\".", "\"I\" has its own helper word; \"I is\" and \"I are\" are wrong."],
  "g3-eng-grammar-b-q09": ["An adjective describes a noun, like a dog.", "An adjective tells how a dog sounds or looks."],
  "g3-eng-grammar-b-q10": ["A describing word tells you more about a naming word.", "Ask yourself: what was the ladoo like?"],
  "g3-eng-grammar-b-q13": ["Say \"eagle\" aloud and listen to its first sound.", "One eagle flew; pick the article used before a vowel sound."],
  "g3-eng-grammar-b-q14": ["Say \"dog\" aloud. Does it start with a vowel sound?", "\"Them\" is not an article; dog starts with a consonant sound."],
  "g3-eng-grammar-b-q15": ["Say \"orange\" aloud and listen to its first sound.", "Use the article for one orange that starts with a vowel sound."],
  "g3-eng-grammar-b-q16": ["There is only one moon in our sky.", "Which little word points to something everyone already knows, because there is only one of it?"],
  "g3-eng-grammar-b-q20": ["\"Look!\" shows something happening right now.", "Use a helper word + a verb ending in -ing for rain now."],
  "g3-eng-grammar-b-q21": ["Riya is asking her friend a question.", "Check both: a capital first letter and an asking mark at the end."],
  "g3-eng-grammar-b-q22": ["\"Stop\" is a strong, sudden command.", "Which end mark shows a shout or urgency, not a question?"],
  "g3-eng-grammar-b-q24": ["This sentence about a test asks something.", "Fix two things: the first letter and the end mark."],
  // g3-english-synonyms — Synonyms
  "g3-eng-synonyms-a-q01": ["When you rush, you move fast because time is short.", "Find another word for rush, like moving fast to catch a bus."],
  "g3-eng-synonyms-a-q02": ["Picture an elephant: it is big.", "Find another size word that also fits an elephant, like big."],
  "g3-eng-synonyms-a-q03": ["Riya's quick homework did not take long.", "Find another word for quick, like a runner who wins the race."],
  "g3-eng-synonyms-a-q14": ["A \"kind\" person helps and shares.", "Find the word for someone who looks after others, like \"kind\"."],
  "g3-eng-synonyms-b-q09": ["A correct sum has no mistakes; it is not false.", "A \"correct\" answer gets a tick; find its twin word."],
  "g3-eng-synonyms-b-q15": ["A \"careful\" person thinks before acting.", "Find the word for someone who watches every step to stay safe."],
  "g3-eng-synonyms-b-q19": ["\"look\" is something you do with your eyes.", "Find the word for using your eyes, like \"look\"."],
  // Pass 4 (2026-10-19): hint-rules-out / hint-partial-quote rewrites for items not already in this file
  "g3-eng-antonyms-a-q01": ["The top of a ladder is the highest step.", "High and up point the same way; think of the lowest step."],
  "g3-eng-grammar-a-q03": ["Proper nouns are special names of people or places.", "A proper noun names one special city, not any city."],
  "g3-eng-grammar-a-q18": ["Every day = present habit.", "\"Every day\" needs the present form that goes with one sun."],
  "g3-eng-grammar-a-q23": ["People's names need capitals.", "Look for the sentence that has a person's special name in it."],
  "g3-eng-grammar-b-q03": ["Proper nouns are special names.", "A proper noun names one special day, not any day."],
  "g3-eng-grammar-b-q11": ["Pick a word that describes the puppy.", "An adjective here tells the size of the puppy."],
  "g3-eng-grammar-b-q17": ["Last week = past time.", "\"Last week\" needs the past form of the verb."],
  "g3-eng-synonyms-a-q04": ["You shut the door when you leave a room.", "Find another word for shut, like what you do to a book."],
  "g3-eng-synonyms-b-q23": ["Thin describes a narrow body.", "Thick is closer to the opposite."],
  // Near-duplicate fix (2026-10-19): hints for rewritten questions (see dedupe/english-near-dupes-2026-10-19.md)
  "g3-eng-grammar-a-q17": ["\"Last night\" tells us when it happened.", "Last night is finished time, so the verb needs its past form."],
  "g3-eng-antonyms-a-q06": ["A drum makes a loud sound.", "Noisy is close to loud; think of a library."],
  "g3-eng-grammar-a-q04": ["Man does not take -s to make more than one.", "\"mans\" is not a word; the vowel in man changes."],
  "g3-eng-synonyms-a-q10": ["You enjoy a game when it makes you happy.", "Find another word for enjoy: how you feel about your favourite food."],
  "g3-eng-antonyms-a-q16": ["You cannot see your lost ball anywhere.", "The opposite of lost is when your ball turns up again."],
  "g3-eng-grammar-a-q19": ["Past tense means the action already happened.", "Put \"Yesterday\" at the start of each sentence. Which one still sounds right?"],
};
