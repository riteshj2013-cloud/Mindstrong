import type { ChapterDef, PrepQuestion } from "../types";

/** Sun, Moon and Solar System - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-space-a-q01",
    prompt: "What is the Sun?",
    options: [
      { id: "a", text: "A planet" },
      { id: "b", text: "A star" },
      { id: "c", text: "A satellite" },
      { id: "d", text: "A comet" }
    ],
    answerId: "b",
    explanation: "The Sun is a star. It is a huge ball of very hot gases that makes its own light and heat. It is the nearest star to Earth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q02",
    prompt: "Which planet is closest to the Sun?",
    options: [
      { id: "a", text: "Venus" },
      { id: "b", text: "Earth" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Mars" }
    ],
    answerId: "c",
    explanation: "Mercury is the first planet from the Sun. The order is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q03",
    prompt: "What causes day and night on Earth?",
    options: [
      { id: "a", text: "Earth going around the Sun" },
      { id: "b", text: "The Moon spinning on its axis" },
      { id: "c", text: "The Sun moving around Earth" },
      { id: "d", text: "Earth spinning on its axis" }
    ],
    answerId: "d",
    explanation: "Earth rotates (spins) on its axis once in about 24 hours. The side facing the Sun has day, and the side facing away has night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q04",
    prompt: "About how long does Earth take to go once around the Sun?",
    options: [
      { id: "a", text: "About 365\u00bc days" },
      { id: "b", text: "About 24 hours" },
      { id: "c", text: "About 29\u00bd days" },
      { id: "d", text: "About 12 hours" }
    ],
    answerId: "a",
    explanation: "One revolution of Earth around the Sun takes about 365\u00bc days. This is one year. 24 hours is one rotation, and about 29\u00bd days is one cycle of Moon phases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q05",
    prompt: "Why does the Moon shine at night?",
    options: [
      { id: "a", text: "It has fires burning on its surface." },
      { id: "b", text: "It reflects light from the Sun." },
      { id: "c", text: "It reflects light from the lamps in our cities." },
      { id: "d", text: "Its rocks glow because they are very hot." }
    ],
    answerId: "b",
    explanation: "The Moon has no light of its own. Sunlight falls on it and bounces off towards Earth, so we see it shining.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q06",
    prompt: "Which is the largest planet in our solar system?",
    options: [
      { id: "a", text: "Saturn" },
      { id: "b", text: "Neptune" },
      { id: "c", text: "Earth" },
      { id: "d", text: "Jupiter" }
    ],
    answerId: "d",
    explanation: "Jupiter is the biggest planet. More than a thousand Earths could fit inside it. Saturn is the second largest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q07",
    prompt: "Which planet is known as the \"Red Planet\"?",
    options: [
      { id: "a", text: "Mars" },
      { id: "b", text: "Venus" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Mercury" }
    ],
    answerId: "a",
    explanation: "Mars is covered with reddish, rusty dust and rocks, so it looks red in the sky.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q08",
    prompt: "On which night can we NOT see the Moon at all?",
    options: [
      { id: "a", text: "Full Moon night" },
      { id: "b", text: "First Quarter (half Moon) night" },
      { id: "c", text: "New Moon night" },
      { id: "d", text: "Gibbous Moon night" }
    ],
    answerId: "c",
    explanation: "At New Moon, the lit half of the Moon faces away from Earth. The side facing us is dark, so we cannot see the Moon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q09",
    prompt: "What is Earth's position in the order of planets from the Sun?",
    options: [
      { id: "a", text: "Second" },
      { id: "b", text: "Third" },
      { id: "c", text: "Fourth" },
      { id: "d", text: "Fifth" }
    ],
    answerId: "b",
    explanation: "Mercury is first, Venus is second, and Earth is third. Mars comes fourth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q10",
    prompt: "The Moon is Earth's:",
    options: [
      { id: "a", text: "Nearest planet" },
      { id: "b", text: "Nearest star" },
      { id: "c", text: "Natural satellite" },
      { id: "d", text: "Largest asteroid" }
    ],
    answerId: "c",
    explanation: "A satellite is a body that goes around a planet. The Moon goes around Earth naturally, so it is Earth's natural satellite.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q11",
    prompt: "Earth spins from west to east. Because of this, in which direction does the Sun appear to rise?",
    options: [
      { id: "a", text: "East" },
      { id: "b", text: "West" },
      { id: "c", text: "North" },
      { id: "d", text: "South" }
    ],
    answerId: "a",
    explanation: "As Earth turns from west to east, places on Earth turn towards the Sun from the eastern side. So the Sun seems to rise in the east and set in the west.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q12",
    prompt: "At 7 a.m., Arjun stands in an open field. The Sun has just risen in the east. In which direction will his shadow point?",
    options: [
      { id: "a", text: "East" },
      { id: "b", text: "North" },
      { id: "c", text: "West" },
      { id: "d", text: "South" }
    ],
    answerId: "c",
    explanation: "A shadow always falls on the side opposite to the light. The Sun is in the east, so Arjun's shadow points to the west.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q13",
    prompt: "At what time of a sunny day is your shadow the shortest?",
    options: [
      { id: "a", text: "Early morning" },
      { id: "b", text: "Around noon" },
      { id: "c", text: "Late afternoon" },
      { id: "d", text: "Just before sunset" }
    ],
    answerId: "b",
    explanation: "Around noon the Sun is highest in the sky, so light falls almost straight down and the shadow is shortest. In the morning and evening the Sun is low, so shadows are long.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q14",
    prompt: "It is daytime in India. Which part of Earth is having night at this moment?",
    options: [
      { id: "a", text: "The half of Earth facing away from the Sun" },
      { id: "b", text: "The half of Earth facing the Sun" },
      { id: "c", text: "Only the North Pole" },
      { id: "d", text: "No part; the whole Earth has day" }
    ],
    answerId: "a",
    explanation: "At any moment, the Sun lights only the half of Earth that faces it. The other half, facing away, has night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q15",
    prompt: "Two astronauts stand on the Moon without radios. One shouts, but the other cannot hear anything. Why?",
    options: [
      { id: "a", text: "The Moon is too cold for sound." },
      { id: "b", text: "The Moon is too dark for sound." },
      { id: "c", text: "The Moon's dust soaks up all sound." },
      { id: "d", text: "There is no air on the Moon to carry sound." }
    ],
    answerId: "d",
    explanation: "Sound needs air (or another material) to travel. The Moon has no air, so sound cannot travel from one astronaut to the other. Astronauts talk using radios.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q16",
    prompt: "Two nights after New Moon, Meena sees a thin, curved, bright shape of the Moon in the sky. What is this shape called?",
    options: [
      { id: "a", text: "Full Moon" },
      { id: "b", text: "Gibbous Moon" },
      { id: "c", text: "Half Moon" },
      { id: "d", text: "Crescent Moon" }
    ],
    answerId: "d",
    explanation: "Just after New Moon, we see only a thin sliver of the lit half. This curved shape is called a crescent. It grows bigger night by night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q17",
    prompt: "Kabir notices that the bright part of the Moon is getting bigger each night. Which phase will he see next when it stops growing?",
    options: [
      { id: "a", text: "Full Moon" },
      { id: "b", text: "New Moon" },
      { id: "c", text: "Thin crescent" },
      { id: "d", text: "No Moon at all" }
    ],
    answerId: "a",
    explanation: "When the lit part grows each night, the Moon is waxing. Waxing ends with the Full Moon, when we see the whole lit face as a round disc.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q18",
    prompt: "In a classroom model, a torch is the Sun and a ball is Earth. What should a student do with the ball to show day and night?",
    options: [
      { id: "a", text: "Keep the ball still and switch the torch on and off." },
      { id: "b", text: "Move the torch around the still ball." },
      { id: "c", text: "Spin the ball on its own axis while the torch stays still." },
      { id: "d", text: "Hide the ball behind a book." }
    ],
    answerId: "c",
    explanation: "Day and night happen because Earth spins on its axis. Spinning the ball in front of a steady torch shows each place moving into light (day) and then into darkness (night).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q19",
    prompt: "Every fourth year, February has 29 days. Why do we add this extra day?",
    options: [
      { id: "a", text: "Because the Moon goes around Earth faster that year." },
      { id: "b", text: "Because Earth spins slower that year." },
      { id: "c", text: "Because the Sun moves away from Earth that year." },
      { id: "d", text: "Because Earth takes about 365\u00bc days to go around the Sun, and four quarter days add up to one day." }
    ],
    answerId: "d",
    explanation: "Our normal calendar year has 365 days, but Earth's revolution takes about 365\u00bc days. After four years, the extra quarters add up to about one full day, so we add February 29. That year is called a leap year.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q20",
    prompt: "The footprints left by astronauts on the Moon are still there after many years. What is the best reason?",
    options: [
      { id: "a", text: "The Moon's soil is like wet cement." },
      { id: "b", text: "The Moon has no air or water, so no wind or rain wipes them away." },
      { id: "c", text: "The Moon is always dark." },
      { id: "d", text: "The Moon's gravity is stronger than Earth's." }
    ],
    answerId: "b",
    explanation: "On Earth, wind and rain slowly wipe away footprints. The Moon has no air and no liquid water, so there is no wind or rain to disturb the dust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q21",
    prompt: "In June, India (in the northern half of Earth) has summer. What season is Australia (in the southern half of Earth) most likely having in June?",
    options: [
      { id: "a", text: "Summer" },
      { id: "b", text: "Spring" },
      { id: "c", text: "Winter" },
      { id: "d", text: "The same season as everywhere else on Earth" }
    ],
    answerId: "c",
    explanation: "In June, the northern half of Earth leans towards the Sun and has summer. At the same time, the southern half leans away from the Sun, so Australia has winter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q22",
    prompt: "Solve the riddle: \"I am not the closest planet to the Sun, but I am the hottest. My thick, cloudy air traps the Sun's heat like a blanket.\" Who am I?",
    options: [
      { id: "a", text: "Mercury" },
      { id: "b", text: "Venus" },
      { id: "c", text: "Mars" },
      { id: "d", text: "Jupiter" }
    ],
    answerId: "b",
    explanation: "Venus is the second planet from the Sun, yet it is hotter than Mercury. Its very thick layer of gases and clouds traps heat, so it stays extremely hot day and night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q23",
    prompt: "Imagine Earth stopped spinning on its axis but still kept going around the Sun. What would most likely happen?",
    options: [
      { id: "a", text: "Nothing would change." },
      { id: "b", text: "Every place would have night forever." },
      { id: "c", text: "Earth would stop having years." },
      { id: "d", text: "Each place would have very long days and very long nights, lasting months." }
    ],
    answerId: "d",
    explanation: "Day and night come from spinning. Without spinning, one side would face the Sun for a very long time as Earth slowly moved along its orbit. Each place would get months of daylight followed by months of darkness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-a-q24",
    prompt: "Which statement best explains why Earth has seasons?",
    options: [
      { id: "a", text: "Earth's axis is tilted, so as Earth goes around the Sun, each half gets more direct sunlight at some times of the year and less at other times." },
      { id: "b", text: "Earth moves very close to the Sun in summer and very far away in winter." },
      { id: "c", text: "The Sun becomes hotter in summer and cooler in winter." },
      { id: "d", text: "The Moon blocks sunlight during winter." }
    ],
    answerId: "a",
    explanation: "Seasons are caused by the tilt of Earth's axis as it revolves. When your half of Earth leans towards the Sun, sunlight is more direct and days are longer, so it is summer. Distance is not the main reason, because the two halves of Earth have opposite seasons at the same time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-space-b-q01",
    prompt: "What does the Sun give to Earth?",
    options: [
      { id: "a", text: "Only light" },
      { id: "b", text: "Only heat" },
      { id: "c", text: "Both light and heat" },
      { id: "d", text: "Neither light nor heat" }
    ],
    answerId: "c",
    explanation: "The Sun gives Earth both light and heat. Plants use sunlight to make food, and the Sun's heat keeps Earth warm enough for living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q02",
    prompt: "How many planets are there in our solar system?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "There are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto is now called a dwarf planet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q03",
    prompt: "Which planet is farthest from the Sun?",
    options: [
      { id: "a", text: "Uranus" },
      { id: "b", text: "Saturn" },
      { id: "c", text: "Pluto" },
      { id: "d", text: "Neptune" }
    ],
    answerId: "d",
    explanation: "Neptune is the eighth and last planet from the Sun. Pluto is farther in parts of its path, but it is a dwarf planet, not one of the eight planets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q04",
    prompt: "Which planet is most famous for its bright, beautiful rings?",
    options: [
      { id: "a", text: "Saturn" },
      { id: "b", text: "Mars" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Earth" }
    ],
    answerId: "a",
    explanation: "Saturn has wide, bright rings made of countless pieces of ice and rock. They are easy to see through a small telescope.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q05",
    prompt: "What is the imaginary line around which Earth spins called?",
    options: [
      { id: "a", text: "Orbit" },
      { id: "b", text: "Equator" },
      { id: "c", text: "Axis" },
      { id: "d", text: "Horizon" }
    ],
    answerId: "c",
    explanation: "Earth spins around an imaginary line that runs through the North and South Poles. This line is called the axis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q06",
    prompt: "What is the path along which Earth moves around the Sun called?",
    options: [
      { id: "a", text: "Axis" },
      { id: "b", text: "Orbit" },
      { id: "c", text: "Shadow" },
      { id: "d", text: "Pole" }
    ],
    answerId: "b",
    explanation: "The path Earth follows as it goes around the Sun is its orbit. One trip along the orbit takes about one year.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q07",
    prompt: "The phases of the Moon repeat, from one Full Moon to the next, about every:",
    options: [
      { id: "a", text: "7 days" },
      { id: "b", text: "15 days" },
      { id: "c", text: "29\u00bd days" },
      { id: "d", text: "365 days" }
    ],
    answerId: "c",
    explanation: "The Moon goes from Full Moon to New Moon and back to Full Moon in about 29\u00bd days, which is close to one month.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q08",
    prompt: "Which is the only planet known to have life?",
    options: [
      { id: "a", text: "Mars" },
      { id: "b", text: "Venus" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Earth" }
    ],
    answerId: "d",
    explanation: "Earth is the only planet where we know life exists. It has air, liquid water, and a temperature that is just right for living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q09",
    prompt: "What is Pluto called today?",
    options: [
      { id: "a", text: "A dwarf planet" },
      { id: "b", text: "The ninth planet" },
      { id: "c", text: "A star" },
      { id: "d", text: "A moon of Earth" }
    ],
    answerId: "a",
    explanation: "Pluto was once counted as the ninth planet. Scientists now call it a dwarf planet because it is very small and shares its path with many other icy objects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q10",
    prompt: "The asteroid belt, a band of many rocky pieces, lies between which two planets?",
    options: [
      { id: "a", text: "Earth and Mars" },
      { id: "b", text: "Mars and Jupiter" },
      { id: "c", text: "Jupiter and Saturn" },
      { id: "d", text: "Mercury and Venus" }
    ],
    answerId: "b",
    explanation: "The asteroid belt lies between Mars (the fourth planet) and Jupiter (the fifth planet). It separates the small rocky planets from the giant planets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q11",
    prompt: "The Sun is much bigger than Earth, yet it looks like a small disc in the sky. Why?",
    options: [
      { id: "a", text: "The Sun is actually smaller than Earth." },
      { id: "b", text: "The Sun is very, very far away from Earth." },
      { id: "c", text: "Clouds always cover most of the Sun." },
      { id: "d", text: "Earth's air makes the Sun shrink." }
    ],
    answerId: "b",
    explanation: "Things look smaller when they are far away, like an aeroplane high in the sky. The Sun is huge, but it is so far away that it looks small.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q12",
    prompt: "Gravity on the Moon is much weaker than on Earth (about one-sixth). If Priya jumps with the same effort on the Moon as she does on Earth, she will jump:",
    options: [
      { id: "a", text: "Lower" },
      { id: "b", text: "Exactly the same height" },
      { id: "c", text: "Much higher" },
      { id: "d", text: "Not at all" }
    ],
    answerId: "c",
    explanation: "The Moon pulls things down much less strongly than Earth does. So with the same jump, Priya would rise much higher and come down more slowly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q13",
    prompt: "Rohan observes the Moon for many months. He always sees the same dark patches on it. Why?",
    options: [
      { id: "a", text: "The Moon does not move at all." },
      { id: "b", text: "The same side of the Moon always faces Earth." },
      { id: "c", text: "Earth always blocks the other side." },
      { id: "d", text: "The other side of the Moon has no patches." }
    ],
    answerId: "b",
    explanation: "The Moon spins once in the same time it takes to go once around Earth. Because of this, the same face of the Moon always points towards us, and we see the same patches.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q14",
    prompt: "Which group contains only the four rocky planets closest to the Sun?",
    options: [
      { id: "a", text: "Mercury, Venus, Earth, Mars" },
      { id: "b", text: "Mercury, Venus, Jupiter, Saturn" },
      { id: "c", text: "Earth, Mars, Jupiter, Neptune" },
      { id: "d", text: "Venus, Earth, Saturn, Uranus" }
    ],
    answerId: "a",
    explanation: "The four inner planets, Mercury, Venus, Earth, and Mars, have hard, rocky surfaces. The four outer planets are giant planets made mostly of gases and ices.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q15",
    prompt: "A memory trick for the order of planets is \"My Very Educated Mother Just Served Us Noodles.\" Which planet does the word \"Us\" stand for?",
    options: [
      { id: "a", text: "Saturn" },
      { id: "b", text: "Neptune" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Uranus" }
    ],
    answerId: "d",
    explanation: "Each first letter matches a planet in order: My (Mercury), Very (Venus), Educated (Earth), Mother (Mars), Just (Jupiter), Served (Saturn), Us (Uranus), Noodles (Neptune).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q16",
    prompt: "After Full Moon, the bright part of the Moon gets smaller night by night. What is this called?",
    options: [
      { id: "a", text: "Waxing" },
      { id: "b", text: "Eclipse" },
      { id: "c", text: "Rotation" },
      { id: "d", text: "Waning" }
    ],
    answerId: "d",
    explanation: "When the lit part of the Moon we see shrinks, the Moon is waning. When it grows, the Moon is waxing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q17",
    prompt: "Tara puts a stick upright in the ground. At 4 p.m., the Sun is in the western sky. In which direction will the stick's shadow point?",
    options: [
      { id: "a", text: "East" },
      { id: "b", text: "West" },
      { id: "c", text: "North" },
      { id: "d", text: "Straight down, with no shadow" }
    ],
    answerId: "a",
    explanation: "A shadow points away from the light. In the afternoon the Sun is in the west, so the shadow points towards the east.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q18",
    prompt: "Sunita in Delhi is having breakfast in the morning. Her cousin lives in the USA, almost on the opposite side of Earth. What is her cousin most likely doing?",
    options: [
      { id: "a", text: "Also having breakfast in the morning" },
      { id: "b", text: "Eating lunch at noon" },
      { id: "c", text: "Getting ready for bed at night" },
      { id: "d", text: "Watching the same sunrise" }
    ],
    answerId: "c",
    explanation: "Places on opposite sides of Earth have opposite times. When Delhi is turning towards the Sun (morning), the far side is turning away from it, so it is evening or night there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q19",
    prompt: "Venus is sometimes called the \"morning star\" or \"evening star\" because it shines so brightly. Which statement about Venus is correct?",
    options: [
      { id: "a", text: "It is a planet that shines by reflecting sunlight." },
      { id: "b", text: "It is a real star that makes its own light." },
      { id: "c", text: "It is a second Moon of Earth." },
      { id: "d", text: "It shines because of lights built by people." }
    ],
    answerId: "a",
    explanation: "Venus is a planet, not a star. Its thick white clouds reflect a lot of sunlight, so it looks very bright, often just after sunset or just before sunrise.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q20",
    prompt: "Which planet takes the longest time to go once around the Sun?",
    options: [
      { id: "a", text: "Mercury" },
      { id: "b", text: "Earth" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Neptune" }
    ],
    answerId: "d",
    explanation: "Planets farther from the Sun have much longer paths and move more slowly. Neptune is the farthest planet, so its year is the longest, about 165 Earth years.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q21",
    prompt: "In a dark room, Anu holds a white ball (the Moon) at arm's length. A lamp (the Sun) is on the far side of the room. When she holds the ball directly between her eyes and the lamp, what will she see on the ball?",
    options: [
      { id: "a", text: "Almost no lit part, like a New Moon" },
      { id: "b", text: "A fully lit round face, like a Full Moon" },
      { id: "c", text: "A half-lit ball, like a half Moon" },
      { id: "d", text: "A ball glowing with its own light" }
    ],
    answerId: "a",
    explanation: "When the ball is between her and the lamp, the lit side faces the lamp, away from Anu. She sees the dark side. This is just like a New Moon, when the Moon is between Earth and the Sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q22",
    prompt: "Neel says, \"It is hot in summer because Earth is closest to the Sun then.\" Which fact best shows that Neel is wrong?",
    options: [
      { id: "a", text: "The Sun is a star." },
      { id: "b", text: "When India has summer, Australia has winter at the same time, even though both are at the same distance from the Sun." },
      { id: "c", text: "Earth takes 24 hours to spin once." },
      { id: "d", text: "The Moon reflects sunlight." }
    ],
    answerId: "b",
    explanation: "India and Australia are on the same Earth, so they are at the same distance from the Sun. If distance caused seasons, they would have the same season. They have opposite seasons because of Earth's tilt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q23",
    prompt: "A solar eclipse happens when the Moon passes directly between the Sun and Earth and blocks the Sun. In which phase must the Moon be at that time?",
    options: [
      { id: "a", text: "Full Moon" },
      { id: "b", text: "First Quarter" },
      { id: "c", text: "New Moon" },
      { id: "d", text: "Gibbous Moon" }
    ],
    answerId: "c",
    explanation: "When the Moon is between the Sun and Earth, its lit side faces away from us. That position is the New Moon. So a solar eclipse can only happen at New Moon (though not every New Moon has one).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-space-b-q24",
    prompt: "Find the odd one out: Sun, Pole Star, Sirius, Moon.",
    options: [
      { id: "a", text: "Sun" },
      { id: "b", text: "Pole Star" },
      { id: "c", text: "Sirius" },
      { id: "d", text: "Moon" }
    ],
    answerId: "d",
    explanation: "The Sun, the Pole Star, and Sirius are all stars that make their own light. The Moon is a satellite that only reflects sunlight, so it is the odd one out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf1e",
    title: "Sun, Moon and planets",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "The Sun is our nearest star. Earth spins for day and night and orbits the Sun for a year.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Sun", reveal: "Nearest star; heat and light", emoji: "\u2600\ufe0f" },
      { label: "Day and night", reveal: "Earth spins on its axis", emoji: "\ud83c\udf0d" },
      { label: "Year", reveal: "Earth orbits the Sun", emoji: "\ud83d\udcc5" },
      { label: "Moon phases", reveal: "Changing shapes as Moon orbits Earth", emoji: "\ud83c\udf19" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "What causes day and night?",
    options: [
        { id: "a", text: "Sun orbits Earth" },
        { id: "b", text: "Earth spinning on its axis" },
        { id: "c", text: "Moon blocks Sun" },
        { id: "d", text: "Clouds" }
    ],
    answerId: "b",
    why: "Earth's rotation causes day and night.",
    visual: "water-cycle",
    speak: "What causes day and night?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Sun is a star", "Spin makes day/night", "Orbit makes a year", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5ScienceSpace: ChapterDef = {
  id: "sun-moon-space",
  title: "Sun, Moon and Solar System",
  emoji: "\ud83c\udf1e",
  blurb: "Day, night, Moon and planets",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "earth-space",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "earth-space",
      questions: SET_B,
    },
  ],
  paperTopics: ["earth-space", "living-things"],
};

export const g5ScienceSpaceQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
