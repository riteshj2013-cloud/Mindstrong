#!/usr/bin/env python3
from __future__ import annotations
import json, re
from pathlib import Path

ROOT = Path("/workspace/mindstrong")
OUT = Path("/workspace/Mindstrong/lib/prep/content")
DOCS = Path("/workspace/Mindstrong/docs/sof-source")
OUT.mkdir(parents=True, exist_ok=True)

def letter_id(L: str) -> str:
    return L.lower()

def q_to_ts(q: dict) -> str:
    opts = ",\n".join(
        '      { id: %s, text: %s }' % (json.dumps(o["id"]), json.dumps(o["text"]))
        for o in q["options"]
    )
    return (
        "  {\n"
        "    id: %s,\n"
        "    prompt: %s,\n"
        "    options: [\n%s\n    ],\n"
        "    answerId: %s,\n"
        "    explanation: %s,\n"
        "    hints: %s\n"
        "  }"
    ) % (
        json.dumps(q["id"]),
        json.dumps(q["prompt"]),
        opts,
        json.dumps(q["answerId"]),
        json.dumps(q.get("explanation") or ""),
        json.dumps(q.get("hints") or []),
    )


def parse_science_quiz(block: str, id_prefix: str, set_id: str) -> list:
    qs = []
    # Split on ### Qn / ### An / ### Bn / **Qn.**
    parts = re.split(r"^(?:###\s*[QAB]?\d+[^\n]*|\*\*Q\d+\.\*\*)", block, flags=re.M)[1:]
    for i, part in enumerate(parts, 1):
        stem_m = re.search(r"\*\*Stem:\*\*\s*(.+?)(?=\n\*\*Options:|\n\*\*Answer:|\n- [A-D][\)\.]|\n-\s*\*\*Answer:)", part, re.S)
        if not stem_m:
            stem_m = re.search(r"^(?:\s*\*\([^)]*\)\*\s*)?(.+?)(?=\n- [A-D][\)\.])", part, re.S)
        ans_m = re.search(r"(?:-\s*)?\*\*Answer:\*\*\s*([A-D])", part, re.I)
        expl_m = re.search(r"(?:-\s*)?\*\*Explanation:\*\*\s*(.+?)(?=\n\*\*Q|\n###|\n*$)", part, re.S)
        options = []
        opt_block = re.search(r"\*\*Options:\*\*\s*([\s\S]*?)(?=\*\*Answer:|-\s*\*\*Answer:)", part)
        opt_src = opt_block.group(1) if opt_block else part
        for m in re.finditer(r"(?:^|\n)(?:-\s*)?([A-D])[\)\.]\s*(.+)", opt_src):
            options.append({"id": letter_id(m.group(1)), "text": m.group(2).strip()})
        seen=set(); uniq=[]
        for o in options:
            if o["id"] in seen: continue
            seen.add(o["id"]); uniq.append(o)
        options = uniq[:4]
        if not stem_m or not ans_m or len(options) < 4:
            print("  WARN %s %s Q%d incomplete stem=%s ans=%s opts=%d" % (
                id_prefix, set_id, i, bool(stem_m), bool(ans_m), len(options)))
            continue
        qs.append({
            "id": "%s-%s-q%02d" % (id_prefix, set_id, i),
            "prompt": stem_m.group(1).strip(),
            "options": options,
            "answerId": letter_id(ans_m.group(1)),
            "explanation": expl_m.group(1).strip() if expl_m else "",
            "hints": ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
        })
    return qs

def science_sets(md: str, prefix: str):
    chunks = re.split(r"^## Quiz Set ([AB])[^\n]*$", md, flags=re.M)
    bodies = {}
    for i in range(1, len(chunks), 2):
        bodies[chunks[i]] = chunks[i+1] if i+1 < len(chunks) else ""
    if "A" not in bodies or "B" not in bodies:
        raise ValueError("Quiz Set A/B not found for %s keys=%s" % (prefix, list(bodies)))
    return parse_science_quiz(bodies["A"], prefix, "a"), parse_science_quiz(bodies["B"], prefix, "b")

def parse_maths_quiz(block: str, id_prefix: str, set_id: str) -> list:
    qs = []
    parts = re.split(r"^### Q\d+", block, flags=re.M)[1:]
    for i, part in enumerate(parts, 1):
        stem_m = re.search(r"-\s*\*\*stem\*\*:\s*(.+)", part)
        ans_m = re.search(r"-\s*\*\*answer\*\*:\s*([A-D])", part, re.I)
        expl_m = re.search(r"-\s*\*\*explanation\*\*:\s*(.+)", part)
        options = []
        for m in re.finditer(r"-\s*([A-D])\)\s*(.+)", part):
            options.append({"id": letter_id(m.group(1)), "text": m.group(2).strip()})
        if not stem_m or not ans_m or len(options) < 4:
            print("  WARN %s %s Q%d incomplete" % (id_prefix, set_id, i))
            continue
        qs.append({
            "id": "%s-%s-q%02d" % (id_prefix, set_id, i),
            "prompt": stem_m.group(1).strip(),
            "options": options,
            "answerId": letter_id(ans_m.group(1)),
            "explanation": expl_m.group(1).strip() if expl_m else "",
            "hints": ["Read carefully.", "Eliminate impossible options first."],
        })
    return qs

def extract_passage(bank: str, label: str) -> str:
    m = re.search(r"### %s[\s\S]*?\n([\s\S]*?)(?=\n### |\Z)" % re.escape(label), bank)
    if not m:
        return ""
    return re.sub(r"^>\s?", "", m.group(1), flags=re.M).strip()

