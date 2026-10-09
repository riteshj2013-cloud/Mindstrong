import type { ChapterDef, PrepQuestion } from "../types";

/** Writers' Desk — Grade 4 Writing & Formats (original). */

const SET_A: PrepQuestion[] = [
{
    id: "g4-eng-ch05-a-q01",
    prompt: "**GREEN VALLEY SCHOOL, PUNE**\n**NOTICE**\n10 October 2026\n\n**BOOK FAIR**\n\nStudents of Classes 3 to 5 are informed that a Book Fair will be held in the school hall on 18 October 2026 from 9:00 a.m. to 1:00 p.m. Please bring a cloth bag. Parents are welcome after 11:00 a.m.\n\nAnanya Deshmukh\nTeacher In-charge, Library Club\n\nRead Notice N1. What is the notice mainly about?",
    options: [
      { id: "a", text: "A Book Fair at school" },
      { id: "b", text: "A cricket match" },
      { id: "c", text: "A holiday list" },
      { id: "d", text: "A bus route change" }
    ],
    answerId: "a",
    explanation: "The heading and body both focus on the Book Fair details.",
    hints: ["Read the bold heading first.", "The body supports the heading."],
  },
{
    id: "g4-eng-ch05-a-q02",
    prompt: "**GREEN VALLEY SCHOOL, PUNE**\n**NOTICE**\n10 October 2026\n\n**BOOK FAIR**\n\nStudents of Classes 3 to 5 are informed that a Book Fair will be held in the school hall on 18 October 2026 from 9:00 a.m. to 1:00 p.m. Please bring a cloth bag. Parents are welcome after 11:00 a.m.\n\nAnanya Deshmukh\nTeacher In-charge, Library Club\n\nRead Notice N1. Who issued the notice?",
    options: [
      { id: "a", text: "The Head Boy" },
      { id: "b", text: "Ananya Deshmukh, Teacher In-charge, Library Club" },
      { id: "c", text: "A Class 5 student" },
      { id: "d", text: "The shopkeeper" }
    ],
    answerId: "b",
    explanation: "Notices end with the issuer's name and role. Here it is Ananya Deshmukh.",
    hints: ["Check the name at the bottom.", "Role/designation sits under the name."],
  },
{
    id: "g4-eng-ch05-a-q03",
    prompt: "**GREEN VALLEY SCHOOL, PUNE**\n**NOTICE**\n10 October 2026\n\n**BOOK FAIR**\n\nStudents of Classes 3 to 5 are informed that a Book Fair will be held in the school hall on 18 October 2026 from 9:00 a.m. to 1:00 p.m. Please bring a cloth bag. Parents are welcome after 11:00 a.m.\n\nAnanya Deshmukh\nTeacher In-charge, Library Club\n\nRead Notice N1. When is the Book Fair?",
    options: [
      { id: "a", text: "10 October 2026" },
      { id: "b", text: "11 October 2026" },
      { id: "c", text: "18 October 2026" },
      { id: "d", text: "1 October 2026" }
    ],
    answerId: "c",
    explanation: "10 October is the notice date. The fair itself is on 18 October.",
    hints: ["Separate notice date from event date.", "Look for the fair day in the body."],
  },
{
    id: "g4-eng-ch05-a-q04",
    prompt: "**GREEN VALLEY SCHOOL, PUNE**\n**NOTICE**\n10 October 2026\n\n**BOOK FAIR**\n\nStudents of Classes 3 to 5 are informed that a Book Fair will be held in the school hall on 18 October 2026 from 9:00 a.m. to 1:00 p.m. Please bring a cloth bag. Parents are welcome after 11:00 a.m.\n\nAnanya Deshmukh\nTeacher In-charge, Library Club\n\nRead Notice N1. Which detail is important for students to act on?",
    options: [
      { id: "a", text: "Paint the hall walls." },
      { id: "b", text: "Cancel classes forever." },
      { id: "c", text: "Sell old shoes." },
      { id: "d", text: "Bring a cloth bag." }
    ],
    answerId: "d",
    explanation: "The notice asks students to bring a cloth bag — a clear action point.",
    hints: ["Action points tell readers what to do.", "Cloth bag is listed in the body."],
  },
{
    id: "g4-eng-ch05-a-q05",
    prompt: "**GREEN VALLEY SCHOOL, PUNE**\n**NOTICE**\n10 October 2026\n\n**BOOK FAIR**\n\nStudents of Classes 3 to 5 are informed that a Book Fair will be held in the school hall on 18 October 2026 from 9:00 a.m. to 1:00 p.m. Please bring a cloth bag. Parents are welcome after 11:00 a.m.\n\nAnanya Deshmukh\nTeacher In-charge, Library Club\n\nA school notice should usually include —",
    options: [
      { id: "a", text: "School name, heading, date, key details, and issuer's name" },
      { id: "b", text: "Only emojis and jokes" },
      { id: "c", text: "A long story with no date" },
      { id: "d", text: "Secret codes only friends know" }
    ],
    answerId: "a",
    explanation: "A clear notice needs school name, heading, date, facts, and who wrote it.",
    hints: ["Think of the notice checklist.", "Facts help readers act."],
  },
{
    id: "g4-eng-ch05-a-q06",
    prompt: "12, Lake Road\nBengaluru\n8 October 2026\n\nDear Sana,\n\nHow are you? Last Sunday our class visited Cubbon Park. We saw huge trees and fed the squirrels. I missed you a lot. Please come during the holidays. Give my love to your parents.\n\nYours lovingly,\nAisha\n\nRead Letter L1. What kind of letter is this?",
    options: [
      { id: "a", text: "A formal complaint to the mayor" },
      { id: "b", text: "An informal letter to a friend" },
      { id: "c", text: "A school notice" },
      { id: "d", text: "A newspaper report" }
    ],
    answerId: "b",
    explanation: "\"Dear Sana\" and \"Yours lovingly\" show a friendly informal letter.",
    hints: ["Dear + first name often means informal.", "Yours lovingly fits friends/family."],
  },
{
    id: "g4-eng-ch05-a-q07",
    prompt: "12, Lake Road\nBengaluru\n8 October 2026\n\nDear Sana,\n\nHow are you? Last Sunday our class visited Cubbon Park. We saw huge trees and fed the squirrels. I missed you a lot. Please come during the holidays. Give my love to your parents.\n\nYours lovingly,\nAisha\n\nRead Letter L1. Where should the writer's address appear in this format?",
    options: [
      { id: "a", text: "Only after the signature" },
      { id: "b", text: "In the middle of the story" },
      { id: "c", text: "At the top (here: 12, Lake Road, Bengaluru)" },
      { id: "d", text: "Nowhere — letters need no address" }
    ],
    answerId: "c",
    explanation: "In a personal letter, the sender's address and date usually sit at the top.",
    hints: ["Look at the top lines before Dear…", "Address + date come first."],
  },
{
    id: "g4-eng-ch05-a-q08",
    prompt: "12, Lake Road\nBengaluru\n8 October 2026\n\nDear Sana,\n\nHow are you? Last Sunday our class visited Cubbon Park. We saw huge trees and fed the squirrels. I missed you a lot. Please come during the holidays. Give my love to your parents.\n\nYours lovingly,\nAisha\n\nRead Letter L1. Which closing fits this friendly letter?",
    options: [
      { id: "a", text: "Yours faithfully," },
      { id: "b", text: "Regards to the Principal only," },
      { id: "c", text: "NOTICE ENDS" },
      { id: "d", text: "Yours lovingly," }
    ],
    answerId: "d",
    explanation: "Aisha already uses \"Yours lovingly,\" which suits a letter to a friend.",
    hints: ["Informal letters use warm closings.", "Yours faithfully is more formal."],
  },
{
    id: "g4-eng-ch05-a-q09",
    prompt: "**From:** kabir.rao@schoolmail.example\n**To:** class4a@schoolmail.example\n**Date:** 9 October 2026\n**Subject:** Reminder — bring crayons for art class tomorrow\n\nDear Classmates,\n\nThis is a reminder that tomorrow we have art class in Period 3. Please bring your crayon box and an old newspaper to cover the desk. Thank you!\n\nKabir\nClass Monitor\n\nRead Email E1. Why is the subject line useful?",
    options: [
      { id: "a", text: "It states the purpose clearly in a few words." },
      { id: "b", text: "It tells a joke." },
      { id: "c", text: "It hides the real message." },
      { id: "d", text: "It lists every classmate's address." }
    ],
    answerId: "a",
    explanation: "A good subject line is short and clear so readers know why to open the mail.",
    hints: ["Subject = purpose in brief.", "This one reminds about crayons for art."],
  },
{
    id: "g4-eng-ch05-a-q10",
    prompt: "**From:** kabir.rao@schoolmail.example\n**To:** class4a@schoolmail.example\n**Date:** 9 October 2026\n**Subject:** Reminder — bring crayons for art class tomorrow\n\nDear Classmates,\n\nThis is a reminder that tomorrow we have art class in Period 3. Please bring your crayon box and an old newspaper to cover the desk. Thank you!\n\nKabir\nClass Monitor\n\nRead Email E1. What should classmates bring?",
    options: [
      { id: "a", text: "Only a cricket bat" },
      { id: "b", text: "Crayon box and an old newspaper" },
      { id: "c", text: "Nothing at all" },
      { id: "d", text: "A formal stamp" }
    ],
    answerId: "b",
    explanation: "Kabir asks for a crayon box and an old newspaper to cover the desk.",
    hints: ["Scan the body for bring/please bring.", "Two items are listed."],
  },
{
    id: "g4-eng-ch05-a-q11",
    prompt: "**From:** kabir.rao@schoolmail.example\n**To:** class4a@schoolmail.example\n**Date:** 9 October 2026\n**Subject:** Reminder — bring crayons for art class tomorrow\n\nDear Classmates,\n\nThis is a reminder that tomorrow we have art class in Period 3. Please bring your crayon box and an old newspaper to cover the desk. Thank you!\n\nKabir\nClass Monitor\n\nRead Email E1. Who wrote the email?",
    options: [
      { id: "a", text: "The Principal only" },
      { id: "b", text: "Mrs. Iyer" },
      { id: "c", text: "Kabir, the Class Monitor" },
      { id: "d", text: "An unknown stranger" }
    ],
    answerId: "c",
    explanation: "The email ends with Kabir, Class Monitor — the sender's name and role.",
    hints: ["Check the signature block.", "Class Monitor is Kabir's role."],
  },
{
    id: "g4-eng-ch05-a-q12",
    prompt: "**Phone Message**\n\nDate: 7 October 2026\nTime: 5:15 p.m.\nFor: Amma\nFrom: Mrs. Iyer\n\nMessage: PTA meeting moved to Friday at 4 p.m. in the school hall. Please confirm.\n\nTaken by: Arjun\n\nRead Message M1. Who is the message for?",
    options: [
      { id: "a", text: "Arjun" },
      { id: "b", text: "Mrs. Iyer" },
      { id: "c", text: "The school hall" },
      { id: "d", text: "Amma" }
    ],
    answerId: "d",
    explanation: "The \"For:\" line names Amma as the person who should receive the message.",
    hints: ["Read the For: field.", "Taken by is the writer, not the receiver."],
  },
{
    id: "g4-eng-ch05-a-q13",
    prompt: "**Phone Message**\n\nDate: 7 October 2026\nTime: 5:15 p.m.\nFor: Amma\nFrom: Mrs. Iyer\n\nMessage: PTA meeting moved to Friday at 4 p.m. in the school hall. Please confirm.\n\nTaken by: Arjun\n\nRead Message M1. What is the key information Amma needs?",
    options: [
      { id: "a", text: "PTA meeting moved to Friday at 4 p.m. in the school hall; please confirm." },
      { id: "b", text: "Buy apples at the market." },
      { id: "c", text: "Arjun's homework page number." },
      { id: "d", text: "The weather report." }
    ],
    answerId: "a",
    explanation: "A phone message must keep the caller's main facts: what, when, where, and any ask.",
    hints: ["Keep what / when / where.", "Confirm is part of the ask."],
  },
{
    id: "g4-eng-ch05-a-q14",
    prompt: "**Phone Message**\n\nDate: 7 October 2026\nTime: 5:15 p.m.\nFor: Amma\nFrom: Mrs. Iyer\n\nMessage: PTA meeting moved to Friday at 4 p.m. in the school hall. Please confirm.\n\nTaken by: Arjun\n\nWhy does a message note include Date and Time?",
    options: [
      { id: "a", text: "To decorate the page." },
      { id: "b", text: "So the reader knows when the call came." },
      { id: "c", text: "Because stories need chapters." },
      { id: "d", text: "Messages never need time." }
    ],
    answerId: "b",
    explanation: "Date and time help Amma know how fresh the information is.",
    hints: ["Time stamps help busy readers.", "7 October, 5:15 p.m. is when it arrived."],
  },
{
    id: "g4-eng-ch05-a-q15",
    prompt: "Put the sentences in the best order for a short paragraph.\n\n1. Finally, we shared sandwiches under a tree.\n2. First, we packed water bottles.\n3. Then we walked to the park.",
    options: [
      { id: "a", text: "1, 2, 3" },
      { id: "b", text: "3, 1, 2" },
      { id: "c", text: "2, 3, 1" },
      { id: "d", text: "2, 1, 3" }
    ],
    answerId: "c",
    explanation: "First → Then → Finally shows clear time order: pack, walk, share food.",
    hints: ["Use First / Then / Finally as clues.", "Packing comes before walking."],
  },
{
    id: "g4-eng-ch05-a-q16",
    prompt: "Choose the correctly ordered sentence.\n\nWords: wrote / a / postcard / Meera / to / her / cousin",
    options: [
      { id: "a", text: "Wrote Meera a postcard cousin her to." },
      { id: "b", text: "A postcard Meera cousin to wrote her." },
      { id: "c", text: "To her cousin wrote postcard a Meera." },
      { id: "d", text: "Meera wrote a postcard to her cousin." }
    ],
    answerId: "d",
    explanation: "English order is usually who + action + what + to whom.",
    hints: ["Start with the person doing the action.", "Who → wrote → what → to whom."],
  },
{
    id: "g4-eng-ch05-a-q17",
    prompt: "Which line belongs in a NOTICE, not in a diary?",
    options: [
      { id: "a", text: "All Class 4 students must assemble in the hall at 9 a.m." },
      { id: "b", text: "I felt so happy and hugged my teddy." },
      { id: "c", text: "Today I dreamt of flying kites." },
      { id: "d", text: "Secret: I dislike broccoli." }
    ],
    answerId: "a",
    explanation: "Notices give clear facts for many readers. Diaries hold private feelings.",
    hints: ["Notices = public facts.", "Diaries = personal feelings."],
  },
{
    id: "g4-eng-ch05-a-q18",
    prompt: "You write a leave letter to your class teacher. Best opening?",
    options: [
      { id: "a", text: "Hey teacher, skipping school, ok?" },
      { id: "b", text: "Respected Ma'am, I request leave for two days as I have fever." },
      { id: "c", text: "Yo! I'm out." },
      { id: "d", text: "NOTICE: Book Fair" }
    ],
    answerId: "b",
    explanation: "A leave note to a teacher stays respectful and states the reason clearly.",
    hints: ["Teachers get Respected Ma'am / Sir.", "State leave days + reason."],
  },
{
    id: "g4-eng-ch05-a-q19",
    prompt: "In an email, where does the subject belong?",
    options: [
      { id: "a", text: "Only after Yours faithfully" },
      { id: "b", text: "Hidden inside the last sentence" },
      { id: "c", text: "In the Subject line, before the body" },
      { id: "d", text: "Emails never have subjects" }
    ],
    answerId: "c",
    explanation: "The Subject field sits at the top so readers see the purpose first.",
    hints: ["Subject is a top field.", "Body comes after Dear…"],
  },
{
    id: "g4-eng-ch05-a-q20",
    prompt: "Choose the best heading for a notice about a lost water bottle.",
    options: [
      { id: "a", text: "Once upon a time" },
      { id: "b", text: "My feelings today" },
      { id: "c", text: "Shopping list" },
      { id: "d", text: "LOST — BLUE WATER BOTTLE" }
    ],
    answerId: "d",
    explanation: "Notice headings are short and factual so readers know the topic at a glance.",
    hints: ["Headings stay short and clear.", "LOST + item names the topic."],
  },
{
    id: "g4-eng-ch05-a-q21",
    prompt: "Sequence these steps for sending a thank-you email.\n\nP: Write a short thank-you body\nQ: Add a clear subject\nR: Type the receiver's address\nS: Sign your name",
    options: [
      { id: "a", text: "R, Q, P, S" },
      { id: "b", text: "P, R, S, Q" },
      { id: "c", text: "S, P, Q, R" },
      { id: "d", text: "Q, S, R, P" }
    ],
    answerId: "a",
    explanation: "Address and subject come first, then the body, then your name.",
    hints: ["Fill To + Subject before the body.", "Sign off at the end."],
  },
{
    id: "g4-eng-ch05-a-q22",
    prompt: "Which closing fits a formal letter to the Principal when you wrote \"Respected Sir\"?",
    options: [
      { id: "a", text: "Yours lovingly buddy," },
      { id: "b", text: "Yours obediently, / Yours sincerely," },
      { id: "c", text: "See ya," },
      { id: "d", text: "NOTICE ENDS" }
    ],
    answerId: "b",
    explanation: "School formal letters often close with Yours obediently or Yours sincerely.",
    hints: ["Formal letters need formal closings.", "Lovingly fits friends, not Principal."],
  },
{
    id: "g4-eng-ch05-a-q23",
    prompt: "A message slip should NOT usually include —",
    options: [
      { id: "a", text: "Who called" },
      { id: "b", text: "The time of the call" },
      { id: "c", text: "A long made-up story about dragons" },
      { id: "d", text: "The main point of the call" }
    ],
    answerId: "c",
    explanation: "Messages stay short and true. Invented stories do not belong on a message slip.",
    hints: ["Messages = facts only.", "Skip fantasy stories."],
  },
{
    id: "g4-eng-ch05-a-q24",
    prompt: "Arrange the letter parts in order.\n\n1. Yours lovingly, Rafi\n2. Dear Grandfather,\n3. Body: thanking him for the storybook\n4. Address and date",
    options: [
      { id: "a", text: "2, 4, 1, 3" },
      { id: "b", text: "3, 1, 4, 2" },
      { id: "c", text: "1, 3, 2, 4" },
      { id: "d", text: "4, 2, 3, 1" }
    ],
    answerId: "d",
    explanation: "Address/date → greeting → body → closing and name.",
    hints: ["Top: address and date.", "End: closing + name."],
  }
];

