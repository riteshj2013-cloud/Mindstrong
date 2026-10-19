"""G5 Science pictorial items (Matter, Force, Environment)."""
from __future__ import annotations

from .svg import (arrow, beaker, circle, ellipse, figure, leader, line, path, poly, polyline, rect, text)

ITEMS: dict[str, dict] = {}


def item(qid, prompt, options, answer, explanation, hint, fig):
    ITEMS[qid] = dict(prompt=prompt, options=options, answer=answer, explanation=explanation, hint=hint, figure=fig)


def jar(x, y, w=90, h=120):
    return path(f"M{x},{y} L{x},{y + h - 8} Q{x},{y + h} {x + 8},{y + h} L{x + w - 8},{y + h} Q{x + w},{y + h} {x + w},{y + h - 8} L{x + w},{y}", sw=2.2) + \
        rect(x - 4, y - 8, w + 8, 10, fill="#e5e7eb", stroke="#6b7280", sw=1.2, rx=3)


# --- Matter Set A ---------------------------------------------------------------
_sand = "".join(circle(x, y, 1.8, fill="#a16207", stroke="none") for x, y in
                [(48, 92), (70, 110), (90, 84), (58, 130), (100, 120), (80, 140), (44, 150), (96, 156), (64, 162), (110, 98), (52, 112), (86, 126)])
_layer = "".join(circle(212 + (i * 13) % 80, 166 - (i * 7) % 12, 2.2, fill="#92400e", stroke="none") for i in range(26))
item(
    "g5-sci-matter-a-q12",
    "Riya stirs sand into a jar of water (Jar 1). Jar 2 shows the same jar after it has stood still for one hour. What has happened in Jar 2?",
    ["Evaporation", "Sedimentation", "Condensation", "Melting"], "b",
    "The heavier sand grains sank and collected at the bottom while the jar stood still. This is sedimentation. "
    "It is not evaporation: the water level has not dropped, so no water has turned into vapour.",
    "Compare the bottoms of the two jars. What did the heavy sand grains do while the jar stood still?",
    figure(
        "Two jars of water with the same water level. Jar 1, just after stirring, is evenly cloudy brown. "
        "Jar 2, one hour later, has clear water above a layer of sand at the bottom.",
        rect(37, 62, 86, 108, fill="#d6b48a", stroke="none", opacity=0.75), _sand, jar(35, 50),
        rect(207, 62, 86, 92, fill="#bfdbfe", stroke="none", opacity=0.8),
        rect(207, 152, 86, 18, fill="#c08a4a", stroke="none"), _layer, jar(205, 50),
        line(37, 62, 123, 62, stroke="#2563eb", sw=1.5), line(207, 62, 293, 62, stroke="#2563eb", sw=1.5),
        text(80, 196, "Jar 1: just stirred", size=13), text(250, 196, "Jar 2: after 1 hour", size=13),
        arrow(140, 110, 190, 110, sw=2), text(165, 100, "wait", size=12, weight="500"),
    ),
)

_lumps = "".join(ellipse(x, y, 7, 5, fill="#9ca3af", stroke="#4b5563", sw=1) for x, y in [(120, 66), (140, 70), (162, 64), (184, 69), (150, 60), (200, 66)])
_dust = "".join(circle(x, y, 1.6, fill="#f5f5f4", stroke="#a8a29e", sw=0.6) for x, y in
                [(130, 92), (150, 100), (170, 95), (190, 104), (140, 112), (175, 116), (160, 124), (195, 120), (125, 120), (185, 132)])
