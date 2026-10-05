import type { FigureSpec } from "../types";

/** Pictorial overlays for Grade 4 — original SVG specs (not SOF scans). */
export type PictorialOverlay = {
  figure?: FigureSpec;
  options?: Partial<
    Record<"a" | "b" | "c" | "d", { figure?: FigureSpec; text?: string }>
  >;
};

export const G4_PICTORIAL_OVERLAYS: Record<string, PictorialOverlay> = {
  "g4-maths-large-a-q01": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "TTh",
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "5",
        "2",
        "7",
        "4",
        "6"
      ],
      "highlightIndex": 1
    }
  },
  "g4-maths-large-a-q03": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "8",
        "6",
        "1",
        "5"
      ],
      "highlightIndex": 1
    }
  },
  "g4-maths-large-a-q04": {
    "figure": {
      "type": "place-value-blocks",
      "thousands": 2,
      "hundreds": 7,
      "tens": 0,
      "ones": 5,
      "label": "20,000+7,000+400+5"
    }
  },
  "g4-maths-large-a-q05": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "rectangle",
          "label": "9,999"
        },
        {
          "kind": "rectangle",
          "label": "10,002",
          "highlight": true
        }
      ]
    }
  },
  "g4-maths-large-a-q07": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "TTh",
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "6",
        "3",
        "1",
        "0",
        "8"
      ],
      "highlightIndex": 2
    }
  },
  "g4-maths-large-a-q10": {
    "figure": {
      "type": "number-line",
      "min": 6400,
      "max": 6500,
      "point": 6472,
      "step": 25,
      "label": "Round to nearest hundred"
    }
  },
  "g4-maths-large-a-q12": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "TTh",
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "4",
        "6",
        "0",
        "8",
        "3"
      ],
      "highlightIndex": 2
    }
  },
  "g4-maths-large-a-q15": {
    "figure": {
      "type": "number-line",
      "min": 19998,
      "max": 20001,
      "point": 19999,
      "step": 1,
      "label": "Predecessor / successor"
    }
  },
  "g4-maths-large-a-q18": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "TTh",
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "4",
        "7",
        "3",
        "7",
        "4"
      ],
      "highlightIndex": 1
    }
  },
  "g4-maths-large-b-q01": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "TTh",
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "9",
        "0",
        "5",
        "1",
        "2"
      ],
      "highlightIndex": 0
    }
  },
  "g4-maths-large-b-q03": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "TTh",
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "2",
        "9",
        "3",
        "8",
        "4"
      ],
      "highlightIndex": 1
    }
  },
  "g4-maths-large-b-q07": {
    "figure": {
      "type": "place-value-blocks",
      "thousands": 3,
      "hundreds": 0,
      "tens": 5,
      "ones": 7,
      "label": "Expanded form"
    }
  },
  "g4-maths-large-b-q10": {
    "figure": {
      "type": "number-line",
      "min": 3500,
      "max": 3600,
      "point": 3548,
      "step": 25,
      "label": "Nearest hundred?"
    }
  },
  "g4-maths-large-b-q14": {
    "figure": {
      "type": "table",
      "headers": [
        "Number",
        "Digits"
      ],
      "rows": [
        [
          "9,999",
          "4"
        ],
        [
          "10,000",
          "5"
        ],
        [
          "99,999",
          "5"
        ]
      ],
      "highlightCell": [
        1,
        0
      ]
    }
  },
  "g4-maths-large-b-q17": {
    "figure": {
      "type": "place-value-chart",
      "places": [
        "TTh",
        "Th",
        "H",
        "T",
        "O"
      ],
      "digits": [
        "5",
        "5",
        "5",
        "5",
        "5"
      ],
      "highlightIndex": 3
    }
  },
  "g4-maths-fractions-a-q01": {
    "figure": {
      "type": "fraction-circle",
      "parts": 4,
      "shaded": 1,
      "equal": true,
      "label": "1 piece of 4"
    }
  },
  "g4-maths-fractions-a-q03": {
    "options": {
      "a": {
        "figure": {
          "type": "fraction-circle",
          "parts": 2,
          "shaded": 1,
          "equal": true
        },
        "text": "2 equal parts, 1 shaded"
      },
      "b": {
        "figure": {
          "type": "fraction-circle",
          "parts": 2,
          "shaded": 1,
          "equal": false
        },
        "text": "2 unequal parts, smaller shaded"
      },
      "c": {
        "figure": {
          "type": "shape-grid",
          "rows": 2,
          "cols": 2,
          "shaded": [
            0
          ],
          "label": "1 of 4"
        },
        "text": "4 equal parts, 1 shaded"
      },
      "d": {
        "figure": {
          "type": "fraction-circle",
          "parts": 3,
          "shaded": 1,
          "equal": true
        },
        "text": "3 equal parts, 1 shaded"
      }
    }
  },
  "g4-maths-fractions-a-q04": {
    "figure": {
      "type": "fraction-circle",
      "parts": 3,
      "shaded": 1,
      "equal": true,
      "label": "1 of 3"
    }
  },
  "g4-maths-fractions-a-q07": {
    "figure": {
      "type": "fraction-bar",
      "parts": 2,
      "shaded": 1,
      "label": "1/2",
      "compare": {
        "parts": 4,
        "shaded": 1,
        "label": "1/4"
      }
    }
  },
  "g4-maths-fractions-a-q08": {
    "figure": {
      "type": "shape-grid",
      "rows": 2,
      "cols": 2,
      "shaded": [
        0,
        1,
        2
      ],
      "label": "3 of 4 shaded"
    }
  },
  "g4-maths-fractions-a-q10": {
    "figure": {
      "type": "fraction-bar",
      "parts": 2,
      "shaded": 2,
      "label": "2 halves = 1 whole"
    }
  },
  "g4-maths-fractions-a-q12": {
    "figure": {
      "type": "fraction-bar",
      "parts": 2,
      "shaded": 1,
      "label": "1/2",
      "compare": {
        "parts": 4,
        "shaded": 2,
        "label": "2/4"
      }
    }
  },
  "g4-maths-fractions-a-q15": {
    "figure": {
      "type": "fraction-bar",
      "parts": 4,
      "shaded": 3,
      "label": "3 parts left of 4"
    }
  },
  "g4-maths-fractions-a-q16": {
    "options": {
      "a": {
        "figure": {
          "type": "fraction-circle",
          "parts": 4,
          "shaded": 1,
          "equal": true
        },
        "text": "Circle: 1 of 4 equal"
      },
      "b": {
        "figure": {
          "type": "shape-grid",
          "rows": 2,
          "cols": 2,
          "shaded": [
            0
          ]
        },
        "text": "Square: 1 of 4 equal"
      },
      "c": {
        "figure": {
          "type": "fraction-bar",
          "parts": 4,
          "shaded": 1,
          "label": "unequal widths"
        },
        "text": "Unequal strips, 1 shaded"
      },
      "d": {
        "figure": {
          "type": "fraction-bar",
          "parts": 4,
          "shaded": 1,
          "label": "equal strips"
        },
        "text": "Equal strips, 1 shaded"
      }
    }
  },
  "g4-maths-fractions-a-q17": {
    "figure": {
      "type": "fraction-bar",
      "parts": 5,
      "shaded": 3,
      "label": "3/5",
      "compare": {
        "parts": 5,
        "shaded": 2,
        "label": "2/5"
      }
    }
  },
  "g4-maths-fractions-b-q03": {
    "options": {
      "a": {
        "figure": {
          "type": "shape-grid",
          "rows": 2,
          "cols": 2,
          "shaded": [
            0
          ],
          "label": "unequal?"
        },
        "text": "4 unequal, 1 shaded"
      },
      "b": {
        "figure": {
          "type": "shape-grid",
          "rows": 1,
          "cols": 2,
          "shaded": [
            0
          ]
        },
        "text": "2 equal, 1 shaded (=1/2)"
      },
      "c": {
        "figure": {
          "type": "shape-grid",
          "rows": 2,
          "cols": 2,
          "shaded": [
            0,
            1,
            2
          ]
        },
        "text": "4 equal, 3 shaded"
      },
      "d": {
        "figure": {
          "type": "shape-grid",
          "rows": 2,
          "cols": 2,
          "shaded": [
            0
          ]
        },
        "text": "4 equal, 1 shaded"
      }
    }
  },
  "g4-maths-fractions-b-q07": {
    "figure": {
      "type": "fraction-bar",
      "parts": 3,
      "shaded": 1,
      "label": "1/3",
      "compare": {
        "parts": 2,
        "shaded": 1,
        "label": "1/2"
      }
    }
  },
  "g4-maths-fractions-b-q08": {
    "figure": {
      "type": "fraction-bar",
      "parts": 2,
      "shaded": 1,
      "label": "1/2 of ribbon"
    }
  },
  "g4-maths-fractions-b-q12": {
    "figure": {
      "type": "fraction-bar",
      "parts": 3,
      "shaded": 1,
      "label": "1/3",
      "compare": {
        "parts": 6,
        "shaded": 2,
        "label": "2/6"
      }
    }
  },
  "g4-maths-fractions-b-q15": {
    "figure": {
      "type": "fraction-bar",
      "parts": 6,
      "shaded": 2,
      "label": "2 eaten → 4/6 left"
    }
  },
  "g4-maths-fractions-b-q16": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "rectangle",
          "label": "big + 2 small"
        }
      ]
    }
  },
  "g4-maths-muldiv-a-q01": {
    "figure": {
      "type": "array-grid",
      "rows": 3,
      "cols": 4,
      "label": "3 × 4",
      "filled": true
    }
  },
  "g4-maths-muldiv-a-q03": {
    "figure": {
      "type": "array-grid",
      "rows": 5,
      "cols": 6,
      "label": "5 rows of 6",
      "filled": true
    }
  },
  "g4-maths-muldiv-a-q05": {
    "figure": {
      "type": "number-line",
      "min": 0,
      "max": 45,
      "point": 36,
      "step": 9,
      "label": "Jumps of 9"
    }
  },
  "g4-maths-muldiv-a-q08": {
    "figure": {
      "type": "array-grid",
      "rows": 4,
      "cols": 7,
      "label": "4 × 7",
      "filled": true
    }
  },
  "g4-maths-muldiv-a-q10": {
    "figure": {
      "type": "table",
      "headers": [
        "",
        "×3"
      ],
      "rows": [
        [
          "12",
          "36"
        ],
        [
          "15",
          "?"
        ]
      ],
      "highlightCell": [
        1,
        1
      ]
    }
  },
  "g4-maths-muldiv-a-q12": {
    "figure": {
      "type": "place-value-blocks",
      "tens": 4,
      "ones": 6,
      "label": "46 × 3 (blocks)"
    }
  },
  "g4-maths-muldiv-a-q15": {
    "figure": {
      "type": "array-grid",
      "rows": 8,
      "cols": 4,
      "label": "32 ÷ 4 groups",
      "filled": true
    }
  },
  "g4-maths-muldiv-a-q18": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "triangle",
          "label": "7×8=56",
          "highlight": true
        }
      ]
    }
  },
  "g4-maths-muldiv-b-q02": {
    "figure": {
      "type": "array-grid",
      "rows": 6,
      "cols": 5,
      "label": "6 × 5",
      "filled": true
    }
  },
  "g4-maths-muldiv-b-q04": {
    "figure": {
      "type": "number-line",
      "min": 0,
      "max": 40,
      "point": 28,
      "step": 7,
      "label": "Jumps of 7"
    }
  },
  "g4-maths-muldiv-b-q07": {
    "figure": {
      "type": "array-grid",
      "rows": 9,
      "cols": 3,
      "label": "27 ÷ 3",
      "filled": true
    }
  },
  "g4-maths-muldiv-b-q09": {
    "figure": {
      "type": "array-grid",
      "rows": 2,
      "cols": 12,
      "label": "2 × 12",
      "filled": true
    }
  },
  "g4-maths-muldiv-b-q11": {
    "figure": {
      "type": "table",
      "headers": [
        "Fact family"
      ],
      "rows": [
        [
          "6 × 9 = 54"
        ],
        [
          "54 ÷ 9 = ?"
        ]
      ],
      "highlightCell": [
        1,
        0
      ]
    }
  },
  "g4-maths-muldiv-b-q14": {
    "figure": {
      "type": "array-grid",
      "rows": 5,
      "cols": 8,
      "label": "40 ÷ 5",
      "filled": true
    }
  },
  "g4-maths-muldiv-b-q18": {
    "figure": {
      "type": "place-value-blocks",
      "hundreds": 2,
      "tens": 1,
      "ones": 4,
      "label": "214 × 4"
    }
  },
  "g4-sci-food-a-q01": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "food-plate"
    }
  },
  "g4-sci-food-a-q04": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "food-plate",
      "blankIds": [
        "grow"
      ]
    }
  },
  "g4-sci-food-a-q07": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "food-plate",
      "blankIds": [
        "protect"
      ]
    }
  },
  "g4-sci-food-a-q10": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "plant",
      "blankIds": [
        "leaf"
      ]
    }
  },
  "g4-sci-food-a-q14": {
    "figure": {
      "type": "table",
      "headers": [
        "Food",
        "Group"
      ],
      "rows": [
        [
          "Rice",
          "Go"
        ],
        [
          "Dal",
          "Grow"
        ],
        [
          "Carrot",
          "Protect"
        ]
      ]
    }
  },
  "g4-sci-food-a-q18": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "food-plate",
      "blankIds": [
        "go"
      ]
    }
  },
  "g4-sci-food-b-q02": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "food-plate"
    }
  },
  "g4-sci-food-b-q05": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "plant"
    }
  },
  "g4-sci-food-b-q08": {
    "figure": {
      "type": "table",
      "headers": [
        "Need",
        "Helps"
      ],
      "rows": [
        [
          "Protein",
          "Grow"
        ],
        [
          "Carbs",
          "Energy"
        ],
        [
          "Vitamins",
          "Protect"
        ]
      ],
      "highlightCell": [
        0,
        0
      ]
    }
  },
  "g4-sci-food-b-q12": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "food-plate",
      "blankIds": [
        "protect",
        "go"
      ]
    }
  },
  "g4-sci-food-b-q16": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "food-plate",
      "blankIds": [
        "grow"
      ]
    }
  },
  "g4-sci-food-b-q20": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "plant",
      "blankIds": [
        "root",
        "stem"
      ]
    }
  },
  "g4-sci-matter-a-q01": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states"
    }
  },
  "g4-sci-matter-a-q03": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states",
      "blankIds": [
        "liquid"
      ]
    }
  },
  "g4-sci-matter-a-q06": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states",
      "blankIds": [
        "gas"
      ]
    }
  },
  "g4-sci-matter-a-q09": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "evaporation"
      ]
    }
  },
  "g4-sci-matter-a-q12": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states",
      "blankIds": [
        "solid"
      ],
      "highlightId": "solid"
    }
  },
  "g4-sci-matter-a-q16": {
    "figure": {
      "type": "table",
      "headers": [
        "State",
        "Shape"
      ],
      "rows": [
        [
          "Solid",
          "Own shape"
        ],
        [
          "Liquid",
          "Container"
        ],
        [
          "Gas",
          "Fills space"
        ]
      ]
    }
  },
  "g4-sci-matter-b-q02": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states"
    }
  },
  "g4-sci-matter-b-q05": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states",
      "blankIds": [
        "solid"
      ]
    }
  },
  "g4-sci-matter-b-q08": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "condensation"
      ]
    }
  },
  "g4-sci-matter-b-q11": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states",
      "blankIds": [
        "gas"
      ]
    }
  },
  "g4-sci-matter-b-q15": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "square",
          "label": "Ice"
        },
        {
          "kind": "rectangle",
          "label": "Water",
          "highlight": true
        },
        {
          "kind": "circle",
          "label": "Steam"
        }
      ]
    }
  },
  "g4-sci-matter-b-q19": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states",
      "blankIds": [
        "liquid",
        "gas"
      ]
    }
  },
  "g4-sci-water-a-q01": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle"
    }
  },
  "g4-sci-water-a-q04": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "evaporation"
      ]
    }
  },
  "g4-sci-water-a-q06": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "condensation"
      ]
    }
  },
  "g4-sci-water-a-q08": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "precipitation"
      ]
    }
  },
  "g4-sci-water-a-q11": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "sun"
      ]
    }
  },
  "g4-sci-water-a-q15": {
    "figure": {
      "type": "table",
      "headers": [
        "Step",
        "Name"
      ],
      "rows": [
        [
          "1",
          "Evaporation"
        ],
        [
          "2",
          "Condensation"
        ],
        [
          "3",
          "Precipitation"
        ]
      ]
    }
  },
  "g4-sci-water-a-q18": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "evaporation",
        "condensation"
      ]
    }
  },
  "g4-sci-water-b-q02": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle"
    }
  },
  "g4-sci-water-b-q05": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "precipitation"
      ]
    }
  },
  "g4-sci-water-b-q07": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "matter-states",
      "blankIds": [
        "solid"
      ]
    }
  },
  "g4-sci-water-b-q10": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "condensation"
      ]
    }
  },
  "g4-sci-water-b-q14": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "evaporation"
      ]
    }
  },
  "g4-sci-water-b-q17": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "circle",
          "label": "Sun",
          "highlight": true
        },
        {
          "kind": "rectangle",
          "label": "Pond"
        },
        {
          "kind": "circle",
          "label": "Cloud"
        }
      ]
    }
  },
  "g4-sci-water-b-q21": {
    "figure": {
      "type": "labeled-diagram",
      "kind": "water-cycle",
      "blankIds": [
        "precipitation",
        "sun"
      ]
    }
  },
  "g4-eng-ch02-a-q03": {
    "figure": {
      "type": "table",
      "headers": [
        "Word",
        "Type"
      ],
      "rows": [
        [
          "quickly",
          "adverb?"
        ],
        [
          "happy",
          "adjective?"
        ]
      ]
    }
  },
  "g4-eng-ch02-a-q08": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "rectangle",
          "label": "Noun"
        },
        {
          "kind": "rectangle",
          "label": "Verb",
          "highlight": true
        }
      ]
    }
  },
  "g4-eng-ch02-b-q04": {
    "figure": {
      "type": "table",
      "headers": [
        "Sentence part"
      ],
      "rows": [
        [
          "Subject"
        ],
        [
          "Predicate"
        ]
      ],
      "highlightCell": [
        0,
        0
      ]
    }
  },
  "g4-eng-ch02-b-q12": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "circle",
          "label": "a / an"
        },
        {
          "kind": "square",
          "label": "the",
          "highlight": true
        }
      ]
    }
  },
  "g4-eng-ch02-b-q18": {
    "figure": {
      "type": "table",
      "headers": [
        "Tense",
        "Example"
      ],
      "rows": [
        [
          "Past",
          "went"
        ],
        [
          "Present",
          "goes"
        ]
      ],
      "highlightCell": [
        0,
        0
      ]
    }
  },
  "g4-eng-ch03-a-q02": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "circle",
          "label": "synonym"
        },
        {
          "kind": "circle",
          "label": "antonym",
          "highlight": true
        }
      ]
    }
  },
  "g4-eng-ch03-a-q09": {
    "figure": {
      "type": "table",
      "headers": [
        "Word",
        "Meaning"
      ],
      "rows": [
        [
          "brave",
          "?"
        ],
        [
          "huge",
          "very big"
        ]
      ]
    }
  },
  "g4-eng-ch03-b-q05": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "triangle",
          "label": "prefix"
        },
        {
          "kind": "rectangle",
          "label": "root",
          "highlight": true
        }
      ]
    }
  },
  "g4-eng-ch03-b-q11": {
    "figure": {
      "type": "table",
      "headers": [
        "Pair",
        "Relation"
      ],
      "rows": [
        [
          "hot–cold",
          "opposites"
        ],
        [
          "big–large",
          "same"
        ]
      ]
    }
  },
  "g4-eng-ch03-b-q16": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "hexagon",
          "label": "compound?",
          "highlight": true
        }
      ]
    }
  },
  "g4-eng-ch01-a-q05": {
    "figure": {
      "type": "table",
      "headers": [
        "Strategy"
      ],
      "rows": [
        [
          "Look"
        ],
        [
          "Link"
        ],
        [
          "Decide"
        ]
      ],
      "highlightCell": [
        1,
        0
      ]
    }
  },
  "g4-eng-ch01-a-q12": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "rectangle",
          "label": "Fact"
        },
        {
          "kind": "rectangle",
          "label": "Opinion",
          "highlight": true
        }
      ]
    }
  },
  "g4-eng-ch01-b-q06": {
    "figure": {
      "type": "table",
      "headers": [
        "Clue type"
      ],
      "rows": [
        [
          "Word in sentence"
        ],
        [
          "Picture in mind"
        ]
      ]
    }
  },
  "g4-eng-ch01-b-q14": {
    "figure": {
      "type": "shapes",
      "items": [
        {
          "kind": "circle",
          "label": "Main idea",
          "highlight": true
        }
      ]
    }
  },
  "g4-eng-ch01-b-q20": {
    "figure": {
      "type": "table",
      "headers": [
        "Question"
      ],
      "rows": [
        [
          "Who?"
        ],
        [
          "What?"
        ],
        [
          "Why?"
        ]
      ],
      "highlightCell": [
        2,
        0
      ]
    }
  }
};

export const G4_PICTORIAL_STATS = {
  "total": 99,
  "byChapter": {
    "maths-large": 15,
    "maths-fractions": 16,
    "maths-muldiv": 15,
    "science-food": 12,
    "science-matter": 12,
    "science-water": 14,
    "english-grammar": 5,
    "english-words": 5,
    "english-reading": 5
  },
  "missing": []
} as const;
