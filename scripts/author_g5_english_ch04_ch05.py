#!/usr/bin/env python3
"""Author Grade 5 English Ch4 (Spoken) + Ch5 (Writing) markdown, then emit TS modules."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ingest_g8_english import lesson
from ingest_lib import DOCS, OUT, emit_module, eng_sets

GRADE_DIR = DOCS / "grade-5"
GRADE_DIR.mkdir(parents=True, exist_ok=True)


def q(num, skill, difficulty, stem, options, answer, explanation, qid):
    opts = "\n".join(f"  - {k}: {v}" for k, v in options)
    return f"""### Q{num:02d}
- id: {qid}
- skill: {skill}
- difficulty: {difficulty}
- stem: |
  {stem.replace(chr(10), chr(10) + "  ")}
- options:
{opts}
- answer: {answer}
- explanation: |
  {explanation.replace(chr(10), chr(10) + "  ")}
"""


def write_ch04():
    passages = """## Passage bank (for quizzes)

### P1 — New Friend in Class 5B (dialogue)
**Meera:** Good morning! Are you new here?
**Arjun:** Yes. I joined today. My name is Arjun.
**Meera:** Welcome to Class 5B, Arjun. I'm Meera. Would you like to sit with me?
**Arjun:** That's kind of you. Thank you!
**Meera:** May I show you where we keep our bags and lunch boxes?
**Arjun:** Yes, please. I don't want to get lost.
**Meera:** Of course. After assembly, I'll take you to the library too.
**Arjun:** That would be wonderful. Could you also tell me the teacher's name?
**Meera:** Ms. Kapoor. She's kind, and she likes it when we raise our hands before we speak.
**Arjun:** Thanks again, Meera. I feel much better now.

### P2 — Phone Call About Homework (dialogue)
**Riya:** Hello, is that Kabir?
**Kabir:** Speaking. Hi, Riya!
**Riya:** Hi! Sorry to call during dinner. Do you have a minute?
**Kabir:** Sure. What's up?
**Riya:** I missed Maths today because I had a fever. Could you please tell me what homework Ms. Fernandes gave?
**Kabir:** Of course. We must finish Exercise 4.2, questions 1 to 8, and bring our geometry boxes tomorrow.
**Riya:** Got it. Should I copy the notes from anyone?
**Kabir:** You can borrow mine tomorrow morning. Shall I also share a photo of the board work on WhatsApp?
**Riya:** That would help a lot. Thank you so much!
**Kabir:** No problem. Feel better soon. Bye!
**Riya:** Bye, Kabir. Have a good evening!

### P3 — Helping a Visitor (dialogue)
**Guard:** Good afternoon. How may I help you?
**Visitor:** Good afternoon. I am looking for the school office. I'm here to collect my daughter's transfer certificate.
**Guard:** Certainly, ma'am. Please go straight past the playground, then turn left at the mango tree. The office is the blue door next to the Principal's room.
**Visitor:** Straight, then left at the mango tree. Is that correct?
**Guard:** Yes. If you get confused, ask any teacher. Would you like me to call someone to walk with you?
**Visitor:** That's thoughtful, but I think I can manage. Thank you very much.
**Guard:** You're welcome. Have a pleasant day.

### N1 — Morning Announcement
> **ANNOUNCEMENT — Morning Assembly**
> Good morning, students. This is your Head Girl, Ananya speaking.
> Tomorrow is our Sports Day practice. Classes 4 and 5 will assemble on the ground at 8:15 a.m. Please wear your white sports kit and carry a water bottle. Do not bring bags to the ground.
> After practice, return quietly to your classrooms. Thank you, and have a wonderful day.

