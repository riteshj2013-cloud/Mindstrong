#!/usr/bin/env python3
from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import (
    ROOT, OUT, DOCS, science_sets, maths_sets, eng_sets,
    lesson_ts, emit_module,
)

manifest = []

def copy_doc(grade, name, md):
    d = DOCS / ("grade-%d" % grade)
    d.mkdir(parents=True, exist_ok=True)
    (d / name).write_text(md)

# ---- G3 Science (full pack) ----
specs = [
  # (kind, path, export, file, meta, visual, speak, cards, try, bullets, grade, docname)
]

# G3 Sci Ch1
md = (ROOT/"sof-science/grade-3/chapter-01-plants-parts-and-what-they-do.md").read_text()
a,b = science_sets(md, "g3-sci-plants")
emit_module(OUT/"g3-science-plants.ts", "g3SciencePlants", {
  "id":"plants-parts","title":"Plant Parts","emoji":"🌱","blurb":"Roots, stem, leaves & more",
  "topic":"living-things","paperTopics":["living-things","human-body"],
}, lesson_ts("Plant parts", "🌱", "plant",
  "Plants have roots, stem, leaves, flowers and fruits. Each part has a job.",
  [("Roots","Take up water and hold the plant","🪴"),("Stem","Carries water up","🎋"),
   ("Leaves","Make food with sunlight","🍃"),("Flower & fruit","Help make new plants","🌸")],
  {"prompt":"Which part makes food using sunlight?","options":[("a","Roots"),("b","Leaves"),("c","Flower only"),("d","Bark")],
   "answerId":"b","why":"Leaves catch sunlight to make food."},
  ["Know each plant part", "Leaves make food", "Roots drink water", "Sets ready"]), a, b)
copy_doc(3, "science-ch01-plants.md", md)
manifest.append(("science",3,"g3SciencePlants","g3-science-plants"))

# G3 Sci Ch2
md = (ROOT/"sof-science/grade-3/chapter-02-animals-food-and-homes.md").read_text()
a,b = science_sets(md, "g3-sci-animals")
emit_module(OUT/"g3-science-animals.ts", "g3ScienceAnimals", {
  "id":"animals-food-homes","title":"Animals: Food & Homes","emoji":"🐾","blurb":"What animals eat and where they live",
  "topic":"living-things","paperTopics":["living-things","human-body"],
}, lesson_ts("Animals, food and homes", "🐾", "plant",
  "Animals need food and a safe home. Some eat plants, some eat other animals, some eat both.",
  [("Herbivores","Eat plants","🌿"),("Carnivores","Eat other animals","🦁"),
   ("Omnivores","Eat both","🐻"),("Homes","Nests, burrows, dens, hives","🏠")],
  {"prompt":"An animal that eats only plants is a…","options":[("a","Carnivore"),("b","Herbivore"),("c","Omnivore"),("d","Producer")],
   "answerId":"b","why":"Herbivores eat plants."},
  ["Food groups", "Homes keep animals safe", "Match animal to diet", "Sets ready"]), a, b)
copy_doc(3, "science-ch02-animals.md", md)
manifest.append(("science",3,"g3ScienceAnimals","g3-science-animals"))

# G3 Sci Ch3
md = (ROOT/"sof-science/grade-3/chapter-03-our-sense-organs.md").read_text()
a,b = science_sets(md, "g3-sci-senses")
emit_module(OUT/"g3-science-senses.ts", "g3ScienceSenses", {
  "id":"sense-organs","title":"Our Sense Organs","emoji":"👁️","blurb":"See, hear, smell, taste, touch",
  "topic":"human-body","paperTopics":["human-body","living-things"],
}, lesson_ts("Five senses", "👁️", "plant",
  "We learn about the world with five sense organs: eyes, ears, nose, tongue and skin.",
  [("Eyes","Sight","👀"),("Ears","Hearing","👂"),("Nose","Smell","👃"),
   ("Tongue","Taste","👅"),("Skin","Touch","✋")],
  {"prompt":"Which sense organ helps you hear a bell?","options":[("a","Eyes"),("b","Ears"),("c","Nose"),("d","Tongue")],
   "answerId":"b","why":"Ears are for hearing."},
  ["Five senses", "Each organ has a job", "Keep senses safe", "Sets ready"]), a, b)
copy_doc(3, "science-ch03-senses.md", md)
manifest.append(("science",3,"g3ScienceSenses","g3-science-senses"))

