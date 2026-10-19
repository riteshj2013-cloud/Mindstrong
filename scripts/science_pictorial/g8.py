"""G8 Science pictorial items (Ch1-6)."""
from __future__ import annotations

from .svg import (INK, axes, arrow, badge, beaker, circle, dbl_arrow, ellipse, figure, leader, line, path, poly, polyline,
                  rect, text, tube, wave)

ITEMS: dict[str, dict] = {}


def item(qid, prompt, options, answer, explanation, hint, fig):
    ITEMS[qid] = dict(prompt=prompt, options=options, answer=answer, explanation=explanation, hint=hint, figure=fig)


GREEN, LGREEN, BLUE, LBLUE = "#16a34a", "#bbf7d0", "#2563eb", "#bfdbfe"


def mito(cx, cy, rx=16, ry=9):
    return ellipse(cx, cy, rx, ry, fill="#fecaca", stroke="#b91c1c", sw=1.4) + \
        path(f"M{cx - rx + 4},{cy} q4,-6 7,0 q3,6 7,0 q3,-6 7,0 q3,6 6,0", stroke="#b91c1c", sw=1.1)


def chloro(cx, cy):
    return ellipse(cx, cy, 9, 5, fill="#4ade80", stroke="#166534", sw=1) + line(cx - 5, cy, cx + 5, cy, stroke="#166534", sw=0.8)


def microscope(x=0, eyepiece=None, objective=None, x_knob=False):
    """Side view of a compound microscope; x shifts it horizontally."""
    o = x
    out = poly([(o + 70, 200), (o + 190, 200), (o + 180, 186), (o + 80, 186)], fill="#475569", stroke=INK, sw=1.5)  # base
    out += path(f"M{o + 160},186 L{o + 160},120 Q{o + 160},70 {o + 130},52", stroke="#475569", sw=12)  # arm
    out += rect(o + 70, 132, 80, 7, fill="#94a3b8", stroke=INK, sw=1.2)  # stage
    out += rect(o + 98, 139, 8, 6, fill="#e2e8f0", stroke=INK, sw=0.8)
    out += poly([(o + 92, 40), (o + 118, 40), (o + 126, 104), (o + 84, 104)], fill="#cbd5e1", stroke=INK, sw=1.5)  # tube
    out += rect(o + 95, 20, 20, 22, fill="#e2e8f0", stroke=INK, sw=1.5, rx=2)  # eyepiece
    out += rect(o + 88, 104, 14, 20, fill="#e2e8f0", stroke=INK, sw=1.5, rx=2)  # objective
    out += ellipse(o + 102, 172, 12, 5, fill="#f8fafc", stroke=INK, sw=1.2)  # mirror
    out += circle(o + 160, 100, 13 if x_knob else 11, fill="#64748b", stroke=INK, sw=1.5)  # coarse knob
    out += circle(o + 160, 130, 6, fill="#64748b", stroke=INK, sw=1.2)  # fine knob
    if eyepiece:
        out += leader(o + 115, 30, o + 150, 14, eyepiece, size=13)
    if objective:
        out += leader(o + 88, 114, o + 40, 114, objective, size=13)
    if x_knob:
        out += leader(o + 172, 96, o + 230, 80, "X", size=16)
    return out


# ============================== Ch1 Cells ==============================
item(
    "g8-sci-cells-a-q06",
    "In the animal cell shown, which labelled part releases energy from food?",
    ["Part P", "Part Q", "Part R", "Part S"], "a",
    "Part P is a mitochondrion, the powerhouse of the cell: it breaks down food such as glucose using oxygen and releases energy. "
    "Part Q, the large round nucleus, controls the cell's work but does not release energy from food.",
    "Energy from food is released in the cell's powerhouse. Which organelle is that, and what does it look like in a drawing?",
    figure(
        "An animal cell drawn as a rounded blob. Four parts are labelled: P is a small oval body with folded inner walls, Q is a large round body near the centre, "
        "R is the thin outer boundary, and S is the jelly-like filling.",
        path("M70,110 C70,50 150,30 200,48 C262,70 268,150 220,182 C170,212 80,190 70,110 Z", fill="#fef3c7", stroke="#92400e", sw=2.5),
        circle(165, 110, 26, fill="#ddd6fe", stroke="#5b21b6", sw=1.8), circle(170, 104, 7, fill="#7c3aed", stroke="none"),
        mito(110, 140), mito(205, 75, 13, 7), circle(120, 80, 3, fill="#92400e", stroke="none"), circle(200, 160, 3, fill="#92400e", stroke="none"),
        leader(98, 142, 30, 160, "P", size=16), leader(176, 120, 250, 205, "Q", size=16, anchor="start"),
        leader(258, 110, 290, 110, "R", size=16), leader(130, 175, 140, 212, "S", size=16, anchor="middle", dy=4),
    ),
)

_bricks = ""
for r_ in range(3):
    for c_ in range(4):
        x0, y0 = 30 + c_ * 64 + (32 if r_ % 2 else 0) - 16, 40 + r_ * 50
        _bricks += rect(x0, y0, 64, 50, fill="#fdf2f8", stroke="#9d174d", sw=4)
        _bricks += circle(x0 + 20 + (c_ % 2) * 18, y0 + 25, 6, fill="#db2777", stroke="none", opacity=0.75)
item(
    "g8-sci-cells-a-q13",
    "A student stains onion peel and draws what she sees under the microscope. What mainly forms the thick part labelled X?",
    ["Cell membrane", "Cytoplasm", "Nucleus", "Cell wall"], "d",
    "Onion peel is plant tissue, so each cell has a rigid cell wall outside its thin membrane. The thick outline that makes the cells look like bricks is the cell wall. "
    "The cell membrane is there too, but it is thin and pressed just inside the wall, so it cannot form the thick line X.",
    "Onion peel is plant tissue. Which layer gives plant cells a firm, thick outline, like the edge of a brick?",
    figure(
        "Stained onion peel cells seen under a microscope: rows of brick-shaped cells, each with a small dark dot inside. X points to the thick boundary between two cells.",
        rect(10, 36, 300, 156, fill="#ffffff", stroke="none"), _bricks,
        rect(0, 30, 16, 170, fill="#ffffff", stroke="none"), rect(304, 30, 16, 170, fill="#ffffff", stroke="none"),
        leader(142, 90, 160, 18, "X", size=16, anchor="start", dy=6),
        text(160, 212, "onion peel, stained", size=12, weight="500"),
    ),
)

item(
    "g8-sci-cells-a-q16",
    "Read the markings on the lenses of the microscope shown. What is the total magnification?",
    ["400×", "50×", "4×", "4000×"], "a",
    "Total magnification is the eyepiece power multiplied by the objective power: 10 × 40 = 400, so the object looks 400 times bigger. "
    "50× comes from adding the two numbers, which is a common mistake.",
    "Find the power marked on the eyepiece and on the objective lens. To get the total magnification, are the two added or multiplied?",
    figure(
        "A side view of a compound microscope. The eyepiece at the top is marked 10× and the objective lens near the stage is marked 40×.",
        microscope(60, eyepiece="eyepiece 10×", objective="objective 40×"),
    ),
)


def plant_cell(x, y, w, h, shrunk=False):
    out = rect(x, y, w, h, fill="#ecfccb", stroke="#3f6212", sw=4, rx=4)
    if shrunk:
        out = rect(x, y, w, h, fill="#f0f9ff", stroke="#3f6212", sw=4, rx=4)
        out += path(f"M{x + 22},{y + 26} Q{x + w / 2},{y + 12} {x + w - 22},{y + 28} Q{x + w - 12},{y + h / 2} {x + w - 24},{y + h - 26} "
                    f"Q{x + w / 2},{y + h - 14} {x + 22},{y + h - 26} Q{x + 12},{y + h / 2} {x + 22},{y + 26} Z", fill="#ecfccb", stroke="#65a30d", sw=1.5)
        out += ellipse(x + w / 2 + 4, y + h / 2, 18, 12, fill="#e0f2fe", stroke="#0284c7", sw=1.2)
        out += circle(x + 34, y + h / 2, 7, fill="#a78bfa", stroke="#5b21b6", sw=1)
        out += chloro(x + w / 2 - 6, y + 34) + chloro(x + w / 2 + 14, y + h - 34)
    else:
        out += rect(x + 8, y + 8, w - 16, h - 16, fill="none", stroke="#65a30d", sw=1.2, rx=3)
        out += rect(x + 30, y + 22, w - 48, h - 44, fill="#e0f2fe", stroke="#0284c7", sw=1.2, rx=10)
        out += circle(x + 18, y + h / 2, 7, fill="#a78bfa", stroke="#5b21b6", sw=1)
        out += chloro(x + w / 2, y + 15) + chloro(x + w / 2 + 10, y + h - 15)
    return out


item(
    "g8-sci-cells-a-q15",
    "Cell 1 is a plant cell in tap water. Cell 2 is the same cell after ten minutes in very salty water. Which part of the cell has lost the most water?",
    ["Nucleus", "Cell wall", "Large central vacuole", "Chloroplast"], "c",
    "Water moves out of the cell into the salty water. The large central vacuole holds most of the cell's water, so it shrinks the most and pulls the contents away from the wall. "
    "The cell wall has not lost water: it keeps the same size and shape in both drawings.",
    "Compare the two drawings. Which part, which held most of the water in cell 1, is now much smaller?",
    figure(
        "Two plant cells. Cell 1 in tap water: green contents fill the box-shaped wall and a big clear sac fills most of the middle. "
        "Cell 2 after salty water: the wall is the same size, but the contents have shrunk into the centre, away from the wall, and the clear sac is small.",
        plant_cell(25, 40, 120, 120), plant_cell(175, 40, 120, 120, shrunk=True),
        text(85, 185, "Cell 1", size=14, weight="700"), text(85, 202, "tap water", size=12, weight="500"),
        text(235, 185, "Cell 2", size=14, weight="700"), text(235, 202, "salty water, 10 min", size=12, weight="500"),
    ),
)


def neuron(x0, y0, scale=1.0):
    s = scale
    out = ""
    for ang in (-150, -120, -80, 150, 110, 200):
        import math
        a = math.radians(ang)
        x1, y1 = x0 + 18 * s * math.cos(a), y0 + 18 * s * math.sin(a)
        x2, y2 = x0 + 44 * s * math.cos(a), y0 + 44 * s * math.sin(a)
        out += line(x1, y1, x2, y2, stroke="#7c3aed", sw=2.2)
        out += line(x2, y2, x2 + 10 * s * math.cos(a - 0.6), y2 + 10 * s * math.sin(a - 0.6), stroke="#7c3aed", sw=1.6)
        out += line(x2, y2, x2 + 10 * s * math.cos(a + 0.6), y2 + 10 * s * math.sin(a + 0.6), stroke="#7c3aed", sw=1.6)
    out += path(f"M{x0 + 18 * s},{y0} C{x0 + 90 * s},{y0 - 6} {x0 + 150 * s},{y0 + 10} {x0 + 210 * s},{y0}", stroke="#7c3aed", sw=3.2)
    ex = x0 + 210 * s
    for dy in (-16, -6, 6, 16):
        out += line(ex, y0, ex + 18 * s, y0 + dy * s, stroke="#7c3aed", sw=1.8)
    out += circle(x0, y0, 20 * s, fill="#ede9fe", stroke="#7c3aed", sw=2) + circle(x0, y0, 7 * s, fill="#7c3aed", stroke="none")
    return out


item(
    "g8-sci-cells-a-q18",
    "The drawing shows one kind of cell from the human body. How does its shape help it do its job?",
    ["It helps the cell carry messages over long distances", "It helps the cell store food",
     "It helps the cell make food using sunlight", "It lets the cell change shape to swallow germs"], "a",
    "This is a nerve cell. Its very long fibre and branched ends let it pick up messages and pass them between the brain and distant parts of the body. "
    "Changing shape to swallow germs is the job of white blood cells, which have no long fibre like this.",
    "Notice how far the long fibre reaches and the branches at both ends. What has to travel between distant body parts?",
    figure(
        "A cell with a round body carrying many short branches on one side, one very long thin fibre stretching across the picture, and a group of branched endings at the far end.",
        neuron(60, 110), text(160, 190, "one cell from the human body", size=12, weight="500"),
    ),
)


def heart(cx, cy, s=1.0):
    return path(f"M{cx},{cy + 26 * s} C{cx - 34 * s},{cy + 2 * s} {cx - 30 * s},{cy - 24 * s} {cx - 12 * s},{cy - 22 * s} "
                f"C{cx - 4 * s},{cy - 21 * s} {cx},{cy - 14 * s} {cx},{cy - 10 * s} C{cx},{cy - 14 * s} {cx + 4 * s},{cy - 21 * s} {cx + 12 * s},{cy - 22 * s} "
                f"C{cx + 30 * s},{cy - 24 * s} {cx + 34 * s},{cy + 2 * s} {cx},{cy + 26 * s} Z", fill="#f87171", stroke="#991b1b", sw=1.6)


_tissue = "".join(ellipse(205 + c * 18 + (8 if r % 2 else 0), 50 + r * 14, 9, 6, fill="#fecaca", stroke="#b91c1c", sw=1) +
                  circle(205 + c * 18 + (8 if r % 2 else 0), 50 + r * 14, 2, fill="#b91c1c", stroke="none")
                  for r in range(4) for c in range(5))
_system = heart(240, 150, 0.6) + "".join(path(d, stroke="#dc2626", sw=2) for d in [
    "M240,135 Q240,118 220,116 Q195,114 192,130 Q190,175 205,190", "M246,138 Q262,118 282,128 Q296,150 284,186",
    "M232,162 Q214,186 230,200 Q260,206 270,192", "M248,162 Q270,170 284,186"]) + \
    "".join(path(d, stroke="#2563eb", sw=2) for d in ["M236,136 Q228,108 254,104 Q290,104 292,140", "M244,166 Q246,200 218,198"])
item(
    "g8-sci-cells-a-q21",
    "The pictures W, X, Y and Z show four levels of organisation in the human body. Which order goes from the simplest level to the most complex?",
    ["W → X → Z → Y", "Z → X → W → Y", "X → Z → W → Y", "X → W → Z → Y"], "c",
    "X is a single cell, Z is a sheet of many similar cells (a tissue), W is the heart (an organ) and Y is the heart joined to its blood vessels (an organ system). "
    "X → W → Z → Y puts the organ before the tissue, but an organ is built from tissues, so that order cannot be right.",
    "Start with the smallest unit. Which picture is made of many copies of that unit, and which pictures include the heart?",
    figure(
        "Four boxed pictures. W: a heart on its own. X: one single cell with a nucleus. Y: a heart joined to a network of red and blue tubes. Z: a sheet of many similar cells packed together.",
        rect(10, 15, 145, 90, fill="#ffffff", stroke="#cbd5e1", sw=1.2, rx=6), rect(165, 15, 145, 90, fill="#ffffff", stroke="#cbd5e1", sw=1.2, rx=6),
        rect(10, 115, 145, 95, fill="#ffffff", stroke="#cbd5e1", sw=1.2, rx=6), rect(165, 115, 145, 95, fill="#ffffff", stroke="#cbd5e1", sw=1.2, rx=6),
        heart(82, 62, 1.15), badge(28, 32, "W"),
        ellipse(82, 162, 32, 22, fill="#fecaca", stroke="#b91c1c", sw=1.6), circle(86, 160, 7, fill="#b91c1c", stroke="none"), badge(28, 132, "X"),
        _tissue, badge(183, 32, "Z"),
        _system, badge(183, 132, "Y"),
    ),
)


def plant_cell_labelled():
    out = rect(70, 40, 180, 140, fill="#ecfccb", stroke="#3f6212", sw=5, rx=4)
    out += rect(78, 48, 164, 124, fill="none", stroke="#65a30d", sw=1.2, rx=3)
    out += rect(112, 64, 112, 92, fill="#e0f2fe", stroke="#0284c7", sw=1.4, rx=16)
    out += circle(92, 110, 11, fill="#a78bfa", stroke="#5b21b6", sw=1.2)
    out += chloro(150, 56) + chloro(200, 165) + chloro(95, 155) + chloro(232, 80)
    return out


