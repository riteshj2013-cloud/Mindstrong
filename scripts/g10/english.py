#!/usr/bin/env python3
"""Grade 10 English: Literature, Grammar, Writing."""
from __future__ import annotations
from .emit import q, emit_chapter, lesson_ts

P1 = (
    "The monsoon arrived not as rain at first but as a rumour: a bruise-coloured cloud "
    "leaning on the western hills, a sudden coolness in the school verandah, the smell of wet dust "
    "rising before a single drop fell. Meera stood with her class under the corrugated roof and watched "
    "the playground darken. \"It will pass,\" someone said. It did not pass. When the sky finally opened, "
    "it opened all at once, as if a seam had been ripped. Within minutes the cricket pitch was a shallow lake, "
    "and the peepal tree shook as though laughing. Meera thought of her grandmother's saying — that rain has a "
    "memory older than towns — and for once the proverb did not feel like decoration. It felt like a fact "
    "standing in the mud beside her."
)

P2 = (
    "In the old library, dust floated in the afternoon shafts like slow snow. Arun had come for a project "
    "and stayed for a feeling he could not name. The books did not shout; they waited. He opened a travel diary "
    "from 1924 and found a pressed marigold, brittle as a whisper. On the margin someone had written, in ink now brown, "
    "\"Do not finish this journey alone.\" Arun closed the book gently, as if loudness might wake the past. "
    "Outside, scooters argued with horns. Inside, time had a different speed — the speed of pages turning when no one is late."
)

POEM = (
    "Hold the quiet like a cup;\n"
    "do not spill it on the street.\n"
    "Words are birds: once released\n"
    "they will not return to your hand.\n"
    "Speak, then, as if the air\n"
    "were listening for something true."
)


def with_passage(passage: str, stem: str) -> str:
    return f"{passage}\n\n{stem}"


