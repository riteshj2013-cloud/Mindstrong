#!/usr/bin/env python3
"""
Ingest Grade 3 English Chapter 6 Words and Word Power
(sof-english/grade-3/chapter-06-words-word-power.md).

No passage bank. Keeps writer option order. Strips data-* on SVGs.
Usage: python3 scripts/ingest_g3_english_words.py
"""
from __future__ import annotations
import json, re, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, extract_diagram_svg
from ingest_g4_maths_ch06_ch07 import strip_data_attrs

CH = {
    "src": "chapter-06-words-word-power.md",
    "doc": "english-ch06-words.md",
    "out": "g3-english-words.ts",
    "export": "g3EnglishWords",
    "prefix": "g3-eng-words",
    "steps": 7,
    "meta": {
        "id": "words",
        "title": "Words and Word Power",
        "emoji": "🔤",
        "blurb": "Spelling, homophones, punctuation & word partners",
        "topic": "vocabulary",
        "paperTopics": ["vocabulary", "spelling", "punctuation"],
    },
    "hook": (
        "Grow your words",
        "Spelling patterns, sound-alikes, punctuation marks and words that travel together.",
    ),
    "try": {
        "prompt": "Which word is spelled correctly?",
        "options": [
            {"id": "a", "text": "freind"},
            {"id": "b", "text": "friend"},
            {"id": "c", "text": "frend"},
            {"id": "d", "text": "freend"},
        ],
        "answerId": "b",
        "why": "Friend has ie after r. Freind swaps the vowels.",
        "speak": "Which word is spelled correctly?",
    },
    "bullets": [
        "Watch double letters and common spelling patterns",
        "Homophones sound the same but mean different things",
        "Odd one out: find the word that does not belong",
        "Capitals and end marks start and stop sentences",
        "Commas, apostrophes and speech marks have jobs",
        "Some words like to go together (collocations)",
    ],
}

ITEM_SPLIT = re.compile(r"^### ([AB]\d+)\s*$", re.M)
OPT_RE = re.compile(r"^\s*-\s*([A-D])\)\s*(.+?)\s*$", re.M)
FIELD_RE = re.compile(r"^-\s*\*\*([a-zA-Z0-9_]+)\*\*:\s*(.*)$", re.M)


def scrub_trademark(text: str) -> str:
    text = re.sub(r"\bSOF\b", "olympiad-style", text)
    text = re.sub(r"(?i)affiliated with olympiad-style", "not affiliated with any exam board", text)
    return text


def field_map(part: str) -> dict[str, str]:
    return {m.group(1): m.group(2).strip() for m in FIELD_RE.finditer(part)}


def parse_set(block: str, set_letter: str, prefix: str) -> list[dict]:
    parts = ITEM_SPLIT.split(block)
    qs: list[dict] = []
    for i in range(1, len(parts), 2):
        label, body = parts[i], parts[i + 1]
        expect = f"{set_letter.upper()}{len(qs) + 1}"
        assert label == expect, (label, expect)
        fields = field_map(body)
        stem = fields.get("stem") or ""
        hint = fields.get("hint") or ""
        expl = fields.get("explanation") or ""
        ans = (fields.get("answer") or "").strip().upper()
        qid = fields.get("id") or f"{prefix}-{set_letter}-q{len(qs)+1:02d}"
        options = [{"id": m.group(1).lower(), "text": m.group(2).strip()} for m in OPT_RE.finditer(body)]
        assert len(options) == 4 and ans in "ABCD", (qid, len(options), ans)
        qobj = {
            "id": qid,
            "prompt": stem,
            "options": options,
            "answerId": ans.lower(),
            "explanation": expl,
            "hints": [hint] if hint else ["Say each option aloud and pick the one that fits."],
        }
        fig = extract_diagram_svg(body)
        if fig:
            fig["markup"] = strip_data_attrs(fig["markup"])
            assert "data-" not in fig["markup"], qid
            qobj["figure"] = fig
        qs.append(qobj)
    return qs


def lesson_ts(md: str, ch: dict) -> str:
    outline = md.split("## Interactive Lesson Outline")[1].split("## Practice Set A")[0]
    steps = re.findall(r"^### step_(\d+):\s*(.+?)\n([\s\S]*?)(?=^### step_|\Z)", outline, re.M)
    assert len(steps) == ch["steps"], (len(steps), ch["steps"])
    title, line = ch["hook"]
    parts = [{
        "id": "h", "type": "hook", "emoji": ch["meta"]["emoji"], "title": title,
        "body": [line, "Lesson is optional; jump to a set anytime."],
        "cta": "Let's go!", "visual": "none", "speak": line + " Let's go!",
    }]
    for n, stitle, body in steps:
        tts = re.findall(r"^\s+-\s+(.+)$", body.split("- **on_screen**")[0], re.M)
        chk = re.search(r"-\s*\*\*check\*\*:\s*(.+?)\s+—\s+Answer:\s*(.+)", body)
        assert tts and chk, (n, stitle)
        parts.append({
            "id": "s%d" % int(n), "type": "demo", "title": stitle.strip(),
            "steps": tts + ["Check: " + chk.group(1).strip()],
            "punchline": "Answer: " + chk.group(2).strip(),
            "visual": "none", "speak": " ".join(tts),
        })
    t = ch["try"]
    parts.append({
        "id": "t1", "type": "try", "title": "Your turn",
        "prompt": t["prompt"], "options": t["options"],
        "answerId": t["answerId"], "why": t["why"],
        "visual": "none", "speak": t["speak"],
    })
    parts.append({
        "id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!",
        "bullets": ch["bullets"], "cta": "Back to chapter",
        "speak": "You are ready for the practice sets.",
    })
    body = ",\n".join("  " + json.dumps(p, ensure_ascii=False) for p in parts)
    return 'const lesson: ChapterDef["lesson"] = [\n%s,\n];' % body


def main() -> None:
    DOCS.joinpath("grade-3").mkdir(parents=True, exist_ok=True)
    src = ROOT / "sof-english/grade-3" / CH["src"]
    raw = src.read_text(encoding="utf-8")
    assert not re.search(r"\bSOF\b", raw.split("## Interactive Lesson Outline")[1]), "SOF in kid-facing"

    rest = raw.split("## Practice Set A")[1]
    a_block, b_block = rest.split("## Practice Set B")
    set_a = parse_set(a_block, "a", CH["prefix"])
    set_b = parse_set(b_block, "b", CH["prefix"])
    assert len(set_a) == len(set_b) == 24

    for name, qs in (("a", set_a), ("b", set_b)):
        counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
        assert sorted(counts.values()) == [6, 6, 6, 6], (name, counts)
        pic = sum(1 for q in qs if q.get("figure"))
        assert pic == 9, (name, pic)
        print("%s Set %s: %d items, %d pictorial, keys %s" % (
            CH["meta"]["id"], name.upper(), len(qs), pic, counts))

    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(raw, CH), set_a, set_b)
    doc = scrub_trademark(raw)
    if "Writer/editor source only" not in doc:
        doc = doc.replace("## Meta\n", "## Meta\n- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.\n", 1)
    DOCS.joinpath("grade-3", CH["doc"]).write_text(doc, encoding="utf-8")
    print("docs →", CH["doc"])


if __name__ == "__main__":
    main()
