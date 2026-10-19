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
  "g3-eng-antonyms-a-q02": ["Picture an ant next to an elephant. The elephant is big.", "Large, huge and giant mean the same as big."],
  "g3-eng-antonyms-a-q03": ["Hot chai makes you blow on it. What is the opposite of hot?", "Warm, boiling and spicy are all close to hot."],
  "g3-eng-antonyms-a-q04": ["\"up\" points toward the sky.", "Above, high and over all point the same way as up."],
  "g3-eng-antonyms-a-q05": ["A full water bottle is filled to the top.", "Packed and crowded mean almost the same as full."],
  "g3-eng-antonyms-a-q08": ["An open door lets you walk through.", "Wide, clear and free are like open; find a door you cannot pass."],
  "g3-eng-antonyms-a-q10": ["Clean clothes look washed.", "Neat, fresh and shiny all mean nearly the same as clean."],
  "g3-eng-antonyms-a-q13": ["Amma was kind: she helped the lost puppy.", "Caring, gentle and helpful are twins of kind, not opposites."],
  "g3-eng-antonyms-a-q18": ["Wet things have water on them.", "Damp, soaked and muddy all have water; find no water at all."],
  "g3-eng-antonyms-a-q21": ["Meera's correct sum has no mistakes.", "Right, true and exact are twins of correct."],
  "g3-eng-antonyms-a-q23": ["Aarav pays ₹5 and takes the pencil home.", "What does the shopkeeper do with the pencil?"],
  "g3-eng-antonyms-b-q01": ["An old school bag has been used a long time.", "Ancient, used and worn all mean old; find a just-bought bag."],
  "g3-eng-antonyms-b-q03": ["\"above\" means higher than something.", "Over, up and high point the same way as above."],
  "g3-eng-antonyms-b-q07": ["A sharp pencil tip writes a thin line.", "Pointed, fine and keen are like sharp; find a worn-down tip."],
  "g3-eng-antonyms-b-q09": ["A hard maths sum takes a long time to solve.", "Tough, tricky and difficult mean nearly the same as hard."],
  "g3-eng-antonyms-b-q10": ["\"give\" means you hand the eraser to Diya.", "Share, offer and pass are like give; what is the reverse?"],
  "g3-eng-antonyms-b-q11": ["\"push\" moves something away from you.", "Shove, press and nudge are all kinds of push."],
  "g3-eng-antonyms-b-q13": ["\"arrive\" means you get to a place.", "Reach, come and enter are like arrive; what do you do at goodbye?"],
  "g3-eng-antonyms-b-q18": ["The bright classroom has lots of light.", "Shiny, clear and glowing are like bright; think of lights off."],
  "g3-eng-antonyms-b-q19": ["\"first\" means at the very beginning of a line.", "Next and early are not opposites; who stands at the end?"],
  "g3-eng-antonyms-b-q21": ["\"young\" is about age, like a baby.", "Small, new and tiny are not about age."],
  "g3-eng-antonyms-b-q24": ["Sana felt proud: a good feeling after her neat notebook.", "Pleased, glad and happy are good feelings too; find a bad one."],
  // g3-english-grammar — Grammar Basics
  "g3-eng-grammar-a-q01": ["A noun names a person, place or thing you can point to.", "Run is an action and happy is a feeling; which word is a place?"],
  "g3-eng-grammar-a-q02": ["A noun names a person, place or thing in Riya's sentence.", "Packed is what Riya did; which word names what she packed?"],
  "g3-eng-grammar-a-q05": ["A verb is something you can do with your body.", "Table names a thing, and blue and soft describe; which can you do?"],
  "g3-eng-grammar-a-q06": ["The blank needs an action word for the birds.", "Sky and tree name things, and pretty describes; what do birds do?"],
  "g3-eng-grammar-a-q08": ["\"They\" means more than one person playing.", "\"They\" takes the same helper word as we and you."],
  "g3-eng-grammar-a-q09": ["An adjective is a describing word that tells more about a noun.", "Cat is a name and run is an action; which word describes a cat?"],
  "g3-eng-grammar-a-q10": ["Find the word that tells what kind of tree Meena saw.", "Meena and tree are names, and saw is an action."],
  "g3-eng-grammar-a-q13": ["Say \"apple\" aloud and listen to its first sound.", "Before a vowel sound, use the article that ends in n."],
  "g3-eng-grammar-a-q14": ["Say \"book\" aloud. Does it start with a vowel sound?", "\"Them\" is not an article; book starts with a consonant sound."],
  "g3-eng-grammar-a-q16": ["Compare \"a\" or \"an\" (any one thing) with \"the\" in a story.", "\"the\" points to one thing that both of us already know about."],
  "g3-eng-grammar-a-q22": ["\"What a lovely day\" shows a strong happy feeling.", "It is not asking anything; which mark shows surprise or joy?"],
  "g3-eng-grammar-b-q01": ["A noun can follow \"the\", like the name of a place.", "Sing is an action and bright describes; which one is a place?"],
  "g3-eng-grammar-b-q04": ["Words ending in x add two letters for the plural.", "Think of fox and foxes; do the same with box."],
  "g3-eng-grammar-b-q05": ["A verb fits after \"I can ___\".", "Desk is a noun, and happy and green describe; which word is an action?"],
  "g3-eng-grammar-b-q06": ["The blank needs an action word for the children.", "Song and stage are things, and loud describes; what do children do with a song?"],
  "g3-eng-grammar-b-q07": ["\"She\" is one person, going by bus every day.", "With he, she or it, the verb needs an -es ending here."],
  "g3-eng-grammar-b-q08": ["The sentence starts with \"I\".", "\"I\" has its own helper word; \"I is\" and \"I are\" are wrong."],
  "g3-eng-grammar-b-q09": ["An adjective describes a noun, like a dog.", "Dog is a name and bark is an action; which word describes a dog?"],
  "g3-eng-grammar-b-q10": ["Find the word that tells what the ladoo was like.", "We is a pronoun, ate is an action and ladoo is a thing."],
  "g3-eng-grammar-b-q13": ["Say \"umbrella\" aloud and listen to its first sound.", "Before a vowel sound, choose the article ending in n."],
  "g3-eng-grammar-b-q14": ["Say \"dog\" aloud. Does it start with a vowel sound?", "\"Them\" is not an article; dog starts with a consonant sound."],
  "g3-eng-grammar-b-q15": ["Say \"orange\" aloud and listen to its first sound.", "Two and many need more than one orange; pick the article for one."],
  "g3-eng-grammar-b-q16": ["There is only one moon in our sky.", "One moon only — pick a word for one-of-a-kind things, not a or an."],
  "g3-eng-grammar-b-q20": ["\"Look!\" shows something happening right now.", "Use a helper word + a verb ending in -ing for rain now."],
  "g3-eng-grammar-b-q21": ["Riya is asking her friend a question.", "Check both: a capital first letter and an asking mark at the end."],
  "g3-eng-grammar-b-q22": ["\"Stop\" is a strong, sudden command.", "Which end mark shows a shout or urgency, not a question?"],
  "g3-eng-grammar-b-q24": ["This sentence about a test asks something.", "Fix two things: the first letter and the end mark."],
  // g3-english-synonyms — Synonyms
  "g3-eng-synonyms-a-q01": ["\"happy\" is a good feeling after good news.", "Angry is a bad feeling; tiny and slow are not feelings."],
  "g3-eng-synonyms-a-q02": ["Picture an elephant: it is big.", "Small means the opposite size; quiet and soft are not sizes."],
  "g3-eng-synonyms-a-q03": ["Riya's quick homework did not take long.", "Slow and sleepy mean taking a long time."],
  "g3-eng-synonyms-a-q14": ["A kind person helps and shares, not rude or mean.", "Rude, mean and angry are the opposite of kind."],
  "g3-eng-synonyms-b-q09": ["A correct sum has no mistakes; it is not false.", "Wrong and false are opposites of correct; broken is not about answers."],
  "g3-eng-synonyms-b-q15": ["A careful person thinks before acting, not hasty or wild.", "Careless and hasty are opposites of careful."],
  "g3-eng-synonyms-b-q19": ["\"look\" is something you do with your eyes.", "Ignore, hide and cover mean not using your eyes."],
};
