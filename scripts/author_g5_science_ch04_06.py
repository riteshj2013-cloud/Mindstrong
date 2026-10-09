#!/usr/bin/env python3
"""Author Grade 5 Science Ch4–6 (Matter, Force & Machines, Environment).

Writes docs/sof-source/grade-5/science-ch0{4,5,6}-*.md, emits
lib/prep/content/g5-science-{matter,force,environment}.ts, and prints
hint overlay entries for g5-science.ts.

Usage: python3 scripts/author_g5_science_ch04_06.py
"""
from __future__ import annotations
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import DOCS, OUT, lesson_ts, emit_module, sanitize_svg

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

STYLE_MAT = """
.part { fill:#dbeafe; stroke:#333; stroke-width:2; }
.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
.arrow { stroke:#333; stroke-width:1.5; fill:none; }
.badge { fill:#fff; stroke:#333; stroke-width:1.5; }
.glass { fill:none; stroke:#333; stroke-width:2; }
.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }
.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }
.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }
.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }
.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }
.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }
.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }
.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }
.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }
""".strip()

STYLE_FORCE = """
.part { fill:#fde68a; stroke:#333; stroke-width:2; }
.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }
.badge { fill:#fff; stroke:#333; stroke-width:1.5; }
.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }
.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }
.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }
.rope { fill:none; stroke:#78716c; stroke-width:2.5; }
.fulcrum { fill:#444; }
.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }
.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }
""".strip()

STYLE_ENV = """
.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }
.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }
.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }
.arrow { stroke:#333; stroke-width:1.5; fill:none; }
.badge { fill:#fff; stroke:#333; stroke-width:1.5; }
.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }
.trunk { fill:#92400e; stroke:#333; stroke-width:1; }
.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }
.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }
.smoke { fill:#94a3b8; opacity:0.7; }
.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }
.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }
.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }
""".strip()


def svg(aria: str, body: str, style: str) -> str:
    raw = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" '
        f'aria-label="{aria}">'
        f"<style>{style}</style>"
        f'<rect x="0" y="0" width="320" height="220" fill="#ffffff"/>'
        f"{body}</svg>"
    )
    return sanitize_svg(raw)


def fig(aria: str, body: str, style: str) -> dict:
    return {"type": "svg", "markup": svg(aria, body, style), "alt": aria}


def Q(prompt, opts, ans, expl, hint, figure=None):
    """opts = [A,B,C,D] texts; ans = 'A'|'B'|'C'|'D'."""
    assert ans in "ABCD" and len(opts) == 4
    assert len(set(opts)) == 4, opts
    return {
        "prompt": prompt,
        "options": [{"id": letter.lower(), "text": t} for letter, t in zip("ABCD", opts)],
        "answerId": ans.lower(),
        "explanation": expl,
        "hint": hint,
        "figure": figure,
    }


def balance_ok(qs, label):
    counts = {c: 0 for c in "abcd"}
    for q in qs:
        counts[q["answerId"]] += 1
    if counts != {c: 6 for c in "abcd"}:
        raise SystemExit(f"{label} answer balance {counts} (need 6 each)")


def to_ingest_qs(qs, prefix, set_id):
    out = []
    for i, q in enumerate(qs, 1):
        item = {
            "id": f"{prefix}-{set_id}-q{i:02d}",
            "prompt": q["prompt"],
            "options": q["options"],
            "answerId": q["answerId"],
            "explanation": q["explanation"],
            "hints": ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
        }
        if q.get("figure"):
            item["figure"] = q["figure"]
        out.append(item)
    return out


def write_md(path: Path, title: str, grade_meta: dict, objectives: list, scenes: list,
             pict_notes: str, set_a, set_b, style_name: str):
    lines = [f"# {title}", "", "## Meta"]
    for k, v in grade_meta.items():
        lines.append(f"- {k}: {v}")
    lines += ["", "## Pictorial notes", pict_notes, "", "## Learning objectives"]
    for o in objectives:
        lines.append(f"- {o}")
    lines += ["", "## Interactive lesson outline"]
    for i, sc in enumerate(scenes, 1):
        lines += [f"", f"### Scene {i}: {sc['title']}",
                  f"- **Visual:** {sc['visual']}",
                  f"- **TTS:** {sc['tts']}",
                  f"- **Interaction:** {sc['interaction']}"]
    for set_name, qs in (("Quiz Set A", set_a), ("Quiz Set B", set_b)):
        lines += ["", f"## {set_name}"]
        for i, q in enumerate(qs, 1):
            pict = " · Pictorial" if q.get("figure") else ""
            lines.append(f"### Q{i}{pict}")
            if q.get("figure"):
                lines.append("**Diagram (SVG):**")
                lines.append(q["figure"]["markup"])
            lines.append(f"**Stem:** {q['prompt']}")
            lines.append("**Options:**")
            for o in q["options"]:
                lines.append(f"{o['id'].upper()}) {o['text']}")
            lines.append(f"**Answer:** {q['answerId'].upper()}")
            lines.append(f"**Explanation:** {q['explanation']}")
            lines.append("")
    path.write_text("\n".join(lines) + "\n")
    print("Wrote", path)


def hints_map(qs_a, qs_b, prefix):
    m = {}
    for set_id, qs in (("a", qs_a), ("b", qs_b)):
        for i, q in enumerate(qs, 1):
            m[f"{prefix}-{set_id}-q{i:02d}"] = [q["hint"]]
    return m


# ===========================================================================
# Ch4 Matter & Materials
# ===========================================================================