item(
    "g8-sci-cells-b-q06",
    "In the mature plant cell shown, which labelled part stores water, salts and wastes?",
    ["Part P", "Part Q", "Part R", "Part S"], "d",
    "S is the large central vacuole, a sac of cell sap that stores water, salts and wastes and keeps the cell firm. "
    "Q is the nucleus, which controls the cell's activities rather than storing water.",
    "Which part of a plant cell holds watery cell sap and keeps the cell firm? Recall how big it is in a grown cell.",
    figure(
        "A box-shaped plant cell. P points to one of several small green oval bodies, Q to a round body near the left side, "
        "R to the thick outer layer, and S to a large clear sac in the middle.",
        plant_cell_labelled(),
        leader(232, 80, 290, 40, "P", size=16), leader(92, 110, 30, 100, "Q", size=16),
        leader(72, 170, 30, 200, "R", size=16), leader(190, 120, 290, 130, "S", size=16),
    ),
)

item(
    "g8-sci-cells-b-q07",
    "The drawing shows a close-up of one part of a cell. What is the small, dense, round body labelled X?",
    ["Nucleolus", "Chloroplast", "Ribosome", "Vacuole"], "a",
    "The large round part with a double boundary and pores is the nucleus, and X lies inside it, so X is the nucleolus, which helps make ribosomes. "
    "X cannot be a chloroplast, because chloroplasts lie in the cytoplasm, not inside the nucleus.",
    "The big round part has a double boundary with pores. Which small dense body is found only inside that part?",
    figure(
        "A close-up of a large round structure with a double outer boundary broken by small gaps (pores) and fine threads inside. X points to a small dark round body within it.",
        circle(150, 110, 82, fill="#ede9fe", stroke="#5b21b6", sw=2), circle(150, 110, 75, fill="#f5f3ff", stroke="#5b21b6", sw=2),
        "".join(rect(150 + 76 * c - 3, 110 + 76 * s - 3, 6, 6, fill="#ffffff", stroke="none") for c, s in
                [(1, 0), (0, 1), (-1, 0), (0, -1), (0.71, 0.71), (-0.71, 0.71), (0.71, -0.71), (-0.71, -0.71)]),
        "".join(path(d, stroke="#a78bfa", sw=1.2) for d in ["M95,90 q20,-20 40,0 t40,0", "M100,140 q25,15 50,-5 t45,10",
                                                            "M110,70 q30,10 60,-5", "M120,165 q20,-12 45,0"]),
        circle(170, 108, 18, fill="#4c1d95", stroke="none"),
        leader(180, 100, 268, 40, "X", size=16),
    ),
)


def rbc(cx, cy):
    return circle(cx, cy, 24, fill="#f87171", stroke="#991b1b", sw=1.6) + circle(cx, cy, 11, fill="#fecaca", stroke="none") + \
        path(f"M{cx - 22},{cy + 44} Q{cx - 22},{cy + 34} {cx - 12},{cy + 36} Q{cx},{cy + 40} {cx + 12},{cy + 36} Q{cx + 22},{cy + 34} {cx + 22},{cy + 44} "
             f"Q{cx + 22},{cy + 54} {cx + 12},{cy + 52} Q{cx},{cy + 48} {cx - 12},{cy + 52} Q{cx - 22},{cy + 54} {cx - 22},{cy + 44} Z",
             fill="#f87171", stroke="#991b1b", sw=1.4)


item(
    "g8-sci-cells-b-q11",
    "Which of the drawings P, Q, R and S shows the shape of a human red blood cell?",
    ["Drawing P", "Drawing Q", "Drawing R", "Drawing S"], "c",
    "R is a round disc dented in the middle on both sides (biconcave), seen from the front and from the side. It has no nucleus, and its large surface helps it carry oxygen. "
    "Q, the long spindle with a nucleus, is a muscle cell, not a blood cell.",
    "Red blood cells squeeze through tiny tubes and carry oxygen. Which shape gives a cell a large surface and lets it bend?",
    figure(
        "Four cell drawings. P: a cell body with many branches and a long fibre. Q: a long cell pointed at both ends with a nucleus. "
        "R: a round red disc, pale in the centre, also shown from the side as pinched in the middle, with no nucleus. S: a rectangle with a thick wall and a nucleus.",
        neuron(28, 60, 0.33), badge(20, 22, "P"),
        path("M180,60 Q215,40 290,60 Q215,80 180,60 Z", fill="#fecaca", stroke="#b91c1c", sw=1.6), circle(235, 60, 5, fill="#b91c1c", stroke="none"), badge(180, 22, "Q"),
        rbc(80, 140), badge(20, 122, "R"),
        rect(195, 125, 80, 50, fill="#ecfccb", stroke="#3f6212", sw=5), circle(215, 150, 7, fill="#a78bfa", stroke="#5b21b6", sw=1), badge(180, 122, "S"),
        line(160, 15, 160, 210, stroke="#e2e8f0", sw=1), line(10, 108, 310, 108, stroke="#e2e8f0", sw=1),
    ),
)

item(
    "g8-sci-cells-b-q15",
    "A student draws a cell seen under a microscope, as shown. Where could this cell have come from?",
    ["Human cheek lining", "A bacterium", "An Amoeba", "A Hydrilla leaf"], "d",
    "The thick outer wall, the nucleus and the many green chloroplasts mark a green plant cell, such as one from a Hydrilla leaf. "
    "A bacterium also has a cell wall, but it has no proper nucleus and no chloroplasts.",
    "What are the green oval bodies called? Which of the four sources has cells with these bodies and a thick wall?",
    figure(
        "A box-shaped cell with a thick outer wall, a round nucleus near one side, a large clear sac, and many small green oval bodies around the edge.",
        rect(60, 35, 200, 150, fill="#f7fee7", stroke="#3f6212", sw=6, rx=4), rect(105, 62, 120, 96, fill="#e0f2fe", stroke="#0284c7", sw=1.2, rx=18),
        circle(84, 110, 12, fill="#a78bfa", stroke="#5b21b6", sw=1.2),
        "".join(chloro(x, y) for x, y in [(90, 52), (130, 50), (175, 50), (220, 52), (245, 85), (245, 130), (225, 168), (180, 170), (135, 170), (88, 160), (78, 80)]),
    ),
)


def burst_cell(cx, cy):
    pts = []
    import math
    for i in range(16):
        a = 2 * math.pi * i / 16
        r = 30 if i % 2 else 20
        pts.append((round(cx + r * math.cos(a), 1), round(cy + r * math.sin(a), 1)))
    return polyline(pts + [pts[0]], stroke="#b91c1c", sw=1.6) + \
        "".join(circle(cx + dx, cy + dy, 2.5, fill="#fca5a5", stroke="none") for dx, dy in [(-40, -8), (38, 12), (10, -40), (-14, 38), (44, -24)])


item(
    "g8-sci-cells-b-q24",
    "Cells 1 and 2 were placed in pure water. The pictures show them before and after. Why did cell 2 not burst?",
    ["It has no cell membrane", "Its stiff cell wall stops it swelling too far", "It has no vacuole", "Water cannot enter it"], "b",
    "Water entered both cells. Cell 2 swelled until its contents pressed against its strong cell wall, which stopped further swelling and kept it firm. "
    "Water cannot enter it is wrong: cell 2 did take in water, which is why its contents swelled up against the wall.",
    "Both cells took in water. Look at the outer layer around cell 2. What does cell 1 not have?",
    figure(
        "Before: cell 1 is a round cell with only a thin outline; cell 2 is a box-shaped cell with a thick outer layer. "
        "After time in pure water: cell 1 has burst into scattered pieces, while cell 2 is the same size with its swollen contents pressed against the thick layer.",
        text(40, 30, "before", size=13, weight="600", anchor="start"), text(40, 140, "after", size=13, weight="600", anchor="start"),
        circle(120, 75, 26, fill="#fee2e2", stroke="#b91c1c", sw=1.4), circle(120, 75, 6, fill="#b91c1c", stroke="none"),
        rect(205, 45, 70, 60, fill="#f0f9ff", stroke="#3f6212", sw=5), rect(220, 57, 44, 36, fill="#ecfccb", stroke="#65a30d", sw=1.2, rx=10),
        burst_cell(120, 175),
        rect(205, 145, 70, 60, fill="#ecfccb", stroke="#3f6212", sw=5), rect(212, 152, 56, 46, fill="#e0f2fe", stroke="#0284c7", sw=1.2, rx=6),
        text(120, 32, "1", size=15, weight="700"), text(240, 32, "2", size=15, weight="700"),
        line(10, 120, 310, 120, stroke="#e2e8f0", sw=1, dash="4 4"),
    ),
)

item(
    "g8-sci-cells-b-q10",
    "In the microscope shown, what is the knob labelled X used for?",
    ["To bring the object roughly into focus by making large movements", "To control the amount of light",
     "To hold the slide in place", "To change the eyepiece"], "a",
    "X is the large coarse adjustment knob. Turning it moves the tube a long way to bring the object roughly into focus; the smaller fine knob then sharpens the image. "
    "X does not control the light: the mirror under the stage does that.",
    "X is the larger of the two side knobs. Does turning it move the tube a long way or only a tiny bit?",
    figure(
        "A side view of a compound microscope with a mirror under the stage and two knobs on the arm. X points to the larger of the two knobs.",
        microscope(20, x_knob=True),
    ),
)

# ============================== Ch2 Force and pressure ==============================
def box_crate(x, y, w, h):
    return rect(x, y, w, h, fill="#d6a76a", stroke="#78350f", sw=2) + line(x, y, x + w, y + h, stroke="#92400e", sw=1.2) + \
        line(x + w, y, x, y + h, stroke="#92400e", sw=1.2)


item(
    "g8-sci-force-a-q05",
    "Riya and Aman push the same box, as shown. What is the net force on the box?",
    ["10 N to the right", "20 N to the right", "50 N to the right", "600 N to the right"], "c",
    "Both forces act to the right, so they add: 30 N + 20 N = 50 N to the right. "
    "10 N would be the answer only if the two pushes acted in opposite directions.",
    "Check the arrow directions on the box. When two pushes point the same way, do you add or subtract them to get the net force?",
    figure(
        "A box on the floor. Two arrows on its left side both point to the right: the upper one, Riya, is 30 N and the lower one, Aman, is 20 N.",
        line(10, 170, 310, 170, stroke=INK, sw=2), box_crate(170, 90, 90, 80),
        arrow(60, 110, 166, 110, stroke=BLUE, sw=3), text(90, 100, "Riya: 30 N", size=13, anchor="start"),
        arrow(80, 150, 166, 150, stroke="#dc2626", sw=3), text(90, 140, "Aman: 20 N", size=13, anchor="start"),
    ),
)

item(
    "g8-sci-force-a-q14",
    "Three small holes are made in a tall bottle full of water, as shown. From which hole does water come out with the greatest force?",
    ["From hole 3", "From hole 2", "From hole 1", "From all three holes equally"], "a",
    "Hole 3 is lowest, with the deepest water above it, so the pressure there is greatest and its jet is strongest. "
    "Hole 1 near the top has the least water above it, so its jet is the weakest.",
    "Pressure in a liquid depends on depth. Which hole has the most water above it?",
    figure(
        "A tall bottle filled with water to near the top, with three small holes in one side: hole 1 near the top, hole 2 in the middle and hole 3 near the bottom. No water jets are shown.",
        path("M120,200 L120,60 Q120,46 134,40 L134,20 L166,20 L166,40 Q180,46 180,60 L180,200 Z", fill="#ffffff", stroke=INK, sw=2.2),
        rect(122, 54, 56, 144, fill=LBLUE, stroke="none"), line(122, 54, 178, 54, stroke=BLUE, sw=1.5),
        line(120, 200, 180, 200, stroke=INK, sw=2.2),
        circle(180, 80, 4, fill="#ffffff", stroke=INK, sw=1.5), circle(180, 125, 4, fill="#ffffff", stroke=INK, sw=1.5), circle(180, 172, 4, fill="#ffffff", stroke=INK, sw=1.5),
        leader(184, 80, 230, 80, "hole 1", size=13), leader(184, 125, 230, 125, "hole 2", size=13), leader(184, 172, 230, 172, "hole 3", size=13),
        line(60, 212, 260, 212, stroke="#94a3b8", sw=1),
    ),
)

item(
    "g8-sci-force-a-q17",
    "A brick weighing 30 N has the measurements shown. On which labelled face should it rest to press on the ground with the GREATEST pressure?",
    ["Face P", "Face Q", "Face R", "The pressure is the same on every face"], "a",
    "Pressure = force ÷ area, and the weight is 30 N whichever way the brick rests, so the smallest face gives the most pressure. "
    "Face P is 0.1 m × 0.05 m = 0.005 m², giving 30 ÷ 0.005 = 6000 Pa. Face Q is the largest face, so it gives the least pressure.",
    "The weight stays 30 N whichever way it rests. Work out the area of each face: which is smallest?",
    figure(
        "A brick drawn in three dimensions, 0.3 m long, 0.1 m deep and 0.05 m high. Q marks the large top face, R the long front face, and P the small end face.",
        poly([(70, 120), (250, 120), (250, 150), (70, 150)], fill="#f97316", stroke="#7c2d12", sw=2),
        poly([(70, 120), (120, 80), (300, 80), (250, 120)], fill="#fdba74", stroke="#7c2d12", sw=2),
        poly([(250, 120), (300, 80), (300, 110), (250, 150)], fill="#ea580c", stroke="#7c2d12", sw=2),
        text(185, 104, "Q", size=16, weight="700"), text(160, 141, "R", size=16, weight="700", fill="#ffffff"), text(275, 122, "P", size=16, weight="700", fill="#ffffff"),
        dbl_arrow(70, 165, 250, 165), text(160, 182, "0.3 m", size=13),
        dbl_arrow(258, 158, 306, 120), text(268, 176, "0.1 m", size=13, anchor="start"),
        dbl_arrow(58, 120, 58, 150), text(52, 140, "0.05 m", size=12, anchor="end"),
        text(160, 40, "weight 30 N", size=14, weight="700"),
    ),
)


def flared(x, y, w_base, w_top, h, level_h):
    top_off = (w_top - w_base) / 2
    out = ""
    # water polygon (linear interpolate width at the level)
    f = level_h / h
    lw = w_base + (w_top - w_base) * f
    loff = (lw - w_base) / 2
    out += poly([(x, y + h), (x + w_base, y + h), (x + w_base + loff, y + h - level_h), (x - loff, y + h - level_h)], fill=LBLUE, stroke="none")
    out += polyline([(x - top_off, y), (x, y + h), (x + w_base, y + h), (x + w_base + top_off, y)], stroke=INK, sw=2.2)
    return out


item(
    "g8-sci-force-a-q19",
    "Containers P, Q and R have the same base area and are filled with water as shown. How does the water pressure at the bottom compare?",
    ["It is greatest at the bottom of P", "It is greatest at the bottom of Q", "It is greatest at the bottom of R", "It is the same in all three containers"], "d",
    "The dashed line shows the water is equally deep in all three, and liquid pressure depends on depth, not on the container's shape or how much water it holds. "
    "P holds the most water, but its extra water presses on the sloping sides, not on the base, so its bottom pressure is not greater.",
    "Pressure at the bottom depends on how deep the water is. Compare the water levels against the dashed line.",
    figure(
        "Three containers on a bench with equal bases: P widens towards the top, Q has straight sides, and R narrows towards the top. "
        "A dashed line across all three marks the water surface in each.",
        flared(40, 50, 50, 100, 140, 110), flared(140, 50, 50, 50, 140, 110), flared(240, 50, 50, 14, 140, 110),
        line(10, 80, 310, 80, stroke=BLUE, sw=1.5, dash="6 4"),
        line(10, 190, 310, 190, stroke="#94a3b8", sw=1.5),
        text(65, 210, "P", size=16, weight="700"), text(165, 210, "Q", size=16, weight="700"), text(265, 210, "R", size=16, weight="700"),
    ),
)