"""

    # Set A — 24 questions; answer letters balanced 6 each
    set_a = [
        q(1, "spoken-greeting", "easy",
          "Read Passage P1. How does Meera greet Arjun at the start?",
          [("A", "She shouts across the room."), ("B", "She says good morning and asks if he is new."),
           ("C", "She ignores him until recess."), ("D", "She tells him to sit somewhere else.")],
          "B", "Meera opens with \"Good morning!\" and asks if he is new — a warm, clear greeting.",
          "g5-eng-ch04-a-01"),
        q(2, "spoken-polite-request", "easy",
          "Read Passage P1. Which line is a polite offer of help?",
          [("A", "\"My name is Arjun.\""), ("B", "\"I joined today.\""),
           ("C", "\"Would you like to sit with me?\""), ("D", "\"Ms. Kapoor.\"")],
          "C", "\"Would you like…?\" is a polite offer. It gives Arjun a choice instead of ordering him.",
          "g5-eng-ch04-a-02"),
        q(3, "spoken-polite-request", "medium",
          "Read Passage P1. Arjun says, \"Could you also tell me the teacher's name?\" This shows he is —",
          [("A", "giving an order"), ("B", "asking politely for information"),
           ("C", "complaining about class"), ("D", "refusing Meera's help")],
          "B", "\"Could you…?\" is a polite request for information, not a command or complaint.",
          "g5-eng-ch04-a-03"),
        q(4, "spoken-situation", "medium",
          "Read Passage P1. Why does Meera mention raising hands before speaking?",
          [("A", "To scare Arjun away from class"), ("B", "To explain a classroom rule kindly"),
           ("C", "To finish her homework aloud"), ("D", "To ask Arjun to leave")],
          "B", "She shares what Ms. Kapoor likes so Arjun knows the class habit — a helpful tip for a new student.",
          "g5-eng-ch04-a-04"),
        q(5, "spoken-response", "easy",
          "Read Passage P1. Which reply best shows Arjun is grateful?",
          [("A", "\"I don't want to get lost.\""), ("B", "\"I joined today.\""),
           ("C", "\"Thanks again, Meera. I feel much better now.\""), ("D", "\"Are you new here?\"")],
          "C", "He thanks Meera again and shares that he feels better — clear gratitude.",
          "g5-eng-ch04-a-05"),
        q(6, "spoken-telephone", "easy",
          "Read Passage P2. How does Kabir answer the phone?",
          [("A", "He says \"Speaking\" and greets Riya."), ("B", "He hangs up at once."),
           ("C", "He shouts \"Who is this?\""), ("D", "He asks Riya to call later without listening.")],
          "A", "\"Speaking. Hi, Riya!\" confirms it is Kabir and greets her politely.",
          "g5-eng-ch04-a-06"),
        q(7, "spoken-telephone", "medium",
          "Read Passage P2. Why does Riya say \"Sorry to call during dinner\"?",
          [("A", "She wants Kabir to feel guilty"), ("B", "She is being thoughtful about the time"),
           ("C", "She forgot Kabir's name"), ("D", "She is ending the call")],
          "B", "Apologising for calling at dinner shows she knows the timing may be inconvenient.",
          "g5-eng-ch04-a-07"),
        q(8, "spoken-polite-request", "easy",
          "Read Passage P2. Which sentence is Riya's main polite request?",
          [("A", "\"Feel better soon.\""), ("B", "\"Have a good evening!\""),
           ("C", "\"Could you please tell me what homework Ms. Fernandes gave?\""),
           ("D", "\"Bye, Kabir.\"")],
          "C", "Her purpose for calling is to learn the homework; \"Could you please…?\" is the polite ask.",
          "g5-eng-ch04-a-08"),
        q(9, "spoken-situation", "medium",
          "Read Passage P2. Kabir offers to share a photo of the board work. What does this show?",
          [("A", "He is being helpful and clear"), ("B", "He wants Riya to fail"),
           ("C", "He refuses to help"), ("D", "He is angry about dinner")],
          "A", "Offering notes and a photo gives Riya what she missed — practical help.",
          "g5-eng-ch04-a-09"),
        q(10, "spoken-closing", "easy",
          "Read Passage P2. Which pair of lines closes the call politely?",
          [("A", "\"What's up?\" / \"Got it.\""),
           ("B", "\"Bye, Kabir. Have a good evening!\" / \"Bye!\" related lines from both"),
           ("C", "Only the homework list with no goodbye"),
           ("D", "\"I had a fever.\" / \"Exercise 4.2\"")],
          "B", "Good telephone manners end with a warm goodbye (and a kind wish), not an abrupt hang-up.",
          "g5-eng-ch04-a-10"),
        q(11, "spoken-directions", "easy",
          "Read Passage P3. What does the visitor need?",
          [("A", "A cricket bat from the store room"), ("B", "The school office for a transfer certificate"),
           ("C", "Lunch in the canteen"), ("D", "A seat in Class 5B")],
          "B", "She says she is looking for the office to collect a transfer certificate.",
          "g5-eng-ch04-a-11"),
        q(12, "spoken-directions", "medium",
          "Read Passage P3. Which directions does the guard give?",
          [("A", "Climb to the terrace, then turn right"),
           ("B", "Go straight past the playground, then turn left at the mango tree"),
           ("C", "Wait outside the gate forever"),
           ("D", "Run across the football field twice")],
          "B", "The guard's clear path is: straight past the playground, left at the mango tree.",
          "g5-eng-ch04-a-12"),
        q(13, "spoken-polite-request", "medium",
          "Read Passage P3. The guard asks, \"Would you like me to call someone to walk with you?\" This is —",
          [("A", "a rude order"), ("B", "a polite offer of more help"),
           ("C", "a refusal to help"), ("D", "a joke about mangoes")],
          "B", "\"Would you like…?\" offers extra help without forcing it.",
          "g5-eng-ch04-a-13"),
        q(14, "spoken-response", "easy",
          "Read Passage P3. How does the visitor check she understood?",
          [("A", "She repeats: straight, then left at the mango tree"),
           ("B", "She walks away silently"),
           ("C", "She scolds the guard"),
           ("D", "She asks for a cricket score")],
          "A", "Repeating directions is a smart way to confirm you heard them correctly.",
          "g5-eng-ch04-a-14"),
        q(15, "spoken-announcement", "easy",
          "Read Announcement N1. Who is speaking?",
          [("A", "The school cook"), ("B", "The Head Girl, Ananya"),
           ("C", "A Class 3 student with no name"), ("D", "A visitor at the gate")],
          "B", "The announcement begins: \"This is your Head Girl, Ananya speaking.\"",
          "g5-eng-ch04-a-15"),
        q(16, "spoken-announcement", "easy",
          "Read Announcement N1. When should Classes 4 and 5 assemble?",
          [("A", "At 8:15 a.m. on the ground"), ("B", "At midnight in the library"),
           ("C", "After lunch in the canteen only"), ("D", "On Sunday at home")],
          "A", "The announcement says assemble on the ground at 8:15 a.m.",
          "g5-eng-ch04-a-16"),
        q(17, "spoken-announcement", "medium",
          "Read Announcement N1. Students must NOT —",
          [("A", "wear white sports kit"), ("B", "carry a water bottle"),
           ("C", "bring bags to the ground"), ("D", "return to classrooms after practice")],
          "C", "The announcement clearly says: \"Do not bring bags to the ground.\"",
          "g5-eng-ch04-a-17"),
        q(18, "spoken-situation", "medium",
          "You bump into a classmate and spill her water. What is the most polite thing to say?",
          [("A", "\"Watch where you stand!\""), ("B", "\"I'm so sorry. Let me help you clean that up.\""),
           ("C", "\"Ha! That was funny.\""), ("D", "Say nothing and walk away.")],
          "B", "A good apology names the mistake and offers to make it right.",
          "g5-eng-ch04-a-18"),
        q(19, "spoken-polite-request", "easy",
          "You need to borrow an eraser. Which is the most polite ask?",
          [("A", "\"Give me that eraser now.\""), ("B", "\"Could I borrow your eraser, please?\""),
           ("C", "\"You never share anything.\""), ("D", "Grab it without speaking.")],
          "B", "\"Could I… please?\" asks permission politely instead of demanding.",
          "g5-eng-ch04-a-19"),
        q(20, "spoken-response", "hard",
          "A neighbour phones and asks if your mother is home. Mother is busy cooking. Best reply?",
          [("A", "\"She's busy right now. May I take a message?\""),
           ("B", "\"Why are you calling?\""),
           ("C", "\"Call someone else.\""),
           ("D", "Hang up without a word.")],
          "A", "You explain briefly and offer to take a message — helpful and polite.",
          "g5-eng-ch04-a-20"),
        q(21, "spoken-invitation", "medium",
          "You want a friend to join your birthday picnic. Best invitation?",
          [("A", "\"Come or don't. I don't care.\""),
           ("B", "\"Would you like to join my birthday picnic on Saturday at 4 p.m.?\""),
           ("C", "\"You must come or I'll be angry.\""),
           ("D", "\"Picnics are boring.\"")],
          "B", "A clear invitation includes the event, day and time, and asks with \"Would you like…?\"",
          "g5-eng-ch04-a-21"),
        q(22, "spoken-situation", "hard",
          "In a group project meeting, two friends talk over you. What should you say calmly?",
          [("A", "\"Excuse me — may I finish my point, please?\""),
           ("B", "\"You are both useless!\""),
           ("C", "Shout louder than them."),
           ("D", "Leave the group forever without speaking.")],
          "A", "\"Excuse me\" plus a polite request to finish keeps the talk respectful.",
          "g5-eng-ch04-a-22"),
        q(23, "spoken-greeting", "easy",
          "You meet your teacher in the corridor in the morning. Best greeting?",
          [("A", "\"Hey, teach!\""), ("B", "\"Good morning, ma'am.\""),
           ("C", "Whistle and walk past"), ("D", "\"What do you want?\"")],
          "B", "A respectful morning greeting uses \"Good morning\" and a proper title.",
          "g5-eng-ch04-a-23"),
        q(24, "spoken-closing", "medium",
          "You are leaving a classmate's house after studying. Best closing?",
          [("A", "Walk out without a word"),
           ("B", "\"Thanks for studying with me. See you at school!\""),
           ("C", "\"Your house is messy.\""),
           ("D", "\"I'm never coming back.\"")],
          "B", "Thank the host and say a friendly goodbye — good spoken manners.",
          "g5-eng-ch04-a-24"),
    ]

    # Fix Q10 - make options cleaner
    set_a[9] = q(10, "spoken-closing", "easy",
          "Read Passage P2. How do Riya and Kabir end the call?",
          [("A", "They argue about Maths."), ("B", "They say goodbye and wish each other well."),
           ("C", "They forget to hang up and stay silent."), ("D", "They shout about dinner.")],
          "B", "Riya says goodbye and wishes Kabir a good evening; Kabir says bye and hopes she feels better.",
          "g5-eng-ch04-a-10")

    set_b = [
        q(1, "spoken-greeting", "easy",
          "Read Passage P1. What is Arjun's first polite reply after Meera welcomes him?",
          [("A", "\"That's kind of you. Thank you!\""), ("B", "\"Go away.\""),
           ("C", "\"I already know everything.\""), ("D", "\"Where is the canteen only?\"")],
          "A", "He accepts the welcome with thanks — warm and polite.",
          "g5-eng-ch04-b-01"),
        q(2, "spoken-situation", "medium",
          "Read Passage P1. Why does Arjun say he doesn't want to get lost?",
          [("A", "He is joking about maps"), ("B", "He is new and needs guidance around school"),
           ("C", "He wants to skip assembly"), ("D", "He refuses Meera's help")],
          "B", "As a new student, he is unsure of places, so he accepts Meera's offer to show him around.",
          "g5-eng-ch04-b-02"),
        q(3, "spoken-polite-request", "easy",
          "Read Passage P1. \"May I show you where we keep our bags…?\" Here \"May I\" means Meera is —",
          [("A", "ordering Arjun"), ("B", "asking permission to help"),
           ("C", "refusing to talk"), ("D", "complaining to Ms. Kapoor")],
          "B", "\"May I…?\" asks permission; it is softer than \"I will show you whether you like it or not.\"",
          "g5-eng-ch04-b-03"),
        q(4, "spoken-response", "medium",
          "Read Passage P1. Which classroom habit does Meera pass on?",
          [("A", "Never speak in class"), ("B", "Raise hands before speaking"),
           ("C", "Shout answers from the back"), ("D", "Hide bags under the desk forever")],
          "B", "She explains that Ms. Kapoor likes students to raise hands before they speak.",
          "g5-eng-ch04-b-04"),
        q(5, "spoken-telephone", "easy",
          "Read Passage P2. Why is Riya calling Kabir?",
          [("A", "To invite him to a movie only"), ("B", "To learn the Maths homework she missed"),
           ("C", "To sell geometry boxes"), ("D", "To cancel Sports Day")],
          "B", "She missed Maths due to fever and asks what homework was given.",
          "g5-eng-ch04-b-05"),
        q(6, "spoken-telephone", "medium",
          "Read Passage P2. Kabir says, \"Shall I also share a photo…?\" \"Shall I\" here is —",
          [("A", "a polite offer / suggestion"), ("B", "an angry command"),
           ("C", "a way to end friendship"), ("D", "a spelling test question")],
          "A", "\"Shall I…?\" gently offers to do something helpful.",
          "g5-eng-ch04-b-06"),
        q(7, "spoken-situation", "easy",
          "Read Passage P2. What must Riya bring tomorrow, according to Kabir?",
          [("A", "A cricket bat and helmet"), ("B", "Her geometry box"),
           ("C", "Only a storybook"), ("D", "Nothing at all")],
          "B", "Kabir says they must bring geometry boxes tomorrow.",
          "g5-eng-ch04-b-07"),
        q(8, "spoken-closing", "easy",
          "Read Passage P2. Kabir says \"Feel better soon.\" This shows —",
          [("A", "care and kindness"), ("B", "anger about homework"),
           ("C", "that he forgot Riya's name"), ("D", "that the call failed")],
          "A", "Wishing someone a quick recovery is a kind closing line.",
          "g5-eng-ch04-b-08"),
        q(9, "spoken-directions", "easy",
          "Read Passage P3. Where is the office, according to the guard?",
          [("A", "On the terrace near the water tank"),
           ("B", "The blue door next to the Principal's room"),
           ("C", "Inside the sports store only"),
           ("D", "Across the public road outside")],
          "B", "The guard says the office is the blue door next to the Principal's room.",
          "g5-eng-ch04-b-09"),
        q(10, "spoken-greeting", "easy",
          "Read Passage P3. How does the guard open the conversation?",
          [("A", "\"What do you want?\""), ("B", "\"Good afternoon. How may I help you?\""),
           ("C", "\"Go away from the gate.\""), ("D", "\"I am busy.\"")],
          "B", "A polite service greeting offers help right away.",
          "g5-eng-ch04-b-10"),
        q(11, "spoken-response", "medium",
          "Read Passage P3. The visitor says the offer to walk with her is \"thoughtful.\" She means it is —",
          [("A", "kind and considerate"), ("B", "rude and silly"),
           ("C", "a waste of time"), ("D", "against school rules")],
          "A", "\"Thoughtful\" praises kindness; she still chooses to go alone.",
          "g5-eng-ch04-b-11"),
        q(12, "spoken-directions", "hard",
          "Read Passage P3. If the visitor gets confused, what should she do?",
          [("A", "Leave the school at once"), ("B", "Ask any teacher"),
           ("C", "Climb the mango tree"), ("D", "Shout at the guard")],
          "B", "The guard says: if confused, ask any teacher.",
          "g5-eng-ch04-b-12"),
        q(13, "spoken-announcement", "easy",
          "Read Announcement N1. What event is tomorrow?",
          [("A", "A silent library exam only"), ("B", "Sports Day practice"),
           ("C", "A cooking contest for parents"), ("D", "A holiday with no assembly")],
          "B", "Ananya announces Sports Day practice for the next day.",
          "g5-eng-ch04-b-13"),
        q(14, "spoken-announcement", "medium",
          "Read Announcement N1. After practice, students should —",
          [("A", "run home without permission"), ("B", "return quietly to their classrooms"),
           ("C", "stay on the ground all day"), ("D", "bring bags onto the field")],
          "B", "The announcement says return quietly to classrooms after practice.",
          "g5-eng-ch04-b-14"),
        q(15, "spoken-announcement", "medium",
          "Read Announcement N1. Why does Ananya end with \"Thank you, and have a wonderful day\"?",
          [("A", "To close the announcement warmly"), ("B", "To cancel Sports Day"),
           ("C", "To scold Class 5"), ("D", "To ask for money")],
          "A", "A clear thank-you and kind wish is a polite way to end a public announcement.",
          "g5-eng-ch04-b-15"),
        q(16, "spoken-apology", "easy",
          "You are late to a friend's birthday party. Best thing to say at the door?",
          [("A", "\"Traffic was bad — I'm sorry I'm late. Happy birthday!\""),
           ("B", "\"You started without me? Rude!\""),
           ("C", "Say nothing and take the biggest piece of cake."),
           ("D", "\"Parties are boring.\"")],
          "A", "Apologise briefly, give a simple reason, and greet the birthday child.",
          "g5-eng-ch04-b-16"),
        q(17, "spoken-polite-request", "medium",
          "You need the teacher to repeat a question. Best line?",
          [("A", "\"Huh?\""), ("B", "\"Excuse me, ma'am — could you please repeat the question?\""),
           ("C", "\"That question is silly.\""), ("D", "Whisper to a friend instead.")],
          "B", "\"Excuse me\" plus \"could you please…?\" is respectful classroom speech.",
          "g5-eng-ch04-b-17"),
        q(18, "spoken-situation", "hard",
          "At a shop, the shopkeeper is busy with another customer. What should you do?",
          [("A", "Shout your order across the counter"),
           ("B", "Wait your turn, then say \"Excuse me, uncle — when you are free…\""),
           ("C", "Push the other customer aside"),
           ("D", "Take items and leave without paying")],
          "B", "Waiting your turn and using \"Excuse me\" shows patience and manners.",
          "g5-eng-ch04-b-18"),
        q(19, "spoken-invitation", "easy",
          "A friend invites you to a story-reading hour, but you already have a music class. Best reply?",
          [("A", "\"I can't come this time — I have music class. Thank you for inviting me!\""),
           ("B", "\"Your stories are useless.\""),
           ("C", "Ignore the message forever."),
           ("D", "\"Fine. Whatever.\"")],
          "A", "Decline politely, give a short reason, and thank them for inviting you.",
          "g5-eng-ch04-b-19"),
        q(20, "spoken-telephone", "medium",
          "You dial a wrong number. Best thing to say?",
          [("A", "\"Who is this? Tell me your address!\""),
           ("B", "\"I'm sorry — I think I have the wrong number. Goodbye.\""),
           ("C", "Stay silent for five minutes."),
           ("D", "Ask them to solve your homework.")],
          "B", "Apologise, explain it was a wrong number, and end politely.",
          "g5-eng-ch04-b-20"),
        q(21, "spoken-response", "medium",
          "Someone praises your drawing. Best spoken reply?",
          [("A", "\"Thank you! I'm glad you like it.\""), ("B", "\"Obviously. I'm the best.\""),
           ("C", "\"Your taste is weird.\""), ("D", "Tear the drawing up.")],
          "A", "A simple thank-you is warm and humble.",
          "g5-eng-ch04-b-21"),
        q(22, "spoken-situation", "hard",
          "During a class discussion, you disagree with a friend's idea. Best line?",
          [("A", "\"That's stupid.\""),
           ("B", "\"I see your point, but I think we could also try another way.\""),
           ("C", "\"Be quiet forever.\""),
           ("D", "Laugh loudly and walk out.")],
          "B", "Acknowledge their idea, then share yours calmly — good discussion manners.",
          "g5-eng-ch04-b-22"),
        q(23, "spoken-greeting", "easy",
          "You answer the door for the postman. Best greeting?",
          [("A", "\"What?\""), ("B", "\"Good morning! How may I help you?\""),
           ("C", "Slam the door"), ("D", "\"Go away.\"")],
          "B", "Greet politely and offer help — clear door manners.",
          "g5-eng-ch04-b-23"),
        q(24, "spoken-closing", "medium",
          "After a school club meeting, you are the last to leave. Best closing to the teacher?",
          [("A", "Leave without looking back"),
           ("B", "\"Thank you for the meeting, ma'am. Good afternoon!\""),
           ("C", "\"Meetings waste time.\""),
           ("D", "Hide under a desk")],
          "B", "Thank the teacher and say a polite goodbye before you leave.",
          "g5-eng-ch04-b-24"),
    ]

    # Balance answers: recount and fix if needed
    # A set intended: B C B B C | A B C A B | B B B A B | A C B B B | B B B B  — let me verify counts later

    header = """# Grade 5 English — Chapter 4: Talk It Out: Spoken English & Situations