def ch4_figures():
    f = {}
    f["solute"] = fig(
        "Three beakers: P clear water, Q salt dissolving with spoon, R muddy water settling",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Three beakers</text>
  <rect class="glass" x="20" y="50" width="70" height="110"/>
  <rect class="water" x="22" y="80" width="66" height="78"/>
  <text class="label" x="55" y="185" text-anchor="middle">P</text>
  <rect class="glass" x="125" y="50" width="70" height="110"/>
  <rect class="water" x="127" y="80" width="66" height="78"/>
  <circle cx="150" cy="100" r="3" fill="#fff"/><circle cx="170" cy="120" r="3" fill="#fff"/>
  <circle cx="155" cy="140" r="3" fill="#fff"/>
  <line class="arrow" x1="195" y1="70" x2="180" y2="95"/>
  <text class="small" x="210" y="68">stir</text>
  <text class="label" x="160" y="185" text-anchor="middle">Q</text>
  <rect class="glass" x="230" y="50" width="70" height="110"/>
  <rect class="water" x="232" y="80" width="66" height="78"/>
  <ellipse cx="265" cy="145" rx="28" ry="10" fill="#a16207" opacity="0.6"/>
  <text class="label" x="265" y="185" text-anchor="middle">R</text>
  <text class="small" x="160" y="210" text-anchor="middle">P clear · Q dissolving · R muddy</text>
''', STYLE_MAT)
    f["trans"] = fig(
        "Three sheets labelled P Q R: clear glass, frosted glass, cardboard blocking a lamp",
        '''
  <text class="label" x="160" y="22" text-anchor="middle">Lamp shining through sheets</text>
  <circle class="sun" cx="40" cy="110" r="14"/>
  <line class="arrow" x1="56" y1="110" x2="90" y2="110"/>
  <rect class="part" x="95" y="60" width="40" height="100" fill="#e0f2fe" opacity="0.5"/>
  <text class="label" x="115" y="185" text-anchor="middle">P</text>
  <rect class="part" x="155" y="60" width="40" height="100" fill="#cbd5e1" opacity="0.7"/>
  <text class="label" x="175" y="185" text-anchor="middle">Q</text>
  <rect class="wood" x="215" y="60" width="40" height="100"/>
  <text class="label" x="235" y="185" text-anchor="middle">R</text>
  <text class="small" x="280" y="110">?</text>
  <text class="small" x="160" y="210" text-anchor="middle">Which sheet is opaque?</text>
''', STYLE_MAT)
    f["filter"] = fig(
        "Funnel with filter paper over a beaker; muddy mixture poured in; clear liquid below",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Separation setup</text>
  <path d="M120,40 L160,100 L200,40" class="glass"/>
  <path d="M130,50 Q160,90 190,50" fill="#d6b48a" opacity="0.5"/>
  <ellipse cx="160" cy="48" rx="45" ry="8" fill="#a16207" opacity="0.4"/>
  <rect class="glass" x="120" y="110" width="80" height="70"/>
  <rect class="water" x="122" y="140" width="76" height="38"/>
  <text class="small" x="160" y="200" text-anchor="middle">Clear liquid collects below</text>
''', STYLE_MAT)
    f["conduct"] = fig(
        "Circuit with battery, bulb, and gap X where different rods can be placed",
        '''
  <text class="label" x="160" y="22" text-anchor="middle">Test circuit — gap X</text>
  <rect class="metal" x="40" y="90" width="50" height="30" rx="4"/>
  <text class="small" x="65" y="110" text-anchor="middle">battery</text>
  <line class="arrow" x1="90" y1="105" x2="130" y2="105"/>
  <circle cx="160" cy="105" r="18" fill="#fef08a" stroke="#333" stroke-width="2"/>
  <text class="small" x="160" y="109" text-anchor="middle">bulb</text>
  <line class="arrow" x1="178" y1="105" x2="210" y2="105"/>
  <rect class="dash" x="215" y="90" width="50" height="30"/>
  <text class="label" x="240" y="110" text-anchor="middle">X</text>
  <line class="arrow" x1="240" y1="120" x2="240" y2="150"/>
  <line class="arrow" x1="240" y1="150" x2="65" y2="150"/>
  <line class="arrow" x1="65" y1="150" x2="65" y2="120"/>
  <text class="small" x="160" y="200" text-anchor="middle">Place a rod in gap X</text>
''', STYLE_MAT)
    f["sink"] = fig(
        "Tank of water with four objects: cork floating, iron nail sinking, plastic bottle floating, stone sinking — labelled P Q R S",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Objects in a water tank</text>
  <rect class="glass" x="30" y="40" width="260" height="140"/>
  <rect class="water" x="32" y="70" width="256" height="108"/>
  <ellipse class="wood" cx="80" cy="85" rx="22" ry="12"/>
  <circle class="badge" cx="80" cy="55" r="10"/><text class="label" x="80" y="60" text-anchor="middle">P</text>
  <rect class="metal" x="140" y="155" width="30" height="8"/>
  <circle class="badge" cx="155" cy="140" r="10"/><text class="label" x="155" y="145" text-anchor="middle">Q</text>
  <ellipse cx="220" cy="90" rx="18" ry="14" fill="#fda4af" stroke="#333" stroke-width="1.5"/>
  <circle class="badge" cx="220" cy="55" r="10"/><text class="label" x="220" y="60" text-anchor="middle">R</text>
  <ellipse cx="270" cy="160" rx="16" ry="12" fill="#78716c" stroke="#333" stroke-width="1.5"/>
  <circle class="badge" cx="270" cy="130" r="10"/><text class="label" x="270" y="135" text-anchor="middle">S</text>
''', STYLE_MAT)
    f["states"] = fig(
        "Arrow diagram: ice cube to water to steam with labels 1 and 2 on the arrows",
        '''
  <text class="label" x="160" y="22" text-anchor="middle">Change of state</text>
  <rect class="part" x="30" y="80" width="50" height="50" fill="#e0f2fe" stroke="#0369a1"/>
  <text class="small" x="55" y="150" text-anchor="middle">ice</text>
  <line class="arrow" x1="90" y1="105" x2="130" y2="105"/>
  <circle class="badge" cx="110" cy="90" r="10"/><text class="label" x="110" y="95" text-anchor="middle">1</text>
  <rect class="water" x="140" y="90" width="50" height="40"/>
  <rect class="glass" x="140" y="70" width="50" height="70"/>
  <text class="small" x="165" y="160" text-anchor="middle">water</text>
  <line class="arrow" x1="200" y1="105" x2="240" y2="105"/>
  <circle class="badge" cx="220" cy="90" r="10"/><text class="label" x="220" y="95" text-anchor="middle">2</text>
  <circle cx="270" cy="80" r="4" fill="#64748b"/><circle cx="285" cy="95" r="4" fill="#64748b"/>
  <circle cx="275" cy="110" r="4" fill="#64748b"/><circle cx="290" cy="70" r="3" fill="#64748b"/>
  <text class="small" x="280" y="150" text-anchor="middle">steam</text>
''', STYLE_MAT)
    return f


def build_ch4():
    F = ch4_figures()
    H_prop = "Match the material to the property asked (hard, flexible, transparent, soluble)."
    H_sep = "Name the separation method: sieving, filtration, sedimentation, evaporation, or magnet."
    H_cond = "Metals usually conduct heat and electricity; wood, plastic and rubber usually do not."
    H_float = "Compare density with water: denser objects sink; less dense ones float."
    H_change = "Ask whether you can get the starting material back easily (reversible) or not."
    H_state = "Melting, freezing, evaporation and condensation are changes of state."
    H_use = "Choose the material whose property fits the job."
    H_mix = "A mixture keeps each part's properties; dissolving sugar in water is still a mixture."

    set_a = [
        Q("Anything that takes up space and has mass is called —",
          ["energy", "matter", "force", "light"], "B",
          "Matter is anything that takes up space and has mass. Solids, liquids and gases are all matter.", H_prop),
        Q("Which of these is a property of most metals?",
          ["They are usually good conductors of heat", "They are always transparent", "They dissolve in water easily", "They never bend"], "A",
          "Most metals conduct heat (and electricity) well. Transparency and easy dissolving are not metal properties.", H_cond),
        Q("Look at the three sheets in front of a lamp. Which letter shows an opaque sheet that blocks nearly all light?",
          ["P", "Q", "R", "Both P and Q"], "C",
          "R is cardboard, an opaque material. Light does not pass through it. P (clear glass) is transparent; Q (frosted) is translucent.",
          H_prop, F["trans"]),
        Q("A material that lets almost all light pass through clearly is called —",
          ["opaque", "translucent", "transparent", "magnetic"], "C",
          "Transparent materials (clear glass, clean water) let light pass so you can see through them clearly.", H_prop),
        Q("Salt disappears when stirred into water, but you can taste it. The salt has —",
          ["vanished forever", "dissolved", "frozen", "evaporated"], "B",
          "Salt dissolves in water. The particles spread out so you cannot see them, but the salt is still there.", H_mix),
        Q("Which beaker best shows a solute dissolving in a solvent?",
          ["P", "Q", "R", "None of them"], "B",
          "Beaker Q shows salt being stirred into water — dissolving. P is already clear water; R is muddy water settling.",
          H_mix, F["solute"]),
        Q("Wood is often used for the handles of cooking pans because wood —",
          ["conducts heat very well", "is a poor conductor of heat", "melts at a low temperature", "dissolves in soup"], "B",
          "Wood is a poor heat conductor (an insulator), so the handle stays cooler than a metal handle would.", H_cond),
        Q("Which object in the tank is most likely an iron nail that sinks?",
          ["P", "Q", "R", "Both P and R"], "B",
          "Q is the small metal bar at the bottom — like an iron nail, it is denser than water so it sinks. P and R float.",
          H_float, F["sink"]),
        Q("Rubber is used for the soles of shoes mainly because it is —",
          ["transparent and brittle", "flexible and gives good grip", "magnetic", "soluble in rainwater"], "B",
          "Rubber bends and grips the floor, which helps you walk safely without slipping.", H_use),
        Q("Which separation method does the picture show?",
          ["Sieving", "Filtration", "Magnetic separation", "Handpicking"], "B",
          "A funnel with filter paper lets liquid through and traps solid bits — that is filtration.",
          H_sep, F["filter"]),
        Q("To separate iron nails from a heap of sand quickly, the best method is —",
          ["filtration", "a magnet", "evaporation", "using a sieve with large holes only"], "B",
          "Iron is magnetic, so a magnet pulls the nails out of the sand. Filtration needs a liquid mixture.", H_sep),
        Q("Sand does not dissolve in water. After stirring and waiting, sand settles at the bottom. This settling is called —",
          ["evaporation", "condensation", "sedimentation", "melting"], "C",
          "Sedimentation is when heavier undissolved particles settle down. You can then pour off the clear water (decantation).", H_sep),
        Q("In the change-of-state diagram, arrow 1 (ice → water) shows —",
          ["freezing", "melting", "condensation", "burning"], "B",
          "Ice changing to liquid water is melting. Freezing is the reverse; condensation makes liquid from vapour.",
          H_state, F["states"]),
        Q("Wet clothes dry on a sunny line mainly because water —",
          ["freezes into ice", "evaporates into the air", "turns into salt", "filters through the cloth"], "B",
          "Heat from the Sun helps water change into water vapour and mix with air — evaporation.", H_state),
        Q("Which change is usually irreversible in everyday life?",
          ["Melting ice", "Freezing water", "Burning paper", "Dissolving sugar (then evaporating water)"], "C",
          "Burning paper makes ash and smoke; you cannot get the paper back. Melting and freezing are reversible.", H_change),
        Q("A plastic raincoat is useful in the rain because plastic is —",
          ["waterproof", "magnetic", "a good heat conductor", "soluble"], "A",
          "Plastic does not let water soak through easily, so it keeps you dry.", H_use),
        Q("Which material is best for making a window pane you can see through?",
          ["Wood", "Clear glass", "Cardboard", "Rubber"], "B",
          "Clear glass is transparent, so light passes through and you can see outside.", H_prop),
        Q("In the test circuit, which rod placed in gap X will most likely make the bulb light?",
          ["A wooden stick", "A plastic comb", "A copper wire", "A rubber band"], "C",
          "Copper is a metal and a good electrical conductor, so it completes the circuit. Wood, plastic and rubber are insulators.",
          H_cond, F["conduct"]),
        Q("Sugar mixed into water is best called a —",
          ["pure element", "mixture (solution)", "new metal", "gas only"], "B",
          "Dissolved sugar and water form a solution, which is a type of mixture. You can separate them by evaporating the water.", H_mix),
        Q("Which property makes aluminium useful for making light cooking pots?",
          ["It is denser than lead", "It is a good conductor of heat and fairly light", "It is opaque to magnets only", "It dissolves in oil"], "B",
          "Aluminium conducts heat well for cooking and is lighter than many other metals.", H_use),
        Q("Sieving is the best first step to separate —",
          ["salt from seawater", "pebbles from flour", "ink from water", "iron from copper wire"], "B",
          "A sieve lets fine flour fall through and keeps larger pebbles. Salt needs evaporation; metals need other methods.", H_sep),
        Q("A translucent material —",
          ["blocks all light", "lets some light through but not a clear view", "is always a metal", "must be magnetic"], "B",
          "Frosted glass and tracing paper are translucent: light passes, but you cannot see sharp details through them.", H_prop),
        Q("Which statement about gases is true?",
          ["They have a fixed shape and volume", "They have a fixed volume but no shape", "They have neither fixed shape nor fixed volume", "They cannot be matter"], "C",
          "Gases spread to fill their container. They have no fixed shape or volume of their own.", H_state),
        Q("Why are electric wires coated with plastic?",
          ["Plastic makes the wire magnetic", "Plastic is an electrical insulator and safer to touch", "Plastic helps electricity flow faster", "Plastic dissolves dirt on the wire"], "B",
          "Plastic is an insulator. The coating stops current from escaping and protects people from shocks.", H_cond),
    ]
    # answers A: check balance - B,A,C,C,B,B,B,B,B,B,B,C,B,B,C,A,B,C,B,B,B,B,C,B
    # That's too many B! Need to rebalance.

    # Let me rebuild set_a with explicit balanced answers
    set_a = [
        # 6A, 6B, 6C, 6D
        Q("Anything that takes up space and has mass is called —",
          ["matter", "energy", "force", "light"], "A",
          "Matter is anything that takes up space and has mass. Solids, liquids and gases are all matter.", H_prop),
        Q("Which of these is a property of most metals?",
          ["They are usually good conductors of heat", "They are always transparent", "They dissolve in water easily", "They never bend"], "A",
          "Most metals conduct heat (and electricity) well. Transparency and easy dissolving are not metal properties.", H_cond),
        Q("Look at the three sheets in front of a lamp. Which letter shows an opaque sheet that blocks nearly all light?",
          ["R", "P", "Q", "Both P and Q"], "A",
          "R is cardboard, an opaque material. Light does not pass through it. P (clear glass) is transparent; Q (frosted) is translucent.",
          H_prop, F["trans"]),
        Q("A material that lets almost all light pass through clearly is called —",
          ["transparent", "opaque", "translucent", "magnetic"], "A",
          "Transparent materials (clear glass, clean water) let light pass so you can see through them clearly.", H_prop),
        Q("Salt disappears when stirred into water, but you can taste it. The salt has —",
          ["dissolved", "vanished forever", "frozen", "evaporated"], "A",
          "Salt dissolves in water. The particles spread out so you cannot see them, but the salt is still there.", H_mix),
        Q("Which beaker best shows a solute dissolving in a solvent?",
          ["Q", "P", "R", "None of them"], "A",
          "Beaker Q shows salt being stirred into water — dissolving. P is already clear water; R is muddy water settling.",
          H_mix, F["solute"]),
        Q("Wood is often used for the handles of cooking pans because wood —",
          ["conducts heat very well", "is a poor conductor of heat", "melts at a low temperature", "dissolves in soup"], "B",
          "Wood is a poor heat conductor (an insulator), so the handle stays cooler than a metal handle would.", H_cond),
        Q("Which object in the tank is most likely an iron nail that sinks?",
          ["P", "Q", "R", "Both P and R"], "B",
          "Q is the small metal bar at the bottom — like an iron nail, it is denser than water so it sinks. P and R float.",
          H_float, F["sink"]),
        Q("Rubber is used for the soles of shoes mainly because it is —",
          ["transparent and brittle", "flexible and gives good grip", "magnetic", "soluble in rainwater"], "B",
          "Rubber bends and grips the floor, which helps you walk safely without slipping.", H_use),
        Q("Which separation method does the picture show?",
          ["Sieving", "Filtration", "Magnetic separation", "Handpicking"], "B",
          "A funnel with filter paper lets liquid through and traps solid bits — that is filtration.",
          H_sep, F["filter"]),
        Q("To separate iron nails from a heap of sand quickly, the best method is —",
          ["filtration", "a magnet", "evaporation", "using only a large-hole sieve"], "B",
          "Iron is magnetic, so a magnet pulls the nails out of the sand. Filtration needs a liquid mixture.", H_sep),
        Q("Sand does not dissolve in water. After stirring and waiting, sand settles at the bottom. This settling is called —",
          ["evaporation", "sedimentation", "condensation", "melting"], "B",
          "Sedimentation is when heavier undissolved particles settle down. You can then pour off the clear water (decantation).", H_sep),
        Q("In the change-of-state diagram, arrow 1 (ice → water) shows —",
          ["freezing", "burning", "melting", "condensation"], "C",
          "Ice changing to liquid water is melting. Freezing is the reverse; condensation makes liquid from vapour.",
          H_state, F["states"]),
        Q("Wet clothes dry on a sunny line mainly because water —",
          ["freezes into ice", "turns into salt", "evaporates into the air", "filters through the cloth"], "C",
          "Heat from the Sun helps water change into water vapour and mix with air — evaporation.", H_state),
        Q("Which change is usually irreversible in everyday life?",
          ["Melting ice", "Freezing water", "Burning paper", "Dissolving sugar then evaporating water"], "C",
          "Burning paper makes ash and smoke; you cannot get the paper back. Melting and freezing are reversible.", H_change),
        Q("A plastic raincoat is useful in the rain because plastic is —",
          ["magnetic", "a good heat conductor", "waterproof", "soluble"], "C",
          "Plastic does not let water soak through easily, so it keeps you dry.", H_use),
        Q("Which material is best for making a window pane you can see through?",
          ["Wood", "Cardboard", "Clear glass", "Rubber"], "C",
          "Clear glass is transparent, so light passes through and you can see outside.", H_prop),
        Q("In the test circuit, which rod placed in gap X will most likely make the bulb light?",
          ["A wooden stick", "A plastic comb", "A copper wire", "A rubber band"], "C",
          "Copper is a metal and a good electrical conductor, so it completes the circuit. Wood, plastic and rubber are insulators.",
          H_cond, F["conduct"]),
        Q("Sugar mixed into water is best called a —",
          ["pure element", "new metal", "gas only", "mixture (solution)"], "D",
          "Dissolved sugar and water form a solution, which is a type of mixture. You can separate them by evaporating the water.", H_mix),
        Q("Which property makes aluminium useful for making light cooking pots?",
          ["It is denser than lead", "It is opaque to magnets only", "It dissolves in oil", "It is a good conductor of heat and fairly light"], "D",
          "Aluminium conducts heat well for cooking and is lighter than many other metals.", H_use),
        Q("Sieving is the best first step to separate —",
          ["salt from seawater", "ink from water", "iron from copper wire", "pebbles from flour"], "D",
          "A sieve lets fine flour fall through and keeps larger pebbles. Salt needs evaporation; metals need other methods.", H_sep),
        Q("A translucent material —",
          ["blocks all light", "is always a metal", "must be magnetic", "lets some light through but not a clear view"], "D",
          "Frosted glass and tracing paper are translucent: light passes, but you cannot see sharp details through them.", H_prop),
        Q("Which statement about gases is true?",
          ["They have a fixed shape and volume", "They have a fixed volume but no shape", "They cannot be matter", "They have neither fixed shape nor fixed volume"], "D",
          "Gases spread to fill their container. They have no fixed shape or volume of their own.", H_state),
        Q("Why are electric wires coated with plastic?",
          ["Plastic makes the wire magnetic", "Plastic helps electricity flow faster", "Plastic dissolves dirt on the wire", "Plastic is an electrical insulator and safer to touch"], "D",
          "Plastic is an insulator. The coating stops current from escaping and protects people from shocks.", H_cond),
    ]
    balance_ok(set_a, "ch4 A")

    set_b = [
        Q("Which everyday object is made mainly because the material is flexible?",
          ["A rubber band", "A glass window", "A ceramic plate", "A stone step"], "A",
          "Rubber bands stretch and bend without breaking. Glass, ceramic and stone are much more rigid.", H_prop),
        Q("To get salt from seawater, people often use —",
          ["evaporation", "a magnet", "sieving alone", "filtration of dry salt"], "A",
          "When seawater evaporates, water leaves as vapour and salt crystals remain.", H_sep),
        Q("Which material is the best electrical insulator for a plug cover?",
          ["Plastic", "Copper", "Aluminium", "Iron"], "A",
          "Plastic does not let current pass easily, so it is safer for covers. Copper, aluminium and iron conduct.", H_cond),
        Q("Oil floats on water mainly because oil is —",
          ["less dense than water", "heavier than steel", "magnetic", "transparent only"], "A",
          "Less dense liquids float on denser ones. Oil is less dense than water, so it stays on top.", H_float),
        Q("Crushing a chalk stick into powder is —",
          ["a physical change of form", "burning", "a new plant growing", "condensation"], "A",
          "The chalk is still chalk — only the size and shape changed. No new substance formed.", H_change),
        Q("Which pair are both good heat conductors?",
          ["Copper and iron", "Wood and plastic", "Rubber and wool", "Paper and cork"], "A",
          "Copper and iron are metals that conduct heat well. Wood, plastic, rubber, wool, paper and cork are poor conductors.", H_cond),
        Q("Muddy river water left still in a jar becomes clearer at the top because of —",
          ["magnetic force", "sedimentation", "melting", "photosynthesis"], "B",
          "Soil particles settle to the bottom (sedimentation), leaving clearer water above.", H_sep),
        Q("Which change of state is condensation?",
          ["Ice → water", "Water vapour → liquid water", "Water → ice", "Wood → ash"], "B",
          "Condensation is gas (vapour) turning into liquid, like drops on a cold glass.", H_state),
        Q("A mixture of pebbles and sand is best first separated by —",
          ["evaporation", "sieving", "a magnet", "burning"], "B",
          "Different sized solid pieces are separated with a sieve. Magnets need iron; evaporation needs a dissolved solid.", H_sep),
        Q("Why is glass used for spectacle lenses?",
          ["It is opaque", "It can be transparent and shaped to bend light", "It is magnetic", "It dissolves in tears"], "B",
          "Clear glass (or plastic) lets light through and can be curved to help focus light for clearer vision.", H_use),
        Q("Which is a reversible change?",
          ["Cooking an egg hard", "Melting chocolate and letting it set again", "Burning wood", "Rusting of iron"], "B",
          "Melted chocolate can cool and become solid again. Cooking, burning and rusting make new substances that are hard to reverse.", H_change),
        Q("In the lamp-and-sheets picture, sheet P (clear) is best described as —",
          ["opaque", "transparent", "magnetic", "soluble"], "B",
          "Clear glass lets nearly all light through with a clear view, so it is transparent.",
          H_prop, F["trans"]),
        Q("Which method separates a dissolved solid from water after filtration is not needed?",
          ["Handpicking", "Sieving", "Evaporation", "Using a magnet on sugar"], "C",
          "Heating or leaving the solution lets water evaporate; the dissolved solid remains.", H_sep),
        Q("A sponge soaks up water because it is —",
          ["magnetic", "opaque only", "porous (has tiny spaces)", "a pure metal"], "C",
          "Porous materials have tiny holes that can hold liquid. That is why a sponge absorbs water.", H_prop),
        Q("Which object would float in the water tank like cork (P)?",
          ["A steel marble", "An iron key", "A piece of thermocol", "A glass bead denser than water"], "C",
          "Thermocol (foam) is much less dense than water, so it floats like cork (P).",
          H_float, F["sink"]),
        Q("Metals are often shiny when polished. This shine is called —",
          ["transparency", "solubility", "metallic lustre", "friction"], "C",
          "The characteristic shine of metals is called metallic lustre.", H_prop),
        Q("Which is the best reason to choose steel for a bridge beam?",
          ["Steel is transparent", "Steel dissolves slowly in air", "Steel is strong and hard", "Steel is soft like rubber"], "C",
          "Bridges need materials that are strong and hard so they can support heavy loads.", H_use),
        Q("Arrow 2 in the ice → water → steam diagram shows —",
          ["freezing", "melting", "evaporation (or boiling to steam)", "sedimentation"], "C",
          "Liquid water becoming steam is evaporation (or boiling). That is arrow 2.",
          H_state, F["states"]),
        Q("Which material should NOT be used for the body of a toaster's outer case if you want it cooler to touch?",
          ["Thick plastic with insulation", "Wood-look insulated cover", "Ceramic with a cool handle design", "Bare thin copper sheet"], "D",
          "Bare copper conducts heat well, so the case could get very hot. Insulators stay cooler.", H_cond),
        Q("Filtration cannot separate —",
          ["tea leaves from tea", "sand from muddy water", "chalk powder from water", "salt already dissolved in water"], "D",
          "Dissolved salt particles pass through filter paper with the water. You need evaporation to get the salt back.", H_sep),
        Q("Which is an opaque material?",
          ["Clean air", "Clear plastic wrap", "Clean water in a glass", "A wooden door"], "D",
          "A wooden door blocks light. Air, clear wrap and clean water let light through.", H_prop),
        Q("Mixing iron filings and sulphur powder (without heating) makes —",
          ["a new single atom", "pure water", "only a gas", "a mixture that a magnet can still pull iron from"], "D",
          "Without a chemical reaction, iron and sulphur stay a mixture. A magnet can still attract the iron filings.", H_mix),
        Q("Why do we use cotton or wool clothes in winter?",
          ["They are good heat conductors", "They dissolve sweat instantly into salt", "They are magnetic heaters", "They trap air and act as heat insulators"], "D",
          "Air trapped in fluffy fibres slows heat loss from the body, so you stay warmer.", H_use),
        Q("Which process gets pure water vapour to leave a salt solution?",
          ["Magnetic separation", "Sieving", "Sedimentation of salt crystals first", "Evaporation"], "D",
          "Evaporation turns liquid water into vapour, leaving salt behind.", H_sep),
    ]
    balance_ok(set_b, "ch4 B")
    return set_a, set_b


# ===========================================================================
# Ch5 Force & Simple Machines (G5 level — no P=F/A formulas)
# ===========================================================================

def ch5_figures():
    f = {}
    f["lever"] = fig(
        "A see-saw lever: load on left, fulcrum triangle in middle marked F, effort on right marked E",
        '''
  <text class="label" x="160" y="22" text-anchor="middle">See-saw (lever)</text>
  <rect class="wood" x="40" y="100" width="240" height="12"/>
  <polygon class="fulcrum" points="160,112 145,160 175,160"/>
  <circle class="badge" cx="160" cy="175" r="10"/><text class="label" x="160" y="180" text-anchor="middle">F</text>
  <rect class="part" x="50" y="70" width="36" height="28"/>
  <text class="small" x="68" y="90" text-anchor="middle">load</text>
  <line class="arrow" x1="250" y1="70" x2="250" y2="95"/>
  <circle class="badge" cx="250" cy="55" r="10"/><text class="label" x="250" y="60" text-anchor="middle">E</text>
  <text class="small" x="250" y="85" text-anchor="middle">effort</text>
  <text class="small" x="160" y="210" text-anchor="middle">F = fulcrum</text>
''', STYLE_FORCE)
    f["pulley"] = fig(
        "A single fixed pulley on a beam with rope over wheel; load hanging on one side, hand pulling other side",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Fixed pulley</text>
  <rect class="wood" x="60" y="30" width="200" height="12"/>
  <circle class="metal" cx="160" cy="70" r="22"/>
  <circle cx="160" cy="70" r="6" fill="#444"/>
  <path class="rope" d="M160,48 Q160,40 160,30"/>
  <path class="rope" d="M138,70 L138,160"/>
  <path class="rope" d="M182,70 L182,140"/>
  <rect class="part" x="120" y="160" width="36" height="28"/>
  <text class="small" x="138" y="205" text-anchor="middle">load</text>
  <line class="arrow" x1="182" y1="150" x2="182" y2="175"/>
  <text class="small" x="210" y="180">pull</text>
''', STYLE_FORCE)
    f["incline"] = fig(
        "A box being pushed up a long gentle ramp versus a steep short cliff path labelled P and Q",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Two ways to a platform</text>
  <rect class="wood" x="20" y="160" width="80" height="12"/>
  <rect class="wood" x="220" y="50" width="80" height="12"/>
  <line class="arrow" x1="100" y1="160" x2="220" y2="62"/>
  <text class="label" x="150" y="140">P</text>
  <line class="dash" x1="60" y1="160" x2="60" y2="62"/>
  <line class="dash" x1="60" y1="62" x2="220" y2="62"/>
  <text class="label" x="40" y="110">Q</text>
  <rect class="part" x="130" y="100" width="28" height="22"/>
  <text class="small" x="160" y="200" text-anchor="middle">P ramp · Q straight up</text>
''', STYLE_FORCE)
    f["wheel"] = fig(
        "A cart with two wheels and axle carrying a box, next to a box being dragged without wheels",
        '''
  <text class="label" x="160" y="22" text-anchor="middle">Moving a heavy box</text>
  <rect class="wood" x="40" y="100" width="90" height="40"/>
  <circle class="metal" cx="60" cy="150" r="14"/>
  <circle class="metal" cx="110" cy="150" r="14"/>
  <line class="arrow" x1="140" y1="120" x2="170" y2="120"/>
  <text class="small" x="90" y="90" text-anchor="middle">with wheels</text>
  <rect class="part" x="200" y="120" width="70" height="40"/>
  <line class="dash" x1="200" y1="165" x2="270" y2="165"/>
  <text class="small" x="235" y="110" text-anchor="middle">dragging</text>
  <text class="small" x="160" y="200" text-anchor="middle">Wheels reduce friction</text>
''', STYLE_FORCE)
    f["forces"] = fig(
        "Four mini scenes labelled P Q R S: ball kicked, ball rolling into grass slowing, clay squashed, magnet pulling pin",
        '''
  <text class="label" x="160" y="18" text-anchor="middle">What is happening?</text>
  <rect class="card" x="15" y="35" width="140" height="75"/>
  <circle class="part" cx="50" cy="75" r="12"/>
  <line class="arrow" x1="70" y1="75" x2="120" y2="75"/>
  <text class="label" x="30" y="55">P</text>
  <text class="small" x="85" y="100" text-anchor="middle">kick starts motion</text>
  <rect class="card" x="165" y="35" width="140" height="75"/>
  <circle class="part" cx="200" cy="75" r="12"/>
  <line class="dash" x1="220" y1="75" x2="280" y2="75"/>
  <text class="label" x="180" y="55">Q</text>
  <text class="small" x="235" y="100" text-anchor="middle">slows on grass</text>
  <rect class="card" x="15" y="120" width="140" height="75"/>
  <ellipse class="part" cx="80" cy="160" rx="30" ry="14"/>
  <text class="label" x="30" y="140">R</text>
  <text class="small" x="80" y="185" text-anchor="middle">clay flattened</text>
  <rect class="card" x="165" y="120" width="140" height="75"/>
  <rect class="metal" x="200" y="145" width="30" height="14"/>
  <line class="arrow" x1="250" y1="152" x2="235" y2="152"/>
  <circle cx="260" cy="152" r="6" fill="#aaa" stroke="#333"/>
  <text class="label" x="180" y="140">S</text>
  <text class="small" x="235" y="185" text-anchor="middle">magnet pulls pin</text>
''', STYLE_FORCE)
    f["wedge"] = fig(
        "An axe head wedge splitting a log, labelled W on the triangular blade",
        '''
  <text class="label" x="160" y="22" text-anchor="middle">Splitting a log</text>
  <rect class="wood" x="60" y="80" width="200" height="80"/>
  <line class="dash" x1="160" y1="80" x2="160" y2="160"/>
  <polygon class="metal" points="160,70 130,130 190,130"/>
  <circle class="badge" cx="160" cy="50" r="10"/><text class="label" x="160" y="55" text-anchor="middle">W</text>
  <text class="small" x="160" y="200" text-anchor="middle">W = wedge-shaped blade</text>
''', STYLE_FORCE)
    return f


def build_ch5():
    F = ch5_figures()
    H_force = "A force is a push or a pull; it can start, stop, speed up, slow, turn, or reshape."
    H_fric = "Friction opposes sliding; rough surfaces mean more friction; useful for grip, not for free sliding."
    H_grav = "Gravity pulls objects toward Earth; magnets can pull some metals without touching."
    H_lever = "A lever has a fulcrum, load and effort — think see-saw, crowbar, scissors."
    H_mach = "Simple machines help us use force more easily: lever, pulley, ramp, wheel, screw, wedge."
    H_pulley = "A fixed pulley mainly changes the direction of your pull (pull down to lift up)."
    H_ramp = "An inclined plane (ramp) lets you use a smaller force over a longer distance."
    H_wheel = "A wheel and axle reduce friction so loads roll instead of scrape."

    set_a = [
        Q("In science, a force is best described as —",
          ["a push or a pull", "only a colour change", "only a loud sound", "the mass of an object"], "A",
          "A force is any push or pull. Mass measures how much matter an object has; it is not a force.", H_force),
        Q("Which labelled scene shows friction slowing a moving ball?",
          ["Q", "P", "R", "S"], "A",
          "In Q the ball rolls into grass and slows — friction opposes the motion. P starts motion; R changes shape; S is magnetic pull.",
          H_fric, F["forces"]),
        Q("Earth pulls a falling mango downward. This force is called —",
          ["gravity", "friction only", "magnetism only", "sound"], "A",
          "Gravity is the pull of Earth on objects. It acts even when nothing is touching the mango.", H_grav),
        Q("A simple machine that is a stiff bar turning about a fixed point is a —",
          ["lever", "screw only", "wheel without an axle", "electric motor"], "A",
          "A lever is a rigid bar that turns about a fulcrum. See-saws and crowbars are levers.", H_lever),
        Q("On the see-saw diagram, the letter F marks the —",
          ["fulcrum", "effort force only", "load only", "pulley wheel"], "A",
          "F is the triangle support — the fulcrum — the fixed turning point of the lever.",
          H_lever, F["lever"]),
        Q("Which everyday tool is a pair of levers working together?",
          ["Scissors", "A slide ramp alone", "A screw lid alone", "A magnet"], "A",
          "Scissors have two lever arms sharing a fulcrum at the pivot screw.", H_lever),
        Q("A ball at rest starts moving when kicked. The kick —",
          ["removes all gravity", "applies a force that starts motion", "changes the ball's mass", "is not a force"], "B",
          "Forces can start motion. The kick pushes the ball; mass stays the same and gravity still acts.", H_force),
        Q("We rub our hands together to feel warmth. The force opposing the rubbing is —",
          ["gravity alone", "friction", "magnetism alone", "a pulley force"], "B",
          "Friction between the palms opposes the sliding and can produce heat.", H_fric),
        Q("A fixed pulley is useful mainly because it —",
          ["removes the load's weight forever", "lets you change the direction of your pull", "creates energy from nothing", "stops gravity on Earth"], "B",
          "With a fixed pulley you often pull down on the rope to lift a load up — direction changes.",
          H_pulley, F["pulley"]),
        Q("Path P (the long ramp) compared with path Q (straight up) usually needs —",
          ["a larger force over a shorter path", "a smaller force over a longer path", "zero force", "magnetic force only"], "B",
          "An inclined plane spreads the work: smaller effort, longer distance.",
          H_ramp, F["incline"]),
        Q("Which force can act without touching the object?",
          ["Friction between shoe and floor", "The pull of a magnet on a nearby iron pin", "Pushing a door with your hand", "Dragging a box on sand"], "B",
          "Magnetism (and gravity) can act at a distance. Friction and muscular pushes need contact.", H_grav),
        Q("Shoes with rough soles help you walk on slippery tiles because they —",
          ["remove gravity", "increase friction for better grip", "make you weigh less", "turn you into a magnet"], "B",
          "Rougher soles raise friction so your feet do not slide as easily.", H_fric),
        Q("The triangular blade W splitting the log is acting as a —",
          ["pulley", "wheel and axle", "wedge", "see-saw fulcrum only"], "C",
          "A wedge is thick at one end and thin at the other. It forces materials apart when driven in.",
          H_mach, F["wedge"]),
        Q("A screw is best thought of as —",
          ["a magnet with threads", "a pulley made of wood", "an inclined plane wrapped around a rod", "a lever with no fulcrum"], "C",
          "The thread of a screw is like a ramp wound around a cylinder — a type of inclined plane.", H_mach),
        Q("Which machine helps the cart move more easily than dragging the box?",
          ["A wedge only", "A see-saw only", "A wheel and axle", "A screw lid only"], "C",
          "Wheels on an axle let the load roll, which needs less force than sliding the box.",
          H_wheel, F["wheel"]),
        Q("When you press soft clay and it flattens, the force has —",
          ["changed only the colour of gravity", "removed all friction forever", "changed the shape of the clay", "created a new planet"], "C",
          "Forces can change shape as well as motion. Squashing clay is a shape change (scene R).",
          H_force, F["forces"]),
        Q("Oiling a bicycle chain usually —",
          ["increases friction on purpose", "increases the bike's mass a lot", "reduces friction so parts move more easily", "turns the chain into a lever"], "C",
          "Lubricants reduce friction between moving parts so they do not scrape and wear as much.", H_fric),
        Q("The load on a lever is —",
          ["always the fulcrum pin", "the effort you apply only", "the object you want to move or lift", "never needed"], "C",
          "Load means the weight or resistance you are trying to move. Effort is the force you apply.", H_lever),
        Q("Which example is an inclined plane?",
          ["A see-saw", "A flagpole pulley", "Scissors", "A sloping ramp into a truck"], "D",
          "A ramp is a classic inclined plane. See-saws and scissors are levers; flagpoles often use pulleys.", H_ramp),
        Q("A door knob is a simple machine closest to a —",
          ["wedge splitting wood", "fixed pulley on a well", "lever see-saw only", "wheel and axle"], "D",
          "Turning the knob (wheel) turns a shaft (axle) that pulls the latch — wheel and axle.", H_wheel),
        Q("Which statement is true?",
          ["Forces cannot change direction of motion", "Friction always helps sliding with zero grip needed", "Magnets attract all plastics", "A force can change an object's speed or direction"], "D",
          "Forces can speed up, slow down, or turn objects. Magnets do not attract ordinary plastics.", H_force),
        Q("Why do we use a crowbar to lift a heavy lid?",
          ["It removes the lid's mass", "It creates energy", "It stops gravity", "It is a lever that helps a smaller effort move a larger load"], "D",
          "With the fulcrum placed well, a crowbar multiplies your effort so a heavy lid becomes easier to lift.", H_lever),
        Q("Smooth ice is slippery mainly because there is —",
          ["extra magnetism", "extra gravity only", "more sand friction", "very little friction"], "D",
          "Low friction means surfaces slide easily. That is why ice feels slippery.", H_fric),
        Q("Which is NOT a simple machine in this chapter's usual list?",
          ["Lever", "Pulley", "Inclined plane", "Smartphone battery"], "D",
          "Levers, pulleys, ramps, wheels, screws and wedges are simple machines. A battery is an energy source, not a simple machine.", H_mach),
    ]
    balance_ok(set_a, "ch5 A")

    set_b = [
        Q("Pushing a shopping trolley is an example of —",
          ["a contact force from your muscles", "gravity disappearing", "friction vanishing forever", "a non-force event"], "A",
          "Your muscles push the trolley while touching it — a contact force (muscular force).", H_force),
        Q("Which scene shows a force changing shape?",
          ["R", "P", "Q", "S"], "A",
          "R shows clay flattened by a push — shape change. P starts motion; Q is friction slowing; S is magnetism.",
          H_force, F["forces"]),
        Q("A magnet pulling an iron pin from a short distance is —",
          ["a non-contact force", "friction only", "a type of sound", "only possible underwater"], "A",
          "Magnetic force can act without touching. Friction needs surfaces in contact.", H_grav),
        Q("The fixed point about which a lever turns is the —",
          ["fulcrum", "load only", "effort only", "wedge tip"], "A",
          "Fulcrum means the support or pivot. Load is what you move; effort is what you apply.", H_lever),
        Q("Pulling down on a fixed-pulley rope to raise a flag is useful because —",
          ["you can apply effort in a convenient direction", "the flag loses all weight", "friction becomes infinite", "gravity reverses"], "A",
          "Fixed pulleys mainly redirect force so you can pull in a comfortable direction.",
          H_pulley, F["pulley"]),
        Q("Which surface usually gives the most friction for a sliding wooden block?",
          ["Rough sandpaper", "Smooth ice", "Oiled glass", "A polished metal sheet with oil"], "A",
          "Rough surfaces raise friction. Ice, oil and polish make sliding easier (less friction).", H_fric),
        Q("An axe head is a wedge. Wedges help us —",
          ["store electricity", "split or cut materials by forcing them apart", "measure temperature", "make magnets"], "B",
          "The thin edge enters a crack and the thicker part pushes sides apart — splitting or cutting.",
          H_mach, F["wedge"]),
        Q("Compared with lifting a box straight up (Q), pushing it along ramp P usually means —",
          ["harder force, shorter path only", "easier force along a longer path", "the box becomes weightless", "no simple machine is used"], "B",
          "Ramps trade a longer distance for a smaller needed push.",
          H_ramp, F["incline"]),
        Q("Which pair is a wheel-and-axle system?",
          ["See-saw plank and pivot only", "Bicycle wheel turning with its axle", "Filter paper and funnel", "Salt dissolving in water"], "B",
          "The wheel turns with a central axle. That rolling setup is a wheel and axle.", H_wheel),
        Q("Friction can be helpful when —",
          ["you want a greased axle to seize", "you need to walk without slipping", "you want a slide to never stop a child", "you oil a lock to jam it"], "B",
          "Friction gives grip for walking and holding objects. We reduce it when we want smooth spinning.", H_fric),
        Q("On the see-saw, E stands for —",
          ["the Earth only", "the effort (the push or pull you apply)", "the electric current", "the empty space"], "B",
          "Effort is the force applied to work the lever. F is fulcrum; the other end holds the load.",
          H_lever, F["lever"]),
        Q("A force can NOT —",
          ["start motion", "change an object's mass by itself in these examples", "change direction", "change shape"], "B",
          "Everyday pushes and pulls change motion or shape. They do not create or destroy the object's mass.", H_force),
        Q("Why do heavy suitcases often have wheels?",
          ["Wheels increase the suitcase's weight", "Wheels remove gravity", "Rolling needs less force than dragging", "Wheels are wedges"], "C",
          "Rolling on wheels reduces the effect of friction compared with sliding the whole case on the ground.",
          H_wheel, F["wheel"]),
        Q("Which simple machine is a staircase most like?",
          ["A magnet", "A pulley", "An inclined plane (made of steps)", "A see-saw fulcrum alone"], "C",
          "Stairs raise you gradually, like a ramp divided into steps — an inclined plane idea.", H_ramp),
        Q("A ball rolling on grass slows down mainly because of —",
          ["magnetism from the Moon", "extra gravity only at night", "friction", "the ball losing its mass"], "C",
          "Grass rubs against the ball and opposes motion — friction.", H_fric),
        Q("Which tool uses a screw?",
          ["A plain flat ruler", "A see-saw plank", "A jar lid with threads", "A rubber balloon alone"], "C",
          "Threaded lids and screws wind an inclined plane around a cylinder.", H_mach),
        Q("Two teams pull a rope equally hard in opposite directions. The rope —",
          ["must fly upward", "must double its mass", "may stay still if forces balance", "creates a magnet"], "C",
          "Equal and opposite forces can cancel, so the rope may not move (net force zero).", H_force),
        Q("A crowbar lifting a stone is mainly a —",
          ["pulley", "wheel without axle", "lever", "transparent material test"], "C",
          "The bar turns about a fulcrum to move the stone — a lever.", H_lever),
        Q("Which action reduces friction on purpose?",
          ["Spreading sand on icy steps", "Using rubber mats in a bath", "Wearing grippy sports shoes", "Putting oil on a stiff hinge"], "D",
          "Oil lubricates the hinge so parts slide more easily. The other choices increase grip.", H_fric),
        Q("Simple machines help us mainly by —",
          ["destroying energy completely", "removing the need for any force ever", "increasing an object's mass", "making tasks easier with a helpful force or direction"], "D",
          "Machines do not create energy from nothing; they help us apply forces more usefully.", H_mach),
        Q("Which force pulls you toward the ground when you jump?",
          ["Friction of your socks only", "Magnetism of your shoes only", "Air colour", "Gravity"], "D",
          "Gravity pulls objects toward Earth, so jumpers come back down.", H_grav),
        Q("In the pulley picture, the wheel at the top is there to —",
          ["heat the rope", "dissolve the load", "measure time", "guide the rope and change pull direction"], "D",
          "The grooved wheel lets the rope run smoothly while you pull one side to lift the other.",
          H_pulley, F["pulley"]),
        Q("A bottle opener lifting a metal cap is acting chiefly as a —",
          ["magnet separator", "measuring cylinder", "water filter", "lever"], "D",
          "You push down on one end; the opener pivots and lifts the cap — lever action.", H_lever),
        Q("Which statement about friction is correct?",
          ["Friction never happens on Earth", "Friction always pulls upward against gravity only", "Friction attracts iron like a magnet", "Friction can produce heat when surfaces rub"], "D",
          "Rubbing surfaces oppose motion and can warm up — both are friction effects.", H_fric),
    ]
    balance_ok(set_b, "ch5 B")
    return set_a, set_b


# ===========================================================================
# Ch6 Our Environment / Natural Resources
# ===========================================================================

def ch6_figures():
    f = {}
    f["resources"] = fig(
        "Four cards labelled P Q R S: sun, coal lump, tree, flowing river",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Natural resources</text>
  <rect class="card" x="20" y="40" width="130" height="70"/>
  <circle class="sun" cx="55" cy="75" r="16"/>
  <text class="label" x="100" y="80">P</text>
  <text class="small" x="85" y="100" text-anchor="middle">sunlight</text>
  <rect class="card" x="170" y="40" width="130" height="70"/>
  <ellipse cx="210" cy="75" rx="20" ry="14" fill="#444" stroke="#111"/>
  <text class="label" x="255" y="80">Q</text>
  <text class="small" x="235" y="100" text-anchor="middle">coal</text>
  <rect class="card" x="20" y="125" width="130" height="70"/>
  <rect class="trunk" x="55" y="155" width="10" height="25"/>
  <ellipse class="tree" cx="60" cy="150" rx="22" ry="16"/>
  <text class="label" x="110" y="165">R</text>
  <text class="small" x="85" y="185" text-anchor="middle">forest tree</text>
  <rect class="card" x="170" y="125" width="130" height="70"/>
  <path class="water" d="M190,155 Q210,145 230,155 Q250,165 270,150" fill="none" stroke="#2563eb" stroke-width="4"/>
  <text class="label" x="255" y="175">S</text>
  <text class="small" x="235" y="190" text-anchor="middle">river</text>
''', STYLE_ENV)
    f["pollute"] = fig(
        "Factory with smoke stacks beside a river; fish symbol with X; labels A air smoke and B dirty water pipe",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Pollution scene</text>
  <rect x="40" y="80" width="90" height="70" fill="#94a3b8" stroke="#333"/>
  <rect x="55" y="50" width="12" height="30" fill="#64748b" stroke="#333"/>
  <rect x="90" y="45" width="12" height="35" fill="#64748b" stroke="#333"/>
  <ellipse class="smoke" cx="61" cy="35" rx="14" ry="10"/>
  <ellipse class="smoke" cx="96" cy="28" rx="16" ry="12"/>
  <circle class="badge" cx="70" cy="25" r="10"/><text class="label" x="70" y="30" text-anchor="middle">A</text>
  <rect class="water" x="160" y="130" width="140" height="40"/>
  <path d="M130,120 L160,140" stroke="#78716c" stroke-width="6"/>
  <circle class="badge" cx="145" cy="115" r="10"/><text class="label" x="145" y="120" text-anchor="middle">B</text>
  <text class="small" x="230" y="155" text-anchor="middle">river</text>
  <text class="small" x="230" y="185" text-anchor="middle">fish in trouble</text>
''', STYLE_ENV)
    f["rr"] = fig(
        "Three bins labelled 1 2 3 with icons: smaller use arrow, reuse bag, recycle arrows",
        '''
  <text class="label" x="160" y="22" text-anchor="middle">Three green habits</text>
  <rect class="card" x="20" y="50" width="85" height="120"/>
  <text class="label" x="62" y="80" text-anchor="middle">1</text>
  <text class="small" x="62" y="110" text-anchor="middle">use less</text>
  <text class="small" x="62" y="130" text-anchor="middle">(reduce)</text>
  <rect class="card" x="117" y="50" width="85" height="120"/>
  <text class="label" x="160" y="80" text-anchor="middle">2</text>
  <text class="small" x="160" y="110" text-anchor="middle">use again</text>
  <text class="small" x="160" y="130" text-anchor="middle">(reuse)</text>
  <rect class="card" x="215" y="50" width="85" height="120"/>
  <text class="label" x="257" y="80" text-anchor="middle">3</text>
  <text class="small" x="257" y="110" text-anchor="middle">make new</text>
  <text class="small" x="257" y="130" text-anchor="middle">(recycle)</text>
  <text class="small" x="160" y="200" text-anchor="middle">Which number is recycle?</text>
''', STYLE_ENV)
    f["forest"] = fig(
        "Split scene: left healthy forest with many trees, right bare hill with stumps labelled Deforested",
        '''
  <text class="label" x="160" y="18" text-anchor="middle">Two hillsides</text>
  <line class="dash" x1="160" y1="30" x2="160" y2="200"/>
  <rect class="trunk" x="50" y="120" width="10" height="40"/>
  <ellipse class="tree" cx="55" cy="115" rx="20" ry="18"/>
  <rect class="trunk" x="90" y="130" width="10" height="40"/>
  <ellipse class="tree" cx="95" cy="125" rx="18" ry="16"/>
  <rect class="trunk" x="30" y="140" width="10" height="35"/>
  <ellipse class="tree" cx="35" cy="135" rx="16" ry="14"/>
  <text class="small" x="70" y="200" text-anchor="middle">P forest</text>
  <rect class="trunk" x="200" y="150" width="12" height="12"/>
  <rect class="trunk" x="240" y="155" width="12" height="10"/>
  <rect class="trunk" x="280" y="148" width="12" height="14"/>
  <path d="M180,170 Q240,160 310,175" fill="none" stroke="#a16207" stroke-width="3"/>
  <text class="small" x="250" y="200" text-anchor="middle">Q cleared</text>
''', STYLE_ENV)
    f["energy"] = fig(
        "Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Energy sources</text>
  <rect class="card" x="15" y="45" width="90" height="130"/>
  <rect x="30" y="70" width="60" height="40" fill="#1e3a8a" stroke="#333"/>
  <line x1="30" y1="90" x2="90" y2="90" stroke="#93c5fd"/>
  <line x1="60" y1="70" x2="60" y2="110" stroke="#93c5fd"/>
  <circle class="sun" cx="60" cy="55" r="8"/>
  <text class="label" x="60" y="150" text-anchor="middle">P</text>
  <text class="small" x="60" y="165" text-anchor="middle">solar</text>
  <rect class="card" x="115" y="45" width="90" height="130"/>
  <line x1="160" y1="160" x2="160" y2="80" stroke="#333" stroke-width="3"/>
  <polygon points="160,80 140,100 180,100" fill="#94a3b8" stroke="#333"/>
  <text class="label" x="160" y="150" text-anchor="middle">Q</text>
  <text class="small" x="160" y="165" text-anchor="middle">wind</text>
  <rect class="card" x="215" y="45" width="90" height="130"/>
  <rect x="240" y="100" width="40" height="50" fill="#78716c" stroke="#333"/>
  <rect x="255" y="70" width="10" height="30" fill="#444" stroke="#333"/>
  <ellipse class="smoke" cx="260" cy="55" rx="14" ry="10"/>
  <text class="label" x="260" y="165" text-anchor="middle">R</text>
  <text class="small" x="260" y="180" text-anchor="middle">coal</text>
''', STYLE_ENV)
    f["water"] = fig(
        "Water cycle style: sun, vapour arrows up from lake, cloud, rain down to land",
        '''
  <text class="label" x="160" y="20" text-anchor="middle">Water on the move</text>
  <circle class="sun" cx="50" cy="50" r="16"/>
  <rect class="water" x="40" y="150" width="100" height="40"/>
  <text class="small" x="90" y="175" text-anchor="middle">lake</text>
  <path class="arrow" d="M90,145 Q90,100 120,70"/>
  <text class="small" x="70" y="100">1</text>
  <ellipse cx="180" cy="55" rx="40" ry="20" fill="#cbd5e1" stroke="#333"/>
  <text class="small" x="180" y="60" text-anchor="middle">cloud</text>
  <line class="arrow" x1="200" y1="75" x2="220" y2="120"/>
  <line class="arrow" x1="190" y1="75" x2="200" y2="120"/>
  <text class="small" x="230" y="100">2</text>
  <rect class="soil" x="200" y="150" width="90" height="40"/>
  <text class="small" x="245" y="175" text-anchor="middle">land</text>
''', STYLE_ENV)
    return f