item(
    "g8-sci-force-a-q15",
    "The picture shows a cross-section of a dam holding back a lake. Why is the wall built in this shape?",
    ["So that the dam looks stronger", "Because water is colder at the bottom", "Because water pressure is greatest at the bottom", "To stop fish from swimming through"], "c",
    "Water pressure increases with depth, so the bottom of the wall takes the biggest push from the lake; the wall is made thickest there. "
    "Colder water is not the reason: the push of the water on the wall depends on its depth.",
    "The wall is thickest where the lake is deepest. How does the push of water change as you go deeper?",
    figure(
        "A cross-section of a concrete dam: a wall that is narrow at the top and very wide at the bottom, with a deep lake on the left side and dry ground on the right.",
        rect(10, 60, 150, 140, fill=LBLUE, stroke="none"), line(10, 60, 150, 60, stroke=BLUE, sw=1.5),
        "".join(path(f"M{x},60 q6,-4 12,0", stroke=BLUE, sw=1.2) for x in (30, 70, 110)),
        poly([(150, 40), (180, 40), (280, 200), (150, 200)], fill="#d1d5db", stroke="#374151", sw=2),
        line(0, 200, 320, 200, stroke="#78350f", sw=4),
        text(70, 130, "lake", size=14, weight="600"), text(300, 190, "ground", size=12, weight="500", anchor="end"),
    ),
)


def bag(x, strap_w, label):
    out = rect(x, 100, 90, 95, fill="#60a5fa", stroke="#1e3a8a", sw=2, rx=10)
    out += rect(x + 20, 140, 50, 30, fill="#93c5fd", stroke="#1e3a8a", sw=1.5, rx=4)
    out += path(f"M{x + 15},102 Q{x + 15},40 {x + 45},40 Q{x + 75},40 {x + 75},102", stroke="#1e3a8a", sw=strap_w + 2)
    out += path(f"M{x + 15},102 Q{x + 15},40 {x + 45},40 Q{x + 75},40 {x + 75},102", stroke="#3b82f6", sw=strap_w)
    out += text(x + 45, 165, "5 kg", size=13, weight="700", fill="#1e3a8a") + text(x + 45, 214, label, size=16, weight="700")
    return out


item(
    "g8-sci-force-a-q08",
    "School bags P and Q hold the same 5 kg load. Why is bag Q more comfortable to carry?",
    ["Its straps make the bag heavier", "Its straps increase the pressure on the shoulders", "It looks more attractive",
     "Its straps spread the weight over a larger area and reduce the pressure"], "d",
    "Both bags weigh the same, but Q's wide straps touch more of each shoulder, so the same force is spread over a larger area and the pressure is lower. "
    "Straps that increased the pressure would make the bag hurt more, not less.",
    "Compare the strap widths. Pressure is force divided by area, so what happens when the area grows?",
    figure(
        "Two school bags, each holding 5 kg. Bag P has very thin straps; bag Q has wide, flat straps.",
        bag(40, 3, "P"), bag(190, 18, "Q"),
    ),
)

item(
    "g8-sci-force-b-q24",
    "Water is poured into the glass tube shown until it is about half full. When the water settles, how do the levels in arms X and Y compare?",
    ["Higher in the wide arm X", "The same level in both arms", "Higher in the narrow arm Y", "Higher in whichever arm the water was poured into"], "b",
    "Liquid pressure depends only on depth, not on the width of the tube, so the water stops moving when both surfaces are at the same height. "
    "The narrow arm Y does not end up higher: the pressure at the bottom balances when the depths are equal.",
    "Pressure depends on the depth of water, not the width of the tube. When will the water stop moving?",
    figure(
        "An empty U-shaped glass tube with a wide arm X on the left and a narrow arm Y on the right, joined at the bottom.",
        path("M70,30 L70,160 Q70,195 105,195 L215,195 Q235,195 235,170 L235,30", stroke=INK, sw=2.5),
        path("M130,30 L130,150 Q130,160 140,160 L210,160 Q215,160 215,150 L215,30", stroke=INK, sw=2.5),
        text(100, 22, "X", size=16, weight="700"), text(225, 22, "Y", size=16, weight="700"),
        text(285, 110, "empty", size=12, weight="500"),
    ),
)


def card(x, title, w_txt, a_txt, icon):
    return rect(x, 30, 140, 160, fill="#f8fafc", stroke="#475569", sw=1.5, rx=8) + text(x + 70, 54, title, size=14, weight="700") + icon + \
        text(x + 70, 152, w_txt, size=12, weight="600") + text(x + 70, 172, a_txt, size=12, weight="600")


_heel = path("M40,120 L70,96 L110,96 Q120,96 120,108 L120,116 L74,116 L52,128 L52,140 L48,140 L46,126 Z", fill="#be185d", stroke="#831843", sw=1.5)
_foot = ellipse(240, 105, 30, 24, fill="#9ca3af", stroke="#374151", sw=1.5) + "".join(
    ellipse(222 + i * 12, 84, 5, 4, fill="#6b7280", stroke="none") for i in range(4))
item(
    "g8-sci-force-b-q20",
    "Use the data cards to decide who presses harder on the floor.",
    ["The woman, about 30 times more than the elephant", "The elephant, because it is much heavier", "Both exert equal pressure.",
     "The elephant, about 30 times more than the woman"], "a",
    "The woman exerts 600 ÷ 0.0002 = 3,000,000 Pa and the elephant 40,000 ÷ 0.4 = 100,000 Pa, so her pressure is about 30 times greater. "
    "The elephant is much heavier, but its weight is spread over a far larger area.",
    "Divide each weight by its contact area. Does the heavier one always give the bigger number?",
    figure(
        "Two data cards. Woman in stiletto heels: weight 600 N, total contact area 0.0002 square metres. Elephant on four feet: weight 40,000 N, total contact area 0.4 square metres.",
        card(15, "Woman in heels", "weight 600 N", "area 0.0002 m²", _heel),
        card(165, "Elephant", "weight 40,000 N", "area 0.4 m²", _foot),
    ),
)

item(
    "g8-sci-force-b-q22",
    "Use the information in the picture to find the total pressure on the diver.",
    ["About 4 atmospheres", "About 3 atmospheres", "About 30 atmospheres", "About 1 atmosphere"], "a",
    "The diver is 30 m deep, and every 10 m of water adds about 1 atmosphere, so the water adds about 3 atmospheres. The air above the sea adds 1 more, giving about 4 atmospheres. "
    "3 atmospheres forgets the air already pressing on the sea surface.",
    "Count how many 10 m steps down the diver is. Then remember what presses on the sea surface.",
    figure(
        "A depth scale beside the sea marked 0, 10, 20 and 30 m. A note says the air at the surface presses with 1 atmosphere and the water adds 1 atmosphere for every 10 m. A diver floats at the 30 m mark.",
        rect(60, 50, 260, 170, fill=LBLUE, stroke="none"), line(60, 50, 320, 50, stroke=BLUE, sw=2),
        text(190, 26, "air above: 1 atm", size=13, weight="700"),
        line(50, 50, 50, 200, stroke=INK, sw=1.6),
        "".join(line(44, 50 + i * 50, 56, 50 + i * 50, stroke=INK, sw=1.6) + text(40, 55 + i * 50, f"{i * 10} m", size=12, anchor="end") for i in range(4)),
        text(200, 90, "+1 atm for every 10 m", size=13, weight="600"),
        ellipse(180, 200, 26, 8, fill="#111827", stroke="none"), circle(214, 196, 8, fill="#fbbf24", stroke="#111827", sw=1.5),
        rect(160, 188, 24, 6, fill="#f59e0b", stroke="none"), text(260, 186, "diver", size=12, weight="600", anchor="start"),
    ),
)


def vehicle(x, tracks):
    out = rect(x + 10, 80, 100, 45, fill="#facc15", stroke="#713f12", sw=2, rx=4) + rect(x + 60, 55, 40, 28, fill="#fde68a", stroke="#713f12", sw=2)
    if tracks:
        out += rect(x, 122, 120, 26, fill="#374151", stroke="#111827", sw=2, rx=13) + \
            "".join(circle(x + 14 + i * 23, 135, 8, fill="#9ca3af", stroke="#111827", sw=1.2) for i in range(5))
    else:
        out += circle(x + 30, 140, 15, fill="#374151", stroke="#111827", sw=2) + circle(x + 90, 140, 15, fill="#374151", stroke="#111827", sw=2)
    return out


item(
    "g8-sci-force-b-q11",
    "Two vehicles of the same weight drive onto the same soft mud, as shown. Why does vehicle 2 stay on top of the mud?",
    ["Its tracks spread its weight over a larger area, so the pressure is lower", "It moves faster", "It presses harder on the ground", "It weighs less"], "a",
    "Vehicle 2's wide tracks touch a much larger area of mud, so the same weight gives a lower pressure and it does not sink in. "
    "It does not press harder: a higher pressure would push it deeper into the mud, as happened to vehicle 1.",
    "Compare how much of each vehicle touches the mud. The same weight over a bigger area gives what pressure?",
    figure(
        "Two vehicles of equal weight on soft mud. Vehicle 1 has two narrow wheels that have sunk deep into the mud. Vehicle 2 has long wide tracks and sits on the surface.",
        rect(0, 140, 320, 80, fill="#a16207", stroke="none", opacity=0.55), line(0, 140, 320, 140, stroke="#713f12", sw=2),
        vehicle(20, False).replace('cy="140"', 'cy="152"'), vehicle(185, True).replace("122", "114").replace('cy="135"', 'cy="127"'),
        text(80, 200, "vehicle 1", size=14, weight="700"), text(245, 200, "vehicle 2", size=14, weight="700"),
    ),
)

item(
    "g8-sci-force-b-q13",
    "Knives P and Q are pressed onto a tomato with the same force. The close-ups show their edges. Which cuts more easily, and why?",
    ["Knife Q, because its edge has a larger area", "Knife P, because its thin edge has a smaller area and gives greater pressure",
     "Both cut equally well with the same force", "Knife Q, because it gives more friction"], "b",
    "P's very thin edge touches only a tiny area, so the same force gives a much greater pressure and slices into the tomato. "
    "Knife Q's wider edge spreads the force over a larger area, which lowers the pressure, so the larger area does not help it cut.",
    "Compare the edge widths in the close-ups. With the same force, does a thinner edge give more or less pressure?",
    figure(
        "Two knives pressing down on tomatoes with equal force arrows. Close-ups of the blades: knife P ends in a very thin edge; knife Q ends in a wide, flat edge.",
        poly([(40, 30), (110, 30), (110, 60), (75, 120)], fill="#e5e7eb", stroke=INK, sw=1.8),
        poly([(200, 30), (270, 30), (270, 60), (250, 110), (220, 110), (200, 60)], fill="#e5e7eb", stroke=INK, sw=1.8),
        circle(75, 160, 34, fill="#ef4444", stroke="#7f1d1d", sw=1.5), circle(235, 160, 34, fill="#ef4444", stroke="#7f1d1d", sw=1.5),
        arrow(75, 2, 75, 27, sw=2.2), arrow(235, 2, 235, 27, sw=2.2), text(160, 18, "same force", size=12, weight="600"),
        text(25, 50, "P", size=16, weight="700"), text(185, 50, "Q", size=16, weight="700"),
        text(75, 212, "thin edge", size=12, weight="500"), text(235, 212, "wide edge", size=12, weight="500"),
    ),
)

item(
    "g8-sci-force-b-q14",
    "In the building shown, water comes out faster from tap T1 than from tap T4. Why?",
    ["Tap T1 is wider", "The water at T1 is warmer", "There is less friction in the pipe at T1",
     "T1 has a greater height of water above it, so the pressure is higher"], "d",
    "T1 is on the ground floor, far below the water level in the roof tank, so the depth of water above it, and so the pressure, is greatest. "
    "The taps are drawn the same size, so T1 being wider cannot explain the faster flow.",
    "Measure down from the water in the roof tank to each tap. Which tap is deepest below the water surface?",
    figure(
        "A four-storey building with a water tank on the roof and one pipe running down the side. Tap T4 is on the top floor and tap T1 is on the ground floor; both taps are the same size.",
        rect(80, 50, 140, 160, fill="#f1f5f9", stroke="#475569", sw=2),
        "".join(line(80, 50 + i * 40, 220, 50 + i * 40, stroke="#94a3b8", sw=1.2) for i in range(1, 4)),
        rect(110, 18, 60, 32, fill=LBLUE, stroke="#1e3a8a", sw=2), line(110, 26, 170, 26, stroke=BLUE, sw=1.5),
        polyline([(170, 44), (240, 44), (240, 196)], stroke="#64748b", sw=5),
        line(240, 76, 256, 76, stroke="#64748b", sw=5), line(256, 76, 256, 84, stroke="#64748b", sw=4),
        line(240, 196, 256, 196, stroke="#64748b", sw=5), line(256, 196, 256, 204, stroke="#64748b", sw=4),
        text(266, 82, "T4", size=14, anchor="start"), text(266, 202, "T1", size=14, anchor="start"),
        text(150, 75, "4th floor", size=11, weight="500"), text(150, 195, "ground floor", size=11, weight="500"),
        line(0, 210, 320, 210, stroke="#78350f", sw=3),
    ),
)

# ============================== Ch3 Metals and non-metals ==============================
CUSO4, FESO4 = "#60a5fa", "#bbf7d0"


def nail(x, y1, y2, coat=None, rust=False):
    out = rect(x - 7, y1 - 4, 14, 5, fill="#6b7280", stroke=INK, sw=1) + rect(x - 3, y1, 6, y2 - y1, fill="#9ca3af", stroke=INK, sw=1)
    out += poly([(x - 3, y2), (x + 3, y2), (x, y2 + 8)], fill="#9ca3af", stroke=INK, sw=1)
    if coat:
        out += rect(x - 3, y1 + (y2 - y1) * 0.35, 6, (y2 - y1) * 0.65, fill=coat, stroke="none")
    if rust:
        out += "".join(circle(x + (2 if i % 2 else -2), y1 + 10 + i * 9, 2.5, fill="#b45309", stroke="none") for i in range(int((y2 - y1 - 10) / 9)))
    return out


def strip_m(x, y1, y2, fill="#cbd5e1", coat=None):
    out = rect(x - 6, y1, 12, y2 - y1, fill=fill, stroke=INK, sw=1.2)
    if coat:
        out += "".join(circle(x + (-4 if i % 2 else 4), y1 + (y2 - y1) * 0.45 + i * 6, 2.6, fill=coat, stroke="none") for i in range(int((y2 - y1) * 0.55 / 6)))
    return out


item(
    "g8-sci-metals-a-q11",
    "The picture shows an iron nail in copper sulphate solution at the start (tube 1) and the same tube after 30 minutes (tube 2). What colour change is seen in the solution?",
    ["Colourless to blue", "Blue to light green", "Light green to blue", "No change at all"], "b",
    "Iron is more reactive than copper, so it displaces copper from the solution. Iron sulphate forms, which is light green, and brown copper coats the nail. "
    "Light green to blue is the reverse: the blue copper sulphate is used up, not made.",
    "Iron is more reactive than copper. Which new salt forms in tube 2, and what colour is it?",
    figure(
        "Tube 1, at the start: an iron nail standing in blue copper sulphate solution. Tube 2, after 30 minutes: the same nail now has a brown coating, and the colour of the solution is shown only as a question mark.",
        tube(70, 40, 40, 140, level=110, liquid=CUSO4), nail(90, 50, 160),
        tube(210, 40, 40, 140, level=110, liquid="#f1f5f9"), nail(230, 50, 160, coat="#b45309"), text(242, 112, "?", size=24, weight="700", fill="#dc2626"),
        text(90, 205, "tube 1: start", size=13), text(230, 205, "tube 2: 30 min", size=13),
        text(90, 28, "copper sulphate", size=12, weight="500"),
        arrow(130, 110, 190, 110, sw=2),
    ),
)


