#!/usr/bin/env python3
"""Author G8 Science Ch4–6 markdown sources + emit TS modules + hints + wire catalog."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import REPO, OUT, DOCS, science_sets, lesson_ts, emit_module

GRADE_DOCS = DOCS / "grade-8"
ROOT = REPO  # content lives in this checkout


def q(stem: str, options: list[str], answer: str, explanation: str) -> dict:
    assert answer in "ABCD" and len(options) == 4
    return {"stem": stem, "options": options, "answer": answer, "explanation": explanation}


def fmt_quiz(title: str, items: list[dict]) -> str:
    lines = [f"## {title}", ""]
    for i, item in enumerate(items, 1):
        lines.append(f"### Q{i}")
        lines.append(f"**Stem:** {item['stem']}")
        lines.append("**Options:**")
        for letter, text in zip("ABCD", item["options"]):
            lines.append(f"{letter}) {text}")
        lines.append(f"**Answer:** {item['answer']}")
        lines.append(f"**Explanation:** {item['explanation']}")
        lines.append("")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Chapter 4 — Combustion and Flame
# ---------------------------------------------------------------------------

COMBUSTION_LESSON = """# Chapter 4: Combustion and Flame

## Meta
- Grade: 8
- Subject: Science
- Theme tags: combustion, flame, fuel, ignition temperature, fire triangle, calorific value, pollution
- Source basis: NCERT Class 8 themes (original items only)

## Learning objectives
- Distinguish combustible from non-combustible substances and give everyday examples of each.
- Explain ignition temperature and why some fuels catch fire more easily than others.
- Describe rapid, spontaneous, and explosive combustion, and list the three conditions of the fire triangle.
- Identify the zones of a candle flame and link colour to temperature.
- Compare fuels using calorific value, and name harmful products of burning fossil fuels.
- Suggest safe ways to control fire and choose cleaner fuels such as LPG and CNG for common uses.

## Interactive lesson outline

### Scene 1: Will it burn?
- **Visual:** A sorting table with wood, paper, coal, iron nail, glass, stone, and kerosene. A virtual match approaches each sample.
- **TTS:**
  - "A substance that burns in air to give heat and light is called combustible."
  - "Wood, coal, kerosene, and LPG are combustible. Iron, glass, and stone are non-combustible."
  - "Burning with heat and light is combustion. The substance that burns is the fuel."
- **Interaction:** Drag each sample into Combustible or Non-combustible. Correct drops glow; wrong ones bounce back with a hint.

### Scene 2: Ignition temperature and types of combustion
- **Visual:** Three clips play: a match lighting paper (rapid), a heap of oily rags slowly smoking then flaming (spontaneous), and a firecracker bursting (explosion). A thermometer graphic shows ignition temperature.
- **TTS:**
  - "Ignition temperature is the lowest temperature at which a substance catches fire."
  - "Rapid combustion gives heat and light quickly, like LPG in a stove."
  - "Spontaneous combustion starts on its own, without an external flame, when a substance slowly heats up."
  - "An explosion is a sudden reaction that releases a large amount of gas and heat with a bang."
- **Interaction:** Match each video clip to Rapid, Spontaneous, or Explosion. Feedback names one more real-life example.

### Scene 3: The fire triangle and putting fires out
- **Visual:** A triangle labelled Fuel, Oxygen (air), and Heat. Removing any side collapses the fire. Extinguishers appear: water for paper/wood, CO2 or dry powder for oil and electrical fires, a fire blanket for a small kitchen blaze.
- **TTS:**
  - "Fire needs fuel, oxygen, and heat. Remove any one and the fire goes out."
  - "Water cools the fuel below its ignition temperature, but never pour water on oil or electrical fires."
  - "Carbon dioxide and dry powder cut off the air supply."
  - "A fire blanket smothers flames by blocking oxygen."
- **Interaction:** For each fire scene, pick the safest control method. Wrong choices flash a safety tip.

### Scene 4: Zones of a candle flame
- **Visual:** A labelled candle flame with three zones: dark innermost (unburnt wax vapour), middle yellow luminous zone, and outermost blue non-luminous zone. A thin wire held across shows which zone is hottest.
- **TTS:**
  - "A candle flame has three main zones."
  - "The innermost zone is dark and coolest. It has unburnt vapour."
  - "The middle luminous zone is yellow because of glowing carbon particles. It gives most of the light."
  - "The outermost non-luminous zone is blue and hottest. Complete combustion happens here."
- **Interaction:** Tap each zone to hear its job, then place a matchstick tip in the hottest zone to blacken or ignite as predicted.

### Scene 5: Fuels, calorific value, and clean choices
- **Visual:** A fuel comparison board showing wood, coal, petrol, LPG, and CNG with bars for calorific value. A city skyline shows smoke, acid rain, and a cleaner CNG bus.
- **TTS:**
  - "Calorific value is the heat produced when one kilogram of fuel burns completely. It is measured in kilojoules per kilogram."
  - "A good fuel has a high calorific value, burns without much smoke, and is easy and safe to store."
  - "Burning coal and petrol can release carbon dioxide, sulphur dioxide, and oxides of nitrogen."
  - "These gases can cause acid rain and add to global warming."
  - "LPG and CNG burn more cleanly and are preferred for homes and many vehicles."