def literature():
    A, B = [], []
    A += [
        q(with_passage(P1, "What does the opening call the monsoon before the rain arrives?"),
          ["a rumour", "a festival", "a drought", "a timetable"],
          "a", "The first sentence says the monsoon arrived \"as a rumour.\"", "Return to the first sentence for the exact image."),
        q(with_passage(P1, "\"a bruise-coloured cloud\" mainly suggests the cloud is —"),
          ["dark, stormy, and ominous", "bright yellow", "completely white and calm", "invisible"],
          "a", "\"Bruise-coloured\" evokes dark purples/blues of an approaching storm.", "Link the colour word to storm mood."),
        q(with_passage(P1, "Someone says \"It will pass.\" What happens next?"),
          ["The rain does not pass; it arrives fully", "The sun returns immediately", "The class goes home dry", "The cloud vanishes"],
          "a", "The narrator answers: \"It did not pass,\" then the sky opens.", "Contrast the prediction with the next sentences."),
        q(with_passage(P1, "\"as if a seam had been ripped\" is an example of —"),
          ["simile", "metaphor only without as/like", "alliteration", "pun"],
          "a", "\"As if\" introduces a simile comparing the sky opening to a ripped seam.", "As / like / as if → simile."),
        q(with_passage(P1, "The peepal tree \"shook as though laughing\" personifies the tree by —"),
          ["giving it a human action (laughing)", "measuring its height", "calling it a rumour", "turning it to stone"],
          "a", "Laughing is a human behaviour applied to the tree.", "Personification = human traits on non-humans."),
        q(with_passage(P1, "Meera remembers her grandmother's saying about rain. The saying claims rain —"),
          ["has a memory older than towns", "never falls in cities", "is always gentle", "follows exam timetables"],
          "a", "Quoted idea: rain's memory is older than towns.", "Find the proverb in the last third of the passage."),
        q(with_passage(P1, "At the end, the proverb \"did not feel like decoration\" means Meera —"),
          ["felt it was suddenly true and solid", "wanted to paint the verandah", "disliked her grandmother", "ignored the rain"],
          "a", "Decoration = empty ornament; now it feels like a fact in the mud.", "Contrast decoration vs fact."),
        q(with_passage(P1, "The overall tone of the passage is best described as —"),
          ["observant and quietly awed", "angry and sarcastic", "comic slapstick", "coldly scientific only"],
          "a", "Sensory detail and the proverb shift show attentive wonder, not rage or jokes.", "Tone = writer's attitude."),
        q(with_passage(P1, "Which detail is sensory (smell)?"),
          ["the smell of wet dust", "corrugated roof", "cricket pitch", "class under the roof"],
          "a", "\"Smell of wet dust\" is olfactory imagery.", "Match the sense asked."),
        q(with_passage(P1, "The cricket pitch becomes \"a shallow lake\" through —"),
          ["metaphor / figurative description of flooding", "literal construction of a lake overnight by workers", "a mirage in drought", "snow"],
          "a", "Heavy rain floods the pitch so it resembles a lake.", "Figurative compression of the scene."),
        q(with_passage(P2, "Why had Arun originally come to the library?"),
          ["for a project", "to sleep", "to buy books", "to meet a scooter mechanic"],
          "a", "\"Arun had come for a project and stayed for a feeling…\"", "First motive is stated plainly."),
        q(with_passage(P2, "\"dust floated… like slow snow\" uses —"),
          ["simile", "hyperbole only", "oxymoron", "irony"],
          "a", "\"Like\" compares dust to snow.", "Like/as → simile."),
        q(with_passage(P2, "The pressed marigold is described as \"brittle as a whisper.\" This suggests it is —"),
          ["fragile and delicate", "loud and fresh", "wet and heavy", "metallic"],
          "a", "Brittle + whisper = easily broken, barely there.", "Both words signal fragility."),
        q(with_passage(P2, "The marginal note \"Do not finish this journey alone\" most nearly urges —"),
          ["companionship on a journey", "abandoning all travel", "finishing homework alone", "selling the diary"],
          "a", "It advises against solitary completion of a journey.", "Read the note literally, then infer."),
        q(with_passage(P2, "Arun closes the book \"as if loudness might wake the past.\" This implies he —"),
          ["treats the past as something fragile and worthy of quiet", "wants to wake everyone in the library", "hates silence", "tears the page"],
          "a", "Quiet respect for history is the point of the simile.", "Link loudness to disturbing the past."),
        q(with_passage(P2, "Contrast between inside and outside emphasises —"),
          ["different paces of time: calm vs noisy rush", "that libraries are illegal", "that scooters are silent", "that dust is snow"],
          "a", "Scooter horns outside vs \"time had a different speed\" inside.", "Look for the outside/inside split."),
        q(with_passage(P2, "The phrase \"the speed of pages turning when no one is late\" suggests —"),
          ["unhurried reading", "exam panic", "train schedules", "sports timing"],
          "a", "No lateness → leisurely turning of pages.", "Uncouple reading from hurry."),
        q(with_passage(POEM, "\"Hold the quiet like a cup\" compares quiet to a cup to stress that quiet is —"),
          ["something that can be held carefully or spilled", "made of ceramic only", "impossible", "always loud"],
          "a", "The cup image says silence is precious and spillable.", "Simile purpose: handle with care."),
        q(with_passage(POEM, "\"Words are birds\" is a —"),
          ["metaphor", "simile (has like)", "pun", "paradox only"],
          "a", "Direct equation without like/as → metaphor.", "A is B → metaphor."),
        q(with_passage(POEM, "According to the poem, once words are released they —"),
          ["will not return to your hand", "always return politely", "become cups", "turn into streets"],
          "a", "\"They will not return to your hand.\"", "Literal line after the bird metaphor."),
        q(with_passage(POEM, "The speaker advises you to speak as if the air —"),
          ["were listening for something true", "were empty of meaning", "were a mirror", "were angry"],
          "a", "Final lines urge truth-seeking speech.", "Finish the poem's last sentence."),
        q(with_passage(POEM, "The mood of the poem is best called —"),
          ["reflective and cautionary", "hilarious", "vengeful", "indifferent to language"],
          "a", "Care with quiet and words shows reflective caution.", "Mood = atmosphere for the reader."),
        q(with_passage(P1, "Which theme fits Passage P1 best?"),
          ["Nature's force can make old wisdom feel newly true", "Exams matter more than weather", "Towns invent rain", "Clouds fear verandahs"],
          "a", "Storm experience validates the grandmother's proverb.", "Theme must cover the whole arc."),
        q(with_passage(P2, "Which theme fits Passage P2 best?"),
          ["Quiet places can change our sense of time and connection", "Dust is dangerous snow", "Projects should be abandoned", "Horns improve reading"],
          "a", "Library calm vs street noise + the note about not journeying alone.", "Unite setting and the marginal note."),
    ]
    B += [
        q(with_passage(P1, "The verandah detail mainly serves to —"),
          ["ground the scene in a familiar school space before the storm", "prove the school is closed forever", "introduce a cricket coach", "describe desert heat only"],
          "a", "Concrete school setting makes the weather shift vivid.", "Setting work = place the reader."),
        q(with_passage(P1, "\"leaning on the western hills\" makes the cloud seem —"),
          ["heavy and almost physical", "tiny as a speck", "underground", "made of paper"],
          "a", "\"Leaning\" personifies/weightens the cloud on the landscape.", "Visual weight in the verb."),
        q(with_passage(P1, "The narrator's point of view is —"),
          ["third-person, following Meera", "first-person Meera saying \"I\"", "second-person \"you\" throughout", "no clear perspective"],
          "a", "\"Meera stood…\" uses third person focused on her.", "Pronouns reveal POV."),
        q(with_passage(P1, "Which word best describes the rain's arrival?"),
          ["sudden / overwhelming", "gradual drizzle only", "absent", "snow-like"],
          "a", "\"Opened all at once\" and instant flooding.", "Pace of the storm."),
        q(with_passage(P1, "Why might the proverb feel like \"a fact standing in the mud\"?"),
          ["Experience makes the saying concrete and undeniable", "Mud always contains books", "Proverbs are illegal", "Meera wrote the proverb that day"],
          "a", "Lived weather turns abstract wisdom into something present.", "Fact vs decoration contrast."),
        q(with_passage(P2, "The travel diary date \"1924\" mainly emphasises —"),
          ["historical distance / the past's nearness in objects", "Arun's birth year", "a bus number", "exam year"],
          "a", "A century-old diary makes the past tangible.", "Dates signal time depth."),
        q(with_passage(P2, "\"The books did not shout; they waited\" contrasts books with —"),
          ["noisy modern life (and impatient demands)", "other silent books", "the marigold only", "scooters that read"],
          "a", "Books' patience vs shouting world outside.", "Antithesis of shout/wait."),
        q(with_passage(P2, "Arun's closing the book \"gently\" shows —"),
          ["respect and care", "anger", "boredom only", "theft"],
          "a", "Gentle handling matches reverence for the past.", "Character through action."),
        q(with_passage(P2, "The pressed flower is a symbol of —"),
          ["preserved memory", "future traffic", "sports victory", "school fees"],
          "a", "A dried flower keeps a moment inside a book.", "Symbol = concrete stand-in for idea."),
        q(with_passage(P2, "\"Inside, time had a different speed\" is best read as —"),
          ["subjective experience of slower, deeper time", "a broken clock on the wall only", "time travel science", "a bus schedule error"],
          "a", "Psychological time in a calm place.", "Not literal physics."),
        q(with_passage(POEM, "The imperative \"Hold\" and \"Speak\" show the poem is —"),
          ["addressing the reader with advice", "narrating a cricket match", "listing grocery items", "a weather report"],
          "a", "Commands address \"you\" with guidance.", "Imperative mood = advice/order."),
        q(with_passage(POEM, "Spill the quiet \"on the street\" would mean —"),
          ["losing or wasting silence in public noise", "watering plants", "painting roads", "buying cups"],
          "a", "Don't waste carefully held quiet in the noisy street.", "Extend the cup metaphor."),
        q(with_passage(POEM, "Comparing words to birds that won't return warns that speech is —"),
          ["irreversible in effect", "always kind", "never heard", "only for birds"],
          "a", "Once spoken, words can't be taken back fully.", "Consequence of release."),
        q(with_passage(POEM, "\"the air were listening\" uses subjunctive mood to —"),
          ["imagine an ideal attentive audience", "state a scientific fact about nitrogen", "describe rain", "count syllables only"],
          "a", "\"As if the air were…\" imagines attentive air.", "Subjunctive for hypothetical."),
        q(with_passage(POEM, "The poem's central message is closest to —"),
          ["value silence and speak truthfully", "never speak", "shout always", "collect cups"],
          "a", "Care for quiet + speak for what is true.", "Combine opening and closing advice."),
        q(with_passage(P1, "Which quotation best supports the idea that rain transforms the ordinary playground?"),
          ["\"the cricket pitch was a shallow lake\"", "\"It will pass\"", "\"school verandah\"", "\"western hills\""],
          "a", "Pitch → lake shows sudden transformation.", "Evidence must show change."),
        q(with_passage(P2, "Which quotation best shows Arun's changed purpose for staying?"),
          ["\"stayed for a feeling he could not name\"", "\"scooters argued with horns\"", "\"1924\"", "\"pressed marigold\""],
          "a", "He came for a project but stayed for an unnamed feeling.", "Purpose shift is explicit."),
        q(with_passage(P1, "The phrase \"older than towns\" suggests nature's scale is —"),
          ["greater / deeper than human settlements", "exactly one year", "smaller than a verandah", "invented by students"],
          "a", "Rain's \"memory\" outlasts urban history.", "Time scale comparison."),
        q(with_passage(P2, "Irony in the scene includes —"),
          ["a quiet past message amid a noisy present outside", "dust that is literally snow", "a diary that shouts", "Arun finishing the journey alone in the text"],
          "a", "The note urges company while the modern street is frantic and isolating in pace.", "Situational contrast."),
        q(with_passage(POEM, "Line breaks after \"released\" and before \"they will not return\" emphasise —"),
          ["the separation between speaking and consequence", "rhyme scheme AABB", "a shopping list", "metre of a sonnet only"],
          "a", "The break stages cause then effect.", "Enjambment / break for meaning."),
        q(with_passage(P1, "Meera is characterised as someone who —"),
          ["notices sensory detail and connects it to inherited wisdom", "hates proverbs always", "organises cricket", "sleeps through rain"],
          "a", "She watches, remembers the saying, and feels its truth.", "Character from perception + thought."),
        q(with_passage(P2, "The library setting functions as —"),
          ["a refuge where time and attention deepen", "a scooter garage", "a sports stadium", "a closed empty void with no books"],
          "a", "Dust, shafts of light, waiting books = contemplative refuge.", "Setting as mood machine."),
        q(with_passage(POEM, "The cup and birds images together teach —"),
          ["guard silence; release words carefully", "drink quietly then shout", "never use metaphors", "count birds in cups"],
          "a", "Two linked metaphors about care with silence and speech.", "Synthesise both images."),
        q(with_passage(P1 + "\n\n" + P2, "A similarity between the two prose passages is that both —"),
          ["use vivid imagery to show how place shapes feeling", "are about cricket scores", "reject the past", "occur in outer space"],
          "a", "Storm verandah and library both tie setting to inner response.", "Compare settings' emotional work."),
    ]
    lesson = lesson_ts(
        "Literature", "📖", "sentence",
        "Read for theme, tone, imagery, and evidence — not guesses.",
        [("Theme", "Big idea built from the whole text", "💡"),
         ("Tone & mood", "Writer's attitude; reader's feeling", "🎚️"),
         ("Figurative language", "Simile, metaphor, personification", "🪄"),
         ("Evidence", "Point back to a line that proves it", "🔎")],
        {"prompt": "\"The classroom was a beehive.\" This is a —",
         "options": [("a", "metaphor"), ("b", "simile"), ("c", "pun"), ("d", "haiku")],
         "answerId": "a", "why": "It says the classroom was a beehive — direct comparison without like/as."},
        ["Literature ready", "Theme needs the whole arc", "Name the device", "Quote your proof"],
    )
    passages = f"""## Passage bank

### P1
{P1}

### P2
{P2}

### Poem
{POEM}
"""
    outline = """
### step_1: Theme vs plot
- **tts**: Plot is what happens. Theme is what it adds up to mean.
- **check**: Is \"it rained\" a theme? — Answer: No, that's plot/event

### step_2: Devices
- **tts**: Simile uses like/as; metaphor says something is something else.
- **check**: \"Words are birds\" — Answer: Metaphor

### step_3: Evidence
- **tts**: Every claim should point to a line.
- **check**: Best support is a quotation that matches the claim. — Answer: True
"""
    return emit_chapter(
        file="g10-english-literature.ts",
        export="g10EnglishLiterature",
        doc="english-ch01-literature.md",
        meta={"id": "literature", "title": "Literature", "emoji": "📖",
              "blurb": "Theme, tone & figurative language", "topic": "comprehension",
              "paperTopics": ["comprehension", "vocabulary"], "subjectLabel": "English"},
        lesson=lesson, set_a_raw=A, set_b_raw=B, prefix="g10-eng-ch01",
        lesson_outline=outline, passages=passages,
    )