def mbeaker(x, n, metal_txt, sol_txt, liquid, strip_fill):
    return beaker(x, 70, 62, 90, level=62, liquid=liquid) + strip_m(x + 31, 50, 150, fill=strip_fill) + \
        text(x + 31, 44, metal_txt, size=11, weight="700") + text(x + 31, 178, sol_txt, size=10.5, weight="500") + \
        text(x + 31, 200, f"beaker {n}", size=13, weight="700")


item(
    "g8-sci-metals-a-q17",
    "A metal strip is placed in a salt solution in each beaker shown. In which beaker will NO displacement reaction take place?",
    ["In beaker 1", "In beaker 2", "In beaker 3", "In beaker 4"], "b",
    "A metal displaces another only if it is more reactive. Copper is less reactive than iron, so the copper strip in iron sulphate (beaker 2) cannot push the iron out. "
    "Beaker 4 does react: magnesium is more reactive than zinc, so it displaces zinc.",
    "A metal displaces another metal only if it is more reactive. In which beaker is the strip the less reactive metal?",
    figure(
        "Four beakers. Beaker 1: a zinc strip in copper sulphate. Beaker 2: a copper strip in iron sulphate. Beaker 3: an iron nail in copper sulphate. Beaker 4: a magnesium ribbon in zinc sulphate.",
        mbeaker(12, 1, "zinc", "copper sulphate", CUSO4, "#cbd5e1"), mbeaker(90, 2, "copper", "iron sulphate", FESO4, "#d97706"),
        mbeaker(168, 3, "iron", "copper sulphate", CUSO4, "#9ca3af"), mbeaker(246, 4, "magnesium", "zinc sulphate", "#f1f5f9", "#e5e7eb"),
    ),
)

item(
    "g8-sci-metals-a-q21",
    "The picture shows two experiments with metals P, Q and R. What is the correct order of reactivity?",
    ["R > Q > P", "Q > P > R", "P > Q > R", "P > R > Q"], "c",
    "A coating forms when the strip displaces the metal from its salt solution, and a metal displaces only a less reactive one. P displaced Q, and Q displaced R, so P > Q > R. "
    "R > Q > P reverses the order: the metal doing the displacing is the more reactive one.",
    "A coating forms when the strip pushes the other metal out of its solution. Which metal does the pushing each time?",
    figure(
        "Experiment 1: a strip of metal P in a solution of a salt of Q; after a while P is coated with a layer of metal Q. "
        "Experiment 2: a strip of metal Q in a solution of a salt of R; after a while Q is coated with a layer of metal R.",
        beaker(40, 60, 90, 110, level=80, liquid="#e9d5ff"), strip_m(85, 40, 160, fill="#cbd5e1", coat="#7c3aed"),
        beaker(190, 60, 90, 110, level=80, liquid="#fed7aa"), strip_m(235, 40, 160, fill="#ddd6fe", coat="#c2410c"),
        text(85, 32, "strip P", size=13), text(235, 32, "strip Q", size=13),
        text(85, 190, "salt of Q solution", size=12, weight="500"), text(235, 190, "salt of R solution", size=12, weight="500"),
        text(85, 210, "coating of Q forms", size=12, weight="600"),
        text(235, 210, "coating of R forms", size=12, weight="600"),
    ),
)

item(
    "g8-sci-metals-a-q08",
    "Iron nails were kept for a week in the three tubes shown. Which conditions must both be present for iron to rust?",
    ["Oxygen only", "Oxygen and water", "Water only", "Carbon dioxide and nitrogen"], "b",
    "Only the nail in tube 1, which has both air and water, has rusted. Tube 2 has water but no air (boiled water under oil), and tube 3 has air but no water (dried by calcium chloride). "
    "Water only cannot be right, because the nail in tube 2 had water and did not rust.",
    "Only one nail rusted. What does the oil layer keep out of tube 2, and what does calcium chloride remove from tube 3?",
    figure(
        "Three test tubes after a week. Tube 1: open, with a nail half in tap water, and the nail is covered in brown rust. "
        "Tube 2: corked, with a nail in boiled water under a layer of oil; the nail is clean. Tube 3: corked, with a nail in dry air above some calcium chloride; the nail is clean.",
        tube(40, 40, 40, 140, level=70, liquid=LBLUE), nail(60, 50, 155, rust=True),
        tube(140, 40, 40, 140, level=110, liquid=LBLUE, cork=True), rect(142, 70, 36, 14, fill="#fde047", stroke="none", opacity=0.9), nail(160, 50, 155),
        tube(240, 40, 40, 140, cork=True), rect(242, 150, 36, 18, fill="#f8fafc", stroke="none"),
        "".join(circle(248 + i * 6, 160 - (i % 2) * 5, 3, fill="#e5e7eb", stroke="#64748b", sw=0.8) for i in range(5)), nail(260, 45, 132),
        text(60, 200, "1", size=15, weight="700"), text(160, 200, "2", size=15, weight="700"), text(260, 200, "3", size=15, weight="700"),
        text(60, 214, "tap water, open", size=10.5, weight="500"), text(160, 214, "boiled water + oil", size=10.5, weight="500"),
        text(260, 214, "calcium chloride", size=10.5, weight="500"),
    ),
)

item(
    "g8-sci-metals-a-q07",
    "Follow the three steps in the picture. What happens to the red litmus paper in step 3?",
    ["It stays red", "It turns colourless", "It turns green", "It turns blue"], "d",
    "Burning magnesium in air forms white magnesium oxide, a basic oxide. In water it forms magnesium hydroxide, a base, which turns red litmus blue. "
    "It does not stay red: red litmus stays red only in acidic or neutral solutions.",
    "The white ash is a metal oxide. Are metal oxides usually acidic or basic, and what does a base do to red litmus?",
    figure(
        "Step 1: a magnesium ribbon burning with a bright flame, held in tongs, leaving white ash. Step 2: the ash stirred into water in a beaker. "
        "Step 3: a strip of red litmus paper dipped into the solution, with a question mark.",
        line(20, 70, 70, 100, stroke="#475569", sw=3), line(20, 78, 70, 102, stroke="#475569", sw=3),
        line(70, 101, 90, 112, stroke="#9ca3af", sw=3), circle(92, 112, 10, fill="#fef9c3", stroke="#facc15", sw=2),
        "".join(line(92, 112, 92 + 18 * c, 112 + 18 * s, stroke="#facc15", sw=1.5) for c, s in [(1, 0), (0, -1), (-0.7, -0.7), (0.7, -0.7), (0.7, 0.7)]),
        ellipse(80, 150, 22, 6, fill="#f8fafc", stroke="#94a3b8", sw=1.2), text(80, 140, "white ash", size=11, weight="500"),
        beaker(130, 90, 60, 70, level=45, liquid="#f1f5f9"), line(170, 70, 150, 150, stroke="#92400e", sw=3),
        beaker(230, 90, 60, 70, level=45, liquid="#f1f5f9"), rect(254, 60, 12, 80, fill="#f87171", stroke="#991b1b", sw=1),
        text(285, 75, "?", size=22, weight="700", fill="#dc2626"),
        text(60, 195, "1. burn", size=13), text(160, 195, "2. ash + water", size=13), text(260, 195, "3. red litmus", size=13),
        arrow(108, 125, 126, 125, sw=1.8), arrow(198, 125, 224, 125, sw=1.8),
    ),
)

item(
    "g8-sci-metals-a-q01",
    "Processes 1 and 2 in the picture each use a different property of metals. Which property does process 1 use?",
    ["Ductility", "Malleability", "Sonority", "Lustre"], "b",
    "In process 1 a hammer beats a metal lump into a thin flat sheet, which uses malleability. "
    "Ductility is the property used in process 2, where the metal is pulled out into a long thin wire.",
    "In process 1 the metal is beaten flat, not pulled long. Which property lets metals be hammered into sheets?",
    figure(
        "Process 1: a hammer coming down on a metal lump on an anvil, next to a thin flat sheet it has made. Process 2: a metal rod being pulled through a small hole in a plate to make a long thin wire.",
        rect(30, 150, 110, 18, fill="#475569", stroke=INK, sw=1.5), rect(60, 168, 50, 30, fill="#475569", stroke=INK, sw=1.5),
        ellipse(70, 143, 18, 7, fill="#cbd5e1", stroke=INK, sw=1.2), poly([(96, 146), (140, 146), (138, 150), (94, 150)], fill="#e2e8f0", stroke=INK, sw=1),
        rect(56, 60, 34, 22, fill="#78716c", stroke=INK, sw=1.5), line(90, 71, 140, 40, stroke="#a16207", sw=6), arrow(62, 92, 66, 126, sw=2),
        text(85, 25, "process 1", size=14, weight="700"),
        rect(220, 70, 14, 110, fill="#64748b", stroke=INK, sw=1.5), circle(227, 125, 3, fill="#ffffff", stroke=INK, sw=1),
        rect(170, 118, 50, 14, fill="#cbd5e1", stroke=INK, sw=1.2), line(234, 125, 300, 125, stroke="#94a3b8", sw=2.5),
        arrow(270, 140, 305, 140, sw=2), text(240, 25, "process 2", size=14, weight="700"),
    ),
)


def rail(x, rusty):
    out = line(x, 120, x + 100, 120, stroke="#374151", sw=4) + line(x, 170, x + 100, 170, stroke="#374151", sw=4)
    for i in range(6):
        out += line(x + i * 20, 110, x + i * 20, 180, stroke="#374151", sw=3.5)
    if rusty:
        out += "".join(circle(x + (i * 17) % 100, 120 + (i * 23) % 60, 3.2, fill="#b45309", stroke="none") for i in range(26))
    return out


item(
    "g8-sci-metals-b-q18",
    "Iron railings were put up in towns P and Q at the same time. The picture shows them after five years. Why are the railings in town P more rusted?",
    ["Sea air has no oxygen.", "Salt stops water from touching the iron.", "Sea sand coats and protects the iron.", "Moist, salty air speeds up rusting."], "d",
    "Town P is beside the sea, where the air carries a lot of moisture and salt. Salt speeds up the reaction of iron with oxygen and water. "
    "Sea air does contain oxygen, so having no oxygen cannot be the reason; without oxygen there would be no rust at all.",
    "Notice what lies next to town P. What does the air there carry that the inland air of town Q lacks?",
    figure(
        "Town P beside the sea, with waves and spray in the air, has an iron railing covered in brown rust spots. Town Q, far inland with dry hills and sun, has a railing with only a few spots.",
        "".join(path(f"M{x},90 q8,-8 16,0 q8,8 16,0", stroke=BLUE, sw=2) for x in (5, 37, 69, 101)),
        rect(0, 92, 150, 12, fill=LBLUE, stroke="none"),
        "".join(circle(20 + i * 18, 60 + (i % 3) * 8, 2, fill="#93c5fd", stroke="none") for i in range(7)),
        rail(25, True),
        path("M175,100 L215,60 L250,95 L280,70 L320,100 Z", fill="#fde68a", stroke="#a16207", sw=1.5),
        circle(290, 30, 12, fill="#facc15", stroke="#b45309", sw=1.5),
        rail(195, False), circle(230, 140, 3, fill="#b45309", stroke="none"), circle(270, 160, 3, fill="#b45309", stroke="none"),
        text(75, 205, "town P (by the sea)", size=13), text(245, 205, "town Q (inland)", size=13),
        line(160, 20, 160, 210, stroke="#e2e8f0", sw=1),
    ),
)

item(
    "g8-sci-metals-b-q21",
    "The nail in the tube shown has not rusted after a week. Why?",
    ["There is no water in the tube.", "The water is too cold.", "The oil reacts with the iron.",
     "The boiled water has almost no dissolved air, and the oil stops air from entering."], "d",
    "Boiling drives out the air dissolved in the water, and the oil layer stops fresh air from dissolving again. Without oxygen, iron cannot rust. "
    "There is water in the tube, so no water is wrong: it is air that is missing.",
    "Read the labels in the tube. What does boiling remove from water, and what does the oil layer keep out?",
    figure(
        "A corked test tube holding an iron nail in boiled water. A thin layer of oil floats on top of the water. The nail is clean.",
        tube(140, 40, 40, 150, level=120, liquid=LBLUE, cork=True), rect(142, 70, 36, 14, fill="#fde047", stroke="none", opacity=0.9),
        nail(160, 52, 165),
        leader(178, 77, 230, 60, "oil layer", size=13), leader(176, 140, 230, 140, "boiled water", size=13),
        leader(163, 110, 100, 110, "iron nail", size=13), text(160, 214, "after one week", size=12, weight="500"),
    ),
)

item(
    "g8-sci-metals-b-q22",
    "Metal X is tested in the three tubes shown. What could metal X be?",
    ["Iron", "Magnesium", "Silver", "Gold"], "a",
    "X gives hydrogen with dilute acid and displaces copper, but cannot displace zinc, so it is less reactive than zinc yet more reactive than copper and hydrogen. Iron fits. "
    "Magnesium is more reactive than zinc, so it would have displaced zinc in tube 3.",
    "Tube 3 shows no change. Is X more or less reactive than zinc, and does it still beat copper?",
    figure(
        "Three tubes, each with a piece of metal X. Tube 1, dilute hydrochloric acid: bubbles of gas rise. Tube 2, copper sulphate solution: X gets a brown coating. Tube 3, zinc sulphate solution: no change.",
        tube(45, 50, 40, 120, level=90, liquid="#fef9c3"), strip_m(65, 100, 158, fill="#9ca3af"),
        "".join(circle(58 + (i % 3) * 7, 150 - i * 12, 2.6, fill="#ffffff", stroke="#64748b", sw=1) for i in range(5)),
        tube(140, 50, 40, 120, level=90, liquid=CUSO4), strip_m(160, 100, 158, fill="#9ca3af", coat="#b45309"),
        tube(235, 50, 40, 120, level=90, liquid="#f1f5f9"), strip_m(255, 100, 158, fill="#9ca3af"),
        text(65, 192, "dilute acid", size=12, weight="600"), text(65, 210, "bubbles", size=12, weight="500"),
        text(160, 192, "copper sulphate", size=12, weight="600"), text(160, 210, "brown coat", size=12, weight="500"),
        text(255, 192, "zinc sulphate", size=12, weight="600"), text(255, 210, "no change", size=12, weight="500"),
        text(160, 30, "metal X in each tube", size=13, weight="700"),
    ),
)

item(
    "g8-sci-metals-b-q19",
    "Two rods of the same size are dropped onto a stone floor. The picture shows the sound each one makes. Which rod is metal, and why?",
    ["Rod 2, because metals are sonorous", "Rod 1, because metals are ductile", "Rod 1, because metals are sonorous", "Rod 2, because metals are brittle"], "c",
    "Rod 1 gives a long ringing sound when it strikes the floor, so it is the metal rod: metals are sonorous. "
    "Ductility means being drawn into wires, which has nothing to do with the sound a rod makes.",
    "Look at the sound marks next to each rod. Which kind of material gives a ringing sound when struck?",
    figure(
        "Two rods of the same size hitting a stone floor. Rod 1 is shown with many curved sound lines and the words ring ring. Rod 2 is shown with one short mark and the word thud.",
        line(0, 180, 320, 180, stroke="#57534e", sw=4),
        rect(60, 60, 18, 118, fill="#cbd5e1", stroke="#334155", sw=1.5, transform="rotate(-12 69 119)"),
        "".join(path(f"M{100 + i * 12},{120 - i * 10} q{10 + i * 4},{20 + i * 6} 0,{40 + i * 14}", stroke=BLUE, sw=2) for i in range(3)),
        text(110, 80, "ring... ring...", size=14, weight="700", fill=BLUE, anchor="start"),
        rect(220, 60, 18, 118, fill="#d6a76a", stroke="#78350f", sw=1.5, transform="rotate(-12 229 119)"),
        line(256, 160, 268, 160, stroke="#78350f", sw=2.5), text(262, 145, "thud", size=14, weight="700", fill="#78350f"),
        text(70, 205, "rod 1", size=14, weight="700"), text(230, 205, "rod 2", size=14, weight="700"),
    ),
)