def parse_english_quiz(block: str, passages: dict, id_prefix: str, set_id: str) -> list:
    qs = []
    parts = re.split(r"^### Q\d+", block, flags=re.M)[1:]
    for i, part in enumerate(parts, 1):
        stem_block = re.search(r"-\s*stem:\s*\|\s*\n((?:[ \t]+.+\n?)+)", part)
        if stem_block:
            lines = stem_block.group(1).split("\n")
            stem = "\n".join(re.sub(r"^[ \t]{2}", "", l).rstrip() for l in lines).strip()
        else:
            sm = re.search(r"-\s*stem:\s*(.+)", part)
            stem = sm.group(1).strip() if sm else ""
        mkey = re.search(r"\b(P[123]|N1|D1|E1|O1)\b", stem[:100])
        if mkey and mkey.group(1) in passages and passages[mkey.group(1)]:
            stem = "%s\n\n%s" % (passages[mkey.group(1)], stem)
        ans_m = re.search(r"-\s*answer:\s*([A-D])", part, re.I)
        expl_block = re.search(r"-\s*explanation:\s*\|\s*\n((?:[ \t]+.+\n?)+)", part)
        if expl_block:
            expl = " ".join(re.sub(r"^[ \t]{2}", "", l).strip() for l in expl_block.group(1).split("\n") if l.strip())
        else:
            em = re.search(r"-\s*explanation:\s*(.+)", part)
            expl = em.group(1).strip() if em else ""
        options = []
        for m in re.finditer(r"-\s*([A-D]):\s*(.+)", part):
            options.append({"id": letter_id(m.group(1)), "text": m.group(2).strip()})
        if not stem or not ans_m or len(options) < 4:
            print("  WARN eng %s %s Q%d incomplete" % (id_prefix, set_id, i))
            continue
        qs.append({
            "id": "%s-%s-q%02d" % (id_prefix, set_id, i),
            "prompt": stem,
            "options": options,
            "answerId": letter_id(ans_m.group(1)),
            "explanation": expl,
            "hints": ["Look for clues in the text.", "Eliminate unsupported answers."],
        })
    return qs

def science_sets(md: str, prefix: str):
    a = parse_science_quiz(md.split("## Quiz Set A")[1].split("## Quiz Set B")[0], prefix, "a")
    b = parse_science_quiz(md.split("## Quiz Set B")[1], prefix, "b")
    return a, b

def maths_sets(md: str, prefix: str):
    rest = md.split("## Practice Set A")[1]
    a_block, b_rest = rest.split("## Practice Set B")
    b_block = b_rest.split("## Answer Key")[0] if "## Answer Key" in b_rest else b_rest
    return parse_maths_quiz(a_block, prefix, "a"), parse_maths_quiz(b_block, prefix, "b")

def eng_sets(md: str, prefix: str):
    bank = md.split("## Passage bank")[1].split("## Set A")[0] if "## Passage bank" in md else ""
    passages = {lab: extract_passage(bank, lab) if bank else "" for lab in ("P1", "P2", "P3", "N1", "D1", "E1", "O1")}
    a = parse_english_quiz(md.split("## Set A")[1].split("## Set B")[0], passages, prefix, "a")
    b = parse_english_quiz(md.split("## Set B")[1], passages, prefix, "b")
    return a, b

def lesson_ts(title, emoji, visual, speak, cards, try_q, bullets):
    cards_ts = ",\n".join(
        '      { label: %s, reveal: %s, emoji: %s }' % (json.dumps(c[0]), json.dumps(c[1]), json.dumps(c[2]))
        for c in cards
    )
    opts = ",\n".join(
        '        { id: %s, text: %s }' % (json.dumps(o[0]), json.dumps(o[1])) for o in try_q["options"]
    )
    return """const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: %s,
    title: %s,
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: %s,
    speak: %s,
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: %s,
    speak: "Tap each card to reveal a key idea.",
    cards: [
%s
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
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
    title: "Nice work!",
    bullets: %s,
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];""" % (
        json.dumps(emoji), json.dumps(title), json.dumps(visual), json.dumps(speak),
        json.dumps(visual), cards_ts,
        json.dumps(try_q["prompt"]), opts, json.dumps(try_q["answerId"]), json.dumps(try_q["why"]),
        json.dumps(visual), json.dumps(try_q["prompt"]), json.dumps(bullets),
    )

def emit_module(path: Path, export_name: str, meta: dict, lesson: str, set_a: list, set_b: list):
    note = "%s - authored SOF content (original)." % meta["title"]
    body = """import type { ChapterDef, PrepQuestion } from "../types";

/** %s */

const SET_A: PrepQuestion[] = [
%s
];

const SET_B: PrepQuestion[] = [
%s
];

%s

export const %s: ChapterDef = {
  id: %s,
  title: %s,
  emoji: %s,
  blurb: %s,
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: %s,
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: %s,
      questions: SET_B,
    },
  ],
  paperTopics: %s,
};

export const %sQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
""" % (
        note,
        ",\n".join(q_to_ts(q) for q in set_a),
        ",\n".join(q_to_ts(q) for q in set_b),
        lesson,
        export_name,
        json.dumps(meta["id"]),
        json.dumps(meta["title"]),
        json.dumps(meta["emoji"]),
        json.dumps(meta["blurb"]),
        json.dumps(meta["topic"]),
        json.dumps(meta["topic"]),
        json.dumps(meta["paperTopics"]),
        export_name,
    )
    path.write_text(body)
    print("Wrote %s A=%d B=%d" % (path.name, len(set_a), len(set_b)))
