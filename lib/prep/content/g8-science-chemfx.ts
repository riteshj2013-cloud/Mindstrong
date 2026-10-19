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
    prompt: "When electric current passes through copper sulphate solution with copper electrodes, copper is deposited on the \u2014",
    options: [
      { id: "a", text: "Anode only as a gas" },
      { id: "b", text: "Battery terminals outside the beaker only" },
      { id: "c", text: "Air above the liquid" },
      { id: "d", text: "Cathode" }
    ],
    answerId: "d",
    explanation: "Positive copper ions move to the negative electrode (cathode) and deposit as metal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "An LED can be used in a tester for liquids because it \u2014",
    options: [
      { id: "a", text: "Needs a huge current that always melts wires" },
      { id: "b", text: "Works only in vacuum" },
      { id: "c", text: "Glows even with a small current" },
      { id: "d", text: "Produces salt" }
    ],
    answerId: "c",
    explanation: "LEDs light with a small current, so they show weak conduction clearly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q16",
    prompt: "A magnetic compass near a wire can detect current because \u2014",
    options: [
      { id: "a", text: "Current produces only smell" },
      { id: "b", text: "Compasses detect sound frequency" },
      { id: "c", text: "Wires always become north poles forever" },
      { id: "d", text: "Current produces a magnetic effect that can deflect the needle" }
    ],
    answerId: "d",
    explanation: "A current-carrying wire has a magnetic field that can move a compass needle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Bubbles of gas at electrodes during electrolysis show that \u2014",
    options: [
      { id: "a", text: "No chemical change occurred" },
      { id: "b", text: "A chemical change produced gases from the liquid or solute" },
      { id: "c", text: "The liquid became a permanent magnet" },
      { id: "d", text: "Sound turned into light" }
    ],
    answerId: "b",
    explanation: "Gas evolution means new substances formed \u2014 a chemical effect of current.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-chemfx-a-q19",
    prompt: "Tap water usually conducts better than distilled water because tap water \u2014",
    options: [
      { id: "a", text: "Is pure H2O with zero ions" },
      { id: "b", text: "Is an oil mixture" },
      { id: "c", text: "Contains dissolved salts and minerals that provide ions" },
      { id: "d", text: "Has no oxygen atoms" }
    ],
    answerId: "c",
    explanation: "Dissolved impurities supply ions that carry current.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Electrolytic refining of copper uses electric current to \u2014",
    options: [
      { id: "a", text: "Make copper more impure" },
      { id: "b", text: "Obtain purer copper by depositing it on the cathode" },
      { id: "c", text: "Turn copper into plastic" },
      { id: "d", text: "Remove all electrons from atoms forever" }
    ],
    answerId: "b",
    explanation: "Pure copper plates out on the cathode from a copper salt solution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "When current flows in copper sulphate solution, Cu2+ ions move toward the \u2014",
    options: [
      { id: "a", text: "Anode" },
      { id: "b", text: "Cathode" },
      { id: "c", text: "Open air only" },
      { id: "d", text: "Plastic beaker wall only" }
    ],
    answerId: "b",
    explanation: "Positive ions are attracted to the negative cathode.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "To nickel-plate an iron key, a suitable arrangement is \u2014",
    options: [
      { id: "a", text: "Key as cathode in a nickel salt solution with a nickel anode" },
      { id: "b", text: "Key as anode in distilled oil" },
      { id: "c", text: "Key disconnected from the circuit" },
      { id: "d", text: "Key as a fuse in open air only" }
    ],
    answerId: "a",
    explanation: "The key (cathode) receives nickel ions from the solution; nickel metal can supply the anode.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "If you reverse the battery connections in a simple copper-plating demo \u2014",
    options: [
      { id: "a", text: "Copper starts floating as a gas in air permanently" },
      { id: "b", text: "The roles of electrodes reverse and deposition switches sides" },
      { id: "c", text: "The solution becomes an insulator instantly forever" },
      { id: "d", text: "Frequency of sound doubles" }
    ],
    answerId: "b",
    explanation: "Reversing polarity swaps which electrode is cathode, so deposition moves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "A tester bulb glows brightly in copper sulphate solution but stays dark in oil. This comparison shows \u2014",
    options: [
      { id: "a", text: "Oil is the better electrolyte" },
      { id: "b", text: "Both liquids are identical conductors" },
      { id: "c", text: "Oil has more Cu2+ ions" },
      { id: "d", text: "Copper sulphate solution conducts and oil does not (under the test)" }
    ],
    answerId: "d",
    explanation: "Brightness indicates conduction; oil fails the test.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "In electroplating, the electrolyte should contain \u2014",
    options: [
      { id: "a", text: "Only pure oil" },
      { id: "b", text: "Only sand" },
      { id: "c", text: "Ions of the metal to be deposited" },
      { id: "d", text: "Only nitrogen gas bubbles with no liquid" }
    ],
    answerId: "c",
    explanation: "Metal ions in solution are what deposit onto the cathode.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Passing current through acidified water can produce hydrogen and oxygen gases. This shows \u2014",
    options: [
      { id: "a", text: "Water is an element that cannot change" },
      { id: "b", text: "Gases are only illusions" },
      { id: "c", text: "Electric current can cause chemical decomposition" },
      { id: "d", text: "Acid removes all electricity" }
    ],
    answerId: "c",
    explanation: "Electrolysis splits water (helped by acid) into hydrogen and oxygen \u2014 a chemical effect.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