item(
    "g5-sci-matter-a-q21",
    "Arjun separates a dry mixture in the way shown in the picture. Which mixture could he be separating?",
    ["Salt from seawater", "Ink from water", "Iron pins from copper wire", "Small pebbles from flour"], "d",
    "The picture shows sieving: fine powder falls through the holes of the sieve and bigger lumps stay on top. That suits pebbles mixed with flour. "
    "Salt in seawater cannot be sieved, because dissolved salt passes through any holes with the water; it needs evaporation.",
    "Look at what stays in the mesh and what falls into the bowl. Which mixture has big and tiny dry bits?",
    figure(
        "A round sieve with a handle held over a bowl. Large grey lumps stay in the sieve while fine white powder falls through into the bowl.",
        path("M100,74 Q160,104 220,74", stroke="#374151", sw=2.5),
        line(100, 74, 220, 74, stroke="#374151", sw=2.5),
        "".join(line(110 + i * 10, 76, 110 + i * 10, 86 - abs(i - 5) * 1.5, stroke="#9ca3af", sw=0.8) for i in range(11)),
        rect(220, 70, 70, 8, fill="#a16207", stroke="#713f12", sw=1.2, rx=3), _lumps, _dust,
        path("M90,140 Q160,210 230,140 Z", fill="#e7e5e4", stroke="#57534e", sw=2),
        ellipse(160, 150, 56, 8, fill="#fafaf9", stroke="#d6d3d1", sw=1),
        text(160, 30, "Sieve over a bowl", size=14, weight="700"),
        leader(184, 64, 250, 45, "lumps", size=13), leader(170, 150, 258, 168, "powder", size=13),
    ),
)

# --- Matter Set B ---------------------------------------------------------------
item(
    "g5-sci-matter-b-q04",
    "Ravi shakes two liquids that do not mix in a jar, then waits five minutes. The picture shows the jar. What does it tell you about liquid X compared with liquid Y?",
    ["A cupful of X weighs less than a cupful of Y (X is less dense)", "A cupful of X weighs more than a cupful of Y",
     "X has dissolved in Y", "X is attracted by a magnet"], "a",
    "X stays on top of Y, so the same amount of X is lighter: X is less dense than Y. "
    "X has not dissolved: if it had, the jar would hold one mixed liquid, not two separate layers.",
    "X stays on top once the shaking stops. What does floating on another liquid tell you about how heavy a cupful is?",
    figure(
        "A jar after shaking and standing for five minutes: a yellow layer X sits on top of a blue layer Y, with a sharp line between them.",
        rect(117, 60, 86, 34, fill="#fde047", stroke="none", opacity=0.9),
        rect(117, 94, 86, 74, fill="#93c5fd", stroke="none", opacity=0.85),
        line(117, 94, 203, 94, stroke="#a16207", sw=1.5), jar(115, 48),
        leader(190, 77, 250, 70, "X", size=16), leader(190, 130, 250, 135, "Y", size=16),
        text(160, 200, "after 5 minutes", size=13, weight="500"),
    ),
)


def spoon(x, melted):
    out = line(x, 70, x, 175, stroke="#6b7280", sw=6)
    if melted:
        out += path(f"M{x - 7},70 Q{x},62 {x + 7},70 L{x + 4},86 Q{x},92 {x - 3},84 Z", fill="#fde68a", stroke="#ca8a04", sw=1)
    else:
        out += rect(x - 9, 56, 18, 14, fill="#fde68a", stroke="#ca8a04", sw=1.2, rx=3)
    return out


item(
    "g5-sci-matter-b-q06",
    "Four spoons stand in a bowl of hot water with a dab of butter on top of each handle. The picture shows them after two minutes. Which pair of materials could spoons 1 and 2 be made of?",
    ["Copper and iron", "Wood and plastic", "Bamboo and rubber", "Wood and copper"], "a",
    "Heat travelled up spoons 1 and 2 fast enough to melt the butter, so both must be good conductors of heat, such as the metals copper and iron. "
    "Wood and copper cannot be right: a wooden spoon is a poor conductor, so its butter would stay solid.",
    "Melted butter means heat climbed all the way up that handle. Which kind of material lets heat travel through it quickly?",
    figure(
        "Four spoons labelled 1 to 4 stand in a bowl of hot water. After two minutes the butter on spoons 1 and 2 has melted and run down; "
        "the butter on spoons 3 and 4 is still a firm lump.",
        spoon(100, True), spoon(140, True), spoon(180, False), spoon(220, False),
        path("M70,150 L80,195 L240,195 L250,150 Z", fill="#bfdbfe", stroke="#1f2937", sw=2),
        "".join(path(f"M{x},140 q5,-8 0,-16 q-5,-8 0,-16", stroke="#f87171", sw=1.5) for x in (88, 260)),
        text(100, 42, "1", size=15, weight="700"), text(140, 42, "2", size=15, weight="700"),
        text(180, 42, "3", size=15, weight="700"), text(220, 42, "4", size=15, weight="700"),
        text(160, 214, "hot water · after 2 minutes", size=12, weight="500"),
    ),
)