def build_ch6():
    F = ch6_figures()
    H_res = "Natural resources come from nature: air, water, soil, forests, minerals, fuels."
    H_ren = "Renewable resources can be replaced in a human lifetime; non-renewable take millions of years."
    H_pol = "Pollution is harmful waste in air, water, soil or as noise — link source to type."
    H_con = "Conserve by using wisely: reduce, reuse, recycle; save water and electricity; plant trees."
    H_for = "Forests give oxygen, homes for wildlife, soil hold, and rain help — cutting too many harms us."
    H_en = "Sun, wind and flowing water are cleaner renewables; coal and petroleum are fossil fuels."
    H_3r = "Reduce = use less; reuse = use again; recycle = remake into new products."
    H_soil = "Soil, water and air support life; protect them from waste and overuse."

    set_a = [
        Q("Things we get from nature and use are called —",
          ["natural resources", "only plastic toys", "artificial gravity", "exam papers"], "A",
          "Natural resources include air, water, soil, forests, minerals and fuels that come from nature.", H_res),
        Q("In the resource cards, which letter shows a non-renewable fossil fuel?",
          ["Q", "P", "R", "S"], "A",
          "Q is coal, a fossil fuel that takes millions of years to form. Sunlight, trees and rivers can renew on shorter timescales.",
          H_ren, F["resources"]),
        Q("Which gas do green plants release that animals need to breathe?",
          ["Oxygen", "Only smoke", "Only nitrogen from factories", "Helium balloons only"], "A",
          "In sunlight, green plants make food and release oxygen that animals and people breathe.", H_for),
        Q("Saving electricity by switching off unused fans is an example of —",
          ["conservation", "wasting fuel on purpose", "increasing pollution for fun", "deforestation"], "A",
          "Conservation means careful use so resources last longer and less fuel is burned at power stations.", H_con),
        Q("Which number in the three green habits stands for recycle?",
          ["3", "1", "2", "None"], "A",
          "Bin 3 is recycle — turning used materials into new products. 1 is reduce; 2 is reuse.",
          H_3r, F["rr"]),
        Q("Rain filling rivers and lakes is part of the —",
          ["water cycle", "rock cycle only", "electric circuit", "digestive system"], "A",
          "Water evaporates, forms clouds, falls as rain and returns to land and sea — the water cycle.",
          H_soil, F["water"]),
        Q("A resource that can be replaced naturally in a reasonable time is called —",
          ["non-renewable", "renewable", "artificial only", "polluted forever"], "B",
          "Sunlight, wind and carefully managed forests are renewable. Coal and petroleum are non-renewable.", H_ren),
        Q("Smoke from chimneys marked A mainly causes —",
          ["noise pollution only", "air pollution", "soil to become gold", "more oxygen overnight"], "B",
          "Smoke and gases mix into the air and can harm breathing and the climate — air pollution.",
          H_pol, F["pollute"]),
        Q("Reusing a sturdy shopping bag instead of taking a new plastic bag each time is —",
          ["reduce only, never reuse", "reuse", "burning waste", "mining coal"], "B",
          "Using the same bag again is reuse. It also helps reduce how many new bags are made.", H_3r),
        Q("Hillside Q compared with forest P is an example of —",
          ["afforestation", "deforestation", "the water cycle speeding up helpfully", "planting more trees"], "B",
          "Q shows a cleared hillside with stumps — deforestation. P still has a living forest.",
          H_for, F["forest"]),
        Q("Which energy source in the picture is a fossil fuel?",
          ["P solar", "R coal", "Q wind", "Both P and Q"], "B",
          "R is a coal plant. Coal is a fossil fuel. Solar (P) and wind (Q) are renewable.",
          H_en, F["energy"]),
        Q("Dirty water pipe B flowing into the river mainly causes —",
          ["air pollution only", "water pollution", "noise pollution only", "a new renewable forest"], "B",
          "Waste liquid entering the river harms fish and drinking water — water pollution.",
          H_pol, F["pollute"]),
        Q("Which is a non-renewable resource?",
          ["Sunlight", "Wind", "Petroleum (crude oil)", "Flowing river water used carefully"], "C",
          "Petroleum formed over millions of years and cannot be replaced quickly once we burn it.", H_ren),
        Q("Planting new trees on a bare hill is called —",
          ["deforestation", "air pollution", "afforestation (or reforestation)", "mining"], "C",
          "Afforestation/reforestation means growing forests again, which helps soil, wildlife and air quality.", H_for),
        Q("Which habit best matches reduce?",
          ["Printing posters on both sides of scrap paper after first use only as art frames", "Buying a new bottle every hour", "Using a smaller amount of water while brushing teeth", "Throwing intact jars straight to landfill without thought"], "C",
          "Using less water is reduce. Reusing jars is reuse; recycling paper is recycle.", H_3r),
        Q("Soil is important because it —",
          ["is only useful as smoke", "blocks all rain forever", "helps plants grow and stores water and nutrients", "is a fossil fuel like petrol"], "C",
          "Healthy soil supports crops and forests. Erosion and chemical waste damage this resource.", H_soil),
        Q("Loudspeakers at very high volume late at night near homes can cause —",
          ["water purification", "soil fertility", "noise pollution", "more rainfall"], "C",
          "Unwanted loud sound that disturbs people and animals is noise pollution.", H_pol),
        Q("Which is the cleanest choice among the three pictured energy ideas for daily electricity?",
          ["Only R coal with thick smoke", "Burning more coal than R", "P solar panels (when the Sun shines)", "Adding more smoke to R"], "C",
          "Solar energy does not burn fuel at the panel. Coal burning releases smoke and greenhouse gases.",
          H_en, F["energy"]),
        Q("Wildlife suffers when forests are cleared mainly because animals lose —",
          ["television signals", "school uniforms", "mobile phones", "habitat (homes and food)"], "D",
          "Forests are homes and food sources. Clearing them leaves many animals without habitat.", H_for),
        Q("Which action conserves water at home?",
          ["Leaving the tap on while soaping dishes the whole time", "Watering plants at midday so more evaporates", "Washing the car with a running hose for an hour daily", "Collecting rainwater in a clean barrel for plants"], "D",
          "Rainwater harvesting saves treated tap water. Running taps and midday waste lose water.", H_con),
        Q("Coal, petroleum and natural gas are grouped as —",
          ["renewable forest products", "only laboratory chemicals", "forms of pure oxygen", "fossil fuels"], "D",
          "They formed from ancient living things buried long ago and are burned for energy — fossil fuels.", H_en),
        Q("Throwing plastic wrappers into a lake harms the environment mainly as —",
          ["a renewable energy plan", "afforestation", "a way to make oxygen", "water and soil pollution"], "D",
          "Plastic waste dirties water and land, harms animals, and lasts a long time.", H_pol),
        Q("In the water diagram, arrow 1 (lake toward cloud) mainly shows —",
          ["rainfall", "condensation only as rain", "filtration in a funnel", "evaporation"], "D",
          "Heat lifts water as vapour from the lake — evaporation — before clouds form.",
          H_soil, F["water"]),
        Q("The 3 R's of waste management are —",
          ["Run, Rest, Race", "Read, Write, Recite", "Rock, River, Rain only", "Reduce, Reuse, Recycle"], "D",
          "Reduce waste, reuse items, and recycle materials are the classic 3 R's.", H_3r),
    ]
    balance_ok(set_a, "ch6 A")

    set_b = [
        Q("Air is a natural resource because —",
          ["living things need it and it comes from nature", "it is made only in factories", "it is a fossil fuel", "it cannot be polluted"], "A",
          "We breathe air every moment. Keeping air clean is part of caring for resources.", H_res),
        Q("Which letter shows a renewable energy source powered by moving air?",
          ["Q", "R", "Neither", "Only coal R"], "A",
          "Q is a wind turbine. Wind is renewable. R (coal) is non-renewable.",
          H_en, F["energy"]),
        Q("Composting kitchen peels to enrich garden soil is closest to —",
          ["recycling nutrients wisely", "burning fossil coal", "noise pollution", "deforestation"], "A",
          "Compost returns nutrients to soil instead of wasting food scraps in landfill.", H_con),
        Q("Which resource card shows sunlight?",
          ["P", "Q", "R", "S"], "A",
          "P is the Sun card. Sunlight is a renewable resource used by plants and solar panels.",
          H_ren, F["resources"]),
        Q("Turning off a dripping tap helps mainly to —",
          ["conserve water", "increase air pollution", "mine more coal", "clear a forest"], "A",
          "A drip wastes a lot of water over days. Fixing it is simple conservation.", H_con),
        Q("Forests help reduce soil erosion because tree roots —",
          ["hold the soil in place", "turn soil into plastic", "remove all water forever", "attract only factory smoke"], "A",
          "Roots bind soil so rain is less likely to wash it away — one reason deforestation is harmful.", H_for),
        Q("Vehicle exhaust in a busy street is mainly —",
          ["noise only, never chemical", "air pollution", "a type of forest", "pure oxygen therapy"], "B",
          "Exhaust gases and particles dirty the air people breathe — air pollution (and engines can add noise too).", H_pol),
        Q("Which is renewable if managed carefully?",
          ["Coal seam", "Forest timber with replanting", "Petroleum well", "Ancient fossil gas only"], "B",
          "Trees can regrow if we plant and protect them. Coal, oil and gas do not renew on human timescales.", H_ren),
        Q("Bin 2 in the habits chart means —",
          ["reduce only", "reuse", "recycle only", "burn everything"], "B",
          "2 is reuse — using an item again for the same or a new purpose.",
          H_3r, F["rr"]),
        Q("Why is coal called non-renewable?",
          ["It forms again every night", "It takes millions of years to form and we use it up faster than it forms", "It is made of pure oxygen", "It never releases energy"], "B",
          "Fossil fuels form far too slowly to replace what we burn today.", H_ren),
        Q("Paper sent to a recycling plant to make new notebooks is —",
          ["reuse of the same notebook page only", "recycle", "deforestation of the notebook", "noise pollution"], "B",
          "Recycling changes old paper into new paper products.", H_3r),
        Q("Arrow 2 (cloud toward land) in the water picture mainly shows —",
          ["evaporation from the lake", "precipitation (rain)", "a coal mine", "magnetic force"], "B",
          "Water falling from clouds is precipitation — often rain.",
          H_soil, F["water"]),
        Q("Dumping factory waste into a river is harmful mainly because it —",
          ["makes the river a renewable forest", "increases oxygen for free forever", "pollutes water and can kill aquatic life", "plants more trees automatically"], "C",
          "Chemicals and waste lower water quality and can poison fish and people who use the river.",
          H_pol, F["pollute"]),
        Q("Which everyday choice supports conservation of fuel?",
          ["Leaving all lights on when empty", "Using a car for a 50-metre walk every time", "Walking or cycling a short safe trip", "Burning leaves in the street daily"], "C",
          "Walking or cycling saves petrol/diesel and reduces exhaust for short trips.", H_con),
        Q("Minerals like iron ore are taken from the Earth by —",
          ["photosynthesis only", "the water cycle alone", "mining", "recycling sunlight"], "C",
          "Mining extracts minerals. Many mineral stocks are limited, so wise use and recycling metals matter.", H_res),
        Q("A national park that protects tigers mainly helps —",
          ["increase deforestation", "raise factory smoke", "wildlife conservation", "waste more plastic"], "C",
          "Protected areas keep habitats safer so endangered animals can survive.", H_for),
        Q("Which energy pair is both renewable?",
          ["Coal and petroleum", "Coal and natural gas", "Solar and wind", "Petrol and diesel only"], "C",
          "Solar and wind renew daily. Coal, petroleum, petrol and diesel are fossil-fuel based.",
          H_en, F["energy"]),
        Q("Plastic litter on a beach is a form of —",
          ["afforestation", "renewable coal", "pollution", "pure natural gas"], "C",
          "Litter dirties land and sea and harms animals — pollution.", H_pol),
        Q("Which best describes reduce?",
          ["Melting bottles into new bottles only", "Using the same jar as a pencil holder", "Planting a forest", "Buying and wasting fewer disposable items"], "D",
          "Reduce means cutting how much you consume and throw away in the first place.", H_3r),
        Q("Cutting all trees on hillside P would most likely —",
          ["improve wildlife homes", "increase oxygen production there", "stop all rain on Earth forever", "raise the risk of soil wash-away like hillside Q"], "D",
          "Without tree cover, soil erodes more easily — the cleared look of Q.",
          H_for, F["forest"]),
        Q("Natural gas used in many kitchens is —",
          ["a renewable tree sap", "made only by wind turbines", "pure recycled plastic", "a fossil fuel"], "D",
          "Natural gas formed long ago with other fossil fuels and is non-renewable.", H_en),
        Q("An open garbage dump near wells can lead to —",
          ["cleaner drinking water", "instant afforestation", "more oxygen from plastics", "soil and water pollution"], "D",
          "Rotting waste and liquids can soak into soil and groundwater — dangerous pollution.", H_pol),
        Q("Which is an example of reuse?",
          ["Throwing a jar away at once", "Buying a new jar each day", "Melting the jar in a big factory only", "Washing a glass jar and storing spices in it"], "D",
          "Using the jar again for spices is reuse. Factory remaking would be recycling.", H_3r),
        Q("Caring for our environment means —",
          ["using every forest in one year", "dumping waste into rivers freely", "burning more coal with no filters on purpose", "using resources wisely and cutting harmful waste"], "D",
          "Environment care combines conservation, less pollution, and protecting living things.", H_con),
    ]
    balance_ok(set_b, "ch6 B")
    return set_a, set_b


