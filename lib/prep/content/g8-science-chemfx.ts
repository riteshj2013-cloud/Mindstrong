import type { ChapterDef, PrepQuestion } from "../types";

/** Chemical Effects of Current - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-chemfx-a-q01",
    prompt: "A liquid that allows electric current to pass through it easily is called a \u2014",
    options: [
      { id: "a", text: "Good conductor (conducting liquid)" },
      { id: "b", text: "Poor conductor" },
      { id: "c", text: "Magnetic insulator only" },
      { id: "d", text: "Non-electrolyte always" }
    ],
    answerId: "a",
    explanation: "Liquids that let current pass readily are good conductors of electricity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q02",
    prompt: "Distilled water is a \u2014",
    options: [
      { id: "a", text: "Very good conductor like copper wire" },
      { id: "b", text: "Poor conductor of electricity" },
      { id: "c", text: "Source of unlimited free ions always" },
      { id: "d", text: "Type of metal" }
    ],
    answerId: "b",
    explanation: "Pure distilled water has very few ions, so it conducts poorly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q03",
    prompt: "Adding common salt to distilled water \u2014",
    options: [
      { id: "a", text: "Makes it a perfect insulator" },
      { id: "b", text: "Removes all charge forever" },
      { id: "c", text: "Makes it conduct better" },
      { id: "d", text: "Turns it into oil" }
    ],
    answerId: "c",
    explanation: "Salt provides ions that carry current, so the solution conducts much better.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q04",
    prompt: "Lemon juice and vinegar usually \u2014",
    options: [
      { id: "a", text: "Never contain ions" },
      { id: "b", text: "Are better insulators than oil for that reason alone" },
      { id: "c", text: "Block all current like rubber" },
      { id: "d", text: "Conduct electricity because of ions from acids" }
    ],
    answerId: "d",
    explanation: "Acids in these liquids release ions that allow current to pass.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q05",
    prompt: "Which liquid is generally a poor conductor of electricity?",
    options: [
      { id: "a", text: "Vegetable oil" },
      { id: "b", text: "Salt solution" },
      { id: "c", text: "Lemon juice" },
      { id: "d", text: "Copper sulphate solution" }
    ],
    answerId: "a",
    explanation: "Oils do not provide free ions the way salt or acid solutions do.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q06",
    prompt: "In a conducting salt solution, electric current is carried mainly by \u2014",
    options: [
      { id: "a", text: "Neutrons only" },
      { id: "b", text: "Ions" },
      { id: "c", text: "Uncharged sand grains" },
      { id: "d", text: "Photons of light only" }
    ],
    answerId: "b",
    explanation: "Positive and negative ions move toward opposite electrodes and carry the current.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q07",
    prompt: "A liquid that conducts electricity due to the presence of ions is called an \u2014",
    options: [
      { id: "a", text: "Insulator" },
      { id: "b", text: "Electromagnet" },
      { id: "c", text: "Electrolyte" },
      { id: "d", text: "Alloy" }
    ],
    answerId: "c",
    explanation: "Electrolytes contain ions that move when a potential difference is applied.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q08",
    prompt: "In the set-up shown, current passes through copper sulphate solution between two copper electrodes. On which electrode is copper metal deposited?",
    options: [
      { id: "a", text: "On electrode 2 (+)" },
      { id: "b", text: "On both electrodes equally" },
      { id: "c", text: "On neither; a gas forms instead" },
      { id: "d", text: "On electrode 1 (\u2212)" }
    ],
    answerId: "d",
    explanation: "Copper ions in the solution carry a positive charge, so they are attracted to electrode 1, joined to the negative terminal (the cathode), where they deposit as copper metal. Electrode 2, joined to the positive terminal, is the anode: it slowly loses copper into the solution instead.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A beaker of blue copper sulphate solution with two copper electrodes joined to a battery. Electrode 1 on the left is joined to the negative terminal; electrode 2 on the right is joined to the positive terminal.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"92\" y=\"115\" width=\"136\" height=\"78\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M90,90 L90,189 Q90,195 96,195 L224,195 Q230,195 230,189 L230,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"120.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"190.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"125,70 125,30 138,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"195,70 195,30 182,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"138.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"146.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"174.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><text x=\"117\" y=\"64\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">electrode 1</text><text x=\"203\" y=\"64\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">electrode 2</text><text x=\"160\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">copper sulphate solution</text></svg>", "alt": "A beaker of blue copper sulphate solution with two copper electrodes joined to a battery. Electrode 1 on the left is joined to the negative terminal; electrode 2 on the right is joined to the positive terminal."}
  },
  {
    id: "g8-sci-chemfx-a-q09",
    prompt: "The electrode connected to the negative terminal of the battery is the \u2014",
    options: [
      { id: "a", text: "Cathode" },
      { id: "b", text: "Anode" },
      { id: "c", text: "Fuse" },
      { id: "d", text: "Resistor only" }
    ],
    answerId: "a",
    explanation: "By definition in these experiments, the cathode is the negative electrode.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q10",
    prompt: "The electrode connected to the positive terminal of the battery is the \u2014",
    options: [
      { id: "a", text: "Cathode" },
      { id: "b", text: "Anode" },
      { id: "c", text: "Insulator" },
      { id: "d", text: "LED only" }
    ],
    answerId: "b",
    explanation: "The anode is the positive electrode in the electrolytic cell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q11",
    prompt: "Electroplating is the process of \u2014",
    options: [
      { id: "a", text: "Painting wood with oil" },
      { id: "b", text: "Melting plastic only" },
      { id: "c", text: "Depositing a thin layer of one metal onto another using electric current" },
      { id: "d", text: "Measuring temperature" }
    ],
    answerId: "c",
    explanation: "Electroplating uses electrolysis to coat an object with a thin metal layer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q12",
    prompt: "In electroplating a spoon with silver, the spoon should be made the \u2014",
    options: [
      { id: "a", text: "Anode" },
      { id: "b", text: "Battery acid" },
      { id: "c", text: "Open switch" },
      { id: "d", text: "Cathode" }
    ],
    answerId: "d",
    explanation: "The object to be coated is the cathode so metal ions deposit on it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q13",
    prompt: "Chromium plating on car parts and taps is done mainly to \u2014",
    options: [
      { id: "a", text: "Improve appearance and resist corrosion" },
      { id: "b", text: "Make them absorb more rust" },
      { id: "c", text: "Stop all electricity in cities" },
      { id: "d", text: "Turn steel into wood" }
    ],
    answerId: "a",
    explanation: "Chrome layers look shiny and protect the metal underneath from corrosion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q14",
    prompt: "Tin cans used for food are often coated with tin to \u2014",
    options: [
      { id: "a", text: "Make iron rust faster" },
      { id: "b", text: "Prevent the food from reacting with iron and to resist corrosion" },
      { id: "c", text: "Increase the can's magnetism only" },
      { id: "d", text: "Make the can conduct no heat" }
    ],
    answerId: "b",
    explanation: "Tin plating protects the iron and helps keep food safer from metal reactions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q15",
    prompt: "The same lemon juice is tested with two testers, as shown. Why does only tester 2 light up?",
    options: [
      { id: "a", text: "The LED needs a huge current" },
      { id: "b", text: "The LED works only in a vacuum" },
      { id: "c", text: "The LED glows even with a small current" },
      { id: "d", text: "The LED makes salt in the juice" }
    ],
    answerId: "c",
    explanation: "Lemon juice is a weak conductor, so only a small current flows. That is too little to heat the filament of the torch bulb, but enough to make the LED glow. The LED does not need a huge current; if it did, it would stay dark just like the bulb.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two testers dipped in the same lemon juice. Tester 1 uses a torch bulb, which stays dark. Tester 2 uses an LED, which glows.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"22\" y=\"115\" width=\"116\" height=\"78\" fill=\"#fef08a\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M20,90 L20,189 Q20,195 26,195 L134,195 Q140,195 140,189 L140,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"52.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"102.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"55,70 55,30 58,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"105,70 105,30 102,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"58.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"66.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"94.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><circle cx=\"80.0\" cy=\"62\" r=\"10\" fill=\"#f1f5f9\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"80\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">tester 1: torch bulb</text><rect x=\"182\" y=\"115\" width=\"116\" height=\"78\" fill=\"#fef08a\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M180,90 L180,189 Q180,195 186,195 L294,195 Q300,195 300,189 L300,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"212.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"262.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"215,70 215,30 218,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"265,70 265,30 262,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"218.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"226.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"254.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><polygon points=\"233,70 247,70 247,58 240,50 233,58\" fill=\"#f87171\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"252.0\" y1=\"58\" x2=\"258.0\" y2=\"58\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"228.0\" y1=\"58\" x2=\"222.0\" y2=\"58\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"240.0\" y1=\"46\" x2=\"240.0\" y2=\"40\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"248.4\" y1=\"49.6\" x2=\"252.6\" y2=\"45.4\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"231.6\" y1=\"49.6\" x2=\"227.4\" y2=\"45.4\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"240\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">tester 2: LED</text></svg>", "alt": "Two testers dipped in the same lemon juice. Tester 1 uses a torch bulb, which stays dark. Tester 2 uses an LED, which glows."}
  },
  {
    id: "g8-sci-chemfx-a-q16",
    prompt: "A compass sits close to a wire in a circuit. The pictures show the needle with the switch open and with it closed. Why does the needle turn when the switch is closed?",
    options: [
      { id: "a", text: "The current gives off a smell" },
      { id: "b", text: "The compass picks up the sound of the current" },
      { id: "c", text: "The wire becomes a north pole for ever" },
      { id: "d", text: "The current produces a magnetic effect that deflects the needle" }
    ],
    answerId: "d",
    explanation: "Closing the switch lets current flow, and a wire carrying a current has a magnetic effect around it, which pushes the compass needle aside. The wire does not become a magnet for ever: when the switch is opened again, the needle swings back to north.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two identical circuits, each a battery, a wire loop and a switch, with a compass lying under one wire of the loop. Switch open: the compass needle points to N. Switch closed: the needle has swung well away from N.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polyline points=\"75,40 40,40 40,170 70,170\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"105,40 140,40 140,170 110,170\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"72\" y=\"30\" width=\"36\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"170\" x2=\"104\" y2=\"154\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"70\" cy=\"170\" r=\"3\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"170\" r=\"3\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"40\" cy=\"105\" r=\"28\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><text x=\"40\" y=\"74\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">N</text><polygon points=\"40,83 36,105 44,105\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1\" stroke-linejoin=\"round\"/><polygon points=\"40,127 36,105 44,105\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"40\" y1=\"70\" x2=\"40\" y2=\"140\" stroke=\"#b45309\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><text x=\"90\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">switch open</text><polyline points=\"235,40 200,40 200,170 230,170\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"265,40 300,40 300,170 270,170\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"232\" y=\"30\" width=\"36\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"170\" x2=\"270\" y2=\"170\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"230\" cy=\"170\" r=\"3\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"270\" cy=\"170\" r=\"3\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"200\" cy=\"105\" r=\"28\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><text x=\"200\" y=\"74\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">N</text><polygon points=\"219.425,94.6716 198.122,101.468 201.878,108.532\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1\" stroke-linejoin=\"round\"/><polygon points=\"180.575,115.328 198.122,101.468 201.878,108.532\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"200\" y1=\"70\" x2=\"200\" y2=\"140\" stroke=\"#b45309\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><text x=\"250\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">switch closed</text></svg>", "alt": "Two identical circuits, each a battery, a wire loop and a switch, with a compass lying under one wire of the loop. Switch open: the compass needle points to N. Switch closed: the needle has swung well away from N."}
  },
  {
    id: "g8-sci-chemfx-a-q17",
    prompt: "Which change is a chemical effect of electric current?",
    options: [
      { id: "a", text: "Metal depositing on an electrode from a salt solution" },
      { id: "b", text: "A bulb filament getting hot only as a physical glow with no deposit" },
      { id: "c", text: "A magnet attracting iron filings in dry air only" },
      { id: "d", text: "A mirror reflecting light" }
    ],
    answerId: "a",
    explanation: "Deposition of metal from solution is a chemical change caused by current.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q18",
    prompt: "Current is passed through acidified water, as shown. What do the bubbles at the electrodes show?",
    options: [
      { id: "a", text: "No chemical change has taken place" },
      { id: "b", text: "A chemical change has made new gases from the liquid" },
      { id: "c", text: "The liquid has become a magnet" },
      { id: "d", text: "The water is simply boiling" }
    ],
    answerId: "b",
    explanation: "New gases (hydrogen and oxygen) are forming at the electrodes, which shows that the current has caused a chemical change. The water is not boiling: the thermometer shows it is still at 25 \u00b0C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A beaker of acidified water with two carbon electrodes joined to a battery. Bubbles of gas rise from both electrodes. A thermometer in the water reads 25 degrees Celsius.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"62\" y=\"115\" width=\"146\" height=\"78\" fill=\"#e0f2fe\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M60,90 L60,189 Q60,195 66,195 L204,195 Q210,195 210,189 L210,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"91.0\" y=\"70\" width=\"8\" height=\"110\" fill=\"#374151\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"171.0\" y=\"70\" width=\"8\" height=\"110\" fill=\"#374151\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"95,70 95,30 113,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"175,70 175,30 157,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"113.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"121.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"149.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><circle cx=\"89\" cy=\"160\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"101\" cy=\"148\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"89\" cy=\"136\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"101\" cy=\"124\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"89\" cy=\"112\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"169\" cy=\"160\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"181\" cy=\"148\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"169\" cy=\"136\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"181\" cy=\"124\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"169\" cy=\"112\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><rect x=\"131\" y=\"95\" width=\"8\" height=\"80\" rx=\"4\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><circle cx=\"135\" cy=\"179\" r=\"7\" fill=\"#dc2626\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"133\" y=\"145\" width=\"4\" height=\"32\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"135\" y=\"87\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">25 \u00b0C</text><text x=\"135\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">acidified water</text></svg>", "alt": "A beaker of acidified water with two carbon electrodes joined to a battery. Bubbles of gas rise from both electrodes. A thermometer in the water reads 25 degrees Celsius."}
  },
  {
    id: "g8-sci-chemfx-a-q19",
    prompt: "The same tester is dipped into two kinds of water, as shown. Why does it glow in beaker 1 but not in beaker 2?",
    options: [
      { id: "a", text: "Tap water is pure water with no ions" },
      { id: "b", text: "Tap water is an oil mixture" },
      { id: "c", text: "Tap water contains dissolved salts that provide ions" },
      { id: "d", text: "Tap water has no oxygen atoms" }
    ],
    answerId: "c",
    explanation: "Tap water has small amounts of dissolved salts and minerals, and their ions carry the current, so the LED glows. Distilled water is almost pure and has very few ions, so it hardly conducts. Pure water with no ions describes the distilled water in beaker 2, not tap water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two beakers with the same LED tester. Beaker 1 holds tap water and the LED glows. Beaker 2 holds distilled water and the LED stays dark.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"22\" y=\"115\" width=\"116\" height=\"78\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M20,90 L20,189 Q20,195 26,195 L134,195 Q140,195 140,189 L140,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"52.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"102.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"55,70 55,30 58,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"105,70 105,30 102,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"58.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"66.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"94.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><polygon points=\"73,70 87,70 87,58 80,50 73,58\" fill=\"#f87171\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"92.0\" y1=\"58\" x2=\"98.0\" y2=\"58\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"68.0\" y1=\"58\" x2=\"62.0\" y2=\"58\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"80.0\" y1=\"46\" x2=\"80.0\" y2=\"40\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"88.4\" y1=\"49.6\" x2=\"92.6\" y2=\"45.4\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"71.6\" y1=\"49.6\" x2=\"67.4\" y2=\"45.4\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"80\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">beaker 1: tap water</text><rect x=\"182\" y=\"115\" width=\"116\" height=\"78\" fill=\"#f0f9ff\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M180,90 L180,189 Q180,195 186,195 L294,195 Q300,195 300,189 L300,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"212.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"262.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"215,70 215,30 218,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"265,70 265,30 262,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"218.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"226.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"254.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><polygon points=\"233,70 247,70 247,58 240,50 233,58\" fill=\"#f1f5f9\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"240\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">beaker 2: distilled water</text></svg>", "alt": "Two beakers with the same LED tester. Beaker 1 holds tap water and the LED glows. Beaker 2 holds distilled water and the LED stays dark."}
  },
  {
    id: "g8-sci-chemfx-a-q20",
    prompt: "Honey is generally a \u2014",
    options: [
      { id: "a", text: "Good metallic conductor like copper" },
      { id: "b", text: "Type of electrode metal" },
      { id: "c", text: "Source of free electrons like a battery" },
      { id: "d", text: "Poor conductor of electricity" }
    ],
    answerId: "d",
    explanation: "Honey does not provide mobile ions the way salt water does, so it conducts poorly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q21",
    prompt: "Why are carbon rods often used as electrodes in school electrolysis of solutions?",
    options: [
      { id: "a", text: "They are conducting and relatively inert in many solutions" },
      { id: "b", text: "They dissolve into sugar instantly" },
      { id: "c", text: "They are perfect insulators" },
      { id: "d", text: "They produce only music" }
    ],
    answerId: "a",
    explanation: "Carbon (graphite) conducts and does not react as readily as some metals in simple demos.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q22",
    prompt: "The picture shows copper being refined using electricity. What does this process achieve?",
    options: [
      { id: "a", text: "It makes the copper more impure" },
      { id: "b", text: "It gives purer copper, deposited on the thin sheet (cathode)" },
      { id: "c", text: "It turns copper into plastic" },
      { id: "d", text: "It removes all electrons from the atoms" }
    ],
    answerId: "b",
    explanation: "The thick block of impure copper, joined to the positive terminal, slowly dissolves, and pure copper is deposited on the thin sheet joined to the negative terminal; the impurities fall to the bottom as sludge. It does not make the copper more impure: the impurities are left behind in the sludge.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A tank of copper sulphate solution. On the left, a thin sheet of copper joined to the negative terminal. On the right, a thick block of impure copper joined to the positive terminal, with sludge collecting beneath it.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"72\" y=\"115\" width=\"176\" height=\"78\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M70,90 L70,189 Q70,195 76,195 L244,195 Q250,195 250,189 L250,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"102.5\" y=\"70\" width=\"5\" height=\"110\" fill=\"#f59e0b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"202.0\" y=\"70\" width=\"26\" height=\"110\" fill=\"#a16207\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"105,70 105,30 138,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"215,70 215,30 182,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"138.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"146.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"174.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><text x=\"97\" y=\"64\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">thin sheet</text><text x=\"223\" y=\"64\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">thick block</text><circle cx=\"205\" cy=\"190\" r=\"3\" fill=\"#57534e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"214\" cy=\"187\" r=\"3\" fill=\"#57534e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"223\" cy=\"190\" r=\"3\" fill=\"#57534e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"232\" cy=\"187\" r=\"3\" fill=\"#57534e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"241\" cy=\"190\" r=\"3\" fill=\"#57534e\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"160\" y=\"214\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">copper sulphate solution, sludge under the block</text></svg>", "alt": "A tank of copper sulphate solution. On the left, a thin sheet of copper joined to the negative terminal. On the right, a thick block of impure copper joined to the positive terminal, with sludge collecting beneath it."}
  },
  {
    id: "g8-sci-chemfx-a-q23",
    prompt: "If the LED in a liquid tester does not glow and the compass shows no deflection, the liquid is likely \u2014",
    options: [
      { id: "a", text: "A good electrolyte" },
      { id: "b", text: "Pure copper metal" },
      { id: "c", text: "A poor conductor under the test conditions" },
      { id: "d", text: "A strong acid mist in air only" }
    ],
    answerId: "c",
    explanation: "No signs of current mean the liquid is not conducting well in that circuit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q24",
    prompt: "Safety rule for school tests of liquids with batteries: \u2014",
    options: [
      { id: "a", text: "Use mains 230 V sockets dipped in the beaker" },
      { id: "b", text: "Taste every solution" },
      { id: "c", text: "Short the battery terminals with wet hands for fun" },
      { id: "d", text: "Use a low-voltage battery pack and keep setups away from mains water hazards" }
    ],
    answerId: "d",
    explanation: "Low voltage and dry, careful handling prevent shocks and damage.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-chemfx-b-q01",
    prompt: "Which solution is the best conductor among these typical school samples?",
    options: [
      { id: "a", text: "Strong salt solution" },
      { id: "b", text: "Distilled water" },
      { id: "c", text: "Pure vegetable oil" },
      { id: "d", text: "Dry air" }
    ],
    answerId: "a",
    explanation: "A strong salt solution has many ions and conducts well compared with distilled water or oil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q02",
    prompt: "Copper sulphate solution contains positive copper ions (Cu2+). In the set-up shown, towards which electrode do these ions move?",
    options: [
      { id: "a", text: "Electrode Q, the anode" },
      { id: "b", text: "Electrode P, the cathode" },
      { id: "c", text: "Neither electrode" },
      { id: "d", text: "The beaker wall" }
    ],
    answerId: "b",
    explanation: "The Cu2+ ions are positive, so they move towards electrode P, which is joined to the negative terminal (the cathode). Electrode Q is joined to the positive terminal, and like charges repel, so positive ions move away from it, not towards it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A beaker of copper sulphate solution with two electrodes, P and Q, joined to a battery. P is joined to the negative terminal and Q to the positive terminal.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"92\" y=\"115\" width=\"136\" height=\"78\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M90,90 L90,189 Q90,195 96,195 L224,195 Q230,195 230,189 L230,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"120.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"190.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"125,70 125,30 138,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"195,70 195,30 182,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"138.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"146.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"174.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><text x=\"117\" y=\"64\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"203\" y=\"64\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"160\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">copper sulphate solution</text></svg>", "alt": "A beaker of copper sulphate solution with two electrodes, P and Q, joined to a battery. P is joined to the negative terminal and Q to the positive terminal."}
  },
  {
    id: "g8-sci-chemfx-b-q03",
    prompt: "Negatively charged ions in an electrolyte move toward the \u2014",
    options: [
      { id: "a", text: "Cathode" },
      { id: "b", text: "Centre of the Earth only" },
      { id: "c", text: "Anode" },
      { id: "d", text: "LED bulb glass" }
    ],
    answerId: "c",
    explanation: "Negative ions (anions) are attracted to the positive anode.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q04",
    prompt: "Electroplating requires \u2014",
    options: [
      { id: "a", text: "No electrolyte and no battery" },
      { id: "b", text: "Only a wooden spoon" },
      { id: "c", text: "Vacuum and sunlight only" },
      { id: "d", text: "An electrolyte, electrodes, and a source of current" }
    ],
    answerId: "d",
    explanation: "You need a conducting solution, electrodes, and current for plating.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q05",
    prompt: "Priya wants to nickel-plate the iron key using the set-up shown. Which arrangement is correct?",
    options: [
      { id: "a", text: "Key on clip X (\u2212), nickel plate on clip Y (+)" },
      { id: "b", text: "Key on clip Y (+), nickel plate on clip X (\u2212)" },
      { id: "c", text: "Key in the solution, not joined to any clip" },
      { id: "d", text: "Key and nickel plate both on clip Y (+)" }
    ],
    answerId: "a",
    explanation: "The object to be plated must be the cathode, joined to the negative terminal, so the key goes on clip X; nickel ions from the solution then deposit on it. The nickel plate goes on clip Y and slowly dissolves to replace the ions. With the key on clip Y (+), the key itself would be eaten away instead of being coated.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A battery with two wires ending in clips: clip X on the negative terminal and clip Y on the positive terminal. Beside it are an iron key, a nickel plate and a beaker of nickel sulphate solution.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"130\" y=\"20\" width=\"60\" height=\"24\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"142\" y=\"37\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"178\" y=\"37\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><polyline points=\"130,32 70,32 70,70\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"190,32 250,32 250,70\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"63\" y=\"70\" width=\"14\" height=\"10\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"243\" y=\"70\" width=\"14\" height=\"10\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"1\"/><text x=\"56\" y=\"80\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">clip X</text><text x=\"264\" y=\"80\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">clip Y</text><rect x=\"112\" y=\"135\" width=\"96\" height=\"63\" fill=\"#86efac\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M110,110 L110,194 Q110,200 116,200 L204,200 Q210,200 210,194 L210,110\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">nickel sulphate solution</text><circle cx=\"40\" cy=\"150\" r=\"10\" fill=\"#ffffff\" stroke=\"#6b7280\" stroke-width=\"4\"/><rect x=\"48\" y=\"147\" width=\"30\" height=\"6\" fill=\"#9ca3af\" stroke=\"#6b7280\" stroke-width=\"1\"/><rect x=\"68\" y=\"153\" width=\"4\" height=\"6\" fill=\"#9ca3af\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"50\" y=\"180\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">iron key</text><rect x=\"250\" y=\"130\" width=\"30\" height=\"50\" fill=\"#d1d5db\" stroke=\"#6b7280\" stroke-width=\"1.5\"/><text x=\"265\" y=\"196\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">nickel plate</text></svg>", "alt": "A battery with two wires ending in clips: clip X on the negative terminal and clip Y on the positive terminal. Beside it are an iron key, a nickel plate and a beaker of nickel sulphate solution."}
  },
  {
    id: "g8-sci-chemfx-b-q06",
    prompt: "One reason spoons are electroplated with silver or chromium is to \u2014",
    options: [
      { id: "a", text: "Make them dissolve faster in tea" },
      { id: "b", text: "Give a shiny finish and resist tarnish or corrosion" },
      { id: "c", text: "Stop them from ever conducting heat" },
      { id: "d", text: "Turn them into rubber" }
    ],
    answerId: "b",
    explanation: "Plating improves looks and surface protection.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q07",
    prompt: "A compass needle deflects near a wire in a closed liquid-tester circuit. This shows \u2014",
    options: [
      { id: "a", text: "No current flows" },
      { id: "b", text: "Only heat exists with zero current" },
      { id: "c", text: "A current is present (magnetic effect of current)" },
      { id: "d", text: "The liquid is pure oil for sure" }
    ],
    answerId: "c",
    explanation: "Deflection means the wire carries current and has a magnetic field.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q08",
    prompt: "LEDs are polarised devices, so in a tester \u2014",
    options: [
      { id: "a", text: "They never need any current" },
      { id: "b", text: "They work as perfect insulators" },
      { id: "c", text: "They only detect sound" },
      { id: "d", text: "Direction of connection can matter for lighting" }
    ],
    answerId: "d",
    explanation: "An LED lights when connected with the correct polarity and sufficient current.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q09",
    prompt: "Which is a chemical effect rather than only a heating effect of current?",
    options: [
      { id: "a", text: "Gas bubbles forming at electrodes in acidified water" },
      { id: "b", text: "A wire becoming warm" },
      { id: "c", text: "A room heater glowing" },
      { id: "d", text: "Friction from rubbing hands" }
    ],
    answerId: "a",
    explanation: "New gas substances forming means a chemical change from electrolysis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q10",
    prompt: "Poor conductors among liquids are useful when we want to \u2014",
    options: [
      { id: "a", text: "Carry huge currents through oil intentionally in every wire" },
      { id: "b", text: "Insulate and avoid unwanted current paths" },
      { id: "c", text: "Replace all copper cables with honey" },
      { id: "d", text: "Electroplate faster than metals" }
    ],
    answerId: "b",
    explanation: "Insulating liquids help prevent leaks and shocks where conduction is unwanted.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q11",
    prompt: "Boiling water is still a poorer conductor than salt solution mainly because \u2014",
    options: [
      { id: "a", text: "Heat destroys all protons" },
      { id: "b", text: "Boiling water becomes a metal" },
      { id: "c", text: "Salt solution has far more mobile ions than pure water" },
      { id: "d", text: "Salt removes gravity" }
    ],
    answerId: "c",
    explanation: "Ions from salt dominate conduction compared with the few ions in water alone.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q12",
    prompt: "During electroplating, the metal object that receives the coating loses \u2014",
    options: [
      { id: "a", text: "Its place as cathode if plating works" },
      { id: "b", text: "All of its mass always to the anode instantly" },
      { id: "c", text: "Its solid shape and becomes gas" },
      { id: "d", text: "Nothing essential if ions deposit on it \u2014 it gains a metal layer" }
    ],
    answerId: "d",
    explanation: "Successful plating adds a thin metal layer onto the cathode object.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q13",
    prompt: "Industrial chromium plating baths must be handled carefully because \u2014",
    options: [
      { id: "a", text: "The chemicals can be hazardous even though the idea is the same as school electroplating" },
      { id: "b", text: "They are only distilled water" },
      { id: "c", text: "They produce only music" },
      { id: "d", text: "They never use electric current" }
    ],
    answerId: "a",
    explanation: "Real plating chemicals can be toxic; schools use safer demos and stress safety.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q14",
    prompt: "In set-up 1, copper is deposited on plate P. In set-up 2, the battery has been turned round, as shown. What happens now?",
    options: [
      { id: "a", text: "Copper turns into a gas" },
      { id: "b", text: "The roles of the plates swap, and copper deposits on plate Q" },
      { id: "c", text: "The solution stops conducting" },
      { id: "d", text: "Copper still deposits on plate P" }
    ],
    answerId: "b",
    explanation: "Turning the battery round makes plate Q the one joined to the negative terminal, so it becomes the cathode; copper ions are now attracted to Q and deposit there. Copper does not keep depositing on P, because P is now joined to the positive terminal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two copper-plating set-ups with plates P and Q in copper sulphate solution. In set-up 1, P is joined to the negative terminal and Q to the positive. In set-up 2 the battery is turned round, so P is joined to the positive terminal and Q to the negative.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"17\" y=\"115\" width=\"121\" height=\"78\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M15,90 L15,189 Q15,195 21,195 L134,195 Q140,195 140,189 L140,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"45.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"100.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"50,70 50,30 55.5,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"105,70 105,30 99.5,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"55.5\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"63.5\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"91.5\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><text x=\"42\" y=\"64\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"113\" y=\"64\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">Q</text><rect x=\"182\" y=\"115\" width=\"121\" height=\"78\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M180,90 L180,189 Q180,195 186,195 L299,195 Q305,195 305,189 L305,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"210.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"265.0\" y=\"70\" width=\"10\" height=\"110\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"215,70 215,30 220.5,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"270,70 270,30 264.5,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"220.5\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"228.5\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><text x=\"256.5\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"207\" y=\"64\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"278\" y=\"64\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"78\" y=\"214\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">set-up 1</text><text x=\"242\" y=\"214\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">set-up 2</text></svg>", "alt": "Two copper-plating set-ups with plates P and Q in copper sulphate solution. In set-up 1, P is joined to the negative terminal and Q to the positive. In set-up 2 the battery is turned round, so P is joined to the positive terminal and Q to the negative."}
  },
  {
    id: "g8-sci-chemfx-b-q15",
    prompt: "Which everyday object is commonly protected by electroplating?",
    options: [
      { id: "a", text: "A wooden pencil core only" },
      { id: "b", text: "A cotton shirt" },
      { id: "c", text: "A steel bathroom tap with a chromium layer" },
      { id: "d", text: "A glass window pane with no metal" }
    ],
    answerId: "c",
    explanation: "Metal taps and fittings are often chrome-plated for shine and rust resistance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q16",
    prompt: "A tester is placed first in copper sulphate solution and then in cooking oil. What do the results shown tell you?",
    options: [
      { id: "a", text: "Oil is the better conductor" },
      { id: "b", text: "Both liquids conduct equally" },
      { id: "c", text: "Oil contains more copper ions" },
      { id: "d", text: "Copper sulphate solution conducts but oil does not" }
    ],
    answerId: "d",
    explanation: "The bulb glows brightly in copper sulphate solution, so current flows through it. In oil the bulb stays dark, so oil does not conduct. Both liquids conducting equally cannot be right, because the bulb behaves so differently in the two.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"The same bulb tester in two beakers. In blue copper sulphate solution the bulb glows brightly. In yellow cooking oil the bulb stays dark.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"22\" y=\"115\" width=\"116\" height=\"78\" fill=\"#60a5fa\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M20,90 L20,189 Q20,195 26,195 L134,195 Q140,195 140,189 L140,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"52.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"102.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"55,70 55,30 58,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"105,70 105,30 102,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"58.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"66.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"94.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><circle cx=\"80.0\" cy=\"62\" r=\"10\" fill=\"#fde047\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"94.0\" y1=\"62\" x2=\"100.0\" y2=\"62\" stroke=\"#eab308\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"66.0\" y1=\"62\" x2=\"60.0\" y2=\"62\" stroke=\"#eab308\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"80.0\" y1=\"48\" x2=\"80.0\" y2=\"42\" stroke=\"#eab308\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"89.8\" y1=\"52.2\" x2=\"94.0\" y2=\"48.0\" stroke=\"#eab308\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"70.2\" y1=\"52.2\" x2=\"66.0\" y2=\"48.0\" stroke=\"#eab308\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"80\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">copper sulphate solution</text><rect x=\"182\" y=\"115\" width=\"116\" height=\"78\" fill=\"#fde68a\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M180,90 L180,189 Q180,195 186,195 L294,195 Q300,195 300,189 L300,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"212.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"262.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"215,70 215,30 218,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"265,70 265,30 262,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"218.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"226.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"254.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><circle cx=\"240.0\" cy=\"62\" r=\"10\" fill=\"#f1f5f9\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"240\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">cooking oil</text></svg>", "alt": "The same bulb tester in two beakers. In blue copper sulphate solution the bulb glows brightly. In yellow cooking oil the bulb stays dark."}
  },
  {
    id: "g8-sci-chemfx-b-q17",
    prompt: "Chemical effects of current are the basis of \u2014",
    options: [
      { id: "a", text: "Electroplating and electrolytic refining" },
      { id: "b", text: "Only rainbows" },
      { id: "c", text: "Only echo location in bats" },
      { id: "d", text: "Only measuring pitch in hertz" }
    ],
    answerId: "a",
    explanation: "Both processes use current through electrolytes to move and deposit metals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q18",
    prompt: "Distilled water can be made to conduct better by \u2014",
    options: [
      { id: "a", text: "Removing all ions further" },
      { id: "b", text: "Dissolving an acid, base, or salt that provides ions" },
      { id: "c", text: "Freezing it to absolute zero only" },
      { id: "d", text: "Mixing it with more oil" }
    ],
    answerId: "b",
    explanation: "Added electrolytes supply charge carriers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q19",
    prompt: "A spoon is to be silver-plated using the set-up shown. What liquid should the beaker contain?",
    options: [
      { id: "a", text: "Cooking oil" },
      { id: "b", text: "Distilled water" },
      { id: "c", text: "A solution of a silver salt" },
      { id: "d", text: "Sugar solution" }
    ],
    answerId: "c",
    explanation: "The silver that coats the spoon comes from silver ions in the liquid, so the electrolyte must be a solution of a silver salt, with a silver plate as the other electrode. Distilled water has almost no ions, so it would hardly conduct and has no silver to deposit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A beaker with an unknown liquid, marked with a question mark. A spoon is joined to the negative terminal of a battery and a silver plate to the positive terminal.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"92\" y=\"115\" width=\"136\" height=\"78\" fill=\"#f1f5f9\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M90,90 L90,189 Q90,195 96,195 L224,195 Q230,195 230,189 L230,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"121.0\" y=\"70\" width=\"8\" height=\"110\" fill=\"#e5e7eb\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"187.0\" y=\"70\" width=\"16\" height=\"110\" fill=\"#cbd5e1\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"125,70 125,30 138,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"195,70 195,30 182,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"138.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"146.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"174.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><text x=\"117\" y=\"64\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">spoon</text><text x=\"203\" y=\"64\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">silver plate</text><text x=\"160\" y=\"150\" font-size=\"26\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#dc2626\">?</text></svg>", "alt": "A beaker with an unknown liquid, marked with a question mark. A spoon is joined to the negative terminal of a battery and a silver plate to the positive terminal."}
  },
  {
    id: "g8-sci-chemfx-b-q20",
    prompt: "Why might a factory electroplate zinc onto iron (galvanising-related protection ideas)?",
    options: [
      { id: "a", text: "To make iron rust faster on purpose" },
      { id: "b", text: "To convert iron into oxygen" },
      { id: "c", text: "To stop electroplating science" },
      { id: "d", text: "To protect iron from corrosion" }
    ],
    answerId: "d",
    explanation: "A coating metal can shield iron from air and moisture that cause rust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q21",
    prompt: "A weak current in a liquid may light an LED but not a thick filament bulb because \u2014",
    options: [
      { id: "a", text: "LEDs can respond to smaller currents" },
      { id: "b", text: "Filament bulbs invent electricity" },
      { id: "c", text: "LEDs need infinite current" },
      { id: "d", text: "Bulbs work only in vacuum liquids" }
    ],
    answerId: "a",
    explanation: "LEDs are sensitive indicators for small currents in testers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q22",
    prompt: "During electrolysis, which electrode is correctly matched with its charge?",
    options: [
      { id: "a", text: "Cathode \u2014 positive electrode" },
      { id: "b", text: "Cathode \u2014 negative electrode; anode \u2014 positive electrode" },
      { id: "c", text: "Anode \u2014 negative electrode" },
      { id: "d", text: "Electrolyte \u2014 perfect vacuum" }
    ],
    answerId: "b",
    explanation: "In electrolytic cells for these lessons, cathode is negative and anode is positive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-b-q23",
    prompt: "Current is passed through acidified water in the apparatus shown. Gas collects in both tubes. What does this show?",
    options: [
      { id: "a", text: "Water is an element that cannot change" },
      { id: "b", text: "The gas is only trapped air" },
      { id: "c", text: "The current breaks water down into new substances" },
      { id: "d", text: "The acid removes all electricity" }
    ],
    answerId: "c",
    explanation: "One tube collects hydrogen and the other oxygen, about 2 : 1 by volume, so the current has broken water down into new substances: a chemical effect of current. It cannot be trapped air: the tubes started full of water, and air would not appear in a 2 : 1 ratio.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two upside-down test tubes, first filled with water, stand over the electrodes in a beaker of acidified water joined to a battery. Tube 1 has collected twice as much gas as tube 2.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"72\" y=\"115\" width=\"176\" height=\"78\" fill=\"#e0f2fe\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M70,90 L70,189 Q70,195 76,195 L244,195 Q250,195 250,189 L250,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"102.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#374151\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"212.0\" y=\"70\" width=\"6\" height=\"110\" fill=\"#374151\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polyline points=\"105,70 105,30 138,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"215,70 215,30 182,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"138.0\" y=\"20\" width=\"44\" height=\"20\" rx=\"3\" fill=\"#fef08a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"146.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">\u2212</text><text x=\"174.0\" y=\"35\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#1f2937\">+</text><circle cx=\"99\" cy=\"160\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"111\" cy=\"148\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"99\" cy=\"136\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"111\" cy=\"124\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"99\" cy=\"112\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"209\" cy=\"160\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"221\" cy=\"148\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"209\" cy=\"136\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"221\" cy=\"124\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><circle cx=\"209\" cy=\"112\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#475569\" stroke-width=\"0.9\"/><rect x=\"92\" y=\"55\" width=\"26\" height=\"120\" rx=\"10\" fill=\"#e0f2fe\" stroke=\"#1f2937\" stroke-width=\"1.6\"/><rect x=\"94\" y=\"57\" width=\"22\" height=\"64\" rx=\"9\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"202\" y=\"55\" width=\"26\" height=\"120\" rx=\"10\" fill=\"#e0f2fe\" stroke=\"#1f2937\" stroke-width=\"1.6\"/><rect x=\"204\" y=\"57\" width=\"22\" height=\"32\" rx=\"9\" fill=\"#ffffff\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"80\" y=\"100\" font-size=\"15\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">1</text><text x=\"240\" y=\"80\" font-size=\"15\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">2</text><text x=\"160\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">acidified water</text></svg>", "alt": "Two upside-down test tubes, first filled with water, stand over the electrodes in a beaker of acidified water joined to a battery. Tube 1 has collected twice as much gas as tube 2."}
  },
  {
    id: "g8-sci-chemfx-b-q24",
    prompt: "The main idea of this chapter is that electric current in liquids can \u2014",
    options: [
      { id: "a", text: "Only produce sound echoes" },
      { id: "b", text: "Travel through vacuum better than in wires" },
      { id: "c", text: "Replace the need for any electrolyte forever" },
      { id: "d", text: "Cause chemical changes such as deposition and gas formation, used in electroplating" }
    ],
    answerId: "d",
    explanation: "Current through electrolytes drives chemical effects with many practical uses.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u26a1",
    title: "Chemical effects of current",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "Some liquids conduct via ions. Current can deposit metals \u2014 that is electroplating.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Electrolyte", reveal: "Liquid that conducts via ions", emoji: "\ud83e\uddea" },
      { label: "Cathode", reveal: "Negative electrode \u2014 metal deposits here", emoji: "\u2796" },
      { label: "Anode", reveal: "Positive electrode", emoji: "\u2795" },
      { label: "Electroplating", reveal: "Thin metal coat using current", emoji: "\u2728" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "In electroplating, the object to coat is the\u2026",
    options: [
        { id: "a", text: "Anode" },
        { id: "b", text: "Cathode" },
        { id: "c", text: "Fuse" },
        { id: "d", text: "Insulator" }
    ],
    answerId: "b",
    why: "Metal ions deposit on the cathode.",
    visual: "magnet",
    speak: "In electroplating, the object to coat is the\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Ions carry current", "Chemical effects", "Electroplating uses", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceChemfx: ChapterDef = {
  id: "chemical-effects",
  title: "Chemical Effects of Current",
  emoji: "\u26a1",
  blurb: "Electrolytes and electroplating",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "materials",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "materials",
      questions: SET_B,
    },
  ],
  paperTopics: ["materials", "forces-energy"],
};

export const g8ScienceChemfxQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
