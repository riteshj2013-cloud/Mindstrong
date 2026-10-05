import type { ChapterDef, PrepQuestion } from "../types";

/** Human Body - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-body-a-q01",
    prompt: "How many bones does an adult human body usually have?",
    options: [
      { id: "a", text: "106" },
      { id: "b", text: "300" },
      { id: "c", text: "206" },
      { id: "d", text: "186" }
    ],
    answerId: "c",
    explanation: "An adult skeleton usually has 206 bones. A newborn baby has about 300, but some of them join together as the child grows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q02",
    prompt: "Which part of the skeleton protects the heart and lungs?",
    options: [
      { id: "a", text: "Ribcage" },
      { id: "b", text: "Skull" },
      { id: "c", text: "Kneecap" },
      { id: "d", text: "Hip bone" }
    ],
    answerId: "a",
    explanation: "The ribs curve around the chest like the bars of a cage. This ribcage guards the heart and lungs from knocks and bumps.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q03",
    prompt: "Which is the longest bone in the human body?",
    options: [
      { id: "a", text: "A rib" },
      { id: "b", text: "The collarbone" },
      { id: "c", text: "A bone of the skull" },
      { id: "d", text: "The thigh bone" }
    ],
    answerId: "d",
    explanation: "The thigh bone (femur) runs from the hip to the knee. It is the longest and one of the strongest bones, because it carries much of the body's weight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q04",
    prompt: "Which type of joint is found at the shoulder?",
    options: [
      { id: "a", text: "Hinge joint" },
      { id: "b", text: "Ball-and-socket joint" },
      { id: "c", text: "Pivot joint" },
      { id: "d", text: "Fixed joint" }
    ],
    answerId: "b",
    explanation: "At the shoulder, the rounded top of the upper arm bone fits into a cup-shaped hollow. This ball-and-socket joint lets the arm swing in a full circle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q05",
    prompt: "The elbow lets your arm bend and straighten in only one direction, like a door. What type of joint is it?",
    options: [
      { id: "a", text: "Pivot joint" },
      { id: "b", text: "Fixed joint" },
      { id: "c", text: "Hinge joint" },
      { id: "d", text: "Ball-and-socket joint" }
    ],
    answerId: "c",
    explanation: "A hinge joint moves back and forth in one direction, just like the hinge of a door. The elbow and the knee are both hinge joints.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q06",
    prompt: "The bones of the skull (except the lower jaw) are joined so that they cannot move. These are called:",
    options: [
      { id: "a", text: "Fixed joints" },
      { id: "b", text: "Hinge joints" },
      { id: "c", text: "Pivot joints" },
      { id: "d", text: "Ball-and-socket joints" }
    ],
    answerId: "a",
    explanation: "Fixed joints hold bones tightly together with no movement. The skull bones are joined this way to make a strong, solid case around the brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q07",
    prompt: "What joins a muscle to a bone?",
    options: [
      { id: "a", text: "Ligament" },
      { id: "b", text: "Cartilage" },
      { id: "c", text: "Nerve" },
      { id: "d", text: "Tendon" }
    ],
    answerId: "d",
    explanation: "A tendon is a tough, cord-like band that connects a muscle to a bone. When the muscle pulls, the tendon pulls the bone. (Ligaments join bone to bone.)",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q08",
    prompt: "Which of these is done by an involuntary muscle?",
    options: [
      { id: "a", text: "Kicking a football" },
      { id: "b", text: "The heart beating" },
      { id: "c", text: "Writing in a notebook" },
      { id: "d", text: "Waving goodbye" }
    ],
    answerId: "b",
    explanation: "The heart keeps beating on its own, day and night, without us deciding to make it beat. Kicking, writing, and waving are things we choose to do, using voluntary muscles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q09",
    prompt: "What carries messages between the brain and other parts of the body?",
    options: [
      { id: "a", text: "Tendons" },
      { id: "b", text: "Bones" },
      { id: "c", text: "Nerves" },
      { id: "d", text: "Ligaments" }
    ],
    answerId: "c",
    explanation: "Nerves are thin, thread-like paths that carry messages. They take information from the sense organs to the brain and carry the brain's commands to the muscles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q10",
    prompt: "With her eyes closed, Kavya can tell whether a cloth is rough or smooth. Which sense organ is she using?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Skin" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Ear" }
    ],
    answerId: "b",
    explanation: "The skin is the sense organ for touch. It can feel whether something is rough or smooth, hot or cold, soft or hard.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q11",
    prompt: "Arjun turns his head left and right to check for traffic before crossing the road. Which joint makes this movement possible?",
    options: [
      { id: "a", text: "Hinge joint" },
      { id: "b", text: "Ball-and-socket joint" },
      { id: "c", text: "Pivot joint" },
      { id: "d", text: "Fixed joint" }
    ],
    answerId: "c",
    explanation: "A pivot joint lets one bone turn around another. The pivot joint at the top of the backbone, just below the skull, lets the head turn from side to side.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q12",
    prompt: "A newborn baby has more bones than an adult. Why?",
    options: [
      { id: "a", text: "Some bones join (fuse) together as the child grows." },
      { id: "b", text: "Adults lose bones whenever they fall down." },
      { id: "c", text: "Bones dissolve if a person does not drink milk." },
      { id: "d", text: "Babies have extra ribs that fall off later." }
    ],
    answerId: "a",
    explanation: "Many bones in a baby's body are still in separate pieces. As the child grows, some of these pieces fuse into one bone, so the total drops to about 206.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q13",
    prompt: "When you bend your arm at the elbow to lift a bag, what does your biceps muscle (front of the upper arm) do?",
    options: [
      { id: "a", text: "It relaxes and becomes longer." },
      { id: "b", text: "It contracts, becoming shorter and thicker." },
      { id: "c", text: "It pushes the lower arm bone upward." },
      { id: "d", text: "It stops working completely." }
    ],
    answerId: "b",
    explanation: "To bend the arm, the biceps contracts, which means it gets shorter and fatter (you can feel it bulge). This pulls the lower arm up. Muscles can only pull, never push.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q14",
    prompt: "Which meal would help most in building strong bones?",
    options: [
      { id: "a", text: "Potato chips and a cola" },
      { id: "b", text: "Sweets and toffees" },
      { id: "c", text: "Fried snacks only" },
      { id: "d", text: "Ragi roti, curd, and green leafy vegetables" }
    ],
    answerId: "d",
    explanation: "Bones need calcium to be strong. Ragi, curd, milk, and green leafy vegetables are rich in calcium. Chips, cola, and sweets give very little of it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q15",
    prompt: "Meena touches a hot pan and pulls her hand away at once, even before she thinks about it. Which part mainly controls this quick action?",
    options: [
      { id: "a", text: "Stomach" },
      { id: "b", text: "Spinal cord" },
      { id: "c", text: "Heart" },
      { id: "d", text: "Lungs" }
    ],
    answerId: "b",
    explanation: "This super-fast action is a reflex. The message from the skin goes to the spinal cord, which sends a command straight back to the arm muscles, saving time. The brain finds out a moment later and feels the pain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q16",
    prompt: "Which of these activities mostly uses voluntary muscles?",
    options: [
      { id: "a", text: "The heart pumping blood" },
      { id: "b", text: "Food moving along the intestines" },
      { id: "c", text: "Pedalling a bicycle" },
      { id: "d", text: "The stomach churning food during sleep" }
    ],
    answerId: "c",
    explanation: "Pedalling is something you decide to do, using the skeletal muscles of your legs. These are voluntary muscles. The heart, stomach, and intestines work on their own.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q17",
    prompt: "Rohan fell and his wrist is swollen. Which test would a doctor use to see if a bone is broken?",
    options: [
      { id: "a", text: "X-ray" },
      { id: "b", text: "Stethoscope check" },
      { id: "c", text: "Thermometer reading" },
      { id: "d", text: "Eye chart test" }
    ],
    answerId: "a",
    explanation: "X-rays pass through soft parts like skin and muscle but are blocked by bones. So an X-ray picture shows the bones clearly, including any crack or break.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q18",
    prompt: "What is the healthiest way to carry a school bag?",
    options: [
      { id: "a", text: "Always on one shoulder" },
      { id: "b", text: "Hanging low, near the back of the knees" },
      { id: "c", text: "Packed as full and heavy as possible" },
      { id: "d", text: "On both shoulders, close to the back, and not too heavy" }
    ],
    answerId: "d",
    explanation: "Using both straps spreads the weight evenly on both shoulders and keeps the backbone straight. A heavy bag on one side makes the body lean and can strain the back.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q19",
    prompt: "The brain is protected by the skull. Which part of the skeleton protects the spinal cord?",
    options: [
      { id: "a", text: "Ribcage" },
      { id: "b", text: "Backbone" },
      { id: "c", text: "Collarbone" },
      { id: "d", text: "Hip bone" }
    ],
    answerId: "b",
    explanation: "The backbone is made of many small bones called vertebrae, stacked one on top of another. The spinal cord runs safely through a tunnel inside them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q20",
    prompt: "On which sense organ are the taste buds found?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Skin" },
      { id: "d", text: "Eye" }
    ],
    answerId: "a",
    explanation: "The tongue has tiny taste buds that help us sense sweet, salty, sour, and bitter tastes. The messages then travel through nerves to the brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q21",
    prompt: "Muscles can only pull, they cannot push. Why do muscles that move bones usually work in pairs?",
    options: [
      { id: "a", text: "So that one muscle can rest forever while the other works" },
      { id: "b", text: "Because one muscle alone is too small to be seen" },
      { id: "c", text: "So that one muscle pulls a bone one way and the other pulls it back" },
      { id: "d", text: "Because each bone must be joined to exactly two nerves" }
    ],
    answerId: "c",
    explanation: "Since a muscle cannot push, a single muscle could bend a joint but never straighten it again. A partner muscle on the other side pulls the bone back. The biceps and triceps are such a pair.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q22",
    prompt: "Your knee bends in only one direction, but your hip lets your leg swing forward, backward, and out to the side. Which statement explains this best?",
    options: [
      { id: "a", text: "The knee is a hinge joint, and the hip is a ball-and-socket joint that allows movement in many directions." },
      { id: "b", text: "The knee is a fixed joint, and the hip is a hinge joint." },
      { id: "c", text: "The knee has no muscles, but the hip does." },
      { id: "d", text: "The hip bone is longer than the thigh bone." }
    ],
    answerId: "a",
    explanation: "A hinge joint (knee) moves only back and forth. In a ball-and-socket joint (hip), the round top of the thigh bone turns in a cup, so the leg can move in many directions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q23",
    prompt: "A man injures his spinal cord in his lower back. His leg muscles are healthy, but he cannot move his legs. What is the best explanation?",
    options: [
      { id: "a", text: "His leg bones have become too soft." },
      { id: "b", text: "His heart has stopped sending blood to the legs." },
      { id: "c", text: "His leg muscles have changed into involuntary muscles." },
      { id: "d", text: "Messages from his brain cannot travel past the injury to reach the leg muscles." }
    ],
    answerId: "d",
    explanation: "The brain's commands travel down the spinal cord and then along nerves to the muscles. If the spinal cord is damaged, the message is blocked, so the muscles never get the order to move.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q24",
    prompt: "Imagine your skeleton had bones but no movable joints at all. What would happen?",
    options: [
      { id: "a", text: "You would grow taller much faster." },
      { id: "b", text: "Your bones would become soft like rubber." },
      { id: "c", text: "Your heart would stop beating." },
      { id: "d", text: "Your body would be stiff, and you could not bend your arms, legs, or fingers." }
    ],
    answerId: "d",
    explanation: "Movable joints are the places where the skeleton can bend or turn. Without them, the skeleton would be one stiff frame, and muscles would have no joint to move the bones around.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-body-b-q01",
    prompt: "Which three parts together make up the nervous system?",
    options: [
      { id: "a", text: "Brain, spinal cord, and nerves" },
      { id: "b", text: "Heart, lungs, and blood" },
      { id: "c", text: "Bones, joints, and muscles" },
      { id: "d", text: "Stomach, intestines, and liver" }
    ],
    answerId: "a",
    explanation: "The brain is the control centre, the spinal cord is the main message cable down the back, and nerves branch out to every part of the body. Together they make up the nervous system.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q02",
    prompt: "The tip of your nose and the flap of your ear can be bent gently and spring back. They are supported by:",
    options: [
      { id: "a", text: "Hard bone" },
      { id: "b", text: "Muscle only" },
      { id: "c", text: "Cartilage" },
      { id: "d", text: "Nerves" }
    ],
    answerId: "c",
    explanation: "Cartilage is a firm but bendy material, softer than bone. It gives shape to the outer ear and the tip of the nose, and it also cushions the ends of bones at joints.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q03",
    prompt: "What do ligaments join together?",
    options: [
      { id: "a", text: "Muscle to skin" },
      { id: "b", text: "Muscle to bone" },
      { id: "c", text: "Nerve to brain" },
      { id: "d", text: "Bone to bone" }
    ],
    answerId: "d",
    explanation: "Ligaments are strong bands that hold bones together at a joint. Tendons, not ligaments, join muscles to bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q04",
    prompt: "How many pairs of ribs does a human usually have?",
    options: [
      { id: "a", text: "6 pairs" },
      { id: "b", text: "12 pairs" },
      { id: "c", text: "20 pairs" },
      { id: "d", text: "24 pairs" }
    ],
    answerId: "b",
    explanation: "Most people have 12 pairs of ribs, which makes 24 ribs in all. They join the backbone at the back and form the ribcage around the chest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q05",
    prompt: "What is the special muscle that makes up the walls of the heart called?",
    options: [
      { id: "a", text: "Cardiac muscle" },
      { id: "b", text: "Skeletal muscle" },
      { id: "c", text: "Biceps" },
      { id: "d", text: "Tendon muscle" }
    ],
    answerId: "a",
    explanation: "Heart muscle is called cardiac muscle. It is involuntary, which means it works on its own, and it keeps contracting all through life without getting tired.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q06",
    prompt: "Where in the body are smooth (involuntary) muscles found?",
    options: [
      { id: "a", text: "In the upper arm" },
      { id: "b", text: "In the thigh" },
      { id: "c", text: "In the walls of the stomach and intestines" },
      { id: "d", text: "In the fingers" }
    ],
    answerId: "c",
    explanation: "Smooth muscles line organs like the stomach and intestines. They squeeze slowly to mix food and move it along, without us controlling them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q07",
    prompt: "What type of joint is the knee?",
    options: [
      { id: "a", text: "Pivot joint" },
      { id: "b", text: "Ball-and-socket joint" },
      { id: "c", text: "Fixed joint" },
      { id: "d", text: "Hinge joint" }
    ],
    answerId: "d",
    explanation: "The knee works like the hinge of a door, letting the lower leg move back and forth in one direction only.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q08",
    prompt: "Which joint allows the leg to move in many directions where it joins the body?",
    options: [
      { id: "a", text: "Knee joint" },
      { id: "b", text: "Hip joint" },
      { id: "c", text: "Ankle joint" },
      { id: "d", text: "Toe joint" }
    ],
    answerId: "b",
    explanation: "The hip is a ball-and-socket joint. The ball-shaped top of the thigh bone fits into a cup in the hip bone, so the leg can swing in many directions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q09",
    prompt: "Some bones have a soft material inside them that makes new blood cells. What is it called?",
    options: [
      { id: "a", text: "Bone marrow" },
      { id: "b", text: "Cartilage" },
      { id: "c", text: "Ligament" },
      { id: "d", text: "Tendon" }
    ],
    answerId: "a",
    explanation: "Bone marrow is a soft tissue found inside many bones. It works like a factory, making new blood cells for the body.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q10",
    prompt: "Which vitamin does our skin make in sunlight, helping the body use calcium for strong bones?",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Vitamin D" },
      { id: "d", text: "Vitamin K" }
    ],
    answerId: "c",
    explanation: "When gentle sunlight falls on the skin, the body makes vitamin D. Vitamin D helps the body take in and use calcium, which keeps bones hard and strong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q11",
    prompt: "In which part of the body is the smallest bone found?",
    options: [
      { id: "a", text: "Little finger" },
      { id: "b", text: "Little toe" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Ear" }
    ],
    answerId: "d",
    explanation: "The smallest bone, called the stapes, is deep inside the ear. It is about the size of a grain of rice and helps pass sound towards the inner ear.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q12",
    prompt: "A dog barks behind Sam, and he turns around. Which order shows how this happens?",
    options: [
      { id: "a", text: "Brain \u2192 ear \u2192 nerves \u2192 muscles" },
      { id: "b", text: "Ear \u2192 nerves \u2192 brain \u2192 nerves \u2192 muscles" },
      { id: "c", text: "Muscles \u2192 nerves \u2192 brain \u2192 ear" },
      { id: "d", text: "Ear \u2192 muscles \u2192 brain \u2192 nerves" }
    ],
    answerId: "b",
    explanation: "The ear picks up the sound and sends a message along nerves to the brain. The brain decides to turn and sends a command along other nerves to the neck and body muscles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q13",
    prompt: "Ravi broke a bone in his arm, and the doctor put it in a plaster cast. What is the main purpose of the cast?",
    options: [
      { id: "a", text: "To keep the broken bone still so it can join back in the right position" },
      { id: "b", text: "To give the bone extra calcium through the skin" },
      { id: "c", text: "To stop the muscles from ever moving again" },
      { id: "d", text: "To keep the arm warm in winter" }
    ],
    answerId: "a",
    explanation: "Bones are living and can heal themselves. The cast holds the broken pieces still in the correct position so new bone can grow and join them properly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q14",
    prompt: "Your stomach keeps digesting food even while you are fast asleep. What does this tell you about stomach muscles?",
    options: [
      { id: "a", text: "They are voluntary muscles." },
      { id: "b", text: "They are joined to bones by tendons." },
      { id: "c", text: "They are involuntary muscles." },
      { id: "d", text: "They only work when you are awake." }
    ],
    answerId: "c",
    explanation: "Muscles that work without our control, even during sleep, are involuntary. The stomach's smooth muscles keep churning food whether we think about it or not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q15",
    prompt: "Which of these is NOT a job of the skeleton?",
    options: [
      { id: "a", text: "Giving the body its shape" },
      { id: "b", text: "Protecting soft organs like the brain" },
      { id: "c", text: "Helping the body move" },
      { id: "d", text: "Digesting the food we eat" }
    ],
    answerId: "d",
    explanation: "The skeleton gives shape, support, and protection, and works with muscles to move the body. Digesting food is the job of the digestive system, not the skeleton.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q16",
    prompt: "After a long race, Priya's leg muscles feel tired and sore. Which type of muscle was working hardest?",
    options: [
      { id: "a", text: "Cardiac muscle" },
      { id: "b", text: "Skeletal (voluntary) muscle" },
      { id: "c", text: "Smooth muscle of the stomach" },
      { id: "d", text: "Muscles of the intestines" }
    ],
    answerId: "b",
    explanation: "Running uses the skeletal muscles of the legs, which pull on the bones to move them. These voluntary muscles can get tired after hard work and need rest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q17",
    prompt: "Which is the best posture for doing homework at a desk?",
    options: [
      { id: "a", text: "Back straight, feet flat on the floor, and the book at a comfortable distance" },
      { id: "b", text: "Bending low with the face very close to the book" },
      { id: "c", text: "Lying on your stomach on the bed" },
      { id: "d", text: "Sitting cross-legged on a chair and leaning to one side" }
    ],
    answerId: "a",
    explanation: "Sitting straight with feet on the floor keeps the backbone in its natural shape. Keeping the book at a proper distance also protects the eyes and neck from strain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q18",
    prompt: "Which joint is matched correctly with its body part?",
    options: [
      { id: "a", text: "Knee \u2013 pivot joint" },
      { id: "b", text: "Neck \u2013 hinge joint" },
      { id: "c", text: "Skull \u2013 fixed joint" },
      { id: "d", text: "Shoulder \u2013 hinge joint" }
    ],
    answerId: "c",
    explanation: "Skull bones are joined by fixed joints that do not move. The knee is a hinge joint, the neck has a pivot joint, and the shoulder is a ball-and-socket joint.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q19",
    prompt: "Wearing a helmet while cycling mainly protects which parts of the body?",
    options: [
      { id: "a", text: "Ribcage and lungs" },
      { id: "b", text: "Backbone and spinal cord" },
      { id: "c", text: "Knees and elbows" },
      { id: "d", text: "Skull and brain" }
    ],
    answerId: "d",
    explanation: "A helmet adds an extra cushioned layer over the skull. In a fall, it absorbs the shock and helps protect the brain, which controls the whole body.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q20",
    prompt: "Blindfolded, Tara pinches her nose shut and eats small pieces of apple and raw potato. She finds it hard to tell them apart. What does this show?",
    options: [
      { id: "a", text: "The tongue cannot taste anything at all." },
      { id: "b", text: "The sense of smell helps us recognise the flavour of food." },
      { id: "c", text: "Apples and potatoes are the same food." },
      { id: "d", text: "Our eyes are the organ of taste." }
    ],
    answerId: "b",
    explanation: "Much of what we call \"flavour\" comes from smell. With the nose blocked, the tongue alone gets less information, so the brain finds it harder to tell similar foods apart.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q21",
    prompt: "Most joints in the body can move. Why is it useful that skull bones are joined by fixed joints instead?",
    options: [
      { id: "a", text: "A solid, unmoving skull makes a strong case that protects the brain." },
      { id: "b", text: "Fixed joints help us chew food faster." },
      { id: "c", text: "Fixed joints allow the head to turn in a full circle." },
      { id: "d", text: "The brain needs the skull bones to move so it can think." }
    ],
    answerId: "a",
    explanation: "The brain is soft and very important. Fixed joints lock the skull bones into a hard, solid helmet. The jaw is the only skull bone that moves, so we can chew and talk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q22",
    prompt: "When Riya breathes in deeply, her chest rises and grows wider. What does this tell us about the ribcage?",
    options: [
      { id: "a", text: "The ribs are made of soft muscle, not bone." },
      { id: "b", text: "The ribcage is a fixed joint like the skull." },
      { id: "c", text: "The ribs can move a little, helped by muscles between them, so the chest can expand." },
      { id: "d", text: "The lungs push the ribs outward with no help from muscles." }
    ],
    answerId: "c",
    explanation: "The ribs are joined to the backbone (and most to the breastbone through bendy cartilage), so they can move slightly. Muscles between the ribs lift them up and out, making room for the lungs to fill with air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q23",
    prompt: "The biceps (front of upper arm) and triceps (back of upper arm) work as a pair. What happens when you STRAIGHTEN your arm?",
    options: [
      { id: "a", text: "Both muscles contract at the same time." },
      { id: "b", text: "The biceps contracts and the triceps relaxes." },
      { id: "c", text: "Both muscles relax, and the arm falls straight." },
      { id: "d", text: "The triceps contracts and the biceps relaxes." }
    ],
    answerId: "d",
    explanation: "To straighten the arm, the triceps contracts and pulls the lower arm down, while the biceps relaxes and gets longer. When you bend the arm, they swap roles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q24",
    prompt: "Astronauts who spend months in space, where they float and their bones carry almost no weight, often come back with weaker bones. What does this suggest for people on Earth?",
    options: [
      { id: "a", text: "Bones get stronger when we rest and avoid moving." },
      { id: "b", text: "Regular exercise like walking, running, and jumping helps keep bones strong." },
      { id: "c", text: "Floating in water every day will make bones grow longer." },
      { id: "d", text: "Bones do not need any care once we are adults." }
    ],
    answerId: "b",
    explanation: "Bones are living parts that respond to use. When they carry weight and work hard, they stay strong. That is why active play and exercise, along with calcium and vitamin D, are good for our bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddb4",
    title: "Your body frame",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Bones make your skeleton. Joints let you move. Muscles pull. Nerves carry messages.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Skeleton", reveal: "Shape, support, protection, movement", emoji: "\ud83e\uddb4" },
      { label: "Joints", reveal: "Hinge, ball-and-socket, pivot, fixed", emoji: "\ud83d\udd17" },
      { label: "Muscles", reveal: "Pull in pairs; tendons join to bones", emoji: "\ud83d\udcaa" },
      { label: "Nerves", reveal: "Messages and quick reflexes", emoji: "\ud83e\udde0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which bone protects the brain?",
    options: [
        { id: "a", text: "Ribcage" },
        { id: "b", text: "Skull" },
        { id: "c", text: "Thigh bone" },
        { id: "d", text: "Kneecap" }
    ],
    answerId: "b",
    why: "The skull guards the brain.",
    visual: "plant",
    speak: "Which bone protects the brain?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["206 adult bones", "Joints allow movement", "Muscles work in pairs", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5ScienceBody: ChapterDef = {
  id: "human-body",
  title: "Human Body",
  emoji: "\ud83e\uddb4",
  blurb: "Skeleton, muscles and nerves",
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

export const g5ScienceBodyQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