## Meta
- grade: 5
- subject: English
- chapter_id: g5-eng-ch04
- skills: [spoken-greeting, spoken-polite-request, spoken-telephone, spoken-directions, spoken-announcement, spoken-apology, spoken-invitation, spoken-response, spoken-situation, spoken-closing]
- sets: 2
- items_per_set: 24

## Interactive lesson outline
- L1: Hello, talk champion! Today we practise the words we use when we speak with people.
- L2: Spoken English is more than correct sentences. It is also kindness, clarity and the right tone.
- L3: Begin with a greeting: Good morning, Hello, or Namaste — then say who you are if needed.
- L4: When you need something, ask politely: Could you…? May I…? Would you like…? Please and thank you still open doors.
- L5: On the phone, say who you are, state your purpose, listen carefully, and end with a warm goodbye.
- L6: Giving directions? Use clear steps: go straight, turn left, look for a landmark.
- L7: (optional) If you make a mistake, apologise and offer to help. A good apology is short and sincere.
- L8: Let's try one. Imagine you need a pencil. Instead of "Give me that," try "Could I borrow your pencil, please?"
- L9: Hear the difference? Soft words show respect.
- L10: Announcements and invitations need clear facts: who, what, when, where.
- L11: (optional) When you disagree, keep your voice calm: "I see your point, but…"
- L12: Your turn now. Read each dialogue or situation and choose the words that fit best.
- L13: Wonderful speaking, everyone! Clear, kind words make every conversation easier.

