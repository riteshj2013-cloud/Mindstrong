import type { ChapterDef, PrepQuestion } from "../types";

/** Cell & Tissues - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-sci-cell-a-q01",
    prompt: "The basic structural and functional unit of life is the…",
    options: [
      { id: "a", text: "cell" },
      { id: "b", text: "tissue" },
      { id: "c", text: "organ" },
      { id: "d", text: "organism" }
    ],
    answerId: "a",
    explanation: "Cell theory: cell is the basic unit of life.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q02",
    prompt: "Who coined the term “cell” after observing cork?",
    options: [
      { id: "a", text: "Darwin" },
      { id: "b", text: "Robert Hooke" },
      { id: "c", text: "Newton" },
      { id: "d", text: "Mendel" }
    ],
    answerId: "b",
    explanation: "Robert Hooke observed cork cells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q03",
    prompt: "In the cell shown, which labelled part is the control centre that contains the genetic material?",
    options: [
      { id: "a", text: "Part P" },
      { id: "b", text: "Part Q" },
      { id: "c", text: "Part R" },
      { id: "d", text: "Part S" }
    ],
    answerId: "c",
    explanation: "R is the nucleus, the large round body with its own boundary that holds the chromosomes (DNA) and controls the cell's activities. S is a mitochondrion, which releases energy but does not hold the cell's main genetic material.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An animal cell. P points to the thin outer boundary, Q to the jelly-like filling, R to a large round body near the centre containing thread-like strands, and S to a small oval body with folded inner walls.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><ellipse cx=\"160\" cy=\"110\" rx=\"115\" ry=\"78\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2.5\"/><circle cx=\"150\" cy=\"108\" r=\"30\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"2\"/><path d=\"M132,100 q8,-10 16,0 t16,0\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/><path d=\"M134,116 q10,8 20,0 t14,4\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/><ellipse cx=\"225\" cy=\"130\" rx=\"15\" ry=\"8\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.4\"/><path d=\"M214,130 q4,-5 7,0 q3,5 7,0 q3,-5 7,0 q3,5 6,0\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.1\" stroke-linejoin=\"round\"/><circle cx=\"95\" cy=\"80\" r=\"3\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"210\" cy=\"70\" r=\"3\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"148\" x2=\"25\" y2=\"185\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"60\" cy=\"148\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"21\" y=\"190\" font-size=\"16\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">P</text><line x1=\"100\" y1=\"125\" x2=\"30\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"100\" cy=\"125\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"26\" y=\"115\" font-size=\"16\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">Q</text><line x1=\"165\" y1=\"90\" x2=\"210\" y2=\"25\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"165\" cy=\"90\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"214\" y=\"30\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">R</text><line x1=\"236\" y1=\"130\" x2=\"295\" y2=\"165\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"236\" cy=\"130\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"299\" y=\"170\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">S</text></svg>", "alt": "An animal cell. P points to the thin outer boundary, Q to the jelly-like filling, R to a large round body near the centre containing thread-like strands, and S to a small oval body with folded inner walls."}
  },
  {
    id: "g9-sci-cell-a-q04",
    prompt: "Powerhouse of the cell refers to…",
    options: [
      { id: "a", text: "nucleus" },
      { id: "b", text: "golgi apparatus" },
      { id: "c", text: "cell wall" },
      { id: "d", text: "mitochondria" }
    ],
    answerId: "d",
    explanation: "Mitochondria release energy (cellular respiration).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q05",
    prompt: "Which is present in plant cells but not in typical animal cells?",
    options: [
      { id: "a", text: "cell wall" },
      { id: "b", text: "mitochondria" },
      { id: "c", text: "cell membrane" },
      { id: "d", text: "ribosomes" }
    ],
    answerId: "a",
    explanation: "Rigid cell wall of cellulose is plant-typical.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q06",
    prompt: "Chloroplasts are associated with…",
    options: [
      { id: "a", text: "protein digestion" },
      { id: "b", text: "photosynthesis" },
      { id: "c", text: "nerve signals" },
      { id: "d", text: "bone growth" }
    ],
    answerId: "b",
    explanation: "Chloroplasts trap light to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q07",
    prompt: "A group of similar cells performing a specific function forms a…",
    options: [
      { id: "a", text: "organelle" },
      { id: "b", text: "organ system only" },
      { id: "c", text: "tissue" },
      { id: "d", text: "population" }
    ],
    answerId: "c",
    explanation: "Tissue = group of similar cells with a common function.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q08",
    prompt: "The selectively permeable boundary of an animal cell is the…",
    options: [
      { id: "a", text: "cell wall" },
      { id: "b", text: "nuclear envelope only" },
      { id: "c", text: "cytoplasm" },
      { id: "d", text: "plasma membrane" }
    ],
    answerId: "d",
    explanation: "Plasma/cell membrane controls entry and exit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q09",
    prompt: "The drawing shows a bacterial cell. Its genetic material lies in region X. What does this cell lack?",
    options: [
      { id: "a", text: "A true nucleus enclosed by a membrane" },
      { id: "b", text: "A cell membrane" },
      { id: "c", text: "DNA of any kind" },
      { id: "d", text: "Ribosomes" }
    ],
    answerId: "a",
    explanation: "Region X holds a coiled loop of DNA, but no membrane surrounds it, so the bacterium has no true nucleus: it is a prokaryote. It does have DNA, the coiled thread in region X, so lacking DNA of any kind is wrong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A rod-shaped bacterial cell with an outer wall, a thin membrane just inside it, many tiny dots scattered in the cytoplasm, and region X in the middle, where a tangled loop of thread lies loose with no boundary around it.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"30\" y=\"60\" width=\"260\" height=\"100\" rx=\"50\" fill=\"#dcfce7\" stroke=\"#166534\" stroke-width=\"4\"/><rect x=\"38\" y=\"68\" width=\"244\" height=\"84\" rx=\"42\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"1.5\"/><path d=\"M120,110 C130,85 170,85 180,105 C190,130 150,140 140,120 C132,104 160,96 170,112 C178,126 200,120 205,100\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"70\" cy=\"90\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"85\" cy=\"130\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"230\" cy=\"85\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"245\" cy=\"130\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"80\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"215\" cy=\"140\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"260\" cy=\"110\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"112\" r=\"2\" fill=\"#166534\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M290,110 q15,-10 25,5\" fill=\"none\" stroke=\"#166534\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"165\" y1=\"98\" x2=\"200\" y2=\"30\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"165\" cy=\"98\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"204\" y=\"35\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">X</text></svg>", "alt": "A rod-shaped bacterial cell with an outer wall, a thin membrane just inside it, many tiny dots scattered in the cytoplasm, and region X in the middle, where a tangled loop of thread lies loose with no boundary around it."}
  },
  {
    id: "g9-sci-cell-a-q10",
    prompt: "Which tissue shown gives rigid support and is made of dead cells when mature?",
    options: [
      { id: "a", text: "Tissue P" },
      { id: "b", text: "Tissue Q" },
      { id: "c", text: "Tissue R" },
      { id: "d", text: "No tissue shown" }
    ],
    answerId: "b",
    explanation: "Q has very thick walls all round, a tiny space in the middle and no nuclei: it is sclerenchyma, whose dead, lignified cells give rigid support. R is collenchyma: its walls are thick only at the corners and its cells are living, so it gives flexible support instead.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three plant tissues. P: rounded thin-walled cells with nuclei and small spaces between them. Q: cells with very thick walls all round, only a tiny space inside and no nuclei. R: living cells with nuclei whose walls are thickened only at the corners.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><circle cx=\"28\" cy=\"56\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"32\" cy=\"53\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"56\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"62\" cy=\"53\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"88\" cy=\"56\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"92\" cy=\"53\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"28\" cy=\"86\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"32\" cy=\"83\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"86\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"62\" cy=\"83\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"88\" cy=\"86\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"92\" cy=\"83\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"28\" cy=\"116\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"32\" cy=\"113\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"116\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"62\" cy=\"113\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"88\" cy=\"116\" r=\"13\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"92\" cy=\"113\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"116\" y=\"42\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"130\" cy=\"56\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"146\" y=\"42\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"160\" cy=\"56\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"176\" y=\"42\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"190\" cy=\"56\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"116\" y=\"72\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"130\" cy=\"86\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"146\" y=\"72\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"160\" cy=\"86\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"176\" y=\"72\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"190\" cy=\"86\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"116\" y=\"102\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"130\" cy=\"116\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"146\" y=\"102\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"160\" cy=\"116\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"176\" y=\"102\" width=\"28\" height=\"28\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1\"/><circle cx=\"190\" cy=\"116\" r=\"3.5\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"218\" y=\"42\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"235\" cy=\"54\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"218,42 226,42 218,50\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"246,42 238,42 246,50\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"218,70 226,70 218,62\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"246,70 238,70 246,62\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"248\" y=\"42\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"265\" cy=\"54\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"248,42 256,42 248,50\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"276,42 268,42 276,50\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"248,70 256,70 248,62\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"276,70 268,70 276,62\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"278\" y=\"42\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"295\" cy=\"54\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"278,42 286,42 278,50\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"306,42 298,42 306,50\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,70 286,70 278,62\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"306,70 298,70 306,62\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"218\" y=\"72\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"235\" cy=\"84\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"218,72 226,72 218,80\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"246,72 238,72 246,80\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"218,100 226,100 218,92\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"246,100 238,100 246,92\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"248\" y=\"72\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"265\" cy=\"84\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"248,72 256,72 248,80\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"276,72 268,72 276,80\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"248,100 256,100 248,92\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"276,100 268,100 276,92\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"278\" y=\"72\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"295\" cy=\"84\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"278,72 286,72 278,80\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"306,72 298,72 306,80\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,100 286,100 278,92\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"306,100 298,100 306,92\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"218\" y=\"102\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"235\" cy=\"114\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"218,102 226,102 218,110\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"246,102 238,102 246,110\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"218,130 226,130 218,122\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"246,130 238,130 246,122\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"248\" y=\"102\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"265\" cy=\"114\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"248,102 256,102 248,110\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"276,102 268,102 276,110\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"248,130 256,130 248,122\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"276,130 268,130 276,122\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"278\" y=\"102\" width=\"28\" height=\"28\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.2\"/><circle cx=\"295\" cy=\"114\" r=\"3\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"278,102 286,102 278,110\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"306,102 298,102 306,110\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,130 286,130 278,122\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"306,130 298,130 306,122\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"58\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"160\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"262\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text></svg>", "alt": "Three plant tissues. P: rounded thin-walled cells with nuclei and small spaces between them. Q: cells with very thick walls all round, only a tiny space inside and no nuclei. R: living cells with nuclei whose walls are thickened only at the corners."}
  },
  {
    id: "g9-sci-cell-a-q11",
    prompt: "The drawing shows the tip of a growing root. Region X is made of small, tightly packed cells with large nuclei. What is the main job of this tissue?",
    options: [
      { id: "a", text: "Photosynthesis" },
      { id: "b", text: "Carrying water" },
      { id: "c", text: "Growth by cell division" },
      { id: "d", text: "Storing starch" }
    ],
    answerId: "c",
    explanation: "Region X, just behind the root cap, is meristematic tissue: its small, dense cells with large nuclei keep dividing, making new cells so the root grows longer. Photosynthesis is wrong: root tips are underground, have no chloroplasts and get no light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A long root tip. Near the top the cells are long and stretched. Region X, just behind a cap at the very tip, is made of small square cells with large nuclei, some of them splitting into two.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M120,20 L120,160 Q160,215 200,160 L200,20\" fill=\"#fef9c3\" stroke=\"#a16207\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"122\" y=\"22\" width=\"26\" height=\"40\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1\"/><rect x=\"148\" y=\"22\" width=\"26\" height=\"40\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1\"/><rect x=\"174\" y=\"22\" width=\"26\" height=\"40\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1\"/><rect x=\"122\" y=\"62\" width=\"26\" height=\"40\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1\"/><rect x=\"148\" y=\"62\" width=\"26\" height=\"40\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1\"/><rect x=\"174\" y=\"62\" width=\"26\" height=\"40\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"1\"/><rect x=\"122\" y=\"102\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"128.5\" cy=\"108.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"135\" y=\"102\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"141.5\" cy=\"108.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"148\" y=\"102\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"154.5\" cy=\"108.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"161\" y=\"102\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"167.5\" cy=\"108.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"174\" y=\"102\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"180.5\" cy=\"108.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"187\" y=\"102\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"193.5\" cy=\"108.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"122\" y=\"115\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"128.5\" cy=\"121.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"135\" y=\"115\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"141.5\" cy=\"121.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"148\" y=\"115\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"154.5\" cy=\"121.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"161\" y=\"115\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"167.5\" cy=\"121.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"174\" y=\"115\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"180.5\" cy=\"121.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"187\" y=\"115\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"193.5\" cy=\"121.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"122\" y=\"128\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"128.5\" cy=\"134.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"135\" y=\"128\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"141.5\" cy=\"134.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"148\" y=\"128\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"154.5\" cy=\"134.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"161\" y=\"128\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"167.5\" cy=\"134.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"174\" y=\"128\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"180.5\" cy=\"134.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"187\" y=\"128\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"193.5\" cy=\"134.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"122\" y=\"141\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"128.5\" cy=\"147.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"135\" y=\"141\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"141.5\" cy=\"147.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"148\" y=\"141\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"154.5\" cy=\"147.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"161\" y=\"141\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"167.5\" cy=\"147.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"174\" y=\"141\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"180.5\" cy=\"147.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"187\" y=\"141\" width=\"13\" height=\"13\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"0.8\"/><circle cx=\"193.5\" cy=\"147.5\" r=\"3.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M122,160 Q160,212 198,160 Q160,180 122,160 Z\" fill=\"#d6a76a\" stroke=\"#92400e\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><line x1=\"198\" y1=\"128\" x2=\"250\" y2=\"128\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"198\" cy=\"128\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"254\" y=\"133\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">X</text><text x=\"250\" y=\"190\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">root cap</text><line x1=\"198\" y1=\"175\" x2=\"240\" y2=\"186\" stroke=\"#475569\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>", "alt": "A long root tip. Near the top the cells are long and stretched. Region X, just behind a cap at the very tip, is made of small square cells with large nuclei, some of them splitting into two."}
  },
  {
    id: "g9-sci-cell-a-q12",
    prompt: "Epithelial tissue in animals mainly…",
    options: [
      { id: "a", text: "contracts to move bones" },
      { id: "b", text: "carries oxygen as haemoglobin tissue name" },
      { id: "c", text: "stores only starch" },
      { id: "d", text: "covers body surfaces and lines cavities" }
    ],
    answerId: "d",
    explanation: "Epithelium covers and lines surfaces.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q13",
    prompt: "Large central vacuoles are typical of…",
    options: [
      { id: "a", text: "plant cells" },
      { id: "b", text: "animal cells" },
      { id: "c", text: "viruses" },
      { id: "d", text: "all bacteria without exception in exams always" }
    ],
    answerId: "a",
    explanation: "Mature plant cells often have a large central vacuole.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q14",
    prompt: "Ribosomes help in…",
    options: [
      { id: "a", text: "lipid storage only" },
      { id: "b", text: "protein synthesis" },
      { id: "c", text: "photosynthesis" },
      { id: "d", text: "digestion of food in stomach tissue" }
    ],
    answerId: "b",
    explanation: "Ribosomes assemble proteins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q15",
    prompt: "In the plant shown, arrow X marks transport through the xylem. What is being carried along X?",
    options: [
      { id: "a", text: "Food from the leaves" },
      { id: "b", text: "Oxygen in blood" },
      { id: "c", text: "Water and minerals from the roots" },
      { id: "d", text: "Hormones in animals" }
    ],
    answerId: "c",
    explanation: "Arrow X runs upward from the roots to the leaves, the direction in which xylem carries water and dissolved minerals taken in from the soil. Food from the leaves travels in the phloem, shown by arrow Y, mostly away from the leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A plant with leaves at the top, a stem and roots in the soil. Arrow X runs up the stem from the roots to the leaves. Arrow Y runs down the stem from the leaves.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"0\" y=\"150\" width=\"320\" height=\"70\" fill=\"#d6a76a\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.6\"/><line x1=\"0\" y1=\"150\" x2=\"320\" y2=\"150\" stroke=\"#78350f\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"150\" stroke=\"#15803d\" stroke-width=\"8\" stroke-linecap=\"round\"/><path d=\"M160,60 C130,40 100,45 88,60 C110,72 140,72 160,60 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M160,80 C190,60 222,65 232,80 C210,92 180,92 160,80 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M160,45 C150,25 160,15 168,12 C172,28 166,40 160,45 Z\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M160,150 Q150,180 130,200\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M160,150 Q170,185 195,205\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M160,150 L160,210\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M150,170 Q130,175 115,172\" fill=\"none\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><line x1=\"140\" y1=\"190\" x2=\"140.0\" y2=\"78.0\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"140,70 144.4,78 135.6,78\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"128\" y=\"125\" font-size=\"16\" text-anchor=\"end\" font-weight=\"700\" fill=\"#2563eb\">X</text><line x1=\"180\" y1=\"70\" x2=\"180.0\" y2=\"132.0\" stroke=\"#ea580c\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"180,140 175.6,132 184.4,132\" fill=\"#ea580c\" stroke=\"#ea580c\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"192\" y=\"115\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#ea580c\">Y</text></svg>", "alt": "A plant with leaves at the top, a stem and roots in the soil. Arrow X runs up the stem from the roots to the leaves. Arrow Y runs down the stem from the leaves."}
  },
  {
    id: "g9-sci-cell-a-q16",
    prompt: "Phloem transports…",
    options: [
      { id: "a", text: "water only upward always" },
      { id: "b", text: "only carbon dioxide" },
      { id: "c", text: "only sunlight" },
      { id: "d", text: "food (sugars) to plant parts" }
    ],
    answerId: "d",
    explanation: "Phloem moves prepared food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q17",
    prompt: "Which organelle packages and dispatches proteins?",
    options: [
      { id: "a", text: "golgi apparatus" },
      { id: "b", text: "lysosome" },
      { id: "c", text: "chloroplast" },
      { id: "d", text: "cell wall" }
    ],
    answerId: "a",
    explanation: "Golgi modifies and packages materials.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q18",
    prompt: "Lysosomes are rich in…",
    options: [
      { id: "a", text: "chlorophyll" },
      { id: "b", text: "digestive enzymes" },
      { id: "c", text: "cellulose only" },
      { id: "d", text: "starch grains only" }
    ],
    answerId: "b",
    explanation: "Lysosomes contain hydrolytic enzymes (suicide bags).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q19",
    prompt: "Connective tissue examples include…",
    options: [
      { id: "a", text: "skin epithelium only" },
      { id: "b", text: "xylem" },
      { id: "c", text: "blood, bone and cartilage" },
      { id: "d", text: "meristem" }
    ],
    answerId: "c",
    explanation: "Blood, bone and cartilage are connective tissues.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q20",
    prompt: "Muscle tissue is specialised for…",
    options: [
      { id: "a", text: "impulse only" },
      { id: "b", text: "photosynthesis" },
      { id: "c", text: "covering surfaces only" },
      { id: "d", text: "contraction and movement" }
    ],
    answerId: "d",
    explanation: "Muscles contract to produce movement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q21",
    prompt: "The drawing shows the main kind of cell in one animal tissue. What is this tissue specialised to do?",
    options: [
      { id: "a", text: "Transmit impulses" },
      { id: "b", text: "Store fat" },
      { id: "c", text: "Transport water in stems" },
      { id: "d", text: "Contract to move bones" }
    ],
    answerId: "a",
    explanation: "This is a neuron, the cell of nervous tissue: its branched dendrites pick up signals and its long axon carries electrical impulses quickly to other cells. Contracting to move bones is the job of skeletal muscle tissue, whose long fibres have no branches like these.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"One animal cell: a cell body with a nucleus and many short branches on one side, a single very long fibre wrapped in a chain of sausage-shaped segments, and a group of branched endings at the far end.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"44.411542731880104\" y1=\"96.0\" x2=\"21.894882233484694\" y2=\"83.0\" stroke=\"#0f766e\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"21.894882233484694\" y1=\"83.0\" x2=\"11.924053774911197\" y2=\"83.7632691856094\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"21.894882233484694\" y1=\"83.0\" x2=\"17.570478508861548\" y2=\"73.98337466529381\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"51.0\" y1=\"89.4115427318801\" x2=\"38.000000000000014\" y2=\"66.8948822334847\" stroke=\"#0f766e\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"38.000000000000014\" y1=\"66.8948822334847\" x2=\"28.983374665293827\" y2=\"62.57047850886155\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"38.000000000000014\" y1=\"66.8948822334847\" x2=\"38.763269185609424\" y2=\"56.9240537749112\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"63.12566719800475\" y1=\"87.27346044578026\" x2=\"67.64051981734494\" y2=\"61.668458867462846\" stroke=\"#0f766e\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"67.64051981734494\" y1=\"61.668458867462846\" x2=\"63.513057217477545\" y2=\"52.559998378077395\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"67.64051981734494\" y1=\"61.668458867462846\" x2=\"74.63434292706594\" y2=\"54.52098110884531\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"44.411542731880104\" y1=\"114.0\" x2=\"21.894882233484694\" y2=\"127.0\" stroke=\"#0f766e\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"21.894882233484694\" y1=\"127.0\" x2=\"17.570478508861548\" y2=\"136.0166253347062\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"21.894882233484694\" y1=\"127.0\" x2=\"11.924053774911197\" y2=\"126.2367308143906\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"53.843637420137966\" y1=\"121.91446717414635\" x2=\"44.95111369367058\" y2=\"146.34647531457998\" stroke=\"#0f766e\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"44.95111369367058\" y1=\"146.34647531457998\" x2=\"47.43420329695489\" y2=\"156.03328418138753\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"44.95111369367058\" y1=\"146.34647531457998\" x2=\"36.822395984322526\" y2=\"152.17090218782093\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"43.08553282585365\" y1=\"98.84363742013797\" x2=\"18.65352468542003\" y2=\"89.95111369367058\" stroke=\"#0f766e\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><line x1=\"18.65352468542003\" y1=\"89.95111369367058\" x2=\"8.966715818612482\" y2=\"92.43420329695489\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"18.65352468542003\" y1=\"89.95111369367058\" x2=\"12.829097812179082\" y2=\"81.82239598432253\" stroke=\"#0f766e\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M78.0,105 C150.0,99 210.0,115 270.0,105\" fill=\"none\" stroke=\"#0f766e\" stroke-width=\"3.2\" stroke-linejoin=\"round\"/><line x1=\"270.0\" y1=\"105\" x2=\"288.0\" y2=\"89.0\" stroke=\"#0f766e\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"270.0\" y1=\"105\" x2=\"288.0\" y2=\"99.0\" stroke=\"#0f766e\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"270.0\" y1=\"105\" x2=\"288.0\" y2=\"111.0\" stroke=\"#0f766e\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"270.0\" y1=\"105\" x2=\"288.0\" y2=\"121.0\" stroke=\"#0f766e\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><ellipse cx=\"103.4\" cy=\"103.7\" rx=\"11\" ry=\"5.5\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"1.5\"/><ellipse cx=\"133.9\" cy=\"104.0\" rx=\"11\" ry=\"5.5\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"1.5\"/><ellipse cx=\"163.3\" cy=\"105.5\" rx=\"11\" ry=\"5.5\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"1.5\"/><ellipse cx=\"191.6\" cy=\"107.3\" rx=\"11\" ry=\"5.5\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"1.5\"/><ellipse cx=\"219.3\" cy=\"108.3\" rx=\"11\" ry=\"5.5\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"1.5\"/><ellipse cx=\"246.6\" cy=\"107.7\" rx=\"11\" ry=\"5.5\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"105\" r=\"20.0\" fill=\"#ccfbf1\" stroke=\"#0f766e\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"105\" r=\"7.0\" fill=\"#0f766e\" stroke=\"none\" stroke-width=\"1.5\"/></svg>", "alt": "One animal cell: a cell body with a nucleus and many short branches on one side, a single very long fibre wrapped in a chain of sausage-shaped segments, and a group of branched endings at the far end."}
  },
  {
    id: "g9-sci-cell-a-q22",
    prompt: "Which is unicellular?",
    options: [
      { id: "a", text: "mango tree" },
      { id: "b", text: "Amoeba" },
      { id: "c", text: "human" },
      { id: "d", text: "rose plant" }
    ],
    answerId: "b",
    explanation: "Amoeba is a single-celled organism.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q23",
    prompt: "Cell wall of plants is mainly made of…",
    options: [
      { id: "a", text: "chitin only as in all plants" },
      { id: "b", text: "peptidoglycan only" },
      { id: "c", text: "cellulose" },
      { id: "d", text: "keratin" }
    ],
    answerId: "c",
    explanation: "Plant cell walls are chiefly cellulose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-a-q24",
    prompt: "Chromosomes are found in the…",
    options: [
      { id: "a", text: "vacuole" },
      { id: "b", text: "cell wall" },
      { id: "c", text: "mitochondrial nickname only never nucleus" },
      { id: "d", text: "nucleus" }
    ],
    answerId: "d",
    explanation: "Chromosomes reside in the nucleus (as chromatin/chromosomes).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-sci-cell-b-q01",
    prompt: "Who proposed that all cells arise from pre-existing cells?",
    options: [
      { id: "a", text: "Virchow" },
      { id: "b", text: "Hooke alone" },
      { id: "c", text: "Einstein" },
      { id: "d", text: "Lavoisier" }
    ],
    answerId: "a",
    explanation: "Virchow: Omnis cellula e cellula.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q02",
    prompt: "What is the part labelled X in the cell shown?",
    options: [
      { id: "a", text: "Cell wall" },
      { id: "b", text: "Cytoplasm" },
      { id: "c", text: "Nucleoplasm" },
      { id: "d", text: "Vacuole" }
    ],
    answerId: "b",
    explanation: "X is the jelly-like region between the cell membrane and the nucleus, in which most organelles float: the cytoplasm. Nucleoplasm is the similar jelly inside the nucleus, but X lies outside the nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An animal cell with a thin outer membrane, a round nucleus near the centre and a few small organelles. X points to the jelly-like region between the outer membrane and the nucleus.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><ellipse cx=\"160\" cy=\"110\" rx=\"115\" ry=\"78\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2.5\"/><circle cx=\"150\" cy=\"108\" r=\"28\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"2\"/><circle cx=\"155\" cy=\"104\" r=\"6\" fill=\"#5b21b6\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"220\" cy=\"75\" rx=\"15\" ry=\"8\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.4\"/><path d=\"M209,75 q4,-5 7,0 q3,5 7,0 q3,-5 7,0 q3,5 6,0\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.1\" stroke-linejoin=\"round\"/><ellipse cx=\"100\" cy=\"145\" rx=\"15\" ry=\"8\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.4\"/><path d=\"M89,145 q4,-5 7,0 q3,5 7,0 q3,-5 7,0 q3,5 6,0\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.1\" stroke-linejoin=\"round\"/><line x1=\"225\" y1=\"140\" x2=\"290\" y2=\"190\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"225\" cy=\"140\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"294\" y=\"195\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">X</text></svg>", "alt": "An animal cell with a thin outer membrane, a round nucleus near the centre and a few small organelles. X points to the jelly-like region between the outer membrane and the nucleus."}
  },
  {
    id: "g9-sci-cell-b-q03",
    prompt: "Which cells lack chloroplasts?",
    options: [
      { id: "a", text: "leaf mesophyll cells" },
      { id: "b", text: "green algal cells with chloroplasts" },
      { id: "c", text: "typical animal cells" },
      { id: "d", text: "plant guard cells" }
    ],
    answerId: "c",
    explanation: "Animal cells do not have chloroplasts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q04",
    prompt: "Permanent tissues in plants are formed from…",
    options: [
      { id: "a", text: "blood" },
      { id: "b", text: "only animal epithelium" },
      { id: "c", text: "viruses" },
      { id: "d", text: "meristematic tissues that have lost the ability to divide" }
    ],
    answerId: "d",
    explanation: "Differentiation of meristems yields permanent tissues.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q05",
    prompt: "Parenchyma typically…",
    options: [
      { id: "a", text: "is living and soft, often storing food" },
      { id: "b", text: "is dead with thick lignin always" },
      { id: "c", text: "transmits nerve impulses" },
      { id: "d", text: "contracts like biceps" }
    ],
    answerId: "a",
    explanation: "Parenchyma is living ground tissue, often storage.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q06",
    prompt: "The drawing shows a tissue from the stalk of a young leaf. What does this tissue provide?",
    options: [
      { id: "a", text: "Impulse conduction" },
      { id: "b", text: "Flexibility and support to growing parts" },
      { id: "c", text: "Oxygen transport in blood" },
      { id: "d", text: "Rigid support as dead, thick-walled fibres" }
    ],
    answerId: "b",
    explanation: "These living cells, with nuclei, have walls thickened only at the corners: this is collenchyma, which supports young stems and leaf stalks while letting them bend. Rigid support from dead fibres describes sclerenchyma, whose cells are thickened all the way round and have no nuclei.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A plant tissue seen under a microscope: box-shaped living cells, each with a nucleus, whose walls are thin along the sides but thickened at every corner.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"38\" y=\"20\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"64\" cy=\"41\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"38,20 50,20 38,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"38,66 50,66 38,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,20 74,20 86,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,66 74,66 86,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"86\" y=\"20\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"112\" cy=\"41\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"86,20 98,20 86,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,66 98,66 86,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,20 122,20 134,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,66 122,66 134,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"134\" y=\"20\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"160\" cy=\"41\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"134,20 146,20 134,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,66 146,66 134,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,20 170,20 182,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,66 170,66 182,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"182\" y=\"20\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"208\" cy=\"41\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"182,20 194,20 182,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,66 194,66 182,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,20 218,20 230,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,66 218,66 230,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"230\" y=\"20\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"256\" cy=\"41\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"230,20 242,20 230,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,66 242,66 230,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,20 266,20 278,32\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,66 266,66 278,54\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"38\" y=\"66\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"64\" cy=\"87\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"38,66 50,66 38,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"38,112 50,112 38,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,66 74,66 86,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,112 74,112 86,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"86\" y=\"66\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"112\" cy=\"87\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"86,66 98,66 86,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,112 98,112 86,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,66 122,66 134,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,112 122,112 134,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"134\" y=\"66\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"160\" cy=\"87\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"134,66 146,66 134,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,112 146,112 134,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,66 170,66 182,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,112 170,112 182,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"182\" y=\"66\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"208\" cy=\"87\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"182,66 194,66 182,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,112 194,112 182,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,66 218,66 230,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,112 218,112 230,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"230\" y=\"66\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"256\" cy=\"87\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"230,66 242,66 230,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,112 242,112 230,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,66 266,66 278,78\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,112 266,112 278,100\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"38\" y=\"112\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"64\" cy=\"133\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"38,112 50,112 38,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"38,158 50,158 38,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,112 74,112 86,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,158 74,158 86,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"86\" y=\"112\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"112\" cy=\"133\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"86,112 98,112 86,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,158 98,158 86,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,112 122,112 134,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,158 122,158 134,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"134\" y=\"112\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"160\" cy=\"133\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"134,112 146,112 134,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,158 146,158 134,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,112 170,112 182,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,158 170,158 182,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"182\" y=\"112\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"208\" cy=\"133\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"182,112 194,112 182,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,158 194,158 182,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,112 218,112 230,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,158 218,158 230,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"230\" y=\"112\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"256\" cy=\"133\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"230,112 242,112 230,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,158 242,158 230,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,112 266,112 278,124\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,158 266,158 278,146\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"38\" y=\"158\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"64\" cy=\"179\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"38,158 50,158 38,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"38,204 50,204 38,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,158 74,158 86,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,204 74,204 86,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"86\" y=\"158\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"112\" cy=\"179\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"86,158 98,158 86,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"86,204 98,204 86,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,158 122,158 134,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,204 122,204 134,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"134\" y=\"158\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"160\" cy=\"179\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"134,158 146,158 134,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"134,204 146,204 134,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,158 170,158 182,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,204 170,204 182,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"182\" y=\"158\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"208\" cy=\"179\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"182,158 194,158 182,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"182,204 194,204 182,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,158 218,158 230,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,204 218,204 230,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><rect x=\"230\" y=\"158\" width=\"48\" height=\"46\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"1.4\"/><circle cx=\"256\" cy=\"179\" r=\"4.5\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"230,158 242,158 230,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"230,204 242,204 230,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,158 266,158 278,170\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polygon points=\"278,204 266,204 278,192\" fill=\"#3f6212\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>", "alt": "A plant tissue seen under a microscope: box-shaped living cells, each with a nucleus, whose walls are thin along the sides but thickened at every corner."}
  },
  {
    id: "g9-sci-cell-b-q07",
    prompt: "The nucleus is separated from cytoplasm by the…",
    options: [
      { id: "a", text: "cell wall" },
      { id: "b", text: "xylem" },
      { id: "c", text: "nuclear membrane" },
      { id: "d", text: "cuticle only" }
    ],
    answerId: "c",
    explanation: "Nuclear envelope/membrane bounds the nucleus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q08",
    prompt: "Mitochondria are more numerous in cells that…",
    options: [
      { id: "a", text: "need little energy" },
      { id: "b", text: "are dead xylem vessels only" },
      { id: "c", text: "have no membrane" },
      { id: "d", text: "require a lot of energy" }
    ],
    answerId: "d",
    explanation: "Active cells need more mitochondria for ATP.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q09",
    prompt: "Which is an example of a connective tissue that is fluid?",
    options: [
      { id: "a", text: "blood" },
      { id: "b", text: "bone" },
      { id: "c", text: "cartilage only" },
      { id: "d", text: "tendon only" }
    ],
    answerId: "a",
    explanation: "Blood is a fluid connective tissue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q10",
    prompt: "Striated muscles are also called…",
    options: [
      { id: "a", text: "smooth muscles" },
      { id: "b", text: "skeletal muscles (voluntary, striped)" },
      { id: "c", text: "cardiac only without stripes" },
      { id: "d", text: "xylem fibres" }
    ],
    answerId: "b",
    explanation: "Skeletal muscles appear striped (striated) and are voluntary.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q11",
    prompt: "Smooth muscles are found in…",
    options: [
      { id: "a", text: "biceps mainly" },
      { id: "b", text: "heart only as skeletal" },
      { id: "c", text: "walls of internal organs (involuntary)" },
      { id: "d", text: "leaf veins" }
    ],
    answerId: "c",
    explanation: "Visceral/smooth muscle is involuntary in organ walls.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q12",
    prompt: "Which muscle tissue shown is found in the wall of the heart?",
    options: [
      { id: "a", text: "Tissue P" },
      { id: "b", text: "Tissue Q" },
      { id: "c", text: "Both P and Q" },
      { id: "d", text: "Tissue R" }
    ],
    answerId: "d",
    explanation: "R has striped, branching cells joined end to end, each with one central nucleus: this is cardiac muscle, found only in the heart, where it contracts rhythmically without tiring. P is also striped, but its long unbranched fibres with many nuclei are skeletal muscle, which moves bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three muscle tissues. P: long, unbranched striped fibres, each with many nuclei along its edge. Q: spindle-shaped cells without stripes, each with one nucleus. R: striped cells that branch and join their neighbours, each with one central nucleus.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"20\" y=\"30\" width=\"280\" height=\"16\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.2\"/><line x1=\"26\" y1=\"30\" x2=\"26\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"32\" y1=\"30\" x2=\"32\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"30\" x2=\"38\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"44\" y1=\"30\" x2=\"44\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"30\" x2=\"50\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"30\" x2=\"56\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"30\" x2=\"62\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"30\" x2=\"68\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"74\" y1=\"30\" x2=\"74\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"30\" x2=\"80\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"86\" y1=\"30\" x2=\"86\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"92\" y1=\"30\" x2=\"92\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"30\" x2=\"98\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"104\" y1=\"30\" x2=\"104\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"30\" x2=\"110\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"116\" y1=\"30\" x2=\"116\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"122\" y1=\"30\" x2=\"122\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"30\" x2=\"128\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"134\" y1=\"30\" x2=\"134\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"30\" x2=\"140\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"146\" y1=\"30\" x2=\"146\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"152\" y1=\"30\" x2=\"152\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"30\" x2=\"158\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"164\" y1=\"30\" x2=\"164\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"30\" x2=\"170\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"176\" y1=\"30\" x2=\"176\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"182\" y1=\"30\" x2=\"182\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"30\" x2=\"188\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"194\" y1=\"30\" x2=\"194\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"30\" x2=\"200\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"206\" y1=\"30\" x2=\"206\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"30\" x2=\"212\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"30\" x2=\"218\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"224\" y1=\"30\" x2=\"224\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"30\" x2=\"230\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"236\" y1=\"30\" x2=\"236\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"242\" y1=\"30\" x2=\"242\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"30\" x2=\"248\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"254\" y1=\"30\" x2=\"254\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"30\" x2=\"260\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"266\" y1=\"30\" x2=\"266\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"272\" y1=\"30\" x2=\"272\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"30\" x2=\"278\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"284\" y1=\"30\" x2=\"284\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"30\" x2=\"290\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"296\" y1=\"30\" x2=\"296\" y2=\"46\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><rect x=\"20\" y=\"50\" width=\"280\" height=\"16\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.2\"/><line x1=\"26\" y1=\"50\" x2=\"26\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"32\" y1=\"50\" x2=\"32\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"38\" y1=\"50\" x2=\"38\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"44\" y1=\"50\" x2=\"44\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"56\" y1=\"50\" x2=\"56\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"50\" x2=\"62\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"68\" y1=\"50\" x2=\"68\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"74\" y1=\"50\" x2=\"74\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"86\" y1=\"50\" x2=\"86\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"92\" y1=\"50\" x2=\"92\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"98\" y1=\"50\" x2=\"98\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"104\" y1=\"50\" x2=\"104\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"50\" x2=\"110\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"116\" y1=\"50\" x2=\"116\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"122\" y1=\"50\" x2=\"122\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"128\" y1=\"50\" x2=\"128\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"134\" y1=\"50\" x2=\"134\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"50\" x2=\"140\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"146\" y1=\"50\" x2=\"146\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"152\" y1=\"50\" x2=\"152\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"158\" y1=\"50\" x2=\"158\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"164\" y1=\"50\" x2=\"164\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"50\" x2=\"170\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"176\" y1=\"50\" x2=\"176\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"182\" y1=\"50\" x2=\"182\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"188\" y1=\"50\" x2=\"188\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"194\" y1=\"50\" x2=\"194\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"50\" x2=\"200\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"206\" y1=\"50\" x2=\"206\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"50\" x2=\"212\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"218\" y1=\"50\" x2=\"218\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"224\" y1=\"50\" x2=\"224\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"50\" x2=\"230\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"236\" y1=\"50\" x2=\"236\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"242\" y1=\"50\" x2=\"242\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"248\" y1=\"50\" x2=\"248\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"254\" y1=\"50\" x2=\"254\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"50\" x2=\"260\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"266\" y1=\"50\" x2=\"266\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"272\" y1=\"50\" x2=\"272\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"278\" y1=\"50\" x2=\"278\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"284\" y1=\"50\" x2=\"284\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"290\" y1=\"50\" x2=\"290\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"296\" y1=\"50\" x2=\"296\" y2=\"66\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><ellipse cx=\"40\" cy=\"30\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"90\" cy=\"30\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"140\" cy=\"30\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"190\" cy=\"30\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"240\" cy=\"30\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"290\" cy=\"30\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"10\" y=\"46\" font-size=\"15\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">P</text><path d=\"M30,100 Q65,86 100,100 Q65,114 30,100 Z\" fill=\"#fee2e2\" stroke=\"#b91c1c\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><ellipse cx=\"65\" cy=\"100\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M100,100 Q135,86 170,100 Q135,114 100,100 Z\" fill=\"#fee2e2\" stroke=\"#b91c1c\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><ellipse cx=\"135\" cy=\"100\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M170,100 Q205,86 240,100 Q205,114 170,100 Z\" fill=\"#fee2e2\" stroke=\"#b91c1c\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><ellipse cx=\"205\" cy=\"100\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M240,100 Q275,86 310,100 Q275,114 240,100 Z\" fill=\"#fee2e2\" stroke=\"#b91c1c\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><ellipse cx=\"275\" cy=\"100\" rx=\"5\" ry=\"2.5\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"10\" y=\"106\" font-size=\"15\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">Q</text><rect x=\"30\" y=\"150\" width=\"120\" height=\"16\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.2\"/><line x1=\"36\" y1=\"150\" x2=\"36\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"42\" y1=\"150\" x2=\"42\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"150\" x2=\"48\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"150\" x2=\"54\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"150\" x2=\"60\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"150\" x2=\"66\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"72\" y1=\"150\" x2=\"72\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"150\" x2=\"78\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"84\" y1=\"150\" x2=\"84\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"150\" x2=\"90\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"96\" y1=\"150\" x2=\"96\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"102\" y1=\"150\" x2=\"102\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"150\" x2=\"108\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"114\" y1=\"150\" x2=\"114\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"150\" x2=\"120\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"126\" y1=\"150\" x2=\"126\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"132\" y1=\"150\" x2=\"132\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"150\" x2=\"138\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"144\" y1=\"150\" x2=\"144\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><rect x=\"160\" y=\"150\" width=\"130\" height=\"16\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.2\"/><line x1=\"166\" y1=\"150\" x2=\"166\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"172\" y1=\"150\" x2=\"172\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"150\" x2=\"178\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"184\" y1=\"150\" x2=\"184\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"150\" x2=\"190\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"196\" y1=\"150\" x2=\"196\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"202\" y1=\"150\" x2=\"202\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"150\" x2=\"208\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"150\" x2=\"214\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"150\" x2=\"220\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"226\" y1=\"150\" x2=\"226\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"232\" y1=\"150\" x2=\"232\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"150\" x2=\"238\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"244\" y1=\"150\" x2=\"244\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"150\" x2=\"250\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"256\" y1=\"150\" x2=\"256\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"262\" y1=\"150\" x2=\"262\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"150\" x2=\"268\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"150\" x2=\"274\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"150\" x2=\"280\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"286\" y1=\"150\" x2=\"286\" y2=\"166\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><rect x=\"30\" y=\"180\" width=\"120\" height=\"16\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.2\"/><line x1=\"36\" y1=\"180\" x2=\"36\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"42\" y1=\"180\" x2=\"42\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"48\" y1=\"180\" x2=\"48\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"54\" y1=\"180\" x2=\"54\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"180\" x2=\"60\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"66\" y1=\"180\" x2=\"66\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"72\" y1=\"180\" x2=\"72\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"78\" y1=\"180\" x2=\"78\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"84\" y1=\"180\" x2=\"84\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"180\" x2=\"90\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"96\" y1=\"180\" x2=\"96\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"102\" y1=\"180\" x2=\"102\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"108\" y1=\"180\" x2=\"108\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"114\" y1=\"180\" x2=\"114\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"180\" x2=\"120\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"126\" y1=\"180\" x2=\"126\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"132\" y1=\"180\" x2=\"132\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"180\" x2=\"138\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"144\" y1=\"180\" x2=\"144\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><rect x=\"160\" y=\"180\" width=\"130\" height=\"16\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.2\"/><line x1=\"166\" y1=\"180\" x2=\"166\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"172\" y1=\"180\" x2=\"172\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"178\" y1=\"180\" x2=\"178\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"184\" y1=\"180\" x2=\"184\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"180\" x2=\"190\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"196\" y1=\"180\" x2=\"196\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"202\" y1=\"180\" x2=\"202\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"208\" y1=\"180\" x2=\"208\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"214\" y1=\"180\" x2=\"214\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"220\" y1=\"180\" x2=\"220\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"226\" y1=\"180\" x2=\"226\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"232\" y1=\"180\" x2=\"232\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"238\" y1=\"180\" x2=\"238\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"244\" y1=\"180\" x2=\"244\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"180\" x2=\"250\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"256\" y1=\"180\" x2=\"256\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"262\" y1=\"180\" x2=\"262\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"268\" y1=\"180\" x2=\"268\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"274\" y1=\"180\" x2=\"274\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"180\" x2=\"280\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><line x1=\"286\" y1=\"180\" x2=\"286\" y2=\"196\" stroke=\"#b91c1c\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><polygon points=\"140,166 150,166 170,180 160,180\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><line x1=\"150\" y1=\"150\" x2=\"150\" y2=\"166\" stroke=\"#7f1d1d\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"180\" x2=\"160\" y2=\"196\" stroke=\"#7f1d1d\" stroke-width=\"3\" stroke-linecap=\"round\"/><ellipse cx=\"90\" cy=\"158\" rx=\"5\" ry=\"3\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"225\" cy=\"158\" rx=\"5\" ry=\"3\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"90\" cy=\"188\" rx=\"5\" ry=\"3\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"225\" cy=\"188\" rx=\"5\" ry=\"3\" fill=\"#7f1d1d\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"10\" y=\"178\" font-size=\"15\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">R</text></svg>", "alt": "Three muscle tissues. P: long, unbranched striped fibres, each with many nuclei along its edge. Q: spindle-shaped cells without stripes, each with one nucleus. R: striped cells that branch and join their neighbours, each with one central nucleus."}
  },
  {
    id: "g9-sci-cell-b-q13",
    prompt: "Plastids that store starch are…",
    options: [
      { id: "a", text: "leucoplasts (amyloplasts)" },
      { id: "b", text: "chloroplasts" },
      { id: "c", text: "chromoplasts that always photosynthesise" },
      { id: "d", text: "lysosomes" }
    ],
    answerId: "a",
    explanation: "Leucoplasts/amyloplasts store starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q14",
    prompt: "Chromoplasts mainly…",
    options: [
      { id: "a", text: "store water" },
      { id: "b", text: "provide colours to flowers/fruits" },
      { id: "c", text: "make ATP only" },
      { id: "d", text: "form cell walls" }
    ],
    answerId: "b",
    explanation: "Chromoplasts hold pigments for colour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q15",
    prompt: "Which feature is absent in prokaryotes?",
    options: [
      { id: "a", text: "ribosomes" },
      { id: "b", text: "plasma membrane" },
      { id: "c", text: "membrane-bound organelles like mitochondria" },
      { id: "d", text: "DNA" }
    ],
    answerId: "c",
    explanation: "Prokaryotes lack membrane-bound organelles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q16",
    prompt: "Which labelled part of the plant cell shown is the cell wall?",
    options: [
      { id: "a", text: "Part P" },
      { id: "b", text: "Part Q" },
      { id: "c", text: "Part R" },
      { id: "d", text: "Part S" }
    ],
    answerId: "d",
    explanation: "S is the thick outermost layer that gives the plant cell its firm box shape: the cell wall. R, just inside it, is the thin plasma membrane, which lies within the wall rather than outside it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A box-shaped plant cell. P points to a small green oval body, Q to a large clear sac in the middle, R to a thin line just inside the outer edge, and S to the thick outermost layer.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"70\" y=\"40\" width=\"180\" height=\"140\" rx=\"4\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"7\"/><rect x=\"80\" y=\"50\" width=\"160\" height=\"120\" rx=\"3\" fill=\"none\" stroke=\"#65a30d\" stroke-width=\"1.5\"/><rect x=\"115\" y=\"70\" width=\"105\" height=\"85\" rx=\"14\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.4\"/><circle cx=\"96\" cy=\"110\" r=\"11\" fill=\"#a78bfa\" stroke=\"#5b21b6\" stroke-width=\"1.2\"/><ellipse cx=\"150\" cy=\"60\" rx=\"9\" ry=\"5\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1\"/><line x1=\"145\" y1=\"60\" x2=\"155\" y2=\"60\" stroke=\"#166534\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><ellipse cx=\"205\" cy=\"165\" rx=\"9\" ry=\"5\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1\"/><line x1=\"200\" y1=\"165\" x2=\"210\" y2=\"165\" stroke=\"#166534\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><ellipse cx=\"232\" cy=\"90\" rx=\"9\" ry=\"5\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1\"/><line x1=\"227\" y1=\"90\" x2=\"237\" y2=\"90\" stroke=\"#166534\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"232\" y1=\"90\" x2=\"290\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"232\" cy=\"90\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"294\" y=\"65\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">P</text><line x1=\"170\" y1=\"120\" x2=\"290\" y2=\"125\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"170\" cy=\"120\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"294\" y=\"130\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">Q</text><line x1=\"80\" y1=\"160\" x2=\"30\" y2=\"150\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"80\" cy=\"160\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"26\" y=\"155\" font-size=\"16\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">R</text><line x1=\"70\" y1=\"60\" x2=\"30\" y2=\"40\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"70\" cy=\"60\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"26\" y=\"45\" font-size=\"16\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">S</text></svg>", "alt": "A box-shaped plant cell. P points to a small green oval body, Q to a large clear sac in the middle, R to a thin line just inside the outer edge, and S to the thick outermost layer."}
  },
  {
    id: "g9-sci-cell-b-q17",
    prompt: "Tissue that covers the body and protects underlying parts is…",
    options: [
      { id: "a", text: "epithelial tissue" },
      { id: "b", text: "xylem" },
      { id: "c", text: "phloem" },
      { id: "d", text: "meristem only deep inside" }
    ],
    answerId: "a",
    explanation: "Epithelium covers and protects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q18",
    prompt: "Cartilage is a type of…",
    options: [
      { id: "a", text: "epithelial tissue" },
      { id: "b", text: "connective tissue" },
      { id: "c", text: "nervous tissue" },
      { id: "d", text: "meristem" }
    ],
    answerId: "b",
    explanation: "Cartilage is connective tissue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q19",
    prompt: "Who observed living cells (e.g., protozoa) with better microscopes after Hooke?",
    options: [
      { id: "a", text: "Dalton" },
      { id: "b", text: "Bohr" },
      { id: "c", text: "Leeuwenhoek" },
      { id: "d", text: "Faraday" }
    ],
    answerId: "c",
    explanation: "Antonie van Leeuwenhoek observed living microbes/cells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q20",
    prompt: "Cell theory states that…",
    options: [
      { id: "a", text: "rocks are made of cells" },
      { id: "b", text: "energy cannot be created" },
      { id: "c", text: "atoms are indivisible" },
      { id: "d", text: "all living beings are made of cells / cell products" }
    ],
    answerId: "d",
    explanation: "Cell theory concerns organisation of living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q21",
    prompt: "Compare the vacuoles in the two cells shown. Which statement is correct?",
    options: [
      { id: "a", text: "Vacuoles in the animal cell are smaller than the central vacuole of the plant cell" },
      { id: "b", text: "Vacuoles in the animal cell are larger than in the plant cell" },
      { id: "c", text: "The animal cell's vacuoles are made of cellulose" },
      { id: "d", text: "Neither cell has a vacuole" }
    ],
    answerId: "a",
    explanation: "The plant cell has one large central vacuole filling most of the cell, while the animal cell has only a few small vacuoles. Vacuoles are not made of cellulose: cellulose builds the plant cell wall, not the vacuole.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two cells side by side. The plant cell is box-shaped with a thick wall and one large clear vacuole filling most of it. The animal cell is rounded with a nucleus and only a few tiny clear vacuoles.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"15\" y=\"40\" width=\"135\" height=\"130\" rx=\"4\" fill=\"#ecfccb\" stroke=\"#3f6212\" stroke-width=\"5\"/><rect x=\"40\" y=\"55\" width=\"98\" height=\"100\" rx=\"14\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1.4\"/><circle cx=\"28\" cy=\"105\" r=\"8\" fill=\"#a78bfa\" stroke=\"#5b21b6\" stroke-width=\"1\"/><text x=\"82\" y=\"195\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">plant cell</text><ellipse cx=\"240\" cy=\"105\" rx=\"70\" ry=\"62\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/><circle cx=\"240\" cy=\"105\" r=\"18\" fill=\"#ddd6fe\" stroke=\"#5b21b6\" stroke-width=\"1.5\"/><circle cx=\"200\" cy=\"75\" r=\"6\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/><circle cx=\"282\" cy=\"128\" r=\"5\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/><circle cx=\"210\" cy=\"140\" r=\"4\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"1\"/><text x=\"240\" y=\"195\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">animal cell</text></svg>", "alt": "Two cells side by side. The plant cell is box-shaped with a thick wall and one large clear vacuole filling most of it. The animal cell is rounded with a nucleus and only a few tiny clear vacuoles."}
  },
  {
    id: "g9-sci-cell-b-q22",
    prompt: "Phloem fibres are…",
    options: [
      { id: "a", text: "always living sieve tubes" },
      { id: "b", text: "supportive components associated with phloem" },
      { id: "c", text: "blood cells" },
      { id: "d", text: "nerve endings" }
    ],
    answerId: "b",
    explanation: "Phloem includes fibres that help support.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q23",
    prompt: "A multicellular organism…",
    options: [
      { id: "a", text: "has only one cell" },
      { id: "b", text: "cannot have tissues" },
      { id: "c", text: "is made of many cells" },
      { id: "d", text: "never grows" }
    ],
    answerId: "c",
    explanation: "Multi- = many cells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-cell-b-q24",
    prompt: "The drawing shows a close-up of an organelle from a green leaf cell, with stacks of discs inside it. Which pigment do the discs contain?",
    options: [
      { id: "a", text: "Haemoglobin" },
      { id: "b", text: "Melanin" },
      { id: "c", text: "Keratin" },
      { id: "d", text: "Chlorophyll" }
    ],
    answerId: "d",
    explanation: "This is a chloroplast: its stacks of discs (grana) contain chlorophyll, the green pigment that traps light energy for photosynthesis. Haemoglobin is the red pigment in blood that carries oxygen; it is not found in plant cells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A close-up of an oval organelle from a leaf cell, with a double outer boundary and several stacks of flat green discs joined by thin connecting strands.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><ellipse cx=\"160\" cy=\"110\" rx=\"135\" ry=\"72\" fill=\"#dcfce7\" stroke=\"#166534\" stroke-width=\"2.5\"/><ellipse cx=\"160\" cy=\"110\" rx=\"127\" ry=\"65\" fill=\"#f0fdf4\" stroke=\"#166534\" stroke-width=\"1.5\"/><rect x=\"66\" y=\"88\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"66\" y=\"97\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"66\" y=\"106\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"66\" y=\"115\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"66\" y=\"124\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"116\" y=\"68\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"116\" y=\"77\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"116\" y=\"86\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"116\" y=\"95\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"116\" y=\"104\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"166\" y=\"103\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"166\" y=\"112\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"166\" y=\"121\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"166\" y=\"130\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"166\" y=\"139\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"216\" y=\"78\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"216\" y=\"87\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"216\" y=\"96\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"216\" y=\"105\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><rect x=\"216\" y=\"114\" width=\"28\" height=\"7\" rx=\"3\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"0.8\"/><line x1=\"94\" y1=\"106\" x2=\"116\" y2=\"92\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"144\" y1=\"98\" x2=\"166\" y2=\"122\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"194\" y1=\"120\" x2=\"216\" y2=\"104\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>", "alt": "A close-up of an oval organelle from a leaf cell, with a double outer boundary and several stacks of flat green discs joined by thin connecting strands."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🔬",
    title: "Cells and tissues",
    body: ["Cells build tissues; organelles divide the labour.", "Plant and animal cells share much — and differ in walls and chloroplasts.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "plant",
    speak: "Cell organelles and an introduction to tissues.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Nucleus", reveal: "Control centre with genetic material", emoji: "🧬" },
      { label: "Mitochondria", reveal: "Energy release", emoji: "⚡" },
      { label: "Plant extras", reveal: "Cell wall, chloroplasts, large vacuole", emoji: "🌿" },
      { label: "Tissues", reveal: "Similar cells with a shared job", emoji: "🧱" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Plant vs animal cell",
    visual: "plant",
    speak: "Both have membrane, cytoplasm and nucleus; plants add wall and chloroplasts.",
    steps: ["Start with shared parts", "Add cell wall outside membrane", "Add chloroplasts for photosynthesis", "Note large central vacuole"],
    punchline: "Same toolkit, different extras.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Which organelle is for photosynthesis?",
    options: [
        { id: "a", text: "mitochondrion" },
        { id: "b", text: "chloroplast" },
        { id: "c", text: "ribosome" },
        { id: "d", text: "lysosome" }
    ],
    answerId: "b",
    why: "Chloroplasts contain chlorophyll for photosynthesis.",
    visual: "plant",
    speak: "Which organelle is for photosynthesis?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Cell explorer!",
    bullets: ["Cell → tissue → organ", "Match organelle to job", "Meristems grow; permanent tissues specialise", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Cell explorer! You are ready for the practice sets.",
  },
];

export const g9ScienceCell: ChapterDef = {
  id: "cell-tissues",
  title: "Cell & Tissues",
  emoji: "🔬",
  blurb: "Organelles & tissue types intro",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "cells-basics",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "cells-basics",
      questions: SET_B,
    },
  ],
  paperTopics: ["cells-basics", "living-things"],
};

export const g9ScienceCellQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
