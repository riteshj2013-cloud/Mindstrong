#!/usr/bin/env python3
"""Ingest Grade 4 Science writer files (sof-science/grade-4). Usage: python3 scripts/ingest_g4_science.py"""
from pathlib import Path
import re, sys
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, science_sets, lesson_ts, emit_module

CH = [
  ("chapter-01-food-and-nutrition.md", "g4-sci-food", "g4-science-food.ts", "g4ScienceFood", "science-ch01-food.md",
   {"id":"food-nutrition","title":"Food and Nutrition","emoji":"🍱","blurb":"Go, grow & protective foods",
    "topic":"human-body","paperTopics":["human-body","living-things"]},
   lesson_ts("Why do we eat?", "🍱", "plant",
     "Food gives us energy to play, helps us grow, and keeps us healthy. A balanced thali has a bit of every kind.",
     [("Go foods","Energy: rice, roti, potato","🍚"),("Grow foods","Body-building: dal, milk, eggs","🥛"),
      ("Protective foods","Vitamins & minerals: fruits, vegetables","🥕"),
      ("Fibre & water","Help digestion; keep the body cool","💧"),("Fats","A little bit for energy — not too much","🧈")],
     {"prompt":"Which food mainly helps us grow?","options":[("a","Dal"),("b","Sugar"),("c","Chips"),("d","Cold drink")],
      "answerId":"a","why":"Dal is rich in protein, a grow (body-building) food."},
     ["Go, grow & protective foods", "Fibre and water help digestion", "Eat a balanced thali", "Set A and Set B ready — 24 MCQs each"])),
  ("chapter-02-solids-liquids-and-gases.md", "g4-sci-matter", "g4-science-matter.ts", "g4ScienceMatter", "science-ch02-matter.md",
   {"id":"solids-liquids-gases","title":"Solids, Liquids and Gases","emoji":"🧊","blurb":"Matter and its three states",
    "topic":"materials","paperTopics":["materials","forces-energy"]},
   lesson_ts("Everything is matter", "🧊", "water-cycle",
     "A stone, milk and air all take up space. We call all of them matter. Matter can be solid, liquid or gas.",
     [("Solids","Keep their own shape and size","🪨"),("Liquids","Flow; take the shape of the container","🥛"),
      ("Gases","No fixed shape; fill all the space","🎈"),("Changing states","Heat: ice → water → steam; cooling reverses","♨️")],
     {"prompt":"Water poured from a glass into a bowl…","options":[("a","Keeps the glass shape"),("b","Takes the bowl's shape"),("c","Turns into a gas"),("d","Becomes a solid")],
      "answerId":"b","why":"Liquids take the shape of their container; the amount stays the same."},
     ["Matter takes up space", "Solid, liquid, gas", "Heat and cooling change states", "Set A and Set B ready — 24 MCQs each"])),
  ("chapter-03-water-sources-uses-and-cycle.md", "g4-sci-water", "g4-science-water.ts", "g4ScienceWater", "science-ch03-water.md",
   {"id":"water-cycle","title":"Water: Sources, Uses & Cycle","emoji":"💧","blurb":"Where water comes from and where it goes",
    "topic":"earth-space","paperTopics":["earth-space","materials"]},
   lesson_ts("Water means life", "💧", "water-cycle",
     "Plants, animals and people all need water. The Sun heats water, it rises as vapour, cools into clouds, then falls back as rain.",
     [("Sources","Rain, rivers, lakes, wells, groundwater","🏞️"),("Uses","Drinking, cooking, cleaning, farms, factories","🚰"),
      ("Water cycle","Evaporation → condensation → precipitation","🔄"),("Safe & saved","Boil dirty water; never waste a drop","🦸")],
     {"prompt":"Water vapour cooling to form clouds is called…","options":[("a","Evaporation"),("b","Condensation"),("c","Precipitation"),("d","Melting")],
      "answerId":"b","why":"Cooling vapour turns into tiny droplets that form clouds: condensation."},
     ["Water means life", "Evaporation, condensation, precipitation", "Boil to stay safe; save every drop", "Set A and Set B ready — 24 MCQs each"])),
]

src = ROOT / "sof-science/grade-4"
for fname, prefix, out, export, doc, meta, lesson in CH:
    p = src / fname
    if not p.exists():
        print("missing", fname); continue
    md = p.read_text()
    a, b = science_sets(md, prefix)
    for q in a + b:  # strip trailing horizontal rules / whitespace from writer markdown
        q["explanation"] = re.sub(r"\s*(-{3,}\s*)+$", "", q["explanation"]).strip()
        q["prompt"] = re.sub(r"\s*(-{3,}\s*)+$", "", q["prompt"]).strip()
    for label, qs in (("A", a), ("B", b)):
        assert len(qs) == 24, "%s %s: %d" % (fname, label, len(qs))
        for q in qs:
            assert len(q["options"]) == 4 and len({o["text"] for o in q["options"]}) == 4, q["id"]
            assert q["explanation"], q["id"]
    emit_module(OUT / out, export, meta, lesson, a, b)
    d = DOCS / "grade-4"; d.mkdir(parents=True, exist_ok=True)
    (d / doc).write_text(md)