- **Interaction:** Rank fuels by calorific value, then match each pollution problem to the gas that mainly causes it. A recap card lists key ideas: combustible fuels, ignition temperature, types of combustion, fire triangle, flame zones, and clean fuels.
"""

COMBUSTION_A = [
    q("A substance that burns in air to produce heat and light is called a —",
      ["Non-combustible substance", "Combustible substance", "Coolant", "Insulator"], "B",
      "Combustible substances catch fire and burn in air, giving heat and light. Non-combustible substances do not burn."),
    q("Which of these is a non-combustible substance?",
      ["Wood", "Paper", "Kerosene", "Glass"], "D",
      "Glass does not burn in air. Wood, paper, and kerosene are fuels that can burn."),
    q("The lowest temperature at which a substance catches fire is called its —",
      ["Boiling point", "Melting point", "Ignition temperature", "Freezing point"], "C",
      "Ignition temperature is the lowest temperature at which a substance starts burning."),
    q("LPG burns with a blue flame on a stove almost as soon as the burner is lit. This is an example of —",
      ["Spontaneous combustion", "Rapid combustion", "Explosion only", "Smouldering without oxygen"], "B",
      "Rapid combustion produces heat and light quickly. LPG and CNG show rapid combustion."),
    q("Oily rags left in a warm cupboard slowly heat up and catch fire without a match. This is —",
      ["Rapid combustion", "Spontaneous combustion", "Complete combustion only", "An acid–base reaction"], "B",
      "Spontaneous combustion begins on its own when a substance slowly reaches its ignition temperature."),
    q("A firecracker bursting with a loud bang is an example of —",
      ["Spontaneous combustion", "An explosion", "Slow rusting", "Photosynthesis"], "B",
      "An explosion is a sudden combustion that releases a large amount of gas and heat with sound."),
    q("The three essential conditions for a fire are fuel, heat, and —",
      ["Nitrogen", "Oxygen (air)", "Carbon dioxide", "Argon"], "B",
      "Fire needs fuel, oxygen from air, and enough heat. Removing any one puts the fire out."),
    q("Why should you never pour water on a burning oil pan?",
      ["Water raises the ignition temperature of oil", "Water sinks under oil and the oil can splash and spread the fire", "Water turns oil into LPG", "Water increases the calorific value of oil"], "B",
      "Oil floats on water. Water can vaporise under the oil and throw burning oil around, spreading the fire."),
    q("Carbon dioxide fire extinguishers put out fire mainly by —",
      ["Raising the fuel's ignition temperature", "Cutting off the supply of air (oxygen)", "Adding more fuel", "Increasing the flame temperature"], "B",
      "CO2 is denser than air and forms a blanket that cuts off oxygen from the fuel."),
    q("In a candle flame, the outermost blue zone is —",
      ["The coolest zone", "The hottest zone with complete combustion", "Made only of unburnt wax", "Where no oxygen reaches"], "B",
      "The outermost non-luminous zone has plenty of air, so combustion is complete and the temperature is highest."),
    q("The yellow luminous zone of a candle flame gives light mainly because of —",
      ["Glowing unburnt carbon particles", "Completely burnt water vapour only", "Cold air from the room", "Nitrogen gas"], "A",
      "Incomplete burning in the middle zone produces hot carbon particles that glow and give yellow light."),
    q("The innermost dark zone of a candle flame contains mainly —",
      ["Completely burnt ash", "Unburnt wax vapour", "Liquid water", "Solid wax only"], "B",
      "Wax vapour rises into the innermost zone before it mixes well with air, so little burning happens there."),
    q("Calorific value of a fuel is the heat produced when —",
      ["One gram of fuel melts", "One kilogram of fuel burns completely", "One litre of water freezes", "One mole of oxygen is cooled"], "B",
      "Calorific value is heat from complete burning of 1 kg of fuel, usually in kJ/kg."),
    q("Which unit is commonly used for calorific value?",
      ["newton", "pascal", "kilojoule per kilogram (kJ/kg)", "metre per second"], "C",
      "Calorific value is heat energy per unit mass, so kJ/kg is the usual unit in school science."),
    q("Which of these is generally considered a cleaner fuel for city buses?",
      ["Raw coal only", "Wet wood", "CNG", "Damp cow-dung cakes"], "C",
      "Compressed natural gas (CNG) burns more cleanly with less smoke than coal or wood."),
    q("Burning coal that contains sulphur can produce sulphur dioxide, which may lead to —",
      ["Acid rain", "An increase in soil nitrogen only", "Colder winters only", "More oxygen in air"], "A",
      "Sulphur dioxide dissolves in rainwater and forms acids, contributing to acid rain."),
    q("Which gas released by burning fossil fuels is most linked to global warming?",
      ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], "C",
      "Extra carbon dioxide traps heat in the atmosphere and contributes to global warming."),
    q("A good domestic fuel should —",
      ["Have a very low calorific value and produce thick smoke", "Be hard to light and leave a lot of ash", "Have a high calorific value and burn with little smoke", "Be stored as an open powder near a flame"], "C",
      "Useful fuels give plenty of heat, light easily in a controlled way, and produce little harmful smoke."),
    q("White phosphorus catches fire in air at room temperature because —",
      ["Its ignition temperature is below room temperature", "It is non-combustible", "It needs no oxygen", "It is colder than ice"], "A",
      "If the ignition temperature is lower than the surroundings, the substance can catch fire easily."),
    q("Forest fires can start when dry leaves catch fire from the heat of the Sun because dry leaves have —",
      ["A very high ignition temperature", "A low ignition temperature", "No carbon", "Only nitrogen"], "B",
      "Dry leaves ignite at a relatively low temperature, so strong heating can start a fire."),
    q("The fuel used in many homes for cooking, stored in cylinders, is —",
      ["LPG", "Solid iron", "Glass wool", "Pure nitrogen"], "A",
      "Liquefied petroleum gas (LPG) is a common cooking fuel stored under pressure in cylinders."),
    q("Incomplete combustion of a carbon fuel often produces —",
      ["Only pure oxygen", "Carbon monoxide, which is poisonous", "More nitrogen for breathing", "Only harmless steam"], "B",
      "When there is not enough air, carbon burns to carbon monoxide, a dangerous gas."),
    q("Water puts out a wood fire mainly by —",
      ["Adding more oxygen", "Cooling the fuel below its ignition temperature and limiting air contact", "Turning wood into coal", "Raising the flame temperature"], "B",
      "Water cools the burning material and the steam formed can also help keep air away."),
    q("Which statement about combustion is correct?",
      ["Combustion never needs oxygen", "Combustion always happens below freezing point", "Combustion is a chemical process that needs a combustible substance and usually oxygen", "Only metals can burn"], "C",
      "Combustion is the burning of a fuel, usually in oxygen, that releases heat and often light."),
]

COMBUSTION_B = [
    q("Which pair correctly matches a substance with whether it is combustible?",
      ["Stone — combustible; coal — non-combustible", "Iron nail — combustible; paper — non-combustible", "Kerosene — combustible; glass — non-combustible", "Water — combustible; wood — non-combustible"], "C",
      "Kerosene burns; glass does not. Stone, iron, and water are not fuels in ordinary air."),
    q("A matchstick tip has chemicals with a low ignition temperature so that —",
      ["The stick never burns", "Friction heat can light the tip easily", "The tip becomes an insulator", "Oxygen is removed from air"], "B",
      "The tip chemicals ignite with the small heat from rubbing, then light the wood of the stick."),
    q("Spontaneous combustion differs from rapid combustion because it —",
      ["Always needs a match flame at the start", "Can start without an external flame when heat builds up slowly", "Never produces heat", "Happens only under water"], "B",
      "In spontaneous combustion, slow heating reaches the ignition temperature without a separate flame."),
    q("During an explosion, a large volume of gas forms suddenly. This mainly causes —",
      ["A quiet cooling effect", "A sudden increase in pressure and a loud sound", "The fuel to freeze", "Air to turn into liquid oxygen"], "B",
      "Rapid gas production raises pressure violently, which we hear and feel as an explosion."),
    q("Cutting off air from a small fire with a wet blanket works because —",
      ["The blanket increases oxygen", "Oxygen needed for burning is blocked", "The fuel's calorific value rises", "Ignition temperature becomes zero"], "B",
      "Without oxygen, the fire triangle is broken and burning stops."),
    q("For an electrical fire in a socket, the safer first action is usually to —",
      ["Spray plenty of water on the wires", "Switch off the power if safe, and use a CO2 or dry-powder extinguisher — not water", "Pour kerosene to dilute the fire", "Blow with a fan to add more air"], "B",
      "Water conducts electricity and can cause shock. Cut power and use a suitable extinguisher."),
    q("A thin copper wire held across a candle flame gets hottest in the —",
      ["Innermost dark zone", "Middle yellow zone only at the wick", "Outermost blue zone", "Cold air far below the candle"], "C",
      "The outer non-luminous zone has complete combustion and the highest temperature."),
    q("Goldsmiths often use the outermost zone of a flame when heating gold because —",
      ["It is the coolest and darkest", "It gives the highest temperature for melting and working the metal", "It contains only unburnt wax", "It has no oxygen"], "B",
      "The outer zone burns completely and is hottest, which helps melt or work metals."),
    q("Which fuel usually has a higher calorific value than wood?",
      ["Wet leaves", "Damp cow dung", "LPG", "Green twigs"], "C",
      "LPG releases much more heat per kilogram than wood or wet biomass fuels."),
    q("Acid rain is linked to oxides of sulphur and nitrogen mainly because they —",
      ["Make rain alkaline like soap", "Dissolve in rainwater to form acids", "Turn rain into pure oxygen", "Freeze all clouds instantly"], "B",
      "These oxides react with water in the air to form acids that fall as acid rain."),
    q("Choosing CNG over petrol for many vehicles helps the environment mainly by —",
      ["Producing more thick black smoke", "Reducing harmful exhaust gases compared with petrol or diesel", "Removing all oxygen from cities", "Increasing sulphur in the air"], "B",
      "CNG burns more cleanly, so vehicles release fewer pollutants."),
    q("A substance with a very high ignition temperature is —",
      ["Easier to set on fire with a small spark", "Harder to set on fire under normal conditions", "Always explosive", "Always a liquid"], "B",
      "High ignition temperature means you must heat it a lot before it catches fire."),
    q("Inflammable substances such as petrol and alcohol —",
      ["Have high ignition temperatures and never burn", "Have low ignition temperatures and catch fire easily", "Cannot be fuels", "Burn only in pure nitrogen"], "B",
      "Inflammable liquids ignite easily because their ignition temperatures are low."),
    q("The middle zone of a candle flame is luminous mainly due to —",
      ["Complete combustion of all carbon", "Partial combustion leaving hot carbon particles", "Ice crystals in the flame", "Only ultraviolet light"], "B",
      "Limited air in the middle zone leaves glowing carbon particles that emit yellow light."),
    q("Which product of incomplete combustion is especially dangerous in closed rooms?",
      ["Water vapour only", "Carbon monoxide", "Argon", "Pure nitrogen"], "B",
      "Carbon monoxide binds strongly in blood and can be fatal in poorly ventilated spaces."),
    q("The fire triangle collapses if you remove —",
      ["Only the colour of the flame", "Any one of fuel, oxygen, or heat", "Only the sound of burning", "Gravity"], "B",
      "All three conditions are needed. Take away fuel, air, or heat and burning stops."),
    q("Calorific value helps us compare fuels because it tells —",
      ["How heavy the fuel cylinder is", "How much heat one kilogram of fuel can give when burnt completely", "The colour of the flame only", "The melting point of glass"], "B",
      "Fuels with higher calorific value give more heat per kilogram."),
    q("Burning plastics and some synthetic materials can be especially harmful because they may release —",
      ["Only oxygen", "Toxic gases and smoke", "Pure drinking water", "Extra nitrogen for plants only"], "B",
      "Many plastics produce poisonous gases and thick smoke when they burn."),
    q("A candle flame goes out when covered with a glass because —",
      ["The wax becomes non-combustible instantly", "Oxygen inside is used up and not replaced", "The ignition temperature rises to infinity", "Glass adds nitrogen fuel"], "B",
      "The flame uses the trapped oxygen; when oxygen is gone, combustion stops."),
    q("Which is the best description of a fuel?",
      ["Any substance that never reacts with oxygen", "A combustible substance that is burnt to obtain heat (and often light)", "Only solid metals", "Only water and sand"], "B",
      "Fuels are materials we burn on purpose for useful heat or light."),
    q("Unburnt carbon particles from smoky fuels can cause —",
      ["Clearer lungs", "Respiratory problems and blackening of buildings", "More ozone at ground level that always heals lungs", "Only a sweet smell"], "B",
      "Soot and smoke irritate the lungs and dirty walls and monuments."),
    q("Dry powder extinguishers are useful for oil fires because they —",
      ["Add water under the oil", "Cut off oxygen without spreading burning oil the way water can", "Increase the oil's calorific value", "Turn oil into LPG"], "B",
      "Powder blankets the burning oil and stops air reaching it."),
    q("Why is the innermost zone of a flame least hot?",
      ["It has the most oxygen and complete burning", "Fuel vapour there has not mixed well with air, so little combustion occurs", "It is made of solid diamond", "It is outside the flame entirely"], "B",
      "Without enough oxygen mixed in, burning is minimal and the zone stays cooler."),
    q("Global warming concerns from fossil fuels are mainly about —",
      ["Extra carbon dioxide trapping heat", "Extra argon making rain pink", "Less nitrogen in fertilisers only", "Colder ocean water from more oxygen"], "A",
      "CO2 from burning coal, oil, and gas adds to the greenhouse effect."),
]

# ---------------------------------------------------------------------------
# Chapter 5 — Sound
# ---------------------------------------------------------------------------

SOUND_LESSON = """# Chapter 5: Sound