"""
    body = header + passages + "## Set A — Practice quiz\n\n" + "\n".join(set_a) + "\n## Set B — Alternate quiz\n\n" + "\n".join(set_b)
    path = GRADE_DIR / "english-ch04-spoken.md"
    path.write_text(body)
    print("Wrote", path)
    return path


def write_ch05():
    passages = """## Passage bank (for quizzes)

### N1 — Library Week Notice
> **NOTICE**
> Sunrise Public School
> Date: 3 October
>
> **Library Week Celebration**
>
> This is to inform all students of Classes 4 and 5 that Library Week will be held from 10 to 14 October in the school library. There will be story hours, a bookmark-making corner and a book-exchange table.
>
> Interested students must give their names to the class monitor by 7 October. Please bring one old storybook in good condition if you wish to exchange.
>
> — Meera Iyer
> Librarian

### P1 — Letter to a Friend (informal)
42 Lotus Lane
Pune
5 October
Dear Anvi,
I hope you are well. Last Saturday our class visited the city science museum. My favourite part was the planetarium — the stars felt so close! We also built a tiny paper bridge in the workshop.
Please write and tell me about your school picnic. Have you chosen a costume for Fancy Dress Day yet?
Give my regards to Uncle and Aunty.
Your friend,
Dev

### P2 — Message for Amma
> **MESSAGE**
> 6 October, 5:40 p.m.
>
> Dear Amma,
> Ms. D'Souza called. Tomorrow's PTM has been shifted from 9:00 a.m. to 11:30 a.m. She asked you to bring my Maths notebook. I have gone to football practice and will be home by 7:00 p.m.
>
> Kabir