_holes = "".join(ellipse(220 + dx, 105 + dy, rx, ry, fill="#ffffff", stroke="#ca8a04", sw=1) for dx, dy, rx, ry in
                 [(-30, -28, 7, 5), (-8, -34, 5, 4), (14, -26, 8, 6), (34, -10, 6, 5), (-38, -2, 6, 7), (-14, -6, 9, 6),
                  (10, 2, 6, 5), (30, 16, 7, 5), (-30, 24, 7, 5), (-6, 22, 6, 6), (16, 30, 5, 4), (-20, 40, 5, 4), (40, 8, 4, 4)])
item(
    "g5-sci-matter-b-q14",
    "Meena looks at a kitchen sponge through a magnifying glass, as shown. Why does the sponge soak up water so well?",
    ["It is made of metal", "It is waterproof", "It is full of tiny spaces that can hold water (porous)", "It dissolves in water"], "c",
    "The close-up shows many small holes; water flows into these spaces and stays there, so the sponge is porous. "
    "Waterproof is the opposite: a waterproof material keeps water out instead of holding it.",
    "Look inside the magnifying glass. What do you see all through the sponge, and where could water go?",
    figure(
        "A yellow kitchen sponge on the left. A magnifying glass on the right shows a close-up view of its surface with many small holes.",
        rect(40, 80, 90, 55, fill="#fde047", stroke="#ca8a04", sw=2, rx=6),
        "".join(circle(55 + (i * 17) % 70, 92 + (i * 11) % 34, 2, fill="#ca8a04", stroke="none") for i in range(14)),
        circle(220, 105, 58, fill="#fef9c3", stroke="#374151", sw=4), _holes,
        line(261, 146, 296, 190, stroke="#374151", sw=8),
        line(130, 100, 168, 92, stroke="#94a3b8", sw=1.2, dash="4 3"), line(130, 120, 168, 128, stroke="#94a3b8", sw=1.2, dash="4 3"),
        text(85, 160, "sponge", size=13), text(220, 30, "close-up", size=13),
    ),
)

_crystals = "".join(rect(x, 167, 7, 6, fill="#ffffff", stroke="#64748b", sw=1) for x in range(210, 290, 11))
item(
    "g5-sci-matter-b-q13",
    "Pooja pours salty water into a wide dish and leaves it in the sun. The picture shows the dish on day 1 and on day 3. Which method has she used to get the salt back?",
    ["Handpicking", "Sieving", "Evaporation", "Using a magnet"], "c",
    "The Sun's heat turned the water into vapour, which went into the air, and the white salt crystals were left in the dish. This is evaporation. "
    "Sieving cannot work, because dissolved salt passes through any sieve holes together with the water.",
    "On day 3 the water has gone but white crystals remain. Where did the water go in the hot sunshine?",
    figure(
        "Day 1: a wide dish of salty water in the sunshine. Day 3: the same dish is dry, with small white crystals left on its bottom.",
        circle(160, 38, 16, fill="#facc15", stroke="#b45309", sw=2),
        "".join(line(160 + 22 * c, 38 + 22 * s, 160 + 30 * c, 38 + 30 * s, stroke="#b45309", sw=2) for c, s in
                [(1, 0), (-1, 0), (0, 1), (0.7, 0.7), (-0.7, 0.7), (0.7, -0.7), (-0.7, -0.7)]),
        path("M30,160 L42,180 L118,180 L130,160 Z", fill="#e5e7eb", stroke="#374151", sw=2),
        rect(38, 160, 84, 12, fill="#93c5fd", stroke="none", opacity=0.9),
        path("M200,160 L212,180 L288,180 L300,160 Z", fill="#e5e7eb", stroke="#374151", sw=2), _crystals,
        text(80, 205, "Day 1", size=14, weight="700"), text(250, 205, "Day 3", size=14, weight="700"),
        arrow(140, 170, 190, 170, sw=2),
    ),
)