## Meta
- Grade: 8
- Subject: Science
- Theme tags: sound, vibration, frequency, amplitude, pitch, loudness, ultrasound, echo, ear, noise
- Source basis: NCERT Class 8 themes (original items only)

## Learning objectives
- Explain that sound is produced by vibrating objects and needs a material medium to travel.
- Relate amplitude to loudness and frequency to pitch, and use hertz as the unit of frequency.
- State the approximate audible range for humans and give examples of infrasound and ultrasound.
- Describe how the human ear receives sound, in simple school-level steps.
- Distinguish music from noise and list harms and controls for noise pollution.
- Explain echo and reverberation, and name uses of ultrasound such as SONAR and medical scans.

## Interactive lesson outline

### Scene 1: Sound needs vibration
- **Visual:** A tuning fork struck beside a hanging ping-pong ball; a guitar string; a drum skin with rice grains dancing. Slow-motion shows to-and-fro motion.
- **TTS:**
  - "Sound is produced when objects vibrate."
  - "Vibration means a rapid to-and-fro motion."
  - "If vibrations stop, the sound stops."
- **Interaction:** Tap each object to start or stop vibration and watch the linked sound wave appear or fade.

### Scene 2: Sound needs a medium
- **Visual:** A bell jar with a ringing electric bell. Air is pumped out and the sound fades, though the hammer still moves.
- **TTS:**
  - "Sound needs a material medium — solid, liquid, or gas."
  "Sound cannot travel through vacuum."
  - "In space, astronauts use radios because there is almost no air to carry sound."
- **Interaction:** Pump air out and in while watching a loudness meter fall and rise.

### Scene 3: Loudness, pitch, and the wave picture
- **Visual:** Two wave graphs. Tall waves mean large amplitude and loud sound. Waves packed closer mean higher frequency and higher pitch. A slider changes each property.
- **TTS:**
  - "Amplitude is the maximum distance a vibrating particle moves from its rest position."
  - "Larger amplitude means louder sound."
  - "Frequency is the number of vibrations in one second. Its unit is hertz (Hz)."
  - "Higher frequency means higher pitch."
- **Interaction:** Match four wave sketches to soft/low, soft/high, loud/low, and loud/high.

### Scene 4: Audible range, ultra and infra, and the ear
- **Visual:** A frequency number line from 1 Hz to 100,000 Hz with bands for infrasound, audible sound, and ultrasound. Beside it, a simple ear diagram: pinna, ear canal, eardrum, middle-ear bones, inner ear.
- **TTS:**
  - "Humans usually hear from about 20 Hz to 20,000 Hz."
  - "Sounds below 20 Hz are infrasound. Sounds above 20,000 Hz are ultrasound."
  - "Dogs and bats can hear some ultrasound that we cannot."
  - "The pinna collects sound. The eardrum vibrates. Tiny bones pass the vibration inward so we hear."
- **Interaction:** Place animal and device cards on the correct band, then tap ear parts in order from outside to inside.

### Scene 5: Echo, noise, and useful ultrasound
- **Visual:** A shout toward a cliff returns as an echo. A noisy street contrasts with a quiet classroom. A ship uses SONAR; a clinic shows an ultrasound scan icon.
- **TTS:**
  - "An echo is a reflected sound that returns after a short delay."
  - "For a clear echo, the reflecting surface must be far enough for the delay to be noticed."
  - "Unpleasant or unwanted sound is noise. Loud noise can harm hearing and concentration."
  - "Ultrasound helps in SONAR to find depth or objects under water, and in medical imaging."
