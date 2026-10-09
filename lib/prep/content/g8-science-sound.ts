import type { ChapterDef, PrepQuestion } from "../types";

/** Sound - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-sound-a-q01",
    prompt: "Sound is produced by \u2014",
    options: [
      { id: "a", text: "Objects at complete rest only" },
      { id: "b", text: "Vibrating objects" },
      { id: "c", text: "Only hot objects" },
      { id: "d", text: "Only magnetic objects" }
    ],
    answerId: "b",
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
      { id: "a", text: "Air" },
      { id: "b", text: "Water" },
      { id: "c", text: "Iron" },
      { id: "d", text: "Vacuum" }
    ],
    answerId: "d",
    explanation: "Sound needs a material medium. There are almost no particles in a vacuum to carry the vibration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q04",
    prompt: "In which medium does sound generally travel fastest among these?",
    options: [
      { id: "a", text: "Air" },
      { id: "b", text: "Water" },
      { id: "c", text: "Steel" },
      { id: "d", text: "Vacuum" }
    ],
    answerId: "c",
    explanation: "Sound is usually fastest in solids, slower in liquids, and slowest in gases. It does not travel in vacuum.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q05",
    prompt: "The maximum displacement of a vibrating particle from its rest position is called \u2014",
    options: [
      { id: "a", text: "Frequency" },
      { id: "b", text: "Amplitude" },
      { id: "c", text: "Pitch" },
      { id: "d", text: "Wavelength only as loudness" }
    ],
    answerId: "b",
    explanation: "Amplitude measures how far the particle moves from its mean position.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q06",
    prompt: "Loudness of sound mainly depends on \u2014",
    options: [
      { id: "a", text: "Amplitude" },
      { id: "b", text: "Colour of the object" },
      { id: "c", text: "Only the listener's height" },
      { id: "d", text: "Magnetic field only" }
    ],
    answerId: "a",
    explanation: "Greater amplitude means more energy in the wave and a louder sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q07",
    prompt: "The number of oscillations per second is called \u2014",
    options: [
      { id: "a", text: "Amplitude" },
      { id: "b", text: "Frequency" },
      { id: "c", text: "Loudness" },
      { id: "d", text: "Echo time" }
    ],
    answerId: "b",
    explanation: "Frequency counts how many vibrations happen each second.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q08",
    prompt: "The SI unit of frequency is \u2014",
    options: [
      { id: "a", text: "metre" },
      { id: "b", text: "hertz (Hz)" },
      { id: "c", text: "joule" },
      { id: "d", text: "pascal" }
    ],
    answerId: "b",
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
      { id: "b", text: "Infrasound" },
      { id: "c", text: "Audible music only" },
      { id: "d", text: "Light waves" }
    ],
    answerId: "b",
    explanation: "Infrasound is below the lower limit of human hearing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q12",
    prompt: "Sounds of frequency greater than 20,000 Hz are called \u2014",
    options: [
      { id: "a", text: "Infrasound" },
      { id: "b", text: "Ultrasound" },
      { id: "c", text: "Thunder only" },
      { id: "d", text: "Visible light" }
    ],
    answerId: "b",
    explanation: "Ultrasound is above the upper limit of normal human hearing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q13",
    prompt: "Which animal is well known for using ultrasound for navigation?",
    options: [
      { id: "a", text: "Earthworm" },
      { id: "b", text: "Bat" },
      { id: "c", text: "Snail" },
      { id: "d", text: "Goldfish only in silence" }
    ],
    answerId: "b",
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
      { id: "a", text: "Eardrum" },
      { id: "b", text: "Pinna" },
      { id: "c", text: "Stirrup bone only" },
      { id: "d", text: "Auditory nerve only" }
    ],
    answerId: "b",
    explanation: "The pinna funnels sound into the ear canal toward the eardrum.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q16",
    prompt: "An echo is \u2014",
    options: [
      { id: "a", text: "Sound that is absorbed completely" },
      { id: "b", text: "Reflected sound heard after a noticeable delay" },
      { id: "c", text: "Light bouncing from a mirror" },
      { id: "d", text: "A smell travelling in air" }
    ],
    answerId: "b",
    explanation: "When sound reflects from a distant surface and returns, we may hear it as an echo.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q17",
    prompt: "For a distinct echo to be heard, the reflecting surface should generally be \u2014",
    options: [
      { id: "a", text: "Very close, less than a few centimetres" },
      { id: "b", text: "Far enough for a clear time gap (about 17 m or more in air at room conditions in school problems)" },
      { id: "c", text: "Inside the ear only" },
      { id: "d", text: "Made of vacuum" }
    ],
    answerId: "b",
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
      { id: "a", text: "Improve hearing forever" },
      { id: "b", text: "Damage hearing and cause stress" },
      { id: "c", text: "Turn sound into light" },
      { id: "d", text: "Stop all vibrations in nature" }
    ],
    answerId: "b",
    explanation: "Loud noise can harm the ear and affect health and concentration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q20",
    prompt: "SONAR is used mainly to \u2014",
    options: [
      { id: "a", text: "Cook food with sound" },
      { id: "b", text: "Detect objects and find distances under water using ultrasound" },
      { id: "c", text: "Grow plants faster" },
      { id: "d", text: "Measure only room temperature" }
    ],
    answerId: "b",
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
      { id: "a", text: "Louder" },
      { id: "b", text: "Softer" },
      { id: "c", text: "Higher in pitch only for that reason" },
      { id: "d", text: "Unable to travel" }
    ],
    answerId: "b",
    explanation: "Smaller amplitude means less loudness, so the sound is softer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-a-q24",
    prompt: "A shrill whistle has a higher pitch than a drum beat mainly because the whistle has \u2014",
    options: [
      { id: "a", text: "Lower frequency" },
      { id: "b", text: "Higher frequency" },
      { id: "c", text: "Zero amplitude" },
      { id: "d", text: "No vibrations" }
    ],
    answerId: "b",
    explanation: "Pitch rises with frequency. Shrill sounds have higher frequencies.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-sound-b-q01",
    prompt: "A stretched rubber band produces sound when plucked because it \u2014",
    options: [
      { id: "a", text: "Becomes magnetic" },
      { id: "b", text: "Vibrates" },
      { id: "c", text: "Turns into a liquid" },
      { id: "d", text: "Stops all motion" }
    ],
    answerId: "b",
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
      { id: "a", text: "The Moon is too bright" },
      { id: "b", text: "There is no air (almost vacuum) to carry sound" },
      { id: "c", text: "Sound is faster than light there" },
      { id: "d", text: "Ears do not work in low gravity alone" }
    ],
    answerId: "b",
    explanation: "Without a material medium, ordinary sound cannot travel between them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q04",
    prompt: "Two sounds have the same frequency but different amplitudes. They differ mainly in \u2014",
    options: [
      { id: "a", text: "Pitch" },
      { id: "b", text: "Loudness" },
      { id: "c", text: "Colour" },
      { id: "d", text: "Chemical formula" }
    ],
    answerId: "b",
    explanation: "Same frequency means similar pitch; different amplitude means different loudness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q05",
    prompt: "A sound of 30,000 Hz is \u2014",
    options: [
      { id: "a", text: "Audible to all humans" },
      { id: "b", text: "Ultrasound for humans" },
      { id: "c", text: "Infrasound" },
      { id: "d", text: "Visible light" }
    ],
    answerId: "b",
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
      { id: "a", text: "Dogs see better colours" },
      { id: "b", text: "Their audible range can include higher frequencies than ours" },
      { id: "c", text: "Whistles produce only light" },
      { id: "d", text: "Dogs do not use ears" }
    ],
    answerId: "b",
    explanation: "Many dogs hear higher frequencies, including some ultrasound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q08",
    prompt: "The tiny bones of the middle ear help to \u2014",
    options: [
      { id: "a", text: "Produce saliva" },
      { id: "b", text: "Transmit eardrum vibrations toward the inner ear" },
      { id: "c", text: "Pump blood" },
      { id: "d", text: "Focus light on the retina" }
    ],
    answerId: "b",
    explanation: "The hammer, anvil, and stirrup pass vibrations from the eardrum inward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q09",
    prompt: "Reverberation in a hall is \u2014",
    options: [
      { id: "a", text: "Complete silence" },
      { id: "b", text: "Persistence of sound due to multiple reflections" },
      { id: "c", text: "Sound travelling in vacuum" },
      { id: "d", text: "A type of smell" }
    ],
    answerId: "b",
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
      { id: "a", text: "Cook tissue with visible light only" },
      { id: "b", text: "Help form images of internal organs without using ordinary sound we hear" },
      { id: "c", text: "Replace all X-rays for broken bones always" },
      { id: "d", text: "Remove gravity" }
    ],
    answerId: "b",
    explanation: "High-frequency ultrasound echoes from tissues are processed into images.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q12",
    prompt: "Which action increases noise pollution?",
    options: [
      { id: "a", text: "Using silencers on vehicles" },
      { id: "b", text: "Unnecessary honking and very loud loudspeakers" },
      { id: "c", text: "Planting trees near roads" },
      { id: "d", text: "Speaking softly in libraries" }
    ],
    answerId: "b",
    explanation: "Extra loud, unwanted sound from horns and speakers adds to noise pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q13",
    prompt: "The speed of sound is greatest in which of these at usual school conditions?",
    options: [
      { id: "a", text: "Air at room temperature" },
      { id: "b", text: "Water" },
      { id: "c", text: "A metal rod" },
      { id: "d", text: "Outer space vacuum" }
    ],
    answerId: "c",
    explanation: "Particles in solids are closer, so sound generally travels fastest in solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q14",
    prompt: "If frequency doubles and amplitude stays the same, the sound becomes \u2014",
    options: [
      { id: "a", text: "Higher in pitch but similarly loud (amplitude unchanged)" },
      { id: "b", text: "Lower in pitch and much louder" },
      { id: "c", text: "Silent" },
      { id: "d", text: "Only brighter light" }
    ],
    answerId: "a",
    explanation: "Pitch follows frequency; loudness mainly follows amplitude.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q15",
    prompt: "Soft curtains and carpets in a room help reduce echoes because they \u2014",
    options: [
      { id: "a", text: "Reflect all sound perfectly" },
      { id: "b", text: "Absorb a good part of the sound energy" },
      { id: "c", text: "Create vacuum" },
      { id: "d", text: "Increase amplitude of every wave" }
    ],
    answerId: "b",
    explanation: "Soft, porous materials absorb sound and cut unwanted reflections.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q16",
    prompt: "The unit hertz means \u2014",
    options: [
      { id: "a", text: "One joule per kilogram" },
      { id: "b", text: "One vibration per second" },
      { id: "c", text: "One metre per second squared" },
      { id: "d", text: "One newton per metre" }
    ],
    answerId: "b",
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
      { id: "a", text: "Sending ultrasound and timing the echo from the seabed" },
      { id: "b", text: "Using only a thermometer" },
      { id: "c", text: "Burning fuel underwater" },
      { id: "d", text: "Measuring salt by taste" }
    ],
    answerId: "a",
    explanation: "Distance relates to echo time and the known speed of sound in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q19",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Sound is a form of energy produced by vibrations" },
      { id: "b", text: "Sound is a type of smell" },
      { id: "c", text: "Sound needs no energy to be produced" },
      { id: "d", text: "Sound always travels fastest in vacuum" }
    ],
    answerId: "a",
    explanation: "Vibrating sources transfer energy through the medium as sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q20",
    prompt: "A low-pitched drum sound compared with a high-pitched flute note has \u2014",
    options: [
      { id: "a", text: "Higher frequency" },
      { id: "b", text: "Lower frequency" },
      { id: "c", text: "No amplitude" },
      { id: "d", text: "Only ultrasonic waves" }
    ],
    answerId: "b",
    explanation: "Low pitch means lower frequency.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q21",
    prompt: "We hear our own voice differently in a recording partly because \u2014",
    options: [
      { id: "a", text: "Recordings remove all amplitude" },
      { id: "b", text: "Bone conduction and air paths differ when we speak versus when we only listen" },
      { id: "c", text: "The ear has no eardrum while speaking" },
      { id: "d", text: "Sound cannot reflect indoors" }
    ],
    answerId: "b",
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
      { id: "b", text: "Air (or another material medium) between bell and ear" },
      { id: "c", text: "Only pure hydrogen always" },
      { id: "d", text: "Only glass with no air" }
    ],
    answerId: "b",
    explanation: "Air carries the bell's vibrations to your ears.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-sound-b-q24",
    prompt: "Bats and dolphins both benefit from ultrasound mainly for \u2014",
    options: [
      { id: "a", text: "Photosynthesis" },
      { id: "b", text: "Echolocation \u2014 sensing surroundings with echoes" },
      { id: "c", text: "Producing magnetic fields" },
      { id: "d", text: "Changing seasons" }
    ],
    answerId: "b",
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