# G5 Sci Ch2+3
md = (ROOT/"sof-science/grade-5/chapter-02-human-body-skeleton-muscles-nervous.md").read_text()
a,b = science_sets(md, "g5-sci-body")
emit_module(OUT/"g5-science-body.ts", "g5ScienceBody", {
  "id":"human-body","title":"Human Body","emoji":"🦴","blurb":"Skeleton, muscles and nerves",
  "topic":"human-body","paperTopics":["human-body","living-things"],
}, lesson_ts("Your body frame", "🦴", "plant",
  "Bones make your skeleton. Joints let you move. Muscles pull. Nerves carry messages.",
  [("Skeleton","Shape, support, protection, movement","🦴"),("Joints","Hinge, ball-and-socket, pivot, fixed","🔗"),
   ("Muscles","Pull in pairs; tendons join to bones","💪"),("Nerves","Messages and quick reflexes","🧠")],
  {"prompt":"Which bone protects the brain?","options":[("a","Ribcage"),("b","Skull"),("c","Thigh bone"),("d","Kneecap")],
   "answerId":"b","why":"The skull guards the brain."},
  ["206 adult bones", "Joints allow movement", "Muscles work in pairs", "Sets ready"]), a, b)
copy_doc(5, "science-ch02-human-body.md", md)
manifest.append(("science",5,"g5ScienceBody","g5-science-body"))

md = (ROOT/"sof-science/grade-5/chapter-03-sun-moon-solar-system.md").read_text()
a,b = science_sets(md, "g5-sci-space")
emit_module(OUT/"g5-science-space.ts", "g5ScienceSpace", {
  "id":"sun-moon-space","title":"Sun, Moon and Solar System","emoji":"🌞","blurb":"Day, night, Moon and planets",
  "topic":"earth-space","paperTopics":["earth-space","living-things"],
}, lesson_ts("Sun, Moon and planets", "🌞", "water-cycle",
  "The Sun is our nearest star. Earth spins for day and night and orbits the Sun for a year.",
  [("Sun","Nearest star; heat and light","☀️"),("Day and night","Earth spins on its axis","🌍"),
   ("Year","Earth orbits the Sun","📅"),("Moon phases","Changing shapes as Moon orbits Earth","🌙")],
  {"prompt":"What causes day and night?","options":[("a","Sun orbits Earth"),("b","Earth spinning on its axis"),("c","Moon blocks Sun"),("d","Clouds")],
   "answerId":"b","why":"Earth's rotation causes day and night."},
  ["Sun is a star", "Spin makes day/night", "Orbit makes a year", "Sets ready"]), a, b)
copy_doc(5, "science-ch03-sun-moon.md", md)
manifest.append(("science",5,"g5ScienceSpace","g5-science-space"))

# G5 Maths Ch2+3
md = (ROOT/"sof-maths/grade-5/chapter-02-shapes-and-angles.md").read_text()
a,b = maths_sets(md, "g5-maths-angles")
emit_module(OUT/"g5-maths-angles.ts", "g5MathsAngles", {
  "id":"shapes-angles","title":"Shapes and Angles","emoji":"📐","blurb":"Degrees, turns and polygons",
  "topic":"add-sub","paperTopics":["add-sub","place-value"],
}, lesson_ts("Shapes and angles", "📐", "number-line",
  "An angle has two arms and a vertex. A square corner is ninety degrees.",
  [("Acute","Less than 90 degrees","🔹"),("Right","Exactly 90 degrees","⬜"),
   ("Obtuse","Between 90 and 180","🔶"),("Polygons","Closed straight-sided shapes","⬡")],
  {"prompt":"An angle of 35 degrees is…","options":[("a","Obtuse"),("b","Right"),("c","Acute"),("d","Straight")],
   "answerId":"c","why":"Less than 90 means acute."},
  ["Vertex plus two arms", "Know angle types", "Quarter turn is 90", "Sets ready"]), a, b)
copy_doc(5, "maths-ch02-shapes-angles.md", md)
manifest.append(("maths",5,"g5MathsAngles","g5-maths-angles"))

md = (ROOT/"sof-maths/grade-5/chapter-03-fractions.md").read_text()
a,b = maths_sets(md, "g5-maths-frac")
emit_module(OUT/"g5-maths-fractions.ts", "g5MathsFractions", {
  "id":"fractions-g5","title":"Fractions","emoji":"🍕","blurb":"Parts of a whole",
  "topic":"fractions","paperTopics":["fractions","decimals"],
}, lesson_ts("Fractions", "🍕", "fraction-bar",
  "A fraction names equal parts of a whole. Bottom is parts; top is how many you have.",
  [("Denominator","Equal parts in the whole","➗"),("Numerator","Parts you count","✨"),
   ("Unit fraction","Numerator is 1","1️⃣"),("Equivalent","Same amount, different look","⚖️")],
  {"prompt":"Roti cut into 4; Ravi eats 1. Fraction eaten?","options":[("a","1/2"),("b","1/4"),("c","3/4"),("d","4/1")],
   "answerId":"b","why":"One of four equal parts is 1/4."},
  ["Top = parts you have", "Bottom = equal parts", "Compare carefully", "Sets ready"]), a, b)