const SET_B: PrepQuestion[] = [
{
    id: "g4-eng-ch05-b-q01",
    prompt: "**SUNRISE PUBLIC SCHOOL, JAIPUR**\n**NOTICE**\n5 November 2026\n\n**SPORTS DAY PRACTICE**\n\nAll students of Class 4 must attend Sports Day practice on the playground every Tuesday and Thursday at 7:30 a.m. until 20 November. Wear PT shoes. Those who are unwell should bring a note from home.\n\nRohit Sharma\nSports Teacher\n\nRead Notice N2. What must Class 4 students attend?",
    options: [
      { id: "a", text: "Sports Day practice on the playground" },
      { id: "b", text: "A music concert only" },
      { id: "c", text: "A cooking class" },
      { id: "d", text: "A bus picnic every day" }
    ],
    answerId: "a",
    explanation: "The heading and body announce Sports Day practice for Class 4.",
    hints: ["Heading names the event.", "Playground is the place."],
  },
{
    id: "g4-eng-ch05-b-q02",
    prompt: "**SUNRISE PUBLIC SCHOOL, JAIPUR**\n**NOTICE**\n5 November 2026\n\n**SPORTS DAY PRACTICE**\n\nAll students of Class 4 must attend Sports Day practice on the playground every Tuesday and Thursday at 7:30 a.m. until 20 November. Wear PT shoes. Those who are unwell should bring a note from home.\n\nRohit Sharma\nSports Teacher\n\nRead Notice N2. On which days is practice held?",
    options: [
      { id: "a", text: "Only Sunday" },
      { id: "b", text: "Tuesday and Thursday" },
      { id: "c", text: "Monday and Saturday" },
      { id: "d", text: "Every day at night" }
    ],
    answerId: "b",
    explanation: "The notice says every Tuesday and Thursday at 7:30 a.m.",
    hints: ["Find the weekdays in the body.", "Morning time is also listed."],
  },
{
    id: "g4-eng-ch05-b-q03",
    prompt: "**SUNRISE PUBLIC SCHOOL, JAIPUR**\n**NOTICE**\n5 November 2026\n\n**SPORTS DAY PRACTICE**\n\nAll students of Class 4 must attend Sports Day practice on the playground every Tuesday and Thursday at 7:30 a.m. until 20 November. Wear PT shoes. Those who are unwell should bring a note from home.\n\nRohit Sharma\nSports Teacher\n\nRead Notice N2. What should students wear?",
    options: [
      { id: "a", text: "Party crowns" },
      { id: "b", text: "Raincoats only" },
      { id: "c", text: "PT shoes" },
      { id: "d", text: "Nothing special is said" }
    ],
    answerId: "c",
    explanation: "The notice clearly asks students to wear PT shoes.",
    hints: ["Scan for Wear / bring lines.", "PT shoes are sports shoes."],
  },
{
    id: "g4-eng-ch05-b-q04",
    prompt: "**SUNRISE PUBLIC SCHOOL, JAIPUR**\n**NOTICE**\n5 November 2026\n\n**SPORTS DAY PRACTICE**\n\nAll students of Class 4 must attend Sports Day practice on the playground every Tuesday and Thursday at 7:30 a.m. until 20 November. Wear PT shoes. Those who are unwell should bring a note from home.\n\nRohit Sharma\nSports Teacher\n\nRead Notice N2. If Rina is unwell, what should she do?",
    options: [
      { id: "a", text: "Hide and skip forever with no word" },
      { id: "b", text: "Write a poem about rain" },
      { id: "c", text: "Call the shopkeeper" },
      { id: "d", text: "Bring a note from home" }
    ],
    answerId: "d",
    explanation: "The notice says those who are unwell should bring a note from home.",
    hints: ["Find the unwell / note sentence.", "Home note explains absence."],
  },
{
    id: "g4-eng-ch05-b-q05",
    prompt: "**SUNRISE PUBLIC SCHOOL, JAIPUR**\n**NOTICE**\n5 November 2026\n\n**SPORTS DAY PRACTICE**\n\nAll students of Class 4 must attend Sports Day practice on the playground every Tuesday and Thursday at 7:30 a.m. until 20 November. Wear PT shoes. Those who are unwell should bring a note from home.\n\nRohit Sharma\nSports Teacher\n\nWho signed Notice N2?",
    options: [
      { id: "a", text: "Rohit Sharma, Sports Teacher" },
      { id: "b", text: "The Class Monitor only" },
      { id: "c", text: "A parent from Jaipur" },
      { id: "d", text: "The bus driver" }
    ],
    answerId: "a",
    explanation: "The issuer's name and designation at the end are Rohit Sharma, Sports Teacher.",
    hints: ["Bottom lines name the issuer.", "Sports Teacher matches the topic."],
  },
{
    id: "g4-eng-ch05-b-q06",
    prompt: "Choose the best order for a notice body facts.\n\nA: Where — school hall\nB: What — Inter-class quiz\nC: When — 22 October, 10 a.m.",
    options: [
      { id: "a", text: "A, A, A only" },
      { id: "b", text: "B, C, A (what, when, where)" },
      { id: "c", text: "C, B, secret code" },
      { id: "d", text: "Where last year, no what" }
    ],
    answerId: "b",
    explanation: "Readers need what the event is, then when and where — a clear order.",
    hints: ["What first, then when/where.", "Don't skip the event name."],
  },
{
    id: "g4-eng-ch05-b-q07",
    prompt: "12, Lake Road\nBengaluru\n8 October 2026\n\nDear Sana,\n\nHow are you? Last Sunday our class visited Cubbon Park. We saw huge trees and fed the squirrels. I missed you a lot. Please come during the holidays. Give my love to your parents.\n\nYours lovingly,\nAisha\n\nRead Letter L1. Why did Aisha write to Sana?",
    options: [
      { id: "a", text: "To complain about Cubbon Park" },
      { id: "b", text: "To cancel friendship forever" },
      { id: "c", text: "To share her park visit and invite Sana for the holidays" },
      { id: "d", text: "To sell squirrel food" }
    ],
    answerId: "c",
    explanation: "The body shares news about the park visit and asks Sana to come in the holidays.",
    hints: ["Find the main purpose in the body.", "Invite + news = friendly letter."],
  },
{
    id: "g4-eng-ch05-b-q08",
    prompt: "Which date format is clear for a school letter heading?",
    options: [
      { id: "a", text: "Someday soon" },
      { id: "b", text: "Yesterday-ish" },
      { id: "c", text: "Month of fun" },
      { id: "d", text: "8 October 2026" }
    ],
    answerId: "d",
    explanation: "A full date (day + month + year) is clear for letters and notices.",
    hints: ["Use a complete calendar date.", "Avoid vague time words."],
  },
{
    id: "g4-eng-ch05-b-q09",
    prompt: "**From:** kabir.rao@schoolmail.example\n**To:** class4a@schoolmail.example\n**Date:** 9 October 2026\n**Subject:** Reminder — bring crayons for art class tomorrow\n\nDear Classmates,\n\nThis is a reminder that tomorrow we have art class in Period 3. Please bring your crayon box and an old newspaper to cover the desk. Thank you!\n\nKabir\nClass Monitor\n\nRead Email E1. The tone of this email is —",
    options: [
      { id: "a", text: "Clear, polite and helpful" },
      { id: "b", text: "Angry and threatening" },
      { id: "c", text: "Secret and confusing" },
      { id: "d", text: "A poem with no facts" }
    ],
    answerId: "a",
    explanation: "Kabir reminds classmates politely and lists exactly what to bring.",
    hints: ["Tone = how it sounds to readers.", "Reminder + please/thank you = polite."],
  },
{
    id: "g4-eng-ch05-b-q10",
    prompt: "You must email your teacher that you will miss a test due to travel. Best subject?",
    options: [
      { id: "a", text: "Hi!!!!!!" },
      { id: "b", text: "Leave on 15 Oct — unable to attend Class 4 Maths test" },
      { id: "c", text: "…………" },
      { id: "d", text: "Food menu" }
    ],
    answerId: "b",
    explanation: "The subject states leave date and the missed test — specific and useful.",
    hints: ["Subject needs purpose + key date.", "Avoid empty or emoji-only subjects."],
  },
{
    id: "g4-eng-ch05-b-q11",
    prompt: "**Phone Message**\n\nDate: 7 October 2026\nTime: 5:15 p.m.\nFor: Amma\nFrom: Mrs. Iyer\n\nMessage: PTA meeting moved to Friday at 4 p.m. in the school hall. Please confirm.\n\nTaken by: Arjun\n\nRead Message M1. Who took the message?",
    options: [
      { id: "a", text: "Amma" },
      { id: "b", text: "Mrs. Iyer" },
      { id: "c", text: "Arjun" },
      { id: "d", text: "The PTA" }
    ],
    answerId: "c",
    explanation: "\"Taken by: Arjun\" names the person who wrote the slip.",
    hints: ["Taken by = message writer.", "From = caller."],
  },
{
    id: "g4-eng-ch05-b-q12",
    prompt: "Which detail is MOST important to include in a phone message?",
    options: [
      { id: "a", text: "Your favourite cartoon" },
      { id: "b", text: "A drawing of a dragon only" },
      { id: "c", text: "Yesterday's cricket score with no caller name" },
      { id: "d", text: "The caller's name and the main point of the call" }
    ],
    answerId: "d",
    explanation: "Without the caller's name and main point, the message cannot help the reader act.",
    hints: ["Who called + what they said.", "Extras can wait."],
  },
{
    id: "g4-eng-ch05-b-q13",
    prompt: "Reorder the jumbled sentence.\n\nthe / on / board / pinned / notice / was / the",
    options: [
      { id: "a", text: "The notice was pinned on the board." },
      { id: "b", text: "Pinned the was notice board on the." },
      { id: "c", text: "On board the notice pinned was the." },
      { id: "d", text: "Was the on notice board pinned the." }
    ],
    answerId: "a",
    explanation: "Subject (The notice) + was pinned + place (on the board).",
    hints: ["Start with The notice.", "Was pinned is the verb group."],
  },
{
    id: "g4-eng-ch05-b-q14",
    prompt: "Put these story sentences in order.\n\n1. He thanked the librarian and left.\n2. Rafi found a quiet corner and read.\n3. Rafi entered the library with his card.",
    options: [
      { id: "a", text: "1, 3, 2" },
      { id: "b", text: "3, 2, 1" },
      { id: "c", text: "2, 1, 3" },
      { id: "d", text: "1, 2, 3" }
    ],
    answerId: "b",
    explanation: "Enter → read → thank and leave is natural time order.",
    hints: ["Enter the place first.", "Thanking comes when leaving."],
  },
{
    id: "g4-eng-ch05-b-q15",
    prompt: "Which belongs in the BODY of an informal letter?",
    options: [
      { id: "a", text: "Only the school stamp" },
      { id: "b", text: "Only \"Yours faithfully\" repeated ten times" },
      { id: "c", text: "News, feelings, and questions for your friend" },
      { id: "d", text: "A notice heading with no greeting" }
    ],
    answerId: "c",
    explanation: "The body carries your news and questions; greeting and closing sit around it.",
    hints: ["Body = main message.", "Greeting/closing are separate parts."],
  },
{
    id: "g4-eng-ch05-b-q16",
    prompt: "Choose the correct sequence for a formal leave application.\n\n1. Body with dates and reason\n2. Receiver's designation (Class Teacher)\n3. Subject: Leave application\n4. Closing and student's name",
    options: [
      { id: "a", text: "4, 1, 2, 3" },
      { id: "b", text: "3, 4, 2, 1" },
      { id: "c", text: "1, 1, 1, 1" },
      { id: "d", text: "2, 3, 1, 4" }
    ],
    answerId: "d",
    explanation: "Address the teacher, state the subject, explain in the body, then close with your name.",
    hints: ["Receiver and subject before the story.", "Name at the end."],
  },
{
    id: "g4-eng-ch05-b-q17",
    prompt: "A notice says \"Parents are welcome after 11:00 a.m.\" This tells us —",
    options: [
      { id: "a", text: "When parents may come" },
      { id: "b", text: "The price of books only" },
      { id: "c", text: "The Principal's favourite colour" },
      { id: "d", text: "Nothing useful" }
    ],
    answerId: "a",
    explanation: "It is a clear timing rule for parents — an essential notice detail.",
    hints: ["After 11:00 a.m. is a time rule.", "Welcome = they may attend then."],
  },
{
    id: "g4-eng-ch05-b-q18",
    prompt: "Which sentence should come FIRST in this paragraph?\n\n___ Next, mix the colours gently. Finally, paint the card.",
    options: [
      { id: "a", text: "Finally, sleep." },
      { id: "b", text: "First, spread newspaper on the desk." },
      { id: "c", text: "Meanwhile, ignore the steps." },
      { id: "d", text: "The end." }
    ],
    answerId: "b",
    explanation: "\"First\" belongs before \"Next\" and \"Finally\" in a how-to order.",
    hints: ["First pairs with Next / Finally.", "Prepare the desk before painting."],
  },
{
    id: "g4-eng-ch05-b-q19",
    prompt: "You write a message for Papa: uncle called. Best message body?",
    options: [
      { id: "a", text: "Someone called. Bye." },
      { id: "b", text: "I forgot everything he said." },
      { id: "c", text: "Uncle Sameer called at 6 p.m. Please call him back about Sunday lunch." },
      { id: "d", text: "Call the moon." }
    ],
    answerId: "c",
    explanation: "Name, time, and purpose give Papa enough to call back usefully.",
    hints: ["Include who + when + why.", "Ask/action (call back) helps."],
  },
{
    id: "g4-eng-ch05-b-q20",
    prompt: "Which pair is correctly matched?",
    options: [
      { id: "a", text: "Notice → secret diary feelings only" },
      { id: "b", text: "Email subject → longest chapter of a novel" },
      { id: "c", text: "Phone message → no caller name needed" },
      { id: "d", text: "Notice → short facts for many readers" }
    ],
    answerId: "d",
    explanation: "Notices share brief facts with a group. Diaries are private; subjects stay short.",
    hints: ["Match format to purpose.", "Notices are public and brief."],
  },
{
    id: "g4-eng-ch05-b-q21",
    prompt: "Jumbled sentence: please / bag / a / cloth / bring",
    options: [
      { id: "a", text: "Please bring a cloth bag." },
      { id: "b", text: "Bag please cloth a bag." },
      { id: "c", text: "A cloth please bag bring." },
      { id: "d", text: "Cloth bag a bring please." }
    ],
    answerId: "a",
    explanation: "Polite imperative: Please + verb + object.",
    hints: ["Please often starts a polite instruction.", "Bring is the action."],
  },
{
    id: "g4-eng-ch05-b-q22",
    prompt: "In Letter L1 style, \"Yours lovingly\" should appear —",
    options: [
      { id: "a", text: "Before the address at the very top" },
      { id: "b", text: "Just before the writer's name at the end" },
      { id: "c", text: "In the subject line of a notice" },
      { id: "d", text: "Instead of the date" }
    ],
    answerId: "b",
    explanation: "The complimentary close sits above the signature name.",
    hints: ["Closing hugs the name at the end.", "Address stays at the top."],
  },
{
    id: "g4-eng-ch05-b-q23",
    prompt: "Sequence for writing a school notice on the board.\n\n1. Write key details (when/where/who)\n2. Write NOTICE and a short heading\n3. Add school name and date\n4. Sign with name and role",
    options: [
      { id: "a", text: "4, 1, 2, 3" },
      { id: "b", text: "1, 4, 3, 2" },
      { id: "c", text: "3, 2, 1, 4" },
      { id: "d", text: "2, 4, 3, omit details" }
    ],
    answerId: "c",
    explanation: "School name/date → NOTICE + heading → details → signature.",
    hints: ["Header first, signature last.", "Details sit in the middle."],
  },
{
    id: "g4-eng-ch05-b-q24",
    prompt: "Which is the BEST final line for a classmate reminder email?",
    options: [
      { id: "a", text: "NOTICE\nSPORTS DAY\nRohit Sharma" },
      { id: "b", text: "Yours faithfully to the Municipal Office," },
      { id: "c", text: "Once upon a time…" },
      { id: "d", text: "Thank you! See you in art class.\nRiya\nClass 4B" }
    ],
    answerId: "d",
    explanation: "A friendly thank-you plus your name (and class) closes a classmate email well.",
    hints: ["Emails end with thanks + name.", "Don't switch to notice format suddenly."],
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "📝",
    title: "Writers' desk",
    body: [
      "Notices, letters, emails and messages each have a job — and a shape.",
      "Today we spot the right format and put sentences in sensible order.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's write smart!",
    visual: "sentence",
    speak: "Today we spot the right format and put sentences in sensible order.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Four formats",
    lead: "Tap to see what each format needs.",
    visual: "sentence",
    speak: "Notice, letter, email and phone message each follow a pattern.",
    cards: [
      { label: "Notice", reveal: "School name · heading · date · facts · signed name", emoji: "📌" },
      { label: "Letter", reveal: "Address · date · Dear… · body · closing", emoji: "✉️" },
      { label: "Email", reveal: "To · Subject · Dear… · body · your name", emoji: "💻" },
      { label: "Message", reveal: "For · From · time · main point · taken by", emoji: "📞" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Order the facts",
    visual: "sentence",
    speak: "First pack water. Then walk to the park. Finally share sandwiches.",
    steps: [
      "First, we packed water bottles.",
      "Then we walked to the park.",
      "Finally, we shared sandwiches.",
      "Time words keep writing clear!",
    ],
    punchline: "First → Then → Finally helps readers follow you.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Which heading fits a notice about a lost bottle?",
    options: [
      { id: "a", text: "LOST — BLUE WATER BOTTLE" },
      { id: "b", text: "Once upon a time" },
      { id: "c", text: "My diary secrets" },
      { id: "d", text: "Shopping list" },
    ],
    answerId: "a",
    why: "Notice headings are short and factual so readers know the topic at once.",
    visual: "sentence",
    speak: "Which heading fits a notice about a lost bottle?",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "sentence",
    speak: "Where does an email subject belong?",
    question: {
      id: "g4-eng-ch05-check",
      prompt: "In an email, the subject should be —",
      options: [
        { id: "a", text: "In the Subject line before the body" },
        { id: "b", text: "Only after the signature" },
        { id: "c", text: "Hidden in the last sentence" },
        { id: "d", text: "Never written" },
      ],
      answerId: "a",
      explanation: "The Subject field sits at the top so readers see the purpose first.",
      hints: ["Subject is a top field.", "Body comes after Dear…"],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Format finder ready!",
    bullets: [
      "Match the format to the job",
      "Notices need facts + a signed name",
      "Letters and emails need clear order",
      "Set A and Set B — 24 questions each",
    ],
    cta: "Back to chapter",
    speak: "Format finder ready! You are ready for the practice sets.",
  },
];

export const g4EnglishWriting: ChapterDef = {
  id: "writers-desk",
  title: "Writers' Desk",
  emoji: "📝",
  blurb: "Notices, letters, emails, messages & order",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "writing-formats",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "writing-formats",
      questions: SET_B,
    },
  ],
  paperTopics: ["writing-formats", "notices", "letters", "sequencing"],
};

export const g4EnglishWritingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