def grammar():
    A, B = [], []
    A += [
        q("Choose the correct form: She ____ to the market yesterday.",
          ["went", "go", "gone", "going"],
          "a", "Past simple for a finished time (yesterday).", "Yesterday → past simple."),
        q("Identify the tense: \"They have finished the project.\"",
          ["present perfect", "past perfect", "simple past", "future continuous"],
          "a", "have/has + past participle = present perfect.", "Have + V3."),
        q("Passive of \"The chef cooks the meal\" is —",
          ["The meal is cooked by the chef", "The meal cooked the chef", "The chef is cooked by the meal", "Meal cooks"],
          "a", "Object becomes subject; be + V3 + by-agent.", "Active object → passive subject."),
        q("Reported speech: She said, \"I am tired.\" → She said that she ____ tired.",
          ["was", "is", "am", "were"],
          "a", "Backshift: present → past after a past reporting verb.", "am/is → was."),
        q("Choose the correct determiner: ____ of the students were present.",
          ["Most", "Much", "Little", "Each one of much"],
          "a", "Most of + plural countable works; much is for uncountables.", "Most of the students."),
        q("Fill in: Neither of the answers ____ correct.",
          ["is", "are", "were being", "have"],
          "a", "Neither of + plural noun often takes singular verb in formal exam English.", "Neither = not one → singular."),
        q("Identify the clause type: \"I know that she is right.\" — \"that she is right\" is a —",
          ["noun clause", "adjective clause only", "adverb clause of time", "main clause only"],
          "a", "It acts as object of know → noun clause.", "That-clause as object."),
        q("Choose the correct modal: You ____ wear a helmet; it's the rule.",
          ["must", "might", "could casually", "would for past habit only"],
          "a", "Must expresses strong obligation/rule.", "Rules → must/have to."),
        q("Error spot: \"He don't like tea.\" Correct form —",
          ["He doesn't like tea", "He don't likes tea", "He not like tea", "He doesn't likes tea"],
          "a", "Third person singular: does not / doesn't + base verb.", "He/she/it → doesn't."),
        q("Relative pronoun: The girl ____ won the prize is my cousin.",
          ["who", "which", "whom for subject", "whose prize only without noun"],
          "a", "Who for people as subject of the relative clause.", "Girl = person subject → who."),
        q("Choose: If it rains, we ____ indoors.",
          ["will stay", "would have stayed", "stayed", "had stayed"],
          "a", "First conditional: If + present, will + base.", "Real future possibility."),
        q("Article: She is ____ honest officer.",
          ["an", "a", "the only possible always", "no article required wrongly as \"a\""],
          "a", "Honest begins with a vowel sound → an.", "Use sound, not spelling alone."),
        q("Transformation: \"As soon as he arrived, the meeting began.\" = —",
          ["No sooner did he arrive than the meeting began", "He arrived later than the meeting", "Hardly he arrive", "As soon he arrives begins"],
          "a", "No sooner + auxiliary + subject… than…", "Inversion after No sooner."),
        q("Preposition: She is good ____ mathematics.",
          ["at", "in on", "over", "by"],
          "a", "Good at a subject/skill.", "Fixed: good at."),
        q("Choose correct voice: \"Someone stole my bicycle.\" →",
          ["My bicycle was stolen", "My bicycle stole someone", "My bicycle is stealing", "Stolen my bicycle someone"],
          "a", "Past simple passive: was/were + V3.", "Agent optional if unknown."),
        q("Concord: The news ____ good today.",
          ["is", "are", "were", "have"],
          "a", "News is singular despite the -s.", "Uncountable/singular news."),
        q("Gerund: She enjoys ____ novels.",
          ["reading", "to reading", "read", "reads"],
          "a", "Enjoy takes a gerund (V-ing).", "Enjoy + V-ing."),
        q("Choose: By next year, they ____ the bridge.",
          ["will have completed", "will completing", "completed", "had complete"],
          "a", "Future perfect for completion before a future time.", "By + future time → will have + V3."),
        q("Question tag: You are coming, ____?",
          ["aren't you", "are you not coming tag wrong", "isn't you", "don't you"],
          "a", "Positive statement → negative tag with same auxiliary.", "are → aren't you."),
        q("Adjective order: She bought a ____ scarf.",
          ["beautiful red silk", "silk beautiful red", "red silk beautiful", "beautiful silk red wrong order preferred"],
          "a", "Opinion → colour → material is standard order.", "Opinion, colour, material."),
        q("Reported: He said, \"Where do you live?\" → He asked —",
          ["where I lived", "where do I live", "where did I lived", "where you live?"],
          "a", "Wh-question: ask + clause, no auxiliary inversion, tense backshift.", "Statement word order after asked."),
        q("Linker: She was tired; ____, she finished the race.",
          ["however", "therefore meaning because tired", "moreover only adding same idea wrongly", "for example"],
          "a", "However shows contrast despite tiredness.", "Contrast linker."),
        q("Infinitive of purpose: He went to the shop ____ milk.",
          ["to buy", "for buy", "buying for to", "buy"],
          "a", "to + verb expresses purpose.", "Went … to buy."),
        q("Choose correct: Neither Ravi nor his friends ____ present.",
          ["were", "was always only", "is", "has"],
          "a", "With neither…nor, verb often agrees with the nearer subject (friends → were).", "Proximity agreement."),
    ]
    B += [
        q("Tense: \"I had left before she arrived\" is —",
          ["past perfect + simple past", "present perfect", "future perfect", "past continuous only"],
          "a", "Earlier past = past perfect; later past = simple past.", "Had + V3 before another past."),
        q("Passive: \"They are building a flyover.\" →",
          ["A flyover is being built", "A flyover is built them", "A flyover builds", "Flyover being they"],
          "a", "Present continuous passive: is/are being + V3.", "are building → is being built."),
        q("Modal deduction: The lights are on; she ____ at home.",
          ["must be", "can't have been? for present", "must been", "should to be"],
          "a", "Must be = logical conclusion about now.", "Evidence → must be."),
        q("Relative: This is the book ____ I told you about.",
          ["that / which", "who", "whose", "whom book"],
          "a", "That/which for things; object of about.", "Thing → that/which."),
        q("Conditional III: If she had studied, she ____ the exam.",
          ["would have passed", "will pass", "passes", "would passes"],
          "a", "If + past perfect, would have + V3.", "Unreal past."),
        q("Article: ____ Himalayas are in Asia.",
          ["The", "A", "An", "No article always wrong here"],
          "a", "Mountain ranges take the.", "The Himalayas, the Alps."),
        q("Error correction: \"She suggested to go home.\" →",
          ["She suggested going home", "She suggested go home", "She suggested to going", "She suggest going"],
          "a", "Suggest + gerund (not to-infinitive).", "Suggest doing."),
        q("Voice: \"Who wrote this letter?\" →",
          ["By whom was this letter written?", "Who was this letter wrote?", "By who this letter written?", "Whom wrote?"],
          "a", "Passive interrogative with by whom / who…by.", "Keep question form."),
        q("Choose phrasal: The meeting was ____ because of rain.",
          ["called off", "called on", "called in wrongly for cancel", "put up"],
          "a", "Call off = cancel.", "Call off the meeting."),
        q("Concord: Either the teacher or the students ____ to speak.",
          ["have", "has always", "is", "was only"],
          "a", "Agree with the nearer subject (students → have).", "Either…or proximity."),
        q("Reported commands: \"Sit down,\" the teacher said. → The teacher told us —",
          ["to sit down", "sit down", "that sit down", "sitting down"],
          "a", "Tell + object + to-infinitive.", "Command → to + V."),
        q("Adjective vs adverb: She sang ____.",
          ["beautifully", "beautiful", "beauty", "more beautiful song as adverb"],
          "a", "Modify verb sang with adverb beautifully.", "Verb ← adverb."),
        q("Preposition: He congratulated me ____ my success.",
          ["on", "for at", "with", "about only always"],
          "a", "Congratulate someone on something.", "Fixed preposition on."),
        q("Cleft focus: It was Riya ____ solved the puzzle.",
          ["who", "which", "what", "whom solved wrongly"],
          "a", "It was X who… for people.", "Cleft with who."),
        q("Choose: Hardly had he entered ____ the phone rang.",
          ["when", "than", "then", "that"],
          "a", "Hardly… when (not than).", "Hardly/scarcely… when; No sooner… than."),
        q("Gerund vs infinitive: He stopped ____ to the radio. (ceased the activity)",
          ["listening", "to listen meaning interrupt to then listen", "listen", "listened"],
          "a", "Stop + gerund = quit that activity.", "Stop smoking / stop listening."),
        q("Determiners: There is ____ hope left.",
          ["little", "few", "many", "several"],
          "a", "Hope uncountable → little; few is for countables.", "Little hope."),
        q("Passive with modal: You must finish this. →",
          ["This must be finished", "This must finished", "This must being finish", "This must to be finish"],
          "a", "modal + be + V3.", "must be finished."),
        q("Choose correct narrative: She said that she ____ the keys the day before.",
          ["had lost", "has lost", "loses", "will lose"],
          "a", "Past reporting + earlier past → past perfect; yesterday → the day before.", "Backshift + time change."),
        q("Participle phrase: ____ by the noise, the baby woke up.",
          ["Startled", "Startling", "To startle", "Startles"],
          "a", "Past participle for the experiencer who receives the action.", "Startled by…"),
        q("Subject-verb: Mathematics ____ his favourite subject.",
          ["is", "are", "were", "have"],
          "a", "Subject names like Mathematics take singular.", "Mathematics is…"),
        q("Choose connector: He is rich; ____ he is not happy.",
          ["yet / still / however", "so", "because", "therefore only"],
          "a", "Contrast between wealth and unhappiness.", "Yet/however for contrast."),
        q("Infinitive: She is too tired ____.",
          ["to work", "for work working", "that work", "worked"],
          "a", "too + adj + to-infinitive.", "Too tired to work."),
        q("Identify non-finite: \"Swimming is good exercise.\" Swimming is a —",
          ["gerund", "finite past verb", "conjunction", "preposition"],
          "a", "V-ing as noun subject = gerund.", "Swimming = thing that is good."),
    ]
    lesson = lesson_ts(
        "Grammar", "✏️", "sentence",
        "Tense, voice, reported speech, and agreement keep sentences clear.",
        [("Tenses", "Time + aspect (perfect, continuous)", "⏳"),
         ("Voice", "Active doer vs passive focus", "🔄"),
         ("Reported speech", "Backshift and word-order changes", "🗣️"),
         ("Agreement", "Subject and verb must match", "🤝")],
        {"prompt": "Passive of \"She writes a letter\"?",
         "options": [("a", "A letter is written by her"), ("b", "A letter writes her"), ("c", "She is written a letter by"), ("d", "Letter wrote")],
         "answerId": "a", "why": "Object becomes subject; is/are + past participle."},
        ["Grammar toolkit", "Name the tense", "Backshift in reports", "Check subject–verb"],
    )
    outline = """
### step_1: Tense and aspect
- **tts**: Match the verb form to time and whether the action is complete or ongoing.
- **check**: Yesterday → which tense family? — Answer: Past

### step_2: Voice and report
- **tts**: Passive moves the object forward. Reported speech often steps the tense back.
- **check**: \"I am late,\" she said → she said she ___ late. — Answer: was

### step_3: Agreement and patterns
- **tts**: Singular subjects need singular verbs; learn fixed prepositions and conditionals.
- **check**: The news ___ good. — Answer: is
"""
    return emit_chapter(
        file="g10-english-grammar.ts",
        export="g10EnglishGrammar",
        doc="english-ch02-grammar.md",
        meta={"id": "grammar", "title": "Grammar", "emoji": "✏️",
              "blurb": "Tense, voice, report & agreement", "topic": "grammar",
              "paperTopics": ["grammar", "comprehension"], "subjectLabel": "English"},
        lesson=lesson, set_a_raw=A, set_b_raw=B, prefix="g10-eng-ch02",
        lesson_outline=outline,
    )