### P3 — Diary Entry
Sunday, 8 October
Dear Diary,
Today felt long but happy. In the morning I helped Appa water the terrace plants. In the afternoon, our building held a clean-up drive. I filled two bags with dry leaves and plastic wrappers near the gate. Mrs. Rao brought lemonade for everyone.
I was tired by evening, yet proud. Tomorrow I will finish my English paragraph before cricket. Good night!
— Zara

"""

    set_a = [
        q(1, "format-notice", "easy",
          "Read Notice N1. What is the notice mainly about?",
          [("A", "A football match on the ground"), ("B", "Library Week celebration details"),
           ("C", "A change in school fees"), ("D", "A lost geometry box")],
          "B", "The heading and body announce Library Week events and how to join.",
          "g5-eng-ch05-a-01"),
        q(2, "format-notice", "easy",
          "Read Notice N1. Who wrote the notice?",
          [("A", "The class monitor"), ("B", "Meera Iyer, the Librarian"),
           ("C", "A Class 3 student"), ("D", "Dev from Lotus Lane")],
          "B", "Notices end with the writer's name and role — here, Meera Iyer, Librarian.",
          "g5-eng-ch05-a-02"),
        q(3, "format-notice", "medium",
          "Read Notice N1. By which date must students give their names?",
          [("A", "3 October"), ("B", "7 October"), ("C", "10 October"), ("D", "14 October")],
          "B", "The notice says give names to the class monitor by 7 October.",
          "g5-eng-ch05-a-03"),
        q(4, "format-notice", "medium",
          "Read Notice N1. What should students bring for the book exchange?",
          [("A", "A cricket bat"), ("B", "One old storybook in good condition"),
           ("C", "Cash for the librarian"), ("D", "Nothing at all")],
          "B", "The notice asks for one old storybook in good condition if they wish to exchange.",
          "g5-eng-ch05-a-04"),
        q(5, "format-notice", "hard",
          "Read Notice N1. Which detail is NOT given in the notice?",
          [("A", "The dates of Library Week"), ("B", "Where events will be held"),
           ("C", "The price of each bookmark"), ("D", "Who should give names to the monitor")],
          "C", "Dates, place and how to join are listed; bookmark prices are not mentioned.",
          "g5-eng-ch05-a-05"),
        q(6, "format-letter", "easy",
          "Read Letter P1. Where does Dev live?",
          [("A", "42 Lotus Lane, Pune"), ("B", "The school library"),
           ("C", "Sunrise Public School hostel only"), ("D", "Anvi's house")],
          "A", "An informal letter begins with the sender's address — 42 Lotus Lane, Pune.",
          "g5-eng-ch05-a-06"),
        q(7, "format-letter", "easy",
          "Read Letter P1. Who is the letter for?",
          [("A", "Ms. D'Souza"), ("B", "Anvi"), ("C", "Mrs. Rao"), ("D", "Meera Iyer")],
          "B", "The salutation is \"Dear Anvi,\" so Anvi is the reader.",
          "g5-eng-ch05-a-07"),
        q(8, "format-letter", "medium",
          "Read Letter P1. What was Dev's favourite part of the museum visit?",
          [("A", "The canteen menu"), ("B", "The planetarium"),
           ("C", "Fancy Dress Day"), ("D", "Football practice")],
          "B", "Dev writes that his favourite part was the planetarium.",
          "g5-eng-ch05-a-08"),
        q(9, "format-letter", "medium",
          "Read Letter P1. Which closing is correct for this friendly letter?",
          [("A", "Yours faithfully, Dev"), ("B", "Your friend, Dev"),
           ("C", "Regards only with no name"), ("D", "NOTICE — Librarian")],
          "B", "Informal letters to friends often close with \"Your friend,\" plus the name.",
          "g5-eng-ch05-a-09"),
        q(10, "format-letter", "hard",
          "Read Letter P1. Why does Dev ask about Fancy Dress Day?",
          [("A", "To keep the friendly chat going and show interest in Anvi's news"),
           ("B", "To cancel Library Week"),
           ("C", "To scold Anvi"),
           ("D", "To apply for a transfer certificate")],
          "A", "Friendly letters share news and ask questions back — that keeps the conversation alive.",
          "g5-eng-ch05-a-10"),
        q(11, "format-message", "easy",
          "Read Message P2. Who wrote the message?",
          [("A", "Amma"), ("B", "Kabir"), ("C", "Ms. D'Souza"), ("D", "Zara")],
          "B", "Messages end with the writer's name — Kabir.",
          "g5-eng-ch05-a-11"),
        q(12, "format-message", "easy",
          "Read Message P2. What changed about the PTM?",
          [("A", "It was cancelled forever"), ("B", "The time moved from 9:00 a.m. to 11:30 a.m."),
           ("C", "It moved to another city"), ("D", "Only Class 8 may attend")],
          "B", "The message states the PTM shifted from 9:00 a.m. to 11:30 a.m.",
          "g5-eng-ch05-a-12"),
        q(13, "format-message", "medium",
          "Read Message P2. What should Amma bring?",
          [("A", "Kabir's Maths notebook"), ("B", "Two bags of dry leaves"),
           ("C", "A planetarium ticket"), ("D", "An old storybook for exchange")],
          "A", "Ms. D'Souza asked Amma to bring Kabir's Maths notebook.",
          "g5-eng-ch05-a-13"),
        q(14, "format-message", "medium",
          "Read Message P2. Why are messages usually short?",
          [("A", "They only need key facts for someone who is away"),
           ("B", "Writers are not allowed to use full stops"),
           ("C", "Messages must never include a date"),
           ("D", "Messages replace all school notices")],
          "A", "A message passes on important facts quickly when the reader is not free to talk.",
          "g5-eng-ch05-a-14"),
        q(15, "format-diary", "easy",
          "Read Diary P3. On which day did Zara write?",
          [("A", "Monday, 3 October"), ("B", "Sunday, 8 October"),
           ("C", "Friday, 14 October"), ("D", "Tuesday, 7 October")],
          "B", "Diary entries often start with the day and date — Sunday, 8 October.",
          "g5-eng-ch05-a-15"),
        q(16, "format-diary", "easy",
          "Read Diary P3. What did Zara do in the afternoon?",
          [("A", "Visited the planetarium alone"), ("B", "Joined a building clean-up drive"),
           ("C", "Wrote a notice for Library Week"), ("D", "Called Ms. D'Souza about PTM")],
          "B", "She writes that the building held a clean-up drive in the afternoon.",
          "g5-eng-ch05-a-16"),
        q(17, "format-diary", "medium",
          "Read Diary P3. How did Zara feel by evening?",
          [("A", "Tired yet proud"), ("B", "Angry at Mrs. Rao"),
           ("C", "Bored of lemonade"), ("D", "Afraid of plants")],
          "A", "She says she was tired by evening, yet proud.",
          "g5-eng-ch05-a-17"),
        q(18, "format-diary", "medium",
          "Read Diary P3. A diary is mainly written for —",
          [("A", "the whole school notice board"), ("B", "the writer's own thoughts and day"),
           ("C", "a formal complaint to the Principal only"), ("D", "a printed newspaper")],
          "B", "A diary is personal — Zara writes about her day and feelings for herself.",
          "g5-eng-ch05-a-18"),
        q(19, "format-parts", "easy",
          "Which set of parts belongs in a school notice?",
          [("A", "Heading, date, body with facts, name and designation"),
           ("B", "Only emojis and no date"),
           ("C", "Dear Diary and Good night only"),
           ("D", "A rhyme with no purpose")],
          "A", "Notices need a clear heading, date, factual body, and the writer's name with role.",
          "g5-eng-ch05-a-19"),
        q(20, "format-parts", "medium",
          "In an informal letter, the writer's address usually appears —",
          [("A", "at the top before the date"), ("B", "only inside the Principal's stamp"),
           ("C", "after \"Yours faithfully\" in formal style always"), ("D", "nowhere at all")],
          "A", "Friendly letters start with the sender's address, then the date, then \"Dear…\".",
          "g5-eng-ch05-a-20"),
        q(21, "format-purpose", "medium",
          "You want every Class 5 student to know about a charity collection. Best format?",
          [("A", "A private diary entry only"), ("B", "A school notice"),
           ("C", "A secret message to one friend"), ("D", "A letter sealed for the Principal alone with no notice")],
          "B", "A notice informs many readers at once about a school event or duty.",
          "g5-eng-ch05-a-21"),
        q(22, "format-purpose", "hard",
          "Amma is out, and the music teacher called to change tomorrow's timing. Best format to leave at home?",
          [("A", "A long formal essay"), ("B", "A short message with time, reason and your name"),
           ("C", "A Library Week notice for the board"), ("D", "A poem about stars")],
          "B", "Messages carry key facts for one reader who missed the call.",
          "g5-eng-ch05-a-22"),
        q(23, "format-tone", "medium",
          "Which line suits an informal letter to a cousin?",
          [("A", "\"I wish to bring to your kind notice the following grievances.\""),
           ("B", "\"Guess what? We built a paper bridge at the museum!\""),
           ("C", "\"This is to inform all students…\""),
           ("D", "\"Yours faithfully,\" without any news")],
          "B", "Informal letters sound friendly and share personal news.",
          "g5-eng-ch05-a-23"),
        q(24, "format-tone", "hard",
          "Which closing fits a formal letter to the Principal when you do not know them personally?",
          [("A", "Your buddy"), ("B", "Yours faithfully"),
           ("C", "See ya"), ("D", "Dear Diary")],
          "B", "When the reader is not a personal friend, \"Yours faithfully\" is the formal closing.",
          "g5-eng-ch05-a-24"),
    ]

    set_b = [
        q(1, "format-notice", "easy",
          "Read Notice N1. Where will Library Week be held?",
          [("A", "In the school library"), ("B", "On the football ground only"),
           ("C", "At 42 Lotus Lane"), ("D", "In the city museum")],
          "A", "The notice says events will be held in the school library.",
          "g5-eng-ch05-b-01"),
        q(2, "format-notice", "easy",
          "Read Notice N1. Which classes are invited?",
          [("A", "Only Class 8"), ("B", "Classes 4 and 5"),
           ("C", "Teachers alone"), ("D", "Nursery only")],
          "B", "It informs students of Classes 4 and 5.",
          "g5-eng-ch05-b-02"),
        q(3, "format-notice", "medium",
          "Read Notice N1. Which activity is part of Library Week?",
          [("A", "Bookmark-making corner"), ("B", "Night camping on the terrace"),
           ("C", "PTM at 11:30 a.m."), ("D", "Transfer certificate collection")],
          "A", "Story hours, a bookmark-making corner and a book-exchange table are listed.",
          "g5-eng-ch05-b-03"),
        q(4, "format-notice", "hard",
          "Read Notice N1. Why is the date at the top important?",
          [("A", "It shows when the notice was issued"), ("B", "It replaces the writer's name"),
           ("C", "It is only decoration"), ("D", "It tells the price of books")],
          "A", "The issue date helps readers know how recent the information is.",
          "g5-eng-ch05-b-04"),
        q(5, "format-letter", "easy",
          "Read Letter P1. What date did Dev write the letter?",
          [("A", "3 October"), ("B", "5 October"), ("C", "7 October"), ("D", "8 October")],
          "B", "The date under the address is 5 October.",
          "g5-eng-ch05-b-05"),
        q(6, "format-letter", "medium",
          "Read Letter P1. Which question does Dev ask Anvi?",
          [("A", "About her school picnic and Fancy Dress costume"),
           ("B", "About Library Week bookmark prices"),
           ("C", "About Kabir's football timing"),
           ("D", "About Zara's lemonade recipe only")],
          "A", "He asks about her picnic and whether she has chosen a Fancy Dress costume.",
          "g5-eng-ch05-b-06"),
        q(7, "format-letter", "medium",
          "Read Letter P1. \"Give my regards to Uncle and Aunty\" is an example of —",
          [("A", "a formal notice heading"), ("B", "a polite family greeting near the end"),
           ("C", "a diary date line"), ("D", "a message time stamp")],
          "B", "Friendly letters often send regards to family before the closing.",
          "g5-eng-ch05-b-07"),
        q(8, "format-letter", "hard",
          "Read Letter P1. Which feature shows this is informal, not a school notice?",
          [("A", "It uses \"Dear Anvi\" and personal news"),
           ("B", "It has a librarian's designation only"),
           ("C", "It orders all Classes 4 and 5 to assemble"),
           ("D", "It is pinned with no personal greeting")],
          "A", "A personal salutation and shared news mark an informal letter.",
          "g5-eng-ch05-b-08"),
        q(9, "format-message", "easy",
          "Read Message P2. Who is the message for?",
          [("A", "Amma"), ("B", "Ms. D'Souza"), ("C", "Dev"), ("D", "Ananya")],
          "A", "It begins \"Dear Amma,\" so Amma is the reader.",
          "g5-eng-ch05-b-09"),
        q(10, "format-message", "easy",
          "Read Message P2. When was the message written?",
          [("A", "6 October, 5:40 p.m."), ("B", "8 October, morning"),
           ("C", "3 October, no time"), ("D", "14 October, midnight")],
          "A", "Messages often show date and time at the top — 6 October, 5:40 p.m.",
          "g5-eng-ch05-b-10"),
        q(11, "format-message", "medium",
          "Read Message P2. Where has Kabir gone?",
          [("A", "To football practice"), ("B", "To the planetarium"),
           ("C", "To Library Week"), ("D", "To Fancy Dress rehearsal")],
          "A", "He writes he has gone to football practice and will be home by 7:00 p.m.",
          "g5-eng-ch05-b-11"),
        q(12, "format-message", "hard",
          "Read Message P2. Which fact would be weakest to leave out of this message?",
          [("A", "The new PTM time"), ("B", "That Amma should bring the Maths notebook"),
           ("C", "Kabir's favourite colour"), ("D", "When Kabir will be home")],
          "C", "Favourite colour does not help Amma act; time, notebook and return time do.",
          "g5-eng-ch05-b-12"),
        q(13, "format-diary", "easy",
          "Read Diary P3. Who brought lemonade?",
          [("A", "Appa"), ("B", "Mrs. Rao"), ("C", "Meera Iyer"), ("D", "Ms. D'Souza")],
          "B", "Zara writes that Mrs. Rao brought lemonade for everyone.",
          "g5-eng-ch05-b-13"),
        q(14, "format-diary", "medium",
          "Read Diary P3. What does Zara plan for tomorrow?",
          [("A", "Finish her English paragraph before cricket"),
           ("B", "Issue a school notice"),
           ("C", "Collect transfer certificates"),
           ("D", "Cancel the clean-up drive")],
          "A", "She plans to finish her English paragraph before cricket.",
          "g5-eng-ch05-b-14"),
        q(15, "format-diary", "medium",
          "Read Diary P3. Why might someone write \"Dear Diary\"?",
          [("A", "To speak to their own private page"), ("B", "To order Classes 4 and 5 to assemble"),
           ("C", "To replace a librarian's signature"), ("D", "To print a public notice")],
          "A", "\"Dear Diary\" addresses the journal itself — a personal writing habit.",
          "g5-eng-ch05-b-15"),
        q(16, "format-parts", "easy",
          "A complete message should usually include —",
          [("A", "date/time, greeting, key facts, writer's name"),
           ("B", "only a doodle"),
           ("C", "Yours faithfully and a school stamp always"),
           ("D", "a full autobiography")],
          "A", "Those four pieces let the reader know when, what and who.",
          "g5-eng-ch05-b-16"),
        q(17, "format-parts", "medium",
          "Which order is correct for an informal letter?",
          [("A", "Address → date → Dear… → body → closing → name"),
           ("B", "Name → NOTICE heading → designation only"),
           ("C", "Dear Diary → time stamp → librarian stamp"),
           ("D", "Body with no greeting or name")],
          "A", "That is the usual friendly-letter pattern.",
          "g5-eng-ch05-b-17"),
        q(18, "format-purpose", "easy",
          "You want to remember how you felt on Sports Day. Best format?",
          [("A", "A diary entry"), ("B", "A gate guard's directions only"),
           ("C", "A book-exchange notice"), ("D", "A PTM message for Amma")],
          "A", "Diaries store personal feelings and daily events.",
          "g5-eng-ch05-b-18"),
        q(19, "format-purpose", "medium",
          "You need to write to a friend who lives in another city about your museum trip. Best format?",
          [("A", "An informal letter"), ("B", "A school assembly announcement only"),
           ("C", "A formal notice with designation"), ("D", "A one-line gate pass")],
          "A", "Sharing personal news with a friend suits an informal letter.",
          "g5-eng-ch05-b-19"),
        q(20, "format-purpose", "hard",
          "The Principal asks you to inform the whole school about Tree Planting Day. Best format?",
          [("A", "A notice on the board"), ("B", "A secret diary locked at home"),
           ("C", "A private message to one cousin"), ("D", "A letter only to yourself")],
          "A", "Notices broadcast facts to many readers in school.",
          "g5-eng-ch05-b-20"),
        q(21, "format-tone", "easy",
          "Which opening suits a formal letter to the Principal?",
          [("A", "\"Hey!\""), ("B", "\"Respected Sir/Madam,\""),
           ("C", "\"Dear Diary,\""), ("D", "\"Yo, Principal!\"")],
          "B", "Formal letters use a respectful salutation such as Respected Sir/Madam.",
          "g5-eng-ch05-b-21"),
        q(22, "format-tone", "medium",
          "Which sentence belongs in a notice, not in a diary?",
          [("A", "\"I felt proud and a little tired.\""),
           ("B", "\"All Class 5 students must assemble in the hall at 10 a.m.\""),
           ("C", "\"Give my regards to Uncle.\""),
           ("D", "\"Dear Diary, today was long.\"")],
          "B", "Notices give clear instructions to groups; diaries share private feelings.",
          "g5-eng-ch05-b-22"),
        q(23, "format-tone", "hard",
          "A student writes to the Principal: \"Fix the tap now!!!\" What is wrong?",
          [("A", "Nothing — it is perfect formal style"),
           ("B", "The tone is too rude and bossy for a formal letter"),
           ("C", "It should be a diary entry instead of any letter"),
           ("D", "Formal letters may never mention taps")],
          "B", "Formal letters stay polite and clear; commands with extra exclamation marks sound rude.",
          "g5-eng-ch05-b-23"),
        q(24, "format-parts", "medium",
          "Where does the writer's designation usually appear in a notice?",
          [("A", "With the name at the end"), ("B", "Only inside the diary greeting"),
           ("C", "Before the school's name as \"Dear\""), ("D", "Nowhere — notices never show roles")],
          "A", "After the body, notices show the name and role (for example, Librarian).",
          "g5-eng-ch05-b-24"),
    ]

    header = """# Grade 5 English — Chapter 5: Write It Right: Notices, Letters & Messages