_iron = "".join(circle(130 + (i * 23) % 70, 172 - (i * 9) % 18, 1.8, fill="#4b5563", stroke="none") for i in range(22))
_sul = "".join(circle(126 + (i * 19) % 78, 176 - (i * 13) % 20, 1.8, fill="#eab308", stroke="none") for i in range(28))
_stuck = "".join(line(x, 104, x + 2, 114, stroke="#4b5563", sw=1.8) for x in range(127, 151, 4)) + \
    "".join(line(x, 104, x + 2, 114, stroke="#4b5563", sw=1.8) for x in range(171, 195, 4))
item(
    "g5-sci-matter-b-q22",
    "Aman mixes grey iron filings with yellow sulphur powder without heating. He then holds a magnet over the heap, as shown. What does the picture tell you?",
    ["The two powders have joined into one new substance", "The magnet pulls the sulphur", "Both powders have melted",
     "It is a mixture, so the iron can still be pulled out"], "d",
    "Only the grey iron filings cling to the magnet, so the iron has kept its own properties: the powders are just mixed. "
    "If a new substance had formed, the magnet could not pick out the iron on its own.",
    "Look at the colour of the bits stuck to the magnet. Did the iron keep its own property?",
    figure(
        "A horseshoe magnet held over a heap of grey and yellow powder. Grey filings cling to the ends of the magnet; the yellow powder stays in the heap.",
        path("M125,100 L125,60 Q125,22 160,22 Q195,22 195,60 L195,100 L175,100 L175,60 Q175,42 160,42 Q145,42 145,60 L145,100 Z",
             fill="#ef4444", stroke="#7f1d1d", sw=2),
        rect(125, 92, 20, 10, fill="#e5e7eb", stroke="#7f1d1d", sw=1.5), rect(175, 92, 20, 10, fill="#e5e7eb", stroke="#7f1d1d", sw=1.5),
        _stuck, path("M110,185 Q165,140 220,185 Z", fill="#fef3c7", stroke="#a16207", sw=1.5), _iron, _sul,
        leader(195, 110, 255, 95, "grey bits", size=12), leader(205, 178, 255, 175, "yellow bits", size=12),
        text(160, 212, "no heating", size=12, weight="500"),
    ),
)

# --- Force -----------------------------------------------------------------------
item(
    "g5-sci-force-a-q14",
    "Sana cuts a right-angled paper triangle (1) and winds it round a pencil (2). The slanting edge makes a spiral, as shown. Which simple machine has she made a model of?",
    ["A wheel and axle", "A pulley", "A screw", "A lever"], "c",
    "The slanting edge of the triangle is a ramp (an inclined plane); wound round a rod it becomes the spiral thread of a screw. "
    "It is not a wheel and axle, which needs a large wheel fixed to a thin rod that turns with it.",
    "The slanting edge is a ramp. What do you get when a ramp is wound round and round a rod?",
    figure(
        "Step 1: a right-angled paper triangle with its slanting edge drawn in red. Step 2: the same paper wound round a pencil, the red edge forming a spiral up the pencil.",
        poly([(30, 170), (130, 170), (130, 60)], fill="#fef3c7", stroke="#92400e", sw=1.5), line(30, 170, 130, 60, stroke="#dc2626", sw=3),
        text(80, 200, "1", size=16, weight="700"),
        rect(205, 40, 26, 140, fill="#fde68a", stroke="#a16207", sw=1.5), poly([(205, 180), (231, 180), (218, 200)], fill="#fcd34d", stroke="#a16207", sw=1.5),
        "".join(path(f"M205,{y} Q218,{y + 10} 231,{y - 12}", stroke="#dc2626", sw=3) for y in range(70, 180, 22)),
        text(270, 200, "2", size=16, weight="700"), arrow(150, 120, 190, 120, sw=2),
    ),
)


