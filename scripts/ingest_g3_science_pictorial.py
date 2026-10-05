#!/usr/bin/env python3
"""
Re-ingest Grade 3 Science Ch1–3 with inline **Diagram (SVG):** pictorial MCQs.
Writer ## Pictorial notes sections are ignored (science_sets only reads Quiz Sets).
Usage: python3 scripts/ingest_g3_science_pictorial.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, science_sets, emit_module, lesson_ts

JOBS = [
  dict(
    fname="chapter-01-plants-parts-and-what-they-do.md",
    prefix="g3-sci-plants", out="g3-science-plants.ts", export="g3SciencePlants",
    doc="science-ch01-plants.md",
    meta={"id":"plants-parts","title":"Plant Parts","emoji":"🌱","blurb":"Roots, stem, leaves & more",
          "topic":"living-things","paperTopics":["living-things","human-body"]},
    lesson=lesson_ts("Plant parts", "🌱", "plant",
      "Plants have roots, stem, leaves, flowers and fruits. Each part has a job.",
      [("Roots","Take up water and hold the plant","🪴"),("Stem","Carries water up","🎋"),
       ("Leaves","Make food with sunlight","🍃"),("Flower & fruit","Help make new plants","🌸")],
      {"prompt":"Which part makes food using sunlight?","options":[("a","Roots"),("b","Leaves"),("c","Flower only"),("d","Bark")],
       "answerId":"b","why":"Leaves catch sunlight to make food."},
      ["Know each plant part", "Leaves make food", "Roots drink water", "Sets ready"]),
  ),
  dict(
    fname="chapter-02-animals-food-and-homes.md",
    prefix="g3-sci-animals", out="g3-science-animals.ts", export="g3ScienceAnimals",
    doc="science-ch02-animals.md",
    meta={"id":"animals-food-homes","title":"Animals: Food & Homes","emoji":"🐾","blurb":"What animals eat and where they live",
          "topic":"living-things","paperTopics":["living-things","human-body"]},
    lesson=lesson_ts("Animals, food and homes", "🐾", "plant",
      "Animals need food and a safe home. Some eat plants, some eat other animals, some eat both.",
      [("Herbivores","Eat plants","🌿"),("Carnivores","Eat other animals","🦁"),
       ("Omnivores","Eat both","🐻"),("Homes","Nests, burrows, dens, hives","🏠")],
      {"prompt":"An animal that eats only plants is a…","options":[("a","Carnivore"),("b","Herbivore"),("c","Omnivore"),("d","Producer")],
       "answerId":"b","why":"Herbivores eat plants."},
      ["Food groups", "Homes keep animals safe", "Match animal to diet", "Sets ready"]),
  ),
  dict(
    fname="chapter-03-our-sense-organs.md",
    prefix="g3-sci-senses", out="g3-science-senses.ts", export="g3ScienceSenses",
    doc="science-ch03-senses.md",
    meta={"id":"sense-organs","title":"Our Sense Organs","emoji":"👁️","blurb":"See, hear, smell, taste, touch",
          "topic":"human-body","paperTopics":["human-body","living-things"]},
    lesson=lesson_ts("Five senses", "👁️", "plant",
      "We learn about the world with five sense organs: eyes, ears, nose, tongue and skin.",
      [("Eyes","Sight","👀"),("Ears","Hearing","👂"),("Nose","Smell","👃"),
       ("Tongue","Taste","👅"),("Skin","Touch","✋")],
      {"prompt":"Which sense organ helps you hear a bell?","options":[("a","Eyes"),("b","Ears"),("c","Nose"),("d","Tongue")],
       "answerId":"b","why":"Ears are for hearing."},
      ["Five senses", "Each organ has a job", "Keep senses safe", "Sets ready"]),
  ),
]


def main():
    src = ROOT / "sof-science/grade-3"
    for job in JOBS:
        p = src / job["fname"]
        if not p.exists():
            print("missing", p); continue
        md = p.read_text()
        a, b = science_sets(md, job["prefix"])
        for q in a + b:
            q["explanation"] = re.sub(r"\s*(-{3,}\s*)+$", "", q["explanation"]).strip()
            q["prompt"] = re.sub(r"\s*(-{3,}\s*)+$", "", q["prompt"]).strip()
        for label, qs in (("A", a), ("B", b)):
            assert len(qs) == 24, "%s %s: %d" % (job["fname"], label, len(qs))
            figs = sum(1 for q in qs if q.get("figure"))
            print("  Set %s: %d qs, %d figures" % (label, len(qs), figs))
            assert figs == 9, "%s Set %s expected 9 figures, got %d" % (job["fname"], label, figs)
            for q in qs:
                assert len(q["options"]) == 4 and len({o["text"] for o in q["options"]}) == 4, q["id"]
                assert q["explanation"], q["id"]
                if q.get("figure"):
                    m = q["figure"]["markup"]
                    assert "<svg" in m.lower() and "<script" not in m.lower()
        emit_module(OUT / job["out"], job["export"], job["meta"], job["lesson"], a, b)
        d = DOCS / "grade-3"; d.mkdir(parents=True, exist_ok=True)
        (d / job["doc"]).write_text(md)
        print("OK", job["prefix"], "→", job["out"])


if __name__ == "__main__":
    main()