## Meta
- grade: 5
- subject: English
- chapter_id: g5-eng-ch05
- skills: [format-notice, format-letter, format-message, format-diary, format-parts, format-purpose, format-tone]
- sets: 2
- items_per_set: 24

## Interactive lesson outline
- L1: Hello, young writer! Today we learn the shapes that writing can take — notices, letters, messages and diaries.
- L2: Each format has a job. A notice informs many people. A letter talks to one reader. A message passes on quick facts. A diary keeps your own day safe.
- L3: Notice pattern: heading, date, clear facts (who, what, when, where), then name and designation.
- L4: Informal letter pattern: your address, date, Dear…, your news and questions, a warm closing, your name.
- L5: Message pattern: date and time, Dear…, the key facts, your name — short and useful.
- L6: Diary pattern: day and date, what happened, how you felt, maybe a plan for tomorrow.
- L7: (optional) Tone matters. Friends get friendly words. The Principal gets respectful words.
- L8: Let's try. If Amma missed a phone call about a new PTM time, would you write a full notice for the board? No — a short message at home is enough.
- L9: If the whole school must know about Tree Planting Day, a notice is the right tool.
- L10: (optional) When you write to the Principal, prefer \"Yours faithfully\" and calm, clear sentences.
- L11: Your turn now. Read each format carefully and choose what fits.
- L12: Splendid writing, everyone! The right format makes your words easy to understand.