item(
    "g8-sci-metals-b-q10",
    "Look at the pan shown. Why is part X made of metal?",
    ["Metal is a good conductor of heat", "Metal is sonorous", "Metal is brittle", "Metal has a low melting point"], "a",
    "Part X sits on the flame and must carry heat quickly to the food, so it is made of metal, a good conductor of heat. Handle Y is a poor conductor so it stays cool. "
    "A low melting point would be a problem: the base would melt on the stove.",
    "Part X sits right on the flame and must pass heat to the food. Which property helps it do that?",
    figure(
        "A cooking pan on a gas flame. X points to the shiny body and base of the pan touching the flame; Y points to the black handle sticking out to the side.",
        path("M60,90 L70,140 Q72,150 82,150 L198,150 Q208,150 210,140 L220,90 Z", fill="#cbd5e1", stroke="#334155", sw=2),
        ellipse(140, 90, 80, 10, fill="#e2e8f0", stroke="#334155", sw=2), rect(218, 88, 90, 12, fill="#111827", stroke="#111827", sw=1, rx=5),
        "".join(path(f"M{x},185 q-8,-14 0,-30 q8,14 0,30 Z", fill="#60a5fa", stroke="#1d4ed8", sw=1) for x in (100, 125, 150, 175)),
        rect(80, 185, 120, 10, fill="#475569", stroke="none"),
        leader(80, 140, 30, 175, "X", size=16), leader(285, 94, 290, 50, "Y", size=16, anchor="middle", dy=-6),
    ),
)

item(
    "g8-sci-metals-b-q12",
    "The picture shows two metals in dilute hydrochloric acid. Why does one of them give no bubbles?",
    ["Copper is more reactive than hydrogen", "Copper is less reactive than hydrogen", "Copper is a non-metal", "Copper is a liquid"], "b",
    "Bubbles of hydrogen form only around the zinc. Copper lies below hydrogen in the reactivity series, so it cannot push hydrogen out of the acid. "
    "If copper were more reactive than hydrogen, it would bubble just like the zinc.",
    "Find the tube without bubbles. Compare that metal's place in the reactivity series with hydrogen.",
    figure(
        "Two test tubes of dilute hydrochloric acid. The tube with a zinc granule has many gas bubbles rising. The tube with a copper turning has no bubbles.",
        tube(80, 50, 44, 130, level=100, liquid="#fef9c3"), circle(102, 162, 9, fill="#94a3b8", stroke=INK, sw=1.2),
        "".join(circle(95 + (i % 3) * 7, 145 - i * 10, 2.8, fill="#ffffff", stroke="#64748b", sw=1) for i in range(8)),
        tube(200, 50, 44, 130, level=100, liquid="#fef9c3"), path("M212,166 q10,-10 20,0 q-10,6 -20,0 Z", fill="#d97706", stroke="#78350f", sw=1.2),
        text(102, 204, "zinc", size=14, weight="700"), text(222, 204, "copper", size=14, weight="700"),
        text(160, 30, "dilute hydrochloric acid", size=13, weight="600"),
    ),
)

# ============================== Ch4 Combustion and flame ==============================
def candle(cx, base_y, h=70, flame=True, zones=False):
    out = rect(cx - 14, base_y - h, 28, h, fill="#fef3c7", stroke="#a16207", sw=1.5)
    out += line(cx, base_y - h, cx, base_y - h - 10, stroke=INK, sw=2)
    if flame and zones:
        top = base_y - h - 10
        out += path(f"M{cx},{top - 110} C{cx + 42},{top - 60} {cx + 40},{top + 4} {cx},{top + 6} C{cx - 40},{top + 4} {cx - 42},{top - 60} {cx},{top - 110} Z",
                    fill="#dbeafe", stroke="#2563eb", sw=1.5)
        out += path(f"M{cx},{top - 100} C{cx + 32},{top - 58} {cx + 30},{top - 4} {cx},{top - 2} C{cx - 30},{top - 4} {cx - 32},{top - 58} {cx},{top - 100} Z",
                    fill="#fde047", stroke="#ca8a04", sw=1)
        out += path(f"M{cx},{top - 40} C{cx + 12},{top - 28} {cx + 12},{top - 6} {cx},{top - 4} C{cx - 12},{top - 6} {cx - 12},{top - 28} {cx},{top - 40} Z",
                    fill="#1f2937", stroke="none", opacity=0.85)
    elif flame:
        top = base_y - h - 8
        out += path(f"M{cx},{top - 34} C{cx + 14},{top - 16} {cx + 12},{top} {cx},{top + 2} C{cx - 12},{top} {cx - 14},{top - 16} {cx},{top - 34} Z",
                    fill="#fde047", stroke="#ea580c", sw=1.5)
    return out


item(
    "g8-sci-combustion-a-q10",
    "The picture shows the three zones of a candle flame. Which statement about zone 3 is correct?",
    ["It is the coolest zone", "It is the hottest zone, where combustion is complete", "It is made only of unburnt wax vapour", "No oxygen reaches it"], "b",
    "Zone 3 is the thin outer, non-luminous zone. It gets plenty of air, so the fuel burns completely and this is the hottest part of the flame. "
    "It is not the coolest zone: the dark innermost zone 1, around the wick, is the coolest.",
    "Zone 3 is on the outside, touching the air. How much oxygen reaches it, and how well does the wax burn there?",
    figure(
        "A candle flame with three zones: zone 1 is the dark innermost part around the wick, zone 2 is the bright yellow middle part, and zone 3 is the thin pale blue outer layer.",
        candle(140, 210, h=60, zones=True),
        leader(140, 128, 230, 150, "zone 1", size=13), leader(156, 80, 230, 95, "zone 2", size=13), leader(160, 66, 230, 40, "zone 3", size=13),
    ),
)

item(
    "g8-sci-combustion-a-q07",
    "The fire triangle shows the three things a fire needs. What should replace the question mark?",
    ["Nitrogen", "Carbon dioxide", "Oxygen (air)", "Argon"], "c",
    "A fire needs fuel, heat and oxygen from the air; take away any one side of the triangle and the fire goes out. "
    "Carbon dioxide is wrong: it does not help things burn, which is why it is used to put fires out.",
    "The triangle already shows fuel and heat. Which gas from the air do things need in order to burn?",
    figure(
        "A triangle with a flame in the middle. One side is labelled fuel, another side is labelled heat, and the third side has a question mark.",
        poly([(160, 25), (285, 190), (35, 190)], fill="#fff7ed", stroke="#c2410c", sw=4),
        path("M160,95 C185,125 182,160 160,165 C138,160 135,125 160,95 Z", fill="#f97316", stroke="#c2410c", sw=1.5),
        path("M160,125 C170,140 168,158 160,160 C152,158 150,140 160,125 Z", fill="#fde047", stroke="none"),
        text(72, 100, "fuel", size=15, weight="700", transform="rotate(-53 72 100)"),
        text(250, 100, "heat", size=15, weight="700", transform="rotate(53 250 100)"),
        text(160, 212, "?", size=22, weight="700", fill="#dc2626"),
    ),
)

item(
    "g8-sci-combustion-a-q03",
    "The graph shows the temperature of a piece of paper as it is heated slowly. What is the temperature at point X called?",
    ["Boiling point", "Melting point", "Ignition temperature", "Freezing point"], "c",
    "At X, about 230 °C, the paper first bursts into flame. The lowest temperature at which a substance catches fire is its ignition temperature. "
    "It is not a boiling point: the paper does not turn into a vapour at X, it starts to burn.",
    "Look at what happens to the paper at X. What name is given to the lowest temperature at which something starts burning?",
    figure(
        "A graph of temperature in degrees Celsius against time while paper is heated. The line rises steadily. At point X, near 230 degrees, a small flame symbol shows the paper bursting into flame.",
        axes(50, 190, 250, 160, "time", "temperature (°C)", yticks=[(46, "100"), (92, "200"), (138, "300")]),
        polyline([(50, 178), (120, 145), (180, 106), (210, 85)], stroke="#dc2626", sw=2.5),
        circle(210, 85, 5, fill="#dc2626", stroke="none"), line(50, 85, 210, 85, stroke="#94a3b8", sw=1.2, dash="4 3"),
        text(222, 106, "X", size=16, weight="700"),
        path("M222,72 C232,60 230,48 222,38 C222,50 212,52 214,64 C214,70 218,74 222,72 Z", fill="#f97316", stroke="#c2410c", sw=1.2),
        text(212, 52, "flames appear", size=12, weight="600", anchor="end"),
    ),
)

item(
    "g8-sci-combustion-a-q09",
    "The picture shows a carbon dioxide extinguisher being used on a burning tray of oil. How does the gas put the fire out?",
    ["By cutting off the supply of air (oxygen)", "By raising the fuel's ignition temperature", "By adding more fuel", "By increasing the flame temperature"], "a",
    "Carbon dioxide is heavier than air, so it settles over the fire like a blanket and keeps oxygen away from the fuel; it also cools it. "
    "It does not raise the ignition temperature, which is a fixed property of the fuel.",
    "See how the gas spreads low over the burning tray. Which of the three things a fire needs does it keep away?",
    figure(
        "A red extinguisher on the left sprays a white cloud of carbon dioxide. The heavy cloud spreads low and covers a burning tray of oil like a blanket.",
        rect(25, 90, 40, 110, fill="#dc2626", stroke="#7f1d1d", sw=2, rx=10), rect(36, 72, 18, 20, fill="#111827", stroke="none"),
        path("M54,78 Q90,60 110,92", stroke="#111827", sw=5), poly([(108, 86), (122, 98), (106, 100)], fill="#111827", stroke="#111827", sw=1),
        path("M120,100 C150,80 190,95 220,110 C260,120 300,130 305,160 C280,175 160,178 130,160 C110,145 112,118 120,100 Z", fill="#e5e7eb", stroke="#9ca3af", sw=1.5, opacity=0.9),
        text(200, 130, "carbon dioxide", size=13, weight="600"),
        rect(170, 170, 120, 16, fill="#78716c", stroke="#44403c", sw=1.5),
        "".join(path(f"M{x},170 q-6,-10 0,-20 q6,10 0,20 Z", fill="#f97316", stroke="#c2410c", sw=1, opacity=0.6) for x in (190, 215, 240, 265)),
        text(230, 205, "burning oil", size=12, weight="500"),
    ),
)


def bar_chart(x0, y0, bars, maxv, h=140, w=46, gap=18, unit=""):
    out = line(x0, y0, x0 + len(bars) * (w + gap) + gap, y0, stroke=INK, sw=1.6) + line(x0, y0, x0, y0 - h - 10, stroke=INK, sw=1.6)
    for i, (lab, v, col) in enumerate(bars):
        bh = h * v / maxv
        bx = x0 + gap + i * (w + gap)
        out += rect(bx, y0 - bh, w, bh, fill=col, stroke=INK, sw=1.2)
        out += text(bx + w / 2, y0 - bh - 6, f"{v:,}{unit}", size=11, weight="600")
        out += text(bx + w / 2, y0 + 16, lab, size=12, weight="600")
    return out


item(
    "g8-sci-combustion-a-q13",
    "The bar chart shows the calorific values of four fuels. Which fuel gives the most heat when 1 kg of it burns completely?",
    ["LPG", "Kerosene", "Coal", "Wood"], "a",
    "Calorific value is the heat given out when 1 kg of a fuel burns completely. LPG has the tallest bar, 55,000 kJ/kg. "
    "Kerosene comes close at 45,000 kJ/kg, but its bar is shorter, so it gives less heat per kilogram.",
    "Calorific value means the heat from burning 1 kg of fuel. Read each bar: which one reaches highest?",
    figure(
        "A bar chart of calorific value in kilojoules per kilogram: wood 17,000, coal 27,000, kerosene 45,000 and LPG 55,000.",
        text(160, 20, "calorific value (kJ/kg)", size=13, weight="700"),
        bar_chart(40, 190, [("wood", 17000, "#d6a76a"), ("coal", 27000, "#57534e"), ("kerosene", 45000, "#60a5fa"), ("LPG", 55000, "#f97316")], 55000, h=140, w=50),
    ),
)

item(
    "g8-sci-combustion-a-q05",
    "A heap of oily rags is left in a warm cupboard and nobody lights it. The picture shows what happens over five days. What kind of burning happens on day 5?",
    ["Spontaneous combustion", "Rapid combustion", "Complete combustion only", "An acid–base reaction"], "a",
    "The rags slowly warmed up by themselves until they reached their ignition temperature and burst into flame without any match. This is spontaneous combustion. "
    "Rapid combustion is when something burns quickly after it is lit, like cooking gas lit with a match.",
    "No match was used, yet the rags got hotter every day. What do we call burning that starts by itself?",
    figure(
        "Three pictures of a heap of oily rags in a cupboard with a thermometer. Day 1: 30 degrees Celsius. Day 3: 45 degrees Celsius. Day 5: the rags are on fire. No match is used.",
        "".join(rect(15 + i * 102, 40, 90, 130, fill="#fef3c7", stroke="#92400e", sw=2) +
                path(f"M{25 + i * 102},160 Q{60 + i * 102},120 {95 + i * 102},160 Z", fill="#a3a3a3", stroke="#525252", sw=1.2) +
                path(f"M{35 + i * 102},150 q15,-12 30,0", stroke="#ca8a04", sw=2) for i in range(3)),
        text(60, 80, "30 °C", size=14, weight="700"), text(162, 80, "45 °C", size=14, weight="700", fill="#ea580c"),
        path("M264,140 C290,110 286,80 264,60 C268,90 240,96 246,124 C248,136 256,142 264,140 Z", fill="#f97316", stroke="#c2410c", sw=1.5),
        path("M280,145 C294,128 290,110 280,98 C282,118 270,122 272,136 Z", fill="#fde047", stroke="#ea580c", sw=1),
        text(60, 192, "day 1", size=13, weight="700"), text(162, 192, "day 3", size=13, weight="700"), text(264, 192, "day 5", size=13, weight="700"),
        text(160, 214, "no match used", size=12, weight="500"),
    ),
)

item(
    "g8-sci-combustion-b-q19",
    "Two identical candles were lit at the same time. The picture shows them one minute later. Why has candle 2 gone out?",
    ["Its wax could no longer burn", "Its ignition temperature rose", "The oxygen inside was used up and not replaced", "The glass gave out nitrogen"], "c",
    "The glass trapped only a little air. The flame used up the oxygen in it, no fresh air could get in, and so burning stopped. "
    "The wax itself could still burn: candle 1, out in the open air, is still alight.",
    "Candle 1 is still burning in the open. What does candle 2 run out of under the glass?",
    figure(
        "Candle 1 stands in the open and is still burning. Candle 2 stands under an upside-down glass tumbler and its flame has gone out, leaving a thin wisp of smoke.",
        candle(80, 190, h=80), candle(230, 190, h=80, flame=False),
        path("M230,98 q-6,-12 0,-22 q6,-10 0,-20", stroke="#9ca3af", sw=1.5),
        path("M180,190 L188,40 L272,40 L280,190", stroke="#64748b", sw=2.5), line(186, 44, 274, 44, stroke="#64748b", sw=2.5),
        line(20, 190, 300, 190, stroke=INK, sw=2),
        text(80, 210, "candle 1", size=13, weight="700"), text(230, 210, "candle 2", size=13, weight="700"),
    ),
)

