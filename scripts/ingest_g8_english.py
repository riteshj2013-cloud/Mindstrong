#!/usr/bin/env python3
"""Ingest Grade 8 English writer files (grade-8-english/chapter-0N.md).

Usage: python3 scripts/ingest_g8_english.py
Parses Set A / Set B (24 MCQs each, passages prepended to stems) and emits a
5-step interactive lesson (hook, reveal, demo, try, wrap) per chapter.
"""
from pathlib import Path
import json, re, sys
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, eng_sets, emit_module

J = json.dumps

def lesson(hook, cards, demo, try_q, bullets, visual="sentence"):
    cards_ts = ",\n".join('      { label: %s, reveal: %s, emoji: %s }' % (J(a), J(b), J(c)) for a, b, c in cards)
    opts = ",\n".join('      { id: %s, text: %s }' % (J(i), J(t)) for i, t in try_q["options"])
    return '''const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: %s,
    title: %s,
    body: %s,
    cta: "Let's go!",
    visual: %s,
    speak: %s,
  },
  {
    id: "r1",
    type: "reveal",
    title: %s,
    lead: "Tap each card to reveal.",
    visual: %s,
    speak: %s,
    cards: [
%s
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: %s,
    visual: %s,
    speak: %s,
    steps: %s,
    punchline: %s,
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: %s,
    options: [
%s
    ],
    answerId: %s,
    why: %s,
    visual: %s,
    speak: %s,
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: %s,
    bullets: %s,
    cta: "Back to chapter",
    speak: %s,
  },
];''' % (
        J(hook["emoji"]), J(hook["title"]), J(hook["body"] + ["Lesson is optional; jump to a set anytime."]), J(visual), J(hook["speak"]),
        J(hook["reveal_title"]), J(visual), J(hook["reveal_speak"]), cards_ts,
        J(demo["title"]), J(visual), J(demo["speak"]), J(demo["steps"]), J(demo["punchline"]),
        J(try_q["prompt"]), opts, J(try_q["answerId"]), J(try_q["why"]), J(visual), J(try_q["prompt"]),
        J(bullets[0]), J(bullets[1:] + ["Set A and Set B ready — 24 MCQs each"]), J(bullets[0] + " You are ready for the practice sets."),
    )