- **Interaction:** Solve a simple echo time puzzle, then sort actions into Reduce noise or Makes more noise. Recap: vibration, medium, amplitude, frequency, ear, echo, and ultrasound uses.
"""

# Fix the TTS typo in SOUND_LESSON - I accidentally broke a string. Let me fix in the actual write.
SOUND_LESSON = SOUND_LESSON.replace(
    '  "Sound cannot travel through vacuum."',
    '  - "Sound cannot travel through vacuum."',
)

SOUND_A = [
    q("Sound is produced by —",
      ["Objects at complete rest only", "Vibrating objects", "Only hot objects", "Only magnetic objects"], "B",
      "Vibrating objects disturb the surrounding medium and produce sound."),
    q("Vibration means —",
      ["A slow one-way motion only", "A rapid to-and-fro motion about a mean position", "A chemical change only", "A change of colour"], "B",
      "In vibration, a particle or object moves back and forth repeatedly."),
    q("Sound cannot travel through —",
      ["Air", "Water", "Iron", "Vacuum"], "D",
      "Sound needs a material medium. There are almost no particles in a vacuum to carry the vibration."),
    q("In which medium does sound generally travel fastest among these?",
      ["Air", "Water", "Steel", "Vacuum"], "C",
      "Sound is usually fastest in solids, slower in liquids, and slowest in gases. It does not travel in vacuum."),
    q("The maximum displacement of a vibrating particle from its rest position is called —",
      ["Frequency", "Amplitude", "Pitch", "Wavelength only as loudness"], "B",
      "Amplitude measures how far the particle moves from its mean position."),
    q("Loudness of sound mainly depends on —",
      ["Amplitude", "Colour of the object", "Only the listener's height", "Magnetic field only"], "A",
      "Greater amplitude means more energy in the wave and a louder sound."),
    q("The number of oscillations per second is called —",
      ["Amplitude", "Frequency", "Loudness", "Echo time"], "B",
      "Frequency counts how many vibrations happen each second."),
    q("The SI unit of frequency is —",
      ["metre", "hertz (Hz)", "joule", "pascal"], "B",
      "One hertz means one vibration per second."),
    q("Pitch of a sound depends mainly on its —",
      ["Frequency", "Only on amplitude", "Only on the colour of the source", "Weight of the listener"], "A",
      "Higher frequency sounds are heard as higher pitch; lower frequency as lower pitch."),
    q("The approximate audible frequency range for a healthy young human is —",
      ["1 Hz to 10 Hz", "20 Hz to 20,000 Hz", "25,000 Hz to 100,000 Hz only", "0 Hz to 5 Hz only"], "B",
      "Most humans hear roughly from 20 Hz up to about 20 kHz."),
    q("Sounds of frequency less than 20 Hz are called —",
      ["Ultrasound", "Infrasound", "Audible music only", "Light waves"], "B",
      "Infrasound is below the lower limit of human hearing."),
    q("Sounds of frequency greater than 20,000 Hz are called —",
      ["Infrasound", "Ultrasound", "Thunder only", "Visible light"], "B",
      "Ultrasound is above the upper limit of normal human hearing."),
    q("Which animal is well known for using ultrasound for navigation?",
      ["Earthworm", "Bat", "Snail", "Goldfish only in silence"], "B",
      "Bats emit ultrasound and use returning echoes to find their way and hunt."),
    q("The thin membrane in the human ear that vibrates first when sound arrives is the —",
      ["Pinna", "Eardrum (tympanic membrane)", "Cochlea fluid only", "Outer skin of the cheek"], "B",
      "Sound makes the eardrum vibrate; that vibration is then passed inward."),
    q("The outer part of the ear that collects sound is the —",
      ["Eardrum", "Pinna", "Stirrup bone only", "Auditory nerve only"], "B",
      "The pinna funnels sound into the ear canal toward the eardrum."),
    q("An echo is —",
      ["Sound that is absorbed completely", "Reflected sound heard after a noticeable delay", "Light bouncing from a mirror", "A smell travelling in air"], "B",
      "When sound reflects from a distant surface and returns, we may hear it as an echo."),
    q("For a distinct echo to be heard, the reflecting surface should generally be —",
      ["Very close, less than a few centimetres", "Far enough for a clear time gap (about 17 m or more in air at room conditions in school problems)", "Inside the ear only", "Made of vacuum"], "B",
      "School science uses a minimum distance so the reflected sound arrives after the original has ended."),
    q("Unwanted or unpleasant sound is called —",
      ["Music", "Noise", "Ultrasound always", "Silence"], "B",
      "Noise is sound that is unwanted, harsh, or disturbing."),
    q("Prolonged exposure to very loud noise can —",
      ["Improve hearing forever", "Damage hearing and cause stress", "Turn sound into light", "Stop all vibrations in nature"], "B",
      "Loud noise can harm the ear and affect health and concentration."),
    q("SONAR is used mainly to —",
      ["Cook food with sound", "Detect objects and find distances under water using ultrasound", "Grow plants faster", "Measure only room temperature"], "B",
      "SONAR sends ultrasound pulses and times the echoes to locate underwater objects or depth."),
    q("Which is a practical way to reduce noise near a busy road?",
      ["Planting trees or using barriers along the road", "Removing all silencers from vehicles", "Playing louder horns", "Breaking more glass"], "A",
      "Trees, walls, and quieter machines help absorb or block noise."),
    q("Music is generally described as sound that is —",
      ["Always harmful", "Pleasant and has a regular pattern", "Below 1 Hz only", "Unable to travel in air"], "B",
      "Musical sounds are organised and usually pleasant, unlike irregular noise."),
    q("If the amplitude of a sound wave is halved, the sound becomes —",
      ["Louder", "Softer", "Higher in pitch only for that reason", "Unable to travel"], "B",
      "Smaller amplitude means less loudness, so the sound is softer."),
    q("A shrill whistle has a higher pitch than a drum beat mainly because the whistle has —",
      ["Lower frequency", "Higher frequency", "Zero amplitude", "No vibrations"], "B",
      "Pitch rises with frequency. Shrill sounds have higher frequencies."),
]

SOUND_B = [
    q("A stretched rubber band produces sound when plucked because it —",
      ["Becomes magnetic", "Vibrates", "Turns into a liquid", "Stops all motion"], "B",
      "Plucking makes the rubber band vibrate, and those vibrations create sound."),
    q("You can hear a friend swimming and calling underwater (nearby) because sound —",
      ["Needs vacuum", "Can travel through liquids", "Travels only in solids", "Is only light"], "B",
      "Water is a material medium, so sound waves can pass through it."),
    q("Astronauts on the Moon cannot talk to each other by ordinary air sound because —",
      ["The Moon is too bright", "There is no air (almost vacuum) to carry sound", "Sound is faster than light there", "Ears do not work in low gravity alone"], "B",
      "Without a material medium, ordinary sound cannot travel between them."),
    q("Two sounds have the same frequency but different amplitudes. They differ mainly in —",
      ["Pitch", "Loudness", "Colour", "Chemical formula"], "B",
      "Same frequency means similar pitch; different amplitude means different loudness."),
    q("A sound of 30,000 Hz is —",
      ["Audible to all humans", "Ultrasound for humans", "Infrasound", "Visible light"], "B",
      "30 kHz is above 20 kHz, so it is ultrasound for a typical human ear."),
    q("A sound of 10 Hz is —",
      ["Ultrasound", "Infrasound", "Always musical", "A radio wave only"], "B",
      "10 Hz is below 20 Hz, so it is infrasound."),
    q("Dogs can often hear a whistle that humans cannot because —",
      ["Dogs see better colours", "Their audible range can include higher frequencies than ours", "Whistles produce only light", "Dogs do not use ears"], "B",
      "Many dogs hear higher frequencies, including some ultrasound."),
    q("The tiny bones of the middle ear help to —",
      ["Produce saliva", "Transmit eardrum vibrations toward the inner ear", "Pump blood", "Focus light on the retina"], "B",
      "The hammer, anvil, and stirrup pass vibrations from the eardrum inward."),
    q("Reverberation in a hall is —",
      ["Complete silence", "Persistence of sound due to multiple reflections", "Sound travelling in vacuum", "A type of smell"], "B",
      "Repeated reflections make sound linger; soft materials are used to control it."),
    q("To hear an echo from a wall, you need —",
      ["No reflecting surface", "A reflecting surface and enough distance for a delay", "Only ultraviolet light", "A vacuum between you and the wall"], "B",
      "Sound must bounce back and arrive after a noticeable time gap."),
    q("Ultrasound scans in hospitals are useful because ultrasound can —",
      ["Cook tissue with visible light only", "Help form images of internal organs without using ordinary sound we hear", "Replace all X-rays for broken bones always", "Remove gravity"], "B",
      "High-frequency ultrasound echoes from tissues are processed into images."),
    q("Which action increases noise pollution?",
      ["Using silencers on vehicles", "Unnecessary honking and very loud loudspeakers", "Planting trees near roads", "Speaking softly in libraries"], "B",
      "Extra loud, unwanted sound from horns and speakers adds to noise pollution."),
    q("The speed of sound is greatest in which of these at usual school conditions?",
      ["Air at room temperature", "Water", "A metal rod", "Outer space vacuum"], "C",
      "Particles in solids are closer, so sound generally travels fastest in solids."),
    q("If frequency doubles and amplitude stays the same, the sound becomes —",
      ["Higher in pitch but similarly loud (amplitude unchanged)", "Lower in pitch and much louder", "Silent", "Only brighter light"], "A",
      "Pitch follows frequency; loudness mainly follows amplitude."),
    q("Soft curtains and carpets in a room help reduce echoes because they —",
      ["Reflect all sound perfectly", "Absorb a good part of the sound energy", "Create vacuum", "Increase amplitude of every wave"], "B",
      "Soft, porous materials absorb sound and cut unwanted reflections."),
    q("The unit hertz means —",
      ["One joule per kilogram", "One vibration per second", "One metre per second squared", "One newton per metre"], "B",
      "Frequency in hertz counts cycles (vibrations) each second."),
    q("Which part of the ear is damaged by very loud sounds over time?",
      ["Sensitive structures inside the ear involved in hearing", "Only the fingernails", "Only the teeth enamel", "Only the hair on the head"], "A",
      "Loud noise can harm the eardrum or delicate inner-ear cells and nerves."),
    q("A ship measures ocean depth with SONAR by —",
      ["Sending ultrasound and timing the echo from the seabed", "Using only a thermometer", "Burning fuel underwater", "Measuring salt by taste"], "A",
      "Distance relates to echo time and the known speed of sound in water."),
    q("Which statement is true?",
      ["Sound is a form of energy produced by vibrations", "Sound is a type of smell", "Sound needs no energy to be produced", "Sound always travels fastest in vacuum"], "A",
      "Vibrating sources transfer energy through the medium as sound."),
    q("A low-pitched drum sound compared with a high-pitched flute note has —",
      ["Higher frequency", "Lower frequency", "No amplitude", "Only ultrasonic waves"], "B",
      "Low pitch means lower frequency."),
    q("We hear our own voice differently in a recording partly because —",
      ["Recordings remove all amplitude", "Bone conduction and air paths differ when we speak versus when we only listen", "The ear has no eardrum while speaking", "Sound cannot reflect indoors"], "B",
      "When speaking, vibrations also reach the inner ear through bones of the head."),
    q("Noise can affect us by —",
      ["Only changing hair colour", "Disturbing sleep, concentration, and sometimes blood pressure", "Making plants produce only ultrasound", "Stopping Earth's rotation"], "B",
      "Persistent noise is a health and learning problem, not just an annoyance."),
    q("Which medium is necessary for you to hear a classroom bell?",
      ["Vacuum between bell and ear", "Air (or another material medium) between bell and ear", "Only pure hydrogen always", "Only glass with no air"], "B",
      "Air carries the bell's vibrations to your ears."),
    q("Bats and dolphins both benefit from ultrasound mainly for —",
      ["Photosynthesis", "Echolocation — sensing surroundings with echoes", "Producing magnetic fields", "Changing seasons"], "B",
      "They send high-frequency sounds and interpret returning echoes."),
]

# ---------------------------------------------------------------------------
# Chapter 6 — Chemical Effects of Electric Current
# ---------------------------------------------------------------------------

CHEM_LESSON = """# Chapter 6: Chemical Effects of Electric Current