copy_doc(5, "maths-ch03-fractions.md", md)
manifest.append(("maths",5,"g5MathsFractions","g5-maths-fractions"))

# G5 English Ch2+3
md = (ROOT/"grade-5-english/chapter-02.md").read_text()
a,b = eng_sets(md, "g5-eng-ch02")
emit_module(OUT/"g5-english-grammar.ts", "g5EnglishGrammar", {
  "id":"word-builders","title":"Word Builders","emoji":"🧱","blurb":"Grammar comes alive",
  "topic":"grammar","paperTopics":["grammar","vocabulary"],
}, lesson_ts("Word builders", "🧱", "sentence",
  "Every word has a job: nouns, pronouns, adjectives, verbs and adverbs.",
  [("Nouns","Name people, places, ideas","📛"),("Pronouns","Stand in for nouns","🔁"),
   ("Adjectives","Describe nouns","🎨"),("Verbs and adverbs","Action plus how/when/where","⚡")],
  {"prompt":'In "Mira quickly packed," which is an adverb?',"options":[("a","Mira"),("b","quickly"),("c","packed"),("d","bag")],
   "answerId":"b","why":"Quickly tells how she packed."},
  ["Know each word job", "Subject-verb agree", "Compare carefully", "Sets ready"]), a, b)
copy_doc(5, "english-ch02-grammar.md", md)
manifest.append(("english",5,"g5EnglishGrammar","g5-english-grammar"))

md = (ROOT/"grade-5-english/chapter-03.md").read_text()
a,b = eng_sets(md, "g5-eng-ch03")
emit_module(OUT/"g5-english-words.ts", "g5EnglishWords", {
  "id":"words-at-work","title":"Words at Work","emoji":"✍️","blurb":"Say it right, write it bright",
  "topic":"vocabulary","paperTopics":["vocabulary","idioms-lite","grammar"],
}, lesson_ts("Words at work", "✍️", "word-cards",
  "Synonyms are meaning twins. Antonyms are opposites. Homophones sound alike but differ in meaning.",
  [("Synonyms","Nearly the same meaning","😊"),("Antonyms","Opposites","🔄"),
   ("Homophones","Same sound, different meaning","👂"),("Idioms and similes","Paint pictures with words","🎨")],
  {"prompt":'Best synonym of "happy"?',"options":[("a","joyful"),("b","angry"),("c","tiny"),("d","slow")],
   "answerId":"a","why":"Joyful means nearly the same as happy."},
  ["Pick the right word", "Context decides meaning", "Punctuate cleanly", "Sets ready"]), a, b)
copy_doc(5, "english-ch03-words.md", md)
manifest.append(("english",5,"g5EnglishWords","g5-english-words"))

# G8 Science Ch1-3
md = (ROOT/"sof-science/grade-8/chapter-01-cell-structure-and-functions.md").read_text()
a,b = science_sets(md, "g8-sci-cells")
emit_module(OUT/"g8-science-cells.ts", "g8ScienceCells", {
  "id":"cells","title":"Cell Structure","emoji":"🔬","blurb":"Unit of life",
  "topic":"cells-basics","paperTopics":["cells-basics","living-things"],
}, lesson_ts("Cell structure", "🔬", "atom-lite",
  "The cell is the basic unit of life. Plant cells have a wall and chloroplasts.",
  [("Cell","Basic unit of life","🔬"),("Nucleus","Control centre","🧬"),
   ("Mitochondria","Powerhouse","⚡"),("Plant extras","Cell wall and chloroplasts","🌿")],
  {"prompt":"Powerhouse of the cell?","options":[("a","Nucleus"),("b","Mitochondria"),("c","Vacuole"),("d","Ribosome")],
   "answerId":"b","why":"Mitochondria release energy from food."},
  ["Cell = unit of life", "Know organelles", "Plant vs animal", "Sets ready"]), a, b)
copy_doc(8, "science-ch01-cells.md", md)
manifest.append(("science",8,"g8ScienceCells","g8-science-cells"))

md = (ROOT/"sof-science/grade-8/chapter-02-force-and-pressure.md").read_text()
a,b = science_sets(md, "g8-sci-force")
emit_module(OUT/"g8-science-force.ts", "g8ScienceForce", {
  "id":"force-pressure","title":"Force and Pressure","emoji":"⚡","blurb":"Push, pull and pressure",
  "topic":"forces-energy","paperTopics":["forces-energy","materials"],
}, lesson_ts("Force and pressure", "⚡", "magnet",
  "A force is a push or a pull. Pressure is force on a unit area.",
  [("Force","Push or pull","👉"),("Pressure","Force divided by area","📏"),
   ("Friction","Opposes motion","🛑"),("Air pressure","Atmosphere pushes too","🌬️")],
  {"prompt":"Pressure equals…","options":[("a","Force times area"),("b","Force divided by area"),("c","Mass times speed"),("d","Area divided by force")],
   "answerId":"b","why":"Pressure is force on a unit area."},
  ["Force changes motion", "P = F/A", "Friction matters", "Sets ready"]), a, b)
