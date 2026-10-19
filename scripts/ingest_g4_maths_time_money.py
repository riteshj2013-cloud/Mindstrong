#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 5 Time and Money (sof-maths/grade-4/chapter-05-time-and-money.md).
Uses ingest_lib (maths_sets → inline **Diagram (SVG):** figures, sanitize_svg, balance_set,
emit_module). Writer hints (- **hint**:) and the 7-step lesson outline are carried over;
Set A/B answers are validated against the Answer Key table, and every figure must keep
aria-label + alt.
Usage: python3 scripts/ingest_g4_maths_time_money.py
"""
from __future__ import annotations
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, maths_sets, emit_module, strip_editorial_sections

SRC = ROOT / "sof-maths/grade-4/chapter-05-time-and-money.md"
PREFIX = "g4-maths-timemoney"
META = {
    "id": "g4-time-money",
    "title": "Time & Money",
    "emoji": "🕒",
    "blurb": "Clocks, calendars, 24-hour time, ₹ and paise",
    "topic": "measurement",
    "paperTopics": ["measurement", "add-sub"],
}
# Reviewer rewrites: the writer hints for these shared no word/number with the stem
# (check-maths-hints no-token); a-q03 spelled out the minutes; same nudge, anchored to the item's own givens.
HINT_OVERRIDES = {
    "a-q07": "Count up from 9:40 a.m. to 10 o'clock first, then add the minutes after 10 until the lesson ended.",
    "a-q10": "Count up from ₹64 to the next ten, then on to ₹100. Add the two jumps.",
    "a-q12": "Split at 12 noon: count from 10:30 a.m. to noon, then from noon to 7:15 p.m., and add the parts.",
    "a-q18": "Add the pen and notebook prices first. Then count up from that total to ₹50.",
    "a-q03": "For a p.m. time, add 12 to the hour. How many minutes make a quarter of an hour?",
    "a-q19": "To find the longest time, change every choice into seconds first. Each minute is 60 seconds.",
}
VISUAL = {1: "none", 2: "number-line", 3: "number-line", 4: "none", 5: "none", 6: "none", 7: "none"}


def raw_items(md: str, set_name: str) -> list[dict]:
    """Per-question writer fields the shared parser does not keep (hint, answer)."""
    rest = md.split("## Practice Set A")[1]
    a, b = rest.split("## Practice Set B")
    b = b.split("## Answer Key")[0]
    block = a if set_name == "a" else b
    out = []
    for part in re.split(r"^### Q\d+", block, flags=re.M)[1:]:
        h = re.search(r"-\s*\*\*hint\*\*:\s*(.+)", part)
        ans = re.search(r"-\s*\*\*answer\*\*:\s*([A-D])", part)
        out.append({"hint": h.group(1).strip() if h else None, "answer": ans.group(1) if ans else None})
    return out


def answer_key(md: str, set_name: str) -> list[str]:
    key = md.split("## Answer Key")[1]
    sec = key.split("### Set A")[1].split("### Set B")[0] if set_name == "a" else key.split("### Set B")[1]
    return re.findall(r"^\|\s*Q\d+\s*\|[^|]*\|\s*([A-D])\s*\|", sec, re.M)


def lesson_ts(md: str) -> str:
    outline = md.split("## Interactive Lesson Outline")[1].split("## Practice Set A")[0]
    steps = re.findall(r"^### step_(\d+):\s*(.+?)\n([\s\S]*?)(?=^### step_|\Z)", outline, re.M)
    assert len(steps) == 7, len(steps)
    parts = [{
        "id": "h", "type": "hook", "emoji": "🕒", "title": "Time and money every day",
        "body": [
            "Clocks, calendars, bus timetables and shop bills all use the maths in this chapter.",
            "Lesson is optional; jump to a set anytime.",
        ],
        "cta": "Let's go!", "visual": "none",
        "speak": "Clocks, calendars, bus timetables and shop bills all use the maths in this chapter. Let's go!",
    }]
    for n, title, body in steps:
        n = int(n)
        tts = re.findall(r"^\s+-\s+(.+)$", body.split("- **on_screen**")[0], re.M)
        chk = re.search(r"-\s*\*\*check\*\*:\s*(.+?)\s+—\s+Answer:\s*(.+)", body)
        assert tts and chk, (n, title)
        parts.append({
            "id": "s%d" % n, "type": "demo", "title": title.strip(),
            "steps": tts + ["Check: " + chk.group(1).strip()],
            "punchline": "Answer: " + chk.group(2).strip(),
            "visual": VISUAL[n], "speak": " ".join(tts),
        })
    parts.append({
        "id": "t1", "type": "try", "title": "Your turn",
        "prompt": "A bill is ₹68 and you pay with a ₹100 note. How much change do you get?",
        "options": [{"id": "a", "text": "₹42"}, {"id": "b", "text": "₹32"}, {"id": "c", "text": "₹38"}, {"id": "d", "text": "₹168"}],
        "answerId": "b",
        "why": "Count up: ₹68 to ₹70 is ₹2, and ₹70 to ₹100 is ₹30, so the change is ₹32.",
        "visual": "none",
        "speak": "A bill is sixty-eight rupees and you pay with a hundred-rupee note. How much change do you get?",
    })
    parts.append({
        "id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!",
        "bullets": ["Short hand = hour, long hand = minutes", "p.m. → add 12 for 24-hour time",
                    "Count up through the full hour", "Same weekday every 7 days", "₹1 = 100 paise"],
        "cta": "Back to chapter", "speak": "You are ready for the practice sets.",
    })
    body = ",\n".join("  " + json.dumps(p, ensure_ascii=False) for p in parts)
    return 'const lesson: ChapterDef["lesson"] = [\n%s,\n];' % body


def main() -> None:
    md = strip_editorial_sections(SRC.read_text(encoding="utf-8"))
    set_a, set_b = maths_sets(md, PREFIX)
    for name, qs in (("a", set_a), ("b", set_b)):
        raws, key = raw_items(md, name), answer_key(md, name)
        assert len(qs) == len(raws) == len(key) == 24, (name, len(qs), len(raws), len(key))
        for q, r, k in zip(qs, raws, key):
            assert r["answer"] == k, (q["id"], r["answer"], k)
            assert r["hint"], q["id"]
            q["hints"] = [HINT_OVERRIDES.get(q["id"].split(PREFIX + "-")[1], r["hint"])]
            fig = q.get("figure")
            if fig:
                assert fig.get("alt"), q["id"]
                assert re.search(r'aria-label="[^"]+"', fig["markup"]), q["id"]
        counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
        assert max(counts.values()) * 2 <= len(qs), counts
        print("Set %s: %d items, %d pictorial, keys %s" % (name.upper(), len(qs), sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / "g4-maths-time-money.ts", "g4MathsTimeMoney", META, lesson_ts(md), set_a, set_b)
    DOCS.joinpath("grade-4").mkdir(parents=True, exist_ok=True)
    DOCS.joinpath("grade-4/maths-ch05-time-and-money.md").write_text(SRC.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