## Meta
- Grade: 8
- Subject: Science
- Theme tags: electric current, electrolyte, conductor, insulator, electrolysis, electroplating, LED tester
- Source basis: NCERT Class 8 themes (original items only)

## Learning objectives
- Test liquids with a simple circuit to classify good and poor conductors of electricity.
- Explain that some liquids conduct because they contain ions (electrolytes).
- Describe chemical effects of current such as deposition of metals and production of gases.
- Outline electroplating and give reasons it is used on objects.
- Use an LED or compass tester carefully to detect weak currents in liquids.
- Link everyday examples (electroplating chrome parts, purifying copper, LED testers) to the ideas of the chapter.

## Interactive lesson outline

### Scene 1: Do liquids conduct?
- **Visual:** A battery, LED or bulb, and two carbon rods dip into beakers: distilled water, salt solution, lemon juice, honey, and oil.
- **TTS:**
  - "Some liquids allow electric current to pass. They are conducting liquids."
  - "Distilled water is a poor conductor. Adding salt or lemon juice makes water conduct much better."
  - "Oils and many organic liquids are poor conductors."
- **Interaction:** Dip the tester into each liquid and watch the LED brightness. Sort liquids into Good conductor or Poor conductor.

### Scene 2: What carries the current?
- **Visual:** Animated ions of sodium and chloride moving toward opposite electrodes in salt water. Distilled water shows almost no ions.
- **TTS:**
  - "In metals, electrons carry current. In many liquids, charged particles called ions carry current."
  - "A liquid that conducts because of ions is often called an electrolyte."
  - "Distilled water has very few ions, so it conducts poorly."
- **Interaction:** Drag positive and negative ion icons toward the correct electrodes when the switch is closed.

### Scene 3: Chemical changes from current
- **Visual:** Electrolysis of copper sulphate with copper electrodes: the cathode gains a copper coating; bubbles may appear in other setups such as acidified water.
- **TTS:**
  - "When current passes through a conducting liquid, chemical changes can occur."
  - "Metal may deposit on one electrode. Gases may form at electrodes."
  - "These are chemical effects of electric current."
- **Interaction:** Predict which electrode gains copper, then run the animation and check.

### Scene 4: Electroplating
- **Visual:** A steel spoon as cathode in a nickel or chromium salt bath; the anode is the plating metal. After current flows, the spoon shines with a thin metal coat.
- **TTS:**
  - "Electroplating coats a metal object with a thin layer of another metal using electric current."
  - "The object to be plated is made the cathode. The plating metal is often the anode, in a suitable salt solution."
  - "Electroplating can prevent rust, improve appearance, or make a surface harder."
- **Interaction:** Assemble cathode, anode, and electrolyte correctly, then choose why a car bumper or tap might be chrome-plated.

### Scene 5: Safe testing and uses
- **Visual:** An LED tester circuit, a compass deflection tester, and icons for electroplating jewellery, tin-plated cans, and purifying metals.
- **TTS:**
  - "A magnetic compass near a wire can show a weak current by a small deflection."
  - "An LED lights even with a small current and is useful for testing liquids."
  - "Always use a low, safe voltage in school experiments and keep water away from mains sockets."
  - "Electroplating and electrolytic refining are important industrial uses of these ideas."