copy_doc(8, "science-ch02-force.md", md)
manifest.append(("science",8,"g8ScienceForce","g8-science-force"))

md = (ROOT/"sof-science/grade-8/chapter-03-metals-and-non-metals.md").read_text()
a,b = science_sets(md, "g8-sci-metals")
emit_module(OUT/"g8-science-metals.ts", "g8ScienceMetals", {
  "id":"metals-nonmetals","title":"Metals and Non-metals","emoji":"⚙️","blurb":"Properties and uses",
  "topic":"materials","paperTopics":["materials","forces-energy"],
}, lesson_ts("Metals and non-metals", "⚙️", "magnet",
  "Metals are usually shiny, malleable and conduct heat and electricity.",
  [("Metals","Shiny, malleable, ductile, conductors","🪙"),("Non-metals","Often dull, brittle, poor conductors","💨"),
   ("Reactions","With oxygen and acids","🧪"),("Uses","Match property to use","🏠")],
  {"prompt":"Drawing metals into wires is called…","options":[("a","Malleability"),("b","Ductility"),("c","Brittleness"),("d","Sonority")],
   "answerId":"b","why":"Ductility is drawing into wires."},
  ["Metal properties", "Contrast non-metals", "Link uses to properties", "Sets ready"]), a, b)
copy_doc(8, "science-ch03-metals.md", md)
manifest.append(("science",8,"g8ScienceMetals","g8-science-metals"))

# G8 Maths Ch1 (+ Ch2 if present)
md = (ROOT/"sof-maths/grade-8/chapter-01-rational-numbers.md").read_text()
a,b = maths_sets(md, "g8-maths-rational")
emit_module(OUT/"g8-maths-rationals.ts", "g8MathsRationals", {
  "id":"rational-numbers","title":"Rational Numbers","emoji":"🔢","blurb":"p/q on the number line",
  "topic":"fractions","paperTopics":["fractions","linear-lite"],
}, lesson_ts("Rational numbers", "🔢", "number-line",
  "A rational number can be written as p/q where q is not zero.",
  [("Definition","p/q with q not zero","➗"),("Standard form","Lowest terms; positive denominator","✨"),
   ("Operations","Add, subtract, multiply, divide","🧮"),("Number line","Between integers too","📍")],
  {"prompt":"Which is rational?","options":[("a","3/4"),("b","pi only as non-ratio"),("c","square root of 2 as non-ratio"),("d","None")],
   "answerId":"a","why":"3/4 is p/q with integers."},
  ["p/q form", "Standard form", "Watch signs", "Sets ready"]), a, b)
copy_doc(8, "maths-ch01-rationals.md", md)
manifest.append(("maths",8,"g8MathsRationals","g8-maths-rationals"))

lin = ROOT/"sof-maths/grade-8/chapter-02-linear-equations.md"
if lin.exists():
    md = lin.read_text()
    a,b = maths_sets(md, "g8-maths-linear")
    emit_module(OUT/"g8-maths-linear.ts", "g8MathsLinear", {
      "id":"linear-equations","title":"Linear Equations","emoji":"𝑥","blurb":"Solve for x",
      "topic":"linear-lite","paperTopics":["linear-lite","fractions"],
    }, lesson_ts("Linear equations", "𝑥", "balance",
      "A linear equation has the unknown to power one. Keep both sides balanced.",
      [("Balance","Same change on both sides","⚖️"),("Inverse ops","Undo + with -, undo x with /","🔄"),
       ("Isolate x","Peel layers carefully","🎯"),("Check","Substitute back","✅")],
      {"prompt":"Solve x + 7 = 15","options":[("a","8"),("b","22"),("c","7"),("d","15")],
       "answerId":"a","why":"Subtract 7 from both sides: x = 8."},
      ["Balance both sides", "Use inverse ops", "Check your answer", "Sets ready"]), a, b)
    copy_doc(8, "maths-ch02-linear.md", md)
    manifest.append(("maths",8,"g8MathsLinear","g8-maths-linear"))

import json
Path("/workspace/Mindstrong/scripts/ingest_manifest.json").write_text(json.dumps(manifest, indent=2))
print("DONE chapters:", len(manifest))
for m in manifest:
    print(" ", m)
