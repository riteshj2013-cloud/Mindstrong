import type { ChapterDef, PrepQuestion } from "../types";

/** Sound - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-sound-a-q01",
    prompt: "Sound is produced by \u2014",
    options: [
      { id: "a", text: "Vibrating objects" },
      { id: "b", text: "Only hot objects" },
      { id: "c", text: "Only magnetic objects" },
      { id: "d", text: "Objects at complete rest only" }
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
    prompt: "Sound cannot travel through \u2014",
    options: [
      { id: "a", text: "Water" },
      { id: "b", text: "Iron" },
      { id: "c", text: "Vacuum" },
      { id: "d", text: "Air" }
    ],
    answerId: "c",
    explanation: "Sound needs a material medium. There are almost no particles in a vacuum to carry the vibration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q04",
    prompt: "In which medium does sound generally travel fastest among these?",
    options: [
      { id: "a", text: "Vacuum" },
      { id: "b", text: "Air" },
      { id: "c", text: "Water" },
      { id: "d", text: "Steel" }
    ],
    answerId: "d",
    explanation: "Sound is usually fastest in solids, slower in liquids, and slowest in gases. It does not travel in vacuum.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q05",
    prompt: "The maximum displacement of a vibrating particle from its rest position is called \u2014",
    options: [
      { id: "a", text: "Amplitude" },
      { id: "b", text: "Pitch" },
      { id: "c", text: "Wavelength only as loudness" },
      { id: "d", text: "Frequency" }
    ],
    answerId: "a",
    explanation: "Amplitude measures how far the particle moves from its mean position.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q06",
    prompt: "Loudness of sound mainly depends on \u2014",
    options: [
      { id: "a", text: "Magnetic field only" },
      { id: "b", text: "Amplitude" },
      { id: "c", text: "Colour of the object" },
      { id: "d", text: "Only the listener's height" }
    ],
    answerId: "b",
    explanation: "Greater amplitude means more energy in the wave and a louder sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q07",
    prompt: "The number of oscillations per second is called \u2014",
    options: [
      { id: "a", text: "Echo time" },
      { id: "b", text: "Amplitude" },
      { id: "c", text: "Frequency" },
      { id: "d", text: "Loudness" }
    ],
    answerId: "c",
    explanation: "Frequency counts how many vibrations happen each second.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q08",
    prompt: "The SI unit of frequency is \u2014",
    options: [
      { id: "a", text: "joule" },
      { id: "b", text: "pascal" },
      { id: "c", text: "metre" },
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
      { id: "a", text: "Light waves" },
      { id: "b", text: "Ultrasound" },
      { id: "c", text: "Infrasound" },
      { id: "d", text: "Audible music only" }
    ],
    answerId: "c",
    explanation: "Infrasound is below the lower limit of human hearing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q12",
    prompt: "Sounds of frequency greater than 20,000 Hz are called \u2014",
    options: [
      { id: "a", text: "Thunder only" },
      { id: "b", text: "Visible light" },
      { id: "c", text: "Infrasound" },
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
      { id: "b", text: "Snail" },
      { id: "c", text: "Goldfish only in silence" },
      { id: "d", text: "Earthworm" }
    ],
    answerId: "a",
    explanation: "Bats emit ultrasound and use returning echoes to find their way and hunt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q14",
    prompt: "The thin membrane in the human ear that vibrates first when sound arrives is the \u2014",
    options: [
      { id: "a", text: "Pinna" },
      { id: "b", text: "Eardrum (tympanic membrane)" },
      { id: "c", text: "Cochlea fluid only" },
      { id: "d", text: "Outer skin of the cheek" }
    ],
    answerId: "b",
    explanation: "Sound makes the eardrum vibrate; that vibration is then passed inward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q15",
    prompt: "The outer part of the ear that collects sound is the \u2014",
    options: [
      { id: "a", text: "Auditory nerve only" },
      { id: "b", text: "Eardrum" },
      { id: "c", text: "Pinna" },
      { id: "d", text: "Stirrup bone only" }
    ],
    answerId: "c",
    explanation: "The pinna funnels sound into the ear canal toward the eardrum.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q16",
    prompt: "An echo is \u2014",
    options: [
      { id: "a", text: "Light bouncing from a mirror" },
      { id: "b", text: "A smell travelling in air" },
      { id: "c", text: "Sound that is absorbed completely" },
      { id: "d", text: "Reflected sound heard after a noticeable delay" }
    ],
    answerId: "d",
    explanation: "When sound reflects from a distant surface and returns, we may hear it as an echo.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q17",
    prompt: "For a distinct echo to be heard, the reflecting surface should generally be \u2014",
    options: [
      { id: "a", text: "Far enough for a clear time gap (about 17 m or more in air at room conditions in school problems)" },
      { id: "b", text: "Inside the ear only" },
      { id: "c", text: "Made of vacuum" },
      { id: "d", text: "Very close, less than a few centimetres" }
    ],
    answerId: "a",
    explanation: "School science uses a minimum distance so the reflected sound arrives after the original has ended.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
      { id: "a", text: "Stop all vibrations in nature" },
      { id: "b", text: "Improve hearing forever" },
      { id: "c", text: "Damage hearing and cause stress" },
      { id: "d", text: "Turn sound into light" }
    ],
    answerId: "c",
    explanation: "Loud noise can harm the ear and affect health and concentration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q20",
    prompt: "SONAR is used mainly to \u2014",
    options: [
      { id: "a", text: "Grow plants faster" },
      { id: "b", text: "Measure only room temperature" },
      { id: "c", text: "Cook food with sound" },
      { id: "d", text: "Detect objects and find distances under water using ultrasound" }
    ],
    answerId: "d",
    explanation: "SONAR sends ultrasound pulses and times the echoes to locate underwater objects or depth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
      { id: "a", text: "Unable to travel" },
      { id: "b", text: "Louder" },
      { id: "c", text: "Softer" },
      { id: "d", text: "Higher in pitch only for that reason" }
    ],
    answerId: "c",
    explanation: "Smaller amplitude means less loudness, so the sound is softer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q24",
    prompt: "A shrill whistle has a higher pitch than a drum beat mainly because the whistle has \u2014",
    options: [
      { id: "a", text: "Zero amplitude" },
      { id: "b", text: "No vibrations" },
      { id: "c", text: "Lower frequency" },
      { id: "d", text: "Higher frequency" }
    ],
    answerId: "d",
    explanation: "Pitch rises with frequency. Shrill sounds have higher frequencies.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-sound-b-q01",
    prompt: "A stretched rubber band produces sound when plucked because it \u2014",
    options: [
      { id: "a", text: "Vibrates" },
      { id: "b", text: "Turns into a liquid" },
      { id: "c", text: "Stops all motion" },
      { id: "d", text: "Becomes magnetic" }
    ],
    answerId: "a",
    explanation: "Plucking makes the rubber band vibrate, and those vibrations create sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
      { id: "a", text: "Ears do not work in low gravity alone" },
      { id: "b", text: "The Moon is too bright" },
      { id: "c", text: "There is no air (almost vacuum) to carry sound" },
      { id: "d", text: "Sound is faster than light there" }
    ],
    answerId: "c",
    explanation: "Without a material medium, ordinary sound cannot travel between them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q04",
    prompt: "Two sounds have the same frequency but different amplitudes. They differ mainly in \u2014",
    options: [
      { id: "a", text: "Colour" },
      { id: "b", text: "Chemical formula" },
      { id: "c", text: "Pitch" },
      { id: "d", text: "Loudness" }
    ],
    answerId: "d",
    explanation: "Same frequency means similar pitch; different amplitude means different loudness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q05",
    prompt: "A sound of 30,000 Hz is \u2014",
    options: [
      { id: "a", text: "Ultrasound for humans" },
      { id: "b", text: "Infrasound" },
      { id: "c", text: "Visible light" },
      { id: "d", text: "Audible to all humans" }
    ],
    answerId: "a",
    explanation: "30 kHz is above 20 kHz, so it is ultrasound for a typical human ear.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
      { id: "a", text: "Dogs do not use ears" },
      { id: "b", text: "Dogs see better colours" },
      { id: "c", text: "Their audible range can include higher frequencies than ours" },
      { id: "d", text: "Whistles produce only light" }
    ],
    answerId: "c",
    explanation: "Many dogs hear higher frequencies, including some ultrasound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q08",
    prompt: "The tiny bones of the middle ear help to \u2014",
    options: [
      { id: "a", text: "Pump blood" },
      { id: "b", text: "Focus light on the retina" },
      { id: "c", text: "Produce saliva" },
      { id: "d", text: "Transmit eardrum vibrations toward the inner ear" }
    ],
    answerId: "d",
    explanation: "The hammer, anvil, and stirrup pass vibrations from the eardrum inward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q09",
    prompt: "Reverberation in a hall is \u2014",
    options: [
      { id: "a", text: "Persistence of sound due to multiple reflections" },
      { id: "b", text: "Sound travelling in vacuum" },
      { id: "c", text: "A type of smell" },
      { id: "d", text: "Complete silence" }
    ],
    answerId: "a",
    explanation: "Repeated reflections make sound linger; soft materials are used to control it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
      { id: "a", text: "Remove gravity" },
      { id: "b", text: "Cook tissue with visible light only" },
      { id: "c", text: "Help form images of internal organs without using ordinary sound we hear" },
      { id: "d", text: "Replace all X-rays for broken bones always" }
    ],
    answerId: "c",
    explanation: "High-frequency ultrasound echoes from tissues are processed into images.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q12",
    prompt: "Which action increases noise pollution?",
    options: [
      { id: "a", text: "Planting trees near roads" },
      { id: "b", text: "Speaking softly in libraries" },
      { id: "c", text: "Using silencers on vehicles" },
      { id: "d", text: "Unnecessary honking and very loud loudspeakers" }
    ],
    answerId: "d",
    explanation: "Extra loud, unwanted sound from horns and speakers adds to noise pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q13",
    prompt: "The speed of sound is greatest in which of these at usual school conditions?",
    options: [
      { id: "a", text: "A metal rod" },
      { id: "b", text: "Outer space vacuum" },
      { id: "c", text: "Air at room temperature" },
      { id: "d", text: "Water" }
    ],
    answerId: "a",
    explanation: "Particles in solids are closer, so sound generally travels fastest in solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q14",
    prompt: "If frequency doubles and amplitude stays the same, the sound becomes \u2014",
    options: [
      { id: "a", text: "Only brighter light" },
      { id: "b", text: "Higher in pitch but similarly loud (amplitude unchanged)" },
      { id: "c", text: "Lower in pitch and much louder" },
      { id: "d", text: "Silent" }
    ],
    answerId: "b",
    explanation: "Pitch follows frequency; loudness mainly follows amplitude.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q15",
    prompt: "Soft curtains and carpets in a room help reduce echoes because they \u2014",
    options: [
      { id: "a", text: "Increase amplitude of every wave" },
      { id: "b", text: "Reflect all sound perfectly" },
      { id: "c", text: "Absorb a good part of the sound energy" },
      { id: "d", text: "Create vacuum" }
    ],
    answerId: "c",
    explanation: "Soft, porous materials absorb sound and cut unwanted reflections.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q16",
    prompt: "The unit hertz means \u2014",
    options: [
      { id: "a", text: "One metre per second squared" },
      { id: "b", text: "One newton per metre" },
      { id: "c", text: "One joule per kilogram" },
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
      { id: "a", text: "Measuring salt by taste" },
      { id: "b", text: "Sending ultrasound and timing the echo from the seabed" },
      { id: "c", text: "Using only a thermometer" },
      { id: "d", text: "Burning fuel underwater" }
    ],
    answerId: "b",
    explanation: "Distance relates to echo time and the known speed of sound in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q19",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Sound needs no energy to be produced" },
      { id: "b", text: "Sound always travels fastest in vacuum" },
      { id: "c", text: "Sound is a form of energy produced by vibrations" },
      { id: "d", text: "Sound is a type of smell" }
    ],
    answerId: "c",
    explanation: "Vibrating sources transfer energy through the medium as sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q20",
    prompt: "A low-pitched drum sound compared with a high-pitched flute note has \u2014",
    options: [
      { id: "a", text: "No amplitude" },
      { id: "b", text: "Only ultrasonic waves" },
      { id: "c", text: "Higher frequency" },
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
      { id: "b", text: "The ear has no eardrum while speaking" },
      { id: "c", text: "Sound cannot reflect indoors" },
      { id: "d", text: "Recordings remove all amplitude" }
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
      { id: "a", text: "Only glass with no air" },
      { id: "b", text: "Vacuum between bell and ear" },
      { id: "c", text: "Air (or another material medium) between bell and ear" },
      { id: "d", text: "Only pure hydrogen always" }
    ],
    answerId: "c",
    explanation: "Air carries the bell's vibrations to your ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q24",
    prompt: "Bats and dolphins both benefit from ultrasound mainly for \u2014",
    options: [
      { id: "a", text: "Producing magnetic fields" },
      { id: "b", text: "Changing seasons" },
      { id: "c", text: "Photosynthesis" },
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