CHAPTERS = [
  dict(src="chapter-01.md", prefix="g8-eng-ch01", file="g8-english-literature.ts", export="g8EnglishLiterature",
       doc="english-ch01-literature.md",
       meta={"id": "between-the-lines", "title": "Between the Lines", "emoji": "🎭",
             "blurb": "Theme, tone & figurative language", "topic": "comprehension",
             "paperTopics": ["comprehension", "vocabulary"]},
       lesson=lesson(
         dict(emoji="🎭", title="Read like a critic",
              body=["On top is the plot. Underneath are theme, tone and purpose.",
                    "Every claim you make should come from a specific word or phrase."],
              speak="Today we read the way critics and writers read: not just for what happens, but for why it matters.",
              reveal_title="The layers of a text",
              reveal_speak="Tap each card: theme, tone, purpose and figurative language."),
         [("Theme", "The big idea — built from evidence, rarely stated", "💡"),
          ("Tone", "The writer's attitude; word choice is the clue", "🎚️"),
          ("Purpose", "Inform, persuade, entertain or move you", "🎯"),
          ("Figurative language", "Simile, metaphor, personification — deliberate choices", "🪄")],
         dict(title="Decode a sentence",
              speak="The old school bus coughed its way up the hill, complaining at every bend. A bus can't cough, so that's personification. The children sing louder, turning a struggle into a game. The tone is affectionate.",
              steps=["\u201cThe old school bus coughed its way up the hill, complaining at every bend.\u201d",
                     "A bus can't cough or complain → personification (tired, ancient bus)",
                     "Children sing louder → they turn a struggle into a game",
                     "Tone: affectionate, cheerful · Theme: shared joy carries us through"],
              punchline="Not literally true? Ask what it's really saying."),
         dict(prompt="\u201cHer smile was a lighthouse in the storm.\u201d Which figure of speech is this?",
              options=[("a", "Simile"), ("b", "Metaphor"), ("c", "Alliteration"), ("d", "Hyperbole")],
              answerId="b", why="It says her smile *was* a lighthouse — a direct comparison without like/as, so a metaphor."),
         ["Critic's eye unlocked!", "Theme is built from evidence", "Tone lives in word choice",
          "Pick the answer the text supports most fully"])),
  dict(src="chapter-02.md", prefix="g8-eng-ch02", file="g8-english-grammar.ts", export="g8EnglishGrammar",
       doc="english-ch02-grammar.md",
       meta={"id": "grammar-microscope", "title": "Grammar Under the Microscope", "emoji": "🔬",
             "blurb": "Tenses, voice, reported speech & editing", "topic": "grammar",
             "paperTopics": ["grammar", "comprehension"]},
       lesson=lesson(
         dict(emoji="🔬", title="How sentences work",
              body=["Tenses show how actions relate in time.",
                    "Voice, reported speech and modals each change focus or attitude."],
              speak="Today we put grammar under the microscope and look at how sentences actually work, not just at the rules.",
              reveal_title="Four big tools",
              reveal_speak="Tap each card: perfect tenses, voice, reported speech and modals."),
         [("Perfect tenses", "have finished → links past to now; had finished → before another past", "⏳"),
          ("Active / passive", "Doer first vs. action first: \u201cThe bridge was built in 1990\u201d", "🔄"),
          ("Reported speech", "Tense steps back: is → was, will → would", "🗣️"),
          ("Modals", "must, should, might, could — duty, advice, possibility", "🧭")],
         dict(title="Report it step by step",
              speak="Meera said, I have lost my library card. The tense steps back: have lost becomes had lost. I becomes she, my becomes her. Meera said that she had lost her library card.",
              steps=["Meera said, \u201cI have lost my library card.\u201d",
                     "Reporting verb is past → tense steps back: have lost → had lost",
                     "Pronouns shift: I → she, my → her",
                     "Meera said that she had lost her library card."],
              punchline="Universal truths keep the present: \u201cThe Earth is round.\u201d"),
         dict(prompt="Choose the correct verb: \u201cWe ____ for an hour when the bus finally came.\u201d",
              options=[("a", "have waited"), ("b", "had been waiting"), ("c", "are waiting"), ("d", "will wait")],
              answerId="b", why="Past perfect continuous stresses how long an action went on before another past moment."),
         ["Grammar engineer!", "Name the rule before you choose", "Check subject–verb, tense & time words",
          "Watch prepositions in error spotting"])),
  dict(src="chapter-03.md", prefix="g8-eng-ch03", file="g8-english-words.ts", export="g8EnglishWords",
       doc="english-ch03-words.md",
       meta={"id": "right-word-format", "title": "The Right Word, the Right Format", "emoji": "✉️",
             "blurb": "Confusables, idioms, notices & emails", "topic": "vocabulary",
             "paperTopics": ["vocabulary", "idioms-lite", "comprehension"]},
       lesson=lesson(
         dict(emoji="✉️", title="Precision matters",
              body=["Choose exactly the right word — and present it in the right form.",
                    "Match your tone to your reader: that's register."],
              speak="Today is about precision: choosing exactly the right word, and presenting your writing in exactly the right form.",
              reveal_title="Word & format toolkit",
              reveal_speak="Tap each card: near-twins, idioms, one-word substitutes and formats.",
              ),
         [("Near-twins", "affect/effect · principal/principle · stationary/stationery", "👯"),
          ("Idioms & phrasal verbs", "\u201cCall off\u201d = cancel — let context decode", "🧩"),
          ("One-word substitutes", "Cannot be reformed → incorrigible", "🎯"),
          ("Formats", "Notice: body, date, heading, details, name & designation", "📋")],
         dict(title="Fix the register",
              speak="Hey, the school bus is always late, fix it! The message is clear, but the tone is wrong for a principal. Better: I wish to bring to your notice that the school bus on Route 4 has been arriving late.",
              steps=["\u201cHey, the school bus is always late, fix it!\u201d",
                     "Clear message — but it sounds like a command to a friend",
                     "\u201cI wish to bring to your notice that the bus on Route 4 has been arriving late.\u201d",
                     "Same fact, respectful and specific"],
              punchline="Dear Sir or Madam → Yours faithfully · Named reader → Yours sincerely"),
         dict(prompt="The match was ____ because of heavy rain.",
              options=[("a", "called off"), ("b", "called up"), ("c", "called on"), ("d", "called in")],
              answerId="a", why="\u201cCall off\u201d means cancel."),
         ["Precision pro!", "Ask: who is the reader? what is the purpose?", "Near-twins differ by one letter",
          "Each format has a pattern readers expect"])),
]

def run(chapters, src, grade):
  for spec in chapters:
      md = (src / spec["src"]).read_text()
      a, b = eng_sets(md, spec["prefix"])
      for label, qs in (("A", a), ("B", b)):
          assert len(qs) == 24, "%s set %s has %d" % (spec["src"], label, len(qs))
          for q in qs:
              assert q["answerId"] in "abcd" and len(q["options"]) == 4, q["id"]
              assert len({o["text"] for o in q["options"]}) == 4, q["id"]
              assert q["explanation"], q["id"]
      emit_module(OUT / spec["file"], spec["export"], spec["meta"], spec["lesson"], a, b)
      d = DOCS / ("grade-%d" % grade); d.mkdir(parents=True, exist_ok=True)
      (d / spec["doc"]).write_text(md)
  print("done")

if __name__ == "__main__":
    run(CHAPTERS, ROOT / "grade-8-english", 8)