item(
    "g8-sci-combustion-b-q14",
    "A clean glass plate is held in zone X of a candle flame for a few seconds. It comes out with a black coating, as shown. Why does zone X glow yellow?",
    ["All the carbon burns completely there", "Partial burning leaves hot, glowing carbon particles", "Ice crystals form in it", "It gives out only ultraviolet light"], "b",
    "Little air reaches zone X, so the wax burns only partly. Tiny unburnt carbon particles become very hot and glow yellow, and they collect on the plate as black soot. "
    "If all the carbon burned completely, no soot would be left on the plate.",
    "The black coating on the plate is unburnt carbon. What does that tell you about how much air reaches zone X?",
    figure(
        "A candle flame with a glass plate held in its bright yellow middle zone, labelled X. Beside it, the plate after a few seconds has a round black sooty patch.",
        candle(110, 210, h=60, zones=True),
        rect(60, 88, 100, 6, fill="#e0f2fe", stroke="#0369a1", sw=1.2),
        leader(95, 112, 40, 130, "X", size=16),
        rect(205, 100, 100, 8, fill="#e0f2fe", stroke="#0369a1", sw=1.2), ellipse(255, 104, 22, 5, fill="#111827", stroke="none"),
        text(255, 132, "plate afterwards", size=12, weight="600"),
    ),
)

item(
    "g8-sci-combustion-b-q10",
    "Follow the arrows in the picture. Why does the rain falling near the factory become acidic?",
    ["The gases make the rain alkaline like soap", "The gases dissolve in rainwater to form acids", "The gases turn the rain into pure oxygen", "The gases freeze the clouds"], "b",
    "Sulphur dioxide and nitrogen oxides from the chimney rise into the clouds and dissolve in the water droplets, forming acids that fall as acid rain. "
    "Alkaline like soap is the opposite: acid rain has a low pH.",
    "The chimney gases rise into the clouds. What happens when they mix with the water droplets there?",
    figure(
        "A factory chimney gives off smoke containing sulphur dioxide and nitrogen oxides. An arrow leads up to a rain cloud, and rain falls from the cloud onto trees and a lake.",
        rect(30, 120, 80, 80, fill="#94a3b8", stroke="#334155", sw=2), rect(80, 60, 18, 60, fill="#64748b", stroke="#334155", sw=2),
        path("M89,58 C80,40 100,30 110,40 C120,25 140,35 135,48", fill="#d1d5db", stroke="#6b7280", sw=1.5),
        text(60, 12, "sulphur dioxide,", size=11, weight="600"), text(60, 25, "nitrogen oxides", size=11, weight="600"),
        arrow(140, 50, 185, 50, sw=2),
        path("M195,60 C185,40 205,25 222,34 C232,15 262,18 266,36 C290,32 300,56 282,64 Z", fill="#cbd5e1", stroke="#475569", sw=1.5),
        "".join(line(x, 76, x - 5, 92, stroke=BLUE, sw=2) for x in (210, 228, 246, 264, 282)) +
        "".join(line(x, 104, x - 5, 120, stroke=BLUE, sw=2) for x in (218, 238, 258, 276)),
        circle(205, 160, 18, fill="#86efac", stroke="#166534", sw=1.5), rect(202, 176, 6, 24, fill="#92400e", stroke="none"),
        ellipse(270, 196, 40, 9, fill=LBLUE, stroke=BLUE, sw=1.5),
        line(0, 200, 320, 200, stroke="#78350f", sw=2),
    ),
)

item(
    "g8-sci-combustion-b-q02",
    "The picture shows how a matchstick is lit. Why does it catch fire only after step 2?",
    ["Rubbing removes oxygen from the air", "The heat from rubbing raises the tip to its low ignition temperature",
     "Rubbing turns the tip into an insulator", "The box gives out nitrogen"], "b",
    "In step 2 the tip is rubbed quickly across the rough strip. Friction produces a little heat, and because the tip chemicals have a low ignition temperature, this is enough to light them. "
    "Rubbing does not remove oxygen from the air: the match needs oxygen to burn.",
    "In step 2 the tip is rubbed quickly. What does rubbing two surfaces produce, and why is a little enough here?",
    figure(
        "Step 1: a matchstick held still against the rough strip on the side of a matchbox; nothing happens. Step 2: the match is rubbed quickly along the strip and the tip bursts into flame.",
        rect(20, 120, 120, 50, fill="#fde68a", stroke="#92400e", sw=2), rect(20, 160, 120, 10, fill="#78350f", stroke="none"),
        line(60, 100, 110, 158, stroke="#d6a76a", sw=5), circle(112, 160, 5, fill="#dc2626", stroke="none"),
        text(80, 200, "1. held still", size=13, weight="700"),
        rect(180, 120, 120, 50, fill="#fde68a", stroke="#92400e", sw=2), rect(180, 160, 120, 10, fill="#78350f", stroke="none"),
        line(250, 100, 300, 140, stroke="#d6a76a", sw=5), circle(302, 142, 5, fill="#dc2626", stroke="none"),
        path("M302,138 C314,122 310,108 302,98 C302,112 292,116 294,128 Z", fill="#f97316", stroke="#c2410c", sw=1.2),
        arrow(200, 150, 280, 150, sw=2, stroke="#334155"), text(240, 200, "2. rubbed quickly", size=13, weight="700"),
    ),
)

item(
    "g8-sci-combustion-b-q15",
    "A coal stove (angithi) is kept burning all night in the room shown. Which gas makes this dangerous?",
    ["Water vapour", "Argon", "Carbon monoxide", "Nitrogen"], "c",
    "With the window and door shut, little fresh air reaches the coal, so it burns incompletely and gives off carbon monoxide, a poisonous gas with no smell that can kill people as they sleep. "
    "Water vapour is also given off, but it is harmless.",
    "Look at the window and door. How much fresh air reaches the coal, and what happens to burning when air is short?",
    figure(
        "A bedroom at night with a burning coal stove beside a bed. The window is shut and the door is shut, with no gaps for air.",
        rect(20, 20, 280, 180, fill="#f1f5f9", stroke="#334155", sw=2.5),
        rect(50, 45, 70, 55, fill="#1e3a8a", stroke="#334155", sw=3), line(85, 45, 85, 100, stroke="#334155", sw=3),
        circle(70, 62, 6, fill="#fef9c3", stroke="none"), text(85, 118, "window shut", size=11, weight="600"),
        rect(230, 70, 50, 130, fill="#a16207", stroke="#713f12", sw=2.5), circle(240, 140, 3, fill="#fde68a", stroke="none"),
        text(255, 62, "door shut", size=11, weight="600"),
        rect(40, 150, 110, 30, fill="#93c5fd", stroke="#1e3a8a", sw=1.5), rect(40, 180, 8, 18, fill="#334155", stroke="none"), rect(142, 180, 8, 18, fill="#334155", stroke="none"),
        poly([(170, 200), (178, 160), (212, 160), (220, 200)], fill="#57534e", stroke="#292524", sw=1.5),
        "".join(circle(185 + i * 9, 156, 5, fill="#f97316", stroke="#9a3412", sw=0.8) for i in range(4)),
        path("M195,148 q-6,-12 0,-24 q6,-12 0,-24", stroke="#9ca3af", sw=1.5),
    ),
)

item(
    "g8-sci-combustion-b-q11",
    "The bar chart compares the harmful gases given out by two buses running the same distance. Why are many city buses being switched to the fuel used by bus 2?",
    ["It produces more thick black smoke", "It removes oxygen from cities", "It gives out less harmful exhaust gas", "It adds more sulphur to the air"], "c",
    "Bus 2 runs on CNG, which burns more cleanly, so its bar of harmful exhaust gases is much shorter than the diesel bus's bar. "
    "More thick black smoke is the opposite: that comes from the diesel bus 1.",
    "Compare the heights of the two bars. Which bus puts less into the air for the same distance travelled?",
    figure(
        "A bar chart of harmful exhaust gases for the same distance. Bus 1, running on diesel, has a tall bar. Bus 2, running on CNG, has a much shorter bar.",
        text(160, 22, "harmful exhaust gases (same distance)", size=12, weight="700"),
        line(60, 180, 280, 180, stroke=INK, sw=1.6), line(60, 180, 60, 34, stroke=INK, sw=1.6),
        rect(95, 50, 60, 130, fill="#57534e", stroke=INK, sw=1.2), rect(195, 140, 60, 40, fill="#4ade80", stroke=INK, sw=1.2),
        text(125, 198, "bus 1: diesel", size=12, weight="600"), text(225, 198, "bus 2: CNG", size=12, weight="600"),
    ),
)

# ============================== Ch5 Sound ==============================
def ear(labels):
    """Simplified ear: pinna, canal, eardrum, three small bones, snail-shaped cochlea. labels: {part: label}"""
    out = path("M60,40 C20,50 20,120 40,150 C55,175 75,178 80,160 C84,145 70,140 70,125 C70,112 82,108 84,96 C88,70 84,44 60,40 Z",
               fill="#fed7aa", stroke="#9a3412", sw=2)
    out += rect(80, 96, 90, 18, fill="#fff7ed", stroke="#9a3412", sw=1.5)
    out += line(172, 88, 172, 122, stroke="#7c2d12", sw=3.5)
    out += line(176, 104, 196, 96, stroke="#57534e", sw=4) + line(196, 96, 212, 106, stroke="#57534e", sw=4) + line(212, 106, 226, 100, stroke="#57534e", sw=4)
    out += path("M250,100 m-22,0 a22,22 0 1,1 44,0 a16,16 0 1,1 -32,0 a10,10 0 1,1 20,0 a5,5 0 1,1 -10,0", fill="none", stroke="#7c3aed", sw=3)
    out += line(272, 108, 300, 150, stroke="#eab308", sw=3)
    pos = {"pinna": (45, 70, 18, 30), "drum": (172, 120, 172, 175), "bones": (204, 100, 204, 40), "cochlea": (262, 90, 300, 50)}
    for part, lab in labels.items():
        x1, y1, x2, y2 = pos[part]
        out += leader(x1, y1, x2, y2, lab, size=15, anchor="middle" if part in ("drum", "bones") else None,
                      dy=14 if part == "drum" else -4 if part == "bones" else 5)
    return out


item(
    "g8-sci-sound-a-q05",
    "In the wave diagram, what does the distance marked X show?",
    ["Amplitude", "Frequency", "Pitch", "Wavelength"], "a",
    "X runs from the rest (middle) line straight up to the top of a crest: the greatest distance a particle moves from its rest position, which is the amplitude. "
    "Wavelength is the distance Y, from one crest to the next.",
    "X goes straight up from the middle line to a peak. Which quantity measures how far a particle moves from rest?",
    figure(
        "A wave drawn across a dashed rest line. X is a vertical arrow from the rest line up to the top of a crest. Y is a horizontal arrow from one crest to the next crest.",
        line(20, 120, 300, 120, stroke="#94a3b8", sw=1.5, dash="5 4"), wave(20, 120, 280, 55, 2.5),
        dbl_arrow(48, 120, 48, 65), text(56, 100, "X", size=16, weight="700", anchor="start"),
        line(48, 60, 48, 40, stroke="#94a3b8", sw=1, dash="3 3"), line(160, 60, 160, 40, stroke="#94a3b8", sw=1, dash="3 3"),
        dbl_arrow(48, 40, 160, 40), text(104, 32, "Y", size=16, weight="700"),
        text(300, 136, "rest line", size=11, weight="500", anchor="end"),
    ),
)

item(
    "g8-sci-sound-a-q14",
    "In the drawing of the human ear, which labelled part is the thin membrane that vibrates first when sound arrives?",
    ["Part P", "Part Q", "Part R", "Part S"], "b",
    "Sound is collected by P, the outer ear, and travels down the canal to Q, the eardrum, a thin membrane stretched across the canal that vibrates first. "
    "P, the pinna, collects and funnels the sound but is not a membrane and does not vibrate to pass it on.",
    "Follow the sound down the ear canal. Which part is stretched across the end of the canal like the skin of a drum?",
    figure(
        "A simplified drawing of the human ear: P is the outer ear flap, Q is a thin sheet across the inner end of the ear canal, "
        "R is a chain of three tiny bones, and S is a coiled snail-shaped part.",
        ear({"pinna": "P", "drum": "Q", "bones": "R", "cochlea": "S"}),
        arrow(10, 105, 60, 105, stroke=BLUE, sw=2), text(14, 96, "sound", size=11, weight="600", anchor="start"),
    ),
)

item(
    "g8-sci-sound-a-q24",
    "Traces P and Q show the sounds of a whistle and a drum on the same time scale. Trace P is the whistle. Why does the whistle have a higher pitch?",
    ["It has a lower frequency", "It has zero amplitude", "It makes no vibrations", "It has a higher frequency"], "d",
    "Trace P fits many more waves into the same time, so the whistle vibrates more times per second: it has a higher frequency, and pitch rises with frequency. "
    "Both traces are the same height, so the difference is not in amplitude.",
    "Count the waves in each trace over the same time. How is pitch linked to that count?",
    figure(
        "Two sound traces drawn on the same time scale and the same height. Trace P shows many closely packed waves. Trace Q shows only a few widely spaced waves.",
        text(20, 64, "P", size=16, weight="700", anchor="start"), line(40, 60, 300, 60, stroke="#e2e8f0", sw=1), wave(40, 60, 260, 32, 10, steps=400),
        text(20, 164, "Q", size=16, weight="700", anchor="start"), line(40, 160, 300, 160, stroke="#e2e8f0", sw=1), wave(40, 160, 260, 32, 2.5, stroke="#dc2626"),
        text(170, 212, "same time scale", size=12, weight="500"),
    ),
)


def bell_jar(cx, faint):
    out = path(f"M{cx - 55},180 L{cx - 55},80 Q{cx - 55},40 {cx},40 Q{cx + 55},40 {cx + 55},80 L{cx + 55},180", fill="#f0f9ff", stroke="#64748b", sw=2)
    out += line(cx - 70, 180, cx + 70, 180, stroke="#334155", sw=4)
    out += circle(cx, 120, 16, fill="#facc15", stroke="#a16207", sw=1.5) + rect(cx - 4, 136, 8, 22, fill="#64748b", stroke="none")
    out += line(cx, 158, cx, 180, stroke="#334155", sw=1.5)
    if faint:
        out += path(f"M{cx + 22},112 q5,8 0,16", stroke="#93c5fd", sw=1.2)
        out += "".join(circle(cx + dx, 70 + dy, 1.2, fill="#94a3b8", stroke="none") for dx, dy in [(-30, 10), (25, 30), (-10, 60), (35, 70)])
    else:
        out += "".join(path(f"M{cx + 22 + i * 8},{108 - i * 4} q{6 + i * 2},{12 + i * 4} 0,{24 + i * 8}", stroke=BLUE, sw=2) for i in range(3))
        out += "".join(circle(cx + dx, 60 + dy, 2, fill="#94a3b8", stroke="none") for dx, dy in [(-35, 10), (-20, 30), (30, 15), (-40, 60), (38, 70), (-25, 85), (5, 25), (22, 50), (-12, 50), (40, 95)])
    return out


item(
    "g8-sci-sound-a-q03",
    "The pictures show a ringing electric bell in a glass jar, before and after a pump has removed most of the air. What does this show that sound cannot travel through?",
    ["Air", "Water", "A vacuum", "Iron"], "c",
    "As the pump takes out the air, fewer particles are left to carry the vibrations, and the sound fades even though the bell keeps ringing. So sound cannot travel through a vacuum. "
    "Air is wrong: the sound was loud while the jar was full of air.",
    "The bell is still ringing at the end. What has the pump taken out of the jar, and what is left?",
    figure(
        "Two drawings of an electric bell ringing under a glass jar. Before: the jar is full of air particles and loud sound waves come from the bell. "
        "After the pump has run: hardly any particles are left and the sound waves are very faint.",
        bell_jar(80, False), bell_jar(240, True),
        line(295, 175, 312, 175, stroke="#334155", sw=4), text(312, 168, "to pump", size=10.5, weight="600", anchor="end"),
        text(80, 205, "before: loud", size=13, weight="700"), text(240, 205, "after pumping: faint", size=13, weight="700"),
    ),
)


def person(x, y, s=1.0):
    return circle(x, y - 38 * s, 8 * s, fill="#fde68a", stroke=INK, sw=1.5) + line(x, y - 30 * s, x, y - 10 * s, sw=2) + \
        line(x, y - 10 * s, x - 7 * s, y, sw=2) + line(x, y - 10 * s, x + 7 * s, y, sw=2) + line(x - 9 * s, y - 24 * s, x + 9 * s, y - 24 * s, sw=2)