# ===========================================================================
# Emit
# ===========================================================================

CHAPTERS = [
    dict(
        key="matter",
        doc="science-ch04-matter.md",
        out="g5-science-matter.ts",
        export="g5ScienceMatter",
        prefix="g5-sci-matter",
        title="Chapter 4: Matter and Materials",
        meta_tags="matter, materials, properties, conductors, mixtures, separation, reversible change, pictorial, svg-diagrams",
        objectives=[
            "Explain that matter takes up space and has mass, and sort everyday materials by useful properties.",
            "Compare transparent, translucent and opaque materials; conductors and insulators of heat and electricity.",
            "Describe dissolving, floating/sinking, and simple mixtures/solutions.",
            "Choose separation methods: handpicking, sieving, sedimentation, filtration, evaporation, magnets.",
            "Tell reversible from irreversible changes and name melting, freezing, evaporation and condensation.",
            "Link a material's property to why we use it for a job (wires, windows, raincoats, pan handles).",
        ],
        scenes=[
            dict(title="Matter and materials around us", visual="Kitchen and classroom objects glow as matter with different properties.",
                 tts="Everything that takes up space and has mass is matter. Materials are the substances we use to make things.",
                 interaction="Sort cards into hard/soft, flexible/rigid, transparent/opaque."),
            dict(title="Conductors and insulators", visual="Circuit gap X and a hot pan with wood versus metal handles.",
                 tts="Metals usually let heat and electricity pass. Wood, plastic and rubber often stop them — they are insulators.",
                 interaction="Predict which rod lights the bulb; which handle stays cooler."),
            dict(title="Mixtures and dissolving", visual="Salt stirred into water; sand settling in a jar.",
                 tts="Some solids dissolve to make a solution. Others settle or can be filtered out.",
                 interaction="Choose dissolve versus settle for salt, sand and chalk."),
            dict(title="Separation methods", visual="Sieve, filter funnel, evaporating dish, magnet over sand.",
                 tts="We pick the method that matches the mixture: size, dissolve, magnetic, or liquid versus solid.",
                 interaction="Match each mixture card to the best method."),
            dict(title="Changes we can reverse — and ones we cannot", visual="Ice melting and refreezing beside paper burning to ash.",
                 tts="Melting and freezing can reverse. Burning usually cannot give the paper back.",
                 interaction="Tap reversible or irreversible for five everyday changes."),
        ],
        pict="Visual items include transparency sheets, dissolving beakers, filtration, circuit gap, sink/float tank, and change-of-state arrows. SVGs are original, viewBox 0 0 320 220, no blank lines inside svg.",
        chapter_meta={
            "id": "matter-materials",
            "title": "Matter and Materials",
            "emoji": "🧪",
            "blurb": "Properties, mixtures and separation",
            "topic": "materials",
            "paperTopics": ["materials", "forces-energy"],
        },
        lesson=lesson_ts(
            "Matter and materials", "🧪", "water-cycle",
            "Materials have properties that help us choose them for jobs. We can separate many mixtures and reverse some changes.",
            [("Properties", "Hard, flexible, transparent, waterproof…", "🔍"),
             ("Conductors", "Metals for heat and electricity", "⚡"),
             ("Mixtures", "Dissolve, settle, filter, evaporate", "🧂"),
             ("Changes", "Some reverse; burning usually does not", "🔥")],
            {"prompt": "Which material is best for coating electric wires?",
             "options": [("a", "Bare copper only"), ("b", "Plastic (insulator)"), ("c", "Salt water"), ("d", "Iron filings")],
             "answerId": "b", "why": "Plastic is an insulator that makes wires safer to touch."},
            ["Properties guide material choice", "Insulators vs conductors", "Match separation to the mixture", "Sets ready — 24 MCQs each"],
        ),
        builder=build_ch4,
    ),
    dict(
        key="force",
        doc="science-ch05-force.md",
        out="g5-science-force.ts",
        export="g5ScienceForce",
        prefix="g5-sci-force",
        title="Chapter 5: Force and Simple Machines",
        meta_tags="force, friction, gravity, lever, pulley, inclined plane, wheel and axle, screw, wedge, pictorial, svg-diagrams",
        objectives=[
            "Define force as a push or pull and list what forces can do to motion and shape.",
            "Give everyday examples of friction, gravity and magnetic force (G5 level, no pressure formulas).",
            "Identify lever, pulley, inclined plane, wheel and axle, screw and wedge.",
            "Name fulcrum, load and effort on a simple lever.",
            "Explain how a ramp or wheels can make a task easier.",
            "Say when friction helps (grip) and when we reduce it (oil, smooth wheels).",
        ],
        scenes=[
            dict(title="Pushes and pulls", visual="Kick a ball, squash clay, tug a rope.",
                 tts="A force is a push or a pull. It can start, stop, turn or reshape things.",
                 interaction="Match each clip to start motion, slow down, or change shape."),
            dict(title="Friction, gravity, magnets", visual="Shoes on tiles, mango falling, magnet and pin.",
                 tts="Friction opposes sliding. Gravity pulls us down. Magnets can pull some metals without touching.",
                 interaction="Sort force cards into contact and non-contact."),
            dict(title="Levers", visual="See-saw with fulcrum F, load and effort E.",
                 tts="A lever is a bar that turns on a fulcrum. Crowbars and scissors use this idea.",
                 interaction="Drag labels fulcrum, load and effort onto the see-saw."),
            dict(title="Pulleys and ramps", visual="Flagpole pulley and a box on a ramp.",
                 tts="A fixed pulley changes pull direction. A ramp lets you use a smaller force over a longer path.",
                 interaction="Predict which path needs the smaller push."),
            dict(title="Wheels, screws and wedges", visual="Cart wheels, jar lid threads, axe wedge.",
                 tts="Wheels reduce scraping. A screw is a ramp around a rod. A wedge splits materials apart.",
                 interaction="Match each tool photo to its simple machine name."),
        ],
        pict="Visual items include force scenes P–S, see-saw lever, fixed pulley, ramp versus lift, wheel cart, and axe wedge. Grade 5 depth only — no pascal calculations.",
        chapter_meta={
            "id": "force-machines",
            "title": "Force and Simple Machines",
            "emoji": "⚙️",
            "blurb": "Pushes, friction and simple machines",
            "topic": "forces-energy",
            "paperTopics": ["forces-energy", "materials"],
        },
        lesson=lesson_ts(
            "Force and machines", "⚙️", "magnet",
            "Forces push or pull. Simple machines like levers, pulleys and ramps help us do jobs with a smarter use of force.",
            [("Force", "Push or pull — changes motion or shape", "👉"),
             ("Friction", "Opposes sliding; gives grip", "🛑"),
             ("Levers & pulleys", "Fulcrum, load, effort; change direction", "⚖️"),
             ("Ramps & wheels", "Smaller force, longer path; roll not drag", "🚚")],
            {"prompt": "A see-saw is mainly which simple machine?",
             "options": [("a", "Pulley"), ("b", "Lever"), ("c", "Wedge only"), ("d", "Screw only")],
             "answerId": "b", "why": "A see-saw is a lever that turns about a fulcrum."},
            ["Force = push or pull", "Friction can help or hinder", "Name the six simple machines", "Sets ready — 24 MCQs each"],
        ),
        builder=build_ch5,
    ),
    dict(
        key="environment",
        doc="science-ch06-environment.md",
        out="g5-science-environment.ts",
        export="g5ScienceEnvironment",
        prefix="g5-sci-env",
        title="Chapter 6: Our Environment and Natural Resources",
        meta_tags="environment, natural resources, renewable, non-renewable, pollution, conservation, forests, 3Rs, pictorial, svg-diagrams",
        objectives=[
            "List natural resources (air, water, soil, forests, minerals, fuels) and say why they matter.",
            "Sort renewable and non-renewable resources with everyday examples.",
            "Identify air, water, soil and noise pollution from simple scenes.",
            "Explain reduce, reuse and recycle with home examples.",
            "Describe how forests help us and what deforestation risks.",
            "Compare cleaner renewable energy ideas (sun, wind) with fossil fuels (coal, oil, gas).",
        ],
        scenes=[
            dict(title="Gifts from nature", visual="Sun, river, forest, soil and mineral cards.",
                 tts="Natural resources come from nature. We depend on them for life and work.",
                 interaction="Tap each card to hear how people use that resource."),
            dict(title="Renewable or not?", visual="Sun and wind versus coal and oil barrels.",
                 tts="Renewable resources can be replaced in a human lifetime. Fossil fuels cannot.",
                 interaction="Swipe each resource into Renewable or Non-renewable."),
            dict(title="Pollution problems", visual="Smoky chimney, dirty pipe into river, loud speaker, littered soil.",
                 tts="Pollution is harmful waste in air, water, soil or as loud noise.",
                 interaction="Match each scene to air, water, soil or noise pollution."),
            dict(title="The 3 R's", visual="Three bins: use less, use again, remake.",
                 tts="Reduce, reuse and recycle cut waste and save resources.",
                 interaction="Sort action cards into reduce, reuse or recycle."),
            dict(title="Forests and clean energy", visual="Healthy forest beside cleared hill; solar and wind versus coal plant.",
                 tts="Forests give oxygen and homes. Sun and wind can power us with less smoke than coal.",
                 interaction="Choose the greener energy card and one forest-care action."),
        ],
        pict="Visual items include resource cards P–S, pollution scene A/B, 3 R bins, forest versus cleared hill, energy sources P–R, and water-cycle arrows.",
        chapter_meta={
            "id": "environment-resources",
            "title": "Our Environment and Natural Resources",
            "emoji": "🌍",
            "blurb": "Resources, pollution and the 3 R's",
            "topic": "earth-space",
            "paperTopics": ["earth-space", "living-things"],
        },
        lesson=lesson_ts(
            "Our environment", "🌍", "plant",
            "Natural resources support life. We protect them by cutting waste and pollution and by choosing wiser energy habits.",
            [("Resources", "Air, water, soil, forests, minerals, fuels", "🌿"),
             ("Renewable?", "Sun and wind renew; coal and oil do not", "♻️"),
             ("Pollution", "Air, water, soil, noise", "🏭"),
             ("3 R's", "Reduce, reuse, recycle", "🔁")],
            {"prompt": "Which is a renewable resource?",
             "options": [("a", "Coal"), ("b", "Petroleum"), ("c", "Sunlight"), ("d", "Natural gas")],
             "answerId": "c", "why": "Sunlight renews every day. Coal, petroleum and natural gas are fossil fuels."},
            ["Know renewable vs non-renewable", "Spot pollution types", "Practise the 3 R's", "Sets ready — 24 MCQs each"],
        ),
        builder=build_ch6,
    ),
]