def strip(y, label, dist_px):
    return rect(40, y, 250, 18, fill="#f3f4f6", stroke="#9ca3af", sw=1) + text(26, y + 14, label, size=14, weight="700") + \
        rect(42, y + 2, 16, 14, fill="#c99a6b", stroke="#6b4a2b", sw=1) + arrow(60, y + 9, 60 + dist_px, y + 9, stroke="#2563eb", sw=2, head=7)


item(
    "g5-sci-force-b-q06",
    "The same push sends an identical wooden block along four different surfaces. The arrows show how far it slid on each. Which surface is most likely rough sandpaper?",
    ["Surface P", "Surface Q", "Surface R", "Surface S"], "a",
    "The block stopped soonest on P, so P gave the most friction, which fits rough sandpaper gripping the block. "
    "Surface Q, where the block slid farthest, has the least friction, more like smooth ice.",
    "Friction slows a sliding block. Would a rough surface make the block slide a short way or a long way after the same push?",
    figure(
        "Four strips labelled P, Q, R and S with a wooden block at the left end of each. Arrows show it slid about 20 cm on P, 95 cm on Q, 70 cm on R and 45 cm on S.",
        text(165, 26, "same push each time", size=13, weight="500"),
        strip(40, "P", 36), strip(84, "Q", 171), strip(128, "R", 126), strip(172, "S", 81),
        text(102, 53, "20 cm", size=12, weight="600", anchor="start"), text(237, 97, "95 cm", size=12, weight="600", anchor="start"),
        text(192, 141, "70 cm", size=12, weight="600", anchor="start"), text(147, 185, "45 cm", size=12, weight="600", anchor="start"),
    ),
)

# --- Environment -----------------------------------------------------------------
item(
    "g5-sci-env-b-q03",
    "The picture shows a loop that Asha's family follows at home. What does this loop mainly do?",
    ["Returns nutrients from kitchen waste to the soil", "Makes the soil poorer every year", "Turns peels into plastic", "Sends waste to a landfill"], "a",
    "Peels rot in the compost pit into manure that feeds the soil, and the vegetables grown there become food again, so nutrients go round in a loop. "
    "Nothing goes to a landfill: the waste is used again at home.",
    "Follow the arrows from the peels back to the plate. What do rotting peels add to the garden that helps plants grow?",
    figure(
        "A loop of four pictures joined by arrows: vegetable peels, a compost pit, a vegetable patch, and a plate of cooked vegetables leading back to the peels.",
        # peels (top-left)
        path("M50,50 q12,-14 26,0 q-8,8 -26,0 Z", fill="#fb923c", stroke="#9a3412", sw=1.2),
        path("M62,62 q14,-8 24,4 q-12,6 -24,-4 Z", fill="#84cc16", stroke="#3f6212", sw=1.2),
        text(70, 88, "peels", size=13),
        # compost pit (top-right)
        rect(215, 40, 70, 34, fill="#78350f", stroke="#451a03", sw=1.5, rx=4),
        "".join(circle(225 + i * 9, 55 + (i % 2) * 6, 3, fill="#a16207", stroke="none") for i in range(7)),
        text(250, 92, "compost pit", size=13),
        # vegetable patch (bottom-right)
        rect(210, 160, 80, 18, fill="#a16207", stroke="#713f12", sw=1.2),
        "".join(path(f"M{x},160 q-6,-14 0,-22 q6,8 0,22", fill="#22c55e", stroke="#166534", sw=1) for x in (225, 245, 265, 282)),
        text(250, 198, "vegetable patch", size=13),
        # plate (bottom-left)
        ellipse(70, 165, 38, 13, fill="#f8fafc", stroke="#475569", sw=1.5),
        circle(60, 161, 6, fill="#16a34a", stroke="none"), circle(76, 162, 6, fill="#f97316", stroke="none"), circle(86, 158, 4, fill="#dc2626", stroke="none"),
        text(70, 198, "food", size=13),
        arrow(105, 55, 205, 55, sw=2.2), arrow(250, 105, 250, 135, sw=2.2), arrow(200, 168, 120, 168, sw=2.2), arrow(70, 145, 70, 100, sw=2.2),
    ),
)