item(
    "g8-sci-sound-a-q17",
    "A boy claps between two cliffs at the distances shown. He hears a clap and its echo separately only if the echo arrives at least 0.1 s after the clap. From which cliff will he hear a distinct echo?",
    ["From cliff 2 only", "From cliff 1 only", "From both cliffs", "From neither cliff"], "a",
    "In 0.1 s sound travels 340 × 0.1 = 34 m, which must cover the trip to the cliff and back, so the cliff must be at least 17 m away. "
    "Cliff 2 at 25 m is far enough. Cliff 1 at only 8 m is too close, so its echo merges with the clap.",
    "Sound must go to the cliff and back in at least 0.1 s. How far away must a cliff be for that?",
    figure(
        "A boy stands on flat ground between two cliffs. Cliff 1 is 8 m to his left and cliff 2 is 25 m to his right. A note says the speed of sound in air is 340 m/s.",
        poly([(0, 190), (0, 50), (30, 60), (40, 190)], fill="#a8a29e", stroke="#57534e", sw=2),
        poly([(320, 190), (320, 40), (285, 55), (278, 190)], fill="#a8a29e", stroke="#57534e", sw=2),
        line(0, 190, 320, 190, stroke="#57534e", sw=2), person(100, 190),
        dbl_arrow(40, 150, 98, 150), text(69, 142, "8 m", size=13),
        dbl_arrow(102, 150, 278, 150), text(190, 142, "25 m", size=13),
        text(20, 40, "cliff 1", size=12, weight="700", anchor="start"), text(300, 32, "cliff 2", size=12, weight="700", anchor="end"),
        text(170, 60, "speed of sound in air: 340 m/s", size=12, weight="600"),
        text(160, 212, "boy claps here", size=11, weight="500"),
    ),
)

item(
    "g8-sci-sound-a-q20",
    "What is the ship in the picture using its SONAR for?",
    ["Measuring the air temperature", "Sending radio messages", "Warming the water", "Finding the depth of the sea from ultrasound echoes"], "d",
    "The ship sends ultrasound pulses down and times how long their echoes from the sea bed take to come back; half that time multiplied by the speed of sound in water gives the depth. "
    "SONAR uses sound waves, not radio waves, so it is not for sending radio messages.",
    "Follow the waves from the ship down to the sea bed and back. What can the time taken tell the crew?",
    figure(
        "A ship on the sea sends waves of ultrasound straight down to the sea bed. Reflected waves travel back up to the ship. A clock symbol shows the time taken being measured.",
        rect(0, 70, 320, 150, fill=LBLUE, stroke="none"), line(0, 70, 320, 70, stroke=BLUE, sw=2),
        poly([(70, 70), (90, 90), (210, 90), (230, 70)], fill="#475569", stroke=INK, sw=2), rect(120, 45, 50, 25, fill="#e2e8f0", stroke=INK, sw=1.5),
        path("M0,200 Q60,190 120,200 T240,198 T320,196 L320,220 L0,220 Z", fill="#a16207", stroke="#713f12", sw=1.5),
        "".join(path(f"M{124},{100 + i * 22} q6,4 12,0", stroke="#1d4ed8", sw=2) for i in range(4)), arrow(130, 100, 130, 185, stroke="#1d4ed8", sw=1.5),
        "".join(path(f"M{164},{186 - i * 22} q6,-4 12,0", stroke="#dc2626", sw=2) for i in range(4)), arrow(170, 186, 170, 100, stroke="#dc2626", sw=1.5),
        text(118, 150, "ultrasound", size=11, weight="600", anchor="end"), text(184, 150, "echo", size=11, weight="600", anchor="start"),
        circle(270, 30, 14, fill="#ffffff", stroke=INK, sw=1.5), line(270, 30, 270, 21, sw=1.5), line(270, 30, 277, 33, sw=1.5),
        text(270, 60, "time it", size=11, weight="600"),
    ),
)

item(
    "g8-sci-sound-b-q04",
    "Traces 1 and 2 show two sounds on the same scales. How do the two sounds differ?",
    ["In pitch", "In speed", "In frequency", "In loudness"], "d",
    "Both traces have the same number of waves in the same time, so their frequency and pitch are the same. Trace 2 is taller, with a bigger amplitude, so sound 2 is louder. "
    "Pitch does not differ, because the waves in both traces are equally spaced.",
    "The waves in both traces are equally spaced. What does the height of a wave tell you about a sound?",
    figure(
        "Two sound traces on the same scales. Both have the same number of equally spaced waves. Trace 1 is short in height; trace 2 is much taller.",
        text(20, 64, "1", size=16, weight="700", anchor="start"), line(40, 60, 300, 60, stroke="#e2e8f0", sw=1), wave(40, 60, 260, 14, 4),
        text(20, 159, "2", size=16, weight="700", anchor="start"), line(40, 155, 300, 155, stroke="#e2e8f0", sw=1), wave(40, 155, 260, 42, 4, stroke="#dc2626"),
        text(170, 214, "same time scale, same height scale", size=12, weight="500"),
    ),
)

item(
    "g8-sci-sound-b-q09",
    "The picture shows how sound travels from a speaker to a listener in a large empty hall. What effect does this cause?",
    ["Reverberation", "A single echo", "Ultrasound", "Infrasound"], "a",
    "The sound bounces off the walls, ceiling and floor many times, and these reflections keep reaching the listener just after the direct sound, so the sound lingers and blurs. This is reverberation. "
    "A single echo would need one reflection arriving after a clear gap, not many overlapping ones.",
    "Count the paths drawn from the speaker to the listener. What happens when many reflections arrive one after another?",
    figure(
        "A large empty hall seen from the side, with bare walls. A speaker on the left and a listener on the right. Besides the direct path, many sound paths bounce off the ceiling, walls and floor before reaching the listener.",
        rect(10, 20, 300, 180, fill="#f8fafc", stroke="#334155", sw=3),
        rect(30, 130, 18, 30, fill="#334155", stroke=INK, sw=1.5), person(270, 190, 0.9),
        arrow(50, 140, 258, 150, stroke=BLUE, sw=2),
        polyline([(50, 135), (150, 22), (262, 150)], stroke="#f97316", sw=1.6), polyline([(50, 145), (120, 198), (262, 160)], stroke="#f97316", sw=1.6),
        polyline([(48, 130), (90, 22), (308, 90), (264, 150)], stroke="#a855f7", sw=1.6), polyline([(48, 150), (12, 180), (200, 198), (262, 162)], stroke="#a855f7", sw=1.6),
        polyline([(48, 128), (220, 22), (308, 130), (266, 156)], stroke="#14b8a6", sw=1.6),
        text(39, 124, "speaker", size=11, weight="600"), text(232, 120, "listener", size=11, weight="600"),
    ),
)

item(
    "g8-sci-sound-b-q08",
    "What is the job of the part labelled X in the drawing of the ear?",
    ["Collecting sound from outside", "Turning vibrations into nerve signals", "Keeping the ear canal clean", "Passing eardrum vibrations to the inner ear"], "d",
    "X is the chain of three tiny bones in the middle ear. They pick up the vibrations of the eardrum and pass them on to the inner ear. "
    "Turning vibrations into nerve signals is the job of the snail-shaped cochlea beyond X, not of X itself.",
    "X is a chain of three tiny bones in the middle ear. What reaches these bones first, and what do they do with it?",
    figure(
        "A simplified drawing of the human ear: the outer ear flap, the ear canal ending at a thin sheet, then X marking a chain of three tiny bones, followed by a coiled snail-shaped part.",
        ear({"bones": "X"}),
    ),
)

item(
    "g8-sci-sound-b-q13",
    "Mohan taps one end of a long iron railing. Seema, at the far end, hears the tap twice: once through the rail and once through the air, as shown. Why does the first sound reach her before the second?",
    ["Sound travels faster in iron than in air", "Sound travels faster in air than in iron", "The path along the rail is shorter", "The louder sound travels faster"], "a",
    "Both paths are the same length, so the sound that arrives first must be travelling faster. The first sound came through the iron rail, so sound travels faster in iron, a solid, than in air. "
    "The rail path is not shorter: the picture shows both paths are the same length.",
    "Both paths are the same length. Which material carried the sound that arrived first?",
    figure(
        "A long iron railing with Mohan tapping one end and Seema with her ear at the other end. Two arrows of the same length run from Mohan to Seema: one along the iron rail, marked first, and one through the air above it, marked second.",
        line(40, 150, 280, 150, stroke="#475569", sw=6), "".join(line(x, 150, x, 190, stroke="#475569", sw=3) for x in range(50, 281, 40)),
        person(28, 190, 0.9), person(296, 190, 0.9),
        arrow(50, 140, 270, 140, stroke="#dc2626", sw=2.2), text(160, 132, "through iron: heard 1st", size=12, weight="700", fill="#dc2626"),
        arrow(50, 90, 270, 90, stroke=BLUE, sw=2.2), text(160, 82, "through air: heard 2nd", size=12, weight="700", fill=BLUE),
        text(160, 40, "both paths the same length", size=12, weight="600"),
        text(28, 212, "Mohan", size=12, weight="600"), text(292, 212, "Seema", size=12, weight="600"),
    ),
)

item(
    "g8-sci-sound-b-q05",
    "The scale shows ranges of sound frequency. Sound S has a frequency of 30,000 Hz. What is sound S for a human ear?",
    ["Ultrasound, in region Z", "Audible sound, in region Y", "Infrasound, in region X", "Audible only to adults, in region Y"], "a",
    "Humans hear roughly 20 Hz to 20,000 Hz, which is region Y. Sound S at 30,000 Hz is above this range, in region Z, so it is ultrasound. "
    "Infrasound is region X, below 20 Hz, so S cannot be infrasound.",
    "Find 30,000 Hz on the scale. Is it above or below the range that humans can hear?",
    figure(
        "A frequency scale divided into three regions: X below 20 hertz, Y from 20 to 20,000 hertz, marked human hearing, and Z above 20,000 hertz. An arrow marks sound S at 30,000 hertz.",
        rect(20, 90, 60, 40, fill="#e0e7ff", stroke=INK, sw=1.5), rect(80, 90, 150, 40, fill="#dcfce7", stroke=INK, sw=1.5), rect(230, 90, 75, 40, fill="#fee2e2", stroke=INK, sw=1.5),
        text(50, 116, "X", size=16, weight="700"), text(155, 116, "Y", size=16, weight="700"), text(267, 116, "Z", size=16, weight="700"),
        text(155, 80, "human hearing", size=12, weight="600"),
        text(80, 150, "20 Hz", size=12, weight="600"), text(230, 150, "20,000 Hz", size=12, weight="600"),
        line(80, 130, 80, 138, sw=1.5), line(230, 130, 230, 138, sw=1.5),
        arrow(252, 66, 252, 88, stroke="#dc2626", sw=2.2), text(262, 60, "S: 30,000 Hz", size=12, weight="700", fill="#dc2626"),
        text(160, 186, "frequency increases →", size=12, weight="500"),
    ),
)

item(
    "g8-sci-sound-b-q01",
    "The picture shows a rubber band stretched over an open box just after it has been plucked. Why does it make a sound?",
    ["It vibrates to and fro", "It gets warmer", "Air is sucked into the box", "It becomes longer for good"], "a",
    "The blurred outlines show the band moving quickly to and fro: it is vibrating, and these vibrations make the air around it vibrate, which we hear as sound. "
    "It does not become longer for good: when it stops moving, it goes back to its straight stretched shape.",
    "Look at the blurred outlines of the band. What is it doing very quickly after the pluck?",
    figure(
        "An open box with a rubber band stretched across the top. Just after plucking, the band is drawn as several faint curved outlines above and below its straight position, with sound marks beside it.",
        poly([(40, 110), (280, 110), (280, 190), (40, 190)], fill="#d6a76a", stroke="#78350f", sw=2), rect(80, 112, 160, 30, fill="#78350f", stroke="none", opacity=0.6),
        line(40, 108, 280, 108, stroke="#dc2626", sw=3),
        path("M40,108 Q160,88 280,108", stroke="#dc2626", sw=1.5, opacity=0.5), path("M40,108 Q160,128 280,108", stroke="#dc2626", sw=1.5, opacity=0.5),
        path("M40,108 Q160,78 280,108", stroke="#dc2626", sw=1, opacity=0.3), path("M40,108 Q160,138 280,108", stroke="#dc2626", sw=1, opacity=0.3),
        "".join(path(f"M{290 + i * 8},{90 - i * 4} q{5 + i * 2},{14 + i * 3} 0,{28 + i * 6}", stroke=BLUE, sw=1.8) for i in range(2)),
        text(160, 50, "just after plucking", size=13, weight="600"),
    ),
)

# ============================== Ch6 Chemical effects of current ==============================
def cell_setup(x, left_sign, right_sign, liquid="#93c5fd", left_lab=None, right_lab=None, lw=10, rw=10, tester=None, glow=None,
               bubbles=False, left_fill="#d97706", right_fill="#d97706", show_battery=True, beaker_w=140):
    """Beaker with two electrodes wired to a battery on top. Returns markup."""
    bx, by, bw, bh = x, 90, beaker_w, 105
    lx, rx = x + 35, x + bw - 35
    out = beaker(bx, by, bw, bh, level=80, liquid=liquid)
    out += rect(lx - lw / 2, 70, lw, 110, fill=left_fill, stroke=INK, sw=1.2) + rect(rx - rw / 2, 70, rw, 110, fill=right_fill, stroke=INK, sw=1.2)
    if show_battery:
        mx = x + bw / 2
        out += polyline([(lx, 70), (lx, 30), (mx - 22, 30)], stroke=INK, sw=1.6) + polyline([(rx, 70), (rx, 30), (mx + 22, 30)], stroke=INK, sw=1.6)
        out += rect(mx - 22, 20, 44, 20, fill="#fef08a", stroke=INK, sw=1.5, rx=3)
        out += text(mx - 14, 35, left_sign, size=13, weight="800") + text(mx + 14, 35, right_sign, size=13, weight="800")
    if tester:
        mx = x + bw / 2
        if tester == "bulb":
            out += circle(mx, 62, 10, fill="#fde047" if glow else "#f1f5f9", stroke=INK, sw=1.5)
            if glow:
                out += "".join(line(mx + 14 * c, 62 + 14 * s, mx + 20 * c, 62 + 20 * s, stroke="#eab308", sw=2) for c, s in [(1, 0), (-1, 0), (0, -1), (0.7, -0.7), (-0.7, -0.7)])
        else:
            out += poly([(mx - 7, 70), (mx + 7, 70), (mx + 7, 58), (mx, 50), (mx - 7, 58)], fill="#f87171" if glow else "#f1f5f9", stroke=INK, sw=1.5)
            if glow:
                out += "".join(line(mx + 12 * c, 58 + 12 * s, mx + 18 * c, 58 + 18 * s, stroke="#ef4444", sw=2) for c, s in [(1, 0), (-1, 0), (0, -1), (0.7, -0.7), (-0.7, -0.7)])
    if bubbles:
        for ex in (lx, rx):
            out += "".join(circle(ex + (6 if i % 2 else -6), 160 - i * 12, 2.6, fill="#ffffff", stroke="#475569", sw=0.9) for i in range(5))
    if left_lab:
        out += text(lx - 8, 64, left_lab, size=12, weight="700", anchor="end")
    if right_lab:
        out += text(rx + 8, 64, right_lab, size=12, weight="700", anchor="start")
    return out


item(
    "g8-sci-chemfx-a-q08",
    "In the set-up shown, current passes through copper sulphate solution between two copper electrodes. On which electrode is copper metal deposited?",
    ["On electrode 2 (+)", "On both electrodes equally", "On neither; a gas forms instead", "On electrode 1 (−)"], "d",
    "Copper ions in the solution carry a positive charge, so they are attracted to electrode 1, joined to the negative terminal (the cathode), where they deposit as copper metal. "
    "Electrode 2, joined to the positive terminal, is the anode: it slowly loses copper into the solution instead.",
    "Copper ions in the solution are positive. Which terminal of the battery attracts positive ions?",
    figure(
        "A beaker of blue copper sulphate solution with two copper electrodes joined to a battery. Electrode 1 on the left is joined to the negative terminal; electrode 2 on the right is joined to the positive terminal.",
        cell_setup(90, "−", "+", left_lab="electrode 1", right_lab="electrode 2"),
        text(160, 214, "copper sulphate solution", size=12, weight="500"),
    ),
)