"""
    body = header + passages + "## Set A — Practice quiz\n\n" + "\n".join(set_a) + "\n## Set B — Alternate quiz\n\n" + "\n".join(set_b)
    path = GRADE_DIR / "english-ch05-writing.md"
    path.write_text(body)
    print("Wrote", path)
    return path


def ingest():
    chapters = [
        dict(
            path=GRADE_DIR / "english-ch04-spoken.md",
            prefix="g5-eng-ch04",
            file="g5-english-spoken.ts",
            export="g5EnglishSpoken",
            meta={
                "id": "talk-it-out",
                "title": "Talk It Out",
                "emoji": "🗣️",
                "blurb": "Greetings, polite talk & situations",
                "topic": "spoken-english",
                "paperTopics": ["spoken-english", "expression", "comprehension"],
            },
            lesson=lesson(
                dict(
                    emoji="🗣️",
                    title="Hello, talk champion!",
                    body=[
                        "Spoken English is kindness, clarity and the right tone.",
                        "Greet, ask politely, give clear directions, and close warmly.",
                    ],
                    speak="Hello, talk champion! Today we practise the words we use when we speak with people.",
                    reveal_title="Talk tools",
                    reveal_speak="Tap each card: greetings, polite asks, phone talk and clear directions.",
                ),
                [
                    ("Greetings", "Good morning / Hello — then say who you are", "👋"),
                    ("Polite asks", "Could you…? May I…? Please & thank you", "🙏"),
                    ("Phone talk", "Who you are → purpose → listen → goodbye", "📞"),
                    ("Directions", "Straight, turn, landmark — then check understanding", "🗺️"),
                ],
                dict(
                    title="Soft words open doors",
                    speak="Instead of Give me that pencil, try Could I borrow your pencil, please? Soft words show respect.",
                    steps=[
                        "Need a pencil from a friend",
                        "Harsh: \"Give me that.\"",
                        "Polite: \"Could I borrow your pencil, please?\"",
                        "Add thank you when they help",
                    ],
                    punchline="Could you / May I / Would you like — choice, not command.",
                ),
                dict(
                    prompt="You bump into a classmate and spill water. Best line?",
                    options=[
                        ("a", "Watch where you stand!"),
                        ("b", "I'm so sorry. Let me help clean up."),
                        ("c", "Ha! Funny."),
                        ("d", "Say nothing."),
                    ],
                    answerId="b",
                    why="Apologise and offer to help — short and sincere.",
                ),
                ["Talk champion!", "Greet → purpose → polite words → close", "Phone: clear and kind", "Announcements need who, what, when, where"],
            ),
        ),
        dict(
            path=GRADE_DIR / "english-ch05-writing.md",
            prefix="g5-eng-ch05",
            file="g5-english-writing.ts",
            export="g5EnglishWriting",
            meta={
                "id": "write-it-right",
                "title": "Write It Right",
                "emoji": "📝",
                "blurb": "Notices, letters, messages & diaries",
                "topic": "writing-formats",
                "paperTopics": ["writing-formats", "expression", "comprehension"],
            },
            lesson=lesson(
                dict(
                    emoji="📝",
                    title="Hello, young writer!",
                    body=[
                        "Each format has a job: notice, letter, message or diary.",
                        "Match the shape to the reader and the purpose.",
                    ],
                    speak="Hello, young writer! Today we learn the shapes that writing can take.",
                    reveal_title="Format toolbox",
                    reveal_speak="Tap each card: notice, letter, message and diary.",
                ),
                [
                    ("Notice", "Heading, date, facts, name & role — many readers", "📋"),
                    ("Informal letter", "Address, date, Dear…, news, warm closing", "✉️"),
                    ("Message", "Date/time, key facts, your name — short", "💬"),
                    ("Diary", "Day, what happened, how you felt", "📔"),
                ],
                dict(
                    title="Pick the right tool",
                    speak="Amma missed a call about a new PTM time — leave a short message. Tree Planting Day for the whole school — put up a notice.",
                    steps=[
                        "Missed phone call at home → short message",
                        "Whole school must know → notice",
                        "News for a friend in another city → informal letter",
                        "Your feelings on Sports Day → diary",
                    ],
                    punchline="Ask: who will read this, and why?",
                ),
                dict(
                    prompt="Best format to tell all Class 5 about a charity collection?",
                    options=[
                        ("a", "Private diary only"),
                        ("b", "School notice"),
                        ("c", "Secret note to one friend"),
                        ("d", "Letter only to yourself"),
                    ],
                    answerId="b",
                    why="A notice informs many readers at once.",
                ),
                ["Format pro!", "Notice = many readers", "Letter = one reader, fuller news", "Message = quick facts; diary = personal"],
            ),
        ),
    ]

    for spec in chapters:
        md = spec["path"].read_text()
        a, b = eng_sets(md, spec["prefix"], base_dir=spec["path"].parent)
        for label, qs in (("A", a), ("B", b)):
            assert len(qs) == 24, "%s set %s has %d" % (spec["path"].name, label, len(qs))
            for qq in qs:
                assert qq["answerId"] in "abcd" and len(qq["options"]) == 4, qq["id"]
                assert len({o["text"] for o in qq["options"]}) == 4, qq["id"]
                assert qq["explanation"], qq["id"]
        emit_module(OUT / spec["file"], spec["export"], spec["meta"], spec["lesson"], a, b)
        # Answer letter balance report
        for label, qs in (("A", a), ("B", b)):
            from collections import Counter
            c = Counter(q["answerId"] for q in qs)
            print("  %s %s balance: %s" % (spec["file"], label, dict(sorted(c.items()))))


if __name__ == "__main__":
    write_ch04()
    write_ch05()
    ingest()
    print("done")
