(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6654,64537,93343,75507,e=>{"use strict";function a(e){return e.replace(/[’]/g,"'").split(/[^A-Za-z0-9']+/).map(e=>e.replace(/^'+|'+$/g,"")).filter(Boolean).length}function t(e){return e.map(e=>e.text).join(" ")}function o(e){return e.pages.reduce((e,o)=>e+o.panels.reduce((e,o)=>e+a(t(o.bubbles)),0),0)}function i(e){return e.toLowerCase().replace(/[^a-z']/g,"")}function n(e,a,t,o){return{prompt:e,options:a.map(([e,a,t])=>({id:e,label:a,emoji:t})),answerId:t,type:o}}e.s(["bubbleText",0,t,"flatPanels",0,function(e){return e.pages.flatMap((e,a)=>e.panels.map((t,o)=>({page:e,pageIndex:a,panel:t,panelIndex:o})))},"normalizeWord",0,i,"storyWordCount",0,o,"wordCount",0,a],64537);let s=[{id:"place-f-s2",genre:"fiction",ladderLevel:6,title:"The Last Cookie",glossary:[{word:"sorry",definition:"Feeling bad about what you did."}],questions:[n("Who is the cookie for?",[["mira","Mira","🍪"],["lion","The lion","🦁"],["none","Nobody","🚫"]],"mira","recall"),n("How does Dev feel?",[["kind","Sorry, then kind","💛"],["angry","Angry","😠"],["asleep","Asleep","😴"]],"kind","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"library",characters:["dev","mira"],bubbles:[{id:"a1",kind:"speech",speaker:"Mira",text:"Dev hid the last cookie, but he looked sorry."}]},{id:"b",scene:"library",characters:["dev"],bubbles:[{id:"b1",kind:"speech",speaker:"Dev",text:"I saved it for you. I hope you are glad."}]}]}]},{id:"place-n-s2",genre:"nonfiction",ladderLevel:6,title:"Why Bees Visit Flowers",glossary:[{word:"pollen",definition:"The dusty grains flowers use to make seeds."}],questions:[n("What do bees sip?",[["sweet","A sweet drink","🍯"],["rain","Rain","🌧️"],["soup","Soup","🥣"]],"sweet","recall"),n("What do they carry?",[["pollen","Pollen","🌼"],["rocks","Rocks","🪨"],["books","Books","📚"]],"pollen","recall")],pages:[{id:"p1",panels:[{id:"a",scene:"meadow",characters:["wombat"],bubbles:[{id:"a1",kind:"speech",speaker:"Wombat",text:"Bees visit flowers to sip a sweet drink."}]},{id:"b",scene:"meadow",characters:["wombat"],bubbles:[{id:"b1",kind:"caption",text:"They carry pollen from bloom to bloom."}]}]}]},{id:"place-f-s3",genre:"fiction",ladderLevel:7,title:"Two Books",glossary:[{word:"worried",definition:"Thinking something might go wrong."}],questions:[n("What did they decide?",[["turns","To take turns","🔁"],["stop","To stop reading","🚫"],["hide","To hide the books","🙈"]],"turns","inference"),n("How did Dev feel at first?",[["worried","Worried","😟"],["hungry","Hungry","🍎"],["bored","Bored","😐"]],"worried","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"library",characters:["mira","dev"],bubbles:[{id:"a1",kind:"narration",text:"Mira wanted the glowing book, but Dev wanted the map book."},{id:"a2",kind:"speech",speaker:"Mira",text:"We can read yours first, and mine after."}]},{id:"b",scene:"library",characters:["dev"],bubbles:[{id:"b1",kind:"speech",speaker:"Dev",text:"That feels fair. I was worried you would mind."}]}]}]},{id:"place-n-s3",genre:"nonfiction",ladderLevel:7,title:"What a Seed Needs",glossary:[{word:"root",definition:"The part of a plant that grows down and drinks water."}],questions:[n("What do leaves catch?",[["light","Light","☀️"],["snow","Snow","❄️"],["toys","Toys","🧸"]],"light","recall"),n("What happens with no light?",[["food","Leaves cannot make food","🍃"],["run","The root runs away","🏃"],["sing","The pot sings","🎵"]],"food","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"meadow",characters:["wombat"],bubbles:[{id:"a1",kind:"speech",speaker:"Wombat",text:"A seed needs water, light, and a place to grow."}]},{id:"b",scene:"meadow",characters:["wombat"],bubbles:[{id:"b1",kind:"caption",text:"The root takes in water. The leaves catch light."}]},{id:"c",scene:"meadow",characters:["wombat"],bubbles:[{id:"c1",kind:"speech",speaker:"Wombat",text:"Without light, the leaves cannot make food."}]}]}]},{id:"place-f-s1",genre:"fiction",ladderLevel:5,title:"Soft Cat",glossary:[{word:"soft",definition:"Nice to touch. Not hard."}],questions:[n("Where is the cat?",[["mat","On the mat","🐱"],["sea","In the sea","🌊"],["tree","Up a tree","🌳"]],"mat","recall"),n("How is the cat?",[["soft","Soft and warm","🤗"],["sharp","Sharp and cold","🧊"],["loud","Very loud","📢"]],"soft","recall")],pages:[{id:"p1",panels:[{id:"a",scene:"library",characters:["mira"],bubbles:[{id:"a1",kind:"speech",speaker:"Mira",text:"The cat sat on the mat."}]},{id:"b",scene:"library",characters:["dev"],bubbles:[{id:"b1",kind:"speech",speaker:"Dev",text:"The cat is soft and warm."}]}]}]},{id:"place-n-s1",genre:"nonfiction",ladderLevel:5,title:"Fish",glossary:[{word:"fins",definition:"The flat parts a fish uses to swim."}],questions:[n("Where do fish live?",[["water","In water","💧"],["nest","In a nest","🪺"],["book","In a book","📘"]],"water","recall"),n("What helps them swim?",[["fins","Fins","🐟"],["boots","Boots","👢"],["hats","Hats","🎩"]],"fins","recall")],pages:[{id:"p1",panels:[{id:"a",scene:"meadow",characters:["wombat"],bubbles:[{id:"a1",kind:"speech",speaker:"Wombat",text:"Fish live in water."}]},{id:"b",scene:"meadow",characters:["wombat"],bubbles:[{id:"b1",kind:"caption",text:"They use fins to swim."}]}]}]}];e.s(["PLACEMENT_STRIPS",0,s,"stripByGenreLevel",0,function(e,a){return s.find(t=>t.genre===e&&t.ladderLevel===a)}],93343);let r=[{id:"midnight-library",title:"The Midnight Library Club",genre:"fiction",blurb:"After school, Mira and Dev follow a book that glows.",themes:["books","friendship"],emoji:"📚"},{id:"captain-comet",title:"Captain Comet's Crew",genre:"fiction",blurb:"Comet and Pip chase a quiet signal between the stars.",themes:["space","teamwork"],emoji:"🚀"},{id:"wonder-wombat",title:"Wonder Wombat's Why Files",genre:"nonfiction",blurb:"Wombat asks a science question and checks the facts.",themes:["science","sky"],emoji:"🔍"},{id:"time-hop",title:"Time-Hop Reporters",genre:"nonfiction",blurb:"Asha and Rafi interview people from long ago.",themes:["history","fairness"],emoji:"⏳"},{id:"shared-fables",title:"Fables we can share",genre:"fiction",blurb:"Aesop, Jataka, and Panchatantra tales, retold in our own words.",themes:["kindness","animals"],emoji:"🦁"}];e.s(["GENRE_BADGES",0,[{id:"books",seriesId:"midnight-library",label:"Book adventurer",emoji:"📚"},{id:"space",seriesId:"captain-comet",label:"Space explorer",emoji:"🚀"},{id:"science",seriesId:"wonder-wombat",label:"Science detective",emoji:"🔬"},{id:"history",seriesId:"time-hop",label:"History hopper",emoji:"⏳"},{id:"fables",seriesId:"shared-fables",label:"Fable friend",emoji:"🦁"}],"SERIES",0,r],75507);var h=e.i(49465);let l=new Set(["caption","narration","thought"]),d={pipeline:"house-svg",notes:"House-style SVG character kits and backgrounds. Every word stays in the text layer."};function c(e,a,t){return{origin:"adapted",license:"Original retelling of a public-domain tale. This wording is original to Reading Champ and is not copied from the source edition.",attribution:e,sourceUrl:a,nc:!1,sa:!1,verifiedBy:"Reading Champ content pass — not a legal review",verifiedOn:"2026-10-11",notes:t}}function p(e,a,t,o){return{prompt:e,options:a.map(([e,a,t])=>({id:e,label:a,emoji:t})),answerId:t,type:o}}function m(e,a){return{word:e,definition:a}}function g(e){return{id:e.id,title:e.title,seriesId:e.seriesId,episode:e.episode,genre:e.genre,subgenre:e.subgenre,themes:e.themes,ladderLevel:e.ladderLevel,ageFloor:8,language:"en",pages:function(e,o){let i=(0,h.ceilingFor)(o),n=e.flatMap(e=>e.panels);if(0===n.length)return[];let s=n.map(e=>a(t(e.bubbles))),r=Math.max(3,i.maxPanelsPerPage),l=Math.max(1,Math.ceil(n.length/r)),d=e=>{let a=Math.floor(n.length/e),t=n.length%e;return Array.from({length:e},(e,o)=>a+ +(o<t))},c=e=>{let a=d(e),t=0;return a.every(e=>{let a=s.slice(t,t+e);t+=e;let o=a.reduce((e,a)=>e+a,0);return e<=i.maxPanelsPerPage&&o<=i.maxWordsPerPage})};for(;!c(l)&&l<n.length;)l+=1;let p=0;return d(l).map((e,a)=>{let t=n.slice(p,p+e);return p+=e,{id:`p${a+1}`,panels:t}})}(e.script.trim().split(/\n(?=# page\b)/).map(e=>e.replace(/^# page[^\n]*\n?/,"").trim()).filter(Boolean).map((e,a)=>{let t=e.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map((e,t)=>(function(e,a,t){let o=e.split("\n").map(e=>e.trim()).filter(Boolean),i=o[0];if(!i)throw Error("Empty panel");let[n,s=""]=i.split(/\s+/,2),r=s?s.split(",").filter(Boolean):[],h=o.slice(1).map((e,o)=>{let i=e.match(/^([^:]+):\s*(.+)$/);if(!i)throw Error(`Bad script line: ${e}`);let n=i[1].trim(),s=l.has(n.toLowerCase())?n.toLowerCase():"speech";return{id:`p${a+1}n${t+1}b${o+1}`,kind:s,speaker:"speech"===s?n:void 0,text:i[2].trim()}});return{id:`p${a+1}n${t+1}`,scene:n,characters:r,bubbles:h}})(e,a,t));return{id:`p${a+1}`,panels:t}}),e.ladderLevel),glossary:e.glossary,comprehension:e.comprehension,talkAbout:e.talkAbout,expectedMinutes:e.expectedMinutes,status:"reviewed",stretchEligible:e.stretchEligible,source:e.source??function(e={}){return{origin:"original",license:"Original text written for Mindstrong Reading Champ.",attribution:"Original Reading Champ story.",nc:!1,sa:!1,verifiedBy:"Reading Champ content pass — not a legal review",verifiedOn:"2026-10-11",...e}}(),art:d}}let b="https://www.gutenberg.org/ebooks/21",u="https://archive.org/details/in.ernet.dli.2015.37110",w="Do not brand this with Project Gutenberg. The link is the traditional public-domain text. These words are a new retelling.",y=[g({id:"aesop-tortoise-hare",title:"The Tortoise and the Hare",seriesId:"shared-fables",episode:1,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:5,expectedMinutes:6,stretchEligible:!1,glossary:[m("steady","Slow and even, not stopping."),m("boast","To talk as if you cannot lose.")],talkAbout:"The hare was fast and still lost. When does slow and steady help you?",comprehension:[p("Who won the race?",[["tortoise","The tortoise","🐢"],["hare","The hare","🐰"],["bird","A bird","🐦"]],"tortoise","recall"),p("Why did the hare lose?",[["nap","He stopped for a nap","😴"],["mud","He got lost in mud","🌧️"],["tie","His shoes fell off","👟"]],"nap","inference")],source:c("Original retelling of the public-domain fable “The Tortoise and the Hare,” attributed to Aesop.",b,w),script:`
# page
meadow tortoise,hare
Hare: I am fast, and you are slow.
Tortoise: I am steady, so let us race.

# page
meadow hare
caption: Hare liked to boast about his legs.
Hare: I will nap and still win.

# page
meadow tortoise
caption: Tortoise started at a calm walk.
Tortoise: One step, then the next.

# page
forest hare
caption: Hare ran far ahead and lay down.
Hare: There is lots of time.

# page
meadow tortoise
caption: Tortoise passed the sleeping hare.
Tortoise: I will not stop yet.

# page
forest hare
caption: Hare woke and saw an empty path.
Hare: Where did that slow walker go?

# page
meadow tortoise,hare
caption: Tortoise was near the end mark.
Hare: I can still dash past.

# page
meadow tortoise
caption: Hare ran hard, but the mark was close.
Tortoise: I kept my steady pace.

# page
meadow tortoise,hare
Hare: You won, and I stopped too long.
Tortoise: Fast is fine, and stopping cost you.

# page
garden tortoise,hare
caption: They walked home side by side.
Hare: Next time I will stay with the race.
`}),g({id:"aesop-lion-mouse",title:"The Lion and the Mouse",seriesId:"shared-fables",episode:2,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:6,expectedMinutes:7,stretchEligible:!1,glossary:[m("mercy","Kindness when you could be harsh."),m("gnaw","To chew through something bit by bit."),m("net","A trap made of rope.")],talkAbout:"The mouse was small and still helped. When has a small person helped you?",comprehension:[p("What did the lion do when the mouse woke him?",[["let","He let the mouse go","🤝"],["ate","He ate the mouse","🍽️"],["hid","He hid in a tree","🌳"]],"let","recall"),p("How did the mouse help later?",[["rope","He gnawed the net","🐭"],["roar","He roared louder","📣"],["ran","He ran away","🏃"]],"rope","inference")],source:c("Original retelling of the public-domain fable “The Lion and the Mouse,” attributed to Aesop.",b,w),script:`
# page
savanna lion
caption: Lion slept in the warm grass.
Mouse: Oh! I did not see his paw.

# page
savanna lion,mouse
Lion: A mouse woke me, and I could be harsh.
Mouse: Please show mercy, since I meant no harm.

# page
savanna lion,mouse
caption: Lion looked at the tiny shaker.
Lion: Go. You are too small to be a meal.

# page
meadow mouse
Mouse: Thank you. I will not forget.
caption: The mouse ran into the grass.

# page
savanna lion
caption: Days later, ropes held Lion down.
Lion: A net. I cannot pull free.

# page
savanna mouse,lion
Mouse: I heard you roar. I came back.
Lion: These ropes are thick.

# page
savanna mouse
caption: The mouse began to gnaw one rope.
Mouse: Small teeth can still cut.

# page
savanna lion,mouse
caption: Strand by strand, the net loosened.
Lion: I can move a paw.

# page
meadow lion,mouse
Lion: You freed me. Mercy came back as help.
Mouse: You let me go when you did not have to.

# page
savanna lion,mouse
caption: They rested in the same patch of shade.
Lion: Small and large can care for each other.
`}),g({id:"jataka-tortoise",title:"The Tortoise Who Let Go",seriesId:"shared-fables",episode:3,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:7,expectedMinutes:8,stretchEligible:!1,glossary:[m("grip","A firm hold."),m("pond","A small pool of water."),m("reply","To answer someone.")],talkAbout:"The tortoise wanted to reply in the air. When is it wiser to wait before you speak?",comprehension:[p("How did the ducks carry the tortoise?",[["stick","He held a stick in his mouth","🪵"],["bag","In a bag","👜"],["boat","On a boat","⛵"]],"stick","recall"),p("Why did he fall?",[["talk","He opened his mouth to reply","💬"],["rain","Rain pushed him","🌧️"],["sleep","He fell asleep","😴"]],"talk","inference")],source:c("Original retelling of the Kacchapa Jataka, “The Talkative Tortoise,” a public-domain birth story.","https://www.gutenberg.org/ebooks/51880","The old telling has the tortoise fall and die. This version keeps the lesson and lands him safely in a pond. Do not copy the source edition’s wording. Do not brand with Project Gutenberg."),script:`
# page
pond tortoise,duck
Tortoise: I want to see the far pond.
Duck: We can carry you if you keep a grip.

# page
pond duck,duck
caption: The ducks held a stick between them.
Duck: Bite the middle. Do not reply to anyone.

# page
sky tortoise,duck
caption: They lifted off. The town looked small.
Tortoise: I will keep my mouth shut.

# page
village tortoise,duck
caption: People below looked up and laughed.
caption: Two ducks are carrying a tortoise.

# page
sky tortoise
caption: The tortoise wanted to reply.
Tortoise: I must tell them this was my idea.

# page
sky duck,tortoise
Duck: Hold on. We are still high.
caption: He opened his mouth anyway.

# page
pond tortoise
caption: He let go of the stick and fell.
caption: A soft pond caught him with a splash.

# page
pond duck,tortoise
Duck: You are safe, but you are wet.
Tortoise: I wanted the last word.

# page
pond tortoise,duck
Duck: A reply can wait until you land.
Tortoise: My grip mattered more than my point.

# page
meadow tortoise,duck
caption: They tried again the next day, and he stayed quiet.
Tortoise: I will speak when my feet touch ground.
`}),g({id:"aesop-ant",title:"The Ant and the Grasshopper",seriesId:"shared-fables",episode:4,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:7,expectedMinutes:8,stretchEligible:!0,glossary:[m("store","To put something away for later."),m("grasshopper","A green insect with long jumping legs."),m("winter","The cold season.")],talkAbout:"The ant shared, and the grasshopper helped afterward. What is a fair way to share work?",comprehension:[p("What did the ant do all summer?",[["food","Stored food","🌾"],["sang","Only sang","🎵"],["slept","Slept all day","😴"]],"food","recall"),p("What happened in winter?",[["share","The ant shared, and the hopper helped","🤝"],["left","The ant left town","🚂"],["melt","The food melted","💧"]],"share","inference")],source:c("Original retelling of the public-domain fable “The Ant and the Grasshopper,” attributed to Aesop.",b,"Many old tellings refuse to share. This one lets the ant share a meal, and the grasshopper helps next. "+w),script:`
# page
meadow ant,hopper
Hopper: Come sing. The day is warm.
Ant: I need to store food before winter.

# page
garden ant
caption: The ant carried grain, bit by bit.
Ant: A little each day fills the nest.

# page
meadow hopper
caption: The grasshopper played and napped.
Hopper: Winter is far. I will not think of it.

# page
forest ant,hopper
Ant: You could store a little too.
Hopper: Storing is dull. Songs are better.

# page
meadow hopper
caption: The air grew cold. The songs got thin.
Hopper: The grain in the field is gone.

# page
burrow ant,hopper
Hopper: I am hungry, and I did not store.
Ant: Come in, and we can share one meal.

# page
burrow ant
caption: The ant set out a small pile.
Ant: Sharing is kind. Next time, help me gather.

# page
burrow hopper
Hopper: I can sweep and sort.
caption: The grasshopper worked until the nest was tidy.

# page
meadow ant,hopper
Ant: Winter is easier when we both plan.
Hopper: I will store a little and still sing.

# page
garden ant,hopper
caption: They put a few seeds away side by side.
Hopper: Play is good. A plan is good too.
`}),g({id:"pancha-monkey",title:"The Monkey and the Crocodile",seriesId:"shared-fables",episode:5,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:8,expectedMinutes:9,stretchEligible:!0,glossary:[m("crocodile","A long reptile that lives in rivers."),m("heart","Here, the monkey's life, which the crocodile wanted."),m("riverbank","The land at the edge of a river.")],talkAbout:"The monkey noticed the danger and thought fast. What is a safe way to leave a friend who is not being safe?",comprehension:[p("What did the crocodile say in the river?",[["heart","He wanted the monkey's heart","💔"],["song","He wanted a song","🎵"],["map","He wanted a map","🗺️"]],"heart","recall"),p("How did the monkey get away?",[["tree","He said his heart was in the tree","🌳"],["swim","He swam across the sea","🌊"],["net","He called a lion","🦁"]],"tree","inference")],source:c("Original retelling of a public-domain Panchatantra tale about a monkey and a crocodile.",u,"The 1925 Ryder translation is in the public domain. This comic does not copy that wording. The wife’s wish is told gently for ages 8–10."),script:`
# page
river monkey,croc
caption: A monkey and a crocodile met often on the riverbank.
Monkey: I will share these sweet fruits.

# page
forest monkey,croc
Croc: My wife wants to meet you.
Monkey: I cannot swim. How would I cross?

# page
river croc
caption: The crocodile let the monkey ride on his back.
Croc: Hold still. The water is deep in the middle.

# page
river monkey,croc
Monkey: You are very quiet today.
Croc: My wife thinks a monkey heart would make her strong.

# page
river monkey
caption: The monkey hid his fear and kept his voice calm.
Monkey: Oh. My heart is not with me.

# page
river croc,monkey
Croc: Where is it?
Monkey: I left it in the tree on the riverbank.

# page
river monkey,croc
caption: The crocodile turned back, greedy and unsure.
Monkey: I can fetch it if you take me to that tree.

# page
forest monkey
caption: At the bank, the monkey climbed fast and stayed up high.
Monkey: My heart was here all along. I will not ride again.

# page
river croc
Croc: You tricked me.
Monkey: You hid a plan that would hurt me.

# page
forest monkey,croc
caption: The crocodile could not reach the high branch.
Monkey: A friend does not carry you toward harm.

# page
river monkey
caption: He threw fruit down, but he did not come down.
Monkey: We can talk from here. I will not cross with you.

# page
forest monkey
caption: The monkey told the other animals what had happened.
Monkey: Quick thinking got me home. Trust still has to be earned.
`}),g({id:"pancha-jackal",title:"The Blue Jackal",seriesId:"shared-fables",episode:6,genre:"fiction",subgenre:"fable",themes:["kindness","animals"],ladderLevel:9,expectedMinutes:10,stretchEligible:!1,glossary:[m("jackal","A wild dog that lives in a group."),m("dye","A color that soaks into fur or cloth."),m("pretend","To act like something you are not.")],talkAbout:"The blue color washed off. Why is pretending to be someone else a hard job to keep up?",comprehension:[p("Why did the animals obey at first?",[["blue","He looked like a strange blue king","🔵"],["gold","He paid them gold","💰"],["map","He had a map","🗺️"]],"blue","recall"),p("What showed the truth?",[["rain","Rain washed the dye off","🌧️"],["book","A book told them","📘"],["song","He sang his name","🎵"]],"rain","inference")],source:c("Original retelling of the public-domain Panchatantra tale of the blue jackal.",u,"The 1925 Ryder translation is in the public domain. This comic does not copy that wording."),script:`
# page
market jackal
caption: A hungry jackal slipped into a market and fell into a pot of blue dye.
Jackal: I cannot see. Everything drips.

# page
forest bluejackal
caption: He ran to the forest. The blue did not wipe off.
Jackal: If they see me like this, they may not know me.

# page
forest bluejackal,lion
Lion: What are you? You are not a lion, and you are not a usual jackal.
Bluejackal: I am a new king. Obey me.

# page
savanna bluejackal,hare
caption: The animals were unsure, so they obeyed.
Hare: He is blue. Maybe he really is set over us.

# page
forest bluejackal
caption: The jackal liked the bows and the first share of food.
Jackal: Send the other jackals away. Their howls annoy me.

# page
meadow jackal
caption: His own family left, sad and confused.
Jackal: He wants to pretend he never ran with us.

# page
forest bluejackal,lion
Lion: A king who fears his own kind is odd.
Bluejackal: Do not question me. I am not one of them.

# page
sky bluejackal
caption: Rain came hard and long.
caption: The dye ran down his legs in blue streams.

# page
meadow jackal,lion
Lion: You are a jackal. The color was dye.
Jackal: I wanted to be more than I am.

# page
forest jackal
caption: The animals stepped back. No one bowed.
Lion: Pretend can last only until the truth shows.

# page
meadow jackal
caption: He found his family at the edge of the trees.
Jackal: I sent you away. That was wrong.

# page
forest jackal
caption: They let him walk with them, but not at the front.
Jackal: I would rather be a real jackal than a blue pretend king.
`})],f=["books","friendship"],k=[g({id:"mlc-glow",title:"The Glowing Book",seriesId:"midnight-library",episode:1,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:5,expectedMinutes:6,stretchEligible:!1,glossary:[m("library","A room full of books you can borrow."),m("glow","A soft light.")],talkAbout:"Would you open a glowing book if a friend stayed with you?",comprehension:[p("What was glowing?",[["book","The book","📘"],["window","The window","🪟"],["lamp","A lamp","💡"]],"book","recall"),p("How do the friends feel at the end?",[["brave","Glad and brave","🤝"],["mad","Mad","😠"],["lost","Lost","😕"]],"brave","inference")],script:`
# page
library mira,dev
Mira: That blue book is glowing.
Dev: I see it on the high shelf.

# page
library mira,dev
caption: They stepped closer, side by side.
Mira: The light is soft, not hot.

# page
stacks mira,dev
Dev: Should a grown-up see this too?
Mira: A note is tucked under the book.

# page
stacks mira,dev
caption: The note was written in neat ink.
Dev: It says, For the club after school.

# page
library mira,dev
Mira: We can open it together.
Dev: I will hold this side.

# page
library mira,dev
caption: A map of the library sat inside.
Mira: A star marks the window seat.

# page
night mira,dev
Dev: The seat is by the tall window.
Mira: I see a red ribbon there.

# page
night mira,dev
caption: Mira lifted the ribbon with care.
Dev: The book glow jumped to it.

# page
library mira,dev
Mira: The book is quiet now.
Dev: The ribbon can light our way.

# page
library mira,dev
caption: They put the book back on the shelf.
Mira: Next time we bring one more friend.
`}),g({id:"mlc-shelf",title:"The Quiet Shelf",seriesId:"midnight-library",episode:2,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:5,expectedMinutes:6,stretchEligible:!0,glossary:[m("library","A room full of books you can borrow."),m("shy","Quiet, and not ready to be seen yet.")],talkAbout:"The shy book was turned the wrong way. How do you help someone feel easy to find?",comprehension:[p("What was wrong with the book?",[["back","Its back faced out","📘"],["wet","It was wet","💧"],["gone","It was gone","🚫"]],"back","recall"),p("Why did they turn it around?",[["find","So a reader could find it","👀"],["hide","To hide it","🙈"],["sell","To sell it","💰"]],"find","inference")],script:`
# page
library mira,dev
Mira: This library shelf is very quiet.
Dev: I hear a tiny tap.

# page
stacks mira,dev
caption: One book faced the wrong way.
Mira: I cannot see its name.

# page
stacks mira,dev
Dev: Maybe it feels shy.
Mira: A shy book still wants a reader.

# page
library page,mira
Page: I felt that tap too.
Dev: Can we turn it out?

# page
stacks mira,dev
caption: Dev turned the book with slow hands.
Mira: The name says The Lost Kite.

# page
library mira,dev
Dev: Now someone can find it.
Mira: We can read the first page.

# page
library mira,dev
caption: The first page showed a red kite.
Dev: It got stuck in a tall tree.

# page
garden mira,dev
Mira: In the story, friends wait under it.
Dev: They do not tug the string.

# page
garden mira,dev
caption: A soft wind lifts the kite free.
Mira: Waiting was the kind plan.

# page
library mira,dev
Dev: The tap stopped.
Mira: The shy book is easy to see now.
`}),g({id:"mlc-door",title:"The Door in the Shelf",seriesId:"midnight-library",episode:3,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:6,expectedMinutes:7,stretchEligible:!0,glossary:[m("nervous","A fluttery feeling before something new."),m("fable","A very old story that teaches a kind idea."),m("lonely","Feeling alone and wishing for a friend.")],talkAbout:"Dev felt nervous and then glad. When have you felt both?",comprehension:[p("Where did the tiny door lead?",[["garden","A quiet garden","🌿"],["sea","The sea","🌊"],["shop","A shop","🏪"]],"garden","recall"),p("How did Dev feel at first?",[["nervous","A bit nervous","😟"],["angry","Angry","😠"],["bored","Bored","😐"]],"nervous","inference")],script:`
# page
stacks mira,dev
Mira: There is a tiny door in this shelf.
Dev: I feel a bit nervous.

# page
stacks mira,dev
caption: The door was no taller than a hand.
Mira: We can peek, then step back.

# page
garden mira,dev
caption: The door opened onto a quiet garden.
Dev: It smells like paper and rain.

# page
garden mira,dev
Mira: These plants have pages for leaves.
Dev: This one is a fable.

# page
garden mira,dev
caption: A small book sat alone on a stone.
Mira: It looks lonely.

# page
garden mira,dev
Dev: I was nervous, but I can sit.
Mira: We will read one page with it.

# page
garden mira,dev
caption: The fable was about a kind mouse.
Dev: The book looks less lonely now.

# page
garden mira,dev
Mira: Stories like a person to stay.
Dev: We can come back after school.

# page
stacks mira,dev
caption: They shut the tiny door with care.
Dev: I am glad we went in.

# page
library mira,dev
Mira: Nervous can sit next to brave.
Dev: Next time I will knock first.
`}),g({id:"mlc-map",title:"The Map That Folded",seriesId:"midnight-library",episode:4,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:6,expectedMinutes:7,stretchEligible:!1,glossary:[m("library","A room full of books you can borrow."),m("blank","Empty, with nothing drawn yet.")],talkAbout:"The map worked only when Mira and Dev held it together. What is something you do better with a friend?",comprehension:[p("When did the map show the room?",[["both","When both friends held it","🤝"],["one","When one left","🚶"],["dark","Only at noon","☀️"]],"both","recall"),p("Why did the lines fade?",[["apart","They let go of each other","👋"],["rain","Rain washed them","🌧️"],["ink","The ink was bad","🖊️"]],"apart","inference")],script:`
# page
library mira,dev
Mira: The map from the book is blank.
Dev: It had lines last time.

# page
library mira,dev
caption: Mira held one side and Dev held the other.
Dev: Look, the lines came back.

# page
stacks mira,dev
Mira: It shows a room behind the stacks.
Dev: I have never seen that door.

# page
stacks mira,dev
caption: Dev let go to point.
Mira: The map went blank again.

# page
stacks mira,dev
Dev: It needs both of us.
Mira: Then we hold it and walk slow.

# page
night mira,dev
caption: A low door waited behind the last shelf.
Dev: The map star sits on this spot.

# page
night mira,dev
Mira: Inside is a round table.
Dev: Two chairs. One for each of us.

# page
library mira,dev
caption: A card on the table said Club.
Mira: The library saved us a place.

# page
library mira,dev
Dev: If I drop my side, we get lost.
Mira: So we keep hold until we are out.

# page
library mira,dev
caption: They folded the map and smiled.
Dev: This club is a two-person map.
`}),g({id:"mlc-bell",title:"The Night Bell",seriesId:"midnight-library",episode:5,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:7,expectedMinutes:8,stretchEligible:!1,glossary:[m("library","A room full of books you can borrow."),m("bell","A small cup of metal that rings.")],talkAbout:"The bell rang because a story wanted a listener. Who do you like to read to?",comprehension:[p("What made the bell stop?",[["read","They read the story aloud","📖"],["hid","They hid the bell","🙈"],["ran","They ran away","🏃"]],"read","recall"),p("Why did the bell ring?",[["hear","A story needed someone to hear it","🔔"],["lunch","It was lunch time","🥪"],["fire","There was a fire","🔥"]],"hear","inference")],script:`
# page
night mira,dev
caption: A small bell rang over the library door.
Dev: We did not touch it.

# page
library mira,dev
Mira: It rings, then it waits.
Dev: Maybe it wants us to follow the sound.

# page
stacks mira,dev
caption: The sound led them to a low stool.
Mira: A picture book is open on it.

# page
stacks mira,dev
Dev: The bell rings harder when we walk past.
Mira: And it slows when we stop to look.

# page
library page,mira
Page: That bell marks a story with no listener.
Dev: So it is asking, not warning.

# page
library mira,dev
caption: They sat on the stool together.
Mira: I will read the first lines out loud.

# page
library mira,dev
Dev: It is about a boat and a paper star.
Mira: The star shows the boat the way home.

# page
night mira,dev
caption: Dev read the next page without rushing.
Mira: The bell is softer now.

# page
library mira,dev
Dev: On the last page, the boat finds the dock.
Mira: Listen. The bell stopped.

# page
library page,mira
Page: A story rests when someone hears it.
Dev: We can listen again next time it calls.
`}),g({id:"mlc-page",title:"The Missing Page",seriesId:"midnight-library",episode:6,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:7,expectedMinutes:8,stretchEligible:!0,glossary:[m("blank","Empty, with no words yet."),m("lantern","A light you can carry."),m("fair","Kind and even for the people in it.")],talkAbout:"The last page stayed blank until they chose a fair ending. What would you have written?",comprehension:[p("What was missing?",[["page","The last page of words","📄"],["door","The library door","🚪"],["cat","A cat","🐱"]],"page","recall"),p("Which choice brought the words back?",[["share","Share the lantern","💡"],["hide","Hide the light","🙈"],["break","Break the lantern","💥"]],"share","inference")],script:`
# page
library mira,dev
Mira: This story stops before the end.
Dev: The last page is blank.

# page
stacks mira,dev
caption: The hero stood in a dark wood with one lantern.
Mira: Two paths wait, and both look hard.

# page
stacks mira,dev
Dev: If she keeps the light, she is safe.
Mira: But the other path has a lost child.

# page
library page,mira
Page: Some endings wait for a fair choice.
Dev: Fair means both people get care.

# page
library mira,dev
Mira: She could share the lantern.
Dev: Then neither path is all dark.

# page
night mira,dev
caption: Mira said the choice out loud.
Dev: Share the light. Walk the slow path.

# page
night mira,dev
caption: Ink began to return to the blank page.
Mira: She hands the child half the glow.

# page
library mira,dev
Dev: They reach the town gate together.
Mira: The lantern is dim, but it lasts.

# page
library mira,dev
caption: The last line thanked the reader.
Dev: Our fair idea matched the story.

# page
library mira,dev
Mira: A blank page can be a question.
Dev: I like that we did not rush it.
`}),g({id:"mlc-lamp",title:"The Last Lamp",seriesId:"midnight-library",episode:7,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:8,expectedMinutes:9,stretchEligible:!1,glossary:[m("library","A room full of books you can borrow."),m("ribbon","A thin strip of cloth."),m("outage","A time when the lights go out.")],talkAbout:"The ribbon was a small light, but it was enough to lead Page to the door. When has a small help been enough?",comprehension:[p("Why was the library dark?",[["out","The lamp went out","💡"],["paint","Someone painted it","🎨"],["noon","It was noon","☀️"]],"out","recall"),p("How did they help Page?",[["glow","The ribbon glow led her out","🎀"],["shout","They shouted at her","📣"],["hide","They hid the door","🚪"]],"glow","inference")],script:`
# page
night mira,dev
caption: Rain tapped the library windows, and the lamp clicked off.
Mira: I cannot see the shelves.

# page
library mira,dev
Dev: This is an outage. The lights may stay off.
Mira: The ribbon from the club book still glows.

# page
stacks mira,dev
caption: They held the ribbon up like a small moon.
Dev: It shows one shelf at a time.

# page
stacks page,mira
Page: I am by the tall shelf. I lost the door.
Mira: Stay there. We will come to you.

# page
night page,dev
caption: Page had her hands on a row of books.
Dev: Take my arm. Mira has the light.

# page
library mira,dev
Mira: Step where the glow falls.
Page: I can see my shoes now. Thank you.

# page
library page,mira
caption: A chair leg almost caught Page's foot.
Dev: Wait. I will move it.

# page
night mira,dev
Mira: The door is ten steps ahead.
Page: Count them with me, slow and loud.

# page
library page,dev
caption: They counted, and the door handle shone.
Page: Fresh air. You two kept me safe.

# page
night mira,dev
Dev: The ribbon is a small light.
Mira: Small was enough for the walk.

# page
library page,mira
Page: When the lamp returns, we will check the room.
Dev: And we will put the ribbon back in its book.

# page
library mira,dev
caption: The lamp flickered, then held steady.
Mira: The club can be a light for someone else.
`}),g({id:"mlc-waited",title:"The Story That Waited",seriesId:"midnight-library",episode:8,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:8,expectedMinutes:9,stretchEligible:!0,glossary:[m("dusty","Covered in soft grey dust."),m("invite","To ask someone to join you."),m("patient","Able to wait without being unkind.")],talkAbout:"The book had waited a long time for a new listener. Is there a story you would like to share with someone?",comprehension:[p("What did the card inside the book ask?",[["read","Read me to someone new","📖"],["burn","Burn the book","🔥"],["sell","Sell the book","💰"]],"read","recall"),p("Why did they invite Page?",[["hear","The book wanted a new listener","👂"],["fix","Page had to fix the roof","🏠"],["race","They wanted a race","🏁"]],"hear","inference")],script:`
# page
stacks mira,dev
caption: A dusty book sat at the end of the shelf, wider than the rest.
Mira: No one has pulled this one in a long time.

# page
library mira,dev
Dev: The pages smell like old rain.
Mira: There is a card in the front.

# page
library mira,dev
caption: The card said, Read me to someone new.
Dev: It has been patient. We should not rush past it.

# page
stacks page,mira
Mira: Page, may we invite you to hear a story?
Page: I would like that. Let me sit.

# page
library page,dev
caption: Dev wiped the dust with a soft cloth.
Page: Start at the first line, even if it is slow.

# page
library mira,dev
Mira: Once, a bridge waited for a walker.
Dev: The traveler was afraid of the gap.

# page
night mira,page
caption: Page closed her eyes and smiled at the next part.
Page: The bridge did not hurry the traveler.

# page
library mira,dev
Dev: And the traveler took one board at a time.
Mira: That is why the book could wait for us.

# page
library page,mira
Page: A patient story is still alive.
Dev: We can put a fresh card in the club box.

# page
stacks mira,dev
caption: The fresh card said, Ask a new friend to listen.
Mira: Next week this book will not be dusty.

# page
library mira,dev
Dev: Waiting was not the same as being left behind.
Mira: Someone just had to invite a listener.

# page
library page,dev
Page: I will remember the bridge when I feel stuck.
Dev: Then the story did its work.
`}),g({id:"mlc-club",title:"The Club Stays Open",seriesId:"midnight-library",episode:9,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:9,expectedMinutes:10,stretchEligible:!1,glossary:[m("secret","Something kept from other people."),m("borrow","To use something and then give it back."),m("member","A person who belongs to a group.")],talkAbout:"Mira and Dev chose to share the club instead of keeping it a secret. When is sharing fairer than keeping something just for you?",comprehension:[p("What did they decide about the glowing book?",[["share","Put it back so others can borrow it","📚"],["hide","Hide it at home","🏠"],["sell","Sell it","💰"]],"share","recall"),p("Why was a closed club unfair?",[["few","Only two people could use the stories","🚪"],["dark","The room was too dark","🌑"],["long","The books were too long","📏"]],"few","inference")],script:`
# page
night mira,dev
caption: The ribbon glowed on the club table, and the library was almost empty.
Mira: We could take the book home and keep it a secret.

# page
library mira,dev
Dev: Then no one else would find the map.
Mira: A secret club sounds special. It also sounds small.

# page
library page,mira
Page: Books in this room are here to borrow, not to hide.
Dev: If we lock the door, the bell cannot call anyone new.

# page
stacks mira,dev
caption: They walked past shelves that other children would need the next day.
Mira: The shy book, the fable, the dusty bridge story.

# page
stacks mira,dev
Dev: Those stories helped us because we could reach them.
Mira: If we keep the glow, we close that reach.

# page
library mira,dev
caption: Mira set the glowing book back in its gap.
Dev: It still shines a little, but it stays on the shelf.

# page
library page,dev
Page: You can make a card that says how to join.
Mira: Any member must read with care and put books back.

# page
night mira,dev
caption: Dev wrote, Come after school. Bring a friend. Listen first.
Page: That is a club I can point children toward.

# page
library mira,dev
Mira: I will miss having the ribbon in my pocket.
Dev: You can borrow it on club days, then return it.

# page
garden mira,dev
caption: They taped one card by the tiny door and one by the bell.
Mira: The club stays open even when we go home.

# page
library page,mira
Page: A secret can feel safe, and a shared room can feel safe too.
Dev: This one is safer because more people can help.

# page
night mira,dev
caption: The bell gave one soft ring, as if it agreed.
Mira: Next listener, the shelf is yours.
`}),g({id:"mlc-pace",title:"Two Ways to Read",seriesId:"midnight-library",episode:10,genre:"fiction",subgenre:"adventure",themes:f,ladderLevel:9,expectedMinutes:10,stretchEligible:!0,glossary:[m("pace","How fast or slow you go."),m("detail","A small part that matters."),m("chapter","One section of a longer story.")],talkAbout:"Mira liked a fast pace and Dev liked a slow one. How do you and someone you know read differently?",comprehension:[p("What did Mira miss by reading fast?",[["clue","A small clue in the picture","🔎"],["door","The front door","🚪"],["bus","The bus","🚌"]],"clue","recall"),p("What did they learn about pace?",[["both","Each pace can find something","🐢"],["one","Only the fast way works","⚡"],["none","Pace does not matter","🚫"]],"both","inference")],script:`
# page
library mira,dev
Mira: I finished the chapter. You are still on page two.
Dev: I am looking at the picture in the corner.

# page
stacks mira,dev
caption: Mira tapped her foot, ready for the next book.
Dev: There is a tiny key drawn in the window.

# page
library mira,dev
Mira: I did not see a key. I was chasing the plot.
Dev: And I do not know yet why the boat left.

# page
library page,mira
Page: A fast pace can catch the shape of a story.
Dev: A slow pace can catch a detail.

# page
night mira,dev
caption: They traded ways for one chapter.
Mira: I will put my finger on each picture.

# page
library mira,dev
Dev: I will read the words straight through once.
Mira: Tell me the shape. I will tell you the clue.

# page
stacks mira,dev
caption: Mira found the key. Dev found why the boat left at dawn.
Dev: The key opens the dock box.

# page
library mira,dev
Mira: I would have missed it at my old pace.
Dev: And I would have missed the reason they sailed.

# page
garden mira,dev
caption: They sat by the window seat and did not argue about speed.
Page: Keep the way that fits you, and borrow the other when you are stuck.

# page
library mira,dev
Mira: My pace is still quick. I can pause for details.
Dev: My pace is still slow. I can ask what happens next.

# page
night mira,dev
caption: The map showed both the path and a small star they had skipped.
Mira: We needed both kinds of looking.

# page
library mira,dev
Dev: The club can welcome a fast reader and a slow one.
Mira: The story is big enough for both.
`})],v=["science","why"],T=[g({id:"wombat-sky",title:"Why Is the Sky Blue?",seriesId:"wonder-wombat",episode:1,genre:"nonfiction",subgenre:"science",themes:["science","sky"],ladderLevel:5,expectedMinutes:6,stretchEligible:!1,glossary:[m("sunlight","Light that comes from the sun."),m("scatters","Spreads out in many directions.")],talkAbout:"Look outside together. What color is the sky right now, and what else can you notice?",comprehension:[p("Which light scatters to make the sky look blue?",[["blue","Blue light","🔵"],["mud","Mud","🟤"],["ink","Ink","🖤"]],"blue","recall"),p("When can red light reach you more?",[["sunset","At sunset","🌅"],["lunch","At lunch","🥪"],["class","In class","✏️"]],"sunset","recall")],script:`
# page
meadow wombat,dot
Wombat: Why is the sky blue?
Dot: It is not painted on.

# page
sky wombat
caption: Sunlight holds many colors.
Wombat: Air scatters the blue light most.

# page
sky wombat,dot
Dot: Scatters means it bounces around.
Wombat: That blue light reaches your eyes.

# page
meadow wombat
caption: The other colors scatter less.
Wombat: So the day sky looks blue.

# page
sky wombat,dot
Dot: Is space blue too?
Wombat: No, there is no air to scatter light.

# page
meadow wombat
caption: Wombat pointed at the clear air.
Dot: The blue is in the air, not in space.

# page
sky wombat,dot
Wombat: At sunset the path through air is long.
Dot: More blue light scatters away.

# page
meadow wombat
caption: Red and orange can reach you then.
Wombat: That is why sunset glows warm.

# page
sky wombat,dot
Dot: Clouds can hide the blue.
Wombat: They bounce all the colors back.

# page
meadow wombat,dot
caption: They looked up and named the colors they saw.
Wombat: The sky is a science question you can check.
`}),g({id:"wombat-leaves",title:"Why Do Leaves Fall?",seriesId:"wonder-wombat",episode:2,genre:"nonfiction",subgenre:"science",themes:v,ladderLevel:5,expectedMinutes:6,stretchEligible:!0,glossary:[m("autumn","The season when many days grow cooler."),m("seal","To close something so it stays shut.")],talkAbout:"Find a leaf and look for green, yellow, or brown. What do you think the tree is doing?",comprehension:[p("What fades in autumn?",[["green","The green in the leaf","🍃"],["roots","The roots","🌱"],["rain","All the rain","🌧️"]],"green","recall"),p("Why does the leaf fall?",[["seal","The tree seals the stem","🍂"],["pull","A person pulls each one","✋"],["night","Night deletes them","🌙"]],"seal","inference")],script:`
# page
forest wombat,dot
Dot: Why do leaves fall?
Wombat: Not every tree drops them.

# page
forest wombat
caption: In autumn, days get shorter and cooler.
Wombat: That is a signal for many trees.

# page
meadow wombat,dot
Wombat: They stop making the green color.
Dot: Then yellow and orange can show.

# page
forest wombat
caption: Those warm colors were in the leaf already.
Dot: The green was hiding them.

# page
forest wombat,dot
Wombat: The tree seals the leaf stem.
Dot: Seal means it closes the tiny tubes.

# page
meadow wombat
caption: Water stops going into that leaf.
Wombat: The leaf dries and lets go.

# page
forest wombat,dot
Dot: Does the tree die?
Wombat: No, it rests and saves its food.

# page
forest wombat
caption: Some trees stay green all year.
Wombat: They are built for a different plan.

# page
meadow wombat,dot
Dot: Fallen leaves turn into soil food.
Wombat: The tree can use that later.

# page
forest wombat,dot
caption: They pressed a yellow leaf in a notebook.
Wombat: Falling leaves are a plan, not a mistake.
`}),g({id:"wombat-ice",title:"Why Does Ice Float?",seriesId:"wonder-wombat",episode:3,genre:"nonfiction",subgenre:"science",themes:v,ladderLevel:6,expectedMinutes:7,stretchEligible:!1,glossary:[m("freezes","Turns from liquid into ice."),m("liquid","A wet form you can pour, like water.")],talkAbout:"If you have ice in a glass, watch it float. What else floats or sinks at home?",comprehension:[p("Why does ice float?",[["room","Frozen water takes more room","🧊"],["glue","Ice is full of glue","🧴"],["air","Someone ties it up","🎈"]],"room","recall"),p("What can live under the ice?",[["fish","Fish in the liquid water","🐟"],["fire","A fire","🔥"],["sand","Only dry sand","🏜️"]],"fish","inference")],script:`
# page
pond wombat,dot
Dot: This ice stays on top of the pond.
Wombat: It floats. Let us see why.

# page
burrow wombat
caption: Wombat filled a cup and marked the water line.
Dot: Now we freeze it and look again.

# page
burrow wombat,dot
Wombat: When water freezes, it spreads out.
Dot: The ice sits above the old line.

# page
pond wombat
caption: The same water takes more room as ice.
Wombat: So ice is light for its size.

# page
pond wombat,dot
Dot: Light for its size means it floats.
Wombat: The ice stays up. The liquid stays under it.

# page
pond wombat
caption: A winter pond freezes from the top.
Dot: The water below can stay liquid.

# page
pond wombat,dot
Wombat: Fish can live under the ice.
Dot: The top ice even helps keep them from the cold air.

# page
burrow wombat
caption: They checked the cup again the next day.
Wombat: Melted ice fits the first line.

# page
pond wombat,dot
Dot: So ice is still water.
Wombat: Yes. It is water that takes more room.

# page
meadow wombat,dot
caption: They slid a bit of ice into a bowl and watched it float.
Wombat: You can test this in a kitchen.
`}),g({id:"wombat-stars",title:"Why Do Stars Twinkle?",seriesId:"wonder-wombat",episode:4,genre:"nonfiction",subgenre:"science",themes:["science","sky"],ladderLevel:6,expectedMinutes:7,stretchEligible:!0,glossary:[m("twinkle","To seem to flash or wink."),m("steady","Staying the same, not flickering.")],talkAbout:"On a clear night, compare a star with a brighter planet if you can see one. Which one winks more?",comprehension:[p("What makes a star seem to twinkle?",[["air","Moving air bends its light","🌬️"],["switch","The star turns off","💡"],["birds","Birds fly past","🐦"]],"air","recall"),p("Why do planets twinkle less?",[["bigger","They look bigger in the sky","🪐"],["close","They sit on the roof","🏠"],["paint","They are painted on","🎨"]],"bigger","inference")],script:`
# page
moon wombat,dot
Dot: That star keeps winking.
Wombat: We say it twinkles. The star itself is steady.

# page
sky wombat
caption: Starlight travels a very long way.
Wombat: Then it must pass through our moving air.

# page
sky wombat,dot
Dot: Air is not still.
Wombat: Warm and cool bits bend the light a little.

# page
moon wombat
caption: Each bend sends the light a hair left or right.
Dot: So the star seems to flash.

# page
sky wombat,dot
Wombat: The star is not turning off.
Dot: Our air is wiggling the view.

# page
moon wombat
caption: A planet looks bigger than a star in the sky.
Wombat: The wiggles average out, so it twinkles less.

# page
sky wombat,dot
Dot: Is a planet closer than a far star?
Wombat: The ones we see at night are much closer than those stars.

# page
moon wombat
caption: Clouds can hide both stars and planets.
Dot: A clear night is the best test.

# page
sky wombat,dot
Wombat: If the air is very still, stars twinkle less.
Dot: The steady light was there the whole time.

# page
moon wombat,dot
caption: They watched one star and did not blink for a moment.
Wombat: Twinkle is a clue about air, not a star shutting its eye.
`}),g({id:"wombat-storm",title:"Why Do We See Lightning First?",seriesId:"wonder-wombat",episode:5,genre:"nonfiction",subgenre:"science",themes:["science","weather"],ladderLevel:7,expectedMinutes:8,stretchEligible:!0,glossary:[m("lightning","A giant spark in a storm cloud."),m("thunder","The sound that spark makes."),m("farther","More distant.")],talkAbout:"If a storm is near, where is a safe place to wait, and how can you tell if it is moving away?",comprehension:[p("Why do we see lightning before we hear thunder?",[["fast","Light is much faster than sound","⚡"],["eyes","Ears are broken","👂"],["wind","Wind hides sound","🍃"]],"fast","recall"),p("What does a longer wait mean?",[["far","The storm is farther away","📏"],["near","The storm is in the room","🏠"],["done","The storm is over forever","✅"]],"far","inference")],script:`
# page
meadow wombat,dot
caption: A flash lit the clouds. The boom came later.
Dot: Why do we see lightning first?

# page
burrow wombat
Wombat: Lightning is a giant spark.
Dot: Thunder is the sound of that same spark.

# page
sky wombat,dot
Wombat: Light travels very fast.
Dot: Sound is quick too, but much slower than light.

# page
meadow wombat
caption: The flash reaches your eyes almost at once.
Wombat: The thunder needs more time to arrive.

# page
burrow wombat,dot
Dot: If I count in the gap, what do I learn?
Wombat: A longer wait means the storm is farther away.

# page
meadow wombat
caption: A short wait means the storm is close.
Dot: Then we should already be inside.

# page
burrow wombat,dot
Wombat: Go indoors when you hear thunder.
Dot: Stay away from open fields and tall lone trees.

# page
sky wombat
caption: They watched from a window, not from the hill.
Wombat: The next flash had a longer gap.

# page
burrow wombat,dot
Dot: So this storm is moving farther off.
Wombat: We still wait until the thunder stops.

# page
meadow wombat,dot
caption: Blue sky returned, and they stepped out.
Wombat: Light first, sound second. That is the rule you can trust.
`}),g({id:"wombat-salt",title:"Why Is the Sea Salty?",seriesId:"wonder-wombat",episode:6,genre:"nonfiction",subgenre:"science",themes:v,ladderLevel:7,expectedMinutes:8,stretchEligible:!1,glossary:[m("minerals","Tiny bits of rock and salt in water."),m("evaporate","To turn from liquid into air."),m("rivers","Streams of water that flow toward a bigger body.")],talkAbout:"Rain is not salty, but the sea is. What do you think happens to the salt when seawater dries?",comprehension:[p("What carries minerals to the sea?",[["rivers","Rivers","🏞️"],["birds","Only birds","🐦"],["moons","The moon","🌙"]],"rivers","recall"),p("Why does the salt stay?",[["air","Water can evaporate, and salt does not","☀️"],["fish","Fish drink it all","🐟"],["boats","Boats scoop it out","⛵"]],"air","inference")],script:`
# page
river wombat,dot
Dot: This river tastes fresh. The sea tastes salty.
Wombat: One big reason starts here.

# page
river wombat
caption: Rain wears tiny minerals off rocks and soil.
Wombat: Rivers carry those bits downhill.

# page
pond wombat,dot
Dot: I cannot see the salt.
Wombat: It is dissolved. The bits are too small to notice.

# page
river wombat
caption: Day after day, rivers pour into the sea.
Dot: Do they bring a lot each hour? Only a little.

# page
sky wombat,dot
Wombat: The sun helps sea water evaporate.
Dot: Evaporate means the water rises into the air.

# page
sky wombat
caption: The rising water leaves the minerals behind.
Wombat: Salt does not ride up with it.

# page
meadow wombat,dot
Dot: Then rain falls fresh again.
Wombat: Yes. The salt stayed in the sea.

# page
pond wombat
caption: Over a very long time, the sea grew salty.
Wombat: This is one big reason, not the only one.

# page
river wombat,dot
Dot: Some salt also comes from deep vents.
Wombat: We can still test the river part with a pan of salty water.

# page
burrow wombat,dot
caption: They left salty water in the sun until it dried.
Wombat: The water left. The salt sat in the pan.
`}),g({id:"wombat-seasons",title:"Why Do Seasons Change?",seriesId:"wonder-wombat",episode:7,genre:"nonfiction",subgenre:"science",themes:v,ladderLevel:8,expectedMinutes:9,stretchEligible:!1,glossary:[m("tilted","Leaning, not straight up."),m("hemisphere","One half of Earth."),m("orbit","The path Earth takes around the sun.")],talkAbout:"Earth is tilted. How does the light in your window change from summer to winter?",comprehension:[p("What makes seasons change?",[["tilt","Earth is tilted as it orbits","🌍"],["hat","The sun puts on a hat","🎩"],["wind","Wind pushes the sun away","💨"]],"tilt","recall"),p("Is summer just because Earth is much closer to the sun?",[["no","No. The tilt matters more","📐"],["yes","Yes. Closer is the whole reason","🔥"],["moon","The moon blocks winter","🌑"]],"no","inference")],script:`
# page
meadow wombat,dot
Dot: Why is it hot in one part of the year and cold in another?
Wombat: Earth is tilted. That tilt rides along our orbit.

# page
sky wombat
caption: An orbit is the path Earth takes around the sun.
Wombat: The path is not a perfect circle, but the tilt matters more.

# page
meadow wombat,dot
Dot: So summer is not just we got much closer?
Wombat: Right. A tilted Earth points one hemisphere toward the sun.

# page
sky wombat
caption: When our hemisphere leans toward the sun, days last longer.
Dot: The light hits us more directly, so the land warms.

# page
forest wombat,dot
Wombat: Half a year later, our hemisphere leans away.
Dot: The days grow shorter then.

# page
meadow wombat,dot
caption: Shorter days and a lower sun mean less heat.
Wombat: That is winter here, while the other hemisphere can have summer.

# page
sky wombat,dot
Dot: So the two halves do not share the same season.
Wombat: They trade. The tilt does not flip each week. It stays put.

# page
meadow wombat
caption: Wombat tipped a round fruit and moved a lamp around it.
Dot: The top got more light, then the bottom did.

# page
burrow wombat,dot
Wombat: The fruit did not need to jump closer to the lamp.
Dot: The lean was enough to change the light.

# page
sky wombat
caption: Earth keeps its tilt as it travels.
Wombat: Seasons are a light-and-lean story.

# page
meadow wombat,dot
Dot: I can watch my shadow grow long in winter.
Wombat: A long shadow means the sun is lower.

# page
forest wombat,dot
caption: They marked the noon shadow with a stone.
Wombat: Come back in another season and measure again.
`}),g({id:"wombat-bees",title:"How Do Bees Find Flowers?",seriesId:"wonder-wombat",episode:8,genre:"nonfiction",subgenre:"science",themes:v,ladderLevel:8,expectedMinutes:9,stretchEligible:!0,glossary:[m("nectar","A sweet liquid flowers make."),m("pollen","A powder flowers use to make seeds."),m("ultraviolet","A kind of light people cannot see.")],talkAbout:"Bees tell other bees where to go. How do people share a useful find without pushing?",comprehension:[p("What do flowers offer bees?",[["food","Nectar and pollen","🌸"],["rocks","Rocks","🪨"],["snow","Snow","❄️"]],"food","recall"),p("What does the waggle dance tell?",[["way","The way and about how far","💃"],["name","The flower's name","🏷️"],["time","What year it is","📅"]],"way","inference")],script:`
# page
garden wombat,dot
Dot: How does a bee find a flower so fast?
Wombat: Flowers advertise. They use color, shape, and smell.

# page
garden wombat
caption: Many flowers also have ultraviolet marks.
Wombat: People cannot see that light, but bees can.

# page
meadow wombat,dot
Dot: The marks point toward the middle.
Wombat: That is where the nectar and the pollen are.

# page
garden wombat
caption: A bee drinks nectar and carries pollen on her legs.
Dot: The next flower may use that pollen to make seeds.

# page
meadow wombat,dot
Wombat: When she finds a rich patch, she flies home.
Dot: Home is the hive, full of other bees.

# page
burrow wombat
caption: In the hive she does a waggle dance.
Wombat: The waggle shows the direction of the flowers.

# page
garden wombat,dot
Dot: How do the others read distance?
Wombat: A longer waggle means the patch is farther away.

# page
meadow wombat
caption: The dance is a map made of movement.
Dot: No words, but the news still spreads.

# page
garden wombat,dot
Wombat: Bees can also learn which colors paid off today.
Dot: They skip empty blooms and return to the good ones.

# page
sky wombat
caption: Wind, rain, and time of day change the search.
Wombat: A flower that fed them at noon may close by dusk.

# page
garden wombat,dot
Dot: So finding flowers is senses plus a shared dance.
Wombat: And the plants get help making seeds.

# page
meadow wombat,dot
caption: They watched a bee vanish into a yellow bloom, then head off.
Wombat: If you plant flowers, you give that search a place to land.
`}),g({id:"wombat-moon",title:"Why Does the Moon Change Shape?",seriesId:"wonder-wombat",episode:9,genre:"nonfiction",subgenre:"science",themes:["science","sky"],ladderLevel:9,expectedMinutes:10,stretchEligible:!1,glossary:[m("crescent","A thin curved slice of light."),m("phase","The shape of the lit moon we can see."),m("reflects","Bounces light instead of making it.")],talkAbout:"The moon stays round. Sketch it once this week and again a few nights later. What changed?",comprehension:[p("Does the moon make its own light?",[["no","No. It reflects sunlight","🌙"],["yes","Yes. It is a lamp","💡"],["fire","Yes. It is on fire","🔥"]],"no","recall"),p("Why does the shape seem to change?",[["half","We see a different amount of the lit half","🌓"],["bite","Something bites it","🍪"],["melt","It melts each night","💧"]],"half","inference")],script:`
# page
moon wombat,dot
Dot: Last week the moon was a thin crescent. Tonight it is fatter.
Wombat: The moon did not change into a new object. We call each look a phase.

# page
sky wombat
caption: The moon does not make its own light.
Wombat: It reflects sunlight. One half is lit, and one half is dark.

# page
moon wombat,dot
Dot: So the moon is round the whole time?
Wombat: Yes. A ball does not become a banana. Our view changes.

# page
sky wombat
caption: The moon travels around Earth.
Dot: As it moves, we see more or less of the lit half.

# page
meadow wombat,dot
Wombat: In a crescent phase, we see only a slim edge of the day side.
Dot: A full moon means we face the whole lit half.

# page
moon wombat
caption: Wombat held a ball and a lamp in a dark room.
Dot: When I stood to the side, the lit part looked like a crescent.

# page
burrow wombat,dot
Wombat: When the ball was opposite the lamp from me, I saw a full face.
Dot: Nothing ate the ball. I just moved my eyes.

# page
sky wombat
caption: Clouds can hide a phase, but they do not reshape the moon.
Wombat: You may need a few clear nights to notice the change.

# page
moon wombat,dot
Dot: Does Earth make moon phases on purpose?
Wombat: No one plans it. It is light, a ball, and a moving view.

# page
meadow wombat
caption: They drew tonight's phase and left room for the next one.
Dot: I will check again in three nights.

# page
sky wombat,dot
Wombat: If the bright part is growing, we are heading toward full.
Dot: If it is shrinking, we are heading toward a thin crescent.

# page
moon wombat,dot
caption: The same round moon sat in the sky, half in sunlight they could not fully see.
Wombat: A new shape on the calendar is an old ball in a new view.
`}),g({id:"wombat-day",title:"Why Do We Have Day and Night?",seriesId:"wonder-wombat",episode:10,genre:"nonfiction",subgenre:"science",themes:v,ladderLevel:9,expectedMinutes:10,stretchEligible:!0,glossary:[m("spins","Turns around a center."),m("axis","The line a planet spins around."),m("horizon","The line where the sky seems to meet the land.")],talkAbout:"The sun is not racing around Earth each day. What do you notice about shadows from morning to evening?",comprehension:[p("What causes day and night?",[["spin","Earth spins","🌍"],["run","The sun runs around us each day","🏃"],["lamp","Someone switches a sky lamp","💡"]],"spin","recall"),p("Why does the sun seem to move?",[["turn","We turn and the view changes","🔄"],["pull","Clouds pull the sun","☁️"],["hide","The moon hides it on purpose","🌙"]],"turn","inference")],script:`
# page
meadow wombat,dot
Dot: The sun seems to rise, cross the sky, and slip under the horizon.
Wombat: It looks that way because Earth spins.

# page
sky wombat
caption: Earth turns around an axis, an imaginary line through the poles.
Wombat: One full turn takes about one day.

# page
meadow wombat,dot
Dot: So the sun is not sprinting around us?
Wombat: No. We are the ones turning. The sun stays the center of that story.

# page
burrow wombat
caption: Wombat stuck a pin in a fruit and spun it by a lamp.
Dot: The pin side went bright, then dark, then bright again.

# page
sky wombat,dot
Wombat: The side facing the sun has day.
Dot: The side facing away has night.

# page
meadow wombat
caption: Sunrise is your place turning into the light.
Wombat: Sunset is your place turning out of it.

# page
sky wombat,dot
Dot: Why do shadows grow long in the evening?
Wombat: The sun is low near the horizon, so light skims the ground.

# page
meadow wombat
caption: At noon the light comes from higher up, and shadows shrink.
Dot: I can mark a stick's shadow to watch the spin.

# page
burrow wombat,dot
Wombat: People long ago learned this by careful watching.
Dot: A wrong first idea was that the sun raced around a still Earth.

# page
sky wombat
caption: That idea matched the view, but the view can fool you.
Wombat: Careful tests showed that Earth turns.

# page
meadow wombat,dot
Dot: Night is not a blanket someone pulls.
Wombat: It is your half of Earth facing away from the sun for a while.

# page
sky wombat,dot
caption: They watched the light leave the hill and knew it would return.
Wombat: Day and night are a spin you can trust.
`})],W={pipeline:"house-svg",notes:"House-style SVG character kits and backgrounds. Keep every word in the text layer."};function I(e,a,t,o){return{id:e,kind:a,text:t,speaker:o}}function A(e,a,t,o){return{prompt:e,options:a.map(([e,a,t])=>({id:e,label:a,emoji:t})),answerId:t,type:o}}function D(e){return{ageFloor:8,language:"en",status:"reviewed",sample:!0,art:W,source:e.source??function(e,a={}){return{origin:e,license:"Original sample text written for Mindstrong Reading Champ.",attribution:"Original Reading Champ sample.",nc:!1,sa:!1,verifiedBy:"MVP seed — not a legal review",verifiedOn:"2026-10-11",...a}}("original"),...e}}let M=(e,a)=>({word:e,definition:a}),S=[...k,...T,...y,D({id:"comet-quiet",title:"The Quiet Planet",seriesId:"captain-comet",episode:1,genre:"fiction",subgenre:"mystery",themes:["space","teamwork"],ladderLevel:6,expectedMinutes:5,stretchEligible:!0,glossary:[M("planet","A world that travels around a star."),M("beacon","A light that calls for help.")],talkAbout:"Pip felt scared and still chose to help. What helps you be brave?",comprehension:[A("What did Comet and Pip find?",[["beacon","A blinking beacon","💡"],["cake","A cake","🎂"],["map","A paper map","🗺️"]],"beacon","recall"),A("Why do they stay together?",[["help","Someone may need help","🤝"],["race","They want to race","🏁"],["sleep","They want to nap","😴"]],"help","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"space",characters:["comet","pip"],bubbles:[I("a1","speech","Pip, this planet is very quiet.","Comet"),I("a2","speech","No lights. Did everyone leave?","Pip")]},{id:"b",scene:"space",characters:["comet","pip"],bubbles:[I("b1","caption","A small beacon blinked by the rocks."),I("b2","speech","Someone may need help.","Comet")]}]},{id:"p2",panels:[{id:"c",scene:"space",characters:["pip","comet"],bubbles:[I("c1","speech","I feel a bit scared, but I trust you.","Pip"),I("c2","speech","We go slow, and we stay together.","Comet")]},{id:"d",scene:"space",characters:["comet"],bubbles:[I("d1","caption","The beacon flashed one more time."),I("d2","speech","Next time we find who called.","Comet")]}]}]}),D({id:"comet-signal",title:"Signal in the Dark",seriesId:"captain-comet",episode:2,genre:"fiction",subgenre:"mystery",themes:["space","teamwork"],ladderLevel:8,expectedMinutes:6,stretchEligible:!0,glossary:[M("hatch","A small door on a ship or a rock."),M("pinch","In a pinch means you are stuck and need a plan."),M("budge","To move, even a little.")],talkAbout:"The crew was in a pinch. What is a fair way to share when something is running low?",comprehension:[A("What did the idiom in a pinch mean here?",[["stuck","They might get stuck","🛟"],["snack","They wanted a snack","🍪"],["song","They sang a song","🎵"]],"stuck","inference"),A("What answered Pip?",[["tap","A tap from inside","🚪"],["bird","A bird","🐦"],["rain","Rain","🌧️"]],"tap","recall"),A("What did Comet share?",[["air","The air tank","🫧"],["cake","A cake","🎂"],["map","A treasure map","🗺️"]],"air","recall")],pages:[{id:"p1",panels:[{id:"a",scene:"space",characters:["comet","pip"],bubbles:[I("a1","narration","Captain Comet followed the blink across the dark rocks.")]},{id:"b",scene:"space",characters:["pip","comet"],bubbles:[I("b1","speech","We are in a pinch if the air runs low.","Pip"),I("b2","speech","Then we share the tank and keep looking.","Comet")]},{id:"c",scene:"space",characters:["comet"],bubbles:[I("c1","narration","A hatch sat shut under a drift of dust.")]}]},{id:"p2",panels:[{id:"d",scene:"space",characters:["pip","comet"],bubbles:[I("d1","narration","Pip pulled, but the hatch did not budge."),I("d2","speech","Three taps. Then we wait.","Comet")]},{id:"e",scene:"space",characters:["pip"],bubbles:[I("e1","speech","I hear a tap back. Someone is inside!","Pip"),I("e2","narration","The signal stopped, and the rocks went still.")]}]}]}),D({id:"timehop-train",title:"The First Passenger Train",seriesId:"time-hop",episode:1,genre:"nonfiction",subgenre:"history",themes:["history","trains"],ladderLevel:7,expectedMinutes:5,stretchEligible:!0,glossary:[M("passenger","A person who rides, but does not drive."),M("carriages","The cars that people sat in."),M("engine","The machine that pulled the train."),M("families","People who belong together, like parents and children.")],talkAbout:"The train was exciting and a little scary. What new thing felt like both to you?",comprehension:[A("What did Asha and Rafi visit?",[["train","An early train","🚂"],["rocket","A rocket","🚀"],["boat","A boat","⛵"]],"train","recall"),A("How did people feel about it?",[["both","Amazed and scared","😮"],["only","Only sleepy","😴"],["none","Nobody noticed","🙈"]],"both","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"time",characters:["asha","rafi"],bubbles:[I("a1","speech","We hopped back to the first passenger train.","Asha"),I("a2","caption","It was in England, long ago.")]},{id:"b",scene:"train",characters:["asha","rafi"],bubbles:[I("b1","speech","People were amazed, but some were scared.","Rafi"),I("b2","caption","The engine pulled open carriages.")]},{id:"c",scene:"train",characters:["asha"],bubbles:[I("c1","speech","A train can carry many people at once.","Asha")]}]},{id:"p2",panels:[{id:"d",scene:"train",characters:["rafi"],bubbles:[I("d1","speech","This train changed how far families could go.","Rafi"),I("d2","caption","Towns grew around the new tracks.")]},{id:"e",scene:"time",characters:["asha"],bubbles:[I("e1","speech","Speed was new, so rules kept people safe.","Asha"),I("e2","caption","Asha wrote it all in her notebook.")]}]}]}),D({id:"timehop-letter",title:"Two Views of the Same Train",seriesId:"time-hop",episode:2,genre:"nonfiction",subgenre:"history",themes:["history","fairness"],ladderLevel:9,expectedMinutes:6,stretchEligible:!0,glossary:[M("porter","A worker who helped people with bags."),M("history","The story of what people did long ago."),M("different","Not the same."),M("everyone","All of the people."),M("timeline","A simple line that shows what happened first and next.")],talkAbout:"The guard and the porter felt differently. How can two people both be telling the truth?",comprehension:[A("Who missed the quiet road?",[["guard","The station guard","💂"],["mouse","The mouse","🐭"],["wombat","Wombat","🐾"]],"guard","recall"),A("Why was the porter glad?",[["sister","He could visit his sister","💌"],["race","He won a race","🏁"],["gold","He found gold","💰"]],"sister","inference"),A("What idea are Asha and Rafi holding?",[["both","Both views can matter","🤝"],["one","Only the loudest view","📣"],["none","Stories do not matter","🚫"]],"both","inference")],pages:[{id:"p1",panels:[{id:"a",scene:"time",characters:["asha","rafi"],bubbles:[I("a1","narration","Asha and Rafi found a letter from a station guard.")]},{id:"b",scene:"train",characters:["asha","rafi"],bubbles:[I("b1","thought","The new train is loud, and I miss the quiet road.","Guard"),I("b2","speech","He sounds upset. The change feels unfair to him.","Asha")]},{id:"c",scene:"train",characters:["rafi"],bubbles:[I("c1","narration","Rafi read a second note from a young porter."),I("c2","speech","The train lets me visit my sister in another town.","Porter")]}]},{id:"p2",panels:[{id:"d",scene:"timeline",characters:["asha","rafi"],bubbles:[I("d1","narration","Two people saw one change in two different ways."),I("d2","speech","Fair does not mean everyone feels glad at first.","Asha")]},{id:"e",scene:"timeline",characters:["rafi"],bubbles:[I("e1","speech","We can hold both stories. Each one is true for them.","Rafi"),I("e2","caption","The timeline showed the guard, then the porter.")]},{id:"f",scene:"time",characters:["asha","rafi"],bubbles:[I("f1","speech","History is bigger when we listen to both.","Asha"),I("f2","narration","They hopped home with the letter held tight.")]}]}]})],x={book:"Pages with a story or facts.",glow:"A soft light.",door:"A way in or out.",friend:"Someone you like and trust.",sky:"The blue or grey space above you.",light:"What lets you see.",train:"A line of cars that rolls on tracks.",lion:"A big wild cat.",mouse:"A very small animal.",help:"To make something easier for someone.",story:"Something that happens, told in words.",blue:"The color of a clear daytime sky.",water:"The clear liquid you drink.",sound:"What you hear.",storm:"Strong wind, rain, and sometimes thunder.",flash:"A sudden bright light.",tree:"A tall plant with a trunk.",letter:"A written note to someone.",change:"When something becomes different.",fair:"When people are treated with care.",both:"The two of them, not just one.",small:"Little in size.",free:"Able to go. Not trapped.",planet:"A world that travels around a star.",quiet:"With very little sound.",scared:"Feeling fear.",brave:"Ready to try, even with a wobble.",kind:"Gentle and helpful."};function L(e){return{id:e.id,title:e.title,seriesId:e.seriesId,episode:e.episode,genre:e.genre,subgenre:e.subgenre,themes:e.themes,ladderLevel:e.ladderLevel,status:e.status,stretchEligible:e.stretchEligible,expectedMinutes:e.expectedMinutes,talkAbout:e.talkAbout,wordCount:o(e),sample:e.sample}}function H(e){return S.filter(a=>a.seriesId===e).sort((e,a)=>e.episode-a.episode)}e.s(["catalog",0,function(){return S.filter(e=>"reviewed"===e.status).map(L)},"defineWord",0,function(e,a=[]){let t=i(e);if(!t)return null;let o=a.find(e=>e.word.toLowerCase()===t);if(o)return o.definition;for(let e of S){let a=e.glossary.find(e=>e.word.toLowerCase()===t);if(a)return a.definition}for(let e of s){let a=e.glossary.find(e=>e.word.toLowerCase()===t);if(a)return a.definition}return x[t]??null},"nextEpisode",0,function(e){return H(e.seriesId).find(a=>a.episode===e.episode+1)},"seriesById",0,function(e){return r.find(a=>a.id===e)},"storiesInSeries",0,H,"storyById",0,function(e){return S.find(a=>a.id===e)},"toMeta",0,L],6654)}]);