def tester_beaker(x, glow, kind, liquid, label, title):
    return cell_setup(x, "−", "+", liquid=liquid, tester=kind, glow=glow, beaker_w=120, left_fill="#9ca3af", right_fill="#9ca3af", lw=6, rw=6,
                      show_battery=True) + text(x + 60, 212, label, size=12, weight="600") + (text(x + 60, 12, title, size=12, weight="700") if title else "")


item(
    "g8-sci-chemfx-a-q15",
    "The same lemon juice is tested with two testers, as shown. Why does only tester 2 light up?",
    ["The LED needs a huge current", "The LED works only in a vacuum", "The LED glows even with a small current", "The LED makes salt in the juice"], "c",
    "Lemon juice is a weak conductor, so only a small current flows. That is too little to heat the filament of the torch bulb, but enough to make the LED glow. "
    "The LED does not need a huge current; if it did, it would stay dark just like the bulb.",
    "Lemon juice lets only a little current through. Which kind of tester can show such a weak current?",
    figure(
        "Two testers dipped in the same lemon juice. Tester 1 uses a torch bulb, which stays dark. Tester 2 uses an LED, which glows.",
        tester_beaker(20, False, "bulb", "#fef08a", "tester 1: torch bulb", None), tester_beaker(180, True, "led", "#fef08a", "tester 2: LED", None),
    ),
)


def compass(cx, cy, angle):
    import math
    a = math.radians(angle)
    dx, dy = 22 * math.sin(a), -22 * math.cos(a)
    return circle(cx, cy, 28, fill="#ffffff", stroke=INK, sw=2) + text(cx, cy - 31, "N", size=11, weight="700") + \
        poly([(cx + dx, cy + dy), (cx - 4 * math.cos(a), cy - 4 * math.sin(a)), (cx + 4 * math.cos(a), cy + 4 * math.sin(a))], fill="#dc2626", stroke="#7f1d1d", sw=1) + \
        poly([(cx - dx, cy - dy), (cx - 4 * math.cos(a), cy - 4 * math.sin(a)), (cx + 4 * math.cos(a), cy + 4 * math.sin(a))], fill="#cbd5e1", stroke="#475569", sw=1)


def compass_circuit(x, closed):
    L, R, T, B = x + 40, x + 140, 40, 170
    out = polyline([(x + 75, T), (L, T), (L, B), (x + 70, B)], stroke=INK, sw=2) + polyline([(x + 105, T), (R, T), (R, B), (x + 110, B)], stroke=INK, sw=2)
    out += rect(x + 72, 30, 36, 20, fill="#fef08a", stroke=INK, sw=1.5, rx=3)
    if closed:
        out += line(x + 70, B, x + 110, B, stroke=INK, sw=2)
    else:
        out += line(x + 70, B, x + 104, B - 16, stroke=INK, sw=2)
    out += circle(x + 70, B, 3, fill=INK, stroke="none") + circle(x + 110, B, 3, fill=INK, stroke="none")
    out += compass(L, 105, 0 if not closed else 62)
    out += line(L, 70, L, 140, stroke="#b45309", sw=2.5)
    out += text(x + 90, 200, "switch closed" if closed else "switch open", size=13, weight="700")
    return out


item(
    "g8-sci-chemfx-a-q16",
    "A compass sits close to a wire in a circuit. The pictures show the needle with the switch open and with it closed. Why does the needle turn when the switch is closed?",
    ["The current gives off a smell", "The compass picks up the sound of the current", "The wire becomes a north pole for ever",
     "The current produces a magnetic effect that deflects the needle"], "d",
    "Closing the switch lets current flow, and a wire carrying a current has a magnetic effect around it, which pushes the compass needle aside. "
    "The wire does not become a magnet for ever: when the switch is opened again, the needle swings back to north.",
    "The needle moves only while current flows. What effect of a current can push a magnet like a compass needle?",
    figure(
        "Two identical circuits, each a battery, a wire loop and a switch, with a compass lying under one wire of the loop. Switch open: the compass needle points to N. Switch closed: the needle has swung well away from N.",
        compass_circuit(0, False), compass_circuit(160, True),
    ),
)


def thermometer(x, y, reading):
    return rect(x - 4, y, 8, 80, fill="#ffffff", stroke=INK, sw=1.2, rx=4) + circle(x, y + 84, 7, fill="#dc2626", stroke=INK, sw=1.2) + \
        rect(x - 2, y + 50, 4, 32, fill="#dc2626", stroke="none") + text(x, y - 8, reading, size=12, weight="700")


item(
    "g8-sci-chemfx-a-q18",
    "Current is passed through acidified water, as shown. What do the bubbles at the electrodes show?",
    ["No chemical change has taken place", "A chemical change has made new gases from the liquid", "The liquid has become a magnet", "The water is simply boiling"], "b",
    "New gases (hydrogen and oxygen) are forming at the electrodes, which shows that the current has caused a chemical change. "
    "The water is not boiling: the thermometer shows it is still at 25 °C.",
    "The thermometer shows the water is not hot. Where can new gas at an electrode come from?",
    figure(
        "A beaker of acidified water with two carbon electrodes joined to a battery. Bubbles of gas rise from both electrodes. A thermometer in the water reads 25 degrees Celsius.",
        cell_setup(60, "−", "+", liquid="#e0f2fe", bubbles=True, left_fill="#374151", right_fill="#374151", lw=8, rw=8, beaker_w=150),
        thermometer(135, 95, "25 °C"), text(135, 214, "acidified water", size=12, weight="500"),
    ),
)

item(
    "g8-sci-chemfx-a-q22",
    "The picture shows copper being refined using electricity. What does this process achieve?",
    ["It makes the copper more impure", "It gives purer copper, deposited on the thin sheet (cathode)", "It turns copper into plastic", "It removes all electrons from the atoms"], "b",
    "The thick block of impure copper, joined to the positive terminal, slowly dissolves, and pure copper is deposited on the thin sheet joined to the negative terminal; the impurities fall to the bottom as sludge. "
    "It does not make the copper more impure: the impurities are left behind in the sludge.",
    "Notice which copper block gets thinner and where the sludge collects. Which electrode grows with clean metal?",
    figure(
        "A tank of copper sulphate solution. On the left, a thin sheet of copper joined to the negative terminal. On the right, a thick block of impure copper joined to the positive terminal, with sludge collecting beneath it.",
        cell_setup(70, "−", "+", lw=5, rw=26, left_fill="#f59e0b", right_fill="#a16207", left_lab="thin sheet", right_lab="thick block", beaker_w=180),
        "".join(circle(205 + i * 9, 190 - (i % 2) * 3, 3, fill="#57534e", stroke="none") for i in range(5)),
        text(160, 214, "copper sulphate solution, sludge under the block", size=11, weight="500"),
    ),
)

item(
    "g8-sci-chemfx-a-q19",
    "The same tester is dipped into two kinds of water, as shown. Why does it glow in beaker 1 but not in beaker 2?",
    ["Tap water is pure water with no ions", "Tap water is an oil mixture", "Tap water contains dissolved salts that provide ions", "Tap water has no oxygen atoms"], "c",
    "Tap water has small amounts of dissolved salts and minerals, and their ions carry the current, so the LED glows. Distilled water is almost pure and has very few ions, so it hardly conducts. "
    "Pure water with no ions describes the distilled water in beaker 2, not tap water.",
    "Beaker 2 holds very pure water. What does tap water contain that distilled water does not?",
    figure(
        "Two beakers with the same LED tester. Beaker 1 holds tap water and the LED glows. Beaker 2 holds distilled water and the LED stays dark.",
        tester_beaker(20, True, "led", LBLUE, "beaker 1: tap water", None), tester_beaker(180, False, "led", "#f0f9ff", "beaker 2: distilled water", None),
    ),
)

item(
    "g8-sci-chemfx-b-q02",
    "Copper sulphate solution contains positive copper ions (Cu2+). In the set-up shown, towards which electrode do these ions move?",
    ["Electrode Q, the anode", "Electrode P, the cathode", "Neither electrode", "The beaker wall"], "b",
    "The Cu2+ ions are positive, so they move towards electrode P, which is joined to the negative terminal (the cathode). "
    "Electrode Q is joined to the positive terminal, and like charges repel, so positive ions move away from it, not towards it.",
    "Read the battery signs at each electrode. Which terminal pulls positive ions towards it?",
    figure(
        "A beaker of copper sulphate solution with two electrodes, P and Q, joined to a battery. P is joined to the negative terminal and Q to the positive terminal.",
        cell_setup(90, "−", "+", left_lab="P", right_lab="Q"), text(160, 214, "copper sulphate solution", size=12, weight="500"),
    ),
)

item(
    "g8-sci-chemfx-b-q05",
    "Priya wants to nickel-plate the iron key using the set-up shown. Which arrangement is correct?",
    ["Key on clip X (−), nickel plate on clip Y (+)", "Key on clip Y (+), nickel plate on clip X (−)", "Key in the solution, not joined to any clip",
     "Key and nickel plate both on clip Y (+)"], "a",
    "The object to be plated must be the cathode, joined to the negative terminal, so the key goes on clip X; nickel ions from the solution then deposit on it. The nickel plate goes on clip Y and slowly dissolves to replace the ions. "
    "With the key on clip Y (+), the key itself would be eaten away instead of being coated.",
    "Nickel ions in the solution are positive. Which clip will attract them onto whatever is fixed to it?",
    figure(
        "A battery with two wires ending in clips: clip X on the negative terminal and clip Y on the positive terminal. Beside it are an iron key, a nickel plate and a beaker of nickel sulphate solution.",
        rect(130, 20, 60, 24, fill="#fef08a", stroke=INK, sw=1.5, rx=3), text(142, 37, "−", size=14, weight="800"), text(178, 37, "+", size=14, weight="800"),
        polyline([(130, 32), (70, 32), (70, 70)], stroke=INK, sw=1.8), polyline([(190, 32), (250, 32), (250, 70)], stroke=INK, sw=1.8),
        rect(63, 70, 14, 10, fill="#475569", stroke=INK, sw=1), rect(243, 70, 14, 10, fill="#475569", stroke=INK, sw=1),
        text(56, 80, "clip X", size=12, weight="700", anchor="end"), text(264, 80, "clip Y", size=12, weight="700", anchor="start"),
        beaker(110, 110, 100, 90, level=65, liquid="#86efac"), text(160, 214, "nickel sulphate solution", size=12, weight="500"),
        circle(40, 150, 10, fill="#ffffff", stroke="#6b7280", sw=4), rect(48, 147, 30, 6, fill="#9ca3af", stroke="#6b7280", sw=1),
        rect(68, 153, 4, 6, fill="#9ca3af", stroke="none"), text(50, 180, "iron key", size=12, weight="600"),
        rect(250, 130, 30, 50, fill="#d1d5db", stroke="#6b7280", sw=1.5), text(265, 196, "nickel plate", size=12, weight="600"),
    ),
)

item(
    "g8-sci-chemfx-b-q14",
    "In set-up 1, copper is deposited on plate P. In set-up 2, the battery has been turned round, as shown. What happens now?",
    ["Copper turns into a gas", "The roles of the plates swap, and copper deposits on plate Q", "The solution stops conducting", "Copper still deposits on plate P"], "b",
    "Turning the battery round makes plate Q the one joined to the negative terminal, so it becomes the cathode; copper ions are now attracted to Q and deposit there. "
    "Copper does not keep depositing on P, because P is now joined to the positive terminal.",
    "Compare the battery signs in the two set-ups. Which plate is joined to the negative terminal in set-up 2?",
    figure(
        "Two copper-plating set-ups with plates P and Q in copper sulphate solution. In set-up 1, P is joined to the negative terminal and Q to the positive. "
        "In set-up 2 the battery is turned round, so P is joined to the positive terminal and Q to the negative.",
        cell_setup(15, "−", "+", left_lab="P", right_lab="Q", beaker_w=125), cell_setup(180, "+", "−", left_lab="P", right_lab="Q", beaker_w=125),
        text(78, 214, "set-up 1", size=13, weight="700"), text(242, 214, "set-up 2", size=13, weight="700"),
    ),
)

item(
    "g8-sci-chemfx-b-q16",
    "A tester is placed first in copper sulphate solution and then in cooking oil. What do the results shown tell you?",
    ["Oil is the better conductor", "Both liquids conduct equally", "Oil contains more copper ions", "Copper sulphate solution conducts but oil does not"], "d",
    "The bulb glows brightly in copper sulphate solution, so current flows through it. In oil the bulb stays dark, so oil does not conduct. "
    "Both liquids conducting equally cannot be right, because the bulb behaves so differently in the two.",
    "Compare the bulb in the two pictures. What does a glowing bulb tell you about the liquid it is dipped in?",
    figure(
        "The same bulb tester in two beakers. In blue copper sulphate solution the bulb glows brightly. In yellow cooking oil the bulb stays dark.",
        tester_beaker(20, True, "bulb", "#60a5fa", "copper sulphate solution", None), tester_beaker(180, False, "bulb", "#fde68a", "cooking oil", None),
    ),
)

item(
    "g8-sci-chemfx-b-q19",
    "A spoon is to be silver-plated using the set-up shown. What liquid should the beaker contain?",
    ["Cooking oil", "Distilled water", "A solution of a silver salt", "Sugar solution"], "c",
    "The silver that coats the spoon comes from silver ions in the liquid, so the electrolyte must be a solution of a silver salt, with a silver plate as the other electrode. "
    "Distilled water has almost no ions, so it would hardly conduct and has no silver to deposit.",
    "The coating on the spoon must come from ions in the liquid. Which liquid contains the right metal ions?",
    figure(
        "A beaker with an unknown liquid, marked with a question mark. A spoon is joined to the negative terminal of a battery and a silver plate to the positive terminal.",
        cell_setup(90, "−", "+", liquid="#f1f5f9", left_lab="spoon", right_lab="silver plate", left_fill="#e5e7eb", right_fill="#cbd5e1", lw=8, rw=16),
        text(160, 150, "?", size=26, weight="700", fill="#dc2626"),
    ),
)

item(
    "g8-sci-chemfx-b-q23",
    "Current is passed through acidified water in the apparatus shown. Gas collects in both tubes. What does this show?",
    ["Water is an element that cannot change", "The gas is only trapped air", "The current breaks water down into new substances", "The acid removes all electricity"], "c",
    "One tube collects hydrogen and the other oxygen, about 2 : 1 by volume, so the current has broken water down into new substances: a chemical effect of current. "
    "It cannot be trapped air: the tubes started full of water, and air would not appear in a 2 : 1 ratio.",
    "The tubes started full of water. Where did the gas come from, and why is there twice as much in one tube?",
    figure(
        "Two upside-down test tubes, first filled with water, stand over the electrodes in a beaker of acidified water joined to a battery. Tube 1 has collected twice as much gas as tube 2.",
        cell_setup(70, "−", "+", liquid="#e0f2fe", left_fill="#374151", right_fill="#374151", lw=6, rw=6, beaker_w=180, bubbles=True),
        rect(92, 55, 26, 120, fill="#e0f2fe", stroke=INK, sw=1.6, rx=10), rect(94, 57, 22, 64, fill="#ffffff", stroke="none", rx=9),
        rect(202, 55, 26, 120, fill="#e0f2fe", stroke=INK, sw=1.6, rx=10), rect(204, 57, 22, 32, fill="#ffffff", stroke="none", rx=9),
        text(80, 100, "1", size=15, weight="700", anchor="end"), text(240, 80, "2", size=15, weight="700", anchor="start"),
        text(160, 214, "acidified water", size=12, weight="500"),
    ),
)