def patch_hints(all_hints: dict):
    path = Path(__file__).resolve().parent.parent / "lib/prep/hints/g5-science.ts"
    text = path.read_text()
    if "g5-sci-matter-a-q01" in text:
        # Replace from first new key through end of object
        pass
    # Insert before closing }; of the export object
    entries = []
    for qid, hints in all_hints.items():
        entries.append('  %s: %s,' % (json.dumps(qid), json.dumps(hints)))
    block = "\n".join(entries)
    if "g5-sci-matter-a-q01" in text:
        # remove previous ch4-6 block if re-running
        text = re.sub(
            r'\n  "g5-sci-matter-a-q01":[\s\S]*?(?=\n\};)',
            "\n",
            text,
            count=1,
        )
    if not text.rstrip().endswith("};"):
        raise SystemExit("unexpected hints file ending")
    text = text.rstrip()[:-2].rstrip()
    if not text.endswith(","):
        text += ","
    text += "\n" + block + "\n};\n"
    path.write_text(text)
    print("Patched hints", path.name, "entries", len(all_hints))


def main():
    docs = DOCS / "grade-5"
    docs.mkdir(parents=True, exist_ok=True)
    all_hints = {}
    total_q = 0
    total_fig = 0
    for ch in CHAPTERS:
        set_a, set_b = ch["builder"]()
        write_md(
            docs / ch["doc"],
            ch["title"],
            {
                "Grade": "5",
                "Subject": "Science",
                "Theme tags": ch["meta_tags"],
                "Source basis": "NCERT Class 5 EVS / typical olympiad themes (original items only)",
            },
            ch["objectives"],
            ch["scenes"],
            ch["pict"],
            set_a,
            set_b,
            ch["key"],
        )
        a = to_ingest_qs(set_a, ch["prefix"], "a")
        b = to_ingest_qs(set_b, ch["prefix"], "b")
        assert len(a) == 24 and len(b) == 24
        total_q += len(a) + len(b)
        total_fig += sum(1 for q in a + b if q.get("figure"))
        emit_module(OUT / ch["out"], ch["export"], ch["chapter_meta"], ch["lesson"], a, b)
        all_hints.update(hints_map(set_a, set_b, ch["prefix"]))
    patch_hints(all_hints)
    print("TOTAL_MCQ", total_q, "TOTAL_FIG", total_fig)


if __name__ == "__main__":
    main()
