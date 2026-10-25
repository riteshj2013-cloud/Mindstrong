import type { ChapterDef, PrepQuestion } from "../types";

/** Sound - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-sound-a-q01",
    prompt: "Sound is produced by \u2014",
    options: [
      { id: "a", text: "Vibrating objects" },
      { id: "b", text: "Objects at complete rest only" },
      { id: "c", text: "Only hot objects" },
      { id: "d", text: "Only magnetic objects" }
    ],
    answerId: "a",
    explanation: "Vibrating objects disturb the surrounding medium and produce sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q02",
    prompt: "Vibration means \u2014",
    options: [
      { id: "a", text: "A slow one-way motion only" },
      { id: "b", text: "A rapid to-and-fro motion about a mean position" },
      { id: "c", text: "A chemical change only" },
      { id: "d", text: "A change of colour" }
    ],
    answerId: "b",
    explanation: "In vibration, a particle or object moves back and forth repeatedly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q03",
    prompt: "The pictures show a ringing electric bell in a glass jar, before and after a pump has removed most of the air. What does this show that sound cannot travel through?",
    options: [
      { id: "a", text: "Air" },
      { id: "b", text: "Water" },
      { id: "c", text: "A vacuum" },
      { id: "d", text: "Iron" }
    ],
    answerId: "c",
    explanation: "As the pump takes out the air, fewer particles are left to carry the vibrations, and the sound fades even though the bell keeps ringing. So sound cannot travel through a vacuum. Air is wrong: the sound was loud while the jar was full of air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two drawings of an electric bell ringing under a glass jar. Before: the jar is full of air particles and loud sound waves come from the bell. After the pump has run: hardly any particles are left and the sound waves are very faint.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M25,180 L25,80 Q25,40 80,40 Q135,40 135,80 L135,180\" fill=\"#f0f9ff\" stroke=\"#64748b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"10\" y1=\"180\" x2=\"150\" y2=\"180\" stroke=\"#334155\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"80\" cy=\"120\" r=\"16\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"1.5\"/><rect x=\"76\" y=\"136\" width=\"8\" height=\"22\" fill=\"#64748b\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"158\" x2=\"80\" y2=\"180\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M102,108 q6,12 0,24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M110,104 q8,16 0,32\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M118,100 q10,20 0,40\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"45\" cy=\"70\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"90\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"75\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"40\" cy=\"120\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"118\" cy=\"130\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"55\" cy=\"145\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"85\" cy=\"85\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"102\" cy=\"110\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"68\" cy=\"110\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"120\" cy=\"155\" r=\"2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M185,180 L185,80 Q185,40 240,40 Q295,40 295,80 L295,180\" fill=\"#f0f9ff\" stroke=\"#64748b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"170\" y1=\"180\" x2=\"310\" y2=\"180\" stroke=\"#334155\" stroke-width=\"4\" stroke-linecap=\"round\"/><circle cx=\"240\" cy=\"120\" r=\"16\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"1.5\"/><rect x=\"236\" y=\"136\" width=\"8\" height=\"22\" fill=\"#64748b\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"240\" y1=\"158\" x2=\"240\" y2=\"180\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M262,112 q5,8 0,16\" fill=\"none\" stroke=\"#93c5fd\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><circle cx=\"210\" cy=\"80\" r=\"1.2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"265\" cy=\"100\" r=\"1.2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"230\" cy=\"130\" r=\"1.2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"275\" cy=\"140\" r=\"1.2\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"295\" y1=\"175\" x2=\"312\" y2=\"175\" stroke=\"#334155\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"312\" y=\"168\" font-size=\"10.5\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">to pump</text><text x=\"80\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">before: loud</text><text x=\"240\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">after pumping: faint</text></svg>", "alt": "Two drawings of an electric bell ringing under a glass jar. Before: the jar is full of air particles and loud sound waves come from the bell. After the pump has run: hardly any particles are left and the sound waves are very faint."}
  },
  {
    id: "g8-sci-sound-a-q04",
    prompt: "In which medium does sound generally travel fastest among these?",
    options: [
      { id: "a", text: "Air" },
      { id: "b", text: "Water" },
      { id: "c", text: "Vacuum" },
      { id: "d", text: "Steel" }
    ],
    answerId: "d",
    explanation: "Sound is usually fastest in solids, slower in liquids, and slowest in gases. It does not travel in vacuum.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q05",
    prompt: "In the wave diagram, what does the distance marked X show?",
    options: [
      { id: "a", text: "Amplitude" },
      { id: "b", text: "Frequency" },
      { id: "c", text: "Pitch" },
      { id: "d", text: "Wavelength" }
    ],
    answerId: "a",
    explanation: "X runs from the rest (middle) line straight up to the top of a crest: the greatest distance a particle moves from its rest position, which is the amplitude. Wavelength is the distance Y, from one crest to the next.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A wave drawn across a dashed rest line. X is a vertical arrow from the rest line up to the top of a crest. Y is a horizontal arrow from one crest to the next crest.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"20\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><polyline points=\"20,120 22.3,112.8 24.7,105.8 27,99 29.3,92.5 31.7,86.5 34,81.1 36.3,76.4 38.7,72.4 41,69.2 43.3,66.9 45.7,65.5 48,65 50.3,65.5 52.7,66.9 55,69.2 57.3,72.4 59.7,76.4 62,81.1 64.3,86.5 66.7,92.5 69,99 71.3,105.8 73.7,112.8 76,120 78.3,127.2 80.7,134.2 83,141 85.3,147.5 87.7,153.5 90,158.9 92.3,163.6 94.7,167.6 97,170.8 99.3,173.1 101.7,174.5 104,175 106.3,174.5 108.7,173.1 111,170.8 113.3,167.6 115.7,163.6 118,158.9 120.3,153.5 122.7,147.5 125,141 127.3,134.2 129.7,127.2 132,120 134.3,112.8 136.7,105.8 139,99 141.3,92.5 143.7,86.5 146,81.1 148.3,76.4 150.7,72.4 153,69.2 155.3,66.9 157.7,65.5 160,65 162.3,65.5 164.7,66.9 167,69.2 169.3,72.4 171.7,76.4 174,81.1 176.3,86.5 178.7,92.5 181,99 183.3,105.8 185.7,112.8 188,120 190.3,127.2 192.7,134.2 195,141 197.3,147.5 199.7,153.5 202,158.9 204.3,163.6 206.7,167.6 209,170.8 211.3,173.1 213.7,174.5 216,175 218.3,174.5 220.7,173.1 223,170.8 225.3,167.6 227.7,163.6 230,158.9 232.3,153.5 234.7,147.5 237,141 239.3,134.2 241.7,127.2 244,120 246.3,112.8 248.7,105.8 251,99 253.3,92.5 255.7,86.5 258,81.1 260.3,76.4 262.7,72.4 265,69.2 267.3,66.9 269.7,65.5 272,65 274.3,65.5 276.7,66.9 279,69.2 281.3,72.4 283.7,76.4 286,81.1 288.3,86.5 290.7,92.5 293,99 295.3,105.8 297.7,112.8 300,120\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"48.0\" y1=\"92.5\" x2=\"48.0\" y2=\"113.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"48,120 44.1,113 51.9,113\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"48.0\" y1=\"92.5\" x2=\"48.0\" y2=\"72.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"48,65 51.9,72 44.1,72\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"56\" y=\"100\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">X</text><line x1=\"48\" y1=\"60\" x2=\"48\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"104.0\" y1=\"40.0\" x2=\"55.0\" y2=\"40.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"48,40 55,36.1 55,43.9\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"104.0\" y1=\"40.0\" x2=\"153.0\" y2=\"40.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"160,40 153,43.9 153,36.1\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"104\" y=\"32\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Y</text><text x=\"300\" y=\"136\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">rest line</text></svg>", "alt": "A wave drawn across a dashed rest line. X is a vertical arrow from the rest line up to the top of a crest. Y is a horizontal arrow from one crest to the next crest."}
  },
  {
    id: "g8-sci-sound-a-q06",
    prompt: "Loudness of sound mainly depends on \u2014",
    options: [
      { id: "a", text: "Colour of the object" },
      { id: "b", text: "Amplitude" },
      { id: "c", text: "Only the listener's height" },
      { id: "d", text: "Magnetic field only" }
    ],
    answerId: "b",
    explanation: "Greater amplitude means more energy in the wave and a louder sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q07",
    prompt: "The number of oscillations per second is called \u2014",
    options: [
      { id: "a", text: "Amplitude" },
      { id: "b", text: "Loudness" },
      { id: "c", text: "Frequency" },
      { id: "d", text: "Echo time" }
    ],
    answerId: "c",
    explanation: "Frequency counts how many vibrations happen each second.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q08",
    prompt: "The SI unit of frequency is \u2014",
    options: [
      { id: "a", text: "metre" },
      { id: "b", text: "joule" },
      { id: "c", text: "pascal" },
      { id: "d", text: "hertz (Hz)" }
    ],
    answerId: "d",
    explanation: "One hertz means one vibration per second.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q09",
    prompt: "Pitch of a sound depends mainly on its \u2014",
    options: [
      { id: "a", text: "Frequency" },
      { id: "b", text: "Only on amplitude" },
      { id: "c", text: "Only on the colour of the source" },
      { id: "d", text: "Weight of the listener" }
    ],
    answerId: "a",
    explanation: "Higher frequency sounds are heard as higher pitch; lower frequency as lower pitch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q10",
    prompt: "The approximate audible frequency range for a healthy young human is \u2014",
    options: [
      { id: "a", text: "1 Hz to 10 Hz" },
      { id: "b", text: "20 Hz to 20,000 Hz" },
      { id: "c", text: "25,000 Hz to 100,000 Hz only" },
      { id: "d", text: "0 Hz to 5 Hz only" }
    ],
    answerId: "b",
    explanation: "Most humans hear roughly from 20 Hz up to about 20 kHz.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q11",
    prompt: "Sounds of frequency less than 20 Hz are called \u2014",
    options: [
      { id: "a", text: "Ultrasound" },
      { id: "b", text: "Audible music only" },
      { id: "c", text: "Infrasound" },
      { id: "d", text: "Light waves" }
    ],
    answerId: "c",
    explanation: "Infrasound is below the lower limit of human hearing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q12",
    prompt: "Sounds of frequency greater than 20,000 Hz are called \u2014",
    options: [
      { id: "a", text: "Infrasound" },
      { id: "b", text: "Thunder only" },
      { id: "c", text: "Visible light" },
      { id: "d", text: "Ultrasound" }
    ],
    answerId: "d",
    explanation: "Ultrasound is above the upper limit of normal human hearing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q13",
    prompt: "Which animal is well known for using ultrasound for navigation?",
    options: [
      { id: "a", text: "Bat" },
      { id: "b", text: "Earthworm" },
      { id: "c", text: "Snail" },
      { id: "d", text: "Goldfish only in silence" }
    ],
    answerId: "a",
    explanation: "Bats emit ultrasound and use returning echoes to find their way and hunt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q14",
    prompt: "In the drawing of the human ear, which labelled part is the thin membrane that vibrates first when sound arrives?",
    options: [
      { id: "a", text: "Part P" },
      { id: "b", text: "Part Q" },
      { id: "c", text: "Part R" },
      { id: "d", text: "Part S" }
    ],
    answerId: "b",
    explanation: "Sound is collected by P, the outer ear, and travels down the canal to Q, the eardrum, a thin membrane stretched across the canal that vibrates first. P, the pinna, collects and funnels the sound but is not a membrane and does not vibrate to pass it on.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A simplified drawing of the human ear: P is the outer ear flap, Q is a thin sheet across the inner end of the ear canal, R is a chain of three tiny bones, and S is a coiled snail-shaped part.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M60,40 C20,50 20,120 40,150 C55,175 75,178 80,160 C84,145 70,140 70,125 C70,112 82,108 84,96 C88,70 84,44 60,40 Z\" fill=\"#fed7aa\" stroke=\"#9a3412\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"80\" y=\"96\" width=\"90\" height=\"18\" fill=\"#fff7ed\" stroke=\"#9a3412\" stroke-width=\"1.5\"/><line x1=\"172\" y1=\"88\" x2=\"172\" y2=\"122\" stroke=\"#7c2d12\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"176\" y1=\"104\" x2=\"196\" y2=\"96\" stroke=\"#57534e\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"196\" y1=\"96\" x2=\"212\" y2=\"106\" stroke=\"#57534e\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"106\" x2=\"226\" y2=\"100\" stroke=\"#57534e\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M250,100 m-22,0 a22,22 0 1,1 44,0 a16,16 0 1,1 -32,0 a10,10 0 1,1 20,0 a5,5 0 1,1 -10,0\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"272\" y1=\"108\" x2=\"300\" y2=\"150\" stroke=\"#eab308\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"45\" y1=\"70\" x2=\"18\" y2=\"30\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"45\" cy=\"70\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"14\" y=\"35\" font-size=\"15\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">P</text><line x1=\"172\" y1=\"120\" x2=\"172\" y2=\"175\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"172\" cy=\"120\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"172\" y=\"189\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><line x1=\"204\" y1=\"100\" x2=\"204\" y2=\"40\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"204\" cy=\"100\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"204\" y=\"36\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text><line x1=\"262\" y1=\"90\" x2=\"300\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"262\" cy=\"90\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"304\" y=\"55\" font-size=\"15\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">S</text><line x1=\"10\" y1=\"105\" x2=\"52.0\" y2=\"105.0\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"60,105 52,109.4 52,100.6\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"14\" y=\"96\" font-size=\"11\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">sound</text></svg>", "alt": "A simplified drawing of the human ear: P is the outer ear flap, Q is a thin sheet across the inner end of the ear canal, R is a chain of three tiny bones, and S is a coiled snail-shaped part."}
  },
  {
    id: "g8-sci-sound-a-q15",
    prompt: "The outer part of the ear that collects sound is the \u2014",
    options: [
      { id: "a", text: "Eardrum" },
      { id: "b", text: "Stirrup bone only" },
      { id: "c", text: "Pinna" },
      { id: "d", text: "Auditory nerve only" }
    ],
    answerId: "c",
    explanation: "The pinna funnels sound into the ear canal toward the eardrum.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q16",
    prompt: "An echo is \u2014",
    options: [
      { id: "a", text: "Sound that is absorbed completely" },
      { id: "b", text: "Light bouncing from a mirror" },
      { id: "c", text: "A smell travelling in air" },
      { id: "d", text: "Reflected sound heard after a noticeable delay" }
    ],
    answerId: "d",
    explanation: "When sound reflects from a distant surface and returns, we may hear it as an echo.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q17",
    prompt: "A boy claps between two cliffs at the distances shown. He hears a clap and its echo separately only if the echo arrives at least 0.1 s after the clap. From which cliff will he hear a distinct echo?",
    options: [
      { id: "a", text: "From cliff 2 only" },
      { id: "b", text: "From cliff 1 only" },
      { id: "c", text: "From both cliffs" },
      { id: "d", text: "From neither cliff" }
    ],
    answerId: "a",
    explanation: "In 0.1 s sound travels 340 \u00d7 0.1 = 34 m, which must cover the trip to the cliff and back, so the cliff must be at least 17 m away. Cliff 2 at 25 m is far enough. Cliff 1 at only 8 m is too close, so its echo merges with the clap.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A boy stands on flat ground between two cliffs. Cliff 1 is 8 m to his left and cliff 2 is 25 m to his right. A note says the speed of sound in air is 340 m/s.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"0,190 0,50 30,60 40,190\" fill=\"#a8a29e\" stroke=\"#57534e\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polygon points=\"320,190 320,40 285,55 278,190\" fill=\"#a8a29e\" stroke=\"#57534e\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"0\" y1=\"190\" x2=\"320\" y2=\"190\" stroke=\"#57534e\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"100\" cy=\"152.0\" r=\"8.0\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"160.0\" x2=\"100\" y2=\"180.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"180.0\" x2=\"93.0\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"100\" y1=\"180.0\" x2=\"107.0\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"91.0\" y1=\"166.0\" x2=\"109.0\" y2=\"166.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"69.0\" y1=\"150.0\" x2=\"47.0\" y2=\"150.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"40,150 47,146.2 47,153.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"69.0\" y1=\"150.0\" x2=\"91.0\" y2=\"150.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"98,150 91,153.8 91,146.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"69\" y=\"142\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">8 m</text><line x1=\"190.0\" y1=\"150.0\" x2=\"109.0\" y2=\"150.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"102,150 109,146.2 109,153.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"190.0\" y1=\"150.0\" x2=\"271.0\" y2=\"150.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"278,150 271,153.8 271,146.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"190\" y=\"142\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">25 m</text><text x=\"20\" y=\"40\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">cliff 1</text><text x=\"300\" y=\"32\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">cliff 2</text><text x=\"170\" y=\"60\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">speed of sound in air: 340 m/s</text><text x=\"160\" y=\"212\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">boy claps here</text></svg>", "alt": "A boy stands on flat ground between two cliffs. Cliff 1 is 8 m to his left and cliff 2 is 25 m to his right. A note says the speed of sound in air is 340 m/s."}
  },
  {
    id: "g8-sci-sound-a-q18",
    prompt: "Unwanted or unpleasant sound is called \u2014",
    options: [
      { id: "a", text: "Music" },
      { id: "b", text: "Noise" },
      { id: "c", text: "Ultrasound always" },
      { id: "d", text: "Silence" }
    ],
    answerId: "b",
    explanation: "Noise is sound that is unwanted, harsh, or disturbing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q19",
    prompt: "Prolonged exposure to very loud noise can \u2014",
    options: [
      { id: "a", text: "Improve hearing forever" },
      { id: "b", text: "Turn sound into light" },
      { id: "c", text: "Damage hearing and cause stress" },
      { id: "d", text: "Stop all vibrations in nature" }
    ],
    answerId: "c",
    explanation: "Loud noise can harm the ear and affect health and concentration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q20",
    prompt: "What is the ship in the picture using its SONAR for?",
    options: [
      { id: "a", text: "Measuring the air temperature" },
      { id: "b", text: "Sending radio messages" },
      { id: "c", text: "Warming the water" },
      { id: "d", text: "Finding the depth of the sea from ultrasound echoes" }
    ],
    answerId: "d",
    explanation: "The ship sends ultrasound pulses down and times how long their echoes from the sea bed take to come back; half that time multiplied by the speed of sound in water gives the depth. SONAR uses sound waves, not radio waves, so it is not for sending radio messages.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A ship on the sea sends waves straight down to the sea bed, and waves travel back up to the ship. A clock symbol shows the time taken being measured.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"0\" y=\"70\" width=\"320\" height=\"150\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"0\" y1=\"70\" x2=\"320\" y2=\"70\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"70,70 90,90 210,90 230,70\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"120\" y=\"45\" width=\"50\" height=\"25\" fill=\"#e2e8f0\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><path d=\"M0,200 Q60,190 120,200 T240,198 T320,196 L320,220 L0,220 Z\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M124,100 q6,4 12,0\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M124,122 q6,4 12,0\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M124,144 q6,4 12,0\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M124,166 q6,4 12,0\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"130\" y1=\"100\" x2=\"130.0\" y2=\"177.0\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"130,185 125.6,177 134.4,177\" fill=\"#1d4ed8\" stroke=\"#1d4ed8\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M164,186 q6,-4 12,0\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M164,164 q6,-4 12,0\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M164,142 q6,-4 12,0\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M164,120 q6,-4 12,0\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"170\" y1=\"186\" x2=\"170.0\" y2=\"108.0\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"170,100 174.4,108 165.6,108\" fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"270\" cy=\"30\" r=\"14\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"270\" y1=\"30\" x2=\"270\" y2=\"21\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"30\" x2=\"277\" y2=\"33\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"270\" y=\"60\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">time it</text></svg>", "alt": "A ship on the sea sends waves straight down to the sea bed, and waves travel back up to the ship. A clock symbol shows the time taken being measured."}
  },
  {
    id: "g8-sci-sound-a-q21",
    prompt: "Which is a practical way to reduce noise near a busy road?",
    options: [
      { id: "a", text: "Planting trees or using barriers along the road" },
      { id: "b", text: "Removing all silencers from vehicles" },
      { id: "c", text: "Playing louder horns" },
      { id: "d", text: "Breaking more glass" }
    ],
    answerId: "a",
    explanation: "Trees, walls, and quieter machines help absorb or block noise.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q22",
    prompt: "Music is generally described as sound that is \u2014",
    options: [
      { id: "a", text: "Always harmful" },
      { id: "b", text: "Pleasant and has a regular pattern" },
      { id: "c", text: "Below 1 Hz only" },
      { id: "d", text: "Unable to travel in air" }
    ],
    answerId: "b",
    explanation: "Musical sounds are organised and usually pleasant, unlike irregular noise.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q23",
    prompt: "If the amplitude of a sound wave is halved, the sound becomes \u2014",
    options: [
      { id: "a", text: "Louder" },
      { id: "b", text: "Higher in pitch only for that reason" },
      { id: "c", text: "Softer" },
      { id: "d", text: "Unable to travel" }
    ],
    answerId: "c",
    explanation: "Smaller amplitude means less loudness, so the sound is softer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q24",
    prompt: "Traces P and Q show the sounds of a whistle and a drum on the same time scale. Trace P is the whistle. Why does the whistle have a higher pitch?",
    options: [
      { id: "a", text: "It has a lower frequency" },
      { id: "b", text: "It has zero amplitude" },
      { id: "c", text: "It makes no vibrations" },
      { id: "d", text: "It has a higher frequency" }
    ],
    answerId: "d",
    explanation: "Trace P fits many more waves into the same time, so the whistle vibrates more times per second: it has a higher frequency, and pitch rises with frequency. Both traces are the same height, so the difference is not in amplitude.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two sound traces drawn on the same time scale and the same height. Trace P shows many closely packed waves. Trace Q shows only a few widely spaced waves.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><text x=\"20\" y=\"64\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">P</text><line x1=\"40\" y1=\"60\" x2=\"300\" y2=\"60\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-linecap=\"round\"/><polyline points=\"40,60 40.6,55 41.3,50.1 42,45.5 42.6,41.2 43.2,37.4 43.9,34.1 44.5,31.5 45.2,29.6 45.9,28.4 46.5,28 47.1,28.4 47.8,29.6 48.5,31.5 49.1,34.1 49.8,37.4 50.4,41.2 51,45.5 51.7,50.1 52.4,55 53,60 53.6,65 54.3,69.9 55,74.5 55.6,78.8 56.2,82.6 56.9,85.9 57.5,88.5 58.2,90.4 58.8,91.6 59.5,92 60.1,91.6 60.8,90.4 61.5,88.5 62.1,85.9 62.8,82.6 63.4,78.8 64,74.5 64.7,69.9 65.3,65 66,60 66.7,55 67.3,50.1 68,45.5 68.6,41.2 69.2,37.4 69.9,34.1 70.5,31.5 71.2,29.6 71.8,28.4 72.5,28 73.2,28.4 73.8,29.6 74.5,31.5 75.1,34.1 75.8,37.4 76.4,41.2 77,45.5 77.7,50.1 78.3,55 79,60 79.7,65 80.3,69.9 81,74.5 81.6,78.8 82.2,82.6 82.9,85.9 83.6,88.5 84.2,90.4 84.8,91.6 85.5,92 86.2,91.6 86.8,90.4 87.4,88.5 88.1,85.9 88.8,82.6 89.4,78.8 90.1,74.5 90.7,69.9 91.3,65 92,60 92.7,55 93.3,50.1 93.9,45.5 94.6,41.2 95.2,37.4 95.9,34.1 96.5,31.5 97.2,29.6 97.8,28.4 98.5,28 99.2,28.4 99.8,29.6 100.5,31.5 101.1,34.1 101.8,37.4 102.4,41.2 103,45.5 103.7,50.1 104.3,55 105,60 105.7,65 106.3,69.9 107,74.5 107.6,78.8 108.2,82.6 108.9,85.9 109.5,88.5 110.2,90.4 110.9,91.6 111.5,92 112.2,91.6 112.8,90.4 113.4,88.5 114.1,85.9 114.8,82.6 115.4,78.8 116,74.5 116.7,69.9 117.3,65 118,60 118.6,55 119.3,50.1 120,45.5 120.6,41.2 121.2,37.4 121.9,34.1 122.5,31.5 123.2,29.6 123.9,28.4 124.5,28 125.2,28.4 125.8,29.6 126.5,31.5 127.1,34.1 127.8,37.4 128.4,41.2 129.1,45.5 129.7,50.1 130.3,55 131,60 131.6,65 132.3,69.9 132.9,74.5 133.6,78.8 134.2,82.6 134.9,85.9 135.6,88.5 136.2,90.4 136.8,91.6 137.5,92 138.2,91.6 138.8,90.4 139.4,88.5 140.1,85.9 140.8,82.6 141.4,78.8 142.1,74.5 142.7,69.9 143.4,65 144,60 144.7,55 145.3,50.1 145.9,45.5 146.6,41.2 147.2,37.4 147.9,34.1 148.6,31.5 149.2,29.6 149.8,28.4 150.5,28 151.1,28.4 151.8,29.6 152.4,31.5 153.1,34.1 153.8,37.4 154.4,41.2 155.1,45.5 155.7,50.1 156.4,55 157,60 157.7,65 158.3,69.9 158.9,74.5 159.6,78.8 160.2,82.6 160.9,85.9 161.6,88.5 162.2,90.4 162.8,91.6 163.5,92 164.1,91.6 164.8,90.4 165.4,88.5 166.1,85.9 166.8,82.6 167.4,78.8 168.1,74.5 168.7,69.9 169.3,65 170,60 170.6,55 171.3,50.1 171.9,45.5 172.6,41.2 173.2,37.4 173.9,34.1 174.5,31.5 175.2,29.6 175.8,28.4 176.5,28 177.2,28.4 177.8,29.6 178.4,31.5 179.1,34.1 179.8,37.4 180.4,41.2 181,45.5 181.7,50.1 182.3,55 183,60 183.7,65 184.3,69.9 184.9,74.5 185.6,78.8 186.2,82.6 186.9,85.9 187.6,88.5 188.2,90.4 188.8,91.6 189.5,92 190.2,91.6 190.8,90.4 191.5,88.5 192.1,85.9 192.8,82.6 193.4,78.8 194.1,74.5 194.7,69.9 195.3,65 196,60 196.7,55 197.3,50.1 198,45.5 198.6,41.2 199.2,37.4 199.9,34.1 200.6,31.5 201.2,29.6 201.9,28.4 202.5,28 203.1,28.4 203.8,29.6 204.4,31.5 205.1,34.1 205.8,37.4 206.4,41.2 207,45.5 207.7,50.1 208.3,55 209,60 209.7,65 210.3,69.9 210.9,74.5 211.6,78.8 212.2,82.6 212.9,85.9 213.5,88.5 214.2,90.4 214.8,91.6 215.5,92 216.2,91.6 216.8,90.4 217.4,88.5 218.1,85.9 218.8,82.6 219.4,78.8 220.1,74.5 220.7,69.9 221.3,65 222,60 222.7,55 223.3,50.1 224,45.5 224.6,41.2 225.2,37.4 225.9,34.1 226.6,31.5 227.2,29.6 227.8,28.4 228.5,28 229.2,28.4 229.8,29.6 230.5,31.5 231.1,34.1 231.8,37.4 232.4,41.2 233.1,45.5 233.7,50.1 234.4,55 235,60 235.6,65 236.3,69.9 236.9,74.5 237.6,78.8 238.2,82.6 238.9,85.9 239.5,88.5 240.2,90.4 240.8,91.6 241.5,92 242.2,91.6 242.8,90.4 243.4,88.5 244.1,85.9 244.8,82.6 245.4,78.8 246,74.5 246.7,69.9 247.3,65 248,60 248.7,55 249.3,50.1 249.9,45.5 250.6,41.2 251.2,37.4 251.9,34.1 252.6,31.5 253.2,29.6 253.8,28.4 254.5,28 255.2,28.4 255.8,29.6 256.5,31.5 257.1,34.1 257.8,37.4 258.4,41.2 259.1,45.5 259.7,50.1 260.4,55 261,60 261.6,65 262.3,69.9 263,74.5 263.6,78.8 264.2,82.6 264.9,85.9 265.6,88.5 266.2,90.4 266.9,91.6 267.5,92 268.1,91.6 268.8,90.4 269.4,88.5 270.1,85.9 270.8,82.6 271.4,78.8 272,74.5 272.7,69.9 273.4,65 274,60 274.6,55 275.3,50.1 275.9,45.5 276.6,41.2 277.2,37.4 277.9,34.1 278.5,31.5 279.2,29.6 279.9,28.4 280.5,28 281.1,28.4 281.8,29.6 282.4,31.5 283.1,34.1 283.8,37.4 284.4,41.2 285.1,45.5 285.7,50.1 286.4,55 287,60 287.6,65 288.3,69.9 289,74.5 289.6,78.8 290.2,82.6 290.9,85.9 291.6,88.5 292.2,90.4 292.9,91.6 293.5,92 294.1,91.6 294.8,90.4 295.5,88.5 296.1,85.9 296.8,82.6 297.4,78.8 298.1,74.5 298.7,69.9 299.4,65 300,60\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"20\" y=\"164\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">Q</text><line x1=\"40\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-linecap=\"round\"/><polyline points=\"40,160 42.2,155.8 44.3,151.7 46.5,147.8 48.7,144 50.8,140.5 53,137.4 55.2,134.6 57.3,132.3 59.5,130.4 61.7,129.1 63.8,128.3 66,128 68.2,128.3 70.3,129.1 72.5,130.4 74.7,132.3 76.8,134.6 79,137.4 81.2,140.5 83.3,144 85.5,147.8 87.7,151.7 89.8,155.8 92,160 94.2,164.2 96.3,168.3 98.5,172.2 100.7,176 102.8,179.5 105,182.6 107.2,185.4 109.3,187.7 111.5,189.6 113.7,190.9 115.8,191.7 118,192 120.2,191.7 122.3,190.9 124.5,189.6 126.7,187.7 128.8,185.4 131,182.6 133.2,179.5 135.3,176 137.5,172.2 139.7,168.3 141.8,164.2 144,160 146.2,155.8 148.3,151.7 150.5,147.8 152.7,144 154.8,140.5 157,137.4 159.2,134.6 161.3,132.3 163.5,130.4 165.7,129.1 167.8,128.3 170,128 172.2,128.3 174.3,129.1 176.5,130.4 178.7,132.3 180.8,134.6 183,137.4 185.2,140.5 187.3,144 189.5,147.8 191.7,151.7 193.8,155.8 196,160 198.2,164.2 200.3,168.3 202.5,172.2 204.7,176 206.8,179.5 209,182.6 211.2,185.4 213.3,187.7 215.5,189.6 217.7,190.9 219.8,191.7 222,192 224.2,191.7 226.3,190.9 228.5,189.6 230.7,187.7 232.8,185.4 235,182.6 237.2,179.5 239.3,176 241.5,172.2 243.7,168.3 245.8,164.2 248,160 250.2,155.8 252.3,151.7 254.5,147.8 256.7,144 258.8,140.5 261,137.4 263.2,134.6 265.3,132.3 267.5,130.4 269.7,129.1 271.8,128.3 274,128 276.2,128.3 278.3,129.1 280.5,130.4 282.7,132.3 284.8,134.6 287,137.4 289.2,140.5 291.3,144 293.5,147.8 295.7,151.7 297.8,155.8 300,160\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"170\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">same time scale</text></svg>", "alt": "Two sound traces drawn on the same time scale and the same height. Trace P shows many closely packed waves. Trace Q shows only a few widely spaced waves."}
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-sound-b-q01",
    prompt: "The picture shows a rubber band stretched over an open box just after it has been plucked. Why does it make a sound?",
    options: [
      { id: "a", text: "It vibrates to and fro" },
      { id: "b", text: "It gets warmer" },
      { id: "c", text: "Air is sucked into the box" },
      { id: "d", text: "It becomes longer for good" }
    ],
    answerId: "a",
    explanation: "The blurred outlines show the band moving quickly to and fro: it is vibrating, and these vibrations make the air around it vibrate, which we hear as sound. It does not become longer for good: when it stops moving, it goes back to its straight stretched shape.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An open box with a rubber band stretched across the top. Just after plucking, the band is drawn as several faint curved outlines above and below its straight position, with sound marks beside it.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"40,110 280,110 280,190 40,190\" fill=\"#d6a76a\" stroke=\"#78350f\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"80\" y=\"112\" width=\"160\" height=\"30\" fill=\"#78350f\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.6\"/><line x1=\"40\" y1=\"108\" x2=\"280\" y2=\"108\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M40,108 Q160,88 280,108\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.5\"/><path d=\"M40,108 Q160,128 280,108\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.5\"/><path d=\"M40,108 Q160,78 280,108\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\" opacity=\"0.3\"/><path d=\"M40,108 Q160,138 280,108\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\" opacity=\"0.3\"/><path d=\"M290,90 q5,14 0,28\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/><path d=\"M298,86 q7,17 0,34\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"50\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">just after plucking</text></svg>", "alt": "An open box with a rubber band stretched across the top. Just after plucking, the band is drawn as several faint curved outlines above and below its straight position, with sound marks beside it."}
  },
  {
    id: "g8-sci-sound-b-q02",
    prompt: "You can hear a friend swimming and calling underwater (nearby) because sound \u2014",
    options: [
      { id: "a", text: "Needs vacuum" },
      { id: "b", text: "Can travel through liquids" },
      { id: "c", text: "Travels only in solids" },
      { id: "d", text: "Is only light" }
    ],
    answerId: "b",
    explanation: "Water is a material medium, so sound waves can pass through it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q03",
    prompt: "Astronauts on the Moon cannot talk to each other by ordinary air sound because \u2014",
    options: [
      { id: "a", text: "The Moon is too bright" },
      { id: "b", text: "Sound is faster than light there" },
      { id: "c", text: "There is no air (almost vacuum) to carry sound" },
      { id: "d", text: "Ears do not work in low gravity alone" }
    ],
    answerId: "c",
    explanation: "Without a material medium, ordinary sound cannot travel between them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q04",
    prompt: "Traces 1 and 2 show two sounds on the same scales. How do the two sounds differ?",
    options: [
      { id: "a", text: "In pitch" },
      { id: "b", text: "In speed" },
      { id: "c", text: "In frequency" },
      { id: "d", text: "In loudness" }
    ],
    answerId: "d",
    explanation: "Both traces have the same number of waves in the same time, so their frequency and pitch are the same. Trace 2 is taller, with a bigger amplitude, so sound 2 is louder. Pitch does not differ, because the waves in both traces are equally spaced.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two sound traces on the same scales. Both have the same number of equally spaced waves. Trace 1 is short in height; trace 2 is much taller.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><text x=\"20\" y=\"64\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">1</text><line x1=\"40\" y1=\"60\" x2=\"300\" y2=\"60\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-linecap=\"round\"/><polyline points=\"40,60 42.2,57.1 44.3,54.3 46.5,51.8 48.7,49.6 50.8,47.9 53,46.7 55.2,46.1 57.3,46.1 59.5,46.7 61.7,47.9 63.8,49.6 66,51.8 68.2,54.3 70.3,57.1 72.5,60 74.7,62.9 76.8,65.7 79,68.2 81.2,70.4 83.3,72.1 85.5,73.3 87.7,73.9 89.8,73.9 92,73.3 94.2,72.1 96.3,70.4 98.5,68.2 100.7,65.7 102.8,62.9 105,60 107.2,57.1 109.3,54.3 111.5,51.8 113.7,49.6 115.8,47.9 118,46.7 120.2,46.1 122.3,46.1 124.5,46.7 126.7,47.9 128.8,49.6 131,51.8 133.2,54.3 135.3,57.1 137.5,60 139.7,62.9 141.8,65.7 144,68.2 146.2,70.4 148.3,72.1 150.5,73.3 152.7,73.9 154.8,73.9 157,73.3 159.2,72.1 161.3,70.4 163.5,68.2 165.7,65.7 167.8,62.9 170,60 172.2,57.1 174.3,54.3 176.5,51.8 178.7,49.6 180.8,47.9 183,46.7 185.2,46.1 187.3,46.1 189.5,46.7 191.7,47.9 193.8,49.6 196,51.8 198.2,54.3 200.3,57.1 202.5,60 204.7,62.9 206.8,65.7 209,68.2 211.2,70.4 213.3,72.1 215.5,73.3 217.7,73.9 219.8,73.9 222,73.3 224.2,72.1 226.3,70.4 228.5,68.2 230.7,65.7 232.8,62.9 235,60 237.2,57.1 239.3,54.3 241.5,51.8 243.7,49.6 245.8,47.9 248,46.7 250.2,46.1 252.3,46.1 254.5,46.7 256.7,47.9 258.8,49.6 261,51.8 263.2,54.3 265.3,57.1 267.5,60 269.7,62.9 271.8,65.7 274,68.2 276.2,70.4 278.3,72.1 280.5,73.3 282.7,73.9 284.8,73.9 287,73.3 289.2,72.1 291.3,70.4 293.5,68.2 295.7,65.7 297.8,62.9 300,60\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"20\" y=\"159\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">2</text><line x1=\"40\" y1=\"155\" x2=\"300\" y2=\"155\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-linecap=\"round\"/><polyline points=\"40,155 42.2,146.3 44.3,137.9 46.5,130.3 48.7,123.8 50.8,118.6 53,115.1 55.2,113.2 57.3,113.2 59.5,115.1 61.7,118.6 63.8,123.8 66,130.3 68.2,137.9 70.3,146.3 72.5,155 74.7,163.7 76.8,172.1 79,179.7 81.2,186.2 83.3,191.4 85.5,194.9 87.7,196.8 89.8,196.8 92,194.9 94.2,191.4 96.3,186.2 98.5,179.7 100.7,172.1 102.8,163.7 105,155 107.2,146.3 109.3,137.9 111.5,130.3 113.7,123.8 115.8,118.6 118,115.1 120.2,113.2 122.3,113.2 124.5,115.1 126.7,118.6 128.8,123.8 131,130.3 133.2,137.9 135.3,146.3 137.5,155 139.7,163.7 141.8,172.1 144,179.7 146.2,186.2 148.3,191.4 150.5,194.9 152.7,196.8 154.8,196.8 157,194.9 159.2,191.4 161.3,186.2 163.5,179.7 165.7,172.1 167.8,163.7 170,155 172.2,146.3 174.3,137.9 176.5,130.3 178.7,123.8 180.8,118.6 183,115.1 185.2,113.2 187.3,113.2 189.5,115.1 191.7,118.6 193.8,123.8 196,130.3 198.2,137.9 200.3,146.3 202.5,155 204.7,163.7 206.8,172.1 209,179.7 211.2,186.2 213.3,191.4 215.5,194.9 217.7,196.8 219.8,196.8 222,194.9 224.2,191.4 226.3,186.2 228.5,179.7 230.7,172.1 232.8,163.7 235,155 237.2,146.3 239.3,137.9 241.5,130.3 243.7,123.8 245.8,118.6 248,115.1 250.2,113.2 252.3,113.2 254.5,115.1 256.7,118.6 258.8,123.8 261,130.3 263.2,137.9 265.3,146.3 267.5,155 269.7,163.7 271.8,172.1 274,179.7 276.2,186.2 278.3,191.4 280.5,194.9 282.7,196.8 284.8,196.8 287,194.9 289.2,191.4 291.3,186.2 293.5,179.7 295.7,172.1 297.8,163.7 300,155\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"170\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">same time scale, same height scale</text></svg>", "alt": "Two sound traces on the same scales. Both have the same number of equally spaced waves. Trace 1 is short in height; trace 2 is much taller."}
  },
  {
    id: "g8-sci-sound-b-q05",
    prompt: "The scale shows ranges of sound frequency. Sound S has a frequency of 30,000 Hz. What is sound S for a human ear?",
    options: [
      { id: "a", text: "Ultrasound, in region Z" },
      { id: "b", text: "Audible sound, in region Y" },
      { id: "c", text: "Infrasound, in region X" },
      { id: "d", text: "Audible only to adults, in region Y" }
    ],
    answerId: "a",
    explanation: "Humans hear roughly 20 Hz to 20,000 Hz, which is region Y. Sound S at 30,000 Hz is above this range, in region Z, so it is ultrasound. Infrasound is region X, below 20 Hz, so S cannot be infrasound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A frequency scale divided into three regions: X below 20 hertz, Y from 20 to 20,000 hertz, marked human hearing, and Z above 20,000 hertz. An arrow marks sound S at 30,000 hertz.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"20\" y=\"90\" width=\"60\" height=\"40\" fill=\"#e0e7ff\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"80\" y=\"90\" width=\"150\" height=\"40\" fill=\"#dcfce7\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"230\" y=\"90\" width=\"75\" height=\"40\" fill=\"#fee2e2\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><text x=\"50\" y=\"116\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">X</text><text x=\"155\" y=\"116\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Y</text><text x=\"267\" y=\"116\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Z</text><text x=\"155\" y=\"80\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">human hearing</text><text x=\"80\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">20 Hz</text><text x=\"230\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">20,000 Hz</text><line x1=\"80\" y1=\"130\" x2=\"80\" y2=\"138\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"230\" y1=\"130\" x2=\"230\" y2=\"138\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"252\" y1=\"66\" x2=\"252.0\" y2=\"80.0\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><polygon points=\"252,88 247.6,80 256.4,80\" fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"262\" y=\"60\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#dc2626\">S: 30,000 Hz</text><text x=\"160\" y=\"186\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">frequency increases \u2192</text></svg>", "alt": "A frequency scale divided into three regions: X below 20 hertz, Y from 20 to 20,000 hertz, marked human hearing, and Z above 20,000 hertz. An arrow marks sound S at 30,000 hertz."}
  },
  {
    id: "g8-sci-sound-b-q06",
    prompt: "A sound of 10 Hz is \u2014",
    options: [
      { id: "a", text: "Ultrasound" },
      { id: "b", text: "Infrasound" },
      { id: "c", text: "Always musical" },
      { id: "d", text: "A radio wave only" }
    ],
    answerId: "b",
    explanation: "10 Hz is below 20 Hz, so it is infrasound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q07",
    prompt: "Dogs can often hear a whistle that humans cannot because \u2014",
    options: [
      { id: "a", text: "Dogs see better colours" },
      { id: "b", text: "Whistles produce only light" },
      { id: "c", text: "Their audible range can include higher frequencies than ours" },
      { id: "d", text: "Dogs do not use ears" }
    ],
    answerId: "c",
    explanation: "Many dogs hear higher frequencies, including some ultrasound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q08",
    prompt: "What is the job of the part labelled X in the drawing of the ear?",
    options: [
      { id: "a", text: "Collecting sound from outside" },
      { id: "b", text: "Turning vibrations into nerve signals" },
      { id: "c", text: "Keeping the ear canal clean" },
      { id: "d", text: "Passing eardrum vibrations to the inner ear" }
    ],
    answerId: "d",
    explanation: "X is the chain of three tiny bones in the middle ear. They pick up the vibrations of the eardrum and pass them on to the inner ear. Turning vibrations into nerve signals is the job of the snail-shaped cochlea beyond X, not of X itself.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A simplified drawing of the human ear: the outer ear flap, the ear canal ending at a thin sheet, then X marking a chain of three tiny bones, followed by a coiled snail-shaped part.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M60,40 C20,50 20,120 40,150 C55,175 75,178 80,160 C84,145 70,140 70,125 C70,112 82,108 84,96 C88,70 84,44 60,40 Z\" fill=\"#fed7aa\" stroke=\"#9a3412\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"80\" y=\"96\" width=\"90\" height=\"18\" fill=\"#fff7ed\" stroke=\"#9a3412\" stroke-width=\"1.5\"/><line x1=\"172\" y1=\"88\" x2=\"172\" y2=\"122\" stroke=\"#7c2d12\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"176\" y1=\"104\" x2=\"196\" y2=\"96\" stroke=\"#57534e\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"196\" y1=\"96\" x2=\"212\" y2=\"106\" stroke=\"#57534e\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"212\" y1=\"106\" x2=\"226\" y2=\"100\" stroke=\"#57534e\" stroke-width=\"4\" stroke-linecap=\"round\"/><path d=\"M250,100 m-22,0 a22,22 0 1,1 44,0 a16,16 0 1,1 -32,0 a10,10 0 1,1 20,0 a5,5 0 1,1 -10,0\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"272\" y1=\"108\" x2=\"300\" y2=\"150\" stroke=\"#eab308\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"204\" y1=\"100\" x2=\"204\" y2=\"40\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"204\" cy=\"100\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"204\" y=\"36\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">X</text></svg>", "alt": "A simplified drawing of the human ear: the outer ear flap, the ear canal ending at a thin sheet, then X marking a chain of three tiny bones, followed by a coiled snail-shaped part."}
  },
  {
    id: "g8-sci-sound-b-q09",
    prompt: "The picture shows how sound travels from a speaker to a listener in a large empty hall. What effect does this cause?",
    options: [
      { id: "a", text: "Reverberation" },
      { id: "b", text: "A single echo" },
      { id: "c", text: "Ultrasound" },
      { id: "d", text: "Infrasound" }
    ],
    answerId: "a",
    explanation: "The sound bounces off the walls, ceiling and floor many times, and these reflections keep reaching the listener just after the direct sound, so the sound lingers and blurs. This is reverberation. A single echo would need one reflection arriving after a clear gap, not many overlapping ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A large empty hall seen from the side, with bare walls. A speaker on the left and a listener on the right. Besides the direct path, many sound paths bounce off the ceiling, walls and floor before reaching the listener.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"10\" y=\"20\" width=\"300\" height=\"180\" fill=\"#f8fafc\" stroke=\"#334155\" stroke-width=\"3\"/><rect x=\"30\" y=\"130\" width=\"18\" height=\"30\" fill=\"#334155\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><circle cx=\"270\" cy=\"155.8\" r=\"7.2\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"270\" y1=\"163.0\" x2=\"270\" y2=\"181.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"181.0\" x2=\"263.7\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"181.0\" x2=\"276.3\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"261.9\" y1=\"168.4\" x2=\"278.1\" y2=\"168.4\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"140\" x2=\"250.00922956536095\" y2=\"149.6158283444885\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"258,150 249.8,154 250.2,145.2\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><polyline points=\"50,135 150,22 262,150\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"50,145 120,198 262,160\" fill=\"none\" stroke=\"#f97316\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"48,130 90,22 308,90 264,150\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"48,150 12,180 200,198 262,162\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polyline points=\"48,128 220,22 308,130 266,156\" fill=\"none\" stroke=\"#14b8a6\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"39\" y=\"124\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">speaker</text><text x=\"232\" y=\"120\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">listener</text></svg>", "alt": "A large empty hall seen from the side, with bare walls. A speaker on the left and a listener on the right. Besides the direct path, many sound paths bounce off the ceiling, walls and floor before reaching the listener."}
  },
  {
    id: "g8-sci-sound-b-q10",
    prompt: "To hear an echo from a wall, you need \u2014",
    options: [
      { id: "a", text: "No reflecting surface" },
      { id: "b", text: "A reflecting surface and enough distance for a delay" },
      { id: "c", text: "Only ultraviolet light" },
      { id: "d", text: "A vacuum between you and the wall" }
    ],
    answerId: "b",
    explanation: "Sound must bounce back and arrive after a noticeable time gap.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q11",
    prompt: "Ultrasound scans in hospitals are useful because ultrasound can \u2014",
    options: [
      { id: "a", text: "Cook tissue with visible light only" },
      { id: "b", text: "Replace all X-rays for broken bones always" },
      { id: "c", text: "Help form images of internal organs without using ordinary sound we hear" },
      { id: "d", text: "Remove gravity" }
    ],
    answerId: "c",
    explanation: "High-frequency ultrasound echoes from tissues are processed into images.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q12",
    prompt: "Which action increases noise pollution?",
    options: [
      { id: "a", text: "Using silencers on vehicles" },
      { id: "b", text: "Planting trees near roads" },
      { id: "c", text: "Speaking softly in libraries" },
      { id: "d", text: "Unnecessary honking and very loud loudspeakers" }
    ],
    answerId: "d",
    explanation: "Extra loud, unwanted sound from horns and speakers adds to noise pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q13",
    prompt: "Mohan taps one end of a long iron railing. Seema, at the far end, hears the tap twice: once through the rail and once through the air, as shown. Why does the first sound reach her before the second?",
    options: [
      { id: "a", text: "Sound travels faster in iron than in air" },
      { id: "b", text: "Sound travels faster in air than in iron" },
      { id: "c", text: "The path along the rail is shorter" },
      { id: "d", text: "The louder sound travels faster" }
    ],
    answerId: "a",
    explanation: "Both paths are the same length, so the sound that arrives first must be travelling faster. The first sound came through the iron rail, so sound travels faster in iron, a solid, than in air. The rail path is not shorter: the picture shows both paths are the same length.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A long iron railing with Mohan tapping one end and Seema with her ear at the other end. Two arrows of the same length run from Mohan to Seema: one along the iron rail, marked first, and one through the air above it, marked second.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"40\" y1=\"150\" x2=\"280\" y2=\"150\" stroke=\"#475569\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"150\" x2=\"50\" y2=\"190\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"90\" y1=\"150\" x2=\"90\" y2=\"190\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"150\" x2=\"130\" y2=\"190\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"150\" x2=\"170\" y2=\"190\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"150\" x2=\"210\" y2=\"190\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"150\" x2=\"250\" y2=\"190\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"28\" cy=\"155.8\" r=\"7.2\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"28\" y1=\"163.0\" x2=\"28\" y2=\"181.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"181.0\" x2=\"21.7\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"28\" y1=\"181.0\" x2=\"34.3\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"19.9\" y1=\"168.4\" x2=\"36.1\" y2=\"168.4\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"296\" cy=\"155.8\" r=\"7.2\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"296\" y1=\"163.0\" x2=\"296\" y2=\"181.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"296\" y1=\"181.0\" x2=\"289.7\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"296\" y1=\"181.0\" x2=\"302.3\" y2=\"190\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"287.9\" y1=\"168.4\" x2=\"304.1\" y2=\"168.4\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"140\" x2=\"262.0\" y2=\"140.0\" stroke=\"#dc2626\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><polygon points=\"270,140 262,144.4 262,135.6\" fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"132\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#dc2626\">through iron: heard 1st</text><line x1=\"50\" y1=\"90\" x2=\"262.0\" y2=\"90.0\" stroke=\"#2563eb\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><polygon points=\"270,90 262,94.4 262,85.6\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"82\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#2563eb\">through air: heard 2nd</text><text x=\"160\" y=\"40\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">both paths the same length</text><text x=\"28\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">Mohan</text><text x=\"292\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">Seema</text></svg>", "alt": "A long iron railing with Mohan tapping one end and Seema with her ear at the other end. Two arrows of the same length run from Mohan to Seema: one along the iron rail, marked first, and one through the air above it, marked second."}
  },
  {
    id: "g8-sci-sound-b-q14",
    prompt: "If frequency doubles and amplitude stays the same, the sound becomes \u2014",
    options: [
      { id: "a", text: "Lower in pitch and much louder" },
      { id: "b", text: "Higher in pitch but similarly loud (amplitude unchanged)" },
      { id: "c", text: "Silent" },
      { id: "d", text: "Only brighter light" }
    ],
    answerId: "b",
    explanation: "Pitch follows frequency; loudness mainly follows amplitude.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q15",
    prompt: "Soft curtains and carpets in a room help reduce echoes because they \u2014",
    options: [
      { id: "a", text: "Reflect all sound perfectly" },
      { id: "b", text: "Create vacuum" },
      { id: "c", text: "Absorb a good part of the sound energy" },
      { id: "d", text: "Increase amplitude of every wave" }
    ],
    answerId: "c",
    explanation: "Soft, porous materials absorb sound and cut unwanted reflections.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q16",
    prompt: "The unit hertz means \u2014",
    options: [
      { id: "a", text: "One joule per kilogram" },
      { id: "b", text: "One metre per second squared" },
      { id: "c", text: "One newton per metre" },
      { id: "d", text: "One vibration per second" }
    ],
    answerId: "d",
    explanation: "Frequency in hertz counts cycles (vibrations) each second.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q17",
    prompt: "Which part of the ear is damaged by very loud sounds over time?",
    options: [
      { id: "a", text: "Sensitive structures inside the ear involved in hearing" },
      { id: "b", text: "Only the fingernails" },
      { id: "c", text: "Only the teeth enamel" },
      { id: "d", text: "Only the hair on the head" }
    ],
    answerId: "a",
    explanation: "Loud noise can harm the eardrum or delicate inner-ear cells and nerves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q18",
    prompt: "A ship measures ocean depth with SONAR by \u2014",
    options: [
      { id: "a", text: "Using only a thermometer" },
      { id: "b", text: "Sending ultrasound and timing the echo from the seabed" },
      { id: "c", text: "Burning fuel underwater" },
      { id: "d", text: "Measuring salt by taste" }
    ],
    answerId: "b",
    explanation: "Distance relates to echo time and the known speed of sound in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q19",
    prompt: "Which statement about sound is true?",
    options: [
      { id: "a", text: "Sound is a type of smell" },
      { id: "b", text: "Sound needs no energy to be produced" },
      { id: "c", text: "Sound is a form of energy produced by vibrations" },
      { id: "d", text: "Sound always travels fastest in vacuum" }
    ],
    answerId: "c",
    explanation: "Vibrating sources transfer energy through the medium as sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q20",
    prompt: "A low-pitched drum sound compared with a high-pitched flute note has \u2014",
    options: [
      { id: "a", text: "Higher frequency" },
      { id: "b", text: "No amplitude" },
      { id: "c", text: "Only ultrasonic waves" },
      { id: "d", text: "Lower frequency" }
    ],
    answerId: "d",
    explanation: "Low pitch means lower frequency.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q21",
    prompt: "We hear our own voice differently in a recording partly because \u2014",
    options: [
      { id: "a", text: "Bone conduction and air paths differ when we speak versus when we only listen" },
      { id: "b", text: "Recordings remove all amplitude" },
      { id: "c", text: "The ear has no eardrum while speaking" },
      { id: "d", text: "Sound cannot reflect indoors" }
    ],
    answerId: "a",
    explanation: "When speaking, vibrations also reach the inner ear through bones of the head.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q22",
    prompt: "Noise can affect us by \u2014",
    options: [
      { id: "a", text: "Only changing hair colour" },
      { id: "b", text: "Disturbing sleep, concentration, and sometimes blood pressure" },
      { id: "c", text: "Making plants produce only ultrasound" },
      { id: "d", text: "Stopping Earth's rotation" }
    ],
    answerId: "b",
    explanation: "Persistent noise is a health and learning problem, not just an annoyance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q23",
    prompt: "Which medium is necessary for you to hear a classroom bell?",
    options: [
      { id: "a", text: "Vacuum between bell and ear" },
      { id: "b", text: "Only pure hydrogen always" },
      { id: "c", text: "Air (or another material medium) between bell and ear" },
      { id: "d", text: "Only glass with no air" }
    ],
    answerId: "c",
    explanation: "Air carries the bell's vibrations to your ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q24",
    prompt: "Bats and dolphins both benefit from ultrasound mainly for \u2014",
    options: [
      { id: "a", text: "Photosynthesis" },
      { id: "b", text: "Producing magnetic fields" },
      { id: "c", text: "Changing seasons" },
      { id: "d", text: "Echolocation \u2014 sensing surroundings with echoes" }
    ],
    answerId: "d",
    explanation: "They send high-frequency sounds and interpret returning echoes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd0a",
    title: "Sound",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "Sound comes from vibrations and needs a medium. Amplitude is loudness; frequency is pitch.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Vibration", reveal: "To-and-fro motion makes sound", emoji: "\ud83c\udfb8" },
      { label: "Amplitude", reveal: "Controls loudness", emoji: "\ud83d\udce2" },
      { label: "Frequency", reveal: "Controls pitch (hertz)", emoji: "\ud83c\udfb5" },
      { label: "Ultrasound", reveal: "Above 20 kHz; SONAR and scans", emoji: "\ud83e\udd87" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Pitch of a sound depends mainly on\u2026",
    options: [
        { id: "a", text: "Amplitude" },
        { id: "b", text: "Frequency" },
        { id: "c", text: "Colour" },
        { id: "d", text: "Smell" }
    ],
    answerId: "b",
    why: "Higher frequency means higher pitch.",
    visual: "magnet",
    speak: "Pitch of a sound depends mainly on\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Vibration makes sound", "Needs a medium", "Pitch vs loudness", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceSound: ChapterDef = {
  id: "sound",
  title: "Sound",
  emoji: "\ud83d\udd0a",
  blurb: "Vibrations, pitch and echoes",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "forces-energy",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "forces-energy",
      questions: SET_B,
    },
  ],
  paperTopics: ["forces-energy", "materials"],
};

export const g8ScienceSoundQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