- **Interaction:** Pick the safer tester for a weak liquid current, then match each industrial use to electroplating or electrolysis. Recap: conducting liquids, ions, chemical effects, electroplating, and safe testing.
"""

CHEM_A = [
    q("A liquid that allows electric current to pass through it easily is called a —",
      ["Poor conductor", "Good conductor (conducting liquid)", "Magnetic insulator only", "Non-electrolyte always"], "B",
      "Liquids that let current pass readily are good conductors of electricity."),
    q("Distilled water is a —",
      ["Very good conductor like copper wire", "Poor conductor of electricity", "Source of unlimited free ions always", "Type of metal"], "B",
      "Pure distilled water has very few ions, so it conducts poorly."),
    q("Adding common salt to distilled water —",
      ["Makes it conduct better", "Makes it a perfect insulator", "Removes all charge forever", "Turns it into oil"], "A",
      "Salt provides ions that carry current, so the solution conducts much better."),
    q("Lemon juice and vinegar usually —",
      ["Never contain ions", "Conduct electricity because of ions from acids", "Are better insulators than oil for that reason alone", "Block all current like rubber"], "B",
      "Acids in these liquids release ions that allow current to pass."),
    q("Which liquid is generally a poor conductor of electricity?",
      ["Salt solution", "Lemon juice", "Copper sulphate solution", "Vegetable oil"], "D",
      "Oils do not provide free ions the way salt or acid solutions do."),
    q("In a conducting salt solution, electric current is carried mainly by —",
      ["Neutrons only", "Ions", "Uncharged sand grains", "Photons of light only"], "B",
      "Positive and negative ions move toward opposite electrodes and carry the current."),
    q("A liquid that conducts electricity due to the presence of ions is called an —",
      ["Insulator", "Electrolyte", "Electromagnet", "Alloy"], "B",
      "Electrolytes contain ions that move when a potential difference is applied."),
    q("When electric current passes through copper sulphate solution with copper electrodes, copper is deposited on the —",
      ["Anode only as a gas", "Cathode", "Battery terminals outside the beaker only", "Air above the liquid"], "B",
      "Positive copper ions move to the negative electrode (cathode) and deposit as metal."),
    q("The electrode connected to the negative terminal of the battery is the —",
      ["Anode", "Cathode", "Fuse", "Resistor only"], "B",
      "By definition in these experiments, the cathode is the negative electrode."),
    q("The electrode connected to the positive terminal of the battery is the —",
      ["Cathode", "Anode", "Insulator", "LED only"], "B",
      "The anode is the positive electrode in the electrolytic cell."),
    q("Electroplating is the process of —",
      ["Painting wood with oil", "Depositing a thin layer of one metal onto another using electric current", "Melting plastic only", "Measuring temperature"], "B",
      "Electroplating uses electrolysis to coat an object with a thin metal layer."),
    q("In electroplating a spoon with silver, the spoon should be made the —",
      ["Anode", "Cathode", "Battery acid", "Open switch"], "B",
      "The object to be coated is the cathode so metal ions deposit on it."),
    q("Chromium plating on car parts and taps is done mainly to —",
      ["Make them absorb more rust", "Improve appearance and resist corrosion", "Stop all electricity in cities", "Turn steel into wood"], "B",
      "Chrome layers look shiny and protect the metal underneath from corrosion."),
    q("Tin cans used for food are often coated with tin to —",
      ["Make iron rust faster", "Prevent the food from reacting with iron and to resist corrosion", "Increase the can's magnetism only", "Make the can conduct no heat"], "B",
      "Tin plating protects the iron and helps keep food safer from metal reactions."),
    q("An LED can be used in a tester for liquids because it —",
      ["Needs a huge current that always melts wires", "Glows even with a small current", "Works only in vacuum", "Produces salt"], "B",
      "LEDs light with a small current, so they show weak conduction clearly."),
    q("A magnetic compass near a wire can detect current because —",
      ["Current produces a magnetic effect that can deflect the needle", "Current produces only smell", "Compasses detect sound frequency", "Wires always become north poles forever"], "A",
      "A current-carrying wire has a magnetic field that can move a compass needle."),
    q("Which change is a chemical effect of electric current?",
      ["A bulb filament getting hot only as a physical glow with no deposit", "Metal depositing on an electrode from a salt solution", "A magnet attracting iron filings in dry air only", "A mirror reflecting light"], "B",
      "Deposition of metal from solution is a chemical change caused by current."),
    q("Bubbles of gas at electrodes during electrolysis show that —",
      ["No chemical change occurred", "A chemical change produced gases from the liquid or solute", "The liquid became a permanent magnet", "Sound turned into light"], "B",
      "Gas evolution means new substances formed — a chemical effect of current."),
    q("Tap water usually conducts better than distilled water because tap water —",
      ["Is pure H2O with zero ions", "Contains dissolved salts and minerals that provide ions", "Is an oil mixture", "Has no oxygen atoms"], "B",
      "Dissolved impurities supply ions that carry current."),
    q("Honey is generally a —",
      ["Good metallic conductor like copper", "Poor conductor of electricity", "Type of electrode metal", "Source of free electrons like a battery"], "B",
      "Honey does not provide mobile ions the way salt water does, so it conducts poorly."),
    q("Why are carbon rods often used as electrodes in school electrolysis of solutions?",
      ["They dissolve into sugar instantly", "They are conducting and relatively inert in many solutions", "They are perfect insulators", "They produce only music"], "B",
      "Carbon (graphite) conducts and does not react as readily as some metals in simple demos."),
    q("Electrolytic refining of copper uses electric current to —",
      ["Make copper more impure", "Obtain purer copper by depositing it on the cathode", "Turn copper into plastic", "Remove all electrons from atoms forever"], "B",
      "Pure copper plates out on the cathode from a copper salt solution."),
    q("If the LED in a liquid tester does not glow and the compass shows no deflection, the liquid is likely —",
      ["A good electrolyte", "A poor conductor under the test conditions", "Pure copper metal", "A strong acid mist in air only"], "B",
      "No signs of current mean the liquid is not conducting well in that circuit."),
    q("Safety rule for school tests of liquids with batteries: —",
      ["Use mains 230 V sockets dipped in the beaker", "Use a low-voltage battery pack and keep setups away from mains water hazards", "Taste every solution", "Short the battery terminals with wet hands for fun"], "B",
      "Low voltage and dry, careful handling prevent shocks and damage."),
]

CHEM_B = [
    q("Which solution is the best conductor among these typical school samples?",
      ["Distilled water", "Strong salt solution", "Pure vegetable oil", "Dry air"], "B",
      "A strong salt solution has many ions and conducts well compared with distilled water or oil."),
    q("When current flows in copper sulphate solution, Cu2+ ions move toward the —",
      ["Anode", "Cathode", "Open air only", "Plastic beaker wall only"], "B",
      "Positive ions are attracted to the negative cathode."),
    q("Negatively charged ions in an electrolyte move toward the —",
      ["Cathode", "Anode", "Centre of the Earth only", "LED bulb glass"], "B",
      "Negative ions (anions) are attracted to the positive anode."),
    q("Electroplating requires —",
      ["No electrolyte and no battery", "An electrolyte, electrodes, and a source of current", "Only a wooden spoon", "Vacuum and sunlight only"], "B",
      "You need a conducting solution, electrodes, and current for plating."),
    q("To nickel-plate an iron key, a suitable arrangement is —",
      ["Key as anode in distilled oil", "Key as cathode in a nickel salt solution with a nickel anode", "Key disconnected from the circuit", "Key as a fuse in open air only"], "B",
      "The key (cathode) receives nickel ions from the solution; nickel metal can supply the anode."),
    q("One reason spoons are electroplated with silver or chromium is to —",
      ["Make them dissolve faster in tea", "Give a shiny finish and resist tarnish or corrosion", "Stop them from ever conducting heat", "Turn them into rubber"], "B",
      "Plating improves looks and surface protection."),
    q("A compass needle deflects near a wire in a closed liquid-tester circuit. This shows —",
      ["No current flows", "A current is present (magnetic effect of current)", "Only heat exists with zero current", "The liquid is pure oil for sure"], "B",
      "Deflection means the wire carries current and has a magnetic field."),
    q("LEDs are polarised devices, so in a tester —",
      ["Direction of connection can matter for lighting", "They never need any current", "They work as perfect insulators", "They only detect sound"], "A",
      "An LED lights when connected with the correct polarity and sufficient current."),
    q("Which is a chemical effect rather than only a heating effect of current?",
      ["A wire becoming warm", "Gas bubbles forming at electrodes in acidified water", "A room heater glowing", "Friction from rubbing hands"], "B",
      "New gas substances forming means a chemical change from electrolysis."),
    q("Poor conductors among liquids are useful when we want to —",
      ["Carry huge currents through oil intentionally in every wire", "Insulate and avoid unwanted current paths", "Replace all copper cables with honey", "Electroplate faster than metals"], "B",
      "Insulating liquids help prevent leaks and shocks where conduction is unwanted."),
    q("Boiling water is still a poorer conductor than salt solution mainly because —",
      ["Heat destroys all protons", "Salt solution has far more mobile ions than pure water", "Boiling water becomes a metal", "Salt removes gravity"], "B",
      "Ions from salt dominate conduction compared with the few ions in water alone."),
    q("During electroplating, the metal object that receives the coating loses —",
      ["Its place as cathode if plating works", "Nothing essential if ions deposit on it — it gains a metal layer", "All of its mass always to the anode instantly", "Its solid shape and becomes gas"], "B",
      "Successful plating adds a thin metal layer onto the cathode object."),
    q("Industrial chromium plating baths must be handled carefully because —",
      ["They are only distilled water", "The chemicals can be hazardous even though the idea is the same as school electroplating", "They produce only music", "They never use electric current"], "B",
      "Real plating chemicals can be toxic; schools use safer demos and stress safety."),
    q("If you reverse the battery connections in a simple copper-plating demo —",
      ["The roles of electrodes reverse and deposition switches sides", "Copper starts floating as a gas in air permanently", "The solution becomes an insulator instantly forever", "Frequency of sound doubles"], "A",
      "Reversing polarity swaps which electrode is cathode, so deposition moves."),
    q("Which everyday object is commonly protected by electroplating?",
      ["A wooden pencil core only", "A steel bathroom tap with a chromium layer", "A cotton shirt", "A glass window pane with no metal"], "B",
      "Metal taps and fittings are often chrome-plated for shine and rust resistance."),
    q("A tester bulb glows brightly in copper sulphate solution but stays dark in oil. This comparison shows —",
      ["Oil is the better electrolyte", "Copper sulphate solution conducts and oil does not (under the test)", "Both liquids are identical conductors", "Oil has more Cu2+ ions"], "B",
      "Brightness indicates conduction; oil fails the test."),
    q("Chemical effects of current are the basis of —",
      ["Only rainbows", "Electroplating and electrolytic refining", "Only echo location in bats", "Only measuring pitch in hertz"], "B",
      "Both processes use current through electrolytes to move and deposit metals."),
    q("Distilled water can be made to conduct better by —",
      ["Removing all ions further", "Dissolving an acid, base, or salt that provides ions", "Freezing it to absolute zero only", "Mixing it with more oil"], "B",
      "Added electrolytes supply charge carriers."),
    q("In electroplating, the electrolyte should contain —",
      ["Ions of the metal to be deposited", "Only pure oil", "Only sand", "Only nitrogen gas bubbles with no liquid"], "A",
      "Metal ions in solution are what deposit onto the cathode."),
    q("Why might a factory electroplate zinc onto iron (galvanising-related protection ideas)?",
      ["To make iron rust faster on purpose", "To protect iron from corrosion", "To convert iron into oxygen", "To stop electroplating science"], "B",
      "A coating metal can shield iron from air and moisture that cause rust."),
    q("A weak current in a liquid may light an LED but not a thick filament bulb because —",
      ["LEDs can respond to smaller currents", "Filament bulbs invent electricity", "LEDs need infinite current", "Bulbs work only in vacuum liquids"], "A",
      "LEDs are sensitive indicators for small currents in testers."),
    q("Which pair is correctly matched?",
      ["Cathode — positive electrode", "Anode — negative electrode", "Cathode — negative electrode; anode — positive electrode", "Electrolyte — perfect vacuum"], "C",
      "In electrolytic cells for these lessons, cathode is negative and anode is positive."),
    q("Passing current through acidified water can produce hydrogen and oxygen gases. This shows —",
      ["Water is an element that cannot change", "Electric current can cause chemical decomposition", "Gases are only illusions", "Acid removes all electricity"], "B",
      "Electrolysis splits water (helped by acid) into hydrogen and oxygen — a chemical effect."),
    q("The main idea of this chapter is that electric current in liquids can —",
      ["Only produce sound echoes", "Cause chemical changes such as deposition and gas formation, used in electroplating", "Travel through vacuum better than in wires", "Replace the need for any electrolyte forever"], "B",
      "Current through electrolytes drives chemical effects with many practical uses."),
]


def write_chapter(path: Path, lesson: str, set_a: list[dict], set_b: list[dict]) -> None:
    assert len(set_a) == 24 and len(set_b) == 24, (path.name, len(set_a), len(set_b))
    text = lesson.rstrip() + "\n\n" + fmt_quiz("Quiz Set A", set_a) + fmt_quiz("Quiz Set B", set_b)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")
    print(f"Wrote {path} ({len(set_a)}+{len(set_b)} MCQs)")


HINT_BANK = {
    "combustion": [
        "Ask whether the substance can burn in air.",
        "Ignition temperature is the lowest temperature for catching fire.",
        "Rapid = quick burn; spontaneous = starts on its own; explosion = sudden bang.",
        "Fire needs fuel, oxygen, and heat — remove any one.",
        "Outer blue flame zone is hottest; middle yellow gives light; inner is coolest.",
        "Calorific value is heat from 1 kg of fuel burnt completely (kJ/kg).",
        "CO2 and dry powder cut off air; never use water on oil or electrical fires.",
        "Incomplete burning can make poisonous carbon monoxide.",
        "LPG and CNG are cleaner common fuels than raw coal or wet wood.",
        "Sulphur dioxide and nitrogen oxides link to acid rain; CO2 to warming.",
    ],
    "sound": [
        "Sound starts with vibration — to-and-fro motion.",
        "Sound needs a material medium; it cannot travel in vacuum.",
        "Amplitude ↔ loudness; frequency ↔ pitch (unit hertz).",
        "Human hearing is roughly 20 Hz to 20,000 Hz.",
        "Below 20 Hz is infrasound; above 20 kHz is ultrasound.",
        "Pinna collects sound; eardrum vibrates first among the membranes.",
        "An echo is reflected sound heard after a delay.",
        "Noise is unwanted sound; protect hearing and reduce loud sources.",
        "SONAR and medical scans use ultrasound echoes.",
        "Sound is usually fastest in solids, then liquids, then gases.",
    ],
    "chemfx": [
        "Good conducting liquids have mobile ions (electrolytes).",
        "Distilled water is a poor conductor; salt or acid improves conduction.",
        "Oils and many organic liquids are poor conductors.",
        "Cathode is negative; anode is positive in these cells.",
        "Metal ions deposit on the cathode during electroplating.",
        "Electroplating coats an object for shine or corrosion resistance.",
        "LEDs and compass deflection can detect weak currents.",
        "Gas bubbles or metal deposits show chemical effects of current.",
        "The object to plate is the cathode in a suitable metal-salt bath.",
        "Use low-voltage battery testers — never mains in a beaker.",
    ],
}


def hints_for(prefix: str, bank_key: str, n: int = 24) -> dict[str, list[str]]:
    bank = HINT_BANK[bank_key]
    out = {}
    for set_id in ("a", "b"):
        for i in range(1, n + 1):
            hint = bank[(i - 1) % len(bank)]
            # rotate a bit for set B
            if set_id == "b":
                hint = bank[(i + 3) % len(bank)]
            out[f"{prefix}-{set_id}-q{i:02d}"] = [hint]
    return out


def patch_file(path: Path, old: str, new: str) -> None:
    text = path.read_text(encoding="utf-8")
    if new.strip() in text and old not in text:
        print(f"Already patched: {path}")
        return
    if old not in text:
        raise SystemExit(f"Patch anchor missing in {path}: {old!r}")
    path.write_text(text.replace(old, new, 1), encoding="utf-8")
    print(f"Patched {path}")


def append_hints(path: Path, entries: dict[str, list[str]]) -> None:
    text = path.read_text(encoding="utf-8")
    # Insert before closing };
    block_lines = []
    for qid, hints in entries.items():
        block_lines.append(f'  "{qid}": {json.dumps(hints)},')
    block = "\n".join(block_lines)
    if '"g8-sci-combustion-a-q01"' in text:
        print("Hints already present")
        return
    if not text.rstrip().endswith("};"):
        raise SystemExit("Unexpected hints file ending")
    # remove trailing }; and re-add with new entries (keep prior trailing comma style)
    body = text.rstrip()
    if body.endswith("};"):
        body = body[:-2].rstrip()
        if body.endswith(","):
            body = body + "\n" + block + "\n};\n"
        else:
            body = body + ",\n" + block + "\n};\n"
    path.write_text(body, encoding="utf-8")
    print(f"Appended {len(entries)} hint overlays to {path}")


def main() -> None:
    ch4 = GRADE_DOCS / "science-ch04-combustion.md"
    ch5 = GRADE_DOCS / "science-ch05-sound.md"
    ch6 = GRADE_DOCS / "science-ch06-chemical-effects.md"

    write_chapter(ch4, COMBUSTION_LESSON, COMBUSTION_A, COMBUSTION_B)
    write_chapter(ch5, SOUND_LESSON, SOUND_A, SOUND_B)
    write_chapter(ch6, CHEM_LESSON, CHEM_A, CHEM_B)

    chapters = [
        (
            ch4,
            "g8-sci-combustion",
            "g8-science-combustion.ts",
            "g8ScienceCombustion",
            {
                "id": "combustion-flame",
                "title": "Combustion and Flame",
                "emoji": "🔥",
                "blurb": "Fuels, fire and flame zones",
                "topic": "materials",
                "paperTopics": ["materials", "forces-energy"],
            },
            lesson_ts(
                "Combustion and flame",
                "🔥",
                "magnet",
                "Combustion needs fuel, oxygen and heat. Flames have zones; fuels differ in calorific value.",
                [
                    ("Combustible", "Burns in air with heat and light", "🔥"),
                    ("Ignition temp", "Lowest temperature to catch fire", "🌡️"),
                    ("Fire triangle", "Fuel, oxygen, heat", "🔺"),
                    ("Calorific value", "Heat from 1 kg fuel (kJ/kg)", "📏"),
                ],
                {
                    "prompt": "Fire needs fuel, heat and…",
                    "options": [("a", "Nitrogen only"), ("b", "Oxygen (air)"), ("c", "Argon"), ("d", "Sand")],
                    "answerId": "b",
                    "why": "Oxygen from air completes the fire triangle.",
                },
                ["Know combustible fuels", "Fire triangle", "Flame zones", "Sets ready"],
            ),
            "combustion",
        ),
        (
            ch5,
            "g8-sci-sound",
            "g8-science-sound.ts",
            "g8ScienceSound",
            {
                "id": "sound",
                "title": "Sound",
                "emoji": "🔊",
                "blurb": "Vibrations, pitch and echoes",
                "topic": "forces-energy",
                "paperTopics": ["forces-energy", "materials"],
            },
            lesson_ts(
                "Sound",
                "🔊",
                "magnet",
                "Sound comes from vibrations and needs a medium. Amplitude is loudness; frequency is pitch.",
                [
                    ("Vibration", "To-and-fro motion makes sound", "🎸"),
                    ("Amplitude", "Controls loudness", "📢"),
                    ("Frequency", "Controls pitch (hertz)", "🎵"),
                    ("Ultrasound", "Above 20 kHz; SONAR and scans", "🦇"),
                ],
                {
                    "prompt": "Pitch of a sound depends mainly on…",
                    "options": [("a", "Amplitude"), ("b", "Frequency"), ("c", "Colour"), ("d", "Smell")],
                    "answerId": "b",
                    "why": "Higher frequency means higher pitch.",
                },
                ["Vibration makes sound", "Needs a medium", "Pitch vs loudness", "Sets ready"],
            ),
            "sound",
        ),
        (
            ch6,
            "g8-sci-chemfx",
            "g8-science-chemfx.ts",
            "g8ScienceChemfx",
            {
                "id": "chemical-effects",
                "title": "Chemical Effects of Current",
                "emoji": "⚡",
                "blurb": "Electrolytes and electroplating",
                "topic": "materials",
                "paperTopics": ["materials", "forces-energy"],
            },
            lesson_ts(
                "Chemical effects of current",
                "⚡",
                "magnet",
                "Some liquids conduct via ions. Current can deposit metals — that is electroplating.",
                [
                    ("Electrolyte", "Liquid that conducts via ions", "🧪"),
                    ("Cathode", "Negative electrode — metal deposits here", "➖"),
                    ("Anode", "Positive electrode", "➕"),
                    ("Electroplating", "Thin metal coat using current", "✨"),
                ],
                {
                    "prompt": "In electroplating, the object to coat is the…",
                    "options": [("a", "Anode"), ("b", "Cathode"), ("c", "Fuse"), ("d", "Insulator")],
                    "answerId": "b",
                    "why": "Metal ions deposit on the cathode.",
                },
                ["Ions carry current", "Chemical effects", "Electroplating uses", "Sets ready"],
            ),
            "chemfx",
        ),
    ]

    all_hints: dict[str, list[str]] = {}
    for md_path, prefix, filename, export, meta, lesson, bank_key in chapters:
        md = md_path.read_text(encoding="utf-8")
        a, b = science_sets(md, prefix)
        if len(a) != 24 or len(b) != 24:
            raise SystemExit(f"{md_path.name}: expected 24+24, got {len(a)}+{len(b)}")
        emit_module(OUT / filename, export, meta, lesson, a, b)
        print(f"Emitted {filename}: {len(a)}+{len(b)}")
        all_hints.update(hints_for(prefix, bank_key))

    # Wire content index
    index_path = OUT / "index.ts"
    idx = index_path.read_text(encoding="utf-8")
    if "g8ScienceCombustion" not in idx:
        idx = idx.replace(
            'export { g8ScienceMetals } from "./g8-science-metals";\n',
            'export { g8ScienceMetals } from "./g8-science-metals";\n'
            'export { g8ScienceCombustion } from "./g8-science-combustion";\n'
            'export { g8ScienceSound } from "./g8-science-sound";\n'
            'export { g8ScienceChemfx } from "./g8-science-chemfx";\n',
        )
        index_path.write_text(idx, encoding="utf-8")
        print("Updated content/index.ts")

    # Wire catalog
    cat_path = ROOT / "lib/prep/catalog.ts"
    cat = cat_path.read_text(encoding="utf-8")
    if "g8ScienceCombustion" not in cat:
        cat = cat.replace(
            'import { g8ScienceMetals } from "./content/g8-science-metals";\n',
            'import { g8ScienceMetals } from "./content/g8-science-metals";\n'
            'import { g8ScienceCombustion } from "./content/g8-science-combustion";\n'
            'import { g8ScienceSound } from "./content/g8-science-sound";\n'
            'import { g8ScienceChemfx } from "./content/g8-science-chemfx";\n',
        )
        cat = cat.replace(
            """  8: [
    g8ScienceCells,
    g8ScienceForce,
    g8ScienceMetals,
  ],""",
            """  8: [
    g8ScienceCells,
    g8ScienceForce,
    g8ScienceMetals,
    g8ScienceCombustion,
    g8ScienceSound,
    g8ScienceChemfx,
  ],""",
        )
        cat_path.write_text(cat, encoding="utf-8")
        print("Updated catalog.ts SCIENCE[8]")

    # Hints
    append_hints(ROOT / "lib/prep/hints/g8-science.ts", all_hints)

    # Manifest
    man_path = ROOT / "scripts/ingest_manifest.json"
    man = json.loads(man_path.read_text(encoding="utf-8"))
    extras = [
        ["science", 8, "g8ScienceCombustion", "g8-science-combustion"],
        ["science", 8, "g8ScienceSound", "g8-science-sound"],
        ["science", 8, "g8ScienceChemfx", "g8-science-chemfx"],
    ]
    existing = {tuple(x) for x in man}
    for row in extras:
        if tuple(row) not in existing:
            man.append(row)
    man_path.write_text(json.dumps(man, indent=2) + "\n", encoding="utf-8")
    print("Updated ingest_manifest.json")

    # Extend ingest_run.py so future regenerations include Ch4–6 from docs
    run_path = ROOT / "scripts/ingest_run.py"
    run = run_path.read_text(encoding="utf-8")
    marker = 'manifest.append(("science",8,"g8ScienceMetals","g8-science-metals"))'
    if "g8ScienceCombustion" not in run:
        addition = '''
# G8 Science Ch4–6 (authored under docs/sof-source; keep in sync)
md = (DOCS/"grade-8/science-ch04-combustion.md").read_text()
a,b = science_sets(md, "g8-sci-combustion")
emit_module(OUT/"g8-science-combustion.ts", "g8ScienceCombustion", {
  "id":"combustion-flame","title":"Combustion and Flame","emoji":"🔥","blurb":"Fuels, fire and flame zones",
  "topic":"materials","paperTopics":["materials","forces-energy"],
}, lesson_ts("Combustion and flame", "🔥", "magnet",
  "Combustion needs fuel, oxygen and heat. Flames have zones; fuels differ in calorific value.",
  [("Combustible","Burns in air with heat and light","🔥"),("Ignition temp","Lowest temperature to catch fire","🌡️"),
   ("Fire triangle","Fuel, oxygen, heat","🔺"),("Calorific value","Heat from 1 kg fuel (kJ/kg)","📏")],
  {"prompt":"Fire needs fuel, heat and…","options":[("a","Nitrogen only"),("b","Oxygen (air)"),("c","Argon"),("d","Sand")],
   "answerId":"b","why":"Oxygen from air completes the fire triangle."},
  ["Know combustible fuels", "Fire triangle", "Flame zones", "Sets ready"]), a, b)
manifest.append(("science",8,"g8ScienceCombustion","g8-science-combustion"))

md = (DOCS/"grade-8/science-ch05-sound.md").read_text()
a,b = science_sets(md, "g8-sci-sound")
emit_module(OUT/"g8-science-sound.ts", "g8ScienceSound", {
  "id":"sound","title":"Sound","emoji":"🔊","blurb":"Vibrations, pitch and echoes",
  "topic":"forces-energy","paperTopics":["forces-energy","materials"],
}, lesson_ts("Sound", "🔊", "magnet",
  "Sound comes from vibrations and needs a medium. Amplitude is loudness; frequency is pitch.",
  [("Vibration","To-and-fro motion makes sound","🎸"),("Amplitude","Controls loudness","📢"),
   ("Frequency","Controls pitch (hertz)","🎵"),("Ultrasound","Above 20 kHz; SONAR and scans","🦇")],
  {"prompt":"Pitch of a sound depends mainly on…","options":[("a","Amplitude"),("b","Frequency"),("c","Colour"),("d","Smell")],
   "answerId":"b","why":"Higher frequency means higher pitch."},
  ["Vibration makes sound", "Needs a medium", "Pitch vs loudness", "Sets ready"]), a, b)
manifest.append(("science",8,"g8ScienceSound","g8-science-sound"))

md = (DOCS/"grade-8/science-ch06-chemical-effects.md").read_text()
a,b = science_sets(md, "g8-sci-chemfx")
emit_module(OUT/"g8-science-chemfx.ts", "g8ScienceChemfx", {
  "id":"chemical-effects","title":"Chemical Effects of Current","emoji":"⚡","blurb":"Electrolytes and electroplating",
  "topic":"materials","paperTopics":["materials","forces-energy"],
}, lesson_ts("Chemical effects of current", "⚡", "magnet",
  "Some liquids conduct via ions. Current can deposit metals — that is electroplating.",
  [("Electrolyte","Liquid that conducts via ions","🧪"),("Cathode","Negative electrode — metal deposits here","➖"),
   ("Anode","Positive electrode","➕"),("Electroplating","Thin metal coat using current","✨")],
  {"prompt":"In electroplating, the object to coat is the…","options":[("a","Anode"),("b","Cathode"),("c","Fuse"),("d","Insulator")],
   "answerId":"b","why":"Metal ions deposit on the cathode."},
  ["Ions carry current", "Chemical effects", "Electroplating uses", "Sets ready"]), a, b)
manifest.append(("science",8,"g8ScienceChemfx","g8-science-chemfx"))
'''
        run = run.replace(marker, marker + "\n" + addition)
        run_path.write_text(run, encoding="utf-8")
        print("Updated ingest_run.py")

    print("DONE", len(all_hints), "hints;", 3 * 48, "MCQs")


if __name__ == "__main__":
    main()