def writing():
    A, B = [], []
    A += [
        q("A formal letter to the Municipal Commissioner should open with —",
          ["Sir/Madam (or Respected Sir/Madam)", "Hey!", "Dearest friend", "Yo"],
          "a", "Formal register uses Sir/Madam.", "Match greeting to official reader."),
        q("The subject line of a formal letter should be —",
          ["brief and specific", "a long story", "omitted always", "only emojis"],
          "a", "A clear subject helps the official file and act.", "One crisp line stating the issue."),
        q("Closing a formal letter to an unknown official: —",
          ["Yours faithfully", "Yours lovingly", "See ya", "Thnx"],
          "a", "Unknown recipient → Yours faithfully; named → Yours sincerely.", "Faithfully vs sincerely rule."),
        q("An analytical paragraph should mainly —",
          ["interpret data with comparisons and a conclusion", "tell a fairy tale", "list random adjectives", "copy a poem"],
          "a", "Exam analytical paras read a chart/table and comment.", "Trend + compare + conclude."),
        q("In an analytical paragraph, a good opening —",
          ["states what the data shows overall", "starts with \"Once upon a time\"", "asks the examiner's age", "uses only one number with no claim"],
          "a", "Overview sentence before details.", "Big picture first."),
        q("A newspaper article's headline should be —",
          ["catchy and informative", "a full 200-word paragraph", "written in all jokes with no topic", "blank"],
          "a", "Headlines attract and inform quickly.", "Short, clear, relevant."),
        q("Article body usually includes —",
          ["introduction, problem/discussion, suggestions, conclusion", "only a greeting", "only data table with no words", "a shopping list only"],
          "a", "Structured argumentative/informative flow.", "Lead → body → wrap."),
        q("A notice must include —",
          ["heading, date, body, name & designation", "only a poem", "a formal letter salutation Dear Sir inside notice box only always", "your Aadhaar number"],
          "a", "Standard school notice format.", "Who/what/when/where + authority."),
        q("Notices are typically written in —",
          ["third person, concise language", "chat slang", "first-person love letter style", "only questions"],
          "a", "Impersonal and brief.", "Information, not chat."),
        q("Story writing needs —",
          ["beginning, conflict, climax, ending", "only a moral with no events", "random sentences", "a notice box"],
          "a", "Narrative arc keeps readers engaged.", "Setup → trouble → peak → resolve."),
        q("In story writing, dialogue should —",
          ["sound natural and move the plot", "replace all description always", "be in formal letter format", "use only one word forever"],
          "a", "Dialogue reveals character and advances action.", "Talk that does work."),
        q("Formal letter complaint tone should be —",
          ["polite but firm", "abusive", "romantic", "sarcastic slang"],
          "a", "Respectful language with clear request for action.", "Firm ≠ rude."),
        q("Which belongs in a letter to the editor?",
          ["issue, effects, appeal for action", "your lunch menu only", "class timetable only", "a math derivation only"],
          "a", "Public issue + stance + call to readers/authorities.", "Editor letters are civic."),
        q("Word limit discipline means —",
          ["cover required points without padding", "repeat the same sentence ten times", "ignore the task", "write half a word"],
          "a", "Stay on task and within limits.", "Quality over filler."),
        q("In analytical writing, \"respectively\" is used when —",
          ["listing values that map onto a prior list in order", "ending a letter", "describing a storm metaphor", "quoting Shakespeare only"],
          "a", "Keeps parallel lists aligned.", "A and B scored 40 and 50 respectively."),
        q("A report on a school event should be —",
          ["factual, chronologically clear, in past tense usually", "fictional fantasy only", "a rhyme scheme", "second-person commands only"],
          "a", "Reports record what happened.", "Who/what/when/where/outcome."),
        q("Email subject lines should avoid —",
          ["vague titles like \"Hello\" with no topic", "clear topics", "event names", "dates when relevant"],
          "a", "\"Hello\" doesn't help prioritisation.", "Be specific in the subject."),
        q("Formal invitation vs informal: formal invitations —",
          ["use third person and fixed layout", "use \"Hi dude\"", "omit time and place", "are only spoken"],
          "a", "School formal invites are structured and impersonal.", "Third person: The Principal requests…"),
        q("When describing a graph that rises then falls, you may write that it —",
          ["increased and then declined", "stayed perfectly flat with no change", "cannot be described in words", "must be a poem"],
          "a", "Name the trend: rise, then fall.", "Use clear trend verbs."),
        q("Paragraph unity means —",
          ["all sentences support one main idea", "each sentence is a new unrelated topic", "no topic sentence ever", "only questions"],
          "a", "One paragraph, one job.", "Stick to the controlling idea."),
        q("A good concluding sentence in an article —",
          ["sums up and looks forward / calls to act", "introduces three new unrelated topics", "repeats the headline only in reverse", "insults the reader"],
          "a", "Closure with purpose.", "End with takeaway."),
        q("In a formal letter, the sender's address is usually placed —",
          ["at the top (before date), as per format taught", "after the signature only always in every board identically without variation", "in the subject line", "nowhere"],
          "a", "Standard school format: sender address → date → receiver → subject → salutation.", "Follow your board's layout."),
        q("Show, don't tell in stories means —",
          ["use actions and senses instead of only labels like \"she was sad\"", "never describe feelings", "only use adjectives", "avoid plot"],
          "a", "Concrete detail implies emotion.", "Tears on the letter > \"she was sad\" alone."),
        q("Editing a draft, you should first check —",
          ["task fulfilment and clarity, then grammar", "font colour only", "adding slang", "removing the subject"],
          "a", "Content on-task before surface polish.", "Meaning first, then mechanics."),
    ]
    B += [
        q("Which sentence suits a formal complaint letter?",
          ["I request you to look into the irregular water supply in our area.", "Fix it now, dude.", "Water is like, gone, lol.", "Supply me feelings."],
          "a", "Polite request + specific issue.", "Formal diction."),
        q("An analytical paragraph on a bar graph comparing two years should —",
          ["compare categories and note the largest change", "ignore the numbers", "invent categories not shown", "only describe colours of the bars"],
          "a", "Comparison is the job.", "What grew most? What fell?"),
        q("Notice word \"Compulsory\" is used to —",
          ["stress that attendance/action is required", "decorate the page", "mean optional", "end the notice"],
          "a", "Signals obligation for the audience.", "Compulsory = must."),
        q("Story prompt \"Write a story beginning with…\" requires you to —",
          ["use the given line as the opening", "ignore the line", "put the line only at the end", "write a letter instead"],
          "a", "Obey the stem's constraint.", "Given line = first line."),
        q("In letters to the editor, you usually do NOT —",
          ["demand personal revenge with threats", "state the public issue", "suggest solutions", "end with a courteous close"],
          "a", "Threats are inappropriate; civic tone matters.", "Stay constructive."),
        q("Coherence devices include —",
          ["however, furthermore, for example", "random emojis only", "changing topic every three words", "removing all verbs"],
          "a", "Linkers guide the reader.", "Signpost logic."),
        q("A report title should be —",
          ["clear and factual", "a riddle", "absent", "longer than the report"],
          "a", "Readers need to know the event at a glance.", "Factual title."),
        q("When data shows \"45% → 60%\", a precise phrase is —",
          ["rose by 15 percentage points", "doubled", "fell by 45%", "unchanged"],
          "a", "60−45=15 percentage points (not \"rose by 15%\" of 45).", "Points vs percent change."),
        q("Formal emails should include —",
          ["clear subject, salutation, body, closing, name", "only attachments with no text", "only GIFs", "password in subject"],
          "a", "Same courtesy as letters, tighter.", "Subject + structure."),
        q("In story endings, a twist works if it —",
          ["is prepared by earlier hints", "contradicts everything with no link", "stops mid-sentence always", "lists grammar rules"],
          "a", "Fair twists feel surprising yet earned.", "Plant then payoff."),
        q("Which is the best thesis-style opener for an article on plastic waste?",
          ["Plastic waste is choking our drains and demands urgent community action.", "Plastic exists.", "I like bottles.", "Once there was a dragon."],
          "a", "States issue + stakes + direction.", "Strong lead."),
        q("Register for a letter to a friend about a trip is —",
          ["informal but clear", "same as to the President without change", "legal affidavit style only", "notices format"],
          "a", "Friendly tone, contractions OK.", "Know your audience."),
        q("Proofreading mark for a spelling error means you should —",
          ["correct the word's spelling", "delete the whole essay", "change the topic", "add more errors"],
          "a", "Fix the indicated mistake.", "Surface accuracy."),
        q("In analytical paragraphs, avoid —",
          ["personal stories unrelated to the data", "comparatives like higher/lower", "overview sentences", "clear conclusions"],
          "a", "Stay data-centred.", "No off-topic memoir."),
        q("A bio-sketch should highlight —",
          ["key life facts and achievements in organised order", "only one adjective", "fictional powers only always", "exam board codes"],
          "a", "Concise factual portrait.", "Who / known for / impact."),
        q("Diary entry format usually includes —",
          ["date and first-person feelings about events", "Yours faithfully", "notice heading NOTICE", "third-person only always"],
          "a", "Personal, dated, reflective.", "Dear Diary style."),
        q("When the task says \"Write a letter to the Principal,\" the receiver's address is —",
          ["the Principal, School name/place", "the Municipal Commissioner always", "your friend Rahul", "no receiver"],
          "a", "Address the person named in the question.", "Task dictates receiver."),
        q("To show contrast between two data series, use —",
          ["while / whereas / however", "because only", "meanwhile as the only option forever", "no linker"],
          "a", "Contrast linkers clarify comparison.", "Whereas series A rose, B fell."),
        q("A weak article conclusion —",
          ["trails off with \"That is all\" and no takeaway", "restates the call to action", "links back to the lead", "offers a practical step"],
          "a", "\"That is all\" adds nothing.", "End with purpose."),
        q("Process writing order:",
          ["plan → draft → revise → proofread", "proofread → plan → ignore task", "publish without reading", "memorise one essay for all topics"],
          "a", "Process beats one-shot panic.", "Plan first."),
        q("In a debate-style article, you should —",
          ["acknowledge another view then rebut with reasons", "insult opponents personally", "avoid any claim", "use only questions"],
          "a", "Fairness + reasoned rebuttal.", "Steelman then counter."),
        q("Quantifiers in data writing: \"a significant majority\" implies —",
          ["well over half", "exactly 1%", "zero", "all missing values"],
          "a", "Majority = more than 50%; significant stresses size.", "Don't overclaim."),
        q("School magazine feature on a teacher should be —",
          ["respectful, specific anecdotes, readable", "a formal FIR", "a math proof only", "anonymous insults"],
          "a", "Human interest with respect.", "Anecdote > vague praise."),
        q("If the visual shows three bars for 2019, 2021, 2023, your paragraph must —",
          ["mention all three years or clearly justify a focus", "mention only 1990", "ignore years", "change them to months secretly"],
          "a", "Cover what the figure actually shows.", "Don't invent missing categories."),
    ]
    lesson = lesson_ts(
        "Writing", "✍️", "sentence",
        "Match form to purpose: letter, article, notice, story, data paragraph.",
        [("Formal letters", "Format, tone, clear ask", "✉️"),
         ("Analytical para", "Overview → compare → conclude", "📊"),
         ("Article & notice", "Headline/box + structured body", "📰"),
         ("Story", "Arc, detail, dialogue", "📕")],
        {"prompt": "Unknown official: end the letter with —",
         "options": [("a", "Yours faithfully"), ("b", "Yours lovingly"), ("c", "See you"), ("d", "Bye")],
         "answerId": "a", "why": "When you don't use the person's name, close with Yours faithfully."},
        ["Writing toolkit", "Audience & purpose", "Format first", "Revise for clarity"],
    )
    outline = """
### step_1: Audience and purpose
- **tts**: Who reads this, and what should they do or feel?
- **check**: Letter to Commissioner → formal or informal? — Answer: Formal

### step_2: Forms
- **tts**: Letters, notices, articles, stories, and data paragraphs each have a shape.
- **check**: Notice needs name and designation? — Answer: Yes

### step_3: Revise
- **tts**: Check task points, then grammar and spelling.
- **check**: Plan before you draft? — Answer: Yes
"""
    return emit_chapter(
        file="g10-english-writing.ts",
        export="g10EnglishWriting",
        doc="english-ch03-writing.md",
        meta={"id": "writing", "title": "Writing", "emoji": "✍️",
              "blurb": "Letters, articles, notices & data paras", "topic": "comprehension",
              "paperTopics": ["comprehension", "grammar"], "subjectLabel": "English"},
        lesson=lesson, set_a_raw=A, set_b_raw=B, prefix="g10-eng-ch03",
        lesson_outline=outline,
    )


def build_all():
    h = {}
    h.update(literature())
    h.update(grammar())
    h.update(writing())
    return h
