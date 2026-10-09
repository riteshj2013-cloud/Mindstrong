import type { ChapterDef, PrepQuestion } from "../types";

/** Our Body - sense organs, bones/muscles intro, healthy habits (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-body-a-q01",
    prompt: "How many main sense organs do we usually learn about in Class 4?",
    options: [
      { id: "a", text: "Five" },
      { id: "b", text: "Two" },
      { id: "c", text: "Three" },
      { id: "d", text: "Ten" }
    ],
    answerId: "a",
    explanation: "The five sense organs are eyes, ears, nose, tongue and skin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q02",
    prompt: "Which sense organ helps you see the board in class?",
    options: [
      { id: "a", text: "Ears" },
      { id: "b", text: "Eyes" },
      { id: "c", text: "Tongue" },
      { id: "d", text: "Nose" }
    ],
    answerId: "b",
    explanation: "Eyes are the sense organs of sight. They help us see shapes, colours and light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q03",
    prompt: "Which sense organ helps you hear the school bell?",
    options: [
      { id: "a", text: "Eyes" },
      { id: "b", text: "Tongue" },
      { id: "c", text: "Ears" },
      { id: "d", text: "Skin only" }
    ],
    answerId: "c",
    explanation: "Ears are for hearing. They collect sound and send messages to the brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q04",
    prompt: "Your nose mainly helps you ______.",
    options: [
      { id: "a", text: "Taste sugar directly" },
      { id: "b", text: "Hear music" },
      { id: "c", text: "See colours" },
      { id: "d", text: "Smell" }
    ],
    answerId: "d",
    explanation: "The nose is the sense organ of smell. Smell also helps us enjoy food and notice danger like smoke.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q05",
    prompt: "Different areas of the tongue help you notice tastes such as sweet, sour, salty and bitter. The tongue is for ______.",
    options: [
      { id: "a", text: "Taste" },
      { id: "b", text: "Hearing" },
      { id: "c", text: "Sight" },
      { id: "d", text: "Balance only" }
    ],
    answerId: "a",
    explanation: "The tongue is the sense organ of taste. Taste buds detect different tastes in food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q06",
    prompt: "Which sense organ helps you feel that a cup of chai is hot?",
    options: [
      { id: "a", text: "Eyes only" },
      { id: "b", text: "Skin" },
      { id: "c", text: "Hair only" },
      { id: "d", text: "Teeth enamel" }
    ],
    answerId: "b",
    explanation: "Skin is the sense organ of touch. It feels heat, cold, pressure and pain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q07",
    prompt: "Bones joined together make up the ______.",
    options: [
      { id: "a", text: "Digestive juice" },
      { id: "b", text: "Only the skin" },
      { id: "c", text: "Skeleton" },
      { id: "d", text: "Only the hair" }
    ],
    answerId: "c",
    explanation: "The skeleton is the frame of bones that gives shape and support to the body.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q08",
    prompt: "Which bones protect the brain?",
    options: [
      { id: "a", text: "Ribs only" },
      { id: "b", text: "Finger bones only" },
      { id: "c", text: "Toe nails" },
      { id: "d", text: "Skull bones" }
    ],
    answerId: "d",
    explanation: "The skull is a bony case that protects the brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q09",
    prompt: "The ribcage mainly protects ______.",
    options: [
      { id: "a", text: "The heart and lungs" },
      { id: "b", text: "Only the toes" },
      { id: "c", text: "Only the hair" },
      { id: "d", text: "Only the tongue" }
    ],
    answerId: "a",
    explanation: "Ribs form a cage around the chest that helps protect the heart and lungs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q10",
    prompt: "Muscles help us ______.",
    options: [
      { id: "a", text: "Only grow hair" },
      { id: "b", text: "Move body parts by pulling on bones" },
      { id: "c", text: "Make blood from air" },
      { id: "d", text: "Replace the skeleton completely" }
    ],
    answerId: "b",
    explanation: "Muscles pull on bones to create movement. We use muscles to walk, write and smile.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q11",
    prompt: "Bones are hard and give the body ______.",
    options: [
      { id: "a", text: "Only colour" },
      { id: "b", text: "Only taste" },
      { id: "c", text: "Shape, support and protection" },
      { id: "d", text: "Only smell" }
    ],
    answerId: "c",
    explanation: "Bones support the body, give it shape and protect soft organs inside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q12",
    prompt: "A joint is a place where ______.",
    options: [
      { id: "a", text: "Hair grows from skin only" },
      { id: "b", text: "Blood becomes bone" },
      { id: "c", text: "Taste buds sit on the ear" },
      { id: "d", text: "Two bones meet and movement can happen" }
    ],
    answerId: "d",
    explanation: "Joints are meeting places of bones. Different joints allow bending, turning or little movement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q13",
    prompt: "Which habit helps keep your body strong and healthy?",
    options: [
      { id: "a", text: "Playing outdoors and exercising regularly" },
      { id: "b", text: "Never sleeping" },
      { id: "c", text: "Eating only chips every day" },
      { id: "d", text: "Skipping all meals" }
    ],
    answerId: "a",
    explanation: "Regular exercise and outdoor play strengthen muscles and bones and improve fitness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q14",
    prompt: "Why should you wash your hands with soap before eating?",
    options: [
      { id: "a", text: "To change hand colour" },
      { id: "b", text: "To remove dirt and germs that can make you ill" },
      { id: "c", text: "To make bones longer instantly" },
      { id: "d", text: "Because soap is a food" }
    ],
    answerId: "b",
    explanation: "Soap and water wash away germs. Clean hands help stop illness from spreading to your mouth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q15",
    prompt: "Brushing teeth twice a day mainly helps ______.",
    options: [
      { id: "a", text: "Grow taller overnight" },
      { id: "b", text: "Sharpen hearing" },
      { id: "c", text: "Keep teeth and gums clean and healthy" },
      { id: "d", text: "Change eye colour" }
    ],
    answerId: "c",
    explanation: "Brushing removes food bits and helps prevent tooth decay and gum problems.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q16",
    prompt: "Sleep is important because it helps the body ______.",
    options: [
      { id: "a", text: "Stop needing food forever" },
      { id: "b", text: "Turn bones into muscle overnight only" },
      { id: "c", text: "Remove the need for water" },
      { id: "d", text: "Rest, repair and stay ready for the next day" }
    ],
    answerId: "d",
    explanation: "During sleep the body rests and recovers. Children need enough sleep to grow and learn well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q17",
    prompt: "Sitting and standing with a straight back is good for ______.",
    options: [
      { id: "a", text: "Posture and spine health" },
      { id: "b", text: "Stopping all breathing" },
      { id: "c", text: "Removing the need for food" },
      { id: "d", text: "Closing the ears" }
    ],
    answerId: "a",
    explanation: "Good posture keeps the backbone healthier and helps you breathe and move comfortably.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q18",
    prompt: "Which food habit supports strong bones?",
    options: [
      { id: "a", text: "Only sugary drinks" },
      { id: "b", text: "Including milk, curd or other calcium-rich foods with a balanced diet" },
      { id: "c", text: "Never drinking water" },
      { id: "d", text: "Eating soil" }
    ],
    answerId: "b",
    explanation: "Calcium-rich foods such as milk and curd help build strong bones and teeth, along with a balanced diet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q19",
    prompt: "If you get a small cut, you should ______.",
    options: [
      { id: "a", text: "Rub it with dirty mud" },
      { id: "b", text: "Ignore heavy bleeding always" },
      { id: "c", text: "Clean it and keep it covered as an adult advises" },
      { id: "d", text: "Put chalk dust from the board on it" }
    ],
    answerId: "c",
    explanation: "Cleaning a cut and keeping it covered helps prevent germs from entering. Ask a trusted adult for help.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q20",
    prompt: "We should not poke sharp objects into our ears because ______.",
    options: [
      { id: "a", text: "Ears do not matter" },
      { id: "b", text: "It improves eyesight" },
      { id: "c", text: "It makes bones stronger" },
      { id: "d", text: "We can damage the ear and harm hearing" }
    ],
    answerId: "d",
    explanation: "The ear is delicate. Sharp objects can injure it and affect hearing. Clean outer ears gently.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q21",
    prompt: "Reading in dim light for a long time is a bad habit mainly for the ______.",
    options: [
      { id: "a", text: "Eyes" },
      { id: "b", text: "Knees" },
      { id: "c", text: "Hair roots only" },
      { id: "d", text: "Toe nails" }
    ],
    answerId: "a",
    explanation: "Eyes need enough light to see comfortably. Dim light can strain the eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q22",
    prompt: "Drinking clean water every day helps the body ______.",
    options: [
      { id: "a", text: "Stop all organ work" },
      { id: "b", text: "Stay hydrated and work properly" },
      { id: "c", text: "Turn into a fish" },
      { id: "d", text: "Remove the need for sleep forever" }
    ],
    answerId: "b",
    explanation: "Water is essential for life. Clean drinking water helps every system of the body work well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q23",
    prompt: "Which activity is a healthy habit?",
    options: [
      { id: "a", text: "Watching screens all night with no sleep" },
      { id: "b", text: "Skipping bath for many days" },
      { id: "c", text: "Playing kho-kho or cycling and then resting well" },
      { id: "d", text: "Sharing used handkerchiefs when sick without care" }
    ],
    answerId: "c",
    explanation: "Active play plus enough rest supports a healthy body. Hygiene and sleep matter too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-a-q24",
    prompt: "Sense organs send messages to the ______ so we can understand the world.",
    options: [
      { id: "a", text: "Only the fingernails" },
      { id: "b", text: "Only the stomach" },
      { id: "c", text: "Only the hair" },
      { id: "d", text: "Brain" }
    ],
    answerId: "d",
    explanation: "Sense organs detect changes and send signals to the brain, which helps us understand and respond.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-body-b-q01",
    prompt: "Which pair is correctly matched?",
    options: [
      { id: "a", text: "Tongue \u2014 taste" },
      { id: "b", text: "Eyes \u2014 hearing" },
      { id: "c", text: "Skin \u2014 sight" },
      { id: "d", text: "Nose \u2014 hearing" }
    ],
    answerId: "a",
    explanation: "The tongue is for taste. Eyes see, ears hear, nose smells and skin feels touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q02",
    prompt: "Closing your eyes tightly mainly blocks which sense?",
    options: [
      { id: "a", text: "Smell" },
      { id: "b", text: "Sight" },
      { id: "c", text: "Taste" },
      { id: "d", text: "Hearing completely forever" }
    ],
    answerId: "b",
    explanation: "Eyelids can block light from entering the eyes, so you cannot see.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q03",
    prompt: "A cold with a blocked nose can make food seem less tasty because ______.",
    options: [
      { id: "a", text: "Teeth disappear" },
      { id: "b", text: "Eyes stop working" },
      { id: "c", text: "Smell and taste work closely together" },
      { id: "d", text: "Bones melt" }
    ],
    answerId: "c",
    explanation: "Smell helps us enjoy flavour. When the nose is blocked, food can seem bland.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q04",
    prompt: "Which part of the body has many bones that let fingers move in many ways?",
    options: [
      { id: "a", text: "The forehead only" },
      { id: "b", text: "The tongue tip" },
      { id: "c", text: "A single tooth" },
      { id: "d", text: "The hand" }
    ],
    answerId: "d",
    explanation: "Hands have many small bones and joints so we can grip, write and play.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q05",
    prompt: "Muscles work by ______.",
    options: [
      { id: "a", text: "Contracting (pulling) and then relaxing" },
      { id: "b", text: "Pushing bones only like magnets from afar" },
      { id: "c", text: "Turning into water" },
      { id: "d", text: "Making sunlight" }
    ],
    answerId: "a",
    explanation: "A muscle shortens when it contracts and pulls a bone; then it relaxes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q06",
    prompt: "The backbone (spine) is important because it ______.",
    options: [
      { id: "a", text: "Only stores food like a stomach" },
      { id: "b", text: "Supports the body and protects the spinal cord" },
      { id: "c", text: "Is used only for tasting" },
      { id: "d", text: "Pumps blood like the heart" }
    ],
    answerId: "b",
    explanation: "The backbone supports us upright and protects the spinal cord, which carries messages.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q07",
    prompt: "Which is a safety habit for the eyes?",
    options: [
      { id: "a", text: "Looking straight at the bright sun" },
      { id: "b", text: "Rubbing eyes with dirty hands often" },
      { id: "c", text: "Wearing protection for bright sun or sparks when adults advise, and resting screens" },
      { id: "d", text: "Reading only in total darkness" }
    ],
    answerId: "c",
    explanation: "Protect eyes from harsh glare and give them rest. Never stare at the sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q08",
    prompt: "Covering your mouth when you sneeze helps ______.",
    options: [
      { id: "a", text: "Make bones longer" },
      { id: "b", text: "Improve night vision" },
      { id: "c", text: "Clean the tongue automatically" },
      { id: "d", text: "Stop germs from spreading in the air to others" }
    ],
    answerId: "d",
    explanation: "Sneezes spray tiny droplets. Covering the mouth and nose is a kind, healthy habit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q09",
    prompt: "Which drink is the healthiest everyday choice after play?",
    options: [
      { id: "a", text: "Clean water or coconut water" },
      { id: "b", text: "Too many sugary colas" },
      { id: "c", text: "Only energy drinks every hour" },
      { id: "d", text: "Unclean pond water" }
    ],
    answerId: "a",
    explanation: "Clean water replaces sweat. Coconut water can also help; sugary colas are occasional treats.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q10",
    prompt: "Strong muscles and bones both need ______.",
    options: [
      { id: "a", text: "Only sitting still all day" },
      { id: "b", text: "Activity, good food, and rest" },
      { id: "c", text: "No sleep ever" },
      { id: "d", text: "Only junk food" }
    ],
    answerId: "b",
    explanation: "Moving your body, eating nourishing food and resting help muscles and bones stay strong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q11",
    prompt: "The sense of touch can warn you when something is sharp or hot so that you ______.",
    options: [
      { id: "a", text: "Ignore danger always" },
      { id: "b", text: "Stop breathing" },
      { id: "c", text: "Pull away and stay safer" },
      { id: "d", text: "Lose all other senses" }
    ],
    answerId: "c",
    explanation: "Pain and heat signals help protect the body from injury.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q12",
    prompt: "Which habit cares for your ears?",
    options: [
      { id: "a", text: "Listening to extremely loud headphones for hours" },
      { id: "b", text: "Pouring hot oil without adult help" },
      { id: "c", text: "Hitting the ears hard for fun" },
      { id: "d", text: "Keeping volume comfortable and avoiding sharp objects in the ear" }
    ],
    answerId: "d",
    explanation: "Loud sound and poking can harm hearing. Keep volumes moderate and ears gently clean outside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q13",
    prompt: "We have different kinds of joints. The elbow mainly works like a ______.",
    options: [
      { id: "a", text: "Hinge that bends and straightens" },
      { id: "b", text: "Fixed joint that never bends" },
      { id: "c", text: "Wheel that spins the head fully like an owl always" },
      { id: "d", text: "Pump that only beats" }
    ],
    answerId: "a",
    explanation: "The elbow is a hinge joint. It mainly bends and straightens the arm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q14",
    prompt: "A balanced day for a Class 4 child should include ______.",
    options: [
      { id: "a", text: "Only screens and no meals" },
      { id: "b", text: "Study, play, meals, water, hygiene and sleep" },
      { id: "c", text: "No play at all" },
      { id: "d", text: "Staying awake past midnight every night" }
    ],
    answerId: "b",
    explanation: "Healthy routines mix learning, active play, nourishing food, cleanliness and enough sleep.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q15",
    prompt: "Why do doctors advise vaccines (as guided by adults and health workers)?",
    options: [
      { id: "a", text: "To replace the need for food" },
      { id: "b", text: "To change eye colour" },
      { id: "c", text: "To help the body fight certain diseases" },
      { id: "d", text: "To stop all exercise" }
    ],
    answerId: "c",
    explanation: "Vaccines help the body's defence system recognise and fight some serious diseases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q16",
    prompt: "Sweating during play is normal. Afterwards you should ______.",
    options: [
      { id: "a", text: "Stay in wet clothes all evening if possible" },
      { id: "b", text: "Never bathe again" },
      { id: "c", text: "Eat only chalk" },
      { id: "d", text: "Drink water and freshen up when you can" }
    ],
    answerId: "d",
    explanation: "Replacing water and cleaning up after sweaty play are healthy habits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q17",
    prompt: "Nails should be kept clean and trimmed because dirty nails can ______.",
    options: [
      { id: "a", text: "Carry germs to your mouth and food" },
      { id: "b", text: "Make you taller" },
      { id: "c", text: "Improve hearing" },
      { id: "d", text: "Replace brushing teeth" }
    ],
    answerId: "a",
    explanation: "Germs can hide under nails. Clean nails are part of good hygiene.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q18",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Bones are soft like insects' wings always" },
      { id: "b", text: "Muscles and bones work together so we can move" },
      { id: "c", text: "Sense organs never send messages to the brain" },
      { id: "d", text: "Sleep is useless for children" }
    ],
    answerId: "b",
    explanation: "Bones provide a frame; muscles pull on them. Together they create movement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q19",
    prompt: "If smoke smells strong in the kitchen, your ______ sense warns you first.",
    options: [
      { id: "a", text: "Sight only always" },
      { id: "b", text: "Taste of sugar" },
      { id: "c", text: "Smell" },
      { id: "d", text: "Hearing of colours" }
    ],
    answerId: "c",
    explanation: "The nose detects smells such as smoke and can warn of danger.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q20",
    prompt: "Wearing clean clothes and bathing regularly are habits of ______.",
    options: [
      { id: "a", text: "Skipping all exercise" },
      { id: "b", text: "Avoiding all water" },
      { id: "c", text: "Damaging the skin on purpose" },
      { id: "d", text: "Personal hygiene" }
    ],
    answerId: "d",
    explanation: "Personal hygiene means keeping the body and clothes clean to stay healthier and fresher.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q21",
    prompt: "Which organ pair is part of the five senses?",
    options: [
      { id: "a", text: "Eyes and ears" },
      { id: "b", text: "Liver and kidney as sense organs" },
      { id: "c", text: "Only femur and tibia" },
      { id: "d", text: "Only stomach and intestine" }
    ],
    answerId: "a",
    explanation: "Eyes and ears are two of the five sense organs. Liver and kidneys are not sense organs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q22",
    prompt: "Bending your knee uses ______.",
    options: [
      { id: "a", text: "Only skin colour" },
      { id: "b", text: "Bones, joints and muscles working together" },
      { id: "c", text: "Only hair follicles" },
      { id: "d", text: "Only toenails" }
    ],
    answerId: "b",
    explanation: "Movement at the knee needs bones meeting at a joint and muscles that pull.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q23",
    prompt: "A healthy plate for growing children should usually include ______.",
    options: [
      { id: "a", text: "Only fried snacks every meal" },
      { id: "b", text: "Only cold drinks" },
      { id: "c", text: "A mix of energy foods, body-building foods and fruits or vegetables" },
      { id: "d", text: "No water at all" }
    ],
    answerId: "c",
    explanation: "A balanced Indian meal mixes grains, dal or other proteins, and protective fruits and vegetables.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-body-b-q24",
    prompt: "Taking short breaks from long screen time helps mainly the ______.",
    options: [
      { id: "a", text: "Sense of smell only" },
      { id: "b", text: "Skeleton to disappear" },
      { id: "c", text: "Tongue to hear" },
      { id: "d", text: "Eyes and overall rest" }
    ],
    answerId: "d",
    explanation: "Screen breaks reduce eye strain and help you move, stretch and rest your mind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddcd",
    title: "Senses, frame and care",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Five senses help you learn about the world. Bones and muscles help you move. Healthy habits keep your body ready every day.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Five senses", reveal: "Eyes, ears, nose, tongue, skin", emoji: "\ud83d\udc41\ufe0f" },
      { label: "Skeleton", reveal: "Bones give shape, support and protection", emoji: "\ud83e\uddb4" },
      { label: "Muscles", reveal: "Muscles pull on bones so you can move", emoji: "\ud83d\udcaa" },
      { label: "Healthy habits", reveal: "Hygiene, exercise, food, water and sleep", emoji: "\ud83d\udca4" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which sense organ helps you hear a bell?",
    options: [
        { id: "a", text: "Eyes" },
        { id: "b", text: "Ears" },
        { id: "c", text: "Nose" },
        { id: "d", text: "Tongue" }
    ],
    answerId: "b",
    why: "Ears are for hearing.",
    visual: "plant",
    speak: "Which sense organ helps you hear a bell?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Five sense organs", "Bones support; muscles move", "Healthy habits every day", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceOurBody: ChapterDef = {
  id: "our-body",
  title: "Our Body",
  emoji: "\ud83e\uddcd",
  blurb: "Senses, bones, muscles and healthy habits",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "human-body",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "human-body",
      questions: SET_B,
    },
  ],
  paperTopics: ["human-body", "living-things"],
};

export const g4ScienceOurBodyQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
