#!/usr/bin/env python3
"""
Ingest Grade 3 English Chapter 5 Spoken and Written Expression
(sof-english/grade-3/chapter-05-spoken-and-written-expression.md).

Keeps writer option order (already 6/6/6/6). Inlines Dialogue/notice/message
bank (D1,D2,N1,N2,M1,I1,I2) into stems that name them. Strips data-* on SVGs.
Does NOT call balance_set.

Usage: python3 scripts/ingest_g3_english_expression.py
"""
from __future__ import annotations
import json, re, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections, extract_diagram_svg
from ingest_g4_maths_ch06_ch07 import strip_data_attrs

CH = {
    "src": "chapter-05-spoken-and-written-expression.md",
    "doc": "english-ch05-expression.md",
    "out": "g3-english-expression.ts",
    "export": "g3EnglishExpression",
    "prefix": "g3-eng-expression",
    "steps": 7,
    "meta": {
        "id": "expression",
        "title": "Spoken and Written Expression",
        "emoji": "💬",
        "blurb": "Greetings, polite talk, notes, notices & invitations",
        "topic": "expression",
        "paperTopics": ["spoken", "writing"],
    },
    "hook": (
        "Say it kindly",
        "Greetings, polite asks, short notes and invitations — pick words that fit the moment.",
    ),
    "try": {
        "prompt": "It is 8 p.m. You meet your neighbour at the gate. What do you say?",
        "options": [
            {"id": "a", "text": "Good morning!"},
            {"id": "b", "text": "Good night!"},
            {"id": "c", "text": "Good evening!"},
            {"id": "d", "text": "Happy birthday!"},
        ],
        "answerId": "c",
        "why": "Evening greetings fit after sunset and before bedtime. Good morning is for the start of the day.",
        "speak": "It is 8 p.m. You meet your neighbour at the gate. What do you say?",
    },
    "bullets": [
        "Match the greeting to the time of day",
        "Say who you are clearly on the phone",
        "Ask with please; thank and apologise kindly",
        "Say no without being rude",
        "Notes and notices: who, what, when, where",
        "Choose the reply that fits what was just said",
    ],
}

BANK_LABELS = ("D1", "D2", "N1", "N2", "M1", "I1", "I2")
BANK_HEAD = re.compile(r"^### (" + "|".join(BANK_LABELS) + r")\s*[—–-]\s*(.+?)\s*$", re.M)
ITEM_SPLIT = re.compile(r"^### ([AB]\d+)\s*$", re.M)
OPT_RE = re.compile(r"^\s*-\s*([A-D])\)\s*(.+?)\s*$", re.M)
FIELD_RE = re.compile(r"^-\s*\*\*([a-zA-Z0-9_]+)\*\*:\s*(.*)$", re.M)


def scrub_trademark(text: str) -> str:
    text = re.sub(r"\bSOF\b", "olympiad-style", text)
    text = re.sub(r"(?i)affiliated with olympiad-style", "not affiliated with any exam board", text)
    return text


def parse_bank(md: str) -> dict[str, str]:
    if "## Dialogue, notice and message bank" not in md:
        return {}
    bank = md.split("## Dialogue, notice and message bank")[1].split("## Practice Set A")[0]
    out: dict[str, str] = {}
    parts = BANK_HEAD.split(bank)
    for i in range(1, len(parts), 3):
        lab, title, body = parts[i], parts[i + 1].strip(), parts[i + 2]
        body = re.split(r"^### ", body, maxsplit=1, flags=re.M)[0].strip()
        out[lab] = f"{title}\n\n{body}" if title else body
    return out


def field_map(part: str) -> dict[str, str]:
    return {m.group(1): m.group(2).strip() for m in FIELD_RE.finditer(part)}


def parse_set(block: str, set_letter: str, prefix: str, passages: dict[str, str]) -> list[dict]:
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
        assert len(options) == 4, (qid, len(options))
        assert ans in "ABCD", (qid, ans)
        refs = re.findall(r"\b(" + "|".join(BANK_LABELS) + r")\b", stem)
        prompt = stem
        if refs:
            seen = []
            for r in refs:
                if r not in seen and r in passages:
                    seen.append(r)
            if seen:
                blobs = [f"[{r}] {passages[r]}" for r in seen]
                prompt = "\n\n".join(blobs) + "\n\n" + stem
        qobj = {
            "id": qid,
            "prompt": prompt,
            "options": options,
            "answerId": ans.lower(),
            "explanation": expl,
            "hints": [hint] if hint else ["Think about who is speaking and what fits the moment."],
        }
        fig = extract_diagram_svg(body)
        if fig:
            fig["markup"] = strip_data_attrs(fig["markup"])
            assert "data-" not in fig["markup"], qid
            qobj["figure"] = fig
        qs.append(qobj)
    return qs


def lesson_ts(md: str, ch: dict) -> str:
    outline = md.split("## Interactive Lesson Outline")[1]
    for stop in ("## Dialogue, notice and message bank", "## Passage bank", "## Practice Set A"):
        if stop in outline:
            outline = outline.split(stop)[0]
            break
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
    assert src.exists(), src
    raw = src.read_text(encoding="utf-8")
    assert not re.search(r"\bSOF\b", raw.split("## Interactive Lesson Outline")[1]), "SOF in kid-facing"
    passages = parse_bank(raw)
    assert set(passages) >= set(BANK_LABELS), set(passages.keys())

    rest = raw.split("## Practice Set A")[1]
    a_block, b_block = rest.split("## Practice Set B")
    set_a = parse_set(a_block, "a", CH["prefix"], passages)
    set_b = parse_set(b_block, "b", CH["prefix"], passages)
    assert len(set_a) == len(set_b) == 24

    for name, qs, expect_pic in (("a", set_a, 9), ("b", set_b, 9)):
        counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
        assert sorted(counts.values()) == [6, 6, 6, 6], (name, counts)
        pic = sum(1 for q in qs if q.get("figure"))
        assert pic == expect_pic, (name, pic, expect_pic)
        for q in qs:
            assert q["hints"] and q["explanation"], q["id"]
            assert "data-" not in (q.get("figure") or {}).get("markup", "")
            assert q["id"].startswith(CH["prefix"] + f"-{name}-q"), q["id"]
        print("%s Set %s: %d items, %d pictorial, keys %s" % (
            CH["meta"]["id"], name.upper(), len(qs), pic, counts))

    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(raw, CH), set_a, set_b)

    doc = scrub_trademark(raw)
    if "Writer/editor source only" not in doc:
        doc = doc.replace(
            "## Meta\n",
            "## Meta\n- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.\n",
            1,
        )
    DOCS.joinpath("grade-3", CH["doc"]).write_text(doc, encoding="utf-8")
    print("docs →", CH["doc"])


if __name__ == "__main__":
    main()
